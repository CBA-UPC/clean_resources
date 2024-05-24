(function(){var h,k=this;function aa(){}
var r="closure_uid_"+(1E9*Math.random()>>>0),t=0;var da=Date.now||
;var x=Array.prototype.indexOf?y=Array.prototype.forEach?
;A.prototype.get=var ha=/&/g,ia=/</g,ja=/>/g,ka=/"/g,la=/'/g,ma=/\x00/g,na=/[\x00&<>"']/;var B;a:{var C=k.navigator;if(C){var D=C.userAgent;if(D){B=D;break a}}B=""};;var F;
function qa(){var a=k.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&-1==B.indexOf("Presto")&&(a=;
if("undefined"!==typeof a&&-1==B.indexOf("Trident")&&-1==B.indexOf("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=
return return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?
;var I=new A(;
G.prototype.add=
G.prototype.remove=
H.prototype.set=
H.prototype.reset=var J;var K=!1,ta=new G;;L.prototype.c=!1;L.prototype.dispose=
L.prototype.w=;var xa=k.JSON.stringify;w(M,L);h=M.prototype;h.subscribe=
h.C=
h.G=
h.clear=
h.w=var Aa=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;var Ea=/#|$/;var P=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};v("yt.config_",P);;;var Ia=0;v("ytDomDomGetNextId",m("ytDomDomGetNextId")||;var Ja={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Q(a){this.type="";this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;if(a=a||window.event){this.a=a;for(var b in a)b in Ja||(this[b]=a[b]);(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=null}else"mouseover"==this.type?b=a.fromElement:
"mouseout"==this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey}}
Q.prototype.preventDefault=function(){this.a&&(this.a.returnValue=!1,this.a.preventDefault&&this.a.preventDefault())};
Q.prototype.stopPropagation=function(){this.a&&(this.a.cancelBubble=!0,this.a.stopPropagation&&this.a.stopPropagation())};
Q.prototype.stopImmediatePropagation=var E=m("ytEventsEventsListeners")||{};v("ytEventsEventsListeners",E);var Ka=m("ytEventsEventsCounter")||{count:0};v("ytEventsEventsCounter",Ka);
var Na=;
;;var Qa={};;var R={},S=[],O=new M,Sa={};;function Wa(a){this.b=a||{};this.f={};this.c=this.a=!1;a=document.getElementById("www-widgetapi-script");if(this.a=!!("https:"==document.location.protocol||a&&0==a.src.indexOf("https:"))){a=[this.b,window.YTConfig||{},this.f];for(var b=0;b<a.length;b++)a[b].host&&(a[b].host=a[b].host.replace("http://","https://"))}}
var U=null;Wa.prototype.g=h=W.prototype;h.setSize=
h.J=
h.H=
h.addEventListener=
h.destroy=
h.u=
h.o=
h.F=
h.B=function(a){a.id=this.g;a.channel="widget";a=xa(a);var b=this.b;var c=Ba(this.a.src);b=0==c.indexOf("https:")?[c]:b.a?[c.replace("http:","https:")]:b.c?[c]:[c,c.replace("http:","https:")];if(!this.a.contentWindow)throw Error("The YouTube player is not attached to the DOM.");for(c=0;c<b.length;c++)try{this.a.contentWindow.postMessage(a,b[c])}catch(d){if(d.name&&"SyntaxError"==d.name)Ha(d,"WARNING");else throw d;}};;w(Y,W);h=Y.prototype;h.v=function(){return"/embed/"+V(this.b,"videoId")};
h.u=
h.H=
h.getVideoEmbedCode=
h.getOptions=
h.getOption=w(Z,W);Z.prototype.v=
Z.prototype.u=
Z.prototype.o=v("YT.PlayerState.UNSTARTED",-1);v("YT.PlayerState.ENDED",0);v("YT.PlayerState.PLAYING",1);v("YT.PlayerState.PAUSED",2);v("YT.PlayerState.BUFFERING",3);v("YT.PlayerState.CUED",5);v("YT.get",;
v("YT.scan",Ta);v("YT.subscribe",;
v("YT.unsubscribe",;
v("YT.Player",Y);v("YT.Thumbnail",Z);W.prototype.destroy=W.prototype.destroy;W.prototype.setSize=W.prototype.setSize;W.prototype.getIframe=W.prototype.J;W.prototype.addEventListener=W.prototype.addEventListener;Y.prototype.getVideoEmbedCode=Y.prototype.getVideoEmbedCode;Y.prototype.getOptions=Y.prototype.getOptions;Y.prototype.getOption=Y.prototype.getOption;S.push(;
S.push(;
"undefined"!=typeof YTConfig&&YTConfig.parsetags&&"onload"!=YTConfig.parsetags||Ta();var hb=m("onYTReady");hb&&hb();var ib=m("onYouTubeIframeAPIReady");ib&&ib();var jb=m("onYouTubePlayerAPIReady");jb&&jb();}).call(this);
