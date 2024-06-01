import Koa from "koa";

const app = new Koa({ proxy: true });
const PORT = 3000;

app.use(async (ctx) => {
  if (ctx.url === "/") {
    ctx.response.status = 200;
    ctx.response.body = "Hello world!";
  } else {
    ctx.response.message = "Endpoint not supported.";
  }
});

console.log("Server listening.");

app.listen(PORT);
