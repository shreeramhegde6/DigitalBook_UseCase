import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './header/login/login.component';
import { SignupComponent } from './header/signup/signup.component';

const routes: Routes = [
  {path:'',component : LoginComponent},
  {path : 'signup', component : SignupComponent},
   {path:'home',component : LoginComponent},
   
  // {path : 'signupadd', loadChildren :()=>import('../signup/signup.module').then(m=>m.SignupModule)}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
