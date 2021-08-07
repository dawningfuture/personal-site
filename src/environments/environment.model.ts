export interface Environment {
  /**
   * Whether the configuation should be compiled for production
   */
  production: boolean;

  /**
   * App version
   */
  version: string;

  /**
   * Used in production only
   *
   * Origin from which the app must be served
   */
  origin: string;
}
