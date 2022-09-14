import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatbookComponent } from './creatbook.component';

describe('CreatbookComponent', () => {
  let component: CreatbookComponent;
  let fixture: ComponentFixture<CreatbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatbookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
