<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>truv</title></head>
<body>
</body>
</html>
<script>
    (function () {
        var qs = /[&?]candidate=([^&]+)/.exec(location.search);
        var candidate = qs && qs[1];
        if (candidate === 'null' || candidate === 'undefined') {
            candidate = null;
        }
        var key = "_yngt";

        function checkLocalStorage() {
            // rtype: uid | undefined
            try {
                return localStorage.getItem(key);
            } catch (e) {
                return undefined;
            }
        }

        function saveInLocalStorage(uid) {
            try {
                localStorage.setItem(key, uid);
            } catch (e) {
            }
        }

        function checkCookie() {
            try {
                var uid = document.cookie.match(/_yngt=([\w\-]+)/);

                if (uid) {
                    return uid[1];
                }
            } catch (e) {
                return undefined;
            }
        }

        function saveInCookie(uid) {
            try {
                var now = new Date();
                now.setTime(now.getTime() + 30 * 24 * 60 * 60 * 1000);
                var thirty_days_from_now = now.toUTCString();
                document.cookie = ""
                    .concat(key, "=")
                    .concat(uid, "; expires=")
                    .concat(thirty_days_from_now, "; domain=.yektanet.com; path=/; samesite=lax");
            } catch (e) {
            }
        }

        function setUID(uid) {
            if (uid) {
                saveInCookie(uid);
                saveInLocalStorage(uid);

                try {
                    top.postMessage({cookie: uid}, "*");
                } catch (e) {
                }
            }
        }

        var uid = checkLocalStorage() || checkCookie();

        if (uid && uid !== 'null' && uid !== 'undefined') {
            setUID(uid);
        } else {
            var xhr = new XMLHttpRequest();
            var url = new URL("https://ua.yektanet.com/cookie/set");
            if (candidate) {
                url.searchParams.set("candidate", candidate);
            }
            xhr.open("GET", url, true);
            xhr.withCredentials = true;
            xhr.send();

            xhr.onload = function () {
                if (xhr.status === 200) {
                    var resp = JSON.parse(xhr.responseText);
                    uid = resp["token"];
                    setUID(uid);
                }
            };

            xhr.onerror = function () {
                // only triggers if the request couldn't be made at all
                console.error("Network Error in setting .yektanet token");
            };
        }
    })();
</script>
