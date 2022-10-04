import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SearchBookModel } from '../searchbook/searchbookModel';
import { ViewModel } from './viewmodel';

@Component({
  selector: 'app-viewbook',
  templateUrl: './viewbook.component.html',
  styleUrls: ['./viewbook.component.css']
})
export class ViewbookComponent implements OnInit {

  constructor(private http:HttpClient) { }
  currentUser:any=sessionStorage.getItem('userNames');
  readingInv:boolean=false;
  invoID:any;
  deleteId:any;
  returnbool:boolean=false;

  ngOnInit(): void {
    this.getUserbook();

  }
  gridData:Array<any> =new Array<any>();
  SearchModels:Array<ViewModel>=new Array<ViewModel>();
  imageUrl:string="https://localhost:44396/";

  getUserbook(){
    //=this.currentUser.toString();
    this.http.get("https://localhost:44396/api/Reader/viewbook?readername="+this.currentUser).subscribe(res=>this.postSuccess(res),res=>console.log(res));
    //this.http.post("https://localhost:44396/api/Reader/viewbook",this.currentUser)
  }

  selectedGrid(input:any){
    this.SearchModels=input;
    this.invoID=input;
    this.readingInv=true;
    this.returnbool=false;

  }
  postSuccess(input:any){
this.SearchModels=input;
this.invoID=this.SearchModels[0].id;
console.log(input);

  }


  //bookReturn
  returnBook(input:any){
    this.deleteId=input;
    //this.http.delete("https://localhost:44396/api/Author?id=" + input.id).subscribe(res => this.PostSuccess(res), res => this.PostFailure(res));
    this.http.delete("https://localhost:44396/api/Reader/returnbook?id="+this.deleteId).subscribe(res => this.PostSuccessRet(), res => console.log(res));

    this.returnbool=true;

  }
  PostSuccessRet(){
    //alert("success");
    this.returnbool=true;
  }
}
