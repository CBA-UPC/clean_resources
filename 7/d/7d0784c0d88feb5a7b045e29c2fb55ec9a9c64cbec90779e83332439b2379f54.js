var Supernova=function(e){r a={},r={0:0},o={0:0},i=[];.e=function(e){var t=[];r[e]?t.push(r[e]):0!==r[e]&&{3:1,4:1,5:1,6:1,7:1,8:1,9:1,10:1,11:1,14:1,15:1,16:1,17:1}[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+".chunk.css",o=c.p+a,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var u=(d=i[s]).getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(u===a||u===o))return t()}var l=document.getElementsByTagName("style");for(s=0;s<l.length;s++){var d;if((u=(d=l[s]).getAttribute("data-href"))===a||u===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=f.href=o,document.getElementsByTagName("head")[0].appendChild(f)})).then(());var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise(();t.push(n[2]=a);var i,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=e);var u=new Error;i=var l=setTimeout((,12e4);s.onerror=s.onload=i,document.head.appendChild(s)}return Promise.all(t)},c.m=e,c.c=a,c.d=c.r=c.t=c.n=c.o=c.p="https://secure.skypeassets.com/apollo/2.1.1801/supernova/",c.oe=var s=window.webpackJsonpSupernova=window.webpackJsonpSupernova||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var d=u;return i.push([245,1]),n()}({11:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(100),r=n.n(a),o=n(15),i=n.n(o);function c(e){return i()(e)||"string"!==typeof e?e:r.a.decode(e)}},114:function(e,t,n){},115:function(e,t,n){},116:function(e,t,n){var a={"./button/Button.component":[7],"./buttonDropdown/ButtonDropdownn.component":[249,9],"./buttonDropdown/buttonDropdown.component":[250,10],"./caller-id/CallerId.component":[258,3],"./carousel/Carousel.component":[251,7],"./carouselItem/CarouselItem.component":[252,14],"./device/Device.component":[253,15],"./dropdownButton/DropdownButton.component":[248,8],"./dropdownButton/DropdownList.component":[246,22],"./export-caller-id-numbers/ExportCallerIdNumbers.component":[260,12],"./export-contacts/ExportContacts.component":[261,13],"./grid/Column.component":[19],"./grid/Row.component":[28],"./grid/Section.component":[29],"./icon/Icon.component":[8],"./iconContent/IconContent.component":[60],"./image/Image.component":[51],"./languageSelector/Languageselector.component":[254,6],"./manager-admin-settings/ManagerAdminSettings.component":[262,18],"./manager-settings/ManagerSettings.component":[263,19],"./promoBanner/PromoBanner.component":[255,16],"./skype-number/SkypeNumber.component":[259,4],"./skypeCredits/SkypeCredits.component":[65],"./subscriptions/Subscriptions.component":[64],"./tabs/Tabs.component":[256,11],"./text-flag/TextFlag.component":[247,5],"./text/Text.component":[9],"./textIcon/TextIcon.component":[16],"./toggleSwitch/ToggleSwitch.component":[257,17],"./toggler/Toggler.component":[17],"./userBadge/UserBadge.component":[62],"./wrapper/Wrapper.component":[63]};.keys=r.id=116,e.exports=r},117:function(e,t,n){},118:function(e,t,n){},127:function(e,t,n){},128:function(e,t,n){},14:function(e,t,n){"use strict";var a=n(104),r=n(4),o=n.n(r),i="SKYPE_SETTINGS";t.a=function(e){return o()(window,[i].concat(Object(a.a)(e)))}},158:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));var a=n(0),r=n.n(a),o=n(3),i=n(8),c=n(9);n(177);function s(e){return function(e){var t=e.classes,n=e.withLink,a=e.icon,s=e.iconPosition,u=e.children,l=e.value,d=Object(o.a)(e),f={ariaHidden:!0,icon:a},m={classes:d.textClasses,properties:{size:d.textSize,withLink:n},value:l||""};return"left"===s||"top"===s?r.a.createElement("div",{className:"text-icon icon-".concat(s," ").concat(t)},r.a.createElement(i.default,f),r.a.createElement("div",{className:"text-icon-content"},u||r.a.createElement(c.default,m))):r.a.createElement("div",{className:"text-icon icon-".concat(s," ").concat(t)},r.a.createElement("div",{className:"text-icon-content"},u||r.a.createElement(c.default,m)),r.a.createElement(i.default,f))}(e)}},17:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));var a=n(1),r=n(0),o=n.n(r),i=n(69),c=n(5);function s(e){var t=Object(r.useState)(!0),n=Object(a.a)(t,2),s=n[0],u=n[1],l=Object(r.useState)(!0),d=Object(a.a)(l,2),f=d[0],m=d[1],p=e.afterConditionContent,b=e.defaultContent,v=e.passed,g=e.isDataLoading,O=v?p:b;return Object(r.useEffect)((function(){var t=setTimeout((,e.timer);return ),[]),Object(r.useEffect)((,[g,s]),o.a.createElement(r.Fragment,null,f?Object(i.a)(e.fallback):o.a.createElement(r.Fragment,null,o.a.isValidElement(O)?O:c.a.Map(O)))}s.defaultProps={timer:1500}},176:function(e,t,n){},177:function(e,t,n){},18:function(e,t,n){"use strict";t.a=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];return(e||"").replace(/\{([0-9]+)\}/g,()}},19:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var a=n(1),r=n(0),o=n.n(r),i=n(11),c=n(6),s=n(5);n(117);function u(e){var t=e.width,n=e.order,r=e.children,u=e.content,l=e.classes,d=e.roleAttr,f=e.ariaLabelText,m=function(e){if(!e)return 100;if(!isNaN(e))return e;var t=e.toString().split("/"),n=Object(a.a)(t,2),r=n[0],o=n[1];return 100*Number(r)/Number(o)}(t),p={flex:"0 0 ".concat(m,"%"),maxWidth:m+"%",msFlex:"0 0 ".concat(m,"%"),order:n||1},b={};return f&&Object.assign(b,{"aria-label":Object(i.a)(f)}),d&&Object.assign(b,{role:d}),o.a.createElement("div",Object.assign({style:p,className:Object(c.a)("supernova-column",l)},b),r||s.a.Map(u))}},20:function(e,t,n){"use strict";function a(e){if(!e)return null;var t=e.name,n=e.id,a=e.slot;return{"data-bi-area":e.area,"data-bi-id":n,"data-bi-name":t,"data-bi-slot":a}}n.d(t,"a",(function(){return a}))},235:function(e,t,n){},236:function(e,t,n){},237:function(e,t,n){},242:function(e,t,n){},243:244:function(e,t,n){"use strict";n.r(t),n.d(t,"init",(function(){return I}));var a=n(0),r=n.n(a),o=n(59),i=n.n(o),c=s={file:windowProperty:function(){return Promise.resolve(window&&window.supernovaData)}},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"windowProperty";return(s[e]||c)()},l=(n(31),n(3)),d=n(6),f=n(7),m=n(19),p=n(28),b=n(29),v=n(8),g=n(60),O=n(51),E=n(5),h=n(65),j=n(64),w=n(9),y=n(16),k=n(17),x=n(62),T=n(63),N=(n(237),{Button:f.default,Column:m.default,Icon:v.default,IconContent:g.default,Image:O.default,Row:p.default,Section:b.default,SkypeCredits:h.default,Subscriptions:j.default,Text:w.default,TextIcon:y.default,Toggler:k.default,UserBadge:x.default,Wrapper:T.default});Object(E.b)(N,{ButtonDropdown:"buttonDropdown/buttonDropdown",CallerId:"caller-id/CallerId",Carousel:"carousel/Carousel",CarouselItem:"carouselItem/CarouselItem",Device:"device/Device",DropdownButton:"dropdownButton/DropdownButton",ExportContacts:"export-contacts/ExportContacts",ExportCallerIdNumbers:"export-caller-id-numbers/ExportCallerIdNumbers",LanguageSelector:"languageSelector/Languageselector",ManagerAdminSettings:"manager-admin-settings/ManagerAdminSettings",ManagerSettings:"manager-settings/ManagerSettings",PromoBanner:"promoBanner/PromoBanner",SkypeNumber:"skype-number/SkypeNumber",Tabs:"tabs/Tabs",TextFlag:"text-flag/TextFlag"});var S=function(e){var t=e.data;return r.a.createElement("div",{className:Object(d.a)("home","sn-exp-".concat(t.title))},t&&t.content.map(())},C=n(71);n(243);function _(e){var t=Object(l.a)(e).alertComponent;return r.a.createElement(C.b,t,r.a.createElement(S,{data:e.page}))}var I=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"root";return u(e).then((function(e){return i.a.render(r.a.createElement(_,e),document.getElementById(t))}))}},245:function(e,t,n){"use strict";n.r(t),n.d(t,"init",(function(){return o}));n(31);var a=n(41);"undefined"===typeof Promise&&(n(106).enable(),window.Promise=n(107));var r=function(e){"IE"!==a.a.browser?e():Promise.all([n.e(2),n.e(20)]).then(n.bind(null,435)).then(e)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"root";r(()}"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(()},28:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return c}));var a=n(0),r=n.n(a),o=n(6),i=n(5);n(118);function c(e){return r.a.createElement("div",{className:Object(o.a)("row supernova-row",e.classes)},e.children||i.a.Map(e.content))}},29:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return d}));var a=n(0),r=n.n(a),o=n(27),i=n.n(o),c=n(6),s=n(3),u=n(5),l=function(e){var t=e.children;return r.a.createElement(i.a,{scroll:!0,once:!0,height:300},t)};function d(e){var t=e.lazyLoad,n=void 0===t||t,o=Object(s.a)(e).background,i={backgroundImage:o?"url(".concat(o,")"):"",backgroundSize:o?"cover":""},d=n?l:a.Fragment;return r.a.createElement(d,null,r.a.createElement("section",{id:e.id,style:i,className:Object(c.a)("section-component",e.classes)},r.a.createElement("div",{className:"content"},e.children||u.a.Map(e.content))))}},3:function(e,t,n){"use strict";function a(e){return e.properties?e.properties:{}}n.d(t,"a",(function(){return a}))},31:41:function(e,t,n){"use strict";var a="windows";function r(){var e=navigator.userAgent,t="",n="";if(-1!==e.indexOf("Android"))t="android";else if(e.match(/blackberry/i))t="blackberry";else if(-1!==e.indexOf("iPad")||-1!==e.indexOf("iPhone")||-1!==e.indexOf("iPod"))t="ios",n=function(e){var t="";return e.match(/iphone/i)?t="iphone":e.match(/ipad/i)?t="ipad":e.match(/ipod/i)&&(t="ipod"),t}(e);else if(-1!==e.indexOf("Windows Phone"))t=a,n="Windows Phone";else if(-1!==e.indexOf("Linux")||-1!==e.indexOf("X11"))t="linux",n=e);else if(-1!==e.indexOf("Mac OS")||-1!==e.indexOf("Macintosh"))t="mac",n=function(e){return e.match(/(Mac OS X 10[_|\.][0-9]([_|\.]|\D))/)?"mac_os_x_10_9_lower":e.match(/(Mac OS X 10[_|\.]10)/)?"mac_os_x_10_10_higher":void 0}(e);else if(-1!==e.indexOf("Windows NT 5.0")||-1!==e.indexOf("Windows 2000"))t=a,n="Windows 2000";else if(-1!==e.indexOf("Windows NT 4.0")||-1!==e.indexOf("WinNT4.0")||-1!==e.indexOf("WinNT"))t=a,n="Windows NT 4.0";else if(-1!==e.indexOf("Windows NT 5.1")||-1!==e.indexOf("Windows XP"))t=a,n="windows_xp";else if(-1!==e.indexOf("Windows ME"))t=a,n="Windows ME";else if(-1!==e.indexOf("Windows NT 5.2"))t=a,n="Windows Server 2003";else if(-1!==e.indexOf("Windows NT 6.0"))t=a,n="windows_vista";else if(-1!==e.indexOf("Windows NT 6.1"))t=a,n="windows_7";else if(-1!==e.indexOf("Windows NT 6.2")||-1!==e.indexOf("WOW64"))t=a,n="windows_8";else if(-1!==e.indexOf("Windows 10.0")||-1!==e.indexOf("Windows NT 10.0")){t=a,n=function(e,t){if("chrome"===t){var n=document.createElement("canvas").getContext("2d");n.font="64px Segoe UI Emoji";n.measureText("\ud83d\udc31\u200d\ud83d\udc64").width,n.measureText("\ud83d\udc68\u200d\u2695").width;var a=n.measureText("\ud83e\udddb\ud83c\udffb").width;return-1===e.indexOf("Windows NT")?"windows_au_undetected":a<=90?"windows_au":"windows_au_none"}if("Edge"===t){var r=new RegExp("edge/([0-9]+)","gi").exec(e);return null===r||2!==r.length?"windows_au_undetected":parseInt(r[1],10)>=17.17?"windows_au":"windows_au_none"}return"windows_au_undetected"}(e,o())}else-1===e.indexOf("Googlebot")&&-1===e.indexOf("MSNBot")||(t="Search bot");return{os:t,osVersion:n}}function o(){var e=navigator.userAgent,t="";return-1!==e.indexOf("Chrome")&&-1===e.indexOf("Edge")&&-1===e.indexOf("OPR")&&-1===e.indexOf("Opera")?t="chrome":-1!==e.indexOf("Firefox")?t="Firefox":-1!==e.indexOf("Safari")&&-1===e.indexOf("Chrome")?t="safari":-1!==e.indexOf("OPR")||-1!==e.indexOf("Opera")?t="Opera":-1!==e.indexOf("Edge")?t="Edge":(document.DOCUMENT_NODE||-1!==e.indexOf("MSIE"))&&(t="IE"),t}t.a={browser:o(),device:function(){var e=r().os;return e===a||"mac"===e||"linux"===e?"desktop":"mobile"}(),os:r()}},44:function(e,t,n){"use strict";var a=n(4),r=n.n(a);t.a=function(){return r()(document,["documentElement","lang"],"en")}},46:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(1),r=n(47),o=n(48);function i(){var e,t=Object(r.a)(),n=Object(a.a)(t,2),i=n[0],c=n[1];return[(e=i,Object(o.a)(e).filter(()),c]}},47:function(e,t,n){"use strict";var a=n(1),r=n(0),o=(n(31),n(67));t.a=function(){var e=Object(r.useState)([]),t=Object(a.a)(e,2),n=t[0],i=t[1],c=Object(r.useState)(!0),s=Object(a.a)(c,2),u=s[0],l=s[1];return Object(o.a)((function(){var e=sessionStorage.getItem("userServices");return[!!e,[e]]}),(function(e){try{i(JSON.parse(e))}catch(t){i([])}l(!1)})),[n,u]}},48:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a=function(e){return!e||e.length<0?[]:e}},5:function(e,t,n){"use strict";n.d(t,"b",(function(){return g}));var a=n(2),r=n(0),o=n.n(r),i=n(41),c={},s={},u=function(e){return o.a.createElement("p",null,"\ud83d\udc31\u200d\ud83d\udc64 ",o.a.createElement("strong",null,e.type||"Undefined Component Type")," is not available in Supernova")},l=function d(e){var t=c[e.type]||function(e){var t=s[e];return t?Object(r.lazy)(():null}(e.type)||u;return o.a.createElement(r.Suspense,{fallback:o.a.createElement(l,null)},o.a.createElement(t,e))}var f=Object(a.a)({},i.a);function m(e){return!!e&&e.length>0}function p(e,t){return!!e&&-1!==t.indexOf(e)}function b(e){return e?(e.osBrowser=Object(a.a)({},f),!m(t=e.visibility)||-1!==t.indexOf("all")||function(e,t){return m(t)&&(p(e.browser,t)||p(e.device,t)||p(e.os.os,t)||p(e.os.osVersion,t))}(f,e.visibility)?d(e):null):null;var t}var v=.Map=function(e){return e&&Array.isArray(e)&&e.map(()||null},t.a=v},51:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));var a=n(0),r=n.n(a),o=n(27),i=n.n(o),c=n(6);n(128);function s(e){var t=e.alt,n=e.height,a=void 0===n?200:n,o=t?void 0:"presentation";return r.a.createElement("div",{className:Object(c.a)("image-component",e.classes,e.imageType)},"background"===e.imageType&&r.a.createElement("span",{className:"image",style:{backgroundImage:"url(".concat(e.url,")")}}),"background"!==e.imageType&&r.a.createElement(i.a,{height:a,once:!0},r.a.createElement("img",{src:e.url,alt:t,role:o})))}},6:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=r=function(e){for(var t=[],n=0,a=Object.keys(e);n<a.length;n++){var r=a[n];e[r]&&t.push(r)}return t.join(" ")};function o(){for(var e=[],t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];for(var i=0,c=n;i<c.length;i++){var s=c[i];if(a(s)){var u=r(s);e.push(u)}else null!==s&&void 0!==s&&e.push(s)}return e.join(" ")}},60:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var a=n(0),r=n.n(a),o=n(11),i=n(8),c=n(5),s=n(9);n(127);function u(e){var t={};return e.ariaLabelText&&Object.assign(t,{"aria-label":Object(o.a)(e.ariaLabelText)}),e.roleAttr&&Object.assign(t,{role:e.roleAttr}),r.a.createElement("div",Object.assign({className:"supernova-text-content"},t),r.a.createElement(i.default,{icon:e.icon,classes:"icon-content"}),r.a.createElement(s.default,{classes:"supernova-text-content-title fontSizeH3",properties:{size:"h3"},value:e.title}),r.a.createElement("div",{className:"supernova-text-content-txt"},c.a.Map(e.content)))}},62:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return T}));var a=n(49),r=n.n(a),o=n(4),i=n.n(o),c=n(34),s=n.n(c),u=n(15),l=n.n(u),d=n(0),f=n.n(d),m=n(11),p=n(3),b=n(72),v=n(20),g=n(7),O=n(8),E=n(5),h=(n(236),{classes:"user-badge-icon edit",icon:"\ue40d",link:"",properties:{},title:"",type:"Icon",tooltip:!0}),j={alt:"",classes:"user-badge-profile-image round",imageType:"background",type:"Image",url:""},w={classes:"user-badge-full-name fontSizeH2",noDecode:!0,properties:{size:"p"},type:"Text",value:""},y={classes:"user-badge-email",properties:{},type:"Text",value:""},k={classes:"user-badge-change-password lock",icon:"\ue609",iconPosition:"left",type:"TextIcon",value:"",withLink:!1},x=function(){return f.a.createElement("div",{className:"user-badge-avatar round placeholder"},f.a.createElement(O.default,{icon:"\ue200",ariaHidden:!0}))};function T(e){var t=Object(b.a)(),n=t.user,a=t.signinName,o=Object(p.a)(e),c=o.editProfileUrl,u=o.editProfileText,d=o.changePasswordUrl,O=o.changePasswordText,T=o.editProfileTracking,N=o.changePasswordTracking;return h.link=c,h.title=u,h.properties.tracking=T,j.url=i()(n,"avatarUrl"),w.value=function(e,t){var n=r()(i()(e,"firstname"),""),a=r()(i()(e,"lastname"),""),o=r()(i()(e,"username"),"");return""===n&&""===a?l()(t)||""===t?o:"".concat(t):"".concat(n," ").concat(a).trim()}(n,a),y.value=s()(i()(n,"emails"))||"",k.value=d?f.a.createElement("a",Object.assign({href:d},Object(v.a)(N)),Object(m.a)(O)):null,f.a.createElement("div",{className:"user-badge-component supernova-border-radius no-left-top theme-dark"},f.a.createElement(E.a,{component:h}),n.avatarUrl?f.a.createElement(E.a,{component:j}):f.a.createElement(x,null),f.a.createElement(E.a,{component:w}),f.a.createElement(E.a,{component:y}),f.a.createElement(g.default,{classes:"user-badge-edit-button noDesktop noLargeDesktop",properties:{buttonType:"secondary",link:c,tracking:T},value:u}),f.a.createElement(E.a,{component:k}))}},63:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return c}));var a=n(0),r=n.n(a),o=n(6),i=n(5);function c(e){return r.a.createElement("div",{className:Object(o.a)("wrapper-component",e.classes),style:e.style},e.children?e.children:i.a.Map(e.content))}},64:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n(1),o=n(4),i=n.n(o),c=n(0),s=n.n(c),u=n(44),l=n(3),d=n(88),f=n(18),m=n(7),p=n(46),b=n(9),v=n(17),g=n(19),O=n(16),E={icon:"",iconPosition:"left",withLink:!1};var h=function(e){var t=e.width,n=t);return s.a.createElement("div",{className:"supernova-subscription-progress-bar"},s.a.createElement("div",{style:{width:"".concat(t,"%")},className:"supernova-subscription-progress ".concat(n)}))};function j(e){var t=Object(l.a)(e),n=t.minsLeftTexts,r=t.unlimitedText,o=t.manage,i=t.upgrade,c=e.item,u=c.unlimited,d=c.left,f=c.minutes,p=c.icon,v=c.name,j=c.manageUrl,w=c.upgradeEnabled,y=c.upgradeUrl,k=u?100:Number(d/f*100),x=u?r:"".concat(n.replace("{MINUTES}","".concat(d)));return s.a.createElement("li",null,s.a.createElement("div",{className:"subscription-item"},s.a.createElement(b.default,{classes:"fontSizeH2 subscription-item-time-left",properties:{size:"p"},value:x}),s.a.createElement("div",{className:"subscription-row"},s.a.createElement(g.default,{width:100,classes:"marginTop1 no-padding-left"},s.a.createElement(h,{width:k}),s.a.createElement("div",{className:"subscription-footnote"},s.a.createElement(O.default,Object.assign({},E,{icon:p||"\ue505",value:v,classes:"supernova-bubble-note marginTop1 marginBottom1"})))),s.a.createElement(g.default,{width:50},s.a.createElement(m.default,{value:o.value,properties:{buttonType:"outline",link:j,size:"small",tracking:Object(a.a)(Object(a.a)({},o.tracking),{},{slot:"".concat(e.slot)})}})),w&&s.a.createElement(g.default,{width:50},s.a.createElement(m.default,{value:i.value,properties:{buttonType:"primary",link:y,size:"small",tracking:Object(a.a)(Object(a.a)({},i.tracking),{},{slot:"".concat(e.slot)})}})))))}var w=n(47),y=n(48),k=["plan","package","minute_plan"],x=var T=n(34),N=n.n(T),S=n(15),C=n.n(S),_=n(102),I=n.n(_),P=n(61),M=n.n(P),L=n(14),B=D=function(e,t,n){return function(e,t){return!C()(e.minutes)&&!C()(e.left)&&e.minutes*t>=e.left}(e,n)&&!t.some(()};var z=function(e,t,n,a){var r=function(e){return e.map(M()(["tracking","upgradeRef"])).filter(()}(e),o=Object(L.a)(["settings","commerce","subscriptionsUpgradeThreshold"]),c=i()(N()(t),["attributes","currency"]);return I()(e.map((function(e){return function(e,t,n,a,r,o){var c,s={ends:e.end,id:e.id,manageUrl:Object(f.a)(r,e.id.split(".").slice(1).join(".")),name:i()(e,["data","nameFormatted"])};if(B(e)&&(e.balance||0===e.balance))s.minutes=e.quota,s.left=e.balance;else if((c=e)&&c.services){var u=e.services.filter(B).reduce((function(e,t){var n=parseInt("".concat(t.quota),10),a=parseInt("".concat(t.balance),10);return isNaN(n)||isNaN(a)||(e.totalMinutes=(e.totalMinutes||0)+n,e.availableMinutes=(e.availableMinutes||0)+a),e}),{totalMinutes:void 0,availableMinutes:void 0}),l=u.totalMinutes,d=u.availableMinutes;s.minutes=l,s.left=d}return s.unlimited=s),s.upgradeEnabled=D(s,t||[],n||.1),s.upgradeEnabled&&a&&(s.upgradeUrl=Object(f.a)(o||"",a,encodeURIComponent(i()(e,["data","href"],"")))),s}(e,r,o,c,n,a)})),["upgradeEnabled"],["desc"])},U=(n(235),{classes:"supernova-link",properties:{buttonType:"link",size:"small"}});function W(e){var t=Object(d.a)(e.subscriptions.map((),1),n=Object(r.a)(t,3),o=n[0],i=n[1],c=n[2],p=Object(l.a)(e),v=p.title,g=p.more,O=void 0===g?{}:g,E=p.discover,h=void 0===E?{}:E;return U.value=i>0?"".concat(O.valueMore," (").concat(i,")"):O.valueLess,U.onClick=c,U.properties.tracking=O.tracking,s.a.createElement("div",{className:"supernova-bubble subscriptions-component"},s.a.createElement("div",null,s.a.createElement(b.default,v),s.a.createElement("ul",{className:"subscriptions-list"},o.map((function(t,n){return s.a.createElement(j,Object.assign({key:n,slot:n,item:t},e))}))),e.subscriptions.length>1&&s.a.createElement("div",{className:"supernova-divider"},s.a.createElement(m.default,U))),h&&s.a.createElement(m.default,{classes:"marginTop2",value:h.value,properties:{buttonType:"primary",link:Object(f.a)(h.discoverUrl,Object(u.a)()),size:"default",tracking:h.tracking}}))}W.defaultProps={subscriptions:[]};t.default=function(e){var t=function(){var e,t=Object(w.a)(),n=Object(r.a)(t,2),a=n[0],o=n[1];return[(e=a,Object(y.a)(e).filter(x)),o]}(),n=Object(r.a)(t,2),a=n[0],o=n[1],c=Object(p.a)(),u=Object(r.a)(c,2),d=u[0],f=u[1],m=Object(l.a)(e),b=m.manage,g=m.upgrade,O=z(a,d,i()(b,"manageUrl"),i()(g,"upgradeUrl"));return s.a.createElement(v.default,{isDataLoading:o||f,fallback:W,passed:O&&O.length>0,defaultContent:e.defaultContent,afterConditionContent:s.a.createElement(W,Object.assign({},e,{subscriptions:O}))})}},65:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n(1),o=n(101),i=n(4),c=n.n(i),s=n(15),u=n.n(s),l=n(0),d=n.n(l),f=n(44),m=n(3),p=n(14),b=n(18),v=n(7),g=n(28),O=n(8),E=n(9),h=n(17),j=n(46),w=n(70),y=n.n(w);var k=function(e,t){var n=Object(l.useState)(),a=Object(r.a)(n,2),o=a[0],i=a[1];return Object(l.useEffect)((function(){var n;e&&(n=t,y.a.get(Object(p.a)(["settings","api","contracts"]),{headers:{Accept:"application/json; ver=1.0","X-Skypetoken":n}}).then(().catch(()).then(()}),[e]),[o,i]},x=(n(176),function(e){var t=e.credits,n=Object(m.a)(e),i=n.autoRechargeButtonTracking,s=n.autoRechargeText,l=n.buttonBuyCreditText,h=n.buttonSendCreditText,j=n.buttonSendCreditTracking,w=n.buttonBuyCreditTracking,y=n.balanceTracking,x=n.rechargeText,T=n.rechargeTooltip,N=n.title,S=n.switchAriaLabel,C=n.underRechargeText,_=JSON.parse(sessionStorage.getItem("skypeToken")||"{}"),I=k(t.length>0,_),P=Object(r.a)(I,1)[0],M=c()(t,"0",{balanceFormatted:"",currency:""}),L={link:Object(b.a)(Object(p.a)(["settings","api","buyCredit"]),Object(f.a)(),c()(M,["currency"]))},B={classes:"skype-credits-auto-recharge-button",properties:{buttonType:"link",link:Object(p.a)(["settings","api","autoRechargeUrl"]),title:c()(s,P?"disabled":"enabled"),tracking:i},role:"link","aria-disabled":P?"false":"true"};return d.a.createElement("div",{className:"supernova-skype-credits-component supernova-bubble"},d.a.createElement("div",null,d.a.createElement(E.default,{classes:"fontSizeH3 m-bottom-25",properties:{size:"h3"},value:N}),d.a.createElement(v.default,{classes:"supernova-skype-credits-balance",properties:Object(a.a)({buttonType:"link",tracking:y},L)},d.a.createElement("p",{className:"fontSizeH1 supernova-text-blue"},M.balanceFormatted)),d.a.createElement("div",{className:"skype-credits-recharge"},d.a.createElement("div",null,d.a.createElement(E.default,{classes:"strong",properties:{size:"span"},value:x}),d.a.createElement(O.default,{icon:"\ue602",title:T})),!u()(P)&&d.a.createElement(v.default,B,d.a.createElement(o.Switch,{isOn:P,disabled:!0,ariaLabel:S}))),d.a.createElement("div",{className:"supernova-divider"},d.a.createElement(E.default,{classes:"disclaimer",properties:{size:"span"},value:C}))),d.a.createElement(g.default,{classes:"supernova-credit-buttons marginLeft1 marginBottom1"},d.a.createElement(v.default,{classes:"marginTop3 marginRight3",value:l,properties:Object(a.a)({buttonType:"primary",size:"small",tracking:w},L),role:"link"}),d.a.createElement(v.default,{classes:"marginTop3 marginLeft1 marginBottom1",value:h,properties:{buttonType:"link",link:Object(p.a)(["settings","api","sendCredit"]),size:"small",tracking:j},role:"link"})))});x.defaultProps={credits:[]};var T=function(e){return{balanceFormatted:e.balanceFormatted,currency:c()(e,["attributes","currency"])}};t.default=function(e){var t=Object(j.a)(),n=Object(r.a)(t,2),a=n[0],o=n[1],i=a.map(T);return d.a.createElement(h.default,{isDataLoading:o,fallback:x,passed:i&&i.length>0,defaultContent:e.defaultContent,afterConditionContent:d.a.createElement(x,Object.assign({},e,{credits:i}))})}},67:function(e,t,n){"use strict";var a=n(14),r=n(66),o=n(0);var i=function(e,t){Object(o.useEffect)((function(){var n=e(),a=Object(r.a)(n),o=a[0],i=a.slice(1);if(!o){var c=setInterval((function(){var n=e(),a=Object(r.a)(n),o=a[0],i=a.slice(1);o&&(t.apply(null,i),clearInterval(c))}),500);return t.apply(null,i)}),[])};t.a=function(e,t,n){var r=function(e,t){var n=-500,r=t||Object(a.a)(["settings","api","standByFor"])||1e3;return function(){return(n+=500)>=r?[!0,void 0]:e()}}(e,n);i(r,t)}},69:function(e,t,n){"use strict";var a=n(0),r=n.n(a);n(158);t.a=function(e){if(e)return r.a.createElement("div",{className:"supernova-dynamic-placeholder"},r.a.createElement(e))}},7:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return p}));var a=n(33),r=n(2),o=n(0),i=n.n(o),c=n(11),s=n(6),u=n(3),l=n(20),d=n(8);n(115);function f(e){var t=e.icon,n=e.value,f=Object(u.a)(e).link,m=e.children||i.a.createElement(o.Fragment,null,Object(c.a)(n),t&&i.a.createElement(d.default,{icon:t}));return i.a.createElement(f?"a":"button",function(e){var t,n=Object(u.a)(e),o=n.title,i=n.link,c=n.tracking,d=n.buttonType,f=n.size,m=Object(r.a)(Object(r.a)({},Object(l.a)(c)),{},{className:Object(s.a)((t=d,"primary"===t?"btn primaryCta":"secondary"===t?"btn secondaryCta":"outline"===t?"btn outlinedCta":"link"===t?"linkCta":"alert"===t?"btn alertCta":void 0),Object(a.a)({},"btn-".concat(f),f)),title:o,type:"button","aria-disabled":e["aria-disabled"]});return i?Object(r.a)(Object(r.a)({},m),{},{href:i,role:e.role||"button"}):Object(r.a)(Object(r.a)({},m),{},{onClick:e.onClick})}(e),m)}function m(e){var t=e.value,n=e.icon,a=e.classes,r=e.onClick,o=Object(u.a)(e).link;return i.a.createElement("button",{className:Object(s.a)(a),type:"button"},o?i.a.createElement("span",null,i.a.createElement("a",{href:o},t),i.a.createElement("span",{onClick:r},n&&i.a.createElement(d.default,{icon:n}))):i.a.createElement("span",null,t,n&&i.a.createElement("span",{onClick:r},i.a.createElement(d.default,{icon:n}))))}function p(e){var t=e.classes,n=Object(u.a)(e).buttonType;return i.a.createElement("div",{className:Object(s.a)("button-component",t)},"dropdown"===n?i.a.createElement(m,e):i.a.createElement(f,e))}},71:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return v}));var a=n(2),r=n(1),o=n(103),i=n.n(o),c=n(0),s=n.n(c),u=n(6),l=n(7),d=n(29),f=n(8),m=n(16),p=(n(242),s.a.createContext({}));p.Consumer;function b(e){var t=e.message,n=e.action,a=e.actionName,o=e.close,p=e.closeBtnAria,b=e.closeBtnTracking,v=Object(c.useState)(window.scrollY>70),g=Object(r.a)(v,2),O=g[0],E=g[1];return Object(c.useEffect)((function(){var e=i()((function(){return E(window.scrollY>70)}),100);return window.addEventListener("scroll",e,{passive:!0}),),[O]),s.a.createElement(d.default,{lazyLoad:!1,classes:Object(u.a)("alert-message-component",{sticky:O})},s.a.createElement("div",{className:"alert-message-wrapper"},s.a.createElement(m.default,{icon:"\ue602",iconPosition:"left",value:t}),s.a.createElement("div",{className:"alert-message-actions"},n&&s.a.createElement(l.default,{onClick:n,properties:{size:"small",buttonType:"alert"},value:a}),s.a.createElement(l.default,{properties:{buttonType:"link",title:p,tracking:b},onClick:o},s.a.createElement(f.default,{icon:"\ue711"})))))}function v(e){var t=Object(c.useState)({message:"",type:"alert",visible:!1}),n=Object(r.a)(t,2),o=n[0],i=n[1],u=function(){return i(Object(a.a)(Object(a.a)({},o),{},{visible:!1}))},l={close:u,open:function(e){var t=e.message,n=e.action,r=e.actionName;return i(Object(a.a)(Object(a.a)({},o),{},{visible:!0,message:t,action:n,actionName:r}))}};return s.a.createElement(p.Provider,{value:l},o.visible&&s.a.createElement(b,Object.assign({},o,e,{close:u})),e.children)}},72:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(1),r=n(0);n(31);var o={avatarUrl:"",emails:[],firstname:"",lastname:"",username:""};function i(){var e=Object(r.useState)(o),t=Object(a.a)(e,2),n=t[0],i=t[1],c=Object(r.useState)(null),s=Object(a.a)(c,2),u=s[0],l=s[1],d=Object(r.useState)(null),f=Object(a.a)(d,2),m=f[0],p=f[1];return Object(r.useEffect)((function(){i(function(){try{var e=sessionStorage.getItem("profile");if(e){var t=JSON.parse(e),n=t.avatarUrl;return t.avatarUrl="DEFAULT_AVATAR"===n?null:n,t}return o}catch(a){return o}}()),l(function(){try{var e=sessionStorage.getItem("skypeToken");return e?JSON.parse(e):null}catch(t){return null}}()),p(function(){try{var e=sessionStorage.getItem("signinName");return e?JSON.parse(e):null}catch(t){return null}}())}),[]),{user:n,token:u,signinName:m}}},8:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var a=n(0),r=n.n(a),o=n(11),i=n(6),c=n(3),s=n(20);n(114);function u(e){var t=e.ariaHidden,n=e.title,a=e.tooltip,u=Object(c.a)(e),l=u.size,d=u.label,f=u.labelPosition,m=u.tracking,p={fontSize:l,lineHeight:2},b=Object(o.a)(n);return r.a.createElement("div",{className:Object(i.a)("icon-component",e.classes,f)},d&&("left"===f||"top"===f)&&r.a.createElement("span",null,d),e.link&&r.a.createElement(r.a.Fragment,null,r.a.createElement("a",Object.assign({href:e.link,style:p,"aria-label":b,title:!a&&b},Object(s.a)(m)),e.icon),a&&r.a.createElement("span",{className:"tooltip"},b)),!e.link&&r.a.createElement("span",{"aria-hidden":t||!!d,"aria-label":b,title:b,style:p},e.icon),d&&("right"===f||"bottom"===f||!f)&&r.a.createElement("span",null,d))}u.defaultProps={ariaHidden:!1}},88:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(1),r=n(0);function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=Object(r.useState)(e.slice(0,t)),o=Object(a.a)(n,2),i=o[0],c=o[1],s=Object(r.useState)(t),u=Object(a.a)(s,2),l=u[0],d=u[1],f=function(n,a){var r=n.next;if(l===e.length)c(e.slice(0,t)),d(t);else if(r){var o=l+r;c(e.slice(0,o)),d(o)}else d(e.length),c(e);a&&"function"===typeof a&&a()},m=e.length-i.length;return[i,m,f]}},9:function(e,t,n){"use strict";n.r(t),n.d(t,"default",();var a=n(2),r=n(0),o=n.n(r),i=n(11),c=n(3);function s(e){return o.a.createElement(r.Fragment,null,function(e){var t=e.value,n=e.classes,r=e.noDecode,s=Object(c.a)(e),u=s.withLink,l=s.size,d={className:n};return u?o.a.createElement(l||"p",Object(a.a)(Object(a.a)({},d),{},{dangerouslySetInnerHTML:{__html:Object(i.a)(t)}})):o.a.createElement(l||"p",d,r?t:Object(i.a)(t))}(e))}}});
//# sourceMappingURL=app.bundle.js.map