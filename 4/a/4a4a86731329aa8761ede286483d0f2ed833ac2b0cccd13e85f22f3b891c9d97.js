const scar={l:(a,b,c=[])=>{let d=0;try{d=scarD.l(c,...scarD[a][b])}catch{}finally{return d}},a:{u:()=>{var a=navigator.userAgent.toLowerCase();if(null==a)return!1;if(null!=/iphone|ipod|android|blackberry|opera mini|opera mobi|nokia|symbian|windows ce|ppc;|iemobile|smartphone|up.browser|up.link|sonyericsson|motorola|tablet browser|midp|portalmmm|htc |htc_|htc-|sqh|hp |hp-|spv|palm|xda |xda_|vodafone|configuration\/cldc|mmp|pocket|kindle|alcatel|samsung|sgh-|tianyu|openwave|wap_browser|wap browser|phone|asus/.exec(a))return!0;if(4<=a.length){if(null!=/acs-|amoi|benq|doco|eric|huaw|lct_|lg(-|\/|_| |w)*|leno|mobi|mot-|moto|nec-|pana|phil|sage|sams|sec-|sch-|sgh-|shar|sie-|sony|wap_|zte-/.exec(a.substring(0,4)))return!0}return!1},v:()=>window.matchMedia("(max-width: 639px)").matches?"mobile":window.matchMedia("(min-width: 640px) and (max-width: 919px)").matches?"tablet":"desktop",d:a=>a?new Date(a):Date,t:null,r:()=>(scar.tba=void 0===scar.tba?scar.vd.bid.split("."):scar.tba,scar.a.t)?scar.a.t:(scar.a.t="function"==typeof siteC.medium?siteC.medium():"viewport"==siteC.medium?scar.a.v():scar.a.u()?"mobile":"desktop",scar.l(1,1,[scar.a.t]),scar.a.t)},d:{e:null,n:null,i:a=>parseInt(a),a:()=>new Promise(a=>{var b=0,c=setInterval(function(){b+=1,600===b&&clearInterval(c),"undefined"!=typeof window.__tcfapi&&(clearInterval(c),scar.l(2,1),a(1)),b++},100)}),w:a=>new Promise(b=>{window.__tcfapi("addEventListener",2,function(c,d){d&&("tcloaded"===c.eventStatus||"useractioncomplete"===c.eventStatus)&&(scar.l(2,2),scar.d.e=c,window.__tcfapi("getNonIABVendorConsents",2,(a,b)=>{b&&a.nonIabVendorConsents&&(scar.d.n=a.nonIabVendorConsents)}),a(),b(1))})})},c:{purpose:(a,b)=>scar.d.e.purpose[a][b]||!1,vendor:(a,b)=>scar.d.e.vendor[a][b]||!1,publisher:(a,b)=>scar.d.e.publisher[a][b]||!1},f:{a:()=>scar.c.purpose("consents",2)&&scar.c.purpose("consents",7)&&scar.c.purpose("consents",9)&&scar.c.purpose("consents",10)?0:1,n:()=>!(scar.c.purpose("consents",3)&&scar.c.purpose("consents",4)),s:()=>new Promise(a=>{if(scar.l(3,1),googletag.cmd.push(()=>{window.googletag.enableServices()}))return a(1)}),o:()=>(scar.l(3,6),googletag.cmd.push(()=>{googletag.pubads().enableSingleRequest(),scar.l(3,7)}),1),tbs:()=>10*(10*(Math.random()*(scar.tb+1/2-1)+1)),r:(a=null)=>new Promise(b=>{if(scar.l(3,2),googletag.cmd.push(()=>{googletag.pubads().refresh(a)}))return b(1)}),p:()=>new Promise(a=>scar.f.a()?(scar.l(3,3),a(1)):googletag.cmd.push(()=>{let a=scar.f.n();googletag.pubads().setPrivacySettings({nonPersonalizedAds:a}),scar.l(3,4,[a])})?a(1):void 0),q:()=>new Promise((a,b)=>{if(scar.f.s()&&scar.f.r())a(1);else{let a=scar.l(3,5);b(a)}})},b:{d:(a=0)=>new Promise(b=>{if(scar.b.dd)return scar.l(4,1),b(1);scar.a.t||(scar.a.t=scar.a.r());let c=scar.a.t;scar.b.dd=1;let d=a?a:siteC.slots;if(scar.l(4,2,[c]),googletag.cmd.push(function(){d.forEach(a=>{if((a[3]===c||"any"===a[3])&&(!Array.isArray(a[4])||void 0===window.ssection||a[4].includes(window.ssection))){switch(typeof a[1]){case"string":let b=null;switch(a[1]){case"interstitial":case"web interstitial":case"web_interstitial":case"INTERSTITIAL":b=googletag.defineOutOfPageSlot(a[0],googletag.enums.OutOfPageFormat.INTERSTITIAL);break;case"top_anchor":case"top anchor":case"TOP_ANCHOR":b=googletag.defineOutOfPageSlot(a[0],googletag.enums.OutOfPageFormat.TOP_ANCHOR);break;case"bottom_anchor":case"bottom anchor":case"BOTTOM_ANCHOR":b=googletag.defineOutOfPageSlot(a[0],googletag.enums.OutOfPageFormat.BOTTOM_ANCHOR);}b&&scar.b.gs.push(b.addService(googletag.pubads()));break;default:scar.b.gs.push(googletag.defineSlot(a[0],a[1],a[2]).addService(googletag.pubads()));}scar.l(4,3,[c,a[0],a[2]])}})}))return b(1)}),tbr:()=>{if(scar.tb&&0==scar.tb%2)return scar.tb=2,scar.tba=null,!0;let b=scar.a.d("20"+scar.tba[1]).valueOf()+scar.f.tbs()*scar.d.i(scar.tba[2]+scar.tba[0]+scar.tba[3]);return scar.a.d().now()>b?(scarC.qp.scarTb=window.btoa(b),scar.tb=2,scar.tba=null,!1):(scar.tb=2,scar.tba=null,!0)},dd:!1,gs:[],a:(a=0)=>new Promise(b=>{let c=scar.a.r();scar.l(4,4,[c]);let d=0,e=setInterval(function(){return d+=1,600===d&&clearInterval(e),"complete"===document.readyState&&(clearInterval(e),googletag.cmd.push(function(){let b=a?a:siteC.slots;b.forEach(a=>{a[3]!==c&&"any"!==a[3]||"string"==typeof a[1]||Array.isArray(a[4])&&void 0!==window.ssection&&!a[4].includes(window.ssection)||document.getElementById(a[2])&&(googletag.display(a[2]),scar.l(4,5,[c,a[0],a[2]]))})}))?b(1):void d++},100)})},p:{pk:"scar_preview",a:()=>{if(siteC.target.category){let a=void 0===window.scategory?null:window.scategory,b=a&&siteC.catMap.has(a)?void 0===siteC.catMap.get(a)?a:siteC.catMap.get(a):siteC.target.ignoreUnknownCateg?null:a;b&&(b=Array.isArray(b)?b:""+b,siteC.target.add.push([siteC.target.category,b]))}if(siteC.target.article){let a=void 0===window.sarticle?null:window.sarticle;void 0!==window.sarticle&&a&&(a=Array.isArray(a)?a:""+a,siteC.target.add.push([siteC.target.article,a]))}if(siteC.target.client){let a=void 0===window.sclient?null:window.sclient;void 0!==window.sclient&&a&&(a=Array.isArray(a)?a:""+a,siteC.target.add.push([siteC.target.client,a]))}void 0!==window.stargeting&&Array.isArray(window.stargeting)&&window.stargeting.forEach(a=>{siteC.target.add.push([""+a[0],a[1]])});let a=scar.ws().getItem("scarP");return a&&(scar.l(9,10),siteC.target.add.push([scar.p.pk,a])),siteC.target.add},r:()=>new Promise(a=>{if(scar.l(5,1),googletag.cmd.push(function(){scar.p.a().forEach(function(a){googletag.pubads().setTargeting(""+a[0],a[1]),scar.l(5,2,[a[0],a[1]])})}))return a(1)})},s:{c:a=>scar.d.e.gdprApplies?a.every(a=>scar.c[a[0]](...a[1])):1,s:a=>{let b=void 0===window.ssection?null:window.ssection;return!b||a.includes(b)?1:0},l:a=>new Promise((b,c)=>{scar.l(6,1,[a]);let d=siteC.scripts[a],e="",f=c=>"function"==typeof c.whenNotRun?Promise.resolve(c.whenNotRun()).then(b(1)):b(1);if(scar.a.t||(scar.a.t=scar.a.r()),void 0!==d.onlyOnMedium&&d.onlyOnMedium&&0!==d.onlyOnMedium.length&&!d.onlyOnMedium.includes(scar.a.t))return e=scar.l(6,2,[a]),f(d);if(void 0!==d.consent&&d.consent&&0!==d.consent.length&&!scar.s.c(d.consent))return e=scar.l(6,3,[a]),siteC.scripts[a].ignored=1,f(d);if(void 0!==d.onlyInSection&&d.onlyInSection&&!scar.s.s(d.onlyInSection))return e=scar.l(6,4,[a]),f(d);if(void 0!==d.notInSection&&d.notInSection&&scar.s.s(d.notInSection))return e=scar.l(6,5,[a]),f(d);if(void 0!==d.onlyWhen&&"function"==typeof d.onlyWhen&&!d.onlyWhen())return e=scar.l(6,21,[a]),f(d);if("function"==typeof d.fn)return scar.l(6,1,[a]),Promise.resolve(d.fn()).then(b(1));if(void 0!==d.url&&d.url){let f=document.createElement("script");if(f.type="text/javascript",f.src=d.url,void 0!==d.attr&&d.attr)for(const[a,b]of Object.entries(d.attr))f.setAttribute(a,b);let g="";switch(d.position){case"head-last":g=document.getElementsByTagName("head")[0],g.insertBefore(f,g.lastChild);break;case"body-first":g=document.getElementsByTagName("body")[0],g.insertBefore(f,g.firstChild);break;case"body-last":g=document.getElementsByTagName("body")[0],g.insertBefore(f,g.lastChild);break;case"head-first":default:g=document.getElementsByTagName("head")[0],g.insertBefore(f,g.firstChild);}f.onload=()=>(scar.l(6,7,[a]),"function"==typeof d.onload?Promise.resolve(d.onload()).then(b(1)):b(1)),f.onerror=()=>(e=scar.l(6,8,[a]),"function"==typeof d.onerror?Promise.resolve(d.onerror()).then(b(1)):c(e))}}),d:a=>new Promise((b,c)=>{scar.l(6,9,[a]);let d=siteC.scripts[a],e="",f=0,g=setInterval(function(){return f+=1,600===f?(clearInterval(g),e=scar.l(6,10,[d]),c(e)):void 0!==d.ignored&&d.ignored?(clearInterval(g),e=scar.l(6,11,[a]),c(e)):void 0!==d.resolved&&d.resolved?(clearInterval(g),scar.l(6,12,[a]),b(1)):void f++},100)}),a:a=>new Promise(b=>{scar.l(6,13,[a]);let c=siteC.scripts[a];c.dependencies=Array.isArray(c.dependencies)?c.dependencies:[];let d="";return void 0!==c.resolved&&c.resolved?(scar.l(6,14,[a]),b(1)):void 0!==c.ignored&&c.ignored?(scar.l(6,15,[a]),b(1)):Promise.all(c.dependencies.map(function(a){return scar.s.d(a)})).then(()=>{scar.s.l(a).then(()=>{siteC.scripts[a].resolved=1,scar.l(6,16,[a]),b(1)},()=>{siteC.scripts[a].ignored=1,d=scar.l(6,17,[a]),b(1)})},()=>{scar.l(6,18,[a]),siteC.scripts[a].ignored=1,b(1)})}),r:(a=1)=>new Promise(b=>(scar.l(6,a?19:20),Promise.all(Object.keys(siteC.scripts).map(b=>a?void 0===siteC.scripts[b].cmp||siteC.scripts[b].cmp?scar.s.a(b):null:void 0===siteC.scripts[b].cmp||siteC.scripts[b].cmp?null:scar.s.a(b))).then(()=>{b(1)})))},q:{a:(a,b=[],c=1)=>(this.el=a,this.total=b.length,this.todo=b,this.running=[],this.runningCmd=new Map([]),this.complete=[],this.count=c,this.n=()=>this.running.length<this.count&&this.todo.length,this.d=a=>(scar.l(7,1,[a]),this.el[a].dependencies=scar.cmd.dep.get(a),Promise.all(this.el[a].dependencies.map(function(a){return this.runningCmd.has(a)?(scar.l(7,2,[a]),null):this.d(a).then(()=>this.runningCmd.has(a)?(scar.l(7,2,[a]),null):(scar.l(7,3,[a]),this.runningCmd.set(a),this.el[a].factory()))},this))),this.r=()=>{if(scar.b.tbr())for(;this.n();){const a=this.todo.shift();Promise.all(a.map(function(a){return this.runningCmd.has(a)?(scar.l(7,4,[a]),null):(this.runningCmd.set(a),this.el[a].dependencies=scar.cmd.dep.get(a),this.d(a).then(()=>this.el[a].factory()))},this)).then(()=>{this.complete.push(...this.running.shift()),this.r()},()=>{this.complete.push(...this.running.shift()),this.r()}),this.running.push(a)}},this)},ws:()=>window.sessionStorage,in2s:{d:(a=1)=>{scar.ws().setItem("scarD",1),a&&location.reload()},t:(a=0,b=1,c=1)=>{scar.ws().setItem("scarV",a?a:scarC.tv?scarC.tv:scarC.lv),scar.ws().setItem("scarD",b),c&&location.reload()},p:(a=1,b=1,c=1)=>{scar.ws().setItem("scarP",a),scar.ws().setItem("scarD",b),c&&location.reload()},l:()=>{scar.ws().removeItem("scarD"),scar.ws().removeItem("scarV"),scar.ws().removeItem("scarP"),location.reload()}},cmd:{can:{defineSlots:{factory:()=>scar.b.d()},displaySlots:{factory:()=>scar.b.a()},pageLevelTargeting:{factory:()=>scar.p.r()},enableDFPServices:{factory:()=>scar.f.s()},enableSRmode:{factory:()=>scar.f.o()},refreshDFP:{factory:()=>scar.f.r()},prepareDFPRequest:{factory:()=>scar.f.p()},sendDFPRequest:{factory:()=>scar.f.q()},resolveScripts:{factory:()=>scar.s.r()}},list:()=>{scar.l(8,1),Object.keys(scar.cmd.can).map(function(a,b){scar.l(8,2,[b,a])})},dep:{get:a=>void 0===scar.cmd.can[a].dependencies?void 0!==siteC.commands[a]&&siteC.commands[a]?siteC.commands[a]:[]:scar.cmd.can[a].dependencies},add:()=>new Promise(()=>{for(let a in scar.l(8,3),siteC.commands.add)scar.l(8,4,[a]),scar.cmd.can[a]={},scar.cmd.can[a].factory=()=>new Promise(b=>siteC.commands.add[a].factory()?b():b()),scar.cmd.can[a].dependencies=siteC.commands.add[a].dependencies})},vd:{id:"v0.9",bid:"536.23.31.3471",author:"dev@intelia.ro"},r:(a=0)=>{scar.l(9,2,[scar.vd.id]),void 0!==scarC.tmode&&1==scarC.tmode&&(scar.l(9,3),scarC.loadv==scarC.lv?scar.l(9,5,[scarC.loadv]):scar.l(9,4,[scarC.loadv,scarC.lv])),void 0!==siteC.commands.add&&scar.cmd.add(),scar.a.r(),scar.tb=a,scar.s.r(0),scar.d.a().then(()=>scar.d.w(()=>{window.googletag=window.googletag||{},window.googletag.cmd=window.googletag.cmd||[];let a=JSON.parse(JSON.stringify(siteC.flow));scar.q.a(scar.cmd.can,a).r()}))}};"";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    }
    document.cookie = escape(name) + "=" + escape(value) + expires + "; path=/;domain=" + AMVC_DOMAIN_NAME;
}

