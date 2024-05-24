var PAC_CR_CART = (function () {
    function paXMLHttpRequestCreate() {
        try {
            return new XMLHttpRequest();
        } catch (e) { }
        try {
            return new ActiveXObject('MSXML2.XMLHTTP.6.0');
        } catch (e) { }
        try {
            return new ActiveXObject('MSXML2.XMLHTTP.3.0');
        } catch (e) { }
        try {
            return new ActiveXObject('MSXML2.XMLHTTP');
        } catch (e) { }

        return null;
    }

    function cr_changeScheme(url) {
        return (location.protocol == "https:") ? url.replace(/^http:/, 'https:') : url;
    }

    var CartLog = {};

    CartLog.Send = function paSendCartLog(action, key, data, token) {
        var pa_api_url = "https://j.c-rings.net/crt.aspx";
        var pa_send_data = "";
        pa_send_data += "group=" + token;
        if (data !== undefined) {
            for (var i = 1; i < 21; i++) {
                var paramItemCode = "item" + i;
                var paramItemQty = "item" + i + "_qty";
                var paramItemPrice = "item" + i + "_price";

                input = document.createElement('input');
                if (paramItemCode in data) { pa_send_data += "&" + paramItemCode + "=" + data[paramItemCode]; }
                else { pa_send_data += "&" + paramItemCode + "="; }
                if (paramItemQty in data) { pa_send_data += "&" + paramItemQty + "=" + data[paramItemQty]; }
                else { pa_send_data += "&" + paramItemQty + "=0"; }
                if (paramItemPrice in data) { pa_send_data += "&" + paramItemPrice + "=" + data[paramItemPrice]; }
                else { pa_send_data += "&" + paramItemPrice + "="; }
            }
        }
        if (action !== undefined) {
            switch (action) {
                case "ADD": { pa_send_data += "&action=ADD"; break; }
                case "DELETE": { pa_send_data += "&action=DELETE"; break; }
                case "PURCHASE": { pa_send_data += "&action=PURCHASE"; break; }
                default: { pa_send_data += "&action="; break; }
            }
        }
        if (key !== undefined) { pa_send_data += "&key=" + key; }

        var xhr = paXMLHttpRequestCreate();
        xhr.open("POST", pa_api_url);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
        xhr.send(pa_send_data);
    }
    return CartLog;
})();