/// <reference types="@kitajs/html/htmx.d.ts" />
import Html from '@kitajs/html';
import '@kitajs/html/register';


export const BaseHTML = (
  { head, children, title }:
    Html.PropsWithChildren<{ head?: string; title?: string }>
) => (
  <>
    {'<!DOCTYPE html>'}
    <html>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="public/styled-system/styles.css" rel="stylesheet" />
        <script src="https://unpkg.com/htmx.org@1.9.6" integrity="sha384-FhXw7b6AlE/jyjlZH5iHa/tTe9EpJ1Y55RjcgPbjeWMskSxZt1v9qkxLJWNJaGni" crossorigin="anonymous" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/notyf@3/notyf.min.css" />
        <script src="https://cdn.jsdelivr.net/npm/notyf@3/notyf.min.js" />
        <title safe>{title || 'Granted !'}</title>
        {head as 'safe'}
      </head>
      <body>
        {children}
        <script src="public/toast.js" />
      </body>
    </html>
  </>
)
