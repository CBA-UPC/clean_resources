/*! @license Firebase v3.5.2
    Build: 3.5.2-rc.1
    Terms: https://developers.google.com/terms */
var firebase = null; (function() { for(var aa="function"==typeof Object.defineProperties?Object.defineProperty:h="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,ba=da=0,ca=m=ea=fa=n=function(a){m();var b=a[Symbol.iterator];return b?b.call(a):ea(a)},p=h,q=["Promise"],r=0;r<q.length-1;r++){var t=q[r];t in p||(p[t]={});p=p[t]}
var ga=q[q.length-1],u=p[ga],w=function(){f(u)return u;a.prototype.L=a.prototype.W=var b=h.setTimeout;a.prototype.M=a.prototype.$=a.prototype.X=var c=
c.prototype.F=c.prototype.ia=c.prototype.ha=c.prototype.K=function(a){this.U(2,a)};c.prototype.R=c.prototype.U=c.prototype.ba=var d=new a;c.prototype.la=
c.prototype.ma=c.prototype.then=c.prototype.catch=c.prototype.o=c.resolve=c.reject=function(a){return new c(function(b,c){c(a)})};c.race=c.all=function(a){var b=n(a),d=b.next();return d.done?c.resolve([]):new c(};c.$jscomp$new$AsyncExecutor=function(){return new a};return c}();w!=u&&null!=w&&aa(p,ga,{configurable:!0,writable:!0,value:w});
var x=this,y=function(){},ha=A=ia=ja=B=ka=la=var C;C="undefined"!==typeof window?window:"undefined"!==typeof self?self:global;ar __param=__awaiter="undefined"!==typeof C.V&&C.V||(C.__extends=__extends,C.__decorate=__decorate,C.__metadata=__metadata,C.__param=__param,C.__awaiter=__awaiter);var D=la(D,Error);D.prototype.name="CustomError";var ma=var E=la(E,D);E.prototype.name="AssertionError";var na=F=G=var H=H.prototype.get=H.prototype.put=var I;a:{var oa=x.navigator;if(oa){var pa=oa.userAgent;if(pa){I=pa;break a}}I=""};var qa=J,ra=var K=sa=new H(function(){return new L},function(a){a.reset()},100);K.prototype.add=K.prototype.remove=var L=function(){this.next=this.scope=this.H=null};L.prototype.set=
L.prototype.reset=var O=M,ta=function(){var a=x.Promise;if(-1!=String(a).indexOf("[native code]")){var b=a.resolve(void 0);M=else M=function(){var a=va,b;!(b=!A(x.setImmediate))&&(b=x.Window&&x.Window.prototype)&&(b=-1==I.indexOf("Edge")&&x.Window.prototype.setImmediate==x.setImmediate);b?(J||(J=ra()),J(a)):x.setImmediate(a)}},N=!1,ua=new K,va=var Q=wa=wa.prototype.reset=
var xa=new H(function(a){a.reset()},100),ya=Aa=Q.prototype.then=Q.prototype.then=Q.prototype.then;Q.prototype.$goog_Thenable=!0;
Q.prototype.na=var Da=Ba=Q.prototype.oa=function(a){F(1==this.a);this.a=0;P(this,2,a)};
Q.prototype.pa=
var P=za=Ga=Ca=Ha=
Q.prototype.aa=var Ia=Ea=Ja=qa;Q.all=Q.resolve=Q.reject=Q.prototype["catch"]=Q.prototype.na;var S=Q;"undefined"!==typeof Promise&&(S=Promise);var Ka=S;ar T=T.prototype.next=T.prototype.error=T.prototype.complete=
T.prototype.subscribe=
T.prototype.qa=var U=Oa=T.prototype.close=
function Ma(a){if("object"!==typeof a||null===a)return!1;for(var b=n(["next","error","complete"]),c=b.next();!c.done;c=b.next())if(c=c.value,c in a&&"function"===typeof a[c])return!0;return!1}var Pa=Error.captureStackTrace,V=V.prototype=Object.create(Error.prototype);V.prototype.constructor=V;V.prototype.name="FirebaseError";var Qa=
Qa.prototype.create=var W=S,X=function(a,b,c){var d=this;this.P=c;this.S=!1;this.l={};this.I=b;this.fa=R(void 0,a);Object.keys(c.INTERNAL.factories).forEach(};X.prototype.delete=
X.prototype.da=X.prototype.ca=var Y=h.Object.defineProperties(X.prototype,{name:{configurable:!0,enumerable:!0,get:function(){Y(this);return this.I}},options:{configurable:!0,enumerable:!0,get:});X.prototype.name&&X.prototype.options||X.prototype.delete||console.log("dc");
function Sa(){ d={},e={},f={},g={__esModule:!0,initializeApp:app:a,apps:null,Promise:W,SDK_VERSION:"0.0.0",INTERNAL:{registerService:createFirebaseNamespace:Sa,
extendNamespace:createSubscribe:La,ErrorFactory:Qa,removeApp:factories:e,useAsService:c,Promise:Q,deepExtend:R}};g["default"]=g;Object.defineProperty(g,"apps",{get:);a.App=X;return g}function Ra(a,b){b=b||{};b={noApp:"No Firebase App '"+b.name+"' has been created - call Firebase App.initializeApp().","bad-app-name":"Illegal App name: '"+b.name+"'.",dupApp:"Firebase App named '"+b.name+"' already exists.",deleted:"Firebase App named '"+b.name+"' already deleted.",dupService:"Firebase Service named '"+b.name+"' already registered.",serverAuthMissing:"Initializing the Firebase SDK with a service account is only allowed in a Node.js environment. On client devices, you should instead initialize the SDK with an api key and auth domain."}[a];
return void 0===b?"Application Error: ("+a+")":b};"undefined"!==typeof firebase&&(firebase=Sa()); })();
firebase.SDK_VERSION = "3.5.2";
