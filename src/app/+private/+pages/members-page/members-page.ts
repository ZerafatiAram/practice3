import { Component, inject, OnInit } from '@angular/core';
import { MembersService } from './members-service';
import { FormsModule } from '@angular/forms';
import { Thing } from '../../../+shared/+base/base-thing';
import { BaseCRUDPage } from '../../../+shared/+base/base-page';
import { BaseCRUDComponent, Column } from "../../../+shared/+base/base-crudcomponent/base-crudcomponent";

@Component({
  selector: 'app-members-page',
  imports: [FormsModule, BaseCRUDComponent],
  templateUrl: './members-page.html',
  styleUrl: './members-page.scss',
})
export class MembersPage extends BaseCRUDPage<Members> implements OnInit {
  ngOnInit(): void {
    this.refreshdata();
    this.item={
    name:'',
    lastname:'',
    tel:'',
    address:''
    }
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
    columns:Column[]=[
      {field:'id',title:'شناسه'},
      {field:'name',title:'نام'},
      {field:'lastname',title:'نام خانوادگی'},
      {field:'tel',title:'تلفن'},
      {field:'address',title:'آدرس'}
    ];
}
export interface Members extends Thing {
  name: string;
  lastname: string;
  tel: string;
  address: string;
}
