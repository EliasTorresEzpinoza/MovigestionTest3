import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgShipmentBusinessmanComponent } from './pg-shipment-businessman.component';

describe('PgShipmentBusinessmanComponent', () => {
  let component: PgShipmentBusinessmanComponent;
  let fixture: ComponentFixture<PgShipmentBusinessmanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PgShipmentBusinessmanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PgShipmentBusinessmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
