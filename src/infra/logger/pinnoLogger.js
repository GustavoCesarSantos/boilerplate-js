import pino from 'pino';
import { variables } from '../../shared/config/variables/index.js';

const isDev = variables.server.NODE_ENV == 'development';

let transport = {};

if (isDev) {
  transport = {
    target: 'pino-pretty',
    options: {
      colorize: true,
    },
  };
}

export const logger = new pino({
  transport,
});
