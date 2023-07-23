import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';
import { appImports } from 'src/app/app.module';
import { CodePageModule } from 'src/app/pages/code/code-page.module';
import { CodePageEffects } from 'src/app/pages/code/store/effects/code-page.effects';

describe('CodePageEffects', () => {
  let actions$: Observable<any>;
  let effects: CodePageEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [...appImports, CodePageModule],
      providers: [CodePageEffects, provideMockActions(() => actions$)],
    });

    effects = TestBed.inject(CodePageEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
