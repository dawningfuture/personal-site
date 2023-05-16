import { APIGatewayProxyHandlerV2 } from 'aws-lambda';
import * as SourceMapSupport from 'source-map-support';
import { SES } from '@aws-sdk/client-ses';
import { config } from '@ps/api/config';

SourceMapSupport.install({
  environment: 'node',
});

const ses = new SES({ region: config.AWS_REGION });

const sendConfirmationEmail = (body) => {
  const params = {
    Destination: {
      ToAddresses: [body.email],
    },
    Source: process.env.FROM_ADDRESS,
    Template: 'ConnectConfirmation',
    TemplateData: `{"name": "${body.name}", "email": "${body.email}"}`,
  };

  return ses.sendTemplatedEmail(params).promise();
};

const sendNotificationEmail = (body) => {
  const params = {
    Destination: {
      ToAddresses: [process.env.TO_ADDRESS],
    },
    Source: process.env.FROM_ADDRESS,
    Template: 'ConnectNotification',
    TemplateData: `{"name": "${body.name}", "email": "${body.email}", "organization": "${body.organization}", "message": "${body.message}"}`,
  };

  return ses.sendTemplatedEmail(params).promise();
};

const sendConnectEmail: APIGatewayProxyHandlerV2 = (
  event,
  context,
  callback
) => {
  if (event.requestContext.http.method === 'OPTIONS') {
    return callback(null, {
      statusCode: 200,
      body: '{"success":true}',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': '*',
      },
    });
  }

  if (event.requestContext.http.method === 'POST') {
    let body = {};

    try {
      body = JSON.parse(event.body);
    } catch (error) {
      return callback(null, {
        statusCode: 500,
        body: 'Failure',
      });
    }

    return Promise.all([
      sendNotificationEmail(body),
      sendConfirmationEmail(body),
    ])
      .then(() => {
        callback(null, {
          statusCode: 200,
          body: '{"success":true}',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': '*',
          },
        });
      })
      .catch((error) => {
        callback(null, {
          statusCode: 500,
          body: 'Failure',
        });
      });
  }

  return callback(null, {
    statusCode: 500,
    body: 'Failure',
  });
};

export { sendConnectEmail };
