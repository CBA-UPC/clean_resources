<!DOCTYPE html>
<html lang="en">
<head></head>
<body>
<script type="text/javascript">
    var url, aid;

    function parseQueryParams() {
        url = getQueryParams('url');
        var paramUid = getQueryParams('aid');
        if (paramUid) {
            aid = getAid(paramUid);
        }
    }

    function getQueryParams(name) {
        var queryParams = {};
        var queryStrings = location.search.substring(1);
        var params = queryStrings.split("&");
        for (var i = 0; i < params.length; i++) {
            var pair = params[i].split("=");
            queryParams[pair[0]] = decodeURIComponent(pair[1]);
        }

        if (queryParams.hasOwnProperty(name)) {
 unction isMobileDevice() {
        return /mobile/i.test(navigator.userAgent);
    }

    function getAid(aid) {
        var obj = tryParseJSON(aid);
        if (!obj) {
            return aid;
        }
        if (isMobileDevice() && obj.hasOwnProperty("mobileAid")) {
            return obj.mobileAid;
        }
        return obj.aid;
    }

    function tryParseJSON(strObj) {
        try {
            if (strObj.indexOf('{') === -1) {
                return null;
            }
            var obj = JSON.parse(strObj);
            if (obj && typeof obj == "object") return obj;
        } catch (e) {
        }
        return null;
    }

    parseQueryParams();

    window._taboola = window._taboola || [];
    _taboola.push({
        artic;
            e.id = i;
            f.parentNode.insertBefore(e, f);
        }
    }(document.createElement('script'), document.getElementsByTagName('script')[0], 'https://cdn.taboola.com/libtrc/' + aid + '/trk.js', 'tb_loader_script');
    if (window.performance && typeof window.performance.mark == 'function') {
        window.performance.mark('tbl_ic');
    }
</script>
</body>
</html>