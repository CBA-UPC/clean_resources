<!DOCTYPE html>
<html>
  <head>
    <script nonce="/Bx0pqcTTiMKi7fNdARkXzjjdN9rjK"
            src="https://www.gstatic.com/devrel-devsite/prod/v9e9ed563928734913447a8850ccb7e26986365be22242b631904a5bd14e09639/js/analytics_library.js">
    </script>
  </head>
  <body>
    <script nonce="/Bx0pqcTTiMKi7fNdARkXzjjdN9rjK">
      window['dataLayer'] = window['dataLayer'] || [];
      if (window.AnalyticsLibrary) {
        const analyticsLibrary = new AnalyticsLibrary();
        analyticsLibrary.notifyIframeReady(true);
      }
    </script>
  </body>
</html>r('message', function(event) {
        
        if (event.origin != 'https://firebase.google.com'
            && event.origin != 'https://firebase.google.cn') {
          return;
        };
        window['dataLayer'].push(event.data);
      });
    </script>
  </body>
</html>