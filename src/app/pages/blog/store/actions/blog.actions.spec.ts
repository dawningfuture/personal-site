import * as BlogActions from 'src/app/pages/blog/store/actions/blog.actions';

describe('getBlogPosts', () => {
  it('should return an action', () => {
    expect(BlogActions.getBlogPosts().type).toBe('[Blog] Get Blog Posts');
  });
});
