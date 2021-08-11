import { TestBed } from '@angular/core/testing';
import { HlsjsVideoService } from './hlsjs-video.service';

describe('HlsjsVideoService', () => {
  let service: HlsjsVideoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HlsjsVideoService],
    });
    service = TestBed.inject(HlsjsVideoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
