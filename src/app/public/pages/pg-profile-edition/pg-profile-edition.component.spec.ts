import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgProfileEditionComponent } from './pg-profile-edition.component';

describe('PgProfileEditionComponent', () => {
  let component: PgProfileEditionComponent;
  let fixture: ComponentFixture<PgProfileEditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PgProfileEditionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PgProfileEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
