import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'ps-sidenav-blog-link',
  templateUrl: './sidenav-blog-link.component.html',
  styleUrls: ['./sidenav-blog-link.component.scss'],
})
export class SidenavBlogLinkComponent {

  constructor() {}

  onClick(): void {
    window.location.href = environment.blogUrl
  }
}
