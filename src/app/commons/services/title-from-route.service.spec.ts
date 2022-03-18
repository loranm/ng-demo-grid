import { TestBed } from '@angular/core/testing';

import { TitleFromRouteService } from './title-from-route.service';

describe('TitleFromRouteService', () => {
  let service: TitleFromRouteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TitleFromRouteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
