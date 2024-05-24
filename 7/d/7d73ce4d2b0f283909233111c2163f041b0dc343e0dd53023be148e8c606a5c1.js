<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title></title>
</head>

<body></body>
<script type="text/javascript">

var receiver = function(message) {

     
    var data = message.data;
    if (!(typeof data == 'object')) {
        return;
    }

    var COMMUNICATIONTYPE = {
        SET: 1,
        GET: 2,
        SEND: 3,
        REVENUESET:4,
        REVENUEGET:5,
        GETONLY: 6,
        SETONLY: 7,
        SESSSIONSET : 9,
        SETDATAINLOCALSTORAGE : 10,
        DELETESESSIONCOOKIES : 11,
        ISTPCOOKIEENABLED: 12
    }

    function getCookie(cks) {

        var urlck = "zab_" + cks.key;

        if (!cookieHandler.checkCookieExists(urlck)) {
            return;
        }

        var urlcookie = JSON.parse(cookieHandler.getCookieValue(urlck));

        var data = {};
        data.type = COMMUNICATIONTYPE.GET;
        data.value = urlcookie ? urlcookie : null;
        data.callback = cks.callback;

        cookieHandler.deleteCookie(urlck);
        parent.postMessage(data, "*");
    }
    
    function getOnlyCookie(cks) {

        var urlck = "zab_" + cks.key;

        var urlcookie =  document.cookie.match(urlck + "\=([^;]*)");

        var data = {};
        data.type = COMMUNICATIONTYPE.GET;
        data.value = (urlcookie && urlcookie[1]) ? urlcookie[1] : null;
        data.callback = cks.callback;
        parent.postMessage(data, "*");
    }
    
    function setOnlyCookie(data) {

        if (!(typeof data == 'object')) {
            return;
        }

        for (var key in data) {
            if (data.hasOwnProperty(key)) {


                var useragent  = navigator.userAgent;
                if(sameSiteHandler.shouldEnableSameSiteNone(useragent)) {
                    document.cookie = "zab_"+ key + "=" +  data[key] + ";samesite=none;secure";
                }else{
                    document.cookie = "zab_"+ key + "=" +  data[key] + ";";
                }
                
            }
        }
        parent.postMessage("", "*");
    }

    function setCookie(data) {

        if (!(typeof data == 'object')) {
            return;
        }

        for (var key in data) {
            if (data.hasOwnProperty(key)) {
                cookieHandler.setCookie("zab_" + key, data[key], 1);
            }
        }
        parent.postMessage("", "*");
    }
    function setRevenueCookie(data) {

        if (!(typeof data == 'object')) {
            return;
        }

        for (var key in data) {
            if (data.hasOwnProperty(key)) {
                var revchk = "zab_" + key;
                if (cookieHandler.checkCookieExists(revchk)) {
                    return ;
                }else{
                    cookieHandler.setCookie("zab_" + key, data[key], 1);
                }
                
            }
        }
        parent.postMessage("", "*");
    }
    function getRevenueCookie(cks) {

        var urlck = "zab_" + cks.key;

        if (!cookieHandler.checkCookieExists(urlck)) {
            return;
        }

        var urlcookie = JSON.parse(cookieHandler.getCookieValue(urlck));

        var data = {};
        data.type = COMMUNICATIONTYPE.REVENUEGET;
        data.value = urlcookie ? urlcookie : null;
        data.callback = cks.callback;
        data.revenue = cks.revenue;
        cookieHandler.deleteCookie(urlck);
        parent.postMessage(data, "*");
    }
   
    function setSessionCookies(data) {
    
        var obj = {};
        obj.expDetails = {}; 
        if(cookieHandler.exists(data.exp) && cookieHandler.exists(data.callback)) {

            for (var expId in data.exp) {
                if (cookieHandler.checkCookieExists("zsr" + expId)) { //No I18N
                    var sessionCookie = cookieHandler.getCookieValue("zsr" + expId); //No I18N
                    var timePageNoCookie = cookieHandler.getCookieValue(sessionCookie);
                    var splitArray = timePageNoCookie.split('-')
                    var time = splitArray[0];
                    var pageNo = splitArray[1];
                    obj.expDetails[expId] = {};
                    obj.expDetails[expId].cookie = sessionCookie;
                    obj.expDetails.firstTimeStamp = time; 
                    obj.expDetails.pageNo = ++pageNo;
                    obj.expDetails.lastInteractedTime = Number(splitArray[2]);
                    if(new Date().getTime() - Number(splitArray[2]) >  30 * 60 *1000) {
                        obj.expDetails.lastInteractedTime = "timeout";
                        deleteSessionCookies(data);
                    } else {
                        var timePageNo = time + "-" + pageNo + "-" + new Date().getTime();
                        cookieHandler.addCookie(sessionCookie, timePageNo, Number(time));
                    }
                } else {
                    var uniqueId = cookieHandler.generateUniqueId("zsrv"); //No I18N
                    var firstTimeStamp = new Date().getTime();
                    var timePageNo = firstTimeStamp + "-" + 1 + "-" + firstTimeStamp;
                    cookieHandler.addCookie("zsr" + expId, uniqueId, firstTimeStamp); //No I18N
                    cookieHandler.addCookie(uniqueId, timePageNo, firstTimeStamp);
                    obj.expDetails[expId] = {};
                    obj.expDetails[expId].cookie = uniqueId;
                    obj.expDetails.firstTimeStamp = firstTimeStamp; 
                    obj.expDetails.pageNo = 1;
                    obj.expDetails.lastInteractedTime = firstTimeStamp;
                }
                checkDataExistsInLocalStorage(expId, data.url);
            }
        }

        obj.type =  COMMUNICATIONTYPE.SESSSIONSET;
        obj.callback = data.callback;
        parent.postMessage(obj, "*");
    }

    

    function sendData(data) {

        if (!(typeof data == 'object')) {
            return;
        }

        sendDataToServer(data.url, data.value);
        parent.postMessage("", "*");
    }

    function setDataInLocalStorage(data) {

        try {
            var storage = window['localStorage'];
            storage.setItem(data.data.key, JSON.stringify(data.data.data));
        }
        catch(e) {
        }

        
    }

    function checkDataExistsInLocalStorage(expId, url) {
        if (typeof(Storage) !== "undefined") {
            if(cookieHandler.exists(localStorage.getItem(expId))) {
                sendDataToServer(url, JSON.parse(localStorage.getItem(expId)));
            }
        }      
    }

    function deleteSessionCookies(data) {

        var expObj = data.exp;
        for (var expId in expObj) {
            if(expObj.hasOwnProperty(expId)) {
                var sessionCookie = cookieHandler.getCookieValue("zsr" + expId); //No I18N
                cookieHandler.deleteCookie("zsr" + expId);
                cookieHandler.deleteCookie(sessionCookie);
            }
        }
    }
    
    function isThirdPartyEnabled(cks) {
        var key = "ztpctest";
        cookieHandler.setCookie(key, "tpcvalue");
        var value = cookieHandler.getCookieValue(key);
        
        var data = {};
        data.type = COMMUNICATIONTYPE.ISTPCOOKIEENABLED;
        data.value = cookieHandler.exists(value);
        data.callback = cks.callback;

        cookieHandler.deleteCookie(key);
        parent.postMessage(data, "*");
        cookieHandler.deleteCookie(key);
    }


    switch (data.type) {
        case 1:
            setCookie(data.cks);
            break;
        case 2:
            getCookie(data.cks);
            break;
        case 3:
            sendData(data._data);
            break;
        case 4:
            setRevenueCookie(data.cks);
            break;
        case 5:
            getRevenueCookie(data.cks);
            break;
        case COMMUNICATIONTYPE.GETONLY:
            getOnlyCookie(data.cks);
            break;
        case COMMUNICATIONTYPE.SETONLY:
            setOnlyCookie(data.cks);
            break;
        case COMMUNICATIONTYPE.SESSSIONSET:
            setSessionCookies(data);  
            break;
        case COMMUNICATIONTYPE.SETDATAINLOCALSTORAGE:
            setDataInLocalStorage(data);
            break;   
        case COMMUNICATIONTYPE.DELETESESSIONCOOKIES:
            deleteSessionCookies(data.data);   
            break;
        case COMMUNICATIONTYPE.ISTPCOOKIEENABLED:
            isThirdPartyEnabled(data.cks);
            break;
            default:

            break;
    }

}

var sendDataToServer = function(url, data) {

    function createCORSRequest(method, url) {

        var xhr = new XMLHttpRequest();
        if ("withCredentials" in xhr) {
            xhr.open(method, url, true);
        } else if (typeof XDomainRequest != "undefined") {
            xhr = new XDomainRequest();
            xhr.open(method, url);
        } else {
            xhr = null;
        }
        return xhr;
    }

    function makeCorsRequest(url, data) {

        var xhr = createCORSRequest('POST', url); //NO I18N
        try {
            if (xhr) {
                
                xhr.setRequestHeader('Content-Type', 'text/plain');
                xhr.send(data);
                return;
            }
        } catch (e) {}
    }

    if (!url || !data) {
        return;
    }
    
    if(!checkSessionCookie(data.srrd)) {
        return;
    }

    updateLastInteractedTime(data);
    
    makeCorsRequest(url,JSON.stringify(data));
    
    if (typeof(Storage) !== "undefined") {
       localStorage.removeItem(data.srrd[0].b); 
    }
};

function updateLastInteractedTime(data) {

    for(var i in data.srrd){
         if(cookieHandler.checkCookieExists("zsr"+ data.srrd[i].b)){
            if(data.spf && data.spf.lit) {
                var sessionCookie = cookieHandler.getCookieValue("zsr" + data.srrd[i].b); //No I18N
                if(cookieHandler.checkCookieExists(sessionCookie)) {
                    var timePageNoCookie = cookieHandler.getCookieValue(sessionCookie);
                    var splitArray = timePageNoCookie.split('-')
                    var time = splitArray[0];
                    var pageNo = splitArray[1];
                    var timePageNo = time + "-" + pageNo + "-" + new Date().getTime();
                    cookieHandler.addCookie(sessionCookie, timePageNo, Number(time));
                }
            }
         }
    }

}

function checkSessionCookie(srrd) {

    for(var i in srrd){
         if(cookieHandler.checkCookieExists("zsr"+ srrd[i].b)){
           return true;
         }
    }

    return false;
}


