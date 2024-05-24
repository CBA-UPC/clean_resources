(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([["infogram-charts/dep-6"],{3085:(r,n,t)=>{t.d(n,{Z:()=>a});function a(r,n){return null==r||null==n?NaN:r<n?-1:r>n?1:r>=n?0:NaN}},3084:(r,n,t)=>{t.d(n,{Z:()=>e});var a=t(3085);function e(r){var n=function(r,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:r.length;if(t<a){if(0!==e(n,n))return a;do{var o=t+a>>>1;0>i(r[o],n)?t=o+1:a=o}while(t<a)}return t};var t=r;var e=r;var i=r;return 1===r.length&&(t=function(n,t){return r(n)-t},e=a.Z,i=function(n,t){return(0,a.Z)(r(n),t)}),{left:n,center:function(r,a){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:r.length;var o=n(r,a,e,i-1);return o>e&&t(r[o-1],a)>-t(r[o],a)?o-1:o},right:function(r,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:r.length;if(t<a){if(0!==e(n,n))return a;do{var o=t+a>>>1;0>=i(r[o],n)?t=o+1:a=o}while(t<a)}return t}}}},3080:(r,n,t)=>{t.d(n,{G9:()=>u,ZP:()=>o,ly:()=>c});var a=Math.sqrt(50),e=Math.sqrt(10),i=Math.sqrt(2);function o(r,n,t){var a,e=-1,i,o,c;if(t=+t,(r=+r)==(n=+n)&&t>0)return[r];if((a=n<r)&&(i=r,r=n,n=i),0===(c=u(r,n,t))||!isFinite(c))return[];if(c>0){var l=Math.round(r/c),h=Math.round(n/c);for(l*c<r&&++l,h*c>n&&--h,o=Array(i=h-l+1);++e<i;)o[e]=(l+e)*c}else{var s=Math.round(r*(c=-c)),f=Math.round(n*c);for(s/c<r&&++s,f/c>n&&--f,o=Array(i=f-s+1);++e<i;)o[e]=(s+e)/c}return a&&o.reverse(),o}function u(r,n,t){var o=(n-r)/Math.max(0,t),u=Math.floor(Math.log(o)/Math.LN10),c=o/Math.pow(10,u);return u>=0?(c>=a?10:c>=e?5:c>=i?2:1)*Math.pow(10,u):-Math.pow(10,-u)/(c>=a?10:c>=e?5:c>=i?2:1)}function c(r,n,t){var o=Math.abs(n-r)/Math.max(0,t),u=Math.pow(10,Math.floor(Math.log(o)/Math.LN10)),c=o/u;return c>=a?u*=10:c>=e?u*=5:c>=i&&(u*=2),n<r?-u:u}},721:(r,n,t)=>{var a;var e;var i;t.d(n,{WU:()=>e,jH:()=>i}),e=(a=(0,t(722).Z)({thousands:",",grouping:[3],currency:["$",""]})).format,i=a.formatPrefix},725:(r,n,t)=>{t.d(n,{Z:()=>e});var a=t(724);function e(r){return(r=(0,a.V)(Math.abs(r)))?r[1]:NaN}},724:(r,n,t)=>{function a(r){return Math.abs(r=Math.round(r))>=1e21?r.toLocaleString("en").replace(/,/g,""):r.toString(10)}function e(r,n){if((t=(r=n?r.toExponential(n-1):r.toExponential()).indexOf("e"))<0)return null;var t,a=r.slice(0,t);return[a.length>1?a[0]+a.slice(2):a,+r.slice(t+1)]}t.d(n,{V:()=>e,Z:()=>a})},723:(r,n,t)=>{t.d(n,{Z:()=>e});var a=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function e(r){if(!(n=a.exec(r)))throw Error("invalid format: "+r);var n;return new i({fill:n[1],align:n[2],sign:n[3],symbol:n[4],zero:n[5],width:n[6],comma:n[7],precision:n[8]&&n[8].slice(1),trim:n[9],type:n[10]})}function i(r){this.fill=void 0===r.fill?" ":r.fill+"",this.align=void 0===r.align?">":r.align+"",this.sign=void 0===r.sign?"-":r.sign+"",this.symbol=void 0===r.symbol?"":r.symbol+"",this.zero=!!r.zero,this.width=void 0===r.width?void 0:+r.width,this.comma=!!r.comma,this.precision=void 0===r.precision?void 0:+r.precision,this.trim=!!r.trim,this.type=void 0===r.type?"":r.type+""}e.prototype=i.prototype,i.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(void 0===this.width?"":Math.max(1,0|this.width))+(this.comma?",":"")+(void 0===this.precision?"":"."+Math.max(0,0|this.precision))+(this.trim?"~":"")+this.type}},722:(r,n,t)=>{t.d(n,{Z:()=>f});var a=t(725);var e=t(723);var i=t(724);var o;function u(r,n){var t=(0,i.V)(r,n);if(!t)return r+"";var a=t[0],e=t[1];return e<0?"0."+Array(-e).join("0")+a:a.length>e+1?a.slice(0,e+1)+"."+a.slice(e+1):a+Array(e-a.length+2).join("0")}let c={"%":function(r,n){return(100*r).toFixed(n)},b:function(r){return Math.round(r).toString(2)},c:function(r){return r+""},d:i.Z,e:function(r,n){return r.toExponential(n)},f:function(r,n){return r.toFixed(n)},g:function(r,n){return r.toPrecision(n)},o:function(r){return Math.round(r).toString(8)},p:function(r,n){return u(100*r,n)},r:u,s:function(r,n){var t=(0,i.V)(r,n);if(!t)return r+"";var a=t[0],e=t[1],u=e-(o=3*Math.max(-8,Math.min(8,Math.floor(e/3))))+1,c=a.length;return u===c?a:u>c?a+Array(u-c+1).join("0"):u>0?a.slice(0,u)+"."+a.slice(u):"0."+Array(1-u).join("0")+(0,i.V)(r,Math.max(0,n+u-1))[0]},X:function(r){return Math.round(r).toString(16).toUpperCase()},x:function(r){return Math.round(r).toString(16)}};function l(r){return r}var h=Array.prototype.map,s=["y","z","a","f","p","n","\xb5","m","","k","M","G","T","P","E","Z","Y"];function f(r){var n=function(r){var n=(r=(0,e.Z)(r)).fill,t=r.align,a=r.sign,i=r.symbol,u=r.zero,l=r.width,h=r.comma,b=r.precision,Z=r.trim,x=r.type;"n"===x?(h=!0,x="g"):c[x]||(void 0===b&&(b=12),Z=!0,x="g"),(u||"0"===n&&"="===t)&&(u=!0,n="0",t="=");var N="$"===i?v:"#"===i&&/[boxX]/.test(x)?"0"+x.toLowerCase():"",w="$"===i?d:/[%p]/.test(x)?p:"";var k=c[x],A=/[defgprs%]/.test(x);function S(r){var e=N,i=w,c,v,d;if("c"===x)i=k(r)+i,r="";else{var p=(r=+r)<0||1/r<0;if(r=isNaN(r)?y:k(Math.abs(r),b),Z&&(r=function(r){r:for(var n=r.length,t=1,a=-1,e;t<n;++t)switch(r[t]){case".":a=e=t;break;case"0":0===a&&(a=t),e=t;break;default:if(!+r[t])break r;a>0&&(a=0)}return a>0?r.slice(0,a)+r.slice(e+1):r}(r)),p&&0==+r&&"+"!==a&&(p=!1),e=(p?"("===a?a:M:"-"===a||"("===a?"":a)+e,i=("s"===x?s[8+o/3]:"")+i+(p&&"("===a?")":""),A){for(c=-1,v=r.length;++c<v;)if(48>(d=r.charCodeAt(c))||d>57){i=(46===d?g+r.slice(c+1):r.slice(c))+i,r=r.slice(0,c);break}}}h&&!u&&(r=f(r,1/0));var S=e.length+r.length+i.length,j=S<l?Array(l-S+1).join(n):"";switch(h&&u&&(r=f(j+r,j.length?l-i.length:1/0),j=""),t){case"<":r=e+r+i+j;break;case"=":r=e+j+r+i;break;case"^":r=j.slice(0,S=j.length>>1)+e+r+i+j.slice(S);break;default:r=j+e+r+i}return m(r)}return b=void 0===b?6:/[gprs]/.test(x)?Math.max(1,Math.min(21,b)):Math.max(0,Math.min(20,b)),S.toString=function(){return r+""},S};var t,i;var u;var f=void 0===r.grouping||void 0===r.thousands?l:(t=h.call(r.grouping,Number),i=r.thousands+"",function(r,n){var a=r.length,e=[],o=0,u=t[0],c=0;for(;a>0&&u>0&&(c+u+1>n&&(u=Math.max(1,n-c)),e.push(r.substring(a-=u,a+u)),!((c+=u+1)>n));)u=t[o=(o+1)%t.length];return e.reverse().join(i)}),v=void 0===r.currency?"":r.currency[0]+"",d=void 0===r.currency?"":r.currency[1]+"",g=void 0===r.decimal?".":r.decimal+"",m=void 0===r.numerals?l:(u=h.call(r.numerals,String),function(r){return r.replace(/[0-9]/g,function(r){return u[+r]})}),p=void 0===r.percent?"%":r.percent+"",M=void 0===r.minus?"−":r.minus+"",y=void 0===r.nan?"NaN":r.nan+"";return{format:n,formatPrefix:function(r,t){var i=n(((r=(0,e.Z)(r)).type="f",r)),o=3*Math.max(-8,Math.min(8,Math.floor((0,a.Z)(t)/3))),u=Math.pow(10,-o),c=s[8+o/3];return function(r){return i(u*r)+c}}}}},3082:(r,n,t)=>{t.d(n,{Z:()=>e});var a=t(725);function e(r){return Math.max(0,-(0,a.Z)(Math.abs(r)))}},3081:(r,n,t)=>{t.d(n,{Z:()=>e});var a=t(725);function e(r,n){return Math.max(0,3*Math.max(-8,Math.min(8,Math.floor((0,a.Z)(n)/3)))-(0,a.Z)(Math.abs(r)))}},3083:(r,n,t)=>{t.d(n,{JG:()=>m,ZP:()=>M,yR:()=>f,l4:()=>p});var a=t(3085);var e=t(3084);var i=(0,e.Z)(a.Z);var o=i.right;i.left,(0,e.Z)(function(r){return null===r?NaN:+r}).center;var u=t(3070);var c=t(3060);function l(r,n){return r=+r,n=+n,function(t){return Math.round(r*(1-t)+n*t)}}function h(r){return+r}var s=[0,1];function f(r){return r}function v(r,n){var t;return(n-=r=+r)?function(t){return(t-r)/n}:(t=isNaN(n)?NaN:.5,function(){return t})}function d(r,n,t){var a=r[0],e=r[1],i=n[0],o=n[1];return e<a?(a=v(e,a),i=t(o,i)):(a=v(a,e),i=t(i,o)),function(r){return i(a(r))}}function g(r,n,t){var a=Math.min(r.length,n.length)-1,e=Array(a),i=Array(a),u=-1;for(r[a]<r[0]&&(r=r.slice().reverse(),n=n.slice().reverse());++u<a;)e[u]=v(r[u],r[u+1]),i[u]=t(n[u],n[u+1]);return function(n){var t=o(r,n,1,a)-1;return i[t](e[t](n))}}function m(r,n){return n.domain(r.domain()).range(r.range()).interpolate(r.interpolate()).clamp(r.clamp()).unknown(r.unknown())}function p(){var r=function(){var r=Math.min(t.length,a.length);if(m!==f){var e,i;var o;e=t[0],i=t[r-1],e>i&&(o=e,e=i,i=o),m=function(r){return Math.max(e,Math.min(i,r))}}return p=r>2?g:d,M=y=null,n};var n=function(r){return null==r||isNaN(r=+r)?v:(M||(M=p(t.map(i),a,e)))(i(m(r)))};var t=s,a=s,e=u.Z,i,o,v,m=f,p,M,y;return n.invert=function(r){return m(o((y||(y=p(a,t.map(i),c.Z)))(r)))},n.domain=function(n){return arguments.length?(t=Array.from(n,h),r()):t.slice()},n.range=function(n){return arguments.length?(a=Array.from(n),r()):a.slice()},n.rangeRound=function(n){return a=Array.from(n),e=l,r()},n.clamp=function(n){return arguments.length?(m=!!n||f,r()):m!==f},n.interpolate=function(n){return arguments.length?(e=n,r()):e},n.unknown=function(r){return arguments.length?(v=r,n):v},function(n,t){return i=n,o=t,r()}}function M(){return p()(f,f)}},3086:(r,n,t)=>{t.d(n,{o:()=>a});function a(r,n){switch(arguments.length){case 0:break;case 1:this.range(r);break;default:this.range(n).domain(r)}return this}},3079:(r,n,t)=>{t.d(n,{Z:()=>function r(){var n=(0,e.ZP)();return n.copy=function(){return(0,e.JG)(n,r())},i.o.apply(n,arguments),s(n)},Q:()=>s});var a=t(3080);var e=t(3083);var i=t(3086);var o=t(723);var u=t(3081);var c=t(721);var l=t(725);var h=t(3082);function s(r){var n=r.domain;return r.ticks=function(r){var t=n();return(0,a.ZP)(t[0],t[t.length-1],null==r?10:r)},r.tickFormat=function(r,t){var e=n();return function(r,n,t,e){var i=(0,a.ly)(r,n,t),s;switch((e=(0,o.Z)(null==e?",f":e)).type){case"s":var f=Math.max(Math.abs(r),Math.abs(n));return null!=e.precision||isNaN(s=(0,u.Z)(i,f))||(e.precision=s),(0,c.jH)(e,f);case"":case"e":case"g":case"p":case"r":var v,d;null!=e.precision||isNaN((v=i,d=Math.abs(d=Math.max(Math.abs(r),Math.abs(n)))-(v=Math.abs(v)),s=Math.max(0,(0,l.Z)(d)-(0,l.Z)(v))+1))||(e.precision=s-("e"===e.type));break;case"f":case"%":null!=e.precision||isNaN(s=(0,h.Z)(i))||(e.precision=s-("%"===e.type)*2)}return(0,c.WU)(e)}(e[0],e[e.length-1],null==r?10:r,t)},r.nice=function(t){null==t&&(t=10);var e=n();var i=0;var o=e.length-1;var u=e[i];var c=e[o];var l;var h;var s=10;for(c<u&&(h=u,u=c,c=h,h=i,i=o,o=h);s-- >0;){if((h=(0,a.G9)(u,c,t))===l)return e[i]=u,e[o]=c,n(e);if(h>0)u=Math.floor(u/h)*h,c=Math.ceil(c/h)*h;else if(h<0)u=Math.ceil(u*h)/h,c=Math.floor(c*h)/h;else break;l=h}return r},r}}}]);a="all" />
<link rel="stylesheet" id="ispot-news-and-events-style-css" href="https://www.ispot.tv/hub/wp-content/themes/ispot/blocks/ispot-news-and-events/ispot-news-and-events-style.css?ver=6.2.4" type="text/css" media="all" />
<link rel="stylesheet" id="ispot-pillar-blockquote-style-css" href="https://www.ispot.tv/hub/wp-content/themes/ispot/blocks/ispot-pillar-blockquote/ispot-pillar-blockquote-style.css?ver=6.2.4" type="text/css" media="all" />
<link rel="stylesheet" id="ispot-pillar-resource-selector-style-css" href="https://www.ispot.tv/hub/wp-content/themes/ispot/blocks/ispot-pillar-resource-selector/ispot-pillar-resource-selector-style.css?ver=6.2.4" type="text/css" media="all" />
<link rel="stylesheet" id="ispot-pillar-top-level-header-style-css" href="https://www.ispot.tv/hub/wp-content/themes/ispot/blocks/ispot-pillar-top-level-header/ispot-pillar-top-level-header-style.css?ver=6.2.4" type="text/css" media="all" />
<link rel="stylesheet" id="ispot-pull-quote-style-css" href="https://www.ispot.tv/hub/wp-content/themes/ispot/blocks/ispot-pull-quote/ispot-pull-quote-style.css?ver=6.2.4" type="text/css" media="all" />
<link rel="stylesheet" id="block-slider-css" href="https://www.ispot.tv/hub/wp-content/themes/ispot/blocks/ispot-slider/ispot-slider-style.css?ver=6.2.4" type="text/css" media="all" />
<link rel="stylesheet" id="stats-css" href="https://d3ds6z1w6yhmzj.cloudfront.net/dist/css/standard/modules/stats/index.css?ver=6.2.4" type="text/css" media="all" />
<link rel="stylesheet" id="flex-css" href="https://d3ds6z1w6yhmzj.cloudfront.net/dist/css/standard/modules/flex/index.css?ver=6.2.4" type="text/css" media="all" />
<link rel="stylesheet" id="icons-css" href="https://d3ds6z1w6yhmzj.cloudfront.net/dist/css/standard/modules/icons/index.css?ver=6.2.4" type="text/css" media="all" />
<link rel="stylesheet" id="classic-theme-styles-css" href="https://www.ispot.tv/hub/wp-includes/css/classic-themes.min.css?ver=6.2.4" type="text/css" media="all" />
<style id="global-styles-inline-css" type="text/css">
body{--wp--preset--color--black: #000000;--wp--preset--color--cyan-bluish-gray: #abb8c3;--wp--preset--color--white: #ffffff;--wp--preset--color--pale-pink: #f78da7;--wp--preset--color--vivid-red: #cf2e2e;--wp--preset--color--luminous-vivid-orange: #ff6900;--wp--preset--color--luminous-vivid-amber: #fcb900;--wp--preset--color--light-green-cyan: #7bdcb5;--wp--preset--color--vivid-green-cyan: #00d084;--wp--preset--color--pale-cyan-blue: #8ed1fc;--wp--preset--color--vivid-cyan-blue: #0693e3;--wp--preset--color--vivid-purple: #9b51e0;--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple: linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%);--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan: linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%);--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange: linear-gradient(135deg,rgba(252,185,0,1) 0%,rgba(255,105,0,1) 100%);--wp--preset--gradient--luminous-vivid-orange-to-vivid-red: linear-gradient(135deg,rgba(255,105,0,1) 0%,rgb(207,46,46) 100%);--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray: linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%);--wp--preset--gradient--cool-to-warm-spectrum: linear-gradient(135deg,rgb(74,234,220) 0%,rgb(151,120,209) 20%,rgb(207,42,186) 40%,rgb(238,44,130) 60%,rgb(251,105,98) 80%,rgb(254,248,76) 100%);--wp--preset--gradient--blush-light-purple: linear-gradient(135deg,rgb(255,206,236) 0%,rgb(152,150,240) 100%);--wp--preset--gradient--blush-bordeaux: linear-gradient(135deg,rgb(254,205,165) 0%,rgb(254,45,45) 50%,rgb(107,0,62) 100%);--wp--preset--gradient--luminous-dusk: linear-gradient(135deg,rgb(255,203,112) 0%,rgb(199,81,192) 50%,rgb(65,88,208) 100%);--wp--preset--gradient--pale-ocean: linear-gradient(135deg,rgb(255,245,203) 0%,rgb(182,227,212) 50%,rgb(51,167,181) 100%);--wp--preset--gradient--electric-grass: linear-gradient(135deg,rgb(202,248,128) 0%,rgb(113,206,126) 100%);--wp--preset--gradient--midnight: linear-gradient(135deg,rgb(2,3,129) 0%,rgb(40,116,252) 100%);--wp--preset--duotone--dark-grayscale: url('#wp-duotone-dark-grayscale');--wp--preset--duotone--grayscale: url('#wp-duotone-grayscale');--wp--preset--duotone--purple-yellow: url('#wp-duotone-purple-yellow');--wp--preset--duotone--blue-red: url('#wp-duotone-blue-red');--wp--preset--duotone--midnight: url('#wp-duotone-midnight');--wp--preset--duotone--magenta-yellow: url('#wp-duotone-magenta-yellow');--wp--preset--duotone--purple-green: url('#wp-duotone-purple-green');--wp--preset--duotone--blue-orange: url('#wp-duotone-blue-orange');--wp--preset--font-size--small: 13px;--wp--preset--font-size--medium: 20px;--wp--preset--font-size--large: 36px;--wp--preset--font-size--x-large: 42px;--wp--preset--spacing--20: 0.44rem;--wp--preset--spacing--30: 0.67rem;--wp--preset--spacing--40: 1rem;--wp--preset--spacing--50: 1.5rem;--wp--preset--spacing--60: 2.25rem;--wp--preset--spacing--70: 3.38rem;--wp--preset--spacing--80: 5.06rem;--wp--preset--shadow--natural: 6px 6px 9px rgba(0, 0, 0, 0.2);--wp--preset--shadow--deep: 12px 12px 50px rgba(0, 0, 0, 0.4);--wp--preset--shadow--sharp: 6px 6px 0px rgba(0, 0, 0, 0.2);--wp--preset--shadow--outlined: 6px 6px 0px -3px rgba(255, 255, 255, 1), 6px 6px rgba(0, 0, 0, 1);--wp--preset--shadow--crisp: 6px 6px 0px rgba(0, 0, 0, 1);}:where(.is-layout-flex){gap: 0.5em;}body .is-layout-flow > .alignleft{float: left;margin-inline-start: 0;margin-inline-end: 2em;}body .is-layout-flow > .alignright{float: right;margin-inline-start: 2em;margin-inline-end: 0;}body .is-layout-flow > .aligncenter{margin-left: auto !important;margin-right: auto !important;}body .is-layout-constrained > .alignleft{float: left;margin-inline-start: 0;margin-inline-end: 2em;}body .is-layout-constrained > .alignright{float: right;margin-inline-start: 2em;margin-inline-end: 0;}body .is-layout-constrained > .aligncenter{margin-left: auto !important;margin-right: auto !important;}body .is-layout-constrained > :where(:not(.alignleft):not(.alignright):not(.alignfull)){max-width: var(--wp--style--global--content-size);margin-left: auto !important;margin-right: auto !important;}body .is-layout-constrained > .alignwide{max-width: var(--wp--style--global--wide-size);}body .is-layout-flex{display: flex;}body .is-layout-flex{flex-wrap: wrap;align-items: center;}body .is-layout-flex > *{margin: 0;}:where(.wp-block-columns.is-layout-flex){gap: 2em;}.has-black-color{color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-color{color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-color{color: var(--wp--preset--color--white) !important;}.has-pale-pink-color{color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-color{color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-color{color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-color{color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-color{color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-color{color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-color{color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-color{color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-color{color: var(--wp--preset--color--vivid-purple) !important;}.has-black-background-color{background-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-background-color{background-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-background-color{background-color: var(--wp--preset--color--white) !important;}.has-pale-pink-background-color{background-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-background-color{background-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-background-color{background-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-background-color{background-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-background-color{background-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-background-color{background-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-background-color{background-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-background-color{background-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-background-color{background-color: var(--wp--preset--color--vivid-purple) !important;}.has-black-border-color{border-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-border-color{border-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-border-color{border-color: var(--wp--preset--color--white) !important;}.has-pale-pink-border-color{border-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-border-color{border-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-border-color{border-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-border-color{border-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-border-color{border-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-border-color{border-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-border-color{border-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-border-color{border-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-border-color{border-color: var(--wp--preset--color--vivid-purple) !important;}.has-vivid-cyan-blue-to-vivid-purple-gradient-background{background: var(--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple) !important;}.has-light-green-cyan-to-vivid-green-cyan-gradient-background{background: var(--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan) !important;}.has-luminous-vivid-amber-to-luminous-vivid-orange-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange) !important;}.has-luminous-vivid-orange-to-vivid-red-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-orange-to-vivid-red) !important;}.has-very-light-gray-to-cyan-bluish-gray-gradient-background{background: var(--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray) !important;}.has-cool-to-warm-spectrum-gradient-background{background: var(--wp--preset--gradient--cool-to-warm-spectrum) !important;}.has-blush-light-purple-gradient-background{background: var(--wp--preset--gradient--blush-light-purple) !important;}.has-blush-bordeaux-gradient-background{background: var(--wp--preset--gradient--blush-bordeaux) !important;}.has-luminous-dusk-gradient-background{background: var(--wp--preset--gradient--luminous-dusk) !important;}.has-pale-ocean-gradient-background{background: var(--wp--preset--gradient--pale-ocean) !important;}.has-electric-grass-gradient-background{background: var(--wp--preset--gradient--electric-grass) !important;}.has-midnight-gradient-background{background: var(--wp--preset--gradient--midnight) !important;}.has-small-font-size{font-size: var(--wp--preset--font-size--small) !important;}.has-medium-font-size{font-size: var(--wp--preset--font-size--medium) !important;}.has-large-font-size{font-size: var(--wp--preset--font-size--large) !important;}.has-x-large-font-size{font-size: var(--wp--preset--font-size--x-large) !important;}
.wp-block-navigation a:where(:not(.wp-element-button)){color: inherit;}
:where(.wp-block-columns.is-layout-flex){gap: 2em;}
.wp-block-pullquote{font-size: 1.5em;line-height: 1.6;}
</style>
<link rel="stylesheet" id="free-reports-css" href="https://www.ispot.tv/hub/wp-content/plugins/ispot-resources/resources/free-reports/free-reports.css?ver=6.2.4" type="text/css" media="all" />
<link rel="stylesheet" id="ispot-style-css" href="https://www.ispot.tv/hub/wp-content/themes/ispot/style.css?ver=6.2.4" type="text/css" media="all" />
<link rel="stylesheet" id="wp-featherlight-css" href="https://www.ispot.tv/hub/wp-content/plugins/wp-featherlight/css/wp-featherlight.min.css?ver=1.2.0" type="text/css" media="all" />
<script type="text/javascript" src="https://www.ispot.tv/hub/wp-includes/js/jquery/jquery.min.js?ver=3.6.4" id="jquery-core-js"></script>
<script type="text/javascript" src="https://www.ispot.tv/hub/wp-includes/js/jquery/jquery-migrate.min.js?ver=3.4.0" id="jquery-migrate-js"></script>
<link rel="https://api.w.org/" href="https://www.ispot.tv/hub/wp-json/" /><link rel="alternate" type="application/json" href="https://www.ispot.tv/hub/wp-json/wp/v2/free_reports/16934" /><link rel="EditURI" type="application/rsd+xml" title="RSD" href="https://www.ispot.tv/hub/xmlrpc.php?rsd" />
<link rel="wlwmanifest" type="application/wlwmanifest+xml" href="https://www.ispot.tv/hub/wp-includes/wlwmanifest.xml" />
<meta name="generator" content="WordPress 6.2.4" />
<link rel="canonical" href="https://www.ispot.tv/hub/resources/free-reports/super-bowl-lvii-creative-analysis/" />
<link rel="shortlink" href="https://www.ispot.tv/hub/?p=16934" />
<meta property="description" content="Super Bowl LVII has come and gone, but advertisers are still examining all of the Big Game commercials. A total of 54 spots dropped on Super Bowl Sunday. But which TV ads resonated with viewers most? And why?" /><meta property="og:description" content="Super Bowl LVII has come and gone, but advertisers are still examining all of the Big Game commercials. A total of 54 spots dropped on Super Bowl Sunday. But which TV ads resonated with viewers most? And why?" /><meta name="twitter:description" content="Super Bowl LVII has come and gone, but advertisers are still examining all of the Big Game commercials. A total of 54 spots dropped on Super Bowl Sunday. But which TV ads resonated with viewers most? And why?"><meta property="keywords" content="Super Bowl, Super Bowl LVII, iSpot, iSpot.tv, ads, commercials, TV, Jeep, Amazon, The Farmer's Dog" /> 

<meta property="og:link" content="https://www.ispot.tv/hub/resources/free-reports/super-bowl-lvii-creative-analysis/">
<meta property="og:title" content="Super Bowl LVII Creative Analysis">
<meta property="og:image" content="https://hub-cdn.ispot.tv/blog/wp-content/uploads/2023/02/22165440/cover_480x320.png">
<meta name="twitter:image" content="https://hub-cdn.ispot.tv/blog/wp-content/uploads/2023/02/22165440/cover_480x320.png">

<title>Super Bowl LVII Creative Analysis</title>
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@ispottv">
<meta name="twitter:creator" content="@ispottv">
<meta name="twitter:title" content="Super Bowl LVII Creative Analysis">
<meta name="Content-Type" content="text/html; charset=utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<meta name="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="asset-server" content="https://d3ds6z1w6yhmzj.cloudfront.net">
<meta name="www-server" content="https://www.ispot.tv">
<meta name="referrer" content="no-referrer-when-downgrade">
<meta name="msvalidate.01" content="5B62160EC07AC4393D41DCFD2DC1ED71">
<meta name="google-site-verification" content="A7RASS0s8OVkG79LnrDjcJVuBHJBG3vUmj19ukRlCLw">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-title" content="iSpot.tv">
<meta name="apple-mobile-web-app-status-bar-style" content="default">
<meta name="theme-color" content="#292D2F">

<meta charset>


<link rel="prefetch" href="https://d3ds6z1w6yhmzj.cloudfront.net/dist/css/global/index.css?v=9.3.35">
<link rel="prefetch" href="https://d3ds6z1w6yhmzj.cloudfront.net/dist/css/legacy/index.css?v=9.3.35">
<link rel="prefetch" href="https://d3ds6z1w6yhmzj.cloudfront.net/dist/css/standard/index.css?v=9.3.35">
<link rel="prefetch" href="https://d3ds6z1w6yhmzj.cloudfront.net/dist/css/standard/bootstrap/index.css?v=9.3.35">
<link rel="prefetch" href="https://d3ds6z1w6yhmzj.cloudfront.net/dist/css/standard/modules/jumbotron/index.css?v=9.3.35">
<link rel="prefetch" href="https://d3ds6z1w6yhmzj.cloudfront.net/dist/css/standard/modules/card/index.css?v=9.3.35">
<link rel="prefetch" href="https://d3ds6z1w6yhmzj.cloudfront.net/dist/css/standard/utils/index.css?v=9.3.35">
<link rel="prefetch" href="https://d3ds6z1w6yhmzj.cloudfront.net/dist/css/standard/typography/index.css?v=9.3.35">
<link rel="prefetch" href="https://d3ds6z1w6yhmzj.cloudfront.net/dist/css/header/index.css?v=9.3.35">
<link rel="prefetch" href="https://d3ds6z1w6yhmzj.cloudfront.net/dist/css/bootstrap-ext/index.css?v=9.3.35">
<link rel="prefetch" href="https://d3ds6z1w6yhmzj.cloudfront.net/dist/css/footer/index.css?v=9.3.35">
<link rel="prefetch" href="https://d3ds6z1w6yhmzj.cloudfront.net/dist/css/modal/index.css?v=9.3.35">
<link rel="prefetch" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css">
<link rel="prefetch" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css">
<link rel="prefetch" href="https://pro.fontawesome.com/releases/v5.15.3/css/svg-with-js.css">
<link rel="preload" as="style" href="https://d3ds6z1w6yhmzj.cloudfront.net/dist/css/global/index.css?v=9.3.35">
<link rel="preload" as="style" href="https://d3ds6z1w6yhmzj.cloudfront.net/dist/css/legacy/index.css?v=9.3.35">
<link rel="preload" as="style" href="https://d3ds6z1w6yhmzj.cloudfront.net/dist/css/standard/index.css?v=9.3.35">
<link rel="preload" as="style" href="https://d3ds6z1w6yhmzj.cloudfront.net/dist/css/standard/bootstrap/index.css?v=9.3.35">
<link rel="preload" as="style" href="https://d3ds6z1w6yhmzj.cloudfront.net/dist/css/standard/modules/jumbotron/index.css?v=9.3.35">
<link rel="preload" as="style" href="https://d3ds6z1w6yhmzj.cloudfront.net/dist/css/standard/modules/card/index.css?v=9.3.35">
<link rel="preload" as="style" href="https://d3ds6z1w6yhmzj.cloudfront.net/dist/css/standard/utils/index.css?v=9.3.35">
<link rel="preload" as="style" href="https://d3ds6z1w6yhmzj.cloudfront.net/dist/css/standard/typography/index.css?v=9.3.35">
<link rel="preload" as="style" href="https://d3ds6z1w6yhmzj.cloudfront.net/dist/css/header/index.css?v=9.3.35">
<link rel="preload" as="style" href="https://d3ds6z1w6yhmzj.cloudfront.net/dist/css/bootstrap-ext/index.css?v=9.3.35">
<link rel="preload" as="style" href="https://d3ds6z1w6yhmzj.cloudfront.net/dist/css/footer/index.css?v=9.3.35">
<link rel="preload" as="style" href="https://d3ds6z1w6yhmzj.cloudfront.net/dist/css/modal/index.css?v=9.3.35">
<link rel="preload" as="style" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css">
<link rel="preload" as="style" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css">
<link rel="preload" as="style" href="https://pro.fontawesome.com/releases/v5.15.3/css/svg-with-js.css">

<link rel="stylesheet" type="text/css" href="https://d3ds6z1w6yhmzj.cloudfront.net/dist/css/global/index.css?v=9.3.35">
<link rel="stylesheet" type="text/css" href="https://d3ds6z1w6yhmzj.cloudfront.net/dist/css/legacy/index.css?v=9.3.35">
<link rel="stylesheet" type="text/css" href="https://d3ds6z1w6yhmzj.cloudfront.net/dist/css/standard/index.css?v=9.3.35">
<link rel="stylesheet" type="text/css" href="https://d3ds6z1w6yhmzj.cloudfront.net/dist/css/standard/bootstrap/index.css?v=9.3.35">
<link rel="stylesheet" type="text/css" href="https://d3ds6z1w6yhmzj.cloudfront.net/dist/css/standard/modules/jumbotron/index.css?v=9.3.35">
<link rel="stylesheet" type="text/css" href="https://d3ds6z1w6yhmzj.cloudfront.net/dist/css/standard/modules/card/index.css?v=9.3.35">
<link rel="stylesheet" type="text/css" href="https://d3ds6z1w6yhmzj.cloudfront.net/dist/css/standard/utils/index.css?v=9.3.35">
<link rel="stylesheet" type="text/css" href="https://d3ds6z1w6yhmzj.cloudfront.net/dist/css/standard/typography/index.css?v=9.3.35">
<link rel="stylesheet" type="text/css" href="https://d3ds6z1w6yhmzj.cloudfront.net/dist/css/header/index.css?v=9.3.35">
<link rel="stylesheet" type="text/css" href="https://d3ds6z1w6yhmzj.cloudfront.net/dist/css/bootstrap-ext/index.css?v=9.3.35">
<link rel="stylesheet" type="text/css" href="https://d3ds6z1w6yhmzj.cloudfront.net/dist/css/footer/index.css?v=9.3.35">
<link rel="stylesheet" type="text/css" href="https://d3ds6z1w6yhmzj.cloudfront.net/dist/css/modal/index.css?v=9.3.35">
<link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css">
<link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css">
<link href="https://pro.fontawesome.com/releases/v5.15.3/css/svg-with-js.css" media="all" rel="stylesheet" type="text/css">
<link rel="preload" as="font" crossorigin="anonymous" href="https://d3ds6z1w6yhmzj.cloudfront.net/fonts/source-sans-pro/source-sans-pro-v11-latin-300.woff2">
<link rel="preload" as="font" crossorigin="anonymous" href="https://d3ds6z1w6yhmzj.cloudfront.net/fonts/source-sans-pro/source-sans-pro-v11-latin-regular.woff2">
<link rel="preload" as="font" crossorigin="anonymous" href="https://d3ds6z1w6yhmzj.cloudfront.net/fonts/source-sans-pro/source-sans-pro-v11-latin-600.woff2">
<link rel="preload" as="font" crossorigin="anonymous" href="https://d3ds6z1w6yhmzj.cloudfront.net/fonts/poppins/Poppins-Medium.woff2">
<link rel="preload" as="font" crossorigin="anonymous" href="https://d3ds6z1w6yhmzj.cloudfront.net/fonts/poppins/Poppins-Bold.woff2">
<link rel="preload" as="font" crossorigin="anonymous" href="https://d3ds6z1w6yhmzj.cloudfront.net/fonts/poppins/Poppins-Regular.woff2">

<script type="application/ld+json">
{
	"@context": "http://schema.org",
	"@type": "WebApplication",
	"@id": "https://www.ispot.tv/#organization",
	"applicationCategory": "BusinessApplication",
	"name": "iSpot.tv - TV Ad Measurement and Attribution",
	"operatingSystem": "all",
	"browserRequirements": "Requires Javascript and HTML5 support",
	"url": "https://www.ispot.tv",
	"screenshot": "https://d3ds6z1w6yhmzj.cloudfront.net/img/solutions/tv-attribution/Digital-Like-Impact.png",
	"aggregateRating": {
		"@type": "AggregateRating",
		"ratingValue": "4.5",
		"reviewCount": "5"
	},
	"offers": {
		"@type": "AggregateOffer",
		"offeredBy": {
			"@type": "Organization",
			"name": "iSpot"
		},
		"lowprice": "0.00",
		"priceCurrency": "USD",
		"priceSpecification": [{
			"@type": "UnitPriceSpecification",
			"price": "0.00",
			"priceCurrency": "USD",
			"name": "Metrics Access, 10 Day Trial"
		}]
	},
	"creator": {
		"@type": "Organization",
		"@id": "#organization",
		"url": "https://www.ispot.tv",
		"name": "iSpot",
		"logo": {
			"@type": "ImageObject",
			"url": "https://d3ds6z1w6yhmzj.cloudfront.net/img/ispot/logo-home.png",
			"width": "300px",
			"height": "82px"
		},
		"sameAs": [
			"https://www.linkedin.com/company/ispottv/",
			"https://www.crunchbase.com/organization/ispot-tv",
			"https://twitter.com/ispottv",
			"https://www.facebook.com/ispottv/",
			"https://www.youtube.com/channel/UCeMuA4L9qnyKOsoFqkEDNJA",
			"https://www.instagram.com/ispottv/",
			"https://www.glassdoor.com/Overview/Working-at-iSpot-tv-EI_IE1262491.11,19.htm",
			"https://www.g2.com/products/ispot-tv/reviews"
		],
		"contactPoint": [{
			"@type": "ContactPoint",
			"telephone": "+1-855-477-6888",
			"contactType": "Sales",
			"contactOption": "TollFree",
			"areaServed": "US",
			"availableLanguage": "English",
			"email": "hello@ispot.tv"
		}],
		"address": [{
				"@type": "PostalAddress",
				"addressCountry": "United States",
				"addressRegion": "WA",
				"addressLocality": "Bellevue",
				"postalCode": "98008",
				"streetAddress": "15831 NE 8th Street #100"
			},
			{
				"@type": "PostalAddress",
				"addressCountry": "United States",
				"addressRegion": "NY",
				"addressLocality": "New York",
				"postalCode": "10018",
				"streetAddress": "1333 Broadway Suite 730"
			}
		],
		"email": "hello@ispot.tv",
		"foundingDate": "2009",
		"founders": [{
			"@type": "Person",
			"name": "Sean Muller",
			"image": "https://res-2.cloudinary.com/crunchbase-production/image/upload/c_thumb,h_256,w_256,f_auto,g_faces,z_0.7,q_auto:eco/ltkagzwpqcqxwfjalhfu",
			"url": "https://www.linkedin.com/in/seanmuller/"
		}],
		"funder": [{
			"@type": "Organization",
			"name": "Insight Partners",
			"image": "https://res-3.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco/zyz7mpb1nui5o04itpce",
			"logo": "https://res-3.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco/zyz7mpb1nui5o04itpce",
			"url": "https://www.crunchbase.com/organization/insight-partners"
		}, {
			"@type": "Organization",
			"name": "Madrona Venture Group",
			"image": "https://res-3.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco/v1461021636/akx9xbkm2udyjkipigv2.jpg",
			"logo": "https://res-3.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco/v1461021636/akx9xbkm2udyjkipigv2.jpg",
			"url": "https://www.crunchbase.com/organization/madrona-venture-group"
		}, {
			"@type": "Organization",
			"name": "Peak Opportunity Partners",
			"image": "https://res-2.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco/v1468471844/b2jlvx98frdjaccp4pxr.png",
			"logo": "https://res-2.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco/v1468471844/b2jlvx98frdjaccp4pxr.png",
			"url": "https://www.crunchbase.com/organization/peak-opportunity-partners-2"
		}, {
			"@type": "Organization",
			"name": "TL Ventures",
			"image": "https://res-1.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco/v1397179378/96fec1e290dbd8c9ca05cb9bbd0f3f96.png",
			"logo": "https://res-1.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco/v1397179378/96fec1e290dbd8c9ca05cb9bbd0f3f96.png",
			"url": "https://www.crunchbase.com/organization/tl-ventures"
		}, {
			"@type": "Person",
			"name": "Bryce Stevens",
			"image": "https://res-1.cloudinary.com/crunchbase-production/image/upload/c_thumb,h_256,w_256,f_auto,g_faces,z_0.7,q_auto:eco/v1471319549/w70xwtmyt5zggfl443cr.png",
			"url": "https://www.crunchbase.com/person/bryce-stevens"
		}, {
			"@type": "Person",
			"name": "Howard Love",
			"image": "https://res-5.cloudinary.com/crunchbase-production/image/upload/c_thumb,h_256,w_256,f_auto,g_faces,z_0.7,q_auto:eco/v1469404509/ur0hdos7jmontjxatauf.jpg",
			"url": "https://www.crunchbase.com/person/howard-love"
		}, {
			"@type": "Person",
			"name": "Paul Stahura",
			"image": "https://res-2.cloudinary.com/crunchbase-production/image/upload/c_thumb,h_256,w_256,f_auto,g_faces,z_0.7,q_auto:eco/v1471163883/adxslwp5za6n0p2uke8p.png",
			"url": "https://www.crunchbase.com/person/paul-stahura"
		}]

	}
}
</script>
<meta name="hb-feature" content="feature=injectSDCC"></head>
<body class="free_reports-template-default single single-free_reports postid-16934 wp-embed-responsive wp-featherlight-captions group-blog">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" width="0" height="0" focusable="false" role="none" style="visibility: hidden; position: absolute; left: -9999px; overflow: hidden;"><defs><filter id="wp-duotone-dark-grayscale"><feColorMatrix color-interpolation-filters="sRGB" type="matrix" values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 " /><feComponentTransfer color-interpolation-filters="sRGB"><feFuncR type="table" tableValues="0 0.49803921568627" /><feFuncG type="table" tableValues="0 0.49803921568627" /><feFuncB type="table" tableValues="0 0.49803921568627" /><feFuncA type="table" tableValues="1 1" /></feComponentTransfer><feComposite in2="SourceGraphic" operator="in" /></filter></defs></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" width="0" height="0" focusable="false" role="none" style="visibility: hidden; position: absolute; left: -9999px; overflow: hidden;"><defs><filter id="wp-duotone-grayscale"><feColorMatrix color-interpolation-filters="sRGB" type="matrix" values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 " /><feComponentTransfer color-interpolation-filters="sRGB"><feFuncR type="table" tableValues="0 1" /><feFuncG type="table" tableValues="0 1" /><feFuncB type="table" tableValues="0 1" /><feFuncA type="table" tableValues="1 1" /></feComponentTransfer><feComposite in2="SourceGraphic" operator="in" /></filter></defs></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" width="0" height="0" focusable="false" role="none" style="visibility: hidden; position: absolute; left: -9999px; overflow: hidden;"><defs><filter id="wp-duotone-purple-yellow"><feColorMatrix color-interpolation-filters="sRGB" type="matrix" values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 " /><feComponentTransfer color-interpolation-filters="sRGB"><feFuncR type="table" tableValues="0.54901960784314 0.98823529411765" /><feFuncG type="table" tableValues="0 1" /><feFuncB type="table" tableValues="0.71764705882353 0.25490196078431" /><feFuncA type="table" tableValues="1 1" /></feComponentTransfer><feComposite in2="SourceGraphic" operator="in" /></filter></defs></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" width="0" height="0" focusable="false" role="none" style="visibility: hidden; position: absolute; left: -9999px; overflow: hidden;"><defs><filter id="wp-duotone-blue-red"><feColorMatrix color-interpolation-filters="sRGB" type="matrix" values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 " /><feComponentTransfer color-interpolation-filters="sRGB"><feFuncR type="table" tableValues="0 1" /><feFuncG type="table" tableValues="0 0.27843137254902" /><feFuncB type="table" tableValues="0.5921568627451 0.27843137254902" /><feFuncA type="table" tableValues="1 1" /></feComponentTransfer><feComposite in2="SourceGraphic" operator="in" /></filter></defs></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" width="0" height="0" focusable="false" role="none" style="visibility: hidden; position: absolute; left: -9999px; overflow: hidden;"><defs><filter id="wp-duotone-midnight"><feColorMatrix color-interpolation-filters="sRGB" type="matrix" values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 " /><feComponentTransfer color-interpolation-filters="sRGB"><feFuncR type="table" tableValues="0 0" /><feFuncG type="table" tableValues="0 0.64705882352941" /><feFuncB type="table" tableValues="0 1" /><feFuncA type="table" tableValues="1 1" /></feComponentTransfer><feComposite in2="SourceGraphic" operator="in" /></filter></defs></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" width="0" height="0" focusable="false" role="none" style="visibility: hidden; position: absolute; left: -9999px; overflow: hidden;"><defs><filter id="wp-duotone-magenta-yellow"><feColorMatrix color-interpolation-filters="sRGB" type="matrix" values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 " /><feComponentTransfer color-interpolation-filters="sRGB"><feFuncR type="table" tableValues="0.78039215686275 1" /><feFuncG type="table" tableValues="0 0.94901960784314" /><feFuncB type="table" tableValues="0.35294117647059 0.47058823529412" /><feFuncA type="table" tableValues="1 1" /></feComponentTransfer><feComposite in2="SourceGraphic" operator="in" /></filter></defs></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" width="0" height="0" focusable="false" role="none" style="visibility: hidden; position: absolute; left: -9999px; overflow: hidden;"><defs><filter id="wp-duotone-purple-green"><feColorMatrix color-interpolation-filters="sRGB" type="matrix" values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 " /><feComponentTransfer color-interpolation-filters="sRGB"><feFuncR type="table" tableValues="0.65098039215686 0.40392156862745" /><feFuncG type="table" tableValues="0 1" /><feFuncB type="table" tableValues="0.44705882352941 0.4" /><feFuncA type="table" tableValues="1 1" /></feComponentTransfer><feComposite in2="SourceGraphic" operator="in" /></filter></defs></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" width="0" height="0" focusable="false" role="none" style="visibility: hidden; position: absolute; left: -9999px; overflow: hidden;"><defs><filter id="wp-duotone-blue-orange"><feColorMatrix color-interpolation-filters="sRGB" type="matrix" values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 " /><feComponentTransfer color-interpolation-filters="sRGB"><feFuncR type="table" tableValues="0.098039215686275 1" /><feFuncG type="table" tableValues="0 0.66274509803922" /><feFuncB type="table" tableValues="0.84705882352941 0.41960784313725" /><feFuncA type="table" tableValues="1 1" /></feComponentTransfer><feComposite in2="SourceGraphic" operator="in" /></filter></defs></svg>

<noscript>
    <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PWQKWB5" height="0" width="0" style="display:none;visibility:hidden"></iframe>
</noscript>
<div class="notification">
<div class="notification__container">Learn the secrets to maximizing Super Bowl Ad impact. <a href="https://on.ispot.tv/3SutKGC" data-qa="notification_link">Register Now></a></div>
</div>
<div class="wrapper">
<header class="hdr">
<nav class="hdr__nav">
<ul class="hdr__ul hdr__main">
<li class="hdr__li hdr__logo">
<a href="/">
<span class="sr-only">iSpot.tv Logo</span>
<svg class="logo" aria-labelledby="logoTitle8976192 logoDesc5034663" role="img" height="36" width="132" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 77 21">
<title id="logoTitle8976192">Link to iSpot.tv Homepage</title>
<desc id="logoDesc5034663">Displays the iSpot.tv logo and links to Link to the homepage</desc>
<path class="logo__text" fill="#000" d="M1 2.9c-.4-.3-.5-.7-.5-1.1 0-.4.1-.8.5-1.1.3-.3.7-.5 1.1-.5.4 0 .8.2 1.1.5.4.3.5.7.5 1.1 0 .4-.2.8-.5 1.1s-.7.5-1.1.5c-.4 0-.8-.1-1.1-.5zm2.4 14.6h-2.6v-12.1h2.6v12.1zm7.4-13.9c-.8 0-1.4.2-1.9.5s-.8.8-.8 1.5c0 .6.3 1.1.8 1.5.5.3 1.6.7 3.2 1.1 1.6.4 2.9.9 3.7 1.7.8.7 1.2 1.8 1.2 3.2s-.5 2.5-1.6 3.4c-1 .9-2.4 1.3-4.1 1.3-2.5 0-4.7-.9-6.6-2.6l1.7-2c1.6 1.4 3.3 2.1 5 2.1.9 0 1.6-.2 2.1-.6.5-.4.8-.9.8-1.5s-.2-1.1-.7-1.4c-.6-.5-1.4-.8-2.6-1.1-1.1-.2-2-.5-2.6-.7-.6-.3-1.2-.6-1.7-1-.9-.7-1.4-1.8-1.4-3.2 0-1.5.5-2.6 1.6-3.4 1.1-.8 2.4-1.2 4-1.2 1 0 2 .2 3 .5s1.9.8 2.6 1.4l-1.4 2c-.5-.4-1.1-.8-1.9-1-.8-.3-1.6-.5-2.4-.5zm14.2 1.6c1.6 0 3 .6 4.2 1.7 1.2 1.1 1.7 2.6 1.7 4.5s-.6 3.4-1.7 4.6c-1.1 1.2-2.5 1.8-4 1.8s-2.9-.7-4.1-2v5.3h-2.6v-15.7h2.6v2.1c1-1.6 2.3-2.3 3.9-2.3zm-3.9 6.2c0 1.2.3 2.1 1 2.8.7.7 1.5 1.1 2.6 1.1 1 0 1.9-.4 2.6-1.1.7-.7 1.1-1.7 1.1-2.8 0-1.2-.4-2.1-1.1-2.9-.7-.8-1.6-1.2-2.6-1.2s-1.9.4-2.6 1.2c-.7.8-1 1.8-1 2.9zm27.2-4v6.1c0 .6.2 1 .5 1.4.3.3.7.5 1.3.5.5 0 1.1-.3 1.6-.8l1 1.8c-.9.8-1.9 1.2-3 1.2s-2-.4-2.8-1.1c-.8-.8-1.2-1.8-1.2-3v-11.9h2.6v3.8h3.2v2h-3.2zm6.5 9.8c-.3-.3-.5-.7-.5-1.2s.2-.9.5-1.2c.3-.3.7-.5 1.2-.5s.9.2 1.2.5c.3.3.5.7.5 1.2s-.2.9-.5 1.2c-.3.3-.7.5-1.2.5s-.9-.2-1.2-.5zm19.3-11.8l-3.7 9.2-3.7-9.2h-5v-3.8h-2.6v11.9c0 1.3.4 2.3 1.2 3 .8.8 1.7 1.1 2.8 1.1 1.1 0 2.1-.4 3-1.2l-1-1.8c-.5.5-1 .8-1.6.8-.5 0-1-.2-1.3-.5-.3-.3-.5-.8-.5-1.4v-6.1h3.2l4 10.1h2.9l4.9-12.1h-2.6z"></path>
<path class="logo__mark-bg" fill="transparent" d="M38.3 5.3c-3.4 0-6.2 2.8-6.2 6.2 0 3.4 2.8 6.2 6.2 6.2 3.4 0 6.2-2.8 6.2-6.2 0-3.4-2.8-6.2-6.2-6.2z"></path>
<path class="logo__mark" fill="#77bd22" d="M38.3 5.3c-3.4 0-6.2 2.8-6.2 6.2 0 3.4 2.8 6.2 6.2 6.2 3.4 0 6.2-2.8 6.2-6.2 0-3.4-2.8-6.2-6.2-6.2zm-.8 9.4l-1.1.7c-.3.2-.6 0-.6-.4v-7c0-.3.3-.6.6-.4.1 0 .5.3 1.1.7v6.4zm2.4-1.5c-.6.4-1.2.7-1.7 1.1v-5.6c.5.3 1.2.7 1.7 1.1v3.4zm2.2-1.3l-1.5.9v-2.6l1.5.9c.3.2.3.6 0 .8z"></path>
</svg>
</a>
</li>
<li class="hdr__li hdr__search">
<a href="/search" data-qa="nav_search">
<span class="sr-only">Search iSpot.tv</span>
<svg class="hdr__icon" aria-hidden="true" focusable="false" data-prefix="far" data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg>
<path d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"></path>
</svg> </a>
</li>
<li class="hdr__li hdr__login">
<a href="https://analytics.ispot.tv/dashboard" data-qa="nav_analytics">
<span class="sr-only">Login to iSpot.tv</span>
<svg class="hdr__icon" aria-hidden="true" focusable="false" data-prefix="far" data-icon="user" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
<path d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z" />
</svg> </a>
</li>
<li class="hdr__li hdr__cta">
<a class="hdr__btn btn btn-outline-primary" href="/demo" data-qa="nav_demo_button">Get A Demo</a>
</li>
<li class="hdr__li hdr__toggle hdr__mobile-only">
<a id="m-nav-open" class="js-nav-toggle" href="#" data-target="#navbarMainContent" aria-controls="navbarMainContent" aria-expanded="false" aria-label="Open Navigation">
<span class="sr-only">Open Navigation</span>
<svg class="hdr__icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
<path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
</svg> </a>
<a id="m-nav-close" class="js-nav-toggle" href="#" data-target="#navbarMainContent" aria-controls="navbarMainContent" aria-expanded="false" aria-label="Close Navigation">
<span class="sr-only">Close Navigation</span>
<svg class="hdr__icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512">
<path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path>
</svg> </a>
</li>
<li class="hdr__li hdr__primary">
<div class="sr-only">Navigation</div>
<ul class="hdr__ul">
<li id="nav-solutions" class="hdr__li">
<a href="#" id="navbarSolutions" data-ispot="accordian" role="button" aria-haspopup="true" aria-expanded="false" data-qa="nav_solutions">
Solutions
</a>
<div class="hdr__billboard">
<dl aria-labelledby="navbarSolutions">
<dt>
<div class="hdr__menu-title"><span class="text-gradient">Solutions</span></div>
<a class="hdr__dt-action" href="/solutions" data-qa="nav_solutions_solutions_overview">
Overview <svg width="17px" height="11px" viewBox="0 0 17 11" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<title>Arrow</title>
<g id="Stylesheet" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linejoin="round">
<g id="Demo-CTA-Copy-2" transform="translate(-93.000000, -39.000000)" stroke="#6EC122" stroke-width="2">
<g id="Group-2" transform="translate(94.000000, 40.000000)">
<polyline id="Path-3" points="8.38935361 0 15 4.99498416 8 9"></polyline>
<line x1="13.8598407" y1="4.75" x2="0" y2="4.5" id="Line"></line>
</g>
</g>
</g>
</svg> </a>
</dt>
<dd>
<ul class="hdr__ul hdr__ul-grid">
<li class="hdr__li hide-desktop">
<a class="hdr__sub-item" href="/solutions" data-qa="nav_solutions_solutions_overview">Overview</a>
</li>
<li class="hdr__li">
<a class="hdr__sub-item" href="/solutions/brands" data-qa="nav_solutions_brands">Brands</a>
</li>
<li class="hdr__li">
<a class="hdr__sub-item" href="/solutions/networks" data-qa="nav_solutions_networks">Networks</a>
</li>
<li class="hdr__li">
<a class="hdr__sub-item" href="/solutions/agencies" data-qa="nav_solutions_agencies">Agencies</a>
</li>
</ul>
</dd>
</dl>
</div>
<div class="hdr__billboard-background"></div>
</li>
<li id="nav-products" class="hdr__li">
<a href="#" id="navProducts" data-ispot="accordian" role="button" aria-haspopup="true" aria-expanded="false" data-qa="nav_products">
Products
</a>
<div class="hdr__billboard">
<dl aria-labelledby="navProducts">
<dt>
<div class="hdr__menu-title"><span class="text-gradient">Products</span></div>
<a class="hdr__dt-action" href="/products">
Overview <svg width="17px" height="11px" viewBox="0 0 17 11" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<title>Arrow</title>
<g id="Stylesheet" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linejoin="round">
<g id="Demo-CTA-Copy-2" transform="translate(-93.000000, -39.000000)" stroke="#6EC122" stroke-width="2">
<g id="Group-2" transform="translate(94.000000, 40.000000)">
<polyline id="Path-3" points="8.38935361 0 15 4.99498416 8 9"></polyline>
<line x1="13.8598407" y1="4.75" x2="0" y2="4.5" id="Line"></line>
</g>
</g>
</g>
</svg> </a>
</dt>
<dd>
<ul class="hdr__ul hdr__ul-grid">
<li class="hdr__li hide-desktop">
<a class="hdr__sub-item" href="/products" data-qa="nav_products_products_overview">Overview</a>
</li>
<li class="hdr__li">
<a class="hdr__sub-title hdr__sub-item" href="/products/creative-testing" data-qa="nav_products_creative_assessment">Creative Assessment</a>
<ul>
<li><a class="hdr__sub-item" href="/products/creative-testing/pre-market" data-qa="nav_products_pre_market_ad_testing">Pre-Market Ad Testing</a></li>
<li><a class="hdr__sub-item" href="/products/creative-testing/in-market" data-qa="nav_products_in_market_benchmarking">In-Market Benchmarking</a></li>
<li><a class="hdr__sub-item" href="/products/creative-testing/hispanic" data-qa="nav_products_hispanic_ad_testing">Hispanic Ad Testing</a></li>
</ul>
</li>
<li class="hdr__li">
<a class="hdr__sub-title hdr__sub-item" href="/products/measurement" data-qa="nav_products_measurement">Measurement</a>
<ul>
<li><a class="hdr__sub-item" href="/products/measurement/media" data-qa="nav_products_media_measurement">Media Measurement</a></li>
<li><a class="hdr__sub-item" href="/products/measurement/competitive" data-qa="nav_products_competitive_intelligence">Competitive Intelligence</a></li>
<li><a class="hdr__sub-item" href="/products/measurement/attention" data-qa="nav_products_attention_analytics">Attention Analytics</a></li>
<li><a class="hdr__sub-item" href="/products/measurement/unified" data-qa="nav_products_unified_measurement">Unified Measurement</a></li>
<li><a class="hdr__sub-item" href="/products/measurement/streaming-measurement" data-qa="nav_products_streaming_measurement">Streaming Measurement</a></li>
<li><a class="hdr__sub-item" href="/products/measurement/out-of-home" data-qa="nav_products_out_of_home_tv_measurement">Out of Home</a></li>
<li><a class="hdr__sub-item" href="/products/measurement#brand-guidelines" data-qa="nav_products_brand_guidelines">Brand Guidelines</a></li>
</ul>
</li>
<li class="hdr__li">
<a class="hdr__sub-title hdr__sub-item" href="/products/attribution" data-qa="nav_products_attribution">Attribution</a>
<ul>
<li><a class="hdr__sub-item" href="/products/attribution/conversions" data-qa="nav_products_tv_conversions">TV Conversions</a></li>
<li><a class="hdr__sub-item" href="/products/attribution/lift" data-qa="nav_products_incremental_lift">Incremental Lift</a></li>
<li><a class="hdr__sub-item" href="/products/attribution#unified-measurement" data-qa="nav_products_cross_channel_attribution">Cross-Channel Attribution</a></li>
</ul>
</li>
<li class="hdr__li">
<a class="hdr__sub-title hdr__sub-item" href="/products/analytics" data-qa="nav_products_advanced_analytics">Advanced Analytics</a>
<ul>
<li><a class="hdr__sub-item" href="/products/analytics/segments" data-qa="nav_products_segment_analytics">Segment Analytics</a></li>
<li><a class="hdr__sub-item" href="/products/analytics/exposure" data-qa="nav_products_exposure_level_ad_data">Exposure Level Ad Data</a></li>
<li><a class="hdr__sub-item" href="/products/analytics/custom" data-qa="nav_products_custom_analytics">Custom Analytics</a></li>
</ul>
</li>
</ul>
</dd>
</dl>
</div>
<div class="hdr__billboard-background"></div>
</li>
<li id="nav-ad-center" class="hdr__li">
<a href="#" id="navbarAdCenter" data-ispot="accordian" role="button" aria-haspopup="true" aria-expanded="false" data-qa="nav_ad_center">
Ad Center
</a>
<div class="hdr__billboard">
<dl aria-labelledby="navbarAdCenter">
<dt>
<div class="hdr__menu-title"><span class="text-gradient">Ad Center</span></div>
</dt>
<dd>
<ul class="hdr__ul hdr__ul-grid">
<li class="hdr__li">
<a class="hdr__sub-item" href="/ad/top-commercials" data-qa="nav_ad_center_top_ads">Top Ads</a>
</li>
<li class="hdr__li">
<a class="hdr__sub-item" href="/ad/top-spenders" data-qa="nav_ad_center_top_spenders">Top Spenders</a>
</li>
<li class="hdr__li">
<a class="hdr__sub-item" href="/browse" data-qa="nav_ad_center_browse_tv_ads">Browse TV Ads</a>
</li>
<li class="hdr__li">
<a class="hdr__sub-item" href="/events/super-bowl-commercials" data-qa="nav_super_bowl">Super Bowl 2024</a>
</li>
<li class="hdr__li ">
<a class="hdr__sub-item" href="/fifa-world-cup/2022" data-qa="nav_qatar_2022">Qatar 2022 FIFA World Cup</a>
</li>
<li class="hdr__li ">
<a class="hdr__sub-item" href="https://www2.ispot.tv/2023-NFL-TV-Ad-Insights-Center" data-qa="nav_ad_center_2023_24_nfl_season">2023-24 NFL Season</a>
</li>
<li class="hdr__li ">
<a class="hdr__sub-item" href="/olympics/2022-beijing-winter-olympics" data-qa="nav_ad_center_beijing_2022_olympics">Beijing 2022 Olympics</a>
</li>
</ul>
</dd>
</dl>
</div>
<div class="hdr__billboard-background"></div>
</li>
<li id="nav-resources" class="hdr__li">
<a href="#" id="navbarResources" data-ispot="accordian" role="button" aria-haspopup="true" aria-expanded="false" data-qa="nav_resources">
Resources
</a>
<div class="hdr__billboard">
<dl aria-labelledby="navbarResources">
<dt>
<div class="hdr__menu-title"><span class="text-gradient">Resources</span></div>
<a class="hdr__dt-action" href="/hub/resources/" data-qa="nav_resources_all">
See All <svg width="17px" height="11px" viewBox="0 0 17 11" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<title>Arrow</title>
<g id="Stylesheet" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linejoin="round">
<g id="Demo-CTA-Copy-2" transform="translate(-93.000000, -39.000000)" stroke="#6EC122" stroke-width="2">
<g id="Group-2" transform="translate(94.000000, 40.000000)">
<polyline id="Path-3" points="8.38935361 0 15 4.99498416 8 9"></polyline>
<line x1="13.8598407" y1="4.75" x2="0" y2="4.5" id="Line"></line>
</g>
</g>
</g>
</svg> </a>
</dt>
<dd>
<ul class="hdr__ul hdr__ul-grid">
<li class="hdr__li hide-desktop">
<a class="hdr__sub-item" href="/hub/resources/" data-qa="nav_resources_all">See All</a>
</li>
<li class="hdr__li">
<a class="hdr__sub-item" href="/tv-data-hub" data-qa="nav_tv_data_hub">TV Data Hub</a>
</li>
<li class="hdr__li">
<a class="hdr__sub-item" href="/hub/resources/free-reports/" data-qa="nav_resources_reports">Reports</a>
</li>
<li class="hdr__li">
<a class="hdr__sub-item" href="/hub/resources/case-studies/" data-qa="nav_resources_case_studies">Case Studies</a>
</li>
<li class="hdr__li">
<a class="hdr__sub-item" href="/hub/" data-qa="nav_resources_blog">Blog</a>
</li>
<li class="hdr__li">
<a class="hdr__sub-item" href="/hub/events/" data-qa="nav_resources_events">Events</a>
</li>
<li class="hdr__li">
<a class="hdr__sub-item" href="/hub/resources/playbooks/" data-qa="nav_resources_playbooks">Playbooks</a>
</li>
<li class="hdr__li">
<a class="hdr__sub-item" href="https://www.tvdisrupt.com/2023" data-qa="nav_resources_tv_disrupt">TV Disrupt 2023</a>
</li>
</ul>
</dd>
</dl>
</div>
<div class="hdr__billboard-background"></div>
</li>
<li id="nav-about-us" class="hdr__li">
<a href="#" id="navbarAbout" data-ispot="accordian" role="button" aria-haspopup="true" aria-expanded="false" data-qa="nav_about_us">
About
</a>
<div class="hdr__billboard">
<dl aria-labelledby="navbarAbout">
<dt>
<div class="hdr__menu-title"><span class="text-gradient">About</span></div>
</dt>
<dd>
<ul class="hdr__ul hdr__ul-grid">
<li class="hdr__li"><a class="hdr__sub-item" href="/about" data-qa="nav_about_us_about_ispot">About iSpot</a></li>
<li class="hdr__li"><a class="hdr__sub-item" href="/about/leadership" data-qa="nav_about_us_leadership">Leadership</a></li>
<li class="hdr__li"><a class="hdr__sub-item" href="/about/customers" data-qa="nav_about_us_customers">Customers</a></li>
<li class="hdr__li"><a class="hdr__sub-item" href="/about/partners" data-qa="nav_about_us_partners">Partners</a></li>
<li class="hdr__li"><a class="hdr__sub-item" href="/about/careers" data-qa="nav_about_us_careers">Careers</a></li>
<li class="hdr__li"><a class="hdr__sub-item" href="/hub/press/" data-qa="nav_press_center">Press Center</a></li>
<li class="hdr__li"><a class="hdr__sub-item" href="/contact-us" data-qa="nav_about_us_contact_us">Contact Us</a></li>
</ul>
</dd>
</dl>
</div>
<div class="hdr__billboard-background"></div>
</li>
<li id="nav-super-bowl" class="hdr__li">
<a href="#" id="navbarSuperBowl" data-ispot="accordian" role="button" aria-haspopup="true" aria-expanded="false" data-qa="nav_sb">
Super Bowl
</a>
<div class="hdr__billboard">
<dl aria-labelledby="navbarSuperBowl">
<dt>
<div class="hdr__menu-title"><span class="text-gradient">Super Bowl</span></div>
</dt>
<dd>
<ul class="hdr__ul hdr__ul-grid">
<li class="hdr__li"><a class="hdr__sub-item" href="https://on.ispot.tv/website-banner-ad-age-webinar" data-qa="nav_sb_post_game">Post-Game Webinar</a></li>
<li class="hdr__li"><a class="hdr__sub-item" href="/events/super-bowl-commercials" data-qa="nav_sb_ad_center">Super Bowl Ad Center</a></li>
<li class="hdr__li"><a class="hdr__sub-item" href="/hub/resources/free-reports/2022-nfl-regular-season-report/" data-qa="nav_nfl_reg_season_report">NFL Regular Season TV Ad Report</a></li>
<li class="hdr__li"><a class="hdr__sub-item" href="/hub/resources/free-reports/2023-nfl-playoffs-tv-ad-report/" data-qa="nav_nfl_playoff_ad_report">NFL Playoff TV Ad Report</a></li>
<li class="hdr__li"><a class="hdr__sub-item" href="/super-bowl-final-report" data-qa="nav_sb_ad_report">Super Bowl TV Ad Report</a></li>
<li class="hdr__li"><a class="hdr__sub-item" href="/super-bowl-vip" data-qa="nav_sb_vip_center">Super Bowl VIP Ad Center</a></li>
<li class="hdr__li"><a class="hdr__sub-item" href="/hub/resources/free-reports/super-bowl-lvii-creative-analysis/" data-qa="nav_sb_creative_analysis_report">Super Bowl Creative Analysis Report</a></li>
</ul>
</dd>
</dl>
</div>
<div class="hdr__billboard-background"></div>
</li>
<li class="hdr__li hdr__mobile-only">
<a href="/demo" data-qa="nav_demo_button">Get A Demo</a>
</li>
<li class="hdr__li hdr__mobile-only">
<a href="https://analytics.ispot.tv/dashboard" data-qa="nav_analytics_icon">Login</a>
</li>
</ul> </li>
</ul>
</nav>
</header>
<main>
<article id="post-16934" class="post-16934 free_reports type-free_reports status-publish has-post-thumbnail hentry">
<section class="jumbotron">
<div class="container">
<div class="text-center">
<ol class="breadcrumb mb-0 justify-content-center" itemscope itemtype="http://schema.org/BreadcrumbList">
<li class="breadcrumb-item" itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
<ol class="breadcrumb mb-0 justify-content-center d-block mt-0">
<li class="breadcrumb-item"><a href="/hub/resources/" itemprop="item"><span itemprop="name">Resources</span></a></li>
<li class="breadcrumb-item"><a href="/hub/resources/free-reports/" itemprop="item">Free Reports</a></li>
</ol>
<meta itemprop="position" content="1">
</li>
</ol>
<h1>Super Bowl LVII Creative Analysis</h1> </div>
<div class="jumbotron__get-demo">
<iframe class="free-report-form-frame" src="https://www2.ispot.tv/l/797423/2023-02-24/5bz3ng?pageSrc=https://www.ispot.tv" width="100%" height="500" type="text/html" frameborder="0" allowTransparency="true" style="border: 0"></iframe>
</div>
</div>
</section>
<section class="pt-5" id="one">
<div class="container">
<div class="row pb-3">
<div class="col-12 text-center">
<h2 class="mt-0">
Inside the Report
</h2>
</div>
</div>
<div class="row justify-content-center pb-5">
<div class="col-8 col-sm-6 col-md-6 col-lg-4 col-xl-2 pb-5">
<img src="https://hub-cdn.ispot.tv/blog/wp-content/uploads/2023/02/23173626/Creative-Analysis-Small-Cover.png" alt />
</div>
<div class="col-12 col-sm-6 col-md-6 col-lg-8 col-xl-10">
<div class="wp-block-media-text alignwide has-media-on-the-right is-stacked-on-mobile" style="grid-template-columns:auto 36%"><div class="wp-block-media-text__content">
<p>Super Bowl LVII has come and gone, but advertisers are still examining all of the Big Game commercials. A total of <strong>54 spots</strong> dropped on Super Bowl Sunday (airing whistle-to-whistle, excluding movie trailers and TV show promos). But which TV ads resonated with viewers most? And why?&nbsp;</p>
<p>This iSpot report provides a thorough analysis of Super Bowl LVII ad impact, and includes creative trends and insights from 14 years of Super Bowl ad measurement. The report also features deep dives into the five most likeable Super Bowl LVII spots (from brands like <strong>Jeep, Amazon </strong>and<strong> The Farmer’s Dog</strong>), with creative performance KPIs like brand recognition, emotional impact and purchase intent.&nbsp;</p>
<p class="has-text-color" style="color:#4ac500"><strong>Report takeaways include:</strong></p>
<ul>
<li>Like last year’s Big Game, most 2023 ads focused on light-hearted themes, while the number of heartfelt<strong> </strong>commercials continued to drop (to a <strong>10-year low</strong>).&nbsp;</li>
<li>Celebrities once again dominated Super Bowl spots, while appearances from female celebs in ads reached an all-time high (<strong>44% of Big Game ads</strong>).</li>
<li>Diversity was less prevalent than in recent years, with <strong>61% </strong>of spots including one or more BIPOC main actors (compared to <strong>82% in 2020</strong>).</li>
</ul>
</div><figure class="wp-block-media-text__media"><img decoding="async" width="607" height="1024" src="https://hub-cdn.ispot.tv/blog/wp-content/uploads/2023/02/23173858/Creative-Analysis-Preview-607x1024.png" alt class="wp-image-16966 size-full" srcset="https://hub-cdn.ispot.tv/blog/wp-content/uploads/2023/02/23173858/Creative-Analysis-Preview-607x1024.png 607w, https://hub-cdn.ispot.tv/blog/wp-content/uploads/2023/02/23173858/Creative-Analysis-Preview-178x300.png 178w, https://hub-cdn.ispot.tv/blog/wp-content/uploads/2023/02/23173858/Creative-Analysis-Preview-190x320.png 190w, https://hub-cdn.ispot.tv/blog/wp-content/uploads/2023/02/23173858/Creative-Analysis-Preview-768x1296.png 768w, https://hub-cdn.ispot.tv/blog/wp-content/uploads/2023/02/23173858/Creative-Analysis-Preview-910x1536.png 910w, https://hub-cdn.ispot.tv/blog/wp-content/uploads/2023/02/23173858/Creative-Analysis-Preview-1214x2048.png 1214w, https://hub-cdn.ispot.tv/blog/wp-content/uploads/2023/02/23173858/Creative-Analysis-Preview.png 1757w" sizes="(max-width: 607px) 100vw, 607px" /></figure></div>
</div>
</div>
</div>
</section>
</article>
</main>
<footer class="ftr">
<nav class="ftr__contact">
<div class="ftr__contact-copy">
<div class="ftr__contact-title"><span class="text-gradient">Contact Sales</span></div>
<div>Choose A Better Way To Measure TV ROAS</div>
</div>
<div class="ftr__contact-form">
<form name="getADemoForm" class="get-a-demo js-getADemoForm" action="https://www.ispot.tv/ajax/users/clearbitrisk" method="post">
<input type="hidden" id="csrfToken" class="csrfToken" name="csrfToken" />
<input name="email" type="email" placeholder="Enter Your Email" class="js-getADemoEmail" required>
<button class="btn btn-primary js-getADemoSubmitBtn" name="contact_submit">Get A Demo</button>
<span class="hidden error-text js-getADemoError"></span>
</form>
</div> </nav>
<nav class="ftr__links">
<dl>
<dt>Solutions</dt>
<dd>
<ul>
<li><a href="/solutions" data-qa="footer_nav_solutions_overview">Overview</a></li>
<li><a href="/solutions/brands" data-qa="footer_nav_solutions_brands">Brands</a></li>
<li><a href="/solutions/networks" data-qa="footer_nav_solutions_networks">Networks</a></li>
<li><a href="/solutions/agencies" data-qa="footer_nav_solutions_agency">Agency</a></li>
</ul>
</dd>
</dl> <dl>
<dt>Products</dt>
<dd>
<ul>
<li><a href="/products" data-qa="footer_nav_product_overview">Overview</a></li>
<li><a href="/products/creative-testing" data-qa="footer_nav_creative_assessment">Creative Assessment</a></li>
<li><a href="/products/measurement" data-qa="footer_nav_measurement">Measurement</a></li>
<li><a href="/products/attribution" data-qa="footer_nav_attribution">Attribution</a></li>
<li><a href="/products/analytics" data-qa="footer_nav_analytics">Advanced Analytics</a></li>

</ul>
</dd>
</dl> <dl>
<dt>Ad Center</dt>
<dd>
<ul>
<li><a href="/ad/top-commercials" data-qa="footer_nav_top_ads">Top Ads</a></li>
<li><a href="/ad/top-spenders" data-qa="footer_nav_top_spenders">Top Spenders</a></li>
<li><a href="/browse" data-qa="footer_nav_commercial_catalog">Browse TV Ads</a></li>
<li><a href="/events/super-bowl-commercials" data-qa="footer_nav_super_bowl">Super Bowl 2024</a></li>
<li><a href="/fifa-world-cup/2022" data-qa="footer_nav_qatar_2022">Qatar 2022 FIFA World Cup</a></li>
<li><a href="https://www2.ispot.tv/2023-NFL-TV-Ad-Insights-Center" data-qa="footer_nav_2023_24_nfl_season">2023-24 NFL Season</a></li>
<li><a href="/olympics/2022-beijing-winter-olympics" data-qa="footer_nav_beijing_2022_olympics">Beijing 2022 Olympics</a></li>
</ul>
</dd>
</dl> <dl>
<dt>Resources</dt>
<dd>
<ul>
<li><a href="/hub/resources/" data-qa="footer_nav_resources">All</a></li>
<li><a href="/tv-data-hub" data-qa="footer_nav_tv_data_hub">TV Data Hub</a></li>
<li><a href="/hub/resources/free-reports/" data-qa="footer_nav_reports">Reports</a></li>
<li><a href="/hub/resources/case-studies/" data-qa="footer_nav_case_studies">Case Studies</a></li>
<li><a href="/hub/" data-qa="footer_nav_blog">Blog</a></li>
<li><a href="/hub/events/" data-qa="footer_nav_events">Events</a></li>
<li><a href="/hub/resources/playbooks/" data-qa="footer_nav_playbooks">Playbooks</a></li>
<li><a href="/hub/tv-currency-measurement/" data-qa="footer_nav_tv_currency">TV Currency</a></li>
<li><a href="/hub/tv-advertising/" data-qa="footer_nav_tv_advertising">TV Advertising</a></li>
</ul>
</dd>
</dl> <dl>
<dt>About Us</dt>
<dd>
<ul>
<li><a href="/about" data-qa="footer_nav_about_us">About iSpot</a></li>
<li><a href="/about/customers" data-qa="footer_nav_customers">Customers</a></li>
<li><a href="/about/careers" data-qa="footer_nav_careers">Careers</a></li>
<li><a href="/hub/press/" data-qa="footer_nav_press_center">Press Center</a></li>
<li><a href="/contact-us" data-qa="footer_nav_contact_us">Contact Us</a></li>
<li><a href="/about/partners" data-qa="footer_nav_partners">Partners</a></li>
<li><a href="/demo" data-qa="footer_nav_demo">Get a Demo </a></li>
<li><a href="/pricing" data-qa="footer_nav_pricing">Get Pricing </a></li>
</ul>
</dd>
</dl>
<dl class="ftr__social">
<dt>Follow Us</dt>
<dd>
<ul>
<li>
<a href="https://www.facebook.com/ispottv" target="_blank" rel="noreferrer" data-qa="facebook_icon" aria-label="Facebook Profile">
<svg alt="Facebook Profile" aria-labelledby="facebookTitle facebookDesc" aria-hidden="true" focusable="false" data-icon="facebook" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
<title id="facebookTitle">Link to iSpot.tv Facebook Page</title>
<desc id="facebookDesc">Displays the Facebook logo and links to the iSpot.tv page</desc>
<path fill="currentColor" d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
</svg>
Facebook
</a>
</li>
<li>
<a href="https://twitter.com/ispottv" target="_blank" rel="noreferrer" data-qa="twitter_icon" aria-label="Twitter Profile">
<svg alt="Twitter Profile" aria-labelledby="twitterTitle twitterDesc" aria-hidden="true" focusable="false" data-icon="twitter" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
<title id="twitterTitle">Link to iSpot.tv Twitter Page</title>
<desc id="twitterDesc">Displays the Twitter logo and links to the iSpot.tv page</desc>
<path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
</svg>
Twitter
</a>
</li>
<li>
<a href="https://www.youtube.com/channel/UCeMuA4L9qnyKOsoFqkEDNJA" target="_blank" rel="noreferrer" data-qa="youtube_icon" aria-label="YouTube Profile">
<svg alt="YouTube Profile" aria-labelledby="youTubeTitle youTubeDesc" aria-hidden="true" focusable="false" data-icon="youtube" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
<title id="youTubeTitle">Link to iSpot.tv YouTube Page</title>
<desc id="youTubeDesc">Displays the YouTube logo and links to the iSpot.tv page</desc>
<path fill="currentColor" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
</svg>
YouTube
</a>
</li>
<li>
<a href="https://www.linkedin.com/company/ispottv/" target="_blank" rel="noreferrer" data-qa="linkedin_icon" aria-label="LinkedIn Profile">
<svg alt="LinkedIn Profile" aria-labelledby="linkedInTitle linkedInDesc" focusable="false" data-icon="linkedin-in" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
<title id="linkedInTitle">Link to iSpot.tv LinkedIn Page</title>
<desc id="linkedInDesc">Displays the LinkedIn logo and links to the iSpot.tv page</desc>
<path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
</svg>
LinkedIn
</a>
</li>
<li>
<a href="https://www.instagram.com/ispottv/" target="_blank" rel="noreferrer" data-qa="instagram_icon" aria-label="Instagram Profile">
<svg alt="Instagram Profile" aria-labelledby="instagramTitle instagramDesc" focusable="false" data-icon="instagram" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
<title id="instagramTitle">Link to iSpot.tv Instagram Page</title>
<desc id="instagramDesc">Displays the Instagram logo and links to the iSpot.tv page</desc>
<path fill="currentColor" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
</svg>
Instagram
</a>
</li>
</ul>
</dd>
</dl>
</nav>
<nav class="ftr__ccpa">
<div>
<strong>California Residents</strong>
exercise your rights under the California Consumer Privacy Act <a href="/privacy">here.</a>
</div>
<ul>
<li><a href="/privacy/opt-out">Do Not Sell My Personal Information</a></li>
</ul> </nav>
<nav class="ftr__terms">
<div>
<a href="/agreements/copyright" rel="nofollow" data-qa="footer_nav_copyright">© 2024 iSpot.tv, Inc.</a>
<a href="/agreements" rel="nofollow" data-qa="footer_nav_terms_and_privacy">Terms &amp; Privacy</a>
</div> </nav>
</footer>
</div>
<div id="cookie-consent">
<span>This site uses cookies to provide you with a great user experience.
By using iSpot.tv, you accept our <a href="/agreements/cookie">use of cookies</a>.</span>
<a id="cookie-consent-close-btn" href="#" rel="noreferrer">ACCEPT</a>
<a id="cookie-consent-close-ico" href="#" rel="noreferrer">×</a>
</div>
<script type="text/javascript">
        document.addEventListener("DOMContentLoaded", function(event) {

            // TODO: This belongs in a utils library.
            const createCookie = function (cname, cvalue, exdays) {
                let d = new Date();
                d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
                let expires = 'expires=' + d.toUTCString();
                let host = window.location.hostname;
                document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/;domain=.' + host + ';';
            };

            const cookieConsentAlert = document.getElementById("cookie-consent");

            document.getElementById("cookie-consent-close-ico").addEventListener("click", function(e) {
                e.preventDefault(); 
                createCookie('cookieconsent_status', 'dismiss', 365);
                cookieConsentAlert.classList.add('hidden');
                return;
            });

            document.getElementById("cookie-consent-close-btn").addEventListener("click", function(e) {
                e.preventDefault(); 
                createCookie('cookieconsent_status', 'dismiss', 365);
                cookieConsentAlert.classList.add('hidden');
                return;
            });

        document.getElementById("cookie-consent-close-btn").addEventListener("click", function(e) {
            e.preventDefault(); 
            createCookie('cookieconsent_status', 'dismiss', 365);
            cookieConsentAlert.classList.add('hidden');
            return;
        });

    });
    </script>
<div id="imgModal" class="image--modal modal js-image--modal fade" tabindex="-1" role="dialog">
<div class="modal-dialog modal-dialog-centered" role="document">
<div class="modal-content">
<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
<div class="modal-body p-0">
<img class="imgModalFrame js-image-modal--frame" loading="lazy" width="768px" height="486px">
</div>
</div>
</div>
</div>
<script type="text/javascript">
    // Global Util: Modal Behavior
    document.addEventListener("DOMContentLoaded", function() {

        const modalClosed = function() {
            if ("createEvent" in document) {
                const event = new CustomEvent("modal-closed");
                document.dispatchEvent(event);
            }
        };

        // Move all modals to just inside the body tag
        const modals = document.querySelectorAll(".modal");
        for (item of modals) {
            document.querySelector("body").appendChild(item);
        }

        // Open modal based on href target
        const modal = document.querySelectorAll("[data-image=modal]");
        for (item of modal) {
            item.addEventListener("click", function(e) {
                e.preventDefault();
                document.getElementById(e.currentTarget.getAttribute("data-target").substring(1)).classList.add("show");
            });
        }

        // Close on click of modal dismiss button
        const dismissModal = document.querySelectorAll("[data-dismiss=modal]");
        for (item of dismissModal) {
            item.addEventListener("click", function(e) {
                e.preventDefault();
                e.currentTarget.closest(".modal.show").classList.remove("show");
                modalClosed();
            });
            item.addEventListener("modal-closed", function(e) {
                console.log('OOF2');
            });
        }

        // Close on click of modal background
        const openModal = document.querySelectorAll(".modal");
        for (item of openModal) {
            item.addEventListener("click", function(e) {
                if (e.target.classList.contains("show")) {
                    e.target.classList.remove("show");
                    modalClosed();
                }
            });

        }

     });
</script>

<script type="text/javascript" src="https://www.ispot.tv/hub/wp-content/themes/ispot/js/skip-link-focus-fix.js" id="ispot-skip-link-focus-fix-js"></script>
<script type="text/javascript" src="https://www.ispot.tv/hub/wp-content/plugins/wp-featherlight/js/wpFeatherlight.pkgd.min.js?ver=1.2.0" id="wp-featherlight-js"></script>

<script type="text/javascript" crossorigin="anonymous" data-auto-add-css="false" integrity="sha384-OF9QwbqmlzSPpIxe2GYS8lkGFyaFfrgUPD2J3qj8zGVps17Y/x8EK2U8PEl6UrpH" src="https://pro.fontawesome.com/releases/v5.15.3/js/all.js"></script>
<script type="text/javascript" src="https://d3ds6z1w6yhmzj.cloudfront.net/dist/js/standard/index.js?v=9.3.35"></script>
<script type="text/javascript" src="https://d3ds6z1w6yhmzj.cloudfront.net/dist/js/global/index.js?v=9.3.35"></script>
<script>
    // Check that service workers are supported
    if ('serviceWorker' in navigator) {
        // Use the window load event to keep the page load performant
        window.addEventListener('load', () => {
            // navigator.serviceWorker.getRegistrations().then(function(registrations) {
            //     for(let registration of registrations) {
            //         registration.unregister()
            //     } 
            // });
            navigator.serviceWorker.register('/sw.js');
        });
    }
</script>
</body>
</html>
