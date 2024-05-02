import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgReportCarrierComponent } from './pg-report-carrier.component';

describe('PgReportCarrierComponent', () => {
  let component: PgReportCarrierComponent;
  let fixture: ComponentFixture<PgReportCarrierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PgReportCarrierComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PgReportCarrierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
