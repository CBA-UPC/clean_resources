<!DOCTYPE html>
<html lang="en">
<head>
  <script>
    "use strict";
    (function() {
        //origin & namespace data is passed in via urlencoded json object in url hash
        var frameData = JSON.parse(decodeURIComponent(window.location.hash.substr(1)));
        var namespace = frameData.namespace;
        var windowOrigin = frameData.windowOrigin;
        var readType = "destination-sync-read";
        var writeType = "destination-sync-write";

        function isAllowedDestination(url) {
          // https://regex101.com/r/y7kTly/6
          var destinationOriginRegex = /^https\:\/\/((amp|amp\.staging|www|stage|moodfeed|staging|(amp|local|qa|staging)\.www)\.)?((buzzfeed(news)?|goodful|huffpost|huffingtonpost|complex|complexbuzz|solecollector|firstwefeast)\.com|tasty\.co|buzzfeed\.bio)$/;
          try {
            return destinationOriginRegex.test(new URL(url).origin);
          }
          catch (err) {
       'bf_visit'].indexOf(cookieName) !== -1;
        }

        function getLocalCookies() {
            var cookies = {};
            document.cookie.split(';').forEach(function(cs) {
                var vals = cs.trim().split('=');
                if(!isAllowedCookieName(vals[0])) {return;}
                cookies[vals[0]] = decodeURIComponent(vals[1]);
            });
            return cookies;
        }

        function setLocalCookie(cookieName, cookieValue, expiresDays) {
            var d = new Date();
            d.setTime(d.getTime() + (expiresDays * 1000 * 60 * 60 * 24));

            /**
             * Some browsers enforce SameSite cookie restrictions, which means that if a cookie
             * should be accessible in third-party context, it requires the SameSite=None and
             * Secure flags set. By default, these are not set.
             * @see https://web.dev/samesite-cookies-explained/
             */
            var cookieStr = cookieName + '=' + cookieValue + '; expires=' + d.toUTCString() + ';SameSite=None;secure';
            document.cookie = cookieStr;
        }

        window.addEventListener('message', function(event) {
            if (!isAllowedDestination(document.referrer) || !isAllowedDestination(event.origin)) {
              return;
            }

            var data = null;
            try { data = JSON.parse(event.data); } catch(e) { return; }

            if ([writeType, readType].indexOf(data.msgType) !== -1 && data.namespace !== namespace) {
                return;
            }

            if (data.msgType === writeType && isAllowedCookieName(data.cookieName)) {
                setLocalCookie(data.cookieName, data.cookieVal, data.expiresDays);
            }
            sendCookiesToPage();
        });

        function sendCookiesToPage(msgType) {
            if (!isAllowedDestination(document.referrer)) {
                return;
            }
            var msg = {
                cookies: getLocalCookies(),
                msgType: msgType || 'destination-sync-read',
                namespace: namespace
            };
            window.parent.postMessage(JSON.stringify(msg), windowOrigin);
        }

        sendCookiesToPage('destination-sync-init');
    }());
  </script>
</head>
</html>
