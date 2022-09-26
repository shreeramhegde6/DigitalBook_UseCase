import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewbook',
  templateUrl: './viewbook.component.html',
  styleUrls: ['./viewbook.component.css']
})
export class ViewbookComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  gridData:Array<any> =new Array<any>();
  imageUrl:string="https://localhost:44396/";



  selectedGrid(input:any){

  }

}
