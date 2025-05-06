import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobSeekersHeroComponent } from './job-seekers-hero.component';

describe('JobSeekersHeroComponent', () => {
  let component: JobSeekersHeroComponent;
  let fixture: ComponentFixture<JobSeekersHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobSeekersHeroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobSeekersHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
