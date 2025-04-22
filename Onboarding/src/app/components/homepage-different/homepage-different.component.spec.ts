import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageDifferentComponent } from './homepage-different.component';

describe('HomepageDifferentComponent', () => {
  let component: HomepageDifferentComponent;
  let fixture: ComponentFixture<HomepageDifferentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomepageDifferentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomepageDifferentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
