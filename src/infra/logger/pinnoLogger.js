import pino, { levels } from 'pino';
import { variables } from '../../shared/config/variables/index.js';

const isDev = variables.server.NODE_ENV == 'development';

export const logger = new pino({
  formatters: {
    log: (object) => {
      if (object.err) {
        const error = object.err;
        object.stack = error.stack;
        object.message = error.message;
        Reflect.deleteProperty(object, 'err');
      }
      return object;
    },
  },
  timestamp: pino.stdTimeFunctions.isoTime,
  transport: isDev
    ? {
        target: 'pino-pretty',
        options: {
          colorize: true,
          translateTime: 'SYS:standard',
          ignored: 'pid,hostname',
        },
      }
    : undefined,
  levels: isDev ? 'debug' : 'info',
});
