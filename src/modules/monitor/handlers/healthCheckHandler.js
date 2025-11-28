import { variables } from '../../../shared/config/variables/index.js';

export class HealthCheckHandler {
  handler(_, response) {
    return response.status(200).json({
      status: 'available',
      serverInfo: {
        version: 1,
        environment: variables.server.NODE_ENV,
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
      },
    });
  }
}
