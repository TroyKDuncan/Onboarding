import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoWhiteTextComponent } from './logo-white-text.component';

describe('LogoWhiteTextComponent', () => {
  let component: LogoWhiteTextComponent;
  let fixture: ComponentFixture<LogoWhiteTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogoWhiteTextComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoWhiteTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
