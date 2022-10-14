import { TestBed } from '@angular/core/testing';

import { ObjectStorageService } from './object-storage.service';

describe('ObjectStorageService', () => {
  let service: ObjectStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObjectStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
