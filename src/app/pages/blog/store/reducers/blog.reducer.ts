import { createReducer, on } from '@ngrx/store';
import { BlogPost } from 'src/app/pages/blog/models/blog-post.model';
import * as BlogActions from '../actions/blog.actions';

export const blogFeatureKey = 'blog';

export interface State {
  posts: BlogPost[];
}

export const initialState: State = {
  posts: [],
};

export const reducer = createReducer(
  initialState,

  on(BlogActions.getBlogPostsSuccess, (state, action) => ({
    ...state,
    posts: action.data,
  }))
);
