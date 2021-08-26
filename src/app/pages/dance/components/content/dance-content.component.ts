import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ps-dance-content',
  templateUrl: './dance-content.component.html',
  styleUrls: ['./dance-content.component.scss'],
})
export class DanceContentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onSocialContentPanelClick(): void {
    window.open('https://www.instagram.com/immattthompson/', '_blank');
  }
}
