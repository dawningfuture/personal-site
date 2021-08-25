import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as SidenavActions from 'src/app/sidenav/store/actions/sidenav.actions';

@Component({
  selector: 'ps-sidenav-button',
  templateUrl: './sidenav-button.component.html',
  styleUrls: ['./sidenav-button.component.scss'],
})
export class SidenavButtonComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {}

  onClick(): void {
    this.store.dispatch(SidenavActions.clickedButton());
  }
}
