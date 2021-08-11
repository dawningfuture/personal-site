import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HeroHlsjsVideoService } from 'src/app/hero/hero-hlsjs-video.service';

@Injectable()
export class HeroVideoGuard implements CanActivate {
  constructor(
    private heroHlsjsVideo: HeroHlsjsVideoService,
    private matSnackBar: MatSnackBar
  ) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.heroHlsjsVideo.prefetch(route.data.hero.video.hlsUrl).pipe(
      map(() => true),
      catchError(() => {
        this.onError();

        return of(false);
      })
    );
  }

  private onError(): void {
    // tslint:disable-next-line: quotemark
    this.matSnackBar.open("Sorry, I couldn't show you the Dance page", 'Ok', {
      duration: 5000,
    });
  }
}
