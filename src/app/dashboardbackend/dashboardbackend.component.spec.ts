import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardbackendComponent } from './dashboardbackend.component';

describe('DashboardbackendComponent', () => {
  let component: DashboardbackendComponent;
  let fixture: ComponentFixture<DashboardbackendComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardbackendComponent]
    });
    fixture = TestBed.createComponent(DashboardbackendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
