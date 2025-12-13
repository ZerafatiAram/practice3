import { Routes } from '@angular/router';
import { LoginPage } from './+public/+pages/login-page/login-page';
import { PrivateTemplate } from './+private/+pages/private-template/private-template';
import { privateGuard } from './+shared/private-guard';
import { DashboredPage } from './+private/+pages/dashbored-page/dashbored-page';
import { BooksPage } from './+private/+pages/books-page/books-page';
import { MembersPage } from './+private/+pages/members-page/members-page';
import { BorrowsPage } from './+private/+pages/borrows-page/borrows-page';
import { ReportsPage } from './+private/+pages/reports-page/reports-page';

export const routes: Routes = [
    {path:'login',component:LoginPage},
    {path:'private',canActivate:[privateGuard],component:PrivateTemplate,children:[
        {path:'dashbored',component:DashboredPage},
        {path:'books',component:BooksPage},
        {path:'members',component:MembersPage},
        {path:'borrows',component:BorrowsPage},
        {path:'reports',component:ReportsPage},
        {path:'',redirectTo:'dashbored',pathMatch:'prefix'},
        {path:'**',redirectTo:'dashbored'}
    ]},
    {path:'',redirectTo:'login',pathMatch:'full'},
    {path:'**',redirectTo:'login'}
];
