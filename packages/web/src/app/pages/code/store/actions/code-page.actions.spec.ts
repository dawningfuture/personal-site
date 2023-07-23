import * as CodePageActions from 'src/app/pages/code/store/actions/code-page.actions';

describe('submittedForm', () => {
  it('should return an action', () => {
    expect(CodePageActions.scrollToSection({} as any).type).toBe(
      '[Code Page] Scroll to Section'
    );
  });
});
