import { TestBed } from '@angular/core/testing';

import { MockService } from './mock.service';

describe('MockService', () => {
  let service: MockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
