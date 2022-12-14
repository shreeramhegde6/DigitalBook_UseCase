import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorModule } from './author/author.module';
import { ReaderModule } from './reader/reader.module';
import { HeaderModule } from './header/header.module';
import { MainserviceService } from './mainservice.service';
import { GridUiModule } from './grid-ui/grid-ui.module';
import { AllserviceService } from './allservice.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    AuthorModule,
    ReaderModule,
    HttpClientModule,
    HeaderModule,
    GridUiModule
 
    
  ],
  providers: [MainserviceService,AllserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
