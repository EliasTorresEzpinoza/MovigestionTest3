import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgRegisterSuccesComponent } from './pg-register-succes.component';

describe('PgRegisterSuccesComponent', () => {
  let component: PgRegisterSuccesComponent;
  let fixture: ComponentFixture<PgRegisterSuccesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PgRegisterSuccesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PgRegisterSuccesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
