import 'dotenv/config';

import { HttpServer } from './infra/http/server.js';

const httpServer = new HttpServer();

httpServer.start();
