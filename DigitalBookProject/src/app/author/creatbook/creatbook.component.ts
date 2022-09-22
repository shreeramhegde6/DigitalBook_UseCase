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
  authorEmail:string='a.com'
  constructor(private http:HttpClient) {}
  

    
  GetStatus(){
    this.http.get("https://localhost:44396/api/Author/getbook").subscribe(res=>this.Success(res),res=>console.log(res));
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
    //debugger;
    this.isEdit = true;
    this.FormData = input;
  }

  DeleteAuthor(input: any){
    debugger;
    //  let dltItem=this.CreateBookModels.indexOf(input);
    //  this.CreateBookModels[dltItem]=new CreateBook();
    this.http.delete("https://localhost:44396/api/Author?id=" + input.id).subscribe(res => this.PostSuccess(res), res => console.log(res));
  }


  // // Customer Code Referance
  
  // Success(input: any) {
  //   console.log(input);
  //   this.CreateBookModels = input;
  // }


  // GetDataFromServer() {
  //   this.http.get("https://localhost:44354/api/Customer").subscribe(res => this.Success(res), res => console.log(res));

  // }
  // title = 'sample-project';
  // imageURL = "././assets/image.jpg";
  // isEdit = false;

  Add() {
    //debugger;
    // console.log('HI');
    // alert('HI');

    // this.CustomerModels.push(this.CustomerModel);
    // console.log(this.CustomerModels);
    // var customerdto = {
    //   customerCode: this.CustomerModel.customerCode,
    //   customerName: this.CustomerModel.customerName,
    //   customerAmount: this.CustomerModel.customerAmount
    // };
    var formElements={
      title:this.FormData.title,
      category:this.FormData.category,
      image:this.FormData.image,
      price:this.FormData.price,
      publisher:this.FormData.publisher,
      active:this.FormData.active,
      contents:this.FormData.contents,
      authorEmail:this.authorEmail
    };
    if (this.isEdit) {
      this.http.put("https://localhost:44354/api/Customer", formElements).subscribe(res => this.PostSuccess(res), res => console.log(res))
    }
    else {
      this.http.post("https://localhost:44396/api/Author/createbook", formElements).subscribe(res => this.PostSuccess(res), res => console.log(res))
    }

  
  }
  PostSuccess(input: any) {
    this.GetStatus();
  }
  EditAuthor1(input: any) {
    //debugger;
    this.isEdit = true;
    this.FormData = input;
  }


}
