import { TestBed } from '@angular/core/testing';
import { HeroBackgroundVideoLoaderService } from './hero-background-video-loader.service';

describe('HeroBackgroundVideoLoaderService', () => {
  let service: HeroBackgroundVideoLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroBackgroundVideoLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
