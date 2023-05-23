import { trigger } from '@angular/animations';
import { Component, Input } from '@angular/core';
import { of, timer } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import {
  fadeInOnEnter,
  fadeOutOnLeave,
} from 'src/app/animations/visibility.animations';

@Component({
  selector: 'ps-loading-indicator',
  templateUrl: './loading-indicator.component.html',
  styleUrls: ['./loading-indicator.component.scss'],
  animations: [
    trigger('fadeIn', [fadeInOnEnter()]),
    trigger('fadeOut', [fadeOutOnLeave()]),
  ],
})
export class LoadingIndicatorComponent {
  @Input() headline = '';

  showHeadline$ = of(false).pipe(
    mergeMap(() => timer(2000).pipe(map(() => true)))
  );
}
