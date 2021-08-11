import { Injectable } from '@angular/core';
import { Observable, race, Subject } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import { NativeVideoService } from 'src/app/core/video/native-video.service';
import { VisibilityService } from 'src/app/core/visibility.service';

@Injectable()
export class HeroNativeVideoService extends NativeVideoService {
  constructor(private visibility: VisibilityService) {
    super();

    this.visibility.visibile$.subscribe(() => {
      if (this.videoEl) {
        this.videoEl.currentTime = 0;

        this.videoEl.play();
      }
    });
  }

  prefetch(url: string): Observable<void> {
    this.videoEl = document.createElement('video');

    this.videoEl.muted = true;
    this.videoEl.autoplay = true;
    this.videoEl.playsInline = true;

    const canPlay$ = new Subject<void>();

    this.videoEl.oncanplay = () => {
      canPlay$.next();
    };

    const error$ = new Subject<void>();

    this.videoEl.onerror = () => {
      error$.error(undefined);
    };

    this.loadSource(url);

    return race(canPlay$, error$).pipe(
      tap(() => this.destroy()),
      take(1)
    );
  }
}
