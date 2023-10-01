import { Elysia } from "elysia";
import { html } from "@elysiajs/html";
import { staticPlugin } from "@elysiajs/static";
import { BaseHTML } from "./templates/baseHtml";
import * as elements from "typed-html";

const app = new Elysia()
  .use(html())
  .use(staticPlugin({ assets: "public" }))
  .get("/", () => <BaseHTML><h1 class="text-5xl text-center text-sky-600">"Hello Elysia"</h1></BaseHTML>)
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
