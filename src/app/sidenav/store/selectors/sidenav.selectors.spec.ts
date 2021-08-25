import * as fromSidenav from 'src/app/sidenav/store/reducers/sidenav.reducer';
import { selectSidenavState } from 'src/app/sidenav/store/selectors/sidenav.selectors';

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
