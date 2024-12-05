import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuEditPageComponent } from './menu-edit-page.component';

describe('MenuEditPageComponent', () => {
  let component: MenuEditPageComponent;
  let fixture: ComponentFixture<MenuEditPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuEditPageComponent]
    });
    fixture = TestBed.createComponent(MenuEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
