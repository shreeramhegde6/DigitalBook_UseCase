import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    SignupComponent,
    LoginComponent
  ],
  imports: [
    RouterModule,
    FormsModule,BrowserModule
  ]
})
export class HeaderModule { }
