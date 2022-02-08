import { TestBed } from '@angular/core/testing';

import { AssetsResolverResolver } from './assets-resolver.resolver';

describe('AssetsResolverResolver', () => {
  let resolver: AssetsResolverResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(AssetsResolverResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
