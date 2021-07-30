import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap } from 'rxjs/operators';
import * as SidenavActions from '../actions/sidenav.actions';

@Injectable()
export class SidenavEffects {
  loadSidenavs$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SidenavActions.clickedSidenavButton),
      mergeMap(() => [SidenavActions.toggleSidenav()])
    );
  });

  constructor(private actions$: Actions) {}
}
