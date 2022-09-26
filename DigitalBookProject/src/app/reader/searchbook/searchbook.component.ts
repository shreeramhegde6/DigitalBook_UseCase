import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CreateBook } from 'src/app/author/creatbook/createbookModel';
import { MainserviceService } from 'src/app/mainservice.service';
import { SearchBookModel } from './searchbookModel';

@Component({
  selector: 'app-searchbook',
  templateUrl: './searchbook.component.html',

})
export class SearchbookComponent implements OnInit {

   FormData:SearchBookModel=new SearchBookModel();
  SearchModels:Array<SearchBookModel>=new Array<SearchBookModel>();
  isEdit:boolean=false;
  authorEmail:string='shree@a.com';
  showElements:boolean=false;
  searchFailAlert:boolean=false;
  emptyFill:boolean=false;
  buyEvents:boolean=false;
  booksid:number=0;
  bookprice:string='2900';
  cardNumber:string='';

  userEmail:any=sessionStorage.getItem('userNames');
  //bookValueArray:Array<IterableIterator<SearchBookModel>>=[];

  releaseDate:string='';
  constructor(private http:HttpClient,private _auth:MainserviceService) {}
  

    
  GetStatus(){
    //url:any="https://localhost:44396/api/Author/getbook?"+this.authorEmail;
    this.http.get("https://localhost:44396/api/Author/getbook?cname="+this.authorEmail).subscribe(res=>this.Success(res),res=>console.log(res));
  }


  ngOnInit(){

   // this.GetStatus();

    
  }

  searchBook() {

    this.releaseDate=this.FormData.release.toString();

    var SearchformElements={
     
      Title:this.FormData.title,
      
      
      
      Publisher:this.FormData.publisher,
      Category:this.FormData.category,
      CreationDate:this.releaseDate,
     
    };


   
      
      this.http.post("https://localhost:44396/api/Reader/searchbook", SearchformElements).subscribe(res => { this.Success(res)}, res => {this.searchFail();console.log(res)});
         
    
  }
  
  
  bookBuy(input:any){
    this.buyEvents=true;
    //this.bookValueArray=this.SearchModels.values();

    
  }

     Success(input: any) {
      this.SearchModels = input;

     if(this.SearchModels.length==0){
      this.searchFailAlert=true;
     }
     else{
      console.log(input);
      this.showElements=true;
       this.SearchModels = input;
       this.bookprice=this.SearchModels[0].price;
       this.booksid=this.SearchModels[0].id;

     }

   }

   payFunc(){
     var ModelHolder=this.SearchModels[0];
     var buyRequest={
       BookID:ModelHolder.id,
       Price:ModelHolder.price,
       Contents:ModelHolder.contents,
       Image:ModelHolder.image,
       User:this.userEmail


     };


    this.http.post("https://localhost:44396/api/Reader/buybook", buyRequest).subscribe(res => { this.buySuccess(res)}, res => {this.buyFail(res);console.log(res)});
    


    //alert(this.cardNumber);


   }

   buySuccess(input :any){
     alert(input);
   }
   buyFail(input:any){
     alert(input);
   }

   searchFail(){
    this.emptyFill=true;
     //alert("Nodat found");
   }
   reloadPage(){
    window.location.reload();
  }

}
