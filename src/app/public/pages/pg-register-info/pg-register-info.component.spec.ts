import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgRegisterInfoComponent } from './pg-register-info.component';

describe('PgRegisterInfoComponent', () => {
  let component: PgRegisterInfoComponent;
  let fixture: ComponentFixture<PgRegisterInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PgRegisterInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PgRegisterInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
