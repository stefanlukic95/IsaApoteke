import { TestBed } from '@angular/core/testing';

import { SavetovanjeService } from './savetovanje.service';

describe('SavetovanjeService', () => {
  let service: SavetovanjeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SavetovanjeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
