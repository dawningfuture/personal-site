import { Injectable } from '@angular/core';
import Hls from 'hls.js';
import { Observable, of, race, Subject } from 'rxjs';
import { take } from 'rxjs/operators';
import { HlsjsVideoService } from 'src/app/core/video/hlsjs-video.service';

@Injectable()
export class HeroHlsjsVideoService extends HlsjsVideoService {
  constructor() {
    super();

    this.hls.config.startFragPrefetch = true;
  }

  prefetch(url: string): Observable<void> {
    if (!Hls.isSupported()) {
      return of();
    }

    const fragParsed$ = new Subject<void>();

    this.hls.once(Hls.Events.FRAG_PARSED, () => {
      fragParsed$.next();
    });

    const error$ = new Subject<void>();

    this.hls.once(Hls.Events.ERROR, () => {
      error$.error(null);
    });

    this.hls.loadSource(url);

    return race(fragParsed$, error$).pipe(take(1));
  }
}
