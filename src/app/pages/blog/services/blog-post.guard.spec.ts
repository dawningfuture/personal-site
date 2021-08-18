import { TestBed } from '@angular/core/testing';
import { appImports } from 'src/app/app.module';
import { BlogPageModule } from 'src/app/pages/blog/blog-page.module';
import { BlogPostGuard } from './blog-post.guard';

describe('BlogPostGuard', () => {
  let guard: BlogPostGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [...appImports, BlogPageModule],
    });
    guard = TestBed.inject(BlogPostGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
