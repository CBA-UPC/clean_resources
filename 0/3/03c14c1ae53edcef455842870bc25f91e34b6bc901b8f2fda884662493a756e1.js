f-montserrat-n4-active wf-montserrat-n6-active wf-montserrat-n5-active wf-active"><head> <meta charset="UTF-8"> <meta http-equiv="X-UA-Compatible" content="IE=edge"> <meta name="viewport" content="width=device-width"> <title> | The Financial Express</title>
 <!-- The following style is copied from _default_wp_die_handler(). --> <style type="text/css"> html {
 background: #f1f1f1;
 }
 body {
 background: #fff;
 color: #444;
 font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
 margin: 2em auto;
 padding: 1em 2em;
 max-width: 700px;
 -webkit-box-shadow: 0 1px 3px rgba(0,0,0,0.13);
 box-shadow: 0 1px 3px rgba(0,0,0,0.13);
 }
 h1 {
 border-bottom: 1px solid #dadada;
 clear: both;
 color: #666;
 font-size: 24px;
 margin: 30px 0 0 0;
 padding: 0 0 7px;
 }
 #error-page {
 margin-top: 50px;
 }
 #error-page p {
 font-size: 14px;
 line-height: 1.5;
 margin: 25px 0 20px;
 }
 #error-page code {
 font-family: Consolas, Monaco, monospace;
 }
 ul li {
 margin-bottom: 10px;
 font-size: 14px ;
 }
 a {
 color: #0073aa;
 }
 a:hover,
 a:active {
 color: #00a0d2;
 }
 a:focus {
 color: #124964;
 -webkit-box-shadow: 0 0 0 1px #5b9dd9, 0 0 2px 1px rgba(30, 140, 190, .8);
 box-shadow: 0 0 0 1px #5b9dd9, 0 0 2px 1px rgba(30, 140, 190, .8);
 outline: none;
 }
 .button {
 background: #f7f7f7;
 border: 1px solid #ccc;
 color: #555;
 display: inline-block;
 text-decoration: none;
 font-size: 13px;
 line-height: 26px;
 height: 28px;
 margin: 0;
 padding: 0 10px 1px;
 cursor: pointer;
 -webkit-border-radius: 3px;
 -webkit-appearance: none;
 border-radius: 3px;
 white-space: nowrap;
 -webkit-box-sizing: border-box;
 -moz-box-sizing: border-box;
 box-sizing: border-box;

 -webkit-box-shadow: 0 1px 0 #ccc;
 box-shadow: 0 1px 0 #ccc;
 vertical-align: top;
 }

 .button.button-large {
 height: 30px;
 line-height: 28px;
 padding: 0 12px 2px;
 }

 .button:hover,
 .button:focus {
 background: #fafafa;
 border-color: #999;
 color: #23282d;
 }

 .button:focus {
 border-color: #5b9dd9;
 -webkit-box-shadow: 0 0 3px rgba( 0, 115, 170, .8 );
 box-shadow: 0 0 3px rgba( 0, 115, 170, .8 );
 outline: none;
 }

 .button:active {
 background: #eee;
 border-color: #999;
 -webkit-box-shadow: inset 0 2px 5px -3px rgba( 0, 0, 0, 0.5 );
 box-shadow: inset 0 2px 5px -3px rgba( 0, 0, 0, 0.5 );
 -webkit-transform: translateY(1px);
 -ms-transform: translateY(1px);
 transform: translateY(1px);
 }

 </style> <meta name="robots" content="NOODP" /><meta name='robots' content='max-image-preview:large, noindex' /></head><body id="error-page" class="wp-embed-responsive error offline ie-network-fe"><main> <h1>Offline</h1> <p>{{{WP_SERVICE_WORKER_ERROR_MESSAGE}}}</p></main> <script id="wp-navigation-request-properties" type="application/json">{{{WP_NAVIGATION_REQUEST_PROPERTIES}}}</script> <script type="module"> const shouldRetry = () => {
 if (
 new URLSearchParams(location.search.substring(1)).has(
 'wp_error_template'
 )
 ) {
 return false;
 }

 const navigationRequestProperties = JSON.parse(
 document.getElementById('wp-navigation-request-properties').text
 );
 if ('GET' !== navigationRequestProperties.method) {
 return false;
 }

 return true;
 };

 if (shouldRetry()) {
 /**
 * Listen to changes in the network state, reload when online.
 * This handles the case when the device is completely offline.
 */
 window.addEventListener('online', () => {
 window.location.reload();
 });

 // Create a counter to implement exponential backoff.
 let count = 0;

 /**
 * Check if the server is responding and reload the page if it is.
 * This handles the case when the device is online, but the server is offline or misbehaving.
 */
 async function checkNetworkAndReload() {
 try {
 const response = await fetch(location.href, {
 method: 'HEAD',
 });
 // Verify we get a valid response from the server
 if (response.status >= 200 && response.status < 500) {
 window.location.reload();
 return;
 }
 } catch {
 // Unable to connect so do nothing.
 }
 window.setTimeout(
 checkNetworkAndReload,
 Math.pow(2, count++) * 2500
 );
 }

 checkNetworkAndReload();
 }
 </script> </body></html>