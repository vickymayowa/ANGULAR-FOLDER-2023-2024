import { TestBed } from '@angular/core/testing';

import { ApiFormService } from './api-form.service';

describe('ApiFormService', () => {
  let service: ApiFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
