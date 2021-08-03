import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as SidenavActions from 'src/app/state/features/sidenav/actions/sidenav.actions';
import { State } from 'src/app/state/features/sidenav/reducers/sidenav.reducer';
@Component({
  selector: 'ps-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  constructor(private store: Store<State>) {}

  ngOnInit(): void {}

  onCallToActionButtonClicked(): void {
    this.store.dispatch(SidenavActions.open());
  }
}
