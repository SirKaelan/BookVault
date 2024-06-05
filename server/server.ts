import Koa from "koa";
import { Database } from "./database/Database.js";
import { Author } from "./models/Author.js";

const app = new Koa({ proxy: true });
const PORT = 3000;

const db = new Database();
const authors = new Author(db);

app.use(async (ctx) => {
  if (ctx.url === "/") {
    ctx.response.status = 200;
    ctx.response.body = "Hello!";

    // Get author by id
  } else if (ctx.url.startsWith("/authors/")) {
    const authorId = ctx.url.split("/")[2];
    const author = await authors.getAuthorById(authorId);
    if (author) {
      ctx.response.status = 200;
      ctx.response.body = author;
    } else {
      ctx.response.status = 404;
      ctx.response.body = `Author with ID: ${authorId} doesn't exist.`;
    }

    // Entered endpoint isn't supported
  } else {
    ctx.response.message = "Endpoint not supported.";
  }
});

console.log(`Server is listening on port ${PORT}.`);

app.listen(PORT);
