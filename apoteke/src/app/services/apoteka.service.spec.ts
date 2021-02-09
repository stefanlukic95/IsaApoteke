import { TestBed, inject } from '@angular/core/testing';

import { ApotekaService } from './apoteka.service';

describe('ApotekaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApotekaService]
    });
  });

  it('should be created', inject([ApotekaService], (service: ApotekaService) => {
    expect(service).toBeTruthy();
  }));
});
