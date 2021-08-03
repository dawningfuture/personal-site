import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';
import { appImports } from 'src/app/app.module';
import { sidenavStoreImports } from 'src/app/state/features/sidenav/sidenav-store.module';
import { SidenavEffects } from './sidenav.effects';

describe('SidenavEffects', () => {
  let actions$: Observable<any>;
  let effects: SidenavEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [...appImports, ...sidenavStoreImports],
      providers: [SidenavEffects, provideMockActions(() => actions$)],
    });

    effects = TestBed.inject(SidenavEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
