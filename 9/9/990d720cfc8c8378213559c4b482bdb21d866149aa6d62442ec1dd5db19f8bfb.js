<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8" />
    <title>No internet connection</title>
    <meta name="theme-color" content="#F2F2F2">
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
    <style>
      @font-face {
        font-family:"Proxima Nova";
        font-display: swap;
        font-style: normal;
        font-weight: 400;
        src: local("ProximaNova-Regular"), url("/fly/bundles/cbsnewscontent/fonts/ProximaNova-Regular/ProximaNova-Regular.woff2") format("woff2"), url("/fly/bundles/cbsnewscontent/fonts/ProximaNova-Regular/ProximaNova-Regular.woff") format("woff")}


      html,body {
        margin:0;
        padding:0
      }

      html {
        background: #F2F2F2;
        color: #101010;
        font-size: 16px;

        /**
         * iOS specific styles to enable dynamic font size,
         * based on OS-level font size, adjustable by user
         *
           * font-family: UICTFontTextStyleBody;
           * font-size: 17px;
           * font-style: normal;
           * font-variant-caps: normal;
           * font-weight: normal;
           */
        font: -apple-system-body;
        -webkit-font-smoothing: antialiased;
      }


      body {
        font-size: 1.19rem;
        line-height: 1.45;
        font-weight: 400;
      }

      #offline {
        font-family: "Proxima Nova",Roboto,Helvetica,sans-serif;
        font-size: 1rem;
        line-height: 1.25;

        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;

        width: 250px;
        height: 250px;

        text-align: center;
      }

      svg {
        display: block;
        width: 230px;
        height: 32px;
        fill: #7F7F7F;
        margin: 20px auto;
      }

      strong {
        display: block;
        margin: 20px 0 10px 0;
      }

      a {
        border: 1px solid #7F7F7F;
        color: #7F7F7F;

        display: inline-block;
        font-size: 14px;
        text-decoration: none;
        padding: 2px 10px;
        border-radius: 3px;
        margin: 15px auto 0;
        box-shadow: 0 1px 2px rgba(0,0,0,0.1);
      }

      a:hover {
        border: 1px solid #101010;
        color: #101010;

        box-shadow: 0 1px 2px rgba(0,0,0,0.4);
      }
    </style>
  </head>
  <body>
    <div id="offline">
      <svg viewBox="0 0 230 32" class="site-logo__icon site-logo__icon--desktop" aria-hidden="true" fill-rule="evenodd" fill="#F2F2F2">
        <path d="m30.56 15.98c0 4.234-1.491 7.844-4.474 10.826-2.983 2.984-6.578 4.475-10.786 4.475s-7.81-1.491-10.806-4.475c-2.996-2.982-4.494-6.592-4.494-10.826 0-4.208 1.498-7.804 4.494-10.786s6.598-4.475 10.806-4.475 7.803 1.493 10.786 4.475 4.475 6.578 4.475 10.786m-.919.02c-1.2-2.642-3.054-4.79-5.56-6.446-2.642-1.788-5.576-2.684-8.802-2.684-3.227 0-6.175.895-8.841 2.683-2.48 1.655-4.32 3.804-5.52 6.446 1.2 2.643 3.04 4.804 5.52 6.486 2.666 1.762 5.614 2.643 8.841 2.643s6.16-.88 8.801-2.643c2.507-1.682 4.36-3.843 5.561-6.486m-6.232-.02c0 2.237-.793 4.149-2.377 5.733-1.585 1.584-3.496 2.377-5.733 2.377s-4.148-.793-5.732-2.377c-1.585-1.584-2.378-3.496-2.378-5.733 0-2.238.793-4.14 2.378-5.713 1.584-1.57 3.495-2.357 5.732-2.357s4.148.786 5.733 2.357c1.584 1.572 2.377 3.475 2.377 5.713"/>
        <path d="m.282 16c0-7.89 6.51-14.4 14.992-14.4 7.694 0 11.64 5.524 11.64 5.524l-3.946 3.945s-2.762-3.945-7.694-3.945a8.84 8.84 0 0 0 -8.876 8.876 8.84 8.84 0 0 0 8.876 8.877c5.13 0 7.89-3.945 7.89-3.945l3.946 3.945s-3.945 5.524-11.836 5.524c-8.482-.001-14.992-6.511-14.992-14.401m29.038-13.809h11.64c5.522 0 8.876 3.354 8.876 7.299 0 4.34-3.748 5.72-3.748 5.72s5.128 1.381 5.128 6.707c0 4.34-3.55 7.891-9.468 7.891h-12.429v-27.616zm11.244 10.652c1.973 0 3.157-1.183 3.157-2.761s-1.185-2.762-3.158-2.762h-5.325v5.523h5.325zm.79 11.836c2.367 0 3.747-1.381 3.747-3.354 0-1.972-1.38-3.353-3.747-3.353h-6.116v6.707zm10.572 1.38 3.946-3.945s2.366 2.96 6.509 2.96c3.156 0 4.537-1.382 4.537-3.157 0-4.734-13.808-2.564-13.808-12.23 0-4.34 3.748-8.088 10.06-8.088 6.116 0 9.272 3.748 9.272 3.748l-3.946 3.945s-1.973-2.367-5.129-2.367c-2.959 0-4.142 1.184-4.142 2.762 0 4.734 13.808 2.564 13.808 12.23 0 4.538-3.945 8.482-10.454 8.482-7.102 0-10.653-4.34-10.653-4.34m30.97-23.868h5.326l13.413 17.162v-17.161h5.919v27.617h-5.326l-13.416-17.162v17.162h-5.917v-27.617zm28.682 0h20.515v5.524h-14.598v5.325h11.442v5.326h-11.442v5.919h14.993v5.523h-20.91v-27.616zm22.29 0h6.116l5.72 18.543h.197l5.72-18.543h5.524l5.721 18.543h.198l5.72-18.543h6.115l-9.074 27.617h-5.72l-5.605-17.948h-.237l-5.602 17.95h-5.72l-9.075-27.617zm40.597 23.869 3.946-3.946s2.367 2.96 6.509 2.96c3.156 0 4.537-1.382 4.537-3.157 0-4.734-13.808-2.564-13.808-12.23 0-4.34 3.748-8.088 10.06-8.088 6.116 0 9.272 3.748 9.272 3.748l-3.946 3.945s-1.972-2.367-5.129-2.367c-2.959 0-4.142 1.184-4.142 2.762 0 4.734 13.808 2.564 13.808 12.23 0 4.538-3.945 8.482-10.454 8.482-7.102 0-10.653-4.34-10.653-4.34" transform="translate(33)"/>
      </svg>
      <strong>No internet connection</strong>
      Please check your connection and try again.<br>
      <a href="javascript:reload();">Refresh</a>
    </div>

    <svg viewBox="0 0 230 32" xmlns="http://www.w3.org/2000/svg">

    </svg>
    <script>
      function UUIDv4 () {
        let uuid = '';
        for (let i = 0; i < 32; i++) {
          let random = Math.random() * 16 | 0

          if (i == 8 || i == 12 || i == 16 || i == 20) {
            uuid += '-'
          }
          uuid += (i == 12 ? 4 : i == 16 ? random & 3 | 8 : random).toString(16)
        }

        return uuid;
      }

      function reload () {
          const now = new Date;

          const deviceCookie = document.cookie.match(/fly_device=([a-z0-9-]+)/);
          const device = deviceCookie && deviceCookie[1];
          // let brandPlatformId = 'cbsnews_site_' + ({'desktop': 'desktop', 'mobile': 'mweb'})[device];

          let visitorId = UUIDv4();
          const vidCookie = document.cookie.match(/fly_vid=([a-z0-9-]+)/);
          if (vidCookie && vidCookie[1]) {
              visitorId = vidCookie[1];
          }

          document.cookie = "fly_vid=" + visitorId + ';domain=.' + document.domain + ';path=/;max-age=31536000';

          var rPlaceholder = /__([a-z0-9]+)__/gi;
          var pixel = 'https://saa.cbsnews.com/b/ss/cbsicbsnewssite/1/s?AQB=1&g=__pageUrl__&gn=__pageName__&c=24&ce=UTF-8&ch=offline&ndh=0&server=www.cbsnews.com&vid=__visitorId__&c.=&brandPlatformId=__brandPlatformId__&.c=&c3=D%3Dv3&c5=D%3Dv5&c6=D%3Dv6&c7=D%3Dv7&c9=D%3DUser-Agent&c10=D%3Dv10&c11=D%3Dv11&c24=D%3Dv24&c30=D%3Dv30&v1=__brandPlatformId__&v3=responsive+web%7C%7C%7C__device__&v5=cbsicbsnewssite&v6=D%3Dh1&v7=D%3Dg&v9=D%3DUser-Agent&v10=__pageType__&v11=D%3Dch%2B%22%3A%22%2Bv10&v24=__pageViewGuid__&r=__referrer__&AQE=1'.replace(rPlaceholder, function (match) {
              return ({
                  // __brandPlatformId__:  brandPlatformId,
                  __device__:           device,
                  __pageName__:         'cbsnews:' + window.location.pathname,
                  __pageType__:         'offline_page',
                  __pageUrl__:          window.location.href,
                  __pageViewGuid__:     UUIDv4(),
                  __referrer__:         encodeURIComponent(document.referrer),
                  __userAgent__:        encodeURIComponent(window.navigator.userAgent),
                  __visitorId__:        visitorId,
              })[match];
          });

          navigator.sendBeacon(pixel);

          window.location.reload();
      }
    </script>
  </body>
</html>
