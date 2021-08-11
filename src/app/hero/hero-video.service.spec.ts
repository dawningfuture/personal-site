import { TestBed } from '@angular/core/testing';
import { HeroVideoService } from './hero-video.service';

describe('HeroVideoService', () => {
  let service: HeroVideoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroVideoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
