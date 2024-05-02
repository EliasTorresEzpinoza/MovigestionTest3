import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileHomeBusinessmanComponent } from './profile-home-businessman.component';

describe('ProfileHomeBusinessmanComponent', () => {
  let component: ProfileHomeBusinessmanComponent;
  let fixture: ComponentFixture<ProfileHomeBusinessmanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileHomeBusinessmanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfileHomeBusinessmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
