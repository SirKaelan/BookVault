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
        author_id: row.author_id,
        author_fn: row.author_fn,
        author_ln: row.author_ln,
      };
      result.author_books.push(book);
    });

    await db.close();
    console.log("Log: Disconnected from database.");
    return result;
  }

  async getBookById(bookId: string) {
    const db = await this.dbInstance.open();
    const sql = `
      SELECT b.book_id, b.title, b.synopsis, b.cover_url, b.price, b.author_id, a.first_name AS author_fn, a.last_name AS author_ln
      FROM Books AS b
      INNER JOIN Authors AS a ON b.author_id = a.author_id
      WHERE b.book_id = ?
    `;
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

  async getPaginatedBooks(page: number, limit: number, searchTerm?: string) {
    const offset = (page - 1) * limit;
    const db = await this.dbInstance.open();
    const result: PaginationResponse = {
      data: [],
      total_books: 0,
      current_page: page,
      previous_page: 0,
      next_page: 0,
      total_pages: 0,
    };
    let sql1: string;
    let sql2: string;
    let queryCallback: (err: any, row: BookModel) => void = (err, row) => {
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
        author_id: row.author_id,
        author_fn: row.author_fn,
        author_ln: row.author_ln,
      };
      result.data.push(book);
    };
    let booksCount: RowsCount | undefined;

    console.log("Log: Fetching paginated books.");
    if (!searchTerm) {
      sql1 = `
        SELECT b.book_id, b.title, b.synopsis, b.cover_url, b.price, b.author_id, a.first_name AS author_fn, a.last_name AS author_ln
        FROM Books AS b
        INNER JOIN Authors AS a ON b.author_id = a.author_id
        ORDER BY b.book_id
        LIMIT ? OFFSET ?
      `;
      sql2 = `
        SELECT COUNT(DISTINCT book_id) AS count
        FROM Books
      `;
      await db.each<BookModel>(sql1, [limit, offset], queryCallback);
      console.log("Log: Counting rows in books table.");
      booksCount = await db.get<RowsCount>(sql2);
    } else {
      sql1 = `
        SELECT b.book_id, b.title, b.synopsis, b.cover_url, b.price, b.author_id, a.first_name AS author_fn, a.last_name AS author_ln
        FROM Books AS b
        INNER JOIN Authors AS a ON b.author_id = a.author_id
        WHERE b.title LIKE ?
        ORDER BY b.book_id
        LIMIT ? OFFSET ?
      `;
      sql2 = `
        SELECT COUNT(DISTINCT book_id) AS count
        FROM Books AS b
        WHERE b.title LIKE ?
      `;
      await db.each<BookModel>(
        sql1,
        [`%${searchTerm}%`, limit, offset],
        queryCallback
      );
      console.log("Log: Counting rows in filtered books table.");
      booksCount = await db.get<RowsCount>(sql2, [`%${searchTerm}%`]);
    }

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
  author_id: number;
  author_fn: string;
  author_ln: string;
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
