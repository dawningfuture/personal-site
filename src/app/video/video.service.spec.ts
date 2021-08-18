import { TestBed } from '@angular/core/testing';
import { BrowserDetectorService } from 'src/app/core/browser-detector.service';
import { HlsjsVideoService } from 'src/app/video/hlsjs-video.service';
import { NativeVideoService } from 'src/app/video/native-video.service';
import { VideoService } from './video.service';

describe('VideoService', () => {
  let service: VideoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        VideoService,
        HlsjsVideoService,
        NativeVideoService,
        BrowserDetectorService,
      ],
    });
    service = TestBed.inject(VideoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
