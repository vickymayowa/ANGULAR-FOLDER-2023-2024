import { ComponentFixture, TestBed } from '@angular/core/testing';

import { State2Component } from './state2.component';

describe('State2Component', () => {
  let component: State2Component;
  let fixture: ComponentFixture<State2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [State2Component]
    });
    fixture = TestBed.createComponent(State2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
