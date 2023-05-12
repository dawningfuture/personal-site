import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as HomePageActions from 'src/app/pages/home/store/actions/home-page.actions';

@Component({
  selector: 'ps-home-cta-button',
  templateUrl: './home-cta-button.component.html',
  styleUrls: ['./home-cta-button.component.scss'],
})
export class HomeCtaButtonComponent {
  constructor(private store: Store) {}

  onCtaButtonClicked(): void {
    this.store.dispatch(HomePageActions.clickedCtaButton());
  }
}
