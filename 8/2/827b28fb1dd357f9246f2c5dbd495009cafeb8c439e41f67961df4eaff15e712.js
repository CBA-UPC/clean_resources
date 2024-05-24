/*!
   JW Player version 8.25.1
   Copyright (c) 2022, JW Player, All Rights Reserved
   This source code and its use and distribution is subject to the terms
   and conditions of the applicable license agreement.
   https://www.jwplayer.com/tos/
   This product includes portions of other software. For the full text of licenses, see
   https://ssl.p.jwpcdn.com/player/v/8.25.1/notice.txt
*/!function(){var t,e,n={696:9128:4742:5191:5083:function(t,e,n){"use strict";n.d(e,{ke:function(){return l},G0:function(){return f}});var r=n(6042),i=n(5191),o=n(1569),u=n(9888),a=n(8348),c=n(696),s=n(8518),l={autoPause:{viewability:!1,pauseAds:!1},autostart:!1,allowFullscreen:!0,bandwidthEstimate:null,bitrateSelection:null,castAvailable:!1,controls:!0,cues:[],defaultPlaybackRate:1,displaydescription:!0,displaytitle:!0,displayPlaybackLabel:!1,enableShortcuts:!0,height:360,intl:{},item:0,language:"en",liveTimeout:null,localization:c.Z,mute:!1,nextUpDisplay:!0,playbackRateControls:!1,playbackRates:[.5,1,1.25,1.5,2],renderCaptionsNatively:!1,repeat:!1,stretching:"uniform",volume:90,width:640};.ZP=function(t,e){var d=(0,r.l7)({},(window.jwplayer||{}).defaults,e,t);!d);var p=d.forceLocalizationDefaults?l.language:(0,s.G3)(),h=(0,s.tK)(d.intl);d.localization=(0,s.Mh)(c.Z,(0,s.Pm)(d,h,p));var v=(0,r.l7)({},l,d);"."===v.base&&(v.base=(0,o.getScriptPath)("jwplayer.js")),v.base=(v.base||(0,o.loadFrom)()).replace(/\/?$/,"/"),n.p=v.base,v.width=(0,i.a)(v.width),v.height=(0,i.a)(v.height),v.aspectratio=(0,i.R)(v.aspectratio,v.width),v.volume=(0,r.qh)(v.volume)?Math.min(Math.max(0,v.volume),100):l.volume,v.mute=!!v.mute,v.language=p,v.intl=h;var g=v.playlistIndex;g&&(v.item=g),(0,r.hj)(v.item)||(v.item=0);var m=d.autoPause;m&&(v.autoPause.viewability=!("viewability"in m)||!!m.viewability);var y=v.playbackRateControls;if(y){var w=v.playbackRates;Array.isArray(y)&&(w=y),(w=w.filter(().map(()).indexOf(1)<0&&w.push(1),w.sort(),v.playbackRateControls=!0,v.playbackRates=w}(!v.playbackRateControls||v.playbackRates.indexOf(v.defaultPlaybackRate)<0)&&(v.defaultPlaybackRate=1),v.playbackRate=v.defaultPlaybackRate,v.aspectratio||delete v.aspectratio;var b=v.playlist;if(b)Array.isArray(b.playlist)&&(v.feedData=b,v.playlist=b.playlist);else{var k=(0,r.ei)(v,["title","description","type","mediaid","image","images","file","sources","tracks","preload","duration"]);v.playlist=[k]}v.qualityLabels=v.qualityLabels||v.hlslabels,delete v.duration;var C=v.liveTimeout;null!==C&&((0,r.qh)(C)?0!==C&&(C=Math.max(30,C)):C=null,v.liveTimeout=C);var P,j,x=parseFloat(v.bandwidthEstimate),S=parseFloat(v.bitrateSelection);return v.bandwidthEstimate=(0,r.qh)(x)?x:(P=v.defaultBandwidthEstimate,j=parseFloat(P),(0,r.qh)(j)?Math.max(j,1):l.bandwidthEstimate),v.bitrateSelection=(0,r.qh)(S)?S:l.bitrateSelection,v.liveSyncDuration=f(v.liveSyncDuration),v.backgroundLoading=(0,r.jn)(v.backgroundLoading)?v.backgroundLoading:a.Features.backgroundLoading,v}},2894:623:function(t,e,n){"use strict";n.d(e,{Z:function(){return et},c:function(){return tt}});var r=n(6042),i=n(9128),o=n(2445),u=n(2894),a=n(393),c=n(8320),s=n(2963),l=n(670),f=n(4601),d=n(4446),p=n(8348),h=null;function v(t){return h||(h=function(t){var e=t.get("controls"),r=g(),i=t,"html5");if(p.OS.tizen)return m();if(e&&r&&i)return o=n.e(605).then(bind(null,n)).catch((0,u.Ep)(d.fU+105)),u.Tr.html5=o,o;var o;if(e&&i)return );if(e&&r)return n.e(493).then(bind(null,n)).catch((0,u.Ep)(d.fU+103));if(e)return n.e(581).then(bind(null,n)).catch((0,u.Ep)(d.fU+102));return m()}(t)),h}unction m(){return function(){if(g())return n.e(943).then(bind(null,n)).catch((0,u.Ep)(d.fU+120));return Promise.resolve()}().then(u.Zq)}var y=n(1643),w=n(7263),b=n(676),k=n(8518),C=n(1241); S=n(1918),T=n(6599),E=O=A=Z=_=M=F=function(t,e){var n=return window.location!==window.parent.location&&/isAMP/.test(document.location.search)?M(t,e).then(n).catch(n):n()},I=D=function(t){return new Promise((function(e){return t.attributes.liveSyncDuration>45?e((0,d.l9)(new Error,d.wM)):e()}))};var L=function(t){var e;this.start=function(n){var r=F(t,n),i=Promise.all([v(t),D(t),r,A(t),_(t),E(t),I(t)]),o=new Promise(();return Promise.race([i,o]).catch(().then(()},this.destroy=,N=n(2303),B=n(7411),R=n(9888),q=n(4742),z={removeItem:function(t){}};try{z=window.localStorage||z}catch(t){}var U=),H=n(7753),V=n(9918),G=n(328),W=n(4225),K=n(7683),Q=n(4609),X=n(5882),J=(n(4671),n(9926),;r.l7)(J.prototype,{on:G.ZP.on,once:G.ZP.once,off:G.ZP.off,trigger:G.ZP.trigger,init:playerDestroy:getContainer:get:getItemQoe:function(){return this.modelShim._qoeItem},getItemPromise:function(){return null},setItemCallback:getConfig:getCurrentCaptions:function(){return this.get("captionsIndex")},getWidth:function(){return this.get("containerWidth")},getHeight:function(){return this.get("containerHeight")},getMute:function(){return this.get("mute")},getProvider:function(){return this.get("provider")},getState:getAudioTracks:function(){return null},getCaptionsList:function(){return null},getQualityLevels:function(){return null},getVisualQuality:function(){return null},getCurrentQuality:function(){return-1},getCurrentAudioTrack:getSafeRegion:isBeforeComplete:function(){return!1},isBeforePlay:function(){return!1},createInstream:function(){return null},skipAd:function(){},attachMedia:function(){},detachMedia:function(){}});var et=J},4446:function(t,e,n){"use strict";n.d(e,{nk:function(){return i},T6:function(){return o},y7:function(){return u},fU:function(){return a},xk:function(){return c},IB:function(){return s},YQ:function(){return l},DD:function(){return f},y4:function(){return d},tJ:function(){return p},o2:function(){return h},_M:function(){return v},EY:function(){return g},wM:function(){return m},Y7:function(){return y},A6:function(){return w},wH:function(){return b},ul:function(){return k},MD:function(){return C},pJ:function(){return P},zO:function(){return j},Sp:function(){return x},H4:function(){return S},ud:function(){return T},rG:function(){return E},Mm:function(){return O},l9:function(){return A},nm:function(){return Z}});var r=n(6042),i=1e5,o=100001,u=100002,a=101e3,c=102e3,s=102700,l=200001,f=202e3,d=104e3,p=203e3,h=203640,v=203700,g=204e3,m=300100,y=306e3,w=308e3,b=308640,k="cantPlayVideo",C="badConnection",P="cantLoadPlayer",j="cantPlayInBrowser",x="liveStreamDown",S="protectedContent",T="technicalError",E=);391:7411:4601:8348:function(t,e,n){"use strict";n.r(e),n.d(e,{Browser:function(){return a},Features:function(){return s},OS:function(){return c}});var r=n(2268);ar o=navigator.userAgent,u=function(){};var a={get androidNative(){return(0,r.O7)()},get chrome(){return(0,r.i7)()},get edge(){return(0,r.un)()},get facebook(){return(0,r.DF)()},get firefox(){return(0,r.pZ)()},get ie(){return(0,r.w1)()},get msie(){return(0,r.A)()},get safari(){return(0,r.G6)()},get version,c={get android(){return(0,r.Dt)()},get iOS(){return(0,r.gn)()},get mobile(){return(0,r.tq)()},get mac(){return(0,r.id)()},get iPad(){return(0,r.zc)()},get iPhone(){return(0,r.xb)()},get windowsget tizen(){return(0,r.yS)()},get tizenApp(){return(0,r.Q6)()},get version,s={get flash(){return(0,r.NO)()},get flashVersion(){return(0,r.dI)()},get iframeget passiveEventsget backgroundLoading},1643:9918:7753:function(t,e,n){"use strict";function r(t,e){return r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},r(t,e)}n.d(e,{Z:function(){return i}});var i=function(t){var e,n;=t,(e=i).prototype=Object.create(n.prototype),e.prototype.constructor=e,r(e,n);var o=i.prototype;return o.addAttributes=o.add=o.get=o.set=o.clone=o.change=i}(n(328).ZP)},7941:6769:function(t,e,n){"use strict";n.d(e,{Z:function(){return f}});var r=n(7941),i=n(2957);r a=function t(e,n){for(var a=[],c=0;c<(0,r.my)(e);c++){var s=e.childNodes[c];if("media"===s.prefix){if(!(0,r.r1)(s))continue;switch((0,r.r1)(s).toLowerCase()){case"content":if((0,i.Dc)(s,"duration")&&(n.duration=(0,i.m9)((0,i.Dc)(s,"duration"))),(0,i.Dc)(s,"url")){n.sources||(n.sources=[]);var l={file:(0,i.Dc)(s,"url"),type:(0,i.Dc)(s,"type"),width:(0,i.Dc)(s,"width"),label:(0,i.Dc)(s,"label")},f=u(s);f.length&&(l.mediaTypes=f),n.sources.push(l)}(0,r.my)(s)>0&&(n=t(s,n));break;case"title":n.title=(0,r.dZ)(s);break;case"description":n.description=(0,r.dZ)(s);break;case"guid":n.mediaid=(0,r.dZ)(s);break;case"thumbnail":n.image||(n.image=(0,i.Dc)(s,"url"));break;case"group":t(s,n);break;case"subtitle":var d={file:(0,i.Dc)(s,"url"),kind:"captions"};(0,i.Dc)(s,"lang").length>0&&(d.label=o((0,i.Dc)(s,"lang"))),a.push(d)}}}n.tracks||(n.tracks=[]);for(var p=0;p<a.length;p++)n.tracks.push(a[p]);return n},c=n(9888),s=l=n(393);unction d(t){for(var e={},n=0;n<t.childNodes.length;n++){var o=t.childNodes[n],u=(0,r.r1)(o);if(u)switch(u.toLowerCase()){case"enclosure":e.file=(0,i.Dc)(o,"url");break;case"title":e.title=(0,r.dZ)(o);break;case"guid":e.mediaid=(0,r.dZ)(o);break;case"pubdate":e.date=(0,r.dZ)(o);break;case"description":e.description=(0,r.dZ)(o);break;case"link":e.link=(0,r.dZ)(o);break;case"category":e.tags?e.tags+=(0,r.dZ)(o):e.tags=(0,r.dZ)(o)}}return new l.Z(s(t,a(t,e)))}},393:function(t,e,n){"use strict";n.d(e,{Z:function(){return s}});var r=n(6042),i=n(6053),o=["captions","metadata","thumbnails","chapters"];var u=a=n(9918),c=Array.isArray,s=,7263:8320:function(t,e,n){"use strict";n.d(e,{ZP:function(){return w},s7:function(){return l},T5:function(){return h},YF:function(){return d},_:function(){return f},bx:function(){return p}});var r=n(6042),i={none:!0,metadata:!0,auto:!0};ar u=n(393),a=n(6053),c=n(2303),s=n(4446);nction d(t,e,n){var i=t.getProviders(),u=t.get("preload"),a=(0,r.l7)({},e);if(a.preload=o(e.preload,u),a.allSources=v(a,t),a.sources=g(a.allSources,i),a.sources.length)return a.file=a.sources[0].file,a.feedData=n,a)}ar h=function v(t,e){var n=e.attributes,r=t.sources,i=t.allSources,u=t.preload,c=t.drm,s=m(t.withCredentials,n.withCredentials);return(i||r).map((function(e){if(e!==Object(e))return null;y(e,n,"androidhls"),y(e,n,"hlsjsdefault"),y(e,n,"safarihlsjs"),e,t,n),y(e,n,"_hlsjsProgressive"),e.preload=o(e.preload,u);var r=e.drm||c||n.drm;r&&(e.drm=r);var i=m(e.withCredentials,s);return void 0!==i&&(e.withCredentials=i),(0,a.Z)(e)})).filter(()} w=,6053:4101:function(t,e,n){"use strict";var r=n(6042),i=n(676),o=n(9888),u=n(2957),a=n(4446),c=n(3487),s=var l=Object.defineProperties(l.prototype,{promise:{get:set:function(){}}}),(0,r.l7)(l.prototype,{load:registerPlugin:getNewInstance:),e.Z=l},1241:7164:function(t,e,n){"use strict";n.d(e,{Nq:function(){return i},bX:function(){return o},MK:function(){return u}});var r=n(6042),i=unction u(t,e,n){var i=t.name,o=(0,r.l7)({},e),u=document.createElement("div");u.id=n.id+"_"+i,u.className="jw-plugin jw-reset";var a=t.getNewInstance(n,o,u);return n.addPlugin(i,a),a}},7683:658:4609:6528:1628:function(t,e,n){"use strict";n.d(e,{V:function(){return i}});var r=n(8348);,12:670:6593:6875:6886:328:2268:974:5004:2799:function(t,e,n){"use strict";n.d(e,{pv:function(){return s},az:function(){return l},nh:function(){return f},bJ:function(){return d},oH:function(){return p},gB:function(){return v},FK:function(){return g},s1:function(){return w},cn:function(){return b},IV:function(){return k},L_:function(){return C},og:function(){return P},P$:function(){return j},EU:function(){return x},kq:function(){return S},cS:function(){return T},A8:function(){return E},SH:function(){return O},AH:function(){return A},i3:function(){return Z},nG:function(){return _},UM:function(){return M},Ww:function(){return F}});var r,i=n(6042),o=n(2957),u=n(8348),a=window.DOMParser,c=!0;=new RegExp(/^((((https?):\/\/)|(mailto:))(%[0-9A-Fa-f]{2}|[-()_.!~*';/?:@&=+$,A-Za-z0-9])+)([).!';/?:,][[:blank:|:blank:]])?$/);eturn t.nextElementSibling}29:function(t,e,n){"use strict";n.d(e,{Z:function(){return y}});var r=n(6042),i=n(1569),o=n(7034),u=n(9888),a=n(2957),c=n(7411),s=n(4742);ar f=n(2268),d=n(2799),p=n(974),h=n(6886),v=n(1261),g=n(5499),m=n(6234);var y=(0,r.l7)({},u,o,i,{addClass:d.cn,hasClass:d.pv,removeClass:d.IV,replaceClass:d.L_,toggleClass:d.og,classList:d.s1,styleDimension:d.FK,createElement:d.az,emptyElement:d.EU,addStyleSheet:d.kq,bounds:d.A8,openLink:d.nG,replaceInnerHtml:d.nh,css:p.iv,clearCss:p.oI,style:p.oB,transform:p.vs,getRgba:p.HY,ajax:h.h,crossdomain:tryCatch:Error:l,Timer:c.Z,log:g.c,genId:m.B,between:v.v,foreach:flashVersion:f.dI,isIframe:f.cL,indexOf:r.cq,trim:a.fy,pad:a.vk,extension:a.AO,hms:a.WZ,seconds:a.m9,prefix:a.O4,suffix:a.uA,noop:function(){}})},7543:8518:function(t,e,n){"use strict";n.d(e,{tK:function(){return p},id:function(){return h},Cq:function(){return v},G3:function(){return m},t6:function(){return w},q2:function(){return b},Pm:function(){return k},dl:function(){return P},Dq:function(){return j},Mh:function(){return x}});var r=n(6042),i=n(2268),o=n(6886),u=n(7034),a=n(696),c={},s={aa:"Afar",ab:"Abkhazian",ae:"Avestan",af:"Afrikaans",ak:"Akan",am:"Amharic",ar:"Arabic",an:"Aragonese",as:"Assamese",av:"Avaric",ay:"Aymara",az:"Azerbaijani",ba:"Bashkir",be:"Belarusian",bg:"Bulgarian",bh:"Bihari languages",bi:"Bislama",bm:"Bambara",bn:"Bengali",bo:"Tibetan",br:"Breton",bs:"Bosnian",ca:"Catalan",ce:"Chechen",ch:"Chamorro",co:"Corsican",cr:"Cree",cs:"Czech",cu:"Church Slavic",cv:"Chuvash",cy:"Welsh",da:"Danish",de:"German",dv:"Divehi",dz:"Dzongkha",ee:"Ewe",el:"Greek",en:"English",eo:"Esperanto",es:"Spanish",et:"Estonian",eu:"Basque",fa:"Persian",ff:"Fulah",fi:"Finnish",fj:"Fijian",fo:"Faroese",fr:"French",fy:"Western Frisian",ga:"Irish",gd:"Gaelic",gl:"Galician",gn:"Guarani",gu:"Gujarati",gv:"Manx",ha:"Hausa",he:"Hebrew",hi:"Hindi",ho:"Hiri Motu",hr:"Croatian",ht:"Haitian",hu:"Hungarian",hy:"Armenian",hz:"Herero",ia:"Interlingua",id:"Indonesian",ie:"Interlingue",ig:"Igbo",ii:"Sichuan Yi",ik:"Inupiaq",io:"Ido",is:"Icelandic",it:"Italian",iu:"Inuktitut",ja:"Japanese",jv:"Javanese",ka:"Georgian",kg:"Kongo",ki:"Kikuyu",kj:"Kuanyama",kk:"Kazakh",kl:"Kalaallisut",km:"Central Khmer",kn:"Kannada",ko:"Korean",kr:"Kanuri",ks:"Kashmiri",ku:"Kurdish",kv:"Komi",kw:"Cornish",ky:"Kirghiz",la:"Latin",lb:"Luxembourgish",lg:"Ganda",li:"Limburgan",lo:"Lao",ln:"Lingala",lt:"Lithuanian",lu:"Luba-Katanga",lv:"Latvian",mg:"Malagasy",mh:"Marshallese",mi:"Maori",mk:"Macedonian",ml:"Malayalam",mn:"Mongolian",mr:"Marathi",ms:"Malay",mt:"Maltese",my:"Burmese",na:"Nauru",nb:"Bokmål",nd:"Ndebele",ne:"Nepali",ng:"Ndonga",nl:"Dutch",nn:"Norwegian Nynorsk",no:"Norwegian",nr:"Ndebele",nv:"Navajo",ny:"Chichewa",oc:"Occitan",oj:"Ojibwa",om:"Oromo",or:"Oriya",os:"Ossetian",pa:"Panjabi",pi:"Pali",pl:"Polish",pt:"Portuguese",ps:"Pushto",qu:"Quechua",rm:"Romansh",rn:"Rundi",ro:"Romanian",ru:"Russian",rw:"Kinyarwanda",sa:"Sanskrit",sc:"Sardinian",sd:"Sindhi",se:"Northern Sami",sg:"Sango",si:"Sinhala",sk:"Slovak",sl:"Slovenian",sm:"Samoan",sn:"Shona",so:"Somali",sq:"Albanian",sr:"Serbian",ss:"Swati",st:"Sotho",su:"Sundanese",sw:"Swahili",sv:"Swedish",ta:"Tamil",te:"Telugu",tg:"Tajik",th:"Thai",ti:"Tigrinya",tk:"Turkmen",tl:"Tagalog",tn:"Tswana",to:"Tonga",tr:"Turkish",ts:"Tsonga",tt:"Tatar",tw:"Twi",ty:"Tahitian",ug:"Uighur",uk:"Ukrainian",ur:"Urdu",uz:"Uzbek",ve:"Venda",vi:"Vietnamese",vo:"Volapük",wa:"Walloon",wo:"Wolof",xh:"Xhosa",yi:"Yiddish",yo:"Yoruba",za:"Zhuang",zh:"Chinese",zu:"Zulu"},l=(0,r.U_)(s};m.mock_=null;var y=["ar","da","de","el","es","fi","fr","he","id","it","ja","ko","nb","nl","nn","no","oc","pt","ro","ru","sl","sv","th","tr","vi","zh"}var b.mock_=null;var };P.mock_=null;var j.mock_=null},549},126},988},156},623},177},67},295},5882:function(t,e,n){"use strict";n.d(e,{ZP:function(){return b},GU:function(){return T},dO:function(){return F}});var r=n(8348),i=n(1643),o=n(328),u=n(5004),a=n(2799}var s,l,f="ontouchstart"in window,d="PointerEvent"in window&&!r.OS.android,p=!(d||f&&r.OS.mobile),h="window",v="init",g="select",m="keydown",y=r.Features.passiveEvents,w=!!y&&{passive:!0},}(o.ZP),k=/\s+r S={drag:function(t){P(t)},dragStart:function(t){P(t)},dragEnd:function(t){P(t)},click:function(t){j(t)},doubleClic},longPres},focus:function(t){var e="focus";E(t,e,e,(function(n){Z(t,e,n)}))},blu},over:function(t){(d||p)&&E(t,i.B1,d?"pointerover":"mouseover",(function(e){"touch"!==e.pointerType&&_(t,i.B1,e)}))},ou},mov},ente},keydow},gestur},interactio},tap:function(){},doubleTap:function(){}function(t,e,n){"use strict";n.d(e,{S6:function(){return P},UI:function(){return x},u4:function(){return E},sE:function(){return Z},hX:function(){return M},$6:function(){return I},Yj:function(){return L},dp:function(){return B},vM:function(){return U},e1:function(){return V},r3:function(){return G},ar:function(){return K},_e:function(){return Q},e5:function(){return X},cq:function(){return J},ak:function(){return Y},P2:function(){return it},U_:function(){return at},ce:function(){return ct},l7:function(){return st},ei:function(){return lt},Kn:function(){return dt},mf:function(){return gt},hj:function(){return mt},HD:function(){return yt},xV:function(){return wt},i2:function(){return bt},jn:function(){return kt},o8:function(){return Ct},yR:function(){return jt},a9:function(){return xt},Cb:function(){return St},wB:function(){return Tt},qh:function(){return Ot}});var r=n(5004),i={},o=Array.prototype,u=Object.prototype,a=Function.prototype,c=o.slice,s=o.concat,l=u.toString,f=u.hasOwnProperty,d=o.map,p=o.reduce,h=o.forEach,v=o.filter,g=o.every,m=o.some,y=o.indexOf,w=Array.isArray,b=Object.keys,k=a.bind,C=window.isFinite,},j=P,},S=x,T="Reduce of empty array with no initial value",},O=E,A=E,},_=Z,},F=M,},D=I,},N=L,},},},},U=z})),H=z})),},},W=G,K=function(t,e){return M(t,Tt(e))},Q=function(t,e){return Z(t,Tt(e))},},},$=function(){},},t},et=tt(R,2),n},rt=tt(nt,{partial:tt},1),i},o},u},a},c},st=Object.assign},l},ft=w},d},pt=[];P(["Function","String","Number","Date","RegExp"]})),pt.Functio};var ht=pt.Date,vt=pt.RegExp,gt=pt.Function,mt=pt.Number,yt=pt.String,w},b},k},C},P},j},x},S},T},Et=r.z,O};e.ZP={afte},all:I,any:L,before:R,bind:Y,clon},collect:S,compac},constant:xt,contains:G,debounc},defaults:ct,defer:rt,delay:nt,detect:_,difference:X,each:P,every:D,extend:st,filter:M,find:Z,findWhere:Q,foldl:O,forEach:j,groupBy:U,has:Pt,identity:jt,include:W,indexBy:H,indexOf:J,inject:A,invert:at,isArray:ft,isBoolean:kt,isDate:ht,isFinite:wt,isFunction:gt,isNaN:bt,isNul},isNumber:mt,isObject:dt,isRegExp:vt,isString:yt,isUndefined:Ct,isValidNumber:Ot,keys:ot,las},map:x,matches:Tt,ma},memoiz},now:Et,omi},once:et,partial:tt,pick:lt,pluc},property:St,propertyO},reduce:E,rejec},resul},select:F,size:B,some:N,sortedIndex:V,throttle:it,where:K,withou}}},703},902},660},422},992},467},2445:function(t,e,n){"use strict";n.d(e,{ZP:function(){return k},q}});var r=n(6042),i=n(5083),o=n(1569),u=n(7034),a=n(817),c=n(6599),s=n(386),l="__CONTEXTUAL__",},d=n(4737),p=n.n(d),h=n(67),},},},},},b=function(t){var e=(0,r.l7)({},t.plugins),n=(0,s.Z)(t.edition);if(n("ads")){var i=(0,r.l7)({},t.advertising),o=i.client;if(o)e[y(o)||o]=i,delete i.client;i.bids&&w(e,i.bids,"bidding")}if(n("jwpsrv")){var u=t.analytics;u!==Object(u)&&(u={}),w(e,u,"jwpsrv")}return w(e,t.ga,"gapro"),e},k=function(t,e){var s,d,y,w=(0,i.ZP)(t,e),k=w.key||a.default.key,C=new c.ZP(k),P=C.edition();if("free"===C.edition()&&(w=(0,r.l7)({skin:{active:"#ff0046",timeslider:{progress:"none"}},logo:{position:"control-bar",file:p()}},i.ke,(0,r.ei)(w,["analytics","aspectratio","base","file","height","playlist","sources","width"]))),w.key=k,w.edition=P,w.error=C.error(),w.generateSEOMetadata=w.generateSEOMetadata||!1,"unlimited"===P){var j=(0,o.getScriptPath)("jwplayer.js");if(!j)throw new Error("Error setting up player: Could not locate jwplayer.js script tag");n.p=j}if(w.related=m(w),w.ab&&(w.a}(w)),w.plugins=b(w),s=w.playlist,(0,r.HD)(s)&&s.indexOf(l)>-1&&(w.playlis}(document,w.playlist),w.contextual=!0),(0,u.isFileProtocol)()){var x=w,S=x.playlist,T=x.related;v(S)&&(w.playlist=g(S)),T&&v(T.file)&&(T.file=g(T.file))}return w.__abSendDomainToFeeds&&(y=w.playlist,/\.jwplatform.com|\.jwplayer.com/.test(y))&&(w.playlist=(d=w.playlist)+(-1!==d.indexOf("?")?"&":"?")+"page_domain="+encodeURIComponent((0,h.X)())),w}},817:function(t,e,n){"use strict";n.d(e,{default:function(){return ot}});var r=n(6042),i=setTimeout;function o()totype.catc},u.prototype.the},u.prototype.finall},u.al},u.resolv},u.rejec},u.rac},u._immediateFn="function"==typeof setImmediate&&function(t){setImmediate(t)}},u._unhandledRejectionF};var p=u;window.Promise||(window.Promise=p);var h=n(1569),v=n(6391),g=n(2963),m=n(670),y={availableProviders:g.B,registerProvider:m.Z},w=n(1241);y.registerPlugi};var b=y,k=n(6601),C=n(4742),P=n(8348),j=n(623),x=n(1643),S=n(7411),T=n(328),E=n(4429),O=function _(t){var e=++O,n=t.id||"player-"+e,i=new S.Z,o={},u=A(this,t);i.tick("init"),t.setAttribute("data-jwplayer-id",n),Object.defineProperties(this,{id:{enumerable:!0,get:function(){return n}},uniqueId:{enumerable:!0,get:function(){return e}},plugins:{enumerable:!0,get:function(){return o}},_qoe:{enumerable:!0,get:function(){return i}},version:{enumerable:!0,get:function(){return k.i}},Events:{enumerable:!0,get:function(){return T.ZP}},utils:{enumerable:!0,get:function(){return E.Z}},_:{enumerable:!0,get:function(){return r.ZP}}}),(0,r.l7)(this,{_events:{},setu},remov},qo},addCues:function(t){return Array.isArray(t)&&u.addCues(t),this},getAudioTracks:function(){return u.getAudioTracks()},getBuffer:function(){return u.get("buffer")},getCaptions:function(){return u.get("captions")},getCaptionsList:function(){return u.getCaptionsList()},getConfig:function(){return u.getConfig()},getContainer:function(){return u.getContainer()},getControls:function(){return u.get("controls")},getCues:function(){return u.get("cues")},getCurrentAudioTrack:function(){return u.getCurrentAudioTrack()},getCurrentCaptions:function(){return u.getCurrentCaptions()},getCurrentQuality:function(){return u.getCurrentQuality()},getCurrentTime:function(){return u.get("currentTime")},getDuration:function(){return u.get("duration")},getEnvironment:function(){return P},getFullscreen:function(){return u.get("fullscreen")},getHeight:function(){return u.getHeight()},getItemMet},getMute:function(){return u.getMute()},getPercentViewable:function(){return u.get("visibility")},getPip:function(){return u.get("pip")},getPlaybackRate:function(){return u.get("playbackRate")},getPlaylist:function(){return u.get("playlist")},getPlaylistIndex:function(){return u.get("item")},getPlaylistIte},getPosition:function(){return u.get("position")},getProvider:function(){return u.getProvider()},getQualityLevels:function(){return u.getQualityLevels()},getSafeRegio},getState:function(){return u.getState()},getStretching:function(){return u.get("stretching")},getViewable:function(){return u.get("viewable")},getVisualQuality:function(){return u.getVisualQuality()},getVolum},getWidth:function(){return u.getWidth()},setCaptions:function(t){return u.setCaptions(t),this},setConfig:function(t){return u.setConfig(t),this},setControls:function(t){return u.setControls(t),this},setCurrentAudioTrack:function(t){u.setCurrentAudioTrack(t)},setCurrentCaptions:function(t){u.setCurrentCaptions(t)},setCurrentQuality:function(t){u.setCurrentQuality(t)},setFullscreen:function(t){return u.setFullscreen(t),this},setAllowFullscreen:function(t){return u.setAllowFullscreen(t),this},setMute:function(t){return u.setMute(t),this},setPip:function(t){return u.setPip(t),this},setPlaybackRate:function(t){return u.setPlaybackRate(t),this},setPlaylistItem:function(t,e){return u.setPlaylistItem(t,e),this},setCue},setVolume:function(t){return u.setVolume(t),this},load:function(t,e){return u.load(t,e),this},play:function(t){return u.play(t),this},pause:function(t){return u.pause(t),this},playToggl},seek:function(t,e){return u.seek(t,e),this},playlistItem:function(t,e){return u.playlistItem(t,e),this},playlistNext:function(t){return u.playlistNext(t),this},playlistPrev:function(t){return u.playlistPrev(t),this},next:function(t){return u.next(t),this},requestPip:function(t){return u.requestPip(t),this},castToggle:function(){return u.castToggle(),this},stopCasting:function(){return u.stopCasting(),this},createInstream:function(){return u.createInstream()},stop:function(){return u.stop(),this},resiz},addButto},removeButto},attachMedia:function(){return u.attachMedia(),this},detachMedi},isBeforeComplete:function(){return u.isBeforeComplete()},isBeforePla},setPlaylistItemCallbac},removePlaylistItemCallbac},getPlaylistItemPromis},getFloatin},setFloatin}})}(0,r.l7)(_.prototype,{on:function(t,e,n){return T.on.call(this,t,e,n)},once:function(t,e,n){return T.IH.call(this,t,e,n)},of},trigge},getPlugin:function(t){return this.plugins[t]},addPlugi},registerPlugi},getAdBlock:function(){return!1},playAd:function(t){},pauseA},skipAd:function(){}}),n.p=(0,h.loadFrom)();var I(M);var D=M,L=n(5882),N=n(6599),B=n(676),R=n(5592),q=n(6769),z=n(9025),U=r.ZP.extend,H={};H._=r.ZP,H.utils=(0,r.l7)(E.Z,{key:N.ZP,extend:U,scriptloader:B.ZP,rssparser:{parse:q.Z},tea:R.p,UI:L.ZP}),H.utils.css.style=H.utils.style,H.vid=z.Z;var V=H,G=n(7543),W=/^(?:on(?:ce)?|off|trigger)$/,},},},},},},t},e},nt=window;(0,r.l7)(D,V);var r};(0,r.l7)(rt,V),I(rt),"function"==typeof nt.define&&nt.define.amd&&nt.define([],(function(){return rt}));var it=rt;nt.jwplayer&&(it=nt.jwplayer);var ot=it},348},191},2963:function(t,e,n){"use strict";n.d(e,{B:function(){return d}});var r=n(6593),i=n(8348),o=n(386),u=n(6042),a=n(1918),c=n(9025),s=(0,u.sE)(r.B,(0,u.wB)({name:"html5"})),l=s.support}s.supports=function(t,e){var n=l.apply(this,arguments);if(n&&t.drm&&"hls"===t.type){var r=(0,o.Z)(e),i=r("drm");if(i&&t.drm.fairplay){var u=window.WebKitMediaKeys;return u&&u.isTypeSupported&&u.isTypeSupported("com.apple.fps.1_0","video/mp4")}return i}return n},r.B.push({name:"shaka",supports:function(t){return!(t.drm&&!(0,a.d3)(t.drm))&&(!(!window.HTMLVideoElement||!window.MediaSource)&&(f(t.mediaTypes)&&("dash"===t.type||"mpd"===t.type||(t.file||"").indexOf("mpd-time-csf")>-1)))}}),r.B.unshift({name:"hlsjs",supports:function(t){return function(t){if(t.drm)return!1;var e=t.file.indexOf(".m3u8")>-1,n="hls"===t.type||"m3u8"===t.type;if(!e&&!n)return!1;var r=i.Browser.chrome||i.Browser.firefox||i.Browser.edge||i.Browser.ie&&11===i.Browser.version.major||i.OS.tizen,o=i.Browser.safari&&(!c.Z.canPlayType||!c.Z.canPlayType("application/vnd.apple.mpegURL")),u=i.OS.android&&!1===t.hlsjsdefault,a=i.Browser.safari&&!!t.safarihlsjs;return f(t.mediaTypes||['video/mp4;codecs="avc1.4d400d,mp4a.40.2"'])&&(r||a||o)&&!u}(t)}});var d=r.B},2303:function(t,e,n){"use strict";n.d(e,{Z:function(){return d}});var r=n(6042),i=n(2963),o=n(12),u=n(670),a=n(2894),c={html5:function(){return n.e(250).then(function(t){var e=n(9181).default;return(0,u.Z)(e),e}.bind(null,n)).catch((0,a.Ep)(152))}};(0,r.l7)(c,{shaka:function(){return n.e(371).then(function(t){var e=n(2287).default;return(0,u.Z)(e),e}.bind(null,n)).catch((0,a.Ep)(154))},hlsj}});var s=}(0,r.l7)(l.prototype,{loa},providerSupport},choos}});var f=l;f.prototype.providerSupport};var d=f},514},38},56},659},6},559},956},473}},r={}i.m=n,i.},i.},i.f={},i.},i.},i.},t={},e="jwplayer:",i.},i.},i.nm},i.p="}();var o=i(817);window.jwplayer=o.default}();