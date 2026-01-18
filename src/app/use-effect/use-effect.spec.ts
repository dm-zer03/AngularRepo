import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseEffect } from './use-effect';

describe('UseEffect', () => {
  let component: UseEffect;
  let fixture: ComponentFixture<UseEffect>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UseEffect]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UseEffect);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
