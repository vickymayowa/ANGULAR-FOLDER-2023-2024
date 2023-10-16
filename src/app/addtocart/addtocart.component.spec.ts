import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtocartComponent } from './addtocart.component';

describe('AddtocartComponent', () => {
  let component: AddtocartComponent;
  let fixture: ComponentFixture<AddtocartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddtocartComponent]
    });
    fixture = TestBed.createComponent(AddtocartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
