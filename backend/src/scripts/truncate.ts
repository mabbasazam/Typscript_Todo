// src/scripts/truncate.ts
import { AppDataSource } from "../config/db";

async function truncate() {
  const ds = await AppDataSource.initialize();
  await ds.query("TRUNCATE TABLE todos");
  console.log("✅ todos table truncated successfully");
  await ds.destroy();
}

truncate().catch((err) => {
  console.error("❌ Error truncating table:", err);
});
