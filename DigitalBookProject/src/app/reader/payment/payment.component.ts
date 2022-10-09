import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewModel } from '../viewbook/viewmodel';
import { PaymentModel } from './paymentmodel';

const pdfMakeX = require('pdfmake/build/pdfmake.js');
const pdfFontsX = require('pdfmake-unicode/dist/pdfmake-unicode.js');
pdfMakeX.vfs = pdfFontsX.pdfMake.vfs;
import * as pdfMake from 'pdfmake/build/pdfmake';

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

  //PDFGenerator
  printGrid(inID:any,inPrice:any,inDate:any){

  }
generatePDF(action = 'open') {    
        
  let docDefinition = {      
      header: 'C#Corner PDF Header',      
      content: 'Sample PDF generated with Angular and PDFMake for C#Corner Blog'      
    };    
  
  if(action==='download'){    
    pdfMake.createPdf(docDefinition).download();    
  }else if(action === 'print'){    
    pdfMake.createPdf(docDefinition).print();          
  }else{    
    pdfMake.createPdf(docDefinition).open();          
  }    
  
}    

///////////////////////
//working
////////
generatePDF1(inID:any,inPrice:any,inDate:any) {  
  let docDefinition:any = {  
    content: [  
        // Previous configuration  
        {  
            columns: [  

                [  
                  {  
                    text: 'DigiBook Private LTD',  
                    fontSize: 16,  
                    alignment: 'center',  
                    color: '#3e32a8'  
                  },  
                  {  
                    text: 'INVOICE',  
                    fontSize: 20,  
                    bold: true,  
                    alignment: 'center',  
                    decoration: 'underline',  
                    color: 'skyblue'  
                  } ,
                    {  
                        text: "",  
                       bold: true  
                    },  
                    { text: "User Email :",
                      bold:true 
                    },  
                    { text: this.currentUser},

                    { text: "Total Amount :" ,bold:true},  
                    { text: inPrice +".RS"} , 

                    { text: "Purchase Time :" ,bold:true},  
                    { text: inDate } , 

                    { text: "Invoice N.o :" ,bold:true},  
                    { text: "DGB-001A-"+inID } , 


                ],
                [  
                  [{ qr: `${this.currentUser}`, fit: '50' }],  
                  //[{ text: 'Signature', alignment: 'right', italics: true }],  
              ],
   
                [  
                    {  
                        text: `Date: ${new Date().toLocaleString()}`,  
                        alignment: 'right'  
                    },  
                    {  
                        text: `Token No : ${((Math.random() * 1000).toFixed(0))}`,  
                        alignment: 'right'  
                    }  
                ]  ,
 
            ]  
        },  
    ] 
    // Common Styles  
}   
      
  pdfMake.createPdf(docDefinition).open();  
}


}
