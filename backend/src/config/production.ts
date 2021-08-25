module.exports = {
  env: {
    name: 'production',
    isProduction: true,
    isStaging: false,
    isDevelopment: false,
  },
  baseUrl: '',
  frontendBaseUrl: '',
  logger: {
    level: 'debug'
  },
  dbURL: process.env.DB_URL,
  dbName: process.env.DB_NAME,
}
