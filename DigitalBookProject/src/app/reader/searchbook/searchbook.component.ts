import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CreateBook } from 'src/app/author/creatbook/createbookModel';
import { SearchBookModel } from './searchbookModel';

@Component({
  selector: 'app-searchbook',
  templateUrl: './searchbook.component.html',

})
export class SearchbookComponent implements OnInit {

   FormData:SearchBookModel=new SearchBookModel();
  SearchModels:Array<SearchBookModel>=new Array<SearchBookModel>();
  isEdit:boolean=false;
  authorEmail:string='shree@a.com'
  constructor(private http:HttpClient) {}
  

    
  GetStatus(){
    //url:any="https://localhost:44396/api/Author/getbook?"+this.authorEmail;
    this.http.get("https://localhost:44396/api/Author/getbook?cname="+this.authorEmail).subscribe(res=>this.Success(res),res=>console.log(res));
  }


  ngOnInit(){

    this.GetStatus();

    
  }

  searchBook() {

 

    var UpdateformElements={
     
      Title:this.FormData.title,
      
      
      
      Publisher:this.FormData.publisher,
      Author:this.FormData.author,
      Release:this.FormData.release,
     
    };


   
      
      this.http.put("https://localhost:44396/api/Author/bookupdate", UpdateformElements).subscribe(res => this.Success(res), res => console.log(res))
    
    
  }
  
  BuyBook(input:any){}
  bookBuy(input:any){
    
  }

     Success(input: any) {
    console.log(input);
     this.SearchModels = input;
   }

}
