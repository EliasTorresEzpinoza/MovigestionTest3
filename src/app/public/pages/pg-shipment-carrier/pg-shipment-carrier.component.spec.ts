import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgShipmentCarrierComponent } from './pg-shipment-carrier.component';

describe('PgShipmentCarrierComponent', () => {
  let component: PgShipmentCarrierComponent;
  let fixture: ComponentFixture<PgShipmentCarrierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PgShipmentCarrierComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PgShipmentCarrierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
