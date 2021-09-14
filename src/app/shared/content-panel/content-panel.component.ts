import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'ps-content-panel',
  templateUrl: './content-panel.component.html',
  styleUrls: ['./content-panel.component.scss'],
})
export class ContentPanelComponent {
  @Input() @HostBinding('class.raised') raised = true;
  @Input() @HostBinding('class.padded') padded = true;
  @Input() @HostBinding('class.link') link = false;
  @Input() @HostBinding('attr.color') color:
    | 'primary'
    | 'accent'
    | 'default'
    | 'none' = 'default';
}
