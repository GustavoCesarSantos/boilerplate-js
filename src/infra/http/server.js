import cors from 'cors';
import helmet from 'helmet';
import express from 'express';

import { variables } from '../../shared/config/variables/index.js';
import { routes } from './routes/index.js';

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

  setMiddlewares() {
    this.setCors();
    this.setHelmet();
  }

  setRoutes() {
    this.app.use('/v1', routes());
  }

  start() {
    this.setMiddlewares();
    this.setRoutes();
    this.app.listen(this.port, (error) => {
      if (error) {
        console.error(error);
        process.exit(1);
      }
      console.log(`Listening on port: ${this.port}`);
    });
  }
}
