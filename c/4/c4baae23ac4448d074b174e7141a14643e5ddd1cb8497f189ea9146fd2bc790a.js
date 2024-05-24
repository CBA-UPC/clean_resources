<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Branding</title>
    <script src="https://yastatic.net/pcode/adfox/loader.js"></script>
    <style>
        html, body {
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
        }

        #adfox_1488885316723718 {
            height: 100%;
        }
    </style>
</head>
<body>
<div id="adfox_1488885316723718"></div>
<script>
    (function() {
        var containerId = "adfox_1488885316723718";
        var regPuid1 = new RegExp(".*puid1=([^&#]*)");
        var puid1 = regPuid1.exec(document.location.search);
        if (puid1) {
            puid1 = puid1[1];
        }

        window.addEventListener("message", listenToPostMessage);

        function listenToPostMessage(evt) {
            var origin = evt.origin || evt.originalEvent.origin;
            if (!isValidedDomain(origin)) {
                return;
            }

     sages[1].indexOf("http") === 0 && messages[1],
                theme: messages[2] === "currentTheme" && messages[3],
            };

            if (params.dl) {
                getAd(params.dl, origin, params.theme);
                window.removeEventListener("message", listenToPostMessage);
            }
        }

        function isValidedDomain(domain) {
            return /(^|:\/\/|\.)yandex\.(com|ru|ua|by|kz|com\.tr)$/.test(domain);
        }

        function getAd(dl, origin, theme) {
            window.Ya.adfoxCode.create({
                ownerId: 256152,
                containerId: containerId,
                params: {
                    puid1: puid1,
                    puid10: origin,
                    puid11: theme,
                    dl: dl,
                    pp: "g",
                    ps: "clni",
                    p2: "foom"
                }
            });
        }
    })();
</script>
</body>
</html>
