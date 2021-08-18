import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';
import { appImports } from 'src/app/app.module';
import { RouterEffects } from 'src/app/state/features/router/effects/router.effects';

describe('RouterEffects', () => {
  let actions$: Observable<any>;
  let effects: RouterEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [...appImports],
      providers: [RouterEffects, provideMockActions(() => actions$)],
    });

    effects = TestBed.inject(RouterEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
