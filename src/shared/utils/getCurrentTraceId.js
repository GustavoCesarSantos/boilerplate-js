import { randomUUID } from 'node:crypto';

export const getCurrentTraceId = () => {
  return randomUUID();
};
