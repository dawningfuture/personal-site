import * as SidenavActions from 'src/app/sidenav/store/actions/sidenav.actions';

describe('clickedButton', () => {
  it('should return an action', () => {
    expect(SidenavActions.clickedButton().type).toBe(
      '[Sidenav Button] Clicked'
    );
  });
});
