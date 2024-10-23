import { type Context, Hono } from "hono";
import { serve } from '@hono/node-server'

const app = new Hono();

app.use("*", async (c, next) => {
  const response = await fetch(new Request("http://kxc.inc/404", c.req.raw));
  return new Response(response.body, response);
});

serve(app, (info) => {
  console.log(`Listening on http://localhost:${info.port}`)
})
