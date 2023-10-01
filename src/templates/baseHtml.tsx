import * as elements from 'typed-html';


export const BaseHTML = ({ children } : elements.Children) => (`<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="public/style.css" rel="stylesheet">
</head>
<body>
  ${children}
</body>
</html>`)
