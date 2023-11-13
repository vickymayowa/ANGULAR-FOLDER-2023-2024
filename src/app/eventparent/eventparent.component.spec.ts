import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventparentComponent } from './eventparent.component';

describe('EventparentComponent', () => {
  let component: EventparentComponent;
  let fixture: ComponentFixture<EventparentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventparentComponent]
    });
    fixture = TestBed.createComponent(EventparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
