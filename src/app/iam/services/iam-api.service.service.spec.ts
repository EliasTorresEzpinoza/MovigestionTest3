import { TestBed } from '@angular/core/testing';

import { IamApiServiceService } from './iam-api.service.service';

describe('IamApiServiceService', () => {
  let service: IamApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IamApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
