import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatbookComponent } from './creatbook/creatbook.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CreatbookComponent
  ],
  imports: [
    CommonModule,
    FormsModule
    
  ],
  exports :[CreatbookComponent]
})
export class AuthorModule { }
