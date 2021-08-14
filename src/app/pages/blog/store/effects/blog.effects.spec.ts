import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';
import { appImports } from 'src/app/app.module';
import { BlogPageModule } from 'src/app/pages/blog/blog-page.module';
import { BlogEffects } from 'src/app/pages/blog/store/effects/blog.effects';

describe('BlogEffects', () => {
  let actions$: Observable<any>;
  let effects: BlogEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [...appImports, BlogPageModule],
      providers: [BlogEffects, provideMockActions(() => actions$)],
    });

    effects = TestBed.inject(BlogEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
