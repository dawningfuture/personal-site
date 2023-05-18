const PsErrorCodes = {
  RRD: 'PsError',
  VALIDATION: 'PsValidationError',
} as const;

type PsErrorProperites = {
  message: string;
  rawError?: unknown;
};

class PsError extends Error {
  code: string = PsErrorCodes.RRD;
  rawError?: unknown;

  constructor({ message, rawError }: PsErrorProperites) {
    super(message);
    this.name = this.constructor.name;
    this.rawError = rawError;
  }
}

type PsValidationErrorProperties = {
  invalidations: string[] | undefined;
  candidate?: unknown;
} & PsErrorProperites;

class PsValidationError extends PsError {
  code = PsErrorCodes.VALIDATION;
  invalidations: string[] | undefined;
  candidate?: unknown;

  constructor({
    message,
    rawError,
    invalidations,
    candidate,
  }: PsValidationErrorProperties) {
    super({ message, rawError });
    this.invalidations = invalidations;
    this.candidate = candidate;
  }
}

export { PsError, PsValidationError };
