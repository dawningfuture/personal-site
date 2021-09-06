import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatRipple } from '@angular/material/core';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import * as SidenavActions from 'src/app/sidenav/store/actions/sidenav.actions';

@Component({
  selector: 'ps-sidenav-button',
  templateUrl: './sidenav-button.component.html',
  styleUrls: ['./sidenav-button.component.scss'],
})
export class SidenavButtonComponent implements AfterViewInit {
  @ViewChild(MatRipple) ripple!: MatRipple;

  constructor(private store: Store, private actions$: Actions) {}

  ngAfterViewInit(): void {
    this.actions$.pipe(ofType(SidenavActions.rippleButton)).subscribe(() =>
      this.ripple.launch({
        centered: true,
      })
    );
  }

  onClick(): void {
    this.store.dispatch(SidenavActions.clickedButton());
  }
}
