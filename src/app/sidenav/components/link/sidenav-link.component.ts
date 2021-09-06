import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import * as SidenavActions from 'src/app/sidenav/store/actions/sidenav.actions';

@Component({
  selector: 'ps-sidenav-link',
  templateUrl: './sidenav-link.component.html',
  styleUrls: ['./sidenav-link.component.scss'],
})
export class SidenavLinkComponent {
  @Input() label = '';
  @Input() path = '';

  constructor(private store: Store) {}

  onClick(): void {
    this.store.dispatch(
      SidenavActions.clickedLink({
        path: this.path,
      })
    );
  }
}
