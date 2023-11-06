import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiFormComponent } from './api-form.component';

describe('ApiFormComponent', () => {
  let component: ApiFormComponent;
  let fixture: ComponentFixture<ApiFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApiFormComponent]
    });
    fixture = TestBed.createComponent(ApiFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
