import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { routerNavigatedAction } from '@ngrx/router-store';
import { mergeMap } from 'rxjs/operators';
import * as SidenavActions from 'src/app/layout/sidenav/state/actions/sidenav.actions';

@Injectable()
export class RouterEffects {
  navigated$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(routerNavigatedAction),
      mergeMap(() => [SidenavActions.closeSidenav()])
    );
  });

  constructor(private actions$: Actions) {}
}
