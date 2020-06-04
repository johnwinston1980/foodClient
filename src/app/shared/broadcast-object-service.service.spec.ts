import { TestBed } from '@angular/core/testing';

import { BroadcastObjectServiceService } from './broadcast-object-service.service';

describe('BroadcastObjectServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BroadcastObjectServiceService = TestBed.get(BroadcastObjectServiceService);
    expect(service).toBeTruthy();
  });
});
