import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRestaurantOperationComponent } from './admin-restaurant-operation.component';

describe('AdminRestaurantOperationComponent', () => {
  let component: AdminRestaurantOperationComponent;
  let fixture: ComponentFixture<AdminRestaurantOperationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminRestaurantOperationComponent]
    });
    fixture = TestBed.createComponent(AdminRestaurantOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
