import { TestBed } from '@angular/core/testing';
import { appImports } from 'src/app/app.module';
import { HeroVideoGuard } from 'src/app/video/guards/hero-video.guard';
import { VideoModule } from 'src/app/video/video.module';

describe('HeroVideoGuard', () => {
  let guard: HeroVideoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [...appImports, VideoModule],
      providers: [HeroVideoGuard],
    });
    guard = TestBed.inject(HeroVideoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
