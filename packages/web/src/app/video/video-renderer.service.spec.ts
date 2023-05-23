import { TestBed } from '@angular/core/testing';
import { appImports } from 'src/app/app.module';
import { VideoModule } from 'src/app/video/video.module';
import { VideoRendererService } from './video-renderer.service';

describe('VideoRendererService', () => {
  let service: VideoRendererService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [...appImports, VideoModule],
      providers: [VideoRendererService],
    });
    service = TestBed.inject(VideoRendererService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
