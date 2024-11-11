import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenudetailsComponent } from './menudetails.component';

describe('MenudetailsComponent', () => {
  let component: MenudetailsComponent;
  let fixture: ComponentFixture<MenudetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenudetailsComponent]
    });
    fixture = TestBed.createComponent(MenudetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
