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
  correctLogin:boolean=false;
  wrong:boolean=false;


  



  ngOnInit(): void {
  }
 

  loginUser(){

    this.http.post("https://localhost:44396/api/Login/login",this.UserData).subscribe(
      res=>{
       // localStorage.setItem('token',res.token);
       this.correctLogin=true;
       this.wrong=false;
       sessionStorage.setItem('token',"logged");
       //alert("Success")
      // this._router.navigate(['createbook']);
        
        
      },
      res=>{
        this.wrong=true;
        //alert(res)
      }
    );
  }
  createNew(){
    this._router.navigate(['signup']);
  }

}
