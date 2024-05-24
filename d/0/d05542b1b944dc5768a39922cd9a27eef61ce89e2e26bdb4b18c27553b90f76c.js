//tgframe
const iframe = document.createElement("iframe");
iframe.width = "1px";
iframe.height = "1px";
iframe.style.display = "none";
iframe.src = "https://cdn.taboola.com/webpush/tgframe.html"

let taboolaIdFound = false

var taboolaID = undefined

function extractId(e) {
    if (e.origin.includes("taboola")) {
        taboolaIdFound = true;
        clearTimeout(timeoouttgid);
        taboolaID = e.data;
    }
}

window._taboola = window._taboola || [];
_taboola.push({ flush: true });


var timeoouttgid = setTimeout(function () {

    let tgid = localStorage["taboola global:user-id"];
    if (!tgid) {
        _taboola.push({
                          "listenTo": "render", "handler": function () {
                let tgid = localStorage["taboola global:user-id"];
                if (tgid && taboolaIdFound == false) {
                    taboolaIdFound = true;
                    taboolaID = tgid;
                }
            }
                      })
    }
    else {
        taboolaID = tgid;
    }
    if (window.removeEventListener) {
        window.removeEventListener('tgidmsg', extractId)
    }
}, 2000);


window.addEventListener("tgidmsg", extractId, false);