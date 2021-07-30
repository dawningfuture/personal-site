import { Component, OnInit } from '@angular/core';
import { appRoutes } from 'src/app/app-routing.module';

@Component({
  selector: 'ps-sidenav-drawer',
  templateUrl: './sidenav-drawer.component.html',
  styleUrls: ['./sidenav-drawer.component.scss'],
})
export class SidenavDrawerComponent implements OnInit {
  sidenavLinks = appRoutes
    .flatMap((appRoute) =>
      appRoute.data?.sidenavLink ? appRoute.data.sidenavLink : []
    )
    .sort((a, b) => (a.order > b.order ? 1 : -1));

  constructor() {}

  ngOnInit(): void {}
}
