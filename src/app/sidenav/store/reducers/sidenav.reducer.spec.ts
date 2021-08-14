import {
  initialState,
  reducer,
} from 'src/app/sidenav/store/reducers/sidenav.reducer';

describe('Sidenav Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
