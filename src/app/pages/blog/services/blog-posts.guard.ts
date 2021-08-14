import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CanActivate } from '@angular/router';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { merge, Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import * as BlogActions from 'src/app/pages/blog/store/actions/blog.actions';

@Injectable()
export class BlogPostsGuard implements CanActivate {
  constructor(
    private store: Store,
    private actions$: Actions,
    private matSnackBar: MatSnackBar
  ) {}

  canActivate(): Observable<boolean> {
    this.store.dispatch(BlogActions.getBlogPosts());

    return merge(
      this.actions$.pipe(
        ofType(BlogActions.getBlogPostsSuccess),
        map(() => true)
      ),
      this.actions$.pipe(
        ofType(BlogActions.getBlogPostsFailure),
        tap(() => this.onError()),
        map(() => false)
      )
    ).pipe(take(1));
  }

  private onError(): void {
    // tslint:disable-next-line: quotemark
    this.matSnackBar.open("Sorry, I couldn't show you the Blog page", 'Ok', {
      duration: 5000,
    });
  }
}
