import { TestBed } from '@angular/core/testing';

import { LeaveDeactivateGuard } from './leave-deactivate.guard';

describe('LeaveDeactivateGuard', () => {
  let guard: LeaveDeactivateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LeaveDeactivateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
