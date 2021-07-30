import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ofType } from '@ngrx/effects';
import { ActionsSubject, Store } from '@ngrx/store';
import { from, Subject } from 'rxjs';
import { mergeMap, takeUntil } from 'rxjs/operators';
import { State } from 'src/app/state/reducers';
import * as SidenavActions from './state/actions/sidenav.actions';

@Component({
  selector: 'ps-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit, OnDestroy {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  private destroyed$ = new Subject<void>();

  constructor(private actions: ActionsSubject, private store: Store<State>) {}

  ngOnInit(): void {
    this.actions
      .pipe(
        ofType(SidenavActions.toggleSidenav),
        takeUntil(this.destroyed$),
        mergeMap(() => from(this.sidenav.toggle()))
      )
      .subscribe(() => {
        const open = this.sidenav.opened;

        this.store.dispatch(SidenavActions.toggledSidenav({ open }));
      });
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
