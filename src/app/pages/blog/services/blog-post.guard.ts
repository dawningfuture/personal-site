import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { merge, Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import * as BlogActions from 'src/app/pages/blog/store/actions/blog.actions';

@Injectable({
  providedIn: 'root',
})
export class BlogPostGuard implements CanActivate {
  constructor(
    private store: Store,
    private actions$: Actions,
    private matSnackBar: MatSnackBar
  ) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    this.store.dispatch(
      BlogActions.getBlogPost({
        postId: route.params.postId,
      })
    );

    return merge(
      this.actions$.pipe(
        ofType(BlogActions.getBlogPostSuccess),
        map(() => true)
      ),
      this.actions$.pipe(
        ofType(BlogActions.getBlogPostFailure),
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
