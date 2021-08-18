import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BrowserDetectorService } from 'src/app/core/browser-detector.service';
import { HeroHlsjsVideoService } from 'src/app/hero/hero-hlsjs-video.service';
import { HeroNativeVideoService } from 'src/app/hero/hero-native-video.service';
import { VideoConfig, VideoService } from 'src/app/video/video.service';

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
   * Overloads `init` to prefetch video to prevent stalled video
   * on navigation
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
   * Sets the video element and immediately loads the source to
   * enable autoplay for Heroes
   */
  loadVideo(el: HTMLVideoElement): void {
    // NOTE: Even though `muted` attribute is set on the `<video>` element
    // in Heroes, it has to be reset here to allow autoplay
    el.muted = true;

    if (this.useHlsjs()) {
      this.hlsjsVideo.setVideo(el);
    } else {
      this.nativeVideo.setVideo(el);

      const sourceUrl = this.getSourceUrl();

      this.nativeVideo.loadSource(sourceUrl);
    }
  }

  /**
   * Overloads `destroy` to use `detachMedia` instead of `destroy`
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
