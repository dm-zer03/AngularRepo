import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SignalC } from './signalc';

describe('SignalC', () => {

  let component: SignalC;
  let fixture: ComponentFixture<SignalC>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalC]   // ✅ standalone component
    }).compileComponents();

    fixture = TestBed.createComponent(SignalC);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
