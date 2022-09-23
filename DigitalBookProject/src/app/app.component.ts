import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

})
export class AppComponent implements OnInit {
  title = 'DigitalBookProject';

  constructor(private _router:Router) {
 
    
  }

  ngOnInit() : void {

  }

  logged(): boolean{
    if (sessionStorage.getItem('token') == null){
      return false;
    }
    
      return true;
    
    
  }
  logOut(){
    if(sessionStorage.getItem('token')!=null){
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('userNames');
      this._router.navigate(['']);
    }
  }
}
