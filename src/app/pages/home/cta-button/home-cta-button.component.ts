import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as SidenavActions from 'src/app/sidenav/store/actions/sidenav.actions';

@Component({
  selector: 'ps-home-cta-button',
  templateUrl: './home-cta-button.component.html',
  styleUrls: ['./home-cta-button.component.scss'],
})
export class HomeCtaButtonComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {}

  onCtaButtonClicked(): void {
    this.store.dispatch(SidenavActions.openDrawer());
  }
}
