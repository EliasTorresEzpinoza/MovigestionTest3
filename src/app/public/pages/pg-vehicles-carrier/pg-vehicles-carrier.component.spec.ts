import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgVehiclesCarrierComponent } from './pg-vehicles-carrier.component';

describe('PgVehiclesCarrierComponent', () => {
  let component: PgVehiclesCarrierComponent;
  let fixture: ComponentFixture<PgVehiclesCarrierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PgVehiclesCarrierComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PgVehiclesCarrierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
