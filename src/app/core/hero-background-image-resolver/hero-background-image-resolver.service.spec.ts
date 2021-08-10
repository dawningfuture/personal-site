import { TestBed } from '@angular/core/testing';
import { appImports } from 'src/app/app.module';
import { coreImports } from 'src/app/core/core.module';
import { HeroBackgroundImageResolverService } from './hero-background-image-resolver.service';

describe('HeroBackgroundImageResolverService', () => {
  let service: HeroBackgroundImageResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [...appImports, ...coreImports],
    });
    service = TestBed.inject(HeroBackgroundImageResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
