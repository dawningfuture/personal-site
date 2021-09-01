import * as HomePageActions from 'src/app/pages/home/store/actions/home-page.actions';

describe('heroScrolled', () => {
  it('should return an action', () => {
    expect(HomePageActions.heroScrolled().type).toBe(
      '[Home Page] Hero Scrolled'
    );
  });
});
