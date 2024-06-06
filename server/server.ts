import Koa from "koa";
import { Database } from "./database/Database.js";
import { Author } from "./models/Author.js";

const app = new Koa({ proxy: true });
const PORT = 3000;

const db = new Database();
const authors = new Author(db);

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
    ctx.response.status = 200;
    ctx.response.body = `Attempting to request books of author with "id: ${params.id}"`;
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
