/**
 * @license
 * lodash 3.8.0 (Custom Build) lodash.com/license | Underscore.js 1.8.3 underscorejs.org/LICENSE
 * Build: `lodash modern -o ./lodash.js`
 */
;(function(){function n(n,t){if(n!==t){var r=n===n,e=t===t;if(n>t||!r||n===w&&e)return 1;if(n<t||!e||t===w&&r)return-1}return 0} c(n){return $n[n]}function l(n){return Ln[n]} m(_){unction Ln(){}t,r){var e=Ko(t);fu.apply(e,Zu(t));for(var u=-1,o=e.length;++u<o;){var i=e[u],f=n[i],a=r(f,t[i],i,n,t);(a===a?a===f:f!==f)&&(f!==w||i in n)||(n[i]=a)}return n}function rt(n,t){for(var r=-1,e=null==n,u=!e&&jr(n),o=u&&n.length,i=t.length,f=Ue(i);++r<i;){var a=t[r];f[r]=u?kr(a,o)?n[a]:w:e?w:n[a]}return f} st(n,t,r){
for(var e=-1,u=n.length,o=-1,i=[];++e<u;){var f=n[e];if(h(f)&&jr(f)&&(r||To(f)||ae(f))){t&&(f=st(f,t,r));for(var a=-1,c=f.length;++a<c;)i[++o]=f[a]}else r||(i[++o]=f)}return i}unction ht(n,t){return Mu(n,t,Ko)}nction gt(n,t,r){if(null!=n){r!==w&&r in Fr(n)&&(t=[r]),r=-1;for(var e=t.length;null!=n&&++r<e;)n=n[t[r]];return r&&r==e?n:w}
}function yt(n,t,r,e,u,o){if(n===t)return true;var i=typeof n,f=typeof t;if("function"!=i&&"object"!=i&&"function"!=f&&"object"!=f||null==n||null==t)n=n!==n&&t!==t;else n:{var i=yt,f=To(n),a=To(t),c=M,l=M;f||(c=Xe.call(n),c==B?c=Y:c!=Y&&(f=ge(n))),a||(l=Xe.call(t),l==B?l=Y:l!=Y&&ge(t));var s=c==Y,a=l==Y,l=c==l;if(!l||f||s){if(!e&&(c=s&&Ge.call(n,"__wrapped__"),a=a&&Ge.call(t,"__wrapped__"),c||a)){n=i(c?n.value():n,a?t.value():t,r,e,u,o);break n}if(l){for(u||(u=[]),o||(o=[]),c=u.length;c--;)if(u[c]==n){
n=o[c]==t;break n}u.push(n),o.push(t),n=(f?_r:gr)(n,t,i,r,e,u,o),u.pop(),o.pop()}else n=false}else n=vr(n,t,c)}return n}function dt(n,t,r,e,u){for(var o=-1,i=t.length,f=!u;++o<i;)if(f&&e[o]?r[o]!==n[t[o]]:!(t[o]in n))return false;for(o=-1;++o<i;){var a=t[o],c=n[a],l=r[o];if(f&&e[o]?a=c!==w||a in n:(a=u?u(c,l,a):w,a===w&&(a=yt(l,c,u,true))),!a)return false}return true}unction wt(n){var t=Ko(n),r=t.length;if(!r)return Ie(true);

if(1==r){var e=t[0],u=n[e];if(Cr(u))return for(var o=Ue(r),i=Ue(r);r--;)u=n[t[r]],o[r]=u,i[r]=Cr(u);return function bt(n,t){var r=To(n),e=Er(n)&&Cr(t),u=n+"";return n=$r(n),function(o){if(null==o)return false;var i=u;if(o=Fr(o),!(!r&&e||i in o)){if(o=1==n.length?o:gt(o,It(n,0,-1)),null==o)return false;i=Pr(n),o=Fr(o)}return o[i]===t?t!==w||i in o:yt(t,o[i],null,true)}}function xt(n,t,r,e,u){if(!se(n))return n;

var o=jr(t)&&(To(t)||ge(t));if(!o){var i=Ko(t);fu.apply(i,Zu(t))}return Kn(i||t,function(f,a){if(i&&(a=f,f=t[a]),h(f)){e||(e=[]),u||(u=[]);n:{for(var c=a,l=e,s=u,p=l.length,_=t[c];p--;)if(l[p]==_){n[c]=s[p];break n}var p=n[c],v=r?r(p,_,c,n,t):w,g=v===w;g&&(v=_,jr(_)&&(To(_)||ge(_))?v=To(p)?p:jr(p)?qn(p):[]:Fo(_)||ae(_)?v=ae(p)?ye(p):Fo(p)?p:{}:g=false),l.push(_),s.push(v),g?n[c]=xt(v,_,r,l,s):(v===v?v!==p:p===p)&&(n[c]=v)}}else c=n[a],l=r?r(c,f,a,n,t):w,(s=l===w)&&(l=f),!o&&l===w||!s&&(l===l?l===c:c!==c)||(n[a]=l);

}),n}nction kt(n,t){for(var r=n?t.length:0;r--;){var e=parseFloat(t[r]);if(e!=u&&kr(e)){var u=e;pu.call(n,e,1)}}}ion Wt(t,r,e){var u=dr(),o=-1;return r=Jn(r,function(n){return u(n)}),t=mt(t,,Ct(t,}ion $t(n,t,r){var e=0,u=n?n.length:e;if(typeof t=="number"&&t===t&&u<=Wu){for(;e<u;){var o=e+u>>>1,i=n[o];(r?i<=t:i<t)?e=o+1:u=o}return u}return Lt(n,t,Re,r)}function Lt(n,t,r,e){t=r(t);for(var u=0,o=n?n.length:0,i=t!==t,f=t===w;u<o;){var a=uu((u+o)/2),c=r(n[a]),l=c===c;(i?l||e:f?l&&(e||c!==w):e?c<=t:c<t)?u=a+1:o=a;

}return xu(o,Cu)}ion qt(n){return fe(function(t,r){var e=-1,u=null==t?0:r.length,o=2<u&&r[u-2],i=2<u&&r[2],f=1<u&&r[u-1];

for(typeof o=="function"?(o=zt(o,f,5),u-=2):(o=typeof f=="function"?f:null,u-=o?1:0),i&&Or(r[0],r[1],i)&&(o=3>u?null:o,u=1);++e<u;)(i=r[e])&&n(t,i,o);return t})}ion Jt(n){eturn t}function Xt(n,t){return function(r,e,u){u&&Or(r,e,u)&&(e=null);var i=dr(),f=null==e;if(i===ut&&f||(f=false,e=i(e,u,3)),f){if(e=To(r),e||!ve(r))return n(e?r:Nr(r));

e=o}return yr(r,e,t)}}ction tr(n){return function(){var t=arguments.length;if(!t)return for(var r,e=n?t:-1,u=0,o=Ue(t);n?e--:++e<t;){var i=o[u++]=arguments[e];if(typeof i!="function")throw new Pe(L);var f=r?"":Vu(i);

r="wrapper"==f?new zn([]):r}for(e=r?-1:t;++e<t;)i=o[e],f=Vu(i),r=(u="wrapper"==f?Ku(i):null)&&Ir(u[0])&&u[1]==(R|k|E|C)&&!u[4].length&&1==u[9]?r[Vu(u[0])].apply(r,u[3]):1==i.length&&Ir(i)?r[f]():r.thru(i);return }n cr(n,t,r,e,u,o,i,f,a,c){function l(){for(var b=arguments.length,j=b,k=Ue(b);j--;)k[j]=arguments[j];if(e&&(k=Mt(k,e,u)),o&&(k=Dt(k,o,i)),_||y){var j=l.placeholder,O=v(k,j),b=b-O.length;if(b<c){var R=f?qn(f):null,b=bu(c-b,0),C=_?O:null,O=_?null:O,W=_?k:null,k=_?null:k;return t|=_?E:I,t&=~(_?I:E),g||(t&=~(x|A)),k=[n,t,r,W,C,k,O,R,a,b],R=cr.apply(w,k),Ir(n)&&Gu(R,k),R.placeholder=j,R}}if(j=p?r:this,
h&&(n=j[m]),f)for(R=k.length,b=xu(f.length,R),C=qn(k);b--;)O=f[b],k[b]=kr(O,R)?C[O]:w;return s&&a<k.length&&(k.length=a),(this&&this!==Yn&&this instanceof l?d||Gt(n):n).apply(j,k)}var s=t&R,p=t&x,h=t&A,_=t&k,g=t&j,y=t&O,d=!h&&Gt(n),m=n;return l}ction hr(n,t,r,e,u,o,i,f){var a=t&A;if(!a&&typeof n!="function")throw new Pe(L);var c=e?e.length:0;if(c||(t&=~(E|I),e=u=null),c-=u?u.length:0,t&I){var l=e,s=u;e=u=null}var p=a?null:Ku(n);return r=[n,t,r,e,u,l,s,o,i,f],p&&(e=r[1],t=p[1],f=e|t,u=t==R&&e==k||t==R&&e==C&&r[7].length<=p[8]||t==(R|C)&&e==k,(f<R||u)&&(t&x&&(r[2]=p[2],f|=e&x?0:j),(e=p[3])&&(u=r[3],r[3]=u?Mt(u,e,p[4]):qn(e),
r[4]=u?v(r[3],z):qn(p[4])),(e=p[5])&&(u=r[5],r[5]=u?Dt(u,e,p[6]):qn(e),r[6]=u?v(r[5],z):qn(p[6])),(e=p[7])&&(r[7]=qn(e)),t&R&&(r[8]=null==r[8]?p[8]:xu(r[8],p[8])),null==r[9]&&(r[9]=p[9]),r[0]=p[0],r[1]=f),t=r[1],f=r[9]),r[9]=null==f?a?0:n.length:bu(f-c,0)||0,(p?Pu:Gu)(t==x?Yt(r[0],r[2]):t!=E&&t!=(x|E)||r[4].length?cr.apply(w,r):sr.apply(w,r),r)}function _r(n,t,r,e,u,o,i){var f=-1,a=n.length,c=t.length,l=true;if(a!=c&&(!u||c<=a))return false;for(;l&&++f<a;){var s=n[f],p=t[f],l=w;if(e&&(l=u?e(p,s,f):e(s,p,f)),
l===w)if(u)for(var h=c;h--&&(p=t[h],!(l=s&&s===p||r(s,p,e,u,o,i))););else l=s&&s===p||r(s,p,e,u,o,i)}return!!l}unction gr(n,t,r,e,u,o,i){var f=Ko(n),a=f.length,c=Ko(t).length;if(a!=c&&!u)return false;for(var c=u,l=-1;++l<a;){var s=f[l],p=u?s in t:Ge.call(t,s);if(p){var h=n[s],_=t[s],p=w;e&&(p=u?e(_,h,s):e(h,_,s)),p===w&&(p=h&&h===_||r(h,_,e,u,o,i));

}if(!p)return false;c||(c="constructor"==s)}return c||(r=n.constructor,e=t.constructor,!(r!=e&&"constructor"in n&&"constructor"in t)||typeof r=="function"&&r instanceof r&&typeof e=="function"&&e instanceof e)?true:false}unction dr(n,t,r){var e=$n.callback||Ee,e=e===Ee?ut:e;return r?e(n,t,r):e}{var t;if(!h(n)||Xe.call(n)!=Y||!(Ge.call(n,"constructor")||(t=n.constructor,typeof t!="function"||t instanceof t)))return false;var r;return pt(n,,r===w||Ge.call(n,r)}(n,t,e,u){
if(!n||!n.length)return[];null!=t&&typeof t!="boolean"&&(u=e,e=Or(n,t,u)?null:t,t=false);var o=dr();if((o!==ut||null!=e)&&(e=o(e,u,3)),t&&mr()==r){t=e;var i;e=-1,u=n.length;for(var o=-1,f=[];++e<u;){var a=n[e],c=t?t(a,e,n):a;e&&i===c||(i=c,f[++o]=a)}n=f}else n=Tt(n,e);return n}ion Xr(n,t,r){var e=To(n)?Vn:at;return r&&Or(n,t,r)&&(t=null),(typeof t!="function"||r!==w)&&(t=dr(t,r,3)),e(n,t)}function Hr(n,t,r){var e=To(n)?Gn:ct;return t=dr(t,r,3),e(n,t)}function Qr(n,t,r,e){var u=n?Yu(n):0;return Rr(u)||(n=we(n),
u=n.length),u?(r=typeof r!="number"||e&&Or(t,r,e)?0:0>r?bu(u+r,0):r||0,typeof n=="string"||!To(n)&&ve(n)?r<u&&-1<n.indexOf(t,r):-1<mr(n,t,r)):false}ction ee(n,t,r){var e=To(n)?Hn:Rt;return r&&Or(n,t,r)&&(t=null),
(typeof t!="function"||r!==w)&&(t=dr(t,r,3)),e(n,t)}function ue(n,t){var r;if(typeof t!="function"){if(typeof n!="function")throw new Pe(L);var e=n;n=t,t=e}return function oe(n,t,r){nction o(){if(i=arguments,c=wo(),l=this,p=v&&(s||!g),
!1===_)var r=g&&!s;else{f||g||(h=c);var o=_-(c-h),y=0>=o||o>_;y?(f&&(f=eu(f)),h=c,a=n.apply(l,i)):f||(f=su(u,o))}return y&&s?s=eu(s):s||t===_||(s=su(e,t)),r&&(y=true,a=n.apply(l,i)),!y||s||f||(i=l=null),a}var i,f,a,c,l,s,p,h=0,_=false,v=true;if(typeof n!="function")throw new Pe(L);if(t=0>t?0:+t||0,true===r)var g=true,v=false;else se(r)&&(g=r.leading,_="maxWait"in r&&bu(+r.maxWait||0,t),v="trailing"in r?r.trailing:v);return o.cancel=o}function ie(n,t){f(typeof n!="function"||t&&typeof t!="function")throw new Pe(L);return r.cache=new ie.Cache,r}nction ce(n){return!!n&&1===n.nodeType&&h(n)&&-1<Xe.call(n).indexOf("Element")}nction pe(n){return null==n?false:Xe.call(n)==K?Qe.test(Ze.call(n)):h(n)&&En.test(n)}function he(n){return typeof n=="number"||h(n)&&Xe.call(n)==V}ction ye(n){return et(n,me(n))}function de(n){return vt(n,me(n))}function me(n){if(null==n)return[];se(n)||(n=Be(n));for(var t=n.length,t=t&&Rr(t)&&(To(n)||Fu.nonEnumArgs&&ae(n))&&t||0,r=n.constructor,e=-1,r=typeof r=="function"&&r.prototype===n,u=Ue(t),o=0<t;++e<t;)u[e]=e+"";for(var i in n)o&&kr(i,t)||"constructor"==i&&(r||!Ge.call(n,i))||u.push(i);return u}(n,t,r){if(null==r){var e=se(t),u=e&&Ko(t);((u=u&&u.length&&vt(t,u))?u.length:e)||(u=false,r=t,t=n,n=this)}u||(u=vt(t,Ko(t)));var o=true,e=-1,i=No(n),f=u.length;false===r?o=false:se(r)&&"chain"in r&&(o=r.chain);for(;++e<f;){r=u[e];var a=t[r];n[r]=a,i&&(n.prototype[r]=a))}return n}function Se(){}=_?Zn.defaults(Yn.Object(),_,Zn.pick(Yn,Tn)):Yn;var Ue=_.Array,Ne=_.Date,Fe=_.Error,$e=_.Function,Le=_.Math,ze=_.Number,Be=_.Object,Me=_.RegExp,De=_.String,Pe=_.TypeError,qe=Ue.prototype,Ke=Be.prototype,Ve=De.prototype,Ye=(Ye=_.window)&&Ye.document,Ze=$e.prototype.toString,Ge=Ke.hasOwnProperty,Je=0,Xe=Ke.toString,He=_._,Qe=Me("^"+xe(Xe).replace(/toString|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),nu=pe(nu=_.ArrayBuffer)&&nu,tu=pe(tu=nu&&new nu(0).slice)&&tu,ru=Le.ceil,eu=_.clearTimeout,uu=Le.floor,ou=pe(ou=Be.getOwnPropertySymbols)&&ou,iu=pe(iu=Be.getPrototypeOf)&&iu,fu=qe.push,au=pe(au=Be.preventExtensions)&&au,cu=Ke.propertyIsEnumerable,lu=pe(lu=_.Set)&&lu,su=_.setTimeout,pu=qe.splice,hu=pe(hu=_.Uint8Array)&&hu,_u=pe(_u=_.WeakMap)&&_u,vu=),gu=function(){var n=au&&pe(n=Be.assign)&&n;try{if(n){var t=au({1:0});t[0]=1}}catch(r){try{n(t,"xo")}catch(e){}return!t[1]&&n}return false}(),yu=pe(yu=Ue.isArray)&&yu,du=pe(du=Be.create)&&du,mu=_.isFinite,wu=pe(wu=Be.keys)&&wu,bu=Le.max,xu=Le.min,Au=pe(Au=Ne.now)&&Au,ju=pe(ju=ze.isFinite)&&ju,ku=_.parseInt,Ou=Le.random,Eu=ze.NEGATIVE_INFINITY,Iu=ze.POSITIVE_INFINITY,Ru=Le.pow(2,32)-1,Cu=Ru-1,Wu=Ru>>>1,Su=vu?vu.BYTES_PER_ELEMENT:0,Tu=Le.pow(2,53)-1,Uu=_u&&new _u,Nu={},Fu=$n.support={};

!function(n){ar r=arguments,e=[];t.prototype={valueOf:n,y:n};for(var u in new t)e.push(u);Fu.funcDecomp=/\bthis\b/.test(,Fu.funcNames=typeof $e.name=="string";try{Fu.dom=11===Ye.createDocumentFragment().nodeType}catch(o){Fu.dom=false}try{Fu.nonEnumArgs=!cu.call(r,1)}catch(i){Fu.nonEnumArgs=true}}(1,0),$n.templateSettings={escape:_n,evaluate:vn,interpolate:gn,variable:"",imports:{_:$n}};var $u=gu||Lu=),zu=Kt(ht),Bu=Kt(_t,true),Mu=Vt(),Du=Vt(true),Pu=Uu?Re;tu||(Bt=nu&&hu?Ie(null));var qu=du&&lu?Ie(null),Ku=Uu?Se,Vu=function(){return Fu.funcNames?"constant"==Ie.name?At("name"):Ie("")}(),Yu=At("length"),Zu=ou?Ie([]),Gu=),Ju=fe(,Xu=Qt(),Hu=Qt(true),Qu=fe(,no=pr(),to=pr(true),ro=fe(,eo=fe(,uo=fe(Vr),oo=fe(function(n){var t=n.length,r=n[t-2],e=n[t-1];return 2<t&&typeof r=="function"?t-=2:(r=1<t&&typeof e=="function"?(--t,e):w,e=w),n.length=t,Yr(n,r,e)}),io=fe(function(n,t){return rt(n,st(t))}),fo=Pt(,ao=Ht(zu),co=Ht(Bu,true),lo=rr(Kn,zu),so=rr(Bu),po=Pt(,ho=Pt(,_o=fe(function(n,t,r){var e=-1,u=typeof t=="function",o=Er(t),i=jr(n)?Ue(n.length):[];return zu(n,function(n){var f=u?t:o&&null!=n&&n[t];i[++e]=f?f.apply(n,r):Ar(n,t,r)}),i}),vo=Pt(,go=ar(Xn,zu),yo=ar(Bu),mo=fe(,wo=Au||bo=fe(,xo=fe(,Ao=fe(,jo=Jt(k),ko=Jt(O),Oo=fe(,Eo=fe(,Io=tr(),Ro=tr(true),Co=fr(E),Wo=fr(I),So=fe(,To=yu||Fu.dom||(ce=;var Uo=ju||No=e(/x/)||hu&&!e(hu)?e,Fo=iu?Tr,$o=qt(,Lo=fe(,zo=nr(ht),Bo=nr(_t),Mo=er(Mu),Do=er(Du),Po=ur(ht),qo=ur(_t),Ko=wu?function(n){
var t=null!=n&&n.constructor;return typeof t=="function"&&t.prototype===n||typeof n!="function"&&jr(n)?Ur(n):se(n)?wu(n):[]}:Ur,Vo=or(true),Yo=or(),Zo=qt(xt),Go=fe(,Jo=fe(,Xo=Zt(,Ho=Zt(function(n,t,r){return n+(r?"-":"")+t.toLowerCase()}),Qo=ir(),ni=ir(true);8!=ku(Sn+"08")&&(Ae=;var ti=Zt(,ri=Zt(,ei=fe(,ui=fe(function(n,t){return function(r){return Ar(r,n,t)}}),oi=fe(,ii=Xt(function(n){for(var t=-1,r=n.length,e=Eu;++t<r;){var u=n[t];u>e&&(e=u)}return e}),fi=Xt(true);return $n.prototype=Ln.prototype,zn.prototype=Lu(Ln.prototype),zn.prototype.constructor=zn,Bn.prototype=Lu(Ln.prototype),Bn.prototype.constructor=Bn,Mn.prototype["delete"]=Mn.prototype.get=Mn.prototype.has=Mn.prototype.set=Dn.prototype.push=ie.Cache=Mn,$n.after=$n.ary=$n.assign=$o,$n.at=io,$n.before=ue,$n.bind=bo,$n.bindAll=xo,$n.bindKey=Ao,$n.callback=Ee,$n.chain=Gr,$n.chunk=$n.compact=$n.constant=Ie,$n.countBy=fo,$n.create=function(n,t,r){var e=Lu(n);return r&&Or(n,t,r)&&(t=null),
t?$u(e,t):e},$n.curry=jo,$n.curryRight=ko,$n.debounce=oe,$n.defaults=Lo,$n.defer=Oo,$n.delay=Eo,$n.difference=Ju,$n.drop=zr,$n.dropRight=Br,$n.dropRightWhile=function(n,t,r){return n&&n.length?Nt(n,dr(t,r,3),true,true):[]},$n.dropWhile=$n.fill=$n.filter=Hr,$n.flatten=$n.flattenDeep=$n.flow=Io,$n.flowRight=Ro,$n.forEach=lo,$n.forEachRight=so,$n.forIn=Mo,$n.forInRight=Do,$n.forOwn=Po,$n.forOwnRight=qo,$n.functions=de,$n.groupBy=po,$n.indexBy=ho,$n.initial=function(n){return Br(n,1)},$n.intersection=function(){for(var n=[],t=-1,e=arguments.length,u=[],o=mr(),i=o==r,f=[];++t<e;){var a=arguments[t];jr(a)&&(n.push(a),
u.push(i&&120<=a.length?qu(t&&a):null))}if(e=n.length,2>e)return f;var i=n[0],c=-1,l=i?i.length:0,s=u[0];n:for(;++c<l;)if(a=i[c],0>(s?Pn(s,a):o(f,a,0))){for(t=e;--t;){var p=u[t];if(0>(p?Pn(p,a):o(n[t],a,0)))continue n}s&&s.push(a),f.push(a)}return f},$n.invert=$n.invoke=_o,$n.keys=Ko,$n.keysIn=me,$n.map=ne,$n.mapKeys=Vo,$n.mapValues=Yo,$n.matches=Ce,
$n.matchesProperty=$n.memoize=ie,$n.merge=Zo,$n.method=ui,$n.methodOf=oi,$n.mixin=We,$n.negate=$n.omit=Go,$n.once=$n.pairs=$n.partial=Co,$n.partialRight=Wo,$n.partition=vo,$n.pick=Jo,$n.pluck=function(n,t){return ne(n,Te(t))},$n.property=Te,
$n.propertyOf=$n.pull=$n.pullAt=Qu,$n.range=$n.rearg=So,$n.reject=$n.remove=$n.rest=qr,$n.restParam=fe,$n.set=$n.shuffle=re,$n.slice=$n.sortBy=function(n,t,r){if(null==n)return[];r&&Or(n,t,r)&&(t=null);var e=-1;return t=dr(t,r,3),n=mt(n,,Ct(n,a)},$n.sortByAll=mo,$n.sortByOrder=$n.spread=$n.take=$n.takeRight=$n.takeRightWhile=$n.takeWhile=$n.tap=$n.throttle=$n.thru=Jr,$n.times=function(n,t,r){if(n=uu(n),1>n||!mu(n))return[];var e=-1,u=Ue(xu(n,Ru));for(t=zt(t,r,1);++e<n;)e<Ru?u[e]=t(e):t(e);return u},$n.toArray=function(n){var t=n?Yu(n):0;return Rr(t)?t?qn(n):[]:we(n)},$n.toPlainObject=ye,$n.transform=$n.union=ro,$n.uniq=Kr,$n.unzip=Vr,$n.unzipWith=Yr,$n.values=we,$n.valuesIn=$n.where=function(n,t){return Hr(n,wt(t))},$n.without=eo,$n.wrap=$n.xor=function(){for(var n=-1,t=arguments.length;++n<t;){var r=arguments[n];if(jr(r))var e=e?ft(e,r).concat(ft(r,e)):r}return e?Tt(e):[]},$n.zip=uo,$n.zipObject=Zr,$n.zipWith=oo,$n.backflow=Ro,$n.collect=ne,$n.compose=Ro,$n.each=lo,$n.eachRight=so,
$n.extend=$o,$n.iteratee=Ee,$n.methods=de,$n.object=Zr,$n.select=Hr,$n.tail=qr,$n.unique=Kr,We($n,$n),$n.add=$n.attempt=ei,$n.camelCase=Xo,$n.capitalize=$n.clone=function(n,t,r,e){return t&&typeof t!="boolean"&&Or(n,t,r)?t=false:typeof t=="function"&&(e=r,r=t,t=false),r=typeof r=="function"&&zt(r,e,1),ot(n,t,r)},$n.cloneDeep=function(n,t,r){return t=typeof t=="function"&&zt(t,r,1),ot(n,true,t)},$n.deburr=be,
$n.endsWith=$n.escape=function(n){return(n=u(n))&&hn.test(n)?n.replace(sn,l):n},$n.escapeRegExp=xe,$n.every=Xr,$n.find=ao,$n.findIndex=Xu,$n.findKey=zo,$n.findLast=co,$n.findLastIndex=Hu,$n.findLastKey=Bo,$n.findWhere=$n.first=Mr,$n.get=$n.has=function(n,t){if(null==n)return false;var r=Ge.call(n,t);

return r||Er(t)||(t=$r(t),n=1==t.length?n:gt(n,It(t,0,-1)),t=Pr(t),r=null!=n&&Ge.call(n,t)),r},$n.identity=Re,$n.includes=Qr,$n.indexOf=Dr,$n.inRange=function(n,t,r){return t=+t||0,"undefined"===typeof r?(r=t,t=0):r=+r||0,n>=xu(t,r)&&n<bu(t,r)},$n.isArguments=ae,$n.isArray=To,$n.isBoolean=$n.isDate=$n.isElement=ce,$n.isEmpty=$n.isEqual=function(n,t,r,e){return r=typeof r=="function"&&zt(r,e,3),!r&&Cr(n)&&Cr(t)?n===t:(e=r?r(n,t):w,e===w?yt(n,t,r):!!e)},$n.isError=le,$n.isFinite=Uo,$n.isFunction=No,$n.isMatch=function(n,t,r,e){var u=Ko(t),o=u.length;if(!o)return true;if(null==n)return false;if(r=typeof r=="function"&&zt(r,e,3),n=Fr(n),!r&&1==o){var i=u[0];if(e=t[i],Cr(e))return e===n[i]&&(e!==w||i in n)}for(var i=Ue(o),f=Ue(o);o--;)e=i[o]=t[u[o]],f[o]=Cr(e);return dt(n,u,i,f,r)},$n.isNaN=$n.isNative=pe,
$n.isNull=$n.isNumber=he,$n.isObject=se,$n.isPlainObject=Fo,$n.isRegExp=_e,$n.isString=ve,$n.isTypedArray=ge,$n.isUndefined=function(n){return n===w},$n.kebabCase=Ho,$n.last=Pr,$n.lastIndexOf=$n.max=ii,$n.min=fi,$n.noConflict=$n.noop=Se,$n.now=wo,$n.pad=$n.padLeft=Qo,$n.padRight=ni,$n.parseInt=Ae,$n.random=$n.reduce=go,
$n.reduceRight=yo,$n.repeat=je,$n.result=$n.runInContext=m,$n.size=$n.snakeCase=ti,$n.some=ee,$n.sortedIndex=no,$n.sortedLastIndex=to,$n.startCase=ri,$n.startsWith=$n.sum=function(n,t,r){r&&Or(n,t,r)&&(t=null);

var e=dr(),u=null==t;if(e===ut&&u||(u=false,t=e(t,r,3)),u){for(n=To(n)?n:Nr(n),t=n.length,r=0;t--;)r+=+n[t]||0;n=r}else n=St(n,t);return n},$n.template=$n.trim=ke,$n.trimLeft=$n.trimRight=$n.trunc=$n.unescape=$n.uniqueId=$n.words=Oe,$n.all=Xr,$n.any=ee,$n.contains=Qr,
$n.detect=ao,$n.foldl=go,$n.foldr=yo,$n.head=Mr,$n.include=Qr,$n.inject=go,We($n,),false),$n.sample=te,$n.prototype.sample=$n.VERSION=b,Kn("bind bindKey curry curryRight partial partialRight".split(" "),,Kn(["dropWhile","filter","map","takeWhile"],,Kn(["drop","take"],,Kn(["first","last"],,Kn(["initial","rest"],,Kn(["pluck","where"],,Bn.prototype.compact=Bn.prototype.reject=Bn.prototype.slice=function(n,t){n=null==n?0:+n||0;var r=this;return 0>n?r=this.takeRight(-n):n&&(r=this.drop(n)),t!==w&&(t=+t||0,r=0>t?r.dropRight(-t):r.take(t-n)),r},Bn.prototype.toArray=function(){return this.drop(0)},ht(Bn.prototype,function(n,t){var r=$n[t];if(r){var e=/^(?:filter|map|reject)|While$/.test(t),u=/^(?:first|last)$/.test(t);$n.prototype[t]=}),Kn("concat join pop push replace shift sort splice split unshift".split(" "),,ht(Bn.prototype,,Nu[cr(null,A).name]=[{name:"wrapper",func:null}],Bn.prototype.clone=Bn.prototype.reverse=Bn.prototype.value=$n.prototype.chain=function(){return Gr(this)},$n.prototype.commit=$n.prototype.plant=$n.prototype.reverse=$n.prototype.toString=$n.prototype.run=$n.prototype.toJSON=$n.prototype.valueOf=$n.prototype.value=$n.prototype.collect=$n.prototype.map,$n.prototype.head=$n.prototype.first,$n.prototype.select=$n.prototype.filter,$n.prototype.tail=$n.prototype.rest,$n}var w,b="3.8.0",x=1,A=2,j=4,k=8,O=16,E=32,I=64,R=128,C=256,W=30,S="...",T=150,U=16,N=0,F=1,$=2,L="Expected a function",z="__lodash_placeholder__",B="[object Arguments]",M="[object Array]",D="[object Boolean]",P="[object Date]",q="[object Error]",K="[object Function]",V="[object Number]",Y="[object Object]",Z="[object RegExp]",G="[object String]",J="[object ArrayBuffer]",X="[object Float32Array]",H="[object Float64Array]",Q="[object Int8Array]",nn="[object Int16Array]",tn="[object Int32Array]",rn="[object Uint8Array]",en="[object Uint8ClampedArray]",un="[object Uint16Array]",on="[object Uint32Array]",fn=/\b__p\+='';/g,an=/\b(__p\+=)''\+/g,cn=/(__e\(.*?\)|\b__t\))\+'';/g,ln=/&(?:amp|lt|gt|quot|#39|#96);/g,sn=/[&<>"'`]/g,pn=RegExp(ln.source),hn=RegExp(sn.source),_n=/<%-([\s\S]+?)%>/g,vn=/<%([\s\S]+?)%>/g,gn=/<%=([\s\S]+?)%>/g,yn=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/,dn=/^\w*$/,mn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g,wn=/[.*+?^${}()|[\]\/\\]/g,bn=RegExp(wn.source),xn=/[\u0300-\u036f\ufe20-\ufe23]/g,An=/\\(\\)?/g,jn=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,kn=/\w*$/,On=/^0[xX]/,En=/^\[object .+?Constructor\]$/,In=/[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g,Rn=/($^)/,Cn=/['\n\r\u2028\u2029\\]/g,Wn=RegExp("[A-Z\\xc0-\\xd6\\xd8-\\xde]+(?=[A-Z\\xc0-\\xd6\\xd8-\\xde][a-z\\xdf-\\xf6\\xf8-\\xff]+)|[A-Z\\xc0-\\xd6\\xd8-\\xde]?[a-z\\xdf-\\xf6\\xf8-\\xff]+|[A-Z\\xc0-\\xd6\\xd8-\\xde]+|[0-9]+","g"),Sn=" \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000",Tn="Array ArrayBuffer Date Error Float32Array Float64Array Function Int8Array Int16Array Int32Array Math Number Object RegExp Set String _ clearTimeout document isFinite parseInt setTimeout TypeError Uint8Array Uint8ClampedArray Uint16Array Uint32Array WeakMap window".split(" "),Un={};

Un[X]=Un[H]=Un[Q]=Un[nn]=Un[tn]=Un[rn]=Un[en]=Un[un]=Un[on]=true,Un[B]=Un[M]=Un[J]=Un[D]=Un[P]=Un[q]=Un[K]=Un["[object Map]"]=Un[V]=Un[Y]=Un[Z]=Un["[object Set]"]=Un[G]=Un["[object WeakMap]"]=false;var Nn={};Nn[B]=Nn[M]=Nn[J]=Nn[D]=Nn[P]=Nn[X]=Nn[H]=Nn[Q]=Nn[nn]=Nn[tn]=Nn[V]=Nn[Y]=Nn[Z]=Nn[G]=Nn[rn]=Nn[en]=Nn[un]=Nn[on]=true,Nn[q]=Nn[K]=Nn["[object Map]"]=Nn["[object Set]"]=Nn["[object WeakMap]"]=false;var Fn={leading:false,maxWait:0,trailing:false},$n={"\xc0":"A","\xc1":"A","\xc2":"A","\xc3":"A","\xc4":"A","\xc5":"A",
"\xe0":"a","\xe1":"a","\xe2":"a","\xe3":"a","\xe4":"a","\xe5":"a","\xc7":"C","\xe7":"c","\xd0":"D","\xf0":"d","\xc8":"E","\xc9":"E","\xca":"E","\xcb":"E","\xe8":"e","\xe9":"e","\xea":"e","\xeb":"e","\xcc":"I","\xcd":"I","\xce":"I","\xcf":"I","\xec":"i","\xed":"i","\xee":"i","\xef":"i","\xd1":"N","\xf1":"n","\xd2":"O","\xd3":"O","\xd4":"O","\xd5":"O","\xd6":"O","\xd8":"O","\xf2":"o","\xf3":"o","\xf4":"o","\xf5":"o","\xf6":"o","\xf8":"o","\xd9":"U","\xda":"U","\xdb":"U","\xdc":"U","\xf9":"u","\xfa":"u",
"\xfb":"u","\xfc":"u","\xdd":"Y","\xfd":"y","\xff":"y","\xc6":"Ae","\xe6":"ae","\xde":"Th","\xfe":"th","\xdf":"ss"},Ln={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","`":"&#96;"},zn={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'","&#96;":"`"},Bn={"function":true,object:true},Mn={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Dn=Bn[typeof exports]&&exports&&!exports.nodeType&&exports,Pn=Bn[typeof module]&&module&&!module.nodeType&&module,qn=Bn[typeof self]&&self&&self.Object&&self,Kn=Bn[typeof window]&&window&&window.Object&&window,Vn=Pn&&Pn.exports===Dn&&Dn,Yn=Dn&&Pn&&typeof global=="object"&&global&&global.Object&&global||Kn!==(this&&this.window)&&Kn||qn||this,Zn=m();

typeof define=="function"&&typeof define.amd=="object"&&define.amd?(Yn._=Zn, define(function(){return Zn})):Dn&&Pn?Vn?(Pn.exports=Zn)._=Zn:Dn._=Zn:Yn._=Zn}).call(this);;
/*! jQuery v2.2.4 | (c) jQuery Foundation | jquery.org/license */
!"undefined"!=typeof window?window:this,;
;
/*! VelocityJS.org (1.2.3). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */
/*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */
!window),;
;
/* VelocityJS.org UI Pack (5.0.4). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License. Portions copyright Daniel Eden, Christian Pucci. */
!function(t){"function"==typeof require&&"object"==typeof exports?module.exports=t():"function"==typeof define&&define.amd?define(["velocity"],t):t()}(function(){return function(t,a,e,r){function n(t,a){var e=[];return t&&a?($.each([t,a],function(t,a){var r=[];$.each(a,function(t,a){for(;a.toString().length<5;)a="0"+a;r.push(a)}),e.push(r.join(""))}),parseFloat(e[0])>parseFloat(e[1])):!1}if(!t.Velocity||!t.Velocity.Utilities)return void(a.console&&console.log("Velocity UI Pack: Velocity must be loaded first. Aborting."));var i=t.Velocity,$=i.Utilities,s=i.version,o={major:1,minor:1,patch:0};if(n(o,s)){var l="Velocity UI Pack: You need to update Velocity (jquery.velocity.js) to a newer version. Visit http://github.com/julianshapiro/velocity.";throw alert(l),new Error(l)}i.RegisterEffect=i.RegisterUI=function(t,a){function e(t,a,e,r){var n=0,s;$.each(t.nodeType?[t]:t,function(t,a){r&&(e+=t*r),s=a.parentNode,$.each(["height","paddingTop","paddingBottom","marginTop","marginBottom"],function(t,e){n+=parseFloat(i.CSS.getPropertyValue(a,e))})}),i.animate(s,{height:("In"===a?"+":"-")+"="+n},{queue:!1,easing:"ease-in-out",duration:e*("In"===a?.6:1)})}return i.Redirects[t]=function(n,s,o,l,c,u){function f(){s.display!==r&&"none"!==s.display||!/Out$/.test(t)||$.each(c.nodeType?[c]:c,function(t,a){i.CSS.setPropertyValue(a,"display","none")}),s.complete&&s.complete.call(c,c),u&&u.resolver(c||n)}var p=o===l-1;a.defaultDuration="function"==typeof a.defaultDuration?a.defaultDuration.call(c,c):parseFloat(a.defaultDuration);for(var d=0;d<a.calls.length;d++){var g=a.calls[d],y=g[0],m=s.duration||a.defaultDuration||1e3,X=g[1],Y=g[2]||{},O={};if(O.duration=m*(X||1),O.queue=s.queue||"",O.easing=Y.easing||"ease",O.delay=parseFloat(Y.delay)||0,O._cacheValues=Y._cacheValues||!0,0===d){if(O.delay+=parseFloat(s.delay)||0,0===o&&(O.begin=function(){s.begin&&s.begin.call(c,c);var a=t.match(/(In|Out)$/);a&&"In"===a[0]&&y.opacity!==r&&$.each(c.nodeType?[c]:c,function(t,a){i.CSS.setPropertyValue(a,"opacity",0)}),s.animateParentHeight&&a&&e(c,a[0],m+O.delay,s.stagger)}),null!==s.display)if(s.display!==r&&"none"!==s.display)O.display=s.display;else if(/In$/.test(t)){var v=i.CSS.Values.getDisplayType(n);O.display="inline"===v?"inline-block":v}s.visibility&&"hidden"!==s.visibility&&(O.visibility=s.visibility)}d===a.calls.length-1&&(O.complete=function(){if(a.reset){for(var t in a.reset){var e=a.reset[t];i.CSS.Hooks.registered[t]!==r||"string"!=typeof e&&"number"!=typeof e||(a.reset[t]=[a.reset[t],a.reset[t]])}var s={duration:0,queue:!1};p&&(s.complete=f),i.animate(n,a.reset,s)}else p&&f()},"hidden"===s.visibility&&(O.visibility=s.visibility)),i.animate(n,y,O)}},i},i.RegisterEffect.packagedEffects={"callout.bounce":{defaultDuration:550,calls:[[{translateY:-30},.25],[{translateY:0},.125],[{translateY:-15},.125],[{translateY:0},.25]]},"callout.shake":{defaultDuration:800,calls:[[{translateX:-11},.125],[{translateX:11},.125],[{translateX:-11},.125],[{translateX:11},.125],[{translateX:-11},.125],[{translateX:11},.125],[{translateX:-11},.125],[{translateX:0},.125]]},"callout.flash":{defaultDuration:1100,calls:[[{opacity:[0,"easeInOutQuad",1]},.25],[{opacity:[1,"easeInOutQuad"]},.25],[{opacity:[0,"easeInOutQuad"]},.25],[{opacity:[1,"easeInOutQuad"]},.25]]},"callout.pulse":{defaultDuration:825,calls:[[{scaleX:1.1,scaleY:1.1},.5,{easing:"easeInExpo"}],[{scaleX:1,scaleY:1},.5]]},"callout.swing":{defaultDuration:950,calls:[[{rotateZ:15},.2],[{rotateZ:-10},.2],[{rotateZ:5},.2],[{rotateZ:-5},.2],[{rotateZ:0},.2]]},"callout.tada":{defaultDuration:1e3,calls:[[{scaleX:.9,scaleY:.9,rotateZ:-3},.1],[{scaleX:1.1,scaleY:1.1,rotateZ:3},.1],[{scaleX:1.1,scaleY:1.1,rotateZ:-3},.1],["reverse",.125],["reverse",.125],["reverse",.125],["reverse",.125],["reverse",.125],[{scaleX:1,scaleY:1,rotateZ:0},.2]]},"transition.fadeIn":{defaultDuration:500,calls:[[{opacity:[1,0]}]]},"transition.fadeOut":{defaultDuration:500,calls:[[{opacity:[0,1]}]]},"transition.flipXIn":{defaultDuration:700,calls:[[{opacity:[1,0],transformPerspective:[800,800],rotateY:[0,-55]}]],reset:{transformPerspective:0}},"transition.flipXOut":{defaultDuration:700,calls:[[{opacity:[0,1],transformPerspective:[800,800],rotateY:55}]],reset:{transformPerspective:0,rotateY:0}},"transition.flipYIn":{defaultDuration:800,calls:[[{opacity:[1,0],transformPerspective:[800,800],rotateX:[0,-45]}]],reset:{transformPerspective:0}},"transition.flipYOut":{defaultDuration:800,calls:[[{opacity:[0,1],transformPerspective:[800,800],rotateX:25}]],reset:{transformPerspective:0,rotateX:0}},"transition.flipBounceXIn":{defaultDuration:900,calls:[[{opacity:[.725,0],transformPerspective:[400,400],rotateY:[-10,90]},.5],[{opacity:.8,rotateY:10},.25],[{opacity:1,rotateY:0},.25]],reset:{transformPerspective:0}},"transition.flipBounceXOut":{defaultDuration:800,calls:[[{opacity:[.9,1],transformPerspective:[400,400],rotateY:-10},.5],[{opacity:0,rotateY:90},.5]],reset:{transformPerspective:0,rotateY:0}},"transition.flipBounceYIn":{defaultDuration:850,calls:[[{opacity:[.725,0],transformPerspective:[400,400],rotateX:[-10,90]},.5],[{opacity:.8,rotateX:10},.25],[{opacity:1,rotateX:0},.25]],reset:{transformPerspective:0}},"transition.flipBounceYOut":{defaultDuration:800,calls:[[{opacity:[.9,1],transformPerspective:[400,400],rotateX:-15},.5],[{opacity:0,rotateX:90},.5]],reset:{transformPerspective:0,rotateX:0}},"transition.swoopIn":{defaultDuration:850,calls:[[{opacity:[1,0],transformOriginX:["100%","50%"],transformOriginY:["100%","100%"],scaleX:[1,0],scaleY:[1,0],translateX:[0,-700],translateZ:0}]],reset:{transformOriginX:"50%",transformOriginY:"50%"}},"transition.swoopOut":{defaultDuration:850,calls:[[{opacity:[0,1],transformOriginX:["50%","100%"],transformOriginY:["100%","100%"],scaleX:0,scaleY:0,translateX:-700,translateZ:0}]],reset:{transformOriginX:"50%",transformOriginY:"50%",scaleX:1,scaleY:1,translateX:0}},"transition.whirlIn":{defaultDuration:850,calls:[[{opacity:[1,0],transformOriginX:["50%","50%"],transformOriginY:["50%","50%"],scaleX:[1,0],scaleY:[1,0],rotateY:[0,160]},1,{easing:"easeInOutSine"}]]},"transition.whirlOut":{defaultDuration:750,calls:[[{opacity:[0,"easeInOutQuint",1],transformOriginX:["50%","50%"],transformOriginY:["50%","50%"],scaleX:0,scaleY:0,rotateY:160},1,{easing:"swing"}]],reset:{scaleX:1,scaleY:1,rotateY:0}},"transition.shrinkIn":{defaultDuration:750,calls:[[{opacity:[1,0],transformOriginX:["50%","50%"],transformOriginY:["50%","50%"],scaleX:[1,1.5],scaleY:[1,1.5],translateZ:0}]]},"transition.shrinkOut":{defaultDuration:600,calls:[[{opacity:[0,1],transformOriginX:["50%","50%"],transformOriginY:["50%","50%"],scaleX:1.3,scaleY:1.3,translateZ:0}]],reset:{scaleX:1,scaleY:1}},"transition.expandIn":{defaultDuration:700,calls:[[{opacity:[1,0],transformOriginX:["50%","50%"],transformOriginY:["50%","50%"],scaleX:[1,.625],scaleY:[1,.625],translateZ:0}]]},"transition.expandOut":{defaultDuration:700,calls:[[{opacity:[0,1],transformOriginX:["50%","50%"],transformOriginY:["50%","50%"],scaleX:.5,scaleY:.5,translateZ:0}]],reset:{scaleX:1,scaleY:1}},"transition.bounceIn":{defaultDuration:800,calls:[[{opacity:[1,0],scaleX:[1.05,.3],scaleY:[1.05,.3]},.4],[{scaleX:.9,scaleY:.9,translateZ:0},.2],[{scaleX:1,scaleY:1},.5]]},"transition.bounceOut":{defaultDuration:800,calls:[[{scaleX:.95,scaleY:.95},.35],[{scaleX:1.1,scaleY:1.1,translateZ:0},.35],[{opacity:[0,1],scaleX:.3,scaleY:.3},.3]],reset:{scaleX:1,scaleY:1}},"transition.bounceUpIn":{defaultDuration:800,calls:[[{opacity:[1,0],translateY:[-30,1e3]},.6,{easing:"easeOutCirc"}],[{translateY:10},.2],[{translateY:0},.2]]},"transition.bounceUpOut":{defaultDuration:1e3,calls:[[{translateY:20},.2],[{opacity:[0,"easeInCirc",1],translateY:-1e3},.8]],reset:{translateY:0}},"transition.bounceDownIn":{defaultDuration:800,calls:[[{opacity:[1,0],translateY:[30,-1e3]},.6,{easing:"easeOutCirc"}],[{translateY:-10},.2],[{translateY:0},.2]]},"transition.bounceDownOut":{defaultDuration:1e3,calls:[[{translateY:-20},.2],[{opacity:[0,"easeInCirc",1],translateY:1e3},.8]],reset:{translateY:0}},"transition.bounceLeftIn":{defaultDuration:750,calls:[[{opacity:[1,0],translateX:[30,-1250]},.6,{easing:"easeOutCirc"}],[{translateX:-10},.2],[{translateX:0},.2]]},"transition.bounceLeftOut":{defaultDuration:750,calls:[[{translateX:30},.2],[{opacity:[0,"easeInCirc",1],translateX:-1250},.8]],reset:{translateX:0}},"transition.bounceRightIn":{defaultDuration:750,calls:[[{opacity:[1,0],translateX:[-30,1250]},.6,{easing:"easeOutCirc"}],[{translateX:10},.2],[{translateX:0},.2]]},"transition.bounceRightOut":{defaultDuration:750,calls:[[{translateX:-30},.2],[{opacity:[0,"easeInCirc",1],translateX:1250},.8]],reset:{translateX:0}},"transition.slideUpIn":{defaultDuration:900,calls:[[{opacity:[1,0],translateY:[0,20],translateZ:0}]]},"transition.slideUpOut":{defaultDuration:900,calls:[[{opacity:[0,1],translateY:-20,translateZ:0}]],reset:{translateY:0}},"transition.slideDownIn":{defaultDuration:900,calls:[[{opacity:[1,0],translateY:[0,-20],translateZ:0}]]},"transition.slideDownOut":{defaultDuration:900,calls:[[{opacity:[0,1],translateY:20,translateZ:0}]],reset:{translateY:0}},"transition.slideLeftIn":{defaultDuration:1e3,calls:[[{opacity:[1,0],translateX:[0,-20],translateZ:0}]]},"transition.slideLeftOut":{defaultDuration:1050,calls:[[{opacity:[0,1],translateX:-20,translateZ:0}]],reset:{translateX:0}},"transition.slideRightIn":{defaultDuration:1e3,calls:[[{opacity:[1,0],translateX:[0,20],translateZ:0}]]},"transition.slideRightOut":{defaultDuration:1050,calls:[[{opacity:[0,1],translateX:20,translateZ:0}]],reset:{translateX:0}},"transition.slideUpBigIn":{defaultDuration:850,calls:[[{opacity:[1,0],translateY:[0,75],translateZ:0}]]},"transition.slideUpBigOut":{defaultDuration:800,calls:[[{opacity:[0,1],translateY:-75,translateZ:0}]],reset:{translateY:0}},"transition.slideDownBigIn":{defaultDuration:850,calls:[[{opacity:[1,0],translateY:[0,-75],translateZ:0}]]},"transition.slideDownBigOut":{defaultDuration:800,calls:[[{opacity:[0,1],translateY:75,translateZ:0}]],reset:{translateY:0}},"transition.slideLeftBigIn":{defaultDuration:800,calls:[[{opacity:[1,0],translateX:[0,-75],translateZ:0}]]},"transition.slideLeftBigOut":{defaultDuration:750,calls:[[{opacity:[0,1],translateX:-75,translateZ:0}]],reset:{translateX:0}},"transition.slideRightBigIn":{defaultDuration:800,calls:[[{opacity:[1,0],translateX:[0,75],translateZ:0}]]},"transition.slideRightBigOut":{defaultDuration:750,calls:[[{opacity:[0,1],translateX:75,translateZ:0}]],reset:{translateX:0}},"transition.perspectiveUpIn":{defaultDuration:800,calls:[[{opacity:[1,0],transformPerspective:[800,800],transformOriginX:[0,0],transformOriginY:["100%","100%"],rotateX:[0,-180]}]],reset:{transformPerspective:0,transformOriginX:"50%",transformOriginY:"50%"}},"transition.perspectiveUpOut":{defaultDuration:850,calls:[[{opacity:[0,1],transformPerspective:[800,800],transformOriginX:[0,0],transformOriginY:["100%","100%"],rotateX:-180}]],reset:{transformPerspective:0,transformOriginX:"50%",transformOriginY:"50%",rotateX:0}},"transition.perspectiveDownIn":{defaultDuration:800,calls:[[{opacity:[1,0],transformPerspective:[800,800],transformOriginX:[0,0],transformOriginY:[0,0],rotateX:[0,180]}]],reset:{transformPerspective:0,transformOriginX:"50%",transformOriginY:"50%"}},"transition.perspectiveDownOut":{defaultDuration:850,calls:[[{opacity:[0,1],transformPerspective:[800,800],transformOriginX:[0,0],transformOriginY:[0,0],rotateX:180}]],reset:{transformPerspective:0,transformOriginX:"50%",transformOriginY:"50%",rotateX:0}},"transition.perspectiveLeftIn":{defaultDuration:950,calls:[[{opacity:[1,0],transformPerspective:[2e3,2e3],transformOriginX:[0,0],transformOriginY:[0,0],rotateY:[0,-180]}]],reset:{transformPerspective:0,transformOriginX:"50%",transformOriginY:"50%"}},"transition.perspectiveLeftOut":{defaultDuration:950,calls:[[{opacity:[0,1],transformPerspective:[2e3,2e3],transformOriginX:[0,0],transformOriginY:[0,0],rotateY:-180}]],reset:{transformPerspective:0,transformOriginX:"50%",transformOriginY:"50%",rotateY:0}},"transition.perspectiveRightIn":{defaultDuration:950,calls:[[{opacity:[1,0],transformPerspective:[2e3,2e3],transformOriginX:["100%","100%"],transformOriginY:[0,0],rotateY:[0,180]}]],reset:{transformPerspective:0,transformOriginX:"50%",transformOriginY:"50%"}},"transition.perspectiveRightOut":{defaultDuration:950,calls:[[{opacity:[0,1],transformPerspective:[2e3,2e3],transformOriginX:["100%","100%"],transformOriginY:[0,0],rotateY:180}]],reset:{transformPerspective:0,transformOriginX:"50%",transformOriginY:"50%",rotateY:0}}};for(var c in i.RegisterEffect.packagedEffects)i.RegisterEffect(c,i.RegisterEffect.packagedEffects[c]);i.RunSequence=function(t){var a=$.extend(!0,[],t);a.length>1&&($.each(a.reverse(),function(t,e){var r=a[t+1];if(r){var n=e.o||e.options,s=r.o||r.options,o=n&&n.sequenceQueue===!1?"begin":"complete",l=s&&s[o],c={};c[o]=function(){var t=r.e||r.elements,a=t.nodeType?[t]:t;l&&l.call(a,a),i(e)},r.o?r.o=$.extend({},s,c):r.options=$.extend({},s,c)}}),a.reverse()),i(a[0])}}(window.jQuery||window.Zepto||window,window,document)});;
!function(t){"function"==typeof require&&"object"==typeof exports?module.exports=t():"function"==typeof define&&define.amd?define(["velocity"],t):t()}(function(){return function(t,a,e,r){function n(t,a){var e=[];return t&&a?($.each([t,a],function(t,a){var r=[];$.each(a,function(t,a){for(;a.toString().length<5;)a="0"+a;r.push(a)}),e.push(r.join(""))}),parseFloat(e[0])>parseFloat(e[1])):!1}if(!t.Velocity||!t.Velocity.Utilities)return void(a.console&&console.log("Velocity UI Pack: Velocity must be loaded first. Aborting."));var i=t.Velocity,$=i.Utilities,s=i.version,o={major:1,minor:1,patch:0};if(n(o,s)){var l="Velocity UI Pack: You need to update Velocity (jquery.velocity.js) to a newer version. Visit http://github.com/julianshapiro/velocity.";throw alert(l),new Error(l)}i.RegisterEffect=i.RegisterUI=function(t,a){function e(t,a,e,r){var n=0,s;$.each(t.nodeType?[t]:t,function(t,a){r&&(e+=t*r),s=a.parentNode,$.each(["height","paddingTop","paddingBottom","marginTop","marginBottom"],function(t,e){n+=parseFloat(i.CSS.getPropertyValue(a,e))})}),i.animate(s,{height:("In"===a?"+":"-")+"="+n},{queue:!1,easing:"ease-in-out",duration:e*("In"===a?.6:1)})}return i.Redirects[t]=function(n,s,o,l,c,u){function f(){s.display!==r&&"none"!==s.display||!/Out$/.test(t)||$.each(c.nodeType?[c]:c,function(t,a){i.CSS.setPropertyValue(a,"display","none")}),s.complete&&s.complete.call(c,c),u&&u.resolver(c||n)}var p=o===l-1;a.defaultDuration="function"==typeof a.defaultDuration?a.defaultDuration.call(c,c):parseFloat(a.defaultDuration);for(var d=0;d<a.calls.length;d++){var g=a.calls[d],y=g[0],m=s.duration||a.defaultDuration||1e3,X=g[1],Y=g[2]||{},O={};if(O.duration=m*(X||1),O.queue=s.queue||"",O.easing=Y.easing||"ease",O.delay=parseFloat(Y.delay)||0,O._cacheValues=Y._cacheValues||!0,0===d){if(O.delay+=parseFloat(s.delay)||0,0===o&&(O.begin=function(){s.begin&&s.begin.call(c,c);var a=t.match(/(In|Out)$/);a&&"In"===a[0]&&y.opacity!==r&&$.each(c.nodeType?[c]:c,function(t,a){i.CSS.setPropertyValue(a,"opacity",0)}),s.animateParentHeight&&a&&e(c,a[0],m+O.delay,s.stagger)}),null!==s.display)if(s.display!==r&&"none"!==s.display)O.display=s.display;else if(/In$/.test(t)){var v=i.CSS.Values.getDisplayType(n);O.display="inline"===v?"inline-block":v}s.visibility&&"hidden"!==s.visibility&&(O.visibility=s.visibility)}d===a.calls.length-1&&(O.complete=function(){if(a.reset){for(var t in a.reset){var e=a.reset[t];i.CSS.Hooks.registered[t]!==r||"string"!=typeof e&&"number"!=typeof e||(a.reset[t]=[a.reset[t],a.reset[t]])}var s={duration:0,queue:!1};p&&(s.complete=f),i.animate(n,a.reset,s)}else p&&f()},"hidden"===s.visibility&&(O.visibility=s.visibility)),i.animate(n,y,O)}},i},i.RegisterEffect.packagedEffects={"callout.bounce":{defaultDuration:550,calls:[[{translateY:-30},.25],[{translateY:0},.125],[{translateY:-15},.125],[{translateY:0},.25]]},"callout.shake":{defaultDuration:800,calls:[[{translateX:-11},.125],[{translateX:11},.125],[{translateX:-11},.125],[{translateX:11},.125],[{translateX:-11},.125],[{translateX:11},.125],[{translateX:-11},.125],[{translateX:0},.125]]},"callout.flash":{defaultDuration:1100,calls:[[{opacity:[0,"easeInOutQuad",1]},.25],[{opacity:[1,"easeInOutQuad"]},.25],[{opacity:[0,"easeInOutQuad"]},.25],[{opacity:[1,"easeInOutQuad"]},.25]]},"callout.pulse":{defaultDuration:825,calls:[[{scaleX:1.1,scaleY:1.1},.5,{easing:"easeInExpo"}],[{scaleX:1,scaleY:1},.5]]},"callout.swing":{defaultDuration:950,calls:[[{rotateZ:15},.2],[{rotateZ:-10},.2],[{rotateZ:5},.2],[{rotateZ:-5},.2],[{rotateZ:0},.2]]},"callout.tada":{defaultDuration:1e3,calls:[[{scaleX:.9,scaleY:.9,rotateZ:-3},.1],[{scaleX:1.1,scaleY:1.1,rotateZ:3},.1],[{scaleX:1.1,scaleY:1.1,rotateZ:-3},.1],["reverse",.125],["reverse",.125],["reverse",.125],["reverse",.125],["reverse",.125],[{scaleX:1,scaleY:1,rotateZ:0},.2]]},"transition.fadeIn":{defaultDuration:500,calls:[[{opacity:[1,0]}]]},"transition.fadeOut":{defaultDuration:500,calls:[[{opacity:[0,1]}]]},"transition.flipXIn":{defaultDuration:700,calls:[[{opacity:[1,0],transformPerspective:[800,800],rotateY:[0,-55]}]],reset:{transformPerspective:0}},"transition.flipXOut":{defaultDuration:700,calls:[[{opacity:[0,1],transformPerspective:[800,800],rotateY:55}]],reset:{transformPerspective:0,rotateY:0}},"transition.flipYIn":{defaultDuration:800,calls:[[{opacity:[1,0],transformPerspective:[800,800],rotateX:[0,-45]}]],reset:{transformPerspective:0}},"transition.flipYOut":{defaultDuration:800,calls:[[{opacity:[0,1],transformPerspective:[800,800],rotateX:25}]],reset:{transformPerspective:0,rotateX:0}},"transition.flipBounceXIn":{defaultDuration:900,calls:[[{opacity:[.725,0],transformPerspective:[400,400],rotateY:[-10,90]},.5],[{opacity:.8,rotateY:10},.25],[{opacity:1,rotateY:0},.25]],reset:{transformPerspective:0}},"transition.flipBounceXOut":{defaultDuration:800,calls:[[{opacity:[.9,1],transformPerspective:[400,400],rotateY:-10},.5],[{opacity:0,rotateY:90},.5]],reset:{transformPerspective:0,rotateY:0}},"transition.flipBounceYIn":{defaultDuration:850,calls:[[{opacity:[.725,0],transformPerspective:[400,400],rotateX:[-10,90]},.5],[{opacity:.8,rotateX:10},.25],[{opacity:1,rotateX:0},.25]],reset:{transformPerspective:0}},"transition.flipBounceYOut":{defaultDuration:800,calls:[[{opacity:[.9,1],transformPerspective:[400,400],rotateX:-15},.5],[{opacity:0,rotateX:90},.5]],reset:{transformPerspective:0,rotateX:0}},"transition.swoopIn":{defaultDuration:850,calls:[[{opacity:[1,0],transformOriginX:["100%","50%"],transformOriginY:["100%","100%"],scaleX:[1,0],scaleY:[1,0],translateX:[0,-700],translateZ:0}]],reset:{transformOriginX:"50%",transformOriginY:"50%"}},"transition.swoopOut":{defaultDuration:850,calls:[[{opacity:[0,1],transformOriginX:["50%","100%"],transformOriginY:["100%","100%"],scaleX:0,scaleY:0,translateX:-700,translateZ:0}]],reset:{transformOriginX:"50%",transformOriginY:"50%",scaleX:1,scaleY:1,translateX:0}},"transition.whirlIn":{defaultDuration:850,calls:[[{opacity:[1,0],transformOriginX:["50%","50%"],transformOriginY:["50%","50%"],scaleX:[1,0],scaleY:[1,0],rotateY:[0,160]},1,{easing:"easeInOutSine"}]]},"transition.whirlOut":{defaultDuration:750,calls:[[{opacity:[0,"easeInOutQuint",1],transformOriginX:["50%","50%"],transformOriginY:["50%","50%"],scaleX:0,scaleY:0,rotateY:160},1,{easing:"swing"}]],reset:{scaleX:1,scaleY:1,rotateY:0}},"transition.shrinkIn":{defaultDuration:750,calls:[[{opacity:[1,0],transformOriginX:["50%","50%"],transformOriginY:["50%","50%"],scaleX:[1,1.5],scaleY:[1,1.5],translateZ:0}]]},"transition.shrinkOut":{defaultDuration:600,calls:[[{opacity:[0,1],transformOriginX:["50%","50%"],transformOriginY:["50%","50%"],scaleX:1.3,scaleY:1.3,translateZ:0}]],reset:{scaleX:1,scaleY:1}},"transition.expandIn":{defaultDuration:700,calls:[[{opacity:[1,0],transformOriginX:["50%","50%"],transformOriginY:["50%","50%"],scaleX:[1,.625],scaleY:[1,.625],translateZ:0}]]},"transition.expandOut":{defaultDuration:700,calls:[[{opacity:[0,1],transformOriginX:["50%","50%"],transformOriginY:["50%","50%"],scaleX:.5,scaleY:.5,translateZ:0}]],reset:{scaleX:1,scaleY:1}},"transition.bounceIn":{defaultDuration:800,calls:[[{opacity:[1,0],scaleX:[1.05,.3],scaleY:[1.05,.3]},.4],[{scaleX:.9,scaleY:.9,translateZ:0},.2],[{scaleX:1,scaleY:1},.5]]},"transition.bounceOut":{defaultDuration:800,calls:[[{scaleX:.95,scaleY:.95},.35],[{scaleX:1.1,scaleY:1.1,translateZ:0},.35],[{opacity:[0,1],scaleX:.3,scaleY:.3},.3]],reset:{scaleX:1,scaleY:1}},"transition.bounceUpIn":{defaultDuration:800,calls:[[{opacity:[1,0],translateY:[-30,1e3]},.6,{easing:"easeOutCirc"}],[{translateY:10},.2],[{translateY:0},.2]]},"transition.bounceUpOut":{defaultDuration:1e3,calls:[[{translateY:20},.2],[{opacity:[0,"easeInCirc",1],translateY:-1e3},.8]],reset:{translateY:0}},"transition.bounceDownIn":{defaultDuration:800,calls:[[{opacity:[1,0],translateY:[30,-1e3]},.6,{easing:"easeOutCirc"}],[{translateY:-10},.2],[{translateY:0},.2]]},"transition.bounceDownOut":{defaultDuration:1e3,calls:[[{translateY:-20},.2],[{opacity:[0,"easeInCirc",1],translateY:1e3},.8]],reset:{translateY:0}},"transition.bounceLeftIn":{defaultDuration:750,calls:[[{opacity:[1,0],translateX:[30,-1250]},.6,{easing:"easeOutCirc"}],[{translateX:-10},.2],[{translateX:0},.2]]},"transition.bounceLeftOut":{defaultDuration:750,calls:[[{translateX:30},.2],[{opacity:[0,"easeInCirc",1],translateX:-1250},.8]],reset:{translateX:0}},"transition.bounceRightIn":{defaultDuration:750,calls:[[{opacity:[1,0],translateX:[-30,1250]},.6,{easing:"easeOutCirc"}],[{translateX:10},.2],[{translateX:0},.2]]},"transition.bounceRightOut":{defaultDuration:750,calls:[[{translateX:-30},.2],[{opacity:[0,"easeInCirc",1],translateX:1250},.8]],reset:{translateX:0}},"transition.slideUpIn":{defaultDuration:900,calls:[[{opacity:[1,0],translateY:[0,20],translateZ:0}]]},"transition.slideUpOut":{defaultDuration:900,calls:[[{opacity:[0,1],translateY:-20,translateZ:0}]],reset:{translateY:0}},"transition.slideDownIn":{defaultDuration:900,calls:[[{opacity:[1,0],translateY:[0,-20],translateZ:0}]]},"transition.slideDownOut":{defaultDuration:900,calls:[[{opacity:[0,1],translateY:20,translateZ:0}]],reset:{translateY:0}},"transition.slideLeftIn":{defaultDuration:1e3,calls:[[{opacity:[1,0],translateX:[0,-20],translateZ:0}]]},"transition.slideLeftOut":{defaultDuration:1050,calls:[[{opacity:[0,1],translateX:-20,translateZ:0}]],reset:{translateX:0}},"transition.slideRightIn":{defaultDuration:1e3,calls:[[{opacity:[1,0],translateX:[0,20],translateZ:0}]]},"transition.slideRightOut":{defaultDuration:1050,calls:[[{opacity:[0,1],translateX:20,translateZ:0}]],reset:{translateX:0}},"transition.slideUpBigIn":{defaultDuration:850,calls:[[{opacity:[1,0],translateY:[0,75],translateZ:0}]]},"transition.slideUpBigOut":{defaultDuration:800,calls:[[{opacity:[0,1],translateY:-75,translateZ:0}]],reset:{translateY:0}},"transition.slideDownBigIn":{defaultDuration:850,calls:[[{opacity:[1,0],translateY:[0,-75],translateZ:0}]]},"transition.slideDownBigOut":{defaultDuration:800,calls:[[{opacity:[0,1],translateY:75,translateZ:0}]],reset:{translateY:0}},"transition.slideLeftBigIn":{defaultDuration:800,calls:[[{opacity:[1,0],translateX:[0,-75],translateZ:0}]]},"transition.slideLeftBigOut":{defaultDuration:750,calls:[[{opacity:[0,1],translateX:-75,translateZ:0}]],reset:{translateX:0}},"transition.slideRightBigIn":{defaultDuration:800,calls:[[{opacity:[1,0],translateX:[0,75],translateZ:0}]]},"transition.slideRightBigOut":{defaultDuration:750,calls:[[{opacity:[0,1],translateX:75,translateZ:0}]],reset:{translateX:0}},"transition.perspectiveUpIn":{defaultDuration:800,calls:[[{opacity:[1,0],transformPerspective:[800,800],transformOriginX:[0,0],transformOriginY:["100%","100%"],rotateX:[0,-180]}]],reset:{transformPerspective:0,transformOriginX:"50%",transformOriginY:"50%"}},"transition.perspectiveUpOut":{defaultDuration:850,calls:[[{opacity:[0,1],transformPerspective:[800,800],transformOriginX:[0,0],transformOriginY:["100%","100%"],rotateX:-180}]],reset:{transformPerspective:0,transformOriginX:"50%",transformOriginY:"50%",rotateX:0}},"transition.perspectiveDownIn":{defaultDuration:800,calls:[[{opacity:[1,0],transformPerspective:[800,800],transformOriginX:[0,0],transformOriginY:[0,0],rotateX:[0,180]}]],reset:{transformPerspective:0,transformOriginX:"50%",transformOriginY:"50%"}},"transition.perspectiveDownOut":{defaultDuration:850,calls:[[{opacity:[0,1],transformPerspective:[800,800],transformOriginX:[0,0],transformOriginY:[0,0],rotateX:180}]],reset:{transformPerspective:0,transformOriginX:"50%",transformOriginY:"50%",rotateX:0}},"transition.perspectiveLeftIn":{defaultDuration:950,calls:[[{opacity:[1,0],transformPerspective:[2e3,2e3],transformOriginX:[0,0],transformOriginY:[0,0],rotateY:[0,-180]}]],reset:{transformPerspective:0,transformOriginX:"50%",transformOriginY:"50%"}},"transition.perspectiveLeftOut":{defaultDuration:950,calls:[[{opacity:[0,1],transformPerspective:[2e3,2e3],transformOriginX:[0,0],transformOriginY:[0,0],rotateY:-180}]],reset:{transformPerspective:0,transformOriginX:"50%",transformOriginY:"50%",rotateY:0}},"transition.perspectiveRightIn":{defaultDuration:950,calls:[[{opacity:[1,0],transformPerspective:[2e3,2e3],transformOriginX:["100%","100%"],transformOriginY:[0,0],rotateY:[0,180]}]],reset:{transformPerspective:0,transformOriginX:"50%",transformOriginY:"50%"}},"transition.perspectiveRightOut":{defaultDuration:950,calls:[[{opacity:[0,1],transformPerspective:[2e3,2e3],transformOriginX:["100%","100%"],transformOriginY:[0,0],rotateY:180}]],reset:{transformPerspective:0,transformOriginX:"50%",transformOriginY:"50%",rotateY:0}}};for(var c in i.RegisterEffect.packagedEffects)i.RegisterEffect(c,i.RegisterEffect.packagedEffects[c]);i.RunSequence=function(t){var a=$.extend(!0,[],t);a.length>1&&($.each(a.reverse(),function(t,e){var r=a[t+1];if(r){var n=e.o||e.options,s=r.o||r.options,o=n&&n.sequenceQueue===!1?"begin":"complete",l=s&&s[o],c={};c[o]=function(){var t=r.e||r.elements,a=t.nodeType?[t]:t;l&&l.call(a,a),i(e)},r.o?r.o=$.extend({},s,c):r.options=$.extend({},s,c)}}),a.reverse()),i(a[0])}}(window.jQuery||window.Zepto||window,window,document)});;!;;!function(a,b,c,d){function e(b,c){b.owlCarousel={name:"Owl Carousel",author:"Bartosz Wojciechowski",version:"2.0.0-beta.2.1"},this.settings=null,this.options=a.extend({},e.Defaults,c),this.itemData=a.extend({},l),this.dom=a.extend({},m),this.width=a.extend({},n),this.num=a.extend({},o),this.drag=a.extend({},q),this.state=a.extend({},r),this.e=a.extend({},s),this.plugins={},this._supress={},this._current=null,this._speed=null,this._coordinates=null,this.dom.el=b,this.dom.$el=a(b);for(var d in e.Plugins)this.plugins[d[0].toLowerCase()+d.slice(1)]=new e.Plugins[d](this);this.init()}nction h(){return f(["transform","WebkitTransform","MozTransform","OTransform","msTransform"])[0]} l,m,n,o,p,q,r,s;l={index:!1,indexAbs:!1,posLeft:!1,clone:!1,active:!1,loaded:!1,lazyLoad:!1,current:!1,width:!1,center:!1,page:!1,hasVideo:!1,playVideo:!1},m={el:null,$el:null,stage:null,$stage:null,oStage:null,$oStage:null,$items:null,$oItems:null,$cItems:null,$content:null},n={el:0,stage:0,item:0,prevWindow:0,cloneLast:0},o={items:0,oItems:0,cItems:0,active:0,merged:[]},q={start:0,startX:0,startY:0,current:0,currentX:0,currentY:0,offsetX:0,offsetY:0,distance:null,startTime:0,endTime:0,updatedX:0,targetEl:null},r={isTouch:!1,isScrolling:!1,isSwiping:!1,direction:!1,inMotion:!1},s={_onDragStart:null,_onDragMove:null,_onDragEnd:null,_transitionEnd:null,_resizer:null,_responsiveCall:null,_goToLoop:null,_checkVisibile:null},e.Defaults={items:3,loop:!1,center:!1,mouseDrag:!0,touchDrag:!0,pullDrag:!0,freeDrag:!1,margin:0,stagePadding:0,merge:!1,mergeFit:!0,autoWidth:!1,startPosition:0,smartSpeed:250,fluidSpeed:!1,dragEndSpeed:!1,responsive:{},responsiveRefreshRate:200,responsiveBaseElement:b,responsiveClass:!1,fallbackEasing:"swing",info:!1,nestedItemSelector:!1,itemElement:"div",stageElement:"div",themeClass:"owl-theme",baseClass:"owl-carousel",itemClass:"owl-item",centerClass:"center",activeClass:"active"},e.Plugins={},e.prototype.init=function(){if(this.setResponsiveOptions(),this.trigger("initialize"),this.dom.$el.hasClass(this.settings.baseClass)||this.dom.$el.addClass(this.settings.baseClass),this.dom.$el.hasClass(this.settings.themeClass)||this.dom.$el.addClass(this.settings.themeClass),this.settings.rtl&&this.dom.$el.addClass("owl-rtl"),this.browserSupport(),this.settings.autoWidth&&this.state.imagesLoaded!==!0){var a,b,c;if(a=this.dom.$el.find("img"),b=this.settings.nestedItemSelector?"."+this.settings.nestedItemSelector:d,c=this.dom.$el.children(b).width(),a.length&&0>=c)return this.preloadAutoWidthImages(a),!1}this.width.prevWindow=this.viewport(),this.createStage(),this.fetchContent(),this.eventsCall(),this.internalEvents(),this.dom.$el.addClass("owl-loading"),this.refresh(!0),this.dom.$el.removeClass("owl-loading").addClass("owl-loaded"),this.trigger("initialized"),this.addTriggerableEvents()},e.prototype.setResponsiveOptions=function(){if(this.options.responsive){var b=this.viewport(),c=this.options.responsive,d=-1;a.each(c,,this.settings=a.extend({},this.options,c[d]),delete this.settings.responsive,this.settings.responsiveClass&&this.dom.$el.attr("class",.addClass("owl-responsive-"+d)}else this.settings=a.extend({},this.options)},e.prototype.optionsLogic=function(){this.dom.$el.toggleClass("owl-center",this.settings.center),this.settings.loop&&this.num.oItems<this.settings.items&&(this.settings.loop=!1),this.settings.autoWidth&&(this.settings.stagePadding=!1,this.settings.merge=!1)},e.prototype.createStage=function(){var b=c.createElement("div"),d=c.createElement(this.settings.stageElement);b.className="owl-stage-outer",d.className="owl-stage",b.appendChild(d),this.dom.el.appendChild(b),this.dom.oStage=b,this.dom.$oStage=a(b),this.dom.stage=d,this.dom.$stage=a(d),b=null,d=null},e.prototype.createItemContainer=function(){var b=c.createElement(this.settings.itemElement);return b.className=this.settings.itemClass,a(b)},e.prototype.fetchContent=function(b){this.dom.$content=b?b instanceof jQuery?b:a(b):this.settings.nestedItemSelector?this.dom.$el.find("."+this.settings.nestedItemSelector).not(".owl-stage-outer"):this.dom.$el.children().not(".owl-stage-outer"),this.num.oItems=this.dom.$content.length,0!==this.num.oItems&&this.initStructure()},e.prototype.initStructure=function(){this.createNormalStructure()},e.prototype.createNormalStructure=function(){var a,b;for(a=0;a<this.num.oItems;a++)b=this.createItemContainer(),this.initializeItemContainer(b,this.dom.$content[a]),this.dom.$stage.append(b);this.dom.$content=null},e.prototype.createCustomStructure=function(a){var b,c;for(b=0;a>b;b++)c=this.createItemContainer(),this.createItemContainerData(c),this.dom.$stage.append(c)},e.prototype.initializeItemContainer=function(a,b){this.trigger("change",{property:{name:"item",value:a}}),this.createItemContainerData(a),a.append(b),this.trigger("changed",{property:{name:"item",value:a}})},e.prototype.createItemContainerData=function(b,c){var d=a.extend({},this.itemData);c&&a.extend(d,c.data("owl-item")),b.data("owl-item",d)},e.prototype.cloneItemContainer=function(a){var b=a.clone(!0,!0).addClass("cloned");return this.createItemContainerData(b,b),b.data("owl-item").clone=!0,b},e.prototype.updateLocalContent=function(){var b,c;for(this.dom.$oItems=this.dom.$stage.find("."+this.settings.itemClass).filter(function(){return a(this).data("owl-item").clone===!1}),this.num.oItems=this.dom.$oItems.length,b=0;b<this.num.oItems;b++)c=this.dom.$oItems.eq(b),c.data("owl-item").index=b},e.prototype.loopClone=function(){if(!this.settings.loop||this.num.oItems<this.settings.items)return!1;var b,c,d,e=this.settings.items,f=this.num.oItems-1;for(this.settings.stagePadding&&1===this.settings.items&&(e+=1),this.num.cItems=2*e,d=0;e>d;d++)b=this.cloneItemContainer(this.dom.$oItems.eq(d)),c=this.cloneItemContainer(this.dom.$oItems.eq(f-d)),this.dom.$stage.append(b),this.dom.$stage.prepend(c);this.dom.$cItems=this.dom.$stage.find("."+this.settings.itemClass).filter(function(){return a(this).data("owl-item").clone===!0})},e.prototype.reClone=function(){null!==this.dom.$cItems&&(this.dom.$cItems.remove(),this.dom.$cItems=null,this.num.cItems=0),this.settings.loop&&this.loopClone()},e.prototype.calculate=function(){var a,b,c,d,e,f,g,h=0,i=0;for(this.width.el=this.dom.$el.width()-2*this.settings.stagePadding,this.width.view=this.dom.$el.width(),c=this.width.el-this.settings.margin*(1===this.settings.items?0:this.settings.items-1),this.width.el=this.width.el+this.settings.margin,this.width.item=(c/this.settings.items+this.settings.margin).toFixed(3),this.dom.$items=this.dom.$stage.find(".owl-item"),this.num.items=this.dom.$items.length,this.settings.autoWidth&&this.dom.$items.css("width",""),this._coordinates=[],this.num.merged=[],d=this.settings.rtl?this.settings.center?-(this.width.el/2):0:this.settings.center?this.width.el/2:0,this.width.mergeStage=0,a=0;a<this.num.items;a++)this.settings.merge?(g=this.dom.$items.eq(a).find("[data-merge]").attr("data-merge")||1,this.settings.mergeFit&&g>this.settings.items&&(g=this.settings.items),this.num.merged.push(parseInt(g)),this.width.mergeStage+=this.width.item*this.num.merged[a]):this.num.merged.push(1),f=this.width.item*this.num.merged[a],this.settings.autoWidth&&(f=this.dom.$items.eq(a).width()+this.settings.margin,this.settings.rtl?this.dom.$items[a].style.marginLeft=this.settings.margin+"px":this.dom.$items[a].style.marginRight=this.settings.margin+"px"),this._coordinates.push(d),this.dom.$items.eq(a).data("owl-item").posLeft=h,this.dom.$items.eq(a).data("owl-item").width=f,this.settings.rtl?(d+=f,h+=f):(d-=f,h-=f),i-=Math.abs(f),this.settings.center&&(this._coordinates[a]=this.settings.rtl?this._coordinates[a]+f/2:this._coordinates[a]-f/2);for(this.width.stage=Math.abs(this.settings.autoWidth?this.settings.center?i:d:i),e=this.num.oItems+this.num.cItems,b=0;e>b;b++)this.dom.$items.eq(b).data("owl-item").indexAbs=b;this.setSizes()},e.prototype.setSizes=function(){this.settings.stagePadding!==!1&&(this.dom.oStage.style.paddingLeft=this.settings.stagePadding+"px",this.dom.oStage.style.paddingRight=this.settings.stagePadding+"px"),this.settings.rtl?b.setTimeout(a.proxy(this),0):this.dom.stage.style.width=this.width.stage+"px";for(var c=0;c<this.num.items;c++)this.settings.autoWidth||(this.dom.$items[c].style.width=this.width.item-this.settings.margin+"px"),this.settings.rtl?this.dom.$items[c].style.marginLeft=this.settings.margin+"px":this.dom.$items[c].style.marginRight=this.settings.margin+"px",1===this.num.merged[c]||this.settings.autoWidth||(this.dom.$items[c].style.width=this.width.item*this.num.merged[c]-this.settings.margin+"px");this.width.stagePrev=this.width.stage},e.prototype.responsive=function(){if(!this.num.oItems)return!1;var a=this.isElWidthChanged();return a?this.trigger("resize").isDefaultPrevented()?!1:(this.state.responsive=!0,this.refresh(),this.state.responsive=!1,void this.trigger("resized")):!1},e.prototype.refresh=function(){var a=this.dom.$oItems&&this.dom.$oItems.eq(this.normalize(this.current(),!0));return this.trigger("refresh"),this.setResponsiveOptions(),this.updateLocalContent(),this.optionsLogic(),0===this.num.oItems?!1:(this.dom.$stage.addClass("owl-refresh"),this.reClone(),this.calculate(),this.dom.$stage.removeClass("owl-refresh"),a?this.reset(a.data("owl-item").indexAbs):(this.dom.oStage.scrollLeft=0,this.reset(this.dom.$oItems.eq(0).data("owl-item").indexAbs)),this.state.orientation=b.orientation,this.watchVisibility(),void this.trigger("refreshed"))},e.prototype.updateActiveItems=function(){this.trigger("change",{property:{name:"items",value:this.dom.$items}});var a,b,c,d,e,f;for(a=0;a<this.num.items;a++)this.dom.$items.eq(a).data("owl-item").active=!1,this.dom.$items.eq(a).data("owl-item").current=!1,this.dom.$items.eq(a).removeClass(this.settings.activeClass).removeClass(this.settings.centerClass);for(this.num.active=0,padding=2*this.settings.stagePadding,stageX=this.coordinates(this.current())+padding,view=this.settings.rtl?this.width.view:-this.width.view,b=0;b<this.num.items;b++)c=this.dom.$items.eq(b),d=c.data("owl-item").posLeft,e=c.data("owl-item").width,f=this.settings.rtl?d-e-padding:d-e+padding,(this.op(d,"<=",stageX)&&this.op(d,">",stageX+view)||this.op(f,"<",stageX)&&this.op(f,">",stageX+view))&&(this.num.active++,c.data("owl-item").active=!0,c.data("owl-item").current=!0,c.addClass(this.settings.activeClass),this.settings.lazyLoad||(c.data("owl-item").loaded=!0),this.settings.loop&&this.updateClonedItemsState(c.data("owl-item").index));this.settings.center&&(this.dom.$items.eq(this.current()).addClass(this.settings.centerClass).data("owl-item").center=!0),this.trigger("changed",{property:{name:"items",value:this.dom.$items}})},e.prototype.updateClonedItemsState=function(a){var b,c,d;for(this.settings.center&&(b=this.dom.$items.eq(this.current()).data("owl-item").index),d=0;d<this.num.items;d++)c=this.dom.$items.eq(d),c.data("owl-item").index===a&&(c.data("owl-item").current=!0,c.data("owl-item").index===b&&c.addClass(this.settings.centerClass))},e.prototype.eventsCall=function(){this.e._onDragStart=a.proxy(function(a){this.onDragStart(a)},this),this.e._onDragMove=a.proxy(function(a){this.onDragMove(a)},this),this.e._onDragEnd=a.proxy(function(a){this.onDragEnd(a)},this),this.e._transitionEnd=a.proxy(function(a){this.transitionEnd(a)},this),this.e._resizer=a.proxy(function(){this.responsiveTimer()},this),this.e._responsiveCall=a.proxy(this),this.e._preventClick=a.proxy(this)},e.prototype.responsiveTimer=function(){return this.viewport()===this.width.prevWindow?!1:(b.clearTimeout(this.resizeTimer),this.resizeTimer=b.setTimeout(this.e._responsiveCall,this.settings.responsiveRefreshRate),void(this.width.prevWindow=this.viewport()))},e.prototype.internalEvents=function(){var a=j(),d=k();this.dragType=a&&!d?["touchstart","touchmove","touchend","touchcancel"]:a&&d?["MSPointerDown","MSPointerMove","MSPointerUp","MSPointerCancel"]:["mousedown","mousemove","mouseup"],(a||d)&&this.settings.touchDrag?this.on(c,this.dragType[3],this.e._onDragEnd):(this.dom.$stage.on("dragstart",function(){return!1}),this.settings.mouseDrag?this.dom.stage.onselectstart=function(){return!1}:this.dom.$el.addClass("owl-text-select-on")),this.transitionEndVendor&&this.on(this.dom.stage,this.transitionEndVendor,this.e._transitionEnd,!1),this.settings.responsive!==!1&&this.on(b,"resize",this.e._resizer,!1),this.dragEvents()},e.prototype.dragEvents=function(){!this.settings.touchDrag||"touchstart"!==this.dragType[0]&&"MSPointerDown"!==this.dragType[0]?this.settings.mouseDrag&&"mousedown"===this.dragType[0]?this.on(this.dom.stage,this.dragType[0],this.e._onDragStart,!1):this.off(this.dom.stage,this.dragType[0],this.e._onDragStart):this.on(this.dom.stage,this.dragType[0],this.e._onDragStart,!1)},e.prototype.onDragStart=function(a){var d,e,f,g,h;if(d=a.originalEvent||a||b.event,3===d.which)return!1;if("mousedown"===this.dragType[0]&&this.dom.$stage.addClass("owl-grab"),this.trigger("drag"),this.drag.startTime=(new Date).getTime(),this.speed(0),this.state.isTouch=!0,this.state.isScrolling=!1,this.state.isSwiping=!1,this.drag.distance=0,e="touchstart"===d.type,f=e?a.targetTouches[0].pageX:d.pageX||d.clientX,g=e?a.targetTouches[0].pageY:d.pageY||d.clientY,this.drag.offsetX=this.dom.$stage.position().left-this.settings.stagePadding,this.drag.offsetY=this.dom.$stage.position().top,this.settings.rtl&&(this.drag.offsetX=this.dom.$stage.position().left+this.width.stage-this.width.el+this.settings.margin),this.state.inMotion&&this.support3d)h=this.getTransformProperty(),this.drag.offsetX=h,this.animate(h),this.state.inMotion=!0;else if(this.state.inMotion&&!this.support3d)return this.state.inMotion=!1,!1;this.drag.startX=f-this.drag.offsetX,this.drag.startY=g-this.drag.offsetY,this.drag.start=f-this.drag.startX,this.drag.targetEl=d.target||d.srcElement,this.drag.updatedX=this.drag.start,("IMG"===this.drag.targetEl.tagName||"A"===this.drag.targetEl.tagName)&&(this.drag.targetEl.draggable=!1),this.on(c,this.dragType[1],this.e._onDragMove,!1),this.on(c,this.dragType[2],this.e._onDragEnd,!1)},e.prototype.onDragMove=function(a){var c,e,f,g,h,i,j;this.state.isTouch&&(this.state.isScrolling||(c=a.originalEvent||a||b.event,e="touchmove"==c.type,f=e?c.targetTouches[0].pageX:c.pageX||c.clientX,g=e?c.targetTouches[0].pageY:c.pageY||c.clientY,this.drag.currentX=f-this.drag.startX,this.drag.currentY=g-this.drag.startY,this.drag.distance=this.drag.currentX-this.drag.offsetX,this.drag.distance<0?this.state.direction=this.settings.rtl?"right":"left":this.drag.distance>0&&(this.state.direction=this.settings.rtl?"left":"right"),this.settings.loop?this.op(this.drag.currentX,">",this.coordinates(this.minimum()))&&"right"===this.state.direction?this.drag.currentX-=(this.settings.center&&this.coordinates(0))-this.coordinates(this.num.oItems):this.op(this.drag.currentX,"<",this.coordinates(this.maximum()))&&"left"===this.state.direction&&(this.drag.currentX+=(this.settings.center&&this.coordinates(0))-this.coordinates(this.num.oItems)):(h=this.coordinates(this.settings.rtl?this.maximum():this.minimum()),i=this.coordinates(this.settings.rtl?this.minimum():this.maximum()),j=this.settings.pullDrag?this.drag.distance/5:0,this.drag.currentX=Math.max(Math.min(this.drag.currentX,h+j),i+j)),(this.drag.distance>8||this.drag.distance<-8)&&(c.preventDefault!==d?c.preventDefault():c.returnValue=!1,this.state.isSwiping=!0),this.drag.updatedX=this.drag.currentX,(this.drag.currentY>16||this.drag.currentY<-16)&&this.state.isSwiping===!1&&(this.state.isScrolling=!0,this.drag.updatedX=this.drag.start),this.animate(this.drag.updatedX)))},e.prototype.onDragEnd=function(){var a,b,d;if(this.state.isTouch){if("mousedown"===this.dragType[0]&&this.dom.$stage.removeClass("owl-grab"),this.trigger("dragged"),this.drag.targetEl.removeAttribute("draggable"),this.state.isTouch=!1,this.state.isScrolling=!1,this.state.isSwiping=!1,0===this.drag.distance&&this.state.inMotion!==!0)return this.state.inMotion=!1,!1;this.drag.endTime=(new Date).getTime(),a=this.drag.endTime-this.drag.startTime,b=Math.abs(this.drag.distance),(b>3||a>300)&&this.removeClick(this.drag.targetEl),d=this.closest(this.drag.updatedX),this.speed(this.settings.dragEndSpeed||this.settings.smartSpeed),this.current(d),this.settings.pullDrag||this.drag.updatedX!==this.coordinates(d)||this.transitionEnd(),this.drag.distance=0,this.off(c,this.dragType[1],this.e._onDragMove),this.off(c,this.dragType[2],this.e._onDragEnd)}},e.prototype.removeClick=e.prototype.preventClick=e.prototype.getTransformProperty=function(){var a,c;return a=b.getComputedStyle(this.dom.stage,null).getPropertyValue(this.vendorName+"transform"),a=a.replace(/matrix(3d)?\(|\)/g,"").split(","),c=16===a.length,c!==!0?a[4]:a[12]},e.prototype.closest=function(b){var c=0,d=30;return this.settings.freeDrag||a.each(this.coordinates(),a.proxy(function(a,e){b>e-d&&e+d>b?c=a:this.op(b,"<",e)&&this.op(b,">",this.coordinates(a+1)||e-this.width.el)&&(c="left"===this.state.direction?a+1:a)},this)),this.settings.loop||(this.op(b,">",this.coordinates(this.minimum()))?c=b=this.minimum():this.op(b,"<",this.coordinates(this.maximum()))&&(c=b=this.maximum())),c},e.prototype.animate=function(b){this.trigger("translate"),this.state.inMotion=this.speed()>0,this.support3d?this.dom.$stage.css({transform:"translate3d("+b+"px,0px, 0px)",transition:this.speed()/1e3+"s"}):this.state.isTouch?this.dom.$stage.css({left:b+"px"}):this.dom.$stage.animate({left:b},this.speed()/1e3,this.settings.fallbackEasing,a.proxy(this))},e.prototype.current=function(a){if(a===d)return this._current;if(0===this.num.oItems)return d;if(a=this.normalize(a),this._current===a)this.animate(this.coordinates(this._current));else{var b=this.trigger("change",{property:{name:"position",value:a}});b.data!==d&&(a=this.normalize(b.data)),this._current=a,this.animate(this.coordinates(this._current)),this.updateActiveItems(),this.trigger("changed",{property:{name:"position",value:this._current}})}return this._current},e.prototype.reset=function(a){this.suppress(["change","changed"]),this.speed(0),this.current(a),this.release(["change","changed"])},e.prototype.normalize=function(a,b){if(a===d||!this.dom.$items)return d;if(this.settings.loop){var c=this.dom.$items.length;a=(a%c+c)%c}else a=Math.max(this.minimum(),Math.min(this.maximum(),a));return b?this.dom.$items.eq(a).data("owl-item").index:a},e.prototype.maximum=function(){var b,c,d=this.settings;if(!d.loop&&d.center)b=this.num.oItems-1;else if(d.loop||d.center)if(d.loop||d.center)b=this.num.oItems+d.items;else{if(!d.autoWidth&&!d.merge)throw"Can not detect maximum absolute position.";revert=d.rtl?1:-1,c=this.dom.$stage.width()-this.$el.width(),a.each(this.coordinates(),function(a,d){return d*revert>=c?!1:void(b=a+1)})}else b=this.num.oItems-d.items;return b},e.prototype.minimum=function(){return this.dom.$oItems.eq(0).data("owl-item").indexAbs},e.prototype.speed=e.prototype.coordinates=e.prototype.duration=e.prototype.to=function(c,d){if(this.settings.loop){var e=c-this.normalize(this.current(),!0),f=this.current(),g=this.current(),h=this.current()+e,i=0>g-h?!0:!1;h<this.settings.items&&i===!1?(f=this.num.items-(this.settings.items-g)-this.settings.items,this.reset(f)):h>=this.num.items-this.settings.items&&i===!0&&(f=g-this.num.oItems,this.reset(f)),b.clearTimeout(this.e._goToLoop),this.e._goToLoop=b.setTimeout(a.proxy(function(){this.speed(this.duration(this.current(),f+e,d)),this.current(f+e)},this),30)}else this.speed(this.duration(this.current(),c,d)),this.current(c)},e.prototype.next=function(a){a=a||!1,this.to(this.normalize(this.current(),!0)+1,a)},e.prototype.prev=function(a){a=a||!1,this.to(this.normalize(this.current(),!0)-1,a)},e.prototype.transitionEnd=function(a){if(a!==d){a.stopPropagation();var b=a.target||a.srcElement||a.originalTarget;if(b!==this.dom.stage)return!1}this.state.inMotion=!1,this.trigger("translated")},e.prototype.isElWidthChanged=function(){var a=this.dom.$el.width()-this.settings.stagePadding,b=this.width.el+this.settings.margin;return a!==b},e.prototype.viewport=e.prototype.insertContent=function(a){this.dom.$stage.empty(),this.fetchContent(a),this.refresh()},e.prototype.addItem=function(a,b){var c=this.createItemContainer();b=b||0,this.initializeItemContainer(c,a),0===this.dom.$oItems.length?this.dom.$stage.append(c):-1!==p?this.dom.$oItems.eq(b).before(c):this.dom.$oItems.eq(b).after(c),this.refresh()},e.prototype.removeItem=function(a){this.dom.$oItems.eq(a).remove(),this.refresh()},e.prototype.addTriggerableEvents=function(){var b=a.proxy(this);a.each({next:this.next,prev:this.prev,to:this.to,destroy:this.destroy,refresh:this.refresh,replace:this.insertContent,add:this.addItem,remove:this.removeItem},a.proxy(function(a,c){this.dom.$el.on(a+".owl.carousel",b(c,a+".owl.carousel"))},this))},e.prototype.watchVisibility=function(){unction d(){c(this.dom.el)&&(this.dom.$el.removeClass("owl-hidden"),this.refresh(),b.clearInterval(this.e._checkVisibile))}c(this.dom.el)||(this.dom.$el.addClass("owl-hidden"),b.clearInterval(this.e._checkVisibile),this.e._checkVisibile=b.setInterval(a.proxy(d,this),500))},e.prototype.preloadAutoWidthImages=e.prototype.destroy=function(){this.dom.$el.hasClass(this.settings.themeClass)&&this.dom.$el.removeClass(this.settings.themeClass),this.settings.responsive!==!1&&this.off(b,"resize",this.e._resizer),this.transitionEndVendor&&this.off(this.dom.stage,this.transitionEndVendor,this.e._transitionEnd);for(var a in this.plugins)this.plugins[a].destroy();(this.settings.mouseDrag||this.settings.touchDrag)&&(this.off(this.dom.stage,this.dragType[0],this.e._onDragStart),this.settings.mouseDrag&&this.off(c,this.dragType[3],this.e._onDragStart),this.settings.mouseDrag&&(this.dom.$stage.off("dragstart",function(){return!1}),this.dom.stage.onselectstart=function(){})),this.dom.$el.off(".owl"),null!==this.dom.$cItems&&this.dom.$cItems.remove(),this.e=null,this.dom.$el.data("owlCarousel",null),delete this.dom.el.owlCarousel,this.dom.$stage.unwrap(),this.dom.$items.unwrap(),this.dom.$items.contents().unwrap(),this.dom=null},e.prototype.op=e.prototype.on=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,d):a.attachEvent&&a.attachEvent("on"+b,c)},e.prototype.off=e.prototype.trigger=function(b,c,d){var e={item:{count:this.num.oItems,index:this.current()}},f=a.camelCase(a.grep(["on",b,d],function(a){return a}).join("-").toLowerCase()),g=a.Event([b,"owl",d||"carousel"].join(".").toLowerCase(),a.extend({relatedTarget:this},e,c));return this._supress[g.type]||(a.each(this.plugins,,this.dom.$el.trigger(g),"function"==typeof this.settings[f]&&this.settings[f].apply(this,g)),g},e.prototype.suppress=e.prototype.release=e.prototype.browserSupport=a.fn.owlCarousel=a.fn.owlCarousel.Constructor=e}(window.Zepto||window.jQuery,window,document),function(a,b){LazyLoad=function(b){this.owl=b,this.owl.options=a.extend({},LazyLoad.Defaults,this.owl.options),this.handlers={"changed.owl.carousel":a.proxy(function(a){"items"==a.property.name&&a.property.value&&!a.property.value.is(":empty")&&this.check()},this)},this.owl.dom.$el.on(this.handlers)},LazyLoad.Defaults={lazyLoad:!1},LazyLoad.prototype.check=function(){var a,c,d,e,f=b.devicePixelRatio>1?"data-src-retina":"data-src";for(d=0;d<this.owl.num.items;d++)e=this.owl.dom.$items.eq(d),e.data("owl-item").current===!0&&e.data("owl-item").loaded===!1&&(c=e.find(".owl-lazy"),a=c.attr(f),a=a||c.attr("data-src"),a&&(c.css("opacity","0"),this.preload(c,e)))},LazyLoad.prototype.preload=function(c,d){var e,f,g;c.each(a.proxy(function(c,h){this.owl.trigger("load",null,"lazy"),e=a(h),f=new Image,g=e.attr(b.devicePixelRatio>1?"data-src-retina":"data-src"),g=g||e.attr("data-src"),f.onload=a.proxy(function(){d.data("owl-item").loaded=!0,e.is("img")?e.attr("src",f.src):e.css("background-image","url("+f.src+")"),e.css("opacity",1),this.owl.trigger("loaded",null,"lazy")},this),f.src=g},this))},LazyLoad.prototype.destroy=function(){var a,b;for(a in this.handlers)this.owl.dom.$el.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.lazyLoad=LazyLoad}(window.Zepto||window.jQuery,window,document),function(a,b){AutoHeight=function(b){this.owl=b,this.owl.options=a.extend({},AutoHeight.Defaults,this.owl.options),this.handlers={"changed.owl.carousel":a.proxy(function(a){"position"==a.property.name&&this.owl.settings.autoHeight&&this.setHeight()},this)},this.owl.dom.$el.on(this.handlers)},AutoHeight.Defaults={autoHeight:!1,autoHeightClass:"owl-height"},AutoHeight.prototype.setHeight=function(){var a,c=this.owl.dom.$items.eq(this.owl.current()),d=this.owl.dom.$oStage,e=0;this.owl.dom.$oStage.hasClass(this.owl.settings.autoHeightClass)||this.owl.dom.$oStage.addClass(this.owl.settings.autoHeightClass),a=b.setInterval(function(){e+=1,c.data("owl-item").loaded?(d.height(c.height()+"px"),clearInterval(a)):500===e&&clearInterval(a)},100)},AutoHeight.prototype.destroy=function(){var a,b;for(a in this.handlers)this.owl.dom.$el.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.autoHeight=AutoHeight}(window.Zepto||window.jQuery,window,document),function(a,b,c){Video=function(b){this.owl=b,this.owl.options=a.extend({},Video.Defaults,this.owl.options),this.handlers={"resize.owl.carousel":a.proxy(this),"refresh.owl.carousel changed.owl.carousel":a.proxy(function(){this.owl.state.videoPlay&&this.stopVideo()},this),"refresh.owl.carousel refreshed.owl.carousel":a.proxy(function(a){return this.owl.settings.video?void(this.refreshing="refresh"==a.type):!1},this),"changed.owl.carousel":a.proxy(function(a){this.refreshing&&"items"==a.property.name&&a.property.value&&!a.property.value.is(":empty")&&this.checkVideoLinks()},this)},this.owl.dom.$el.on(this.handlers),this.owl.dom.$el.on("click.owl.video",".owl-video-play-icon",a.proxy(function(a){this.playVideo(a)},this))},Video.Defaults={video:!1,videoHeight:!1,videoWidth:!1},Video.prototype.checkVideoLinks=function(){var a,b,c;for(c=0;c<this.owl.num.items;c++)b=this.owl.dom.$items.eq(c),b.data("owl-item").hasVideo||(a=b.find(".owl-video"),a.length&&(this.owl.state.hasVideos=!0,this.owl.dom.$items.eq(c).data("owl-item").hasVideo=!0,a.css("display","none"),this.getVideoInfo(a,b)))},Video.prototype.getVideoInfo=function(a,b){var c,d,e,f,g=a.data("vimeo-id"),h=a.data("youtube-id"),i=a.data("width")||this.owl.settings.videoWidth,j=a.data("height")||this.owl.settings.videoHeight,k=a.attr("href");if(g)d="vimeo",e=g;else if(h)d="youtube",e=h;else{if(!k)throw new Error("Missing video link.");e=k.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/),e[3].indexOf("youtu")>-1?d="youtube":e[3].indexOf("vimeo")>-1&&(d="vimeo"),e=e[6]}b.data("owl-item").videoType=d,b.data("owl-item").videoId=e,b.data("owl-item").videoWidth=i,b.data("owl-item").videoHeight=j,c={type:d,id:e},f=i&&j?'style="width:'+i+"px;height:"+j+'px;"':"",a.wrap('<div class="owl-video-wrapper"'+f+"></div>"),this.createVideoTn(a,c)},Video.prototype.createVideoTn=function(b,c){function d(a){f='<div class="owl-video-play-icon"></div>',e=k.settings.lazyLoad?'<div class="owl-video-tn '+j+'" '+i+'="'+a+'"></div>':'<div class="owl-video-tn" style="opacity:1;background-image:url('+a+')"></div>',b.after(e),b.after(f)}var e,f,g,h=b.find("img"),i="src",j="",k=this.owl;return this.owl.settings.lazyLoad&&(i="data-src",j="owl-lazy"),h.length?(d(h.attr(i)),h.remove(),!1):void("youtube"===c.type?(g="http://img.youtube.com/vi/"+c.id+"/hqdefault.jpg",d(g)):"vimeo"===c.type&&a.ajax({type:"GET",url:"http://vimeo.com/api/v2/video/"+c.id+".json",jsonp:"callback",dataType:"jsonp",success:function(a){g=a[0].thumbnail_large,d(g),k.settings.loop&&k.updateActiveItems()}}))},Video.prototype.stopVideo=function(){this.owl.trigger("stop",null,"video");var a=this.owl.dom.$items.eq(this.owl.state.videoPlayIndex);a.find(".owl-video-frame").remove(),a.removeClass("owl-video-playing"),this.owl.state.videoPlay=!1},Video.prototype.playVideo=function(b){this.owl.trigger("play",null,"video"),this.owl.state.videoPlay&&this.stopVideo();var c,d,e,f=a(b.target||b.srcElement),g=f.closest("."+this.owl.settings.itemClass);e=g.data("owl-item").videoType,id=g.data("owl-item").videoId,width=g.data("owl-item").videoWidth||Math.floor(g.data("owl-item").width-this.owl.settings.margin),height=g.data("owl-item").videoHeight||this.owl.dom.$stage.height(),"youtube"===e?c='<iframe width="'+width+'" height="'+height+'" src="http://www.youtube.com/embed/'+id+"?autoplay=1&v="+id+'" frameborder="0" allowfullscreen></iframe>':"vimeo"===e&&(c='<iframe src="http://player.vimeo.com/video/'+id+'?autoplay=1" width="'+width+'" height="'+height+'" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'),g.addClass("owl-video-playing"),this.owl.state.videoPlay=!0,this.owl.state.videoPlayIndex=g.data("owl-item").indexAbs,d=a('<div style="height:'+height+"px; width:"+width+'px" class="owl-video-frame">'+c+"</div>"),f.after(d)
},Video.prototype.isInFullScreen=function(){var d=c.fullscreenElement||c.mozFullScreenElement||c.webkitFullscreenElement;return d&&a(d.parentNode).hasClass("owl-video-frame")&&(this.owl.speed(0),this.owl.state.isFullScreen=!0),d&&this.owl.state.isFullScreen&&this.owl.state.videoPlay?!1:this.owl.state.isFullScreen?(this.owl.state.isFullScreen=!1,!1):this.owl.state.videoPlay&&this.owl.state.orientation!==b.orientation?(this.owl.state.orientation=b.orientation,!1):!0},Video.prototype.destroy=function(){var a,b;this.owl.dom.$el.off("click.owl.video");for(a in this.handlers)this.owl.dom.$el.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.video=Video}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){Animate=function(b){this.core=b,this.core.options=a.extend({},Animate.Defaults,this.core.options),this.swapping=!0,this.previous=d,this.next=d,this.handlers={"change.owl.carousel":a.proxy(this),"drag.owl.carousel dragged.owl.carousel translated.owl.carousel":a.proxy(this),"translate.owl.carousel":a.proxy(this)},this.core.dom.$el.on(this.handlers)},Animate.Defaults={animateOut:!1,animateIn:!1},Animate.prototype.swap=function(){if(1===this.core.settings.items&&this.core.support3d){this.core.speed(0);var b,c=a.proxy(this.clear,this),d=this.core.dom.$items.eq(this.previous),e=this.core.dom.$items.eq(this.next),f=this.core.settings.animateIn,g=this.core.settings.animateOut;this.core.current()!==this.previous&&(g&&(b=this.core.coordinates(this.previous)-this.core.coordinates(this.next),d.css({left:b+"px"}).addClass("animated owl-animated-out").addClass(g).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",c)),f&&e.addClass("animated owl-animated-in").addClass(f).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",c))}},Animate.prototype.clear=Animate.prototype.destroy=function(){var a,b;for(a in this.handlers)this.core.dom.$el.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Animate=Animate}(window.Zepto||window.jQuery,window,document),function(a,b,c){Autoplay=function(b){this.core=b,this.core.options=a.extend({},Autoplay.Defaults,this.core.options),this.handlers={"translated.owl.carousel refreshed.owl.carousel":a.proxy(function(){this.autoplay()},this),"play.owl.autoplay":a.proxy(this),"stop.owl.autoplay":a.proxy(function(){this.stop()},this),"mouseover.owl.autoplay":a.proxy(function(){this.core.settings.autoplayHoverPause&&this.pause()},this),"mouseleave.owl.autoplay":a.proxy(this)},this.core.dom.$el.on(this.handlers)},Autoplay.Defaults={autoplay:!1,autoplayTimeout:5e3,autoplayHoverPause:!1,autoplaySpeed:!1},Autoplay.prototype.autoplay=Autoplay.prototype.play=Autoplay.prototype.stop=function(){b.clearInterval(this.interval)},Autoplay.prototype.pause=Autoplay.prototype.destroy=function(){var a,c;b.clearInterval(this.interval);for(a in this.handlers)this.core.dom.$el.off(a,this.handlers[a]);for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},a.fn.owlCarousel.Constructor.Plugins.autoplay=Autoplay}(window.Zepto||window.jQuery,window,document),function(a){"use strict";var b=function(c){this.core=c,this.initialized=!1,this.pages=[],this.controls={},this.template=null,this.$element=this.core.dom.$el,this.overrides={next:this.core.next,prev:this.core.prev,to:this.core.to},this.handlers={"changed.owl.carousel":a.proxy(function(b){"items"==b.property.name&&(this.initialized||(this.initialize(),this.initialized=!0),this.update(),this.draw()),this.filling&&(b.property.value.data("owl-item").dot=a(":first-child",b.property.value).find("[data-dot]").andSelf().data("dot"))},this),"change.owl.carousel":a.proxy(function(a){if("position"==a.property.name&&!this.core.state.revert&&!this.core.settings.loop&&this.core.settings.navRewind){var b=this.core.current(),c=this.core.maximum(),d=this.core.minimum();a.data=a.property.value>c?b>=c?d:c:a.property.value<d?c:a.property.value}this.filling=this.core.settings.dotsData&&"item"==a.property.name&&a.property.value&&a.property.value.is(":empty")},this),"refreshed.owl.carousel":a.proxy(this)},this.core.options=a.extend({},b.Defaults,this.core.options),this.$element.on(this.handlers)};b.Defaults={nav:!1,navRewind:!0,navText:["prev","next"],navSpeed:!1,navElement:"div",navContainer:!1,navContainerClass:"owl-nav",navClass:["owl-prev","owl-next"],slideBy:1,dotClass:"owl-dot",dotsClass:"owl-dots",dots:!0,dotsEach:!1,dotData:!1,dotsSpeed:!1,dotsContainer:!1,controlsClass:"owl-controls"},b.prototype.initialize=function(){var b,c,d=this.core.settings;d.dotsData||(this.template=a("<div>").addClass(d.dotClass).append(a("<span>")).prop("outerHTML")),d.navContainer&&d.dotsContainer||(this.controls.$container=a("<div>").addClass(d.controlsClass).appendTo(this.$element)),this.controls.$indicators=d.dotsContainer?a(d.dotsContainer):a("<div>").hide().addClass(d.dotsClass).appendTo(this.controls.$container),this.controls.$indicators.on(this.core.dragType[2],"div",a.proxy(this)),b=d.navContainer?a(d.navContainer):a("<div>").addClass(d.navContainerClass).prependTo(this.controls.$container),this.controls.$next=a("<"+d.navElement+">"),this.controls.$previous=this.controls.$next.clone(),this.controls.$previous.addClass(d.navClass[0]).html(d.navText[0]).hide().prependTo(b).on(this.core.dragType[2],a.proxy(function(){this.prev()},this)),this.controls.$next.addClass(d.navClass[1]).html(d.navText[1]).hide().appendTo(b).on(this.core.dragType[2],a.proxy(function(){this.next()},this));for(c in this.overrides)this.core[c]=a.proxy(this[c],this)},b.prototype.destroy=b.prototype.update=function(){var a,b,c,d=this.core.settings,e=this.core.num.cItems/2,f=this.core.num.items-e,g=d.center||d.autoWidth||d.dotData?1:d.dotsEach||d.items;if("page"!==d.slideBy&&(d.slideBy=Math.min(d.slideBy,d.items)),d.dots)for(this.pages=[],a=e,b=0,c=0;f>a;a++)(b>=g||0===b)&&(this.pages.push({start:a-e,end:a-e+g-1}),b=0,++c),b+=this.core.num.merged[a]},b.prototype.draw=function(){var b,c,d="",e=this.core.settings,f=this.core.dom.$oItems,g=this.core.normalize(this.core.current(),!0);if(!e.nav||e.loop||e.navRewind||(this.controls.$previous.toggleClass("disabled",0>=g),this.controls.$next.toggleClass("disabled",g>=this.core.maximum())),this.controls.$previous.toggle(e.nav),this.controls.$next.toggle(e.nav),e.dots){if(b=this.pages.length-this.controls.$indicators.children().length,b>0){for(c=0;c<Math.abs(b);c++)d+=e.dotData?f.eq(c).data("owl-item").dot:this.template;this.controls.$indicators.append(d)}else 0>b&&this.controls.$indicators.children().slice(b).remove();this.controls.$indicators.find(".active").removeClass("active"),this.controls.$indicators.children().eq(a.inArray(this.current(),this.pages)).addClass("active")}this.controls.$indicators.toggle(e.dots)},b.prototype.onTrigger=function(b){var c=this.core.settings;b.page={index:a.inArray(this.current(),this.pages),count:this.pages.length,size:c.center||c.autoWidth||c.dotData?1:c.dotsEach||c.items}},b.prototype.current=function(){var b=this.core.normalize(this.core.current(),!0);return a.grep(this.pages,.pop()},b.prototype.getPosition=function(b){var c,d,e=this.core.settings;return"page"==e.slideBy?(c=a.inArray(this.current(),this.pages),d=this.pages.length,b?++c:--c,c=this.pages[(c%d+d)%d].start):(c=this.core.normalize(this.core.current(),!0),d=this.core.num.oItems,b?c+=e.slideBy:c-=e.slideBy),c},b.prototype.next=function(b){a.proxy(this.overrides.to,this.core)(this.getPosition(!0),b)},b.prototype.prev=b.prototype.to=a.fn.owlCarousel.Constructor.Plugins.Navigation=b}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){"use strict";var e=function(c){this.core=c,this.hashes={},this.$element=this.core.dom.$el,this.handlers={"initialized.owl.carousel":a.proxy(function(){b.location.hash.substring(1)&&a(b).trigger("hashchange.owl.navigation")},this),"changed.owl.carousel":a.proxy(function(b){this.filling&&(b.property.value.data("owl-item").hash=a(":first-child",b.property.value).find("[data-hash]").andSelf().data("hash"),this.hashes[b.property.value.data("owl-item").hash]=b.property.value)},this),"change.owl.carousel":a.proxy(function(a){"position"==a.property.name&&this.core.current()===d&&"URLHash"==this.core.settings.startPosition&&(a.data=this.hashes[b.location.hash.substring(1)]),this.filling="item"==a.property.name&&a.property.value&&a.property.value.is(":empty")},this)},this.core.options=a.extend({},e.Defaults,this.core.options),this.$element.on(this.handlers),a(b).on("hashchange.owl.navigation",a.proxy(function(){var a=b.location.hash.substring(1),c=this.core.dom.$oItems,d=this.hashes[a]&&c.index(this.hashes[a])||0;return a?(this.core.dom.oStage.scrollLeft=0,void this.core.to(d,!1,!0)):!1},this))};e.Defaults={URLhashListener:!1},e.prototype.destroy=function(){var c,d;a(b).off("hashchange.owl.navigation");for(c in this.handlers)this.owl.dom.$el.off(c,this.handlers[c]);for(d in Object.getOwnPropertyNames(this))"function"!=typeof this[d]&&(this[d]=null)},a.fn.owlCarousel.Constructor.Plugins.Hash=e}(window.Zepto||window.jQuery,window,document);;/**
;
/**
 * jQuery FocusPoint; version: 1.1.1
 * Author: http://jonathonmenz.com
 * Source: https://github.com/jonom/jquery-focuspoint
 * Copyright (c) 2014 J. Menz; MIT License
 * @preserve
 */
!function($){var t={reCalcOnWindowResize:!0,throttleDuration:17},n=function(t){var n=t.find("img").attr("src");t.data("imageSrc",n),i(n,function(n,i){t.data({imageW:i.width,imageH:i.height}),r(t)})},i=function(t,n){$("<img />").one("load",.attr("src",t)},a=function(t,n){var i=!1;return function(){var a=Array.prototype.slice.call(arguments,0);return i?!1:(i=!0,void setTimeout(n))}},o=function(t,n,i,a,o){var r=Math.floor(n/2),e=(a+1)/2,u=Math.floor(i/t),f=Math.floor(e*u);o&&(f=u-f);var c=f-r,s=u-f,h=n-r;return h>s&&(c-=h-s),0>c&&(c=0),-100*c/n+"%"},r=function(t){var i=t.data("imageW"),a=t.data("imageH"),r=t.data("imageSrc");if(!i&&!a&&!r)return n(t);var e=t.width(),u=t.height(),f=parseFloat(t.data("focusX")),c=parseFloat(t.data("focusY")),s=t.find("img").first(),h=0,d=0;if(!(e>0&&u>0&&i>0&&a>0))return!1;var l=i/e,w=a/u;s.css({"max-width":"","max-height":""}),i>e&&a>u&&s.css(l>w?"max-height":"max-width","100%"),l>w?h=o(w,e,i,f):w>l&&(d=o(l,u,a,c,!0)),s.css({top:d,left:h})},e=$(window),u=function(t,n){var i=n.throttleDuration?a(function(){r(t)},n.throttleDuration):o=!1;return r(t),{adjustFocus:windowOn:function(){return o?void 0:(e.on("resize",i),o=!0)},windowOff:function(){return o?(e.off("resize",i),o=!1,!0):void 0}}};$.fn.focusPoint=function(n){if("string"==typeof n)return this.each(;var i=$.extend({},t,n);return this.each(function(){var t=$(this),n=u(t,i);t.data("focusPoint")&&t.data("focusPoint").windowOff(),t.data("focusPoint",n),i.reCalcOnWindowResize&&n.windowOn()})},$.fn.adjustFocus=(jQuery);;
/* HTML5 Placeholder jQuery Plugin - v2.1.3
 * Copyright (c)2015 Mathias Bynens
 * 2015-09-23
 */
!function(a){unction c(b,c){var d=this,f=a(d);if(d.value===f.attr("placeholder")&&f.hasClass(m.customClass))if(d.value="",f.removeClass(m.customClass),f.data("placeholder-password")){if(f=f.hide().nextAll('input[type="password"]:first').show().attr("id",f.removeAttr("id").data("placeholder-id")),b===!0)return f[0].value=c,c;f.focus()}else d==e()&&d.select()}function d(d){var e,f=this,g=a(f),h=f.id;if(d&&"blur"===d.type){if(g.hasClass(m.customClass))return;if("password"===f.type&&(e=g.prevAll('input[type="text"]:first'),e.length>0&&e.is(":visible")))return}if(""===f.value){if("password"===f.type){if(!g.data("placeholder-textinput")){try{e=g.clone().prop({type:"text"})}catch(i){e=a("<input>").attr(a.extend(b(this),{type:"text"}))}e.removeAttr("name").data({"placeholder-enabled":!0,"placeholder-password":g,"placeholder-id":h}).bind("focus.placeholder",c),g.data({"placeholder-textinput":e,"placeholder-id":h}).before(e)}f.value="",g=g.removeAttr("id").hide().prevAll('input[type="text"]:first').attr("id",g.data("placeholder-id")).show()}else{var j=g.data("placeholder-password");j&&(j[0].value="",g.attr("id",g.data("placeholder-id")).show().nextAll('input[type="password"]:last').hide().removeAttr("id"))}g.addClass(m.customClass),g[0].value=g.attr("placeholder")}else g.removeClass(m.customClass)}function e(){try{return document.activeElement}catch(a){}}var f,g,h="[object OperaMini]"===Object.prototype.toString.call(window.operamini),i="placeholder"in document.createElement("input")&&!h,j="placeholder"in document.createElement("textarea")&&!h,k=a.valHooks,l=a.propHooks,m={};i&&j?(g=a.fn.placeholder=function(){return this},g.input=!0,g.textarea=!0):(g=a.fn.placeholder=function(b){var e={customClass:"placeholder"};return m=a.extend({},e,b),this.filter((i?"textarea":":input")+"[placeholder]").not("."+m.customClass).bind({"focus.placeholder":c,"blur.placeholder":d}).data("placeholder-enabled",!0).trigger("blur.placeholder")},g.input=i,g.textarea=j,f={get:set:,i||(k.input=f,l.value=f),j||(k.textarea=f,l.value=f),a(,a(window).bind("beforeunload.placeholder",)});;
/* underscore.string 3.2.2 | MIT licensed | http://epeli.github.com/underscore.string/ */

!function(){return {1:[function(e,r){var t=e("./trim"),n=e("./decapitalize");r.exports=,{"./decapitalize":10,"./trim":63}],2:[function(e,r){var t=e("./helper/makeString");r.exports=,{"./helper/makeString":21}],3:[{"./helper/makeString":21}],4:[{}],5:[{"./camelize":1,"./capitalize":2,"./helper/makeString":21}],6:[function(e,r){var t=e("./trim");r.exports=function(e){return t(e).replace(/\s\s+/g," ")}},{"./trim":63}],7:[function(e,r){var t=e("./helper/makeString"),n="ąàáäâãåæăćčĉęèéëêĝĥìíïîĵłľńňòóöőôõðøśșşšŝťțţŭùúüűûñÿýçżźž",i="aaaaaaaaaccceeeeeghiiiijllnnoooooooossssstttuuuuuunyyczzz";n+=n.toUpperCase(),i+=i.t}/g,function(e){var r=n.indexOf(r=t(r),0===e.length||0===r.length?0:e.split(r).length-1}},{"./helper/makeString":21}],9:[function(e,r){var t=e("./trim");r.exports=function(e){return t(e).replace(/([A-Z])/g,"-$1").replace(/[-_\s]+/g,"-").toLowerCase()}},{"./trim":63}],1on(e){return e=t(e),e.charAt(0).toLowerCase()+eth,n=1;n<r.length;n++)t=Math.min(r[n].le"gm"):new RegExp("^[ \\t]{"+a+"}","gm"),e.replace(i,""))}},{"./helper/makeString":21}],12:[function(e,r){var t=e(".ath.min(n(i),e.length)-r.length,i>=0&&e.indexOf(r,i)===i}},{"./helper/makeString":21,"./helper/toPositive":23}],13:[function(e,r){var t=e("./helper/makeString"),n=e("./helper/escapeChars"),i="[";for){return t(e).replace(o,function(e){return"&"+n[e]+";"})}},|contains|reverse|join|map)$/)&&(e[l(arguments,1);return String.prototype[e].apply(r,t)})}t.VERSION="3.2.2",t.isBlank=e("./isBlank"),t.stripTags=e("./stripTags"),t.capitalize=e("./capitalize"),t.decapitalize=e("./decapitalize"),t.chop=e("./chop"),t.trim=e("./trim"),t.clean=e("./clean"),t.cleanDiacritics=e("./cleanDiacritics"),t.count=e("./count"),t.chars=e("./chars"),t.swapCase=e("./swapCase"),t.escapeHTML=e("./escapeHTML"),t.unescapeHTML=e("./unescapeHTML"),t.splice=e("./splice"),t.insert=e("./insert"),t.replaceAll=e("./replaceAll"),t.include=e("./include"),t.join=e("./join"),t.lines=e("./lines"),t.dedent=e("./dedent"),t.reverse=e("./reverse"),t.startsWith=e("./startsWith"),t.endsWith=e("./endsWith"),t.pred=e("./pred"),t.succ=e("./succ"),t.titleize=e("./titleize"),t.camelize=e("./camelize"),t.underscored=e("./underscored"),t.dasherize=e("./dasherize"),t.classify=e("./classify"),t.humanize=e("./humanize"),t.ltrim=e("./ltrim"),t.rtrim=e("./rtrim"),t.truncate=e("./truncate"),t.prune=e("./prune"),t.words=e("./words"),t.pad=e("./pad"),t.lpad=e("./lpad"),t.rpad=e("./rpad"),t.lrpad=e("./lrpad"),t.sprintf=e("./sprintf"),t.vsprintf=e("./vsprintf"),t.toNumber=e("./toNumber"),t.numberFormat=e("./numberFormat"),t.strRight=e("./strRight"),t.strRightBack=e("./strRightBack"),t.strLeft=e("./strLeft"),t.strLeftBack=e("./strLeftBack"),t.toSentence=e("./toSentence"),t.toSentenceSerial=e("./toSentenceSerial"),t.slugify=e("./slugify"),t.surround=e("./surround"),t.quote=e("./quote"),t.unquote=e("./unquote"),t.repeat=e("./repeat"),t.naturalCmp=e("./naturalCmp"),t.levenshtein=e("./levenshtein"),t.toBoolean=e("./toBoolean"),t.exports=e("./exports"),t.escapeRegExp=e("./helper/escapeRegExp"),t.wrap=e("./wrap"),t.map=e("./map"),t.strip=t.trim,t.lstrip=t.ltrim,t.rstrip=t.rtrim,t.center=t.lrpad,t.rjust=t.lpad,t.ljust=t.rpad,t.contains=t.include,t.q=t.quote,t.toBool=t.toBoolean,tt.map,t.prototype={value:function(r(var a in t)n(a,t[a]);n("tap",function(e,r){return r(e)});var o=["toUpperCase","toLowerCase","split","replace","slice","substring","substr","concat"];for(var p in o)i(o[p]);r.exports=t},{"./camelize":1,"./capitalize":2,"./chars":3,"./chop":4,"./classify":5,"./clean":6,"./cleanDiacritics":7,"./count":8,"./dasherize":9,"./decapitalize":10,"./dedent":11,"./endsWith":12,"./escapeHTML":13,"./exports":14,"./helper/escapeRegExp":19,"./humanize":24,"./include":25,"./insert":26,"./isBlank":27,"./join":28,"./levenshtein":29,"./lines":30,"./lpad":31,"./lrpad":32,"./ltrim":33,"./map":34,"./naturalCmp":35,"./numberFormat":36,"./pad":37,"./pred":38,"./prune":39,"./quote":40,"./repeat":41,"./replaceAll":42,"./reverse":43,"./rpad":44,"./rtrim":45,"./slugify":46,"./splice":47,"./sprintf":48,"./startsWith":49,"./strLeft":50,"./strLeftBack":51,"./strRight":52,"./strRightBack":53,"./stripTags":54,"./succ":55,"./surround":56,"./swapCase":57,"./titleize":58,"./toBoolean":59,"./toNumber":60,"./toSentence":61,"./toSentenceSerial":62,"./trim":63,"./truncate":64,"./underscored":65,"./unescapeHTML":66,"./unquote":67,"./vsprintf":68,"./words":69,"./wrap"ce(0,-1)+String.fromCharCode(e.charCodeAt(e.length-1)+r)}},{"./makeString":2n(e){return null==e?"\\s":e.","<":"lt",">":"gt",'"':"quot","&":"amp","'":"#39"};r.exports=t},{}],19:[function(e,r){var t=e("./makeString");r.exports=function(e){return t(e).replaceopy:"©"t},{}],21:[function(e,r){r.expore,r){if(1>r)return"";for(var t="";r>0;)1&r&&(t+=e),r>>=1,e+=e;return t}},{ts=function(e){return t(i(n(e).replace(/_id$/,"").replace(/_/g," ")))}},{"./capitalize":2,"./trim":63,"./underscored":65}],25:[function(e,r){var t=e("./helper/makeString");r.exports=function(e,r)(e,r){var t=e("./spli"./helper/makeString");r.exportsts=function(){var e=n.call(arguments),r=e.shift();return e.join(t(r))}},{"./helper/make0:1);var u=p+1;a>u&&(a=u),u=n[o+1){r.expoction(e,r){var t=e("./pad");r.exports=function(e,r,n){return t(e,r,n)}},{"./pad":37}],32:[function(e,r){var t=e("./padn e=t(e),!r&&i?i.call(e):(r=n(r),e.replace(new RegExp("^"+r+"+"),""))}},{"./helper/defaultToWhiteSpace":17,"./helper/makeString":21}],34:[function(e,r){var t=e("./helper/makeString");r.exports=function(e,r){return e=t(e),0===e.length||"function"!=typeof r?e:e.replace(/./g,r)}},{"./helper/makeString":21}],35:[function(e,r){r.exports=function(e,r){if(e==r)return 0;if(!e)return-1;if(!r)return 1;for(var t=/(\.\d+|\d+|\D+)/g,n=String(e).match(t),i=String(r).match(t),a=Math.min(n.length,i.length),o=0;a>o;o++){var p=n[o],u=i[o];if(p!==u){var c=+p,s=+u;return c===c&&s===s?c>s?1:-1:u1]?(t||".")+i[1]:"";return a.replace(/(\d)(?=(?:\d{3})+$)/g,"$1"+n)+o}},{}],37:[function(eil(o/2))+e+n(i,Math.floor(o/2));default:return o=r-e.len,r){var t=e("./helper/adjacent");r.exports=function(e){return t(e,-1)}},{"./helper/adjacent":16}],39n(o.slice(0,o.length-1)),(o+i).length>e.lengthe,r){var t=e("./surround");r.exports=function(e,r){return t(e,r||'"')}},{"./surround":56}],41:[function(=~~r,null==a)return n(e,r);for(var i=[];r>0;i[--r]=e);return i.join(a)}},{"./helper/makeString":21,"./helper/str,n,i){var a=i===!0?"gi":"g",o=newr t=e("./chars");r.r){var t=e("./pad"turn e=t(e),!r&&i?i.call(e):(r=n(r),e.replace(new RegExp(r+"+$"),""))}},{"./helper/defaultToWhiteSpace":17,"./helper/makeString":21}],46:[function(e,r){nction(e){return t(n(i(e).replace(/[^\w\s-]/g,"-").toLowerCase()),"-")}},{"./cleanDiacritics":7,"./darts=function(e,r,n,i){var a=t(e);return a.splice(~~r,~~n,i),a.join("")}},{"./chars":3}],48:[function(e,r),i=functirse(arguments[0]ring(a).length,c=u[is not (yet) supported");n.push(t)}r=r.substring((e),r=""+r,i=null==i?0:Math.min(n(i),e.length),e.lastIndexOf(r,i)===i}},{"./helper/makeString":21,"./helper/toPoion(e,r){e=t(e),r=t(r);var n=r?e.indexOf(r):-1;return~n?e.slice(0,n):e}},{"./helper/maketion(e,r){e=t(e),r=t(r);var n=e.lastIndexOf(r);return~n?e.slice(0,n):e}},{"./helper/makeString":21}],52:[function(e,r){var t=e("./helper/makeString");r.exports=function(e,r){e=t(e),r=t(r);var n=r?e.indexOf(r):-1;return~n?e.slice(n+r.length,e.length):e}},{"./helper/maker);var n=r?e.lastIndexOf(r):-1;reeString");r.exports=function(e){e,r){var t=e("./helper/adjacen16}],56:ction(e){return e===e.toUpperCaserCase().replace(/(?:^|\s|-)\S/g,function(e){rn=r[t]){if(n.test&&n.test(e))return!0;if(n.toLowerCase()===i)return!0}}var n=e("./trim");r.exports=function(e,r,i){return"number"==typeof e&&(e=""+e),"string"!=typeof e?!!e:(e=n(e),t(e,r|)return 0;var t=Math.pow(10,isFinite(r)?r:0);return(),o=a.pop();return e{var t=e("./toSentence");&i?i.call(e):(r=n(r),e.replace(new RegExp("^"+r+"+|"+r+"+$","g"),""))}},{"./helper/defaultToWhiteSpace":17,"./helper/maketion(e,r,n){return e=t(e),n=n||".ce(/([a-z\d])([A-Z]Int(t[1],16)):(t=r.match(/^#(\d+)$/))?String.fromCharCode(~){returnsprintf");r.exports=fu/trim");r.exports=function(e,r){return t(e)?[]:n(e,r).split(r||/\s+/)}},{"./isBlank":27,"./trim":63}],70:[function(e,r){var t=e("./helper/makeString");r.exports=function(e,r){e=t(e),r=r||{};var n,i=r.width||75,a=r.seperator||"\n",o=r.cut||!1,p=r.preserveSpaces||!1,u=r.trailingSpaces||!1;if(0>=i)return e;if(o){var c=0;for(n="";c<e.length;)c%i==0&&c>0&&(n+=a),n+=e.charAt(c),c++;if(u)for(;c%i>0;)n+=" ",c++;return n}var s=e.split(" "),l=0;for(n="";s.length>0;){if(1+s[0].length+l>i&&l>0){if(p)n+=" ",l++;else if(u)for(;i>l;)n+=" ",l++;n+=a,l=0}l>0&&(n+=" ",l++),n+=s[0],l+=s[0].length,s.shift()}if(u)for(;i>l;)n+=" ",l++;return n}},{"./helper/makeString":21}]},{},[15])(15)});;
function getCurrentLanguage() {
    var language = $("html").atts === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
     nction() {y() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

$(document).ready(function() {
    // Check if the user is already logged in to infolinks system
    if (typeof infolinks_id !== 'undefined') {
        $("body").addClass("infolinks-logged-in");

        //if ($("body").hasClass("page-template-login")) {
        //    window.location.href = "https://publishers.infolinks.com/";
        //}
    }
    // Adds a 'opened' class to a drop-down
    $("select").focus(function() {
        $(this).addClass("opened").closest(".infolinks-select").addClass("opened");
    })ass("opened").closest(".infolinks-select").removeClass("opened");
    });

    if (isMobile.any())
        $("html").addClass("mobile");
});

$(document).ready(function() {
    $('input, textarea').placeholder();
});

$(document).ready(function() {
    if ($("body").hasClass("blog") || $("body").hasClass("single-post") || $("body").hasClass("search-blog-results") || $("body").hasClass("archive")) {
        var link = $("#masthead").find(".btn.sign-up").find("a");
        link.attr("href", link.attr("href")+"?KID=9blog");
    }
});

// Checks if an element is visible
$.fn.isOnScreen = function(x, y){

    if(x === null || typeof x == 'undefined') x = 1;
    if(y === null || typeof y == 'undefined') y = 1;

    var win = $(window);

    var viewport = {
        top : win.scrollTop(),
        left : win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();

    var height = this.outerHeight();
    var width = this.outerWidth();

    if(!width || !height){
        return false;
    }

    var bounds = this.offset();
    bounds.right = bounds.left + width;
    bounds.bottom = bounds.top + height;

    var visible = (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

    if(!visible){
        return false;
    }

    var deltas = {
        top : Math.min( 1, ( bounds.bottom - viewport.top ) / height),
        bottom : Math.min(1, ( viewport.bottom - bounds.top ) / height),
        left : Math.min(1, ( bounds.right - viewport.left ) / width),
        right : Math.min(1, ( viewport.right - bounds.left ) / width)
    };

    return (deltas.left * deltas.right) >= x && (deltas.top * deltas.bottom) >= y;

};

// jquery extend function
$.extend({
    redirectPost: func += '<input type="hidden" name="'+key+'" value="'+value+'">';
        });
        $("body").append(
            $('<form id="temp-form" action="'+location+'" method="POST" class="hide">'+form+'</form>')
        );
        $("#temp-for     o[this.name] = this.value || '';
        }
    });
    return o;
};

// Google analytics related code
// run google event tracking
function googleEventTrack(category, action, label, value, nonInteraction){
    var nonInteractionObj = {};

    if( 'undefined' === typeof ga )return;

    if (window.console) {
        console.log('googleEventTrack : category is ' + category + ' , action is ' + action + ' , label is ' + label + (value ? ' , value is ' + value : ''));
    }

    if( nonInteraction ){
        nonInteractionObj = {'nonInteraction': 1};
    }

    if ( 'undefined' !== typeof value && value){
        ga('send', 'event', category, action, label, value, nonInteractionObj);
    } else {
        ga('send', 'event', category, action, label, nonInteractionObj);
    }
}
// run google pageview
function googlePageView(url, search){
    if( 'undefined' === typeof ga )return;

    ga('send', 'pageview', url);
}

//
$(document).ready(function() {
    $('.open-popup-link').magnificPopup({
      type:'inline',
      midClick: true,
      removalDelay: 300,
      mainClass: 'mfp-fade'
    });

    if ($("#subscribe-to-newsletter").find(".mc4wp-alert").length > 0) {
        $("#mc4wp_email").val("")
        $(".open-popup-link").magnificPopup('open');
    }

    /* MonetizePros */
    if( document.location.href.indexOf( "/monetize-your-site-with-infolinks-monetizepros/" ) !== -1 ) {
        $( "a[href='/join-us/']" ).attr( "href", "/join-us/?aid=2487548" );
    }

    /* MonetizePros */
    if( document.location.href.indexOf( "/special-deals/" ) !== -1 ) {
        $( "a[href='/join-us/']" ).attr( "href", "/join-us/?kid=9deals" );
    }
});
;
//
// section.animations.js
//
// Defines animations
//
var ANIMATIONS = (function () {

    var animations = [];

    var DEFAULT_ANIMATION_IN, DEFAULT_ANIMATION_OUT, DEFAULT_STAGGER, DEFAULT_DRAG, DEFAULT_DELAY, DEFAULT_ANIMATE_ELEMENTS_CLASS;
    DEFAULT_ANIMATION_IN = "none";
    DEFAULT_ANIMATION_OUT = "none";
    DEFAULT_STAGGER = 0;
    DEFAULT_DRAG = false;
    DEFAULT_DELAY = 0;
    DEFAULT_ANIMATE_ELEMENTS_CLASS = "";

    var ANIMATION_CALLOUT, ANIMATION_TRANSITION, ANIMATION_SHAKE, ANIMATION_BOUNCE, ANIMATION_FLASH, ANIMATION_PULSE, ANIMATION_SWING, ANIMATION_TADA, ANIMATION_FADEIN, ANIMATION_FADEOUT, ANIMATION_FLIPXIN, ANIMATION_FLIPXOUT, ANIMATION_FLIPYIN, ANIMATION_FLIPYOUT, ANIMATION_FLIPBOUNCEXIN, ANIMATION_FLIPBOUNCEXOUT, ANIMATION_FLIPBOUNCEYIN, ANIMATION_FLIPBOUNCEYOUT, ANIMATION_SWOOPIN, ANIMATION_SWOOPOUT, ANIMATION_WHIRLIN, ANIMATION_WHIRLOUT, ANIMATION_SHRINKIN, ANIMATION_SHRINKOUT, ANIMATION_EXPANDIN, ANIMATION_EXPANDOUT, ANIMATION_BOUNCEIN, ANIMATION_BOUNCEOUT, ANIMATION_BOUNCEUPIN, ANIMATION_BOUNCEUPOUT, ANIMATION_BOUNCEDOWNIN, ANIMATION_BOUNCEDOWNOUT, ANIMATION_BOUNCELEFTIN, ANIMATION_BOUNCELEFTOUT, ANIMATION_BOUNCERIGHTIN, ANIMATION_BOUNCERIGHTOUT, ANIMATION_SLIDEUPIN, ANIMATION_SLIDEUPOUT, ANIMATION_SLIDEDOWNIN, ANIMATION_SLIDEDOWNOUT, ANIMATION_SLIDELEFTIN, ANIMATION_SLIDELEFTOUT, ANIMATION_SLIDERIGHTIN, ANIMATION_SLIDERIGHTOUT, ANIMATION_SLIDEUPBIGIN, ANIMATION_SLIDEUPBIGOUT, ANIMATION_SLIDEDOWNBIGIN, ANIMATION_SLIDEDOWNBIGOUT, ANIMATION_SLIDELEFTBIGIN, ANIMATION_SLIDELEFTBIGOUT, ANIMATION_SLIDERIGHTBIGIN, ANIMATION_SLIDERIGHTBIGOUT, ANIMATION_PERSPECTIVEUPIN, ANIMATION_PERSPECTIVEUPOUT, ANIMATION_PERSPECTIVEDOWNIN, ANIMATION_PERSPECTIVEDOWNOUT, ANIMATION_PERSPECTIVELEFTIN, ANIMATION_PERSPECTIVELEFTOUT, ANIMATION_PERSPECTIVERIGHTIN, ANIMATION_PERSPECTIVERIGHTOUT;
    ANIMATION_CALLOUT = "callout";
    ANIMATION_TRANSITION = "transition";
    ANIMATION_SHAKE = "shake";
    ANIMATION_BOUNCE = "bounce";
    ANIMATION_FLASH = "flash";
    ANIMATION_PULSE = "pulse";
    ANIMATION_SWING = "swing";
    ANIMATION_TADA = "tada";
    ANIMATION_FADEIN = "fadeIn";
    ANIMATION_FADEOUT = "fadeOut";
    ANIMATION_FLIPXIN = "flipXIn";
    ANIMATION_FLIPXOUT = "flipXOut";
    ANIMATION_FLIPYIN = "flipYIn";
    ANIMATION_FLIPYOUT = "flipYOut";
    ANIMATION_FLIPBOUNCEXIN = "flipBounceXIn";
    ANIMATION_FLIPBOUNCEXOUT = "flipBounceXOut";
    ANIMATION_FLIPBOUNCEYIN = "flipBounceYIn";
    ANIMATION_FLIPBOUNCEYOUT = "flipBounceYOut";
    ANIMATION_SWOOPIN = "swoopIn";
    ANIMATION_SWOOPOUT = "swoopOut";
    ANIMATION_WHIRLIN = "whirlIn";
    ANIMATION_WHIRLOUT = "whirlOut";
    ANIMATION_SHRINKIN = "shrinkIn";
    ANIMATION_SHRINKOUT = "shrinkOut";
    ANIMATION_EXPANDIN = "expandIn";
    ANIMATION_EXPANDOUT = "expandOut";
    ANIMATION_BOUNCEIN = "bounceIn";
    ANIMATION_BOUNCEOUT = "bounceOut";
    ANIMATION_BOUNCEUPIN = "bounceUpIn";
    ANIMATION_BOUNCEUPOUT = "bounceUpOut";
    ANIMATION_BOUNCEDOWNIN = "bounceDownIn";
    ANIMATION_BOUNCEDOWNOUT = "bounceDownOut";
    ANIMATION_BOUNCELEFTIN = "bounceLeftIn";
    ANIMATION_BOUNCELEFTOUT = "bounceLeftOut";
    ANIMATION_BOUNCERIGHTIN = "bounceRightIn";
    ANIMATION_BOUNCERIGHTOUT = "bounceRightOut";
    ANIMATION_SLIDEUPIN = "slideUpIn";
    ANIMATION_SLIDEUPOUT = "slideUpOut";
    ANIMATION_SLIDEDOWNIN = "slideDownIn";
    ANIMATION_SLIDEDOWNOUT = "slideDownOut";
    ANIMATION_SLIDELEFTIN = "slideLeftIn";
    ANIMATION_SLIDELEFTOUT = "slideLeftOut";
    ANIMATION_SLIDERIGHTIN = "slideRightIn";
    ANIMATION_SLIDERIGHTOUT = "slideRightOut";
    ANIMATION_SLIDEUPBIGIN = "slideUpBigIn";
    ANIMATION_SLIDEUPBIGOUT = "slideUpBigOut";
    ANIMATION_SLIDEDOWNBIGIN = "slideDownBigIn";
    ANIMATION_SLIDEDOWNBIGOUT = "slideDownBigOut";
    ANIMATION_SLIDELEFTBIGIN = "slideLeftBigIn";
    ANIMATION_SLIDELEFTBIGOUT = "slideLeftBigOut";
    ANIMATION_SLIDERIGHTBIGIN = "slideRightBigIn";
    ANIMATION_SLIDERIGHTBIGOUT = "slideRightBigOut";
    ANIMATION_PERSPECTIVEUPIN = "perspectiveUpIn";
    ANIMATION_PERSPECTIVEUPOUT = "perspectiveUpOut";
    ANIMATION_PERSPECTIVEDOWNIN = "perspectiveDownIn";
    ANIMATION_PERSPECTIVEDOWNOUT = "perspectiveDownOut";
    ANIMATION_PERSPECTIVELEFTIN = "perspectiveLeftIn";
    ANIMATION_PERSPECTIVELEFTOUT = "perspectiveLeftOut";
    ANIMATION_PERSPECTIVERIGHTIN = "perspectiveRightIn";
    ANIMATION_PERSPECTIVERIGHTOUT = "perspectiveRightOut";

    var ANIMATING, LOADED;
    ANIMATING = "animating";
    LOADED = "loaded";

    var init, animate, scroll, shake, bounce, flash, pulse, swing, tada, fadeIn, fadeOut, flipXIn, flipXOut, flipYIn, flipYOut, flipBounceXIn, flipBounceXOut, flipBounceYIn, flipBounceYOut, swoopIn, swoopOut, whirlIn, whirlOut, shrinkIn, shrinkOut, expandIn, expandOut, bounceIn, bounceOut, bounceUpIn, bounceUpOut, bounceDownIn, bounceDownOut, bounceLeftIn, bounceLeftOut, bounceRightIn, bounceRightOut, slideUpIn, slideUpOut, slideDownIn, slideDownOut, slideLeftIn, slideLeftOut, slideRightIn, slideRightOut, slideUpBigIn, slideUpBigOut, slideDownBigIn, slideDownBigOut, slideLeftBigIn, slideLeftBigOut, slideRightBigIn, slideRightBigOut, perspectiveUpIn, perspectiveUpOut, perspectiveDownIn, perspectiveDownOut, perspectiveLeftIn, perspectiveLeftOut, perspectiveRightIn, perspectiveRightOut;

    shake = function(object, options) {
        $(object).velocity(ANIMATION_CALLOUT+"."+ANIMATION_SHAKE, options);
    };

    bounce = function(object, options) {
        $(object).velocity(ANIMATION_CALLOUT+"."+ANIMATION_BOUNCE, options);
    };

    flash = function(object, options) {
        $(object).velocity(ANIMATION_CALLOUT+"."+ANIMATION_FLASH, options);
    };

    pulse = function(object, options) {
        $(object).velocity(ANIMATION_CALLOUT+"."+ANIMATION_PULSE, options);
    };

    swing = function(object, options) {
        $(object).velocity(ANIMATION_CALLOUT+"."+ANIMATION_SWING, options);
    };

    tada = function(object, options) {
        $(object).velocity(ANIMATION_CALLOUT+"."+ANIMATION_TADA, options);
    };

    fadeIn = function(object, options) {
        $(object).velocity(ANIMATION_TRANSITION+"."+ANIMATION_FADEIN, options);
    };

    fadeOut = function(object, options) {
        $(object).velocity(ANIMATION_TRANSITION+"."+ANIMATION_FADEOUT, options);
    };

    flipXIn = function(object, options) {
        $(object).velocity(ANIMATION_TRANSITION+"."+ANIMATION_FLIPXIN, options);
    };

    flipXOut = function(object, options) {
        $(object).velocity(ANIMATION_TRANSITION+"."+ANIMATION_FLIPXOUT, options);
    };

    flipYIn = function(object, options) {
        $(object).velocity(ANIMATION_TRANSITION+"."+ANIMATION_FLIPYIN, options);
    };

    flipYOut = function(object, options) {
        $(object).velocity(ANIMATION_TRANSITION+"."+ANIMATION_FLIPYOUT, options);
    };

    flipBounceXIn = function(object, options) {
        $(object).velocity(ANIMATION_TRANSITION+"."+ANIMATION_FLIPBOUNCEXIN, options);
    };

    flipBounceXOut = function(object, options) {
        $(object).velocity(ANIMATION_TRANSITION+"."+ANIMATION_FLIPBOUNCEXOUT, options);
    };

    flipBounceYIn = function(object, options) {
        $(object).velocity(ANIMATION_TRANSITION+"."+ANIMATION_FLIPBOUNCEYIN, options);
    };

    flipBounceYOut = function(object, options) {
        $(object).velocity(ANIMATION_TRANSITION+"."+ANIMATION_FLIPBOUNCEYOUT, options);
    };

    swoopIn = function(object, options) {
        $(object).velocity(ANIMATION_TRANSITION+"."+ANIMATION_SWOOPIN, options);
    };

    swoopOut = function(object, options) {
        $(object).velocity(ANIMATION_TRANSITION+"."+ANIMATION_SWOOPOUT, options);
    };

    whirlIn = function(object, options) {
        $(object).velocity(ANIMATION_TRANSITION+"."+ANIMATION_WHIRLIN, options);
    };

    whirlOut = function(object, options) {
        $(object).velocity(ANIMATION_TRANSITION+"."+ANIMATION_WHIRLOUT, options);
    };

    shrinkIn = function(object, options) {
        $(object).velocity(ANIMATION_TRANSITION+"."+ANIMATION_SHRINKIN, options);
    };

    shrinkOut = function(object, options) {
        $(object).velocity(ANIMATION_TRANSITION+"."+ANIMATION_SHRINKOUT, options);
    };

    expandIn = function(object, options) {
        $(object).velocity(ANIMATION_TRANSITION+"."+ANIMATION_EXPANDIN, options);
    };

    expandOut = function(object, options) {
        $(object).velocity(ANIMATION_TRANSITION+"."+ANIMATION_EXPANDOUT, options);
    };

    bounceIn = function(object, options) {
        $(object).velocity(ANIMATION_TRANSITION+"."+ANIMATION_BOUNCEIN, options);
    };

    bounceOut = function(object, options) {
        $(object).velocity(ANIMATION_TRANSITION+"."+ANIMATION_BOUNCEOUT, options);
    };

    bounceUpIn = function(object, options) {
        $(object).velocity(ANIMATION_TRANSITION+"."+ANIMATION_BOUNCEUPIN, options);
    };

    bounceUpOut = function(object, options) {
        $(object).velocity(ANIMATION_TRANSITION+"."+ANIMATION_BOUNCEUPOUT, options);
    };

    bounceDownIn = function(object, options) {
        $(object).velocity(ANIMATION_TRANSITION+"."+ANIMATION_BOUNCEDOWNIN, options);
    };

    bounceDownOut = function(object, options) {
        $(object).velocity(ANIMATION_TRANSITION+"."+ANIMATION_BOUNCEDOWNOUT, options);
    };

    bounceLeftIn = function(object, options) {
        $(object).velocity(ANIMATION_TRANSITION+"."+ANIMATION_BOUNCELEFTIN, options);
    };

    bounceLeftOut = function(object, options) {
        $(object).velocity(ANIMATION_TRANSITION+"."+ANIMATION_BOUNCELEFTOUT, options);
    };

    bounceRightIn = function(object, options) {
        $(object).velocity(ANIMATION_TRANSITION+"."+ANIMATION_BOUNCERIGHTIN, options);
    };

    bounceRightOut = function(object, options) {
        $(object).velocity(ANIMATION_TRANSITION+"."+ANIMATION_BOUNCERIGHTOUT, options);
    };

    slideUpIn = function(object, options) {
        $(object).velocity(ANIMATION_TRANSITION+"."+ANIMATION_SLIDEUPIN, options);
    };

    slideUpOut = function(object, options) {
        $(object).velocity(ANIMATION_TRANSITION+"."+ANIMATION_SLIDEUPOUT, options);
    };

    slideDownIn = function(object, options) {
        $(object).velocity(ANIMATION_TRANSITION+"."+ANIMATION_SLIDEDOWNIN, options);
    };

    slideDownOut = function(object, options) {
        $(object).velocity(ANIMATION_TRANSITION+"."+ANIMATION_SLIDEDOWNOUT, options);
    };

    slideLeftIn = function(object, options) {
        $(object).velocity(ANIMATION_TRANSITION+"."+ANIMATION_SLIDELEFTIN, options);
    };

    slideLeftOut = function(object, options) {
        $(object).velocity(ANIMATION_TRANSITION+"."+ANIMATION_SLIDELEFTOUT, options);
    };

    slideRightIn = function(object, options) {
        $(object).velocity(ANIMATION_TRANSITION+"."+ANIMATION_SLIDERIGHTIN, options);
    };

    slideRightOut = function(object, options) {
        $(object).velocity(ANIMATION_TRANSITION+"."+ANIMATION_SLIDERIGHTOUT, options);
    };

    slideUpBigIn = function(object, options) {
        $(object).velocity(ANIMATION_TRANSITION+"."+ANIMATION_SLIDEUPBIGIN, options);
    };

    slideUpBigOut = function(object, options) {
        $(object).velocity(ANIMATION_TRANSITION+"."+ANIMATION_SLIDEUPBIGOUT, options);
    };

    slideDownBigIn = function(object, options) {
        $(object).velocity(ANIMATION_TRANSITION+"."+ANIMATION_SLIDEDOWNBIGIN, options);
    };

    slideDownBigOut = function(object, options) {
        $(object).velocity(ANIMATION_TRANSITION+"."+ANIMATION_SLIDEDOWNBIGOUT, options);
    };

    slideLeftBigIn = function(object, options) {
        $(object).velocity(ANIMATION_TRANSITION+"."+ANIMATION_SLIDELEFTBIGIN, options);
    };

    slideLeftBigOut = function(object, options) {
        $(object).velocity(ANIMATION_TRANSITION+"."+ANIMATION_SLIDELEFTBIGOUT, options);
    };

    slideRightBigIn = function(object, options) {
        $(object).velocity(ANIMATION_TRANSITION+"."+ANIMATION_SLIDERIGHTBIGIN, options);
    };

    slideRightBigOut = function(object, options) {
        $(object).velocity(ANIMATION_TRANSITION+"."+ANIMATION_SLIDERIGHTBIGOUT, options);
    };

    perspectiveUpIn = function(object, options) {
        $(object).velocity(ANIMATION_TRANSITION+"."+ANIMATION_PERSPECTIVEUPIN, options);
    };

    perspectiveUpOut = function(object, options) {
        $(object).velocity(ANIMATION_TRANSITION+"."+ANIMATION_PERSPECTIVEUPOUT, options);
    };

    perspectiveDownIn = function(object, options) {
        $(object).velocity(ANIMATION_TRANSITION+"."+ANIMATION_PERSPECTIVEDOWNIN, options);
    };

    perspectiveDownOut = function(object, options) {
        $(object).velocity(ANIMATION_TRANSITION+"."+ANIMATION_PERSPECTIVEDOWNOUT, options);
    };

    perspectiveLeftIn = function(object, options) {
        $(object).velocity(ANIMATION_TRANSITION+"."+ANIMATION_PERSPECTIVELEFTIN, options);
    };

    perspectiveLeftOut = function(object, options) {
        $(object).velocity(ANIMATION_TRANSITION+"."+ANIMATION_PERSPECTIVELEFTOUT, options);
    };

    perspectiveRightIn = function(object, options) {
        $(object).velocity(ANIMATION_TRANSITION+"."+ANIMATION_PERSPECTIVERIGHTIN, options);
    };

    perspectiveRightOut = function(object, options) {
        $(object).velocity(ANIMATION_TRANSITION+"."+ANIMATION_PERSPECTIVERIGHTOUT, options);
    };

    animate = function(animation, animationType) {
        var obj, options;
        options = {};

        if (animation.options.stagger == 0)
            obj = animation.object;
        else {
            if (animation.options.staggerElementsClass == "")
                obj = animation.object.children;
            else
                obj = $(animation.object).find("."+animation.options.staggerElementsClass);
        }

        if (animation.options.stagger > 0)
            options.stagger = animation.options.stagger;
        if (animation.options.drag)
            options.drag = animation.options.drag;
        if (animation.options.delay > 0)
            options.delay = animation.options.delay;

        options.begin = function() {
            $(animan() {
            $(animation.object).removeClass(ANIMATING);
        };

        if ($(animation.object).hasClass(ANIMATING))
            return;

        switch (animationType){
            case ANIMATION_SHAKE:
                shake(obj, options);
                break;
            case ANIMATION_BOUNCE:
                bounce(obj, options);
                break;
            case ANIMATION_FLASH:
                flash(obj, options);
                break;
            case ANIMATION_PULSE:
                pulse(obj, options);
                break;
            case ANIMATION_SWING:
                swing(obj, options);
                break;
            case ANIMATION_TADA:
                tada(obj, options);
                break;
            case ANIMATION_FADEIN:
                fadeIn(obj, options);
                break;
            case ANIMATION_FADEOUT:
                fadeOut(obj, options);
                break;
            case ANIMATION_FLIPXIN:
                flipXIn(obj, options);
                break;
            case ANIMATION_FLIPXOUT:
                flipXOut(obj, options);
                break;
            case ANIMATION_FLIPYIN:
                flipYIn(obj, options);
                break;
            case ANIMATION_FLIPYOUT:
                flipYOut(obj, options);
                break;
            case ANIMATION_FLIPBOUNCEXIN:
                flipBounceXIn(obj, options)
                break;
            case ANIMATION_FLIPBOUNCEXOUT:
                flipBounceXOut(obj, options);
                break;
            case ANIMATION_FLIPBOUNCEYIN:
                flipBounceYIn(obj, options);
                break;
            case ANIMATION_FLIPBOUNCEYOUT:
                flipBounceYOut(obj, options);
                break;
            case ANIMATION_SWOOPIN:
                swoopIn(obj, options);
                break;
            case ANIMATION_SWOOPOUT:
                swoopOut(obj, options);
                break;
            case ANIMATION_WHIRLIN:
                whirlIn(obj, options);
                break;
            case ANIMATION_WHIRLOUT:
                whirlOut(obj, options);
                break;
            case ANIMATION_SHRINKIN:
                shrinkIn(obj, options);
                break;
            case ANIMATION_SHRINKOUT:
                shrinkOut(obj, options);
                break;
            case ANIMATION_EXPANDIN:
                expandIn(obj, options);
                break;
            case ANIMATION_EXPANDOUT:
                expandOut(obj, options);
                break;
            case ANIMATION_BOUNCEIN:
                bounceIn(obj, options);
                break;
            case ANIMATION_BOUNCEOUT:
                bounceOut(obj, options);
                break;
            case ANIMATION_BOUNCEUPIN:
                bounceUpIn(obj, options);
                break;
            case ANIMATION_BOUNCEUPOUT:
                bounceUpOut(obj, options);
                break;
            case ANIMATION_BOUNCEDOWNIN:
                bounceDownIn(obj, options);
                break;
            case ANIMATION_BOUNCEDOWNOUT:
                bounceDownOut(obj, options);
                break;
            case ANIMATION_BOUNCELEFTIN:
                bounceLeftIn(obj, options);
                break;
            case ANIMATION_BOUNCELEFTOUT:
                bounceLeftOut(obj, options);
                break;
            case ANIMATION_BOUNCERIGHTIN:
                bounceRightIn(obj, options);
                break;
            case ANIMATION_BOUNCERIGHTOUT:
                bounceRightOut(obj, options);
                break;
            case ANIMATION_SLIDEUPIN:
                slideUpIn(obj, options);
                break;
            case ANIMATION_SLIDEUPOUT:
                slideUpOut(obj, options);
                break;
            case ANIMATION_SLIDEDOWNIN:
                slideDownIn(obj, options);
                break;
            case ANIMATION_SLIDEDOWNOUT:
                slideDownOut(obj, options);
                break;
            case ANIMATION_SLIDELEFTIN:
                slideLeftIn(obj, options);
                break;
            case ANIMATION_SLIDELEFTOUT:
                slideLeftOut(obj, options);
                break;
            case ANIMATION_SLIDERIGHTIN:
                slideRightIn(obj, options);
                break;
            case ANIMATION_SLIDERIGHTOUT:
                slideRightOut(obj, options);
                break;
            case ANIMATION_SLIDEUPBIGIN:
                slideUpBigIn(obj, options);
                break;
            case ANIMATION_SLIDEUPBIGOUT:
                slideUpBigOut(obj, options);
                break;
            case ANIMATION_SLIDEDOWNBIGIN:
                slideDownBigIn(obj, options);
                break;
            case ANIMATION_SLIDEDOWNBIGOUT:
                slideDownBigOut(obj, options);
                break;
            case ANIMATION_SLIDELEFTBIGIN:
                slideLeftBigIn(obj, options);
                break;
            case ANIMATION_SLIDELEFTBIGOUT:
                slideLeftBigOut(obj, options);
                break;
            case ANIMATION_SLIDERIGHTBIGIN:
                slideRightBigIn(obj, options);
                break;
            case ANIMATION_SLIDERIGHTBIGOUT:
                slideRightBigOut(obj, options);
                break;
            case ANIMATION_PERSPECTIVEUPIN:
                perspectiveUpIn(obj, options);
                break;
            case ANIMATION_PERSPECTIVEUPOUT:
                perspectiveUpOut(obj, options);
                break;
            case ANIMATION_PERSPECTIVEDOWNIN:
                perspectiveDownIn(obj, options);
                break;
            case ANIMATION_PERSPECTIVEDOWNOUT:
                perspectiveDownOut(obj, options);
                break;
            case ANIMATION_PERSPECTIVELEFTIN:
                perspectiveLeftIn(obj, options);
                break;
            case ANIMATION_PERSPECTIVELEFTOUT:
                perspectiveLeftOut(obj, options);
                break;
            case ANIMATION_PERSPECTIVERIGHTIN:
                perspectiveRightIn(obj, options);
                break;
            case ANIMATION_PERSPECTIVERIGHTOUT:
                perspectiveRightOut(obj, options);
                break;
            default:
                break;
        }
    };

    scroll = function() {
        var animationIndex;
        for(animationIndex=0; animationIndex < animations.length; animationIndex++) {
            var animation;
            animation = animations[animationIndex];

            if (!$(animation.object).hasClass(LOADED)) {
                if ($(animation.object).offset().top < $(document).scrollTop()) {
                    animate(animation, animation.options.animationIn);
                    $(animation.object).addClass(LOADED);
                }
            }

            if (!$(animation.object).hasClass(LOADED)) {
                if ($(animation.object).isOnScreen(0.05, 0.05)) {
                    animate(animation, animation.options.animationIn);
                    $(animation.object).addClass(LOADED);
                }
            }
        }
    };

    init = function() {

        $(document).ready(function() {
            var list;

            list = $(".animation");

            var animationIndex;
            for(animationIndex=0; animationIndex < list.length; animationIndex++) {

                /* Initialize the animation settings */
                var animation, animationObject;
                animationObject                         = list[animationIndex];
                animation                               = {};
                animation.options                       = {};
                animation.object                        = animationObject;
                animation.options.animationIn           = (animationObject.hasAttribute("animation-in")) 	            ? animationObject.getAttribute("animation-in")          : DEFAULT_ANIMATION_IN;
                animation.options.animationOut          = (animationObject.hasAttribute("animation-out")) 	            ? animationObject.getAttribute("animation-out")         : DEFAULT_ANIMATION_OUT;
                animation.options.stagger               = (animationObject.hasAttribute("stagger")) 	            ? Number(animationObject.getAttribute("stagger"))           : DEFAULT_STAGGER;
                animation.options.staggerElementsClass  = (animationObject.hasAttribute("animate-elements-class")) 	? animationObject.getAttribute("animate-elements-class")    : DEFAULT_ANIMATE_ELEMENTS_CLASS;
                animation.options.drag                  = (animationObject.hasAttribute("drag")) 	                ? animationObject.getAttribute("drag") == "true"            : DEFAULT_DRAG;
                animation.options.delay                 = (animationObject.hasAttribute("delay")) 	                ? Number(animationObject.getAttribute("delay"))             : DEFAULT_DELAY;

                /* Add the animation to the animations list */
                animations.push(animation);
            }

            /* Register to the resize event of the window */
            $(document).on("scroll", function() { scroll(); });

            // Run the animation
            scroll(animation);
        });

    } ()

} ( ANIMATIONS || {} ));;
//
// section.carousel.js
//
// Defines carousel
//
(function () {
    "use strict";

    var carousels,
        DEFAULT_DATA_ITEMS_LG,
        DEFAULT_DATA_NAV_LG,
        DEFAULT_DATA_ITEMS_MD,
        DEFAULT_DATA_NAV_MD,
        DEFAULT_DATA_ITEMS_SM,
        DEFAULT_DATA_NAV_SM,
        DEFAULT_DATA_LOOP,
        DEFAULT_DATA_AUTOPLAY,
        DEFAULT_DATA_AUTOPLAY_TIMEOUT,
        DEFAULT_DATA_AUTOPLAY_HOVERPAUSE,
        DEFAULT_DATA_MARGIN;

    carousels = [];
    DEFAULT_DATA_AUTOPLAY = false;
    DEFAULT_DATA_AUTOPLAY_TIMEOUT = 5000;
    DEFAULT_DATA_AUTOPLAY_HOVERPAUSE = true;
    DEFAULT_DATA_ITEMS_LG = 3;
    DEFAULT_DATA_NAV_LG = false;
    DEFAULT_DATA_ITEMS_MD = 3;
    DEFAULT_DATA_NAV_MD = false;
    DEFAULT_DATA_ITEMS_SM = 1;
    DEFAULT_DATA_NAV_SM = true;
    DEFAULT_DATA_LOOP = false;
    DEFAULT_DATA_MARGIN = 10;

    function registerCarouselEvents(carousel) {
        if ($(carousel.object).hasClass("languages-menu")) {
            carousel.owlObject.on('changed.owl.carousel', function(event) {
                setTimeout(function() {
                    var selectedLanguage = $(".languages-menu").find(".owl-item.active").find("a");
                    window.location.href = selectedLanguage.attr("href");
                }, 1000);
            });
        }
    }

    // Init
    (function () {
        $(document).ready(function () {
            var list;
            list = $(".owl-carousel");

            var carouselIndex;
            for(carouselIndex=0; carouselIndex < list.length; carouselIndex++) {
                /* Initialize the carousel settings */
                var carousel, carouselObject;
                carouselObject = list[carouselIndex];
                carousel = {};
                carousel.object = carouselObject;
                carousel.options = {};
                carousel.options.dataAutoplay = (carouselObject.hasAttribute("data-autoplay")) ? carouselObject.getAttribute("data-autoplay") === "true" : DEFAULT_DATA_AUTOPLAY;
                carousel.options.dataAutoplayTimeout = (carouselObject.hasAttribute("data-autoplay-timeout")) ? Number(carouselObject.getAttribute("data-autoplay-timeout")) : DEFAULT_DATA_AUTOPLAY_TIMEOUT;
                carousel.options.dataAutoplayHoverPause = (carouselObject.hasAttribute("data-autoplay-hover-Pause")) ? carouselObject.getAttribute("data-autoplay-hover-pause") === "true" : DEFAULT_DATA_AUTOPLAY_HOVERPAUSE;
                carousel.options.dataItemsLg = (carouselObject.hasAttribute("data-items-lg")) ? Number(carouselObject.getAttribute("data-items-lg")) : DEFAULT_DATA_ITEMS_LG;
                carousel.options.dataNavLg = (carouselObject.hasAttribute("data-nav-lg")) ? carouselObject.getAttribute("data-nav-lg") == "true" : DEFAULT_DATA_NAV_LG;
                carousel.options.dataItemsMd = (carouselObject.hasAttribute("data-items-md")) ? Number(carouselObject.getAttribute("data-items-md")) : DEFAULT_DATA_ITEMS_MD;
                carousel.options.dataNavMd = (carouselObject.hasAttribute("data-nav-md")) ? carouselObject.getAttribute("data-nav-md") == "true" : DEFAULT_DATA_NAV_MD;
                carousel.options.dataItemsSm = (carouselObject.hasAttribute("data-items-sm")) ? Number(carouselObject.getAttribute("data-items-sm")) : DEFAULT_DATA_ITEMS_SM;
                carousel.options.dataNavSm = (carouselObject.hasAttribute("data-nav-sm")) ? carouselObject.getAttribute("data-nav-sm") == "true" : DEFAULT_DATA_NAV_SM;
                carousel.options.dataLoop = (carouselObject.hasAttribute("data-loop")) ? carouselObject.getAttribute("data-loop") == "true" : DEFAULT_DATA_LOOP;
                carousel.options.dataMargin = (carouselObject.hasAttribute("data-margin")) ? Number(carouselObject.getAttribute("data-margin")) : DEFAULT_DATA_MARGIN;

                // Add the carousel to the carousels list
                carousels.push(carousel);

                var owl = $(carousel.object).owlCarousel({
                    autoplay: carousel.options.dataAutoplay,
                    autoplayTimeout: carousel.options.dataAutoplayTimeout,
                    autoplayHoverPause: carousel.options.dataAutoplayHoverPause,
                    loop: carousel.options.dataLoop,
                    margin: carousel.options.dataMargin,
                    //animateIn: 'slideInRight',
                    //animateOut: 'slideOutLeft',
                    responsive:{
                        0:{
                            items: carousel.options.dataItemsSm,
                            nav: carousel.options.dataNavSm,
                            navText: [
                                "<i class='fa fa-angle-left'></i>",
                                "<i class='fa fa-angle-right'></i>"
                            ]
                        },
                        767:{
                            items: carousel.options.dataItemsMd,
                            nav: carousel.options.dataNavMd,
                            navText: [
                                "<i class='fa fa-angle-left'></i>",
                                "<i class='fa fa-angle-right'></i>"
                            ]
                        },
                        1023:{
                            items: carousel.options.dataItemsLg,
                            nav: carousel.options.dataNavLg,
                            navText: [
                                "<i class='fa fa-angle-left'></i>",
                                "<i class='fa fa-angle-right'></i>"
                            ]
                        }
                    }
                });
                carousel.owlObject = owl;

                // Register the events for the carousel
                registerCarouselEvents(carousel);
            }
        });
    }());
}());
;
//
//section.focuspoint.js
//
// Dction () {
 document.cookie = cname + "=" + cvalue + "; " + expires +"; path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) === 0) return c.substring(name.length,c.length);
    }
    return "";
}

function get_aid() {
    var param = getParamFromUrl('aid') || getParamFromUrl('AID');
    if(!getCookie('aid') && param) {
        setCookie('aid', param, 90);
    }
    return getCookie('aid');
}

function get_kid() {
    var param = getParamFromUrl('kid') || getParamFromUrl('KID') || getParamFromUrl('utm_kid') || getParamFromUrl('UTM_KID');
    if(param) {
        setCookie('kid', param, 90);
    }
    return getCookie('kid');
}

function get_referrer() {
    var param = document.referrer;
    if(param) {
        var referrer = document.createElement('a');
        referrer.href = param;

        if (referrer.hostname.indexOf("infolinks.com") == -1)
            setCookie('referral', param, 30);
    }
    return getCookie('referral');
}

function get_products() {
    var qs = location.search.split("+").join(" ");

    var params = [], tokens,
    re = /[?&]?([^=]+)=([^&]*)/g;

    while (tokens = re.exec(qs)) {
        if (decodeURIComponent(tokens[1]) === "product")
        params.push(decodeURIComponent(tokens[2]));
    }

    return params;
}

var language = getCurrentLanguage();
var aid = get_aid();
var kid = get_kid();
var products_params = get_products();
var referrer = get_referrer();
var facebookAccessToken;
;
/**
 * navigation.js
 *
 * Handles toggling the navigation menu for small screens.
 */
$(document).ready(function() {
	var container, button, menu, submenus, masthead, links, optOut;

	container = document.getElementById( 'site-mobile-navigation' );
	if ( ! container ) {
		return;
	}

	button = container.getElementsByTagName( 'button' )[0];
	if ( 'undefined' === typeof button ) {
		return;
	}

	links = container.getElementsByClassNameontainer.className = container.className.replace( ' toggled', '' );
		}
	}

	optOut = $(container).find(".opt-out");
	optOut.click(function(e) {
		e.preventDefault();
		e.stopImmediatePropagation();
		$("footer#colophon").find(".opt-out").slideDown();
		$('html, body').animate({
			scrollTop: $(".site-info").offset().top
		}, 500);
	});

	masthead = document.getElementById ( 'masthead' );

	submenus = container.getElementsByClassName ( 'menu-item-has-children' );
	for (i=0; i<submenus.length; i++) {
		submenus[i].onclick = function() {
			var menu = this.getElementsByClassName ( 'sub-menu' )[0];
			if ( -1 !== menu.className.indexOf( 'toggled' ) ) {
				menu.className = menu.className.replace( ' toggled', '' );
			}
			else {
				menu.className += ' toggled';
			}
		}
	}

	menu = container.getElementsByTagName( 'ul' )[0];

	// Hide menu toggle button if menu is empty and return early.
	if ( 'undefined' === typeof menu ) {
		button.style.display = 'none';
		return;
	}

	menu.setAttribute( 'aria-expanded', 'false' );

	if ( -1 === menu.className.indexOf( 'nav-menu' ) ) {
		menu.className += ' nav-menu';
	}

	button.onclick = function() {
		if ( -1 !== container.className.indexOf( 'toggled' ) ) {
			container.className = container.className.replace( ' toggled', '' );
			button.setAttribute( 'aria-expanded', 'false' );
			menu.setAttribute( 'aria-expanded', 'false' );
			masthead.className = menu.className.replace( ' toggled', '' );
		} else {
			container.className += ' toggled';
			button.setAttribute( 'aria-expanded', 'true' );
			menu.setAttribute( 'aria-expanded', 'true' );
			masthead.className += ' toggled';
		}
	};




});;
(function () {
    "use strict";

    var client;

    function integration_init_tabs() {
        $(".btn-group-platforms")
            .find("input.radio").change(function (e) {
                $(".instructions").hide();
                $("#instructions_" + $(this).val()).show();
            });
    }

    function integration_init_copy() {
        // Initialize the copy-code plugin
        client = new ZeroClipboard(document.getElementById("cmdCopyCode"));

        client.on("ready", function (readyEvent) {
            client.on("aftercopy", function (event) {
                //event.target.style.display = "none";
                var text = $("#cmdCopyCode").attr("data-copied");
                $("#cmdCopyCode").html(text + " &nbsp; <i class='fa fa-check'></i>");
            });
        });
    }

    function integration_init_data() {
        var webSiteURL,
            name,
            pid,
            wsid,
            fbId;

        // Fetch the params
        webSiteURL = $("#webSiteURL").val();
        name = $("#name").val();
        pid = $("#pid").val();
        wsid = $("#wsid").val();
        fbId = $("#fbId").val();

        // Set the params in their designated places
        $(".hero").find(".hero-title").find("p").text(
            $(".hero").find(".hero-title").find("p").text().replace("[name]", name));
        //$("#integration_code").text(
        //    $("#integration_code").text().replace("[pid]", pid));
        //$("#integration_code").text(
        //    $("#integration_code").text().replace("[wsid]", wsid));
    }

    function integration_init_code_select() {
        $("#integration_code")
            .on("focus tap", function(e) {
                this.setSelectionRang.mouseup(function(e){
                e.preventDefault();
            });
    }

    function integration_init_older_versions() {
        $(".cmdSeeOlderVersions").click(function() {
            $(this).closest(".older-versions")
                .parent().find(".how-to-install").hide()
                .parent().find(".versions").show()
                .parent().find(".bar-suitable-for").hide()
                .parent().find(".bar-older-versions").show()
                .parent().find(".bar-link").hide();
        });

        $(".cmdBackToPrimaryVersion").click(function() {
            $(this).closest(".older-versions")
                .parent().find(".how-to-install").show()
                .parent().find(".versions").hide()
                .parent().find(".bar-suitable-for").show()
                .parent().find(".bar-older-versions").hide()
                .parent().find(".bar-link").show();
        });
    }

    function integration_init_hovers() {
        vClass("active");
            $(value).prop('checked', false);
        });

        $(".btn-group-platforms").find("label").on("mouseenter", function() {
            var img = $(this).attr("data-img-hover");

            if ($(this).css("background-image") == img)
                return;

            $(this).css({
                "background-image": "url('"+ img +"')"
            });
        });
        $(".btn-group-platforms").find("label").on("mouseleave", function() {
            if ($(this).hasClass("active"))
                return;

            var img = $(this).attr("data-img");

            if ($(this).css("background-image") == img)
                return;

            $(this).css({
                "background-image": "url('"+ img +"')"
            });
        });
        $(".btn-group-platforms").find("label").on("click", function() {
            var current = $(this);
            var list = $(".btn-group-platforms").find("label");
            $.each(list, function(index, value) {
                var image = $(value).attr("data-img");
                var image_hover = $(value).attr("data-img-hover");
                $(value).css("background-image", "url("+image+")").removeClass("active");

                if ($(value).attr("for") === current.attr("for")) {
                    $(value).css("background-image", "url("+image_hover+")").addClgration_init_older_versions();
        integration_init_hovers();
    }

    $(document).ready(function () {
        if ($("body").hasClass("page-template-integretion"))
            integration_init();
    });

}());
;
$(document).ready(function () {

  function changeTab(tab) {
    // Deactivate all options
    $("#support-tabs").find(".btn-tab").removeClass("active");
    $("#support-tabs").closest(".tabs").find(".tab-content").removeClass("active");
    // Activate the clicked option
    var dataTarget = $(tab).attr("data-target");
    $(tab).addClass("active");
    $(dataTarget).addClass("active");
  }

  if ($("body").hasClass("page-template-support")) {
    var hash = window.location.hash;
    if (hash == "#advertiser") {
      changeTab($(".btn-tab[data-target='#adshop']"));
    } else if (hash == "#publisher") {
      changeTab($(".btn-tab[data-target='#publisher-center']"));
    }
  }

  $("#support-tabs").find(".btn-tab").click(function(e) {
    e.preventDefault();

    var target = $(this).attr("data-target");
    if (target === "#publisher-center") {

      $(this).closest("#support-tabs").find(".btn-tab").removeClass("active");
      $(this).addClass("active");
      $("#publisher-center").addClass("active");
      $("#adshop").removeClass("active");

    } else if (target === "#adshop") {

      $(this).closest("#support-tabs").find(".btn-tab").removeClass("active");
      $(this).addClass("active");
      $("#publisher-center").removeClass("active");
      $("#adshop").addClass("active");

    }
  });
});
;
/* Responsible for opting-out of Infolinks */
(function() {
    "use strict";

    var _OPT_OUT_URL,
        pid, wsid;

    _OPT_OUT_URL = "https://publishers.infolinks.com/opt-out";

    // Handles the actual opting-out operation
    function opt_out() {
        $.redirectPost(_OPT_OUT_URL, {
            'pid': pid,
            'wsid': wsid,
            'referer': referrer
        });
    }

    // Initialize
    (function() {

        $(document).ready(function() {
            // Check if the user is trying to opt-out
            pid = getParamFromUrl("pid");
            wsid = getParamFromUrl("wsid");
            if (pid && wsid) {
                $("body").addClass("infolinks-opt-out");
            }
            // Open the opt-out panel
            $(".nav-opt-out").find("a").click(function(e) {
                e.preventDefault();
                $("footer#colophon").find(".opt-out").slideDown();
                $('html, body').animate({
                    scrollTop: $(".site-info").offset().top
                }, 500);
            });
                $("footer#colophon").find(".opt-out").slideUp();
               e.preventDefault();
                opt_out();
            });
        });

            $("#masthead-blog").removeClass("shrink");
        }
    });

    // Give the mailchimp button the same style as every other button
    $("button.mc4wp_submit")
        .addCla'html,body').animate({
            scrollTop: 0
        }, 1000);
    });

    $("#load-more-posts").click(function (e) {
        var $pageId = $(this).attr('data-page');

        e.preventDefault();
        e.stopImmediatePropagation();

        // show_spinner();

        $.ajax({
            url: document.location.href,
            data: {page: $pageId},
            method: "GET"
        }).done(function (data) {
            $("#posts").append(data);
            $("#load-more-posts").attr('data-page', parseInt($pageId) + 1);

            // hide_spinner();

            if (!data) {
                $("#load-more-posts").hide();
            }
        });
    });
});
;
//var _domain = "http://masta.infolinks.com"; //document.domain;
var _publishersSignupURL = '/s/sign-up';
var _publishersFacebookSignupURL = '/s/sign-up-fb';
var _publishersWelcomeURL = '/welcome/';
var _publishersWelcomeESURL = '/es/welcome/';

var publishersSignupManager = {
    signup: function(dryMode, callback, fieldValidate) {
        if ($("#special-deal-signup-popup").length > 0) {
            publishersSignupManager.fields = {
                form: $("#special-deal-signup-popup").find(".frmSignUpMonetize"),
                webSiteURL: $("#special-deal-signup-popup").find(".inputSignUpMonetizeWebsite"),
                email: $("#special-deal-signup-popup").find(".inputSignUpMonetizeEmail"),
                name: $("#special-deal-signup-popup").find(".inputSignUpMonetizeName"),
                password: $("#special-deal-signup-popup").find(".inputSignUpMonetizePassword"),
                cmd_facebook: $("#special-deal-signup-popup").find(".btnMonetizeSignupWithFacebook")
            };
        } else {
            publishersSignupManager.fields = {
                form: $(".frmSignUpMonetize"),
                webSiteURL: $(".inputSignUpMonetizeWebsite"),
                email: $(".inputSignUpMonetizeEmail"),
                name: $(".inputSignUpMonetizeName"),
                password: $(".inputSignUpMonetizePassword"),
                cmd_facebook: $(".btnMonetizeSignupWithFacebook")
            };
        }

        var fields = publishersSignupManager.fields;
        var form = publishersSignupManager.fields.form;
        var formType = form.attr("data-form-type");
        var data = form.serializeObject();
        var url = _publishersSignupURL;

        // Set the dry-mode
        data.dryMode = dryMode;

        // Decide what service to invoke
        if (formType == "facebook" && !dryMode) {
            url = _publishersFacebookSignupURL;
        }
        else {
            url = _publishersSignupURL;
        }

        // Add the facebook token, if we're using facebook signup
        if (formType == "facebook") {
            data.accessToken = facebookAccessToken;
            delete data.email;
            delete data.name;
            delete data.password;
        }

        // Let's add the meta-data
        if (aid) {
            data.aid = aid;
        }
        if (kid) {
            data.kid = kid;
        }
        if (referrer) {
            data.referral = referrer;
        }
        if (products_params && products_params.length > 0) {
            data.product = products_params;
        }

        data.language = language;

        // Let's remove all unnecessary data
        if (dryMode) {
            if (fieldValidate.attr("data-field-name") != fields.webSiteURL.attr("data-field-name"))
                delete data.webSiteURL;
            if (fieldValidate.attr("data-field-name") != fields.email.attr("data-field-name"))
                delete data.email;
            if (fieldValidate.attr("data-field-name") != fields.name.attr("data-field-name"))
                delete data.name;
            if (fieldValidate.attr("data-field-name") != fields.password.attr("data-field-name"))
                delete data.password;
            if (!data.accessToken)
                delete data.accessToken;
        }

        // Add http:// or to the url if missing
        if (data.webSiteURL && (!_.startsWith(data.webSiteURL.toLowerCase(), "http://") && !_.startsWith(data.webSiteURL.toLowerCase(), "https://")))
            data.webSiteURL = "http://" + data.webSiteURL;

        $.ajax({
            type: 'POST',
            url: url,
            headers: {
                Accept: 'application/json',
                "Accept-Language": language
            },
            data: data,
            success: function (response, status) {
                form
                    .find(".general-error").hide()
                    .find(".form-error").hide();

                if (fieldValidate.attr("data-field-name") == fields.webSiteURL.attr("data-field-name"))
                    publishersSignupManager.clearStatus(fields.webSiteURL);
                if (fieldValidate.attr("data-field-name") == fields.email.attr("data-field-name"))
                    publishersSignupManager.setSuccess(fields.email);
                if (fieldValidate.attr("data-field-name") == fields.name.attr("data-field-name"))
                    publishersSignupManager.setSuccess(fields.name);
                if (fieldValidate.attr("data-field-name") == fields.password.attr("data-field-name"))
                    publishersSignupManager.setSuccess(fields.password);

                if (response.successful) {
                    form.removeClass("invalid").addClass("valid");

                    if (!dryMode) {
                        googleEventTrack('Service response', 'registration success', 'Sign up - service - publisher  registration');

                        if ($("#special-deal-signup-popup").length > 0) {
                            var dealURL = $(".open-deal-popup.active").attr("data-deal-url");
                            window.location = dealURL;
                        } else {
                            if (language == "en") {
                                $.redirectPost(_publishersWelcomeURL, {
                                    'webSiteURL': data.webSiteURL,
                                    'userName': response.data.name,
                                    'pid': response.data.pid,
                                    'wsid': response.data.wsid,
                                    'fbId': response.data.fbId
                                });
                            } else if (language == "es") {
                                $.redirectPost(_publishersWelcomeESURL, {
                                    'webSiteURL': data.webSiteURL,
                                    'userName': response.data.name,
                                    'pid': response.data.pid,
                                    'wsid': response.data.wsid,
                                    'fbId': response.data.fbId
                                });
                            }
                        }
                    }
                }
                else {
                    form.removeClass("valid").addClass("invalid");

                    var websiteUrlErrorSet = false;
                    var emailErrorSet = false;
                    var nameErrorSet = false;
                    var passErrorSet = false;
                    var facebookErrorSet = false;
                    var websiteUrlValid = (fieldValidate && (fieldValidate.attr("data-field-name") == fields.webSiteURL.attr("data-field-name"))) ? true : null;
                    var emailValid = (fieldValidate && (fieldValidate.attr("data-field-name") == fields.email.attr("data-field-name"))) ? true : null;
                    var nameValid = (fieldValidate && (fieldValidate.attr("data-field-name") == fields.name.attr("data-field-name"))) ? true : null;
                    var passwordValid = (fieldValidate && (fieldValidate.attr("data-field-name") == fields.password.attr("data-field-name"))) ? true : null;
                    var fbValid = true;
                    $.each(response.messages, function(i, val) {
                        switch (val.scope) {
                            case "webSiteURL": {
                                if (val.type == "ERROR") {
                                    // This handles only the first error message in-case there's more than one
                                    if (!websiteUrlErrorSet) {
                                        websiteUrlErrorSet = true;
                                        websiteUrlValid = false;
                                        publishersSignupManager.setError(fields.webSiteURL, val.message);
                                    }
                                }
                                break;
                            }
                            case "email": {
                                if (val.type == "ERROR") {
                                    // This handles only the first error message in-case there's more than one
                                    if (!emailErrorSet) {
                                        emailErrorSet = true;
                                        emailValid = false;
                                        publishersSignupManager.setError(fields.email, val.message);
                                    }
                                }
                                break;
                            }
                            case "name": {
                                if (val.type == "ERROR") {
                                    // This handles only the first error message in-case there's more than one
                                    if (!nameErrorSet) {
                                        nameErrorSet = true;
                                        nameValid = false;
                                        publishersSignupManager.setError(fields.name, val.message);
                                    }
                                }
                                break;
                            }
                            case "password": {
                                if (val.type == "ERROR") {
                                    // This handles only the first error message in-case there's more than one
                                    if (!passErrorSet) {
                                        passErrorSet = true;
                                        passwordValid = false;
                                        publishersSignupManager.setError(fields.password, val.message);
                                    }
                                }
                                break;
                            }
                            case "fb-error": {
                                if (val.type == "ERROR") {
                                    // This handles only the first error message in-case there's more than one
                                    if (!facebookErrorSet) {
                                        facebookErrorSet = true;
                                        fbValid = false;
                                        publishersSignupManager.setError(fields.cmd_facebook, val.message);
                                    }
                                }
                                break;
                            }
                        }
                    });
                }

                // Clear the referral cookie
                //setCookie('referral', "", -1);

                if (callback) callback();
            },
            error: function (xhr, status, error) {
                if (window.console) {
                    console.log("An error has occurred while invoking " + _publishersSignupURL,
                        xhr, status, error);
                }

                form
                    //.find(".general-error").show()
                    .find(".form-error").show();

                form.addClass("error");

                if   publishersSignupManager.signup(true, callback, fieldValidate);
    },

    clearError: function(field) {
        field.removeClass("error")
            .parent().find(".sign-up-error").hide();
    },

    setError: function(field, error) {
        field.removeClass("success").addClass("error")
            .parent().find(".sign-up-error").text(error).show();
    },

    setSuccess: function(field) {
        field.removeClass("error").addClass("success")
            .parent().find(".sign-up-error").hide();
    },

    clearStatus: function(field) {
        field.removeClass("error").removeClass("success")
            .parent().find(".sign-up-error").hide();
    },

    registerEvents: function() {
        $(".btnMonetizeSignupWithFacebook").click(function(e) {
            e.stopImmediatePropagation();

            $(".frmSignUpMonetize").attr("data-form-type", "facebook");
            FB.login(function (response) {
                if (response.authResponse) {
                    facebookAccessToken = response.authResponse.accessToken;
                    publishersSignupManager.signup(
                        false,
                        null,
                        publishersSignupManager.fields.form.find(".error").first());
                }
            }, {scope: 'email'});
        });

        $("body").on("click", "#special-deal-signup-popup .linkLogin", function(e) {
            e.preventDefault();

            var loginHTML = $("#special-deal-login").html();
            $("#special-deal-signup-popup").html(loginHTML);
            $("#special-deal-signup-popup").find(".login-tab-monetize").find("iframe").attr("src", $(".mfp-ready").find("#special-deal-signup-popup").find(".login-tab-monetize").find("iframe").attr("src") + "&popup=1");
        });

        window.addEventListener("message", receiveMessage, false);
        function receiveMessage(event)
        {
            var origin = event.origin || event.originalEvent.origin; // For Chrome, the origin property is in the event.originalEvent object.
            if (origin !== "https://publishers.infolinks.com" && origin !== "https://adshop.infolinks.com" && origin !== "https://publishers.qa01.infolinks.local" && origin !== "https://publishers.qa02.infolinks.local")
                return;

            if (event.data.isLoggedIn) {
                var dealURL = $(".open-deal-popup.active").attr("data-deal-url");
                window.lo version: 'v2.2',
                oauth: true
    US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));

        $(".btnMonetizeSignupWithEmail").click(function(e) {
            e.stopImmediatePropagation();
            // Let's first validate the form
            publishersSignupManager.clearError(publishersSignupManager.fields.cmd_facebook);
            $(".frmSignUpMonetize").attr("data-form-type", "email");
            publishersSignupManager.validate(function() {
                if (publishersSignupManager.fields.form.hasClass("valid")) {
                    // Now that the websiteUrl is valid, let's show the rest of the form
                    $(".frmSignUpMonetize_ExtraInfo").slideDown();
                    $(".frmSignUpMonetize_Join").show();

                    // Slide down to the .frmSignUpMonetize_ExtraInfo to make sure it's visible
                    $('html,body').animate({
                        scrollTop: $(".frmSignUpMonetize_ExtraInfo").offset().top - 90
                    }, 1000);
                }

            }, publishersSignupManager.fields.webSiteURL);
        });

        $(".btnMonetizeSignup").click(function(e) {
            e.stopImmediatePropagation();
            // We're done, let's signup!
            publishersSignupManager.signup(
                false,
                null,
                publishersSignupManager.fields.form.find(".error").first());
        });

        publishersSignupManager.fields.form.find(".input-signup").on("blur", function() {
            $(this).addClass("dirty");
            publishersSignupManager.validate(null, $(this));

            if ($(this).val())
                googleEventTrack('Field - sign up', 'completed', 'publisher - ' + $(this).attr("name"));
            else
                googleEventTrack('Field - sign up', 'skipped', 'publisher - ' + $(this).attr("name"));
        });

        publishersSignupManager.fields.form.find(".input-signup").on("keyup", function(e) {
            if (e.keyCode == 13) {
                if (!isMobile.any()) {
                    if ($(".frmSignUpMonetize_ExtraInfo").is(":visible")) {
                        // We're done, let's signup!
                        publishersSignupManager.signup(
                            false,
                            null,
                            publishersSignupManager.fields.form.find(".error").first());
                    }
                    else {
                        publishersSignupManager.validate(null, $(this));
                    }
                } else {
                    publishersSignupManager.validate(null, $(this));
                    $(this).blur();
                }
            }
        });
    },

    init: function() {
        publishersSignupManager.fields = {
            form: $(".frmSignUpMonetize"),
            webSiteURL: $(".inputSignUpMonetizeWebsite"),
            email: $(".inputSignUpMonetizeEmail"),
            name: $(".inputSignUpMonetizeName"),
            password: $(".inputSignUpMonetizePassword"),
            cmd_facebook: $(".btnMonetizeSignupWithFacebook")
        };

        publishersSignupManager.registerEvents();
    }
};

var signupManager = {
    changeTab: function(tab) {
        // Deactivate all options
        $(".sign-up-form").find(".btn-tab").removeClass("active");
        $(".sign-up-form").find(".tab-content").removeClass("active");
        // Activate the clicked option
        var dataTarget = $(tab).attr("data-target");
        $(tab).addClass("active");
        $(dataTarget).addClass("active");
    },

    init_tabs: function() {
        var hash = window.location.hash;

        if (hash == "#advertiser") {
            signupManager.changeTab($(".tab-advertiser"));
        } else if (hash == "#publisher") {
            signupManager.changeTab($(".tab-publisher"));
        }

        $(".sign-up-form").find(".btn-tab").click(function() {
            signupManager.changeTab($(this));
        });
    },

    init: function() {
        $(document).ready(function() {
            signupManager.init_tabs();
            publishersSignupManager.init();

            if ($(".frmContactForm").length > 0) {
                contactManager.init();
            }
        });
    }
};
$(document).ready(function() {
    // Make sure the forms appear on the page before initializing them
    if ($(".sign-up-tab-monetize").length > 0 || $(".sign-up-tab-advertise").length > 0) {
        signupManager.init();
    }
});
;
//
// special deals
//
(function () {
    "use strict";

    // Init
    (function () {
        $(document).ready(function () {
            var isLoggedIn = $("body").hasClass("infolinks-logged-in");

            if (!isLoggedIn) {
                $('.open-deal-popup').magnificPopup({
                    type:'inline',
                    midClick: true,
                    removalDelay: 300,
                    mainClass: 'mfp-fade',
                    callbacks: {
                        open: function() {
                            // Remove this once we support adshop login
                            setTimeout(function() {
                                $(".mfp-ready").find("#special-deal-signup-popup").find(".tab-content").removeClass("active");
                                $(".mfp-ready").find("#special-deal-signup-popup").find(".sign-up-tab-monetize").addClass("active");
                                $(".mfp-ready").find("#special-deal-signup-popup").find(".login-tab-monetize").addClass("active");
                            }, 250);
                        }
                    }
                });
            }

            $('.open-deal-popup').click(function(e) {
                if (isLoggedIn) {
                    e.preventDefault();
                    var dealURL = $(this).attr("data-deal-url");
                    window.location = dealURL;
                } else {
                    $(".open-deal-popup").removeClass("active");
                    $(this).addClass("active");
                }
            });
        });
    }());
}());



;
var loginManager = {
    changeTab: function(tab) {
        // Deactivate all options
        $(".login").find(".btn-tab").removeClass("active");
        $(".login").find(".tab-content").removeClass("active");
        // Activate the clicked option
        var dataTarget = $(tab).attr("data-target");
        $(tab).addClass("active");
        $(dataTarget).addClass("active");
    },

    init_tabs: function() {
        var hash = window.location.hash;

        if (hash == "#advertiser") {
            loginManager.changeTab($(".tab-advertiser"));
        } else if (hash == "#publisher") {
            loginManager.changeTab($(".tab-publisher"));
        }

        $("body").on("click", ".login .btn-tab", function() {
   dy(function() {
     ogin-tab-advertise").length > 0) {
        loginManager.init();
    }
});
;
//var _domain = "http://masta.infolinks.com"; //document.domain;
var _contactURL = '/s/contact-us';
var _contactPublisherConfirmURL = '/publishers/thanks-for-contacting-us/';
var _contactPublisherConfirmESURL = '/es/publishers/thanks-for-contacting-us/';
var _contactAdvertiserConfirmURL = '/advertisers/thanks-for-contacting-us/';
var _contactAdvertiserConfirmESURL = '/es/advertisers/thanks-for-contacting-us/';

var contactManager = {
    contact: function() {
        var fields = contactManager.fields;
        var form = contactManager.fields.form;
        var data = form.serializeObject();
        var url = _contactURL;

        // SerializeObject kinda suck with dropdowns :/
        if (data.origin_wf instanceof Array) {
            data.origin_wf = data.origin_wf[0];
        }
        if (data.contactReason instanceof Array) {
            data.contactReason = data.contactReason[0];
        }

        // Let's add the meta-data
        //data.origin_wf_wf = "MARKETPLACE";
        data.languageCode = language;
        if (!data.contactReason)
            data.contactReason = "OTHER";

        // Prepend the budget into the comments field, ONLY IN PUBLISHERS MODE!
        if (data.origin_wf == "Website advertisers contact form" ||
            data.origin_wf == "MARKETPLACE") {
            if (data.budget) {
                data.comments = "[" + data.budget + "] " + (data.comments || "");
            }
        }
        // Remove the budget field since it was just a placeholder.
        delete data.budget;

        $.ajax({
            type: 'POST',
            url: _contactURL,
            headers: {
                Accept: 'application/json',
                "Accept-Language": language
            },
            data: data,
            success: function (response, status) {
                form
                    .find(".general-error").hide()
                    .find(".form-error").hide();

                if (contactManager.fields.formType == "advertisers") {
                    // Initially, let's set all fields as 'success'
                    if (fields.name.hasClass("dirty"))
                        contactManager.setSuccess(fields.name);
                    if (fields.email.hasClass("dirty"))
                        contactManager.setSuccess(fields.email);
                    if (fields.company.hasClass("dirty"))
                        contactManager.setSuccess(fields.company);
                    if (fields.budget.hasClass("dirty"))
                        contactManager.setSuccess(fields.budget);
                }
                else if (contactManager.fields.formType == "contact") {
                    // Initially, let's set all fields as 'success'
                    if (fields.name.hasClass("dirty"))
                        contactManager.setSuccess(fields.name);
                    if (fields.email.hasClass("dirty"))
                        contactManager.setSuccess(fields.email);
                    if (fields.company.hasClass("dirty"))
                        contactManager.setSuccess(fields.company);
                    if (fields.origin.hasClass("dirty"))
                        contactManager.setSuccess(fields.origin);
                    if (fields.topic.hasClass("dirty"))
                        contactManager.setSuccess(fields.topic);
                    if (fields.budget.hasClass("dirty"))
                        contactManager.setSuccess(fields.budget);
                    if (fields.comments.hasClass("dirty"))
                        contactManager.setSuccess(fields.comments);
                }

                if (response.successful) {
                    form.removeClass("invalid").addClass("valid");

                    // Show confirmation message
                    if (fields.formType == "advertisers") {
                        googleEventTrack('Service response', 'registration success', 'Sign up - service - advertiser registration');

                        if (language == "en") {
                            window.location.href = _contactAdvertiserConfirmURL;
                        } else if (language == "es") {
                            window.location.href = _contactAdvertiserConfirmESURL;
                        }
                    }
                    else if (fields.formType == "contact") {
                        googleEventTrack('Service response', 'contact us call sent', 'Contact us - service - succesfully sent');

                        if ($(".frmContactForm").attr("data-user") == "publishers") {
                            if (language == "en") {
                                window.location.href = _contactPublisherConfirmURL;
                            } else if (language == "es") {
                                window.location.href = _contactPublisherConfirmESURL;
                            }
                        } else if ($(".frmContactForm").attr("data-user") == "advertisers") {
                            if (language == "en") {
                                window.location.href = _contactAdvertiserConfirmURL;
                            } else if (language == "es") {
                                window.location.href = _contactAdvertiserConfirmESURL;
                            }
                        }
                    }

                    //$(".frmContactForm").hide();
                    //$(".frmContactForm_Success").show();
                }
                else {
                    var nameErrorSet = false;
                    var emailErrorSet = false;
                    var companyErrorSet = false;
                    var originErrorSet = false;
                    var topicErrorSet = false;
                    var budgetErrorSet = false;
                    $.each(response.messages, function(i, val) {
                        switch (val.scope) {
                            case "name": {
                                if (val.type == "ERROR") {
                                    // This handles only the first error message in-case there's more than one
                                    if (!nameErrorSet) {
                                        nameErrorSet = true;
                                        contactManager.setError(fields.name, val.message);
                                    }
                                }
                                break;
                            }
                            case "email": {
                                if (val.type == "ERROR") {
                                    // This handles only the first error message in-case there's more than one
                                    if (!emailErrorSet) {
                                        emailErrorSet = true;
                                        contactManager.setError(fields.email, val.message);
                                    }
                                }
                                break;
                            }
                            case "advertiserCompany": {
                                if (val.type == "ERROR") {
                                    // This handles only the first error message in-case there's more than one
                                    if (!companyErrorSet) {
                                        companyErrorSet = true;
                                        contactManager.setError(fields.company, val.message);
                                    }
                                }
                                break;
                            }
                            case "origin_wf": {
                                if (val.type == "ERROR") {
                                    // This handles only the first error message in-case there's more than one
                                    if (!originErrorSet) {
                                        originErrorSet = true;
                                        contactManager.setError(fields.origin, val.message);
                                    }
                                }
                                break;
                            }
                            case "contactReason": {
                                if (val.type == "ERROR") {
                                    // This handles only the first error message in-case there's more than one
                                    if (!topicErrorSet) {
                                        topicErrorSet = true;
                                        contactManager.setError(fields.topic, val.message);
                                    }
                                }
                                break;
                            }
                            case "comments": {
                                if (val.type == "ERROR") {
                                    // This handles only the first error message in-case there's more than one
                                    if (!budgetErrorSet) {
                                        budgetErrorSet = true;
                                        contactManager.setError(fields.budget, val.message);
                                    }
                                }
                                break;
                            }
                        }
                    });
                }
            },
            error: function (xhr, status, error) {
                if (window.console) {
                    console.log("An error has occurred while invoking " + _contactURL,
                        xhr, status, error);
                }

                form
                    .find(".general-error").show()
                    .find(".form-error").show();

                form.addClass("error");
            }
        });
    },

    validate: function(validateField) {
        var fields = contactManager.fields;
        var form = contactManager.fields.form;
        var data = form.serializeObject();
        var validateAll = !validateField ? true : false;
        var isValid = true;

        // SerializeObject kinda suck with dropdowns :/
        if (data.origin_wf instanceof Array) {
            data.origin_wf = data.origin_wf[0];
        }
        if (data.contactReason instanceof Array) {
            data.contactReason = data.contactReason[0];
        }

        // Make sure we need to validate this field
        if (fields.name && (validateAll || validateField.attr("data-field-name") == fields.name.attr("data-field-name"))) {
            if (!_.trim(data.name)) {
                isValid = false;
                contactManager.setError(fields.name, fields.name.attr("data-required"));
            }
            else {
                contactManager.setSuccess(fields.name);
            }
        }

        // Make sure we need to validate this field
        if (fields.email && (validateAll || validateField.attr("data-field-name") == fields.email.attr("data-field-name"))) {
            if (!data.email) {
                isValid = false;
                contactManager.setError(fields.email, fields.email.attr("data-required"));
            }
            else {
                var isValidEmail = true;
                var regex_email = /^(([a-zA-Z]|[0-9])|([-]|[_]|[.]))+[@](([a-zA-Z0-9])|([-])){2,63}([.](([a-zA-Z0-9]){1,63})+){1,2}$/gi;
                if (!regex_email.test(data.email)) {
                    isValidEmail = false;
                    contactManager.setError(fields.email, fields.email.attr("data-valid"));
                }

                if (isValidEmail)
                    contactManager.setSuccess(fields.email);
            }
        }

        // Make sure we need to validate this field
        if (fields.origin && (validateAll || validateField.attr("data-field-name") == fields.origin.attr("data-field-name"))) {
            if (!data.origin_wf) {
                isValid = false;
                contactManager.setError(fields.origin, fields.origin.attr("data-required"));
            }
            else {
                contactManager.setSuccess(fields.origin);
            }
        }

        // Make sure we need to validate this field
        if (fields.topic && (validateAll || validateField.attr("data-field-name") == fields.topic.attr("data-field-name"))) {
            if (!data.budget) {
                isValid = false;
                contactManager.setError(fields.topic, fields.topic.attr("data-required"));
            }
            else {
                contactManager.setSuccess(fields.topic);
            }
        }

        return isValid;
    },

    setError: function(field, error) {
        field.removeClass("success").addClass("error")
            .parent().find(".contact-error").text(error).show();
    },

    clearError: function(field) {
        field.removeClass("error")
            .parent().find(".contact-error").hide();
    },

    setSuccess: function(field) {
        field.removeClass("error").addClass("success")
            .parent().find(".contact-error").hide();
    },

    registerEvents: function() {
        if (contactManager.fields.formType == "advertisers") {
            $(".btnAdvertiseSignup").click(function (e) {
                e.stopImmediatePropagation();
                if (contactManager.validate()) {
                    // We're done, let's signup!
                    contactManager.contact();
                }
            });
        }
        else if (contactManager.fields.formType == "contact") {
            $(".btnContact").click(function (e) {
                e.stopImmediatePropagation();
                if (contactManager.validate()) {
                    // We're done, let's signup!
                    contactManager.contact();
                }
            });

            $(".inputContactHelp").change(function(e) {
                var selected = $(this).val();
                if (selected == "Website publishers contact form") {
                    $(".frmContactForm").attr("data-user", "publishers");
                    $(".frmContactForm_Company").hide();
                    $(".frmContactForm_Budget").hide();
                    $(".frmContactForm_Topic").show();
                }
                else if (selected == "Website advertisers contact form") {
                    $(".frmContactForm").attr("data-user", "advertisers");
                    $(".frmContactForm_Topic").hide();
                    $(".frmContactForm_Budget").show();
                    $(".frmContactForm_Company").show();
                }
            });
        }

        contactManager.fields.form.find(".input-contact").on("blur change", function() {
            $(this).addClass("dirty");
            contactManager.validate($(this));

            if (contactManager.fields.formType == "advertisers") {
                if ($(this).val())
                    googleEventTrack('Field - sign-up', 'completed', 'Contact us - ' + $(this).attr("name"));
                else
                    googleEventTrack('Field - sign-up', 'skipped', 'Contact us - ' + $(this).attr("name"));
            } else if (contactManager.fields.formType == "contact") {
                if ($(this).val())
                    googleEventTrack('Field - contact-us', 'completed', 'Contact us - ' + $(this).attr("name"));
                else
                    googleEventTrack('Field - contact-us', 'skipped', 'Contact us - ' + $(this).attr("name"));
            }
        });

        contactManager.fields.form.find(".input-validate").on("keyup", function(e) {
            if(e.keyCode == 13) {
                if (!isMobile.any()) {
                    if (contactManager.validate()) {
                        // We're done, let's signup!
                        contactManager.contact();
                    }
                } else {
                    contactManager.validate($(this));
                    $(this).blur();
                }
            }
        });
    },

    init: function() {
        var dataType = $(".frmContactForm").attr("data-type");

        if (dataType == "advertisers") {
            contactManager.fields = {
                form: $(".frmContactForm"),
                formType: dataType,
                email: $(".inputSignUpAdvertiseEmail"),
                name: $(".inputSignUpAdvertiseName"),
                budget: $(".inputSignUpAdvertiseBudget"),
                company: $(".inputSignUpAdvertiseCompany")
            };

            contactManager.fields.budget.find("option:eq(0)").prop('selected', true);
        }
        else if (dataType == "contact") {
            contactManager.fields = {
                form: $(".frmContactForm"),
                formType: dataType,
                name: $(".inputContactName"),
                email: $(".inputContactEmail"),
                company: $(".inputSignUpAdvertiseCompany"),
                origin: $(".inputContactHelp"),
                topic: $(".inputContactTopic"),
                budget: $(".inputContactBudget"),
                comments: $(".inputMessage")
            };

            contactManager.fields.origin.find("option:eq(0)").prop('selected', true);
            contactManager.fields.topic.find("option:eq(0)").prop('selected', true);
            contactManager.fields.budget.find("option:eq(0)").prop('selected', true);
        }

        // Let's clear the form
        contactManager.fields.form.find("input[type=text], input[type=email], textarea").val("");

        contactManager.registerEvents();
    }
};
$(document).ready(function() {
    if ($(".frmContactForm").length > 0) {
        contactManager.init();
    }
});
;
//var _domain = "http://masta.infolinks.com"; //document.domain;
var _passwordRecoveryURL = '/s/customers/password-recovery/request';

var passwordManager = {
    reset: function() {
        var fields = passwordManager.fields;
        var form = passwordManager.fields.form;
        var data = form.serializeObject();
        var url = _passwordRecoveryURL;

        // Let's add the meta-data
        data.userLanguage = language;

        $.ajax({
            type: 'POST',
            url: _passwordRecoveryURL,
            headers: {
                Accept: 'application/json',
                "Accept-Language": language
            },
            data: data,
            success: function (response, status) {
                form
                    .find(".general-error").hide()
                    .find(".form-error").hide();

                // Initially, let's set all fields as 'success'
                if (fields.email.hasClass("dirty"))
                    passwordManager.setSuccess(fields.email);

                if (response.successful) {
                    form.removeClass("invalid").addClass("valid");

                    // Show confirmation message
                    $(".frmPasswordRecovery").hide();
                    $(".frmPasswordRecovery_Success").show();

                    googleEventTrack('Service response', 'email sent for recovery', 'Password recovery - email submit success');
                }
                else {
                    var emailErrorSet = false;
                    $.each(response.messages, function(i, val) {
                        switch (val.scope) {
                            case "email": {
                                if (val.type == "ERROR") {
                                    // This handles only the first error message in-case there's more than one
                                    if (!emailErrorSet) {
                                        emailErrorSet = true;
                                        passwordManager.setError(fields.email, val.message);
                                    }
                                }
                                break;
                            }
                        }
                    });
                }
            },
            error: function (xhr, status, error) {
                if (window.console) {
                    console.log("An error has occurred while invoking " + _passwordRecoveryURL,
                        xhr, status, error);
                }

                form
                    .find(".general-error").show()
                    .find(".form-error").show();

                form.addClass("error");

                passwordManager.setError(fields.email, error);
            }
        });
    },

    validate: function(validateField) {
        var fields = passwordManager.fields;
        var form = passwordManager.fields.form;
        var data = form.serializeObject();
        var validateAll = !validateField ? true : false;
        var isValid = true;

        // Make sure we need to validate this field
        if (validateAll || validateField.attr("data-field-name") == fields.email.attr("data-field-name")) {
            if (!data.email) {
                isValid = false;
                passwordManager.setError(fields.email, fields.email.attr("data-required"));
            }
            else {
                var isValidEmail = true;
                var regex_email = /^(([a-zA-Z]|[0-9])|([-]|[_]|[.]))+[@](([a-zA-Z0-9])|([-])){2,63}([.](([a-zA-Z0-9]){1,63})+){1,2}$/gi;
                if (!regex_email.test(data.email)) {
                    isValidEmail = false;
                    passwordManager.setError(fields.email, fields.email.attr("data-valid"));
                }

                if (isValidEmail)
                    passwordManager.setSuccess(fields.email);
            }
        }

        return isValid;
    },

    setError: function(field, error) {
        field.removeClass("success").addClass("error")
            .parent().find(".reset-pass-error").text(error).show();
    },

    clearError: function(field) {
        field.removeClass("error")
            .parent().find(".reset-pass-error").hide();
    },

    setSuccess: function(field) {
        field.removeClass("error").addClass("success")
            .parent().find(".reset-pass-error").hidpreventDefault();
                return false;
            }
        });

        $(".btnResetPassword").click(function (e) {
            e.preventDefault();
            e.stopImmediatePropagation();
            if (passwordManager.validate()) {
                // We're done, let's reset!
                passwordManager.reset();
            }
        });

 lass("dirty");
            passwordManager.validate($(this));
        });

        passwordManager.fields.form.find(".input-reset-pass").on("keyup", function(e) {
            if(e.keyCode == 13)
            {
                if (!isMobile.any()) {
                    if (passwordManager.validate()) {
                        // We're done, let's reset!
                        passwordManager.reset();
                    }
                } else {
                    passwordManager.validate($(this));
                    $(this).blur();
                }
            }
        });
    },

    changeTab: function(tab) {
        // Deactivate all options
        $(".reset-password").find(".btn-tab").removeClass("active");
        $(".reset-password").find(".tab-content").removeClass("active");
        // Activate the clicked option
        var dataTarget = $(tab).attr("data-target");
        $(tab).addClass("active");
        $(dataTarget).addClass("active");
    },

    init_tabs: function() {
        var hash = window.location.hash;

        if (hash == "#advertiser") {
            passwordManager.changeTab($(".tab-advertiser"));
        } else if (hash == "#publisher") {
            passwordManager.changeTab($(".tab-publi(function() {
            passwordManager.changeTab($(this));
        });
    },

    init: function() {
        passwordManager.fields = {
            form: $(".frmPasswordRecovery"),
            email: $(".inputEmail")
        };

        passwordManager.registerEvents();

        if ($(".forgotpass-tab-advertise").length > 0 || $(".forgotpass-tab-advertise").length > 0) {
      asswordRecovery").length > 0) {
        passwordManager.init();
    }
});
;
var EVENTS = {
    GENERAL_PAGE_VISIT: {
        CATEGORY: "Page",
        ACTION: "user visit",
        LABEL: "%s - visited"
    },
    GENERAL_HEADER_LOGIN_PUBLISHER: {
        CATEGORY: "Link",
        ACTION: "Link to login page",
        LABEL: "Header - login - publisher"
    },
    GENERAL_HEADER_SIGNUP: {
        CATEGORY: "Button",
        ACTION: "link to sign up page",
        LABEL: "Header - sign up"
    },
    GENERAL_HEADER_MY_ACCOUNT: {
        CATEGORY: "Link",
        ACTION: "Link to publisher center",
        LABEL: "Header - my account"
    },
    HOMEPAGE_HERO_SIGNUP: {
        CATEGORY: "Button",
        ACTION: "link to sign up form",
        LABEL: "Homepage - hero - sign up"
    },
    HOMEPAGE_HERO_WATCH_VIDEO_BUTTON: {
        CATEGORY: "Video - marketing",
        ACTION: "click to play",
        LABEL: "Homepage - hero - watch video button"
    },
    HOMEPAGE_FEATURED_TESTIMONIAL: {
        CATEGORY: "Video - testimonials",
        ACTION: "click to play",
        LABEL: "Homepage - %s - image"
    },
    HOMEPAGE_PUB_TESTIMONIALS_SIGNUP: {
        CATEGORY: "Button",
        ACTION: "link to sign up form",
        LABEL: "Homepage - pub testimonials - sign up"
    },
    HOMEPAGE_PUBLISHERS_CTA_SIGNUP: {
        CATEGORY: "Button",
        ACTION: "link to sign up form",
        LABEL: "Homepage - publishers cta - sign up"
    },
    HOMEPAGE_ADVERTISERS_CTA_READ_MORE_LINK: {
        CATEGORY: "Link",
        ACTION: "link to advertisers page",
        LABEL: "Homepage - advertisers cta - read more link"
    },
    HOMEPAGE_FOOTER_OPT_OUT: {
        CATEGORY: "Link",
        ACTION: "open opt out section",
        LABEL: "Homepage - footer - opt out"
    },
    HOMEPAGE_OPT_OUT_SECTION_CONFIRM: {
        CATEGORY: "Button",
        ACTION: "click to opt out",
        LABEL: "Homepage - opt out section - confirm"
    },
    SIGNUP_TOGGLE_PUBLISHER_SELECTED: {
        CATEGORY: "Button",
        ACTION: "sign up toggle",
        LABEL: "Sign up - toggle - publisher selected"
    },
    SIGNUP_TOGGLE_ADVERTISER_SELECTED: {
        CATEGORY: "Button",
        ACTION: "sign up toggle",
        LABEL: "Sign up - toggle - advertiser selected"
    },
    SIGNUP_WITH_EMAIL: {
        CATEGORY: "Button",
        ACTION: "select sign up method",
        LABEL: "Sign up - with email"
    },
    SIGNUP_WITH_FACEBOOK: {
        CATEGORY: "Button",
        ACTION: "select sign up method",
        LABEL: "Sign up - with facebook"
    },
    SIGNUP_JOIN_BUTTON_PUBLISHER: {
        CATEGORY: "Button",
        ACTION: "click to join",
        LABEL: "Sign up  - join button - publisher"
    },
    SIGNUP_JOIN_BUTTON_ADVERTISER: {
        CATEGORY: "Button",
        ACTION: "click to join",
        LABEL: "Sign up  - join button - advertiser"
    },
    SIGNUP_PUBLISHER_LOGIN: {
        CATEGORY: "Link",
        ACTION: "Link to login page",
        LABEL: "Sign up  - publisher - login"
    },
    SIGNUP_ADVERTISER_LOGIN: {
        CATEGORY: "Link",
        ACTION: "Link to login page",
        LABEL: "Sign up  - advertiser - login"
    },
    PUBLISHERS_HERO_SIGNUP: {
        CATEGORY: "Button",
        ACTION: "link to sign up form",
        LABEL: "Publishers - hero - sign up"
    },
    PUBLISHERS_TESTIMONIAL_IMAGE: {
        CATEGORY: "Video - testimonials",
        ACTION: "click to play",
        LABEL: "Publishers - %s - image"
    },
    PUBLISHERS_TESTIMONIAL_LINK: {
        CATEGORY: "Video - testimonials",
        ACTION: "click to play",
        LABEL: "Publishers - %s - link"
    },
    ADVERTISERS_HERO_SIGNUP: {
        CATEGORY: "Button",
        ACTION: "link to sign up form",
        LABEL: "Adverisers - hero - sign up"
    },
    PRODUCTS_HERO_SIGNUP: {
        CATEGORY: "Button",
        ACTION: "link to sign up form",
        LABEL: "Products - hero - sign up"
    },
    PRODUCTS_PRODUCT_SIGNUP: {
        CATEGORY: "Button",
        ACTION: "link to sign up form",
        LABEL: "Products - %s - sign up"
    },
    PRODUCTS_PRODUCT_BUTTON: {
        CATEGORY: "Video - products",
        ACTION: "click to play",
        LABEL: "Products - %s - button"
    },
    CONTACT_US_SEND_CLICKED: {
        CATEGORY: "Button",
        ACTION: "click to send",
        LABEL: "Contact us - send clicked"
    },
    CARRERS_JOB: {
        CATEGORY: "Button",
        ACTION: "open job decription",
        LABEL: "Careers - jobs - %s"
    },
    WELCOME_INTEGRATE_COPY_BUTTON: {
        CATEGORY: "Button",
        ACTION: "click to copy script",
        LABEL: "Welcome - integrate - copy button"
    },
    WELCOME_INTEGRATE_COPY_CODE: {
        CATEGORY: "Field - integration code",
        ACTION: "click to copy script",
        LABEL: "Welcome - integrate - copy code"
    },
    WELCOME_QUESTIONS_TUTORIAL_IMAGE: {
        CATEGORY: "Video - tutorials",
        ACTION: "click to play",
        LABEL: "Welcome - questions - tutorial image"
    },
    WELCOME_QUESTIONS_TUTORIAL_LINK: {
        CATEGORY: "Video - tutorials",
        ACTION: "click to play",
        LABEL: "Welcome - questions - tutorial link"
    },
    WELCOME_QUESTIONS_SUPPORT_IMAGE: {
        CATEGORY: "Video - tutorials",
        ACTION: "link to support",
        LABEL: "Welcome - questions - support image"
    },
    WELCOME_QUESTIONS_SUPPORT_LINK: {
        CATEGORY: "Video - tutorials",
        ACTION: "link to support",
        LABEL: "Welcome - questions - support link"
    },
    WELCOME_QUESTIONS_FACEBOOK_LINK: {
        CATEGORY: "Link",
        ACTION: "link to Facebook",
        LABEL: "Welcome - questions - Facebook link"
    },
    WELCOME_QUESTIONS_BLOG_LINK: {
        CATEGORY: "Link",
        ACTION: "link to blog",
        LABEL: "Welcome - questions - blog link"
    },
    WELCOME_INTEGRATE_PLATFORM_VERSION: {
        CATEGORY: "Button",
        ACTION: "click to download plugin",
        LABEL: "Welcome - integrate - %s - %s"
    },
    PASSWORD_RECOVERY_SUBMIT: {
        CATEGORY: "Button",
        ACTION: "submit email",
        LABEL: "Password recovery - submit"
    },
    E_404_HOMEPAGE_LINK: {
        CATEGORY: "Link",
        ACTION: "link to homepage",
        LABEL: "404 - hompage link"
    },
    E_404_CONTACT_US_LINK: {
        CATEGORY: "Link",
        ACTION: "link to contact us",
        LABEL: "404 - contact us link"
    },
    E_500_FACEBOOK_LINK: {
        CATEGORY: "Link",
        ACTION: "link to Facebook",
        LABEL: "500 - Facebook link"
    },
    SUPPORT_MOBILE_APP_ANDROID_BUTTON: {
        CATEGORY: "Button",
        ACTION: "link to mobile app",
        LABEL: "Support - mobile app - Android Button"
    },
    SUPPORT_MOBILE_APP_IPHONE_BUTTON: {
        CATEGORY: "Button",
        ACTION: "link to mobile app",
        LABEL: "Support - mobile app - iPhone Button"
    },
    SUPPORT_TRACK_MY_EARNINGS_ANDROID_BUTTON: {
        CATEGORY: "Button",
        ACTION: "link to mobile app",
        LABEL: "Support  - track my earnings - Android Button"
    },
    SUPPORT_TRACK_MY_EARNINGS_IPHONE_BUTTON: {
        CATEGORY: "Button",
        ACTION: "link to mobile app",
        LABEL: "Support  - track my earnings - iPhone Button"
    }
};
;
$(document).ready(function(){

    // google analytics event tracking data
    var googleAnalyticsEvents = [
        // Common
        // {el: null, category: 'Page', action: 'user visit', label: '[page name] - visited'},

        // Homepage
        {el: '#sign-menu .sign-in', category: EVENTS.GENERAL_HEADER_LOGIN_PUBLISHER.CATEGORY, action: EVENTS.GENERAL_HEADER_LOGIN_PUBLISHER.ACTION, label: EVENTS.GENERAL_HEADER_LOGIN_PUBLISHER.LABEL},
        {el: '#sign-menu .sign-up', category: EVENTS.GENERAL_HEADER_SIGNUP.CATEGORY, action: EVENTS.GENERAL_HEADER_SIGNUP.ACTION, label: EVENTS.GENERAL_HEADER_SIGNUP.LABEL},
        {el: '#sign-menu .my-account', category: EVENTS.GENERAL_HEADER_MY_ACCOUNT.CATEGORY, action: EVENTS.GENERAL_HEADER_MY_ACCOUNT.ACTION, label: EVENTS.GENERAL_HEADER_MY_ACCOUNT.LABEL},
        {el: '#btnHomepageSignup', category: EVENTS.HOMEPAGE_HERO_SIGNUP.CATEGORY, action: EVENTS.HOMEPAGE_HERO_SIGNUP.ACTION, label: EVENTS.HOMEPAGE_HERO_SIGNUP.LABEL},
        {el: '#btnHomepageWatchVideo', category: EVENTS.HOMEPAGE_HERO_WATCH_VIDEO_BUTTON.CATEGORY, action: EVENTS.HOMEPAGE_HERO_WATCH_VIDEO_BUTTON.ACTION, label: EVENTS.HOMEPAGE_HERO_WATCH_VIDEO_BUTTON.LABEL},
        //{el: '#btnWatchTestimonialDanielPinna', category: EVENTS.HOMEPAGE_FEATURED_TESTIMONIAL.CATEGORY, action: EVENTS.HOMEPAGE_FEATURED_TESTIMONIAL.ACTION, label: EVENTS.HOMEPAGE_FEATURED_TESTIMONIAL.LABEL},
        {el: '#btnBecomeAPublisher', category: EVENTS.HOMEPAGE_PUB_TESTIMONIALS_SIGNUP.CATEGORY, action: EVENTS.HOMEPAGE_PUB_TESTIMONIALS_SIGNUP.ACTION, label: EVENTS.HOMEPAGE_PUB_TESTIMONIALS_SIGNUP.LABEL},
        {el: '#btnJoinAsAPublisher', category: EVENTS.HOMEPAGE_PUBLISHERS_CTA_SIGNUP.CATEGORY, action: EVENTS.HOMEPAGE_PUBLISHERS_CTA_SIGNUP.ACTION, label: EVENTS.HOMEPAGE_PUBLISHERS_CTA_SIGNUP.LABEL},
        {el: '#btnReadMore', category: EVENTS.HOMEPAGE_ADVERTISERS_CTA_READ_MORE_LINK.CATEGORY, action: EVENTS.HOMEPAGE_ADVERTISERS_CTA_READ_MORE_LINK.ACTION, label: EVENTS.HOMEPAGE_ADVERTISERS_CTA_READ_MORE_LINK.LABEL},
        {el: '.nav-opt-out', category: EVENTS.HOMEPAGE_FOOTER_OPT_OUT.CATEGORY, action: EVENTS.HOMEPAGE_FOOTER_OPT_OUT.ACTION, label: EVENTS.HOMEPAGE_FOOTER_OPT_OUT.LABEL},
        {el: '#cmdOptOut', category: EVENTS.HOMEPAGE_OPT_OUT_SECTION_CONFIRM.CATEGORY, action: EVENTS.HOMEPAGE_OPT_OUT_SECTION_CONFIRM.ACTION, label: EVENTS.HOMEPAGE_OPT_OUT_SECTION_CONFIRM.LABEL},
        // Signup form
        {el: '.tab-publisher', category: EVENTS.SIGNUP_TOGGLE_PUBLISHER_SELECTED.CATEGORY, action: EVENTS.SIGNUP_TOGGLE_PUBLISHER_SELECTED.ACTION, label: EVENTS.SIGNUP_TOGGLE_PUBLISHER_SELECTED.LABEL},
        {el: '.tab-advertiser', category: EVENTS.SIGNUP_TOGGLE_ADVERTISER_SELECTED.CATEGORY, action: EVENTS.SIGNUP_TOGGLE_ADVERTISER_SELECTED.ACTION, label: EVENTS.SIGNUP_TOGGLE_ADVERTISER_SELECTED.LABEL},
        {el: '.btnMonetizeSignupWithEmail', category: EVENTS.SIGNUP_WITH_EMAIL.CATEGORY, action: EVENTS.SIGNUP_WITH_EMAIL.ACTION, label: EVENTS.SIGNUP_WITH_EMAIL.LABEL},
        {el: '.btnMonetizeSignupWithFacebook', category: EVENTS.SIGNUP_WITH_FACEBOOK.CATEGORY, action: EVENTS.SIGNUP_WITH_FACEBOOK.ACTION, label: EVENTS.SIGNUP_WITH_FACEBOOK.LABEL},
        {el: '.btnMonetizeSignup', category: EVENTS.SIGNUP_JOIN_BUTTON_PUBLISHER.CATEGORY, action: EVENTS.SIGNUP_JOIN_BUTTON_PUBLISHER.ACTION, label: EVENTS.SIGNUP_JOIN_BUTTON_PUBLISHER.LABEL},
        {el: '.btnAdvertiseSignup', category: EVENTS.SIGNUP_JOIN_BUTTON_ADVERTISER.CATEGORY, action: EVENTS.SIGNUP_JOIN_BUTTON_ADVERTISER.ACTION, label: EVENTS.SIGNUP_JOIN_BUTTON_ADVERTISER.LABEL},
        {el: '.sign-up-tab-monetize .linkLogin', category: EVENTS.SIGNUP_PUBLISHER_LOGIN.CATEGORY, action: EVENTS.SIGNUP_PUBLISHER_LOGIN.ACTION, label: EVENTS.SIGNUP_PUBLISHER_LOGIN.LABEL},
        {el: '.sign-up-tab-advertise .linkLogin', category: EVENTS.SIGNUP_ADVERTISER_LOGIN.CATEGORY, action: EVENTS.SIGNUP_ADVERTISER_LOGIN.ACTION, label: EVENTS.SIGNUP_ADVERTISER_LOGIN.LABEL},
        // Publishers
        {el: '#btnPublishersSignup', category: EVENTS.PUBLISHERS_HERO_SIGNUP.CATEGORY, action: EVENTS.PUBLISHERS_HERO_SIGNUP.ACTION, label: EVENTS.PUBLISHERS_HERO_SIGNUP.LABEL},
        // {el: '#TestimonialAnnemarieFraser .watch-video-image', category: EVENTS.PUBLISHERS_TESTIMONIAL_IMAGE.CATEGORY, action: EVENTS.PUBLISHERS_TESTIMONIAL_IMAGE.ACTION, label: EVENTS.PUBLISHERS_TESTIMONIAL_IMAGE.LABEL},
        // {el: '#TestimonialAnnemarieFraser .watch-video-link', category: EVENTS.PUBLISHERS_TESTIMONIAL_LINK.CATEGORY, action: EVENTS.PUBLISHERS_TESTIMONIAL_LINK.ACTION, label: EVENTS.PUBLISHERS_TESTIMONIAL_LINK.LABEL},
        // {el: '#TestimonialDanielPinna .watch-video-image', category: EVENTS.PUBLISHERS_TESTIMONIAL_IMAGE.CATEGORY, action: EVENTS.PUBLISHERS_TESTIMONIAL_IMAGE.ACTION, label: EVENTS.PUBLISHERS_TESTIMONIAL_IMAGE.LABEL},
        // {el: '#TestimonialDanielPinna .watch-video-link', category: EVENTS.PUBLISHERS_TESTIMONIAL_LINK.CATEGORY, action: EVENTS.PUBLISHERS_TESTIMONIAL_LINK.ACTION, label: EVENTS.PUBLISHERS_TESTIMONIAL_LINK.LABEL},
        // {el: '#TestimonialJenniferChau .watch-video-image', category: EVENTS.PUBLISHERS_TESTIMONIAL_IMAGE.CATEGORY, action: EVENTS.PUBLISHERS_TESTIMONIAL_IMAGE.ACTION, label: EVENTS.PUBLISHERS_TESTIMONIAL_IMAGE.LABEL},
        // {el: '#TestimonialJenniferChau .watch-video-link', category: EVENTS.PUBLISHERS_TESTIMONIAL_LINK.CATEGORY, action: EVENTS.PUBLISHERS_TESTIMONIAL_LINK.ACTION, label: EVENTS.PUBLISHERS_TESTIMONIAL_LINK.LABEL},
        // {el: '#TestimonialTrishDonoghue .watch-video-image', category: EVENTS.PUBLISHERS_TESTIMONIAL_IMAGE.CATEGORY, action: EVENTS.PUBLISHERS_TESTIMONIAL_IMAGE.ACTION, label: EVENTS.PUBLISHERS_TESTIMONIAL_IMAGE.LABEL},
        // {el: '#TestimonialTrishDonoghue .watch-video-link', category: EVENTS.PUBLISHERS_TESTIMONIAL_LINK.CATEGORY, action: EVENTS.PUBLISHERS_TESTIMONIAL_LINK.ACTION, label: EVENTS.PUBLISHERS_TESTIMONIAL_LINK.LABEL},
        // Advertisers
        {el: '#btnAdvertiserSignup', category: EVENTS.ADVERTISERS_HERO_SIGNUP.CATEGORY, action: EVENTS.ADVERTISERS_HERO_SIGNUP.ACTION, label: EVENTS.ADVERTISERS_HERO_SIGNUP.LABEL},
        // Products
        {el: '#btnProductsSignup', category: EVENTS.PRODUCTS_HERO_SIGNUP.CATEGORY, action: EVENTS.PRODUCTS_HERO_SIGNUP.ACTION, label: EVENTS.PRODUCTS_HERO_SIGNUP.LABEL},
        // {el: '#btnInFoldSignup', category: EVENTS.PRODUCTS_PRODUCT_SIGNUP.CATEGORY, action: EVENTS.PRODUCTS_PRODUCT_SIGNUP.ACTION, label: EVENTS.PRODUCTS_PRODUCT_SIGNUP.LABEL},
        // {el: '#btnInFoldWatchVideo', category: EVENTS.PRODUCTS_PRODUCT_BUTTON.CATEGORY, action: EVENTS.PRODUCTS_PRODUCT_BUTTON.ACTION, label: EVENTS.PRODUCTS_PRODUCT_BUTTON.LABEL},
        // {el: '#btnInScreenSignup', category: EVENTS.PRODUCTS_PRODUCT_SIGNUP.CATEGORY, action: EVENTS.PRODUCTS_PRODUCT_SIGNUP.ACTION, label: EVENTS.PRODUCTS_PRODUCT_SIGNUP.LABEL},
        // {el: '#btnInScreenWatchVideo', category: EVENTS.PRODUCTS_PRODUCT_BUTTON.CATEGORY, action: EVENTS.PRODUCTS_PRODUCT_BUTTON.ACTION, label: EVENTS.PRODUCTS_PRODUCT_BUTTON.LABEL},
        // {el: '#btnInTextSignup', category: EVENTS.PRODUCTS_PRODUCT_SIGNUP.CATEGORY, action: EVENTS.PRODUCTS_PRODUCT_SIGNUP.ACTION, label: EVENTS.PRODUCTS_PRODUCT_SIGNUP.LABEL},
        // {el: '#btnInTextWatchVideo', category: EVENTS.PRODUCTS_PRODUCT_BUTTON.CATEGORY, action: EVENTS.PRODUCTS_PRODUCT_BUTTON.ACTION, label: EVENTS.PRODUCTS_PRODUCT_BUTTON.LABEL},
        // {el: '#btnInTagSignup', category: EVENTS.PRODUCTS_PRODUCT_SIGNUP.CATEGORY, action: EVENTS.PRODUCTS_PRODUCT_SIGNUP.ACTION, label: EVENTS.PRODUCTS_PRODUCT_SIGNUP.LABEL},
        // {el: '#btnInTagWatchVideo', category: EVENTS.PRODUCTS_PRODUCT_BUTTON.CATEGORY, action: EVENTS.PRODUCTS_PRODUCT_BUTTON.ACTION, label: EVENTS.PRODUCTS_PRODUCT_BUTTON.LABEL},
        // {el: '#btnInFrameSignup', category: EVENTS.PRODUCTS_PRODUCT_SIGNUP.CATEGORY, action: EVENTS.PRODUCTS_PRODUCT_SIGNUP.ACTION, label: EVENTS.PRODUCTS_PRODUCT_SIGNUP.LABEL},
        // {el: '#btnInFrameWatchVideo', category: EVENTS.PRODUCTS_PRODUCT_BUTTON.CATEGORY, action: EVENTS.PRODUCTS_PRODUCT_BUTTON.ACTION, label: EVENTS.PRODUCTS_PRODUCT_BUTTON.LABEL},
        // Contact form
        {el: '.btnContact', category: EVENTS.CONTACT_US_SEND_CLICKED.CATEGORY, action: EVENTS.CONTACT_US_SEND_CLICKED.ACTION, label: EVENTS.CONTACT_US_SEND_CLICKED.LABEL},
        // Career
        // {el: '#CareerMediaBuyer', category: EVENTS.CARRERS_JOB.CATEGORY, action: EVENTS.CARRERS_JOB.ACTION, label: EVENTS.CARRERS_JOB.LABEL},
        // {el: '#CareerAccountManager', category: EVENTS.CARRERS_JOB.CATEGORY, action: EVENTS.CARRERS_JOB.ACTION, label: EVENTS.CARRERS_JOB.LABEL},
        // {el: '#CareerJavaScriptExpert', category: EVENTS.CARRERS_JOB.CATEGORY, action: EVENTS.CARRERS_JOB.ACTION, label: EVENTS.CARRERS_JOB.LABEL},
        // {el: '#CareerJavaDeveloper', category: EVENTS.CARRERS_JOB.CATEGORY, action: EVENTS.CARRERS_JOB.ACTION, label: EVENTS.CARRERS_JOB.LABEL},
        // {el: '#CareerLinuxExpert', category: EVENTS.CARRERS_JOB.CATEGORY, action: EVENTS.CARRERS_JOB.ACTION, label: EVENTS.CARRERS_JOB.LABEL},
        // Integration
        {el: '#cmdCopyCode', category: EVENTS.WELCOME_INTEGRATE_COPY_BUTTON.CATEGORY, action: EVENTS.WELCOME_INTEGRATE_COPY_BUTTON.ACTION, label: EVENTS.WELCOME_INTEGRATE_COPY_BUTTON.LABEL},
        {el: '#integration_code', category: EVENTS.WELCOME_INTEGRATE_COPY_CODE.CATEGORY, action: EVENTS.WELCOME_INTEGRATE_COPY_CODE.ACTION, label: EVENTS.WELCOME_INTEGRATE_COPY_CODE.LABEL},
        {el: '#btnWatchTutorialVideoImage', category: EVENTS.WELCOME_QUESTIONS_TUTORIAL_IMAGE.CATEGORY, action: EVENTS.WELCOME_QUESTIONS_TUTORIAL_IMAGE.ACTION, label: EVENTS.WELCOME_QUESTIONS_TUTORIAL_IMAGE.LABEL},
        {el: '#btnWatchTutorialVideoLink', category: EVENTS.WELCOME_QUESTIONS_TUTORIAL_LINK.CATEGORY, action: EVENTS.WELCOME_QUESTIONS_TUTORIAL_LINK.ACTION, label: EVENTS.WELCOME_QUESTIONS_TUTORIAL_LINK.LABEL},
        {el: '#btnSupportCenterImage', category: EVENTS.WELCOME_QUESTIONS_SUPPORT_IMAGE.CATEGORY, action: EVENTS.WELCOME_QUESTIONS_SUPPORT_IMAGE.ACTION, label: EVENTS.WELCOME_QUESTIONS_SUPPORT_IMAGE.LABEL},
        {el: '#btnSupportCenterLink', category: EVENTS.WELCOME_QUESTIONS_SUPPORT_LINK.CATEGORY, action: EVENTS.WELCOME_QUESTIONS_SUPPORT_LINK.ACTION, label: EVENTS.WELCOME_QUESTIONS_SUPPORT_LINK.LABEL},
        {el: '#btnVisitFacebook a', category: EVENTS.WELCOME_QUESTIONS_FACEBOOK_LINK.CATEGORY, action: EVENTS.WELCOME_QUESTIONS_FACEBOOK_LINK.ACTION, label: EVENTS.WELCOME_QUESTIONS_FACEBOOK_LINK.LABEL},
        {el: '#btnVisitBlog a', category: EVENTS.WELCOME_QUESTIONS_BLOG_LINK.CATEGORY, action: EVENTS.WELCOME_QUESTIONS_BLOG_LINK.ACTION, label: EVENTS.WELCOME_QUESTIONS_BLOG_LINK.LABEL},
        // {el: '#cmdDownloadWordpressPlugin', category: EVENTS.WELCOME_INTEGRATE_PLATFORM_VERSION.CATEGORY, action: EVENTS.WELCOME_INTEGRATE_PLATFORM_VERSION.ACTION, label: EVENTS.WELCOME_INTEGRATE_PLATFORM_VERSION.LABEL},
        // {el: '#cmdDownloadBloggerPlugin', category: EVENTS.WELCOME_INTEGRATE_PLATFORM_VERSION.CATEGORY, action: EVENTS.WELCOME_INTEGRATE_PLATFORM_VERSION.ACTION, label: EVENTS.WELCOME_INTEGRATE_PLATFORM_VERSION.LABEL},
        // {el: '#cmdDownloadDrupalPlugin', category: EVENTS.WELCOME_INTEGRATE_PLATFORM_VERSION.CATEGORY, action: EVENTS.WELCOME_INTEGRATE_PLATFORM_VERSION.ACTION, label: EVENTS.WELCOME_INTEGRATE_PLATFORM_VERSION.LABEL},
        // {el: '#cmdDrupalV6', category: EVENTS.WELCOME_INTEGRATE_PLATFORM_VERSION.CATEGORY, action: EVENTS.WELCOME_INTEGRATE_PLATFORM_VERSION.ACTION, label: EVENTS.WELCOME_INTEGRATE_PLATFORM_VERSION.LABEL},
        // {el: '#cmdDrupalV5', category: EVENTS.WELCOME_INTEGRATE_PLATFORM_VERSION.CATEGORY, action: EVENTS.WELCOME_INTEGRATE_PLATFORM_VERSION.ACTION, label: EVENTS.WELCOME_INTEGRATE_PLATFORM_VERSION.LABEL},
        // {el: '#cmdDownloadJoomlaPlugin', category: EVENTS.WELCOME_INTEGRATE_PLATFORM_VERSION.CATEGORY, action: EVENTS.WELCOME_INTEGRATE_PLATFORM_VERSION.ACTION, label: EVENTS.WELCOME_INTEGRATE_PLATFORM_VERSION.LABEL},
        // Login
        // {el: '#login-facebook', category: 'Button', action: 'login', label: 'Login - connect with facebook'},
        // {el: '#login-button', category: 'Button', action: 'login', label: 'Login - regular login '},
        // {el: '#forgot-password', category: 'Link', action: 'link to password recovery', label: 'Login - forgort my passoword link'},
        // {el: '#join-us a', category: 'Link', action: 'link to sign up page', label: 'Login - sign up link'},
        // Password recovery
        {el: '.btnResetPassword', category: EVENTS.PASSWORD_RECOVERY_SUBMIT.CATEGORY, action: EVENTS.PASSWORD_RECOVERY_SUBMIT.ACTION, label: EVENTS.PASSWORD_RECOVERY_SUBMIT.LABEL},
        // 404
        {el: '.linkHomepage', category: EVENTS.E_404_HOMEPAGE_LINK.CATEGORY, action: EVENTS.E_404_HOMEPAGE_LINK.ACTION, label: EVENTS.E_404_HOMEPAGE_LINK.LABEL},
        {el: '.linkContactUs', category: EVENTS.E_404_CONTACT_US_LINK.CATEGORY, action: EVENTS.E_404_CONTACT_US_LINK.ACTION, label: EVENTS.E_404_CONTACT_US_LINK.LABEL},
        // 500
        {el: '.linkFacebook', category: EVENTS.E_500_FACEBOOK_LINK.CATEGORY, action: EVENTS.E_500_FACEBOOK_LINK.ACTION, label: EVENTS.E_500_FACEBOOK_LINK.LABEL},
        // Search
        // {el: '.sr-about-us a', category: 'Link', action: 'link to sign up page', label: ''},
        // Support
        {el: '#btnDownloadAndroid', category: EVENTS.SUPPORT_MOBILE_APP_ANDROID_BUTTON.CATEGORY, action: EVENTS.SUPPORT_MOBILE_APP_ANDROID_BUTTON.ACTION, label: EVENTS.SUPPORT_MOBILE_APP_ANDROID_BUTTON.LABEL},
        {el: '#btnDownloadApple', category: EVENTS.SUPPORT_MOBILE_APP_IPHONE_BUTTON.CATEGORY, action: EVENTS.SUPPORT_MOBILE_APP_IPHONE_BUTTON.ACTION, label: EVENTS.SUPPORT_MOBILE_APP_IPHONE_BUTTON.LABEL},
        {el: '#btnDownloadAndroid', category: EVENTS.SUPPORT_TRACK_MY_EARNINGS_ANDROID_BUTTON.CATEGORY, action: EVENTS.SUPPORT_TRACK_MY_EARNINGS_ANDROID_BUTTON.ACTION, label: EVENTS.SUPPORT_TRACK_MY_EARNINGS_ANDROID_BUTTON.LABEL},
        {el: '#btnDownloadApple', category: EVENTS.SUPPORT_TRACK_MY_EARNINGS_IPHONE_BUTTON.CATEGORY, action: EVENTS.SUPPORT_TRACK_MY_EARNINGS_IPHONE_BUTTON.ACTION, label: EVENTS.SUPPORT_TRACK_MY_EARNINGS_IPHONE_BUTTON.LABEL}
    ];

    // General dynamic-data
    (function() {
        $(document).ready(function(){
            var timer = setInterval(function() {
                if( 'undefined' === typeof ga )return;

                var page_name = $("body").attr("data-page");
                var label = s.sprintf(EVENTS.GENERAL_PAGE_VISIT.LABEL, page_name);
                googleEventTrack(EVENTS.GENERAL_PAGE_VISIT.CATEGORY,
                    EVENTS.GENERAL_PAGE_VISIT.ACTION,
                    label);
                clearInterval(timer);

            }, 500);
        });
    })();

    // Homepage dynamic-data
    (function() {
        if (!$("body").hasClass("page-template-homepage")) {
            return;
        }

        var featured_review = $(".featured-review-video .mfp-video-thumb");
        $.each(featured_review, function(index, value) {
            $(value).on('click', function(){
                var reviewer_name = $(value)
                    .closest(".featured-review")
                    .find(".featured-review-reviewer p")
                    .text();
                var label = s.sprintf(EVENTS.HOMEPAGE_FEATURED_TESTIMONIAL.LABEL, reviewer_name);
                googleEventTrack(EVENTS.HOMEPAGE_FEATURED_TESTIMONIAL.CATEGORY,
                    EVENTS.HOMEPAGE_FEATURED_TESTIMONIAL.ACTION,
                    label);
            });
        });
    })();

    // Publishers dynamic-data
    (function() {
        if (!$("body").hasClass("page-template-publishers")) {
            return;
        }

        var watch_video_image = $(".watch-video-image");
        $.each(watch_video_image, function(index, value) {
            $(value).on('click', function(){
                var reviewer_name = $(value)
                    .closest(".ibox.testimonial")
                    .find(".ibox-title .value")
                    .text();
                var label = s.sprintf(EVENTS.PUBLISHERS_TESTIMONIAL_IMAGE.LABEL, reviewer_name);
                googleEventTrack(EVENTS.PUBLISHERS_TESTIMONIAL_IMAGE.CATEGORY,
                    EVENTS.PUBLISHERS_TESTIMONIAL_IMAGE.ACTION,
                    label);
            });
        });

        var watch_video_link = $(".watch-video-link");
        $.each(watch_video_link, function(index, value) {
            $(value).on('click', function(){
                var reviewer_name = $(value)
                    .closest(".ibox.testimonial")
                    .find(".ibox-title .value")
                    .text();
                var label = s.sprintf(EVENTS.PUBLISHERS_TESTIMONIAL_LINK.LABEL, reviewer_name);
                googleEventTrack(EVENTS.PUBLISHERS_TESTIMONIAL_LINK.CATEGORY,
                    EVENTS.PUBLISHERS_TESTIMONIAL_LINK.ACTION,
                    label);
            });
        });
    })();

    // Products dynamic-data
    (function() {
        if (!$("body").hasClass("page-template-products")) {
            return;
        }

        var buttons = $(".ibox.product .ibox-cta");
        $.each(buttons, function(index, value) {
            var product_name = $(value).closest(".ibox.product").attr("data-name");
            var button_signup = $(value).find("a:nth-child(1)");
            var button_watch_video = $(value).find("a:nth-child(2)");

            $(button_signup).on('click', function(){
                var label = s.sprintf(EVENTS.PRODUCTS_PRODUCT_SIGNUP.LABEL, product_name);
                googleEventTrack(EVENTS.PRODUCTS_PRODUCT_SIGNUP.CATEGORY,
                    EVENTS.PRODUCTS_PRODUCT_SIGNUP.ACTION,
                    label);
            });

            $(button_watch_video).on('click', function(){
                var label = s.sprintf(EVENTS.PRODUCTS_PRODUCT_BUTTON.LABEL, product_name);
                googleEventTrack(EVENTS.PRODUCTS_PRODUCT_BUTTON.CATEGORY,
                    EVENTS.PRODUCTS_PRODUCT_BUTTON.ACTION,
                    label);
            });
        });
    })();

    // Careers dynamic-data
    (function() {
        if (!$("body").hasClass("page-template-careers")) {
            return;
        }

        var positions = $(".position");
        $.each(positions, function(index, value) {
            $(value).on('click', function(){
                var job_name = $(value)
                    .find("h3")
                    .text();
                var label = s.sprintf(EVENTS.CARRERS_JOB.LABEL, job_name);
                googleEventTrack(EVENTS.CARRERS_JOB.CATEGORY,
                    EVENTS.CARRERS_JOB.ACTION,
                    label);
            });
        });
    })();

    // Integration dynamic-data
    (function() {
        if (!$("body").hasClass("page-template-integretion")) {
            return;
        }

        var downloads = $(".tabs-platforms .ibox-content.instructions .how-to-install a.btn");
        $.each(downloads, function(index, value) {
            $(value).on('click', function(){
                var platform = $(value)
                    .closest(".ibox-content.instructions")
                    .attr("data-platform");
                var label = s.sprintf(EVENTS.WELCOME_INTEGRATE_PLATFORM_VERSION.LABEL, platform, "*");
                googleEventTrack(EVENTS.WELCOME_INTEGRATE_PLATFORM_VERSION.CATEGORY,
                    EVENTS.WELCOME_INTEGRATE_PLATFORM_VERSION.ACTION,
                    label);
            });
        });

        var older_downloads = $(".tabs-platforms .ibox-content.instructions .older-versions .versions li > a");
        $.each(older_downloads, function(index, value) {
            $(value).on('click', function(){
                var platform = $(value)
                    .closest(".ibox-content.instructions")
                    .attr("data-platform");
                var version = $(value).text();
                var label = s.sprintf(EVENTS.WELCOME_INTEGRATE_PLATFORM_VERSION.LABEL, platform, version);
                googleEventTrack(EVENTS.WELCOME_INTEGRATE_PLATFORM_VERSION.CATEGORY,
                    EVENTS.WELCOME_INTEGRATE_PLATFORM_VERSION.ACTION,
                    label);
            });
        });
    })();

    // handle google analytics event tracking data
    $.each(googleAnalyticsEvents, function(index, value){
        // fix a bug related to $.each in older browsers
        if (value && value.action){

            var cat = value.category.toLowerCase();
            if (cat == "button" || cat == "link" || _.startsWith(cat, "field") || _.startsWith(cat, "video")) {
      ue.category, value.action, value.label, value.value);
                });
            } else if (cat == "page") {
                $(document).ready(function(){
                    var timer = setInterval(function() {
                        if( 'undefined' === typeof ga )return;

                        var page = $("body").attr("data-page");
                        value.label = value.label.replace("[page name]", page);
                        googleEventTrack(value.category, value.action, value.label, value.value);
                        clearInterval(timer);

                    }, 500);
                });
            }
        }
    });

});
