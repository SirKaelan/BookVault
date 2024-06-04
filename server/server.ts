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
  } else if (ctx.url.startsWith("/authors/")) {
    const authorId = ctx.url.split("/")[2];
    const author = await authors.getAuthorById(authorId);

    if (author) {
      ctx.response.status = 200;
      ctx.response.body = `Name: ${author.First_Name} ${author.Last_Name}`;
    } else {
      ctx.response.status = 404;
      ctx.response.body = `Author with ID: ${authorId} doesn't exist.`;
    }
  } else {
    ctx.response.message = "Endpoint not supported.";
  }
});

console.log("Server listening.");

app.listen(PORT);
