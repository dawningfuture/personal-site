import * as fromBlog from 'src/app/pages/blog/store/reducers/blog.reducer';
import { selectBlogState } from 'src/app/pages/blog/store/selectors/blog.selectors';

describe('Blog Selectors', () => {
  it('should select the feature state', () => {
    const result = selectBlogState({
      [fromBlog.blogFeatureKey]: fromBlog.initialState,
    });

    expect(result).toEqual({
      posts: [],
    });
  });
});
