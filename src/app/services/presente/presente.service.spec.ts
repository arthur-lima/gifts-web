import { TestBed } from '@angular/core/testing';

import { PresenteService } from './presente.service';

describe('PresenteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PresenteService = TestBed.get(PresenteService);
    expect(service).toBeTruthy();
  });
});
