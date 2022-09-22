import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-grid-ui',
  templateUrl: './grid-ui.component.html',
  styleUrls: ['./grid-ui.component.css']
})
export class GridUiComponent implements OnInit {

  constructor() { }

 
  gridColumns:Array<any>= new Array<any>();
  gridData:Array<any> =new Array<any>();



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

@Output("grid-delete")
  emitemitterd:EventEmitter<any>=new EventEmitter<any>();

  deleteGrid(_dselected:any){
    debugger;
    this.emitemitterd.emit(_dselected);
  }

}
