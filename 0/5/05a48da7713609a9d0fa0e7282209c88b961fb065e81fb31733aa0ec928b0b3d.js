<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    <title>Offline | Webmail</title>
    <style>
      @import url('fonts/font.css');
      body {
        font: 400 1em/1.5em Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif;
        background: #fff;
        text-align: center;
      }
      svg {
        margin: 20px 0 35px;
        fill: #F44336;
        width: 128px;
        height: 128px;
      }
      ul {
        margin: 0;
        padding: 0;
        list-style-type: none;
        text-align: center;
      }
      li {
        display: inline-block;
        font-size: 25px;
        line-height: 55px;
        color: #666;
      }
      li:not(:first-of-type):before {
        content: "|";
        margin: 0 10px;
        color: #d0d0d0;
      }
    </style>
  </head>
  <body>
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M12 3C6.95 3 3.15 4.85 0 7.23L12 22 24 7.25C20.85 4.87 17.05 3 12 3zm1 13h-2v-6h2v6zm-2-8V6h2v2h-2z" />
    </svg>
    <ul>
      <li data-lang="en">
        Cannot connect to server
      </li>
      <li data-lang="de">
        Kann nicht mit dem server verbinden
      </li>
      <li data-lang="fr">
        Ne peut pas se connecter au serveur
      </li>
    </ul>
  </body>
</html>
