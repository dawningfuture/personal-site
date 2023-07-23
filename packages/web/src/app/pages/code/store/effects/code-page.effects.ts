import { ViewportScroller } from '@angular/common';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, tap } from 'rxjs/operators';
import * as CodePageActions from 'src/app/pages/code/store/actions/code-page.actions';

@Injectable()
export class CodePageEffects {
  scrollToSection$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CodePageActions.scrollToSection),
        tap((action) => {
          this.viewportScroller.scrollToAnchor(action.section);
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private viewportScroller: ViewportScroller
  ) {}
}
