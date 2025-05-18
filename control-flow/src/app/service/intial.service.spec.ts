import { TestBed } from '@angular/core/testing';

import { IntialService } from './intial.service';

describe('IntialService', () => {
  let service: IntialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IntialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
