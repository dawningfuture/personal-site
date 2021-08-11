import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { NativeVideoService } from 'src/app/core/video/native-video.service';
import { VideoConfig, VideoService } from 'src/app/core/video/video.service';
import { HeroHlsjsVideoService } from 'src/app/hero/hero-hlsjs-video.service';

@Injectable()
export class HeroVideoService extends VideoService {
  constructor(
    protected heroHlsjsVideo: HeroHlsjsVideoService,
    protected nativeVideo: NativeVideoService
  ) {
    super(heroHlsjsVideo, nativeVideo);
  }

  /**
   *
   * @param config
   * @returns
   */
  init(config: VideoConfig): Observable<boolean> {
    super.init(config);

    if (this.useHlsjs()) {
      return this.heroHlsjsVideo.prefetch(config.hls.url).pipe(map(() => true));
    } else {
      return of(true);
    }
  }

  /**
   *
   */
  loadVideo(el: HTMLVideoElement): void {
    if (this.useHlsjs()) {
      this.hlsjsVideo.setVideo(el);
    } else {
      this.nativeVideo.setVideo(el);

      if (this.config) {
        this.nativeVideo.loadSource(this.config?.native.url);
      }
    }
  }

  /**
   * Overload `destroy`
   */
  destroy(): void {
    if (this.useHlsjs()) {
      this.heroHlsjsVideo.detachMedia();
    } else {
      this.nativeVideo.destroy();
    }
  }
}
