import { type Context, Hono } from "hono";
const app = new Hono();

app.use("*", async (c, next) => {
  const response = await fetch(new Request("https://kxc.inc/404", c.req.raw));
  return new Response(response.body, response);
});
