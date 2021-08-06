import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PageBackgroundLoadResolverService implements Resolve<SafeUrl> {
  constructor(
    private httpClient: HttpClient,
    private sanitizer: DomSanitizer
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<SafeUrl> {
    return this.httpClient
      .get(
        'https://media.matthewthompson.us/personal-site/dance-hero-background.mp4',
        {
          responseType: 'blob',
        }
      )
      .pipe(
        map((imageBlob) =>
          this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(imageBlob))
        )
      );
  }
}
