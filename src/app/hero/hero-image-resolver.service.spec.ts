import { TestBed } from '@angular/core/testing';
import { appImports } from 'src/app/app.module';
import { coreImports } from 'src/app/core/core.module';
import { HeroImageResolverService } from './hero-image-resolver.service';

describe('HeroImageResolverService', () => {
  let service: HeroImageResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [...appImports, ...coreImports],
    });
    service = TestBed.inject(HeroImageResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
