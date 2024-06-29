import pg from "pg";

export function connect() {
  const db = new pg.Pool({
    connectionString:
      "postgresql://postgres.tberujqeozyjvnnusofv:itRmguL96hyfKQg@aws-0-eu-west-2.pooler.supabase.com:6543/postgres",
  });
  return db;
}
