var isShow = false;
var _adLoc = 0;
initLocation();

function initLocation() {
    var ipCheckUrl = "/ajax/IpChecker/?" + Date.parse(new Date());
    bomHelper.ajaxGet(ipCheckUrl, function (data) {
        var result = data;
        if (result != "") {
            if (parseInt(result) == 1)
                isShow = true;
            _adLoc = parseInt(result);
            if (isShow && document.getElementById("topAdDiv") && typeof (getAdHtml) == "function") {
                document.getElementById("topAdDiv").innerHTML = getAdHtml("top", "top");
            }
        }
    });
}

