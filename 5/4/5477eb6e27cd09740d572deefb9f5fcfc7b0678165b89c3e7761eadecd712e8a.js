/* prebid.js v7.17.0
Updated: 2022-09-26
Modules: userId, adagioBidAdapter, adyoulikeBidAdapter, appnexusBidAdapter, criteoBidAdapter, ixBidAdapter, aolBidAdapter, rubiconBidAdapter, sovrnBidAdapter, teadsBidAdapter, tripleliftBidAdapter, yahoosspBidAdapter, consentManagement, gdprEnforcement, gptPreAuction, currency, priceFloors, criteoIdSystem, id5IdSystem, sharedIdSystem, googleAnalyticsAdapter */
if(window.pbjs&&window.pbjs.libLoaded)try{window.pbjs.getConfig("debug")&&console.warn("Attempted to load a copy of Prebid.js that clashes with the existing 'pbjs' instance. Load aborted.")}catch(e){}else (function(){
!);
(self.pbjsChunk=self.pbjsChunk||[]).push([[8514],{53934:function(t,e,r){var n=r(4942),i=r(34614),o=r(64358),a=r(20265),s=r(3193),u=r(14699),c=r(55730),d=r(1582),p=r(15164),f=r(25102),l=r(4192),m=r(24679),h=r(35706),g=r(90154),y=r(78640),v=r(70059);function b(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function A(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?b(Object(r),!0).forEach((function(e){(0,n.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var I,T,D,O="adagio",w="Adagio:",x=[m.Mk,m.B5,m.pX],S="adagioScript",E=(0,p.df)({gvlid:617,bidderCode:O}),k={mimes:minduration:function(t){return(0,o.isInteger)(t)},maxduration:function(t){return(0,o.isInteger)(t)},protocols:w:function(t){return(0,o.isInteger)(t)},h:function(t){return(0,o.isInteger)(t)},startdelay:function(t){return(0,o.isInteger)(t)},placement:linearity:function(t){return-1!==[1,2].indexOf(t)},skip:function(t){return-1!==[0,1].indexOf(t)},skipmin:function(t){return(0,o.isInteger)(t)},skipafter:function(t){return(0,o.isInteger)(t)},sequence:function(t){return(0,o.isInteger)(t)},battr:maxextended:function(t){return(0,o.isInteger)(t)},minbitrate:function(t){return(0,o.isInteger)(t)},maxbitrate:function(t){return(0,o.isInteger)(t)},boxingallowed:playbackmethod:function(t){return Array.isArray(t)&&t.every((function(t){return-1!==[1,2,3,4,5,6].indexOf(t)}))},playbackend:function(t){return-1!==[1,2,3].indexOf(t)},delivery:pos:api:,U=(D={},{clearFeatures:clearExchangeData:getOrSetGlobalFeatures:prepareExchangeData:getExchangeData:function(){return D}});M={enqueue:getPageviewId:getDevice:getSite:getElementFromTopWindow:getRefererInfo:f.nH,adagioScriptFromLocalStorageCb:getCurrentWindow:j,canAccessTopWindow:C,isRendererPreferredFromPublisher:isNewSession:;on Z(t){if(!t)return"";if(!R()&&!C())return"";var e={x:0,y:0};if(R()){var r=(0,o.getWindowSelf)();if("function"!=typeof r.$sf.ext.geom)return(0,o.logWarn)(w,"Unable to compute from safeframe api."),"";var n=r.$sf.ext.geom();if(!n||!n.self)return(0,o.logWarn)(w,"Unable to compute from safeframe api. Missing `geom().self` property"),"";e.x=Math.round(n.t),e.y=Math.round(n.l)}else{if(!C())return"";var i,a=(0,o.getWindowTop)(),s=a.document;if(!0===(0,o.inIframe)()){var u=(0,o.getWindowSelf)(),c=u.document.getElementById(t);i=M.getElementFromTopWindow(c,u)}else i=a.document.getElementById(t);if(!i)return"";var d=i.getBoundingClientRect(),p=s.documentElement,f=s.body,l=s.clientTop||f.clientTop||0,m=s.clientLeft||f.clientLeft||0,h=a.pageYOffset||p.scrollTop||f.scrollTop,g=a.pageXOffset||p.scrollLeft||f.scrollLeft,y=a.getComputedStyle(i,null).display||"block";"none"===y&&(i.style=i.style||{},i.style.display="block",d=i.getBoundingClientRect(),i.style.display=y),e.x=Math.round(d.left+g-m),e.y=Math.round(d.top+h-l)}return"".concat(e.x,"x").concat(e.y)} _={code:O,gvlid:617,supportedMediaTypes:x,isBidRequestValid:buildRequests:interpretResponse:function(t,e){var r=[];try{var n=t.body;n&&(n.data&&M.enqueue({action:"ssp-data",ts:Date.now(),data:n.data}),n.bids&&n.bids.forEach((function(t){var n=(0,i.sE)(e.data.adUnits,(function(e){return e.bidId===t.requestId}));if(n){if(t.meta=(0,a.Z)(t,"meta",{}),t.meta.mediaType=t.mediaType,t.meta.advertiserDomains=Array.isArray(t.aDomain)&&t.aDomain.length?t.aDomain:[],t.mediaType===m.pX){var o=(0,a.Z)(n,"mediaTypes.video.context");!t.vastUrl&&t.vastXml&&(t.vastUrl="data:text/xml;charset=utf-8;base64,"+btoa(t.vastXml.replace(/\\"/g,'"'))),o===g.gZ&&(t.renderer=h.Th.install({id:t.requestId,adUnitCode:t.adUnitCode,url:t.urlRenderer||"https://script.4dex.io/outstream-player.js",config:A(A({},(0,a.Z)(n,"mediaTypes.video")),(0,a.Z)(t,"outstream",{}))}),t.renderer.setRender(P))}t.mediaType===m.B5&&B(t),t.site=n.params.site,t.placement=n.params.placement,t.pagetype=n.params.pagetype,t.category=n.params.category,t.subcategory=n.params.subcategory,t.environment=n.params.environment}r.push(t)})))}catch(t){(0,o.logError)(t)}return r},getUserSyncs:transformBidParams:;!),(0,u.dX)(_),window.pbjs.installedModules.push("adagioBidAdapter")},4192:44611:function(t,e){var r;Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t){null!==t&&this.fromHexString(t)}return t.prototype.toHexString=function(){if(this.s<0)return"-"+this.negate().toHexString();var t,e=!1,r="",n=this.t,i=this.DB-n*this.DB%4;if(n-- >0)for(i<this.DB&&(t=this[n]>>i)>0&&(e=!0,r=d(t));n>=0;)i<4?(t=(this[n]&(1<<i)-1)<<4-i,t|=this[--n]>>(i+=this.DB-4)):(t=this[n]>>(i-=4)&15,i<=0&&(i+=this.DB,--n)),t>0&&(e=!0),e&&(r+=d(t));return e?r:"0"},t.prototype.fromHexString=function(e){if(null!==e){this.t=0,this.s=0;for(var r=e.length,n=!1,i=0;--r>=0;){var o=c(e,r);o<0?"-"==e.charAt(r)&&(n=!0):(n=!1,0==i?this[this.t++]=o:i+4>this.DB?(this[this.t-1]|=(o&(1<<this.DB-i)-1)<<i,this[this.t++]=o>>this.DB-i):this[this.t-1]|=o<<i,(i+=4)>=this.DB&&(i-=this.DB))}0,this.clamp(),n&&t.ZERO.subTo(this,this)}},t.prototype.negate=function(){var e=i();return t.ZERO.subTo(this,e),e},t.prototype.abs=function(){return this.s<0?this.negate():this},t.prototype.mod=function(e){var r=i();return this.abs().divRemTo(e,null,r),this.s<0&&r.compareTo(t.ZERO)>0&&e.subTo(r,r),r},t.prototype.copyTo=function(t){for(var e=this.t-1;e>=0;--e)t[e]=this[e];t.t=this.t,t.s=this.s},t.prototype.lShiftTo=function(t,e){for(var r=t%this.DB,n=this.DB-r,i=(1<<n)-1,o=Math.floor(t/this.DB),a=this.s<<r&this.DM,s=this.t-1;s>=0;--s)e[s+o+1]=this[s]>>n|a,a=(this[s]&i)<<r;for(s=o-1;s>=0;--s)e[s]=0;e[o]=a,e.t=this.t+o+1,e.s=this.s,e.clamp()},t.prototype.invDigit=function(){if(this.t<1)return 0;var t=this[0];if(0==(1&t))return 0;var e=3&t;return(e=(e=(e=(e=e*(2-(15&t)*e)&15)*(2-(255&t)*e)&255)*(2-((65535&t)*e&65535))&65535)*(2-t*e%this.DV)%this.DV)>0?this.DV-e:-e},t.prototype.dlShiftTo=function(t,e){var r;for(r=this.t-1;r>=0;--r)e[r+t]=this[r];for(r=t-1;r>=0;--r)e[r]=0;e.t=this.t+t,e.s=this.s},t.prototype.squareTo=function(t){for(var e=this.abs(),r=t.t=2*e.t;--r>=0;)t[r]=0;for(r=0;r<e.t-1;++r){var n=e.am(r,e[r],t,2*r,0,1);(t[r+e.t]+=e.am(r+1,2*e[r],t,2*r+1,n,e.t-r-1))>=e.DV&&(t[r+e.t]-=e.DV,t[r+e.t+1]=1)}t.t>0&&(t[t.t-1]+=e.am(r,e[r],t,2*r,0,1)),t.s=0,t.clamp()},t.prototype.multiplyTo=function(e,r){var n=this.abs(),i=e.abs(),o=n.t;for(r.t=o+i.t;--o>=0;)r[o]=0;for(o=0;o<i.t;++o)r[o+n.t]=n.am(0,i[o],r,o,0,n.t);r.s=0,r.clamp(),this.s!=e.s&&t.ZERO.subTo(r,r)},t.prototype.divRemTo=function(e,r,n){var a=e.abs();if(!(a.t<=0)){var s=this.abs();if(s.t<a.t)return null!=r&&r.fromHexString("0"),void(null!=n&&this.copyTo(n));null==n&&(n=i());var u=i(),c=this.s,d=e.s,p=this.DB-o(a[a.t-1]);p>0?(a.lShiftTo(p,u),s.lShiftTo(p,n)):(a.copyTo(u),s.copyTo(n));var f=u.t,l=u[f-1];if(0!=l){var m=l*(1<<this.F1)+(f>1?u[f-2]>>this.F2:0),h=this.FV/m,g=(1<<this.F1)/m,y=1<<this.F2,v=n.t,b=v-f,A=null==r?i():r;for(u.dlShiftTo(b,A),n.compareTo(A)>=0&&(n[n.t++]=1,n.subTo(A,n)),t.ONE.dlShiftTo(f,A),A.subTo(u,u);u.t<f;)u[u.t++]=0;for(;--b>=0;){var I=n[--v]==l?this.DM:Math.floor(n[v]*h+(n[v-1]+y)*g);if((n[v]+=u.am(0,I,n,b,0,f))<I)for(u.dlShiftTo(b,A),n.subTo(A,n);n[v]<--I;)n.subTo(A,n)}null!=r&&(n.drShiftTo(f,r),c!=d&&t.ZERO.subTo(r,r)),n.t=f,n.clamp(),p>0&&n.rShiftTo(p,n),c<0&&t.ZERO.subTo(n,n)}}},t.prototype.rShiftTo=function(t,e){e.s=this.s;var r=Math.floor(t/this.DB);if(r>=this.t)e.t=0;else{var n=t%this.DB,i=this.DB-n,o=(1<<n)-1;e[0]=this[r]>>n;for(var a=r+1;a<this.t;++a)e[a-r-1]|=(this[a]&o)<<i,e[a-r]=this[a]>>n;n>0&&(e[this.t-r-1]|=(this.s&o)<<i),e.t=this.t-r,e.clamp()}},t.prototype.drShiftTo=function(t,e){for(var r=t;r<this.t;++r)e[r-t]=this[r];e.t=Math.max(this.t-t,0),e.s=this.s},t.prototype.subTo=function(t,e){for(var r=0,n=0,i=Math.min(t.t,this.t);r<i;)n+=this[r]-t[r],e[r++]=n&this.DM,n>>=this.DB;if(t.t<this.t){for(n-=t.s;r<this.t;)n+=this[r],e[r++]=n&this.DM,n>>=this.DB;n+=this.s}else{for(n+=this.s;r<t.t;)n-=t[r],e[r++]=n&this.DM,n>>=this.DB;n-=t.s}e.s=n<0?-1:0,n<-1?e[r++]=this.DV+n:n>0&&(e[r++]=n),e.t=r,e.clamp()},t.prototype.clamp=function(){for(var t=this.s&this.DM;this.t>0&&this[this.t-1]==t;)--this.t},t.prototype.modPowInt=function(t,e){var r;return r=t<256||e.isEven()?new p(e):new f(e),this.exp(t,r)},t.prototype.exp=function(e,r){if(e>4294967295||e<1)return t.ONE;var n=i(),a=i(),s=r.convert(this),u=o(e)-1;for(s.copyTo(n);--u>=0;)if(r.sqrTo(n,a),(e&1<<u)>0)r.mulTo(a,s,n);else{var c=n;n=a,a=c}return r.revert(n)},t.prototype.isEven=function(){return 0==(this.t>0?1&this[0]:this.s)},t.prototype.compareTo=function(t){var e=this.s-t.s;if(0!=e)return e;var r=this.t;if(0!=(e=r-t.t))return this.s<0?-e:e;for(;--r>=0;)if(0!=(e=this[r]-t[r]))return e;return 0},t.prototype.am1=function(t,e,r,n,i,o){for(;--o>=0;){var a=e*this[t++]+r[n]+i;i=Math.floor(a/67108864),r[n++]=67108863&a}return i},t.prototype.am2=function(t,e,r,n,i,o){for(var a=32767&e,s=e>>15;--o>=0;){var u=32767&this[t],c=this[t++]>>15,d=s*u+c*a;i=((u=a*u+((32767&d)<<15)+r[n]+(1073741823&i))>>>30)+(d>>>15)+s*c+(i>>>30),r[n++]=1073741823&u}return i},t.prototype.am3=function(t,e,r,n,i,o){for(var a=16383&e,s=e>>14;--o>=0;){var u=16383&this[t],c=this[t++]>>14,d=s*u+c*a;i=((u=a*u+((16383&d)<<14)+r[n]+i)>>28)+(d>>14)+s*c,r[n++]=268435455&u}return i},t}();function i(){return new n(null)}function o(t){var e,r=1;return 0!=(e=t>>>16)&&(t=e,r+=16),0!=(e=t>>8)&&(t=e,r+=8),0!=(e=t>>4)&&(t=e,r+=4),0!=(e=t>>2)&&(t=e,r+=2),0!=(e=t>>1)&&(t=e,r+=1),r}e.BigInteger=n,e.nbi=i,e.nbits=o;var a,s,u=[];for(a="0".charCodeAt(0),s=0;s<=9;++s)u[a++]=s;for(a="a".charCodeAt(0),s=10;s<36;++s)u[a++]=s;for(a="A".charCodeAt(0),s=10;s<36;++s)u[a++]=s;function c(t,e){var r=u[t.charCodeAt(e)];return null==r?-1:r}e.intAt=c;function d(t){return"0123456789abcdefghijklmnopqrstuvwxyz".charAt(t)}e.int2char=d;e.b64toHex=function(t){var e,r="",n=0,i=0;for(e=0;e<t.length&&"="!=t.charAt(e);++e){var o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(t.charAt(e));o<0||(0==n?(r+=d(o>>2),i=3&o,n=1):1==n?(r+=d(i<<2|o>>4),i=15&o,n=2):2==n?(r+=d(i),r+=d(o>>2),i=3&o,n=3):(r+=d(i<<2|o>>4),r+=d(15&o),n=0))}return 1==n&&(r+=d(i<<2)),r},e.removeExtraSymbols=function(t){return t.replace(/^1f+00/,"").replace("3031300d060960864801650304020105000420","")};var p=function(){function t(t){this.m=t}return t.prototype.convert=function(t){return t.s<0||t.compareTo(this.m)>=0?t.mod(this.m):t},t.prototype.revert=function(t){return t},t.prototype.reduce=function(t){t.divRemTo(this.m,null,t)},t.prototype.mulTo=function(t,e,r){t.multiplyTo(e,r),this.reduce(r)},t.prototype.sqrTo=function(t,e){t.squareTo(e),this.reduce(e)},t}(),f=function(){function t(t){this.m=t,this.mp=t.invDigit(),this.mpl=32767&this.mp,this.mph=this.mp>>15,this.um=(1<<t.DB-15)-1,this.mt2=2*t.t}return t.prototype.convert=function(t){var e=i();return t.abs().dlShiftTo(this.m.t,e),e.divRemTo(this.m,null,e),t.s<0&&e.compareTo(n.ZERO)>0&&this.m.subTo(e,e),e},t.prototype.revert=function(t){var e=i();return t.copyTo(e),this.reduce(e),e},t.prototype.reduce=function(t){for(;t.t<=this.mt2;)t[t.t++]=0;for(var e=0;e<this.m.t;++e){var r=32767&t[e],n=r*this.mpl+((r*this.mph+(t[e]>>15)*this.mpl&this.um)<<15)&t.DM;for(t[r=e+this.m.t]+=this.m.am(0,n,t,e,0,this.m.t);t[r]>=t.DV;)t[r]-=t.DV,t[++r]++}t.clamp(),t.drShiftTo(this.m.t,t),t.compareTo(this.m)>=0&&t.subTo(this.m,t)},t.prototype.mulTo=function(t,e,r){t.multiplyTo(e,r),this.reduce(r)},t.prototype.sqrTo=function(t,e){t.squareTo(e),this.reduce(e)},t}();function l(t){var e=i();return e.fromHexString(t.toString()),e}e.nbv=l,n.ZERO=l(0),n.ONE=l(1),"Microsoft Internet Explorer"==navigator.appName?(n.prototype.am=n.prototype.am2,r=30):"Netscape"!=navigator.appName?(n.prototype.am=n.prototype.am1,r=26):(n.prototype.am=n.prototype.am3,r=28),n.prototype.DB=r,n.prototype.DM=(1<<r)-1,n.prototype.DV=1<<r;n.prototype.FV=Math.pow(2,52),n.prototype.F1=52-r,n.prototype.F2=2*r-52},94950:function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(){}return t.hash=function(e){e=t.utf8Encode(e||"");for(var r=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],n=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],i=(e+=String.fromCharCode(128)).length/4+2,o=Math.ceil(i/16),a=new Array(o),s=0;s<o;s++){a[s]=new Array(16);for(var u=0;u<16;u++)a[s][u]=e.charCodeAt(64*s+4*u)<<24|e.charCodeAt(64*s+4*u+1)<<16|e.charCodeAt(64*s+4*u+2)<<8|e.charCodeAt(64*s+4*u+3)<<0}var c=8*(e.length-1)/Math.pow(2,32),d=8*(e.length-1)>>>0;a[o-1][14]=Math.floor(c),a[o-1][15]=d;for(s=0;s<o;s++){for(var p=new Array(64),f=0;f<16;f++)p[f]=a[s][f];for(f=16;f<64;f++)p[f]=t.q1(p[f-2])+p[f-7]+t.q0(p[f-15])+p[f-16]>>>0;var l=n[0],m=n[1],h=n[2],g=n[3],y=n[4],v=n[5],b=n[6],A=n[7];for(f=0;f<64;f++){var I=A+t.z1(y)+t.Ch(y,v,b)+r[f]+p[f],T=t.z0(l)+t.Maj(l,m,h);A=b,b=v,v=y,y=g+I>>>0,g=h,h=m,m=l,l=I+T>>>0}n[0]=n[0]+l>>>0,n[1]=n[1]+m>>>0,n[2]=n[2]+h>>>0,n[3]=n[3]+g>>>0,n[4]=n[4]+y>>>0,n[5]=n[5]+v>>>0,n[6]=n[6]+b>>>0,n[7]=n[7]+A>>>0}var D=new Array(n.length);for(A=0;A<n.length;A++)D[A]=("00000000"+n[A].toString(16)).slice(-8);return D.join("")},t.utf8Encode=function(t){try{return(new TextEncoder).encode(t).reduce((function(t,e){return t+String.fromCharCode(e)}),"")}catch(e){return unescape(encodeURIComponent(t))}},t.ROTR=function(t,e){return e>>>t|e<<32-t},t.z0=function(e){return t.ROTR(2,e)^t.ROTR(13,e)^t.ROTR(22,e)},t.z1=function(e){return t.ROTR(6,e)^t.ROTR(11,e)^t.ROTR(25,e)},t.q0=function(e){return t.ROTR(7,e)^t.ROTR(18,e)^e>>>3},t.q1=function(e){return t.ROTR(17,e)^t.ROTR(19,e)^e>>>10},t.Ch=function(t,e,r){return t&e^~t&r},t.Maj=function(t,e,r){return t&e^t&r^e&r},t}();e.Sha256=r},1582:function(t,e,r){var n=r(44611),i=r(94950);e.T=function(t,e,r,o){var a=new n.BigInteger(n.b64toHex(e)),s=new n.BigInteger(n.b64toHex(r)),u=a.modPowInt(o,s);return n.removeExtraSymbols(u.toHexString())===i.Sha256.hash(t)}}},function(t){var e;e=53934,t(t.s=e)}]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[7343],{67579:function(e,t,r){var i=r(71002),n=r(20265),a=r(64358),o=r(14699),c=r(4192),s=r(34614),d=r(24679),u=r(70059),p="USD",l={image:{required:!0},title:{required:!0},sponsoredBy:{required:!0},clickUrl:{required:!0},body:{required:!1},icon:{required:!1},cta:{required:!1}},f={code:"adyoulike",gvlid:259,supportedMediaTypes:[d.Mk,d.B5,d.pX],aliases:["ayl"],isBidRequestValid:buildRequests:function(e,t){e=(0,u.lY)(e);var r=!1,i={Version:"1.0",Bids:e.reduce((,{}),PageRefreshed:m()};t.gdprConsent&&(i.gdprConsent={consentString:t.gdprConsent.consentString,consentRequired:"boolean"==typeof t.gdprConsent.gdprApplies?t.gdprConsent.gdprApplies:null}),t.uspConsent&&(i.uspConsent=t.uspConsent),t.ortb2&&(i.ortb2=t.ortb2),(0,n.Z)(t,"userId")&&(i.userId=(0,c.HQ)(t.userId));var a=JSON.stringify(i);return{method:"POST",url:v(e,t,r),data:a,options:{withCredentials:!0}}},interpretResponse:;nction y(e){var t,r={};if(e){var i,n=e.refererInfo;null!=n&&n.location&&(r.RefererUrl=encodeURIComponent(n.location),n.numIframes>0&&(r.SafeFrame=!0));var a=null===(i=e.ortb2)||void 0===i?void 0:i.site;a&&(r.PageUrl=encodeURIComponent(a.page),r.PageReferrer=encodeURIComponent(a.ref||(null==n?void 0:n.location)))}var o=null==e||null===(t=e.refererInfo)||void 0===t?void 0:t.canonicalUrl;return o&&(r.CanonicalUrl=encodeURIComponent(o)),r}dX)(f),window.pbjs.installedModules.push("adyoulikeBidAdapter")},4192:function(e,t,r){r.d(t,{HQ:function(){return c},Pv:function(){return s},UR:function(){return a}});var i=r(64358),n=r(20265),a={trustpid:{source:"trustpid.com",atype:1,getValue:function(e){return e}},intentIqId:{source:"intentiq.com",atype:1},naveggId:{source:"navegg.com",atype:1},justId:{source:"justtag.com",atype:1},pubcid:{source:"pubcid.org",atype:1},tdid:{source:"adserver.org",atype:1,getUidExt:function(){return{rtiPartner:"TDID"}}},id5id:{getValue:function(e){return e.uid},source:"id5-sync.com",atype:1,getUidExt:function(e){if(e.ext)return e.ext}},ftrackId:{source:"flashtalking.com",atype:1,getValue:function(e){var t="";return e.DeviceID&&(t=e.DeviceID.join(",")),t},getUidExt:function(e){return"DeviceID"}},parrableId:{source:"parrable.com",atype:1,getValue:function(e){return e.eid?e.eid:e.ccpaOptout?"":null},getUidExt:function(e){var t=(0,i.pick)(e,["ibaOptout","ccpaOptout"]);if(Object.keys(t).length)return t}},idl_env:{source:"liveramp.com",atype:3},lipb:{getValue:function(e){return e.lipbid},source:"liveintent.com",atype:3,getEidExt:function(e){if(Array.isArray(e.segments)&&e.segments.length)return{segments:e.segments}}},britepoolid:{source:"britepool.com",atype:3},dmdId:{source:"hcn.health",atype:3},lotamePanoramaId:{source:"crwdcntrl.net",atype:1},criteoId:{source:"criteo.com",atype:1},merkleId:{atype:3,getSource:function(e){var t;return null!=e&&null!==(t=e.ext)&&void 0!==t&&t.ssp?"".concat(e.ext.ssp,".merkleinc.com"):"merkleinc.com"},getValue:function(e){return e.id},getUidExt:function(e){return e.keyID?{keyID:e.keyID}:e.ext?e.ext:void 0}},netId:{source:"netid.de",atype:1},IDP:{source:"zeotap.com",atype:1},hadronId:{source:"audigent.com",atype:1},quantcastId:{source:"quantcast.com",atype:1},idx:{source:"idx.lat",atype:1},connectid:{source:"verizonmedia.com",atype:3},fabrickId:{source:"neustar.biz",atype:1},mwOpenLinkId:{source:"mediawallahscript.com",atype:1},tapadId:{source:"tapad.com",atype:1},novatiq:{getValue:function(e){return e.snowflake},source:"novatiq.com",atype:1},uid2:{source:"uidapi.com",atype:3,getValue:function(e){return e.id}},deepintentId:{source:"deepintent.com",atype:3},admixerId:{source:"admixer.net",atype:3},adtelligentId:{source:"adtelligent.com",atype:3},amxId:{source:"amxrtb.com",atype:1},publinkId:{source:"epsilon.com",atype:3},kpuid:{source:"kpuid.com",atype:3},imppid:{source:"ppid.intimatemerger.com",atype:1},imuid:{source:"intimatemerger.com",atype:1},connectId:{source:"yahoo.com",atype:3},qid:{source:"adquery.io",atype:1},dacId:{source:"impact-ad.jp",atype:1},"33acrossId":{source:"33across.com",atype:1,getValue:function(e){return e.envelope}},tncid:{source:"thenewco.it",atype:3},gravitompId:{source:"gravito.net",atype:1},cpexId:{source:"czechadid.cz",atype:1},oneKeyData:{getValue:function(e){if(e&&Array.isArray(e.identifiers)&&e.identifiers[0])return e.identifiers[0].value},source:"paf",atype:1,getEidExt:function(e){if(e&&e.preferences)return{preferences:e.preferences}},getUidExt:function(e){if(e&&Array.isArray(e.identifiers)&&e.identifiers[0]){var t=e.identifiers[0];return{version:t.version,type:t.type,source:t.source}}}}};function o(e,t){var r=a[t];if(r&&e){var n={};n.source=(0,i.isFn)(r.getSource)?r.getSource(e):r.source;var o=(0,i.isFn)(r.getValue)?r.getValue(e):e;if((0,i.isStr)(o)){var c={id:o,atype:r.atype};if((0,i.isFn)(r.getUidExt)){var s=r.getUidExt(e);s&&(c.ext=s)}if(n.uids=[c],(0,i.isFn)(r.getEidExt)){var d=r.getEidExt(e);d&&(n.ext=d)}return n}}return null}function c(e){var t=[],r=function(r){if(e.hasOwnProperty(r))if("pubProvidedId"===r)t=t.concat(e.pubProvidedId);else if("ftrackId"===r){var i={atype:1,id:(e.ftrackId.DeviceID||[]).join("|"),ext:{}};for(var n in e.ftrackId)i.ext[n]=(e.ftrackId[n]||[]).join("|");t.push(i)}else if(Array.isArray(e[r]))e[r].forEach((function(e,i,n){var a=o(e,r);a&&t.push(a)}));else{var a=o(e[r],r);a&&t.push(a)}};for(var i in e)r(i);return t}function s(e){var t=[];return e.filter((function(e){return(0,i.isPlainObject)(e.idObj)&&Object.keys(e.idObj).length})).forEach((function(e){Object.keys(e.idObj).forEach((function(r){(0,n.Z)(e,"config.bidders")&&Array.isArray(e.config.bidders)&&(0,n.Z)(a,r+".source")&&t.push({source:a[r].source,bidders:e.config.bidders})}))})),t}}},function(e){var t;t=67579,e(e.s=t)}]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[7254],{70116:function(e,r,t){var n,i,a,s=t(71002),o=t(30168),c=t(64358),d=t(96475),u=t(14699),p=t(24679),l="aol",m="verizon",f="onemobile",h="onedisplay",b={GET:"display-get"},v={GET:"mobile-get",POST:"mobile-post"},g={TAG:"iframe",TYPE:"iframe"},y={TAG:"img",TYPE:"image"},O=["adserver.org","criteo.com","id5-sync.com","intentiq.com","liveintent.com","quantcast.com","verizonmedia.com","liveramp.com","yahoo.com"],P=R(n||(n=(0,o.Z)(["","/pubapi/3.0/","/","/","/","/ADTECH;v=2;cmd=bid;cors=yes;alias=",";misc=",";",""])),"host","network","placement","pageid","sizeid","alias","misc","dynamicParams"),E=R(i||(i=(0,o.Z)(["","/bidRequest?"])),"host"),T=R(a||(a=(0,o.Z)(["dcn=","&pos=","&cmd=bid",""])),"dcn","pos","dynamicParams"),C={us:"adserver-us.adtech.advertising.com",eu:"adserver-eu.adtech.advertising.com",as:"adserver-as.adtech.advertising.com"},x="https",I=1;{code:l,gvlid:25,aliases:[f,h,m],supportedMediaTypes:[p.Mk],isBidRequestValid:buildRequests:interpretResponse:getUserSyncs:formatBidRequest:buildMarketplaceUrl:buildOneMobileGetUrl:buildOneMobileBaseUrl:applyProtocol:formatMarketplaceDynamicParams:formatOneMobileDynamicParams:buildOpenRtbRequestData:isEUConsentRequired:formatKeyValues:formatConsentData:parsePixelItems:_parseBidResponse:isOneMobileBidder:w,isSecureProtocol:;(0,u.dX)(q),window.pbjs.installedModules.push("aolBidAdapter")},30168:,function(e){var r;r=70116,e(e.s=r)}]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[3864],{46319:17673:function(e,r,a){a.d(r,{h:function(){return t}});var n=a(20265);function t(e){return null==e||!e.gdprApplies||!0===(0,n.Z)(e,"vendorData.purpose.consents.1")}}},function(e){var r;r=46319,e(e.s=r)}]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[1266],{55630:,function(n){var e;e=55630,n(n.s=e)}]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[6406],{60241:17673:function(t,e,r){r.d(e,{h:function(){return o}});var i=r(20265);function o(t){return null==t||!t.gdprApplies||!0===(0,i.Z)(t,"vendorData.purpose.consents.1")}},44611:94950:1582:,function(t){var e;e=60241,t(t.s=e)}]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[9073],{7713:,function(e){var n;n=7713,e(e.s=n)}]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[9226],{72663:,function(e){var n;n=72663,e(e.s=n)}]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[7083],{31498:,function(e){var n;n=31498,e(e.s=n)}]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[7690],{4311:function(e,o,n){var i=n(71002),t=n(64358),s=n(52021),a=n(5644),r=n(9528),l=a.FP.BID_REQUESTED,d=a.FP.BID_TIMEOUT,u=a.FP.BID_RESPONSE,f=a.FP.BID_WON,c={nonInteraction:!0},b=[],v=null,p=!0,m="Prebid.js Bids",w=0,g=!1,y=null,D=null,h=!0,F=!1,T={};eAnalytics=T.getTrackerSend=function(){return D},T.getCpmDistribution=$,r.ZP.registerAnalyticsAdapter({adapter:T,code:"ga"});window.pbjs.installedModules.push("googleAnalyticsAdapter")}},function(e){var o;o=4311,e(e.s=o)}]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[5296],{96787:,function(t){var e;e=96787,t(t.s=e)}]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[1618],{10272:,function(e){var t;t=10272,e(e.s=t)}]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[155],{33390:,function(e){var r;r=33390,e(e.s=r)}]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[9060],{9171:44925:,);
(self.pbjsChunk=self.pbjsChunk||[]).push([[2229],{40060:,function(e){var r;r=40060,e(e.s=r)}]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[2972],{54834:,function(o){var e;e=54834,o(o.s=e)}]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[7771],{30272:4192:function(e,r,t){t.d(r,{HQ:function(){return u},Pv:function(){return c},UR:function(){return o}});var n=t(64358),i=t(20265),o={trustpid:{source:"trustpid.com",atype:1,getValue:function(e){return e}},intentIqId:{source:"intentiq.com",atype:1},naveggId:{source:"navegg.com",atype:1},justId:{source:"justtag.com",atype:1},pubcid:{source:"pubcid.org",atype:1},tdid:{source:"adserver.org",atype:1,getUidExt:function(){return{rtiPartner:"TDID"}}},id5id:{getValue:function(e){return e.uid},source:"id5-sync.com",atype:1,getUidExt:function(e){if(e.ext)return e.ext}},ftrackId:{source:"flashtalking.com",atype:1,getValue:function(e){var r="";return e.DeviceID&&(r=e.DeviceID.join(",")),r},getUidExt:function(e){return"DeviceID"}},parrableId:{source:"parrable.com",atype:1,getValue:function(e){return e.eid?e.eid:e.ccpaOptout?"":null},getUidExt:function(e){var r=(0,n.pick)(e,["ibaOptout","ccpaOptout"]);if(Object.keys(r).length)return r}},idl_env:{source:"liveramp.com",atype:3},lipb:{getValue:function(e){return e.lipbid},source:"liveintent.com",atype:3,getEidExt:function(e){if(Array.isArray(e.segments)&&e.segments.length)return{segments:e.segments}}},britepoolid:{source:"britepool.com",atype:3},dmdId:{source:"hcn.health",atype:3},lotamePanoramaId:{source:"crwdcntrl.net",atype:1},criteoId:{source:"criteo.com",atype:1},merkleId:{atype:3,getSource:function(e){var r;return null!=e&&null!==(r=e.ext)&&void 0!==r&&r.ssp?"".concat(e.ext.ssp,".merkleinc.com"):"merkleinc.com"},getValue:function(e){return e.id},getUidExt:function(e){return e.keyID?{keyID:e.keyID}:e.ext?e.ext:void 0}},netId:{source:"netid.de",atype:1},IDP:{source:"zeotap.com",atype:1},hadronId:{source:"audigent.com",atype:1},quantcastId:{source:"quantcast.com",atype:1},idx:{source:"idx.lat",atype:1},connectid:{source:"verizonmedia.com",atype:3},fabrickId:{source:"neustar.biz",atype:1},mwOpenLinkId:{source:"mediawallahscript.com",atype:1},tapadId:{source:"tapad.com",atype:1},novatiq:{getValue:function(e){return e.snowflake},source:"novatiq.com",atype:1},uid2:{source:"uidapi.com",atype:3,getValue:function(e){return e.id}},deepintentId:{source:"deepintent.com",atype:3},admixerId:{source:"admixer.net",atype:3},adtelligentId:{source:"adtelligent.com",atype:3},amxId:{source:"amxrtb.com",atype:1},publinkId:{source:"epsilon.com",atype:3},kpuid:{source:"kpuid.com",atype:3},imppid:{source:"ppid.intimatemerger.com",atype:1},imuid:{source:"intimatemerger.com",atype:1},connectId:{source:"yahoo.com",atype:3},qid:{source:"adquery.io",atype:1},dacId:{source:"impact-ad.jp",atype:1},"33acrossId":{source:"33across.com",atype:1,getValue:function(e){return e.envelope}},tncid:{source:"thenewco.it",atype:3},gravitompId:{source:"gravito.net",atype:1},cpexId:{source:"czechadid.cz",atype:1},oneKeyData:{getValue:function(e){if(e&&Array.isArray(e.identifiers)&&e.identifiers[0])return e.identifiers[0].value},source:"paf",atype:1,getEidExt:function(e){if(e&&e.preferences)return{preferences:e.preferences}},getUidExt:function(e){if(e&&Array.isArray(e.identifiers)&&e.identifiers[0]){var r=e.identifiers[0];return{version:r.version,type:r.type,source:r.source}}}}};function a(e,r){var t=o[r];if(t&&e){var i={};i.source=(0,n.isFn)(t.getSource)?t.getSource(e):t.source;var a=(0,n.isFn)(t.getValue)?t.getValue(e):e;if((0,n.isStr)(a)){var u={id:a,atype:t.atype};if((0,n.isFn)(t.getUidExt)){var c=t.getUidExt(e);c&&(u.ext=c)}if(i.uids=[u],(0,n.isFn)(t.getEidExt)){var s=t.getEidExt(e);s&&(i.ext=s)}return i}}return null}function u(e){var r=[],t=function(t){if(e.hasOwnProperty(t))if("pubProvidedId"===t)r=r.concat(e.pubProvidedId);else if("ftrackId"===t){var n={atype:1,id:(e.ftrackId.DeviceID||[]).join("|"),ext:{}};for(var i in e.ftrackId)n.ext[i]=(e.ftrackId[i]||[]).join("|");r.push(n)}else if(Array.isArray(e[t]))e[t].forEach((function(e,n,i){var o=a(e,t);o&&r.push(o)}));else{var o=a(e[t],t);o&&r.push(o)}};for(var n in e)t(n);return r}function c(e){var r=[];return e.filter((function(e){return(0,n.isPlainObject)(e.idObj)&&Object.keys(e.idObj).length})).forEach((function(e){Object.keys(e.idObj).forEach((function(t){(0,i.Z)(e,"config.bidders")&&Array.isArray(e.config.bidders)&&(0,i.Z)(o,t+".source")&&r.push({source:o[t].source,bidders:e.config.bidders})}))})),r}}},function(e){var r;r=30272,e(e.s=r)}]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[8029],{76401:,function(e){var t;t=76401,e(e.s=t)}]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[2599],{70789:,function(e){var r;r=70789,e(e.s=r)}]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[9215],{4192:function(e,n,t){t.d(n,{HQ:function(){return c},Pv:function(){return u},UR:function(){return i}});var r=t(64358),o=t(20265),i={trustpid:{source:"trustpid.com",atype:1,getValue:function(e){return e}},intentIqId:{source:"intentiq.com",atype:1},naveggId:{source:"navegg.com",atype:1},justId:{source:"justtag.com",atype:1},pubcid:{source:"pubcid.org",atype:1},tdid:{source:"adserver.org",atype:1,getUidExt:function(){return{rtiPartner:"TDID"}}},id5id:{getValue:function(e){return e.uid},source:"id5-sync.com",atype:1,getUidExt:,ftrackId:{source:"flashtalking.com",atype:1,getValue:getUidExt:,parrableId:{source:"parrable.com",atype:1,getValue:getUidExt:,idl_env:{source:"liveramp.com",atype:3},lipb:{getValue:function(e){return e.lipbid},source:"liveintent.com",atype:3,getEidExt:,britepoolid:{source:"britepool.com",atype:3},dmdId:{source:"hcn.health",atype:3},lotamePanoramaId:{source:"crwdcntrl.net",atype:1},criteoId:{source:"criteo.com",atype:1},merkleId:{atype:3,getSource:getValue:function(e){return e.id},getUidExt:,netId:{source:"netid.de",atype:1},IDP:{source:"zeotap.com",atype:1},hadronId:{source:"audigent.com",atype:1},quantcastId:{source:"quantcast.com",atype:1},idx:{source:"idx.lat",atype:1},connectid:{source:"verizonmedia.com",atype:3},fabrickId:{source:"neustar.biz",atype:1},mwOpenLinkId:{source:"mediawallahscript.com",atype:1},tapadId:{source:"tapad.com",atype:1},novatiq:{getValue:function(e){return e.snowflake},source:"novatiq.com",atype:1},uid2:{source:"uidapi.com",atype:3,getValue:function(e){return e.id}},deepintentId:{source:"deepintent.com",atype:3},admixerId:{source:"admixer.net",atype:3},adtelligentId:{source:"adtelligent.com",atype:3},amxId:{source:"amxrtb.com",atype:1},publinkId:{source:"epsilon.com",atype:3},kpuid:{source:"kpuid.com",atype:3},imppid:{source:"ppid.intimatemerger.com",atype:1},imuid:{source:"intimatemerger.com",atype:1},connectId:{source:"yahoo.com",atype:3},qid:{source:"adquery.io",atype:1},dacId:{source:"impact-ad.jp",atype:1},"33acrossId":{source:"33across.com",atype:1,getValue:function(e){return e.envelope}},tncid:{source:"thenewco.it",atype:3},gravitompId:{source:"gravito.net",atype:1},cpexId:{source:"czechadid.cz",atype:1},oneKeyData:{getValue:source:"paf",atype:1,getEidExt:getUidExt:};4727:7563:17673:,function(e){var n;n=34727,e(e.s=n)}]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[215],{27501:function(e,r,i){var t=i(4942),a=i(14699),n=i(24679),s=i(64358),o=i(20265),d=i(3193),p=i(35706),c=i(17673);function m(e,r){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),i.push.apply(i,t)}return i}var u="7.17.0",v="USD",l=["admixer.net","adserver.org","adtelligent.com","akamai.com","amxrtb.com","audigent.com","britepool.com","criteo.com","crwdcntrl.net","deepintent.com","hcn.health","id5-sync.com","idx.lat","intentiq.com","intimatemerger.com","liveintent.com","liveramp.com","mediawallahscript.com","merkleinc.com","netid.de","neustar.biz","nextroll.com","novatiq.com","parrable.com","pubcid.org","quantcast.com","quantcast.com","tapad.com","uidapi.com","verizonmedia.com","yahoo.com","zeotap.com"];e,r){if(e){var i={id:(0,s.generateUUID)(),cur:[x(e).currency||(0,o.Z)(r,"params.bidOverride.cur")||v],imp:[],site:{page:(0,o.Z)(e,"refererInfo.page")},device:{dnt:0,ua:navigator.userAgent,ip:(0,o.Z)(r,"params.bidOverride.device.ip")||(0,o.Z)(r,"params.ext.ip")||void 0},regs:{ext:{us_privacy:e.uspConsent?e.uspConsent:"",gdpr:e.gdprConsent&&e.gdprConsent.gdprApplies?1:0}},source:{ext:{hb:1,adapterver:"1.0.2",prebidver:u,integration:{name:"prebid.js",ver:u}},fd:1},user:{ext:{consent:e.gdprConsent&&e.gdprConsent.gdprApplies?e.gdprConsent.consentString:"",eids:f(r)}}};!0===h(r)?(i.site.publisher={id:r.params.pubId},((0,o.Z)(r,"params.bidOverride.site.id")||(0,o.Z)(r,"params.siteId"))&&(i.site.id=(0,o.Z)(r,"params.bidOverride.site.id")||r.params.siteId)):i.site.id=r.params.dcn,e.ortb2&&(i=i,r));var t=(0,o.Z)(r,"schain.nodes");return(0,s.isArray)(t)&&t.length>0&&(i.source.ext.schain=r.schain,i.source.ext.schain.nodes[0].rid=i.id),i}}r C={code:"yahoossp",gvlid:25,aliases:[],supportedMediaTypes:[n.Mk,n.pX],isBidRequestValid:buildRequests:interpretResponse:getUserSyncs:;(0,a.dX)(C),window.pbjs.installedModules.push("yahoosspBidAdapter")},17673:function(e,r,i){i.d(r,{h:function(){return a}});var t=i(20265);function a(e){return null==e||!e.gdprApplies||!0===(0,t.Z)(e,"vendorData.purpose.consents.1")}}},function(e){var r;r=27501,e(e.s=r)}]);
})(),pbjs.processQueue();