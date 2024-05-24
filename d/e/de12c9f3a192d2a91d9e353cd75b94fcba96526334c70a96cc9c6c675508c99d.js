(function(){var g,k=this;function aa(){}
var t="closure_uid_"+(1E9*Math.random()>>>0),ca=0;var fa=Date.now||
function v(a,b){a=a.split(".");var c=k;a[0]in c||!c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]?c=c[d]:c=c[d]={}:c[d]=b}
;var ga=String.prototype.trim?ha=/&/g,ia=/</g,ja=/>/g,ka=/"/g,la=/'/g,ma=/\x00/g,na=/[\x00&<>"']/;
;var oa=Array.prototype.indexOf?y=Array.prototype.forEach?
;;var B;a:{var sa=k.navigator;if(sa){var ta=sa.userAgent;if(ta){B=ta;break a}}B=""};;var wa=C("Opera"),D=C("Trident")||C("MSIE"),xa=C("Edge"),E=C("Gecko")&&!(-1!=B.toLowerCase().indexOf("webkit")&&!C("Edge"))&&!(C("Trident")||C("MSIE"))&&!C("Edge"),ya=-1!=B.toLowerCase().indexOf("webkit")&&!C("Edge");var Aa;a:{var Ba="",Ca=);
Ca&&(Ba=Ca?Ca[1]:"");if(D){var Da=za();if(null!=Da&&Da>parseFloat(Ba)){Aa=String(Da);break a}}Aa=Ba}var Ea=Aa,va={};
var Ga;var Ha=k.document;Ga=Ha&&D?za()||("CSS1Compat"==Ha.compatMode?parseInt(Ea,10):5):void 0;var Ia;if(!(Ia=!E&&!D)){var Ja;if(Ja=D)Ja=9<=Number(Ga);Ia=Ja}Ia||E&&Fa("1.9.1");D&&Fa("9");;var Ma=k.JSON.parse,Na=k.JSON.stringify;var Pa;
;Ra.prototype.get=var Ua=new Ra(100);
Sa.prototype.remove=
Ta.prototype.set=
Ta.prototype.reset=var F;function Wa(){var a=k.Promise;if(-1!=String(a).indexOf("[native code]")){var b=a.resolve(void 0);F=else F=
var Xa=!1,Ya=new Sa;;G.prototype.c=!1;G.prototype.dispose=
G.prototype.A=w(H,G);g=H.prototype;g.subscribe=
g.F=
g.I=
g.clear=
g.A=var bb=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;var eb=/#|$/;var J=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};v("yt.config_",J);v("yt.tokens_",window.yt&&window.yt.tokens_||{});var fb=window.yt&&window.yt.msgs_||l("window.ytcfg.msgs")||{};v("yt.msgs_",fb);function ib(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){throw jb(b),b;}}:a}
;var kb=l("yt.dom.getNextId_");if(!kb){kb=
v("yt.dom.getNextId_",kb);var lb=0};function K(a){this.type="";this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;if(a=a||window.event){this.a=a;for(var b in a)b in mb||(this[b]=a[b]);(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=null}else"mouseover"==this.type?b=a.fromElement:"mouseout"==this.type&&(b=a.toElement);this.relatedTarget=
b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey}}
K.prototype.preventDefault=function(){this.a&&(this.a.returnValue=!1,this.a.preventDefault&&this.a.preventDefault())};
K.prototype.stopPropagation=function(){this.a&&(this.a.cancelBubble=!0,this.a.stopPropagation&&this.a.stopPropagation())};
K.prototype.stopImmediatePropagation=
var mb={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};var A=l("yt.events.listeners_")||{};v("yt.events.listeners_",A);var nb=l("yt.events.counter_")||{count:0};v("yt.events.counter_",nb);function ob(a,b,c){a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return ra(}
function pb(a,b,c){if(a&&(a.addEventListener||a.attachEvent)){var d=ob(a,b,c);if(!d){var d=++nb.count+"",e=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document),f;f=e?
f=ib(f);a.addEventListener?("mouseenter"==b&&e?b="mouseover":"mouseleave"==b&&e?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),a.addEventListener(b,f,!1)):a.attachEvent("on"+b,f);A[d]=[a,b,c,f,!1]}}}
;var rb={};;var L={},tb=[],I=new H,ub={};;g=N.prototype;g.S=
g.R=
g.J=
g.addEventListener=
function Ab(a,b){b=b.split(".");if(2==b.length){var c=b[1];a.s==b[0]&&Bb(a,c)}}
g.P=
g.o=n;g.u=
g.l=function(a,b){this.f.c||(b={target:this,data:b},this.f.I(a,b),xb(this.s+"."+a,b))};
function yb(a,b){var c=document.createElement("iframe");b=b.attributes;for(var d=0,e=b.length;d<e;d++){var f=b[d].value;null!=f&&""!=f&&"null"!=f&&c.setAttribute(b[d].name,f)}c.setAttribute("frameBorder",0);c.setAttribute("allowfullscreen",1);c.setAttribute("title","YouTube "+O(a.b,"title"));(b=O(a.b,"width"))&&c.setAttribute("width",b);(b=O(a.b,"height"))&&c.setAttribute("height",b);var h=a.u();h.enablejsapi=window.postMessage?1:0;window.location.host&&(h.origin=window.location.protocol+"//"+window.location.host);
h.widgetid=a.g;window.location.href&&y(["debugjs","debugcss"],;
c.src=O(a.b,"host")+a.o()+"?"+db(h);return c}
g.H=
g.C=function(a){a.id=this.g;a.channel="widget";a=Na(a);var b;b=this.b;var c,d=this.a.src.match(bb);c=d[1];var e=d[2],f=d[3],d=d[4],h="";c&&(h+=c+":");f&&(h+="//",e&&(h+=e+"@"),h+=f,d&&(h+=":"+d));c=h;b=0==c.indexOf("https:")?[c]:b.b?[c.replace("http:","https:")]:b.f?[c]:[c,c.replace("http:","https:")];for(c=0;c<b.length;c++)try{this.a.contentWindow.postMessage(a,b[c])}catch(m){if(m.name&&"SyntaxError"==m.name)jb(m,"WARNING");else throw m;}};var R="StopIteration"in k?k.StopIteration:{message:"StopIteration",stack:""};function S(){}
S.prototype.next=
S.prototype.m=
;function T(){}
T.prototype.set=n;T.prototype.get=n;T.prototype.remove=n;w(U,T);U.prototype.m=n;U.prototype.clear=w(V,U);g=V.prototype;g.set=
g.get=
g.remove=
g.m=
g.clear=
g.key=function Hb(){var a=null;try{a=window.localStorage||null}catch(b){}this.a=a}
w(Hb,V);w(Ib,V);Gb(new Hb);Gb(new Ib);;var P=null;function O(a,b){a=[a.c,window.YTConfig||{},a.a];for(var c=0;c<a.length;c++){var d=a[c][b];if(void 0!=d)return d}return null}
W.prototype.g=function Lb(a){W.call(this,a);this.a.title="video player";this.a.videoId="";this.a.width=640;this.a.height=360}
w(Lb,W);function X(a,b){b=new Lb(b);N.call(this,a,b,"player");this.i={};this.j={}}
w(X,N);g=X.prototype;g.o=function(){return"/embed/"+O(this.b,"videoId")};
g.u=
g.J=
g.V=function(){var a=O(this.b,"host")+this.o(),b='<iframe width="'+parseInt(O(this.b,"width"),10)+'" height="'+parseInt(O(this.b,"height"),10)+'" src="';na.test(a)&&(-1!=a.indexOf("&")&&(a=a.replace(ha,"&amp;")),-1!=a.indexOf("<")&&(a=a.replace(ia,"&lt;")),-1!=a.indexOf(">")&&(a=a.replace(ja,"&gt;")),-1!=a.indexOf('"')&&(a=a.replace(ka,"&quot;")),-1!=a.indexOf("'")&&(a=a.replace(la,"&#39;")),-1!=a.indexOf("\x00")&&(a=a.replace(ma,"&#0;")));return b+a+'" frameborder="0" allowfullscreen></iframe>'};
g.U=
g.T=w(Pb,W);function Y(a,b){b=new Pb(b);N.call(this,a,b,"thumbnail")}
w(Y,N);Y.prototype.o=
Y.prototype.u=
Y.prototype.l=w(Rb,W);function Z(a,b){b=new Rb(b);N.call(this,a,b,"upload")}
w(Z,N);g=Z.prototype;g.o=
g.u=
g.l=
g.K=function(a){Q(this,"setVideoDescription",arguments)};
g.M=function(a){Q(this,"setVideoKeywords",arguments)};
g.N=function(a){Q(this,"setVideoPrivacy",arguments)};
g.L=function(a){Q(this,"setVideoDraftPrivacy",arguments)};
g.O=v("YT.PlayerState.UNSTARTED",-1);v("YT.PlayerState.ENDED",0);v("YT.PlayerState.PLAYING",1);v("YT.PlayerState.PAUSED",2);v("YT.PlayerState.BUFFERING",3);v("YT.PlayerState.CUED",5);v("YT.UploadWidgetEvent.API_READY","onApiReady");v("YT.UploadWidgetEvent.UPLOAD_SUCCESS","onUploadSuccess");v("YT.UploadWidgetEvent.PROCESSING_COMPLETE","onProcessingComplete");v("YT.UploadWidgetEvent.STATE_CHANGE","onStateChange");v("YT.UploadWidgetState.IDLE",0);v("YT.UploadWidgetState.PENDING",1);
v("YT.UploadWidgetState.ERROR",2);v("YT.UploadWidgetState.PLAYBACK",3);v("YT.UploadWidgetState.RECORDING",4);v("YT.UploadWidgetState.STOPPED",5);v("YT.get",;
v("YT.scan",vb);v("YT.subscribe",;
v("YT.unsubscribe",;
v("YT.Player",X);v("YT.Thumbnail",Y);v("YT.UploadWidget",Z);N.prototype.destroy=N.prototype.P;N.prototype.setSize=N.prototype.S;N.prototype.getIframe=N.prototype.R;N.prototype.addEventListener=N.prototype.addEventListener;X.prototype.getVideoEmbedCode=X.prototype.V;X.prototype.getOptions=X.prototype.U;X.prototype.getOption=X.prototype.T;Z.prototype.setVideoDescription=Z.prototype.K;Z.prototype.setVideoKeywords=Z.prototype.M;Z.prototype.setVideoPrivacy=Z.prototype.N;Z.prototype.setVideoTitle=Z.prototype.O;
Z.prototype.setVideoDraftPrivacy=Z.prototype.L;tb.push(function(){var a=wb("player");y(a,Mb)});
tb.push(;
"undefined"!=typeof YTConfig&&YTConfig.parsetags&&"onload"!=YTConfig.parsetags||vb();var Sb=l("onYTReady");Sb&&Sb();var Tb=l("onYouTubeIframeAPIReady");Tb&&Tb();var Ub=l("onYouTubePlayerAPIReady");Ub&&Ub();})();
