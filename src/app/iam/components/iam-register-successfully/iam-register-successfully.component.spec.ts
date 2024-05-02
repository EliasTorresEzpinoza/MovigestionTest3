import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IamRegisterSuccessfullyComponent } from './iam-register-successfully.component';

describe('IamRegisterSuccessfullyComponent', () => {
  let component: IamRegisterSuccessfullyComponent;
  let fixture: ComponentFixture<IamRegisterSuccessfullyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IamRegisterSuccessfullyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IamRegisterSuccessfullyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
