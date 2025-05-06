import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutCommittedToComponent } from './about-committed-to.component';

describe('AboutCommittedToComponent', () => {
  let component: AboutCommittedToComponent;
  let fixture: ComponentFixture<AboutCommittedToComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutCommittedToComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutCommittedToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
