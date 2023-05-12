import { Injectable } from '@angular/core';
import { Observable, of, race, Subject } from 'rxjs';
import { take } from 'rxjs/operators';
import {
  BrowserDetectorService,
  BrowserNames,
  PlatformTypes,
} from 'src/app/core/browser-detector.service';

export interface VideoConfig {
  sources: {
    mp4Url: string;
    hlsTsUrl: string;
    hlsFmp4Url: string;
  };
}

@Injectable()
export class VideoRendererService {
  protected videoEl?: HTMLVideoElement;
  protected config?: VideoConfig;

  constructor(protected browserDetector: BrowserDetectorService) {}

  prefetch(config: VideoConfig): Observable<void> {
    this.config = config;

    return of(undefined);
  }

  autoplay(videoEl: HTMLVideoElement, config?: VideoConfig): Observable<void> {
    this.videoEl = videoEl;

    if (config) {
      this.config = config;
    }

    const sourceUrl = this.getSourceUrl();
    this.videoEl.src = sourceUrl;

    return this.createCanPlayListener();
  }

  destroy(): void {
    if (this.videoEl) {
      this.videoEl.src = '';
    }

    this.videoEl = undefined;
  }

  protected createCanPlayListener(): Observable<void> {
    const playing$ = new Subject<void>();
    const error$ = new Subject<void>();

    if (this.videoEl) {
      this.videoEl.oncanplay = () => {
        playing$.next();
      };

      this.videoEl.onerror = () => {
        error$.error(undefined);
      };
    }

    return race(playing$, error$).pipe(take(1));
  }

  protected getSourceUrl(): string {
    if (
      this.browserDetector.isBrowserName(BrowserNames.SAFARI) &&
      this.browserDetector.isPlatformType(PlatformTypes.MOBILE)
    ) {
      return this.config?.sources.hlsFmp4Url || '';
    }

    return this.config?.sources.mp4Url || '';
  }
}
