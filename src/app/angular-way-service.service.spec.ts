import { TestBed } from '@angular/core/testing';

import { AngularWayServiceService } from './angular-way-service.service';

describe('AngularWayServiceService', () => {
  let service: AngularWayServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularWayServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
