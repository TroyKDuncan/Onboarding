import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalentSeekersComponent } from './talent-seekers.component';

describe('TalentSeekersComponent', () => {
  let component: TalentSeekersComponent;
  let fixture: ComponentFixture<TalentSeekersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TalentSeekersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TalentSeekersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
