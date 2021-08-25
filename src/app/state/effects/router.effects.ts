import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { routerCancelAction } from '@ngrx/router-store';
import { Store } from '@ngrx/store';
import { filter, tap } from 'rxjs/operators';

@Injectable()
export class RouterEffects {
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
