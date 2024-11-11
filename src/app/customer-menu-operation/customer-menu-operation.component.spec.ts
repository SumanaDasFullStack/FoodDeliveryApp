import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerMenuOperationComponent } from './customer-menu-operation.component';

describe('CustomerMenuOperationComponent', () => {
  let component: CustomerMenuOperationComponent;
  let fixture: ComponentFixture<CustomerMenuOperationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerMenuOperationComponent]
    });
    fixture = TestBed.createComponent(CustomerMenuOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
