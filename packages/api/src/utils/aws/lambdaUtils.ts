import {
  APIGatewayProxyCallback,
  APIGatewayProxyEvent,
  Context,
} from 'aws-lambda';

const createApiGatewayProxyHandler = (
  handler: (
    event: APIGatewayProxyEvent,
    context?: Context,
    callback?: APIGatewayProxyCallback
  ) => Promise<unknown>
) => {
  return async (
    event: APIGatewayProxyEvent,
    context?: Context,
    callback?: APIGatewayProxyCallback
  ) => {
    return await handler(event, context, callback)
      .then((response: unknown) => {
        return {
          statusCode: 200,
          body: JSON.stringify(response),
        };
      })
      .catch((error: unknown) => {
        let cause = 'Unknown cause';

        if (error instanceof Error) {
          cause = error.message;
        }

        return {
          statusCode: 400,
          body: JSON.stringify({
            status: 400,
            messsage: `Error: ${cause}`,
          }),
        };
      });
  };
};

const LambdaUtils = {
  createApiGatewayProxyHandler,
};

export { LambdaUtils };
