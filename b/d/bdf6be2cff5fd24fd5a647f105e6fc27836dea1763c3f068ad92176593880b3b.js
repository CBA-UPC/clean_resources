(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"+m56":function(e,t,n){"use strict";
/**
 * A WP REST API client for Node.js
 *
 * @example
 *     var wp = new WPAPI({ endpoint: 'http://src.wordpress-develop.dev/wp-json' });
 *     wp.posts().then(function( posts ) {
 *         console.log( posts );
 *     }).catch(function( err ) {
 *         console.error( err );
 *     });
 *
 * @license MIT
 })
 */const s=n("iJE/"),r=n("CuLW"),i=n("YTqf").build,o=n("o2Ax").generate;let a;const l=n("zO7K"),c=n("ml1J"),u=n("E58G");function h(e){if(this instanceof h==!1)return new h(e);if("string"!=typeof e.endpoint)throw new Error("options hash must contain an API endpoint URL string");return this._ns={},this._options={endpoint:e.endpoint.replace(/\/?$/,"/")},e&&(e.username||e.password||e.nonce)&&this.auth(e),this.transport(e.transport).bootstrap(e&&e.routes)}h.prototype.transport=function(e){const t=this._options;return t.transport||(t.transport=Object.create(h.transport)),["get","head","post","put","delete"].forEach(n=>{e&&e[n]&&(t.transport[n]=e[n])}),this},h.transport=Object.create(u),Object.freeze(h.transport),h.site=h.prototype.url=h.prototype.root=function(e){e=e||"";const t={...this._options},n=new c(t);return n._path={0:e},n},h.prototype.setHeaders=c.prototype.setHeaders,h.prototype.auth=c.prototype.auth,h.prototype.registerRoute=n("w88U"),h.prototype.bootstrap=function(e){let t,n;return e?(t=i(e),n=o(t)):(a||(t=i(r),a=o(t)),n=a),s(n,(e,t,n)=>(e._ns[n]=s(t,e._ns[n]||{_options:e._options}),"wp/v2"===n&&Object.keys(e._ns[n]).forEach(,e),this)},h.prototype.namespace=function(e){if(!this._ns[e])throw new Error("Error: namespace "+e+" is not recognized");return this._ns[e]},h.discover=e=>{let t;const n=h.site(e).root();return n.headers().catch(()=>n.get()).then(l.locateAPIRootHeader).then(e=>(t=e,h.site(e).root().get())).then(e=>new h({endpoint:t,routes:e.routes})).catch(e=>{if(console.error(e),t)return console.warn("Endpoint detected, proceeding despite error..."),console.warn("Binding to "+t+" and assuming default routes"),new h.site(t);throw new Error("Autodiscovery failed")})},e.exports=h},"/fTC":function(e,t,n){var s,r,i,o;i=function(){var e=/^;\s*([^"=]+)=(?:"([^"]+)"|([^";,]+)(?:[;,]|$))/,t=/^<([^>]*)>/,n=/^\s*,\s*/;return{parse:function(s,r){for(var i,o,a,l=r&&r.extended||!1,c=[];s&&(s=s.trim(),o=t.exec(s));){for(var u={link:o[1]},h=(s=s.slice(o[0].length)).match(n);s&&(!h||h.index>0)&&(i=e.exec(s));)h=(s=s.slice(i[0].length)).match(n),"rel"===i[1]||"rev"===i[1]?(a=(i[2]||i[3]).split(/\s+/),u[i[1]]=a):u[i[1]]=i[2]||i[3];c.push(u),s=s.replace(n,"")}return l?c:c.reduce(function(e,t){return t.rel&&t.rel.forEach(,e},{})},stringify:function(e){var t=Object.keys(e).reduce({});return Object.keys(t).reduce(function(e,n){return e.concat("<"+n+'>; rel="'+t[n].join(" ")+'"')},[]).join(", ")}}},o=this,e.exports?e.exports=i():"function"==typeof o.define&&o.define.amd?void 0===(r="function"==typeof(s=i)?s.call(t,n,t,e):s)||(e.exports=r):o.li=i()},"/yFf":0:"0KBE":function(e,t,n){"use strict";e.exports=e=>function(t){return this.param(e,t)}},"0jNN":1:function(e,t){},"1uSB":function(e,t,n){"use strict";(function(e){
/**
 * @license Angular v11.0.7
 * (c) 2010-2020 Google LLC. https://angular.io/
 * License: MIT
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var s;function r(e){if(":"!=e[0])return[null,e];const t=e.indexOf(":",1);if(-1==t)throw new Error(`Unsupported format "${e}" expecting ":namespace:name"`);return[e.slice(1,t),e.slice(t+1)]}function i(e){return"ng-container"===r(e)[1]}function o(e){return"ng-content"===r(e)[1]}nction c(e,t){return e?`:${e}:${t}`:t}n.d(t,"a",function(){return cp}),n.d(t,"b",function(){return ld}),n.d(t,"c",function(){return hh}),n.d(t,"d",function(){return dh}),n.d(t,"e",function(){return gh}),n.d(t,"f",function(){return Mc}),n.d(t,"g",function(){return Oc}),n.d(t,"h",function(){return Ha}),n.d(t,"i",function(){return ep}),n.d(t,"j",function(){return cn}),n.d(t,"k",function(){return rd}),n.d(t,"l",function(){return Zr}),n.d(t,"m",function(){return Zp}),n.d(t,"n",function(){return cc}),n.d(t,"o",function(){return Cp}),n.d(t,"p",function(){return Sp}),n.d(t,"q",function(){return Ec}),n.d(t,"r",function(){return Tp}),n.d(t,"s",function(){return In}),n.d(t,"t",function(){return Ku}),n.d(t,"u",function(){return dn}),n.d(t,"v",function(){return la}),n.d(t,"w",function(){return Qp}),n.d(t,"x",function(){return zl}),n.d(t,"y",function(){return cd}),n.d(t,"z",function(){return Op}),n.d(t,"A",function(){return ud}),n.d(t,"B",function(){return Bt}),function(e){e[e.RAW_TEXT=0]="RAW_TEXT",e[e.ESCAPABLE_RAW_TEXT=1]="ESCAPABLE_RAW_TEXT",e[e.PARSABLE_DATA=2]="PARSABLE_DATA"}(s||(s={}));const u={Aacute:"\xc1",aacute:"\xe1",Acirc:"\xc2",acirc:"\xe2",acute:"\xb4",AElig:"\xc6",aelig:"\xe6",Agrave:"\xc0",agrave:"\xe0",alefsym:"\u2135",Alpha:"\u0391",alpha:"\u03b1",amp:"&",and:"\u2227",ang:"\u2220",apos:"'",Aring:"\xc5",aring:"\xe5",asymp:"\u2248",Atilde:"\xc3",atilde:"\xe3",Auml:"\xc4",auml:"\xe4",bdquo:"\u201e",Beta:"\u0392",beta:"\u03b2",brvbar:"\xa6",bull:"\u2022",cap:"\u2229",Ccedil:"\xc7",ccedil:"\xe7",cedil:"\xb8",cent:"\xa2",Chi:"\u03a7",chi:"\u03c7",circ:"\u02c6",clubs:"\u2663",cong:"\u2245",copy:"\xa9",crarr:"\u21b5",cup:"\u222a",curren:"\xa4",dagger:"\u2020",Dagger:"\u2021",darr:"\u2193",dArr:"\u21d3",deg:"\xb0",Delta:"\u0394",delta:"\u03b4",diams:"\u2666",divide:"\xf7",Eacute:"\xc9",eacute:"\xe9",Ecirc:"\xca",ecirc:"\xea",Egrave:"\xc8",egrave:"\xe8",empty:"\u2205",emsp:"\u2003",ensp:"\u2002",Epsilon:"\u0395",epsilon:"\u03b5",equiv:"\u2261",Eta:"\u0397",eta:"\u03b7",ETH:"\xd0",eth:"\xf0",Euml:"\xcb",euml:"\xeb",euro:"\u20ac",exist:"\u2203",fnof:"\u0192",forall:"\u2200",frac12:"\xbd",frac14:"\xbc",frac34:"\xbe",frasl:"\u2044",Gamma:"\u0393",gamma:"\u03b3",ge:"\u2265",gt:">",harr:"\u2194",hArr:"\u21d4",hearts:"\u2665",hellip:"\u2026",Iacute:"\xcd",iacute:"\xed",Icirc:"\xce",icirc:"\xee",iexcl:"\xa1",Igrave:"\xcc",igrave:"\xec",image:"\u2111",infin:"\u221e",int:"\u222b",Iota:"\u0399",iota:"\u03b9",iquest:"\xbf",isin:"\u2208",Iuml:"\xcf",iuml:"\xef",Kappa:"\u039a",kappa:"\u03ba",Lambda:"\u039b",lambda:"\u03bb",lang:"\u27e8",laquo:"\xab",larr:"\u2190",lArr:"\u21d0",lceil:"\u2308",ldquo:"\u201c",le:"\u2264",lfloor:"\u230a",lowast:"\u2217",loz:"\u25ca",lrm:"\u200e",lsaquo:"\u2039",lsquo:"\u2018",lt:"<",macr:"\xaf",mdash:"\u2014",micro:"\xb5",middot:"\xb7",minus:"\u2212",Mu:"\u039c",mu:"\u03bc",nabla:"\u2207",nbsp:"\xa0",ndash:"\u2013",ne:"\u2260",ni:"\u220b",not:"\xac",notin:"\u2209",nsub:"\u2284",Ntilde:"\xd1",ntilde:"\xf1",Nu:"\u039d",nu:"\u03bd",Oacute:"\xd3",oacute:"\xf3",Ocirc:"\xd4",ocirc:"\xf4",OElig:"\u0152",oelig:"\u0153",Ograve:"\xd2",ograve:"\xf2",oline:"\u203e",Omega:"\u03a9",omega:"\u03c9",Omicron:"\u039f",omicron:"\u03bf",oplus:"\u2295",or:"\u2228",ordf:"\xaa",ordm:"\xba",Oslash:"\xd8",oslash:"\xf8",Otilde:"\xd5",otilde:"\xf5",otimes:"\u2297",Ouml:"\xd6",ouml:"\xf6",para:"\xb6",permil:"\u2030",perp:"\u22a5",Phi:"\u03a6",phi:"\u03c6",Pi:"\u03a0",pi:"\u03c0",piv:"\u03d6",plusmn:"\xb1",pound:"\xa3",prime:"\u2032",Prime:"\u2033",prod:"\u220f",prop:"\u221d",Psi:"\u03a8",psi:"\u03c8",quot:'"',radic:"\u221a",rang:"\u27e9",raquo:"\xbb",rarr:"\u2192",rArr:"\u21d2",rceil:"\u2309",rdquo:"\u201d",real:"\u211c",reg:"\xae",rfloor:"\u230b",Rho:"\u03a1",rho:"\u03c1",rlm:"\u200f",rsaquo:"\u203a",rsquo:"\u2019",sbquo:"\u201a",Scaron:"\u0160",scaron:"\u0161",sdot:"\u22c5",sect:"\xa7",shy:"\xad",Sigma:"\u03a3",sigma:"\u03c3",sigmaf:"\u03c2",sim:"\u223c",spades:"\u2660",sub:"\u2282",sube:"\u2286",sum:"\u2211",sup:"\u2283",sup1:"\xb9",sup2:"\xb2",sup3:"\xb3",supe:"\u2287",szlig:"\xdf",Tau:"\u03a4",tau:"\u03c4",there4:"\u2234",Theta:"\u0398",theta:"\u03b8",thetasym:"\u03d1",thinsp:"\u2009",THORN:"\xde",thorn:"\xfe",tilde:"\u02dc",times:"\xd7",trade:"\u2122",Uacute:"\xda",uacute:"\xfa",uarr:"\u2191",uArr:"\u21d1",Ucirc:"\xdb",ucirc:"\xfb",Ugrave:"\xd9",ugrave:"\xf9",uml:"\xa8",upsih:"\u03d2",Upsilon:"\u03a5",upsilon:"\u03c5",Uuml:"\xdc",uuml:"\xfc",weierp:"\u2118",Xi:"\u039e",xi:"\u03be",Yacute:"\xdd",yacute:"\xfd",yen:"\xa5",yuml:"\xff",Yuml:"\u0178",Zeta:"\u0396",zeta:"\u03b6",zwj:"\u200d",zwnj:"\u200c"};u.ngsp="\ue500";
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class h{et p,d;function f(e){var t,n;return d||(p=new h,d={base:new h({isVoid:!0}),meta:new h({isVoid:!0}),area:new h({isVoid:!0}),embed:new h({isVoid:!0}),link:new h({isVoid:!0}),img:new h({isVoid:!0}),input:new h({isVoid:!0}),param:new h({isVoid:!0}),hr:new h({isVoid:!0}),br:new h({isVoid:!0}),source:new h({isVoid:!0}),track:new h({isVoid:!0}),wbr:new h({isVoid:!0}),p:new h({closedByChildren:["address","article","aside","blockquote","div","dl","fieldset","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","main","nav","ol","p","pre","section","table","ul"],closedByParent:!0}),thead:new h({closedByChildren:["tbody","tfoot"]}),tbody:new h({closedByChildren:["tbody","tfoot"],closedByParent:!0}),tfoot:new h({closedByChildren:["tbody"],closedByParent:!0}),tr:new h({closedByChildren:["tr"],closedByParent:!0}),td:new h({closedByChildren:["td","th"],closedByParent:!0}),th:new h({closedByChildren:["td","th"],closedByParent:!0}),col:new h({isVoid:!0}),svg:new h({implicitNamespacePrefix:"svg"}),foreignObject:new h({implicitNamespacePrefix:"svg",preventNamespaceInheritance:!0}),math:new h({implicitNamespacePrefix:"math"}),li:new h({closedByChildren:["li"],closedByParent:!0}),dt:new h({closedByChildren:["dt","dd"]}),dd:new h({closedByChildren:["dt","dd"],closedByParent:!0}),rb:new h({closedByChildren:["rb","rt","rtc","rp"],closedByParent:!0}),rt:new h({closedByChildren:["rb","rt","rtc","rp"],closedByParent:!0}),rtc:new h({closedByChildren:["rb","rtc","rp"],closedByParent:!0}),rp:new h({closedByChildren:["rb","rt","rtc","rp"],closedByParent:!0}),optgroup:new h({closedByChildren:["optgroup"],closedByParent:!0}),option:new h({closedByChildren:["option","optgroup"],closedByParent:!0}),pre:new h({ignoreFirstLf:!0}),listing:new h({ignoreFirstLf:!0}),style:new h({contentType:s.RAW_TEXT}),script:new h({contentType:s.RAW_TEXT}),title:new h({contentType:s.ESCAPABLE_RAW_TEXT}),textarea:new h({contentType:s.ESCAPABLE_RAW_TEXT,ignoreFirstLf:!0})}),null!==(n=null!==(t=d[e])&&void 0!==t?t:d[e.toLowerCase()])&&void 0!==n?n:p}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const m=new RegExp("(\\:not\\()|(([\\.\\#]?)[-\\w]+)|(?:\\[([-.\\w*]+)(?:=([\"']?)([^\\]\"']*)\\5)?\\])|(\\))|(\\s*,\\s*)","g");class g{tatic parse(e){const t=[],n=let s,r=new g,i=r,o=!1;for(m.lastIndex=0;s=m.exec(e);){if(s[1]){if(o)throw new Error("Nesting :not in a selector is not allowed");o=!0,i=new g,r.notSelectors.push(i)}const e=s[2];if(e){const t=s[3];"#"===t?i.addAttribute("id",e.substr(1)):"."===t?i.addClassName(e.substr(1)):i.setElement(e)}const a=s[4];if(a&&i.addAttribute(a,s[6]),s[7]&&(o=!1,i=r),s[8]){if(o)throw new Error("Multiple selectors in :not are not supported");n(t,r),r=i=new g}}return n(t,r),t}tElement(e=null){this.element=e}ring(){let e=this.element||"";if(this.classNames&&this.classNames.forEach(t=>e+=`.${t}`),this.attrs)for(let t=0;t<this.attrs.length;t+=2){const n=this.attrs[t],s=this.attrs[t+1];e+=`[${n}${s?"="+s:""}]`}return this.notSelectors.forEach(,e}}class y{dSelectable(e,t,n){let s=this;const r=e.element,i=e.classNames,o=e.attrs,a=new _(e,t,n);if(r){0===o.length&&0===i.length?this._addTerminal(s._elementMap,r,a):s=this._addPartial(s._elementPartialMap,r)}if(i)for(let l=0;l<i.length;l++){const e=0===o.length&&l===i.length-1,t=i[l];e?this._addTerminal(s._classMap,t,a):s=this._addPartial(s._classPartialMap,t)}if(o)for(let l=0;l<o.length;l+=2){const e=l===o.length-2,t=o[l],n=o[l+1];if(e){const e=s._attrValueMap;let r=e.get(t);r||(r=new Map,e.set(t,r)),this._addTerminal(r,n,a)}else{const e=s._attrValuePartialMap;let r=e.get(t);r||(r=new Map,e.set(t,r)),s=this._addPartial(r,n)}}} _{inalize(e,t){let n=!0;if(this.notSelectors.length>0&&(!this.listContext||!this.listContext.alreadyMatched)){n=!y.createNotMatcher(this.notSelectors).match(e,null)}return!n||!t||this.listContext&&this.listContext.alreadyMatched||(this.listContext&&(this.listContext.alreadyMatched=!0),t(this.selector,this.cbContext)),n}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const b=G("Inject",e=>({token:e})),w=G("InjectionToken",,E=G("Attribute",e=>({attributeName:e})),C=G("ContentChildren",(e,t={})=>Object.assign({selector:e,first:!1,isViewQuery:!1,descendants:!1},t)),S=G("ContentChild",(e,t={})=>Object.assign({selector:e,first:!0,isViewQuery:!1,descendants:!0},t)),x=G("ViewChildren",(e,t={})=>Object.assign({selector:e,first:!1,isViewQuery:!0,descendants:!0},t)),T=G("ViewChild",(e,t)=>Object.assign({selector:e,first:!0,isViewQuery:!0,descendants:!0},t)),A=G("Directive",(e={})=>e);var D,P;!function(e){e[e.Emulated=0]="Emulated",e[e.None=2]="None",e[e.ShadowDom=3]="ShadowDom"}(D||(D={})),function(e){e[e.OnPush=0]="OnPush",e[e.Default=1]="Default"}(P||(P={}));const k=G("Component",(e={})=>Object.assign({changeDetection:P.Default},e)),O=G("Pipe",e=>Object.assign({pure:!0},e)),I=G("Input",e=>({bindingPropertyName:e})),N=G("Output",e=>({bindingPropertyName:e})),M=G("HostBinding",e=>({hostPropertyName:e})),F=G("HostListener",(e,t)=>({eventName:e,args:t})),R=G("NgModule",e=>e),j=G("Injectable",(e={})=>e),L={name:"custom-elements"},V={name:"no-errors-schema"},$=G("Optional"),B=G("Self"),H=G("SkipSelf"),U=G("Host"),q=Function;var z,W;nction(e){e[e.NONE=0]="NONE",e[e.HTML=1]="HTML",e[e.STYLE=2]="STYLE",e[e.SCRIPT=3]="SCRIPT",e[e.URL=4]="URL",e[e.RESOURCE_URL=5]="RESOURCE_URL"}(z||(z={})),function(e){e[e.Error=0]="Error",e[e.Warning=1]="Warning",e[e.Ignore=2]="Ignore"}(W||(W={}));var Z,J;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */!Z||(Z={}));function(e){e[e.Dynamic=0]="Dynamic",e[e.Bool=1]="Bool",e[e.String=2]="String",e[e.Int=3]="Int",e[e.Number=4]="Number",e[e.Function=5]="Function",e[e.Inferred=6]="Inferred",e[e.None=7]="None"}(J||(J={}));class Y extends X{constructor(e,t){super(t),this.name=e}visitType(e,t){return e.visitBuiltinType(this,t)}}st se=new Y(J.Dynamic),re=new Y(J.Inferred),ie=new Y(J.Bool),oe=(new Y(J.Int),new Y(J.Number)),ae=new Y(J.String),le=(new Y(J.Function),new Y(J.None));var ce,ue,he,pe;unction(e){e[e.Minus=0]="Minus",e[e.Plus=1]="Plus"}(ce||(ce={})),ue||(ue={}));class me{y(e,t,n){return new qe(this,e,t,n)}ls(e,t){return new He(ue.Equals,this,e,null,t)}notEquals(e,t){return new He(ue.NotEquals,this,e,null,t)}identical(e,t){return new He(ue.Identical,this,e,null,t)}notIdentical(e,t){return new He(ue.NotIdentical,this,e,null,t)}minus(e,t){return new He(ue.Minus,this,e,null,t)}plus(e,t){return new He(ue.Plus,this,e,null,t)}divide(e,t){return new He(ue.Divide,this,e,null,t)}multiply(e,t){return new He(ue.Multiply,this,e,null,t)}modulo(e,t){return new He(ue.Modulo,this,e,null,t)}and(e,t){return new He(ue.And,this,e,null,t)}r(e,t){return new He(ue.Or,this,e,null,t)}lower(e,t){return new He(ue.Lower,this,e,null,t)}lowerEquals(e,t){return new He(ue.LowerEquals,this,e,null,t)}bigger(e,t){return new He(ue.Bigger,this,e,null,t)}nction(e){e[e.This=0]="This",e[e.Super=1]="Super",e[e.CatchError=2]="CatchError",e[e.CatchStack=3]="CatchStack"}(he||(he={}));ass ve extends me{constructor(e,t,n){super(t,n),this.node=e}isEquivalent(e){return e instanceof ve&&this.node===e.node}isConstant(){return!1}visitExpression(e,t){return e.visitWrappedNodeExpr(this,t)}}nction(e){e[e.ConcatArray=0]="ConcatArray",e[e.SubscribeObservable=1]="SubscribeObservable",e[e.Bind=2]="Bind"}(pe||(pe={}));s Te{constructor(e,t){this.text=e,this.sourceSpan=t}}class Ae extends Te{}nst ke=e=>e.replace(/\\/g,"\\\\"),Oe=Ie=function Ne(e,t,n){return""===e?{cooked:t,raw:Ie((s=ke(t),s.replace(/^:/,"\\:"))),range:n}:{cooked:`:${e}:${t}`,raw:Ie(`:${Oe(ke(e))}:${ke(t)}`),range:n};var s}null,null),new ge(he.Super,null,null),new ge(he.CatchError,null,null),new ge(he.CatchStack,null,null);const Qe=new xe(null,null,null),Ze=new xe(null,re,null);var Je;!function(e){e[e.Final=0]="Final",e[e.Private=1]="Private",e[e.Exported=2]="Exported",e[e.Static=3]="Static"}(Je||(Je={}));rt extends et{constructor(e,t=null,n){super([],t,n),this.value=e}isEquivalent(e){return e instanceof rt&&this.value.isEquivalent(e.value)}visitStatement(e,t){return e.visitReturnStmt(this,t)}}t{visitType(e,t){return e}isitBuiltinType(e,t){return this.visitType(e,t)}isitArrayType(e,t){return this.visitType(e,t)}visitMapType(e,t){return this.visitType(e,t)}visitWrappedNodeExpr(e,t){return e}visitTypeofExpr(e,t){return this.visitExpression(e,t)}visitReadVarExpr(e,t){return this.visitExpression(e,t)}visitWriteVarExpr(e,t){return e.value.visitExpression(this,t),this.visitExpression(e,t)}visitWriteKeyExpr(e,t){return e.receiver.visitExpression(this,t),e.index.visitExpression(this,t),e.value.visitExpression(this,t),this.visitExpression(e,t)}visitWritePropExpr(e,t){return e.receiver.visitExpression(this,t),e.value.visitExpression(this,t),this.visitExpression(e,t)}visitInvokeMethodExpr(e,t){return e.receiver.visitExpression(this,t),this.visitAllExpressions(e.args,t),this.visitExpression(e,t)}visitInvokeFunctionExpr(e,t){return e.fn.visitExpression(this,t),this.visitAllExpressions(e.args,t),this.visitExpression(e,t)}isitLiteralExpr(e,t){return this.visitExpression(e,t)}visitLocalizedString(e,t){return this.visitExpression(e,t)}sitNotExpr(e,t){return e.condition.visitExpression(this,t),this.visitExpression(e,t)}visitAssertNotNullExpr(e,t){return e.condition.visitExpression(this,t),this.visitExpression(e,t)}visitCastExpr(e,t){return e.value.visitExpression(this,t),this.visitExpression(e,t)}visitFunctionExpr(e,t){return this.visitAllStatements(e.statements,t),this.visitExpression(e,t)}visitUnaryOperatorExpr(e,t){return e.expr.visitExpression(this,t),this.visitExpression(e,t)}visitBinaryOperatorExpr(e,t){return e.lhs.visitExpression(this,t),e.rhs.visitExpression(this,t),this.visitExpression(e,t)}sitLiteralArrayExpr(e,t){return this.visitAllExpressions(e.entries,t),this.visitExpression(e,t)}sitAllExpressions(e,t){e.forEach(e=>e.visitExpression(this,t))}sitExpressionStmt(e,t){return e.expr.visitExpression(this,t),e}visitReturnStmt(e,t){return e.value.visitExpression(this,t),e} ft extends pt{isitDeclareFunctionStmt(e,t){return e}visitDeclareClassStmt(e,t){return e}function mt(e,t){if(!t)return e;const n=new yt(t);return e.visitStatement(n,null)}lass yt extends class{transformExpr(e,t){return e}transformStmt(e,t){return e}visitReadVarExpr(e,t){return this.transformExpr(e,t)}visitWrappedNodeExpr(e,t){return this.transformExpr(e,t)}visitTypeofExpr(e,t){return this.transformExpr(new ye(e.expr.visitExpression(this,t),e.type,e.sourceSpan),t)}visitWriteVarExpr(e,t){return this.transformExpr(new _e(e.name,e.value.visitExpression(this,t),e.type,e.sourceSpan),t)}visitWriteKeyExpr(e,t){return this.transformExpr(new be(e.receiver.visitExpression(this,t),e.index.visitExpression(this,t),e.value.visitExpression(this,t),e.type,e.sourceSpan),t)}sitInvokeFunctionExpr(e,t){return this.transformExpr(new Ce(e.fn.visitExpression(this,t),this.visitAllExpressions(e.args,t),e.type,e.sourceSpan),t)}isitLiteralExpr(e,t){return this.transformExpr(e,t)}isitExternalExpr(e,t){return this.transformExpr(e,t)}isitNotExpr(e,t){return this.transformExpr(new Re(e.condition.visitExpression(this,t),e.sourceSpan),t)}isitCastExpr(e,t){return this.transformExpr(new Le(e.value.visitExpression(this,t),e.type,e.sourceSpan),t)}Expressions(e,t){return e.map(e=>e.visitExpression(this,t))}sitExpressionStmt(e,t){return this.transformStmt(new st(e.expr.visitExpression(this,t),e.sourceSpan,e.leadingComments),t)}visitReturnStmt(e,t){return this.transformStmt(new rt(e.value.visitExpression(this,t),e.sourceSpan,e.leadingComments),t)}structor(e){super(),this.sourceSpan=e}ransformExpr(e,t){return e.sourceSpan||((e=this._clone(e)).sourceSpan=this.sourceSpan),e}function vt(e,t,n){return new ge(e,t,n)}nction wt(e,t,n){return new ee(e,t,n)}function Et(e){return new ye(e)}function Ct(e,t,n){return new ze(e,t,n)}unction xt(e,t,n,s,r){return new $e(e,t,n,s,r)}t kt=/-+([a-z0-9])/g;nction Nt(e,t,n){return Array.isArray(e)?t.visitArray(e,n):"object"==typeof(s=e)&&null!==s&&Object.getPrototypeOf(s)===qt?t.visitStringMap(e,n):null==e||"string"==typeof e||"number"==typeof e||"boolean"==typeof e?t.visitPrimitive(e,n):t.visitOther(e,n);var s}function Mt(e){return null!=e}nst jt=Lt=Vt=nst Ht="ngSyntaxError",Ut="ngParseErrors";const qt=Object.getPrototypeOf({});t Qt="undefined"!=typeof window&&window,Zt="undefined"!=typeof self&&"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&self,Jt=void 0!==e&&e||Qt||Zt;function Xt(e,t){const n=[];for(let s=0;s<e;s++)n.push(t);return n}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const Yt=vt("<unknown>"),en={};lass nn{tionsOf(e){switch(e){case 2:return this.componentDefinitions;case 1:return this.directiveDefinitions;case 0:return this.injectorDefinitions;case 3:return this.pipeDefinitions}return $t(`Unknown definition kind ${e}`),this.componentDefinitions}propertyNameOf(e){switch(e){case 2:return"\u0275cmp";case 1:return"\u0275dir";case 0:return"\u0275inj";case 3:return"\u0275pipe"}return $t(`Unknown definition kind ${e}`),"<unknown>"}freshName(){return this.uniqueName("_c")}class sn{constructor(){this.visitWrappedNodeExpr=rn,this.visitWriteVarExpr=rn,this.visitWriteKeyExpr=rn,this.visitWritePropExpr=rn,this.visitInvokeMethodExpr=rn,this.visitInvokeFunctionExpr=rn,this.visitInstantiateExpr=rn,this.visitConditionalExpr=rn,this.visitNotExpr=rn,this.visitAssertNotNullExpr=rn,this.visitCastExpr=rn,this.visitFunctionExpr=rn,this.visitUnaryOperatorExpr=rn,this.visitBinaryOperatorExpr=rn,this.visitReadPropExpr=rn,this.visitReadKeyExpr=rn,this.visitCommaExpr=rn,this.visitLocalizedString=rn}@license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const ln="@angular/core";class cn{}**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */cn.ANALYZE_FOR_ENTRY_COMPONENTS={name:"ANALYZE_FOR_ENTRY_COMPONENTS",moduleName:ln},cn.ElementRef={name:"ElementRef",moduleName:ln},cn.NgModuleRef={name:"NgModuleRef",moduleName:ln},cn.ViewContainerRef={name:"ViewContainerRef",moduleName:ln},cn.ChangeDetectorRef={name:"ChangeDetectorRef",moduleName:ln},cn.QueryList={name:"QueryList",moduleName:ln},cn.TemplateRef={name:"TemplateRef",moduleName:ln},cn.Renderer2={name:"Renderer2",moduleName:ln},cn.CodegenComponentFactoryResolver={name:"\u0275CodegenComponentFactoryResolver",moduleName:ln},cn.ComponentFactoryResolver={name:"ComponentFactoryResolver",moduleName:ln},cn.ComponentFactory={name:"ComponentFactory",moduleName:ln},cn.ComponentRef={name:"ComponentRef",moduleName:ln},cn.NgModuleFactory={name:"NgModuleFactory",moduleName:ln},cn.createModuleFactory={name:"\u0275cmf",moduleName:ln},cn.moduleDef={name:"\u0275mod",moduleName:ln},cn.moduleProviderDef={name:"\u0275mpd",moduleName:ln},cn.RegisterModuleFactoryFn={name:"\u0275registerModuleFactory",moduleName:ln},cn.inject={name:"\u0275\u0275inject",moduleName:ln},cn.directiveInject={name:"\u0275\u0275directiveInject",moduleName:ln},cn.INJECTOR={name:"INJECTOR",moduleName:ln},cn.Injector={name:"Injector",moduleName:ln},cn.\u0275\u0275defineInjectable={name:"\u0275\u0275defineInjectable",moduleName:ln},cn.InjectableDef={name:"\u0275\u0275InjectableDef",moduleName:ln},cn.ViewEncapsulation={name:"ViewEncapsulation",moduleName:ln},cn.ChangeDetectionStrategy={name:"ChangeDetectionStrategy",moduleName:ln},cn.SecurityContext={name:"SecurityContext",moduleName:ln},cn.LOCALE_ID={name:"LOCALE_ID",moduleName:ln},cn.TRANSLATIONS_FORMAT={name:"TRANSLATIONS_FORMAT",moduleName:ln},cn.inlineInterpolate={name:"\u0275inlineInterpolate",moduleName:ln},cn.interpolate={name:"\u0275interpolate",moduleName:ln},cn.EMPTY_ARRAY={name:"\u0275EMPTY_ARRAY",moduleName:ln},cn.EMPTY_MAP={name:"\u0275EMPTY_MAP",moduleName:ln},cn.Renderer={name:"Renderer",moduleName:ln},cn.viewDef={name:"\u0275vid",moduleName:ln},cn.elementDef={name:"\u0275eld",moduleName:ln},cn.anchorDef={name:"\u0275and",moduleName:ln},cn.textDef={name:"\u0275ted",moduleName:ln},cn.directiveDef={name:"\u0275did",moduleName:ln},cn.providerDef={name:"\u0275prd",moduleName:ln},cn.queryDef={name:"\u0275qud",moduleName:ln},cn.pureArrayDef={name:"\u0275pad",moduleName:ln},cn.pureObjectDef={name:"\u0275pod",moduleName:ln},cn.purePipeDef={name:"\u0275ppd",moduleName:ln},cn.pipeDef={name:"\u0275pid",moduleName:ln},cn.nodeValue={name:"\u0275nov",moduleName:ln},cn.ngContentDef={name:"\u0275ncd",moduleName:ln},cn.unwrapValue={name:"\u0275unv",moduleName:ln},cn.createRendererType2={name:"\u0275crt",moduleName:ln},cn.RendererType2={name:"RendererType2",moduleName:ln},cn.ViewDefinition={name:"\u0275ViewDefinition",moduleName:ln},cn.createComponentFactory={name:"\u0275ccf",moduleName:ln},cn.setClassMetadata={name:"\u0275setClassMetadata",moduleName:ln};**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const fn=/^(?:(?:\[([^\]]+)\])|(?:\(([^\)]+)\)))|(\@[-\w]+)$/;function mn(e){return e.replace(/\W/g,"_")}let gn=0;ction bn(e){return`RenderType_${yn({reference:e})}`}ar En;unction(e){e[e.Pipe=0]="Pipe",e[e.Directive=1]="Directive",e[e.NgModule=2]="NgModule",e[e.Injectable=3]="Injectable"}(En||(En={}));cense
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const Rn="@angular/core";class jn{}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function Ln(e){return St(Object.keys(e).map()}n.NEW_METHOD="factory",jn.TRANSFORM_METHOD="transform",jn.PATCH_DEPS="patchedDeps",jn.namespaceHTML={name:"\u0275\u0275namespaceHTML",moduleName:Rn},jn.namespaceMathML={name:"\u0275\u0275namespaceMathML",moduleName:Rn},jn.namespaceSVG={name:"\u0275\u0275namespaceSVG",moduleName:Rn},jn.element={name:"\u0275\u0275element",moduleName:Rn},jn.elementStart={name:"\u0275\u0275elementStart",moduleName:Rn},jn.elementEnd={name:"\u0275\u0275elementEnd",moduleName:Rn},jn.advance={name:"\u0275\u0275advance",moduleName:Rn},jn.syntheticHostProperty={name:"\u0275\u0275syntheticHostProperty",moduleName:Rn},jn.syntheticHostListener={name:"\u0275\u0275syntheticHostListener",moduleName:Rn},jn.attribute={name:"\u0275\u0275attribute",moduleName:Rn},jn.attributeInterpolate1={name:"\u0275\u0275attributeInterpolate1",moduleName:Rn},jn.attributeInterpolate2={name:"\u0275\u0275attributeInterpolate2",moduleName:Rn},jn.attributeInterpolate3={name:"\u0275\u0275attributeInterpolate3",moduleName:Rn},jn.attributeInterpolate4={name:"\u0275\u0275attributeInterpolate4",moduleName:Rn},jn.attributeInterpolate5={name:"\u0275\u0275attributeInterpolate5",moduleName:Rn},jn.attributeInterpolate6={name:"\u0275\u0275attributeInterpolate6",moduleName:Rn},jn.attributeInterpolate7={name:"\u0275\u0275attributeInterpolate7",moduleName:Rn},jn.attributeInterpolate8={name:"\u0275\u0275attributeInterpolate8",moduleName:Rn},jn.attributeInterpolateV={name:"\u0275\u0275attributeInterpolateV",moduleName:Rn},jn.classProp={name:"\u0275\u0275classProp",moduleName:Rn},jn.elementContainerStart={name:"\u0275\u0275elementContainerStart",moduleName:Rn},jn.elementContainerEnd={name:"\u0275\u0275elementContainerEnd",moduleName:Rn},jn.elementContainer={name:"\u0275\u0275elementContainer",moduleName:Rn},jn.styleMap={name:"\u0275\u0275styleMap",moduleName:Rn},jn.styleMapInterpolate1={name:"\u0275\u0275styleMapInterpolate1",moduleName:Rn},jn.styleMapInterpolate2={name:"\u0275\u0275styleMapInterpolate2",moduleName:Rn},jn.styleMapInterpolate3={name:"\u0275\u0275styleMapInterpolate3",moduleName:Rn},jn.styleMapInterpolate4={name:"\u0275\u0275styleMapInterpolate4",moduleName:Rn},jn.styleMapInterpolate5={name:"\u0275\u0275styleMapInterpolate5",moduleName:Rn},jn.styleMapInterpolate6={name:"\u0275\u0275styleMapInterpolate6",moduleName:Rn},jn.styleMapInterpolate7={name:"\u0275\u0275styleMapInterpolate7",moduleName:Rn},jn.styleMapInterpolate8={name:"\u0275\u0275styleMapInterpolate8",moduleName:Rn},jn.styleMapInterpolateV={name:"\u0275\u0275styleMapInterpolateV",moduleName:Rn},jn.classMap={name:"\u0275\u0275classMap",moduleName:Rn},jn.classMapInterpolate1={name:"\u0275\u0275classMapInterpolate1",moduleName:Rn},jn.classMapInterpolate2={name:"\u0275\u0275classMapInterpolate2",moduleName:Rn},jn.classMapInterpolate3={name:"\u0275\u0275classMapInterpolate3",moduleName:Rn},jn.classMapInterpolate4={name:"\u0275\u0275classMapInterpolate4",moduleName:Rn},jn.classMapInterpolate5={name:"\u0275\u0275classMapInterpolate5",moduleName:Rn},jn.classMapInterpolate6={name:"\u0275\u0275classMapInterpolate6",moduleName:Rn},jn.classMapInterpolate7={name:"\u0275\u0275classMapInterpolate7",moduleName:Rn},jn.classMapInterpolate8={name:"\u0275\u0275classMapInterpolate8",moduleName:Rn},jn.classMapInterpolateV={name:"\u0275\u0275classMapInterpolateV",moduleName:Rn},jn.styleProp={name:"\u0275\u0275styleProp",moduleName:Rn},jn.stylePropInterpolate1={name:"\u0275\u0275stylePropInterpolate1",moduleName:Rn},jn.stylePropInterpolate2={name:"\u0275\u0275stylePropInterpolate2",moduleName:Rn},jn.stylePropInterpolate3={name:"\u0275\u0275stylePropInterpolate3",moduleName:Rn},jn.stylePropInterpolate4={name:"\u0275\u0275stylePropInterpolate4",moduleName:Rn},jn.stylePropInterpolate5={name:"\u0275\u0275stylePropInterpolate5",moduleName:Rn},jn.stylePropInterpolate6={name:"\u0275\u0275stylePropInterpolate6",moduleName:Rn},jn.stylePropInterpolate7={name:"\u0275\u0275stylePropInterpolate7",moduleName:Rn},jn.stylePropInterpolate8={name:"\u0275\u0275stylePropInterpolate8",moduleName:Rn},jn.stylePropInterpolateV={name:"\u0275\u0275stylePropInterpolateV",moduleName:Rn},jn.nextContext={name:"\u0275\u0275nextContext",moduleName:Rn},jn.templateCreate={name:"\u0275\u0275template",moduleName:Rn},jn.text={name:"\u0275\u0275text",moduleName:Rn},jn.enableBindings={name:"\u0275\u0275enableBindings",moduleName:Rn},jn.disableBindings={name:"\u0275\u0275disableBindings",moduleName:Rn},jn.getCurrentView={name:"\u0275\u0275getCurrentView",moduleName:Rn},jn.textInterpolate={name:"\u0275\u0275textInterpolate",moduleName:Rn},jn.textInterpolate1={name:"\u0275\u0275textInterpolate1",moduleName:Rn},jn.textInterpolate2={name:"\u0275\u0275textInterpolate2",moduleName:Rn},jn.textInterpolate3={name:"\u0275\u0275textInterpolate3",moduleName:Rn},jn.textInterpolate4={name:"\u0275\u0275textInterpolate4",moduleName:Rn},jn.textInterpolate5={name:"\u0275\u0275textInterpolate5",moduleName:Rn},jn.textInterpolate6={name:"\u0275\u0275textInterpolate6",moduleName:Rn},jn.textInterpolate7={name:"\u0275\u0275textInterpolate7",moduleName:Rn},jn.textInterpolate8={name:"\u0275\u0275textInterpolate8",moduleName:Rn},jn.textInterpolateV={name:"\u0275\u0275textInterpolateV",moduleName:Rn},jn.restoreView={name:"\u0275\u0275restoreView",moduleName:Rn},jn.pureFunction0={name:"\u0275\u0275pureFunction0",moduleName:Rn},jn.pureFunction1={name:"\u0275\u0275pureFunction1",moduleName:Rn},jn.pureFunction2={name:"\u0275\u0275pureFunction2",moduleName:Rn},jn.pureFunction3={name:"\u0275\u0275pureFunction3",moduleName:Rn},jn.pureFunction4={name:"\u0275\u0275pureFunction4",moduleName:Rn},jn.pureFunction5={name:"\u0275\u0275pureFunction5",moduleName:Rn},jn.pureFunction6={name:"\u0275\u0275pureFunction6",moduleName:Rn},jn.pureFunction7={name:"\u0275\u0275pureFunction7",moduleName:Rn},jn.pureFunction8={name:"\u0275\u0275pureFunction8",moduleName:Rn},jn.pureFunctionV={name:"\u0275\u0275pureFunctionV",moduleName:Rn},jn.pipeBind1={name:"\u0275\u0275pipeBind1",moduleName:Rn},jn.pipeBind2={name:"\u0275\u0275pipeBind2",moduleName:Rn},jn.pipeBind3={name:"\u0275\u0275pipeBind3",moduleName:Rn},jn.pipeBind4={name:"\u0275\u0275pipeBind4",moduleName:Rn},jn.pipeBindV={name:"\u0275\u0275pipeBindV",moduleName:Rn},jn.hostProperty={name:"\u0275\u0275hostProperty",moduleName:Rn},jn.property={name:"\u0275\u0275property",moduleName:Rn},jn.propertyInterpolate={name:"\u0275\u0275propertyInterpolate",moduleName:Rn},jn.propertyInterpolate1={name:"\u0275\u0275propertyInterpolate1",moduleName:Rn},jn.propertyInterpolate2={name:"\u0275\u0275propertyInterpolate2",moduleName:Rn},jn.propertyInterpolate3={name:"\u0275\u0275propertyInterpolate3",moduleName:Rn},jn.propertyInterpolate4={name:"\u0275\u0275propertyInterpolate4",moduleName:Rn},jn.propertyInterpolate5={name:"\u0275\u0275propertyInterpolate5",moduleName:Rn},jn.propertyInterpolate6={name:"\u0275\u0275propertyInterpolate6",moduleName:Rn},jn.propertyInterpolate7={name:"\u0275\u0275propertyInterpolate7",moduleName:Rn},jn.propertyInterpolate8={name:"\u0275\u0275propertyInterpolate8",moduleName:Rn},jn.propertyInterpolateV={name:"\u0275\u0275propertyInterpolateV",moduleName:Rn},jn.i18n={name:"\u0275\u0275i18n",moduleName:Rn},jn.i18nAttributes={name:"\u0275\u0275i18nAttributes",moduleName:Rn},jn.i18nExp={name:"\u0275\u0275i18nExp",moduleName:Rn},jn.i18nStart={name:"\u0275\u0275i18nStart",moduleName:Rn},jn.i18nEnd={name:"\u0275\u0275i18nEnd",moduleName:Rn},jn.i18nApply={name:"\u0275\u0275i18nApply",moduleName:Rn},jn.i18nPostprocess={name:"\u0275\u0275i18nPostprocess",moduleName:Rn},jn.pipe={name:"\u0275\u0275pipe",moduleName:Rn},jn.projection={name:"\u0275\u0275projection",moduleName:Rn},jn.projectionDef={name:"\u0275\u0275projectionDef",moduleName:Rn},jn.reference={name:"\u0275\u0275reference",moduleName:Rn},jn.inject={name:"\u0275\u0275inject",moduleName:Rn},jn.injectAttribute={name:"\u0275\u0275injectAttribute",moduleName:Rn},jn.injectPipeChangeDetectorRef={name:"\u0275\u0275injectPipeChangeDetectorRef",moduleName:Rn},jn.directiveInject={name:"\u0275\u0275directiveInject",moduleName:Rn},jn.invalidFactory={name:"\u0275\u0275invalidFactory",moduleName:Rn},jn.invalidFactoryDep={name:"\u0275\u0275invalidFactoryDep",moduleName:Rn},jn.templateRefExtractor={name:"\u0275\u0275templateRefExtractor",moduleName:Rn},jn.resolveWindow={name:"\u0275\u0275resolveWindow",moduleName:Rn},jn.resolveDocument={name:"\u0275\u0275resolveDocument",moduleName:Rn},jn.resolveBody={name:"\u0275\u0275resolveBody",moduleName:Rn},jn.defineComponent={name:"\u0275\u0275defineComponent",moduleName:Rn},jn.setComponentScope={name:"\u0275\u0275setComponentScope",moduleName:Rn},jn.ComponentDefWithMeta={name:"\u0275\u0275ComponentDefWithMeta",moduleName:Rn},jn.FactoryDef={name:"\u0275\u0275FactoryDef",moduleName:Rn},jn.defineDirective={name:"\u0275\u0275defineDirective",moduleName:Rn},jn.DirectiveDefWithMeta={name:"\u0275\u0275DirectiveDefWithMeta",moduleName:Rn},jn.InjectorDef={name:"\u0275\u0275InjectorDef",moduleName:Rn},jn.defineInjector={name:"\u0275\u0275defineInjector",moduleName:Rn},jn.NgModuleDefWithMeta={name:"\u0275\u0275NgModuleDefWithMeta",moduleName:Rn},jn.ModuleWithProviders={name:"ModuleWithProviders",moduleName:Rn},jn.defineNgModule={name:"\u0275\u0275defineNgModule",moduleName:Rn},jn.setNgModuleScope={name:"\u0275\u0275setNgModuleScope",moduleName:Rn},jn.PipeDefWithMeta={name:"\u0275\u0275PipeDefWithMeta",moduleName:Rn},jn.definePipe={name:"\u0275\u0275definePipe",moduleName:Rn},jn.queryRefresh={name:"\u0275\u0275queryRefresh",moduleName:Rn},jn.viewQuery={name:"\u0275\u0275viewQuery",moduleName:Rn},jn.staticViewQuery={name:"\u0275\u0275staticViewQuery",moduleName:Rn},jn.staticContentQuery={name:"\u0275\u0275staticContentQuery",moduleName:Rn},jn.loadQuery={name:"\u0275\u0275loadQuery",moduleName:Rn},jn.contentQuery={name:"\u0275\u0275contentQuery",moduleName:Rn},jn.NgOnChangesFeature={name:"\u0275\u0275NgOnChangesFeature",moduleName:Rn},jn.InheritDefinitionFeature={name:"\u0275\u0275InheritDefinitionFeature",moduleName:Rn},jn.CopyDefinitionFeature={name:"\u0275\u0275CopyDefinitionFeature",moduleName:Rn},jn.ProvidersFeature={name:"\u0275\u0275ProvidersFeature",moduleName:Rn},jn.listener={name:"\u0275\u0275listener",moduleName:Rn},jn.getFactoryOf={name:"\u0275\u0275getFactoryOf",moduleName:Rn},jn.getInheritedFactory={name:"\u0275\u0275getInheritedFactory",moduleName:Rn},jn.sanitizeHtml={name:"\u0275\u0275sanitizeHtml",moduleName:Rn},jn.sanitizeStyle={name:"\u0275\u0275sanitizeStyle",moduleName:Rn},jn.sanitizeResourceUrl={name:"\u0275\u0275sanitizeResourceUrl",moduleName:Rn},jn.sanitizeScript={name:"\u0275\u0275sanitizeScript",moduleName:Rn},jn.sanitizeUrl={name:"\u0275\u0275sanitizeUrl",moduleName:Rn},jn.sanitizeUrlOrResourceUrl={name:"\u0275\u0275sanitizeUrlOrResourceUrl",moduleName:Rn},jn.trustConstantHtml={name:"\u0275\u0275trustConstantHtml",moduleName:Rn},jn.trustConstantScript={name:"\u0275\u0275trustConstantScript",moduleName:Rn},jn.trustConstantResourceUrl={name:"\u0275\u0275trustConstantResourceUrl",moduleName:Rn};**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
s Wn{tatic fromParsedEvent(e){const t=0===e.type?e.targetOrPhase:null,n=1===e.type?e.targetOrPhase:null;return new Wn(e.name,e.type,e.handler,t,n,e.sourceSpan,e.handlerSpan)}visit(e){return e.visitBoundEvent(this)}}ss Zn{constructor(e,t,n,s,r){this.name=e,this.value=t,this.sourceSpan=n,this.keySpan=s,this.valueSpan=r}visit(e){return e.visitVariable(this)}}class Jn{constructor(e,t,n,s){this.name=e,this.value=t,this.sourceSpan=n,this.valueSpan=s}visit(e){return e.visitReference(this)}}**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
lass ts{constructor(e,t){this.value=e,this.sourceSpan=t}visit(e,t){return e.visitText(this,t)}}class ns{constructor(e,t){this.children=e,this.sourceSpan=t}visit(e,t){return e.visitContainer(this,t)}}class ss{constructor(e,t,n,s){this.expression=e,this.type=t,this.cases=n,this.sourceSpan=s}visit(e,t){return e.visitIcu(this,t)}}lass is{constructor(e,t,n){this.value=e,this.name=t,this.sourceSpan=n}visit(e,t){return e.visitPlaceholder(this,t)}}class os{constructor(e,t,n){this.value=e,this.name=t,this.sourceSpan=n}visit(e,t){return e.visitIcuPlaceholder(this,t)}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function cs(e){return e.id||us(e)}function us(e){return (t=e.nodes,t.map(e=>e.visit(fs,null))).join("")+`[${e.meaning}]`);var t}st fs=new ds;nction ys(e){const t=zt(e);let n=vs(t,0),s=vs(t,102072);return 0!=n||0!=s&&1!=s||(n^=319790063,s^=-1801410264),[n,s]}r bs;ion(e){e[e.Little=0]="Little",e[e.Big=1]="Big"}(bs||(bs={}));const As=new 256);class Ds{createNameMapper(e){return null}}/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const ks=new ass Ns{constructor(e,t){this.rootTag=e,this.dtd=t}visit(e){return e.visitDoctype(this)}}st js=[[/&/g,"&amp;"],[/"/g,"&quot;"],[/'/g,"&apos;"],[/</g,"&lt;"],[/>/g,"&gt;"]];/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Vs="messagebundle",$s="ph",Bs="ex"; * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Gs="i18n",Ks="i18n-";unction Zs(e){return e instanceof es}unction Xs(e){return!!e.i18n}icense
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const cr=/[-.]/,ur="_t",hr="ctx",pr="rf";function dr(e,t){let n=null;return()=>(n||(e.push(new tt(ur,void 0,se)),n=vt(t)),n)}function fr(e){if(this)throw new Error(`Builder ${this.constructor.name} doesn't support ${e} yet`);throw new Error(`Feature ${e} is not supported yet`)}function mr(e){throw new Error(`Invalid state: Visitor ${this.constructor.name} doesn't handle ${e.constructor.name}`)}unction yr(e,t){return Object.getOwnPropertyNames(e).length>0?function(e,t){return St(Object.getOwnPropertyNames(e).map(n=>{const s=e[n];let r,i,o;return Array.isArray(s)?[i,r]=s:[r,i]=Ot(n,[n,s]),o=r,{key:o,quoted:cr.test(o),value:t&&i!==r?Ct([gr(i),gr(r)]):gr(i)}}))}(e,t):null}unction _r(e,t){if(Array.isArray(e.predicate)){let n=[];return e.predicate.forEach(,t.getConstLiteral(Ct(n),!0)}return e.predicate}
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */var Sr,xr,Tr;function Ar(e){const t=vt("t"),n=[];let s=le;const r=Pr(e)?t:new He(ue.Or,t,e.internalType);let i=null;if(null!==e.deps)"invalid"!==e.deps&&(i=new Se(r,Dr(e.deps,e.injectFn,e.target===xr.Pipe)),s=function(e){let t=!1;const n=e.map(e=>{const n=function(e){const t=[];e.resolved===Tr.Attribute&&null!==e.attribute&&t.push({key:"attribute",value:e.attribute,quoted:!1});e.optional&&t.push({key:"optional",value:At(!0),quoted:!1});e.host&&t.push({key:"host",value:At(!0),quoted:!1});e.self&&t.push({key:"self",value:At(!0),quoted:!1});e.skipSelf&&t.push({key:"skipSelf",value:At(!0),quoted:!1});return t.length>0?St(t):null}(e);return null!==n?(t=!0,n):At(null)});return t?wt(Ct(n)):le}(e.deps));else{const t=vt(`\u0275${e.name}_BaseFactory`),s=_t(jn.getInheritedFactory),o=t.set(s.callFn([e.internalType],void 0,!0)).toDeclStmt(re,[Je.Exported,Je.Final]);n.push(o),i=t.callFn([r])}const o=i,a=[];let l=null;function c(e){const n=vt("r");a.push(n.set(Qe).toDeclStmt());let s=null;return s=null!==o?n.set(o).toStmt():_t(jn.invalidFactory).callFn([]).toStmt(),a.push(Tt(t,[s],[n.set(e).toStmt()])),n}if(Pr(e)&&e.delegateType===Sr.Factory){const t=vt(`\u0275${e.name}_BaseFactory`),s=_t(jn.getFactoryOf);if(e.delegate.isEquivalent(e.internalType))throw new Error("Illegal state: compiling factory that delegates to itself");const r=t.set(s.callFn([e.delegate])).toDeclStmt(re,[Je.Exported,Je.Final]);n.push(r),l=c(t.callFn([]))}else if(Pr(e)){const t=Dr(e.delegateDeps,e.injectFn,e.target===xr.Pipe);l=c(new(e.delegateType===Sr.Class?Se:Ce)(e.delegate,t))}else l=/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */(e)?c(e.expression):i;return null!==l?a.push(new rt(l)):a.push(_t(jn.invalidFactory).callFn([]).toStmt()),{factory:xt([new Ve("t",se)],a,re,void 0,`${e.name}_Factory`),statements:n,type:wt(_t(jn.FactoryDef,[Vn(e.type.type,e.typeArgumentCount),s]))}}function Dr(e,t,n){return e.map((e,s)=>function(e,t,n,s){switch(e.resolved){case Tr.Token:case Tr.ChangeDetectorRef:const r=0|(e.self?2:0)|(e.skipSelf?4:0)|(e.host?1:0)|(e.optional?8:0);let i=0!==r||e.optional?At(r):null;if(n&&e.resolved===Tr.ChangeDetectorRef)return _t(jn.injectPipeChangeDetectorRef).callFn(i?[i]:[]);const o=[e.token];return i&&o.push(i),_t(t).callFn(o);case Tr.Attribute:return _t(jn.injectAttribute).callFn([e.token]);case Tr.Invalid:return _t(jn.invalidFactoryDep).callFn([At(s)]);default:return fr(`Unknown R3ResolvedDependencyType: ${Tr[e.resolved]}`)}}(e,t,n,s))}unction kr(e,t){return{statements:[],factory:e.node===t.node?t.prop("\u0275fac"):xt([new Ve("t",se)],[new rt(t.callMethod("\u0275fac",[vt("t")]))])}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function(e){e[e.Class=0]="Class",e[e.Function=1]="Function",e[e.Factory=2]="Factory"}(Sr||(Sr={})),function(e){e[e.Directive=0]="Directive",e[e.Component=1]="Component",e[e.Injectable=2]="Injectable",e[e.Pipe=3]="Pipe",e[e.NgModule=4]="NgModule"}(xr||(xr={})),function(e){e[e.Token=0]="Token",e[e.Attribute=1]="Attribute",e[e.ChangeDetectorRef=2]="ChangeDetectorRef",e[e.Invalid=3]="Invalid"}(Tr||(Tr={}));const Ir=[/^\s*$/,/[<>]/,/^[{}]$/,/&(#|[a-z])/i,/^\/\//];function Nr(e,t){if(!(null==t||Array.isArray(t)&&2==t.length))throw new Error(`Expected '${e}' to be an array, [start, end].`);if(null!=t){const e=t[0],n=t[1];Ir.forEach(}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */onst Fr=new Mr("{{","}}");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */*
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Vr=/'|\\|\n|\r|\$/g,$r=/^[$A-Z_][0-9A-Z_$]*$/i,Br="  ",Hr=vt("error",null,null),Ur=vt("stack",null,null);lass zr{engthlass(e){this._classes.push(e)}popClass(){return this._classes.pop()}SourceMapGenerator(e,t=0){const n=new Rr(e);let s=!1;const r=for(let i=0;i<t;i++)n.addLine(),r();return this.sourceLines.forEach((e,t)=>{n.addLine();const i=e.srcSpans,o=e.parts;let a=e.indent*Br.length,l=0;for(;l<i.length&&!i[l];)a+=o[l].length,l++;for(l<i.length&&0===t&&0===a?s=!0:r();l<i.length;){const e=i[l],t=e.start.file,s=e.start.line,r=e.start.col;for(n.addSource(t.url,t.content).addMapping(a,t.url,s,r),a+=o[l].length,l++;l<i.length&&(e===i[l]||!i[l]);)a+=o[l].length,l++}}),n}ass Wr{constructor(e){this._escapeDollarInStrings=e}sitReturnStmt(e,t){return this.printLeadingComments(e,t),t.print(e,"return "),e.value.visitExpression(this,t),t.println(e,";"),null}appedNodeExpr(e,t){throw new Error("Abstract emitter cannot visit WrappedNodeExpr.")}sertNotNullExpr(e,t){return e.condition.visitExpression(this,t),null}isitBinaryOperatorExpr(e,t){let n;switch(e.operator){case ue.Equals:n="==";break;case ue.Identical:n="===";break;case ue.NotEquals:n="!=";break;case ue.NotIdentical:n="!==";break;case ue.And:n="&&";break;case ue.BitwiseAnd:n="&";break;case ue.Or:n="||";break;case ue.Plus:n="+";break;case ue.Minus:n="-";break;case ue.Divide:n="/";break;case ue.Multiply:n="*";break;case ue.Modulo:n="%";break;case ue.Lower:n="<";break;case ue.LowerEquals:n="<=";break;case ue.Bigger:n=">";break;case ue.BiggerEquals:n=">=";break;default:throw new Error(`Unknown operator ${e.operator}`)}return e.parens&&t.print(e,"("),e.lhs.visitExpression(this,t),t.print(e,` ${n} `),e.rhs.visitExpression(this,t),e.parens&&t.print(e,")"),null}sitLiteralArrayExpr(e,t){return t.print(e,"["),this.visitAllExpressions(e.entries,t,","),t.print(e,"]"),null}tAllStatements(e,t){e.forEach(e=>e.visitStatement(this,t))}}unction Kr(e){let t="";for(let n=0;n<e;n++)t+=Br;return t}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class Qr extends Wr{WrappedNodeExpr(e,t){throw new Error("Cannot emit a WrappedNodeExpr in Javascript.")}calizedString(e,t){t.print(e,'$localize((this&&this.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e})(');const n=[e.serializeI18nHead()];for(let s=1;s<e.messageParts.length;s++)n.push(e.serializeI18nTemplatePart(s));return t.print(e,`[${n.map(e=>Gr(e.cooked,!1)).join(", ")}], `),t.print(e,`[${n.map(.join(", ")}])`),e.expressions.forEach(,t.print(e,")"),null}etBuiltinMethodName(e){let t;switch(e){case pe.ConcatArray:t="concat";break;case pe.SubscribeObservable:t="subscribe";break;case pe.Bind:t="bind";break;default:throw new Error(`Unknown builtin method: ${e}`)}return t}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class Zr{evaluateStatements(e,t,n,s){const r=new Jr(n),i=zr.createRoot();return t.length>0&&!t[0].isEquivalent(At("use strict").toStmt())&&(t=[At("use strict").toStmt(),...t]),r.visitAllStatements(t,i),r.createReturnStmt(i),this.evaluateCode(e,i,r.getArgs(),s)}evaluateCode(e,t,n,s){let r=`"use strict";${t.toSource()}\n//# sourceURL=${e}`;const i=[],o=[];for(const l in n)o.push(n[l]),i.push(l);if(s){const n=new Function(...i.concat("return null;")).toString(),s=n.slice(0,n.indexOf("return null;")).split("\n").length-1;r+=`\n${t.toSourceMapGenerator(e,s).toJsComment()}`}const a=new Function(...i.concat(r));return this.executeFunction(a,o)}/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const Xr=10,Yr=41,ei=44,ti=47,ni=58,si=59,ri=60,ii=61,oi=62,ai=97,li=122,ci=123,ui=125;unction pi(e){return 48<=e&&e<=57}function di(e){return e>=ai&&e<=li||e>=65&&e<=90}**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class gi{constructor(e,t,n,s){this.file=e,this.offset=t,this.line=n,this.col=s}oveBy(e){const t=this.file.content,n=t.length;let s=this.offset,r=this.line,i=this.col;for(;s>0&&e<0;){s--,e++;if(t.charCodeAt(s)==Xr){r--;const e=t.substr(0,s-1).lastIndexOf(String.fromCharCode(Xr));i=e>0?s-e:s}else i--}for(;s<n&&e>0;){const n=t.charCodeAt(s);s++,e--,n==Xr?(r++,i=0):i++}return new gi(this.file,s,r,i)}class yi{constructor(e,t){this.content=e,this.url=t}}ar _i,bi,wi,Ei;!function(e){e[e.WARNING=0]="WARNING",e[e.ERROR=1]="ERROR"}(_i||(_i={}));/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 *//**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Ti(e){const{internalType:t,type:n,bootstrap:s,declarations:r,imports:i,exports:o,schemas:a,containsForwardDecls:l,emitInline:c,id:u}=e,h=[],p={type:t};if(s.length&&(p.bootstrap=Di(s,l)),c)r.length&&(p.declarations=Di(r,l)),i.length&&(p.imports=Di(i,l)),o.length&&(p.exports=Di(o,l));else{const t=function(e){const{adjacentType:t,declarations:n,imports:s,exports:r,containsForwardDecls:i}=e,o={};n.length&&(o.declarations=Di(n,i));s.length&&(o.imports=Di(s,i));r.length&&(o.exports=Di(r,i));if(0===Object.keys(o).length)return null;const a=function(e){const t=new Me({name:"ngJitMode",moduleName:null}),n=new He(ue.Identical,new ye(t),At("undefined")),s=new He(ue.Or,n,t,void 0,void 0,!0);return new He(ue.And,s,e)}(new Ce(_t(jn.setNgModuleScope),[t,Ln(o)])),l=new $e([],[a.toStmt()]);return new Ce(l,[]).toStmt()}(e);null!==t&&h.push(t)}a&&a.length&&(p.schemas=Ct(a.map(e=>e.value))),u&&(p.id=u);return{expression:_t(jn.defineNgModule).callFn([Ln(p)]),type:new ee(_t(jn.NgModuleDefWithMeta,[new ee(n.type),Ai(r),Ai(i),Ai(o)])),additionalStatements:h}}**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Pi(e){const t=[];t.push({key:"name",value:At(e.pipeName),quoted:!1}),t.push({key:"type",value:e.type.value,quoted:!1}),t.push({key:"pure",value:At(e.pure),quoted:!1});return{expression:_t(jn.definePipe).callFn([St(t)]),type:new ee(_t(jn.PipeDefWithMeta,[Vn(e.type.type,e.typeArgumentCount),new ee(new xe(e.pipeName))]))}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
ass Ii{constructor(e,t){this.span=e,this.sourceSpan=t}oString(){return"AST"}} Li extends Ii{constructor(e,t,n){super(e,t),this.expressions=n}visit(e,t=null){return e.visitChain(this,t)}}class Vi extends Ii{constructor(e,t,n,s,r){super(e,t),this.condition=n,this.trueExp=s,this.falseExp=r}visit(e,t=null){return e.visitConditional(this,t)}}class $i extends Ni{constructor(e,t,n,s,r){super(e,t,n),this.receiver=s,this.name=r}visit(e,t=null){return e.visitPropertyRead(this,t)}}class Bi extends Ni{constructor(e,t,n,s,r,i){super(e,t,n),this.receiver=s,this.name=r,this.value=i}visit(e,t=null){return e.visitPropertyWrite(this,t)}}lass Ui extends Ii{constructor(e,t,n,s){super(e,t),this.obj=n,this.key=s}visit(e,t=null){return e.visitKeyedRead(this,t)}}class qi extends Ii{constructor(e,t,n,s,r){super(e,t),this.obj=n,this.key=s,this.value=r}visit(e,t=null){return e.visitKeyedWrite(this,t)}}class zi extends Ni{constructor(e,t,n,s,r,i){super(e,t,i),this.exp=n,this.name=s,this.args=r}visit(e,t=null){return e.visitPipe(this,t)}}class Wi extends Ii{constructor(e,t,n){super(e,t),this.value=n}visit(e,t=null){return e.visitLiteralPrimitive(this,t)}}class Gi extends Ii{constructor(e,t,n){super(e,t),this.expressions=n}visit(e,t=null){return e.visitLiteralArray(this,t)}}class Ki extends Ii{constructor(e,t,n,s){super(e,t),this.keys=n,this.values=s}visit(e,t=null){return e.visitLiteralMap(this,t)}}class Qi extends Ii{constructor(e,t,n,s){super(e,t),this.strings=n,this.expressions=s}visit(e,t=null){return e.visitInterpolation(this,t)}}ass Xi extends Ii{constructor(e,t,n){super(e,t),this.expression=n}visit(e,t=null){return e.visitPrefixNot(this,t)}}lass eo extends Ni{constructor(e,t,n,s,r,i){super(e,t,n),this.receiver=s,this.name=r,this.args=i}visit(e,t=null){return e.visitMethodCall(this,t)}}ass so{constructor(e,t){this.start=e,this.end=t}}lass io{constructor(e,t,n){this.sourceSpan=e,this.key=t,this.value=n}}class oo{constructor(e,t,n){this.sourceSpan=e,this.key=t,this.value=n}}class ao{isitUnary(e,t){this.visit(e.expr,t)}visitBinary(e,t){this.visit(e.left,t),this.visit(e.right,t)}visitChain(e,t){this.visitAll(e.expressions,t)}visitConditional(e,t){this.visit(e.condition,t),this.visit(e.trueExp,t),this.visit(e.falseExp,t)}visitPipe(e,t){this.visit(e.exp,t),this.visitAll(e.args,t)}isitImplicitReceiver(e,t){}visitThisReceiver(e,t){}visitInterpolation(e,t){this.visitAll(e.expressions,t)}visitKeyedRead(e,t){this.visit(e.obj,t),this.visit(e.key,t)}isitLiteralArray(e,t){this.visitAll(e.expressions,t)}visitLiteralMap(e,t){this.visitAll(e.values,t)}visitLiteralPrimitive(e,t){}visitMethodCall(e,t){this.visit(e.receiver,t),this.visitAll(e.args,t)}visitPrefixNot(e,t){this.visit(e.expression,t)}visitNonNullAssert(e,t){this.visit(e.expression,t)}visitPropertyRead(e,t){this.visit(e.receiver,t)}visitPropertyWrite(e,t){this.visit(e.receiver,t),this.visit(e.value,t)}sitQuote(e,t){}function(e){e[e.DEFAULT=0]="DEFAULT",e[e.LITERAL_ATTR=1]="LITERAL_ATTR",e[e.ANIMATION=2]="ANIMATION"}(bi||(bi={}));*
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class po{}po.event=vt("$event");unction mo(e,t,n,s,r,i,o,a){e||(e=new Ao(a));const l=go({createLiteralArrayConverter:createLiteralMapConverter:createPipeConverter:,n),c=new xo(e,t,s,r,i,o),u=[];To(l.visit(c,Ei.Statement),u),c.temporaryCount,s,u),c.usesImplicitReceiver&&e.notifyImplicitReceiverUse();const h=u.length-1;let p=null;if(h>=0){const e=function(e){if(e instanceof st)return e.expr;if(e instanceof rt)return e.value;return null}(u[h]);e&&(p=function(e){return vt(`pd_${e}`)}(s),u[h]=p.set(e.cast(se).notIdentical(At(!1))).toDeclStmt(null,[Je.Final]))}return new fo(u,p)}lass yo{constructor(e,t){this.stmts=e,this.currValExpr=t}}nction bo(e,t){return`tmp_${e}_${t}`}nction(e){e[e.General=0]="General",e[e.TrySimple=1]="TrySimple",e[e.Expression=2]="Expression"}(wi||(wi={})),function(e){e[e.Statement=0]="Statement",e[e.Expression=1]="Expression"}(Ei||(Ei={}));class So extends class{visitImplicitReceiver(e,t){return e}visitThisReceiver(e,t){return e}visitInterpolation(e,t){return new Qi(e.span,e.sourceSpan,e.strings,this.visitAll(e.expressions))}isitPropertyRead(e,t){return new $i(e.span,e.sourceSpan,e.nameSpan,e.receiver.visit(this),e.name)}sitMethodCall(e,t){return new eo(e.span,e.sourceSpan,e.nameSpan,e.receiver.visit(this),e.name,this.visitAll(e.args))}visitSafeMethodCall(e,t){return new to(e.span,e.sourceSpan,e.nameSpan,e.receiver.visit(this),e.name,this.visitAll(e.args))}isitLiteralArray(e,t){return new Gi(e.span,e.sourceSpan,this.visitAll(e.expressions))}itPrefixNot(e,t){return new Xi(e.span,e.sourceSpan,e.expression.visit(this))}isitConditional(e,t){return new Vi(e.span,e.sourceSpan,e.condition.visit(this),e.trueExp.visit(this),e.falseExp.visit(this))}tructor(e){super(),this._converterFactory=e}ass xo{sitBinary(e,t){let n;switch(e.operation){case"+":n=ue.Plus;break;case"-":n=ue.Minus;break;case"*":n=ue.Multiply;break;case"/":n=ue.Divide;break;case"%":n=ue.Modulo;break;case"&&":n=ue.And;break;case"||":n=ue.Or;break;case"==":n=ue.Equals;break;case"!=":n=ue.NotEquals;break;case"===":n=ue.Identical;break;case"!==":n=ue.NotIdentical;break;case"<":n=ue.Lower;break;case">":n=ue.Bigger;break;case"<=":n=ue.LowerEquals;break;case">=":n=ue.BiggerEquals;break;default:throw new Error(`Unsupported operation ${e.operation}`)}return Co(t,new He(n,this._visit(e.left,Ei.Expression),this._visit(e.right,Ei.Expression),void 0,this.convertSourceSpan(e.span)))}edWriteisitLiteralArray(e,t){throw new Error("Illegal State: literal arrays should have been converted into functions")}visitLiteralMap(e,t){throw new Error("Illegal State: literal maps should have been converted into functions")}itPrefixNot(e,t){return Co(t,(n=this._visit(e.expression,Ei.Expression),new Re(n,s)));var n,s}visitNonNullAssert(e,t){return Co(t,(n=this._visit(e.expression,Ei.Expression),new je(n,s)));var n,s}sitSafePropertyRead(e,t){return this.convertSafeAccess(e,this.leftMostSafeNode(e),t)}sitonvertSafeAccess(e,t,n){let s,r=this._visit(t.receiver,Ei.Expression);this.needsTemporary(t.receiver)&&(s=this.allocateTemporary(),r=s.set(r),this._resultMap.set(t.receiver,s));const i=r.isBlank();t instanceof to?this._nodeMap.set(t,new eo(t.span,t.sourceSpan,t.nameSpan,t.receiver,t.name,t.args)):this._nodeMap.set(t,new $i(t.span,t.sourceSpan,t.nameSpan,t.receiver,t.name));const o=this._visit(e,Ei.Expression);return this._nodeMap.delete(t),s&&this.releaseTemporary(s),Co(n,i.conditional(At(null),o))}leftMostSafeNode(e){const t=return e.visit({visitUnary:e=>null,visitBinary:e=>null,visitChain:e=>null,visitConditional:e=>null,visitFunctionCall:e=>null,visitImplicitReceiver:e=>null,visitThisReceiver:e=>null,visitInterpolation:e=>null,visitKeyedRead(e){return t(this,e.obj)},visitKeyedWrite:e=>null,visitLiteralArray:e=>null,visitLiteralMap:e=>null,visitLiteralPrimitive:e=>null,visitMethodCall(e){return t(this,e.receiver)},visitPipe:e=>null,visitPrefixNot:e=>null,visitNonNullAssert:e=>null,visitPropertyRead(e){return t(this,e.receiver)},visitPropertyWrite:e=>null,visitQuote:visitSafeMethodCall(e){return t(this,e.receiver)||e},visitSafePropertyRead)}needsTemporary(e){const t=return e.visit({visitUnary(e){return t(this,e.expr)},visitBinaryvisitChain:e=>!1,visitConditionalvisitFunctionCall:e=>!0,visitImplicitReceiver:e=>!1,visitThisReceiver:e=>!1,visitInterpolationvisitKeyedRead:e=>!1,visitKeyedWrite:e=>!1,visitLiteralArray:e=>!0,visitLiteralMap:e=>!0,visitLiteralPrimitive:e=>!1,visitMethodCall:e=>!0,visitPipe:e=>!0,visitPrefixNot(e){return t(this,e.expression)},visitNonNullAssertvisitPropertyRead:e=>!1,visitPropertyWrite:e=>!1,visitQuote:e=>!1,visitSafeMethodCall:e=>!0,visitSafePropertyRead:)}s Ao{constructor(e){this.globals=e}notifyImplicitReceiverUse(){}class Do extends no{constructor(e,t,n,s){super(e,t,null,n),this.args=n,this.converter=s}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class Po{constructor(){this.strictStyling=!0}shimCssText(e,t,n=""){const s=e.match(Ko)||[];e=e),e=this._insertDirectives(e);return[this._scopeCssText(e,t,n),...s].join("\n")}ractUnscopedRulesFromCssTextconvertColonHost(e){return this._convertColonRule(e,jo,this._colonHostPartReplacer)}_convertColonHostContextconvertColonRule(e,t,n){return e.replace(t,function(...e){if(e[2]){const t=e[2].split(","),s=[];for(let r=0;r<t.length;r++){const i=t[r].trim();if(!i)break;s.push(n(Vo,i,e[3]))}return s.join(",")}return Vo+e[3]})}_colonHostContextPartReplacercolonHostPartReplacercopeSelectors(e,t,n){return function(e,t){const n=sa(e,ea,Zo),s=sa(n.escapedString,Yo,Qo);let r=0,i=0;return s.escapedString.replace(Jo,(...e)=>{const n=e[2];let i="",o=e[4],a="";o&&o.startsWith("{%BLOCK%")&&(i=s.blocks[r++],o=o.substring(Qo.length+1),a="{");const l=t(new ta(n,i));return`${e[1]}${l.selector}${e[3]}${a}${l.content}${o}`}).replace(Xo,}(e,e=>{let s=e.selector,r=e.content;return"@"!=e.selector[0]?s=this._scopeSelector(e.selector,t,n,this.strictStyling):(e.selector.startsWith("@media")||e.selector.startsWith("@supports")||e.selector.startsWith("@page")||e.selector.startsWith("@document"))&&(r=this._scopeSelectors(e.content,t,n)),new ta(s,r)})}yStrictSelectorScope(e,t,n){const s="["+(t=t.replace(/\[is=([^\]]*)\]/g,)+"]",r=i=new ko(e);let o,a="",l=0;const c=/( |>|\+|~(?!=))\s*/g;let u=!((e=i.content()).indexOf(Vo)>-1);for(;null!==(o=c.exec(e));){const t=o[1],n=e.slice(l,o.index).trim();u=u||n.indexOf(Vo)>-1;a+=`${u?r(n):n} ${t} `,l=c.lastIndex}const h=e.substring(l);return u=u||h.indexOf(Vo)>-1,a+=u?r(h):h,i.restore(a)}onst Oo=/polyfill-next-selector[^}]*content:[\s]*?(['"])(.*?)\1[;\s]*}([^{]*?){/gim,Io=/(polyfill-rule)[^}]*(content:[\s]*(['"])(.*?)\3)[;\s]*[^}]*}/gim,No=/(polyfill-unscoped-rule)[^}]*(content:[\s]*(['"])(.*?)\3)[;\s]*[^}]*}/gim,Mo="-shadowcsshost",Fo="-shadowcsscontext",Ro=")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)",jo=new RegExp("("+Mo+Ro,"gim"),Lo=new RegExp("("+Fo+Ro,"gim"),Vo=Mo+"-no-combinator",$o=/-shadowcsshost-no-combinator([^\s]*)/,Bo=[/::shadow/g,/::content/g,/\/shadow-deep\//g,/\/shadow\//g],Ho=/(?:>>>)|(?:\/deep\/)|(?:::ng-deep)/g,Uo="([>\\s~+[.,{:][\\s\\S]*)?$",qo=/-shadowcsshost/gim,zo=/:host/gim,Wo=/:host-context/gim,Go=/\/\*\s*[\s\S]*?\*\//g;const Ko=/\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g;const Qo="%BLOCK%",Zo="%QUOTED%",Jo=/(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g,Xo=/%QUOTED%/g,Yo=new Map([["{","}"]]),ea=new Map([['"','"'],["'","'"]]);class ta{constructor(e,t){this.selector=e,this.content=t}}class na{constructor(e,t){this.escapedString=e,this.blocks=t}}/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const ra="_nghost-%COMP%",ia="_ngcontent-%COMP%";class oa{constructor(e,t,n){this.name=e,this.moduleUrl=t,this.setValue=n}}class aa{constructor(e,t,n,s,r){this.outputCtx=e,this.stylesVar=t,this.dependencies=n,this.isShimmed=s,this.meta=r}}**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class ua{constructor(e,t){this.sourceSpan=e,this.i18n=t}}class ha extends ua{constructor(e,t,n){super(t,n),this.value=e}visit(e,t){return e.visitText(this,t)}}ass fa extends ua{constructor(e,t,n,s,r){super(n,r),this.name=e,this.value=t,this.valueSpan=s}visit(e,t){return e.visitAttribute(this,t)}}nction ya(e,t,n=null){const s=[],r=e.visit?t=>e.visit(t,n)||t.visit(e,n):t=>t.visit(e,n);return t.forEach(e=>{const t=r(e);t&&s.push(t)}),s}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var va;!function(e){e[e.TAG_OPEN_START=0]="TAG_OPEN_START",e[e.TAG_OPEN_END=1]="TAG_OPEN_END",e[e.TAG_OPEN_END_VOID=2]="TAG_OPEN_END_VOID",e[e.TAG_CLOSE=3]="TAG_CLOSE",e[e.INCOMPLETE_TAG_OPEN=4]="INCOMPLETE_TAG_OPEN",e[e.TEXT=5]="TEXT",e[e.ESCAPABLE_RAW_TEXT=6]="ESCAPABLE_RAW_TEXT",e[e.RAW_TEXT=7]="RAW_TEXT",e[e.COMMENT_START=8]="COMMENT_START",e[e.COMMENT_END=9]="COMMENT_END",e[e.CDATA_START=10]="CDATA_START",e[e.CDATA_END=11]="CDATA_END",e[e.ATTR_NAME=12]="ATTR_NAME",e[e.ATTR_QUOTE=13]="ATTR_QUOTE",e[e.ATTR_VALUE=14]="ATTR_VALUE",e[e.DOC_TYPE=15]="DOC_TYPE",e[e.EXPANSION_FORM_START=16]="EXPANSION_FORM_START",e[e.EXPANSION_CASE_VALUE=17]="EXPANSION_CASE_VALUE",e[e.EXPANSION_CASE_EXP_START=18]="EXPANSION_CASE_EXP_START",e[e.EXPANSION_CASE_EXP_END=19]="EXPANSION_CASE_EXP_END",e[e.EXPANSION_FORM_END=20]="EXPANSION_FORM_END",e[e.EOF=21]="EOF"}(va||(va={}));class _a{constructor(e,t,n){this.type=e,this.parts=t,this.sourceSpan=n}}class ba extends Ci{constructor(e,t,n){super(n,e),this.tokenType=t}}class wa{constructor(e,t,n){this.tokens=e,this.errors=t,this.nonNormalizedIcuExpressions=n}}function Ea(e,t,n,s={}){const r=new Da(new yi(e,t),n,s);return r.tokenize(),new wa(function(e){const t=[];let n;for(let s=0;s<e.length;s++){const r=e[s];n&&n.type==va.TEXT&&r.type==va.TEXT?(n.parts[0]+=r.parts[0],n.sourceSpan.end=r.sourceSpan.end):(n=r,t.push(n))}return t}(r.tokens),r.errors,r.nonNormalizedIcuExpressions)}const Ca=/\r\n?/g;unction xa(e){return`Unknown entity "${e}" - use the "&#<decimal>;" or  "&#x<hex>;" syntax`}var Ta;!Ta||(Ta={}));class Aa{constructor(e){this.error=e}}class Da{kenize(){for(;0!==this._cursor.peek();){const t=this._cursor.clone();try{this._attemptCharCode(ri)?this._attemptCharCode(33)?this._attemptCharCode(91)?this._consumeCdata(t):this._attemptCharCode(45)?this._consumeComment(t):this._consumeDocType(t):this._attemptCharCode(ti)?this._consumeTagClose(t):this._consumeTagOpen(t):this._tokenizeIcu&&this._tokenizeExpansionForm()||this._consumeText()}catch(e){this.handleError(e)}}this._beginToken(va.EOF),this._endToken([])}_tokenizeExpansionForm(){if(this.isExpansionFormStart())return this._consumeExpansionFormStart(),!0;if(this._cursor.peek()!==ui&&this._isInExpansionForm())return this._consumeExpansionCaseStart(),!0;if(this._cursor.peek()===ui){if(this._isInExpansionCase())return this._consumeExpansionCaseEnd(),!0;if(this._isInExpansionForm())return this._consumeExpansionFormEnd(),!0}return!1}endToken(e,t){if(null===this._currentTokenStart)throw new ba("Programming error - attempted to end a token when there was no start to the token",this._currentTokenType,this._cursor.getSpan(t));if(null===this._currentTokenType)throw new ba("Programming error - attempted to end a token which has no token type",null,this._cursor.getSpan(this._currentTokenStart));const n=new _a(this._currentTokenType,e,this._cursor.getSpan(this._currentTokenStart,this._leadingTriviaCodePoints));return this.tokens.push(n),this._currentTokenStart=null,this._currentTokenType=null,n}temptCharCodeCaseInsensitive(e){return t=this._cursor.peek(),n=e,Na(t)==Na(n)&&(this._cursor.advance(),!0);var t,n}_requireCharCode(e){const t=this._cursor.clone();if(!this._attemptCharCode(e))throw this._createError(Sa(this._cursor.peek()),this._cursor.getSpan(t))}har(e){if(e&&38===this._cursor.peek())return this._decodeEntity();{const e=String.fromCodePoint(this._cursor.peek());return this._cursor.advance(),e}}_decodeEntity(){const e=this._cursor.clone();if(this._cursor.advance(),!this._attemptCharCode(35)){const t=this._cursor.clone();if(this._attemptCharCodeUntilFn(Ia),this._cursor.peek()!=si)return this._cursor=t,"&";const n=this._cursor.getChars(t);this._cursor.advance();const s=u[n];if(!s)throw this._createError(xa(n),this._cursor.getSpan(e));return s}{const s=this._attemptCharCode(120)||this._attemptCharCode(88),r=this._cursor.clone();if(this._attemptCharCodeUntilFn(Oa),this._cursor.peek()!=si){this._cursor.advance();const n=s?Ta.HEX:Ta.DEC;throw this._createError((t=n,`Unable to parse entity "${this._cursor.getChars(e)}" - ${t} character reference entities must end with ";"`),this._cursor.getSpan())}const i=this._cursor.getChars(r);this._cursor.advance();try{const e=parseInt(i,s?16:10);return String.fromCharCode(e)}catch(n){throw this._createError(xa(this._cursor.getChars(e)),this._cursor.getSpan())}}var t}_consumeRawText(e,t){this._beginToken(e?va.ESCAPABLE_RAW_TEXT:va.RAW_TEXT);const n=[];for(;;){const s=this._cursor.clone(),r=t();if(this._cursor=s,r)break;n.push(this._readChar(e))}return this._endToken([this._processCarriageReturns(n.join(""))])}_consumeComment(e){this._beginToken(va.COMMENT_START,e),this._requireCharCode(45),this._endToken([]),this._consumeRawText(!1,()=>this._attemptStr("--\x3e")),this._beginToken(va.COMMENT_END),this._requireStr("--\x3e"),this._endToken([])}_consumeCdata(e){this._beginToken(va.CDATA_START,e),this._requireStr("CDATA["),this._endToken([]),this._consumeRawText(!1,,this._beginToken(va.CDATA_END),this._requireStr("]]>"),this._endToken([])}_consumeDocType(e){this._beginToken(va.DOC_TYPE,e);const t=this._cursor.clone();this._attemptUntilChar(oi);const n=this._cursor.getChars(t);this._cursor.advance(),this._endToken([n])}_consumePrefixAndName(){const e=this._cursor.clone();let t="";for(;this._cursor.peek()!==ni&&!(((n=this._cursor.peek())<ai||li<n)&&(n<65||90<n)&&(n<48||n>57));)this._cursor.advance();var n;let s;this._cursor.peek()===ni?(t=this._cursor.getChars(e),this._cursor.advance(),s=this._cursor.clone()):s=e,this._requireCharCodeUntilFn(ka,""===t?0:1);return[t,this._cursor.getChars(s)]}_consumeTagOpen(e){let t,n,r;try{if(!di(this._cursor.peek()))throw this._createError(Sa(this._cursor.peek()),this._cursor.getSpan(e));for(r=this._consumeTagOpenStart(e),n=r.parts[0],t=r.parts[1],this._attemptCharCodeUntilFn(Pa);this._cursor.peek()!==ti&&this._cursor.peek()!==oi&&this._cursor.peek()!==ri;)this._consumeAttributeName(),this._attemptCharCodeUntilFn(Pa),this._attemptCharCode(ii)&&(this._attemptCharCodeUntilFn(Pa),this._consumeAttributeValue()),this._attemptCharCodeUntilFn(Pa);this._consumeTagOpenEnd()}catch(o){if(o instanceof Aa)return void(r?r.type=va.INCOMPLETE_TAG_OPEN:(this._beginToken(va.TEXT,e),this._endToken(["<"])));throw o}const i=this._getTagDefinition(t).contentType;i===s.RAW_TEXT?this._consumeRawTextWithTagClose(n,t,!1):i===s.ESCAPABLE_RAW_TEXT&&this._consumeRawTextWithTagClose(n,t,!0)}_consumeRawTextWithTagClose(e,t,n){this._consumeRawText(n,()=>!!this._attemptCharCode(ri)&&(!!this._attemptCharCode(ti)&&(this._attemptCharCodeUntilFn(Pa),!!this._attemptStrCaseInsensitive(t)&&(this._attemptCharCodeUntilFn(Pa),this._attemptCharCode(oi)))));this._beginToken(va.TAG_CLOSE),this._requireCharCodeUntilFn(3),this._cursor.advance(),this._endToken([e,t])}_consumeTagOpenStartconsumeAttributeName(){const e=this._cursor.peek();if(39===e||34===e)throw this._createError(Sa(e),this._cursor.getSpan());this._beginToken(va.ATTR_NAME);const t=this._consumePrefixAndName();this._endToken(t)}_consumeAttributeValue(){let e;if(39===this._cursor.peek()||34===this._cursor.peek()){this._beginToken(va.ATTR_QUOTE);const t=this._cursor.peek();this._cursor.advance(),this._endToken([String.fromCodePoint(t)]),this._beginToken(va.ATTR_VALUE);const n=[];for(;this._cursor.peek()!==t;)n.push(this._readChar(!0));e=n.join(""),this._endToken([this._processCarriageReturns(e)]),this._beginToken(va.ATTR_QUOTE),this._cursor.advance(),this._endToken([String.fromCodePoint(t)])}else{this._beginToken(va.ATTR_VALUE);const t=this._cursor.clone();this._requireCharCodeUntilFn(ka,1),e=this._cursor.getChars(t),this._endToken([this._processCarriageReturns(e)])}}_consumeTagOpenEndconsumeTagCloseconsumeExpansionFormStart(){this._beginToken(va.EXPANSION_FORM_START),this._requireCharCode(ci),this._endToken([]),this._expansionCaseStack.push(va.EXPANSION_FORM_START),this._beginToken(va.RAW_TEXT);const e=this._readUntil(ei),t=this._processCarriageReturns(e);if(this._i18nNormalizeLineEndingsInICUs)this._endToken([t]);else{const n=this._endToken([e]);t!==e&&this.nonNormalizedIcuExpressions.push(n)}this._requireCharCode(ei),this._attemptCharCodeUntilFn(Pa),this._beginToken(va.RAW_TEXT);const n=this._readUntil(ei);this._endToken([n]),this._requireCharCode(ei),this._attemptCharCodeUntilFn(Pa)}_consumeExpansionCaseStart(){this._beginToken(va.EXPANSION_CASE_VALUE);const e=this._readUntil(ci).trim();this._endToken([e]),this._attemptCharCodeUntilFn(Pa),this._beginToken(va.EXPANSION_CASE_EXP_START),this._requireCharCode(ci),this._endToken([]),this._attemptCharCodeUntilFn(Pa),this._expansionCaseStack.push(va.EXPANSION_CASE_EXP_START)}_consumeExpansionCaseEnd(){this._beginToken(va.EXPANSION_CASE_EXP_END),this._requireCharCode(ui),this._endToken([]),this._attemptCharCodeUntilFn(Pa),this._expansionCaseStack.pop()}_consumeExpansionFormEnd(){this._beginToken(va.EXPANSION_FORM_END),this._requireCharCode(ui),this._endToken([]),this._expansionCaseStack.pop()}_consumeText(){const e=this._cursor.clone();this._beginToken(va.TEXT,e);const t=[];do{this._interpolationConfig&&this._attemptStr(this._interpolationConfig.start)?(t.push(this._interpolationConfig.start),this._inInterpolation=!0):this._interpolationConfig&&this._inInterpolation&&this._attemptStr(this._interpolationConfig.end)?(t.push(this._interpolationConfig.end),this._inInterpolation=!1):t.push(this._readChar(!0))}while(!this._isTextEnd());this._endToken([this._processCarriageReturns(t.join(""))])}_isTextEnd(){if(this._cursor.peek()===ri||0===this._cursor.peek())return!0;if(this._tokenizeIcu&&!this._inInterpolation){if(this.isExpansionFormStart())return!0;if(this._cursor.peek()===ui&&this._isInExpansionCase())return!0}return!1}isInExpansionCase(){return this._expansionCaseStack.length>0&&this._expansionCaseStack[this._expansionCaseStack.length-1]===va.EXPANSION_CASE_EXP_START}_isInExpansionFormnction ka(e){return hi(e)||e===oi||e===ri||e===ti||39===e||34===e||e===ii}function Oa(e){return e==si||0==e||!function(e){return e>=ai&&e<=102||e>=65&&e<=70||pi(e)}(e)}function Ia(e){return e==si||0==e||!di(e)}function Na(e){return e>=ai&&e<=li?e-ai+65:e}class Ma{lone(){return new Ma(this)}peek(){return this.state.peek}vance(){this.advanceState(this.state)}rAt(e){return this.input.charCodeAt(e)}advanceState(e){if(e.offset>=this.end)throw this.state=e,new Ra('Unexpected character "EOF"',this);const t=this.charAt(e.offset);t===Xr?(e.line++,e.column=0):fi(t)||e.column++,e.offset++,this.updatePeek(e)}lass Fa extends Ma{ssEscapeSequence(){const e=if(92===e())if(this.internalState=Object.assign({},this.state),this.advanceState(this.internalState),110===e())this.state.peek=Xr;else if(114===e())this.state.peek=13;else if(118===e())this.state.peek=11;else if(116===e())this.state.peek=9;else if(98===e())this.state.peek=8;else if(102===e())this.state.peek=12;else if(117===e())if(this.advanceState(this.internalState),e()===ci){this.advanceState(this.internalState);const t=this.clone();let n=0;for(;e()!==ui;)this.advanceState(this.internalState),n++;this.state.peek=this.decodeHexDigits(t,n)}else{const e=this.clone();this.advanceState(this.internalState),this.advanceState(this.internalState),this.advanceState(this.internalState),this.state.peek=this.decodeHexDigits(e,4)}else if(120===e()){this.advanceState(this.internalState);const e=this.clone();this.advanceState(this.internalState),this.state.peek=this.decodeHexDigits(e,2)}else if(mi(e())){let t="",n=0,s=this.clone();for(;mi(e())&&n<3;)s=this.clone(),t+=String.fromCodePoint(e()),this.advanceState(this.internalState),n++;this.state.peek=parseInt(t,8),this.internalState=s.internalState}else fi(this.internalState.peek)?(this.advanceState(this.internalState),this.state=this.internalState):this.state.peek=this.internalState.peek}class Ra{constructor(e,t){this.msg=e,this.cursor=t}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */lass La{constructor(e,t){this.rootNodes=e,this.errors=t}}class Va{constructor(e){this.getTagDefinition=e}parse(e,t,n){const s=Ea(e,t,this.getTagDefinition,n),r=new $a(s.tokens,this.getTagDefinition);return r.build(),new La(r.rootNodes,s.errors.concat(r.errors))}}class $a{uild(){for(;this._peek.type!==va.EOF;)this._peek.type===va.TAG_OPEN_START||this._peek.type===va.INCOMPLETE_TAG_OPEN?this._consumeStartTag(this._advance()):this._peek.type===va.TAG_CLOSE?this._consumeEndTag(this._advance()):this._peek.type===va.CDATA_START?(this._closeVoidElement(),this._consumeCdata(this._advance())):this._peek.type===va.COMMENT_START?(this._closeVoidElement(),this._consumeComment(this._advance())):this._peek.type===va.TEXT||this._peek.type===va.RAW_TEXT||this._peek.type===va.ESCAPABLE_RAW_TEXT?(this._closeVoidElement(),this._consumeText(this._advance())):this._peek.type===va.EXPANSION_FORM_START?this._consumeExpansion(this._advance()):this._advance()}onsumeCdataconsumeCommentconsumeExpansion(e){const t=this._advance(),n=this._advance(),s=[];for(;this._peek.type===va.EXPANSION_CASE_VALUE;){const e=this._parseExpansionCase();if(!e)return;s.push(e)}if(this._peek.type!==va.EXPANSION_FORM_END)return void this.errors.push(ja.create(null,this._peek.sourceSpan,"Invalid ICU message. Missing '}'."));const r=new vi(e.sourceSpan.start,this._peek.sourceSpan.end,e.sourceSpan.fullStart);this._addToParent(new pa(t.parts[0],n.parts[0],s,r,t.sourceSpan)),this._advance()}_parseExpansionCase(){const e=this._advance();if(this._peek.type!==va.EXPANSION_CASE_EXP_START)return this.errors.push(ja.create(null,this._peek.sourceSpan,"Invalid ICU message. Missing '{'.")),null;const t=this._advance(),n=this._collectExpansionExpTokens(t);if(!n)return null;const s=this._advance();n.push(new _a(va.EOF,[],s.sourceSpan));const r=new $a(n,this.getTagDefinition);if(r.build(),r.errors.length>0)return this.errors=this.errors.concat(r.errors),null;const i=new vi(e.sourceSpan.start,s.sourceSpan.end,e.sourceSpan.fullStart),o=new vi(t.sourceSpan.start,s.sourceSpan.end,t.sourceSpan.fullStart);return new da(e.parts[0],r.rootNodes,i,e.sourceSpan,o)}_collectExpansionExpTokens(e){const t=[],n=[va.EXPANSION_CASE_EXP_START];for(;;){if(this._peek.type!==va.EXPANSION_FORM_START&&this._peek.type!==va.EXPANSION_CASE_EXP_START||n.push(this._peek.type),this._peek.type===va.EXPANSION_CASE_EXP_END){if(!Ba(n,va.EXPANSION_CASE_EXP_START))return this.errors.push(ja.create(null,e.sourceSpan,"Invalid ICU message. Missing '}'.")),null;if(n.pop(),0==n.length)return t}if(this._peek.type===va.EXPANSION_FORM_END){if(!Ba(n,va.EXPANSION_FORM_START))return this.errors.push(ja.create(null,e.sourceSpan,"Invalid ICU message. Missing '}'.")),null;n.pop()}if(this._peek.type===va.EOF)return this.errors.push(ja.create(null,e.sourceSpan,"Invalid ICU message. Missing '}'.")),null;t.push(this._advance())}}_consumeTextonsumeStartTag(e){const[t,n]=e.parts,s=[];for(;this._peek.type===va.ATTR_NAME;)s.push(this._consumeAttr(this._advance()));const r=this._getElementFullName(t,n,this._getParentElement());let i=!1;if(this._peek.type===va.TAG_OPEN_END_VOID){this._advance(),i=!0;const t=this.getTagDefinition(r);t.canSelfClose||null!==l(r)||t.isVoid||this.errors.push(ja.create(r,e.sourceSpan,`Only void and foreign elements can be self closed "${e.parts[1]}"`))}else this._peek.type===va.TAG_OPEN_END&&(this._advance(),i=!1);const o=this._peek.sourceSpan.start,a=new vi(e.sourceSpan.start,o,e.sourceSpan.fullStart),c=new vi(e.sourceSpan.start,o,e.sourceSpan.fullStart),u=new ma(r,s,[],a,c,void 0);this._pushElement(u),i?this._popElement(r,a):e.type===va.INCOMPLETE_TAG_OPEN&&(this._popElement(r,null),this.errors.push(ja.create(r,a,`Opening tag "${r}" not terminated.`)))}opElement(e,t){for(let n=this._elementStack.length-1;n>=0;n--){const s=this._elementStack[n];if(s.name==e)return s.endSourceSpan=t,s.sourceSpan.end=null!==t?t.end:s.sourceSpan.end,this._elementStack.splice(n,this._elementStack.length-n),!0;if(!this.getTagDefinition(s.name).closedByParent)return!1}return!1}_consumeAttr(e){const t=c(e.parts[0],e.parts[1]);let n,s=e.sourceSpan.end,r="";if(this._peek.type===va.ATTR_QUOTE&&this._advance(),this._peek.type===va.ATTR_VALUE){const e=this._advance();r=e.parts[0],s=e.sourceSpan.end,n=e.sourceSpan}if(this._peek.type===va.ATTR_QUOTE){s=this._advance().sourceSpan.end}return new fa(t,r,new vi(e.sourceSpan.start,s,e.sourceSpan.fullStart),n)}_getParentElement(){return this._elementStack.length>0?this._elementStack[this._elementStack.length-1]:null}getElementFullName(e,t,n){if(""===e&&""===(e=this.getTagDefinition(t).implicitNamespacePrefix||"")&&null!=n){const t=r(n.name)[1];this.getTagDefinition(t).preventNamespaceInheritance||(e=l(n.name))}return c(e,t)}}/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class Ha extends Va{constructor(){super(f)}parse(e,t,n){return super.parse(e,t,n)}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Ua="ngPreserveWhitespaces",qa=new Set(["pre","template","textarea","script","style"]),za=" \f\n\r\t\v\u1680\u180e\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff",Wa=new RegExp(`[^${za}]`),Ga=new RegExp(`[${za}]{2,}`,"g");lass Qa{visitElement(e,t){return qa.has(e.name)||e.attrs.some(e=>e.name===Ua)?new ma(e.name,ya(this,e.attrs),e.children,e.sourceSpan,e.startSourceSpan,e.endSourceSpan,e.i18n):new ma(e.name,e.attrs,/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */(this,e.children),e.sourceSpan,e.startSourceSpan,e.endSourceSpan,e.i18n)}isitText(e,t){const n=e.value.match(Wa),s=t&&(t.prev instanceof pa||t.next instanceof pa);return n||s?new ha(Ka(e.value).replace(Ga," "),e.sourceSpan,e.i18n):null}visitComment(e,t){return e}visitExpansion(e,t){return e}visitExpansionCase(e,t){return e}}onst Ja=["zero","one","two","few","many","other"];lass Ya{constructor(e,t,n){this.nodes=e,this.expanded=t,this.errors=n}}class el extends Ci{constructor(e,t){super(e,t)}}class tl{constructor(){this.isExpanded=!1,this.errors=[]}isitAttribute(e,t){return e}visitText(e,t){return e}visitComment(e,t){return e}visitExpansion(e,t){return this.isExpanded=!0,"plural"==e.type?function(e,t){const n=e.cases.map(e=>{-1!=Ja.indexOf(e.value)||e.value.match(/^=\d+$/)||t.push(new el(e.valueSourceSpan,`Plural cases should be "=<number>" or one of ${Ja.join(", ")}`));const n=Xa(e.expression);return t.push(...n.errors),new ma("ng-template",[new fa("ngPluralCase",`${e.value}`,e.valueSourceSpan)],n.nodes,e.sourceSpan,e.sourceSpan,e.sourceSpan)}),s=new fa("[ngPlural]",e.switchValue,e.switchValueSourceSpan);return new ma("ng-container",[s],n,e.sourceSpan,e.sourceSpan,e.sourceSpan)}(e,this.errors):function(e,t){const n=e.cases.map(e=>{const n=Xa(e.expression);return t.push(...n.errors),"other"===e.value?new ma("ng-template",[new fa("ngSwitchDefault","",e.valueSourceSpan)],n.nodes,e.sourceSpan,e.sourceSpan,e.sourceSpan):new ma("ng-template",[new fa("ngSwitchCase",`${e.value}`,e.valueSourceSpan)],n.nodes,e.sourceSpan,e.sourceSpan,e.sourceSpan)}),s=new fa("[ngSwitch]",e.switchValue,e.switchValueSourceSpan);return new ma("ng-container",[s],n,e.sourceSpan,e.sourceSpan,e.sourceSpan)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */(e,this.errors)}visitExpansionCase(e,t){throw new Error("Should not be reached")}}class nl{constructor(e,t,n){this.value=e,this.ngContentIndex=t,this.sourceSpan=n}visit(e,t){return e.visitText(this,t)}}class sl{constructor(e,t,n){this.value=e,this.ngContentIndex=t,this.sourceSpan=n}visit(e,t){return e.visitBoundText(this,t)}}class rl{constructor(e,t,n){this.name=e,this.value=t,this.sourceSpan=n}visit(e,t){return e.visitAttr(this,t)}}const il={4:4,1:1,2:2,0:0,3:3};ass ll{constructor(e,t,n,s){this.name=e,this.value=t,this.originalValue=n,this.sourceSpan=s}visit(e,t){return e.visitReference(this,t)}};!function(e){e[e.PublicService=0]="PublicService",e[e.PrivateService=1]="PrivateService",e[e.Component=2]="Component",e[e.Directive=3]="Directive",e[e.Builtin=4]="Builtin"}(ml||(ml={}));**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */lass _l{constructor(e,t){this.reflector=e,this.component=t,this.errors=[],this.viewQueries=function(e){let t=1;const n=new Map;e.viewQueries&&e.viewQueries.forEach(e=>xl(n,{meta:e,queryId:t++}));return n}(t),this.viewProviders=new Map,t.viewProviders.forEach(}}class bl{constructor(e,t,n,s,r,i,o,a,l){this.viewContext=e,this._parent=t,this._isViewRoot=n,this._directiveAsts=s,this._sourceSpan=l,this._transformedProviders=new Map,this._seenProviders=new Map,this._queriedTokens=new Map,this.transformedHasViewContainer=!1,this._attrs={},r.forEach(;const c=s.map(e=>e.directive);if(this._allProviders=function(e,t,n){const s=new Map;e.forEach(;return e.filter(e=>e.isComponent).concat(e.filter().forEach(,s}(c,l,e.errors),this._contentQueries=a,c),Array.from(this._allProviders.values()).forEach(,o){const e=hn(this.viewContext.reflector,cn.TemplateRef);this._addQueryReadsTo(e,e,this._queriedTokens)}i.forEach(,this._queriedTokens.get(this.viewContext.reflector.resolveExternalReference(cn.ViewContainerRef))&&(this.transformedHasViewContainer=!0),Array.from(this._allProviders.values()).forEach(}CreateLocalProvider(e,t,n){const s=this._allProviders.get(Sn(t));if(!s||(e===ml.Directive||e===ml.PublicService)&&s.providerType===ml.PrivateService||(e===ml.PrivateService||e===ml.PublicService)&&s.providerType===ml.Builtin)return null;let r=this._transformedProviders.get(Sn(t));if(r)return r;if(null!=this._seenProviders.get(Sn(t)))return this.viewContext.errors.push(new vl(`Cannot instantiate cyclic dependency! ${Cn(t)}`,this._sourceSpan)),null;this._seenProviders.set(Sn(t),!0);const i=s.providers.map(e=>{let t,r=e.useValue,i=e.useExisting;if(null!=e.useExisting){const t=this._getDependency(s.providerType,{token:e.useExisting},n);null!=t.token?i=t.token:(i=null,r=t.value)}else if(e.useFactory){t=(e.deps||e.useFactory.diDeps).map(e=>this._getDependency(s.providerType,e,n))}else if(e.useClass){t=(e.deps||e.useClass.diDeps).map(}return El(e,{useExisting:i,useValue:r,deps:t})});return r=Cl(s,{eager:n,providers:i}),this._transformedProviders.set(Sn(t),r),r}_getLocalDependency(e,t,n=!1){if(t.isAttribute){const e=this._attrs[t.token.value];return{isValue:!0,value:null==e?null:e}}if(null!=t.token){if(e===ml.Directive||e===ml.Component){if(Sn(t.token)===this.viewContext.reflector.resolveExternalReference(cn.Renderer)||Sn(t.token)===this.viewContext.reflector.resolveExternalReference(cn.ElementRef)||Sn(t.token)===this.viewContext.reflector.resolveExternalReference(cn.ChangeDetectorRef)||Sn(t.token)===this.viewContext.reflector.resolveExternalReference(cn.TemplateRef))return t;Sn(t.token)===this.viewContext.reflector.resolveExternalReference(cn.ViewContainerRef)&&(this.transformedHasViewContainer=!0)}if(Sn(t.token)===this.viewContext.reflector.resolveExternalReference(cn.Injector))return t;if(null!=this._getOrCreateLocalProvider(e,t.token,n))return t}return null}class wl{etOrCreateLocalProvider(e,t){const n=this._allProviders.get(Sn(e));if(!n)return null;let s=this._transformedProviders.get(Sn(e));if(s)return s;if(null!=this._seenProviders.get(Sn(e)))return this._errors.push(new vl(`Cannot instantiate cyclic dependency! ${Cn(e)}`,n.sourceSpan)),null;this._seenProviders.set(Sn(e),!0);const r=n.providers.map(e=>{let s,r=e.useValue,i=e.useExisting;if(null!=e.useExisting){const s=this._getDependency({token:e.useExisting},t,n.sourceSpan);null!=s.token?i=s.token:(i=null,r=s.value)}else if(e.useFactory){s=(e.deps||e.useFactory.diDeps).map(e=>this._getDependency(e,t,n.sourceSpan))}else if(e.useClass){s=(e.deps||e.useClass.diDeps).map(}return El(e,{useExisting:i,useValue:r,deps:s})});return s=Cl(n,{eager:t,providers:r}),this._transformedProviders.set(Sn(e),s),s}_getDependency(e,t=!1,n){let s=!1;return e.isSkipSelf||null==e.token||(Sn(e.token)===this.reflector.resolveExternalReference(cn.Injector)||Sn(e.token)===this.reflector.resolveExternalReference(cn.ComponentFactoryResolver)||null!=this._getOrCreateLocalProvider(e.token,t))&&(s=!0),e}}
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class Tl{constructor(e,t){this.style=e,this.styleUrls=t}}onst Dl=/@import\s+(?:url\()?\s*(?:(?:['"]([^'"]*))|([^;\)\s]*))[^;]*;?/g,Pl=/\/\*(?!#\s*(?:sourceURL|sourceMappingURL)=)[\s\S]+?\*\//g,kl=/^([^:/?#]+):/,Ol="animate-";class Il{et interpolationConfig(){return this._interpolationConfig}getUsedPipes(){return Array.from(this._usedPipes.values())}eateDirectiveHostEventAsts(e,t){if(e.hostListeners){const n=[];return Object.keys(e.hostListeners).forEach(s=>{const r=e.hostListeners[s];"string"==typeof r?this.parseEvent(s,r,t,t,[],n):this._reportError(`Value of the host listener "${s}" needs to be a string representing an expression but got "${r}" (${typeof r})`,t)}),n}return null}parseInterpolation(e,t){const n=t.start.toString();try{const s=this._exprParser.parseInterpolation(e,n,t.start.offset,this._interpolationConfig);return s&&this._reportExpressionParserErrors(s.errors,t),this._checkPipes(s,t),s}catch(s){return this._reportError(`${s}`,t),this._exprParser.wrapLiteralPrimitive("ERROR",n,t.start.offset)}}parseInterpolationExpression(e,t){const n=t.start.toString();try{const s=this._exprParser.parseInterpolationExpression(e,n,t.start.offset);return s&&this._reportExpressionParserErrors(s.errors,t),this._checkPipes(s,t),s}catch(s){return this._reportError(`${s}`,t),this._exprParser.wrapLiteralPrimitive("ERROR",n,t.start.offset)}}rseLiteralAttr(e,t,n,s,r,i,o,a){Ml(e)?(e=e.substring(1),t&&this._reportError('Assigning animation triggers via @prop="exp" attributes with an expression is invalid. Use property bindings (e.g. [@prop]="exp") or use an attribute without a value (e.g. @prop) instead.',n,_i.ERROR),this._parseAnimation(e,t,n,s,a,r,i,o)):o.push(new lo(e,this._exprParser.wrapLiteralPrimitive(t,"",s),bi.LITERAL_ATTR,n,a,r))}parsePropertyBinding(e,t,n,s,r,i,o,a,l){0===e.length&&this._reportError("Property name is missing in binding",s);let c=!1;e.startsWith(Ol)?(c=!0,e=e.substring(Ol.length)):Ml(e)&&(c=!0,e=e.substring(1)),c?this._parseAnimation(e,t,s,r,l,i,o,a):this._parsePropertyAst(e,this._parseBinding(t,n,i||s,r),s,l,i,o,a)}Event(e,t,n,s,r,i){0===e.length&&this._reportError("Event name is missing in binding",n),Ml(e)?(e=e.substr(1),this._parseAnimationEvent(e,t,n,s,i)):this._parseRegularEvent(e,t,n,s,r,i)}parseAnimationEvent(e,t,n,s,r){const i=It(e,".",[e,""]);const o=i[0],a=i[1].toLowerCase();if(a)switch(a){case"start":case"done":const e=this._parseAction(t,s);r.push(new co(o,a,1,e,n,s));break;default:this._reportError(`The provided animation output phase value "${a}" for "@${o}" is not supported (use start or done)`,n)}else this._reportError(`The animation trigger output event (@${o}) is missing its phase value name (start or done are currently supported)`,n)}_parseRegularEvent(e,t,n,s,r,i){const[o,a]=Ot(e,[null,e]),l=this._parseAction(t,s);r.push([e,l.source]),i.push(new co(a,o,0,l,n,s))}reportError(e,t,n=_i.ERROR){this.errors.push(new Ci(t,e,n))}* @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function jl(e){let t=null,n=null,s=null,r=!1,i="";e.attrs.forEach(,t=function(e){if(null===e||0===e.length)return"*";return e}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */(t);const a=e.name.toLowerCase();let l=Ll.OTHER;return o(a)?l=Ll.NG_CONTENT:"style"==a?l=Ll.STYLE:"script"==a?l=Ll.SCRIPT:"link"==a&&"stylesheet"==s&&(l=Ll.STYLESHEET),new Vl(l,t,n,r,i)}var Ll;!function(e){e[e.NG_CONTENT=0]="NG_CONTENT",e[e.STYLE=1]="STYLE",e[e.STYLESHEET=2]="STYLESHEET",e[e.SCRIPT=3]="SCRIPT",e[e.OTHER=4]="OTHER"}(Ll||(Ll={}));class Vl{constructor(e,t,n,s,r){this.type=e,this.selectAttr=t,this.hrefAttr=n,this.nonBindable=s,this.projectAs=r}}const $l=/^(?:(?:(?:(bind-)|(let-)|(ref-|#)|(on-)|(bindon-)|(@))(.*))|\[\(([^\)]+)\)\]|\[([^\]]+)\]|\(([^\)]+)\))$/;let Bl;ass ql{constructor(e,t,n){this.templateAst=e,this.usedPipes=t,this.errors=n}}class zl{constructor(e,t,n,s,r,i,o){this._config=e,this._reflector=t,this._exprParser=n,this._schemaRegistry=s,this._htmlParser=r,this._console=i,this.transforms=o}get expressionParser(){return this._exprParser}ryParse(e,t,n,s,r,i,o){let a="string"==typeof t?this._htmlParser.parse(t,i,{tokenizeExpansionForms:!0,interpolationConfig:this.getInterpolationConfig(e)}):t;return o||(a=Za(a)),this.tryParseHtml(this.expandHtml(a),e,n,s,r)}ss Wl{isitExpansion(e,t){return null}visitExpansionCase(e,t){return null}isitAttribute(e,t){return new rl(e.name,e.value,e.sourceSpan)}visitComment(e,t){return null}visitElement(e,t){const n=this.contentQueryStartId,s=e.name,r=jl(e);if(r.type===Ll.SCRIPT||r.type===Ll.STYLE)return null;if(r.type===Ll.STYLESHEET&&Al(r.hrefAttr))return null;const i=[],o=[],l=[],c=[],u=[],h=[],p=[],d=[];let f=!1;const m=[],y=a(e.name);e.attrs.forEach(e=>{const t=this._parseAttr(y,e,i,o,u,l,c);let n,s;c.push(...[].map(e=>cl.fromParsedVariable(e)));const r=this._normalizeAttributeName(e.name);r.startsWith("*")&&(n=e.value,s=r.substring("*".length));const a=null!=n;if(a){f&&this._reportError("Can't have multiple template bindings on one element. Use only one attribute prefixed with *",e.sourceSpan),f=!0;const t=[],r=(e.valueSpan||e.sourceSpan).start.offset;this._bindingParser.parseInlineTemplateBinding(s,n,e.sourceSpan,r,p,h,t,!1),d.push(...t.map(e=>cl.fromParsedVariable(e)))}t||a||(m.push(this.visitAttribute(e,null)),i.push([e.name,e.value]))});const v=Ql(s,i),{directives:_,matchElement:b}=this._parseDirectives(this.selectorMatcher,v),w=[],E=new Set,C=this._createDirectiveAsts(y,e.name,_,o,l,e.sourceSpan,w,E),S=this._createElementPropertyAsts(e.name,o,E),x=t.isTemplateElement||f,T=new bl(this.providerViewContext,t.providerContext,x,C,m,w,y,n,e.sourceSpan),A=ya(r.nonBindable?Jl:this,e.children,Kl.create(y,C,y?t.providerContext:T));T.afterElement();const D=""!=r.projectAs?g.parse(r.projectAs)[0]:v,P=t.findNgContentIndex(D);let k;if(r.type===Ll.NG_CONTENT)e.children&&!e.children.every(Xl)&&this._reportError("<ng-content> element cannot have content.",e.sourceSpan),k=new gl(this.ngContentCount++,f?null:P,e.sourceSpan);else if(y)this._assertAllEventsPublishedByDirectives(C,u),this._assertNoComponentsNorElementBindingsOnTemplate(C,S,e.sourceSpan),k=new hl(m,u,w,c,T.transformedDirectiveAsts,T.transformProviders,T.transformedHasViewContainer,T.queryMatches,A,f?null:P,e.sourceSpan);else{this._assertElementExists(b,e),this._assertOnlyOneComponent(C,e.sourceSpan);const n=f?null:t.findNgContentIndex(D);k=new ul(s,m,S,u,w,T.transformedDirectiveAsts,T.transformProviders,T.transformedHasViewContainer,T.queryMatches,A,f?null:n,e.sourceSpan,e.endSourceSpan||null)}if(f){const n=this.contentQueryStartId,r=Ql("ng-template",p),{directives:i}=this._parseDirectives(this.selectorMatcher,r),o=new Set,a=this._createDirectiveAsts(!0,s,i,h,[],e.sourceSpan,[],o),l=this._createElementPropertyAsts(s,h,o);this._assertNoComponentsNorElementBindingsOnTemplate(a,l,e.sourceSpan);const c=new bl(this.providerViewContext,t.providerContext,t.isTemplateElement,a,[],[],!0,n,e.sourceSpan);c.afterElement(),k=new hl([],[],[],d,c.transformedDirectiveAsts,c.transformProviders,c.transformedHasViewContainer,c.queryMatches,[k],P,e.sourceSpan)}return k}arseVariable(e,t,n,s){e.indexOf("-")>-1?this._reportError('"-" is not allowed in variable names',n):0===e.length&&this._reportError("Variable does not have a name",n),s.push(new cl(e,t,n))}ateDirectivePropertyAsts(e,t,n,s){if(e){const r=new Map;t.forEach(e=>{const t=r.get(e.name);t&&!t.isLiteral||r.set(e.name,e)}),Object.keys(e).forEach(}}tAllEventsPublishedByDirectives(e,t){const n=new Set;e.forEach(,t.forEach(e=>{null==e.target&&n.has(e.name)||this._reportError(`Event binding ${e.fullName} not emitted by any directive on an embedded template. Make sure that the event name is spelled correctly and all directives are listed in the "@NgModule.declarations".`,e.sourceSpan)})}lass Gl{constructor(e,t,n){this.name=e,this.value=t,this.sourceSpan=n}isReferenceToDirective(e){return-1!==(t=e.exportAs,t?t.split(",").map(e=>e.trim()):[]).indexOf(this.value);var t}}class Kl{tatic create(e,t,n){const s=new y;let r=null;const i=t.find(;if(i){const e=i.directive.template.ngContentSelectors;for(let t=0;t<e.length;t++){"*"===e[t]?r=t:s.addSelectables(g.parse(e[t]),t)}}return new Kl(e,s,r,n)}function Ql(e,t){const n=new g,s=r(e)[1];n.setElement(s);for(let i=0;i<t.length;i++){const e=t[i][0],s=r(e)[1],o=t[i][1];if(n.addAttribute(s,o),"class"==e.toLowerCase()){o.trim().split(/\s+/g).forEach(e=>n.addClassName(e))}}return n}const Zl=new Kl(!0,new y,null,null),Jl=new *
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */ass sc{isterStyleInput(e,t,n,s,r){if(ec(n))return null;e=nc(e);const{property:i,hasOverrideFlag:o,suffix:a}=ic(e),l={name:i,suffix:r="string"==typeof r&&0!==r.length?r:a,value:n,sourceSpan:s,hasOverrideFlag:o};return t?this._styleMapInput=l:((this._singleStyleInputs=this._singleStyleInputs||[]).push(l),rc(this._stylesIndex,i)),this._lastStylingInput=l,this._firstStylingInput=this._firstStylingInput||l,this._checkForPipes(n),this.hasBindings=!0,l}registerClassInput(e,t,n,s){if(ec(n))return null;const{property:r,hasOverrideFlag:i}=ic(e),o={name:r,value:n,sourceSpan:s,hasOverrideFlag:i,suffix:null};if(t){if(this._classMapInput)throw new Error("[class] and [className] bindings cannot be used on the same element simultaneously");this._classMapInput=o}else(this._singleClassInputs=this._singleClassInputs||[]).push(o),rc(this._classesIndex,r);return this._lastStylingInput=o,this._firstStylingInput=this._firstStylingInput||o,this._checkForPipes(n),this.hasBindings=!0,o}egisterStyleAttr(e){this._initialStyleValues=function(e){const t=[];let n=0,s=0,r=0,i=0,o=0,a=null,l=!1;for(;n<e.length;)switch(e.charCodeAt(n++)){case 40:s++;break;case 41:s--;break;case 39:l=l||i>0,0===r?r=39:39===r&&92!==e.charCodeAt(n-1)&&(r=0);break;case 34:l=l||i>0,0===r?r=34:34===r&&92!==e.charCodeAt(n-1)&&(r=0);break;case 58:a||0!==s||0!==r||(a=nc(e.substring(o,n-1).trim()),i=n);break;case 59:if(a&&i>0&&0===s&&0===r){const s=e.substring(i,n-1).trim();t.push(a,l?tc(s):s),o=n,i=0,a=null,l=!1}}if(a&&i){const n=e.substr(i).trim();t.push(a,l?tc(n):n)}return t}(e),this._hasInitialValues=!0}ldClassMapInstruction(e){return this._classMapInput?this._buildMapBasedInstruction(e,!0,this._classMapInput):null}uildSingleInputs(e,t,n,s,r){const i=[];return t.forEach(t=>{const o=i[i.length-1],a=t.value.visit(n);let l=e,c=2;a instanceof Qi&&(c+=a.expressions.length,s&&(l=s(a)));const u={sourceSpan:t.sourceSpan,allocateBindingSlots:c,supportsInterpolation:!!s,params:e=>{const n=[];n.push(At(t.name));const s=e(a);return Array.isArray(s)?n.push(...s):n.push(s),r||null===t.suffix||n.push(At(t.suffix)),n}};o&&o.reference===l?o.calls.push(u):i.push({reference:l,calls:[u]})}),i} * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var ac;!function(e){e[e.Character=0]="Character",e[e.Identifier=1]="Identifier",e[e.Keyword=2]="Keyword",e[e.String=3]="String",e[e.Operator=4]="Operator",e[e.Number=5]="Number",e[e.Error=6]="Error"}(ac||(ac={}));const lc=["var","let","as","null","undefined","true","false","if","else","this"];lass uc{constructor(e,t,n,s,r){this.index=e,this.end=t,this.type=n,this.numValue=s,this.strValue=r}isCharacter(e){return this.type==ac.Character&&this.numValue==e}isNumber(){return this.type==ac.Number}isString(){return this.type==ac.String}sIdentifier(){return this.type==ac.Identifier}isKeyword(){return this.type==ac.Keyword}isKeywordLet(){return this.type==ac.Keyword&&"let"==this.strValue}isKeywordAs(){return this.type==ac.Keyword&&"as"==this.strValue}isKeywordNull(){return this.type==ac.Keyword&&"null"==this.strValue}isKeywordUndefined(){return this.type==ac.Keyword&&"undefined"==this.strValue}isKeywordTrue(){return this.type==ac.Keyword&&"true"==this.strValue}isKeywordFalse(){return this.type==ac.Keyword&&"false"==this.strValue}tringnst dc=new uc(-1,-1,ac.Character,0,"");class fc{anToken(){const e=this.input,t=this.length;let n=this.peek,s=this.index;for(;n<=32;){if(++s>=t){n=0;break}n=e.charCodeAt(s)}if(this.peek=n,this.index=s,s>=t)return null;if(mc(n))return this.scanIdentifier();if(pi(n))return this.scanNumber(s);const r=s;switch(n){case 46:return this.advance(),pi(this.peek)?this.scanNumber(r):hc(r,this.index,46);case 40:case Yr:case ci:case ui:case 91:case 93:case ei:case ni:case si:return this.scanCharacter(r,n);case 39:case 34:return this.scanString();case 35:case 43:case 45:case 42:case ti:case 37:case 94:return this.scanOperator(r,String.fromCharCode(n));case 63:return this.scanComplexOperator(r,"?",46,".");case ri:case oi:return this.scanComplexOperator(r,String.fromCharCode(n),ii,"=");case 33:case ii:return this.scanComplexOperator(r,String.fromCharCode(n),ii,"=",ii,"=");case 38:return this.scanComplexOperator(r,"&",38,"&");case 124:return this.scanComplexOperator(r,"|",124,"|");case 160:for(;hi(this.peek);)this.advance();return this.scanToken()}return this.advance(),this.error(`Unexpected character [${String.fromCharCode(n)}]`,0)}scanCharacter(e,t){return this.advance(),hc(e,this.index,t)}anIdentifier(){const e=this.index;for(this.advance();gc(this.peek);)this.advance();const t=this.input.substring(e,this.index);return lc.indexOf(t)>-1?(n=e,s=this.index,r=t,new uc(n,s,ac.Keyword,0,r)):function(e,t,n){return new uc(e,t,ac.Identifier,0,n)}(e,this.index,t);var n,s,r}scanNumber(e){let t=this.index===e;for(this.advance();;){if(pi(this.peek));else if(46==this.peek)t=!1;else{if(101!=(n=this.peek)&&69!=n)break;if(this.advance(),yc(this.peek)&&this.advance(),!pi(this.peek))return this.error("Invalid exponent",-1);t=!1}this.advance()}var n;const s=this.input.substring(e,this.index),r=t?/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */(s):parseFloat(s);return i=e,o=this.index,a=r,new uc(i,o,ac.Number,a,"");var i,o,a}scanString(){const e=this.index,t=this.peek;this.advance();let n="",s=this.index;const r=this.input;for(;this.peek!=t;)if(92==this.peek){let e;if(n+=r.substring(s,this.index),this.advance(),this.peek=this.peek,117==this.peek){const t=r.substring(this.index+1,this.index+5);if(!/^[0-9a-f]+$/i.test(t))return this.error(`Invalid unicode escape [\\u${t}]`,0);e=parseInt(t,16);for(let e=0;e<5;e++)this.advance()}else e=_c(this.peek),this.advance();n+=String.fromCharCode(e),s=this.index}else{if(0==this.peek)return this.error("Unterminated quote",0);this.advance()}const i=r.substring(s,this.index);return this.advance(),o=e,a=this.index,l=n+i,new uc(o,a,ac.String,0,l);var o,a,l}function mc(e){return ai<=e&&e<=li||65<=e&&e<=90||95==e||36==e}ction _c(e){switch(e){case 110:return Xr;case 102:return 12;case 114:return 13;case 116:return 9;case 118:return 11;default:return e}}class bc{constructor(e,t,n){this.strings=e,this.expressions=t,this.offsets=n}}lass Ec{lation(e,t,n=Fr){const s=[],r=[],i=[];let o=0,a=!1,l=!1,{start:c,end:u}=n;for(;o<e.length;)if(a){const n=o,s=n+c.length,h=this._getInterpolationEndIndex(e,u,s);if(-1===h){a=!1,l=!0;break}const p=h+u.length,d=e.substring(s,h);d.trim().length>0?r.push({text:d,start:n,end:p}):(this._reportError("Blank expressions are not allowed in interpolated strings",e,`at column ${o} in`,t),r.push({text:"$implicit",start:n,end:p})),i.push(s),o=p,a=!1}else{const t=o;o=e.indexOf(c,o),-1===o&&(o=e.length);const n=e.substring(t,o);s.push({text:n,start:t,end:o}),a=!0}if(!a)if(l){const t=s[s.length-1];t.text+=e.substring(o),t.end=e.length}else s.push({text:e.substring(o),start:o,end:e.length});return new bc(s,r,i)}ommentStart(e){let t=null;for(let n=0;n<e.length-1;n++){const s=e.charCodeAt(n),r=e.charCodeAt(n+1);if(s===ti&&r==ti&&null==t)return n;t===s?t=null:null==t&&vc(s)&&(t=s)}return null} Sc;!function(e){e[e.None=0]="None",e[e.Writable=1]="Writable"}(Sc||(Sc={}));class xc{urrentEndIndex(){if(this.index>0){return this.peek(-1).end+this.offset}return 0===this.tokens.length?this.inputLength+this.offset:this.next.index+this.offset}get currentAbsoluteOffset(){return this.absoluteOffset+this.inputIndex}ourceSpan(e){const t=`${e}@${this.inputIndex}`;return this.sourceSpanCache.has(t)||this.sourceSpanCache.set(t,this.span(e).toAbsolute(this.absoluteOffset)),this.sourceSpanCache.get(t)}nsumeOptionalCharacter(e){return!!this.next.isCharacter(e)&&(this.advance(),!0)}peekKeywordLet(){return this.next.isKeywordLet()}tIdentifierOrKeyword(){const e=this.next;return e.isIdentifier()||e.isKeyword()?(this.advance(),e.toString()):(this.error(`Unexpected ${this.prettyPrintToken(e)}, expected identifier or keyword`),"")}expectIdentifierOrKeywordOrString(){const e=this.next;return e.isIdentifier()||e.isKeyword()||e.isString()?(this.advance(),e.toString()):(this.error(`Unexpected ${this.prettyPrintToken(e)}, expected identifier, keyword, or string`),"")}parseChain(){const e=[],t=this.inputIndex;for(;this.index<this.tokens.length;){const t=this.parsePipe();if(e.push(t),this.consumeOptionalCharacter(si))for(this.parseAction||this.error("Binding expression cannot contain chained expression");this.consumeOptionalCharacter(si););else this.index<this.tokens.length&&this.error(`Unexpected token '${this.next}'`)}return 0==e.length?new Fi(this.span(t),this.sourceSpan(t)):1==e.length?e[0]:new Li(this.span(t),this.sourceSpan(t),e)}parsePipe(){let e=this.parseExpression();if(this.consumeOptionalOperator("|")){this.parseAction&&this.error("Cannot have a pipe in an action expression");do{const t=this.inputIndex,n=this.expectIdentifierOrKeyword(),s=this.sourceSpan(t),r=[];for(;this.consumeOptionalCharacter(ni);)r.push(this.parseExpression());const{start:i}=e.span;e=new zi(this.span(i),this.sourceSpan(i),e,n,r,s)}while(this.consumeOptionalOperator("|"))}return e}arseConditional(){const e=this.inputIndex,t=this.parseLogicalOr();if(this.consumeOptionalOperator("?")){const n=this.parsePipe();let s;if(this.consumeOptionalCharacter(ni))s=this.parsePipe();else{const t=this.inputIndex,n=this.input.substring(e,t);this.error(`Conditional expression ${n} requires all 3 expressions`),s=new Fi(this.span(e),this.sourceSpan(e))}return new Vi(this.span(e),this.sourceSpan(e),t,n,s)}return t}parseLogicalOr(){let e=this.parseLogicalAnd();for(;this.consumeOptionalOperator("||");){const t=this.parseLogicalAnd(),{start:n}=e.span;e=new Zi(this.span(n),this.sourceSpan(n),"||",e,t)}return e}parseLogicalAnd(){let e=this.parseEquality();for(;this.consumeOptionalOperator("&&");){const t=this.parseEquality(),{start:n}=e.span;e=new Zi(this.span(n),this.sourceSpan(n),"&&",e,t)}return e}parseEquality(){let e=this.parseRelational();for(;this.next.type==ac.Operator;){const t=this.next.strValue;switch(t){case"==":case"===":case"!=":case"!==":this.advance();const n=this.parseRelational(),{start:s}=e.span;e=new Zi(this.span(s),this.sourceSpan(s),t,e,n);continue}break}return e}parseRelational(){let e=this.parseAdditive();for(;this.next.type==ac.Operator;){const t=this.next.strValue;switch(t){case"<":case">":case"<=":case">=":this.advance();const n=this.parseAdditive(),{start:s}=e.span;e=new Zi(this.span(s),this.sourceSpan(s),t,e,n);continue}break}return e}parseAdditive(){let e=this.parseMultiplicative();for(;this.next.type==ac.Operator;){const t=this.next.strValue;switch(t){case"+":case"-":this.advance();let n=this.parseMultiplicative();const{start:s}=e.span;e=new Zi(this.span(s),this.sourceSpan(s),t,e,n);continue}break}return e}parseMultiplicative(){let e=this.parsePrefix();for(;this.next.type==ac.Operator;){const t=this.next.strValue;switch(t){case"*":case"%":case"/":this.advance();let n=this.parsePrefix();const{start:s}=e.span;e=new Zi(this.span(s),this.sourceSpan(s),t,e,n);continue}break}return e}arseCallChain(){let e=this.parsePrimary();const t=e.span.start;for(;;)if(this.consumeOptionalCharacter(46))e=this.parseAccessMemberOrMethodCall(e,!1);else if(this.consumeOptionalOperator("?."))e=this.parseAccessMemberOrMethodCall(e,!0);else if(this.consumeOptionalCharacter(91))this.withContext(Sc.Writable,()=>{this.rbracketsExpected++;const n=this.parsePipe();if(n instanceof Fi&&this.error("Key access cannot be empty"),this.rbracketsExpected--,this.expectCharacter(93),this.consumeOptionalOperator("=")){const s=this.parseConditional();e=new qi(this.span(t),this.sourceSpan(t),e,n,s)}else e=new Ui(this.span(t),this.sourceSpan(t),e,n)});else if(this.consumeOptionalCharacter(40)){this.rparensExpected++;const n=this.parseCallArguments();this.rparensExpected--,this.expectCharacter(Yr),e=new no(this.span(t),this.sourceSpan(t),e,n)}else{if(!this.consumeOptionalOperator("!"))return e;e=new Yi(this.span(t),this.sourceSpan(t),e)}}parsePrimary(){const e=this.inputIndex;if(this.consumeOptionalCharacter(40)){this.rparensExpected++;const e=this.parsePipe();return this.rparensExpected--,this.expectCharacter(Yr),e}if(this.next.isKeywordNull())return this.advance(),new Wi(this.span(e),this.sourceSpan(e),null);if(this.next.isKeywordUndefined())return this.advance(),new Wi(this.span(e),this.sourceSpan(e),void 0);if(this.next.isKeywordTrue())return this.advance(),new Wi(this.span(e),this.sourceSpan(e),!0);if(this.next.isKeywordFalse())return this.advance(),new Wi(this.span(e),this.sourceSpan(e),!1);if(this.next.isKeywordThis())return this.advance(),new ji(this.span(e),this.sourceSpan(e));if(this.consumeOptionalCharacter(91)){this.rbracketsExpected++;const t=this.parseExpressionList(93);return this.rbracketsExpected--,this.expectCharacter(93),new Gi(this.span(e),this.sourceSpan(e),t)}if(this.next.isCharacter(ci))return this.parseLiteralMap();if(this.next.isIdentifier())return this.parseAccessMemberOrMethodCall(new Ri(this.span(e),this.sourceSpan(e)),!1);if(this.next.isNumber()){const t=this.next.toNumber();return this.advance(),new Wi(this.span(e),this.sourceSpan(e),t)}if(this.next.isString()){const t=this.next.toString();return this.advance(),new Wi(this.span(e),this.sourceSpan(e),t)}return this.index>=this.tokens.length?(this.error(`Unexpected end of expression: ${this.input}`),new Fi(this.span(e),this.sourceSpan(e))):(this.error(`Unexpected token ${this.next}`),new Fi(this.span(e),this.sourceSpan(e)))}parseExpressionList(e){const t=[];if(!this.next.isCharacter(e))do{t.push(this.parsePipe())}while(this.consumeOptionalCharacter(ei));return t}parseLiteralMap(){const e=[],t=[],n=this.inputIndex;if(this.expectCharacter(ci),!this.consumeOptionalCharacter(ui)){this.rbracesExpected++;do{const n=this.next.isString(),s=this.expectIdentifierOrKeywordOrString();e.push({key:s,quoted:n}),this.expectCharacter(ni),t.push(this.parsePipe())}while(this.consumeOptionalCharacter(ei));this.rbracesExpected--,this.expectCharacter(ui)}return new Ki(this.span(n),this.sourceSpan(n),e,t)}parseAccessMemberOrMethodCall(e,t=!1){const n=e.span.start,s=this.inputIndex,r=this.expectIdentifierOrKeyword(),i=this.sourceSpan(s);if(this.consumeOptionalCharacter(40)){this.rparensExpected++;const s=this.parseCallArguments();this.expectCharacter(Yr),this.rparensExpected--;const o=this.span(n),a=this.sourceSpan(n);return t?new to(o,a,i,e,r,s):new eo(o,a,i,e,r,s)}if(t)return this.consumeOptionalOperator("=")?(this.error("The '?.' operator cannot be used in the assignment"),new Fi(this.span(n),this.sourceSpan(n))):new Hi(this.span(n),this.sourceSpan(n),i,e,r);if(this.consumeOptionalOperator("=")){if(!this.parseAction)return this.error("Bindings cannot contain assignments"),new Fi(this.span(n),this.sourceSpan(n));const t=this.parseConditional();return new Bi(this.span(n),this.sourceSpan(n),i,e,r,t)}return new $i(this.span(n),this.sourceSpan(n),i,e,r)}parseCallArgumentsseDirectiveKeywordBindings(e){const t=[];this.consumeOptionalCharacter(ni);const n=this.getDirectiveBoundTarget();let s=this.currentAbsoluteOffset;const r=this.parseAsBinding(e);r||(this.consumeStatementTerminator(),s=this.currentAbsoluteOffset);const i=new so(e.span.start,s);return t.push(new oo(i,e,n)),r&&t.push(r),t}sumeStatementTerminator(){this.consumeOptionalCharacter(si)||this.consumeOptionalCharacter(ei)}ip(){let e=this.next;for(;!(!(this.index<this.tokens.length)||e.isCharacter(si)||!(this.rparensExpected<=0)&&e.isCharacter(Yr)||!(this.rbracesExpected<=0)&&e.isCharacter(ui)||!(this.rbracketsExpected<=0)&&e.isCharacter(93)||this.context&Sc.Writable&&e.isOperator("="));)this.next.isError()&&this.errors.push(new ki(this.next.toString(),this.input,this.locationText(),this.location)),this.advance(),e=this.next}}class Tc{constructor(){this.errors=[]}visitImplicitReceiver(e,t){}visitThisReceiver(e,t){}visitInterpolation(e,t){}visitLiteralPrimitive(e,t){}visitPropertyRead(e,t){}visitPropertyWrite(e,t){}visitSafePropertyRead(e,t){}visitMethodCall(e,t){}visitSafeMethodCall(e,t){}visitFunctionCall(e,t){}visitLiteralArray(e,t){this.visitAll(e.expressions,t)}visitLiteralMap(e,t){this.visitAll(e.values,t)}visitUnary(e,t){}visitBinary(e,t){}visitPrefixNot(e,t){}visitNonNullAssert(e,t){}visitConditional(e,t){}isitKeyedRead(e,t){}visitKeyedWrite(e,t){}visitAll(e,t){return e.map(e=>e.visit(this,t))}visitChain(e,t){}visitQuote(e,t){}}/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */let Dc;**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class Oc{}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Ic=["[Element]|textContent,%classList,className,id,innerHTML,*beforecopy,*beforecut,*beforepaste,*copy,*cut,*paste,*search,*selectstart,*webkitfullscreenchange,*webkitfullscreenerror,*wheel,outerHTML,#scrollLeft,#scrollTop,slot,*message,*mozfullscreenchange,*mozfullscreenerror,*mozpointerlockchange,*mozpointerlockerror,*webglcontextcreationerror,*webglcontextlost,*webglcontextrestored","[HTMLElement]^[Element]|accessKey,contentEditable,dir,!draggable,!hidden,innerText,lang,*abort,*auxclick,*blur,*cancel,*canplay,*canplaythrough,*change,*click,*close,*contextmenu,*cuechange,*dblclick,*drag,*dragend,*dragenter,*dragleave,*dragover,*dragstart,*drop,*durationchange,*emptied,*ended,*error,*focus,*gotpointercapture,*input,*invalid,*keydown,*keypress,*keyup,*load,*loadeddata,*loadedmetadata,*loadstart,*lostpointercapture,*mousedown,*mouseenter,*mouseleave,*mousemove,*mouseout,*mouseover,*mouseup,*mousewheel,*pause,*play,*playing,*pointercancel,*pointerdown,*pointerenter,*pointerleave,*pointermove,*pointerout,*pointerover,*pointerup,*progress,*ratechange,*reset,*resize,*scroll,*seeked,*seeking,*select,*show,*stalled,*submit,*suspend,*timeupdate,*toggle,*volumechange,*waiting,outerText,!spellcheck,%style,#tabIndex,title,!translate","abbr,address,article,aside,b,bdi,bdo,cite,code,dd,dfn,dt,em,figcaption,figure,footer,header,i,kbd,main,mark,nav,noscript,rb,rp,rt,rtc,ruby,s,samp,section,small,strong,sub,sup,u,var,wbr^[HTMLElement]|accessKey,contentEditable,dir,!draggable,!hidden,innerText,lang,*abort,*auxclick,*blur,*cancel,*canplay,*canplaythrough,*change,*click,*close,*contextmenu,*cuechange,*dblclick,*drag,*dragend,*dragenter,*dragleave,*dragover,*dragstart,*drop,*durationchange,*emptied,*ended,*error,*focus,*gotpointercapture,*input,*invalid,*keydown,*keypress,*keyup,*load,*loadeddata,*loadedmetadata,*loadstart,*lostpointercapture,*mousedown,*mouseenter,*mouseleave,*mousemove,*mouseout,*mouseover,*mouseup,*mousewheel,*pause,*play,*playing,*pointercancel,*pointerdown,*pointerenter,*pointerleave,*pointermove,*pointerout,*pointerover,*pointerup,*progress,*ratechange,*reset,*resize,*scroll,*seeked,*seeking,*select,*show,*stalled,*submit,*suspend,*timeupdate,*toggle,*volumechange,*waiting,outerText,!spellcheck,%style,#tabIndex,title,!translate","media^[HTMLElement]|!autoplay,!controls,%controlsList,%crossOrigin,#currentTime,!defaultMuted,#defaultPlaybackRate,!disableRemotePlayback,!loop,!muted,*encrypted,*waitingforkey,#playbackRate,preload,src,%srcObject,#volume",":svg:^[HTMLElement]|*abort,*auxclick,*blur,*cancel,*canplay,*canplaythrough,*change,*click,*close,*contextmenu,*cuechange,*dblclick,*drag,*dragend,*dragenter,*dragleave,*dragover,*dragstart,*drop,*durationchange,*emptied,*ended,*error,*focus,*gotpointercapture,*input,*invalid,*keydown,*keypress,*keyup,*load,*loadeddata,*loadedmetadata,*loadstart,*lostpointercapture,*mousedown,*mouseenter,*mouseleave,*mousemove,*mouseout,*mouseover,*mouseup,*mousewheel,*pause,*play,*playing,*pointercancel,*pointerdown,*pointerenter,*pointerleave,*pointermove,*pointerout,*pointerover,*pointerup,*progress,*ratechange,*reset,*resize,*scroll,*seeked,*seeking,*select,*show,*stalled,*submit,*suspend,*timeupdate,*toggle,*volumechange,*waiting,%style,#tabIndex",":svg:graphics^:svg:|",":svg:animation^:svg:|*begin,*end,*repeat",":svg:geometry^:svg:|",":svg:componentTransferFunction^:svg:|",":svg:gradient^:svg:|",":svg:textContent^:svg:graphics|",":svg:textPositioning^:svg:textContent|","a^[HTMLElement]|charset,coords,download,hash,host,hostname,href,hreflang,name,password,pathname,ping,port,protocol,referrerPolicy,rel,rev,search,shape,target,text,type,username","area^[HTMLElement]|alt,coords,download,hash,host,hostname,href,!noHref,password,pathname,ping,port,protocol,referrerPolicy,rel,search,shape,target,username","audio^media|","br^[HTMLElement]|clear","base^[HTMLElement]|href,target","body^[HTMLElement]|aLink,background,bgColor,link,*beforeunload,*blur,*error,*focus,*hashchange,*languagechange,*load,*message,*offline,*online,*pagehide,*pageshow,*popstate,*rejectionhandled,*resize,*scroll,*storage,*unhandledrejection,*unload,text,vLink","button^[HTMLElement]|!autofocus,!disabled,formAction,formEnctype,formMethod,!formNoValidate,formTarget,name,type,value","canvas^[HTMLElement]|#height,#width","content^[HTMLElement]|select","dl^[HTMLElement]|!compact","datalist^[HTMLElement]|","details^[HTMLElement]|!open","dialog^[HTMLElement]|!open,returnValue","dir^[HTMLElement]|!compact","div^[HTMLElement]|align","embed^[HTMLElement]|align,height,name,src,type,width","fieldset^[HTMLElement]|!disabled,name","font^[HTMLElement]|color,face,size","form^[HTMLElement]|acceptCharset,action,autocomplete,encoding,enctype,method,name,!noValidate,target","frame^[HTMLElement]|frameBorder,longDesc,marginHeight,marginWidth,name,!noResize,scrolling,src","frameset^[HTMLElement]|cols,*beforeunload,*blur,*error,*focus,*hashchange,*languagechange,*load,*message,*offline,*online,*pagehide,*pageshow,*popstate,*rejectionhandled,*resize,*scroll,*storage,*unhandledrejection,*unload,rows","hr^[HTMLElement]|align,color,!noShade,size,width","head^[HTMLElement]|","h1,h2,h3,h4,h5,h6^[HTMLElement]|align","html^[HTMLElement]|version","iframe^[HTMLElement]|align,!allowFullscreen,frameBorder,height,longDesc,marginHeight,marginWidth,name,referrerPolicy,%sandbox,scrolling,src,srcdoc,width","img^[HTMLElement]|align,alt,border,%crossOrigin,#height,#hspace,!isMap,longDesc,lowsrc,name,referrerPolicy,sizes,src,srcset,useMap,#vspace,#width","input^[HTMLElement]|accept,align,alt,autocapitalize,autocomplete,!autofocus,!checked,!defaultChecked,defaultValue,dirName,!disabled,%files,formAction,formEnctype,formMethod,!formNoValidate,formTarget,#height,!incremental,!indeterminate,max,#maxLength,min,#minLength,!multiple,name,pattern,placeholder,!readOnly,!required,selectionDirection,#selectionEnd,#selectionStart,#size,src,step,type,useMap,value,%valueAsDate,#valueAsNumber,#width","li^[HTMLElement]|type,#value","label^[HTMLElement]|htmlFor","legend^[HTMLElement]|align","link^[HTMLElement]|as,charset,%crossOrigin,!disabled,href,hreflang,integrity,media,referrerPolicy,rel,%relList,rev,%sizes,target,type","map^[HTMLElement]|name","marquee^[HTMLElement]|behavior,bgColor,direction,height,#hspace,#loop,#scrollAmount,#scrollDelay,!trueSpeed,#vspace,width","menu^[HTMLElement]|!compact","meta^[HTMLElement]|content,httpEquiv,name,scheme","meter^[HTMLElement]|#high,#low,#max,#min,#optimum,#value","ins,del^[HTMLElement]|cite,dateTime","ol^[HTMLElement]|!compact,!reversed,#start,type","object^[HTMLElement]|align,archive,border,code,codeBase,codeType,data,!declare,height,#hspace,name,standby,type,useMap,#vspace,width","optgroup^[HTMLElement]|!disabled,label","option^[HTMLElement]|!defaultSelected,!disabled,label,!selected,text,value","output^[HTMLElement]|defaultValue,%htmlFor,name,value","p^[HTMLElement]|align","param^[HTMLElement]|name,type,value,valueType","picture^[HTMLElement]|","pre^[HTMLElement]|#width","progress^[HTMLElement]|#max,#value","q,blockquote,cite^[HTMLElement]|","script^[HTMLElement]|!async,charset,%crossOrigin,!defer,event,htmlFor,integrity,src,text,type","select^[HTMLElement]|!autofocus,!disabled,#length,!multiple,name,!required,#selectedIndex,#size,value","shadow^[HTMLElement]|","slot^[HTMLElement]|name","source^[HTMLElement]|media,sizes,src,srcset,type","span^[HTMLElement]|","style^[HTMLElement]|!disabled,media,type","caption^[HTMLElement]|align","th,td^[HTMLElement]|abbr,align,axis,bgColor,ch,chOff,#colSpan,headers,height,!noWrap,#rowSpan,scope,vAlign,width","col,colgroup^[HTMLElement]|align,ch,chOff,#span,vAlign,width","table^[HTMLElement]|align,bgColor,border,%caption,cellPadding,cellSpacing,frame,rules,summary,%tFoot,%tHead,width","tr^[HTMLElement]|align,bgColor,ch,chOff,vAlign","tfoot,thead,tbody^[HTMLElement]|align,ch,chOff,vAlign","template^[HTMLElement]|","textarea^[HTMLElement]|autocapitalize,!autofocus,#cols,defaultValue,dirName,!disabled,#maxLength,#minLength,name,placeholder,!readOnly,!required,#rows,selectionDirection,#selectionEnd,#selectionStart,value,wrap","title^[HTMLElement]|text","track^[HTMLElement]|!default,kind,label,src,srclang","ul^[HTMLElement]|!compact,type","unknown^[HTMLElement]|","video^media|#height,poster,#width",":svg:a^:svg:graphics|",":svg:animate^:svg:animation|",":svg:animateMotion^:svg:animation|",":svg:animateTransform^:svg:animation|",":svg:circle^:svg:geometry|",":svg:clipPath^:svg:graphics|",":svg:defs^:svg:graphics|",":svg:desc^:svg:|",":svg:discard^:svg:|",":svg:ellipse^:svg:geometry|",":svg:feBlend^:svg:|",":svg:feColorMatrix^:svg:|",":svg:feComponentTransfer^:svg:|",":svg:feComposite^:svg:|",":svg:feConvolveMatrix^:svg:|",":svg:feDiffuseLighting^:svg:|",":svg:feDisplacementMap^:svg:|",":svg:feDistantLight^:svg:|",":svg:feDropShadow^:svg:|",":svg:feFlood^:svg:|",":svg:feFuncA^:svg:componentTransferFunction|",":svg:feFuncB^:svg:componentTransferFunction|",":svg:feFuncG^:svg:componentTransferFunction|",":svg:feFuncR^:svg:componentTransferFunction|",":svg:feGaussianBlur^:svg:|",":svg:feImage^:svg:|",":svg:feMerge^:svg:|",":svg:feMergeNode^:svg:|",":svg:feMorphology^:svg:|",":svg:feOffset^:svg:|",":svg:fePointLight^:svg:|",":svg:feSpecularLighting^:svg:|",":svg:feSpotLight^:svg:|",":svg:feTile^:svg:|",":svg:feTurbulence^:svg:|",":svg:filter^:svg:|",":svg:foreignObject^:svg:graphics|",":svg:g^:svg:graphics|",":svg:image^:svg:graphics|",":svg:line^:svg:geometry|",":svg:linearGradient^:svg:gradient|",":svg:mpath^:svg:|",":svg:marker^:svg:|",":svg:mask^:svg:|",":svg:metadata^:svg:|",":svg:path^:svg:geometry|",":svg:pattern^:svg:|",":svg:polygon^:svg:geometry|",":svg:polyline^:svg:geometry|",":svg:radialGradient^:svg:gradient|",":svg:rect^:svg:geometry|",":svg:svg^:svg:graphics|#currentScale,#zoomAndPan",":svg:script^:svg:|type",":svg:set^:svg:animation|",":svg:stop^:svg:|",":svg:style^:svg:|!disabled,media,title,type",":svg:switch^:svg:graphics|",":svg:symbol^:svg:|",":svg:tspan^:svg:textPositioning|",":svg:text^:svg:textPositioning|",":svg:textPath^:svg:textContent|",":svg:title^:svg:|",":svg:use^:svg:graphics|",":svg:view^:svg:|#zoomAndPan","data^[HTMLElement]|value","keygen^[HTMLElement]|!autofocus,challenge,!disabled,form,keytype,name","menuitem^[HTMLElement]|type,label,icon,!disabled,!checked,radiogroup,!default","summary^[HTMLElement]|","time^[HTMLElement]|dateTime",":svg:cursor^:svg:|"],Nc={class:"className",for:"htmlFor",formaction:"formAction",innerHtml:"innerHTML",readonly:"readOnly",tabindex:"tabIndex"};class Mc extends Oc{sElement(e,t){if(t.some(e=>e.name===V.name))return!0;if(e.indexOf("-")>-1){if(i(e)||o(e))return!0;if(t.some(e=>e.name===L.name))return!0}return!!this._schema[e.toLowerCase()]}etMappedPropName(e){return Nc[e]||e}getDefaultComponentElementName(){return"ng-component"}lKnownElementNames(){return Object.keys(this._schema)}normalizeAnimationStylePropertyonst Fc=/^(?:(?:(?:(bind-)|(let-)|(ref-|#)|(on-)|(bindon-)|(@))(.*))|\[\(([^\)]+)\)\]|\[([^\]]+)\]|\(([^\)]+)\))$/;function Rc(e,t){const n=new jc(t);return{nodes:ya(n,e),errors:t.errors.concat(n.errors),styleUrls:n.styleUrls,styles:n.styles,ngContentSelectors:n.ngContentSelectors}}class jc{constructor(e){this.bindingParser=e,this.errors=[],this.styles=[],this.styleUrls=[],this.ngContentSelectors=[],this.inI18nBlock=!1}visitElement(e){const t=Zs(e.i18n);t&&(this.inI18nBlock&&this.reportError("Cannot mark an element as translatable inside of a translatable section. Please remove the nested i18n marker.",e.sourceSpan),this.inI18nBlock=!0);const n=jl(e);if(n.type===Ll.SCRIPT)return null;if(n.type===Ll.STYLE){const t=1===(s=e).children.length&&s.children[0]instanceof ha?s.children[0].value:null;return null!==t&&this.styles.push(t),null}if(n.type===Ll.STYLESHEET&&Al(n.hrefAttr))return this.styleUrls.push(n.hrefAttr),null;var s;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const r=a(e.name),i=[],o=[],l=[],c=[],u=[],h={},p=[],d=[];let f=!1;for(const a of e.attrs){let e=!1;const t=Vc(a.name);let n=!1;if(a.i18n&&(h[a.name]=a.i18n),t.startsWith("*")){f&&this.reportError("Can't have multiple template bindings on one element. Use only one attribute prefixed with *",a.sourceSpan),n=!0,f=!0;const e=a.value,s=t.substring("*".length),r=[],i=a.valueSpan?a.valueSpan.start.offset:a.sourceSpan.start.offset+a.name.length;this.bindingParser.parseInlineTemplateBinding(s,e,a.sourceSpan,i,[],p,r,!0),d.push(...r.map()}else e=this.parseAttribute(r,a,[],i,o,l,c);e||n||u.push(this.visitAttribute(a))}const m=ya(n.nonBindable?Lc:this,e.children);let g;if(n.type===Ll.NG_CONTENT){e.children&&!e.children.every(&&this.reportError("<ng-content> element cannot have content.",e.sourceSpan);const t=n.selectAttr,s=e.attrs.map(e=>this.visitAttribute(e));g=new Qn(t,s,e.sourceSpan,e.i18n),this.ngContentSelectors.push(t)}else if(r){const t=this.extractAttributes(e.name,i,h);g=new Kn(e.name,u,t.bound,o,[],m,c,l,e.sourceSpan,e.startSourceSpan,e.endSourceSpan,e.i18n)}else{const t=this.extractAttributes(e.name,i,h);g=new Gn(e.name,u,t.bound,o,m,c,e.sourceSpan,e.startSourceSpan,e.endSourceSpan,e.i18n)}if(f){const n=this.extractAttributes("ng-template",p,h),s=[];n.literal.forEach(e=>s.push(e)),n.bound.forEach(e=>s.push(e));const i=g instanceof Gn?{attributes:g.attributes,inputs:g.inputs,outputs:g.outputs}:{attributes:[],inputs:[],outputs:[]},o=r&&t?void 0:e.i18n;g=new Kn(g.name,i.attributes,i.inputs,i.outputs,s,[g],[],d,e.sourceSpan,e.startSourceSpan,e.endSourceSpan,o)}return t&&(this.inI18nBlock=!1),g}itExpansionCase(e){return null}visitComment(e){return null}extractAttributes(e,t,n){const s=[],r=[];return t.forEach(t=>{const i=n[t.name];if(t.isLiteral)r.push(new qn(t.name,t.expression.source||"",t.sourceSpan,void 0,i));else{const n=this.bindingParser.createBoundElementProperty(e,t,!0,!1);s.push(zn.fromBoundElementProperty(n,i))}}),{bound:s,literal:r}}parseAttribute(e,t,n,s,r,i,o){const a=Vc(t.name),l=t.value,c=t.sourceSpan,u=t.valueSpan?t.valueSpan.start.offset:c.start.offset;onst p=a.match(Fc);let d=!1;if(p){if(d=!0,null!=p[1]){const e=p[7],r=h(c,p[1],e);this.bindingParser.parsePropertyBinding(e,l,!1,c,u,t.valueSpan,n,s,r)}else if(p[2])if(e){const e=p[7],n=h(c,p[2],e);this.parseVariable(e,l,c,n,t.valueSpan,i)}else this.reportError('"let-" is only supported on ng-template elements.',c);else if(p[3]){const e=p[7];this.parseReference(e,l,c,t.valueSpan,o)}else if(p[4]){const e=[],s=p[7];this.bindingParser.parseEvent(s,l,c,t.valueSpan||c,n,e),$c(e,r)}else if(p[5]){const e=p[7],i=h(c,p[5],e);this.bindingParser.parsePropertyBinding(e,l,!1,c,u,t.valueSpan,n,s,i),this.parseAssignmentEvent(e,l,c,t.valueSpan,n,r)}else if(p[6]){const e=h(c,"",a);this.bindingParser.parseLiteralAttr(a,l,c,u,t.valueSpan,n,s,e)}else if(p[8]){const e=h(c,"[(",p[8]);this.bindingParser.parsePropertyBinding(p[8],l,!1,c,u,t.valueSpan,n,s,e),this.parseAssignmentEvent(p[8],l,c,t.valueSpan,n,r)}else if(p[9]){const e=h(c,"[",p[9]);this.bindingParser.parsePropertyBinding(p[9],l,!1,c,u,t.valueSpan,n,s,e)}else if(p[10]){const e=[];this.bindingParser.parseEvent(p[10],l,c,t.valueSpan||c,n,e),$c(e,r)}}else{const e=h(c,"",a);d=this.bindingParser.parsePropertyInterpolation(a,l,c,t.valueSpan,n,s,e)}return d}rseReference(e,t,n,s,r){e.indexOf("-")>-1?this.reportError('"-" is not allowed in reference names',n):0===e.length&&this.reportError("Reference does not have a name",n),r.push(new Jn(e,t,n,s))}parseAssignmentEvent(e,t,n,s,r,i){const o=[];this.bindingParser.parseEvent(`${e}Change`,`${t}=$event`,n,s||n,r,o),$c(o,i)}reportError(e,t,n=_i.ERROR){this.errors.push(new Ci(t,e,n))}}const Lc=new class{isitComment(e){return null}visitAttribute(e){return new qn(e.name,e.value,e.sourceSpan,void 0,e.i18n)}isitExpansion(e){return null}visitExpansionCase(e){return null}};r Bc;!function(e){e[e.ELEMENT=0]="ELEMENT",e[e.TEMPLATE=1]="TEMPLATE"}(Bc||(Bc={}));class Hc{t icus(){return this._registry.icus}get isRoot(){return 0===this.level}pendBinding(e){this.bindings.add(e)}ileChildContext(e){["start","close"].forEach(;e.placeholders.forEach(,this._unresolvedCtxCount--}}
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Gc=new function Kc(e){return e.visit(Gc)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Qc={A:"LINK",B:"BOLD_TEXT",BR:"LINE_BREAK",EM:"EMPHASISED_TEXT",H1:"HEADING_LEVEL1",H2:"HEADING_LEVEL2",H3:"HEADING_LEVEL3",H4:"HEADING_LEVEL4",H5:"HEADING_LEVEL5",H6:"HEADING_LEVEL6",HR:"HORIZONTAL_RULE",I:"ITALIC_TEXT",LI:"LIST_ITEM",LINK:"MEDIA_LINK",OL:"ORDERED_LIST",P:"PARAGRAPH",Q:"QUOTATION",S:"STRIKETHROUGH_TEXT",SMALL:"SMALL_TEXT",SUB:"SUBSTRIPT",SUP:"SUPERSCRIPT",TBODY:"TABLE_BODY",TD:"TABLE_CELL",TFOOT:"TABLE_FOOTER",TH:"TABLE_HEADER_CELL",THEAD:"TABLE_HEADER",TR:"TABLE_ROW",TT:"MONOSPACED_TEXT",U:"UNDERLINED_TEXT",UL:"UNORDERED_LIST"};/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Jc=new Ec(new cc);ass eu{constructor(e,t){this._expressionParser=e,this._interpolationConfig=t}sitAttribute(e,t){const n=this._visitTextWithInterpolation(e.value,e.valueSpan||e.sourceSpan,t,e.i18n);return t.visitNodeFn(e,n)}visitText(e,t){const n=this._visitTextWithInterpolation(e.value,e.sourceSpan,t,e.i18n);return t.visitNodeFn(e,n)}visitComment(e,t){return null}isitExpansionCase(e,t){throw new Error("Unreachable code")}_visitTextWithInterpolation(e,t,n,s){const{strings:r,expressions:i}=this._expressionParser.splitInterpolation(e,t.start.toString(),this._interpolationConfig);if(0===i.length)return new ts(e,t);const o=[];for(let a=0;a<r.length-1;a++)this._addText(o,r[a],t),this._addPlaceholder(o,n,i[a],t);return this._addText(o,r[r.length-1],t),function(e,t){t instanceof es&&(!t),t=t.nodes[0]);if(t instanceof ns){!t.children,e);for(let n=0;n<e.length;n++)e[n].sourceSpan=t.children[n].sourceSpan}}(o,s),new ns(o,t)}_addText(e,t,n){if(t.text.length>0){const s=tu(n,t);e.push(new ts(t.text,s))}}_addPlaceholder(e,t,n,s){const r=tu(s,n),i=n.text.split(nu)[2]||"INTERPOLATION";const o=t.placeholderRegistry.getPlaceholderName(i,n.text),a=this._interpolationConfig.start+n.text+this._interpolationConfig.end;t.placeholderToContent[o]={text:a,sourceSpan:r},e.push(new is(n.text,o,r))}}function tu(e,{start:t,end:n}){return new vi(e.fullStart.moveBy(t),e.fullStart.moveBy(n))}const nu=/\/\/[\s\S]*i18n[\s\S]*\([\s\S]*ph[\s\S]*=[\s\S]*("|')([\s\S]*?)\1[\s\S]*\)/g;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const su=class ru{constructor(e=Fr,t=!1,n=!1){this.interpolationConfig=e,this.keepI18nAttrs=t,this.enableI18nLegacyMessageIdFormat=n,this.hasI18nMeta=!1,this._createI18nMessage=Xc(this.interpolationConfig)}isitElement(e){if(e)){this.hasI18nMeta=!0;const t=[],n={};for(const s of e.attrs)if(s.name===Gs){const t=e.i18n||s.value,n=this._generateI18nMessage(e.children,t,su);n.nodes.length&&(e.i18n=n)}else if(s.name.startsWith(Ks)){n[s.name.slice(Ks.length)]=s.value}else t.push(s);if(Object.keys(n).length)for(const e of t){const t=n[e.name];void 0!==t&&e.value&&(e.i18n=this._generateI18nMessage([e],e.i18n||t))}this.keepI18nAttrs||(e.attrs=t)}return ya(this,e.children,e.i18n),e}isitText(e){return e}visitAttribute(e){return e}visitComment(e){return e}tion ou(e,t,n,s){const r=[At(t))];Object.keys(s).length&&r.push(xi(s,!0));const i=n.set(vt("goog.getMsg").callFn(r)).toConstDecl(),o=iu(t);null!==o&&i.addLeadingComment(o);return[i,new st(e.set(n))]}const au=new function lu(e,t,n){const{messageParts:s,placeHolders:r}=function(e){const t=[];return e.nodes.forEach(e=>e.visit(cu,t)),function(e){const t=[],n=[];e[0]instanceof De&&t.push(uu(e[0].sourceSpan.start));for(let s=0;s<e.length;s++){const r=e[s];r instanceof Ae?t.push(r):(n.push(r),e[s-1]instanceof De&&t.push(uu(e[s-1].sourceSpan.end)))}e[e.length-1]instanceof De&&t.push(uu(e[e.length-1].sourceSpan.end));return{messageParts:t,placeHolders:n}}(t)}(t),i=t),o=r.map(,a=t,s,r,o,i),l=e.set(a);return[new st(l)]}const cu=new class{visitText(e,t){t[t.length-1]instanceof Ae?t[t.length-1].text+=e.value:t.push(new Ae(e.value,e.sourceSpan))}itPlaceholder(e,t){t.push(this.createPlaceholderPiece(e.name,e.sourceSpan))}/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const hu=new Set(["$event"]),pu=new Map([["window",jn.resolveWindow],["document",jn.resolveDocument],["body",jn.resolveBody]]),du=[" ","\n","\r","\t"];ass gu{constructor(e,t,n=0,s,r,i,o,a,l,c,u,h,p,d,f={prepareStatements:[],constExpressions:[]}){this.constantPool=e,this.level=n,this.contextName=s,this.i18nContext=r,this.templateIndex=i,this.templateName=o,this.directiveMatcher=a,this.directives=l,this.pipeTypeByName=c,this.pipes=u,this._namespace=h,this.i18nUseExternalIds=d,this._constants=f,this._dataIndex=0,this._bindingContext=0,this._prefixCode=[],this._creationCodeFns=[],this._updateCodeFns=[],this._currentIndex=0,this._tempVariables=[],this._nestedTemplateFns=[],this._unsupported=fr,this.i18n=null,this._pureFunctionSlots=0,this._bindingSlots=0,this._ngContentReservedSlots=[],this._ngContentSelectorsOffset=0,this._implicitReceiverExpr=null,this.visitReference=mr,this.visitVariable=mr,this.visitTextAttribute=mr,this.visitBoundAttribute=mr,this.visitBoundEvent=mr,this._bindingScope=t.nestedScope(n),this.fileBasedI18nSuffix=p.replace(/[^A-Za-z0-9]/g,"_")+"_",this._valueConverter=new yu(e,()=>this.allocateDataSlot(),e=>this.allocatePureFunctionSlots(e),}buildTemplateFunction(e,t,n=0,s){this._ngContentSelectorsOffset=n,this._namespace!==jn.namespaceHTML&&this.creationInstruction(null,this._namespace),t.forEach(e=>this.registerContextVariables(e));const r=this.i18nContext||Zs(s)&&!Js(s)&&!(1===(i=e).length&&i[0]instanceof Gn&&e[0].i18n===s);var i;const o=Nu(e);if(r&&this.i18nStart(null,s,o),Yn(this,e),this._pureFunctionSlots+=this._bindingSlots,this._valueConverter.updatePipeSlotOffsets(this._bindingSlots),this._nestedTemplateFns.forEach(e=>e()),0===this.level&&this._ngContentReservedSlots.length){const e=[];if(this._ngContentReservedSlots.length>1||"*"!==this._ngContentReservedSlots[0]){const t=this._ngContentReservedSlots.map(;e.push(this.constantPool.getConstLiteral(gr(t),!0))}this.creationInstruction(null,jn.projectionDef,e,!0)}r&&this.i18nEnd(null,o);const a=this._creationCodeFns.map(e=>e()),l=this._updateCodeFns.map(e=>e()),c=this._bindingScope.viewSnapshotStatements(),u=this._bindingScope.variableDeclarations().concat(this._tempVariables),h=a.length>0?[fu(1,c.concat(a))]:[],p=l.length>0?[fu(2,u.concat(l))]:[];return xt([new Ve(pr,oe),new Ve(hr,null)],[...this._prefixCode,...h,...p],re,null,this.templateName)}getLocal(e){return this._bindingScope.get(e)}notifyImplicitReceiverUse(){this._bindingScope.notifyImplicitReceiverUse()}i18nTranslate(e,t={},n,s){const r=n||this.i18nGenerateMainBlockVar(),i=function(e,t,n,s={},r){const i=[lr(t),Tt(Fu(),ou(t,e,n,ir(s,!0)),lu(t,e,ir(s,!1)))];r&&i.push(new st(t.set(r(t))));return i}(e,r,this.i18nGenerateClosureVar(e.id),t,s);return this._constants.prepareStatements.push(...i),r}registerContextVariables(e){const t=this._bindingScope.freshReferenceName(),n=this.level,s=vt(e.name+t);this._bindingScope.set(n,e.name,s,1,(t,r)=>{let i;if(t.bindingLevel===n)i=vt(hr);else{const e=t.getSharedContextName(n);i=e||wu(r)}return[s.set(i.prop(e.value||"$implicit")).toConstDecl()]})}(e){var t;const n="ng-template",s=this.allocateDataSlot();this.i18n&&this.i18n.appendTemplate(e.i18n,s);const i=mn(e.tagName||""),o=`${this.contextName}${i?"_"+i:""}_${s}`,a=`${o}_Template`,l=[At(s),vt(a),At(e.tagName?r(e.tagName)[1]:e.tagName)];this.matchDirectives(n,e);const c=this.getAttributeExpressions(n,e.attributes,e.inputs,e.outputs,void 0,e.templateAttrs);if(l.push(this.addAttrsToConsts(c)),e.references&&e.references.length){const t=this.prepareRefsArray(e.references);l.push(this.addToConsts(t)),l.push(_t(jn.templateRefExtractor))}const u=new gu(this.constantPool,this._bindingScope,this.level+1,o,this.i18n,s,a,this.directiveMatcher,this.directives,this.pipeTypeByName,this.pipes,this._namespace,this.fileBasedI18nSuffix,this.i18nUseExternalIds,this._constants);if(this._nestedTemplateFns.push(,this.creationInstruction(e.sourceSpan,jn.templateCreate,,this.templatePropertyBindings(s,e.templateAttrs),e.tagName===n){const[n,r]=e.inputs,Xs);if(n.length>0&&this.i18nAttributesInstruction(s,n,null!==(t=e.startSourceSpan)&&void 0!==t?t:e.sourceSpan),r.length>0&&this.templatePropertyBindings(s,r),e.outputs.length>0){const t=e.outputs.map(;this.creationInstructionChain(jn.listener,t)}}}ocateDataSlot(){return this._dataIndex++}getConstCount(){return this._dataIndex}getVarCount(){return this._pureFunctionSlots}getConsts(){return this._constants}sions(e,t,n,s,r,i=[],o=[]){const a=new Set,l=[];let c;for(const h of t)"ngProjectAs"===h.name&&(c=h),h.i18n?l.push(At(h.name),this.i18nTranslate(h.i18n)):l.push(...Cu(h.name),Ou(e,h));f(c&&l.push(...c)),r&&r.populateInitialStylingAttrs(l),n.length||s.length){const e=l.length;for(let t=0;t<n.length;t++){const e=n[t];4!==e.type&&1!==e.type&&u(e.name)}for(let t=0;t<s.length;t++){const e=s[t];1!==e.type&&u(e.name)}l.length!==e&&l.splice(e,0,At(3))}return i.length&&(l.push(At(4)),i.forEach(e=>u(e.name))),o.length&&(l.push(At(6)),o.forEach(e=>u(e.name))),l}ss yu extends class{visitImplicitReceiver(e,t){return e}visitThisReceiver(e,t){return e}visitInterpolation(e,t){const n=this.visitAll(e.expressions);return n!==e.expressions?new Qi(e.span,e.sourceSpan,e.strings,n):e}visitLiteralPrimitive(e,t){return e}visitPropertyRead(e,t){const n=e.receiver.visit(this);return n!==e.receiver?new $i(e.span,e.sourceSpan,e.nameSpan,n,e.name):e}sitMethodCall(e,t){const n=e.receiver.visit(this),s=this.visitAll(e.args);return n!==e.receiver||s!==e.args?new eo(e.span,e.sourceSpan,e.nameSpan,n,e.name,s):e}visitSafeMethodCall(e,t){const n=e.receiver.visit(this),s=this.visitAll(e.args);return n!==e.receiver||s!==e.args?new to(e.span,e.sourceSpan,e.nameSpan,n,e.name,s):e}isitLiteralArray(e,t){const n=this.visitAll(e.expressions);return n!==e.expressions?new Gi(e.span,e.sourceSpan,n):e}itPrefixNot(e,t){const n=e.expression.visit(this);return n!==e.expression?new Xi(e.span,e.sourceSpan,n):e}isitConditional(e,t){const n=e.condition.visit(this),s=e.trueExp.visit(this),r=e.falseExp.visit(this);return n!==e.condition||s!==e.trueExp||r!==e.falseExp?new Vi(e.span,e.sourceSpan,n,s,r):e}Quote(e,t){return e}}{t vu=[jn.pipeBind1,jn.pipeBind2,jn.pipeBind3,jn.pipeBind4];const _u=[jn.pureFunction0,jn.pureFunction1,jn.pureFunction2,jn.pureFunction3,jn.pureFunction4,jn.pureFunction5,jn.pureFunction6,jn.pureFunction7,jn.pureFunction8];t Su="$$shared_ctx$$";class xu{constructor(e=0,t=null,n){if(this.bindingLevel=e,this.parent=t,this.globals=n,this.map=new Map,this.referenceNameIndex=0,this.restoreViewVariable=null,void 0!==n)for(const s of n)this.set(0,s,vt(s))}static createRootScope(){return new xu}get(e){let t=this;for(;t;){let n=t.map.get(e);if(null!=n)return t!==this&&(n={retrievalLevel:n.retrievalLevel,lhs:n.lhs,declareLocalCallback:n.declareLocalCallback,declare:!1,priority:n.priority,localRef:n.localRef},this.map.set(e,n),this.maybeGenerateSharedContextVar(n),this.maybeRestoreView(n.retrievalLevel,n.localRef)),n.declareLocalCallback&&!n.declare&&(n.declare=!0),n.lhs;t=t.parent}return 0===this.bindingLevel?null:this.getComponentProperty(e)}set(e,t,n,s=0,r,i){if(this.map.has(t)){if(i)return this;$t(`The name ${t} is already defined in scope to be ${this.map.get(t)}`)}return this.map.set(t,{retrievalLevel:e,lhs:n,declare:!1,declareLocalCallback:r,priority:s,localRef:i||!1}),this}getLocal(e){return this.get(e)}notifyImplicitReceiverUse(){0!==this.bindingLevel&&(this.map.get("$$shared_ctx$$0").declare=!0)}rateSharedContextVar(e){const t=vt(hr+this.freshReferenceName());this.map.set(Su+e,{retrievalLevel:e,lhs:t,declareLocalCallback:declare:!1,priority:2,localRef:!1})}getComponentProperty(e){const t=this.map.get("$$shared_ctx$$0");return t.declare=!0,this.maybeRestoreView(0,!1),t.lhs.prop(e)}maybeRestoreView(e,t){this.isListenerScope()&&(e<this.bindingLevel||t)&&(this.parent.restoreViewVariable||(this.parent.restoreViewVariable=vt(this.parent.freshReferenceName())),this.restoreViewVariable=this.parent.restoreViewVariable)}restoreViewStatementiewSnapshotStatementsction Tu(e,t){const n=new g,s=r(e)[1];return n.setElement(s),Object.getOwnPropertyNames(t).forEach(e=>{const s=r(e)[1],i=t[e];if(n.addAttribute(s,i),"class"===e.toLowerCase()){i.trim().split(/\s+/).forEach(e=>n.addClassName(e))}}),n}function Au(e){switch(Cr(e)){case 1:return jn.propertyInterpolate;case 3:return jn.propertyInterpolate1;case 5:return jn.propertyInterpolate2;case 7:return jn.propertyInterpolate3;case 9:return jn.propertyInterpolate4;case 11:return jn.propertyInterpolate5;case 13:return jn.propertyInterpolate6;case 15:return jn.propertyInterpolate7;case 17:return jn.propertyInterpolate8;default:return jn.propertyInterpolateV}}const Du=new Mc;nction Ou(e,t){const n=gr(t.value);switch(Du.securityContext(e,t.name,!0)){case z.HTML:return _t(jn.trustConstantHtml).callFn([n],t.valueSpan);case z.SCRIPT:return _t(jn.trustConstantScript).callFn([n],t.valueSpan);case z.RESOURCE_URL:return _t(jn.trustConstantResourceUrl).callFn([n],t.valueSpan);default:return n}}unction Nu(e){return e.every(Iu)}const Mu="ngI18nClosureMode";/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Ru=/attr\.([^\]]+)/;function ju(e,t,n){const s=new br,r=Q(e.selector);return s.set("type",e.internalType),r.length>0&&s.set("selectors",gr(r)),e.queries.length>0&&s.set("contentQueries",function(e,t,n){const s=[],r=[],i=dr(r,ur);for(const a of e){const e=a.static?jn.staticContentQuery:jn.contentQuery;s.push(_t(e).callFn([vt("dirIndex"),...Bu(a,t)]).toStmt());const n=i(),o=_t(jn.loadQuery).callFn([]),l=_t(jn.queryRefresh).callFn([n.set(o)]),c=vt(hr).prop(a.propertyName).set(a.first?n.prop("first"):n);r.push(l.and(c).toStmt())}const o=n?`${n}_ContentQueries`:null;return xt([new Ve(pr,oe),new Ve(hr,null),new Ve("dirIndex",null)],[fu(1,s),fu(2,r)],re,null,o)}(e.queries,t,e.name)),e.viewQueries.length&&s.set("viewQuery",function(e,t,n){const s=[],r=[],i=dr(r,ur);e.forEach(e=>{const n=_t(e.static?jn.staticViewQuery:jn.viewQuery).callFn(Bu(e,t));s.push(n.toStmt());const o=i(),a=_t(jn.loadQuery).callFn([]),l=_t(jn.queryRefresh).callFn([o.set(a)]),c=vt(hr).prop(e.propertyName).set(e.first?o.prop("first"):o);r.push(l.and(c).toStmt())});const o=n?`${n}_Query`:null;return xt([new Ve(pr,oe),new Ve(hr,null)],[fu(1,s),fu(2,r)],re,null,o)}(e.viewQueries,t,e.name)),s.set("hostBindings",function(e,t,n,s,r,i,o){const a=vt(hr),l=new sc(a),{styleAttr:c,classAttr:u}=e.specialAttributes;void 0!==c&&l.registerStyleAttr(c);void 0!==u&&l.registerClassAttr(u);const h=[],p=[],d=t,f=Wu(e),m=n.createDirectiveHostEventAsts(f,d);if(m&&m.length){const e=function(e,t){const n=[],s=[],r=[];e.forEach(,s.length>0&&r.push(Er(jn.syntheticHostListener,s).toStmt());n.length>0&&r.push(Er(jn.listener,n).toStmt());return r}(m,i);h.push(...e)}const g=n.createBoundHostProperties(f,d),y=[];let v,_=0;g&&g.forEach(;const b=w=[],E=[],C=[];y.forEach(e=>{const t=e.expression.visit(b()),s=zu(a,t),{bindingName:i,instruction:o,isAttribute:l}=function(e){let t,n=e.name;const s=n.match(Ru);s?(n=s[1],t=jn.attribute):e.isAnimation?(n=$n(n),t=jn.syntheticHostProperty):t=jn.hostProperty;return{bindingName:n,instruction:t,isAttribute:!!s}}(e),c=n.calcPossibleSecurityContexts(r,i,l).filter(;let u=null;c.length&&(u=2===c.length&&c.indexOf(z.URL)>-1&&c.indexOf(z.RESOURCE_URL)>-1?_t(jn.sanitizeUrlOrResourceUrl):ku(c[0],l));const h=[At(i),s.currValExpr];u&&h.push(u),p.push(...s.stmts),o===jn.hostProperty?w.push(h):o===jn.attribute?E.push(h):o===jn.syntheticHostProperty?C.push(h):p.push(_t(o).callFn(h).toStmt())}),w.length>0&&p.push(Er(jn.hostProperty,w).toStmt());E.length>0&&p.push(Er(jn.attribute,E).toStmt());C.length>0&&p.push(Er(jn.syntheticHostProperty,C).toStmt());const S=e.attributes);l.assignHostAttrs(S,o),l.hasBindings&&l.buildUpdateLevelInstructions(b()).forEach(;_&&o.set("hostVars",At(_));if(h.length>0||p.length>0){const e=i?`${i}_HostBindings`:null,t=[];return h.length>0&&t.push(fu(1,h)),p.length>0&&t.push(fu(2,p)),xt([new Ve(pr,oe),new Ve(hr,null)],t,re,null,e)}return null}(e.host,e.typeSourceSpan,n,t,e.selector||"",e.name,s)),s.set("inputs",yr(e.inputs,!0)),s.set("outputs",yr(e.outputs)),null!==e.exportAs&&s.set("exportAs",Ct(e.exportAs.map(e=>At(e)))),s}unction Vu(e,t,n){const s=ju(e,t,n);Lu(s,e);const r=_t(jn.defineDirective).callFn([s.toLiteralMap()]),i=qu(e);return{expression:r,type:wt(_t(jn.DirectiveDefWithMeta,i))}}function $u(e,t,n){const s=ju(e,t,n);Lu(s,e);const r=e.selector&&g.parse(e.selector),i=r&&r[0];if(i){const e=i.getAttrs();e.length&&s.set("attrs",t.getConstLiteral(Ct(e.map(),!0))}let o=null;if(e.directives.length>0){const t=new y;for(const{selector:n,expression:s}of e.directives)t.addSelectables(g.parse(n),s);o=t}const a=e.name,l=a?`${a}_Template`:null,c=new Set,u=new Set,h=e.changeDetection,p=e.template,d=new gu(t,xu.createRootScope(),0,a,null,null,l,o,c,e.pipes,u,jn.namespaceHTML,e.relativeContextFilePath,e.i18nUseExternalIds),f=d.buildTemplateFunction(p.nodes,[]),m=d.getNgContentSelectors();m&&s.set("ngContentSelectors",m),s.set("decls",At(d.getConstCount())),s.set("vars",At(d.getVarCount()));const{constExpressions:v,prepareStatements:_}=d.getConsts();if(v.length>0){let e=Ct(v);_.length>0&&(e=xt([],[..._,new rt(e)])),s.set("consts",e)}if(s.set("template",f),c.size){let t=Ct(Array.from(c));e.wrapDirectivesAndPipesInClosure&&(t=xt([],[new rt(t)])),s.set("directives",t)}if(u.size){let t=Ct(Array.from(u));e.wrapDirectivesAndPipesInClosure&&(t=xt([],[new rt(t)])),s.set("pipes",t)}if(null===e.encapsulation&&(e.encapsulation=D.Emulated),e.styles&&e.styles.length){const n=(e.encapsulation==D.Emulated?/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */(e.styles,ia,ra):e.styles).map(e=>t.getConstLiteral(At(e)));s.set("styles",Ct(n))}else e.encapsulation===D.Emulated&&(e.encapsulation=D.None);e.encapsulation!==D.Emulated&&s.set("encapsulation",At(e.encapsulation)),null!==e.animations&&s.set("data",St([{key:"animation",value:e.animations,quoted:!1}])),null!=h&&h!==P.Default&&s.set("changeDetection",At(h));const b=_t(jn.defineComponent).callFn([s.toLiteralMap()]),w=qu(e);w.push(Uu(e.template.ngContentSelectors));return{expression:b,type:wt(_t(jn.ComponentDefWithMeta,w))}}function Bu(e,t){const n=[_r(e,t),At(e.descendants)];return e.read&&n.push(e.read),n}nction qu(e){const t=null!==e.selector?e.selector.replace(/\n/g,""):null;return[Vn(e.type.type,e.typeArgumentCount),null!==t?(n=t,wt(At(n))):le,null!==e.exportAs?Uu(e.exportAs):le,Hu(e.inputs),Hu(e.outputs),Uu(e.queries.map(e=>e.propertyName))];var n}nst Gu=/^(?:\[([^\]]+)\])|(?:\(([^\)]+)\))$/;/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class Qu{constructor(e=new Zr){this.jitEvaluator=e,this.R3ResolvedDependencyType=Tr,this.R3FactoryTarget=xr,this.ResourceLoader=Ku,this.elementSchemaRegistry=new Mc}compilePipe(e,t,n){const s=Pi({name:n.name,type:eh(n.type),internalType:new ve(n.type),typeArgumentCount:n.typeArgumentCount,deps:oh(n.deps),pipeName:n.pipeName,pure:n.pure});return this.jitExpression(s.expression,e,t,[])}compileInjectable(e,t,n){const{expression:s,statements:r}=function(e){let t=null;const n={name:e.name,type:e.type,internalType:e.internalType,typeArgumentCount:e.typeArgumentCount,deps:[],injectFn:cn.inject,target:xr.Injectable};if(void 0!==e.useClass){const s=e.useClass.isEquivalent(e.internalType);let r;void 0!==e.userDeps&&(r=e.userDeps),t=void 0!==r?Ar(Object.assign(Object.assign({},n),{delegate:e.useClass,delegateDeps:r,delegateType:Sr.Class})):s?Ar(n):kr(e.type.value,e.useClass)}else t=void 0!==e.useFactory?void 0!==e.userDeps?Ar(Object.assign(Object.assign({},n),{delegate:e.useFactory,delegateDeps:e.userDeps||[],delegateType:Sr.Function})):{statements:[],factory:xt([],[new rt(e.useFactory.callFn([]))])}:void 0!==e.useValue?Ar(Object.assign(Object.assign({},n),{expression:e.useValue})):void 0!==e.useExisting?Ar(Object.assign(Object.assign({},n),{expression:_t(cn.inject).callFn([e.useExisting])})):kr(e.type.value,e.internalType);const s={token:e.internalType,factory:t.factory};return null!==e.providedIn.value&&(s.providedIn=e.providedIn),{expression:_t(cn.\u0275\u0275defineInjectable).callFn([Ln(s)]),type:new ee(_t(cn.InjectableDef,[Vn(e.type.type,e.typeArgumentCount)])),statements:t.statements}}({name:n.name,type:eh(n.type),internalType:new ve(n.type),typeArgumentCount:n.typeArgumentCount,providedIn:rh(n.providedIn),useClass:sh(n,Zu),useFactory:sh(n,Ju),useValue:sh(n,Xu),useExisting:sh(n,Yu),userDeps:oh(n.userDeps)||void 0});return this.jitExpression(s,e,t,r)}compileInjector(e,t,n){const s=function(e){const t=Ar({name:e.name,type:e.type,internalType:e.internalType,typeArgumentCount:0,deps:e.deps,injectFn:jn.inject,target:xr.NgModule}),n={factory:t.factory};return null!==e.providers&&(n.providers=e.providers),e.imports.length>0&&(n.imports=Ct(e.imports)),{expression:_t(jn.defineInjector).callFn([Ln(n)]),type:new ee(_t(jn.InjectorDef,[new ee(e.type.type)])),statements:t.statements}}({name:n.name,type:eh(n.type),internalType:new ve(n.type),deps:oh(n.deps),providers:new ve(n.providers),imports:n.imports.map(e=>new ve(e))});return this.jitExpression(s.expression,e,t,s.statements)}ompileDirective(e,t,n){const s=new nn,r=Pu(),i=Vu(nh(n),s,r);return this.jitExpression(i.expression,e,t,s.statements)}compileComponent(e,t,n){const s=new nn,r=n.interpolation?Mr.fromArray(n.interpolation):Fr,i=function(e,t,n={}){const{interpolationConfig:s,preserveWhitespaces:r,enableI18nLegacyMessageIdFormat:i}=n,o=Pu(s),a=(new Ha).parse(e,t,Object.assign(Object.assign({leadingTriviaChars:du},n),{tokenizeExpansionForms:!0}));if(a.errors&&a.errors.length>0)return{interpolationConfig:s,preserveWhitespaces:r,template:e,errors:a.errors,nodes:[],styleUrls:[],styles:[],ngContentSelectors:[]};let l=a.rootNodes;const c=new ru(s,!r,i);l=ya(c,l),r||(l=ya(new Qa,l),c.hasI18nMeta&&(l=ya(new ru(s,!1),l)));const{nodes:u,errors:h,styleUrls:p,styles:d,ngContentSelectors:f}=Rc(l,o);return{interpolationConfig:s,preserveWhitespaces:r,errors:h.length>0?h:null,template:e,nodes:u,styleUrls:p,styles:d,ngContentSelectors:f}}(n.template,t,{preserveWhitespaces:n.preserveWhitespaces,interpolationConfig:r});if(null!==i.errors){const e=i.errors.map(e=>e.toString()).join(", ");throw new Error(`Errors during JIT compilation of template for ${n.name}: ${e}`)}const o=$u(Object.assign(Object.assign(Object.assign({},n),nh(n)),{selector:n.selector||this.elementSchemaRegistry.getDefaultComponentElementName(),template:i,wrapDirectivesAndPipesInClosure:!1,styles:[...n.styles,...i.styles],encapsulation:n.encapsulation,interpolation:r,changeDetection:n.changeDetection,animations:null!=n.animations?new ve(n.animations):null,viewProviders:null!=n.viewProviders?new ve(n.viewProviders):null,relativeContextFilePath:"",i18nUseExternalIds:!0}),s,Pu(r)),a=`ng:///${n.name}.js`;return this.jitExpression(o.expression,e,a,s.statements)}compileFactory(e,t,n){const s=Ar({name:n.name,type:eh(n.type),internalType:new ve(n.type),typeArgumentCount:n.typeArgumentCount,deps:oh(n.deps),injectFn:"directiveInject"===n.injectFn?cn.directiveInject:cn.inject,target:n.target});return this.jitExpression(s.factory,e,t,s.statements)}onst Zu=Object.keys({useClass:null})[0],Ju=Object.keys({useFactory:null})[0],Xu=Object.keys({useValue:null})[0],Yu=Object.keys({useExisting:null})[0],eh=function th(e){return Object.assign(Object.assign({},e),{predicate:Array.isArray(e.predicate)?e.predicate:new ve(e.predicate),read:e.read?new ve(e.read):null,static:e.static})}function nh(e){const t=uh(e.inputs||[]),n=uh(e.outputs||[]),s=e.propMetadata,r={},i={};for(const o in s)s.hasOwnProperty(o)&&s[o].forEach(e=>{"Input"===e.ngMetadataName?r[o]=e.bindingPropertyName?[e.bindingPropertyName,o]:o:ch(e)&&(i[o]=e.bindingPropertyName||o)});return Object.assign(Object.assign({},e),{typeSourceSpan:e.typeSourceSpan,type:eh(e.type),internalType:new ve(e.type),deps:oh(e.deps),host:ah(e.propMetadata,e.typeSourceSpan,e.host),inputs:Object.assign(Object.assign({},t),r),outputs:Object.assign(Object.assign({},n),i),queries:e.queries.map(th),providers:null!=e.providers?new ve(e.providers):null,viewQueries:e.viewQueries.map(th),fullInheritance:!1})}function sh(e,t){return e.hasOwnProperty(t)?new ve(e[t]):void 0}function rh(e){return null==e||"string"==typeof e?new xe(e):new ve(e)}function ih(e){let t;return t=null===e.token?new xe(null):e.resolved===Tr.Attribute?new xe(e.token):new ve(e.token),{token:t,attribute:null,resolved:e.resolved,host:e.host,optional:e.optional,self:e.self,skipSelf:e.skipSelf}}unction ah(e,t,n){const s=n||{}),r=s,t);if(r.length)throw new Error(r.map(e=>e.msg).join("\n"));for(const i in e)e.hasOwnProperty(i)&&e[i].forEach(e=>{"HostBinding"===e.ngMetadataName?s.properties[e.hostPropertyName||i]=i:lh(e)&&(s.listeners[e.eventName||i]=`${i}(${(e.args||[]).join(",")})`)});return s}function lh(e){return"HostListener"===e.ngMetadataName}**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
new "11.0.7");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const mh=[T,x,S,C];class gh{constructor(e){this._reflector=e}ergeWithPropertyMetadata(e,t,n,s){const r=[],i=[],o={},a={};return Object.keys(t).forEach(e=>{const n=vh(t[e],e=>I.isTypeOf(e));n&&(n.bindingPropertyName?r.push(`${e}: ${n.bindingPropertyName}`):r.push(e));const s=vh(t[e],e=>N.isTypeOf(e));s&&(s.bindingPropertyName?i.push(`${e}: ${s.bindingPropertyName}`):i.push(e));t[e].filter(e=>M.isTypeOf(e)).forEach(;t[e].filter(e=>F.isTypeOf(e)).forEach(;const l=vh(t[e],;l&&(a[e]=l)}),this._merge(e,r,i,o,a,n,s)}
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class _h extends Ci{constructor(e,t){super(e,t)}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const bh="i18n",wh="i18n-",Eh=/^i18n:?/;let Ch=!1;class Sh{constructor(e,t){this.messages=e,this.errors=t}}var xh;!function(e){e[e.Extract=0]="Extract",e[e.Merge=1]="Merge"}(xh||(xh={}));class Th{constructor(e,t){this._implicitTags=e,this._implicitAttrs=t}tComment(e,t){const n=!!((s=e)instanceof ga&&s.value&&s.value.startsWith("i18n"));var s;if(n&&this._isInTranslatableSection)return void this._reportError(e,"Could not start a block inside a translatable section");const r=e);if(!r||this._inI18nBlock){if(!this._inI18nNode&&!this._inIcu)if(this._inI18nBlock){if(r){if(this._depth==this._blockStartDepth){this._closeTranslatableSection(e,this._blockChildren),this._inI18nBlock=!1;const t=this._addMessage(this._blockChildren,this._blockMeaningAndDesc);return ya(this,this._translateMessage(e,t))}return void this._reportError(e,"I18N blocks should not cross element boundaries")}}else if(n){if(!Ch&&console&&console.warn){Ch=!0;const t=e.sourceSpan.details?`, ${e.sourceSpan.details}`:"";console.warn(`I18n comments are deprecated, use an <ng-container> element instead (${e.sourceSpan.start}${t})`)}this._inI18nBlock=!0,this._blockStartDepth=this._depth,this._blockChildren=[],this._blockMeaningAndDesc=e.value.replace(Eh,"").trim(),this._openTranslatableSection(e)}}else this._reportError(e,"Trying to close an unopened block")}isitElement(e,t){this._mayBeAddBlockChildren(e),this._depth++;const n=this._inI18nNode,s=this._inImplicitNode;let r,i=[];const o=e.attrs.find(e=>e.name===bh)||null;const a=o?o.value:"",l=this._implicitTags.some(t=>e.name===t)&&!this._inIcu&&!this._isInTranslatableSection,c=!s&&l;if(this._inImplicitNode=s||l,this._isInTranslatableSection||this._inIcu)(o||c)&&this._reportError(e,"Could not mark an element as translatable inside a translatable section"),this._mode==xh.Extract&&ya(this,e.children);else{if(o||c){this._inI18nNode=!0;const t=this._addMessage(e.children,a);r=this._translateMessage(e,t)}if(this._mode==xh.Extract){const t=o||c;t&&this._openTranslatableSection(e),ya(this,e.children),t&&this._closeTranslatableSection(e,e.children)}}if(this._mode===xh.Merge){(r||e.children).forEach(}if(this._visitAttributesOf(e),this._depth--,this._inI18nNode=n,this._inImplicitNode=s,this._mode===xh.Merge){const t=this._translateAttributes(e);return new ma(e.name,t,i,e.sourceSpan,e.startSourceSpan,e.endSourceSpan)}return null}visitAttribute(e,t){throw new Error("unreachable code")}nslateAttributes(e){const t=e.attrs,n={};t.forEach(;const s=[];return t.forEach(t=>{if(t.name!==bh&&!t.name.startsWith(wh))if(t.value&&""!=t.value&&n.hasOwnProperty(t.name)){const{meaning:r,description:i,id:o}=n[t.name],a=this._createI18nMessage([t],r,i,o),l=this._translations.get(a);if(l)if(0==l.length)s.push(new fa(t.name,"",t.sourceSpan));else if(l[0]instanceof ha){const e=l[0].value;s.push(new fa(t.name,e,t.sourceSpan))}else this._reportError(e,`Unexpected translation for attribute "${t.name}" (id="${o||this._translations.digest(a)}")`);else this._reportError(e,`Translation unavailable for attribute "${t.name}" (id="${o||this._translations.digest(a)}")`)}else s.push(t)}),s}ortError(e,t){this._errors.push(new _h(e.sourceSpan,t))}}/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Dh=new class{constructor(){this.closedByParent=!1,this.contentType=s.PARSABLE_DATA,this.isVoid=!1,this.ignoreFirstLf=!1,this.canSelfClose=!0,this.preventNamespaceInheritance=!1}requireExtraParent(e){return!1}isClosedByChild(e){return!1}};function Ph(e){return Dh}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 *//**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Oh="x",Ih="source",Nh="trans-unit",Mh="context";class Fh extends Ds{write(e,t){const n=new Rh,s=[];e.forEach(e=>{let t=[];e.sources.forEach(;const r=new Ms(Nh,{id:e.id,datatype:"html"});r.children.push(new Rs(8),new Ms(Ih,{},n.serialize(e.nodes)),...t),e.description&&r.children.push(new Rs(8),new Ms("note",{priority:"1",from:"description"},[new Fs(e.description)])),e.meaning&&r.children.push(new Rs(8),new Ms("note",{priority:"1",from:"meaning"},[new Fs(e.meaning)])),r.children.push(new Rs(6)),s.push(new Rs(6),r)});const r=new Ms("body",{},[...s,new Rs(4)]),i=new Ms("file",{"source-language":t||"en",datatype:"plaintext",original:"ng2.template"},[new Rs(4),r,new Rs(2)]),o=new Ms("xliff",{version:"1.2",xmlns:"urn:oasis:names:tc:xliff:document:1.2"},[new Rs(2),i,new Rs]);return Os([new Is({version:"1.0",encoding:"UTF-8"}),new Rs,o,new Rs])}load(e,t){const n=new jh,{locale:s,msgIdToHtml:r,errors:i}=n.parse(e,t),o={},a=new Lh;if(Object.keys(r).forEach(e=>{const{i18nNodes:n,errors:s}=a.convert(r[e],t);i.push(...s),o[e]=n}),i.length)throw new Error(`xliff parse errors:\n${i.join("\n")}`);return{locale:s,i18nNodesByMsgId:o}}digest(e){return cs(e)}}class Rh{visitText(e,t){return[new Fs(e.value)]}visitContainer(e,t){const n=[];return e.children.forEach(e=>n.push(...e.visit(this))),n}visitIcu(e,t){const n=[new Fs(`{${e.expressionPlaceholder}, ${e.type}, `)];return Object.keys(e.cases).forEach(t=>{n.push(new Fs(`${t} {`),...e.cases[t].visit(this),new Fs("} "))}),n.push(new Fs("}")),n}visitTagPlaceholder(e,t){const n=/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */(e.tag);if(e.isVoid)return[new Ms(Oh,{id:e.startName,ctype:n,"equiv-text":`<${e.tag}/>`})];const s=new Ms(Oh,{id:e.startName,ctype:n,"equiv-text":`<${e.tag}>`}),r=new Ms(Oh,{id:e.closeName,ctype:n,"equiv-text":`</${e.tag}>`});return[s,...this.serialize(e.children),r]}visitPlaceholder(e,t){return[new Ms(Oh,{id:e.name,"equiv-text":`{{${e.value}}}`})]}visitIcuPlaceholder(e,t){const n=`{${e.value.expression}, ${e.value.type}, ${Object.keys(e.value.cases).map(e=>e+" {...}").join(" ")}}`;return[new Ms(Oh,{id:e.name,"equiv-text":n})]}class jh{constructor(){this._locale=null}parse(e,t){this._unitMlString=null,this._msgIdToHtml={};const n=(new kh).parse(e,t);return this._errors=n.errors,ya(this,n.rootNodes,null),{msgIdToHtml:this._msgIdToHtml,errors:this._errors,locale:this._locale}}visitElement(e,t){switch(e.name){case Nh:this._unitMlString=null;const t=e.attrs.find(e=>"id"===e.name);if(t){const n=t.value;this._msgIdToHtml.hasOwnProperty(n)?this._addError(e,`Duplicated translations for msg ${n}`):(ya(this,e.children,null),"string"==typeof this._unitMlString?this._msgIdToHtml[n]=this._unitMlString:this._addError(e,`Message ${n} misses a translation`))}else this._addError(e,'<trans-unit> misses the "id" attribute');break;case Ih:case"seg-source":case"alt-trans":break;case"target":const n=e.startSourceSpan.end.offset,s=e.endSourceSpan.start.offset,r=e.startSourceSpan.start.file.content.slice(n,s);this._unitMlString=r;break;case"file":const i=e.attrs.find(e=>"target-language"===e.name);i&&(this._locale=i.value),ya(this,e.children,null);break;default:ya(this,e.children,null)}}visitAttribute(e,t){}visitText(e,t){}visitComment(e,t){}visitExpansion(e,t){}visitExpansionCase(e,t){}_addError(e,t){this._errors.push(new _h(e.sourceSpan,t))}}class Lh{convert(e,t){const n=(new kh).parse(e,t,{tokenizeExpansionForms:!0});this._errors=n.errors;return{i18nNodes:this._errors.length>0||0==n.rootNodes.length?[]:[].concat(...ya(this,n.rootNodes)),errors:this._errors}}visitText(e,t){return new ts(e.value,e.sourceSpan)}visitElement(e,t){if(e.name===Oh){const t=e.attrs.find(e=>"id"===e.name);return t?new is("",t.value,e.sourceSpan):(this._addError(e,'<x> misses the "id" attribute'),null)}return"mrk"===e.name?[].concat(...ya(this,e.children)):(this._addError(e,"Unexpected tag"),null)}visitExpansion(e,t){const n={};return ya(this,e.cases).forEach(t=>{n[t.value]=new ns(t.nodes,e.sourceSpan)}),new ss(e.switchValue,e.type,n,e.sourceSpan)}visitExpansionCase(e,t){return{value:e.value,nodes:ya(this,e.expression)}}visitComment(e,t){}visitAttribute(e,t){}_addError(e,t){this._errors.push(new _h(e.sourceSpan,t))}}const Vh="ph",$h="xliff",Bh="source",Hh="unit";class Uh extends Ds{write(e,t){const n=new qh,s=[];e.forEach(e=>{const t=new Ms(Hh,{id:e.id}),r=new Ms("notes");(e.description||e.meaning)&&(e.description&&r.children.push(new Rs(8),new Ms("note",{category:"description"},[new Fs(e.description)])),e.meaning&&r.children.push(new Rs(8),new Ms("note",{category:"meaning"},[new Fs(e.meaning)]))),e.sources.forEach(,r.children.push(new Rs(6)),t.children.push(new Rs(6),r);const i=new Ms("segment");i.children.push(new Rs(8),new Ms(Bh,{},n.serialize(e.nodes)),new Rs(6)),t.children.push(new Rs(6),i,new Rs(4)),s.push(new Rs(4),t)});const r=new Ms("file",{original:"ng.template",id:"ngi18n"},[...s,new Rs(2)]),i=new Ms($h,{version:"2.0",xmlns:"urn:oasis:names:tc:xliff:document:2.0",srcLang:t||"en"},[new Rs(2),r,new Rs]);return Os([new Is({version:"1.0",encoding:"UTF-8"}),new Rs,i,new Rs])}igest(e){return hs(e)}}class qh{itTagPlaceholder(e,t){const n=/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */(e.tag);if(e.isVoid){return[new Ms(Vh,{id:(this._nextPlaceholderId++).toString(),equiv:e.startName,type:n,disp:`<${e.tag}/>`})]}const s=new Ms("pc",{id:(this._nextPlaceholderId++).toString(),equivStart:e.startName,equivEnd:e.closeName,type:n,dispStart:`<${e.tag}>`,dispEnd:`</${e.tag}>`}),r=[].concat(...e.children.map(e=>e.visit(this)));return r.length?r.forEach(e=>s.children.push(e)):s.children.push(new Fs("")),[s]}ass zh{constructor(){this._locale=null}isitElement(e,t){switch(e.name){case Hh:this._unitMlString=null;const t=e.attrs.find(e=>"id"===e.name);if(t){const n=t.value;this._msgIdToHtml.hasOwnProperty(n)?this._addError(e,`Duplicated translations for msg ${n}`):(ya(this,e.children,null),"string"==typeof this._unitMlString?this._msgIdToHtml[n]=this._unitMlString:this._addError(e,`Message ${n} misses a translation`))}else this._addError(e,'<unit> misses the "id" attribute');break;case Bh:break;case"target":const n=e.startSourceSpan.end.offset,s=e.endSourceSpan.start.offset,r=e.startSourceSpan.start.file.content.slice(n,s);this._unitMlString=r;break;case $h:const i=e.attrs.find(e=>"trgLang"===e.name);i&&(this._locale=i.value);const o=e.attrs.find(e=>"version"===e.name);if(o){const t=o.value;"2.0"!==t?this._addError(e,`The XLIFF file version ${t} is not compatible with XLIFF 2.0 serializer`):ya(this,e.children,null)}break;default:ya(this,e.children,null)}}visitAttribute(e,t){}visitText(e,t){}visitComment(e,t){}visitExpansion(e,t){}visitExpansionCase(e,t){}_addError(e,t){this._errors.push(new _h(e.sourceSpan,t))}}class Wh{convert(e,t){const n=(new kh).parse(e,t,{tokenizeExpansionForms:!0});this._errors=n.errors;return{i18nNodes:this._errors.length>0||0==n.rootNodes.length?[]:[].concat(...ya(this,n.rootNodes)),errors:this._errors}}visitText(e,t){return new ts(e.value,e.sourceSpan)}isitExpansion(e,t){const n={};return ya(this,e.cases).forEach(t=>{n[t.value]=new ns(t.nodes,e.sourceSpan)}),new ss(e.switchValue,e.type,n,e.sourceSpan)}isitComment(e,t){}visitAttribute(e,t){}_addError(e,t){this._errors.push(new _h(e.sourceSpan,t))}}const Gh="translationbundle",Kh="translation";lass Zh{sitElement(e,t){switch(e.name){case Gh:this._bundleDepth++,this._bundleDepth>1&&this._addError(e,"<translationbundle> elements can not be nested");const t=e.attrs.find(e=>"lang"===e.name);t&&(this._locale=t.value),ya(this,e.children,null),this._bundleDepth--;break;case Kh:const n=e.attrs.find(e=>"id"===e.name);if(n){const t=n.value;if(this._msgIdToHtml.hasOwnProperty(t))this._addError(e,`Duplicated translations for msg ${t}`);else{const n=e.startSourceSpan.end.offset,s=e.endSourceSpan.start.offset,r=e.startSourceSpan.start.file.content.slice(n,s);this._msgIdToHtml[t]=r}}else this._addError(e,'<translation> misses the "id" attribute');break;default:this._addError(e,"Unexpected tag")}}visitAttribute(e,t){}visitText(e,t){}visitComment(e,t){}visitExpansion(e,t){}visitExpansionCase(e,t){}_addError(e,t){this._errors.push(new _h(e.sourceSpan,t))}}class Jh{convert(e,t){const n=(new kh).parse(e,t,{tokenizeExpansionForms:!0});this._errors=n.errors;return{i18nNodes:this._errors.length>0||0==n.rootNodes.length?[]:ya(this,n.rootNodes),errors:this._errors}}tComment(e,t){}visitAttribute(e,t){}_addError(e,t){this._errors.push(new _h(e.sourceSpan,t))}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class ep{constructor(e,t,n,s=W.Warning,r){if(this._htmlParser=e,t){const e=function(e){switch(e=(e||"xlf").toLowerCase()){case"xmb":return new Hs;case"xtb":return new Qh;case"xliff2":case"xlf2":return new Uh;case"xliff":case"xlf":default:return new Fh}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */(n);this._translationBundle=Xh.load(t,"i18n",e,s,r)}else this._translationBundle=new Xh({},null,cs,void 0,s,r)}**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */*
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var op;!function(e){e[e.OnInit=0]="OnInit",e[e.OnDestroy=1]="OnDestroy",e[e.DoCheck=2]="DoCheck",e[e.OnChanges=3]="OnChanges",e[e.AfterContentInit=4]="AfterContentInit",e[e.AfterContentChecked=5]="AfterContentChecked",e[e.AfterViewInit=6]="AfterViewInit",e[e.AfterViewChecked=7]="AfterViewChecked"}(op||(op={}));const ap=[op.OnInit,op.OnDestroy,op.DoCheck,op.OnChanges,op.AfterContentInit,op.AfterContentChecked,op.AfterViewInit,op.AfterViewChecked];lass cp{etReflector(){return this._reflector}stComponentViewClass(e){return this.getGeneratedClass(e,`HostView_${yn({reference:e})}`)}iveSummary(e){const t=this._loadSummary(e,En.Directive);return t||this._reportError(Bt(`Illegal state: Could not load the summary for directive ${fp(e)}.`),e),t}isDirective(e){return!!this._loadSummary(e,En.Directive)||this._directiveResolver.isDirective(e)}sPipe(e){return!!this._loadSummary(e,En.Pipe)||this._pipeResolver.isPipe(e)}gModuleMetadata(e,t=!0,n=null){e=Gt(e);let s=this._ngModuleCache.get(e);if(s)return s;const r=this._ngModuleResolver.resolve(e,t);if(!r)return null;const i=[],o=[],a=[],l=[],c=[],u=[],h=[],p=[],d=[];r.imports&&hp(r.imports).forEach(t=>{let s;if(pp(t))s=t;else if(t&&t.ngModule){const e=t;s=e.ngModule,e.providers&&u.push(...this._getProvidersMetadata(e.providers,h,`provider for the NgModule '${fp(s)}'`,[],t))}if(s){if(this._checkSelfImport(e,s))return;if(n||(n=new Set),n.has(s))return void this._reportError(Bt(`${this._getTypeDescriptor(s)} '${fp(t)}' is imported recursively by the module '${fp(e)}'.`),e);n.add(s);const r=this.getNgModuleSummary(s,n);if(n.delete(s),!r)return void this._reportError(Bt(`Unexpected ${this._getTypeDescriptor(t)} '${fp(t)}' imported by the module '${fp(e)}'. Please add a @NgModule annotation.`),e);l.push(r)}else this._reportError(Bt(`Unexpected value '${fp(t)}' imported by the module '${fp(e)}'`),e)}),r.exports&&hp(r.exports).forEach(;const f=this._getTransitiveNgModuleMetadata(l,c);r.declarations&&hp(r.declarations).forEach(;const m=[],g=[];return o.forEach(,r.providers&&u.push(...this._getProvidersMetadata(r.providers,h,`provider for the NgModule '${fp(e)}'`,[],e)),r.entryComponents&&h.push(...hp(r.entryComponents).map(e=>this._getEntryComponentMetadata(e))),r.bootstrap&&hp(r.bootstrap).forEach(,h.push(...p.map(),r.schemas&&d.push(...hp(r.schemas)),s=new Pn({type:this._getTypeMetadata(e),providers:u,entryComponents:h,bootstrapComponents:p,schemas:d,declaredDirectives:i,exportedDirectives:m,declaredPipes:a,exportedPipes:g,importedModules:l,exportedModules:c,transitiveModule:f,id:r.id||null}),h.forEach(e=>f.addEntryComponent(e)),u.forEach(,f.addModule(s.type),this._ngModuleCache.set(e,s),s}tTransitiveNgModuleMetadata(e,t){const n=new kn,s=new Map;return e.concat(t).forEach(e=>{e.modules.forEach(e=>n.addModule(e)),e.entryComponents.forEach(e=>n.addEntryComponent(e));const t=new Set;e.providers.forEach(e=>{const r=Sn(e.provider.token);let i=s.get(r);i||(i=new Set,s.set(r,i));const o=e.module.reference;!t.has(r)&&i.has(o)||(i.add(o),t.add(r),n.addProvider(e.provider,e.module))})}),t.forEach(e=>{e.exportedDirectives.forEach(e=>n.addExportedDirective(e)),e.exportedPipes.forEach(e=>n.addExportedPipe(e))}),e.forEach(,n}TypeMetadata(e,t=null,n=!0){const s=this._getIdentifierMetadata(e);return{reference:s.reference,diDeps:this._getDependenciesMetadata(s.reference,t,n),lifecycleHooks:(r=this._reflector,i=s.reference,ap.filter(e=>lp(r,e,i)))};var r,i}ComponentsFromProvider(e,t){const n=[],s=[];return e.useFactory||e.useExisting||e.useClass?(this._reportError(Bt("The ANALYZE_FOR_ENTRY_COMPONENTS token only supports useValue!"),t),[]):e.multi?(r=e.useValue,i=s,Nt(r,new dp,i),s.forEach(,n):(this._reportError(Bt("The ANALYZE_FOR_ENTRY_COMPONENTS token only supports 'multi = true'!"),t),[]);var r,i}ueryMetadata(e,t,n){let s;return"string"==typeof e.selector?s=this._queryVarBindings(e.selector).map(e=>this._getTokenMetadata(e)):e.selector?s=[this._getTokenMetadata(e.selector)]:(this._reportError(Bt(`Can't construct a query for the property "${t}" of "${fp(n)}" since the query selector wasn't defined.`),n),s=[]),{selectors:s,first:e.first,descendants:e.descendants,propertyName:t,read:e.read?this._getTokenMetadata(e.read):null,static:e.static}}unction hp(e){return(t=up(e))?Array.from(new Set(t)):[];var t}ction mp(e,t){let n=0;t.eager||(n|=4096),t.providerType===ml.PrivateService&&(n|=8192),t.isModule&&(n|=1073741824),t.lifecycleHooks.forEach(e=>{e!==op.OnDestroy&&t.providerType!==ml.Directive&&t.providerType!==ml.Component||(n|=_p(e))});const{providerExpr:s,flags:r,depsExpr:i}=t.multiProvider?function(e,t,n){const s=[],r=[],i=n.map((t,n)=>{let s;if(t.useClass){const r=o(n,t.deps||t.useClass.diDeps);s=e.importExpr(t.useClass.reference).instantiate(r)}else if(t.useFactory){const r=o(n,t.deps||t.useFactory.diDeps);s=e.importExpr(t.useFactory.reference).callFn(r)}else if(t.useExisting){s=o(n,[{token:t.useExisting}])[0]}else s=tp(e,t.useValue);return s});return{providerExpr:xt(r,[new rt(Ct(i))],re),flags:1024|t,depsExpr:Ct(s)};(e,n,t.providers):gp(e,n,t.providerType,t.providers[0]);return{providerExpr:s,flags:r,depsExpr:i,tokenExpr:yp(e,t.token)}} * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */onst Ep=vt("_l");/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 *//**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class xp extends Wr{const{name:s,moduleName:r}=e;if(this.referenceFilter&&this.referenceFilter(e))n.print(null,"(null as any)");else{if(r&&(!this.importFilter||!this.importFilter(e))){let e=this.importsWithPrefixes.get(r);null==e&&(e=`i${this.importsWithPrefixes.size}`,this.importsWithPrefixes.set(r,e)),n.print(null,`${e}.`)}if(n.print(null,s),this.typeExpression>0){(t||[]).length>0&&(n.print(null,"<"),this.visitAllObjects(t,n,","),n.print(null,">"))}}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 *//**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Ap="_any";new class{
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const Dp="class",Pp="style";nst Ip=vt("_l"),Np=vt("_v"),Mp=vt("_ck"),Fp=vt("_co"),Rp=vt("en"),jp=vt("ad");class Lp{ild(e=[]){this.children.forEach(t=>t.build(e));const{updateRendererStmts:t,updateDirectivesStmts:n,nodeDefExprs:s}=this._createNodeExpressions(),r=this._createUpdateFn(t),i=this._createUpdateFn(n);let o=0;this.parent||this.component.changeDetection!==P.OnPush||(o|=2);const a=new nt(this.viewName,[new Ve(Ip.name)],[new rt(_t(cn.viewDef).callFn([At(o),Ct(s),i,r]))],bt(cn.ViewDefinition),0===this.embeddedViewIndex?[Je.Exported]:[]);return e.push(a),e}tReceiverUse(){}rective(e,t){}visitDirectiveProperty(e,t){}visitReference(e,t){}visitVariable(e,t){}visitEvent(e,t){}visitElementProperty(e,t){}visitAttr(e,t){}}unction $p(e){const t=Object.create(null);return e.attrs.forEach(e=>{t[e.name]=e.value}),e.directives.forEach(e=>{Object.keys(e.directive.hostAttributes).forEach(n=>{const s=e.directive.hostAttributes[n],r=t[n];var i,o,a;t[n]=null!=r?(o=r,a=s,(i=n)==Dp||i==Pp?`${o} ${a}`:a):s})}),Ct(Object.keys(t).sort().map()}ction qp(e){let t=0;return e.first&&e.static?t|=268435456:t|=536870912,t}/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const Wp="useValue";new Set([Wp,"useFactory","data","id","loadChildren"]);p.missing={},Gp.empty={resolve:e=>Gp.missing};/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class Qp{}ss Yp{constructor(e){this.value=e}}class ed{constructor(e){this.reflector=e}itWrappedNodeExpr(e,t){throw new Error("Cannot interpret a WrappedNodeExpr.")}visitTypeofExpr(e,t){throw new Error("Cannot interpret a TypeofExpr")}tInvokeFunctionExpr(e,t){const n=this.visitAllExpressions(e.args,t),s=e.fn;if(s instanceof ge&&s.builtin===he.Super)return t.instance.constructor.prototype.constructor.apply(t.instance,n),null;return e.fn.visitExpression(this,t).apply(null,n)}sitExpressionStmt(e,t){return e.expr.visitExpression(this,t)}tLiteralExpr(e,t){return e.value}visitLocalizedString(e,t){return null}itAssertNotNullExpr(e,t){return e.condition.visitExpression(this,t)}tBinaryOperatorExpr(e,t){const n=()=>e.lhs.visitExpression(this,t),s=switch(e.operator){case ue.Equals:return n()==s();case ue.Identical:return n()===s();case ue.NotEquals:return n()!=s();case ue.NotIdentical:return n()!==s();case ue.And:return n()&&s();case ue.Or:return n()||s();case ue.Plus:return n()+s();case ue.Minus:return n()-s();case ue.Divide:return n()/s();case ue.Multiply:return n()*s();case ue.Modulo:return n()%s();case ue.Lower:return n()<s();case ue.LowerEquals:return n()<=s();case ue.Bigger:return n()>s();case ue.BiggerEquals:return n()>=s();default:throw new Error(`Unknown operator ${e.operator}`)}}AllExpressions(e,t){return e.map(e=>e.visitExpression(this,t))}onst nd="error",sd="stack";
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class rd{ompileModuleSync(e){return jt(this._compileModuleAndComponents(e,!0))}compileModuleAsync(e){return Promise.resolve(this._compileModuleAndComponents(e,!1))}r(e){this._compiledNgModuleCache.delete(e),this._metadataResolver.clearCacheFor(e),this._compiledHostTemplateCache.delete(e);this._compiledTemplateCache.get(e)&&this._compiledTemplateCache.delete(e)}icense
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class ld{}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const cd=onst hd=new RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([\\w\\d\\-\\u0100-\\uffff.%]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");var pd;function dd(e){return e.match(hd)}function(e){e[e.Scheme=1]="Scheme",e[e.UserInfo=2]="UserInfo",e[e.Domain=3]="Domain",e[e.Port=4]="Port",e[e.Path=5]="Path",e[e.QueryData=6]="QueryData",e[e.Fragment=7]="Fragment"}(pd||(pd={}));
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
!Jt)}).call(this,n("yLpj"))},"24Ii":function(e,t,n){let s;"undefined"!=typeof window?s=window:"undefined"!=typeof self?s=self:(console.warn("Using browser-only version of superagent in non-browser environment"),s=this);const r=n("cpc2"),i=n("kMlx"),o=n("8zgK"),a=n("/yFf"),l=n("nZbv");onst u=t=e.exports=t.Request=y,u.getXHR=()=>{if(!(!s.XMLHttpRequest||s.location&&"file:"==s.location.protocol&&s.ActiveXObject))return new XMLHttpRequest;try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(e){}try{return new ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(e){}try{return new ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(e){}try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(e){}throw Error("Browser-only version of superagent could not find XHR")};const h="".trim?e=>e.trim():e=>e.replace(/(^\s*|\s*$)/g,"");unction d(e,t,n){if(null!=n)if(Array.isArray(n))n.forEach(;else if(o(n))for(const s in n)d(e,`${t}[${s}]`,n[s]);else e.push(encodeURIComponent(t)+"="+encodeURIComponent(n));else null===n&&e.push(encodeURIComponent(t))}function f(e){const t={},n=e.split("&");let s,r;for(let i=0,o=n.length;i<o;++i)s=n[i],r=s.indexOf("="),-1==r?t[decodeURIComponent(s)]="":t[decodeURIComponent(s.slice(0,r))]=decodeURIComponent(s.slice(r+1));return t}unction g(e){this.req=e,this.xhr=this.req.xhr,this.text="HEAD"!=this.req.method&&(""===this.xhr.responseType||"text"===this.xhr.responseType)||void 0===this.xhr.responseType?this.xhr.responseText:null,this.statusText=this.req.xhr.statusText;let t=this.xhr.status;1223===t&&(t=204),this._setStatusProperties(t),this.header=this.headers=this.xhr.getAllResponseHeaders()),this.header["content-type"]=this.xhr.getResponseHeader("content-type"),this._setHeaderProperties(this.header),null===this.text&&e._responseType?this.body=this.xhr.response:this.body="HEAD"!=this.req.method?this._parseBody(this.text?this.text:this.xhr.response):null}function y(e,t){const n=this;this._query=this._query||[],this.method=e,this.url=t,this.header={},this._header={},this.on("end",()=>{let e,t=null,s=null;try{s=new g(n)}catch(r){return t=new Error("Parser is unable to parse the response"),t.parse=!0,t.original=r,n.xhr?(t.rawResponse=void 0===n.xhr.responseType?n.xhr.responseText:n.xhr.response,t.status=n.xhr.status?n.xhr.status:null,t.statusCode=t.status):(t.rawResponse=null,t.status=null),n.callback(t)}n.emit("response",s);try{n._isResponseOK(s)||(e=new Error(s.statusText||"Unsuccessful HTTP response"))}catch(i){e=i}e?(e.original=t,e.response=s,e.status=s.status,n.callback(e,s)):n.callback(null,s)})}.serializeObject=p,u.parseString=f,u.types={html:"text/html",json:"application/json",xml:"text/xml",urlencoded:"application/x-www-form-urlencoded",form:"application/x-www-form-urlencoded","form-data":"application/x-www-form-urlencoded"},u.serialize={"application/x-www-form-urlencoded":p,"application/json":JSON.stringify},u.parse={"application/x-www-form-urlencoded":f,"application/json":JSON.parse},a(g.prototype),g.prototype._parseBody=g.prototype.toError=u.Response=g,r(y.prototype),i(y.prototype),y.prototype.type=function(e){return this.set("Content-Type",u.types[e]||e),this},y.prototype.accept=y.prototype.auth=function(e,t,n){1===arguments.length&&(t=""),"object"==typeof t&&null!==t&&(n=t,t=""),n||(n={type:"function"==typeof btoa?"basic":"auto"});const s=return this._auth(e,t,n,s)},y.prototype.query=y.prototype.attach=y.prototype._getFormData=y.prototype.callback=y.prototype.crossDomainError=y.prototype.buffer=y.prototype.ca=y.prototype.agent=y.prototype.pipe=y.prototype.write=y.prototype._isHost=y.prototype.end=y.prototype._end=function(){if(this._aborted)return this.callback(Error("The request has been aborted even before .end() was called"));const e=this,t=this.xhr=u.getXHR();let n=this._formData||this._data;this._setTimeouts(),t.onreadystatechange=()=>{const n=t.readyState;if(n>=2&&e._responseTimeoutTimer&&clearTimeout(e._responseTimeoutTimer),4!=n)return;let s;try{s=t.status}catch(r){s=0}if(!s){if(e.timedout||e._aborted)return;return e.crossDomainError()}e.emit("end")};const s=(t,n)=>{n.total>0&&(n.percent=n.loaded/n.total*100),n.direction=t,e.emit("progress",n)};if(this.hasListeners("progress"))try{t.onprogress=s.bind(null,"download"),t.upload&&(t.upload.onprogress=s.bind(null,"upload"))}catch(r){}try{this.username&&this.password?t.open(this.method,this.url,!0,this.username,this.password):t.open(this.method,this.url,!0)}catch(i){return this.callback(i)}if(this._withCredentials&&(t.withCredentials=!0),!this._formData&&"GET"!=this.method&&"HEAD"!=this.method&&"string"!=typeof n&&!this._isHost(n)){const e=this._header["content-type"];let t=this._serializer||u.serialize[e?e.split(";")[0]:""];!t&&m(e)&&(t=u.serialize["application/json"]),t&&(n=t(n))}for(const o in this.header)null!=this.header[o]&&this.header.hasOwnProperty(o)&&t.setRequestHeader(o,this.header[o]);this._responseType&&(t.responseType=this._responseType),this.emit("request",this),t.send(void 0!==n?n:null)},u.agent=["GET","POST","OPTIONS","PATCH","PUT","DELETE"].forEach(e=>{l.prototype[e.toLowerCase()]=),l.prototype.del=l.prototype.delete,u.get=(e,t,n)=>{const s=u("GET",e);return"function"==typeof t&&(n=t,t=null),t&&s.query(t),n&&s.end(n),s},u.head=(e,t,n)=>{const s=u("HEAD",e);return"function"==typeof t&&(n=t,t=null),t&&s.query(t),n&&s.end(n),s},u.options=(e,t,n)=>{const s=u("OPTIONS",e);return"function"==typeof t&&(n=t,t=null),t&&s.send(t),n&&s.end(n),s},u.del=v,u.delete=v,u.patch=(e,t,n)=>{const s=u("PATCH",e);return"function"==typeof t&&(n=t,t=null),t&&s.send(t),n&&s.end(n),s},u.post=(e,t,n)=>{const s=u("POST",e);return"function"==typeof t&&(n=t,t=null),t&&s.send(t),n&&s.end(n),s},u.put=,"2QA8":"2fFW":"3t9w":function(e,t){e.exports=e=>Array.from(new Set(e))},"5+tZ":"51Dv":"56io":function(e,t,n){"use strict";e.exports=(e,t,n)=>{e&&void 0===e[t]&&(e[t]=n)}},"6rNy":function(e,t,n){"use strict";const s=n("Qup9"),r=n("Qwta"),i=n("3t9w"),o={filter:function(e,t){return!e||"string"==typeof e&&void 0===t||("string"==typeof e&&(e=r(e,t)),this._filters={...this._filters,...e}),this},taxonomy:function(e,t){const n=Array.isArray(t),r=n?t.reduce((e,t)=>e&&"number"==typeof t,!0):"number"==typeof t,o=n?t.reduce((e,t)=>e&&"string"==typeof t,!0):"string"==typeof t;if(!o&&!r)throw new Error("term must be a number, string, or array of numbers or strings");"category"===e?e=o?"category_name":"cat":"post_tag"===e&&(e="tag"),this._taxonomyFilters=this._taxonomyFilters||{};const a=(this._taxonomyFilters[e]||[]).concat(t).sort(s);return this._taxonomyFilters[e]=i(a,!0),this},year:function(e){return o.filter.call(this,"year",e)},month:function(e){let t;if("string"==typeof e){if(t=new Date(Date.parse(e+" 1, 2012")),isNaN(t))return this;e=t.getMonth()+1}return"number"==typeof e?o.filter.call(this,"monthnum",e):this},day:function(e){return o.filter.call(this,"day",e)},path:;e.exports=o},"7o/Q":"7vnS":"8Y7J":function(e,t,n){"use strict";(function(e){n.d(t,"a",function(){return Ot}),n.d(t,"b",function(){return Hl}),n.d(t,"c",function(){return $l}),n.d(t,"d",function(){return Bl}),n.d(t,"e",function(){return eu}),n.d(t,"f",function(){return Rc}),n.d(t,"g",function(){return Pt}),n.d(t,"h",function(){return ac}),n.d(t,"i",function(){return us}),n.d(t,"j",function(){return T}),n.d(t,"k",function(){return fo}),n.d(t,"l",function(){return oc}),n.d(t,"m",function(){return lc}),n.d(t,"n",function(){return kl}),n.d(t,"o",function(){return Fi}),n.d(t,"p",function(){return Li}),n.d(t,"q",function(){return Mi}),n.d(t,"r",function(){return Jl}),n.d(t,"s",function(){return Pl}),n.d(t,"t",function(){return qi}),n.d(t,"u",function(){return cs}),n.d(t,"v",function(){return Tl}),n.d(t,"w",function(){return en}),n.d(t,"x",function(){return Ml}),n.d(t,"y",function(){return Cr}),n.d(t,"z",function(){return Zt}),n.d(t,"A",function(){return Jr}),n.d(t,"B",function(){return kt}),n.d(t,"C",function(){return Ar}),n.d(t,"D",function(){return Il}),n.d(t,"E",function(){return ao}),n.d(t,"F",function(){return lo}),n.d(t,"G",function(){return Zl}),n.d(t,"H",function(){return ec}),n.d(t,"I",function(){return Ll}),n.d(t,"J",function(){return Eo}),n.d(t,"K",function(){return wo}),n.d(t,"L",function(){return Oc}),n.d(t,"M",function(){return hc}),n.d(t,"N",function(){return Jt}),n.d(t,"O",function(){return Nl}),n.d(t,"P",function(){return Kl}),n.d(t,"Q",function(){return Wl}),n.d(t,"R",function(){return zl}),n.d(t,"S",function(){return Ol}),n.d(t,"T",function(){return Dl}),n.d(t,"U",function(){return Wi}),n.d(t,"V",function(){return zi}),n.d(t,"W",function(){return vs}),n.d(t,"X",function(){return Ki}),n.d(t,"Y",function(){return is}),n.d(t,"Z",function(){return Xt}),n.d(t,"ab",function(){return Yt}),n.d(t,"bb",function(){return Xl}),n.d(t,"cb",function(){return Yl}),n.d(t,"db",function(){return bo}),n.d(t,"eb",function(){return vc}),n.d(t,"fb",function(){return Qi}),n.d(t,"gb",function(){return Nt}),n.d(t,"hb",function(){return So}),n.d(t,"ib",function(){return D}),n.d(t,"jb",function(){return Ic}),n.d(t,"kb",function(){return Tc}),n.d(t,"lb",function(){return p}),n.d(t,"mb",function(){return xc}),n.d(t,"nb",function(){return Xc}),n.d(t,"ob",function(){return bc}),n.d(t,"pb",function(){return Vi}),n.d(t,"qb",function(){return Ql}),n.d(t,"rb",function(){return va}),n.d(t,"sb",function(){return _a}),n.d(t,"tb",function(){return xr}),n.d(t,"ub",function(){return Oi}),n.d(t,"vb",function(){return Gt}),n.d(t,"wb",function(){return ss}),n.d(t,"xb",function(){return Fn}),n.d(t,"yb",function(){return Cn}),n.d(t,"zb",function(){return tu}),n.d(t,"Ab",function(){return xn}),n.d(t,"Bb",function(){return Pn}),n.d(t,"Cb",function(){return An}),n.d(t,"Db",function(){return Tn}),n.d(t,"Eb",function(){return Dn}),n.d(t,"Fb",function(){return Na}),n.d(t,"Gb",function(){return Ah}),n.d(t,"Hb",function(){return Ho}),n.d(t,"Ib",function(){return el}),n.d(t,"Jb",function(){return nu}),n.d(t,"Kb",function(){return Ai}),n.d(t,"Lb",function(){return Zc}),n.d(t,"Mb",function(){return Di}),n.d(t,"Nb",function(){return Pi}),n.d(t,"Ob",function(){return Sn}),n.d(t,"Pb",function(){return I}),n.d(t,"Qb",function(){return ga}),n.d(t,"Rb",function(){return ma}),n.d(t,"Sb",function(){return Wr}),n.d(t,"Tb",function(){return Ei}),n.d(t,"Ub",function(){return wi}),n.d(t,"Vb",function(){return xa}),n.d(t,"Wb",function(){return Sa}),n.d(t,"Xb",function(){return pu}),n.d(t,"Yb",function(){return qa}),n.d(t,"Zb",function(){return mu}),n.d(t,"ac",function(){return tl}),n.d(t,"bc",function(){return gu}),n.d(t,"cc",function(){return fu}),n.d(t,"dc",function(){return nl}),n.d(t,"ec",function(){return au}),n.d(t,"fc",function(){return Ti}),n.d(t,"gc",function(){return Cl}),n.d(t,"hc",function(){return oe}),n.d(t,"ic",function(){return c}),n.d(t,"jc",function(){return vu}),n.d(t,"kc",function(){return Vo}),n.d(t,"lc",function(){return En}),n.d(t,"mc",function(){return wu}),n.d(t,"nc",function(){return m}),n.d(t,"oc",function(){return cn});var s=n("XNiG"),r=n("quSY"),i=n("HDdC"),o=n("VRyK"),a=n("w1tV");
/**
 * @license Angular v11.0.7
 * (c) 2010-2020 Google LLC. https://angular.io/
 * License: MIT
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const h=l({__forward_ref__:l});*
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
t _=l({"\u0275prov":l}),b=(l({"\u0275inj":l}),l({ngInjectableDef:l}));l({ngInjectorDef:l});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var w;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
let E;function C(e){const t=E;return E=e,t}/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */var T,A,D;!function(e){e[e.Default=0]="Default",e[e.Host=1]="Host",e[e.Self=2]="Self",e[e.SkipSelf=4]="SkipSelf",e[e.Optional=8]="Optional"}(w||(w={})),function(e){e[e.OnPush=0]="OnPush",e[e.Default=1]="Default"}(T||(T={})),function(e){e[e.CheckOnce=0]="CheckOnce",e[e.Checked=1]="Checked",e[e.CheckAlways=2]="CheckAlways",e[e.Detached=3]="Detached",e[e.Errored=4]="Errored",e[e.Destroyed=5]="Destroyed"}(A||(A={})),function(e){e[e.Emulated=0]="Emulated",e[e.None=2]="None",e[e.ShadowDom=3]="ShadowDom"}(D||(D={}));
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const P="undefined"!=typeof globalThis&&globalThis,k="undefined"!=typeof window&&window,O="undefined"!=typeof self&&"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&self,I=P||void 0!==e&&e||k||O;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const N={};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const M=l({"\u0275cmp":l}),F=(l({"\u0275dir":l}),l({"\u0275pipe":l}),l({"\u0275mod":l}),l({"\u0275loc":l}),l({"\u0275fac":l})),R=l({__NG_ELEMENT_ID__:l});function j(e){return e[M]||null}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const L=20,V=10;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */nction Q(e,t){const n=t?`. Dependency path: ${t.join(" > ")} > ${e}`:"";throw new z("200",`Circular dependency in DI detected for ${e}${n}`)}/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 *//**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function X(){return Y}gInherit=!0;function ne(e){return e.__ngSimpleChanges__||null}const se="http://www.w3.org/2000/svg",re="http://www.w3.org/1998/MathML/";
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
let ie;function oe(e){ie=e}/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */var le;function(e){e[e.Important=1]="Important",e[e.DashCase=2]="DashCase"}(le||(le={}));const ue={createRenderer:;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
unction pe(e,t){const n=he(t[e.index]);return n}function de(e,t){const n=e.data[t];return n}ction ye(e){return 4==(4&e[2])}*
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const we={lFrame:Le(null),bindingsEnabled:!0,isInCheckNoChangesMode:!1};function Ee(){return we.lFrame.lView}unction Se(){return we.lFrame.currentTNode}nction Ae(){return we.lFrame.isParent}tion Ie(e){we.lFrame.currentDirectiveIndex=e}function Ne(e){we.lFrame.currentQueryIndex=e}unction Fe(e,t,n){if(n&w.SkipSelf){let s=t,r=e;for(;!(s=s.parent,null!==s||n&w.Host||(s=Me(r),null===s)||(r=r[15],10&s.type)););if(null===s)return!1;t=s,e=r}const s=we.lFrame=je();return s.currentTNode=t,s.lView=e,!0}function Re(e){const t=je();const n=e[1];we.lFrame=t,t.currentTNode=n.firstChild,t.lView=e,t.tView=n,t.contextLView=e,t.bindingIndex=n.bindingStartIndex,t.inI18n=!1}st $e=Ve;ction qe(e,t){for(let n=t.directiveStart,s=t.directiveEnd;n<s;n++){const t=e.data[n],s=t.type.prototype,{ngAfterContentInit:r,ngAfterContentChecked:i,ngAfterViewInit:o,ngAfterViewChecked:a,ngOnDestroy:l}=s;r&&(e.contentHooks||(e.contentHooks=[])).push(-n,r),i&&((e.contentHooks||(e.contentHooks=[])).push(n,i),(e.contentCheckHooks||(e.contentCheckHooks=[])).push(n,i)),o&&(e.viewHooks||(e.viewHooks=[])).push(-n,o),a&&((e.viewHooks||(e.viewHooks=[])).push(n,a),(e.viewCheckHooks||(e.viewCheckHooks=[])).push(n,a)),null!=l&&(e.destroyHooks||(e.destroyHooks=[])).push(n,l)}}ction Ke(e,t,n,s){const r=void 0!==s?65535&e[18]:0,i=null!=s?s:-1,o=t.length-1;let a=0;for(let l=r;l<o;l++){if("number"==typeof t[l+1]){if(a=t[l],null!=s&&a>=s)break}else{t[l]<0&&(e[18]+=65536),(a<i||-1==i)&&(Qe(e,n,t,l),e[18]=(4294901760&e[18])+l+2),l++}}}function Qe(e,t,n,s){const r=n[s]<0,i=n[s+1],o=e[r?-n[s]:n[s]];if(r){e[2]>>11<e[18]>>16&&(3&e[2])===t&&(e[2]+=2048,i.call(o))}else i.call(o)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Ze=-1;*
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
nction nt(e,t){let n=e>>16;let s=t;for(;n>0;)s=s[15],n--;return s}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */let st=!0;function rt(e){const t=st;return st=e,t}let it=0;tion ut(e,t,n){!function(e,t,n){let s;"string"==typeof n?s=n.charCodeAt(0)||0:n.hasOwnProperty(R)&&(s=n[R]),null==s&&(s=n[R]=it++);const r=255&s,i=1<<r,o=128&r,a=64&r,l=32&r,c=t.data;o?a?l?c[e+7]|=i:c[e+6]|=i:l?c[e+5]|=i:c[e+4]|=i:a?l?c[e+3]|=i:c[e+2]|=i:l?c[e+1]|=i:c[e]|=i}(e,t,n)}st ft={};ction vt(e,t,n,s){let r=e[n];const i=t.data;if(r instanceof Je){const o=r;o.resolving&&Q(K(i[n]));const a=rt(o.canSeeViewProviders);o.resolving=!0;const l=o.injectImpl?C(o.injectImpl):null;Fe(e,s,w.Default);try{r=e[n]=o.factory(void 0,i,e,s),t.firstCreatePass&&n>=s.directiveStart&&
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
n,i[n],t)}finally{null!==l&&C(l),rt(a),o.resolving=!1,$e()}}return r}function _t(e,t,n){const s=1<<e,r=64&e,i=32&e;let o;return o=128&e?r?i?n[t+7]:n[t+6]:i?n[t+5]:n[t+4]:r?i?n[t+3]:n[t+2]:i?n[t+1]:n[t],!!(o&s)}**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const Et="__annotations__",Ct="__parameters__",St="__prop__metadata__";function xt(e,t,n,s,r){return x(()=>{const i=Tt(t);function o(...e){if(this instanceof o)return i.call(this,...e),this;const t=new o(...e);return function(n){r&&r(n,...e);return(n.hasOwnProperty(Et)?n[Et]:Object.defineProperty(n,Et,{value:[]})[Et]).push(t),s&&s(n),n}}return n&&(o.prototype=Object.create(n.prototype)),o.prototype.ngMetadataName=e,o.annotationCls=o,o})}*
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Pt=function(){return At("Attribute",e=>({attributeName:e}))}();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Ot=new kt("AnalyzeForEntryComponents");class It{}Dt("ContentChildren",(e,t={})=>Object.assign({selector:e,first:!1,isViewQuery:!1,descendants:!1},t),It),Dt("ContentChild",(e,t={})=>Object.assign({selector:e,first:!0,isViewQuery:!1,descendants:!0},t),It),Dt("ViewChildren",It);const Nt=Dt("ViewChild",It);
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var Mt,Ft,Rt;!function(e){e[e.Token=0]="Token",e[e.Attribute=1]="Attribute",e[e.ChangeDetectorRef=2]="ChangeDetectorRef",e[e.Invalid=3]="Invalid"}(Mt||(Mt={})),Ft||(Ft={})),Rt||(Rt={}));
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const jt=Function;/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const Ut=/^function\s+\S+\(\)\s*{[\s\S]+\.apply\(this,\s*(arguments|[^()]+\(arguments\))\)/,qt=/^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{/,zt=/^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{[\s\S]*constructor\s*\(/,Wt=/^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{[\s\S]*constructor\s*\(\)\s*{\s*super\(\.\.\.arguments\)/;class Gt{opyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Zt=At("Inject",,Jt=At("Optional"),Xt=At("Self"),Yt=At("SkipSelf"),en=At("Host");new Map;new Set;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const tn={},nn=/\n/gm,sn="__source",rn=l({provide:String,useValue:l});let on;ction un(e){const t=[];for(let n=0;n<e.length;n++){const s=d(e[n]);if(Array.isArray(s)){if(0===s.length)throw new Error("Arguments array must have arguments.");let e,n=w.Default;for(let t=0;t<s.length;t++){const r=s[t];r instanceof Jt||"Optional"===r.ngMetadataName||r===Jt?n|=w.Optional:r instanceof Yt||"SkipSelf"===r.ngMetadataName||r===Yt?n|=w.SkipSelf:r instanceof Xt||"Self"===r.ngMetadataName||r===Xt?n|=w.Self:r instanceof en||"Host"===r.ngMetadataName||r===en?n|=w.Host:e=r instanceof Zt||r===Zt?r.token:r}t.push(cn(e,n))}else t.push(cn(s))}return t}**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */let dn;**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
lass yn extends gn{getTypeName(){return"HTML"}}class vn extends gn{getTypeName(){return"Style"}}class _n extends gn{getTypeName(){return"Script"}}class bn extends gn{getTypeName(){return"URL"}}tion xn(e){return new yn(e)}function Tn(e){return new vn(e)}function An(e){return new _n(e)}function Dn(e){return new bn(e)}/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */st Nn=/^(?:(?:https?|mailto|ftp|tel|file|sms):|[^&:/?#]*(?:[/?#]|$))/gi,Mn=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */nst Vn=jn("area,br,col,hr,img,wbr"),$n=jn("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),Bn=jn("rp,rt"),Hn=Ln(Bn,$n),Un=Ln($n,jn("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")),qn=Ln(Bn,jn("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")),zn=Ln(Vn,Un,qn,Hn),Wn=jn("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),Gn=jn("srcset"),Kn=jn("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"),Qn=jn("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext"),Zn=Ln(Wn,Gn,Kn,Qn),Jn=jn("script,style,template");onst Yn=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,es=/([^\#-~ |!])/g;et ns;function ss(e,t){let n=null;try{ns=ns||kn(e);let s=t?String(t):"";n=ns.getInertBodyElement(s);let r=5,i=s;do{if(0===r)throw new Error("Failed to sanitize html because the input is unstable");r--,s=i,i=n.innerHTML,n=ns.getInertBodyElement(s)}while(s!==i);const o=new Xn;return o.sanitizeChildren(rs(n)||n)}finally{if(n){const e=rs(n)||n;for(;e.firstChild;)e.removeChild(e.firstChild)}}}ar is;!function(e){e[e.NONE=0]="NONE",e[e.HTML=1]="HTML",e[e.STYLE=2]="STYLE",e[e.SCRIPT=3]="SCRIPT",e[e.URL=4]="URL",e[e.RESOURCE_URL=5]="RESOURCE_URL"}(is||(is={}));function os(e){return e.ngDebugContext}**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 *//**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const us={name:"custom-elements"},hs=/-->/g;/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function ds(e){var t;return t=e.replace(/[$@]/g,"_"),`ng-reflect-${e=t.replace(fs,}`}const fs=/([A-Z])/g;/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 *//**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const ys=("undefined"!=typeof requestAnimationFrame&&requestAnimationFrame||setTimeout).bind(I);
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var vs;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
let _s;vs||(vs={}));
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
unction Es(e){return Ss(e[13])}**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function xs(e,t,n,s,r){if(null!=s){let i,o=!1;B(s)?i=s:$(s)&&(o=!0,s=s[0]);const a=he(s);0===e&&null!==n?null==r?Os(t,n,a):ks(t,n,a,r||null,!0):1===e&&null!==n?ks(t,n,a,r||null,!0):2===e?Ns(t,a,o):3===e&&t.destroyNode(a),null!=i&&function(e,t,n,s,r){const i=n[7],o=he(n);i!==o&&xs(t,e,s,i,r);for(let a=V;a<n.length;a++){const r=n[a];Fs(r[1],r,e,t,s,i)}}(t,e,i,n,r)}}ction Ps(e,t){if(!(256&t[2])){t[2]&=-129,t[2]|=256,e,t),function(e,t){const n=e.cleanup,s=t[7];let r=-1;if(null!==n)for(let i=0;i<n.length-1;i+=2)if("string"==typeof n[i]){const e=n[i+1],o="function"==typeof e?e(t):he(t[e]),a=s[r=n[i+2]],l=n[i+3];"boolean"==typeof l?o.removeEventListener(n[i],a,l):l>=0?s[r=l]():s[r=-l].unsubscribe(),i+=2}else{const e=s[r=n[i+1]];n[i].call(e)}if(null!==s){for(let e=r+1;e<s.length;e++){const t=s[e];t()}t[7]=null}}(e,t),1===t[1].type&&ce(t[11])&&t[11].destroy();const n=t[17];if(null!==n&&B(t[3])){n!==t[3]&&As(n,t);const s=t[19];null!==s&&s.detachView(e)}}}license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */*
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const Hs={};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Us(e,t,n,s){if(!s){if(3==(3&t[2])){const s=e.preOrderCheckHooks;null!==s&&ze(t,s,n)}else{const s=e.preOrderHooks;null!==s&&We(t,s,0,n)}}Ue(n)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const qs=Promise.resolve(null);ction Ks(e,t,n,s,r){const i=Se(),o=Ae(),a=o?i:i&&i.parent,l=e.data[t]=function(e,t,n,s,r,i){let o=t?t.injectorIndex:-1;const a={type:n,index:s,insertBeforeIndex:null,injectorIndex:o,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,propertyBindings:null,flags:0,providerIndexes:0,value:r,attrs:i,mergedAttrs:null,localNames:null,initialInputs:void 0,inputs:null,outputs:null,tViews:null,next:null,projectionNext:null,child:null,parent:t,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0};0;return a}(0,a,n,t,s,r);return null===e.firstChild&&(e.firstChild=l),null!==i&&(o?null==i.child&&null!==l.parent&&(i.child=l):null===i.next&&(i.next=l)),l}nction Js(e,t,n,s){const r=t[2];if(256==(256&r))return;Re(t);const i=De();try{_e(t),ke(e.bindingStartIndex),null!==n&&Ys(e,t,n,2,s);const o=3==(3&r);if(!i)if(o){const n=e.preOrderCheckHooks;null!==n&&ze(t,n,null)}else{const n=e.preOrderHooks;null!==n&&We(t,n,0,null),Ge(t,0)}if(t),t),null!==e.contentQueries&&zs(e,t),!i)if(o){const n=e.contentCheckHooks;null!==n&&ze(t,n)}else{const n=e.contentHooks;null!==n&&We(t,n,1),Ge(t,1)}!e,t);const a=e.components;null!==a&&t,a);const l=e.viewQuery;if(null!==l&&yr(2,l,s),!i)if(o){const n=e.viewCheckHooks;null!==n&&ze(t,n)}else{const n=e.viewHooks;null!==n&&We(t,n,2),Ge(t,2)}!0===e.firstUpdatePass&&(e.firstUpdatePass=!1),i||(t[2]&=-73),1024&t[2]&&(t[2]&=-1025,be(t[3],-1))}finally{Be()}}ction tr(e,t,n,s,r,i,o,a,l,c){const u=L+s,h=u+r,p=u,h),d="function"==typeof c?c():c,f=p[1]={type:e,blueprint:p,template:n,queries:null,viewQuery:a,declTNode:t,data:p.slice().fill(null,u),bindingStartIndex:u,expandoStartIndex:h,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:"function"==typeof i?i():i,pipeRegistry:"function"==typeof o?o():o,firstChild:null,schemas:l,consts:d,incompleteFirstPass:!1};return f} @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const Cr=new kt("INJECTOR",-1);
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 *//**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const xr=new kt("Set Injector scope.");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Tr=
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
r.THROW_IF_NOT_FOUND=tn,Ar.NULL=new Sr,Ar.\u0275prov=m({token:Ar,providedIn:"any",factory:),Ar.__NG_ELEMENT_ID__=-1;const Dr=Pr=[],kr=Dr,Or=class Ir{constructor(e,t=Ar.NULL,n=null){this.parent=t,this.source=n;const s=this._records=new Map;s.set(Ar,{token:Ar,fn:Dr,deps:Pr,value:this,useNew:!1}),s.set(Cr,{token:Cr,fn:Dr,deps:Pr,value:this,useNew:!1}),this.scope=Fr(s,e)}get(e,t,n=w.Default){const s=this._records;let r=s.get(e);if(void 0===r){const t=y(e);if(t){const n=t&&t.providedIn;("any"===n||null!=n&&n===this.scope)&&s.set(e,r=Nr({provide:e,useFactory:t.factory,deps:Pr}))}void 0===r&&s.set(e,null)}let i=an(this);try{return Rr(e,r,s,this.parent,t,n)}catch(o){return hn(o,e,"StaticInjectorError",this.source)}finally{an(i)}}function Nr(e){const t=function(e){let t=Pr;const n=e.deps;if(n&&n.length){t=[];for(let e=0;e<n.length;e++){let s=6,r=d(n[e]);if(Array.isArray(r))for(let e=0,t=r;e<t.length;e++){const n=t[e];n instanceof Jt||n==Jt?s|=1:n instanceof Yt||n==Yt?s&=-3:n instanceof Xt||n==Xt?s&=-5:r=n instanceof Zt?n.token:d(n)}t.push({token:r,options:s})}}else if(e.useExisting){t=[{token:d(e.useExisting),options:6}]}else if(!n&&!(rn in e))throw jr("'deps' required",e);return t}(e);let n=Dr,s=Pr,r=!1,i=d(e.provide);if(rn in e)s=e.useValue;else if(e.useFactory)n=e.useFactory;else if(e.useExisting);else if(e.useClass)r=!0,n=d(e.useClass);else{if("function"!=typeof i)throw jr("StaticProvider does not have [useValue|useFactory|useExisting|useClass] or [provide] is not newable",e);r=!0,n=i}return{deps:t,fn:n,useNew:r,value:s}}unction Fr(e,t){let n=null;if(t)if(t=d(t),Array.isArray(t))for(let s=0;s<t.length;s++)n=Fr(e,t[s])||n;else{if("function"==typeof t)throw jr("Function/Class not supported",t);if(!t||"object"!=typeof t||!t.provide)throw jr("Unexpected provider",t);{let s=d(t.provide);const r=Nr(t);if(!0===t.multi){let n=e.get(s);if(n){if(n.fn!==Or)throw Mr(s)}else e.set(s,n={token:t.provide,deps:[],useNew:!1,fn:Or,value:Pr});s=t,n.deps.push({token:s,options:6})}const i=e.get(s);if(i&&i.fn==Or)throw Mr(s);s===xr&&(n=r.value),e.set(s,r)}}return n}function Rr(e,t,n,s,r,i){try{return function(e,t,n,s,r,i){let o;if(!t||i&w.SkipSelf)o=i&w.Self?i&w.Optional?Ar.NULL.get(e,void 0!==r?r:null):Ar.NULL.get(e,r):s.get(e,r,w.Default);else{if(o=t.value,o==kr)throw Error("\u0275Circular dependency");if(o===Pr){let e;t.value=kr;let r=t.useNew,i=t.fn,a=t.deps,l=Pr;if(a.length){l=[];for(let e=0;e<a.length;e++){const t=a[e],r=t.options,i=2&r?n.get(t.token):void 0;l.push(Rr(t.token,i,n,i||4&r?s:Ar.NULL,1&r?null:Ar.THROW_IF_NOT_FOUND,w.Default))}}t.value=o=r?new i(...l):i.apply(e,l)}}return o}(e,t,n,s,r,i)}catch(o){o instanceof Error||(o=new Error(o));throw(o.ngTempTokenPath=o.ngTempTokenPath||[]).unshift(e),t&&t.value==kr&&(t.value=Pr),o}}/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */unction Vr(e,t,n,s,r){const i=n[1],o=function(e,t,n){const s=Ce();if(e.firstCreatePass){n.providersResolver&&n.providersResolver(n);lr(e,s,t,Qs(e,t,1,null),n)}const r=vt(t,e,s.directiveStart,s);gs(r,t);const i=pe(s,t);return i&&gs(i,t),r}(i,n,t);if(s.components.push(o),e[8]=o,r&&r.forEach(e=>e(o,t)),t.contentQueries){const e=Ce();t.contentQueries(1,o,e.directiveStart)}const a=Ce();if(i.firstCreatePass&&(null!==t.hostBindings||null!==t.hostAttrs)){Ue(a.index);rr(n[1],a,0,a.directiveStart,a.directiveEnd,t),ir(t,o)}return o}unction Br(e,t){const n=ge(e),s=n[1],r=Ce();qe(s,r)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
let Hr=null;/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */l({provide:String,useValue:l});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const Kr=l({provide:String,useValue:l}),Qr=[];function Zr(e,t){if(!t){const t=(new Gt).parameters(e);return()=>new e(...un(t))}if(Kr in t){const e=t;return()=>e.useValue}if(t.useExisting){const e=t;returnif(t.useFactory){const e=t;returnif(t.useClass){const n=t;let s=t.deps;if(!s){const t=new Gt;s=t.parameters(e)}return()=>new(d(n.useClass))(...un(s))}{let n=t.deps;if(!n){const t=new Gt;n=t.parameters(e)}return}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Jr=xt("Injectable",void 0,void 0,void 0,(e,t)=>Xr(e,t));const Xr= * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */onst ii=new 
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const oi=new new Gt);
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */onst li=[];lass ui{constructor(e,t){this.factory=e,this.dependencies=t}} @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const vi={};lass bi{ntiateResolved(e){return this._instantiateProvider(e)}new(e){if(this._constructionCounter++>this._getMaxNumberOfObjects())throw t=this,n=e.key,ei(t,n,function(e){return`Cannot instantiate cyclic dependency!${Yr(e)}`});var t,n;return this._instantiateProvider(e)}_getMaxNumberOfObjects(){return this.objs.length}instantiate(e,t){const n=t.factory;let s,r;try{s=t.dependencies.map(e=>this._getByReflectiveDependency(e))}catch(l){throw l.addKey&&l.addKey(this,e.key),l}try{r=n(...s)}catch(l){throw i=this,o=l,l.stack,a=e.key,ei(i,a,o)}var i,o,a;return r}g(){return this.displayName}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function wi(e){return!!e&&"function"==typeof e.then}function Ei(e){return!!e&&"function"==typeof e.subscribe}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */bi.INJECTOR_KEY=ri.get(Ar);
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const Ci=void 0;var Si=["en",[["a","p"],["AM","PM"],Ci],[["AM","PM"],Ci,Ci],[["S","M","T","W","T","F","S"],["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],["Su","Mo","Tu","We","Th","Fr","Sa"]],Ci,[["J","F","M","A","M","J","J","A","S","O","N","D"],["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],["January","February","March","April","May","June","July","August","September","October","November","December"]],Ci,[["B","A"],["BC","AD"],["Before Christ","Anno Domini"]],0,[6,0],["M/d/yy","MMM d, y","MMMM d, y","EEEE, MMMM d, y"],["h:mm a","h:mm:ss a","h:mm:ss a z","h:mm:ss a zzzz"],["{1}, {0}",Ci,"{1} 'at' {0}",Ci],[".",",",";","%","+","-","E","\xd7","\u2030","\u221e","NaN",":"],["#,##0.###","#,##0%","\xa4#,##0.00","#E0"],"USD","$","US Dollar",{},"ltr",;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */let xi={};i;!Oi||(Oi={}));const Ii="en-US";var Ni;!function(e){e[e.SHIFT=2]="SHIFT",e[e.APPEND_EAGERLY=1]="APPEND_EAGERLY",e[e.COMMENT=2]="COMMENT"}(Ni||(Ni={}));
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class Mi{}class Fi{}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */onst ji="ngComponent";class Li{}Li.NULL=new class{;**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 *//**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */onst Ui=Bi;class qi{constructor(e){this.nativeElement=e}}qi.__NG_ELEMENT_ID__=Ui;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
new kt("Renderer2Interceptor");class zi{}class Wi{}Wi.__NG_ELEMENT_ID__=()=>Gi();const Gi=Bi;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class Ki{}Ki.\u0275prov=m({token:Ki,providedIn:"root",factory:()=>null});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
onst Zi=new Qi("11.0.7");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */onst Xi=class Yi{orEachItem(e){let t;for(t=this._itHead;null!==t;t=t._next)e(t)}orEachPreviousItem(e){let t;for(t=this._previousItHead;null!==t;t=t._nextPrevious)e(t)}forEachAddedItem(e){let t;for(t=this._additionsHead;null!==t;t=t._nextAdded)e(t)}forEachMovedItem(e){let t;for(t=this._movesHead;null!==t;t=t._nextMoved)e(t)}forEachRemovedItem(e){let t;for(t=this._removalsHead;null!==t;t=t._nextRemoved)e(t)}forEachIdentityChange(e){let t;for(t=this._identityChangesHead;null!==t;t=t._nextIdentityChange)e(t)}nDestroy(){}* Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */*
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */o.\u0275prov=m({token:ao,providedIn:"root",factory:()=>new ao([new Ji])});/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function co(e,t,n,s,r=!1){for(;null!==n;){const i=t[n.index];if(null!==i&&s.push(he(i)),B(i))for(let e=V;e<i.length;e++){const t=i[e],n=t[1].firstChild;null!==n&&co(t[1],t,n,s)}const o=n.type;if(8&o)co(e,t,n.child,s);else if(32&o){const e=bs(n,t);let r;for(;r=e();)s.push(r)}else if(16&o){const e=t[16],r=e[6],i=n.projection,o=r.projection[i];if(Array.isArray(o))s.push(...o);else{const t=ws(e);co(t[1],t,o,s,!0)}}n=r?n.projectionNext:n.next}return s}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */lo.\u0275prov=m({token:lo,providedIn:"root",factory:);class uo{wContainerRef(e){if(this._appRef)throw new Error("This view is already attached directly to the ApplicationRef!");this._viewContainerRef=e}detachFromAppRef(){var e,t;this._appRef=null,e=this._lView[1],t=this._lView,Fs(e,t,t[11],2,null,null)}attachToAppRef(e){if(this._viewContainerRef)throw new Error("This view is already attached to a ViewContainer!");this._appRef=e}}/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const po=Bi;class fo{}fo.__NG_ELEMENT_ID__=po,fo.__ChangeDetectorRef__=!0;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const mo=[new ro],go=[new Ji],yo=new ao(go),vo=new lo(mo),_o=Bi;class bo{}bo.__NG_ELEMENT_ID__=_o;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class wo{}class Eo{}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Co=Bi;class So{}So.__NG_ELEMENT_ID__=Co;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
*
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */nction ko(e,t){return e.nodes[t]}function Oo(e,t){return e.nodes[t]}function Io(e,t){return e.nodes[t]}function No(e,t){return e.nodes[t]}onst Fo={setCurrentNode:void 0,createRootView:void 0,createEmbeddedView:void 0,createComponentView:void 0,createNgModuleRef:void 0,overrideProvider:void 0,overrideComponentView:void 0,clearOverrides:void 0,checkAndUpdateView:void 0,checkNoChangesView:void 0,destroyView:void 0,resolveDep:void 0,createDebugContext:void 0,handleEvent:void 0,updateDirectives:void 0,updateRenderer:void 0,dirtyParentQueries:void 0},Ro=()=>{},jo=new Map;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */nst $o="$$undefined",Bo="$$empty";et Uo=0;ion Qo(e,t,n,s){try{const r=e.def.nodes[t];return Go(33554432&r.flags?Oo(e,t).componentView:e),Fo.handleEvent(e,t,n,s)}catch(r){e.root.errorHandler.handleError(r)}}new WeakMap;pa=/^:([^:]+):(.+)$/; va=[],_a={},ba={},wa=Lo(Ar),Ea=Lo(Cr),Ca=Lo(wo);
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function Da(e,t,n,s){let r=t.viewContainer._embeddedViews;null==n&&(n=r.length),s.viewContainerParent=e,$t(r,n,s),t,s),Fo.dirtyParentQueries(s);ka(t,n>0?r[n-1]:null,s)}*
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Ia={};ction Ra(e,t,n){return new ja(e,t,n)}class ja{t injector(){return new Ua(this._view,this._elDef)} length(){return this._embeddedViews.length}on La(e){return new Va(e)}unction $a(e,t){return new Ba(e,t)}* @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Ga=Lo(Wi),Ka=Lo(qi),Qa=Lo(So),Za=Lo(bo),Ja=Lo(fo),Xa=Lo(Ar),Ya=Lo(Cr);tion rl(e,t){return ll(e,t)} ul={};* @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */nst _l=new kt("SCHEDULER_TOKEN",{providedIn:"root",factory:()=>ys});class bl extends Fi{et inputs(){return vl(this.componentDef.inputs)}reate(e,t,n,s){const r=(s=s||this.ngModule)?e,s.injector):e,i=r.get(zi,ue),o=r.get(Ki,null),a=i.createRenderer(null,this.componentDef),l=this.componentDef.selectors[0][0]||"div",c=n?nr(a,n,this.componentDef.encapsulation):Ts(i.createRenderer(null,this.componentDef),l,l)),u=this.componentDef.onPush?576:528,h=$r(),p=tr(0,null,null,1,0,null,null,null,null,null),d=Ws(null,p,h,u,null,null,i,a,o,r);let f,m;Re(d);try{const e=Lr(c,this.componentDef,d,i,a);if(c)if(n)Xe(a,c,["ng-version",Zi.full]);else{const{attrs:e,classes:t}=this.componentDef.selectors[0]);e&&Xe(a,c,e),t&&t.length>0&&Ls(a,c,t.join(" "))}if(m=de(p,L),void 0!==t){const e=m.projection=[];for(let n=0;n<this.ngContentSelectors.length;n++){const s=t[n];e.push(null!=s?Array.from(s):null)}}f=Vr(e,this.componentDef,d,h,[Br]),Zs(p,d,null)}finally{Be()}return new wl(this.componentType,f,Hi(m,d),d,m)}}new yl;/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const El=new Map;**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
onst Tl=xl;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */new Map,new Map;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const Pl=xt("Directive",void 0,void 0,(e,t)=>Rl(e,t)),kl=xt("Component",Pl,void 0,(e,t)=>Fl(e,t)),Ol=xt("Pipe",void 0,void 0,(e,t)=>jl(e,t)),Il=Dt("Input",e=>({bindingPropertyName:e})),Nl=Dt("Output",e=>({bindingPropertyName:e})),Ml=(Dt("HostBinding",e=>({hostPropertyName:e})),Dt("HostListener",),Fl=Bi,Rl=Bi,jl=Bi,Ll=xt("NgModule",e=>e,void 0,void 0,;const Vl=function(e,t){let n=t&&t.imports||[];t&&t.exports&&(n=[...n,t.exports]),e.\u0275inj=g({factory:Zr(e,{useClass:e}),providers:t&&t.providers,imports:n})},$l=new kt("Application Initializer");l.decorators=[{type:Jr}],Bl.ctorParameters=/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */;const Hl=new kt("AppId");const Ul={provide:Hl,useFactory:deps:[]};onst zl=new kt("Platform Initializer"),Wl=new kt("Platform ID"),Gl=new kt("appBootstrapListener"),Kl=new kt("Application Packages Root URL");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
l.decorators=[{type:Jr}];
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const Zl=new kt("LocaleId"),Jl=new kt("DefaultCurrencyCode"),Xl=new kt("Translations"),Yl=new kt("TranslationsFormat");var ec;!function(e){e[e.Error=0]="Error",e[e.Warning=1]="Warning",e[e.Ignore=2]="Ignore"}(ec||(ec={}));onst nc=tc,sc=tc,rc=tc,ic=tc;c.decorators=[{type:Jr}];const ac=new kt("compilerOptions");class lc{}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const cc=Promise.resolve(0);/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class hc{constructor({enableLongStackTrace:e=!1,shouldCoalesceEventChangeDetection:t=!1}){if(this.hasPendingMacrotasks=!1,this.hasPendingMicrotasks=!1,this.isStable=!0,this.onUnstable=new Tl(!1),this.onMicrotaskEmpty=new Tl(!1),this.onStable=new Tl(!1),this.onError=new Tl(!1),"undefined"==typeof Zone)throw new Error("In this configuration Angular requires Zone.js");Zone.assertZonePatched();const n=this;n._nesting=0,n._outer=n._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(n._inner=n._inner.fork(new Zone.TaskTrackingZoneSpec)),e&&Zone.longStackTraceZoneSpec&&(n._inner=n._inner.fork(Zone.longStackTraceZoneSpec)),n.shouldCoalesceEventChangeDetection=t,n.lastRequestAnimationFrameId=-1,n.nativeRequestAnimationFrame=).nativeRequestAnimationFrame,function(e){const t=()=>{!function(e){if(-1!==e.lastRequestAnimationFrameId)return;e.lastRequestAnimationFrameId=e.nativeRequestAnimationFrame.call(I,,fc(e)}(e)},n=!!e.shouldCoalesceEventChangeDetection&&e.nativeRequestAnimationFrame&&t;e._inner=e._inner.fork({name:"angular",properties:{isAngularZone:!0,maybeDelayChangeDetection:n},onInvokeTask:onInvoke:onHasTask:onHandleError:)}(n)}(e,t,n){return this._inner.run(e,t,n)}unGuarded(e,t,n){return this._inner.runGuarded(e,t,n)}runOutsideAngular(e){return this._outer.run(e)}}const pc={};unction fc(e){e._hasPendingMicrotasks||e.shouldCoalesceEventChangeDetection&&-1!==e.lastRequestAnimationFrameId?e.hasPendingMicrotasks=!0:e.hasPendingMicrotasks=!1}*
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */c.decorators=[{type:Jr}],vc.ctorParameters=()=>[{type:hc}];c.decorators=[{type:Jr}],_c.ctorParameters=et wc,Ec=new Cc=!0,Sc=!1;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */let Ac=function(e,t,n){const s=e.get(lc);return s.createCompiler([t]).compileModuleAsync(n)};let Dc=function(){},Pc=const kc=new kt("AllowMultipleToken");class Oc{constructor(e,t){this.name=e,this.token=t}}ass Mc{ootstrapModuleFactory(e,t){const n=function(e,t){let n;n="noop"===e?new yc:("zone.js"===e?void 0:e)||new hc({enableLongStackTrace:xc(),shouldCoalesceEventChangeDetection:t});return n}(t?t.ngZone:void 0,t&&t.ngZoneEventCoalescing||!1),s=[{provide:hc,useValue:n}];return n.run(()=>{const t=Ar.create({providers:s,parent:this.injector,name:e.moduleType.name}),r=e.create(t),i=r.injector.get(cs,null);if(!i)throw new Error("No ErrorHandler. Is platform module (BrowserModule) included?");return n.runOutsideAngular(,i,n,})} injector(){return this._injector}.decorators=[{type:Jr}],Mc.ctorParameters=class Rc{constructor(e,t,n,s,r,l){this._zone=e,this._console=t,this._injector=n,this._exceptionHandler=s,this._componentFactoryResolver=r,this._initStatus=l,this._bootstrapListeners=[],this._views=[],this._runningTick=!1,this._stable=!0,this.componentTypes=[],this.components=[],this._onMicrotaskEmptySubscription=this._zone.onMicrotaskEmpty.subscribe({next:);const c=new i.a(,u=new i.a(;this.isStable=Object(o.a)(c,u.pipe(Object(a.a)()))}bootstrap(e,t){if(!this._initStatus.done)throw new Error("Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module.");let n;n=e instanceof Fi?e:this._componentFactoryResolver.resolveComponentFactory(e),this.componentTypes.push(n.componentType);const s=Pc(n)?void 0:this._injector.get(wo),r=t||n.selector,i=n.create(Ar.NULL,[],r,s),o=i.location.nativeElement,a=i.injector.get(vc,null),l=a&&i.injector.get(_c);return a&&l&&l.registerApplication(o,a),i.onDestroy(,this._loadComponent(i),xc()&&this._console.log("Angular is running in development mode. Call enableProdMode() to enable production mode."),i}tick(){if(this._runningTick)throw new Error("ApplicationRef.tick is called recursively");try{this._runningTick=!0;for(let e of this._views)e.detectChanges();0}catch(e){this._zone.runOutsideAngular(}finally{this._runningTick=!1}}oadComponent(e){this.attachView(e.hostView),this.tick(),this.components.push(e);this._injector.get(Gl,[]).concat(this._bootstrapListeners).forEach(}et viewCount(){return this._views.length}}c.decorators=[{type:Jr}],Rc.ctorParameters=class Lc{}const Vc={factoryPathPrefix:"",factoryPathSuffix:".ngfactory"};class $c{oad*
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */$c.decorators=[{type:Jr}],$c.ctorParameters=
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class Hc{constructor(e,t){this.name=e,this.callback=t}}t Gc=new Map;onst Qc=Kc;const Zc=onst Xc=Ic(null,"core",[{provide:Wl,useValue:"unknown"},{provide:Mc,deps:[Ar]},{provide:_c,deps:[]},{provide:Ql,deps:[]}]);const Yc=[{provide:Rc,useClass:Rc,deps:[hc,Ql,Ar,cs,Li,Bl]},{provide:_l,deps:[hc],useFactory:,{provide:Bl,useClass:Bl,deps:[[new Jt,$l]]},{provide:oc,useClass:oc,deps:[]},Ul,{provide:ao,useFactory:
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function(){return yo},deps:[]},{provide:lo,useFactory:deps:[]},{provide:Zl,useFactory:deps:[[new Zt(Zl),new Jt,new Yt]]},{provide:Jl,useValue:"USD"}];/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
unction nu(e,t,n,s,r,i,o=[],a,l,c,u,h){c||(c=Ro);const{matchedQueries:p,references:d,matchedQueryIds:f}=na(n);let m=null,g=null;i&&([m,g]=da(i)),a=a||[];const y=[];for(let b=0;b<a.length;b++){const[e,t,n]=a[b],[s,r]=da(t);let i,o;switch(15&e){case 4:o=n;break;case 1:case 8:i=n}y[b]={flags:e,ns:s,name:r,nonMinifiedName:r,securityContext:i,suffix:o}}l=l||[];const v=[];for(let b=0;b<l.length;b++){const[e,t]=l[b];v[b]={type:0,target:e,eventName:t,propName:null}}const _=(o=o||[]).map(;return h=h),u&&(t|=33554432),{nodeIndex:-1,parent:null,renderParent:null,bindingIndex:-1,outputIndex:-1,checkIndex:e,flags:t|=1,childFlags:0,directChildFlags:0,childMatchedQueries:0,matchedQueries:p,matchedQueryIds:f,references:d,ngContentIndex:s,childCount:r,bindings:y,bindingFlags:fa(y),outputs:v,element:{ns:m,name:g,attrs:_,template:null,componentProvider:null,componentView:u||null,componentRendererType:h,publicProviders:null,allProviders:null,handleEvent:c||Ro},provider:null,text:null,query:null,ngContent:null}}unction ru(e,t,n,s){for(let o=0;o<n.outputs.length;o++){const a=n.outputs[o],l=iu(e,n.nodeIndex,(r=a.target,i=a.eventName,r?`${r}:${i}`:i));let c=a.target,u=e;"component"===a.target&&(c=null,u=t);const h=u.renderer.listen(c||s,a.eventName,l);e.disposables[n.outputIndex+o]=h}var r,i}function iu(e,t,n){return * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
*
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */nction Cu(e,t,n){const s=t.element&&t.element.template;if(s){if(!s.lastRenderRootNode)throw new Error("Illegal State: Embedded templates without nodes are not allowed!");if(s.lastRenderRootNode&&16777216&s.lastRenderRootNode.flags)throw new Error(`Illegal State: Last root node of a template can't have embedded views, at index ${t.nodeIndex}!`)}if(20224&t.flags){if(0==(1&(e?e.flags:0)))throw new Error(`Illegal State: StaticProvider/Directive nodes need to be children of elements or anchors, at index ${t.nodeIndex}!`)}if(t.query){if(67108864&t.flags&&(!e||0==(16384&e.flags)))throw new Error(`Illegal State: Content Query nodes need to be children of directives, at index ${t.nodeIndex}!`);if(134217728&t.flags&&e)throw new Error(`Illegal State: View Query nodes have to be top level nodes, at index ${t.nodeIndex}!`)}if(t.childCount){const s=e?e.nodeIndex+e.childCount:n-1;if(t.nodeIndex<=s&&t.nodeIndex+t.childCount>s)throw new Error(`Illegal State: childCount of node leads outside of parent, at index ${t.nodeIndex}!`)}}ion Pu(e){let t;if(Yo(e)){const n=e.parentNodeDef;t=Oo(e.parent,n.parent.nodeIndex).renderElement}const n=e.def,s=e.nodes;for(let r=0;r<n.nodes.length;r++){const i=n.nodes[r];let o;switch(Fo.setCurrentNode(e,r),201347067&i.flags){case 1:const n=su(e,t,i);let a;if(33554432&i.flags){const t=oa(i.element.componentView);a=Fo.createComponentView(e,i,t,n)}ru(e,a,i,n),o={renderElement:n,componentView:a,viewContainer:null,template:i.element.template?$a(e,i):void 0},16777216&i.flags&&(o.viewContainer=Ra(e,i,o));break;case 2:o=_u(e,t,i);break;case 512:case 1024:case 2048:case 256:if(o=s[r],!(o||4096&i.flags)){o={instance:rl(e,i)}}break;case 16:o={instance:il(e,i)};break;case 16384:if(o=s[r],!o){o={instance:ol(e,i)}}if(32768&i.flags){Du(Oo(e,i.parent.nodeIndex).componentView,o.instance,o.instance)}break;case 32:case 64:case 128:o={value:void 0};break;case 67108864:case 134217728:o=new Dl;break;case 8:du(e,t,i),o=void 0}s[r]=o}Lu(e,ju.CreateViewNodes),Hu(e,201326592,268435456,0)} * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */eu.decorators=[{type:Ll,args:[{providers:Yc}]}],eu.ctorParameters=()=>[{type:Rc}],function(e){e[e.CreateViewNodes=0]="CreateViewNodes",e[e.CheckNoChanges=1]="CheckNoChanges",e[e.CheckNoChangesProjectedViews=2]="CheckNoChangesProjectedViews",e[e.CheckAndUpdate=3]="CheckAndUpdate",e[e.CheckAndUpdateProjectedViews=4]="CheckAndUpdateProjectedViews",e[e.Destroy=5]="Destroy"}(ju||(ju={}));let Uu=!1;on Zu(e,t,n,s){return za(e,t,n,function(e){const{hasOverrides:t,hasDeprecatedOverrides:n}=s(e);if(!t)return e;return r(e=e.factory(()=>Ro)),e;function s(e){let t=!1,n=!1;return 0===Ju.size||(e.providers.forEach(,e.modules.forEach(),{hasOverrides:t,hasDeprecatedOverrides:n}}function r(e){for(let t=0;t<e.providers.length;t++){const s=e.providers[t];n&&(s.flags|=4096);const r=Ju.get(s.token);r&&(s.flags=-3841&s.flags|r.flags,s.deps=sa(r.deps),s.value=r.value)}if(Xu.size>0){let t=new Set(e.modules);Xu.forEach(}}}(s))}const Ju=new Map,Xu=new Map,Yu=new Map;unction th(e,t){const n=oa(t.viewDefFactory);const s=oa(n.nodes[0].element.componentView);Yu.set(e,s)}nction rh(e,t,n,s,r,i,o,a,l,c,u,h,p){const d=e.def.nodes[t];return Iu(e,d,n,s,r,i,o,a,l,c,u,h,p),224&d.flags?No(e,t).value:void 0}unction oh(e){return Ch(ch.detectChanges,Ou,null,[e])}function ah(e){return Ch(ch.checkNoChanges,ku,null,[e])}ar ch;let uh,hh,ph;nction mh(e,t){if(128&e.state)throw Ao(ch[uh]);return dh(e,_h(e,0)),e.def.updateDirectives(function(e,n,s,...r){const i=e.def.nodes[n];0===t?yh(e,i,s,r):vh(e,i,s,r);16384&i.flags&&dh(e,_h(e,n));return 224&i.flags?No(e,i.nodeIndex).value:void 0},e)}function gh(e,t){if(128&e.state)throw Ao(ch[uh]);return dh(e,bh(e,0)),e.def.updateRenderer(function(e,n,s,...r){const i=e.def.nodes[n];0===t?yh(e,i,s,r):vh(e,i,s,r);3&i.flags&&dh(e,bh(e,n));return 224&i.flags?No(e,i.nodeIndex).value:void 0},e)}nction _h(e,t){for(let n=t;n<e.def.nodes.length;n++){const t=e.def.nodes[n];if(16384&t.flags&&t.bindings&&t.bindings.length)return n}return null}function(e){e[e.create=0]="create",e[e.detectChanges=1]="detectChanges",e[e.checkNoChanges=2]="checkNoChanges",e[e.destroy=3]="destroy",e[e.handleEvent=4]="handleEvent"}(ch||(ch={}));class wh{ component(){return this.elOrCompView.component}get context(){return this.elOrCompView.context}t componentRenderElementgError(e,...t){let n,s;2&this.nodeDef.flags?(n=this.view.def,s=this.nodeDef.nodeIndex):(n=this.elView.def,s=this.elDef.nodeIndex);const r=function(e,t){let n=-1;for(let s=0;s<=t;s++){3&e.nodes[s].flags&&n++}return n}(n,s);let i=-1;n.factory(,i<r&&(e.error("Illegal state: the ViewDefinitionFactory did not call the logger!"),e.error(...t))}}s Th{reateDebugContext(e){return this.debugContextFactory(e)}estroy(){this.delegate.destroy()}endChild(e,t){const n=Qc(e),s=Qc(t);n&&s&&n instanceof qc&&n.addChild(s),this.delegate.appendChild(e,t)}ass(e,t){const n=Qc(e);n&&n instanceof qc&&(n.classes[t]=!0),this.delegate.addClass(e,t)}tNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setValue(e,t){return this.delegate.setValue(e,t)}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Ah(e,t,n){return new Dh(e,t,n)}/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */}).call(this,n("yLpj"))},"8oxB":"8zgK":"9ppp":AM7I:function(e,t,n){"use strict";var s,r=SyntaxError,i=Function,o=TypeError,a=l=Object.getOwnPropertyDescriptor;if(l)try{l({},"")}catch(P){l=null}var c=u=l?):c,h=n("UVaH")(),p=Object.getPrototypeOf||function(e){return e.__proto__},d={},f="undefined"==typeof Uint8Array?s:p(Uint8Array),m={"%AggregateError%":"undefined"==typeof AggregateError?s:AggregateError,"%Array%":Array,"%ArrayBuffer%":"undefined"==typeof ArrayBuffer?s:ArrayBuffer,"%ArrayIteratorPrototype%":h?p([][Symbol.iterator]()):s,"%AsyncFromSyncIteratorPrototype%":s,"%AsyncFunction%":d,"%AsyncGenerator%":d,"%AsyncGeneratorFunction%":d,"%AsyncIteratorPrototype%":d,"%Atomics%":"undefined"==typeof Atomics?s:Atomics,"%BigInt%":"undefined"==typeof BigInt?s:BigInt,"%Boolean%":Boolean,"%DataView%":"undefined"==typeof DataView?s:DataView,"%Date%":Date,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":Error,"%eval%":eval,"%EvalError%":EvalError,"%Float32Array%":"undefined"==typeof Float32Array?s:Float32Array,"%Float64Array%":"undefined"==typeof Float64Array?s:Float64Array,"%FinalizationRegistry%":"undefined"==typeof FinalizationRegistry?s:FinalizationRegistry,"%Function%":i,"%GeneratorFunction%":d,"%Int8Array%":"undefined"==typeof Int8Array?s:Int8Array,"%Int16Array%":"undefined"==typeof Int16Array?s:Int16Array,"%Int32Array%":"undefined"==typeof Int32Array?s:Int32Array,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":h?p(p([][Symbol.iterator]())):s,"%JSON%":"object"==typeof JSON?JSON:s,"%Map%":"undefined"==typeof Map?s:Map,"%MapIteratorPrototype%":"undefined"!=typeof Map&&h?p((new Map)[Symbol.iterator]()):s,"%Math%":Math,"%Number%":Number,"%Object%":Object,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":"undefined"==typeof Promise?s:Promise,"%Proxy%":"undefined"==typeof Proxy?s:Proxy,"%RangeError%":RangeError,"%ReferenceError%":ReferenceError,"%Reflect%":"undefined"==typeof Reflect?s:Reflect,"%RegExp%":RegExp,"%Set%":"undefined"==typeof Set?s:Set,"%SetIteratorPrototype%":"undefined"!=typeof Set&&h?p((new Set)[Symbol.iterator]()):s,"%SharedArrayBuffer%":"undefined"==typeof SharedArrayBuffer?s:SharedArrayBuffer,"%String%":String,"%StringIteratorPrototype%":h?p(""[Symbol.iterator]()):s,"%Symbol%":h?Symbol:s,"%SyntaxError%":r,"%ThrowTypeError%":u,"%TypedArray%":f,"%TypeError%":o,"%Uint8Array%":"undefined"==typeof Uint8Array?s:Uint8Array,"%Uint8ClampedArray%":"undefined"==typeof Uint8ClampedArray?s:Uint8ClampedArray,"%Uint16Array%":"undefined"==typeof Uint16Array?s:Uint16Array,"%Uint32Array%":"undefined"==typeof Uint32Array?s:Uint32Array,"%URIError%":URIError,"%WeakMap%":"undefined"==typeof WeakMap?s:WeakMap,"%WeakRef%":"undefined"==typeof WeakRef?s:WeakRef,"%WeakSet%":"undefined"==typeof WeakSet?s:WeakSet},g=y={"%ArrayBufferPrototype%":["ArrayBuffer","prototype"],"%ArrayPrototype%":["Array","prototype"],"%ArrayProto_entries%":["Array","prototype","entries"],"%ArrayProto_forEach%":["Array","prototype","forEach"],"%ArrayProto_keys%":["Array","prototype","keys"],"%ArrayProto_values%":["Array","prototype","values"],"%AsyncFunctionPrototype%":["AsyncFunction","prototype"],"%AsyncGenerator%":["AsyncGeneratorFunction","prototype"],"%AsyncGeneratorPrototype%":["AsyncGeneratorFunction","prototype","prototype"],"%BooleanPrototype%":["Boolean","prototype"],"%DataViewPrototype%":["DataView","prototype"],"%DatePrototype%":["Date","prototype"],"%ErrorPrototype%":["Error","prototype"],"%EvalErrorPrototype%":["EvalError","prototype"],"%Float32ArrayPrototype%":["Float32Array","prototype"],"%Float64ArrayPrototype%":["Float64Array","prototype"],"%FunctionPrototype%":["Function","prototype"],"%Generator%":["GeneratorFunction","prototype"],"%GeneratorPrototype%":["GeneratorFunction","prototype","prototype"],"%Int8ArrayPrototype%":["Int8Array","prototype"],"%Int16ArrayPrototype%":["Int16Array","prototype"],"%Int32ArrayPrototype%":["Int32Array","prototype"],"%JSONParse%":["JSON","parse"],"%JSONStringify%":["JSON","stringify"],"%MapPrototype%":["Map","prototype"],"%NumberPrototype%":["Number","prototype"],"%ObjectPrototype%":["Object","prototype"],"%ObjProto_toString%":["Object","prototype","toString"],"%ObjProto_valueOf%":["Object","prototype","valueOf"],"%PromisePrototype%":["Promise","prototype"],"%PromiseProto_then%":["Promise","prototype","then"],"%Promise_all%":["Promise","all"],"%Promise_reject%":["Promise","reject"],"%Promise_resolve%":["Promise","resolve"],"%RangeErrorPrototype%":["RangeError","prototype"],"%ReferenceErrorPrototype%":["ReferenceError","prototype"],"%RegExpPrototype%":["RegExp","prototype"],"%SetPrototype%":["Set","prototype"],"%SharedArrayBufferPrototype%":["SharedArrayBuffer","prototype"],"%StringPrototype%":["String","prototype"],"%SymbolPrototype%":["Symbol","prototype"],"%SyntaxErrorPrototype%":["SyntaxError","prototype"],"%TypedArrayPrototype%":["TypedArray","prototype"],"%TypeErrorPrototype%":["TypeError","prototype"],"%Uint8ArrayPrototype%":["Uint8Array","prototype"],"%Uint8ClampedArrayPrototype%":["Uint8ClampedArray","prototype"],"%Uint16ArrayPrototype%":["Uint16Array","prototype"],"%Uint32ArrayPrototype%":["Uint32Array","prototype"],"%URIErrorPrototype%":["URIError","prototype"],"%WeakMapPrototype%":["WeakMap","prototype"],"%WeakSetPrototype%":["WeakSet","prototype"]},v=n("D3zA"),_=n("oNNP"),b=v.call(Function.call,Array.prototype.concat),w=v.call(Function.apply,Array.prototype.splice),E=v.call(Function.call,String.prototype.replace),C=v.call(Function.call,String.prototype.slice),S=v.call(Function.call,RegExp.prototype.exec),x=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,T=/\\(\\)?/g,A=D=e.exports=,BhAj:function(e,t,n){"use strict";e.exports=(e,t,n)=>{"function"!=typeof n||e[t]||(e[t]=n)}},Cfvw:function(e,t,n){"use strict";n.d(t,"a",function(){return p});var s=n("HDdC"),r=n("SeVD"),i=n("quSY"),o=n("kJWO");var a=n("jZKg"),l=n("Lhse");var c=n("c2HN"),u=n("I55L");CuLW:D3zA:DH7j:E58G:function(e,t,n){"use strict";const s=n("24Ii"),r=n("/fTC").parse,i=n("ml1J"),o=n("U8la"),a=n("iJE/"),l=n("Gm0T");function c(e,t){return t.headers?a(t.headers,(e,t,n)=>e.set(n,t),e):e}function u(e,t,n){if(!n&&!t.auth&&!t.nonce)return e;if(t.nonce)return e.set("X-WP-Nonce",t.nonce),e;const s=t.username,r=t.password;return s&&r?e.auth(s,r):e}function h(e,t,n){return new Promise((t,n)=>{e.end((e,s)=>{e||s.error?n(e||s.error):t(s)})}).then(n).then(e=>(t&&"function"==typeof t&&t(null,e),e),e=>{if(e.response&&e.response.body&&e.response.body.code&&(e=e.response.body),!t||"function"!=typeof t)throw e;t(e)})}function p(e,t){const n=function(e){let t=e.body;if(l(t)&&"text/html"===e.type)try{t=JSON.parse(e.text)}catch(n){}return t}(t),s=function(e,t,n){let s=null;if(!e.headers)return s;if(Object.keys(e.headers).forEach(t=>{e.headers[t.toLowerCase()]=e.headers[t]}),!e.headers["x-wp-totalpages"])return s;const o=+e.headers["x-wp-totalpages"];if(!o||0===o)return s;const a=e.headers.link?r(e.headers.link):{};return s={total:+e.headers["x-wp-total"],totalPages:o,links:a},a.next&&(s.next=new i({...t,transport:n,endpoint:a.next})),a.prev&&(s.prev=new i({...t,transport:n,endpoint:a.prev})),s}(t,e._options,e.transport);return s&&(n._paging=s),n}function d(e){return e.headers}e.exports={delete:function(e,t,n){n||"function"!=typeof t||(n=t,t=null),o("delete",e);const r=e.toString();let i=u(s.del(r),e._options,!0).send(t);return i=c(i,e._options),h(i,n,p.bind(null,e))},get:function(e,t){o("get",e);const n=e.toString();let r=u(s.get(n),e._options);return r=c(r,e._options),h(r,t,p.bind(null,e))},head:function(e,t){o("head",e);const n=e.toString();let r=u(s.head(n),e._options);return r=c(r,e._options),h(r,t,d)},post:function(e,t,n){o("post",e);const r=e.toString();t=t||{};let i=u(s.post(r),e._options,!0);return i=c(i,e._options),i=e._attachment?a(t,i.attach("file",e._attachment,e._attachmentName)):i.send(t),h(i,n,p.bind(null,e))},put:function(e,t,n){o("put",e);const r=e.toString();t=t||{};let i=u(s.put(r),e._options,!0).send(t);return i=c(i,e._options),h(i,n,p.bind(null,e))}}},EI6l:function(e,t,n){(function(n){var s,r,i;/*! smooth-scroll v12.1.5 | (c) 2017 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/smooth-scroll */i=void 0!==n?n:"undefined"!=typeof window?window:this,s=[],void 0===(r=(function(){return function(e){"use strict";var t="querySelector"in document&&"addEventListener"in e&&"requestAnimationFrame"in e&&"closest"in e.Element.prototype,n={ignore:"[data-scroll-ignore]",header:null,speed:500,offset:0,easing:"easeInOutCubic",customEasing:null,before:function(){},after:function(){}},s=function(){for(var e={},t=0,n=arguments.length;t<n;t++)!arguments[t]);return e},r=i=function(e){"#"===e.charAt(0)&&(e=e.substr(1));for(var t,n=String(e),s=n.length,r=-1,i="",o=n.charCodeAt(0);++r<s;){if(0===(t=n.charCodeAt(r)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");i+=t>=1&&t<=31||127==t||0===r&&t>=48&&t<=57||1===r&&t>=48&&t<=57&&45===o?"\\"+t.toString(16)+" ":t>=128||45===t||95===t||t>=48&&t<=57||t>=65&&t<=90||t>=97&&t<=122?n.charAt(r):"\\"+n.charAt(r)}return"#"+i},o=a=l=function(e,t,n){var s=0;if(e.offsetParent)do{s+=e.offsetTop,e=e.offsetParent}while(e);return Math.max(s-t-n,0)},c=u=h=function(t){return!(!("matchMedia"in e)||!e.matchMedia("(prefers-reduced-motion)").matches)};return function(r,p){var d,f,m,g,y,v,_,b={cancelScroll:function(){cancelAnimationFrame(_)},animateScroll:function(t,r,i){var h=s(d||n,i||{}),p="[object Number]"===Object.prototype.toString.call(t),f=p||!t.tagName?null:t;if(p||f){var m=e.pageYOffset;h.header&&!g&&(g=document.querySelector(h.header)),y||(y=c(g));var v,_,w,E=p?t:l(f,y,parseInt("function"==typeof h.offset?h.offset():h.offset,10)),C=E-m,S=a(),x=0,T=function(n,s){var i=e.pageYOffset;if(n==s||i==s||(m<s&&e.innerHeight+i)>=S)return b.cancelScroll(),u(t,s,p),h.after(t,r),v=null,!0},A=function(t){v||(v=t),_=(x+=t-v)/parseInt(h.speed,10),w=m+C*o(h,_=_>1?1:_),e.scrollTo(0,Math.floor(w)),T(w,E)||(e.requestAnimationFrame(A),v=t)};0===e.pageYOffset&&e.scrollTo(0,0),h.before(t,r),b.cancelScroll(),e.requestAnimationFrame(A)}}},w=E=function(t){if(!h()&&0===t.button&&!t.metaKey&&!t.ctrlKey&&(m=t.target.closest(r))&&"a"===m.tagName.toLowerCase()&&!t.target.closest(d.ignore)&&m.hostname===e.location.hostname&&m.pathname===e.location.pathname&&/#/.test(m.href)){var n;try{n=i(decodeURIComponent(m.hash))}catch(e){n=i(m.hash)}if("#"===n){t.preventDefault();var s=(f=document.body).id?f.id:"smooth-scroll-top";return f.setAttribute("data-scroll-id",s),f.id="",void(e.location.hash.substring(1)===s?w():e.location.hash=s)}(f=document.querySelector(n))&&(f.setAttribute("data-scroll-id",f.id),f.id="",m.hash===e.location.hash&&(t.preventDefault(),w()))}},C=return b.destroy=b.init=b.init(p),b}}(i)}).apply(t,s))||(e.exports=r)}).call(this,n("yLpj"))},FpZJ:GS7A:function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n.d(t,"b",function(){return s}),n.d(t,"c",function(){return r}),n.d(t,"d",function(){return p}),n.d(t,"e",function(){return a}),n.d(t,"f",function(){return l}),n.d(t,"g",function(){return c}),n.d(t,"h",function(){return u}),n.d(t,"i",function(){return o}),n.d(t,"j",function(){return d}),n.d(t,"k",function(){return f});
/**
 * @license Angular v11.0.7
 * (c) 2010-2020 Google LLC. https://angular.io/
 * License: MIT
 */
class s{}class r{}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const i="*";unction a(e,t=null){return{type:4,styles:t,timings:e}}*
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 *//**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 *//**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const f="!";
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */},Gm0T:function(e,t,n){"use strict";e.exports=e=>{if("object"!=typeof e)return!1;if(Array.isArray(e))return!1;for(const t in e)if(e.hasOwnProperty(t))return!1;return!0}},HDdC:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var s=n("7o/Q");var r=n("2QA8"),i=n("gRHU");var o=n("kJWO"),a=n("SpAZ");ar c=n("2fFW");class u{ySubscribe(e){try{return this._subscribe(e)}catch(t){c.a.useDeprecatedSynchronousErrorHandling&&(e.syncErrorThrown=!0,e.syncErrorValue=t),!e)?console.warn(t):e.error(t)}}ate=,I55L:IvIj:function(e,t,n){"use strict";const s=n("6rNy"),r=n("Tell"),i={categories:{categories:r.categories,category:r.category},categories_exclude:{excludeCategories:r.excludeCategories},tags:{tags:r.tags,tag:r.tag},tags_exclude:{excludeTags:r.excludeTags},filter:s,post:{post:r.post,forPost:r.post}};["after","author","before","parent","password","status","sticky"].forEach(e=>{i[e]={},i[e][e]=r[e]}),e.exports=i},JxQ3:Lhse:Mj6V:function(e,t,n){var s,r;
/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */void 0===(r="function"==typeof(s=?s.call(t,n,t,e):s)||(e.exports=r)},NJ4a:PrET:QSc6:Qup9:function(e,t,n){"use strict";e.exports=,Qwta:function(e,t,n){"use strict";e.exports=(e,t)=>{const n={};return n[e]=t,n}},Qyje:SeVD:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var s=n("ngJS"),r=n("NJ4a");var i=n("Lhse");var o=n("kJWO");var a=n("I55L"),l=n("c2HN"),c=n("XoHu");const u=,SpAZ:Tell:function(e,t,n){"use strict";const s=n("0KBE"),r=n("zHhn"),i={},o=n("6rNy"),a=o.filter,l=o.taxonomy;i.author=function(e){if(void 0===e)return this;if("string"==typeof e)return this.param("author",null),a.call(this,"author_name",e);if("number"==typeof e)return a.call(this,"author_name",null),this.param("author",e);if(null===e)return a.call(this,"author_name",null),this.param("author",null);throw new Error("author must be either a nicename string or numeric ID")},i.parent=s("parent"),i.post=s("post"),i.password=s("password"),i.status=s("status"),i.sticky=s("sticky"),i.categories=s("categories"),i.category=function(e){return r(e)?i.categories.call(this,e):l.call(this,"category",e)},i.excludeCategories=s("categories_exclude"),i.tags=s("tags"),i.tag=function(e){return r(e)?i.tags.call(this,e):l.call(this,"tag",e)},i.excludeTags=s("tags_exclude"),i.before=function(e){return this.param("before",new Date(e).toISOString())},i.after=function(e){return this.param("after",new Date(e).toISOString())},e.exports=i},U6FE:function(e,t,n){"use strict";const s=n("akRX").pattern.replace(/([^\\])\(([^?])/g,"$1(?:$2"),r=new RegExp("([^/]*"+s+"[^/]*)");e.exports=e=>e.split(r).reduce((e,t)=>t?r.test(t)?e.concat(t):e.concat(t.split("/").filter(Boolean)):e,[])},U8la:function(e,t,n){"use strict";e.exports=(e,t)=>{if(-1===t._supportedMethods.indexOf(e.toLowerCase()))throw new Error("Unsupported method; supported methods are: "+t._supportedMethods.join(", "));return!0}},UVaH:VAJa:VF6F:VRyK:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var s=n("HDdC"),r=n("z+Ro"),i=n("5+tZ"),o=n("SpAZ");var a=n("yCtX");function l(...e){let t=Number.POSITIVE_INFINITY,n=null,l=e[e.length-1];return Object(r.a)(l)?(n=e.pop(),e.length>1&&"number"==typeof e[e.length-1]&&(t=e.pop())):"number"==typeof l&&(t=e.pop()),null===n&&1===e.length&&e[0]instanceof s.a?e[0]:function(e=Number.POSITIVE_INFINITY){return Object(i.a)(o.a,e)}(t)(Object(a.a)(e,n))}},XNiG:function(e,t,n){"use strict";n.d(t,"b",function(){return c}),n.d(t,"a",function(){return u});var s=n("HDdC"),r=n("7o/Q"),i=n("quSY"),o=n("9ppp");ar l=n("2QA8");create=,XoHu:YTqf:function(e,t,n){"use strict";const s=n("akRX").namedGroupRE,r=n("U6FE"),i=n("56io"),o=n("iJE/");function a(e,t,n,r,i,o){const a=r.match(s),l=a&&a[1],c=a&&a[2],u=a?c||l:r,h=a?l:r,p=n[u]||{component:r,namedGroup:!!a,level:i,names:[]};p.names.indexOf(h)<0&&p.names.push(h);const d=""===c?/.*/:new RegExp(c?"^"+c+"$":r,"i");return p.validate=e=>d.test(e),o[i+1]?p.children=p.children||{}:(p.methods=(e.methods||[]).map(e=>e.toLowerCase()),p.methods.indexOf("get")>-1&&-1===p.methods.indexOf("head")&&p.methods.push("head"),e.endpoints&&(t._getArgs=t._getArgs||{},e.endpoints.forEach(e=>{e.methods.forEach(n=>{"get"===n.toLowerCase()&&Object.keys(e.args).forEach(})}))),n[u]=p,p.children}function l(e,t,n){const s=t.namespace,o=n.replace("/"+s+"/","").replace(/\/\?$/,""),l=r(o);if(!s||"/"+s===n||!o)return e;i(e,s,{});const c=e[s],u=l[0];i(c,u,{});const h=c[u];return l.reduce(a.bind(null,t,h),h),e}e.exports={build:},ZUHj:aI7X:akRX:function(e,t,n){"use strict";const s=["\\(\\?","(?:P<|<|')","([^>']+)","[>']","([^\\)]*(\\))?\\??)","\\)"].join("");e.exports={pattern:s,namedGroupRE:new RegExp(s)}},c2HN:cpXB:function(e,t,n){"use strict";e.exports={create:function(e){const t=e.level,n=e.names[0],s=e.methods||[],r=e.children?Object.keys(e.children).map(t=>e.children[t]).filter(:[],i=1===r.length&&r[0],o=i&&i.level;return e.namedGroup?function(e){return this.setPathPart(t,e),s.length&&(this._supportedMethods=s),this}:function(e){return this.setPathPart(t,n),void 0!==e&&o&&this.setPathPart(o,e),this}}}},cpc2:fDlF:function(e,t,n){"use strict";(function(e){n.d(t,"a",function(){return x}),n.d(t,"b",function(){return et}),n.d(t,"c",function(){return Ee}),n.d(t,"d",function(){return gt}),n.d(t,"e",function(){return S}),n.d(t,"f",function(){return vt}),n.d(t,"g",function(){return Ce}),n.d(t,"h",function(){return _t});var s=n("GS7A"),r=n("8Y7J");,t)=>!1;let f=let m=const g=i();(g||"undefined"!=typeof Element)&&(d=(e,t)=>e.contains(t),f=((),m=;let y=null,v=!1;function _(e){y||(y=)||{},v=!!y.style&&"WebkitAppearance"in y.style);let t=!0;if(y.style&&!e)&&(t=e in y.style,!t&&v)){t="Webkit"+e.charAt(0).toUpperCase()+e.substr(1)in y.style}return t}const b=f,w=d,E=m;/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */.decorators=[{type:r.A}];class x{}x.NOOP=new S;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const T="ng-enter",A="ng-leave",D="ng-trigger",P=".ng-trigger",k="ng-animating",O=".ng-animating";nction M(e,t,n){return e.hasOwnProperty("duration")?e:function(e,t,n){const s=/^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i;let r,i=0,o="";if("string"==typeof e){const n=e.match(s);if(null===n)return t.push(`The provided timing value "${e}" is invalid.`),{duration:0,delay:0,easing:""};r=N(parseFloat(n[1]),n[2]);const a=n[3];null!=a&&(i=N(parseFloat(a),n[4]));const l=n[5];l&&(o=l)}else r=e;if(!n){let n=!1,s=t.length;r<0&&(t.push("Duration values below 0 are not allowed for this animation step."),n=!0),i<0&&(t.push("Delay values below 0 are not allowed for this animation step."),n=!0),n&&t.splice(s,0,`The provided timing value "${e}" is invalid.`)}return{duration:r,delay:i,easing:o}}(e,t,n)}ction L(e){let t="";for(let n=0;n<e.style.length;n++){const s=e.style.item(n);t+=j(0,s,e.style.getPropertyValue(s))}for(const n in e.style){if(!e.style.hasOwnProperty(n)||n.startsWith("_"))continue;t+=j(0,n.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),e.style[n])}e.setAttribute("style",t)}st H=new RegExp("{{\\s*(.+?)\\s*}}","g");st W=/-+([a-z0-9])/g; * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const X="*";function Y(e,t){const n=[];return"string"==typeof e?e.split(/\s*,\s*/).forEach(e=>function(e,t,n){if(":"==e[0]){const s=e,n);if("function"==typeof s)return void t.push(s);e=s}const s=e.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);if(null==s||s.length<4)return n.push(`The provided transition expression "${e}" is not supported`),t;const r=s[1],i=s[2],o=s[3];t.push(ne(r,o));const a=r==X&&o==X;"<"!=i[0]||a||t.push(ne(o,r))}(e,n,t)):n.push(e),n}const ee=new Set(["true","1"]),te=new Set(["false","0"]);/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const se=":self",re=new RegExp("s*:selfs*,?","g");lass oe{constructor(e){this._driver=e}imate(e,t){const n=function(e,t){let n=null;if(e.hasOwnProperty("duration"))n=e;else if("number"==typeof e){return ue(M(e,t).duration,0,"")}const s=e;if(s.split(/\s+/).some(){const e=ue(0,0,"");return e.dynamic=!0,e.strValue=s,e}return n=n||M(s,t),ue(n.duration,n.delay,n.easing)}(e.timings,t.errors);let r;t.currentAnimateTimings=n;let i=e.styles?e.styles:Object(s.g)({});if(5==i.type)r=this.visitKeyframes(i,t);else{let i=e.styles,o=!1;if(!i){o=!0;const e={};n.easing&&(e.easing=n.easing),i=Object(s.g)(e)}t.currentTime+=n.duration+n.delay;const a=this.visitStyle(i,t);a.isEmptyStep=o,r=a}return t.currentAnimateTimings=null,{type:4,timings:n,style:r,options:null}}makeStyleAst(e,t){const n=[];Array.isArray(e.styles)?e.styles.forEach(:n.push(e.styles);let r=!1,i=null;return n.forEach(e=>{if(le(e)){const t=e,n=t.easing;if(n&&(i=n,delete t.easing),!r)for(let e in t){if(t[e].toString().indexOf("{{")>=0){r=!0;break}}}}),{type:6,styles:n,easing:i,offset:e.offset,containsDynamicStyles:r,options:null}}Query(e,t){const n=t.currentQuerySelector,s=e.options||{};t.queryCount++,t.currentQuery=e;const[r,i]=function(e){const t=!!e.split(/\s*,\s*/).find(;t&&(e=e.replace(re,""));return[e=e.replace(/@\*/g,P).replace(/@\w+/g,.replace(/:animating/g,O),t]}(e.selector);t.currentQuerySelector=n.length?n+" "+r:r,h(t.collectedStyles,t.currentQuerySelector,{});const o=Z(this,B(e.animation),t);return t.currentQuery=null,t.currentQuerySelector=n,{type:11,selector:r,limit:s.limit||0,optional:!!s.optional,includeSelf:i,animation:o,originalSelector:e.selector,options:ce(e.options)}}* @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const de=new RegExp(":enter","g"),fe=new RegExp(":leave","g");lass ge{isitTrigger(e,t){}visitState(e,t){}e,t){const n=t.currentTimeline.currentTime,s=e.options||{},r=s.delay?I(s.delay):0;r&&(6===t.previousNode.type||0==n&&t.currentTimeline.getCurrentStyleProperties().length)&&(t.currentTimeline.snapshotCurrentStyles(),t.previousNode=ye);let i=n;const o=t.invokeQuery(e.selector,e.originalSelector,e.limit,e.includeSelf,!!s.optional,t.errors);t.currentQueryTotal=o.length;let a=null;o.forEach(,t.currentQueryIndex=0,t.currentQueryTotal=0,t.transformIntoNewTimeline(i),a&&(t.currentTimeline.mergeTimelineCollectedStyles(a),t.currentTimeline.snapshotCurrentStyles()),t.previousNode=e}const ye={};class ve{et params(){return this.options.params}uery(e,t,n,s,r,i){let o=[];if(s&&o.push(this.element),e.length>0){e=(e=e.replace(de,"."+this._enterClassName)).replace(fe,"."+this._leaveClassName);const t=1!=n;let s=this._driver.query(this.element,e,t);0!==n&&(s=n<0?s.slice(s.length+n,s.length):s.slice(0,n)),o.push(...s)}return r||0!=o.length||i.push(`\`query("${t}")\` returned zero elements. (Use \`query("${t}", { optional: true })\` if you wish to allow this.)`),o}}class _e{Keyframe(){const e=this._pendingStyles,t=Object.keys(e);0!=t.length&&(this._pendingStyles={},t.forEach(,Object.keys(this._localTimelineStyles).forEach()}s be extends _e{ildKeyframes(){let e=this.keyframes,{delay:t,duration:n,easing:s}=this.timings;if(this._stretchStartingKeyframe&&t){const r=[],i=n+t,o=t/i,a=R(e[0],!1);a.offset=0,r.push(a);const l=R(e[0],!1);l.offset=we(o),r.push(l);const c=e.length-1;for(let s=1;s<=c;s++){let o=R(e[s],!1);const a=t+o.offset*n;o.offset=we(a/i),r.push(o)}n=i,t=0,s="",e=r}return he(this.element,e,this.preStyleProps,this.postStyleProps,n,t,s,!0)}}/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
onst Se="width,height,minWidth,minHeight,maxWidth,maxHeight,left,top,bottom,right,fontSize,outlineWidth,outlineOffset,paddingTop,paddingLeft,paddingBottom,paddingRight,marginTop,marginLeft,marginBottom,marginRight,borderRadius,borderWidth,borderTopWidth,borderLeftWidth,borderRightWidth,borderBottomWidth,textIndent,perspective".split(","));onst Te={};class Ae{ld(e,t,n,s,r,i,o,a,l,c){const u=[],p=this.ast.options&&this.ast.options.params||Te,d=o&&o.params||Te,f=this.buildStyles(n,d,u),m=a&&a.params||Te,g=this.buildStyles(s,m,u),y=new Set,v=new Map,_=new Map,b="void"===s,w={params:Object.assign(Object.assign({},p),m)},E=c?[]:me(e,t,this.ast.animation,r,i,f,g,w,l,u);let C=0;if(E.forEach(,u.length)return xe(t,this._triggerName,n,s,b,f,g,[],[],v,_,C,u);E.forEach(;const S=z(y.values());return xe(t,this._triggerName,n,s,b,f,g,E,S,v,_,C)}}lass Pe{constructor(e,t){var n,s;this.name=e,this.ast=t,this.transitionFactories=[],this.states={},t.states.forEach(e=>{const t=e.options&&e.options.params||{};this.states[e.name]=new De(e.style,t)}),ke(this.states,"true","1"),ke(this.states,"false","0"),t.transitions.forEach(,this.fallbackTransition=(n=e,s=this.states,new Ae(n,{type:1,animation:{type:2,steps:[],options:null},matchers:[(e,t)=>!0],options:null,queryCount:0,depCount:0},s))}get containsQueries(){return this.ast.queryCount>0}atchStyles(e,t,n){return this.fallbackTransition.buildStyles(e,t,n)}}/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Oe=new pe;class Ie{layer(e){const t=this._playersById[e];if(!t)throw new Error(`Unable to find the timeline player referenced by ${e}`);return t}/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Ne="ng-animate-queued",Me="ng-animate-disabled",Fe=".ng-animate-disabled",Re=[],je={namespaceId:"",setForRemoval:!1,setForMove:!1,hasAnimation:!1,removedBeforeQueried:!1},Le={namespaceId:"",setForMove:!1,setForRemoval:!1,hasAnimation:!1,removedBeforeQueried:!0};class Ve{constructor(e,t=""){this.namespaceId=t;const n=e&&e.hasOwnProperty("value"),s=n?e.value:e;if(this.value=s),n){const t=F(e);delete t.value,this.options=t}else this.options={};this.options.params||(this.options.params={})}get params(){return this.options.params}const $e="void",Be=new Ve($e);class He{ger(e,t,n,s=!0){const r=this._getTrigger(t),i=new qe(this.id,t,e);let o=this._engine.statesByElement.get(e);o||(Qe(e,D),Qe(e,"ng-trigger-"+t),this._engine.statesByElement.set(e,o={}));let a=o[t];const l=new Ve(n,this.id);!(n&&n.hasOwnProperty("value"))&&a&&l.absorbOptions(a.options),o[t]=l,a||(a=Be);if(!(l.value===$e)&&a.value===l.value){if(!a.params,l.params)){const t=[],n=r.matchStyles(a.value,a.params,t),s=r.matchStyles(l.value,l.params,t);t.length?this._engine.reportError(t):this._engine.afterFlush(}return}const c=h(this._engine.playersByElement,e,[]);c.forEach(;let u=r.matchTransition(a.value,l.value,e,l.params),p=!1;if(!u){if(!s)return;u=r.fallbackTransition,p=!0}return this._engine.totalQueuedPlayers++,this._queue.push({element:e,triggerName:t,transition:u,fromState:a,toState:l,player:i,isFallbackTransition:p}),p||(Qe(e,Ne),i.onStart(),i.onDone(,this.players.push(i),c.push(i),i}areLeaveAnimationListeners(e){const t=this._elementListeners.get(e);if(t){const n=new Set;t.forEach(t=>{const s=t.name;if(n.has(s))return;n.add(s);const r=this._triggers[s].fallbackTransition,i=this._engine.statesByElement.get(e)[s]||Be,o=new Ve($e),a=new qe(this.id,s,e);this._engine.totalQueuedPlayers++,this._queue.push({element:e,triggerName:s,transition:r,fromState:i,toState:o,player:a,isFallbackTransition:!0})})}}removeNode(e,t){const n=this._engine;if(e.childElementCount&&this._signalRemovalForInnerTriggers(e,t),this.triggerLeaveAnimation(e,t,!0))return;let s=!1;if(n.totalAnimations){const t=n.players.length?n.playersByQueriedElement.get(e):[];if(t&&t.length)s=!0;else{let t=e;for(;t=t.parentNode;){if(n.statesByElement.get(t)){s=!0;break}}}}if(this.prepareLeaveAnimationListeners(e),s)n.markElementAsRemoved(this.id,e,!1,t);else{const s=e.__ng_removed;s&&s!==je||(n.afterFlush(()=>this.clearElementCache(e)),n.destroyInnerAnimations(e),n._onRemovalComplete(e,t))}}ss Ue{anceNamespaceList(e,t){const n=this._namespaceList.length-1;if(n>=0){let s=!1;for(let r=n;r>=0;r--){const n=this._namespaceList[r];if(this.driver.containsElement(n.hostElement,t)){this._namespaceList.splice(r+1,0,e),s=!0;break}}s||this._namespaceList.splice(0,0,e)}else this._namespaceList.push(e);return this.namespacesByHostElement.set(t,e),e}tchNamespace(e){return this._namespaceLookup[e]}lectEnterElement(e){this.collectedEnterElements.push(e)}ions(e,t){const n=new pe,r=[],i=new Map,a=[],l=new Map,c=new Map,u=new Map,p=new Set;this.disabledNodes.forEach(;const d=this.bodyNode,f=Array.from(this.statesByElement.keys()),m=Ke(f,this.collectedEnterElements),g=new Map;let y=0;m.forEach((e,t)=>{const n=T+y++;g.set(t,n),e.forEach(e=>Qe(e,n))});const v=[],_=new Set,b=new Set;for(let s=0;s<this.collectedLeaveElements.length;s++){const e=this.collectedLeaveElements[s],t=e.__ng_removed;t&&t.setForRemoval&&(v.push(e),_.add(e),t.hasAnimation?this.driver.query(e,".ng-star-inserted",!0).forEach(e=>_.add(e)):b.add(e))}const w=new Map,E=Ke(f,Array.from(_));E.forEach(,e.push(;const C=[],S=[];for(let s=this._namespaceList.length-1;s>=0;s--){this._namespaceList[s].drainQueuedTransitions(t).forEach(e=>{const t=e.player,s=e.element;if(C.push(t),this.collectedEnterElements.length){const e=s.__ng_removed;if(e&&e.setForMove)return void t.destroy()}const i=!d||!this.driver.containsElement(d,s),o=w.get(s),p=g.get(s),f=this._buildInstruction(e,n,p,o,i);if(f.errors&&f.errors.length)return void S.push(f);if(i)return t.onStart(()=>$(s,f.fromStyles)),t.onDestroy(()=>V(s,f.toStyles)),void r.push(t);if(e.isFallbackTransition)return t.onStart(()=>$(s,f.fromStyles)),t.onDestroy(()=>V(s,f.toStyles)),void r.push(t);f.timelines.forEach(e=>e.stretchStartingKeyframe=!0),n.append(s,f.timelines);const m={instruction:f,player:t,element:s};a.push(m),f.queriedElements.forEach(,f.preStyleProps.forEach(,f.postStyleProps.forEach(})}if(S.length){const e=[];S.forEach(,C.forEach(e=>e.destroy()),this.reportError(e)}const x=new Map,D=new Map;a.forEach(,r.forEach(;const P=v.filter(e=>Ye(e,c,u)),k=new Map;Ge(k,this.driver,b,u,s.a).forEach(;const I=new Map;m.forEach(,P.forEach(;const N=[],M=[],F={};a.forEach(,M.forEach(,r.forEach(;for(let s=0;s<v.length;s++){const e=v[s],t=e.__ng_removed;if(Ze(e,A),t&&t.hasAnimation)continue;let n=[];if(l.size){let t=l.get(e);t&&t.length&&n.push(...t);let s=this.driver.query(e,O,!0);for(let e=0;e<s.length;e++){let t=l.get(s[e]);t&&t.length&&n.push(...t)}}const r=n.filter(e=>!e.destroyed);r.length?Je(this,e,r):this.processLeaveNode(e)}return v.length=0,N.forEach(,N}fterFlush(e){this._flushFns.push(e)}afterFlushAnimationsDone(e){this._whenQuietFns.push(e)}_getPreviousPlayers(e,t,n,s,r){let i=[];if(t){const t=this.playersByQueriedElement.get(e);t&&(i=t)}else{const t=this.playersByElement.get(e);if(t){const e=!r||r==$e;t.forEach(}}return(n||s)&&(i=i.filter(e=>(!n||n==e.namespaceId)&&(!s||s==e.triggerName))),i}buildAnimation(e,t,n,r,i,l){const c=t.triggerName,u=t.element,p=[],d=new Set,f=new Set,m=t.timelines.map(t=>{const o=t.element;d.add(o);const h=o.__ng_removed;if(h&&h.removedBeforeQueried)return new s.d(t.duration,t.delay);const m=o!==u,g=(n.get(o)||Re).map(e=>e.getRealPlayer())).filter(,y=i.get(o),v=l.get(o),_=a(this.driver,this._normalizer,0,t.keyframes,y,v),b=this._buildPlayer(t,_,g);if(t.subTimeline&&r&&f.add(o),m){const t=new qe(e,c,o);t.setRealPlayer(b),p.push(t)}return b});p.forEach(,d.forEach(e=>Qe(e,k));const g=o(m);return g.onDestroy(,f.forEach(,g}ister(e,t){this._transitionEngine.register(e,t)}destroy(e,t){this._transitionEngine.destroy(e,t)}onInsert(e,t,n,s){this._transitionEngine.insertNode(e,t,n,s)}isableAnimations(e,t){this._transitionEngine.markElementAsDisabled(e,t)}RenderingDone(){return this._transitionEngine.whenRenderingDone()}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */nt.initialStylesByElement=new WeakMap;const it="animation",ot="animationend";class at{pply(){!function(e,t){const n=dt(e,"").trim();let s=0;n.length&&(s=function(e,t){let n=0;for(let s=0;s<e.length;s++){e.charAt(s)===t&&n++}return n}(n,",")+1,t=`${n}, ${t}`);pt(e,"",t)}(this._element,`${this._duration}ms ${this._easing} ${this._delay}ms 1 normal ${this._fillMode} ${this._name}`),ht(this._element,this._eventFn,!1),this._startTime=Date.now()}pause(){lt(this._element,this._name,"paused")}tPosition(){return this._position}stroy(){this._destroyed||(this._destroyed=!0,this.finish(),function(e,t){const n=dt(e,"").split(","),s=ut(n,t);if(s>=0){n.splice(s,1);pt(e,"",n.join(","))}}(this._element,this._name))}}unction ct(e,t){const n=dt(e,"");if(n.indexOf(",")>0){return ut(n.split(","),t)}return ut([n],t)}s ft{nStart(e){this._onStartFns.push(e)}onDone(e){this._onDoneFns.push(e)}onDestroy(e){this._onDestroyFns.push(e)}flushDoneFns(){this._onDoneFns.forEach(e=>e()),this._onDoneFns=[]}_flushStartFns(){this._onStartFns.forEach(e=>e()),this._onStartFns=[]}etPosition(e){this._styler.setPosition(e)}getPosition(){return this._styler.getPosition()}nit(){if(this._state>=1)return;this._state=1;this.element;this._styler.apply(),this._delay&&this._styler.pause()}ause(){this.init(),this._styler.pause()}restart(){this.reset(),this.play()}iggerCallback(e){const t="start"==e?this._onStartFns:this._onDoneFns;t.forEach(e=>e()),t.length=0}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */lass gt{constructor(){this._count=0,this._head=document.querySelector("head")}validateStyleProperty(e){return _(e)}matchesElement(e,t){return b(e,t)}containsElement(e,t){return w(e,t)}query(e,t,n){return E(e,t,n)}computeStyle(e,t,n){return window.getComputedStyle(e)[t]}nimate(e,t,n,s,r,i=[],o){const a=i.filter(e=>e instanceof ft),l={};K(n,s)&&a.forEach(e=>{let t=e.currentSnapshot;Object.keys(t).forEach(e=>l[e]=t[e])});const c=function(e){let t={};if(e){(Array.isArray(e)?e:[e]).forEach(}return t}(t=Q(e,t,l));if(0==n)return new mt(e,c);const u="gen_css_kf_"+this._count++,h=this.buildKeyframeElement(e,u,t);document.querySelector("head").appendChild(h);const p=tt(e,t),d=new ft(e,t,u,n,s,r,c,p);return d.onDestroy(,d}}
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */}).call(this,n("8oxB"))},gRHU:"iJE/":function(e,t,n){"use strict";e.exports=(e,t,n)=>Object.keys(e).reduce(n)},jZKg:kJWO:kMlx:function(e,t,n){"use strict";const s=n("8zgK");function r(e){if(e)return function(e){for(const t in r.prototype)e[t]=r.prototype[t];return e}(e)}e.exports=r,r.prototype.clearTimeout=r.prototype.parse=function(e){return this._parser=e,this},r.prototype.responseType=function(e){return this._responseType=e,this},r.prototype.serialize=function(e){return this._serializer=e,this},r.prototype.timeout=r.prototype.retry=const i=["ECONNRESET","ETIMEDOUT","EADDRINFO","ESOCKETTIMEDOUT"];r.prototype._shouldRetry=r.prototype._retry=r.prototype.then=function(e,t){if(!this._fullfilledPromise){const e=this;this._endCalled&&console.warn("Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises"),this._fullfilledPromise=new Promise((t,n)=>{e.on("error",n),e.on("abort",()=>{const e=new Error("Aborted");e.code="ABORTED",e.status=this.status,e.method=this.method,e.url=this.url,n(e)}),e.end(})}return this._fullfilledPromise.then(e,t)},r.prototype.catch=r.prototype.use=r.prototype.ok=function(e){if("function"!=typeof e)throw Error("Callback required");return this._okCallback=e,this},r.prototype._isResponseOK=r.prototype.get=r.prototype.getHeader=r.prototype.get,r.prototype.set=r.prototype.unset=r.prototype.field=function(e,t){if(null==e)throw new Error(".field(name, val) name can not be empty");if(this._data)throw new Error(".field() can't be used if .send() is used. Please use only .send() or only .field() & .attach()");if(s(e)){for(const t in e)this.field(t,e[t]);return this}if(Array.isArray(t)){for(const n in t)this.field(e,t[n]);return this}if(null==t)throw new Error(".field(name, val) val can not be empty");return"boolean"==typeof t&&(t=""+t),this._getFormData().append(e,t),this},r.prototype.abort=r.prototype._auth=r.prototype.withCredentials=r.prototype.redirects=function(e){return this._maxRedirects=e,this},r.prototype.maxResponseSize=r.prototype.toJSON=function(){return{method:this.method,url:this.url,data:this._data,headers:this._header}},r.prototype.send=function(e){const t=s(e);let n=this._header["content-type"];if(this._formData)throw new Error(".send() can't be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()");if(t&&!this._data)Array.isArray(e)?this._data=[]:this._isHost(e)||(this._data={});else if(e&&this._data&&this._isHost(this._data))throw Error("Can't merge these send calls");if(t&&s(this._data))for(const s in e)this._data[s]=e[s];else"string"==typeof e?(n||this.type("form"),n=this._header["content-type"],this._data="application/x-www-form-urlencoded"==n?this._data?`${this._data}&${e}`:e:(this._data||"")+e):this._data=e;return!t||this._isHost(e)||n||this.type("json"),this},r.prototype.sortQuery=r.prototype._finalizeQueryString=r.prototype._appendQueryString=r.prototype._timeoutError=function(e,t,n){if(this._aborted)return;const s=new Error(`${e+t}ms exceeded`);s.timeout=t,s.code="ECONNABORTED",s.errno=n,this.timedout=!0,this.abort(),this.callback(s)},r.prototype._setTimeouts=,l7GE:lJxs:ml1J:function(e,t,n){"use strict";(function(t){const s=n("Qyje"),r=n("Qup9"),i=n("Qwta"),o=n("0KBE"),a=n("iJE/"),l=n("3t9w");function c(e){this._options=["auth","endpoint","headers","username","password","nonce"].reduce((t,n)=>(e&&e[n]&&(t[n]=e[n]),t),{}),this.transport=e&&e.transport,this._params={},this._supportedMethods=["head","get","put","post","delete"],this._path={}}const u=e=>e;const h=e=>e?a(e,(e,t,n)=>(null!=t&&""!==t&&(e[n]=t),e),{}):e,p=(e,t)=>{if(!e.reduce((e,n)=>!n.validate||(e||n.validate(t)),!1))throw new Error(["Invalid path component:",t,"does not match"+(e.length>1?" any of":""),e.reduce([]).join(", ")].join(" "))};c.prototype._renderQuery=function(){const e={...h(this._params)},t=(n=this._taxonomyFilters)?a(n,(e,t,n)=>(e[n]=t.map(.join("+"),e),{}):{};var n;e.filter={...h(this._filters),...t};const r=s.stringify(e,{arrayFormat:"brackets"}).split("&").sort().join("&"),i=/\?/.test(this._options.endpoint)?"&":"?";return""===r?"":i+r},c.prototype._renderPath=function(){this.validatePath();const e=this._path,t=Object.keys(e).sort(.map(t=>e[t]);return[this._namespace].concat(t).filter(u).join("/")},c.prototype.toString=function(){const e=this._renderPath(),t=this._renderQuery();return this._options.endpoint+e+t},c.prototype.setPathPart=function(e,t){if(this._path[e])throw new Error("Cannot overwrite value "+this._path[e]);return this._path[e]=t,this},c.prototype.validatePath=function(){const e=Object.keys(this._path).map(.filter(,t=Math.max.apply(null,e),n=[];let s=!0;for(let r=0;r<=t;r++)this._levels&&this._levels[r]&&(this._path[r]?(p(this._levels[r],this._path[r]),n.push(this._path[r])):(n.push(" ??? "),s=!1));if(!s)throw new Error("Incomplete URL! Missing component: /"+n.join("/"));return this},c.prototype.param=function(e,t){return!e||"string"==typeof e&&void 0===t||("string"==typeof e&&(e=i(e,t)),Object.keys(e).forEach(t=>{let n=e[t];Array.isArray(n)&&(n=l(n).sort(r)),this._params[t]=n})),this},c.prototype.context=o("context"),c.prototype.edit=function(){return this.context("edit")},c.prototype.embed=c.prototype.page=o("page"),c.prototype.perPage=o("per_page"),c.prototype.offset=o("offset"),c.prototype.order=o("order"),c.prototype.orderby=o("orderby"),c.prototype.search=o("search"),c.prototype.include=o("include"),c.prototype.exclude=o("exclude"),c.prototype.slug=o("slug"),c.prototype.namespace=c.prototype.auth=function(e){return"object"==typeof e&&("string"==typeof e.username&&(this._options.username=e.username),"string"==typeof e.password&&(this._options.password=e.password),e.nonce&&(this._options.nonce=e.nonce)),this._options.auth=!0,this},c.prototype.file=function(e,n){if(t.Buffer&&e instanceof t.Buffer&&!n)throw new Error(".file(): File name is a required argument when uploading a Buffer");return this._attachment=e,this._attachmentName=n||void 0,this},c.prototype.setHeaders=function(e,t){return"string"==typeof e&&(e=i(e,t)),this._options.headers={...this._options.headers||{},...e},this},c.prototype.get=function(e){return this.transport.get(this,e)},c.prototype.headers=c.prototype.create=function(e,t){return this.transport.post(this,e,t)},c.prototype.update=function(e,t){return this.transport.put(this,e,t)},c.prototype.delete=c.prototype.then=function(e,t){return this.transport.get(this).then(e,t)},e.exports=c}).call(this,n("yLpj"))},n6bG:nZbv:function(e,t){"use","on","once","set","query","type","accept","auth","withCredentials","sortQuery","retry","ok","redirects","timeout","buffer","serialize","parse","ca","key","pfx","cert"].forEach(e=>{n.prototype[e]=function(...t){return this._defaults.push({fn:e,args:t}),this}}),n.prototype._setDefaults=function(e){this._defaults.forEach(t=>{e[t.fn].apply(e,t.args)})},e.exports=n},ngJS:nmq7:o2Ax:function(e,t,n){"use strict";const s=n("oy1u").create,r=n("uPqc").create,i=n("iJE/");e.exports={generate:function(e){return i(e,(e,t,n)=>(e[n]=i(t,(e,t,i)=>{const o=s(t,i),a=r(o,i,n);return e[i]=e[i].Ctor=a,e},{}),e),{})}}},oHnp:function(e,t,n){"use strict";t.type=t.params=e=>e.split(/ *; */).reduce((e,t)=>{const n=t.split(/ *= */),s=n.shift(),r=n.shift();return s&&r&&(e[s]=r),e},{}),t.parseLinks=e=>e.split(/ *, */).reduce((e,t)=>{const n=t.split(/ *; */),s=n[0].slice(1,-1);return e[n[1].split(/ *= */)[1].slice(1,-1)]=s,e},{}),t.cleanHeader=,oNNP:oy1u:function(e,t,n){"use strict";const s=n("cpXB").create;function r(e,t){!function(e,t){let n;var r,i,o;r=e._levels,i=t.level,o={component:t.component,validate:t.validate,methods:t.methods},r[i]=r[i]||[],r[i].push(o),t.level>0&&(n=s(t),t.names.forEach(t=>{const s=t.replace(/[_-]+\w/g,;e._setters[s]||(e._setters[s]=n)}))}(e,t),t.children&&Object.keys(t.children).forEach(}e.exports={create:function(e,t){const n={_path:{0:t},_levels:{},_setters:{},_getArgs:e._getArgs};return Object.keys(e).forEach(t=>{"_getArgs"!==t&&r(n,e[t])}),n}}},quSY:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var s=n("DH7j"),r=n("XoHu"),i=n("n6bG");const o=(();class a{nsubscribe(){let e;if(this.closed)return;let{_parentOrParents:t,_unsubscribe:n,_subscriptions:l}=this;if(this.closed=!0,this._parentOrParents=null,this._subscriptions=null,t instanceof a)t.remove(this);else if(null!==t)for(let s=0;s<t.length;++s){t[s].remove(this)}if(Object(i.a)(n))try{n.call(this)}catch(u){e=u instanceof o?c(u.errors):[u]}if(Object(s.a)(l)){let t=-1,n=l.length;for(;++t<n;){const n=l[t];if(Object(r.a)(n))try{n.unsubscribe()}catch(u){e=e||[],u instanceof o?e=e.concat(c(u.errors)):e.push(u)}}}if(e)throw new o(e)}ar l;.EMPTY=((l=new a).closed=!0,l)},sxOR:uPqc:function(e,t,n){"use strict";const s=n("ml1J"),r=n("IvIj"),i=n("BhAj");e.exports={create:function(e,t,n){class o extends s{constructor(s){super(s),this._levels=e._levels,this.setPathPart(0,t).namespace(n)}}return"object"==typeof e._getArgs&&Object.keys(e._getArgs).forEach(e=>{const t=r[e];"object"==typeof t&&Object.keys(t).forEach(}),Object.keys(e._setters).forEach(,o}}},w1tV:function(e,t,n){"use strict";n.d(t,"a",function(){return m});var s=n("XNiG"),r=n("HDdC"),i=n("7o/Q"),o=n("quSY");t h=(();.a;nction m(){return e=>{return a()((t=f,(e));var t,n}}},w88U:function(e,t,n){"use strict";const s=n("YTqf").build,r=n("o2Ax").generate,i=n("0KBE"),o=n("BhAj"),a=n("IvIj");e.exports=function(e,t,n={}){let l=["head","get","patch","put","post","delete"];Array.isArray(n.methods)?l=n.methods.map(:"string"==typeof n.methods&&(l=[n.methods.trim().toLowerCase()]),-1!==l.indexOf("get")&&-1===l.indexOf("head")?l.push("head"):-1!==l.indexOf("head")&&-1===l.indexOf("get")&&l.push("get");const c={};c[e.replace(/^[\s/]*/,"/").replace(/[\s/]*$/,"/")+t.replace(/^[\s/]*/,"")]={namespace:e,methods:l};const u=s(c),h=r(u)[e],p=h[Object.keys(h)[0]].Ctor;function d(e={}){return new p({...e,...this?this._options:{}})}return n&&n.params&&n.params.forEach(e=>{"string"==typeof e&&("object"!=typeof a[e]?o(p.prototype,e,i(e)):Object.keys(a[e]).forEach(t=>{o(p.prototype,t,a[e][t])}))}),n&&"object"==typeof n.mixins&&Object.keys(n.mixins).forEach(e=>{o(p.prototype,e,n.mixins[e])}),d.Ctor=p,d}},yCtX:yLpj:"z+Ro":zHhn:function(e,t,n){"use strict";const s=e=>{if("number"==typeof e)return!0;if("string"==typeof e)return/^\d+$/.test(e);if(Array.isArray(e)){for(let t=0;t<e.length;t++)if(!s(e[t]))return!1;return!0}return!1};e.exports=s},zO7K:function(e,t,n){"use strict";const s=n("/fTC").parse;e.exports={locateAPIRootHeader:function(e){const t="https://api.w.org/",n=e.link||e.headers&&e.headers.link,r=s(n),i=r&&r[t];if(i)return i;throw new Error(`No header link found with rel="${t}"`)}}},zUnb:function(e,t,n){"use strict";n.r(t);var s=n("8Y7J"),r=n("1uSB");
/**
 * @license Angular v11.0.7
 * (c) 2010-2020 Google LLC. https://angular.io/
 * License: MIT
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
let i=null;/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const a=new s.B("DocumentToken");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class l{}.\u0275prov=Object(s.nc)({factory:c,token:l,providedIn:"platform"}),l.decorators=[{type:s.A,args:[{providedIn:"platform",useFactory:c}]}];new s.B("Location Initialized");*
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */*
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */u.\u0275prov=Object(s.nc)({factory:p,token:u,providedIn:"platform"}),u.decorators=[{type:s.A,args:[{providedIn:"platform",useFactory:p}]}],u.ctorParameters=class g{}.\u0275prov=Object(s.nc)({factory:y,token:g,providedIn:"root"}),g.decorators=[{type:s.A,args:[{providedIn:"root",useFactory:y}]}];const v=new s.B("appBaseHref");.decorators=[{type:s.A}],_.ctorParameters=()=>[{type:l},{type:String,decorators:[{type:s.N},{type:s.z,args:[v]}]}]
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */;.decorators=[{type:s.A}],b.ctorParameters=/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */;nction C(e){return e.replace(/\/index.html$/,"")}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */w.normalizeQueryParams=m,w.joinWithSlash=d,w.stripTrailingSlash=f,w.\u0275prov=Object(s.nc)({factory:E,token:w,providedIn:"root"}),w.decorators=[{type:s.A,args:[{providedIn:"root",useFactory:E}]}],w.ctorParameters=const S={ADP:[void 0,void 0,0],AFN:[void 0,void 0,0],ALL:[void 0,void 0,0],AMD:[void 0,void 0,2],AOA:[void 0,"Kz"],ARS:[void 0,"$"],AUD:["A$","$"],BAM:[void 0,"KM"],BBD:[void 0,"$"],BDT:[void 0,"\u09f3"],BHD:[void 0,void 0,3],BIF:[void 0,void 0,0],BMD:[void 0,"$"],BND:[void 0,"$"],BOB:[void 0,"Bs"],BRL:["R$"],BSD:[void 0,"$"],BWP:[void 0,"P"],BYN:[void 0,"\u0440.",2],BYR:[void 0,void 0,0],BZD:[void 0,"$"],CAD:["CA$","$",2],CHF:[void 0,void 0,2],CLF:[void 0,void 0,4],CLP:[void 0,"$",0],CNY:["CN\xa5","\xa5"],COP:[void 0,"$",2],CRC:[void 0,"\u20a1",2],CUC:[void 0,"$"],CUP:[void 0,"$"],CZK:[void 0,"K\u010d",2],DJF:[void 0,void 0,0],DKK:[void 0,"kr",2],DOP:[void 0,"$"],EGP:[void 0,"E\xa3"],ESP:[void 0,"\u20a7",0],EUR:["\u20ac"],FJD:[void 0,"$"],FKP:[void 0,"\xa3"],GBP:["\xa3"],GEL:[void 0,"\u20be"],GIP:[void 0,"\xa3"],GNF:[void 0,"FG",0],GTQ:[void 0,"Q"],GYD:[void 0,"$",2],HKD:["HK$","$"],HNL:[void 0,"L"],HRK:[void 0,"kn"],HUF:[void 0,"Ft",2],IDR:[void 0,"Rp",2],ILS:["\u20aa"],INR:["\u20b9"],IQD:[void 0,void 0,0],IRR:[void 0,void 0,0],ISK:[void 0,"kr",0],ITL:[void 0,void 0,0],JMD:[void 0,"$"],JOD:[void 0,void 0,3],JPY:["\xa5",void 0,0],KHR:[void 0,"\u17db"],KMF:[void 0,"CF",0],KPW:[void 0,"\u20a9",0],KRW:["\u20a9",void 0,0],KWD:[void 0,void 0,3],KYD:[void 0,"$"],KZT:[void 0,"\u20b8"],LAK:[void 0,"\u20ad",0],LBP:[void 0,"L\xa3",0],LKR:[void 0,"Rs"],LRD:[void 0,"$"],LTL:[void 0,"Lt"],LUF:[void 0,void 0,0],LVL:[void 0,"Ls"],LYD:[void 0,void 0,3],MGA:[void 0,"Ar",0],MGF:[void 0,void 0,0],MMK:[void 0,"K",0],MNT:[void 0,"\u20ae",2],MRO:[void 0,void 0,0],MUR:[void 0,"Rs",2],MXN:["MX$","$"],MYR:[void 0,"RM"],NAD:[void 0,"$"],NGN:[void 0,"\u20a6"],NIO:[void 0,"C$"],NOK:[void 0,"kr",2],NPR:[void 0,"Rs"],NZD:["NZ$","$"],OMR:[void 0,void 0,3],PHP:[void 0,"\u20b1"],PKR:[void 0,"Rs",2],PLN:[void 0,"z\u0142"],PYG:[void 0,"\u20b2",0],RON:[void 0,"lei"],RSD:[void 0,void 0,0],RUB:[void 0,"\u20bd"],RUR:[void 0,"\u0440."],RWF:[void 0,"RF",0],SBD:[void 0,"$"],SEK:[void 0,"kr",2],SGD:[void 0,"$"],SHP:[void 0,"\xa3"],SLL:[void 0,void 0,0],SOS:[void 0,void 0,0],SRD:[void 0,"$"],SSP:[void 0,"\xa3"],STD:[void 0,void 0,0],STN:[void 0,"Db"],SYP:[void 0,"\xa3",0],THB:[void 0,"\u0e3f"],TMM:[void 0,void 0,0],TND:[void 0,void 0,3],TOP:[void 0,"T$"],TRL:[void 0,void 0,0],TRY:[void 0,"\u20ba"],TTD:[void 0,"$"],TWD:["NT$","$",2],TZS:[void 0,void 0,2],UAH:[void 0,"\u20b4"],UGX:[void 0,void 0,0],USD:["$"],UYI:[void 0,void 0,0],UYU:[void 0,"$"],UYW:[void 0,void 0,4],UZS:[void 0,void 0,2],VEF:[void 0,"Bs",2],VND:["\u20ab",void 0,0],VUV:[void 0,void 0,0],XAF:["FCFA",void 0,0],XCD:["EC$","$"],XOF:["CFA",void 0,0],XPF:["CFPF",void 0,0],XXX:["\xa4"],YER:[void 0,void 0,0],ZAR:[void 0,"R"],ZMK:[void 0,void 0,0],ZMW:[void 0,"ZK"],ZWD:[void 0,void 0,0]};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */var x,T,A,D,P,k,O;function I(e,t){return V(Object(s.Kb)(e)[s.ub.DateFormat],t)}function N(e,t){return V(Object(s.Kb)(e)[s.ub.TimeFormat],t)}nction(e){e[e.Decimal=0]="Decimal",e[e.Percent=1]="Percent",e[e.Currency=2]="Currency",e[e.Scientific=3]="Scientific"}(x||(x={})),function(e){e[e.Zero=0]="Zero",e[e.One=1]="One",e[e.Two=2]="Two",e[e.Few=3]="Few",e[e.Many=4]="Many",e[e.Other=5]="Other"}(T||(T={})),function(e){e[e.Format=0]="Format",e[e.Standalone=1]="Standalone"}(A||(A={})),function(e){e[e.Narrow=0]="Narrow",e[e.Abbreviated=1]="Abbreviated",e[e.Wide=2]="Wide",e[e.Short=3]="Short"}(D||(D={})),function(e){e[e.Short=0]="Short",e[e.Medium=1]="Medium",e[e.Long=2]="Long",e[e.Full=3]="Full"}(P||(P={})),k||(k={})),O||(O={}));const j=s.Nb;ction B(e,t,n="en"){const r=function(e){return Object(s.Kb)(e)[s.ub.Currencies]}(n)[e]||S[e]||[],i=r[1];return"narrow"===t&&"string"==typeof i?i:r[0]||e}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const H=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,U={},q=/((?:[^GyYMLwWdEabBhHmsSzZO']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|Y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/;var z,W,G;function K(e,t,n,s){let r=function(e){if(oe(e))return e;if("number"==typeof e&&!isNaN(e))return new Date(e);if("string"==typeof e){e=e.trim();const t=parseFloat(e);if(!isNaN(e-t))return new Date(t);if(/^(\d{4}-\d{1,2}-\d{1,2})$/.test(e)){const[t,n,s]=e.split("-").map(;return new Date(t,n-1,s)}let n;if(n=e.match(H))return function(e){const t=new Date(0);let n=0,s=0;const r=e[8]?t.setUTCFullYear:t.setFullYear,i=e[8]?t.setUTCHours:t.setHours;e[9]&&(n=Number(e[9]+e[10]),s=Number(e[9]+e[11]));r.call(t,Number(e[1]),Number(e[2])-1,Number(e[3]));const o=Number(e[4]||0)-n,a=Number(e[5]||0)-s,l=Number(e[6]||0),c=Math.floor(1e3*parseFloat("0."+(e[7]||0)));return i.call(t,o,a,l,c),t}(n)}const t=new Date(e);if(!oe(t))throw new Error(`Unable to convert "${e}" into a date`);return t}(e);t=Q(n,t)||t;let i,o=[];for(;t;){if(i=q.exec(t),!i){o.push(t);break}{o=o.concat(i.slice(1));const e=o.pop();if(!e)break;t=e}}let a=r.getTimezoneOffset();s&&(a=ie(s,a),r=r,s,!0));let l="";return o.forEach(,l}tion Y(e,t,n=A.Format,r=!1){return function(i,o){return function(e,t,n,r,i,o){switch(n){case G.Months:return function(e,t,n){const r=Object(s.Kb)(e),i=V([r[s.ub.MonthsFormat],r[s.ub.MonthsStandalone]],t);return V(i,n)}(t,i,r)[e.getMonth()];case G.Days:return function(e,t,n){const r=Object(s.Kb)(e),i=V([r[s.ub.DaysFormat],r[s.ub.DaysStandalone]],t);return V(i,n)}(t,i,r)[e.getDay()];case G.DayPeriods:const a=e.getHours(),l=e.getMinutes();if(o){const e=t),n=t,i,r),o=e.findIndex(;if(-1!==o)return n[o]}return t,i,r)[a<12?0:1];case G.Eras:return t,r)[e.getFullYear()<=0?0:1];default:throw new Error(`unexpected translation type ${n}`)}}(i,o,e,t,n,r)}}function(e){e[e.Short=0]="Short",e[e.ShortGMT=1]="ShortGMT",e[e.Long=2]="Long",e[e.Extended=3]="Extended"}(z||(z={})),W||(W={})),G||(G={}));unction ne(e,t=!1){return function(n,s){let r;if(t){const e=new Date(n.getFullYear(),n.getMonth(),1).getDay()-1,t=n.getDate();r=1+Math.floor((t+e)/7)}else{const e=te(n),t=e.getFullYear()),s=e.getTime()-t.getTime();r=1+Math.round(s/6048e5)}return J(r,e,F(s,k.MinusSign))}}onst re={};**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const ae=/^(\d+)?\.((\d+)(-(\d+))?)?$/,le=".",ce="0";function ue(e,t,n,s,r,i,o=!1){let a="",l=!1;if(isFinite(e)){let c=function(e){let t,n,s,r,i,o=Math.abs(e)+"",a=0;(n=o.indexOf(le))>-1&&(o=o.replace(le,""));(s=o.search(/e/i))>0?(n<0&&(n=s),n+=+o.slice(s+1),o=o.substring(0,s)):n<0&&(n=o.length);for(s=0;o.charAt(s)===ce;s++);if(s===(i=o.length))t=[0],n=1;else{for(i--;o.charAt(i)===ce;)i--;for(n-=s,t=[],r=0;s<=i;s++,r++)t[r]=Number(o.charAt(s))}n>22&&(t=t.splice(0,21),a=n-1,n=1);return{digits:t,exponent:a,integerLen:n}}(e);o&&(c=c));let u=t.minInt,h=t.minFrac,p=t.maxFrac;if(i){const e=i.match(ae);if(null===e)throw new Error(`${i} is not a valid digit info`);const t=e[1],n=e[3],s=e[5];null!=t&&(u=de(t)),null!=n&&(h=de(n)),null!=s?p=de(s):null!=n&&h>p&&(p=h)}!c,h,p);let d=c.digits,f=c.integerLen;const m=c.exponent;let g=[];for(l=d.every(;f<u;f++)d.unshift(0);for(;f<0;f++)d.unshift(0);f>0?g=d.splice(f,d.length):(g=d,d=[0]);const y=[];for(d.length>=t.lgSize&&y.unshift(d.splice(-t.lgSize,d.length).join(""));d.length>t.gSize;)y.unshift(d.splice(-t.gSize,d.length).join(""));d.length&&y.unshift(d.join("")),a=y.join(F(n,s)),g.length&&(a+=F(n,r)+g.join("")),m&&(a+=F(n,k.Exponential)+"+"+m)}else a=F(n,k.Infinity);return a=e<0&&!l?t.negPre+a+t.negSuf:t.posPre+a+t.posSuf,a}function he(e,t,n,s,r){const i=pe(R(t,x.Currency),F(t,k.MinusSign));i.minFrac=s),i.maxFrac=i.minFrac;return ue(e,i,t,k.CurrencyGroup,k.CurrencyDecimal,r).replace("\xa4",n).replace("\xa4","").trim()}**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class fe{}function me(e,t,n,s){let r=`=${e}`;if(t.indexOf(r)>-1)return r;if(r=n.getPluralCategory(e,s),t.indexOf(r)>-1)return r;if(t.indexOf("other")>-1)return"other";throw new Error(`No plural message found for value "${e}"`)}/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */ge.decorators=[{type:s.A}],ge.ctorParameters=/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */;e.decorators=[{type:s.s,args:[{selector:"[ngClass]"}]}],ve.ctorParameters=ve.propDecorators={klass:[{type:s.D,args:["class"]}],ngClass:[{type:s.D,args:["ngClass"]}]};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
e.decorators=[{type:s.s,args:[{selector:"[ngComponentOutlet]"}]}],_e.ctorParameters=()=>[{type:s.hb}],_e.propDecorators={ngComponentOutlet:[{type:s.D}],ngComponentOutletInjector:[{type:s.D}],ngComponentOutletContent:[{type:s.D}],ngComponentOutletNgModuleFactory:[{type:s.D}]};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
.decorators=[{type:s.s,args:[{selector:"[ngFor][ngForOf]"}]}],we.ctorParameters=()=>[{type:s.hb},{type:s.db},{type:s.E}],we.propDecorators={ngForOf:[{type:s.D}],ngForTrackBy:[{type:s.D}],ngForTemplate:[{type:s.D}]};class Ee{constructor(e,t){this.record=e,this.view=t}}e.decorators=[{type:s.s,args:[{selector:"[ngIf]"}]}],Ce.ctorParameters=()=>[{type:s.hb},{type:s.db}],Ce.propDecorators={ngIf:[{type:s.D}],ngIfThen:[{type:s.D}],ngIfElse:[{type:s.D}]};unction xe(e,t){if(!!(t&&!t.createEmbeddedView))throw new Error(`${e} must be a TemplateRef, but received '${Object(s.ic)(t)}'.`)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */lass Ae{teDefaultCasesAe.decorators=[{type:s.s,args:[{selector:"[ngSwitch]"}]}],Ae.propDecorators={ngSwitch:[{type:s.D}]};e.decorators=[{type:s.s,args:[{selector:"[ngSwitchCase]"}]}],De.ctorParameters=()=>[{type:s.hb},{type:s.db},{type:Ae,decorators:[{type:s.w}]}],De.propDecorators={ngSwitchCase:[{type:s.D}]};e.decorators=[{type:s.s,args:[{selector:"[ngSwitchDefault]"}]}],Pe.ctorParameters=()=>[{type:s.hb},{type:s.db},{type:Ae,decorators:[{type:s.w}]}]
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */;e.decorators=[{type:s.s,args:[{selector:"[ngPlural]"}]}],ke.ctorParameters=()=>[{type:fe}],ke.propDecorators={ngPlural:[{type:s.D}]};e.decorators=[{type:s.s,args:[{selector:"[ngPluralCase]"}]}],Oe.ctorParameters=/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */;e.decorators=[{type:s.s,args:[{selector:"[ngStyle]"}]}],Ie.ctorParameters=()=>[{type:s.t},{type:s.F},{type:s.U}],Ie.propDecorators={ngStyle:[{type:s.D,args:["ngStyle"]}]};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
e.decorators=[{type:s.s,args:[{selector:"[ngTemplateOutlet]"}]}],Ne.ctorParameters=()=>[{type:s.hb}],Ne.propDecorators={ngTemplateOutletContext:[{type:s.D}],ngTemplateOutlet:[{type:s.D}]};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const Me=[ve,_e,we,Ce,Ne,Ie,Ae,De,Pe,ke,Oe];
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 *//**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Re=new je=new e.decorators=[{type:s.S,args:[{name:"async",pure:!1}]}],Le.ctorParameters=()=>[{type:s.k}]
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */;class Ve{transform(e){if(null==e)return null;if("string"!=typeof e)throw Fe(Ve,e);return e.toLowerCase()}}Ve.decorators=[{type:s.S,args:[{name:"lowercase"}]}];const $e=/(?:[A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE83\uDE86-\uDE89\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D])\S*/g;e.decorators=[{type:s.S,args:[{name:"titlecase"}]}];e.decorators=[{type:s.S,args:[{name:"uppercase"}]}];
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
e.decorators=[{type:s.S,args:[{name:"date",pure:!0}]}],Ue.ctorParameters=()=>[{type:String,decorators:[{type:s.z,args:[s.G]}]}]
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */;const qe=/#/g;e.decorators=[{type:s.S,args:[{name:"i18nPlural",pure:!0}]}],ze.ctorParameters=()=>[{type:fe}]
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */;e.decorators=[{type:s.S,args:[{name:"i18nSelect",pure:!0}]}];
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
e.decorators=[{type:s.S,args:[{name:"json",pure:!1}]}];class Ke{ransform(e,t=Qe){if(!e||!(e instanceof Map)&&"object"!=typeof e)return null;this.differ||(this.differ=this.differs.find(e).create());const n=this.differ.diff(e);return n&&(this.keyValues=[],n.forEachItem(e=>{
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var t,n;this.keyValues.push((t=e.key,n=e.currentValue,{key:t,value:n}))}),this.keyValues.sort(t)),this.keyValues}}/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */Ke.decorators=[{type:s.S,args:[{name:"keyvalue",pure:!1}]}],Ke.ctorParameters=e.decorators=[{type:s.S,args:[{name:"number"}]}],Ze.ctorParameters=()=>[{type:String,decorators:[{type:s.z,args:[s.G]}]}];e.decorators=[{type:s.S,args:[{name:"percent"}]}],Je.ctorParameters=()=>[{type:String,decorators:[{type:s.z,args:[s.G]}]}];class Xe{constructor(e,t="USD"){this._locale=e,this._defaultCurrencyCode=t}transform(e,t,n="symbol",s,r){if(!Ye(e))return null;r=r||this._locale,"boolean"==typeof n&&(n=n?"symbol":"code");let i=t||this._defaultCurrencyCode;"code"!==n&&(i="symbol"===n||"symbol-narrow"===n?B(i,"symbol"===n?"wide":"narrow",r):n);try{return he(et(e),r,i,t,s)}catch(o){throw Fe(Xe,o.message)}}}**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */Xe.decorators=[{type:s.S,args:[{name:"currency"}]}],Xe.ctorParameters=t.decorators=[{type:s.S,args:[{name:"slice",pure:!1}]}];
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const nt=[Le,He,Ve,Ge,tt,Ze,Je,Be,Xe,Ue,ze,We,Ke];
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class st{}st.decorators=[{type:s.I,args:[{declarations:[Me,nt],exports:[Me,nt],providers:[{provide:fe,useClass:ge}]}]}];
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
new s.fb("11.0.7");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class rt{}rt.\u0275prov=Object(s.nc)({token:rt,providedIn:"root",factory:);class it{llToAnchor(e){var t;if(!this.supportsScrolling())return;const n=null!==(t=this.document.getElementById(e))&&void 0!==t?t:this.document.getElementsByName(e)[0];void 0!==n&&(this.scrollToElement(n),this.attemptFocus(n))}tion ot(e){return Object.getOwnPropertyDescriptor(e,"scrollRestoration")}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
(()=>{if(s.Pb.Node)s.Pb.Node.prototype.contains})();class at extends
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license Angular v11.0.7
 * (c) 2010-2020 Google LLC. https://angular.io/
 * License: MIT
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
etProperty(e,t){return e[t]}log(e){window.console&&window.console.log&&window.console.log(e)}patchEvent(e,t){e.dispatchEvent(t)}etValue(e){return e.value}tory(){return window.history}etBaseHref(e){const t=function(){if(!ct&&(ct=document.querySelector("base"),!ct))return null;return ct.getAttribute("href")}();return null==t?null:/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */(t)}portsCookies(){return!0}let lt,ct=null;const ut=new s.B("TRANSITION_ID");const ht=[{provide:s.c,useFactory:function(e,t,n){return()=>{n.get(s.d).donePromise.then(}},deps:[ut,a,s.C],multi:!0}];
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class pt{**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 *//**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const ft={ApplicationRef:s.f,NgZone:s.M};onst gt=[{provide:s.c,useFactory:function(e){return dt("probe",mt),dt("coreTokens",Object.assign(Object.assign({},ft),(e||[]).reduce({}))),()=>mt},deps:[[s.L,new s.N]],multi:!0}],yt=new s.B("EventManagerPlugins");t.decorators=[{type:s.A}],vt.ctorParameters=/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */t.decorators=[{type:s.A}];t.decorators=[{type:s.A}],wt.ctorParameters=()=>[{type:void 0,decorators:[{type:s.z,args:[a]}]}]
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */;const Et={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"},Ct=/%COMP%/g,St="_nghost-%COMP%",xt="_ngcontent-%COMP%";decorators=[{type:s.A}],Dt.ctorParameters=@".charCodeAt(0);**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */t.decorators=[{type:s.A}],It.ctorParameters=()=>[{type:void 0,decorators:[{type:s.z,args:[a]}]}]
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */;const Nt={pan:!0,panstart:!0,panmove:!0,panend:!0,pancancel:!0,panleft:!0,panright:!0,panup:!0,pandown:!0,pinch:!0,pinchstart:!0,pinchmove:!0,pinchend:!0,pinchcancel:!0,pinchin:!0,pinchout:!0,press:!0,pressup:!0,rotate:!0,rotatestart:!0,rotatemove:!0,rotateend:!0,rotatecancel:!0,swipe:!0,swipeleft:!0,swiperight:!0,swipeup:!0,swipedown:!0,tap:!0},Mt=new s.B("HammerGestureConfig"),Ft=new s.B("HammerLoader");t.decorators=[{type:s.A}];class jt extends _t{upports(e){return!(!Nt.hasOwnProperty(e.toLowerCase())&&!this.isCustomEvent(e))&&(!(!window.Hammer&&!this.loader)||(this.console.warn(`The "${e}" event cannot be bound because Hammer.JS is not loaded and no custom loader has been specified.`),!1))}t.decorators=[{type:s.A}],jt.ctorParameters=()=>[{type:void 0,decorators:[{type:s.z,args:[a]}]},{type:Rt,decorators:[{type:s.z,args:[Mt]}]},{type:s.qb},{type:void 0,decorators:[{type:s.N},{type:s.z,args:[Ft]}]}];const Lt=[{provide:yt,useClass:jt,multi:!0,deps:[a,Mt,s.qb,[new s.N,Ft]]},{provide:Mt,useClass:Rt,deps:[]}],Vt=Lt;(class{}).decorators=[{type:s.I,args:[{providers:Lt}]}];
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const $t=["alt","control","meta","shift"],Bt={"\b":"Backspace","\t":"Tab","\x7f":"Delete","\x1b":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},Ht={A:"1",B:"2",C:"3",D:"4",E:"5",F:"6",G:"7",H:"8",I:"9",J:"*",K:"+",M:"-",N:".",O:"/","`":"0","\x90":"NumLock"},Ut={alt:e=>e.altKey,control:e=>e.ctrlKey,meta:e=>e.metaKey,shift:e=>e.shiftKey};class qt extends _t{constructor(e){super(e)}tic getEventFullKey(e){let t="",n=/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */(e);return n=n.toLowerCase()," "===n?n="space":"."===n&&(n="dot"),$t.forEach(s=>{if(s!=n){(0,Ut[s])(e)&&(t+=s+".")}}),t+=n,t}t.decorators=[{type:s.A}],qt.ctorParameters=()=>[{type:void 0,decorators:[{type:s.z,args:[a]}]}];class zt{}t.\u0275prov=Object(s.nc)({factory:token:zt,providedIn:"root"}),zt.decorators=[{type:s.A,args:[{providedIn:"root",useExisting:Object(s.lb)(()=>Gt)}]}];class Gt extends zt{constructor(e){super(),this._doc=e}sanitize(e,t){if(null==t)return null;switch(e){case s.Y.NONE:return t;case s.Y.HTML:return Object(s.yb)(t,"HTML")?Object(s.lc)(t):Object(s.wb)(this._doc,String(t));case s.Y.STYLE:return Object(s.yb)(t,"Style")?Object(s.lc)(t):t;case s.Y.SCRIPT:if(Object(s.yb)(t,"Script"))return Object(s.lc)(t);throw new Error("unsafe value used in a script context");case s.Y.URL:Object(s.Ob)(t);return Object(s.yb)(t,"URL")?Object(s.lc)(t):Object(s.xb)(String(t));case s.Y.RESOURCE_URL:if(Object(s.yb)(t,"ResourceURL"))return Object(s.lc)(t);throw new Error("unsafe value used in a resource URL context (see https://g.co/ng/security#xss)");default:throw new Error(`Unexpected SecurityContext ${e} (see https://g.co/ng/security#xss)`)}}bypassSecurityTrustHtml(e){return Object(s.Ab)(e)}bypassSecurityTrustStyle(e){return Object(s.Db)(e)}bypassSecurityTrustScript(e){return Object(s.Cb)(e)}bypassSecurityTrustUrl(e){return Object(s.Eb)(e)}Gt.\u0275prov=Object(s.nc)({factory:token:Gt,providedIn:"root"}),Gt.decorators=[{type:s.A,args:[{providedIn:"root",useFactory:Wt,deps:[s.C]}]}],Gt.ctorParameters=()=>[{type:void 0,decorators:[{type:s.z,args:[a]}]}]
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */;const Kt=[{provide:s.Q,useValue:"browser"},{provide:s.R,useValue:multi:!0},{provide:a,useFactory:deps:[]}],Qt=[{provide:s.X,useExisting:zt},{provide:zt,useClass:Gt,deps:[a]}],Zt=(Object(s.jb)(s.nb,"browser",Kt),[Qt,{provide:s.tb,useValue:"root"},{provide:s.u,useFactory:function(){return new s.u},deps:[]},{provide:yt,useClass:It,multi:!0,deps:[a,s.M,s.Q]},{provide:yt,useClass:qt,multi:!0,deps:[a]},Vt,{provide:Dt,useClass:Dt,deps:[vt,wt,s.b]},{provide:s.V,useExisting:Dt},{provide:bt,useExisting:wt},{provide:wt,useClass:wt,deps:[a]},{provide:s.eb,useClass:s.eb,deps:[s.M]},{provide:vt,useClass:vt,deps:[yt,s.M]},gt]);/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function Xt(){return new Yt(Object(s.oc)(a))}Jt.decorators=[{type:s.I,args:[{providers:Zt,exports:[st,s.e]}]}],Jt.ctorParameters=class Yt{eateElement(e,t=!1){if(!t){const t=this._parseSelector(e),n=this.getTag(t);if(n&&this._containsAttributes(e,n))return n}const n=this._dom.createElement("meta");this._setMetaElementAttributes(e,n);return this._doc.getElementsByTagName("head")[0].appendChild(n),n}\u0275prov=Object(s.nc)({factory:Xt,token:Yt,providedIn:"root"}),Yt.decorators=[{type:s.A,args:[{providedIn:"root",useFactory:Xt,deps:[]}]}],Yt.ctorParameters=()=>[{type:void 0,decorators:[{type:s.z,args:[a]}]}];const en={httpEquiv:"http-equiv"};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function tn(){return new nn(Object(s.oc)(a))}n.\u0275prov=Object(s.nc)({factory:tn,token:nn,providedIn:"root"}),nn.decorators=[{type:s.A,args:[{providedIn:"root",useFactory:tn,deps:[]}]}],nn.ctorParameters=()=>[{type:void 0,decorators:[{type:s.z,args:[a]}]}]
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */;"undefined"!=typeof window&&window;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */n.decorators=[{type:s.A}];(class{}).decorators=[{type:s.I,args:[{providers:[{provide:sn,useFactory:deps:[a,s.b]}]}]}];
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
new s.fb("11.0.7");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license Angular v11.0.7
 * (c) 2010-2020 Google LLC. https://angular.io/
 * License: MIT
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const rn=function(){const e=new Map;return e.set(r.j.ANALYZE_FOR_ENTRY_COMPONENTS,s.a),e.set(r.j.ElementRef,s.t),e.set(r.j.NgModuleRef,s.K),e.set(r.j.ViewContainerRef,s.hb),e.set(r.j.ChangeDetectorRef,s.k),e.set(r.j.Renderer2,s.U),e.set(r.j.QueryList,s.T),e.set(r.j.TemplateRef,s.db),e.set(r.j.CodegenComponentFactoryResolver,s.pb),e.set(r.j.ComponentFactoryResolver,s.p),e.set(r.j.ComponentFactory,s.o),e.set(r.j.ComponentRef,s.q),e.set(r.j.NgModuleFactory,s.J),e.set(r.j.createModuleFactory,s.Gb),e.set(r.j.moduleDef,s.Vb),e.set(r.j.moduleProviderDef,s.Wb),e.set(r.j.RegisterModuleFactoryFn,s.gc),e.set(r.j.Injector,s.C),e.set(r.j.ViewEncapsulation,s.ib),e.set(r.j.ChangeDetectionStrategy,s.j),e.set(r.j.SecurityContext,s.Y),e.set(r.j.LOCALE_ID,s.G),e.set(r.j.TRANSLATIONS_FORMAT,s.cb),e.set(r.j.inlineInterpolate,s.Qb),e.set(r.j.interpolate,s.Rb),e.set(r.j.EMPTY_ARRAY,s.rb),e.set(r.j.EMPTY_MAP,s.sb),e.set(r.j.viewDef,s.mc),e.set(r.j.elementDef,s.Jb),e.set(r.j.anchorDef,s.zb),e.set(r.j.textDef,s.jc),e.set(r.j.directiveDef,s.Ib),e.set(r.j.providerDef,s.dc),e.set(r.j.queryDef,s.ec),e.set(r.j.pureArrayDef,s.Zb),e.set(r.j.pureObjectDef,s.bc),e.set(r.j.purePipeDef,s.cc),e.set(r.j.pipeDef,s.ac),e.set(r.j.nodeValue,s.Yb),e.set(r.j.ngContentDef,s.Xb),e.set(r.j.unwrapValue,s.kc),e.set(r.j.createRendererType2,s.Hb),e.set(r.j.createComponentFactory,s.Fb),e}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */();const on=new s.B("ErrorCollector"),an={provide:s.P,useValue:"/"},ln={get,cn=new s.B("HtmlParser");const un=new class{omponentModuleUrl(e,t){const n=t.moduleId;if("string"==typeof n){return Object(r.A)(n)?n:`package:${n}`}if(null!=n)throw Object(r.B)(`moduleId should be a string in "${Object(s.ic)(e)}". See https://goo.gl/wIDDiL for more information.\nIf you're using Webpack you should inline the template and the styles, see https://goo.gl/X2J8zc.`);return`./${Object(s.ic)(e)}`}parameters(e){return this.reflectionCapabilities.parameters(e)}nnotations(e){return this.reflectionCapabilities.annotations(e)}ropMetadata(e){return this.reflectionCapabilities.propMetadata(e)}hasLifecycleHook(e,t){return this.reflectionCapabilities.hasLifecycleHook(e,t)}guards(e){return this.reflectionCapabilities.guards(e)},hn=ln,pn=new r.c,dn=[{provide:r.b,useValue:un},{provide:r.t,useValue:hn},{provide:r.m,deps:[]},{provide:r.w,useExisting:r.m},{provide:s.qb,deps:[]},{provide:r.n,deps:[]},{provide:r.q,deps:[r.n]},{provide:cn,useClass:r.h,deps:[]},{provide:r.i,useFactory:(e,t,n,i,o)=>{const a=(t=t||"")?i.missingTranslation:s.H.Ignore;return new r.i(e,t,n,a,o)},deps:[cn,[new s.N,new s.z(s.bb)],[new s.N,new s.z(s.cb)],[r.c],[s.qb]]},{provide:r.h,useExisting:r.i},{provide:r.x,deps:[r.c,r.b,r.q,r.g,r.i,s.qb]},{provide:r.l,useClass:r.l,deps:[]},{provide:r.d,deps:[r.t,r.y,r.h,r.c]},{provide:r.a,deps:[r.c,r.h,r.p,r.e,r.r,r.w,r.g,r.d,s.qb,[s.N,r.u],r.b,[s.N,on]]},an,{provide:r.v,deps:[r.y]},{provide:r.z,deps:[r.b]},{provide:r.o,deps:[r.b]},{provide:r.c,useValue:pn},{provide:s.l,useClass:class{constructor(e,t,n,s,i,o,a,l,c,u,h){this._metadataResolver=t,this._delegate=new r.k(t,n,s,i,o,a,l,c,u,h,this.getExtraNgModuleProviders.bind(this)),this.injector=e}getExtraNgModuleProviders(){return[this._metadataResolver.getProviderMetadata(new r.s(s.l,{useValue:this}))]}compileModuleSync(e){return this._delegate.compileModuleSync(e)}compileModuleAsync(e){return this._delegate.compileModuleAsync(e)}ompileModuleAndAllComponentsAsync(e){return this._delegate.compileModuleAndAllComponentsAsync(e).then(}loadAotSummaries(e){this._delegate.loadAotSummaries(e)}hasAotSummary(e){return this._delegate.hasAotSummary(e)}getComponentFactory(e){return this._delegate.getComponentFactory(e)}clearCache(){this._delegate.clearCache()}clearCacheFor(e){this._delegate.clearCacheFor(e)}getModuleId(e){const t=this._metadataResolver.getNgModuleMetadata(e);return t&&t.id||void 0}},deps:[s.C,r.a,r.x,r.v,r.z,r.o,r.w,r.b,r.l,r.c,s.qb]},{provide:r.f,deps:[]},{provide:r.g,useExisting:r.f},{provide:r.y,deps:[s.P]},{provide:r.e,deps:[r.b]},{provide:r.r,deps:[r.b]},{provide:r.p,deps:[r.b]}],fn=(s.l,dn);**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const yn=Object(s.jb)(s.nb,"coreDynamic",[{provide:s.h,useValue:{},multi:!0},{provide:s.m,useClass:class{reateCompiler(e=[]){const t={useJit:mn((n=this._defaultOptions.concat(e)).map(e=>e.useJit)),defaultEncapsulation:mn(n.map(e=>e.defaultEncapsulation)),providers:gn(n.map(e=>e.providers)),missingTranslation:mn(n.map(e=>e.missingTranslation)),preserveWhitespaces:mn(n.map(e=>e.preserveWhitespaces))};var n;return s.C.create([fn,{provide:r.c,useFactory:()=>new r.c({useJit:t.useJit,jitDevMode:Object(s.mb)(),defaultEncapsulation:t.defaultEncapsulation,missingTranslation:t.missingTranslation,preserveWhitespaces:t.preserveWhitespaces}),deps:[]},t.providers]).get(s.l)}},deps:[s.h]}]);
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class vn extends r.t{vn.decorators=[{type:s.A}];
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const _n={providers:[{provide:r.t,useClass:vn,deps:[]}]},bn=[Kt,{provide:s.h,useValue:_n,multi:!0},{provide:s.Q,useValue:"browser"}];
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class wn extends r.t{constructor(){if(super(),this._cache=s.Pb.$templateCache,null==this._cache)throw new Error("CachedResourceLoader: Template cache was not found in $templateCache.")}get
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */new s.fb("11.0.7"),r.t
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */;const En=Object(s.jb)(yn,"browserDynamic",bn);ject.create;Object.create;var xn=n("HDdC"),Tn=n("DH7j"),An=n("lJxs"),Dn=n("XoHu"),Pn=n("Cfvw");/**
 * @license Angular v11.0.7
 * (c) 2010-2020 Google LLC. https://angular.io/
 * License: MIT
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const On=new s.B("NgValueAccessor"),In={provide:On,useExisting:Object(s.lb)(()=>Nn),multi:!0};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */n.decorators=[{type:s.s,args:[{selector:"input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]",host:{"(change)":"onChange($event.target.checked)","(blur)":"onTouched()"},providers:[In]}]}],Nn.ctorParameters=()=>[{type:s.U},{type:s.t}]
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */;const Mn={provide:On,useExisting:Object(s.lb)(()=>Rn),multi:!0};const Fn=new s.B("CompositionEventMode");class Rn{riteValue(e){const t=null==e?"":e;this._renderer.setProperty(this._elementRef.nativeElement,"value",t)}registerOnChange(e){this.onChange=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this._renderer.setProperty(this._elementRef.nativeElement,"disabled",e)}**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
.decorators=[{type:s.s,args:[{selector:"input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]",host:{"(input)":"$any(this)._handleInput($event.target.value)","(blur)":"onTouched()","(compositionstart)":"$any(this)._compositionStart()","(compositionend)":"$any(this)._compositionEnd($event.target.value)"},providers:[Mn]}]}],Rn.ctorParameters=const Vn=new s.B("NgValidators"),$n=new s.B("NgAsyncValidators"),Bn=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;class Hn{poseAsync(e){if(!e)return null;const t=e.filter(Un);return 0==t.length?null:function(e){return function(...e){if(1===e.length){const t=e[0];if(Object(Tn.a)(t))return kn(t,null);if(Object(Dn.a)(t)&&Object.getPrototypeOf(t)===Object.prototype){const e=Object.keys(t);return kn(e.map(e=>t[e]),e)}}if("function"==typeof e[e.length-1]){const t=e.pop();return kn(e=1===e.length&&Object(Tn.a)(e[0])?e[0]:e,null).pipe(Object(An.a)()}return kn(e,null)}(Wn(e,t).map(qn)).pipe(Object(An.a)(zn))}}}ion Kn(e){return null!=e?Hn.compose(Gn(e)):null}nction Jn(e){return e._rawValidators}function Xn(e){return e._rawAsyncValidators}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 *//**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 *//**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 *//**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */onst ss={"[class.ng-untouched]":"ngClassUntouched","[class.ng-touched]":"ngClassTouched","[class.ng-pristine]":"ngClassPristine","[class.ng-dirty]":"ngClassDirty","[class.ng-valid]":"ngClassValid","[class.ng-invalid]":"ngClassInvalid","[class.ng-pending]":"ngClassPending"};class rs extends ns{constructor(e){super(e)}}rs.decorators=[{type:s.s,args:[{selector:"[formControlName],[ngModel],[formControl]",host:ss}]}],rs.ctorParameters=()=>[{type:ts,decorators:[{type:s.Z}]}];s.decorators=[{type:s.s,args:[{selector:"[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]",host:ss}]}],is.ctorParameters=/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */;const os={provide:On,useExisting:Object(s.lb)(()=>as),multi:!0};class as{constructor(e,t){this._renderer=e,this._elementRef=t,this.onChange=e=>{},this.onTouched=()=>{}}writeValueegisterOnChange(e){this.onChange=t=>{e(""==t?null:parseFloat(t))}}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this._renderer.setProperty(this._elementRef.nativeElement,"disabled",e)}}as.decorators=[{type:s.s,args:[{selector:"input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]",host:{"(input)":"onChange($event.target.value)","(blur)":"onTouched()"},providers:[os]}]}],as.ctorParameters=()=>[{type:s.U},{type:s.t}]
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */;const ls={provide:On,useExisting:Object(s.lb)(()=>us),multi:!0};s.decorators=[{type:s.A}];class us{erOnTouched(e){this.onTouched=e}setDisabledState(e){this._renderer.setProperty(this._elementRef.nativeElement,"disabled",e)}us.decorators=[{type:s.s,args:[{selector:"input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]",host:{"(change)":"onChange()","(blur)":"onTouched()"},providers:[ls]}]}],us.ctorParameters=us.propDecorators={name:[{type:s.D}],formControlName:[{type:s.D}],value:[{type:s.D}]};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const hs={provide:On,useExisting:Object(s.lb)(()=>ps),multi:!0};s.decorators=[{type:s.s,args:[{selector:"input[type=range][formControlName],input[type=range][formControl],input[type=range][ngModel]",host:{"(change)":"onChange($event.target.value)","(input)":"onChange($event.target.value)","(blur)":"onTouched()"},providers:[hs]}]}],ps.ctorParameters=()=>[{type:s.U},{type:s.t}]
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const ds={provide:On,useExisting:Object(s.lb)(,multi:!0};.decorators=[{type:s.s,args:[{selector:"select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]",host:{"(change)":"onChange($event.target.value)","(blur)":"onTouched()"},providers:[ds]}]}],ms.ctorParameters=ms.propDecorators={compareWith:[{type:s.D}]};s.decorators=[{type:s.s,args:[{selector:"option"}]}],gs.ctorParameters=()=>[{type:s.t},{type:s.U},{type:ms,decorators:[{type:s.N},{type:s.w}]}],gs.propDecorators={ngValue:[{type:s.D,args:["ngValue"]}],value:[{type:s.D,args:["value"]}]};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const ys={provide:On,useExisting:Object(s.lb)(()=>_s),multi:!0};.decorators=[{type:s.s,args:[{selector:"select[multiple][formControlName],select[multiple][formControl],select[multiple][ngModel]",host:{"(change)":"onChange($event.target)","(blur)":"onTouched()"},providers:[ys]}]}],_s.ctorParameters=()=>[{type:s.U},{type:s.t}],_s.propDecorators={compareWith:[{type:s.D}]};/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
nction Cs(e,t){const n=t.valueAccessor.registerOnChange(n),t.valueAccessor.registerOnTouched(n),Ts(e,t,!0),e&&(t._invokeOnDestroyCallbacks(),e._registerOnCollectionChange(()=>{}))}nction Ts(e,t,n){if(null!==e){if(null!==t.validator){const n=Jn(e);Array.isArray(n)&&n.length>0&&e.setValidators(n.filter(e=>e!==t.validator))}if(null!==t.asyncValidator){const n=Xn(e);Array.isArray(n)&&n.length>0&&e.setAsyncValidators(n.filter(e=>e!==t.asyncValidator))}}if(n){const e=()=>{};Ss(t._rawValidators,e),Ss(t._rawAsyncValidators,e)}}decorators=[{type:s.s,args:[{selector:"option"}]}],bs.ctorParameters=bs.propDecorators={ngValue:[{type:s.D,args:["ngValue"]}],value:[{type:s.D,args:["value"]}]};const ks=[Nn,ps,as,ms,_s,us];unction Is(e,t){if(!t)return null;let n,s,r;return Array.isArray(t),t.forEach(,r||(s||(n||null))}function Ns(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const Ms="VALID",Fs="INVALID",Rs="PENDING",js="DISABLED";unction Vs(e){return Array.isArray(e)?Kn(e):e||null}ss Us{et validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}et parent(){return this._parent}get valid(){return this.status===Ms}get invalid(){return this.status===Fs} dirty(){return!this.pristine}tValidators(e){this._rawValidators=e,this._composedValidatorFn=Vs(e)}learValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}arkAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(e=>{e.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}ent(e){this._parent=e}return function(e,t,n){if(null==t)return null;if(Array.isArray(t)||(t=t.split(n)),Array.isArray(t)&&0===t.length)return null;let s=e;return t.forEach(,s}(this,e,".")}trolsDirty(){return this._anyControls(e=>e.dirty)}isterOnCollectionChange(e){this._onCollectionChange=e}lass qs extends Us{ateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Ns(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Ns(this._onDisabledChange,e)}_forEachChild(e){}lass zs extends Us{constructor(e,t,n){super(Ls(t),$s(n,t)),this.controls=e,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!n})}sent(e){this._forEachChild((t,n)=>{if(void 0===e[n])throw new Error(`Must supply a value for form control with name: '${n}'.`)})}}class Ws extends Us{ngth(){return this.controls.length}nse
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Gs={provide:es,useExisting:Object(s.lb)(()=>Qs)},Ks=Promise.resolve(null);s.decorators=[{type:s.s,args:[{selector:"form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]",providers:[Gs],host:{"(submit)":"onSubmit($event)","(reset)":"onReset()"},outputs:["ngSubmit"],exportAs:"ngForm"}]}],Qs.ctorParameters=()=>[{type:Array,decorators:[{type:s.N},{type:s.Z},{type:s.z,args:[Vn]}]},{type:Array,decorators:[{type:s.N},{type:s.Z},{type:s.z,args:[$n]}]}],Qs.propDecorators={options:[{type:s.D,args:["ngFormOptions"]}]};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
s.decorators=[{type:s.s}];
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const Js={provide:es,useExisting:Object(s.lb)(()=>Xs)};class Xs extends Zs{constructor(e,t,n){super(),this._parent=e,this._setValidators(t),this._setAsyncValidators(n)}_checkParentType(){!(this._parent instanceof Xs)&&this._parent,0}}Xs.decorators=[{type:s.s,args:[{selector:"[ngModelGroup]",providers:[Js],exportAs:"ngModelGroup"}]}],Xs.ctorParameters=Xs.propDecorators={name:[{type:s.D,args:["ngModelGroup"]}]};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const Ys={provide:ts,useExisting:Object(s.lb)(()=>tr)},er=Promise.resolve(null);class tr extends ts{OnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}et formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}kParentType(){0}.decorators=[{type:s.s,args:[{selector:"[ngModel]:not([formControlName]):not([formControl])",providers:[Ys],exportAs:"ngModel"}]}],tr.ctorParameters=tr.propDecorators={name:[{type:s.D}],isDisabled:[{type:s.D,args:["disabled"]}],model:[{type:s.D,args:["ngModel"]}],options:[{type:s.D,args:["ngModelOptions"]}],update:[{type:s.O,args:["ngModelChange"]}]};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class nr{}nr.decorators=[{type:s.s,args:[{selector:"form:not([ngNoForm]):not([ngNativeValidate])",host:{novalidate:""}}]}];
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const sr=new s.B("NgModelWithFormControlWarning"),rr={provide:ts,useExisting:Object(s.lb)(()=>ir)};class ir extends ts{et isDisabled(e){0}ngOnChangeset path(){return[]}get control(){return this.form}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_isControlChanged(e){return e.hasOwnProperty("form")}}ir._ngModelWarningSentOnce=!1,ir.decorators=[{type:s.s,args:[{selector:"[formControl]",providers:[rr],exportAs:"ngForm"}]}],ir.ctorParameters=ir.propDecorators={form:[{type:s.D,args:["formControl"]}],isDisabled:[{type:s.D,args:["disabled"]}],model:[{type:s.D,args:["ngModel"]}],update:[{type:s.O,args:["ngModelChange"]}]};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const or={provide:es,useExisting:Object(s.lb)(()=>ar)};class ar extends es{constructor(e,t){super(),this.validators=e,this.asyncValidators=t,this.submitted=!1,this.directives=[],this.form=null,this.ngSubmit=new s.v,this._setValidators(e),this._setAsyncValidators(t)}t control(){return this.form}tControl(e){return this.form.get(e.path)}ddFormGroup(e){const t=this.form.get(e.path);Ds(t,e),t.updateValueAndValidity({emitEvent:!1})}removeFormGroup(e){}getFormGroup(e){return this.form.get(e.path)}emoveFormArray(e){}getFormArray(e){return this.form.get(e.path)}Reset(){this.resetForm()}updateDomValue(){this.directives.forEach(e=>{const t=this.form.get(e.path);e.control!==t&&(Cs(e.control||null,e),t&&Es(t,e),e.control=t)}),this.form._updateTreeValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(()=>this._updateDomValue()),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}checkFormPresentar.decorators=[{type:s.s,args:[{selector:"[formGroup]",providers:[or],host:{"(submit)":"onSubmit($event)","(reset)":"onReset()"},exportAs:"ngForm"}]}],ar.ctorParameters=ar.propDecorators={form:[{type:s.D,args:["formGroup"]}],ngSubmit:[{type:s.O}]};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const lr={provide:es,useExisting:Object(s.lb)(()=>cr)};class cr extends Zs{constructor(e,t,n){super(),this._parent=e,this._setValidators(t),this._setAsyncValidators(n)}_checkParentType(){pr(this._parent),0}}cr.decorators=[{type:s.s,args:[{selector:"[formGroupName]",providers:[lr]}]}],cr.ctorParameters=()=>[{type:es,decorators:[{type:s.N},{type:s.w},{type:s.ab}]},{type:Array,decorators:[{type:s.N},{type:s.Z},{type:s.z,args:[Vn]}]},{type:Array,decorators:[{type:s.N},{type:s.Z},{type:s.z,args:[$n]}]}],cr.propDecorators={name:[{type:s.D,args:["formGroupName"]}]};const ur={provide:es,useExisting:Object(s.lb)(()=>hr)};class hr extends es{OnDestroy(){this.formDirective&&this.formDirective.removeFormArray(this)}et formDirective(){return this._parent?this._parent.formDirective:null}get path(){return ws(null==this.name?this.name:this.name.toString(),this._parent)}_checkParentType(){pr(this._parent),0}}/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */hr.decorators=[{type:s.s,args:[{selector:"[formArrayName]",providers:[ur]}]}],hr.ctorParameters=hr.propDecorators={name:[{type:s.D,args:["formArrayName"]}]};const dr={provide:ts,useExisting:Object(s.lb)(()=>fr)};class fr extends ts{rmDirective(){return this._parent?this._parent.formDirective:null}r._ngModelWarningSentOnce=!1,fr.decorators=[{type:s.s,args:[{selector:"[formControlName]",providers:[dr]}]}],fr.ctorParameters=fr.propDecorators={name:[{type:s.D,args:["formControlName"]}],isDisabled:[{type:s.D,args:["disabled"]}],model:[{type:s.D,args:["ngModel"]}],update:[{type:s.O,args:["ngModelChange"]}]};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const mr={provide:Vn,useExisting:Object(s.lb)(()=>yr),multi:!0},gr={provide:Vn,useExisting:Object(s.lb)(()=>vr),multi:!0};r.decorators=[{type:s.s,args:[{selector:":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]",providers:[mr],host:{"[attr.required]":'required ? "" : null'}}]}],yr.propDecorators={required:[{type:s.D}]};r.decorators=[{type:s.s,args:[{selector:"input[type=checkbox][required][formControlName],input[type=checkbox][required][formControl],input[type=checkbox][required][ngModel]",providers:[gr],host:{"[attr.required]":'required ? "" : null'}}]}];const _r={provide:Vn,useExisting:Object(s.lb)(()=>br),multi:!0};class br{constructor(){this._enabled=!1}gisterOnValidatorChange(e){this._onChange=e}}br.decorators=[{type:s.s,args:[{selector:"[email][formControlName],[email][formControl],[email][ngModel]",providers:[_r]}]}],br.propDecorators={email:[{type:s.D}]};const wr={provide:Vn,useExisting:Object(s.lb)(()=>Er),multi:!0};r.decorators=[{type:s.s,args:[{selector:"[minlength][formControlName],[minlength][formControl],[minlength][ngModel]",providers:[wr],host:{"[attr.minlength]":"minlength ? minlength : null"}}]}],Er.propDecorators={minlength:[{type:s.D}]};const Cr={provide:Vn,useExisting:Object(s.lb)(()=>Sr),multi:!0};r.decorators=[{type:s.s,args:[{selector:"[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]",providers:[Cr],host:{"[attr.maxlength]":"maxlength ? maxlength : null"}}]}],Sr.propDecorators={maxlength:[{type:s.D}]};const xr={provide:Vn,useExisting:Object(s.lb)(()=>Tr),multi:!0};r.decorators=[{type:s.s,args:[{selector:"[pattern][formControlName],[pattern][formControl],[pattern][ngModel]",providers:[xr],host:{"[attr.pattern]":"pattern ? pattern : null"}}]}],Tr.propDecorators={pattern:[{type:s.D}]};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const Ar=[nr,gs,bs,Rn,as,ps,Nn,ms,_s,us,rs,is,yr,Er,Sr,Tr,vr,br],Dr=[tr,Xs,Qs],Pr=[ir,ar,fr,cr,hr];class kr{}kr.decorators=[{type:s.I,args:[{declarations:Ar,exports:Ar}]}];class Or{group(e,t=null){const n=this._reduceControls(e);let s,r=null,i=null;return null!=t&&(!
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
t)?(r=null!=t.validator?t.validator:null,i=null!=t.asyncValidator?t.asyncValidator:null):(r=null!=t.validators?t.validators:null,i=null!=t.asyncValidators?t.asyncValidators:null,s=null!=t.updateOn?t.updateOn:void 0)),new zs(n,{asyncValidators:i,updateOn:s,validators:r})}decorators=[{type:s.A}];
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
new s.fb("11.0.7");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class Ir{}Ir.decorators=[{type:s.I,args:[{declarations:Dr,providers:[cs],exports:[kr,Dr]}]}];r.decorators=[{type:s.I,args:[{declarations:[Pr],providers:[Or,cs],exports:[kr,Pr]}]}];
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var Mr=n("GS7A"),Fr=n("fDlF");
/**
 * @license Angular v11.0.7
 * (c) 2010-2020 Google LLC. https://angular.io/
 * License: MIT
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class Rr extends Mr.b{constructor(e,t){super(),this._nextAnimationId=0;const n={id:"0",encapsulation:s.ib.None,styles:[],data:{animation:[]}};this._renderer=e.createRenderer(t.body,n)}Rr.decorators=[{type:s.A}],Rr.ctorParameters=()=>[{type:s.V},{type:void 0,decorators:[{type:s.z,args:[a]}]}];st $r="@",Br="@.disabled";r.decorators=[{type:s.A}],Hr.ctorParameters=lass qr extends Ur{etProperty(e,t,n){t.charAt(0)==$r?"."==t.charAt(1)&&t==Br?(n=void 0===n||!!n,this.disableAnimations(e,n)):this.engine.process(this.namespaceId,e,t.substr(1),n):this.delegate.setProperty(e,t,n)}listen(e,t,n){if(t.charAt(0)==$r){const s=e);let r=t.substr(1),i="";return r.charAt(0)!=$r&&([r,i]=function(e){const t=e.indexOf("."),n=e.substring(0,t),s=e.substr(t+1);return[n,s]}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */(r)),this.engine.listen(this.namespaceId,s,r,i,}return this.delegate.listen(e,t,n)}}class zr extends Fr.b{zr.decorators=[{type:s.A}],zr.ctorParameters=()=>[{type:void 0,decorators:[{type:s.z,args:[a]}]},{type:Fr.a},{type:Fr.c}];const Wr=new s.B("AnimationModuleType"),Gr=[{provide:Mr.b,useClass:Rr},{provide:Fr.c,useFactory:,{provide:Fr.b,useClass:zr},{provide:s.V,useFactory:function(e,t,n){return new Hr(e,t,n)},deps:[Dt,Fr.b,s.M]}],Kr=[{provide:Fr.a,useFactory:,{provide:Wr,useValue:"BrowserAnimations"},...Gr],Qr=[{provide:Fr.a,useClass:Fr.e},{provide:Wr,useValue:"NoopAnimations"},...Gr];
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class Zr{}Zr.decorators=[{type:s.I,args:[{exports:[Jt],providers:Kr}]}];(class{}).decorators=[{type:s.I,args:[{exports:[Jt],providers:Qr}]}];
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
let Jr=class{constructor(){}isAndroid;Jr.ctorParameters=()=>[],Jr=Cn([Object(s.A)(),Sn("design:paramtypes",[])],Jr);let Xr=class{constructor(e){this.platformService=e,this.isParallaxEnabled=!0}Xr.ctorParameters=()=>[{type:Jr}],Xr.propDecorators={selector:[{type:s.D}]},Xr=Cn([Object(s.n)({selector:"rellax",template:"<div><ng-content></ng-content></div>"}),Sn("design:paramtypes",[Jr])],Xr);var Yr=n("XNiG"),ei=n("n6bG");Object.prototype.toString;function ti(e,t,n,s){return Object(ei.a)(n)&&(s=n,n=void 0),s?ti(e,t,n).pipe(Object(An.a)():new xn.a(}ar si=n("VRyK"),ri=n("quSY");.now=onst li=new ai(class extends ii{tion ci(e=0,t=li){var n;return n=e,(Object(Tn.a)(n)||!(n-parseFloat(n)+1>=0)||e<0)&&(e=0),t&&"function"==typeof t.schedule||(t=li),new xn.a(}ar hi=n("l7GE"),pi=n("ZUHj");function di(e){return t=>t.lift(new fi(e))}s vi extends hi.a{yNext(e,t){let n=this.durationSubscription;this.value=e,this.hasValue=!0,n&&(n.unsubscribe(),this.remove(n)),n=Object(pi.a)(this,t),n&&!n.closed&&this.add(this.durationSubscription=n)}itValue(){if(this.hasValue){const e=this.value,t=this.durationSubscription;t&&(this.durationSubscription=null,t.unsubscribe(),this.remove(t)),this.value=null,this.hasValue=!1,super._next(e)}}}var _i=n("z+Ro"),bi=n("yCtX"),wi=n("jZKg");var Ei=n("5+tZ");var Ci,Si=n("7o/Q");**
 * @license Angular v11.0.7
 * (c) 2010-2020 Google LLC. https://angular.io/
 * License: MIT
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class Ai{}class Di{}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 *//**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */ass Ii{constructor(e={}){if(this.updates=null,this.cloneFrom=null,this.encoder=e.encoder||new ki,e.fromString){if(e.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=function(e,t){const n=new Map;e.length>0&&e.split("&").forEach(;return n}(e.fromString,this.encoder)}else e.fromObject?(this.map=new Map,Object.keys(e.fromObject).forEach():this.map=null}nd(e,t){return this.clone({param:e,value:t,op:"a"})}set(e,t){return this.clone({param:e,value:t,op:"s"})}*
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Ni(e){return"undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer}function Mi(e){return"undefined"!=typeof Blob&&e instanceof Blob}lass Ri{constructor(e,t,n,s){let r;if(this.url=t,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=e.toUpperCase(),this.method)||s?(this.body=void 0!==n?n:null,r=s):r=n,r&&(this.reportProgress=!!r.reportProgress,this.withCredentials=!!r.withCredentials,r.responseType&&(this.responseType=r.responseType),r.headers&&(this.headers=r.headers),r.params&&(this.params=r.params)),this.headers||(this.headers=new Pi),this.params){const e=this.params.toString();if(0===e.length)this.urlWithParams=t;else{const n=t.indexOf("?"),s=-1===n?"?":n<t.length-1?"&":"";this.urlWithParams=t+s+e}}else this.params=new Ii,this.urlWithParams=t}**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */!Ci||(Ci={}));
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */lass Hi{equest(e,t,n={}){let s;if(e instanceof Ri)s=e;else{let r,i;r=n.headers instanceof Pi?n.headers:new Pi(n.headers),n.params&&(i=n.params instanceof Ii?n.params:new Ii({fromObject:n.params})),s=new Ri(e,t,void 0!==n.body?n.body:null,{headers:r,params:i,reportProgress:n.reportProgress,responseType:n.responseType||"json",withCredentials:n.withCredentials})}const r=function(...e){let t=e[e.length-1];return Object(_i.a)(t)?(e.pop(),Object(wi.a)(e,t)):Object(bi.a)(e)}(s).pipe((i=e=>this.handler.handle(e),Object(Ei.a)(i,o,1)));var i,o;if(e instanceof Ri||"events"===n.observe)return r;const a=r.pipe((l=e=>e instanceof Vi,);var l,c;switch(n.observe||"body"){case"body":switch(s.responseType){case"arraybuffer":return a.pipe(Object(An.a)(e=>{if(null!==e.body&&!(e.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return e.body}));case"blob":return a.pipe(Object(An.a)();case"text":return a.pipe(Object(An.a)();case"json":default:return a.pipe(Object(An.a)(e=>e.body))}case"response":return a;default:throw new Error(`Unreachable: unhandled observe type ${n.observe}}`)}}delete(e,t={}){return this.request("DELETE",e,t)}get(e,t={}){return this.request("GET",e,t)}head(e,t={}){return this.request("HEAD",e,t)}tch(e,t,n={}){return this.request("PATCH",e,Bi(n,t))}post(e,t,n={}){return this.request("POST",e,Bi(n,t))}Hi.decorators=[{type:s.A}],Hi.ctorParameters=()=>[{type:Ai}]
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */;onst qi=new s.B("HTTP_INTERCEPTORS");i.decorators=[{type:s.A}];
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
let Wi=0;class Gi{}class Ki{extCallback(){return"ng_jsonp_callback_"+Wi++}handle(e){if("JSONP"!==e.method)throw new Error("JSONP requests must use JSONP request method.");if("json"!==e.responseType)throw new Error("JSONP requests must use Json response type.");return new xn.a(t=>{const n=this.nextCallback(),s=e.urlWithParams.replace(/=JSONP_CALLBACK(&|$)/,`=${n}$1`),r=this.document.createElement("script");r.src=s;let i=null,o=!1,a=!1;this.callbackMap[n]=const l=c=u=return r.addEventListener("load",c),r.addEventListener("error",u),this.document.body.appendChild(r),t.next({type:Ci.Sent}),)}}Ki.decorators=[{type:s.A}],Ki.ctorParameters=()=>[{type:Gi},{type:void 0,decorators:[{type:s.z,args:[a]}]}];i.decorators=[{type:s.A}],Qi.ctorParameters=()=>[{type:Ki}]
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */;const Zi=/^\)\]\}',?\n/;class Ji{}class Xi{constructor(){}build(){return new XMLHttpRequest}}Xi.decorators=[{type:s.A}],Xi.ctorParameters=()=>[];i.decorators=[{type:s.A}],Yi.ctorParameters=()=>[{type:Ji}]
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */;const eo=new s.B("XSRF_COOKIE_NAME"),to=new s.B("XSRF_HEADER_NAME");class no{}o.decorators=[{type:s.A}],so.ctorParameters=()=>[{type:void 0,decorators:[{type:s.z,args:[a]}]},{type:String,decorators:[{type:s.z,args:[s.Q]}]},{type:String,decorators:[{type:s.z,args:[eo]}]}];o.decorators=[{type:s.A}],ro.ctorParameters=/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */;o.decorators=[{type:s.A}],io.ctorParameters=()=>[{type:Di},{type:s.C}];o.decorators=[{type:s.I,args:[{providers:[ro,{provide:qi,useExisting:ro,multi:!0},{provide:no,useClass:so},{provide:eo,useValue:"XSRF-TOKEN"},{provide:to,useValue:"X-XSRF-TOKEN"}]}]}];class ao{}ao.decorators=[{type:s.I,args:[{imports:[oo.withOptions({cookieName:"XSRF-TOKEN",headerName:"X-XSRF-TOKEN"})],providers:[Hi,{provide:Ai,useClass:io},Yi,{provide:Di,useExisting:Yi},Xi,{provide:Ji,useExisting:Xi}]}]}];(class{}).decorators=[{type:s.I,args:[{providers:[Ki,{provide:Gi,useFactory:,{provide:qi,useClass:Qi,multi:!0}]}]}];
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
let lo=class{};lo=Cn([Object(s.n)({selector:"noindex",template:"<ng-content></ng-content>"})],lo);let co=class{};co=Cn([Object(s.I)({imports:[st],declarations:[lo],exports:[lo]})],co);let uo=class{constructor(){}ngAfterContentInit(){var e=e||{};(e={globeData:null,globeKitView:null,globeKitContainer:null,introDone:!1,camPower:0,camZ:42,lowRes:!1,init:function(t){e.globeKitContainer=document.getElementById("globekit-canvas-container"),e.lowRes="ontouchstart"in document.documentElement,e.globeKitView=new GK.View({canvas:document.getElementById("globekit-canvas"),textureDir:"/wp-content/themes/piano/frontend/images/globekit",modelsDir:"/wp-content/themes/piano/frontend/globekit-bin",sceneOffset:vec2.fromValues(.33,0),clearColor:vec4.fromValues(249/255,249/255,249/255,1),antialias:!1,alpha:!1,lowRes:e.lowRes,onload:function(){e.playIntroAnimation()}}),e.globeData=new GlobeData(e.globeKitView),GlobeData.processData(),e.windowDidResize(),e.addEventListeners(),e.configureDrawables()},addCities:function(){for(var t=[],n=0;n<GlobeDataCities.length;n++){var s=GlobeDataCities[n],r=vec3.fromValues(s.rectifiedPos[0],s.rectifiedPos[1],s.rectifiedPos[2]);t.push(r)}e.globeKitView.addPoints(t)},addEventListeners:function(){window.addEventListener("resize",GK.debounce(function(){e.windowDidResize()},75)),window.addEventListener("orientationchange",,window.addEventListener("mousemove",function(t){if(e.introDone){var n=.5*e.globeKitView.canvas.width+.165*e.globeKitView.canvas.width,s=.5*e.globeKitView.canvas.height,r=vec2.fromValues(t.clientX,t.clientY),i=vec2.fromValues(n,s),o=1-vec2.distance(r,i)/e.globeKitView.canvas.width;o=GK.Ease.smoothstep(.5,1,o),e.globeKitView.scene.camTargetZ=e.camZ-3*o*e.camPower}})},windowDidResize:function(){var t=e.globeKitContainer.offsetWidth,n=e.globeKitContainer.offsetHeight;e.globeKitView.canvas.width=t,e.globeKitView.canvas.height=n,e.globeKitView.resize(),e.globeKitView.scene.globe.pointSize=e.getGlobePointSize(),window.innerWidth<768?(e.globeKitView.scene.camera.sceneOffset=vec2.fromValues(0,.25),e.globeKitView.scene.camTargetZ=62,e.camZ=62):(e.globeKitView.scene.camera.sceneOffset=vec2.fromValues(.33,0),e.globeKitView.scene.camTargetZ=42,e.camZ=42)},getGlobePointSize:function(){var t=.00185*e.globeKitView.canvas.height;return e.lowRes&&(t*=1.5),t},configureDrawables:function(){var t=e.globeKitView.scene;t.camera.position=vec3.fromValues(0,0,e.camZ);vec3.fromValues(1,1,1);var n=vec3.fromValues(100/255,100/255,100/255),s=vec3.fromValues(200/255,200/255,200/255),r=(vec3.fromValues(135/255,140/255,157/255),vec3.fromValues(18/255,53/255,144/255));t.globe.alpha=0,t.globe.noisePower=12,t.points.alpha=0,t.quad.alpha=0,t.dimension.alpha=0,t.publisherEvent.progress=0,t.globe.pointSize=e.getGlobePointSize(),t.globe.color1=s,t.globe.color2=s,t.globe.crestColor=n,t.globe.takeoverColor=r,t.globe.scatterColor=n,t.points.color1=n,t.points.pointSize=20,t.epicenter.color1=n,t.epicenter.color2=n},playIntroAnimation:function(){e.globeKitContainer.style.visibility="visible";var t=e.globeKitView.scene;t.setYawPitch(1.5,-.6),t.globe.offsetPower=1;var n=t.globe.offsetPower,s=0-n,r=1.2*t.globe.pointSize,i=t.globe.pointSize-r,o=.75*e.camZ,a=e.camZ-o,l=t.globe.noisePower,c=2-l;t.yawSpeed=.03,t.pitchSpeed=-4e-4;var u=!1,h=!1,p=new GK.Animation(4.2);p.updateFn=function(p){var d=GK.Ease.inOutQuad(p),f=GK.Ease.smoothstep(0,.3,p);t.yawSpeed=-(.03-.03*GK.Ease.outSine(p)),t.pitchSpeed=-(4e-4-4e-4*GK.Ease.outSine(p));var m=GK.Ease.smoothstep(.56,1,d),g=GK.Ease.smoothstep(.56,1,d);t.globe.offsetPower=n+g*s,t.globe.pointSize=r+m*i,t.globe.alpha=f;var y=GK.Ease.smoothstep(.75,1,d);t.globe.noisePower=l+y*c;var v=GK.Ease.smoothstep(.6,1,d);e.camZ=o+v*a,e.globeKitView.scene.camera.position=vec3.fromValues(0,0,e.camZ);var _=GK.Ease.smoothstep(.7,.9,p);t.dimension.alpha=_,t.quad.alpha=_,t.points.alpha=_,p>.1&&!u&&(e.globeKitView.pulse(.4,.25,0,4),u=!0),p>.8&&!h&&(e.globeData.start(),h=!0)},p.completeFn=function(){e.introDone=!0,p=null;var n=vec3.fromValues(157/255,166/255,196/255);t.globe.crestColor=n;var s=new GK.Animation(2);s.updateFn=s.start()},p.start()},destroy:function(){for(var t=e.globeKitView.attachedElements,n=0;n<t.length;n++){var s=t[n];s.parentNode.removeChild(s)}clearTimeout(e.unfocusTimeout),e.globeKitView.destroy(),delete e.globeKitView}}).init()}};uo.ctorParameters=()=>[],uo=Cn([Object(s.n)({selector:"globe-hero",template:"<div><ng-content></ng-content></div>"}),Sn("design:paramtypes",[])],uo);class ho{constructor(e,t){this.compare=e,this.keySelector=t}call(e,t){return t.subscribe(new po(e,this.compare,this.keySelector))}}et fo=class{constructor(e){this.ngZone=e,this.destroy$=new Yr.a,this.maxOpacity=.25,this.minOpacity=0,this.scroll$=ti(document,"scroll")}ngAfterViewInit(){this.shadowhost&&(window.innerWidth<=760?this.shadow.nativeElement.style.opacity=this.minOpacity.toString():(this.shadowHostNode=document.querySelector(`[data-hero-shadow-host=${this.shadowhost}]`),this.windowHeight=window.innerHeight,this.shadow.nativeElement.style.opacity=this.maxOpacity.toString(),this.ngZone.runOutsideAngular(()=>{var e,t;this.scroll$.pipe(di(this.destroy$),gi(()=>ci(10)),Object(An.a)(()=>{let e=this.shadowHostNode.getBoundingClientRect(),t=this.windowHeight-e.bottom;if(e.bottom<0)return this.minOpacity;if(t<0)return this.maxOpacity;if(t>0&&e.bottom>0){let e=t/this.windowHeight;return(this.maxOpacity*(1-e)).toFixed(5)}}),(e=n=>n.lift(new ho(e,t)))).subscribe(e=>{this.shadow.nativeElement.style.opacity=e?e.toString():"0"})})))}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}};fo.ctorParameters=()=>[{type:s.M}],fo.propDecorators={shadowhost:[{type:s.D}],shadow:[{type:s.gb,args:["shadow"]}]},fo=Cn([Object(s.n)({selector:"hero-shadow",template:'<div #shadow class="shadow"></div>',styles:['\n    .shadow {\n      content: "";\n      display: none;\n      position: absolute;\n      width: 100%;\n      z-index: 2;\n      top: 100vh;\n      height: 100vh;\n      background-color: #101820;\n    }\n\n    @media (min-width: 768px) {\n        .shadow {\n            display: block;\n        }\n    }\n  ']}),Sn("design:paramtypes",[s.M])],fo);const mo={provide:On,useExisting:Object(s.lb)(()=>go),multi:!0};let go=class{constructor(){this.options=[],this.onSelect=new s.v,this.selected={}}select(e){this.selected=e,this.onSelect.emit(e),this.onChangeCallback(e)}egisterOnChange(e){this.onChangeCallback=e}registerOnTouched(e){this.onTouchedCallback=e}setDisabledState(){}};go.propDecorators={title:[{type:s.D}],options:[{type:s.D}],onSelect:[{type:s.O}]},go=Cn([Object(s.n)({selector:"marketing-select",template:'<div>\r\n  <input  readonly [value]="selected.label || \'\'"\r\n         class="request-demo__form-input contact-us__form-input pn-input pn-input--flat pn-input--pointer" placeholder="{{selected.label || title}}">\r\n  <div>\r\n    <ul class="pn-marketing-dropdown__body">\r\n      <li\r\n        *ngFor="let option of options"\r\n        (click)="select(option)"\r\n        [class.pn-marketing-dropdown__item--active]="option.value === selected.value"\r\n        class="pn-marketing-dropdown__item pn-marketing-dropdown__item--hoverable pn-marketing-text">\r\n        <span>{{option.label}}</span>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n',providers:[mo],styles:[""]})],go);let yo=class{constructor(){this.options=[],this.onSelect=new s.v,this.selected={},this.locationList=[{value:null,label:"Everywhere",entry:[]}]}ngOnInit(){this.selected=this.locationList[0],this.setDropdownShiftX()}ngOnChanges(){this.setLocationsList(this.options)}select(e){this.selected=e,this.onSelect.emit(e)}setLocationsList(e){if(e)for(let t=0;t<e.length;t++)this.locationList.push({value:e[t],label:e[t],entry:[e[t]]}),this.locationList[0].entry.push(e[t])}setDropdownShiftX(){this.dropdownShiftX=document.documentElement.clientWidth<1223?0:-43}};yo.propDecorators={defaultTitle:[{type:s.D}],options:[{type:s.D}],onSelect:[{type:s.O}]},yo=Cn([Object(s.n)({selector:"jobs-location-select",template:'<div>\r\n    <span  class="pn-jobs-location-dropdown__title">\r\n        <span class="pn-jobs-location-dropdown__title-text">{{selected.label || defaultTitle}}</span>\r\n        <span class="pn-jobs-location-dropdown__title-icon pn-icon pn-icon--down"></span>\r\n    </span>\r\n    <div class="pn-jobs-location-dropdown__body">\r\n        <ul class="pn-jobs-location-dropdown__list">\r\n            <li\r\n                *ngFor="let option of locationList"\r\n                (click)="select(option)"\r\n                [class.active]="option.value === selected.value"\r\n                class="pn-jobs-location-dropdown__item pn-jobs-location-dropdown__item--hoverable pn-marketing-text">\r\n                <span class="pn-jobs-location-dropdown__label">{{option.label}}</span>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</div>\r\n',styles:[""]})],yo);let vo=class{constructorransform(e,t,n=this.regExpObj.regExpr,s=this.regExpObj.doubleSpaces,r=this.regExpObj.vacancyStart){let i=e.replace(n," ").replace(s," "),o=i.match(r),a=o?o.index+o[0].length:0,l=i.slice(a).split(" ");return l.length=t,l.join(" ")+"..."}};vo=Cn([Object(s.S)({name:"getFirstDescription"})],vo);let _o=new s.B("app.config");const bo={wpApiUrl:"/wp-json/piano/v1",wpApiUrlDefault:"/wp-json/wp/v2",themeUrl:"/wp-content/themes/piano"};
/**
 * @license Angular v8.0.0-beta.10+1.sha-a28b3e3
 * (c) 2010-2019 Google LLC. https://angular.io/
 * License: MIT
 */o.decorators=[{type:s.A}],wo.ctorParameters=()=>[]
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */;const Eo={Get:0,Post:1,Put:2,Delete:3,Options:4,Head:5,Patch:6};Eo[Eo.Get]="Get",Eo[Eo.Post]="Post",Eo[Eo.Put]="Put",Eo[Eo.Delete]="Delete",Eo[Eo.Options]="Options",Eo[Eo.Head]="Head",Eo[Eo.Patch]="Patch";const Co={Unsent:0,Open:1,HeadersReceived:2,Loading:3,Done:4,Cancelled:5};Co[Co.Unsent]="Unsent",Co[Co.Open]="Open",Co[Co.HeadersReceived]="HeadersReceived",Co[Co.Loading]="Loading",Co[Co.Done]="Done",Co[Co.Cancelled]="Cancelled";const So={Basic:0,Cors:1,Default:2,Error:3,Opaque:4};So[So.Basic]="Basic",So[So.Cors]="Cors",So[So.Default]="Default",So[So.Error]="Error",So[So.Opaque]="Opaque";const xo={NONE:0,JSON:1,FORM:2,FORM_DATA:3,TEXT:4,BLOB:5,ARRAY_BUFFER:6};xo[xo.NONE]="NONE",xo[xo.JSON]="JSON",xo[xo.FORM]="FORM",xo[xo.FORM_DATA]="FORM_DATA",xo[xo.TEXT]="TEXT",xo[xo.BLOB]="BLOB",xo[xo.ARRAY_BUFFER]="ARRAY_BUFFER";const To={Text:0,Json:1,ArrayBuffer:2,Blob:3};To[To.Text]="Text",To[To.Json]="Json",To[To.ArrayBuffer]="ArrayBuffer",To[To.Blob]="Blob";
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class Ao{constructor(e){this._headers=new Map,this._normalizedNames=new Map,e&&(e instanceof Ao?e.forEach((e,t)=>{e.forEach(e=>this.append(t,e))}):Object.keys(e).forEach(t=>{const n=Array.isArray(e[t])?e[t]:[e[t]];this.delete(t),n.forEach(e=>this.append(t,e))}))}static fromResponseHeaderString(e){const t=new Ao;return e.split("\n").forEach(e=>{const n=e.indexOf(":");if(n>0){const s=e.slice(0,n),r=e.slice(n+1).trim();t.set(s,r)}}),t}appendeleteorEach(e){this._headers.forEach((t,n)=>e(t,this._normalizedNames.get(n),this._headers))}getys(){return Array.from(this._normalizedNames.values())}setalues(){return Array.from(this._headers.values())}toJSON(){const e={};return this._headers.forEach((t,n)=>{const s=[];t.forEach(e=>s.push(...e.split(","))),e[this._normalizedNames.get(n)]=s}),e}getAllyBeSetNormalizedNameclass Do{constructor(e={}){const{body:t,status:n,headers:s,statusText:r,type:i,url:o}=e;this.body=null!=t?t:null,this.status=null!=n?n:null,this.headers=null!=s?s:null,this.statusText=null!=r?r:null,this.type=null!=i?i:null,this.url=null!=o?o:null}mergeclass Po extends Do{constructor(){super({status:200,statusText:"Ok",type:So.Default,headers:new Ao})}}Po.decorators=[{type:s.A}],Po.ctorParameters=()=>[]
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */;class ko{}class Oo{}function Io(e){if("string"!=typeof e)return e;switch(e.toUpperCase()){case"GET":return Eo.Get;case"POST":return Eo.Post;case"PUT":return Eo.Put;case"DELETE":return Eo.Delete;case"OPTIONS":return Eo.Options;case"HEAD":return Eo.Head;case"PATCH":return Eo.Patch}throw new Error(`Invalid request method. The method "${e}" is not supported.`)}class No{encodeKey(e){return Mo(e)}encodeValue(e){return Mo(e)}}function Mo(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/gi,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%2B/gi,"+").replace(/%3D/gi,"=").replace(/%3F/gi,"?").replace(/%2F/gi,"/")}class Fo{constructor(e="",t=new No){this.rawParams=e,this.queryEncoder=t,this.paramsMap=
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function(e=""){const t=new Map;e.length>0&&e.split("&").forEach(e=>{const n=e.indexOf("="),[s,r]=-1==n?[e,""]:[e.slice(0,n),e.slice(n+1)],i=t.get(s)||[];i.push(r),t.set(s,i)});return t}(e)}cloneas(e){return this.paramsMap.has(e)}gett(e,t){if(null==t)return void this.delete(e);const n=this.paramsMap.get(e)||[];n.length=0,n.push(t),this.paramsMap.set(e,n)}setAll(e){e.paramsMap.forEach((e,t)=>{const n=this.paramsMap.get(t)||[];n.length=0,n.push(e[0]),this.paramsMap.set(t,n)})}append(e,t){if(null==t)return;const n=this.paramsMap.get(e)||[];n.push(t),this.paramsMap.set(e,n)}appendAll(e){e.paramsMap.forEach((e,t)=>{const n=this.paramsMap.get(t)||[];for(let s=0;s<e.length;++s)n.push(e[s]);this.paramsMap.set(t,n)})}replaceAll(e){e.paramsMap.forEach((e,t)=>{const n=this.paramsMap.get(t)||[];n.length=0;for(let s=0;s<e.length;++s)n.push(e[s]);this.paramsMap.set(t,n)})}toString(){const e=[];return this.paramsMap.forEach((t,n)=>{t.forEach(t=>e.push(this.queryEncoder.encodeKey(n)+"="+this.queryEncoder.encodeValue(t)))}),e.join("&")}delete(e){this.paramsMap.delete(e)}}class Ro{jsonext(e="legacy"){if(this._body instanceof Fo)return this._body.toString();if(this._body instanceof ArrayBuffer)switch(e){case"legacy":return String.fromCharCode.apply(null,new Uint16Array(this._body));case"iso-8859":return String.fromCharCode.apply(null,new Uint8Array(this._body));default:throw new Error(`Invalid value for encodingHint: ${e}`)}return null==this._body?"":"object"==typeof this._body?JSON.stringify(this._body,null,2):this._body.toString()}arrayBuffer(){return this._body instanceof ArrayBuffer?this._body:function(e){const t=new Uint16Array(e.length);for(let n=0,s=e.length;n<s;n++)t[n]=e.charCodeAt(n);return t.buffer}(this.text())}blobclass jo extends Ro{constructor(e){super(),this._body=e.body,this.status=e.status,this.ok=this.status>=200&&this.status<=299,this.statusText=e.statusText,this.headers=e.headers,this.type=e.type,this.url=e.url}let Lo=0;const Vo="__ng_jsonp__";let $o=null;function Bo(){const e="object"==typeof window?window:{};return null===$o&&($o=e[Vo]={}),$o}class Ho{oseConnectionemoveConnection.decorators=[{type:s.A}];class Uo{constructor(e,t,n){if(this._dom=t,this.baseResponseOptions=n,this._finished=!1,e.method!==Eo.Get)throw new TypeError("JSONP requests must use GET request method.");this.request=e,this.response=new xn.a(s=>{this.readyState=Co.Loading;const r=this._id=t.nextRequestID();t.exposeConnection(r,this);const i=t.requestCallback(this._id);let o=e.url;o.indexOf("=JSONP_CALLBACK&")>-1?o=o.replace("=JSONP_CALLBACK&",`=${i}&`):o.lastIndexOf("=JSONP_CALLBACK")===o.length-"=JSONP_CALLBACK".length&&(o=o.substring(0,o.length-"=JSONP_CALLBACK".length)+`=${i}`);const a=this._script=t.build(o),l=e=>{if(this.readyState===Co.Cancelled)return;if(this.readyState=Co.Done,t.cleanup(a),!this._finished){let e=new Do({body:"JSONP injected script did not invoke callback.",type:So.Error,url:o});return n&&(e=n.merge(e)),void s.error(new jo(e))}let r=new Do({body:this._responseData,url:o});this.baseResponseOptions&&(r=this.baseResponseOptions.merge(r)),s.next(new jo(r)),s.complete()},c=e=>{if(this.readyState===Co.Cancelled)return;this.readyState=Co.Done,t.cleanup(a);let r=new Do({body:e.message,type:So.Error});n&&(r=n.merge(r)),s.error(new jo(r))};return a.addEventListener("load",l),a.addEventListener("error",c),t.send(a),()=>{this.readyState=Co.Cancelled,a.removeEventListener("load",l),a.removeEventListener("error",c),this._dom.cleanup(a)}})}finished(e){this._finished=!0,this._dom.removeConnection(this._id),this.readyState!==Co.Cancelled&&(this._responseData=e)}}class qo extends ko{constructor(e,t){super(),this._browserJSONP=e,this._baseResponseOptions=t}qo.decorators=[{type:s.A}],qo.ctorParameters=()=>[{type:Ho},{type:Do}];const zo=/^\)\]\}',?\n/;class Wo{constructor(e,t,n){this.request=e,this.response=new xn.a(s=>{const r=t.build();r.open(Eo[e.method].toUpperCase(),e.url),null!=e.withCredentials&&(r.withCredentials=e.withCredentials);const i=()=>{let t=1223===r.status?204:r.status,i=null;204!==t&&(i=void 0===r.response?r.responseText:r.response,"string"==typeof i&&(i=i.replace(zo,""))),0===t&&(t=i?200:0);const o=Ao.fromResponseHeaderString(r.getAllResponseHeaders()),a=("responseURL"in(l=r)?l.responseURL:/^X-Request-URL:/m.test(l.getAllResponseHeaders())?l.getResponseHeader("X-Request-URL"):null)||e.url;var l;const c=r.statusText||"OK";let u=new Do({body:i,status:t,headers:o,statusText:c,url:a});null!=n&&(u=n.merge(u));const h=new jo(u);if(h.ok=((t),h.ok)return s.next(h),void s.complete();s.error(h)},o=e=>{let t=new Do({body:e,type:So.Error,status:r.status,statusText:r.statusText});null!=n&&(t=n.merge(t)),s.error(new jo(t))};if(this.setDetectedContentType(e,r),null==e.headers&&(e.headers=new Ao),e.headers.has("Accept")||e.headers.append("Accept","application/json, text/plain, */*"),e.headers.forEach(,null!=e.responseType&&null!=r.responseType)switch(e.responseType){case To.ArrayBuffer:r.responseType="arraybuffer";break;case To.Json:r.responseType="json";break;case To.Text:r.responseType="text";break;case To.Blob:r.responseType="blob";break;default:throw new Error("The selected responseType is not supported")}return r.addEventListener("load",i),r.addEventListener("error",o),r.send(this.request.getBody()),)}setDetectedContentTypeclass Go{onfigureRequest(e){const t=o().getCookie(this._cookieName);t&&e.headers.set(this._headerName,t)}}class Ko{constructor(e,t,n){this._browserXHR=e,this._baseResponseOptions=t,this._xsrfStrategy=n}createConnectionKo.decorators=[{type:s.A}],Ko.ctorParameters=()=>[{type:wo},{type:Do},{type:Oo}];class Qo{get search(){return this.params}set search(e){this.params=e}constructor(e={}){const{method:t,headers:n,body:s,url:r,search:i,params:o,withCredentials:a,responseType:l}=e;this.method=null!=t?Io(t):null,this.headers=null!=n?n:null,this.body=null!=s?s:null,this.url=null!=r?r:null,this.params=this._mergeSearchParams(o||i),this.withCredentials=null!=a?a:null,this.responseType=null!=l?l:null}mergemergeSearchParamsparseParams(e={}){const t=new Fo;return Object.keys(e).forEach(n=>{const s=e[n];Array.isArray(s)?s.forEach(e=>this._appendParam(n,e,t)):this._appendParam(n,s,t)}),t}_appendParamclass Zo extends Qo{constructor(){super({method:Eo.Get,headers:new Ao})}}Zo.decorators=[{type:s.A}],Zo.ctorParameters=()=>[];class Jo extends Ro{constructor(e){super();const t=e.url;this.url=e.url;const n=e.params||e.search;if(n){let e;if(e="object"!=typeof n||n instanceof Fo?n.toString():function(e){const t=new Fo;return Object.keys(e).forEach(n=>{const s=e[n];s&&Array.isArray(s)?s.forEach(:t.append(n,s.toString())}),t}(n).toString(),e.length>0){let n="?";-1!=this.url.indexOf("?")&&(n="&"==this.url[this.url.length-1]?"":"&"),this.url=t+n+e}}this._body=e.body,this.method=Io(e.method),this.headers=new Ao(e.headers),this.contentType=this.detectContentType(),this.withCredentials=e.withCredentials,this.responseType=e.responseType}detectContentTypeetectContentTypeFromBodyetBodyconst Xo=function(){},Yo="object"==typeof window?window:Xo,ea=Yo.FormData||Xo,ta=Yo.Blob||Xo,na=Yo.ArrayBuffer||Xo;function sa(e,t){return e.createConnection(t).response}function ra(e,t,n,s){const r=e;return t?r.merge(new Qo({method:t.method||n,url:t.url||s,search:t.search,params:t.params,headers:t.headers,body:t.body,withCredentials:t.withCredentials,responseType:t.responseType})):r.merge(new Qo({method:n,url:s}))}class ia{constructor(e,t){this._backend=e,this._defaultOptions=t}requestet(e,t){return this.request(new Jo(ra(this._defaultOptions,t,Eo.Get,e)))}post(e,t,n){return this.request(new Jo(ra(this._defaultOptions.merge(new Qo({body:t})),n,Eo.Post,e)))}put(e,t,n){return this.request(new Jo(ra(this._defaultOptions.merge(new Qo({body:t})),n,Eo.Put,e)))}delete(e,t){return this.request(new Jo(ra(this._defaultOptions,t,Eo.Delete,e)))}patchead(e,t){return this.request(new Jo(ra(this._defaultOptions,t,Eo.Head,e)))}optionsia.decorators=[{type:s.A}],ia.ctorParameters=()=>[{type:ko},{type:Qo}];class oa extends ia{constructor(e,t){super(e,t)}request(e,t){let n;if("string"==typeof e&&(e=new Jo(ra(this._defaultOptions,t,Eo.Get,e))),!(e instanceof Jo))throw new Error("First argument must be a url string or Request instance.");if(e.method!==Eo.Get)throw new Error("JSONP requests must use GET request method.");return n=sa(this._backend,e),n}}oa.decorators=[{type:s.A}],oa.ctorParameters=()=>[{type:ko},{type:Qo}];(class{}).decorators=[{type:s.I,args:[{providers:[{provide:ia,useFactory:function(e,t){return new ia(e,t)},deps:[Ko,Qo]},wo,{provide:Qo,useClass:Zo},{provide:Do,useClass:Po},Ko,{provide:Oo,useFactory:]}]}];(class{}).decorators=[{type:s.I,args:[{providers:[{provide:oa,useFactory:deps:[qo,Qo]},Ho,{provide:Qo,useClass:Zo},{provide:Do,useClass:Po},qo]}]}];new s.fb("8.0.0-beta.10+1.sha-a28b3e3");function aa(e){return t=>t.lift(new la(e))}class la{constructor(e){this.callback=e}call(e,t){return t.subscribe(new ca(e,this.callback))}}et ua=class{constructor(e){this.http=e,this._request$=new Yr.a,this._response$=new Yr.a,this.response$=this._response$,this.request$=this._request$}get(...e){return this.beforeEachRequest(),this.http.get.apply(this.http,e).pipe(aa(()=>this.afterEachRequest()))}post(...e){return this.beforeEachRequest(),this.http.post.apply(this.http,e).pipe(aa(()=>this.afterEachRequest()))}delete(...e){return this.beforeEachRequest(),this.http.delete.apply(this.http,e).pipe(aa(()=>this.afterEachRequest()))}beforeEachRequest(){console.log("beforeEachRequest..."),this._request$.next()};ua.ctorParameters=()=>[{type:Hi}],ua=Cn([Object(s.A)(),Sn("design:paramtypes",[Hi])],ua);let ha=class{constructor(e,t){this.http=e,this.appConfig=t}commonHeaders(e={headers:[]}){const t=new Ao;return t.append("X-WP-Nonce",WP_API_Settings.nonce),e&&e.headers.length&&Object.keys(e.headers).forEach(n=>{t.append(e.headers[n].key,e.headers[n].value)}),t}get(e){return this.http.get(e,new Qo({headers:this.commonHeaders()})).toPromise()}post(e,t={},n){return this.http.post(e,t,new Qo({headers:this.commonHeaders(n)})).toPromise()}deleteReq(e,t={}){return this.http.delete(e,new Qo({headers:this.commonHeaders()})).toPromise()}customApiUrl(e){return this.appConfig.wpApiUrl+e}defaultApiUrl(e){return this.appConfig.wpApiUrlDefault+e}themeApiUrlandleError(e){return console.error("An error occurred",e),Promise.reject(e.message||e)}};ha.ctorParameters=()=>[{type:ua},{type:void 0,decorators:[{type:s.z,args:[_o]}]}],ha=Cn([Object(s.A)(),Sn("design:paramtypes",[ua,Object])],ha);let pa=class{constructor(e){this.wpService=e,this.ru={formTitle:"\u041e\u0442\u043a\u043b\u0438\u043a\u043d\u0443\u0442\u044c\u0441\u044f",firstNamePlaceholder:"\u0418\u043c\u044f*",lastNamePlaceholder:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f*",emailPlaceholder:"E-mail*",phoneNumberPlaceholder:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u043d\u044b\u0439 \u0442\u0435\u043b\u0435\u0444\u043e\u043d",resumePlaceholder:"\u0420\u0435\u0437\u044e\u043c\u0435",commentPlaceholder:"\u041d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0441\u043b\u043e\u0432 \u043e \u0441\u0435\u0431\u0435*",submitName:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c",missedFieldsMsg:"\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u043f\u043e\u043b\u044f.",invalidEmailMsg:"\u041f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0432\u0432\u0435\u0434\u0451\u043d\u043d\u043e\u0433\u043e email.",successfullySubmitMsg:"\u0414\u0430\u043d\u043d\u044b\u0435 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u044b.",thankYouMsg:"\u0421\u043f\u0430\u0441\u0438\u0431\u043e, \u0447\u0442\u043e \u0437\u0430\u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043e\u0432\u0430\u043b\u0438\u0441\u044c \u043d\u0430\u0448\u0435\u0439 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0435\u0439. \u0421 \u0432\u0430\u043c\u0438 \u0441\u0432\u044f\u0436\u0443\u0442\u0441\u044f \u0432 \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0435\u0435 \u0432\u0440\u0435\u043c\u044f.",closeModalName:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"},this.en={formTitle:"Apply to Job",firstNamePlaceholder:"First name*",lastNamePlaceholder:"Last name*",emailPlaceholder:"E-mail*",phoneNumberPlaceholder:"Phone number",resumePlaceholder:"Resume",commentPlaceholder:"Tell something about yourself*",submitName:"Submit",missedFieldsMsg:"Sorry, you\u2019re missing a few fields.",invalidEmailMsg:"Please enter the correct Email address.",successfullySubmitMsg:"Form submitted successfully!",thankYouMsg:"Thank you for submitting your application. We will review your application and contact you shortly.",closeModalName:"Close"}}getEnLocale(){return this.en}getRuLocale(){return this.ru}leaveRequest(e){return this.wpService.post(this.wpService.customApiUrl("/messages/applyJob"),e,{headers:[]})}uploadResumeFile(e){this.uploadFile(e)}ajaxSendFile(e){return new Promise(t=>{const n=this.wpService.themeApiUrl("/php/uploader/uploader.php"),s=new XMLHttpRequest,r=new FormData;s.open("POST",n,!0),s.onreadystatechange=r.append("resume",e),s.send(r)})}uploadFile(e){this.ajaxSendFile(e).then(}etFilesData(){return this.filesData}};pa.ctorParameters=()=>[{type:ha}],pa=Cn([Object(s.A)(),Sn("design:paramtypes",[ha])],pa);var da=n("9ppp");onst ma=((),ga=new xn.a(e=>e.complete()); ba=class{constructor(e){this.wpService=e,this.isModalOpen$=new fa(!1)}toggle(){var e;this.isModalOpen$.pipe((e=1,).subscribe(e=>{this.isModalOpen$.next(!e)})}eaveRequest(e){return this.wpService.post(this.wpService.customApiUrl("/messages/jobReminder"),e,{headers:[]})}};ba.ctorParameters=()=>[{type:ha}],ba=Cn([Object(s.A)(),Sn("design:paramtypes",[ha])],ba);let wa=class{constructor(e,t,s){this.jobReminderService=e,this.applyJobService=t,this.appConfig=s,this.thankYouIsVisible=!1,this.resumeInputText="",this.states={isOpen:void 0,submitted:!1,requiredFieldsEmpty:!0,successfullySubmitted:!1,submitInProgress:!1,submitEndedWithUnknownError:!1,notFoundError:!1},this.formData={firstName:"",lastName:"",email:"",phoneNumber:"",resume:null,comment:""},this.applyJobForm=new zs({firstName:new qs("",[Hn.required,this.checkForSpacesValidator]),lastName:new qs("",[Hn.required,this.checkForSpacesValidator]),email:new qs("",[Hn.required,Hn.pattern("([a-zA-Z0-9+_-]+\\.)*[a-zA-Z0-9+_-]+@[a-z0-9_-]+(\\.[a-z0-9_-]+)*\\.[a-z]{2,6}")]),phoneNumber:new qs("",[]),resume:new qs("",[]),comment:new qs("",[Hn.required,this.checkForSpacesValidator])}),this.WPAPI=n("+m56"),this.wp=new this.WPAPI({endpoint:"http://localhost:8888/wp-json/"})}setLocale(){this.jobApplyFormLabels="/job-page/"==location.pathname?this.applyJobService.getEnLocale():this.applyJobService.getRuLocale()}get firstName(){return this.applyJobForm.get("firstName")}get lastName(){return this.applyJobForm.get("lastName")}get email(){return this.applyJobForm.get("email")}howThankYouModal(){let e=document.body,t=document.getElementsByClassName("pn-footer-slidein-layer")[0];e.style.position="fixed",t.style.zIndex="20",this.thankYouIsVisible=!0}hideThankYouModal(){let e=document.body,t=document.getElementsByClassName("pn-footer-slidein-layer")[0];e.style.position="",t.style.zIndex="",this.thankYouIsVisible=!1}checkForSpacesValidator(e){return e.value&&e.value.trim()?null:{spacesError:!0}}checkFormValid(e){return this.states.requiredFieldsEmpty=Object.keys(e.controls).filter(t=>{let n=e.controls[t];return n.errors&&("required"in n.errors||"spacesError"in n.errors)}).length>0,this.states.requiredFieldsEmpty}ngOnInit(){this.setLocale()}textAreaResize(){this.textArea.nativeElement.scrollTop>0&&(this.textArea.nativeElement.style.height=this.textArea.nativeElement.scrollHeight+"px"),""==this.textArea.nativeElement.value&&(this.textArea.nativeElement.style.height="")}onFileChange(e,t){if(t)return"resume"===e?(this.applyJobService.uploadResumeFile(t),this.resumeInputText=t.name,void(this.formData.resume=t)):void 0}clearFileInput(e){if("resume"===e)return this.resumeInputText="",this.formData.resume={},this.applyJobForm.patchValue({resume:null}),this.resumeInput.nativeElement.value="",void this.applyJobService.removeFilesData()}onSubmit(e,t){const n=new FormData,s=new FormData,r=this.applyJobService.getFilesData(),i={vacancy:this.vacancy,firstName:t.firstName,lastName:t.lastName,email:t.email,phoneNumber:t.phoneNumber||"",resume:r,comment:t.comment};if(t.resume&&t.resume[0]&&s.append("resume",t.resume[0]),e.invalid)return this.states.submitted||(this.states.submitted=!0),void(this.states.requiredFieldsEmpty=this.checkFormValid(e));Object.keys(i).forEach(,this.states.submitInProgress=!0,this.applyJobService.leaveRequest(n).then(()=>{this.states.submitInProgress=!1,this.states.successfullySubmitted=!0,this.states.submitted=!1,this.showThankYouModal(),this.resetFormFields(),this.textAreaResize()}).catch(e=>{404===e.status&&(this.states.notFoundError=!0),this.states.submitInProgress=!1,this.states.submitEndedWithUnknownError=!0})}wa.ctorParameters=()=>[{type:ba},{type:pa},{type:void 0,decorators:[{type:s.z,args:[_o]}]}],wa.propDecorators={vacancy:[{type:s.D,args:["vacancy"]}],textArea:[{type:s.gb,args:["textarea"]}],resumeInput:[{type:s.gb,args:["resume"]}],coverLetterInput:[{type:s.gb,args:["coverLetter"]}]},wa=Cn([Object(s.n)({selector:"job-apply-form",template:'<form\r\n  [class.pn-job-form--submitted]="states.submitted"\r\n  (ngSubmit)="onSubmit(applyJobForm, applyJobForm.value)"\r\n  [formGroup]="applyJobForm"\r\n  class="pn-job-form"\r\n  (keyup)="checkFormValid(applyJobForm)"\r\n>\r\n    <h3 class="pn-job-form__title">{{jobApplyFormLabels.formTitle}}</h3>\r\n    <div class="pn-job-form__errors">\r\n        <div class="pn-job-form__error"\r\n             *ngIf="states.submitEndedWithUnknownError && states.notFoundError"\r\n        >\r\n            Sorry, but something was wrong.\r\n        </div>\r\n        \x3c!--<div class="pn-job-form__error"\r\n            *ngIf="firstName.invalid && firstName.touched && states.submitted"\r\n        >\r\n            Please fill the First name field.\r\n        </div>\r\n        <div class="pn-job-form__error"\r\n             *ngIf="lastName.invalid && lastName.touched && states.submitted"\r\n        >\r\n            Please fill the Last name field.\r\n        </div>\r\n        <div *ngIf="!resume.value && states.submitted"\r\n             class="pn-job-form__error"\r\n        >\r\n            Please attach correct Resume file.\r\n        </div>--\x3e\r\n\r\n        <div *ngIf="states.submitted && email.errors?.pattern"\r\n             class="pn-job-form__error"\r\n        >\r\n            {{jobApplyFormLabels.invalidEmailMsg}}\r\n        </div>\r\n        <div *ngIf="states.requiredFieldsEmpty && states.submitted"\r\n            class="pn-job-form__error"\r\n        >\r\n            {{jobApplyFormLabels.missedFieldsMsg}}\r\n        </div>\r\n    </div>\r\n    <fieldset class="pn-job-form__fieldset">\r\n        <input type="text" class="pn-job-form__input" placeholder="{{jobApplyFormLabels.firstNamePlaceholder}}"\r\n           tabindex="1"\r\n           maxlength="40"\r\n           formControlName="firstName"\r\n           [(ngModel)]="formData.firstName"\r\n        >\r\n    </fieldset>\r\n    <fieldset class="pn-job-form__fieldset">\r\n        <input type="text" class="pn-job-form__input" placeholder="{{jobApplyFormLabels.lastNamePlaceholder}}"\r\n           tabindex="2"\r\n           maxlength="40"\r\n           formControlName="lastName"\r\n           [(ngModel)]="formData.lastName"\r\n        >\r\n    </fieldset>\r\n    <fieldset class="pn-job-form__fieldset">\r\n        <input type="email" class="pn-job-form__input" placeholder="{{jobApplyFormLabels.emailPlaceholder}}"\r\n           tabindex="3"\r\n           maxlength="40"\r\n           formControlName="email"\r\n           [(ngModel)]="formData.email"\r\n        >\r\n    </fieldset>\r\n    <fieldset class="pn-job-form__fieldset">\r\n        <input type="text" class="pn-job-form__input" placeholder="{{jobApplyFormLabels.phoneNumberPlaceholder}}"\r\n            tabindex="4"\r\n            maxlength="20"\r\n            formControlName="phoneNumber"\r\n            [(ngModel)]="formData.phoneNumber"\r\n        >\r\n    </fieldset>\r\n    \x3c!--<fieldset class="pn-job-form__fieldset">\r\n        <input type="text" class="pn-job-form__input" placeholder="Website"\r\n            tabindex="5"\r\n            maxlength="40"\r\n            formControlName="website"\r\n            [(ngModel)]="formData.website"\r\n        >\r\n    </fieldset>--\x3e\r\n    <fieldset class="pn-job-form__fieldset">\r\n        <input id="resume_input"\r\n               tabindex="5"\r\n               type="file"\r\n               accept=".doc, .pdf, .txt, .docx"\r\n               class="pn-job-form__input pn-job-form__input--file"\r\n               placeholder="{{jobApplyFormLabels.resumePlaceholder}}"\r\n               #resume\r\n               formControlName="resume"\r\n               (change)="onFileChange(\'resume\', $event.target.files[0])"\r\n        >\r\n        <label for="resume_input" class="pn-job-form__file-label">\r\n            {{ resumeInputText ? resumeInputText : jobApplyFormLabels.resumePlaceholder }}\r\n        </label>\r\n        <span *ngIf="resumeInputText.length <= 0" class="pn-job-form__icon pn-job-form__icon--attach"></span>\r\n        <span *ngIf="resumeInputText.length > 0" (click)="clearFileInput(\'resume\')" class="pn-job-form__icon pn-job-form__icon--trash"></span>\r\n    </fieldset>\r\n    <fieldset class="pn-job-form__fieldset">\r\n        <textarea class="pn-job-form__textarea"\r\n                  tabindex="6"\r\n                  rows="1"\r\n                  placeholder="{{jobApplyFormLabels.commentPlaceholder}}"\r\n                  formControlName="comment"\r\n                  [(ngModel)]="formData.comment"\r\n                  (keyup)="textAreaResize()"\r\n                  #textarea\r\n        ></textarea>\r\n    </fieldset>\r\n    \x3c!--<fieldset class="pn-job-form__fieldset">\r\n        <input id="cover_letter_input" type="file"\r\n               class="pn-job-form__input pn-job-form__input&#45;&#45;file"\r\n               placeholder="Cover letter"\r\n               accept=".doc, .pdf, .txt"\r\n               #coverLetter\r\n               formControlName="coverLetter"\r\n               (change)="onFileChange(\'coverLetter\', $event?.srcElement?.files[0])"\r\n        >\r\n        <label for="cover_letter_input" class="pn-job-form__file-label">\r\n            {{ coverLetterInputText ? coverLetterInputText : \'Cover letter\' }}\r\n        </label>\r\n        <span *ngIf="coverLetterInputText.length <= 0" class="pn-job-form__icon pn-job-form__icon&#45;&#45;attach"></span>\r\n        <span *ngIf="coverLetterInputText.length > 0" (click)="clearFileInput(\'coverLetter\')" class="pn-job-form__icon pn-job-form__icon&#45;&#45;trash"></span>\r\n    </fieldset>--\x3e\r\n\r\n    <div class="pn-job-form__submit">\r\n        <button class="pn-job-form__btn-submit"\r\n                type="submit">\r\n            {{jobApplyFormLabels.submitName}}\r\n        </button>\r\n    </div>\r\n    \x3c!--<a (click)="open($event)" href="#" class="pn-job-form__link">Remind me to apply later</a>--\x3e\r\n</form>\r\n\r\n<div class="pn-job-form__thank-you" [class.pn-job-form__thank-you--visible]="thankYouIsVisible">\r\n    <div class="thank-you">\r\n        <div class="pn-marketing-heading-1 thank-you__title">Thank you</div>\r\n        <div class="pn-marketing-text">\r\n            {{jobApplyFormLabels.thankYouMsg}}\r\n        </div>\r\n        <div class="thank-you__controls">\r\n            <button\r\n                    (click)="hideThankYouModal()"\r\n                    type="button"\r\n                    class="request-demo__submit pn-marketing-button pn-marketing-button--dark">{{jobApplyFormLabels.closeModalName}}</button>\r\n        </div>\r\n    </div>\r\n</div>\r\n',styles:[""]}),Sn("design:paramtypes",[ba,pa,Object])],wa);let Ea=class{constructor(e,t){this.jobReminderService=e,this.appConfig=t,this.states={isOpen:void 0,submitted:!1,requiredFieldsEmpty:!0,successfullySubmitted:!1,submitInProgress:!1,submitEndedWithUnknownError:!1},this.formData={email:""}}ggleModal(e){this.states.isOpen=e}close(){this.jobReminderService.close()}onSubmit(e,t){!t&&(this.states.requiredFieldsEmpty=Object.keys(e.controls).filter(t=>{let n=e.controls[t];return n.errors&&"required"in n.errors||n.errors}).length>0,this.states.requiredFieldsEmpty)||(this.states.submitInProgress=!0,this.jobReminderService.leaveRequest(this.formData).then(()=>{this.states.submitInProgress=!1,this.states.successfullySubmitted=!0}).catch()}};Ea.ctorParameters=()=>[{type:ba},{type:void 0,decorators:[{type:s.z,args:[_o]}]}],Ea.propDecorators={onKeydownEscHandler:[{type:s.x,args:["document:keydown.escape",["$event"]]}],reminderForm:[{type:s.gb,args:["reminderForm"]}]},Ea=Cn([Object(s.n)({selector:"job-reminder",template:'<div class="pn-job-reminder"\r\n      *ngIf="states.isOpen"\r\n      [@modal]="states.isOpen"\r\n>\r\n    <span class="pn-job-reminder__close-btn pn-icon pn-icon--x" (click)="close()"></span>\r\n    <form class="pn-job-reminder__form"\r\n          [class.pn-job-reminder__form--submitted]="reminderForm.submitted"\r\n          #reminderForm="ngForm"\r\n          (ngSubmit)="onSubmit(reminderForm, reminderForm.valid)"\r\n          *ngIf="!states.successfullySubmitted"\r\n    >\r\n        <h2 class="pn-job-reminder__title">Subscribe our newsletter</h2>\r\n        <p class="pn-job-reminder__description">\r\n            Subscribe to our mailing list to get updates to your email inbox.\r\n        </p>\r\n        <div class="pn-job-reminder__errors">\r\n            <div *ngIf="reminderForm.submitted && emailField.errors?.email && emailField.errors?.required"\r\n                 class="pn-job-reminder__error"\r\n            >\r\n                Please type correct email address.\r\n            </div>\r\n        </div>\r\n        <input class="pn-job-reminder__input"\r\n               type="email"\r\n               placeholder="Your Email"\r\n               required\r\n               name="email"\r\n               email\r\n               #emailField="ngModel"\r\n               [(ngModel)]="formData.email"\r\n        >\r\n        <button class="pn-job-reminder__btn">Submit</button>\r\n    </form>\r\n\r\n    <div class="pn-job-reminder__thanks-message"\r\n         *ngIf="states.successfullySubmitted"\r\n    >\r\n        <h2 class="pn-job-reminder__title">Thank you.</h2>\r\n        <p class="pn-job-reminder__description">\r\n            Your email is now subscribed to our newsletter. Stay tuned for updates, release notes, insights, and trends from Piano.\r\n        </p>\r\n        <button class="pn-job-reminder__btn" (click)="close()">Close</button>\r\n    </div>\r\n</div>',animations:[Object(Mr.i)("modal",[Object(Mr.h)("* => void",[Object(Mr.g)({opacity:"1"}),Object(Mr.e)(100,Object(Mr.g)({opacity:"0"}))]),Object(Mr.h)("void => *",[Object(Mr.g)({opacity:"0"}),Object(Mr.e)(100,Object(Mr.g)({opacity:"1"}))])])],styles:[""]}),Sn("design:paramtypes",[ba,Object])],Ea);var Ca=n("7vnS"),Sa=n.n(Ca);let xa=class{transform(e,t,n,s=2){return t?t&&n.length<s?e.filter(function(s){let r=Sa()(s,n[0]);return r?"string"==typeof t?r.toLowerCase().includes(t.toLowerCase()):void 0:e}):e.filter(function(e){let s=n.filter(function(s){if(!Boolean(Sa()(e,s)))return!1;for(let r=0;r<n.length;r++){if(Sa()(e,s).toLowerCase().includes(t[r].toLowerCase()))return!0}return!1});return!!s&&s.length>0}):e}};xa=Cn([Object(s.S)({name:"filterByQuery"})],xa);let Ta=n("EI6l"),Aa=class{constructor(){}scrollToElement(e,t=0,n=500,s="easeInOutCubic"){let r=new Ta,i=document.querySelector(e);const o={speed:n,offset:t,easing:s};r.animateScroll(i,null,o)}};Aa.ctorParameters=()=>[],Aa=Cn([Object(s.A)(),Sn("design:paramtypes",[])],Aa);let Da=class{constructor(e,t){this.scrollService=e,this.elementRef=t}scrollTo(e){this.offset="viewport"===this.offset?-window.innerHeight:this.offset,console.log(this.offset),this.scrollService.scrollToElement(this.selector,parseInt(this.offset)||0,parseInt(this.duration)||500,this.easing||"easeInOutCubic")}};Da.ctorParameters=Da.propDecorators={selector:[{type:s.D,args:["scroll-to"]}],duration:[{type:s.D,args:["scroll-duration"]}],offset:[{type:s.D,args:["scroll-offset"]}],easing:[{type:s.D,args:["scroll-easing"]}],scrollTo:[{type:s.x,args:["click",["$event"]]}]},Da=Cn([Object(s.s)({selector:"[scroll-to]"}),Sn("design:paramtypes",[Aa,s.t])],Da);var Pa=n("Mj6V"),ka=n.n(Pa);let Oa=class{constructor(e){this.httpService=e}ngOnInit(){this.httpService.request$.subscribe(()=>{ka.a.start()}),this.httpService.response$.subscribe(}};Oa.ctorParameters=()=>[{type:ua}],Oa=Cn([Object(s.n)({selector:"progress-bar",template:"",styles:["/* Make clicks pass-through */\n#nprogress {\n  pointer-events: none;\n}\n#nprogress .bar {\n  background: #1c2544;\n  position: fixed;\n  z-index: 1031;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 2px;\n}\n/* Fancy blur effect */\n#nprogress .peg {\n  display: block;\n  position: absolute;\n  right: 0px;\n  width: 100px;\n  height: 100%;\n  box-shadow: 0 0 10px #1c2544, 0 0 5px #1c2544;\n  opacity: 1;\n  transform: rotate(3deg) translate(0px, -4px);\n}\n.nprogress-custom-parent {\n  overflow: hidden;\n  position: relative;\n}\n.nprogress-custom-parent #nprogress .spinner,\n.nprogress-custom-parent #nprogress .bar {\n  position: absolute;\n}\n@keyframes nprogress-spinner {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}"]}),Sn("design:paramtypes",[ua])],Oa);let Ia=class{constructor(){}ngOnInit(){if(Peppermint){Peppermint(document.getElementById("pn-analytics-reviews-slider"),{speed:400,slideshow:!0,slideshowInterval:6e3,stopSlideshowAfterInteraction:!0,mouseDrag:!1,dots:!0,onSlideChange:function(e){document.querySelectorAll(".pn-analytics-reviews-slider__slide").forEach(,document.querySelectorAll(".pn-analytics-reviews-slider__slide")[e].classList.add("pn-analytics-reviews-slider__slide--active")}})}}};Ia.ctorParameters=()=>[],Ia=Cn([Object(s.n)({selector:"analytics-reviews-slider",template:"<ng-content></ng-content>"}),Sn("design:paramtypes",[])],Ia);let Na=class{constructor(){}ngOnInit(){if(Peppermint){Peppermint(document.getElementById("pn-analytics-benefits-slider"),{speed:400,slideshow:!0,slideshowInterval:6e3,stopSlideshowAfterInteraction:!0,mouseDrag:!1,dots:!0,onSlideChange:function(e){}})}}};Na.ctorParameters=()=>[],Na=Cn([Object(s.n)({selector:"analytics-benefits-slider",template:"<ng-content></ng-content>"}),Sn("design:paramtypes",[])],Na);let Ma=class{constructor(){this.contentCardOptions={defaultStates:[{method:"pxElement",value:200,state:"active"},{method:"default",state:"inactive"}],contentCard:{currentState:"inactive",states:[{method:"percentElement",value:85,state:"active",class:"pn-content-card__animation-holder--in-view"},{method:"default",state:"inactive"}]}}}};Ma=Cn([Object(s.n)({selector:"curation-card",template:'<div class="pn-content-card__animation-holder"><ng-content></ng-content></div>',animations:[]})],Ma);const Fa={provide:On,useExisting:Object(s.lb)(()=>Ra),multi:!0};let Ra=class{constructor(){this.onSelect=new s.v,this.isOpenDropdown=!1,this.componentTagName="AUTOCOMPLETE",this.selectedValue=""}ngOnInitetOutsideClickListener(){document.documentElement.addEventListener("click",}setInputFocus(){setTimeout(0)}clearSearchFieldoseDropdown(){this.isOpenDropdown=!1,this.resetOptionsList()}terCountries(e){let t=e.toLowerCase();this.displayedCountries=this.options.filter(}chooseCountry(e){this.selectedValue=e,this.onChangeCallback(e),this.resetOptionsList(),this.closeDropdown()}writeValue(){}registerOnChange(e){this.onChangeCallback=e}registerOnTouched(){}setDisabledState(){}};Ra.ctorParameters=()=>[],Ra.propDecorators={searchField:[{type:s.gb,args:["searchField"]}],title:[{type:s.D}],options:[{type:s.D}],onSelect:[{type:s.O}]},Ra=Cn([Object(s.n)({selector:"autocomplete",template:'<div class="autocomplete" (click)="$event.stopPropagation()">\r\n    <input (click)="dropdownToggle()"\r\n           [value]="selectedValue"\r\n           readonly="readonly"\r\n           placeholder="{{title}}"\r\n           class="request-demo__form-input pn-input pn-input--flat autocomplete-toggle">\r\n    <div class="autocomplete-dropdown" *ngIf="isOpenDropdown">\r\n        <span *ngIf="!searchField.value"\r\n              class="pn-icon pn-icon--search"></span>\r\n        <span *ngIf="searchField.value"\r\n              (click)="clearSearchField()"\r\n              class="pn-icon pn-icon--x"></span>\r\n        <input #searchField\r\n                (input)="filterCountries(searchField.value)"\r\n                (keydown)="closeByTab($event)"\r\n                placeholder="Search for country..."\r\n                type="text"\r\n                class="autocomplete-dropdown__search">\r\n        <ul class="autocomplete-dropdown__list">\r\n            <li *ngFor="let country of displayedCountries"\r\n                (click)="chooseCountry(country.value)"\r\n                [class.pn-marketing-dropdown__item--active]="country.value === selectedValue"\r\n                class="autocomplete-dropdown__list-item pn-marketing-dropdown__item pn-marketing-dropdown__item--hoverable pn-marketing-text">\r\n                {{country.value}}\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</div>',providers:[Fa]}),Sn("design:paramtypes",[])],Ra);let ja=class{openPrivacyCenter;ja=Cn([Object(s.n)({selector:"privacy-center-button",template:'<button\r\n  class="pn-privacy-button"\r\n  (click)="openPrivacyCenter()"\r\n  type="button">\r\n  <svg\r\n    width="14"\r\n    height="16"\r\n    class="pn-privacy-button__icon"\r\n    aria-hidden="true">\r\n    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.063 16h-9a2 2 0 01-2-2V7a2 2 0 012-2h9a2 2 0 012 2v7a2 2 0 01-2 2zm1-9a1 1 0 00-1-1h-9a1 1 0 00-1 1v7a1 1 0 001 1h9a1 1 0 001-1V7zm-6 2h1v3h-1V9zm3-4V3.5a2.5 2.5 0 10-5 0V5h-1V3.5a3.5 3.5 0 117 0V5h-1z"/>\r\n  </svg>\r\n  Privacy Center\r\n</button>\r\n',styles:[""]})],ja);ar Va=n("51Dv"); Ua=class{constructor(e){this.httpClient=e}getPosts(e){let t=document.location.pathname;return 2==t.split("/")[1].length?(t=t.split("/")[1],this.httpClient.post(`/${t}/wp-json/piano/v1/blog/getposts`,e).pipe($a(e=>this.throwError(e)))):this.httpClient.post("/wp-json/piano/v1/blog/getposts",e).pipe($a(e=>this.throwError(e)))}throwError(e){return t=e,n?new xn.a(:new xn.a(e=>e.error(t));var t,n}};Ua.ctorParameters=()=>[{type:Hi}],Ua=Cn([Object(s.A)(),Sn("design:paramtypes",[Hi])],Ua);let qa=class{constructor(){this.lang=this.getLang(),this.translationsEN={"Load more":"Load more"},this.translationsJA={"Load more":"\u3082\u3063\u3068\u8aad\u307f\u8fbc\u3080"},this.translationsFR={"Load more":"Load more"},this.translationsDE={"Load more":"Load more"},this.translationsES={"Load more":"Load more"},this.translations={en:this.translationsEN,ja:this.translationsJA,fr:this.translationsFR,de:this.translationsDE,es:this.translationsES}}getLang(){let e=document.cookie.match(new RegExp("(?:^|; )"+"STYXKEY_language".replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,"\\$1")+"=([^;]*)"));return e?decodeURIComponent(e[1]):""}t(e){return this.translations[this.lang][e]||e}};qa=Cn([Object(s.A)()],qa);let za=class{constructor(e,t){this.postListingService=e,this.i18n=t,this.displayedPostsList=[],this.offset=0,this.limit=6,this.noMorePostsAvailable=!1}ngOnInit(){this.getPosts({category:this.category,offset:0,limit:this.limit,postStatus:"publish"})}loadMorePosts(e){let t={category:e,offset:this.currentOffset(),limit:this.limit,postStatus:"publish"};this.getPosts(t)}currentOffset(){return this.displayedPostsList.length}getPosts(e){this.postListingSubs=this.postListingService.getPosts({categorySlug:e.category,offset:e.offset,postType:"post",limit:e.limit,postStatus:e.postStatus,orderBy:"date"}).subscribe(e=>{0===e.length?this.noMorePostsAvailable=!0:(this.displayedPostsList=this.displayedPostsList.concat(e),this.displayedPostsList.forEach(e=>{e.post_taxonomies.forEach(t=>{"category"===t.name&&t.values.forEach(t=>{"customer-stories"!==t.slug&&"ebooks-guidebooks"!==t.slug&&"webinars"!==t.slug&&"piano-news"!==t.slug||(e.resourceTypeCategory=t.slug)})})}))},e=>console.log(e))}};za.ctorParameters=()=>[{type:Ua},{type:qa}],za.propDecorators={category:[{type:s.D}]},za=Cn([Object(s.n)({selector:"post-listing",template:'<main class="grid--big no-scroll">\r\n    <a *ngFor="let post of displayedPostsList" href="{{ post.post_permalink }}" class="item card">\r\n        <figure *ngIf="post.feat_image"><img src="{{ post.feat_image }}" alt=""></figure>\r\n        <div class="copy">\r\n            <h3>{{ post.post_title }}</h3>\r\n            <div class="post-date">\r\n                <i class="date-icon">\r\n                    <svg *ngIf="post.resourceTypeCategory === \'customer-stories\' && !post.video_embed_code" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 2a1 1 0 00-1 1v11a1 1 0 001 1h9a1 1 0 001-1V5.25L10.792 2H4zm9.083 12.071H3.917V2.93h6.416l2.75 2.785v8.357zM5 16h10V8h1v8a1 1 0 01-1 1H5v-1z" fill="#141B24" fill-opacity=".4"/><path fill-rule="evenodd" clip-rule="evenodd" d="M10.583 11H6.417L6 10.617c.53-.755 1.45-1.257 2.5-1.257s1.97.502 2.5 1.257l-.417.383zM8.5 8.5a1.25 1.25 0 110-2.499 1.25 1.25 0 010 2.499z" fill="#141B24" fill-opacity=".4"/></svg>\r\n                    <svg *ngIf="post.resourceTypeCategory === \'ebooks-guidebooks\'&& !post.video_embed_code" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.5 3.698l.108-.488h-.002l-.003-.001-.013-.003-.043-.009a10.443 10.443 0 00-.73-.113 11.933 11.933 0 00-1.901-.073c-1.365.06-3.077.392-4.416 1.51-1.339-1.118-3.05-1.45-4.416-1.51a11.934 11.934 0 00-2.472.157 6.886 6.886 0 00-.159.03l-.043.008-.013.003h-.005v.001l.108.488-.108-.488L3 3.297v12.024l.608-.135h.001l.007-.002.033-.006a9.474 9.474 0 01.652-.1 10.933 10.933 0 011.74-.068c1.386.06 2.985.421 4.105 1.542l.354.353.354-.353c1.12-1.12 2.719-1.482 4.105-1.542a10.933 10.933 0 012.256.143c.06.01.106.019.136.025l.033.006.007.002h.001l.608.135V3.298l-.392-.088-.108.488zM4 14.108v-9.99a10.936 10.936 0 012.04-.108c1.328.058 2.85.391 3.96 1.402v9.738c-1.247-.824-2.716-1.087-3.916-1.139A11.936 11.936 0 004 14.108zm7 1.042c1.247-.824 2.716-1.087 3.916-1.139a11.935 11.935 0 012.084.097v-9.99a10.936 10.936 0 00-2.04-.108c-1.328.058-2.85.391-3.96 1.402v9.738z" fill="#141B24" fill-opacity=".4"/></svg>\r\n                    <svg *ngIf="post.resourceTypeCategory === \'webinars\' && !post.video_embed_code" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 4h10a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2zm0 1h10a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1V6a1 1 0 011-1zm1 10h8v1H6v-1z" fill="#141B24" fill-opacity=".4"/></svg>\r\n                    <svg *ngIf="post.resourceTypeCategory === \'piano-news\' && !post.video_embed_code" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14 3H3v10a2 2 0 002 2h9V3zm.268 13H16a2 2 0 002-2V6a1 1 0 00-1-1h-2V3a1 1 0 00-1-1H3a1 1 0 00-1 1v10a3 3 0 003 3h9.268zM15 14V6h2v8a1 1 0 11-2 0zm-6.5-3a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" fill="#141B24" fill-opacity=".4"/></svg>\r\n                    <svg *ngIf="post.video_embed_code" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17 10a7 7 0 11-14 0 7 7 0 0114 0zm1 0a8 8 0 11-16 0 8 8 0 0116 0zm-5.5 0l-4-2.5v5l4-2.5z" fill="#141B24" fill-opacity=".4"/></svg>\r\n                    <svg *ngIf="!post.resourceTypeCategory && !post.video_embed_code" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.786 5H7.5c.434 0 .786.352.786.786V8.5a.786.786 0 01-.786.786H4.786A.786.786 0 014 8.5V5.786C4 5.352 4.352 5 4.786 5zm0 .714a.071.071 0 00-.072.072V8.5c0 .04.032.071.072.071H7.5a.07.07 0 00.071-.071V5.786a.071.071 0 00-.071-.072H4.786zm10.643.715h-5v-.715h5v.715zm0 2.857h-5V8.57h5v.715zm0 2.857H4v-.714h11.429v.714zm0 2.857H4v-.714h11.429V15z" fill="#141B24" fill-opacity=".4"/></svg>\r\n                </i>\r\n                <span class="date">{{ post.post_date | date:\'longDate\' }}</span>\r\n            </div>\r\n        </div>\r\n    </a>\r\n</main>\r\n<footer class="load-more">\r\n    <button (click)="loadMorePosts(category)" class="button--light down" [disabled]="noMorePostsAvailable">\r\n        <span class="button-text">{{ i18n.t(\'Load more\') }}</span>\r\n        <i>\r\n            <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.1 5L5.8 0.699999L6.5 -9.53674e-07L12 5.5L6.5 11L5.8 10.3L10.1 6L0 6L1.90735e-06 5L10.1 5Z" /></svg>\r\n        </i>\r\n    </button>\r\n</footer>\r\n\r\n',styles:[""]}),Sn("design:paramtypes",[Ua,qa])],za);let Wa=class{gOnInit(){const e=document.querySelector(".feature-prev"),t=document.querySelector(".feature-next");this.slides[0].classList.add("active"),this.turnFeatureTitleColor(),e.addEventListener("click",e=>{this.prevSlide(),this.turnFeatureTitleColor()}),t.addEventListener("click",}turnFeatureTitleColor(){let e=document.querySelector("#Features-Nav-Title");document.querySelector(".feature.active .copy").classList.contains("copy--white")?e.style.color="#ffffff":e.removeAttribute("style")}nextSlide(){this.activeSlide===this.slides.length-1?this.activeSlide=0:this.activeSlide++;for(let e=0;e<this.slides.length;e++)this.slides[e].classList.remove("active");this.slides[this.activeSlide].classList.add("active")}prevSlide(){0===this.activeSlide?this.activeSlide=this.slides.length-1:this.activeSlide--;for(let e=0;e<this.slides.length;e++)this.slides[e].classList.remove("active");this.slides[this.activeSlide].classList.add("active")}};Wa.ctorParameters=()=>[],Wa=Cn([Object(s.n)({selector:"resources-featured-slider",template:"<ng-content></ng-content>"}),Sn("design:paramtypes",[])],Wa);let Ga=class{gOnInit(){const e=document.querySelector("#search-button"),t=document.querySelector("#Utility-Bar"),n=document.querySelector("#search-form"),s=document.querySelector(".utility-bar__search-form"),r=document.querySelector("#search-submit"),i=document.querySelector("#close-search"),o=document.querySelector("#search-keyword"),a=()=>{this.isSearch=!this.isSearch,this.isSearch?(t.style.display="none",n.style.display="block"):(t.style.display="flex",n.style.display="none")};e.addEventListener("click",,i.addEventListener("click",,r.addEventListener("click",;const l=document.querySelector("#mobile-category-button"),c=document.querySelector(".utility-bar__mobile-category");l.addEventListener("click",()=>{l.classList.toggle("active"),c.classList.toggle("active"),document.body.classList.toggle("fixed")});document.querySelectorAll(".mobile-category__button").forEach(e=>{e.addEventListener("click",})}};Ga.ctorParameters=()=>[],Ga=Cn([Object(s.n)({selector:"utility-bar",template:"<ng-content></ng-content>"}),Sn("design:paramtypes",[])],Ga);let Ka=class{constructor(){}registerLangSwitcher(){document.addEventListener("$PIANOIO_TOPBAR:langChanged",e=>{window.location.href=window.location.origin+"/"+e.detail.language+window.location.pathname})}instance(){return new Promise((e,t)=>{!this._instance&&"$PIANOIO_TOPBAR"in window&&(this._instance=window.$PIANOIO_TOPBAR,e(this._instance)),this._instance&&e(this._instance),document.addEventListener("$PIANOIO_TOPBAR:apiInitialized",})}};Ka.ctorParameters=()=>[],Ka=Cn([Object(s.A)(),Sn("design:paramtypes",[])],Ka);let Qa=class{constructor(e,t,n,s){this.compiler=e,this.injector=t,this.topBarService=n,this.ngZone=s,this.stopWatchRequestDemo=!1,this.destroy$=new Yr.a,this.stopwatch$=new Yr.a}registerTopBar(){this.ngZone.runOutsideAngular(()=>{ti(document,"scroll").pipe(di(Object(si.a)(this.destroy$,this.stopwatch$)),gi().subscribe(()=>{window.scrollY>window.innerHeight-60&&this.ngZone.run(()=>{this.topBarService.instance().then(,this.stopwatch$.next(),this.stopwatch$.complete()})})}),this.topBarService.registerLangSwitcher()}ngOnInitompileModule(e,t){let n=document.body.querySelector("piano-app-template");const r=function({components:e}){return Object(s.I)({imports:[Jt,Zr,ao,Ir,Nr,co],schemas:[s.i],declarations:e})(class{})}({components:[function(e,t){return Object(s.n)({selector:t,template:e,encapsulation:s.ib.None})(class{})}(n.innerHTML,"piano-app-template"),Xr,uo,fo,go,yo,vo,wa,Ea,xa,Da,Oa,Ia,Na,Ma,Ra,ja,za,Wa,Ga]});this.compiler.compileModuleAndAllComponentsAsync(r).then(.then(s=>{n.remove(),e.createComponent(s,0,t)})};var Za;Qa.ctorParameters=()=>[{type:s.l},{type:s.C},{type:Ka},{type:s.M}],Qa.propDecorators={contentProjection:[{type:s.gb,args:["contentProjection",{read:s.hb,static:!0}]}]},Qa=Cn([Object(s.n)({selector:"piano-app",template:"<div #contentProjection></div>"}),Sn("design:paramtypes",[s.l,s.C,Ka,s.M])],Qa);let Ja=Za=class{constructor(){this.onChange=e=>{},this.onTouched=()=>{}}writeValue(e){}registerOnChange(e){this.onChange=e}registerOnTouched(e){this.onTouched=e}};var Xa;Ja=Za=Cn([Object(s.s)({selector:"input[type=file]",host:{"(change)":"onChange($event.target.files)","(blur)":"onTouched()"},providers:[{provide:On,useExisting:Za,multi:!0}]})],Ja);let Ya=Xa=class{static validate(e){return null==e.value||0==e.value.length?{required:!0}:null};var el;Ya=Xa=Cn([Object(s.s)({selector:"[requiredFile]",providers:[{provide:Vn,useExisting:Xa,multi:!0}]})],Ya);let tl=el=class{validate(e){return e.value?e.value.trim()?null:{spacesError:!0}:null}};tl=el=Cn([Object(s.s)({selector:"[inputSpaceValidator]",providers:[{provide:Vn,useExisting:el,multi:!0}]})],tl);let nl=nl=Cn([Object(s.I)({schemas:[s.i],imports:[Jt,Zr,ao,Ir,Nr,co],declarations:[Qa,Ja,Ya,tl],providers:[ua,Ua,pa,ba,Aa,ha,Jr,Ka,qa,{provide:_o,useValue:bo}],bootstrap:[Qa],exports:[Ja,Ya,tl]})],nl),Object(s.kb)(),document.addEventListener("DOMContentLoaded",()=>{En().bootstrapModule(nl).catch(e=>console.error(e))})},zn8P:,[[0,0]]]);