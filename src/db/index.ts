import { config } from "dotenv";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { env } from "~/env.mjs";

config({ path: ".env" });
const client = postgres(env.AUTH_DRIZZLE_URL);
export const db = drizzle(client);
