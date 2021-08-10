import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import Hls from 'hls.js';
import { Observable, of, race, Subject } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HeroBackgroundVideoLoaderService implements CanActivate {
  private hls = new Hls({
    startFragPrefetch: true,
  });

  constructor(private matSnackBar: MatSnackBar) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    if (!Hls.isSupported()) {
      this.onError();

      return of(false);
    }

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
      error$.pipe(
        tap(() => this.onError()),
        map(() => false)
      )
    ).pipe(take(1));
  }

  attachBackground(media: HTMLVideoElement): void {
    this.hls.attachMedia(media);
  }

  detachBackground(): void {
    this.hls.detachMedia();
  }

  private onError(): void {
    // tslint:disable-next-line: quotemark
    this.matSnackBar.open("Sorry, I couldn't show you the Dance page", 'Ok', {
      duration: 5000,
    });
  }
}
