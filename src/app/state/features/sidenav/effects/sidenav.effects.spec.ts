import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { SidenavEffects } from './sidenav.effects';

describe('SidenavEffects', () => {
  let actions$: Observable<any>;
  let effects: SidenavEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SidenavEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(SidenavEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
