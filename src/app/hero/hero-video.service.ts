import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BrowserDetectorService } from 'src/app/core/browser-detector.service';
import { VideoConfig, VideoService } from 'src/app/core/video/video.service';
import { HeroHlsjsVideoService } from 'src/app/hero/hero-hlsjs-video.service';
import { HeroNativeVideoService } from 'src/app/hero/hero-native-video.service';

@Injectable()
export class HeroVideoService extends VideoService {
  constructor(
    protected heroHlsjsVideo: HeroHlsjsVideoService,
    protected heroNativeVideo: HeroNativeVideoService,
    protected browserDetectorService: BrowserDetectorService
  ) {
    super(heroHlsjsVideo, heroNativeVideo, browserDetectorService);
  }

  /**
   *
   * @param config
   * @returns
   */
  init(config: VideoConfig): Observable<boolean> {
    super.init(config);

    const sourceUrl = this.getSourceUrl();

    if (this.useHlsjs()) {
      return this.heroHlsjsVideo.prefetch(sourceUrl).pipe(map(() => true));
    } else {
      return this.heroNativeVideo.prefetch(sourceUrl).pipe(map(() => true));
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

      const sourceUrl = this.getSourceUrl();

      if (this.config) {
        this.nativeVideo.loadSource(sourceUrl);
      }
    }
  }

  /**
   * Overload `destroy` to use `detachMedia` instead of `destroy`
   * when using hls.js
   */
  destroy(): void {
    if (this.useHlsjs()) {
      this.heroHlsjsVideo.detachMedia();
    } else {
      this.nativeVideo.destroy();
    }
  }
}