import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, mergeMap, switchMap } from 'rxjs/operators';
import { BlogApiService } from 'src/app/pages/blog/services/blog-api.service';
import * as BlogActions from 'src/app/pages/blog/store/actions/blog.actions';

@Injectable()
export class BlogEffects {
  getBlogPosts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(BlogActions.getBlogPosts),
      switchMap(() =>
        this.blogApi.getPosts().pipe(
          mergeMap((blogPosts) => [
            BlogActions.getBlogPostsSuccess({
              data: blogPosts,
            }),
          ]),
          catchError(() => [BlogActions.getBlogPostsFailure()])
        )
      )
    );
  });

  constructor(private actions$: Actions, private blogApi: BlogApiService) {}
}
