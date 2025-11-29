import { logger } from '../../logger/pinnoLogger.js';
import { getCurrentTraceId } from '../../../shared/utils/getCurrentTraceId.js';

export class RequestLoggerMiddleware {
  log(request, response, next) {
    const traceId = getCurrentTraceId();
    const start = Date.now();
    request.traceId = traceId;
    logger.info(
      { traceId, method: request.method, url: request.url },
      '-> Request incoming'
    );
    response.on('finish', () => {
      const duration = Date.now() - start;
      logger.info(
        {
          traceId,
          method: request.method,
          url: request.url,
          status: response.statusCode,
          duration: `${duration}ms`,
        },
        '<- Request finished'
      );
    });
    next();
  }
}
