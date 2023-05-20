import * as SourceMapSupport from 'source-map-support';
import { SES } from '@aws-sdk/client-ses';
import { config } from '@ps/api/config';
import {
  ConfirmationEmailBody,
  NotificationEmailBody,
} from '@ps/api/types/sendConnectEmail.types';
import { LambdaUtils } from '@ps/api/utils/lambda.utils';
import { validateSendConnectEmailRequest } from '@ps/api/validators/sendConnectEmailRequest.validator';

SourceMapSupport.install({
  environment: 'node',
});

const ses = new SES({ region: config.AWS_REGION });

const sendConfirmationEmail = (body: ConfirmationEmailBody) => {
  return ses.sendTemplatedEmail({
    Destination: {
      ToAddresses: [body.email],
    },
    Source: process.env.FROM_ADDRESS,
    Template: 'ConnectConfirmation',
    TemplateData: `{"name": "${body.name}", "email": "${body.email}"}`,
  });
};

const sendNotificationEmail = (body: NotificationEmailBody) => {
  return ses.sendTemplatedEmail({
    Destination: {
      ToAddresses: [body.email],
    },
    Source: process.env.FROM_ADDRESS,
    Template: 'ConnectNotification',
    TemplateData: `{"name": "${body.name}", "email": "${body.email}", "organization": "${body.organization}", "message": "${body.message}"}`,
  });
};

const sendConnectEmail = LambdaUtils.createApiGatewayProxyHandler(
  async (event) => {
    console.log(event);
    const request = validateSendConnectEmailRequest(
      event.queryStringParameters
    );

    const { email, name, organization, message } = request;

    return await Promise.all([
      sendNotificationEmail({
        email,
        name,
        organization,
        message,
      }),
      sendConfirmationEmail({ email, name }),
    ]).then(() => {
      return {
        message: 'Successfully sent connect email',
      };
    });
  }
);

export { sendConnectEmail };
