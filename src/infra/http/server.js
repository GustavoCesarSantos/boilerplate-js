import cors from 'cors';
import helmet from 'helmet';
import express from 'express';

import { variables } from '../../shared/config/variables/index.js';
import { routes } from './routes/index.js';
import { logger } from '../logger/pinnoLogger.js';
import { RequestLoggerMiddleware } from './middlewares/requestLogger.js';

export class HttpServer {
  app;
  port = variables.server.PORT;
  constructor() {
    this.app = express();
  }

  setCors() {
    this.app.use(cors());
  }

  setHelmet() {
    this.app.use(helmet());
  }

  setRoutes() {
    const requestLogger = new RequestLoggerMiddleware();
    this.app.use('/v1', requestLogger.log, routes());
  }

  start() {
    this.setCors();
    this.setHelmet();
    this.setRoutes();
    this.app.listen(this.port, (error) => {
      if (error) {
        logger.error(error);
        process.exit(1);
      }
      logger.info(`Listening on port: ${this.port}`);
    });
  }
}
