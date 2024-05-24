window.adexOpt = window.adexOpt || [];

window.adexOpt[8845] = false;

!function(a,b,c,d,e,f,g,h,i,j,k,l){a[f]=a[f]||[],k=a[f];try{k.push(a.localStorage)}catch(a){}try{k.push(a.sessionStorage)}catch(a){}k.push({setItem:function(a,d,s,e,f,g,r){r="",e=new Date,f=typeof d,g="object"===f&&"undefined"!==f?JSON.stringify({v:d}):d,e.setTime(e.getTime()+1e11);for(key in s){if(key.toLowerCase() == "secure" && s[key] && location.protocol != "https:") {delete s[key];continue;}r+=key+"="+s[key]+";"}b[c]=a+"="+encodeURIComponent(g)+"; expires="+e.toUTCString()+"; path=/;"+r;},getItem:function(a){for(var f=a+"=",g=b[c].split(";"),h="",j={},k=0;k<g[d];k++){for(var m=g[k];" "==m.charAt(0);)m=m[e](1,m[d]);if(0===m.indexOf(f)){if(h=decodeURIComponent(m[e](f[d],m[d])),"{"==h[e](0,1))try{if("v"in(j=JSON.parse(h)))return j.v}catch(a){return h}return"undefined"==h?l:h}}return null}}),k.get=function(a,b){for(i=0;i<k[d];i++)if(b=k[i]){try{b=b.getItem(a)}catch(a){}if(b)return k.set(a,b),b}},k.set=function(a,b,s){for(i=0;i<k[d];i++)if(result=k[i],result)try{result.setItem(a,b,s)}catch(a){}}}(window,document,"cookie","length","substring","APC");

