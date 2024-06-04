import { Database } from "../database/Database.js";

// Must match capitalization of Table row names
interface AuthorModel {
  Author_ID: number;
  First_Name: string;
  Last_Name: string;
  Bio: string;
}

class Author {
  constructor(private dbInstance: Database) {}

  async getAuthorById(authorId: string): Promise<AuthorModel | undefined> {
    const db = await this.dbInstance.open();
    const result = await db.get<AuthorModel>(
      "SELECT * FROM Authors WHERE Author_ID = ?",
      authorId
    );
    if (result) console.log("Log: Fetched author from database.");
    await db.close();
    console.log("Log: Disconnected from database.");
    return result;
  }
}

export { Author };
