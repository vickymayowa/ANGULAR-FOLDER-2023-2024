import { TestBed } from '@angular/core/testing';

import { ReactiveService } from './reactive.service';

describe('ReactiveService', () => {
  let service: ReactiveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReactiveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