var jHtmlManager = (function(){

    var place = null,
        unit_id = 0,
        informer_url = '',
        tracker_url = '',
        version = '',
        ls_path = '',

        init = function (options) {
            unit_id = options['unit_id'];
            informer_url = options['informer_url'];
            tracker_url = options['tracker_url'];
            version = options['version'];
            ls_path = options['ls_path'];

            var old = document.getElementById('adpartner-htmlunit-' + unit_id);
            if (old) {
                old.setAttribute("id", 'adex-htmlunit-' + unit_id)
            }

            place = document.getElementById('adex-htmlunit-' + unit_id);
            if (!place) {
                banners = document.getElementsByClassName('adpartner-htmlunit-' + unit_id);
                if (len(banners)>0) place = banners[0];
                banners = document.getElementsByClassName('adex-htmlunit-' + unit_id);
                if (len(banners)>0) place = banners[0];
                place.className = '';
            }
            bannerNum = Math.round(Math.random() * 100000000000000000);
            place.id = 'adex-htmlunit-' + unit_id + '_' + bannerNum;
            if (typeof(adexOpt[unit_id]) != 'undefined' && adexOpt[unit_id] != false) {
                adexOpt[unit_id + '_' + bannerNum] = adexOpt[unit_id];
                adexOpt[unit_id] = null;
            }

            if(typeof(window.waitForApuID) == 'undefined'){
    window.functionCallbacks = [];
    window.functionLock = false;
    window.apuidExists = typeof(window.apuid) != 'undefined' &&  window.apuid;
    function getApuID () {
        var userId = '';
        try{
            userId = APC.get('lapuid');
            var pattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
            if (typeof userId !== "string" || !pattern.test(userId)){
                userId = '';
            }
        }
        catch(e){}
        if (userId === '' ) {
            var d = new Date().getTime();
            if (typeof performance !== 'undefined' && typeof performance.now === 'function'){
                d += performance.now(); //use high-precision timer if available
            }
            userId = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = (d + Math.random() * 16) % 16 | 0;
                d = Math.floor(d/16);
                return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
            });
            try{
                APC.set('lapuid', userId, {secure: true, sameSite: 'none'});
            }catch(e){
            }
        }
        return userId;
    }
    window.waitForApuID = function (callback) {
        if (apuidExists){
            callback();
        } else if (functionLock) {
            functionCallbacks.push(callback);
        } else {
            functionLock = true;
            functionCallbacks.push(callback);
            window.apuid = getApuID();
            window.apuidExists = true;
            while (functionCallbacks.length) {
                var thisCallback = functionCallbacks.pop();
                thisCallback();
            }
            functionLock = false;
        }
    };
}

            if(typeof(window.adexHTMLUnit) == 'undefined') {
                addVideoLib();
            }

            window.waitForApuID(function(){
                if(!adexOpt[unit_id + '_' + bannerNum]){
                    sessionData = getSessionData();
                    setIframe(getInformerUrl() + '&apuid=' + window.apuid + '&session_pageview=' + sessionData[1] + '&session_id=' + sessionData[0] + '&site_visited=' + sessionData[2] + '&location=' + encodeURIComponent(window.location.href));
                }
            });

            if(typeof(window.loadedBanners) == 'undefined') {
                window.loadedBanners = [];
            }
            window.addEventListener("message", function(event){
                setUserIdFromMessage(event.data);
                var options = getBannerCode(event.data);
                if (options && options != false) {
                    adexOpt[options['unitId'] + '_' + options['bannerNum']] = options;
                }
            }, false);
            window.onMainScriptLoad = window.onMainScriptLoad ? window.onMainScriptLoad : [];
            window.onMainScriptLoad['fn' + unit_id + '_' + bannerNum] = function(unit_id, bannerNum) {
                if(adexOpt[unit_id + '_' + bannerNum] && typeof(window.adexHTMLUnit) != 'undefined'){
                    var banner = 'banner' + unit_id;
                    window['banner' + unit_id + '_' + bannerNum] = adexHTMLUnit();
                    options = adexOpt[unit_id + '_' + bannerNum];
                    options['bannerNum'] = bannerNum;
                    window['banner' + unit_id + '_' + bannerNum].init(options);
                    adexOpt[unit_id + '_' + bannerNum] = false;
                } else {
                    window.setTimeout('onMainScriptLoad["fn' + unit_id + '_' + bannerNum + '"](' + unit_id + ', ' + bannerNum + ');', 100);
                }
            };
            window.loadAdexHtmlUnit = window.loadAdexHtmlUnit ? window.loadAdexHtmlUnit : [];
            onMainScriptLoad["fn" + unit_id + '_' + bannerNum](unit_id, bannerNum);
        },

        setIframe = function(url) {
            var iframe = document.createElement("iframe");
            iframe.setAttribute('src', url);
            iframe.setAttribute('width', '0');
            iframe.setAttribute('height', '0');
            iframe.setAttribute('style', 'display:none;');
            place.appendChild(iframe);
        },

        getTrackerUrl = 

        getInformerUrl = function() {
            return informer_url + ls_path + '?htmlunit=' + unit_id + '&bannerNum=' + bannerNum
        },

        setUserIdFromMessage = function(event_data) {
            if (typeof event_data != 'string') {
                return;
            }

            var messageRegexp = new RegExp("^user_id_([0-9A-Za-z-]+)$", "g");
            var message = messageRegexp.exec(event_data.trim());
            if (message != undefined) {
                window.apuid = message[1];
                try{
                    APC.set('lapuid', window.apuid, {secure: true, sameSite: 'none'});
                }catch(e){}
            }
        },

        getBannerCode = function(event_data) {

            if (typeof event_data != 'string') {
                return;
            }

            try
            {
                var json = JSON.parse(event_data.trim().replace(/\r|\n/g, ''));
                if(json['unitId'] && json['bannerNum'] && typeof(loadedBanners[json['unitId'] + '_' + json['bannerNum']]) == 'undefined'){
                    loadedBanners[json['unitId'] + '_' + json['bannerNum']] = 1;
                    return json;
                }
            }
            catch(e){}
            return false;
        },

        addVideoLib = function(){
            var head = document.getElementsByTagName('head')[0];
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = informer_url + "/apstc/htmlunit.min.js?v=" + version;
            head.appendChild(script);
        };

    return {
        init:init
    };
})();
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
        sessionId = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, ;
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
jHtmlManager.init({
    'unit_id':8845,
    'informer_url':'https://a4p.adpartner.pro',
    'tracker_url': 'https://a4p.adpartner.pro/tracker',
    'version': '1.1.483',
    'ls_path': '/htmlunit/ls'
});

var scr = "<script type=\"text/javascript\" id=\"adpartner_init\"> var adexQ = adexQ || []; !function(e){var t=e.createElement(\"script\");t.type=\"text/javascript\",t.async=!0,t.src=\"//a4p.adpartner.pro/tracker/script?id=1687\";var r=e.getElementById(\"adpartner_init\");r.parentNode.insertBefore(t,r)}(window.document); </script>";
var div = document.createElement('div');
document.body.appendChild(div);
div.innerHTML = scr;
var x = div.getElementsByTagName("script");
var len = x.length;
for(var i=0;i<len;i++)
{
    if (x[i].src != ""){
        var newScript = document.createElement("script");
        newScript.src = x[i].src;
        div.appendChild(newScript);
    } else {
        window.eval(x[i].text);
    }
}


