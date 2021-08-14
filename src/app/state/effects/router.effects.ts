import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { routerCancelAction, routerNavigatedAction } from '@ngrx/router-store';
import { Store } from '@ngrx/store';
import { filter, map, mergeMap, tap } from 'rxjs/operators';
import * as SidenavActions from 'src/app/sidenav/store/actions/sidenav.actions';
import { selectSidenavOpen } from 'src/app/sidenav/store/selectors/sidenav.selectors';

@Injectable()
export class RouterEffects {
  navigated$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(routerNavigatedAction),
      map(() => this.store.select(selectSidenavOpen)),
      mergeMap((sidenavOpen) =>
        sidenavOpen ? [SidenavActions.closeDrawer()] : []
      )
    );
  });

  initialCancel$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(routerCancelAction),
        filter((action) => action.payload.event.id === 1),
        tap(() => this.router.navigate(['/']))
      );
    },
    {
      dispatch: false,
    }
  );

  constructor(
    private actions$: Actions,
    private store: Store,
    private router: Router
  ) {}
}
