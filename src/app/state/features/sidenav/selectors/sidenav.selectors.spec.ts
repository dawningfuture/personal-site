import * as fromSidenav from '../reducers/sidenav.reducer';
import { selectSidenavState } from './sidenav.selectors';

describe('Sidenav Selectors', () => {
  it('should select the feature state', () => {
    const result = selectSidenavState({
      [fromSidenav.featureKey]: fromSidenav.initialState,
    });

    expect(result).toEqual({
      open: false,
    });
  });
});
