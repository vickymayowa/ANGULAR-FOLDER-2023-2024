import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterbackendComponent } from './registerbackend.component';

describe('RegisterbackendComponent', () => {
  let component: RegisterbackendComponent;
  let fixture: ComponentFixture<RegisterbackendComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterbackendComponent]
    });
    fixture = TestBed.createComponent(RegisterbackendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
