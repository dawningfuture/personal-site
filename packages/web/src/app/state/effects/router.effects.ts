import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  routerCancelAction,
  routerErrorAction,
  routerNavigatedAction,
} from '@ngrx/router-store';
import { filter, mergeMap, tap } from 'rxjs/operators';
import * as SidenavActions from 'src/app/sidenav/store/actions/sidenav.actions';

@Injectable()
export class RouterEffects {
  initialCancelNavigation$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(routerCancelAction, routerErrorAction),
        filter((action) => action.payload.event.id === 1),
        tap(() => this.router.navigate(['/']))
      ),
    {
      dispatch: false,
    }
  );

  scrollPositionTopOnNavigation = createEffect(() =>
    this.actions$.pipe(
      ofType(routerNavigatedAction),
      mergeMap(() => [SidenavActions.scrollTopContent()])
    )
  );

  constructor(private actions$: Actions, private router: Router) {}
}
