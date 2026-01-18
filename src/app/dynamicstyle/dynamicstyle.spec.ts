import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dynamicstyle } from './dynamicstyle';

describe('Dynamicstyle', () => {
  let component: Dynamicstyle;
  let fixture: ComponentFixture<Dynamicstyle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dynamicstyle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dynamicstyle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
