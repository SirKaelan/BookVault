import sqlite3 from "sqlite3";
import { open } from "sqlite";

// Required to make open function read db file properly (it required an absolute path)
import { fileURLToPath } from "url";
import { dirname } from "path";
const __dirname = dirname(fileURLToPath(import.meta.url));

class Database {
  async open() {
    const db = await open({
      filename: `${__dirname}\\bookVault.db`,
      driver: sqlite3.Database,
    });
    console.log("Log: Connected to database.");
    return db;
  }
}

export { Database };
