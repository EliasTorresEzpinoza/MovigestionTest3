import { TestBed } from '@angular/core/testing';

import { ShipmentApiService } from './shipment-api.service';

describe('ShipmentApiService', () => {
  let service: ShipmentApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShipmentApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
