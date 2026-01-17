import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventApp } from './event-app';

describe('EventApp', () => {
  let component: EventApp;
  let fixture: ComponentFixture<EventApp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventApp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventApp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
