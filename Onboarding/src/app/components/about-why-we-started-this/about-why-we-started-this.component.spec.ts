import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutWhyWeStartedThisComponent } from './about-why-we-started-this.component';

describe('AboutWhyWeStartedThisComponent', () => {
  let component: AboutWhyWeStartedThisComponent;
  let fixture: ComponentFixture<AboutWhyWeStartedThisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutWhyWeStartedThisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutWhyWeStartedThisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
