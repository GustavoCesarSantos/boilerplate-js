import Pool from 'pg-pool';

import { variables } from '../../shared/config/variables/index.js';

export const pgClient = new Pool({
  database: variables.database.pg.DATABASE,
  user: variables.database.pg.USER,
  password: variables.database.pg.PASSWORD,
  port: variables.database.pg.PORT,
  ssl: variables.database.pg.SSL,
  max: variables.database.pg.MAX_POOL_SIZE, // set pool max size to 20
  idleTimeoutMillis: variables.database.pg.IDLE_TIMEOUT_MILLIS, // close idle clients after 1 second
  connectionTimeoutMillis: variables.database.pg.CONNECTION_TIMEOUT_MILLIS, // return an error after 1 second if connection could not be established
  maxUses: variables.database.pg.MAX_USES, // close (and replace) a connection after it has been used 7500 times (see below for discussion)
});
