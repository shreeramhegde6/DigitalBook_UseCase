import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { UserModel } from './usermodel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http:HttpClient,private _router:Router) { }
  UserData:UserModel=new UserModel();


  



  ngOnInit(): void {
  }

  loginUser(){

    this.http.post("https://localhost:44396/api/Login/login",this.UserData).subscribe(
      res=>{
        alert("loggedIn");
      },
      res=>{
        alert(res)
      }
    );
  }

}
