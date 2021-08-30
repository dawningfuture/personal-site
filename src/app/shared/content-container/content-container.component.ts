import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ps-content-container',
  templateUrl: './content-container.component.html',
  styleUrls: ['./content-container.component.scss'],
})
export class ContentContainerComponent implements OnInit {
  @Input() @HostBinding('class.padded') padded = true;

  constructor() {}

  ngOnInit(): void {}
}
