import { TestBed } from '@angular/core/testing';

import { SpecialDetailService } from './special-detail.service';

describe('SpecialDetailService', () => {
  let service: SpecialDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpecialDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
