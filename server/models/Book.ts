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

  async getBookById(bookId: string) {
    const db = await this.dbInstance.open();
    const sql = "SELECT * FROM Books WHERE book_id = ?";
    console.log("Log: Fetching a single book.");
    const result = await db.get<BookModel>(sql, bookId);
    await db.close();
    console.log("Log: Disconnected from database.");
    return result;
  }

  async getBookGenres(bookId: string) {
    const db = await this.dbInstance.open();
    const sql = `
      SELECT g.genre_id, g.genre_name
      FROM Books AS b
      INNER JOIN BookGenres AS bg ON b.book_id = bg.book_id
      INNER JOIN Genres AS g ON bg.genre_id = g.genre_id
      WHERE b.book_id = ?
    `;
    const result: BookGenres = { genres: [] };
    console.log("Log: Fetching genres for a single book.");
    await db.each<GenreModel>(sql, [bookId], (err, row) => {
      if (err) {
        console.error(`Error fetching genres of book: ${err.message}`);
        return undefined;
      }
      const genre: GenreModel = {
        genre_id: row.genre_id,
        genre_name: row.genre_name,
      };
      result.genres.push(genre);
    });

    await db.close();
    console.log("Log: Disconnected from database.");
    return result;
  }

  async getPaginatedBooks(page: number, limit: number) {
    const offset = (page - 1) * limit;

    const db = await this.dbInstance.open();

    const sql1 = `
      SELECT b.book_id, b.title, b.synopsis, b.cover_url, b.price
      FROM Books AS b
      ORDER BY b.book_id
      LIMIT ? OFFSET ?
    `;

    const result: PaginationResponse = {
      data: [],
      total_books: 0,
      current_page: page,
      previous_page: 0,
      next_page: 0,
      total_pages: 0,
    };

    console.log("Log: Fetching paginated books.");
    await db.each(sql1, [limit, offset], (err, row) => {
      if (err) {
        console.error(`Error fetching paginated books: ${err.message}`);
        return undefined;
      }
      const book: BookModel = {
        book_id: row.book_id,
        title: row.title,
        synopsis: row.synopsis,
        cover_url: row.cover_url,
        price: row.price,
      };
      result.data.push(book);
    });

    const sql2 = "SELECT COUNT(DISTINCT book_id) as count FROM Books";

    console.log("Log: Counting rows in books table.");
    const booksCount = await db.get<RowsCount>(sql2);

    result.total_books = (booksCount as RowsCount).count;
    result.total_pages = Math.ceil((booksCount as RowsCount).count / limit);
    result.previous_page = page > 1 ? page - 1 : null;
    result.next_page = page < result.total_pages ? page + 1 : null;

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

interface GenreModel {
  genre_id: number;
  genre_name: string;
}

interface BookGenres {
  genres: GenreModel[];
}

interface PaginationResponse {
  data: BookModel[];
  total_books: number;
  current_page: number;
  previous_page: number | null;
  next_page: number | null;
  total_pages: number;
}

interface RowsCount {
  count: number;
}
