import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftitemsComponent } from './giftitems.component';

describe('GiftitemsComponent', () => {
  let component: GiftitemsComponent;
  let fixture: ComponentFixture<GiftitemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiftitemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiftitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
