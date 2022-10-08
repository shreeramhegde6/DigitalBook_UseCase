import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from '../login/usermodel';
import { SignUpModel } from './signupmodel';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signUpModel:SignUpModel=new SignUpModel();
  regDataModel:UserModel=new UserModel();
  regReadDataModel:UserModel=new UserModel();
  regAsreader:boolean=false;
  notification:boolean=false;

  constructor(private http:HttpClient, private _router:Router) { }

  ngOnInit(): void {
  }
  registerUser(){
    var userObject={
      userName:this.regDataModel.userName,
      password:this.regDataModel.password
    };
    this.http.post("https://localhost:44363/api/gateway/Login/register-author",userObject).subscribe(
      res=>{
        this.notification=true;
        //alert("UserRegisterd Successfully!  Please Click Ok to Login with New User credentials");
      //this._router.navigate(['']);
    },
      res=>{console.log(res);}
    );

  }

  //RegisterReader part
  regAsreaderbtn(){
    this.regAsreader=true;

  }

  registerReader(){
    var readerObject={
      userName:this.regDataModel.userName,
      password:this.regDataModel.password
    };
    this.http.post("https://localhost:44363/api/gateway/Reader/register-reader",readerObject).subscribe(
      res=>{
        this.notification=true;
       // alert("ReaderRegisterd Successfully!  Please Click Ok to Login with New User credentials");
      //this._router.navigate(['']);
    },
      res=>{console.log(res);}
    );

  }

}
