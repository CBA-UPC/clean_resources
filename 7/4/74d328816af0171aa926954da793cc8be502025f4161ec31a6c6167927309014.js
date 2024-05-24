const pxUrlCookieSegment = '//abs.proxistore.com/v3/cookie/adv/segment';
const userListUrl = 'https://v2.proxistore.com/fr/api/v1/segments/retrieve-user-list-ids-by-segment-ids';

function px_ajax(url, method, data) {
    return new Promise(function (resolve, reject) {
        var r = new XMLHttpRequest();
        r.withCredentials = true;
        r.open(method, url, true);
        r.setRequestHeader('Content-Type', 'application/json');
        r.onreadystatechange = function () {
            if (r.readyState === XMLHttpRequest.DONE) {
                if (r.status === 204) {
                    resolve(null)
                } else if (r.status >= 200 && r.status < 300) {
                    resolve(r.responseText);
                } else {
                    reject(Error(r.statusText));
                }
            }
        };
        r.send(data);
    });
}

function campaignHasSegment() {
    var pxUrl = '//abs.proxistore.com/tags/segments-under-diffusion?languages=FR,NL'
    px_ajax(pxUrl, 'GET')
        .then(function success(segmentIds) {
            if (segmentIds && segmentIds.length > 0) {
                // px_ajax(pxUrlCookieSegment, 'GET', null)
                //     .then(function (px_cookie_json) {
                        // const px_cookie = JSON.parse(px_cookie_json);
                        // if (px_cookie === null) {
                            pxCallSirData(JSON.parse(segmentIds));
                        // } else {
                        //     executeGoogleCookieMatching();
                        // }
                    // });
            } else {
                // executeGoogleCookieMatching();
            }
        })
        .then(executeGoogleCookieMatching);
}

// call after pxCallSirData
function callbackproxistore(response) {
    if (response['user_segments'].length > 0) {
        var segment_ids = response['user_segments'].map(;
        segment_ids = '' + JSON.stringify(segment_ids);
        // les segments_ids sont ajoutés au cookie pxs-segment pendant ce call à backend-cookie
        px_ajax(pxUrlCookieSegment, 'POST', segment_ids)
            .then(executeGoogleCookieMatching);
    } else {
        px_ajax(pxUrlCookieSegment, 'POST', JSON.stringify([]))
            .then(executeGoogleCookieMatching);
    }
}

function pxCallSirData(segment_ids) {
    if (typeof window.__tcfapi === 'function') {
        window.__tcfapi('addEventListener', 2, function (tcData, success) {
            if (!success || (!tcData.eventStatus && tcData.gdprApplies)) {
                return
            }
            if (!tcData.gdprApplies || (tcData.tcString && tcData.vendor.consents[53] && tcData.purpose.consents[1] && tcData.purpose.consents[4])) {

                let pxTag = document.createElement('script');
                pxTag.src = '//partner-api.sddan.com/api/v1/public/user/partner/23379/segment?segment_ids=' + segment_ids + '&callback=callbackproxistore&gdpr=' + tcData.gdprApplies + '&gdpr_consent=' + tcData.tcString;
                pxTag.async = true;
                document.getElementsByTagName('body')[0].appendChild(pxTag);
                __tcfapi('removeEventListener', 2}, tcData.listenerId);
            }
        });
    }
}

function executeGoogleCookieMatching() {

    try {

        const segments = getUserSegments();
        if (!segments || segments.length === 0) {
            console.log("Cookie matching: no segments, skip cookie matching")
            return;
        }

        const uvId = getCookieValue('proxistore-uv');
        if (!uvId) {
            console.warn("Cookie matching error: cannot find uvId, skip cookie matching")
            return;
        }

        const uvIdBase64 = btoa(decodeURIComponent(uvId));

        url = userListUrl + '?segmentIds=' + segments.join(',')

        const ajax = new XMLHttpRequest();
        ajax.withCredentials = true;
        ajax.open('GET', url, true);
        ajax.onreadystatechange = function () {
            if (ajax.readyState === XMLHttpRequest.DONE) {

                // TODO debug => remove
                console.log("call to ulas service done")

                if (ajax.status === 200 && ajax.responseText) {

                    const ulaList = Object.values(JSON.parse(ajax.responseText));

                    // TODO debug => remove
                    console.log(ulaList)

                    const ulas = ulaList.join('&google_ula=');

                    console.log(ulas)

                    const cookieMatchingUrl = 'https://cm.g.doubleclick.net/pixel?google_cm&google_nid=proxistore&google_hm=' + uvIdBase64 + '&google_ula=' + ulas

                    console.log("cookieMatchingUrl: " + cookieMatchingUrl)

                    const imagePixelUrl = document.createElement('img');
                    imagePixelUrl.setAttribute('src', cookieMatchingUrl);
                    imagePixelUrl.setAttribute('style', 'display: none;');
                }
            }
        };
        ajax.send();

    } catch (error) {
        console.error("Cookie matching error: " + error)
    }
}}

(function () {
    if (typeof window.__tcfapi === 'function') {
        window.__tcfapi('addEventListener', 2, function (tcData, success) {
            if (!success || (!tcData.eventStatus && tcData.gdprApplies)) {
                return
            }
            if (!tcData.gdprApplies || (tcData.tcString && tcData.vendor.consents[418] && tcData.purpose.consents[1] && tcData.purpose.consents[4])) {
                campaignHasSegment();
                __tcfapi('removeEventListener', 2, emptyFunction, tcData.listenerId);
            }
        });
    }
})();}

function removeDuplicatesFast(array) {
    var seen = {};
    var out = [];
    var len = array.length;
    var j = 0;
    for (var i = 0; i < len; i++) {
        var item = array[i];
        if (!item.startsWith('px')) {
            if (seen[item] !== 1) {
                seen[item] = 1;
                out[j++] = item;
            }
        }
    }
    return out;
}

function getUserSegments() {
    const cookieValue = getCookieValue('proxistore-segment');
    if (cookieValue) {
        const segmentsObject = JSON.parse(decodeURIComponent(cookieValue));
        if (segmentsObject && segmentsObject.segments) {
            return segmentsObject.segments;
        }
    }
    return [];
}