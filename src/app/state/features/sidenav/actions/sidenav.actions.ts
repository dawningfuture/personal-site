import { createAction, props } from '@ngrx/store';

export const clickedButton = createAction('[Sidenav Button] Clicked');

export const clickedLink = createAction(
  '[Sidenav Link] Clicked',
  props<{ path: string }>()
);

export const clickedBackdrop = createAction('[Sidenav Backdrop] Clicked');

export const toggle = createAction('[Sidenav] Toggle');

export const toggled = createAction(
  '[Sidenav] Toggled',
  props<{ open: boolean }>()
);

export const open = createAction('[Sidenav] Open');

export const opened = createAction('[Sidenav] Opened');

export const close = createAction('[Sidenav] Close');

export const closed = createAction('[Sidenav] Closed');
