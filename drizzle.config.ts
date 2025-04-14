import { defineConfig } from "drizzle-kit";
import * as dotenv from "dotenv";
import { parse } from "pg-connection-string";

// Load .env file
dotenv.config();

// Parse DATABASE_URL
const connection = parse(process.env.DATABASE_URL!);

export default defineConfig({
  out: "./src/drizzle/migrations",
  schema: "./src/drizzle/schema.ts",
  dialect: "postgresql",
  strict: true,
  verbose: true,
  dbCredentials: {
    host: connection.host!,
    port: connection.port ? parseInt(connection.port) : 5432,
    user: connection.user!,
    password: connection.password!,
    database: connection.database!,
    ssl: true, // or false if you're local
  },
});
