import { TestBed, inject } from '@angular/core/testing';

import { SysadminAuthGuardService } from './sysadmin-auth-guard.service';

describe('SysadminAuthGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SysadminAuthGuardService]
    });
  });

  it('should be created', inject([SysadminAuthGuardService], (service: SysadminAuthGuardService) => {
    expect(service).toBeTruthy();
  }));
});
