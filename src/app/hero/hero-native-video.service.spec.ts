import { TestBed } from '@angular/core/testing';
import { appImports } from 'src/app/app.module';
import { HeroNativeVideoService } from 'src/app/hero/hero-native-video.service';
import { HeroModule } from 'src/app/hero/hero.module';

describe('HeroNativeVideoService', () => {
  let service: HeroNativeVideoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [...appImports, HeroModule],
    });
    service = TestBed.inject(HeroNativeVideoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
