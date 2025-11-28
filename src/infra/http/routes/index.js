import { Router } from 'express';

import { monitorRoutes } from './monitor.js';

const router = Router({ mergeParams: true });

export const routes = () => {
  monitorRoutes(router);
  return router;
};
