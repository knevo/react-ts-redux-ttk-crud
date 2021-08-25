interface Config {
  env: {
    name: string,
    isProduction: boolean,
    isStaging: boolean,
    isDevelopment: boolean,
  },
  baseUrl: string,
  frontendBaseUrl: string,
  logger: {
    level: string
  },
  dbURL: string,
  dbName: string,
  corsOption: {
    origin: string[],
    credentials: boolean,
    exposedHeaders: string[]
  },
}
var _config: Config;

switch (process.env.NODE_ENV) {
  case 'production':
    _config = require('./production')
    break;
  default:
    _config = require('./development')
    break;
}
export const config = _config