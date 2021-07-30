import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromSidenav from '../reducers/sidenav.reducer';

export const selectSidenavState = createFeatureSelector<fromSidenav.State>(
  fromSidenav.featureKey
);

export const selectSidenavOpen = createSelector(
  selectSidenavState,
  (sidenavState) => sidenavState.open
);
