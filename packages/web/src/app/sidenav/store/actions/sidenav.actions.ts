import { createAction, props } from '@ngrx/store';

export const clickedButton = createAction('[Sidenav Button] Clicked');

export const rippleButton = createAction('[Sidenav Button] Ripple');

export const clickedLink = createAction(
  '[Sidenav Link] Clicked',
  props<{ path: string }>()
);

export const clickedBackdrop = createAction('[Sidenav Backdrop] Clicked');

export const toggleDrawer = createAction('[Sidenav Drawer] Toggle');

export const toggledDrawer = createAction(
  '[Sidenav Drawer] Toggled',
  props<{ open: boolean }>()
);

export const openDrawer = createAction('[Sidenav Drawer] Open');

export const openedDrawer = createAction('[Sidenav Drawer] Opened');

export const closeDrawer = createAction('[Sidenav Drawer] Close');

export const closedDrawer = createAction('[Sidenav Drawer] Closed');

export const scrollTopContent = createAction('[Sidenav Content] Scroll Top');
