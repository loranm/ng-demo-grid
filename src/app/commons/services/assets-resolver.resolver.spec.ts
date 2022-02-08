import { TestBed } from '@angular/core/testing';

import { AssetsResolver } from '@commons/services/assets-resolver.resolver';

describe('AssetsResolverResolver', () => {
  let resolver: AssetsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(AssetsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
