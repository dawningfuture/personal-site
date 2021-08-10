import { TestBed } from '@angular/core/testing';
import { coreImports } from 'src/app/core/core.module';
import { HeroBackgroundImageResolverService } from './hero-background-image-resolver.service';

describe('HeroBackgroundImageResolverService', () => {
  let service: HeroBackgroundImageResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [...coreImports],
    });
    service = TestBed.inject(HeroBackgroundImageResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
