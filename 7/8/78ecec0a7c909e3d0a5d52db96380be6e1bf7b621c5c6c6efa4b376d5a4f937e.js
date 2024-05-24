if (undefined === window.Kameleoon){(function(){!function(e,t){e.kbowser=t()}(this,(function(){return function(e){var t={};function r(i){if(t[i])return t[i].exports;var n=t[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(i,n,function(t){return e[t]}.bind(null,n));return i},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=90)}({17:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var i=r(18),n=function(){function e(){}return e.getFirstMatch=function(e,t){var r=t.match(e);return r&&r.length>0&&r[1]||""},e.getSecondMatch=function(e,t){var r=t.match(e);return r&&r.length>1&&r[2]||""},e.matchAndReturnConst=function(e,t,r){if(e.test(t))return r},e.getAndroidVersionName=function(e){var t=e.split(".").splice(0,2).map((function(e){return parseInt(e,10)||0}));if(t.push(0),!(1===t[0]&&t[1]<5))return 1===t[0]&&t[1]<6?"Cupcake":1===t[0]&&t[1]>=6?"Donut":2===t[0]&&t[1]<2?"Eclair":2===t[0]&&2===t[1]?"Froyo":2===t[0]&&t[1]>2?"Gingerbread":3===t[0]?"Honeycomb":4===t[0]&&t[1]<1?"Ice Cream Sandwich":4===t[0]&&t[1]<4?"Jelly Bean":4===t[0]&&t[1]>=4?"KitKat":5===t[0]?"Lollipop":6===t[0]?"Marshmallow":7===t[0]?"Nougat":8===t[0]?"Oreo":9===t[0]?"Pie":void 0},e.getVersionPrecision=function(e){return e.split(".").length},e.compareVersions=function(t,r,i){void 0===i&&(i=!1);var n=e.getVersionPrecision(t),s=e.getVersionPrecision(r),o=Math.max(n,s),a=0,u=e.map([t,r],(function(t){var r=o-e.getVersionPrecision(t),i=t+new Array(r+1).join(".0");return e.map(i.split("."),(function(e){return new Array(20-e.length).join("0")+e})).reverse()}));for(i&&(a=o-Math.min(n,s)),o-=1;o>=a;){if(u[0][o]>u[1][o])return 1;if(u[0][o]===u[1][o]){if(o===a)return 0;o-=1}else if(u[0][o]<u[1][o])return-1}},e.map=function(e,t){var r,i=[];if(Array.prototype.map)return Array.prototype.map.call(e,t);for(r=0;r<e.length;r+=1)i.push(t(e[r]));return i},e.find=function(e,t){var r,i;if(Array.prototype.find)return Array.prototype.find.call(e,t);for(r=0,i=e.length;r<i;r+=1){var n=e[r];if(t(n,r))return n}},e.assign=function(e){for(var t,r,i=e,n=arguments.length,s=new Array(n>1?n-1:0),o=1;o<n;o++)s[o-1]=arguments[o];if(Object.assign)return Object.assign.apply(Object,[e].concat(s));var a=function(){var e=s[t];"object"==typeof e&&null!==e&&Object.keys(e).forEach((function(t){i[t]=e[t]}))};for(t=0,r=s.length;t<r;t+=1)a();return e},e.getBrowserAlias=function(e){return i.BROWSER_ALIASES_MAP[e]},e.getBrowserTypeByAlias=function(e){return i.BROWSER_MAP[e]||""},e}();t.default=n,e.exports=t.default},18:function(e,t,r){"use strict";t.__esModule=!0,t.OS_MAP=t.PLATFORMS_MAP=t.BROWSER_MAP=t.BROWSER_ALIASES_MAP=void 0;t.BROWSER_ALIASES_MAP={"Amazon Silk":"amazon_silk","Android Browser":"android",Bada:"bada",BlackBerry:"blackberry",Chrome:"chrome",Chromium:"chromium",Electron:"electron",Epiphany:"epiphany",Firefox:"firefox",Focus:"focus",Generic:"generic","Google Search":"google_search",Googlebot:"googlebot","Internet Explorer":"ie","K-Meleon":"k_meleon",Maxthon:"maxthon","Microsoft Edge":"edge","MZ Browser":"mz","NAVER Whale Browser":"naver",Opera:"opera","Opera Coast":"opera_coast",PhantomJS:"phantomjs",Puffin:"puffin",QupZilla:"qupzilla",QQ:"qq",QQLite:"qqlite",Safari:"safari",Sailfish:"sailfish","Samsung Internet for Android":"samsung_internet",SeaMonkey:"seamonkey",Sleipnir:"sleipnir",Swing:"swing",Tizen:"tizen","UC Browser":"uc",Vivaldi:"vivaldi","WebOS Browser":"webos",WeChat:"wechat","Yandex Browser":"yandex"};t.BROWSER_MAP={amazon_silk:"Amazon Silk",android:"Android Browser",bada:"Bada",blackberry:"BlackBerry",chrome:"Chrome",chromium:"Chromium",electron:"Electron",epiphany:"Epiphany",firefox:"Firefox",focus:"Focus",generic:"Generic",googlebot:"Googlebot",google_search:"Google Search",ie:"Internet Explorer",k_meleon:"K-Meleon",maxthon:"Maxthon",edge:"Microsoft Edge",mz:"MZ Browser",naver:"NAVER Whale Browser",opera:"Opera",opera_coast:"Opera Coast",phantomjs:"PhantomJS",puffin:"Puffin",qupzilla:"QupZilla",qq:"QQ Browser",qqlite:"QQ Browser Lite",safari:"Safari",sailfish:"Sailfish",samsung_internet:"Samsung Internet for Android",seamonkey:"SeaMonkey",sleipnir:"Sleipnir",swing:"Swing",tizen:"Tizen",uc:"UC Browser",vivaldi:"Vivaldi",webos:"WebOS Browser",wechat:"WeChat",yandex:"Yandex Browser"};t.PLATFORMS_MAP={tablet:"tablet",mobile:"mobile",desktop:"desktop"};t.OS_MAP={WindowsPhone:"Windows Phone",Windows:"Windows",MacOS:"macOS",iOS:"iOS",Android:"Android",Linux:"Linux"}},90:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var i,n=(i=r(91))&&i.__esModule?i:{default:i},s=r(18);function o(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var a=function(){function e(){}var t,r,i;return e.getParser=function(e,t){if(void 0===t&&(t=!1),"string"!=typeof e)throw new Error("UserAgent should be a string");return new n.default(e,t)},e.parse=function(e){return new n.default(e).getResult()},t=e,i=[{key:"BROWSER_MAP",get:function(){return s.BROWSER_MAP}},{key:"OS_MAP",get:function(){return s.OS_MAP}},{key:"PLATFORMS_MAP",get:function(){return s.PLATFORMS_MAP}}],(r=null)&&o(t.prototype,r),i&&o(t,i),e}();t.default=a,e.exports=t.default},91:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var i=a(r(92)),n=a(r(93)),s=a(r(94)),o=a(r(17));function a(e){return e&&e.__esModule?e:{default:e}}var u=function(){function e(e,t){if(void 0===t&&(t=!1),null==e||""===e)throw new Error("UserAgent parameter can't be empty");this._ua=e,this.parsedResult={},!0!==t&&this.parse()}var t=e.prototype;return t.getUA=function(){return this._ua},t.test=function(e){return e.test(this._ua)},t.parseBrowser=function(){var e=this;this.parsedResult.browser={};var t=o.default.find(i.default,(function(t){if("function"==typeof t.test)return t.test(e);if(t.test instanceof Array)return t.test.some((function(t){return e.test(t)}));throw new Error("Browser's test function is not valid")}));return t&&(this.parsedResult.browser=t.describe(this.getUA())),this.parsedResult.browser},t.getBrowser=function(){return this.parsedResult.browser?this.parsedResult.browser:this.parseBrowser()},t.getBrowserName=function(e){return e?String(this.getBrowser().name).toLowerCase()||"":this.getBrowser().name||""},t.getBrowserVersion=function(){return this.getBrowser().version},t.getOS=function(){return this.parsedResult.os?this.parsedResult.os:this.parseOS()},t.parseOS=function(){var e=this;this.parsedResult.os={};var t=o.default.find(n.default,(function(t){if("function"==typeof t.test)return t.test(e);if(t.test instanceof Array)return t.test.some((function(t){return e.test(t)}));throw new Error("Browser's test function is not valid")}));return t&&(this.parsedResult.os=t.describe(this.getUA())),this.parsedResult.os},t.getOSName=function(e){var t=this.getOS().name;return e?String(t).toLowerCase()||"":t||""},t.getOSVersion=function(){return this.getOS().version},t.getPlatform=function(){return this.parsedResult.platform?this.parsedResult.platform:this.parsePlatform()},t.getPlatformType=function(e){void 0===e&&(e=!1);var t=this.getPlatform().type;return e?String(t).toLowerCase()||"":t||""},t.parsePlatform=function(){var e=this;this.parsedResult.platform={};var t=o.default.find(s.default,(function(t){if("function"==typeof t.test)return t.test(e);if(t.test instanceof Array)return t.test.some((function(t){return e.test(t)}));throw new Error("Browser's test function is not valid")}));return t&&(this.parsedResult.platform=t.describe(this.getUA())),this.parsedResult.platform},t.parse=function(){return this.parseBrowser(),this.parseOS(),this.parsePlatform(),this},t.getResult=function(){return o.default.assign({},this.parsedResult)},t.satisfies=function(e){var t=this,r={},i=0,n={},s=0;if(Object.keys(e).forEach((function(t){var o=e[t];"string"==typeof o?(n[t]=o,s+=1):"object"==typeof o&&(r[t]=o,i+=1)})),i>0){var a=Object.keys(r),u=o.default.find(a,(function(e){return t.isOS(e)}));if(u){var c=this.satisfies(r[u]);if(void 0!==c)return c}var d=o.default.find(a,(function(e){return t.isPlatform(e)}));if(d){var f=this.satisfies(r[d]);if(void 0!==f)return f}}if(s>0){var l=Object.keys(n),h=o.default.find(l,(function(e){return t.isBrowser(e,!0)}));if(void 0!==h)return this.compareVersion(n[h])}},t.isBrowser=function(e,t){void 0===t&&(t=!1);var r=this.getBrowserName().toLowerCase(),i=e.toLowerCase(),n=o.default.getBrowserTypeByAlias(i);return t&&n&&(i=n.toLowerCase()),i===r},t.compareVersion=function(e){var t=[0],r=e,i=!1,n=this.getBrowserVersion();if("string"==typeof n)return">"===e[0]||"<"===e[0]?(r=e.substr(1),"="===e[1]?(i=!0,r=e.substr(2)):t=[],">"===e[0]?t.push(1):t.push(-1)):"="===e[0]?r=e.substr(1):"~"===e[0]&&(i=!0,r=e.substr(1)),t.indexOf(o.default.compareVersions(n,r,i))>-1},t.isOS=function(e){return this.getOSName(!0)===String(e).toLowerCase()},t.isPlatform=function(e){return this.getPlatformType(!0)===String(e).toLowerCase()},t.is=function(e){return this.isBrowser(e)||this.isOS(e)||this.isPlatform(e)},t.some=function(e){var t=this;return void 0===e&&(e=[]),e.some((function(e){return t.is(e)}))},e}();t.default=u,e.exports=t.default},92:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var i,n=(i=r(17))&&i.__esModule?i:{default:i};var s=/version\/(\d+(\.?_?\d+)+)/i,o=[{test:[/googlebot/i],describe:function(e){var t={name:"Googlebot"},r=n.default.getFirstMatch(/googlebot\/(\d+(\.\d+))/i,e)||n.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/opera/i],describe:function(e){var t={name:"Opera"},r=n.default.getFirstMatch(s,e)||n.default.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/opr\/|opios/i],describe:function(e){var t={name:"Opera"},r=n.default.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i,e)||n.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/SamsungBrowser/i],describe:function(e){var t={name:"Samsung Internet for Android"},r=n.default.getFirstMatch(s,e)||n.default.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/Whale/i],describe:function(e){var t={name:"NAVER Whale Browser"},r=n.default.getFirstMatch(s,e)||n.default.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/MZBrowser/i],describe:function(e){var t={name:"MZ Browser"},r=n.default.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i,e)||n.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/focus/i],describe:function(e){var t={name:"Focus"},r=n.default.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i,e)||n.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/swing/i],describe:function(e){var t={name:"Swing"},r=n.default.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i,e)||n.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/coast/i],describe:function(e){var t={name:"Opera Coast"},r=n.default.getFirstMatch(s,e)||n.default.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/yabrowser/i],describe:function(e){var t={name:"Yandex Browser"},r=n.default.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i,e)||n.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/ucbrowser/i],describe:function(e){var t={name:"UC Browser"},r=n.default.getFirstMatch(s,e)||n.default.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/Maxthon|mxios/i],describe:function(e){var t={name:"Maxthon"},r=n.default.getFirstMatch(s,e)||n.default.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/epiphany/i],describe:function(e){var t={name:"Epiphany"},r=n.default.getFirstMatch(s,e)||n.default.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/puffin/i],describe:function(e){var t={name:"Puffin"},r=n.default.getFirstMatch(s,e)||n.default.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/sleipnir/i],describe:function(e){var t={name:"Sleipnir"},r=n.default.getFirstMatch(s,e)||n.default.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/k-meleon/i],describe:function(e){var t={name:"K-Meleon"},r=n.default.getFirstMatch(s,e)||n.default.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/micromessenger/i],describe:function(e){var t={name:"WeChat"},r=n.default.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i,e)||n.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/qqbrowser/i],describe:function(e){var t={name:/qqbrowserlite/i.test(e)?"QQ Browser Lite":"QQ Browser"},r=n.default.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i,e)||n.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/msie|trident/i],describe:function(e){var t={name:"Internet Explorer"},r=n.default.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/\sedg\//i],describe:function(e){var t={name:"Microsoft Edge"},r=n.default.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/edg([ea]|ios)/i],describe:function(e){var t={name:"Microsoft Edge"},r=n.default.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/vivaldi/i],describe:function(e){var t={name:"Vivaldi"},r=n.default.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/seamonkey/i],describe:function(e){var t={name:"SeaMonkey"},r=n.default.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/sailfish/i],describe:function(e){var t={name:"Sailfish"},r=n.default.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i,e);return r&&(t.version=r),t}},{test:[/silk/i],describe:function(e){var t={name:"Amazon Silk"},r=n.default.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/phantom/i],describe:function(e){var t={name:"PhantomJS"},r=n.default.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/slimerjs/i],describe:function(e){var t={name:"SlimerJS"},r=n.default.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe:function(e){var t={name:"BlackBerry"},r=n.default.getFirstMatch(s,e)||n.default.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/(web|hpw)[o0]s/i],describe:function(e){var t={name:"WebOS Browser"},r=n.default.getFirstMatch(s,e)||n.default.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/bada/i],describe:function(e){var t={name:"Bada"},r=n.default.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/tizen/i],describe:function(e){var t={name:"Tizen"},r=n.default.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i,e)||n.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/qupzilla/i],describe:function(e){var t={name:"QupZilla"},r=n.default.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i,e)||n.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/firefox|iceweasel|fxios/i],describe:function(e){var t={name:"Firefox"},r=n.default.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/electron/i],describe:function(e){var t={name:"Electron"},r=n.default.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/chromium/i],describe:function(e){var t={name:"Chromium"},r=n.default.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i,e)||n.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/chrome|crios|crmo/i],describe:function(e){var t={name:"Chrome"},r=n.default.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/GSA/i],describe:function(e){var t={name:"Google Search"},r=n.default.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:function(e){var t=!e.test(/like android/i),r=e.test(/android/i);return t&&r},describe:function(e){var t={name:"Android Browser"},r=n.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/safari|applewebkit/i],describe:function(e){var t={name:"Safari"},r=n.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/.*/i],describe:function(e){var t=-1!==e.search("\\(")?/^(.*)\/(.*)[ \t]\((.*)/:/^(.*)\/(.*) /;return{name:n.default.getFirstMatch(t,e),version:n.default.getSecondMatch(t,e)}}}];t.default=o,e.exports=t.default},93:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var i,n=(i=r(17))&&i.__esModule?i:{default:i},s=r(18);var o=[{test:[/windows phone/i],describe:function(e){return{name:s.OS_MAP.WindowsPhone}}},{test:[/windows /i],describe:function(e){return{name:s.OS_MAP.Windows}}},{test:[/Macintosh(.*?) FxiOS(.*?) Version\//],describe:function(e){return{name:s.OS_MAP.iOS}}},{test:[/macintosh/i],describe:function(e){return{name:s.OS_MAP.MacOS}}},{test:[/(ipod|iphone|ipad)/i],describe:function(e){return{name:s.OS_MAP.iOS}}},{test:function(e){var t=!e.test(/like android/i),r=e.test(/android/i);return t&&r},describe:function(e){var t=n.default.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i,e),r=n.default.getAndroidVersionName(t),i={name:s.OS_MAP.Android,version:t};return r&&(i.versionName=r),i}},{test:[/linux/i],describe:function(){return{name:s.OS_MAP.Linux}}}];t.default=o,e.exports=t.default},94:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var i,n=(i=r(17))&&i.__esModule?i:{default:i},s=r(18);var o=[{test:[/googlebot/i],describe:function(){return{type:"bot"}}},{test:[/huawei/i],describe:function(e){return{type:s.PLATFORMS_MAP.mobile}}},{test:[/nexus\s*(?:7|8|9|10).*/i],describe:function(){return{type:s.PLATFORMS_MAP.tablet}}},{test:[/ipad/i],describe:function(){return{type:s.PLATFORMS_MAP.tablet}}},{test:[/Macintosh(.*?) FxiOS(.*?) Version\//],describe:function(){return{type:s.PLATFORMS_MAP.tablet}}},{test:[/kftt build/i],describe:function(){return{type:s.PLATFORMS_MAP.tablet}}},{test:[/silk/i],describe:function(){return{type:s.PLATFORMS_MAP.tablet}}},{test:[/tablet(?! pc)/i],describe:function(){return{type:s.PLATFORMS_MAP.tablet}}},{test:function(e){var t=e.test(/ipod|iphone/i),r=e.test(/like (ipod|iphone)/i);return t&&!r},describe:function(e){return{type:s.PLATFORMS_MAP.mobile}}},{test:[/nexus\s*[0-6].*/i,/galaxy nexus/i],describe:function(){return{type:s.PLATFORMS_MAP.mobile}}},{test:[/[^-]mobi/i],describe:function(){return{type:s.PLATFORMS_MAP.mobile}}},{test:function(e){return"blackberry"===e.getBrowserName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.mobile}}},{test:function(e){return"bada"===e.getBrowserName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.mobile}}},{test:function(e){return"windows phone"===e.getBrowserName()},describe:function(){return{type:s.PLATFORMS_MAP.mobile}}},{test:function(e){return"android"===e.getOSName(!0)&&Number(String(e.getOSVersion()).split(".")[0])>=3},describe:function(){return{type:s.PLATFORMS_MAP.tablet}}},{test:function(e){return"android"===e.getOSName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.mobile}}},{test:function(e){return"macos"===e.getOSName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.desktop}}},{test:function(e){return"windows"===e.getOSName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.desktop}}},{test:function(e){return"linux"===e.getOSName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.desktop}}}];t.default=o,e.exports=t.default}})}));class APIConfiguration{constructor(e){this.generationTime=e.scriptProduceTime;this.goals=e.goals.map((e=>new APIGoal(e)));this.singlePageSupport=Kameleoon.Internals.runtime?Kameleoon.Internals.runtime.singlePageSupport:e.singlePageSupport;this.siteCode=e.siteCode}}class APIAction{constructor(i,t){this.dateLaunched=i.dateStatusModified;this.dateModified=i.dateModified;this.id=i.id;this.name=i.name;this.targetSegment=new APISegment(i.targetingSegment);this.active=i.targeting&&!i.disabled&&i.displayedVariation&&null!=i.displayedVariation.id;this.triggered=i.targeting||!1;this.goals=Kameleoon.Internals.configuration.goals.filter((t=>-1!=(i.goals||[]).indexOf(t.id))).map((i=>new APIGoal(i)));this.untrackedTrafficReallocationTime=i.untrackedRespoolTime||null;let e=i=>{let t=Kameleoon.Internals.runtime.variations.filter((t=>t.id==i));return t&&t[0]};const a=Kameleoon.Internals.runtime.Visitor.currentVisit;if("experiments"==t){this.mainGoal=i.kameleoonTracking&&i.kameleoonTracking.mainGoalId?new APIGoal(Kameleoon.Internals.configuration.goals.filter((t=>t.id==i.kameleoonTracking.mainGoalId))[0]):null;let t=e(i.registeredVariationId);this.associatedVariation=t?new APIVariation(t,i):null;this.trafficDeviation={};this.variations=[];this.redirectProcessed=i.redirectProcessed||!1;for(let t in i.deviation){this.trafficDeviation[t]=100*i.deviation[t];this.variations.push(new APIVariation(e(parseInt(t)),i))}let n=Kameleoon.Internals.runtime.storedData.obtainField("Gatherer","experimentsTriggered",{});this.triggeredInVisit=n[this.id]?!0:!1;this.activatedInVisit=a.ExperimentActivations[this.id]?!0:!1}else{this.mainGoal=new APIGoal(Kameleoon.Internals.configuration.goals.filter((t=>t.id==i.mainGoalId))[0]);this.associatedVariation=new APIVariation(e(i.associatedVariation.id),i);let t=Kameleoon.Internals.runtime.storedData.obtainField("Gatherer","personalizationsTriggered",{});this.triggeredInVisit=t[this.id]?!0:!1;this.activatedInVisit=this.triggeredInVisit&&a.PersonalizationActivations[this.id]?!0:!1}}}class APIActionActivation{constructor(i,t,n){let a;let e;if("experiment"==i){this.times=n.ExperimentActivations[t].times;this.experimentID=t;a=Kameleoon.Internals.runtime.Campaigns.obtainCampaign(t,"experiment");e=n.ExperimentActivations[t].associatedVariationID;this.experiment=a?new APIAction(a,"experiments"):null}else{this.times=n.PersonalizationActivations[t].times;this.personalizationID=t;a=Kameleoon.Internals.runtime.Campaigns.obtainCampaign(t,"personalization");e=n.PersonalizationActivations[t].associatedVariationID;this.personalization=a?new APIAction(a,"personalizations"):null}this.associatedVariationID=e;let o=Kameleoon.Internals.configuration.variations.filter((i=>i.id==e))[0];this.associatedVariation=o?new APIVariation(o,a):null}}class APIActions{constructor(e){let i=e;let t=()=>{if(Kameleoon.Internals.runtime)return Kameleoon.Internals.runtime.Campaigns.obtainCampaignsList(i);else return[]};this.getAll=()=>t().map((e=>new APIAction(e,i)));this.getActive=()=>t().filter((e=>!0===e.targeting&&1!=e.disabled&&e.displayedVariation&&null!=e.displayedVariation.id)).map((e=>new APIAction(e,i)));this.getTriggeredInVisit=()=>t().map((e=>new APIAction(e,i))).filter((e=>e.triggeredInVisit));this.getActivatedInVisit=()=>t().map((e=>new APIAction(e,i))).filter((e=>e.activatedInVisit));let n=(e,n)=>{let a=t().filter((i=>i[e]==n))[0];if(a)return new APIAction(a,i);return null};this.getById=e=>n("id",e);this.getByName=e=>n("name",e);if("experiments"==i){this.assignVariation=(e,i,n)=>{let a=t().filter((i=>i.id==e))[0];if(a)if(void 0===a.registeredVariationId||n){a.registeredVariationId=i;a.assignmentTime=(new Date).getTime();a.writeLocalData()}};this.block=(e,i=!1)=>{let t=Kameleoon.Internals.runtime.Campaigns.obtainCampaign(e,"experiment");if(t){if(i){let i=Kameleoon.Internals.runtime.storedData.obtainField("Runtime","blockedExperiments",[]);i.push(e);Kameleoon.Internals.runtime.storedData.saveField("Runtime","blockedExperiments",i)}t.blocked=!0}};this.trigger=(e,i)=>{let t=Kameleoon.Internals.runtime.Campaigns.obtainCampaign(e,"experiment");if(t)if(i){if(t){t.performVariationAssignment(!0);Kameleoon.Analyst.Actions.performActionsTracking([t])}}else{t.trigger();Kameleoon.Analyst.Actions.process([t])}};this.triggerExperiment=(e,i)=>{this.trigger(e,i)}}else{this.block=(e,i=!1)=>{let t=Kameleoon.Internals.runtime.Campaigns.obtainCampaign(e,"personalization");if(t){if(i){let i=Kameleoon.Internals.runtime.storedData.obtainField("Runtime","blockedPersonalizations",[]);i.push(e);Kameleoon.Internals.runtime.storedData.saveField("Runtime","blockedPersonalizations",i)}t.blocked=!0}};this.disable=e=>{let i=Kameleoon.Internals.runtime.Campaigns.obtainCampaign(e,"personalization");if(i)i.disabled=!0};this.trigger=(e,i)=>{let t=Kameleoon.Internals.runtime.Campaigns.obtainCampaign(e,"personalization");if(t){t.exposition=!0;if(i){if(t)Kameleoon.Analyst.Actions.performActionsTracking([t])}else{t.trigger();Kameleoon.Analyst.Actions.process([t])}}}}}}class APIGoal{constructor(t){if(t){this.id=t.id;this.name=t.name;this.type=t.type}}}class APISegment{constructor(i){if(i){this.id=i.id;this.name=i.name}}}class APITemplate{constructor(s,t){this.name=s;this.customFields=t}}class APIVariation{constructor(e,t={}){if(e){this.id=e.id;this.name=e.name;if(t.experimentAction){var i=t.variations.filter((t=>t.id==e.id))[0];this.reallocationTime=i?i.respoolTime:null}else this.reallocationTime=null;this.instantiatedTemplate=e.widgetTemplateInputData?new APITemplate(e.widgetTemplateName,e.widgetTemplateInputData):null}}}class APIVisit{constructor(t){this.pageViews=t.obtainPageNumberViews();this.duration=t.lastActivityDate-t.startDate;this.locale=Kameleoon.Utils.getLocale();this.startDate=t.startDate;this.index=t.visitNumber;this.currentProduct=null;this.products=[];this.clicks=t.clicks||0;this.pageURLsVisited=t.pageURLsVisited;this.activatedSegments=t.activatedSegments;this.lastActivityDate=t.lastActivityDate;this.activatedExperiments=Object.keys(t.ExperimentActivations).map((e=>new APIActionActivation("experiment",parseInt(e),t)));this.activatedPersonalizations=Object.keys(t.PersonalizationActivations).map((e=>new APIActionActivation("personalization",parseInt(e),t)));if(t==Kameleoon.Internals.runtime.Visitor.currentVisit){this.device=new Device;this.geolocation=t.Geolocation;if(Kameleoon.Internals.runtime.mentalistRun){Object.defineProperty(this,"conversionPredictions",{enumerable:!0,get:function(){return Kameleoon.Mentalist.computeGoalConversionProbabilityPredictionByGoalId(null)}});Object.defineProperty(this,"initialConversionPredictions",{enumerable:!0,get:function(){return Kameleoon.Mentalist.computeGoalConversionProbabilityPredictionByGoalId(null)}})}}this.conversions=Kameleoon.Utils.clone(t.conversions);this.customData={};let e=Kameleoon.Internals.runtime.Gatherer.configuration.customData;for(let i in t.customData){let n=e[i];if(null!=n)this.customData[n.name]=Kameleoon.Gatherer.CustomData.obtainParsedValue(i,t.customData[i])}let i="<OTHER / UNKNOWN>";let n=[];let a=Kameleoon.Internals.runtime.storedData.obtainField("Runtime","firstReferrersIndices",[]);for(let t=0,e=a.length;t<e;t++){let e=a[t];let s;if(0==e)s="<RESTART>";else{let t=Kameleoon.Internals.runtime.Gatherer.configuration.referrers[e-1];s=null==t?i:t.name}n.push(s)}this.acquisitionChannel=n[0];this.landingPageURL=t.landingPageURL;this.weather=new APIWeather(t)}}class APIVisitor{constructor(){this.getCustomDataVisitor=()=>{let t={};let i=Kameleoon.Internals.runtime.Visitor.customData;let e=Kameleoon.Internals.runtime.Gatherer.configuration.customData;for(let s in i)t[e[s].name]=Kameleoon.Gatherer.CustomData.obtainParsedValue(s,i[s]);return t};this.setVisitorCode=t=>{Kameleoon.Internals.runtime.Visitor.setVisitorCode(t)};this.numberOfVisits=Kameleoon.Internals.runtime.Visitor.totalVisits;this.timeStartedEldestVisit=Kameleoon.Internals.runtime.Visitor.timeStartedEldestVisit;this.customData=this.getCustomDataVisitor();this.personalizationsActive=Kameleoon.Internals.runtime.personalizationsActive;this.code=Kameleoon.Internals.runtime.Visitor.currentVisit.visitorCode;this.currentVisit=new APIVisit(Kameleoon.Internals.runtime.Visitor.currentVisit);this.visits=Kameleoon.Internals.runtime.Visitor.visits.map((t=>new APIVisit(t)));this.previousVisit=Kameleoon.Internals.runtime.Visitor.visits.length>1?new APIVisit(Kameleoon.Internals.runtime.Visitor.visits.slice(-2)[0]):null;this.experimentLegalConsent=Kameleoon.Internals.runtime.Consent.AB_TESTING;this.personalizationLegalConsent=Kameleoon.Internals.runtime.Consent.PERSONALIZATION;this.firstVisitStartDate=Kameleoon.Internals.runtime.Visitor.timeStartedEldestVisit}}class APIWeather{constructor(i){let s=i.Weather;this.temperature=s.temperature;this.humidity=s.humidity;this.pressure=s.pressure;this.windSpeed=s.windSpeed;this.cloudiness=s.cloudiness;this.sunrise=s.sunrise;this.sunset=s.sunset;this.conditionCode=s.conditionCode;this.conditionDescription=s.conditionDescription}}class Analyst{constructor(){this.initialize=e=>{this.isTimeout=!1;if(window.kameleoonDisplayPage){if(null==Kameleoon.Internals.configuration.behaviorWhenTimeout||document.getElementById("kameleoonLoadingStyleSheet"))window.clearTimeout(window.kameleoonDisplayPageTimeOut);else if(null==window.kameleoonEndLoadTime)this.isTimeout=!0;try{window.kameleoonDisplayPage(!0)}catch(e){}window.kameleoonDisplayPage=null}window.kameleoonEndLoadTime=(new Date).getTime();e()};this.load=()=>{Kameleoon.Utils.sendKameleoonCustomEvent("Internals",{type:"load",time:(new Date).getTime()});Kameleoon.Utils.runProtectedFunction((function(){if(window.kameleoonQueue)window.kameleoonQueue=new CommandQueue(window.kameleoonQueue,"IMMEDIATE");if(window.kameleoonAddCustomAction){Kameleoon.Utils.runProtectedScript(window.kameleoonAddCustomAction,"kameleoonAddCustomActionScript.js");delete window.kameleoonAddCustomAction}if(window.kameleoonAddCustomGlobalScript){Kameleoon.Internals.configuration.globalScript=window.kameleoonAddCustomGlobalScript;delete window.kameleoonAddCustomGlobalScript}window.addEventListener("error",(e=>{if(e.error&&e.error.stack&&e.error.stack.match(/kameleoon/gi)){Kameleoon.Utils.Logger.send(e.error.stack,"kameleoon.js");return!1}}));Kameleoon.Analyst.initialize((()=>{const e=Kameleoon.Analyst.checkBlockingElements();const o=window.kameleoonEndLoadTime-(window.kameleoonStartLoadTime||window.kameleoonEndLoadTime)-25;Kameleoon.Utils.sendKameleoonCustomEvent.call(window,"Loaded",{timeout:"TIMEOUT"==e,loadTime:o});if(Kameleoon.Internals.runtime)Kameleoon.Internals.runtime.clear();if(0==e.length){Kameleoon.Internals.runtime=new Runtime;Kameleoon.Analyst.loadKameleoonFull((()=>{Kameleoon.Internals.runtime.run()}))}else{Kameleoon.Utils.sendKameleoonCustomEvent("Internals",{type:"abort",blockingReason:e});Kameleoon.Utils.sendKameleoonCustomEvent.call(window,"Aborted",{reason:e})}}))}))};this.loadKameleoonFull=(e,o)=>{if(!Kameleoon.Internals.runtime.kameleoonFull&&(this.kameleoonFullNeeded()||o)){const o=o=>{Kameleoon.Utils.runProtectedScript(o+"\n;"+"("+e.toString()+")()","kameleoonFull.js")};const n=sessionStorage.getItem("kameleoonFullApplicationCode");if(null!=n)o(n);else Kameleoon.Utils.performBeaconServerCall("https://"+Kameleoon.Internals.configuration.STATIC_HOST_NAME+"."+Kameleoon.Internals.configuration.DOMAIN+"/kameleoon-full.js?cache="+Kameleoon.Utils.obtainRandomString(16),(e=>{if(void 0===e.readyState||4==e.readyState&&200==e.status){sessionStorage.setItem("kameleoonFullApplicationCode",e.responseText);o(e.responseText)}}))}else e()};this.Actions=new Actions;this.Goals=new Goals}checkBlockingElements(){const e=new Device;if("Internet Explorer"==e.browser&&e.browserVersion<=(Kameleoon.Internals.configuration.wideEngineSupport?10:12)||"Opera"==e.browser&&e.browserVersion<13)return"BROWSER";let o=!1;try{if(window.localStorage||window.sessionStorage){localStorage.getItem("kameleoonPrivateMode");sessionStorage.getItem("kameleoonPrivateMode")}else o=!0}catch(e){o=!0}if(o)return"STORAGE";if(this.isTimeout){switch(Kameleoon.Internals.configuration.behaviorWhenTimeout){case"VISIT":sessionStorage.setItem("kameleoonDisabledForVisit","true");break;default:break}return"TIMEOUT"}document.removeEventListener("visibilitychange",Kameleoon.Analyst.load);if("prerender"==document.visibilityState){document.addEventListener("visibilitychange",Kameleoon.Analyst.load);return"PRERENDER"}if(-1!=location.href.indexOf("kameleoonDisabled"))return"PARAMETER";if(Kameleoon.Internals.configuration.kameleoonDisabled)return"DISABLED";return""}kameleoonFullNeeded(){if(sessionStorage.getItem("kameleoonFullApplicationCode")||sessionStorage.getItem("kameleoonLightExtension")||Kameleoon.Internals.runtime.parameters.kameleoon||Kameleoon.Internals.runtime.parameters.kameleoonVariationId||Kameleoon.Internals.runtime.parameters["kameleoon-simulation"]||Kameleoon.Internals.runtime.parameters.kameleoonLightExtension||Kameleoon.Internals.runtime.simulationMode||Kameleoon.Utils.readLocalData("kameleoonSimulationParameters","COOKIE"))return!0;return!1}loadSimulation(){if(!Kameleoon.Internals.runtime.parameters.kameleoonVariationId)Object.keys(localStorage).forEach((e=>{if(-1!==e.indexOf("kameleoonVariation-"))localStorage.removeItem(e)}))}loadVariationFromServer(e,o){}processSimulations(){}}Analyst.CODE_ALPHABET="abcdefghijklmnopqrstuvwxyz0123456789";class API{constructor(){this.Core={enableLegalConsent:function(e="BOTH"){Kameleoon.Internals.runtime.Consent.enable(e)},disableLegalConsent:function(e="BOTH"){Kameleoon.Internals.runtime.Consent.disable(e)},enableSinglePageSupport:function(){Kameleoon.Internals.runtime.enableSinglePageSupport.apply(Kameleoon.Internals.runtime,arguments)},enableDynamicRefresh:function(){Kameleoon.Internals.runtime.enableDynamicRefresh.apply(Kameleoon.Internals.runtime,arguments)},getConfiguration:()=>new APIConfiguration(Kameleoon.Internals.configuration),load:function(){Kameleoon.Analyst.load.apply(Kameleoon.Analyst,arguments)},processRedirect:function(){Kameleoon.Utils.processRedirect.apply(Kameleoon.Utils,arguments)},runWhenConditionTrue:(e,n,t=200)=>{if(e())Kameleoon.Utils.runProtectedFunction(n,!0);else{const o=Kameleoon.Utils.setTimeout((()=>{Kameleoon.Utils.clearTimeout(o);this.Core.runWhenConditionTrue.apply(Kameleoon,[e,n,t])}),t,!0)}},runWhenElementPresent:(e,n,t,o)=>{const a=null==t;const r=Kameleoon.Utils.querySelectorAll(e);const i=n;if(o)n=n=>{KMutationObserver.setMutationObserverSPA();const t=`data-kameleoon-dynamic-class-${Kameleoon.Utils.obtainRandomString(4)}`;const o=e=>{e.forEach((e=>e.setAttribute(t,"true")))};o(n);i(n);Kameleoon.Internals.runtime.waitingDynamicElements.push({selector:e,attribute:t,callback:e=>{o(e);i(e)}})};if(!Kameleoon.Internals.runtime.querySelectorAllHasError)if(0<r.length)Kameleoon.Utils.runProtectedFunction((()=>{n(r)}),!0);else if(Kameleoon.Internals.runtime.cantUseMutationObserver||!a){const n=Kameleoon.Utils.setTimeout((()=>{Kameleoon.Utils.clearTimeout(n);this.Core.runWhenElementPresent.apply(Kameleoon,[e,i,t||200,o])}),t||200,!0)}else Kameleoon.Internals.runtime.waitingElementPresentObjects.push({selector:e,callback:n,useAntiFlicker:a})}};this.Goals={cancelConversion:(e,n)=>{try{this.Goals.processConversions(e,n,!0)}catch(e){}},processConversion:(e,n)=>{try{this.Goals.processConversions(e,n,!1)}catch(e){}},processConversions:(e,n,t)=>{Kameleoon.Internals.runtime.goals.forEach((o=>{if(e==o.id||e==o.name)Kameleoon.Analyst.Goals.processConversions([{goal:o,revenue:n,negative:t}])}))}};this.Data={readLocalData:e=>Kameleoon.Internals.runtime.storedData.Vars[e]?Kameleoon.Internals.runtime.storedData.Vars[e].value:null,resetCustomData:e=>{this.Data.setCustomData(e,[],!0)},retrieveDataFromRemoteSource:(e,n)=>{const t={siteCode:Kameleoon.Internals.configuration.siteCode};let o="map";if(e instanceof Array){o="maps";t.keys=encodeURIComponent(JSON.stringify(e))}else t.key=encodeURIComponent(e.toString());Kameleoon.Utils.performBeaconServerCall(Kameleoon.Utils.addParameterToURL(`${Kameleoon.Internals.runtime.DATA_URL}/map/${o}`,Kameleoon.Utils.parseObjectToUrlParams(t),!1),(e=>{if(4==e.readyState){let t={};if(200==e.status)t=JSON.parse(e.responseText);n&&n(t)}}),null)},setCustomData:(e,n,t=!1)=>{if(Kameleoon.Internals.runtime&&Kameleoon.Internals.runtime.gathererRun){let o=null;for(const n in Kameleoon.Internals.runtime.Gatherer.configuration.customData){const t=Kameleoon.Internals.runtime.Gatherer.configuration.customData[n];if(null!=t&&t.name==e){o=parseInt(n);break}}if(null!=o)Kameleoon.Gatherer.CustomData.register(o,{value:n,overwrite:t})}},writeLocalData:(e,n,t)=>{Kameleoon.Internals.runtime.storedData.Vars[e]={value:n,date:(new Date).getTime()+24*60*60*1e3*(t?30:1/24)}},performRemoteSynchronization:(e,n,t)=>{}};this.Events={triggered:[],trigger:e=>{this.Core.runWhenConditionTrue((()=>!0===Kameleoon.Internals.runtime.setupAfterLocalDataRetrieval),(()=>{this.Events.triggered.push(e);if(Kameleoon.Analyst.Actions)Kameleoon.Analyst.Actions.processAllActions();if(Kameleoon.Targeting)Kameleoon.Targeting.processAllTargetingSegments();}),100)}};this.Tracking={processOmniture:e=>{Kameleoon.Tracking.processOmniture&&Kameleoon.Tracking.processOmniture(e)}};this.Experiments=new APIActions("experiments");this.Personalizations=new APIActions("personalizations");this.Segments={getAll:()=>Kameleoon.Internals.runtime.targetingSegments.map((e=>new APISegment(e))),getById:e=>{const n=Kameleoon.Internals.runtime.targetingSegments.filter((n=>n.id==e))[0];return n?new APISegment(n):null},getByName:e=>{const n=Kameleoon.Internals.runtime.targetingSegments.filter((n=>n.name==e))[0];return n?new APISegment(n):null},reevaluate:e=>{let n=-1;for(let t=0;t<(Kameleoon.Internals.runtime.targetingSegments||[]).length;t++){const o=Kameleoon.Internals.runtime.targetingSegments[t];if(o.id==e){n=t;break}}if(n>-1){let t;if(Kameleoon.Internals.runtime.simulationMode)t=Kameleoon.Internals.runtime.simulationModeData.targetingSegments.filter((n=>n.id==e))[0];else t=Kameleoon.Internals.configuration.targetingSegments.filter((n=>n.id==e))[0];if(t){Kameleoon.Internals.runtime.targetingSegments.splice(n,1);const o=Kameleoon.Utils.clone(t);Kameleoon.Internals.runtime.targetingSegments.push(o);Kameleoon.Targeting.checkTargetingSegmentsTargeting([o]);Kameleoon.Internals.runtime.Campaigns.obtainCampaignsList("experiments").concat(Kameleoon.Internals.runtime.Campaigns.obtainCampaignsList("personalizations")).forEach((n=>{n.setTargetingSegment(e);if(n.targetingSegmentId==e)n.forceTargeting=!1}));Kameleoon.Analyst.Actions.processAllActions();return o.targeting}}return;},trigger:e=>{const n=Kameleoon.Internals.runtime.targetingSegments.filter((n=>n.id==e));if(n.length>0){n[0].targeting=!0;Kameleoon.Internals.runtime.Campaigns.obtainCampaignsList("experiments").concat(Kameleoon.Internals.runtime.Campaigns.obtainCampaignsList("personalizations")).forEach((n=>{if(n.targetingSegmentId==e){n.targeting=void 0;n.rescheduleTargeting=!0;n.forceTargeting=!0}}));Kameleoon.Analyst.Actions.processAllActions();Kameleoon.Targeting.processTargetingSegments(n)}}};this.Variations={execute:e=>{const n=e=>{const n=Kameleoon.Internals.runtime.variations.filter((n=>n.id==e));return n?n[0]:null};let t=n(e);if(t){t=new Variation(t);if(t.redirections)t.preProcessRedirect();Kameleoon.Utils.addCSSStyleSheet(t.cssCode);return t.applyJavascriptCode(!0)}return null}};this.Utils={addEventListener:function(e,n,t,o){Kameleoon.Utils.addEventListener(e,n,t,o,!0)},addUniversalClickListener:function(e,n,t){this.addEventListener(e,Kameleoon.Internals.runtime.mouseDownEvent,(function(e){if(!Kameleoon.Internals.runtime.touchMoveEvent&&("mousedown"==Kameleoon.Internals.runtime.mouseDownEvent||!e.target||!e.target.closest||!e.target.closest("[disabled]")))n&&n(e)}))},clearInterval:function(){Kameleoon.Utils.clearInterval.apply(Kameleoon.Utils,arguments)},clearTimeout:function(){Kameleoon.Utils.clearTimeout.apply(Kameleoon.Utils,arguments)},createHash:function(e){return Kameleoon.Utils.computeStringHash.apply(Kameleoon.Utils,arguments)},getURLParameters:function(){return Kameleoon.Utils.parseParameters.apply(Kameleoon.Utils,arguments)},performRequest:(e,n,t,o=5e3)=>Kameleoon.Utils.performBeaconServerCall(e,n,t,o),querySelectorAll:function(e){return Kameleoon.Utils.querySelectorAll.apply(Kameleoon.Utils,arguments)},setInterval:(e,n=200)=>Kameleoon.Utils.setInterval(e,n,!1,!0),setTimeout:(e,n=200)=>Kameleoon.Utils.setTimeout(e,n,!0)};Object.defineProperty(this.Utils,"mouseDownEvent",{enumerable:!0,get:function(){return Kameleoon.Internals.runtime.mouseDownEvent}});Object.defineProperty(this.Utils,"touchMoveEvent",{enumerable:!0,get:function(){return Kameleoon.Internals.runtime.touchMoveEvent}});Object.defineProperty(this,"Visitor",{enumerable:!0,get:function(){try{if(!Kameleoon.Internals.runtime)return{setVisitorCode:e=>{Kameleoon.Internals.configuration.predefinedVisitorCode=e}};else return new APIVisitor}catch(e){return null}}});Object.defineProperty(this,"CurrentVisit",{enumerable:!0,get:function(){try{return new APIVisit(Kameleoon.Internals.runtime.Visitor.currentVisit)}catch(e){return null}}});Object.defineProperty(this,"React",{enumerable:!1,get:function(){return window.KameleoonAPIReact||null}})}}class Gatherer{constructor(){this.MAX_HREF_LENGTH_IN_A_REQUEST=200;this.MAX_PAGE_TITLE_LENGTH_IN_A_REQUEST=200}run(e){let t=Kameleoon.Utils.clone(Kameleoon.Internals.configuration.Gatherer);if("string"==typeof t)t=JSON.parse(Kameleoon.Utils.decodeString(t));Kameleoon.Internals.runtime.Gatherer={configuration:t,active:!0,clicks:0};this.Browser=new Browser(t.browsers);this.CustomData=new CustomData(t.customData);this.KeyPage=new KeyPage(t.keyPages);this.Language=new Language;this.OperatingSystem=new OperatingSystem(t.oss);this.Referrer=new Referrer(t.referrers);this.TimeZone=new TimeZone;Kameleoon.Internals.runtime.storedData.saveField("Gatherer","startsOfVisitForCurrentPage",0);Kameleoon.Internals.runtime.Visitor=new Visitor;e();this.track(VisitEvent_Page);this.track(VisitEvent_StaticData);VisitEvent_Activity.initialize();this.CustomData.run();Kameleoon.Mentalist.run();Kameleoon.Internals.runtime.gathererRun=!0}startNewVisit(e,t){Kameleoon.Internals.runtime.Visitor.updateFromStoredData(!0,!0,t);this.track(VisitEvent_Page);this.track(VisitEvent_StaticData);this.CustomData.run();}track(e,t){new VisitEvent(e).track(t)}}class KameleoonEngine{constructor(){this.Analyst=new Analyst;this.API=new API;this.Gatherer=new Gatherer;this.Loader=new Loader;this.Mentalist=new Mentalist;this.Targeting=new Targeting;this.Tracking=new Tracking;this.Utils=new Utils}}class Loader{constructor(){this.enableKameleoonEditorListener=()=>{if(!Kameleoon.Internals.runtime.editorListenerEnabled){Kameleoon.Internals.runtime.editorListenerEnabled=!0;let e=e=>{if(!e)e=window.event;Kameleoon.Loader.listenKeys.call(Kameleoon.Loader,e)};Kameleoon.Utils.addEventListener(document,"keyup",e,!1)}};this.listenKeys=e=>{if(e.shiftKey){if(113==e.keyCode&&Kameleoon.Internals.configuration.abtestingSetup){Kameleoon.Internals.runtime.editorMode=!0;Kameleoon.Analyst.loadKameleoonFull((()=>{Kameleoon.Loader.enableKameleoonEditor.apply(Kameleoon.Loader)}),!0)}if(115==e.keyCode&&(Kameleoon.Internals.runtime.simulationMode||Kameleoon.Internals.runtime.parameters.kameleoonVariationSelection))Kameleoon.Analyst.loadKameleoonFull((()=>{Kameleoon.Loader.enableSimulationPanel()}),!0)}};}}class Mentalist{constructor(){this.MAX_VISIT_AGE=90*24*60*60*1e3;this.computeVariationIdToScore=t=>{try{let e=Kameleoon.Internals.configuration.MentalistFeatures;let i=Kameleoon.Internals.runtime.Visitor.currentVisit;let n=this.computePreviousVisits();let r={};let o=this.computeVariationScore(t,null,i,n);if(null!=o)r[0]=o;let l=e.experiments[t].variationIds;for(let e=0,o=l.length;e<o;++e){let o=l[e];let a=this.computeVariationScore(t,o,i,n);if(null!=a)r[o]=a}return r}catch(t){return{}}};this.computeGoalConversionProbabilityPredictionByGoalId=t=>{try{let e=Kameleoon.Internals.configuration.MentalistFeatures;let i=Kameleoon.Internals.configuration.MentalistLearner;let n;if(null==t)n=i.startOfVisitLearner;else{let e=i.targetingSegments[t];if(null==e){n=i.startOfVisitLearner;t=null}else n=e.probabilityLearner}if(0==n.trainingOutputVectorTargetNbUpdates)return{};let r=Kameleoon.Internals.runtime.Visitor.currentVisit;let o=this.computePreviousVisits();let l={};let a=VisitVectorizationUtils.computeVector(r,o,l,!0,null!=t,null,t);let s=Learner.computeProbabilities(n,a,l);let u=n.trainingOutputVectorTargetMean;let c=(null==t?e:e.targetingSegments[t]).outputGoalIds;let m={};for(let t=0,e=c.length;t<e;++t)m[c[t]]=this.computeConversionProbability(u[t],s[t]);return m}catch(t){return{}}};this.computePreviousVisits=()=>new PreviousVisits(Kameleoon.Internals.runtime.Visitor.visits.slice(0,-1).slice(-Kameleoon.Internals.configuration.MentalistFeatures.maxNumberPreviousVisits).filter((t=>(new Date).getTime()-t.startDate<=this.MAX_VISIT_AGE)));this.computeVariationScore=(t,e,i,n)=>{let r=Kameleoon.Internals.configuration.MentalistFeatures;let o=Kameleoon.Internals.configuration.MentalistLearner;let l=o.experiments[t].variationIdToProbabilityLearner[e];if(0==l.trainingOutputVectorTargetNbUpdates)return null;let a={};let s=VisitVectorizationUtils.computeVector(i,n,a,!0,!0,t,null);let u=Learner.computeProbabilities(l,s,a);let c=r.experiments[t].outputGoalWeights;let m=0;for(let t=0,e=c.length;t<e;++t)m+=c[t]*this.computeConversionProbability(l.trainingOutputVectorTargetMean[t],u[t]);return m};this.computeConversionProbability=(t,e)=>{if(0==e)return 0;if(1==e)return 1;if(e>=t)return.5+(e-t)/(1-t)/2;return.5+(e-t)/t/2};this.targetingSegmentsPredictions={}}isSecure(){return null!=Kameleoon.Internals.configuration.MentalistFeatures&&null!=Kameleoon.Internals.configuration.MentalistLearner}run(){Kameleoon.Internals.runtime.mentalistRun=this.isSecure();if(Kameleoon.Internals.runtime.Gatherer.startOfVisit&&Kameleoon.Internals.runtime.mentalistRun&&Kameleoon.Internals.configuration.track){let t=this.computeGoalConversionProbabilityPredictionByGoalId(null);if(!Kameleoon.Utils.testEmptyMap(t)){let e=[];for(let i in t)e.push([parseInt(i),t[i]]);Kameleoon.Gatherer.track(VisitEvent_MentalistPredictionStartOfVisit,{goalIdToConversionProbability:e});Kameleoon.Internals.runtime.storedData.saveField("Gatherer","savedScoresFromMoments",{0:t})}}}}class Runtime{constructor(){this.DATA_URL=Kameleoon.Internals.configuration.DATA_URL;this.PAGE_LOADED_POLL_DELAY=250;this.PAGE_LOADING_POLL_DELAY=75;this.IDLE_DURATION=1e4;this.enableSinglePageSupport=()=>{this.singlePageSupport=!0;this.href=window.location.href;KMutationObserver.setMutationObserverSPA();Kameleoon.Utils.setInterval((()=>{const e=this.href;this.href=window.location.href;if(e!=this.href)Kameleoon.Analyst.load.apply(this,[])}),100)};this.enableDynamicRefresh=()=>{this.dynamicRefresh=!0;KMutationObserver.setMutationObserverSPA()};this.executeGlobalScript=()=>{if(Kameleoon.Internals.configuration.globalScript&&!this.globalScriptProcessed&&!this.editorMode&&!this.kameleoonSelectionIframeMode){Kameleoon.Utils.sendKameleoonCustomEvent("Internals",{type:"globalScript"});this.globalScriptProcessed=!0;Kameleoon.Utils.runProtectedScript(Kameleoon.Internals.configuration.globalScript,"kameleoonGlobalScript.js")}};this.initializePredefinedVisitorCode=()=>{if(Kameleoon.Internals.configuration.predefinedVisitorCode){const e=Kameleoon.Utils.readLocalData("kameleoonVisitorCode","COOKIE")||Kameleoon.Utils.readLocalData("kameleoonVisitorCode","LS");if(e==Kameleoon.Internals.configuration.predefinedVisitorCode)return;const t=this.storedData.Visitor.visits;if(t)t.slice(-1)[0].visitorCode=Kameleoon.Internals.configuration.predefinedVisitorCode;Kameleoon.Utils.saveVisitorCode(Kameleoon.Internals.configuration.predefinedVisitorCode);Kameleoon.Internals.configuration.experiments.forEach((e=>{Kameleoon.Utils.eraseLocalData("kameleoonExperiment-"+e.id,null,"LS")}));Kameleoon.Internals.configuration.personalizations.forEach((e=>{Kameleoon.Utils.eraseLocalData("kameleoonPersonalization-"+e.id,null,"LS")}))}};this.initializeActions=()=>{if(Kameleoon.Internals.configuration.abtestingSetup||Kameleoon.Internals.configuration.personalizationSetup){this.targetingSegments=Kameleoon.Utils.clone(Kameleoon.Internals.configuration.targetingSegments);this.variations=Kameleoon.Utils.clone(Kameleoon.Internals.configuration.variations)}if(Kameleoon.Internals.configuration.abtestingSetup)Kameleoon.Internals.configuration.experiments.forEach((e=>{this.Campaigns.addCampaign(new Experiment(e,this.incomingStoredData))}));if(Kameleoon.Internals.configuration.personalizationSetup){Kameleoon.Internals.configuration.personalizations.forEach((e=>{this.Campaigns.addCampaign(new Personalization(e,this.incomingStoredData))}));}};this.initializeActionsAfterGatherer=()=>{if(Kameleoon.Internals.configuration.personalizationSetup)Personalization.setGlobalPersonalizationDeviation();};this.initializeIdleTimeListener=()=>{};this.initializeListeners=()=>{Kameleoon.Utils.domReady((()=>{this.domReady=!0;if(!0!==Kameleoon.Internals.configuration.disableEditorLaunchViaKeys)Kameleoon.Loader.enableKameleoonEditorListener();if(this.kameleoonSelectionIframeMode){const e=document.createElement("script");e.setAttribute("type","text/javascript");e.setAttribute("charset","utf-8");e.setAttribute("src","https://back-office-redesign."+Kameleoon.Internals.configuration.DOMAIN+"/get-script?type=selection");this.headNode.appendChild(e)}if(0==window.kameleoonLightIframe&&window.kameleoonIframeURL)if(Kameleoon.Internals.runtime.Gatherer.startOfVisit)Kameleoon.Utils.setTimeout((()=>{const e=document.createElement("iframe");e.src=window.kameleoonIframeURL;e.id="kameleoonExternalIframe";e.style.cssFloat="left !important";e.style.opacity="0.0 !important";e.width="0px";e.height="0px";e.onload=()=>{e.parentNode.removeChild(e)};document.head.appendChild(e)}),5e3)}));if("touchend"==this.mouseDownEvent){Kameleoon.Utils.addEventListener(document,"touchmove",(e=>{this.touchMoveEvent=!0}));Kameleoon.Utils.addEventListener(document,"touchstart",(e=>{this.touchMoveEvent=!1}))}if(!this.iframeLocalStorage)window.addEventListener("storage",(e=>{const t=null==e.key?[""]:e.key.split("-");let n=t[0];if(-1!=n.indexOf("kameleoon")){if(window.document.hasFocus())return;let o;try{o=null==e.newValue?null:JSON.parse(e.newValue).value}catch(e){return}if("kameleoonData"===n)n=this.dataKeyName;const a={};switch(n){case"kameleoonExperiment":a.type=n;const e=t[1];a.experimentId=parseInt(e);let i;if(null==o)i=null;else{const e=o.split("/")[0];i=isNaN(e)?e:parseInt(e)}a.registeredVariationId=i;break;case"kameleoonGlobalPersonalizationExposition":a.type=n;a.active=null==o?null:"true"==o.split("/")[0];break;case this.dataKeyName:case"kameleoonSimulationVisitorData":a.type=n;a.value=null==o?null:o;break;case"kameleoonLegalConsent":a.type=n;a.saveLegalConsent=null==o?null:o;break}if(null!=a.type)Kameleoon.Utils.processStorageData(a)}}),!1);this.initializeIdleTimeListener();};this.loadExternalRequests=()=>{this.Geolocation="undefined"!=typeof KGeolocation?new KGeolocation:null;this.IP="undefined"!=typeof IP?new IP:null;};this.loadAudienceSegments=()=>{if(Kameleoon.Internals.configuration.useOpportunitySegments)this.RequestManager.addCallback((()=>{const e=`https://${Kameleoon.Internals.configuration.siteCode}.${Kameleoon.Internals.configuration.WIDE_DOMAIN}/audiences/segments.js`;Kameleoon.Utils.performBeaconServerCall(e,(e=>{if(4==e.readyState&&200==e.status){Kameleoon.Utils.runProtectedScript(e.responseText,"kameleoonAudiencesSegments.js");if(this.audienceSegments){this.audienceSegments.forEach((e=>{e.opportunityDetection=!0;if(null==Kameleoon.Targeting.segments[e.id]){Kameleoon.Targeting.segments[e.id]=e;this.targetingSegments.push(e)}}));Kameleoon.Targeting.processTargetingSegments(this.audienceSegments)}}}))}));};this.processPageLoaded=()=>{Kameleoon.Utils.removeBlockingStyleSheet();for(let e=0,t=this.variations.length;e<t;++e)if(this["enginePollerForVariation"+this.variations[e].id]){if(Kameleoon.Internals.runtime.cantUseMutationObserver)window.clearInterval(this["enginePollerForVariation"+this.variations[e].id]);this["enginePollerForVariation"+this.variations[e].id]=null}};this.readFromStorageOrExternal=(e,t)=>{if(this.incomingStoredData)return this.incomingStoredData[e];else return Kameleoon.Utils.readLocalData(e,t,!0)};this.setup=()=>{if(Kameleoon.Internals.runtime.parameters.kameleoon)Kameleoon.Utils.domReady((()=>{Kameleoon.Loader.enableKameleoonEditor()}));const e=Kameleoon.Utils.setInterval((()=>{let t=document.getElementById("adBlockerCheck");if(null==t&&null!=document.body){t=document.createElement("div");t.id="adBlockerCheck";t.className="ad-placement";document.body.appendChild(t)}if(null!=t&&0==t.clientWidth)this.adBlocker=!0;if(null==this.adBlocker&&Kameleoon.Utils.querySelectorAll("[id^=ghostery-]").length>0)this.adBlocker=!0;if(this.adBlocker)Kameleoon.Utils.clearInterval(e)}),250);const t=Kameleoon.Utils.setTimeout((()=>{Kameleoon.Utils.clearTimeout(t);const n=document.getElementById("adBlockerCheck");if(null!=n)n.parentNode.removeChild(n);if(null==this.adBlocker){Kameleoon.Utils.clearInterval(e);this.adBlocker=!1}else Kameleoon.Gatherer.track(VisitEvent_AdBlocker)}),2e3);Kameleoon.Utils.addEventListener(window,"pageshow",(e=>{if(e.persisted)this.updateAfterPageCached()}));Kameleoon.Internals.runtime.Visitor.updateFromStoredData(!1,!1,!1);if(!Kameleoon.Internals.configuration.requestsAfterConsent)this.loadExternalRequests();KMutationObserver.setMutationObserver();Kameleoon.Analyst.loadKameleoonFull((()=>{Kameleoon.Analyst.loadSimulation()}));Kameleoon.Analyst.Actions.processAllActions();Kameleoon.Targeting.processAllTargetingSegments();Kameleoon.Analyst.Goals.checkKameleoonGoals();this.loadAudienceSegments();};this.setupLocalData=e=>{Kameleoon.Utils.addEventListener(window,"message",Kameleoon.Utils.processMessageEvent,!1);if(this.iframeLocalStorage){this.externalIframe=document.getElementById("kameleoonExternalIframe")||window.kameleoonExternalIframe;this.postMessageOrigin=window.kameleoonIframeOrigin||"";this.postMessageCallbacks={};if(null==Kameleoon.Internals.configuration.externalIframeData)Kameleoon.Utils.postMessageToExternalIframe(JSON.stringify({type:"retrieve",callbackId:Kameleoon.Utils.addPostMessageCallback((t=>{this.incomingStoredData=t;e()}))}));else{this.incomingStoredData=Kameleoon.Internals.configuration.externalIframeData;e();delete Kameleoon.Internals.configuration.externalIframeData}}else{this.incomingStoredData=null;e()}};this.updateAfterPageCached=()=>{this.pageCached=!0;if(this.iframeLocalStorage)Kameleoon.Utils.postMessageToExternalIframe(JSON.stringify({type:"retrieve",callbackId:Kameleoon.Utils.addPostMessageCallback((()=>{}))}));else{const e=Kameleoon.Utils.readLocalData(Kameleoon.Internals.runtime.simulationMode?"kameleoonSimulationVisitorData":Kameleoon.Internals.runtime.dataKeyName,"LS",!0);Kameleoon.Internals.runtime.storedData.update(e);Kameleoon.Internals.runtime.Visitor.updateFromStoredData(!1,!1,!1);Kameleoon.Gatherer.track(VisitEvent_Page)}};this.getSimulationMode=()=>{const e=Kameleoon.Internals.runtime.readFromStorageOrExternal("kameleoonSimulation","LS");return e?!0:!1};this.pageStartTime=(new Date).getTime();this.dataKeyName="kameleoonData";this.Device=new Device;this.deviceType=this.Device.type;this.parameters=Kameleoon.Utils.parseParameters();this.beforeUnloadEvent="Phone"==this.deviceType&&"Safari"==this.Device.browser?"pagehide":"beforeunload";this.headNode=document.getElementsByTagName("head")[0];this.editorMode="true"==this.parameters.kameleoon;this.proxyMode="proxy."+Kameleoon.Internals.configuration.DOMAIN===window.location.hostname;this.disableCache="true"==this.parameters.kameleoonDisableCache||this.parameters.kameleoonVariationId;this.kameleoonSelectionIframeMode="true"==this.parameters.kameleoonSelectionIframeMode;this.iframeLocalStorage=Kameleoon.Internals.configuration.useWideDomainSupport;this.useWideDomainSupport=Kameleoon.Internals.configuration.useWideDomainSupport||null!=window.kameleoonLightIframe;if(0==window.kameleoonLightIframe||null==window.kameleoonLightIframe)this.iframeLocalStorage=!1;this.mouseDownEvent="ontouchend"in document.documentElement?"touchend":"mousedown";this.addedClasses={};this.addedIDs={};this.eventListeners=[];this.listenVariations=[];this.waitingElementPresentObjects=[];this.waitingDynamicElements=[];this.variations=[];this.intervalIds={};this.targetingSegments=[];this.timeoutIds={};this.goals=Kameleoon.Utils.clone(Kameleoon.Internals.configuration.goals);this.cantUseMutationObserver="undefined"==typeof MutationObserver&&!Kameleoon.Internals.configuration.disableDomMutationObserver;this.Campaigns=new Campaigns;this.Consent=new Consent;Object.defineProperty(this,"experiments",{get:()=>Kameleoon.Internals.runtime.Campaigns.obtainCampaignsList("experiments")});Object.defineProperty(this,"personalizations",{get:()=>Kameleoon.Internals.runtime.Campaigns.obtainCampaignsList("personalizations")})}clear(){this.eventListeners.forEach((e=>{let t;if("window"==e.elementKey||"document"==e.elementKey)t="window"==e.elementKey?window:document;else{t=document.querySelector(`[kameleoonListener-${e.elementKey}=true]`);if(t)t.removeAttribute(`kameleoonListener-${e.elementKey}`)}if(t)t.removeEventListener(e.eventType,e.actionFunction,e.useCapture)}));this.waitingDynamicElements.forEach((e=>{Kameleoon.Utils.querySelectorAll(`[${e.attribute}=true]`).forEach((t=>{t.removeAttribute(e.attribute)}))}));for(const e in this.timeoutIds)Kameleoon.Utils.clearTimeout(parseInt(e));for(const e in this.intervalIds)Kameleoon.Utils.clearInterval(parseInt(e));if(this.RequestManager)this.RequestManager.processRequests();if(this.storedData)this.storedData.save(!0);if(null!=this.mutationObserver)this.mutationObserver.disconnect();if(null!=this.mutationObserverSpa)this.mutationObserverSpa.disconnect();let e=Kameleoon.Utils.querySelectorAll("[id^='kameleoonElement'], [id*='kameleoonScenarioLayerBase'], [id^='kameleoonStyleSheet'], [class*='kameleoonWidget']");for(let t=0;t<e.length;++t)e[t].parentNode.removeChild(e[t]);e=Kameleoon.Utils.querySelectorAll("[id^='kameleoonId'], .kameleoonOverlay");for(let t=0;t<e.length;++t)e[t].removeAttribute("id");e=Kameleoon.Utils.querySelectorAll("[class^='kameleoonClass']");for(let t=0;t<e.length;++t)e[t].removeAttribute("class");if(Kameleoon.Internals.runtime.storedData)Kameleoon.Internals.runtime.storedData.save(!0);Kameleoon.API.Events.triggered=[]}run(){this.running=!0;Kameleoon.Utils.removeBlockingStyleSheet();this.setupLocalData((()=>{this.simulationMode=this.getSimulationMode();this.storedData=new StoredData(this.incomingStoredData);Kameleoon.Internals.runtime.Consent.setup();this.initializePredefinedVisitorCode();this.initializeActions();Kameleoon.Gatherer.run((()=>{this.RequestManager=new RequestManager}));this.initializeActionsAfterGatherer();this.executeGlobalScript();window.kameleoonQueue=new CommandQueue(window.kameleoonQueue);Kameleoon.Utils.sendKameleoonCustomEvent.call(window,"Started",{newVisitorCode:1==Kameleoon.Internals.runtime.Visitor.visits.length});this.initializeListeners();this.setup();this.setupAfterLocalDataRetrieval=!0}))}}class Utils{constructor(){this.events=[];this.addParameterToURL=(e,t,n)=>{if(n)return e+(-1==e.indexOf("#")?"#":"&")+t;let o="";if(-1!=e.indexOf("#")){o=e.substr(e.indexOf("#"));e=e.substr(0,e.indexOf("#"))}e+=(-1==e.indexOf("?")?"?":"&")+t+o;return e};this.computeCurrentPageAbsoluteURLNoProxyMode=function(){let e=Kameleoon.Internals.runtime;if(null==e.currentPageAbsoluteURLNoProxyMode){if(e.proxyMode){let t=e.parameters.kameleoonExperimentId||e.parameters["kameleoon-experiment-id"];if(null!=t){let n=e.Campaigns.obtainCampaign(t,"experiment");if(n)e.currentPageAbsoluteURLNoProxyMode=n.baseURL}}if(null==e.currentPageAbsoluteURLNoProxyMode)e.currentPageAbsoluteURLNoProxyMode=window.location.href}return e.currentPageAbsoluteURLNoProxyMode};this.computeCurrentPageCanonicalURL=()=>{if(null==Kameleoon.Internals.runtime.currentPageCanonicalURL){let e=this.querySelectorAll('link[rel="canonical"]');if(e.length>0)Kameleoon.Internals.runtime.currentPageCanonicalURL=e[0].href}return Kameleoon.Internals.runtime.currentPageCanonicalURL};this.computeCurrentPageCleanRelativeURL=()=>{if(null==Kameleoon.Internals.runtime.currentPageCleanRelativeURL)Kameleoon.Internals.runtime.currentPageCleanRelativeURL=this.computeRelativeURL(this.computeCurrentPageCleanAbsoluteURL());return Kameleoon.Internals.runtime.currentPageCleanRelativeURL};this.computeIfSuffix=(e,t)=>{let n=e.length-t.length;let o=e.lastIndexOf(t,n);return o>=0&&o==n};this.computeRelativeURL=e=>{let t=document.createElement("a");t.href=e;return t.pathname+t.search+t.hash};this.computeStringSha256=e=>{let t=1,n,o=[],a=[];while(++t<18)for(n=t*t;n<312;n+=t)o[n]=1;function r(e,t){return Math.pow(e,1/t)%1*4294967296|0}for(t=1,n=0;t<313;)if(!o[++t]){a[n]=r(t,2);o[n++]=r(t,3)}function l(e,t){return e>>>t|e<<32-t}let i=a.slice(t=0),s=this.encodeUTF8(e),m=[],u=s.length,c=[],d,f,h;for(;t<u;)c[t>>2]|=(255&s.charCodeAt(t))<<8*(3-t++%4);u*=8;c[u>>5]|=128<<24-u%32;c[h=u+64>>5|15]=u;for(t=0;t<h;t+=16){d=i.slice(n=0,8);for(;n<64;d[4]+=f){if(n<16)m[n]=c[n+t];else m[n]=(l(f=m[n-2],17)^l(f,19)^f>>>10)+(0|m[n-7])+(l(f=m[n-15],7)^l(f,18)^f>>>3)+(0|m[n-16]);let e;d.unshift((f=(d.pop()+(l(e=d[4],6)^l(e,11)^l(e,25))+((e&d[5]^~e&d[6])+o[n])|0)+(0|m[n++]))+(l(u=d[0],2)^l(u,13)^l(u,22))+(u&d[1]^d[1]&d[2]^d[2]&u))}for(n=8;n--;)i[n]=d[n]+i[n]}for(s="";n<63;)s+=(i[++n>>3]>>4*(7-n%8)&15).toString(16);return s};this.computeURLNoKameleoonParameters=e=>{let t=!1;for(let n in Kameleoon.Internals.runtime.parameters)if(-1!=n.indexOf("kameleoon")){t=!0;e=e.replace(new RegExp(n+"="+Kameleoon.Internals.runtime.parameters[n]+"&?"),"")}return t?e.replace(/\?$/,""):e};this.computeURLRegExpNoKameleoonParameters=e=>e?e.replace(/(\\\?|&|#)kameleoon[^&#()]*/g,""):null;this.createLocalData=(e,t,n,o,a,r,l,i)=>{let s="COOKIE"!=a;let m=(new Date).getTime();if(!i&&!Kameleoon.Internals.runtime.Consent.hasGlobalConsent()){let i=s?"LS":"COOKIE";if(null==Kameleoon.Internals.runtime.localDataMap)Kameleoon.Internals.runtime.localDataMap={};if(null==Kameleoon.Internals.runtime.localDataMap[i])Kameleoon.Internals.runtime.localDataMap[i]={};Kameleoon.Internals.runtime.localDataMap[i][e]={name:e,value:t,days:n,domain:o,forceLocalAccess:a,jsonFormat:r,creationTime:m};if(s)l&&l();return}if(s){let o=m+24*n*60*60*1e3;if(Kameleoon.Internals.runtime.iframeLocalStorage)this.postMessageToExternalIframe(JSON.stringify({type:"set",key:e,data:{value:Utils.LOCAL_STORAGE_OBFUSCATED_KEYS[e]&&this.obfuscateString(JSON.stringify(t))||t,expirationDate:o},callbackId:this.addPostMessageCallback(l)}));else{try{localStorage.setItem(e,JSON.stringify({value:Utils.LOCAL_STORAGE_OBFUSCATED_KEYS[e]&&this.obfuscateString(JSON.stringify(t))||t,expirationDate:o}))}catch(e){}l&&l()}}else{let a="";let l=r?JSON.stringify(t):t;if(n){let e=new Date(m+24*n*60*60*1e3);a="; expires="+e.toUTCString()}if("CURRENT_HOST"!=o){o=o||Kameleoon.Internals.configuration.customCookieDomainName||this.obtainCurrentRootDomain();a+="; domain="+o}const i=Kameleoon.Internals.configuration.useSecureCookie?"; Secure":"";document.cookie=e+"="+l+a+"; path=/; SameSite=Lax"+i}};this.decodeString=e=>{let t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";let n="";let o,a,r;let l,i,s,m;let u=0;e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(u<e.length){l=t.indexOf(e.charAt(u++));i=t.indexOf(e.charAt(u++));s=t.indexOf(e.charAt(u++));m=t.indexOf(e.charAt(u++));o=l<<2|i>>4;a=(15&i)<<4|s>>2;r=(3&s)<<6|m;n+=String.fromCharCode(o);if(64!=s)n+=String.fromCharCode(a);if(64!=m)n+=String.fromCharCode(r)}n=this.decodeUTF8(n);return n};this.decodeUTF8=e=>{let t="";let n=0;let o=0,a=0,r;while(n<e.length){o=e.charCodeAt(n);if(o<128){t+=String.fromCharCode(o);n++}else if(o>191&&o<224){a=e.charCodeAt(n+1);t+=String.fromCharCode((31&o)<<6|63&a);n+=2}else{a=e.charCodeAt(n+1);r=e.charCodeAt(n+2);t+=String.fromCharCode((15&o)<<12|(63&a)<<6|63&r);n+=3}}return t};this.domReady=e=>{if("complete"==document.readyState||"interactive"==document.readyState)return e();else{let t=!1;this.addEventListener(document,"DOMContentLoaded",(()=>{if(t)return;t=!0;e()}),!1);this.addEventListener(window,"load",(()=>{if(t)return;t=!0;e()}),!1)}};this.encodeString=e=>{let t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";let n="";let o,a,r,l,i,s,m;let u=0;e=this.encodeUTF8(e);while(u<e.length){o=e.charCodeAt(u++);a=e.charCodeAt(u++);r=e.charCodeAt(u++);l=o>>2;i=(3&o)<<4|a>>4;s=(15&a)<<2|r>>6;m=63&r;if(isNaN(a))s=m=64;else if(isNaN(r))m=64;n=n+t.charAt(l)+t.charAt(i)+t.charAt(s)+t.charAt(m)}return n};this.encodeUTF8=e=>{e=e.replace(/\r\n/g,"\n");let t="";for(let n=0;n<e.length;n++){let o=e.charCodeAt(n);if(o<128)t+=String.fromCharCode(o);else if(o>127&&o<2048){t+=String.fromCharCode(o>>6|192);t+=String.fromCharCode(63&o|128)}else{t+=String.fromCharCode(o>>12|224);t+=String.fromCharCode(o>>6&63|128);t+=String.fromCharCode(63&o|128)}}return t};this.eraseLocalData=(e,t,n)=>{let o="COOKIE"!=n;let a=Kameleoon.Internals.runtime.localDataMap;let r=o?"LS":"COOKIE";if(null!=a&&null!=a[r]&&null!=a[r][e])delete a[r][e];if(o)if(Kameleoon.Internals.runtime.iframeLocalStorage)this.postMessageToExternalIframe(JSON.stringify({type:"remove",key:e,callbackId:this.addPostMessageCallback(null)}));else localStorage.removeItem(e);else this.createLocalData(e,"",-1,t,"COOKIE",!1,null,!0)};this.forceNoFlicker=e=>{let t=document.createElement("style");t.setAttribute("id","kameleoonPageLoading");t.setAttribute("rel","stylesheet");t.setAttribute("type","text/css");t.setAttribute("media","screen");let n=e+" { visibility: hidden !important; background-image: none !important; }";t.appendChild(document.createTextNode(n));Kameleoon.Internals.runtime.headNode.appendChild(t)};this.getLocale=e=>{let t=Kameleoon.Gatherer.Language.obtainLocaleTag();if("fr-FR"==t)t="fr";if("en-US"==t)t="en";if(e&&(!t||"fr"!=t))t="en";return t.substring(0,2)};this.obtainComputedStyle=e=>{if(window.getComputedStyle)return getComputedStyle(e,"");return null};this.obtainCurrentRootDomain=()=>{if(null==Kameleoon.Internals.runtime.currentRootDomain){let e=window.location.hostname.split(".");let t="";const n="testRootDomain";const o="_detectRootDomain";for(let a=0,r=e.length;a<r;a++){if(a>0)t="."+t;t=e[r-a-1]+t;if(0==t.length)continue;this.createLocalData(o,n,1,t,"COOKIE",!1,void 0,!0);const l=this.readLocalData(o,"COOKIE",!1);if(l){this.eraseLocalData(o,t,"COOKIE");Kameleoon.Internals.runtime.currentRootDomain=t;break}}}return Kameleoon.Internals.runtime.currentRootDomain};this.obtainRandomString=(e,t=Analyst.CODE_ALPHABET)=>{let n=t.length;let o="";for(let a=0;a<e;++a){let e=Math.floor(Math.random()*n);o+=t.substring(e,e+1)}return o};this.parseHostName=e=>{let t=document.createElement("a");t.href=e;return t.hostname};this.processRedirect=(e,t)=>{if(window.location.href!=e){t=t||Kameleoon.Analyst.Actions.currentAction;if(Kameleoon.Internals.runtime.gathererRun&&1==Kameleoon.Internals.runtime.Visitor.currentVisit.obtainPageNumberViews()){if(Kameleoon.Internals.configuration.experiments.concat(Kameleoon.Internals.configuration.personalizations).filter((function(e){return e.webtrekkTracking})).length>0)if(1==Kameleoon.Internals.runtime.Visitor.currentVisit.obtainPageNumberViews()){e=Kameleoon.Utils.addParameterToURL(e,"em_src=ref",!0);var n=Kameleoon.Internals.runtime.storedData.obtainField("Runtime","firstReferrerHref");if(null!=n&&0==n.length)e=Kameleoon.Utils.addParameterToURL(e,"em_src=direct",!0);else if(null!=n&&new RegExp("^https?://[^/]*(google|bing|yahoo|yandex|baidu)\\..*").test(n))e=Kameleoon.Utils.addParameterToURL(e,"em_src=suma",!0)}}let o=document.createElement("a");o.href=e;if(!Kameleoon.Internals.runtime.useWideDomainSupport&&-1==window.location.href.indexOf(o.protocol+"//"+o.hostname)){if(t)e=Kameleoon.Utils.addParameterToURL(e,"kameleoonRedirect-"+t.id+"="+t.associatedVariation.id,!0)}else if(t)Kameleoon.Utils.createLocalData("kameleoonRedirect-"+t.id,t.associatedVariation.id,1,null,null,!1,null,!0);if(window.location.href!=e){Kameleoon.Utils.forceNoFlicker("*");Kameleoon.Utils.createLocalData("kameleoonReferrer",Kameleoon.Gatherer.Referrer.obtain(),1/24,null,"COOKIE",!1);window.location.replace(e)}}};this.processStorageData=e=>{if(Kameleoon.Internals.runtime.setupAfterLocalDataRetrieval)switch(e.type){case"kameleoonExperiment":for(let t in Kameleoon.Internals.runtime.Campaigns.experiments){let n=Kameleoon.Internals.runtime.Campaigns.experiments[t];if(e.experimentId==n.id){n.registeredVariationId=e.registeredVariationId;break}}break;case"kameleoonGlobalPersonalizationExposition":Kameleoon.Internals.runtime.personalizationsActive=e.active;break;case Kameleoon.Internals.runtime.dataKeyName:case"kameleoonSimulationVisitorData":if(e.type==Kameleoon.Internals.runtime.dataKeyName&&!Kameleoon.Internals.runtime.simulationMode||"kameleoonSimulationVisitorData"==e.type&&Kameleoon.Internals.runtime.simulationMode){if(Kameleoon.Internals.runtime.pageCached)Kameleoon.Internals.runtime.storedData.update(Kameleoon.Utils.readLocalData(e.type,"LS",!0));else Kameleoon.Internals.runtime.storedData.update(JSON.parse(Kameleoon.Utils.unobfuscateString(e.value)));Kameleoon.Internals.runtime.Visitor.updateFromStoredData(!1,!1,!1)}break;case"kameleoonLegalConsent":if(e.saveLegalConsent){let t=e=>e?"enable":"disable";if(null!=e.saveLegalConsent.AB_TESTING){let n=t(e.saveLegalConsent.AB_TESTING);Kameleoon.Internals.runtime.Consent[n]("AB_TESTING",!0)}if(null!=e.saveLegalConsent.PERSONALIZATION){let n=t(e.saveLegalConsent.PERSONALIZATION);Kameleoon.Internals.runtime.Consent[n]("PERSONALIZATION",!0)}}break}};this.querySelectorAll=(e,t)=>{Kameleoon.Internals.runtime.querySelectorAllHasError=!1;let n=!1,o,a=[],r=[];if(null==t)t=document;let l=e.match(/#([0-9]+.*)(?: |$)/);if(l){let t=e.charAt(1);e=e.replace("#"+t,"#\\3"+t+" ")}if(""!==e){if(-1!==e.indexOf("[")&&-1===e.indexOf("']")&&-1===e.indexOf('"]')){let t=e.split(/(?=\.)|(?=#)|(?=\[)/),n,o,a;t.forEach((function(t){if("["===t[0]&&-1===t.indexOf("']")&&-1===e.indexOf('"]')&&-1!==e.indexOf("=")){n=t.split(/=(.+)?/);o=n[1];o=o.substring(0,o.length-1);a=n[0]+"='"+o+"']";e=e.replace(t,a)}}))}if(-1!==e.indexOf(":contains")){n=!0;o=this.treatContainsSelector(e);e=o.newSelector}if(t&&t.querySelectorAll)if(-1!==e.indexOf(":eq"))a=this.treatEqSelector(e,t);else try{a=t.querySelectorAll(e)}catch(e){Kameleoon.Internals.runtime.querySelectorAllHasError=!0;a=[]}for(let e=0,t=a.length;e<t;++e)if(n){if(o.check(o.containText,a[e]))r.push(a[e])}else r.push(a[e])}return r};this.readLocalData=(e,t,n)=>{let o="COOKIE"!=t;let a=(new Date).getTime();try{if(!Kameleoon.Internals.runtime.Consent.hasGlobalConsent()){let t=Kameleoon.Internals.runtime.localDataMap;let n=o?"LS":"COOKIE";if(null!=t&&null!=t[n]&&null!=t[n][e]){let o=t[n][e];if(a-24*o.days*60*60*1e3>=o.creationTime)delete t[n][e];else return o.value}}if(o){let t;t=localStorage&&localStorage.getItem(e);if(!t)return null;t=JSON.parse(t);if(Utils.LOCAL_STORAGE_OBFUSCATED_KEYS[e])t.value=JSON.parse(this.unobfuscateString(t.value));if(a>(t.date||t.expirationDate)){localStorage.removeItem(e);return null}return t.value}else{let t=null;let o=document.cookie.split(";");for(let a=0,r=o.length;a<r;++a){let r=o[a];let l=r.indexOf("=");if(r.substring(0,l).trim()==e){let e=r.substring(l+1);t=n&&JSON.parse(e)||e;break}}return t}}catch(e){}return null};this.runProtectedFunction=(e,t)=>{try{e()}catch(e){if(t)console.log(e);else Kameleoon.Utils.Logger.send(e,"kameleoon.js");if(Kameleoon.Internals.runtime&&t)Kameleoon.Internals.runtime.processPageLoaded()}};this.runProtectedScript=(e,t,n)=>{if(n)return n();if(e){let n=null;try{let o=t?"//# sourceURL="+t:"";n=eval.call(window,"(function () {\n"+e+"\n})();"+o)}catch(e){n=null;console.log(e)}return n}return null};this.saveVisitorCode=(e,t=!0)=>{if(Kameleoon.Internals.configuration.useWideDomainSupport||Kameleoon.Internals.configuration.useVisitorCodeInLocalStorage)Kameleoon.Utils.createLocalData("kameleoonVisitorCode",e,Utils.MAX_STORAGE_DAYS,null,"LS");if(t)Kameleoon.Utils.createLocalData("kameleoonVisitorCode",e,Utils.MAX_STORAGE_DAYS,null,"COOKIE")};this.seededRandom=(e,t)=>{let n;if(t){n=Kameleoon.Utils.computeStringSha256(e);return parseInt(n,16)/Math.pow(2,256)}n=this.computeStringHash(e);n=(9301*Math.abs(n)+49297)%233280;return n/233280};this.treatEqSelector=(e,t)=>{if(void 0===e)return null;let n=e.split(/\:eq\([0-9]+\)/g);let o=e.match(/(?!\:eq\()[0-9]+/g)||[];let a=null==t?document:t;for(let t=0;t<n.length;++t){n[t]=n[t].trim();if(">"===n[t].charAt(0))n[t]=n[t].substring(1,e.length).trim();if(null==a||""==n[t].trim())break;if(t>o.length-1)a=a.querySelectorAll(n[t]);else a=a.querySelectorAll(n[t])[o[t]]}if(null==a)return[];if(void 0==a.length)a=[a];let r=Kameleoon.Utils.querySelectorAll(e.replace(/\:eq\([0-9]+\)/g,""));let l=[];for(let e=0;e<r.length;++e)for(let t=0;t<a.length;++t)if(r[e]===a[t]){l.push(a[t]);break}return l};this.Logger=new Logger;this.bowser=window.kbowser||window.bowser}addEventListener(e,t,n,o,a){let r;if(e==window)r="window";else if(e==document)r="document";else{r=Kameleoon.Utils.obtainRandomString(4);e.setAttribute(`kameleoonListener-${r}`,!0)}let l=n;if(a)e.addEventListener(t,l,o);else{l=function(e){Kameleoon.Utils.runProtectedFunction((function(){n(e)}))};e.addEventListener(t,l,o)}Kameleoon.Internals.runtime.eventListeners.push({elementKey:r,eventType:t,actionFunction:l,useCapture:o})}addPostMessageCallback(e){let t=Math.random().toString();Kameleoon.Internals.runtime.postMessageCallbacks[t]=e;return t}addCSSStyleSheet(e,t,n){if(!e)return;let o=n?n:document;let a="kameleoonStyleSheet"+(t?"-"+t.id:"");let r=n?n.getElementById(a):null;let l="";if(r){l=r.textContent;r.parentNode.removeChild(r)}let i=o.createElement("style");i.className="KameleoonStyleSheet";i.setAttribute("id",a);i.setAttribute("rel","stylesheet");i.setAttribute("type","text/css");i.setAttribute("media","screen");let s=l+e;if(i.styleSheet)i.styleSheet.cssText=s;else i.appendChild(document.createTextNode(s));if(n)o.getElementsByTagName("head")[0].appendChild(i,o.getElementsByTagName("head")[0].firstChild);else Kameleoon.Internals.runtime.headNode.appendChild(i);if(t)t.loadedCSSStyleSheet=i}applyVariation(e){new Variation(e).process()}clearInterval(e){delete Kameleoon.Internals.runtime.intervalIds[e];window.clearInterval(e)}clearTimeout(e){delete Kameleoon.Internals.runtime.timeoutIds[e];window.clearTimeout(e)}clone(e){return JSON.parse(JSON.stringify(e))}computeCurrentPageCleanAbsoluteURL(){if(null==Kameleoon.Internals.runtime.currentPageCleanAbsoluteURL){Kameleoon.Internals.runtime.currentPageCleanAbsoluteURL=this.computeURLNoKameleoonParameters(this.computeCurrentPageAbsoluteURLNoProxyMode());try{Kameleoon.Internals.runtime.currentPageCleanAbsoluteURL=decodeURIComponent(Kameleoon.Internals.runtime.currentPageCleanAbsoluteURL)}catch(e){}}return Kameleoon.Internals.runtime.currentPageCleanAbsoluteURL}computeStringHash(e,t){e=t?this.computeStringSha256(e):e;let n=0;for(let t=0;t<e.length;++t){n=(n<<5)-n+e.charCodeAt(t);n&=n}return n}secureSessionStorage(e,t,n){try{return window.sessionStorage[e](t,n)}catch(e){return null}}flatten(...e){let t=[];for(let e=0;e<arguments.length;e++)if(arguments[e]instanceof Array)t.push.apply(t,Kameleoon.Utils.flatten.apply(this,arguments[e]));else t.push(arguments[e]);return t}obfuscateString(e){let t="";for(let n=0,o=e.length;n<o;n+=1){let o=e[n];if("’"==o)o="'";t+=String.fromCharCode(o.charCodeAt(0)+16)}return t}parseParameters(){let e={};let t=window.location.hash.substring(1).replace(/\?/g,"&");let n=window.location.search.substring(1);if(n||t){let o=(n?n.split("&"):[]).concat(t?t.split("&"):[]);o.forEach((t=>{let n=t.split("=");try{e[decodeURIComponent(n[0])]=n[1]?decodeURIComponent(n[1]):null}catch(t){e[unescape(n[0])]=n[1]?unescape(n[1]):null}}))}return e}performBeaconServerCall(e,t,n,o){let a=new XMLHttpRequest;a.open("GET",e,!0);if(t)a.onreadystatechange=function(e){t.bind(a)(e.target)};if(n){a.onerror=function(e){n.bind(a)(e.target)};a.ontimeout=function(e){n.bind(a)(e.target)}}a.timeout=o||15*60*1e3;a.send()}postMessageToExternalIframe(e){if(!Kameleoon.Internals.runtime.externalIframe||!Kameleoon.Internals.runtime.externalIframe.contentWindow){if(window.kameleoonIframeURL){let t=document.createElement("iframe");t.src=window.kameleoonIframeURL;t.id="kameleoonExternalIframe";t.style.cssFloat="left !important";t.style.height="0px !important";t.style.opacity="0.0 !important";t.style.width="0px !important";t.onload=()=>{Kameleoon.Internals.runtime.externalIframe=t;Kameleoon.Internals.runtime.externalIframe.contentWindow.postMessage("kameleoon"+e,"*")};document.head.appendChild(t)}}else Kameleoon.Internals.runtime.externalIframe.contentWindow.postMessage("kameleoon"+e,"*")}processMessageEvent(e){if("string"!==typeof e.data)return;if("obtainTagCommanderVariableNames"==e.data){let t=[];if(window.tc_vars)for(let e in window.tc_vars)t.push(e);if(!(e.source instanceof MessagePort)&&!(e.source instanceof ServiceWorker))e.source.postMessage("tagCommanderVariableNames"+JSON.stringify(t),e.origin);return}if(0==e.data.indexOf("checkKameleoonScriptPresent")){if("https://back-office."+Kameleoon.Internals.configuration.DOMAIN==e.origin){let t="";let n=e.data.replace("checkKameleoonScriptPresent","");Kameleoon.Utils.runProtectedScript(n);if(!(e.source instanceof MessagePort)&&!(e.source instanceof ServiceWorker))e.source.postMessage(t,e.origin)}return}if(Kameleoon.Internals.runtime.iframeLocalStorage&&Kameleoon.Internals.runtime.postMessageOrigin==e.origin)try{let t=JSON.parse(e.data);if(t.kameleoonMessage){if(t.callbackId){let e=Kameleoon.Internals.runtime.postMessageCallbacks[t.callbackId];delete Kameleoon.Internals.runtime.postMessageCallbacks[t.callbackId];e&&e(t.data)}if(null!=t.type)Kameleoon.Utils.processStorageData(t)}}catch(e){}}removeBlockingStyleSheet(){let e=document.getElementById("kameleoonPageLoading");if(e&&e.parentNode)e.parentNode.removeChild(e)}removeCSSStyleSheet(e){if(e.loadedCSSStyleSheet){var t=e.loadedCSSStyleSheet.id.replace("kameleoonStyleSheet-","");if(-1==t.indexOf(",")){Kameleoon.Internals.runtime.headNode.removeChild(e.loadedCSSStyleSheet);e.loadedCSSStyleSheet=null}else e.loadedCSSStyleSheet.id="kameleoonStyleSheet-"+t.replace(new RegExp(e.id+",?"),"")}}sendKameleoonCustomEvent(e,t,n){try{let o=document.createEvent("CustomEvent");t.time=(new Date).getTime();o.initCustomEvent("Kameleoon::"+e,!1,!1,t);window.dispatchEvent(o);if(sessionStorage.getItem("kameleoonLightExtension")||Kameleoon.Internals.runtime.parameters.kameleoonLightExtension){t.type=n?n:t.type;window.kameleoonEvents=window.kameleoonEvents||[];window.kameleoonEvents.push(t)}}catch(e){}}setInterval(e,t,n,o){let a=window.setInterval((function(){Kameleoon.Utils.runProtectedFunction((function(){e()}),o)}),t);Kameleoon.Internals.runtime.intervalIds[a]=!0;if(n)e();return a}setTimeout(e,t,n){let o=window.setTimeout((function(){Kameleoon.Utils.runProtectedFunction((function(){e()}),n)}),t);Kameleoon.Internals.runtime.timeoutIds[o]=!0;return o}testEmptyMap(e){return 0==Object.keys(e).length}parseObjectToUrlParams(e){return Object.entries(e).map((e=>e[0]+"="+e[1])).join("&")}treatContainsSelector(e){let t={},n;function o(e,t){let n=!1;if(t.textContent&&-1!==t.textContent.indexOf(e))n=!0;return n}n=e.match(/:contains\(['"]([\s\S]+)['"]\)/);t.containText=n[1];t.newSelector=e.replace(n[0],"");if(""===t.newSelector)t.newSelector="*";t.check=o;return t}unobfuscateString(e){let t="";for(let n=0,o=e.length;n<o;n+=1)t+=String.fromCharCode(e[n].charCodeAt(0)-16);return t}}Utils.LOCAL_STORAGE_OBFUSCATED_KEYS={kameleoonData:!0,kameleoonSimulationVisitorData:!0};Utils.MAX_STORAGE_DAYS=365;class Browser{constructor(e){this.browsers=e}obtain(){let e=Kameleoon.Internals.runtime.Device.browser;if("Internet Explorer"==e||"Microsoft Edge"==e)e="Explorer";return e}obtainIndex(){let e=this.obtain()||"";let r=e.toUpperCase();for(let e in this.browsers)if(this.browsers[e].name.toUpperCase()==r)return parseInt(e);return null}}class CustomData{constructor(t){this.CUSTOM_DATA_CUTOFF=3*1e3;this.CUSTOM_DATA_INTERVAL=3*1e3;this.CUSTOM_DATA_RETRY_DELAY_BEFORE_CUT_OFF=100;this.MAX_INTERVAL_API_VISIT_REQUEST=15*60*1e3;this.MAX_NUMBER_REQUESTS_TO_API_VISIT=3;this.inheritVisitorScopeAndTrackVisitorDataFromServer=()=>{if(Kameleoon.Internals.runtime.Visitor.visits.length>1){const t=Kameleoon.Internals.runtime.Visitor.currentVisit.customData;const e=Kameleoon.Internals.runtime.Visitor.visits[Kameleoon.Internals.runtime.Visitor.visits.length-2].customData;for(const i in this.customData){const a=this.customData[i].scope;if("VISITOR"==a&&null==t[i]){const t=e[i];if(null!=t)this.register(parseInt(i),{value:t,overwrite:!0},!0)}}Kameleoon.Internals.runtime.Visitor.saveToStoredData()}};this.register=(t,e,i)=>{const a=this.customData[t];if(a){let n={};const s=e.value;if(null==s)return;const r=e.overwrite;if(i)n=s;else if(s instanceof Array){for(let t=0,e=s.length;t<e;++t)if(null!=s[t]&&(s[t].toString().length<=VisitEvent_CustomData.MAX_SUM_CUSTOM_DATA_VALUES_LENGTHES_IN_A_REQUEST||a.localOnly))n[s[t]]=1}else if(s.toString().length<=VisitEvent_CustomData.MAX_SUM_CUSTOM_DATA_VALUES_LENGTHES_IN_A_REQUEST||a.localOnly)n[s]=1;const o="LIST"==a.type||"COUNT_LIST"==a.type?r:!0;if(o||!Kameleoon.Utils.testEmptyMap(n)){Kameleoon.Utils.sendKameleoonCustomEvent.call(window,"CustomDataSet",{name:a.name,value:s});Kameleoon.Utils.sendKameleoonCustomEvent("Internals",{type:"customData/set",name:a.name,value:s});Kameleoon.Gatherer.track(VisitEvent_CustomData,{index:t,customData:a,overwrite:o,overwriteDefault:r,valueToAdd:n,value:s})}}};this.customDataVisitsRequest=t=>{};this.run=()=>{Kameleoon.Internals.runtime.Visitor.currentVisit.clearCustomDataPage();Kameleoon.Utils.clearInterval(this.intervalId);if(Kameleoon.Internals.runtime.Gatherer.startOfVisit)this.inheritVisitorScopeAndTrackVisitorDataFromServer();this.firstTimeCheck=(new Date).getTime();this.intervalId=Kameleoon.Utils.setInterval(this.obtain.bind(this),this.CUSTOM_DATA_RETRY_DELAY_BEFORE_CUT_OFF,!0);Kameleoon.Utils.setTimeout((()=>{Kameleoon.Utils.clearInterval(this.intervalId)}),this.CUSTOM_DATA_CUTOFF);Kameleoon.Utils.setInterval(this.obtain.bind(this),this.CUSTOM_DATA_INTERVAL,!1)};this.customData=t;Kameleoon.Internals.runtime.enableHistoryReconciliation=!1;for(const e in t)if(t[e].mappingIdentifier){Kameleoon.Internals.runtime.enableHistoryReconciliation=!0;break}}parseNumberValue(t,e){switch(t){case-2:return"true"===e;case-1:return e;default:return parseFloat(e)}}obtainParsedValue(t,e){const i=this.customData[t];switch(i.type){case"COUNT_LIST":const t=[];for(const i in e)t.push({value:i,count:e[i]});return t;case"LIST":const a=[];for(const t in e)a.push(t);return a;default:return this.parseNumberValue(i.format,Object.keys(e)[0])}}obtain(){for(const t in this.customData)if(!this.customData[t].treated){const e=parseInt(t);const i=this.obtainValueMap(e,this.customData[t]);if(i)this.register(e,i)}}obtainValueFromPath(t,e){return t.match(/[^'\]\[\.\"]+/gi).reduce(((t,e)=>t&&t[e]),e)}obtainValueMap(t,e){let i=null;if(null!=e&&!e.disabled)switch(e.method.toUpperCase()){case"GTM":if(window.dataLayer&&e.variableName)for(let t=0,a=window.dataLayer.length;t<a;++t){const a=this.obtainValueFromPath(e.variableName,window.dataLayer[t]);if(null!=a){i={value:a,overwrite:!1};break}}break;case"TC":if(window.tc_vars&&e.variableName){let t=this.obtainValueFromPath(e.variableName,window.tc_vars);if("string"==typeof t&&0==t.length)t=null;if(null!=t){i={value:t,overwrite:!1};break}}break;case"TEALIUM":if(window.utag&&window.utag.data&&e.variableName){let t=this.obtainValueFromPath(e.variableName,window.utag.data);if("string"==typeof t&&0==t.length)t=null;if(null!=t){i={value:t,overwrite:!1};break}}break;case"CUSTOM_CODE":i=Kameleoon.Utils.runProtectedScript(e.customEvalCode,"kameleoonCustomDataScript-"+t+".js");break;default:break}if(null!=i){e.treated=!0;const a=Kameleoon.Internals.runtime.Visitor.currentVisit.customData[t];const n=i.value;if(null!=n){const t=e.type;if("LIST"==t||"COUNT_LIST"==t||null==a||Object.keys(a)[0]!=n.toString()||Kameleoon.Internals.runtime.enableHistoryReconciliation&&e.mappingIdentifier&&null==Kameleoon.Internals.runtime.storedData.obtainField("Gatherer","visitsRequestSuccess"))return i}}return null}}class KeyPage{constructor(e){this.keyPages=e}obtainIndexes(){let e=[];for(let t in this.keyPages){let s=new RegExp(this.keyPages[t].relativeURLRegExp);if(s.test(Kameleoon.Utils.computeCurrentPageCleanAbsoluteURL())||s.test(Kameleoon.Utils.computeCurrentPageCleanRelativeURL()))e.push(parseInt(t))}if(0==e.length)e.push(null);return e}}class Language{constructor(){this.DEFAULT_LOCALE_LANGUAGE_TAG="en"}obtainLocaleTag(){let a=null;if(navigator&&navigator.language)a=navigator.language;return a?a:this.DEFAULT_LOCALE_LANGUAGE_TAG}}class OperatingSystem{constructor(e){this.oss=e}obtainIndex(){let e=this.obtain()||"";let s=e.toUpperCase();for(let e in this.oss)if(this.oss[e].name.toUpperCase()==s)return parseInt(e);return null}obtain(){let e=Kameleoon.Utils.bowser.parse(navigator.userAgent);switch(e.os.name){case"Windows Phone":case"iOS":case"Android":case"Linux":case"Windows":return e.os.name;case"macOS":return"Tablet"==Kameleoon.Internals.runtime.Device.type?"iOS":"Mac";default:return"Other"}}}class Referrer{constructor(e){this.referrers=e;this.referrer=document.referrer;let t=Kameleoon.Utils.readLocalData("kameleoonReferrer","COOKIE");if(t){this.referrer=t;Kameleoon.Utils.eraseLocalData("kameleoonReferrer",null,"COOKIE")}}obtainCorrected(e){switch(this.obtainType(e)){case 0:case 1:return null;default:return this.obtain()}}obtain(){return this.referrer}obtainDetectionMatches(e){let t=this.obtainDetectionPartMatches(e.method,e.parameters);if(e.and)t=t&&this.obtainDetectionPartMatches(e.andMethod,e.andParameters);return t}obtainDetectionPartMatches(e,t){switch(e.toUpperCase()){case"REFERRER_REGEX":return new RegExp(t).test(this.obtain());case"URL_REGEX":let e=new RegExp(t);return e.test(Kameleoon.Utils.computeCurrentPageCleanAbsoluteURL())||e.test(Kameleoon.Utils.computeCurrentPageCleanRelativeURL());default:try{return!0===Kameleoon.Utils.runProtectedScript(t)}catch(e){return!1}}}obtainIndexes(e){switch(this.obtainType(e)){case 0:case 1:return[0];default:let e=[];let t=Number.NEGATIVE_INFINITY;for(let r in Kameleoon.Internals.runtime.Gatherer.configuration.referrers){let n=Kameleoon.Internals.runtime.Gatherer.configuration.referrers[r];if(this.obtainMatches(n)){let a=n.priority;if(null==a)a=Number.NEGATIVE_INFINITY;if(a>=t){if(a>t){e=[];t=a}e.push(parseInt(r)+1)}}}if(0==e.length)e.push(null);return e}}obtainIsIgnored(e){let t=this.obtain();if(Kameleoon.Internals.runtime.Gatherer.configuration.directNoneReferrerOnlyFirst)if(""==t&&!e)return!0;let r=window.location.pathname;let n=Kameleoon.Internals.runtime.Gatherer.configuration.noReferrerPages.length;for(let e=0;e<n;e++)if(r==Kameleoon.Internals.runtime.Gatherer.configuration.noReferrerPages[e])return!0;return!1}obtainMatches(e){let t=e.detections;for(let e=0;e<t.length;e++)if(this.obtainDetectionMatches(t[e]))return!0;return!1}obtainType(e){if(this.obtainIsIgnored(e))return 0;if(Kameleoon.Internals.runtime.storedData.obtainField("Gatherer","startsOfVisitForCurrentPage")>1)return 1;return 3}}class StoredData{constructor(e){this.Gatherer={};this.Runtime={};this.Vars=Kameleoon.Utils.readLocalData("kameleoonVars","LS")||{};this.Visitor={};this.canSave=!1;if(e){let a="";if(e[Kameleoon.Internals.runtime.dataKeyName]){a=e[Kameleoon.Internals.runtime.dataKeyName];if(e.Kameleoon)Kameleoon.Utils.eraseLocalData("kameleoonData",null,"LS")}else if(e.kameleoonData)a=e.kameleoonData;if(Kameleoon.Internals.runtime.simulationMode)if(e.kameleoonDataSimulation||e.kameleoonSimulationVisitorData)a=e.kameleoonDataSimulation||e.kameleoonSimulationVisitorData;let t=Kameleoon.Utils.unobfuscateString(a);let i=t&&JSON.parse(t)||{};this.Gatherer=i.Gatherer||{};this.Runtime=i.Runtime||{};this.Vars=i.Vars||e.kameleoonVars||{};this.Visitor=i.Visitor||{}}else{let e=Kameleoon.Utils.readLocalData("kameleoonData","LS");if(Kameleoon.Internals.runtime.simulationMode){const a=Kameleoon.Utils.readLocalData("kameleoonDataSimulation","LS",!0);const t=Kameleoon.Utils.readLocalData("kameleoonSimulationVisitorData","LS",!0);if(a||t)e=a||t}if(e){this.Gatherer=e.Gatherer;this.Runtime=e.Runtime||{};this.Vars=e.Vars||this.Vars;this.Visitor=e.Visitor}}Kameleoon.Utils.eraseLocalData("kameleoonVars",null,"LS");for(let e in this.Vars)if(Kameleoon.Internals.runtime.pageStartTime>this.Vars[e].date)delete this.Vars[e];Kameleoon.Utils.setInterval((()=>{if(this.canSave){this.save(!0);this.canSave=!1}}),1e3);Kameleoon.Utils.addEventListener(window,Kameleoon.Internals.runtime.beforeUnloadEvent,(()=>{if(window.self!==window.top){let e=Kameleoon.Utils.readLocalData(Kameleoon.Internals.runtime.simulationMode?"kameleoonSimulationVisitorData":Kameleoon.Internals.runtime.dataKeyName,"LS");if(e&&e.Visitor&&this.Visitor&&this.Visitor.totalVisits<e.Visitor.totalVisits)this.update(e)}this.save(!0)}))}obtainField(e,a,t){return this[e][a]||t||null}resetForStartOfVisit(){this.Runtime={}}saveField(e,a,t){this[e][a]=t;this.save(!1)}save(e){if(e)Kameleoon.Utils.createLocalData(Kameleoon.Internals.runtime.simulationMode?"kameleoonSimulationVisitorData":Kameleoon.Internals.runtime.dataKeyName,this,Kameleoon.Internals.runtime.simulationMode?1/24:Utils.MAX_STORAGE_DAYS,null,"LS",!0);else this.canSave=!0}update(e){this.Gatherer=e.Gatherer||this.Gatherer;this.Runtime=e.Runtime||this.Runtime;this.Vars=e.Vars||this.Vars;this.Visitor=e.Visitor||this.Visitor}}class TimeZone{constructor(){}obtainId(){let t;try{t="undefined"!=typeof Intl&&Intl.DateTimeFormat().resolvedOptions?Intl.DateTimeFormat().resolvedOptions().timeZone:null}catch(e){t=null}return t}}class VisitEvent{constructor(e){this.eventType=e.type;this.visitEvent=e}track(e){let t=()=>{let t=new this.visitEvent(e);Kameleoon.Internals.runtime.Visitor.saveToStoredData();if((!e||!e.notTrack&&!t.notTrack)&&Kameleoon.Internals.configuration.track)Kameleoon.Internals.runtime.RequestManager.addRequest(t);Kameleoon.Internals.runtime.storedData.save(this.visitEvent.urgent)};if(!Kameleoon.Internals.runtime.Visitor.currentVisit.isVisitFinished())t();else if(this.eventType==VisitEvent_Activity.type&&Kameleoon.Internals.runtime.Gatherer.active){Kameleoon.Internals.runtime.Visitor=new Visitor;Kameleoon.Gatherer.track(VisitEvent_Page);Kameleoon.Gatherer.track(VisitEvent_StaticData);Kameleoon.Gatherer.CustomData.run();Kameleoon.Mentalist.run();Kameleoon.Internals.runtime.gathererRun=!0;t()}}}class VisitEvent_Main{constructor(t){this.obtainRequestData=()=>{let t="eventType="+this.eventType;for(let e in this){if("function"==typeof this[e]||VisitEvent_Main.NOT_TRACK_FIELD[e])continue;t+=`&${e}=${this.addValueParameter(this[e])}`}return t};this.addValueParameter=t=>{if("object"==typeof t)return encodeURIComponent(JSON.stringify(t));else if("string"==typeof t)return encodeURIComponent(t);return t};this.time=(new Date).getTime();this.nonce=Kameleoon.Utils.obtainRandomString(VisitEvent_Main.NONCE_LENGTH,VisitEvent_Main.HEXADECIMAL_ALPHABET)}}VisitEvent_Main.HEXADECIMAL_ALPHABET="0123456789ABCDEF";VisitEvent_Main.NONCE_LENGTH=16;VisitEvent_Main.NOT_TRACK_FIELD={eventType:1,time:1,notTrack:1,type:1,urgent:1};class VisitEvent_Activity extends VisitEvent_Main{constructor(){super();this.eventType=VisitEvent_Activity.type;this.clicks=Kameleoon.Internals.runtime.Gatherer.clicks;Kameleoon.Internals.runtime.Visitor.currentVisit.addActivity(this.time,Kameleoon.Internals.runtime.Gatherer.active);Kameleoon.Internals.runtime.Visitor.currentVisit.addNumberClicks(this.clicks);Kameleoon.Internals.runtime.Gatherer.active=!1;Kameleoon.Internals.runtime.Gatherer.clicks=0}static initialize(){let e=()=>{Kameleoon.Internals.runtime.Gatherer.active=!0};let t=()=>{e();Kameleoon.Internals.runtime.Gatherer.clicks++};Kameleoon.Utils.addEventListener(document,"mousemove",e,!1);Kameleoon.Utils.addEventListener(document,"scroll",e,!1);Kameleoon.Utils.addEventListener(document,"click",t,!1);Kameleoon.Utils.setInterval((()=>{if(Kameleoon.Internals.runtime.Gatherer.active)Kameleoon.Gatherer.track(this)}),this.ACTIVITY_TRACKING_INTERVAL,!0)}}VisitEvent_Activity.ACTIVITY_TRACKING_INTERVAL=15*1e3;VisitEvent_Activity.type="activity";VisitEvent_Activity.urgent=!1;class VisitEvent_AdBlocker extends VisitEvent_Main{constructor(){super();this.eventType=VisitEvent_AdBlocker.type;Kameleoon.Internals.runtime.Visitor.currentVisit.addAdBlocker()}}VisitEvent_AdBlocker.type="adBlocker";VisitEvent_AdBlocker.urgent=!1;class VisitEvent_Experiment extends VisitEvent_Main{constructor(t){super();this.eventType=VisitEvent_Experiment.type;this.id=t.id;this.variationId=t.variationId;this.notTrack=t.notTrack;if(null==this.variationId)this.notTrack=!0;Kameleoon.Internals.runtime.Visitor.currentVisit.addExperiment(this.time,this.id,this.variationId)}}VisitEvent_Experiment.type="experiment";VisitEvent_Experiment.urgent=!0;class VisitEvent_Personalization extends VisitEvent_Main{constructor(i){super();this.eventType=VisitEvent_Personalization.type;this.id=i.id;this.variationId=i.variationId;this.notTrack=i.notTrack;if(0==this.variationId&&i.unexpositionCause)this.unexpositionCause=i.unexpositionCause;Kameleoon.Internals.runtime.Visitor.currentVisit.addPersonalization(this.time,this.id,i.originalVariationId)}}VisitEvent_Personalization.type="personalization";VisitEvent_Personalization.urgent=!0;class VisitEvent_Conversions extends VisitEvent_Main{constructor(e){super();this.eventType=VisitEvent_Conversions.type;this.goalId=e.goalId;this.negative=!0===e.negative;let i,t=!1;let n=Kameleoon.Internals.runtime.storedData.obtainField("Gatherer","revenuesByGoalId",{});let s=n[this.goalId];if(this.negative)if(s&&s.length>0){i=s.splice(-1)[0];if(0==s.length)delete n[this.goalId]}else t=!0;else{i=e.revenue;if(isNaN(i))i=0;if(!s)s=[];s.push(i);n[this.goalId]=s.splice(-10)}this.revenue=i;if(!t){Kameleoon.Internals.runtime.storedData.saveField("Gatherer","revenuesByGoalId",n);Kameleoon.Internals.runtime.Visitor.currentVisit.addConversions(this.goalId,1,this.revenue,this.negative);}}}VisitEvent_Conversions.type="conversion";VisitEvent_Conversions.urgent=!0;class VisitEvent_CustomData extends VisitEvent_Main{constructor(t){super();this.eventType=VisitEvent_CustomData.type;this.index=t.index;this.overwrite=t.overwrite||!1;this.notTrack=t.value.length>VisitEvent_CustomData.MAX_SUM_CUSTOM_DATA_VALUES_LENGTHES_IN_A_REQUEST||t.customData.localOnly;this.valuesCountMap=t.valueToAdd;this.mappingIdentifier=1==t.customData.mappingIdentifier?"true":"false";Kameleoon.Internals.runtime.Visitor.currentVisit.addCustomData(this.index,this.valuesCountMap,this.overwrite);if("PAGE"===t.customData.scope)this.overwrite=t.overwriteDefault||!1}}VisitEvent_CustomData.MAX_SUM_CUSTOM_DATA_VALUES_LENGTHES_IN_A_REQUEST=1e3;VisitEvent_CustomData.type="customData";VisitEvent_CustomData.urgent=!0;class VisitEvent_Geolocation extends VisitEvent_Main{constructor(t){super();this.eventType=VisitEvent_Geolocation.type;this.city=t.city;this.country=t.country;this.latitude=t.latitude;this.longitude=t.longitude;this.postalCode=t.postalCode;this.region=t.region;Kameleoon.Internals.runtime.Visitor.currentVisit.addGeolocation(this.country,this.region,this.city,this.postalCode,this.latitude,this.longitude)}}VisitEvent_Geolocation.type="geolocation";VisitEvent_Geolocation.urgent=!1;class VisitEvent_MentalistPredictionSegmentTargeting extends VisitEvent_Main{constructor(e){super();this.eventType=VisitEvent_MentalistPredictionSegmentTargeting.type;this.targetingSegmentId=e.targetingSegmentId;this.goalIdToConversionProbability=[];let t=Kameleoon.Mentalist.computeGoalConversionProbabilityPredictionByGoalId(this.targetingSegmentId);for(let e in t)this.goalIdToConversionProbability.push([parseInt(e),t[e]]);let n=Kameleoon.Internals.runtime.storedData.obtainField("Gatherer","savedScoresFromMoments",{});let i=Kameleoon.Internals.configuration.targetingSegmentIdToGoalIdsToKcs||{};if(i[this.targetingSegmentId]||e.trackMentalistPrediction){for(let e in i[this.targetingSegmentId]){if(null==n[this.targetingSegmentId])n[this.targetingSegmentId]={};if(null==n[this.targetingSegmentId][e])n[this.targetingSegmentId][e]=t[e]}if(i[this.targetingSegmentId])Kameleoon.Utils.sendKameleoonCustomEvent.call(window,"ConversionScoreComputed",{segmentId:this.targetingSegmentId})}Kameleoon.Internals.runtime.storedData.saveField("Gatherer","savedScoresFromMoments",n)}}VisitEvent_MentalistPredictionSegmentTargeting.type="mentalistPredictionSegmentTargeting";VisitEvent_MentalistPredictionSegmentTargeting.urgent=!1;class VisitEvent_MentalistPredictionStartOfVisit extends VisitEvent_Main{constructor(t){super();this.eventType=VisitEvent_MentalistPredictionStartOfVisit.type;this.goalIdToConversionProbability=t.goalIdToConversionProbability}}VisitEvent_MentalistPredictionStartOfVisit.type="mentalistPredictionStartOfVisit";VisitEvent_MentalistPredictionStartOfVisit.urgent=!1;class VisitEvent_Page extends VisitEvent_Main{constructor(){super();this.eventType=VisitEvent_Page.type;const e=Kameleoon.Utils.computeCurrentPageCleanAbsoluteURL();const t=document.title;const r=Kameleoon.Utils.computeCurrentPageCanonicalURL();const i=Kameleoon.Gatherer.Referrer.obtainCorrected(Kameleoon.Internals.runtime.Gatherer.startOfVisit);this.href=e&&e.slice(0,Kameleoon.Gatherer.MAX_HREF_LENGTH_IN_A_REQUEST);this.title=t.slice(0,Kameleoon.Gatherer.MAX_PAGE_TITLE_LENGTH_IN_A_REQUEST);this.keyPagesIndices=Kameleoon.Gatherer.KeyPage.obtainIndexes();this.referrersIndices=Kameleoon.Gatherer.Referrer.obtainIndexes(Kameleoon.Internals.runtime.Gatherer.startOfVisit);if(r)this.canonicalHref=r;if(null!=i)this.referrerHref=i;if(Kameleoon.Internals.configuration.cleanHrefTracking){if(this.href)this.href=this.href.replace(/(\?|\#)(.*)/gi,"");if(this.referrerHref)this.referrerHref=this.referrerHref.replace(/(\?|\#)(.*)/gi,"")}Kameleoon.Internals.runtime.Visitor.currentVisit.addPage(this.time,e,this.keyPagesIndices,this.referrersIndices);Kameleoon.Internals.runtime.Visitor.currentVisit.addActivity(this.time,!0)}}VisitEvent_Page.type="page";VisitEvent_Page.urgent=!0;class VisitEvent_StaticData extends VisitEvent_Main{constructor(){super();this.eventType=VisitEvent_StaticData.type;this.obtainInfluences=()=>{let e=Kameleoon.Internals.runtime.Visitor.visits;let t=Kameleoon.Internals.runtime.Visitor.currentVisit.startDate;let i={experiments:{},personalizations:{}};let n=e=>{for(let t in e)if(e[t][1]<0||"-1"==t||null==e[t][0]||"null"==e[t][0])delete e[t];return e};e.forEach((e=>{for(let n in e.ExperimentActivations){let s=e.ExperimentActivations[n];if(s.influence){let e=s.influence-(t-s.times.slice(-1)[0]);i.experiments[n]=[parseInt(s.associatedVariationID),e]}}for(let n in e.PersonalizationActivations){let s=e.PersonalizationActivations[n];if(s.influence){let e=s.influence-(t-s.times.slice(-1)[0]);i.personalizations[n]=[1,e]}}}));this.experimentInfluences=n(i.experiments);this.personalizationInfluences=n(i.personalizations)};this.timeSincePreviousVisit=Kameleoon.Internals.runtime.Visitor.obtainTimeSincePreviousVisit();this.browser=Kameleoon.Gatherer.Browser.obtain();this.browserIndex=Kameleoon.Gatherer.Browser.obtainIndex();this.browserVersion=Kameleoon.Internals.runtime.Device.browserVersion;this.os=Kameleoon.Gatherer.OperatingSystem.obtain();this.osIndex=Kameleoon.Gatherer.OperatingSystem.obtainIndex();this.windowWidth=Kameleoon.Internals.runtime.Device.windowWidth;this.windowHeight=Kameleoon.Internals.runtime.Device.windowHeight;this.screenWidth=Kameleoon.Internals.runtime.Device.screenWidth;this.screenHeight=Kameleoon.Internals.runtime.Device.screenHeight;this.timeZoneId=Kameleoon.Gatherer.TimeZone.obtainId();this.localeLanguageTag=Kameleoon.Gatherer.Language.obtainLocaleTag();this.deviceType=Kameleoon.Internals.runtime.Device.type.toLocaleUpperCase();this.visitNumber=Kameleoon.Internals.runtime.Visitor.currentVisit.visitNumber;this.obtainInfluences()}}VisitEvent_StaticData.type="staticData";VisitEvent_StaticData.urgent=!0;class VisitEvent_TargetingSegments extends VisitEvent_Main{constructor(t){super();this.eventType=VisitEvent_TargetingSegments.type;this.id=t.id;Kameleoon.Internals.runtime.Visitor.currentVisit.addTargetingSegment(this.time,this.id)}}VisitEvent_TargetingSegments.type="targetingSegment";VisitEvent_TargetingSegments.urgent=!1;class BitVectorUtils{}BitVectorUtils.safeLimitedBitIndex=(t,e)=>{if(null==e||e>=t)return t;return e};BitVectorUtils.computeVectorFillFrom=(t,e,i,r)=>{BitVectorUtils.clearVectorFrom(i,t,r);BitVectorUtils.addInVectorFrom(i,t,e,r)};BitVectorUtils.addInVectorFrom=(t,e,i,r)=>{t[r+BitVectorUtils.safeLimitedBitIndex(e,i)]=1};BitVectorUtils.clearVectorFrom=(t,e,i)=>{for(let r=0;r<=e;r++)t[i+r]=0};BitVectorUtils.initBitIndexCounts=t=>{let e=[];for(let i=0;i<=t;i++)e[i]=0;return e};BitVectorUtils.incrementBitIndexCount=(t,e,i)=>{i[BitVectorUtils.safeLimitedBitIndex(t,e)]++};class DataUtils{}DataUtils.writeCategorySetInVectorFrom=(t,e,r,l,o)=>{BitVectorUtils.clearVectorFrom(l,e,o);for(let i=0,n=t.length;i<n;++i)BitVectorUtils.addInVectorFrom(l,e,DataUtils.computeCategoryBitIndex(t[i],r),o)};DataUtils.writeCategoryCountsInVectorFrom=(t,e,r,l,o)=>{let i=BitVectorUtils.initBitIndexCounts(e);for(let l=0,o=t.length;l<o;++l){let o=t[l];for(let t=0,l=o.length;t<l;++t)BitVectorUtils.incrementBitIndexCount(e,DataUtils.computeCategoryBitIndex(o[t],r),i)}for(let t=0;t<=e;t++){l[o]=i[t];o++}};DataUtils.computeCategoryBitIndex=(t,e)=>{if(null==t)return null;let r=e[t];if(null==r)return null;return r};class Learner{}Learner.computeProbabilities=(e,a,r)=>{Learner.prepareEquals(e,a,r);return Learner.computeLayerSynapse(e.inputDimension,e.outputDimension,e.weights,e.bias,Learner.logistic,a)};Learner.prepareEquals=(e,a,r)=>{if(e.standarizeInputs)Learner.standarizeEquals(e,a,r);else Learner.scaleEquals(e,a,r)};Learner.standarizeEquals=(e,a,r)=>{let i=Kameleoon.Internals.configuration.MentalistFeatures.maxAbsoluteValueAfterStandardization;for(let n=0;n<e.inputDimension;n++)if(0==e.beforeDeviation[n])a[n]=0;else{let t=!0===r[n]||isNaN(a[n])||!isFinite(a[n])?e.beforeMean[n]:a[n];a[n]=t-e.beforeMean[n];a[n]/=e.beforeDeviation[n];a[n]=Math.min(a[n],i);a[n]=Math.max(a[n],-i)}};Learner.scaleEquals=(e,a,r)=>{for(let i=0;i<e.inputDimension;i++){let n=!0===r[i]||isNaN(a[i])||!isFinite(a[i])?e.beforeMean[i]:a[i];if(0==e.beforeDistance[i])if(n==e.beforeMin[i])a[i]=e.afterMiddle;else if(n<e.beforeMin[i])a[i]=e.afterMin;else a[i]=e.afterMax;else a[i]=e.afterMin+e.afterDistance/e.beforeDistance[i]*(n-e.beforeMin[i])}};Learner.computeLayerSynapse=(e,a,r,i,n,t)=>{let s=[];for(let o=0;o<a;o++){let a=0;for(let i=0;i<e;i++)a+=r[o][i]*t[i];s[o]=n(a+i[o])}return s};Learner.logistic=e=>1/(1+Math.exp(-e));class PreviousVisits{constructor(s){this.timesStartedVisits=[];this.timesStartedPages=[];this.timesReferrers=[];this.keyPages=[];this.referrers=[];this.clicks=[];this.temperatureVisits=[];this.humidityVisits=[];this.pressureVisits=[];this.windSpeedVisits=[];this.cloudinessVisits=[];this.customDataVisits=[];this.conversions={};for(let e=0,t=s.length;e<t;++e){let t=s[e];this.timesStartedVisits.push(t.startDate);this.timesStartedPages=this.timesStartedPages.concat(t.obtainTimesStartedPages());this.timesReferrers=[];this.keyPages=[];this.referrers=[];t.pages.forEach((s=>{this.keyPages.push(s.keyPagesMatched);if(s.referrersMatched.length>0){this.timesReferrers.push(s.timestamp);this.referrers.push(s.referrersMatched)}}));for(let s in t.conversions){let e=t.conversions[s].count;let i=t.conversions[s].revenue;if(this.conversions[s]){this.conversions[s].count+=e;this.conversions[s].revenue+=i}else this.conversions[s]={count:e,revenue:i}}this.clicks.push(t.clicks);this.temperatureVisits.push(t.Weather.temperature);this.humidityVisits.push(t.Weather.humidity);this.pressureVisits.push(t.Weather.pressure);this.windSpeedVisits.push(t.Weather.windSpeed);this.cloudinessVisits.push(t.Weather.cloudiness);this.customDataVisits.push(t.customData)}}}class VisitVectorizationUtils{}VisitVectorizationUtils.NUMBER_LAST_KEY_PAGES=3;VisitVectorizationUtils.NUMBER_LAST_REFERRERS=3;VisitVectorizationUtils.computeVector=(e,t,i,n,l,r,a)=>{let o=Kameleoon.Internals.configuration.MentalistFeatures;let s=Kameleoon.Internals.configuration.MentalistLearner;let u=[];let c=0;VisitVectorizationUtils.PreviousVisitsVectorizationUtils.computeVectorFillFrom(t,r,a,u,i,c);c+=(null!=r?s.experiments[r]:null!=a?s.targetingSegments[a]:s).previousVisitsHistoryVectorDimension;if(l){VisitVectorizationUtils.VisitVectorizationUtils.computeVectorFillFrom(e,r,a,u,i,c);c+=(null!=r?s.experiments[r]:null!=a?s.targetingSegments[a]:s).visitHistoryVectorDimension}if(n){u[c]=Kameleoon.Internals.runtime.Visitor.obtainTimeSincePreviousVisit();c++;u[c]=e.visitNumber;c++;DataUtils.writeCategorySetInVectorFrom(Kameleoon.Internals.runtime.storedData.obtainField("Runtime","landingKeyPagesIndices"),o.keyPages.length,VisitVectorizationUtils.computeIndexByCategory(o.keyPages),u,c);c+=o.keyPages.length+1;DataUtils.writeCategorySetInVectorFrom(Kameleoon.Internals.runtime.storedData.obtainField("Runtime","firstReferrersIndices"),o.referrers.length,VisitVectorizationUtils.computeIndexByCategory(o.referrers),u,c);c+=o.referrers.length+1;DataUtils.writeCategorySetInVectorFrom([null],o.timeZoneGroups.length,VisitVectorizationUtils.computeIndexByCategory(o.timeZoneGroups),u,c);c+=o.timeZoneGroups.length+1;BitVectorUtils.computeVectorFillFrom(o.languages.length,DataUtils.computeCategoryBitIndex(null,VisitVectorizationUtils.computeIndexByCategory(o.languages)),u,c);c+=o.languages.length+1;BitVectorUtils.computeVectorFillFrom(o.browsers.length,DataUtils.computeCategoryBitIndex(Kameleoon.Gatherer.Browser.obtainIndex(),VisitVectorizationUtils.computeIndexByCategory(o.browsers)),u,c);c+=o.browsers.length+1;let t=e.Device.browserVersion;if(isNaN(t)||!isFinite(t)||t<0||t>=1e3)t=null;if(null==t)i[c]=!0;else u[c]=t;c++;u[c]="DESKTOP"!=e.Device.type?1:0;c++;BitVectorUtils.computeVectorFillFrom(o.oss.length,DataUtils.computeCategoryBitIndex(Kameleoon.Gatherer.OperatingSystem.obtainIndex(),VisitVectorizationUtils.computeIndexByCategory(o.oss)),u,c);c+=o.oss.length+1;let n=e.Device.windowWidth;if(null==n)n=e.Device.screenWidth;if(n<0||n>=1e4)n=null;if(null==n)i[c]=!0;else u[c]=n;c++;let l=e.Device.windowHeight;if(null==l)l=e.Device.screenHeight;if(l<0||l>=1e4)l=null;if(null==l)i[c]=!0;else u[c]=l;c++;let r=e.Device.screenWidth;if(null==r)r=e.Device.windowWidth;if(r<0||r>=1e4)r=null;if(null==r)i[c]=!0;else u[c]=r;c++;let a=e.Device.screenHeight;if(null==a)a=e.Device.windowHeight;if(a<0||a>=1e4)a=null;if(null==a)i[c]=!0;else u[c]=a;c++;u[c]=!0===navigator.javaEnabled()?1:0;c++}return u};VisitVectorizationUtils.computeInputGoalIds=(e,t)=>{let i=Kameleoon.Internals.configuration.MentalistFeatures;return(null!=e?i.experiments[e]:null!=t?i.targetingSegments[t]:i).inputGoalIds};VisitVectorizationUtils.CUSTOM_DATA_BOOLEAN_VALUE_VECTOR_PARSER={parse:e=>{switch(e){case"true":return[1];case"false":return[0];default:return null}}};VisitVectorizationUtils.CUSTOM_DATA_SCALAR_VALUE_VECTOR_PARSER={parse:e=>{let t=parseFloat(e);if(isNaN(t)||!isFinite(t))return null;return[t]}};VisitVectorizationUtils.CUSTOM_DATA_CATEGORY_VALUE_VECTOR_PARSER={parse:(e,t)=>{let i=parseInt(e);if(isNaN(i)||i<0||i>=t)return null;let n;switch(t){case 1:case 2:n=[i];break;default:n=[];for(let e=0;e<t;e++)n[e]=0;n[i]=1;break}return n}};VisitVectorizationUtils.computeCustomDataBooleanValueVectorOnlineMeanAndDeviation=(e,t)=>{let i=new OnlineMeanAndDeviation(1);for(let n=0,l=e.length;n<l;++n){let l=e[n][t];if(null!=l)for(let e in l){let t=VisitVectorizationUtils.CUSTOM_DATA_BOOLEAN_VALUE_VECTOR_PARSER.parse(e);if(null!=t)i.update(t,l[e])}}return 0==i.nbUpdates[0]?null:i};VisitVectorizationUtils.computeCustomDataScalarValueVectorOnlineMeanAndDeviation=(e,t)=>{let i=new OnlineMeanAndDeviation(1);for(let n=0,l=e.length;n<l;++n){let l=e[n][t];if(null!=l)for(let e in l){let t=VisitVectorizationUtils.CUSTOM_DATA_SCALAR_VALUE_VECTOR_PARSER.parse(e);if(null!=t)i.update(t,l[e])}}return 0==i.nbUpdates[0]?null:i};VisitVectorizationUtils.computeCustomDataCategoryValueVectorOnlineMeanAndDeviation=(e,t,i)=>{let n;switch(i){case 1:case 2:n=1;break;default:n=i;break}let l=new OnlineMeanAndDeviation(n);for(let n=0,r=e.length;n<r;++n){let r=e[n][t];if(null!=r)for(let e in r){let t=VisitVectorizationUtils.CUSTOM_DATA_CATEGORY_VALUE_VECTOR_PARSER.parse(e,i);if(null!=t)l.update(t,r[e])}}return 0==l.nbUpdates[0]?null:l};VisitVectorizationUtils.computeIndexByCategory=e=>{let t={};let i=0;for(let n=0,l=e.length;n<l;++n){t[e[n]]=i;i++}return t};VisitVectorizationUtils.VisitVectorizationUtils={computeVectorFillFrom:(e,t,i,n,l,r)=>{let a=Kameleoon.Internals.configuration.MentalistFeatures;let o=OnlineMeanAndDeviation.createFromDifferences(e.obtainTimesStartedPages(),!1,!0,!0);let s=[];let u=[];let c=[];e.pages.forEach((function(e){s.push(e.keyPagesMatched);if(e.referrersMatched.length>0){u.push(e.referrersMatched);c.push(e.timestamp)}}));let V=OnlineMeanAndDeviation.createFromDifferences(c,!1,!0,!0);let m=VisitVectorizationUtils.computeIndexByCategory(a.referrers);let g=VisitVectorizationUtils.computeIndexByCategory(a.keyPages);n[r]=0;r++;for(let e=0;e<VisitVectorizationUtils.NUMBER_LAST_REFERRERS;e++){if(e<u.length)DataUtils.writeCategorySetInVectorFrom(u[u.length-1-e],a.referrers.length,m,n,r);else BitVectorUtils.clearVectorFrom(n,a.referrers.length,r);r+=a.referrers.length+1}DataUtils.writeCategoryCountsInVectorFrom(u,a.referrers.length,m,n,r);r+=a.referrers.length+1;n[r]=u.length;r++;n[r]=V.mean[0];r++;n[r]=V.deviation[0];r++;for(let e=0;e<VisitVectorizationUtils.NUMBER_LAST_KEY_PAGES;e++){if(e<s.length)DataUtils.writeCategorySetInVectorFrom(s[s.length-1-e],a.keyPages.length,g,n,r);else BitVectorUtils.clearVectorFrom(n,a.keyPages.length,r);r+=a.keyPages.length+1}DataUtils.writeCategoryCountsInVectorFrom(s,a.keyPages.length,g,n,r);r+=a.keyPages.length+1;n[r]=e.obtainPageNumberViews();r++;n[r]=o.mean[0];r++;n[r]=o.deviation[0];r++;n[r]=0;r+=1;n[r]=0;r++;n[r]=0;r++;n[r]=0;r++;n[r]=0;r++;n[r]=0;r++;n[r]=0;r++;n[r]=0;r++;l[r]=!0;r++;if(null==e.clicks)l[r]=!0;else n[r]=e.clicks;r++;if(null==e.Weather.temperature)l[r]=!0;else n[r]=e.Weather.temperature;r++;if(null==e.Weather.humidity)l[r]=!0;else n[r]=e.Weather.humidity;r++;if(null==e.Weather.pressure)l[r]=!0;else n[r]=e.Weather.pressure;r++;if(null==e.Weather.windSpeed)l[r]=!0;else n[r]=e.Weather.windSpeed;r++;if(null==e.Weather.cloudiness)l[r]=!0;else n[r]=e.Weather.cloudiness;r++;let f=[e.customData];for(let e=0,t=a.customData.length;e<t;++e){let t=a.customData[e];let i=a.numberValuesByCustomDatum[t];if(-1!=i){let e;switch(i){case-2:e=VisitVectorizationUtils.computeCustomDataBooleanValueVectorOnlineMeanAndDeviation(f,t);if(null==e){l[r]=!0;r++}else{n[r]=e.mean[0];r++}break;case 0:e=VisitVectorizationUtils.computeCustomDataScalarValueVectorOnlineMeanAndDeviation(f,t);if(null==e){l[r]=!0;r++}else{n[r]=e.mean[0];r++}break;case 1:case 2:e=VisitVectorizationUtils.computeCustomDataCategoryValueVectorOnlineMeanAndDeviation(f,t,i);if(null==e){l[r]=!0;r++}else{n[r]=e.mean[0];r++}break;default:e=VisitVectorizationUtils.computeCustomDataCategoryValueVectorOnlineMeanAndDeviation(f,t,i);if(null==e)for(let e=0;e<i;e++){l[r]=!0;r++}else for(let t=0;t<i;t++){n[r]=e.mean[t];r++}break}}}let d=VisitVectorizationUtils.computeInputGoalIds(t,i);for(let t=0,i=d.length;t<i;++t){let i=d[t];let l=e.conversions[i];n[r]=null==l?0:l.count;r++}for(let t=0,i=d.length;t<i;++t){let i=d[t];let l=e.conversions[i];n[r]=null==l?0:l.revenue;r++}}};VisitVectorizationUtils.PreviousVisitsVectorizationUtils={computeVectorFillFrom:(e,t,i,n,l,r)=>{let a=Kameleoon.Internals.configuration.MentalistFeatures;let o=OnlineMeanAndDeviation.createFromDifferences(e.timesStartedVisits,!1,!0,!0);let s=OnlineMeanAndDeviation.createFromDifferences(e.timesStartedPages,!1,!0,!0);let u=OnlineMeanAndDeviation.createFromDifferences(e.timesReferrers,!1,!0,!0);let c=[];for(let t=0,i=e.clicks.length;t<i;++t){let i=e.clicks[t];if(null!=i)c.push(i)}let V=0==c.length?null:OnlineMeanAndDeviation.createFromValues(c);let m=VisitVectorizationUtils.computeIndexByCategory(a.referrers);let g=VisitVectorizationUtils.computeIndexByCategory(a.keyPages);for(let t=0;t<VisitVectorizationUtils.NUMBER_LAST_REFERRERS;t++){if(t<e.referrers.length)DataUtils.writeCategorySetInVectorFrom(e.referrers[e.referrers.length-1-t],a.referrers.length,m,n,r);else BitVectorUtils.clearVectorFrom(n,a.referrers.length,r);r+=a.referrers.length+1}DataUtils.writeCategoryCountsInVectorFrom(e.referrers,a.referrers.length,m,n,r);r+=a.referrers.length+1;n[r]=e.referrers.length;r++;n[r]=u.mean[0];r++;n[r]=u.deviation[0];r++;n[r]=e.timesStartedVisits.length;r++;n[r]=o.mean[0];r++;n[r]=o.deviation[0];r++;for(let t=0;t<VisitVectorizationUtils.NUMBER_LAST_KEY_PAGES;t++){if(t<e.keyPages.length)DataUtils.writeCategorySetInVectorFrom(e.keyPages[e.keyPages.length-1-t],a.keyPages.length,g,n,r);else BitVectorUtils.clearVectorFrom(n,a.keyPages.length,r);r+=a.keyPages.length+1}DataUtils.writeCategoryCountsInVectorFrom(e.keyPages,a.keyPages.length,g,n,r);r+=a.keyPages.length+1;n[r]=e.timesStartedPages.length;r++;n[r]=s.mean[0];r++;n[r]=s.deviation[0];r++;n[r]=0;r+=1;let f=VisitVectorizationUtils.computeInputGoalIds(t,i);for(let t=0,i=f.length;t<i;++t){let i=f[t];let l=e.conversions[i];n[r]=null==l?0:l.revenue;r++}for(let t=0,i=f.length;t<i;++t){let i=f[t];let l=e.conversions[i];n[r]=null==l?0:l.revenue;r++}n[r]=0;r++;n[r]=0;r++;n[r]=0;r++;n[r]=0;r++;n[r]=0;r++;n[r]=0;r++;n[r]=0;r++;l[r]=!0;r++;l[r]=!0;r++;if(null==V){l[r]=!0;r++;l[r]=!0;r++}else{n[r]=V.mean[0];r++;n[r]=V.deviation[0];r++}let d;c=[];for(let t=0,i=e.temperatureVisits.length;t<i;++t){let i=e.temperatureVisits[t];if(null!=i)c.push(i)}d=0==c.length?null:OnlineMeanAndDeviation.createFromValues(c);if(null==d){l[r]=!0;r++;l[r]=!0;r++}else{n[r]=d.mean[0];r++;n[r]=d.deviation[0];r++}c=[];for(let t=0,i=e.humidityVisits.length;t<i;++t){let i=e.humidityVisits[t];if(null!=i)c.push(i)}d=0==c.length?null:OnlineMeanAndDeviation.createFromValues(c);if(null==d){l[r]=!0;r++;l[r]=!0;r++}else{n[r]=d.mean[0];r++;n[r]=d.deviation[0];r++}c=[];for(let t=0,i=e.pressureVisits.length;t<i;++t){let i=e.pressureVisits[t];if(null!=i)c.push(i)}d=0==c.length?null:OnlineMeanAndDeviation.createFromValues(c);if(null==d){l[r]=!0;r++;l[r]=!0;r++}else{n[r]=d.mean[0];r++;n[r]=d.deviation[0];r++}c=[];for(let t=0,i=e.windSpeedVisits.length;t<i;++t){let i=e.windSpeedVisits[t];if(null!=i)c.push(i)}d=0==c.length?null:OnlineMeanAndDeviation.createFromValues(c);if(null==d){l[r]=!0;r++;l[r]=!0;r++}else{n[r]=d.mean[0];r++;n[r]=d.deviation[0];r++}c=[];for(let t=0,i=e.cloudinessVisits.length;t<i;++t){let i=e.cloudinessVisits[t];if(null!=i)c.push(i)}d=0==c.length?null:OnlineMeanAndDeviation.createFromValues(c);if(null==d){l[r]=!0;r++;l[r]=!0;r++}else{n[r]=d.mean[0];r++;n[r]=d.deviation[0];r++}let h=e.customDataVisits;for(let e=0,t=a.customData.length;e<t;++e){let t=a.customData[e];let i=a.numberValuesByCustomDatum[t];if(-1!=i){let e;switch(i){case-2:e=VisitVectorizationUtils.computeCustomDataBooleanValueVectorOnlineMeanAndDeviation(h,t);if(null==e){l[r]=!0;r++;l[r]=!0;r++}else{n[r]=e.mean[0];r++;n[r]=e.deviation[0];r++}break;case 0:e=VisitVectorizationUtils.computeCustomDataScalarValueVectorOnlineMeanAndDeviation(h,t);if(null==e){l[r]=!0;r++;l[r]=!0;r++}else{n[r]=e.mean[0];r++;n[r]=e.deviation[0];r++}break;case 1:case 2:e=VisitVectorizationUtils.computeCustomDataCategoryValueVectorOnlineMeanAndDeviation(h,t,i);if(null==e){l[r]=!0;r++;l[r]=!0;r++}else{n[r]=e.mean[0];r++;n[r]=e.deviation[0];r++}break;default:e=VisitVectorizationUtils.computeCustomDataCategoryValueVectorOnlineMeanAndDeviation(h,t,i);if(null==e)for(let e=0;e<i;e++){l[r]=!0;r++;l[r]=!0;r++}else for(let t=0;t<i;t++){n[r]=e.mean[t];r++;n[r]=e.deviation[t];r++}break}}}}};class CommandQueue{constructor(e,o){this.executeCommand=e=>{try{if(e.command)e=e.command;if("function"===typeof e)e();else{let o=e[0];let s=o.split(".");let m;let t;if("Kameleoon"!=s[0]){m=Kameleoon.API;t=Kameleoon.API[s[0]]}else t=Kameleoon.API[s[2]];s.forEach((e=>{if(null==m)m=window[e];else m=m[e]}));m.apply(t,Array.prototype.slice.call(e,1))}}catch(e){console.log(e)}};this.commands=e&&e.forEach?e:[];this.commands.push=e=>{if("IMMEDIATE"==o)e.level==o?this.executeCommand(e):this.commands.unshift(e);else this.executeCommand(e)};let s=[];if("IMMEDIATE"==o)this.commands.forEach(((e,o)=>{if("IMMEDIATE"==e.level){s.push(e);this.commands.splice(o,1)}}));else{this.commands.forEach((e=>{s.push(e)}));this.commands.splice(0,this.commands.length)}s.forEach(this.executeCommand);return this.commands}}class Actions{constructor(){this.associateActionAndVariation=(e,n,i)=>{let o=!0;let t=!0;if("REGISTERED_VARIATION"==i)t=!1;if("DISPLAYED_VARIATION"==i)o=!1;if(null===n)e.trackingPerformed=!0;const a=Kameleoon.Internals.runtime.variations.filter((e=>e.id==n))[0];let s="Reference";if(e&&e.variations)e.variations.forEach((function(e,i){if(e.id&&e.name&&e.id==n)s=e.name}));const r=e.associatedVariation;if(e&&r&&n==r.id)s=r.name;if(e&&o)e.associatedVariation={id:n,name:s};if(e&&t&&!e.displayedVariation)e.associationMade=!1;if(a){if(e&&(Kameleoon.Internals.runtime.simulationMode&&-1==e.id||!e.associationMade)){if(o){e.associatedVariation=a;e.associationMade=!0}a.actionId=e.id;if(t)e.displayedVariation=new Variation(a)}}else{e.displayedVariation={id:n,name:s};}}}checkCapping(e,n,i,o,t){if(null!=o.expositionFrequencySameVisit&&Kameleoon.Internals.runtime.Visitor.obtainActionNumberActivations(n,i,null,t,!0,!1,!1,e)>=o.expositionFrequencySameVisit||null!=o.expositionFrequencySameVisitor&&null!=o.expositionFrequencySameVisitorDelaySeconds&&Kameleoon.Internals.runtime.Visitor.obtainActionNumberActivations(n,i,t-1e3*o.expositionFrequencySameVisitorDelaySeconds,t,!0,!0,!1,e)>=o.expositionFrequencySameVisitor||o.cappingPerVisitorNumberExpositions&&Kameleoon.Internals.runtime.Visitor.obtainActionNumberActivations(n,i,null,t,!0,!0,!1,e)>=o.expositionFrequencySameVisitorMax||o.cappingPerVisitorNumberExposedVisits&&Kameleoon.Internals.runtime.Visitor.obtainActionNumberActivations(n,i,null,null,!0,!0,!0,e)>=o.exposedVisitsSameVisitorMax||o.cappingPerVisitorConvertGoal&&Kameleoon.Internals.runtime.Visitor.obtainNumberConversions(o.cappingPerVisitorGoalId)>0||null!=o.expositionFrequencyDelaySecondsBetweenTwoExpositions&&Kameleoon.Internals.runtime.Visitor.obtainActionNumberActivations(n,i,t-1e3*o.expositionFrequencyDelaySecondsBetweenTwoExpositions,t,!0,!0,!1,e)>=1)return!1;return!0}checkActionConsent(e){if(e.experimentAction){if(!Kameleoon.Internals.runtime.Consent.AB_TESTING){if(null==Kameleoon.Internals.runtime.Consent.AB_TESTING){if("ALL"==Kameleoon.Internals.configuration.beforeAbtestConsent)return!0;if("PARTIALLY"==Kameleoon.Internals.configuration.beforeAbtestConsent&&e.technical)return!0}else if(e.technical&&"RUN"==Kameleoon.Internals.configuration.abtestConsentOptout)return!0;return!1}}else if(!Kameleoon.Internals.runtime.Consent.PERSONALIZATION){if(null==Kameleoon.Internals.runtime.Consent.PERSONALIZATION){if("ALL"==Kameleoon.Internals.configuration.beforePersonalizationConsent)return!0;if("PARTIALLY"==Kameleoon.Internals.configuration.beforePersonalizationConsent&&e.technical)return!0}else if(e.technical&&"RUN"==Kameleoon.Internals.configuration.personalizationConsentOptout)return!0;return!1}return!0}checkActionsTargeting(e){Kameleoon.Internals.runtime.Campaigns.obtainCampaignsList("personalizations").forEach((e=>{e.previousExposition=e.exposition}));const n=[];for(let i=0,o=e.length;i<o;++i){const o=e[i];if(!this.checkActionConsent(o)||o.blocked||o.featureFlag)continue;if(null==o.numberTargetingCheckings)o.numberTargetingCheckings=0;if(Kameleoon.Targeting.checkIfTargetingMustBeComputed(o.targeting,o.rescheduleTargeting||0==o.numberTargetingCheckings,!o.experimentAction&&"CUMULATIVE_WEIGHT"==o.checkConditionsRule))n.push(o)}e=n;for(let n=0,i=e.length;n<i;++n){const i=e[n];if(!0===i.forceTargeting)i.targeting=!0;else{const e=!i.experimentAction&&"CUMULATIVE_WEIGHT"==i.personalizationCheckConditionsRule;const n=Kameleoon.Targeting.checkTree(i,i.targetingSegment?i.targetingSegment.tree:null,e,i.targetingSegment||null);if(e)switch(i.microtargetingMatchType){case"GREATER":i.targeting=n.weight>(i.cumulativeWeightOfConditions||0);break;case"EQUAL":i.targeting=n.weight==(i.cumulativeWeightOfConditions||0);break;case"LOWER":i.targeting=n.weight<i.cumulativeWeightOfConditions;break}else i.targeting=n.targeting;i.rescheduleTargeting=n.rescheduleTargeting;i.numberTargetingCheckings++}}const i=[];for(let n=0,o=e.length;n<o;++n){const o=e[n];if(!o.experimentAction)if(!0===o.targeting)i.push(o);else o.exposition=!1}const o=new Date;const t=o.getTime();for(let e=0,n=i.length;e<n;++e){const n=i[e];if(void 0!==n.forceExposition){n.exposition=n.forceExposition;if(!1===n.exposition)n.notExposedReason="SIMULATION"}else{n.exposition=!0;if(!0===n.exposition&&(!Kameleoon.Internals.runtime.simulationMode||null!=Kameleoon.Internals.runtime.simulationModeData&&null!=Kameleoon.Internals.runtime.simulationModeData.experiments)&&!Kameleoon.Internals.runtime.personalizationsActive){n.exposition=!1;n.notExposedReason="GLOBAL_EXCLUSION"}if(!0===n.exposition&&n.globalCappingNumberVisitors&&n.numberVisitorsExposed>=n.maxNumberVisitorsExposed){n.exposition=!1;n.notExposedReason="PERSONALIZATION_CAPPING"}if(!0===n.exposition&&!Kameleoon.Internals.runtime.simulationMode){n.exposition=n.checkCustomExpositionRate();if(!1===n.exposition)n.notExposedReason="PERSONALIZATION_EXCLUSION"}if(!0===n.exposition&&!this.checkCapping(!1,n.id,1,n,t)){n.exposition=!1;n.notExposedReason="VISITOR_CAPPING"}}}let a={};Kameleoon.Internals.runtime.Campaigns.obtainCampaignsList("personalizations").forEach((function(e){if(e.exposition){const n=e.configuration;const i=a[n];const o=e.priority;if(null==i||o>i)a[n]=o}}));let s={};for(let n=0,i=e.length;n<i;++n){const i=e[n];if(!i.experimentAction&&!0===i.exposition){const e=i.configuration;const n=a[e];const o=i.priority;if(null==n||o>=n){if(null==s[e]||o>n)s[e]=[];s[e].push(i.id)}}}a=null;for(let e=0,n=i.length;e<n;++e){const n=i[e];if(!0===n.exposition&&!0!==n.forceExposition)if(s[n.configuration]&&-1==s[n.configuration].indexOf(n.id)){n.exposition=!1;n.notExposedReason="PRIORITY"}}s=null;const r=[];for(let n=0,i=e.length;n<i;++n){const i=e[n];if(!1===i.targeting||!i.experimentAction&&!0===i.targeting&&!1===i.exposition){this.associateActionAndVariation(i,0,"DISPLAYED_VARIATION");Kameleoon.Utils.removeCSSStyleSheet(i)}if(Kameleoon.Targeting.checkIfTargetingMustBeComputed(i.targeting,i.rescheduleTargeting,!i.experimentAction&&"CUMULATIVE_WEIGHT"==i.personalizationCheckConditionsRule))r.push(i)}if(r.length>0){const e=Kameleoon.Utils.setTimeout((()=>{Kameleoon.Utils.clearTimeout(e);this.process(r)}),Kameleoon.Internals.runtime.PAGE_LOADING_POLL_DELAY)}if(e.length>0&&Kameleoon.Internals.runtime.targetingsEvent)Kameleoon.Internals.runtime.targetingsEvent.emit(e)}performActionsTracking(e){const n=[];for(let i=0,o=e.length;i<o;++i){const o=e[i];if(o.trackingPerformed||!o.associatedVariation||null==o.associatedVariation.id)continue;n.push(o)}e=n;for(let n=0,i=e.length;n<i;++n){const i=e[n];let o=i.collectingDataDisabled?!1:!0;if(!i.experimentAction)if("PERSONALIZATION_CAPPING"==i.notExposedReason||"SCHEDULE"==i.notExposedReason||"SCENARIO"==i.notExposedReason||"PRIORITY"==i.notExposedReason||"VISITOR_CAPPING"==i.notExposedReason)o=!1;const t=i.associatedVariation;if(i.mentalistEnabled)t.name+=" (Predicteo)";if(i.experimentAction)Kameleoon.Gatherer.track(VisitEvent_Experiment,{id:i.id,variationId:t.id,notTrack:!(i.kameleoonTracking&&o)});else Kameleoon.Gatherer.track(VisitEvent_Personalization,{id:i.id,variationId:0==t.id?0:1,notTrack:!(i.kameleoonTracking&&o),originalVariationId:t.id,unexpositionCause:i.notExposedReason});if(o&&(i.experimentAction||i.exposition||!i.exposition&&"PERSONALIZATION_EXCLUSION"==i.notExposedReason)){if(i.crazyEggTracking)Kameleoon.Tracking.processCrazyEgg(i);if(i.universalAnalyticsTracking)Kameleoon.Tracking.processUniversalAnalytics(i);if(i.webtrekkTracking)Kameleoon.Tracking.processWebtrekk(i);if(i.customIntegrations)Kameleoon.Tracking.processCustomIntegration(i);}i.trackingPerformed=!0}}performDeferredVariations(e,n,i){}process(e,n){const i=(new Date).getTime();this.checkActionsTargeting(e);const o=[];for(let t=0,a=e.length;t<a;++t){const a=e[t];if(a.treated||a.blocked)continue;if(!0===a.targeting){Kameleoon.Internals.runtime.Visitor.currentVisit.addActionTriggered(a.id,a.experimentAction);Kameleoon.Utils.sendKameleoonCustomEvent.call(window,"SegmentTriggered",{segment:{id:a.targetingSegmentId,name:a.targetingSegment?a.targetingSegment.name:null}});if(a.experimentAction){const e=new APIAction(a,"experiments");Kameleoon.Utils.sendKameleoonCustomEvent.call(window,"ExperimentTriggered",{experiment:e},"experiment/triggered");a.performVariationAssignment(!1);if(null!=a.associatedVariation)if(!this.checkCapping(!0,a.id,a.associatedVariation.id,a.associatedVariation,i))a.targeting=!1}else{this.associateActionAndVariation(a,a.exposition?a.associatedVariation.id:0,"BOTH");Kameleoon.Utils.sendKameleoonCustomEvent.call(window,"PersonalizationTriggered",{personalization:new APIAction(a,"personalizations")},"personalization/triggered")}}if(!0===a.targeting){a.treated=!0;this.currentAction=a;if(a.displayedVariation){if(a.experimentAction)if(0!=a.displayedVariation.id&&"reference"!=a.displayedVariation.id||a.executeCodeForReference){if(a.cssCode&&!a.cssCodeEvaluated){a.cssCodeEvaluated=!0;Kameleoon.Utils.addCSSStyleSheet(a.cssCode,a,null)}if(a.javaScriptCode&&!a.javaScriptCodeEvaluated){a.javaScriptCodeEvaluated=!0;Kameleoon.Utils.runProtectedScript(a.javaScriptCode,"kameleoonActionJavaScriptCode-"+a.id+".js")}}if(!n&&a.displayedVariation.process)a.displayedVariation.process();if(a.targeting&&(a.experimentAction||a.exposition)){const e={};if(a.experimentAction)e.experiment=new APIAction(a,"experiments");else e.personalization=new APIAction(a,"personalizations");Kameleoon.Utils.sendKameleoonCustomEvent.call(window,a.experimentAction?"ExperimentActivated":"PersonalizationActivated",e,"action/activated")}o.push(a)}}}this.performActionsTracking(o)}processAllActions(){let e=[];e=e.concat(Kameleoon.Internals.runtime.Campaigns.obtainCampaignsList("experiments"));e=e.concat(Kameleoon.Internals.runtime.Campaigns.obtainCampaignsList("personalizations"));this.process(e);Kameleoon.Internals.runtime.Campaigns.obtainCampaignsList("experiments").forEach((e=>{e.handleSpecialCase()}))}}class Campaigns{constructor(){this.experiments={};this.personalizations={}}addCampaign(i){if(i.experimentAction)this.experiments[i.id.toString()]=i;else this.personalizations[i.id.toString()]=i}obtainCampaign(i,t){if(null!=i){if(t)return this[t+"s"][i.toString()];return this.experiments[i.toString()]||this.personalizations[i.toString()]}}obtainCampaignsList(i){return Object.values(this[i])}}class Consent{constructor(){this.disable=(e,n)=>{Kameleoon.Utils.sendKameleoonCustomEvent("Internals",{type:"consent/disable",consentType:e});if(e&&"BOTH"!=e)this[e]=!1;else{this.AB_TESTING=!1;this.PERSONALIZATION=!1}if(1!=n)this.write();Kameleoon.Utils.sendKameleoonCustomEvent.call(window,"LegalConsentUpdated",{legalConsentUpdate:this.getConsent()})};this.enable=(e,n)=>{Kameleoon.Utils.sendKameleoonCustomEvent("Internals",{type:"consent/enable",consentType:e});if(e&&"BOTH"!=e)this[e]=!0;else{this.AB_TESTING=!0;this.PERSONALIZATION=!0}if(Kameleoon.Internals.runtime&&Kameleoon.Internals.runtime.RequestManager){if(Kameleoon.Internals.configuration.requestsAfterConsent)Kameleoon.Internals.runtime.loadExternalRequests();Kameleoon.Internals.runtime.RequestManager.processRequests();this.purge()}if(1!=n)this.write();Kameleoon.Utils.sendKameleoonCustomEvent.call(window,"LegalConsentUpdated",{legalConsentUpdate:this.getConsent()})};this.getConfiguredConsent=()=>({AB_TESTING:Kameleoon.Internals.configuration.abtestConsent,PERSONALIZATION:Kameleoon.Internals.configuration.personalizationConsent});this.getConsent=()=>({AB_TESTING:this.AB_TESTING,PERSONALIZATION:this.PERSONALIZATION});this.hasGlobalConsent=()=>this.AB_TESTING||this.PERSONALIZATION||Kameleoon.Internals.runtime&&Kameleoon.Internals.runtime.kameleoonFull;this.initialize=e=>{Kameleoon.Utils.sendKameleoonCustomEvent("Internals",{type:"consent/initialize",consent:e});this.AB_TESTING=e.AB_TESTING;this.PERSONALIZATION=e.PERSONALIZATION;this.initializeIAB()};this.initializeIAB=()=>{};this.purge=()=>{if(Kameleoon.Internals.runtime){let e=e=>{if(null!=e)for(let n in e)Kameleoon.Utils.createLocalData(e[n].name,e[n].value,e[n].days,e[n].domain,e[n].forceLocalAccess,e[n].jsonFormat,null,!0)};e(Kameleoon.Internals.runtime.localDataMap&&Kameleoon.Internals.runtime.localDataMap["LS"]);e(Kameleoon.Internals.runtime.localDataMap&&Kameleoon.Internals.runtime.localDataMap["COOKIE"]);Kameleoon.Internals.runtime.localDataMap=null;Kameleoon.Analyst.Actions.processAllActions();}};this.setup=()=>{let e={AB_TESTING:!1,PERSONALIZATION:!1};let n=Kameleoon.Internals.runtime.readFromStorageOrExternal("kameleoonLegalConsent","LS");if(null==n)n=Kameleoon.Internals.runtime.readFromStorageOrExternal("kameleoonLocalDataConsent","LS");if(null!=n)if(1==n)e={AB_TESTING:!0,PERSONALIZATION:!0};else e=n;else{e={AB_TESTING:"OFF"==Kameleoon.Internals.configuration.abtestConsent?!0:null,PERSONALIZATION:"OFF"==Kameleoon.Internals.configuration.personalizationConsent?!0:null};if(!Kameleoon.Internals.configuration.abtestingSetup)e.AB_TESTING=null;if(!Kameleoon.Internals.configuration.personalizationSetup)e.PERSONALIZATION=null;}this.initialize(e)};this.write=()=>{Kameleoon.Utils.createLocalData("kameleoonLegalConsent",this.getConsent(),Utils.MAX_STORAGE_DAYS,null,"LS",!0,null,!0)};this.AB_TESTING=!1;this.PERSONALIZATION=!1}}class Device{constructor(){let e=Kameleoon.Utils.bowser.parse(navigator.userAgent);let t=e.browser.version;try{if(t.split(".").length>1)t=t.split(".")[0]+"."+t.split(".")[1]}catch(e){console.log(e)}this.browser=e.browser.name||"Other";this.browserVersion=t?parseFloat(t):null;this.type="tablet"==e.platform.type?"Tablet":"mobile"==e.platform.type?"Phone":"Desktop";if("Safari"==this.browser&&"Desktop"==this.type&&"ontouchend"in document.documentElement)this.type="Tablet"}get adBlocker(){return Kameleoon.Internals.runtime.adBlocker}get os(){return Kameleoon.Gatherer.OperatingSystem.obtain()}get screenHeight(){return window.screen.height}get screenWidth(){return window.screen.width}get timeZone(){return Kameleoon.Gatherer.TimeZone.obtainId()}get windowHeight(){return window.innerHeight}get windowWidth(){return window.innerWidth}}Device.OSS={CHROME:"Chrome OS",MAC:"Mac",IOS:"iOS",LINUX:"Linux",ANDROID:"Android","WINDOWS PHONE":"Windows Phone"};class Experiment{constructor(i,t){this.handleSpecialCase=()=>{if(!0!==this.targeting&&this.redirectProcessed){this.performVariationAssignment(!0);Kameleoon.Analyst.Actions.performActionsTracking([this])}else if(this.preAssignVariation)this.performVariationAssignment(!0)};this.obtainVariationAssignmentRandomNumber=()=>{let i=null;if(Kameleoon.Internals.runtime.gathererRun)for(let t in Kameleoon.Internals.runtime.Gatherer.configuration.customData)if(Kameleoon.Internals.runtime.Gatherer.configuration.customData[t].mappingIdentifier){const e=Kameleoon.Internals.runtime.Visitor.currentVisit.customData[t];if(null!=e)i=Object.keys(e)[0];break}let t="";this.variations.forEach((function(i){if(i.respoolTime)t+=i.respoolTime}));const e=i||Kameleoon.Internals.runtime.Visitor.currentVisit.visitorCode;return Kameleoon.Utils.seededRandom(e+this.id+t,!0)};this.performVariationAssignment=i=>{if(this.displayedVariation&&!i&&!this.deferredLoading)return;if(null!=this.mentalistDeviation){if(null!=this.mentalistVariationReassignationPermissionCustomScript)try{this.mentalistVariationReassignationPermission=Kameleoon.Utils.runProtectedScript("return "+this.mentalistVariationReassignationPermissionCustomScript,"kameleoonMentalistVariationReassignationPermissionCustomScript.js")}catch(i){}if(null==this.mentalistVariationReassignationPermission)this.mentalistVariationReassignationPermission=void 0===Kameleoon.Internals.runtime.Visitor.currentVisit.ExperimentActivations[this.id];if(Kameleoon.Internals.runtime.gathererRun&&Kameleoon.Internals.runtime.mentalistRun)this.mentalistEnabled=!0}if(void 0!==this.registeredVariationId&&this.assignmentTime)this.variations.forEach((i=>{if(this.registeredVariationId==i.id&&i.respoolTime>this.assignmentTime||null===this.registeredVariationId&&this.untrackedRespoolTime>this.assignmentTime)this.registeredVariationId=void 0}));if(void 0===this.registeredVariationId&&!Kameleoon.Internals.runtime.simulationMode&&0==this.variations.filter((i=>i.id==this.registeredVariationId)).length)this.registeredVariationId=void 0;if(this.mentalistEnabled&&this.mentalistVariationReassignationPermission)this.registeredVariationId=void 0;if(void 0===this.registeredVariationId){if(Kameleoon.Internals.configuration.customVariationSelectionScript)if(null==Kameleoon.Internals.runtime.customVariationSelectionFunction)try{Kameleoon.Utils.runProtectedScript(Kameleoon.Internals.configuration.customVariationSelectionScript,"kameleoonCustomVariationSelectionScript.js");Kameleoon.Internals.runtime.customVariationSelectionFunction=window.customVariationSelectionFunction}catch(i){console.log(i)}if(this.mentalistEnabled){let i={};if(Kameleoon.Utils.seededRandom(Kameleoon.Internals.runtime.Visitor.currentVisit.visitorCode+this.id,!0)<=this.mentalistDeviation)i=Kameleoon.Mentalist.computeVariationIdToScore(this.id);if(0==Object.keys(i).length){this.mentalistEnabled=!1;for(let t in this.deviation)i[t]=Math.random()}if(null!=this.mentalistVariationSelectionCustomScript&&this.mentalistEnabled)try{this.registeredVariationId=Kameleoon.Utils.runProtectedScript("return "+this.mentalistVariationSelectionCustomScript,"kameleoonMentalistVariationSelectionCustomScript.js")(i)}catch(i){}else{let t=Number.NEGATIVE_INFINITY;for(let e in i){let n=i[e];if(n>t){this.registeredVariationId=parseInt(e);t=n}}}if(void 0===this.registeredVariationId)this.registeredVariationId=0;}else if(Kameleoon.Internals.runtime.customVariationSelectionFunction){this.registeredVariationId=Kameleoon.Internals.runtime.customVariationSelectionFunction(this);if(null!=this.registeredVariationId)if("reference"==this.registeredVariationId.toString())this.registeredVariationId=0;else if("none"==this.registeredVariationId.toString())this.registeredVariationId=null}else{let i=this.obtainVariationAssignmentRandomNumber();let t=0;this.registeredVariationId=null;for(let e=0,n=this.variations.length;e<n;++e){t+=this.variations[e].deviation;if(i<=t){this.registeredVariationId=this.variations[e].id;break}}}this.assignmentTime=(new Date).getTime();this.writeLocalData()}Kameleoon.Analyst.Actions.associateActionAndVariation(this,this.registeredVariationId,i?"REGISTERED_VARIATION":"BOTH")};this.setTargetingSegment=i=>{this.targetingSegment=Kameleoon.Internals.runtime.targetingSegments.filter((i=>i.id==this.targetingSegmentId))[0]||{};if(!i||i==this.targetingSegmentId){this.targeting=void 0;this.rescheduleTargeting=null;this.numberTargetingCheckings=0;this.displayedVariation=null}};this.trigger=()=>{if(!this.targeting){this.targeting=!0;this.displayedVariation=null}};this.writeLocalData=()=>{let i=this.registeredVariationId+(this.mentalistEnabled?"-mentalist":"")+"/"+this.assignmentTime+"/"+this.counterActive;if(!this.simulationMode)Kameleoon.Utils.createLocalData("kameleoonExperiment-"+this.id,i,this.cookieDuration?this.cookieDuration:30,this.cookieDomain,"LS",!1)};for(let t in i)this[t]=i[t];let e="kameleoonRedirect-"+this.id;let n=t?t[e]:Kameleoon.Utils.readLocalData(e,"LS",!1);n=n?n:Kameleoon.Internals.runtime.parameters[e];this.previousRequestRedirected=n?!0:!1;if(n){this.registeredVariationId=n;this.assignmentTime=(new Date).getTime()}if(this.previousRequestRedirected){this.redirectProcessed=!0;Kameleoon.Utils.eraseLocalData("kameleoonRedirect-"+this.id,null,null)}let a="kameleoonExperiment-"+this.id;let r=t?t[a]:Kameleoon.Utils.readLocalData(a,"LS",!1);for(let i in Kameleoon.Internals.runtime.parameters)if(0==i.indexOf("kameleoonRedirect-"+this.id)){r=Kameleoon.Internals.runtime.parameters[i]+"/"+(new Date).getTime()+"/"+!1;this.writeLocalData()}if(r&&-1!=this.id){let i=r.split("/");this.registeredVariationId="null"==i[0]?null:i[0];this.assignmentTime=parseInt(i[1]);this.counterActive="true"==i[2]&&(new Date).getTime()-this.assignmentTime<2592e6?!0:!1;if(this.registeredVariationId){if("reference"==this.registeredVariationId.toString()){this.registeredVariationId=0;this.writeLocalData()}if("none"==this.registeredVariationId.toString()){this.registeredVariationId=null;this.writeLocalData()}}}else this.counterActive=!1;if(this.registeredVariationId&&-1!=this.registeredVariationId.toString().indexOf("-mentalist")){this.registeredVariationId=parseInt(this.registeredVariationId.toString().replace("-mentalist",""));this.mentalistEnabled=!0}if(this.registeredVariationId>0&&r&&null==this.deviation[this.registeredVariationId])this.registeredVariationId=void 0;this.setTargetingSegment();if(this.redirectProcessed&&this.registeredVariationId)this.writeLocalData();let s=Kameleoon.Internals.runtime.storedData.obtainField("Runtime","blockedExperiments",[]);if(s.length>0&&-1!=s.indexOf(this.id))this.blocked=!0}}class Goals{constructor(){this.checkKameleoonGoals=()=>{let e=[];let n=[];let o=[];let t=[];Kameleoon.Internals.runtime.goals.forEach((l=>{switch(l.type){case"URL":{let n=new RegExp(l.url);if(n.test(Kameleoon.Utils.computeCurrentPageCleanAbsoluteURL()))e.push({goal:l});break}case"PAGE_VIEWS":if(Kameleoon.Internals.runtime.gathererRun){let n=Kameleoon.Internals.runtime.Visitor.currentVisit.obtainPageNumberViews();if((null==l.minPageViews||n>=l.minPageViews)&&(null==l.maxPageViews||n<=l.maxPageViews))e.push({goal:l})}break;case"ENGAGEMENT":n.push({goal:l});break;case"TIME_SPENT":o.push(l);break;case"SCROLL":t.push(l);break}}));if(e.length>0)this.processConversions(e);Kameleoon.Utils.addEventListener(document,Kameleoon.Internals.runtime.mouseDownEvent,(e=>{this.processConversions(n)}),!0);if(o.length>0)Kameleoon.Utils.setInterval((()=>{let e=[];o.forEach((n=>{let o=Kameleoon.Internals.runtime.Visitor.currentVisit.lastActivityDate-Kameleoon.Internals.runtime.Visitor.currentVisit.startDate;if((null==n.minTimeSpent||o>=n.minTimeSpent)&&(null==n.maxTimeSpent||o<=n.maxTimeSpent))e.push({goal:n})}));if(e.length>0)this.processConversions(e)}),1e3);};this.processConversions=e=>{if(Kameleoon.Internals.runtime.gathererRun)for(let n=0,o=e.length;n<o;++n){let o=e[n];let t=o.goal;let l=!0===o.negative;if(l||"PAGE_VIEWS"!=t.type&&"TIME_SPENT"!=t.type&&"ENGAGEMENT"!=t.type||0==Kameleoon.Internals.runtime.Visitor.currentVisit.obtainNumberConversions(t.id)){Kameleoon.Utils.sendKameleoonCustomEvent.call(window,"ConversionTriggered",new APIGoal(t),"goal/process");Kameleoon.Gatherer.track(VisitEvent_Conversions,{goalId:t.id,revenue:o.revenue?o.revenue:0,negative:l});}}}}}class KGeolocation{constructor(){let e=Kameleoon.Internals.runtime.storedData.obtainField("Runtime","geolocation");if(null==e)Kameleoon.Utils.performBeaconServerCall(Kameleoon.Internals.runtime.RequestManager.obtainGeolocationUrl(),(e=>{if(4==e.readyState&&(200==e.status||204==e.status)){let t=e.getResponseHeader("geoip_country_name")||e.getResponseHeader("geoip_city_country_name");let o=e.getResponseHeader("geoip_region_name");let n=e.getResponseHeader("geoip_city");this.country=t?Kameleoon.Utils.decodeUTF8(t):null;this.city=n?Kameleoon.Utils.decodeUTF8(n):null;this.latitude=e.getResponseHeader("geoip_latitude");this.longitude=e.getResponseHeader("geoip_longitude");this.postalCode=e.getResponseHeader("geoip_postal_code");this.region=o?Kameleoon.Utils.decodeUTF8(o):null;this.loaded=!0;Kameleoon.Gatherer.track(VisitEvent_Geolocation,this);Kameleoon.Internals.runtime.storedData.saveField("Runtime","geolocation",this);this.loadWeather()}}),null);else{this.loaded=!0;this.country=e.country;this.city=e.city;this.latitude=e.latitude;this.longitude=e.longitude;this.postalCode=e.postalCode;this.region=e.region;this.loadWeather()}}loadWeather(){}}class KMutationObserver{static addMutationElementsToInternalObjects(e){for(let t=0;t<e.length;++t){const n=e[t];if(n&&n.id)Kameleoon.Internals.runtime.addedIDs["#"+n.id]=!0;if(n&&n.className&&"string"===typeof n.className){const e=n.className.split(" ");for(let t=0;t<e.length;++t)Kameleoon.Internals.runtime.addedClasses["."+e[t]]=!0}}}static checkSelectorInDomTree(e){if(!e.selectors)KMutationObserver.fillClassesAndIdsForSelector(e);if(0===e.selectorClasses.length&&0===e.selectorIDs.length)return!0;let t=!1;for(let n=0;n<e.selectors.length;++n){if(t)break;if(KMutationObserver.checkIDsForSelector(e.selectorIDs[n],e)&&KMutationObserver.checkClassesForSelector(e.selectorClasses[n],e))t=!0}return t}static fillClassesAndIdsForSelector(e){const t=[];const n=[];const o=e.selector&&e.selector.split(",")||[];if(e.currentQuery&&e.selector!=e.currentQuery)o.push(e.currentQuery);o.forEach((e=>{if(-1!==e.indexOf(".")||-1!==e.indexOf("#")){let o;let r;if(-1!==e.indexOf("\\")||-1!==e.indexOf("contains")||-1!==e.indexOf(":not")){const t=e.replace(/(:[^:]+\(.+?\)|\\)/g,"").replace(/(\-)?(\[.*?\])/g,((e,t)=>t?e:""));o=t.match(/\.([^\s.]+)/g);r=t.match(/#([^\s:\[]+)/g)}else{o=e.match(/\.([^\s.:\[]+)/g);r=e.match(/#([^\s:\[>]+)/g)}n.push(o||[]);t.push(r||[])}}));e.selectors=o;e.selectorClasses=n;e.selectorIDs=t;return e}static checkClassesForSelector(e,t){if(null==e)return!0;for(let t=0,n=e.length;t<n;++t){const n=e[t];if(-1===n.indexOf("kameleoon")&&null==Kameleoon.Internals.runtime.addedClasses[n])return!1}return!0}static checkIDsForSelector(e,t){if(null==e)return!0;let n;if(t.options)n=t.options.domReference;for(let o=0,r=e.length;o<r;++o){const r=e[o];if(-1!==r.indexOf("kameleoonElement")){if(n){const e=KMutationObserver.fillClassesAndIdsForSelector({selector:n,checkDomReference:!0});if(!KMutationObserver.checkIDsForSelector(e.selectorIDs[0],e))return!1}if(t.checkDomReference)if(null==Kameleoon.Internals.runtime.addedIDs[r])return!1}else if(null==Kameleoon.Internals.runtime.addedIDs[r])return!1}return!0}static fillInternalObjectsForMutationObserver(e){if(!e)e=document;const t=e.getElementsByTagName("*");for(let e=0,n=t.length;e<n;++e){const n=t[e];if(n.id)Kameleoon.Internals.runtime.addedIDs["#"+n.id]=!0;if(n.className&&"string"===typeof n.className){const e=n.className.split(" ");for(let t=0;t<e.length;++t)Kameleoon.Internals.runtime.addedClasses["."+e[t]]=!0}}}static removeMutationElementsFromInternalObjects(e){for(let t=0;t<e.length;++t){const n=e[t];if(n&&n.id)if(1==Kameleoon.Internals.runtime.addedIDs["#"+n.id])delete Kameleoon.Internals.runtime.addedIDs["#"+n.id]}}static performWaitingElementPresentObject(){for(let e=Kameleoon.Internals.runtime.waitingElementPresentObjects.length-1;e>=0;e-=1){const t=Kameleoon.Internals.runtime.waitingElementPresentObjects[e];if(t&&t.useAntiFlicker)if(KMutationObserver.checkSelectorInDomTree(t)){const n=Kameleoon.Utils.querySelectorAll(t.selector);if(0<n.length){Kameleoon.Utils.runProtectedFunction((function(){t.callback(n)}),!0);Kameleoon.Internals.runtime.waitingElementPresentObjects.splice(e,1)}}}}static performVariationsElementSet(e){}static performAsyncMutations(){Kameleoon.Internals.runtime.domMutationThrottling=!0;if(!KMutationObserver.asyncMutationsTimeoutId)KMutationObserver.asyncMutationsTimeoutId=Kameleoon.Utils.setTimeout((()=>{if(KMutationObserver.mutationList.length>=KMutationObserver.MAX_MUTATIONS_LENGTH_FOR_ITERATION)KMutationObserver.fillInternalObjectsForMutationObserver();else KMutationObserver.mutationList.forEach((e=>{const t=e.addedNodes,n=e.removedNodes;const o=Array.prototype.slice.call(t);const r=Array.prototype.slice.call(n);const s=o.concat(r);KMutationObserver.removeMutationElementsFromInternalObjects(n);KMutationObserver.addMutationElementsToInternalObjects(t);for(let t=0;t<s.length;++t){const n=s[t];if(n&&n.innerHTML&&"childList"===e.type)KMutationObserver.fillInternalObjectsForMutationObserver(n)}}));KMutationObserver.mutationList=[];KMutationObserver.performWaitingElementPresentObject();KMutationObserver.performVariationsElementSet(!0);Kameleoon.Utils.clearTimeout(KMutationObserver.asyncMutationsTimeoutId);KMutationObserver.asyncMutationsTimeoutId=null}),250)}static setMutationObserver(){if(Kameleoon.Internals.runtime.cantUseMutationObserver)return;KMutationObserver.fillInternalObjectsForMutationObserver();const e=document.documentElement;const t={attributes:!0,childList:!0,characterData:!0,subtree:!0};if(!Kameleoon.Internals.runtime.mutationObserver)Kameleoon.Internals.runtime.mutationObserver=new MutationObserver((function(e){let t=!0;if(!Kameleoon.Internals.runtime.domReady&&e.length>=KMutationObserver.MAX_MUTATIONS_LENGTH){KMutationObserver.mutationList=KMutationObserver.mutationList.concat(e);KMutationObserver.performAsyncMutations();return}e.forEach((e=>{const n=e.addedNodes,o=e.removedNodes;const r=Array.prototype.slice.call(n);const s=Array.prototype.slice.call(o);const a=r.concat(s);KMutationObserver.removeMutationElementsFromInternalObjects(o);KMutationObserver.addMutationElementsToInternalObjects(n);for(let n=0;n<a.length;++n){const o=a[n];if((Kameleoon.Internals.runtime.editorMode||Kameleoon.Internals.runtime.kameleoonSelectionIframeMode)&&o&&o.id&&"string"==typeof o.id&&null!==o.id.match("kameleoon"))if(o.closest&&null!==o.closest(".KameleoonProtected"))t=!1;if(t&&o&&o.innerHTML&&"childList"===e.type)KMutationObserver.fillInternalObjectsForMutationObserver(o)}}));KMutationObserver.performWaitingElementPresentObject();KMutationObserver.performVariationsElementSet(t)}));if("function"===typeof Kameleoon.Internals.runtime.mutationObserver.observe)Kameleoon.Internals.runtime.mutationObserver.observe(e,t);if(Kameleoon.Internals.runtime.singlePageSupport)KMutationObserver.setMutationObserverSPA()}static setMutationObserverSPA(){if(Kameleoon.Internals.runtime.mutationObserverSpa)return;Kameleoon.API.Core.runWhenElementPresent("body",(e=>{Kameleoon.Internals.runtime.mutationObserverSpa=new MutationObserver((function(){Kameleoon.Internals.runtime.listenVariations=[];Kameleoon.Internals.runtime.mutationObserverSpa.disconnect();if(Kameleoon.ElementSet)KMutationObserver.checkElementSetIntegrity();KMutationObserver.checkDynamicElements();t()}));const t=()=>{Kameleoon.Internals.runtime.mutationObserverSpa.observe(e[0],{childList:!0,characterData:Kameleoon.ElementSet&&Kameleoon.ElementSet.pageElementSetsSpa.length>0,subtree:!0})};t()}))}}KMutationObserver.MAX_MUTATIONS_LENGTH=3e3;KMutationObserver.MAX_MUTATIONS_LENGTH_FOR_ITERATION=5e3;KMutationObserver.asyncMutationsTimeoutId=null;KMutationObserver.mutationList=[];KMutationObserver.checkDynamicElements=()=>{Kameleoon.Internals.runtime.waitingDynamicElements.forEach((e=>{const t=Kameleoon.Utils.querySelectorAll(e.selector).filter((t=>null==t.getAttribute(e.attribute)));t.length>0&&e.callback(t)}))};KMutationObserver.checkElementSetIntegrity=()=>{};KMutationObserver.resetElementSet=(e,t,n)=>{};KMutationObserver.containsDomOperationElements=e=>{};class Logger{constructor(){this.MAX_REQUESTS_PER_VISIT=3;this.baseUrl="https://logger.kameleoon.com/api/2/store/?sentry_key=d8dc96c209184885ab9643cbaf1eb86f&sentry_version=7";this.canSend=()=>{if(Kameleoon.Internals.runtime&&Kameleoon.Internals.runtime.Consent.hasGlobalConsent())if(this.errorLoggerIds.length<this.MAX_REQUESTS_PER_VISIT){let e=Kameleoon.Internals.runtime.storedData.obtainField("Runtime","loggerPopulation");if(null==e){this.population=e=Math.random();Kameleoon.Internals.runtime.storedData.saveField("Runtime","loggerPopulation",e)}if(e<.01)return!0}return!1};this.generateRandomIdAsString=(e,t,n)=>Kameleoon.Utils.computeStringSha256(e+t+n).substr(0,32);this.generateRequestDataAsString=(e,t,n,r)=>{let o={tags:{siteCode:Kameleoon.Internals.configuration.siteCode},user:{},environment:Kameleoon.Internals.configuration.environment,platform:"javascript",event_id:t,request:{url:location.href,headers:{"User-Agent":navigator.userAgent}},exception:{values:[{type:e.name,value:e.stack?e.stack:e.message,stacktrace:{frames:[{filename:n}]},mechanism:{data:{mode:"stack",message:e.stack?e.stack:e.message,name:e.name},handled:!1,type:"onerror"}}]}};if(r){o.tags["action-id"]=r.id;o.tags["action-name"]=r.name;o.tags["action-type"]=r.experimentAction?"experiment":"personalization"}try{o.user={id:Kameleoon.Internals.runtime&&Kameleoon.Internals.runtime.Visitor&&Kameleoon.Internals.runtime.Visitor.currentVisit.visitorCode}}catch(e){o.user={id:"no_visitor_code"}}return JSON.stringify(o)};this.send=(e,t,n)=>{if("DEVELOPMENT"==Kameleoon.Internals.configuration.environment)console.error(e);try{this.errorLoggerIds=Kameleoon.Internals.runtime&&Kameleoon.Internals.runtime.storedData.obtainField("Runtime","loggerRequestsSend")||this.errorLoggerIds;let r=this.generateRandomIdAsString(e.message,Kameleoon.Internals.configuration.siteCode,Kameleoon.Internals.configuration.environment);if(-1==this.errorLoggerIds.indexOf(r)){this.errors.push(e);let o=e.stack?e.stack:e.message;if(this.canSend()&&o&&o.trim().length>0){let o=new XMLHttpRequest;o.open("POST",this.baseUrl,!0);o.timeout=2e3;o.send(this.generateRequestDataAsString(e,r,t,n));Kameleoon.Internals.runtime&&Kameleoon.Internals.runtime.storedData.saveField("Runtime","loggerRequestsSend",this.errorLoggerIds)}this.errorLoggerIds.push(r);if(Kameleoon.Internals.runtime.parameters.kameleoonDebug||localStorage.kameleoonExtensionIsAdmin)console.log(e)}}catch(t){this.errors.push(e)}};this.errorLoggerIds=[];this.errors=[]}}class OnlineMeanAndDeviation{constructor(e){this.dimension=e;this.mean=[];this.nbUpdates=[];this.m2=[];this.deviation=[];for(let t=0;t<e;++t){this.mean[t]=0;this.nbUpdates[t]=0;this.m2[t]=0;this.deviation[t]=0}this.update=(e,t=1)=>{if(t>0)for(let n=0;n<this.dimension;++n)if(!isNaN(e[n])&&isFinite(e[n])){let i=this.mean[n]-e[n];let a=this.nbUpdates[n]+t;this.m2[n]=this.m2[n]+i/a*i*this.nbUpdates[n]*t;this.deviation[n]=Math.sqrt(this.m2[n]/a);this.mean[n]=this.mean[n]/a*this.nbUpdates[n]+e[n]/a*t;this.nbUpdates[n]=a}}}}OnlineMeanAndDeviation.createFromDifferences=(e,t,n,i)=>{let a=new OnlineMeanAndDeviation(1);let s=e.length;let l=0;if(l<s){let h=e[l];l++;while(l<s){let s=e[l];l++;let o=s-h;if(o<0&&t||0==o&&n||o>0&&i)a.update([o]);h=s}}return a};OnlineMeanAndDeviation.createFromValues=e=>{let t=new OnlineMeanAndDeviation(1);for(let n=0,i=e.length;n<i;n++)t.update([e[n]]);return t};OnlineMeanAndDeviation.createFromBooleanValues=e=>{let t=new OnlineMeanAndDeviation(1);for(let n=0,i=e.length;n<i;n++)t.update([e[n]?1:0]);return t};class Personalization{constructor(e,t){this.checkCustomExpositionRate=()=>{let e=!0;switch(this.customExpositionRate){case 1:break;case 0:e=!1;break;default:let t=Kameleoon.Internals.runtime.incomingStoredData&&Kameleoon.Internals.runtime.incomingStoredData["kameleoonPersonalization-"+this.id]||Kameleoon.Utils.readLocalData("kameleoonPersonalization-"+this.id,"LS",!1);if(null==t)t=Kameleoon.Internals.runtime.incomingStoredData&&Kameleoon.Internals.runtime.incomingStoredData["kameleoonPersonalizationTargeted-"+this.id]||Kameleoon.Utils.readLocalData("kameleoonPersonalizationTargeted-"+this.id,"LS",!1);if(null!=t){const i=t.split("/");e="true"==i[0]}else{e=Kameleoon.Utils.seededRandom(this.id+Kameleoon.Internals.runtime.Visitor.currentVisit.visitorCode,!0)<this.customExpositionRate;Kameleoon.Utils.createLocalData("kameleoonPersonalization-"+this.id,e+"/"+(new Date).getTime(),-1==this.id?1/24:30,null,"LS",!1)}break}return e};this.setTargetingSegment=e=>{this.targetingSegment=Kameleoon.Internals.runtime.targetingSegments.filter((e=>e.id==this.targetingSegmentId))[0]||{};if(!e||e==this.targetingSegmentId){this.targeting=void 0;this.rescheduleTargeting=null;this.numberTargetingCheckings=0;this.displayedVariation=null}};this.trigger=()=>{if(!this.targeting){this.blocked=!1;this.targeting=!0;this.displayedVariation=null}};for(const t in e)this[t]=e[t];if(Kameleoon.Internals.runtime.simulationMode){const e="kameleoonPersonalizationStatus-"+this.id;const i=t?t[e]:Kameleoon.Utils.readLocalData(e,"LS",!0);if(i){this.forceTargeting=Kameleoon.Utils.runProtectedScript("return "+i["targetingStringAndExpositionString"][0]);this.forceExposition=Kameleoon.Utils.runProtectedScript("return "+i["targetingStringAndExpositionString"][1])}}if(e.autopromo&&Kameleoon.Internals.configuration.forceAutopromoTargetingToFalse)this.blocked=!0;const i=Kameleoon.Internals.runtime.storedData.obtainField("Runtime","blockedPersonalizations",[]);if(i.length>0&&-1!=i.indexOf(this.id))this.blocked=!0;Kameleoon.Analyst.Actions.associateActionAndVariation(this,0,"DISPLAYED_VARIATION");this.setTargetingSegment()}static executeEmailingScript(){}static setGlobalPersonalizationDeviation(){const e="kameleoonGlobalPersonalizationExposition";const t=Kameleoon.Internals.configuration.personalizationsDeviation;let i=Kameleoon.Internals.runtime.readFromStorageOrExternal(e,"LS");const n=i&&i.split("/");let o;if(null!=i&&n[2]!=t)i=null;if(i)o="true"==n[0]?!0:!1;else{o=1==t||Kameleoon.Utils.seededRandom(Kameleoon.Internals.runtime.Visitor.currentVisit.visitorCode,!0)<t;i=o+"/"+(new Date).getTime()+"/"+t;Kameleoon.Utils.createLocalData(e,i,Utils.MAX_STORAGE_DAYS,null,"LS",!1)}Kameleoon.Internals.runtime.personalizationsActive=o}}class RequestManager{constructor(){this.processRequests=()=>{if(this.callbacksToExecute.length>0&&Kameleoon.Internals.runtime.Consent.hasGlobalConsent()){const e=this.callbacksToExecute.splice(0,1e3);e.forEach((e=>e()))}if(this.eventsToSend.length>0)if(this.validateTrackingRequest())if((!Kameleoon.Internals.runtime.simulationMode||Kameleoon.Internals.runtime.enableRemoteVisitorSynchronization)&&!Kameleoon.Internals.runtime.proxyMode&&!Kameleoon.Internals.runtime.kameleoonSelectionIframeMode){const e=this.eventsToSend.splice(0,1e3);const t=this.obtainRequestBody(e);this.send(this.obtainVisitUrl(),"POST",t,(()=>{}),(()=>{this.createErrorEventsQueue(t)}));if(this.eventsToSend.length>0)this.processRequests()}};this.obtainRequestBody=e=>{let t="";t+=e.reduce(((e,t)=>{if(!t.notTrack)e+=t.obtainRequestData()+"\n";return e}),"");if(sessionStorage.getItem("kameleoonRequestEvents")){t+=sessionStorage.getItem("kameleoonRequestEvents");sessionStorage.removeItem("kameleoonRequestEvents")}return t};this.obtainVisitUrl=()=>{const e=Kameleoon.Internals.runtime.Visitor.currentVisit.visitorCode;return`${this.url}/visit/events?siteCode=${this.siteCode}&visitorCode=${e}&itp=${"Safari"===Kameleoon.Internals.runtime.Device.browser}`};this.obtainIpUrl=()=>this.url+"/ip";this.obtainGeolocationUrl=()=>this.url+"/geolocation";this.send=(e,t,s,n,o,i)=>{const r=new XMLHttpRequest;r.open(t,e,!0);if(n)r.onreadystatechange=function(e){n.bind(r)(e.target)};if(o){r.onabort=function(e){o.bind(r)(e.target)};r.onerror=function(e){o.bind(r)(e.target)};r.ontimeout=function(e){o.bind(r)(e.target)}}r.timeout=i||15*60*1e3;r.send("POST"==t&&s?s:null);};this.sendActiveScript=()=>{this.send(`${this.url}/active-script/event?siteCode=${this.siteCode}`,"POST")};this.sendProduct=(e,t)=>{this.send(`${this.url}/product/events?siteCode=${this.siteCode}&ean=${encodeURIComponent(e.toString())}`,"POST",t)};this.eventsToSend=[];this.callbacksToExecute=[];this.url=Kameleoon.Internals.runtime.DATA_URL;this.siteCode=Kameleoon.Internals.configuration.siteCode;Kameleoon.Utils.setInterval(this.processRequests.bind(this),500);Kameleoon.Utils.addEventListener(window,Kameleoon.Internals.runtime.beforeUnloadEvent,"Safari"===Kameleoon.Internals.runtime.Device.browser?()=>this.eventsToSend.length&&this.createErrorEventsQueue(this.obtainRequestBody(this.eventsToSend)):this.processRequests.bind(this))}addCallback(e){if(Kameleoon.Internals.runtime.Consent.hasGlobalConsent())e();else this.callbacksToExecute.push(e)}addRequest(e){this.eventsToSend.push(e);if("page"===e.eventType)this.processRequests()}createErrorEventsQueue(e){if(e)sessionStorage.setItem("kameleoonRequestEvents",(sessionStorage.getItem("kameleoonRequestEvents")||"")+e)}validateTrackingRequest(){const e=Kameleoon.Internals.runtime.ipIsTrackerAccepted;const t=Kameleoon.Internals.configuration.trackerExcludedIPRanges.length>0;if(t&&!e||!Kameleoon.Internals.runtime.Consent.hasGlobalConsent())return!1;else return!0}}class Segment{}class Targeting{constructor(){this.segments={};this.obtainSegment=e=>e&&this.segments[e];this.checkTargetingCondition=(e,t,i)=>{let n;if(null==t.numberTargetingCheckings)t.numberTargetingCheckings=0;if(!this.checkIfTargetingMustBeComputed(t.targeting,t.rescheduleTargeting||0==t.numberTargetingCheckings,void 0))n={targeting:t.targeting,rescheduleTargeting:!1};else{let r=Kameleoon.Targeting["evaluate_"+t.type];let a;if(null!=r)a=r.bind(this)(t,e,i);else a=null;if(null==a)a={targeting:void 0,rescheduleTargeting:!1};let g=a.targeting;if(!0!==t.include)if(void 0===g){if(!0===a.excludedUndefinedIsTargeted)g=!0}else g=!g;n={targeting:g,rescheduleTargeting:this.checkIfTargetingMustBeComputed(g,a.rescheduleTargeting,void 0)};t.targeting=n.targeting;t.rescheduleTargeting=n.rescheduleTargeting;t.numberTargetingCheckings++}if(!0===n.targeting)n.weight=t.weight;else n.weight=0;return n};this.checkTargetingSegmentsTargeting=e=>{let t=[];for(let i=0,n=e.length;i<n;++i){let n=e[i];if(null==n.numberTargetingCheckings)n.numberTargetingCheckings=0;if(this.checkIfTargetingMustBeComputed(n.targeting,n.rescheduleTargeting||0==n.numberTargetingCheckings,!1))t.push(n)}e=t;for(let t=0,i=e.length;t<i;++t){let i=e[t];let n=this.checkTree(null,i?i.tree:null,!1,i);i.targeting=n.targeting;i.rescheduleTargeting=n.rescheduleTargeting;i.numberTargetingCheckings++}let i=[];for(let t=0,n=e.length;t<n;++t){let n=e[t];if(this.checkIfTargetingMustBeComputed(n.targeting,n.rescheduleTargeting,!1))i.push(n)}if(i.length>0){let e=Kameleoon.Utils.setTimeout((()=>{Kameleoon.Utils.clearTimeout(e);this.processTargetingSegments(i)}),Kameleoon.Internals.runtime.domReady?Kameleoon.Internals.runtime.PAGE_LOADED_POLL_DELAY:Kameleoon.Internals.runtime.PAGE_LOADING_POLL_DELAY)}};this.checkTree=(e,t,i,n)=>{let r;if(null==t){r={targeting:!0,rescheduleTargeting:!1};if(i)r.weight=0}else{if(null==t.numberTargetingCheckings)t.numberTargetingCheckings=0;if(!this.checkIfTargetingMustBeComputed(t.targeting,t.rescheduleTargeting||0==t.numberTargetingCheckings,i)){r={targeting:t.targeting,rescheduleTargeting:!1};if(i)r.weight=t.weight}else{if(null!=t.targetingCondition)r=this.checkTargetingCondition(e,t.targetingCondition,n);else{let a=this.checkTree(e,t.leftChild,i,n);let g=Kameleoon.Internals.runtime.simulationMode||i;if(!g)switch(a.targeting){case!0:if(!t.orOperator)g=!0;break;case!1:if(t.orOperator)g=!0;break;case void 0:default:g=!0;break}let l=null;if(g)l=this.checkTree(e,t.rightChild,i,n);let s;switch(a.targeting){case!0:if(t.orOperator)s=!0;else switch(l.targeting){case!0:s=!0;break;case!1:s=!1;break;case void 0:default:s=void 0;break}break;case!1:if(t.orOperator)switch(l.targeting){case!0:s=!0;break;case!1:s=!1;break;case void 0:default:s=void 0;break}else s=!1;break;case void 0:default:if(t.orOperator)switch(l.targeting){case!0:s=!0;break;case!1:s=void 0;break;case void 0:default:s=void 0;break}else switch(l.targeting){case!0:s=void 0;break;case!1:s=!1;break;case void 0:default:s=void 0;break}break}r={targeting:s,rescheduleTargeting:this.checkIfTargetingMustBeComputed(s,a.rescheduleTargeting||g&&l.rescheduleTargeting,i)};if(i){let e;if(t.orOperator)e=Math.max(a.weight,l.weight);else e=a.weight+l.weight;r.weight=e}}t.targeting=r.targeting;t.rescheduleTargeting=r.rescheduleTargeting;if(i)t.weight=r.weight}t.numberTargetingCheckings++}return r};this.computeDisplayableTree=e=>{let t=new Array;let i=new Array;this.computeDisplayableTreeFirstLevelAddIn(e,t,i);if(i.length>0){let e=new Array;let n=new Array;let r=this.createIterator(t);let a=this.createIterator(i);while(a.hasNext()){let t=a.next();if(Kameleoon.Utils.testEmptyMap(t.conditions)){if(a.hasNext())r.next()}else{n.push(t);if(a.hasNext())e.push(r.next())}}t=n.length>0?e.slice(0,n.length-1):e;i=n}return{firstLevelOrOperators:t,secondLevel:i}};this.computeDisplayableTreeFirstLevelAddIn=(e,t,i)=>{if(null!=e)if(null==e.targetingCondition)if(0==e.orGuiLevel){this.computeDisplayableTreeFirstLevelAddIn(e.leftChild,t,i);t.push(e.orOperator);this.computeDisplayableTreeFirstLevelAddIn(e.rightChild,t,i)}else i.push(this.computeDisplayableTreeSecondLevel(e));else i.push(this.computeDisplayableTreeSecondLevel(e))};this.computeDisplayableTreeSecondLevel=e=>{let t=new Array;let i=new Array;this.computeDisplayableTreeSecondLevelAddIn(e,t,i);if(i.length>0){let e=new Array;let n=new Array;let r=this.createIterator(t);let a=this.createIterator(i);while(a.hasNext()){let t=a.next();if(t.disabled){if(a.hasNext())r.next()}else{n.push(t);if(a.hasNext())e.push(r.next())}}t=n.length>0?e.slice(0,n.length-1):e;i=n}return{orOperators:t,conditions:i}};this.computeDisplayableTreeSecondLevelAddIn=(e,t,i)=>{if(null!=e)if(null==e.targetingCondition){this.computeDisplayableTreeSecondLevelAddIn(e.leftChild,t,i);t.push(e.orOperator);this.computeDisplayableTreeSecondLevelAddIn(e.rightChild,t,i)}else i.push(e.targetingCondition)};this.flattenTree=e=>{let t=(e,i)=>{if(null!=e)if(null!=e.targetingCondition)return!1===e.targetingCondition.targeting?["!",e.targetingCondition]:e.targetingCondition;else{let n=e.orOperator?"OR":"AND";let r=[t(e.leftChild,n),n,t(e.rightChild,n)];return"AND"==i&&"OR"==n?["(",r,")"]:r}};return Kameleoon.Utils.flatten(t(e,"OR"))};this.processAllTargetingSegments=()=>{const e=Kameleoon.Internals.runtime.targetingSegments||[];e.forEach((e=>{this.segments[e.id]=e}));this.processTargetingSegments(e)};this.processTargetingSegments=e=>{this.checkTargetingSegmentsTargeting(e);let t=[];for(let i=0,n=e.length;i<n;++i){let n=e[i];if(!0===n.targeting)t.push(n)}this.performSegmentsTracking(t)}}checkIfTargetingMustBeComputed(e,t,i){let n=!0===t&&(void 0===e||!1===e&&!0===i);return n}createIterator(e){let t=0;return{hasNext:function(){return t<e.length},next:function(){return e[t++]}}}performSegmentsTracking(e){for(let t=0,i=e.length;t<i;++t){let i=e[t];Kameleoon.Utils.sendKameleoonCustomEvent.call(window,"SegmentTriggered",{segment:{id:i.id,name:i.name}});if(Kameleoon.Internals.configuration.useAudience||i.opportunityDetection||Kameleoon.Internals.runtime.mentalistRun&&(i.trackMentalistPrediction||i.mentalist))Kameleoon.Gatherer.track(VisitEvent_TargetingSegments,{id:i.id});if(Kameleoon.Internals.runtime.mentalistRun)if(i.trackMentalistPrediction)Kameleoon.Gatherer.track(VisitEvent_MentalistPredictionSegmentTargeting,{targetingSegmentId:i.id,trackMentalistPrediction:i.trackMentalistPrediction});}}}Targeting.prototype.evaluate_ACTIVE_SESSION=function(e){if(Kameleoon.Internals.runtime.gathererRun){let t=(new Date).getTime()-Kameleoon.Internals.runtime.Visitor.currentVisit.startDate;let r;switch(e.operator){case"EQUAL":r=t==e.time;break;case"LOWER":r=t<e.time;break;case"GREATER":r=t>e.time?!0:void 0;break;case"LOWER_OR_EQUAL":r=t<=e.time;break;case"GREATER_OR_EQUAL":r=t>=e.time?!0:void 0;break}return{targeting:r,rescheduleTargeting:void 0===r}}return null};Targeting.prototype.evaluate_PAGE_VIEWS=function(e){if(Kameleoon.Internals.runtime.gathererRun){let r;let t=Kameleoon.Internals.runtime.Visitor.currentVisit.obtainPageNumberViews();switch(e.operator){case"GREATER":r=t>e.value;break;case"LOWER":r=t<e.value;break;case"EQUAL":r=t==e.value;break}return{targeting:r,rescheduleTargeting:!1}}return null};Targeting.prototype.evaluate_ORIGIN_TYPE=function(e){let n=(e,n)=>{if(null!=n&&new RegExp(".*\\butm_medium=(email|newsletter)(\\b.*)?$").test(n))return"EMAIL";if(null!=n&&new RegExp(".*\\b(utm_medium=cpc|gclid)(\\b.*)?$").test(n))return"SEM";if(null==e||0==e.length)return"DIRECT";if(null!=e&&new RegExp("^https?://[^/]*(google|bing|yahoo|yandex|baidu)\\..*").test(e))return"SEO";if(null!=n&&null!=e)return"AFFILIATION";return null};if(Kameleoon.Internals.runtime.gathererRun){let t=n(Kameleoon.Internals.runtime.storedData.obtainField("Runtime","firstReferrerHref"),Kameleoon.Internals.runtime.Visitor.currentVisit.landingPageURL);return{targeting:null!=t&&e.value==t,rescheduleTargeting:!1}}return null};Targeting.prototype.evaluate_MOUSE_OUT=function(e){let n;if(Kameleoon.Internals.runtime.mouseOutEvent)n=!0;else if(!Kameleoon.Internals.runtime.mouseOutListener&&document.body){Kameleoon.Internals.runtime.mouseOutListener=!0;let e=Kameleoon.Internals.runtime.Visitor.currentVisit.Device.browser;if("Internet Explorer"==e)Kameleoon.Utils.addEventListener(document.body,"mouseout",(function(e){if(!e.relatedTarget)if(Math.abs(e.clientY-window.innerHeight)>e.clientY)Kameleoon.Internals.runtime.mouseOutEvent=!0}));else Kameleoon.Utils.addEventListener(document.body,"mouseleave",(function(e){if(e.clientY<0)Kameleoon.Internals.runtime.mouseOutEvent=!0}))}return{targeting:n,rescheduleTargeting:void 0===n}};Targeting.prototype.evaluate_NEW_VISITORS=function(e){if(Kameleoon.Internals.runtime.gathererRun){let t=1==Kameleoon.Internals.runtime.Visitor.visits.length;return{targeting:"NEW"==e.value?t:!t,rescheduleTargeting:!1}}return null};Targeting.prototype.evaluate_BROWSER=function(e){let r;let a=Kameleoon.Internals.runtime.Visitor.currentVisit.Device;let t=a.browserVersion;let s=Kameleoon.Utils.bowser.parse(navigator.userAgent).browser.name;switch(e.value){case"IE":case"EDGE":r="Internet Explorer"===s||"Microsoft Edge"===s;break;case"CHROME":r="Chrome"===s;break;case"FIREFOX":r="Firefox"===s;break;case"SAFARI":r="Safari"===s;break;case"OPERA":r="Opera"===s;break;default:r=!1;break}if(r&&null!=e.version)switch(e.operator){case"EQUAL":r=t==e.version;break;case"LOWER":r=t<e.version;break;case"GREATER":r=t>e.version;break}return{targeting:r,rescheduleTargeting:!1}};Targeting.prototype.evaluate_PAGE_URL=function(e){let t=new RegExp(Kameleoon.Utils.computeURLRegExpNoKameleoonParameters(e.value));let a;try{a=t.test(decodeURI(Kameleoon.Utils.computeCurrentPageCleanAbsoluteURL()))}catch(e){try{a=unescape?t.test(unescape(Kameleoon.Utils.computeCurrentPageCleanAbsoluteURL())):!1}catch(e){a=!1}}return{targeting:a,rescheduleTargeting:!1}};Targeting.prototype.evaluate_JS_CODE=function(targetingCondition,container,segment){let targeting;try{if(!targetingCondition.valueGeneratedCode)if(targetingCondition.async){targetingCondition.valueGeneratedCode="(function(setTargeting) {\n"+targetingCondition.value+"\n})(asyncCallback);";Kameleoon.Utils.runProtectedScript(targetingCondition.valueGeneratedCode,"",(()=>{var asyncCallback=e=>{targetingCondition.targeting=e};eval(targetingCondition.valueGeneratedCode)}))}else targetingCondition.valueGeneratedCode="(function() {\n"+targetingCondition.value+"\n})();";if(targetingCondition.async)targeting=targetingCondition.targeting||void 0;else if(!targetingCondition.domReady||Kameleoon.Internals.runtime.domReady){const value=Kameleoon.Utils.runProtectedScript(targetingCondition.valueGeneratedCode,"",(()=>eval(targetingCondition.valueGeneratedCode)));targeting="boolean"==typeof value?value:void 0}}catch(e){targeting=!1;const t=segment?segment.name:null;console.log(e,t)}return{targeting:targeting,rescheduleTargeting:void 0===targeting}};Targeting.prototype.evaluate_CUSTOM_DATUM=function(t){if(Kameleoon.Internals.runtime.gathererRun){let a;const e=Kameleoon.Internals.runtime.Visitor.currentVisit.customData[t.index];const i={customDataValue:"",conditionValue:t.value,CONTAINS(){if(this.customDataValue.indexOf(this.conditionValue)>=0)return!0},EXACT(){if(this.customDataValue===this.conditionValue)return!0},REGULAR_EXPRESSION(){if(RegExp(this.conditionValue).test(this.customDataValue))return!0},LOWER(){this.customDataValue=parseFloat(this.customDataValue);if(!isNaN(this.conditionValue)&&!isNaN(this.customDataValue))return this.customDataValue<this.conditionValue},EQUAL(){this.customDataValue=parseFloat(this.customDataValue);if(!isNaN(this.conditionValue)&&!isNaN(this.customDataValue))return this.customDataValue==this.conditionValue},GREATER(){this.customDataValue=parseFloat(this.customDataValue);if(!isNaN(this.conditionValue)&&!isNaN(this.customDataValue))return this.customDataValue>this.conditionValue},TRUE(){if("true"===this.customDataValue)return!0},FALSE(){if("false"===this.customDataValue)return!0},AMONG_VALUES(){try{const t=JSON.parse(this.conditionValue);for(let a=0,e=t.length;a<e;a++)if(t[a]==this.customDataValue)return!0}catch(t){return!1}},RANGE(){try{const[t,a]=JSON.parse(this.conditionValue);this.customDataValue=parseFloat(this.customDataValue);if(!isNaN(this.customDataValue))return this.customDataValue>=t&&this.customDataValue<=a}catch(t){return!1}}};if(null==e)a="UNDEFINED"==t.operator?!0:void 0;else{a=!1;for(const u in e)if(i[t.operator]){i.customDataValue=u.toString();const e=i[t.operator]();if("boolean"==typeof e){a=e;break}}}return{targeting:a,rescheduleTargeting:void 0===a}}return null};Targeting.prototype.evaluate_DEVICE_TYPE=function(e){return{targeting:e.value==Kameleoon.Internals.runtime.Device.type.toLocaleUpperCase(),rescheduleTargeting:!1}};Targeting.prototype.evaluate_CONVERSIONS=function(e){if(Kameleoon.Internals.runtime.gathererRun){let n;if(e.value<0){n=!1;for(let e=0,t=Kameleoon.Internals.runtime.goals.length;e<t;++e){let t=Kameleoon.Internals.runtime.goals[e];if("PAGE_VIEWS"!=t.type&&"URL"!=t.type){n=void 0;break}}for(let e=0,t=Kameleoon.Internals.runtime.goals.length;e<t;++e){let t=Kameleoon.Internals.runtime.goals[e];if(Kameleoon.Internals.runtime.Visitor.currentVisit.obtainNumberConversions(t.id)>0){n=!0;break}}}else{n=!1;for(let t=0,r=Kameleoon.Internals.runtime.goals.length;t<r;++t){let r=Kameleoon.Internals.runtime.goals[t];if(r.id==e.value){if("PAGE_VIEWS"!=r.type&&"URL"!=r.type)n=void 0;if(Kameleoon.Internals.runtime.Visitor.currentVisit.obtainNumberConversions(r.id)>0)n=!0;break}}}return{targeting:n,rescheduleTargeting:void 0===n,excludedUndefinedIsTargeted:!0}}return null};Targeting.prototype.evaluate_HEAT_SLICE=function(e){let t;if(Kameleoon.Mentalist){let o=Kameleoon.Internals.runtime.storedData.obtainField("Gatherer","savedScoresFromMoments");if(!Kameleoon.Internals.runtime.simulationMode){if(o&&o[e.keymoment]){let n=Kameleoon.Internals.configuration.targetingSegmentIdToGoalIdsToKcs[e.keymoment][e.goal];let a=o[e.keymoment][e.goal];if(a&&a>=n[e.start]&&a<n[e.end])t=!0;else t=!1}}else{if(!Kameleoon.Internals.runtime.targetingSegmentIdToGoalIdsToKcs)Kameleoon.Internals.runtime.targetingSegmentIdToGoalIdsToKcs={};let n=Kameleoon.Internals.runtime.targetingSegmentIdToGoalIdsToKcs;if(!n[e.keymoment]||!n[e.keymoment][e.goal]){if(!n[e.keymoment])n[e.keymoment]={};if(!n[e.keymoment][e.goal])n[e.keymoment][e.goal]={};let t=`${Kameleoon.Internals.runtime.DATA_URL}/predict/latestPredictionScoreHistograms`;let o={};o.siteCode=Kameleoon.Internals.configuration.siteCode;o.goalId=e.goal;o.targetingSegmentId=e.keymoment;Kameleoon.Utils.performBeaconServerCall(Kameleoon.Utils.addParameterToURL(t,Kameleoon.Utils.parseObjectToUrlParams(o),!1),(function(t){if(4==t.readyState&&200==t.status){let o=JSON.parse(t.responseText);n[e.keymoment][e.goal]=[0].concat(o.scoreBoundaries).concat([1])}}))}else{let a=n[e.keymoment][e.goal];if(Object.keys(a).length>0&&o[e.keymoment]){let n=o[e.keymoment][e.goal];if(n&&n>=a[e.start]&&n<a[e.end])t=!0;else t=!1}}}}else t=!1;return{targeting:t,rescheduleTargeting:void 0===t}};Targeting.prototype.evaluate_EVENT=function(e){let t;for(let r=0,g=Kameleoon.API.Events.triggered.length;r<g;++r)if(e.value==Kameleoon.API.Events.triggered[r]){t=!0;break}return{targeting:t,rescheduleTargeting:void 0===t}};Targeting.prototype.evaluate_OPERATING_SYSTEM=function(e){let a;let r=Kameleoon.Gatherer.OperatingSystem.obtain();switch(e.value){case"LINUX":a="Linux"===r;break;case"MAC":a="Mac"===r;break;case"WINDOWS":a="Windows"===r;break;case"ANDROID":a="Android"===r;break;case"IOS":a="iOS"===r;break;case"WINDOWS_PHONE":a="Windows Phone"===r;break;default:a=!1;break}return{targeting:a,rescheduleTargeting:!1}};class Tracking{constructor(){this.timeBeforeSendTracking=20*60*1e3;this.checkAndSetKameleoonTrackingTime=(t,e)=>{const n=Kameleoon.Utils.secureSessionStorage("getItem","kameleoonAnalyticsTrackingTimes");const i=null==n?{}:JSON.parse(n);const a="Experiment-"+t;if(null==i[e]||null==i[e][a]||(new Date).getTime()>=i[e][a]+this.timeBeforeSendTracking){if(null==i[e])i[e]={};i[e][a]=(new Date).getTime();Kameleoon.Utils.secureSessionStorage("setItem","kameleoonAnalyticsTrackingTimes",JSON.stringify(i));return!0}return!1};this.obtainTealiumData=()=>{};this.processCustomIntegration=t=>{const e=Kameleoon.Internals.configuration.customIntegrations;for(let n=0;n<t.customIntegrations.length;n++){const i=t.customIntegrations[n];const a=e.filter((t=>t.name==i))[0];if(a){const e="'"+t.name.replace(/(['"])/g,"\\$1")+"'";Kameleoon.Utils.runProtectedScript(`(function(\n\t\t\t\t\t\texperimentID,\n\t\t\t\t\t\texperimentName,\n\t\t\t\t\t\tpersonalizationID,\n\t\t\t\t\t\tpersonalizationName,\n\t\t\t\t\t\tvariationID,\n\t\t\t\t\t\tvariationName) {\n\t\t\t\t\t\t\t${a.jsCode}\n\t\t\t\t\t})(\n\t\t\t\t\t\t${t.experimentAction?t.id:null},\n\t\t\t\t\t\t${t.experimentAction?e:null},\n\t\t\t\t\t\t${!t.experimentAction?t.id:null},\n\t\t\t\t\t\t${!t.experimentAction?e:null},\n\t\t\t\t\t\t${"reference"==t.associatedVariation.id.toString()?0:t.associatedVariation.id},\n\t\t\t\t\t\t${"'"+t.associatedVariation.name+"'"}\n\t\t\t\t\t)`,"kameleoonCustomIntegration"+i+".js")}}}}}Tracking.prototype.processCrazyEgg=function(e){if(window.CE2){let a="Reference"===e.associatedVariation.name?"Original":e.associatedVariation.name;window.CE_SNAPSHOT_NAME=e.id+"-"+a}else{let a=Kameleoon.Utils.setTimeout((function(){Kameleoon.Utils.clearTimeout(a);Kameleoon.Tracking.processCrazyEgg.apply(Kameleoon.Tracking,[e])}),150)}};Tracking.prototype.processWebtrekk=function(e){let n=Kameleoon.Tracking.findWebtrekkObject();if(null!=n){let t={};t[Kameleoon.Internals.configuration.webtrekkParameterIdVariation]=e.associatedVariation.id;n.sendinfo({linkId:"kameleoon_"+e.id+"_"+e.displayedVariation.name,customClickParameter:t})}else window.addEventListener("ck_events_webtrekk:wtparam_prepared",(function(){Kameleoon.Tracking.processWebtrekk(e)}))};Tracking.prototype.findWebtrekkObject=function(){return window.wt};Tracking.prototype.processUniversalAnalytics=function(e){let n=Kameleoon.Tracking.findUniversalAnalyticsObject();let a=n&&n.answer&&42==n.answer;if(!a&&e.universalAnalyticsTracking.eventCallDelayed){let n=Kameleoon.Utils.setTimeout((function(){Kameleoon.Utils.clearTimeout(n);Kameleoon.Tracking.processUniversalAnalytics.apply(Kameleoon.Tracking,[e])}),150);return}let i=e.universalAnalyticsTracking.trackingId;if(a&&e.universalAnalyticsTracking.eventCallDelayed&&i)if(void 0==Kameleoon.Tracking.obtainUniversalAnalyticsTracker(e)){let n=Kameleoon.Utils.setTimeout((function(){Kameleoon.Utils.clearTimeout(n);Kameleoon.Tracking.processUniversalAnalytics.apply(Kameleoon.Tracking,[e])}),150);return}let l=Kameleoon.Tracking.obtainUniversalAnalyticsTrackerPrefix(e);if(null==n||n&&null==n.answer){let n=Kameleoon.Utils.setTimeout((function(){Kameleoon.Utils.clearTimeout(n);Kameleoon.Tracking.processUniversalAnalytics.apply(Kameleoon.Tracking,[e])}),150)}else{if(e.universalAnalyticsTracking.dimension&&e.universalAnalyticsTracking.dimension<201)n(l+"set","dimension"+e.universalAnalyticsTracking.dimension,e.name+"/"+e.associatedVariation.name.substring(0,80));if(Kameleoon.Tracking.checkAndSetKameleoonTrackingTime(e.id,"universalAnalytics"))if(e.universalAnalyticsTracking.pageViewTracking){let a=e.name.replace(/\//gi,"-");n(l+"send","pageview","/Kameleoon/"+a+"/"+encodeURIComponent(e.associatedVariation.name))}else if(a||e.universalAnalyticsTracking.eventTracking)n(l+"send","event","Kameleoon",e.name,e.associatedVariation.name,void 0,{nonInteraction:1})}};Tracking.prototype.findUniversalAnalyticsObject=()=>window.ga;Tracking.prototype.obtainUniversalAnalyticsTrackerPrefix=e=>{let n=Kameleoon.Tracking.obtainUniversalAnalyticsTracker(e);return n?n.get("name")+".":""};Tracking.prototype.obtainUniversalAnalyticsTrackerFromTrackingId=e=>{let n=Kameleoon.Tracking.findUniversalAnalyticsObject();if(void 0!==n&&null!=n.getAll){let a=n.getAll();if(e){for(let n=0;n<a.length;++n)if(e==a[n].get("trackingId"))return a[n]}else if(a.length>0)return a[0]}return};Tracking.prototype.obtainUniversalAnalyticsTracker=e=>{let n;if(e&&e.universalAnalyticsTracking&&e.universalAnalyticsTracking.trackingId)n=e.universalAnalyticsTracking.trackingId;return Kameleoon.Tracking.obtainUniversalAnalyticsTrackerFromTrackingId(n)};class Variation{constructor(e){this.getAction=()=>Kameleoon.Internals.runtime.Campaigns.obtainCampaign(this.actionId);for(let t in e)this[t]=e[t]}applyJavascriptCode(e){if(this.javaScriptCode&&this.javaScriptCode.code&&(null==this.javaScriptCode.evaluated||e)){this.javaScriptCode.evaluated=!0;return Kameleoon.Utils.runProtectedScript(this.javaScriptCode.code,"kameleoonVariationJavaScriptCode-"+this.id+".js")}return null}preProcessRedirect(e){}process(){const e=Kameleoon.Internals.runtime.Campaigns.obtainCampaign(this.actionId);if(this.redirections&&!Kameleoon.Internals.runtime.editorEnabled)this.preProcessRedirect(e);if(this.forceNoFlicker&&!Kameleoon.Internals.runtime.domReady){var t="";for(var o=0,n=this.elementSets.length;o<n;++o)t+=(0!=o?", ":"")+this.elementSets[o].selector;Kameleoon.Utils.forceNoFlicker(t)}if(!this.styleSheetAdded){this.styleSheetAdded=!0;Kameleoon.Utils.addCSSStyleSheet(this.css,e,null)}if(this.javaScriptCode&&!this.permanentRefreshActive)if(!this.javaScriptCode.afterDOMReady)this.applyJavascriptCode(!1);else if(!this.permanentRefreshActive)Kameleoon.Utils.domReady((()=>{this.applyJavascriptCode(!1)}));if(this.forceNoFlicker&&!this.permanentRefreshActive)Kameleoon.Utils.removeBlockingStyleSheet();if(Kameleoon.Internals.runtime["enginePollerForVariation"+this.id]&&!this.permanentRefreshActive){if(Kameleoon.Internals.runtime.cantUseMutationObserver)Kameleoon.Utils.clearInterval(Kameleoon.Internals.runtime["enginePollerForVariation"+this.id]);Kameleoon.Internals.runtime["enginePollerForVariation"+this.id]=null}if(!Kameleoon.Internals.runtime["enginePollerForVariation"+this.id]&&!Kameleoon.Internals.runtime.editorMode&&!Kameleoon.Internals.runtime.kameleoonSelectionIframeMode){this.permanentRefreshActive=!0;Kameleoon.Internals.runtime.listenVariations.push(this);Kameleoon.Internals.runtime["enginePollerForVariation"+this.id]=!0;if(Kameleoon.Internals.runtime.cantUseMutationObserver)Kameleoon.Internals.runtime["enginePollerForVariation"+this.id]=Kameleoon.Utils.setInterval((()=>{this.process()}),10)}}processReplaceData(e){}}class Visit{constructor(e){this.addActionTriggered=(e,t)=>{if(t){let t=Kameleoon.Internals.runtime.storedData.obtainField("Gatherer","experimentsTriggered",{});t[e.toString()]=!0;Kameleoon.Internals.runtime.storedData.saveField("Gatherer","experimentsTriggered",t)}else{let t=Kameleoon.Internals.runtime.storedData.obtainField("Gatherer","personalizationsTriggered",{});t[e.toString()]=!0;Kameleoon.Internals.runtime.storedData.saveField("Gatherer","personalizationsTriggered",t)}};this.addActivity=(e,t)=>{if(t)this.lastActivityDate=e};this.addAdBlocker=()=>{this.Device.adBlocker=!0};this.addConversions=(e,t,i,s)=>{let n=s?-1:1;t*=n;i*=n;let a=this.conversions[e];let r=a?a.count:0;let o=a?a.revenue:0;let l=r+t;let u=o+i;if(l>0)if(u>=0)this.conversions[e]={count:l,revenue:u};else delete this.conversions[e];else delete this.conversions[e]};this.addCustomData=(e,t,i)=>{if(Kameleoon.Utils.testEmptyMap(t)){if(i)delete this.customData[e]}else{if(i||null==this.customData[e])this.customData[e]={};for(let i in t)this.customData[e][i]=(this.customData[e][i]||0)+t[i]}};this.addExperiment=(e,t,i)=>{if(null===i)return;if(void 0===this.ExperimentActivations[t])this.ExperimentActivations[t]={associatedVariationID:i,times:[]};this.ExperimentActivations[t].times.push(e);if(-1!=t){let e=Kameleoon.Internals.runtime.Campaigns.obtainCampaign(t,"experiment");let i=e?e.attributionWindow:Visitor.INFLUENCE_DELAY;if(i>0)this.ExperimentActivations[t].influence=i}};this.addGeolocation=(e,t,i,s,n,a)=>{this.Geolocation={country:e,region:t,city:i,postalCode:s,latitude:n,longitude:a}};this.addNumberClicks=e=>{if(e>0)this.clicks+=e};this.addPage=(e,t,i,s)=>{this.addActivity(e,!0);let n=s.filter((e=>null!=e));this.pages.push({timestamp:e,keyPagesMatched:i,referrersMatched:n.length>0?n:[]});let a=this.pageURLsVisited[t];if(null==a){a=[];this.pageURLsVisited[t]=a}a.push(e);for(let e in this.productEansLastPage)this.productEansAllButLastPages[e]=!0;this.productEansLastPage={}};this.addPersonalization=(e,t,i)=>{if(0==i)return null;if(void 0===this.PersonalizationActivations[t]||null!=i&&null==this.PersonalizationActivations[t].associatedVariationID)this.PersonalizationActivations[t]={associatedVariationID:i,times:[]};this.PersonalizationActivations[t].times.push(e);if(-1!=t){let e=Kameleoon.Internals.runtime.Campaigns.obtainCampaign(t,"personalization");let i=e?e.attributionWindow:Visitor.INFLUENCE_DELAY;if(i>0)this.PersonalizationActivations[t].influence=i}};this.addProduct=e=>{this.productEansLastPage[e]=!0};this.addTargetingSegment=(e,t)=>{let i=this.activatedSegments[t];if(null==i){i=[];this.activatedSegments[t]=i}i.push(e)};this.addWeather=e=>{this.Weather=e};this.clearCustomDataPage=()=>{for(let e in Kameleoon.Internals.runtime.Gatherer.configuration.customData){let t=Kameleoon.Internals.runtime.Gatherer.configuration.customData[e];if("PAGE"==t.scope)delete this.customData[e]}};this.computeActionNumberActivations=(e,t,i,s)=>{if(null==s[e])return 0;return this.computeObjectNumberPresence(t,i,s[e].times)};this.computeObjectNumberPresence=(e,t,i)=>{let s=0;for(let n=0,a=i.length;n<a;++n){let a=i[n];if((null==e||a>=e)&&(null==t||a<=t))s++}return s};this.convertVisitFromServer=()=>this;this.isVisitFinished=()=>this.lastActivityDate<(new Date).getTime()-Kameleoon.Internals.runtime.Gatherer.configuration.maxVisitIdleDuration;this.obtainKeyPageIsVisited=e=>{let t=this.pages.filter((t=>-1!=t.keyPagesMatched.indexOf(e)));return t.length>0};this.obtainMeanPageDuration=()=>{let e=new Date;let t=this.obtainTimesStartedPages();let i=OnlineMeanAndDeviation.createFromDifferences(t,!1,!0,!0);i.update([e.getTime()-t[t.length-1]]);return i.mean[0]};this.obtainNumberConversions=e=>{let t=this.conversions[e];return null==t?0:t.count};this.obtainPageNumberViews=(e,t,i,s)=>{let n=0;for(let a in this.pageURLsVisited)if(null!=a){let r=Kameleoon.Utils.computeRelativeURL(a);if((null==e||e.test(a)||e.test(r))&&(null==t||!t.test(a)&&!t.test(r)))n+=this.computeObjectNumberPresence(i,s,this.pageURLsVisited[a])}return n};this.obtainTimesStartedPages=()=>{let e=[];for(let t in this.pageURLsVisited)e.concat(this.pageURLsVisited[t]);return e.sort()};this.obtainPersonalizationNumberActivations=(e,t,i)=>this.computeActionNumberActivations(e,t,i,this.PersonalizationActivations);this.obtainReferrerIsPresent=e=>{let t=null==e?null:e+1;let i=this.pages.filter((e=>-1!=e.referrersMatched.indexOf(t)));return i.length>0};this.visitNumber=e.visitNumber||e.index||0;this.landingPageURL=e.landingPageURL||null;this.productEansAllButLastPages=e.productEansAllButLastPages||{};this.productEansLastPage=e.productEansLastPage||{};this.startDate=e.startDate||0;this.pageURLsVisited=e.pageURLsVisited||e.timesByPageHref||{};this.activatedSegments=e.activatedSegments||e.timesByTargetingSegmentId||{};this.visitorCode=e.visitorCode||"";this.customData=e.countByValueByCustomDatum||e.customData||{};this.clicks=e.clicks||e.numberClicks||0;this.lastActivityDate=e.lastActivityDate||e.timeLastActivity||this.startDate;let t=e.Device||{};this.Device={adBlocker:t.adBlocker||!1,browser:t.browser||"Other",browserVersion:t.browserVersion||null,os:t.os||"Other",screenHeight:t.screenHeight||null,screenWidth:t.screenWidth||null,timeZone:t.timeZone||"UTC",type:t.type?t.type.toLocaleUpperCase():null,windowHeight:t.windowHeight||null,windowWidth:t.windowWidth||null};let i=e.Geolocation||{};this.Geolocation={city:i.city||null,country:i.country||null,latitude:i.latitude||null,longitude:i.longitude||null,postalCode:i.postalCode||null,region:i.region||null};let s=e.Weather||{};this.Weather={conditionCode:s.conditionCode||null,conditionDescription:s.conditionDescription||null,cloudiness:s.cloudiness||null,humidity:s.humidity||null,pressure:s.pressure||null,sunrise:s.sunrise||null,sunset:s.sunset||null,temperature:s.temperature||null,windSpeed:s.windSpeed||null};this.conversions=e.conversions||{};this.ExperimentActivations=e.ExperimentActivations||{};this.PersonalizationActivations=e.PersonalizationActivations||{};this.pages=e.pages||[];if(e.keyPages){let t=this.obtainTimesStartedPages();e.keyPages.forEach(((i,s)=>{let n=t[s];let a=e.timesReferrers.indexOf(n);let r=-1!=a?e.referrers[a]:[];this.pages.push({timestamp:n,keyPagesMatched:i,referrersMatched:r})}));delete e.timesReferrers;delete e.referrers;delete e.keyPages}if(e.experimentInfluences){for(let t in e.experimentInfluences)if(this.ExperimentActivations[t])this.ExperimentActivations[t].influence=e.experimentInfluences[t][1];delete e.experimentInfluences}if(e.personalizationInfluences){for(let t in e.personalizationInfluences)if(this.PersonalizationActivations[t])this.PersonalizationActivations[t].influence=e.personalizationInfluences[t][1];delete e.personalizationInfluences}if(null!=e.Device.browserName){this.Device.browser=e.Device.browserName;delete e.Device.browserName}if(null!=e.Device.osName){this.Device.os=e.Device.osName;delete e.Device.osName}}obtainExperimentNumberActivations(e,t,i){return this.computeActionNumberActivations(e,t,i,this.ExperimentActivations)}}class Visitor{constructor(){this.addVisit=e=>{this.visits.push(e);this.currentVisit=e;this.totalVisits++;if(null==this.timeStartedEldestVisit)this.timeStartedEldestVisit=e.startDate;let t=this.visits.length;let i=Math.max(1,Kameleoon.Internals.configuration.maxNumberLocalVisits);if(t>i)this.visits=this.visits.slice(t-i)};this.addPreviousVisits=e=>{if(null!=this.currentVisit){let t=this.currentVisit;let i=[];for(let e=0,t=this.visits.length-1;e<t;++e)i.push(this.visits[e]);for(let t=0,s=e.length;t<s;++t)i.push(e[t]);i.sort(((e,t)=>{let i=e.startDate-t.startDate;if(0!=i)return i;i=e.visitNumber-t.visitNumber;return i}));let s=null;let o=null;for(let e=0,t=i.length;e<t;e++){let t=i[e];let n=t.visitorCode;let r=t.visitNumber;if(n!=s||r!=o)this.addVisit(t);s=n;o=r}this.addVisit(t)}};this.obtainKeyPageIsVisited=e=>{for(let t=0,i=this.visits.length;t<i;++t)if(this.visits[t].obtainKeyPageIsVisited(e))return!0;return!1};this.obtainReferrerIsPresent=e=>{for(let t=0,i=this.visits.length;t<i;++t)if(this.visits[t].obtainReferrerIsPresent(e))return!0;return!1};this.obtainNumberConversions=e=>{let t=0;for(let i=this.visits.length-1;i>=0;--i)t+=this.visits[i].obtainNumberConversions(e);return t};this.obtainActionNumberActivations=(e,t,i,s,o,n,r,a)=>{let l=a?"obtainExperimentNumberActivations":"obtainPersonalizationNumberActivations";let m=Kameleoon.Internals.runtime.Visitor.visits.length;let u=0;if(m>0){if(o){let t=Kameleoon.Internals.runtime.Visitor.visits[m-1][l](e,i,s);u+=r?t>0?1:0:t}if(n)for(let t=0,o=m-1;t<o;++t){let o=this.visits[t][l](e,i,s);u+=r?o>0?1:0:o}}return u};this.obtainPageNumberViews=(e,t,i,s,o,n)=>{let r=this.visits.length;let a=0;if(r>0){if(o)a+=this.visits[r-1].obtainPageNumberViews(e,t,i,s);if(n)for(let o=0,n=r-1;o<n;++o)a+=this.visits[o].obtainPageNumberViews(e,t,i,s)}return a};this.obtainTimeSincePreviousVisit=()=>{let e=0;if(this.visits.length>1){e=this.currentVisit.startDate-this.visits.slice(-2)[0].lastActivityDate;e=Math.max(e,Kameleoon.Internals.runtime.Gatherer.configuration.maxVisitIdleDuration)}return e};this.obtainVisitorCode=e=>{let t=!1;let i;let s=Kameleoon.Utils.readLocalData("kameleoonVisitorCode","COOKIE");const o=Kameleoon.Internals.runtime.storedData.obtainField("Gatherer","timeNextSynchronization",null);if(s)s=s.replace("_js_","");i=s;if(Kameleoon.Internals.configuration.useWideDomainSupport||Kameleoon.Internals.configuration.useVisitorCodeInLocalStorage){let e=Kameleoon.Internals.runtime.incomingStoredData?Kameleoon.Internals.runtime.incomingStoredData.kameleoonVisitorCode:Kameleoon.Utils.readLocalData("kameleoonVisitorCode","LS");if(e)i=e}if(e||null==i){i=Kameleoon.Utils.obtainRandomString(Visitor.VISITOR_CODE_LENGTH,Analyst.CODE_ALPHABET);t=!0}Kameleoon.Utils.saveVisitorCode(i,null==o);this.visitorCode=i;return t};this.obtainVisitorFromStoredData=()=>Kameleoon.Internals.runtime.storedData.Visitor;this.saveToStoredData=()=>{this.saveFieldToStoredData("visits",this.visits);this.saveFieldToStoredData("totalVisits",this.totalVisits);this.saveFieldToStoredData("timeStartedEldestVisit",this.timeStartedEldestVisit)};this.setVisitorCode=e=>{if(this.visitorCode!=e){Kameleoon.Internals.runtime.newVisitorCode=!0;Kameleoon.Utils.saveVisitorCode(e);this.visitorCode=e;Kameleoon.Internals.runtime.Visitor.currentVisit.visitorCode=e;if(this.visits)this.visits.forEach((t=>{t.visitorCode=e}));Kameleoon.Internals.runtime.Campaigns.obtainCampaignsList("experiments").forEach((e=>{if(void 0!==e.registeredVariationId){e.registeredVariationId=void 0;e.performVariationAssignment(!0)}}));Kameleoon.Internals.runtime.Campaigns.obtainCampaignsList("personalizations").forEach((e=>{if(e.customExpositionRate){if(Kameleoon.Internals.runtime.incomingStoredData)delete Kameleoon.Internals.runtime.incomingStoredData["kameleoonPersonalization-"+e.id];Kameleoon.Utils.eraseLocalData("kameleoonPersonalization-"+e.id,null,"LS")}}));this.saveToStoredData();Kameleoon.Gatherer.track(VisitEvent_Page);Kameleoon.Gatherer.track(VisitEvent_StaticData)}};this.updateCurrentVisit=()=>{};this.updateFromStoredData=(e,t,i)=>{let s=!1;let o=this.obtainVisitorFromStoredData();let n=o.visits;if(!this.visitorCode){let e=this.obtainVisitorCode(i);if(e)i=!0}if(n){let e=n.slice(-1)[0].visitorCode;if(e!=this.visitorCode){let t=Kameleoon.Utils.readLocalData("kameleoonVisitorCode","LS");if(t==e||!Kameleoon.Internals.runtime.Consent.hasGlobalConsent()){this.visitorCode=e;try{delete Kameleoon.Internals.runtime.localDataMap.COOKIE.kameleoonVisitorCode;delete Kameleoon.Internals.runtime.localDataMap.LS.kameleoonVisitorCode}catch(e){}}else if(t==this.visitorCode)i=!0}}if(i||e){t=!0;if(i)this.totalVisits=0}this.visits=[];if(!i&&n){n.forEach((e=>{this.addVisit(new Visit(e))}));this.totalVisits=o.totalVisits;this.timeStartedEldestVisit=o.timeStartedEldestVisit}let r=!1;if(t||!this.currentVisit||this.currentVisit.isVisitFinished()){let e=Kameleoon.Internals.runtime.storedData.obtainField("Gatherer","startsOfVisitForCurrentPage");Kameleoon.Internals.runtime.storedData.saveField("Gatherer","startsOfVisitForCurrentPage",e+1);Kameleoon.Internals.runtime.Gatherer.startOfVisit=s=!0;Kameleoon.Internals.runtime.storedData.resetForStartOfVisit();Kameleoon.Internals.runtime.storedData.saveField("Runtime","firstReferrerHref",Kameleoon.Gatherer.Referrer.obtainCorrected(!0)||null);Kameleoon.Internals.runtime.storedData.saveField("Runtime","firstReferrersIndices",Kameleoon.Gatherer.Referrer.obtainIndexes(!0)||[null]);Kameleoon.Internals.runtime.storedData.saveField("Runtime","landingKeyPagesIndices",Kameleoon.Gatherer.KeyPage.obtainIndexes()||[null]);let t;if(!this.currentVisit||i)t=0;else t=this.currentVisit.visitNumber+1;this.addVisit(new Visit({visitorCode:this.visitorCode,startDate:(new Date).getTime(),visitNumber:t,landingPageURL:Kameleoon.Utils.computeCurrentPageCleanAbsoluteURL(),Device:{browser:Kameleoon.Gatherer.Browser.obtain(),browserVersion:Kameleoon.Internals.runtime.Device.browserVersion,os:Kameleoon.Gatherer.OperatingSystem.obtain(),screenHeight:Kameleoon.Internals.runtime.Device.screenHeight,screenWidth:Kameleoon.Internals.runtime.Device.screenWidth,timeZone:Kameleoon.Gatherer.TimeZone.obtainId(),type:Kameleoon.Internals.runtime.Device.type,windowHeight:Kameleoon.Internals.runtime.Device.windowHeight,windowWidth:Kameleoon.Internals.runtime.Device.windowWidth}}));r=!0}this.saveToStoredData();Kameleoon.Internals.runtime.storedData.save(r)};this.trackInfluences=()=>{if(Kameleoon.Internals.runtime.Gatherer.startOfVisit&&this.visits.length>1)Kameleoon.Gatherer.track(VisitEvent_StaticData)};this.getCustomDataVisitor=()=>{let e={};let t=Kameleoon.Internals.runtime.Gatherer.configuration.customData;for(let i in Kameleoon.Internals.runtime.Visitor.currentVisit.customData){let s=t[i];if(null!=s&&!s.disabled)if("VISITOR"==s.scope){let t=Kameleoon.Internals.runtime.Visitor.currentVisit.customData[i];e[i]=t}}return e};this.registerVisitsRequestSuccessAndChangePreviousVisits=e=>{};this.compareCurrentVisitFromServer=e=>{};this.performRemoteVisitorSynchronization=()=>{};this.obtainProductData=(e,t,i,s)=>{};this.visits=[];this.currentVisit=null;this.totalVisits=0;this.updateFromStoredData(!1);Object.defineProperty(this,"customData",{enumerable:!0,get:()=>this.getCustomDataVisitor()});}saveFieldToStoredData(e,t){Kameleoon.Internals.runtime.storedData.Visitor[e]=t}remoteSynchronisation(e,t,i,s){}}Visitor.VISITOR_CODE_LENGTH=16;Visitor.INFLUENCE_DELAY=1e3*60*60*24*7;try{window.Kameleoon=new KameleoonEngine}catch(o){console.log(o)}
Kameleoon.Internals = {"configuration":{"API_HOST_NAME":"api","APP_HOST_NAME":"app","BACK_OFFICE_HOST_NAME":"old","BASE_EDITOR_URL":"//static.kameleoon.com/js/editor/","EDITOR_HOST_NAME":"editor","DOMAIN":"kameleoon.com","WIDE_DOMAIN":"kameleoon.eu","GUI_ESTIMATED_LOADING_TIME":3000,"IMAGE_PATH":"https://3xpgeyj8p0.kameleoon.eu/images/","PROXY_HOST_NAME":"proxy","QOOXDOO_ESTIMATED_LOADING_TIME":2000,"SERVER_CALL_ESTIMATED_LOADING_TIME":500,"STATIC_DIRECT_HOST_NAME":"static-direct","STATIC_HOST_NAME":"static","VISITOR_DOMAIN":"kameleoon.io","environment":"PRODUCTION","staticURL":"//static.kameleoon.eu/","maxNumberLocalVisits":25,"memberCode":"0","siteCode":"3xpgeyj8p0","abtestConsent":"OFF","abtestConsentOptout":"RUN","beforeAbtestConsent":"ALL","beforePersonalizationConsent":"ALL","personalizationConsent":"OFF","personalizationConsentOptout":"RUN","personalizationsDeviation":1,"experiments":[{"id":125971,"name":"[Segmente] Trendsetter","baseURL":"https://www.congstar.de/","experimentAction":true,"executeCodeForReference":true,"forcedTechnical":true,"dateModified":1694605810000,"dateStatusModified":1614507639000,"goals":[],"deviation":{"0":0,"535310":1},"variations":[{"name":"Reference","id":0,"deviation":0},{"name":"Variation 1","id":535310,"deviation":1}],"targetingSegmentId":146008,"attributionWindow":0,"kameleoonTracking":{"mainGoalId":284609}},{"id":169252,"name":"[Segmente] Reach","baseURL":"https://www.congstar.de/","experimentAction":true,"executeCodeForReference":true,"forcedTechnical":true,"dateModified":1694605811000,"dateStatusModified":1660914969000,"goals":[],"deviation":{"0":0,"774612":1},"variations":[{"name":"Reference","id":0,"deviation":0},{"name":"Reach","id":774612,"deviation":1}],"targetingSegmentId":193933,"attributionWindow":604800000,"kameleoonTracking":{"mainGoalId":284609}},{"id":169358,"name":"[Segmente] Remarketing","baseURL":"https://www.congstar.de/","experimentAction":true,"executeCodeForReference":true,"forcedTechnical":true,"dateModified":1694605811000,"dateStatusModified":1660915130000,"goals":[],"deviation":{"0":0,"774886":1},"variations":[{"name":"Reference","id":0,"deviation":0},{"name":"Remarketing","id":774886,"deviation":1}],"targetingSegmentId":193932,"attributionWindow":604800000,"kameleoonTracking":{"mainGoalId":284609}},{"id":185410,"name":"[Segmente] Google Paid","baseURL":"https://www.congstar.de/","experimentAction":true,"executeCodeForReference":true,"forcedTechnical":true,"dateModified":1694605811000,"dateStatusModified":1677070667000,"goals":[],"deviation":{"0":0,"820297":1},"variations":[{"name":"Reference","id":0,"deviation":0},{"name":"Google Paid","id":820297,"deviation":1}],"targetingSegmentId":210803,"attributionWindow":604800000,"kameleoonTracking":{"mainGoalId":284609}},{"id":187639,"name":"[Segmente|Mrz23] Bestandskunden","baseURL":"https://www.congstar.de/","experimentAction":true,"executeCodeForReference":true,"forcedTechnical":true,"dateModified":1694605812000,"dateStatusModified":1677625251000,"goals":[],"deviation":{"0":0,"826053":1},"variations":[{"name":"Reference","id":0,"deviation":0},{"name":"Variation 1","id":826053,"deviation":1}],"targetingSegmentId":146001,"attributionWindow":0,"kameleoonTracking":{"mainGoalId":284609}},{"id":187640,"name":"[Segmente|Mrz23] Interessenten","baseURL":"https://www.congstar.de/","experimentAction":true,"executeCodeForReference":true,"forcedTechnical":true,"dateModified":1694605812000,"dateStatusModified":1677625251000,"goals":[],"deviation":{"0":0,"826054":1},"variations":[{"name":"Reference","id":0,"deviation":0},{"name":"Variation 1","id":826054,"deviation":1}],"targetingSegmentId":146003,"attributionWindow":0,"kameleoonTracking":{"mainGoalId":284609},"customIntegrations":[]},{"id":187641,"name":"[Segmente|Mrz23] Unentschieden Tarif","baseURL":"https://www.congstar.de/","experimentAction":true,"executeCodeForReference":true,"forcedTechnical":true,"dateModified":1694605812000,"dateStatusModified":1677625251000,"goals":[],"deviation":{"0":0,"826055":1},"variations":[{"name":"Reference","id":0,"deviation":0},{"name":"Variation 1","id":826055,"deviation":1}],"targetingSegmentId":146006,"attributionWindow":0,"kameleoonTracking":{"mainGoalId":284609}},{"id":187642,"name":"[Segmente|Mrz23] Unentschieden Smartphone","baseURL":"https://www.congstar.de/","experimentAction":true,"executeCodeForReference":true,"forcedTechnical":true,"dateModified":1694605812000,"dateStatusModified":1677625251000,"goals":[],"deviation":{"0":0,"826056":1},"variations":[{"name":"Reference","id":0,"deviation":0},{"name":"Variation 1","id":826056,"deviation":1}],"targetingSegmentId":146007,"attributionWindow":0,"kameleoonTracking":{"mainGoalId":284609},"customIntegrations":[]},{"id":187647,"name":"[Segmente|Mrz23] Schnäppchenjäger","baseURL":"https://www.congstar.de/","experimentAction":true,"executeCodeForReference":true,"forcedTechnical":true,"dateModified":1694605813000,"dateStatusModified":1677625252000,"goals":[],"deviation":{"0":0,"826061":1},"variations":[{"name":"Reference","id":0,"deviation":0},{"name":"Variation 1","id":826061,"deviation":1}],"targetingSegmentId":146005,"attributionWindow":0,"kameleoonTracking":{"mainGoalId":284609},"customIntegrations":[]},{"id":187648,"name":"[Segmente|Mrz23] Premium","baseURL":"https://www.congstar.de/","experimentAction":true,"executeCodeForReference":true,"forcedTechnical":true,"dateModified":1694605813000,"dateStatusModified":1677625251000,"goals":[],"deviation":{"0":0,"826062":1},"variations":[{"name":"Reference","id":0,"deviation":0},{"name":"Variation 1","id":826062,"deviation":1}],"targetingSegmentId":146004,"attributionWindow":0,"kameleoonTracking":{"mainGoalId":284609},"customIntegrations":[]},{"id":187651,"name":"[Segmente|Mrz23] Unbekannt","baseURL":"https://www.congstar.de/","experimentAction":true,"executeCodeForReference":true,"forcedTechnical":true,"dateModified":1694605813000,"dateStatusModified":1677625252000,"goals":[],"deviation":{"0":0,"826067":1},"variations":[{"name":"Reference","id":0,"deviation":0},{"name":"Variation 1","id":826067,"deviation":1}],"targetingSegmentId":146002,"attributionWindow":0,"kameleoonTracking":{"mainGoalId":226514},"customIntegrations":[]},{"id":201180,"name":"[Congstar|MC] Tealium Umstellung","baseURL":"https://www.congstar.de/","experimentAction":true,"executeCodeForReference":true,"forcedTechnical":true,"dateModified":1702649802000,"dateStatusModified":1686907445000,"goals":[],"deviation":{"0":0.5,"856615":0.5},"variations":[{"name":"Reference","id":0,"deviation":0.5},{"name":"Variation 1","id":856615,"deviation":0.5}],"targetingSegmentId":222744,"attributionWindow":604800000,"kameleoonTracking":{"mainGoalId":284611}},{"id":225143,"name":"[MC] ANF Einzelseite","baseURL":"https://www.congstar.de/","experimentAction":true,"executeCodeForReference":true,"forcedTechnical":true,"dateModified":1701872304000,"dateStatusModified":1701872304000,"goals":[],"deviation":{"0":1,"912383":0},"variations":[{"name":"Reference","id":0,"deviation":1},{"name":"Variation 1","id":912383,"deviation":0}],"targetingSegmentId":242077,"attributionWindow":604800000,"kameleoonTracking":{"mainGoalId":284609}},{"id":225352,"name":"[Congstar|T52] hide statt xx GB","baseURL":"https://www.congstar.de/","experimentAction":true,"javaScriptCode":"\"use strict\";(s=>{const{pathname:e}=window.location,{processConversion:c}=Kameleoon.API.Goals;e.includes(\"/meincongstar/tarifwechsel/tarifauswahl\")?c(s[\"[T52] Access TW TA\"]):e.includes(\"/meincongstar/tarifwechsel/tarifkonfigurator\")?c(s[\"[T52] Access TW TK\"]):e.includes(\"/meincongstar/vertragsverlaengerung/tarifauswahl\")?c(s[\"[T52] Access VVL TA\"]):e.includes(\"/meincongstar/vertragsverlaengerung/tarifkonfigurator\")&&c(s[\"[T52] Access VVL TK\"])})({\"[T52] Access TW TA\":325325,\"[T52] Access TW TK\":325326,\"[T52] Access VVL TA\":325327,\"[T52] Access VVL TK\":325328,\"[T52] Access TW Übersicht\":325329,\"[T52] Access VVL Übersicht\":325330});","executeCodeForReference":true,"forcedTechnical":true,"dateModified":1705303119000,"dateStatusModified":1705303119000,"goals":[],"deviation":{"0":0.5,"912812":0.5},"variations":[{"name":"Reference","id":0,"deviation":0.5},{"name":"Ohne statt","id":912812,"deviation":0.5}],"targetingSegmentId":244000,"attributionWindow":604800000,"kameleoonTracking":{"mainGoalId":324708}},{"id":226827,"name":"[Congstar|Export] CSC Hash Test","baseURL":"https://www.congstar.de/","experimentAction":true,"executeCodeForReference":true,"forcedTechnical":true,"dateModified":1702912046000,"dateStatusModified":1702912046000,"goals":[],"deviation":{"0":0.5,"916265":0.5},"variations":[{"name":"Reference","id":0,"deviation":0.5},{"name":"Variation 1","id":916265,"deviation":0.5}],"targetingSegmentId":243720,"attributionWindow":604800000,"kameleoonTracking":{"mainGoalId":155918}},{"id":226828,"name":"[Congstar|T48] Smart App Banner 2.0","baseURL":"https://www.congstar.de/hilfe-service/rechnung/infos-zur-rechnung/","experimentAction":true,"javaScriptCode":"\"use strict\";","executeCodeForReference":true,"forcedTechnical":true,"dateModified":1705301454000,"dateStatusModified":1703833123000,"goals":[],"deviation":{"0":0,"916267":0.5,"916268":0.5},"variations":[{"name":"Reference","id":0,"deviation":0},{"name":"small banner","id":916267,"deviation":0.5},{"name":"big banner","id":916268,"deviation":0.5}],"targetingSegmentId":231800,"attributionWindow":604800000,"kameleoonTracking":{"mainGoalId":316383}},{"id":227179,"name":"[Congstar|T55] Verknappungs-Störer","baseURL":"https://www.congstar.de/","experimentAction":true,"javaScriptCode":"\"use strict\";(s=>{const{location:{pathname:c}}=document,{Goals:{processConversion:e}}=Kameleoon.API;c.includes(\"allnet-flat-l/\")?e(s[\"[T55] Access ANF L\"]):c.includes(\"allnet-flat-m/\")&&e(s[\"[T55] Access ANF M\"])})({\"[T55] Access ANF M\":326620,\"[T55] Access ANF L\":326621});","executeCodeForReference":true,"forcedTechnical":true,"dateModified":1704990672000,"dateStatusModified":1704956460000,"goals":[],"deviation":{"0":0.3333,"917173":0.3333,"917174":0.3333},"variations":[{"name":"Reference","id":0,"deviation":0.3333},{"name":"Laufzeit","id":917173,"deviation":0.3333},{"name":"Countdown","id":917174,"deviation":0.3333}],"targetingSegmentId":244508,"attributionWindow":604800000,"kameleoonTracking":{"mainGoalId":284609}},{"id":227926,"name":"[Congstar|T57] Legitimationsverfahren Klarna","baseURL":"https://www.congstar.de/","experimentAction":true,"javaScriptCode":"\"use strict\";(e=>{const t={targetContainer:\"checkout-legitimation-page\",weiterButtonContainer:'[pagetitle=\"Legitimation\"] .bucket .bucket__content .btn-primary--next',klarnaSelector:\".loading-overlay-wrapper .bucket__wrap #preOrderKlarnaIdent\",idnowSelector:\".loading-overlay-wrapper .bucket__wrap #idNow\",dhlSelector:\".loading-overlay-wrapper .bucket__wrap #legitimationDHLIdentCheck\"};Kameleoon.API.Core.runWhenElementPresent(t.targetContainer,(([o])=>{Kameleoon.API.Utils.addUniversalClickListener(o,(({target:o})=>{if(o.closest(t.weiterButtonContainer)){Kameleoon.API.Goals.processConversion(e[\"[T57] Click Weiter\"]);const r=o.closest(t.targetContainer).querySelector(t.klarnaSelector),n=o.closest(t.targetContainer).querySelector(t.idnowSelector),l=o.closest(t.targetContainer).querySelector(t.dhlSelector);null!=l&&l.checked?Kameleoon.API.Goals.processConversion(e[\"[T57] Select DHL\"]):null!=n&&n.checked?Kameleoon.API.Goals.processConversion(e[\"[T57] Select IDnow\"]):null!=r&&r.checked&&Kameleoon.API.Goals.processConversion(e[\"[T57] Select KlarnaIdent\"])}}))}),200)})({\"[T57] Click Weiter\":327093,\"[T57] Select DHL\":327094,\"[T57] Select IDnow\":327095,\"[T57] Select KlarnaIdent\":327096,\"[T57] Succesful DHL\":327097,\"[T57] Succesful IDnow\":327098,\"[T57] Succesful KlarnaIdent\":327099,\"[T57] Cart eSIM\":327100,\"[T57] Cart SIM Karte\":327101});","executeCodeForReference":true,"forcedTechnical":true,"dateModified":1705309263000,"dateStatusModified":1705309250000,"goals":[],"deviation":{"0":0.5,"919651":0.5},"variations":[{"name":"Reference","id":0,"deviation":0.5},{"name":"Klarna ausblenden","id":919651,"deviation":0.5}],"targetingSegmentId":245584,"attributionWindow":604800000,"kameleoonTracking":{"mainGoalId":284609}}],"personalizations":[{"dateCreated":1610442632000,"dateModified":1643281478000,"dateStatusModified":1610443020000,"id":39859,"forcedTechnical":true,"goals":[],"name":"Predictive Segment Test","targetingSegmentId":146451,"mainGoalId":155918,"configuration":"CUSTOM","associatedVariation":{"id":508384,"name":"Variation 1"},"priority":1,"customExpositionRate":1,"personalizationCheckConditionsRule":"ALL_CONDITIONS","scheduleItem":[],"targetingSegment":null,"attributionWindow":0,"expositionFrequencySameVisitorDelaySeconds":21600,"kameleoonTracking":{"mainGoalId":null}},{"dateCreated":1615904468000,"dateModified":1692773635000,"dateStatusModified":1646054792000,"id":42963,"forcedTechnical":true,"goals":[],"name":"[Startseite|bestandskunden|haupt]","targetingSegmentId":154418,"mainGoalId":284609,"configuration":"TEMPLATE","associatedVariation":{"id":621993,"name":"Variation 1"},"priority":7,"customExpositionRate":1,"personalizationCheckConditionsRule":"ALL_CONDITIONS","scheduleItem":[],"targetingSegment":null,"attributionWindow":604800000,"expositionFrequencySameVisitorDelaySeconds":21600,"universalAnalyticsTracking":{"dimension":1,"eventCallDelayed":true,"eventTracking":true},"kameleoonTracking":{"mainGoalId":null},"customIntegrations":["AOE Startseiten Bühne Event"]},{"dateCreated":1615905346000,"dateModified":1692773850000,"dateStatusModified":1646054415000,"id":42966,"forcedTechnical":true,"goals":[],"name":"[Startseite|unbekannt|haupt]","targetingSegmentId":154417,"mainGoalId":284609,"configuration":"TEMPLATE","associatedVariation":{"id":622001,"name":"Variation 1"},"priority":1,"customExpositionRate":1,"personalizationCheckConditionsRule":"ALL_CONDITIONS","scheduleItem":[],"targetingSegment":null,"attributionWindow":0,"expositionFrequencySameVisitorDelaySeconds":21600,"universalAnalyticsTracking":{"dimension":1,"eventCallDelayed":true,"eventTracking":true},"kameleoonTracking":{"mainGoalId":null},"customIntegrations":["AOE Startseiten Bühne Event"]},{"dateCreated":1615905548000,"dateModified":1692773778000,"dateStatusModified":1646059359000,"id":42967,"forcedTechnical":true,"goals":[],"name":"[Startseite|schnaeppchenjaeger|haupt]","targetingSegmentId":154415,"mainGoalId":284609,"configuration":"TEMPLATE","associatedVariation":{"id":668815,"name":"Variation 1"},"priority":5,"customExpositionRate":1,"personalizationCheckConditionsRule":"ALL_CONDITIONS","scheduleItem":[],"targetingSegment":null,"attributionWindow":0,"expositionFrequencySameVisitorDelaySeconds":21600,"universalAnalyticsTracking":{"dimension":1,"eventCallDelayed":true,"eventTracking":true},"kameleoonTracking":{"mainGoalId":null},"customIntegrations":["AOE Startseiten Bühne Event"]},{"dateCreated":1615905663000,"dateModified":1692773521000,"dateStatusModified":1646060187000,"id":42968,"forcedTechnical":true,"goals":[],"name":"[Startseite|premium|haupt]","targetingSegmentId":154416,"mainGoalId":284609,"configuration":"TEMPLATE","associatedVariation":{"id":627129,"name":"Variation 1"},"priority":6,"customExpositionRate":1,"personalizationCheckConditionsRule":"ALL_CONDITIONS","scheduleItem":[],"targetingSegment":null,"attributionWindow":0,"expositionFrequencySameVisitorDelaySeconds":21600,"universalAnalyticsTracking":{"dimension":1,"eventCallDelayed":true,"eventTracking":true},"kameleoonTracking":{"mainGoalId":null},"customIntegrations":["AOE Startseiten Bühne Event"]},{"dateCreated":1616073247000,"dateModified":1692773902000,"dateStatusModified":1646060462000,"id":43115,"forcedTechnical":true,"goals":[],"name":"[Startseite|unentschieden smartphone|haupt]","targetingSegmentId":154413,"mainGoalId":284609,"configuration":"TEMPLATE","associatedVariation":{"id":642238,"name":"Variation 1"},"priority":3,"customExpositionRate":1,"personalizationCheckConditionsRule":"ALL_CONDITIONS","scheduleItem":[],"targetingSegment":null,"attributionWindow":0,"expositionFrequencySameVisitorDelaySeconds":21600,"universalAnalyticsTracking":{"dimension":1,"eventCallDelayed":true,"eventTracking":true},"kameleoonTracking":{"mainGoalId":null},"customIntegrations":["AOE Startseiten Bühne Event"]},{"dateCreated":1616073874000,"dateModified":1692774001000,"dateStatusModified":1646061382000,"id":43116,"forcedTechnical":true,"goals":[],"name":"[Startseite|unentschieden tarif|haupt]","targetingSegmentId":154414,"mainGoalId":284609,"configuration":"TEMPLATE","associatedVariation":{"id":621980,"name":"Variation 1"},"priority":4,"customExpositionRate":1,"personalizationCheckConditionsRule":"ALL_CONDITIONS","scheduleItem":[],"targetingSegment":null,"attributionWindow":0,"expositionFrequencySameVisitorDelaySeconds":21600,"universalAnalyticsTracking":{"dimension":1,"eventCallDelayed":true,"eventTracking":true},"kameleoonTracking":{"mainGoalId":null},"customIntegrations":["AOE Startseiten Bühne Event"]}],"targetingSegments":[{"id":44710,"name":"bo.buyer.personas.segment.dissatisfied.name","tree":{"orOperator":false,"orGuiLevel":0,"leftChild":{"orOperator":false,"orGuiLevel":0,"leftChild":{"targetingCondition":{"type":"ACTIVE_SESSION","disabled":false,"weight":1,"include":true,"time":120000,"timeUnit":"SECOND","operator":"LOWER"}},"rightChild":{"targetingCondition":{"type":"PAGE_VIEWS","disabled":false,"weight":1,"operator":"LOWER","include":true,"value":4}}},"rightChild":{"orOperator":false,"orGuiLevel":0,"leftChild":{"orOperator":true,"orGuiLevel":1,"leftChild":{"targetingCondition":{"type":"ORIGIN_TYPE","disabled":false,"weight":1,"value":"SEO","include":true}},"rightChild":{"targetingCondition":{"type":"ORIGIN_TYPE","disabled":false,"weight":1,"value":"SEM","include":true}}},"rightChild":{"targetingCondition":{"type":"MOUSE_OUT","disabled":false,"weight":1,"include":true}}}}},{"id":44711,"name":"bo.buyer.personas.segment.snooper.name","tree":{"orOperator":false,"orGuiLevel":0,"leftChild":{"orOperator":false,"orGuiLevel":0,"leftChild":{"targetingCondition":{"type":"ACTIVE_SESSION","disabled":false,"weight":1,"include":true,"time":900000,"timeUnit":"SECOND","operator":"GREATER"}},"rightChild":{"targetingCondition":{"type":"PAGE_VIEWS","disabled":false,"weight":1,"operator":"GREATER","include":true,"value":8}}},"rightChild":{"orOperator":true,"orGuiLevel":1,"leftChild":{"targetingCondition":{"type":"ORIGIN_TYPE","disabled":false,"weight":1,"value":"SEO","include":true}},"rightChild":{"targetingCondition":{"type":"ORIGIN_TYPE","disabled":false,"weight":1,"value":"SEM","include":true}}}}},{"id":44712,"name":"bo.buyer.personas.segment.revenant.name","tree":{"orOperator":false,"orGuiLevel":0,"leftChild":{"targetingCondition":{"type":"NEW_VISITORS","disabled":false,"weight":1,"value":"RETURNING","include":true}},"rightChild":{"targetingCondition":{"type":"BROWSER","disabled":false,"weight":1,"value":"IE","version":null,"operator":"EQUAL","include":true}}}},{"id":130029,"name":"SF_FairFlat_Personalisierung","tree":{"targetingCondition":{"type":"PAGE_URL","disabled":false,"weight":1,"value":"https://www.congstar.de/?(\\?|#|$)","include":true}}},{"id":130030,"name":"SF_AllnetFlatS_Personalisierung","tree":{"targetingCondition":{"type":"PAGE_URL","disabled":false,"weight":1,"value":"https://www.congstar.de/?(\\?|#|$)","include":true}}},{"id":130031,"name":"SF_Prepaid_Personalisierung","tree":{"targetingCondition":{"type":"PAGE_URL","disabled":false,"weight":1,"value":"https://www.congstar.de/?(\\?|#|$)","include":true}}},{"id":130032,"name":"SF_Homespot_Personalisierung","tree":{"targetingCondition":{"type":"PAGE_URL","disabled":false,"weight":1,"value":"https://www.congstar.de/?(\\?|#|$)","include":true}}},{"id":130033,"name":"SF_AllnetFlatM_AllnetFlatL_Personalisier","tree":{"targetingCondition":{"type":"PAGE_URL","disabled":false,"weight":1,"value":"https://www.congstar.de/?(\\?|#|$)","include":true}}},{"id":130034,"name":"SF_Smartphones_Personalisierung","tree":{"targetingCondition":{"type":"PAGE_URL","disabled":false,"weight":1,"value":"https://www.congstar.de/?(\\?|#|$)","include":true}}},{"id":130035,"name":"SF_Apple_Personalisierung","tree":{"targetingCondition":{"type":"PAGE_URL","disabled":false,"weight":1,"value":"https://www.congstar.de/?(\\?|#|$)","include":true}}},{"id":130036,"name":"SF_Bestandskunden_Personalisierung","tree":{"targetingCondition":{"type":"PAGE_URL","disabled":false,"weight":1,"value":"https://www.congstar.de/?(\\?|#|$)","include":true}}},{"id":130037,"name":"SF_Huawei_Personalisierung","tree":{"targetingCondition":{"type":"PAGE_URL","disabled":false,"weight":1,"value":"https://www.congstar.de/?(\\?|#|$)","include":true}}},{"id":130038,"name":"SF_Samsung_Personalisierung","tree":{"targetingCondition":{"type":"PAGE_URL","disabled":false,"weight":1,"value":"https://www.congstar.de/?(\\?|#|$)","include":true}}},{"id":140536,"name":"Webseite Exit","tree":{"targetingCondition":{"type":"MOUSE_OUT","disabled":false,"weight":1,"include":true}},"trackMentalistPrediction":true,"mentalist":true},{"id":140537,"name":"PlanSeenS,M,FF(5GB)","tree":{"targetingCondition":{"type":"JS_CODE","disabled":false,"weight":1,"value":"return !!Kameleoon.API.CurrentVisit && Kameleoon.API.CurrentVisit.customData['[AI]PlanSeenS,M,FF(5GB)']","include":true}},"trackMentalistPrediction":true,"mentalist":true},{"id":140538,"name":"Page Views per Device","tree":{"orOperator":true,"orGuiLevel":0,"leftChild":{"orOperator":false,"orGuiLevel":1,"leftChild":{"targetingCondition":{"type":"PAGE_VIEWS","disabled":false,"weight":1,"operator":"EQUAL","include":true,"value":5}},"rightChild":{"targetingCondition":{"type":"JS_CODE","disabled":false,"weight":1,"value":"return Kameleoon.API.CurrentVisit && Kameleoon.API.CurrentVisit.device.type === \"Desktop\"","include":true}}},"rightChild":{"orOperator":true,"orGuiLevel":0,"leftChild":{"orOperator":false,"orGuiLevel":1,"leftChild":{"targetingCondition":{"type":"JS_CODE","disabled":false,"weight":1,"value":"return Kameleoon.API.CurrentVisit && Kameleoon.API.CurrentVisit.device.type === \"Phone\"","include":true}},"rightChild":{"targetingCondition":{"type":"PAGE_VIEWS","disabled":false,"weight":1,"operator":"EQUAL","include":true,"value":3}}},"rightChild":{"orOperator":false,"orGuiLevel":1,"leftChild":{"targetingCondition":{"type":"JS_CODE","disabled":false,"weight":1,"value":"return Kameleoon.API.CurrentVisit && Kameleoon.API.CurrentVisit.device.type === \"Tablet\"","include":true}},"rightChild":{"targetingCondition":{"type":"PAGE_VIEWS","disabled":false,"weight":1,"operator":"EQUAL","include":true,"value":4}}}}},"trackMentalistPrediction":true,"mentalist":true},{"id":142550,"name":"Time Elapsed per Device","tree":{"orOperator":true,"orGuiLevel":0,"leftChild":{"orOperator":false,"orGuiLevel":1,"leftChild":{"targetingCondition":{"type":"ACTIVE_SESSION","disabled":false,"weight":1,"include":true,"time":180000,"timeUnit":"SECOND","operator":"GREATER"}},"rightChild":{"targetingCondition":{"type":"JS_CODE","disabled":false,"weight":1,"value":"return Kameleoon.API.CurrentVisit && Kameleoon.API.CurrentVisit.device.type === \"Phone\"","include":true}}},"rightChild":{"orOperator":true,"orGuiLevel":0,"leftChild":{"orOperator":false,"orGuiLevel":1,"leftChild":{"targetingCondition":{"type":"JS_CODE","disabled":false,"weight":1,"value":"return Kameleoon.API.CurrentVisit && Kameleoon.API.CurrentVisit.device.type === \"Tablet\"","include":true}},"rightChild":{"targetingCondition":{"type":"ACTIVE_SESSION","disabled":false,"weight":1,"include":true,"time":255000,"timeUnit":"SECOND","operator":"GREATER"}}},"rightChild":{"orOperator":false,"orGuiLevel":1,"leftChild":{"targetingCondition":{"type":"JS_CODE","disabled":false,"weight":1,"value":"return Kameleoon.API.CurrentVisit && Kameleoon.API.CurrentVisit.device.type === \"Desktop\"","include":true}},"rightChild":{"targetingCondition":{"type":"ACTIVE_SESSION","disabled":false,"weight":1,"include":true,"time":300000,"timeUnit":"SECOND","operator":"GREATER"}}}}},"trackMentalistPrediction":true,"mentalist":true},{"id":146001,"name":"Bestandskunde Segment","tree":{"targetingCondition":{"type":"CUSTOM_DATUM","disabled":false,"weight":1,"index":16,"operator":"TRUE","include":true,"value":"true"}}},{"id":146002,"name":"Unbekannt Segment","tree":{"targetingCondition":{"type":"CUSTOM_DATUM","disabled":false,"weight":1,"index":25,"operator":"TRUE","include":true,"value":"true"}}},{"id":146003,"name":"Interessent Segment","tree":{"targetingCondition":{"type":"CUSTOM_DATUM","disabled":false,"weight":1,"index":17,"operator":"TRUE","include":true,"value":"true"}}},{"id":146004,"name":"Premium Segment","tree":{"targetingCondition":{"type":"CUSTOM_DATUM","disabled":false,"weight":1,"index":18,"operator":"TRUE","include":true,"value":"true"}}},{"id":146005,"name":"Schnappchenjager Segment","tree":{"targetingCondition":{"type":"CUSTOM_DATUM","disabled":false,"weight":1,"index":19,"operator":"TRUE","include":true,"value":"true"}}},{"id":146006,"name":"Unentschieden Tarif Segment","tree":{"targetingCondition":{"type":"CUSTOM_DATUM","disabled":false,"weight":1,"index":20,"operator":"TRUE","include":true,"value":"true"}}},{"id":146007,"name":"Unentschieden Smartphone Segment","tree":{"targetingCondition":{"type":"CUSTOM_DATUM","disabled":false,"weight":1,"index":21,"operator":"TRUE","include":true,"value":"true"}}},{"id":146008,"name":"Trendsetter Segment","tree":{"targetingCondition":{"type":"CUSTOM_DATUM","disabled":false,"weight":1,"index":22,"operator":"TRUE","include":true,"value":"true"}}},{"id":146451,"name":"Predictive Segment Test","tree":{"orOperator":true,"orGuiLevel":0,"leftChild":{"orOperator":false,"orGuiLevel":1,"leftChild":{"targetingCondition":{"type":"JS_CODE","disabled":false,"weight":1,"value":"return Kameleoon.API.CurrentVisit && Kameleoon.API.CurrentVisit.device.type === \"Desktop\"","include":true}},"rightChild":{"targetingCondition":{"type":"PAGE_VIEWS","disabled":false,"weight":1,"operator":"EQUAL","include":true,"value":5}}},"rightChild":{"orOperator":true,"orGuiLevel":0,"leftChild":{"orOperator":false,"orGuiLevel":1,"leftChild":{"targetingCondition":{"type":"JS_CODE","disabled":false,"weight":1,"value":"return Kameleoon.API.CurrentVisit && Kameleoon.API.CurrentVisit.device.type === \"Phone\"","include":true}},"rightChild":{"targetingCondition":{"type":"PAGE_VIEWS","disabled":false,"weight":1,"operator":"EQUAL","include":true,"value":3}}},"rightChild":{"orOperator":false,"orGuiLevel":1,"leftChild":{"targetingCondition":{"type":"JS_CODE","disabled":false,"weight":1,"value":"return Kameleoon.API.CurrentVisit && Kameleoon.API.CurrentVisit.device.type === \"Tablet\"","include":true}},"rightChild":{"targetingCondition":{"type":"PAGE_VIEWS","disabled":false,"weight":1,"operator":"EQUAL","include":true,"value":4}}}}}},{"id":146966,"name":"[AI|Congstar|T09] Deal Closer Postpaid","tree":{"orOperator":false,"orGuiLevel":0,"leftChild":{"orOperator":false,"orGuiLevel":0,"leftChild":{"orOperator":false,"orGuiLevel":1,"leftChild":{"orOperator":false,"orGuiLevel":1,"leftChild":{"targetingCondition":{"type":"PAGE_URL","disabled":false,"weight":1,"value":"(.*)congstar\\.de(.*)","include":true}},"rightChild":{"targetingCondition":{"type":"PAGE_URL","disabled":false,"weight":1,"value":"(.*)/checkout/(.*)","include":false}}},"rightChild":{"orOperator":false,"orGuiLevel":1,"leftChild":{"targetingCondition":{"type":"NEW_VISITORS","disabled":false,"weight":1,"value":"RETURNING","include":true}},"rightChild":{"targetingCondition":{"type":"DEVICE_TYPE","disabled":false,"weight":1,"value":"DESKTOP","include":true}}}},"rightChild":{"orOperator":false,"orGuiLevel":1,"leftChild":{"targetingCondition":{"type":"CONVERSIONS","disabled":false,"weight":1,"value":215972,"include":false}},"rightChild":{"targetingCondition":{"type":"CONVERSIONS","disabled":false,"weight":1,"value":226428,"include":false}}}},"rightChild":{"orOperator":false,"orGuiLevel":0,"leftChild":{"orOperator":false,"orGuiLevel":0,"leftChild":{"orOperator":false,"orGuiLevel":1,"leftChild":{"targetingCondition":{"type":"CONVERSIONS","disabled":false,"weight":1,"value":215973,"include":false}},"rightChild":{"targetingCondition":{"type":"CONVERSIONS","disabled":false,"weight":1,"value":226431,"include":false}}},"rightChild":{"targetingCondition":{"type":"JS_CODE","disabled":false,"weight":1,"value":"return Kameleoon.API.CurrentVisit && !!Kameleoon.API.CurrentVisit.customData['Plan PDP'];","include":true}}},"rightChild":{"orOperator":false,"orGuiLevel":0,"leftChild":{"targetingCondition":{"type":"HEAT_SLICE","disabled":false,"weight":1,"keymoment":140536,"goal":200517,"computationIsDone":"TRUE","include":true,"start":0,"end":20}},"rightChild":{"orOperator":true,"orGuiLevel":1,"leftChild":{"targetingCondition":{"type":"ORIGIN_TYPE","disabled":false,"weight":1,"value":"SEO","include":true}},"rightChild":{"targetingCondition":{"type":"ORIGIN_TYPE","disabled":false,"weight":1,"value":"DIRECT","include":true}}}}}}},{"id":146969,"name":"[KCS|Congstar|T09] Deal Closer Postpaid","tree":{"orOperator":false,"orGuiLevel":0,"leftChild":{"targetingCondition":{"type":"HEAT_SLICE","disabled":false,"weight":1,"keymoment":140536,"goal":200517,"computationIsDone":"TRUE","include":true,"start":12,"end":16}},"rightChild":{"targetingCondition":{"type":"EVENT","disabled":false,"weight":1,"value":"Deal_Closer_Postpaid_KCS","include":false}}}},{"id":147631,"name":"KSC 80-90  Order and Revenue EI","tree":{"targetingCondition":{"type":"HEAT_SLICE","disabled":false,"weight":1,"keymoment":140536,"goal":200517,"computationIsDone":"TRUE","include":true,"start":16,"end":18}}},{"id":147632,"name":"KCS 90-100  Order and Revenue EI","tree":{"targetingCondition":{"type":"HEAT_SLICE","disabled":false,"weight":1,"keymoment":140536,"goal":200517,"computationIsDone":"TRUE","include":true,"start":18,"end":20}}},{"id":147633,"name":"KCS 0-60  Order and Revenue EI","tree":{"targetingCondition":{"type":"HEAT_SLICE","disabled":false,"weight":1,"keymoment":140536,"goal":200517,"computationIsDone":"TRUE","include":true,"start":0,"end":12}}},{"id":147634,"name":"KCS 60-80  Order and Revenue EI","tree":{"targetingCondition":{"type":"HEAT_SLICE","disabled":false,"weight":1,"keymoment":140536,"goal":200517,"computationIsDone":"TRUE","include":true,"start":12,"end":16}}},{"id":154413,"name":"Buehne Unentschieden Smartphone Segment","tree":{"orOperator":false,"orGuiLevel":0,"leftChild":{"orOperator":true,"orGuiLevel":1,"leftChild":{"targetingCondition":{"type":"PAGE_URL","disabled":false,"weight":1,"value":"https:\\/\\/www\\.congstar\\.de\\/?(\\?|#|$)","include":true}},"rightChild":{"targetingCondition":{"type":"PAGE_URL","disabled":false,"weight":1,"value":"(.*)https\\://www\\.congstar\\.de/index\\.php\\?id\\=294147(.*)","include":true}}},"rightChild":{"targetingCondition":{"type":"CUSTOM_DATUM","disabled":false,"weight":1,"index":21,"operator":"TRUE","include":true,"value":null}}}},{"id":154414,"name":"Buehne Unentschieden Tarif Segment","tree":{"orOperator":false,"orGuiLevel":0,"leftChild":{"orOperator":true,"orGuiLevel":1,"leftChild":{"targetingCondition":{"type":"PAGE_URL","disabled":false,"weight":1,"value":"https:\\/\\/www\\.congstar\\.de\\/?(\\?|#|$)","include":true}},"rightChild":{"targetingCondition":{"type":"PAGE_URL","disabled":false,"weight":1,"value":"(.*)https\\://www\\.congstar\\.de/index\\.php\\?id\\=294147(.*)","include":true}}},"rightChild":{"targetingCondition":{"type":"CUSTOM_DATUM","disabled":false,"weight":1,"index":20,"operator":"TRUE","include":true,"value":null}}}},{"id":154415,"name":"Buehne Schnappchenjager Segment","tree":{"orOperator":false,"orGuiLevel":0,"leftChild":{"targetingCondition":{"type":"PAGE_URL","disabled":false,"weight":1,"value":"https:\\/\\/www\\.congstar\\.de\\/?(\\?|#|$|index\\.php\\?id=294147)","include":true}},"rightChild":{"targetingCondition":{"type":"CUSTOM_DATUM","disabled":false,"weight":1,"index":19,"operator":"TRUE","include":true,"value":null}}}},{"id":154416,"name":"Buehne Premium Segment","tree":{"orOperator":false,"orGuiLevel":0,"leftChild":{"orOperator":true,"orGuiLevel":1,"leftChild":{"targetingCondition":{"type":"PAGE_URL","disabled":false,"weight":1,"value":"https:\\/\\/www\\.congstar\\.de\\/?(\\?|#|$)","include":true}},"rightChild":{"targetingCondition":{"type":"PAGE_URL","disabled":false,"weight":1,"value":"(.*)https\\://www\\.congstar\\.de/index\\.php\\?id\\=294147(.*)","include":true}}},"rightChild":{"targetingCondition":{"type":"CUSTOM_DATUM","disabled":false,"weight":1,"index":18,"operator":"TRUE","include":true,"value":null}}}},{"id":154417,"name":"Buehne Unbekannt Segment","tree":{"orOperator":false,"orGuiLevel":0,"leftChild":{"orOperator":true,"orGuiLevel":1,"leftChild":{"targetingCondition":{"type":"PAGE_URL","disabled":false,"weight":1,"value":"https:\\/\\/www\\.congstar\\.de\\/?(\\?|#|$)","include":true}},"rightChild":{"targetingCondition":{"type":"PAGE_URL","disabled":false,"weight":1,"value":"(.*)https\\://www\\.congstar\\.de/index\\.php\\?id\\=294147(.*)","include":true}}},"rightChild":{"targetingCondition":{"type":"CUSTOM_DATUM","disabled":false,"weight":1,"index":25,"operator":"TRUE","include":true,"value":null}}}},{"id":154418,"name":"Buehne Bestandskunde Segment","tree":{"orOperator":false,"orGuiLevel":0,"leftChild":{"orOperator":true,"orGuiLevel":1,"leftChild":{"targetingCondition":{"type":"PAGE_URL","disabled":false,"weight":1,"value":"https:\\/\\/www\\.congstar\\.de\\/?(\\?|#|$)","include":true}},"rightChild":{"targetingCondition":{"type":"PAGE_URL","disabled":false,"weight":1,"value":"(.*)https\\://www\\.congstar\\.de/index\\.php\\?id\\=294147(.*)","include":true}}},"rightChild":{"targetingCondition":{"type":"CUSTOM_DATUM","disabled":false,"weight":1,"index":16,"operator":"TRUE","include":true,"value":null}}}},{"id":160106,"name":"[Congstar|CSC|P01] Dealcloser","tree":{"orOperator":false,"orGuiLevel":0,"leftChild":{"orOperator":false,"orGuiLevel":0,"leftChild":{"targetingCondition":{"type":"PAGE_URL","disabled":false,"weight":1,"value":"\\/meincongstar\\/tarifwechsel\\/tarifkonfigurator\\?contractid=.*&planid=(407|408)","include":true}},"rightChild":{"targetingCondition":{"type":"CUSTOM_DATUM","disabled":false,"weight":1,"index":27,"operator":"CONTAINS","include":true,"value":"mit_DealCloser"}}},"rightChild":{"targetingCondition":{"type":"CUSTOM_DATUM","disabled":false,"weight":1,"index":29,"operator":"TRUE","include":false,"value":null}}}},{"id":193932,"name":"Remarketing Segment","tree":{"targetingCondition":{"type":"CUSTOM_DATUM","disabled":false,"weight":1,"index":42,"operator":"TRUE","include":true,"value":null}}},{"id":193933,"name":"Reach Segment","tree":{"targetingCondition":{"type":"CUSTOM_DATUM","disabled":false,"weight":1,"index":43,"operator":"TRUE","include":true,"value":null}}},{"id":207533,"name":"Google Paid Segment","tree":{"targetingCondition":{"type":"CUSTOM_DATUM","disabled":false,"weight":1,"index":44,"operator":"TRUE","include":true,"value":null}}},{"id":210803,"name":"Google Paid","tree":{"targetingCondition":{"type":"CUSTOM_DATUM","disabled":false,"weight":1,"index":44,"operator":"TRUE","include":true,"value":null}}},{"id":222744,"name":"Segment for [Congstar|MC] Tealium Umstellung","tree":null},{"id":231800,"name":"[Congstar|T48] Smart App Banner 2.0 (3)","tree":{"orOperator":false,"orGuiLevel":0,"leftChild":{"orOperator":false,"orGuiLevel":0,"leftChild":{"orOperator":true,"orGuiLevel":1,"leftChild":{"targetingCondition":{"type":"OPERATING_SYSTEM","disabled":false,"weight":1,"value":"ANDROID","include":true}},"rightChild":{"targetingCondition":{"type":"OPERATING_SYSTEM","disabled":false,"weight":1,"value":"IOS","include":true}}},"rightChild":{"orOperator":true,"orGuiLevel":1,"leftChild":{"targetingCondition":{"type":"PAGE_URL","disabled":false,"weight":1,"value":"(.*)https\\://www\\.congstar\\.de/hilfe-service/mein-vertrag/handy-tarifwechsel/(.*)","include":true}},"rightChild":{"orOperator":true,"orGuiLevel":1,"leftChild":{"targetingCondition":{"type":"PAGE_URL","disabled":false,"weight":1,"value":"^https\\://www\\.congstar\\.de/hilfe-service/mein-vertrag/handy-tarifwechsel$","include":true}},"rightChild":{"orOperator":true,"orGuiLevel":1,"leftChild":{"targetingCondition":{"type":"PAGE_URL","disabled":false,"weight":1,"value":"^https\\://www\\.congstar\\.de/hilfe-service/rechnung/infos-zur-rechnung/$","include":true}},"rightChild":{"orOperator":true,"orGuiLevel":1,"leftChild":{"targetingCondition":{"type":"PAGE_URL","disabled":false,"weight":1,"value":"^https\\://www\\.congstar\\.de/hilfe-service/rechnung/infos-zur-rechnung$","include":true}},"rightChild":{"orOperator":true,"orGuiLevel":1,"leftChild":{"targetingCondition":{"type":"PAGE_URL","disabled":false,"weight":1,"value":"^https\\://www\\.congstar\\.de/hilfe-service/mein-vertrag/datenvolumen-zubuchen/$","include":true}},"rightChild":{"targetingCondition":{"type":"PAGE_URL","disabled":false,"weight":1,"value":"^https\\://www\\.congstar\\.de/hilfe-service/mein-vertrag/datenvolumen-zubuchen$","include":true}}}}}}}},"rightChild":{"targetingCondition":{"type":"DEVICE_TYPE","disabled":false,"weight":1,"value":"PHONE","include":true}}}},{"id":242077,"name":"[MC] ANF Einzelseiten","tree":{"targetingCondition":{"type":"PAGE_URL","disabled":false,"weight":1,"value":"\\/handytarife\\/allnet-flat-tarife\\/allnet-flat-(s|s-extra|m|l)\\/","include":true}}},{"id":243720,"name":"Segment for [Congstar|Export] CSC Hash Test","tree":{"targetingCondition":{"type":"PAGE_URL","disabled":false,"weight":1,"value":"(.*)/meincongstar(.*)","include":true}}},{"id":244000,"name":"[Congstar|T52] hide statt xx GB","tree":{"orOperator":false,"orGuiLevel":0,"leftChild":{"orOperator":true,"orGuiLevel":1,"leftChild":{"targetingCondition":{"type":"PAGE_URL","disabled":false,"weight":1,"value":"(.*)https\\://www\\.congstar\\.de/meincongstar/tarifwechsel/tarifauswahl(.*)","include":true}},"rightChild":{"orOperator":true,"orGuiLevel":1,"leftChild":{"targetingCondition":{"type":"PAGE_URL","disabled":false,"weight":1,"value":"(.*)https\\://www\\.congstar\\.de/meincongstar/tarifwechsel/tarifkonfigurator(.*)","include":true}},"rightChild":{"orOperator":true,"orGuiLevel":1,"leftChild":{"targetingCondition":{"type":"PAGE_URL","disabled":false,"weight":1,"value":"(.*)https\\://www\\.congstar\\.de/meincongstar/vertragsverlaengerung/tarifauswahl(.*)","include":true}},"rightChild":{"targetingCondition":{"type":"PAGE_URL","disabled":false,"weight":1,"value":"(.*)https\\://www\\.congstar\\.de/meincongstar/vertragsverlaengerung/tarifkonfigurator(.*)","include":true}}}}},"rightChild":{"orOperator":true,"orGuiLevel":1,"leftChild":{"targetingCondition":{"type":"PAGE_URL","disabled":false,"weight":1,"value":"(.*)wt_eid (.*)","include":false}},"rightChild":{"targetingCondition":{"type":"PAGE_URL","disabled":false,"weight":1,"value":"(.*)wt_t(.*)","include":false}}}}},{"id":244508,"name":"[Congstar|T55] Verknappungs-Störer","tree":{"orOperator":true,"orGuiLevel":1,"leftChild":{"targetingCondition":{"type":"PAGE_URL","disabled":false,"weight":1,"value":"(.*)https\\://www\\.congstar\\.de/handytarife/allnet-flat-tarife/allnet-flat-m/(.*)","include":true}},"rightChild":{"targetingCondition":{"type":"PAGE_URL","disabled":false,"weight":1,"value":"(.*)https\\://www\\.congstar\\.de/handytarife/allnet-flat-tarife/allnet-flat-l/(.*)","include":true}}}},{"id":245584,"name":"[Congstar|T57] Legitimationsverfahren Klarna","tree":{"targetingCondition":{"type":"PAGE_URL","disabled":false,"weight":1,"value":"(.*)/checkout/legitimation(.*)","include":true}}}],"variations":[{"name":"Variation 1","id":508384,"css":"","elementSets":[],"javaScriptCode":{"code":"//","afterDOMReady":false}},{"name":"Variation 1","id":535310,"css":"","elementSets":[]},{"name":"Variation 1","id":621980,"css":"","elementSets":[],"javaScriptCode":{"code":"!function(){var e={kamTag:\"hauptbuehne\",kamId:\"cmxvT2phUnl3RGlNaUtGL3hDcDhJdz09\",fetchGoalId:\"231041\",clickElementGoalId:\"231042\",displayPluginConfiguration:\"DISPLAY_ALL_DEVICES\",positionPluginConfiguration:\"INPAGE\",domElementSelector:'[container-id=\"7020347\"]',positionSelectorRelative:\"REPLACE\",positionDefinition:\"SELECTOR\",mainPageUrl:null};function n(){const e=new CustomEvent(\"kameleoon_perso_loading_done\");document.dispatchEvent(e)}e.persoID=43116,e.obtainWidgetInfo=function(){return Kameleoon.API.Personalizations.getById(43116)};const o=document.querySelector(e.domElementSelector);!o||o&&\"false\"!==o.getAttribute(\"changeable\")?function(o){const t=encodeURI(`https://web-api.congstar.de/cms/content/elements/${o}`),a=new XMLHttpRequest;a.open(\"GET\",t),a.setRequestHeader(\"x-api-key\",\"Kameleoon\"),a.addEventListener(\"load\",(()=>{var o;200===a.status&&(o=a.response,Kameleoon.API.Core.runWhenElementPresent(e.domElementSelector,(([t])=>{\"false\"!==t.getAttribute(\"changeable\")?(t.setAttribute(\"changeable\",\"false\"),Kameleoon.API.Core.runWhenConditionTrue((()=>window.congstar&&window.congstar.contentLoader&&window.congstar.contentLoader.kameleoon&&window.congstar.contentLoader.kameleoon.createElementFromHtmlContent),(()=>{t.insertAdjacentElement(\"beforeend\",window.congstar.contentLoader.kameleoon.createElementFromHtmlContent(`<div>${o}</div>`));const a=t.querySelector(\".loading-indicator\");a&&t.removeChild(a),t.addEventListener(\"click\",(()=>{Kameleoon.API.Goals.processConversion(e.clickElementGoalId)})),\"complete\"===document.readyState?setTimeout(n,0):window.addEventListener(\"load\",(()=>{setTimeout(n,0)}))}))):Kameleoon.API.Goals.processConversion(e.fetchGoalId)})))})),a.send()}(e.kamId):Kameleoon.API.Goals.processConversion(e.fetchGoalId)}();","afterDOMReady":false},"widgetTemplateInputData":{"kamTag":"hauptbuehne","kamId":"cmxvT2phUnl3RGlNaUtGL3hDcDhJdz09","fetchGoalId":"231041","clickElementGoalId":"231042","displayPluginConfiguration":"DISPLAY_ALL_DEVICES","positionPluginConfiguration":"INPAGE","domElementSelector":"[container-id=\"7020347\"]","positionSelectorRelative":"REPLACE","positionDefinition":"SELECTOR","mainPageUrl":null},"widgetTemplateName":null},{"name":"Variation 1","id":621993,"css":"","elementSets":[],"javaScriptCode":{"code":"!function(){var e={kamTag:\"hauptbuehne\",kamId:\"RHoycUtEc0lNcmNyVjVjdjRSeTNaUT09\",fetchGoalId:\"230890\",clickElementGoalId:\"230891\",displayPluginConfiguration:\"DISPLAY_ALL_DEVICES\",positionPluginConfiguration:\"INPAGE\",domElementSelector:'[container-id=\"7020347\"]',positionSelectorRelative:\"REPLACE\",positionDefinition:\"SELECTOR\",mainPageUrl:null};function o(){const e=new CustomEvent(\"kameleoon_perso_loading_done\");document.dispatchEvent(e)}e.persoID=42963,e.obtainWidgetInfo=function(){return Kameleoon.API.Personalizations.getById(42963)};const n=document.querySelector(e.domElementSelector);!n||n&&\"false\"!==n.getAttribute(\"changeable\")?function(n){const t=encodeURI(`https://web-api.congstar.de/cms/content/elements/${n}`),a=new XMLHttpRequest;a.open(\"GET\",t),a.setRequestHeader(\"x-api-key\",\"Kameleoon\"),a.addEventListener(\"load\",(()=>{var n;200===a.status&&(n=a.response,Kameleoon.API.Core.runWhenElementPresent(e.domElementSelector,(([t])=>{\"false\"!==t.getAttribute(\"changeable\")?(t.setAttribute(\"changeable\",\"false\"),Kameleoon.API.Core.runWhenConditionTrue((()=>window.congstar&&window.congstar.contentLoader&&window.congstar.contentLoader.kameleoon&&window.congstar.contentLoader.kameleoon.createElementFromHtmlContent),(()=>{t.insertAdjacentElement(\"beforeend\",window.congstar.contentLoader.kameleoon.createElementFromHtmlContent(`<div>${n}</div>`));const a=t.querySelector(\".loading-indicator\");a&&t.removeChild(a),t.addEventListener(\"click\",(()=>{Kameleoon.API.Goals.processConversion(e.clickElementGoalId)})),\"complete\"===document.readyState?setTimeout(o,0):window.addEventListener(\"load\",(()=>{setTimeout(o,0)}))}))):Kameleoon.API.Goals.processConversion(e.fetchGoalId)})))})),a.send()}(e.kamId):Kameleoon.API.Goals.processConversion(e.fetchGoalId)}();","afterDOMReady":false},"widgetTemplateInputData":{"kamTag":"hauptbuehne","kamId":"RHoycUtEc0lNcmNyVjVjdjRSeTNaUT09","fetchGoalId":"230890","clickElementGoalId":"230891","displayPluginConfiguration":"DISPLAY_ALL_DEVICES","positionPluginConfiguration":"INPAGE","domElementSelector":"[container-id=\"7020347\"]","positionSelectorRelative":"REPLACE","positionDefinition":"SELECTOR","mainPageUrl":null},"widgetTemplateName":null},{"name":"Variation 1","id":622001,"css":"","elementSets":[],"javaScriptCode":{"code":"!function(){var e={kamTag:\"hauptbuehne\",kamId:\"enMra29qemkyamc2T0kzc0U1Z0xFQT09\",fetchGoalId:\"230888\",clickElementGoalId:\"230889\",displayPluginConfiguration:\"DISPLAY_ALL_DEVICES\",positionPluginConfiguration:\"INPAGE\",domElementSelector:'[container-id=\"7020347\"]',positionSelectorRelative:\"REPLACE\",positionDefinition:\"SELECTOR\",mainPageUrl:null};function n(){const e=new CustomEvent(\"kameleoon_perso_loading_done\");document.dispatchEvent(e)}e.persoID=42966,e.obtainWidgetInfo=function(){return Kameleoon.API.Personalizations.getById(42966)};const o=document.querySelector(e.domElementSelector);!o||o&&\"false\"!==o.getAttribute(\"changeable\")?function(o){const t=encodeURI(`https://web-api.congstar.de/cms/content/elements/${o}`),a=new XMLHttpRequest;a.open(\"GET\",t),a.setRequestHeader(\"x-api-key\",\"Kameleoon\"),a.addEventListener(\"load\",(()=>{var o;200===a.status&&(o=a.response,Kameleoon.API.Core.runWhenElementPresent(e.domElementSelector,(([t])=>{\"false\"!==t.getAttribute(\"changeable\")?(t.setAttribute(\"changeable\",\"false\"),Kameleoon.API.Core.runWhenConditionTrue((()=>window.congstar&&window.congstar.contentLoader&&window.congstar.contentLoader.kameleoon&&window.congstar.contentLoader.kameleoon.createElementFromHtmlContent),(()=>{t.insertAdjacentElement(\"beforeend\",window.congstar.contentLoader.kameleoon.createElementFromHtmlContent(`<div>${o}</div>`));const a=t.querySelector(\".loading-indicator\");a&&t.removeChild(a),t.addEventListener(\"click\",(()=>{Kameleoon.API.Goals.processConversion(e.clickElementGoalId)})),\"complete\"===document.readyState?setTimeout(n,0):window.addEventListener(\"load\",(()=>{setTimeout(n,0)}))}))):Kameleoon.API.Goals.processConversion(e.fetchGoalId)})))})),a.send()}(e.kamId):Kameleoon.API.Goals.processConversion(e.fetchGoalId)}();","afterDOMReady":false},"widgetTemplateInputData":{"kamTag":"hauptbuehne","kamId":"enMra29qemkyamc2T0kzc0U1Z0xFQT09","fetchGoalId":"230888","clickElementGoalId":"230889","displayPluginConfiguration":"DISPLAY_ALL_DEVICES","positionPluginConfiguration":"INPAGE","domElementSelector":"[container-id=\"7020347\"]","positionSelectorRelative":"REPLACE","positionDefinition":"SELECTOR","mainPageUrl":null},"widgetTemplateName":null},{"name":"Variation 1","id":627129,"css":"","elementSets":[],"javaScriptCode":{"code":"!function(){var e={kamTag:\"hauptbuehne\",kamId:\"a1JPV2VyRFFneEdtSVJIcHNUTmZ1QT09\",fetchGoalId:\"230894\",clickElementGoalId:\"230895\",displayPluginConfiguration:\"DISPLAY_ALL_DEVICES\",positionPluginConfiguration:\"INPAGE\",domElementSelector:'[container-id=\"7020347\"]',positionSelectorRelative:\"REPLACE\",positionDefinition:\"SELECTOR\",mainPageUrl:null};function n(){const e=new CustomEvent(\"kameleoon_perso_loading_done\");document.dispatchEvent(e)}e.persoID=42968,e.obtainWidgetInfo=function(){return Kameleoon.API.Personalizations.getById(42968)};const o=document.querySelector(e.domElementSelector);!o||o&&\"false\"!==o.getAttribute(\"changeable\")?function(o){const t=encodeURI(`https://web-api.congstar.de/cms/content/elements/${o}`),a=new XMLHttpRequest;a.open(\"GET\",t),a.setRequestHeader(\"x-api-key\",\"Kameleoon\"),a.addEventListener(\"load\",(()=>{var o;200===a.status&&(o=a.response,Kameleoon.API.Core.runWhenElementPresent(e.domElementSelector,(([t])=>{\"false\"!==t.getAttribute(\"changeable\")?(t.setAttribute(\"changeable\",\"false\"),Kameleoon.API.Core.runWhenConditionTrue((()=>window.congstar&&window.congstar.contentLoader&&window.congstar.contentLoader.kameleoon&&window.congstar.contentLoader.kameleoon.createElementFromHtmlContent),(()=>{t.insertAdjacentElement(\"beforeend\",window.congstar.contentLoader.kameleoon.createElementFromHtmlContent(`<div>${o}</div>`));const a=t.querySelector(\".loading-indicator\");a&&t.removeChild(a),t.addEventListener(\"click\",(()=>{Kameleoon.API.Goals.processConversion(e.clickElementGoalId)})),\"complete\"===document.readyState?setTimeout(n,0):window.addEventListener(\"load\",(()=>{setTimeout(n,0)}))}))):Kameleoon.API.Goals.processConversion(e.fetchGoalId)})))})),a.send()}(e.kamId):Kameleoon.API.Goals.processConversion(e.fetchGoalId)}();","afterDOMReady":false},"widgetTemplateInputData":{"kamTag":"hauptbuehne","kamId":"a1JPV2VyRFFneEdtSVJIcHNUTmZ1QT09","fetchGoalId":"230894","clickElementGoalId":"230895","displayPluginConfiguration":"DISPLAY_ALL_DEVICES","positionPluginConfiguration":"INPAGE","domElementSelector":"[container-id=\"7020347\"]","positionSelectorRelative":"REPLACE","positionDefinition":"SELECTOR","mainPageUrl":null},"widgetTemplateName":null},{"name":"Variation 1","id":642238,"css":"","elementSets":[],"javaScriptCode":{"code":"!function(){var e={kamTag:\"hauptbuehne\",kamId:\"Vk9qaWNjSVo2eThzQkVoWlhOMFlzUT09\",fetchGoalId:\"231039\",clickElementGoalId:\"231040\",displayPluginConfiguration:\"DISPLAY_ALL_DEVICES\",positionPluginConfiguration:\"INPAGE\",domElementSelector:'[container-id=\"7020347\"]',positionSelectorRelative:\"REPLACE\",positionDefinition:\"SELECTOR\",mainPageUrl:null};function o(){const e=new CustomEvent(\"kameleoon_perso_loading_done\");document.dispatchEvent(e)}e.persoID=43115,e.obtainWidgetInfo=function(){return Kameleoon.API.Personalizations.getById(43115)};const n=document.querySelector(e.domElementSelector);!n||n&&\"false\"!==n.getAttribute(\"changeable\")?function(n){const t=encodeURI(`https://web-api.congstar.de/cms/content/elements/${n}`),a=new XMLHttpRequest;a.open(\"GET\",t),a.setRequestHeader(\"x-api-key\",\"Kameleoon\"),a.addEventListener(\"load\",(()=>{var n;200===a.status&&(n=a.response,Kameleoon.API.Core.runWhenElementPresent(e.domElementSelector,(([t])=>{\"false\"!==t.getAttribute(\"changeable\")?(t.setAttribute(\"changeable\",\"false\"),Kameleoon.API.Core.runWhenConditionTrue((()=>window.congstar&&window.congstar.contentLoader&&window.congstar.contentLoader.kameleoon&&window.congstar.contentLoader.kameleoon.createElementFromHtmlContent),(()=>{t.insertAdjacentElement(\"beforeend\",window.congstar.contentLoader.kameleoon.createElementFromHtmlContent(`<div>${n}</div>`));const a=t.querySelector(\".loading-indicator\");a&&t.removeChild(a),t.addEventListener(\"click\",(()=>{Kameleoon.API.Goals.processConversion(e.clickElementGoalId)})),\"complete\"===document.readyState?setTimeout(o,0):window.addEventListener(\"load\",(()=>{setTimeout(o,0)}))}))):Kameleoon.API.Goals.processConversion(e.fetchGoalId)})))})),a.send()}(e.kamId):Kameleoon.API.Goals.processConversion(e.fetchGoalId)}();","afterDOMReady":false},"widgetTemplateInputData":{"kamTag":"hauptbuehne","kamId":"Vk9qaWNjSVo2eThzQkVoWlhOMFlzUT09","fetchGoalId":"231039","clickElementGoalId":"231040","displayPluginConfiguration":"DISPLAY_ALL_DEVICES","positionPluginConfiguration":"INPAGE","domElementSelector":"[container-id=\"7020347\"]","positionSelectorRelative":"REPLACE","positionDefinition":"SELECTOR","mainPageUrl":null},"widgetTemplateName":null},{"name":"Variation 1","id":668815,"css":"","elementSets":[],"javaScriptCode":{"code":"!function(){var e={kamTag:\"hauptbuehne\",kamId:\"Q2dEbUZSZVFHUzdSV0N0Wk5DNnB1UT09\",fetchGoalId:\"230892\",clickElementGoalId:\"230893\",displayPluginConfiguration:\"DISPLAY_ALL_DEVICES\",positionPluginConfiguration:\"INPAGE\",domElementSelector:'[container-id=\"7020347\"]',positionSelectorRelative:\"REPLACE\",positionDefinition:\"SELECTOR\",mainPageUrl:null};function n(){const e=new CustomEvent(\"kameleoon_perso_loading_done\");document.dispatchEvent(e)}e.persoID=42967,e.obtainWidgetInfo=function(){return Kameleoon.API.Personalizations.getById(42967)};const o=document.querySelector(e.domElementSelector);!o||o&&\"false\"!==o.getAttribute(\"changeable\")?function(o){const t=encodeURI(`https://web-api.congstar.de/cms/content/elements/${o}`),a=new XMLHttpRequest;a.open(\"GET\",t),a.setRequestHeader(\"x-api-key\",\"Kameleoon\"),a.addEventListener(\"load\",(()=>{var o;200===a.status&&(o=a.response,Kameleoon.API.Core.runWhenElementPresent(e.domElementSelector,(([t])=>{\"false\"!==t.getAttribute(\"changeable\")?(t.setAttribute(\"changeable\",\"false\"),Kameleoon.API.Core.runWhenConditionTrue((()=>window.congstar&&window.congstar.contentLoader&&window.congstar.contentLoader.kameleoon&&window.congstar.contentLoader.kameleoon.createElementFromHtmlContent),(()=>{t.insertAdjacentElement(\"beforeend\",window.congstar.contentLoader.kameleoon.createElementFromHtmlContent(`<div>${o}</div>`));const a=t.querySelector(\".loading-indicator\");a&&t.removeChild(a),t.addEventListener(\"click\",(()=>{Kameleoon.API.Goals.processConversion(e.clickElementGoalId)})),\"complete\"===document.readyState?setTimeout(n,0):window.addEventListener(\"load\",(()=>{setTimeout(n,0)}))}))):Kameleoon.API.Goals.processConversion(e.fetchGoalId)})))})),a.send()}(e.kamId):Kameleoon.API.Goals.processConversion(e.fetchGoalId)}();","afterDOMReady":false},"widgetTemplateInputData":{"kamTag":"hauptbuehne","kamId":"Q2dEbUZSZVFHUzdSV0N0Wk5DNnB1UT09","fetchGoalId":"230892","clickElementGoalId":"230893","displayPluginConfiguration":"DISPLAY_ALL_DEVICES","positionPluginConfiguration":"INPAGE","domElementSelector":"[container-id=\"7020347\"]","positionSelectorRelative":"REPLACE","positionDefinition":"SELECTOR","mainPageUrl":null},"widgetTemplateName":null},{"name":"Reach","id":774612,"css":"","elementSets":[]},{"name":"Remarketing","id":774886,"css":"","elementSets":[]},{"name":"Google Paid","id":820297,"css":"","elementSets":[]},{"name":"Variation 1","id":826053,"css":"","elementSets":[]},{"name":"Variation 1","id":826054,"css":"","elementSets":[]},{"name":"Variation 1","id":826055,"css":"","elementSets":[]},{"name":"Variation 1","id":826056,"css":"","elementSets":[]},{"name":"Variation 1","id":826061,"css":"","elementSets":[]},{"name":"Variation 1","id":826062,"css":"","elementSets":[]},{"name":"Variation 1","id":826067,"css":"","elementSets":[]},{"name":"Variation 1","id":856615,"css":"","elementSets":[]},{"name":"Ohne statt","id":912812,"css":"","elementSets":[],"javaScriptCode":{"code":"\"use strict\";(()=>{const t=()=>{Kameleoon.API.Core.runWhenElementPresent('[data-testid=\"planSelectPlanBucket\"] [data-testid=\"planSelectPlanBucket-uspList\"]  > li:nth-child(1) > span,[data-testid=\"planConfigurator-planInformation-uspList\"] > li[data-testid*=\"planConfigurator-planInformation-uspList-item-UUID\"] > div:nth-child(2)',(t=>{t.forEach((t=>{const e=(t=>{const e=t.match(/^(\\d+\\s*GB)\\s+/)||t.match(/^(\\d+\\s*GB\\/\\w+)\\s+/);if(e)return e[1]})(t.textContent.trim());e&&(t.textContent=e)}))}))};t(),Kameleoon.API.Core.runWhenElementPresent(\".customer-contract-prolongation-select,.customer-contract-change-select,#planConfigurator\",(([e])=>{new MutationObserver((function(e,n){for(const n of e)for(const e of n.addedNodes)e instanceof Element&&(\"planSelectSliders-POSTPAID-planSelectSlider\"===e.getAttribute(\"data-testid\")||e.querySelector('[data-testid=\"planSelectSliders-POSTPAID-planSelectSlider\"]')||e.getAttribute(\"data-testid\").includes(\"planConfigurator-planInformation-uspList-item-UUID\"))&&t()})).observe(e,{childList:!0,subtree:!0})}))})();","afterDOMReady":false}},{"name":"Variation 1","id":916265,"css":"","elementSets":[]},{"name":"small banner","id":916267,"css":".kamCongstarT48Container{position:fixed;background:#fff;bottom:120px;color:#000;width:100%;padding:30px 30px 27px;border-radius:10px;display:flex;justify-content:center;align-items:center;text-align:center;flex-direction:column;z-index:999;left:50%;transform:translate(-50%,22%)}.i22-service-bar{z-index:998!important}.kamT48ImageContainer{height:178px}.kamT48CtaRedirect{width:100%;height:100%;top:92%;position:absolute;background:#fff;padding:15px 0}.kamT48CtaButton{width:95%;height:50px;background-color:#5bf;color:#000;border-radius:50px;margin-bottom:20px;position:relative;text-align:start;border:0;padding-left:35px;font-size:16px;font-weight:700}.kamCongstarT48Heading{text-align:center;font-family:Interstate;font-size:16px;font-style:normal;font-weight:700;line-height:normal;margin-bottom:8px}.kamT48SubHeading{text-align:center;font-family:Interstate;font-size:14px;font-style:normal;font-weight:350;line-height:normal;margin-bottom:16px;padding:0 10px}.kamT48close:after{position:absolute;right:0;top:-2px;content:\"\\00d7\";width:100%;height:100%;color:#000;font-size:25px;font-weight:700}.kamT48close{width:35px;height:35px;position:absolute;top:0;right:0}.gg-arrow-right{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:22px;color:#000;right:15px;top:25%;position:absolute}.gg-arrow-right::after,.gg-arrow-right::before{content:\"\";display:block;box-sizing:border-box;position:absolute;right:3px}.gg-arrow-right::after{width:8px;height:8px;border-top:2px solid;border-right:2px solid;transform:rotate(45deg);bottom:7px}.gg-arrow-right::before{width:16px;height:2px;bottom:10px;background:currentColor}","elementSets":[],"expositionFrequencySameVisit":1,"javaScriptCode":{"code":"\"use strict\";!function(){const e={meincongstar:{smallImage:\"https://storage.kameleoon.com/congstar/t48_smart_app_banner/login_small_2x.png\",bigImgUrl:\"https://storage.kameleoon.com/congstar/t48_smart_app_banner/login_medium_2x.png\",ctaUrl:\"https://applinks.congstar.de/app/uebersicht\",heading:\"Einfach eingeloggt bleiben?\",subHeading:\"Ganz schön bequem: Mit der congstar App musst du dich nicht jedes Mal neu einloggen.\"},\"Die congstar Rechnung\":{smallImage:\"https://storage.kameleoon.com/congstar/t48_smart_app_banner/rechnung_small_2x.png\",bigImgUrl:\"https://storage.kameleoon.com/congstar/t48_smart_app_banner/rechnung_medium_2x.png\",ctaUrl:\"https://applinks.congstar.de/app/rechnungen\",heading:\"Rechnung einsehen?\",subHeading:\"Geht am besten in der congstar App!\"},Tarifwechsel:{smallImage:\"https://storage.kameleoon.com/congstar/t48_smart_app_banner/tarifwechsel_small_2x.png\",bigImgUrl:\"https://storage.kameleoon.com/congstar/t48_smart_app_banner/tarifwechsel_medium_2x.png\",ctaUrl:\"https://applinks.congstar.de/app/tarifwechsel\",heading:\"Tarif wechseln?\",subHeading:\"Geht am besten in der congstar App!\"},\"Datenvolumen zubuchen\":{smallImage:\"https://storage.kameleoon.com/congstar/t48_smart_app_banner/datenvolumen_small_2x.png\",bigImgUrl:\"https://storage.kameleoon.com/congstar/t48_smart_app_banner/datenvolumen_medium_2x.png\",ctaUrl:\"https://applinks.congstar.de/app/datenpass\",heading:\"Datenvolumen zubuchen?\",subHeading:\"Geht am schnellsten über die congstar App!\"}},n={headingSelector:\".content .headline--skizzed\",containerWrapper:\".container-fluid.wrapper\"},a=(e,n,a,s)=>`<div class=\"kamCongstarT48Container\" smallUrl='${e}'>\\n    <h1 class=\"kamCongstarT48Heading\">${a}</h1>\\n    <p class=\"kamT48SubHeading\">${s}</p>\\n    <a href=${n} class=\"kamT48CtaRedirect\">\\n        <button class=\"kamT48CtaButton\">Jetzt App öffnen <span class='gg-arrow-right'></span></button>\\n    </a>\\n    <img src=${e} alt=\"\" class=\"kamT48ImageContainer\">\\n    <a  class=\"kamT48close\">\\n</div>`;(s=>{Promise.all(Object.values(n).map((e=>new Promise((n=>{Kameleoon.API.Core.runWhenElementPresent(e,n)}))))).then((function([[n],[t]]){const{href:r}=window.location;let o;r.includes(\"/meincongstar\")?o=e.meincongstar:r.includes(\"/hilfe-service/rechnung/infos-zur-rechnung/\")?o=e[\"Die congstar Rechnung\"]:r.includes(\"/hilfe-service/mein-vertrag/handy-tarifwechsel/\")?o=e.Tarifwechsel:r.includes(\"/hilfe-service/mein-vertrag/datenvolumen-zubuchen/\")&&(o=e[\"Datenvolumen zubuchen\"]);const{smallImage:l,bigImgUrl:c,ctaUrl:i,heading:g,subHeading:m}=o;t.insertAdjacentHTML(\"beforeend\",a(l,i,g,m)),Kameleoon.API.Goals.processConversion(s[\"[T48] View banner\"]);const p=t.querySelector(\".kamT48close\"),h=t.querySelector(\".kamT48CtaRedirect\");Kameleoon.API.Utils.addUniversalClickListener(p,(e=>{e.preventDefault(),e.stopPropagation(),Kameleoon.API.Goals.processConversion(s[\"[T48] Close banner\"]),p.closest(\".kamCongstarT48Container\").style.display=\"none\"})),Kameleoon.API.Utils.addUniversalClickListener(h,(()=>{Kameleoon.API.Goals.processConversion(s[\"[T48] CTA click banner\"])}))}))})({\"[T48] View banner\":316382,\"[T48] CTA click banner\":316383,\"[T48] Close banner\":316384})}();","afterDOMReady":false}},{"name":"big banner","id":916268,"css":".kamCongstarT48Container{position:fixed;background:#fff;bottom:165px;color:#000;width:100%;padding:30px 30px 27px;border-radius:10px;display:flex;justify-content:center;align-items:center;text-align:center;flex-direction:column;z-index:999;left:50%;transform:translate(-50%,22%)}.i22-service-bar{z-index:998!important}.kamT48ImageContainer{height:348px}.kamT48CtaRedirect{width:100%;height:100%;position:absolute;top:95%;padding:15px 0;background:#fff}.kamT48CtaButton{width:95%;height:50px;color:#000;background-color:#5bf;border-radius:50px;margin-bottom:20px;position:relative;text-align:start;border:0;padding-left:35px;font-size:16px;font-weight:700}.kamCongstarT48Heading{text-align:center;font-family:Interstate;font-size:16px;font-style:normal;font-weight:700;line-height:normal;margin-bottom:8px}.kamT48SubHeading{text-align:center;font-family:Interstate;font-size:14px;font-style:normal;font-weight:350;line-height:normal;margin-bottom:16px;padding:0 10px}.kamT48close:after{position:absolute;right:0;top:-2px;content:\"\\00d7\";width:100%;height:100%;color:#000;font-size:25px;font-weight:700}.kamT48close{width:35px;height:35px;position:absolute;top:0;right:0}.gg-arrow-right{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:22px;color:#000;right:15px;top:25%;position:absolute}.gg-arrow-right::after,.gg-arrow-right::before{content:\"\";display:block;box-sizing:border-box;position:absolute;right:3px}.gg-arrow-right::after{width:8px;height:8px;border-top:2px solid;border-right:2px solid;transform:rotate(45deg);bottom:7px}.gg-arrow-right::before{width:16px;height:2px;bottom:10px;background:currentColor}","elementSets":[],"expositionFrequencySameVisit":1,"javaScriptCode":{"code":"\"use strict\";!function(){const e={meincongstar:{smallImage:\"https://storage.kameleoon.com/congstar/t48_smart_app_banner/login_small_2x.png\",bigImgUrl:\"https://storage.kameleoon.com/congstar/t48_smart_app_banner/login_medium_2x.png\",ctaUrl:\"https://applinks.congstar.de/app/uebersicht\",heading:\"Einfach eingeloggt bleiben?\",subHeading:\"Ganz schön bequem: Mit der congstar App musst du dich nicht jedes Mal neu einloggen.\"},\"Die congstar Rechnung\":{smallImage:\"https://storage.kameleoon.com/congstar/t48_smart_app_banner/rechnung_small_2x.png\",bigImgUrl:\"https://storage.kameleoon.com/congstar/t48_smart_app_banner/rechnung_medium_2x.png\",ctaUrl:\"https://applinks.congstar.de/app/rechnungen\",heading:\"Rechnung einsehen?\",subHeading:\"Geht am besten in der congstar App!\"},Tarifwechsel:{smallImage:\"https://storage.kameleoon.com/congstar/t48_smart_app_banner/tarifwechsel_small_2x.png\",bigImgUrl:\"https://storage.kameleoon.com/congstar/t48_smart_app_banner/tarifwechsel_medium_2x.png\",ctaUrl:\"https://applinks.congstar.de/app/tarifwechsel\",heading:\"Tarif wechseln?\",subHeading:\"Geht am besten in der congstar App!\"},\"Datenvolumen zubuchen\":{smallImage:\"https://storage.kameleoon.com/congstar/t48_smart_app_banner/datenvolumen_small_2x.png\",bigImgUrl:\"https://storage.kameleoon.com/congstar/t48_smart_app_banner/datenvolumen_medium_2x.png\",ctaUrl:\"https://applinks.congstar.de/app/datenpass\",heading:\"Datenvolumen zubuchen?\",subHeading:\"Geht am schnellsten über die congstar App!\"}},n={headingSelector:\".content .headline--skizzed\",containerWrapper:\".container-fluid.wrapper\"},a=(e,n,a,s)=>`<div class=\"kamCongstarT48Container\" smallUrl='${e}'>\\n    <h1 class=\"kamCongstarT48Heading\">${a}</h1>\\n    <p class=\"kamT48SubHeading\">${s}</p>\\n    <a href=${n} class=\"kamT48CtaRedirect\">\\n        <button class=\"kamT48CtaButton\">Jetzt App öffnen <span class='gg-arrow-right'></span></button>\\n    </a>\\n    <img src=${e} alt=\"\" class=\"kamT48ImageContainer\">\\n    <a  class=\"kamT48close\">\\n</div>`;(s=>{Promise.all(Object.values(n).map((e=>new Promise((n=>{Kameleoon.API.Core.runWhenElementPresent(e,n)}))))).then((function([[n],[t]]){const{href:r}=window.location;let o;r.includes(\"/meincongstar\")?o=e.meincongstar:r.includes(\"/hilfe-service/rechnung/infos-zur-rechnung/\")?o=e[\"Die congstar Rechnung\"]:r.includes(\"/hilfe-service/mein-vertrag/handy-tarifwechsel/\")?o=e.Tarifwechsel:r.includes(\"/hilfe-service/mein-vertrag/datenvolumen-zubuchen/\")&&(o=e[\"Datenvolumen zubuchen\"]);const{smallImage:l,bigImgUrl:c,ctaUrl:i,heading:g,subHeading:m}=o;t.insertAdjacentHTML(\"beforeend\",a(c,i,g,m)),Kameleoon.API.Goals.processConversion(s[\"[T48] View banner\"]);const p=t.querySelector(\".kamT48close\"),h=t.querySelector(\".kamT48CtaRedirect\");Kameleoon.API.Utils.addUniversalClickListener(p,(e=>{e.preventDefault(),e.stopPropagation(),Kameleoon.API.Goals.processConversion(s[\"[T48] Close banner\"]),p.closest(\".kamCongstarT48Container\").style.display=\"none\"})),Kameleoon.API.Utils.addUniversalClickListener(h,(()=>{Kameleoon.API.Goals.processConversion(s[\"[T48] CTA click banner\"])}))}))})({\"[T48] View banner\":316382,\"[T48] CTA click banner\":316383,\"[T48] Close banner\":316384})}();","afterDOMReady":false}},{"name":"Laufzeit","id":917173,"css":"@charset \"UTF-8\";.KamT55Vorteilsseite .kamT55CustomTagWrapper{position:absolute;top:-5px;right:120px;padding:8.04px 8.48px 5.14px;width:max-content;height:auto;border-radius:17.739px;color:#000;text-align:center;font-family:Interstate Congstar Cond;font-size:23.652px;font-style:normal;font-weight:800;line-height:23.652px}@media (max-width:767px){.KamT55Vorteilsseite .hide-on-mobile{display:none}.KamT55Vorteilsseite .kamT55CustomTagWrapper{top:-20px;left:85px;right:0;font-size:16px;line-height:16px}.KamT55Vorteilsseite .kamT55CustomTagWrapper svg.hide-on-desktop text{transform:translate3d(13px,24px,0)!important}}@media (max-width:991px){.KamT55Vorteilsseite .hide-on-mobile{display:none}.KamT55Vorteilsseite .kamT55CustomTagWrapper{right:-10px;top:-20px;font-size:16px;line-height:16px}.KamT55Vorteilsseite .kamT55CustomTagWrapper svg.hide-on-desktop text{transform:translate3d(13px,24px,0)!important}}@media (min-width:992px){.KamT55Vorteilsseite .hide-on-desktop{display:none}}","elementSets":[],"javaScriptCode":{"code":"\"use strict\";Kameleoon.API.Core.runWhenConditionTrue((()=>\"complete\"===document.readyState),(()=>{Kameleoon.API.Core.runWhenElementPresent('div[data-testid=\"data-volume\"]>div>div',(([t])=>{document.body.classList.add(\"KamT55Vorteilsseite\");const e=document.createElement(\"div\");e.classList.add(\"kamT55CustomTagWrapper\"),e.innerHTML=((t,e)=>`\\n<svg class=\"hide-on-mobile\" xmlns=\"http://www.w3.org/2000/svg\" width=\"124\" height=\"62\" viewBox=\"0 0 124 62\" fill=\"none\">\\n    <path d=\"M23.1284 0.262208L110.588 0.262209C117.615 0.262209 123.311 5.95794 123.311 12.9846L123.311 48.7052C123.311 55.7319 117.615 61.4276 110.588 61.4276L23.1284 61.4276C16.1017 61.4276 10.406 55.7319 10.406 48.7052L10.406 33.6439L0.130188 11.5533L10.4451 11.5533C10.4892 11.2328 10.5454 10.9564 10.614 10.7044C11.688 4.76642 16.8797 0.262208 23.1284 0.262208Z\" fill=\"#EA7AEA\"></path>\\n    <text style=\"transform: translate3d(23.6px, 27px, 50px);fill: black;\">nur noch</text>\\n    <text style=\"transform: translate3d(28px, 51px, 50px);fill: black;\">${\"var1\"===e?`bis ${t}`:`${t} TAGE`}</text>\\n</svg>\\n<svg class=\"hide-on-desktop\" xmlns=\"http://www.w3.org/2000/svg\" width=\"141\" height=\"36\" viewBox=\"0 0 141 36\" fill=\"none\">\\n    <path d=\"M12.9545 35.416L133.834 35.416C137.792 35.416 141 32.2077 141 28.2497L141 8.12883C141 4.17081 137.792 0.962498 133.834 0.962498L12.9545 0.962496C8.99649 0.962496 5.78818 4.17081 5.78818 8.12883L5.78818 16.6127L7.58436e-08 29.0559L5.81024 29.0559C5.83505 29.2364 5.86675 29.3922 5.90533 29.5341C6.51035 32.8789 9.43474 35.416 12.9545 35.416Z\" fill=\"#EA7AEA\"/>\\n    <text style=\"transform: translate3d(28px, 51px, 50px);fill: black;\">NUR NOCH ${\"var1\"===e?`bis ${t}`:`${t} TAGE`}</text>\\n</svg>`)(\"25.01.\",\"var1\"),t.insertAdjacentElement(\"beforeEnd\",e)}),100)}));","afterDOMReady":false}},{"name":"Countdown","id":917174,"css":"@charset \"UTF-8\";.KamT55Vorteilsseite .kamT55CustomTagWrapper{position:absolute;top:-5px;right:120px;padding:8.04px 8.48px 5.14px;width:max-content;height:auto;border-radius:17.739px;color:#000;text-align:center;font-family:Interstate Congstar Cond;font-size:23.652px;font-style:normal;font-weight:800;line-height:23.652px}@media (max-width:767px){.KamT55Vorteilsseite .hide-on-mobile{display:none}.KamT55Vorteilsseite .kamT55CustomTagWrapper{top:-20px;left:85px;right:0;font-size:16px;line-height:16px}.KamT55Vorteilsseite .kamT55CustomTagWrapper svg.hide-on-desktop text{transform:translate3d(13px,24px,0)!important}}@media (max-width:991px){.KamT55Vorteilsseite .hide-on-mobile{display:none}.KamT55Vorteilsseite .kamT55CustomTagWrapper{right:-10px;top:-20px;font-size:16px;line-height:16px}.KamT55Vorteilsseite .kamT55CustomTagWrapper svg.hide-on-desktop text{transform:translate3d(13px,24px,0)!important}}@media (min-width:992px){.KamT55Vorteilsseite .hide-on-desktop{display:none}.KamT55Vorteilsseite .kamT55CustomTagWrapper svg.hide-on-mobile text:last-child{transform:translate3d(35px,51px,50px)!important}}","elementSets":[],"javaScriptCode":{"code":"\"use strict\";Kameleoon.API.Core.runWhenConditionTrue((()=>\"complete\"===document.readyState),(()=>{Kameleoon.API.Core.runWhenElementPresent('div[data-testid=\"data-volume\"]>div>div',(([e])=>{document.body.classList.add(\"KamT55Vorteilsseite\");const t=document.createElement(\"div\");t.classList.add(\"kamT55CustomTagWrapper\");const n=function(e){const t=new Date,n=new Date(e).getTime()-t.getTime();return Math.ceil(n/864e5)}(\"2024-01-26\");t.innerHTML=((e,t)=>`\\n<svg class=\"hide-on-mobile\" xmlns=\"http://www.w3.org/2000/svg\" width=\"124\" height=\"62\" viewBox=\"0 0 124 62\" fill=\"none\">\\n    <path d=\"M23.1284 0.262208L110.588 0.262209C117.615 0.262209 123.311 5.95794 123.311 12.9846L123.311 48.7052C123.311 55.7319 117.615 61.4276 110.588 61.4276L23.1284 61.4276C16.1017 61.4276 10.406 55.7319 10.406 48.7052L10.406 33.6439L0.130188 11.5533L10.4451 11.5533C10.4892 11.2328 10.5454 10.9564 10.614 10.7044C11.688 4.76642 16.8797 0.262208 23.1284 0.262208Z\" fill=\"#EA7AEA\"></path>\\n    <text style=\"transform: translate3d(23.6px, 27px, 50px);fill: black;\">nur noch</text>\\n    <text style=\"transform: translate3d(28px, 51px, 50px);fill: black;\">${\"var1\"===t?`bis ${e}`:`${e} TAGE`}</text>\\n</svg>\\n<svg class=\"hide-on-desktop\" xmlns=\"http://www.w3.org/2000/svg\" width=\"141\" height=\"36\" viewBox=\"0 0 141 36\" fill=\"none\">\\n    <path d=\"M12.9545 35.416L133.834 35.416C137.792 35.416 141 32.2077 141 28.2497L141 8.12883C141 4.17081 137.792 0.962498 133.834 0.962498L12.9545 0.962496C8.99649 0.962496 5.78818 4.17081 5.78818 8.12883L5.78818 16.6127L7.58436e-08 29.0559L5.81024 29.0559C5.83505 29.2364 5.86675 29.3922 5.90533 29.5341C6.51035 32.8789 9.43474 35.416 12.9545 35.416Z\" fill=\"#EA7AEA\"/>\\n    <text style=\"transform: translate3d(28px, 51px, 50px);fill: black;\">NUR NOCH ${\"var1\"===t?`bis ${e}`:`${e} TAGE`}</text>\\n</svg>`)(n,\"var2\"),e.insertAdjacentElement(\"beforeEnd\",t)}),100)}));","afterDOMReady":false}},{"name":"Klarna ausblenden","id":919651,"css":".kamCongstarT57Klar{display:none}","elementSets":[],"javaScriptCode":{"code":"\"use strict\";Kameleoon.API.Core.runWhenElementPresent(\".loading-overlay-wrapper .bucket__wrap #preOrderKlarnaIdent\",(([e])=>{e.closest(\"congstar-bucket\").classList.add(\"kamCongstarT57Klar\")}));","afterDOMReady":false}},{"id":0,"name":"Reference","css":"","elementSets":[]},{"id":null,"name":"Excluded"}],"goals":[{"id":155918,"name":"Engagement","type":"ENGAGEMENT"},{"id":185002,"name":"[GG] Kündigung im CSC abgeschickt","type":"CUSTOM"},{"id":186971,"name":"[GG] Warenkorb","type":"URL","url":"(.*)checkout/warenkorb(.*)"},{"id":186972,"name":"[GG] Vertragsverlängerung","type":"URL","url":"\\/meincongstar\\/vertragsverl.*bestaetigung"},{"id":186983,"name":"[GG] Tarifwechsel in CSC","type":"URL","url":"(.*)/meincongstar/tarifwechsel/bestaetigung(.*)"},{"id":192079,"name":"Klick auf Download Center","type":"CLICK"},{"id":192907,"name":"CTA  - Zum Ratgeber","type":"CLICK"},{"id":195699,"name":"Click on POPIN Smart App Banner für Android-User","type":"CLICK"},{"id":195700,"name":"Click on STICKY_BLOCK Smart App Banner für Android-User","type":"CLICK"},{"id":199558,"name":"[T02] Click on FAQ service bar","type":"CUSTOM"},{"id":199559,"name":"[T02] Click on FAQ service page","type":"CUSTOM"},{"id":199560,"name":"[T02] Click on FAQ contact page","type":"CUSTOM"},{"id":199561,"name":"[T02] Click on “Service-Chat” / “Chatbot” tile","type":"CUSTOM"},{"id":199563,"name":"[T02] Click on Service service bar","type":"CUSTOM"},{"id":199564,"name":"[T02] Click on Kontakt service bar","type":"CUSTOM"},{"id":199565,"name":"[T02] Exit after Chat/FAQ","type":"CUSTOM"},{"id":200363,"name":"[T01] Click on plan in welcome","type":"CUSTOM"},{"id":200364,"name":"[T01] Click on device 1 in welcome","type":"CUSTOM"},{"id":200365,"name":"[T01] Click inside welcome","type":"CUSTOM"},{"id":200368,"name":"[T01] Order relevant products","type":"CUSTOM"},{"id":200372,"name":"[GG] Add2Cart (Tealium)","type":"CUSTOM"},{"id":200517,"name":"[GG] Order and Revenue","type":"CUSTOM"},{"id":200536,"name":"[GG] View plan page","type":"URL","url":"https\\://www\\.congstar\\.de/handytarife/(.*)"},{"id":200539,"name":"[GG] View plan/ smartphone page","type":"URL","url":"https://www.congstar.de/handys/details/?([\\?#].*)?|https://www.congstar.de/handytarife(/allnet-flat-tarife)?/?([\\?#].*)?"},{"id":204969,"name":"Click on POPIN Salesforce DMP Segments","type":"CLICK"},{"id":206517,"name":"[T02] Exit after Chat/FAQ - service button","type":"CUSTOM"},{"id":211827,"name":"[T03] Click on browser icons","type":"CUSTOM"},{"id":211828,"name":"[T03] Click on close button","type":"CUSTOM"},{"id":211838,"name":"[T03] More than 1 PV","type":"PAGE_VIEWS","minPageViews":2},{"id":211841,"name":"[T03] Order and Revenue after interaction with banner","type":"CUSTOM"},{"id":211852,"name":"[T03] More than 1 PV after closing","type":"CUSTOM"},{"id":211878,"name":"[GG] VVL  in CSC (Seite)","type":"URL","url":"https\\://www\\.congstar\\.de/meincongstar/vertragsverlaengerung/bestaetigung(.*)"},{"id":211879,"name":"[T03] Exit after closing","type":"CUSTOM"},{"id":211892,"name":"[GG] Time on site  > 1 min","type":"TIME_SPENT","minTimeSpent":60001},{"id":211893,"name":"[GG] Time on site  > 2 min","type":"TIME_SPENT","minTimeSpent":120001},{"id":211894,"name":"[GG] Time on site  > 3 min","type":"TIME_SPENT","minTimeSpent":180001},{"id":211895,"name":"[GG] Time on site  > 4 min","type":"TIME_SPENT","minTimeSpent":240001},{"id":211896,"name":"[GG] Time on site  > 5 min","type":"TIME_SPENT","minTimeSpent":300001},{"id":212275,"name":"[P05] Click Download App overview","type":"CUSTOM"},{"id":212276,"name":"[P05] Close App Banner","type":"CUSTOM"},{"id":212277,"name":"[P05] Show App Banner","type":"CUSTOM"},{"id":212278,"name":"[P05] Click Download App pages","type":"CUSTOM"},{"id":212465,"name":"[GG] VVL  in CSC","type":"CUSTOM"},{"id":212466,"name":"[T06] Delete databoost from the cart","type":"CUSTOM"},{"id":212469,"name":"[T06] Order and Revenue","type":"CUSTOM"},{"id":212494,"name":"Click on POPIN Test Widget Congstar","type":"CLICK"},{"id":212604,"name":"[Perso-Widget] Fetch to slow","type":"CUSTOM"},{"id":212605,"name":"[Perso-Widget] Click perso element","type":"CUSTOM"},{"id":215317,"name":"[GG] PrepaidWieichwill (Tealium)","type":"CUSTOM"},{"id":215318,"name":"[GG] Prepaid L (Tealium)","type":"CUSTOM"},{"id":215319,"name":"[GG] Prepaid M (Tealium)","type":"CUSTOM"},{"id":215320,"name":"[GG] Prepaid S (Tealium)","type":"CUSTOM"},{"id":215321,"name":"[GG] Tarif S Vertrag (Tealium)","type":"CUSTOM"},{"id":215322,"name":"[GG] Tarif M Vertrag (Tealium)","type":"CUSTOM"},{"id":215323,"name":"[GG] Tarif L Vertrag (Tealium)","type":"CUSTOM"},{"id":215324,"name":"[GG] Tarif L Flex (Tealium)","type":"CUSTOM"},{"id":215325,"name":"[GG] Tarif M Flex (Tealium)","type":"CUSTOM"},{"id":215326,"name":"[GG] Tarif S Flex (Tealium)","type":"CUSTOM"},{"id":215513,"name":"[GG] Homespot 30 (24 m. Vertrag)","type":"CUSTOM"},{"id":215514,"name":"[GG] Homespot 100 (24 m. Vertrag)","type":"CUSTOM"},{"id":215515,"name":"[GG] Homespot 200 (24 m. Vertrag)","type":"CUSTOM"},{"id":215518,"name":"[GG] LTE 50 Option (Tealium)","type":"CUSTOM"},{"id":215519,"name":"[GG] SMS Option 50","type":"CUSTOM"},{"id":215520,"name":"[GG] Musik Option (Tealium)","type":"CUSTOM"},{"id":215972,"name":"[T05-1] Click on Popup CTA","type":"CUSTOM"},{"id":215974,"name":"[T05-1] Popup Smart Allnet Flat M","type":"CUSTOM"},{"id":215975,"name":"[T05-1] Order and Revenue Allnet Flat M","type":"CUSTOM"},{"id":216609,"name":"[P06] Default Inhalt ausgespielt","type":"CUSTOM"},{"id":216610,"name":"[P06] Click auf Perso","type":"CUSTOM"},{"id":217042,"name":"[GG] Homespot 30 Flex","type":"CUSTOM"},{"id":217043,"name":"[GG] Homespot 100 Flex","type":"CUSTOM"},{"id":217044,"name":"[GG] Homespot 200 Flex","type":"CUSTOM"},{"id":217528,"name":"Click on POPIN Test Widget Congstar (Jan)","type":"CLICK"},{"id":217529,"name":"Click on STICKY_BLOCK Test Widget Congstar (Jan)","type":"CLICK"},{"id":218642,"name":"[T08] Click Banner iPhone 11","type":"CUSTOM"},{"id":218643,"name":"[T08] Click Banner Huawei P30 lite","type":"CUSTOM"},{"id":218644,"name":"[T08] Click Banner SAM Galaxy A51","type":"CUSTOM"},{"id":218645,"name":"[T08] Click Banner iPhone 12 Pro Max","type":"CUSTOM"},{"id":218646,"name":"[T08] Click Banner iPhone SE","type":"CUSTOM"},{"id":218647,"name":"[T08] Click Banner iPhone 12 Pro","type":"CUSTOM"},{"id":218648,"name":"[T08] Click Banner SAM Galaxy S10","type":"CUSTOM"},{"id":218649,"name":"[T08] Click Banner SAM Galaxy A41","type":"CUSTOM"},{"id":218651,"name":"[T08] Click Banner iPhone XR","type":"CUSTOM"},{"id":218652,"name":"[T08] Click Banner Bestseller (SUM)","type":"CUSTOM"},{"id":218653,"name":"[T08] Click Banner thankyou  iPhone 11","type":"CUSTOM"},{"id":218654,"name":"[T08] Click Banner thankyou Huawei P30 lite","type":"CUSTOM"},{"id":218655,"name":"[T08] Click Banner thankyou SAM Galaxy A51","type":"CUSTOM"},{"id":218656,"name":"[T08] Click Banner thankyou iPhone 12 Pro Max","type":"CUSTOM"},{"id":218657,"name":"[T08] Click Banner thankyou iPhone SE","type":"CUSTOM"},{"id":218658,"name":"[T08] Click Banner thankyou iPhone 12 Pro","type":"CUSTOM"},{"id":218659,"name":"[T08] Click Banner thankyou SAM Galaxy S10","type":"CUSTOM"},{"id":218660,"name":"[T08] Click Banner thankyou SAM Galaxy A41","type":"CUSTOM"},{"id":218661,"name":"[T08] Click Banner thankyou iPhone XR","type":"CUSTOM"},{"id":218662,"name":"[T08] Click Banner Bestseller thankyou (SUM)","type":"CUSTOM"},{"id":221996,"name":"Click on POPIN  [congstar|hauptbuehne|smartphones]","type":"CLICK"},{"id":221997,"name":"Click on POPIN  [congstar|hauptbuehne|smartphones]","type":"CLICK"},{"id":221998,"name":"Click on POPIN  [congstar|hauptbuehne|smartphones]","type":"CLICK"},{"id":223344,"name":"[GG] Phone Order (Tealium)","type":"CUSTOM"},{"id":224557,"name":"[T08] Click Banner thankyou  Huawei p40","type":"CUSTOM"},{"id":224558,"name":"[T08] Click Banner thankyou  Huawei p-smart","type":"CUSTOM"},{"id":224559,"name":"[T08] Click Banner thankyou  SAM A71","type":"CUSTOM"},{"id":224560,"name":"[T08] Click Banner thankyou  SAM S20","type":"CUSTOM"},{"id":224561,"name":"[T08] Click Banner thankyou  iPhone 12","type":"CUSTOM"},{"id":226428,"name":"[T09] Click on Popup CTA Plan L","type":"CUSTOM"},{"id":226430,"name":"[T09] Popup L displayed","type":"CUSTOM"},{"id":226432,"name":"[T09] Order and Revenue L","type":"CUSTOM"},{"id":226433,"name":"[T09] Order and Revenue M+L","type":"CUSTOM"},{"id":226509,"name":"[GG] Time spent >3 Min Handyseiten","type":"CUSTOM"},{"id":226510,"name":"[GG] Time spent >3,6 Min Tarifseiten","type":"CUSTOM"},{"id":226511,"name":"[GG] Extensive clicks tabs Handyseiten","type":"CUSTOM"},{"id":226512,"name":"[GG] >3 tabs open with plan-related content","type":"CUSTOM"},{"id":226513,"name":"[GG] >3 tabs open with handy-related content","type":"CUSTOM"},{"id":226514,"name":"[GG] > 3 smartphone pages","type":"CUSTOM"},{"id":226515,"name":"[GG] Starttext clicked in one level","type":"CUSTOM"},{"id":226519,"name":"[GG] Filter Artikelzustand=neuwertig","type":"CUSTOM"},{"id":226520,"name":"[GG] Sort by Preis aufsteigend","type":"CUSTOM"},{"id":226521,"name":"[GG] Angebote-Seiten","type":"CUSTOM"},{"id":226522,"name":"[GG] Smartphone pages <500€","type":"CUSTOM"},{"id":226523,"name":"[GG] Add2Cart Options (Tealium)","type":"CUSTOM"},{"id":226537,"name":"[GG] Smartphone pages >=900€","type":"CUSTOM"},{"id":227173,"name":"[T09] Popup M displayed","type":"CUSTOM"},{"id":228670,"name":"[congstar Kontaktseite|Variante 1] FTS","type":"CUSTOM"},{"id":228671,"name":"[congstar Kontaktseite|Variante 1| Click","type":"CUSTOM"},{"id":228672,"name":"[congstar Kontaktseite|Variante 2] FTS","type":"CUSTOM"},{"id":228673,"name":"[congstar Kontaktseite|Variante 2] Click","type":"CUSTOM"},{"id":228674,"name":"[congstar Kontaktseite|Variante 3] FTS","type":"CUSTOM"},{"id":228675,"name":"[congstar Kontaktseite|Variante 3] Click","type":"CUSTOM"},{"id":228714,"name":"Click on POPIN tets delete","type":"CLICK"},{"id":229264,"name":"Test Goal Janina und Sebastian","type":"CLICK"},{"id":229418,"name":"Click on POPIN [Congstar|P08] congstar x Umfrage","type":"CLICK"},{"id":229715,"name":"[T-AA|PL] PDP-Perso Reco","type":"CUSTOM"},{"id":230036,"name":"Click on POPIN David Test","type":"CLICK"},{"id":230866,"name":"[HP-congstar|sekundaerbuehne rechts|default]FTS","type":"CUSTOM"},{"id":230867,"name":"[HP-congstar|sekundaerbuehne rechts|bestandskunden]FTS","type":"CUSTOM"},{"id":230868,"name":"[HP-congstar|sekundaerbuehne rechts|premium]FTS","type":"CUSTOM"},{"id":230869,"name":"[HP-congstar|sekundaerbuehne rechts|schnaeppchenjaeger]FTS","type":"CUSTOM"},{"id":230870,"name":"[HP-congstar|sekundaerbuehne rechts|schnaeppchenjaeger]Click","type":"CUSTOM"},{"id":230871,"name":"[HP-congstar|sekundaerbuehne rechts|premium]Click","type":"CUSTOM"},{"id":230872,"name":"[HP-congstar|sekundaerbuehne rechts|bestandskunden]Click","type":"CUSTOM"},{"id":230873,"name":"[HP-congstar|sekundaerbuehne rechts|default]Click","type":"CUSTOM"},{"id":230880,"name":"[HP-congstar|sekundaerbuehne links|default]FTS","type":"CUSTOM"},{"id":230881,"name":"[HP-congstar|sekundaerbuehne links|default]Click","type":"CUSTOM"},{"id":230882,"name":"[HP-congstar|sekundaerbuehne links|bestandskunden]FTS","type":"CUSTOM"},{"id":230883,"name":"[HP-congstar|sekundaerbuehne links|bestandskunden]Click","type":"CUSTOM"},{"id":230884,"name":"[HP-congstar|sekundaerbuehne links|schnaeppchenjaeger]FTS","type":"CUSTOM"},{"id":230885,"name":"[HP-congstar|sekundaerbuehne links|schnaeppchenjaeger]Click","type":"CUSTOM"},{"id":230886,"name":"[HP-congstar|sekundaerbuehne links|premium]FTS","type":"CUSTOM"},{"id":230887,"name":"[HP-congstar|sekundaerbuehne links|premium]Click","type":"CUSTOM"},{"id":230888,"name":"[HP-congstar|hauptbuehne|default]FTS","type":"CUSTOM"},{"id":230889,"name":"[HP-congstar|hauptbuehne|default]Click","type":"CUSTOM"},{"id":230890,"name":"[HP-congstar|hauptbuehne|bestandskunden]FTS","type":"CUSTOM"},{"id":230891,"name":"[HP-congstar|hauptbuehne|bestandskunden]Click","type":"CUSTOM"},{"id":230892,"name":"[HP-congstar|hauptbuehne|schnaeppchenjaeger]FTS","type":"CUSTOM"},{"id":230893,"name":"[HP-congstar|hauptbuehne|schnaeppchenjaeger]Click","type":"CUSTOM"},{"id":230894,"name":"[HP-congstar|hauptbuehne|premium]FTS","type":"CUSTOM"},{"id":230895,"name":"[HP-congstar|hauptbuehne|premium]Click","type":"CUSTOM"},{"id":230944,"name":"[P07] Klick Popup Try & Buy","type":"CUSTOM"},{"id":231039,"name":"[HP-congstar|hauptbuehne|unentschieden smartphone]FTS","type":"CUSTOM"},{"id":231040,"name":"[HP-congstar|hauptbuehne|unentschieden smartphone]Click","type":"CUSTOM"},{"id":231041,"name":"[hp-congstar|hauptbuehne|unentschieden tarif]FTS","type":"CUSTOM"},{"id":231042,"name":"[hp-congstar|hauptbuehne|unentschieden tarif]Click","type":"CUSTOM"},{"id":231043,"name":"[hp-congstar|sekundaerbuehne rechts|unentschieden smartphone]FTS","type":"CUSTOM"},{"id":231044,"name":"[hp-congstar|sekundaerbuehne rechts|unentschieden smartphone]Click","type":"CUSTOM"},{"id":231045,"name":"[hp-congstar|sekundaerbuehne rechts|unentschieden tarif]FTS","type":"CUSTOM"},{"id":231046,"name":"[hp-congstar|sekundaerbuehne rechts|unentschieden tarif]Click","type":"CUSTOM"},{"id":231047,"name":"[hp-congstar|sekundaerbuehne links|unentschieden tarif]FTS","type":"CUSTOM"},{"id":231048,"name":"[hp-congstar|sekundaerbuehne links|unentschieden tarif]Click","type":"CUSTOM"},{"id":231049,"name":"[hp-congstar|sekundaerbuehne links|unentschieden smartphone]FTS","type":"CUSTOM"},{"id":231050,"name":"[hp-congstar|sekundaerbuehne links|unentschieden smartphone]Click","type":"CUSTOM"},{"id":231051,"name":"Click on POPIN [congstar|sekundaerbuehne links|unentschieden smartphone]","type":"CLICK"},{"id":231207,"name":"[GG] Contact form sent","type":"CUSTOM"},{"id":231208,"name":"[P06] Interaction with contact form","type":"CUSTOM"},{"id":231209,"name":"[P06] Interaction FAQs","type":"CUSTOM"},{"id":231210,"name":"[P06] Exit on FAQs","type":"CUSTOM"},{"id":231211,"name":"[P06] View Hilfe&Service","type":"CUSTOM"},{"id":231266,"name":"Click on POPIN [Congstar|P06] FAQs Kontaktseite","type":"CLICK"},{"id":232134,"name":"Click on POPIN test","type":"CLICK"},{"id":233485,"name":"Click on POPIN Kameleoon ISP Test","type":"CLICK"},{"id":234076,"name":"[congstar|CSC-01|Kids-Card-Basic]Click","type":"CUSTOM"},{"id":234077,"name":"[congstar|CSC-01|Kids-Card-Basic]FTS","type":"CUSTOM"},{"id":234078,"name":"[congstar|CSC-01|Kids-Card-PWIW]Click","type":"CUSTOM"},{"id":234079,"name":"[congstar|CSC-01|Kids-Card-PWIW]FTS","type":"CUSTOM"},{"id":234171,"name":"[T11] Click on Popup CTA","type":"CUSTOM"},{"id":234172,"name":"[T11] Order and Revenue M + L + S","type":"CUSTOM"},{"id":235418,"name":"[T13] Click on Popup CTA","type":"CUSTOM"},{"id":235419,"name":"[T13] Order and Revenue M + L","type":"CUSTOM"},{"id":235687,"name":"[GG] View plan page S","type":"URL","url":"https://www.congstar.de/handytarife(/allnet-flat-tarife)?/allnet-flat-s/?(\\?|#|$)"},{"id":235688,"name":"[GG] View plan page M","type":"URL","url":"https://www.congstar.de/handytarife(/allnet-flat-tarife)?/allnet-flat-m/?(\\?|#|$)"},{"id":235689,"name":"[GG] View plan page L","type":"URL","url":"https://www.congstar.de/handytarife(/allnet-flat-tarife)?/allnet-flat-l/?(\\?|#|$)"},{"id":236177,"name":"[GG] Add2Cart ANF S (Tealium)","type":"CUSTOM"},{"id":236178,"name":"[GG] Add2Cart ANF M (Tealium)","type":"CUSTOM"},{"id":236179,"name":"[GG] Add2Cart ANF L (Tealium)","type":"CUSTOM"},{"id":237946,"name":"[T17] Order and Revenue S, M, L","type":"CUSTOM"},{"id":238182,"name":"[CSC|T02] Klick auf MessageBoard","type":"CUSTOM"},{"id":238183,"name":"[CSC|T02] Klick auf in den Warenkorb","type":"CUSTOM"},{"id":238895,"name":"[CSC|T02] Tarifwechsel 407|408","type":"CUSTOM"},{"id":239103,"name":"[GG] Add2Cart Smartphone >=900€ (Tealium)","type":"CUSTOM"},{"id":239104,"name":"[T16] Klick ANF L / Startseite","type":"CUSTOM"},{"id":239105,"name":"[T16] Klick Prepaid ANF L / Startseite","type":"CUSTOM"},{"id":239106,"name":"[T16] Klick on  Apple iPhone 12 / Startseite","type":"CUSTOM"},{"id":239107,"name":"[T16] Klick on ANF L, Prepaid L, Apple iPhone 12 / Startseite","type":"CUSTOM"},{"id":239108,"name":"[T16] Klick ANF Prepaid L / Tarifseite","type":"CUSTOM"},{"id":239109,"name":"[T16] Klick Apple iPhone 12 PÜS","type":"CUSTOM"},{"id":239133,"name":"[T16] Klick ANF Postpaid L / Tarifseite","type":"CUSTOM"},{"id":239682,"name":"Login Klick","type":"CLICK"},{"id":239684,"name":"Retention rate","type":"ENGAGEMENT"},{"id":239855,"name":"Retention rate","type":"ENGAGEMENT"},{"id":240857,"name":"[T16] Klick on  Apple iPhone 12 Pro / Startseite","type":"CUSTOM"},{"id":240858,"name":"[T16] Klick on ANF L, Prepaid L, Apple iPhone 12 Pro / Startseite","type":"CUSTOM"},{"id":240860,"name":"[T16] Klick Apple iPhone 12 Pro PÜS","type":"CUSTOM"},{"id":241194,"name":"Click on POPIN TestWidget Prod","type":"CLICK"},{"id":242783,"name":"Retention rate","type":"ENGAGEMENT"},{"id":242857,"name":"[GG|CSC|T03] Tarifwechsel Order","type":"CUSTOM"},{"id":242858,"name":"[T03|CSC] - TW auf Tarif S, M, L Order","type":"CUSTOM"},{"id":242859,"name":"[T03|CSC] - TW auf Tarif S Order","type":"CUSTOM"},{"id":242860,"name":"[T03|CSC] - TW auf Tarif M Order","type":"CUSTOM"},{"id":242861,"name":"[T03|CSC] - TW auf Tarif L Order","type":"CUSTOM"},{"id":242864,"name":"[T03|CSC] - Click CTA any tile","type":"CUSTOM"},{"id":242867,"name":"[T03|CSC] - Klick CTA - Zum Tarif - 1st tile","type":"CUSTOM"},{"id":242869,"name":"[T03|CSC] - Klick CTA - Zum Tarif - 2nd tile","type":"CUSTOM"},{"id":242871,"name":"[T03|CSC] - Click CTA - Weitere Tarife","type":"CUSTOM"},{"id":244081,"name":"T18 Click Weiter zur Tarifauswahl","type":"CUSTOM"},{"id":244082,"name":"T18 Click Weiter zur Tarifauswahl + Weiter zur Miete","type":"CUSTOM"},{"id":244083,"name":"T18 Click CTA Abo banner  (Primary)","type":"CUSTOM"},{"id":244084,"name":"T18 Click Mehr Infos","type":"CUSTOM"},{"id":244085,"name":"T18 Click Tab Miete","type":"CUSTOM"},{"id":244086,"name":"T18 Open Tab Miete","type":"CUSTOM"},{"id":267833,"name":"P11 Klick Banner","type":"CUSTOM"},{"id":267834,"name":"P11 Klick X Banner","type":"CUSTOM"},{"id":271516,"name":"Click on POPIN [schnaeppchenjaeger|haupt]","type":"CLICK"},{"id":271575,"name":"[T04|CSC] - Klick CTA - \"Weiter zur Kündigung\"","type":"CUSTOM"},{"id":271577,"name":"[T04|CSC] - Klick CTA - \"Zum Tarifwechsel\"","type":"CUSTOM"},{"id":272886,"name":"[GG] Order Prepaid L","type":"CUSTOM"},{"id":272887,"name":"[GG] Order Prepaid M","type":"CUSTOM"},{"id":272888,"name":"[GG] Order Prepaid S","type":"CUSTOM"},{"id":272889,"name":"[GG] Order Prepaid Wie ich will","type":"CUSTOM"},{"id":272890,"name":"[GG] Order Prepaid all","type":"CUSTOM"},{"id":272891,"name":"[GG] Phone > 900€ Order and Revenue","type":"CUSTOM"},{"id":272892,"name":"[GG] Phone < 500€ Order and Revenue","type":"CUSTOM"},{"id":272893,"name":"[GG] Phone 500€ - 900€ Order and Revenue","type":"CUSTOM"},{"id":273741,"name":"T21 Musik Option unchecked","type":"CUSTOM"},{"id":273742,"name":"T21 Musik Option checked","type":"CUSTOM"},{"id":273743,"name":"T21 Disney Option unchecked","type":"CUSTOM"},{"id":273744,"name":"T21 Disney Option checked","type":"CUSTOM"},{"id":273745,"name":"T21 Extra Daten unchecked","type":"CUSTOM"},{"id":273746,"name":"T21 Extra Daten checked","type":"CUSTOM"},{"id":273749,"name":"T21 LTE50 unchecked","type":"CUSTOM"},{"id":273750,"name":"T21 LTE50 checked","type":"CUSTOM"},{"id":273751,"name":"T21 Klick Tab contract duration (Primary)","type":"CUSTOM"},{"id":273756,"name":"T21 24 Monate chosen","type":"CUSTOM"},{"id":273757,"name":"T21 Ohne Laufzeit chosen","type":"CUSTOM"},{"id":273876,"name":"[GG] Add2Cart Tidal Musik Option (Tealium)","type":"CUSTOM"},{"id":275689,"name":"[GG] Partnerkarten LP","type":"URL","url":"(.*)/meincongstar/angebote/partnerkarte/(.*)"},{"id":276768,"name":"[GG] Checkout Übersicht","type":"URL","url":"https\\://www\\.congstar\\.de/checkout/uebersicht(.*)"},{"id":277219,"name":"[T23] Klick ANF S / Startseite","type":"CUSTOM"},{"id":277220,"name":"[T23] Klick ANF M / Startseite","type":"CUSTOM"},{"id":277221,"name":"[T23] Klick on  Apple iPhone SE / Startseite","type":"CUSTOM"},{"id":277222,"name":"[T23] Klick on ANF S, ANF M, Apple iPhone SE / Startseite","type":"CUSTOM"},{"id":277223,"name":"[T23] Klick ANF S / Tarife Vergleich","type":"CUSTOM"},{"id":277224,"name":"[T23] Klick ANF M / Tarife Vergleich","type":"CUSTOM"},{"id":277225,"name":"[T23] Klick ANF S / ANF Vergleich","type":"CUSTOM"},{"id":277226,"name":"[T23] Klick ANF M / ANF Vergleich","type":"CUSTOM"},{"id":277228,"name":"[GG] Add2Cart Smartphone (Tealium)","type":"CUSTOM"},{"id":277229,"name":"[T23] Klick iPhone SE","type":"CUSTOM"},{"id":277744,"name":"T24 Klick Prepaid HJ-Paket Navi","type":"CLICK"},{"id":277745,"name":"T24 Prepaid HJ-Paket Page","type":"URL","url":"https\\://www\\.congstar\\.de/prepaid/prepaid-wie-ich-will/halbjahres-paket/(.*)"},{"id":279039,"name":"[GG] Add2Cart HJ-Paket (Tealium)","type":"CUSTOM"},{"id":279040,"name":"[Congstar|T24] Order HJ-Paket","type":"CUSTOM"},{"id":282739,"name":"[T25] Klick on Link ANF S","type":"CUSTOM"},{"id":282740,"name":"[T25] Klick on Link ANF M","type":"CUSTOM"},{"id":282741,"name":"[T25] Klick on Link ANF L","type":"CUSTOM"},{"id":282742,"name":"[T25] Klick on Link S,M,L,XL","type":"CUSTOM"},{"id":283482,"name":"[T25] Klick on Link ANF XL","type":"CUSTOM"},{"id":284598,"name":"[GG] Prepaid HJ-Paket (Tealium)","type":"CUSTOM"},{"id":284606,"name":"[GG] Homespot all (Tealium)","type":"CUSTOM"},{"id":284607,"name":"[GG] Prepaid all (Tealium)","type":"CUSTOM"},{"id":284608,"name":"[GG] Postpaid S,M,L (Tealium)","type":"CUSTOM"},{"id":284609,"name":"[GG] Orders and Revenue all (Tealium)","type":"CUSTOM"},{"id":284611,"name":"[GG] Congstar X (Tealium)","type":"CUSTOM"},{"id":284612,"name":"[GG] Nicht erfasste Orders (Tealium)","type":"CUSTOM"},{"id":285188,"name":"[T19] ACCEPT_ALL","type":"CUSTOM"},{"id":285190,"name":"[T19] SAVE","type":"CUSTOM"},{"id":285191,"name":"[T19] MORE_INFORMATION_LINK","type":"CUSTOM"},{"id":285192,"name":"[T19] DENY_ALL","type":"CUSTOM"},{"id":287382,"name":"[GG] For-friends Seite","type":"URL","url":"(.*)/for-friends(.*)"},{"id":287626,"name":"[congstar|eSIM-Teaser]FTS","type":"CUSTOM"},{"id":287627,"name":"[congstar|eSIM-Teaser]Click","type":"CUSTOM"},{"id":287759,"name":"[T21] Klick auf Werben&Verdienen","type":"CUSTOM"},{"id":287760,"name":"[T21] Klick auf Jetzt empfehlen CTA","type":"CUSTOM"},{"id":288609,"name":"[T27] Klick Versandinformationen","type":"CUSTOM"},{"id":288610,"name":"[T27] Klick Tech. Daten","type":"CUSTOM"},{"id":288611,"name":"[T27] Klick Farbe","type":"CUSTOM"},{"id":288612,"name":"[T27] Klick Details","type":"CUSTOM"},{"id":288613,"name":"[T27] Klick Payment","type":"CUSTOM"},{"id":288614,"name":"[T27] Klick thumbnails","type":"CUSTOM"},{"id":288615,"name":"[T27] Klick Speicher","type":"CUSTOM"},{"id":288616,"name":"[T27] Klick Vorbestellen","type":"CUSTOM"},{"id":288638,"name":"[congstar|eSIM-Teaser|Unbekannt]Click","type":"CUSTOM"},{"id":288639,"name":"[congstar|eSIM-Teaser|Unbekannt]FTS","type":"CUSTOM"},{"id":288888,"name":"[T27] Klick Highlights","type":"CUSTOM"},{"id":288889,"name":"[T27] Klick Lieferumfang","type":"CUSTOM"},{"id":292231,"name":"[T26] Click Partnerkarte Vergleich","type":"CUSTOM"},{"id":292233,"name":"[T26] Select 2GB Friends LP","type":"CUSTOM"},{"id":292234,"name":"[T26] Select 10 % Friends LP","type":"CUSTOM"},{"id":292235,"name":"[T26] Click Partnerkarte Vergleich Daten","type":"CUSTOM"},{"id":292236,"name":"[T26] Click Friends Datentarif","type":"CUSTOM"},{"id":292237,"name":"[T26] Click Friends Vergleich","type":"CUSTOM"},{"id":292238,"name":"[T26] Click Congstar Deals TY","type":"CUSTOM"},{"id":292239,"name":"[T26] Click Friends TY","type":"CUSTOM"},{"id":292240,"name":"[T26] Click Partnerkarte TY","type":"CUSTOM"},{"id":292241,"name":"[T26] Select 35€ Friends LP","type":"CUSTOM"},{"id":292242,"name":"[T26] Banner click","type":"CUSTOM"},{"id":292243,"name":"[T26] Click Partnerkarte Tarifseite","type":"CUSTOM"},{"id":292244,"name":"[T26] Banner view","type":"CUSTOM"},{"id":292245,"name":"[T26] Click Friends Tarifseite","type":"CUSTOM"},{"id":292246,"name":"[T26] Click Partnerkarte Datentarif","type":"CUSTOM"},{"id":292247,"name":"[GG] Order Partnerkarte (Tealium)","type":"CUSTOM"},{"id":292248,"name":"[T26] Copy Friends code","type":"CUSTOM"},{"id":292249,"name":"[T26] Click Friends Vergleich Daten","type":"CUSTOM"},{"id":292250,"name":"[T26] Friends code generation","type":"CUSTOM"},{"id":293485,"name":"[GG] Access Persönliche Daten","type":"CUSTOM"},{"id":293486,"name":"[T15] Click Weiter zur Kasse","type":"CUSTOM"},{"id":295974,"name":"[T30] Access PDP Homespot 30","type":"CUSTOM"},{"id":295975,"name":"[T30] Access PDP Homespot 100","type":"CUSTOM"},{"id":295976,"name":"[T30] Access PDP Homespot 200","type":"CUSTOM"},{"id":297143,"name":"[GG] Tarif S extra Flex (Tealium)","type":"CUSTOM"},{"id":297147,"name":"[GG] Tarif S extra Vertrag (Tealium)","type":"CUSTOM"},{"id":299659,"name":"T34 - Click Teaser","type":"CLICK"},{"id":300177,"name":"[T35] Click Weiter","type":"CUSTOM"},{"id":300178,"name":"[T35] Click Mehr Details DHL","type":"CUSTOM"},{"id":300179,"name":"[T35] Click Mehr Details IDnow","type":"CUSTOM"},{"id":300180,"name":"[T35] Click Mehr Details KlarnaIdent","type":"CUSTOM"},{"id":300181,"name":"[T35] Select DHL","type":"CUSTOM"},{"id":300182,"name":"[T35] Select IDnow","type":"CUSTOM"},{"id":300183,"name":"[T35] Select KlarnaIdent","type":"CUSTOM"},{"id":300184,"name":"[T35] Succesful DHL","type":"CUSTOM"},{"id":300185,"name":"[T35] Succesful IDnow","type":"CUSTOM"},{"id":300186,"name":"[T35] Succesful KlarnaIdent","type":"CUSTOM"},{"id":300187,"name":"[T35] Exit Legitimation","type":"CUSTOM"},{"id":300188,"name":"[T35] Exit Übersicht","type":"CUSTOM"},{"id":300411,"name":"[GG] Access Zahlungsdaten","type":"CUSTOM"},{"id":300412,"name":"[GG] Access Legitimation","type":"CUSTOM"},{"id":300413,"name":"[T33] SEPA","type":"CUSTOM"},{"id":300414,"name":"[T33] Kreditkarte","type":"CUSTOM"},{"id":300415,"name":"[T33] PayPal","type":"CUSTOM"},{"id":300416,"name":"[T33] Google Pay","type":"CUSTOM"},{"id":300417,"name":"[T33] Apple Pay","type":"CUSTOM"},{"id":300418,"name":"[T33] Click Popup SEPA","type":"CUSTOM"},{"id":300419,"name":"[T33] Click Popup X","type":"CUSTOM"},{"id":300420,"name":"[T33] Click Popup Abbrechen","type":"CUSTOM"},{"id":300421,"name":"[T33] SEPA successful","type":"CUSTOM"},{"id":302396,"name":"[T41] Visit duration","type":"CUSTOM"},{"id":302398,"name":"[GG] Klick Sales Hotline","type":"CUSTOM"},{"id":302399,"name":"[GG] Klick Congstar Chat","type":"CUSTOM"},{"id":302400,"name":"[T41] Pop-up view","type":"CUSTOM"},{"id":302401,"name":"[T41] Klick close","type":"CUSTOM"},{"id":302402,"name":"[T41] Klick phone number","type":"CUSTOM"},{"id":303887,"name":"[T43] Click CTA","type":"CUSTOM"},{"id":304717,"name":"[T41] Retention rate","type":"ENGAGEMENT"},{"id":304943,"name":"[GG] Prepaid XL (Tealium)","type":"CUSTOM"},{"id":305210,"name":"test goal 1","type":"CUSTOM"},{"id":305211,"name":"test goal 2","type":"CUSTOM"},{"id":305699,"name":"[GG] View smartphones handydetails page NEW","type":"CUSTOM"},{"id":308173,"name":"[GG] Order Phone (Tealium)","type":"CUSTOM"},{"id":309518,"name":" [T45] View popup","type":"CUSTOM"},{"id":309519,"name":"[T45] Click CTA popup (Primary)","type":"CUSTOM"},{"id":309520,"name":"[T45] Click Close","type":"CUSTOM"},{"id":311395,"name":"[GG] 5G Option (Tealium)","type":"CUSTOM"},{"id":311396,"name":"[GG] Share Option (Tealium)","type":"CUSTOM"},{"id":312203,"name":"[GG] Click on 5G Option zubuchen EG","type":"CUSTOM"},{"id":312204,"name":"[GG] Click on 5G Option zubuchen Tarif","type":"CUSTOM"},{"id":313053,"name":"[MC] Click permission","type":"CLICK"},{"id":315977,"name":"[T45] View popup CSC","type":"CUSTOM"},{"id":315978,"name":"[T45] Click CTA popup CSC","type":"CUSTOM"},{"id":315980,"name":"[T45] Click Close CSC","type":"CUSTOM"},{"id":315981,"name":"[T45] View popup Hilfe","type":"CUSTOM"},{"id":315982,"name":"[T45] Click CTA popup Hilfe","type":"CUSTOM"},{"id":315983,"name":"[T45] Click Close Hilfe","type":"CUSTOM"},{"id":316382,"name":"[T48] View banner","type":"CUSTOM"},{"id":316383,"name":"[T48] CTA click banner","type":"CUSTOM"},{"id":316384,"name":"[T48] Close banner","type":"CUSTOM"},{"id":317645,"name":"[P06|L] Klick Info Icon","type":"CUSTOM"},{"id":317646,"name":"[P06|L] Schließen Popup Leerraum","type":"CUSTOM"},{"id":317647,"name":"[P06|L] Schließen Popup X","type":"CUSTOM"},{"id":317648,"name":"[P06|M] Klick Info Icon","type":"CUSTOM"},{"id":317649,"name":"[P06|M] Schließen Popup Leerraum","type":"CUSTOM"},{"id":317650,"name":"[P06|M] Schließen Popup X","type":"CUSTOM"},{"id":317651,"name":"[P06|S] Klick Info Icon","type":"CUSTOM"},{"id":317652,"name":"[P06|S] Schließen Popup Leerrau","type":"CUSTOM"},{"id":317653,"name":"[P06|S] Schließen Popup X","type":"CUSTOM"},{"id":318028,"name":"[GG] Add2Cart share","type":"CUSTOM"},{"id":318029,"name":"[GG] NO Add2Cart share","type":"CUSTOM"},{"id":318170,"name":"[T49] View banner","type":"CUSTOM"},{"id":318171,"name":"[T49] Hyperlink click","type":"CUSTOM"},{"id":318172,"name":"[T49] CTA click Speichern","type":"CUSTOM"},{"id":318173,"name":"[T49] CTA click Später","type":"CUSTOM"},{"id":318174,"name":"[T49] CTA click Nicht mehr erinnern","type":"CUSTOM"},{"id":318175,"name":"[T49] successful permission","type":"CUSTOM"},{"id":318176,"name":"[T49] Checkbox 1 click","type":"CUSTOM"},{"id":318177,"name":"[T49] Checkbox 2 click","type":"CUSTOM"},{"id":318178,"name":"[T49] Checkbox 3 click","type":"CUSTOM"},{"id":318179,"name":"[T49] Checkbox 4 click","type":"CUSTOM"},{"id":318281,"name":"[T50] Add2Cart share","type":"CUSTOM"},{"id":318282,"name":"[T50] NO Add2Cart share","type":"CUSTOM"},{"id":318283,"name":"[T50] All Access share page","type":"CUSTOM"},{"id":318284,"name":"[T50] Access 2GB share page","type":"CUSTOM"},{"id":318285,"name":"[T50] Access 4GB share page","type":"CUSTOM"},{"id":318286,"name":"[T50] All Clicks Option hinzufügen","type":"CUSTOM"},{"id":318287,"name":"[T50] Clicks 2GB Option hinzufügen","type":"CUSTOM"},{"id":318288,"name":"[T50] Clicks 4GB Option hinzufügen","type":"CUSTOM"},{"id":318289,"name":"[T50] All Clicks Weiter ohne Option","type":"CUSTOM"},{"id":318290,"name":"[T50] Clicks 2GB Weiter ohne Option","type":"CUSTOM"},{"id":318291,"name":"[T50] Clicks 4GB Weiter ohne Option","type":"CUSTOM"},{"id":319956,"name":"[GG] Click on Weiter ohne 5G Option EG","type":"CUSTOM"},{"id":319957,"name":"[GG] Click on Weiter ohne 5G Option Zwischenseite","type":"CUSTOM"},{"id":322718,"name":"[P13] Click Weiter zur Kasse","type":"CUSTOM"},{"id":324708,"name":"[GG] Tarifwechsel (Tealium)","type":"CUSTOM"},{"id":324709,"name":"[GG] Vertragsverlängerung (Tealium)","type":"CUSTOM"},{"id":325325,"name":"[T52] Access TW TA","type":"CUSTOM"},{"id":325326,"name":"[T52] Access TW TK","type":"CUSTOM"},{"id":325327,"name":"[T52] Access VVL TA","type":"CUSTOM"},{"id":325328,"name":"[T52] Access VVL TK","type":"CUSTOM"},{"id":325329,"name":"[GG] Access TW Übersicht","type":"CUSTOM"},{"id":325330,"name":"[GG] Access VVL Übersicht","type":"CUSTOM"},{"id":326306,"name":"[GG] Add2Cart ANF S extra (Tealium)","type":"CUSTOM"},{"id":326307,"name":"[GG] Add2Cart Homespot 30 (Tealium)","type":"CUSTOM"},{"id":326308,"name":"[GG] Add2Cart Homespot 100 (Tealium)","type":"CUSTOM"},{"id":326309,"name":"[GG] Add2Cart Homespot 200 (Tealium)","type":"CUSTOM"},{"id":326620,"name":"[T55] Access ANF M","type":"CUSTOM"},{"id":326621,"name":"[T55] Access ANF L","type":"CUSTOM"},{"id":326650,"name":"[T56|V1] Access Smartphone TiV","type":"CUSTOM"},{"id":326651,"name":"[T56|V1] Access ANF TiV","type":"CUSTOM"},{"id":326652,"name":"[T56|V1] Access ANF S","type":"CUSTOM"},{"id":326653,"name":"[T56|V1] Access ANF S extra","type":"CUSTOM"},{"id":326654,"name":"[T56|V1] Access ANF M","type":"CUSTOM"},{"id":326655,"name":"[T56|V1] Access ANF L","type":"CUSTOM"},{"id":326779,"name":"[T56|V2] Access congstar Homespot","type":"CUSTOM"},{"id":326780,"name":"[T56|V2] Access Internt für Zuhause","type":"CUSTOM"},{"id":326781,"name":"[T56|V2] Access Homespot 30","type":"CUSTOM"},{"id":326782,"name":"[T56|V2] Access Homespot 100","type":"CUSTOM"},{"id":326783,"name":"[T56|V2] Access Homespot 200","type":"CUSTOM"},{"id":327093,"name":"[T57] Click Weiter","type":"CUSTOM"},{"id":327094,"name":"[T57] Select DHL","type":"CUSTOM"},{"id":327095,"name":"[T57] Select IDnow","type":"CUSTOM"},{"id":327096,"name":"[T57] Select KlarnaIdent","type":"CUSTOM"},{"id":327097,"name":"[T57] Succesful DHL","type":"CUSTOM"},{"id":327098,"name":"[T57] Succesful IDnow","type":"CUSTOM"},{"id":327099,"name":"[T57] Succesful KlarnaIdent","type":"CUSTOM"},{"id":327100,"name":"[T57] Cart eSIM","type":"CUSTOM"},{"id":327101,"name":"[T57] Cart SIM Karte","type":"CUSTOM"}],"scriptProduceTime":1705477799992,"timeZone":"Europe/Berlin","abtestingSetup":true,"personalizationSetup":true,"boLocale":"ENGLISH","trackerContinent":"","DATA_URL":"https://data.kameleoon.io","useWideDomainSupport":true,"useOpportunitySegments":true,"geolocation":true,"customIntegrations":[{"name":"AOE Startseiten Bühne Event","jsCode":"function triggerEvent(segmentName) {\n    const segmentLoadingDoneEvent = new CustomEvent(\n        'kameleoon_segment_loading_done', {\n            detail: { segment: segmentName },\n        }\n    );\n    document.dispatchEvent(segmentLoadingDoneEvent);\n}\nconst expPerObj = Kameleoon.API.Experiments.getById(experimentID)\n    || Kameleoon.API.Personalizations.getById(personalizationID);\n\nif (document.readyState === 'complete') {\n    triggerEvent(expPerObj.targetSegment.name);\n} else {\n    window.addEventListener('load', () => {\n        triggerEvent(expPerObj.targetSegment.name);\n    });\n}"},{"name":"Crazy Egg Snapshots","jsCode":"// Define the id of the current experiment or personalization\r\nconst id = experimentID ? experimentID : personalizationID;\r\n// Define the name of the current variation\r\nconst name = variationName === \"Reference\" ? \"Original\" : variationName;\r\nconst processCrazyegg = function () {\r\nwindow.CE_SNAPSHOT_NAME = `${id}-${name}`;\r\n};\r\nKameleoon.API.Core.runWhenConditionTrue(function () {\r\nreturn window.CE2 !== undefined;\r\n}, processCrazyegg, 150);"}],"disableEditorLaunchViaKeys":true,"globalScript":"\"use strict\";!function(){const e={\"[GG] Time spent >3 Min Handyseiten\":226509,\"[GG] Time spent >3,6 Min Tarifseiten\":226510,\"[GG] Extensive clicks tabs Handyseiten\":226511,\"[GG] >3 tabs open with plan-related content\":226512,\"[GG] >3 tabs open with handy-related content\":226513,\"[GG] > 3 smartphone pages\":226514,\"[GG] Starttext clicked in one level\":226515,\"[GG] Click filter Nur Aktionsangebote\":226516,\"[GG] Click Filter Einmalpreis <500€\":226517,\"[GG] Filter monatlicher Preis <20€\":226518,\"[GG] Filter Artikelzustand=neuwertig\":226519,\"[GG] Sort by Preis aufsteigend\":226520,\"[GG] Angebote-Seiten\":226521,\"[GG] Smartphone pages <500€\":226522,\"[GG] A2C Options\":226523,\"[GG] FF 18 interested\":282148,\"[GG] A2C FF 18 GB\":282149,\"[GG] Smartphone pages >=900€\":226537},t=[\"Schnappchenjager Segment\",\"Premium Segment\"];function o(e,t){const o=localStorage.getItem(t);if(!o)return!1;const n=JSON.parse(o);for(const o in e){if(n.find((e=>e===o)))return t}return!1}function n(e,t){const o=localStorage.getItem(e);if(!o)return!1;return!!(JSON.parse(o).score>=t)&&e}const a={get:e=>{const t=localStorage.getItem(e);return t?JSON.parse(t):{score:0}},setSuccesCondition:(e,t)=>{const o=localStorage.getItem(e),n=o?JSON.parse(o):[];n.filter((e=>e===t)).length||(n.push(t),localStorage.setItem(e,JSON.stringify(n)))},set:(e,t)=>{localStorage.setItem(e,JSON.stringify(t))},updateScore(e,o){const n=this.get(e);this.set(e,{...n,score:n.score+o}),t.includes(e)&&this.get(e).score>=6&&function(e){const o=a.get(\"Group Segment Behaviour\");if(o.groupTwo!==e){const n=t.filter((t=>t!==e));Kameleoon.API.Data.setCustomData(e,!0),Kameleoon.API.Data.resetCustomData(n[0]),localStorage.removeItem(n[0]),a.set(\"Group Segment Behaviour\",{...o,groupTwo:e})}}(e)},updateScoreWithUrl(e,t,o,n){this.usedUrl(e,t,o)||(this.updateVisitedUrl(e,t,o),this.updateScore(e,n))},updateVisitedUrl(e,t,o){const n=this.get(e),a=n[t]||[];return this.usedUrl(e,t,o)||a.push(o),this.set(e,{...n,[t]:a}),this.get(e)},removeVisitedrUrl(e,t){const o=this.get(e);this.set(e,{...o,[t]:[]})},successCondition(e,t){const o=this.get(e);o[t]=!0,this.set(e,o)},usedUrl(e,t,o){return(this.get(e)[t]||[]).filter((e=>e===o)).length}},i=()=>{const e=Kameleoon.API.Data.readLocalData(\"KamCurrentPageInfo\");return e?e.name[0]:void 0},r=()=>{const e=Kameleoon.API.Data.readLocalData(\"KamCurrentPageInfo\");if(e){let t=0;return e.offerPrice.forEach((e=>{t+=+e})),t}},s=()=>{const e=Kameleoon.API.Data.readLocalData(\"KamCurrentPageInfo\");return e?\"handy\"===e.category:void 0};function c({filt:t,folder:o,maxTab:n,tabActiveFolder:i,goalName:r,dataPath:s}){const c=t,l=window.location.href;if(!c.filter((e=>l.match(e))).length||1!==window.history.length&&document.referrer)a.removeVisitedrUrl(s,o);else{a.updateVisitedUrl(s,o,l);a.get(s)[o].length>=n&&(Kameleoon.API.Goals.processConversion(e[r]),a.successCondition(s,i),a.removeVisitedrUrl(s,o))}}class l{constructor(){this.names={login:!0,mail:!0,goalOrder:!0,app:!0},this.cdName=\"Bestandskunde Segment\",this.url=window.location.href,this.init()}criteriaOne(){Kameleoon.API.CurrentVisit.customData[\"[AI]Login\"]&&a.setSuccesCondition(this.cdName,\"login\")}criteriaTwo(){(this.url.includes(\"?cgm=crmserv.mail.email.nkn.npz.ncd\")||this.url.includes(\"?cgm=crmmark.mail.email.nkn.npz.ncd\"))&&a.setSuccesCondition(this.cdName,\"mail\")}criteriaThree(){Kameleoon.API.CurrentVisit.conversions[284609]&&a.setSuccesCondition(this.cdName,\"goalOrder\")}criteriaFour(){/wt_eid=.+wt_t=/g.test(this.url)&&a.setSuccesCondition(this.cdName,\"app\")}check(){return o(this.names,this.cdName)}init(){this.criteriaOne(),this.criteriaTwo(),this.criteriaThree(),this.criteriaFour()}}class d{constructor(){this.names={clickLink:!0,visitPage:!0},this.cdName=\"Interessent Segment\",this.init()}conditionOne(){const e=['cui-accordion-item [href*=\"/hilfe-service/auftrag-lieferung/rufnummernmitnahme\"]','[data-test-section=\"benefit-trusted-shop\"] a','[data-test-section=\"benefit-return\"] a'];\"/\"===document.location.pathname&&e.forEach((e=>function(e,t,o){Kameleoon.API.Core.runWhenElementPresent(e,(e=>{e.forEach((e=>{Kameleoon.API.Utils.addUniversalClickListener(e,(()=>{a.setSuccesCondition(t,o)}))}))}))}(e,this.cdName,\"clickLink\")))}conditionTwo(){/de\\/handytarife(\\/?)(#.+|\\?.+|)$|hilfe-service\\/mein-vertrag\\/zubuchbare-optionen(\\/?)(#.+|\\?.+|)$/.test(window.location.href)&&a.setSuccesCondition(this.cdName,\"visitPage\")}check(){return o(this.names,this.cdName)}init(){this.conditionOne(),this.conditionTwo()}}class m{constructor(){this.names={googleCondition:!0},this.cdName=\"Google Paid Segment\",this.init()}conditionOne(){const e=window.location.href;(e.match(/^.+\\.google(\\.com?)?\\.[^/.]+\\/aclk([?&#].*|)$/)||e.match(/[?&#]gclid=/)||e.match(/(\\?gdnid=\\d*)(&glid=\\w*)?(&lpid=\\d*)?(&dclid=.*)?/))&&a.setSuccesCondition(this.cdName,\"googleCondition\")}check(){return o(this.names,this.cdName)}init(){this.conditionOne()}}class u{constructor(){this.cdName=\"Premium Segment\",this.maxScoreValue=6,this.init()}conditionOne(){window.location.href.includes(\"https://www.congstar.de/handytarife/allnet-flat-tarife/allnet-flat-l\")?a.updateScore(this.cdName,6):window.addEventListener(\"Kameleoon::ConversionTriggered\",(({detail:e})=>{236179===e.id&&a.updateScore(this.cdName,6)}))}conditionTwoBehaviour(){const e=r(),t=i(),o=\"viewPdp\";t&&(e>=900?a.updateScoreWithUrl(this.cdName,o,t,2):window.addEventListener(\"Kameleoon::ConversionTriggered\",(({detail:e})=>{239103===e.id&&a.updateScoreWithUrl(this.cdName,o,t,2)})))}conditionTwo(){s()&&this.conditionTwoBehaviour()}conditionThree(){Promise.all(['input[value=\"2686\"]','input[value=\"2685\"], input[value=\"2684\"]'].map((e=>new Promise((t=>{Kameleoon.API.Core.runWhenElementPresent(e,(([e])=>{t(e)}))}))))).then((([t,o])=>{Kameleoon.API.Utils.addUniversalClickListener(document,(({target:n})=>{(n.closest('a[data-testid=\"cart-with-device-button-link\"]')||n.closest('a[data-testid=\"cart-without-device-button-link\"]')||n.closest('a[href*=\"/checkout/?cart\"]')||n.closest('button[data-testid=\"cart-button\"]'))&&(t&&t.checked&&a.updateScore(this.cdName,2),o&&o.checked&&a.updateScore(this.cdName,2),function(...t){t.some((e=>e&&e.checked))&&Kameleoon.API.Goals.processConversion(e[\"[GG] A2C Options\"])}(t,o))}))}))}check(){return n(this.cdName,this.maxScoreValue)}init(){this.conditionOne(),this.conditionTwo(),this.conditionThree()}}class h{constructor(){this.cdName=\"Schnappchenjager Segment\",this.url=window.location.href,this.maxScoreValue=6,this.prepraidSmallTarifUrl=\"https://www.congstar.de/prepaid/tarife/prepaid-allnet-s/\",this.tarifSmallTraifUrl=\"https://www.congstar.de/handytarife/allnet-flat-tarife/allnet-flat-s/\",this.tarilLikeIWantUrl=\"https://www.congstar.de/prepaid/tarife/prepaid-wie-ich-will/\",this.allnetM=\"https://www.congstar.de/prepaid/tarife/prepaid-allnet-m/\",this.accessUrl=\"https://www.congstar.de/handytarife/fair-flat/\",this.cartURL=\"https://www.congstar.de/checkout/warenkorb\",this.init()}conditionOne(){this.url.includes(this.prepraidSmallTarifUrl)||this.url.includes(this.tarifSmallTraifUrl)?Kameleoon.API.Core.runWhenElementPresent('a[data-testid=\"cart-button\"], \\n                .configurator-selection__actions button, \\n                a[href*=\"/checkout/?cart\"]',(([e])=>{Kameleoon.API.Utils.addUniversalClickListener(e,(()=>{a.updateScore(this.cdName,6)}))}),500):window.location.href.includes(this.accessUrl)?Kameleoon.API.Core.runWhenElementPresent(\".configurator-selection__actions button\",(([e])=>{Kameleoon.API.Utils.addUniversalClickListener(e,(()=>{const e=document.querySelector('.speedometer #segments g[data-test-state] g[id=\"5GB\"]');e&&e.closest('[data-test-state=\"selected\"]')&&a.updateScore(this.cdName,6)}))})):window.location.href.includes(this.cartURL)&&Kameleoon.API.Core.runWhenConditionTrue((()=>window.custom_event_queue&&window.custom_event_queue.some((e=>e.product_id_main_tariff))),(()=>{const e=window.custom_event_queue.find((e=>e.product_id_main_tariff));\"441\"!==e.product_id_main_tariff&&\"433\"!==e.product_id_main_tariff&&\"440\"!==e.product_id_main_tariff&&\"424\"!==e.product_id_main_tariff&&\"423\"!==e.product_id_main_tariff||a.updateScore(this.cdName,6)}))}conditionTwo(){if(this.url.includes(this.prepraidSmallTarifUrl)||this.url.includes(this.tarifSmallTraifUrl)||this.url===this.tarilLikeIWantUrl||this.url===this.allnetM){const e=2,t=\"tarifUrl\";a.updateScoreWithUrl(this.cdName,t,this.url,e)}}conditionThree(){if(!s())return;const e=i();r()<500&&a.updateScoreWithUrl(this.cdName,\"visitedPdp\",e,2)}conditionFour(){if(!this.url.includes(\"/handys/\")&&!this.url.includes(\"/geraete/\"))return;[\"https://www.congstar.de/handys/handy-angebote/\",\"https://www.congstar.de/handys/technik-news-trends/smartphones-unter-400-euro/\",\"https://www.congstar.de/geraete/?paymentMode=monthly-installment&sorting=popular&planId=426&properties=neuwertig\"].filter((e=>this.url.includes(e))).length&&(Kameleoon.API.Goals.processConversion(e[\"[GG] Angebote-Seiten\"]),a.updateScoreWithUrl(this.cdName,\"handysViewed\",this.url,2))}fiveConditionBehaviour(){const t=\"sortName\";Kameleoon.API.Core.runWhenElementPresent('div[role=\"DropdownMenuBar\"]',(()=>{Kameleoon.API.Utils.addEventListener(document,\"click\",(({target:o})=>{const n=o.closest('[data-testid=\"sorting-filter-radio-item-lowest\"]'),a=o.closest('[data-testid=\"properties-filter-item-neuwertig\"]');n?this.checkboxFilterBehaviour({selector:'[data-testid=\"sorting-filter-radio-item-lowest\"]',visitedPath:t,goal:e[\"[GG] Sort by Preis aufsteigend\"],score:2,element:n}):a&&this.checkboxFilterBehaviour({selector:'[data-testid=\"properties-filter-item-neuwertig\"]',visitedPath:t,goal:e[\"[GG] Filter Artikelzustand=neuwertig\"],score:2,element:a})}))}))}conditionFive(){this.url.match(/\\/geraete/)&&this.fiveConditionBehaviour()}rangeSliderBehaviour(e,t){Kameleoon.API.Core.runWhenElementPresent(\".range-facet\",(([o])=>{const n=document.querySelector(\".rz-model-value\");if(!n)return;let a=n.innerText;o.addEventListener(\"mouseup\",(()=>{n.innerText!==a&&this.rangeSliderGoalBehaviour(e,n.innerText,t),a=n.innerText}))}))}rangeSliderGoalBehaviour(e,t,o){const n=parseInt(t,10),[a]=e.filter((e=>e.checked)),i=a.getAttribute(\"id\");o[i]&&o[i](n,i)}checkboxFilterBehaviour({selector:e,visitedPath:t,goal:o,score:n,element:i}){i&&i.ariaChecked&&(Kameleoon.API.Goals.processConversion(o),a.updateScoreWithUrl(this.cdName,t,e,n))}check(){return n(this.cdName,this.maxScoreValue)}init(){this.conditionOne(),this.conditionTwo(),this.conditionThree(),this.conditionFour(),this.conditionFive()}}class p{constructor(){this.url=window.location.href,this.cdName=\"Trendsetter Segment\",this.names={technikNews:!0,neuePhone:!0},this.init()}conditionOne(){\"https://www.congstar.de/handys/technik-news-trends/\"===this.url&&a.setSuccesCondition(this.cdName,\"technikNews\")}check(){return o(this.names,this.cdName)}init(){this.conditionOne()}}class f{constructor(){this.cdName=\"Unentschieden Tarif Segment\",this.goalCdName=\"Perso Segments Goals\",this.url=window.location.href,this.names=[\"tarifPlanPage\",\"tarifTimePage\",\"tarifCurrentPage\",\"tarifWithIcon\",\"tarifTabBehaviour\"],this.init()}conditionOne(){if(/\\/(handytarife|prepaid)\\//.test(this.url)){const e=\"tarifPage\";if(a.usedUrl(this.cdName,e,this.url))return;a.updateVisitedUrl(this.cdName,e,this.url);const t=a.get(this.cdName);t[e]&&t[e].length>3&&a.successCondition(this.cdName,\"tarifPlanPage\")}}conditionTwo(){if(/\\/prepaid\\/\\w+\\//.test(this.url)||/\\/handytarife\\/\\w+\\//.test(this.url)){if(a.get(this.goalCdName).tarifTimePage)return;const t=216e3,o=Date.now()+t,n=setInterval((()=>{o<=Date.now()&&(Kameleoon.API.Goals.processConversion(e[\"[GG] Time spent >3,6 Min Tarifseiten\"]),a.successCondition(this.goalCdName,\"tarifTimePage\"),a.successCondition(this.cdName,\"tarifTimePage\"),clearInterval(n))}),5e3)}}conditionThree(){\"https://www.congstar.de/handytarife/smartphone-tarife-im-vergleich/\"!==this.url&&\"https://www.congstar.de/prepaid/prepaid-tarife-vergleich/\"!==this.url||a.successCondition(this.cdName,\"tarifCurrentPage\")}conditionFour(){if(!this.url.includes(\"https://www.congstar.de/handytarife/smartphone-tarife-im-vergleich\"))return;const t={\"allnet-flat\":{selector:'[data-testid] button[aria-label=\"Mehr Details\"]',maxVisited:1,list:[],goalActive:!1},\"congstar-x\":{selector:\"#congstar-x-box .footnote__icon\",maxVisited:1,list:[],goalActive:!1},datentarife:{selector:\".device-container .slick-slide .footnote__icon\",maxVisited:2,list:[],goalActive:!1}};function o(o,n,i,r){Kameleoon.API.Utils.addUniversalClickListener(o,(()=>{t[i].list.filter((e=>e===r)).length||(t[i].list.push(r),t[i].list.length>=n&&!t[i].goalActive&&(Kameleoon.API.Goals.processConversion(e[\"[GG] Starttext clicked in one level\"]),t[i].goalActive=!0,a.successCondition(this.cdName,\"tarifWithIcon\")))}))}function n({selector:e,maxVisited:t},n){Kameleoon.API.Core.runWhenElementPresent(e,(e=>{e.forEach((e=>{if(e.getAttribute(\"aria-label\")){const a=e.getAttribute(\"aria-label\");o.call(this,e,t,n,a)}else if(e.closest(\".slick-slide\")){const a=e.closest(\".slick-slide\").querySelector(\"a\").getAttribute(\"title\");o.call(this,e,t,n,a)}else if(e.closest(\"[id]\")){const a=e.closest(\"[id]\").getAttribute(\"id\");o.call(this,e,t,n,a)}}))}),200)}for(const e in t)n.call(this,t[e],e)}conditionFive(){/handytarife|prepaid/.test(window.location.href)&&(c({filt:[/handytarife\\/$/,/handytarife\\/allnet-flat-tarife\\/allnet-flat-(l|m|s)\\/$/,/\\/prepaid\\//],dataPath:this.cdName,goalName:\"\",folder:\"tarifTabNavigation\",tabActiveFolder:\"tarifTabBehaviour\",maxTab:3}),c({filt:[/handytarife\\//],dataPath:this.goalCdName,goalName:\"[GG] >3 tabs open with plan-related content\",folder:\"foldForGoalTabTarif\",tabActiveFolder:\"foldForGoalTabTarifActive\",maxTab:3}))}check(){const e=a.get(this.cdName);return!!this.names.some((t=>e[t]))&&this.cdName}init(){this.conditionOne(),this.conditionTwo(),this.conditionThree(),this.conditionFour(),this.conditionFive()}}class g{constructor(){this.cdName=\"Unentschieden Smartphone Segment\",this.names=[\"phoneTime\",\"phonePdpPage\",\"phoneTabClick\",\"phoneTabActive\"],this.url=window.location.href,this.goalCdName=\"Perso Segments Goals\",this.init()}conditionOne(){if(!/www.congstar.de\\/(handys|geraete)\\//.test(this.url))return;if(a.get(this.goalCdName).phoneTime)return;function t({timeBehaviour:t},o){t>=180&&(Kameleoon.API.Goals.processConversion(e[\"[GG] Time spent >3 Min Handyseiten\"]),a.successCondition(this.cdName,\"phoneTime\"),a.successCondition(this.goalCdName,\"phoneTime\"),clearInterval(o))}const o=setInterval((()=>{const e=a.get(this.goalCdName),n=e.timeBehaviour||1;a.set(this.goalCdName,{...e,timeBehaviour:n+1,threeMins:180}),t.call(this,a.get(this.goalCdName),o)}),1e3)}conditionTwo(){const t=Kameleoon.API.Data.readLocalData(\"KamCurrentPageInfo\"),o=window.location.href.match(/(router|watch|buds|airpods|gadget)/i);if(!/www.congstar.de\\/(handys|geraete)\\//.test(this.url)||o||t.category&&\"phone\"!==t.category)return;const n=\"phonePageUrls\";a.updateVisitedUrl(this.cdName,n,this.url);const i=a.get(this.cdName),r=a.get(this.goalCdName).phonePdpPage;i[n]&&i[n].length>3&&!r&&(a.successCondition(this.cdName,\"phonePdpPage\"),a.successCondition(this.goalCdName,\"phonePage\"),a.removeVisitedrUrl(this.cdName,n),Kameleoon.API.Goals.processConversion(e[\"[GG] > 3 smartphone pages\"]))}conditionThree(){const t=Kameleoon.API.Data.readLocalData(\"KamCurrentPageInfo\");if(t.category&&\"handy\"!==t.category)return;let o=0;let n=!1;['#device-details-accordion > [data-testid*=\"device-details-accordion-item\"]'].forEach((t=>{Kameleoon.API.Core.runWhenElementPresent(t,(t=>{t.forEach((t=>{Kameleoon.API.Utils.addUniversalClickListener(t,(()=>{o+=1,o>=3&&!n&&(n=!0,a.successCondition(this.cdName,\"phoneTabClick\"),Kameleoon.API.Goals.processConversion(e[\"[GG] Extensive clicks tabs Handyseiten\"]))}))}))}))})),Kameleoon.API.Utils.addUniversalClickListener(document,(({target:t})=>{const i=t.closest('[data-testid=\"availability-status\"] + button');i&&i.textContent.includes(\"Alle Gerätedetails anzeigen\")&&(o+=1,o>=3&&!n&&(n=!0,a.successCondition(this.cdName,\"phoneTabClick\"),Kameleoon.API.Goals.processConversion(e[\"[GG] Extensive clicks tabs Handyseiten\"])))}))}conditionFour(){const e=Kameleoon.API.Data.readLocalData(\"KamCurrentPageInfo\");e.category&&\"phone\"===e.category||/\\/handys\\//.test(this.url)?c({filt:[/\\/handys\\//],folder:\"phoneTabUrls\",maxTab:3,tabActiveFolder:\"phoneTabActive\",goalName:\"[GG] >3 tabs open with handy-related content\",dataPath:this.cdName}):(e.category&&\"phone\"===e.category||/www.congstar.de\\/geraete\\//.test(this.url))&&!/\\/geraete\\/gadget\\//.test(this.url)&&c({filt:[/\\/geraete\\//],folder:\"phoneTabUrls\",maxTab:3,tabActiveFolder:\"phoneTabActive\",goalName:\"[GG] >3 tabs open with handy-related content\",dataPath:this.cdName})}check(){const e=a.get(this.cdName);return!!this.names.some((t=>e[t]))&&this.cdName}init(){this.conditionOne(),this.conditionTwo(),this.conditionThree(),this.conditionFour()}}const G=()=>{1===Kameleoon.API.CurrentVisit.pageViews&&localStorage.removeItem(\"Perso Segments Goals\");let t=!1;function o({group:e,prefer:o}){const n=e.filter((e=>e));if(!n.length)return;t=!0;n.find((e=>e===o))?Kameleoon.API.Data.setCustomData(o,!0):Kameleoon.API.Data.setCustomData(n[0],!0)}function n({group:e},o){const n=e.filter((e=>e));if(n.length){t=!0;const e=a.get(\"Group Segment Behaviour\");e[o]&&n.length>1?function(e,t,o){const n=a.get(\"Group Segment Behaviour\"),i=e.filter((e=>e===t)),r=e.filter((e=>e!==t));a.set(\"Group Segment Behaviour\",{...n,[o]:r[0]}),Kameleoon.API.Data.resetCustomData(i[0]),localStorage.removeItem(i[0]),Kameleoon.API.Data.setCustomData(r[0],!0)}(n,e[o],o):(a.set(\"Group Segment Behaviour\",{...e,[o]:n[0]}),Kameleoon.API.Data.setCustomData(n[0],!0))}}Kameleoon.API.Core.runWhenConditionTrue((()=>{const e=Kameleoon.API.Data.readLocalData(\"KamCurrentPageInfo\");if(e&&e.url)return e.url===document.location.pathname}),(()=>{const c={groupOne:{group:[(new l).check(),(new d).check()],prefer:\"Bestandskunde Segment\"},groupTwo:{group:[(new h).check(),(new u).check()],prefer:\"\"},groupThree:{group:[(new f).check(),(new g).check()],prefer:\"\"},groupFour:{group:[(new p).check()],prefer:\"\"},groupFive:{group:[(new m).check(),(new m).check()],prefer:\"Google Paid Segment\"}};for(const e in c)c[e].prefer?o(c[e]):n(c[e],e);t?Kameleoon.API.Data.resetCustomData(\"Unbekannt Segment\"):Kameleoon.API.Data.setCustomData(\"Unbekannt Segment\",!0),(()=>{if(!s())return;const t=r(),o=i(),n=a.usedUrl(\"Perso Segments Goals\",\"pdpPhoneGoalValidate900\",o),c=a.usedUrl(\"Perso Segments Goals\",\"pdpPhoneGoalValidate500\",o);t>=900&&!n&&(Kameleoon.API.Goals.processConversion(e[\"[GG] Smartphone pages >=900€\"]),a.updateVisitedUrl(\"Perso Segments Goals\",\"pdpPhoneGoalValidate900\",o)),t<500&&!c&&(Kameleoon.API.Goals.processConversion(e[\"[GG] Smartphone pages <500€\"]),a.updateVisitedUrl(\"Perso Segments Goals\",\"pdpPhoneGoalValidate500\",o)),Kameleoon.API.Utils.addUniversalClickListener(document,(({target:i})=>{(i.closest('button[data-testid=\"cart-button\"]')||i.closest('a[href*=\"/checkout/?cart\"]'))&&t<=900&&!n&&(Kameleoon.API.Goals.processConversion(e[\"[GG] Smartphone pages >=900€\"]),a.updateVisitedUrl(\"Perso Segments Goals\",\"pdpPhoneGoalValidate900\",o))}))})()}))},w=300411,P=300412,C={\"[T41] Visit duration\":302396,\"[T41] Retention rate\":304717,\"[T41] Klick Sales Hotline\":302398,\"[T41] Klick Congstar Chat\":302399,\"[T41] Pop-up view\":302400,\"[T41] Klick close\":302401,\"[T41] Klick phone number\":302402},v={\"[GG] Click on 5G Option zubuchen Tarif\":312204,\"[GG] Click on Weiter ohne 5G Option Zwischenseite\":319957},A={\"[GG] Click on 5G Option zubuchen EG\":312203,\"[GG] Click on Weiter ohne 5G Option EG\":319956},I={\"[T50] Add2Cart share\":318281,\"[T50] NO Add2Cart share\":318282,\"[T50] All Access share page\":318283,\"[T50] Access 2GB share page\":318284,\"[T50] Access 4GB share page\":318285,\"[T50] All Clicks Option hinzufügen\":318286,\"[T50] Clicks 2GB Option hinzufügen\":318287,\"[T50] Clicks 4GB Option hinzufügen\":318288,\"[T50] All Clicks Weiter ohne Option\":318289,\"[T50] Clicks 2GB Weiter ohne Option\":318290,\"[T50] Clicks 4GB Weiter ohne Option\":318291},K={\"[T52] Access TW TA\":325325,\"[T52] Access TW TK\":325326,\"[T52] Access VVL TA\":325327,\"[T52] Access VVL TK\":325328,\"[T52] Access TW Übersicht\":325329,\"[T52] Access VVL Übersicht\":325330},k={\"[T57] Click Weiter\":327093,\"[T57] Select DHL\":327094,\"[T57] Select IDnow\":327095,\"[T57] Select KlarnaIdent\":327096,\"[T57] Succesful DHL\":327097,\"[T57] Succesful IDnow\":327098,\"[T57] Succesful KlarnaIdent\":327099,\"[T57] Cart eSIM\":327100,\"[T57] Cart SIM Karte\":327101};(()=>{if(!window.kameleoonDatalyerPush){window.custom_event_queue=window.custom_event_queue||[];const e=window.custom_event_queue.push;window.custom_event_queue.push=function(...t){return t.forEach((e=>{window.dispatchEvent(new CustomEvent(\"Kameleoon::DataLayerPush\",{detail:e}))})),e.apply(this,t)},window.kameleoonDatalyerPush=!0}window.addEventListener(\"Kameleoon::DataLayerPush\",(({detail:e})=>{const t={pageType:e.page_type,url:document.location.pathname};e.product_category&&(t.category=e.product_category,t.price=e.product_basic_price.split(\";\"),t.offerPrice=e.product_offer_price.split(\";\"),t.id=e.product_id.split(\";\"),t.brand=e.product_manufacturer.split(\";\"),t.name=e.product_name.split(\";\")),Kameleoon.API.Data.writeLocalData(\"KamCurrentPageInfo\",t)}),!1)})(),(()=>{try{const e={\"[GG] AddToCart S\":236177,\"[GG] AddToCart M\":236178,\"[GG] AddToCart L\":236179,\"[GG] Order and Revenue S\":236197,\"[GG] Order and Revenue M\":234174,\"[GG] Order and Revenue L\":234175,\"[GG] Order and Revenue M + L + S\":284431,\"[GG] Order and Revenue S extra\":297195,\"[GG] Contact form sent\":231207,\"[GG] Daten all\":230952,\"[GG] Homespot all\":230953,\"[GG] VVL  in CSC\":212465,\"[GG] A2C FairFlat\":226503,\"[GG] FairFlat\":226528,\"[GG] AddToCart L Prepaid\":239100,\"[GG] AddToCart Iphone 12\":239101,\"[GG] AddToCart Smartphone >=900€\":239103,\"[GG] Order Extra Daten \":273758,\"[GG] Order Disney Option\":273759,\"[GG] View smartphones handydetails page\":305699};function t(){Kameleoon.API.Core.runWhenConditionTrue((()=>window.dataLayer&&window.dataLayer.find((e=>\"handydetails\"===e.pageStep))),(()=>{Kameleoon.API.Goals.processConversion(e[\"[GG] View smartphones handydetails page\"])}),200)}if(/^\\/geraete\\//.test(document.location.pathname)){const{pathname:r}=window.location;Kameleoon.API.Utils.setInterval((()=>{window.location.pathname!==r&&Kameleoon.API.Core.load()}),50),/^\\/geraete\\/($|\\?.*)/.test(document.location.pathname)||(t(),Kameleoon.Utils.addEventListener(window,\"pageshow\",(e=>{e.persisted&&t()})))}if(/\\/checkout\\/warenkorb\\/?(\\?|#|$)/.test(window.location.href)&&Kameleoon.API.Core.runWhenConditionTrue((()=>window.dataLayer&&window.dataLayer.some((e=>e.event&&e.basketItems))),(()=>{const{basketItems:t}=window.dataLayer.find((e=>e.basketItems));t.forEach((t=>{/Allnet ?Flat ?S/.test(t.name)&&Kameleoon.API.Goals.processConversion(e[\"[GG] AddToCart S\"]),/Allnet ?Flat ?M/.test(t.name)&&Kameleoon.API.Goals.processConversion(e[\"[GG] AddToCart M\"]),/Allnet ?Flat ?L/.test(t.name)&&Kameleoon.API.Goals.processConversion(e[\"[GG] AddToCart L\"]),t.name.includes(\"PrepaidAllnetL\")&&Kameleoon.API.Goals.processConversion(e[\"[GG] AddToCart L Prepaid\"]),!t.name.includes(\"AppleiPhone12\")||t.name.includes(\"Aktion\")||t.name.includes(\"Pro\")||Kameleoon.API.Goals.processConversion(e[\"[GG] AddToCart Iphone 12\"]),parseFloat(t.productOnetimePrice)>=900&&Kameleoon.API.Goals.processConversion(e[\"[GG] AddToCart Smartphone >=900€\"])}))}),200),/\\/checkout\\/bestaetigung\\/?(\\?|#|$)/.test(window.location.href)){let s;function c(e){const t=[300,301,302,303,304,305,414,415,418,416,417,419,6213,6214,6215,6216,6219,6220,6221,6222,6223,6224,6225,6226],o=e&&e.basketItems;if(o)for(let e=0;e<o.length;e++){const n=o[e].id;if(t.includes(n))return s=n,!0}}function l(e){if(dataLayer)return dataLayer.find(e)}Kameleoon.API.Core.runWhenConditionTrue((()=>dataLayer.some((e=>e.transactionProducts))),(()=>{const{transactionProducts:t}=window.dataLayer.find((e=>e.transactionProducts));t.forEach((t=>{const o=24*t.productMonthlyPrice;/AllnetFlatSExtra/.test(t.name)?Kameleoon.API.Goals.processConversion(e[\"[GG] Order and Revenue S extra\"],o):/Allnet ?Flat ?S/.test(t.name)&&Kameleoon.API.Goals.processConversion(e[\"[GG] Order and Revenue S\"],o),/Allnet ?Flat ?M/.test(t.name)?Kameleoon.API.Goals.processConversion(e[\"[GG] Order and Revenue M\"],o):/Allnet ?Flat ?L/.test(t.name)&&Kameleoon.API.Goals.processConversion(e[\"[GG] Order and Revenue L\"],o),Kameleoon.API.Goals.processConversion(e[\"[GG] Order and Revenue M + L + S\"],o),/Extra-Daten(2|5)GB/.test(t.name)&&Kameleoon.API.Goals.processConversion(e[\"[GG] Order Extra Daten \"]),/VideoOption–Disney\\+/.test(t.name)&&Kameleoon.API.Goals.processConversion(e[\"[GG] Order Disney Option\"])}))})),Kameleoon.API.Core.runWhenConditionTrue((()=>l(c)),(()=>{String(s)[0]<=\"4\"?Kameleoon.API.Goals.processConversion(e[\"[GG] Daten all\"]):Kameleoon.API.Goals.processConversion(e[\"[GG] Homespot all\"])}))}if(/www.congstar.de\\/hilfe-service\\/kontakt\\/kontaktformular/.test(window.location.href)){const d=t=>{!0===t.data.form_submit&&(sessionStorage.getItem(\"kameleoon__contactFormSent\")||sessionStorage.setItem(\"kameleoon__contactFormSent\",!0),Kameleoon.API.Goals.processConversion(e[\"[GG] Contact form sent\"]))};window.addEventListener(\"message\",d)}/www.congstar.de\\/meincongstar\\/vertragsverlaengerung\\/bestaetigung/.test(window.location.href)&&Kameleoon.API.Goals.processConversion(e[\"[GG] VVL  in CSC\"]);const o=\"www.congstar.de/handytarife/fair-flat/\",n=[\"215327\",\"215328\",\"215329\",\"215330\",\"215331\",\"226503\"],a={button:\".configurator-selection__actions .btn-icon.btn-icon--large.btn-icon--block.btn-icon--dark-transparent.btn-icon--multiline.icon--add-to-basket\"};if(location.href.includes(o)&&Kameleoon.API.Core.runWhenElementPresent(a.button,(([t])=>{Kameleoon.API.Utils.addUniversalClickListener(t,(()=>Kameleoon.API.Goals.processConversion(e[\"[GG] A2C FairFlat\"])))})),!Kameleoon.API.Data.readLocalData(\"Kam_Dev_Goal_Last_active\")){const m={};n.forEach((e=>{m[e]=0})),Kameleoon.API.Data.writeLocalData(\"Kam_Dev_Goal_Last_active\",m,!0)}Kameleoon.API.Core.runWhenConditionTrue((()=>{const e=Kameleoon.API.Data.readLocalData(\"Kam_Dev_Goal_Last_active\");if(!e)return;const{conversions:t}=Kameleoon.API.CurrentVisit;return n.some((o=>t[o]&&t[o].count!==e[o]))}),(()=>{const{conversions:t}=Kameleoon.API.CurrentVisit,o={};n.forEach((e=>{t[e]&&(o[e]=t[e].count)})),Kameleoon.API.Data.writeLocalData(\"Kam_Dev_Goal_Last_active\",o,!0),Kameleoon.API.Goals.processConversion(e[\"[GG] FairFlat\"])}));const i={wasExtraDatenOrdered:\"kameleoonDev__153079-wasExtraDatenOrdered\",wasDisneyOrdered:\"kameleoonDev__153079-wasDisneyOrdered\"};if(\"/checkout/bestaetigung\"===document.location.pathname){let u=null;Kameleoon.API.Core.runWhenConditionTrue((()=>{const e=dataLayer.find((e=>e.transactionProducts));if(e)return u=e,!0}),(()=>{const{transactionProducts:t}=u;t.forEach((t=>{\"true\"!==sessionStorage.getItem(i.wasExtraDatenOrdered)&&(t.name.includes(\"Extra-Daten5GB\")||t.name.includes(\"Extra-Daten2GB\"))&&(Kameleoon.API.Goals.processConversion(e[\"[GG] Order Extra Daten \"]),sessionStorage.setItem(i.wasExtraDatenOrdered,\"true\")),\"true\"!==sessionStorage.getItem(i.wasDisneyOrdered)&&t.name.includes(\"VideoOption–Disney+\")&&(Kameleoon.API.Goals.processConversion(e[\"[GG] Order Disney Option\"]),sessionStorage.setItem(i.wasDisneyOrdered,\"true\"))}))}),200)}else sessionStorage.setItem(i.wasExtraDatenOrdered,\"false\"),sessionStorage.setItem(i.wasDisneyOrdered,\"false\")}catch(h){console.log(\"error in module-global_goals\",h)}})(),(()=>{const e=parseInt((e=>{const t=new RegExp(`${e}=([^;]+)`),o=document.cookie.match(t);return!!o&&o[1]})(\"kamCookieMultiTest\"),10);e&&(window.kameleoonQueue=window.kameleoonQueue||[],window.kameleoonQueue.push((()=>{Kameleoon.API.Experiments.getById(e)||(document.cookie=\"kamCookieMultiTest=; path=/;max-age=0\")})))})(),(()=>{try{/\\/handytarife\\/(allnet-flat-m|allnet-flat-s)\\//.test(document.location.href)?Kameleoon.API.Data.setCustomData(\"[AI]PlanSeenS,M,FF(5GB)\",!0):/\\/handytarife\\/fair-flat\\//.test(document.location.href)&&Kameleoon.API.Core.runWhenElementPresent(\".eft-shop-plan-configurator__settings\",(([e])=>{Kameleoon.API.Data.setCustomData(\"[AI]PlanSeenS,M,FF(5GB)\",!0),e.addEventListener(\"click\",(()=>{setTimeout((()=>{const t=e.querySelector(\".segment--selected .segment-text\"),o=t&&t.id.match(/\\d+/);o&&o[0]<8?Kameleoon.API.Data.setCustomData(\"[AI]PlanSeenS,M,FF(5GB)\",!0):o&&Kameleoon.API.Data.resetCustomData(\"[AI]PlanSeenS,M,FF(5GB)\")}),99)}))})),/\\/handys\\/details\\//.test(document.location.href)&&Kameleoon.API.Core.runWhenElementPresent(\"device-price-selection\",(([e])=>{e.addEventListener(\"click\",(({target:e})=>{if(e.closest(\".configurator-selection button.btn-icon--large\"))for(let e=dataLayer.length-1;e>0;e--)dataLayer[e].ecommerce&&dataLayer[e].ecommerce.detail.products[0]&&Kameleoon.API.Data.writeLocalData(\"KamDev_LastAdd2CartItem\",dataLayer[e].ecommerce.detail.products[0],!1)}),!0)}));const e={\"[GG] Order and Revenue\":200517,\"[GG] AddToCart\":200372};if(/congstar\\.de\\/checkout/.test(document.location.href)){Kameleoon.API.Utils.addEventListener(document,\"kameleoonInit\",Kameleoon.API.Core.load);const t=Kameleoon.API.Data.readLocalData(\"KamDev_LastAdd2CartItem\"),o=()=>dataLayer.some((e=>e.event&&e.event.match(/ee\\.(addToCart|purchase)/))),n=()=>dataLayer.some((e=>e.event&&e.event.match(/checkout\\.basketItems/))),a=()=>{for(let e=0;e<dataLayer.length;e++){const t=dataLayer[e].customerAgeRange&&dataLayer[e].customerAgeRange.match(/\\d+/);if(t)return Number(t[0])}},i=()=>{let e=0;const o=dataLayer.find((e=>e.basketItems)).basketItems;return o.forEach((t=>{e+=Number(t.productMonthlyPrice)})),{summ:e,option:o.some((e=>\"option\"===e.type)),phone:!!t&&o.some((e=>e.id===t.id))}};/\\/checkout\\/warenkorb/.test(document.location.href)&&Kameleoon.API.Core.runWhenConditionTrue((()=>{var e;return null===(e=window.dataLayer)||void 0===e?void 0:e.some((e=>\"add_to_cart\"===e[1]))}),(()=>{const[,,{items:t}]=window.dataLayer.find((e=>\"add_to_cart\"===e[1])),o=t.reduce(((e,t)=>e+t.price*t.quantity),0);Kameleoon.API.Data.setCustomData(\"[AI]A2CPlan\",o),Kameleoon.API.Goals.cancelConversion(e[\"[GG] AddToCart\"]),Kameleoon.API.Goals.processConversion(e[\"[GG] AddToCart\"],o)})),/\\/checkout\\/bestaetigung/.test(document.location.href)&&Kameleoon.API.Core.runWhenConditionTrue((()=>window.dataLayer&&o()&&n()),(()=>{const o=i();if(Kameleoon.API.Goals.processConversion(e[\"[GG] Order and Revenue\"],o.summ),a()&&Kameleoon.API.Data.setCustomData(\"[AI]OrderAge\",a()),o.option&&Kameleoon.API.Data.setCustomData(\"[AI]OrderOption\",!0),o.phone){const e=t.price;let o;o=e>601?\"[AI]OrderPhoneSegment-premium\":e>301?\"[AI]OrderPhoneSegment-middel\":\"[AI]OrderPhoneSegment-low\",Kameleoon.API.Data.setCustomData(o,!0)}/\\/checkout\\/warenkorb/.test(document.location.href)&&(Kameleoon.API.Data.setCustomData(\"[AI]A2CPlan\",o.summ),Kameleoon.API.Goals.processConversion(e[\"[GG] AddToCart\"],o.summ))}))}}catch(e){console.log(\"error in module-global_ai_setup\",e)}})(),(()=>{try{G()}catch(e){console.log(\"error in module-global_perso_segments\",e)}})(),(()=>{try{const e={\"[GG] Order Prepaid L\":272886,\"[GG] Order Prepaid M\":272887,\"[GG] Order Prepaid S\":272888,\"[GG] Order Prepaid Wie ich will\":272889,\"[GG] Order Prepaid all\":272890,\"[GG] FairFlat all\":272942,\"[GG] Order FF 5 GB\":272943,\"[GG] Order FF 8 GB\":272944,\"[GG] Order FF 12 GB\":272945,\"[GG] Order FF 18 GB\":272947,\"[GG] Phone > 900€ Order and Revenue\":272891,\"[GG] Phone < 500€ Order and Revenue\":272892,\"[GG] Phone 500€ - 900€ Order and Revenue\":272893,\"[GG] phone order\":308173},t=\"ee.addToCart\",o=\"checkout.purchase\",n=[367,366,365,371,420],a=\"Kameleoon-global-goals-for-segments\",i=\"Kameleoon-global-goals-for-segments-add-basket-phone\",r=\"Kameleoon-global-goals-for-segments-add-basket\",s=Kameleoon.API.Data.readLocalData(a)?Kameleoon.API.Data.readLocalData(a):[],c=Kameleoon.API.Data.readLocalData(r)?Kameleoon.API.Data.readLocalData(r):[],l=e=>e.find((e=>n.some((t=>t===e.id)))),d=(e,t)=>e.find((e=>t.some((t=>t===e.id)))),m=e=>{const t=new RegExp(`${e}`);return dataLayer.find((e=>e.event&&e.event.match(t)))},u=(e,t)=>e.find((e=>t.some((t=>e.id===t)))),h=(e,t)=>e.find((e=>e.id===t)),p=e=>{s.includes(e.id)||s.push(e.id),c.includes(e)||c.push(e),Kameleoon.API.Data.writeLocalData(a,s,!0),Kameleoon.API.Data.writeLocalData(r,c,!0)},f=()=>{Kameleoon.API.Core.runWhenConditionTrue((()=>window.dataLayer&&window.dataLayer.find((e=>e.productItem))),(()=>{const e=window.dataLayer.find((e=>e.productItem));e&&p(e.productItem)}))},g=/(router|minirouter|watch|buds|airpods|ipad|airtag|homepod|fritzbox|tab)/i;/\\/geraete\\//.test(window.location.href)&&Kameleoon.API.Core.runWhenConditionTrue((()=>window.dataLayer&&window.dataLayer.some((e=>null==e?void 0:e.pageStep))),(()=>{const{pageStep:e}=dataLayer.find((e=>null==e?void 0:e.pageStep)),t=\"handydetails\"===e,o=window.location.href.match(g);t&&!o&&f()}));const G={367:e[\"[GG] Order Prepaid L\"],366:e[\"[GG] Order Prepaid M\"],365:e[\"[GG] Order Prepaid S\"],371:e[\"[GG] Order Prepaid Wie ich will\"],420:{5:e[\"[GG] Order FF 5 GB\"],8:e[\"[GG] Order FF 8 GB\"],12:e[\"[GG] Order FF 12 GB\"],18:e[\"[GG] Order FF 18 GB\"],all:e[\"[GG] FairFlat all\"]}},w=(t,o)=>{const{productOnetimePrice:n}=h(t,o.id);n&&(Kameleoon.API.Goals.processConversion(e[\"[GG] phone order\"],+n),+n>=900&&Kameleoon.API.Goals.processConversion(e[\"[GG] Phone > 900€ Order and Revenue\"],+n),+n<=500&&Kameleoon.API.Goals.processConversion(e[\"[GG] Phone < 500€ Order and Revenue\"],+n),+n>=501&&+n<=899&&Kameleoon.API.Goals.processConversion(e[\"[GG] Phone 500€ - 900€ Order and Revenue\"],+n))},P=(e,t)=>{switch(e){case\"Datenstufe5GB\":Kameleoon.API.Goals.processConversion(G[420][5],18*t);break;case\"Datenstufe8GB\":Kameleoon.API.Goals.processConversion(G[420][8],18*t);break;case\"Datenstufe12GB\":Kameleoon.API.Goals.processConversion(G[420][12],18*t);break;case\"Datenstufe18GB\":Kameleoon.API.Goals.processConversion(G[420][18],18*t)}};/checkout\\/warenkorb/.test(window.location.href)&&Kameleoon.API.Core.runWhenConditionTrue((()=>window.dataLayer&&m(t)),(()=>{const e=m(t).ecommerce.add.products,o=Kameleoon.API.Data.readLocalData(a);if(o&&o.length){const t=d(e,o);if(t){let e=[t];if(Kameleoon.API.Data.readLocalData(i))return e=[...Kameleoon.API.Data.readLocalData(i),t],void Kameleoon.API.Data.writeLocalData(i,e,!0);Kameleoon.API.Data.writeLocalData(i,e,!0)}}})),/checkout\\/bestaetigung/.test(window.location.href)&&Kameleoon.API.Core.runWhenConditionTrue((()=>window.dataLayer&&m(o)),(()=>{const t=m(o).transactionProducts,n=Kameleoon.API.Data.readLocalData(a),i=Kameleoon.API.Data.readLocalData(r),s=t.some((e=>\"prepaid\"===e.category||\"postpaid\"===e.category));if(n&&n.length){const e=u(t,n);e&&i&&i.length&&w(i,e)}if(s){const o=l(t),n=t.find((e=>(\"prepaid\"===e.category||\"postpaid\"===e.category)&&420!==e.id));if(o&&n){const{price:t,name:a}=n;if(420===o.id)return P(a,t),void Kameleoon.API.Goals.processConversion(G[420].all,18*t);const i=371===o.id?150:15*t;Kameleoon.API.Goals.processConversion(e[\"[GG] Order Prepaid all\"],i),Kameleoon.API.Goals.processConversion(G[o.id],i)}}}))}catch(e){console.log(\"error in module-global_goals_for_segments\",e)}})(),-1!==Kameleoon.API.CurrentVisit.landingPageURL.indexOf(\"DIS-RM\")&&Kameleoon.API.Data.setCustomData(\"Remarketing Segment\",!0),-1!==Kameleoon.API.CurrentVisit.landingPageURL.indexOf(\"DIS-R&\")&&Kameleoon.API.Data.setCustomData(\"Reach Segment\",!0),(()=>{const e={\"[GG] A2C Smartphone\":277228},t=/(router|watch|buds|airpods|galaxy tab|airtag|homepod|fritz!box)/i;window.location.href.match(/\\/checkout\\/warenkorb\\/?(\\?|#|$)/)&&Kameleoon.API.Core.runWhenConditionTrue((()=>window.dataLayer&&window.dataLayer.find((e=>e&&\"ee.addToCart\"===e.event&&e.ecommerce&&e.ecommerce.add&&e.ecommerce.add.products))),(()=>{const o=window.dataLayer.find((e=>\"ee.addToCart\"===e.event)),{products:n}=o.ecommerce.add,a=n.find((e=>\"Endgerät\"===e.category));var i;a&&!t.test(a.name)&&(i=\"[GG] A2C Smartphone\",Kameleoon.API.Goals.processConversion(e[i]))}),200)})(),(()=>{const e=287760;\"/for-friends\"===document.location.pathname&&Kameleoon.API.Core.runWhenElementPresent('a[href=\"/for-friends/#login\"]',(([t])=>{t.addEventListener(\"click\",(()=>{Kameleoon.API.Goals.processConversion(e)}))}))})(),(()=>{const e={\"[GG|P09] Order and Revenue M or L\":291351};/\\/checkout\\/bestaetigung\\/?(\\?|#|$)/.test(window.location.href)&&Kameleoon.API.Core.runWhenConditionTrue((()=>{var e;return window.dataLayer&&(null===(e=window.dataLayer)||void 0===e?void 0:e.some((e=>e.transactionProducts)))}),(()=>{const{transactionProducts:t}=window.dataLayer.find((e=>e.transactionProducts));t.forEach((t=>{const o=24*t.productMonthlyPrice;(t.name.includes(\"AllnetFlatM\")||t.name.includes(\"AllnetFlatL\"))&&Kameleoon.API.Goals.processConversion(e[\"[T13] Order and Revenue M + L\"],o)}))}))})(),(()=>{const e=293485;document.location.pathname.includes(\"/checkout/persoenliche-daten\")&&Kameleoon.API.Goals.processConversion(e)})(),(()=>{const e=300188;/\\/checkout\\/uebersicht/.test(window.location.href)?Kameleoon.API.Goals.processConversion(e):Kameleoon.API.Goals.cancelConversion(e)})(),document.location.pathname.includes(\"/checkout/zahlungsdaten\")?Kameleoon.API.Goals.processConversion(w):document.location.pathname.includes(\"/checkout/legitimation\")&&Kameleoon.API.Goals.processConversion(P),(e=>{const t={selectors:{callBtn:'a[data-testid=\"communication-channel-phone-number\"], [href=\"tel:022179700470\"]',chatBtn:'button[data-testid=\"communication-channel-chat\"], [href=\"https://congstar.secure.force.com/chat/\"]'},convertGoal:Kameleoon.API.Goals.processConversion},{selectors:o,convertGoal:n}=t;function a(t,o){Kameleoon.API.Utils.addUniversalClickListener(t,(()=>{n(e[o])}))}Promise.all(Object.values(o).map((e=>new Promise((t=>{Kameleoon.API.Core.runWhenElementPresent(e,t,400)}))))).then((function([[e],[t]]){a(e,\"[T41] Klick Sales Hotline\"),a(t,\"[T41] Klick Congstar Chat\")}))})(C),Kameleoon.API.Core.runWhenElementPresent('[href=\"https://www.congstar.de/meincongstar/meine-vertraege?service=aufladung\"]',(()=>{Kameleoon.API.Data.setCustomData(\"Prepaid Kunde\",!0)})),(()=>{const e=318028,t=318029;Kameleoon.API.Utils.addUniversalClickListener(document,(({target:e})=>{(e.closest('a[href*=\"/checkout/?cart\"]')||e.closest('[data-testid=\"cart-button\"]'))&&Kameleoon.API.Data.writeLocalData(\"clickedA2CBtn\",!0)})),document.location.pathname.includes(\"/checkout/warenkorb\")?Kameleoon.API.Core.runWhenConditionTrue((()=>window.custom_event_queue&&window.custom_event_queue.some((e=>e.product_name))&&Kameleoon.API.Data.readLocalData(\"clickedA2CBtn\")),(()=>{window.custom_event_queue.some((e=>e.product_name))&&(window.custom_event_queue.some((e=>e.product_name&&e.product_name.includes(\"share_tut_gutes\")))?Kameleoon.API.Goals.processConversion(e):Kameleoon.API.Goals.processConversion(t)),Kameleoon.API.Data.writeLocalData(\"clickedA2CBtn\",!1)}),200):Kameleoon.API.Data.writeLocalData(\"clickedA2CBtn\",!1)})(),(e=>{window.location.href.includes(\"congstar.de/handytarife/5g-option-buchen\")&&(Kameleoon.API.Core.runWhenElementPresent('.button-container a[href*=\"/handytarife/5g/\"]',(([t])=>{Kameleoon.API.Utils.addUniversalClickListener(t,(()=>Kameleoon.API.Goals.processConversion(e[\"[GG] Click on 5G Option zubuchen Tarif\"])))})),Kameleoon.API.Core.runWhenElementPresent('.button-container a[href=\"/handytarife/\"]',(([t])=>{Kameleoon.API.Utils.addUniversalClickListener(t,(()=>Kameleoon.API.Goals.processConversion(e[\"[GG] Click on Weiter ohne 5G Option Zwischenseite\"])))})))})(v),(e=>{window.location.href.includes(\"congstar.de/handytarife/5g-buchen-eg\")&&(Kameleoon.API.Core.runWhenElementPresent('.button-container a[href*=\"/handytarife/5g/\"]',(([t])=>{Kameleoon.API.Utils.addUniversalClickListener(t,(()=>Kameleoon.API.Goals.processConversion(e[\"[GG] Click on 5G Option zubuchen EG\"])))})),Kameleoon.API.Core.runWhenElementPresent('.button-container a[href=\"/handytarife/\"]',(([t])=>{Kameleoon.API.Utils.addUniversalClickListener(t,(()=>Kameleoon.API.Goals.processConversion(e[\"[GG] Click on Weiter ohne 5G Option EG\"])))})))})(A),-1!==location.href.indexOf(\"/geraete\")&&Kameleoon.API.Core.enableSinglePageSupport(),window.addEventListener(\"Kameleoon::ExperimentActivated\",(e=>{if(e.detail.experiment){const t=e.detail.experiment.associatedVariation.name.toLowerCase().replace(/[&§\\\\äöüß@°^²³#,;+()$~%'\"*?!<>{}]/g,\"\"),o=e.detail.experiment.name.toLowerCase().replace(/[&§\\\\äöüß@°^²³#,;+()$~%'\"*?!<>{}]/g,\"\");\"reference\"!==t&&(window.KameleoonVariantName=void 0!==window.KameleoonVariantName&&\"\"!==window.KameleoonVariantName?`${window.KameleoonVariantName};${o}:${t}`:`${o}:${t}`,void 0!==window.utag_data&&(window.utag_data.page_variant=window.KameleoonVariantName))}})),(e=>{Kameleoon.API.Core.runWhenElementPresent(\"body\",(([t])=>{Kameleoon.API.Utils.addEventListener(t,\"click\",(o=>{const n=o.target.closest('a[href*=\"/checkout/?cart\"]')||o.target.closest('[data-testid=\"cart-button\"]'),a=t.querySelector('[data-testid=\"option-wrapper\"] div:first-child [data-testid=\"option-label\"]:last-child input');n&&a.checked&&Kameleoon.API.Goals.processConversion(e[\"[T50] Add2Cart share\"])}))}))})(I),-1!==location.href.indexOf(\"/handytarife\")&&Kameleoon.API.Core.enableSinglePageSupport(),(e=>{const{href:t}=window.location;t.includes(\"/checkout/warenkorb\")&&Kameleoon.API.Core.runWhenElementPresent(\".bucket__content [data-test-next-personal-data]\",(([t])=>{Kameleoon.API.Utils.addEventListener(t,\"click\",(()=>{Kameleoon.API.Goals.processConversion(e[\"[P13] Click Weiter zur Kasse\"])}))}))})({\"[P13] Click Weiter zur Kasse\":322718}),window.location.pathname.includes(\"/meincongstar\")&&(Kameleoon.API.CurrentVisit.customData[\"hashed customer numbers\"]||Kameleoon.API.Data.setCustomData(\"hashed customer numbers\",\"no_id\"),Kameleoon.API.Core.runWhenConditionTrue((()=>{var e;return null===(e=window.custom_event_queue)||void 0===e?void 0:e.some((e=>e.user_id))}),(()=>{var e,t;const o=(null===(e=window.custom_event_queue)||void 0===e||null===(t=e.find((e=>e.user_id)))||void 0===t?void 0:t.user_id)||\"no_id_backup\";Kameleoon.API.Data.setCustomData(\"hashed customer numbers\",o)}))),(e=>{const{pathname:t}=window.location,{processConversion:o}=Kameleoon.API.Goals;t.includes(\"/meincongstar/tarifwechsel/uebersicht\")?o(e[\"[T52] Access TW Übersicht\"]):t.includes(\"/meincongstar/vertragsverlaengerung/uebersicht\")&&o(e[\"[T52] Access VVL Übersicht\"])})(K),(e=>{const{pathname:t}=window.location;t.includes(\"/checkout/warenkorb\")?Kameleoon.API.Core.runWhenElementPresent(\".loading-overlay-wrapper > form\",(([t])=>{Kameleoon.API.Utils.addUniversalClickListener(t,(({target:t})=>{t.closest(\"button[data-test-next-personal-data]\")&&t.closest(\"form\").querySelector(\"#tripleSim\").checked?Kameleoon.API.Goals.processConversion(e[\"[T57] Cart SIM Karte\"]):t.closest(\"button[data-test-next-personal-data]\")&&t.closest(\"form\").querySelector(\"#eSim\").checked&&Kameleoon.API.Goals.processConversion(e[\"[T57] Cart eSIM\"])}))})):t.includes(\"/checkout/uebersicht\")&&Kameleoon.API.Core.runWhenElementPresent('[pagetitle=\"Deine Bestellübersicht\"] .customer-data .row [data-test-identification-method]',(([t])=>{t.textContent.indexOf(\"DHL\")>-1?Kameleoon.API.Goals.processConversion(e[\"[T57] Succesful DHL\"]):t.textContent.indexOf(\"IDnow\")>-1?Kameleoon.API.Goals.processConversion(e[\"[T57] Succesful IDnow\"]):t.textContent.indexOf(\"KLARNA\")>-1&&Kameleoon.API.Goals.processConversion(e[\"[T57] Succesful KlarnaIdent\"])}),200)})(k)}();try{var kameleoonEventsTracker=[{id:192079,selector:\"body > div:nth-of-type(1) > div:nth-of-type(1) > div:first-child > div:first-child > div:nth-of-type(5) > p:first-child > a:first-child\"},{id:192907,selector:\"body > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:first-child > div:nth-of-type(5) > div:first-child > div:nth-of-type(1) > div:first-child > div:first-child > div:nth-of-type(3) > p:nth-of-type(2) > a:first-child\"},{id:195699,selector:\"#kameleoonScenarioLayerContainer30218\"},{id:195700,selector:\"#kameleoonScenarioLayerBase30218\"},{id:204969,selector:\"#kameleoonScenarioLayerContainer31374\"},{id:212494,selector:\"#kameleoonScenarioLayerContainer32622\"},{id:217528,selector:\"#kameleoonScenarioLayerContainer32622\"},{id:217529,selector:\"#kameleoonScenarioLayerBase32622\"},{id:221996,selector:\"#kameleoonScenarioLayerContainer36170\"},{id:221997,selector:\"#kameleoonScenarioLayerContainer36170\"},{id:221998,selector:\"#kameleoonScenarioLayerContainer36170\"},{id:228714,selector:\"#kameleoonScenarioLayerContainer40948\"},{id:229264,selector:\"#c5579267 > p:nth-of-type(2) > a:first-child\"},{id:229418,selector:\"#kameleoonScenarioLayerContainer41797\"},{id:230036,selector:\"#kameleoonScenarioLayerContainer41326\"},{id:231051,selector:\"#kameleoonScenarioLayerContainer43120\"},{id:231266,selector:\"#kameleoonScenarioLayerContainer43267\"},{id:232134,selector:\"#kameleoonScenarioLayerContainer43734\"},{id:233485,selector:\"#kameleoonScenarioLayerContainer44565\"},{id:239682,selector:\"body > div:nth-of-type(1) > div:nth-of-type(1) > div:first-child > div:nth-of-type(1) > div:nth-of-type(3) > div:first-child > div:first-child > form:first-child > div:nth-of-type(3) > input:nth-of-type(2)\"},{id:241194,selector:\"#kameleoonScenarioLayerContainer51389\"},{id:271516,selector:\"#kameleoonScenarioLayerContainer42967\"},{id:277744,selector:\"#header-nav__main > div:nth-of-type(1) > ul:first-child > li:first-child\"},{id:299659,selector:\".kamT34_teaserWrapper\"},{id:313053,selector:\"#cdui-permission-board > form:first-child > div:nth-of-type(2) > div:first-child > div:nth-of-type(3) > div:first-child > button:first-child\"}],createEventTracking=function(e,t){for(var o,n=function(e){Kameleoon.Internals.runtime.touchMoveEvent||Kameleoon.API.Goals.processConversion(t.id)},a=0;a<e.length;++a)o=e[a],Kameleoon.Utils.addEventListener(o,Kameleoon.Internals.runtime.mouseDownEvent,n,!0)},kameleoonTimeoutId=Kameleoon.Utils.setTimeout((function(){Kameleoon.Utils.clearTimeout(kameleoonTimeoutId),kameleoonEventsTracker.forEach((e=>{Kameleoon.API.Core.runWhenElementPresent(e.selector,(t=>{createEventTracking(t,e)}),null,Kameleoon.Internals.runtime.singlePageSupport)}))}),250)}catch(e){console.log(\"An error occurred in your custom JavaScript Kameleoon tracking function, please check your code.\"),console.log(e,e.message)}","customVariationSelectionScript":"var customVariationSelectionFunction = function (experiment) {\n    if (experiment.id == \"151615\") {   \n        const tarifName = Kameleoon.API.CurrentVisit.customData['CSC T04'];\n        if (typeof tarifName !== 'undefined') {\n            console.log(tarifName);\n             if (tarifName.match('_KG')) {\n                console.log('target this user to Original (KG) => 723613');\n                return 723613;\n            } else if (tarifName.match('_TG')) {\n                console.log('target this user to TG => 723617');\n                return 723617;\n            }\n        }\n    } else if (experiment.id == \"141294\") {\n        //code  for the experiment you would like a specific behavior. It has to be adapted to your use case\n        const tarifName = Kameleoon.API.CurrentVisit.customData['CSC T03'];\n        dataLayer.push({\n            kameleoon_audience: tarifName,\n            kameleoon_experiment: '[CSC|T03] Tarifreihenfolge TW-Seite'\n        });\n        if (typeof tarifName !== 'undefined') {\n            if (tarifName.match('Original')) {\n                return 0;\n            } else if (tarifName.match('Ein_Tarif')) {\n                return 662114;\n            } else if (tarifName.match('Zwei_Tarife')) {\n                return 661815;\n            }\n        }\n    } else { \n        //default behavior is applied for all other experiments\n        var registeredVariationId;\n        var deviationRandom = experiment.obtainVariationAssignmentRandomNumber();\n        var total = 0.0;\n        for (var i = 0, l = experiment.variations.length; i < l; ++i) {\n            total += experiment.variations[i].deviation;\n            if (deviationRandom <= total) {\n                registeredVariationId = experiment.variations[i].id;\n                break;\n            }\n        }\n        return registeredVariationId != null ? registeredVariationId : \"none\";\n    }\n}","useAudience":true,"track":true,"trackerExcludedIPRanges":[],"Gatherer":"eyJtYXhWaXNpdElkbGVEdXJhdGlvbiI6MTgwMDAwMCwiZGlyZWN0Tm9uZVJlZmVycmVyT25seUZpcnN0IjpmYWxzZSwiYnJvd3NlcnMiOnsiMCI6eyJuYW1lIjoiQ0hST01FIn0sIjEiOnsibmFtZSI6IkVYUExPUkVSIn0sIjIiOnsibmFtZSI6IkZJUkVGT1gifSwiMyI6eyJuYW1lIjoiU0FGQVJJIn0sIjQiOnsibmFtZSI6Ik9QRVJBIn19LCJvc3MiOnsiMCI6eyJuYW1lIjoiV0lORE9XUyJ9LCIxIjp7Im5hbWUiOiJNQUMifSwiMiI6eyJuYW1lIjoiSU9TIn0sIjMiOnsibmFtZSI6IkxJTlVYIn0sIjQiOnsibmFtZSI6IkFORFJPSUQifSwiNSI6eyJuYW1lIjoiV0lORE9XUyBQSE9ORSJ9fSwibm9SZWZlcnJlclBhZ2VzIjpbXSwicmVmZXJyZXJzIjp7IjAiOnsibmFtZSI6Ikdvb2dsZSBBZFdvcmRzIiwicHJpb3JpdHkiOjAsImRldGVjdGlvbnMiOlt7ImFuZE1ldGhvZCI6IiIsIm1ldGhvZCI6IlJFRkVSUkVSX1JFR0VYIiwiYW5kIjpmYWxzZSwiYW5kUGFyYW1ldGVycyI6IiIsInBhcmFtZXRlcnMiOiJeLitcXC5nb29nbGUoXFwuY29tPyk/XFwuW14vXFwuXSsvYWNsayhbXFw/JiNdLip8KSQifSx7ImFuZE1ldGhvZCI6IiIsIm1ldGhvZCI6IlVSTF9SRUdFWCIsImFuZCI6ZmFsc2UsImFuZFBhcmFtZXRlcnMiOiIiLCJwYXJhbWV0ZXJzIjoiW1xcPyYjXWdjbGlkPSJ9XX0sIjEiOnsibmFtZSI6Ikdvb2dsZSBPcmdhbmljIFNlYXJjaCIsInByaW9yaXR5IjowLCJkZXRlY3Rpb25zIjpbeyJhbmRNZXRob2QiOiIiLCJtZXRob2QiOiJSRUZFUlJFUl9SRUdFWCIsImFuZCI6ZmFsc2UsImFuZFBhcmFtZXRlcnMiOiIiLCJwYXJhbWV0ZXJzIjoiXi4rXFwuZ29vZ2xlKFxcLmNvbT8pP1xcLlteL1xcLl0rLyg/IWFjbGt8aW1ncmVzKS4qW1xcPyYjXXE9LiooW1xcPyYjXS4qfCkkIn0seyJhbmRNZXRob2QiOiIiLCJtZXRob2QiOiJSRUZFUlJFUl9SRUdFWCIsImFuZCI6ZmFsc2UsImFuZFBhcmFtZXRlcnMiOiIiLCJwYXJhbWV0ZXJzIjoiXi4rXFwuZ29vZ2xlKFxcLmNvbT8pP1xcLlteL1xcLl0rLz8kIn1dfSwiMiI6eyJuYW1lIjoiQmluZyBPcmdhbmljIFNlYXJjaCIsInByaW9yaXR5IjowLCJkZXRlY3Rpb25zIjpbeyJhbmRNZXRob2QiOiIiLCJtZXRob2QiOiJSRUZFUlJFUl9SRUdFWCIsImFuZCI6ZmFsc2UsImFuZFBhcmFtZXRlcnMiOiIiLCJwYXJhbWV0ZXJzIjoiXi4rXFwuYmluZ1xcLlteL1xcLl0rLy4qW1xcPyYjXXE9LiooW1xcPyYjXS4qfCkkIn1dfSwiMyI6eyJuYW1lIjoiWWFob28gT3JnYW5pYyBTZWFyY2giLCJwcmlvcml0eSI6MCwiZGV0ZWN0aW9ucyI6W3siYW5kTWV0aG9kIjoiIiwibWV0aG9kIjoiUkVGRVJSRVJfUkVHRVgiLCJhbmQiOmZhbHNlLCJhbmRQYXJhbWV0ZXJzIjoiIiwicGFyYW1ldGVycyI6Il4uK1xcLnlhaG9vXFwuW14vXFwuXSsvLipbXFw/JiNdcD0uKihbXFw/JiNdLip8KSQifV19LCI0Ijp7Im5hbWUiOiJCYWlkdSBPcmdhbmljIFNlYXJjaCIsInByaW9yaXR5IjowLCJkZXRlY3Rpb25zIjpbeyJhbmRNZXRob2QiOiIiLCJtZXRob2QiOiJSRUZFUlJFUl9SRUdFWCIsImFuZCI6ZmFsc2UsImFuZFBhcmFtZXRlcnMiOiIiLCJwYXJhbWV0ZXJzIjoiXi4rXFwuYmFpZHVcXC5bXi9cXC5dKy8uKltcXD8mI113ZD0uKihbXFw/JiNdLip8KSQifV19LCI1Ijp7Im5hbWUiOiJHb29nbGVyIEFkd29yZHMgQ29udGVudG5ldHp3ZXJrIiwicHJpb3JpdHkiOm51bGwsImRldGVjdGlvbnMiOlt7Im1ldGhvZCI6IlVSTF9SRUdFWCIsImFuZCI6ZmFsc2UsInBhcmFtZXRlcnMiOiIoXFw/Z2RuaWQ9XFxkKikoJmdsaWQ9XFx3Kik/KCZscGlkPVxcZCopPygmZGNsaWQ9LiopPyJ9XX0sIjYiOnsibmFtZSI6IlZlcml2b3ggR21iSCIsInByaW9yaXR5IjowLCJkZXRlY3Rpb25zIjpbeyJtZXRob2QiOiJVUkxfUkVHRVgiLCJhbmQiOmZhbHNlLCJwYXJhbWV0ZXJzIjoidnZkZT1uYndhNTBvZmZ8dnZkZT1uYndhNTBvOGdifHZ2ZGU9bmJ3YTUwbzRnYnx2dmRlPW5id2EyNW9zbSJ9XX0sIjciOnsibmFtZSI6IkNIRUNLMjQgVmVyZ2xlaWNoc3BvcnRhbCBNb2JpbGZ1bmsgR21iSCIsInByaW9yaXR5IjowLCJkZXRlY3Rpb25zIjpbeyJtZXRob2QiOiJVUkxfUkVHRVgiLCJhbmQiOmZhbHNlLCJwYXJhbWV0ZXJzIjoiYzI0ZGU9XFwqJnR5cD1uYndhNTBvZmZ8YzI0ZGU9XFwqJnR5cD1uYndhNTBvOGdifGMyNGRlPVxcKiZ0eXA9bmJ3YTUwbzRnYiJ9LHsibWV0aG9kIjoiVVJMX1JFR0VYIiwiYW5kIjpmYWxzZSwicGFyYW1ldGVycyI6ImMyNGRlPVxcKiZ0eXA9bmJ3YTUwbzNnYnxjMjRkZT1cXComdHlwPW5id2E1MG8yZ2J8YzI0ZGU9XFwqJnR5cD1uYndhMjVvc20ifSx7Im1ldGhvZCI6IlVSTF9SRUdFWCIsImFuZCI6ZmFsc2UsInBhcmFtZXRlcnMiOiJjMjRkZT1cXComdHlwPW5iYXQzZ2J8YzI0ZGU9XFwqJnR5cD0zMHxjMjRkZT1cXComdHlwPTEifV19LCI4Ijp7Im5hbWUiOiJJbW1vd2VsdCBIYW1idXJnIEdtYkgiLCJwcmlvcml0eSI6MCwiZGV0ZWN0aW9ucyI6W3sibWV0aG9kIjoiVVJMX1JFR0VYIiwiYW5kIjpmYWxzZSwicGFyYW1ldGVycyI6Iml3PSoifV19LCI5Ijp7Im5hbWUiOiJBV0lOIEFHIiwicHJpb3JpdHkiOjAsImRldGVjdGlvbnMiOlt7Im1ldGhvZCI6IlVSTF9SRUdFWCIsImFuZCI6ZmFsc2UsInBhcmFtZXRlcnMiOiJcXD96eGlkPSp8bTFpZD0qIn1dfSwiMTAiOnsibmFtZSI6IkFjdGl2ZSBBZ2VudCBBRyIsInByaW9yaXR5IjowLCJkZXRlY3Rpb25zIjpbeyJtZXRob2QiOiJVUkxfUkVHRVgiLCJhbmQiOmZhbHNlLCJwYXJhbWV0ZXJzIjoiZ2RuaWQ9YWNhZyZnbGlkPSoifV19LCIxMSI6eyJuYW1lIjoid2F0c29uLmRlIiwicHJpb3JpdHkiOjAsImRldGVjdGlvbnMiOlt7Im1ldGhvZCI6IlVSTF9SRUdFWCIsImFuZCI6ZmFsc2UsInBhcmFtZXRlcnMiOiJzdHJvZWVyX3dhdHNvbj0qIn1dfSwiMTIiOnsibmFtZSI6Ilphbm94IiwicHJpb3JpdHkiOjAsImRldGVjdGlvbnMiOlt7Im1ldGhvZCI6IlVSTF9SRUdFWCIsImFuZCI6ZmFsc2UsInBhcmFtZXRlcnMiOiJjYW1wYWlnbj1oZGVmfHBvc21tPTEmenhpZD0qfGFsbG5ldGw9MSZ6eGlkPSp8c21hcnRtPTEmenhpZD0qIn1dfSwiMTMiOnsibmFtZSI6IkZhY2Vib29rLVNpdGUiLCJwcmlvcml0eSI6MCwiZGV0ZWN0aW9ucyI6W3sibWV0aG9kIjoiVVJMX1JFR0VYIiwiYW5kIjpmYWxzZSwicGFyYW1ldGVycyI6ImFuZnAxbWc9MSZmYj0xfGFuZjFtZz0xJmZiPTF8c21tPTEmZmI9MXxhbGxuZXQ9MSZmYj0xfGZiPTF8c21hcnRtPTEmZmI9MSJ9LHsibWV0aG9kIjoiVVJMX1JFR0VYIiwiYW5kIjpmYWxzZSwicGFyYW1ldGVycyI6ImFsbG5ldGw9MSZmYj0xfHBvOWNlbnQ9MSZmYj0xIn1dfSwiMTQiOnsibmFtZSI6IkZhY2Vib29rLU1lZGlhIiwicHJpb3JpdHkiOjAsImRldGVjdGlvbnMiOlt7Im1ldGhvZCI6IlVSTF9SRUdFWCIsImFuZCI6ZmFsc2UsInBhcmFtZXRlcnMiOiJzcDJpZD1mYmFkcy0xbWdhbmZwJnpuZXQ9KnxzcDJpZD1mYmFkcy0xbWdhbmYmem5ldD0qfHNwMmlkPXByZTEwZ2Imem5ldD1wcmUxMGdiIn0seyJtZXRob2QiOiJVUkxfUkVHRVgiLCJhbmQiOmZhbHNlLCJwYXJhbWV0ZXJzIjoic3AyaWQ9eW91bmcmem5ldD15b3VuZ3xzcDJpZD1GQlBQQWRzc21tJnpuZXQ9KnxzcDJpZD1GQlBQQWRzYWxsZmwmem5ldD0qIn0seyJtZXRob2QiOiJVUkxfUkVHRVgiLCJhbmQiOmZhbHNlLCJwYXJhbWV0ZXJzIjoic3AyaWQ9RkJSSFNzbW0mem5ldD0qfHNwMmlkPUZCUkhTYWxsZmwmem5ldD0qfHNwMmlkPUZCUkhTJnpuZXQ9KiJ9LHsibWV0aG9kIjoiVVJMX1JFR0VYIiwiYW5kIjpmYWxzZSwicGFyYW1ldGVycyI6InNwMmlkPUZCUFBBZHNzbW0mem5ldD0qfHNwMmlkPUZCUFBfcG85Y2VudCZ6bmV0PSp8c3AyaWQ9RkJBZHNfYWxsbmV0JnpuZXQ9KiJ9LHsibWV0aG9kIjoiVVJMX1JFR0VYIiwiYW5kIjpmYWxzZSwicGFyYW1ldGVycyI6InNwMmlkPUZCQWRzX3BvOWNlbnQmem5ldD0qfHNwMmlkPUZCUFBBZHMmem5ldD0qfHNwMmlkPUZCc21tJnpuZXQ9KiJ9LHsibWV0aG9kIjoiVVJMX1JFR0VYIiwiYW5kIjpmYWxzZSwicGFyYW1ldGVycyI6InNwMmlkPUZCYWxsZmwmem5ldD0qfHNwMmlkPUZCJnpuZXQ9KiJ9XX0sIjE1Ijp7Im5hbWUiOiJTdHLDtmVyIERpZ2l0YWwgUHVibGlzaGluZyBHbWJIIiwicHJpb3JpdHkiOjAsImRldGVjdGlvbnMiOlt7Im1ldGhvZCI6IlVSTF9SRUdFWCIsImFuZCI6ZmFsc2UsInBhcmFtZXRlcnMiOiJzdHJvZWVyYnNwQU5GPSp8c3Ryb2Vlcj0qIn1dfSwiMTYiOnsibmFtZSI6Ikdvb2dsZSBEQk0iLCJwcmlvcml0eSI6MCwiZGV0ZWN0aW9ucyI6W3sibWV0aG9kIjoiVVJMX1JFR0VYIiwiYW5kIjpmYWxzZSwicGFyYW1ldGVycyI6ImRibWlkPWFsbGZsMHNnaCZnbGlkPSp8ZGJtaWQ9cG9zbW0mZ2xpZD0qfGdkbmlkPWFsbG5ldGwmZ2xpZD0qfGdkbmlkPTEmZ2xpZD0qIn1dfSwiMTciOnsibmFtZSI6Ikdvb2dsZSBTZWFyY2giLCJwcmlvcml0eSI6MCwiZGV0ZWN0aW9ucyI6W3sibWV0aG9kIjoiVVJMX1JFR0VYIiwiYW5kIjpmYWxzZSwicGFyYW1ldGVycyI6InNlYT1hbGxmbDBzZ2gmZ2xpZD0qfHBvc21tPTEmZ2xpZD0qfGFsbG5ldGxybT0xJmdsaWQ9KnxcXD9nbGlkPSoifV19LCIxOCI6eyJuYW1lIjoiQmluZyBTaG9wcGluZyBFbmRnZXLDpHRlIiwicHJpb3JpdHkiOjAsImRldGVjdGlvbnMiOlt7Im1ldGhvZCI6IlVSTF9SRUdFWCIsImFuZCI6ZmFsc2UsInBhcmFtZXRlcnMiOiJ5b3NoZWc9MSZ5b2lkPSoifV19LCIxOSI6eyJuYW1lIjoiY29uZ3N0YXIuZGUgQ1NDIG1vYmlsIiwicHJpb3JpdHkiOjAsImRldGVjdGlvbnMiOlt7Im1ldGhvZCI6IlVSTF9SRUdFWCIsImFuZCI6ZmFsc2UsInBhcmFtZXRlcnMiOiJqaD0yfGpoPTEifV19LCIyMCI6eyJuYW1lIjoiVGVsZWtvbS5kZSIsInByaW9yaXR5IjowLCJkZXRlY3Rpb25zIjpbeyJtZXRob2QiOiJVUkxfUkVHRVgiLCJhbmQiOmZhbHNlLCJwYXJhbWV0ZXJzIjoidGlkPXQyODJ8dGlkPXRlbGVrb21zaG9wfHRpZD15fHRpZD10dXMifV19LCIyMSI6eyJuYW1lIjoiSW5zdGFncmFtIFNpdGUiLCJwcmlvcml0eSI6MCwiZGV0ZWN0aW9ucyI6W3sibWV0aG9kIjoiVVJMX1JFR0VYIiwiYW5kIjpmYWxzZSwicGFyYW1ldGVycyI6Imluc3Q9MSJ9XX0sIjIyIjp7Im5hbWUiOiJJbnN0YWdyYW0gTWVkaWEiLCJwcmlvcml0eSI6MCwiZGV0ZWN0aW9ucyI6W3sibWV0aG9kIjoiVVJMX1JFR0VYIiwiYW5kIjpmYWxzZSwicGFyYW1ldGVycyI6InNwMmlkPWluc3RtZWRpYSZ6bmV0PSoifV19LCIyMyI6eyJuYW1lIjoiVHdpdHRlciBNZWRpYSIsInByaW9yaXR5IjowLCJkZXRlY3Rpb25zIjpbeyJtZXRob2QiOiJVUkxfUkVHRVgiLCJhbmQiOmZhbHNlLCJwYXJhbWV0ZXJzIjoic3AyaWQ9dHcmem5ldD1kYXQifV19LCIyNCI6eyJuYW1lIjoiVGVsZWtvbSBQcm9maXMgKHBzbyB2ZXJ0cmllYnNwcm9ncmFtbWUgRyIsInByaW9yaXR5IjowLCJkZXRlY3Rpb25zIjpbeyJtZXRob2QiOiJVUkxfUkVHRVgiLCJhbmQiOmZhbHNlLCJwYXJhbWV0ZXJzIjoic3BjPVxcKiZwb3NtbT0xfHNwYz0qIn1dfSwiMjUiOnsibmFtZSI6IkNvcnBvcmF0ZSBCZW5lZml0cyBHbWJIIChuZXUgYWIgNy8xNCkiLCJwcmlvcml0eSI6MCwiZGV0ZWN0aW9ucyI6W3sibWV0aG9kIjoiVVJMX1JFR0VYIiwiYW5kIjpmYWxzZSwicGFyYW1ldGVycyI6ImNiPWpvbG9sdXllJnNtYXJ0PTIifV19LCIyNiI6eyJuYW1lIjoiSW54bWFpbCBHbWJIIiwicHJpb3JpdHkiOjAsImRldGVjdGlvbnMiOlt7Im1ldGhvZCI6IlVSTF9SRUdFWCIsImFuZCI6ZmFsc2UsInBhcmFtZXRlcnMiOiJpbnhpZD1zbW18aW54aWQ9KiJ9XX0sIjI3Ijp7Im5hbWUiOiJaZWQgRGlnaXRhbCIsInByaW9yaXR5IjowLCJkZXRlY3Rpb25zIjpbeyJtZXRob2QiOiJVUkxfUkVHRVgiLCJhbmQiOmZhbHNlLCJwYXJhbWV0ZXJzIjoic3AyaWQ9c21tJnpuZXQ9KnxzcDJpZD1wZXJtJnpuZXQ9KnxzcDJpZD1yZWZicmhzYWxsZmwmem5ldD0qfHNwMmlkPXJlZmJyaHMmem5ldD0qIn0seyJtZXRob2QiOiJVUkxfUkVHRVgiLCJhbmQiOmZhbHNlLCJwYXJhbWV0ZXJzIjoic3AyaWQ9cmVmYm5mYWxsZmwmem5ldD0qfHNwMmlkPXJlZmJuZiZ6bmV0PSp8c3AyaWQ9Y3JpdC1hbGxmbCZ6bmV0PSp8c3AyaWQ9Y3JpdC1hbGxmJnpuZXQ9KiJ9LHsibWV0aG9kIjoiVVJMX1JFR0VYIiwiYW5kIjpmYWxzZSwicGFyYW1ldGVycyI6InNwMmlkPWNyaXQtc21tJnpuZXQ9KnxzcDJpZD1jcml0LXMxMDAmem5ldD0qfHNwMmlkPWNyaXQtc2Ymem5ldD0qfHNwMmlkPWNyaXQtbmMmem5ldD0qIn0seyJtZXRob2QiOiJVUkxfUkVHRVgiLCJhbmQiOmZhbHNlLCJwYXJhbWV0ZXJzIjoic3AyaWQ9YWxsZmwmem5ldD0qfHNwMmlkPXNtbSZ6bmV0PSp8c3AyaWQ9REYmem5ldD0qIn1dfSwiMjgiOnsibmFtZSI6IkFmZmlsaW5ldCIsInByaW9yaXR5IjowLCJkZXRlY3Rpb25zIjpbeyJtZXRob2QiOiJVUkxfUkVHRVgiLCJhbmQiOmZhbHNlLCJwYXJhbWV0ZXJzIjoicG9zbW09MSZhZmlkPSoifSx7Im1ldGhvZCI6IlVSTF9SRUdFWCIsImFuZCI6ZmFsc2UsInBhcmFtZXRlcnMiOiJzbWFydG09MSZhZmlkPSoifSx7Im1ldGhvZCI6IlVSTF9SRUdFWCIsImFuZCI6ZmFsc2UsInBhcmFtZXRlcnMiOiJhbGxuZXRsPTEmYWZpZD0qIn1dfSwiMjkiOnsibmFtZSI6Ikdvb2dsZSBTZWFyY2ggRW5kZ2Vyw6R0ZSIsInByaW9yaXR5IjowLCJkZXRlY3Rpb25zIjpbeyJtZXRob2QiOiJVUkxfUkVHRVgiLCJhbmQiOmZhbHNlLCJwYXJhbWV0ZXJzIjoiZ29lZz1zbW0mZ2xpZD0qIn0seyJtZXRob2QiOiJVUkxfUkVHRVgiLCJhbmQiOmZhbHNlLCJwYXJhbWV0ZXJzIjoiZ29lZz0xJmdsaWQ9KiJ9XX0sIjMwIjp7Im5hbWUiOiJHb29nbGUgU2hvcHBpbmcgRW5kZ2Vyw6R0ZSIsInByaW9yaXR5IjowLCJkZXRlY3Rpb25zIjpbeyJtZXRob2QiOiJVUkxfUkVHRVgiLCJhbmQiOmZhbHNlLCJwYXJhbWV0ZXJzIjoiZ29zaGVnPTEmZ2xpZD0qIn1dfSwiMzEiOnsibmFtZSI6IkVuZGdlcsOkdGUgLSBTYW1tZWxwYXJ0bmVyIiwicHJpb3JpdHkiOjAsImRldGVjdGlvbnMiOlt7Im1ldGhvZCI6IlVSTF9SRUdFWCIsImFuZCI6ZmFsc2UsInBhcmFtZXRlcnMiOiJlZ2g9c29ueSJ9XX0sIjMyIjp7Im5hbWUiOiJ4cGxvc2lvbiBpbnRlcmFjdGl2ZSBHbWJIIiwicHJpb3JpdHkiOjAsImRldGVjdGlvbnMiOlt7Im1ldGhvZCI6IlVSTF9SRUdFWCIsImFuZCI6ZmFsc2UsInBhcmFtZXRlcnMiOiJ4cGxpZD0qIn1dfSwiMzMiOnsibmFtZSI6Ik1HTSIsInByaW9yaXR5IjowLCJkZXRlY3Rpb25zIjpbeyJtZXRob2QiOiJVUkxfUkVHRVgiLCJhbmQiOmZhbHNlLCJwYXJhbWV0ZXJzIjoibWdtcmVmaWQ9KiJ9XX0sIjM0Ijp7Im5hbWUiOiJQYXliYWNrIERpTWEgKFBhcnRuZXJzaG9wKSIsInByaW9yaXR5IjowLCJkZXRlY3Rpb25zIjpbeyJtZXRob2QiOiJVUkxfUkVHRVgiLCJhbmQiOmZhbHNlLCJwYXJhbWV0ZXJzIjoicG49KiJ9XX0sIjM1Ijp7Im5hbWUiOiJGYWNlYm9vayBSZXRhcmdldGluZyIsInByaW9yaXR5IjowLCJkZXRlY3Rpb25zIjpbeyJtZXRob2QiOiJVUkxfUkVHRVgiLCJhbmQiOmZhbHNlLCJwYXJhbWV0ZXJzIjoic3AyaWQ9cmVmYm5mc21tJnpuZXQ9KiJ9XX0sIjM2Ijp7Im5hbWUiOiJHb29nbGUgUGx1cyIsInByaW9yaXR5IjowLCJkZXRlY3Rpb25zIjpbeyJtZXRob2QiOiJVUkxfUkVHRVgiLCJhbmQiOmZhbHNlLCJwYXJhbWV0ZXJzIjoic21tPTEmZ3BsdXM9MXxhbGxuZXRsPTEmZ3BsdXM9MXxhbGxuZXQ9MSZncGx1cz0xfHBvOWNlbnQ9MSZncGx1cz0xfGdvb2dsZXBsdXM9MSJ9XX0sIjM3Ijp7Im5hbWUiOiJCaW5nIFNlYXJjaCIsInByaW9yaXR5IjowLCJkZXRlY3Rpb25zIjpbeyJtZXRob2QiOiJVUkxfUkVHRVgiLCJhbmQiOmZhbHNlLCJwYXJhbWV0ZXJzIjoicG9hbGxyZW09MSZ5b2lkPSp8cG9zbXJlbT0xJnlvaWQ9KnxcXD95b2lkPSoifV19LCIzOCI6eyJuYW1lIjoibWlzc2lvbiBlUmVsYXRpb25zIEFHIiwicHJpb3JpdHkiOjAsImRldGVjdGlvbnMiOlt7Im1ldGhvZCI6IlVSTF9SRUdFWCIsImFuZCI6ZmFsc2UsInBhcmFtZXRlcnMiOiJcXD9hZmlkPSoifV19LCIzOSI6eyJuYW1lIjoiQmVpbGFnZW4gLSBEaXJla3R2ZXJzZW5kZXIiLCJwcmlvcml0eSI6MCwiZGV0ZWN0aW9ucyI6W3sibWV0aG9kIjoiVVJMX1JFR0VYIiwiYW5kIjpmYWxzZSwicGFyYW1ldGVycyI6ImRpbWE9KiJ9XX0sIjQwIjp7Im5hbWUiOiJUSyBXb3JsZCIsInByaW9yaXR5IjowLCJkZXRlY3Rpb25zIjpbeyJtZXRob2QiOiJVUkxfUkVHRVgiLCJhbmQiOmZhbHNlLCJwYXJhbWV0ZXJzIjoid3NpZD0qIn1dfSwiNDEiOnsibmFtZSI6Ikdsb2JhbCBHcm91cCBEaWFsb2cgU29sdXRpb25zIEFHIiwicHJpb3JpdHkiOjAsImRldGVjdGlvbnMiOlt7Im1ldGhvZCI6IlVSTF9SRUdFWCIsImFuZCI6ZmFsc2UsInBhcmFtZXRlcnMiOiJ0YV9jc2M9MXxnZ2lkPVxcKiZjc2M9MXxnZ2lkPSoifV19LCI0MiI6eyJuYW1lIjoiUGVyc29uYWx2ZXJrYXVmIGNvbmdzdGFyIiwicHJpb3JpdHkiOjAsImRldGVjdGlvbnMiOlt7Im1ldGhvZCI6IlVSTF9SRUdFWCIsImFuZCI6ZmFsc2UsInBhcmFtZXRlcnMiOiJwZXJzbz0xIn1dfSwiNDUiOnsibmFtZSI6IkRyLiBTY2hlbmdiZXIgRnJpZW5kcyBHbWJIIC0gVHdpdHRlciIsInByaW9yaXR5IjowLCJkZXRlY3Rpb25zIjpbeyJtZXRob2QiOiJVUkxfUkVHRVgiLCJhbmQiOmZhbHNlLCJwYXJhbWV0ZXJzIjoic21tPTEmdHc9MXxhbGxuZXRsPTEmdHc9MXxhbGxuZXQ9MSZ0dz0xfHBvOWNlbnQ9MSZ0dz0xfHR3PTEifV19LCI0NiI6eyJuYW1lIjoiQXBwLVVzZXIiLCJwcmlvcml0eSI6MCwiZGV0ZWN0aW9ucyI6W3sibWV0aG9kIjoiVVJMX1JFR0VYIiwiYW5kIjpmYWxzZSwicGFyYW1ldGVycyI6InV0bV9zb3VyY2U9YXBwLWNvbmdzdGFyIn0seyJtZXRob2QiOiJVUkxfUkVHRVgiLCJhbmQiOmZhbHNlLCJwYXJhbWV0ZXJzIjoidXRtX21lZGl1bT1hcHAifV19fSwia2V5UGFnZXMiOnsiMCI6eyJuYW1lIjoiUG9zdHBhaWQgVGFyaWZzZWl0ZSIsIm1hdGNoVHlwZSI6IkFUTEVBU1QiLCJwcmVjaXNlRGF0ZSI6bnVsbCwicmVsYXRpdmVVUkxSZWdFeHAiOiJodHRwczovXFwvXFx3d3dcXC5jb25nc3RhclxcLmRlXFwvaGFuZHl0YXJpZmVcXC9hbGxuZXQtZmxhdC10YXJpZmVcXC9hbGxuZXQtZmxhdC0qIiwic2Vjb25kTWF0Y2hUeXBlIjoiQUxMVklTSVRTQ09NQklORUQiLCJ0aW1lc0NvdW50IjowfSwiMSI6eyJuYW1lIjoiVGFyaWZlIGltIFZlcmdsZWljaCAoRU5URUEgw5xiZXJzaWNodCkiLCJtYXRjaFR5cGUiOiJBVExFQVNUIiwicHJlY2lzZURhdGUiOm51bGwsInJlbGF0aXZlVVJMUmVnRXhwIjoiaHR0cHM6L1xcL1xcd3d3XFwuY29uZ3N0YXJcXC5kZVxcL2hhbmR5dGFyaWZlXFwvYWxsbmV0LWZsYXQtdGFyaWZlLWltLXZlcmdsZWljaFxcLz8oXFw/fCN8JCkiLCJzZWNvbmRNYXRjaFR5cGUiOiJBTExWSVNJVFNDT01CSU5FRCIsInRpbWVzQ291bnQiOjB9LCIzIjp7Im5hbWUiOiJGYWlyZmxhdCBUYXJpZnNlaXRlIiwibWF0Y2hUeXBlIjoiQVRMRUFTVCIsInByZWNpc2VEYXRlIjpudWxsLCJyZWxhdGl2ZVVSTFJlZ0V4cCI6Imh0dHBzOi9cXC9cXHd3d1xcLmNvbmdzdGFyXFwuZGVcXC9oYW5keXRhcmlmZS9mYWlyLWZsYXQvPyhcXD98I3wkKSIsInNlY29uZE1hdGNoVHlwZSI6IkFMTFZJU0lUU0NPTUJJTkVEIiwidGltZXNDb3VudCI6MH0sIjUiOnsibmFtZSI6IkRhdGVudGFyaWZlIFRhcmlmc2VpdGVuIiwibWF0Y2hUeXBlIjoiQVRMRUFTVCIsInByZWNpc2VEYXRlIjpudWxsLCJyZWxhdGl2ZVVSTFJlZ0V4cCI6Imh0dHBzOi9cXC9cXHd3d1xcLmNvbmdzdGFyXFwuZGVcXC9oYW5keXRhcmlmZVxcL2RhdGVudGFyaWZlXFwvZGF0ZW4tKiIsInNlY29uZE1hdGNoVHlwZSI6IkFMTFZJU0lUU0NPTUJJTkVEIiwidGltZXNDb3VudCI6MH0sIjYiOnsibmFtZSI6IlNtYXJ0cGhvbmUtVGFyaWZlIFZlcmdsZWljaHNlaXRlIiwibWF0Y2hUeXBlIjoiQVRMRUFTVCIsInByZWNpc2VEYXRlIjpudWxsLCJyZWxhdGl2ZVVSTFJlZ0V4cCI6Imh0dHBzOlxcL1xcL3d3d1xcLmNvbmdzdGFyXFwuZGVcXC9oYW5keXRhcmlmZVxcL3NtYXJ0cGhvbmUtdGFyaWZlLWltLXZlcmdsZWljaC8/KFxcP3wjfCQpIiwic2Vjb25kTWF0Y2hUeXBlIjoiQUxMVklTSVRTQ09NQklORUQiLCJ0aW1lc0NvdW50IjowfSwiNyI6eyJuYW1lIjoiRGF0ZW50YXJpZmUgVmVyZ2xlaWNoIiwibWF0Y2hUeXBlIjoiQVRMRUFTVCIsInByZWNpc2VEYXRlIjpudWxsLCJyZWxhdGl2ZVVSTFJlZ0V4cCI6Imh0dHBzOlxcL1xcL3d3d1xcLmNvbmdzdGFyXFwuZGVcXC9oYW5keXRhcmlmZVxcL2RhdGVudGFyaWZlLXZlcmdsZWljaC8/KFxcP3wjfCQpIiwic2Vjb25kTWF0Y2hUeXBlIjoiQUxMVklTSVRTQ09NQklORUQiLCJ0aW1lc0NvdW50IjowfSwiOCI6eyJuYW1lIjoiUG9zdHBhaWQiLCJtYXRjaFR5cGUiOiJBVExFQVNUIiwicHJlY2lzZURhdGUiOm51bGwsInJlbGF0aXZlVVJMUmVnRXhwIjoiaHR0cHM6XFwvXFwvd3d3XFwuY29uZ3N0YXJcXC5kZVxcL2hhbmR5dGFyaWZlXFwvKGFsbG5ldC1mbGF0LXRhcmlmZSp8ZGF0ZW50YXJpZmVcXC9kYXRlbiopIiwic2Vjb25kTWF0Y2hUeXBlIjoiQUxMVklTSVRTQ09NQklORUQiLCJ0aW1lc0NvdW50IjowfSwiOSI6eyJuYW1lIjoiUHJlcGFpZCIsIm1hdGNoVHlwZSI6IkFUTEVBU1QiLCJwcmVjaXNlRGF0ZSI6bnVsbCwicmVsYXRpdmVVUkxSZWdFeHAiOiJodHRwczpcXC9cXC93d3dcXC5jb25nc3RhclxcLmRlXFwvcHJlcGFpZFxcL3ByZXBhaWQtKiIsInNlY29uZE1hdGNoVHlwZSI6IkFMTFZJU0lUU0NPTUJJTkVEIiwidGltZXNDb3VudCI6MH0sIjEwIjp7Im5hbWUiOiJIb21lc3BvdCIsIm1hdGNoVHlwZSI6IkFUTEVBU1QiLCJwcmVjaXNlRGF0ZSI6bnVsbCwicmVsYXRpdmVVUkxSZWdFeHAiOiJodHRwczpcXC9cXC93d3dcXC5jb25nc3RhclxcLmRlXFwvKGZlc3RuZXR6LWludGVybmV0fGNvbmdzdGFyLXgpXFwvKGhvbWVzcG90LSp8Y29uZ3N0YXIteC10YXJpZiopIiwic2Vjb25kTWF0Y2hUeXBlIjoiQUxMVklTSVRTQ09NQklORUQiLCJ0aW1lc0NvdW50IjowfSwiMTEiOnsibmFtZSI6IkFORiBMIiwibWF0Y2hUeXBlIjoiQVRMRUFTVCIsInByZWNpc2VEYXRlIjpudWxsLCJyZWxhdGl2ZVVSTFJlZ0V4cCI6Imh0dHBzOlxcL1xcL3d3d1xcLmNvbmdzdGFyXFwuZGVcXC9oYW5keXRhcmlmZVxcL2FsbG5ldC1mbGF0LXRhcmlmZVxcL2FsbG5ldC1mbGF0LWwqIiwic2Vjb25kTWF0Y2hUeXBlIjoiQUxMVklTSVRTQ09NQklORUQiLCJ0aW1lc0NvdW50IjowfSwiMTIiOnsibmFtZSI6IlN0YXJ0c2VpdGUiLCJtYXRjaFR5cGUiOiJBVExFQVNUIiwicHJlY2lzZURhdGUiOm51bGwsInJlbGF0aXZlVVJMUmVnRXhwIjoiaHR0cHM6XFwvXFwvd3d3XFwuY29uZ3N0YXJcXC5kZS8/KFxcP3wjfCQpIiwic2Vjb25kTWF0Y2hUeXBlIjoiQUxMVklTSVRTQ09NQklORUQiLCJ0aW1lc0NvdW50IjowfSwiMTMiOnsibmFtZSI6IkFORiBNIiwibWF0Y2hUeXBlIjoiQVRMRUFTVCIsInByZWNpc2VEYXRlIjpudWxsLCJyZWxhdGl2ZVVSTFJlZ0V4cCI6Imh0dHBzOlxcL1xcL3d3d1xcLmNvbmdzdGFyXFwuZGVcXC9oYW5keXRhcmlmZVxcL2FsbG5ldC1mbGF0LXRhcmlmZVxcL2FsbG5ldC1mbGF0LW0qIiwic2Vjb25kTWF0Y2hUeXBlIjoiQUxMVklTSVRTQ09NQklORUQiLCJ0aW1lc0NvdW50IjowfSwiMTUiOnsibmFtZSI6IkFORiBTIGV4dHJhIiwibWF0Y2hUeXBlIjoiQVRMRUFTVCIsInByZWNpc2VEYXRlIjpudWxsLCJyZWxhdGl2ZVVSTFJlZ0V4cCI6Imh0dHBzOlxcL1xcL3d3d1xcLmNvbmdzdGFyXFwuZGVcXC9oYW5keXRhcmlmZVxcL2FsbG5ldC1mbGF0LXRhcmlmZVxcL2FsbG5ldC1mbGF0LXMtZXh0cmFcXC8qIiwic2Vjb25kTWF0Y2hUeXBlIjoiQUxMVklTSVRTQ09NQklORUQiLCJ0aW1lc0NvdW50IjowfSwiMTYiOnsibmFtZSI6IlByZXBhaWQgVGFyaWZlIGltIFZlcmdsZWljaCIsIm1hdGNoVHlwZSI6IkFUTEVBU1QiLCJwcmVjaXNlRGF0ZSI6bnVsbCwicmVsYXRpdmVVUkxSZWdFeHAiOiJodHRwczpcXC9cXC93d3dcXC5jb25nc3RhclxcLmRlXFwvcHJlcGFpZFxcL3ByZXBhaWQtdGFyaWZlLXZlcmdsZWljaC8/KFxcP3wjfCQpIiwic2Vjb25kTWF0Y2hUeXBlIjoiQUxMVklTSVRTQ09NQklORUQiLCJ0aW1lc0NvdW50IjowfSwiMTciOnsibmFtZSI6IkNTQyIsIm1hdGNoVHlwZSI6IkFUTEVBU1QiLCJwcmVjaXNlRGF0ZSI6bnVsbCwicmVsYXRpdmVVUkxSZWdFeHAiOiJodHRwczpcXC9cXC93d3dcXC5jb25nc3RhclxcLmRlXFwvKG1laW5jb25nc3Rhcip8bG9naW4qKSIsInNlY29uZE1hdGNoVHlwZSI6IkFMTFZJU0lUU0NPTUJJTkVEIiwidGltZXNDb3VudCI6MH0sIjE4Ijp7Im5hbWUiOiJFbmRnZXLDpHRlIFNlaXRlbiIsIm1hdGNoVHlwZSI6IkFUTEVBU1QiLCJwcmVjaXNlRGF0ZSI6bnVsbCwicmVsYXRpdmVVUkxSZWdFeHAiOiJodHRwczpcXC9cXC93d3dcXC5jb25nc3RhclxcLmRlXFwvKGhhbmR5c1xcL2RldGFpbHN8Z2VyYWV0ZSlcXC8qIiwic2Vjb25kTWF0Y2hUeXBlIjoiQUxMVklTSVRTQ09NQklORUQiLCJ0aW1lc0NvdW50IjowfSwiMTkiOnsibmFtZSI6IkRhdGVuIEwiLCJtYXRjaFR5cGUiOiJBVExFQVNUIiwicHJlY2lzZURhdGUiOm51bGwsInJlbGF0aXZlVVJMUmVnRXhwIjoiaHR0cHM6XFwvXFwvd3d3LmNvbmdzdGFyXFwuZGVcXC9oYW5keXRhcmlmZVxcL2RhdGVudGFyaWZlXFwvZGF0ZW4tbFxcLyIsInNlY29uZE1hdGNoVHlwZSI6IkFMTFZJU0lUU0NPTUJJTkVEIiwidGltZXNDb3VudCI6MH0sIjIwIjp7Im5hbWUiOiJEYXRlbiBNIiwibWF0Y2hUeXBlIjoiQVRMRUFTVCIsInByZWNpc2VEYXRlIjpudWxsLCJyZWxhdGl2ZVVSTFJlZ0V4cCI6Imh0dHBzOlxcL1xcL3d3dy5jb25nc3RhclxcLmRlXFwvaGFuZHl0YXJpZmVcXC9kYXRlbnRhcmlmZVxcL2RhdGVuLW1cXC8iLCJzZWNvbmRNYXRjaFR5cGUiOiJBTExWSVNJVFNDT01CSU5FRCIsInRpbWVzQ291bnQiOjB9LCIyMSI6eyJuYW1lIjoiRGF0ZW4gUyIsIm1hdGNoVHlwZSI6IkFUTEVBU1QiLCJwcmVjaXNlRGF0ZSI6bnVsbCwicmVsYXRpdmVVUkxSZWdFeHAiOiJodHRwczpcXC9cXC93d3cuY29uZ3N0YXJcXC5kZVxcL2hhbmR5dGFyaWZlXFwvZGF0ZW50YXJpZmVcXC9kYXRlbi1zXFwvIiwic2Vjb25kTWF0Y2hUeXBlIjoiQUxMVklTSVRTQ09NQklORUQiLCJ0aW1lc0NvdW50IjowfSwiMjIiOnsibmFtZSI6IlByZXBhaWQgV2llIGljaCB3aWxsIEhKLVBha2V0IiwibWF0Y2hUeXBlIjoiQVRMRUFTVCIsInByZWNpc2VEYXRlIjpudWxsLCJyZWxhdGl2ZVVSTFJlZ0V4cCI6Imh0dHBzOlxcL1xcL3d3dy5jb25nc3RhclxcLmRlXFwvcHJlcGFpZFxcL3ByZXBhaWQtd2llLWljaC13aWxsXFwvaGFsYmphaHJlcy1wYWtldCoiLCJzZWNvbmRNYXRjaFR5cGUiOiJBTExWSVNJVFNDT01CSU5FRCIsInRpbWVzQ291bnQiOjB9LCIyMyI6eyJuYW1lIjoiUHJlcGFpZCBXaWUgaWNoIHdpbGwgWEwiLCJtYXRjaFR5cGUiOiJBVExFQVNUIiwicHJlY2lzZURhdGUiOm51bGwsInJlbGF0aXZlVVJMUmVnRXhwIjoiaHR0cHM6XFwvXFwvd3d3LmNvbmdzdGFyXFwuZGVcXC9wcmVwYWlkXFwvcHJlcGFpZC13aWUtaWNoLXdpbGxcXC9hbGxuZXQteGxcXC8/Iiwic2Vjb25kTWF0Y2hUeXBlIjoiQUxMVklTSVRTQ09NQklORUQiLCJ0aW1lc0NvdW50IjowfSwiMjQiOnsibmFtZSI6IlByZXBhaWQgV2llIGljaCB3aWxsIEwiLCJtYXRjaFR5cGUiOiJBVExFQVNUIiwicHJlY2lzZURhdGUiOm51bGwsInJlbGF0aXZlVVJMUmVnRXhwIjoiaHR0cHM6XFwvXFwvd3d3LmNvbmdzdGFyXFwuZGVcXC9wcmVwYWlkXFwvcHJlcGFpZC13aWUtaWNoLXdpbGxcXC9hbGxuZXQtbFxcLz8iLCJzZWNvbmRNYXRjaFR5cGUiOiJBTExWSVNJVFNDT01CSU5FRCIsInRpbWVzQ291bnQiOjB9LCIyNSI6eyJuYW1lIjoiUHJlcGFpZCBXaWUgaWNoIHdpbGwgTSIsIm1hdGNoVHlwZSI6IkFUTEVBU1QiLCJwcmVjaXNlRGF0ZSI6bnVsbCwicmVsYXRpdmVVUkxSZWdFeHAiOiJodHRwczpcXC9cXC93d3cuY29uZ3N0YXJcXC5kZVxcL3ByZXBhaWRcXC9wcmVwYWlkLXdpZS1pY2gtd2lsbFxcL2FsbG5ldC1tXFwvPyIsInNlY29uZE1hdGNoVHlwZSI6IkFMTFZJU0lUU0NPTUJJTkVEIiwidGltZXNDb3VudCI6MH0sIjI2Ijp7Im5hbWUiOiJQcmVwYWlkIFdpZSBpY2ggd2lsbCBTIiwibWF0Y2hUeXBlIjoiQVRMRUFTVCIsInByZWNpc2VEYXRlIjpudWxsLCJyZWxhdGl2ZVVSTFJlZ0V4cCI6Imh0dHBzOlxcL1xcL3d3dy5jb25nc3RhclxcLmRlXFwvcHJlcGFpZFxcL3ByZXBhaWQtd2llLWljaC13aWxsXFwvYWxsbmV0LXNcXC8/Iiwic2Vjb25kTWF0Y2hUeXBlIjoiQUxMVklTSVRTQ09NQklORUQiLCJ0aW1lc0NvdW50IjowfSwiMjciOnsibmFtZSI6IlByZXBhaWQgV2llIGljaCB3aWxsIFByZXBhaWQtS2FydGUiLCJtYXRjaFR5cGUiOiJBVExFQVNUIiwicHJlY2lzZURhdGUiOm51bGwsInJlbGF0aXZlVVJMUmVnRXhwIjoiaHR0cHM6XFwvXFwvd3d3LmNvbmdzdGFyXFwuZGVcXC9wcmVwYWlkXFwvcHJlcGFpZC13aWUtaWNoLXdpbGxcXC9wcmVwYWlkLWthcnRlXFwvPyIsInNlY29uZE1hdGNoVHlwZSI6IkFMTFZJU0lUU0NPTUJJTkVEIiwidGltZXNDb3VudCI6MH0sIjI4Ijp7Im5hbWUiOiJQcmVwYWlkIERhdGVuLVRhcmlmIiwibWF0Y2hUeXBlIjoiQVRMRUFTVCIsInByZWNpc2VEYXRlIjpudWxsLCJyZWxhdGl2ZVVSTFJlZ0V4cCI6Imh0dHBzOlxcL1xcL3d3dy5jb25nc3RhclxcLmRlXFwvcHJlcGFpZFxcL3ByZXBhaWQtZGF0ZW4tdGFyaWZcXC8/Iiwic2Vjb25kTWF0Y2hUeXBlIjoiQUxMVklTSVRTQ09NQklORUQiLCJ0aW1lc0NvdW50IjowfSwiMjkiOnsibmFtZSI6IkhvbWVzcG90IDMwIiwibWF0Y2hUeXBlIjoiQVRMRUFTVCIsInByZWNpc2VEYXRlIjpudWxsLCJyZWxhdGl2ZVVSTFJlZ0V4cCI6Imh0dHBzOlxcL1xcL3d3dy5jb25nc3RhclxcLmRlXFwvZmVzdG5ldHotaW50ZXJuZXRcXC9ob21lc3BvdC0zMFxcLz8iLCJzZWNvbmRNYXRjaFR5cGUiOiJBTExWSVNJVFNDT01CSU5FRCIsInRpbWVzQ291bnQiOjB9LCIzMCI6eyJuYW1lIjoiSG9tZXNwb3QgMTAwIiwibWF0Y2hUeXBlIjoiQVRMRUFTVCIsInByZWNpc2VEYXRlIjpudWxsLCJyZWxhdGl2ZVVSTFJlZ0V4cCI6Imh0dHBzOlxcL1xcL3d3dy5jb25nc3RhclxcLmRlXFwvZmVzdG5ldHotaW50ZXJuZXRcXC9ob21lc3BvdC0xMDBcXC8/Iiwic2Vjb25kTWF0Y2hUeXBlIjoiQUxMVklTSVRTQ09NQklORUQiLCJ0aW1lc0NvdW50IjowfSwiMzEiOnsibmFtZSI6IkhvbWVzcG90IDIwMCIsIm1hdGNoVHlwZSI6IkFUTEVBU1QiLCJwcmVjaXNlRGF0ZSI6bnVsbCwicmVsYXRpdmVVUkxSZWdFeHAiOiJodHRwczpcXC9cXC93d3cuY29uZ3N0YXJcXC5kZVxcL2Zlc3RuZXR6LWludGVybmV0XFwvaG9tZXNwb3QtMjAwXFwvPyIsInNlY29uZE1hdGNoVHlwZSI6IkFMTFZJU0lUU0NPTUJJTkVEIiwidGltZXNDb3VudCI6MH0sIjMyIjp7Im5hbWUiOiJDb25nc3RhciBYIiwibWF0Y2hUeXBlIjoiQVRMRUFTVCIsInByZWNpc2VEYXRlIjpudWxsLCJyZWxhdGl2ZVVSTFJlZ0V4cCI6Imh0dHBzOlxcL1xcL3d3dy5jb25nc3RhclxcLmRlXFwvY29uZ3N0YXIteFxcL2NvbmdzdGFyLXgtdGFyaWZcXC8/Iiwic2Vjb25kTWF0Y2hUeXBlIjoiQUxMVklTSVRTQ09NQklORUQiLCJ0aW1lc0NvdW50IjowfSwiMzMiOnsibmFtZSI6IkFORiBTIiwibWF0Y2hUeXBlIjoiQVRMRUFTVCIsInByZWNpc2VEYXRlIjpudWxsLCJyZWxhdGl2ZVVSTFJlZ0V4cCI6Imh0dHBzOlxcL1xcL3d3d1xcLmNvbmdzdGFyXFwuZGVcXC9oYW5keXRhcmlmZVxcL2FsbG5ldC1mbGF0LXRhcmlmZVxcL2FsbG5ldC1mbGF0LXNcXC8iLCJzZWNvbmRNYXRjaFR5cGUiOiJBTExWSVNJVFNDT01CSU5FRCIsInRpbWVzQ291bnQiOjB9LCIzNCI6eyJuYW1lIjoiSGlsZmUgJiBTZXJ2aWNlIFNlaXRlbiIsIm1hdGNoVHlwZSI6IkFUTEVBU1QiLCJwcmVjaXNlRGF0ZSI6bnVsbCwicmVsYXRpdmVVUkxSZWdFeHAiOiJodHRwczpcXC9cXC93d3dcXC5jb25nc3RhclxcLmRlXFwvKGhpbGZlLXNlcnZpY2UqfGZlc3RuZXR6LWludGVybmV0XFwvaG9tZXNwb3QtZWlucmljaHRlbip8cHJlcGFpZFxcL2thcnRlLWFrdGl2aWVyZW4vKnxwcmVwYWlkXFwvc2VydmljZXNcXC9rYXJ0ZS1hdWZsYWRlbiopIiwic2Vjb25kTWF0Y2hUeXBlIjoiQUxMVklTSVRTQ09NQklORUQiLCJ0aW1lc0NvdW50IjowfX0sImN1c3RvbURhdGEiOnsiMCI6eyJtZXRob2QiOiJDTElFTlQiLCJuYW1lIjoiSGVyc3RlbGxlciBJbnRlcmVzc2UiLCJmb3JtYXQiOi0xLCJzY29wZSI6IlZJU0lUT1IiLCJ0eXBlIjoiTElTVCJ9LCIxIjp7Im1ldGhvZCI6IkNMSUVOVCIsIm5hbWUiOiJMb2dpbiIsImZvcm1hdCI6LTIsInNjb3BlIjoiVklTSVQiLCJ0eXBlIjoiVU5JUVVFIn0sIjQiOnsibWV0aG9kIjoiQ0xJRU5UIiwibmFtZSI6IkthbWVsZW9vbkRldl9fQWNjZXB0ZWQgVGhlIE0gT2ZmZXIiLCJmb3JtYXQiOi0yLCJzY29wZSI6IlZJU0lUT1IiLCJ0eXBlIjoiVU5JUVVFIiwibGVhcm5hYmxlIjp0cnVlfSwiNSI6eyJtZXRob2QiOiJDVVNUT01fQ09ERSIsIm5hbWUiOiJbQUldSG91cnNMYXN0VmlzaXQiLCJmb3JtYXQiOjAsInNjb3BlIjoiVklTSVQiLCJ0eXBlIjoiVU5JUVVFIiwiY3VzdG9tRXZhbENvZGUiOiJjb25zdCBhbGxWaXNpdHMgPSBLYW1lbGVvb24uQVBJLlZpc2l0b3IudmlzaXRzO1xuaWYgKCFLYW1lbGVvb24uQVBJLlZpc2l0b3IuY3VzdG9tRGF0YVsnW0FJXUhvdXJzTGFzdFZpc2l0J10gJiYgYWxsVmlzaXRzLmxlbmd0aCA+IDEpIHtcbiAgICBjb25zdCB0aGlzVmlzaXQgPSBhbGxWaXNpdHNbYWxsVmlzaXRzLmxlbmd0aC0xXS5zdGFydERhdGU7XG4gICAgY29uc3QgbGFzdFZpc2l0ID0gYWxsVmlzaXRzW2FsbFZpc2l0cy5sZW5ndGgtMl0uc3RhcnREYXRlO1xuICAgIGNvbnN0IGRpZmZIb3VycyA9ICh0aGlzVmlzaXQtbGFzdFZpc2l0KS8zNjAwMDAwMDtcbiAgICByZXR1cm4ge1widmFsdWVcIjogZGlmZkhvdXJzLnRvRml4ZWQoMiksIFwib3ZlcndyaXRlXCI6IGZhbHNlfTtcbn0gZWxzZSB7XG4gICAgcmV0dXJuIHtcInZhbHVlXCI6IG51bGwsIFwib3ZlcndyaXRlXCI6IGZhbHNlfTtcbn0iLCJsZWFybmFibGUiOnRydWV9LCI2Ijp7Im1ldGhvZCI6IkNMSUVOVCIsIm5hbWUiOiJbQUldUGxhblNlZW5TLE0sRkYoNUdCKSIsImZvcm1hdCI6LTIsInNjb3BlIjoiVklTSVQiLCJ0eXBlIjoiVU5JUVVFIiwibGVhcm5hYmxlIjp0cnVlfSwiNyI6eyJtZXRob2QiOiJDTElFTlQiLCJuYW1lIjoiW0FJXUEyQ1BsYW4iLCJmb3JtYXQiOjAsInNjb3BlIjoiVklTSVQiLCJ0eXBlIjoiVU5JUVVFIiwibGVhcm5hYmxlIjp0cnVlfSwiOCI6eyJtZXRob2QiOiJDVVNUT01fQ09ERSIsIm5hbWUiOiJbQUldTG9naW4iLCJmb3JtYXQiOi0yLCJzY29wZSI6IlZJU0lUIiwidHlwZSI6IlVOSVFVRSIsImN1c3RvbUV2YWxDb2RlIjoiaWYgKC9jb25nc3RhclxcLmRlXFwvbG9naW4vLnRlc3QoZG9jdW1lbnQucmVmZXJyZXIpICYmIC9jb25nc3RhclxcLmRlXFwvbWVpbmNvbmdzdGFyLy50ZXN0KGRvY3VtZW50LmxvY2F0aW9uLmhyZWYpKSB7XG4gICAgcmV0dXJuIHtcInZhbHVlXCI6IHRydWUsIFwib3ZlcndyaXRlXCI6IGZhbHNlfTtcbn0gZWxzZSBpZiAoL2NvbmdzdGFyXFwuZGVcXC9sb2dpblxcP3I9XFwvY2hlY2tvdXRcXC91ZWJlcnNpY2h0Ly50ZXN0KGRvY3VtZW50LnJlZmVycmVyKSAmJiAvY29uZ3N0YXJcXC5kZVxcL2NoZWNrb3V0XFwvdWViZXJzaWNodC8udGVzdChkb2N1bWVudC5sb2NhdGlvbi5ocmVmKSl7XG4gICAgcmV0dXJuIHtcInZhbHVlXCI6IHRydWUsIFwib3ZlcndyaXRlXCI6IGZhbHNlfTtcbn0gZWxzZSB7XG4gICAgcmV0dXJuIHtcInZhbHVlXCI6IG51bGwsIFwib3ZlcndyaXRlXCI6IGZhbHNlfTtcbn0iLCJsZWFybmFibGUiOnRydWV9LCI5Ijp7Im1ldGhvZCI6IkNMSUVOVCIsIm5hbWUiOiJbQUldT3JkZXJPcHRpb24iLCJmb3JtYXQiOi0yLCJzY29wZSI6IlZJU0lUIiwidHlwZSI6IlVOSVFVRSIsImxlYXJuYWJsZSI6dHJ1ZX0sIjEwIjp7Im1ldGhvZCI6IkNMSUVOVCIsIm5hbWUiOiJbQUldT3JkZXJBZ2UiLCJmb3JtYXQiOjAsInNjb3BlIjoiVklTSVQiLCJ0eXBlIjoiVU5JUVVFIiwibGVhcm5hYmxlIjp0cnVlfSwiMTEiOnsibWV0aG9kIjoiQ0xJRU5UIiwibmFtZSI6IltBSV1PcmRlclBob25lU2VnbWVudC1wcmVtaXVtIiwiZm9ybWF0IjotMiwic2NvcGUiOiJWSVNJVCIsInR5cGUiOiJVTklRVUUiLCJsZWFybmFibGUiOnRydWV9LCIxMiI6eyJtZXRob2QiOiJDTElFTlQiLCJuYW1lIjoiW0FJXU9yZGVyUGhvbmVTZWdtZW50LW1pZGRlbCIsImZvcm1hdCI6LTIsInNjb3BlIjoiVklTSVQiLCJ0eXBlIjoiVU5JUVVFIiwibGVhcm5hYmxlIjp0cnVlfSwiMTMiOnsibWV0aG9kIjoiQ0xJRU5UIiwibmFtZSI6IltBSV1PcmRlclBob25lU2VnbWVudC1sb3ciLCJmb3JtYXQiOi0yLCJzY29wZSI6IlZJU0lUIiwidHlwZSI6IlVOSVFVRSIsImxlYXJuYWJsZSI6dHJ1ZX0sIjE0Ijp7Im1ldGhvZCI6IkNMSUVOVCIsIm5hbWUiOiJQbGFuIFBEUCIsImZvcm1hdCI6LTEsInNjb3BlIjoiVklTSVRPUiIsInR5cGUiOiJMSVNUIiwibG9jYWxPbmx5Ijp0cnVlfSwiMTUiOnsibWV0aG9kIjoiQ0xJRU5UIiwibmFtZSI6Ikxhc3Qgc2VlbiBwbGFuIFBEUCIsImZvcm1hdCI6LTEsInNjb3BlIjoiVklTSVRPUiIsInR5cGUiOiJVTklRVUUiLCJsb2NhbE9ubHkiOnRydWV9LCIxNiI6eyJtZXRob2QiOiJDTElFTlQiLCJuYW1lIjoiQmVzdGFuZHNrdW5kZSBTZWdtZW50IiwiZm9ybWF0IjotMiwic2NvcGUiOiJWSVNJVE9SIiwidHlwZSI6IlVOSVFVRSJ9LCIxNyI6eyJtZXRob2QiOiJDTElFTlQiLCJuYW1lIjoiSW50ZXJlc3NlbnQgU2VnbWVudCIsImZvcm1hdCI6LTIsInNjb3BlIjoiVklTSVQiLCJ0eXBlIjoiVU5JUVVFIn0sIjE4Ijp7Im1ldGhvZCI6IkNMSUVOVCIsIm5hbWUiOiJQcmVtaXVtIFNlZ21lbnQiLCJmb3JtYXQiOi0yLCJzY29wZSI6IlZJU0lUT1IiLCJ0eXBlIjoiVU5JUVVFIn0sIjE5Ijp7Im1ldGhvZCI6IkNMSUVOVCIsIm5hbWUiOiJTY2huYXBwY2hlbmphZ2VyIFNlZ21lbnQiLCJmb3JtYXQiOi0yLCJzY29wZSI6IlZJU0lUT1IiLCJ0eXBlIjoiVU5JUVVFIn0sIjIwIjp7Im1ldGhvZCI6IkNMSUVOVCIsIm5hbWUiOiJVbmVudHNjaGllZGVuIFRhcmlmIFNlZ21lbnQiLCJmb3JtYXQiOi0yLCJzY29wZSI6IlZJU0lUT1IiLCJ0eXBlIjoiVU5JUVVFIn0sIjIxIjp7Im1ldGhvZCI6IkNMSUVOVCIsIm5hbWUiOiJVbmVudHNjaGllZGVuIFNtYXJ0cGhvbmUgU2VnbWVudCIsImZvcm1hdCI6LTIsInNjb3BlIjoiVklTSVRPUiIsInR5cGUiOiJVTklRVUUifSwiMjIiOnsibWV0aG9kIjoiQ0xJRU5UIiwibmFtZSI6IlRyZW5kc2V0dGVyIFNlZ21lbnQiLCJmb3JtYXQiOi0yLCJzY29wZSI6IlZJU0lUT1IiLCJ0eXBlIjoiVU5JUVVFIn0sIjI1Ijp7Im1ldGhvZCI6IkNMSUVOVCIsIm5hbWUiOiJVbmJla2FubnQgU2VnbWVudCIsImZvcm1hdCI6LTIsInNjb3BlIjoiVklTSVQiLCJ0eXBlIjoiVU5JUVVFIn0sIjI2Ijp7Im1ldGhvZCI6IkNMSUVOVCIsIm5hbWUiOiJJU1AiLCJmb3JtYXQiOi0xLCJzY29wZSI6IlZJU0lUT1IiLCJ0eXBlIjoiVU5JUVVFIn0sIjI3Ijp7Im1ldGhvZCI6IkNMSUVOVCIsIm5hbWUiOiJDU0MgVDAyIiwiZm9ybWF0IjotMSwic2NvcGUiOiJWSVNJVCIsInR5cGUiOiJVTklRVUUifSwiMjkiOnsibWV0aG9kIjoiQ0xJRU5UIiwibmFtZSI6IkNTQyBUMDIgUHVyY2hhc2VkIiwiZm9ybWF0IjotMiwic2NvcGUiOiJWSVNJVCIsInR5cGUiOiJVTklRVUUifSwiMzAiOnsibWV0aG9kIjoiQ0xJRU5UIiwibmFtZSI6IkNTQyBUMDIgVXNlciIsImZvcm1hdCI6LTEsInNjb3BlIjoiVklTSVQiLCJ0eXBlIjoiVU5JUVVFIn0sIjMxIjp7Im1ldGhvZCI6IkNMSUVOVCIsIm5hbWUiOiJDU0MgVDAzIFVzZXIiLCJmb3JtYXQiOi0xLCJzY29wZSI6IlZJU0lUIiwidHlwZSI6IlVOSVFVRSJ9LCIzMiI6eyJtZXRob2QiOiJDTElFTlQiLCJuYW1lIjoiQ1NDIFQwMyIsImZvcm1hdCI6LTEsInNjb3BlIjoiVklTSVQiLCJ0eXBlIjoiVU5JUVVFIn0sIjMzIjp7Im1ldGhvZCI6IkNMSUVOVCIsIm5hbWUiOiJDU0MgVDAzIFB1cmNoYXNlZCIsImZvcm1hdCI6LTIsInNjb3BlIjoiVklTSVQiLCJ0eXBlIjoiVU5JUVVFIn0sIjM0Ijp7Im1ldGhvZCI6IkNMSUVOVCIsIm5hbWUiOiJDU0MgVDAzIFRhcmlmIDEiLCJmb3JtYXQiOi0xLCJzY29wZSI6IlZJU0lUIiwidHlwZSI6IlVOSVFVRSJ9LCIzNSI6eyJtZXRob2QiOiJDTElFTlQiLCJuYW1lIjoiQ1NDIFQwMyBUYXJpZiAyIiwiZm9ybWF0IjotMSwic2NvcGUiOiJWSVNJVCIsInR5cGUiOiJVTklRVUUifSwiMzYiOnsibWV0aG9kIjoiQ0xJRU5UIiwibmFtZSI6IkNTQyBUMDMgVGFyaWZncm9lc3NlIiwiZm9ybWF0IjotMSwic2NvcGUiOiJWSVNJVCIsInR5cGUiOiJMSVNUIn0sIjM3Ijp7Im1ldGhvZCI6IkNMSUVOVCIsIm5hbWUiOiJbR0ddIENTQyBVc2VyIiwiZm9ybWF0IjotMSwic2NvcGUiOiJWSVNJVCIsInR5cGUiOiJVTklRVUUifSwiMzgiOnsibWV0aG9kIjoiQ0xJRU5UIiwibmFtZSI6IkNTQyBUMDQiLCJmb3JtYXQiOi0xLCJzY29wZSI6IlZJU0lUIiwidHlwZSI6IlVOSVFVRSJ9LCIzOSI6eyJtZXRob2QiOiJDTElFTlQiLCJuYW1lIjoiQ1NDIFQwNCBQdXJjaGFzZWQiLCJmb3JtYXQiOi0yLCJzY29wZSI6IlZJU0lUIiwidHlwZSI6IlVOSVFVRSJ9LCI0MCI6eyJtZXRob2QiOiJDTElFTlQiLCJuYW1lIjoiQ29udHJhY3QgZHVyYXRpb24iLCJmb3JtYXQiOi0xLCJzY29wZSI6IlZJU0lUIiwidHlwZSI6IlVOSVFVRSIsImxvY2FsT25seSI6dHJ1ZX0sIjQxIjp7Im1ldGhvZCI6IkNMSUVOVCIsIm5hbWUiOiJDRF9OaWNodCBlcmZhc3N0ZSBJRHMgKEdUTSkiLCJmb3JtYXQiOjAsInNjb3BlIjoiVklTSVQiLCJ0eXBlIjoiTElTVCJ9LCI0MiI6eyJtZXRob2QiOiJDTElFTlQiLCJuYW1lIjoiUmVtYXJrZXRpbmcgU2VnbWVudCIsImZvcm1hdCI6LTIsInNjb3BlIjoiVklTSVRPUiIsInR5cGUiOiJVTklRVUUifSwiNDMiOnsibWV0aG9kIjoiQ0xJRU5UIiwibmFtZSI6IlJlYWNoIFNlZ21lbnQiLCJmb3JtYXQiOi0yLCJzY29wZSI6IlZJU0lUT1IiLCJ0eXBlIjoiVU5JUVVFIn0sIjQ0Ijp7Im1ldGhvZCI6IkNMSUVOVCIsIm5hbWUiOiJHb29nbGUgUGFpZCBTZWdtZW50IiwiZm9ybWF0IjotMiwic2NvcGUiOiJWSVNJVCIsInR5cGUiOiJVTklRVUUifSwiNDUiOnsibWV0aG9kIjoiQ0xJRU5UIiwibmFtZSI6IlByZXBhaWQgS3VuZGUiLCJmb3JtYXQiOi0yLCJzY29wZSI6IlZJU0lUT1IiLCJ0eXBlIjoiVU5JUVVFIn0sIjQ2Ijp7Im1ldGhvZCI6IkNMSUVOVCIsIm5hbWUiOiJQcmVwYWlkIEt1bmRlIiwiZm9ybWF0IjotMSwic2NvcGUiOiJWSVNJVE9SIiwidHlwZSI6IlVOSVFVRSJ9LCI0NyI6eyJtZXRob2QiOiJDTElFTlQiLCJuYW1lIjoiaGFzaGVkIGN1c3RvbWVyIG51bWJlcnMiLCJmb3JtYXQiOi0xLCJzY29wZSI6IlZJU0lUT1IiLCJ0eXBlIjoiTElTVCJ9fX0=","targetingSegmentIdToGoalIdsToKcs":{"140536":{"200517":{"0":0,"12":0.0994,"16":0.1547,"18":0.21330000000000002,"20":1}}},"MentalistLearner":{"startOfVisitLearner":{"beforeMean":[0.02816,0.09654,0.154,0.00005903,0.000002138,1.057e-7,2.602e-7,8.7e-7,0,0.03435,0.00008815,0,0,0,0.0000492,4.065e-8,0.001328,0.0009764,0.0004495,1.626e-8,0,1.545e-7,0,0,0,0.0002224,0,0.00002143,0.000006033,0,0.000009537,0.00008153,0,4.878e-8,0.00004952,0.002566,0,0.000009611,0.0000563,0.00002965,0.0000318,0.00002013,0.00002651,8.131e-9,0.000002114,0.05926,0,0.01091,0.06105,0.09649,0.00003004,0.000001163,0,1.22e-7,3.09e-7,0,0.02291,0.0000537,0,0,0,0.00001378,1.626e-8,0.0006575,0.0005938,0.0002992,0,0,3.252e-8,0,0,0,0.0001003,0,0.00001053,0.000003456,0,0.0000047,0.00004683,0,0,0.00001812,0.001702,0,0.000002285,0.00004302,0.00001583,0.00001929,0.000006082,0.000008887,1.626e-8,5.204e-7,0.0457,0,0.005436,0.04207,0.06646,0.00001813,4.391e-7,6.505e-8,0,2.358e-7,0,0.01635,0.00003679,0,0,0,0.000003984,0,0.0004065,0.0004195,0.000239,0,0,1.626e-8,0,0,0,0.00005654,0,0.000006334,0.000002073,0,0.000001968,0.00003185,0,0,0.00000848,0.001243,0,7.643e-7,0.00003573,0.00001161,0.00001802,0.000003017,0.000004618,8.131e-9,1.951e-7,0.0369,0,0.05304,0.3594,0.5785,0.0001445,0.000004122,1.707e-7,3.984e-7,0.000001943,0,0.1433,0.0003014,0,0,0,0.00007701,5.692e-8,0.003815,0.003599,0.002132,1.626e-8,0,2.358e-7,0,0,0,0.0005855,0,0.00005867,0.00001694,0,0.00002669,0.0002395,0,4.878e-8,0.0001,0.01204,0,0.00001285,0.0002669,0.0001163,0.0001144,0.00003784,0.00005661,3.252e-8,0.00000287,0.3808,0,1.097,99500000,71140000,3.101,298800000,182200000,0.5765,0.5353,0.5041,12.41,11.73,94930000,157900000,0,0.1365,0.02049,0.2147,0.8409,0.003989,0.007261,0.00002446,3.832,0.5457,0,0,1.284,3.566,0,0,0,0,0,0,0,0,0,0,11.02,4.898,296.6,0,57.07,0,1015,0,4.284,0,33.67,0,1,2.097e-17,46.54,22.68,1,8.227e-19,30.53,1.155,1,5.009e-18,1,1.037e-19,38.7,0.1543,1,1.367e-21,1,3.491e-21,1,1.773e-20,974100000,52.52,0.9978,0.01372,0.1451,0.2056,0.00007083,0.000003391,2.846e-7,1.382e-7,0.00000152,0,0.04641,0.00005367,0,2.439e-8,0,0.00001594,9.757e-8,0.003401,0.0007931,0.0004829,5.692e-8,0,1.545e-7,0,8.131e-9,0,0.0001405,0,0.00002525,0.000006407,0,0.000007928,0.00003573,0,8.131e-9,0.00002237,0.003611,0,0.000001984,0.00006433,0.0000149,0.00004225,0.000005944,0.00000905,0,5.122e-7,0.06348,0.6861,1,1,0.4116,0.05252,0.1045,0.2758,0.007713,0.1479,69.02,0.7127,0.2142,0.05188,0.2629,0.01098,0.4418,0.00003582,0.01827,760.2,731.9,772.8,874.8,0.001799],"trainingOutputVectorTargetNbUpdates":122989409,"standarizeInputs":true,"outputDimension":2,"bias":[-7.338,-10.32],"inputDimension":329,"beforeDeviation":[0.1654,0.2953,0.3609,0.007683,0.001462,0.0003251,0.0005101,0.0009327,0,0.1821,0.009389,0,0,0,0.007014,0.0002016,0.03641,0.03123,0.0212,0.0001275,0,0.000393,0,0,0,0.01491,0,0.00463,0.002456,0,0.003088,0.009029,0,0.0002209,0.007037,0.05059,0,0.0031,0.007503,0.005445,0.005639,0.004487,0.005148,0.00009017,0.001454,0.2361,0,0.1039,0.2394,0.2953,0.005481,0.001078,0,0.0003492,0.0005559,0,0.1496,0.007328,0,0,0,0.003712,0.0001275,0.02563,0.02436,0.01729,0,0,0.0001803,0,0,0,0.01002,0,0.003245,0.001859,0,0.002168,0.006843,0,0,0.004257,0.04122,0,0.001512,0.006559,0.003979,0.004392,0.002466,0.002981,0.0001275,0.0007214,0.2088,0,0.07353,0.2007,0.2491,0.004258,0.0006626,0.000255,0,0.0004856,0,0.1268,0.006066,0,0,0,0.001996,0,0.02016,0.02048,0.01546,0,0,0.0001275,0,0,0,0.007519,0,0.002517,0.00144,0,0.001403,0.005643,0,0,0.002912,0.03524,0,0.0008742,0.005977,0.003407,0.004245,0.001737,0.002149,0.00009017,0.0004417,0.1885,0,0.509,1.515,2.206,0.02347,0.003027,0.0004132,0.0006312,0.001872,0,0.9158,0.03748,0,0,0,0.01465,0.0002991,0.1518,0.1319,0.133,0.0001275,0,0.0006312,0,0,0,0.05221,0,0.01695,0.00729,0,0.01519,0.03053,0,0.0002209,0.01952,0.3532,0,0.003731,0.0436,0.03162,0.02039,0.01423,0.01717,0.000255,0.001694,2.174,0,3.279,557700000,366700000,3.91,889800000,528900000,0.4941,0.4988,0.5,23.42,20.81,374500000,426000000,0,0.9587,0.3547,1.538,3.274,0.1044,0.1229,0.006422,30.94,8.487,0,0,32.02,84.24,0,0,0,0,0,0,0,0,0,0,55,15.14,7.705,0,8.173,0,2.166,0,1.356,0,27.17,0,4.766e-15,1.653e-17,102.3,49.86,5.314e-14,5.417e-18,19.73,3.716,2.161e-13,1.236e-17,3.349e-14,1.923e-18,14.06,1.411,4.465e-15,2.304e-19,3.969e-15,3.682e-19,5.552e-15,8.063e-19,3307000000,255.5,0.04677,0.1163,0.3522,0.4042,0.008416,0.001841,0.0005335,0.0003718,0.001233,0,0.2104,0.007326,0,0.0001562,0,0.003993,0.0003124,0.05822,0.02815,0.02197,0.0002386,0,0.000393,0,0.00009017,0,0.01185,0,0.005024,0.002531,0,0.002816,0.005978,0,0.00009017,0.004729,0.05999,0,0.001409,0.00802,0.003859,0.0065,0.002438,0.003008,0,0.0007157,0.2438,0.4641,8.181e-13,8.181e-13,0.4921,0.2231,0.3059,0.4469,0.08748,0.355,46.48,0.4525,0.4103,0.2218,0.4402,0.1042,0.4966,0.005985,0.1339,591.2,246.4,631.2,182.9,0.04238],"weights":[[0.05472,-0.03937,-0.04518,0.02008,-0.01306,-0.1095,-0.08323,-0.01763,-0.004816,-0.03728,0.03516,0.03067,0.01612,-0.1278,-0.06256,-0.09035,0.08998,0.02391,-0.01699,-0.06491,0.02489,0.06707,-0.1002,0.02095,0.000002953,-0.07462,0.03868,0.04741,0.02929,-0.1209,-0.08302,-0.1271,0.02655,-0.1074,-0.05653,0.1284,0.02677,0.09159,0.03887,-0.002901,-0.003546,-0.01977,0.0994,-0.0872,0.1244,0.164,-0.01394,0.03527,-0.06626,-0.07411,0.0208,-0.03983,-0.1233,0.02875,0.07268,0.0978,0.03215,-0.02822,0.0774,0.04605,0.07344,-0.09045,-0.1327,-0.0002188,-0.04871,0.03693,0.001032,0.07107,0.05194,-0.01515,-0.1183,0.001246,-0.001456,0.05922,0.06815,0.06817,-0.03068,0.06122,-0.1424,0.02571,0.0869,0.02627,0.02736,-0.018,-0.09473,0.02224,-0.04311,-0.03244,0.09602,0.1198,0.01672,0.07929,0.00596,0.03777,0.09981,-0.02323,-0.0001073,0.04376,-0.1027,0.007947,0.03296,0.02045,-0.001219,0.02299,0.008375,0.0505,-0.0885,0.09563,0.1371,0.09787,0.03288,0.05119,0.0419,0.02694,-0.04147,0.1244,0.01239,-0.05831,-0.008375,0.001886,-0.1127,-0.03436,-0.03104,-0.1292,0.01307,0.0459,0.103,0.04646,-0.01468,0.06468,0.05349,-0.04176,0.07201,-0.0589,0.1002,-0.1141,-0.0731,-0.02519,0.08258,0.008269,-0.1189,0.03147,-0.06814,0.09814,-0.072,0.1077,-0.03029,0.01335,0.02713,-0.03206,-0.006346,-0.07587,-0.07829,0.02471,-0.05938,-0.0005532,0.1283,-0.07046,0.007513,0.09432,-0.04129,-0.08178,0.01604,0.1148,0.05595,-0.03709,-0.0218,0.1151,-0.05569,0.07377,-0.08775,-0.08694,-0.1301,-0.02491,-0.133,0.03841,-0.03496,0.1149,-0.1209,-0.001058,-0.02969,0.1321,-0.04083,-0.149,0.07235,0.06935,0.1959,0.05764,-0.04479,0.1113,0.06326,-0.1524,0.02316,0.02173,-0.1964,0.2233,0.3622,0.06212,-0.08491,-0.4019,0.2347,0.1213,0.2111,-0.1944,0.1291,-0.01534,-0.2414,0.01353,0.07574,0.06259,0.01363,0.005623,-0.1289,0.5124,0.2108,0.05877,-0.04922,0.02778,0.09239,0.03277,-0.07795,0.1021,0.03132,-0.04189,0.03356,0.2505,-0.072,0.005596,0.07735,0.06026,-0.009227,-0.1308,-0.1307,0.02511,-0.003592,-0.1008,-0.07962,-0.0267,-0.006303,-0.05104,-0.04093,-0.02653,-0.0921,-0.1456,-0.1802,-0.6294,0.09914,-0.09319,0.6904,0.0007948,0.3397,0.4045,-0.01879,0.03832,-0.1256,0.1029,0.3906,-0.02437,-1.507,0.609,-0.03087,-0.09954,-0.03754,-0.2432,0.04473,-0.1209,-0.1032,-0.05076,0.06481,0.04524,-0.1049,0.1007,0.003897,0.03669,0.1378,-0.02588,-0.5873,-0.3478,-0.1458,0.007981,-0.03924,0.123,0.1078,0.04772,-0.1133,-0.003984,-0.1238,-0.03979,0.01652,0.1027,-0.0855,-0.1361,-0.01294,0.05393,-0.02306,0.2249,-0.0418,0.08149,-0.2367,-0.05263,0.04753,-0.04167,0.04653,-0.02523,0.08371,-0.0351,-0.1798,1.272,1.201,0.1478,-0.04077,0.104,-0.03046,0.06935,0.04503,-0.2399,0.09463,0.2703,0.2036,-0.1526,0.1119,0.003354,-0.1852,-0.05602,0.04503,-0.25,-0.04301,-0.06913,0.1749],[0.0001169,-0.06115,0.01621,0.08216,0.001245,-0.04819,-0.04115,0.06708,-0.03403,-0.0106,-0.005468,0.07357,0.1192,-0.01181,0.05256,-0.05095,0.05693,0.07569,0.04097,-0.1114,0.05207,0.08644,0.129,-0.07079,-0.03193,0.02265,0.1333,-0.05252,0.1283,0.0247,0.03781,0.06722,0.04626,0.06917,0.05931,0.1226,-0.1157,-0.003518,0.05531,0.0564,-0.02069,0.05902,0.02024,0.1174,-0.005206,-0.04337,-0.0737,0.02623,-0.07837,-0.03678,0.073,0.08825,-0.01191,0.125,-0.06366,-0.1149,0.05622,0.01966,0.01529,-0.01877,-0.01757,0.05051,-0.008514,0.0354,0.06314,0.1714,-0.117,-0.0216,-0.124,0.08932,0.05879,-0.1187,-0.005697,0.1119,0.03581,-0.0452,0.06509,0.1405,0.01722,-0.01189,-0.03439,0.06419,0.0258,0.08231,-0.1295,0.1183,-0.06712,-0.08393,0.01522,0.1546,0.1101,-0.03944,-0.08479,-0.1029,0.1396,-0.05686,-0.001853,0.005856,0.129,0.05166,0.1317,0.1271,-0.04698,0.05173,0.07216,-0.1117,0.1255,-0.01725,0.07248,-0.0801,0.005639,0.1204,0.08349,0.04231,0.07449,0.06683,0.1032,-0.04576,-0.01496,0.02672,-0.01863,0.07845,-0.08958,-0.1316,0.03033,-0.1039,0.07924,0.126,-0.05638,0.03388,-0.07503,0.05687,0.01504,-0.006011,-0.01308,0.05736,-0.0338,-0.04607,-0.006163,-0.03981,0.03311,0.04728,-0.03201,0.1363,0.08606,0.0541,-0.03385,0.07256,-0.1019,-0.04903,0.03318,-0.09416,-0.1316,-0.01996,-0.01313,0.08328,-0.09619,0.0494,0.134,0.00541,-0.03734,0.1338,0.1321,0.03974,-0.1235,0.001436,-0.008685,-0.04029,0.000191,-0.04876,0.04812,-0.06159,-0.007404,-0.01509,-0.1006,0.08267,-0.01544,-0.03213,0.1217,-0.08654,-0.05531,0.02512,-0.07269,-0.03195,0.06643,-0.118,0.2273,0.1159,-0.1431,0.1187,0.0227,-0.1513,0.06031,0.1515,-0.1192,0.2315,0.234,0.1838,0.1549,-0.2139,0.2263,0.02905,-0.06663,-0.4998,0.03661,-0.2125,-0.07992,-0.1366,0.04971,0.01518,0.4231,0.02104,0.0325,0.4018,0.3471,0.1316,-0.02233,-0.07224,-0.08065,0.02411,-0.08736,0.08226,0.007054,0.02559,-0.1148,0.0836,0.02702,-0.07497,0.08073,-0.07657,-0.0978,-0.108,-0.05629,0.02341,-0.01755,-0.003599,0.01585,-0.08549,0.000214,-0.0182,-0.04573,0.6183,0.1114,-0.7834,0.002811,-1.081,0.08391,-0.4715,0.349,-0.01418,0.3288,0.02933,0.05212,-0.02189,0.06675,0.02879,-0.005237,0.07292,-0.2163,0.48,-0.02391,-0.01567,-0.1482,-0.02258,0.09481,-0.00446,-0.0992,0.03432,-0.05742,-0.01249,-0.02473,0.005748,-0.01598,0.01468,-0.08978,-0.1006,-0.3104,-0.1538,-0.2368,-0.0372,-0.04862,-0.04783,-0.06277,0.03483,0.1154,0.0184,-0.1215,-0.03909,0.08509,0.09345,0.09771,0.143,-0.1213,-0.03382,0.09571,0.1172,0.04236,-0.1248,-0.09823,0.0478,0.13,0.04789,-0.0687,-0.1182,0.08863,-0.1756,-0.2502,0.9707,0.8671,0.2205,0.0007829,0.1425,0.05846,0.1463,0.003797,-0.338,-0.05726,0.2931,0.1645,0.0216,0.1407,0.07115,-0.007834,-0.3058,0.04954,-0.005738,-0.05536,-0.2024,0.1815]],"trainingOutputVectorTargetMean":[0.006747,0.001229]},"experiments":{},"numberTrainingVisits":122989409,"previousVisitsHistoryVectorDimension":257,"targetingSegments":{"140536":{"probabilityLearner":{"beforeMean":[0.03562,0.09681,0.1695,0.0001685,0.000003227,3.724e-7,0,0.000001986,0,0.02428,0.00009892,0,0,0,0.000006495,0,0.002512,0.0008056,0.001112,4.137e-8,0,3.31e-7,0,0,0,0.00009135,0,0.00002888,0.000009267,0,0.000004303,0.00001345,0,0,0.00001634,0.0033,0,0.000001614,0.0002139,0.00005176,0.00004977,0.00000393,0.00001845,0,0,0.0001777,0,0.01796,0.05546,0.09712,0.00008754,0.000001572,0,0,3.31e-7,0,0.01419,0.00007695,0,0,0,0.000002689,0,0.001162,0.0003855,0.0008142,0,0,1.655e-7,0,0,0,0.00005788,0,0.00001618,0.000006702,0,0.000003475,0.000008564,0,0,0.000009226,0.002099,0,7.447e-7,0.0001649,0.00004129,0.00002681,0.000002275,0.00001452,4.137e-8,0,0.0001299,0,0.009726,0.03473,0.06133,0.00005296,7.033e-7,0,0,3.724e-7,0,0.008999,0.00006359,0,0,0,0.000001614,0,0.000666,0.0002232,0.0006923,0,0,8.274e-8,0,0,0,0.00003881,0,0.00001183,0.000004137,0,0.000002731,0.000006909,0,0,0.000007282,0.001448,0,0.000001076,0.0001389,0.00003537,0.00002462,0.000002151,0.00001262,4.137e-8,0,0.0001009,0,0.07618,0.2734,0.4829,0.0004094,0.000006289,3.724e-7,0,0.000003765,0,0.07158,0.0004723,0,0,0,0.00001307,0,0.006048,0.001859,0.005673,4.137e-8,0,7.447e-7,0,0,0,0.0003125,0,0.0001025,0.00003128,0,0.00001663,0.00005068,0,0,0.00005639,0.01254,0,0.000003848,0.001045,0.0003381,0.0001497,0.00001142,0.00011,8.274e-8,0,0.0009212,0,0.6661,121500000,60350000,2.247,408500000,209600000,0.5045,0.4831,0.4639,15.54,14.84,74340000,174300000,0,0.1919,0.04067,0.2763,1.045,0.009185,0.009573,0.0000544,4.776,0.891,0,0,2.836,4.451,0,0,0,0,0,0,0,0,0,0,12.82,6.555,294.7,0,58.25,0,1016,0,3.728,0,28.75,0,1,1.821e-17,71.57,29.45,1,6.096e-19,26.07,1.195,1,6.2e-18,1,2.96e-19,42.83,0.2452,1,0,1,8.058e-21,1,4.723e-20,632900000,0.01046,0.1643,0.2484,0.0001991,0.000006123,8.688e-7,0,0.000005006,0,0.03342,0.0001003,0,0,0,0.000003889,0,0.004223,0.0006482,0.001571,2.069e-7,0,7.447e-7,0,0,0,0.00008941,0,0.00003306,0.00001146,0,0.00000451,0.00001047,0,0,0.00002367,0.002916,0,2.896e-7,0.0002518,0.00005842,0.0001079,0.000003517,0.00001721,4.137e-8,4.137e-8,0.0001967,0,0.0003582,0.006295,0.007088,0.000002565,2.069e-7,8.274e-8,0,1.241e-7,0,0.00184,0.000007488,0,0,0,1.655e-7,0,0.0001979,0.00001063,0.00004071,0,0,0,0,0,0,0.000004923,0,9.516e-7,0.000003186,0,1.655e-7,7.447e-7,0,0,4.551e-7,0.0003467,0,0,0.000005213,0.00001005,0.000001655,0,0.000007075,4.137e-8,0,0.00004977,0,0.00003372,0.0009479,0.001378,3.31e-7,4.137e-8,0,0,0,0,0.000352,2.482e-7,0,0,0,0,0,0.00001969,0.000001117,0.00001088,0,0,0,0,0,0,0.000001407,0,1.241e-7,2.482e-7,0,4.137e-8,8.274e-8,0,0,4.137e-8,0.00009483,0,0,3.724e-7,2.069e-7,0.000001779,0,7.033e-7,0,0,0.00001709,0,0.01087,0.1728,0.2591,0.0002023,0.000006371,9.516e-7,0,0.00000513,0,0.03612,0.0001081,0,0,0,0.000004054,0,0.004454,0.0006606,0.001626,2.069e-7,0,7.447e-7,0,0,0,0.00009809,0,0.00003421,0.00001498,0,0.000004716,0.00001146,0,0,0.00002416,0.003461,0,2.896e-7,0.0002575,0.00006872,0.0001117,0.000003517,0.00002536,8.274e-8,4.137e-8,0.0002831,0,0.3246,1435,120.9,0.9974,0.6754,0.4697,3.392,3.157,29890,17640,0,0,0,0,0,0,0,0,0,5.927,303.7,49,1013,5.14,40,1,76.81,1,30.07,1,1,41.83,1,1,1,0.02653,0.00247,0.04291,0.3484,0.000563,0.0006711,7.447e-7,0.7078,0.0604,0,0,0.1767,0.3642,0,1471000000,15.34,0.9994,0.01206,0.1641,0.2486,0.0001991,0.00000604,8.688e-7,0,0.000005006,0,0.03254,0.00006359,0,0,0,0.000003765,4.137e-8,0.004223,0.0006457,0.00147,2.069e-7,0,7.447e-7,0,0,0,0.00008233,0,0.00003268,0.00001138,0,0.000004427,0.000009847,0,0,0.00002296,0.00221,0,2.069e-7,0.0002517,0.00004088,0.000104,0.000003393,0.00001705,0,4.137e-8,0.0001866,0.6925,1,1,0.3316,0.199,0.3574,0.08905,0.01824,0.004802,93.18,0.004831,0.8413,0.1319,0.002239,0.01541,0.001677,0.00002652,0.007549,1661,853.1,1748,1005,0.006756],"trainingOutputVectorTargetNbUpdates":24170686,"standarizeInputs":true,"outputDimension":2,"bias":[-5.683,-6.933],"inputDimension":567,"beforeDeviation":[0.1854,0.2957,0.3752,0.01298,0.001796,0.0006102,0,0.001409,0,0.1539,0.009945,0,0,0,0.002549,0,0.05005,0.02837,0.03333,0.0002034,0,0.0005753,0,0,0,0.009557,0,0.005374,0.003044,0,0.002074,0.003667,0,0,0.004043,0.05735,0,0.00127,0.01463,0.007194,0.007055,0.001983,0.004296,0,0,0.01333,0,0.1328,0.2289,0.2961,0.009356,0.001254,0,0,0.0005753,0,0.1183,0.008772,0,0,0,0.00164,0,0.03407,0.01963,0.02852,0,0,0.0004068,0,0,0,0.007608,0,0.004022,0.002589,0,0.001864,0.002926,0,0,0.003037,0.04577,0,0.000863,0.01284,0.006426,0.005178,0.001508,0.003811,0.0002034,0,0.0114,0,0.09814,0.1831,0.2399,0.007277,0.0008386,0,0,0.0006102,0,0.09443,0.007974,0,0,0,0.00127,0,0.0258,0.01494,0.0263,0,0,0.0002877,0,0,0,0.006229,0,0.00344,0.002034,0,0.001652,0.002629,0,0,0.002698,0.03802,0,0.001037,0.01179,0.005947,0.004961,0.001467,0.003552,0.0002034,0,0.01004,0,0.8041,1.072,1.567,0.03628,0.003535,0.0006102,0,0.002219,0,0.5531,0.05816,0,0,0,0.004198,0,0.1593,0.06189,0.209,0.0002034,0,0.001254,0,0,0,0.04154,0,0.02803,0.01167,0,0.009241,0.01303,0,0,0.0178,0.3275,0,0.002565,0.08778,0.06056,0.02317,0.00619,0.03322,0.0004068,0,0.09655,0,1.985,667600000,353200000,3.307,1065000000,572900000,0.5,0.4997,0.4987,30.12,27.9,274200000,424100000,0,1.337,0.7258,1.792,3.648,0.2017,0.192,0.01154,38.17,15.67,0,0,58.97,130.7,0,0,0,0,0,0,0,0,0,0,51.61,16.77,7.662,0,8.437,0,1.785,0,1.171,0,31.3,0,2.49e-15,1.718e-17,122.3,54.54,3.625e-14,4.697e-18,18.76,3.821,5.489e-14,1.343e-17,1.425e-14,3.236e-18,14.45,1.771,2.471e-15,0,2.362e-15,5.594e-19,2.997e-15,1.316e-18,32210000000,0.1017,0.3705,0.4321,0.01411,0.002474,0.0009321,0,0.002237,0,0.1797,0.01001,0,0,0,0.001972,0,0.06485,0.02545,0.03961,0.0004548,0,0.000863,0,0,0,0.009455,0,0.005749,0.003385,0,0.002124,0.003235,0,0,0.004865,0.05392,0,0.0005382,0.01587,0.007643,0.01038,0.001875,0.004149,0.0002034,0.0002034,0.01402,0,0.01892,0.07909,0.08389,0.001602,0.0004548,0.0002877,0,0.0003523,0,0.04285,0.002736,0,0,0,0.0004068,0,0.01407,0.003261,0.00638,0,0,0,0,0,0,0.002219,0,0.0009755,0.001785,0,0.0004068,0.000863,0,0,0.0006746,0.01862,0,0,0.002283,0.003171,0.001286,0,0.00266,0.0002034,0,0.007055,0,0.005807,0.03077,0.03709,0.0005753,0.0002034,0,0,0,0,0.01876,0.0004982,0,0,0,0,0,0.004438,0.001057,0.003299,0,0,0,0,0,0,0.001186,0,0.0003523,0.0004982,0,0.0002034,0.0002877,0,0,0.0002034,0.009737,0,0,0.0006102,0.0004548,0.001334,0,0.0008386,0,0,0.004134,0,0.1052,0.4144,0.4884,0.01445,0.002621,0.0009755,0,0.002319,0,0.2134,0.01112,0,0,0,0.002074,0,0.0707,0.0262,0.04155,0.0004548,0,0.000863,0,0,0,0.0116,0,0.006092,0.004744,0,0.002265,0.003734,0,0,0.005015,0.07338,0,0.0005382,0.01636,0.009477,0.0107,0.001875,0.006644,0.0004068,0.0002034,0.0247,0,0.5376,34410,6398,0.05055,0.4682,0.4991,3.376,2.828,91980,58470,0,0,0,0,0,0,0,0,0,60.65,0,0,0,0,0,2.537e-15,146.9,3.868e-14,21.47,5.595e-14,2.494e-15,14.51,9.528e-16,8.253e-16,1.007e-15,0.2084,0.05202,0.2642,0.8636,0.0241,0.02697,0.0009096,6.046,1.599,0,0,7.894,19.47,0,4016000000,86.6,0.02514,0.1092,0.3704,0.4322,0.01411,0.002458,0.0009321,0,0.002237,0,0.1774,0.007974,0,0,0,0.00194,0.0002034,0.06485,0.0254,0.03831,0.0004548,0,0.000863,0,0,0,0.009073,0,0.005717,0.003373,0,0.002104,0.003138,0,0,0.004792,0.04696,0,0.0004548,0.01586,0.006393,0.0102,0.001842,0.004129,0,0.0002034,0.01366,0.4614,2.265e-13,2.265e-13,0.4708,0.3992,0.4792,0.2848,0.1338,0.06913,27.18,0.06934,0.3654,0.3383,0.04726,0.1232,0.04092,0.00515,0.08656,360.1,184.6,413.3,190.5,0.08192],"weights":[[0.003147,-0.0276,0.03232,0.02711,0.09013,-0.06327,0.03429,0.09222,-0.02329,-0.03026,0.08646,-0.09247,0.07498,0.07254,-0.07649,0.007527,0.06027,0.06036,0.04494,-0.09814,-0.03154,-0.009989,0.01435,-0.04121,0.05169,-0.0539,0.101,-0.06469,-0.05707,0.09638,-0.03649,-0.01771,0.06982,-0.0512,0.02545,0.07489,0.01399,0.03479,-0.006968,-0.1091,0.06265,0.04109,0.002545,-0.04813,-0.01473,-0.04061,-0.02774,0.01524,-0.01581,-0.0418,0.01118,-0.07747,-0.01742,-0.07635,-0.07228,-0.06181,0.02128,-0.09345,0.0829,-0.02106,-0.0447,0.07832,-0.06947,0.0008489,0.01291,0.03964,0.00267,0.09497,-0.04629,-0.09863,-0.007193,-0.04569,-0.0686,-0.08014,-0.0484,0.1075,0.03232,0.04044,-0.09513,0.03857,-0.0448,0.06672,0.001366,0.07748,-0.02576,0.009558,0.03778,-0.02344,0.03799,-0.0294,-0.03946,0.07688,0.01312,-0.07758,0.05442,-0.01106,0.0118,0.08916,0.03875,-0.08411,0.08979,-0.08777,0.0402,0.01902,0.03765,0.07698,0.07346,-0.09739,0.07116,0.06545,0.0302,0.02687,0.01806,0.0125,-0.07475,-0.05404,-0.007627,0.04619,-0.04371,-0.02394,0.1022,0.09642,-0.006593,-0.09807,0.08286,0.004046,0.02231,-0.07231,-0.05394,0.04474,-0.0006376,0.07398,-0.003113,-0.06975,0.03123,0.01174,0.05729,0.02576,-0.08989,0.008228,0.06634,0.08023,-0.05136,-0.1019,-0.01667,-0.04819,-0.02431,-0.03389,-0.03316,-0.03345,0.04899,-0.06293,0.04642,0.01523,-0.0996,0.05732,-0.06234,-0.04105,-0.04193,0.06803,0.01241,0.06318,0.0218,-0.01091,0.09695,-0.06965,0.02805,-0.09146,0.02127,0.03178,-0.04299,-0.05988,-0.05469,0.08144,-0.05386,-0.0201,0.01129,0.009689,0.08667,0.04053,0.05199,0.06542,-0.0414,0.07156,-0.02397,-0.04713,0.0582,0.04216,0.02313,0.06787,0.04216,-0.1405,0.09612,0.1674,-0.09404,0.2263,0.234,0.03712,-0.1296,-0.2137,0.2278,0.0858,0.115,0.1258,0.2707,0.01566,0.04135,-0.02878,0.004646,0.04896,0.1399,-0.05462,0.08928,0.1609,0.1364,0.07467,-0.006697,0.09781,0.01452,-0.004185,-0.07345,-0.07359,-0.07445,0.004501,-0.07233,0.1552,-0.02467,0.07392,0.06136,-0.02037,-0.09758,-0.05791,-0.01834,-0.04036,0.06965,0.01776,0.05008,0.06411,-0.09275,-0.008942,-0.004837,0.1589,-0.1419,-0.09437,-0.1992,-0.7787,0.2022,-0.178,0.4199,0.001765,0.2192,-0.1895,0.02931,0.04468,-0.04026,-0.1026,0.1165,0.05767,0.05346,0.04437,0.05027,-0.06993,-0.05541,0.04761,0.005233,-0.0679,-0.01815,-0.004303,-0.05619,0.02652,-0.02491,-0.02718,0.02106,0.07211,-0.122,-0.1248,0.1015,0.06114,0.07459,0.06573,0.09428,0.0873,0.09377,-0.007301,0.07307,0.0238,0.02919,0.0006871,0.02812,0.07094,0.04547,0.0557,-0.01288,0.06265,-0.07673,0.07052,-0.06261,0.02839,0.1205,0.05631,-0.02586,0.09906,-0.00863,-0.02168,-0.02816,0.1018,-0.006484,0.006615,0.001925,-0.06072,0.03732,-0.02646,0.01509,0.1022,0.06099,-0.03165,0.0133,-0.06996,-0.003851,0.008995,-0.02618,0.1372,0.0192,-0.01602,0.03657,-0.0508,-0.019,0.05615,-0.05143,-0.07879,-0.05598,-0.08386,0.07755,-0.04449,-0.08333,0.083,0.08752,-0.07305,-0.09861,0.007715,0.007935,0.05852,-0.05237,0.03512,-0.01357,0.0538,0.08738,0.02485,-0.03382,0.01179,-0.08016,-0.08898,0.08332,-0.03582,0.002765,-0.06549,-0.03857,0.0441,0.004369,0.05584,0.05502,-0.003354,0.03251,0.03086,0.05911,0.0456,0.07322,0.03202,-0.005191,-0.03739,0.04448,0.08639,-0.05753,0.03463,0.08408,0.09356,0.0294,-0.04064,0.047,-0.02311,-0.05916,0.04405,-0.06726,-0.02987,0.08824,0.03697,-0.008178,-0.02281,-0.04691,-0.06661,-0.045,0.05663,0.0256,0.07289,0.03429,-0.06656,-0.0948,-0.06236,-0.001536,-0.06586,-0.04969,-0.06553,0.08346,-0.1004,0.0004871,-0.008565,-0.008805,-0.07238,-0.01077,-0.001444,0.05591,0.008492,-0.06908,-0.04167,0.07174,-0.08679,-0.07256,-0.01676,0.0433,-0.05291,-0.09204,-0.05447,0.06331,-0.09048,0.03435,-0.08804,-0.1124,-0.06114,0.02117,-0.0774,-0.07389,0.03503,-0.09201,-0.01629,0.1046,0.007571,0.05043,-0.02589,0.06787,-0.03789,-0.01288,0.06713,-0.07259,0.06213,0.03482,-0.008703,-0.09423,-0.06942,-0.1071,-0.2597,0.2192,0.1932,-0.3103,0.1775,-0.02292,0.008002,0.06866,0.0628,0.09067,0.06978,-0.09809,0.07564,0.01539,0.003629,-0.071,0.6605,0.02025,-0.09291,-0.02365,-0.07932,-0.02658,-0.02857,0.03261,-0.09948,0.1617,-0.9854,0.02911,0.07248,-0.02324,-0.09963,-0.1058,0.06295,-0.4984,0.3472,-0.1234,-0.007643,-0.07185,-0.0148,-0.04823,0.08524,0.0624,0.01859,0.04834,0.07917,0.05023,0.002306,-0.2441,0.1625,0.06153,-0.07608,-0.02712,0.0449,0.08722,0.002998,-0.01713,-0.07647,0.004825,-0.02599,-0.007115,0.05893,0.006872,0.05544,-0.05666,0.05781,-0.116,-0.1224,-0.03998,0.01196,0.07006,-0.01261,0.09183,-0.07278,0.07345,0.02256,-0.09164,0.01728,0.06178,0.07012,-0.05512,-0.04698,0.08208,-0.06723,0.03354,0.01518,-0.0574,0.09543,-0.01615,-0.1036,0.07804,0.04457,-0.01341,-0.01716,-0.03594,-0.05657,-0.08537,-1.674,-1.6,0.1032,-0.05728,0.1611,0.1084,0.0771,-0.2743,-0.2352,0.1895,0.2751,0.0554,0.05804,0.1265,-0.2811,0.009913,0.1392,0.01603,0.1628,0.06448,-0.2912,0.1466],[0.05007,-0.03921,0.006353,0.1072,0.09104,-0.05283,-0.005854,0.1008,0.06885,-0.001117,0.07586,0.001758,-0.04767,-0.02638,0.03836,-0.06443,0.001784,0.01337,-0.006354,-0.04058,0.0128,0.02036,0.07919,0.09532,-0.0313,-0.05133,0.04814,0.00822,-0.0565,0.0111,0.03224,0.08954,-0.09983,0.0657,0.1146,0.06651,-0.0903,-0.08593,0.01193,0.008087,0.1156,0.02018,-0.0466,0.04243,-0.08163,-0.03634,0.07794,0.009284,-0.05151,-0.02581,0.0316,0.05656,-0.04367,-0.01978,-0.02548,0.08297,0.06137,0.002386,0.07837,0.01334,-0.04224,-0.03657,0.04921,0.01178,0.007143,0.1005,-0.007232,-0.07482,0.08754,0.08915,-0.04844,-0.04161,0.1069,-0.07247,0.006159,-0.02407,-0.07433,-0.05352,0.03124,-0.08712,0.004716,-0.07309,0.02868,-0.07135,0.03649,0.09511,0.02435,-0.09234,-0.01395,0.04612,-0.03141,-0.07705,0.08074,0.048,0.1135,-0.04687,0.02048,-0.01475,0.08092,-0.09746,-0.0003359,0.08835,-0.06773,0.02612,-0.05897,0.01496,0.01093,-0.0466,-0.003126,-0.09655,0.05887,0.09362,0.08784,-0.0358,0.01511,-0.05811,-0.04669,0.1004,0.01253,-0.04827,0.06527,0.09898,-0.05507,0.07963,-0.01122,-0.09767,-0.04061,0.04613,-0.05956,0.06778,0.08074,-0.06019,0.0493,-0.04155,0.00682,0.1031,0.101,0.05747,-0.01486,0.02342,-0.02513,0.09165,0.00364,0.02883,-0.008527,0.03383,-0.02403,0.007807,0.04505,-0.0298,-0.01982,0.001933,0.07308,0.09966,0.02048,-0.06779,-0.08564,-0.06028,-0.01284,-0.02983,-0.01572,0.07872,-0.05448,0.07831,0.07608,-0.04246,0.06337,-0.05501,0.02574,-0.04347,-0.09752,-0.01562,-0.01465,-0.08511,-0.04062,0.08484,0.003844,-0.009797,-0.05719,-0.04872,0.0825,0.09423,0.008403,0.01697,-0.07534,0.04333,-0.02611,-0.09625,-0.1022,0.0657,0.06437,-0.3869,0.02874,0.1022,-0.1175,0.1729,0.1442,0.01432,0.006934,-0.06792,0.1786,-0.03644,-0.03771,-0.228,0.1892,0.2017,0.2439,-0.1317,0.07097,-0.03253,0.4178,0.02786,-0.09064,0.1155,0.2264,-0.08048,0.08392,0.0661,-0.04036,0.04688,-0.01632,-0.04685,-0.06903,-0.02082,0.01216,0.03455,-0.01432,-0.08629,-0.056,-0.01317,-0.004467,0.0446,-0.03798,-0.09067,0.09796,-0.02326,-0.06943,0.04381,0.03883,0.006093,0.01117,0.7219,-0.08219,-0.5548,-0.03774,-0.296,0.1786,-0.2342,0.2154,0.05784,0.1707,0.006374,-0.05293,0.06006,0.07594,-0.1014,-0.01231,-0.04291,0.0343,0.0048,0.06471,0.004985,0.04862,-0.003641,0.09067,0.01808,-0.02126,0.05856,-0.04793,-0.08234,-0.0744,-0.07959,0.1043,-0.07331,-0.1211,-0.1071,-0.05179,-0.07437,-0.0313,0.04786,-0.08767,0.04958,0.04255,-0.06739,0.04513,-0.07573,0.01321,-0.09772,0.07285,0.04566,0.07414,-0.09492,0.09171,0.1307,-0.04975,-0.08402,-0.04505,0.05246,0.1111,-0.006741,0.07562,0.03264,-0.04451,0.02145,-0.003878,0.1227,0.03869,0.05646,0.08667,0.02337,0.03108,-0.06502,-0.05498,-0.1002,0.03143,-0.0796,-0.09303,-0.05267,-0.09342,-0.03115,0.0691,0.01441,0.08415,0.02321,0.05208,-0.09223,-0.0343,0.09016,0.08546,0.08374,0.007043,-0.06908,0.06475,0.01363,-0.09858,0.05356,0.06986,-0.00615,0.09534,-0.02757,0.08799,-0.07284,-0.01957,0.02869,-0.06679,-0.0007125,0.004261,0.07947,0.03488,0.09009,-0.06284,0.00767,0.04736,-0.05037,0.009434,-0.06812,-0.04012,0.09953,0.004946,-0.02949,0.01999,0.003265,0.09862,-0.1002,-0.05113,-0.04641,0.0457,0.07048,0.005796,0.07565,0.0346,0.07816,-0.08996,-0.06596,0.1017,0.07702,0.06067,0.1118,-0.0746,0.001133,-0.07061,0.01233,-0.02905,-0.08076,-0.06803,0.002263,0.09719,0.04706,-0.06801,-0.06566,0.003947,-0.05352,0.0576,0.004933,-0.07833,-0.08239,0.01679,0.04572,0.09693,-0.02845,-0.09043,-0.1259,0.0316,0.1156,0.03135,0.03856,-0.02654,-0.0628,-0.1154,0.07987,0.06918,0.09777,-0.04746,-0.01733,0.0009177,-0.1809,-0.06559,-0.05941,-0.0198,0.07137,-0.05567,0.08431,0.08557,0.02371,0.07615,-0.09337,-0.07181,-0.02834,-0.09772,0.08101,0.08722,-0.06977,0.06317,0.0476,-0.009795,0.003839,0.01279,0.03777,-0.02649,0.02751,0.0177,-0.06037,-0.02512,-0.09741,0.05789,-0.0537,-0.01921,-0.0396,-0.04016,-0.005514,0.06084,0.08799,-0.1822,0.0239,0.006384,0.06836,0.009158,-0.04633,0.02895,-0.03861,0.01128,0.001862,0.07219,0.08231,-0.01262,0.1808,-0.07246,-0.07594,-0.06757,-0.09446,0.01783,0.008796,-0.0557,0.4448,-0.4144,-0.5788,-0.006995,-0.04876,0.04279,0.004976,0.05515,0.182,-0.3578,0.1864,0.07993,-0.00008746,-0.02962,0.01985,-0.3143,0.1561,0.09449,-0.003084,-0.04383,0.06873,-0.01914,0.05742,-0.1075,-0.7867,0.02837,-0.04134,-0.01088,0.03247,-0.01538,-0.04194,0.05888,0.08836,0.002521,0.02106,0.09008,-0.06588,0.01177,0.06094,0.04538,0.06046,-0.1421,-0.05247,0.07368,0.02464,-0.009943,0.0953,0.00423,0.07503,-0.04515,-0.001731,-0.02509,0.08002,0.07904,-0.08519,-0.05337,-0.02662,0.02966,-0.0256,-0.008168,0.009461,-0.02025,-0.06982,0.07545,0.1043,-0.01059,0.02058,-0.03852,-0.05865,-0.0656,-0.04396,-0.07432,-1.426,-1.391,0.2249,0.03934,0.2221,0.1163,0.08838,-0.1435,-0.2468,0.1895,0.3674,0.1801,-0.03536,0.2028,-0.04661,0.04702,-0.0497,0.0006132,0.145,0.07702,-0.2843,0.104]],"trainingOutputVectorTargetMean":[0.0137,0.002799]},"previousVisitsHistoryVectorDimension":257,"visitHistoryVectorDimension":238},"140537":{"probabilityLearner":{"beforeMean":[0.01484,0.186,0.234,0.0000733,0.00000447,1.277e-7,0,6.385e-7,0,0.06359,0.0002138,0,0,0,0.00001596,1.277e-7,0.004494,0.004462,0.0003583,0,0,1.277e-7,0,0,0,0.00009246,0,0.00007394,0.000006768,0,0.00000332,0.000006002,0,0,0.000009705,0.004177,0,0.000001149,0.00005108,0.000007535,0.000007535,0.000005364,0.000004087,0,0,0.02401,0,0.007096,0.1225,0.1545,0.00004035,0.000001149,0,0,1.277e-7,0,0.04389,0.0001318,0,0,0,0.000008428,0,0.00246,0.002873,0.0002643,0,0,1.277e-7,0,0,0,0.00005874,0,0.00004035,0.000004342,0,0.000002682,0.000003065,0,0,0.000004725,0.002829,0,5.108e-7,0.00003678,0.000003959,0.000005108,0.000002426,0.000002937,0,0,0.01906,0,0.003915,0.08703,0.1092,0.00002414,5.108e-7,0,0,0,0,0.03218,0.00008441,0,0,0,0.000006896,0,0.001614,0.002098,0.0002171,0,0,1.277e-7,0,0,0,0.00004061,0,0.00002439,0.000003193,0,0.000001532,0.000002554,0,0,0.000003703,0.00204,0,7.662e-7,0.00003231,0.000003193,0.000008939,0.000002426,0.000002809,0,0,0.01537,0,0.03225,0.7415,0.9318,0.0001919,0.000006385,1.277e-7,0,7.662e-7,0,0.2798,0.0006674,0,0,0,0.0000968,1.277e-7,0.01427,0.01771,0.001795,0,0,3.831e-7,0,0,0,0.000331,0,0.0002166,0.00002197,0,0.00002797,0.00001775,0,0,0.00002337,0.01819,0,0.000002426,0.0002471,0.00002618,0.0000424,0.00001379,0.00001443,0,0,0.145,0,1.273,165800000,121100000,1.629,324000000,188500000,0.4314,0.3996,0.3735,9.775,9.775,72790000,152000000,0,0.2417,0.03883,0.6139,2.053,0.01162,0.007254,0.00003269,8.222,0.8787,0,0,3.538,4.781,0,0,0,0,0,0,0,0,0,0,13.33,6.13,0,0,0,0,0,0,0,0,0,0,1,1.732e-17,71.9,32.78,1,2.008e-18,34.44,1.726,1,3.211e-18,1,1.303e-18,38.9,0.5694,1,1.024e-20,1,0,1,0,971800000,0.004012,0.5223,0.5317,0.00007905,0.00001852,2.554e-7,0,0.000001532,0,0.1554,0.0003783,0,1.277e-7,0,0.000009961,2.554e-7,0.01339,0.004692,0.0004348,1.277e-7,0,2.554e-7,0,0,0,0.0001222,0,0.0001527,0.000006641,0,0.00000332,0.000002171,0,0,0.00002197,0.009765,0,0,0.00006845,0.00001188,0.000003193,0.000002937,0.000002426,0,1.277e-7,0.01476,0,0.0006526,0.03472,0.04717,0.000009195,0.000001022,1.277e-7,0,1.277e-7,0,0.01162,0.000007662,0,0,0,0.000002043,0,0.0001688,0.0002188,0.00005772,0,0,0,0,0,0,0.0000106,0,0.000005364,3.831e-7,0,2.554e-7,6.385e-7,0,0,0.000002426,0.0009863,0,1.277e-7,0.000007279,0.000001405,0.000003831,5.108e-7,0.000001277,0,0,0.008061,0,0.00008365,0.009892,0.01457,0.000002682,2.554e-7,0,0,0,0,0.003473,0.000002171,0,0,0,3.831e-7,0,0.00001584,0.00004508,0.00001698,0,0,0,0,0,0,0.000004087,0,0.000001022,2.554e-7,0,1.277e-7,2.554e-7,0,0,5.108e-7,0.000271,0,0,0.000001405,1.277e-7,0.000008556,0,1.277e-7,0,0,0.003031,0,0.004782,0.574,0.6043,0.00009233,0.00002018,3.831e-7,0,0.00000166,0,0.1733,0.0003896,0,1.277e-7,0,0.00001264,2.554e-7,0.01359,0.004979,0.0005203,1.277e-7,0,2.554e-7,0,0,0,0.0001411,0,0.0001595,0.000007662,0,0.000003831,0.000003193,0,0,0.00002529,0.01129,0,1.277e-7,0.0000779,0.00001341,0.00001852,0.000003448,0.000004214,0,1.277e-7,0.02894,0,0.7491,14120,2711,0.9944,0.4893,0.3045,2.941,2.941,29360,18560,0,0,0,0,0,0,0,0,0,7.238,0,0,0,0,0,1,73.65,1,33.34,1,1,39.21,1,1,1,0.01238,0.0009603,0.1522,0.5206,0.00009233,0.0002052,0.000001022,0.4036,0.02148,0,0,0.03087,0.1019,0,1212000000,6.014,1,0.005031,0.5039,0.5288,0.00007611,0.00001762,3.831e-7,0,0.000001532,0,0.1492,0.0003735,0,1.277e-7,0,0.000008428,2.554e-7,0.01347,0.004653,0.000426,1.277e-7,0,2.554e-7,0,0,0,0.0001165,0,0.0001502,0.000007024,0,0.000003448,0.000002554,0,0,0.00002209,0.009311,0,0,0.00006449,0.00001047,0.000001532,0.000003193,0.000002554,0,1.277e-7,0.01663,0.3646,1,1,0.4315,0.05951,0.1266,0.2837,0.01152,0.08712,67.09,0.6397,0.2832,0.09329,0.2491,0.008622,0.3632,0.00000332,0.002571,873.5,743.5,887.6,891.2,0.003241],"trainingOutputVectorTargetNbUpdates":7830627,"standarizeInputs":true,"outputDimension":2,"bias":[-4.065,-5.623],"inputDimension":567,"beforeDeviation":[0.1209,0.3891,0.4234,0.008561,0.002114,0.0003574,0,0.0007991,0,0.244,0.01462,0,0,0,0.003995,0.0003574,0.06688,0.06665,0.01893,0,0,0.0003574,0,0,0,0.009615,0,0.008599,0.002602,0,0.001822,0.00245,0,0,0.003115,0.0645,0,0.001072,0.007147,0.002745,0.002745,0.002316,0.002022,0,0,0.1531,0,0.08394,0.3278,0.3615,0.006352,0.001072,0,0,0.0003574,0,0.2048,0.01148,0,0,0,0.002903,0,0.04954,0.05352,0.01626,0,0,0.0003574,0,0,0,0.007664,0,0.006352,0.002084,0,0.001638,0.001751,0,0,0.002174,0.05312,0,0.0007147,0.006064,0.00199,0.00226,0.001558,0.001714,0,0,0.1367,0,0.06245,0.2819,0.3119,0.004913,0.0007147,0,0,0,0,0.1765,0.009187,0,0,0,0.002626,0,0.04015,0.04575,0.01473,0,0,0.0003574,0,0,0,0.006372,0,0.004939,0.001787,0,0.001238,0.001598,0,0,0.001924,0.04512,0,0.0008753,0.005684,0.001787,0.00299,0.001558,0.001676,0,0,0.123,0,0.2675,2.204,2.652,0.0242,0.00339,0.0003574,0,0.0008753,0,1.229,0.04014,0,0,0,0.03688,0.0003574,0.2887,0.3085,0.1164,0,0,0.000619,0,0,0,0.03464,0,0.03378,0.008258,0,0.02041,0.006383,0,0,0.007297,0.3398,0,0.001857,0.0425,0.01512,0.01186,0.006022,0.006618,0,0,1.18,0,3.206,788300000,527100000,2.817,1092000000,633300000,0.4953,0.4898,0.4837,24.37,24.37,359900000,477900000,0,1.793,1.165,2.565,4.896,0.3118,0.1722,0.005937,52.03,23.2,0,0,88.87,135.4,0,0,0,0,0,0,0,0,0,0,28.92,21.37,0,0,0,0,0,0,0,0,0,0,2.322e-15,1.707e-17,127.6,60.38,3.59e-14,8.268e-18,18.95,4.34,3.398e-14,1.027e-17,4.288e-15,6.688e-18,13.74,2.701,1.211e-15,6.306e-19,8.931e-16,0,1.128e-15,0,39910000000,0.06321,0.4995,0.499,0.008891,0.004303,0.0005054,0,0.001238,0,0.3623,0.01945,0,0.0003574,0,0.003156,0.0005054,0.115,0.06834,0.02085,0.0003574,0,0.0005054,0,0,0,0.01105,0,0.01236,0.002577,0,0.001822,0.001473,0,0,0.004687,0.09834,0,0,0.008273,0.003446,0.001787,0.001714,0.001558,0,0.0003574,0.1206,0,0.02554,0.1831,0.212,0.003032,0.001011,0.0003574,0,0.0003574,0,0.1072,0.002768,0,0,0,0.001429,0,0.01299,0.01479,0.007597,0,0,0,0,0,0,0.003256,0,0.002316,0.000619,0,0.0005054,0.0007991,0,0,0.001558,0.03139,0,0.0003574,0.002698,0.001185,0.001957,0.0007147,0.00113,0,0,0.08942,0,0.009145,0.09897,0.1198,0.001638,0.0005054,0,0,0,0,0.05883,0.001473,0,0,0,0.000619,0,0.003979,0.006714,0.004121,0,0,0,0,0,0,0.002022,0,0.001011,0.0005054,0,0.0003574,0.0005054,0,0,0.0007147,0.01646,0,0,0.001185,0.0003574,0.002925,0,0.0003574,0,0,0.05497,0,0.07019,0.6255,0.6841,0.01107,0.005079,0.000619,0,0.001384,0,0.4433,0.02042,0,0.0003574,0,0.004273,0.0005054,0.1175,0.07481,0.0262,0.0003574,0,0.0005054,0,0,0,0.01448,0,0.01326,0.003115,0,0.002316,0.002053,0,0,0.005605,0.1248,0,0.0003574,0.009721,0.003832,0.006138,0.00199,0.002791,0,0.0003574,0.2648,0,0.7221,106100,33430,0.07475,0.4999,0.4602,3.99,3.99,96520,70010,0,0,0,0,0,0,0,0,0,16.41,0,0,0,0,0,2.405e-15,147.6,5.502e-14,23.83,1.507e-14,8.97e-16,14.41,4.68e-16,1.172e-16,5.804e-16,0.1615,0.03877,0.6337,1.093,0.009648,0.01468,0.001011,6.21,1.039,0,0,3.399,9.705,0,3807000000,44.14,4.883e-14,0.07075,0.5,0.4992,0.008724,0.004198,0.000619,0,0.001238,0,0.3563,0.01932,0,0.0003574,0,0.002903,0.0005054,0.1153,0.06805,0.02064,0.0003574,0,0.0005054,0,0,0,0.01079,0,0.01225,0.00265,0,0.001857,0.001598,0,0,0.0047,0.09604,0,0,0.00803,0.003236,0.001238,0.001787,0.001598,0,0.0003574,0.1279,0.4813,4.883e-14,4.883e-14,0.4953,0.2366,0.3325,0.4508,0.1067,0.282,40.74,0.4801,0.4506,0.2908,0.4325,0.09246,0.4809,0.001822,0.05064,632.7,174.4,672,183,0.05684],"weights":[[0.03448,0.02122,0.01901,0.0513,-0.02587,-0.09762,0.07649,-0.01347,-0.09741,-0.0004284,-0.01447,0.01205,0.08277,0.09487,-0.08611,0.05429,-0.03494,0.00002755,0.01232,0.06628,0.03858,0.0309,-0.02615,0.05879,0.0356,-0.06452,-0.006964,-0.05455,-0.01787,0.01433,-0.05079,-0.05919,-0.03662,0.04766,-0.01108,0.07052,-0.03249,-0.07728,-0.06756,0.08898,-0.01647,-0.006057,-0.0009964,0.07649,-0.06728,-0.01563,0.0058,-0.06856,-0.004612,-0.03766,0.08026,0.06591,-0.01595,0.06927,0.08223,0.06915,0.05664,-0.03647,-0.05511,0.01307,-0.003147,-0.02558,0.08981,-0.00618,-0.06276,-0.003497,0.07386,-0.02897,0.0445,0.03066,-0.0616,0.08591,-0.08725,0.07627,0.0717,0.0277,0.03193,0.02846,-0.07395,0.04139,0.08128,0.04557,0.03694,-0.02386,-0.04715,-0.0368,-0.04416,0.04543,0.02538,0.1075,-0.003394,0.01319,-0.02769,0.06487,0.09069,-0.01071,-0.01454,-0.04323,0.07089,0.08697,-0.04681,0.04789,0.005926,0.009584,0.09536,-0.06064,-0.02861,-0.07313,0.1031,0.07938,-0.0009036,0.04732,0.01705,0.05664,0.0642,-0.0516,0.06502,0.09253,0.1024,-0.03699,0.06999,-0.03148,0.02186,0.03843,0.09435,-0.0312,0.08044,-0.0782,0.01937,-0.006863,-0.01122,-0.0004704,-0.003866,0.01077,0.09038,0.02268,0.07506,0.0947,0.02239,0.01734,-0.08121,0.03978,-0.026,0.0235,-0.03341,-0.02463,0.01031,0.07849,-0.06862,-0.01673,0.0392,-0.1271,-0.08936,-0.04687,-0.06988,-0.01303,0.03032,-0.04857,-0.008449,-0.02173,0.08152,-0.07446,-0.09824,-0.07845,0.06634,0.06214,0.02028,-0.05379,-0.01734,0.02181,0.03095,-0.08694,-0.01852,0.05315,-0.06926,0.01441,-0.02492,-0.06722,-0.05091,-0.04362,-0.02809,-0.05602,-0.08102,-0.05093,-0.06902,0.0928,0.02423,0.01743,-0.09597,0.02865,0.009965,-0.03591,0.1223,0.03448,-0.05807,0.1032,0.1345,-0.1194,-0.1788,-0.1504,0.006861,0.06511,-0.0161,0.05926,-0.07965,0.1715,0.04536,-0.03428,0.03608,0.2567,0.4122,-0.03056,-0.09277,0.1142,0.182,0.07171,-0.01566,0.02362,0.02934,0.05107,-0.07693,0.05768,0.06687,0.08213,0.02819,0.1701,-0.06343,0.01948,-0.01679,0.0716,0.05014,-0.0473,0.06669,0.0834,0.03433,-0.02324,-0.04712,0.07652,0.02324,-0.06055,-0.06348,0.399,-0.1659,-0.3931,-0.1809,-0.285,0.03798,0.0332,0.5115,-0.02143,0.1259,-0.02943,-0.03748,-0.07821,0.02435,-0.1091,0.002476,0.04236,-0.04484,-0.08593,-0.09227,0.01045,0.0549,0.06917,0.07797,-0.05979,0.007009,0.1277,-0.0466,-0.06812,-0.07818,-0.03713,0.06535,0.07009,-0.1138,-0.1937,-0.04046,0.009762,-0.06011,0.07033,0.02169,0.07799,0.09853,-0.05773,-0.05821,-0.06758,-0.001704,-0.04866,-0.06522,-0.05215,0.0542,-0.06098,0.005069,0.0735,0.03556,-0.0003012,-0.06551,0.04431,-0.0669,-0.03261,0.08233,-0.007503,-0.1028,0.1407,-0.08141,0.01871,0.04604,0.0002656,-0.001012,-0.01153,-0.0684,0.01563,-0.06568,-0.02658,0.004429,0.03744,0.03914,-0.06419,0.04825,-0.000788,0.09889,0.09785,0.07709,0.06069,-0.005571,0.03625,0.06163,0.06443,0.08095,-0.06841,-0.01707,0.02791,-0.003264,0.03937,0.03848,0.05115,0.09445,0.01987,-0.00005348,-0.06309,-0.0133,0.07556,-0.05582,0.09029,0.08661,-0.005238,0.05232,-0.1045,-0.06147,0.04602,0.05965,-0.04195,0.03442,0.0304,0.009256,-0.08326,0.08623,-0.08539,-0.08908,-0.09189,0.06319,-0.03795,0.06948,-0.06775,0.09739,-0.0123,-0.07174,0.01533,-0.07011,0.01912,0.124,-0.08128,0.06153,0.09941,0.08137,-0.01764,-0.06359,-0.03882,0.06931,0.08279,0.03645,0.04999,0.0447,0.03582,0.04663,0.0503,0.08112,-0.01286,-0.03132,-0.02299,-0.03542,-0.01162,0.08801,-0.09861,0.05715,0.05116,0.05144,0.01288,0.08356,-0.03035,-0.06336,0.1333,-0.06011,0.04958,-0.0011,0.07851,0.02879,-0.08439,0.005195,-0.03827,-0.07765,0.08447,-0.08418,0.08814,0.08444,0.008745,-0.07346,-0.08905,0.01698,0.08705,0.03073,0.06913,-0.1007,-0.07168,-0.06858,-0.06244,-0.03734,0.002334,-0.07382,-0.07092,0.04952,-0.09935,-0.03124,0.05798,-0.04797,-0.08401,0.03069,0.02622,-0.0648,0.0004542,0.03538,0.03391,0.05606,0.1,0.002846,0.07451,-0.1026,-0.02369,-0.006736,0.0912,0.7152,0.09376,0.04752,-0.06436,0.03657,-0.04826,0.07819,-0.05741,0.02814,-0.08173,0.1,-0.07797,-0.06592,0.08,0.1003,0.07593,-0.03934,0.05163,0.05441,-0.07388,0.09186,0.05957,-0.03186,-0.0159,-0.3563,0.3079,0.1108,0.1339,0.1201,-0.07889,-0.06387,0.06588,-0.06549,0.001221,-0.05884,0.06396,-0.03143,0.06821,0.09574,0.06213,0.08141,0.05833,-0.02805,0.05076,0.08361,0.02003,-0.2475,-0.169,-0.00684,0.08462,-0.03547,-0.004689,-0.08011,-0.006991,0.04971,0.06681,0.09523,-0.02833,0.01011,-0.02812,-0.06646,-0.09647,-0.04292,0.0451,-0.2027,-0.06365,-0.08227,0.05707,0.0008389,-0.0197,0.0735,0.09127,0.07926,0.1002,0.03856,0.07191,-0.02354,-0.04675,-0.06544,0.07385,-0.04267,0.01674,0.0159,-0.008718,0.09907,0.06262,-0.1011,-0.001207,0.02453,0.08129,-0.05011,-0.04022,-0.002046,-0.004305,-0.1121,-0.2175,-0.1157,-0.03305,-0.03695,-0.03536,0.163,-0.06981,0.01808,0.00981,-0.1981,0.08676,-0.02744,-0.008097,-0.03378,-0.0001968,-0.05389,-0.0849,0.1578,-0.06597,0.1008,-0.06473,0.1221],[0.1009,0.02778,0.006525,0.02593,-0.02761,0.03356,0.01967,-0.06727,-0.09162,-0.01036,0.02121,0.06127,-0.09896,0.04761,-0.0558,0.02589,-0.003407,0.004932,-0.04697,-0.07295,-0.102,-0.01203,-0.01364,0.06623,0.05128,-0.04921,0.06517,-0.02324,-0.06474,-0.04901,0.03896,-0.02682,0.05011,-0.05062,0.06776,0.09477,0.02327,-0.06102,-0.00479,0.002738,0.05363,-0.04359,0.01929,-0.04539,-0.03709,-0.007047,0.05743,0.02063,-0.05903,-0.01544,0.07707,-0.07194,-0.09977,0.01631,0.03541,-0.03666,0.01355,-0.03534,-0.02108,-0.04155,0.08162,0.1168,-0.09477,0.04327,0.02722,0.02515,-0.03325,-0.02392,-0.08119,0.03748,-0.09093,0.001148,0.02655,0.08145,0.1131,-0.08009,-0.08035,0.05599,-0.05057,-0.04732,0.1017,-0.07175,-0.002249,-0.07499,-0.03269,0.03677,0.1018,-0.0207,0.08591,0.05003,-0.0003728,0.08082,-0.02551,-0.07654,0.1084,-0.03088,0.02959,-0.03822,0.1009,-0.01385,-0.04104,0.02517,0.08124,-0.04354,0.00845,0.06388,-0.02619,-0.08918,0.08401,-0.02508,0.03463,0.09961,0.008384,-0.05364,-0.06008,0.08152,-0.002791,-0.09394,-0.006251,-0.07827,-0.05328,-0.02884,-0.08281,0.07135,-0.00925,0.008443,-0.05847,0.09852,0.07053,-0.0007522,0.07622,0.01837,0.03244,0.107,0.006457,0.05038,-0.03699,-0.05054,-0.01588,0.01953,0.008546,0.05531,0.008872,0.06758,0.01868,0.04707,0.02652,-0.03924,0.01823,0.07501,0.02029,-0.05706,0.04338,-0.05447,0.06603,-0.05516,0.02366,-0.07789,0.05229,0.03491,-0.07887,0.09992,0.07679,0.06743,0.05326,-0.05251,-0.01411,-0.07487,-0.05235,-0.04518,0.08729,-0.0762,-0.03542,-0.06512,0.08199,0.02751,-0.01971,-0.09275,0.04391,-0.05576,-0.09332,-0.01803,-0.05322,0.03683,-0.03483,0.03912,0.08028,-0.01541,-0.1193,0.07097,0.06268,-0.0568,0.06027,0.08294,-0.1508,0.1274,0.1575,-0.04458,0.01474,-0.07313,0.1425,-0.06167,0.065,-0.3654,0.0765,0.1802,0.2874,-0.111,0.001419,0.04488,0.4213,-0.06559,-0.01658,0.1527,0.377,-0.07634,-0.06517,0.03231,0.08873,0.06642,0.04352,-0.0912,-0.005754,0.05633,-0.04454,0.09753,-0.05271,-0.006135,-0.09634,-0.01522,0.08809,0.09008,0.01019,-0.04873,-0.05244,0.05573,-0.06039,0.04085,-0.001492,0.009824,0.008425,0.2783,-0.1291,-0.7731,-0.002584,-0.1776,0.04916,-0.2175,0.1585,-0.02718,0.1042,0.05176,0.1022,0.006151,0.02579,0.02497,-0.07707,0.05751,0.03349,0.008786,-0.02536,0.07754,0.02593,0.001916,0.02872,0.03003,-0.04732,0.05244,-0.03304,-0.04317,-0.004911,-0.08569,-0.0123,0.1044,-0.0602,-0.02074,0.03525,-0.08282,0.0446,0.0496,-0.04336,-0.002798,0.0885,0.00003136,-0.0798,0.003735,-0.07161,0.02708,-0.01202,-0.06743,0.05881,0.07721,-0.04063,0.08154,0.03132,0.06253,-0.02058,0.08421,0.0062,-0.05528,-0.08422,0.09003,-0.03264,0.05828,-0.0009099,0.1033,-0.08001,-0.06873,-0.005855,-0.001868,0.06561,-0.03095,0.04046,-0.1024,0.05238,0.08195,-0.09695,-0.06763,0.03952,0.0597,0.03828,0.1186,0.113,0.09423,-0.05964,0.05792,-0.04494,-0.03166,0.02744,-0.05567,0.07054,-0.08236,0.01695,0.0378,-0.03023,0.002824,0.06859,0.02946,0.002049,-0.06498,0.08272,0.04478,-0.08993,0.0299,-0.02999,0.05047,-0.03128,0.007686,0.05254,0.08926,0.07922,0.05935,0.0001215,0.04045,0.02916,-0.01526,0.001801,0.01018,0.02712,-0.05308,0.02505,0.01345,-0.03809,0.03988,0.02165,0.01645,0.06046,-0.03103,-0.002194,0.1155,0.08198,-0.03859,-0.01509,-0.01772,-0.06445,0.004121,0.06524,-0.02206,0.01914,-0.02231,-0.0387,-0.05374,0.01747,-0.0493,-0.02522,-0.05944,-0.08031,0.003075,-0.05915,-0.03953,-0.09657,-0.09942,-0.01617,0.0553,0.01482,-0.0616,-0.005025,0.1253,-0.05066,-0.06121,-0.03588,0.1277,0.07051,0.036,-0.04828,-0.03965,0.01686,-0.01981,-0.009522,0.09118,-0.006975,-0.08485,-0.07169,-0.04141,-0.03713,-0.01334,-0.07331,-0.1252,-0.07877,0.02428,-0.06976,0.05769,0.04556,-0.05451,-0.02152,-0.04498,0.00319,-0.004787,0.06336,0.09158,-0.07911,0.07052,-0.04061,0.01486,-0.03136,-0.0784,0.05161,-0.01109,0.08367,0.004442,0.05862,0.05903,-0.0848,0.01665,-0.009633,0.09137,-0.02313,-0.04957,0.04513,0.1047,0.06966,-0.07461,-0.2042,-0.07485,-0.117,-0.04428,0.06518,-0.07448,-0.03282,-0.02487,-0.08133,0.04138,0.0001312,-0.01471,-0.06466,-0.07063,-0.08312,0.06194,-0.03532,-0.0322,0.07002,0.05809,0.06081,-0.4227,-0.3007,0.3972,0.04526,0.1086,0.01015,-0.06499,0.005004,0.07832,0.05677,0.132,-0.8573,0.2155,-0.05394,0.02609,-0.0979,0.05666,0.006825,-0.01496,0.07692,0.06362,0.06935,0.01205,-0.1565,-0.3619,0.005021,0.4795,0.008749,-0.1029,-0.03912,-0.05742,0.01862,0.0997,0.0955,0.02609,0.0369,-0.001231,0.05179,-0.09664,0.1248,-0.08916,-0.144,-0.07904,-0.04175,0.09753,-0.07726,-0.0931,-0.02181,0.09457,-0.06052,0.03539,-0.01716,-0.02288,-0.03406,0.06475,0.03177,-0.02085,-0.06204,-0.063,-0.00525,0.001008,0.01974,0.05354,0.001019,0.01277,-0.09971,-0.06399,-0.0556,-0.01442,0.08653,-0.01834,-0.3445,-0.4343,-0.272,0.05489,-0.03073,0.07325,0.0568,0.01616,0.06495,-0.1018,-0.07371,0.2151,0.0196,-0.1081,0.0674,-0.02052,-0.062,-0.03528,-0.08829,-0.009461,-0.00117,-0.2311,0.1053]],"trainingOutputVectorTargetMean":[0.03986,0.01706]},"previousVisitsHistoryVectorDimension":257,"visitHistoryVectorDimension":238},"140538":{"probabilityLearner":{"beforeMean":[0.01877,0.1252,0.2014,0.00005631,0.000002077,1.026e-7,5.128e-7,9.744e-7,0,0.0454,0.00005233,0,0,0,0.00000859,2.564e-8,0.001109,0.0006022,0.0004862,0,0,2.564e-8,0,0,0,0.000133,0,0.00001292,0.000004846,0,0.00000218,0.00001664,0,0,0.000006641,0.003344,0,3.333e-7,0.00007615,0.00001551,0.00003487,0.000001974,0.000007462,0,0,0.0584,0,0.007175,0.08388,0.1341,0.00003056,0.000001205,0,1.282e-7,4.615e-7,0,0.03203,0.00004292,0,0,0,0.000004359,0,0.0005799,0.0003612,0.0003717,0,0,7.692e-8,0,0,0,0.00009277,0,0.000007513,0.000003256,0,0.000001462,0.00001085,0,0,0.000004359,0.00235,0,2.051e-7,0.00005933,0.00001126,0.00002054,0.000001513,0.000006256,2.564e-8,0,0.04758,0,0.003576,0.05999,0.09606,0.00001895,3.846e-7,1.026e-7,0,3.077e-7,0,0.02367,0.00003685,0,0,0,0.000002333,0,0.0003703,0.0002503,0.0003194,0,0,2.564e-8,0,0,0,0.00006844,0,0.000004205,0.000002026,0,0.000001154,0.00000841,0,0,0.000003026,0.001768,0,2.051e-7,0.00005026,0.000008846,0.00002138,0.000001128,0.000005154,2.564e-8,0,0.03964,0,0.03537,0.5214,0.8578,0.0001478,0.000004103,2.051e-7,6.41e-7,0.000002564,0,0.2129,0.0002874,0,0,0,0.00002541,2.564e-8,0.0034,0.002258,0.002716,0,0,1.795e-7,0,0,0,0.0006263,0,0.0000399,0.00001654,0,0.00001092,0.00008987,0,0,0.00002259,0.01764,0,8.462e-7,0.0003816,0.00007174,0.0001351,0.000009898,0.00004297,5.128e-8,0,0.4431,0,1.445,130400000,97430000,2.683,335900000,203900000,0.5459,0.5186,0.4961,16.16,15.14,73740000,157800000,0,0.2105,0.03096,0.3114,1.178,0.01058,0.000007692,5.962,0.8117,0,0,5.249,0,0,0,0,0,0,0,0,0,0,12.21,5.96,289.4,0,64,0,1017,0,3.6,0,37.5,0,1,2.171e-17,56.94,27.55,1,8.598e-19,30.97,1.341,1,6.038e-18,1,2.001e-19,39.23,0.2012,1,2.967e-21,1,5.865e-21,1,3.997e-20,518000000,0.005112,0.2082,0.3154,0.00006703,0.000004769,2.821e-7,1.538e-7,0.000001667,0,0.06654,0.00004403,0,2.564e-8,0,0.00001685,2.564e-8,0.0009029,0.0003645,0.0007012,7.692e-8,0,3.333e-7,0,0,0,0.0001562,0,0.00001018,0.000006615,0,0.000002718,0.00001385,0,2.564e-8,0.000009667,0.004647,0,1.795e-7,0.0001046,0.0000208,0.00002005,0.000002051,0.000008846,2.564e-8,5.128e-8,0.06906,0,0.0004861,0.06415,0.08816,0.00001221,0.000001256,5.128e-8,0,5.385e-7,0,0.02319,0.000006385,0,0,0,0.000003256,0,0.0003151,0.0001339,0.00006203,2.564e-8,0,0,0,0,0,0.00004608,0,0.000003205,0.000002667,0,5.898e-7,0.000005564,0,0,0.000003077,0.001663,0,2.564e-8,0.000006821,0.000004615,0.000007692,5.898e-7,0.000003949,0,0,0.04203,0,0.0001353,0.01626,0.0215,0.000002513,2.564e-7,2.564e-8,0,5.128e-8,0,0.006211,5.641e-7,0,0,0,1.026e-7,0,0.00009808,0.0000218,0.0000121,2.564e-8,0,0,0,0,0,0.00001246,0,9.231e-7,8.205e-7,0,1.026e-7,0.000001846,0,0,6.41e-7,0.0004036,0,0,7.436e-7,5.898e-7,0.00000341,3.077e-7,0.000001128,0,0,0.008872,0,0.005748,0.2901,0.4273,0.00008228,0.000006333,3.59e-7,1.538e-7,0.000002256,0,0.09637,0.00005113,0,2.564e-8,0,0.00002021,2.564e-8,0.001345,0.0005227,0.0007783,1.282e-7,0,3.333e-7,0,0,0,0.0002153,0,0.00001482,0.0000101,0,0.000003436,0.00002162,0,2.564e-8,0.00001341,0.006751,0,2.051e-7,0.0001123,0.00002615,0.0000318,0.000002949,0.00001441,2.564e-8,5.128e-8,0.1201,0,0.5994,21000,2734,0.9999,0.9975,0.9501,3.914,3.589,78460,56740,0,0,0,0,0,0,0,0,0,5.241,301.1,57,1013,5.14,40,1,57.98,1,23.67,1,1,38.91,1,1,1,0.01571,0.0001189,0.03646,0.3995,0.00001921,0,0.3514,0.003253,0,0,0.01044,0,1203000000,37.17,1,0.006262,0.2069,0.3063,0.00006341,0.000004718,2.821e-7,1.026e-7,0.000001462,0,0.06564,0.00002941,0,2.564e-8,0,0.00001469,2.564e-8,0.000912,0.0003535,0.0006468,7.692e-8,0,3.333e-7,0,0,0,0.0001481,0,0.000009821,0.000005769,0,0.000002667,0.000008692,0,0,0.000008692,0.004054,0,5.128e-8,0.000103,0.00001444,0.00001703,0.000001821,0.000007949,0,5.128e-8,0.06633,0.5918,1,1,0.4006,0.06555,0.1206,0.3023,0.008086,0.1028,70.7,0.7001,0.2442,0.05852,0.2871,0.008597,0.4002,0.00002487,0.001308,806.6,742.1,818.1,883.4,0.001505],"trainingOutputVectorTargetNbUpdates":38999538,"standarizeInputs":true,"outputDimension":1,"bias":[-7.237],"inputDimension":563,"beforeDeviation":[0.1357,0.3309,0.4011,0.007504,0.001441,0.0003203,0.0007161,0.0009871,0,0.2082,0.007234,0,0,0,0.002931,0.0001601,0.03329,0.02453,0.02204,0,0,0.0001601,0,0,0,0.01153,0,0.003595,0.002201,0,0.001476,0.004079,0,0,0.002577,0.05773,0,0.0005774,0.008726,0.003939,0.005905,0.001405,0.002732,0,0,0.2345,0,0.0844,0.2772,0.3408,0.005528,0.001098,0,0.0003581,0.0006794,0,0.1761,0.006551,0,0,0,0.002088,0,0.02407,0.019,0.01928,0,0,0.0002774,0,0,0,0.009631,0,0.002741,0.001805,0,0.001209,0.003293,0,0,0.002088,0.04842,0,0.0004529,0.007703,0.003355,0.004532,0.00123,0.002501,0.0001601,0,0.2129,0,0.05969,0.2375,0.2947,0.004353,0.0006202,0.0003203,0,0.0005547,0,0.152,0.00607,0,0,0,0.001528,0,0.01924,0.01582,0.01787,0,0,0.0001601,0,0,0,0.008272,0,0.002051,0.001423,0,0.001074,0.0029,0,0,0.001739,0.04201,0,0.0004529,0.007089,0.002974,0.004624,0.001062,0.00227,0.0001601,0,0.1951,0,0.4095,1.916,2.883,0.02513,0.003021,0.0004529,0.0008006,0.002219,0,1.164,0.04617,0,0,0,0.01172,0.0001601,0.1456,0.09198,0.1533,0,0,0.0008321,0,0,0,0.06406,0,0.01364,0.008176,0,0.01062,0.02032,0,0,0.009838,0.4469,0,0.001098,0.05387,0.02368,0.022,0.009441,0.01953,0.0003203,0,2.539,0,4.006,639200000,429600000,3.627,971800000,577100000,0.4979,0.4997,0.5,30.5,26.84,316400000,421300000,0,1.324,0.5801,1.969,4.181,0.1751,0.002918,41.68,13.14,0,0,121.1,0,0,0,0,0,0,0,0,0,0,55.74,15.03,6.86,0,8,0,1,0,1.03,0,37.5,0,2.477e-15,1.641e-17,113.8,54.98,3.9e-14,5.561e-18,19.92,3.984,5.353e-14,1.335e-17,1.529e-14,2.662e-18,13.93,1.607,2.47e-15,3.395e-19,2.386e-15,4.773e-19,4.286e-15,1.21e-18,29140000000,0.07132,0.406,0.4647,0.008187,0.002184,0.0005311,0.0003922,0.001291,0,0.2492,0.006635,0,0.0001601,0,0.004104,0.0001601,0.03003,0.01909,0.02647,0.0002774,0,0.0005774,0,0,0,0.0125,0,0.003191,0.002572,0,0.001649,0.003721,0,0.0001601,0.003109,0.06801,0,0.0004237,0.01023,0.00456,0.004478,0.001432,0.002974,0.0001601,0.0002265,0.2536,0,0.02204,0.245,0.2835,0.003494,0.001121,0.0002265,0,0.0007338,0,0.1505,0.002527,0,0,0,0.001805,0,0.01775,0.01157,0.007875,0.0001601,0,0,0,0,0,0.006788,0,0.00179,0.001633,0,0.000768,0.002359,0,0,0.001754,0.04074,0,0.0001601,0.002612,0.002148,0.002774,0.000768,0.001987,0,0,0.2007,0,0.01163,0.1265,0.145,0.001585,0.0005064,0.0001601,0,0.0002265,0,0.07856,0.0007511,0,0,0,0.0003203,0,0.009903,0.004668,0.003479,0.0001601,0,0,0,0,0,0.00353,0,0.0009608,0.0009058,0,0.0003203,0.001359,0,0,0.0008006,0.02009,0,0,0.0008623,0.000768,0.001847,0.0005547,0.001062,0,0,0.09377,0,0.07635,0.6189,0.7157,0.01087,0.003117,0.0006405,0.0003922,0.001826,0,0.3893,0.00813,0,0.0001601,0,0.005159,0.0001601,0.04997,0.02949,0.03069,0.0005311,0,0.0005774,0,0,0,0.01816,0,0.005306,0.004267,0,0.002242,0.005512,0,0.0001601,0.004577,0.1047,0,0.0005064,0.01131,0.006189,0.006884,0.002281,0.005397,0.0001601,0.0002265,0.4704,0,0.8184,109000,31500,0.007387,0.05041,0.2177,1.756,0.9903,153400,126800,0,0,0,0,0,0,0,0,0,37.7,0,0,0,0,0,2.267e-15,130.5,3.365e-14,18.69,5.316e-14,9.529e-16,14.99,5.04e-17,3.714e-17,4.824e-17,0.1309,0.01093,0.2079,0.8079,0.004532,0,3.83,0.3594,0,0,3.135,0,3692000000,233.2,0.002486,0.07889,0.4051,0.461,0.007963,0.002172,0.0005311,0.0003203,0.001209,0,0.2476,0.005423,0,0.0001601,0,0.003833,0.0001601,0.03019,0.0188,0.02542,0.0002774,0,0.0005774,0,0,0,0.01217,0,0.003134,0.002402,0,0.001633,0.002948,0,0,0.002948,0.06354,0,0.0002265,0.01015,0.003799,0.004126,0.001349,0.002819,0,0.0002265,0.2489,0.4915,1.927e-13,1.927e-13,0.49,0.2475,0.3257,0.4593,0.08956,0.3037,47.3,0.4582,0.4296,0.2347,0.4524,0.09232,0.4899,0.004987,0.03614,615.1,216.1,659.7,169.2,0.03877],"weights":[[0.05345,-0.0205,0.004744,0.03919,0.08164,-0.00493,-0.01526,-0.043,-0.01665,-0.04057,-0.0122,-0.06445,-0.01066,0.07288,-0.03991,-0.09949,0.09022,0.03394,0.02701,0.05068,0.05835,0.01236,-0.09881,-0.02718,0.09155,-0.0346,0.05571,-0.03681,0.02047,-0.008958,0.07686,-0.06746,0.05513,0.04947,0.1176,0.09827,0.02861,0.0374,-0.02158,-0.02611,0.07431,0.07174,0.05826,-0.02515,0.02823,0.1536,-0.03092,0.04386,-0.04177,-0.06719,0.06847,0.01404,0.05725,0.05334,-0.0555,-0.06796,0.01515,0.09853,0.07921,0.02138,0.07767,-0.05591,0.02374,0.03789,-0.0009856,0.03216,0.02838,-0.05316,0.01174,-0.01515,-0.0215,0.06055,0.02462,0.07881,0.0374,0.08807,0.06348,0.00722,-0.004073,-0.0498,-0.02582,-0.0198,0.03776,0.06334,0.01509,0.07347,0.08603,0.01775,-0.04603,0.01937,0.02349,-0.06819,0.04884,-0.08954,0.1211,-0.03077,-0.02405,0.05595,-0.02193,-0.06179,0.1004,0.03328,-0.06412,0.02455,-0.005459,-0.0128,-0.05921,-0.000304,-0.05335,-0.0689,0.06824,0.08833,0.05334,-0.09598,-0.09172,-0.09348,-0.038,0.01958,0.00532,0.0223,0.002914,-0.02381,0.02063,-0.008803,0.02557,0.0216,0.08454,0.07656,0.02511,0.1016,0.08099,-0.03604,-0.01505,0.09497,-0.0345,-0.05427,0.1138,0.02228,-0.07385,0.08337,0.009404,-0.06383,-0.03754,0.06666,-0.06703,0.03253,0.07626,-0.03886,-0.02394,-0.02882,0.02453,-0.02348,-0.08906,0.06707,0.07143,0.06532,-0.0195,-0.0569,0.06201,0.1166,-0.07723,0.02894,0.09959,0.07629,0.07481,0.03631,-0.01118,0.06427,0.07406,0.08184,-0.07729,-0.09525,-0.0898,0.05869,0.08959,0.03435,-0.02942,0.08003,-0.03445,0.05383,0.00492,0.07953,-0.006365,-0.009808,0.1032,-0.02862,0.2902,-0.0147,-0.002368,0.1429,0.1014,0.02614,0.06265,0.06952,-0.1087,0.07653,0.1198,0.07903,-0.2113,-0.1144,0.08334,-0.07275,0.07323,0.1168,0.4525,-0.03284,-0.04798,0.137,0.145,0.1131,-0.02493,-0.008077,0.2731,0.0707,0.07581,0.05377,-0.09156,-0.07368,-0.03119,0.01021,-0.009107,0.04035,-0.08076,0.2821,-0.03059,0.03785,0.0904,-0.00246,-0.03421,0.07082,0.06979,0.08887,0.03193,0.06362,-0.02237,0.06676,0.01117,-0.04217,-0.03793,-0.06311,-0.1499,-0.1525,-0.223,-0.7769,0.1032,-0.02795,0.6255,-0.02406,0.1981,-0.3149,-0.03454,-0.1138,-0.01276,0.03591,0.1831,0.09621,0.08223,0.1064,0.002185,0.02362,-0.004494,-0.07389,-0.09333,-0.06796,0.03053,-0.08109,0.07192,-0.09182,0.01785,0.02052,-0.009565,0.01637,-0.07531,-0.08018,-0.0244,0.07717,-0.09078,-0.007287,0.05219,-0.05443,0.06808,0.0916,0.06496,0.111,0.02755,-0.07002,-0.07472,-0.002824,0.03302,0.1011,0.1275,0.1166,0.005264,-0.05076,0.0426,-0.014,0.0578,-0.07194,-0.06889,-0.02313,0.06266,0.1808,-0.03451,0.02814,0.02982,-0.01397,-0.0417,-0.1013,0.09734,-0.03824,0.09178,-0.03971,0.02747,-0.07774,-0.09799,0.07934,0.07598,-0.03003,-0.006481,0.05312,-0.04,-0.04621,-0.08121,-0.09816,-0.0345,0.09216,-0.07622,-0.0008388,0.02753,-0.09951,0.01096,-0.01721,-0.002226,0.02276,0.03163,0.01319,-0.007544,-0.05956,0.07651,0.06607,-0.0631,-0.09111,-0.02004,-0.03956,0.04143,0.02092,0.02702,-0.05986,0.1602,0.05222,0.1424,0.06148,-0.0406,-0.07329,0.06818,-0.03136,0.09644,0.02885,-0.06333,-0.01314,0.06803,0.01558,0.03428,0.07261,0.05134,0.00171,0.009804,-0.07482,-0.04177,0.04958,-0.02918,0.0751,-0.01305,-0.1015,-0.06406,-0.02019,-0.02816,-0.07382,-0.0528,-0.07362,-0.04696,-0.04294,0.08243,0.03108,-0.02137,0.009405,-0.09648,-0.1014,-0.07938,-0.04169,0.08376,0.03155,-0.07229,0.007999,-0.07795,0.1482,-0.08751,-0.001162,-0.06616,0.02719,-0.09693,0.008823,0.06324,-0.03352,-0.0495,-0.01355,0.06827,-0.03198,-0.06219,0.04738,0.05783,0.009397,0.01193,-0.1142,0.02133,0.09463,0.08951,-0.04584,-0.07778,0.09404,0.03993,0.06163,0.03913,-0.08198,-0.03085,0.08405,0.07958,-0.0162,-0.001767,-0.07468,0.01592,0.03083,0.0394,-0.08554,0.0896,-0.06343,0.03899,0.1982,0.003149,-0.03893,-0.0564,0.06809,0.05125,0.004046,-0.2366,0.1053,0.02909,0.05186,-0.07028,-0.307,-0.6172,-0.1661,-0.02348,-0.05406,0.01847,-0.04948,-0.07648,-0.04891,0.07426,0.01076,-0.08615,0.02204,-0.06458,0.6568,-0.03474,0.08723,0.03978,0.01037,0.0486,0.007869,0.04059,-0.2646,0.4019,-1.005,0.06118,0.1226,0.04547,-0.0806,0.0874,0.1453,-0.09644,0.7614,0.1232,-0.08932,0.06377,-0.0005383,-0.03769,-0.1011,-0.01895,0.02021,-0.07089,-0.01095,-0.9983,-0.07638,0.02887,-0.0195,-0.04228,-0.1235,0.02296,-0.006791,0.03027,0.05874,-0.08876,0.001725,-0.07937,0.06751,0.04963,-0.003304,0.0754,-0.04142,-0.02645,0.04801,0.05376,0.0414,-0.07791,-0.01059,0.05525,0.01814,-0.08531,-0.01109,0.01312,-0.007155,-0.07298,0.06126,0.03751,0.02495,0.08274,0.01829,-0.03633,-0.03124,-0.006967,0.01352,-0.0258,-0.06876,0.02809,-0.07755,-0.001294,0.05159,-0.08941,0.165,-0.3451,1.548,1.468,0.1388,0.02508,0.1343,-0.1794,0.1172,-0.06136,-0.3797,-0.3128,0.3103,0.2112,-0.1468,0.08461,-0.01723,-0.06391,0.1693,0.1332,-0.246,0.002799,0.05012,0.1604]],"trainingOutputVectorTargetMean":[0.01821]},"previousVisitsHistoryVectorDimension":255,"visitHistoryVectorDimension":236},"142550":{"probabilityLearner":{"beforeMean":[0.03637,0.108,0.1707,0.00006057,0.000002059,1.748e-7,5.051e-7,0.00000101,0,0.03914,0.00003803,0,0,0,0.000007848,0,0.001116,0.0008314,0.0003216,1.943e-8,0,3.885e-8,0,0,0,0.0001211,0,0.00001867,0.000004973,0,0.000002273,0.00001529,0,3.885e-8,0.00001059,0.00292,0,7.77e-7,0.00004211,0.00001391,0.00003545,0.000002428,0.000005653,1.943e-8,0,0.05612,0,0.01397,0.07063,0.1101,0.00003164,0.000001146,0,1.36e-7,4.274e-7,0,0.02683,0.00002741,0,0,0,0.000004196,0,0.0006118,0.0005174,0.0002387,0,0,7.77e-8,0,0,0,0.00008198,0,0.00001162,0.000003322,0,0.000001593,0.000009693,0,0,0.000007828,0.002002,0,4.274e-7,0.0000298,0.00001078,0.0000217,0.000001826,0.000004176,3.885e-8,0,0.04418,0,0.006627,0.04947,0.07664,0.00001875,4.662e-7,5.828e-8,0,3.302e-7,0,0.01944,0.00001978,0,0,0,0.000002312,0,0.000402,0.000369,0.000197,0,0,3.885e-8,0,0,0,0.00005921,0,0.000007556,0.000002001,0,0.00000101,0.000008431,0,0,0.00000676,0.00148,0,6.41e-7,0.00002415,0.000008955,0.00002073,0.000001632,0.000003341,1.943e-8,0,0.03588,0,0.06596,0.4196,0.6592,0.0001498,0.000004138,2.331e-7,6.41e-7,0.000002525,0,0.1696,0.0001537,0,0,0,0.00002257,0,0.003702,0.003202,0.001681,1.943e-8,0,2.137e-7,0,0,0,0.0005117,0,0.00006556,0.00001542,0,0.0000107,0.00007889,0,3.885e-8,0.0000582,0.01426,0,0.00000202,0.0001863,0.00007531,0.0001329,0.00001033,0.00002788,7.77e-8,1.943e-8,0.3757,0,1.196,112700000,81550000,3.435,318500000,205700000,0.6137,0.5794,0.5516,14.45,13.63,94630000,168300000,0,0.0252,0.6544,0,0,0,0,0,0,0,0,0,12.05,5.497,287.1,0,66.67,0,1017,0,3.943,0,50,0,1,2.082e-17,45.82,23.56,1,8.715e-19,30.21,1.225,1,4.201e-18,1,1.583e-19,39.16,0.1824,1,2.826e-21,1,3.705e-21,1,2.877e-20,525800000,0.007094,0.1547,0.2394,0.00007834,0.000004351,4.662e-7,1.748e-7,0.000001321,0,0.04907,0.00002327,0,1.943e-8,0,0.00000913,1.943e-8,0.001301,0.0005319,0.0004266,7.77e-8,0,1.554e-7,0,0,0,0.0001306,0,0.00001694,0.000006372,0,0.000002117,0.00001389,0,1.943e-8,0.00001426,0.003883,0,1.943e-7,0.00005202,0.00001661,0.00004687,0.000002001,0.000005439,1.943e-8,5.828e-8,0.05873,0,0.0005067,0.04214,0.05986,0.00001107,8.741e-7,5.828e-8,0,3.108e-7,0,0.015,0.000004371,0,0,0,0.000001709,0,0.0002665,0.00009551,0.00006978,1.943e-8,0,0,0,0,0,0.00003749,0,0.000003419,0.000001787,0,4.662e-7,0.000005148,0,0,0.000002428,0.001163,0,1.943e-8,0.000006061,0.000003438,0.000008916,3.108e-7,0.000002584,1.943e-8,0,0.02511,0,0.00007566,0.01301,0.01831,0.000002817,2.331e-7,0,0,5.828e-8,0,0.004894,9.907e-7,0,0,0,3.885e-7,0,0.00005157,0.00001894,0.00001587,0,0,0,0,0,0,0.00001228,0,7.187e-7,4.662e-7,0,1.554e-7,0.000001593,0,0,5.051e-7,0.0003794,0,0,8.353e-7,6.022e-7,0.000004176,1.554e-7,5.439e-7,0,0,0.007776,0,0.007739,0.2184,0.3319,0.00009342,0.000005556,5.245e-7,1.748e-7,0.00000169,0,0.07242,0.00002933,0,1.943e-8,0,0.00001133,1.943e-8,0.00165,0.0006544,0.0005178,9.713e-8,0,1.554e-7,0,0,0,0.0001885,0,0.00002148,0.000008741,0,0.000002914,0.00002141,0,1.943e-8,0.00001729,0.005726,0,2.137e-7,0.00005919,0.00002088,0.00006111,0.000002584,0.000008858,3.885e-8,5.828e-8,0.09527,0,0.4745,17210,2057,0.9981,0.6987,0.4869,3.863,3.537,81620,23700,0,0,0,0,0,0,0,0,0,6.633,0,0,0,0,0,1,45.08,1,32.72,1,1,37.7,1,1,1,0.0007322,0.02008,1026000000,69.81,0.9991,0.008802,0.1533,0.2296,0.00007319,0.000003982,4.468e-7,9.713e-8,0.000001049,0,0.04811,0.00001286,0,1.943e-8,0,0.000007576,1.943e-8,0.001298,0.0005119,0.0003879,7.77e-8,0,1.554e-7,0,0,0,0.0001227,0,0.00001636,0.000005517,0,0.000002117,0.000009324,0,0,0.00001294,0.003318,0,7.77e-8,0.0000507,0.00001206,0.00004025,0.000001845,0.00000472,0,3.885e-8,0.05617,0.679,1,1,0.4424,0.05577,0.1081,0.2408,0.008876,0.144,72.02,0.715,0.2258,0.05224,0.2274,0.008861,0.4773,0.00002347,0.00841,767.5,721.9,785.4,874.1,0.001613],"trainingOutputVectorTargetNbUpdates":51478930,"standarizeInputs":true,"outputDimension":1,"bias":[-8.391],"inputDimension":543,"beforeDeviation":[0.1872,0.3104,0.3763,0.007782,0.001435,0.0004181,0.0007107,0.001005,0,0.1939,0.006167,0,0,0,0.002801,0,0.03339,0.02882,0.01793,0.0001394,0,0.0001971,0,0,0,0.011,0,0.004321,0.00223,0,0.001508,0.00391,0,0.0001971,0.003254,0.05396,0,0.0008815,0.006489,0.003729,0.005954,0.001558,0.002378,0.0001394,0,0.2301,0,0.1174,0.2562,0.3131,0.005625,0.001071,0,0.0003688,0.0006537,0,0.1616,0.005235,0,0,0,0.002048,0,0.02473,0.02274,0.01545,0,0,0.0002788,0,0,0,0.009054,0,0.003408,0.001823,0,0.001262,0.003113,0,0,0.002798,0.0447,0,0.0006537,0.005459,0.003283,0.004658,0.001351,0.002044,0.0001971,0,0.2055,0,0.08114,0.2169,0.266,0.00433,0.0006828,0.0002414,0,0.0005747,0,0.1381,0.004447,0,0,0,0.00152,0,0.02004,0.01921,0.01403,0,0,0.0001971,0,0,0,0.007694,0,0.002749,0.001415,0,0.001005,0.002904,0,0,0.0026,0.03844,0,0.0008006,0.004914,0.002992,0.004553,0.001277,0.001828,0.0001394,0,0.186,0,0.5899,1.658,2.382,0.02411,0.003088,0.0004828,0.0008006,0.002177,0,1.008,0.0269,0,0,0,0.01035,0,0.1659,0.1228,0.1198,0.0001394,0,0.000776,0,0,0,0.05619,0,0.02028,0.006972,0,0.009605,0.01864,0,0.0001971,0.02137,0.3944,0,0.00188,0.03643,0.02462,0.02287,0.008821,0.0161,0.0003942,0.0001394,2.224,0,3.47,599100000,397500000,4.018,924500000,568700000,0.4869,0.4937,0.4973,26.01,22.99,364300000,437300000,0,0.4758,10.86,0,0,0,0,0,0,0,0,0,69.49,16.32,6.468,0,7.542,0,0.9428,0,0.9711,0,35.36,0,3.762e-15,1.66e-17,102.4,51.78,4.225e-14,5.568e-18,19.65,3.824,5.332e-14,1.155e-17,2.129e-14,2.37e-18,13.99,1.53,2.618e-15,3.313e-19,2.352e-15,3.794e-19,4.609e-15,1.028e-18,29360000000,0.08393,0.3616,0.4267,0.008851,0.002086,0.0006828,0.0004181,0.001149,0,0.216,0.004824,0,0.0001394,0,0.003022,0.0001394,0.03605,0.02306,0.02065,0.0002788,0,0.0003942,0,0,0,0.01143,0,0.004116,0.002524,0,0.001455,0.003727,0,0.0001394,0.003776,0.06219,0,0.0004407,0.007212,0.004075,0.006846,0.001415,0.002332,0.0001394,0.0002414,0.2351,0,0.0225,0.2009,0.2372,0.003328,0.000935,0.0002414,0,0.0005575,0,0.1215,0.002091,0,0,0,0.001307,0,0.01632,0.009773,0.008353,0.0001394,0,0,0,0,0,0.006123,0,0.001849,0.001337,0,0.0006828,0.002269,0,0,0.001558,0.03408,0,0.0001394,0.002462,0.001854,0.002986,0.0005575,0.001607,0.0001394,0,0.1565,0,0.008698,0.1133,0.1341,0.001678,0.0004828,0,0,0.0002414,0,0.06979,0.0009953,0,0,0,0.0006233,0,0.007181,0.004352,0.003984,0,0,0,0,0,0,0.003504,0,0.0008478,0.0006828,0,0.0003942,0.001262,0,0,0.0007107,0.01948,0,0,0.0009139,0.000776,0.002044,0.0003942,0.0007375,0,0,0.08784,0,0.2547,0.5928,0.7451,0.0115,0.002917,0.0007506,0.0004181,0.001546,0,0.369,0.006785,0,0.0001394,0,0.004042,0.0001394,0.05082,0.03097,0.02661,0.0003688,0,0.0003942,0,0,0,0.01852,0,0.0059,0.003802,0,0.002307,0.005627,0,0.0001394,0.004856,0.1049,0,0.0005025,0.008629,0.005577,0.008907,0.002146,0.004139,0.0002788,0.0002414,0.4342,0,0.8905,102000,24780,0.04407,0.4588,0.4998,4.123,3.163,215700,71720,0,0,0,0,0,0,0,0,0,32.83,0,0,0,0,0,3.574e-15,117.7,3.964e-14,21.4,6.497e-14,2.543e-15,12.99,9.744e-16,5.499e-16,8.514e-16,0.02846,0.9837,3410000000,317.3,0.03073,0.0934,0.3603,0.4206,0.008555,0.001996,0.0006684,0.0003117,0.001024,0,0.214,0.003586,0,0.0001394,0,0.002752,0.0001394,0.036,0.02262,0.01969,0.0002788,0,0.0003942,0,0,0,0.01107,0,0.004044,0.002349,0,0.001455,0.003054,0,0,0.003597,0.0575,0,0.0002788,0.00712,0.003473,0.006344,0.001358,0.002173,0,0.0001971,0.2303,0.4669,1.807e-13,1.807e-13,0.4967,0.2295,0.3105,0.4276,0.09379,0.3511,45.81,0.4514,0.4181,0.2225,0.4192,0.09372,0.4995,0.004844,0.09132,605.9,225,645.1,169.2,0.04013],"weights":[[0.01094,-0.01042,-0.002126,-0.005512,0.01886,0.007694,0.03877,0.07741,0.07569,-0.04884,0.02694,0.05625,0.04585,0.09797,0.005744,0.03903,0.1028,0.05628,0.01318,-0.001193,-0.08916,-0.002285,0.02173,0.02905,-0.1008,-0.06019,-0.07394,0.04162,0.01641,0.05413,-0.06212,-0.09108,-0.08585,0.01526,0.1342,0.1097,-0.1047,0.06452,0.03986,0.03712,0.04298,0.02338,-0.04495,-0.02409,-0.06642,0.2042,-0.06912,0.05251,-0.03807,-0.06713,-0.0135,0.03654,-0.01669,-0.05518,0.03106,0.04423,0.03539,-0.02172,-0.04541,0.00656,0.04053,0.0202,-0.004361,0.06418,0.001534,0.02202,0.07736,0.09605,-0.0607,0.03397,0.01179,0.08163,0.00474,-0.01542,-0.01412,-0.002017,0.01672,0.02602,-0.04143,-0.03415,0.03979,-0.01073,0.03525,0.03607,-0.0166,-0.01783,0.0133,-0.00007917,-0.06384,0.04626,-0.03312,0.04712,0.06474,-0.04951,0.1175,-0.04979,-0.03631,0.09684,0.005007,-0.0479,0.08904,-0.06671,0.06016,0.05608,0.04252,-0.09062,0.04334,0.04352,0.1019,-0.1047,0.08666,0.1042,0.0323,-0.1009,0.04387,-0.01408,-0.02424,0.01481,-0.03802,0.04361,-0.05169,0.09759,-0.04145,0.03719,0.05815,-0.08493,-0.05973,-0.00146,-0.005514,0.09211,-0.03323,-0.1016,0.06904,0.03227,0.08902,-0.02292,0.02013,-0.004417,0.06184,0.08917,-0.02089,-0.04818,-0.01461,0.07229,-0.02978,-0.06663,-0.05185,-0.01557,-0.02045,0.0177,0.004328,0.01065,0.02268,0.05417,-0.09549,-0.05088,0.04942,-0.02765,0.1124,0.1297,-0.006612,0.09871,0.1004,0.04085,0.00376,0.005557,0.02476,0.09268,0.009097,0.08011,-0.002631,-0.007903,-0.06976,0.0235,-0.009854,-0.03631,-0.04681,0.05294,0.0643,0.03019,0.03921,0.0854,0.0422,0.003073,0.02672,-0.04549,0.2671,0.05981,-0.003665,0.1919,0.1076,0.01967,0.03535,0.04553,-0.001856,0.1351,0.1914,0.2,-0.2479,-0.171,0.1304,-0.0007461,0.2438,0.2166,-0.04252,-0.02629,-0.08081,0.02668,0.07486,0.05208,0.00008294,0.03594,0.04565,0.2042,-0.03368,-0.03819,-0.02603,0.07332,0.001909,0.01526,0.03394,-0.07765,0.02153,-0.02336,-0.06373,0.03798,-0.03928,-0.08025,-0.08799,0.0789,0.01808,0.03083,-0.03783,-0.8359,0.1375,0.01782,0.8386,0.03575,0.198,-0.3626,0.06832,-0.216,0.07277,-0.1011,0.08261,0.193,0.07014,0.05666,0.02768,-0.07016,0.02716,0.06729,-0.035,0.03845,0.0854,-0.1077,0.1144,-0.05034,0.1053,-0.02448,0.06887,0.03051,-0.01516,-0.04041,0.04543,0.04611,-0.02576,0.08484,0.09765,0.07714,-0.08357,0.1201,-0.08667,0.01918,0.04623,-0.02198,0.04688,-0.03411,-0.04204,-0.01387,0.1035,0.1338,0.05619,0.09635,0.02795,0.08156,0.02898,0.003963,-0.01327,0.006684,-0.0235,0.05321,0.1045,0.04027,-0.05662,-0.03248,-0.002273,0.0534,-0.08558,0.09057,-0.04227,0.1021,0.03003,0.007154,-0.06851,0.08396,-0.02255,-0.05916,0.06704,0.0003797,0.02191,0.06418,-0.0955,0.06848,0.0808,0.002447,0.1048,-0.01831,0.02222,-0.005342,0.02839,-0.07924,0.08167,-0.06108,0.02941,0.08523,-0.02559,0.07116,0.0574,0.04671,0.02953,-0.01503,0.08845,-0.03674,0.07258,0.007531,-0.003723,-0.05981,0.05608,0.01882,0.05662,0.09084,0.02139,0.04283,0.08922,-0.03894,0.03731,0.03063,0.06346,0.0361,0.06217,0.07685,-0.1011,0.04035,-0.0627,0.03718,0.09011,0.03475,0.06882,0.06689,-0.01566,-0.09705,0.07076,-0.01764,-0.04586,-0.04462,0.06561,-0.06139,0.05564,0.07763,0.04406,-0.04819,0.02908,0.04975,-0.09303,-0.01119,0.007881,-0.0416,0.06231,0.071,0.1088,-0.0025,0.1009,-0.0828,0.0102,0.1932,-0.01622,-0.2122,-0.004227,0.02743,-0.1022,-0.08392,0.009321,0.08219,-0.07994,0.1015,0.1031,-0.06528,-0.08562,-0.06088,0.08888,0.02493,0.09185,-0.04927,-0.03599,0.04924,-0.03107,-0.09083,-0.03196,-0.01125,0.1041,0.06696,0.08689,0.03248,0.06192,0.01191,-0.07431,0.002187,0.06625,0.1021,-0.05204,-0.03008,-0.04534,0.01087,0.006905,-0.08321,-0.05074,0.1909,-0.0657,0.09146,0.03588,-0.08637,0.1779,-0.02577,-0.3305,0.1107,0.03933,-0.02375,0.2458,0.2827,-0.3167,0.07663,-0.06783,-0.09598,-0.05316,0.07002,-0.01378,-0.06606,0.1008,-0.008886,-0.08173,-0.07942,0.01447,0.7769,-0.01686,-0.004636,0.04656,0.03825,-0.008601,0.02625,0.5099,-0.08768,-0.06856,-1.879,0.03915,0.2411,0.06378,0.0837,-0.1323,-0.1663,0.1662,-0.3787,-1.395,0.358,0.1268,-0.05051,-0.005357,-0.03136,0.03971,0.03936,-0.09777,-0.03293,0.01182,-0.01673,-0.07152,0.05795,0.1039,-0.06811,0.02994,-0.08926,-0.02845,0.05254,0.03841,-0.0664,-0.1001,0.1062,-0.0452,-0.05241,-0.05269,-0.06722,0.04376,0.01185,0.06417,-0.02216,-0.005905,-0.01035,0.06911,0.002109,0.0824,0.05953,0.02113,-0.06831,-0.0539,-0.02557,-0.02232,-0.06312,-0.02849,0.01264,0.05355,0.112,-0.2906,1.877,1.968,0.2092,0.03906,0.1547,-0.08792,0.1299,-0.1167,-0.4469,-0.261,0.2115,0.1056,-0.1024,0.1089,0.0809,-0.06675,0.2963,-0.01507,-0.124,-0.04794,-0.01672,0.1847]],"trainingOutputVectorTargetMean":[0.01411]},"previousVisitsHistoryVectorDimension":245,"visitHistoryVectorDimension":226}},"visitHistoryVectorDimension":238},"MentalistFeatures":{"keyWords":[],"code":"oqnjxlyp5e","languages":[],"inputGoalIds":[200372,200517,200535,200536,220009,223344,223345],"keyPages":[],"experiments":{},"customData":[4,5,6,7,8,9,10,11,12,13],"browsers":[0,1,2,3,4],"oss":[0,1,2,3,4,5],"numberValuesByCustomDatum":{"4":-2,"5":0,"6":-2,"7":0,"8":-2,"9":-2,"10":0,"11":-2,"12":-2,"13":-2},"maxNumberPreviousVisits":10,"referrers":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,46,47],"maxAbsoluteValueAfterStandardization":5,"outputGoalIds":[200517,220009],"interests":[],"targetingSegments":{"140536":{"inputGoalIds":[200372,200517,200535,200536,220009,223344,223345],"outputGoalIds":[200517,220009]},"140537":{"inputGoalIds":[200372,200517,200535,200536,220009,223344,223345],"outputGoalIds":[200517,220009]},"140538":{"inputGoalIds":[200372,200517,200535,200536,223344,223345],"outputGoalIds":[200517]},"142550":{"inputGoalIds":[200517],"outputGoalIds":[200517]}},"timeZoneGroups":[]}}};
})();if (window.kameleoonLightIframe){if (window.kameleoonExternalIFrameLoadedData) { window.kameleoonQueue = window.kameleoonQueue || [];window.kameleoonQueue.push({level: 'IMMEDIATE',command: function () {Kameleoon.Utils.runProtectedScript(window.kameleoonExternalIFrameLoadedData);}}); Kameleoon.Analyst.load();}}else{Kameleoon.Analyst.load();}}rel="nofollow"
  data-controller="collection-button"
  data-action="collection-button#open analytics-event#send"
  data-bookmark-button-target="bookmarkButton"
  data-item-id="11498469"
  data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;Item&quot;,&quot;eventLabel&quot;:&quot;collection;click&quot;,&quot;eventValue&quot;:11498469}"
>
  <span class="shared-item_cards-collection_button_component__icon">
    <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#collection'></use>
</svg>

  </span>
</a>

          <span class="shared-item_cards-list-image_card_component__buttonSeparator"></span>
          <form method="post"
      action="/my/favorites/11498469"
      data-controller="favorite-button"
      data-action="submit->favorite-button#submit favoritesStoreUpdated@window->favorite-button#updateFromStore">
  <input type="hidden" name="_method" value="post" data-favorite-button-target="formMethod">
  <button type="submit"
          aria-label="Add to Favorites"
          class="shared-item_cards-favorite_button_component__favoriteButton"
          data-favorite-button-target="favoriteButton"
          data-favorited="false"
          data-item-id="11498469">
    <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#heart'></use>
</svg>

  </button>
</form>

        </div>
        <div class="shared-item_cards-price_component__root">
    $42
</div>

        <div class="shared-item_cards-list-image_card_component__ratingWrapper"><div class="shared-stars_rating_component__root">
  <div
    class="shared-stars_rating_component__starRating"
    role="img"
    aria-label="Rated 4.85 out of 5, 384 reviews"
  >
    <span class="shared-stars_rating_component__star">
      <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#stars_5.0'></use>
</svg>

    </span>
  </div>
  <span aria-hidden="true" class="shared-stars_rating_component__starRatingCount">(384)</span>
</div>
</div>
        <div class="shared-item_cards-sales_component__root">
  15.4K Sales
</div>

        <div class="shared-item_cards-list-image_card_component__lastUpdated shared-item_cards-list-image_card_component__tinyText">
          Last updated: 16 Jan 24
        </div>
      </div>
      <div class="shared-item_cards-list-image_card_component__coverWrapper">
            <a
  class="shared-item_cards-add_to_cart_button_component__root shared-item_cards-add_to_cart_button_component__compact"
  role="button"
  title="Add to cart"
  aria-label="Add to cart"
  href="/cart/configure_before_adding/11498469"
  rel="nofollow"
  data-controller="cart-button modal-commander"
  data-action="click->modal-commander#open cartStoreUpdated@window->cart-button#updateFromStore analytics-event#send"
  data-modal-commander-url-value="/my/cart_entries?item_id=11498469"
  data-modal-commander-method-value="POST"
  data-cart-button-item-id-value="11498469"
  data-cart-button-in-cart-class="shared-item_cards-add_to_cart_button_component__inCart"
  data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;realmag777&quot;,&quot;category&quot;:&quot;codecanyon.net/wordpress/ecommerce/woocommerce&quot;,&quot;id&quot;:11498469,&quot;list&quot;:&quot;Search Results: Category&quot;,&quot;name&quot;:&quot;HUSKY - WooCommerce Products Filter Professional [WOOF Filter]&quot;,&quot;position&quot;:12}],[&quot;ec:setAction&quot;,&quot;add&quot;],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Add to cart: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;cart button&quot;,&quot;eventValue&quot;:11498469}]]"
>
    <span class="shared-item_cards-add_to_cart_button_component__cartIcon">
      <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#cart'></use>
</svg>

    </span>
</a>

          <a href="https://codecanyon.net/item/woof-woocommerce-products-filter/full_screen_preview/11498469"
   class="shared-item_cards-preview_button_with_analytics_component__root"
   target="_blank"
   rel="noopener"
   data-action="analytics-event#send"
   data-analytics-event="{&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click;button&quot;,&quot;eventLabel&quot;:&quot;Preview;11498469&quot;,&quot;hitType&quot;:&quot;event&quot;}">
  Live Preview
</a>

      </div>
    </div>
  </div>
</div>

</div>

    <div class="shared-item_cards-card_component__root">
  <div class="shared-item_cards-list-image_card_component__root"
     data-analytics-item-impressions-target="item"
     data-favorites-loader-target="item"
     data-item-id="5529125"
     data-impression-position="13"
     data-impression-name="Out-of-the-Box | Dropbox plugin for WordPress"
     data-impression-list="Search Results: Category"
     data-impression-brand="_DeLeeuw_"
     data-impression-category="codecanyon.net/wordpress/utilities"
>
  <div class="shared-item_cards-list-image_card_component__contentWrapper shared-item_cards-list-image_card_component__landscapeImage">
    <a class="shared-item_cards-list-image_card_component__itemLinkOverlay"
       href="https://codecanyon.net/item/outofthebox-dropbox-plugin-for-wordpress-/5529125"
       title="Out-of-the-Box | Dropbox plugin for WordPress"
       aria-label="View Out-of-the-Box | Dropbox plugin for WordPress"
       data-turbo="false"
       data-action="analytics-event#send"
       data-analytics-event="[[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;whitespace&quot;,&quot;eventValue&quot;:5529125}]]"></a>
    <div class="shared-item_cards-list-image_card_component__imageWrapper">
      <div class="shared-item_cards-preview_image_component__carousel shared-item_cards-preview_image_component__singleImage"
  style="padding-bottom: 50.847457627118644%"
>
  <a class="shared-item_cards-preview_image_component__imageLink" data-turbo="false" data-action="analytics-event#send" data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;_DeLeeuw_&quot;,&quot;category&quot;:&quot;codecanyon.net/wordpress/utilities&quot;,&quot;id&quot;:5529125,&quot;list&quot;:&quot;Search Results: Category&quot;,&quot;name&quot;:&quot;Out-of-the-Box | Dropbox plugin for WordPress&quot;,&quot;position&quot;:13}],[&quot;ec:setAction&quot;,&quot;click&quot;,{&quot;list&quot;:&quot;Search Results: Category&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Product click: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;image&quot;,&quot;eventValue&quot;:5529125}]]" href="https://codecanyon.net/item/outofthebox-dropbox-plugin-for-wordpress-/5529125">
      <img src="https://codecanyon.img.customer.envatousercontent.com/files/478734089/Out-of-the-Box-Header.png?auto=compress%2Cformat&amp;fit=crop&amp;crop=top&amp;w=590&amp;h=300&amp;s=8de0db8ab53497e8a1b0a1019919988f"
        loading="lazy"
        style="left: 0%"
        class="shared-item_cards-preview_image_component__image"
        alt="Out-of-the-Box | Dropbox plugin for WordPress"
        title="Out-of-the-Box | Dropbox plugin for WordPress"
        width="590"
        height="300"
        data-controller="image-preview"
        data-action="error->image-preview#setFallback"
        data-fallback="https://previews.customer.envatousercontent.com/files/478734089/Out-of-the-Box-Header.png"
        data-carousel-target="image"
      />
</a></div>

      <div class="shared-item_cards-list-image_card_component__gradient" style="padding-top: 50.847457627118644%;">
        <div class="shared-item_cards-list-image_card_component__buttons">
          <a
  href="/my/bookmarks/new?item_id=5529125"
  class="shared-item_cards-collection_button_component__collection"
  role="button"
  aria-label="Add to collection"
  title="Add to collection"
  rel="nofollow"
  data-controller="collection-button"
  data-action="collection-button#open analytics-event#send"
  data-bookmark-button-target="bookmarkButton"
  data-item-id="5529125"
  data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;Item&quot;,&quot;eventLabel&quot;:&quot;collection;click&quot;,&quot;eventValue&quot;:5529125}"
>
  <span class="shared-item_cards-collection_button_component__icon">
    <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#collection'></use>
</svg>

  </span>
</a>

          <span class="shared-item_cards-list-image_card_component__buttonSeparator"></span>
          <form method="post"
      action="/my/favorites/5529125"
      data-controller="favorite-button"
      data-action="submit->favorite-button#submit favoritesStoreUpdated@window->favorite-button#updateFromStore">
  <input type="hidden" name="_method" value="post" data-favorite-button-target="formMethod">
  <button type="submit"
          aria-label="Add to Favorites"
          class="shared-item_cards-favorite_button_component__favoriteButton"
          data-favorite-button-target="favoriteButton"
          data-favorited="false"
          data-item-id="5529125">
    <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#heart'></use>
</svg>

  </button>
</form>

        </div>
      </div>
    </div>
    <span class="shared-item_cards-sash_component__sash shared-item_cards-sash_component__sash_trending" style="width: 50px; height: 50px;">
  <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#sash_trending'></use>
</svg>

</span>

    <div class="shared-item_cards-list-image_card_component__detailsWrapper">
      <h3 class="shared-item_cards-item_name_component__root">
  <a class="shared-item_cards-item_name_component__itemNameLink" tabindex="0" data-turbo="false" data-action="analytics-event#send" data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;_DeLeeuw_&quot;,&quot;category&quot;:&quot;codecanyon.net/wordpress/utilities&quot;,&quot;id&quot;:5529125,&quot;list&quot;:&quot;Search Results: Category&quot;,&quot;name&quot;:&quot;Out-of-the-Box | Dropbox plugin for WordPress&quot;,&quot;position&quot;:13}],[&quot;ec:setAction&quot;,&quot;click&quot;,{&quot;list&quot;:&quot;Search Results: Category&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Product click: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;item title&quot;,&quot;eventValue&quot;:5529125}]]" href="https://codecanyon.net/item/outofthebox-dropbox-plugin-for-wordpress-/5529125">Out-of-the-Box | Dropbox plugin for WordPress</a>
</h3>

      <div>
        <div class="shared-item_cards-author_category_component__root">
  <i>by</i>
  <a
    href="https://codecanyon.net/user/_deleeuw_"
    class="shared-item_cards-author_category_component__link"
    rel="nofollow"
    data-turbo="false"
      data-action="analytics-event#send"
      data-analytics-event="[[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;author name&quot;,&quot;eventValue&quot;:5529125}]]"
  >
    _DeLeeuw_
  </a>
  in
  <a
    href="/category/wordpress/utilities"
    class="shared-item_cards-author_category_component__link"
      data-action="analytics-event#send"
      data-analytics-event="[[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;category&quot;,&quot;eventValue&quot;:5529125}]]"
    }
  >
    Utilities
  </a>
</div>

      </div>
      <div class="shared-item_cards-list-image_card_component__attrsWrapper">
          <ul>
    <li class="shared-item_cards-attributes_component__attribute">
      <span class="shared-item_cards-attributes_component__label">Software Version: </span>
      <span class="shared-item_cards-attributes_component__value">WordPress 5.6.x - 6.4.x</span>
    </li>
    <li class="shared-item_cards-attributes_component__attribute">
      <span class="shared-item_cards-attributes_component__label">Compatible With: </span>
      <span class="shared-item_cards-attributes_component__value">Beaver Builder, Block Editor, Contact Form 7, Elementor, Elementor Pro, Gravity Forms, Visual Composer, WooCommerce 6.x.x - 8.x.x, WPBakery Page Builder, WPForms, WPML</span>
    </li>
</ul>

          <div class="shared-item_cards-included_files_component__root">
  File Types Included:
  <ul>
      <li class="shared-item_cards-included_files_component__fileType">JavaScript JS</li>
      <li class="shared-item_cards-included_files_component__fileType">CSS</li>
      <li class="shared-item_cards-included_files_component__fileType">PHP</li>
  </ul>
</div>

      </div>
    </div>
    <div class="shared-item_cards-list-image_card_component__priceWrapper">
      <div class="shared-item_cards-list-image_card_component__info">
        <div class="shared-item_cards-list-image_card_component__favAndCollections">
          <a
  href="/my/bookmarks/new?item_id=5529125"
  class="shared-item_cards-collection_button_component__collection"
  role="button"
  aria-label="Add to collection"
  title="Add to collection"
  rel="nofollow"
  data-controller="collection-button"
  data-action="collection-button#open analytics-event#send"
  data-bookmark-button-target="bookmarkButton"
  data-item-id="5529125"
  data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;Item&quot;,&quot;eventLabel&quot;:&quot;collection;click&quot;,&quot;eventValue&quot;:5529125}"
>
  <span class="shared-item_cards-collection_button_component__icon">
    <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#collection'></use>
</svg>

  </span>
</a>

          <span class="shared-item_cards-list-image_card_component__buttonSeparator"></span>
          <form method="post"
      action="/my/favorites/5529125"
      data-controller="favorite-button"
      data-action="submit->favorite-button#submit favoritesStoreUpdated@window->favorite-button#updateFromStore">
  <input type="hidden" name="_method" value="post" data-favorite-button-target="formMethod">
  <button type="submit"
          aria-label="Add to Favorites"
          class="shared-item_cards-favorite_button_component__favoriteButton"
          data-favorite-button-target="favoriteButton"
          data-favorited="false"
          data-item-id="5529125">
    <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#heart'></use>
</svg>

  </button>
</form>

        </div>
        <div class="shared-item_cards-price_component__root">
    $39
</div>

        <div class="shared-item_cards-list-image_card_component__ratingWrapper"><div class="shared-stars_rating_component__root">
  <div
    class="shared-stars_rating_component__starRating"
    role="img"
    aria-label="Rated 4.87 out of 5, 219 reviews"
  >
    <span class="shared-stars_rating_component__star">
      <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#stars_5.0'></use>
</svg>

    </span>
  </div>
  <span aria-hidden="true" class="shared-stars_rating_component__starRatingCount">(219)</span>
</div>
</div>
        <div class="shared-item_cards-sales_component__root">
  7.3K Sales
</div>

        <div class="shared-item_cards-list-image_card_component__lastUpdated shared-item_cards-list-image_card_component__tinyText">
          Last updated: 10 Jan 24
        </div>
      </div>
      <div class="shared-item_cards-list-image_card_component__coverWrapper">
            <a
  class="shared-item_cards-add_to_cart_button_component__root shared-item_cards-add_to_cart_button_component__compact"
  role="button"
  title="Add to cart"
  aria-label="Add to cart"
  href="/cart/configure_before_adding/5529125"
  rel="nofollow"
  data-controller="cart-button modal-commander"
  data-action="click->modal-commander#open cartStoreUpdated@window->cart-button#updateFromStore analytics-event#send"
  data-modal-commander-url-value="/my/cart_entries?item_id=5529125"
  data-modal-commander-method-value="POST"
  data-cart-button-item-id-value="5529125"
  data-cart-button-in-cart-class="shared-item_cards-add_to_cart_button_component__inCart"
  data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;_DeLeeuw_&quot;,&quot;category&quot;:&quot;codecanyon.net/wordpress/utilities&quot;,&quot;id&quot;:5529125,&quot;list&quot;:&quot;Search Results: Category&quot;,&quot;name&quot;:&quot;Out-of-the-Box | Dropbox plugin for WordPress&quot;,&quot;position&quot;:13}],[&quot;ec:setAction&quot;,&quot;add&quot;],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Add to cart: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;cart button&quot;,&quot;eventValue&quot;:5529125}]]"
>
    <span class="shared-item_cards-add_to_cart_button_component__cartIcon">
      <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#cart'></use>
</svg>

    </span>
</a>

          <a href="https://codecanyon.net/item/outofthebox-dropbox-plugin-for-wordpress-/full_screen_preview/5529125"
   class="shared-item_cards-preview_button_with_analytics_component__root"
   target="_blank"
   rel="noopener"
   data-action="analytics-event#send"
   data-analytics-event="{&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click;button&quot;,&quot;eventLabel&quot;:&quot;Preview;5529125&quot;,&quot;hitType&quot;:&quot;event&quot;}">
  Live Preview
</a>

      </div>
    </div>
  </div>
</div>

</div>

    <div class="shared-item_cards-card_component__root">
  <div class="shared-item_cards-list-image_card_component__root"
     data-analytics-item-impressions-target="item"
     data-favorites-loader-target="item"
     data-item-id="14907462"
     data-impression-position="14"
     data-impression-name="Events Schedule - WordPress Events Calendar Plugin"
     data-impression-list="Search Results: Category"
     data-impression-brand="CurlyThemes"
     data-impression-category="codecanyon.net/wordpress/calendars"
>
  <div class="shared-item_cards-list-image_card_component__contentWrapper shared-item_cards-list-image_card_component__landscapeImage">
    <a class="shared-item_cards-list-image_card_component__itemLinkOverlay"
       href="https://codecanyon.net/item/events-schedule-wordpress-plugin/14907462"
       title="Events Schedule - WordPress Events Calendar Plugin"
       aria-label="View Events Schedule - WordPress Events Calendar Plugin"
       data-turbo="false"
       data-action="analytics-event#send"
       data-analytics-event="[[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;whitespace&quot;,&quot;eventValue&quot;:14907462}]]"></a>
    <div class="shared-item_cards-list-image_card_component__imageWrapper">
      <div class="shared-item_cards-preview_image_component__carousel shared-item_cards-preview_image_component__singleImage"
  style="padding-bottom: 50.847457627118644%"
>
  <a class="shared-item_cards-preview_image_component__imageLink" data-turbo="false" data-action="analytics-event#send" data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;CurlyThemes&quot;,&quot;category&quot;:&quot;codecanyon.net/wordpress/calendars&quot;,&quot;id&quot;:14907462,&quot;list&quot;:&quot;Search Results: Category&quot;,&quot;name&quot;:&quot;Events Schedule - WordPress Events Calendar Plugin&quot;,&quot;position&quot;:14}],[&quot;ec:setAction&quot;,&quot;click&quot;,{&quot;list&quot;:&quot;Search Results: Category&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Product click: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;image&quot;,&quot;eventValue&quot;:14907462}]]" href="https://codecanyon.net/item/events-schedule-wordpress-plugin/14907462">
      <img src="https://codecanyon.img.customer.envatousercontent.com/files/247101078/events-schedule.jpg?auto=compress%2Cformat&amp;fit=crop&amp;crop=top&amp;w=590&amp;h=300&amp;s=6960e3eb16ed9d768a2804e29e0c0410"
        loading="lazy"
        style="left: 0%"
        class="shared-item_cards-preview_image_component__image"
        alt="Events Schedule - WordPress Events Calendar Plugin"
        title="Events Schedule - WordPress Events Calendar Plugin"
        width="590"
        height="300"
        data-controller="image-preview"
        data-action="error->image-preview#setFallback"
        data-fallback="https://previews.customer.envatousercontent.com/files/247101078/events-schedule.jpg"
        data-carousel-target="image"
      />
</a></div>

      <div class="shared-item_cards-list-image_card_component__gradient" style="padding-top: 50.847457627118644%;">
        <div class="shared-item_cards-list-image_card_component__buttons">
          <a
  href="/my/bookmarks/new?item_id=14907462"
  class="shared-item_cards-collection_button_component__collection"
  role="button"
  aria-label="Add to collection"
  title="Add to collection"
  rel="nofollow"
  data-controller="collection-button"
  data-action="collection-button#open analytics-event#send"
  data-bookmark-button-target="bookmarkButton"
  data-item-id="14907462"
  data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;Item&quot;,&quot;eventLabel&quot;:&quot;collection;click&quot;,&quot;eventValue&quot;:14907462}"
>
  <span class="shared-item_cards-collection_button_component__icon">
    <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#collection'></use>
</svg>

  </span>
</a>

          <span class="shared-item_cards-list-image_card_component__buttonSeparator"></span>
          <form method="post"
      action="/my/favorites/14907462"
      data-controller="favorite-button"
      data-action="submit->favorite-button#submit favoritesStoreUpdated@window->favorite-button#updateFromStore">
  <input type="hidden" name="_method" value="post" data-favorite-button-target="formMethod">
  <button type="submit"
          aria-label="Add to Favorites"
          class="shared-item_cards-favorite_button_component__favoriteButton"
          data-favorite-button-target="favoriteButton"
          data-favorited="false"
          data-item-id="14907462">
    <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#heart'></use>
</svg>

  </button>
</form>

        </div>
      </div>
    </div>
    <span class="shared-item_cards-sash_component__sash shared-item_cards-sash_component__sash_trending" style="width: 50px; height: 50px;">
  <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#sash_trending'></use>
</svg>

</span>

    <div class="shared-item_cards-list-image_card_component__detailsWrapper">
      <h3 class="shared-item_cards-item_name_component__root">
  <a class="shared-item_cards-item_name_component__itemNameLink" tabindex="0" data-turbo="false" data-action="analytics-event#send" data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;CurlyThemes&quot;,&quot;category&quot;:&quot;codecanyon.net/wordpress/calendars&quot;,&quot;id&quot;:14907462,&quot;list&quot;:&quot;Search Results: Category&quot;,&quot;name&quot;:&quot;Events Schedule - WordPress Events Calendar Plugin&quot;,&quot;position&quot;:14}],[&quot;ec:setAction&quot;,&quot;click&quot;,{&quot;list&quot;:&quot;Search Results: Category&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Product click: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;item title&quot;,&quot;eventValue&quot;:14907462}]]" href="https://codecanyon.net/item/events-schedule-wordpress-plugin/14907462">Events Schedule - WordPress Events Calendar Plugin</a>
</h3>

      <div>
        <div class="shared-item_cards-author_category_component__root">
  <i>by</i>
  <a
    href="https://codecanyon.net/user/curlythemes"
    class="shared-item_cards-author_category_component__link"
    rel="nofollow"
    data-turbo="false"
      data-action="analytics-event#send"
      data-analytics-event="[[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;author name&quot;,&quot;eventValue&quot;:14907462}]]"
  >
    CurlyThemes
  </a>
  in
  <a
    href="/category/wordpress/calendars"
    class="shared-item_cards-author_category_component__link"
      data-action="analytics-event#send"
      data-analytics-event="[[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;category&quot;,&quot;eventValue&quot;:14907462}]]"
    }
  >
    Calendars
  </a>
</div>

      </div>
      <div class="shared-item_cards-list-image_card_component__attrsWrapper">
          <ul>
    <li class="shared-item_cards-attributes_component__attribute">
      <span class="shared-item_cards-attributes_component__label">Software Version: </span>
      <span class="shared-item_cards-attributes_component__value">WordPress 4.9.x - 6.0.x</span>
    </li>
    <li class="shared-item_cards-attributes_component__attribute">
      <span class="shared-item_cards-attributes_component__label">Compatible With: </span>
      <span class="shared-item_cards-attributes_component__value">Elementor, Elementor Pro, Visual Composer, WooCommerce 5.x.x - 6.x.x, WPBakery Page Builder, WPML</span>
    </li>
</ul>

          <div class="shared-item_cards-included_files_component__root">
  File Types Included:
  <ul>
      <li class="shared-item_cards-included_files_component__fileType">JavaScript JS</li>
      <li class="shared-item_cards-included_files_component__fileType">CSS</li>
      <li class="shared-item_cards-included_files_component__fileType">PHP</li>
  </ul>
</div>

      </div>
    </div>
    <div class="shared-item_cards-list-image_card_component__priceWrapper">
      <div class="shared-item_cards-list-image_card_component__info">
        <div class="shared-item_cards-list-image_card_component__favAndCollections">
          <a
  href="/my/bookmarks/new?item_id=14907462"
  class="shared-item_cards-collection_button_component__collection"
  role="button"
  aria-label="Add to collection"
  title="Add to collection"
  rel="nofollow"
  data-controller="collection-button"
  data-action="collection-button#open analytics-event#send"
  data-bookmark-button-target="bookmarkButton"
  data-item-id="14907462"
  data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;Item&quot;,&quot;eventLabel&quot;:&quot;collection;click&quot;,&quot;eventValue&quot;:14907462}"
>
  <span class="shared-item_cards-collection_button_component__icon">
    <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#collection'></use>
</svg>

  </span>
</a>

          <span class="shared-item_cards-list-image_card_component__buttonSeparator"></span>
          <form method="post"
      action="/my/favorites/14907462"
      data-controller="favorite-button"
      data-action="submit->favorite-button#submit favoritesStoreUpdated@window->favorite-button#updateFromStore">
  <input type="hidden" name="_method" value="post" data-favorite-button-target="formMethod">
  <button type="submit"
          aria-label="Add to Favorites"
          class="shared-item_cards-favorite_button_component__favoriteButton"
          data-favorite-button-target="favoriteButton"
          data-favorited="false"
          data-item-id="14907462">
    <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#heart'></use>
</svg>

  </button>
</form>

        </div>
        <div class="shared-item_cards-price_component__root">
    $39
</div>

        <div class="shared-item_cards-list-image_card_component__ratingWrapper"><div class="shared-stars_rating_component__root">
  <div
    class="shared-stars_rating_component__starRating"
    role="img"
    aria-label="Rated 4.44 out of 5, 156 reviews"
  >
    <span class="shared-stars_rating_component__star">
      <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#stars_4.5'></use>
</svg>

    </span>
  </div>
  <span aria-hidden="true" class="shared-stars_rating_component__starRatingCount">(156)</span>
</div>
</div>
        <div class="shared-item_cards-sales_component__root">
  8.9K Sales
</div>

        <div class="shared-item_cards-list-image_card_component__lastUpdated shared-item_cards-list-image_card_component__tinyText">
          Last updated: 20 Dec 23
        </div>
      </div>
      <div class="shared-item_cards-list-image_card_component__coverWrapper">
            <a
  class="shared-item_cards-add_to_cart_button_component__root shared-item_cards-add_to_cart_button_component__compact"
  role="button"
  title="Add to cart"
  aria-label="Add to cart"
  href="/cart/configure_before_adding/14907462"
  rel="nofollow"
  data-controller="cart-button modal-commander"
  data-action="click->modal-commander#open cartStoreUpdated@window->cart-button#updateFromStore analytics-event#send"
  data-modal-commander-url-value="/my/cart_entries?item_id=14907462"
  data-modal-commander-method-value="POST"
  data-cart-button-item-id-value="14907462"
  data-cart-button-in-cart-class="shared-item_cards-add_to_cart_button_component__inCart"
  data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;CurlyThemes&quot;,&quot;category&quot;:&quot;codecanyon.net/wordpress/calendars&quot;,&quot;id&quot;:14907462,&quot;list&quot;:&quot;Search Results: Category&quot;,&quot;name&quot;:&quot;Events Schedule - WordPress Events Calendar Plugin&quot;,&quot;position&quot;:14}],[&quot;ec:setAction&quot;,&quot;add&quot;],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Add to cart: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;cart button&quot;,&quot;eventValue&quot;:14907462}]]"
>
    <span class="shared-item_cards-add_to_cart_button_component__cartIcon">
      <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#cart'></use>
</svg>

    </span>
</a>

          <a href="https://codecanyon.net/item/events-schedule-wordpress-plugin/full_screen_preview/14907462"
   class="shared-item_cards-preview_button_with_analytics_component__root"
   target="_blank"
   rel="noopener"
   data-action="analytics-event#send"
   data-analytics-event="{&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click;button&quot;,&quot;eventLabel&quot;:&quot;Preview;14907462&quot;,&quot;hitType&quot;:&quot;event&quot;}">
  Live Preview
</a>

      </div>
    </div>
  </div>
</div>

</div>

    <div class="shared-item_cards-card_component__root">
  <div class="shared-item_cards-list-image_card_component__root"
     data-analytics-item-impressions-target="item"
     data-favorites-loader-target="item"
     data-item-id="7908619"
     data-impression-position="15"
     data-impression-name="Extra Product Options &amp; Add-Ons for WooCommerce"
     data-impression-list="Search Results: Category"
     data-impression-brand="ThemeComplete"
     data-impression-category="codecanyon.net/wordpress/ecommerce/woocommerce/products"
>
  <div class="shared-item_cards-list-image_card_component__contentWrapper shared-item_cards-list-image_card_component__landscapeImage">
    <a class="shared-item_cards-list-image_card_component__itemLinkOverlay"
       href="https://codecanyon.net/item/woocommerce-extra-product-options/7908619"
       title="Extra Product Options &amp; Add-Ons for WooCommerce"
       aria-label="View Extra Product Options &amp; Add-Ons for WooCommerce"
       data-turbo="false"
       data-action="analytics-event#send"
       data-analytics-event="[[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;whitespace&quot;,&quot;eventValue&quot;:7908619}]]"></a>
    <div class="shared-item_cards-list-image_card_component__imageWrapper">
      <div class="shared-item_cards-preview_image_component__carousel shared-item_cards-preview_image_component__singleImage"
  style="padding-bottom: 50.847457627118644%"
>
  <a class="shared-item_cards-preview_image_component__imageLink" data-turbo="false" data-action="analytics-event#send" data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;ThemeComplete&quot;,&quot;category&quot;:&quot;codecanyon.net/wordpress/ecommerce/woocommerce/products&quot;,&quot;id&quot;:7908619,&quot;list&quot;:&quot;Search Results: Category&quot;,&quot;name&quot;:&quot;Extra Product Options \u0026 Add-Ons for WooCommerce&quot;,&quot;position&quot;:15}],[&quot;ec:setAction&quot;,&quot;click&quot;,{&quot;list&quot;:&quot;Search Results: Category&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Product click: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;image&quot;,&quot;eventValue&quot;:7908619}]]" href="https://codecanyon.net/item/woocommerce-extra-product-options/7908619">
      <img src="https://codecanyon.img.customer.envatousercontent.com/files/479755044/590x300.jpg?auto=compress%2Cformat&amp;fit=crop&amp;crop=top&amp;w=590&amp;h=300&amp;s=36804d76d4bcd307b03201242bdb72d7"
        loading="lazy"
        style="left: 0%"
        class="shared-item_cards-preview_image_component__image"
        alt="Extra Product Options &amp; Add-Ons for WooCommerce"
        title="Extra Product Options &amp; Add-Ons for WooCommerce"
        width="590"
        height="300"
        data-controller="image-preview"
        data-action="error->image-preview#setFallback"
        data-fallback="https://previews.customer.envatousercontent.com/files/479755044/590x300.jpg"
        data-carousel-target="image"
      />
</a></div>

      <div class="shared-item_cards-list-image_card_component__gradient" style="padding-top: 50.847457627118644%;">
        <div class="shared-item_cards-list-image_card_component__buttons">
          <a
  href="/my/bookmarks/new?item_id=7908619"
  class="shared-item_cards-collection_button_component__collection"
  role="button"
  aria-label="Add to collection"
  title="Add to collection"
  rel="nofollow"
  data-controller="collection-button"
  data-action="collection-button#open analytics-event#send"
  data-bookmark-button-target="bookmarkButton"
  data-item-id="7908619"
  data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;Item&quot;,&quot;eventLabel&quot;:&quot;collection;click&quot;,&quot;eventValue&quot;:7908619}"
>
  <span class="shared-item_cards-collection_button_component__icon">
    <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#collection'></use>
</svg>

  </span>
</a>

          <span class="shared-item_cards-list-image_card_component__buttonSeparator"></span>
          <form method="post"
      action="/my/favorites/7908619"
      data-controller="favorite-button"
      data-action="submit->favorite-button#submit favoritesStoreUpdated@window->favorite-button#updateFromStore">
  <input type="hidden" name="_method" value="post" data-favorite-button-target="formMethod">
  <button type="submit"
          aria-label="Add to Favorites"
          class="shared-item_cards-favorite_button_component__favoriteButton"
          data-favorite-button-target="favoriteButton"
          data-favorited="false"
          data-item-id="7908619">
    <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#heart'></use>
</svg>

  </button>
</form>

        </div>
      </div>
    </div>
    <span class="shared-item_cards-sash_component__sash shared-item_cards-sash_component__sash_trending" style="width: 50px; height: 50px;">
  <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#sash_trending'></use>
</svg>

</span>

    <div class="shared-item_cards-list-image_card_component__detailsWrapper">
      <h3 class="shared-item_cards-item_name_component__root">
  <a class="shared-item_cards-item_name_component__itemNameLink" tabindex="0" data-turbo="false" data-action="analytics-event#send" data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;ThemeComplete&quot;,&quot;category&quot;:&quot;codecanyon.net/wordpress/ecommerce/woocommerce/products&quot;,&quot;id&quot;:7908619,&quot;list&quot;:&quot;Search Results: Category&quot;,&quot;name&quot;:&quot;Extra Product Options \u0026 Add-Ons for WooCommerce&quot;,&quot;position&quot;:15}],[&quot;ec:setAction&quot;,&quot;click&quot;,{&quot;list&quot;:&quot;Search Results: Category&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Product click: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;item title&quot;,&quot;eventValue&quot;:7908619}]]" href="https://codecanyon.net/item/woocommerce-extra-product-options/7908619">Extra Product Options &amp; Add-Ons for WooCommerce</a>
</h3>

      <div>
        <div class="shared-item_cards-author_category_component__root">
  <i>by</i>
  <a
    href="https://codecanyon.net/user/themecomplete"
    class="shared-item_cards-author_category_component__link"
    rel="nofollow"
    data-turbo="false"
      data-action="analytics-event#send"
      data-analytics-event="[[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;author name&quot;,&quot;eventValue&quot;:7908619}]]"
  >
    ThemeComplete
  </a>
  in
  <a
    href="/category/wordpress/ecommerce/woocommerce/products"
    class="shared-item_cards-author_category_component__link"
      data-action="analytics-event#send"
      data-analytics-event="[[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;category&quot;,&quot;eventValue&quot;:7908619}]]"
    }
  >
    Products
  </a>
</div>

      </div>
      <div class="shared-item_cards-list-image_card_component__attrsWrapper">
          <ul>
    <li class="shared-item_cards-attributes_component__attribute">
      <span class="shared-item_cards-attributes_component__label">Software Version: </span>
      <span class="shared-item_cards-attributes_component__value">WordPress 5.1.x - 6.4.x</span>
    </li>
    <li class="shared-item_cards-attributes_component__attribute">
      <span class="shared-item_cards-attributes_component__label">Compatible With: </span>
      <span class="shared-item_cards-attributes_component__value">Elementor, Elementor Pro, WooCommerce 5.x.x - 8.x.x, WPML, Cornerstone</span>
    </li>
</ul>

          <div class="shared-item_cards-included_files_component__root">
  File Types Included:
  <ul>
      <li class="shared-item_cards-included_files_component__fileType">JavaScript JS</li>
      <li class="shared-item_cards-included_files_component__fileType">HTML</li>
      <li class="shared-item_cards-included_files_component__fileType">CSS</li>
      <li class="shared-item_cards-included_files_component__fileType">PHP</li>
  </ul>
</div>

      </div>
    </div>
    <div class="shared-item_cards-list-image_card_component__priceWrapper">
      <div class="shared-item_cards-list-image_card_component__info">
        <div class="shared-item_cards-list-image_card_component__favAndCollections">
          <a
  href="/my/bookmarks/new?item_id=7908619"
  class="shared-item_cards-collection_button_component__collection"
  role="button"
  aria-label="Add to collection"
  title="Add to collection"
  rel="nofollow"
  data-controller="collection-button"
  data-action="collection-button#open analytics-event#send"
  data-bookmark-button-target="bookmarkButton"
  data-item-id="7908619"
  data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;Item&quot;,&quot;eventLabel&quot;:&quot;collection;click&quot;,&quot;eventValue&quot;:7908619}"
>
  <span class="shared-item_cards-collection_button_component__icon">
    <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#collection'></use>
</svg>

  </span>
</a>

          <span class="shared-item_cards-list-image_card_component__buttonSeparator"></span>
          <form method="post"
      action="/my/favorites/7908619"
      data-controller="favorite-button"
      data-action="submit->favorite-button#submit favoritesStoreUpdated@window->favorite-button#updateFromStore">
  <input type="hidden" name="_method" value="post" data-favorite-button-target="formMethod">
  <button type="submit"
          aria-label="Add to Favorites"
          class="shared-item_cards-favorite_button_component__favoriteButton"
          data-favorite-button-target="favoriteButton"
          data-favorited="false"
          data-item-id="7908619">
    <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#heart'></use>
</svg>

  </button>
</form>

        </div>
        <div class="shared-item_cards-price_component__root">
    $69
</div>

        <div class="shared-item_cards-list-image_card_component__ratingWrapper"><div class="shared-stars_rating_component__root">
  <div
    class="shared-stars_rating_component__starRating"
    role="img"
    aria-label="Rated 4.87 out of 5, 1.2K reviews"
  >
    <span class="shared-stars_rating_component__star">
      <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#stars_5.0'></use>
</svg>

    </span>
  </div>
  <span aria-hidden="true" class="shared-stars_rating_component__starRatingCount">(1.2K)</span>
</div>
</div>
        <div class="shared-item_cards-sales_component__root">
  33.7K Sales
</div>

        <div class="shared-item_cards-list-image_card_component__lastUpdated shared-item_cards-list-image_card_component__tinyText">
          Last updated: 01 Jan 24
        </div>
      </div>
      <div class="shared-item_cards-list-image_card_component__coverWrapper">
            <a
  class="shared-item_cards-add_to_cart_button_component__root shared-item_cards-add_to_cart_button_component__compact"
  role="button"
  title="Add to cart"
  aria-label="Add to cart"
  href="/cart/configure_before_adding/7908619"
  rel="nofollow"
  data-controller="cart-button modal-commander"
  data-action="click->modal-commander#open cartStoreUpdated@window->cart-button#updateFromStore analytics-event#send"
  data-modal-commander-url-value="/my/cart_entries?item_id=7908619"
  data-modal-commander-method-value="POST"
  data-cart-button-item-id-value="7908619"
  data-cart-button-in-cart-class="shared-item_cards-add_to_cart_button_component__inCart"
  data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;ThemeComplete&quot;,&quot;category&quot;:&quot;codecanyon.net/wordpress/ecommerce/woocommerce/products&quot;,&quot;id&quot;:7908619,&quot;list&quot;:&quot;Search Results: Category&quot;,&quot;name&quot;:&quot;Extra Product Options \u0026 Add-Ons for WooCommerce&quot;,&quot;position&quot;:15}],[&quot;ec:setAction&quot;,&quot;add&quot;],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Add to cart: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;cart button&quot;,&quot;eventValue&quot;:7908619}]]"
>
    <span class="shared-item_cards-add_to_cart_button_component__cartIcon">
      <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#cart'></use>
</svg>

    </span>
</a>

          <a href="https://codecanyon.net/item/woocommerce-extra-product-options/full_screen_preview/7908619"
   class="shared-item_cards-preview_button_with_analytics_component__root"
   target="_blank"
   rel="noopener"
   data-action="analytics-event#send"
   data-analytics-event="{&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click;button&quot;,&quot;eventLabel&quot;:&quot;Preview;7908619&quot;,&quot;hitType&quot;:&quot;event&quot;}">
  Live Preview
</a>

      </div>
    </div>
  </div>
</div>

</div>

    <div class="shared-item_cards-card_component__root">
  <div class="shared-item_cards-list-image_card_component__root"
     data-analytics-item-impressions-target="item"
     data-favorites-loader-target="item"
     data-item-id="16527729"
     data-impression-position="16"
     data-impression-name="Ultimate Affiliate Pro - Affiliate Plugin for WordPress &amp; WooCommerce"
     data-impression-list="Search Results: Category"
     data-impression-brand="azzaroco"
     data-impression-category="codecanyon.net/wordpress/membership"
>
  <div class="shared-item_cards-list-image_card_component__contentWrapper shared-item_cards-list-image_card_component__landscapeImage">
    <a class="shared-item_cards-list-image_card_component__itemLinkOverlay"
       href="https://codecanyon.net/item/ultimate-affiliate-pro-wordpress-plugin/16527729"
       title="Ultimate Affiliate Pro - Affiliate Plugin for WordPress &amp; WooCommerce"
       aria-label="View Ultimate Affiliate Pro - Affiliate Plugin for WordPress &amp; WooCommerce"
       data-turbo="false"
       data-action="analytics-event#send"
       data-analytics-event="[[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;whitespace&quot;,&quot;eventValue&quot;:16527729}]]"></a>
    <div class="shared-item_cards-list-image_card_component__imageWrapper">
      <div class="shared-item_cards-preview_image_component__carousel shared-item_cards-preview_image_component__singleImage"
  style="padding-bottom: 50.847457627118644%"
>
  <a class="shared-item_cards-preview_image_component__imageLink" data-turbo="false" data-action="analytics-event#send" data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;azzaroco&quot;,&quot;category&quot;:&quot;codecanyon.net/wordpress/membership&quot;,&quot;id&quot;:16527729,&quot;list&quot;:&quot;Search Results: Category&quot;,&quot;name&quot;:&quot;Ultimate Affiliate Pro - Affiliate Plugin for WordPress \u0026 WooCommerce&quot;,&quot;position&quot;:16}],[&quot;ec:setAction&quot;,&quot;click&quot;,{&quot;list&quot;:&quot;Search Results: Category&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Product click: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;image&quot;,&quot;eventValue&quot;:16527729}]]" href="https://codecanyon.net/item/ultimate-affiliate-pro-wordpress-plugin/16527729">
      <img src="https://codecanyon.img.customer.envatousercontent.com/files/479548194/uap-image-preview.jpg?auto=compress%2Cformat&amp;fit=crop&amp;crop=top&amp;w=590&amp;h=300&amp;s=8b80de89dca4a0134e3a32707c62a0bc"
        loading="lazy"
        style="left: 0%"
        class="shared-item_cards-preview_image_component__image"
        alt="Ultimate Affiliate Pro - Affiliate Plugin for WordPress &amp; WooCommerce"
        title="Ultimate Affiliate Pro - Affiliate Plugin for WordPress &amp; WooCommerce"
        width="590"
        height="300"
        data-controller="image-preview"
        data-action="error->image-preview#setFallback"
        data-fallback="https://previews.customer.envatousercontent.com/files/479548194/uap-image-preview.jpg"
        data-carousel-target="image"
      />
</a></div>

      <div class="shared-item_cards-list-image_card_component__gradient" style="padding-top: 50.847457627118644%;">
        <div class="shared-item_cards-list-image_card_component__buttons">
          <a
  href="/my/bookmarks/new?item_id=16527729"
  class="shared-item_cards-collection_button_component__collection"
  role="button"
  aria-label="Add to collection"
  title="Add to collection"
  rel="nofollow"
  data-controller="collection-button"
  data-action="collection-button#open analytics-event#send"
  data-bookmark-button-target="bookmarkButton"
  data-item-id="16527729"
  data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;Item&quot;,&quot;eventLabel&quot;:&quot;collection;click&quot;,&quot;eventValue&quot;:16527729}"
>
  <span class="shared-item_cards-collection_button_component__icon">
    <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#collection'></use>
</svg>

  </span>
</a>

          <span class="shared-item_cards-list-image_card_component__buttonSeparator"></span>
          <form method="post"
      action="/my/favorites/16527729"
      data-controller="favorite-button"
      data-action="submit->favorite-button#submit favoritesStoreUpdated@window->favorite-button#updateFromStore">
  <input type="hidden" name="_method" value="post" data-favorite-button-target="formMethod">
  <button type="submit"
          aria-label="Add to Favorites"
          class="shared-item_cards-favorite_button_component__favoriteButton"
          data-favorite-button-target="favoriteButton"
          data-favorited="false"
          data-item-id="16527729">
    <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#heart'></use>
</svg>

  </button>
</form>

        </div>
      </div>
    </div>
    <span class="shared-item_cards-sash_component__sash shared-item_cards-sash_component__sash_trending" style="width: 50px; height: 50px;">
  <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#sash_trending'></use>
</svg>

</span>

    <div class="shared-item_cards-list-image_card_component__detailsWrapper">
      <h3 class="shared-item_cards-item_name_component__root">
  <a class="shared-item_cards-item_name_component__itemNameLink" tabindex="0" data-turbo="false" data-action="analytics-event#send" data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;azzaroco&quot;,&quot;category&quot;:&quot;codecanyon.net/wordpress/membership&quot;,&quot;id&quot;:16527729,&quot;list&quot;:&quot;Search Results: Category&quot;,&quot;name&quot;:&quot;Ultimate Affiliate Pro - Affiliate Plugin for WordPress \u0026 WooCommerce&quot;,&quot;position&quot;:16}],[&quot;ec:setAction&quot;,&quot;click&quot;,{&quot;list&quot;:&quot;Search Results: Category&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Product click: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;item title&quot;,&quot;eventValue&quot;:16527729}]]" href="https://codecanyon.net/item/ultimate-affiliate-pro-wordpress-plugin/16527729">Ultimate Affiliate Pro - Affiliate Plugin for WordPress &amp; WooCommerce</a>
</h3>

      <div>
        <div class="shared-item_cards-author_category_component__root">
  <i>by</i>
  <a
    href="https://codecanyon.net/user/azzaroco"
    class="shared-item_cards-author_category_component__link"
    rel="nofollow"
    data-turbo="false"
      data-action="analytics-event#send"
      data-analytics-event="[[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;author name&quot;,&quot;eventValue&quot;:16527729}]]"
  >
    azzaroco
  </a>
  in
  <a
    href="/category/wordpress/membership"
    class="shared-item_cards-author_category_component__link"
      data-action="analytics-event#send"
      data-analytics-event="[[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;category&quot;,&quot;eventValue&quot;:16527729}]]"
    }
  >
    Membership
  </a>
</div>

      </div>
      <div class="shared-item_cards-list-image_card_component__attrsWrapper">
          <ul>
    <li class="shared-item_cards-attributes_component__attribute">
      <span class="shared-item_cards-attributes_component__label">Software Version: </span>
      <span class="shared-item_cards-attributes_component__value">WordPress 5.0.x - 6.3.x</span>
    </li>
    <li class="shared-item_cards-attributes_component__attribute">
      <span class="shared-item_cards-attributes_component__label">Compatible With: </span>
      <span class="shared-item_cards-attributes_component__value">Easy Digital Downloads, Elementor, Elementor Pro, WooCommerce 5.x.x - 6.x.x, WPML</span>
    </li>
</ul>

          <div class="shared-item_cards-included_files_component__root">
  File Types Included:
  <ul>
      <li class="shared-item_cards-included_files_component__fileType">JavaScript JS</li>
      <li class="shared-item_cards-included_files_component__fileType">HTML</li>
      <li class="shared-item_cards-included_files_component__fileType">CSS</li>
      <li class="shared-item_cards-included_files_component__fileType">PHP</li>
      <li class="shared-item_cards-included_files_component__fileType">SQL</li>
  </ul>
</div>

      </div>
    </div>
    <div class="shared-item_cards-list-image_card_component__priceWrapper">
      <div class="shared-item_cards-list-image_card_component__info">
        <div class="shared-item_cards-list-image_card_component__favAndCollections">
          <a
  href="/my/bookmarks/new?item_id=16527729"
  class="shared-item_cards-collection_button_component__collection"
  role="button"
  aria-label="Add to collection"
  title="Add to collection"
  rel="nofollow"
  data-controller="collection-button"
  data-action="collection-button#open analytics-event#send"
  data-bookmark-button-target="bookmarkButton"
  data-item-id="16527729"
  data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;Item&quot;,&quot;eventLabel&quot;:&quot;collection;click&quot;,&quot;eventValue&quot;:16527729}"
>
  <span class="shared-item_cards-collection_button_component__icon">
    <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#collection'></use>
</svg>

  </span>
</a>

          <span class="shared-item_cards-list-image_card_component__buttonSeparator"></span>
          <form method="post"
      action="/my/favorites/16527729"
      data-controller="favorite-button"
      data-action="submit->favorite-button#submit favoritesStoreUpdated@window->favorite-button#updateFromStore">
  <input type="hidden" name="_method" value="post" data-favorite-button-target="formMethod">
  <button type="submit"
          aria-label="Add to Favorites"
          class="shared-item_cards-favorite_button_component__favoriteButton"
          data-favorite-button-target="favoriteButton"
          data-favorited="false"
          data-item-id="16527729">
    <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#heart'></use>
</svg>

  </button>
</form>

        </div>
        <div class="shared-item_cards-price_component__root">
    $69
</div>

        <div class="shared-item_cards-list-image_card_component__ratingWrapper"><div class="shared-stars_rating_component__root">
  <div
    class="shared-stars_rating_component__starRating"
    role="img"
    aria-label="Rated 4.61 out of 5, 333 reviews"
  >
    <span class="shared-stars_rating_component__star">
      <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#stars_4.5'></use>
</svg>

    </span>
  </div>
  <span aria-hidden="true" class="shared-stars_rating_component__starRatingCount">(333)</span>
</div>
</div>
        <div class="shared-item_cards-sales_component__root">
  16K Sales
</div>

        <div class="shared-item_cards-list-image_card_component__lastUpdated shared-item_cards-list-image_card_component__tinyText">
          Last updated: 04 Dec 23
        </div>
      </div>
      <div class="shared-item_cards-list-image_card_component__coverWrapper">
            <a
  class="shared-item_cards-add_to_cart_button_component__root shared-item_cards-add_to_cart_button_component__compact"
  role="button"
  title="Add to cart"
  aria-label="Add to cart"
  href="/cart/configure_before_adding/16527729"
  rel="nofollow"
  data-controller="cart-button modal-commander"
  data-action="click->modal-commander#open cartStoreUpdated@window->cart-button#updateFromStore analytics-event#send"
  data-modal-commander-url-value="/my/cart_entries?item_id=16527729"
  data-modal-commander-method-value="POST"
  data-cart-button-item-id-value="16527729"
  data-cart-button-in-cart-class="shared-item_cards-add_to_cart_button_component__inCart"
  data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;azzaroco&quot;,&quot;category&quot;:&quot;codecanyon.net/wordpress/membership&quot;,&quot;id&quot;:16527729,&quot;list&quot;:&quot;Search Results: Category&quot;,&quot;name&quot;:&quot;Ultimate Affiliate Pro - Affiliate Plugin for WordPress \u0026 WooCommerce&quot;,&quot;position&quot;:16}],[&quot;ec:setAction&quot;,&quot;add&quot;],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Add to cart: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;cart button&quot;,&quot;eventValue&quot;:16527729}]]"
>
    <span class="shared-item_cards-add_to_cart_button_component__cartIcon">
      <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#cart'></use>
</svg>

    </span>
</a>

          <a href="https://codecanyon.net/item/ultimate-affiliate-pro-wordpress-plugin/full_screen_preview/16527729"
   class="shared-item_cards-preview_button_with_analytics_component__root"
   target="_blank"
   rel="noopener"
   data-action="analytics-event#send"
   data-analytics-event="{&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click;button&quot;,&quot;eventLabel&quot;:&quot;Preview;16527729&quot;,&quot;hitType&quot;:&quot;event&quot;}">
  Live Preview
</a>

      </div>
    </div>
  </div>
</div>

</div>

    <div class="shared-item_cards-card_component__root">
  <div class="shared-item_cards-list-image_card_component__root"
     data-analytics-item-impressions-target="item"
     data-favorites-loader-target="item"
     data-item-id="17046256"
     data-impression-position="17"
     data-impression-name="Cool Timeline Pro - Horizontal &amp; Vertical Timeline Plugin For WordPress"
     data-impression-list="Search Results: Category"
     data-impression-brand="CoolPlugins"
     data-impression-category="codecanyon.net/wordpress/interface-elements"
>
  <div class="shared-item_cards-list-image_card_component__contentWrapper shared-item_cards-list-image_card_component__landscapeImage">
    <a class="shared-item_cards-list-image_card_component__itemLinkOverlay"
       href="https://codecanyon.net/item/cool-timeline-pro-wordpress-timeline-plugin/17046256"
       title="Cool Timeline Pro - Horizontal &amp; Vertical Timeline Plugin For WordPress"
       aria-label="View Cool Timeline Pro - Horizontal &amp; Vertical Timeline Plugin For WordPress"
       data-turbo="false"
       data-action="analytics-event#send"
       data-analytics-event="[[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;whitespace&quot;,&quot;eventValue&quot;:17046256}]]"></a>
    <div class="shared-item_cards-list-image_card_component__imageWrapper">
      <div class="shared-item_cards-preview_image_component__carousel shared-item_cards-preview_image_component__singleImage"
  style="padding-bottom: 50.847457627118644%"
>
  <a class="shared-item_cards-preview_image_component__imageLink" data-turbo="false" data-action="analytics-event#send" data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;CoolPlugins&quot;,&quot;category&quot;:&quot;codecanyon.net/wordpress/interface-elements&quot;,&quot;id&quot;:17046256,&quot;list&quot;:&quot;Search Results: Category&quot;,&quot;name&quot;:&quot;Cool Timeline Pro - Horizontal \u0026 Vertical Timeline Plugin For WordPress&quot;,&quot;position&quot;:17}],[&quot;ec:setAction&quot;,&quot;click&quot;,{&quot;list&quot;:&quot;Search Results: Category&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Product click: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;image&quot;,&quot;eventValue&quot;:17046256}]]" href="https://codecanyon.net/item/cool-timeline-pro-wordpress-timeline-plugin/17046256">
      <img src="https://codecanyon.img.customer.envatousercontent.com/files/479721159/wordpress-timeline-plugin-590x300.png?auto=compress%2Cformat&amp;fit=crop&amp;crop=top&amp;w=590&amp;h=300&amp;s=458e8ace0ffe3e2e726648a0a9e7286f"
        loading="lazy"
        style="left: 0%"
        class="shared-item_cards-preview_image_component__image"
        alt="Cool Timeline Pro - Horizontal &amp; Vertical Timeline Plugin For WordPress"
        title="Cool Timeline Pro - Horizontal &amp; Vertical Timeline Plugin For WordPress"
        width="590"
        height="300"
        data-controller="image-preview"
        data-action="error->image-preview#setFallback"
        data-fallback="https://previews.customer.envatousercontent.com/files/479721159/wordpress-timeline-plugin-590x300.png"
        data-carousel-target="image"
      />
</a></div>

      <div class="shared-item_cards-list-image_card_component__gradient" style="padding-top: 50.847457627118644%;">
        <div class="shared-item_cards-list-image_card_component__buttons">
          <a
  href="/my/bookmarks/new?item_id=17046256"
  class="shared-item_cards-collection_button_component__collection"
  role="button"
  aria-label="Add to collection"
  title="Add to collection"
  rel="nofollow"
  data-controller="collection-button"
  data-action="collection-button#open analytics-event#send"
  data-bookmark-button-target="bookmarkButton"
  data-item-id="17046256"
  data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;Item&quot;,&quot;eventLabel&quot;:&quot;collection;click&quot;,&quot;eventValue&quot;:17046256}"
>
  <span class="shared-item_cards-collection_button_component__icon">
    <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#collection'></use>
</svg>

  </span>
</a>

          <span class="shared-item_cards-list-image_card_component__buttonSeparator"></span>
          <form method="post"
      action="/my/favorites/17046256"
      data-controller="favorite-button"
      data-action="submit->favorite-button#submit favoritesStoreUpdated@window->favorite-button#updateFromStore">
  <input type="hidden" name="_method" value="post" data-favorite-button-target="formMethod">
  <button type="submit"
          aria-label="Add to Favorites"
          class="shared-item_cards-favorite_button_component__favoriteButton"
          data-favorite-button-target="favoriteButton"
          data-favorited="false"
          data-item-id="17046256">
    <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#heart'></use>
</svg>

  </button>
</form>

        </div>
      </div>
    </div>
    <span class="shared-item_cards-sash_component__sash shared-item_cards-sash_component__sash_trending" style="width: 50px; height: 50px;">
  <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#sash_trending'></use>
</svg>

</span>

    <div class="shared-item_cards-list-image_card_component__detailsWrapper">
      <h3 class="shared-item_cards-item_name_component__root">
  <a class="shared-item_cards-item_name_component__itemNameLink" tabindex="0" data-turbo="false" data-action="analytics-event#send" data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;CoolPlugins&quot;,&quot;category&quot;:&quot;codecanyon.net/wordpress/interface-elements&quot;,&quot;id&quot;:17046256,&quot;list&quot;:&quot;Search Results: Category&quot;,&quot;name&quot;:&quot;Cool Timeline Pro - Horizontal \u0026 Vertical Timeline Plugin For WordPress&quot;,&quot;position&quot;:17}],[&quot;ec:setAction&quot;,&quot;click&quot;,{&quot;list&quot;:&quot;Search Results: Category&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Product click: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;item title&quot;,&quot;eventValue&quot;:17046256}]]" href="https://codecanyon.net/item/cool-timeline-pro-wordpress-timeline-plugin/17046256">Cool Timeline Pro - Horizontal &amp; Vertical Timeline Plugin For WordPress</a>
</h3>

      <div>
        <div class="shared-item_cards-author_category_component__root">
  <i>by</i>
  <a
    href="https://codecanyon.net/user/coolplugins"
    class="shared-item_cards-author_category_component__link"
    rel="nofollow"
    data-turbo="false"
      data-action="analytics-event#send"
      data-analytics-event="[[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;author name&quot;,&quot;eventValue&quot;:17046256}]]"
  >
    CoolPlugins
  </a>
  in
  <a
    href="/category/wordpress/interface-elements"
    class="shared-item_cards-author_category_component__link"
      data-action="analytics-event#send"
      data-analytics-event="[[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;category&quot;,&quot;eventValue&quot;:17046256}]]"
    }
  >
    Interface Elements
  </a>
</div>

      </div>
      <div class="shared-item_cards-list-image_card_component__attrsWrapper">
          <ul>
    <li class="shared-item_cards-attributes_component__attribute">
      <span class="shared-item_cards-attributes_component__label">Software Version: </span>
      <span class="shared-item_cards-attributes_component__value">WordPress 4.9.x - 6.4.x</span>
    </li>
    <li class="shared-item_cards-attributes_component__attribute">
      <span class="shared-item_cards-attributes_component__label">Compatible With: </span>
      <span class="shared-item_cards-attributes_component__value">Block Editor, Elementor, Elementor Pro, Visual Composer, WPML</span>
    </li>
</ul>

          <div class="shared-item_cards-included_files_component__root">
  File Types Included:
  <ul>
      <li class="shared-item_cards-included_files_component__fileType">JavaScript JS</li>
      <li class="shared-item_cards-included_files_component__fileType">HTML</li>
      <li class="shared-item_cards-included_files_component__fileType">CSS</li>
      <li class="shared-item_cards-included_files_component__fileType">PHP</li>
  </ul>
</div>

      </div>
    </div>
    <div class="shared-item_cards-list-image_card_component__priceWrapper">
      <div class="shared-item_cards-list-image_card_component__info">
        <div class="shared-item_cards-list-image_card_component__favAndCollections">
          <a
  href="/my/bookmarks/new?item_id=17046256"
  class="shared-item_cards-collection_button_component__collection"
  role="button"
  aria-label="Add to collection"
  title="Add to collection"
  rel="nofollow"
  data-controller="collection-button"
  data-action="collection-button#open analytics-event#send"
  data-bookmark-button-target="bookmarkButton"
  data-item-id="17046256"
  data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;Item&quot;,&quot;eventLabel&quot;:&quot;collection;click&quot;,&quot;eventValue&quot;:17046256}"
>
  <span class="shared-item_cards-collection_button_component__icon">
    <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#collection'></use>
</svg>

  </span>
</a>

          <span class="shared-item_cards-list-image_card_component__buttonSeparator"></span>
          <form method="post"
      action="/my/favorites/17046256"
      data-controller="favorite-button"
      data-action="submit->favorite-button#submit favoritesStoreUpdated@window->favorite-button#updateFromStore">
  <input type="hidden" name="_method" value="post" data-favorite-button-target="formMethod">
  <button type="submit"
          aria-label="Add to Favorites"
          class="shared-item_cards-favorite_button_component__favoriteButton"
          data-favorite-button-target="favoriteButton"
          data-favorited="false"
          data-item-id="17046256">
    <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#heart'></use>
</svg>

  </button>
</form>

        </div>
        <div class="shared-item_cards-price_component__root">
    $29
</div>

        <div class="shared-item_cards-list-image_card_component__ratingWrapper"><div class="shared-stars_rating_component__root">
  <div
    class="shared-stars_rating_component__starRating"
    role="img"
    aria-label="Rated 4.78 out of 5, 360 reviews"
  >
    <span class="shared-stars_rating_component__star">
      <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#stars_5.0'></use>
</svg>

    </span>
  </div>
  <span aria-hidden="true" class="shared-stars_rating_component__starRatingCount">(360)</span>
</div>
</div>
        <div class="shared-item_cards-sales_component__root">
  14K Sales
</div>

        <div class="shared-item_cards-list-image_card_component__lastUpdated shared-item_cards-list-image_card_component__tinyText">
          Last updated: 08 Dec 23
        </div>
      </div>
      <div class="shared-item_cards-list-image_card_component__coverWrapper">
            <a
  class="shared-item_cards-add_to_cart_button_component__root shared-item_cards-add_to_cart_button_component__compact"
  role="button"
  title="Add to cart"
  aria-label="Add to cart"
  href="/cart/configure_before_adding/17046256"
  rel="nofollow"
  data-controller="cart-button modal-commander"
  data-action="click->modal-commander#open cartStoreUpdated@window->cart-button#updateFromStore analytics-event#send"
  data-modal-commander-url-value="/my/cart_entries?item_id=17046256"
  data-modal-commander-method-value="POST"
  data-cart-button-item-id-value="17046256"
  data-cart-button-in-cart-class="shared-item_cards-add_to_cart_button_component__inCart"
  data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;CoolPlugins&quot;,&quot;category&quot;:&quot;codecanyon.net/wordpress/interface-elements&quot;,&quot;id&quot;:17046256,&quot;list&quot;:&quot;Search Results: Category&quot;,&quot;name&quot;:&quot;Cool Timeline Pro - Horizontal \u0026 Vertical Timeline Plugin For WordPress&quot;,&quot;position&quot;:17}],[&quot;ec:setAction&quot;,&quot;add&quot;],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Add to cart: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;cart button&quot;,&quot;eventValue&quot;:17046256}]]"
>
    <span class="shared-item_cards-add_to_cart_button_component__cartIcon">
      <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#cart'></use>
</svg>

    </span>
</a>

          <a href="https://codecanyon.net/item/cool-timeline-pro-wordpress-timeline-plugin/full_screen_preview/17046256"
   class="shared-item_cards-preview_button_with_analytics_component__root"
   target="_blank"
   rel="noopener"
   data-action="analytics-event#send"
   data-analytics-event="{&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click;button&quot;,&quot;eventLabel&quot;:&quot;Preview;17046256&quot;,&quot;hitType&quot;:&quot;event&quot;}">
  Live Preview
</a>

      </div>
    </div>
  </div>
</div>

</div>

    <div class="shared-item_cards-card_component__root">
  <div class="shared-item_cards-list-image_card_component__root"
     data-analytics-item-impressions-target="item"
     data-favorites-loader-target="item"
     data-item-id="30369205"
     data-impression-position="18"
     data-impression-name="WordPress Accessibility Plugin – Readabler"
     data-impression-list="Search Results: Category"
     data-impression-brand="merkulove"
     data-impression-category="codecanyon.net/wordpress/utilities"
>
  <div class="shared-item_cards-list-image_card_component__contentWrapper shared-item_cards-list-image_card_component__landscapeImage">
    <a class="shared-item_cards-list-image_card_component__itemLinkOverlay"
       href="https://codecanyon.net/item/wordpress-accessibility-plugin-readabler/30369205"
       title="WordPress Accessibility Plugin – Readabler"
       aria-label="View WordPress Accessibility Plugin – Readabler"
       data-turbo="false"
       data-action="analytics-event#send"
       data-analytics-event="[[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;whitespace&quot;,&quot;eventValue&quot;:30369205}]]"></a>
    <div class="shared-item_cards-list-image_card_component__imageWrapper">
      <div class="shared-item_cards-preview_image_component__carousel shared-item_cards-preview_image_component__singleImage"
  style="padding-bottom: 50.847457627118644%"
>
  <a class="shared-item_cards-preview_image_component__imageLink" data-turbo="false" data-action="analytics-event#send" data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;merkulove&quot;,&quot;category&quot;:&quot;codecanyon.net/wordpress/utilities&quot;,&quot;id&quot;:30369205,&quot;list&quot;:&quot;Search Results: Category&quot;,&quot;name&quot;:&quot;WordPress Accessibility Plugin – Readabler&quot;,&quot;position&quot;:18}],[&quot;ec:setAction&quot;,&quot;click&quot;,{&quot;list&quot;:&quot;Search Results: Category&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Product click: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;image&quot;,&quot;eventValue&quot;:30369205}]]" href="https://codecanyon.net/item/wordpress-accessibility-plugin-readabler/30369205">
      <img src="https://codecanyon.img.customer.envatousercontent.com/files/441335129/readabler.jpg?auto=compress%2Cformat&amp;fit=crop&amp;crop=top&amp;w=590&amp;h=300&amp;s=418979e0892aabd05b0a01b0e8339923"
        loading="lazy"
        style="left: 0%"
        class="shared-item_cards-preview_image_component__image"
        alt="WordPress Accessibility Plugin – Readabler"
        title="WordPress Accessibility Plugin – Readabler"
        width="590"
        height="300"
        data-controller="image-preview"
        data-action="error->image-preview#setFallback"
        data-fallback="https://previews.customer.envatousercontent.com/files/441335129/readabler.jpg"
        data-carousel-target="image"
      />
</a></div>

      <div class="shared-item_cards-list-image_card_component__gradient" style="padding-top: 50.847457627118644%;">
        <div class="shared-item_cards-list-image_card_component__buttons">
          <a
  href="/my/bookmarks/new?item_id=30369205"
  class="shared-item_cards-collection_button_component__collection"
  role="button"
  aria-label="Add to collection"
  title="Add to collection"
  rel="nofollow"
  data-controller="collection-button"
  data-action="collection-button#open analytics-event#send"
  data-bookmark-button-target="bookmarkButton"
  data-item-id="30369205"
  data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;Item&quot;,&quot;eventLabel&quot;:&quot;collection;click&quot;,&quot;eventValue&quot;:30369205}"
>
  <span class="shared-item_cards-collection_button_component__icon">
    <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#collection'></use>
</svg>

  </span>
</a>

          <span class="shared-item_cards-list-image_card_component__buttonSeparator"></span>
          <form method="post"
      action="/my/favorites/30369205"
      data-controller="favorite-button"
      data-action="submit->favorite-button#submit favoritesStoreUpdated@window->favorite-button#updateFromStore">
  <input type="hidden" name="_method" value="post" data-favorite-button-target="formMethod">
  <button type="submit"
          aria-label="Add to Favorites"
          class="shared-item_cards-favorite_button_component__favoriteButton"
          data-favorite-button-target="favoriteButton"
          data-favorited="false"
          data-item-id="30369205">
    <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#heart'></use>
</svg>

  </button>
</form>

        </div>
      </div>
    </div>
    <span class="shared-item_cards-sash_component__sash shared-item_cards-sash_component__sash_trending" style="width: 50px; height: 50px;">
  <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#sash_trending'></use>
</svg>

</span>

    <div class="shared-item_cards-list-image_card_component__detailsWrapper">
      <h3 class="shared-item_cards-item_name_component__root">
  <a class="shared-item_cards-item_name_component__itemNameLink" tabindex="0" data-turbo="false" data-action="analytics-event#send" data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;merkulove&quot;,&quot;category&quot;:&quot;codecanyon.net/wordpress/utilities&quot;,&quot;id&quot;:30369205,&quot;list&quot;:&quot;Search Results: Category&quot;,&quot;name&quot;:&quot;WordPress Accessibility Plugin – Readabler&quot;,&quot;position&quot;:18}],[&quot;ec:setAction&quot;,&quot;click&quot;,{&quot;list&quot;:&quot;Search Results: Category&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Product click: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;item title&quot;,&quot;eventValue&quot;:30369205}]]" href="https://codecanyon.net/item/wordpress-accessibility-plugin-readabler/30369205">WordPress Accessibility Plugin – Readabler</a>
</h3>

      <div>
        <div class="shared-item_cards-author_category_component__root">
  <i>by</i>
  <a
    href="https://codecanyon.net/user/merkulove"
    class="shared-item_cards-author_category_component__link"
    rel="nofollow"
    data-turbo="false"
      data-action="analytics-event#send"
      data-analytics-event="[[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;author name&quot;,&quot;eventValue&quot;:30369205}]]"
  >
    merkulove
  </a>
  in
  <a
    href="/category/wordpress/utilities"
    class="shared-item_cards-author_category_component__link"
      data-action="analytics-event#send"
      data-analytics-event="[[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;category&quot;,&quot;eventValue&quot;:30369205}]]"
    }
  >
    Utilities
  </a>
</div>

      </div>
      <div class="shared-item_cards-list-image_card_component__attrsWrapper">
          <ul>
    <li class="shared-item_cards-attributes_component__attribute">
      <span class="shared-item_cards-attributes_component__label">Software Version: </span>
      <span class="shared-item_cards-attributes_component__value">WordPress 5.0.x - 6.4.x</span>
    </li>
    <li class="shared-item_cards-attributes_component__attribute">
      <span class="shared-item_cards-attributes_component__label">Compatible With: </span>
      <span class="shared-item_cards-attributes_component__value">Elementor, Elementor Pro, Layers WP, WPML, Bootstrap 5.x</span>
    </li>
</ul>

          <div class="shared-item_cards-included_files_component__root">
  File Types Included:
  <ul>
      <li class="shared-item_cards-included_files_component__fileType">JavaScript JS</li>
      <li class="shared-item_cards-included_files_component__fileType">CSS</li>
      <li class="shared-item_cards-included_files_component__fileType">Sass</li>
      <li class="shared-item_cards-included_files_component__fileType">PHP</li>
  </ul>
</div>

      </div>
    </div>
    <div class="shared-item_cards-list-image_card_component__priceWrapper">
      <div class="shared-item_cards-list-image_card_component__info">
        <div class="shared-item_cards-list-image_card_component__favAndCollections">
          <a
  href="/my/bookmarks/new?item_id=30369205"
  class="shared-item_cards-collection_button_component__collection"
  role="button"
  aria-label="Add to collection"
  title="Add to collection"
  rel="nofollow"
  data-controller="collection-button"
  data-action="collection-button#open analytics-event#send"
  data-bookmark-button-target="bookmarkButton"
  data-item-id="30369205"
  data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;Item&quot;,&quot;eventLabel&quot;:&quot;collection;click&quot;,&quot;eventValue&quot;:30369205}"
>
  <span class="shared-item_cards-collection_button_component__icon">
    <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#collection'></use>
</svg>

  </span>
</a>

          <span class="shared-item_cards-list-image_card_component__buttonSeparator"></span>
          <form method="post"
      action="/my/favorites/30369205"
      data-controller="favorite-button"
      data-action="submit->favorite-button#submit favoritesStoreUpdated@window->favorite-button#updateFromStore">
  <input type="hidden" name="_method" value="post" data-favorite-button-target="formMethod">
  <button type="submit"
          aria-label="Add to Favorites"
          class="shared-item_cards-favorite_button_component__favoriteButton"
          data-favorite-button-target="favoriteButton"
          data-favorited="false"
          data-item-id="30369205">
    <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#heart'></use>
</svg>

  </button>
</form>

        </div>
        <div class="shared-item_cards-price_component__root">
    $25
</div>

        <div class="shared-item_cards-list-image_card_component__ratingWrapper"><div class="shared-stars_rating_component__root">
  <div
    class="shared-stars_rating_component__starRating"
    role="img"
    aria-label="Rated 4.88 out of 5, 52 reviews"
  >
    <span class="shared-stars_rating_component__star">
      <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#stars_5.0'></use>
</svg>

    </span>
  </div>
  <span aria-hidden="true" class="shared-stars_rating_component__starRatingCount">(52)</span>
</div>
</div>
        <div class="shared-item_cards-sales_component__root">
  2K Sales
</div>

        <div class="shared-item_cards-list-image_card_component__lastUpdated shared-item_cards-list-image_card_component__tinyText">
          Last updated: 05 Jan 24
        </div>
      </div>
      <div class="shared-item_cards-list-image_card_component__coverWrapper">
            <a
  class="shared-item_cards-add_to_cart_button_component__root shared-item_cards-add_to_cart_button_component__compact"
  role="button"
  title="Add to cart"
  aria-label="Add to cart"
  href="/cart/configure_before_adding/30369205"
  rel="nofollow"
  data-controller="cart-button modal-commander"
  data-action="click->modal-commander#open cartStoreUpdated@window->cart-button#updateFromStore analytics-event#send"
  data-modal-commander-url-value="/my/cart_entries?item_id=30369205"
  data-modal-commander-method-value="POST"
  data-cart-button-item-id-value="30369205"
  data-cart-button-in-cart-class="shared-item_cards-add_to_cart_button_component__inCart"
  data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;merkulove&quot;,&quot;category&quot;:&quot;codecanyon.net/wordpress/utilities&quot;,&quot;id&quot;:30369205,&quot;list&quot;:&quot;Search Results: Category&quot;,&quot;name&quot;:&quot;WordPress Accessibility Plugin – Readabler&quot;,&quot;position&quot;:18}],[&quot;ec:setAction&quot;,&quot;add&quot;],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Add to cart: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;cart button&quot;,&quot;eventValue&quot;:30369205}]]"
>
    <span class="shared-item_cards-add_to_cart_button_component__cartIcon">
      <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#cart'></use>
</svg>

    </span>
</a>

          <a href="https://codecanyon.net/item/wordpress-accessibility-plugin-readabler/full_screen_preview/30369205"
   class="shared-item_cards-preview_button_with_analytics_component__root"
   target="_blank"
   rel="noopener"
   data-action="analytics-event#send"
   data-analytics-event="{&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click;button&quot;,&quot;eventLabel&quot;:&quot;Preview;30369205&quot;,&quot;hitType&quot;:&quot;event&quot;}">
  Live Preview
</a>

      </div>
    </div>
  </div>
</div>

</div>

    <div class="shared-item_cards-card_component__root">
  <div class="shared-item_cards-list-image_card_component__root"
     data-analytics-item-impressions-target="item"
     data-favorites-loader-target="item"
     data-item-id="2218545"
     data-impression-position="19"
     data-impression-name="Media Grid - Wordpress Responsive Portfolio"
     data-impression-list="Search Results: Category"
     data-impression-brand="LCweb"
     data-impression-category="codecanyon.net/wordpress/galleries"
>
  <div class="shared-item_cards-list-image_card_component__contentWrapper shared-item_cards-list-image_card_component__landscapeImage">
    <a class="shared-item_cards-list-image_card_component__itemLinkOverlay"
       href="https://codecanyon.net/item/media-grid-wordpress-responsive-portfolio/2218545"
       title="Media Grid - Wordpress Responsive Portfolio"
       aria-label="View Media Grid - Wordpress Responsive Portfolio"
       data-turbo="false"
       data-action="analytics-event#send"
       data-analytics-event="[[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;whitespace&quot;,&quot;eventValue&quot;:2218545}]]"></a>
    <div class="shared-item_cards-list-image_card_component__imageWrapper">
      <div class="shared-item_cards-preview_image_component__carousel shared-item_cards-preview_image_component__singleImage"
  style="padding-bottom: 50.847457627118644%"
>
  <a class="shared-item_cards-preview_image_component__imageLink" data-turbo="false" data-action="analytics-event#send" data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;LCweb&quot;,&quot;category&quot;:&quot;codecanyon.net/wordpress/galleries&quot;,&quot;id&quot;:2218545,&quot;list&quot;:&quot;Search Results: Category&quot;,&quot;name&quot;:&quot;Media Grid - Wordpress Responsive Portfolio&quot;,&quot;position&quot;:19}],[&quot;ec:setAction&quot;,&quot;click&quot;,{&quot;list&quot;:&quot;Search Results: Category&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Product click: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;image&quot;,&quot;eventValue&quot;:2218545}]]" href="https://codecanyon.net/item/media-grid-wordpress-responsive-portfolio/2218545">
      <img src="https://codecanyon.img.customer.envatousercontent.com/files/475587920/mg_big_banner.jpg?auto=compress%2Cformat&amp;fit=crop&amp;crop=top&amp;w=590&amp;h=300&amp;s=1b6ef7e9d85d4541f7caf422420ef416"
        loading="lazy"
        style="left: 0%"
        class="shared-item_cards-preview_image_component__image"
        alt="Media Grid - Wordpress Responsive Portfolio"
        title="Media Grid - Wordpress Responsive Portfolio"
        width="590"
        height="300"
        data-controller="image-preview"
        data-action="error->image-preview#setFallback"
        data-fallback="https://previews.customer.envatousercontent.com/files/475587920/mg_big_banner.jpg"
        data-carousel-target="image"
      />
</a></div>

      <div class="shared-item_cards-list-image_card_component__gradient" style="padding-top: 50.847457627118644%;">
        <div class="shared-item_cards-list-image_card_component__buttons">
          <a
  href="/my/bookmarks/new?item_id=2218545"
  class="shared-item_cards-collection_button_component__collection"
  role="button"
  aria-label="Add to collection"
  title="Add to collection"
  rel="nofollow"
  data-controller="collection-button"
  data-action="collection-button#open analytics-event#send"
  data-bookmark-button-target="bookmarkButton"
  data-item-id="2218545"
  data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;Item&quot;,&quot;eventLabel&quot;:&quot;collection;click&quot;,&quot;eventValue&quot;:2218545}"
>
  <span class="shared-item_cards-collection_button_component__icon">
    <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#collection'></use>
</svg>

  </span>
</a>

          <span class="shared-item_cards-list-image_card_component__buttonSeparator"></span>
          <form method="post"
      action="/my/favorites/2218545"
      data-controller="favorite-button"
      data-action="submit->favorite-button#submit favoritesStoreUpdated@window->favorite-button#updateFromStore">
  <input type="hidden" name="_method" value="post" data-favorite-button-target="formMethod">
  <button type="submit"
          aria-label="Add to Favorites"
          class="shared-item_cards-favorite_button_component__favoriteButton"
          data-favorite-button-target="favoriteButton"
          data-favorited="false"
          data-item-id="2218545">
    <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#heart'></use>
</svg>

  </button>
</form>

        </div>
      </div>
    </div>
    <span class="shared-item_cards-sash_component__sash shared-item_cards-sash_component__sash_trending" style="width: 50px; height: 50px;">
  <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#sash_trending'></use>
</svg>

</span>

    <div class="shared-item_cards-list-image_card_component__detailsWrapper">
      <h3 class="shared-item_cards-item_name_component__root">
  <a class="shared-item_cards-item_name_component__itemNameLink" tabindex="0" data-turbo="false" data-action="analytics-event#send" data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;LCweb&quot;,&quot;category&quot;:&quot;codecanyon.net/wordpress/galleries&quot;,&quot;id&quot;:2218545,&quot;list&quot;:&quot;Search Results: Category&quot;,&quot;name&quot;:&quot;Media Grid - Wordpress Responsive Portfolio&quot;,&quot;position&quot;:19}],[&quot;ec:setAction&quot;,&quot;click&quot;,{&quot;list&quot;:&quot;Search Results: Category&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Product click: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;item title&quot;,&quot;eventValue&quot;:2218545}]]" href="https://codecanyon.net/item/media-grid-wordpress-responsive-portfolio/2218545">Media Grid - Wordpress Responsive Portfolio</a>
</h3>

      <div>
        <div class="shared-item_cards-author_category_component__root">
  <i>by</i>
  <a
    href="https://codecanyon.net/user/lcweb"
    class="shared-item_cards-author_category_component__link"
    rel="nofollow"
    data-turbo="false"
      data-action="analytics-event#send"
      data-analytics-event="[[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;author name&quot;,&quot;eventValue&quot;:2218545}]]"
  >
    LCweb
  </a>
  in
  <a
    href="/category/wordpress/galleries"
    class="shared-item_cards-author_category_component__link"
      data-action="analytics-event#send"
      data-analytics-event="[[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;category&quot;,&quot;eventValue&quot;:2218545}]]"
    }
  >
    Galleries
  </a>
</div>

      </div>
      <div class="shared-item_cards-list-image_card_component__attrsWrapper">
          <ul>
    <li class="shared-item_cards-attributes_component__attribute">
      <span class="shared-item_cards-attributes_component__label">Software Version: </span>
      <span class="shared-item_cards-attributes_component__value">WordPress 5.0.x - 6.4.x</span>
    </li>
    <li class="shared-item_cards-attributes_component__attribute">
      <span class="shared-item_cards-attributes_component__label">Compatible With: </span>
      <span class="shared-item_cards-attributes_component__value">Block Editor, Elementor, Elementor Pro, WooCommerce 6.x.x - 8.x.x, WPBakery Page Builder, WPML</span>
    </li>
</ul>

          <div class="shared-item_cards-included_files_component__root">
  File Types Included:
  <ul>
      <li class="shared-item_cards-included_files_component__fileType">JavaScript JS</li>
      <li class="shared-item_cards-included_files_component__fileType">CSS</li>
      <li class="shared-item_cards-included_files_component__fileType">PHP</li>
  </ul>
</div>

      </div>
    </div>
    <div class="shared-item_cards-list-image_card_component__priceWrapper">
      <div class="shared-item_cards-list-image_card_component__info">
        <div class="shared-item_cards-list-image_card_component__favAndCollections">
          <a
  href="/my/bookmarks/new?item_id=2218545"
  class="shared-item_cards-collection_button_component__collection"
  role="button"
  aria-label="Add to collection"
  title="Add to collection"
  rel="nofollow"
  data-controller="collection-button"
  data-action="collection-button#open analytics-event#send"
  data-bookmark-button-target="bookmarkButton"
  data-item-id="2218545"
  data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;Item&quot;,&quot;eventLabel&quot;:&quot;collection;click&quot;,&quot;eventValue&quot;:2218545}"
>
  <span class="shared-item_cards-collection_button_component__icon">
    <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#collection'></use>
</svg>

  </span>
</a>

          <span class="shared-item_cards-list-image_card_component__buttonSeparator"></span>
          <form method="post"
      action="/my/favorites/2218545"
      data-controller="favorite-button"
      data-action="submit->favorite-button#submit favoritesStoreUpdated@window->favorite-button#updateFromStore">
  <input type="hidden" name="_method" value="post" data-favorite-button-target="formMethod">
  <button type="submit"
          aria-label="Add to Favorites"
          class="shared-item_cards-favorite_button_component__favoriteButton"
          data-favorite-button-target="favoriteButton"
          data-favorited="false"
          data-item-id="2218545">
    <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#heart'></use>
</svg>

  </button>
</form>

        </div>
        <div class="shared-item_cards-price_component__root">
    $35
</div>

        <div class="shared-item_cards-list-image_card_component__ratingWrapper"><div class="shared-stars_rating_component__root">
  <div
    class="shared-stars_rating_component__starRating"
    role="img"
    aria-label="Rated 4.47 out of 5, 879 reviews"
  >
    <span class="shared-stars_rating_component__star">
      <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#stars_4.5'></use>
</svg>

    </span>
  </div>
  <span aria-hidden="true" class="shared-stars_rating_component__starRatingCount">(879)</span>
</div>
</div>
        <div class="shared-item_cards-sales_component__root">
  13.4K Sales
</div>

        <div class="shared-item_cards-list-image_card_component__lastUpdated shared-item_cards-list-image_card_component__tinyText">
          Last updated: 20 Dec 23
        </div>
      </div>
      <div class="shared-item_cards-list-image_card_component__coverWrapper">
            <a
  class="shared-item_cards-add_to_cart_button_component__root shared-item_cards-add_to_cart_button_component__compact"
  role="button"
  title="Add to cart"
  aria-label="Add to cart"
  href="/cart/configure_before_adding/2218545"
  rel="nofollow"
  data-controller="cart-button modal-commander"
  data-action="click->modal-commander#open cartStoreUpdated@window->cart-button#updateFromStore analytics-event#send"
  data-modal-commander-url-value="/my/cart_entries?item_id=2218545"
  data-modal-commander-method-value="POST"
  data-cart-button-item-id-value="2218545"
  data-cart-button-in-cart-class="shared-item_cards-add_to_cart_button_component__inCart"
  data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;LCweb&quot;,&quot;category&quot;:&quot;codecanyon.net/wordpress/galleries&quot;,&quot;id&quot;:2218545,&quot;list&quot;:&quot;Search Results: Category&quot;,&quot;name&quot;:&quot;Media Grid - Wordpress Responsive Portfolio&quot;,&quot;position&quot;:19}],[&quot;ec:setAction&quot;,&quot;add&quot;],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Add to cart: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;cart button&quot;,&quot;eventValue&quot;:2218545}]]"
>
    <span class="shared-item_cards-add_to_cart_button_component__cartIcon">
      <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#cart'></use>
</svg>

    </span>
</a>

          <a href="https://codecanyon.net/item/media-grid-wordpress-responsive-portfolio/full_screen_preview/2218545"
   class="shared-item_cards-preview_button_with_analytics_component__root"
   target="_blank"
   rel="noopener"
   data-action="analytics-event#send"
   data-analytics-event="{&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click;button&quot;,&quot;eventLabel&quot;:&quot;Preview;2218545&quot;,&quot;hitType&quot;:&quot;event&quot;}">
  Live Preview
</a>

      </div>
    </div>
  </div>
</div>

</div>

    <div class="shared-item_cards-card_component__root">
  <div class="shared-item_cards-list-image_card_component__root"
     data-analytics-item-impressions-target="item"
     data-favorites-loader-target="item"
     data-item-id="1467885"
     data-impression-position="20"
     data-impression-name="PrivateContent - Multilevel Content Plugin"
     data-impression-list="Search Results: Category"
     data-impression-brand="LCweb"
     data-impression-category="codecanyon.net/wordpress/membership"
>
  <div class="shared-item_cards-list-image_card_component__contentWrapper shared-item_cards-list-image_card_component__landscapeImage">
    <a class="shared-item_cards-list-image_card_component__itemLinkOverlay"
       href="https://codecanyon.net/item/privatecontent-multilevel-content-plugin/1467885"
       title="PrivateContent - Multilevel Content Plugin"
       aria-label="View PrivateContent - Multilevel Content Plugin"
       data-turbo="false"
       data-action="analytics-event#send"
       data-analytics-event="[[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;whitespace&quot;,&quot;eventValue&quot;:1467885}]]"></a>
    <div class="shared-item_cards-list-image_card_component__imageWrapper">
      <div class="shared-item_cards-preview_image_component__carousel shared-item_cards-preview_image_component__singleImage"
  style="padding-bottom: 50.847457627118644%"
>
  <a class="shared-item_cards-preview_image_component__imageLink" data-turbo="false" data-action="analytics-event#send" data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;LCweb&quot;,&quot;category&quot;:&quot;codecanyon.net/wordpress/membership&quot;,&quot;id&quot;:1467885,&quot;list&quot;:&quot;Search Results: Category&quot;,&quot;name&quot;:&quot;PrivateContent - Multilevel Content Plugin&quot;,&quot;position&quot;:20}],[&quot;ec:setAction&quot;,&quot;click&quot;,{&quot;list&quot;:&quot;Search Results: Category&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Product click: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;image&quot;,&quot;eventValue&quot;:1467885}]]" href="https://codecanyon.net/item/privatecontent-multilevel-content-plugin/1467885">
      <img src="https://codecanyon.img.customer.envatousercontent.com/files/476564325/pc_big_banner.jpg?auto=compress%2Cformat&amp;fit=crop&amp;crop=top&amp;w=590&amp;h=300&amp;s=4269f821e287a0be318c896ecab88e15"
        loading="lazy"
        style="left: 0%"
        class="shared-item_cards-preview_image_component__image"
        alt="PrivateContent - Multilevel Content Plugin"
        title="PrivateContent - Multilevel Content Plugin"
        width="590"
        height="300"
        data-controller="image-preview"
        data-action="error->image-preview#setFallback"
        data-fallback="https://previews.customer.envatousercontent.com/files/476564325/pc_big_banner.jpg"
        data-carousel-target="image"
      />
</a></div>

      <div class="shared-item_cards-list-image_card_component__gradient" style="padding-top: 50.847457627118644%;">
        <div class="shared-item_cards-list-image_card_component__buttons">
          <a
  href="/my/bookmarks/new?item_id=1467885"
  class="shared-item_cards-collection_button_component__collection"
  role="button"
  aria-label="Add to collection"
  title="Add to collection"
  rel="nofollow"
  data-controller="collection-button"
  data-action="collection-button#open analytics-event#send"
  data-bookmark-button-target="bookmarkButton"
  data-item-id="1467885"
  data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;Item&quot;,&quot;eventLabel&quot;:&quot;collection;click&quot;,&quot;eventValue&quot;:1467885}"
>
  <span class="shared-item_cards-collection_button_component__icon">
    <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#collection'></use>
</svg>

  </span>
</a>

          <span class="shared-item_cards-list-image_card_component__buttonSeparator"></span>
          <form method="post"
      action="/my/favorites/1467885"
      data-controller="favorite-button"
      data-action="submit->favorite-button#submit favoritesStoreUpdated@window->favorite-button#updateFromStore">
  <input type="hidden" name="_method" value="post" data-favorite-button-target="formMethod">
  <button type="submit"
          aria-label="Add to Favorites"
          class="shared-item_cards-favorite_button_component__favoriteButton"
          data-favorite-button-target="favoriteButton"
          data-favorited="false"
          data-item-id="1467885">
    <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#heart'></use>
</svg>

  </button>
</form>

        </div>
      </div>
    </div>
    <span class="shared-item_cards-sash_component__sash shared-item_cards-sash_component__sash_trending" style="width: 50px; height: 50px;">
  <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#sash_trending'></use>
</svg>

</span>

    <div class="shared-item_cards-list-image_card_component__detailsWrapper">
      <h3 class="shared-item_cards-item_name_component__root">
  <a class="shared-item_cards-item_name_component__itemNameLink" tabindex="0" data-turbo="false" data-action="analytics-event#send" data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;LCweb&quot;,&quot;category&quot;:&quot;codecanyon.net/wordpress/membership&quot;,&quot;id&quot;:1467885,&quot;list&quot;:&quot;Search Results: Category&quot;,&quot;name&quot;:&quot;PrivateContent - Multilevel Content Plugin&quot;,&quot;position&quot;:20}],[&quot;ec:setAction&quot;,&quot;click&quot;,{&quot;list&quot;:&quot;Search Results: Category&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Product click: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;item title&quot;,&quot;eventValue&quot;:1467885}]]" href="https://codecanyon.net/item/privatecontent-multilevel-content-plugin/1467885">PrivateContent - Multilevel Content Plugin</a>
</h3>

      <div>
        <div class="shared-item_cards-author_category_component__root">
  <i>by</i>
  <a
    href="https://codecanyon.net/user/lcweb"
    class="shared-item_cards-author_category_component__link"
    rel="nofollow"
    data-turbo="false"
      data-action="analytics-event#send"
      data-analytics-event="[[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;author name&quot;,&quot;eventValue&quot;:1467885}]]"
  >
    LCweb
  </a>
  in
  <a
    href="/category/wordpress/membership"
    class="shared-item_cards-author_category_component__link"
      data-action="analytics-event#send"
      data-analytics-event="[[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;category&quot;,&quot;eventValue&quot;:1467885}]]"
    }
  >
    Membership
  </a>
</div>

      </div>
      <div class="shared-item_cards-list-image_card_component__attrsWrapper">
          <ul>
    <li class="shared-item_cards-attributes_component__attribute">
      <span class="shared-item_cards-attributes_component__label">Software Version: </span>
      <span class="shared-item_cards-attributes_component__value">WordPress 5.0.x - 6.4.x</span>
    </li>
    <li class="shared-item_cards-attributes_component__attribute">
      <span class="shared-item_cards-attributes_component__label">Compatible With: </span>
      <span class="shared-item_cards-attributes_component__value">bbPress 2.6.x, Block Editor, BuddyPress 10.x.x, Elementor, Elementor Pro, Layers WP, WooCommerce 6.x.x - 8.x.x, WPBakery Page Builder, WPML, Cornerstone</span>
    </li>
</ul>

          <div class="shared-item_cards-included_files_component__root">
  File Types Included:
  <ul>
      <li class="shared-item_cards-included_files_component__fileType">JavaScript JS</li>
      <li class="shared-item_cards-included_files_component__fileType">CSS</li>
      <li class="shared-item_cards-included_files_component__fileType">PHP</li>
  </ul>
</div>

      </div>
    </div>
    <div class="shared-item_cards-list-image_card_component__priceWrapper">
      <div class="shared-item_cards-list-image_card_component__info">
        <div class="shared-item_cards-list-image_card_component__favAndCollections">
          <a
  href="/my/bookmarks/new?item_id=1467885"
  class="shared-item_cards-collection_button_component__collection"
  role="button"
  aria-label="Add to collection"
  title="Add to collection"
  rel="nofollow"
  data-controller="collection-button"
  data-action="collection-button#open analytics-event#send"
  data-bookmark-button-target="bookmarkButton"
  data-item-id="1467885"
  data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;Item&quot;,&quot;eventLabel&quot;:&quot;collection;click&quot;,&quot;eventValue&quot;:1467885}"
>
  <span class="shared-item_cards-collection_button_component__icon">
    <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#collection'></use>
</svg>

  </span>
</a>

          <span class="shared-item_cards-list-image_card_component__buttonSeparator"></span>
          <form method="post"
      action="/my/favorites/1467885"
      data-controller="favorite-button"
      data-action="submit->favorite-button#submit favoritesStoreUpdated@window->favorite-button#updateFromStore">
  <input type="hidden" name="_method" value="post" data-favorite-button-target="formMethod">
  <button type="submit"
          aria-label="Add to Favorites"
          class="shared-item_cards-favorite_button_component__favoriteButton"
          data-favorite-button-target="favoriteButton"
          data-favorited="false"
          data-item-id="1467885">
    <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#heart'></use>
</svg>

  </button>
</form>

        </div>
        <div class="shared-item_cards-price_component__root">
    $35
</div>

        <div class="shared-item_cards-list-image_card_component__ratingWrapper"><div class="shared-stars_rating_component__root">
  <div
    class="shared-stars_rating_component__starRating"
    role="img"
    aria-label="Rated 4.47 out of 5, 675 reviews"
  >
    <span class="shared-stars_rating_component__star">
      <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#stars_4.5'></use>
</svg>

    </span>
  </div>
  <span aria-hidden="true" class="shared-stars_rating_component__starRatingCount">(675)</span>
</div>
</div>
        <div class="shared-item_cards-sales_component__root">
  12K Sales
</div>

        <div class="shared-item_cards-list-image_card_component__lastUpdated shared-item_cards-list-image_card_component__tinyText">
          Last updated: 20 Dec 23
        </div>
      </div>
      <div class="shared-item_cards-list-image_card_component__coverWrapper">
            <a
  class="shared-item_cards-add_to_cart_button_component__root shared-item_cards-add_to_cart_button_component__compact"
  role="button"
  title="Add to cart"
  aria-label="Add to cart"
  href="/cart/configure_before_adding/1467885"
  rel="nofollow"
  data-controller="cart-button modal-commander"
  data-action="click->modal-commander#open cartStoreUpdated@window->cart-button#updateFromStore analytics-event#send"
  data-modal-commander-url-value="/my/cart_entries?item_id=1467885"
  data-modal-commander-method-value="POST"
  data-cart-button-item-id-value="1467885"
  data-cart-button-in-cart-class="shared-item_cards-add_to_cart_button_component__inCart"
  data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;LCweb&quot;,&quot;category&quot;:&quot;codecanyon.net/wordpress/membership&quot;,&quot;id&quot;:1467885,&quot;list&quot;:&quot;Search Results: Category&quot;,&quot;name&quot;:&quot;PrivateContent - Multilevel Content Plugin&quot;,&quot;position&quot;:20}],[&quot;ec:setAction&quot;,&quot;add&quot;],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Add to cart: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;cart button&quot;,&quot;eventValue&quot;:1467885}]]"
>
    <span class="shared-item_cards-add_to_cart_button_component__cartIcon">
      <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#cart'></use>
</svg>

    </span>
</a>

          <a href="https://codecanyon.net/item/privatecontent-multilevel-content-plugin/full_screen_preview/1467885"
   class="shared-item_cards-preview_button_with_analytics_component__root"
   target="_blank"
   rel="noopener"
   data-action="analytics-event#send"
   data-analytics-event="{&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click;button&quot;,&quot;eventLabel&quot;:&quot;Preview;1467885&quot;,&quot;hitType&quot;:&quot;event&quot;}">
  Live Preview
</a>

      </div>
    </div>
  </div>
</div>

</div>

    <div class="shared-item_cards-card_component__root">
  <div class="shared-item_cards-list-image_card_component__root"
     data-analytics-item-impressions-target="item"
     data-favorites-loader-target="item"
     data-item-id="7818230"
     data-impression-position="21"
     data-impression-name="WP Cost Estimation &amp; Payment Forms Builder"
     data-impression-list="Search Results: Category"
     data-impression-brand="loopus"
     data-impression-category="codecanyon.net/wordpress/forms"
>
  <div class="shared-item_cards-list-image_card_component__contentWrapper shared-item_cards-list-image_card_component__landscapeImage">
    <a class="shared-item_cards-list-image_card_component__itemLinkOverlay"
       href="https://codecanyon.net/item/wp-cost-estimation-payment-forms-builder/7818230"
       title="WP Cost Estimation &amp; Payment Forms Builder"
       aria-label="View WP Cost Estimation &amp; Payment Forms Builder"
       data-turbo="false"
       data-action="analytics-event#send"
       data-analytics-event="[[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;whitespace&quot;,&quot;eventValue&quot;:7818230}]]"></a>
    <div class="shared-item_cards-list-image_card_component__imageWrapper">
      <div class="shared-item_cards-preview_image_component__carousel shared-item_cards-preview_image_component__singleImage"
  style="padding-bottom: 50.847457627118644%"
>
  <a class="shared-item_cards-preview_image_component__imageLink" data-turbo="false" data-action="analytics-event#send" data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;loopus&quot;,&quot;category&quot;:&quot;codecanyon.net/wordpress/forms&quot;,&quot;id&quot;:7818230,&quot;list&quot;:&quot;Search Results: Category&quot;,&quot;name&quot;:&quot;WP Cost Estimation \u0026 Payment Forms Builder&quot;,&quot;position&quot;:21}],[&quot;ec:setAction&quot;,&quot;click&quot;,{&quot;list&quot;:&quot;Search Results: Category&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Product click: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;image&quot;,&quot;eventValue&quot;:7818230}]]" href="https://codecanyon.net/item/wp-cost-estimation-payment-forms-builder/7818230">
      <img src="https://codecanyon.img.customer.envatousercontent.com/files/482893141/lfb_img_new.png?auto=compress%2Cformat&amp;fit=crop&amp;crop=top&amp;w=590&amp;h=300&amp;s=26a6357818754a2b929d8b4adec99bfe"
        loading="lazy"
        style="left: 0%"
        class="shared-item_cards-preview_image_component__image"
        alt="WP Cost Estimation &amp; Payment Forms Builder"
        title="WP Cost Estimation &amp; Payment Forms Builder"
        width="590"
        height="300"
        data-controller="image-preview"
        data-action="error->image-preview#setFallback"
        data-fallback="https://previews.customer.envatousercontent.com/files/482893141/lfb_img_new.png"
        data-carousel-target="image"
      />
</a></div>

      <div class="shared-item_cards-list-image_card_component__gradient" style="padding-top: 50.847457627118644%;">
        <div class="shared-item_cards-list-image_card_component__buttons">
          <a
  href="/my/bookmarks/new?item_id=7818230"
  class="shared-item_cards-collection_button_component__collection"
  role="button"
  aria-label="Add to collection"
  title="Add to collection"
  rel="nofollow"
  data-controller="collection-button"
  data-action="collection-button#open analytics-event#send"
  data-bookmark-button-target="bookmarkButton"
  data-item-id="7818230"
  data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;Item&quot;,&quot;eventLabel&quot;:&quot;collection;click&quot;,&quot;eventValue&quot;:7818230}"
>
  <span class="shared-item_cards-collection_button_component__icon">
    <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#collection'></use>
</svg>

  </span>
</a>

          <span class="shared-item_cards-list-image_card_component__buttonSeparator"></span>
          <form method="post"
      action="/my/favorites/7818230"
      data-controller="favorite-button"
      data-action="submit->favorite-button#submit favoritesStoreUpdated@window->favorite-button#updateFromStore">
  <input type="hidden" name="_method" value="post" data-favorite-button-target="formMethod">
  <button type="submit"
          aria-label="Add to Favorites"
          class="shared-item_cards-favorite_button_component__favoriteButton"
          data-favorite-button-target="favoriteButton"
          data-favorited="false"
          data-item-id="7818230">
    <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#heart'></use>
</svg>

  </button>
</form>

        </div>
      </div>
    </div>
    <span class="shared-item_cards-sash_component__sash shared-item_cards-sash_component__sash_trending" style="width: 50px; height: 50px;">
  <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#sash_trending'></use>
</svg>

</span>

    <div class="shared-item_cards-list-image_card_component__detailsWrapper">
      <h3 class="shared-item_cards-item_name_component__root">
  <a class="shared-item_cards-item_name_component__itemNameLink" tabindex="0" data-turbo="false" data-action="analytics-event#send" data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;loopus&quot;,&quot;category&quot;:&quot;codecanyon.net/wordpress/forms&quot;,&quot;id&quot;:7818230,&quot;list&quot;:&quot;Search Results: Category&quot;,&quot;name&quot;:&quot;WP Cost Estimation \u0026 Payment Forms Builder&quot;,&quot;position&quot;:21}],[&quot;ec:setAction&quot;,&quot;click&quot;,{&quot;list&quot;:&quot;Search Results: Category&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Product click: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;item title&quot;,&quot;eventValue&quot;:7818230}]]" href="https://codecanyon.net/item/wp-cost-estimation-payment-forms-builder/7818230">WP Cost Estimation &amp; Payment Forms Builder</a>
</h3>

      <div>
        <div class="shared-item_cards-author_category_component__root">
  <i>by</i>
  <a
    href="https://codecanyon.net/user/loopus"
    class="shared-item_cards-author_category_component__link"
    rel="nofollow"
    data-turbo="false"
      data-action="analytics-event#send"
      data-analytics-event="[[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;author name&quot;,&quot;eventValue&quot;:7818230}]]"
  >
    loopus
  </a>
  in
  <a
    href="/category/wordpress/forms"
    class="shared-item_cards-author_category_component__link"
      data-action="analytics-event#send"
      data-analytics-event="[[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;category&quot;,&quot;eventValue&quot;:7818230}]]"
    }
  >
    Forms
  </a>
</div>

      </div>
      <div class="shared-item_cards-list-image_card_component__attrsWrapper">
          <ul>
    <li class="shared-item_cards-attributes_component__attribute">
      <span class="shared-item_cards-attributes_component__label">Software Version: </span>
      <span class="shared-item_cards-attributes_component__value">WordPress 4.9.x - 6.4.x</span>
    </li>
    <li class="shared-item_cards-attributes_component__attribute">
      <span class="shared-item_cards-attributes_component__label">Compatible With: </span>
      <span class="shared-item_cards-attributes_component__value">Beaver Builder, Block Editor, BuddyPress 10.x.x, Easy Digital Downloads, Elementor, Elementor Pro, Gravity Forms, Visual Composer, WooCommerce 5.x.x - 7.x.x, WPBakery Page Builder, Cornerstone, Bootstrap 5.x</span>
    </li>
</ul>

          <div class="shared-item_cards-included_files_component__root">
  File Types Included:
  <ul>
      <li class="shared-item_cards-included_files_component__fileType">JavaScript JS</li>
      <li class="shared-item_cards-included_files_component__fileType">HTML</li>
      <li class="shared-item_cards-included_files_component__fileType">CSS</li>
      <li class="shared-item_cards-included_files_component__fileType">PHP</li>
  </ul>
</div>

      </div>
    </div>
    <div class="shared-item_cards-list-image_card_component__priceWrapper">
      <div class="shared-item_cards-list-image_card_component__info">
        <div class="shared-item_cards-list-image_card_component__favAndCollections">
          <a
  href="/my/bookmarks/new?item_id=7818230"
  class="shared-item_cards-collection_button_component__collection"
  role="button"
  aria-label="Add to collection"
  title="Add to collection"
  rel="nofollow"
  data-controller="collection-button"
  data-action="collection-button#open analytics-event#send"
  data-bookmark-button-target="bookmarkButton"
  data-item-id="7818230"
  data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;Item&quot;,&quot;eventLabel&quot;:&quot;collection;click&quot;,&quot;eventValue&quot;:7818230}"
>
  <span class="shared-item_cards-collection_button_component__icon">
    <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#collection'></use>
</svg>

  </span>
</a>

          <span class="shared-item_cards-list-image_card_component__buttonSeparator"></span>
          <form method="post"
      action="/my/favorites/7818230"
      data-controller="favorite-button"
      data-action="submit->favorite-button#submit favoritesStoreUpdated@window->favorite-button#updateFromStore">
  <input type="hidden" name="_method" value="post" data-favorite-button-target="formMethod">
  <button type="submit"
          aria-label="Add to Favorites"
          class="shared-item_cards-favorite_button_component__favoriteButton"
          data-favorite-button-target="favoriteButton"
          data-favorited="false"
          data-item-id="7818230">
    <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#heart'></use>
</svg>

  </button>
</form>

        </div>
        <div class="shared-item_cards-price_component__root">
    $79
</div>

        <div class="shared-item_cards-list-image_card_component__ratingWrapper"><div class="shared-stars_rating_component__root">
  <div
    class="shared-stars_rating_component__starRating"
    role="img"
    aria-label="Rated 4.85 out of 5, 1K reviews"
  >
    <span class="shared-stars_rating_component__star">
      <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#stars_5.0'></use>
</svg>

    </span>
  </div>
  <span aria-hidden="true" class="shared-stars_rating_component__starRatingCount">(1K)</span>
</div>
</div>
        <div class="shared-item_cards-sales_component__root">
  21.4K Sales
</div>

        <div class="shared-item_cards-list-image_card_component__lastUpdated shared-item_cards-list-image_card_component__tinyText">
          Last updated: 03 Jan 24
        </div>
      </div>
      <div class="shared-item_cards-list-image_card_component__coverWrapper">
            <a
  class="shared-item_cards-add_to_cart_button_component__root shared-item_cards-add_to_cart_button_component__compact"
  role="button"
  title="Add to cart"
  aria-label="Add to cart"
  href="/cart/configure_before_adding/7818230"
  rel="nofollow"
  data-controller="cart-button modal-commander"
  data-action="click->modal-commander#open cartStoreUpdated@window->cart-button#updateFromStore analytics-event#send"
  data-modal-commander-url-value="/my/cart_entries?item_id=7818230"
  data-modal-commander-method-value="POST"
  data-cart-button-item-id-value="7818230"
  data-cart-button-in-cart-class="shared-item_cards-add_to_cart_button_component__inCart"
  data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;loopus&quot;,&quot;category&quot;:&quot;codecanyon.net/wordpress/forms&quot;,&quot;id&quot;:7818230,&quot;list&quot;:&quot;Search Results: Category&quot;,&quot;name&quot;:&quot;WP Cost Estimation \u0026 Payment Forms Builder&quot;,&quot;position&quot;:21}],[&quot;ec:setAction&quot;,&quot;add&quot;],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Add to cart: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;cart button&quot;,&quot;eventValue&quot;:7818230}]]"
>
    <span class="shared-item_cards-add_to_cart_button_component__cartIcon">
      <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#cart'></use>
</svg>

    </span>
</a>

          <a href="https://codecanyon.net/item/wp-cost-estimation-payment-forms-builder/full_screen_preview/7818230"
   class="shared-item_cards-preview_button_with_analytics_component__root"
   target="_blank"
   rel="noopener"
   data-action="analytics-event#send"
   data-analytics-event="{&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click;button&quot;,&quot;eventLabel&quot;:&quot;Preview;7818230&quot;,&quot;hitType&quot;:&quot;event&quot;}">
  Live Preview
</a>

      </div>
    </div>
  </div>
</div>

</div>

    <div class="shared-item_cards-card_component__root">
  <div class="shared-item_cards-list-image_card_component__root"
     data-analytics-item-impressions-target="item"
     data-favorites-loader-target="item"
     data-item-id="9319434"
     data-impression-position="22"
     data-impression-name="Social Stream for WordPress — Add Facebook Instagram Twitter Youtube Feed to WordPress Website"
     data-impression-list="Search Results: Category"
     data-impression-brand="looks_awesome"
     data-impression-category="codecanyon.net/wordpress/social-networking"
>
  <div class="shared-item_cards-list-image_card_component__contentWrapper shared-item_cards-list-image_card_component__landscapeImage">
    <a class="shared-item_cards-list-image_card_component__itemLinkOverlay"
       href="https://codecanyon.net/item/flowflow-wordpress-social-stream-plugin/9319434"
       title="Social Stream for WordPress — Add Facebook Instagram Twitter Youtube Feed to WordPress Website"
       aria-label="View Social Stream for WordPress — Add Facebook Instagram Twitter Youtube Feed to WordPress Website"
       data-turbo="false"
       data-action="analytics-event#send"
       data-analytics-event="[[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;whitespace&quot;,&quot;eventValue&quot;:9319434}]]"></a>
    <div class="shared-item_cards-list-image_card_component__imageWrapper">
      <div class="shared-item_cards-preview_image_component__carousel shared-item_cards-preview_image_component__singleImage"
  style="padding-bottom: 50.847457627118644%"
>
  <a class="shared-item_cards-preview_image_component__imageLink" data-turbo="false" data-action="analytics-event#send" data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;looks_awesome&quot;,&quot;category&quot;:&quot;codecanyon.net/wordpress/social-networking&quot;,&quot;id&quot;:9319434,&quot;list&quot;:&quot;Search Results: Category&quot;,&quot;name&quot;:&quot;Social Stream for WordPress — Add Facebook Instagram Twitter Youtube Feed to WordPress Website&quot;,&quot;position&quot;:22}],[&quot;ec:setAction&quot;,&quot;click&quot;,{&quot;list&quot;:&quot;Search Results: Category&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Product click: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;image&quot;,&quot;eventValue&quot;:9319434}]]" href="https://codecanyon.net/item/flowflow-wordpress-social-stream-plugin/9319434">
      <img src="https://codecanyon.img.customer.envatousercontent.com/files/370829829/Banner_Flow_Flow_Social_Feed_4.png?auto=compress%2Cformat&amp;fit=crop&amp;crop=top&amp;w=590&amp;h=300&amp;s=73688246e924bcab8a7855f2ad359e96"
        loading="lazy"
        style="left: 0%"
        class="shared-item_cards-preview_image_component__image"
        alt="Social Stream for WordPress — Add Facebook Instagram Twitter Youtube Feed to WordPress Website"
        title="Social Stream for WordPress — Add Facebook Instagram Twitter Youtube Feed to WordPress Website"
        width="590"
        height="300"
        data-controller="image-preview"
        data-action="error->image-preview#setFallback"
        data-fallback="https://previews.customer.envatousercontent.com/files/370829829/Banner_Flow_Flow_Social_Feed_4.png"
        data-carousel-target="image"
      />
</a></div>

      <div class="shared-item_cards-list-image_card_component__gradient" style="padding-top: 50.847457627118644%;">
        <div class="shared-item_cards-list-image_card_component__buttons">
          <a
  href="/my/bookmarks/new?item_id=9319434"
  class="shared-item_cards-collection_button_component__collection"
  role="button"
  aria-label="Add to collection"
  title="Add to collection"
  rel="nofollow"
  data-controller="collection-button"
  data-action="collection-button#open analytics-event#send"
  data-bookmark-button-target="bookmarkButton"
  data-item-id="9319434"
  data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;Item&quot;,&quot;eventLabel&quot;:&quot;collection;click&quot;,&quot;eventValue&quot;:9319434}"
>
  <span class="shared-item_cards-collection_button_component__icon">
    <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#collection'></use>
</svg>

  </span>
</a>

          <span class="shared-item_cards-list-image_card_component__buttonSeparator"></span>
          <form method="post"
      action="/my/favorites/9319434"
      data-controller="favorite-button"
      data-action="submit->favorite-button#submit favoritesStoreUpdated@window->favorite-button#updateFromStore">
  <input type="hidden" name="_method" value="post" data-favorite-button-target="formMethod">
  <button type="submit"
          aria-label="Add to Favorites"
          class="shared-item_cards-favorite_button_component__favoriteButton"
          data-favorite-button-target="favoriteButton"
          data-favorited="false"
          data-item-id="9319434">
    <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#heart'></use>
</svg>

  </button>
</form>

        </div>
      </div>
    </div>
    <span class="shared-item_cards-sash_component__sash shared-item_cards-sash_component__sash_trending" style="width: 50px; height: 50px;">
  <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#sash_trending'></use>
</svg>

</span>

    <div class="shared-item_cards-list-image_card_component__detailsWrapper">
      <h3 class="shared-item_cards-item_name_component__root">
  <a class="shared-item_cards-item_name_component__itemNameLink" tabindex="0" data-turbo="false" data-action="analytics-event#send" data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;looks_awesome&quot;,&quot;category&quot;:&quot;codecanyon.net/wordpress/social-networking&quot;,&quot;id&quot;:9319434,&quot;list&quot;:&quot;Search Results: Category&quot;,&quot;name&quot;:&quot;Social Stream for WordPress — Add Facebook Instagram Twitter Youtube Feed to WordPress Website&quot;,&quot;position&quot;:22}],[&quot;ec:setAction&quot;,&quot;click&quot;,{&quot;list&quot;:&quot;Search Results: Category&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Product click: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;item title&quot;,&quot;eventValue&quot;:9319434}]]" href="https://codecanyon.net/item/flowflow-wordpress-social-stream-plugin/9319434">Social Stream for WordPress — Add Facebook Instagram Twitter Youtube Feed to WordPress Website</a>
</h3>

      <div>
        <div class="shared-item_cards-author_category_component__root">
  <i>by</i>
  <a
    href="https://codecanyon.net/user/looks_awesome"
    class="shared-item_cards-author_category_component__link"
    rel="nofollow"
    data-turbo="false"
      data-action="analytics-event#send"
      data-analytics-event="[[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;author name&quot;,&quot;eventValue&quot;:9319434}]]"
  >
    looks_awesome
  </a>
  in
  <a
    href="/category/wordpress/social-networking"
    class="shared-item_cards-author_category_component__link"
      data-action="analytics-event#send"
      data-analytics-event="[[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;category&quot;,&quot;eventValue&quot;:9319434}]]"
    }
  >
    Social Networking
  </a>
</div>

      </div>
      <div class="shared-item_cards-list-image_card_component__attrsWrapper">
          <ul>
    <li class="shared-item_cards-attributes_component__attribute">
      <span class="shared-item_cards-attributes_component__label">Software Version: </span>
      <span class="shared-item_cards-attributes_component__value">WordPress 5.0.x - 6.3.x</span>
    </li>
    <li class="shared-item_cards-attributes_component__attribute">
      <span class="shared-item_cards-attributes_component__label">Compatible With: </span>
      <span class="shared-item_cards-attributes_component__value">Elementor, Elementor Pro, WooCommerce 6.x.x, WPBakery Page Builder</span>
    </li>
</ul>

          <div class="shared-item_cards-included_files_component__root">
  File Types Included:
  <ul>
      <li class="shared-item_cards-included_files_component__fileType">JavaScript JS</li>
      <li class="shared-item_cards-included_files_component__fileType">CSS</li>
      <li class="shared-item_cards-included_files_component__fileType">PHP</li>
  </ul>
</div>

      </div>
    </div>
    <div class="shared-item_cards-list-image_card_component__priceWrapper">
      <div class="shared-item_cards-list-image_card_component__info">
        <div class="shared-item_cards-list-image_card_component__favAndCollections">
          <a
  href="/my/bookmarks/new?item_id=9319434"
  class="shared-item_cards-collection_button_component__collection"
  role="button"
  aria-label="Add to collection"
  title="Add to collection"
  rel="nofollow"
  data-controller="collection-button"
  data-action="collection-button#open analytics-event#send"
  data-bookmark-button-target="bookmarkButton"
  data-item-id="9319434"
  data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;Item&quot;,&quot;eventLabel&quot;:&quot;collection;click&quot;,&quot;eventValue&quot;:9319434}"
>
  <span class="shared-item_cards-collection_button_component__icon">
    <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#collection'></use>
</svg>

  </span>
</a>

          <span class="shared-item_cards-list-image_card_component__buttonSeparator"></span>
          <form method="post"
      action="/my/favorites/9319434"
      data-controller="favorite-button"
      data-action="submit->favorite-button#submit favoritesStoreUpdated@window->favorite-button#updateFromStore">
  <input type="hidden" name="_method" value="post" data-favorite-button-target="formMethod">
  <button type="submit"
          aria-label="Add to Favorites"
          class="shared-item_cards-favorite_button_component__favoriteButton"
          data-favorite-button-target="favoriteButton"
          data-favorited="false"
          data-item-id="9319434">
    <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#heart'></use>
</svg>

  </button>
</form>

        </div>
        <div class="shared-item_cards-price_component__root">
    $49
</div>

        <div class="shared-item_cards-list-image_card_component__ratingWrapper"><div class="shared-stars_rating_component__root">
  <div
    class="shared-stars_rating_component__starRating"
    role="img"
    aria-label="Rated 4.66 out of 5, 640 reviews"
  >
    <span class="shared-stars_rating_component__star">
      <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#stars_4.5'></use>
</svg>

    </span>
  </div>
  <span aria-hidden="true" class="shared-stars_rating_component__starRatingCount">(640)</span>
</div>
</div>
        <div class="shared-item_cards-sales_component__root">
  22.4K Sales
</div>

        <div class="shared-item_cards-list-image_card_component__lastUpdated shared-item_cards-list-image_card_component__tinyText">
          Last updated: 09 May 23
        </div>
      </div>
      <div class="shared-item_cards-list-image_card_component__coverWrapper">
            <a
  class="shared-item_cards-add_to_cart_button_component__root shared-item_cards-add_to_cart_button_component__compact"
  role="button"
  title="Add to cart"
  aria-label="Add to cart"
  href="/cart/configure_before_adding/9319434"
  rel="nofollow"
  data-controller="cart-button modal-commander"
  data-action="click->modal-commander#open cartStoreUpdated@window->cart-button#updateFromStore analytics-event#send"
  data-modal-commander-url-value="/my/cart_entries?item_id=9319434"
  data-modal-commander-method-value="POST"
  data-cart-button-item-id-value="9319434"
  data-cart-button-in-cart-class="shared-item_cards-add_to_cart_button_component__inCart"
  data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;looks_awesome&quot;,&quot;category&quot;:&quot;codecanyon.net/wordpress/social-networking&quot;,&quot;id&quot;:9319434,&quot;list&quot;:&quot;Search Results: Category&quot;,&quot;name&quot;:&quot;Social Stream for WordPress — Add Facebook Instagram Twitter Youtube Feed to WordPress Website&quot;,&quot;position&quot;:22}],[&quot;ec:setAction&quot;,&quot;add&quot;],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Add to cart: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;cart button&quot;,&quot;eventValue&quot;:9319434}]]"
>
    <span class="shared-item_cards-add_to_cart_button_component__cartIcon">
      <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#cart'></use>
</svg>

    </span>
</a>

          <a href="https://codecanyon.net/item/flowflow-wordpress-social-stream-plugin/full_screen_preview/9319434"
   class="shared-item_cards-preview_button_with_analytics_component__root"
   target="_blank"
   rel="noopener"
   data-action="analytics-event#send"
   data-analytics-event="{&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click;button&quot;,&quot;eventLabel&quot;:&quot;Preview;9319434&quot;,&quot;hitType&quot;:&quot;event&quot;}">
  Live Preview
</a>

      </div>
    </div>
  </div>
</div>

</div>

    <div class="shared-item_cards-card_component__root">
  <div class="shared-item_cards-list-image_card_component__root"
     data-analytics-item-impressions-target="item"
     data-favorites-loader-target="item"
     data-item-id="31634508"
     data-impression-position="23"
     data-impression-name="Filter Everything — WordPress/WooCommerce Product Filter"
     data-impression-list="Search Results: Category"
     data-impression-brand="Stepasyuk"
     data-impression-category="codecanyon.net/wordpress/ecommerce/woocommerce"
>
  <div class="shared-item_cards-list-image_card_component__contentWrapper shared-item_cards-list-image_card_component__landscapeImage">
    <a class="shared-item_cards-list-image_card_component__itemLinkOverlay"
       href="https://codecanyon.net/item/filter-everything-wordpress-woocommerce-filter/31634508"
       title="Filter Everything — WordPress/WooCommerce Product Filter"
       aria-label="View Filter Everything — WordPress/WooCommerce Product Filter"
       data-turbo="false"
       data-action="analytics-event#send"
       data-analytics-event="[[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;whitespace&quot;,&quot;eventValue&quot;:31634508}]]"></a>
    <div class="shared-item_cards-list-image_card_component__imageWrapper">
      <div class="shared-item_cards-preview_image_component__carousel shared-item_cards-preview_image_component__singleImage"
  style="padding-bottom: 50.847457627118644%"
>
  <a class="shared-item_cards-preview_image_component__imageLink" data-turbo="false" data-action="analytics-event#send" data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;Stepasyuk&quot;,&quot;category&quot;:&quot;codecanyon.net/wordpress/ecommerce/woocommerce&quot;,&quot;id&quot;:31634508,&quot;list&quot;:&quot;Search Results: Category&quot;,&quot;name&quot;:&quot;Filter Everything — WordPress/WooCommerce Product Filter&quot;,&quot;position&quot;:23}],[&quot;ec:setAction&quot;,&quot;click&quot;,{&quot;list&quot;:&quot;Search Results: Category&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Product click: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;image&quot;,&quot;eventValue&quot;:31634508}]]" href="https://codecanyon.net/item/filter-everything-wordpress-woocommerce-filter/31634508">
      <img src="https://codecanyon.img.customer.envatousercontent.com/files/455229659/Envato_Head_Image_Kufam_align.png?auto=compress%2Cformat&amp;fit=crop&amp;crop=top&amp;w=590&amp;h=300&amp;s=312deb1711c71e295f0a37b0bda7c4d1"
        loading="lazy"
        style="left: 0%"
        class="shared-item_cards-preview_image_component__image"
        alt="Filter Everything — WordPress/WooCommerce Product Filter"
        title="Filter Everything — WordPress/WooCommerce Product Filter"
        width="590"
        height="300"
        data-controller="image-preview"
        data-action="error->image-preview#setFallback"
        data-fallback="https://previews.customer.envatousercontent.com/files/455229659/Envato_Head_Image_Kufam_align.png"
        data-carousel-target="image"
      />
</a></div>

      <div class="shared-item_cards-list-image_card_component__gradient" style="padding-top: 50.847457627118644%;">
        <div class="shared-item_cards-list-image_card_component__buttons">
          <a
  href="/my/bookmarks/new?item_id=31634508"
  class="shared-item_cards-collection_button_component__collection"
  role="button"
  aria-label="Add to collection"
  title="Add to collection"
  rel="nofollow"
  data-controller="collection-button"
  data-action="collection-button#open analytics-event#send"
  data-bookmark-button-target="bookmarkButton"
  data-item-id="31634508"
  data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;Item&quot;,&quot;eventLabel&quot;:&quot;collection;click&quot;,&quot;eventValue&quot;:31634508}"
>
  <span class="shared-item_cards-collection_button_component__icon">
    <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#collection'></use>
</svg>

  </span>
</a>

          <span class="shared-item_cards-list-image_card_component__buttonSeparator"></span>
          <form method="post"
      action="/my/favorites/31634508"
      data-controller="favorite-button"
      data-action="submit->favorite-button#submit favoritesStoreUpdated@window->favorite-button#updateFromStore">
  <input type="hidden" name="_method" value="post" data-favorite-button-target="formMethod">
  <button type="submit"
          aria-label="Add to Favorites"
          class="shared-item_cards-favorite_button_component__favoriteButton"
          data-favorite-button-target="favoriteButton"
          data-favorited="false"
          data-item-id="31634508">
    <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#heart'></use>
</svg>

  </button>
</form>

        </div>
      </div>
    </div>
    <span class="shared-item_cards-sash_component__sash shared-item_cards-sash_component__sash_trending" style="width: 50px; height: 50px;">
  <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#sash_trending'></use>
</svg>

</span>

    <div class="shared-item_cards-list-image_card_component__detailsWrapper">
      <h3 class="shared-item_cards-item_name_component__root">
  <a class="shared-item_cards-item_name_component__itemNameLink" tabindex="0" data-turbo="false" data-action="analytics-event#send" data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;Stepasyuk&quot;,&quot;category&quot;:&quot;codecanyon.net/wordpress/ecommerce/woocommerce&quot;,&quot;id&quot;:31634508,&quot;list&quot;:&quot;Search Results: Category&quot;,&quot;name&quot;:&quot;Filter Everything — WordPress/WooCommerce Product Filter&quot;,&quot;position&quot;:23}],[&quot;ec:setAction&quot;,&quot;click&quot;,{&quot;list&quot;:&quot;Search Results: Category&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Product click: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;item title&quot;,&quot;eventValue&quot;:31634508}]]" href="https://codecanyon.net/item/filter-everything-wordpress-woocommerce-filter/31634508">Filter Everything — WordPress/WooCommerce Product Filter</a>
</h3>

      <div>
        <div class="shared-item_cards-author_category_component__root">
  <i>by</i>
  <a
    href="https://codecanyon.net/user/stepasyuk"
    class="shared-item_cards-author_category_component__link"
    rel="nofollow"
    data-turbo="false"
      data-action="analytics-event#send"
      data-analytics-event="[[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;author name&quot;,&quot;eventValue&quot;:31634508}]]"
  >
    Stepasyuk
  </a>
  in
  <a
    href="/category/wordpress/ecommerce/woocommerce"
    class="shared-item_cards-author_category_component__link"
      data-action="analytics-event#send"
      data-analytics-event="[[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;category&quot;,&quot;eventValue&quot;:31634508}]]"
    }
  >
    WooCommerce
  </a>
</div>

      </div>
      <div class="shared-item_cards-list-image_card_component__attrsWrapper">
          <ul>
    <li class="shared-item_cards-attributes_component__attribute">
      <span class="shared-item_cards-attributes_component__label">Software Version: </span>
      <span class="shared-item_cards-attributes_component__value">WordPress 4.9.x - 6.0.x</span>
    </li>
    <li class="shared-item_cards-attributes_component__attribute">
      <span class="shared-item_cards-attributes_component__label">Compatible With: </span>
      <span class="shared-item_cards-attributes_component__value">Aesop Story Engine, Elementor, Elementor Pro, Gravity Forms, Layers WP, Visual Composer, WooCommerce 6.x.x, WP EasyCart, WPML</span>
    </li>
</ul>

          <div class="shared-item_cards-included_files_component__root">
  File Types Included:
  <ul>
      <li class="shared-item_cards-included_files_component__fileType">JavaScript JS</li>
      <li class="shared-item_cards-included_files_component__fileType">CSS</li>
      <li class="shared-item_cards-included_files_component__fileType">PHP</li>
  </ul>
</div>

      </div>
    </div>
    <div class="shared-item_cards-list-image_card_component__priceWrapper">
      <div class="shared-item_cards-list-image_card_component__info">
        <div class="shared-item_cards-list-image_card_component__favAndCollections">
          <a
  href="/my/bookmarks/new?item_id=31634508"
  class="shared-item_cards-collection_button_component__collection"
  role="button"
  aria-label="Add to collection"
  title="Add to collection"
  rel="nofollow"
  data-controller="collection-button"
  data-action="collection-button#open analytics-event#send"
  data-bookmark-button-target="bookmarkButton"
  data-item-id="31634508"
  data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;Item&quot;,&quot;eventLabel&quot;:&quot;collection;click&quot;,&quot;eventValue&quot;:31634508}"
>
  <span class="shared-item_cards-collection_button_component__icon">
    <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#collection'></use>
</svg>

  </span>
</a>

          <span class="shared-item_cards-list-image_card_component__buttonSeparator"></span>
          <form method="post"
      action="/my/favorites/31634508"
      data-controller="favorite-button"
      data-action="submit->favorite-button#submit favoritesStoreUpdated@window->favorite-button#updateFromStore">
  <input type="hidden" name="_method" value="post" data-favorite-button-target="formMethod">
  <button type="submit"
          aria-label="Add to Favorites"
          class="shared-item_cards-favorite_button_component__favoriteButton"
          data-favorite-button-target="favoriteButton"
          data-favorited="false"
          data-item-id="31634508">
    <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#heart'></use>
</svg>

  </button>
</form>

        </div>
        <div class="shared-item_cards-price_component__root">
    $40
</div>

        <div class="shared-item_cards-list-image_card_component__ratingWrapper"><div class="shared-stars_rating_component__root">
  <div
    class="shared-stars_rating_component__starRating"
    role="img"
    aria-label="Rated 4.91 out of 5, 217 reviews"
  >
    <span class="shared-stars_rating_component__star">
      <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#stars_5.0'></use>
</svg>

    </span>
  </div>
  <span aria-hidden="true" class="shared-stars_rating_component__starRatingCount">(217)</span>
</div>
</div>
        <div class="shared-item_cards-sales_component__root">
  6.6K Sales
</div>

        <div class="shared-item_cards-list-image_card_component__lastUpdated shared-item_cards-list-image_card_component__tinyText">
          Last updated: 11 Jan 24
        </div>
      </div>
      <div class="shared-item_cards-list-image_card_component__coverWrapper">
            <a
  class="shared-item_cards-add_to_cart_button_component__root shared-item_cards-add_to_cart_button_component__compact"
  role="button"
  title="Add to cart"
  aria-label="Add to cart"
  href="/cart/configure_before_adding/31634508"
  rel="nofollow"
  data-controller="cart-button modal-commander"
  data-action="click->modal-commander#open cartStoreUpdated@window->cart-button#updateFromStore analytics-event#send"
  data-modal-commander-url-value="/my/cart_entries?item_id=31634508"
  data-modal-commander-method-value="POST"
  data-cart-button-item-id-value="31634508"
  data-cart-button-in-cart-class="shared-item_cards-add_to_cart_button_component__inCart"
  data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;Stepasyuk&quot;,&quot;category&quot;:&quot;codecanyon.net/wordpress/ecommerce/woocommerce&quot;,&quot;id&quot;:31634508,&quot;list&quot;:&quot;Search Results: Category&quot;,&quot;name&quot;:&quot;Filter Everything — WordPress/WooCommerce Product Filter&quot;,&quot;position&quot;:23}],[&quot;ec:setAction&quot;,&quot;add&quot;],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Add to cart: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;cart button&quot;,&quot;eventValue&quot;:31634508}]]"
>
    <span class="shared-item_cards-add_to_cart_button_component__cartIcon">
      <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#cart'></use>
</svg>

    </span>
</a>

          <a href="https://codecanyon.net/item/filter-everything-wordpress-woocommerce-filter/full_screen_preview/31634508"
   class="shared-item_cards-preview_button_with_analytics_component__root"
   target="_blank"
   rel="noopener"
   data-action="analytics-event#send"
   data-analytics-event="{&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click;button&quot;,&quot;eventLabel&quot;:&quot;Preview;31634508&quot;,&quot;hitType&quot;:&quot;event&quot;}">
  Live Preview
</a>

      </div>
    </div>
  </div>
</div>

</div>

    <div class="shared-item_cards-card_component__root">
  <div class="shared-item_cards-list-image_card_component__root"
     data-analytics-item-impressions-target="item"
     data-favorites-loader-target="item"
     data-item-id="6394476"
     data-impression-position="24"
     data-impression-name="Easy Social Share Buttons for WordPress"
     data-impression-list="Search Results: Category"
     data-impression-brand="appscreo"
     data-impression-category="codecanyon.net/wordpress/social-networking"
>
  <div class="shared-item_cards-list-image_card_component__contentWrapper shared-item_cards-list-image_card_component__landscapeImage">
    <a class="shared-item_cards-list-image_card_component__itemLinkOverlay"
       href="https://codecanyon.net/item/easy-social-share-buttons-for-wordpress/6394476"
       title="Easy Social Share Buttons for WordPress"
       aria-label="View Easy Social Share Buttons for WordPress"
       data-turbo="false"
       data-action="analytics-event#send"
       data-analytics-event="[[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;whitespace&quot;,&quot;eventValue&quot;:6394476}]]"></a>
    <div class="shared-item_cards-list-image_card_component__imageWrapper">
      <div class="shared-item_cards-preview_image_component__carousel shared-item_cards-preview_image_component__singleImage"
  style="padding-bottom: 50.847457627118644%"
>
  <a class="shared-item_cards-preview_image_component__imageLink" data-turbo="false" data-action="analytics-event#send" data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;appscreo&quot;,&quot;category&quot;:&quot;codecanyon.net/wordpress/social-networking&quot;,&quot;id&quot;:6394476,&quot;list&quot;:&quot;Search Results: Category&quot;,&quot;name&quot;:&quot;Easy Social Share Buttons for WordPress&quot;,&quot;position&quot;:24}],[&quot;ec:setAction&quot;,&quot;click&quot;,{&quot;list&quot;:&quot;Search Results: Category&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Product click: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;image&quot;,&quot;eventValue&quot;:6394476}]]" href="https://codecanyon.net/item/easy-social-share-buttons-for-wordpress/6394476">
      <img src="https://codecanyon.img.customer.envatousercontent.com/files/479492687/cc-preview-big8-02.png?auto=compress%2Cformat&amp;fit=crop&amp;crop=top&amp;w=590&amp;h=300&amp;s=c5f8642db0080399ebdfcef00ff037c5"
        loading="lazy"
        style="left: 0%"
        class="shared-item_cards-preview_image_component__image"
        alt="Easy Social Share Buttons for WordPress"
        title="Easy Social Share Buttons for WordPress"
        width="590"
        height="300"
        data-controller="image-preview"
        data-action="error->image-preview#setFallback"
        data-fallback="https://previews.customer.envatousercontent.com/files/479492687/cc-preview-big8-02.png"
        data-carousel-target="image"
      />
</a></div>

      <div class="shared-item_cards-list-image_card_component__gradient" style="padding-top: 50.847457627118644%;">
        <div class="shared-item_cards-list-image_card_component__buttons">
          <a
  href="/my/bookmarks/new?item_id=6394476"
  class="shared-item_cards-collection_button_component__collection"
  role="button"
  aria-label="Add to collection"
  title="Add to collection"
  rel="nofollow"
  data-controller="collection-button"
  data-action="collection-button#open analytics-event#send"
  data-bookmark-button-target="bookmarkButton"
  data-item-id="6394476"
  data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;Item&quot;,&quot;eventLabel&quot;:&quot;collection;click&quot;,&quot;eventValue&quot;:6394476}"
>
  <span class="shared-item_cards-collection_button_component__icon">
    <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#collection'></use>
</svg>

  </span>
</a>

          <span class="shared-item_cards-list-image_card_component__buttonSeparator"></span>
          <form method="post"
      action="/my/favorites/6394476"
      data-controller="favorite-button"
      data-action="submit->favorite-button#submit favoritesStoreUpdated@window->favorite-button#updateFromStore">
  <input type="hidden" name="_method" value="post" data-favorite-button-target="formMethod">
  <button type="submit"
          aria-label="Add to Favorites"
          class="shared-item_cards-favorite_button_component__favoriteButton"
          data-favorite-button-target="favoriteButton"
          data-favorited="false"
          data-item-id="6394476">
    <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#heart'></use>
</svg>

  </button>
</form>

        </div>
      </div>
    </div>
    <span class="shared-item_cards-sash_component__sash shared-item_cards-sash_component__sash_trending" style="width: 50px; height: 50px;">
  <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#sash_trending'></use>
</svg>

</span>

    <div class="shared-item_cards-list-image_card_component__detailsWrapper">
      <h3 class="shared-item_cards-item_name_component__root">
  <a class="shared-item_cards-item_name_component__itemNameLink" tabindex="0" data-turbo="false" data-action="analytics-event#send" data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;appscreo&quot;,&quot;category&quot;:&quot;codecanyon.net/wordpress/social-networking&quot;,&quot;id&quot;:6394476,&quot;list&quot;:&quot;Search Results: Category&quot;,&quot;name&quot;:&quot;Easy Social Share Buttons for WordPress&quot;,&quot;position&quot;:24}],[&quot;ec:setAction&quot;,&quot;click&quot;,{&quot;list&quot;:&quot;Search Results: Category&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Product click: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;item title&quot;,&quot;eventValue&quot;:6394476}]]" href="https://codecanyon.net/item/easy-social-share-buttons-for-wordpress/6394476">Easy Social Share Buttons for WordPress</a>
</h3>

      <div>
        <div class="shared-item_cards-author_category_component__root">
  <i>by</i>
  <a
    href="https://codecanyon.net/user/appscreo"
    class="shared-item_cards-author_category_component__link"
    rel="nofollow"
    data-turbo="false"
      data-action="analytics-event#send"
      data-analytics-event="[[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;author name&quot;,&quot;eventValue&quot;:6394476}]]"
  >
    appscreo
  </a>
  in
  <a
    href="/category/wordpress/social-networking"
    class="shared-item_cards-author_category_component__link"
      data-action="analytics-event#send"
      data-analytics-event="[[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;category&quot;,&quot;eventValue&quot;:6394476}]]"
    }
  >
    Social Networking
  </a>
</div>

      </div>
      <div class="shared-item_cards-list-image_card_component__attrsWrapper">
          <ul>
    <li class="shared-item_cards-attributes_component__attribute">
      <span class="shared-item_cards-attributes_component__label">Software Version: </span>
      <span class="shared-item_cards-attributes_component__value">WordPress 5.0.x - 6.3.x</span>
    </li>
    <li class="shared-item_cards-attributes_component__attribute">
      <span class="shared-item_cards-attributes_component__label">Compatible With: </span>
      <span class="shared-item_cards-attributes_component__value">bbPress 2.6.x, Block Editor, BuddyPress 9.x.x, Easy Digital Downloads, Elementor, Elementor Pro, Exchange 1.10.x, Layers WP, WooCommerce 5.x.x - 8.x.x, WP EasyCart, WPBakery Page Builder, WPML, Cornerstone</span>
    </li>
</ul>

          <div class="shared-item_cards-included_files_component__root">
  File Types Included:
  <ul>
      <li class="shared-item_cards-included_files_component__fileType">JavaScript JS</li>
      <li class="shared-item_cards-included_files_component__fileType">CSS</li>
      <li class="shared-item_cards-included_files_component__fileType">PHP</li>
  </ul>
</div>

      </div>
    </div>
    <div class="shared-item_cards-list-image_card_component__priceWrapper">
      <div class="shared-item_cards-list-image_card_component__info">
        <div class="shared-item_cards-list-image_card_component__favAndCollections">
          <a
  href="/my/bookmarks/new?item_id=6394476"
  class="shared-item_cards-collection_button_component__collection"
  role="button"
  aria-label="Add to collection"
  title="Add to collection"
  rel="nofollow"
  data-controller="collection-button"
  data-action="collection-button#open analytics-event#send"
  data-bookmark-button-target="bookmarkButton"
  data-item-id="6394476"
  data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;Item&quot;,&quot;eventLabel&quot;:&quot;collection;click&quot;,&quot;eventValue&quot;:6394476}"
>
  <span class="shared-item_cards-collection_button_component__icon">
    <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#collection'></use>
</svg>

  </span>
</a>

          <span class="shared-item_cards-list-image_card_component__buttonSeparator"></span>
          <form method="post"
      action="/my/favorites/6394476"
      data-controller="favorite-button"
      data-action="submit->favorite-button#submit favoritesStoreUpdated@window->favorite-button#updateFromStore">
  <input type="hidden" name="_method" value="post" data-favorite-button-target="formMethod">
  <button type="submit"
          aria-label="Add to Favorites"
          class="shared-item_cards-favorite_button_component__favoriteButton"
          data-favorite-button-target="favoriteButton"
          data-favorited="false"
          data-item-id="6394476">
    <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#heart'></use>
</svg>

  </button>
</form>

        </div>
        <div class="shared-item_cards-price_component__root">
    $22
</div>

        <div class="shared-item_cards-list-image_card_component__ratingWrapper"><div class="shared-stars_rating_component__root">
  <div
    class="shared-stars_rating_component__starRating"
    role="img"
    aria-label="Rated 4.68 out of 5, 1.4K reviews"
  >
    <span class="shared-stars_rating_component__star">
      <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#stars_4.5'></use>
</svg>

    </span>
  </div>
  <span aria-hidden="true" class="shared-stars_rating_component__starRatingCount">(1.4K)</span>
</div>
</div>
        <div class="shared-item_cards-sales_component__root">
  32.7K Sales
</div>

        <div class="shared-item_cards-list-image_card_component__lastUpdated shared-item_cards-list-image_card_component__tinyText">
          Last updated: 03 Dec 23
        </div>
      </div>
      <div class="shared-item_cards-list-image_card_component__coverWrapper">
            <a
  class="shared-item_cards-add_to_cart_button_component__root shared-item_cards-add_to_cart_button_component__compact"
  role="button"
  title="Add to cart"
  aria-label="Add to cart"
  href="/cart/configure_before_adding/6394476"
  rel="nofollow"
  data-controller="cart-button modal-commander"
  data-action="click->modal-commander#open cartStoreUpdated@window->cart-button#updateFromStore analytics-event#send"
  data-modal-commander-url-value="/my/cart_entries?item_id=6394476"
  data-modal-commander-method-value="POST"
  data-cart-button-item-id-value="6394476"
  data-cart-button-in-cart-class="shared-item_cards-add_to_cart_button_component__inCart"
  data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;appscreo&quot;,&quot;category&quot;:&quot;codecanyon.net/wordpress/social-networking&quot;,&quot;id&quot;:6394476,&quot;list&quot;:&quot;Search Results: Category&quot;,&quot;name&quot;:&quot;Easy Social Share Buttons for WordPress&quot;,&quot;position&quot;:24}],[&quot;ec:setAction&quot;,&quot;add&quot;],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Add to cart: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;cart button&quot;,&quot;eventValue&quot;:6394476}]]"
>
    <span class="shared-item_cards-add_to_cart_button_component__cartIcon">
      <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#cart'></use>
</svg>

    </span>
</a>

          <a href="https://codecanyon.net/item/easy-social-share-buttons-for-wordpress/full_screen_preview/6394476"
   class="shared-item_cards-preview_button_with_analytics_component__root"
   target="_blank"
   rel="noopener"
   data-action="analytics-event#send"
   data-analytics-event="{&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click;button&quot;,&quot;eventLabel&quot;:&quot;Preview;6394476&quot;,&quot;hitType&quot;:&quot;event&quot;}">
  Live Preview
</a>

      </div>
    </div>
  </div>
</div>

</div>

    <div class="shared-item_cards-card_component__root">
  <div class="shared-item_cards-list-image_card_component__root"
     data-analytics-item-impressions-target="item"
     data-favorites-loader-target="item"
     data-item-id="11453104"
     data-impression-position="25"
     data-impression-name="Share-one-Drive | OneDrive plugin for WordPress"
     data-impression-list="Search Results: Category"
     data-impression-brand="_DeLeeuw_"
     data-impression-category="codecanyon.net/wordpress/utilities"
>
  <div class="shared-item_cards-list-image_card_component__contentWrapper shared-item_cards-list-image_card_component__landscapeImage">
    <a class="shared-item_cards-list-image_card_component__itemLinkOverlay"
       href="https://codecanyon.net/item/shareonedrive-onedrive-plugin-for-wordpress/11453104"
       title="Share-one-Drive | OneDrive plugin for WordPress"
       aria-label="View Share-one-Drive | OneDrive plugin for WordPress"
       data-turbo="false"
       data-action="analytics-event#send"
       data-analytics-event="[[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;whitespace&quot;,&quot;eventValue&quot;:11453104}]]"></a>
    <div class="shared-item_cards-list-image_card_component__imageWrapper">
      <div class="shared-item_cards-preview_image_component__carousel shared-item_cards-preview_image_component__singleImage"
  style="padding-bottom: 50.847457627118644%"
>
  <a class="shared-item_cards-preview_image_component__imageLink" data-turbo="false" data-action="analytics-event#send" data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;_DeLeeuw_&quot;,&quot;category&quot;:&quot;codecanyon.net/wordpress/utilities&quot;,&quot;id&quot;:11453104,&quot;list&quot;:&quot;Search Results: Category&quot;,&quot;name&quot;:&quot;Share-one-Drive | OneDrive plugin for WordPress&quot;,&quot;position&quot;:25}],[&quot;ec:setAction&quot;,&quot;click&quot;,{&quot;list&quot;:&quot;Search Results: Category&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Product click: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;image&quot;,&quot;eventValue&quot;:11453104}]]" href="https://codecanyon.net/item/shareonedrive-onedrive-plugin-for-wordpress/11453104">
      <img src="https://codecanyon.img.customer.envatousercontent.com/files/478734047/Share-one-Drive-Header.png?auto=compress%2Cformat&amp;fit=crop&amp;crop=top&amp;w=590&amp;h=300&amp;s=0cd105ade3632b1d57a276eb373f623a"
        loading="lazy"
        style="left: 0%"
        class="shared-item_cards-preview_image_component__image"
        alt="Share-one-Drive | OneDrive plugin for WordPress"
        title="Share-one-Drive | OneDrive plugin for WordPress"
        width="590"
        height="300"
        data-controller="image-preview"
        data-action="error->image-preview#setFallback"
        data-fallback="https://previews.customer.envatousercontent.com/files/478734047/Share-one-Drive-Header.png"
        data-carousel-target="image"
      />
</a></div>

      <div class="shared-item_cards-list-image_card_component__gradient" style="padding-top: 50.847457627118644%;">
        <div class="shared-item_cards-list-image_card_component__buttons">
          <a
  href="/my/bookmarks/new?item_id=11453104"
  class="shared-item_cards-collection_button_component__collection"
  role="button"
  aria-label="Add to collection"
  title="Add to collection"
  rel="nofollow"
  data-controller="collection-button"
  data-action="collection-button#open analytics-event#send"
  data-bookmark-button-target="bookmarkButton"
  data-item-id="11453104"
  data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;Item&quot;,&quot;eventLabel&quot;:&quot;collection;click&quot;,&quot;eventValue&quot;:11453104}"
>
  <span class="shared-item_cards-collection_button_component__icon">
    <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#collection'></use>
</svg>

  </span>
</a>

          <span class="shared-item_cards-list-image_card_component__buttonSeparator"></span>
          <form method="post"
      action="/my/favorites/11453104"
      data-controller="favorite-button"
      data-action="submit->favorite-button#submit favoritesStoreUpdated@window->favorite-button#updateFromStore">
  <input type="hidden" name="_method" value="post" data-favorite-button-target="formMethod">
  <button type="submit"
          aria-label="Add to Favorites"
          class="shared-item_cards-favorite_button_component__favoriteButton"
          data-favorite-button-target="favoriteButton"
          data-favorited="false"
          data-item-id="11453104">
    <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#heart'></use>
</svg>

  </button>
</form>

        </div>
      </div>
    </div>
    <span class="shared-item_cards-sash_component__sash shared-item_cards-sash_component__sash_trending" style="width: 50px; height: 50px;">
  <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#sash_trending'></use>
</svg>

</span>

    <div class="shared-item_cards-list-image_card_component__detailsWrapper">
      <h3 class="shared-item_cards-item_name_component__root">
  <a class="shared-item_cards-item_name_component__itemNameLink" tabindex="0" data-turbo="false" data-action="analytics-event#send" data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;_DeLeeuw_&quot;,&quot;category&quot;:&quot;codecanyon.net/wordpress/utilities&quot;,&quot;id&quot;:11453104,&quot;list&quot;:&quot;Search Results: Category&quot;,&quot;name&quot;:&quot;Share-one-Drive | OneDrive plugin for WordPress&quot;,&quot;position&quot;:25}],[&quot;ec:setAction&quot;,&quot;click&quot;,{&quot;list&quot;:&quot;Search Results: Category&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Product click: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;item title&quot;,&quot;eventValue&quot;:11453104}]]" href="https://codecanyon.net/item/shareonedrive-onedrive-plugin-for-wordpress/11453104">Share-one-Drive | OneDrive plugin for WordPress</a>
</h3>

      <div>
        <div class="shared-item_cards-author_category_component__root">
  <i>by</i>
  <a
    href="https://codecanyon.net/user/_deleeuw_"
    class="shared-item_cards-author_category_component__link"
    rel="nofollow"
    data-turbo="false"
      data-action="analytics-event#send"
      data-analytics-event="[[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;author name&quot;,&quot;eventValue&quot;:11453104}]]"
  >
    _DeLeeuw_
  </a>
  in
  <a
    href="/category/wordpress/utilities"
    class="shared-item_cards-author_category_component__link"
      data-action="analytics-event#send"
      data-analytics-event="[[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;category&quot;,&quot;eventValue&quot;:11453104}]]"
    }
  >
    Utilities
  </a>
</div>

      </div>
      <div class="shared-item_cards-list-image_card_component__attrsWrapper">
          <ul>
    <li class="shared-item_cards-attributes_component__attribute">
      <span class="shared-item_cards-attributes_component__label">Software Version: </span>
      <span class="shared-item_cards-attributes_component__value">WordPress 5.6.x - 6.4.x</span>
    </li>
    <li class="shared-item_cards-attributes_component__attribute">
      <span class="shared-item_cards-attributes_component__label">Compatible With: </span>
      <span class="shared-item_cards-attributes_component__value">Beaver Builder, Block Editor, Contact Form 7, Elementor, Elementor Pro, Gravity Forms, Visual Composer, WooCommerce 6.x.x - 8.x.x, WPBakery Page Builder, WPForms, WPML</span>
    </li>
</ul>

          <div class="shared-item_cards-included_files_component__root">
  File Types Included:
  <ul>
      <li class="shared-item_cards-included_files_component__fileType">JavaScript JS</li>
      <li class="shared-item_cards-included_files_component__fileType">CSS</li>
      <li class="shared-item_cards-included_files_component__fileType">PHP</li>
  </ul>
</div>

      </div>
    </div>
    <div class="shared-item_cards-list-image_card_component__priceWrapper">
      <div class="shared-item_cards-list-image_card_component__info">
        <div class="shared-item_cards-list-image_card_component__favAndCollections">
          <a
  href="/my/bookmarks/new?item_id=11453104"
  class="shared-item_cards-collection_button_component__collection"
  role="button"
  aria-label="Add to collection"
  title="Add to collection"
  rel="nofollow"
  data-controller="collection-button"
  data-action="collection-button#open analytics-event#send"
  data-bookmark-button-target="bookmarkButton"
  data-item-id="11453104"
  data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;Item&quot;,&quot;eventLabel&quot;:&quot;collection;click&quot;,&quot;eventValue&quot;:11453104}"
>
  <span class="shared-item_cards-collection_button_component__icon">
    <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#collection'></use>
</svg>

  </span>
</a>

          <span class="shared-item_cards-list-image_card_component__buttonSeparator"></span>
          <form method="post"
      action="/my/favorites/11453104"
      data-controller="favorite-button"
      data-action="submit->favorite-button#submit favoritesStoreUpdated@window->favorite-button#updateFromStore">
  <input type="hidden" name="_method" value="post" data-favorite-button-target="formMethod">
  <button type="submit"
          aria-label="Add to Favorites"
          class="shared-item_cards-favorite_button_component__favoriteButton"
          data-favorite-button-target="favoriteButton"
          data-favorited="false"
          data-item-id="11453104">
    <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#heart'></use>
</svg>

  </button>
</form>

        </div>
        <div class="shared-item_cards-price_component__root">
    $39
</div>

        <div class="shared-item_cards-list-image_card_component__ratingWrapper"><div class="shared-stars_rating_component__root">
  <div
    class="shared-stars_rating_component__starRating"
    role="img"
    aria-label="Rated 4.7 out of 5, 94 reviews"
  >
    <span class="shared-stars_rating_component__star">
      <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#stars_4.5'></use>
</svg>

    </span>
  </div>
  <span aria-hidden="true" class="shared-stars_rating_component__starRatingCount">(94)</span>
</div>
</div>
        <div class="shared-item_cards-sales_component__root">
  3.5K Sales
</div>

        <div class="shared-item_cards-list-image_card_component__lastUpdated shared-item_cards-list-image_card_component__tinyText">
          Last updated: 10 Jan 24
        </div>
      </div>
      <div class="shared-item_cards-list-image_card_component__coverWrapper">
            <a
  class="shared-item_cards-add_to_cart_button_component__root shared-item_cards-add_to_cart_button_component__compact"
  role="button"
  title="Add to cart"
  aria-label="Add to cart"
  href="/cart/configure_before_adding/11453104"
  rel="nofollow"
  data-controller="cart-button modal-commander"
  data-action="click->modal-commander#open cartStoreUpdated@window->cart-button#updateFromStore analytics-event#send"
  data-modal-commander-url-value="/my/cart_entries?item_id=11453104"
  data-modal-commander-method-value="POST"
  data-cart-button-item-id-value="11453104"
  data-cart-button-in-cart-class="shared-item_cards-add_to_cart_button_component__inCart"
  data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;_DeLeeuw_&quot;,&quot;category&quot;:&quot;codecanyon.net/wordpress/utilities&quot;,&quot;id&quot;:11453104,&quot;list&quot;:&quot;Search Results: Category&quot;,&quot;name&quot;:&quot;Share-one-Drive | OneDrive plugin for WordPress&quot;,&quot;position&quot;:25}],[&quot;ec:setAction&quot;,&quot;add&quot;],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Add to cart: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;cart button&quot;,&quot;eventValue&quot;:11453104}]]"
>
    <span class="shared-item_cards-add_to_cart_button_component__cartIcon">
      <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#cart'></use>
</svg>

    </span>
</a>

          <a href="https://codecanyon.net/item/shareonedrive-onedrive-plugin-for-wordpress/full_screen_preview/11453104"
   class="shared-item_cards-preview_button_with_analytics_component__root"
   target="_blank"
   rel="noopener"
   data-action="analytics-event#send"
   data-analytics-event="{&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click;button&quot;,&quot;eventLabel&quot;:&quot;Preview;11453104&quot;,&quot;hitType&quot;:&quot;event&quot;}">
  Live Preview
</a>

      </div>
    </div>
  </div>
</div>

</div>

    <div class="shared-item_cards-card_component__root">
  <div class="shared-item_cards-list-image_card_component__root"
     data-analytics-item-impressions-target="item"
     data-favorites-loader-target="item"
     data-item-id="4177158"
     data-impression-position="26"
     data-impression-name="Hide My WP - Amazing Security Plugin for WordPress!"
     data-impression-list="Search Results: Category"
     data-impression-brand="wpWave"
     data-impression-category="codecanyon.net/wordpress/utilities"
>
  <div class="shared-item_cards-list-image_card_component__contentWrapper shared-item_cards-list-image_card_component__landscapeImage">
    <a class="shared-item_cards-list-image_card_component__itemLinkOverlay"
       href="https://codecanyon.net/item/hide-my-wp-amazing-security-plugin-for-wordpress/4177158"
       title="Hide My WP - Amazing Security Plugin for WordPress!"
       aria-label="View Hide My WP - Amazing Security Plugin for WordPress!"
       data-turbo="false"
       data-action="analytics-event#send"
       data-analytics-event="[[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;whitespace&quot;,&quot;eventValue&quot;:4177158}]]"></a>
    <div class="shared-item_cards-list-image_card_component__imageWrapper">
      <div class="shared-item_cards-preview_image_component__carousel shared-item_cards-preview_image_component__singleImage"
  style="padding-bottom: 50.847457627118644%"
>
  <a class="shared-item_cards-preview_image_component__imageLink" data-turbo="false" data-action="analytics-event#send" data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;wpWave&quot;,&quot;category&quot;:&quot;codecanyon.net/wordpress/utilities&quot;,&quot;id&quot;:4177158,&quot;list&quot;:&quot;Search Results: Category&quot;,&quot;name&quot;:&quot;Hide My WP - Amazing Security Plugin for WordPress!&quot;,&quot;position&quot;:26}],[&quot;ec:setAction&quot;,&quot;click&quot;,{&quot;list&quot;:&quot;Search Results: Category&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Product click: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;image&quot;,&quot;eventValue&quot;:4177158}]]" href="https://codecanyon.net/item/hide-my-wp-amazing-security-plugin-for-wordpress/4177158">
      <img src="https://codecanyon.img.customer.envatousercontent.com/files/372942311/v1+icons+%281%29.png?auto=compress%2Cformat&amp;fit=crop&amp;crop=top&amp;w=590&amp;h=300&amp;s=1a2680cfd9fe673faca187b8648df482"
        loading="lazy"
        style="left: 0%"
        class="shared-item_cards-preview_image_component__image"
        alt="Hide My WP - Amazing Security Plugin for WordPress!"
        title="Hide My WP - Amazing Security Plugin for WordPress!"
        width="590"
        height="300"
        data-controller="image-preview"
        data-action="error->image-preview#setFallback"
        data-fallback="https://previews.customer.envatousercontent.com/files/372942311/v1%20icons%20(1).png"
        data-carousel-target="image"
      />
</a></div>

      <div class="shared-item_cards-list-image_card_component__gradient" style="padding-top: 50.847457627118644%;">
        <div class="shared-item_cards-list-image_card_component__buttons">
          <a
  href="/my/bookmarks/new?item_id=4177158"
  class="shared-item_cards-collection_button_component__collection"
  role="button"
  aria-label="Add to collection"
  title="Add to collection"
  rel="nofollow"
  data-controller="collection-button"
  data-action="collection-button#open analytics-event#send"
  data-bookmark-button-target="bookmarkButton"
  data-item-id="4177158"
  data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;Item&quot;,&quot;eventLabel&quot;:&quot;collection;click&quot;,&quot;eventValue&quot;:4177158}"
>
  <span class="shared-item_cards-collection_button_component__icon">
    <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#collection'></use>
</svg>

  </span>
</a>

          <span class="shared-item_cards-list-image_card_component__buttonSeparator"></span>
          <form method="post"
      action="/my/favorites/4177158"
      data-controller="favorite-button"
      data-action="submit->favorite-button#submit favoritesStoreUpdated@window->favorite-button#updateFromStore">
  <input type="hidden" name="_method" value="post" data-favorite-button-target="formMethod">
  <button type="submit"
          aria-label="Add to Favorites"
          class="shared-item_cards-favorite_button_component__favoriteButton"
          data-favorite-button-target="favoriteButton"
          data-favorited="false"
          data-item-id="4177158">
    <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#heart'></use>
</svg>

  </button>
</form>

        </div>
      </div>
    </div>
    <span class="shared-item_cards-sash_component__sash shared-item_cards-sash_component__sash_trending" style="width: 50px; height: 50px;">
  <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#sash_trending'></use>
</svg>

</span>

    <div class="shared-item_cards-list-image_card_component__detailsWrapper">
      <h3 class="shared-item_cards-item_name_component__root">
  <a class="shared-item_cards-item_name_component__itemNameLink" tabindex="0" data-turbo="false" data-action="analytics-event#send" data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;wpWave&quot;,&quot;category&quot;:&quot;codecanyon.net/wordpress/utilities&quot;,&quot;id&quot;:4177158,&quot;list&quot;:&quot;Search Results: Category&quot;,&quot;name&quot;:&quot;Hide My WP - Amazing Security Plugin for WordPress!&quot;,&quot;position&quot;:26}],[&quot;ec:setAction&quot;,&quot;click&quot;,{&quot;list&quot;:&quot;Search Results: Category&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Product click: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;item title&quot;,&quot;eventValue&quot;:4177158}]]" href="https://codecanyon.net/item/hide-my-wp-amazing-security-plugin-for-wordpress/4177158">Hide My WP - Amazing Security Plugin for WordPress!</a>
</h3>

      <div>
        <div class="shared-item_cards-author_category_component__root">
  <i>by</i>
  <a
    href="https://codecanyon.net/user/wpwave"
    class="shared-item_cards-author_category_component__link"
    rel="nofollow"
    data-turbo="false"
      data-action="analytics-event#send"
      data-analytics-event="[[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;author name&quot;,&quot;eventValue&quot;:4177158}]]"
  >
    wpWave
  </a>
  in
  <a
    href="/category/wordpress/utilities"
    class="shared-item_cards-author_category_component__link"
      data-action="analytics-event#send"
      data-analytics-event="[[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;category&quot;,&quot;eventValue&quot;:4177158}]]"
    }
  >
    Utilities
  </a>
</div>

      </div>
      <div class="shared-item_cards-list-image_card_component__attrsWrapper">
          <ul>
    <li class="shared-item_cards-attributes_component__attribute">
      <span class="shared-item_cards-attributes_component__label">Software Version: </span>
      <span class="shared-item_cards-attributes_component__value">WordPress 4.9.x - 6.3.x, Other</span>
    </li>
    <li class="shared-item_cards-attributes_component__attribute">
      <span class="shared-item_cards-attributes_component__label">Compatible With: </span>
      <span class="shared-item_cards-attributes_component__value">bbPress 2.5.x - 2.6.x, BuddyPress 9.x.x - 10.x.x, Elementor, Elementor Pro, WooCommerce 5.x.x - 6.x.x</span>
    </li>
</ul>

          <div class="shared-item_cards-included_files_component__root">
  File Types Included:
  <ul>
      <li class="shared-item_cards-included_files_component__fileType">JavaScript JS</li>
      <li class="shared-item_cards-included_files_component__fileType">JavaScript JSON</li>
      <li class="shared-item_cards-included_files_component__fileType">HTML</li>
      <li class="shared-item_cards-included_files_component__fileType">XML</li>
      <li class="shared-item_cards-included_files_component__fileType">CSS</li>
      <li class="shared-item_cards-included_files_component__fileType">PHP</li>
  </ul>
</div>

      </div>
    </div>
    <div class="shared-item_cards-list-image_card_component__priceWrapper">
      <div class="shared-item_cards-list-image_card_component__info">
        <div class="shared-item_cards-list-image_card_component__favAndCollections">
          <a
  href="/my/bookmarks/new?item_id=4177158"
  class="shared-item_cards-collection_button_component__collection"
  role="button"
  aria-label="Add to collection"
  title="Add to collection"
  rel="nofollow"
  data-controller="collection-button"
  data-action="collection-button#open analytics-event#send"
  data-bookmark-button-target="bookmarkButton"
  data-item-id="4177158"
  data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;Item&quot;,&quot;eventLabel&quot;:&quot;collection;click&quot;,&quot;eventValue&quot;:4177158}"
>
  <span class="shared-item_cards-collection_button_component__icon">
    <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#collection'></use>
</svg>

  </span>
</a>

          <span class="shared-item_cards-list-image_card_component__buttonSeparator"></span>
          <form method="post"
      action="/my/favorites/4177158"
      data-controller="favorite-button"
      data-action="submit->favorite-button#submit favoritesStoreUpdated@window->favorite-button#updateFromStore">
  <input type="hidden" name="_method" value="post" data-favorite-button-target="formMethod">
  <button type="submit"
          aria-label="Add to Favorites"
          class="shared-item_cards-favorite_button_component__favoriteButton"
          data-favorite-button-target="favoriteButton"
          data-favorited="false"
          data-item-id="4177158">
    <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#heart'></use>
</svg>

  </button>
</form>

        </div>
        <div class="shared-item_cards-price_component__root">
    $27
</div>

        <div class="shared-item_cards-list-image_card_component__ratingWrapper"><div class="shared-stars_rating_component__root">
  <div
    class="shared-stars_rating_component__starRating"
    role="img"
    aria-label="Rated 4.49 out of 5, 1.8K reviews"
  >
    <span class="shared-stars_rating_component__star">
      <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#stars_4.5'></use>
</svg>

    </span>
  </div>
  <span aria-hidden="true" class="shared-stars_rating_component__starRatingCount">(1.8K)</span>
</div>
</div>
        <div class="shared-item_cards-sales_component__root">
  32.1K Sales
</div>

        <div class="shared-item_cards-list-image_card_component__lastUpdated shared-item_cards-list-image_card_component__tinyText">
          Last updated: 23 Sep 23
        </div>
      </div>
      <div class="shared-item_cards-list-image_card_component__coverWrapper">
            <a
  class="shared-item_cards-add_to_cart_button_component__root shared-item_cards-add_to_cart_button_component__compact"
  role="button"
  title="Add to cart"
  aria-label="Add to cart"
  href="/cart/configure_before_adding/4177158"
  rel="nofollow"
  data-controller="cart-button modal-commander"
  data-action="click->modal-commander#open cartStoreUpdated@window->cart-button#updateFromStore analytics-event#send"
  data-modal-commander-url-value="/my/cart_entries?item_id=4177158"
  data-modal-commander-method-value="POST"
  data-cart-button-item-id-value="4177158"
  data-cart-button-in-cart-class="shared-item_cards-add_to_cart_button_component__inCart"
  data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;wpWave&quot;,&quot;category&quot;:&quot;codecanyon.net/wordpress/utilities&quot;,&quot;id&quot;:4177158,&quot;list&quot;:&quot;Search Results: Category&quot;,&quot;name&quot;:&quot;Hide My WP - Amazing Security Plugin for WordPress!&quot;,&quot;position&quot;:26}],[&quot;ec:setAction&quot;,&quot;add&quot;],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Add to cart: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;cart button&quot;,&quot;eventValue&quot;:4177158}]]"
>
    <span class="shared-item_cards-add_to_cart_button_component__cartIcon">
      <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#cart'></use>
</svg>

    </span>
</a>

          <a href="https://codecanyon.net/item/hide-my-wp-amazing-security-plugin-for-wordpress/full_screen_preview/4177158"
   class="shared-item_cards-preview_button_with_analytics_component__root"
   target="_blank"
   rel="noopener"
   data-action="analytics-event#send"
   data-analytics-event="{&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click;button&quot;,&quot;eventLabel&quot;:&quot;Preview;4177158&quot;,&quot;hitType&quot;:&quot;event&quot;}">
  Live Preview
</a>

      </div>
    </div>
  </div>
</div>

</div>

    <div class="shared-item_cards-card_component__root">
  <div class="shared-item_cards-list-image_card_component__root"
     data-analytics-item-impressions-target="item"
     data-favorites-loader-target="item"
     data-item-id="21072773"
     data-impression-position="27"
     data-impression-name="Chauffeur Taxi Booking System for WordPress"
     data-impression-list="Search Results: Category"
     data-impression-brand="QuanticaLabs"
     data-impression-category="codecanyon.net/wordpress/calendars"
>
  <div class="shared-item_cards-list-image_card_component__contentWrapper shared-item_cards-list-image_card_component__landscapeImage">
    <a class="shared-item_cards-list-image_card_component__itemLinkOverlay"
       href="https://codecanyon.net/item/chauffeur-booking-system-for-wordpress/21072773"
       title="Chauffeur Taxi Booking System for WordPress"
       aria-label="View Chauffeur Taxi Booking System for WordPress"
       data-turbo="false"
       data-action="analytics-event#send"
       data-analytics-event="[[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;whitespace&quot;,&quot;eventValue&quot;:21072773}]]"></a>
    <div class="shared-item_cards-list-image_card_component__imageWrapper">
      <div class="shared-item_cards-preview_image_component__carousel shared-item_cards-preview_image_component__singleImage"
  style="padding-bottom: 50.847457627118644%"
>
  <a class="shared-item_cards-preview_image_component__imageLink" data-turbo="false" data-action="analytics-event#send" data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;QuanticaLabs&quot;,&quot;category&quot;:&quot;codecanyon.net/wordpress/calendars&quot;,&quot;id&quot;:21072773,&quot;list&quot;:&quot;Search Results: Category&quot;,&quot;name&quot;:&quot;Chauffeur Taxi Booking System for WordPress&quot;,&quot;position&quot;:27}],[&quot;ec:setAction&quot;,&quot;click&quot;,{&quot;list&quot;:&quot;Search Results: Category&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Product click: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;image&quot;,&quot;eventValue&quot;:21072773}]]" href="https://codecanyon.net/item/chauffeur-booking-system-for-wordpress/21072773">
      <img src="https://codecanyon.img.customer.envatousercontent.com/files/390712166/chauffeur_preview.png?auto=compress%2Cformat&amp;fit=crop&amp;crop=top&amp;w=590&amp;h=300&amp;s=839a46453b337c76b759f9427cfcf4e7"
        loading="lazy"
        style="left: 0%"
        class="shared-item_cards-preview_image_component__image"
        alt="Chauffeur Taxi Booking System for WordPress"
        title="Chauffeur Taxi Booking System for WordPress"
        width="590"
        height="300"
        data-controller="image-preview"
        data-action="error->image-preview#setFallback"
        data-fallback="https://previews.customer.envatousercontent.com/files/390712166/chauffeur_preview.png"
        data-carousel-target="image"
      />
</a></div>

      <div class="shared-item_cards-list-image_card_component__gradient" style="padding-top: 50.847457627118644%;">
        <div class="shared-item_cards-list-image_card_component__buttons">
          <a
  href="/my/bookmarks/new?item_id=21072773"
  class="shared-item_cards-collection_button_component__collection"
  role="button"
  aria-label="Add to collection"
  title="Add to collection"
  rel="nofollow"
  data-controller="collection-button"
  data-action="collection-button#open analytics-event#send"
  data-bookmark-button-target="bookmarkButton"
  data-item-id="21072773"
  data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;Item&quot;,&quot;eventLabel&quot;:&quot;collection;click&quot;,&quot;eventValue&quot;:21072773}"
>
  <span class="shared-item_cards-collection_button_component__icon">
    <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#collection'></use>
</svg>

  </span>
</a>

          <span class="shared-item_cards-list-image_card_component__buttonSeparator"></span>
          <form method="post"
      action="/my/favorites/21072773"
      data-controller="favorite-button"
      data-action="submit->favorite-button#submit favoritesStoreUpdated@window->favorite-button#updateFromStore">
  <input type="hidden" name="_method" value="post" data-favorite-button-target="formMethod">
  <button type="submit"
          aria-label="Add to Favorites"
          class="shared-item_cards-favorite_button_component__favoriteButton"
          data-favorite-button-target="favoriteButton"
          data-favorited="false"
          data-item-id="21072773">
    <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#heart'></use>
</svg>

  </button>
</form>

        </div>
      </div>
    </div>
    <span class="shared-item_cards-sash_component__sash shared-item_cards-sash_component__sash_trending" style="width: 50px; height: 50px;">
  <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#sash_trending'></use>
</svg>

</span>

    <div class="shared-item_cards-list-image_card_component__detailsWrapper">
      <h3 class="shared-item_cards-item_name_component__root">
  <a class="shared-item_cards-item_name_component__itemNameLink" tabindex="0" data-turbo="false" data-action="analytics-event#send" data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;QuanticaLabs&quot;,&quot;category&quot;:&quot;codecanyon.net/wordpress/calendars&quot;,&quot;id&quot;:21072773,&quot;list&quot;:&quot;Search Results: Category&quot;,&quot;name&quot;:&quot;Chauffeur Taxi Booking System for WordPress&quot;,&quot;position&quot;:27}],[&quot;ec:setAction&quot;,&quot;click&quot;,{&quot;list&quot;:&quot;Search Results: Category&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Product click: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;item title&quot;,&quot;eventValue&quot;:21072773}]]" href="https://codecanyon.net/item/chauffeur-booking-system-for-wordpress/21072773">Chauffeur Taxi Booking System for WordPress</a>
</h3>

      <div>
        <div class="shared-item_cards-author_category_component__root">
  <i>by</i>
  <a
    href="https://codecanyon.net/user/quanticalabs"
    class="shared-item_cards-author_category_component__link"
    rel="nofollow"
    data-turbo="false"
      data-action="analytics-event#send"
      data-analytics-event="[[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;author name&quot;,&quot;eventValue&quot;:21072773}]]"
  >
    QuanticaLabs
  </a>
  in
  <a
    href="/category/wordpress/calendars"
    class="shared-item_cards-author_category_component__link"
      data-action="analytics-event#send"
      data-analytics-event="[[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;category&quot;,&quot;eventValue&quot;:21072773}]]"
    }
  >
    Calendars
  </a>
</div>

      </div>
      <div class="shared-item_cards-list-image_card_component__attrsWrapper">
          <ul>
    <li class="shared-item_cards-attributes_component__attribute">
      <span class="shared-item_cards-attributes_component__label">Software Version: </span>
      <span class="shared-item_cards-attributes_component__value">WordPress 4.9.x - 6.4.x</span>
    </li>
    <li class="shared-item_cards-attributes_component__attribute">
      <span class="shared-item_cards-attributes_component__label">Compatible With: </span>
      <span class="shared-item_cards-attributes_component__value">Elementor, Elementor Pro, Visual Composer, WooCommerce 5.x.x - 6.x.x, WPBakery Page Builder, WPML</span>
    </li>
</ul>

          <div class="shared-item_cards-included_files_component__root">
  File Types Included:
  <ul>
      <li class="shared-item_cards-included_files_component__fileType">JavaScript JS</li>
      <li class="shared-item_cards-included_files_component__fileType">HTML</li>
      <li class="shared-item_cards-included_files_component__fileType">CSS</li>
      <li class="shared-item_cards-included_files_component__fileType">PHP</li>
  </ul>
</div>

      </div>
    </div>
    <div class="shared-item_cards-list-image_card_component__priceWrapper">
      <div class="shared-item_cards-list-image_card_component__info">
        <div class="shared-item_cards-list-image_card_component__favAndCollections">
          <a
  href="/my/bookmarks/new?item_id=21072773"
  class="shared-item_cards-collection_button_component__collection"
  role="button"
  aria-label="Add to collection"
  title="Add to collection"
  rel="nofollow"
  data-controller="collection-button"
  data-action="collection-button#open analytics-event#send"
  data-bookmark-button-target="bookmarkButton"
  data-item-id="21072773"
  data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;Item&quot;,&quot;eventLabel&quot;:&quot;collection;click&quot;,&quot;eventValue&quot;:21072773}"
>
  <span class="shared-item_cards-collection_button_component__icon">
    <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#collection'></use>
</svg>

  </span>
</a>

          <span class="shared-item_cards-list-image_card_component__buttonSeparator"></span>
          <form method="post"
      action="/my/favorites/21072773"
      data-controller="favorite-button"
      data-action="submit->favorite-button#submit favoritesStoreUpdated@window->favorite-button#updateFromStore">
  <input type="hidden" name="_method" value="post" data-favorite-button-target="formMethod">
  <button type="submit"
          aria-label="Add to Favorites"
          class="shared-item_cards-favorite_button_component__favoriteButton"
          data-favorite-button-target="favoriteButton"
          data-favorited="false"
          data-item-id="21072773">
    <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#heart'></use>
</svg>

  </button>
</form>

        </div>
        <div class="shared-item_cards-price_component__root">
    $79
</div>

        <div class="shared-item_cards-list-image_card_component__ratingWrapper"><div class="shared-stars_rating_component__root">
  <div
    class="shared-stars_rating_component__starRating"
    role="img"
    aria-label="Rated 4.63 out of 5, 247 reviews"
  >
    <span class="shared-stars_rating_component__star">
      <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#stars_4.5'></use>
</svg>

    </span>
  </div>
  <span aria-hidden="true" class="shared-stars_rating_component__starRatingCount">(247)</span>
</div>
</div>
        <div class="shared-item_cards-sales_component__root">
  4.6K Sales
</div>

        <div class="shared-item_cards-list-image_card_component__lastUpdated shared-item_cards-list-image_card_component__tinyText">
          Last updated: 04 Oct 23
        </div>
      </div>
      <div class="shared-item_cards-list-image_card_component__coverWrapper">
            <a
  class="shared-item_cards-add_to_cart_button_component__root shared-item_cards-add_to_cart_button_component__compact"
  role="button"
  title="Add to cart"
  aria-label="Add to cart"
  href="/cart/configure_before_adding/21072773"
  rel="nofollow"
  data-controller="cart-button modal-commander"
  data-action="click->modal-commander#open cartStoreUpdated@window->cart-button#updateFromStore analytics-event#send"
  data-modal-commander-url-value="/my/cart_entries?item_id=21072773"
  data-modal-commander-method-value="POST"
  data-cart-button-item-id-value="21072773"
  data-cart-button-in-cart-class="shared-item_cards-add_to_cart_button_component__inCart"
  data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;QuanticaLabs&quot;,&quot;category&quot;:&quot;codecanyon.net/wordpress/calendars&quot;,&quot;id&quot;:21072773,&quot;list&quot;:&quot;Search Results: Category&quot;,&quot;name&quot;:&quot;Chauffeur Taxi Booking System for WordPress&quot;,&quot;position&quot;:27}],[&quot;ec:setAction&quot;,&quot;add&quot;],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Add to cart: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;cart button&quot;,&quot;eventValue&quot;:21072773}]]"
>
    <span class="shared-item_cards-add_to_cart_button_component__cartIcon">
      <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#cart'></use>
</svg>

    </span>
</a>

          <a href="https://codecanyon.net/item/chauffeur-booking-system-for-wordpress/full_screen_preview/21072773"
   class="shared-item_cards-preview_button_with_analytics_component__root"
   target="_blank"
   rel="noopener"
   data-action="analytics-event#send"
   data-analytics-event="{&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click;button&quot;,&quot;eventLabel&quot;:&quot;Preview;21072773&quot;,&quot;hitType&quot;:&quot;event&quot;}">
  Live Preview
</a>

      </div>
    </div>
  </div>
</div>

</div>

    <div class="shared-item_cards-card_component__root">
  <div class="shared-item_cards-list-image_card_component__root"
     data-analytics-item-impressions-target="item"
     data-favorites-loader-target="item"
     data-item-id="16973546"
     data-impression-position="28"
     data-impression-name="Store Locator (Google Maps) For WordPress"
     data-impression-list="Search Results: Category"
     data-impression-brand="agilelogix"
     data-impression-category="codecanyon.net/wordpress/ecommerce/woocommerce"
>
  <div class="shared-item_cards-list-image_card_component__contentWrapper shared-item_cards-list-image_card_component__landscapeImage">
    <a class="shared-item_cards-list-image_card_component__itemLinkOverlay"
       href="https://codecanyon.net/item/agile-store-locator-google-maps-for-wordpress/16973546"
       title="Store Locator (Google Maps) For WordPress"
       aria-label="View Store Locator (Google Maps) For WordPress"
       data-turbo="false"
       data-action="analytics-event#send"
       data-analytics-event="[[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;whitespace&quot;,&quot;eventValue&quot;:16973546}]]"></a>
    <div class="shared-item_cards-list-image_card_component__imageWrapper">
      <div class="shared-item_cards-preview_image_component__carousel shared-item_cards-preview_image_component__singleImage"
  style="padding-bottom: 50.847457627118644%"
>
  <a class="shared-item_cards-preview_image_component__imageLink" data-turbo="false" data-action="analytics-event#send" data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;agilelogix&quot;,&quot;category&quot;:&quot;codecanyon.net/wordpress/ecommerce/woocommerce&quot;,&quot;id&quot;:16973546,&quot;list&quot;:&quot;Search Results: Category&quot;,&quot;name&quot;:&quot;Store Locator (Google Maps) For WordPress&quot;,&quot;position&quot;:28}],[&quot;ec:setAction&quot;,&quot;click&quot;,{&quot;list&quot;:&quot;Search Results: Category&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Product click: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;image&quot;,&quot;eventValue&quot;:16973546}]]" href="https://codecanyon.net/item/agile-store-locator-google-maps-for-wordpress/16973546">
      <img src="https://codecanyon.img.customer.envatousercontent.com/files/398109536/Agile-Store-Locator-Codcanyon-banner-2+%281%29.png?auto=compress%2Cformat&amp;fit=crop&amp;crop=top&amp;w=590&amp;h=300&amp;s=0f183d50c576c1d87f80efd2c881ed40"
        loading="lazy"
        style="left: 0%"
        class="shared-item_cards-preview_image_component__image"
        alt="Store Locator (Google Maps) For WordPress"
        title="Store Locator (Google Maps) For WordPress"
        width="590"
        height="300"
        data-controller="image-preview"
        data-action="error->image-preview#setFallback"
        data-fallback="https://previews.customer.envatousercontent.com/files/398109536/Agile-Store-Locator-Codcanyon-banner-2%20(1).png"
        data-carousel-target="image"
      />
</a></div>

      <div class="shared-item_cards-list-image_card_component__gradient" style="padding-top: 50.847457627118644%;">
        <div class="shared-item_cards-list-image_card_component__buttons">
          <a
  href="/my/bookmarks/new?item_id=16973546"
  class="shared-item_cards-collection_button_component__collection"
  role="button"
  aria-label="Add to collection"
  title="Add to collection"
  rel="nofollow"
  data-controller="collection-button"
  data-action="collection-button#open analytics-event#send"
  data-bookmark-button-target="bookmarkButton"
  data-item-id="16973546"
  data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;Item&quot;,&quot;eventLabel&quot;:&quot;collection;click&quot;,&quot;eventValue&quot;:16973546}"
>
  <span class="shared-item_cards-collection_button_component__icon">
    <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#collection'></use>
</svg>

  </span>
</a>

          <span class="shared-item_cards-list-image_card_component__buttonSeparator"></span>
          <form method="post"
      action="/my/favorites/16973546"
      data-controller="favorite-button"
      data-action="submit->favorite-button#submit favoritesStoreUpdated@window->favorite-button#updateFromStore">
  <input type="hidden" name="_method" value="post" data-favorite-button-target="formMethod">
  <button type="submit"
          aria-label="Add to Favorites"
          class="shared-item_cards-favorite_button_component__favoriteButton"
          data-favorite-button-target="favoriteButton"
          data-favorited="false"
          data-item-id="16973546">
    <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#heart'></use>
</svg>

  </button>
</form>

        </div>
      </div>
    </div>
    <span class="shared-item_cards-sash_component__sash shared-item_cards-sash_component__sash_trending" style="width: 50px; height: 50px;">
  <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#sash_trending'></use>
</svg>

</span>

    <div class="shared-item_cards-list-image_card_component__detailsWrapper">
      <h3 class="shared-item_cards-item_name_component__root">
  <a class="shared-item_cards-item_name_component__itemNameLink" tabindex="0" data-turbo="false" data-action="analytics-event#send" data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;agilelogix&quot;,&quot;category&quot;:&quot;codecanyon.net/wordpress/ecommerce/woocommerce&quot;,&quot;id&quot;:16973546,&quot;list&quot;:&quot;Search Results: Category&quot;,&quot;name&quot;:&quot;Store Locator (Google Maps) For WordPress&quot;,&quot;position&quot;:28}],[&quot;ec:setAction&quot;,&quot;click&quot;,{&quot;list&quot;:&quot;Search Results: Category&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Product click: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;item title&quot;,&quot;eventValue&quot;:16973546}]]" href="https://codecanyon.net/item/agile-store-locator-google-maps-for-wordpress/16973546">Store Locator (Google Maps) For WordPress</a>
</h3>

      <div>
        <div class="shared-item_cards-author_category_component__root">
  <i>by</i>
  <a
    href="https://codecanyon.net/user/agilelogix"
    class="shared-item_cards-author_category_component__link"
    rel="nofollow"
    data-turbo="false"
      data-action="analytics-event#send"
      data-analytics-event="[[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;author name&quot;,&quot;eventValue&quot;:16973546}]]"
  >
    agilelogix
  </a>
  in
  <a
    href="/category/wordpress/ecommerce/woocommerce"
    class="shared-item_cards-author_category_component__link"
      data-action="analytics-event#send"
      data-analytics-event="[[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;category&quot;,&quot;eventValue&quot;:16973546}]]"
    }
  >
    WooCommerce
  </a>
</div>

      </div>
      <div class="shared-item_cards-list-image_card_component__attrsWrapper">
          <ul>
    <li class="shared-item_cards-attributes_component__attribute">
      <span class="shared-item_cards-attributes_component__label">Software Version: </span>
      <span class="shared-item_cards-attributes_component__value">WordPress 4.9.x - 6.4.x</span>
    </li>
    <li class="shared-item_cards-attributes_component__attribute">
      <span class="shared-item_cards-attributes_component__label">Compatible With: </span>
      <span class="shared-item_cards-attributes_component__value">Contact Form 7, Elementor, Elementor Pro, Gravity Forms, Visual Composer, WooCommerce 6.x.x - 7.x.x, WPBakery Page Builder, WPML, Bootstrap 4.x</span>
    </li>
</ul>

          <div class="shared-item_cards-included_files_component__root">
  File Types Included:
  <ul>
      <li class="shared-item_cards-included_files_component__fileType">JavaScript JS</li>
      <li class="shared-item_cards-included_files_component__fileType">JavaScript JSON</li>
      <li class="shared-item_cards-included_files_component__fileType">HTML</li>
      <li class="shared-item_cards-included_files_component__fileType">XML</li>
      <li class="shared-item_cards-included_files_component__fileType">CSS</li>
      <li class="shared-item_cards-included_files_component__fileType">LESS</li>
      <li class="shared-item_cards-included_files_component__fileType">PHP</li>
  </ul>
</div>

      </div>
    </div>
    <div class="shared-item_cards-list-image_card_component__priceWrapper">
      <div class="shared-item_cards-list-image_card_component__info">
        <div class="shared-item_cards-list-image_card_component__favAndCollections">
          <a
  href="/my/bookmarks/new?item_id=16973546"
  class="shared-item_cards-collection_button_component__collection"
  role="button"
  aria-label="Add to collection"
  title="Add to collection"
  rel="nofollow"
  data-controller="collection-button"
  data-action="collection-button#open analytics-event#send"
  data-bookmark-button-target="bookmarkButton"
  data-item-id="16973546"
  data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;Item&quot;,&quot;eventLabel&quot;:&quot;collection;click&quot;,&quot;eventValue&quot;:16973546}"
>
  <span class="shared-item_cards-collection_button_component__icon">
    <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#collection'></use>
</svg>

  </span>
</a>

          <span class="shared-item_cards-list-image_card_component__buttonSeparator"></span>
          <form method="post"
      action="/my/favorites/16973546"
      data-controller="favorite-button"
      data-action="submit->favorite-button#submit favoritesStoreUpdated@window->favorite-button#updateFromStore">
  <input type="hidden" name="_method" value="post" data-favorite-button-target="formMethod">
  <button type="submit"
          aria-label="Add to Favorites"
          class="shared-item_cards-favorite_button_component__favoriteButton"
          data-favorite-button-target="favoriteButton"
          data-favorited="false"
          data-item-id="16973546">
    <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#heart'></use>
</svg>

  </button>
</form>

        </div>
        <div class="shared-item_cards-price_component__root">
    $39
</div>

        <div class="shared-item_cards-list-image_card_component__ratingWrapper"><div class="shared-stars_rating_component__root">
  <div
    class="shared-stars_rating_component__starRating"
    role="img"
    aria-label="Rated 4.94 out of 5, 372 reviews"
  >
    <span class="shared-stars_rating_component__star">
      <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#stars_5.0'></use>
</svg>

    </span>
  </div>
  <span aria-hidden="true" class="shared-stars_rating_component__starRatingCount">(372)</span>
</div>
</div>
        <div class="shared-item_cards-sales_component__root">
  11K Sales
</div>

        <div class="shared-item_cards-list-image_card_component__lastUpdated shared-item_cards-list-image_card_component__tinyText">
          Last updated: 04 Jan 24
        </div>
      </div>
      <div class="shared-item_cards-list-image_card_component__coverWrapper">
            <a
  class="shared-item_cards-add_to_cart_button_component__root shared-item_cards-add_to_cart_button_component__compact"
  role="button"
  title="Add to cart"
  aria-label="Add to cart"
  href="/cart/configure_before_adding/16973546"
  rel="nofollow"
  data-controller="cart-button modal-commander"
  data-action="click->modal-commander#open cartStoreUpdated@window->cart-button#updateFromStore analytics-event#send"
  data-modal-commander-url-value="/my/cart_entries?item_id=16973546"
  data-modal-commander-method-value="POST"
  data-cart-button-item-id-value="16973546"
  data-cart-button-in-cart-class="shared-item_cards-add_to_cart_button_component__inCart"
  data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;agilelogix&quot;,&quot;category&quot;:&quot;codecanyon.net/wordpress/ecommerce/woocommerce&quot;,&quot;id&quot;:16973546,&quot;list&quot;:&quot;Search Results: Category&quot;,&quot;name&quot;:&quot;Store Locator (Google Maps) For WordPress&quot;,&quot;position&quot;:28}],[&quot;ec:setAction&quot;,&quot;add&quot;],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Add to cart: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;cart button&quot;,&quot;eventValue&quot;:16973546}]]"
>
    <span class="shared-item_cards-add_to_cart_button_component__cartIcon">
      <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#cart'></use>
</svg>

    </span>
</a>

          <a href="https://codecanyon.net/item/agile-store-locator-google-maps-for-wordpress/full_screen_preview/16973546"
   class="shared-item_cards-preview_button_with_analytics_component__root"
   target="_blank"
   rel="noopener"
   data-action="analytics-event#send"
   data-analytics-event="{&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click;button&quot;,&quot;eventLabel&quot;:&quot;Preview;16973546&quot;,&quot;hitType&quot;:&quot;event&quot;}">
  Live Preview
</a>

      </div>
    </div>
  </div>
</div>

</div>

    <div class="shared-item_cards-card_component__root">
  <div class="shared-item_cards-list-image_card_component__root"
     data-analytics-item-impressions-target="item"
     data-favorites-loader-target="item"
     data-item-id="22800580"
     data-impression-position="29"
     data-impression-name="WhatsApp Chat WordPress"
     data-impression-list="Search Results: Category"
     data-impression-brand="NinjaTeam"
     data-impression-category="codecanyon.net/wordpress/social-networking"
>
  <div class="shared-item_cards-list-image_card_component__contentWrapper shared-item_cards-list-image_card_component__landscapeImage">
    <a class="shared-item_cards-list-image_card_component__itemLinkOverlay"
       href="https://codecanyon.net/item/whatsapp-chat-wordpress/22800580"
       title="WhatsApp Chat WordPress"
       aria-label="View WhatsApp Chat WordPress"
       data-turbo="false"
       data-action="analytics-event#send"
       data-analytics-event="[[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;whitespace&quot;,&quot;eventValue&quot;:22800580}]]"></a>
    <div class="shared-item_cards-list-image_card_component__imageWrapper">
      <div class="shared-item_cards-preview_image_component__carousel shared-item_cards-preview_image_component__singleImage"
  style="padding-bottom: 50.847457627118644%"
>
  <a class="shared-item_cards-preview_image_component__imageLink" data-turbo="false" data-action="analytics-event#send" data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;NinjaTeam&quot;,&quot;category&quot;:&quot;codecanyon.net/wordpress/social-networking&quot;,&quot;id&quot;:22800580,&quot;list&quot;:&quot;Search Results: Category&quot;,&quot;name&quot;:&quot;WhatsApp Chat WordPress&quot;,&quot;position&quot;:29}],[&quot;ec:setAction&quot;,&quot;click&quot;,{&quot;list&quot;:&quot;Search Results: Category&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Product click: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;image&quot;,&quot;eventValue&quot;:22800580}]]" href="https://codecanyon.net/item/whatsapp-chat-wordpress/22800580">
      <img src="https://codecanyon.img.customer.envatousercontent.com/files/256554390/WhatsApp-chat-WordPress.png?auto=compress%2Cformat&amp;fit=crop&amp;crop=top&amp;w=590&amp;h=300&amp;s=bbd64aef2f797f276135f3e305a85e45"
        loading="lazy"
        style="left: 0%"
        class="shared-item_cards-preview_image_component__image"
        alt="WhatsApp Chat WordPress"
        title="WhatsApp Chat WordPress"
        width="590"
        height="300"
        data-controller="image-preview"
        data-action="error->image-preview#setFallback"
        data-fallback="https://previews.customer.envatousercontent.com/files/256554390/WhatsApp-chat-WordPress.png"
        data-carousel-target="image"
      />
</a></div>

      <div class="shared-item_cards-list-image_card_component__gradient" style="padding-top: 50.847457627118644%;">
        <div class="shared-item_cards-list-image_card_component__buttons">
          <a
  href="/my/bookmarks/new?item_id=22800580"
  class="shared-item_cards-collection_button_component__collection"
  role="button"
  aria-label="Add to collection"
  title="Add to collection"
  rel="nofollow"
  data-controller="collection-button"
  data-action="collection-button#open analytics-event#send"
  data-bookmark-button-target="bookmarkButton"
  data-item-id="22800580"
  data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;Item&quot;,&quot;eventLabel&quot;:&quot;collection;click&quot;,&quot;eventValue&quot;:22800580}"
>
  <span class="shared-item_cards-collection_button_component__icon">
    <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#collection'></use>
</svg>

  </span>
</a>

          <span class="shared-item_cards-list-image_card_component__buttonSeparator"></span>
          <form method="post"
      action="/my/favorites/22800580"
      data-controller="favorite-button"
      data-action="submit->favorite-button#submit favoritesStoreUpdated@window->favorite-button#updateFromStore">
  <input type="hidden" name="_method" value="post" data-favorite-button-target="formMethod">
  <button type="submit"
          aria-label="Add to Favorites"
          class="shared-item_cards-favorite_button_component__favoriteButton"
          data-favorite-button-target="favoriteButton"
          data-favorited="false"
          data-item-id="22800580">
    <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#heart'></use>
</svg>

  </button>
</form>

        </div>
      </div>
    </div>
    <span class="shared-item_cards-sash_component__sash shared-item_cards-sash_component__sash_trending" style="width: 50px; height: 50px;">
  <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#sash_trending'></use>
</svg>

</span>

    <div class="shared-item_cards-list-image_card_component__detailsWrapper">
      <h3 class="shared-item_cards-item_name_component__root">
  <a class="shared-item_cards-item_name_component__itemNameLink" tabindex="0" data-turbo="false" data-action="analytics-event#send" data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;NinjaTeam&quot;,&quot;category&quot;:&quot;codecanyon.net/wordpress/social-networking&quot;,&quot;id&quot;:22800580,&quot;list&quot;:&quot;Search Results: Category&quot;,&quot;name&quot;:&quot;WhatsApp Chat WordPress&quot;,&quot;position&quot;:29}],[&quot;ec:setAction&quot;,&quot;click&quot;,{&quot;list&quot;:&quot;Search Results: Category&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Product click: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;item title&quot;,&quot;eventValue&quot;:22800580}]]" href="https://codecanyon.net/item/whatsapp-chat-wordpress/22800580">WhatsApp Chat WordPress</a>
</h3>

      <div>
        <div class="shared-item_cards-author_category_component__root">
  <i>by</i>
  <a
    href="https://codecanyon.net/user/ninjateam"
    class="shared-item_cards-author_category_component__link"
    rel="nofollow"
    data-turbo="false"
      data-action="analytics-event#send"
      data-analytics-event="[[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;author name&quot;,&quot;eventValue&quot;:22800580}]]"
  >
    NinjaTeam
  </a>
  in
  <a
    href="/category/wordpress/social-networking"
    class="shared-item_cards-author_category_component__link"
      data-action="analytics-event#send"
      data-analytics-event="[[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;category&quot;,&quot;eventValue&quot;:22800580}]]"
    }
  >
    Social Networking
  </a>
</div>

      </div>
      <div class="shared-item_cards-list-image_card_component__attrsWrapper">
          <ul>
    <li class="shared-item_cards-attributes_component__attribute">
      <span class="shared-item_cards-attributes_component__label">Software Version: </span>
      <span class="shared-item_cards-attributes_component__value">WordPress 4.9.x - 6.4.x</span>
    </li>
    <li class="shared-item_cards-attributes_component__attribute">
      <span class="shared-item_cards-attributes_component__label">Compatible With: </span>
      <span class="shared-item_cards-attributes_component__value">Elementor, Elementor Pro, WooCommerce 5.x.x - 6.x.x</span>
    </li>
</ul>

          <div class="shared-item_cards-included_files_component__root">
  File Types Included:
  <ul>
      <li class="shared-item_cards-included_files_component__fileType">JavaScript JS</li>
      <li class="shared-item_cards-included_files_component__fileType">HTML</li>
      <li class="shared-item_cards-included_files_component__fileType">CSS</li>
      <li class="shared-item_cards-included_files_component__fileType">PHP</li>
  </ul>
</div>

      </div>
    </div>
    <div class="shared-item_cards-list-image_card_component__priceWrapper">
      <div class="shared-item_cards-list-image_card_component__info">
        <div class="shared-item_cards-list-image_card_component__favAndCollections">
          <a
  href="/my/bookmarks/new?item_id=22800580"
  class="shared-item_cards-collection_button_component__collection"
  role="button"
  aria-label="Add to collection"
  title="Add to collection"
  rel="nofollow"
  data-controller="collection-button"
  data-action="collection-button#open analytics-event#send"
  data-bookmark-button-target="bookmarkButton"
  data-item-id="22800580"
  data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;Item&quot;,&quot;eventLabel&quot;:&quot;collection;click&quot;,&quot;eventValue&quot;:22800580}"
>
  <span class="shared-item_cards-collection_button_component__icon">
    <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#collection'></use>
</svg>

  </span>
</a>

          <span class="shared-item_cards-list-image_card_component__buttonSeparator"></span>
          <form method="post"
      action="/my/favorites/22800580"
      data-controller="favorite-button"
      data-action="submit->favorite-button#submit favoritesStoreUpdated@window->favorite-button#updateFromStore">
  <input type="hidden" name="_method" value="post" data-favorite-button-target="formMethod">
  <button type="submit"
          aria-label="Add to Favorites"
          class="shared-item_cards-favorite_button_component__favoriteButton"
          data-favorite-button-target="favoriteButton"
          data-favorited="false"
          data-item-id="22800580">
    <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#heart'></use>
</svg>

  </button>
</form>

        </div>
        <div class="shared-item_cards-price_component__root">
    $25
</div>

        <div class="shared-item_cards-list-image_card_component__ratingWrapper"><div class="shared-stars_rating_component__root">
  <div
    class="shared-stars_rating_component__starRating"
    role="img"
    aria-label="Rated 4.96 out of 5, 200 reviews"
  >
    <span class="shared-stars_rating_component__star">
      <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#stars_5.0'></use>
</svg>

    </span>
  </div>
  <span aria-hidden="true" class="shared-stars_rating_component__starRatingCount">(200)</span>
</div>
</div>
        <div class="shared-item_cards-sales_component__root">
  5.3K Sales
</div>

        <div class="shared-item_cards-list-image_card_component__lastUpdated shared-item_cards-list-image_card_component__tinyText">
          Last updated: 15 Jan 24
        </div>
      </div>
      <div class="shared-item_cards-list-image_card_component__coverWrapper">
            <a
  class="shared-item_cards-add_to_cart_button_component__root shared-item_cards-add_to_cart_button_component__compact"
  role="button"
  title="Add to cart"
  aria-label="Add to cart"
  href="/cart/configure_before_adding/22800580"
  rel="nofollow"
  data-controller="cart-button modal-commander"
  data-action="click->modal-commander#open cartStoreUpdated@window->cart-button#updateFromStore analytics-event#send"
  data-modal-commander-url-value="/my/cart_entries?item_id=22800580"
  data-modal-commander-method-value="POST"
  data-cart-button-item-id-value="22800580"
  data-cart-button-in-cart-class="shared-item_cards-add_to_cart_button_component__inCart"
  data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;NinjaTeam&quot;,&quot;category&quot;:&quot;codecanyon.net/wordpress/social-networking&quot;,&quot;id&quot;:22800580,&quot;list&quot;:&quot;Search Results: Category&quot;,&quot;name&quot;:&quot;WhatsApp Chat WordPress&quot;,&quot;position&quot;:29}],[&quot;ec:setAction&quot;,&quot;add&quot;],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Add to cart: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;cart button&quot;,&quot;eventValue&quot;:22800580}]]"
>
    <span class="shared-item_cards-add_to_cart_button_component__cartIcon">
      <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#cart'></use>
</svg>

    </span>
</a>

          <a href="https://codecanyon.net/item/whatsapp-chat-wordpress/full_screen_preview/22800580"
   class="shared-item_cards-preview_button_with_analytics_component__root"
   target="_blank"
   rel="noopener"
   data-action="analytics-event#send"
   data-analytics-event="{&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click;button&quot;,&quot;eventLabel&quot;:&quot;Preview;22800580&quot;,&quot;hitType&quot;:&quot;event&quot;}">
  Live Preview
</a>

      </div>
    </div>
  </div>
</div>

</div>

    <div class="shared-item_cards-card_component__root">
  <div class="shared-item_cards-list-image_card_component__root"
     data-analytics-item-impressions-target="item"
     data-favorites-loader-target="item"
     data-item-id="7103891"
     data-impression-position="30"
     data-impression-name="NEX-Forms - The Ultimate WordPress Form Builder"
     data-impression-list="Search Results: Category"
     data-impression-brand="Basix"
     data-impression-category="codecanyon.net/wordpress/forms"
>
  <div class="shared-item_cards-list-image_card_component__contentWrapper shared-item_cards-list-image_card_component__landscapeImage">
    <a class="shared-item_cards-list-image_card_component__itemLinkOverlay"
       href="https://codecanyon.net/item/nexforms-the-ultimate-wordpress-form-builder/7103891"
       title="NEX-Forms - The Ultimate WordPress Form Builder"
       aria-label="View NEX-Forms - The Ultimate WordPress Form Builder"
       data-turbo="false"
       data-action="analytics-event#send"
       data-analytics-event="[[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;whitespace&quot;,&quot;eventValue&quot;:7103891}]]"></a>
    <div class="shared-item_cards-list-image_card_component__imageWrapper">
      <div class="shared-item_cards-preview_image_component__carousel shared-item_cards-preview_image_component__singleImage"
  style="padding-bottom: 50.847457627118644%"
>
  <a class="shared-item_cards-preview_image_component__imageLink" data-turbo="false" data-action="analytics-event#send" data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;Basix&quot;,&quot;category&quot;:&quot;codecanyon.net/wordpress/forms&quot;,&quot;id&quot;:7103891,&quot;list&quot;:&quot;Search Results: Category&quot;,&quot;name&quot;:&quot;NEX-Forms - The Ultimate WordPress Form Builder&quot;,&quot;position&quot;:30}],[&quot;ec:setAction&quot;,&quot;click&quot;,{&quot;list&quot;:&quot;Search Results: Category&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Product click: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;image&quot;,&quot;eventValue&quot;:7103891}]]" href="https://codecanyon.net/item/nexforms-the-ultimate-wordpress-form-builder/7103891">
      <img src="https://codecanyon.img.customer.envatousercontent.com/files/479595017/nex-forms-premium-wordpress-form-builder-free-add-ons-sale.png?auto=compress%2Cformat&amp;fit=crop&amp;crop=top&amp;w=590&amp;h=300&amp;s=8f5f1297be9aa5b92d04a12c8f9b2ea6"
        loading="lazy"
        style="left: 0%"
        class="shared-item_cards-preview_image_component__image"
        alt="NEX-Forms - The Ultimate WordPress Form Builder"
        title="NEX-Forms - The Ultimate WordPress Form Builder"
        width="590"
        height="300"
        data-controller="image-preview"
        data-action="error->image-preview#setFallback"
        data-fallback="https://previews.customer.envatousercontent.com/files/479595017/nex-forms-premium-wordpress-form-builder-free-add-ons-sale.png"
        data-carousel-target="image"
      />
</a></div>

      <div class="shared-item_cards-list-image_card_component__gradient" style="padding-top: 50.847457627118644%;">
        <div class="shared-item_cards-list-image_card_component__buttons">
          <a
  href="/my/bookmarks/new?item_id=7103891"
  class="shared-item_cards-collection_button_component__collection"
  role="button"
  aria-label="Add to collection"
  title="Add to collection"
  rel="nofollow"
  data-controller="collection-button"
  data-action="collection-button#open analytics-event#send"
  data-bookmark-button-target="bookmarkButton"
  data-item-id="7103891"
  data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;Item&quot;,&quot;eventLabel&quot;:&quot;collection;click&quot;,&quot;eventValue&quot;:7103891}"
>
  <span class="shared-item_cards-collection_button_component__icon">
    <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#collection'></use>
</svg>

  </span>
</a>

          <span class="shared-item_cards-list-image_card_component__buttonSeparator"></span>
          <form method="post"
      action="/my/favorites/7103891"
      data-controller="favorite-button"
      data-action="submit->favorite-button#submit favoritesStoreUpdated@window->favorite-button#updateFromStore">
  <input type="hidden" name="_method" value="post" data-favorite-button-target="formMethod">
  <button type="submit"
          aria-label="Add to Favorites"
          class="shared-item_cards-favorite_button_component__favoriteButton"
          data-favorite-button-target="favoriteButton"
          data-favorited="false"
          data-item-id="7103891">
    <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#heart'></use>
</svg>

  </button>
</form>

        </div>
      </div>
    </div>
    <span class="shared-item_cards-sash_component__sash shared-item_cards-sash_component__sash_trending" style="width: 50px; height: 50px;">
  <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#sash_trending'></use>
</svg>

</span>

    <div class="shared-item_cards-list-image_card_component__detailsWrapper">
      <h3 class="shared-item_cards-item_name_component__root">
  <a class="shared-item_cards-item_name_component__itemNameLink" tabindex="0" data-turbo="false" data-action="analytics-event#send" data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;Basix&quot;,&quot;category&quot;:&quot;codecanyon.net/wordpress/forms&quot;,&quot;id&quot;:7103891,&quot;list&quot;:&quot;Search Results: Category&quot;,&quot;name&quot;:&quot;NEX-Forms - The Ultimate WordPress Form Builder&quot;,&quot;position&quot;:30}],[&quot;ec:setAction&quot;,&quot;click&quot;,{&quot;list&quot;:&quot;Search Results: Category&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Product click: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;item title&quot;,&quot;eventValue&quot;:7103891}]]" href="https://codecanyon.net/item/nexforms-the-ultimate-wordpress-form-builder/7103891">NEX-Forms - The Ultimate WordPress Form Builder</a>
</h3>

      <div>
        <div class="shared-item_cards-author_category_component__root">
  <i>by</i>
  <a
    href="https://codecanyon.net/user/basix"
    class="shared-item_cards-author_category_component__link"
    rel="nofollow"
    data-turbo="false"
      data-action="analytics-event#send"
      data-analytics-event="[[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;author name&quot;,&quot;eventValue&quot;:7103891}]]"
  >
    Basix
  </a>
  in
  <a
    href="/category/wordpress/forms"
    class="shared-item_cards-author_category_component__link"
      data-action="analytics-event#send"
      data-analytics-event="[[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;category&quot;,&quot;eventValue&quot;:7103891}]]"
    }
  >
    Forms
  </a>
</div>

      </div>
      <div class="shared-item_cards-list-image_card_component__attrsWrapper">
          <ul>
    <li class="shared-item_cards-attributes_component__attribute">
      <span class="shared-item_cards-attributes_component__label">Software Version: </span>
      <span class="shared-item_cards-attributes_component__value">WordPress 4.9.x - 6.3.x</span>
    </li>
    <li class="shared-item_cards-attributes_component__attribute">
      <span class="shared-item_cards-attributes_component__label">Compatible With: </span>
      <span class="shared-item_cards-attributes_component__value">Elementor, Elementor Pro, Visual Composer, WPBakery Page Builder, WPML, Bootstrap 4.x - 5.x</span>
    </li>
</ul>

          <div class="shared-item_cards-included_files_component__root">
  File Types Included:
  <ul>
      <li class="shared-item_cards-included_files_component__fileType">JavaScript JS</li>
      <li class="shared-item_cards-included_files_component__fileType">HTML</li>
      <li class="shared-item_cards-included_files_component__fileType">CSS</li>
      <li class="shared-item_cards-included_files_component__fileType">PHP</li>
  </ul>
</div>

      </div>
    </div>
    <div class="shared-item_cards-list-image_card_component__priceWrapper">
      <div class="shared-item_cards-list-image_card_component__info">
        <div class="shared-item_cards-list-image_card_component__favAndCollections">
          <a
  href="/my/bookmarks/new?item_id=7103891"
  class="shared-item_cards-collection_button_component__collection"
  role="button"
  aria-label="Add to collection"
  title="Add to collection"
  rel="nofollow"
  data-controller="collection-button"
  data-action="collection-button#open analytics-event#send"
  data-bookmark-button-target="bookmarkButton"
  data-item-id="7103891"
  data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;Item&quot;,&quot;eventLabel&quot;:&quot;collection;click&quot;,&quot;eventValue&quot;:7103891}"
>
  <span class="shared-item_cards-collection_button_component__icon">
    <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#collection'></use>
</svg>

  </span>
</a>

          <span class="shared-item_cards-list-image_card_component__buttonSeparator"></span>
          <form method="post"
      action="/my/favorites/7103891"
      data-controller="favorite-button"
      data-action="submit->favorite-button#submit favoritesStoreUpdated@window->favorite-button#updateFromStore">
  <input type="hidden" name="_method" value="post" data-favorite-button-target="formMethod">
  <button type="submit"
          aria-label="Add to Favorites"
          class="shared-item_cards-favorite_button_component__favoriteButton"
          data-favorite-button-target="favoriteButton"
          data-favorited="false"
          data-item-id="7103891">
    <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#heart'></use>
</svg>

  </button>
</form>

        </div>
        <div class="shared-item_cards-price_component__root">
    $39
</div>

        <div class="shared-item_cards-list-image_card_component__ratingWrapper"><div class="shared-stars_rating_component__root">
  <div
    class="shared-stars_rating_component__starRating"
    role="img"
    aria-label="Rated 4.63 out of 5, 1K reviews"
  >
    <span class="shared-stars_rating_component__star">
      <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#stars_4.5'></use>
</svg>

    </span>
  </div>
  <span aria-hidden="true" class="shared-stars_rating_component__starRatingCount">(1K)</span>
</div>
</div>
        <div class="shared-item_cards-sales_component__root">
  16K Sales
</div>

        <div class="shared-item_cards-list-image_card_component__lastUpdated shared-item_cards-list-image_card_component__tinyText">
          Last updated: 04 Dec 23
        </div>
      </div>
      <div class="shared-item_cards-list-image_card_component__coverWrapper">
            <a
  class="shared-item_cards-add_to_cart_button_component__root shared-item_cards-add_to_cart_button_component__compact"
  role="button"
  title="Add to cart"
  aria-label="Add to cart"
  href="/cart/configure_before_adding/7103891"
  rel="nofollow"
  data-controller="cart-button modal-commander"
  data-action="click->modal-commander#open cartStoreUpdated@window->cart-button#updateFromStore analytics-event#send"
  data-modal-commander-url-value="/my/cart_entries?item_id=7103891"
  data-modal-commander-method-value="POST"
  data-cart-button-item-id-value="7103891"
  data-cart-button-in-cart-class="shared-item_cards-add_to_cart_button_component__inCart"
  data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;Basix&quot;,&quot;category&quot;:&quot;codecanyon.net/wordpress/forms&quot;,&quot;id&quot;:7103891,&quot;list&quot;:&quot;Search Results: Category&quot;,&quot;name&quot;:&quot;NEX-Forms - The Ultimate WordPress Form Builder&quot;,&quot;position&quot;:30}],[&quot;ec:setAction&quot;,&quot;add&quot;],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Add to cart: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;cart button&quot;,&quot;eventValue&quot;:7103891}]]"
>
    <span class="shared-item_cards-add_to_cart_button_component__cartIcon">
      <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#cart'></use>
</svg>

    </span>
</a>

          <a href="https://codecanyon.net/item/nexforms-the-ultimate-wordpress-form-builder/full_screen_preview/7103891"
   class="shared-item_cards-preview_button_with_analytics_component__root"
   target="_blank"
   rel="noopener"
   data-action="analytics-event#send"
   data-analytics-event="{&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click;button&quot;,&quot;eventLabel&quot;:&quot;Preview;7103891&quot;,&quot;hitType&quot;:&quot;event&quot;}">
  Live Preview
</a>

      </div>
    </div>
  </div>
</div>

</div>

</div>

          <nav class="search-controls-pagination_nav_component__root" aria-label="pagination">
  <ul class="search-controls-pagination_nav_component__list">

      <li class="search-controls-pagination_nav_component__listItem">
        <a class="search-controls-pagination_nav_component__pageLink search-controls-pagination_nav_component__currentPage" rel="nofollow" title="Page 1" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;pagination&quot;,&quot;eventLabel&quot;:&quot;page-number; 1&quot;}" href="/category/wordpress?compatible_with=Elementor&amp;sort=trending&amp;term=elementor#content">1</a>
      </li>
      <li class="search-controls-pagination_nav_component__listItem">
        <a class="search-controls-pagination_nav_component__pageLink" rel="nofollow" title="Page 2" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;pagination&quot;,&quot;eventLabel&quot;:&quot;page-number; 2&quot;}" href="/category/wordpress?compatible_with=Elementor&amp;page=2&amp;sort=trending&amp;term=elementor#content">2</a>
      </li>
      <li class="search-controls-pagination_nav_component__listItem">
        <a class="search-controls-pagination_nav_component__pageLink" rel="nofollow" title="Page 3" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;pagination&quot;,&quot;eventLabel&quot;:&quot;page-number; 3&quot;}" href="/category/wordpress?compatible_with=Elementor&amp;page=3&amp;sort=trending&amp;term=elementor#content">3</a>
      </li>
      <li class="search-controls-pagination_nav_component__listItem">
        <a class="search-controls-pagination_nav_component__pageLink" rel="nofollow" title="Page 4" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;pagination&quot;,&quot;eventLabel&quot;:&quot;page-number; 4&quot;}" href="/category/wordpress?compatible_with=Elementor&amp;page=4&amp;sort=trending&amp;term=elementor#content">4</a>
      </li>
      <li class="search-controls-pagination_nav_component__listItem">
        <a class="search-controls-pagination_nav_component__pageLink" rel="nofollow" title="Page 5" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;pagination&quot;,&quot;eventLabel&quot;:&quot;page-number; 5&quot;}" href="/category/wordpress?compatible_with=Elementor&amp;page=5&amp;sort=trending&amp;term=elementor#content">5</a>
      </li>
      <li class="search-controls-pagination_nav_component__listItem">
        <a class="search-controls-pagination_nav_component__pageLink" rel="nofollow" title="Page 6" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;pagination&quot;,&quot;eventLabel&quot;:&quot;page-number; 6&quot;}" href="/category/wordpress?compatible_with=Elementor&amp;page=6&amp;sort=trending&amp;term=elementor#content">6</a>
      </li>
      <li class="search-controls-pagination_nav_component__listItem">
        <a class="search-controls-pagination_nav_component__pageLink" rel="nofollow" title="Page 7" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;pagination&quot;,&quot;eventLabel&quot;:&quot;page-number; 7&quot;}" href="/category/wordpress?compatible_with=Elementor&amp;page=7&amp;sort=trending&amp;term=elementor#content">7</a>
      </li>
      <li class="search-controls-pagination_nav_component__listItem">
        <a class="search-controls-pagination_nav_component__pageLink" rel="nofollow" title="Page 8" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;pagination&quot;,&quot;eventLabel&quot;:&quot;page-number; 8&quot;}" href="/category/wordpress?compatible_with=Elementor&amp;page=8&amp;sort=trending&amp;term=elementor#content">8</a>
      </li>
      <li class="search-controls-pagination_nav_component__listItem">
        <a class="search-controls-pagination_nav_component__pageLink" rel="nofollow" title="Page 9" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;pagination&quot;,&quot;eventLabel&quot;:&quot;page-number; 9&quot;}" href="/category/wordpress?compatible_with=Elementor&amp;page=9&amp;sort=trending&amp;term=elementor#content">9</a>
      </li>



      <li class="search-controls-pagination_nav_component__listItem">
        <span class="search-controls-pagination_nav_component__spacer">...</span>
      </li>

      <li class="search-controls-pagination_nav_component__listItem">
        <a class="search-controls-pagination_nav_component__pageLink" rel="nofollow" title="Page 48" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;pagination&quot;,&quot;eventLabel&quot;:&quot;page-number; 48&quot;}" href="/category/wordpress?compatible_with=Elementor&amp;page=48&amp;sort=trending&amp;term=elementor#content">48</a>
      </li>

      <li class="search-controls-pagination_nav_component__listItem">
        <a class="search-controls-pagination_nav_component__arrowLink search-controls-pagination_nav_component__arrowRight" rel="nofollow" title="Next page" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;pagination; next&quot;,&quot;eventLabel&quot;:&quot;page-number; 2&quot;}" href="/category/wordpress?compatible_with=Elementor&amp;page=2&amp;sort=trending&amp;term=elementor#content">
          <span class="search-controls-pagination_nav_component__chevronWrapper">
            <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#chevron_left'></use>
</svg>

          </span>
</a>      </li>
  </ul>
</nav>

        </div>

        <div class="search-useful_searches_related_terms_component__root">
    <div class="search-useful_searches_related_terms_component__primaryBox">
      <div class="search-useful_searches_related_terms_component__label">Related Searches</div>
      <div
  class="search-related_terms_slider_component__root"
  data-controller="related-term-slider"
  data-action="resize@window->related-term-slider#isSliderRequired"
>
  <div class="search-related_terms_slider_component__inner"
       data-related-term-slider-target="inner"
       data-action="scroll->related-term-slider#calculateButtonVisibility">
      <button class="search-related_terms_slider_component__buttonPrev"
              data-action="click->related-term-slider#slidePrevious"
              aria-label="Previous Slide"
      >
        <div class="search-related_terms_slider_component__buttonIcon">
          <svg viewBox="0 0 16 31"><path d="M15.813 2.849L13.58.375.187 15.219 13.58 30.063l2.232-2.474-11.16-12.37 11.16-12.37z"></path></svg>
        </div>
      </button>
      <button class="search-related_terms_slider_component__buttonNext"
              data-action="click->related-term-slider#slideNext"
              aria-label="Next Slide"
      >
        <div class="search-related_terms_slider_component__buttonIcon">
          <svg viewBox="0 0 16 31"><path d="M.188 27.588l2.232 2.474L15.813 15.22 2.42.375.188 2.849l11.16 12.37-11.16 12.37z"></path></svg>
        </div>
      </button>
      <div data-related-term-slider-target="track" class="search-related_terms_slider_component__track">

          <div class="search-related_terms_slider_component__slide">
            <a class="search-related_terms_slider_component__pill" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;related-searches;wordpress&quot;,&quot;eventAction&quot;:&quot;click;a&quot;,&quot;eventLabel&quot;:&quot;search-term;chatbot&quot;}" href="/category/wordpress?term=chatbot">chatbot</a>
          </div>
          <div class="search-related_terms_slider_component__slide">
            <a class="search-related_terms_slider_component__pill" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;related-searches;wordpress&quot;,&quot;eventAction&quot;:&quot;click;a&quot;,&quot;eventLabel&quot;:&quot;search-term;css&quot;}" href="/category/wordpress?term=css">css</a>
          </div>
          <div class="search-related_terms_slider_component__slide">
            <a class="search-related_terms_slider_component__pill" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;related-searches;wordpress&quot;,&quot;eventAction&quot;:&quot;click;a&quot;,&quot;eventLabel&quot;:&quot;search-term;filter&quot;}" href="/category/wordpress?term=filter">filter</a>
          </div>
          <div class="search-related_terms_slider_component__slide">
            <a class="search-related_terms_slider_component__pill" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;related-searches;wordpress&quot;,&quot;eventAction&quot;:&quot;click;a&quot;,&quot;eventLabel&quot;:&quot;search-term;lottie animations elementor&quot;}" href="/category/wordpress?term=lottie%20animations%20elementor">lottie animations elementor</a>
          </div>
          <div class="search-related_terms_slider_component__slide">
            <a class="search-related_terms_slider_component__pill" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;related-searches;wordpress&quot;,&quot;eventAction&quot;:&quot;click;a&quot;,&quot;eventLabel&quot;:&quot;search-term;yellow pencil&quot;}" href="/category/wordpress?term=yellow%20pencil">yellow pencil</a>
          </div>

      </div>
  </div>
</div>

    </div>

    <div class="search-useful_searches_related_terms_component__divider"></div>

    <div>
      <div class="search-useful_searches_related_terms_component__secondaryTermsLabel">Related searches from other categories</div>
      <div class="search-useful_searches_related_terms_component__secondaryTermsHolder">
          <div class="search-useful_searches_related_terms_component__categoryBox">
            <div class="search-useful_searches_related_terms_component__categoryLabel">All</div>
            <div class="search-useful_searches_related_terms_component__scrollWrapper">
              <div class="search-useful_searches_related_terms_component__scrollInner">
                <div class="search-useful_searches_related_terms_component__categoryLinks">
                    <a class="search-useful_searches_related_terms_component__term" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;related-searches;all&quot;,&quot;eventAction&quot;:&quot;click;a&quot;,&quot;eventLabel&quot;:&quot;search-term;element pack pro&quot;}" href="/search/element%20pack%20pro">element pack pro</a>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
</div>


         
         
      </main>
    </div>
    
    
        <div class="search-index_content__relatedPosts">
      
    </div>
  </div>
</div>


  <div class="shared-global_footer-cross_sell_component__root" data-nosnippet>
  <div class="shared-global_footer-cross_sell_component__gridContainer">
    <ul class="shared-global_footer-cross_sell_component__list">
      <li class="shared-global_footer-cross_sell_component__listItem">
        <a
          href="https://elements.envato.com/pricing?utm_source=codecanyon.net&amp;utm_campaign=elements_mkt-footer_18JULY2022&amp;utm_content=cc_global-footer&amp;utm_medium=promos"
          class="shared-global_footer-cross_sell_component__link"
          >
          <figure>
            <picture>
              <source srcset="https://assets.market-storefront.envato-static.com/storefront/assets/footer/cross-sell-elements-b0c560ebbdc140f552ca932909a4848bebcf59165e97810230e120fb23743ac8.avif" type="image/avif">
              <source srcset="https://assets.market-storefront.envato-static.com/storefront/assets/footer/cross-sell-elements-40862b626a62484d6d3230609f2b03a3ec1ce900da841a708e7095a4bdffa642.webp" type="image/webp">
              <img src="https://assets.market-storefront.envato-static.com/storefront/assets/footer/cross-sell-elements-81004268b3cc8abaced5ab8cc4c724961bbc541fa2be67de3a85d1448eaeb306.jpg"
                   loading="lazy"
                   alt="Envato Elements"
                   width="600" height="300"
                   class="shared-global_footer-cross_sell_component__image">
            </picture>
            <figcaption class="shared-global_footer-cross_sell_component__textContainer">
              <p class="shared-global_footer-cross_sell_component__title">
                Millions of creative assets, unlimited downloads.
              </p>
              <p class="shared-global_footer-cross_sell_component__subtitle">
                <small class="shared-global_footer-cross_sell_component__text">
                  One low cost subscription. Cancel any time.
                </small>
              </p>
            </figcaption>
          </figure>
        </a>
      </li>
      <li class="shared-global_footer-cross_sell_component__listItem">
        <a
          href="https://placeit.net?utm_source=codecanyon.net&amp;utm_medium=promos&amp;utm_content=cc_global-footer&amp;utm_campaign=placeit_mkt-footer_July2019"
          class="shared-global_footer-cross_sell_component__link"
          >
          <figure>
            <picture>
              <source srcset="https://assets.market-storefront.envato-static.com/storefront/assets/footer/cross-sell-placeit-46bebcf76de557030c2e7aaa8b66a9507157c23a721a9f49e8c926a00f81756a.avif" type="image/avif">
              <source srcset="https://assets.market-storefront.envato-static.com/storefront/assets/footer/cross-sell-placeit-f0e00e6a4cdf7b711c954bf68f8db3b2ff14c299d1582a94e017c84ad4f99746.webp" type="image/webp">
              <img src="https://assets.market-storefront.envato-static.com/storefront/assets/footer/cross-sell-placeit-9b3b3bc48a1a7d605e4438252bf11589d030241594428d4b9ecf10d6c1f23dec.jpg"
                   loading="lazy"
                   alt="Placeit"
                   width="600" height="300"
                   class="shared-global_footer-cross_sell_component__image">
            </picture>
            <figcaption class="shared-global_footer-cross_sell_component__textContainer">
              <p class="shared-global_footer-cross_sell_component__title">
                Effortless design and video. <br />
                Made online by you.
              </p>
              <p class="shared-global_footer-cross_sell_component__subtitle">
                <small class="shared-global_footer-cross_sell_component__text">
                  Smart templates ready for any skill level.
                </small>
              </p>
            </figcaption>
          </figure>
        </a>
      </li>
    </ul>
  </div>
</div>

  <footer class="shared-global_footer-footer_component__root" data-turbo="false">
  <div class="shared-global_footer-footer_component__topContainer">
    <div class="shared-global_footer-footer_component__topLinks">
        <nav class="shared-global_footer-footer_component__topLinksGroup" aria-label="Envato Market">
          <strong class="shared-global_footer-footer_component__topLinksGroupTitle">Envato Market</strong>
            <a
              class="shared-global_footer-footer_component__topLink"
              href="/legal/market">
              Terms
            </a>
            <a
              class="shared-global_footer-footer_component__topLink"
              href="/licenses">
              Licenses
            </a>
            <a
              class="shared-global_footer-footer_component__topLink"
              href="https://build.envato.com">
              Market API
            </a>
            <a
              class="shared-global_footer-footer_component__topLink"
              href="https://envato.com/market/affiliate-program">
              Become an affiliate
            </a>
        </nav>
        <nav class="shared-global_footer-footer_component__topLinksGroup" aria-label="Help">
          <strong class="shared-global_footer-footer_component__topLinksGroupTitle">Help</strong>
            <a
              class="shared-global_footer-footer_component__topLink"
              href="https://help.market.envato.com">
              Help Center
            </a>
            <a
              class="shared-global_footer-footer_component__topLink"
              href="https://help.author.envato.com/hc/en-us">
              Authors
            </a>
        </nav>
        <nav class="shared-global_footer-footer_component__topLinksGroup" aria-label="Our Community">
          <strong class="shared-global_footer-footer_component__topLinksGroupTitle">Our Community</strong>
            <a
              class="shared-global_footer-footer_component__topLink"
              href="http://community.envato.com">
              Community
            </a>
            <a
              class="shared-global_footer-footer_component__topLink"
              href="https://envato.com/blog">
              Blog
            </a>
            <a
              class="shared-global_footer-footer_component__topLink"
              href="https://forums.envato.com">
              Forums
            </a>
            <a
              class="shared-global_footer-footer_component__topLink"
              href="http://community.envato.com/#/events">
              Meetups
            </a>
        </nav>
        <nav class="shared-global_footer-footer_component__topLinksGroup" aria-label="Meet Envato">
          <strong class="shared-global_footer-footer_component__topLinksGroupTitle">Meet Envato</strong>
            <a
              class="shared-global_footer-footer_component__topLink"
              href="https://envato.com">
              About Envato
            </a>
            <a
              class="shared-global_footer-footer_component__topLink"
              href="http://careers.envato.com">
              Careers
            </a>
            <a
              class="shared-global_footer-footer_component__topLink"
              href="https://envato.com/privacy/">
              Privacy Policy
            </a>
            <a
              class="shared-global_footer-footer_component__topLink"
              href="https://envato.com/sitemap/">
              Sitemap
            </a>
        </nav>
    </div>
    <div class="shared-global_footer-footer_component__topStats">
      <div class="shared-global_footer-footer_component__topStatsMeta">
        <img loading="lazy"
             class="shared-global_footer-footer_component__logo"
             alt="Envato Market"
             width="168"
             height="20"
             src="https://assets.market-storefront.envato-static.com/storefront/assets/logos/envato-market-a5ace93f8482e885ae008eb481b9451d379599dfed24868e52b6b2d66f5cf633.svg" />
        <ul class="shared-global_footer-footer_component__statsList">
            <li class="shared-global_footer-footer_component__statsListItem">
              <span class="shared-global_footer-footer_component__stats">74,378,106</span>
              items sold
            </li>
            <li class="shared-global_footer-footer_component__statsListItem">
              <span class="shared-global_footer-footer_component__stats">$1,140,243,253</span>
              community earnings
            </li>
        </ul>
      </div>
      <div class="shared-global_footer-footer_component__bottomBCorp">
        <a href="https://bcorporation.net/en-us/find-a-b-corp/company/envato"
           class="shared-global_footer-footer_component__bcorpLink"
           target="_blank"
           rel="noopener">
          <img loading="lazy"
               width="50"
               height="84"
               alt="B Corp logo"
               class="shared-global_footer-footer_component__bcorpLogo"
               src="https://assets.market-storefront.envato-static.com/storefront/assets/logos/bcorp-fbdd18d9fd7274a0e6591e67408e26c55df20358c3c4eee496117b16874e1749.svg" />
          </a>
      </div>
    </div>
  </div>
  <div class="shared-global_footer-footer_component__bottomContainer">
    <nav class="shared-global_footer-footer_component__bottomSocial" itemscope itemtype="http://schema.org/Organization" aria-label="social">
        <a class="shared-global_footer-footer_component__socialLink" rel="nofollow" aria-label="Twitter" href="https://twitter.com/envato">          <img loading="lazy" alt="Twitter" title="Twitter" src="https://assets.market-storefront.envato-static.com/storefront/assets/social-icons/icon-twitter-6ad889010d07b5b6caa1e8c40d71131641bb97d9605ef8ef62d8cfe8ace6a817.svg" width="22" height="22" /></a>        <a class="shared-global_footer-footer_component__socialLink" rel="nofollow" aria-label="Facebook" href="https://www.facebook.com/envato">          <img loading="lazy" alt="Facebook" title="Facebook" src="https://assets.market-storefront.envato-static.com/storefront/assets/social-icons/icon-facebook-e29111786aec8117c019d01a351887605c22c29dd9c363b355789c06436aaf2f.svg" width="22" height="22" /></a>        <a class="shared-global_footer-footer_component__socialLink" rel="nofollow" aria-label="YouTube" href="https://www.youtube.com/user/Envato">          <img loading="lazy" alt="YouTube" title="YouTube" src="https://assets.market-storefront.envato-static.com/storefront/assets/social-icons/icon-youtube-6a45b3f582b34fb83cf3d2a4600f50f0c4431309a4434f853eac416be16aa37c.svg" width="22" height="22" /></a>        <a class="shared-global_footer-footer_component__socialLink" rel="nofollow" aria-label="Instagram" href="https://www.instagram.com/envato/">          <img loading="lazy" alt="Instagram" title="Instagram" src="https://assets.market-storefront.envato-static.com/storefront/assets/social-icons/icon-instagram-614e390114cada173d0094549cb1f260929b6432d3a1e6cff484302e4aabba09.svg" width="22" height="22" /></a>        <a class="shared-global_footer-footer_component__socialLink" rel="nofollow" aria-label="Pinterest" href="https://www.pinterest.com/envato/">          <img loading="lazy" alt="Pinterest" title="Pinterest" src="https://assets.market-storefront.envato-static.com/storefront/assets/social-icons/icon-pinterest-bb3b4207aa129cfef2e6fc210119c48c132ddb3a3a0c4c06c0acc128201128b7.svg" width="22" height="22" /></a>    </nav>
    <div class="shared-global_footer-footer_component__bottomLinks">
      <nav class="shared-global_footer-footer_component__companyLinks" aria-label="company">
          <a class="shared-global_footer-footer_component__companyLink" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;footer nav&quot;,&quot;eventAction&quot;:&quot;click;a&quot;,&quot;eventLabel&quot;:&quot;Envato.com&quot;}" href="https://envato.com">Envato.com</a>
          <a class="shared-global_footer-footer_component__companyLink" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;footer nav&quot;,&quot;eventAction&quot;:&quot;click;a&quot;,&quot;eventLabel&quot;:&quot;Envato Elements&quot;}" href="https://elements.envato.com?utm_campaign=elements_mkt-footernav">Envato Elements</a>
          <a class="shared-global_footer-footer_component__companyLink" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;footer nav&quot;,&quot;eventAction&quot;:&quot;click;a&quot;,&quot;eventLabel&quot;:&quot;Placeit by Envato&quot;}" href="https://placeit.net">Placeit by Envato</a>
          <a class="shared-global_footer-footer_component__companyLink" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;footer nav&quot;,&quot;eventAction&quot;:&quot;click;a&quot;,&quot;eventLabel&quot;:&quot;Envato Tuts+&quot;}" href="https://tutsplus.com">Envato Tuts+</a>
          <a class="shared-global_footer-footer_component__companyLink" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;footer nav&quot;,&quot;eventAction&quot;:&quot;click;a&quot;,&quot;eventLabel&quot;:&quot;All Products&quot;}" href="https://envato.com/products">All Products</a>
          <a class="shared-global_footer-footer_component__companyLink" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;footer nav&quot;,&quot;eventAction&quot;:&quot;click;a&quot;,&quot;eventLabel&quot;:&quot;Sitemap&quot;}" href="https://envato.com/sitemap/">Sitemap</a>
      </nav>
      <div class="shared-global_footer-footer_component__notice">
        Price is in US dollars and excludes tax and handling fees
      </div>
      <div class=shared-global_footer-footer_component__copyrights >
        © 2024 Envato Pty Ltd. Trademarks and brands are the property of their respective owners.
      </div>
    </div>
  </div>
</footer>

  <div class="shared-modal_component__overlay"
     data-controller="modal"
     data-modal-target="overlay"
     data-modal-noscroll-class="shared-modal_component__noscroll"
     data-modal-open-class="shared-modal_component__overlayOpen"
     data-modal-loading-hidden-class="shared-modal_component__hidden"
     data-action="command:modal:open@window->modal#open command:modal:close@window->modal#close">
  <div class="shared-modal_component__mask" data-modal-target="mask"
    data-action="click->modal#close"></div>
  <div data-modal-target="loading" class="shared-modal_component__loading">
    <svg class="shared-spinner_component__spinner shared-spinner_component__large" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
  <circle class="shared-spinner_component__path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30">
  </circle>
</svg>
  </div>
  <div data-modal-target="content" class="shared-modal_component__content" tabindex="-1" aria-label="Modal"></div>
</div>

  <div data-nosnippet
  id="market-banner"
  data-controller="banner"
  data-action="click->banner#click CookiebotOnAccept@window->banner#handleCookieBotConsent"
  data-banner-show-class="shared-banner_component__visibleTop"
  data-banner-data-value="{&quot;banners&quot;:[{&quot;id&quot;:&quot;elements_mkt-header_general_11Dec2023&quot;,&quot;html&quot;:&quot;\u003cdiv class=\&quot;headerstrip-wrapper\&quot;\u003e\n  \u003ca class=\&quot;headerstrip js-banner__link\&quot; href=\&quot;https://elements.envato.com/pricing?utm_campaign=elements_mkt-header_general_11Dec2023\u0026amp;utm_content=cc_marketing-banner\u0026amp;utm_medium=promos\u0026amp;utm_source=codecanyon.net\&quot; target=\&quot;_blank\&quot; rel=\&quot;noopener noreferrer\&quot;\u003e\n    \u003cdiv class=\&quot;headerstrip-content-background\&quot;\u003e\u003c/div\u003e\n    \u003cdiv class=\&quot;headerstrip-content-wrapper\&quot;\u003e\n        \u003cbutton title=\&quot;dismiss\&quot; type=\&quot;button\&quot; class=&#39;js-banner__dismiss headerstrip__banner-dismiss&#39;\u003e\n          \u003csvg class=\&quot;headerstrip__dismiss-icon\&quot; viewBox=\&quot;0 0 20 20\&quot; xmlns=\&quot;http://www.w3.org/2000/svg\&quot;\u003e\n            \u003cpath d=\&quot;M19.8 2.4c.3.3.3.8 0 1.1l-6 6c-.3.3-.3.8 0 1.1l6 6c.3.3.3.8 0 1.1l-2.2 2.2c-.3.3-.8.3-1.1 0l-6-6c-.3-.3-.8-.3-1.1 0l-6 6c-.3.3-.8.3-1.1 0L.1 17.7c-.3-.3-.3-.8 0-1.1l6-6c.3-.3.3-.8 0-1.1l-6-6c-.3-.3-.3-.8 0-1.1L2.3.2c.3-.3.8-.3 1.1 0l6 6c.3.3.8.3 1.1 0l6-6c.3-.3.8-.3 1.1 0l2.2 2.2z\&quot;/\u003e\n          \u003c/svg\u003e\n        \u003c/button\u003e\n      \u003cdiv class=\&quot;headerstrip-canvas is-hidden-desktop\&quot;\u003e\n        \u003cdiv class=\&quot;headerstrip-content\&quot;\u003e\n          \u003cdiv class=\&quot;headerstrip-text\&quot;\u003e\n            \u003cstrong\u003eEnvato Elements:\u003c/strong\u003e\n            \u003cspan class=\&quot;js-banner__link headerstrip-cta-mobile\&quot; href=\&quot;https://elements.envato.com/pricing?utm_campaign=elements_mkt-header_general_11Dec2023\u0026amp;utm_content=cc_marketing-banner\u0026amp;utm_medium=promos\u0026amp;utm_source=codecanyon.net\&quot;\u003eGo Unlimited\u003c/span\u003e\n          \u003c/div\u003e\n        \u003c/div\u003e\n      \u003c/div\u003e\n      \u003cdiv class=\&quot;headerstrip-canvas is-hidden-tablet-and-below\&quot;\u003e\n        \u003cdiv class=\&quot;headerstrip-content\&quot;\u003e\n          \u003cdiv class=\&quot;headerstrip-text\&quot;\u003e\n            \u003cstrong\u003eEnvato Elements:\u003c/strong\u003e Complete your website with millions of photos, icons, graphics \u0026 more.\n          \u003c/div\u003e\n          \u003cspan class=\&quot;js-banner__link headerstrip-cta\&quot; href=\&quot;https://elements.envato.com/pricing?utm_campaign=elements_mkt-header_general_11Dec2023\u0026amp;utm_content=cc_marketing-banner\u0026amp;utm_medium=promos\u0026amp;utm_source=codecanyon.net\&quot;\u003eGet Unlimited Downloads ➔\u003c/span\u003e\n        \u003c/div\u003e\n      \u003c/div\u003e\n    \u003c/div\u003e\n  \u003c/a\u003e\n\u003c/div\u003e\n&quot;,&quot;css&quot;:&quot;.headerstrip-wrapper {\n  height: 50px;\n  position: relative;\n}\n\n.headerstrip-wrapper .headerstrip__banner-dismiss {\n  width: 12px;\n  height: 12px;\n  background: none;\n  border: none;\n  -webkit-box-sizing: content-box;\n  -moz-box-sizing: content-box;\n  box-sizing: content-box;\n  padding: 0;\n  position: absolute;\n  font: inherit;\n  height: 100%;\n  line-height: 0;\n  cursor: pointer;\n  outline: inherit;\n  opacity: 0.4;\n  padding: 0 16px;\n  color: white;\n  text-decoration: none;\n  -webkit-transition: all 100ms ease;\n  -moz-transition: all 100ms ease;\n  -o-transition: all 100ms ease;\n  transition: all 100ms ease;\n  right: 0;\n  top: 0;\n  z-index: 2;\n}\n\n.headerstrip-wrapper .headerstrip__banner-dismiss:hover {\n  -webkit-transform: scale(1.3);\n  transform: scale(1.3);\n}\n\n.headerstrip-wrapper .headerstrip__banner-dismiss svg {\n  fill: #FFFFFF;\n}\n\n.headerstrip {\n  display: block;\n  height: 50px;\n  font-family: arial;\n  font-size: 14px;\n  position: relative;\n  text-decoration: none !important;\n  z-index: 1;\n}\n\n.headerstrip .headerstrip-content-background {\n  background-color: #fff;\n  opacity: 1;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 1;\n  background: #E40046; /* For browsers that do not support gradients */\n  background: -webkit-linear-gradient(left, #E40046, #E40046); /* For Safari 5.1 to 6.0 */\n  background: linear-gradient(to right, #E40046, #E40046); /* Standard syntax */\n  background-repeat: repeat-x;\n}\n\n.headerstrip .headerstrip-canvas {\n  height: 50px;\n  margin: auto auto;\n}\n\n.headerstrip .headerstrip-content-wrapper {\n  margin: 0 auto;\n  position: relative;\n  z-index: 2;\n}\n\n.headerstrip .headerstrip-content {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-size: 1000px 50px;\n  width: 100%;\n  height: 50px;\n  max-width: 1408px;\n  padding-left: 16px;\n  padding-right: 16px;\n  margin: 0 auto;\n}\n\n.headerstrip .headerstrip-text {\n  color: #FFFFFF;\n  text-decoration: none;\n  padding-right: 24px;\n  font-weight: 300;\n  letter-spacing: 0.8px;\n  position: relative;\n}\n\n.headerstrip .headerstrip-text strong {\n  font-weight: 600;\n}\n\n.headerstrip .headerstrip-cta-container {\n  display: flex;\n}\n\n.headerstrip .headerstrip-cta {\n  position: relative;\n  background-color: #FFFFFF;\n  padding: 5px 30px;\n  color: #E40046;\n  font-weight: 600;\n  border-radius: 4px;\n  text-decoration: none;\n  display: block;\n  text-align: center;\n  min-width: 100px;\n}\n\n.headerstrip .headerstrip-cta-mobile {\n  color: #FFFFFF;\n  text-decoration: underline;\n  padding-left: 5px;\n}\n\n.headerstrip .headerstrip-cta-mobile:hover {\n  color: #FFFFFF;\n}\n\n\n.headerstrip .is-hidden-desktop .headerstrip-content {\n  text-align: center;\n}\n\n.headerstrip .is-hidden-desktop .headerstrip-text {\n  position: relative;\n  padding-right: 24px;\n}\n\n.headerstrip .is-hidden-desktop .headerstrip__banner-dismiss {\n  margin-left: 0;\n}\n\n.headerstrip .headerstrip__dismiss-icon {\n  width: 12px;\n  height: 12px;\n  fill: #FFFFFF;\n  display: inline-block;\n}\n\n@media (max-width: 1024px) {\n  .headerstrip .is-hidden-tablet-and-below {\n    display: none !important;\n  }\n}\n\n@media (min-width: 1025px) {\n  .headerstrip .is-hidden-desktop {\n    display: none !important\n  }\n\n  .headerstrip .headerstrip-content-wrapper {\n    max-width: 1408px\n  }\n}\n&quot;,&quot;categories&quot;:[]}]}"
  data-banner-category-value="wordpress?compatible_with=Elementor&amp;sort=trending&amp;term=elementor">
  <style type="text/css" data-banner-target="css"></style>
  <div data-banner-target="html" class="shared-banner_component__bannerTop"></div>
</div>

  <div data-controller="cart-entries-loader" data-cart-entries-loader-url-value="/my/cart_entries"></div>
  <div
  class="shared-experiment_gui_toggle_component__root"
  data-controller="experiments-gui"
  data-experiments-gui-visible-button-class="shared-experiment_gui_toggle_component__visibleButton"
  data-action="load@window->experiments-gui#display"
>
  <a
    class="shared-experiment_gui_toggle_component__button"
    href="/storefront/experiments_gui"
    data-turbo="false"
    data-controller="modal-commander"
    data-action="modal-commander#open"
    data-modal-commander-url-value="/storefront/experiments_gui"
  >
    <span class="shared-experiment_gui_toggle_component__icon"><svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#cog'></use>
</svg>
</span> Experiments
  </a>
</div>

  <div class="shared-csat_survey_component__root shared-csat_survey_component__hidden"
  data-controller="analytics-event csat-survey"
  data-csat-survey-hidden-class="shared-csat_survey_component__hidden"
  data-action="message@window->csat-survey#onSurveySubmit csatPopupShown->csat-survey#showPopUp csatPopupShown->analytics-event#send"
  data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;csatmodal;pop-up&quot;,&quot;eventAction&quot;:&quot;view&quot;}"
  >
  <div class="shared-csat_survey_component__closeButton">
    <a
      class="shared-csat_survey_component__closeSvg"
      data-action="click->csat-survey#closePopup analytics-event#send"
      data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;csatmodal;close&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;x&quot;}"
      aria-label="close popup" >
      <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#close'></use>
</svg>

    </a>
  </div>
  <div class="shared-csat_survey_component__section">
    <h2>Tell us what you think!</h2>
    <p>We'd like to ask you a few questions to help improve CodeCanyon.</p>
    <a
      class="shared-csat_survey_component__yesButton"
      data-turbo="false"
      data-controller="modal-commander"
      data-action="modal-commander#open csat-survey#closePopup click->analytics-event#send"
      data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;csatmodal;pop-up&quot;,&quot;eventLabel&quot;:&quot;sure take me to survey&quot;,&quot;eventAction&quot;:&quot;view&quot;}"
      data-modal-commander-url-value="/storefront/csat_survey_modal"
    >
      Sure, take me to the survey
    </a>
  </div>
</div>

</body>
</html>
p .headerstrip-content-wrapper {\n  margin: 0 auto;\n  position: relative;\n  z-index: 2;\n}\n\n.headerstrip .headerstrip-content {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-size: 1000px 50px;\n  width: 100%;\n  height: 50px;\n  max-width: 1408px;\n  padding-left: 16px;\n  padding-right: 16px;\n  margin: 0 auto;\n}\n\n.headerstrip .headerstrip-text {\n  color: #FFFFFF;\n  text-decoration: none;\n  padding-right: 24px;\n  font-weight: 300;\n  letter-spacing: 0.8px;\n  position: relative;\n}\n\n.headerstrip .headerstrip-text strong {\n  font-weight: 600;\n}\n\n.headerstrip .headerstrip-cta-container {\n  display: flex;\n}\n\n.headerstrip .headerstrip-cta {\n  position: relative;\n  background-color: #FFFFFF;\n  padding: 5px 30px;\n  color: #E40046;\n  font-weight: 600;\n  border-radius: 4px;\n  text-decoration: none;\n  display: block;\n  text-align: center;\n  min-width: 100px;\n}\n\n.headerstrip .headerstrip-cta-mobile {\n  color: #FFFFFF;\n  text-decoration: underline;\n  padding-left: 5px;\n}\n\n.headerstrip .headerstrip-cta-mobile:hover {\n  color: #FFFFFF;\n}\n\n\n.headerstrip .is-hidden-desktop .headerstrip-content {\n  text-align: center;\n}\n\n.headerstrip .is-hidden-desktop .headerstrip-text {\n  position: relative;\n  padding-right: 24px;\n}\n\n.headerstrip .is-hidden-desktop .headerstrip__banner-dismiss {\n  margin-left: 0;\n}\n\n.headerstrip .headerstrip__dismiss-icon {\n  width: 12px;\n  height: 12px;\n  fill: #FFFFFF;\n  display: inline-block;\n}\n\n@media (max-width: 1024px) {\n  .headerstrip .is-hidden-tablet-and-below {\n    display: none !important;\n  }\n}\n\n@media (min-width: 1025px) {\n  .headerstrip .is-hidden-desktop {\n    display: none !important\n  }\n\n  .headerstrip .headerstrip-content-wrapper {\n    max-width: 1408px\n  }\n}\n&quot;,&quot;categories&quot;:[]}]}"
  data-banner-category-value="template-kits">
  <style type="text/css" data-banner-target="css"></style>
  <div data-banner-target="html" class="shared-banner_component__bannerTop"></div>
</div>

  <div data-controller="cart-entries-loader" data-cart-entries-loader-url-value="/my/cart_entries"></div>
  <div
  class="shared-experiment_gui_toggle_component__root"
  data-controller="experiments-gui"
  data-experiments-gui-visible-button-class="shared-experiment_gui_toggle_component__visibleButton"
  data-action="load@window->experiments-gui#display"
>
  <a
    class="shared-experiment_gui_toggle_component__button"
    href="/storefront/experiments_gui"
    data-turbo="false"
    data-controller="modal-commander"
    data-action="modal-commander#open"
    data-modal-commander-url-value="/storefront/experiments_gui"
  >
    <span class="shared-experiment_gui_toggle_component__icon"><svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#cog'></use>
</svg>
</span> Experiments
  </a>
</div>

  <div class="shared-csat_survey_component__root shared-csat_survey_component__hidden"
  data-controller="analytics-event csat-survey"
  data-csat-survey-hidden-class="shared-csat_survey_component__hidden"
  data-action="message@window->csat-survey#onSurveySubmit csatPopupShown->csat-survey#showPopUp csatPopupShown->analytics-event#send"
  data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;csatmodal;pop-up&quot;,&quot;eventAction&quot;:&quot;view&quot;}"
  >
  <div class="shared-csat_survey_component__closeButton">
    <a
      class="shared-csat_survey_component__closeSvg"
      data-action="click->csat-survey#closePopup analytics-event#send"
      data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;csatmodal;close&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;x&quot;}"
      aria-label="close popup" >
      <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#close'></use>
</svg>

    </a>
  </div>
  <div class="shared-csat_survey_component__section">
    <h2>Tell us what you think!</h2>
    <p>We'd like to ask you a few questions to help improve ThemeForest.</p>
    <a
      class="shared-csat_survey_component__yesButton"
      data-turbo="false"
      data-controller="modal-commander"
      data-action="modal-commander#open csat-survey#closePopup click->analytics-event#send"
      data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;csatmodal;pop-up&quot;,&quot;eventLabel&quot;:&quot;sure take me to survey&quot;,&quot;eventAction&quot;:&quot;view&quot;}"
      data-modal-commander-url-value="/storefront/csat_survey_modal"
    >
      Sure, take me to the survey
    </a>
  </div>
</div>

</body>
</html>
