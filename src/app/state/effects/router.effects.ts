import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { routerCancelAction, routerErrorAction } from '@ngrx/router-store';
import { filter, tap } from 'rxjs/operators';

@Injectable()
export class RouterEffects {
  initialCancel$ = createEffect(
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

  constructor(private actions$: Actions, private router: Router) {}
}
