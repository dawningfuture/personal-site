import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'ps-sidenav-version',
  templateUrl: './sidenav-version.component.html',
  styleUrls: ['./sidenav-version.component.scss'],
})
export class SidenavVersionComponent implements OnInit {
  readonly version = environment.version;

  constructor() {}

  ngOnInit(): void {}
}
