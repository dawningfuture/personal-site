import { PsError } from '@ps/api/types/error.types';

const throwError = <E extends PsError>(error: E) => {
  console.error(error);

  throw error;
};

const ErrorUtils = { throwError };

export { ErrorUtils };
