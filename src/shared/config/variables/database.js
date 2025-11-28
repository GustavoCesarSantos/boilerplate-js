export const database = {
  pg: {
    DATABASE: process.env.PGDATABASE || '',
    USER: process.env.PGUSER || '',
    PASSWORD: process.env.PGPASSWORD || '',
    PORT: Number(process.env.PGPORT) || 0,
    SSL: Boolean(process.env.PGSSLMODE) || true,
    MAX_POOL_SIZE: Number(process.env.PGMAXPOOLSIZE) || 0,
    IDLE_TIMEOUT_MILLIS: Number(process.env.PGIDLETIMEOUTMILLIS) || 0,
    CONNECTION_TIMEOUT_MILLIS:
      Number(process.env.PGCONNECTIONTIMEOUTMILLIS) || 0,
    MAX_USES: Number(process.env.PGMAXUSES) || 0,
  },
};
