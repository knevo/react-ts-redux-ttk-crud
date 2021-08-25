module.exports = {
  env: {
    name: 'development',
    isProduction: false,
    isStaging: false,
    isDevelopment: true,
  },
  baseUrl: 'http://localhost:3030/',
  frontendBaseUrl: 'http://localhost:3000/',
  logger: {
    level: 'debug'
  },
  dbURL: 'mongodb://localhost:27017',
  dbName: 'contact_db',
  corsOption: {
    origin: ['http://127.0.0.1:3000', 'http://localhost:3000'],
    credentials: true,
    exposedHeaders: ['Content-Disposition']
  },
}
