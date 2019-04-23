import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDayComponent } from './all-day.component';

describe('AllDayComponent', () => {
  let component: AllDayComponent;
  let fixture: ComponentFixture<AllDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
