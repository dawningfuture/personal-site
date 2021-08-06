import { TestBed } from '@angular/core/testing';
import { coreImports } from 'src/app/core/core.module';
import { PageBackgroundLoadResolverService } from './page-background-load-resolver.service';

describe('PageBackgroundLoadResolverService', () => {
  let service: PageBackgroundLoadResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [...coreImports],
    });
    service = TestBed.inject(PageBackgroundLoadResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
