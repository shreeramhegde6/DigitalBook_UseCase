import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchbookComponent } from './searchbook/searchbook.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ViewbookComponent } from './viewbook/viewbook.component';



@NgModule({
  declarations: [
    SearchbookComponent,
    ViewbookComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports :[SearchbookComponent]

})
export class ReaderModule { }
