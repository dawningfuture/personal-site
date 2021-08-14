import { createAction, props } from '@ngrx/store';
import { BlogPost } from 'src/app/pages/blog/models/blog-post.model';

export const getBlogPosts = createAction('[Blog] Get Blog Posts');

export const getBlogPostsSuccess = createAction(
  '[Blog] Get Blog Posts Success',
  props<{ data: BlogPost[] }>()
);

export const getBlogPostsFailure = createAction(
  '[Blog] Get Blog Posts Failure'
);
