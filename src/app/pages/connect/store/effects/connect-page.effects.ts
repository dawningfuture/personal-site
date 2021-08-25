import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, mergeMap, switchMap, tap } from 'rxjs/operators';
import { ConnectPageService } from 'src/app/pages/connect/services/connect-page.service';
import * as ConnectPageActions from 'src/app/pages/connect/store/actions/connect-page.actions';

@Injectable()
export class ConnectPageEffects {
  submittedForm$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ConnectPageActions.submittedForm),
      mergeMap((action) => [
        ConnectPageActions.sendConnectEmail({
          email: action.value,
        }),
      ])
    )
  );

  sendConnectEmail$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ConnectPageActions.sendConnectEmail),
      switchMap((action) =>
        this.connectPage.sendConnectEmail(action.email).pipe(
          mergeMap(() => [ConnectPageActions.sendConnectEmailSuccess()]),
          catchError(() => [ConnectPageActions.sendConnectEmailFailure()])
        )
      )
    )
  );

  sendConnectEmailFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ConnectPageActions.sendConnectEmailFailure),
        tap(() =>
          this.matSnackBar.open(
            'Sorry, there was a problem sending your message',
            'Ok'
          )
        )
      ),
    {
      dispatch: false,
    }
  );

  constructor(
    private actions$: Actions,
    private connectPage: ConnectPageService,
    private matSnackBar: MatSnackBar
  ) {}
}
