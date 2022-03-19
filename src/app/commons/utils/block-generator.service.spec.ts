import { TestBed } from '@angular/core/testing';

import { BlockGeneratorService } from './block-generator.service';

describe('BlockGeneratorService', () => {
  let service: BlockGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlockGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
