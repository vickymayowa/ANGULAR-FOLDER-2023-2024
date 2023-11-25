import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginbackendComponent } from './loginbackend.component';

describe('LoginbackendComponent', () => {
  let component: LoginbackendComponent;
  let fixture: ComponentFixture<LoginbackendComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginbackendComponent]
    });
    fixture = TestBed.createComponent(LoginbackendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
