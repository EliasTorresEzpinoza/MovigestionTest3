import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgReportBusinessmanComponent } from './pg-report-businessman.component';

describe('PgReportBusinessmanComponent', () => {
  let component: PgReportBusinessmanComponent;
  let fixture: ComponentFixture<PgReportBusinessmanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PgReportBusinessmanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PgReportBusinessmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
