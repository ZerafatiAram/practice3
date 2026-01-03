import { Component, inject, OnInit } from '@angular/core';
import { MembersService } from './members-service';
import { FormsModule } from '@angular/forms';
import { Thing } from '../../../+shared/+base/base-thing';

@Component({
  selector: 'app-members-page',
  imports: [FormsModule],
  templateUrl: './members-page.html',
  styleUrl: './members-page.scss',
})
export class MembersPage implements OnInit {
  ngOnInit(): void {
    this.refreshdata();
  }
  membersService = inject(MembersService);
  data: Members[] = [];
  state: string = 'list';
  item: Members = {
    id: 0,
    name: '',
    lastname: '',
    tel: '',
    address: '',
  };

  refreshdata() {
    this.data = this.membersService.list();
  }
  add() {
    this.state = 'form';
    this.item = {
      id: 0,
      name: '',
      lastname: '',
      tel: '',
      address: '',
    };
  }
  edit(item: Members) {
    this.item = { ...item };
    this.state = 'edit';
  }
  remove(item: Members) {
    this.item = { ...item };
    this.state = 'remove';
  }
  cancel() {
    this.state = 'list';
  }
  save() {
    if (this.state == 'form') {
      this.membersService.add(this.item);
    }
    else if (this.state == 'edit') {
      this.membersService.update(this.item);
    }
    else if (this.state == 'remove') {
      this.membersService.remove(this.item);
    }
    this.refreshdata();
    this.state = 'list';
  }
}
export interface Members extends Thing {
  name: string;
  lastname: string;
  tel: string;
  address: string;
}
