import { Component, inject, OnInit } from '@angular/core';
import { BooksService } from './books-service';
import { FormsModule } from '@angular/forms';
import { Thing } from '../../../+shared/+base/base-thing';

@Component({
  selector: 'app-books-page',
  imports: [FormsModule],
  templateUrl: './books-page.html',
  styleUrl: './books-page.scss',
})
export class BooksPage implements OnInit {
  ngOnInit(): void {
    this.refreshdata();
  }
  bookservice = inject(BooksService);
  data: Bookitem[] = [];
  state: string = 'list';
  item: Bookitem = {
    id: 0,
    title: '',
    writer: '',
    publisher: '',
    price: 0
  };
  refreshdata() {
    this.data = this.bookservice.list();
  }
  add() {
    this.state = 'form';
    this.item = {
      id: 0,
      title: '',
      writer: '',
      publisher: '',
      price: 0
    };
  }
  edit(item: Bookitem) {
    this.state = 'edit';
    this.item = { ...item };
  }
  remove(item: Bookitem) {
    this.item = { ...item };
    this.state = 'remove';
  }
  cancel() {
    this.state = 'list';
  }
  save() {
    if (this.state == 'form') {
      this.bookservice.add(this.item);
    }
    else if (this.state == 'edit') {
      this.bookservice.update(this.item);
    }
    else if (this.state == 'remove') {
      this.bookservice.remove(this.item);
    }
    this.refreshdata();
    this.state = 'list';

  }
}
export interface Bookitem extends Thing {
  title: string;
  writer: string;
  publisher: string;
  price: number;
}
