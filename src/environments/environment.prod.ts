import packageJson from '../../package.json';
import { Environment } from './environment.model';

export const environment: Environment = {
  production: true,
  version: packageJson.version,
  origin: 'https://matthewthompson.us',
  useHlsjs: true,
  pages: {
    connect: {
      recaptchaSiteKey: '6LcUARIcAAAAAGM-W8K6BJsOpd4jJjamAVEo4ltI',
      sendConnectEmailEndpoint:
        'https://api.matthewthompson.us/personal-site/lets-connect',
    },
  },
};
