/* 
Pre-Biuld Scripts for Ad-Lib Ads

version: 3.0
last modified: Khackie 01/28/2021
author: Ad-Lib Innovation
*/

/*************************************************
SCREENSHOTTER FUNCTIONS - start
*************************************************/

var id = window.location.hash.split("=")[1] || 0;

//this functions will take screenshot per frame
function takeScreenshot() {
    (checkEnvironment() == "tools") ? console.log('take screenshot'): checkEnvironment();
    var iframeWidth = window.innerWidth;
    var iframeHeight = window.innerHeight;
    try {
        var iframeX = window.parent.document.getElementById('adlib-screenshot-preview').offsetLeft;
        var iframeY = window.parent.document.getElementById('adlib-screenshot-preview').offsetTop;
        parent.postMessage({
            type: 'SCREENSHOT',
            data: {
                iframeX: iframeX,
                iframeY: iframeY,
                iframeHeight: iframeHeight,
                iframeWidth: iframeWidth,
            }
        }, '*');
    } catch (e) {}
}
//parent listener when ad strats
function adlibStart() {
    (checkEnvironment() == "tools") ? console.log('screenshotter start'): checkEnvironment();
    parent.postMessage({
        type: 'SCREENSHOT_START',
        id: id
    }, '*');
    Adlib.localTimeline("PLAY");
}
//parent listener when ad ends
function adlibEnd() {
    (checkEnvironment() == "tools") ? console.log('screenshotter end'): checkEnvironment();
    parent.postMessage({
        type: 'SCREENSHOT_STOP',
        id: id
    }, '*');
    Adlib.localTimeline("END");
}

/*************************************************
SCREENSHOTTER FUNCTIONS - end
*************************************************/

