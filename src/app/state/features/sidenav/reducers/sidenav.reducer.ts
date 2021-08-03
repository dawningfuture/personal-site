import { createReducer, on } from '@ngrx/store';
import * as Actions from '../actions/sidenav.actions';

export const featureKey = 'sidenav';

export interface State {
  open: boolean;
}

export const initialState: State = {
  open: false,
};

export const reducer = createReducer(
  initialState,
  on(Actions.toggled, (state, action) => ({
    ...state,
    open: action.open,
  })),
  on(Actions.opened, (state) => ({
    ...state,
    open: true,
  })),
  on(Actions.closed, (state) => ({
    ...state,
    open: false,
  }))
);
