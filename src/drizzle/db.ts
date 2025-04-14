import { env } from "@/data/env/server";
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

import * as schema from "./schema";

// export const db = drizzle({
//   schema,
//   connection: {
//     password: env.DB_PASSWORD,
//     user: env.DB_USER,
//     database: env.DB_NAME,
//     host: env.DB_HOST,
//   },
// });

const pool = new Pool({
  connectionString: env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

export const db = drizzle(pool, { schema });
