import { TestBed } from '@angular/core/testing';
import { appImports } from 'src/app/app.module';
import { heroImports } from 'src/app/pages/hero/hero.module';
import { HeroNativeVideoService } from './hero-native-video.service';

describe('HeroNativeVideoService', () => {
  let service: HeroNativeVideoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [...appImports, ...heroImports],
      providers: [HeroNativeVideoService],
    });
    service = TestBed.inject(HeroNativeVideoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
