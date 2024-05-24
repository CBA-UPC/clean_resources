try { 
	webengage.onReady(function () {
    webengage.notification.onOpen(function (data) {
        if (
            ["~251445191",
                "3175c919",
                "3175c916",
                "22a3400cb",
                "173048805",
                "~19715089c",
                "~251445195",
                "~558649b0",
                "~10cb592a6"].includes(data.notificationId)
        ) {
            var iframe = document.getElementById(
                "webklipper-publisher-widget-container-notification-frame"
            );
            var xComponent = new DOMMatrixReadOnly(iframe.style.transform).m41;

            function isWindowsOS() {
                var platform = window.navigator.platform,
                    windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"],
                    os = null;
                if (windowsPlatforms.indexOf(platform) !== -1) {
                    os = "Windows";
                } else {
                    os = "false";
                }
                return os;
            }
            var isChromium = /Chrome|Chromium/.test(navigator.userAgent);

            if (isWindowsOS() == "Windows" && isChromium) {
                xComponent = new DOMMatrixReadOnly(iframe.style.transform).m41 - 17;
                var yComponent = new DOMMatrixReadOnly(iframe.style.transform).m42;
                iframe.style.transform =
                    "translate(" + xComponent + "px, " + yComponent + "px)";
            }

            var isMobileDevice = /Mobi/i.test(window.navigator.userAgent);
            if (isMobileDevice === false) {
                //Desktop
                window.addEventListener("scroll", function () {
                    webengage.util.withWeJquery(function () {
                        var scrollTop = window.scrollY;
                        var $iframeNot = $weJQuery(
                            "#webklipper-publisher-widget-container-notification-frame"
                        );
                        //   console.log("scrollTop1", scrollTop);
                        if (scrollTop >= 400) {
                            $iframeNot.css({
                                top: "-1070px"
                            });
                        } else {
                            $iframeNot.css({
                                top: "-1000px"
                            });
                        }
                    });
                });
            }
        }
    });
});
 } catch(e) { 
 	if (e instanceof Error) { 
		var data = e.stack || e.description;
		data = (data.length > 900 ? data.substring(0, 900) : data);
	 	webengage.eLog(null, 'error', data, 'cwc-error','cwc', '~f05d560');
	 }
 }
