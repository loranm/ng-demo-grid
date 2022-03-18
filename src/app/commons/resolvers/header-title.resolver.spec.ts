import { TestBed } from '@angular/core/testing';

import { HeaderTitleResolver } from './header-title.resolver';

describe('HeaderTitleResolver', () => {
  let resolver: HeaderTitleResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(HeaderTitleResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
