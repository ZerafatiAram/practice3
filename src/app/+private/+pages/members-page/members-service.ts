import { Injectable } from '@angular/core';
import { Members } from './members-page';

@Injectable({
  providedIn: 'root',
})
export class MembersService {
     private data: Members[] = [
      {id:1,name:'علی',lastname:'سهرابی',tel:'09372225454',address:'استان همدان شهر همدان'},
      {id:2,name:'حمید',lastname:'محمدی',tel:'09372225454',address:'استان همدان شهر همدان'},
      {id:3,name:'فاطمه',lastname:'امینی',tel:'09372225454',address:'استان همدان شهر همدان'},
      {id:4,name:'کیمیا',lastname:'یوسفی',tel:'09372225454',address:'استان همدان شهر همدان'},
    ];
    
    list(){
      return [...this.data];
    }
    add(members:Members){
       this.data.push(members);
    }
}
