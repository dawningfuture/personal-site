import { TestBed } from '@angular/core/testing';
import { appImports } from 'src/app/app.module';
import { BlogPageModule } from 'src/app/pages/blog/blog-page.module';
import { BlogService } from './blog.service';

describe('BlogService', () => {
  let service: BlogService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [...appImports, BlogPageModule],
    });
    service = TestBed.inject(BlogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
