import { SafeHtml } from '@angular/platform-browser';

export interface BlogPost {
  id: string;
  published: Date;
  title: string;
  content: SafeHtml;
}
