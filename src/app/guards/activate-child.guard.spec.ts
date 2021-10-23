import { TestBed } from '@angular/core/testing';

import { ActivateChildGuard } from './activate-child.guard';

describe('ActivateChildGuard', () => {
  let guard: ActivateChildGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ActivateChildGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
