meta charset="UTF-8"> <meta http-equiv="X-UA-Compatible" content="IE=edge"> <meta name="viewport" content="width=device-width"> <title>Internal Server Error &#8211; Loksatta</title>
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

 </style> <meta name="robots" content="NOODP" /><meta name='robots' content='max-image-preview:large, noindex' /></head><body id="error-page" class="wp-embed-responsive error error500 ie-network-loksatta"><main> <h1>Oops! Something went wrong.</h1> <p>{{{WP_SERVICE_WORKER_ERROR_MESSAGE}}}</p> {{{WP_SERVICE_WORKER_ERROR_TEMPLATE_BEGIN}}}<details id="error-details"><summary>More Details</summary>{{{error_details_iframe}}}</details>{{{WP_SERVICE_WORKER_ERROR_TEMPLATE_END}}}</main> <script id="wp-navigation-request-properties" type="application/json">{{{WP_NAVIGATION_REQUEST_PROPERTIES}}}</script> <script type="module"> const shouldRetry = () => {
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
 </script> </body></html>c="${ios_img}" class="app_download_img" alt="${res.app_download_links.ios.text}"></a></p>`;$("#app_download").append(ios_link);}}catch(err){console.error(err,"social links");}}
try{if(res.social_links.facebook){var facebook=`
         <a href="${res.social_links.facebook}" aria-label="facebook" class="ms-4 link-secondary">
         <svg xmlns="http://www.w3.org/2000/svg"width="18" height="18" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg>      </a>`;$("#social_links").append(facebook);}
if(res.social_links.linkedin){var linkedin=`
         <a href="${res.social_links.linkedin}" aria-label="linkedin" class="ms-4 link-secondary">
         <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
       </a>
       `;$("#social_links").append(linkedin);}
if(res.social_links.instagram){var instagram=`
         <a href="${res.social_links.instagram}" aria-label="instagram" class="ms-4 link-secondary">
         <svg xmlns="http://www.w3.org/2000/svg"  width="18" height="18" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
       </a>
       `;$("#social_links").append(instagram);}
if(res.social_links.twitter){var twitter=`
         <a href="${res.social_links.twitter}" aria-label="twitter" class="ms-4 link-secondary">
         <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>
       </a>
       `;$("#social_links").append(twitter);}
if(res.social_links.youtube){var youtube=`
         <a href="${res.social_links.youtube}" aria-label="youtube" class="ms-4 link-secondary">
         <svg xmlns="http://www.w3.org/2000/svg" width="18"  height="18" viewBox="0 0 576 512"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg>
       </a>
       `;$("#social_links").append(youtube);}
if(res.social_links.koo){var koo=`
         <a href="${res.social_links.koo}" aria-label="koo" class="ms-4 link-secondary">
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 495.45 721.36"width="18" height="18"><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M368,310.51A60.56,60.56,0,0,1,345.15,302c11.16,14.88,30.06,41.72,36.44,50.82a.65.65,0,0,0,.66.28.7.7,0,0,0,.58-.53c5.18-17.91,3.76-36.06,3.27-40.67C380.51,311.67,374.48,311.23,368,310.51Z"/><path d="M417.11,298.13c-12.76-4.65-34.11-12.43-37.93-12.43-4,0-27.32,4.73-41.19,7.67,4.41,3.74,15.85,12.32,30.36,14.4,40.68,4.52,60.18-2.35,60.94-5.2-.09,0-.27-.19-.9-.4C426.2,301.44,422.09,299.94,417.11,298.13Z"/><path d="M495,361.42c-2.52-70.45-23.4-129.79-43.59-187.18q-3.12-8.87-6.2-17.69c-21.08-60.61-70.55-89.46-114.47-89.93a52.17,52.17,0,0,1,1.48-16c.41-1.65.95-3.62,1.54-5.76,4-14.77,6.84-26.44,3.15-31.28a5.66,5.66,0,0,0-4.61-2.23c-6.62,0-10.24,7.69-12.1,14-7.15-13.12-17.47-28.53-25-24.78-3.38,1.69-3.57,7.89-.58,18.5-4.37-4.79-9-8.22-13-8.88a7.13,7.13,0,0,0-6.42,1.93c-4,4,0,11.66,5.33,18.79-7.79-2.13-11.64,1.31-12.23,1.9l-.32.32-.2.4c-2.93,5.85.78,10.36,4,12,15.72,7.86,27,19.54,31.82,25.11-76,21.3-123.93,63.63-146.46,129.18-19.82,57.68-15.76,121.59-12.5,173,.77,12.16,1.5,23.65,1.83,34,.79,25-6,44.12-20.11,56.78C95.47,491.16,37.42,482.86,9.52,478.87l-1.19-.17-.35,0c-2.08.23-6,1.58-7.42,5.19-1.61,4,.23,9.07,5.61,15.48l.36.35c66.75,55.08,154,94.71,230.16,108.14v48.7c0,9.79-29.57,13.11-58.49,15.07a4.17,4.17,0,0,0,0,8.32c24.83,1.46,41.12,2.92,45.86,4.1,1.78.44,2.85,1.11,3.19,2,1.13,2.94-3.47,9.78-6.52,14.3l-1.05,1.57c-3.24,4.86-8.09,13.63-4.23,17.77a5.48,5.48,0,0,0,4.19,1.65c3.57,0,8.08-2.23,12-4.45,18.23-10.42,18.23-10.42,25.34-8,1,.34,2.07.72,3.13,1.1,5.86,2.11,10.91,3.93,13.46.83,2.32-2.82.26-7.19-2.32-11.48l-1-1.59c-7.76-12.89-12.44-20.67-12.44-41.11V611A285.44,285.44,0,0,0,290,612.9a201.35,201.35,0,0,0,37-3.19c-1.59,8.1-5.57,27.93-9.8,44.83-5.85,23.42,13.24,53,20.38,58.07a10.42,10.42,0,0,0,5.73,2.29,3.41,3.41,0,0,0,1-.11c2.66-.47,4.14-2.64,5.58-4.74,2.19-3.2,4.67-6.83,11.83-8,12.18-2,31.14,2.33,38.72,4.29a3.63,3.63,0,0,0,3.21-6.32c-7.44-6-10.19-10.24-10.28-12a.57.57,0,0,1,.18-.54c2.39-2.39,9-5.52,18.13-8.59a4.11,4.11,0,0,0-.68-8c-12.51-1.88-54.21-8.35-65.24-12.76-8.84-3.53-8.11-8.87-5.44-21.69.54-2.62,1.13-5.41,1.62-8.38,2-11.71,3.43-18.47,4.1-21.34,61.54-12,104.59-45.47,128.09-99.69C495.72,457.18,496.39,400.05,495,361.42ZM292.32,263.64a16.55,16.55,0,1,1,16.55-16.55A16.55,16.55,0,0,1,292.32,263.64ZM393,201.58a16.55,16.55,0,1,1-16.55,16.55A16.55,16.55,0,0,1,393,201.58Zm39,101.56c-1,4.38-14.76,8.87-38.5,8.87-1.49,0-3,0-4.6-.06.56,5.35,1.84,23.21-3.41,41.35a3.51,3.51,0,0,1-3.35,2.53,3.41,3.41,0,0,1-2.8-1.46c-7.62-10.86-33.1-47.07-41.85-57.81-2.05-1.66-3.23-2.83-3.39-3l-1.79-1.79,2.48-.53c1.58-.34,38.81-8.3,44.41-8.3,4,0,20.66,6,38.87,12.6,4.94,1.8,9,3.29,11.2,4C432.3,300.58,432.12,302.56,432,303.14Z"fill="{{icon_color}}"/></g></g></svg>
       </a>
       `;$("#social_links").append(koo);}
if(res.social_links.whatsapp){var whatsapp=`
             <a href="${res.social_links.whatsapp}" aria-label="whatsapp" class="ms-4 link-secondary social-footer-link">
               <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                 <path d="M25,2C12.318,2,2,12.318,2,25c0,3.96,1.023,7.854,2.963,11.29L2.037,46.73c-0.096,0.343-0.003,0.711,0.245,0.966 C2.473,47.893,2.733,48,3,48c0.08,0,0.161-0.01,0.24-0.029l10.896-2.699C17.463,47.058,21.21,48,25,48c12.682,0,23-10.318,23-23 S37.682,2,25,2z M36.57,33.116c-0.492,1.362-2.852,2.605-3.986,2.772c-1.018,0.149-2.306,0.213-3.72-0.231 c-0.857-0.27-1.957-0.628-3.366-1.229c-5.923-2.526-9.791-8.415-10.087-8.804C15.116,25.235,13,22.463,13,19.594 s1.525-4.28,2.067-4.864c0.542-0.584,1.181-0.73,1.575-0.73s0.787,0.005,1.132,0.021c0.363,0.018,0.85-0.137,1.329,1.001 c0.492,1.168,1.673,4.037,1.819,4.33c0.148,0.292,0.246,0.633,0.05,1.022c-0.196,0.389-0.294,0.632-0.59,0.973 s-0.62,0.76-0.886,1.022c-0.296,0.291-0.603,0.606-0.259,1.19c0.344,0.584,1.529,2.493,3.285,4.039 c2.255,1.986,4.158,2.602,4.748,2.894c0.59,0.292,0.935,0.243,1.279-0.146c0.344-0.39,1.476-1.703,1.869-2.286 s0.787-0.487,1.329-0.292c0.542,0.194,3.445,1.604,4.035,1.896c0.59,0.292,0.984,0.438,1.132,0.681 C37.062,30.587,37.062,31.755,36.57,33.116z"></path>
               </svg>
             </a>
           `;$("#social_links").append(whatsapp);}
if(res.social_links.thread){var thread=`
             <a href="${res.social_links.thread}" aria-label="thread" class="ms-4 link-secondary social-footer-link">
               <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="478.000000pt" height="478.000000pt" viewBox="0 0 478.000000 478.000000" preserveAspectRatio="xMidYMid meet">
                 <g transform="translate(0.000000,478.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                 <path d="M850 4773 c-14 -2 -58 -13 -99 -24 -351 -94 -618 -362 -723 -725 l-23 -79 0 -1555 0 -1555 23 -79 c103 -357 353 -612 707 -723 l90 -28 1560 0 1560 0 79 23 c364 105 623 364 728 728 l23 79 0 1555 0 1555 -23 79 c-72 250 -218 453 -422 588 -97 64 -169 98 -290 136 l-85 27 -1540 1 c-847 1 -1551 0 -1565 -3z m1900 -608 c509 -85 866 -367 1109 -878 90 -187 105 -226 89 -232 -60 -23 -324 -92 -329 -87 -3 4 -21 50 -38 102 -150 436 -436 687 -875 767 -123 23 -429 22 -579 -1 -438 -68 -729 -329 -882 -791 -71 -216 -100 -448 -92 -749 11 -467 121 -802 336 -1028 160 -169 381 -289 631 -344 114 -25 418 -25 565 0 216 36 393 119 528 245 234 220 312 517 200 758 -33 70 -102 162 -158 207 -47 39 -65 40 -65 2 0 -45 -42 -183 -80 -261 -78 -163 -195 -281 -355 -361 -129 -64 -223 -86 -370 -86 -90 0 -140 5 -200 21 -295 77 -475 297 -475 576 1 254 153 472 396 567 118 45 228 58 512 58 l253 0 -6 23 c-23 80 -79 174 -139 232 -104 102 -228 133 -408 102 -116 -20 -186 -54 -254 -122 -30 -30 -57 -55 -59 -55 -5 0 -237 150 -249 160 -15 15 40 93 113 162 81 77 193 137 316 169 109 29 349 32 445 6 304 -84 508 -315 555 -629 23 -153 20 -145 78 -174 197 -100 388 -310 467 -515 135 -349 30 -757 -274 -1064 -179 -181 -367 -272 -671 -326 -113 -20 -164 -23 -385 -23 -204 -1 -273 3 -345 17 -357 70 -764 321 -935 576 -117 175 -224 499 -275 831 -23 151 -30 457 -15 620 57 623 334 1122 749 1350 183 100 413 166 676 194 84 9 403 -3 495 -19z"/>
                 <path d="M2358 2330 c-27 -4 -76 -18 -110 -29 -277 -92 -293 -397 -29 -519 45 -21 75 -27 151 -30 160 -7 290 36 367 121 71 79 133 256 133 381 l0 43 -97 18 c-109 20 -342 28 -415 15z"/>
                 </g>
               </svg>
             </a>
           `;$("#social_links").append(thread);}
if(res.social_links.telegram){var telegram=`
             <a href="${res.social_links.telegram}" aria-label="telegram" class="ms-4 link-secondary social-footer-link">
               <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                 <path d="M25,2c12.703,0,23,10.297,23,23S37.703,48,25,48S2,37.703,2,25S12.297,2,25,2z M32.934,34.375	c0.423-1.298,2.405-14.234,2.65-16.783c0.074-0.772-0.17-1.285-0.648-1.514c-0.578-0.278-1.434-0.139-2.427,0.219	c-1.362,0.491-18.774,7.884-19.78,8.312c-0.954,0.405-1.856,0.847-1.856,1.487c0,0.45,0.267,0.703,1.003,0.966	c0.766,0.273,2.695,0.858,3.834,1.172c1.097,0.303,2.346,0.04,3.046-0.395c0.742-0.461,9.305-6.191,9.92-6.693	c0.614-0.502,1.104,0.141,0.602,0.644c-0.502,0.502-6.38,6.207-7.155,6.997c-0.941,0.959-0.273,1.953,0.358,2.351	c0.721,0.454,5.906,3.932,6.687,4.49c0.781,0.558,1.573,0.811,2.298,0.811C32.191,36.439,32.573,35.484,32.934,34.375z"></path>
               </svg>
             </a>
           `;$("#social_links").append(telegram);}
if(res.social_links.reddit){var reddit=`
             <a href="${res.social_links.reddit}" aria-label="reddit" class="ms-4 link-secondary social-footer-link">
               <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                 <path d="M 29 3 C 26.894531 3 24.433594 4.652344 24.0625 12.03125 C 24.375 12.023438 24.683594 12 25 12 C 25.351563 12 25.714844 12.019531 26.0625 12.03125 C 26.300781 7.597656 27.355469 5 29 5 C 29.703125 5 30.101563 5.382813 30.84375 6.1875 C 31.710938 7.128906 32.84375 8.351563 35.0625 8.8125 C 35.027344 8.550781 35 8.269531 35 8 C 35 7.578125 35.042969 7.179688 35.125 6.78125 C 33.75 6.40625 33.023438 5.613281 32.3125 4.84375 C 31.519531 3.984375 30.609375 3 29 3 Z M 41 4 C 38.792969 4 37 5.796875 37 8 C 37 10.203125 38.792969 12 41 12 C 43.207031 12 45 10.203125 45 8 C 45 5.796875 43.207031 4 41 4 Z M 25 14 C 12.867188 14 3 20.179688 3 29 C 3 37.820313 12.867188 45 25 45 C 37.132813 45 47 37.820313 47 29 C 47 20.179688 37.132813 14 25 14 Z M 7.5 14.9375 C 6.039063 14.9375 4.652344 15.535156 3.59375 16.59375 C 1.871094 18.316406 1.515625 20.792969 2.5 22.84375 C 4.011719 19.917969 6.613281 17.421875 9.96875 15.5625 C 9.207031 15.175781 8.363281 14.9375 7.5 14.9375 Z M 42.5 14.9375 C 41.636719 14.9375 40.792969 15.175781 40.03125 15.5625 C 43.386719 17.421875 45.988281 19.917969 47.5 22.84375 C 48.484375 20.792969 48.128906 18.316406 46.40625 16.59375 C 45.347656 15.535156 43.960938 14.9375 42.5 14.9375 Z M 17 23 C 18.65625 23 20 24.34375 20 26 C 20 27.65625 18.65625 29 17 29 C 15.34375 29 14 27.65625 14 26 C 14 24.34375 15.34375 23 17 23 Z M 33 23 C 34.65625 23 36 24.34375 36 26 C 36 27.65625 34.65625 29 33 29 C 31.34375 29 30 27.65625 30 26 C 30 24.34375 31.34375 23 33 23 Z M 16.0625 34 C 16.3125 34.042969 16.558594 34.183594 16.71875 34.40625 C 16.824219 34.554688 19.167969 37.6875 25 37.6875 C 30.910156 37.6875 33.257813 34.46875 33.28125 34.4375 C 33.597656 33.988281 34.234375 33.867188 34.6875 34.1875 C 35.136719 34.503906 35.222656 35.109375 34.90625 35.5625 C 34.789063 35.730469 31.9375 39.6875 25 39.6875 C 18.058594 39.6875 15.210938 35.730469 15.09375 35.5625 C 14.777344 35.109375 14.859375 34.503906 15.3125 34.1875 C 15.539063 34.027344 15.8125 33.957031 16.0625 34 Z"></path>
               </svg>
             </a>
           `;$("#social_links").append(reddit);}}catch(err){console.error(err,"social links");}
contrast_color(link_color,"btn-footer");}},});};latest_articles_footer=(post_key,url)=>{$.ajax({method:"get",url:"/get_right_posts",dataType:"json",success:function(res){try{const items=[];var counter=0;for(i=0;i<res.items.length;i++){if(post_key==res.items[i].id){continue;}
items.push(res.items[i]);counter+=1;if(counter>5){break;}}
$("#stories_footer_1").append(`
      <ul id="latest_stories_list" class="latest_stories_footer"></ul> `);for(let i=0;i<items.length;i++){if(i%2===0){var latest_stories=`
            <li>
              <p class="line_clamp"><a href="${items[i].legacy_url}" aria-label="${items[i].title}" class="footer-anchor">${items[i].title}</a></p>
            </li>
            `;$("#latest_stories_list").append(latest_stories);}else{var stories=`
              <li>
                <p class="line_clamp" ><a href="${items[i].legacy_url}" aria-label="${items[i].title}" class="footer-anchor">${items[i].title}</a></p>
              </li>
              `;$("#stories_footer_2").append(stories);}}}catch(err){console.error(err,"latest_stories");}},});};function showV2FooterSection(res){$('.footer-class').removeClass('px-4')
$(".v2-footer-section").css("display","block");$(".v1-footer-section").css("display","none");$(".v2-footer-section").css('background',res?.accent_color?res?.accent_color:'#000');$(".v2-footer-section").css('color',res?.text_color?res?.text_color:'#fff');$(".preview-first-row .first-column .image-section .image").css("display","none")
if(res?.logo){$(".preview-first-row .first-column .image-section .image").attr("src",res.logo);$(".preview-first-row .first-column .image-section .image").css("display","flex")}
$(".preview-first-row .first-column .newsletter-section").addClass(res?.newsletter_css_block);if(res?.short_bio){$(".preview-first-row .first-column .p-tag-short-bio").html(res.short_bio);}
setApkLinksForFooter(res);setSocialLinksForFooter(res);setQuickLinksForFooter(res);if(res?.latest_stories_status){setLatestStoriesForFooter(res);}
setAffiliateLinksForFooter(res);if(res?.copy_right_text){$('.preview-last-row .copy-right-text').html(res?.copy_right_text)}}
function setApkLinksForFooter(res){if(res?.app_links?.android_url){$(".preview-first-row .second-column .show-app-link-section").css("display","flex");const android_link=`
      <p class="footer-social-link-p-tag"><a href="${res?.app_links?.android_url}" aria-label="${res?.app_links?.android_url}" class=""><img src="${and_img}" class="v2-footer-app-link" alt="${res?.app_links?.android_url}"></a></p>
      `;$(".preview-first-row .second-column .show-app-link-section").append(android_link);}
if(res?.app_links?.apple_url){$(".preview-first-row .second-column .show-app-link-section").css("display","flex");const ios_link=`
        <p class="footer-social-link-p-tag"><a href="${res?.app_links?.apple_url}" aria-label="${res?.app_links?.apple_url}" class=""><img src="${ios_img}" class="v2-footer-app-link" alt="${res?.app_links?.apple_url}"></a></p>`;$(".preview-first-row .second-column .show-app-link-section").append(ios_link);}}
function setSocialLinksForFooter(res){try{var load_dark_svg=1
if(isColorDark(res?.accent_color)){load_dark_svg=0}
if(res?.amp_social_links?.facebook?.title==="Facebook"){var facebook=`
          <a href="${res?.amp_social_links?.facebook?.link}" aria-label="facebook" class="link-secondary">
          ${get_facebook_svg(load_dark_svg)}
          </a>`;$(".preview-first-row .second-column .social-logo-section").append(facebook);}
if(res?.amp_social_links?.linkedin?.title==="LinkedIn"){var linkedin=`
          <a href="${res?.amp_social_links?.linkedin?.link}" aria-label="linkedin" class="link-secondary">
          ${get_linkedin_svg(load_dark_svg)}
          </a>
        `;$(".preview-first-row .second-column .social-logo-section").append(linkedin);}
if(res?.amp_social_links?.instagram?.title==="Instagram"){var instagram=`
            <a href="${res?.amp_social_links?.instagram?.link}" aria-label="instagram" class="link-secondary">
            ${get_instagram_svg(load_dark_svg)}
          </a>
        `;$(".preview-first-row .second-column .social-logo-section").append(instagram);}
if(res?.amp_social_links?.twitter?.title==="Twitter"){var twitter=`
            <a href="${res?.amp_social_links?.twitter?.link}" aria-label="twitter" class="link-secondary">
            ${get_twitter_svg(load_dark_svg)}
          </a>
        `;$(".preview-first-row .second-column .social-logo-section").append(twitter);}
if(res?.amp_social_links?.youtube?.title==="YouTube"){var youtube=`
          <a href="${res?.amp_social_links?.youtube?.link}" aria-label="youtube" class="link-secondary">
          ${get_youtube_svg(load_dark_svg)}
        </a>
        `;$(".preview-first-row .second-column .social-logo-section").append(youtube);}
if(res?.amp_social_links?.whatsapp?.title==="Whatsapp"){var whatsapp=`
        <a href="${res?.amp_social_links?.whatsapp?.link}" aria-label="whatsapp" class="link-secondary">
        ${get_whatsapp_svg(load_dark_svg)}
        </a>
      `;$(".preview-first-row .second-column .social-logo-section").append(whatsapp);}
if(res?.amp_social_links?.thread?.title==="Thread"){var thread=`
        <a href="${res?.amp_social_links?.thread?.link}" aria-label="thread" class="link-secondary">
        ${get_thread_svg(load_dark_svg)}

        </a>
      `;$(".preview-first-row .second-column .social-logo-section").append(thread);}
if(res?.amp_social_links?.telegram?.title==="Telegram"){var telegram=`
        <a href="${res?.amp_social_links?.telegram?.link}" aria-label="telegram" class="link-secondary">
        ${get_telegram_svg(load_dark_svg)}

        </a>
      `;$(".preview-first-row .second-column .social-logo-section").append(telegram);}
if(res?.amp_social_links?.reddit?.title==="Reddit"){var reddit=`
        <a href="${res?.amp_social_links?.reddit?.link}" aria-label="reddit" class="link-secondary">
        ${get_reddit_svg(load_dark_svg)}

        </a>
      `;$(".preview-first-row .second-column .social-logo-section").append(reddit);}}catch(err){console.error(err,"social links");}}
function setQuickLinksForFooter(res){try{if(res?.quick_menu){for(var i=0;i<res?.quick_menu?.length;i++){let quickMenuMainDiv=``;const menuItemDiv=`
          <p class="quick-link-title">${res?.quick_menu[i]?.title}</p>
        `;let menuItemChildItem=``;const childItems=res?.quick_menu[i]?.childQuickLinks;for(var j=0;j<childItems?.length;j++){menuItemChildItem+=`
          <li>
            <a class="add-link-input-text" href="${childItems[j]?.link}" aria-label="${childItems[j]?.name}">
                <span>${childItems[j]?.name} </span>
            </a>
          </li>
          `;}
quickMenuMainDiv+=`
          ${menuItemDiv}
          <div class="menu-title">
            <ul class="links-div">
              <!-- run the loop here-->
              ${menuItemChildItem}
            </ul>
          </div>
          <hr class="footer-preview-hr-non-amp">`;$(".preview-second-row .quick-link-items").append(quickMenuMainDiv);}}}catch(err){console.error(err,"quick menu");}}
function setLatestStoriesForFooter(res){try{if(res?.latest_stories){let latestStoriesItems=''
for(let i=0;i<res?.latest_stories?.length;i++){latestStoriesItems+=`
          <li>
            <a class="add-link-input-text" href="${res?.latest_stories[i]?.legacy_url}" aria-label="${res?.latest_stories[i]?.title}">
              <span>${res?.latest_stories[i]?.title}</span>
            </a>
          </li>
        `;}
const latestStories=`
        <p class="quick-link-title">Latest Stories</p>
        <div class="menu-title">
          <ul class="links-div">
            ${latestStoriesItems}
          </ul>
        </div>
        <hr class="footer-preview-hr-non-amp" />
      `;$(".preview-third-row").css("display","block");$(".preview-third-row").append(latestStories);}}catch(err){console.error(err,"latest stories");}}
function setAffiliateLinksForFooter(res){if(res?.affiliate_websites?.length){for(let i=0;i<res?.affiliate_websites?.length;i++){const affiliateWebsitesItems=`
      <a class="affiliate-website-link" href="${res?.affiliate_websites[i]?.link}" aria-label="${res?.affiliate_websites[i]?.link}">
          <img class="image" src="${res?.affiliate_websites[i]?.affliteWebsiteLogo}" />
        </a>
      `;$(".preview-fourth-row").css("display","flex");$(".preview-fourth-row .menu-title .links-div").append(affiliateWebsitesItems);}}}
$('.footer_subscribe_submit_btn').click(function(){var form_data=$(this).parent().serialize()
$.ajax({method:'post',url:'/amp_subscribe_to_newsletter',data:form_data,dataType:'json',success:function(res){if(res.status==='ok')
$('.newsletter_msg p').html(res.message)
else
$('.newsletter_msg p').html(res.message)
$('.footer-news-letter-form').reset();}})})
function isColorDark(color){const hexColor=color?.replace(/^#/,'');const bigint=parseInt(hexColor,16);const r=(bigint>>16)&255;const g=(bigint>>8)&255;const b=bigint&255;const luminance=0.2126*r+0.7152*g+0.0722*b;return luminance<128;}
function get_facebook_svg(load_dark_svg){if(load_dark_svg){return `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
      <path d="M24.6525 12.5811C24.6525 18.8013 20.0431 23.9436 14.0551 24.7781C13.4952 24.8558 12.9224 24.8963 12.3409 24.8963C11.6697 24.8963 11.0106 24.8428 10.3688 24.7393C4.50672 23.7952 0.0292969 18.7107 0.0292969 12.5811C0.0292969 5.77929 5.54196 0.265015 12.3418 0.265015C19.1416 0.265015 24.6542 5.77929 24.6542 12.5811H24.6525Z" fill="#383D38"/>
      <path d="M14.0549 10.1545V12.8374H17.3729L16.8475 16.4515H14.0549V24.7781C13.495 24.8558 12.9222 24.8963 12.3407 24.8963C11.6695 24.8963 11.0104 24.8428 10.3686 24.7393V16.4515H7.30859V12.8374H10.3686V9.55473C10.3686 7.51816 12.0189 5.86646 14.0558 5.86646V5.86818C14.0618 5.86818 14.067 5.86646 14.073 5.86646H17.3737V8.99208H15.217C14.576 8.99208 14.0558 9.51245 14.0558 10.1536L14.0549 10.1545Z" fill="white"/>
    </svg>`}
return`
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
    <path d="M24.6525 12.5811C24.6525 18.8013 20.0431 23.9436 14.0551 24.7781C13.4952 24.8558 12.9224 24.8963 12.3409 24.8963C11.6697 24.8963 11.0106 24.8428 10.3688 24.7393C4.50672 23.7952 0.0292969 18.7107 0.0292969 12.5811C0.0292969 5.77929 5.54196 0.265015 12.3418 0.265015C19.1416 0.265015 24.6542 5.77929 24.6542 12.5811H24.6525Z" fill="white"/>
    <path d="M14.0549 10.1545V12.8374H17.3729L16.8475 16.4515H14.0549V24.7781C13.495 24.8558 12.9222 24.8963 12.3407 24.8963C11.6695 24.8963 11.0104 24.8428 10.3686 24.7393V16.4515H7.30859V12.8374H10.3686V9.55473C10.3686 7.51816 12.0189 5.86646 14.0558 5.86646V5.86818C14.0618 5.86818 14.067 5.86646 14.073 5.86646H17.3737V8.99208H15.217C14.576 8.99208 14.0558 9.51245 14.0558 10.1536L14.0549 10.1545Z" fill="black"/>
  </svg>`}
function get_linkedin_svg(load_dark_svg){if(load_dark_svg){return `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
    <path d="M12.5139 0.138306H12.4578C5.67357 0.138306 0.173828 5.63966 0.173828 12.4259V12.482C0.173828 19.2683 5.67357 24.7696 12.4578 24.7696H12.5139C19.2982 24.7696 24.7979 19.2683 24.7979 12.482V12.4259C24.7979 5.63966 19.2982 0.138306 12.5139 0.138306Z" fill="#383D38"/>
    <path d="M6.04624 8.32523C5.72186 8.02405 5.56055 7.65126 5.56055 7.2077C5.56055 6.76414 5.72272 6.37495 6.04624 6.07292C6.37061 5.77174 6.78816 5.62073 7.29974 5.62073C7.81133 5.62073 8.21249 5.77174 8.536 6.07292C8.86038 6.37409 9.02169 6.75293 9.02169 7.2077C9.02169 7.66248 8.85951 8.02405 8.536 8.32523C8.21163 8.6264 7.80011 8.77741 7.29974 8.77741C6.79938 8.77741 6.37061 8.6264 6.04624 8.32523ZM8.74909 10.0529V19.2865H5.83229V10.0529H8.74909Z" fill="#FEFFFC"/>
    <path d="M18.4576 10.965C19.0934 11.6554 19.4109 12.6029 19.4109 13.8093V19.1234H16.6407V14.1838C16.6407 13.5754 16.4829 13.1025 16.168 12.766C15.8531 12.4294 15.4287 12.2603 14.8972 12.2603C14.3658 12.2603 13.9413 12.4286 13.6265 12.766C13.3116 13.1025 13.1537 13.5754 13.1537 14.1838V19.1234H10.3672V10.027H13.1537V11.2334C13.4358 10.8312 13.8163 10.5137 14.2942 10.2798C14.7721 10.0459 15.3096 9.92944 15.9075 9.92944C16.972 9.92944 17.8226 10.2746 18.4576 10.9641V10.965Z" fill="#FEFFFC"/>
  </svg>`}
return`
  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
  <path d="M12.5139 0.138306H12.4578C5.67357 0.138306 0.173828 5.63966 0.173828 12.4259V12.482C0.173828 19.2683 5.67357 24.7696 12.4578 24.7696H12.5139C19.2982 24.7696 24.7979 19.2683 24.7979 12.482V12.4259C24.7979 5.63966 19.2982 0.138306 12.5139 0.138306Z" fill="white"/>
  <path d="M6.04624 8.32523C5.72186 8.02405 5.56055 7.65126 5.56055 7.2077C5.56055 6.76414 5.72272 6.37495 6.04624 6.07292C6.37061 5.77174 6.78816 5.62073 7.29974 5.62073C7.81133 5.62073 8.21249 5.77174 8.536 6.07292C8.86038 6.37409 9.02169 6.75293 9.02169 7.2077C9.02169 7.66248 8.85951 8.02405 8.536 8.32523C8.21163 8.6264 7.80011 8.77741 7.29974 8.77741C6.79938 8.77741 6.37061 8.6264 6.04624 8.32523ZM8.74909 10.0529V19.2865H5.83229V10.0529H8.74909Z" fill="black"/>
  <path d="M18.4576 10.965C19.0934 11.6554 19.4109 12.6029 19.4109 13.8093V19.1234H16.6407V14.1838C16.6407 13.5754 16.4829 13.1025 16.168 12.766C15.8531 12.4294 15.4287 12.2603 14.8972 12.2603C14.3658 12.2603 13.9413 12.4286 13.6265 12.766C13.3116 13.1025 13.1537 13.5754 13.1537 14.1838V19.1234H10.3672V10.027H13.1537V11.2334C13.4358 10.8312 13.8163 10.5137 14.2942 10.2798C14.7721 10.0459 15.3096 9.92944 15.9075 9.92944C16.972 9.92944 17.8226 10.2746 18.4576 10.9641V10.965Z" fill="black"/>
</svg>`}
function get_linkedin_svg(load_dark_svg){if(load_dark_svg){return `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
    <path d="M12.5139 0.138306H12.4578C5.67357 0.138306 0.173828 5.63966 0.173828 12.4259V12.482C0.173828 19.2683 5.67357 24.7696 12.4578 24.7696H12.5139C19.2982 24.7696 24.7979 19.2683 24.7979 12.482V12.4259C24.7979 5.63966 19.2982 0.138306 12.5139 0.138306Z" fill="#383D38"/>
    <path d="M6.04624 8.32523C5.72186 8.02405 5.56055 7.65126 5.56055 7.2077C5.56055 6.76414 5.72272 6.37495 6.04624 6.07292C6.37061 5.77174 6.78816 5.62073 7.29974 5.62073C7.81133 5.62073 8.21249 5.77174 8.536 6.07292C8.86038 6.37409 9.02169 6.75293 9.02169 7.2077C9.02169 7.66248 8.85951 8.02405 8.536 8.32523C8.21163 8.6264 7.80011 8.77741 7.29974 8.77741C6.79938 8.77741 6.37061 8.6264 6.04624 8.32523ZM8.74909 10.0529V19.2865H5.83229V10.0529H8.74909Z" fill="#FEFFFC"/>
    <path d="M18.4576 10.965C19.0934 11.6554 19.4109 12.6029 19.4109 13.8093V19.1234H16.6407V14.1838C16.6407 13.5754 16.4829 13.1025 16.168 12.766C15.8531 12.4294 15.4287 12.2603 14.8972 12.2603C14.3658 12.2603 13.9413 12.4286 13.6265 12.766C13.3116 13.1025 13.1537 13.5754 13.1537 14.1838V19.1234H10.3672V10.027H13.1537V11.2334C13.4358 10.8312 13.8163 10.5137 14.2942 10.2798C14.7721 10.0459 15.3096 9.92944 15.9075 9.92944C16.972 9.92944 17.8226 10.2746 18.4576 10.9641V10.965Z" fill="#FEFFFC"/>
  </svg>`}
return`
  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
  <path d="M12.5139 0.138306H12.4578C5.67357 0.138306 0.173828 5.63966 0.173828 12.4259V12.482C0.173828 19.2683 5.67357 24.7696 12.4578 24.7696H12.5139C19.2982 24.7696 24.7979 19.2683 24.7979 12.482V12.4259C24.7979 5.63966 19.2982 0.138306 12.5139 0.138306Z" fill="white"/>
  <path d="M6.04624 8.32523C5.72186 8.02405 5.56055 7.65126 5.56055 7.2077C5.56055 6.76414 5.72272 6.37495 6.04624 6.07292C6.37061 5.77174 6.78816 5.62073 7.29974 5.62073C7.81133 5.62073 8.21249 5.77174 8.536 6.07292C8.86038 6.37409 9.02169 6.75293 9.02169 7.2077C9.02169 7.66248 8.85951 8.02405 8.536 8.32523C8.21163 8.6264 7.80011 8.77741 7.29974 8.77741C6.79938 8.77741 6.37061 8.6264 6.04624 8.32523ZM8.74909 10.0529V19.2865H5.83229V10.0529H8.74909Z" fill="black"/>
  <path d="M18.4576 10.965C19.0934 11.6554 19.4109 12.6029 19.4109 13.8093V19.1234H16.6407V14.1838C16.6407 13.5754 16.4829 13.1025 16.168 12.766C15.8531 12.4294 15.4287 12.2603 14.8972 12.2603C14.3658 12.2603 13.9413 12.4286 13.6265 12.766C13.3116 13.1025 13.1537 13.5754 13.1537 14.1838V19.1234H10.3672V10.027H13.1537V11.2334C13.4358 10.8312 13.8163 10.5137 14.2942 10.2798C14.7721 10.0459 15.3096 9.92944 15.9075 9.92944C16.972 9.92944 17.8226 10.2746 18.4576 10.9641V10.965Z" fill="black"/>
</svg>`}
function get_instagram_svg(load_dark_svg){if(load_dark_svg){return `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
    <path d="M12.51 0.265869H12.4539C5.66966 0.265869 0.169922 5.76722 0.169922 12.5535V12.6096C0.169922 19.3958 5.66966 24.8972 12.4539 24.8972H12.51C19.2943 24.8972 24.794 19.3958 24.794 12.6096V12.5535C24.794 5.76722 19.2943 0.265869 12.51 0.265869Z" fill="#383D38"/>
    <path d="M16.2942 5.27716H8.67487C6.56988 5.27716 4.85742 6.99013 4.85742 9.09574V16.0684C4.85742 18.174 6.56988 19.887 8.67487 19.887H16.2942C18.3992 19.887 20.1117 18.174 20.1117 16.0684V9.09574C20.1117 6.99013 18.3992 5.27716 16.2942 5.27716ZM6.2041 9.09574C6.2041 7.73313 7.31267 6.62423 8.67487 6.62423H16.2942C17.6565 6.62423 18.765 7.73313 18.765 9.09574V16.0684C18.765 17.431 17.6565 18.5399 16.2942 18.5399H8.67487C7.31267 18.5399 6.2041 17.431 6.2041 16.0684V9.09574Z" fill="white"/>
    <path d="M12.4845 16.1332C14.4419 16.1332 16.0353 14.5402 16.0353 12.5813C16.0353 10.6224 14.4428 9.02936 12.4845 9.02936C10.5261 9.02936 8.93359 10.6224 8.93359 12.5813C8.93359 14.5402 10.5261 16.1332 12.4845 16.1332ZM12.4845 10.3773C13.7 10.3773 14.6887 11.3662 14.6887 12.5821C14.6887 13.798 13.7 14.787 12.4845 14.787C11.2689 14.787 10.2803 13.798 10.2803 12.5821C10.2803 11.3662 11.2689 10.3773 12.4845 10.3773Z" fill="white"/>
    <path d="M16.363 9.60319C16.8901 9.60319 17.3197 9.1743 17.3197 8.64617C17.3197 8.11804 16.891 7.68915 16.363 7.68915C15.835 7.68915 15.4062 8.11804 15.4062 8.64617C15.4062 9.1743 15.835 9.60319 16.363 9.60319Z" fill="white"/>
  </svg>`}
return`
  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
  <path d="M12.51 0.265869H12.4539C5.66966 0.265869 0.169922 5.76722 0.169922 12.5535V12.6096C0.169922 19.3958 5.66966 24.8972 12.4539 24.8972H12.51C19.2943 24.8972 24.794 19.3958 24.794 12.6096V12.5535C24.794 5.76722 19.2943 0.265869 12.51 0.265869Z" fill="white"/>
  <path d="M16.2942 5.27716H8.67487C6.56988 5.27716 4.85742 6.99013 4.85742 9.09574V16.0684C4.85742 18.174 6.56988 19.887 8.67487 19.887H16.2942C18.3992 19.887 20.1117 18.174 20.1117 16.0684V9.09574C20.1117 6.99013 18.3992 5.27716 16.2942 5.27716ZM6.2041 9.09574C6.2041 7.73313 7.31267 6.62423 8.67487 6.62423H16.2942C17.6565 6.62423 18.765 7.73313 18.765 9.09574V16.0684C18.765 17.431 17.6565 18.5399 16.2942 18.5399H8.67487C7.31267 18.5399 6.2041 17.431 6.2041 16.0684V9.09574Z" fill="black"/>
  <path d="M12.4845 16.1332C14.4419 16.1332 16.0353 14.5402 16.0353 12.5813C16.0353 10.6224 14.4428 9.02936 12.4845 9.02936C10.5261 9.02936 8.93359 10.6224 8.93359 12.5813C8.93359 14.5402 10.5261 16.1332 12.4845 16.1332ZM12.4845 10.3773C13.7 10.3773 14.6887 11.3662 14.6887 12.5821C14.6887 13.798 13.7 14.787 12.4845 14.787C11.2689 14.787 10.2803 13.798 10.2803 12.5821C10.2803 11.3662 11.2689 10.3773 12.4845 10.3773Z" fill="black"/>
  <path d="M16.363 9.60319C16.8901 9.60319 17.3197 9.1743 17.3197 8.64617C17.3197 8.11804 16.891 7.68915 16.363 7.68915C15.835 7.68915 15.4062 8.11804 15.4062 8.64617C15.4062 9.1743 15.835 9.60319 16.363 9.60319Z" fill="black"/>
</svg>`}
function get_twitter_svg(load_dark_svg){if(load_dark_svg){return `<svg xmlns="http://www.w3.org/2000/svg" width="26" height="25" viewBox="0 0 26 25" fill="none">
    <path d="M25.0822 12.5811C25.0822 18.8013 20.4728 23.9436 14.4848 24.7781C13.9249 24.8558 13.352 24.8963 12.7706 24.8963C12.0994 24.8963 11.4403 24.8428 10.7985 24.7393C4.9364 23.7952 0.458984 18.7107 0.458984 12.5811C0.458984 5.77929 5.97164 0.265015 12.7714 0.265015C19.5713 0.265015 25.0839 5.77929 25.0839 12.5811H25.0822Z" fill="#383D38"/>
    <path d="M5.45139 5.69745L11.1297 13.2915L5.41602 19.4659H6.70231L11.7051 14.0603L15.7469 19.4659H20.1233L14.1258 11.4447L19.4444 5.69745H18.1581L13.5513 10.6758L9.82873 5.69745H5.45224H5.45139ZM7.34242 6.64497H9.35252L18.2306 18.5184H16.2205L7.34242 6.64497Z" fill="white"/>
  </svg>`}
return`
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="25" viewBox="0 0 26 25" fill="none">
  <path d="M25.0822 12.5811C25.0822 18.8013 20.4728 23.9436 14.4848 24.7781C13.9249 24.8558 13.352 24.8963 12.7706 24.8963C12.0994 24.8963 11.4403 24.8428 10.7985 24.7393C4.9364 23.7952 0.458984 18.7107 0.458984 12.5811C0.458984 5.77929 5.97164 0.265015 12.7714 0.265015C19.5713 0.265015 25.0839 5.77929 25.0839 12.5811H25.0822Z" fill="white"/>
  <path d="M5.45139 5.69745L11.1297 13.2915L5.41602 19.4659H6.70231L11.7051 14.0603L15.7469 19.4659H20.1233L14.1258 11.4447L19.4444 5.69745H18.1581L13.5513 10.6758L9.82873 5.69745H5.45224H5.45139ZM7.34242 6.64497H9.35252L18.2306 18.5184H16.2205L7.34242 6.64497Z" fill="black"/>
</svg>`}
function get_youtube_svg(load_dark_svg){if(load_dark_svg){return `<svg xmlns="http://www.w3.org/2000/svg" width="26" height="25" viewBox="0 0 26 25" fill="none">
    <path d="M25.3335 12.582C25.3335 5.79953 19.8369 0.30127 13.0564 0.30127C6.27595 0.30127 0.779297 5.79953 0.779297 12.582C0.779297 19.3644 6.27595 24.8627 13.0564 24.8627C19.8369 24.8627 25.3335 19.3644 25.3335 12.582Z" fill="#383D38"/>
    <path d="M20.7896 10.0372C20.6929 9.10432 20.485 8.07309 19.7198 7.53115C19.1271 7.11089 18.3481 7.09536 17.6209 7.09622C16.0835 7.09622 14.5453 7.09881 13.008 7.09968C11.5293 7.1014 10.0507 7.10226 8.57199 7.10399C7.9543 7.10399 7.35386 7.05653 6.78016 7.32404C6.28756 7.55359 5.90193 7.99025 5.66986 8.47609C5.34808 9.15178 5.28079 9.91722 5.24197 10.6645C5.17036 12.0254 5.17813 13.3898 5.26354 14.7498C5.32651 15.7422 5.48611 16.839 6.25305 17.4715C6.93286 18.0316 7.89218 18.0592 8.77386 18.0601C11.5725 18.0627 14.3719 18.0652 17.1714 18.067C17.5303 18.0678 17.9047 18.0609 18.2705 18.0212C18.99 17.9436 19.6758 17.7373 20.1382 17.204C20.6049 16.6664 20.7249 15.9182 20.7956 15.2097C20.9681 13.4907 20.9664 11.7553 20.7896 10.0372ZM11.3896 14.9914V10.1718L15.5616 12.5812L11.3896 14.9914Z" fill="white"/>
  </svg>`}
return`
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="25" viewBox="0 0 26 25" fill="none">
  <path d="M25.3335 12.582C25.3335 5.79953 19.8369 0.30127 13.0564 0.30127C6.27595 0.30127 0.779297 5.79953 0.779297 12.582C0.779297 19.3644 6.27595 24.8627 13.0564 24.8627C19.8369 24.8627 25.3335 19.3644 25.3335 12.582Z" fill="white"/>
  <path d="M20.7896 10.0372C20.6929 9.10432 20.485 8.07309 19.7198 7.53115C19.1271 7.11089 18.3481 7.09536 17.6209 7.09622C16.0835 7.09622 14.5453 7.09881 13.008 7.09968C11.5293 7.1014 10.0507 7.10226 8.57199 7.10399C7.9543 7.10399 7.35386 7.05653 6.78016 7.32404C6.28756 7.55359 5.90193 7.99025 5.66986 8.47609C5.34808 9.15178 5.28079 9.91722 5.24197 10.6645C5.17036 12.0254 5.17813 13.3898 5.26354 14.7498C5.32651 15.7422 5.48611 16.839 6.25305 17.4715C6.93286 18.0316 7.89218 18.0592 8.77386 18.0601C11.5725 18.0627 14.3719 18.0652 17.1714 18.067C17.5303 18.0678 17.9047 18.0609 18.2705 18.0212C18.99 17.9436 19.6758 17.7373 20.1382 17.204C20.6049 16.6664 20.7249 15.9182 20.7956 15.2097C20.9681 13.4907 20.9664 11.7553 20.7896 10.0372ZM11.3896 14.9914V10.1718L15.5616 12.5812L11.3896 14.9914Z" fill="black"/>
</svg>`}
function get_whatsapp_svg(load_dark_svg){if(load_dark_svg){return `<svg xmlns="http://www.w3.org/2000/svg" width="26" height="25" viewBox="0 0 26 25" fill="none">
    <path d="M12.9416 0.265869H12.8856C6.1013 0.265869 0.601562 5.76722 0.601562 12.5535V12.6096C0.601562 19.3958 6.1013 24.8972 12.8856 24.8972H12.9416C19.7259 24.8972 25.2256 19.3958 25.2256 12.6096V12.5535C25.2256 5.76722 19.7259 0.265869 12.9416 0.265869Z" fill="#383D38"/>
    <path d="M15.3139 16.1837C12.1625 16.1837 9.59852 13.6182 9.59766 10.4658C9.59852 9.66672 10.249 9.01691 11.0461 9.01691C11.1281 9.01691 11.2092 9.02381 11.2868 9.03762C11.4576 9.06609 11.6198 9.12391 11.7691 9.21107C11.7906 9.22402 11.8053 9.24473 11.8088 9.26889L12.1418 11.3685C12.1461 11.3926 12.1383 11.4176 12.1219 11.4358C11.9382 11.6394 11.7035 11.7861 11.4421 11.8595L11.3162 11.8949L11.3636 12.0165C11.7932 13.1108 12.668 13.9849 13.7628 14.4164L13.8844 14.4647L13.9198 14.3388C13.9931 14.0773 14.1398 13.8426 14.3434 13.6587C14.358 13.6449 14.3779 13.638 14.3977 13.638C14.402 13.638 14.4064 13.638 14.4115 13.6389L16.5105 13.972C16.5355 13.9763 16.5562 13.9901 16.5691 14.0117C16.6554 14.161 16.7132 14.3241 16.7426 14.4949C16.7564 14.5709 16.7624 14.6511 16.7624 14.7348C16.7624 15.5331 16.1128 16.1829 15.3139 16.1837Z" fill="#FDFDFD"/>
    <path d="M20.9026 11.8897C20.7326 9.96881 19.8527 8.18681 18.4249 6.87253C16.9885 5.55048 15.1251 4.82214 13.1762 4.82214C8.89896 4.82214 5.41883 8.3033 5.41883 12.5818C5.41883 14.0178 5.81481 15.4166 6.56449 16.6351L4.89258 20.3372L10.2456 19.7668C11.1765 20.1482 12.1617 20.3415 13.1754 20.3415C13.4419 20.3415 13.7154 20.3277 13.9898 20.2992C14.2313 20.2734 14.4755 20.2354 14.7153 20.1871C18.2972 19.463 20.9121 16.2831 20.9328 12.6233V12.5818C20.9328 12.3488 20.9224 12.1158 20.9017 11.8906L20.9026 11.8897ZM10.4518 18.1419L7.49018 18.4577L8.37445 16.4979L8.19759 16.2606C8.18465 16.2434 8.17171 16.2261 8.15705 16.2062C7.38924 15.1457 6.98376 13.8927 6.98376 12.5827C6.98376 9.16712 9.76166 6.38841 13.1762 6.38841C16.3751 6.38841 19.0866 8.88494 19.348 12.0718C19.3618 12.2427 19.3696 12.4144 19.3696 12.5836C19.3696 12.6319 19.3687 12.6793 19.3678 12.7303C19.3023 15.5875 17.3069 18.0141 14.5152 18.632C14.3021 18.6795 14.0838 18.7157 13.8664 18.739C13.6404 18.7649 13.4083 18.7778 13.178 18.7778C12.3575 18.7778 11.5604 18.6191 10.8073 18.305C10.7236 18.2713 10.6416 18.2351 10.5648 18.1979L10.4527 18.1436L10.4518 18.1419Z" fill="#FDFDFD"/>
  </svg>`}
return`
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="25" viewBox="0 0 26 25" fill="none">
  <path d="M12.9416 0.265869H12.8856C6.1013 0.265869 0.601562 5.76722 0.601562 12.5535V12.6096C0.601562 19.3958 6.1013 24.8972 12.8856 24.8972H12.9416C19.7259 24.8972 25.2256 19.3958 25.2256 12.6096V12.5535C25.2256 5.76722 19.7259 0.265869 12.9416 0.265869Z" fill="white"/>
  <path d="M15.3139 16.1837C12.1625 16.1837 9.59852 13.6182 9.59766 10.4658C9.59852 9.66672 10.249 9.01691 11.0461 9.01691C11.1281 9.01691 11.2092 9.02381 11.2868 9.03762C11.4576 9.06609 11.6198 9.12391 11.7691 9.21107C11.7906 9.22402 11.8053 9.24473 11.8088 9.26889L12.1418 11.3685C12.1461 11.3926 12.1383 11.4176 12.1219 11.4358C11.9382 11.6394 11.7035 11.7861 11.4421 11.8595L11.3162 11.8949L11.3636 12.0165C11.7932 13.1108 12.668 13.9849 13.7628 14.4164L13.8844 14.4647L13.9198 14.3388C13.9931 14.0773 14.1398 13.8426 14.3434 13.6587C14.358 13.6449 14.3779 13.638 14.3977 13.638C14.402 13.638 14.4064 13.638 14.4115 13.6389L16.5105 13.972C16.5355 13.9763 16.5562 13.9901 16.5691 14.0117C16.6554 14.161 16.7132 14.3241 16.7426 14.4949C16.7564 14.5709 16.7624 14.6511 16.7624 14.7348C16.7624 15.5331 16.1128 16.1829 15.3139 16.1837Z" fill="black"/>
  <path d="M20.9026 11.8897C20.7326 9.96881 19.8527 8.18681 18.4249 6.87253C16.9885 5.55048 15.1251 4.82214 13.1762 4.82214C8.89896 4.82214 5.41883 8.3033 5.41883 12.5818C5.41883 14.0178 5.81481 15.4166 6.56449 16.6351L4.89258 20.3372L10.2456 19.7668C11.1765 20.1482 12.1617 20.3415 13.1754 20.3415C13.4419 20.3415 13.7154 20.3277 13.9898 20.2992C14.2313 20.2734 14.4755 20.2354 14.7153 20.1871C18.2972 19.463 20.9121 16.2831 20.9328 12.6233V12.5818C20.9328 12.3488 20.9224 12.1158 20.9017 11.8906L20.9026 11.8897ZM10.4518 18.1419L7.49018 18.4577L8.37445 16.4979L8.19759 16.2606C8.18465 16.2434 8.17171 16.2261 8.15705 16.2062C7.38924 15.1457 6.98376 13.8927 6.98376 12.5827C6.98376 9.16712 9.76166 6.38841 13.1762 6.38841C16.3751 6.38841 19.0866 8.88494 19.348 12.0718C19.3618 12.2427 19.3696 12.4144 19.3696 12.5836C19.3696 12.6319 19.3687 12.6793 19.3678 12.7303C19.3023 15.5875 17.3069 18.0141 14.5152 18.632C14.3021 18.6795 14.0838 18.7157 13.8664 18.739C13.6404 18.7649 13.4083 18.7778 13.178 18.7778C12.3575 18.7778 11.5604 18.6191 10.8073 18.305C10.7236 18.2713 10.6416 18.2351 10.5648 18.1979L10.4527 18.1436L10.4518 18.1419Z" fill="black"/>
</svg>`}
function get_thread_svg(load_dark_svg){if(load_dark_svg){return `<svg xmlns="http://www.w3.org/2000/svg" width="26" height="25" viewBox="0 0 26 25" fill="none">
    <path d="M13.2011 24.7706C20.0011 24.7706 25.5136 19.2565 25.5136 12.4545C25.5136 5.65253 20.0011 0.138428 13.2011 0.138428C6.40115 0.138428 0.888672 5.65253 0.888672 12.4545C0.888672 19.2565 6.40115 24.7706 13.2011 24.7706Z" fill="#383D38"/>
    <path d="M17.1863 11.7278C19.3939 12.6572 20.4801 14.8819 19.7597 17.1843C19.2689 18.7557 17.8704 20.0251 16.3719 20.599C14.4826 21.3248 11.9454 21.2782 10.0819 20.505C6.30244 18.9387 5.42077 14.5894 5.79604 10.971C6.05744 8.43825 7.11166 5.96934 9.43923 4.69993C11.1931 3.73946 13.4379 3.60311 15.3582 4.00525C17.3519 4.42292 18.9704 5.60258 19.9512 7.3889C20.2541 7.93688 20.4991 8.54267 20.682 9.21663C20.6871 9.24252 20.6768 9.26928 20.6509 9.27446L19.2628 9.64035C19.2369 9.64552 19.2102 9.62999 19.205 9.60928C18.9962 8.81536 18.6675 8.11033 18.2129 7.49504C16.7929 5.56289 14.1884 5.04598 11.9437 5.44811C9.29688 5.9236 7.83546 7.78241 7.40756 10.335C7.05817 12.4078 7.16773 14.8095 8.12274 16.7209C8.92678 18.3294 10.383 19.2321 12.1369 19.4832C13.0816 19.6135 14.0055 19.598 14.9088 19.4306C16.2037 19.1907 17.5918 18.3338 18.1551 17.1066C18.5209 16.3127 18.5571 15.3056 18.1551 14.5169C17.9256 14.0682 17.5805 13.7075 17.1268 13.4365C17.1061 13.421 17.0741 13.4313 17.0638 13.452C17.0586 13.4572 17.0586 13.4624 17.0586 13.4676C17.006 13.8542 16.918 14.2347 16.7869 14.6058C16.5988 15.1331 16.3279 15.5878 15.9673 15.958C14.7561 17.2059 12.6476 17.3155 11.2224 16.4171C10.0845 15.6966 9.65663 14.2244 10.1993 13.0128C10.7626 11.7598 12.1412 11.217 13.4508 11.154C14.1918 11.1177 14.876 11.1488 15.5075 11.2377C15.5334 11.2429 15.554 11.2221 15.5601 11.1963V11.1807C15.5023 10.8934 15.435 10.6586 15.3513 10.4757C14.9131 9.51005 13.9261 9.25374 12.9401 9.37887C12.3086 9.4574 11.8125 9.75512 11.4416 10.2669C11.426 10.2876 11.4001 10.2927 11.3786 10.2772L10.1993 9.47294C10.1786 9.45741 10.1734 9.43151 10.1889 9.40476C10.8204 8.51678 11.6762 7.99987 12.7624 7.85921C13.6604 7.73926 14.6672 7.87992 15.4505 8.35541C16.6247 9.07597 17.0422 10.3713 17.1466 11.6812C17.157 11.7071 17.1673 11.7227 17.1828 11.7278H17.1863ZM11.5537 13.7748C11.3191 14.5635 11.8617 15.1848 12.5976 15.3721C13.6311 15.6336 14.7794 15.4032 15.2702 14.3435C15.4635 13.9258 15.5782 13.4348 15.6144 12.8764C15.6144 12.8505 15.5989 12.8298 15.5782 12.8298C14.8113 12.6788 14.0228 12.6469 13.2187 12.7254C12.5665 12.7936 11.7573 13.0913 11.5537 13.7748Z" fill="white"/>
  </svg>`}
return`
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="25" viewBox="0 0 26 25" fill="none">
  <path d="M13.2011 24.7706C20.0011 24.7706 25.5136 19.2565 25.5136 12.4545C25.5136 5.65253 20.0011 0.138428 13.2011 0.138428C6.40115 0.138428 0.888672 5.65253 0.888672 12.4545C0.888672 19.2565 6.40115 24.7706 13.2011 24.7706Z" fill="white"/>
  <path d="M17.1863 11.7278C19.3939 12.6572 20.4801 14.8819 19.7597 17.1843C19.2689 18.7557 17.8704 20.0251 16.3719 20.599C14.4826 21.3248 11.9454 21.2782 10.0819 20.505C6.30244 18.9387 5.42077 14.5894 5.79604 10.971C6.05744 8.43825 7.11166 5.96934 9.43923 4.69993C11.1931 3.73946 13.4379 3.60311 15.3582 4.00525C17.3519 4.42292 18.9704 5.60258 19.9512 7.3889C20.2541 7.93688 20.4991 8.54267 20.682 9.21663C20.6871 9.24252 20.6768 9.26928 20.6509 9.27446L19.2628 9.64035C19.2369 9.64552 19.2102 9.62999 19.205 9.60928C18.9962 8.81536 18.6675 8.11033 18.2129 7.49504C16.7929 5.56289 14.1884 5.04598 11.9437 5.44811C9.29688 5.9236 7.83546 7.78241 7.40756 10.335C7.05817 12.4078 7.16773 14.8095 8.12274 16.7209C8.92678 18.3294 10.383 19.2321 12.1369 19.4832C13.0816 19.6135 14.0055 19.598 14.9088 19.4306C16.2037 19.1907 17.5918 18.3338 18.1551 17.1066C18.5209 16.3127 18.5571 15.3056 18.1551 14.5169C17.9256 14.0682 17.5805 13.7075 17.1268 13.4365C17.1061 13.421 17.0741 13.4313 17.0638 13.452C17.0586 13.4572 17.0586 13.4624 17.0586 13.4676C17.006 13.8542 16.918 14.2347 16.7869 14.6058C16.5988 15.1331 16.3279 15.5878 15.9673 15.958C14.7561 17.2059 12.6476 17.3155 11.2224 16.4171C10.0845 15.6966 9.65663 14.2244 10.1993 13.0128C10.7626 11.7598 12.1412 11.217 13.4508 11.154C14.1918 11.1177 14.876 11.1488 15.5075 11.2377C15.5334 11.2429 15.554 11.2221 15.5601 11.1963V11.1807C15.5023 10.8934 15.435 10.6586 15.3513 10.4757C14.9131 9.51005 13.9261 9.25374 12.9401 9.37887C12.3086 9.4574 11.8125 9.75512 11.4416 10.2669C11.426 10.2876 11.4001 10.2927 11.3786 10.2772L10.1993 9.47294C10.1786 9.45741 10.1734 9.43151 10.1889 9.40476C10.8204 8.51678 11.6762 7.99987 12.7624 7.85921C13.6604 7.73926 14.6672 7.87992 15.4505 8.35541C16.6247 9.07597 17.0422 10.3713 17.1466 11.6812C17.157 11.7071 17.1673 11.7227 17.1828 11.7278H17.1863ZM11.5537 13.7748C11.3191 14.5635 11.8617 15.1848 12.5976 15.3721C13.6311 15.6336 14.7794 15.4032 15.2702 14.3435C15.4635 13.9258 15.5782 13.4348 15.6144 12.8764C15.6144 12.8505 15.5989 12.8298 15.5782 12.8298C14.8113 12.6788 14.0228 12.6469 13.2187 12.7254C12.5665 12.7936 11.7573 13.0913 11.5537 13.7748Z" fill="black"/>
</svg>`}
function get_telegram_svg(load_dark_svg){if(load_dark_svg){return `<svg xmlns="http://www.w3.org/2000/svg" width="26" height="25" viewBox="0 0 26 25" fill="none">
    <path d="M13.2287 0.265869H13.1727C6.3884 0.265869 0.888672 5.76722 0.888672 12.5535V12.6096C0.888672 19.3958 6.3884 24.8972 13.1727 24.8972H13.2287C20.013 24.8972 25.5127 19.3958 25.5127 12.6096V12.5535C25.5127 5.76722 20.013 0.265869 13.2287 0.265869Z" fill="#383D38"/>
    <path d="M5.55298 12.1616C5.58749 12.1444 5.62201 12.128 5.65566 12.1125C6.24057 11.8415 6.83325 11.5878 7.42506 11.3341C7.45698 11.3341 7.51045 11.297 7.54065 11.2849C7.58637 11.265 7.6321 11.2461 7.67783 11.2262C7.76582 11.1882 7.85382 11.1511 7.94095 11.1132C8.11695 11.0381 8.29206 10.963 8.46805 10.8879L9.52141 10.4366C10.2236 10.1363 10.9268 9.83512 11.629 9.53481C12.3312 9.23451 13.0343 8.93333 13.7366 8.63302C14.4388 8.33272 15.1419 8.03155 15.8441 7.73124C16.5464 7.43093 17.2495 7.12976 17.9517 6.82945C18.1079 6.76214 18.277 6.66204 18.4443 6.63269C18.585 6.60767 18.7221 6.55935 18.8636 6.53259C19.1319 6.48168 19.4278 6.46097 19.6849 6.57229C19.7738 6.61113 19.8557 6.66549 19.9239 6.73366C20.25 7.05641 20.2042 7.58626 20.1352 8.04017C19.6547 11.2038 19.1742 14.3682 18.6928 17.5318C18.6272 17.9659 18.5375 18.4422 18.195 18.7167C17.9051 18.9488 17.4928 18.9747 17.1347 18.8763C16.7767 18.7771 16.461 18.5691 16.1513 18.3646C14.8667 17.5137 13.5813 16.6628 12.2967 15.8119C11.9913 15.61 11.6514 15.346 11.6549 14.9792C11.6566 14.7583 11.7886 14.5615 11.9232 14.3864C13.0395 12.9297 14.6502 11.9287 15.8485 10.5393C16.0176 10.3434 16.1504 9.98959 15.9183 9.87655C15.7803 9.80924 15.6216 9.90071 15.4956 9.98787C13.9117 11.0881 12.3287 12.1893 10.7447 13.2895C10.228 13.6485 9.6862 14.0179 9.06333 14.1059C8.50602 14.1853 7.94527 14.0299 7.40608 13.8712C6.95403 13.7383 6.50282 13.6019 6.05335 13.4613C5.81438 13.387 5.56765 13.3068 5.38303 13.1385C5.19841 12.9702 5.09232 12.6872 5.20361 12.4628C5.27348 12.3222 5.40893 12.2333 5.55128 12.1608L5.55298 12.1616Z" fill="#FEFFFC"/>
  </svg>`}
return`
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="25" viewBox="0 0 26 25" fill="none">
  <path d="M13.2287 0.265869H13.1727C6.3884 0.265869 0.888672 5.76722 0.888672 12.5535V12.6096C0.888672 19.3958 6.3884 24.8972 13.1727 24.8972H13.2287C20.013 24.8972 25.5127 19.3958 25.5127 12.6096V12.5535C25.5127 5.76722 20.013 0.265869 13.2287 0.265869Z" fill="white"/>
  <path d="M5.55298 12.1616C5.58749 12.1444 5.62201 12.128 5.65566 12.1125C6.24057 11.8415 6.83325 11.5878 7.42506 11.3341C7.45698 11.3341 7.51045 11.297 7.54065 11.2849C7.58637 11.265 7.6321 11.2461 7.67783 11.2262C7.76582 11.1882 7.85382 11.1511 7.94095 11.1132C8.11695 11.0381 8.29206 10.963 8.46805 10.8879L9.52141 10.4366C10.2236 10.1363 10.9268 9.83512 11.629 9.53481C12.3312 9.23451 13.0343 8.93333 13.7366 8.63302C14.4388 8.33272 15.1419 8.03155 15.8441 7.73124C16.5464 7.43093 17.2495 7.12976 17.9517 6.82945C18.1079 6.76214 18.277 6.66204 18.4443 6.63269C18.585 6.60767 18.7221 6.55935 18.8636 6.53259C19.1319 6.48168 19.4278 6.46097 19.6849 6.57229C19.7738 6.61113 19.8557 6.66549 19.9239 6.73366C20.25 7.05641 20.2042 7.58626 20.1352 8.04017C19.6547 11.2038 19.1742 14.3682 18.6928 17.5318C18.6272 17.9659 18.5375 18.4422 18.195 18.7167C17.9051 18.9488 17.4928 18.9747 17.1347 18.8763C16.7767 18.7771 16.461 18.5691 16.1513 18.3646C14.8667 17.5137 13.5813 16.6628 12.2967 15.8119C11.9913 15.61 11.6514 15.346 11.6549 14.9792C11.6566 14.7583 11.7886 14.5615 11.9232 14.3864C13.0395 12.9297 14.6502 11.9287 15.8485 10.5393C16.0176 10.3434 16.1504 9.98959 15.9183 9.87655C15.7803 9.80924 15.6216 9.90071 15.4956 9.98787C13.9117 11.0881 12.3287 12.1893 10.7447 13.2895C10.228 13.6485 9.6862 14.0179 9.06333 14.1059C8.50602 14.1853 7.94527 14.0299 7.40608 13.8712C6.95403 13.7383 6.50282 13.6019 6.05335 13.4613C5.81438 13.387 5.56765 13.3068 5.38303 13.1385C5.19841 12.9702 5.09232 12.6872 5.20361 12.4628C5.27348 12.3222 5.40893 12.2333 5.55128 12.1608L5.55298 12.1616Z" fill="black"/>
</svg>`}
function get_reddit_svg(load_dark_svg){if(load_dark_svg){return `<svg xmlns="http://www.w3.org/2000/svg" width="26" height="25" viewBox="0 0 26 25" fill="none">
    <path d="M13.0842 0.138428H13.0281C6.24388 0.138428 0.744141 5.63978 0.744141 12.426V12.4821C0.744141 19.2684 6.24388 24.7698 13.0281 24.7698H13.0842C19.8685 24.7698 25.3682 19.2684 25.3682 12.4821V12.426C25.3682 5.63978 19.8685 0.138428 13.0842 0.138428Z" fill="#383D38"/>
    <path d="M20.6844 12.1456C20.48 11.2179 19.6328 10.6164 18.7925 10.8019C18.5061 10.8649 18.2594 11.0125 18.0644 11.2144C16.9334 10.3929 15.3892 9.85009 13.6646 9.7474L14.4902 6.30939L16.9394 6.89534C16.98 7.56499 17.5347 8.0957 18.2145 8.0957C18.8943 8.0957 19.4931 7.52271 19.4931 6.81681C19.4931 6.11091 18.9202 5.5379 18.2145 5.5379C17.7029 5.5379 17.2621 5.83908 17.0585 6.27401L14.4014 5.63801C14.1926 5.58796 13.983 5.71653 13.9321 5.92537L13.0185 9.73015C11.0947 9.7405 9.3589 10.2971 8.11316 11.1885C8.05191 11.1316 7.98635 11.0789 7.91474 11.0323C7.18921 10.5689 6.18675 10.8425 5.67603 11.6424C5.16531 12.4433 5.33871 13.4676 6.06424 13.931C6.10738 13.9586 6.15138 13.9828 6.19624 14.0052C6.16691 14.1839 6.15138 14.3659 6.15138 14.5497C6.15138 17.212 9.24934 19.3702 13.0711 19.3702C16.8929 19.3702 19.9908 17.212 19.9908 14.5497C19.9908 14.3633 19.9744 14.1795 19.9442 13.9992C20.5335 13.6566 20.8544 12.9101 20.6862 12.1456H20.6844ZM9.52282 13.4331C9.52282 12.8264 10.0146 12.3345 10.621 12.3345C11.2275 12.3345 11.7193 12.8264 11.7193 13.4331C11.7193 14.0397 11.2275 14.5316 10.621 14.5316C10.0146 14.5316 9.52282 14.0397 9.52282 13.4331ZM15.6221 16.9013C15.2848 17.2077 14.3531 17.9222 12.9892 17.9351C12.9771 17.9351 12.9641 17.9351 12.952 17.9351C11.57 17.9351 10.6262 17.2137 10.282 16.9013C10.1716 16.8012 10.1638 16.6303 10.2639 16.5207C10.364 16.4103 10.5348 16.4025 10.6443 16.5026C10.9437 16.7753 11.771 17.4079 12.984 17.3966C14.1633 17.3854 14.9682 16.7684 15.2598 16.5035C15.3702 16.4034 15.5402 16.4111 15.6402 16.5216C15.7403 16.6321 15.7325 16.8021 15.6221 16.9022V16.9013ZM15.4893 14.5316C14.8828 14.5316 14.391 14.0397 14.391 13.4331C14.391 12.8264 14.8828 12.3345 15.4893 12.3345C16.0957 12.3345 16.5875 12.8264 16.5875 13.4331C16.5875 14.0397 16.0957 14.5316 15.4893 14.5316Z" fill="white"/>
  </svg>`}
return`
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="25" viewBox="0 0 26 25" fill="none">
  <path d="M13.0842 0.138428H13.0281C6.24388 0.138428 0.744141 5.63978 0.744141 12.426V12.4821C0.744141 19.2684 6.24388 24.7698 13.0281 24.7698H13.0842C19.8685 24.7698 25.3682 19.2684 25.3682 12.4821V12.426C25.3682 5.63978 19.8685 0.138428 13.0842 0.138428Z" fill="white"/>
  <path d="M20.6844 12.1456C20.48 11.2179 19.6328 10.6164 18.7925 10.8019C18.5061 10.8649 18.2594 11.0125 18.0644 11.2144C16.9334 10.3929 15.3892 9.85009 13.6646 9.7474L14.4902 6.30939L16.9394 6.89534C16.98 7.56499 17.5347 8.0957 18.2145 8.0957C18.8943 8.0957 19.4931 7.52271 19.4931 6.81681C19.4931 6.11091 18.9202 5.5379 18.2145 5.5379C17.7029 5.5379 17.2621 5.83908 17.0585 6.27401L14.4014 5.63801C14.1926 5.58796 13.983 5.71653 13.9321 5.92537L13.0185 9.73015C11.0947 9.7405 9.3589 10.2971 8.11316 11.1885C8.05191 11.1316 7.98635 11.0789 7.91474 11.0323C7.18921 10.5689 6.18675 10.8425 5.67603 11.6424C5.16531 12.4433 5.33871 13.4676 6.06424 13.931C6.10738 13.9586 6.15138 13.9828 6.19624 14.0052C6.16691 14.1839 6.15138 14.3659 6.15138 14.5497C6.15138 17.212 9.24934 19.3702 13.0711 19.3702C16.8929 19.3702 19.9908 17.212 19.9908 14.5497C19.9908 14.3633 19.9744 14.1795 19.9442 13.9992C20.5335 13.6566 20.8544 12.9101 20.6862 12.1456H20.6844ZM9.52282 13.4331C9.52282 12.8264 10.0146 12.3345 10.621 12.3345C11.2275 12.3345 11.7193 12.8264 11.7193 13.4331C11.7193 14.0397 11.2275 14.5316 10.621 14.5316C10.0146 14.5316 9.52282 14.0397 9.52282 13.4331ZM15.6221 16.9013C15.2848 17.2077 14.3531 17.9222 12.9892 17.9351C12.9771 17.9351 12.9641 17.9351 12.952 17.9351C11.57 17.9351 10.6262 17.2137 10.282 16.9013C10.1716 16.8012 10.1638 16.6303 10.2639 16.5207C10.364 16.4103 10.5348 16.4025 10.6443 16.5026C10.9437 16.7753 11.771 17.4079 12.984 17.3966C14.1633 17.3854 14.9682 16.7684 15.2598 16.5035C15.3702 16.4034 15.5402 16.4111 15.6402 16.5216C15.7403 16.6321 15.7325 16.8021 15.6221 16.9022V16.9013ZM15.4893 14.5316C14.8828 14.5316 14.391 14.0397 14.391 13.4331C14.391 12.8264 14.8828 12.3345 15.4893 12.3345C16.0957 12.3345 16.5875 12.8264 16.5875 13.4331C16.5875 14.0397 16.0957 14.5316 15.4893 14.5316Z" fill="black"/>
</svg>`}