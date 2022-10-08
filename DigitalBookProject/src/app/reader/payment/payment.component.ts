import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewModel } from '../viewbook/viewmodel';
import { PaymentModel } from './paymentmodel';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  

 

  currentUser:any=sessionStorage.getItem('userNames');
  readingInv:boolean=false;
  priceId:any;
  invoID:any;
  deleteId:any;

  dateId:any;
  returnbool:boolean=false;
  returnboolfail:boolean=false;
  constructor(private http:HttpClient,private _rout:Router) {}

  ngOnInit(): void {
    this.getpaymentInfo();

  }
  gridData:Array<any> =new Array<any>();
  SearchModels:Array<PaymentModel>=new Array<PaymentModel>();
  imageUrl:string="https://localhost:44396/";

  getpaymentInfo(){
    //=this.currentUser.toString();
    //this.http.get("https://localhost:44396/api/Reader/viewbook?readername="+this.currentUser).subscribe(res=>this.postSuccess(res),res=>console.log(res));
    
    this.http.get("https://localhost:44363/api/gateway/Reader/getinvoice?readername="+this.currentUser).subscribe(res=>this.postSuccess(res),res=>console.log(res));
    
  }

  selectedGrid(input:any,inprice:any,inputdate:any){
    debugger;
    //this.SearchModels=input;
    this.invoID=input;
    this.priceId=inprice;
    this.dateId=inputdate;

    this.readingInv=true;
    this.returnbool=false;

  }
  postSuccess(input:any){
    
this.SearchModels=input;

console.log(input);

  }

}
