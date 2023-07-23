import * as ConnectPageActions from 'src/app/pages/connect/store/actions/connect-page.actions';

describe('submittedForm', () => {
  it('should return an action', () => {
    expect(ConnectPageActions.submittedForm({} as any).type).toBe(
      '[Connect Page] Submitted Form'
    );
  });
});
