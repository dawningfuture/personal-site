import { Injectable } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

@Injectable()
export class BlogService {
  constructor(private sanitizer: DomSanitizer) {}

  sanitizeContent(content: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(content);
  }

  getTaglineFromContent(content: string): SafeHtml | undefined {
    const parser = new DOMParser();

    const contentHtml = parser.parseFromString(content, 'text/html');

    const taglineEl = contentHtml.getElementById(
      environment.blogPage.taglineElementId
    );

    if (taglineEl) {
      return this.sanitizeContent(taglineEl?.outerHTML || '');
    }

    return undefined;
  }
}
