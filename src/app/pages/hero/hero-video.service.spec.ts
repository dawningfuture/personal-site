import { TestBed } from '@angular/core/testing';
import { appImports } from 'src/app/app.module';
import { HeroHlsjsVideoService } from 'src/app/pages/hero/hero-hlsjs-video.service';
import { HeroNativeVideoService } from 'src/app/pages/hero/hero-native-video.service';
import { heroImports } from 'src/app/pages/hero/hero.module';
import { HeroVideoService } from './hero-video.service';

describe('HeroVideoService', () => {
  let service: HeroVideoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [...appImports, ...heroImports],
      providers: [
        HeroVideoService,
        HeroNativeVideoService,
        HeroHlsjsVideoService,
      ],
    });
    service = TestBed.inject(HeroVideoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
