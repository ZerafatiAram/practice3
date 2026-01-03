import { Component, inject, OnInit } from '@angular/core';
import { BooksService } from './books-service';
import { FormsModule } from '@angular/forms';
import { Thing } from '../../../+shared/+base/base-thing';
import { BaseCRUDPage } from '../../../+shared/+base/base-page';
import { BaseCRUDComponent } from "../../../+shared/+base/base-crudcomponent/base-crudcomponent";

@Component({
  selector: 'app-books-page',
  imports: [FormsModule, BaseCRUDComponent],
  templateUrl: './books-page.html',
  styleUrl: './books-page.scss',
})
export class BooksPage extends BaseCRUDPage<Bookitem> implements OnInit {
  ngOnInit(): void {
    this.refreshdata();
  }
  override dataService = inject(BooksService);

  override addprepair(): void {
    this.item={
      publisher:'',    
      title:'',
      writer:''
    };
  }
}
export interface Bookitem extends Thing {
  title: string;
  writer: string;
  publisher: string;
  price?: number;
}
