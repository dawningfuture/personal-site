import * as fromSidenav from 'src/app/sidenav/store/actions/sidenav.actions';

describe('clickedButton', () => {
  it('should return an action', () => {
    expect(fromSidenav.clickedButton().type).toBe('[Sidenav Button] Clicked');
  });
});
