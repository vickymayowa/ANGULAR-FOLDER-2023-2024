import { ComponentFixture, TestBed } from '@angular/core/testing';

import { State1Component } from './state1.component';

describe('State1Component', () => {
  let component: State1Component;
  let fixture: ComponentFixture<State1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [State1Component]
    });
    fixture = TestBed.createComponent(State1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
