import { TestBed } from '@angular/core/testing';

import { MockJsonService } from './mock-json.service';

describe('MockJsonService', () => {
  let service: MockJsonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockJsonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
