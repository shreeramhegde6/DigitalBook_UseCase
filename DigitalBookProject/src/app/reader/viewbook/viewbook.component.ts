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

  }
  postSuccess(input:any){
this.SearchModels=input;
console.log(input);

  }
}
