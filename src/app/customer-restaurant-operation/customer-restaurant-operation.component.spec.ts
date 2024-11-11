import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerRestaurantOperationComponent } from './customer-restaurant-operation.component';

describe('CustomerRestaurantOperationComponent', () => {
  let component: CustomerRestaurantOperationComponent;
  let fixture: ComponentFixture<CustomerRestaurantOperationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerRestaurantOperationComponent]
    });
    fixture = TestBed.createComponent(CustomerRestaurantOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
