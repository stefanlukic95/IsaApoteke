import { TestBed } from '@angular/core/testing';

import { GodisnjiOdmorService } from './godisnji-odmor.service';

describe('GodisnjiOdmorService', () => {
  let service: GodisnjiOdmorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GodisnjiOdmorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