function readCookieJs(name) {
    const nameEQ = escape(name) + '=';
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1, c.length);
        }
        if (c.indexOf(nameEQ) === 0) {
            return unescape(c.substring(nameEQ.length, c.length));
        }
    }
    return null;
}

function eraseCookieJs(name) {
    createCookieJs(name, "", -1);
}

var rankCaps = new Array();
rankCaps[1] = 7;
rankCaps[2] = 7;
rankCaps[3] = 10;
rankCaps[4] = 13;
rankCaps[5] = 20;

var checkForRank = 0;
var rank = null;

function countCharsAndCaps(element, div_id, userIsLogged) {
    if (div_id != null && typeof (div_id) != 'undefined') {
        countChars(element, div_id);
    }

    if (checkForRank === 0 && userIsLogged) {
        jQuery.ajax({
            url: window.location.origin + '/index.php?module=getUserRank.ajxinternal',
            method: 'post',
            dataType: 'json',
            success: function (response) {
                if (!response) {
                    return;
                }
                if (response.rank != null && typeof (response.rank) != 'undefined') {
                    checkForRank = 1;
                    rank = response.rank;

                    if (div_id != null && typeof (div_id) != 'undefined') {
                        capsCalculateAndFillMessage(element, div_id, rank)
                    }
                }
            },
            onFailure: function (transport) {

            }
        });
    }

    if (div_id != null && typeof (div_id) != 'undefined') {
        capsCalculateAndFillMessage(element, div_id, rank)
    }
}

