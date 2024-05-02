import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IamLoginComponentComponent } from './iam-login.component.component';

describe('IamLoginComponentComponent', () => {
  let component: IamLoginComponentComponent;
  let fixture: ComponentFixture<IamLoginComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IamLoginComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IamLoginComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
