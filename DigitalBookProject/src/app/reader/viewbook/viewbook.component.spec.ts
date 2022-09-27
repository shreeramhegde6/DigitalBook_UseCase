import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ViewbookComponent } from './viewbook.component';

describe('ViewbookComponent', () => {
  let component: ViewbookComponent;
  let fixture: ComponentFixture<ViewbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewbookComponent ],
      imports: [HttpClientModule,RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Check Headings',()=>{
    const fixture = TestBed.createComponent(ViewbookComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain('Welcome To Your Reading House');
  });

  it('Validate Image Storing Location', () => {
    const fixture = TestBed.createComponent(ViewbookComponent);
    const vw = fixture.componentInstance;
    expect(vw.imageUrl).toEqual('https://localhost:44396/');
  });

});
