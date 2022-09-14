import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatbookComponent } from './creatbook/creatbook.component';



@NgModule({
  declarations: [
    CreatbookComponent
  ],
  imports: [
    CommonModule
  ],
  exports :[CreatbookComponent]
})
export class AuthorModule { }
