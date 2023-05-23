import { TestBed } from '@angular/core/testing';
import { appImports } from 'src/app/app.module';
import { HeroImageResolver } from 'src/app/core/resolvers/hero-image.resolver';

describe('HeroImageResolver', () => {
  let service: HeroImageResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [...appImports],
    });
    service = TestBed.inject(HeroImageResolver);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
