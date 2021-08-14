import { createFeatureSelector } from '@ngrx/store';
import * as fromBlog from '../reducers/blog.reducer';

export const selectBlogState = createFeatureSelector<fromBlog.State>(
  fromBlog.blogFeatureKey
);
