import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { of, timer } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'ps-initialization-indicator',
  templateUrl: './initialization-indicator.component.html',
  styleUrls: ['./initialization-indicator.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s ease-in', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class InitializationIndicatorComponent {
  showHeadline$ = of(false).pipe(
    mergeMap(() => timer(2000).pipe(map(() => true)))
  );

  constructor() {}
}
