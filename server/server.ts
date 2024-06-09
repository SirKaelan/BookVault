import Koa from "koa";
import cors from "@koa/cors";
import { Database } from "./database/Database.js";
import { Author, Book } from "./models/index.js";

const app = new Koa({ proxy: true });
const PORT = 3001;

const db = new Database();
const authors = new Author(db);
const books = new Book(db);

app.use(cors());

app.use(async (ctx) => {
  const url = ctx.URL.pathname;
  let params: ExtractedParams | null;

  if (url === "/") {
    ctx.response.status = 200;
    ctx.response.body = "Hello!";
    return;
  }

  // Author routes
  params = matchRoute(url, "/authors/:id/books");
  if (params) {
    const authorId = params.id;
    const response = await books.getAuthorBooks(authorId);
    ctx.response.status = 200;
    ctx.response.body = response;
    return;
  }

  params = matchRoute(url, "/authors/:id");
  if (params) {
    const authorId = params.id;
    const author = await authors.getAuthorById(authorId);
    if (author) {
      ctx.response.status = 200;
      ctx.response.body = author;
    } else {
      ctx.response.status = 404;
      ctx.response.body = `Author with ID: ${authorId} doesn't exist.`;
    }
    return;
  }

  // Book routes
  params = matchRoute(url, "/books/:id/genres");
  if (params) {
    const bookId = params.id;
    const response = await books.getBookGenres(bookId);
    ctx.response.status = 200;
    ctx.response.body = response;
    return;
  }

  params = matchRoute(url, "/books/:id");
  if (params) {
    const bookId = params.id;
    const book = await books.getBookById(bookId);
    if (book) {
      ctx.response.status = 200;
      ctx.response.body = book;
    } else {
      ctx.response.status = 404;
      ctx.response.body = `Book with ID: ${bookId} doesn't exist.`;
    }
    return;
  }

  params = matchRoute(url, "/books");
  if (params) {
    const page = ctx.query.page ? parseInt(ctx.query.page as string) : 1;
    const limit = ctx.query.limit ? parseInt(ctx.query.limit as string) : 5;
    const response = await books.getPaginatedBooks(page, limit);
    ctx.response.status = 200;
    ctx.response.body = response;
    return;
  }

  // Entered endpoint isn't supported
  ctx.status = 404;
  ctx.response.message = "Page not found.";
});

console.log(`Server is listening on port ${PORT}.`);

app.listen(PORT);

type ExtractedParams = { [key: string]: string };

const matchRoute = (
  originalPath: string,
  customPath: string
): ExtractedParams | null => {
  // Get endpoint segments and remove empty string
  const originalSegments = originalPath
    .split("/")
    .filter((segment) => segment.length > 0);
  const customSegments = customPath
    .split("/")
    .filter((segment) => segment.length > 0);

  // Number of segments must match
  if (originalSegments.length !== customSegments.length) return null;

  // Contains a key-value pair for dynamic segment (:id => id: 2)
  const params: ExtractedParams = {};

  // Logic to extract dynamic values like ":id"
  for (let i = 0; i < customSegments.length; i++) {
    if (customSegments[i].startsWith(":")) {
      const paramName = customSegments[i].slice(1);
      params[paramName] = originalSegments[i];

      // If number of segments match, but their names don't
    } else if (originalSegments[i] !== customSegments[i]) {
      return null;
    }
  }

  return params;
};
