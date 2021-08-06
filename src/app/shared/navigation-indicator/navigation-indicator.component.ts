import { Component, OnInit } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import {
  routerCancelAction,
  routerErrorAction,
  routerNavigatedAction,
  routerRequestAction,
} from '@ngrx/router-store';
import { merge, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'ps-navigation-indicator',
  templateUrl: './navigation-indicator.component.html',
  styleUrls: ['./navigation-indicator.component.scss'],
})
export class NavigationIndicatorComponent implements OnInit {
  navigating$!: Observable<boolean>;

  constructor(private actions$: Actions) {}

  ngOnInit(): void {
    this.navigating$ = merge(
      this.actions$.pipe(
        ofType(routerRequestAction),
        map(() => true)
      ),
      this.actions$.pipe(
        ofType(routerNavigatedAction),
        map(() => false)
      ),
      this.actions$.pipe(
        ofType(routerCancelAction),
        map(() => false)
      ),
      this.actions$.pipe(
        ofType(routerErrorAction),
        map(() => false)
      )
    );
  }
}
