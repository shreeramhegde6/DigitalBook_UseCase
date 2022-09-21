import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { MainserviceService } from 'src/app/mainservice.service';
import { UserModel } from './usermodel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http:HttpClient,private _router:Router,private _service:MainserviceService) { }
  UserData:UserModel=new UserModel();
  correctLogin:boolean=false;
  wrong:boolean=false;
  author:boolean=false;
  reader:boolean=false;
  loadbtn:boolean=true;


  



  ngOnInit(): void {
  }
 
  loadauthor(){
    this.author=true;
    

  }
  loadread(){
    this.reader=true;
    

  }

  loginUser(){

   

    this._service.loginUser(this.UserData).subscribe(
      res=>{
       // localStorage.setItem('token',res.token);
       this.correctLogin=true;
       this.wrong=false;
       sessionStorage.setItem('token',"logged");
        
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
