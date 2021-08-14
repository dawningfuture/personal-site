import packageJson from '../../package.json';
import { Environment } from './environment.model';

export const environment: Environment = {
  production: true,
  version: packageJson.version,
  origin: 'https://matthewthompson.us',
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
