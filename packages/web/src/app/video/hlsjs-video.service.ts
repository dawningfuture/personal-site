import { Injectable } from '@angular/core';
import Hls from 'hls.js';
import { Observable, race, Subject } from 'rxjs';
import { take } from 'rxjs/operators';
import { BrowserDetectorService } from 'src/app/core/browser-detector.service';
import {
  VideoConfig,
  VideoRendererService,
} from 'src/app/video/video-renderer.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class HlsjsVideoService extends VideoRendererService {
  static isSupported = Hls.isSupported();

  private hls: Hls;

  constructor(protected browserDetector: BrowserDetectorService) {
    super(browserDetector);

    this.hls = new Hls({
      debug: !environment.production,
    });
  }

  prefetch(config: VideoConfig): Observable<void> {
    this.config = config;

    this.hls.config.startFragPrefetch = true;

    const fragParsed$ = new Subject<void>();

    this.hls.once(Hls.Events.FRAG_PARSED, () => {
      fragParsed$.next();
    });

    const error$ = new Subject<void>();

    this.hls.once(Hls.Events.ERROR, () => {
      error$.error(null);
    });

    this.hls.loadSource(this.config.sources.hlsTsUrl);

    return race(fragParsed$, error$).pipe(take(1));
  }

  autoplay(videoEl: HTMLVideoElement): Observable<void> {
    this.videoEl = videoEl;

    const canPlay$ = this.createCanPlayListener();

    this.hls.attachMedia(videoEl);

    return canPlay$;
  }

  destroy(): void {
    this.hls.detachMedia();

    super.destroy();
  }
}