/*************************************************
ADLIB OBJECT - start
*************************************************/
let Adlib = {
    timelineEvent: null,
    localTimeline: function(status){
        status = status||null;
        if(window.location.protocol == "file:" || window.location.origin == "http://localhost" || window.location.hostname == "127.0.0.1"){
            switch(status){
                case "PLAY":
                    if(_obj.timelineEvent == null){
                        var t = "0.0";
                        _obj.timelineEvent = setInterval(function(){
                            t = (gsap.globalTimeline.time().toFixed(1)> 0.5)? gsap.globalTimeline.time().toFixed(1) : t ;
                            document.getElementById("_adlibTimeline").innerHTML = t;
                        }, 100);
                    }
                break;
                case "PAUSE":
                    clearInterval(_obj.timelineEvent);
                    _obj.timelineEvent=null;
                break;
                case "END":
                    clearInterval(_obj.timelineEvent);
                    _obj.timelineEvent=null;
                    document.getElementById("_adlibBtnPlay").style.display = "none";
                    document.getElementById("_adlibBtnPause").style.display = "none";
                    document.getElementById("_adlibBtnReplay").style.display = "block";
                break;
            }
        }
    },
    localTesting: function(s){
        if(window.location.protocol=="file:"||window.location.origin=="http://localhost"||window.location.hostname=="127.0.0.1"){
            let size = s.split("x");
            let width = Number(size[0]);
            let height = Number(size[1]);
            let frameHeight = height + 20;
            let buttonY = height+5;
            let countPreview = 1;
            let iconSize = (width < 160)? 10 : 13 ;
            let adlibLogo = "https://beta.ad-lib.io/static/media/logo.19626aac.svg";
            let creativeSize = "<svg enable-background=\"new 0 0 24 24\" height=\""+iconSize+"px\" width=\""+iconSize+"px\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"currentColor\" d=\"m4.5 3c-.128 0-.256-.049-.354-.146l-1.646-1.647-1.646 1.647c-.195.195-.512.195-.707 0s-.195-.512 0-.707l2-2c.195-.195.512-.195.707 0l2 2c.195.195.195.512 0 .707-.098.097-.226.146-.354.146z\"/><path fill=\"currentColor\" d=\"m21.5 24c-.128 0-.256-.049-.354-.146-.195-.195-.195-.512 0-.707l1.646-1.646-1.646-1.646c-.195-.195-.195-.512 0-.707s.512-.195.707 0l2 2c.195.195.195.512 0 .707l-2 2c-.097.096-.225.145-.353.145z\"/><path fill=\"currentColor\" d=\"m2.5 24c-.276 0-.5-.224-.5-.5v-22.75c0-.276.224-.5.5-.5s.5.224.5.5v22.75c0 .276-.224.5-.5.5z\"/><path fill=\"currentColor\" d=\"m23.25 22h-22.75c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h22.75c.276 0 .5.224.5.5s-.224.5-.5.5z\"/><path fill=\"currentColor\" d=\"m13 10c-.061 0-.122-.011-.18-.033l-6.5-2.5c-.193-.074-.32-.26-.32-.467s.127-.393.32-.467l6.5-2.5c.115-.044.244-.044.359 0l6.5 2.5c.194.074.321.26.321.467s-.127.393-.32.467l-6.5 2.5c-.058.022-.119.033-.18.033zm-5.107-3 5.107 1.964 5.107-1.964-5.107-1.964z\"/><path fill=\"currentColor\" d=\"m13 18c-.061 0-.122-.011-.18-.033l-6.5-2.5c-.193-.074-.32-.26-.32-.467v-8c0-.276.224-.5.5-.5s.5.224.5.5v7.657l6 2.308 6-2.308v-7.657c0-.276.224-.5.5-.5s.5.224.5.5v8c0 .207-.127.393-.32.467l-6.5 2.5c-.058.022-.119.033-.18.033z\"/><path fill=\"currentColor\" d=\"m13 18c-.276 0-.5-.224-.5-.5v-8c0-.276.224-.5.5-.5s.5.224.5.5v8c0 .276-.224.5-.5.5z\"/></svg>";
            let duration = "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\""+iconSize+"px\" width=\""+iconSize+"px\" viewBox=\"0 0 512 512\" style=\"enable-background:new 0 0 512 512;\"><path fill=\"currentColor\" d=\"M347.216,301.211l-71.387-53.54V138.609c0-10.966-8.864-19.83-19.83-19.83c-10.966,0-19.83,8.864-19.83,19.83v118.978c0,6.246,2.935,12.136,7.932,15.864l79.318,59.489c3.569,2.677,7.734,3.966,11.878,3.966c6.048,0,11.997-2.717,15.884-7.952C357.766,320.208,355.981,307.775,347.216,301.211z\"/><path fill=\"currentColor\" d=\"M256,0C114.833,0,0,114.833,0,256s114.833,256,256,256s256-114.833,256-256S397.167,0,256,0z M256,472.341c-119.275,0-216.341-97.066-216.341-216.341S136.725,39.659,256,39.659c119.295,0,216.341,97.066,216.341,216.341S375.275,472.341,256,472.341z\"/></svg>";
            let play = "<svg enable-background=\"new 0 0 320.001 320.001\" height=\""+iconSize+"px\" width=\""+iconSize+"px\" viewBox=\"0 0 320.001 320.001\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"currentColor\" d=\"m295.84 146.049-256-144c-4.96-2.784-11.008-2.72-15.904.128-4.928 2.88-7.936 8.128-7.936 13.824v288c0 5.696 3.008 10.944 7.936 13.824 2.496 1.44 5.28 2.176 8.064 2.176 2.688 0 5.408-.672 7.84-2.048l256-144c5.024-2.848 8.16-8.16 8.16-13.952s-3.136-11.104-8.16-13.952z\"/></svg>";
            let pause = "<svg viewBox=\"-45 0 327 327\" height=\""+iconSize+"px\" width=\""+iconSize+"px\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"currentColor\" d=\"m158 0h71c4.417969 0 8 3.582031 8 8v311c0 4.417969-3.582031 8-8 8h-71c-4.417969 0-8-3.582031-8-8v-311c0-4.417969 3.582031-8 8-8zm0 0\"/><path fill=\"currentColor\" d=\"m8 0h71c4.417969 0 8 3.582031 8 8v311c0 4.417969-3.582031 8-8 8h-71c-4.417969 0-8-3.582031-8-8v-311c0-4.417969 3.582031-8 8-8zm0 0\"/></svg>";
            let replay = "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\""+iconSize+"px\" width=\""+iconSize+"px\" viewBox=\"0 0 491.236 491.236\" style=\"enable-background:new 0 0 491.236 491.236;\"><path fill=\"currentColor\" d=\"M55.89,262.818c-3-26-0.5-51.1,6.3-74.3c22.6-77.1,93.5-133.8,177.6-134.8v-50.4c0-2.8,3.5-4.3,5.8-2.6l103.7,76.2c1.7,1.3,1.7,3.9,0,5.1l-103.6,76.2c-2.4,1.7-5.8,0.2-5.8-2.6v-50.3c-55.3,0.9-102.5,35-122.8,83.2c-7.7,18.2-11.6,38.3-10.5,59.4c1.5,29,12.4,55.7,29.6,77.3c9.2,11.5,7,28.3-4.9,37c-11.3,8.3-27.1,6-35.8-5C74.19,330.618,59.99,298.218,55.89,262.818zM355.29,166.018c17.3,21.5,28.2,48.3,29.6,77.3c1.1,21.2-2.9,41.3-10.5,59.4c-20.3,48.2-67.5,82.4-122.8,83.2v-50.3c0-2.8-3.5-4.3-5.8-2.6l-103.7,76.2c-1.7,1.3-1.7,3.9,0,5.1l103.6,76.2c2.4,1.7,5.8,0.2,5.8-2.6v-50.4c84.1-0.9,155.1-57.6,177.6-134.8c6.8-23.2,9.2-48.3,6.3-74.3c-4-35.4-18.2-67.8-39.5-94.4c-8.8-11-24.5-13.3-35.8-5C348.29,137.718,346.09,154.518,355.29,166.018z\"/></svg>";
            let body = document.getElementsByTagName("BODY")[0];

            if(window.self===window.top){                
                body.style.background = "#e3e8ee";
                body.innerHTML="<div style=\"display:none;\">"+body.innerHTML +"</div>";
                body.innerHTML+="<div style=\"background:#1e0032;height:60px;text-align:center;\"><div style=\"padding-top:5px;\"><img style=\"width:320px;height:auto;\" src=\""+adlibLogo+"\"/></div></div><div id=\"_localPreview\" style=\"margin-bottom:70px;\"><div style=\"display:block;margin:20px auto;width:"+(width+22)+"px;height:"+(frameHeight+22)+"px;overflow:hidden;border:1px solid #bdbaba;border-radius:5.5px;padding:10px;background:white;box-shadow: 0 1px 15px 1px rgb(90 90 90 / 8%);\"><iframe id=\"localpreview"+countPreview+"\" name=\"localpreview"+countPreview+"\" frameborder='0' scrolling='no' width=\""+width+"px\" height=\""+frameHeight+"px\" src=\""+window.location+"\"></iframe></div></div>";
                return true;
            }else{
                var _fx = (width < 170)? "10px" : "12px" ;
                var _ft = (width < 170)? "-2px" : "-1.5px" ;
                body.innerHTML+="<div id=\"playPause\" style=\"height:30px;width:"+width+"px;position:absolute;top:"+buttonY+"px;\"><span style=\"position:absolute;left:0;color:#444343;font-size:"+_fx+";font-family:Arial;color:#1e0032;\"><span>"+creativeSize+"</span> <b style=\"position:relative;top:"+_ft+";\">"+s+"</b>&nbsp;&nbsp;<span style=\"color:#1e0032;\">"+duration+"</span> <b id=\"_adlibTimeline\" style=\"position:relative;top:"+_ft+";\">0.0</b></span><div style=\"position:absolute;right:0;font-size:"+_fx+";\"><span style=\"display:none;color:#1e0032;\" id=\"_adlibBtnPlay\">"+play+"</span> <span style=\"display:none;color:#1e0032;\" id=\"_adlibBtnPause\">"+pause+"</span> <span style=\"color:#1e0032;\" id=\"_adlibBtnReplay\">"+replay+"</span></div></div>";

                setTimeout(function(){
                    document.getElementById("_adlibBtnPause").style.display = "inline";
                    document.getElementById("_adlibBtnPlay").addEventListener("click", function(){
                        this.style.display = "none";
                        document.getElementById("_adlibBtnPause").style.display = "inline";
                        gwd.auto_PlayBtnClick();
                        _obj.localTimeline("PLAY");
                    });
                    document.getElementById("_adlibBtnPause").addEventListener("click", function(){
                        this.style.display = "none";
                        document.getElementById("_adlibBtnPlay").style.display = "inline";
                        gwd.auto_PauseBtnClick();
                        _obj.localTimeline("PAUSE");
                    });
                    document.getElementById("_adlibBtnReplay").addEventListener("click", ;
                }, 1);
                return false;
            }
        }else{
            return false;
        }
    },

    assignInvocationCode: function() {
        let campaign = "dynamicContent." + Object.keys(devDynamicContent)[0] + "[0]."
        for (let i = 0; i < DV.length; i++) {
            let url = detectObj(Object(eval(campaign + DV[i])));
            let val = eval(campaign + DV[i]);
            (String(url).indexOf('http') > -1) ? defaultValues[DV[i]] = String(url) : defaultValues[DV[i]] = val;
            
        }    
    },
    createAd: function(s) {
        if(_obj.localTesting(s) == false){
            document.getElementById('adSize').setAttribute('content','width='+s.split('x')[0]+', height='+s.split('x')[1]);
            document.querySelector('#mainContent').setAttribute('style','width:'+s.split('x')[0]+'px;height:'+s.split('x')[1]+'px');   
            //(isMobile != null) ? document.querySelector('#exitButton').addEventListener('touchend',exitCall) : document.querySelector('#exitButton').addEventListener('click',exitCall);
            if (isMobile != null) {
                const addTouchListener = (element, callback) => {
                    element.addEventListener('touchstart', () => {
                      element.addEventListener('touchend', callback, { once: true })
                    })                  
                    element.addEventListener('touchmove', 
                  }
                  addTouchListener(
                    document.getElementById('exitButton'),
                                      )
            } else {
                document.querySelector('#exitButton').addEventListener('click',exitCall);
            }
            populate();
            _obj.dvLoader();
            _obj.verifyDVLoaded(_obj.imgLoader);
        }
    },
    populateElements: function() {
        let elems = document.querySelectorAll('body *');
        for (var i = 0;i<elems.length;i++) {   
            if(elems[i].getAttribute('adlib-text') != null) {
                if (!Adlib.isEmpty(defaultValues[elems[i].getAttribute('adlib-text')])) {
                    document.querySelector('#'+elems[i].id).innerHTML = defaultValues[elems[i].getAttribute('adlib-text')]
                } else {
                    //document.querySelector('#'+elems[i].id).style.display = "none";
                }
            }
            if(elems[i].getAttribute('adlib-image') != null) {
                if (defaultValues[elems[i].getAttribute('adlib-image')].length != undefined) {
                    document.querySelector('#'+elems[i].id).src = defaultValues[elems[i].getAttribute('adlib-image')]
                } else {
                    defaultValues[elems[i].getAttribute('adlib-image')] = "blank.png"
                }
            }               
        }
    },
    imgLoader: function() {      
        var imgs = document.images,
        len = imgs.length,
        counter = 0;
        for(var i = 0; i < imgs.length; i++){
            if(imgs[i].complete) {
                incrementCounter();
            } else {
                imgs[i].addEventListener('load', incrementCounter, false);
            }
        }
        if (len === 0) {
            _obj.loadAd();         
        }
        function incrementCounter() {
            counter++;
            if (counter === len) {
                _obj.loadAd();
            }
        }
    },
    dvLoader: function() {
        if("undefined"!=typeof ADLBIsJsBanner)var callAdlib=setInterval(function(){window.ADLBIsJsBanner&&(clearInterval(callAdlib),_isPass=!0)},1);else _isPass=!0; 
    },
    verifyDVLoaded: function(callback) {
        var _passInterval=setInterval(1); 
    },
    fpsSettings: 
    loadAd: function() {
        gsap.ticker.fps(fpsValue),adlibStart(),setTimeout(_obj.preloadDelay);
    },
    textResize: function() {   
        let resizeElems=document.querySelectorAll("body *");for(var i=0;i<resizeElems.length;i++)if(void 0!=resizeElems[i].getAttribute("textResize")){resizeElems[i].getAttribute("settings").replace(/[{ }]/g,"").split(",").forEach(;let e={};e={alignVert:!1,alignHoriz:!1,multiLine:!1,detectMultiLine:!0,minFontSize:6,maxFontSize:80,reProcess:!0,widthOnly:!1,alignVertWithFlexbox:!1},textFitSettings.forEach((t,r)=>{switch(t[0]){case"multiLine":e.multiLine="true"==t[1];break;case"maxFontSize":e.maxFontSize=parseInt(t[1]);break;case"alignVert":e.alignVert="true"==t[1];break;case"alignHoriz":e.alignHoriz="true"==t[1];break;case"detectMultiLine":e.detectMultiLine="true"==t[1];break;case"minFontSize":e.minFontSize=parseInt(t[1]);break;case"reProcess":e.reProcess="true"==t[1];break;case"widthOnly":e.widthOnly="true"==t[1];break;case"alignVertWithFlexbox":e.alignVertWithFlexbox="true"==t[1]}}),textFit(document.getElementById(resizeElems[i].id),{widthOnly:e.widthOnly,reProcess:e.reProcess,minFontSize:e.minFontSize,detectMultiLine:e.detectMultiLine,alignHoriz:e.alignHoriz,alignVert:e.alignVert,maxFontSize:e.maxFontSize,alignVertWithFlexbox:e.alignVertWithFlexbox,multiLine:e.multiLine})}
    },
    isEmpty: function(v) {
        let retVal=!1;const cond=["n/a","N/A","none","null","&nbsp;"," n/a",""," ","n/A","N/a"];for(let n=0;n<cond.length;n++){if(v==cond[n]){retVal=!0;break}retVal=!1}
        return retVal;
    },
    templateCSS: function(css) {            
        let head=document.head||document.getElementsByTagName("head")[0]
        if (css) {
            let elems = document.querySelectorAll("body *");
            for (var i=0;i<elems.length;i++) {
                elems[i].classList.add(_obj.checkDeviceAndBrowser())
            }
            let createStyle = document.createElement("style");
            createStyle.type = "text/css";
            createStyle.appendChild(document.createTextNode(css))
            head.appendChild(createStyle)
        }
    },
    utmParser: function(utmValue) {
        var utmValue;

        var macroPlacementID = Enabler.getDartPageId();
        var macroSiteName = Enabler.getDartSiteName();
        var macroSiteID = Enabler.getDartSiteId();
        var macroAdID = Enabler.getDartAdId();
        var macroCampaignID = Enabler.getParameter("buy");
        var macroAdvertiserID = Enabler.getParameter("adv");
        var macroCreativeID = Enabler.getDartCreativeId();

        var dynamicUTM = utmValue;

        //encodingPhase
        var placementIdPhase = dynamicUTM.replace(/dynamicPlacementIdUTM/g,macroPlacementID); //This phase replaces dynamicPlacementIdUTM with the placement ID pulled from DCM 
        var siteNamePhase = placementIdPhase.replace(/dynamicSiteNameUTM/g,macroSiteName); //This phase replaces dynamicSiteUTM with the Site Name pulled from DCM 
        var siteIdPhase = siteNamePhase.replace(/dynamicSiteIdUTM/g,macroSiteID); //This phase replaces dynamicSiteIdUTM with the Site ID pulled from DCM 
        var adIdPhase = siteIdPhase.replace(/dynamicAdIdUTM/g,macroAdID); //This phase replaces dynamicAdIdUTM with the Ad ID pulled from DCM 
        var campaignIdPhase = adIdPhase.replace(/dynamicCampaignIdUTM/g,macroCampaignID); //This phase replaces dynamicCampaignIdUTM with the Campaign ID pulled from DCM 
        var advertiserIdPhase = campaignIdPhase.replace(/dynamicAdvertiserIdUTM/g,macroAdvertiserID); //This phase replaces dynamicAdvertiserIdUTM with the Advertiser ID pulled from DCM 
        var creativeIdPhase = advertiserIdPhase.replace(/dynamicCreativeIdUTM/g,macroCreativeID); //This phase replaces dynamicCreativeIdUTM with the Creative ID pulled from DCM 
        
        var finalPhase = creativeIdPhase.replace(/amp;/g,"")
        return(finalPhase);        
    },
    getStyle: function(o,prop) {
        return parseInt(_win.getComputedStyle(eval(o)).getPropertyValue(prop).match(/\d+/))
    },
    checkDeviceAndBrowser: function() {
        if(np.indexOf("Win")>-1){if(document.documentMode)return"winIE";if(ua.indexOf("Chrome")>-1||window.chrome&&window.chrome.webstore)return"winChrome";if(ua.indexOf("Firefox")>-1||"undefined"!=typeof InstallTrigger)return"winFirefox"}else if(navigator.maxTouchPoints>=5&&np.indexOf("Mac")>-1){if(ua.indexOf("Safari")>-1)return"ipadSafari";if(ua.indexOf("Chrome")>-1)return"ipadChrome";if(ua.indexOf("Firefox")>-1)return"ipadFirefox"}else if(np.indexOf("Mac")>-1){if(ua.indexOf("Chrome")>-1)return"macChrome";if(ua.indexOf("Firefox")>-1)return"macFirefox";if(ua.indexOf("Safari")>-1)return"macSafari"}else if(np.indexOf("iPhone")>-1){if(ua.indexOf("Safari")>-1)return"iphoneSafari";if(ua.indexOf("Chrome")>-1)return"iphoneChrome";if(ua.indexOf("Firefox")>-1)return"iphoneFirefox"}else if(np.indexOf("Linux")>-1&&(ua.indexOf("SM-A")>-1||ua.indexOf("SM-G")>-1||ua.indexOf("GT-")>-1||ua.indexOf("SM-N")>-1||ua.indexOf("Pixel")>-1||ua.indexOf("moto")>-1||ua.indexOf("Redmi")>-1||ua.indexOf("vivo")>-1||ua.indexOf("SM-S")>-1)){if(ua.indexOf("Chrome")>-1)return"androidPhoneChrome";if(ua.indexOf("Firefox")>-1)return"androidPhoneFirefox"}else if(np.indexOf("Linux")>-1&&ua.indexOf("SM-T")>-1||ua.indexOf("Nexus")>-1||ua.indexOf("SM-X")>-1){if(ua.indexOf("Chrome")>-1)return"androidTabletChrome";if(ua.indexOf("Firefox")>-1)return"androidTabletFirefox"}
    },
    remove_tags: function(html, withLine) {
        var count = 0;
        if(withLine == true){
             html = html.replace(/(<|&lt;)br\s*\/*(>|&gt;)/g, function(){ count+=1;return "||br||"}); 
        } 
        var tmp = document.createElement("DIV");
        tmp.innerHTML = html;
        html = tmp.textContent||tmp.innerText;
        while(count > 0){
             html = html.replace("||br||","<br>");
             count--;
        }
        return html;
    },
    preloadDelay: 2000,
}
const _obj=Adlib,_win=this,DV=Object.keys(defaultValues);
let vidCnt,fpsValue = 30;
let ua = navigator.userAgent;
let np = navigator.platform;
let textFitSettings = [];
/*************************************************
ADLIB OBJECT - end
*************************************************/