import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentCarrierComponent } from './shipment-carrier.component';

describe('ShipmentCarrierComponent', () => {
  let component: ShipmentCarrierComponent;
  let fixture: ComponentFixture<ShipmentCarrierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShipmentCarrierComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShipmentCarrierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
