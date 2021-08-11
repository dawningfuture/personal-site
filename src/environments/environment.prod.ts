import packageJson from '../../package.json';
import { Environment } from './environment.model';

export const environment: Environment = {
  production: true,
  version: packageJson.version,
  origin: 'https://matthewthompson.us',
  useHlsjs: true,
};
