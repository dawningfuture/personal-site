import { Component } from '@angular/core';

@Component({
  selector: 'ps-dance-content',
  templateUrl: './dance-content.component.html',
  styleUrls: ['./dance-content.component.scss'],
})
export class DanceContentComponent {
  onSocialContentPanelClick(): void {
    window.open('https://www.instagram.com/immattthompson/', '_blank');
  }
}
