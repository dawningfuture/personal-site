import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { routerRequestAction } from '@ngrx/router-store';
import { timer } from 'rxjs';
import { mergeMap, switchMap, takeUntil } from 'rxjs/operators';
import * as HomePageActions from 'src/app/pages/home/store/actions/home-page.actions';
import * as SidenavActions from 'src/app/sidenav/store/actions/sidenav.actions';

@Injectable()
export class HomePageEffects {
  clickedCtaButton$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HomePageActions.clickedCtaButton),
      mergeMap(() => [SidenavActions.openDrawer()])
    )
  );

  scrolled$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HomePageActions.scrolled),
      switchMap(() =>
        timer(0, 2000).pipe(
          takeUntil(
            this.actions$.pipe(
              ofType(
                routerRequestAction,
                SidenavActions.openedDrawer,
                SidenavActions.toggledDrawer
              )
            )
          ),
          mergeMap(() => [
            SidenavActions.rippleButton(),
            HomePageActions.rippleCtaButton(),
          ])
        )
      )
    )
  );

  constructor(private actions$: Actions) {}
}
