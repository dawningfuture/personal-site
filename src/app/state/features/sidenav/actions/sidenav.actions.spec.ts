import * as fromSidenav from './sidenav.actions';

describe('clickedSidenavButton', () => {
  it('should return an action', () => {
    expect(fromSidenav.clickedSidenavButton().type).toBe(
      '[Sidenav Button] Clicked'
    );
  });
});

describe('toggleSidenav', () => {
  it('should return an action', () => {
    expect(fromSidenav.toggleSidenav().type).toBe('[Sidenav] Toggle');
  });
});

describe('toggledSidenav', () => {
  it('should return an action', () => {
    expect(
      fromSidenav.toggledSidenav({
        open: true,
      }).type
    ).toBe('[Sidenav] Toggled');
  });
});
