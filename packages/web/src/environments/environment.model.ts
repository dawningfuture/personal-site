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

  /**
   * Whether to use hls.js for video streaming
   */
  useHlsjs: boolean;

  /**
   * Whether to use hls.js for video streaming
   */
  blogUrl: string ;

  /**
   * Page-specific configurations
   */
  pages: {
    /**
     * Connect page configuration
     */
    connect: {
      /**
       * reCAPTCHA API (site) key
       */
      recaptchaSiteKey: string;

      /**
       * API endpoint to send Connect Email
       */
      sendConnectEmailEndpoint: string;
    };
  };
}
