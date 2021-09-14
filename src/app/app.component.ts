import { trigger } from '@angular/animations';
import { Component, OnDestroy } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import {
  routerCancelAction,
  routerErrorAction,
  routerNavigatedAction,
  routerRequestAction,
} from '@ngrx/router-store';
import { merge, Observable, Subject } from 'rxjs';
import { map, startWith, take, takeUntil } from 'rxjs/operators';
import { animateChildrenOnLeave } from 'src/app/animations/utility.animations';

@Component({
  selector: 'ps-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [trigger('initialized', [animateChildrenOnLeave()])],
})
export class AppComponent implements OnDestroy {
  hasNavigated$: Observable<boolean>;
  navigating$: Observable<boolean>;

  private destroyed$ = new Subject<void>();

  constructor(private actions$: Actions) {
    this.hasNavigated$ = this.actions$.pipe(
      ofType(routerNavigatedAction),
      map(() => true),
      take(1),
      startWith(false)
    );

    this.navigating$ = merge(
      this.actions$.pipe(
        ofType(routerRequestAction),
        map(() => true)
      ),
      this.actions$.pipe(
        ofType(routerNavigatedAction),
        map(() => false)
      ),
      this.actions$.pipe(
        ofType(routerCancelAction),
        map(() => false)
      ),
      this.actions$.pipe(
        ofType(routerErrorAction),
        map(() => false)
      )
    ).pipe(takeUntil(this.destroyed$));
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
