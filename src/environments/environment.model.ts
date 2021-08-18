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
     * Tagline element `id`
     *
     * Used to extract a tagline from a Post's content
     */
    taglineElementId: string;

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
       * Config for Blogger API paths
       */
      paths: ApiPaths<{
        /**
         * Config to request Posts
         */
        posts: {
          /**
           * Path to request Posts
           */
          path: string;

          /**
           * Replacement key for ID in Post `path`
           */
          replacementKey: string;

          children: {
            comments: {
              path: string;
              replacementKey: string;
            };
          };
        };

        pages: {
          path: string;
        };
      }>;
    };
  };
}

type ApiPaths<T = Record<string, ApiPath>> = T;

export interface ApiPath {
  path: string;

  /**
   * Replacement key for ID in `path`
   */
  replacementKey?: string;

  children?: ApiPaths;
}
