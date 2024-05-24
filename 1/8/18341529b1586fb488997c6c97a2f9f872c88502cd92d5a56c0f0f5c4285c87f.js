(function(){for(var g,aa="function"==typeof Object.defineProperties?Object.defineProperty:k="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,m=["String",
"prototype","repeat"],n=0;n<m.length-1;n++){var p=m[n];p in k||(k[p]={});k=k[p]}var ba=m[m.length-1],q=k[ba],r=q?q:
r!=q&&null!=r&&aa(k,ba,{configurable:!0,writable:!0,value:r});var t=this;function ca(){}
var y="closure_uid_"+(1E9*Math.random()>>>0),ea=0;var ha=Date.now||
;ia.prototype.get=var ja=t.JSON.parse,ka=t.JSON.stringify;;;function oa(){}
;var pa=String.prototype.trim?qa=/&/g,ra=/</g,sa=/>/g,ta=/"/g,ua=/'/g,va=/\x00/g,wa=/[\x00&<>"']/;
;var D=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};A("yt.config_",D);A("yt.tokens_",window.yt&&window.yt.tokens_||{});var ya=window.yt&&window.yt.msgs_||u("window.ytcfg.msgs")||{};A("yt.msgs_",ya);;var Da={};;function E(a){this.type="";this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;if(a=a||window.event){this.a=a;for(var b in a)b in Fa||(this[b]=a[b]);(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=null}else"mouseover"==this.type?b=a.fromElement:"mouseout"==this.type&&(b=a.toElement);this.relatedTarget=
b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey}}
E.prototype.preventDefault=function(){this.a&&(this.a.returnValue=!1,this.a.preventDefault&&this.a.preventDefault())};
E.prototype.stopPropagation=function(){this.a&&(this.a.cancelBubble=!0,this.a.stopPropagation&&this.a.stopPropagation())};
E.prototype.stopImmediatePropagation=
var Fa={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};F.prototype.c=!1;F.prototype.dispose=
F.prototype.A=var G;a:{var Ga=t.navigator;if(Ga){var Ha=Ga.userAgent;if(Ha){G=Ha;break a}}G=""};var Ia=Array.prototype.indexOf?I=Array.prototype.forEach?
;var Oa=new ia(100);
Ma.prototype.remove=
Na.prototype.set=
Na.prototype.reset=var Pa=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;var Sa=/#|$/;var Ua;
;var J="StopIteration"in t?t.StopIteration:{message:"StopIteration",stack:""};K.prototype.next=
K.prototype.o=
;var Za=H("Opera"),L=H("Trident")||H("MSIE"),$a=H("Edge"),ab=H("Gecko")&&!(-1!=G.toLowerCase().indexOf("webkit")&&!H("Edge"))&&!(H("Trident")||H("MSIE"))&&!H("Edge"),bb=-1!=G.toLowerCase().indexOf("webkit")&&!H("Edge");var db;a:{var eb="",fb=);
fb&&(eb=fb?fb[1]:"");if(L){var gb=cb();if(null!=gb&&gb>parseFloat(eb)){db=String(gb);break a}}db=eb}var hb=db,na={};
var jb;var kb=t.document;jb=kb&&L?cb()||("CSS1Compat"==kb.compatMode?parseInt(hb,10):5):void 0;var M;function mb(){var a=t.Promise;if(-1!=String(a).indexOf("[native code]")){var b=a.resolve(void 0);M=else M=
var nb=!1,ob=new Ma;;var qb;if(!(qb=!ab&&!L)){var rb;if(rb=L)rb=9<=Number(jb);qb=rb}qb||ab&&ib("1.9.1");L&&ib("9");function sb(){}
B(sb,oa);sb.prototype.clear=;B(N,F);g=N.prototype;g.subscribe=
g.F=
g.I=
g.clear=
g.A=B(P,sb);g=P.prototype;g.set=
g.get=
g.remove=
g.o=
g.clear=
g.key=function yb(){var a=null;try{a=window.localStorage||null}catch(b){}this.a=a}
B(yb,P);B(zb,P);var Ab=u("yt.dom.getNextId_");if(!Ab){Ab=
A("yt.dom.getNextId_",Ab);var Bb=0};var Q={},Cb=[],O=new N,Db={};;var C=u("yt.events.listeners_")||{};A("yt.events.listeners_",C);var Hb=u("yt.events.counter_")||{count:0};A("yt.events.counter_",Hb);function Ib(a,b,c){a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return la(}
function Jb(a,b,c){if(a&&(a.addEventListener||a.attachEvent)){var d=Ib(a,b,c);if(!d){var d=++Hb.count+"",e=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document),f;f=e?
f=Ba(f);a.addEventListener?("mouseenter"==b&&e?b="mouseover":"mouseleave"==b&&e?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),a.addEventListener(b,f,!1)):a.attachEvent("on"+b,f);C[d]=[a,b,c,f,!1]}}}
;xb(new yb);xb(new zb);g=S.prototype;g.S=
g.R=
g.J=
g.addEventListener=
g.P=
g.s=
g.l=
g.H=
g.C=function(a){a.id=this.g;a.channel="widget";a=ka(a);var b;b=this.b;var c,d=this.a.src.match(Pa);c=d[1];var e=d[2],f=d[3],d=d[4],h="";c&&(h+=c+":");f&&(h+="//",e&&(h+=e+"@"),h+=f,d&&(h+=":"+d));c=h;b=0==c.indexOf("https:")?[c]:b.b?[c.replace("http:","https:")]:b.f?[c]:[c,c.replace("http:","https:")];for(c=0;c<b.length;c++)try{this.a.contentWindow.postMessage(a,b[c])}catch(l){if(l.name&&"SyntaxError"==l.name)Ca(l,"WARNING");else throw l;}};var U=null;W.prototype.g=;function Sb(a){W.call(this,a);this.a.title="video player";this.a.videoId="";this.a.width=640;this.a.height=360}
B(Sb,W);B(Tb,W);B(X,S);g=X.prototype;g.u=function(){return"/embed/"+T(this.b,"videoId")};
g.s=
g.J=
g.V=function(){var a;a='<iframe width="'+parseInt(T(this.b,"width"),10)+'" height="'+parseInt(T(this.b,"height"),10)+'" src="';var b=T(this.b,"host")+this.u();wa.test(b)&&(-1!=b.indexOf("&")&&(b=b.replace(qa,"&amp;")),-1!=b.indexOf("<")&&(b=b.replace(ra,"&lt;")),-1!=b.indexOf(">")&&(b=b.replace(sa,"&gt;")),-1!=b.indexOf('"')&&(b=b.replace(ta,"&quot;")),-1!=b.indexOf("'")&&(b=b.replace(ua,"&#39;")),-1!=b.indexOf("\x00")&&(b=b.replace(va,"&#0;")));a=a+b+'" frameborder="0" allowfullscreen></iframe>';
return a};
g.U=
g.T=function Y(a,b){var c=new Tb(b);S.call(this,a,c,"thumbnail")}
B(Y,S);Y.prototype.u=
Y.prototype.s=
Y.prototype.l=B(Yb,W);B(Z,S);g=Z.prototype;g.u=
g.s=
g.l=
g.K=function(a){V(this,"setVideoDescription",arguments)};
g.M=function(a){V(this,"setVideoKeywords",arguments)};
g.N=function(a){V(this,"setVideoPrivacy",arguments)};
g.L=function(a){V(this,"setVideoDraftPrivacy",arguments)};
g.O=A("YT.PlayerState.UNSTARTED",-1);A("YT.PlayerState.ENDED",0);A("YT.PlayerState.PLAYING",1);A("YT.PlayerState.PAUSED",2);A("YT.PlayerState.BUFFERING",3);A("YT.PlayerState.CUED",5);A("YT.UploadWidgetEvent.API_READY","onApiReady");A("YT.UploadWidgetEvent.UPLOAD_SUCCESS","onUploadSuccess");A("YT.UploadWidgetEvent.PROCESSING_COMPLETE","onProcessingComplete");A("YT.UploadWidgetEvent.STATE_CHANGE","onStateChange");A("YT.UploadWidgetState.IDLE",0);A("YT.UploadWidgetState.PENDING",1);
A("YT.UploadWidgetState.ERROR",2);A("YT.UploadWidgetState.PLAYBACK",3);A("YT.UploadWidgetState.RECORDING",4);A("YT.UploadWidgetState.STOPPED",5);A("YT.get",;
A("YT.scan",Eb);A("YT.subscribe",;
A("YT.unsubscribe",;
A("YT.Player",X);A("YT.Thumbnail",Y);A("YT.UploadWidget",Z);S.prototype.destroy=S.prototype.P;S.prototype.setSize=S.prototype.S;S.prototype.getIframe=S.prototype.R;S.prototype.addEventListener=S.prototype.addEventListener;X.prototype.getVideoEmbedCode=X.prototype.V;X.prototype.getOptions=X.prototype.U;X.prototype.getOption=X.prototype.T;Z.prototype.setVideoDescription=Z.prototype.K;Z.prototype.setVideoKeywords=Z.prototype.M;Z.prototype.setVideoPrivacy=Z.prototype.N;Z.prototype.setVideoTitle=Z.prototype.O;
Z.prototype.setVideoDraftPrivacy=Z.prototype.L;Cb.push(function(){var a=Fb("player");I(a,Ub)});
Cb.push(;
"undefined"!=typeof YTConfig&&YTConfig.parsetags&&"onload"!=YTConfig.parsetags||Eb();var Zb=u("onYTReady");Zb&&Zb();var $b=u("onYouTubeIframeAPIReady");$b&&$b();var ac=u("onYouTubePlayerAPIReady");ac&&ac();}).call(this);
