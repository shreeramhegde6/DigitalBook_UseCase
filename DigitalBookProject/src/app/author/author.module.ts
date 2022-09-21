import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatbookComponent } from './creatbook/creatbook.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainserviceService } from '../mainservice.service';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [
    CreatbookComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
    
  ],
  exports :[CreatbookComponent],
  providers :[MainserviceService]
})
export class AuthorModule { }
