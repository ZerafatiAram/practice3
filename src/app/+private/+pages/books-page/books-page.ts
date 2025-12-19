import { Component, inject, OnInit } from '@angular/core';
import { BooksService } from './books-service';
import { FormsModule } from '@angular/forms';

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
  cancel() {
    this.state = 'list';
  }
  save() {
    this.bookservice.add(this.item);
    this.refreshdata();
    this.state = 'list';

  }
}
export interface Bookitem {
  id: number;
  title: string;
  writer: string;
  publisher: string;
  price: number;
}
