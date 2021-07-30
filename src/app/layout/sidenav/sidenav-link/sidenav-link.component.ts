import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ps-sidenav-link',
  templateUrl: './sidenav-link.component.html',
  styleUrls: ['./sidenav-link.component.scss'],
})
export class SidenavLinkComponent implements OnInit {
  @Input() label = '';

  constructor() {}

  ngOnInit(): void {}
}
