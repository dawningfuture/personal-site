import { animate, style, transition, trigger } from '@angular/animations';
import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ofType } from '@ngrx/effects';
import { routerNavigatedAction } from '@ngrx/router-store';
import { ActionsSubject, Store } from '@ngrx/store';
import { from, Observable, Subject } from 'rxjs';
import { map, startWith, take, takeUntil } from 'rxjs/operators';
import * as SidenavActions from 'src/app/sidenav/store/actions/sidenav.actions';

@Component({
  selector: 'ps-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('slideOut', [
      transition(':leave', [
        style({ opacity: 1 }),
        animate(
          '400ms ease-in',
          style({
            opacity: 0,
          })
        ),
      ]),
    ]),
  ],
})
export class SidenavComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  hasNavigated$!: Observable<boolean>;

  private destroyed$ = new Subject<void>();

  constructor(private actions$: ActionsSubject, private store: Store) {}

  ngOnInit(): void {
    this.hasNavigated$ = this.actions$.pipe(
      ofType(routerNavigatedAction),
      map(() => true),
      take(1),
      startWith(false)
    );
  }

  ngAfterViewInit(): void {
    this.actions$
      .pipe(
        ofType(SidenavActions.toggleDrawer),
        map(() => from(this.sidenav.toggle())),
        takeUntil(this.destroyed$)
      )
      .subscribe(() => {
        const open = this.sidenav.opened;

        this.store.dispatch(SidenavActions.toggledDrawer({ open }));
      });

    this.actions$
      .pipe(
        ofType(SidenavActions.openDrawer),
        map(() => from(this.sidenav.open())),
        takeUntil(this.destroyed$)
      )
      .subscribe(() => {
        this.store.dispatch(SidenavActions.openedDrawer());
      });

    this.actions$
      .pipe(
        ofType(SidenavActions.closeDrawer),
        map(() => from(this.sidenav.close())),
        takeUntil(this.destroyed$)
      )
      .subscribe(() => {
        this.store.dispatch(SidenavActions.closedDrawer());
      });
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  onBackdropClick(): void {
    this.store.dispatch(SidenavActions.clickedBackdrop());
  }
}
