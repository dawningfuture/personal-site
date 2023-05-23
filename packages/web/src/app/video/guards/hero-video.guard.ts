import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { VideoService } from 'src/app/video/video.service';

@Injectable()
export class HeroVideoGuard implements CanActivate {
  constructor(private video: VideoService, private matSnackBar: MatSnackBar) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.video
      .prefetch({
        sources: route.data.hero.videoSources,
      })
      .pipe(
        map(() => true),
        catchError(() => {
          this.onError();

          return of(false);
        })
      );
  }

  private onError(): void {
    // tslint:disable-next-line: quotemark
    this.matSnackBar.open("Sorry, I couldn't show you the Dance page", 'Ok');
  }
}
