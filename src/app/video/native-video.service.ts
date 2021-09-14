import { Injectable } from '@angular/core';
import { filter } from 'rxjs/operators';
import { BrowserDetectorService } from 'src/app/core/browser-detector.service';
import {
  VisibilityService,
  VisibilityStates,
} from 'src/app/core/visibility.service';
import { VideoRendererService } from 'src/app/video/video-renderer.service';

@Injectable()
export class NativeVideoService extends VideoRendererService {
  constructor(
    protected browserDetector: BrowserDetectorService,
    private visibility: VisibilityService
  ) {
    super(browserDetector);

    this.visibility.visibilityChange$
      .pipe(
        filter(
          (visibilityState) => visibilityState === VisibilityStates.VISIBLE
        )
      )
      .subscribe(() => {
        if (this.videoEl) {
          this.videoEl.currentTime = 0;

          this.videoEl.play();
        }
      });
  }
}
