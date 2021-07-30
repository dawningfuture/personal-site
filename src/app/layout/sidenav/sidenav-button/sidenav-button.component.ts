import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/state/reducers';
import * as SidenavActions from '../state/actions/sidenav.actions';

@Component({
  selector: 'ps-sidenav-button',
  templateUrl: './sidenav-button.component.html',
  styleUrls: ['./sidenav-button.component.scss'],
})
export class SidenavButtonComponent implements OnInit {
  constructor(private store: Store<State>) {}

  ngOnInit(): void {}

  onClick(): void {
    this.store.dispatch(SidenavActions.clickedSidenavButton());
  }
}
