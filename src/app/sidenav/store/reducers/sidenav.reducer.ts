import { createReducer, on } from '@ngrx/store';
import * as Actions from 'src/app/sidenav/store/actions/sidenav.actions';

export const featureKey = 'sidenav';

export interface State {
  open: boolean;
}

export const initialState: State = {
  open: false,
};

export const reducer = createReducer(
  initialState,
  on(Actions.toggledDrawer, (state, action) => ({
    ...state,
    open: action.open,
  })),
  on(Actions.openedDrawer, (state) => ({
    ...state,
    open: true,
  })),
  on(Actions.closedDrawer, (state) => ({
    ...state,
    open: false,
  }))
);
