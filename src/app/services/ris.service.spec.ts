import { TestBed } from '@angular/core/testing';

import { RisService } from './ris.service';

describe('RisService', () => {
  let service: RisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
