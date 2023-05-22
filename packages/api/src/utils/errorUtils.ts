import { PsError } from '@ps/api/types/errorTypes';

const throwError = <E extends PsError>(error: E) => {
  console.error(error);

  throw error;
};

const ErrorUtils = { throwError };

export { ErrorUtils };
