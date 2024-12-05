import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUsersEditPageComponent } from './admin-users-edit-page.component';

describe('AdminUsersEditPageComponent', () => {
  let component: AdminUsersEditPageComponent;
  let fixture: ComponentFixture<AdminUsersEditPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminUsersEditPageComponent]
    });
    fixture = TestBed.createComponent(AdminUsersEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
