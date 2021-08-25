import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as SidenavActions from 'src/app/sidenav/store/actions/sidenav.actions';

@Component({
  selector: 'ps-sidenav-link',
  templateUrl: './sidenav-link.component.html',
  styleUrls: ['./sidenav-link.component.scss'],
})
export class SidenavLinkComponent implements OnInit {
  @Input() label = '';
  @Input() path = '';

  constructor(private store: Store) {}

  ngOnInit(): void {}

  onClick(): void {
    this.store.dispatch(
      SidenavActions.clickedLink({
        path: this.path,
      })
    );
  }
}
