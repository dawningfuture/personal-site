import * as SourceMapSupport from 'source-map-support';
import { SES } from '@aws-sdk/client-ses';
import {
  ConfirmationEmailBody,
  NotificationEmailBody,
} from '@ps/api/handlers/sendConnectEmail/types/sendConnectEmailTypes';
import { LambdaUtils } from '@ps/api/utils/aws/lambdaUtils';
import { validateSendConnectEmailRequest } from '@ps/api/handlers/sendConnectEmail/validators/sendConnectEmailRequestValidator';
import { config } from '@ps/api/config';
import { confirmationTemplate } from '@ps/api/aws/ses/templates/sendConnectEmail/confirmationTemplate';
import { notificationTemplate } from '@ps/api/aws/ses/templates/sendConnectEmail/notificationTemplate';

SourceMapSupport.install({
  environment: 'node',
});

const sesClient = new SES({ region: config.aws.region });

const sendConfirmationEmail = (body: ConfirmationEmailBody) => {
  return sesClient.sendTemplatedEmail({
    Destination: {
      ToAddresses: [body.email],
    },
    Source: config.handlers.sendConnectEmail.ses.fromAddress,
    Template: confirmationTemplate.TemplateName,
    TemplateData: `{"name": "${body.name}", "email": "${body.email}"}`,
  });
};

const sendNotificationEmail = (body: NotificationEmailBody) => {
  return sesClient.sendTemplatedEmail({
    Destination: {
      ToAddresses: [body.email],
    },
    Source: config.handlers.sendConnectEmail.ses.fromAddress,
    Template: notificationTemplate.TemplateName,
    TemplateData: `{"name": "${body.name}", "email": "${body.email}", "organization": "${body.organization}", "message": "${body.message}"}`,
  });
};

const sendConnectEmail = LambdaUtils.createApiGatewayProxyHandler(
  async (event) => {
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
