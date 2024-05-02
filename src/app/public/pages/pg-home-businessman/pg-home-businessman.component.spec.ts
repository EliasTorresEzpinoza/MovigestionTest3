import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgHomeBusinessmanComponent } from './pg-home-businessman.component';

describe('PgHomeBusinessmanComponent', () => {
  let component: PgHomeBusinessmanComponent;
  let fixture: ComponentFixture<PgHomeBusinessmanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PgHomeBusinessmanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PgHomeBusinessmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
