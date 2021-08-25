import { TestBed } from '@angular/core/testing';
import { appImports } from 'src/app/app.module';
import { HeroVideoGuard } from 'src/app/hero/hero-video.guard';
import { HeroModule } from 'src/app/hero/hero.module';

describe('HeroVideoGuard', () => {
  let guard: HeroVideoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [...appImports, HeroModule],
    });
    guard = TestBed.inject(HeroVideoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
