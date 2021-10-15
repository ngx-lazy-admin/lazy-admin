import { TestBed } from '@angular/core/testing';

import { CosService } from './cos.service';

describe('CosService', () => {
  let service: CosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
