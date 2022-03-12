import { TestBed } from '@angular/core/testing';

import { GlobalDeactivateGuard } from './global-deactivate.guard';

describe('GlobalDeactivateGuard', () => {
  let guard: GlobalDeactivateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GlobalDeactivateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
