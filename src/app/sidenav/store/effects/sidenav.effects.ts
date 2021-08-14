import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, tap } from 'rxjs/operators';
import * as SidenavActions from '../actions/sidenav.actions';

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

  constructor(private actions$: Actions, private router: Router) {}
}
