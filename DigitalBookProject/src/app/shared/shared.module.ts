import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridUiComponent } from './grid-ui/grid-ui.component';
import { ReaderUiComponent } from './reader-ui/reader-ui.component';



@NgModule({
  declarations: [
    GridUiComponent,
    ReaderUiComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[GridUiComponent,CommonModule,ReaderUiComponent]

})
export class SharedModule { }
