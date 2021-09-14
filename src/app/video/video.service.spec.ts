import { TestBed } from '@angular/core/testing';
import { appImports } from 'src/app/app.module';
import { VideoModule } from 'src/app/video/video.module';
import {
  VideoService,
  videoServiceProvider,
} from 'src/app/video/video.service';

describe('VideoService', () => {
  let service: VideoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [...appImports, VideoModule],
      providers: [videoServiceProvider],
    });
    service = TestBed.inject(VideoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
