import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationShipmentComponent } from './organization-shipment.component';

describe('OrganizationShipmentComponent', () => {
  let component: OrganizationShipmentComponent;
  let fixture: ComponentFixture<OrganizationShipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrganizationShipmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrganizationShipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
