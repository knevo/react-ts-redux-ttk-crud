
import fs from 'fs'
import { config } from '../config';
import { createLogger, format, transports } from 'winston';

const logsdir = './logs';
if (!fs.existsSync(logsdir)) {
    fs.mkdirSync(logsdir);
}

const simpleFormat = format.printf(({ level, message, meta: { timestamp, source } }) => {
    return `[${timestamp}] ${source === 'frontend' ? `[${source.toUpperCase()}]` : ''} ${level.toUpperCase()} - ${message} `
})

const _logger = createLogger({
    level: config.logger.level,
    format: format.combine(
        format.errors({ stack: true }),
        format.metadata({ key: 'meta' }),
        format.json()
    ),
    defaultMeta: { enviroment: config.env.name, source: 'backend' },
    transports: [
        new transports.Console({
            format: simpleFormat,
            level: config.logger.level
        })
    ]
})

if (config.env.isDevelopment) {
    _logger.add(new transports.File({ filename: 'logs/log.log' }))
}

export const logger: Logger = {
    debug: (message: string, meta = {}) => {
        _logger.log('debug', message, meta)
    },
    info: (message, meta = {}) => {
        _logger.log('info', message, meta)
    },
    warn: (message, meta = {}) => {
        _logger.log('warn', message, meta)
    },
    error: (message, meta = {}) => {
        _logger.log('error', message, meta)
    }
}

type LogFunc = (message: string, meta?: object) => void
interface Logger {
    debug: LogFunc
    info: LogFunc,
    warn: LogFunc,
    error: LogFunc
}