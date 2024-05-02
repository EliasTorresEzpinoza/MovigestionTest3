import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IamRegisterComponent } from './iam-register.component';

describe('IamRegisterComponent', () => {
  let component: IamRegisterComponent;
  let fixture: ComponentFixture<IamRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IamRegisterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IamRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
