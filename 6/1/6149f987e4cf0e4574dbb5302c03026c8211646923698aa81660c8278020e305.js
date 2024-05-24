<!DOCTYPE html>
<html lang="de-DE" data-crawler="ignore">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="robots" content="noindex">

  <title>Offline</title>

  <style>
    @font-face {
      font-family: SWRSans;
      src: url(/assets/fonts/swr_type/SWR_Sans_WEB/SWRSans-Regular.woff2) format("woff2").woff) format("woff");
      font-weight: 500;
      font-style: normal;
    }

    @font-face {
      font-family: SWRSans;
      src: url(/assets/fonts/swr_type/SWR_Sans_WEB/SWRSans-SemiBold.woff2) format("woff2"), url(/assets/fonts/swr_type/SWR_Sans_WEB/SWRSans-SemiBold.woff) format("woff");
      font-weight: 600;
      font-style: normal;
    }

    body,
    html {
      font-family: SWRSans, Thesis, arial, roboto, "droid sans", helvetica, sans-serif;
      font-size: 100%;
      color: #494949;
      background-color: #fff;
      height: 100vh;
      margin: 0;
    }

    a {
      color: #494949;
      text-decoration: none;
      border-bottom: 2px solid #979797;
    }

    a:hover,
    a:focus {
      background-color: rgba(151, 151, 151, .3);
      border-bottom: none;
      text-decoration: none;
      padding-bottom: 2px;
    }

    svg {
      width: 9em;
      margin-bottom: 32px;
    }

    .container {
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      flex-flow: column;
      -webkit-box-align: center;
      align-items: center;
      display: -webkit-box;
      display: flex;
      -webkit-box-pack: center;
      justify-content: center;
      height: 100vh;
    }

    .row {
      display: -webkit-box;
      display: flex;
      flex-wrap: wrap;
    }

    .col {
      position: relative;
      width: 100%;
      flex-basis: 0;
      -webkit-box-flex: 1;
      flex-grow: 1;
      max-width: 100%;
      -webkit-box-align: center;
      align-items: center;
      -webkit-box-pack: center;
      justify-content: center;
      align-self: center;
    }

    .code {
      border-right: 2px solid;
      font-size: 26px;
    }

    .status {
      white-space: nowrap;
    }

    .status,
    .code {
      padding: 0 16px 0 16px;
      margin-bottom: 8px;
      font-weight: bold;
    }

    .status,
    .home {
      font-size: 18px;
    }

    .message {
      margin-top: 8px;
      max-width: 400px;
      line-height: 1.5rem;
    }

    .home {
      margin-top: 32px;
      font-weight: bold;
    }

    .message,
    .home {
      text-align: center;
    }
  </style>
</head>
<body>
<div class="container">
  <div class="row">
    <div class="col">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 815 240">
        <path fill="#1D0B40" d="m588.4 240 119-120-119-120v78l41.9 42-42 42v78Zm-284.8-93.2L325.3 13h50.3l-38.1 216H281L256.7 90.5l-24.4 138.7h-56.4L137.8 13H188l21.8 133.7L231.6 13h50.2l21.8 133.8Zm185.8-11.4 16.7 24.3 45.6 69.4h-60.6l-51.5-84.4h-1.9V229h-49.9V13c18.3-1.3 41.6-1.6 67.6-1.6 51 0 80.8 18.3 80.8 64.1 0 29.1-18 52.8-46.8 59.8Zm-39.2-26.2c21.3 0 34.8-11.2 34.8-29.4 0-17-10-27.2-33.5-27.2-5.1 0-11 .3-13.8.6v55.3c2.6.3 7.7.7 12.5.7Zm-310.4 50c0 41.9-33.5 73-88.6 73-15 0-30.8-1.6-44.5-4.8l2.2-47.3c12.1 4.5 30.4 9.1 46 9.1 18.4 0 31.5-7.7 31.5-23 0-15.4-14.8-21.2-32.2-28C30 129 1 117.7 0 76-.9 35.3 32 8.5 86.1 8.5c11.5 0 26 1.3 39.4 3.9l-.1 44a162.1 162.1 0 0 0-41.2-6.7c-20.9 0-30.8 9-30.8 21.1 0 14 14.8 19.9 32.1 26.9 24.6 9.9 54.3 21.9 54.3 61.5ZM695.3 78V0l119 120-119 120v-78l41.9-42-42-42Z" />
      </svg>
    </div>
  </div>
  <div class="row">
    <div class="col code">Offline</div>
    <div class="col status">Keine Internetverbindung</div>
  </div>
  <div class="row">
    <div class="col message">Leider konnte die von Ihnen angeforderte Seite nicht aufgerufen werden. Vermutlich haben Sie gerade keine Verbindung zum Internet.</div>
  </div>
  <div class="row">
    <div class="col home"><a href="https://www.swr.de">zur SWR Startseite</a></div>
  </div>

  <script>
      // Manual reload feature.
      document.querySelector("button").addEventListener("click", function() {
          console.log(window.location, 'Try reload');
          window.location.reload();
      });

      // Listen to changes in the network state, reload when online.
      // This handles the case when the device is completely offline.
      window.addEventListener('online', function() {
          window.location.reload();
      });

      // Check if the server is responding and reload the page if it is.
      // This handles the case when the device is online, but the server
      // is offline or misbehaving.
      /*function checkNetworkAndReload() {
          var response = fetch('.');
          // Verify we get a valid response from the server
          if (response.status >= 200 && response.status < 500) {
              window.location.reload();
              return;
          }
          window.setTimeout(checkNetworkAndReload, 2500);
      }

      checkNetworkAndReload();*/
  </script>
</div>
</body>
</html>
