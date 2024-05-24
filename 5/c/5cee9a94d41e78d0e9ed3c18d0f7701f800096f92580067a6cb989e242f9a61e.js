/*
* Braze Web SDK v2.7.1
* (c) Braze, Inc. 2020 - http://braze.com
* License available at https://github.com/Appboy/appboy-web-sdk/blob/master/LICENSE
* Compiled on 2020-08-21
*/
(function(){(function(b,a){if("function"===typeof define&&define.amd)define([],a);else if("object"===typeof module&&module.exports)module.exports=a();else if(b.appboy){var d=a(),c;for(c in d)b.appboy[c]=d[c]}else b.appboy=a()})("undefined"!==typeof self?self:this,function(){var appboyInterface={};var n;r ca="function"==typeof Object.create?Object.create:da="function"==typeof Object.defineProperties?Object.defineProperty:
ar ha=fa(this);ar ja;
if("function"==typeof Object.setPrototypeOf)ja=Object.setPrototypeOf;else{var ka;a:{var la={$f:!0},na={};try{na.__proto__=la;ka=na.$f;break a}catch(a){}ka=!1}ja=ka?null}var oa=ja;
ia("String.prototype.repeat",;
ia("Promise",;var qa={Yg:;var ra={bb:;unction va(a,b,c){var d=ta(a).open(a.o.G,a.o.VERSION);if(null==d)return"function"===typeof c&&c(),!1;d.onupgradeneeded=d.onsuccess=function(e){a.A.debug("Opened indexedDB "+a.o.G+" v"+a.o.VERSION);var g=e.target.result;g.onversionchange=
b(g)};d.onerror=return!0}
sa.prototype.setItem=function(a,b,c,d,e){if(!ua(this))return"function"===typeof e&&e(),!1;var g=this;return va(this,function(f){f.objectStoreNames.contains(a)?(f=f.transaction([a],"readwrite").objectStore(a).put(c,b),f.onerror=function(){g.A.error("Could not store object "+b+" in "+a+" on indexedDB "+g.o.G);"function"===typeof e&&e()},f.onsuccess=:(g.A.error("Could not store object "+b+" in "+a+" on indexedDB "+
g.o.G+" - "+a+" is not a valid objectStore"),"function"===typeof e&&e())},e)};
sa.prototype.getItem=function(a,b,c){if(!ua(this))return!1;var d=this;return va(this,function(e){e.objectStoreNames.contains(a)?(e=e.transaction([a],"readonly").objectStore(a).get(b),e.onerror=function(){d.A.error("Could not retrieve object "+b+" in "+a+" on indexedDB "+d.o.G)},e.onsuccess=function(g){d.A.debug("Retrieved object "+b+" in "+a+" on indexedDB "+d.o.G);g=g.target.result;null!=g&&c(g)}):d.A.error("Could not retrieve object "+b+" in "+a+" on indexedDB "+d.o.G+" - "+a+" is not a valid objectStore")})};
function wa(a,b,c,d){ua(a)?va(a,function(e){e.objectStoreNames.contains(b)?(e=e.transaction([b],"readonly").objectStore(b).openCursor(null,"prev"),e.onerror=e.onsuccess=function(g){g=g.target.result;null!=g&&null!=g.value&&null!=g.key?(a.A.debug("Retrieved last record "+g.key+" in "+b+" on indexedDB "+a.o.G),c(g.key,g.value)):"function"===typeof d&&d()}):(a.A.error("Could not retrieve last record from "+
b+" on indexedDB "+a.o.G+" - "+b+" is not a valid objectStore"),"function"===typeof d&&d())},d):"function"===typeof d&&d()}
function xa(a,b,c){ua(a)&&va(a,function(d){d.objectStoreNames.contains(b)?(d=d.transaction([b],"readwrite").objectStore(b)["delete"](c),d.onerror=function(){a.A.error("Could not delete record "+c+" from "+b+" on indexedDB "+a.o.G)},d.onsuccess=:a.A.error("Could not delete record "+c+" from "+b+" on indexedDB "+a.o.G+" - "+b+" is not a valid objectStore")})}
sa.prototype.clearData=function(){if(!ua(this))return!1;var a=[],b;for(b in this.o.O)this.o.O.hasOwnProperty(b)&&this.o.O[b]!==this.o.O.Rc&&a.push(this.o.O[b]);var c=this;return va(this,function(d){d=d.transaction(a,"readwrite");for(var e=0;e<a.length;e++){var g=d.objectStore(a[e]).clear();g.onsuccess=function(){c.A.debug("Cleared "+this.source.name+" on indexedDB "+c.o.G)};g.onerror=d.oncomplete=function(){c.A.debug("Cleared all object stores on indexedDB "+
c.o.G)};d.onerror=)};var w={sd:Cb:Fd:Jd:debug:function(a){w.Ea&&null!=w.A&&w.A("Appboy: "+a)},info:error:;var B={CustomEvent:"ce",Bf:"p",Kf:"pc",dh:"ca",Cf:"i",Kc:"ie",jf:"cci",lf:"ccic",gf:"ccc",hf:"ccd",$d:"ss",Mf:"se",Af:"si",Sd:"sc",Rd:"sbc",zf:"sfe",mf:"iec",If:"lr",cf:"uae",ff:"ci",ef:"cc",Gf:"lcaa",Hf:"lcar",qf:"inc",nf:"add",rf:"rem",sf:"set"},za={yf:"feed_displayed",kf:"content_cards_displayed"},Aa={Ra:{G:"AppboyServiceWorkerAsyncStorage",VERSION:5,O:{tf:"data",Wd:"pushClicks",Tc:"pushSubscribed",ah:"fallbackDevice",df:"cardUpdates",Rc:"optOut"},cc:1}},v=w;ype.qc=E.prototype.C=function(){return{u:this.Nb,t:this.type,ts:this.time,s:this.sessionId,d:this.data}};a.prototype.C=r Ta=/^[^\x00-\x1F\x22]+$/,Ua=/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;var H={};function J(a,b){this.f=a;this.J=b}n=J.prototype;n.B=
n.ag=n.Hg=function(a){return Ra(a,"set first name","the firstName",!0)?this.f.H("first_name",a):!1};
n.Lg=function(a){return Ra(a,"set last name","the lastName",!0)?this.f.H("last_name",a):!1};n.Fg=function(a){return null===a||"string"===typeof a&&null!=a.toLowerCase().match(Ua)?this.f.H("email",a):(v.error('Cannot set email address - "'+a+'" did not pass RFC-5322 validation.'),!1)};n.Ig=function(a){"string"===typeof a&&(a=a.toLowerCase());return null===a||Ba(Xa,a,'Gender "'+a+'" is not a valid gender.',"User.Genders")?this.f.H("gender",a):!1};
n.Eg=function(a,b,c){if(null===a&&null===b&&null===c)return this.f.H("dob",null);a=parseInt(a);b=parseInt(b);c=parseInt(c);return isNaN(a)||isNaN(b)||isNaN(c)||12<b||1>b||31<c||1>c?(v.error("Cannot set date of birth - parameters should comprise a valid date e.g. setDateOfBirth(1776, 7, 4);"),!1):this.f.H("dob",""+a+"-"+b+"-"+c)};n.Cg=function(a){return Ra(a,"set country","the country",!0)?this.f.H("country",a):!1};
n.Jg=function(a){return Ra(a,"set home city","the homeCity",!0)?this.f.H("home_city",a):!1};n.Kg=function(a){return Ra(a,"set language","the language",!0)?this.f.H("language",a):!1};n.Gg=function(a){return Ba(Ya,a,'Email notification setting "'+a+'" is not a valid subscription type.',"User.NotificationSubscriptionTypes")?this.f.H("email_subscribe",a):!1};
n.Gd=function(a){return Ba(Ya,a,'Push notification setting "'+a+'" is not a valid subscription type.',"User.NotificationSubscriptionTypes")?this.f.H("push_subscribe",a):!1};n.Mg=function(a){return Ra(a,"set phone number","the phoneNumber",!0)?null===a||a.match(Za)?this.f.H("phone",a):(v.error('Cannot set phone number - "'+a+'" did not pass validation.'),!1):!1};n.Bg=
n.Ec=
n.Ed=
n.bg=function(a,b){return!Sa(a,"add to custom user attribute array","the given key")||null!=b&&!Sa(b,"add to custom user attribute array","the given value")?!1:$a(this.J,B.nf,a,b).h};n.wg=
n.rg=n.Bd=n.Jb=function(a){this.f.Jb(a)};
n.Dg=var Za=/^[0-9 .\\(\\)\\+\\-]+$/,Xa={MALE:"m",FEMALE:"f",OTHER:"o",UNKNOWN:"u",NOT_APPLICABLE:"n",PREFER_NOT_TO_SAY:"p"},Ya={OPTED_IN:"opted_in",SUBSCRIBED:"subscribed",UNSUBSCRIBED:"unsubscribed"};H.User=J;H.User.Genders=Xa;H.User.NotificationSubscriptionTypes=Ya;H.User.prototype.getUserId=J.prototype.B;
H.User.prototype.setFirstName=J.prototype.Hg;H.User.prototype.setLastName=J.prototype.Lg;H.User.prototype.setEmail=J.prototype.Fg;H.User.prototype.setGender=J.prototype.Ig;H.User.prototype.setDateOfBirth=J.prototype.Eg;H.User.prototype.setCountry=J.prototype.Cg;H.User.prototype.setHomeCity=J.prototype.Jg;H.User.prototype.setLanguage=J.prototype.Kg;H.User.prototype.setEmailNotificationSubscriptionType=J.prototype.Gg;H.User.prototype.setPushNotificationSubscriptionType=J.prototype.Gd;
H.User.prototype.setPhoneNumber=J.prototype.Mg;H.User.prototype.setAvatarImageUrl=J.prototype.Bg;H.User.prototype.setLastKnownLocation=J.prototype.Ec;H.User.prototype.setUserAttribute=J.prototype.H;H.User.prototype.setCustomUserAttribute=J.prototype.Ed;H.User.prototype.addToCustomAttributeArray=J.prototype.bg;H.User.prototype.removeFromCustomAttributeArray=J.prototype.wg;H.User.prototype.incrementCustomUserAttribute=J.prototype.rg;H.User.prototype.addAlias=J.prototype.ag;
H.User.prototype.setCustomLocationAttribute=J.prototype.Dg;function cb(){}cb.prototype.pd=function(){};cb.prototype.rd=function(){};cb.prototype.ob=function(){};var eb={Md:"Chrome",Ic:"Edge",Vb:"Internet Explorer",Ud:"Opera",Yd:"Safari",bh:"Firefox"};a(fb,cb);fb.prototype.pd=function(){return this.Wa};fb.prototype.rd=function(){return this.version};
fb.prototype.ob=a(gb,cb);gb.prototype.pd=function(){return this.Ae[0]||"Unknown Browser"};gb.prototype.rd=gb.prototype.ob=
function hb(){var a=navigator.userAgent||"",b=a.match(/(samsungbrowser|tizen|roku|konqueror|icab|crios|opera|ucbrowser|chrome|safari|firefox|camino|msie|trident(?=\/))\/?\s*(\.?\d+(\.\d+)*)/i)||[];if(/trident/i.test(b[1])){var c=/\brv[ :]+(\.?\d+(\.\d+)*)/g.exec(a)||[];return[eb.Vb,c[1]||""]}if(-1!==a.indexOf("(Web0S; Linux/SmartTV)"))return["LG Smart TV",null];if(-1!==a.indexOf("CrKey"))return["Chromecast",null];if(-1!==a.indexOf("BRAVIA")||-1!==a.indexOf("SonyCEBrowser")||-1!==a.indexOf("SonyDTV"))return["Sony Smart TV",
null];if(-1!==a.indexOf("PhilipsTV"))return["Philips Smart TV",null];if(a.match(/\b(Roku)\b/))return["Roku",null];if(a.match(/\bAFTM\b/))return["Amazon Fire Stick",null];if(b[1]===eb.Md&&(c=a.match(/\b(OPR|Edge|EdgA|Edg|UCBrowser)\/(\.?\d+(\.\d+)*)/),null!=c))return c=c.slice(1),c[0]=c[0].replace("OPR",eb.Ud),c[0]=c[0].replace("EdgA",eb.Ic),"Edg"===c[0]&&(c[0]=eb.Ic),[c[0],c[1]];if(b[1]===eb.Yd&&(c=a.match(/\b(EdgiOS)\/(\.?\d+(\.\d+)*)/),null!=c))return c=c.slice(1),c[0]=c[0].replace("EdgiOS",eb.Ic),
[c[0],c[1]];b=b[2]?[b[1],b[2]]:[null,null];null!=(c=a.match(/version\/(\.?\d+(\.\d+)*)/i))&&b.splice(1,1,c[1]);null!=(c=a.match(/\b(UCBrowser)\/(\.?\d+(\.\d+)*)/))&&b.splice(1,1,c[2]);if(b[0]===eb.Ud&&null!=(c=a.match(/mini\/(\.?\d+(\.\d+)*)/i)))return["Opera Mini",c[1]||""];b[0]&&(a=b[0].toLowerCase(),"msie"===a&&(b[0]=eb.Vb),"crios"===a&&(b[0]=eb.Md),"tizen"===a&&(b[0]="Samsung Smart TV",b[1]=null),"samsungbrowser"===a&&(b[0]="Samsung Browser"));return b};b.prototype.ob=
var kb=[{W:navigator.platform,S:"Win",U:"Windows"},{W:navigator.platform,S:"Mac",U:"Mac"},{W:navigator.platform,S:"BlackBerry",U:"BlackBerry"},{W:navigator.platform,S:"FreeBSD",U:"FreeBSD"},{W:navigator.platform,S:"OpenBSD",U:"OpenBSD"},{W:navigator.platform,S:"Nintendo",U:"Nintendo"},{W:navigator.platform,S:"SunOS",U:"SunOS"},{W:navigator.platform,S:"PlayStation",U:"PlayStation"},{W:navigator.platform,S:"X11",U:"X11"},{W:navigator.userAgent,S:["iPhone","iPad","iPod"],U:"iOS"},{W:navigator.platform,
S:"Pike v",U:"iOS"},{W:navigator.userAgent,S:["Web0S"],U:"WebOS"},{W:navigator.platform,S:["Linux armv7l","Android"],U:"Android"},{W:navigator.userAgent,S:["Android"],U:"Android"},{W:navigator.platform,S:"Linux",U:"Linux"}],lb=new ib;function mb(a,b){this.la=a;this.T=b}rototype.clearData=
r pb={Xc:"ab.storage.userId",Od:"ab.storage.deviceId",Sa:"ab.storage.sessionId"},P={Uc:"ab.test",Ob:"ab.storage.events",Oa:"ab.storage.attributes",Hc:"ab.storage.device",bc:"ab.storage.pushToken",Pc:"ab.storage.newsFeed",Nc:"ab.storage.lastNewsFeedRefresh",rb:"ab.storage.cardImpressions",Zd:"ab.storage.serverConfig",Vc:"ab.storage.triggers",Wc:"ab.storage.triggers.ts",Ef:"ab.storage.lastTriggeredTime",Df:"ab.storage.lastTriggeredTimesById",Ff:"ab.storage.lastTriggerEventDataById",Yb:"ab.storage.messagingSessionStart",
sb:"ab.storage.cc",Tb:"ab.storage.ccLastFullSync",Sb:"ab.storage.ccLastCardUpdated",hb:"ab.storage.ccClicks",ib:"ab.storage.ccImpressions",ta:"ab.storage.ccDismissals",Xb:"ab.storage.lastDisplayedTriggerTimesById",Mc:"ab.storage.lastDisplayedTriggerTime",ub:"ab.storage.triggerFireInstancesById"};b.prototype.Va=
tb.prototype.store=tb.prototype.R=tb.prototype.remove=
function ub(a,b){this.aa=a;a=0;for(var c=document.domain,d=c.split("."),e="ab._gd"+(new Date).valueOf();a<d.length-1&&-1===document.cookie.indexOf(e+"="+e);)a++,c="."+d.slice(-1-a).join("."),document.cookie=e+"="+e+";domain="+c+";";document.cookie=e+"=;expires="+(new Date(0)).toGMTString()+";domain="+c+";";this.qe=c;this.ie=525949;this.ue=!!b}ub.prototype.Va=ub.prototype.store=
ub.prototype.R=ub.prototype.remove=
b.prototype.store=xb.prototype.R=
xb.prototype.remove=b.prototype.store=yb.prototype.R=yb.prototype.remove=.prototype.P=zb.prototype.N=function Cb(){var a=this;if(null==this.ed){this.ed=!1;try{var b=Object.defineProperty({},"passive",{get:);window.addEventListener("testPassive",null,b);window.removeEventListener("testPassive",null,b)}catch(c){}}return this.ed}r Jb="up",Kb="down",Hb="left",Ib="right";var Nb={tg:og:ug:Qa:{ac:0,Lc:1}};H.WindowUtils=Nb;
H.WindowUtils.openUri=Nb.ug;unction Pb(a){null==a.Y&&(a.Y=new zb);return a.Y}
=Ob.prototype;n.Mb=function(a){return Ab(Pb(this),a)};n.Id=n.P=n.N=n.Ad=n.gb=n.zd=
.$=function(a,b,c){ar e=this,g=document.createElement("div");g.className="ab-card ab-effect-card "+this.sc;g.setAttribute("data-ab-card-id",this.id);g.setAttribute("role","article");g.setAttribute("tabindex","0");var f=this.url&&""!==this.url;if(this.pinned){var h=document.createElement("div");h.className="ab-pinned-indicator";var l=document.createElement("i");l.className="fa fa-star";h.appendChild(l);g.appendChild(h)}this.imageUrl&&""!==
this.imageUrl&&(h=document.createElement("div"),h.className="ab-image-area",l=document.createElement("img"),l.setAttribute("src",this.imageUrl),h.appendChild(l),g.className+=" with-image",f&&!this.vc?(l=document.createElement("a"),l.setAttribute("href",this.url),l.onclick=d,l.appendChild(h),g.appendChild(l)):g.appendChild(h));h=document.createElement("div");h.className="ab-card-body";if(this.dismissible){this.ne=b;var k=Mb("Dismiss Card",void 0,this.Ge.bind(this));g.appendChild(k);Gb(h,Hb,function(q){g.className+=
" ab-swiped-left";k.onclick(q)});Gb(h,Ib,function(q){g.className+=" ab-swiped-right";k.onclick(q)})}if(b=this.title&&""!==this.title){l=document.createElement("h1");l.className="ab-title";l.id=ra.bb();g.setAttribute("aria-labelledby",l.id);if(f){var m=document.createElement("a");m.setAttribute("href",this.url);m.onclick=d;m.appendChild(document.createTextNode(this.title));l.appendChild(m)}else l.appendChild(document.createTextNode(this.title));h.appendChild(l)}l=document.createElement("div");l.className=
b?"ab-description":"ab-description ab-no-title";l.id=ra.bb();g.setAttribute("aria-describedby",l.id);l.appendChild(document.createTextNode(this.description));f&&(b=document.createElement("div"),b.className="ab-url-area",m=document.createElement("a"),m.setAttribute("href",this.url),m.appendChild(document.createTextNode(this.linkText)),m.onclick=d,b.appendChild(m),l.appendChild(b));h.appendChild(l);g.appendChild(h);h=document.createElement("div");h.className="ab-unread-indicator";this.viewed&&(h.className+=
" read");g.appendChild(h);return this.Sf=g};n.Ge=
var Sb=-1,Ub={Qb:"captioned_image",be:"text_announcement",$b:"short_news",Pb:"banner_image",Fc:"control"},T={va:"id",za:"v",ua:"db",Xd:"r",ca:"ca",ia:"p",ba:"ea",ha:"e",TYPE:"tp",wa:"i",Ta:"tt",Pa:"ds",URL:"u",xa:"dm",ra:"ar",sa:"cl",X:"t"},U={va:"id",za:"v",ua:"db",Ub:"cr",ca:"ca",ia:"p",Rb:"t",ba:"ea",ha:"e",TYPE:"tp",wa:"i",Ta:"tt",Pa:"ds",URL:"u",xa:"dm",ra:"ar",sa:"cl",X:"s"},ac=400;H.Card=Ob;H.Card.prototype.dismissCard=Ob.prototype.Ge;H.Card.prototype.subscribeToClickedEvent=Ob.prototype.Mb;
H.Card.prototype.subscribeToDismissedEvent=Ob.prototype.Id;H.Card.prototype.removeSubscription=Ob.prototype.P;H.Card.prototype.removeAllSubscriptions=Ob.prototype.N;a(Xb,Ob);Xb.prototype.C=
H.Banner=Xb;function Wb(a,b,c,d,e,g,f,h,l,k,m,q,t,r,x,z){Ob.call(this,a,b,c,d,e,g,f,h,l,k,m,q,t,r,x,z);this.sc="ab-captioned-image";this.vc=!0}pa(Wb,Ob);
Wb.prototype.C=function(){var a={};a[U.TYPE]=Ub.Qb;a[U.va]=this.id;a[U.za]=this.viewed;a[U.Ta]=this.title;a[U.wa]=this.imageUrl;a[U.Pa]=this.description;a[U.ca]=this.updated;a[U.Ub]=this.created;a[U.Rb]=this.categories;a[U.ba]=this.expiresAt;a[U.URL]=this.url;a[U.xa]=this.linkText;a[U.ra]=this.aspectRatio;a[U.ha]=this.extras;a[U.ia]=this.pinned;a[U.ua]=this.dismissible;a[U.sa]=this.clicked;a[U.X]=this.test;return a};H.CaptionedImage=Wb;a(Vb,Ob);
Vb.prototype.C=H.ClassicCard=Vb;a(Yb,Ob);Yb.prototype.C=H.ControlCard=Yb;unction V(a,b,c,d,e,g,f,h,l,k,m,q,t,r,x,z,A,C,G,F,K,N,L,X,ea,p,u,y,D,I,O){this.message=a;this.messageAlignment=b||ec;this.duration=q||5E3;this.slideFrom=c||fc;this.extras=d||[];this.campaignId=e;this.cardId=g;this.triggerId=f;this.clickAction=h||gc;this.uri=l;this.openTarget=k||hc;this.dismissType=m||ic;this.icon=t;this.imageUrl=r;this.imageStyle=x||jc;this.iconColor=z||kc.Yc;this.iconBackgroundColor=A||kc.Ld;this.backgroundColor=C||kc.Yc;this.textColor=G||kc.Nd;this.closeButtonColor=F||kc.uf;this.animateIn=
K;null==this.animateIn&&(this.animateIn=!0);this.animateOut=N;null==this.animateOut&&(this.animateOut=!0);this.header=L;this.headerAlignment=X||ec;this.headerTextColor=ea||kc.Nd;this.frameColor=p||kc.Lf;this.buttons=u||[];this.cropType=y||lc;this.orientation=D;this.htmlId=I;this.css=O;this.je=this.Ua=this.ke=!1;this.Y=new zb;this.ec=new zb}n=V.prototype;n.cb=function(){return!0};n.Ze=Mb=function(a){return Ab(this.Y,a)};n.Id=function(a){return Ab(this.ec,a)};n.P=n.N=n.Ad=n.gb=function(){return this.Ua?!1:(this.Ua=!0,Bb(this.Y),!0)};n.zd=function(){return this.je?!1:(this.je=!0,Bb(this.ec),!0)};
Ce=
n.$=function(a,b,c,d){ar g=this,f=document.createElement("div");f.className="ab-in-app-message ab-start-hidden ab-background";this.cb()&&(f.className+=" ab-modal-interactions",f.setAttribute("tabindex","-1"));nc(this)||(f.style.color=dc(this.textColor),f.style.backgroundColor=dc(this.backgroundColor),cc(this.backgroundColor)&&(f.className+=" ab-no-shadow"));this.imageStyle===Jc&&
(f.className+=" graphic");this.orientation===Kc&&(f.className+=" landscape");0===this.buttons.length&&(this.clickAction!==gc&&(f.className+=" ab-clickable"),f.onclick=;var h=Mb("Close Message",nc(this)?void 0:dc(this.closeButtonColor),function(){Hc(g,f)});f.appendChild(h);h=document.createElement("div");h.className="ab-message-text";h.className+=
" "+(this.messageAlignment||this.constructor.DefaultTextAlignment).toLowerCase()+"-aligned";var l=!1,k=document.createElement("div");k.className="ab-image-area";if(this.imageUrl){if(this.cropType===Oc){var m=document.createElement("span");m.className="ab-center-cropped-img";m.style.backgroundImage="url("+this.imageUrl+")";k.appendChild(m)}else m=document.createElement("img"),m.setAttribute("src",this.imageUrl),l=!0,m.onload=e,setTimeout(e,1E3),k.appendChild(m);f.appendChild(k);h.className+=" ab-with-image"}else if(this.icon){k.className+=
" ab-icon-area";m=document.createElement("span");m.className="ab-icon";nc(this)||(m.style.backgroundColor=dc(this.iconBackgroundColor),m.style.color=dc(this.iconColor));var q=document.createElement("i");q.className="fa";q.appendChild(document.createTextNode(this.icon));m.appendChild(q);k.appendChild(m);f.appendChild(k);h.className+=" ab-with-icon"}Db(h,"touchstart",function(){});this.header&&0<this.header.length&&(k=document.createElement("h1"),k.className="ab-message-header",this.ad=ra.bb(),k.id=
this.ad,k.className+=" "+(this.headerAlignment||ec).toLowerCase()+"-aligned",nc(this)||(k.style.color=dc(this.headerTextColor)),k.appendChild(document.createTextNode(this.header)),h.appendChild(k));h.appendChild(this.Be());f.appendChild(h);l||e();return this.jc=f};n.Be=
.Ac=
n.na=
var kc={Nd:4281545523,Yc:4294967295,Ld:4278219733,vf:4293914607,wf:4283782485,Lf:3224580915,uf:4288387995},Pc={Pd:"hd",bf:"ias",Jf:"of",xf:"do",vb:"umt",tb:"tf",Qd:"te"},fc="BOTTOM",Qc={TOP:"TOP",BOTTOM:fc},Nc="NEWS_FEED",Lc="URI",gc="NONE",Rc={NEWS_FEED:Nc,URI:Lc,NONE:gc},ic="AUTO_DISMISS",Sc={AUTO_DISMISS:ic,MANUAL:"SWIPE"},hc="NONE",Mc="BLANK",Tc={NONE:hc,BLANK:Mc},jc="TOP",Jc="GRAPHIC",Uc={TOP:jc,GRAPHIC:Jc},Kc="LANDSCAPE",Vc={PORTRAIT:"PORTRAIT",LANDSCAPE:Kc},ec="CENTER",Wc={START:"START",CENTER:ec,
END:"END"},Oc="CENTER_CROP",lc="FIT_CENTER",Xc={CENTER_CROP:Oc,FIT_CENTER:lc},xc="SLIDEUP",sc="MODAL",tc="MODAL_STYLED",vc="FULL",zc="WEB_HTML",Ac="HTML",Ic=500,Fc="ab-show",Gc="ab-hide",Dc="ab-pause-scrolling";H.InAppMessage=V;H.InAppMessage.SlideFrom=Qc;H.InAppMessage.ClickAction=Rc;H.InAppMessage.DismissType=Sc;H.InAppMessage.OpenTarget=Tc;H.InAppMessage.ImageStyle=Uc;H.InAppMessage.TextAlignment=Wc;H.InAppMessage.Orientation=Vc;H.InAppMessage.CropType=Xc;
H.InAppMessage.prototype.subscribeToClickedEvent=V.prototype.Mb;H.InAppMessage.prototype.subscribeToDismissedEvent=V.prototype.Id;H.InAppMessage.prototype.removeSubscription=V.prototype.P;H.InAppMessage.prototype.removeAllSubscriptions=V.prototype.N;H.InAppMessage.prototype.closeMessage=V.prototype.Ce;c.prototype.Mb=rc.prototype.P=rc.prototype.N=rc.prototype.gb=var Yc=-1;H.InAppMessage.Button=rc;
H.InAppMessage.Button.prototype.subscribeToClickedEvent=rc.prototype.Mb;H.InAppMessage.Button.prototype.removeSubscription=rc.prototype.P;H.InAppMessage.Button.prototype.removeAllSubscriptions=rc.prototype.N;function qc(a){this.triggerId=a}H.ControlMessage=qc;(wc,V);wc.prototype.$=function(a,b,c,d,e){this.kc=document.activeElement;b=V.prototype.$.call(this,a,c,d,e);b.className+=" ab-fullscreen ab-centered";ad(this,a,c,b,e);Zc(b);$c(this.ad,b);return b};wc.prototype.na=function(){return V.prototype.na.call(this)+" ab-effect-fullscreen"};wc.DefaultTextAlignment=ec;
H.FullScreenMessage=wc;var bd=new (Bc,V);Bc.prototype.Ze=function(){return!1};
Bc.prototype.gb=
Bc.prototype.$=
Bc.prototype.na=function(){return V.prototype.na.call(this)+" ab-effect-html"};H.HtmlMessage=Bc;a(uc,V);uc.prototype.$=uc.prototype.na=function(){return V.prototype.na.call(this)+" ab-effect-modal"};uc.DefaultTextAlignment=ec;H.ModalMessage=uc;a(yc,V);n=yc.prototype;n.cb=
n.$=n.Be=n.Ac=n.na=
yc.DefaultTextAlignment="START";H.SlideUpMessage=yc;ar fd,gd;function hd(a,b){this.cards=a;this.lastUpdated=b}n=hd.prototype;n.Ke=.Ka=function(a,b){a.Ka(b)};n.Ja=
.we=function(a){a.Dc()};
n.$=ar bc=500,jd="data-update-subscription-id",od="data-last-requested-refresh",pd=1E4;H.Feed=hd;H.Feed.prototype.getUnreadCardCount=hd.prototype.Ke;a(ld,hd);ld.prototype.qg=ld.prototype.Ka=function(a,b){a.Ka(b,!0)};ld.prototype.Ja=ld.prototype.we=H.ContentCards=ld;H.ContentCards.prototype.getUnviewedCardCount=ld.prototype.qg;function rd(a){this.$a=a}rd.prototype.ea=rd.prototype.C=function(){return this.$a};sd.prototype.ea=
sd.prototype.C=var yd=1,zd=2,Ad=3,ud=4,Bd=5,vd=6,Cd=10,Dd=11,Ed=12,wd=15,xd=16,Fd=17,td="date";function Gd(a){this.filters=a}Gd.prototype.ea=Gd.prototype.C=function Jd(a,b){this.$a=a;this.fb=b}Jd.prototype.ea=function(a){if(null==this.$a||null==this.fb)return!1;var b=a[1];return a[0]===this.$a&&this.fb.ea(b)};Jd.prototype.C=function(){return{e:this.$a,pf:this.fb.C()}};function Kd(a,b){this.Xa=a;this.zb=b}Kd.prototype.ea=Kd.prototype.C=function(){return this.Xa};function Md(a){this.eb=a}Md.prototype.ea=Md.prototype.C=function(){return this.eb};function Nd(a,b){this.eb=a;this.fb=b}Nd.prototype.ea=Nd.prototype.C=function Od(a){this.Xa=a}Od.prototype.ea=Od.prototype.C=var Pd={OPEN:"open",Sc:"purchase",Vd:"push_click",Gc:"custom_event",Wb:"iam_click",X:"test"};function Qd(a,b){this.type=a;this.data=b}d.prototype.C=var Ud="open",Vd="purchase",Wd="purchase_property",Xd="push_click",Yd="custom_event",Zd="custom_event_property",$d="iam_click",ae="test",Sd={};Sd[Ud]=Pd.OPEN;Sd[Vd]=Pd.Sc;Sd[Wd]=Pd.Sc;Sd[Xd]=Pd.Vd;Sd[Yd]=Pd.Gc;Sd[Zd]=Pd.Gc;Sd[$d]=Pd.Wb;Sd[ae]=Pd.X;e.prototype.C=
ar de=-1,ge={Jc:"inapp",ae:"templated_iam"};je.prototype;
n.La=
=n.Cb=function Ae(a,b){Ab(a.cd,b)}
n.Bc=function(a,b){var c=this,d=this.F.qd(),e=Wa(this.F);d=d!==e;ne(this,null,!1,null,null,null,b);ab(this);if(d&&null!=a&&(a.Eb()||a.Ia())){var g=b=Aa.Ra;wa(new sa(b),b.O.Tc,}};
n.Ya=function(a,b,c,d){var e=this.f.B();if(e!==a){var g=this.F,f=Qa(g.b.la.R(pb.Sa));null!=f&&(g.b.la.remove(pb.Sa),f=Be(g,(new Date).valueOf(),f),null==f||M(g.b,[f]));g=this.f;f=null==g.B();nb(g.b,pb.Xc,new Pa(a));if(f){g=g.b;f=g.T.R(P.Oa);if(null!=f){var h=P.Kd,l=f[h];null!=l&&(f[h]=void 0,g.T.store(P.Oa,f),l.user_id=a,qb(g,l))}h=Qa(g.la.R(pb.Sa));f=null;null!=h&&(f=h.ga);h=ob(g);if(null!=h)for(l=0;l<h.length;l++){var k=h[l];null==k.Nb&&k.sessionId==f&&(k.Nb=a);null==k||M(g,[k])}}for(g=0;g<b.length;g++)b[g].Ya(null==
e);null!=e&&S(this.b,P.rb);S(this.b,P.Hc);this.Bc(d,c);v.info('Changed user to "'+a+'".')}else"function"===typeof c?(v.info('Current user is already "'+a+'". Executing networkCallCompleteCallback.'),c()):v.info('Current user is already "'+a+'". Doing nothing.')};n.pb=n.Kb=n.Dc=
.vd=
.wd=
n.Ec=
n.Hb=
n.zc=
n.yc=
n.Gb=n.M=
n.Ka=
n.Ja=
n.xc=ar Fe={BROWSER:"browser",BROWSER_VERSION:"browserVersion",OS:"os",RESOLUTION:"resolution",LANGUAGE:"language",TIME_ZONE:"timeZone",USER_AGENT:"userAgent"};H.DeviceProperties=Fe;e.prototype.qc=e.prototype.Zf=
Ie.prototype.Yf=Ie.prototype.watchPosition=e.prototype.C==Le.prototype;n.pa=
n.Ia=n.Eb=
n.ud=
subscribe=
n.unsubscribe=e.prototype.C=totype.qd=
function qe(a){var b=(new Date).valueOf(),c=te(a.K).xd;if(null==c)return!1;var d=R(a.b,P.Yb);(c=null==d||b-d>1E3*c)&&Q(a.b,P.Yb,b);return c}
=Ze.prototype;n.B=n.Ed=function(a,b){if(bb(this.K,a))return v.info('Custom Attribute "'+a+'" is blacklisted, ignoring.'),!1;var c={};c[a]=b;return this.H("custom",c)};n.H=function(a,b){return rb(this.b,this.B(),a,b)};
n.Bd=function(a,b,c,d,e){this.H("push_token",a);this.H("custom_push_public_key",c);this.H("custom_push_user_auth",d);this.H("custom_push_vapid_public_key",e);var g=Aa.Ra,f=new sa(g);Q(this.b,P.bc,(new Ke(a,b,c,d,e)).C());f.setItem(g.O.Tc,g.cc,!0)};n.Jb=function(a){this.H("push_token",null);this.H("custom_push_public_key",null);this.H("custom_push_user_auth",null);this.H("custom_push_vapid_public_key",null);if(a){a=Aa.Ra;var b=new sa(a);Q(this.b,P.bc,!1);b.setItem(a.O.Tc,a.cc,!1)}};e.prototype.Db=function(){};$e.prototype.Ya=function(){};$e.prototype.clearData=function(){};a(af,$e);n=af.prototype;n.Ga=
n.Db=
.oc=function(){for(var a=[],b=0;b<this.D.length;b++)a.push(this.D[b].C());Q(this.b,P.sb,a)};
n.La=n.nb=
n.Ya=n.clearData=a(ff,$e);n=ff.prototype;n.Ga=n.oc=
n.Db=n.uc=n.clearData=(jf,$e);f.prototype.Db=
jf.prototype.oa=jf.prototype.Ya=jf.prototype.clearData=
ar qf;"undefined"===typeof console&&(window.console={log:);var rf=window.Element.prototype;"function"!==typeof rf.matches&&(rf.matches=rf.msMatchesSelector||rf.mozMatchesSelector||rf.webkitMatchesSelector||;
Element.prototype.closest||(Element.prototype.closest=;
if("function"!==typeof window.CustomEvent){var sf=sf.prototype=window.Event.prototype;window.CustomEvent=sf};var tf;"object"===typeof module&&module.exports?tf=module.exports:(window.appboy||(window.appboy={}),tf=window.appboy);var uf=tf;var W=new function(a){g={fg:function(p,u){return new He(p,u)},jg:kd:gg:eg:function(p,u,y,D){return new af(p,u,y,D)},kg:ig:hg:;null==a&&(a=g);var f,h,l,k,m,q,t,r,x,z,A,C,G,F,K=new zb,N=new zb,L=[],X=!1,ea=!1;qf={Td:100,Zb:"inAppMessage must be an InAppMessage object",
Oc:"must be a Card object"};return{Rg:function(p){return Ab(K,p)},Qg:td:function(p,u){if(X)return v.info("Braze has already been initialized with an API key."),!0;v.sd(null!=u&&u.enableLogging);if(null==p||""===p||"string"!==typeof p)return v.error("Braze requires a valid API key to be initialized."),!1;f=p;l=u||{};if(lb.sg&&!l.allowCrawlerActivity)return v.info("Ignoring activity from crawler bot "+navigator.userAgent),ea=!0,!1;h=u=Xe(p,l.noCookies||!1);if((new ub(null,
!0)).R("ab.optOut"))return v.info("Ignoring all activity due to previous opt out"),ea=!0,!1;var y=["mparticle","wordpress","tealium"];if(null!=l.sdkFlavor){var D=l.sdkFlavor;-1!==y.indexOf(D)?k=D:v.error("Invalid sdk flavor passed: "+D)}var I=[];t=a.kd();L.push(t);r=a.gg(t,u);I.push(r);C=a.kd();L.push(C);y=null!=l.baseUrl?l.baseUrl:"https://sdk.iad-01.braze.com/api/v3";y=y.replace(/(\.[a-z]+)[^\.]*$/i,"$1/api/v3");0!==y.indexOf("http")&&(y="https://"+y);D=l.devicePropertyWhitelist;if(null!=D)if(Da(D)){for(var O=
[],Y=0;Y<D.length;Y++)Ba(Fe,D[Y],"devicePropertyWhitelist contained an invalid value.","DeviceProperties")&&O.push(D[Y]);D=O}else v.error("devicePropertyWhitelist must be an array. Defaulting to all properties."),D=null;q=a.fg(u,D);D=new Ue(u);m=a.jg(f,y,"2.7.1",k,l,u,q,D);O=l.minimumIntervalBetweenTriggerActionsInSeconds;null==O&&(O=30);A=a.kg(O,C,u,m);I.push(A);O=!0===l.allowUserSuppliedJavascript||!0===l.enableHtmlInAppMessages;
x=a.kd();L.push(x);z=a.eg(x,m,u,D,O);I.push(z);Ve(D,function(){z.La()});Ae(m,function(){z.La()});m.td();G=a.ig(m.pb(),f,q,y,l,D,u);F=a.hg(m.pb());u="Initialized ";l&&l.baseUrl&&(u+='for the Braze backend at "'+l.baseUrl+'" ');v.info(u+('with API key "'+p+'".'));p=lb.language;u=!1;l&&(l.language&&(p=l.language,u=!0),l.localization&&(p=l.localization,u=!0));ed(p,u);Bb(K,l);return X=!0},Cb:ng:Jd:Fd:Bc:function(p){if(e()){m.Bc(G,p);var u=Aa.Ra,y=new sa(u);wa(y,u.O.Wd,;ya(y,u.O.df,}},Ya:function(p,u){e()&&(null==p||0===p.length||p!==p?(v.error("changeUser requires a non-empty userId."),"function"===typeof u&&
(v.info("messagingReadyCallback provided with an empty userId. Firing immediately."),u())):997<Ye(p)?v.error('Rejected user id "'+p+'" because it is longer than 997 bytes.'):m.Ya(p.toString(),[r,z,A],u,G))},pb:function(){if(e())return m.pb()},pg:Kb:Dc:function(){e()&&m.Dc()},We:function(p){if(e())return Ab(t,p)},uc:function(){if(e())return r.uc()},La:function(){if(e())return z.La()},Ve:function(p){if(e())return Ab(x,p)},nb:
Sg:Xe:Hb:function(p){if(e())return p instanceof V||p instanceof qc?m.Hb(p).h:(v.error(qf.Zb),!1)},zc:function(p){if(e()){if(!(p instanceof V))return v.error(qf.Zb),!1;var u=m.zc(p);if(u.h)for(var y=0;y<u.j.length;y++)A.oa(Pd.Wb,[p.triggerId],u.j[y]);return u.h}},yc:function(p,u){if(e()){if(!(p instanceof rc))return v.error("button must be an ab.InAppMessage.Button object"),
!1;if(!(u instanceof V))return v.error(qf.Zb),!1;var y=m.yc(p,u);if(y.h)for(var D=0;D<y.j.length;D++)A.oa(Pd.Wb,[u.triggerId,p.id],y.j[D]);return y.h}},Gb:M:function(p,u){if(e())return p instanceof V||p instanceof qc?Ba(Pc,u,u+" is not a valid in-app message display failure",
"InAppMessage.DisplayFailures")?m.M(p.triggerId,u).h:!1:(v.error(qf.Zb),!1)},Ka:function(p,u){if(e()){if(!Da(p))return v.error("cards must be an array"),!1;for(var y=0;y<p.length;y++)if(!(p[y]instanceof Ob))return v.error("Each card in cards "+qf.Oc),!1;return m.Ka(p,u).h}},Ja:function(p,u){if(e())return p instanceof Ob?m.Ja(p,u).h:(v.error("card "+qf.Oc),!1)},xc:function(p){if(e())return p instanceof Ob?m.xc(p).h:(v.error("card "+qf.Oc),!1)},Ne:function(){if(e())return De(m,za.yf).h},Me:P:N:vd:wd:function(p,u,y,D,I){if(e()){null==y&&(y="USD");null==D&&(D=1);if(null==p||0>=p.length)return v.error('logPurchase requires a non-empty productId, got "'+p+'", ignoring.'),!1;if(!Sa(p,"log purchase","the purchase name"))return!1;var O=parseFloat(u);if(isNaN(O))return v.error("logPurchase requires a numeric price, got "+u+", ignoring."),!1;O=O.toFixed(2);u=parseInt(D);if(isNaN(u))return v.error("logPurchase requires an integer quantity, got "+D+", ignoring."),!1;if(1>u||
u>qf.Td)return v.error("logPurchase requires a quantity >1 and <"+qf.Td+", got "+u+", ignoring."),!1;y=y.toUpperCase();if(-1==="AED AFN ALL AMD ANG AOA ARS AUD AWG AZN BAM BBD BDT BGN BHD BIF BMD BND BOB BRL BSD BTC BTN BWP BYR BZD CAD CDF CHF CLF CLP CNY COP CRC CUC CUP CVE CZK DJF DKK DOP DZD EEK EGP ERN ETB EUR FJD FKP GBP GEL GGP GHS GIP GMD GNF GTQ GYD HKD HNL HRK HTG HUF IDR ILS IMP INR IQD IRR ISK JEP JMD JOD JPY KES KGS KHR KMF KPW KRW KWD KYD KZT LAK LBP LKR LRD LSL LTL LVL LYD MAD MDL MGA MKD MMK MNT MOP MRO MTL MUR MVR MWK MXN MYR MZN NAD NGN NIO NOK NPR NZD OMR PAB PEN PGK PHP PKR PLN PYG QAR RON RSD RUB RWF SAR SBD SCR SDG SEK SGD SHP SLL SOS SRD STD SVC SYP SZL THB TJS TMT TND TOP TRY TTD TWD TZS UAH UGX USD UYU UZS VEF VND VUV WST XAF XAG XAU XCD XDR XOF XPD XPF XPT YER ZAR ZMK ZMW ZWL".split(" ").indexOf(y))return v.error("logPurchase requires a valid currencyCode, got "+
y+", ignoring."),!1;if(!c(I,"logPurchase","purchaseProperties",'log purchase "'+p+'"',"purchase"))return!1;D=m.wd(p,O,y,u,b(I));if(D.h)for(v.info("Logged "+u+" purchase"+(1<u?"s":"")+' of "'+p+'" for '+y+" "+O+"."),y=0;y<D.j.length;y++)A.oa(Pd.Sc,[p,I],D.j[y]);return D.h}},pa:function(){if(e())return G.pa()},Ia:function(){if(e())return G.Ia()},ud:Eb:vg:Xg:Vg:Pg:zg:$g:},Z={ab:{}},vf=Z.ab,wf;for(wf in H)vf[wf]=H[wf];Z.initialize=W.td;Z.destroy=W.Cb;Z.getDeviceId=W.ng;Z.toggleAppboyLogging=W.Jd;Z.setLogger=W.Fd;Z.openSession=W.Bc;Z.changeUser=W.Ya;Z.getUser=W.pb;Z.requestImmediateDataFlush=W.Kb;Z.requestFeedRefresh=W.Dc;Z.getCachedFeed=W.uc;Z.subscribeToFeedUpdates=W.We;Z.requestContentCardsRefresh=W.La;Z.getCachedContentCards=W.nb;Z.subscribeToContentCardsUpdates=W.Ve;Z.logCardImpressions=W.Ka;Z.logCardClick=W.Ja;
Z.logCardDismissal=W.xc;Z.logFeedDisplayed=W.Ne;Z.logContentCardsDisplayed=W.Me;Z.logInAppMessageImpression=W.Hb;Z.logInAppMessageClick=W.zc;Z.logInAppMessageButtonClick=W.yc;Z.logInAppMessageHtmlClick=W.Gb;Z.subscribeToNewInAppMessages=W.Sg;Z.subscribeToInAppMessage=W.Xe;Z.removeSubscription=W.P;Z.removeAllSubscriptions=W.N;Z.logCustomEvent=W.vd;Z.logPurchase=W.wd;Z.isPushSupported=W.pa;Z.isPushBlocked=W.Ia;Z.isPushGranted=W.ud;Z.isPushPermissionGranted=W.Eb;Z.registerAppboyPushMessages=W.vg;
Z.unregisterAppboyPushMessages=W.Xg;Z.trackLocation=W.Vg;Z.stopWebTracking=W.Pg;Z.resumeWebTracking=W.zg;Z.wipeData=W.$g;for(var xf in Z)"object"===typeof appboyInterface?appboyInterface[xf]=Z[xf]:uf[xf]=Z[xf];var yf="object"===typeof appboyInterface?appboyInterface:uf,Af=new W,yf);yf.display={};yf.display.automaticallyShowNewInAppMessages=Af.dg;yf.display.showInAppMessage=Af.Ue;
yf.display.showFeed=Af.Hd;yf.display.destroyFeed=Af.Fe;yf.display.toggleFeed=Af.Ug;yf.display.showContentCards=Af.Te;yf.display.hideContentCards=Af.Le;yf.display.toggleContentCards=Af.Tg;W.display=Af;return appboyInterface});var a=window.appboyQueue||("undefined"!==typeof appboyQueue?appboyQueue:null);
if("undefined"!==typeof a&&a&&a.length&&0<a.length){var b=a===window.appboyQueue;window.appboyQueue=appboyQueue=null;for(var c=0;c<a.length;c++)if(a[c].callee){var d=a[c].callee.name;if(null==d||""===d)d=/^function ([\w]*)\(/g.exec(a[c].callee.toString())[1];if(null!=d&&""!==d){for(var e=d.split("_"),f=b?window.appboy:appboy,g=this,h="appboy",k=0;k<e.length;k++){if("prototype"===e[k]){var l=eval({"appboy.ab.User":"appboy.getUser","appboy.ab.Feed":"appboy.getCachedFeed","appboy.ab.ContentCards":"appboy.getCachedContentCards"}[h]);
g=f=null!=l?l.apply():new f.constructor}else f=f[e[k]];h+="."+e[k]}null!=f&&"function"===typeof f&&f.apply(g,a[c])}}};
}).call(window);