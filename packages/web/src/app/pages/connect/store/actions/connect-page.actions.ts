import { createAction, props } from '@ngrx/store';
import { ConnectFormValue } from 'src/app/pages/connect/components/form/connect-form.component';
import { ConnectEmail } from 'src/app/pages/connect/services/connect-page.service';

export const submittedForm = createAction(
  '[Connect Page] Submitted Form',
  props<{ value: ConnectFormValue }>()
);

export const sendConnectEmail = createAction(
  '[Connect Page] Send Connect Email',
  props<{ email: ConnectEmail }>()
);

export const sendConnectEmailSuccess = createAction(
  '[Connect Page] Send Connect Email Success'
);

export const sendConnectEmailFailure = createAction(
  '[Connect Page] Send Connect Email Failure'
);
