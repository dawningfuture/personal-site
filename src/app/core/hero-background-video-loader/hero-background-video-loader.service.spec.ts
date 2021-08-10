import { TestBed } from '@angular/core/testing';
import { appImports } from 'src/app/app.module';
import { coreImports } from 'src/app/core/core.module';
import { HeroBackgroundVideoLoaderService } from './hero-background-video-loader.service';

describe('HeroBackgroundVideoLoaderService', () => {
  let service: HeroBackgroundVideoLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [...appImports, ...coreImports],
    });
    service = TestBed.inject(HeroBackgroundVideoLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
