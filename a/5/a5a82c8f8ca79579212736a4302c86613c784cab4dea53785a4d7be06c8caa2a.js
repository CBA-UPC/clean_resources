(function(){var f;
ion w(){this.h.call(this)}w.prototype.h=function(){};function x(a,b){for(var c=[],d=0,e=a.length;d<e;d++)c.push(b.apply(void 0,[a[d],d,a]))}function y(a,b,c){var d=0;null!=c||(c=null);for(var e=0,g=a.length;e<g;e++)b.apply(c,[a[e],e,a])&&d++;return d}function z(a,b,c){var d=-1;null!=c||(c=null);for(var e=0,g=a.length;e<g;e++)if(b.apply(c,[a[e],e,a])){d=a[e];break}return d};function A(){this.h.call(this)}v(A,w);A.prototype.h=function(){this.a={};B(this)};function B(a){a.a={};for(var b=[],c=document.cookie.split(";"),d=0,e=c.length;d<e;d++)try{b=c[d].replace(/^\s+|\s+$/g,"").split("="),a.a[b[0]]=decodeURIComponent(b[1])}catch(g){}}A.prototype.get=function(a,b){var c=void 0!==b?b:"";null!=a&&(null!=this.a[a]||B(this),c=void 0!==this.a[a]?this.a[a]:c);return c};function C(a){var b=document.createElement("script");if(null!=a&&l(a))if(Object.keys)Object.keys(a).forEach(;else for(var c in a)a.hasOwnProperty(c)&&b.setAttribute(c,a[c]);return b}
function D(){if(document.getElementsByClassName)return document.getElementsByClassName("gpt-frame");if(document.querySelectorAll)return document.querySelectorAll("div.gpt-frame");for(var a=document.getElementsByTagName("div"),b=[],c=0,d=a.length;c<d;c++)E(a[c])&&b.push(a[c]);return b}function F(){var a=!0;null!=a||(a=!0);a=C({src:"//www.googletagservices.com/tag/js/gpt.js",async:a});document.getElementsByTagName("head")[0].appendChild(a)}
function E(a){if("classList"in a)return a.classList.contains("gpt-frame");a="classList"in a?a.classList:(a.getAttribute("class")||a.className).split(" ");for(var b=0,c=a.length;b<c;b++)if("gpt-frame"===a[b])return!0;return!1}function G(a){if("nextElementSibling"in a)return a.nextElementSibling;for(;a=a.nextSibling;)if(1===a.nodeType)return a};function H(a,b,c){a&&(a.addEventListener&&"function"==h(a.addEventListener)?a.addEventListener(b,c,!1):a.attachEvent&&a.attachEvent("on"+b,c))};function I(a,b){return(a.currentStyle||document.defaultView.getComputedStyle(a,""))[b]};=J.prototype;
f.h=function(a){this.a=a;this.f=this.a.getElementsByTagName("div")[0];this.g=document.getElementById("main");this.offsetTop=30;this.top=0;this.i=48;this.I=0;this.H=!1;this.J=navigator.userAgent;if(this.R=-1!=this.J.search(/Trident/)||-1!=this.J.search(/MSIE/)||-1!=this.J.search(/(Windows|Macintosh)(?!.*Chrome).+Safari/i)){this.j=document.getElementById("subAInner");this.l=document.createElement("div");a=this.f;var b=a.parentNode;b.parentNode.insertBefore(this.l,b);a=a.childNodes[0].getBoundingClientRect().left;
this.S=0;this.S=this.j?a-this.j.getBoundingClientRect().left:a-this.l.offsetLeft;H(window,"scroll",r(this.B,this));H(window,"resize",r(this.B,this));this.B()}else H(window,"scroll",r(this.v,this)),H(window,"resize",r(this.v,this)),this.v()};
f.v=function(){if(this.H){var a=+new Date;null!=this.T&&clearTimeout(this.T);if(250>a-this.I){this.T=setTimeout(r(this.v,this),250-(a-this.I));return}this.I=a}var b=this.a.getBoundingClientRect();if(b.top<=this.offsetTop){this.top=this.offsetTop-b.top;var a=this.f.getBoundingClientRect(),c=null!=a.height?a.height:this.f.clientHeight;Math.round(this.g.getBoundingClientRect().bottom)<=c+this.offsetTop?this.top=this.g.getBoundingClientRect().bottom-b.top-c:this.H&&(b=0,0>a.bottom?(b=this.top-c,this.a.style.paddingTop=
""+b+"px"):0>window.innerHeight-a.top&&(b=this.top+window.innerHeight,this.a.style.paddingTop=""+b+"px"))}else this.top=0;this.H?(null!=this.c&&clearTimeout(this.c),this.c=setTimeout(r(this.M,this),8)):this.a.style.paddingTop=""+this.top+"px"};
f.B=function(){var a=this.l.getBoundingClientRect().top,b=this.f.getBoundingClientRect(),b=null!=b.height?b.height:this.f.clientHeight;this.a.style.paddingTop="0px";this.a.style.paddingLeft="0px";this.a.style.top="0px";this.a.style.left="auto";this.a.style.position="relative";if(Math.round(this.g.getBoundingClientRect().bottom)<=b+this.offsetTop)this.top=this.g.getBoundingClientRect().bottom-a-b,this.a.style.paddingTop=this.top+"px",this.a.style.position="";else if(a<this.offsetTop){var a=Math.max.apply(null,
[document.body.scrollLeft,document.documentElement.scrollLeft]),c;this.j?c=this.j.getBoundingClientRect().left:c=this.l.offsetLeft-a;this.a.style.paddingLeft=this.S+"px";this.a.style.top=this.offsetTop+"px";this.a.style.left=c+"px";this.a.style.position="fixed"}};
f.M=function(){null!=this.c&&clearTimeout(this.c);var a=parseInt(I(this.a,"paddingTop"),10);a!==this.top&&(a<this.top?a=a+this.i<this.top?a+this.i:this.top:a>this.top&&(a-this.i>this.top?a-=this.i:a=this.top),this.a.style.paddingTop=""+a+"px",this.c=setTimeout(r(this.M,this),8))};f.update==K.prototype;f.s=!1;f.w=!1;f.V=!1;f.U=!1;f.D=-1;f.o=!0;f.A=window.navigator.userAgent;
f.h=function(){this.a=new A;this.j=[];this.c={};this.g={};this.f=[];this.cue=[];if(window.self!=window.top){var a=L(window.document.referrer);/ameba\.jp/.test(a.hostname)||/ameblo\.jp/.test(a.hostname)||(this.o=!1)}a=!1;-1!==z(document.getElementsByTagName("script"),r(function(a){if(a&&a.getAttribute&&/gpt/.test(a.getAttribute("src")))return"//www.googletagservices.com/tag/js/gpt.js"},this))&&(a=!0);a||F();a=document.getElementById("dfpSdk");if(this.w=!!a&&"true"===a.getAttribute("data-use-aps")){if(window.apstag)return;
window.apstag={init:function(){window.apstag._Q.push(["i",arguments])},fetchBids:setDisplayBids:function(){},_Q:[]};a=document.createElement("script");a.async=!0;a.src="//c.amazon-adsystem.com/aax2/apstag.js";var b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(a,b);window.apstag.init({adServer:"googletag",pubID:"3499"})}this.o&&(M(this),N(this,this.A),O(r(this.W,this)),H(window,"load",r(this.aa,this)),H(window,"DOMContentLoaded",
r(this.N,this)),null!=window.Amb.dfp&&"array"==h(window.Amb.dfp)&&(this.cue=window.Amb.dfp),O(r(function(){x(this.cue,r(this.push,this))},this)))};function P(){var a;null!=window.googletag?a=window.googletag:(a={},window.googletag=a);return a}unction O(a){var b=P();b.cmd=b.cmd||[];b.cmd.push(a)}
function M(a){var b=a.A;/CaWebApp/.test(b)||/24log-for-android/.test(b)||/24log-for-ios/.test(b)||/BK2_ANDROID/.test(b)||/BK2_IOS/.test(b)||/CA_AMONOGRAPHER/.test(b)||/CA_PETPIC/.test(b)||/GIRLS\sUP/.test(b)||/GIRLSTALK_APP;1\.0\.9;j/.test(b)||/GIRLSTALK_APP;1\.1\.3;j/.test(b)||/GIRLS_UP_HONBAM/.test(b)||/GTBLOG_APP;1\.0\.1;jp;/.test(b)||/GTBLOG_APP;1\.0\.2;ja;/.test(b)||/GTVOICE_APP;1\.0\.0;jp;/.test(b)||/Grumayor/.test(b)||/HIHOH/.test(b)||/Palette/.test(b)||/Pashaoku/.test(b)||/ameba-oogiri/.test(b)||
/babypic/.test(b)||/ca_imonographer/.test(b)||/ca_tellme/.test(b)||/ca_wakkadiary/.test(b)||/eden/.test(b)||/jp\.ameba\.gang/.test(b)||/jp\.co\.cyberagent\.bf/.test(b)||/jp\.co\.cyberagent\.gan/.test(b)||/jp\.co\.cyberagent\.gf/.test(b)||/jp\.co\.cyberagent\.tk/.test(b)||/jpcandy/.test(b)||/jpgirlspicplus/.test(b)||/jpsimplog/.test(b)||/kaito-mommy/.test(b)||/kiiteyo/.test(b)||/maifuri/.test(b)||/makeme/.test(b)||/neganyanko/.test(b)||/nowsokuhou/.test(b)||/pecolly/.test(b)||/syukatu/.test(b)||/tian\.kongnokurisutaria/.test(b)?
O(r(function(){Q().setTargeting("amebaApp","true")},a)):O(r(a))}function N(a,b){var c=!1;-1!=b.search(/Android 4.4/)&&-1!=b.search(/CaWebApp\/1\.0\(jpameblo;/)&&(c=!0);O(r(function(){Q().setTargeting("android44",String(c))},a));return c}
f.W=function(){Q().collapseEmptyDivs();var a=this.a.get("aid"),b=this.a.get("uid"),c=this.a.get("sid"),d=b||a||null,e=this.a.get("g"),g=this.a.get("a"),m=this.a.get("RS_UID"),p=this.a.get("P");Q().setTargeting("ameba_id",this.F());"optout"!==d&&(d&&Q().setPublisherProvidedId(d),e&&Q().setTargeting("g",e),g&&Q().setTargeting("a",g),a&&Q().setTargeting("aid",a),b&&Q().setTargeting("deca_user_id",b),m&&Q().setTargeting("rsuid",m),p&&Q().setTargeting("lance",p),c&&(c=c.split(",").join("|"),Q().setTargeting("sid",
c)));this.w&&(Q().disableInitialLoad(),P().enableServices());this.s&&Q().enableSingleRequest();Q().addEventListener("slotRenderEnded",r(function(a){var b=a.slot.getAdUnitPath(),c=document.getElementsByName(b)[0];if(c||"function"!=h(document.querySelector))for(var d=D(),e=0,g=d.length;e<g;e++){if(d[e].getAttribute("name")===b){c=d[e];break}}else c=document.querySelector('div.gpt-frame[name="'+b+'"]');a.isEmpty?(void 0)(c):c&&this.L(c)},this))};
f.N=function(){var a=D(),b=/_PB/;a&&(this.D=y(a,r(function(a){var d=!0;if(null==a||b.test(a.getAttribute("name"))||a.getAttribute("data-dummy"))d=!1;return d},this),this));R(this)};function R(a){a.s&&!1===a.U&&a.D&&a.f.length===a.D&&(a.U=!0,Q().setTargeting("bucket",Math.floor(10*Math.random())+""),P().enableServices(),x(a.f,r(function(a){a&&O(r(this,a))},a)))}
f.F=function(){var a=this.F.a;null==a&&(a=/(dev\.|stg\.|s\.|stg\.s\.|dev\.s\.)?ameblo\.jp/.test(location.host)?location.pathname.split("/")[1]:"",this.F.a=a);return a};f.L=function(){};f.aa=function(){var a,b=D();if(b)for(var c=0,d=b.length;c<d;c++)a=b[c],a.ha=!1,"loaded"==a.getAttribute("data-load")?!1===this.s&&(window.location.host.match(/ameblo\.jp$/)||window.location.host.match(/ssecret\.ameba\.jp$/))&&this.C(a):O(r(this.u,this,a));this.N()};f.C=
f.u=function(a){if(null!=P().defineSlot){var b=a.getAttribute("name");if(null==this.c[b]){var c=a.getAttribute("name");N(this,this.A)&&(/TopicsPanel/.test(c)||/Articlebottom/.test(c)||/OfficialBlogText/.test(c)||/OfficialBlogCustom/.test(c)||/TabletPanel_android.+/.test(c))&&(this.o=!1);if(/spotlight/.test(c)||/bys/.test(c)||/AmebaNews/.test(c)){var d;/spotlight/.test(c)?d="spotlighturl":/bys/.test(c)?d="bysurl":/AmebaNews/.test(c)&&(d="amebanewsurl");var e=window.location.pathname.split("/")[2];
O(r(function(){Q().setTargeting(d,e)},this))}else if(/AmbNavi_300x250/.test(b)){var g=this,m;document.getElementById("barPrBlog")?m=document.getElementById("barPrBlog"):document.getElementById("barPickup")&&(m=document.getElementById("barPickup"));m.addEventListener("mouseover",function(){return function V(){S(g,a);m.removeEventListener("mouseover",V,!1)}}(),!1);return}if(/SmartPanel/.test(c))if((window.location.host.match(/ameblo\.jp$/)||window.location.host.match(/ameba\.jp$/))&&window.location.href.match(/entry/)&&
/SmartPanel/.test(c))var p=0,t=this,u=setInterval(function(){3<=p&&(clearInterval(u),S(t,a));document.getElementById("ad-BillboardPanel-dayo")?(clearInterval(u),t.o=!1,S(t,a)):p++},700);else S(this,a);else S(this,a)}}else O(r(this.u,this,a))};
function S(a,b){if(a.o){var c;b.style.textAlign="center";b.style.margin="0 auto";c=T(a,b);var d=b.getAttribute("name");if(!1!==c){var e=b.id,g=b.getAttribute("celebKey"),m=b.getAttribute("celebValue"),e=P().defineSlot(d,c,e);a.c[d]=e;null!==e&&(e.addService(Q()),/'FirstPanel'/.test(d)&&e.setCollapseEmptyDiv(!0,!0),!1===a.V||!1===a.s)&&(a.V=!0,U(e,g,m),U(e,"Key1",a.m("ac_segs")),U(e,"Key3",a.G()),U(e,"Key2",a.m("A_C1")+","+a.m("A_C2")),U(e,"rssegs",a.m("rs_segs")),U(e,"search",W(a)))}a.s?(!1!==c?a.f.push(b.id):
a.f.push(!1),R(a)):("complete"==document.readyState&&Q().enableAsyncRendering(),Q().setTargeting("bucket",Math.floor(10*Math.random())+""),P().enableServices(),P().display(b.id),a.w&&a.refresh(d));"dataset"in b?b.dataset.load="loaded":b.setAttribute("data-load","loaded")}}f.da=function(){if(this.o){var a=document.scripts||document.getElementsByTagName("script");a&&(a=a[a.length-1].parentNode)&&"gpt-frame"===a.className&&O(r(this.u,this,a))}};
f.push=function(a){null!=a&&(a=k(a)?document.getElementById(a):a,null!=a&&O(r(this.u,this,a)))};function T(a,b){var c,d=b.getAttribute("name");c=z(a.j,r(a),a);/sp_ameba_officialportal_tv_rec/.test(d)&&360>window.innerWidth?c=[300,250]:null!=c&&null!=c.size?c=c.size:c=[1,1];return c}
function U(a,b,c){if(k(b)&&k(c)){var d=[],e=window.encodeURIComponent(","),g=[];b=""+b;var m,g=a.getTargetingMap(),p=0,t=0,u="";for(m in g)if(g.hasOwnProperty(m))for(p=0,t=g[m].length;p<t;p++)u+=m+"="+window.encodeURIComponent(g[m][p])+"&";m=1E3-window.encodeURIComponent(u+b+"=").length;if(window.encodeURIComponent(c).length>=m){g=c.split(",");c=0;for(p=g.length;c<p;c++)if(""!==g[c]&&(d.push(g[c]),window.encodeURIComponent(d.join(e)).length>=m)){d.pop();break}c=d.join(",")}c=window.encodeURIComponent(c);
0<c.length&&c!==e&&a.setTargeting(b,c)}}f.m=function(a){var b=this.m[a];if(void 0===b){if(b=this.a.get(a,"")){for(var c=[],d=window.decodeURIComponent(b).split(/[\|_]/),e=0,b=d.length;e<b;e++)-1===z(c,r(this))&&c.push(d[e]);b=c.join(",");b=b.replace(/\./g,"_");b=b.replace(/Q0v_/g,"");b=b.replace(/Q11_/g,"");b=b.replace(/QjF_/g,"")}this.m[a]=b}return b};
f.G=function(){var a=this.G.a;if(void 0===a){var b=document.getElementsByName("ameba-ad-params");b&&b[0]?a=b[0].getAttribute("content").split("|").join(","):a="";this.G.a=a}return a};
function W(a){function b(a,b){var c="";(c=z(a.split("?")[1].split("&"),r(function(a){a=a.split("=");return 2===a.length&&a[0]===b},this)).split("=")[1]||"")&&(c=c.split(g).join(",")||"");return c}var c="",d=L(document.referrer),e=d.hostname,g=/\s/;try{if("search.yahoo.co.jp"===e)c=b.call(a,d.search,"p");else if("www.bing.com"===e||"www.google.co.jp"===e)c=b.call(a,d.search,"q")}catch(m){}return c}f.fa=function(a){a=k(a)?a:location.href;O(};
f.refresh=function(a){if(void 0!==a){var b=null;a=new RegExp(a);for(var c in this.c)if(this.c.hasOwnProperty(c)&&a.test(c)){b=this.c[c];Q()&&b&&Q().refresh([b]);c=void 0;if(a=D())for(var b=0,d=a.length;b<d;b++)c=a[b],c.ha=!1,"loaded"==c.getAttribute("data-load")&&(window.location.host.match(/ameblo\.jp$/)||window.location.host.match(/ssecret\.ameba\.jp$/))&&this.C(c);break}}else Q().refresh()};f.ga=function(a,b){this.g[a]=b;O(r(this))};
f.Z=function(a){var b;null!=this.g[a]&&(b=this.g[a]);return b};f.$=f.Y=f.ea=function(a){if(null!=a){var b,c=a.parentNode,d=a.parentNode.parentNode.getAttribute("name");null!=d&&(b=z(this.j,r(this)),null!=b&&null!=b.O&&(a.setAttribute("width",b.O[0]),a.setAttribute("height",b.O[1]),a.style.display="inline",c.style.display="block"))}};
f.ba=function(a,b){if(null!=a&&E(a)){var c=G(a);if(null!=c&&a.getAttribute("name")+"_PB"==c.getAttribute("name")){if(null!=b?b:1)c.style.display="block";O(r(this.u,this,c));O(r(function(a){a.childNodes[0].childNodes[0].style.display="inline"},this,c))}}};
f.ca=function(a){if(window.bddClicklog&&a){a=a.split(",");for(var b=0;b<a.length;b++){var c=a[b].split("=");2===c.length&&("unitname"==c[0]?c[1]&&window.bddClicklog.push(["setUnitName",c[1]]):c[0]&&c[1]&&window.bddClicklog.push(["setClickAfterValue",c[0],c[1]]))}window.bddClicklog.push(["doTargeting"])}};
function L(a){try{if(a&&window.URL)return new URL(a)}catch(c){}var b={hostname:"",search:""};a&&(b.hostname=a.match(/\/\/.*?\//)[0].replace(/\//g,"")||"",b.search="?"+a.split("?")[1]||"");return b}
f.X=function(a){if(this.w){var b=this,c=this.c;O(function(){for(var b=0,e=a.length,g;b<e;b++)g=a[b]||{},c[g.slotName]=P().defineSlot(g.slotName,g.sizes,g.slotID).addService(Q())});window.apstag.fetchBids({slots:a,timeout:2E3},function(){O(function(){window.apstag.setDisplayBids();for(var c=0,e=a.length,g;c<e;c++)g=a[c]||{},b.refresh(g.slotName)})})}};f.display=function(a){O(};K.prototype.setFrameHere=K.prototype.da;K.prototype.setFrame=K.prototype.u;
K.prototype.refresh=K.prototype.refresh;K.prototype.push=K.prototype.push;K.prototype.fetchBidsAPS=K.prototype.X;K.prototype.display=K.prototype.display;K.prototype.setPageUrl=K.prototype.fa;K.prototype.setTargetingParam=K.prototype.ga;K.prototype.getTargetingParam=K.prototype.Z;K.prototype.getTargetingParams=K.prototype.$;K.prototype.getIsTargetTop=K.prototype.Y;K.prototype.pathBack=K.prototype.ba;K.prototype.setFrameSize=K.prototype.ea;K.prototype.pushClickLog=K.prototype.ca;
K.prototype.constructor=K;(X,K);f=X.prototype;f.s=!1;f.P=!0;
f.h=function(){if(-1!=navigator.userAgent.indexOf("iPad")||-1!=navigator.userAgent.indexOf("iPhone")||-1!=navigator.userAgent.indexOf("Android"))this.P=!1;this.constructor.ia.h.call(this);this.i={};this.l=[[300,250],[300,290],[300,500]];/imagelist/.test(location.pathname)||/image\-/.test(location.pathname)||this.l.push([300,600]);this.j=[{b:/FirstPanel/,size:[[728,90]]},{b:/BTFSidePanel/,size:[[300,250],[300,500],[300,600]]},{b:/PremiumPanel/,size:this.l},{b:/RegularPanel/,size:[[468,60]]},{b:/SquarePanel/,
size:[[120,240]]},{b:/TabletPanel/,size:[[728,90]]},{b:/EntryBottom/,size:[[300,250]]},{b:/InArticlePanel/,size:[[336,280],[300,250]]},{b:/CTFSidepanel/,size:[[300,600]]},{b:/FooterJack/,size:[[1,1]]},{b:/BillboardPanel/,size:[[1,1],[970,250],[728,90]]},{b:/AmbNavi_300x250/,size:[[300,250]]},{b:/bigfooterpanel/,size:[[300,250]]},{b:/pc_ameba/,size:[[300,250],[300,600]]}]};
f.C=function(a){if(1===a.nodeType){"none"==I(a,"display")&&!1===E(a)&&(a.style.display="block!important");"hidden"==I(a,"visibility")&&(a.style.visibility="visible!important");var b=I(a,"top");0>parseInt(b,10)&&(a.style.top="auto!important");b=I(a,"left");0>parseInt(b,10)&&(a.style.left="auto!important");a.parentNode&&1===a.parentNode.nodeType&&this.C(a.parentElement)}};
f.L=function(a){var b=a.getAttribute("name");/PremiumPanel/.test(b)?null!=this.i.K&&this.i.K.update():(/BTFSidePanel/.test(b)||-1==this.A.search(/MSIE 8.0/)&&/BTFSquarePanel/.test(b))&&!(/blog.ameba.jp/.test(location.hostname)||/(stg\.)spotlight-media\.jp/.test(location.hostname)||/(stg\.)by-s\.me/.test(location.hostname))&&a&&this.P&&(this.i.K=new J(a));/BillboardPanel_Amebanews/.test(b)&&(a.style.marginTop="10px")};window.Amb=window.Amb||{};window.Amb.dfp=new X;})();

