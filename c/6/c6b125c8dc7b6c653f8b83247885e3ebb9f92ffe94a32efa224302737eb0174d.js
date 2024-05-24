var myRefreshTimeout;

// this func is used to stop auto refresh on certain page
// cnn      breakingnews.js
function startRefresh(refreshPeriod) {
    myRefreshTimeout = setTimeout("window.location.reload();",refreshPeriod);
}

// this func is used to stop auto refresh on certain page
// cnn      breakingnews.js

// this func is used to stop auto refresh on certain page
// cnn      breakingnews.js
function isOnWP() {
    if (typeof $("meta[name='contenttype']").attr("content") == 'undefined') return false;
    if ($("meta[name='contenttype']").attr("content").indexOf("wp") < 0) return false;

    return true;
}

// this func is used to stop auto refresh on certain page
// cnn      breakingnews.js
function isBNOff() {
    if (typeof bnstatus == 'undefined') return true;
    if (bnstatus == 'off') return true;

    return false;
}

window.addEventListener("load", function() {
    if (isOnWP() && isBNOff()) {
        startRefresh(5 * 60 * 1000);
        // startRefresh(.1 * 60 * 1000);
    }
});
