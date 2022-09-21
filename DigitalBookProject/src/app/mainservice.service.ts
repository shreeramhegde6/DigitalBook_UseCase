import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MainserviceService {

  constructor(private http:HttpClient,private _route:Router) { }

_loginUrl="https://localhost:44396/api/Login/authorlogin";
_regUrl="https://localhost:44396/api/Login/register-author";

loginUser(login:any){
  return this.http.post(this._loginUrl,login);
}

}
