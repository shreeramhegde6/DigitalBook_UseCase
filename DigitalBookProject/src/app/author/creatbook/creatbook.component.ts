import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MainserviceService } from 'src/app/mainservice.service';
import { CreateBook } from './createbookModel';

@Component({
  selector: 'app-creatbook',
  templateUrl: './creatbook.component.html',
  styleUrls: ['./creatbook.component.css']
})
export class CreatbookComponent implements OnInit {
  FormData:CreateBook=new CreateBook();
  //var x=this.FormData.formAuthorGroup;
  CreateBookModels:Array<CreateBook>=new Array<CreateBook>();
  isEdit:boolean=false;
  authorEmail:any=sessionStorage.getItem('userNames');
  addsuccess:boolean=false;
  addFail:boolean=false;
  public selectedFile!:File;
  public uploadData = new FormData();
  DefaultimagePut:string='Images/logo.jpg';

  blockId:any=0;
  unblockId:any=0;

  constructor(private http:HttpClient,private _service:MainserviceService) {}
  

    
  GetStatus(){
    //url:any="https://localhost:44396/api/Author/getbook?"+this.authorEmail;
    this.http.get("https://20.232.23.87/api/gateway/Author/getbook?cname="+this.authorEmail).subscribe(res=>this.Success(res),res=>console.log(res));
  }


  ngOnInit(){

    this.GetStatus();

    
  }
  

     Success(input: any) {
    console.log(input);
     this.CreateBookModels = input;
   }

 

  EditAuthor(input: any) {
   
    this.isEdit = true;
    this.FormData = input;
  }

  DeleteAuthor(input: any){
 
    //this.http.delete("https://localhost:44396/api/Author?id=" + input.id).subscribe(res => this.PostSuccess(res), res => this.PostFailure(res));
    this.http.delete("https://20.232.23.87/api/gateway/Author/deletebook?id=" + input.id).subscribe(res => this.PostSuccess(res), res => this.PostFailure(res));
  
  }

  Add() {
    this.addFail=true;

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
      Image:this.DefaultimagePut,
      Price:this.FormData.price,
      Publisher:this.FormData.publisher,
      Active:this.FormData.active,
      Contents:this.FormData.contents,
      AuthorEmail:this.authorEmail
    };
    //debugger;
    // this.uploadData.append('Image', this.selectedFile, this.selectedFile.name);
    // this.uploadData.append('Title', formElements.Title);
    // this.uploadData.append('Price', formElements.Price);
    // this.uploadData.append('Category', formElements.Category);
    
    // this.uploadData.append('Active', formElements.Active);
    // this.uploadData.append('Contents', formElements.Contents);
    // this.uploadData.append('Publisher', formElements.Publisher);
    // this.uploadData.append('AuthorEmail', formElements.AuthorEmail);


    if (this.isEdit) {
      
      //this.http.put("https://localhost:44396/api/Author/bookupdate", UpdateformElements).subscribe(res => this.PostSuccess(res), res => console.log(res));
      this.http.put("https://20.232.23.87/api/gateway/Author/bookupdate", UpdateformElements).subscribe(res => this.PostSuccess(res), res => console.log(res));
    }
    else {

      this.uploadData.append('Image', this.selectedFile, this.selectedFile.name);
      this.uploadData.append('Title', formElements.Title);
      this.uploadData.append('Price', formElements.Price);
      this.uploadData.append('Category', formElements.Category);
      
      this.uploadData.append('Active', formElements.Active);
      this.uploadData.append('Contents', formElements.Contents);
      this.uploadData.append('Publisher', formElements.Publisher);
      this.uploadData.append('AuthorEmail', formElements.AuthorEmail);
  
      this.http.post("https://20.232.23.87/api/gateway/Author/createbook-image", this.uploadData).subscribe(res => this.PostSuccess(res), res => {this.PostFailure(res);this.addFail=true;})
     //this.http.post("https://localhost:44396/api/Author/createbook", formElements).subscribe(res => this.PostSuccess(res), res => console.log(res))
    }

  
  }
  PostSuccess(input: any) {
    this.addsuccess=true;
    this.addFail=false;
    //window.location.reload();
    this.GetStatus();
  }
  PostFailure(input: any){
    this.addFail=true;
  }

  EditAuthor1(input: any) {
    
    this.isEdit = true;
    this.FormData = input;
  }

  reloadPage(){
    window.location.reload();
  }

  //Images
  uploadFile(files:any){
    if(files.length==0){
      return ;
    }
  debugger;
    let fileToUpload=<File>files[0];
    this.selectedFile=<File>files[0];
    //const formData=new FormData();

    //formData.append('file',fileToUpload,fileToUpload.name);
    this.uploadData.append('Image',fileToUpload,fileToUpload.name);

    //this.http.post('https://localhost:44396/api/Books',formData).subscribe(res=>console.log(res),res=>console.log(res));
  }

  onFileChanged(event:any) {
    this.selectedFile = event.target.files[0]
  }


  //block-unblock test

  BlockGrid(inputdata:any){
    this.blockId=inputdata.id;  
    //debugger;
   // this.http.put("https://localhost:44396/api/Books/book-block",this.blockId).subscribe(res=>this.GetStatus,res=>console.log(res));
   this.http.put("https://20.232.23.87/api/gateway/Author/book-block",this.blockId).subscribe(res=>this.GetStatus,res=>console.log(res));
   
   this.GetStatus();
    window.location.reload();
   
  }
  UnBlockGrid(inputdata:any){
    this.unblockId=inputdata.id;  
    //this._service.UnBlockGridService(this.blockId);
    //this.http.put("https://localhost:44396/api/Books/book-unblock",this.unblockId).subscribe(res=>this.GetStatus,res=>console.log(res));
    this.http.put("https://20.232.23.87/api/gateway/Author/book-unblock",this.unblockId).subscribe(res=>this.GetStatus,res=>console.log(res));
    
    //alert(this.unblockId);
    this.GetStatus();
    window.location.reload();
      //this.GetStatus();    
  }

}
