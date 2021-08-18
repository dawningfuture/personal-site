import { TestBed } from '@angular/core/testing';
import { appImports } from 'src/app/app.module';
import { HeroHlsjsVideoService } from 'src/app/hero/hero-hlsjs-video.service';
import { HeroNativeVideoService } from 'src/app/hero/hero-native-video.service';
import { HeroVideoService } from 'src/app/hero/hero-video.service';
import { heroImports } from 'src/app/hero/hero.module';
import { HeroVideoGuard } from './hero-video.guard';

describe('HeroVideoGuard', () => {
  let guard: HeroVideoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [...appImports, ...heroImports],
      providers: [
        HeroVideoGuard,
        HeroVideoService,
        HeroHlsjsVideoService,
        HeroNativeVideoService,
      ],
    });
    guard = TestBed.inject(HeroVideoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
