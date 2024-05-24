!this,function(){"use strict";ction r(e){try{return encodeURIComponent(e)}catch(t){T("error `encode(%o)` - %o",e,t)}}unction i(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function s(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},y=(e(function(e,t){(function(){function n(e,t){||(e=i.Object()),t||(t=i.Object());var s=e.Number||i.Number,a=e.String||i.String,u=e.Object||i.Object,c=e.Date||i.Date,p=e.SyntaxError||i.SyntaxError,l=e.TypeError||i.TypeError,f=e.Math||i.Math,d=e.JSON||i.JSON;"object"==typeof d&&d&&(t.stringify=d.stringify,t.parse=d.parse);var h,g,v,y=u.prototype,m=y.toString,_=new c(-0xc782b5b800cec);try{_=-109252==_.getUTCFullYear()&&0===_.getUTCMonth()&&1===_.getUTCDate()&&10==_.getUTCHours()&&37==_.getUTCMinutes()&&6==_.getUTCSeconds()&&708==_.getUTCMilliseconds()}catch(e){}if(!o("json")){var b=o("bug-string-char-index");if(!_)var w=f.floor,I=[0,31,59,90,120,151,181,212,243,273,304,334],E=if((h=y.hasOwnProperty)||(h=,g=!o("json-stringify")){var S={92:"\\\\",34:'\\"',8:"\\b",12:"\\f",10:"\\n",13:"\\r",9:"\\t"},C=O=N=t.stringify=if(!o("json-parse")){var T,A,j=a.fromCharCode,x={92:"\\",34:'"',47:"/",98:"\b",116:"\t",110:"\n",102:"\f",114:"\r"},P=k=R=F=U=t.parse=}return t.runInContext=n,t}var r={function:!0,object:!0},o=r.object&&t&&!t.nodeType&&t,i=r[typeof window]&&window||this,s=o&&r.object&&e&&!e.nodeType&&"object"==typeof v&&v;if(!s||s.global!==s&&s.window!==s&&s.self!==s||(i=s),o)n(i,o);else{var a=i.JSON,u=i.JSON3,c=!1,p=n(i,i.JSON3={noConflict:);i.JSON={parse:p.parse,stringify:p.stringify}}}).call(v)}),{DEFAULT_INSTANCE:"$default_instance",API_VERSION:2,MAX_STRING_LENGTH:4096,MAX_PROPERTY_KEYS:1e3,IDENTIFY_EVENT:"$identify",GROUP_IDENTIFY_EVENT:"$groupidentify",LAST_EVENT_ID:"amplitude_lastEventId",LAST_EVENT_TIME:"amplitude_lastEventTime",LAST_IDENTIFY_ID:"amplitude_lastIdentifyId",LAST_SEQUENCE_NUMBER:"amplitude_lastSequenceNumber",SESSION_ID:"amplitude_sessionId",DEVICE_ID:"amplitude_deviceId",OPT_OUT:"amplitude_optOut",USER_ID:"amplitude_userId",COOKIE_TEST:"amplitude_cookie_test",REVENUE_EVENT:"revenue_amount",REVENUE_PRODUCT_ID:"$productId",REVENUE_QUANTITY:"$quantity",REVENUE_PRICE:"$price",REVENUE_REVENUE_TYPE:"$revenueType",AMP_DEVICE_ID_PARAM:"amp_device_id"}),m={encode:decode:,_={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:_encode:decode:_decode:,b=e(,w=1e3,I=60*w,E=60*I,S=24*E,C=365.25*S,O=function(e,n){n=n||{};var r=typeof e;if("string"===r&&e.length>0)return e);if("number"===r&&!1===isNaN(e))return n.long?e):e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))},N=e(function(e,t){function n(e){ar o;return n.namespace=e,n.enabled=t.enabled(e),n.useColors=t.useColors(),n.color=e),n.destroy=r,"function"==typeof t.init&&t.init(n),t.instances.push(n),n}t=e.exports=n.debug=n.default=n).coerce=t.disable=t.enable=t.enabled=t.humanize=O,t.instances=[],t.names=[],t.skips=[],t.formatters={}}),T=e(("cookie"),A=j=e(function(e,t){ar r=b.parse;n.levels=n.cookie=A,t=e.exports=n}),x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?P=Object.prototype.toString,k=function(e){switch(P.call(e)){case"[object Date]":return"date";case"[object RegExp]":return"regexp";case"[object Arguments]":return"arguments";case"[object Array]":return"array";case"[object Error]":return"error"}return null===e?"null":void 0===e?"undefined":e!=e?"nan":e&&1===e.nodeType?"element":"undefined"!=typeof Buffer&&"function"==typeof Buffer.isBuffer&&Buffer.isBuffer(e)?"buffer":void 0===(e=e.valueOf?e.valueOf():Object.prototype.valueOf.apply(e))?"undefined":x(e)},R={DISABLE:0,ERROR:1,WARN:2,INFO:3},F=R.WARN,U={error:function(e){F>=R.ERROR&&D(e)},warn:function(e){F>=R.WARN&&D(e)},info:,D=q=M=L=["null","nan","undefined","function","arguments","regexp","element"],V=z=G={setLogLevel:getLogLevel:function(){return F},log:U,isEmptyString:getQueryParam:sessionStorageEnabled:truncate:validateGroups:validateInput:validateProperties:M},B={expirationDays:void 0,domain:void 0},K=$=J=W=Y=Q={reset:options:function(e){if(0===arguments.length)return B;e=e||{},B.expirationDays=e.expirationDays;var t=G.isEmptyString(e.domain)?"."+j(window.location.href):e.domain,n=Math.random();B.domain=t,J("amplitude_test",n);var r=$("amplitude_test");r&&r===n||(t=null),Y("amplitude_test"),B.domain=t},get:$,set:J,remove:Y};if())g=window.localStorage;else if(window.globalStorage)try{g=window.globalStorage[window.location.hostname]}catch(e){}else{var X=document.createElement("div"),H="localStorage";X.style.display="none",document.getElementsByTagName("head")[0].appendChild(X),X.addBehavior&&(X.addBehavior("#default#userdata"),g={length:0,setItem:getItem:removeItem:clear:key:,X.load(H),g.length=X.XMLDocument.documentElement.attributes.length)}g||(g={length:0,setItem:getItem:function(e){},removeItem:function(e){},clear:function(){},key:);var Z=g,ee=ee.prototype._cookiesEnabled=ee.prototype.getStorage=function(){if(null!==this.storage)return this.storage;if(this._cookiesEnabled())this.storage=Q;else{this.storage={_options:{expirationDays:void 0,domain:void 0},reset:options:function(e){return 0===arguments.length?this._options:(e=e||{},this._options.expirationDays=e.expirationDays||this._options.expirationDays,this._options.domain=e.domain||this._options.domain||window.location.hostname,this._options)},get:set:remove:}return this.storage};var te=te.prototype.add=te.prototype.append=function(e,t){return this._addOperation("$append",e,t),this},te.prototype.clearAll=function(){return Object.keys(this.userPropertiesOperations).length>0?(this.userPropertiesOperations.hasOwnProperty("$clearAll")||G.log.error("Need to send $clearAll on its own Identify object without any other operations, skipping $clearAll"),this):(this.userPropertiesOperations.$clearAll="-",this)},te.prototype.prepend=function(e,t){return this._addOperation("$prepend",e,t),this},te.prototype.set=function(e,t){return this._addOperation("$set",e,t),this},te.prototype.setOnce=te.prototype.unset=te.prototype._addOperation=function(e,t,n){this.userPropertiesOperations.hasOwnProperty("$clearAll")?G.log.error("This identify already contains a $clearAll operation, skipping operation "+e):-1===this.properties.indexOf(t)?(this.userPropertiesOperations.hasOwnProperty(e)||(this.userPropertiesOperations[e]={}),this.userPropertiesOperations[e][t]=n,this.properties.push(t)):G.log.error('User property "'+t+'" already used in this identify, skipping operation '+e)};var ne=e(function(e){!function(t){ports=g:t.md5=g}(v)}),re=oe=ie=se=Array.prototype.splice,ae=ue=ce=pe=i.prototype.clear=re,i.prototype.delete=ae,i.prototype.get=ue,i.prototype.has=ce,i.prototype.set=pe;var le=i,fe=de=he=function(e){return this.__data__.get(e)},ge=ve="object"==typeof v&&v&&v.Object===Object&&v,ye="object"==typeof self&&self&&self.Object===Object&&self,me=ve||ye||Function("return this")(),_e=me.Symbol,be=Object.prototype,we=be.hasOwnProperty,Ie=be.toString,Ee=_e?_e.toStringTag:void 0,Se=Ce=Object.prototype.toString,Oe=Ne="[object Null]",Te="[object Undefined]",Ae=_e?_e.toStringTag:void 0,je=xe=Pe="[object AsyncFunction]",ke="[object Function]",Re="[object GeneratorFunction]",Fe="[object Proxy]",Ue=De=me["__core-js_shared__"],qe=),Me=Le=Function.prototype.toString,Ve=ze=/^\[object .+?Constructor\]$/,Ge=Function.prototype,Be=Object.prototype,Ke=Ge.toString,$e=Be.hasOwnProperty,Je=RegExp("^"+Ke.call($e).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),We=Ye=Qe=Xe=Qe(me,"Map"),He=Qe(Object,"create"),Ze=et=tt="__lodash_hash_undefined__",nt=Object.prototype.hasOwnProperty,rt=ot=Object.prototype.hasOwnProperty,it=st="__lodash_hash_undefined__",at=s.prototype.clear=Ze,s.prototype.delete=et,s.prototype.get=rt,s.prototype.has=it,s.prototype.set=at;var ut=s,ct=pt=lt=ft=dt=function(e){return lt(this,e).get(e)},ht=gt=a.prototype.clear=ct,a.prototype.delete=ft,a.prototype.get=dt,a.prototype.has=ht,a.prototype.set=gt;var vt=a,yt=200,mt=u.prototype.clear=fe,u.prototype.delete=de,u.prototype.get=he,u.prototype.has=ge,u.prototype.set=mt;var _t=u,bt=),wt=It=Et=),St=e(function(e,t){var n=t&&!t.nodeType&&t,r=n&&!0&&e&&!e.nodeType&&e,o=r&&r.exports===n?me.Buffer:void 0,i=o?o.allocUnsafe:void 0;e.exports=),Ct=me.Uint8Array,Ot=Nt=Tt=At=Object.create,jt=),xt=Pt=xt(Object.getPrototypeOf,Object),kt=Object.prototype,Rt=Ft=Ut=Dt="[object Arguments]",qt=Mt=Object.prototype,Lt=Mt.hasOwnProperty,Vt=Mt.propertyIsEnumerable,zt=qt(function(){return arguments}())?qt:Gt=Array.isArray,Bt=9007199254740991,Kt=$t=Jt=Wt=Yt=e(function(e,t){var n=t&&!t.nodeType&&t,r=n&&!0&&e&&!e.nodeType&&e,o=r&&r.exports===n?me.Buffer:void 0,i=(o?o.isBuffer:void 0)||Wt;e.exports=i}),Qt="[object Object]",Xt=Function.prototype,Ht=Object.prototype,Zt=Xt.toString,en=Ht.hasOwnProperty,tn=Zt.call(Object),nn=rn={};rn["[object Float32Array]"]=rn["[object Float64Array]"]=rn["[object Int8Array]"]=rn["[object Int16Array]"]=rn["[object Int32Array]"]=rn["[object Uint8Array]"]=rn["[object Uint8ClampedArray]"]=rn["[object Uint16Array]"]=rn["[object Uint32Array]"]=!0,rn["[object Arguments]"]=rn["[object Array]"]=rn["[object ArrayBuffer]"]=rn["[object Boolean]"]=rn["[object DataView]"]=rn["[object Date]"]=rn["[object Error]"]=rn["[object Function]"]=rn["[object Map]"]=rn["[object Number]"]=rn["[object Object]"]=rn["[object RegExp]"]=rn["[object Set]"]=rn["[object String]"]=rn["[object WeakMap]"]=!1;var on=sn=an=e(function(e,t){var n=t&&!t.nodeType&&t,r=n&&!0&&e&&!e.nodeType&&e,o=r&&r.exports===n&&ve.process,i=);e.exports=i}),un=an&&an.isTypedArray,cn=un?sn(un):on,pn=Object.prototype.hasOwnProperty,ln=fn=dn=hn=9007199254740991,gn=/^(?:0|[1-9]\d*)$/,vn=yn=Object.prototype.hasOwnProperty,mn=_n=bn=Object.prototype.hasOwnProperty,wn=In=En=Sn=Cn=c,On=Nn=Tn=Math.max,An=jn=xn=bt?On,Pn=800,kn=16,Rn=Date.now,Fn=xn),Un=Dn=qn=Mn=qn(,Ln=Array.isArray||Vn=Object.keys||zn={encode:f,stringify:f,decode:h,parse:h},Gn=Gn.prototype.send=function(e){if(!!window.XDomainRequest){var t=new window.XDomainRequest;t.open("POST",this.url,!0),t.onload=t.onerror=t.ontimeout=function(){},t.onprogress=t.send(zn.stringify(this.data))}else{var n=new XMLHttpRequest;n.open("POST",this.url,!0),n.onreadystatechange=n.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8"),n.send(zn.stringify(this.data))}};var Bn=Bn.prototype.setProductId=Bn.prototype.setQuantity=Bn.prototype.setPrice=function(e){return"number"!==k(e)?G.log.error("Unsupported type for price: "+k(e)+", expecting number"):this._price=e,this},Bn.prototype.setRevenueType=Bn.prototype.setEventProperties=Bn.prototype._isValidRevenue=Bn.prototype._toJSONObject=var Kn=e(function(e,t){!function(n,r){var o="model",i="name",s="type",a="vendor",u="version",c="mobile",p="tablet",l={extend:has:lowerize:major:,f={rgx:function(){for(var e,t,n,r,o,i,s,a=0,u=arguments;a<u.length&&!i;){var c=u[a],p=u[a+1];if(void 0===e){e={};for(r in p)p.hasOwnProperty(r)&&("object"==typeof(o=p[r])?e[o[0]]=void 0:e[o]=void 0)}for(t=n=0;t<c.length&&!i;)if(i=c[t++].exec(this.getUA()))for(r=0;r<p.length;r++)s=i[++n],"object"==typeof(o=p[r])&&o.length>0?2==o.length?"function"==typeof o[1]?e[o[0]]=o[1].call(this,s):e[o[0]]=o[1]:3==o.length?"function"!=typeof o[1]||o[1].exec&&o[1].test?e[o[0]]=s?s.replace(o[1],o[2]):void 0:e[o[0]]=s?o[1].call(this,s,o[2]):void 0:4==o.length&&(e[o[0]]=s?o[3].call(this,s.replace(o[1],o[2])):void 0):e[o]=s||void 0;a+=2}return e},str:,d={browser:{oldsafari:{version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}},name:{"Opera Mobile":"Opera Mobi","IE Mobile":"IEMobile"}},device:{amazon:{model:{"Fire Phone":["SD","KF"]}},sprint:{model:{"Evo Shift 4G":"7373KT"},vendor:{HTC:"APA",Sprint:"Sprint"}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2000:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},name:{"Windows Phone":"Windows Phone OS"}}}},h={browser:[[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,/(opera).+version\/([\w\.]+)/i,/(opera)[\/\s]+([\w\.]+)/i],[i,u],[/(OPiOS)[\/\s]+([\w\.]+)/i],[[i,"Opera Mini"],u],[/\s(opr)\/([\w\.]+)/i],[[i,"Opera"],u],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i,/(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(rekonq)\/([\w\.]+)*/i,/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs)\/([\w\.-]+)/i],[i,u],[/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],[[i,"IE"],u],[/(edge)\/((\d+)?[\w\.]+)/i],[i,u],[/(yabrowser)\/([\w\.]+)/i],[[i,"Yandex"],u],[/(comodo_dragon)\/([\w\.]+)/i],[[i,/_/g," "],u],[/((?:android.+)crmo|crios)\/([\w\.]+)/i,/android.+(chrome)\/([\w\.]+)\s+(?:mobile\s?safari)/i],[[i,"Chrome Mobile"],u],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i,/(qqbrowser)[\/\s]?([\w\.]+)/i],[i,u],[/(uc\s?browser)[\/\s]?([\w\.]+)/i,/ucweb.+(ucbrowser)[\/\s]?([\w\.]+)/i,/JUC.+(ucweb)[\/\s]?([\w\.]+)/i],[[i,"UCBrowser"],u],[/(dolfin)\/([\w\.]+)/i],[[i,"Dolphin"],u],[/XiaoMi\/MiuiBrowser\/([\w\.]+)/i],[u,[i,"MIUI Browser"]],[/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)/i],[u,[i,"Android Browser"]],[/FBAV\/([\w\.]+);/i],[u,[i,"Facebook"]],[/fxios\/([\w\.-]+)/i],[u,[i,"Firefox"]],[/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],[u,[i,"Mobile Safari"]],[/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],[u,i],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[i,[u,f.str,d.browser.oldsafari.version]],[/(konqueror)\/([\w\.]+)/i,/(webkit|khtml)\/([\w\.]+)/i],[i,u],[/(blackberry)\\s?\/([\w\.]+)/i],[[i,"BlackBerry"],u],[/(navigator|netscape)\/([\w\.-]+)/i],[[i,"Netscape"],u],[/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/([\w\.-]+)/i,/(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]+)*/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],[i,u]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[["architecture","amd64"]],[/(ia32(?=;))/i],[["architecture",l.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[["architecture","ia32"]],[/windows\s(ce|mobile);\sppc;/i],[["architecture","arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[["architecture",/ower/,"",l.lowerize]],[/(sun4\w)[;\)]/i],[["architecture","sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],[["architecture",l.lowerize]]],device:[[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],[o,a,[s,p]],[/applecoremedia\/[\w\.]+ \((ipad)/],[o,[a,"Apple"],[s,p]],[/(apple\s{0,1}tv)/i],[[o,"Apple TV"],[a,"Apple"]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i],[a,o,[s,p]],[/(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i],[o,[a,"Amazon"],[s,p]],[/(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i],[[o,f.str,d.device.amazon.model],[a,"Amazon"],[s,c]],[/\((ip[honed|\s\w*]+);.+(apple)/i],[o,a,[s,c]],[/\((ip[honed|\s\w*]+);/i],[o,[a,"Apple"],[s,c]],[/(blackberry)[\s-]?(\w+)/i,/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|huawei|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i],[a,o,[s,c]],[/\(bb10;\s(\w+)/i],[o,[a,"BlackBerry"],[s,c]],[/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7)/i],[o,[a,"Asus"],[s,p]],[/(sony)\s(tablet\s[ps])\sbuild\//i,/(sony)?(?:sgp.+)\sbuild\//i],[[a,"Sony"],[o,"Xperia Tablet"],[s,p]],[/(?:sony)?(?:(?:(?:c|d)\d{4})|(?:so[-l].+))\sbuild\//i],[[a,"Sony"],[o,"Xperia Phone"],[s,c]],[/\s(ouya)\s/i,/(nintendo)\s([wids3u]+)/i],[a,o,[s,"console"]],[/android.+;\s(shield)\sbuild/i],[o,[a,"Nvidia"],[s,"console"]],[/(playstation\s[34portablevi]+)/i],[o,[a,"Sony"],[s,"console"]],[/(sprint\s(\w+))/i],[[a,f.str,d.device.sprint.vendor],[o,f.str,d.device.sprint.model],[s,c]],[/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],[a,o,[s,p]],[/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i,/(zte)-(\w+)*/i,/(alcatel|geeksphone|huawei|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i],[a,[o,/_/g," "],[s,c]],[/(nexus\s9)/i],[o,[a,"HTC"],[s,p]],[/[\s\(;](xbox(?:\sone)?)[\s\);]/i],[o,[a,"Microsoft"],[s,"console"]],[/(kin\.[onetw]{3})/i],[[o,/\./g," "],[a,"Microsoft"],[s,c]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i,/mot[\s-]?(\w+)*/i,/(XT\d{3,4}) build\//i,/(nexus\s[6])/i],[o,[a,"Motorola"],[s,c]],[/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[o,[a,"Motorola"],[s,p]],[/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n8000|sgh-t8[56]9|nexus 10))/i,/((SM-T\w+))/i],[[a,"Samsung"],o,[s,p]],[/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-n900))/i,/(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i,/sec-((sgh\w+))/i],[[a,"Samsung"],o,[s,c]],[/(samsung);smarttv/i],[a,o,[s,"smarttv"]],[/\(dtv[\);].+(aquos)/i],[o,[a,"Sharp"],[s,"smarttv"]],[/sie-(\w+)*/i],[o,[a,"Siemens"],[s,c]],[/(maemo|nokia).*(n900|lumia\s\d+)/i,/(nokia)[\s_-]?([\w-]+)*/i],[[a,"Nokia"],o,[s,c]],[/android\s3\.[\s\w;-]{10}(a\d{3})/i],[o,[a,"Acer"],[s,p]],[/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],[[a,"LG"],o,[s,p]],[/(lg) netcast\.tv/i],[a,o,[s,"smarttv"]],[/(nexus\s[45])/i,/lg[e;\s\/-]+(\w+)*/i],[o,[a,"LG"],[s,c]],[/android.+(ideatab[a-z0-9\-\s]+)/i],[o,[a,"Lenovo"],[s,p]],[/linux;.+((jolla));/i],[a,o,[s,c]],[/((pebble))app\/[\d\.]+\s/i],[a,o,[s,"wearable"]],[/android.+;\s(glass)\s\d/i],[o,[a,"Google"],[s,"wearable"]],[/android.+(\w+)\s+build\/hm\1/i,/android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,/android.+(mi[\s\-_]*(?:one|one[\s_]plus)?[\s_]*(?:\d\w)?)\s+build/i],[[o,/_/g," "],[a,"Xiaomi"],[s,c]],[/\s(tablet)[;\/\s]/i,/\s(mobile)[;\/\s]/i],[[s,l.lowerize],a,o]],engine:[[/windows.+\sedge\/([\w\.]+)/i],[u,[i,"EdgeHTML"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[i,u],[/rv\:([\w\.]+).*(gecko)/i],[u,i]],os:[[/microsoft\s(windows)\s(vista|xp)/i],[i,u],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*|windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],[[i,f.str,d.os.windows.name],[u,f.str,d.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[i,"Windows"],[u,f.str,d.os.windows.version]],[/\((bb)(10);/i],[[i,"BlackBerry"],u],[/(blackberry)\w*\/?([\w\.]+)*/i,/(tizen)[\/\s]([\w\.]+)/i,/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i,/linux;.+(sailfish);/i],[i,u],[/(symbian\s?o?s?|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i],[[i,"Symbian"],u],[/\((series40);/i],[i],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[i,"Firefox OS"],u],[/(nintendo|playstation)\s([wids34portablevu]+)/i,/(mint)[\/\s\(]?(\w+)*/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?([\w\.-]+)*/i,/(hurd|linux)\s?([\w\.]+)*/i,/(gnu)\s?([\w\.]+)*/i],[[i,"Linux"],u],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[i,"Chromium OS"],u],[/(sunos)\s?([\w\.]+\d)*/i],[[i,"Solaris"],u],[/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i],[[i,"Linux"],u],[/(iphone)(?:.*os\s*([\w]+)*\slike\smac|;\sopera)/i],[[i,"iPhone"],[u,/_/g,"."]],[/(ipad)(?:.*os\s*([\w]+)*\slike\smac|;\sopera)/i],[[i,"iPad"],[u,/_/g,"."]],[/(ip[honead]+)(?:.*os\s([\w]+)*\slike\smac|;\sopera)/i],[[i,"iOS"],[u,/_/g,"."]],[/(mac\sos\sx)\s?([\w\s\.]+\w)*/i,/(macintosh|mac(?=_powerpc)\s)/i],[[i,"Mac"],[u,/_/g,"."]],[/((?:open)?solaris)[\/\s-]?([\w\.]+)*/i,/(haiku)\s(\w+)/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i,/(unix)\s?([\w\.]+)*/i],[i,u]]},g=g.VERSION="0.7.10",g.BROWSER={NAME:i,MAJOR:"major",VERSION:u},g.CPU={ARCHITECTURE:"architecture"},g.DEVICE={MODEL:o,VENDOR:a,TYPE:s,CONSOLE:"console",MOBILE:c,SMARTTV:"smarttv",TABLET:p,WEARABLE:"wearable",EMBEDDED:"embedded"},g.ENGINE={NAME:i,VERSION:u},g.OS={NAME:i,VERSION:u},e.exports&&(t=e.exports=g),t.UAParser=g;var v=n.jQuery||n.Zepto;if(void 0!==v){var y=new g;v.ua=y.getResult(),v.ua.get=v.ua.set=}("object"==typeof window?window:v)}),$n=Jn={apiEndpoint:"api.amplitude.com",batchEvents:!1,cookieExpiration:3650,cookieName:"amplitude_id",deviceIdFromUrlParam:!1,domain:"",eventUploadPeriodMillis:3e4,eventUploadThreshold:30,forceHttps:!0,includeGclid:!1,includeReferrer:!1,includeUtm:!1,language:{language:navigator&&(navigator.languages&&navigator.languages[0]||navigator.language||navigator.userLanguage)||void 0}.language,logLevel:"WARN",optOut:!1,platform:"Web",savedMaxCount:1e3,saveEvents:!0,saveParamsReferrerOncePerSession:!0,sessionTimeout:18e5,trackingOptions:{city:!0,country:!0,device_model:!0,dma:!0,ip_address:!0,language:!0,os_name:!0,os_version:!0,platform:!0,region:!0,version_name:!0},unsentKey:"amplitude_unsent",unsentIdentifyKey:"amplitude_unsent_identify",uploadBatchSize:100},Wn=function(e){this._instanceName=G.isEmptyString(e)?y.DEFAULT_INSTANCE:e.toLowerCase(),this._legacyStorageSuffix=this._instanceName===y.DEFAULT_INSTANCE?"":"_"+this._instanceName,this._unsentEvents=[],this._unsentIdentifys=[],this._ua=new Kn(navigator.userAgent).getResult(),this.options=Mn({},Jn),this.cookieStorage=(new ee).getStorage(),this._q=[],this._sending=!1,this._updateScheduled=!1,this._eventId=0,this._identifyId=0,this._lastEventTime=null,this._newSession=!1,this._sequenceNumber=0,this._sessionId=null,this._userAgent=navigator&&navigator.userAgent||null};Wn.prototype.Identify=te,Wn.prototype.Revenue=Bn,Wn.prototype.init=function(e,t,n,r){if("string"!==k(e)||G.isEmptyString(e))G.log.error("Invalid apiKey. Please re-initialize with a valid apiKey");else try{this.options.apiKey=e,this._storageSuffix="_"+e+this._legacyStorageSuffix,Yn(this.options,n),"string"===k(this.options.logLevel)&&G.setLogLevel(this.options.logLevel);var o=rr(this);if(this._apiPropertiesTrackingOptions=Object.keys(o).length>0?{tracking_options:o}:{},this.cookieStorage.options({expirationDays:this.options.cookieExpiration,domain:this.options.domain}),this.options.domain=this.cookieStorage.options().domain,this._instanceName===y.DEFAULT_INSTANCE&&Qn(this),Xn(this),this.options.deviceId="object"===k(n)&&"string"===k(n.deviceId)&&!G.isEmptyString(n.deviceId)&&n.deviceId||this.options.deviceIdFromUrlParam&&this._getDeviceIdFromUrlParam(this._getUrlParams())||this.options.deviceId||$n()+"R",this.options.userId="string"===k(t)&&!G.isEmptyString(t)&&t||"number"===k(t)&&t.toString()||this.options.userId||null,this.options.saveEvents){this._unsentEvents=this._loadSavedUnsentEvents(this.options.unsentKey),this._unsentIdentifys=this._loadSavedUnsentEvents(this.options.unsentIdentifyKey);for(var i=0;i<this._unsentEvents.length;i++){var s=this._unsentEvents[i].event_properties,a=this._unsentEvents[i].groups;this._unsentEvents[i].event_properties=G.validateProperties(s),this._unsentEvents[i].groups=G.validateGroups(a)}for(var u=0;u<this._unsentIdentifys.length;u++){var c=this._unsentIdentifys[u].user_properties,p=this._unsentIdentifys[u].groups;this._unsentIdentifys[u].user_properties=G.validateProperties(c),this._unsentIdentifys[u].groups=G.validateGroups(p)}}var l=(new Date).getTime();(!this._sessionId||!this._lastEventTime||l-this._lastEventTime>this.options.sessionTimeout)&&(this._newSession=!0,this._sessionId=l,this.options.saveParamsReferrerOncePerSession&&this._trackParamsAndReferrer()),this.options.saveParamsReferrerOncePerSession||this._trackParamsAndReferrer(),this._lastEventTime=l,Zn(this),this._sendEventsIfReady()}catch(e){G.log.error(e)}finally{"function"===k(r)&&r(this)}},Wn.prototype._trackParamsAndReferrer=var Yn=Wn.prototype.runQueuedFunctions=Wn.prototype._apiKeySet=Wn.prototype._loadSavedUnsentEvents=Wn.prototype._removeFromLegacyStorage=Wn.prototype._parseSavedUnsentEventsString=Wn.prototype.isNewSession=function(){return this._newSession},Wn.prototype.getSessionId=Wn.prototype.nextEventId=function(){return this._eventId++,this._eventId},Wn.prototype.nextIdentifyId=function(){return this._identifyId++,this._identifyId},Wn.prototype.nextSequenceNumber=Wn.prototype._unsentCount=Wn.prototype._sendEventsIfReady=Wn.prototype._getFromStorage=function(e,t){return e.getItem(t+this._storageSuffix)},Wn.prototype._getFromStorageLegacy=Wn.prototype._setInStorage=var Qn=Xn=Hn=Zn=Wn.prototype._initUtmData=function(e,t){e=e||this._getUrlParams();var n=function(e,t){var n=e?"?"+e.split(".").slice(-1)[0].replace(/\|/g,"&"):"",r=o=r("utm_source",t,"utmcsr",n),i=r("utm_medium",t,"utmcmd",n),s=r("utm_campaign",t,"utmccn",n),a=r("utm_term",t,"utmctr",n),u=r("utm_content",t,"utmcct",n),c={},p=return p("utm_source",o),p("utm_medium",i),p("utm_campaign",s),p("utm_term",a),p("utm_content",u),c}(t=t||this.cookieStorage.get("__utmz"),e);er(this,n)};var er=Wn.prototype._getReferrer=function(){return document.referrer},Wn.prototype._getUrlParams=Wn.prototype._saveGclid=function(e){var t=G.getQueryParam("gclid",e);if(!G.isEmptyString(t)){er(this,{gclid:t})}},Wn.prototype._getDeviceIdFromUrlParam=Wn.prototype._getReferringDomain=Wn.prototype._saveReferrer=Wn.prototype.saveEvents=Wn.prototype.setDomain=Wn.prototype.setUserId=Wn.prototype.setGroup=Wn.prototype.setOptOut=Wn.prototype.setSessionId=Wn.prototype.resetSessionId=Wn.prototype.regenerateDeviceId=Wn.prototype.setDeviceId=Wn.prototype.setUserProperties=Wn.prototype.clearUserProperties=var tr=Wn.prototype.identify=function(e,t){if(this._apiKeySet("identify()"))if("object"===k(e)&&e.hasOwnProperty("_q")&&(e=tr(new te,e)),e instanceof te){if(Object.keys(e.userPropertiesOperations).length>0)return this._logEvent(y.IDENTIFY_EVENT,null,null,e.userPropertiesOperations,null,null,null,t);"function"===k(t)&&t(0,"No request sent",{reason:"No user property operations"})}else G.log.error("Invalid identify input type. Expected Identify object but saw "+k(e)),"function"===k(t)&&t(0,"No request sent",{reason:"Invalid identify input type"});else"function"===k(t)&&t(0,"No request sent",{reason:"API key is not set"})},Wn.prototype.groupIdentify=function(e,t,n,r){if(this._apiKeySet("groupIdentify()"))if(G.validateInput(e,"group_type","string")&&!G.isEmptyString(e))if(null!==t&&void 0!==t)if("object"===k(n)&&n.hasOwnProperty("_q")&&(n=tr(new te,n)),n instanceof te){if(Object.keys(n.userPropertiesOperations).length>0)return this._logEvent(y.GROUP_IDENTIFY_EVENT,null,null,null,{},e,t),n.userPropertiesOperations,null,r);"function"===k(r)&&r(0,"No request sent",{reason:"No group property operations"})}else G.log.error("Invalid identify input type. Expected Identify object but saw "+k(n)),"function"===k(r)&&r(0,"No request sent",{reason:"Invalid identify input type"});else"function"===k(r)&&r(0,"No request sent",{reason:"Invalid group name"});else"function"===k(r)&&r(0,"No request sent",{reason:"Invalid group type"});else"function"===k(r)&&r(0,"No request sent",{reason:"API key is not set"})},Wn.prototype.setVersionName=Wn.prototype._logEvent=function(e,t,n,r,o,i,s,a){if(Xn(this),e)if(this.options.optOut)"function"===k(a)&&a(0,"No request sent",{reason:"optOut is set to true"});else try{var u;u=e===y.IDENTIFY_EVENT||e===y.GROUP_IDENTIFY_EVENT?this.nextIdentifyId():this.nextEventId();var c=this.nextSequenceNumber(),p="number"===k(s)?s:(new Date).getTime();(!this._sessionId||!this._lastEventTime||p-this._lastEventTime>this.options.sessionTimeout)&&(this._sessionId=p),this._lastEventTime=p,Zn(this),r=r||{};var l=Mn({},this._apiPropertiesTrackingOptions);n=Mn(l,n||{}),t=t||{},o=o||{},i=i||{};var f={device_id:this.options.deviceId,user_id:this.options.userId,timestamp:p,event_id:u,session_id:this._sessionId||-1,event_type:e,version_name:nr(this,"version_name")?this.options.versionName||null:null,platform:nr(this,"platform")?this.options.platform:null,os_name:nr(this,"os_name")?this._ua.browser.name||null:null,os_version:nr(this,"os_version")?this._ua.browser.major||null:null,device_model:nr(this,"device_model")?this._ua.os.name||null:null,language:nr(this,"language")?this.options.language:null,api_properties:n,event_properties:G.truncate(G.validateProperties(t)),user_properties:G.truncate(G.validateProperties(r)),uuid:$n(),library:{name:"amplitude-js",version:"4.5.2"},sequence_number:c,groups:G.truncate(G.validateGroups(o)),group_properties:G.truncate(G.validateProperties(i)),user_agent:this._userAgent};return e===y.IDENTIFY_EVENT||e===y.GROUP_IDENTIFY_EVENT?(this._unsentIdentifys.push(f),this._limitEventsQueued(this._unsentIdentifys)):(this._unsentEvents.push(f),this._limitEventsQueued(this._unsentEvents)),this.options.saveEvents&&this.saveEvents(),this._sendEventsIfReady(a)||"function"!==k(a)||a(0,"No request sent",{reason:"No events to send or upload queued"}),u}catch(e){G.log.error(e)}else"function"===k(a)&&a(0,"No request sent",{reason:"Missing eventType"})};var nr=rr=Wn.prototype._limitEventsQueued=Wn.prototype.logEvent=Wn.prototype.logEventWithTimestamp=Wn.prototype.logEventWithGroups=var or=Wn.prototype.logRevenueV2=Wn.prototype.logRevenue=Wn.prototype.removeEvents=var ir=Wn.prototype.sendEvents=function(e){if(this._apiKeySet("sendEvents()"))if(this.options.optOut)"function"===k(e)&&e(0,"No request sent",{reason:"optOut is set to true"});else if(0!==this._unsentCount())if(this._sending)"function"===k(e)&&e(0,"No request sent",{reason:"Request already in progress"});else{this._sending=!0;var t=(this.options.forceHttps?"https":"https:"===window.location.protocol?"https":"http")+"://"+this.options.apiEndpoint+"/",n=Math.min(this._unsentCount(),this.options.uploadBatchSize),r=this._mergeEventsAndIdentifys(n),o=r.maxEventId,i=r.maxIdentifyId,s=JSON.stringify(r.eventsToSend),a=(new Date).getTime(),u={client:this.options.apiKey,e:s,v:y.API_VERSION,upload_time:a,checksum:ne(y.API_VERSION+this.options.apiKey+s+a)},c=this;new Gn(t,u).send(}else"function"===k(e)&&e(0,"No request sent",{reason:"No events to send"});else"function"===k(e)&&e(0,"No request sent",{reason:"API key not set"})},Wn.prototype._mergeEventsAndIdentifys=Wn.prototype.setGlobalUserProperties=Wn.prototype.__VERSION__="4.5.2";var sr=xt(Object.keys,Object),ar=Object.prototype.hasOwnProperty,ur=cr=pr=Object.prototype.hasOwnProperty,lr=qn(,fr=fr.prototype.Identify=te,fr.prototype.Revenue=Bn,fr.prototype.getInstance=fr.prototype.init=fr.prototype.runQueuedFunctions=fr.prototype.isNewSession=function(){return this.getInstance().isNewSession()},fr.prototype.getSessionId=function(){return this.getInstance().getSessionId()},fr.prototype.nextEventId=function(){return this.getInstance().nextEventId()},fr.prototype.nextIdentifyId=function(){return this.getInstance().nextIdentifyId()},fr.prototype.nextSequenceNumber=fr.prototype.saveEvents=function(){this.getInstance().saveEvents()},fr.prototype.setDomain=function(e){this.getInstance().setDomain(e)},fr.prototype.setUserId=function(e){this.getInstance().setUserId(e)},fr.prototype.setGroup=function(e,t){this.getInstance().setGroup(e,t)},fr.prototype.setOptOut=function(e){this.getInstance().setOptOut(e)},fr.prototype.regenerateDeviceId=function(){this.getInstance().regenerateDeviceId()},fr.prototype.setDeviceId=function(e){this.getInstance().setDeviceId(e)},fr.prototype.setUserProperties=function(e){this.getInstance().setUserProperties(e)},fr.prototype.clearUserProperties=fr.prototype.identify=function(e,t){this.getInstance().identify(e,t)},fr.prototype.setVersionName=function(e){this.getInstance().setVersionName(e)},fr.prototype.logEvent=function(e,t,n){return this.getInstance().logEvent(e,t,n)},fr.prototype.logEventWithGroups=fr.prototype.logRevenueV2=fr.prototype.logRevenue=fr.prototype.removeEvents=fr.prototype.sendEvents=function(e){this.getInstance().sendEvents(e)},fr.prototype.setGlobalUserProperties=fr.prototype.__VERSION__="4.5.2";var dr=window.amplitude||{},hr=new fr;hr._q=dr._q||[];for(var gr in dr._iq)dr._iq.hasOwnProperty(gr)&&(hr.getInstance(gr)._q=dr._iq[gr]._q||[]);return hr});