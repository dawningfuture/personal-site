import { TestBed } from '@angular/core/testing';
import { HeroHlsjsVideoService } from './hero-hlsjs-video.service';

describe('HeroHlsjsVideoService', () => {
  let service: HeroHlsjsVideoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroHlsjsVideoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
