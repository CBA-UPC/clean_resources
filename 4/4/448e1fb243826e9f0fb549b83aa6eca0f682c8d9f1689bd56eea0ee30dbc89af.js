var getUtm = (url) => {
    var utm = {};
    utm.medium   = getParameterByName('utm_medium', url);
    utm.source   = getParameterByName('utm_source', url);
    utm.content  = getParameterByName('utm_content', url);
    utm.campaign = getParameterByName('utm_campaign', url);
    utm.term     = getParameterByName('utm_term', url);

    return utm;
};

var getPlan = (url) => {
    var plan = {};
    plan.id     = getParameterByName('id', url);
    plan.type   = getParameterByName('type', url);
    plan.promo  = getParameterByName('promo', url);

    return plan;
};

var getCjEvent = (url) => {
    return getParameterByName('cjevent', url);
};

var setCookie = (cname, cvalue, exhour, path, domain) => {
    var expires = '';
    if (exhour > 0) {
        var d = new Date();
        d.setTime(d.getTime() + (exhour * 60 * 60 * 1000));
        expires = d.toUTCString();
    }  
    document.cookie = cname + '=' + cvalue + ';' + 'expires=' + expires + ';' + 'path=' + path + ';' + 'domain=' + domain + ';secure';
};

var getCookie = (cname) => {
    var name = cname + '=';
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return '';
};

var getParameterByName = (name, url) => {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
    if (!results) return '';
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
};

var claimTimer;
var redeemClaim = () => {
    if (getCookie('app_auth') !== '') {
        let xhr = new XMLHttpRequest();
        xhr.addEventListener('readystatechange', () => {
            if(xhr.readyState === 4) {
                var resp = JSON.parse(xhr.responseText);
                console.log(resp);
                if (!!resp.status) {
                    setCookie('pb_claim', '', -1, '/', '.photobucket.com');
                    clearInterval(claimTimer);
                    window.location.replace('https://photobucket.com');
                }
            }
        });
        xhr.open('POST', 'https://bapi.photobucket.com/v2/redeem');
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify({
            auth: getCookie('app_auth'),
            claim_id: atob(decodeURIComponent(getCookie('pb_claim'))),
        }));
    }
}

var iframetimer;
var iFrameAgent = () => {
    let oldPushState = history.pushState;
    history.pushState = function pushState() {
        let ret = oldPushState.apply(this, arguments);
        window.dispatchEvent(new Event('pushstate'));
        window.dispatchEvent(new Event('locationchange'));
        return ret;
    };

    let oldReplaceState = history.replaceState;
    history.replaceState = function replaceState() {
        let ret = oldReplaceState.apply(this, arguments);
        window.dispatchEvent(new Event('replacestate'));
        window.dispatchEvent(new Event('locationchange'));
        return ret;
    };

    window.addEventListener('popstate', ;

    window.addEventListener('locationchange', ;

    iframetimer = setInterval(() => {
        let footer = document.getElementsByTagName('footer')[0];
        let header = document.getElementsByTagName('header')[0];

        if (typeof footer !== 'undefined' && typeof header !== 'undefined') {
            footer.parentNode.removeChild(footer);
            header.parentNode.removeChild(header);
            clearInterval(iframetimer);
        }
    }, 500);
};

(() => {
    // iFrame location change monitor -->
    try {
        if (window.self !== window.top) {
            iFrameAgent();
        }
    } catch (e) {
        iFrameAgent();
    }
    // <-- iFrame location change monitor

    var url = window.location.href;

    // temporary - claim gift -->
    var claim = getParameterByName('claim_id', url);
    if (claim !== '') {
        setCookie('pb_claim', encodeURIComponent(btoa(claim)), 1, '/', '.photobucket.com');
    }

    if (getCookie('pb_claim') !== '') {
        // start timer and check every 2.5 seconds - if logged in, claim reward
        claimTimer = setInterval(redeemClaim, 2500);
    }
    // <-- temporary - claim gift


    if (window.location.href.startsWith('https://photobucket.com/notice/os-251')) {
        window.location.replace('https://my.photobucket.com/predeactivation');
    }
    
    var plan = getPlan(url);
    if (plan.id || plan.type || plan.promo) {
        if (getCookie('pb_orange') !== '' && plan.type === 'trial') {
            var original_plan = JSON.parse(atob(decodeURIComponent(getCookie('pb_orange'))));
            if (original_plan.promo) {
                window.location.href = 'https://billing.photobucket.com/?id=' + original_plan.id + '&type=' + original_plan.type + '&promo=' + original_plan.promo;
            } else {
                window.location.href = 'https://billing.photobucket.com/?id=' + original_plan.id + '&type=' + original_plan.type;
            }
        } else if (plan.type !== 'trial') {
            setCookie('pb_orange', encodeURIComponent(btoa(JSON.stringify(plan))), 1, '/', '.photobucket.com');
        }
        
        setCookie('pb_purple', encodeURIComponent(btoa(JSON.stringify(plan))), 720, '/', '.photobucket.com');
    }

    var submit = false;

    var utm = getUtm(url);
    if (utm.medium != '' || utm.source != '' || utm.content != '' || utm.campaign != '') {
        submit = true;

        if (getCookie('pb_green') == '') {
            setCookie('pb_green', encodeURIComponent(btoa(JSON.stringify(utm))), 720, '/', '.photobucket.com');
        }
    }

    var cjevent = getCjEvent(url);
    if (cjevent != '') {
        let partnerUrl = 'https://partners.photobucket.com/cj/event';
        let parts = window.location.host.split('.');
        if (parts.length > 2) {
            partnerUrl += ('/' + parts[parts.length-3]);
        }

        var xhr = new XMLHttpRequest();
        xhr.open('POST', partnerUrl);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.withCredentials = true;
        xhr.send(JSON.stringify({ cjevent: cjevent }));
    }

    if (submit) {
        let xhr = new XMLHttpRequest();
        xhr.addEventListener('readystatechange', () => {
            if(xhr.readyState === 4) {
                var resp = JSON.parse(xhr.responseText);
                if (resp.message.session) {
                    setCookie('pb_session', resp.message.session, 720, '/', '.photobucket.com');
                }
            }
        });
        xhr.open('POST', 'https://webhooks.photobucket.com/analytix');
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify({
            auth: getCookie('app_auth'),
            action: 'cta_landed',
            session: getCookie('pb_session'),
            p: getPlan(url),
            u: utm
        }));
    }

})();