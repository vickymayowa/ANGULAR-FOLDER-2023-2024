import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayApiComponent } from './display-api.component';

describe('DisplayApiComponent', () => {
  let component: DisplayApiComponent;
  let fixture: ComponentFixture<DisplayApiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayApiComponent]
    });
    fixture = TestBed.createComponent(DisplayApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
