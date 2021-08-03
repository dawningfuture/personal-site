import * as fromSidenav from './sidenav.actions';

describe('clickedButton', () => {
  it('should return an action', () => {
    expect(fromSidenav.clickedButton().type).toBe('[Sidenav Button] Clicked');
  });
});
