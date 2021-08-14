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
   * Blog page config
   */
  blogPage: {
    /**
     * Config for Blogger API
     */
    api: {
      /**
       * API key used to make Blogger requests
       */
      apiKey: string;

      /**
       * Base URL for Blogger API requests
       */
      baseUrl: string;

      /**
       * Config to request all Posts
       */
      posts: {
        /**
         * Path to request all Posts
         */
        path: string;
      };

      /**
       * Config to request a Post
       */
      post: {
        /**
         * Path to request a post
         */
        path: string;

        /**
         * Replacement key for ID in Post `path`
         */
        idReplacementKey: string;
      };
    };
  };
}
