import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalentSeekersHowItWorksComponent } from './talent-seekers-how-it-works.component';

describe('TalentSeekersHowItWorksComponent', () => {
  let component: TalentSeekersHowItWorksComponent;
  let fixture: ComponentFixture<TalentSeekersHowItWorksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TalentSeekersHowItWorksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TalentSeekersHowItWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
