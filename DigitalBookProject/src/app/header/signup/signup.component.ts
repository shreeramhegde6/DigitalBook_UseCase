import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from '../login/usermodel';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  regDataModel:UserModel=new UserModel();
  constructor(private http:HttpClient, private _router:Router) { }

  ngOnInit(): void {
  }
  registerUser(){
    this.http.post("https://localhost:44396/api/Login/register-user",this.regDataModel).subscribe(
      res=>{
        alert("UserRegisterd Successfully!  Please Click Ok to Login with New User credentials");
      this._router.navigate(['']);},
      res=>{alert("Error");}
    );

  }

}
