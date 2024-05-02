import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileHomeDriverComponent } from './profile-home-driver.component';

describe('ProfileHomeDriverComponent', () => {
  let component: ProfileHomeDriverComponent;
  let fixture: ComponentFixture<ProfileHomeDriverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileHomeDriverComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfileHomeDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
