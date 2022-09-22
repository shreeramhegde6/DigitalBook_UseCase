import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatbookComponent } from './author/creatbook/creatbook.component';
import { HomeComponent } from './header/home/home.component';
import { LoginComponent } from './header/login/login.component';
import { SignupComponent } from './header/signup/signup.component';
import { SearchbookComponent } from './reader/searchbook/searchbook.component';

const routes: Routes = [
  {path:'',component : LoginComponent},
  {path:'createbook',component : CreatbookComponent},
  {path : 'signup', component : SignupComponent},
   {path:'home',component : LoginComponent},
   {path:'searchbook',component : SearchbookComponent},
   
  // {path : 'signupadd', loadChildren :()=>import('../signup/signup.module').then(m=>m.SignupModule)}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
