import * as HomePageActions from 'src/app/pages/home/store/actions/home-page.actions';

describe('clickedCtaButton', () => {
  it('should return an action', () => {
    expect(HomePageActions.clickedCtaButton().type).toBe(
      '[Home Page] Clicked CTA Button'
    );
  });
});