var cookieHandler = {

    setCookie: function(cname, cvalue, exp) {

        var expires = "";
        if (exp) {

            var date = new Date();
            date.setTime(date.getTime() + (exp * 24 * 60 * 60 * 1000));
            expires = ";expires=" + date.toUTCString(); //No I18N
        }
        var useragent  = navigator.userAgent;
        if(sameSiteHandler.shouldEnableSameSiteNone(useragent)) {
            document.cookie = encodeURIComponent(cname) + "=" + encodeURIComponent(cvalue) + expires + ";path=/;samesite=none;secure";
        }else{
            document.cookie = encodeURIComponent(cname) + "=" + encodeURIComponent(cvalue) + expires + ";path=/";
        }
       

    },
    
    addCookie: function(cname, cvalue, exp) {

        var expires = "";
        if (exp) {
            var date =new Date(exp);
            date.setTime( exp + ( 2 * 60 * 60 * 1000));
            expires = ";expires=" + date.toUTCString(); //No I18N
        }

        var useragent  = navigator.userAgent;
        if(sameSiteHandler.shouldEnableSameSiteNone(useragent)) {
            document.cookie = encodeURIComponent(cname) + "=" + encodeURIComponent(cvalue) + expires + ";path=/;samesite=none;secure";
         }else{
            documee: function(name) {
        document.cookie = encodeURIComponent(name) + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    },
    getCookieValue: function(cname) {

        var name = encodeURIComponent(cname) + "=";
        var cookies = document.cookie;
        var carray = cookies.split(';');

        for (var i = 0; i < carray.length; i++) {

            var cookie = carray[i];
            while (cookie.charAt(0) == ' ') {
                cookie = cookie.substring(1);
            }
            if (cookie.indexOf(name) == 0) {
                return decodeURIComponent(cookie.substring(name.length, cookie.length));
            }
        }
        return "";
    },
    checkCookieExists: function(cname) {

        var cvalue = cookieHandler.getCookieValue(cname);
        if (cvalue == "") {
            return false;
        }
        return true;
    },
 
    exists: function(value) {

            if (value === undefined || value === null || value === "") {
                return false;
            }
            if (typeof value == 'object' && Object.keys(value).length == 0) {
                return false;
            }
            return true;
    },
    generateUniqueId: function(a) {
            var date = new Date();
            var tim

    shouldEnableSameSiteNone: funcgent) {
        return sameSiteHandler.hasWebKitBug(useragent) ||
           sameSiteHandler.dropssameSiteCookies(useragent);
    },
    

    hasWebKitBug: function (useragent) {
        return sameSiteHandler.checkIosVersion(12, useragent) ||
            (sameSiteHandler.checkMacosxVersion(10, 14, useragent) &&
            (sameSiteHandler.checkSafari(useragent) || sameSiteHandler.checkMacEmbeddedBrowser(useragent)));
    },
   

    dropssameSiteCookies: function(useragent) {
        if (sameSiteHandler.checkUcBrowser(useragent)) {
            return !sameSiteHandler.checkUcBrowserVersionAtLeast(12, 13, 2, useragent)
        }
        
        return sameSiteHandler.checkChromiumBased(useragent , 51, 66);
    },
    


    checkIosVersion: function (major, useragent) {
        var regex = /\(iP.+; CPU .*OS (\d+)[_\d]*.*\) AppleWebKit\//;
        var regexmatch = regex.exec(useragent);
       
        try{
             return regexmatch[1] == major;

        }catch(e) {
            return false;
        }    

    },
  
    checkMacosxVersion: function(major, minor, useragent) {
        var regex = /\(Macintosh;.*Mac OS X (\d+)_(\d+)[_\d]*.*\) AppleWebKit\//;
        var regexmatch = regex.exec(useragent);
    
        try{
             return (regexmatch[1] == major) &&
                (regexmatch[2] == minor);
        }catch(e) {
            return false;
        }
       
       

    },

    checkSafari: function(useragent) {
        var safari_regex = "Version\/.* Safari\/";
        return useragent.match(safari_regex) &&
           !sameSiteHandler.checkChromiumBased(useragent,51,66);

    },
   
    checkMacEmbeddedBrowser: function(useragent) {
        var regex = "^Mozilla\/[\.\d]+ \(Macintosh;.*Mac OS X [_\d]+\) "
                     + "AppleWebKit\/[\.\d]+ \(KHTML, like Gecko\)$";
        return useragent.match(regex);
    },
  

    checkChromiumBased: function (useragent , fromversion, toversion ) {
        var regex = "Chrom(e|ium)";
        if(useragent.match(regex)) {
            regex = /Chrom[^ \/]+\/(\d+)[\.\d]* /;
  
            
            var regexmatch = regex.exec(useragent);
            
            try{
                var version = regexmatch[1];
                return (version >= fromversion &&  version <= toversion);

  

  

    checkUcBrowser : function(useragent) {
        var regex = "UCBrowser\/";
        return useragent.match(regex);
    },
    

    checkUcBrowserVersionAtLeast: function ( major,  minor,  build,  useragent) {
        var regex = /UCBrowser\/(\d+)\.(\d+)\.(\d+)[\.\d]* /;
        var regexmatch = regex.exec(useragent);
        
        try{
             var major_version = regexmatch[1];
            var minor_version = regexmatch[2];
            var build_version = regexmatch[3];
            if(major_version != major) {
                return major_version > major;
            }
        
            if(minor_version != minor) {
                return minor_version > minor;
            }
        
            return build_version >= build;
        }catch(e) {
            return false;
        }
       
    }
   

};


if (window.addEventListener) {
    window.addEventListener('message', receiver, false); // NO I18N
} else { // NO I18N
    window.attachEvent('onmessage', receiver); // NO I18N
}
</script>

</html>
circle-inner {
    transform: translate(5.469px, 5.545px);
    opacity: 0;
    fill: #4dfd9a;
}

.zwc-animate-dashboard-tile .zwc-dashboard-graph {
    animation: drawGraph 3s ease forwards;
}

.zwc-animate-dashboard-tile .zwc-dashboard-circle-inner {
    animation: scaleGraphPoint 0.4s ease forwards 1.5s;
}

.zwc-animate-dashboard-tile .zwc-dashboard-circle-outer {
    animation: scaleGraphPoint 0.4s ease forwards 1.8s;
}

.zwc-inbox-time-svg {
    max-width: 320px;
    margin: -160px auto -35px;
    position: relative;
    text-align: center;
    z-index: 1;
}

.zwc-inbox-time-svg.zwc-hidden {
    display: none;
}

.zwc-tti-center-path-anim-el {
    transform: translateY(-20%);
}

.zwc-inbox-time-svg::before {
    content: '';
    /* display: inline-block; */
    position: absolute;
    bottom: 60px;
    left: -1px;
    width: calc(100% + 2px);
    height: 30%;
    /* background-color: lightblue; */
    background-image: linear-gradient(to bottom, transparent, #010213);
}

.zwc-inbox-time-svg p {
    color: #fff;
    position: relative;
    z-index: 2;
    font-family: var(--zf-primary-regular);
    font-size: 34px;
    text-align: center;
    top: -85px;
    display: inline-block;
    background-color: #010213;
}

.zwc-inbox-times {
    margin-bottom: 80px;
}

.zwc-inbox-times.zwc-hidden {
    display: none;
}

.zwc-inbox-times .zwc-inbox-time-values {
    display: flex;
    flex-wrap: wrap;
    grid-gap: 50px 30px;
    justify-content: center;
    /* width: max-content; */
    width: 100%;
    margin: 0 auto;
    position: relative;
    z-index: 2;
    /* margin-bottom: */
}

.zwc-inbox-times p {
    margin-bottom: 0;
    padding: 6px 30px;
    border: 1px solid #56587e;
    border-radius: 20px;
    color: #49f294;
    background-color: #07071e;
    width: max-content;
    font-size: 28px;
    position: relative;
}

.zwc-inbox-times>span {
    margin-top: 30px;
    display: block;
    /* justify-content: center; */
    text-align: center;
    /* bottom: -60px; */
    position: relative;
    z-index: 2;
    font-size: 15px;
    color: #ccc
}

.zwc-inbox-times>span a {
    color: #3480F3;
    text-decoration: underline;
}


.zwc-inbox-times p::before {
    position: absolute;
    top: -30px;
    left: 0;
    right: 0;
    margin: 0 auto;
    color: #fff;
    font-size: 16px;
    text-align: center;
}

.zwc-inbox-time-gmail::before {
    content: 'Gmail'
}

.zwc-inbox-time-apple::before {
    content: 'Apple'
}

.zwc-inbox-time-outlook::before {
    content: 'Outlook'
}

.zwc-inbox-time-aol::before {
    content: 'AOL'
}

.zwc-inbox-time-yahoo::before {
    content: 'Yahoo'
}

.zwc-stats-svg-wrapper {
    /* position: absolute;
    width: 100%;
    left: 0; */
}

.zwc-stats-svg-wrapper svg line {
    opacity: 0;
}

.zwc-stats-svg-wrapper svg line.active {
    opacity: 1;
}

.zwc-inbox-times.zwc-hidden+.zwc-stats-wrapper {
    margin-top: 80px;
}

.zwc-stats-wrapper {
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    /* margin-bottom: 60px; */
    margin-bottom: 0px;
    position: relative;
    /* justify-items: center; */
}

/* .zwc-stats-wrapper:last-child {
    margin-bottom: -50px;
} */

.zw-other-lang .zwc-stats-wrapper {
    margin-bottom: -60px;
}



/* .zwc-stats-wrapper::before {
    content: '';
    height: 100px;
    width: 330px;
    background-image: radial-gradient(#15173e, #08091f);
    grid-row: 1/3;
    grid-column: 1/2;
    justify-self: center;
    align-self: center;
    margin: auto;
    filter: blur(40px);
    border-radius: 50%;
    box-shadow: 0 0 180px 180px rgb(12 13 41);
} */

.zwc-stats-wrapper::before {
    content: '';
    height: 750px;
    width: 1350px;
    background-image: url(//www.zohowebstatic.com/sites/zweb/images/zeptomail/homepage/stats-gradient.svg);
    background-repeat: no-repeat;
    background-position: center;
    /* grid-row: 1/3; */
    background-size: 1000px;
    /* grid-column: 1/2; */
    /* justify-self: center; */
    /* align-self: center; */
    /* margin: auto; */
    border-radius: 50%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -60%);

}

.zwc-stats-wrapper>p {
    grid-row: 1/2;
    grid-column: 1/2;
    text-align: center;
    font-size: 19px;
    margin-bottom: -100px;
    position: relative;
    z-index: 2;

}

.zwc-stats-wrapper>p span {
    font-family: var(--zf-primary-bold);
}

.zwc-brand-logos-wrap {
    /* background-color: #fff; */
    -webkit-backdrop-filter: blur(3px);
    backdrop-filter: blur(3px);
    background-image: linear-gradient(to bottom, rgb(22 23 46 / 40%), rgb(3 4 23 / 40%));
    border-radius: 10px;
    border: 1px solid #1a2248;
    /* height: 100px; */
    /* width: 50px; */
    grid-row: 2/3;
    grid-column: 1/2;
    display: grid;
    grid-auto-flow: column;
    width: 100%;
    margin: 0 auto;
    position: relative;
    z-index: 2;
    /* outline: 1px solid #fff; */
    /* outline-offset: 10px; */
    overflow: hidden;
    position: relative;
    top: -4px;
    max-width: 820px;
    padding: 0 20px;
}

.zwc-brand-logos-wrap>div {
    display: grid;
    grid-gap: 20px;
    align-content: center;
    /* grid-template-rows: 1fr; */
    /* grid-template-columns: repeat(7, max-content); */
    /* grid-auto-rows: 0px; */
    grid-auto-flow: column;
    justify-items: center;
}

.zwc-brand-logos-wrap>.zwc-brand-logos-box-clone {
    display: none;
}

.zwc-brand-logos-wrap>div>span {
    /* width: 150px;
    height: 100px; */
    /* background-color: #aaa; */
    display: grid;
    font-size: 0px;
    padding: 10px;
    grid-template-rows: 1fr;
    grid-auto-rows: 0px;

}

.zwc-brand-logos-wrap>div>span::before {
    content: '';
    width: 150px;
    height: 100px;
    /* background-color: #000; */
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
}


.zwc-brand-logos-wrap>div>span:nth-child(1)::before {
    width: 150px;
    background-image: url('//www.zohowebstatic.com/sites/zweb/images/otherbrandlogos/the-alternative-bank-white.svg');
}

.zwc-brand-logos-wrap>div>span:nth-child(2)::before {
    width: 180px;
    background-image: url('//www.zohowebstatic.com/sites/zweb/images/otherbrandlogos/sakthi-infra-tex-white.png');
}

.zwc-brand-logos-wrap>div>span:nth-child(3)::before {
    width: 120px;
    background-image: url('//www.zohowebstatic.com/sites/zweb/images/otherbrandlogos/sterling-bank-white.png');
}

.zwc-brand-logos-wrap>div>span:nth-child(4)::before {
    width: 140px;
    background-image: url('//www.zohowebstatic.com/sites/zweb/images/otherbrandlogos/capitalvia.png');
}

.zwc-stats-values {
    grid-row: 2/3;
    grid-column: 1/2;
    display: grid;
    position: relative;
    grid-template-columns: repeat(4, 1fr);
    /* justify-content: center; */
    justify-items: center;
    text-align: center;
    grid-gap: 30px;
    max-width: 1000px;
    width: 90%;
    margin: 0 auto;
}

.zwc-stats-values p {
    margin: 0;
}

.zwc-stats-values>div p:first-child {
    color: #49fc98;
    font-size: 57px;
    line-height: 1;
}

.zwc-stats-svg-wrapper {
    grid-row: 2/3;
    grid-column: 1/2;
    transform: scale(1.2);
    opacity: 0.5;
}

.zwc-testimonial-wrap {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 300px;
    grid-template-rows: max-content max-content;
    grid-gap: 40px;
    max-width: 1100px;
    margin: 60px auto 0;
    align-items: start;
}

.zwc-testimonial-wrap>a {
    grid-row: 2/3;
    grid-column: 2/3;
    text-align: center;
    text-decoration: underline;
    font-size: 21px;
    font-family: var(--zf-primary-bold);
    color: #3480F3;
    position: relative;
    top: -20px;
    justify-self: left;
}

.zwc-testimonial-content-wrap {
    position: relative;
    padding-right: 40px;
    grid-row: 1/3;
}

.zwc-testimonial-content-wrap::before {
    content: 'CUSTOMER QUOTES';
    color: #2e49db;
    font-family: var(--zf-secondary-medium);
    top: -40px;
    position: absolute;
    left: 0;
    font-size: 16px;
    letter-spacing: 2.5px;
}

.zwc-testimonial-content-wrap::after {
    content: '';
    position: absolute;
    height: 60%;
    width: 1px;
    background-color: #56587E;
    right: 0;
    top: 70px;
    /* bottom: 80px; */
    /* margin: auto; */
}

.zwc-testimonial-content {
    font-family: var(--zf-secondary-medium);
    font-size: 30px;
    margin: 0;

}

p.zwc-testimonial-content {
    line-height: 1.6;
}

.zwc-testimonial-details {
    margin-top: 40px;
    display: grid;
    grid-template-columns: 1fr max-content;
    justify-content: space-between;
    align-items: center;
}

.zwc-testimonial-details::after {
    content: '';
    width: 160px;
    height: 50px;
    /* background-color: lightblue; */
    grid-row: 1/3;
    grid-column: 2/3;
    /* background-image: url(//www.zohowebstatic.com/sites/zweb/images/otherbrandlogos/iifl.svg); */
    background-size: 75% auto;
    border-radius: 8px;
    background-position: center;
    background-repeat: no-repeat;
    align-self: center;
    background-color: #fff;
    /* padding: 20px; */
}

[data-testimonial="1"] .zwc-testimonial-details::after {
    width: 137px;
    height: 70px;
    background-image: url('//www.zohowebstatic.com/sites/zweb/images/otherbrandlogos/india-cements.png');
    /* align-self: start; */
}

[data-testimonial="2"] .zwc-testimonial-details::after {
    width: 160px;
    height: 60px;
    background-image: url('//www.zohowebstatic.com/sites/zweb/images/otherbrandlogos/iifl.svg');
}

[data-testimonial="3"] .zwc-testimonial-details::after {
    width: 142px;
    height: 65px;
    background-image: url('//www.zohowebstatic.com/sites/zweb/images/otherbrandlogos/alice-blue.png');
}

.zwc-testimonial-author {
    color: #49FD98;
    font-family: var(--zf-primary-bold);
    font-size: 22px;
    margin-bottom: 5px;
}

.zwc-testimonial-author-designation {
    line-height: 1.5
}

.zwc-testimonial-author-designation span {
    display: block;
}

.zwc-testimonial-content-wrap .slick-dots {
    width: fit-content;
}

.zwc-testimonial-content-wrap .slick-dots li {
    border: none;
    margin: 0 8px;
    transition: none;
    /* outline: 1px solid transparent; */
    /* outline-offset: 0px; */
    width: 12px;
    height: 12px;
    position: relative;
}

.zwc-testimonial-content-wrap .slick-dots li::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    height: 100%;
    width: 100%;
    transform: translate(-50%, -50%);
    border: 1px solid #fff;
    border-radius: 100%;
    opacity: 0;
    transition: height 0.3s linear, width 0.3s linear;
}

.zwc-testimonial-content-wrap .slick-dots li.slick-active {
    background: #3480F3;
}

.zwc-testimonial-content-wrap .slick-dots li.slick-active::before {

    height: calc(100% + 14px);
    width: calc(100% + 14px);
    opacity: 1;
}

.zwc-testimonial-video-wrap {
    /* position: relative; */
    /* top: -50px; */
    margin-top: 10px;
    cursor: pointer;
    position: relative;
    line-height: 0;
    /* overflow: hidden; */
    border-radius: 30px;
}

.zwc-testimonial-video-wrap::before {
    content: 'VIDEO TESTIMONIAL';
    position: absolute;
    top: -40px;
    font-size: 16px;
    letter-spacing: 2.5px;
    color: #2f4add;
    left: 0;
    font-family: var(--zf-secondary-medium);
}

.zwc-video-speaker-details>p:last-child {
    margin-bottom: 0;
}

.zwc-video-speaker-details {
    margin-top: 30px;
}

.zwc-testimonial-video-wrap img {
    filter: brightness(0.8) grayscale(1);
    transition: filter 0.5s ease;
    border-radius: 30px;
}

.zwc-testimonial-video-wrap:hover img {
    filter: brightness(1) grayscale(0);
}


.zwc-testimonial-video-wrap>span::before,
.zwc-testimonial-video-wrap>span::after,
.zwc-testimonial-video-wrap>span>span {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    border-radius: 50%;
}

.zwc-testimonial-video-wrap>span::before,
.zwc-testimonial-video-wrap>span::after {
    content: '';
}



.zwc-testimonial-video-wrap>span::before {
    height: 110px;
    width: 110px;
    background-color: rgba(255, 255, 255, 0.2);
    animation: growAndFade 2.5s ease-in-out 0s infinite;
}

.zwc-testimonial-video-wrap>span::after {
    height: 88px;
    width: 88px;
    background-color: rgba(255, 255, 255, 0.4);
    animation: growAndFade 2.5s ease-in-out infinite;
}

/* .zwc-testimonial-video-wrap>span::after {
    height: 66px;
    width: 66px;
    background-color: rgba(255, 255, 255, 0.8);
} */

.zwc-testimonial-video-wrap>span>span {
    height: 66px;
    width: 66px;
    background-color: #d1d1d1;
    z-index: 2;
}

.zwc-testimonial-video-wrap>span>span::after {
    content: '';
    height: 19px;
    width: 15px;
    /* clip-path: polygon(100% 50%, 0 0, 0 100%);
    background-color: #2D47D9; */
    position: absolute;
    top: 0;
    left: 5px;
    right: 0;
    bottom: 0;
    margin: auto;
    z-index: 5;
    background-image: var(--zeptoSprite);
    background-size: 520px auto;
    background-position: -357px -67px;
}

/* ------------- Integration section styles start ------------- */

.zwc-integration-section {
    padding: 120px 0;
    max-width: 1660px;
    margin: 0 auto;
    /* background-color: lightblue; */
    border-radius: 30px;
    position: relative;
    overflow: hidden;
    width: 96%;
}

.zwc-integration-section .content-wrap {
    padding-left: 30px;
}

.zwc-integration-section ::-webkit-scrollbar {
    width: 2px;
    height: 5px;
    /* background-color: red; */

}

.zwc-integration-section ::-webkit-scrollbar-track {
    /* box-shadow: inset 0 0 5px red; */
    border-radius: 10px;
}

/* Handle */
.zwc-integration-section ::-webkit-scrollbar-thumb {
    background-image: radial-gradient(#49fd9887, transparent);
    border-radius: 10px;
}

.zwc-integration-section ::-webkit-scrollbar-thumb:horizontal {
    background: #49fd9887;
}

/* Handle on hover */
.zwc-integration-section ::-webkit-scrollbar-thumb:hover {
    background-image: radial-gradient(#49fd9887, transparent);
}

.zwc-integration-section ::-webkit-scrollbar-corner {
    background: rgba(0, 0, 0, 0);
}

@supports(scrollbar-color: red blue) {
    .zwc-integration-section {
        scrollbar-color: #2a2c4f transparent;
        scrollbar-width: thin;
    }
}

.zwc-integration-section::before {
    content: '';
    height: 65vw;
    width: 80vw;
    max-width: 1395px;
    max-height: 1135px;
    background-image: radial-gradient(#1D2381, #15173E, #010213);
    /* background-color: #1D2381; */
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin: auto;
    transform: translateY(-50%);
    border-radius: 50%;
    box-shadow: 0 0 175px 175px #0d0e2c;
}

.zwc-integration-heading-wrap {
    display: grid;
    grid-template-columns: 1fr 1.18fr;
    align-items: center;
    margin-bottom: 40px;
}

.zwc-integration-content-wrap {
    display: flex;
    /* grid-gap: 40px; */
    align-items: center;
    justify-content: space-between;
}

.zwc-integration-heading-wrap>p {
    max-width: 480px;
    font-size: 18px;
}

.zwc-integration-content {
    width: 37.5%;
    max-width: 420px;
}

.zwc-integration-content>div {
    margin-bottom: 65px;
}

/* .zwc-integration-content>div>h4 {
    display: grid;
    grid-template-columns: max-content 1fr;
    align-items: center;
} */

.zwc-integration-content>div>h4::before {
    content: '';
    height: 30px;
    width: 30px;
    background-image: var(--zeptoSprite);
    /* background-color: lightblue; */
    display: inline-block;
    margin-right: 12px;
    position: relative;
    top: 6px;
    background-size: 480px auto;
    transform: scale(0.85);
}

.zwc-integration-content>div:first-child>h4::before {
    background-position: -38px 0;
}

.zwc-integration-content>div:last-child>h4::before {
    background-position: -68px 0;
}

.zwc-code-integration-wrap {
    width: 62.5%;
    /* max-height: 410px; */
    max-width: 680px;
}

.zwc-code-integration-wrap-inner {
    background-image: linear-gradient(to bottom, #16173b, #03030d);
    border-radius: 30px;
    overflow: hidden;
    padding: 35px 0px 25px 30px;
    border: 1px solid #56587e;
    position: relative;
}

.zwc-code-copied-info {
    position: absolute;
    top: 0;
    /* right: 0; */
    /* bottom: 0; */
    left: 0;
    height: 100%;
    width: 100%;
    /* margin: auto; */
    z-index: 5;
    /* transform: translate(-50%, -50%); */
    text-align: center;
    display: grid;
    align-items: center;
    -webkit-backdrop-filter: blur(4px) brightness(0.5);
    backdrop-filter: blur(4px) brightness(0.5);
    border-radius: 30px;
    opacity: 0;
    visibility: hidden;
    font-size: 20px;
    font-family: var(--zf-primary-bold);
}

@keyframes fadeInOut {
    0% {
        opacity: 0;
        visibility: hidden;
    }

    50% {
        opacity: 1;
        visibility: visible;
    }

    100% {
        opacity: 0;
        visibility: hidden;
    }

}

.zwc-code-copied-info.zwc-active {

    animation: fadeInOut 1.5s ease;
}

.zwc-integration-code {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    max-height: 410px;
    position: relative;
}

code[class*="language-"],
pre[class*="language-"] {
    color: #a4a4dd;
}

/* .zwc-integration-code .zwc-copy-btn {
    position: absolute;
    z-index: 5;
    top: 0;
    right: 15px;
    cursor: pointer;
    padding: 10px 20px;
    border-radius: 15px;
    min-width: 85px;
    text-align: center;
    background-image: linear-gradient(to bottom, #14142f, #131532);
} */

.zwc-integration-code .zwc-copy-btn {
    display: grid;
    position: absolute;
    font-size: 0;
    z-index: 5;
    top: 10px;
    right: 25px;
    cursor: pointer;
    padding: 18px 16px 12px 22px;
    border-radius: 8px;
    min-width: 0;
    text-align: center;
    /* background-image: linear-gradient(to bottom, #14142f, #131532); */
    background-color: #2a2c4f;
    transition: background-color 0.3s ease;
    transform: scale(0.75);
}

.zwc-integration-code .zwc-copy-btn.zwc-copied {
    background-color: #1c1e34;
}

.zwc-integration-code .zwc-copy-btn::before,
.zwc-integration-code .zwc-copy-btn::after {
    grid-row: 1/2;
    grid-column: 1/2;
    content: '';
}


.zwc-integration-code .zwc-copy-btn::before {
    height: 26px;
    width: 20px;
    border: solid #ccc;
    border-width: 1px 0 0 1px;
    display: inline-block;
    border-radius: 4px 0 0 0;
    transform: translate(-5px, -5px);
}

.zwc-integration-code .zwc-copy-btn::after {
    height: 25px;
    width: 20px;
    border: 1px solid #ccc;
    display: inline-block;
    border-radius: 4px;
}

.zwc-integration-code pre {
    grid-column: 1/2;
    grid-row: 1/2;
}

.zwc-integration-code-lang {
    display: grid;
    grid-auto-flow: column;
    justify-items: center;
    grid-gap: 15px;
    max-width: 520px;
    margin: 0 auto 10px;
    transform: translateX(-15px);
}

.zwc-integration-code-lang span[data-lang] {
    color: #bbb;
    padding: 4px 15px;
    cursor: pointer;
    border-radius: 10px;
    position: relative;
    z-index: 1;
    font-size: 0px;
    transition: color 0.4s ease;
}

.zwc-integration-code-lang span[data-lang]::before {
    font-size: 17px;
}

.zwc-integration-code-lang span[data-lang="curl"]::before {
    content: 'Curl';
}

.zwc-integration-code-lang span[data-lang="js"]::before {
    content: 'Node.js';
}

.zwc-integration-code-lang span[data-lang="c"]::before {
    content: 'C#';
}

.zwc-integration-code-lang span[data-lang="python"]::before {
    content: 'Python';
}

.zwc-integration-code-lang span[data-lang="php"]::before {
    content: 'PHP';
}

.zwc-integration-code-lang span[data-lang="java"]::before {
    content: 'Java';
}

.zwc-integration-code-lang .zwc-code-lang-active[data-lang] {
    /* color: #49FD98; */
    color: #000;
    /* background-color: #000003; */
    font-family: var(--zf-primary-semibold);
}

.zwc-integration-code-lang span.zwc-tab-slider {
    position: absolute;
    width: 65px;
    height: 100%;
    /* background-color: #000003; */
    background-color: #4dfd9a;
    border-radius: 10px;
    left: 2px;
    opacity: 1;
    visibility: visible;
    transition: width 0.4s ease, left 0.4s ease, opacity 0.4s ease, visibility 0.4s ease;
}

.zwc-integration-code .zwc-code-active {
    opacity: 1;
    z-index: 2;
}



.zwc-integration-code pre {
    opacity: 0;
}

:not(pre)>code[class*="language-"],
pre[class*="language-"] {
    background: none;
}


/* ------------- integration section styles end ------------- */

/* ------------- Pricing section styles start ------------- */
.zwc-pricing-section {
    padding: 60px 0 120px;
    position: relative;
}

.zwc-pricing-section::after {
    content: '';
    height: 1px;
    width: 90%;
    max-width: 800px;
    background-color: #30324e;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    bottom: 0;
}

/* .zwc-price-tax-declaration {
    text-align: center;
    font-size: 15px;
    color: #9394AF;
    margin: 20px 0 0;
} */

.zwc-price-tax-declaration {
    font-size: 14px;
    margin: 20px 0 0;
    text-align: center;
}

.zwc-pricing-heading-content {
    margin-bottom: 50px;
}

.zwc-pricing-heading-content {
    text-align: center;
    /* display: none; */
}

.zwc-pricing-heading-content h3 sup {
    font-size: 30px;
}

/* body.ccode-in .zwc-pricing-heading-country-in {
    display: block;
}

body.ccode-us .zwc-pricing-heading-country-us {
    display: block;
}

body:not(.ccode-in, .ccode-us) .zwc-pricing-heading-country-other {
    display: block;
} */

.zwc-pricing-heading-content>p {
    font-size: 22px;
    color: #9394af;
    margin-bottom: 5px;
    font-family: var(--zf-primary-semibold);
}

.zwc-pricing-heading-content>h3>span {
    color: #49fc98;
    display: inline-block;
}

.zwc-pricing-cacl-wrapper {
    display: grid;
    grid-template-columns: 475px minmax(380px, max-content);
    max-width: 1000px;
    justify-content: space-between;
    background-image: linear-gradient(to bottom, #0C0D26, #010213);
    border: 1px solid #56587e;
    border-radius: 25px;
    padding: 20px;
    margin: 0 auto;
    grid-gap: 20px;
}

.zwc-pricing-left h4 {
    margin-bottom: 80px;
}

.zwc-pricing-range-slider {
    position: relative;
    max-width: 500px;
}

.zwc-plan-details>p {
    font-size: 17px;
    margin-bottom: 5px;
}

/* .zwc-pricing-range-slider input[type="range"] {
    appearance: none;
    -webkit-appearance: none;
    height: 4px;
    width: calc(100% + 12.5px);
    margin-bottom: 30px;
    position: relative;
    background-image: linear-gradient(to right, #0A0B26, #1D237F);
} */


.zwc-pricing-range-slider input[type="range"] {
    appearance: none;
    -webkit-appearance: none;
    height: 4px;
    width: calc(100% + 24px);
    /* padding: 0 12px; */
    /* margin: 0 -12.5px; */
    background-color: transparent;
    margin-bottom: 30px;
    position: relative;
    background-image: linear-gradient(to right, #0A0B26, #1D237F);
    /* margin-top: 80px; */
    transform: translateX(-12.5px);
}


/* .zwc-pricing-range-slider input[type="range"]::moz-range-track {
    background-image: linear-gradient(to right, #0A0B26, #1D237F);
} */

.zwc-pricing-range-slider input[type="range"]::-webkit-slider-runnable-track {
    /* background-color: #fff; */
    /* margin: 0 -12.5px; */
}

.zwc-pricing-range-slider input[type="range"]::-moz-range-track {
    /* background-color: #fff; */
    /* margin: 0 12.5px; */
    /* background-color: #fff; */
}

.zwc-pricing-range-slider input[type="range"]::-webkit-slider-thumb {
    appearance: none;
    -webkit-appearance: none;
    height: 25px;
    width: 25px;
    background-color: #000110;
    border-radius: 50%;
    border: 1px solid #666DFC;
    cursor: pointer;
    box-sizing: border-box;
    box-shadow: 0 0 15px 1px rgb(102 109 252 / 55%);
    z-index: 2;
}

.zwc-pricing-range-slider input[type="range"]::-moz-range-thumb {
    background-color: #000110;
    height: 25px;
    width: 25px;
    border-radius: 50%;
    border: 1px solid #666DFC;
    cursor: pointer;
    box-sizing: border-box;
    box-shadow: 0 0 15px 1px rgb(102 109 252 / 55%);
    z-index: 2;
}

.zwc-pricing-range-slider .zwc-range-value {
    content: '';
    position: absolute;
    padding: 5px 10px;
    background-color: #161638;
    border-radius: 5px;
    top: -45px;
    left: 0;
    color: #656DFC;
    font-size: 15px;
    font-family: var(--zf-primary-bold);
    transform: translateX(-50%);
    white-space: nowrap;
}

.zb-firefox .zwc-pricing-range-slider .zwc-range-value {
    top: -55px;
}

/* .zwc-pricing-range-slider .zwc-range-value {
    content: '';
    position: absolute;
    padding: 5px 10px;
    background-color: #161638;
    border-radius: 5px;
    top: auto;
    bottom: 0;
    margin: 0px 0 25px 0;
    left: 0;
    color: #656DFC;
    font-size: 15px;
    font-family: var(--zf-primary-bold);
    transform: translate(-50%, -100%);
    white-space: nowrap;
} */



.zwc-pricing-range-slider .zwc-range-value::before {
    content: '';
    background-color: #161638;
    height: 10px;
    width: 10px;
    transform: rotate(45deg);
    position: absolute;
    left: 0;
    right: 0;
    bottom: -5px;
    margin: auto;



}

.zwc-pricing-left {
    padding: 20px 20px 20px 50px;
}

.zwc-plan-details>span {
    color: #919191;
    font-size: 15px;
}

.zwc-pricing-right {
    padding: 30px;
    text-align: center;
    background-color: #010213;
    border-radius: 20px;
    display: grid;
    justify-items: center;
    grid-template-rows: repeat(3, max-content);
    align-content: center;
}

.zwc-pricing-right a {
    padding: 8px 24px;
    background-image: linear-gradient(to right bottom, #1A1C4B, #151639);
    border-radius: 100px;
    font-size: 14px;
    /* display: grid; */
    /* align-items: center; */
    /* color: #656DFC; */
    color: #fff;

}

.zwc-pricing-value {
    color: #49FD98;
    font-size: 72px;
    font-family: var(--zf-primary-bold);
    margin-bottom: 10px;
}

.zwc-price-symbol {
    font-size: 40px;
}

.zwc-pricing-value+p {
    font-size: 14px;
    color: #919191;
}

.zwc-plan-period {
    display: grid;
    grid-template-columns: max-content max-content;
    font-size: 14px;
    justify-content: center;
    margin-bottom: 10px;
    /* grid-gap: 5px; */
}

.zwc-plan-period span {
    padding: 8px 15px;
    cursor: pointer;
    color: #919191;
    text-align: center;
}



.zwc-plan-period span.active {
    background-color: #0C0D26;
    color: #49FD98;
    border-radius: 10px;
}

.zwc-explanation-section {
    padding: 115px 0;
    margin-top: 25px;
}

.zwc-explanation-section-heading {
    text-align: center;
    color: #9394AF;
    font-size: 23px;
    font-family: var(--zf-secondary-semibold);
    /* margin-bottom: 50px; */
    width: 95%;
    margin: 0 auto 50px;
    line-height: 1.6;
}

.zwc-explanation-section .content-wrap {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 50px;
    max-width: 1200px;
    /* border-radius: 30px; */
    /* overflow: hidden; */
}

.zwc-explanation-section .content-wrap>div {
    transform-style: preserve-3d;
    /* perspective: 700px; */
    padding: 1px;
    overflow: hidden;
    border-radius: 30px;
    will-change: transform;
}

.zwc-explanation-section .content-wrap>div::before {
    content: '';
    position: absolute;
    /* top: -2px;
    left: -2px;
    height: calc(100% + 4px);
    width: calc(100% + 4px); */
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    /* background-color: #56587e; */
    background-image: linear-gradient(to right bottom, #0a0b25, #56587e);
    z-index: 1;
    border-radius: 30px;
    /* opacity: 0;
    transition: opacity 0.3s ease; */
}

/* .zwc-explanation-section .content-wrap>div:hover::before {
    opacity: 1;
} */

/* @keyframes borderSlide {
    0% {
        left: 0;
        top: 0;
    }

    25% {
        left: 100%;
        top: 0;
    }

    50% {
        top: 100%;
        left: 100%;
        opacity: 0;
    }

    75% {
        left: 0;
        top: 100%;
        opacity: 0;
    }

    100% {
        top: 0;
        left: 0;
    }
} */

@keyframes borderSlide {
    0% {
        left: 0;
        top: 50%;
    }

    /* 25% {
        left: 0;
        top: 30%;
    } */

    40% {
        left: 0;
        top: 0;
    }

    45% {
        left: 100%;
        top: 0;
    }

    55% {
        left: 100%;
        top: 100%;
        opacity: 1;
    }

    /* 55% {
        left: 100%;
        top: 30%;
    } */

    60% {
        left: 50%;
        top: 100%;
        opacity: 0
    }

    65% {
        left: 0%;
        top: 100%;
        opacity: 0;
    }

    /* 90% {
        opacity: 1;
    } */

    100% {
        left: 0;
        top: 50%;
        opacity: 1;
    }
}

.zwc-explanation-section .content-wrap>div::after {
    content: '';
    position: absolute;
    width: 20%;
    height: 20%;
    background-image: radial-gradient(rgb(77 253 154 / 100%), transparent 60%);
    top: 0;
    left: 10%;
    border-radius: 100%;
    transform: translate(-50%, -50%);
    z-index: 2;

    opacity: 0;
}

.zwc-explanation-section .content-wrap>div:hover::after {
    opacity: 1;
    animation: borderSlide 5s linear infinite;
}

.zwc-explanation-section .content-wrap>div>div {
    position: relative;
    /* border: 2px solid #2c2c2c; */
    overflow: hidden;
    border-radius: 30px;
    background-color: rgb(10 11 37);
    z-index: 3;
    /* perspective: 700px !important; */
    /* transition: transform 0.2s ease-out; */
}

/* .zwc-explanation-section .content-wrap>div>div::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: #2c2c2c;
} */

/* .zwc-explanation-section .content-wrap>div>div{

} */

.zwc-explanation-section .content-wrap>div>div>div {
    position: relative;
}

.zwc-how-content>p {
    max-width: 450px;
}

.zwc-explaining-wrapper-what {
    grid-column: 1/3;
}

.zwc-explaining-what {

    display: grid;
    grid-template-columns: 1fr 1fr;
    /* background-color: #1b1b1b; */
    /* border-radius: 30px; */
    align-items: center;
    grid-gap: 50px;
    padding: 55px 65px;
}

.zwc-what-img {
    height: 450px;
    width: 100%;
    background-color: #000;
    border-radius: 20px;
    display: grid;
    align-items: center;
    overflow: hidden;
    position: relative;
    grid-template-rows: max-content max-content;
    align-content: center;
    /* justify-items: center; */
}

.zwc-what-img>p {
    font-size: 15px;
    color: #56587E;
    justify-self: center;
    position: relative;
    top: 12px;
    font-size: 14px;
    /* position: absolute; */
    /* left: 0; */
    /* right: 0; */
    /* margin: auto; */
    text-align: center;
    /* bottom: 0; */
    grid-row: 2/3;
    grid-column: 1/2;
}

.zwc-what-img-logo {
    height: 180px;
    width: 180px;
    border-radius: 20px;
    border: 1px solid #666DFC;
    box-shadow: 0 0 50px 5px #656DFC76;
    position: relative;
    top: -4px;
    z-index: 2;
    grid-row: 1/3;
    grid-column: 1/2;
    justify-self: center;
    background-image: linear-gradient(#0C0D26, #03041C);
    transform: scale(0.88);
}

.zwc-what-img-logo::after {
    /* content: ''; */
    height: 70%;
    width: 70%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background-image: url('//www.zohowebstatic.com/sites/zweb/images/zeptomail/zeptomail-custom-icon.svg');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
}

.what-svg-wrapper {
    grid-row: 1/3;
    grid-column: 1/2;
    justify-self: center;
    width: 125%;
    transform: scale(1, 0.9);
}

.zwc-what-content {
    max-width: 450px;
}


.zwc-explaining-how {
    background-color: #1b1b1b;

    padding: 55px 50px;
    height: 100%;
}

/* .zwc-how-img-wrapper {
    max-width: calc((3 * 150px) + (2 * 10px));
    margin: 0 0 45px auto;
    overflow: hidden;
} */

.zwc-how-img-wrapper {
    /* max-width: calc((3 * 150px) + (2 * 10px)); */
    margin: 0 0 45px auto;
    overflow: hidden;
}

/* .zwc-how-img {
    display: grid;
    grid-template-columns: 150px;
    grid-auto-flow: column;
    grid-gap: 10px;
    position: relative;
    transition: transform 1s ease
} */

.zwc-how-img div[data-slide]:not(:first-child) {
    /* display: none; */
    /* display: grid;
    grid-template-columns: 150px;
    grid-auto-flow: column;
    grid-gap: 10px;
    position: relative;
    transition: transform 1s ease */
}

.zwc-how-img.slick-initialized div[data-slide]:not(:first-child) {
    /* display: block; */
}

/* .zwc-how-img .zwc-how-img-slide {
    background-image: linear-gradient(to bottom, #7A7CB4, #2C2E5A);
    display: grid;
    width: 150px;
    justify-items: center;
    padding: 20px 0px;
    position: relative;
    border-radius: 20px;
    overflow: hidden;
    transition: transform 1s ease, opacity 1s ease, visibility 1s ease;
} */



.zwc-how-img .zwc-how-img-slide {
    background-image: linear-gradient(to bottom, #7A7CB4, #2C2E5A);
    display: grid;
    justify-items: center;
    padding: 20px 0px 12px;
    position: relative;
    border-radius: 20px;
    overflow: hidden;
    margin: 0 5px;
    transition: transform 0.6s ease, visibility 1s ease, opacity 0.4s ease;
}

.zwc-how-img .zwc-how-img-slide.zwc-slide-active {
    transform: scale(0.7) translateX(30px);
    transform-origin: right;
    opacity: 0.6;
}

.zwc-how-img .zwc-how-img-slide.zwc-slide-hidden {
    transform: scale(0.7) translateX(30px);
    transform-origin: right;
    opacity: 0;
    visibility: hidden;
}

.zwc-how-img .zwc-how-img-slide::after {
    content: '';
    background-image: linear-gradient(to top, #171736, #0b0c27);
    position: absolute;
    width: calc(100% - 2px);
    height: calc(100% - 2px);
    align-self: center;
    border-radius: 20px;
}

.zwc-how-img .zwc-how-img-slide * {
    position: relative;
    z-index: 2;
}

.zwc-how-img .zwc-how-img-slide p {
    margin: 0;
    font-size: 15px;
}

.zwc-how-img .zwc-how-img-slide span:last-child {
    font-size: 12px;
    padding: 4px 18px;
    background-color: #0B0C26;
    border-radius: 100px;
    margin-top: 8px;
}

.zwc-how-img .zwc-how-img-slide::before {
    content: '';
    /* background-color: lightblue; */
    height: 50px;
    width: 50px;
    margin: 10px 0px;
    position: relative;
    z-index: 2;
    background-image: var(--zeptoSprite);
    background-size: 490px auto;
}

.zwc-how-img .zwc-how-img-slide[data-slide="1"]::before,
.zwc-how-img .zwc-how-img-slide[data-slide="4"]::before {
    background-position: -772px 0;
}

.zwc-how-img .zwc-how-img-slide[data-slide="2"]::before,
.zwc-how-img .zwc-how-img-slide[data-slide="5"]::before {
    background-position: -820px 0;
}

.zwc-how-img .zwc-how-img-slide[data-slide="3"]::before,
.zwc-how-img .zwc-how-img-slide[data-slide="6"]::before {
    background-position: -869px 0;
}

.zwc-explaining-why {
    background-color: #1b1b1b;
    /* border-radius: 30px; */
    padding: 30px 50px;
    height: 100%;
}

.zwc-explaining-why .zwc-why-content h3 {
    max-width: 350px;
}

/* .zwc-explaining-why .zwc-why-img>span {
    background-image: linear-gradient(to bottom, #0C0D26, #03041C);
    padding: 25px 15px;
    position: relative;
    z-index: 5;
    border-radius: 20px;
} */

.zwc-explaining-why .zwc-why-img>span {
    background-image: linear-gradient(to bottom, #0C0D26, #03041C);
    padding: 25px 24px;
    position: relative;
    z-index: 5;
    border-radius: 20px;
    font-size: 100px;
    line-height: 1;
    font-family: var(--zf-primary-extrabold);
    color: #4DFD9A;
    text-shadow: -2px -2px 10px rgb(77 253 154 / 30%), 2px 2px 10px rgb(77 253 154 / 30%);
}


@keyframes growFadeOutOuter {
    0% {
        transform: scale(1);
        opacity: 1;
        border-radius: 20px;
    }

    100% {
        transform: scale(1.38);
        opacity: 0;
        border-radius: 30px;
    }
}

.zwc-explaining-why .zwc-why-img>span::before {
    content: '';
    width: calc(100% + 2px);
    height: calc(100% + 2px);
    border: 1px solid #666DFC;
    position: absolute;
    left: -1px;
    top: -1px;
    border-radius: 20px;
    opacity: 1;
    animation: growFadeOutOuter 2.5s ease-in-out 1.8s infinite;
}

/* .zwc-explaining-why .zwc-why-img>span::after {
    content: '8x';
    font-size: 100px;
    font-family: var(--zf-primary-bold);
    line-height: 1;
    color: #4DFD9A;
    filter: drop-shadow(0px 0px 15px #4DFD9A88);
} */

.zwc-explaining-why .zwc-why-img>span::after {
    content: 'x';
    font-size: 75px;
    font-family: var(--zf-primary-bold);
    line-height: 1;
    color: #4DFD9A;
    filter: drop-shadow(0px 0px 15px #4DFD9A88);
    font-family: var(--zf-primary-extrabold);
}

.zwc-explaining-why .zwc-why-img {
    width: fit-content;

    border: 1px solid #666DFC;
    border-radius: 20px;
    display: inline-block;

    margin: 30px 0 50px 5px;
    position: relative;
    display: grid;
    justify-items: center;
    align-items: center;
    filter: drop-shadow(0 3px 45px #656DFC76);
}

/* @keyframes growFadeOutOuter {
    0% {
        transform: scale(1);
        opacity: 1;
        border-radius: 20px;
    }

    100% {
        transform: scale(1.38);
        opacity: 0;
        border-radius: 30px;
    }
} */

@keyframes growFadeOutInner {
    0% {
        transform: scale(1);
        opacity: 1;
        border-radius: 20px;
    }

    100% {
        transform: scale(1.25);
        opacity: 0;
        border-radius: 25px;
    }
}

.zwc-explaining-why .zwc-why-img::before {
    content: '';
    position: absolute;
    border: 1px solid #666DFC;
    /* height: calc(100% + 25px); */
    /* width: calc(100% + 25px); */
    width: 100%;
    height: 100%;
    /* opacity: 0.3; */
    border-radius: 30px;
    filter: drop-shadow(0 3px 45px #656DFC76);
    animation: growFadeOutOuter 2.5s ease-in-out infinite;
}

.zwc-explaining-why .zwc-why-img::after {
    content: '';
    position: absolute;
    border: 1px solid #666DFC;
    /* height: calc(100% + 50px); */
    /* width: calc(100% + 50px); */
    width: 100%;
    height: 100%;
    /* opacity: 0.6; */
    border-radius: 25px;
    filter: drop-shadow(0 3px 45px #656DFC76);
    animation: growFadeOutOuter 2.5s ease-in-out 0.9s infinite;
}

.zwc-border-slider {
    position: absolute;
}

/* .zwc-glow-box {
    position: absolute;
    height: 800px;
    width: 800px;
    background-image: radial-gradient(#1d2168, rgb(10 11 37));
    border-radius: 50%;
    box-shadow: 0 0 100px 100px rgb(16 17 56);
    top: 0;
    left: 0;
    filter: blur(30px);
    opacity: 0;
    transition: opacity 1s ease;
    transform: translate(-50%, -50%);
} */

.zwc-glow-box {
    position: absolute;
    height: 1200px;
    width: 1200px;
    background-image: url('//www.zohowebstatic.com/sites/zweb/images/zeptomail/homepage/explain-gradient.svg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-radius: 50%;
    top: 0;
    left: 0;
    opacity: 0;
    transition: opacity 1s ease;
    transform: translate(-50%, -50%);
}

/* .zwc-explaining-what .zwc-glow-box:not(.active) {
    left: 85% !important;
    top: 75% !important;
}

.zwc-explaining-how .zwc-glow-box:not(.active) {
    left: 70% !important;
    top: 70% !important;
}

.zwc-explaining-why .zwc-glow-box:not(.active) {
    left: 70% !important;
    top: 70% !important;
} */

.zwc-glow-box:not(.active) {
    transition: left 1s ease-in-out, top 1s ease-in-out;
}

.zwc-glow-box.active {
    opacity: 1;
}

.zwc-features-section {
    max-width: 1660px;
    margin: 0 auto;
    padding: 120px 0 130px;
    /* background-color: #194D40; */
    position: relative;
    z-index: 2;
    border-radius: 30px;
    /* background-color: #123733; */
    position: relative;
    overflow: hidden;
    width: 96%;
}

/* .zwc-features-section::before {
    content: '';
    height: 140%;
    width: 40%;
    position: absolute;
    background-image: radial-gradient(#15195e, hsl(237 54% 6% / 1));
    border-radius: 50%;
    box-shadow: 0 0 320px 250px hsl(236 60% 11% / 1);
    transform: rotate(-16deg) translate(41%, -54%);
} */

.zwc-features-section::before {
    content: '';
    height: 280%;
    width: 120%;
    position: absolute;
    top: 0;
    left: 0;
    background-image: radial-gradient(ellipse at 25% -10%, #1D2381 9%, #15173E 28%, #194D40 40%, #194D40);
    opacity: 0.7;
    transform: rotate(-4deg) translate(0px, -7%);
}


.zwc-features-section .content-wrap {
    max-width: 1280px;
}

.zwc-features-section .content-wrap>h2,
.zwc-features-section .content-wrap>div {
    max-width: 1180px;
    margin-left: auto;
}

.zwc-features-section .content-wrap>h2 {
    margin-bottom: 40px;
}

.zwc-features-section .content-wrap>div {
    margin-bottom: 0;
}

.zwc-features-tab {
    display: flex;
    align-items: center;
    grid-gap: 5px;
    background-color: rgba(0, 0, 0, 0.5);
    width: fit-content;
    padding: 8px 6px;
    border-radius: 10px;
    position: relative;
    margin-bottom: 80px;
}

.zwc-features-tab .zwc-tab-slider {
    position: absolute;
    left: 6px;
    top: 0;
    bottom: 0;
    margin: auto;
    height: 75%;
    background-color: #4DFD9A;
    width: 140px;
    border-radius: 8px;
    transition: transform 0.5s ease, left 0.5s ease, width 0.5s ease;

}

.zwc-features-tab span {
    cursor: pointer;
    /* background-color: lightgreen; */
    padding: 8px 10px;
    min-width: 140px;
    max-width: 200px;
    text-align: center;
    font-size: 15px;
    font-family: var(--zf-secondary-medium);
    border-radius: 8px;
    position: relative;
    z-index: 2;
    transition: color 0.5s ease;
    text-align: center;
}

.zwc-features-tab span.active {
    color: #000;
    font-family: var(--zf-primary-bold);
}

.zwc-features-wrap {
    display: grid;
    grid-template-columns: 1fr 1.42fr;
    align-items: center;
    grid-gap: 55px;
}



.zwc-feature-content {
    position: relative;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.5s ease, visibility 0.5s ease;
}

.zwc-feature-content {
    grid-row: 1/2;
    grid-column: 1/2;
}

.zwc-feature-content>h3 {
    margin-bottom: 25px;
}

.zwc-feature-img {
    grid-row: 1/2;
    grid-column: 2/3;
    height: 480px;
    width: 100%;
    background-color: #030414;
    border-radius: 15px;
    overflow: hidden;
    display: grid;
    align-items: end;
    position: relative;
    justify-items: center;
}

.zwc-feature-img video {
    border-radius: 30px;
}

.zwc-feature-img::after {
    content: '';
    position: absolute;
    bottom: 0;
    height: 40%;
    width: 100%;
    /* background-color: lightblue; */
    background-image: linear-gradient(to bottom, transparent, black);
}

.zwc-features-wrap .zwc-feature-img:nth-child(2)::after {
    display: none;
}

.zwc-feature-img img,
.zwc-feature-img video {
    opacity: 0;
    visibility: hidden;
    transform: translate(0%, 20%);
    transition: opacity 1s ease, visibility 1s ease, transform 1s ease;
}

.zwc-feature-img.active img,
.zwc-feature-img.active video {
    opacity: 1;
    visibility: visible;
    transform: translate(0);
}

.zwc-feature-img.active {
    z-index: 2;
}

.zwc-feature-img[data-img="2"] img {
    width: 79%;
}

.zwc-feature-img[data-img="3"] img {
    width: 87%;
    margin-left: auto;
}

.zwc-feature-img[data-img="4"] img {
    width: 74%;
}

.zwc-feature-img[data-img="5"] img {
    width: 87%;
    margin-left: auto;
}


.zwc-feature-content.active {
    opacity: 1;
    visibility: visible;
    z-index: 2;
}



.zwc-why-choose-section {
    padding: 120px 0 20px;
}

.zwc-why-choose-section .content-wrap {
    max-width: 1080px;
}

.zwc-why-choose-section h2 {
    position: relative;
    z-index: 2;
}

/* .zwc-why-choose-wrapper::before {
    content: '';
    height: 530px;
    width: 790px;
    background-image: radial-gradient(#15173E, #08091F);
    background-color: rgb(21 23 62 / 65%);
    position: absolute;
    filter: blur(50px);
    justify-self: center;
    align-self: center;
    margin: auto;
    transform: translateY(-20%);
    border-radius: 50%;
    box-shadow: 0 0 140px 210px rgb(12 13 40);
} */

.zwc-why-choose-wrapper::before {
    content: '';
    height: 970px;
    width: 1500px;
    background-image: url('//www.zohowebstatic.com/sites/zweb/images/zeptomail/homepage/why-choose-gradient.svg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    /* justify-self: center;
    align-self: center;
    margin: auto; */
    /* transform: translateY(-20%); */
    border-radius: 50%;
    /* filter: blur(100px); */
}



.zwc-why-choose-wrapper {
    --whyChooseGridGap: 50px;
    display: grid;
    /* margin-top: 100px; */
    grid-template-columns: repeat(3, 1fr);
    position: relative;
    grid-column-gap: var(--whyChooseGridGap);
    /* grid-column-gap: 50px; */
    /* border-bottom: 1px solid #56587e; */
}

.zwc-why-choose-wrapper>div {
    padding: 70px 0 60px;
    position: relative;
}

.zwc-why-choose-wrapper>div:first-child::after,
.zwc-why-choose-wrapper>div:nth-child(4)::after {
    content: '';
    height: 1px;
    width: calc((3 * 100%) + (2 * var(--whyChooseGridGap)));
    background-color: rgba(86, 88, 126, 0.6);
    position: absolute;
    bottom: 0;
}

.zwc-why-choose-wrapper h5::before {
    content: '';
    display: inline-block;
    height: 30px;
    width: 30px;
    margin-right: 10px;
    position: relative;
    top: 7px;
    /* background-color: lightblue; */
    background-image: var(--zeptoSprite);
    background-position: 0 0;
    background-size: 488px auto;
    transform: scale(0.85);
}

.zwc-why-choose-wrapper>div:nth-child(1)>h5::before {
    background-position: -100px 0;
}

.zwc-why-choose-wrapper>div:nth-child(2)>h5::before {
    background-position: -130px 0;
}

.zwc-why-choose-wrapper>div:nth-child(3)>h5::before {
    background-position: -160px 0;
}

.zwc-why-choose-wrapper>div:nth-child(4)>h5::before {
    background-position: -190px 0;
}

.zwc-why-choose-wrapper>div:nth-child(5)>h5::before {
    background-position: -220px 0;
}

.zwc-why-choose-wrapper>div:nth-child(6)>h5::before {
    background-position: -250px 0;
}



.zwc-need-reasons-section {
    padding: 120px 0 130px;
    max-width: 1660px;
    margin: 0 auto;
    /* background-color: lightblue; */
    border-radius: 30px;
    position: relative;
    overflow: hidden;
}

.zwc-need-reasons-section::before {
    content: '';
    height: 45vw;
    width: 80vw;
    background-image: radial-gradient(#1D2381, #15173E, #010213);
    /* background-color: #1D2381; */
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    transform: translateY(50%);
    border-radius: 50%;
    box-shadow: 0 0 8vw 8vw #0d0e2c;
}

.zwc-need-reasons-section .content-wrap {
    max-width: 1100px;
}

.zwc-need-reasons-section h2 {
    margin-bottom: 60px;
}

.zwc-reason-tiles-wrap {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
}

.zwc-reason-tile {
    border-radius: 20px;
    border: 1px solid #36385A;
    background-image: linear-gradient(to bottom, #080927 200px, #010213);
    overflow: hidden;
    padding: 50px 0 40px;
    display: flex;
    flex-direction: column;
}

div.zwc-reason-tile>div {
    margin-bottom: auto;
    position: relative;
}

.zwc-reason-integration>div::before,
.zwc-reason-integration>div::after {
    content: '';
    top: 50%;
    transform: translateY(-50%);
    height: calc(100% + 20px);
    width: 40%;
    position: absolute;
    /* background-color: lightblue; */
    z-index: 2;
}

.zwc-reason-integration>div::before {
    left: -4px;
    background-image: linear-gradient(to right, #080828, transparent);
}

div.zwc-reason-integration>div::after {
    right: -4px;
    background-image: linear-gradient(to left, #080828, transparent);
}

div.zwc-reason-tile>h5 {
    margin-top: 15px;
}

.zwc-reason-tile>a {
    color: #fff;
    padding: 8px 24px;
    background-image: linear-gradient(to right bottom, #1A1C4B, #151639);
    display: inline-block;
    margin-left: 30px;
    border-radius: 100px;
    font-size: 14px;
    align-self: flex-start;
}

.zwc-reason-secure-email>div {
    background-image: url('//www.zohowebstatic.com/sites/zweb/images/zeptomail/homepage/shield-bg.png');
    background-size: contain;
    display: grid;
    justify-items: center;
    align-items: center;
    width: calc(100% - 15px);
    margin: 0 auto;
    padding: 20px 0;
}

.zwc-reason-secure-email>div>span>span,
.zwc-reason-secure-email>div>span::before,
.zwc-reason-secure-email>div>span::after {
    background-image: url('//www.zohowebstatic.com/sites/zweb/images/zeptomail/homepage/reason-secure-mail-shield.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    height: 80px;
    width: 60px;
    grid-row: 1/2;
    grid-column: 1/2;
}

.zwc-reason-secure-email>div>span {
    display: grid;
    justify-items: center;
    align-items: center;
    justify-content: center;
    align-content: center;
    font-size: 0px;
    line-height: 0;
    grid-template-columns: max-content;
    grid-template-rows: max-content;
    grid-auto-rows: 0px;
    transform: scale(1.1);
}

@keyframes rippleShieldOuter {
    0% {
        transform: scale(0.5);
        opacity: 0.3;
    }

    60% {
        opacity: 0.3;
    }

    100% {
        transform: scale(1);
        opacity: 0;
    }
}


@keyframes rippleShieldInner {
    0% {
        transform: scale(0.5);
        opacity: 0.5;
    }

    60% {
        opacity: 0.5;
    }

    100% {
        transform: scale(1);
        opacity: 0;
    }
}


.zwc-reason-secure-email>div>span::before {
    content: '';
    opacity: 0.3;
    /* transform: scale(1.8); */
    position: absolute;
    height: 132px;
    width: 102px;
    animation: rippleShieldOuter 2.5s ease-in-out 0s infinite;
}

.zwc-reason-secure-email>div>span::after {
    content: '';
    filter: drop-shadow(0px 0px 18px #4c50a4)
}

.zwc-reason-secure-email>div>span>span {
    opacity: 0.5;
    /* transform: scale(1.38); */
    position: absolute;
    width: 83px;
    height: 110px;
    animation: rippleShieldInner 2.5s ease-in-out infinite;
}

.zwc-reason-tile>*:not(div:first-child, a) {
    padding: 0 30px;
}

.zwc-reason-interface {
    padding: 30px 0 40px;
}

.zwc-reason-integration {
    padding: 30px 0 40px;
}

.zwc-reason-interface>div {
    display: grid;
    grid-template-columns: 1fr max-content;
    background-image: linear-gradient(to bottom, #212245, #080726);
    width: 90%;
    margin: 0 auto;
    border-radius: 15px;
    padding: 25px 25px 30px 40px;
    grid-gap: 5px;
}

.zwc-reason-interface-eq {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    /* align-content: center; */
    /* height: 90%; */
    align-items: center;
    /* justify-items: center; */
}

.zwc-reason-interface-eq>span {
    height: 90%;
    width: 2px;
    background-color: #44456b;
    position: relative;
    display: grid;
    justify-items: center;
    align-items: center;
    font-size: 0px;
    grid-auto-rows: 0px;

}

.zwc-reason-interface-eq>span::before {
    content: '';
    height: 20px;
    width: 20px;
    border-radius: 100%;
    background-image: linear-gradient(to bottom, #7A7CB4, #2C2E5A);
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 50%);
    transition: bottom 0.7s ease-in-out;
}

.zwc-reason-interface-eq>span::after {
    content: '';
    height: 18px;
    width: 18px;
    border-radius: 100%;
    background-color: #1f2042;
    position: absolute;
    left: 50%;
    transform: translate(-50%, calc(50% + 1px));
    bottom: 1px;
    transition: bottom 0.7s ease-in-out;
}

.zwe-ob .zwc-reason-interface-eq>span:first-child:before {
    bottom: 75%;
}

.zwe-ob .zwc-reason-interface-eq>span:first-child:after {
    bottom: calc(75% + 1px);
}

.zwe-ob .zwc-reason-interface-eq>span:nth-child(2):before {
    bottom: 30%;
    transition-delay: 0.3s;
}

.zwe-ob .zwc-reason-interface-eq>span:nth-child(2):after {
    bottom: calc(30% + 1px);
    transition-delay: 0.3s;
}

.zwe-ob .zwc-reason-interface-eq>span:last-child:before {
    bottom: 55%;
    transition-delay: 0.5s;
}

.zwe-ob .zwc-reason-interface-eq>span:last-child:after {
    bottom: calc(55% + 1px);
    transition-delay: 0.5s;
}

.zwc-reason-interface-credit-count {
    text-align: center;
}

.zwc-reason-interface-credit-count p {
    margin-bottom: 10px;
    color: #b9b9c8;
}

.zwc-reason-interface-credit-count span {
    background-color: #03041c;
    color: #308c66;
    padding: 6px 20px;
    border-radius: 10px;
    font-size: 21px;
    font-family: var(--zf-secondary-medium);
    min-width: 94px;
    display: inline-block;
}

.zwc-reason-icon-wrap {
    grid-gap: 14px;
}



.zwc-reason-icons-row1 .zwc-reason-icon-wrap {
    padding-right: 14px;
}

.zwc-reason-icons-row2 .zwc-reason-icon-wrap {
    padding-left: 14px;
}

/* .zwc-reason-icon-wrap-clone{
    margin-left: 10px; 
} */
/* .zwc-reason-integration>div>div {
    margin-right: 10px;
} */

.zwc-reason-icons-row,
.zwc-reason-icon-wrap {
    display: grid;
    grid-template-columns: max-content;
    grid-auto-flow: column;
    /* grid-gap: 10px; */
}

@keyframes slideRight {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(-100%);
    }
}

@keyframes slideLeft {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(100%);
    }
}

.zwc-reason-icons-row1 .zwc-reason-icon-wrap {
    animation: slideRight 10s linear infinite;
}

.zwc-reason-icons-row2 {
    justify-content: end;
}

.zwc-reason-icons-row2 .zwc-reason-icon-wrap {
    animation: slideLeft 10s linear infinite;
}

.zwc-reason-integration>div>div {
    margin-bottom: 15px;
}

/* .zwc-reason-integration>div {
    margin-bottom: 50px;
} */

.zwc-reason-icon {
    /* height: 60px; */
    /* width: 60px; */
    /* background-image: linear-gradient(to bottom, #7A7CB4, #2C2E5A); */
    display: grid;
    align-items: center;
    justify-items: center;
    font-size: 0px;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    border-radius: 10px;
    /* overflow: hidden; */
    position: relative;
    padding: 10px;
}

/* .zwc-reason-icon>span {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background-image: linear-gradient(to bottom, transparent, #000);
} */

.zwc-reason-icon::before {
    content: '';
    background-color: #d8daff;
    box-shadow: 0 0 12px -2px #9da2faa8;
    /* background-image: linear-gradient(to bottom, #1a1b3c, #141534); */
    /* grid-row: 1/2; */
    /* grid-column: 1/2; */
    height: calc(100% - 2px);
    width: calc(100% - 2px);
    border-radius: 10px;
    position: absolute;
}

.zwc-reason-icon::after {
    content: '';
    height: 40px;
    width: 40px;
    /* background-color: lightblue; */
    /* position: absolute; */
    position: relative;
    grid-row: 1/2;
    grid-column: 1/2;
    /* background-image: var(--zeptoSprite); */
    /* background-size: 470px auto; */
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    /* background-position: -280px -50px; */
}

.zwc-reason-icons-row1>.zwc-reason-icon-wrap>span.zwc-reason-icon-zapier::after {
    width: 90px;
    background-image: url('//www.zohowebstatic.com/sites/zweb/images/otherbrandlogos/zapier-black.svg');
}

.zwc-reason-icons-row1>.zwc-reason-icon-wrap>span.zwc-reason-icon-crm::after {
    width: 80px;
    background-image: url('//www.zohowebstatic.com/sites/zweb/images/productlogos/crm.svg');
}

.zwc-reason-icons-row1>.zwc-reason-icon-wrap>span.zwc-reason-icon-joomla::after {
    width: 110px;
    background-image: url('//www.zohowebstatic.com/sites/zweb/images/otherbrandlogos/joomla.svg');
}

.zwc-reason-icons-row1>.zwc-reason-icon-wrap>span.zwc-reason-icon-flow::after {
    width: 80px;
    background-image: url('//www.zohowebstatic.com/sites/zweb/images/productlogos/flow.svg');
}

.zwc-reason-icons-row2>.zwc-reason-icon-wrap>span.zwc-reason-icon-whmcs::after {
    width: 90px;
    background-image: url('//www.zohowebstatic.com/sites/zweb/images/otherbrandlogos/whmcs.svg');
}

.zwc-reason-icons-row2>.zwc-reason-icon-wrap>span.zwc-reason-icon-wordpress::after {
    width: 60px;
    background-image: url('//www.zohowebstatic.com/sites/zweb/images/otherbrandlogos/wordpress.svg');
}

.zwc-reason-icons-row2>.zwc-reason-icon-wrap>span.zwc-reason-icon-bubble::after {
    width: 90px;
    background-image: url('//www.zohowebstatic.com/sites/zweb/images/otherbrandlogos/bubble.svg');
}

.zwc-reason-icons-row2>.zwc-reason-icon-wrap>span.zwc-reason-icon-creator::after {
    width: 100px;
    background-image: url('//www.zohowebstatic.com/sites/zweb/images/productlogos/creator.svg');
}

.zwc-reason-icons-row2>.zwc-reason-icon-wrap>span.zwc-reason-icon-msautomate::after {
    width: 60px;
    background-image: url('//www.zohowebstatic.com/sites/zweb/images/otherbrandlogos/powerautomate.svg');
}

/* .zwc-reason-icons-row1>.zwc-reason-icon-wrap>span:nth-child(1)::after {
    background-position: 0 -50px;
}

.zwc-reason-icons-row1>.zwc-reason-icon-wrap>span:nth-child(2)::after {
    background-position: -40px -50px;
}

.zwc-reason-icons-row1>.zwc-reason-icon-wrap>span:nth-child(3)::after {
    background-position: -80px -50px;
}

.zwc-reason-icons-row1>.zwc-reason-icon-wrap>span:nth-child(4)::after {
    background-position: -120px -50px;
}

.zwc-reason-icons-row2>.zwc-reason-icon-wrap>span:nth-child(1)::after {
    background-position: -160px -50px;
}

.zwc-reason-icons-row2>.zwc-reason-icon-wrap>span:nth-child(2)::after {
    background-position: -200px -50px;
}

.zwc-reason-icons-row2>.zwc-reason-icon-wrap>span:nth-child(3)::after {
    background-position: -240px -50px;
}

.zwc-reason-icons-row2>.zwc-reason-icon-wrap>span:nth-child(4)::after {
    background-position: -280px -50px;
} */

/* .zwc-reason-tile h5::before {
    content: '';
    position: relative;
    top: 7px;
    display: inline-block;
    margin-right: 15px;
    height: 30px;
    width: 30px;
    background-color: lightblue;
} */


.zwc-faq-section {
    padding: 120px 0;
}

.zwc-faq-wrapper {
    display: flex;
}

/* .zwc-faq-wrapper>div:not(:first-child) {
    display: none;
} */

.zwc-faq-section h2 {
    text-align: center;
    margin: 0 auto 40px;
    max-width: 600px;
}

.zwc-faq-wrapper {
    max-width: 750px;
    margin: 0 auto;
}

.zwc-faq-control-info {
    margin: 0 auto;
    text-align: center;
    display: grid;
    grid-auto-flow: column;
    justify-content: center;
    align-items: center;
    grid-gap: 18px;
    grid-template-columns: max-content 10px 30px 10px max-content;
}

/* .zwc-faq-arr {
    height: 13px;
    width: 13px;
    border: solid #fff;
    cursor: pointer;
} */

.zwc-faq-arr::before {
    height: 13px;
    width: 13px;
    border: solid #fff;
    cursor: pointer;
}

.zwc-faq-arr-left {
    /* border-width: 2px 0 0 2px;
    transform: rotate(-45deg);
    margin-right: 20px; */
    padding: 10px 5px 10px 10px;
}

.zwc-faq-arr-left::before {
    content: '';
    border-width: 2px 0 0 2px;
    transform: rotate(-45deg);
    display: inline-block;
    margin-right: 10px;
}

.zwc-faq-arr-right {
    /* border-width: 2px 2px 0 0;
    transform: rotate(45deg);
    margin-left: 20px; */
    padding: 10px 10px 10px 5px;
}

.zwc-faq-arr-right::before {
    content: '';
    border-width: 2px 2px 0 0;
    transform: rotate(45deg);
    margin-left: 10px;
    display: inline-block;
}

.zwc-faq-num {
    position: relative;
    cursor: pointer;
}


.zwc-faq-control-info>.zwc-faq-num:nth-child(2)::before,
.zwc-faq-control-info>.zwc-faq-num:nth-child(4)::before {
    content: '. .';
    font-family: var(--zf-primary-bold);
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    line-height: 1;
    pointer-events: none;
}

.zwc-faq-control-info>.zwc-faq-num:nth-child(2)::before {
    left: -30px;
}

.zwc-faq-control-info>.zwc-faq-num:nth-child(4)::before {
    right: -30px;
}


.zwc-faq-num-active {
    display: grid;
    position: relative;
    z-index: 2;
    isolation: isolate;
    justify-content: center;
    justify-items: center;
    align-items: center;
    align-content: center;
}

.zwc-faq-num-active::before {
    content: '';
    background-color: #4B67FF;
    border-radius: 50%;
    height: 30px;
    width: 30px;
    position: absolute;
    grid-row: 1/2;
    grid-column: 1/2;
    z-index: -1;
}

/* .zwc-footer-section {
    padding: 0;
} */

.zwc-footer-section .content-wrap {
    max-width: 1660px;
    margin: 0 auto;
    /* background-color: #131539; */
    border-radius: 30px;
    /* background-color: #194D40; */
    position: relative;
    overflow: hidden;
    width: 96%;
}

/* .zwc-footer-section .content-wrap::before {
    content: '';
    height: 150%;
    width: 90%;
    background-image: radial-gradient(#1D2381, #15173E, #010213);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin: auto;
    transform: translateY(-50%);
    border-radius: 50%;
    box-shadow: 0 0 10vw 10vw #0d0e2c;
} */

.zwc-footer-section .content-wrap::before {
    content: '';
    height: 100%;
    width: 115%;
    background-image: radial-gradient(ellipse at 50% 0%, #1D2381 0%, #15173E, #010213 80%);
    position: absolute;
    top: 0;
    left: 50%;
    right: 0;
    margin: auto;
    transform: translateX(-50%);
}

.zwc-footer-section .content-wrap>div {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    text-align: center;
    /* justify-content: center; */
    max-width: 1150px;
    margin: 0 auto;
    align-items: end;
    grid-gap: 35px;
    padding: 100px 0 115px;
    position: relative;
    width: 90%;
    /* transform: translateX(8%); */
}

.zwc-footer-section h2 {
    line-height: 1.25;
    font-size: 50px;
    max-width: 900px;
    margin-bottom: 0;
    /* max-width: 700px; */
}

@media (pointer: coarse) {
    .zwc-explanation-section .content-wrap>div {
        transform: none !important;
    }

    /* .zwc-glow-box {
        left: 50% !important;
        top: 50% !important;
        transform: translate(-50%, -50%);
    } */
    .zwc-glow-box {
        opacity: 1 !important;
        left: 85% !important;
        top: 75% !important;
    }


}

@media only screen and (max-width: 1599px) {
    .zwc-template-inner h1 {
        font-size: 70px;
    }

    .zwc-template-inner h2 {
        font-size: 60px;
    }

    .zwc-template-inner h3 {
        font-size: 48px;
    }

    .zwc-template-inner h4 {
        font-size: 25px;
    }

    .zwc-template-inner h5 {
        font-size: 22px;
    }

    .zwc-banner-section {
        padding: 175px 0 110px;
    }


    .zwc-dashboard-img {
        max-width: 1150px;
    }

    /* .zwc-banner-illus+div {
        max-width: 1150px;
    } */

    .zwc-inbox-time-svg p {
        font-size: 32px;
    }

    .zwc-testimonial-content {
        font-size: 29px;
    }

    .zwc-integration-section::before {
        box-shadow: 0 0 10vw 10vw #0d0e2c;
    }

    /* .zwc-why-choose-wrapper::before {
        width: 100vw;
        height: 70vw;
    } */

    .zwc-footer-section h2 {
        max-width: 900px;
        font-size: 48px;
    }
}

@media only screen and (max-width: 1499px) {

    .zwc-template-inner h1 {
        font-size: 68px;
    }

    .zwc-template-inner h2 {
        font-size: 58px;
    }

    .zwc-template-inner h3 {
        font-size: 46px;
    }

    .zwc-template-inner h4 {
        font-size: 25px;
    }

    .zwc-template-inner h5 {
        font-size: 22px;
    }

    .zwc-stats-wrapper {
        margin-bottom: -30px;
    }

    .zw-other-lang .zwc-stats-wrapper {
        margin-bottom: -70px;
    }

    .zwc-testimonial-wrap {
        margin: 80px auto 0;
    }

    .zwc-banner-section {
        padding: 175px 0 100px;
    }

    .zwc-integration-section {
        padding: 110px 0 125px;
    }

    .zwc-pricing-section {
        padding: 40px 0 115px;
    }

    .zwc-explanation-section {
        padding: 105px 0 125px;
    }

    .zwc-features-section {
        padding: 105px 0 120px;
    }

    .zwc-why-choose-section {
        padding: 110px 0 20px;
    }


    .zwc-need-reasons-section {
        padding: 110px 0 115px;
    }

    .zwc-faq-section {
        padding: 110px 0 120px;
    }

    .zwc-footer-section .content-wrap>div {
        padding: 105px 0 115px;
    }

    .zwc-banner-cta {
        max-width: 600px;
    }

    .zwc-banner-illus {
        right: 0;
    }

    /* .zwc-dashboard-top {
        right: 70px;
    } */

    .zwc-explaining-why .zwc-why-img>span::after {
        font-size: 90px;
    }

    .zwc-explaining-why .zwc-why-img>span {
        padding: 21px 19px;
    }

    .zwc-how-img .zwc-how-img-slide {
        padding: 12px 0px 12px;
    }

    .zwc-dashboard-img-wrapper {
        /* max-width: 1120px; */
        /* width: 87%; */
    }

    .zwc-banner-content-wrapper+div {
        max-width: 1120px;
        width: 87%;
    }

    .zwc-footer-section h2 {
        max-width: 900px;
        font-size: 48px;
    }

}

@media only screen and (max-width: 1399px) {

    .zwc-template-inner h1 {
        font-size: 66px;
    }

    .zwc-template-inner h2 {
        font-size: 55px;
    }

    .zwc-template-inner h3 {
        font-size: 43px;
    }

    .zwc-template-inner h4 {
        font-size: 24px;
    }

    .zwc-banner-section {
        padding: 175px 0 100px;
    }

    .zwc-integration-section {
        padding: 95px 0 105px;
    }

    .zwc-pricing-section {
        padding: 30px 0 100px;
    }

    .zwc-explanation-section {
        padding: 95px 0 115px;
    }

    .zwc-features-section {
        padding: 100px 0 110px;
    }

    .zwc-why-choose-section {
        padding: 100px 0 10px;
    }

    .zwc-need-reasons-section {
        padding: 100px 0 110px;
    }

    .zwc-faq-section {
        padding: 100px 0 110px;
    }

    .zwc-footer-section .content-wrap>div {
        padding: 90px 0 100px;
    }

    /* .zwc-footer-section {
        padding: 0 0 110px;
    } */

    .zwc-banner-content-wrapper {
        grid-template-columns: 1fr 36%;
    }

    .zwc-banner-section::before {
        /* width: 1050px; */
        height: 900px;
    }

    .zwc-dashboard-img {
        max-width: none;
    }

    .zwc-banner-illus {
        width: 100%;
        right: 20px;
        margin-bottom: -160px;
    }

    .zwc-banner-illus .zwc-svg-words span {
        padding: 8px 18px;
    }

    .zwc-banner-illus .zwc-svg-words span::after {
        font-size: 13px;
    }

    .zwc-dashboard-top {
        right: calc(2.1% + 20px);
        height: 22%;
        width: 14%;
    }

    .zwc-inbox-time-svg {
        max-width: 300px;
    }

    .zwc-inbox-times p {
        font-size: 24px;
    }

    .zwc-stats-wrapper>p {
        font-size: 18px;
        margin-bottom: -100px;
    }

    .zwc-stats-values>div p:first-child {
        font-size: 52px;
    }

    .zwc-inbox-time-svg p {
        font-size: 27px;
    }

    .zwc-dashboard-img-wrapper {
        /* margin-top: 17%; */
        /* max-width: 1040px; */
        /* width: 82%; */
    }

    .zwc-banner-content-wrapper+div {
        /* margin-top: 11%; */
        max-width: 1040px;
        width: 82%;
    }

    .zwc-testimonial-content {
        font-size: 28px;
    }

    .zwc-stats-wrapper {
        margin-bottom: -80px;
    }

    .zwc-brand-logos-wrap {
        transform: scale(0.9);
    }

    .zwc-testimonial-wrap {
        grid-template-columns: minmax(0, 1fr) 290px;
        margin: 130px auto 0;
    }



    .zwc-testimonial-wrap>a {
        font-size: 20px;
    }

    .zwc-integration-section .content-wrap {
        padding-left: 0;
    }

    .zwc-integration-content {
        width: 48%;
        max-width: 420px;
    }

    .zwc-code-integration-wrap {
        width: 52%;
        min-width: 650px;
    }

    .zwc-integration-section::before {
        height: 75vw;
        width: 90vw;
    }

    .zwc-integration-code {
        height: 360px;
    }

    .zwc-integration-content>div:last-child {
        margin-bottom: 0;
    }

    .zwc-explanation-section-heading {
        margin-bottom: 40px;
    }

    .zwc-explaining-what {
        padding: 45px 50px;
    }

    .zwc-what-content h3 {
        max-width: 350px;
    }

    .zwc-what-img-logo {
        height: 69%;
        width: 36%;
        max-width: 180px;
        max-height: 180px;
    }

    .zwc-explaining-why .zwc-why-img>span::after {
        font-size: 85px;
    }

    .zwc-how-img .zwc-how-img-slide {
        padding: 6px 0 12px;
    }

    .zwc-how-img .zwc-how-img-slide::before {
        transform: scale(0.9)
    }

    .zwc-how-img .zwc-how-img-slide p {
        font-size: 14px;
    }

    .zwc-features-wrap {
        grid-template-columns: 1fr minmax(min-content, 600px);
    }

    .zwc-features-section .content-wrap>h2,
    .zwc-features-section .content-wrap>div {
        margin-right: auto;
    }

    .zwc-feature-img {
        height: 450px;
    }

    .zwc-feature-content>h3 {
        max-width: 440px;
    }

    .zwc-footer-section h2 {
        max-width: 780px;
        font-size: 44px;
    }

    /* other lang styles */

    .zw-other-lang .zwc-stats-wrapper {
        margin-bottom: -80px;
    }

    .zwc-footer-section .content-wrap>div {
        grid-gap: 30px;
    }
}

@media only screen and (max-width: 1299px) {
    .zwc-template-inner h1 {
        font-size: 62px;
    }

    .zwc-template-inner h2 {
        font-size: 55px;
    }

    .zwc-template-inner h3 {
        font-size: 40px;
    }

    .zwc-template-inner h5 {
        font-size: 21px;
    }

    /* .zwc-dashboard-img-wrapper {
        margin-top: 14%;
    } */

    /* .zwc-dashboard-img-wrapper {
        width: 85%;
    } */

    .zwc-banner-cta {
        max-width: 550px;
    }

    .zwc-banner-content-wrapper+div {
        width: 85%;
        /* margin-top: 8%; */
    }

    .zwc-dashboard-top {
        right: calc(3.25% + 20px);
    }

    .zwc-stats-values>div p:first-child {
        font-size: 45px;
    }

    .zwc-stats-values>div p:last-child {
        font-size: 15px;
    }

    .zwc-code-integration-wrap {
        width: 54%;
        min-width: 605px;
    }

    .zwc-integration-content {
        max-width: 410px;
    }

    code[class*="language-"],
    pre[class*="language-"] {
        font-size: 12.5px;
    }

    .zwc-pricing-value {
        font-size: 65px;
    }

    .zwc-price-symbol {
        font-size: 36px;
    }

    .zwc-pricing-heading-content h3 sup {
        font-size: 28px;
    }

    .zwc-what-content>h3 {
        max-width: 320px;
    }

    .zwc-explaining-how {
        padding: 55px 40px 30px;
    }

    .zwc-explaining-why {
        padding: 30px 40px 30px;
    }

    /* .zwc-explaining-why .zwc-why-img>span::after {
        font-size: 90px;
    } */

    .zwc-explaining-what {
        padding: 45px 40px;
    }

    .zwc-why-choose-wrapper>div {
        padding: 60px 0 50px;
    }

    .zwc-why-choose-wrapper h5::before {
        transform: scale(0.95);
    }

    /* .zwc-how-img .zwc-how-img-slide {
        padding: 10px 0 12px;
    } */

    .zwc-footer-section h2 {
        font-size: 44px;
    }


}

@media only screen and (max-width: 1199px) {
    .zwc-template-inner h1 {
        font-size: 59px;
    }

    .zwc-template-inner h2 {
        font-size: 52px;
    }

    .zwc-template-inner h4 {
        font-size: 23px;
    }

    .zwc-template-inner h3 {
        font-size: 42px;
    }

    .zwc-template-inner h5 {
        font-size: 21px;
    }

    .zwc-banner-section {
        padding: 150px 0 85px;
    }

    .zwc-banner-content {
        padding-top: 20px;
        margin-bottom: 20px;
    }

    .zwc-integration-section {
        padding: 85px 0 70px;
    }

    .zwc-pricing-section {
        padding: 30px 0 95px;
    }

    .zwc-explanation-section {
        padding: 85px 0 105px;
    }

    .zwc-features-section {
        padding: 90px 0 100px;
    }

    .zwc-why-choose-section {
        padding: 90px 0 0px;
    }

    .zwc-need-reasons-section {
        padding: 90px 0 100px;
    }

    .zwc-faq-section {
        padding: 85px 0 95px;
    }

    .zwc-footer-section .content-wrap>div {
        padding: 80px 0 90px;
    }

    /* .zwc-footer-section {
        padding: 0 0 100px;
    } */

    .zwc-banner-content {
        padding-left: 15px;
    }

    .zwc-banner-content>p:first-child {
        font-size: 18px;
    }


    .zwc-banner-content>p {
        margin-bottom: 50px;
        font-size: 17px;
    }

    .zwc-banner-cta {
        max-width: 520px;
    }

    .zwc-banner-illus {
        right: 35px;
    }

    /* .zwc-dashboard-img-wrapper {
        margin-top: 16%;
    } */

    /* .zwc-banner-illus+div {
        margin-top: 11.5%;
    } */

    .zwc-dashboard-top {
        right: calc(3.25% + 35px);
    }

    .zwc-banner-illus .zwc-svg-words span::after {
        /* font-size: 12px; */
        font-size: max(1vw, 10.5px);
    }

    .zwc-banner-illus .zwc-svg-words {
        min-width: 110px;
        width: auto;
    }

    .zwc-banner-illus .zwc-svg-user-action span::before {
        transform: scale(0.9);
        position: relative;
        top: -1px;
    }

    .zwc-inbox-times p {
        font-size: 22px;
    }

    .zwc-stats-wrapper>p {
        margin-bottom: -90px;
    }

    .zwc-stats-values>div p:first-child {
        font-size: 45px;
    }

    .zwc-stats-values p {
        font-size: 15px;
    }

    .zwc-stats-values {
        top: -5px;
    }

    .zwc-brand-logos-wrap {
        transform: scale(0.85);
    }

    .zwc-testimonial-content {
        font-size: 24px;
    }

    .zwc-testimonial-video-wrap img {
        height: 280px;
        object-fit: cover;
        object-position: top;

    }

    .zwc-integration-content-wrap {
        display: block;
    }

    .zwc-integration-heading-wrap {
        grid-template-columns: 1fr 1fr;
        grid-gap: 50px;
    }



    .zwc-integration-content {
        display: grid;
        grid-template-columns: 1fr 1fr;
        max-width: none;
        width: 100%;
        grid-gap: 50px;
        margin-bottom: 60px;
    }

    .zwc-integration-content>div {
        margin-bottom: 0;
    }

    .zwc-integration-code .zwc-copy-btn {
        right: 20px;
    }

    .zwc-code-integration-wrap {
        width: 90%;
        max-width: none;
        max-width: 900px;
        margin: 0 auto;
    }

    .zwc-code-integration-wrap-inner {
        border: 1px solid #292b51;
        padding: 35px 0px 20px 30px;
    }



    code[class*="language-"],
    pre[class*="language-"] {
        font-size: 14px;
    }

    .zwc-pricing-heading-content h3 sup {
        font-size: 26px;
    }

    .zwc-pricing-heading-content {
        margin-bottom: 35px;
    }



    .zwc-explanation-section .content-wrap {
        grid-gap: 30px;
    }

    .zwc-how-img .zwc-how-img-slide {
        padding: 10px 0px 12px;
    }

    .zwc-features-wrap {
        grid-template-columns: 1fr minmax(min-content, 580px);
    }

    .zwc-why-choose-section h2 {
        margin-bottom: 0;
    }

    .zwc-why-choose-wrapper {
        --whyChooseGridGap: 30px;
    }

    .zwc-why-choose-wrapper h5::before {
        transform: scale(0.85);
    }

    .zwc-reason-icon::after {
        transform: scale(0.9);
    }

    .zwc-need-reasons-section h2 {
        margin-bottom: 40px;
    }

    .zwc-footer-section h2 {
        max-width: 650px;
        font-size: 41px;
    }

    /* other lang styles */
    .zw-other-lang .zwc-stats-wrapper {
        margin-bottom: -70px;
    }

}

@media only screen and (max-width: 1100px) {
    .zwc-template-inner h1 {
        font-size: 55px;
        line-height: 1.1;
    }

    .zwc-template-inner h2 {
        font-size: 49px;
    }

    .zwc-template-inner h3 {
        font-size: 37px;
    }

    .zwc-template-inner h4 {
        font-size: 22px;
    }

    .zwc-banner-content {
        padding-top: 0;
    }

    .zwc-banner-content>p:first-child {
        max-width: 520px;
        height: 30px;
    }



    /* .zwc-banner-content>p:first-child>span {
        font-size: 15px;
    } */

    .zwc-banner-content>p:first-child>span::before {
        top: -1px;
    }

    .zwc-banner-content h1 {
        margin-bottom: 30px;
    }

    .zwc-banner-content>p {
        font-size: 16px;
        max-width: 480px;
        margin-bottom: 50px;
    }

    .zwc-banner-cta {
        max-width: 480px;
    }

    /* .zwc-dashboard-img-wrapper {
        margin-top: 14%;
    } */

    /* .zwc-banner-illus+div {
        margin-top: 6.5%;
    } */

    .zwc-stats-wrapper>p {
        font-size: 17px;
    }

    .slick-dotted.slick-slider {
        margin-bottom: 0px;
    }

    .zwc-testimonial-wrap>a {
        top: 0;
    }

    .zwc-integration-content>div>h4::before {
        transform: scale(0.85);
        top: 7px;
    }

    .zwc-pricing-range-slider {
        max-width: 450px;
    }

    .zwc-pricing-heading-content h3 sup {
        font-size: 26px;
        position: relative;
        top: 3px;
    }

    .zwc-features-wrap {
        grid-template-columns: 1fr minmax(min-content, 520px);
        grid-gap: 35px;
    }


    .zwc-feature-img {
        height: 395px;
    }

    .zwc-how-img .zwc-how-img-slide {
        padding: 4px 0 12px;
    }


    .zwc-how-img .zwc-how-img-slide::before {
        transform: scale(0.85);
        margin: 8px 0;
    }

    .zwc-how-img .zwc-how-img-slide p {
        font-size: 13px;
    }

    .zwc-explaining-what {
        padding: 25px 30px;
    }

    .zwc-explaining-how {
        padding: 55px 30px 30px;
    }

    .zwc-explaining-why {
        padding: 30px 30px 30px;
    }

    .zwc-explaining-why .zwc-why-img>span {
        font-size: 85px;
    }

    .zwc-explaining-why .zwc-why-img>span::after {
        font-size: 65px;
    }

    .zwc-reason-tiles-wrap {
        grid-gap: 15px;
    }

    .zwc-reason-tile>*:not(div:first-child, a) {
        padding: 0 20px;
    }

    .zwc-reason-tile>a {
        margin-left: 20px;
    }

    .zwc-reason-interface>div {
        padding: 25px 20px 30px 30px;
        max-width: 285px;
    }

    .zwc-reason-interface-credit-count p {
        font-size: 15px;
    }

    .zwc-reason-secure-email>div>span {
        transform: scale(1);
    }

    .zwc-what-img {
        height: 400px;
    }

    .zwc-explaining-what {
        grid-gap: 40px;
    }

    .zwc-what-img>p {
        top: 15px;
    }

    .zwc-footer-section h2 {
        font-size: 41px;
    }

}

@media only screen and (min-width: 992px) {
    body.ccode-id .zwc-pricing-value {
        font-size: 56px;
    }

    body.ccode-id .zwc-price-symbol {
        font-size: 36px;
    }
}

@media only screen and (max-width: 991px) and (min-width: 768px) {

    .zwc-explaining-what,
    .zwc-explaining-how,
    .zwc-explaining-why {
        padding: 35px 30px;
        grid-gap: 30px;
    }

    .zwc-what-img>p {
        top: 25px;
    }

    .zwc-explanation-section .content-wrap {
        grid-template-columns: 1fr;
    }

    .zwc-explaining-wrapper-what {
        grid-column: 1/2;
    }

    .zwc-explaining-how {
        /* padding: 45px 30px 40px; */
        display: grid;
        align-items: center;
        grid-gap: 30px;
        flex-direction: row-reverse;
        /* grid-auto-flow: column; */
        grid-template-columns: 1fr 1.15fr;
    }

    .zwc-how-img .zwc-how-img-slide::before {
        transform: scale(0.75);
        margin: 4px 0;
    }

    .zwc-how-img-wrapper {
        background-color: #000;
        padding: 11.5vw 0;
        /* height: 300px; */
        /* display: grid; */
        /* place-items: center; */
        margin-bottom: 0;
        border-radius: 20px;
        grid-row: 1/2;
        grid-column: 2/3;
        width: 100%;
    }

    .zwc-how-img-wrapper .slick-track {
        padding-bottom: 1px;
    }

    .zwc-how-content {
        grid-row: 1/2;
        grid-column: 1/2;
    }

    .zwc-how-content p,
    .zwc-what-content p,
    .zwc-why-content p {
        margin-bottom: 0;
    }

    .zwc-what-img {
        height: 38vw;
        border-radius: 15px;
    }


    /* --------------- */
    .zwc-explaining-why {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 30px;
        align-items: center;
    }

    .zwc-explaining-why>div:nth-child(2) {
        width: 100%;
        background-color: #000;
        display: grid;
        justify-content: center;
        align-content: center;
        border-radius: 15px;
        height: 35vw;
    }

    .zwc-explaining-why .zwc-why-img {
        position: relative;
        margin: 0 auto;
    }

    .zwc-why-content h3 {
        max-width: 300px;
    }


    /* .zwc-explanation-section .content-wrap>div>div {
        grid-template-columns: 1fr;
    }

    .zwc-what-content {
        max-width: none;
    }

    .zwc-what-content>h3 {
        max-width: 380px;
    }

    .zwc-explanation-section .content-wrap>div:hover::after {
        display: none;
    }

    .zwc-explanation-section .content-wrap {
        grid-template-columns: 1fr;
        max-width: 500px;
    }

    .zwc-explaining-wrapper-what {
        grid-column: 1/2;
    } */




}

@media only screen and (max-width: 991px) {
    .zwc-template-inner h1 {
        font-size: 50px;
    }

    .zwc-template-inner h2 {
        font-size: 42px;
        line-height: 1.25;
    }

    .zwc-template-inner h3 {
        font-size: 34px;
        line-height: 1.2;
    }

    .zwc-banner-section {
        padding: 175px 0 85px;
    }

    .zwc-inbox-times {
        margin-bottom: 65px;
    }

    .zwc-stats-wrapper {
        margin-bottom: -60px;
    }

    .zwc-inbox-times.zwc-hidden+.zwc-stats-wrapper {
        margin-top: 70px;
    }

    .zwc-integration-section {
        padding: 75px 0 50px;
    }

    .zwc-pricing-section {
        padding: 30px 0 80px;
    }

    .zwc-explanation-section {
        padding: 75px 0 95px;
        margin-top: 15px;
    }

    .zwc-features-section {
        padding: 80px 0 90px;
    }

    .zwc-why-choose-section {
        padding: 80px 0 0px;
    }

    .zwc-need-reasons-section {
        padding: 80px 0 90px;
    }

    /* .zwc-footer-section {
        padding: 0 0 80px;
    } */

    .zwc-faq-section {
        padding: 80px 0 85px;
    }

    .zwc-footer-section .content-wrap>div {
        padding: 70px 0 80px;
    }

    .zwc-banner-illus {
        margin-bottom: -100px;
    }

    /* .zwc-banner-illus+div {
        margin-top: 5.5%;
    } */

    .zwc-banner-content {
        padding-left: 0px;
    }

    .zwc-banner-content>p:first-child {
        font-size: 17px;
    }

    .zwc-banner-content h1 {
        max-width: 460px;
    }

    .zwc-banner-cta {
        max-width: 450px;
    }

    .zwc-banner-content .zwc-watch-video {
        font-size: 15px;
        grid-gap: 5px;
    }

    .zwc-inbox-time-svg::before {
        height: 70%;
    }

    .zwc-inbox-times>span {
        font-size: 13px;
        max-width: 300px;
        margin-left: auto;
        margin-right: auto;
    }

    .zwc-inbox-time-svg p {
        font-size: 23px;
        top: -95px;
    }



    .zwc-inbox-times p {
        padding: 4px 25px;
        font-size: 19px;
    }

    .zwc-stats-values>div p:first-child {
        font-size: 38px;
    }

    .zwc-stats-values>div p:last-child {
        font-size: 13px;
    }

    .zwc-stats-values p {
        font-size: 14px;
    }

    .zwc-stats-values {
        width: 90%;
        max-width: 750px;
    }

    .zwc-stats-values p {
        font-size: 13px;
    }

    .zwc-stats-wrapper>p {
        font-size: 15px;
        margin-bottom: -70px;
    }

    .zwc-brand-logos-wrap {
        transform: scale(0.8);
    }

    .zwc-brand-logos-wrap>div {
        grid-gap: 10px;
    }

    .zwc-testimonial-wrap {
        grid-template-columns: 100%;
        grid-gap: 0;
        max-width: 750px;
        margin: 100px auto 0;
    }



    .zwc-testimonial-content {
        text-align: center;
    }

    .zwc-testimonial-content-wrap .slick-dots {
        width: 100%;
        margin-top: 30px;
    }

    .zwc-testimonial-content-wrap::after {
        display: none;
    }

    .zwc-testimonial-content-wrap {
        grid-row: auto;
    }

    .zwc-testimonial-video-wrap>span>span {
        transform: scale(0.85)
    }

    .zwc-testimonial-video-wrap>span>span::after {
        transform: scale(1.2);
    }

    @keyframes growAndFadeTab {
        0% {
            transform: scale(0.5);
            opacity: 1;
        }

        60% {
            opacity: 1;
        }

        100% {
            transform: scale(0.9);
            opacity: 0;
        }
    }

    .zwc-testimonial-video-wrap>span::before,
    .zwc-testimonial-video-wrap>span::after {
        animation: growAndFadeTab 2.5s ease-in-out 0s infinite
    }


    .zwc-testimonial-author-designation>span {
        display: inline-block;
        position: relative;
        margin-left: 10px;
        padding-left: 10px;
    }

    .zwc-testimonial-author-designation>span::before {
        content: '';
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        background-color: #fff;
        width: 1px;

    }

    .zwc-testimonial-video-wrap {
        width: fit-content;
        justify-self: center;
        max-width: 260px;
        margin-bottom: 20px;
    }

    .zwc-testimonial-video-wrap img {
        height: 190px;
        border-radius: 20px;
    }

    .zwc-testimonial-details {
        grid-template-columns: 1fr;
        text-align: center;
        justify-items: center;
    }

    .zwc-testimonial-details::after {
        grid-row: auto;
        grid-column: auto;
    }

    .zwc-testimonial-wrap>a {
        grid-row: auto;
        grid-column: auto;
        justify-self: center;
        top: 0;
        margin-top: 20px
    }

    .zwc-testimonial-content {
        font-size: 20px;
    }

    .zwc-testimonial-details {
        margin-top: 20px;
    }

    .zwc-testimonial-content-wrap {
        padding-right: 0;
    }

    .zwc-testimonial-content-wrap::before {
        right: 0;
        margin: auto;
        text-align: center;
    }

    .zwc-testimonial-content-wrap+div {
        text-align: center;
        margin-top: 80px;
        justify-self: center;
    }

    .zwc-testimonial-video-wrap::before {
        right: 0;
        margin: auto;
        text-align: center;
    }

    .zwc-integration-heading-wrap {
        text-align: center;
        justify-items: center;
        grid-gap: 5px;
    }

    .zwc-integration-heading-wrap>p {
        max-width: 600px;
    }

    .zwc-integration-heading-wrap>h2 br {
        display: none
    }

    .zwc-integration-content {
        margin-bottom: 40px;
    }

    .zwc-integration-heading-wrap {
        grid-template-columns: 1fr;
    }

    .zwc-pricing-cacl-wrapper {
        grid-template-columns: 1fr;
        max-width: 520px;
        grid-gap: 25px;
        justify-content: center;
    }

    .zwc-pricing-left {
        padding: 20px 40px 10px;
        text-align: center;
        grid-row: 2/3;
    }

    .zwc-pricing-range-slider {
        width: 90%;
        margin: 0 auto;
    }

    .zwc-price-symbol {
        font-size: 34px;
    }

    .zwc-pricing-heading-content h3 sup {
        font-size: 20px;
    }

    .zwc-plan-details>p {
        margin-bottom: 15px;
    }

    .zwc-pricing-heading-content h3 sup {
        font-size: 23px;
    }

    .zwc-pricing-value {
        font-size: 55px;
    }

    body.ccode-id .zwc-pricing-value {
        font-size: 50px;
    }

    body.ccode-id .zwc-price-symbol {
        font-size: 30px;
    }

    .zwc-price-tax-declaration {
        max-width: 330px;
        margin: 20px auto 0;
        font-size: 13px;
    }

    /* .zwc-explaining-what,
    .zwc-explaining-how,
    .zwc-explaining-why {
        padding: 35px 30px;
        grid-gap: 30px;
    }

    .zwc-what-img>p {
        top: 25px;
    }

    .zwc-explanation-section .content-wrap {
        grid-template-columns: 1fr;
    }

    .zwc-explaining-wrapper-what {
        grid-column: 1/2;
    }

    .zwc-explaining-how {
        display: grid;
        align-items: center;
        grid-gap: 30px;
        flex-direction: row-reverse;
        grid-template-columns: 1fr 1.15fr;
    }

    .zwc-how-img .zwc-how-img-slide::before {
        transform: scale(0.75);
        margin: 4px 0;
    }

    .zwc-how-img-wrapper {
        background-color: #000;
        padding: 11.5vw 0;
        margin-bottom: 0;
        border-radius: 20px;
        grid-row: 1/2;
        grid-column: 2/3;
        width: 100%;
    }

    .zwc-how-content {
        grid-row: 1/2;
        grid-column: 1/2;
    }

    .zwc-how-content p,
    .zwc-what-content p,
    .zwc-why-content p {
        margin-bottom: 0;
    }

    .zwc-what-img {
        height: 38vw;
        border-radius: 15px;
    }

    .zwc-explaining-why {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 30px;
        align-items: center;
    }

    .zwc-explaining-why>div:nth-child(2) {
        width: 100%;
        background-color: #000;
        display: grid;
        justify-content: center;
        align-content: center;
        border-radius: 15px;
        height: 35vw;
    }

    .zwc-explaining-why .zwc-why-img {
        position: relative;
        margin: 0 auto;
    }

    .zwc-why-content h3 {
        max-width: 300px;
    }

    .zwc-why-choose-section>div>h2 {
        text-align: center;
    }

    .zwc-why-choose-section>div>h2>br {
        display: none;
    }

    .zwc-why-choose-wrapper {
        grid-template-columns: repeat(2, 1fr);
        max-width: 800px;
        margin: 0 auto;
    }

    .zwc-why-choose-wrapper>div:first-child::after {
        width: calc((2 * 100%) + (1 * var(--whyChooseGridGap)));
    }

    .zwc-why-choose-wrapper>div:nth-child(4)::after {
        display: none;
    }

    .zwc-why-choose-wrapper>div:nth-child(3)::after,
    .zwc-why-choose-wrapper>div:nth-child(5)::after {
        content: '';
        height: 1px;
        background-color: rgba(86, 88, 126, 0.6);
        position: absolute;
        bottom: 0;
        width: calc((2 * 100%) + (1 * var(--whyChooseGridGap)));
    }

    .zwc-why-choose-wrapper>div>p {
        max-width: 380px;
    } */

    .zwc-features-section {
        width: 100%;
        border-radius: 0;
        /* background-image: linear-gradient(to bottom, #15173E 0%, #15173E 50%, #1D2381, #194D40); */
        background-image: linear-gradient(to bottom, #1D2381 50%, #194D40);
        text-align: center;
    }

    .zwc-features-section::before {
        display: none;
    }

    .zwcfeatures-tab-wrapper {
        display: none;
    }

    .zwc-features-section .content-wrap>h2,
    .zwc-features-section .content-wrap>div {
        max-width: 520px;
    }

    .zwc-feature-content>h3 {
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 20px;
    }

    .zwc-features-section .content-wrap>h2 {
        margin-bottom: 60px;
    }

    .zwc-features-section .content-wrap>div {
        grid-template-columns: 1fr;
    }

    .zwc-feature-content {
        grid-row: auto;
        grid-column: auto;
    }

    .zwc-feature-content>h3 {
        max-width: 380px;
    }

    .zwc-feature-img {
        grid-row: auto;
        grid-column: auto;

        height: auto;
        padding-top: 13%;
    }

    .zwc-feature-img:nth-child(2) {
        padding-top: 3%;
    }

    .zwc-feature-img:not(:last-child) {
        margin-bottom: 50px;
    }

    .zwc-feature-content {
        opacity: 1;
        visibility: visible;
    }

    .zwc-feature-img img {
        opacity: 1;
        visibility: visible;
        transform: translate(0);
    }

    .zwc-feature-content p {
        margin-bottom: 0
    }

    .zwc-why-choose-section>div>h2 {
        text-align: center;
        margin-bottom: 20px;
    }

    .zwc-why-choose-section>div>h2>br {
        display: none;
    }

    .zwc-why-choose-wrapper {
        grid-template-columns: repeat(2, 1fr);
        max-width: 800px;
        margin: 0 auto;
    }

    .zwc-why-choose-wrapper>div {
        padding: 50px 0 40px;
    }

    .zwc-why-choose-wrapper>div:first-child::after {
        width: calc((2 * 100%) + (1 * var(--whyChooseGridGap)));
    }

    .zwc-why-choose-wrapper>div:nth-child(4)::after {
        display: none;
    }

    .zwc-why-choose-wrapper>div:nth-child(3)::after,
    .zwc-why-choose-wrapper>div:nth-child(5)::after {
        content: '';
        height: 1px;
        background-color: rgba(86, 88, 126, 0.6);
        position: absolute;
        bottom: 0;
        width: calc((2 * 100%) + (1 * var(--whyChooseGridGap)));
    }

    .zwc-why-choose-wrapper>div>p {
        max-width: 380px;
    }

    .zwc-need-reasons-section>div>h2 {
        text-align: center;
    }

    .zwc-need-reasons-section>div>h2>br {
        display: none;
    }

    /* .zwc-why-choose-wrapper::before {
        height: 50vw;
        width: 75vw;
    } */

    .zwc-reason-tile {
        text-align: center;
        /* background-image: linear-gradient(to bottom, #080927 200px, #010213); */
    }

    .zwc-reason-tile>a {
        align-self: center;
        margin-left: 0;
    }

    .zwc-reason-tiles-wrap {
        grid-template-columns: 1fr;
        max-width: 500px;
        margin: 0 auto;
    }

    .zwc-need-reasons-section::before {
        width: 100vw;
        height: 800px;
    }



    div.zwc-reason-tile>div {
        margin-bottom: 10px;
    }

    .zwc-reason-interface>div {
        padding: 25px 20px 30px 30px;
        max-width: none;
        grid-template-columns: minmax(min-content, 130px) max-content;
        justify-content: center;
    }

    .zwc-faq-section {
        text-align: center;
    }

    .zwc-faq-section>.content-wrap {
        max-width: 600px;
    }

    .zwc-footer-section .content-wrap>div {
        grid-template-columns: 1fr;
        justify-items: center;
        grid-gap: 25px;
        transform: translate(0)
    }

    .zwc-footer-section h2 {
        max-width: 550px;
        font-size: 36px;
        text-align: center;
        margin: 0 auto;
    }

    .zwc-footer-section a {
        width: fit-content;
    }

    /* other lang styles */
    .zw-other-lang .zwc-stats-wrapper {
        margin-bottom: -65px;
    }

}


@media only screen and (max-width: 991px) {
    .zwc-banner-section {
        padding: 145px 0 85px;
    }

    .zwc-banner-section::before {
        background-image: url('//www.zohowebstatic.com/sites/zweb/images/zeptomail/homepage/header-gradient-tab.svg');
        width: 1000px;
        height: 900px;
        right: 0;
        left: 0;
        margin: auto;
    }

    .zwc-banner-content-wrapper {
        display: block;
    }

    #zwc-line-dot {
        transform: translate(113.84px, -50.0897px);
    }

    .zwc-banner-content h1 {
        max-width: 650px;
        margin-bottom: 25px;
    }

    .zwc-banner-content>p {
        margin-bottom: 45px;
    }

    .zwc-banner-illus {
        /* display: none; */
    }

    .zwc-banner-cta {
        justify-content: center;
        max-width: none;
    }

    .zwc-banner-content .zwc-watch-video {
        transform: translateX(0);
    }

    .zwc-banner-content {
        text-align: center;
    }

    .zwc-banner-content>h1>br {
        display: none;
    }

    .zwc-banner-content {
        display: grid;
        justify-items: center;
        margin: 0 auto;
    }

    .zwc-banner-content>p {
        max-width: 580px;
    }

    .zwc-banner-content>p:first-child {
        max-width: none;
        width: 100%;
        text-align: center;
    }

    .zwc-banner-content>p:first-child span {
        left: 0;
        right: 0;
    }

    .zwc-dashboard-top {
        display: none;
    }

    .zwc-banner-illus {
        position: relative;
        margin: 130px auto 0;
        right: auto;
        transform: translateX(11.5%);
        width: min(300px, 100%);
        max-height: 316px;

    }

    /* .zwc-dashboard-img-wrapper {
        margin-top: -60px;
    } */

    .zwc-banner-content-wrapper+div {
        margin-top: -60px;
        max-width: 750px;
    }

    .zwc-banner-illus .zwc-path-extender {
        width: 1px;
        top: 2px;
    }

    .zwc-banner-illus #zwc-dotted-path-track-el {
        display: none;
    }

    .zwc-banner-illus .zwc-svg-words {
        display: none;
    }

    .zwc-banner-illus .zwc-svg-user-action {
        display: grid;
    }


    .zwc-banner-illus .zwc-svg-icon {
        left: 94.5%;
    }

    .zwc-banner-illus .zwc-svg-word-dotted.animate {
        animation: none;
    }

    #zwc-center-line {
        transform: translate(164px, -200px);
    }
}

@media only screen and (max-width: 900px) {

    /* .zwc-banner-section {
        padding: 125px 0 85px;
    }

    .zwc-banner-section::before {
        background-image: url('//www.zohowebstatic.com/sites/zweb/images/zeptomail/homepage/header-gradient-tab.svg');
        width: 900px;
        height: 900px;
        right: 0;
        left: 0;
        margin: auto;
    }

    #zwc-line-dot {
        transform: translate(113.84px, -50.0897px);
    }

    .zwc-banner-content h1 {
        max-width: 650px;
        margin-bottom: 25px;
    }

    .zwc-banner-content>p {
        margin-bottom: 45px;
    }

    .zwc-banner-cta {
        justify-content: center;
        max-width: none;
    }

    .zwc-banner-content .zwc-watch-video {
        transform: translateX(0);
    }

    .zwc-banner-content {
        text-align: center;
    }

    .zwc-banner-content>h1>br {
        display: none;
    }

    .zwc-banner-content {
        display: grid;
        justify-items: center;
        margin: 0 auto;
    }

    .zwc-banner-content>p {
        max-width: 580px;
    }

    .zwc-banner-content>p:first-child {
        max-width: none;
        width: 100%;
        text-align: center;
    }

    .zwc-banner-content>p:first-child span {
        left: 0;
        right: 0;
    }

    .zwc-dashboard-top {
        display: none;
    }

    .zwc-banner-illus {
        position: relative;
        margin: 130px auto 0;
        right: auto;
        transform: translateX(11.5%);
        width: min(300px, 100%);
        max-height: 316px;

    }

    .zwc-banner-illus+div {
        margin-top: -60px;
    }

    .zwc-banner-illus .zwc-path-extender {
        width: 1px;
        top: 2px;
    }

    .zwc-banner-illus #zwc-dotted-path-track-el {
        display: none;
    }

    .zwc-banner-illus .zwc-svg-words {
        display: none;
    }

    .zwc-banner-illus .zwc-svg-user-action {
        display: grid;
    }


    .zwc-banner-illus .zwc-svg-icon {
        left: 94.5%;
    }

    .zwc-banner-illus .zwc-svg-word-dotted.animate {
        animation: none;
    }

    #zwc-center-line {
        transform: translate(164px, -200px);
    } */

    .zwc-stats-wrapper>p {
        margin-bottom: -50px;
    }

    .zwc-integration-section::before {
        height: 800px;
        width: 100vw;
    }

    .zwc-dashboard-img-wrapper,
    .zwc-dashboard-img,
    .zwc-dashboard-img::before,
    .zwc-dashboard-img img:first-of-type,
    .zwc-explanation-section .content-wrap>div>div,
    .zwc-explanation-section .content-wrap>div,
    .zwc-footer-section .content-wrap,
    .zwc-pricing-cacl-wrapper,
    .zwc-code-integration-wrap-inner,
    .zwc-integration-section,
    .zwc-need-reasons-section,
    .zwc-explanation-section .content-wrap>div::before {
        border-radius: 20px;
    }

    .zwc-pricing-right {
        border-radius: 15px;
    }

    .zwc-what-img {
        border-radius: 15px;
    }
}

/* @media only screen and (max-width: 850px) {} */


@media only screen and (max-width: 767px) {
    .zwc-template-inner h1 {
        font-size: 42px;
        line-height: 1.15;
    }

    .zwc-template-inner h2 {
        font-size: 36px;
    }

    .zwc-template-inner h3 {
        font-size: 28px;
    }

    .zwc-template-inner h5 {
        font-size: 20px;
    }



    .zwc-banner-section {
        padding: 105px 0 85px;
    }

    .zwc-integration-section {
        padding: 70px 0 45px;
    }

    .zwc-pricing-section {
        padding: 30px 0 70px;
    }

    .zwc-explanation-section {
        padding: 70px 0 85px;
        margin-top: 10px;
    }

    .zwc-features-section {
        padding: 75px 0 80px;
    }

    .zwc-why-choose-section {
        padding: 75px 0 0px;
    }

    .zwc-need-reasons-section {
        padding: 75px 0 70px;
    }

    .zwc-faq-section {
        padding: 70px 0 75px;
    }

    .zwc-footer-section .content-wrap>div {
        padding: 65px 0 75px;
    }

    /* .zwc-footer-section {
        padding: 0 0 40px;
    } */

    .zwc-banner-content h1 {
        max-width: 550px;
        /* margin-bottom: 25px; */
    }

    .zwc-feature-img:not(:last-child) {
        margin-bottom: 45px;
    }

    .zwc-explanation-section-heading {
        margin-bottom: 30px;
    }

    .zw-product-header {
        position: absolute;
        /* top: 0; */
        left: 0;
        right: 0;
        z-index: 5;
    }

    /* .zwc-dashboard-img-wrapper {
        width: 95%;
    } */

    .zwc-banner-content-wrapper+div {
        width: 95%;
    }

    .zwc-stats-values {
        grid-template-columns: repeat(2, 1fr);
    }

    .zwc-stats-svg-wrapper svg line {
        stroke-width: 1px;
    }

    body:not(.zb-firefox) .zwc-stats-svg-wrapper svg line {
        transform: scale(1, 0.1) translate(-120px, 0);
    }

    .zwc-stats-svg-wrapper svg {
        transform: scale(1, 1.3);
    }

    .zwc-stats-wrapper>p {
        margin-bottom: -15px;
    }

    .zwc-brand-logos-wrap {
        transform: scale(1);
        max-width: 500px;
        padding: 0 15px;
    }

    @keyframes brandLogoSlide {
        0% {
            transform: translateX(0%);
        }

        100% {
            transform: translateX(-100%);
        }
    }

    .zwc-brand-logos-wrap>div {
        grid-gap: 10px;
        transform: translateX(-100%);
        padding-right: 10px;
        animation: brandLogoSlide 10s linear infinite;
    }

    .zwc-brand-logos-wrap>.zwc-brand-logos-box-clone {
        display: grid;
    }


    .zwc-brand-logos-wrap>div>span::before {
        height: 60px;
    }

    .zwc-brand-logos-wrap>div>span:nth-child(1)::before {
        width: 120px;
    }

    .zwc-brand-logos-wrap>div>span:nth-child(2)::before {
        width: 144px;
    }

    .zwc-brand-logos-wrap>div>span:nth-child(3)::before {
        width: 96px;
    }

    .zwc-brand-logos-wrap>div>span:nth-child(4)::before {
        width: 112px;
    }

    /* .zwc-stats-values>div p:first-child {
        font-size: 40px;
    } */

    .zwc-inbox-times .zwc-inbox-time-values {
        max-width: 400px;
    }

    .zwc-inbox-times p {
        font-size: 18px;
    }

    .zwc-stats-wrapper {
        margin-bottom: 0px;
    }

    .zwc-inbox-times.zwc-hidden+.zwc-stats-wrapper {
        margin-top: 60px;
    }

    .zwc-testimonial-wrap {
        margin: 60px auto 0;
    }

    .zwc-testimonial-video-wrap {
        max-width: 250px;
    }

    .zwc-testimonial-wrap>a {
        font-size: 19px;
    }

    .zwc-testimonial-video-wrap>span>span {
        height: 51px;
        width: 51px;
    }

    .zwc-testimonial-video-wrap>span>span::after {
        transform: scale(1);
    }

    .zwc-testimonial-video-wrap>span::before {
        height: 95px;
        width: 95px;
    }

    .zwc-testimonial-video-wrap>span::after {
        height: 73px;
        width: 73px;
    }

    .zwc-testimonial-video-wrap>span>span::after {
        height: 19px;
        width: 15px;
    }

    .zwc-testimonial-content {
        font-size: 19px;
    }

    .zwc-testimonial-author {
        font-size: 20px;
    }


    .zwc-integration-section .content-wrap {
        width: 95%;
    }

    .zwc-integration-heading-wrap {
        grid-gap: 0;
        margin-bottom: 25px;
    }

    .zwc-integration-heading-wrap>p {
        font-size: 16px;
    }

    .zwc-integration-content {
        grid-template-columns: 1fr;
        grid-gap: 20px;
    }

    .zwc-code-integration-wrap {
        min-width: auto;
    }

    .zwc-integration-code-lang span[data-lang] {
        font-size: 0px;
    }

    .zwc-integration-code-lang span[data-lang]::before {
        font-size: 15px;
    }

    .zwc-code-integration-wrap {
        width: 100%;
    }

    .zwc-code-integration-wrap-inner {
        padding: 35px 0px 20px 15px;
    }

    .zwc-integration-code-lang {
        transform: translateX(-7.5px);
    }

    .zwc-integration-code-lang span[data-lang] {
        padding: 6px 12px;
    }

    /* .zwc-integration-code .zwc-copy-btn {
        font-size: 14px;
        padding: 7px 10px;
        border-radius: 10px;
        min-width: 75px;
    } */

    .zwc-integration-code-lang {
        grid-gap: 8px;
    }

    .zwc-integration-content>div {
        text-align: center;
        max-width: 600px;
        margin: 0 auto;
    }

    code[class*="language-"],
    pre[class*="language-"] {
        font-size: 12px;
    }

    .zwc-pricing-cacl-wrapper {
        max-width: 420px;
    }

    .zwc-pricing-heading-content h3 sup {
        font-size: 21px;
    }

    .zwc-pricing-range-slider .zwc-range-value {
        font-size: 15px;
    }

    .zwc-pricing-range-slider {
        width: 95%;
        max-width: 275px;
    }

    .zwc-plan-details>span {
        font-size: 14px;
    }

    .zwc-pricing-heading-content>p {
        font-size: 20px;
        margin-bottom: 0;
    }

    .zwc-pricing-left {
        padding: 20px 15px 10px
    }


    .zwc-explanation-section-heading {
        max-width: 340px;
    }


    .zwc-explanation-section .content-wrap {
        grid-template-columns: 1fr;
        max-width: 420px;
    }

    .zwc-explaining-wrapper h3 {
        margin-bottom: 15px;
    }

    .zwc-explaining-what {
        grid-template-columns: 1fr;
    }

    .zwc-explaining-wrapper-what {
        grid-column: 1/2;
    }

    .zwc-what-content>h3 {
        max-width: 290px;
    }

    .zwc-how-content>h3 {
        max-width: 340px;
    }

    .zwc-why-content>h3 {
        max-width: 340px;
    }

    .zwc-what-img {
        height: 280px;
    }

    .zwc-what-img-logo {
        border-radius: 15px;
    }

    .zwc-what-content>p,
    .zwc-why-content>p,
    .zwc-how-content>p {
        margin-bottom: 0;
    }

    .zwc-explaining-what,
    .zwc-explaining-why,
    .zwc-explaining-how {
        padding: 30px;
    }

    .zwc-explaining-why .zwc-why-img>span::after {
        font-size: 65px;
    }

    .zwc-explaining-why .zwc-why-content h3 {
        max-width: 280px;
    }

    .zwc-features-section .content-wrap>h2,
    .zwc-features-section .content-wrap>div {
        max-width: 500px;
    }

    .zwc-how-img .zwc-how-img-slide,
    .zwc-how-img .zwc-how-img-slide::after {
        border-radius: 15px;
    }

    .zwc-feature-content h3 {
        max-width: 280px;
        margin-left: auto;
        margin-right: auto;
    }

    .zwc-feature-img {
        max-width: 420px;
        justify-self: center;
    }

    .zwc-why-choose-wrapper {
        grid-template-columns: 1fr;
        max-width: 500px;
    }

    .zwc-why-choose-wrapper>div:first-child::after,
    .zwc-why-choose-wrapper>div:nth-child(3)::after,
    .zwc-why-choose-wrapper>div:nth-child(5)::after,
    .zwc-why-choose-wrapper>div:nth-child(4)::after {
        width: 100%;
    }

    .zwc-why-choose-wrapper>div>p {
        margin-bottom: 15px;
    }

    .zwc-why-choose-wrapper h5 {
        display: grid;
        grid-template-columns: max-content 1fr max-content;
        align-items: center;
        margin-bottom: 12px;
    }

    .zwc-why-choose-wrapper h5::before {
        transform: scale(0.8);
        top: 0;
    }

    .zwc-why-choose-wrapper h5::after {
        content: '';
        height: 15px;
        width: 13px;
        /* background-color: lightblue; */
        display: inline-block;
        margin-left: auto;
        background-image: var(--zeptoSprite);
        background-size: 400px auto;
        background-position: -690px -51px;
        transition: transform 0.5s ease;
        margin-left: 5px;
    }

    .zwc-why-choose-content.active h5::after {
        transform: rotate(90deg);
    }



    .zwc-why-choose-wrapper>div:nth-child(4)::after {
        display: inline-block;
    }

    .zwc-why-choose-wrapper>div::after {
        content: '';
        height: 1px;
        background-color: rgba(86, 88, 126, 0.6);
        position: absolute;
        bottom: 0;
        width: 100%;
    }

    .zwc-why-choose-wrapper>div {
        padding: 20px 0 10px;
        cursor: pointer;
    }

    .zwc-reason-tiles-wrap {
        max-width: 420px;
    }

    .zwc-reason-icon::after {
        transform: scale(0.85);
    }

    .zwc-reason-secure-email>div>span {
        transform: scale(0.9)
    }

    .zwc-footer-section h2 {
        max-width: 480px;
        font-size: 32px;
    }

    /* other lang styles */
    .zw-other-lang .zwc-stats-wrapper {
        margin-bottom: -40px;
    }

}

@media only screen and (max-width: 650px) {
    .zwc-stats-wrapper>p {
        margin-bottom: 10px;
    }

    .zwc-banner-illus {
        width: min(240px, 100%);
    }

    .zwc-inbox-time-svg p {
        font-size: 20px;
        top: -80px;
    }

    .zwc-inbox-time-svg {
        max-width: 250px;
        margin: -140px auto -35px
    }

    .zwc-inbox-time-svg::before {
        bottom: 50px;
    }

    /* .zwc-banner-illus .zwc-svg-words span {
        font-size: 1.8vw;
    } */

    .zwc-stats-svg-wrapper svg {
        transform: scale(1.1, 1.5);
    }

    .zwc-brand-logos-wrap {
        max-width: 460px;
    }
}

@media only screen and (max-width: 550px) {
    .zwc-stats-wrapper>p {
        margin-bottom: 30px;
    }

    .zwc-testimonial-wrap {
        margin: 100px auto 0;
    }

    .zwc-stats-svg-wrapper {
        display: none;
    }

    /* other lang styles  */
    .zw-other-lang .zwc-stats-wrapper {
        margin-bottom: -10px;
    }
}

@media only screen and (max-width: 480px) {

    .zwc-template-inner h1 {
        font-size: 36px;
    }

    .zwc-template-inner h2 {
        font-size: 32px
    }

    .zwc-template-inner h3 {
        font-size: 27px;
    }

    .zwc-template-inner h5 {
        font-size: 19px;
    }

    .zwc-banner-section {
        padding: 100px 0 80px;
    }

    .zwc-integration-section {
        padding: 65px 0 40px;
    }

    .zwc-pricing-section {
        padding: 30px 0 65px;
    }

    .zwc-explanation-section {
        padding: 65px 0 80px;
        margin-top: 5px;
    }

    .zwc-features-section {
        padding: 70px 0 75px;
    }

    .zwc-why-choose-section {
        padding: 70px 0 0px;
    }

    .zwc-need-reasons-section {
        padding: 70px 0 70px;
    }

    .zwc-faq-section {
        padding: 65px 0 65px;
    }

    .zwc-footer-section .content-wrap>div {
        padding: 60px 0 70px;
    }

    /* .zwc-footer-section {
        padding: 0 0 30px;
    } */

    /* .zwc-banner-content h1 {
        margin-bottom: 30px;
    } */

    .zwc-banner-content>p:first-child {
        font-size: 15px;
        margin-bottom: 10px;
    }

    .zwc-banner-content>p {
        margin-bottom: 40px;
    }




    .zwc-banner-cta {
        /* display: grid; */
        /* justify-items: center; */
        /* grid-gap: 25px; */
    }

    .zwc-get-demo-btn {
        min-width: auto;
    }

    .zwc-banner-illus {
        width: min(190px, 100%);
    }

    .zwc-inbox-time-svg {
        max-width: 230px;
        margin: -130px auto -35px;
    }

    /* .zwc-dashboard-img-wrapper {
        width: 100%;
    } */

    .zwc-banner-content-wrapper+div {
        width: 100%;
    }

    .zwc-banner-illus .zwc-svg-user-action span {
        grid-gap: 0;
        grid-template-columns: 1fr;
    }

    .zwc-banner-content .zwc-watch-video {
        grid-gap: 0;
        color: #3480F3;
        text-decoration: underline;
        margin-top: 30px;
    }

    .zwc-banner-illus .zwc-svg-user-action span::before {
        display: none;
    }

    .zwc-banner-illus .zwc-svg-user-action span::after {
        grid-column: auto;
    }

    .zwc-banner-content .zwc-watch-video::before {
        display: none;
    }

    .zwc-banner-content .zwc-watch-video::after {
        display: none;
    }

    .zwc-banner-content .zwc-watch-video span {
        display: none;
    }

    .zwc-banner-illus .zwc-svg-icon {
        transform: scale(0.85) translate(-61%);
    }

    .zwc-stats-values>div p:first-child {
        font-size: 30px;
    }

    .zwc-inbox-times p::before {
        font-size: 14px;
    }

    .zwc-inbox-times .zwc-inbox-time-values {
        grid-gap: 44px 30px;
    }

    .zwc-stats-values {
        width: 100%;
    }

    .zwc-stats-wrapper>p span {
        display: inline-block;
    }

    .zwc-stats-wrapper>p br {
        display: none;
    }

    .zwc-stats-values>div p:last-child {
        font-size: 12px;
    }

    .zwc-stats-wrapper {
        grid-template-columns: 100%;
        margin-bottom: -5px;
    }

    .zwc-testimonial-content-wrap::before {
        top: -35px;
    }


    .zwc-testimonial-wrap {
        margin: 105px auto 0;
    }

    .zwc-inbox-times.zwc-hidden+.zwc-stats-wrapper {
        margin-top: 50px;
    }

    .zwc-integration-code-lang {
        grid-auto-flow: row;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 0;
    }

    .zwc-code-copied-info {
        font-size: 18px;
    }

    .zwc-integration-code-lang span[data-lang] {
        padding: 8px 16px;
    }

    .zwc-integration-code-lang .zwc-code-lang-active[data-lang] {
        background-color: #4dfd9a;
    }

    .zwc-code-integration-wrap-inner {
        padding: 20px 0px 20px 15px;
    }

    .zwc-integration-code .zwc-copy-btn {
        right: 15px;
    }

    .zwc-integration-code-lang span.zwc-tab-slider {
        display: none;
        opacity: 0;
        visibility: hidden;
    }

    .zwc-testimonial-content,
    .zwc-testimonial-wrap>a {
        font-size: 17px;
    }



    .zwc-pricing-range-slider .zwc-range-value {
        font-size: 13px;
    }

    .zwc-pricing-heading-content {
        margin-bottom: 25px;
    }

    .zwc-pricing-value {
        font-size: 50px;
    }

    .zwc-pricing-right {
        padding: 30px 15px;
    }

    .zwc-pricing-left {
        padding: 20px 0 10px;
    }

    .zwc-pricing-range-slider {
        width: 90%;
    }

    .zwc-pricing-range-slider .zwc-range-value {
        top: -60px;
    }

    .zb-firefox .zwc-pricing-range-slider .zwc-range-value {
        top: -70px;
    }

    .zwc-pricing-range-slider .zwc-range-value span {
        display: block;
    }

    .zwc-explaining-what,
    .zwc-explaining-why,
    .zwc-explaining-how {
        padding: 20px;
    }

    .zwc-what-img>p {
        top: 20px;
    }

    .zwc-explaining-why .zwc-why-img>span {
        font-size: 70px;
    }

    .zwc-features-wrap {
        grid-gap: 25px;
    }

    .zwc-feature-content>h3 {
        margin-bottom: 15px;
    }

    .zwc-dashboard-img-wrapper,
    .zwc-dashboard-img,
    .zwc-dashboard-img::before,
    .zwc-dashboard-img img:first-of-type,
    .zwc-explanation-section .content-wrap>div>div,
    .zwc-explanation-section .content-wrap>div,
    .zwc-footer-section .content-wrap,
    .zwc-pricing-cacl-wrapper,
    .zwc-code-integration-wrap-inner,
    .zwc-integration-section,
    .zwc-need-reasons-section,
    .zwc-explanation-section .content-wrap>div::before {
        border-radius: 15px;
    }

    .zwc-what-img {
        border-radius: 10px;
    }

    .zwc-why-choose-wrapper h5::after {
        transform: scale(0.9);
    }

    .zwc-why-choose-content.active h5::after {
        transform: scale(0.9) rotate(90deg);
    }

    .zwc-reason-tile h5 {
        font-size: 20px;
        margin-bottom: 10px;
    }

    @media only screen and (max-width: 400px) {

        .zwc-pricing-cacl-wrapper {
            padding: 15px;
            grid-template-columns: 100%;
        }

        .zwc-pricing-value {
            font-size: 44px;
        }

        .zwc-price-symbol {
            font-size: 30px;
        }

        body.ccode-id .zwc-pricing-value {
            font-size: 40px;
        }

        body.ccode-id .zwc-price-symbol {
            font-size: 28px;
        }

        .zwc-pricing-range-slider {
            width: 80%;
        }

        .zwc-pricing-right {
            padding: 30px 5px;
            justify-content: center;
        }
    }
}