function capsCalculateAndFillMessage(element, div_id, rank) {
    if (rank == null || typeof (rank) == 'undefined') {
        return;
    }

    var permittedChars = 0;
    var occurence = 200;
    if (div_id === 'numaratoare_title') {
        permittedChars = rankCaps[rank];
    } else if (div_id === 'numaratoare') {
        var compensator = Math.ceil(eval(element.value.length / occurence));
        permittedChars = compensator * rankCaps[rank];
    }

    var count = 0;
    for (var i = 0; i < element.value.length; i++) {
        if (/[A-Z]/.test(element.value.charAt(i))) {
            count++;
        }

        if (count > permittedChars) {
            if (div_id === 'numaratoare_title') {
                document.getElementById(div_id + '_caps').innerHTML = 'Ati depasit numarul permis de majuscule(' + permittedChars + ') conform rankului dumneavoastra';
            } else {
                document.getElementById(div_id + '_caps').innerHTML = 'Ati depasit numarul permis de majuscule conform rankului dumneavoastra';
            }
            document.getElementById(div_id + '_caps').style.color = '#ff0000';
            break;
        } else {
            document.getElementById(div_id + '_caps').innerHTML = '';
            document.getElementById(div_id + '_caps').style.color = '';
        }
    }
}


function countChars(element, div_id) {
    if (!element) {
        return;
    }
    var numAllowed = element.getAttribute('accesskey');
    var cleft = eval(element.getAttribute('accesskey')) - element.value.length;
    if (cleft > 0) {
        element.lastValidValue = element.value;
        document.getElementById(div_id).innerHTML = cleft + ' caractere ramase';
    } else {
        if (element.lastValidValue) {
            element.value = element.lastValidValue;
        } else {
            element.value = element.value.substr(0, element.getAttribute('accesskey'));
            element.lastValidValue = element.value;
        }
        element.focus();
        element.scrollTop = element.scrollHeight;
    }

    if (cleft < numAllowed * 0.05) {
        document.getElementById(div_id).style.color = '#ff0000';
    } else {
        document.getElementById(div_id).style.color = '';
    }
}

