import { Component, inject, OnInit } from '@angular/core';
import { MembersService } from './members-service';
import { FormsModule } from '@angular/forms';
import { Thing } from '../../../+shared/+base/base-thing';
import { BaseCRUDPage } from '../../../+shared/+base/base-page';

@Component({
  selector: 'app-members-page',
  imports: [FormsModule],
  templateUrl: './members-page.html',
  styleUrl: './members-page.scss',
})
export class MembersPage extends BaseCRUDPage<Members> implements OnInit {
  ngOnInit(): void {
    this.refreshdata();
  }
  override dataService = inject(MembersService);
  
  override addprepair(): void {
    this.item={
      name:'',
      lastname:'',
      tel:'',
      address:''
    };
  }
}
export interface Members extends Thing {
  name: string;
  lastname: string;
  tel: string;
  address: string;
}
