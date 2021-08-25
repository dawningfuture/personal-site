import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { routerNavigatedAction } from '@ngrx/router-store';
import { Store } from '@ngrx/store';
import { map, mergeMap, tap } from 'rxjs/operators';
import * as SidenavActions from 'src/app/sidenav/store/actions/sidenav.actions';
import { selectSidenavOpen } from 'src/app/sidenav/store/selectors/sidenav.selectors';

@Injectable()
export class SidenavEffects {
  clickedButton$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SidenavActions.clickedButton),
      mergeMap(() => [SidenavActions.toggleDrawer()])
    );
  });

  clickedLink$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(SidenavActions.clickedLink),
        tap((action) => this.router.navigateByUrl(action.path))
      );
    },
    {
      dispatch: false,
    }
  );

  clickedBackdrop$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SidenavActions.clickedBackdrop),
      mergeMap(() => [SidenavActions.closeDrawer()])
    );
  });

  routerNavigated$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(routerNavigatedAction),
      map(() => this.store.select(selectSidenavOpen)),
      mergeMap((sidenavOpen) =>
        sidenavOpen ? [SidenavActions.closeDrawer()] : []
      )
    );
  });

  constructor(
    private actions$: Actions,
    private store: Store,
    private router: Router
  ) {}
}