let currentStandingsGroup = 'Group-A';

function changeStandingsGroup(id) {
    let currentElement = document.getElementById(currentStandingsGroup);
    if (currentStandingsGroup !== '') {
        currentElement.style.display = 'none';
        currentElement = document.getElementById('Top-' + currentStandingsGroup);
        if (currentElement.classList) {
            currentElement.classList.remove('selected');
        } else if (hasClass(currentElement, 'selected')) {
            const reg = new RegExp('(\\s|^)selected(\\s|$)');
            currentElement.className = currentElement.className.replace(reg, ' ')
        }
    }

    currentStandingsGroup = id;
    let newElement = document.getElementById(id);
    newElement.style.display = 'inline';
    newElement = document.getElementById('Top-' + id);
    if (newElement.classList) {
        newElement.classList.add('selected');
    } else if (!hasClass(newElement, 'selected')) {
        newElement.className += ' selected';
    }
}

const copyListener = (event) => {
    if (readCookieJs('zc_cvin')) {
        return;
    }
    const range = window.getSelection().getRangeAt(0),
        rangeContents = range.cloneContents(),
        pageLink = `${document.location.origin}${document.location.pathname}?utm_source=Ziare.com&utm_medium=copy-paste`,
        helper = document.createElement('div');
    let pageLinkText = 'Ziare.com';
    let pageText = 'Acest text a fost copiat de pe';

    if (document.getElementById('article__container')) {
        pageText = pageText + ' Ziare.com';
        pageLinkText = document.querySelector('#article__container .news__title').outerText;
    }
    helper.appendChild(rangeContents);

    event.clipboardData.setData('text/plain', `${helper.innerText} ${pageText} ${pageLinkText} ${pageLink}`);
    event.clipboardData.setData('text/html', `${helper.innerHTML} ${pageText} <a href="${pageLink}" target="_blank" style="text-decoration: none;">${pageLinkText}</a>`);
    event.preventDefault();
};
document.addEventListener('copy', copyListener);

