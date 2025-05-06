import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobSeekersHowItWorksComponent } from './job-seekers-how-it-works.component';

describe('JobSeekersHowItWorksComponent', () => {
  let component: JobSeekersHowItWorksComponent;
  let fixture: ComponentFixture<JobSeekersHowItWorksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobSeekersHowItWorksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobSeekersHowItWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
