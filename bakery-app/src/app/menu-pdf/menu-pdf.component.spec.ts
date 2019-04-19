import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPDFComponent } from './menu-pdf.component';

describe('MenuPDFComponent', () => {
  let component: MenuPDFComponent;
  let fixture: ComponentFixture<MenuPDFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuPDFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuPDFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
