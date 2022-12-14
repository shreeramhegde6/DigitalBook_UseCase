import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ISearch } from './Isearch';

@Injectable({
  providedIn: 'root'
})
export class MainserviceService {

  constructor(private http:HttpClient,private _route:Router) { }

//_loginUrl="https://localhost:44396/api/Login/authorlogin";
_loginUrl="https://20.232.23.87/api/gateway/Login/authorlogin";


//_regUrl="https://localhost:44396/api/Login/register-author";
_regUrl="https://20.232.23.87/api/gateway/Login/register-author";


//_loginReaderUrl="https://localhost:44396/api/Reader/readerlogin";
_loginReaderUrl="https://20.232.23.87/api/gateway/Reader/readerlogin";
_searchBookUrl="https://20.232.23.87/api/gateway/Reader/searchbook";

//this.http.post("https://localhost:44396/api/Reader/searchbook", SearchformElements)

loginUser(login:any){
  return this.http.post<any>(this._loginUrl,login);
}

loginReader(login:any){
  return this.http.post(this._loginReaderUrl,login);
}

unblockbook(unblockID:any){
  return this.http.put("https://20.232.23.87/api/Books/book-unblock",unblockID);
}

checkAuth(){
  return !!sessionStorage.getItem('userNames');
}

searchBookservice<Observable>(searchelement:any){
  return this.http.post<Iterable<ISearch>>(this._searchBookUrl,searchelement);

}
}
