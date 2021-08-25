import * as SidenavActions from 'src/app/pages/connect/store/actions/connect-page.actions';

describe('submittedForm', () => {
  it('should return an action', () => {
    expect(SidenavActions.submittedForm({} as any).type).toBe(
      '[Connect Page] Submitted Form'
    );
  });
});
