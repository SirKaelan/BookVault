import { Database } from "../database/Database.js";

class Author {
  constructor(private dbInstance: Database) {}

  async getAuthorById(authorId: string): Promise<AuthorModel | undefined> {
    const db = await this.dbInstance.open();
    const result = await db.get<AuthorModel>(
      "SELECT * FROM Authors WHERE author_id = ?",
      authorId
    );
    if (result) console.log("Log: Fetched author from database.");
    await db.close();
    console.log("Log: Disconnected from database.");
    return result;
  }
}

export { Author };

interface AuthorModel {
  author_id: number;
  first_name: string;
  last_name: string;
  bio: string;
}
