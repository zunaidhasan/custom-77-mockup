import { config } from "dotenv";
import { defineConfig } from "drizzle-kit";

// Load the same env file Next.js uses (git-ignored)
config({ path: ".env.local" });

export default defineConfig({
  dialect: "postgresql",
  schema: "./src/db/schema.ts",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
