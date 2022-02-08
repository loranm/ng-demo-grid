import { TestBed } from '@angular/core/testing';

import { StepAssetsService } from './step-assets.service';

describe('StepAssetsService', () => {
  let service: StepAssetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StepAssetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
