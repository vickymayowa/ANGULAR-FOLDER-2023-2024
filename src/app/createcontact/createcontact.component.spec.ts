import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatecontactComponent } from './createcontact.component';

describe('CreatecontactComponent', () => {
  let component: CreatecontactComponent;
  let fixture: ComponentFixture<CreatecontactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatecontactComponent]
    });
    fixture = TestBed.createComponent(CreatecontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