function replaceBanners() {
    if (!document.getElementById('AdSense') || document.getElementById('AdSense').clientHeight) {
        return;
    }

    let pageBanners = jQuery('.banner');
    let zones = [];
    let zone = null;

    jQuery(pageBanners).each(function () {
        let classNames = jQuery(this).attr('class').split(/\s+/);

        jQuery.each(classNames, function (index, item) {
            if (item.indexOf("banner-") == 0) {
                zone = item.replace('banner-', '');
            }
        });
        if (!zone) {
            zone = '300x250';
        }
        zones.push(zone);
    });

    if (!jQuery(zones).length) {
        return;
    }

    jQuery.ajax({
        type: 'GET',
        url: CURRENT_WEB_PATH + 'index.php?module=staticBanners.ajxinternal',
        data: {zones: zones},
        dataType: 'json',
        success: function (response) {
            if (!jQuery(response.staticBanners).length) {
                return;
            }
            let staticBanners = response.staticBanners;
            let currentPosition = null;
            let classNames = null;
            let currentClassName = null;
            jQuery('.banner').each(function () {
                currentPosition = jQuery(this);
                classNames = jQuery(this).attr('class').split(/\s+/);
                currentClassName = null;
                zone = null;
                jQuery.each(classNames, function (index, item) {
                    if (item.indexOf("banner-") === 0) {
                        currentClassName = item;
                        zone = item.replace('banner-', '');
                    }
                });
                if (!zone) {
                    zone = '300x250';
                }
                if (staticBanners.hasOwnProperty(zone)) {
                    let banner = staticBanners[zone][0];
                    jQuery(currentPosition).removeClass('banner');
                    if (currentClassName) {
                        jQuery(currentPosition).removeClass(currentClassName);
                    }
                    jQuery(currentPosition).addClass('static');
                    let html = `<a href="${banner.url}" title="${banner.site}" target="_blank" ` +
                        `data-internal-analytics="${banner.id}" data-size="${zone}"><img src="${banner.img}"></a>`
                    jQuery(currentPosition).html(html);
                    staticBanners[zone].shift();
                }
            });
        }
    });
}

