import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'ps-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements AfterViewInit {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  constructor() {}

  ngAfterViewInit(): void {
    this.sidenav.close();
  }
}
