import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromBlog from '../reducers/blog.reducer';

export const selectBlogState = createFeatureSelector<fromBlog.State>(
  fromBlog.blogFeatureKey
);

export const selectPosts = createSelector(
  selectBlogState,
  (state) => state.posts
);

export const selectPost = (postId: string) =>
  createSelector(selectBlogState, (state) =>
    state.posts.find((post) => post.id === postId)
  );
