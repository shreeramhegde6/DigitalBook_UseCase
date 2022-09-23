import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CreateBook } from 'src/app/author/creatbook/createbookModel';

@Component({
  selector: 'app-searchbook',
  templateUrl: './searchbook.component.html',

})
export class SearchbookComponent implements OnInit {

   FormData:CreateBook=new CreateBook();
  CreateBookModels:Array<CreateBook>=new Array<CreateBook>();
  isEdit:boolean=false;
  authorEmail:string='a.com'
  constructor(private http:HttpClient) {}
  

    
  GetStatus(){
    this.http.get("https://localhost:44396/api/Author/getbook").subscribe(res=>this.Success(res),res=>console.log(res));
  }


  ngOnInit(){

    this.GetStatus();

    
  }
  
  BuyBook(input:any){}
  bookBuy(input:any){}

     Success(input: any) {
    console.log(input);
     this.CreateBookModels = input;
   }

}
