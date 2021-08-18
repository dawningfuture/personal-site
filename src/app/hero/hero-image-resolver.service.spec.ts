import { TestBed } from '@angular/core/testing';
import { appImports } from 'src/app/app.module';
import { HeroImageResolverService } from 'src/app/hero/hero-image-resolver.service';
import { heroImports } from 'src/app/hero/hero.module';

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
