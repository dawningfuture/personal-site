import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BlogPost } from 'src/app/pages/blog/models/blog-post.model';
import { environment } from 'src/environments/environment';

interface BlogPostsGetResponse {
  kind: string;
  nextPageToken: string;
  prevPageToken: string;
  items: [
    {
      kind: string;
      id: string;
      blog: { id: string };
      published: Date;
      updated: Date;
      url: string;
      selfLink: string;
      title: string;
      content: string;
      author: {
        id: string;
        displayName: string;
        url: string;
        image: { url: string };
      };
      replies: [{ totalItems: string; selfLink: string }];
    }
  ];
}

@Injectable()
export class BlogApiService {
  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {}

  getPosts(): Observable<BlogPost[]> {
    const requestUrl = this.createRequestUrl(
      environment.blogPage.api.posts.path
    );

    return this.http.get<BlogPostsGetResponse>(requestUrl).pipe(
      map((response) =>
        response.items.map((item) => ({
          id: item.id,
          published: item.published,
          title: item.title,
          content: this.sanitizer.bypassSecurityTrustHtml(item.content),
        }))
      )
    );
  }

  private createRequestUrl(path: string): string {
    const url = new URL(environment.blogPage.api.baseUrl + path);

    url.searchParams.append('key', environment.blogPage.api.apiKey);

    return url.toString();
  }
}
