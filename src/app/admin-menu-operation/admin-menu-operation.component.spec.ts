import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMenuOperationComponent } from './admin-menu-operation.component';

describe('AdminMenuOperationComponent', () => {
  let component: AdminMenuOperationComponent;
  let fixture: ComponentFixture<AdminMenuOperationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminMenuOperationComponent]
    });
    fixture = TestBed.createComponent(AdminMenuOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
