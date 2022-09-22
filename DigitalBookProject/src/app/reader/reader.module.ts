import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchbookComponent } from './searchbook/searchbook.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SearchbookComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports :[SearchbookComponent]

})
export class ReaderModule { }
