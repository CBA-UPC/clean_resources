;(function(omidGlobal) {
  var m;r ba='function'==typeof Object.create?Object.create:t='function'==typeof Object.defineProperties?Object.defineProperty:
ar da=ca(this);ar ea;
if('function'==typeof Object.setPrototypeOf)ea=Object.setPrototypeOf;else{var fa;a:{var ha={a:!0},ia={};try{ia.__proto__=ha;fa=ia.a;break a}catch(a){}fa=!1}ea=fa?null}var ja=ea;
r ka='function'==typeof Object.assign?Object.assign:u('Object.assign',;
u('Symbol',;
u('Symbol.iterator',;u('WeakMap',;
u('Map',;u('Object.values',;('Array.prototype.keys',;
u('Set',;u('Object.is',;u('Array.prototype.includes',;
u('String.prototype.includes',;u('Array.prototype.values',;
var B={ma:'loaded',sa:'start',ja:'firstQuartile',na:'midpoint',ta:'thirdQuartile',ha:'complete',oa:'pause',qa:'resume',ga:'bufferStart',fa:'bufferFinish',ra:'skipped',ua:'volumeChange',pa:'playerStateChange',ea:'adUserInteraction'},na={ka:'full',ia:'domain',la:'limited'};rototype.T=rototype.T=
ion Aa(){};r Fa=null;function Ha(){this.G=null;this.i={apiVersion:'1.0',accessMode:'limited',environment:'web',omidJsInfo:{omidImplementer:'omsdk',serviceVersion:'1.4.8-iab4174'},adSessionType:'html',supports:['clid','vlid']};this.B=null;this.A='foregrounded';this.o=this.u='none';this.m=this.l=this.j=this.C=this.h=this.g=this.M=this.S=null;this.s=new Map};var L=);unction Ka(a,b){this.g=a;this.h=b}da.Object.defineProperties(Ka.prototype,{event:{configurable:!0,enumerable:!0,get:function(){return this.g}},origin:{configurable:!0,enumerable:!0,get:});nction Na(a){this.g=a;this.l=[];this.i=[];this.j=[];this.m=[];this.o={}}function Oa(a,b){if(void 0!==a.g&&a.g.G&&!1!==Pa(a,b)){var c=b.event;a.j.filter(.forEach(function(d){a.h(d.H,c)})}}unction Qa(a,b,c){void 0!==a.g&&a.g.G&&a.l.filter(.map(function(d){return d.event}).forEach(}
function Pa(a,b){var c=b.event.type,d=-1!==Object.values(B).indexOf(c)&&'volumeChange'!==c;return'impression'===c||'loaded'===c&&a.g.h?b.origin===a.g.o:d?b.origin===a.g.u:!0}unction Sa(a,b,c,d){var e={aa:c,U:d,H:b};a.m.push(e);a.i.forEach(function(f){var k=Ta(f);'sessionStart'===f.event.type&&Ua(a,k,e);a.h(e.H,k)})}
function Va(a,b,c){var d=O(a,'sessionError','native',{errorType:b,message:c});a.i.push(d);a.m.forEach(function(e){a.h(e.H,d.event)})}function Wa(a,b){a.o=Object.assign(a.o,b);b=a.g.i;if(void 0!==b){b=Object.assign({},Xa(P(a,Q(a,{context:b}),!0)),{supportsLoadedEvent:!!a.g.h||'video'==a.g.g});Object.assign(b,{pageUrl:Ja(),contentUrl:a.g.B});var c=O(a,'sessionStart','native',b);a.i.push(c);a.m.forEach(function(d){var e=Ta(c);Ua(a,e,d);a.h(d.H,e)},a);Ya(a)}}
unction Za(a){var b=O(a,'sessionFinish','native');a.i.push(b);a.m.forEach(}Na.prototype.h=
unction ab(a){var b=a.g.o;return'none'!=b&&'javascript'!=b?(M('Impression event is owned by '+(a.g.o+', not javascript.')),!1):!0}
nction Xa(a){var b=Ea().h;return b?Object.assign({},a,{lastActivity:b}):a}unction cb(a,b){this.h=a;this.g=b};unction fb(a,b){eb(a,'clearInterval')(b)}nction R(a,b,c,d,e){this.j=a;this.ba=b;this.W=c;this.i=d;this.Z=e;this.h=null;this.g=this.l=this.M=void 0;this.Y=!0;this.o=void 0;kb(this)}
prototype.B=R.prototype.s=
unction T(a,b,c,d,e,f){R.call(this,a,c,d,e,f);this.u=b;this.m=void 0}v(T,R);T.prototype.B=function(){void 0!==this.m&&(fb(this.Z,this.m),this.m=void 0);R.prototype.B.call(this)};T.prototype.s=function(){var a=this;R.prototype.s.call(this);null==this.h?this.m=void 0:void 0===this.m&&(this.m=db(this.Z,function(){return ob(a)},200),ob(this))};
T.prototype.S=T.prototype.R=
unction U(a,b,c,d,e,f){R.call(this,a,c,d,e,f);this.C=this.u=this.A=this.m=void 0;this.X=!1;this.L=void 0}v(U,R);U.prototype.B=U.prototype.s=function(){R.prototype.s.call(this);if(this.h&&(this.m||(this.m=rb(this)),sb(this),tb(this.h)&&ub(this),'backgrounded'===this.i.A)){var a=vb(new Ga(0,0));this.L=this.g=this.l=a;S(this)}};
U.prototype.S=U.prototype.R=ion zb(a,b){var c=void 0===c?L:c;this.i=a;this.g=c;this.j=b;this.h=[]}
function Ab(a){if(!a.g||!a.g.document)throw Error('OMID Service Script is not running within a window.');var b=a.h;a.h=[];b.forEach(function(c){try{var d=c.accessMode,e='string'===typeof d&&-1!==Object.values(na).indexOf(d)?c.accessMode:null;var f=e?e:'limited';c.accessMode=f;a:{var k=c.resourceUrl,g=a.g.location.origin;try{var h=new URL(k,g);break a}catch(E){}try{h=new URL(k);break a}catch(E){}h=null}if(d=h){var l=yb(),n=a.g.document,q=n.createElement('iframe');q.id='omid-verification-script-frame-'+
l;q.style.display='none';['full','limited'].includes(f)?q.srcdoc="<html><head>\n<script type=\"text/javascript\">window['omidVerificationProperties'] = {\n'serviceWindow': window.parent,\n'injectionSource': 'web',\n'injectionId': '"+(l+'\',\n};\x3c/script>\n<script type="text/javascript" src="')+d.href+'">\x3c/script>\n</head><body></body></html>':'domain'==f&&(q.src=Bb(a,l,d).href);['domain','limited'].includes(f)&&(q.sandbox='allow-scripts');n.body.appendChild(q);Ea().g.set(l,q);var z=c.vendorKey,
y=c.verificationParameters;z=void 0===z?'':z;y=void 0===y?'':y;z&&'string'===typeof z&&''!==z&&y&&'string'===typeof y&&''!==y&&(a.i.o[z]=y);a.j.s.set(l,c)}}catch(E){Ma('OMID verification script '+c.resourceUrl+' failed to load: '+E)}})}
function Cb(a,b,c,d){var e=this;this.g=a;this.i=b;this.h=c;this.l=d;this.j=!1;Eb(this,function(f){if('sessionStart'===f.type){e.j=!0;try{Ab(e.l)}catch(k){M(k.message)}}'sessionFinish'===f.type&&(e.j=!1)})}function Eb(a,b,c,d){Sa(a.i,b,c,d)}m=Cb.prototype;m.setSlotElement=m.setElementBounds=
m.error=m.injectVerificationScriptResources=m.setCreativeType=m.setImpressionType=
m.setClientInfo=function Fb(a,b){if(!b)return a.g;for(var c=p(a.h.values()),d=c.next();!d.done;d=c.next())if(d=d.value,d.g.s.has(b))return d;return a.g}function V(a,b){return null==b?a.g:a.h.get(b)||a.g}function Gb(a){var b=new Ha,c=new Na(b),d=new Aa,e=new Ba,f=new cb(c,b);a=a.i;var k=omidGlobal;d=k?k.IntersectionObserver&&(k.MutationObserver||k.ResizeObserver)?new U(k,d,f,c,b,a):new T(k,e,f,c,b,a):null;return new Cb(b,c,d,new zb(c,b))};,Kb);X.prototype.h=X.prototype.j=.prototype.g=function(a){var b=w.apply(1,arguments);a:switch(a){case 'registerSessionObserver':var c=b.slice(1);break a;default:c=b}return this.h('SessionService.'+a,this.j.bind(this,a,b),c)};Nb.prototype.j=(Pb,Kb);Pb.prototype.h==Qb.prototype;m.registerSessionObserver=function(a,b){Eb(V(this.g,a),b)};m.setSlotElement=function(a,b){V(this.g,a).setSlotElement(b)};m.setElementBounds=function(a,b){V(this.g,a).setElementBounds(b)};m.error=function(a,b,c){V(this.g,a).error(b,c)};
function Z(a,b,c,d){a=V(a.g,b);if('impression'==c)ab(a.i)&&(c=a.i,d=(d=c.g.L)?J(d):null,d=P(c,Q(c,d)),N(c,O(c,'impression','javascript',d)),a.h&&kb(a.h));else{if('loaded'==c){if(b=d,b=void 0===b?null:b,bb(a.i)&&(d=a.i,d.g.h||'display'!=d.g.g))b=O(d,'loaded','javascript',P(d,Q(d,void 0===b?null:b))),N(d,b)}else if(bb(a.i)){b=a.i;'start'!==c&&'volumeChange'!==c||null!=(d&&d.deviceVolume)||(d.deviceVolume=b.g.S);if(d&&('start'===c||'volumeChange'===c)){var e=d.videoPlayerVolume,f=d.mediaPlayerVolume;
null!=e?(Object.assign(d,{mediaPlayerVolume:e}),b.g.M=e):null!=f&&(Object.assign(d,{videoPlayerVolume:f}),b.g.M=f)}N(b,O(b,c,'javascript',d))}['loaded','start'].includes(c)&&a.h&&kb(a.h)}}m.injectVerificationScriptResources=function(a,b){V(this.g,a).injectVerificationScriptResources(b)};m.setCreativeType=function(a,b,c){c=void 0===c?null:c;V(this.g,a).setCreativeType(b,c)};m.setImpressionType=
m.setClientInfo=function(a,b,c,d){var e=this.g;if(null==a)a=e.g;else{var f=[].concat(r(e.h.values())).includes(e.g)?Gb(e):e.g;e.h.set(a,f);a=f}return a.setClientInfo(b,c,d)};ar Vb=new 
Wb.prototype.m=function(a,b){null!=Lb(a.method)&&$b(this,Vb)&&ac(this,a,b,this.l)};Wb.prototype.o=function Yb(a,b,c,d){if(null!=Lb(b))switch(Lb(b)){case 'registerAdEvents':var e=p(d).next().value;a=V(a.g.g,e).i;$a(a,['impression'])&&ab(a)&&(a.g.o='javascript');break;case 'registerMediaEvents':e=p(d).next().value;a=V(a.g.g,e).i;$a(a,Object.values(B))&&bb(a)&&(a.g.u='javascript');break;case 'registerSessionObserver':e=p(d).next().value;a.g.registerSessionObserver(e,c);break;case 'setSlotElement':c=p(d);e=c.next().value;c=c.next().value;a.g.setSlotElement(c,e);break;case 'setVideoElement':c=p(d);
e=c.next().value;c=c.next().value;a=V(a.g.g,c);e&&e.tagName&&'video'===e.tagName.toLowerCase()?(a.g.l=e,a.h&&lb(a.h)):M('setVideoElement called with a non-HTMLVideoElement. It will be ignored.');break;case 'setElementBounds':c=p(d);e=c.next().value;c=c.next().value;a.g.setElementBounds(c,e);break;case 'startSession':c=p(d);b=c.next().value;c=c.next().value;null!=b&&'object'===typeof b?(d=b.customReferenceData,b=b.underEvaluation,'string'===typeof d||(d=void 0),'boolean'===typeof b||(b=!1),b={customReferenceData:d,
underEvaluation:b}):b=null;if(null==b)break;d=a.g;a=b;e=void 0===e?null:e;b=c||yb();c=V(d.g,b);c.g.G=b;a.canMeasureVisibility=c.h.R();b=c.g;void 0!==a.contentUrl&&(b.B=a.contentUrl,a.contentUrl=void 0);d=b.i||{};a.omidJsInfo=Object.assign({},d.omidJsInfo||{},a.omidJsInfo||{});a=Object.assign({},d,a);b.i=a;Wa(c.i,e);c.h&&kb(c.h);break;case 'finishSession':e=p(d).next().value;a=a.g;e=V(a.g,e);a=a.g;a.g=Gb(a);Za(e.i);e.h.B();break;case 'impressionOccurred':e=p(d).next().value;Z(a.g,e,'impression');break;
case 'loaded':c=p(d);e=c.next().value;c=c.next().value;e?(b={skippable:e.isSkippable,autoPlay:e.isAutoPlay,position:e.position},e.isSkippable&&(b.skipOffset=e.skipOffset),Z(a.g,c,'loaded',b)):Z(a.g,c,'loaded');break;case 'start':b=p(d);e=b.next().value;c=b.next().value;b=b.next().value;Z(a.g,b,'start',{duration:e,mediaPlayerVolume:c});break;case 'firstQuartile':e=p(d).next().value;Z(a.g,e,'firstQuartile');break;case 'midpoint':e=p(d).next().value;Z(a.g,e,'midpoint');break;case 'thirdQuartile':e=p(d).next().value;
Z(a.g,e,'thirdQuartile');break;case 'complete':e=p(d).next().value;Z(a.g,e,'complete');break;case 'pause':e=p(d).next().value;Z(a.g,e,'pause');break;case 'resume':e=p(d).next().value;Z(a.g,e,'resume');break;case 'bufferStart':e=p(d).next().value;Z(a.g,e,'bufferStart');break;case 'bufferFinish':e=p(d).next().value;Z(a.g,e,'bufferFinish');break;case 'skipped':e=p(d).next().value;Z(a.g,e,'skipped');break;case 'volumeChange':c=p(d);e=c.next().value;c=c.next().value;Z(a.g,c,'volumeChange',{mediaPlayerVolume:e});
break;case 'playerStateChange':c=p(d);e=c.next().value;c=c.next().value;Z(a.g,c,'playerStateChange',{state:e});break;case 'adUserInteraction':c=p(d);e=c.next().value;c=c.next().value;Z(a.g,c,'adUserInteraction',{interactionType:e});break;case 'setClientInfo':var f=p(d);e=f.next().value;b=f.next().value;d=f.next().value;f=f.next().value;a=a.g.setClientInfo(f,e,b,d);c(a);break;case 'injectVerificationScriptResources':c=p(d);e=c.next().value;c=c.next().value;a.g.injectVerificationScriptResources(c,e);
break;case 'setCreativeType':c=p(d);e=c.next().value;c=c.next().value;a.g.setCreativeType(c,e);break;case 'setImpressionType':c=p(d);e=c.next().value;c=c.next().value;a.g.setImpressionType(c,e);break;case 'setContentUrl':c=p(d);e=c.next().value;c=c.next().value;V(a.g.g,c).g.B=e;break;case 'sessionError':b=p(d),e=b.next().value,c=b.next().value,b=b.next().value,a.g.error(b,e,c)}}
function bc(a){a({adSessionId:'',timestamp:(new Date).getTime(),type:'sessionError',data:{errorType:'generic',message:'Registration to session events is only allowed for verification clients injected by the OM-SDK service itself. Please note that in a future release registration in this manner will be rejected.'}})}function cc(a,b,c,d){a=Fb(a.j,d);void 0!==d&&a.g.s.has(d)||bc(c);a=a.i;'media'===b||'video'===b?Ra(a,c,d):(c={type:b,U:d,H:c},a.j.push(c),Qa(a,b,c))}
function dc(a,b,c,d){a=Fb(a.j,d);void 0!==d&&a.g.s.has(d)||bc(b);Eb(a,b,c,d)}unction gc(a,b,c,d){ar f=b.h,k=b.method,g=b.version;b=Ub(g,b.g);if(null!=Mb(k,'VerificationService.')){k=Mb(k,'VerificationService.');try{switch(k){case 'addEventListener':var h=p(b),l=h.next().value,n=h.next().value||hc(c);cc(a,l,e,n);break;case 'addSessionListener':var q=p(b),z=q.next().value,y=q.next().value||hc(c);dc(a,e,z,y);break;case 'sendUrl':var E=p(b).next().value;ec(a,E,function(){return e(!0)},function(){return e(!1)});
break;case 'setTimeout':var F=p(b),mc=F.next().value,nc=F.next().value;a.m[mc]=eb(a.g,'setTimeout')(e,nc);break;case 'clearTimeout':var oc=p(b).next().value;gb(a.g,a.m[oc]);break;case 'setInterval':var Db=p(b),pc=Db.next().value,qc=Db.next().value;a.l[pc]=db(a.g,e,qc);break;case 'clearInterval':var rc=p(b).next().value;fb(a.g,a.l[rc]);break;case 'injectJavaScriptResource':var sc=p(b).next().value;fc(a,sc,;break;case 'getVersion':e('1.4.8-iab4174')}}catch(A){d.h(new W(f,
'error',g,'\n              name: '+A.name+'\n              message: '+A.message+'\n              filename: '+A.filename+'\n              lineNumber: '+A.lineNumber+'\n              columnNumber: '+A.columnNumber+'\n              stack: '+A.stack+'\n              toString(): '+A.toString()+'\n          '),c)}}}
function ic(a){var b={};return(b.app='omid_v1_present_app',b.web='omid_v1_present_web',b)[a]}unction kc(a,b){var c=a.document.createElement('iframe');c.id=b;c.name=b;c.style.display='none';c.sandbox='';a.document.body.appendChild(c)}
function lc(a,b){var c=new MutationObserver(function(d){d.forEach(function(e){'BODY'===e.addedNodes[0].nodeName&&(e=ic(b),kc(a,'omid_v1_present'),kc(a,e),c.disconnect())})});c.observe(a.document.documentElement,{childList:!0})};var tc=new Rb=new function(){this.i=tc;this.h=new Map;this.g=Gb(this)},Xb=new Qb;new function(){var a=Rb,b=this;var c=void 0===c?L:c;this.j=a;this.g=tc;this.m={};this.l={};this.i=new X;c.omid=c.omid||{};c.omid.v1_VerificationServiceCommunication=this.i;this.h=null;c&&c.addEventListener&&c.postMessage&&(this.h=new Pb(c));this.i.g=this.h&&(this.h.g=};new Wb;
(function(a,b){a.frames&&a.document&&!['omid_v1_present','omid_v1_present_web','omid_v1_present_app'].some(&&(null==a.document.body&&'MutationObserver'in a?lc(a,b):(b=ic(b),a.document.body?(kc(a,'omid_v1_present'),kc(a,b)):(jc(a,'omid_v1_present'),jc(a,b))))})(L,'web');
}).call(this, this);
