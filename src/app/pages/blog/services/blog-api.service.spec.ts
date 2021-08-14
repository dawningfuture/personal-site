import { TestBed } from '@angular/core/testing';
import { appImports } from 'src/app/app.module';
import { BlogApiService } from 'src/app/pages/blog/services/blog-api.service';

describe('BlogApiService', () => {
  let service: BlogApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [...appImports],
      providers: [BlogApiService],
    });
    service = TestBed.inject(BlogApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
