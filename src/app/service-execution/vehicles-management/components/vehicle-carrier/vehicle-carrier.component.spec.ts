import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleCarrierComponent } from './vehicle-carrier.component';

describe('VehicleCarrierComponent', () => {
  let component: VehicleCarrierComponent;
  let fixture: ComponentFixture<VehicleCarrierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VehicleCarrierComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VehicleCarrierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
