import { Injectable } from '@angular/core';
import { Bookitem } from './books-page';
import { BaseCRUDService } from '../../../+shared/+base/base-service';

@Injectable({
  providedIn: 'root',
})
export class BooksService extends BaseCRUDService<Bookitem>{
  override data: Bookitem[] = [
    { id: 1, title: 'برنامه نویسی', writer: 'عباس کریمی', publisher: 'انتشارات گلبرگ', price: 10000 },
    { id: 2, title: 'داده کاوی', writer: 'سپیده مهرجو', publisher: 'انشارات پرتغال', price: 1000 },
    { id: 3, title: 'امنیت شبکه', writer: 'مهران یوسفی', publisher: 'انتشارات گلبرگ', price: 120000 },
    { id: 4, title: 'پایگاه داده', writer: 'مهدی رحمانی', publisher: 'انتشارات مهر', price: 50000 },
    { id: 5, title: 'مبتنی بر وب', writer: 'فاطمه دارابی', publisher: 'انتشارات مهر', price: 60000 },
  ];
  override edit(destination: Bookitem, source: Bookitem): void {
    destination.title=source.title;
    destination.writer=source.writer;
    destination.publisher=source.publisher;
    destination.price=source.price;
  }
}
