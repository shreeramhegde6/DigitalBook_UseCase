import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

})
export class AppComponent implements OnInit {
  title = 'DigitalBookProject';

  readerLogged:boolean=false;


  constructor(private _router:Router) {
 
    
  }

  ngOnInit() : void {
    this.readerLogged=Boolean( sessionStorage.getItem('ReaderLogged'));
    //alert(this.readerLogged);
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
    sessionStorage.removeItem('ReaderLogged');
    localStorage.removeItem('token');
      this._router.navigate(['']);
      window.location.reload();
    }
  }
}
