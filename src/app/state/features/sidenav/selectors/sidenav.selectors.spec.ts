import { selectSidenavState } from 'src/app/state/features/sidenav/selectors/sidenav.selectors';
import * as fromSidenav from '../reducers/sidenav.reducer';

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
