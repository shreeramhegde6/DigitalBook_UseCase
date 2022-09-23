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
  isEdit:boolean=false;
  authorEmail:any=sessionStorage.getItem('userNames');
  addsuccess:boolean=false;

  constructor(private http:HttpClient) {}
  

    
  GetStatus(){
    //url:any="https://localhost:44396/api/Author/getbook?"+this.authorEmail;
    this.http.get("https://localhost:44396/api/Author/getbook?cname="+this.authorEmail).subscribe(res=>this.Success(res),res=>console.log(res));
  }


  ngOnInit(){

    this.GetStatus();

    
  }
  

     Success(input: any) {
    console.log(input);
     this.CreateBookModels = input;
   }

  popUp(){
    alert("added"+this.FormData.category);
  }

  EditAuthor(input: any) {
   
    this.isEdit = true;
    this.FormData = input;
  }

  DeleteAuthor(input: any){
 
    this.http.delete("https://localhost:44396/api/Author?id=" + input.id).subscribe(res => this.PostSuccess(res), res => console.log(res));
  }

  Add() {

    var formElements={
      Title:this.FormData.title,
      Category:this.FormData.category,
      Image:this.FormData.image,
      Price:this.FormData.price,
      Publisher:this.FormData.publisher,
      Active:this.FormData.active,
      Contents:this.FormData.contents,
      AuthorEmail:this.authorEmail
    };

    var UpdateformElements={
      id:this.FormData.id,
      Title:this.FormData.title,
      Category:this.FormData.category,
      Image:this.FormData.image,
      Price:this.FormData.price,
      Publisher:this.FormData.publisher,
      Active:this.FormData.active,
      Contents:this.FormData.contents,
      AuthorEmail:this.authorEmail
    };
    if (this.isEdit) {
      this.http.put("https://localhost:44396/api/Author/bookupdate", UpdateformElements).subscribe(res => this.PostSuccess(res), res => console.log(res))
    }
    else {
      this.http.post("https://localhost:44396/api/Author/createbook", formElements).subscribe(res => this.PostSuccess(res), res => console.log(res))
    }

  
  }
  PostSuccess(input: any) {
    this.addsuccess=true;
    //window.location.reload();
    this.GetStatus();
  }
  EditAuthor1(input: any) {
    
    this.isEdit = true;
    this.FormData = input;
  }

  reloadPage(){
    window.location.reload();
  }


}
