import { Database } from "../database/Database.js";

class Book {
  constructor(private dbInstance: Database) {}

  async getAuthorBooks(authorId: string) {
    const db = await this.dbInstance.open();

    const sql = `
    SELECT b.book_id, b.title, b.synopsis, b.cover_url, b.price
    FROM Authors AS a
    INNER JOIN Books AS b
    ON a.author_id = b.author_id
    WHERE a.author_id = ?`;

    const result: AuthorBooks = { author_books: [] };
    console.log("Log: Fetching books of author.");
    await db.each<BookModel>(sql, [authorId], (err, row) => {
      if (err) {
        console.error(`Error fetching author books: ${err.message}`);
        return undefined;
      }
      const book: BookModel = {
        book_id: row.book_id,
        title: row.title,
        synopsis: row.synopsis,
        cover_url: row.cover_url,
        price: row.price,
      };
      result.author_books.push(book);
    });

    await db.close();
    console.log("Log: Disconnected from database.");
    return result;
  }
}

export { Book };

interface BookModel {
  book_id: number;
  title: string;
  synopsis: string;
  cover_url: string | null;
  price: number;
}

interface AuthorBooks {
  author_books: BookModel[];
}
