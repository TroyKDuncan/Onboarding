import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobSeekersOfferingsComponent } from './job-seekers-offerings.component';

describe('JobSeekersOfferingsComponent', () => {
  let component: JobSeekersOfferingsComponent;
  let fixture: ComponentFixture<JobSeekersOfferingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobSeekersOfferingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobSeekersOfferingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
