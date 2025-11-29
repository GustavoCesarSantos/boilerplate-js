import { variables } from '../../../shared/config/variables/index.js';
import { logger } from '../../../infra/logger/pinnoLogger.js';

export class HealthCheckHandler {
  handler(_, response) {
    try {
      return response.status(200).json({
        status: 'available',
        serverInfo: {
          version: 1,
          environment: variables.server.NODE_ENV,
          timestamp: new Date().toISOString(),
          uptime: process.uptime(),
        },
      });
    } catch (error) {
      logger.error(error);
      return response.status(500).json({
        status: 'unavailable',
        serverInfo: {
          version: 1,
          environment: variables.server.NODE_ENV,
          timestamp: new Date().toISOString(),
          uptime: process.uptime(),
        },
      });
    }
  }
}
