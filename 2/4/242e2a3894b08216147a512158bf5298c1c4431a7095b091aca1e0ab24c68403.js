

window.apConversionTracker = (function() {
    !function(a,b,c,d,e,f,g,h,i,j,k,l){a[f]=a[f]||[],k=a[f];try{k.push(a.localStorage)}catch(a){}try{k.push(a.sessionStorage)}catch(a){}k.push({setItem:function(a,d,s,e,f,g,r){r="",e=new Date,f=typeof d,g="object"===f&&"undefined"!==f?JSON.stringify({v:d}):d,e.setTime(e.getTime()+1e11);for(key in s){if(key.toLowerCase() == "secure" && s[key] && location.protocol != "https:") {delete s[key];continue;}r+=key+"="+s[key]+";"}b[c]=a+"="+encodeURIComponent(g)+"; expires="+e.toUTCString()+"; path=/;"+r;},getItem:function(a){for(var f=a+"=",g=b[c].split(";"),h="",j={},k=0;k<g[d];k++){for(var m=g[k];" "==m.charAt(0);)m=m[e](1,m[d]);if(0===m.indexOf(f)){if(h=decodeURIComponent(m[e](f[d],m[d])),"{"==h[e](0,1))try{if("v"in(j=JSON.parse(h)))return j.v}catch(a){return h}return"undefined"==h?l:h}}return null}}),k.get=function(a,b){for(i=0;i<k[d];i++)if(b=k[i]){try{b=b.getItem(a)}catch(a){}if(b)return k.set(a,b),b}},k.set=function(a,b,s){for(i=0;i<k[d];i++)if(result=k[i],result)try{result.setItem(a,b,s)}catch(a){}}}(window,document,"cookie","length","substring","APC");

    var tracker_url = 'https://a4p.adpartner.pro/tracker/event';
    var initEvent = false;
    var querySelectorsClick = [];
    var querySelectorsSubmit = [];
    var loadingEvents = [];
    var selectorsClicked = [];
    var selectorsSubmited = [];

    var setCookie = function(name,value,expires) {
    expires = "; max-age=" + expires;
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
};
var getCookie = 

var getSessionData = function() {
    var timestamp = Math.round(+new Date()/1000);
    var sessionId = getCookie('session_id');
    var sessionPageview = window.sessionPageview || 1;
    if (!sessionId) {
        var d = new Date().getTime();
        if (typeof performance !== 'undefined' && typeof performance.now === 'function'){
            d += performance.now(); //use high-precision timer if available
        }
        sessionId = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d/16);
            return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
        setCookie('session_id', sessionId, 1800);
        setCookie('session_pageview', timestamp + ".1", 1800);
        window.sessionPageview = 1;
    } else {
        setCookie('session_id', sessionId, 1800);
        var pvData = getCookie('session_pageview');
        if (window.sessionPageview) {
            sessionPageview = window.sessionPageview;
        } else if (pvData) {
            pvData = pvData.split(".");
            sessionPageview = parseInt(pvData[1]) + 1;
            setCookie('session_pageview', timestamp + "." + sessionPageview, 1800);
            window.sessionPageview = sessionPageview;
        }
    }
    var siteVisitedData = getCookie('site_visited');
    var siteVisited = 1;
    if (siteVisitedData) {
        siteVisitedData = siteVisitedData.split(".");
        if (parseInt(siteVisitedData[0]) > timestamp) {
            siteVisited = parseInt(siteVisitedData[1]);
        } else {
            siteVisited = parseInt(siteVisitedData[1]) + 1;
            setCookie('site_visited', (timestamp + 86400) + "." + siteVisited, 2592000)
        }
    } else {
        setCookie('site_visited', (timestamp + 86400) + ".1", 2592000)
    }

    return [sessionId, sessionPageview, siteVisited]
};
    window.initVisitTime = window.initVisitTime || false;
window.logVisitTime = window.logVisitTime || (function() {
    var time = 0;
    var trackerURL = '';
    var init = 
        sendEvent = function() {
            var sessionData = getSessionData();
            setIframe(trackerURL + '/tt?time=' + time + '&apuid=' + window.apuid + '&session_pageview=' + sessionData[1] + '&session_id=' + sessionData[0] + '&site_visited=' + sessionData[2] + '&location=' + encodeURIComponent(window.location.href) + '&referer=' + encodeURIComponent(document.referrer));
            time = time + 10;
            if (time < 70) {
                window.setTimeout("window.logVisitTime.sendEvent()", 10000);
            }
        },
        setIframe = function(url) {
            var iframe = document.createElement("iframe");
            iframe.setAttribute('src', url);
            iframe.setAttribute('width', '0');
            iframe.setAttribute('height', '0');
            iframe.setAttribute('style', 'display:none;');
            document.body.appendChild(iframe);
        };

    return {
        init: init,
        sendEvent: sendEvent
    }
})();
if (!window.initVisitTime) {
    window.logVisitTime.init('https://a4p.adpartner.pro');
}
    sessionData = getSessionData();

    var submitNewIframe = function(event, rule) {
        var n = Math.floor(Math.random()*11);
        var k = Math.floor(Math.random()*1000000);
        var id = n+k;

        var data = {
            'event': event,
            'tracker_id': 1687,
            'apuid': apuid ? apuid : '',
            'apsid': '',
            'url': location.href,
            'referer': document.referrer,
            'rule': rule ? rule : '',
            'session_pageview': parseInt(sessionData[1]) || 0,
            'session_id': sessionData[0] || "",
            'site_visited': parseInt(sessionData[2]) || 0
        };
        convPost(id, JSON.stringify(data));
    };

    var convPost = function(id, data){
        var div = document.createElement("div");
        var form = document.createElement("form");
        var input = document.createElement("input");
        var iframe = document.createElement("iframe");
        form.setAttribute('action', tracker_url);
        form.setAttribute('method', 'post');
        form.setAttribute('enctype', 'application/x-www-form-urlencoded');
        form.setAttribute('target', 'cframe' + id);
        input.setAttribute('type', 'hidden');
        input.setAttribute('name', "data");
        input.setAttribute('value', data);
        iframe.setAttribute('name', 'cframe' + id);
        iframe.setAttribute('style', 'display:none;');
        iframe.onload = function() {
            try {
                delete loadingEvents[loadingEvents.indexOf('cframe' + id)];
                loadingEvents = loadingEvents.filter(;
            } catch(e) {}
        }
        form.appendChild(input);
        div.appendChild(form);
        div.appendChild(iframe);
        document.body.appendChild(div);
        loadingEvents.push('cframe' + id);
        form.submit();
    };

    var setUserIdFromMessage = function(event) {
        if (typeof event.data != 'string') {
            return;
        }

        var messageRegexp = new RegExp("^user_id_([0-9A-Za-z-]+)$", "g");
        var message = messageRegexp.exec(event.data.trim());
        if (message != undefined) {
            window.apuid = message[1];
            try{
                APC.set('lapuid', window.apuid, {secure: true, sameSite: 'none'});
            }
            catch(e){}
            return;
        }
        if (event.data.trim() == 'init_conversion_tracker' && !initEvent) {
            initEvent = true;
            window.adexQ.push('init');
        }

    };

    var setIframe = function(url) {
        var iframe = document.createElement("iframe");
        iframe.setAttribute('src', url);
        iframe.setAttribute('width', '0');
        iframe.setAttribute('height', '0');
        iframe.setAttribute('style', 'display:none;');
        document.body.appendChild(iframe);
    };


    var getApuID = function() {
        if (typeof(window.apuid) == 'undefined' ||  !window.apuid){
            var userId = APC.get('lapuid');
        } else {
            var userId = window.apuid;
        }
        var pattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
        if (typeof userId !== "string" || !pattern.test(userId)){
            var d = new Date().getTime();
            if (typeof performance !== 'undefined' && typeof performance.now === 'function'){
                d += performance.now(); //use high-precision timer if available
            }
            userId = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, ;
            try{
                APC.set('lapuid', userId, {secure: true, sameSite: 'none'});
            }
            catch(e){}
        }
        setIframe(tracker_url + '?apuid=' + userId);
    };

    var sleepIfEventsLoading = function(delay) {
        var start = new Date().getTime();
        while (new Date().getTime() < (start + delay) && loadingEvents.length > 0);
    }

    var updateListeners = function() {
        querySelectorsClick.forEach(function(selector){
            try {
                var element = document.querySelector(selector);
                if (element) {
                    element.addEventListener("click", function (e) {
                        if (selectorsClicked.indexOf(selector) >= 0) {
                            return;
                        }
                        submitNewIframe('click_by_element', selector);
                        selectorsClicked.push(selector);
                    }, false);
                }
            } catch(e) {
                
            }
        });

        querySelectorsSubmit.forEach(function(selector){
            try {
                var element = document.querySelector(selector);
                if (element) {
                    element.addEventListener("submit", function (e) {
                        if (selectorsSubmited.indexOf(selector) >= 0) {
                            return;
                        }
                        submitNewIframe('submit_form', selector);
                        selectorsSubmited.push(selector);
                    }, false);
                }
            } catch(e) {
                
            }
        });
    }

    return {
        init: function() {
            if (window.addEventListener){
                window.addEventListener("message", setUserIdFromMessage);
            } else {
                window.attachEvent("onmessage", setUserIdFromMessage);
            }
            window.apConversionTracker.getApuID();

            setInterval(function(){
                if (window.adexQ) {
                    while(window.adexQ.length){
                        submitNewIframe(window.adexQ.pop(), false);
                    }
                }
            }, 100);

            updateListeners();

            window.addEventListener("beforeunload", ;
        },
        submitNewIframe: submitNewIframe,
        getApuID: getApuID,
        updateListeners: updateListeners
    };
})();


window.apConversionTracker.init();
