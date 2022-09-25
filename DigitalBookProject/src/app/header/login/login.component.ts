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
    sessionStorage.clear();
  }
 
  loadauthor(){
    this.author=true;
    

  }
  loadread(){
    this.reader=true;
    

  }


//readerLogin
loginReader(){

  var userObject={
    userName:this.UserData.userName,
    password:this.UserData.password
  };
 

  this._service.loginReader(userObject).subscribe(
    res=>{
     // localStorage.setItem('token',res.token);
     this.correctLogin=true;
     this.wrong=false;
     sessionStorage.setItem('token',"logged");
     sessionStorage.setItem('userNames',this.UserData.userName);
     
      
    },
    res=>{
      this.wrong=true;
      //alert(res);
    }
  );
}
//readerLogincmplt


  loginUser(){

    var userObject={
      userName:this.UserData.userName,
      password:this.UserData.password
    };
   

    this._service.loginUser(userObject).subscribe(
      res=>{
       // localStorage.setItem('token',res.token);
       this.correctLogin=true;
       this.wrong=false;
       sessionStorage.setItem('token',"logged");
       sessionStorage.setItem('userNames',this.UserData.userName);
       
        
      },
      res=>{
        this.wrong=true;
        //alert(res);
      }
    );
  }
  createNew(){
    this._router.navigate(['signup']);
  }
  reloadLogin(){
    window.location.reload();
  }

}
