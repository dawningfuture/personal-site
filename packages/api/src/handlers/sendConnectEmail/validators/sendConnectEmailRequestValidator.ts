import Ajv, { JSONSchemaType } from 'ajv';
import { SendConnectEmailRequest } from '@ps/api/handlers/sendConnectEmail/types/sendConnectEmailTypes';
import { ErrorUtils } from '@ps/api/utils/errorUtils';
import { PsValidationError } from '@ps/api/types/errorTypes';

const ajv = new Ajv({
  strict: true,
  coerceTypes: true,
  removeAdditional: 'all',
  allErrors: true,
});

const schema: JSONSchemaType<SendConnectEmailRequest> = {
  type: 'object',
  required: ['name', 'email', 'message'],
  additionalProperties: false,
  properties: {
    name: {
      type: 'string',
    },
    email: {
      type: 'string',
    },
    message: {
      type: 'string',
    },
    organization: {
      type: 'string',
      nullable: true,
    },
  },
};

const validator = ajv.compile<SendConnectEmailRequest>(schema);

const validateSendConnectEmailRequest = (candidate: unknown) => {
  if (validator(candidate)) {
    return candidate;
  }

  const invalidations = validator.errors?.flatMap((error) =>
    error.message ? [error.message] : []
  );

  console.log(invalidations);

  return ErrorUtils.throwError(
    new PsValidationError({
      message: 'Invalid SendConnectEmail Request',
      invalidations,
      candidate,
    })
  );
};

export { validateSendConnectEmailRequest };
