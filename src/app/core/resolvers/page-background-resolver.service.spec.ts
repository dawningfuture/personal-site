import { TestBed } from '@angular/core/testing';
import { coreImports } from 'src/app/core/core.module';
import { PageBackgroundResolverService } from './page-background-resolver.service';

describe('PageBackgroundResolverService', () => {
  let service: PageBackgroundResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [...coreImports],
    });
    service = TestBed.inject(PageBackgroundResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
