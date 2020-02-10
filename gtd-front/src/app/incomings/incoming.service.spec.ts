import { TestBed } from '@angular/core/testing';

import { IncomingsService } from './incomings.service';

describe('IncomingsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IncomingsService = TestBed.get(IncomingsService);
    expect(service).toBeTruthy();
  });
});
