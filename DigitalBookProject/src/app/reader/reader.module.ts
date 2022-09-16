import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchbookComponent } from './searchbook/searchbook.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SearchbookComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports :[SearchbookComponent]

})
export class ReaderModule { }
