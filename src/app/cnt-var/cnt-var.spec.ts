import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CntVar } from './cnt-var';

describe('CntVar', () => {
  let component: CntVar;
  let fixture: ComponentFixture<CntVar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CntVar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CntVar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
