import { Provider } from '@angular/core';
import { Observable } from 'rxjs';
import { HlsjsVideoService } from 'src/app/video/hlsjs-video.service';
import { NativeVideoService } from 'src/app/video/native-video.service';
import {
  VideoConfig,
  VideoRendererService,
} from 'src/app/video/video-renderer.service';
import { environment } from 'src/environments/environment';

export class VideoService {
  constructor(private videoRenderer: VideoRendererService) {}

  prefetch(config: VideoConfig): Observable<void> {
    return this.videoRenderer.prefetch(config);
  }

  autoplay(videoEl: HTMLVideoElement, config?: VideoConfig): Observable<void> {
    videoEl.muted = true;
    videoEl.autoplay = true;
    videoEl.playsInline = true;

    return this.videoRenderer.autoplay(videoEl);
  }

  destroy(): void {
    this.videoRenderer.destroy();
  }
}

const videoServiceFactory = (
  hlsjsVideo: HlsjsVideoService,
  nativeVideo: NativeVideoService
) => {
  const useHlsjs = HlsjsVideoService.isSupported && environment.useHlsjs;

  const videoRendererService = useHlsjs ? hlsjsVideo : nativeVideo;

  return new VideoService(videoRendererService);
};

export const videoServiceProvider: Provider = {
  provide: VideoService,
  useFactory: videoServiceFactory,
  deps: [HlsjsVideoService, NativeVideoService],
};
