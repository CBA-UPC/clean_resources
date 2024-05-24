(function (w,d){
if(void 0===w.ABN){
function a(n,p){
if(this instanceof a&&!a.zones[n]){
if(!(b=d.getElementById(n))||!p.id)return null
var z=this
z.name=n
z.id=p.id
a.merge(z,{div:b,param:p,state:0})
a.zones[n]=z
if(p.domain)z.domain="https://z.cdn."+p.domain+"/"
p.noload||z.load()
}
return a.zones[n]
}
a.prototype={
load: function(){
var z=this,dc="CSS1Compat"==d.compatMode?d.documentElement:d.body
z.s&&z.write("")
a.run((z.domain?z.domain:a.domain)+"load?z="+z.param.id+"&div="+z.name+"&cw="+dc.clientWidth+"&ch="+dc.clientHeight+a.q,
z.s=1
},
write:
append:}
a.ce = a.getKey = function(){var c=Math.abs(Date.now()-Date.UTC(2e3));return String.fromCharCode(97+Math.floor((c/1e10)%10))+(c/1e7).toFixed(0)}
a.makeid = function(l) {var t="",p="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(var i=0;i<l;i++){t+=p.charAt(Math.floor(Math.random()*p.length))}return t;}
a.checkVar = function(e,d){return (null==e||typeof e==='undefined'||e==="")?d:e}
a.rebuildZone = function(zid, s= ''){var p, zn;
  for(var z of Object.values(a.zones)){if(zid == z.id){p=z.param;zn = z.name;delete a.zones[zn];break;}}
  function clearInner(n){while (n.hasChildNodes()){clear(n.firstChild)}}
  function clear(n){while(n.hasChildNodes()){clear(n.firstChild)}n.parentNode.removeChild(n)}
  d.querySelectorAll((s!=='')?s:'#zone_'+zid).forEach(;
  new a(zn,p)}

a.isMobile = function(z) {
  if(z instanceof Object && z.os){return [6,12,13,14,16,17,18,19,20,21,22].includes(z.os)};
  var c = false;
  ((navigator.userAgent||navigator.vendor||window.opera);
  return c;
}

a.getDMN =a.replaceAll = a.getOffset = function(el) {var x=0,y=0;while(el&&!isNaN(el.offsetLeft)&&!isNaN(el.offsetTop)){x+=el.offsetLeft-el.scrollLeft;y+=el.offsetTop-el.scrollTop;el=el.offsetParent;}return {top:y,left:x}}
a.imageExists = function(url) {var http = new XMLHttpRequest();http.open('HEAD', url, false);http.send();return http.status != 404;}

a.getMacros = function(t, m, divName = '', divCloneName = '') {
  var div = new RegExp( /%%DIV_NAME%%/ );
  t = ( div.test( t ) ) ? replaceAll(t, div , divName ) : t;
  div = new RegExp( /%%DIV_CLONE_NAME%%/ );
  t = ( div.test( t ) ) ? replaceAll(t, div , divCloneName ) : t;
  if (m instanceof Object && m.path) {
    var dmn = new RegExp( /%%DOMAIN%%/ );
    t = ( dmn.test( t ) ) ? t.replace( dmn , this.getDMN(m.path) ) : t;
  }
  return t;
}

a.parseWidth = function(w,width) {
  if(typeof w =='string' && w.charAt(0)=='!'){
    w = w.substr(1);
    var arr = Array();
    var i = 0;
    var sw=0;
    pos = w.search(',');
    while(pos!=-1 ){
      arr[i] = Array();
      arr[i][0] = parseInt(w.substr(0,pos));
      w = w.substr(pos+1);
      pos = w.search(',');
      arr[i][1] = parseInt(w.substr(0,pos));
      w = w.substr(pos+1);
      pos = w.search('-');
      if(pos!=-1){
        arr[i][2] = parseInt(w.substr(0,pos));
        w = w.substr(pos+1);
      }else{
        arr[i][2] = parseInt(w);
      }
      pos = w.search(',');
      i++;
    }
    width = parseInt(width);
    for(i=0;i<arr.length;i++){
      if(arr[i][0] < width && width <= arr[i][1]){
        return arr[i][2]
      }
    }
    return arr[arr.length-1][2];
  }else{
    return parseInt(w);
  }
}

a.getBlankImgSrc=a.bitToArray = function(val) {var pows = new Array, pow = new Number;for(i = 0; i<10; i++){pow = 1 << i;if(pow & val){pows[i] = true}}return pows;}

a.checkDeep = function(sessionName, zone) {
  if (!(zone instanceof Object && zone.deepBits)) {
    return true
  }

  if(typeof(sessionStorage) == 'undefined' || typeof zone.deepBits == 'undefined'){
    return true
  }else{
    var sdp = this.bitToArray(zone.deepBits), cdp;
    if (sessionStorage.getItem(sessionName)) {
      cdp = parseInt(sessionStorage.getItem(sessionName));
      cdp += 1;
    } else {
      cdp = 1;
    }
    sessionStorage.setItem(sessionName, cdp);
    if (cdp >= 7 && zone.deepBits&(1<<6) >> 0) {
      return true
    }
    return sdp[cdp-1] ? true:false;
  }
}

a.setSession = function(sessionName, sessionValue){
  if(typeof(sessionStorage) == 'undefined' || typeof(localStorage) == 'undefined' ){
    return true
  }else{
    sessionStorage.setItem(sessionName, sessionValue);
    localStorage.setItem(sessionName, sessionValue);
  }
}

a.getSession = function(sessionName){
  if(typeof(sessionStorage) == 'undefined' || typeof(localStorage) == 'undefined' ){
    return true
  }else{
    var s = sessionStorage.getItem(sessionName);
    var l = localStorage.getItem(sessionName);
    return null == l ? s : l;
  }
}

a.viewabilityIAB = function (media) {
  if (media.node !== undefined) {
    let threshold = 0.5,
    delay = 1000,
    timer = null;

    if (media.node.offsetWidth * media.node.offsetHeight >= 242000) {
      threshold = 0.3;
      delay = 10;
    }

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (typeof media.viewability !== 'undefined' && entry.isIntersecting) {
            clearTimeout(timer)
            timer = setTimeout(()=>{
              (new Image()).src = media.viewability;
              media.viewability = null;
              observer.unobserve(media.node);
            }, delay)
        }else{
          clearTimeout(timer)
        }
      })
    }, {
      threshold
    });

    observer.observe(media.node)
  }
}

a.countView = function (m) {
  if(m.view){(new Image()).src=m.view;m.view=null}
  a.countViewability(m)
}

a.countViewability = function(m) {
  if (m.node !== undefined) {
    if (m.type === undefined) {m.type === 'banner'}
    switch (m.type) {
      case 'branding':
      case 'banner':
        if (typeof m.viewability !== 'undefined') {
          a.viewabilityIAB(m);
        }
        break;
    }
  }
}



a.merge=function(){var r,n,e=arguments[0]||{};for(i=1;i<arguments.length;i++)if(null!=(r=arguments[i]))for(n in r)r.hasOwnProperty(n)&&void 0!==r[n]&&(e[n]=r[n]);return e};
var z=["SCRIPT","onreadystatechange","WEBGL","undefined"]
a.run=function(e,f){
var st=z[0],s=d.createElement(st),t=d.getElementsByTagName(st)[0]
s.async=true
s.src=e
if(f)s.onload=s[z[1]]=function(evt){st=s.readyState;if(!st||st=="loaded"||st=="complete"){s.onload=s[z[1]]=null;f(s);}}
t.parentNode.insertBefore(s,t)
}
function f(e,n){n=n||200;return(pos=e.indexOf("://"))>=0&&(e=e.substr(pos+3)),e.length>n&&(e=e.substr(0,n)),encodeURIComponent(e)}
a.q=""
a.zones={}
a.protocol=w.location.protocol=="https:"?"https:":"http:"
a.h=w.ABNSh||"dsmstats.com"
a.domain="https://z.cdn."+a.h+"/"
w.ABNSl=w.ABNSl||[]
w.ABNSl.push=function(e){new a(e[0],e[1])}
w.ABN=a
var vc="0",t=new Date,ws=w.screen,mr=Math.round,hc=1,wn=w.navigator;
try{hc=wn.hardwareConcurrency}catch(p){hc=0}
try{var ca=d.createElement("canvas"),gl=ca.getContext("experimental-"+z[2].toLowerCase());
vc=gl.getParameter(gl.getExtension(z[2]+"_debug_renderer_info")["UNMASKED_RENDERER_"+z[2]])}catch(p){}
var p={
sr:ws.width+"x"+ws.height,
df:d.hasFocus&&d.hasFocus()+0,
tz:-t.getTimezoneOffset(),
bh:w.history.length,
tl:(pr=w.performance)&&void 0!==pr.now&&mr(pr.now()),
pl:wn.plugins&&wn.plugins.length,
mi:wn.mimeTypes&&wn.mimeTypes.length,
me:wn.deviceMemory,
hc:hc,
n:Date.now(),
url:f(w.location.href),vc:f(vc),ref:f(d.referrer),ti:f(d.title,100)};
for(k in p)if((v=p[k])&&v!=z[3]){a.q+="&"+k+"="+v}
for(i=0,v=0;i<a.q.length;i++){v=(((v<<5)-v)+a.q.charCodeAt(i))|0}
a.q+="&zyx="+(v>>>0)
while(w.ABNSl.length){e=w.ABNSl.pop();new a(e[0],e[1])}
}})(window,document)
