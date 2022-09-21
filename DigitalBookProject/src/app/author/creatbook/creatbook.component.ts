import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CreateBook } from './createbookModel';

@Component({
  selector: 'app-creatbook',
  templateUrl: './creatbook.component.html',
  styleUrls: ['./creatbook.component.css']
})
export class CreatbookComponent implements OnInit {
  FormData:CreateBook=new CreateBook();
  CreateBookModels:Array<CreateBook>=new Array<CreateBook>();

  constructor(private http:HttpClient ) {}
  

    
  GetStatus(){
    this.http.get("https://localhost:44396/api/Author/getbook").subscribe(res=>this.Success(res),res=>console.log(res));
  }
  ngOnInit(){

    this.GetStatus();

    
  }
  

  Success(input:any){
    this.CreateBookModels=input;
  }

  popUp(){
    alert("added"+this.FormData.category);
  }

  EditAuthor(input: any) {
    debugger;
    this.FormData = input;
  }

  DeleteAuthor(input: any){
    let dltItem=this.CreateBookModels.indexOf(input);
    this.CreateBookModels[dltItem]=new CreateBook();
  }

}
