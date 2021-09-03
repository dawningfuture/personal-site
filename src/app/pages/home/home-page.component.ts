import { ScrollDispatcher } from '@angular/cdk/scrolling';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { take } from 'rxjs/operators';
import * as HomePageActions from 'src/app/pages/home/store/actions/home-page.actions';

@Component({
  selector: 'ps-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  constructor(private scrolling: ScrollDispatcher, private store: Store) {
    this.scrolling
      .scrolled(500)
      .pipe(take(1))
      .subscribe(() => this.store.dispatch(HomePageActions.scrolled()));
  }
}
