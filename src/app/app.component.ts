import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { routerNavigatedAction } from '@ngrx/router-store';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'ps-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('fadeOut', [
      transition(':leave', [
        style({
          opacity: 1,
          position: 'absolute',
          top: '0',
          left: '0',
          bottom: '0',
          right: '0',
          zIndex: 2,
        }),
        animate(
          '400ms ease-out',
          style({
            opacity: 0,
          })
        ),
      ]),
    ]),
  ],
})
export class AppComponent {
  hasNavigated$: Observable<boolean>;

  constructor(private actions$: Actions) {
    this.hasNavigated$ = this.actions$.pipe(
      ofType(routerNavigatedAction),
      map(() => true),
      startWith(false)
    );
  }
}
