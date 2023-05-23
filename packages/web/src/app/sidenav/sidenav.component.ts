import {
  AfterViewInit,
  Component,
  OnDestroy,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { MatSidenav, MatSidenavContent } from '@angular/material/sidenav';
import { ofType } from '@ngrx/effects';
import { ActionsSubject, Store } from '@ngrx/store';
import { from, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import * as SidenavActions from 'src/app/sidenav/store/actions/sidenav.actions';

@Component({
  selector: 'ps-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SidenavComponent implements AfterViewInit, OnDestroy {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  @ViewChild('sidenavContent') sidenavContent!: MatSidenavContent;

  private destroyed$ = new Subject<void>();

  constructor(private actions$: ActionsSubject, private store: Store) {}

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

    this.actions$
      .pipe(ofType(SidenavActions.scrollTopContent), takeUntil(this.destroyed$))
      .subscribe(() => {
        this.sidenavContent.scrollTo({ top: 0 });
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
