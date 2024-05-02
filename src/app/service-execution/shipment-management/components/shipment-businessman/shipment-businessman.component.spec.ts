import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentBusinessmanComponent } from './shipment-businessman.component';

describe('ShipmentBusinessmanComponent', () => {
  let component: ShipmentBusinessmanComponent;
  let fixture: ComponentFixture<ShipmentBusinessmanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShipmentBusinessmanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShipmentBusinessmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
