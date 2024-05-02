import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgHomeDriverComponent } from './pg-home-driver.component';

describe('PgHomeDriverComponent', () => {
  let component: PgHomeDriverComponent;
  let fixture: ComponentFixture<PgHomeDriverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PgHomeDriverComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PgHomeDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
