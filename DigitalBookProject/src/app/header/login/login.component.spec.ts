import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { MainserviceService } from 'src/app/mainservice.service';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports:[HttpClientModule,RouterTestingModule],
      providers:[HttpClient,MainserviceService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have', () => {
    expect(component).toBeTruthy();
  });

  // it('Validate Welcome',()=>{
  //   const fixture = TestBed.createComponent(LoginComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('h4')?.textContent).toContain('We are The DigiBooks Team Please Login to Read');
  // });

  it('check loadingOptions', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const lcomp = fixture.componentInstance;
    expect(lcomp.loadbtn).toEqual(true);
  });

});
