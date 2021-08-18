import { TestBed } from '@angular/core/testing';
import { appImports } from 'src/app/app.module';
import { heroImports } from 'src/app/pages/hero/hero.module';
import { HeroImageResolverService } from './hero-image-resolver.service';

describe('HeroImageResolverService', () => {
  let service: HeroImageResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [...appImports, ...heroImports],
      providers: [HeroImageResolverService],
    });
    service = TestBed.inject(HeroImageResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
