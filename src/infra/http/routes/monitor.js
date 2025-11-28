import { HealthCheckHandler } from '../../../modules/monitor/handlers/healthCheckHandler.js';

const healthCheckHandler = new HealthCheckHandler();

export const monitorRoutes = (router) => {
  router.get('/health', healthCheckHandler.handler);
};
