<!DOCTYPE html>
<html>
  <head>
    <link
      rel="icon"
      href="/public/images/favicon.ico"
      type="image/vnd.microsoft.icon"
    />
    <title>Offline - Replit</title>
  </head>
  <body>
    <div id="content">
      <h1>🙈</h1>
      <h4>You’re offline!</h4>
      <p>Check your connection and refresh to access Re>
    <style>
      body {
        font-family: 'IBM Plex Sans', system-ui, sans-serif;
        font-style: normal;
        font-weight: 400;
        background-color: #ffffff;
        -webkit-app-region: drag;
      }
      #content {
        text-align: center;
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        align-items: center;
        justify-content: center;
      }
      p {
        margin-top: 0;
      }
      button {
        cursor: pointer;
        height: 37px;
        min-width: 120px;
        padding: 0 10px;
        line-height: 37px;
        text-align: center;
        font-family: inherit;
        font-size: 16px;
        border: 0;
        outline: 0;
        text-decoration: none;
        border: none;
        background-color: #3485e4;
        color: #fff;
        border-radius: 4px;
        -webkit-app-region: no-drag;
      }
      @media (prefers-color-scheme: dark) {
        body {
          background: #0e1525;
          color: #f5f9fc;
        }
      }
    </style>
    <script>
      // Manual reload feature.
      document.querySelector('button').addEventListener('click', () => {
        window.location.reload();
      });

      // Listen to changes in the network state, reload when online.
      // This handles the case when the device is completely offline.
      window.addEventListener('online', () => {
        window.location.reload();
      });
    </script>
  </body>
</html>
