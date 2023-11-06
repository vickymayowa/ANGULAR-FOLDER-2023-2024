import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReaFormComponent } from './rea-form.component';

describe('ReaFormComponent', () => {
  let component: ReaFormComponent;
  let fixture: ComponentFixture<ReaFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReaFormComponent]
    });
    fixture = TestBed.createComponent(ReaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
