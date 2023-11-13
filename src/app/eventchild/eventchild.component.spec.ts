import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventchildComponent } from './eventchild.component';

describe('EventchildComponent', () => {
  let component: EventchildComponent;
  let fixture: ComponentFixture<EventchildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventchildComponent]
    });
    fixture = TestBed.createComponent(EventchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
