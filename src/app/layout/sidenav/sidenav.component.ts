import {
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ofType } from '@ngrx/effects';
import { ActionsSubject, Store } from '@ngrx/store';
import { from, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { State } from 'src/app/state/reducers';
import * as SidenavActions from '../../state/features/sidenav/actions/sidenav.actions';

@Component({
  selector: 'ps-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SidenavComponent implements OnInit, OnDestroy {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  private destroyed$ = new Subject<void>();

  constructor(private actions$: ActionsSubject, private store: Store<State>) {}

  ngOnInit(): void {
    this.actions$
      .pipe(
        ofType(SidenavActions.toggle),
        map(() => from(this.sidenav.toggle())),
        takeUntil(this.destroyed$)
      )
      .subscribe(() => {
        const open = this.sidenav.opened;

        this.store.dispatch(SidenavActions.toggled({ open }));
      });

    this.actions$
      .pipe(
        ofType(SidenavActions.open),
        map(() => from(this.sidenav.open())),
        takeUntil(this.destroyed$)
      )
      .subscribe(() => {
        this.store.dispatch(SidenavActions.opened());
      });

    this.actions$
      .pipe(
        ofType(SidenavActions.close),
        map(() => from(this.sidenav.close())),
        takeUntil(this.destroyed$)
      )
      .subscribe(() => {
        this.store.dispatch(SidenavActions.closed());
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
