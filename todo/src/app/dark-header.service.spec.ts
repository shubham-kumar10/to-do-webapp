import { TestBed } from '@angular/core/testing';

import { DarkHeaderService } from './dark-header.service';

describe('DarkHeaderService', () => {
  let service: DarkHeaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DarkHeaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
