import { TestBed } from '@angular/core/testing';
import { HeroVideoGuard } from './hero-video.guard';

describe('HeroVideoGuard', () => {
  let guard: HeroVideoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(HeroVideoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
