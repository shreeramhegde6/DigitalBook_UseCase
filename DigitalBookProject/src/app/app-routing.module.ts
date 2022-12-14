import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllserviceService } from './allservice.service';
import { CreatbookComponent } from './author/creatbook/creatbook.component';
import { HomeComponent } from './header/home/home.component';
import { LoginComponent } from './header/login/login.component';
import { SignupComponent } from './header/signup/signup.component';
import { PaymentComponent } from './reader/payment/payment.component';
import { SearchbookComponent } from './reader/searchbook/searchbook.component';
import { ViewbookComponent } from './reader/viewbook/viewbook.component';

const routes: Routes = [
  {path:'',component : HomeComponent},
  //{path:'land',component : HomeComponent},
  {path:'createbook',canActivate:[AllserviceService],component : CreatbookComponent},
  {path : 'signup', component : SignupComponent},
   {path:'home',component : LoginComponent},
   {path:'searchbook',canActivate:[AllserviceService],component : SearchbookComponent},
   {path:'viewbook',canActivate:[AllserviceService],component : ViewbookComponent},
   {path:'paymentinfo',canActivate:[AllserviceService],component : PaymentComponent},
   
  // {path : 'signupadd', loadChildren :()=>import('../signup/signup.module').then(m=>m.SignupModule)}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
