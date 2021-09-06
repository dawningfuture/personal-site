import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';
import { appImports } from 'src/app/app.module';
import { HomePageModule } from 'src/app/pages/home/home-page.module';
import { HomePageEffects } from 'src/app/pages/home/store/effects/home-page.effects';

describe('HomePageEffects', () => {
  let actions$: Observable<any>;
  let effects: HomePageEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [...appImports, HomePageModule],
      providers: [HomePageEffects, provideMockActions(() => actions$)],
    });

    effects = TestBed.inject(HomePageEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
