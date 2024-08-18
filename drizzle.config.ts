import { config } from "dotenv";
import { defineConfig } from "drizzle-kit";
import { env } from "./src/env.mjs";

config({ path: ".env" });

export default defineConfig({
  schema: "./src/db/schema/index.ts",
  out: "./supabase/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: env.AUTH_DRIZZLE_URL,
  },
});
