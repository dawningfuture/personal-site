import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import Hls from 'hls.js';
import { Observable, race, Subject } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BackgroundVideoLoaderService implements CanActivate {
  private hls = new Hls({
    startFragPrefetch: true,
  });

  constructor() {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    this.hls = new Hls({
      startFragPrefetch: true,
    });

    const fragParsed$ = new Subject<void>();

    this.hls.once(Hls.Events.FRAG_PARSED, () => {
      fragParsed$.next();
    });

    const error$ = new Subject<void>();

    this.hls.once(Hls.Events.ERROR, () => {
      error$.next();
    });

    this.hls.loadSource(route.data.heroBackgroundUrl);

    return race(
      fragParsed$.pipe(map(() => true)),
      error$.pipe(map(() => false))
    ).pipe(take(1));
  }

  attachBackground(media: HTMLVideoElement): void {
    this.hls.attachMedia(media);
  }

  detachBackground(): void {
    this.hls.detachMedia();
  }
}
