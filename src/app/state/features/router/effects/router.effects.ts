import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { routerNavigatedAction } from '@ngrx/router-store';
import { Store } from '@ngrx/store';
import { map, mergeMap } from 'rxjs/operators';
import * as SidenavActions from 'src/app/state/features/sidenav/actions/sidenav.actions';
import { selectSidenavOpen } from 'src/app/state/features/sidenav/selectors/sidenav.selectors';
import { State } from 'src/app/state/reducers';

@Injectable()
export class RouterEffects {
  navigated$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(routerNavigatedAction),
      map(() => this.store.select(selectSidenavOpen)),
      mergeMap((sidenavOpen) =>
        sidenavOpen ? [SidenavActions.closeSidenav()] : []
      )
    );
  });

  constructor(private actions$: Actions, private store: Store<State>) {}
}
