
export const loggerService: LoggerService = {
  debug(...line) {
    doLog('DEBUG', ...line)
  },
  info(...line) {
    doLog('INFO', ...line)
  },
  warn(...line) {
    doLog('WARN', ...line)
  },
  error(...line) {
    doLog('ERROR', ...line)
  },
}

function doLog(level: LogLevel = 'DEBUG', ...lines: any[]) {
  const line = formatLines(lines)
  const log = createLog(level, line)
  if (process.env.NODE_ENV !== 'production') console.log(log)
}

const createLog = (level: LogLevel, line: string) => {
  return {
    level,
    timestamp: Date.now(),
    message: line,
    meta: {
      source: 'frontend',
      stack: new Error().stack.substr(10),
      referrer: window.location.href,
      enviroment: process.env.NODE_ENV,
    },
  }
}


function formatLines(lines: any[]) {
  return lines
    .map((line) => {
      if (line instanceof Error) return line.toString()
      if (typeof line !== 'string') return JSON.stringify(line)
      return line
    })
    .join(' | ')
}

type LogLevel = 'DEBUG' | 'INFO' | 'WARN' | 'ERROR'
type LogFunc = (...lines: any[]) => void
interface LoggerService {
  debug: LogFunc
  info: LogFunc
  warn: LogFunc
  error: LogFunc
}