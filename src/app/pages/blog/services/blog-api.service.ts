import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BlogPost } from 'src/app/pages/blog/models/blog-post.model';
import { BlogService } from 'src/app/pages/blog/services/blog.service';
import { environment } from 'src/environments/environment';
import { ApiPath } from 'src/environments/environment.model';

interface BlogPostGetResponse {
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

interface BlogPostsGetResponse {
  kind: string;
  nextPageToken: string;
  prevPageToken: string;
  items: BlogPostGetResponse[];
}

@Injectable()
export class BlogApiService {
  constructor(private http: HttpClient, private blog: BlogService) {}

  getPosts(): Observable<BlogPost[]> {
    const requestUrl = this.createRequestUrl({
      apiPath: environment.blogPage.api.paths.posts,
    });

    return this.http.get<BlogPostsGetResponse>(requestUrl).pipe(
      map((response) =>
        response.items.map((item) => ({
          id: item.id,
          published: item.published,
          title: item.title,
          content: this.blog.sanitizeContent(item.content),
          tagline: this.blog.getTaglineFromContent(item.content),
        }))
      )
    );
  }

  getPost(postId: string): Observable<BlogPost> {
    const requestUrl = this.createRequestUrl({
      apiPath: environment.blogPage.api.paths.posts,
      replacement: postId,
    });

    return this.http.get<BlogPostGetResponse>(requestUrl).pipe(
      map((response) => ({
        id: response.id,
        published: response.published,
        title: response.title,
        content: this.blog.sanitizeContent(response.content),
        tagline: this.blog.getTaglineFromContent(response.content),
      }))
    );
  }

  private createRequestUrl(pathReplacement: ApiPathReplacement): string {
    let path = this.replaceApiPath(
      pathReplacement.apiPath,
      pathReplacement.replacement
    );

    if (pathReplacement.child) {
      path += `/${this.createRequestUrl(pathReplacement.child)}`;
    }

    const url = new URL(environment.blogPage.api.baseUrl + path);

    url.searchParams.append('key', environment.blogPage.api.apiKey);

    return url.toString();
  }

  private replaceApiPath(apiPath: ApiPath, replacement: string = ''): string {
    return apiPath.path.replace(`${apiPath.replacementKey}`, replacement);
  }
}

interface ApiPathReplacement {
  apiPath: ApiPath;
  replacement?: string;
  child?: ApiPathReplacement;
}
