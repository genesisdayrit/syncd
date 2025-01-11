import { Pool } from "pg";

const pool = new Pool({
  connectionString: "postgresql://postgres:password@localhost:5432/syncd_db", 
});

export async function query(text: string, params?: any[]) {
  const client = await pool.connect();
  try {
    const result = await client.query(text, params);
    return result.rows;
  } catch (error) {
    console.error("Database query error:", error.message || error);
    throw new Error("DATABASE_ERROR");
  } finally {
    client.release();
  }
}

export default pool;

