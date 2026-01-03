import { BaseCRUDService } from "./base-service";
import { Thing } from "./base-thing";

export class BaseCRUDPage<T extends Thing> {
//      ngOnInit(): void {
//     this.refreshdata();
//   }
  dataService! : BaseCRUDService<T>;
  data: T[] = [];
  state: string = 'list';
  item!: T 
  /* {
    id: 0,
    title: '',
    writer: '',
    publisher: '',
    price: 0
  };*/
  refreshdata() {
    this.data = this.dataService.list();
  }
  add() {
    this.state = 'form';
    this.addprepair();
  }
  addprepair(){

  }
  edit(i: T) {
    this.state = 'edit';
    this.item = { ...i };
  }
  remove(i: T) {
    this.item = { ...i };
    this.state = 'remove';
  }
  cancel() {
    this.state = 'list';
  }
  save() {
    if (this.state == 'form') {
      this.dataService.add(this.item);
    }
    else if (this.state == 'edit') {
      this.dataService.update(this.item);
    }
    else if (this.state == 'remove') {
      this.dataService.remove(this.item);
    }
    this.refreshdata();
    this.state = 'list';

  }

}