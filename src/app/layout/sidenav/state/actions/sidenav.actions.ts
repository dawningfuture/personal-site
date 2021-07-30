import { createAction, props } from '@ngrx/store';

export const clickedSidenavButton = createAction('[Sidenav Button] Clicked');

export const toggleSidenav = createAction('[Sidenav] Toggle');

export const toggledSidenav = createAction(
  '[Sidenav] Toggled',
  props<{ open: boolean }>()
);
