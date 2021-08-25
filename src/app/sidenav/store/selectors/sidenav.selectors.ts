import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromSidenav from 'src/app/sidenav/store/reducers/sidenav.reducer';

export const selectSidenavState = createFeatureSelector<fromSidenav.State>(
  fromSidenav.featureKey
);

export const selectSidenavOpen = createSelector(
  selectSidenavState,
  (sidenavState) => sidenavState.open
);
