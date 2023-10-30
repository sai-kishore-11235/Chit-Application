import { TestBed } from '@angular/core/testing';

import { ChitServiceService } from './chit-service.service';

describe('ChitServiceService', () => {
  let service: ChitServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChitServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