replaceBanners();

function fillBannersWithoutConsent() {
    if (!document.getElementById('AdSense') || !document.getElementById('AdSense').clientHeight) {
        return;
    }

    let pageBanners = jQuery('.banner');
    let zones = [];
    let zone = null;

    jQuery(pageBanners).each(function () {
        let classNames = jQuery(this).attr('class').split(/\s+/);

        jQuery.each(classNames, function (index, item) {
            if (item.indexOf("banner-") === 0) {
                zone = item.replace('banner-', '');
            }
        });
        if (!zone) {
            zone = '300x250';
        }
        zones.push(zone);
    });

    if (!jQuery(zones).length) {
        return;
    }

    jQuery.ajax({
        type: 'GET',
        url: window.location.origin + '/index.php?module=staticBanners.ajxinternal',
        data: {zones: zones},
        dataType: 'json',
        success: function (response) {
            if (!jQuery(response.staticBanners).length) {
                return;
            }
            let staticBanners = response.staticBanners;
            jQuery('.banner').each(function () {
                let element = jQuery(this);
                let classNames = jQuery(this).attr('class').split(/\s+/);
                let currentClassName = null;
                let zone = '300x250';
                jQuery.each(classNames, function (index, item) {
                    if (item.indexOf('banner-') === 0) {
                        currentClassName = item;
                        zone = item.replace('banner-', '');
                    }
                });
                if (staticBanners.hasOwnProperty(zone)) {
                    let banner = staticBanners[zone][0];
                    let html = `<div class="static"><a href="${banner.url}" title="${banner.site}" ` +
                        `target="_blank" data-internal-analytics="${banner.id}" data-size="${zone}">` +
                        `<img src="${banner.img}"></a></div>`;
                    if (jQuery(element).parent('.banner-container').length === 1) {
                        jQuery(element).parent('.banner-container').find('.banner-content div').html(html);
                    } else if (jQuery(element).parent('.branding-container').length === 1) {
                        jQuery(element).parent('.branding-container').find('.banner-content div').html(html);
                    } else if (jQuery(element).find('center').length === 1) {
                        jQuery(element).find('center div').html(html);
                    }
                    staticBanners[zone].shift();
                }
            });
        }
    });
}

window.addEventListener("noAdsConsent", (e) => {
    fillBannersWithoutConsent();
}, false);
