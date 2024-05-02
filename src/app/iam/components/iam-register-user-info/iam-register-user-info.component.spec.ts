import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IamRegisterUserInfoComponent } from './iam-register-user-info.component';

describe('IamRegisterUserInfoComponent', () => {
  let component: IamRegisterUserInfoComponent;
  let fixture: ComponentFixture<IamRegisterUserInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IamRegisterUserInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IamRegisterUserInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
