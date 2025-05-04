import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalentSeekersOfferingsComponent } from './talent-seekers-offerings.component';

describe('TalentSeekersOfferingsComponent', () => {
  let component: TalentSeekersOfferingsComponent;
  let fixture: ComponentFixture<TalentSeekersOfferingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TalentSeekersOfferingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TalentSeekersOfferingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
