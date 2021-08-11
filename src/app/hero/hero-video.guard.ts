import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HeroVideoService } from 'src/app/hero/hero-video.service';

@Injectable()
export class HeroVideoGuard implements CanActivate {
  constructor(
    private heroVideo: HeroVideoService,
    private matSnackBar: MatSnackBar
  ) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.heroVideo
      .init({
        native: {
          url: route.data.hero.video.url,
        },
        hls: {
          url: route.data.hero.video.hlsUrl,
        },
      })
      .pipe(
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
