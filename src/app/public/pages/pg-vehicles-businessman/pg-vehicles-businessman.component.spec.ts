import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgVehiclesBusinessmanComponent } from './pg-vehicles-businessman.component';

describe('PgVehiclesBusinessmanComponent', () => {
  let component: PgVehiclesBusinessmanComponent;
  let fixture: ComponentFixture<PgVehiclesBusinessmanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PgVehiclesBusinessmanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PgVehiclesBusinessmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
