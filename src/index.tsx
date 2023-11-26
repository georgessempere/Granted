import { Elysia, t } from "elysia";
import { html } from "@elysiajs/html";
import { staticPlugin } from "@elysiajs/static";
import { Database } from 'bun:sqlite';
import { toast } from "./utils/toast";
import { Home } from "./templates/pages/Home";
import { Result } from "./templates/snippets/Result";

const sqlite = new Database('./db/sqlite.db');

const app = new Elysia()
  .use(html())
  .use(staticPlugin({ assets: "public" }))
  .get("/", () => (
    <Home />
  ))
  .post("/snip-hello", async ({ body, set }) => {
    const query = sqlite.query(`SELECT * FROM users WHERE users.name LIKE $name;`);
    const user = query.get({ $name: `%${body.name}%` }) as { name: string };
    if (!user) {
      set.headers = { 'HX-Trigger': toast('warning', 'Utilisateur introuvable') }
      set.status = 404;
    }
    else {
      return <Result message={`Hello ${user.name}`} />;
    }
  }, {
    body: t.Object({
      name: t.String({ minLength: 1, error: 'Le nom est obligatoire' })
    }),
    error({ set, error }) {
      set.headers = { 'HX-Trigger': toast('error', error.message) }
    }
  })
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);

