import packageJson from '../../package.json';
import { Environment } from './environment.model';

export const environment: Environment = {
  production: false,
  version: packageJson.version,
  // NOTE: `origin` is only used in production to ensure the app
  // is being served from the desired origin
  origin: '',
  useHlsjs: true,
  blogPage: {
    taglineElementId: 'tagline',
    api: {
      apiKey: 'AIzaSyAIdUDtlO2GOnH8GgwZRcF7fhPmuutEhQM',
      baseUrl:
        'https://www.googleapis.com/blogger/v3/blogs/5264029898622051207',
      posts: {
        path: '/posts',
      },
      post: {
        path: '/post/{POST_ID}',
        idReplacementKey: '{POST_ID}',
      },
    },
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
