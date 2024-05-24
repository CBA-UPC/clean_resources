<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <script>
    function isNullishCoalescingSupported() {
      try {
        eval("undefined ?? true");
      } catch {
        return false;
      }
      return true;
    }

    const LEGACY_PATH_EXTENSION = "/legacy-browser";
    const LEGACY_BROWSER_ROUTE = "/play" + LEGACY_PATH_EXTENSION;
    const browserIsSupported = isNullishCoalescingSupported();

    if (!browserIsSupported) {
      const pathname = window.location.pathname;
      const pathParts = pathname.split("/").filter(function(path) {
        return !!path;
      });

      if (pathname.indexOf(LEGACY_BROWSER_ROUTE) < 0) {
        const bu = pathParts[0] === "play" ? "" : "/" + pathParts[0];
        const url = bu + LEGACY_BROWSER_ROUTE;

        window.location.replace(url);
      }
    }
  </script>
  
  <script type="module" crossorigin src="/play/v3/static/index-65ed43a5.js"></script>
  <link rel="stylesheet" href="/play/v3/static/index-3b642a6f.css">
<link rel="manifest" href="/play/v3/manifest.webmanifest"><script id="vite-plugin-pwa:register-sw" src="/play/v3/registerSW.js"></script></head>
<body>
<div id="root"></div>
</body>
<script>
  window.playVersion = {
    commitSha: "673a409fe323614e3e240afc6071be121636da24",
    timestamp: "24.08.2023 07:52",
    letterboxVersion: "3.28.1"
  };
</script>
</html>
