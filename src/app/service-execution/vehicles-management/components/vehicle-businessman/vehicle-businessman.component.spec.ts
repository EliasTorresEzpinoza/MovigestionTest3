import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleBusinessmanComponent } from './vehicle-businessman.component';

describe('VehicleBusinessmanComponent', () => {
  let component: VehicleBusinessmanComponent;
  let fixture: ComponentFixture<VehicleBusinessmanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VehicleBusinessmanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VehicleBusinessmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
