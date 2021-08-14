import { TestBed } from '@angular/core/testing';
import { appImports } from 'src/app/app.module';
import { blogPageImports } from 'src/app/pages/blog/blog-page.module';
import { BlogPostsGuard } from './blog-posts.guard';

describe('BlogPostsGuard', () => {
  let guard: BlogPostsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [...appImports, ...blogPageImports],
    });
    guard = TestBed.inject(BlogPostsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
