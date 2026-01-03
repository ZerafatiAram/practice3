import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'my-crud',
  imports: [],
  templateUrl: './base-crudcomponent.html',
  styleUrl: './base-crudcomponent.scss',
})
export class BaseCRUDComponent {
  @Input() mystate:string='list';
  @Output() onAdd=new EventEmitter;
  @Output() onCancel=new EventEmitter;
} 
