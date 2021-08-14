import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';
import { appImports } from 'src/app/app.module';
import { SidenavEffects } from 'src/app/sidenav/store/effects/sidenav.effects';
import { sidenavStoreImports } from 'src/app/sidenav/store/sidenav-store.module';

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
