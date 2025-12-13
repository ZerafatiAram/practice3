import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  imports: [FormsModule],
  templateUrl: './login-page.html',
  styleUrl: './login-page.scss',
})
export class LoginPage {
  router=inject(Router);
  loginform:LoginForm={
    username:'',
    password:'',
    keepMe:false
  };
  massege:string='';
  check(){
    if (this.loginform.username=='kosar'&& this.loginform.password=='2390') {
      sessionStorage.setItem('token','dkmkimjeikdjikmkmkmj8258292');
      if(this.loginform.keepMe==true){
         localStorage.setItem('token','dkmkimjeikdjikmkmkmj8258292');
      }
      this.router.navigateByUrl('/private');
    } else {
      this.massege=' نام کاربری یا پسورد غلط است'
    }
  }
}

export interface LoginForm{
  username:string;
  password:string;
  keepMe:boolean;
}