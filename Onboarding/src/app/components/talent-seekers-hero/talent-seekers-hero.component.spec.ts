import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalentSeekersHeroComponent } from './talent-seekers-hero.component';

describe('TalentSeekersHeroComponent', () => {
  let component: TalentSeekersHeroComponent;
  let fixture: ComponentFixture<TalentSeekersHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TalentSeekersHeroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TalentSeekersHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
