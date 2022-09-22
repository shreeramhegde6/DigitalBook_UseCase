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
    this.FormData = input;
  }

  DeleteAuthor(input: any){
    let dltItem=this.CreateBookModels.indexOf(input);
    this.CreateBookModels[dltItem]=new CreateBook();
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

  // Add() {
  //   //debugger;
  //   // console.log('HI');
  //   // alert('HI');

  //   // this.CustomerModels.push(this.CustomerModel);
  //   // console.log(this.CustomerModels);
  //   // var customerdto = {
  //   //   customerCode: this.CustomerModel.customerCode,
  //   //   customerName: this.CustomerModel.customerName,
  //   //   customerAmount: this.CustomerModel.customerAmount
  //   // };
  //   if (this.isEdit) {
  //     this.http.put("https://localhost:44354/api/Customer", customerdto).subscribe(res => this.PostSuccess(res), res => console.log(res))
  //   }
  //   else {
  //     this.http.post("https://localhost:44354/api/Customer", customerdto).subscribe(res => this.PostSuccess(res), res => console.log(res))
  //   }

  //   this.CustomerModel = new Customer();
  // }
  // PostSuccess(input: any) {
  //   this.GetDataFromServer();
  // }
  // EditCustomer(input: any) {
  //   debugger;
  //   this.isEdit = true;
  //   this.CustomerModel = input;
  // }
  // DeleteCustomer(input: any) {
  //   this.http.delete("https://localhost:44354/api/Customer?id=" + input.id).subscribe(res => this.PostSuccess(res), res => console.log(res));
  // }

}
