import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatenewPasswordComponent } from './createnew-password.component';

describe('CreatenewPasswordComponent', () => {
  let component: CreatenewPasswordComponent;
  let fixture: ComponentFixture<CreatenewPasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatenewPasswordComponent]
    });
    fixture = TestBed.createComponent(CreatenewPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
