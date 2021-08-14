import { TestBed } from '@angular/core/testing';
import { appImports } from 'src/app/app.module';
import { BlogPageModule } from 'src/app/pages/blog/blog-page.module';
import { BlogApiService } from 'src/app/pages/blog/services/blog-api.service';

describe('BlogApiService', () => {
  let service: BlogApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [...appImports, BlogPageModule],
    });
    service = TestBed.inject(BlogApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
