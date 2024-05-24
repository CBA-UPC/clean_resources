(function(){var g,k=this;function aa(){}
var r="closure_uid_"+(1E9*Math.random()>>>0),ca=0;var fa=Date.now||
;var ga=String.prototype.trim?ha=/&/g,ia=/</g,ja=/>/g,ka=/"/g,la=/'/g,ma=/\x00/g,na=/[\x00&<>"']/;
;var oa=Array.prototype.indexOf?x=Array.prototype.forEach?
;ra.prototype.get=var z;a:{var sa=k.navigator;if(sa){var ta=sa.userAgent;if(ta){z=ta;break a}}z=""};;var C;
;var ya=new ra(100);
xa.prototype.remove=
D.prototype.set=
D.prototype.reset=var E;var F=!1,Ba=new xa;;G.prototype.c=!1;G.prototype.dispose=
G.prototype.A=;var Fa=A("Opera"),H=A("Trident")||A("MSIE"),Ga=A("Edge"),I=A("Gecko")&&!(-1!=z.toLowerCase().indexOf("webkit")&&!A("Edge"))&&!(A("Trident")||A("MSIE"))&&!A("Edge"),Ha=-1!=z.toLowerCase().indexOf("webkit")&&!A("Edge");var Ja;a:{var Ka="",La=);
La&&(Ka=La?La[1]:"");if(H){var Ma=Ia();if(null!=Ma&&Ma>parseFloat(Ka)){Ja=String(Ma);break a}}Ja=Ka}var Na=Ja,Ea={};
var Pa;var Qa=k.document;Pa=Qa&&H?Ia()||("CSS1Compat"==Qa.compatMode?parseInt(Na,10):5):void 0;var Ra;if(!(Ra=!I&&!H)){var Sa;if(Sa=H)Sa=9<=Number(Pa);Ra=Sa}Ra||I&&Oa("1.9.1");H&&Oa("9");;var J="StopIteration"in k?k.StopIteration:{message:"StopIteration",stack:""};function K(){}
K.prototype.next=
K.prototype.o=
;var Ya=k.JSON.parse,Za=k.JSON.stringify;v(L,G);g=L.prototype;g.subscribe=
g.F=
g.I=
g.clear=
g.A=function bb(){}
;v(cb,bb);cb.prototype.clear=v(N,cb);g=N.prototype;g.set=
g.get=
g.remove=
g.o=
g.clear=
g.key=function eb(){var a=null;try{a=window.localStorage||null}catch(b){}this.a=a}
v(eb,N);v(fb,N);var gb=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;var jb=/#|$/;var O=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};u("yt.config_",O);;;var nb=0,ob=m("ytDomDomGetNextId")||
u("ytDomDomGetNextId",ob);var pb={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
P.prototype.preventDefault=function(){this.a&&(this.a.returnValue=!1,this.a.preventDefault&&this.a.preventDefault())};
P.prototype.stopPropagation=function(){this.a&&(this.a.cancelBubble=!0,this.a.stopPropagation&&this.a.stopPropagation())};
P.prototype.stopImmediatePropagation=var B=m("ytEventsEventsListeners")||{};u("ytEventsEventsListeners",B);var qb=m("ytEventsEventsCounter")||{count:0};u("ytEventsEventsCounter",qb);function tb(a,b,c){var d;d=void 0===d?!1:d;if(a&&(a.addEventListener||a.attachEvent)){var e=rb(a,b,c,d);if(!e){var e=++qb.count+"",h=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document),f;f=h?
f=mb(f);a.addEventListener?("mouseenter"==b&&h?b="mouseover":"mouseleave"==b&&h?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),a.addEventListener(b,f,d)):a.attachEvent("on"+b,f);B[e]=[a,b,c,f,d]}}}
;;var vb={};;var Q={},xb=[],M=new L,yb={};;g=S.prototype;g.S=
g.R=
g.J=
g.addEventListener=
g.P=
g.s=
g.l=
g.H=
g.C=function(a){a.id=this.g;a.channel="widget";a=Za(a);var b;b=this.b;var c,d=this.a.src.match(gb);c=d[1];var e=d[2],h=d[3],d=d[4],f="";c&&(f+=c+":");h&&(f+="//",e&&(f+=e+"@"),f+=h,d&&(f+=":"+d));c=f;b=0==c.indexOf("https:")?[c]:b.b?[c.replace("http:","https:")]:b.f?[c]:[c,c.replace("http:","https:")];if(!this.a.contentWindow)throw Error("The YouTube player is not attached to the DOM.");for(c=0;c<b.length;c++)try{this.a.contentWindow.postMessage(a,b[c])}catch(l){if(l.name&&"SyntaxError"==l.name)lb(l,
"WARNING");else throw l;}};db(new eb);db(new fb);;var U=null;W.prototype.g=function Jb(a){W.call(this,a);this.a.title="video player";this.a.videoId="";this.a.width=640;this.a.height=360}
v(Jb,W);v(X,S);g=X.prototype;g.u=function(){return"/embed/"+T(this.b,"videoId")};
g.s=
g.J=
g.V=function(){var a;a=parseInt(T(this.b,"width"),10);var b=parseInt(T(this.b,"height"),10);var c=T(this.b,"host")+this.u();na.test(c)&&(-1!=c.indexOf("&")&&(c=c.replace(ha,"&amp;")),-1!=c.indexOf("<")&&(c=c.replace(ia,"&lt;")),-1!=c.indexOf(">")&&(c=c.replace(ja,"&gt;")),-1!=c.indexOf('"')&&(c=c.replace(ka,"&quot;")),-1!=c.indexOf("'")&&(c=c.replace(la,"&#39;")),-1!=c.indexOf("\x00")&&(c=c.replace(ma,"&#0;")));a='<iframe width="'+a+'" height="'+b+'" src="'+c+'" frameborder="0" allowfullscreen></iframe>';
return a};
g.U=
g.T=v(Nb,W);function Y(a,b){var c=new Nb(b);S.call(this,a,c,"thumbnail")}
v(Y,S);Y.prototype.u=
Y.prototype.s=
Y.prototype.l=v(Pb,W);v(Z,S);g=Z.prototype;g.u=
g.s=
g.l=
g.K=function(a){V(this,"setVideoDescription",arguments)};
g.M=function(a){V(this,"setVideoKeywords",arguments)};
g.N=function(a){V(this,"setVideoPrivacy",arguments)};
g.L=function(a){V(this,"setVideoDraftPrivacy",arguments)};
g.O=u("YT.PlayerState.UNSTARTED",-1);u("YT.PlayerState.ENDED",0);u("YT.PlayerState.PLAYING",1);u("YT.PlayerState.PAUSED",2);u("YT.PlayerState.BUFFERING",3);u("YT.PlayerState.CUED",5);u("YT.UploadWidgetEvent.API_READY","onApiReady");u("YT.UploadWidgetEvent.UPLOAD_SUCCESS","onUploadSuccess");u("YT.UploadWidgetEvent.PROCESSING_COMPLETE","onProcessingComplete");u("YT.UploadWidgetEvent.STATE_CHANGE","onStateChange");u("YT.UploadWidgetState.IDLE",0);u("YT.UploadWidgetState.PENDING",1);
u("YT.UploadWidgetState.ERROR",2);u("YT.UploadWidgetState.PLAYBACK",3);u("YT.UploadWidgetState.RECORDING",4);u("YT.UploadWidgetState.STOPPED",5);u("YT.get",;
u("YT.scan",zb);u("YT.subscribe",;
u("YT.unsubscribe",;
u("YT.Player",X);u("YT.Thumbnail",Y);u("YT.UploadWidget",Z);S.prototype.destroy=S.prototype.P;S.prototype.setSize=S.prototype.S;S.prototype.getIframe=S.prototype.R;S.prototype.addEventListener=S.prototype.addEventListener;X.prototype.getVideoEmbedCode=X.prototype.V;X.prototype.getOptions=X.prototype.U;X.prototype.getOption=X.prototype.T;Z.prototype.setVideoDescription=Z.prototype.K;Z.prototype.setVideoKeywords=Z.prototype.M;Z.prototype.setVideoPrivacy=Z.prototype.N;Z.prototype.setVideoTitle=Z.prototype.O;
Z.prototype.setVideoDraftPrivacy=Z.prototype.L;xb.push(function(){var a=Ab("player");x(a,Kb)});
xb.push(;
"undefined"!=typeof YTConfig&&YTConfig.parsetags&&"onload"!=YTConfig.parsetags||zb();var Qb=m("onYTReady");Qb&&Qb();var Rb=m("onYouTubeIframeAPIReady");Rb&&Rb();var Sb=m("onYouTubePlayerAPIReady");Sb&&Sb();}).call(this);
