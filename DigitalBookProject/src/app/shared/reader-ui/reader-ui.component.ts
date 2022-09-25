import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-reader-ui',
  templateUrl: './reader-ui.component.html',
  styleUrls: ['./reader-ui.component.css']
})
export class ReaderUiComponent implements OnInit {

  constructor() { }

 

  
  gridColumns:Array<any>= new Array<any>();
  gridData:Array<any> =new Array<any>();
  imageUrl:string="https://localhost:44396/";


  ngOnInit(): void {
  }
  @Input("grid-columns")
  set SetGridColumn(_gridCoulmn:Array<any>){
    this.gridColumns=_gridCoulmn;
 

  }
  @Input("grid-data")
  set SetGridData(_gridData:Array<any>){
    this.gridData=_gridData;
  }
  
  @Output("grid-selected")
  emitemitter:EventEmitter<any>=new EventEmitter<any>();

  selectedGrid(_selected:any){
    debugger;
    this.emitemitter.emit(_selected);

}
// @Output("grid-delete")
// deleteevent:EventEmitter<any>=new EventEmitter<any>();
// deleteGrid(_slect:any){
//   this.deleteevent=_slect;
// }

@Output("grid-buy")
  emitemitterd:EventEmitter<any>=new EventEmitter<any>();

  buyGrid(_dselected:any){
    debugger;
    this.emitemitterd.emit(_dselected);
  }

}
