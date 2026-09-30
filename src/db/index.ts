import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

const globalForDb = globalThis as typeof globalThis & {
  __custom77Db?: ReturnType<typeof drizzle>;
};

/**
 * Lazily create the Drizzle client on first use.
 * Importing this module must never throw, otherwise `next build`
 * fails while collecting page data (env vars aren't required at
 * build time, only at request time).
 */
export function getDb() {
  if (!globalForDb.__custom77Db) {
    const databaseUrl = process.env.DATABASE_URL;

    if (!databaseUrl) {
      throw new Error("DATABASE_URL is required");
    }

    const pool = new Pool({ connectionString: databaseUrl });
    globalForDb.__custom77Db = drizzle(pool);
  }

  return globalForDb.__custom77Db;
}
