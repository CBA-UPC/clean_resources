!{1:[{}],2:[{}],3:[{}],4:[{}],5:[{}],6:[{}],7:[{}],8:[{}],9:[{}],10:[{}],11:[{}],12:[{}],13:[{}],14:[{}],15:[{}],16:[{}],17:[{}],18:[{}],19:[{}],20:[{}],21:[{}],22:[{}],23:[{}],24:[{}],25:[{}],26:[{}],27:[{}],28:[{}],29:[{}],30:[{}],31:[{}],32:[{}],33:[{}],34:[function(t,n,e){nction o(){return Z}f=t(17),d=t(38),l=t(9),h=t(35),p=t("loader"),m=t("ee"),v=m.get("mutation"),g=m.get("promise"),x=m.get("history"),y=m.get("events"),w=m.get("timer"),b=m.get("fetch"),k=m.get("jsonp"),j=m.get("xhr"),T=m.get("tracer"),E=t(43),S=t(15).nt,N=t(39),R=t(42),C=t(16).metrics,A=t(32),U=["click","submit","keypress","keydown","keyup","change"],L=999,_="fn-start",M="fn-end",I="cb-start",F="api-ixn-",q="remaining",B="interaction",P="spaNode",O="jsonpNode",H="fetch-start",z="fetch-done",$="fetch-body-",D="jsonp-end",X=NREUM.o,V=X.REQ,K=X.ST,W=p.origin,G=W,J=null,Q={},Y=L,Z=null,tt=null,nt=null,et=null,rt=!1,it=0,ot=0;n.exports=m.on("feat-spa",function(){ew A("initialPageLoad",0,G,J,s),et.save=!0,Z=et.root,et[q]++,f.on(m,_,t),f.on(g,I,t);var l={getCurrentNode:o,setCurrentNode:a};f("spa-register",,f.on(m,M,n),f.on(g,"cb-end",n),f.on(y,_,,f.on(w,"setTimeout-end",,f.on(w,"clearTimeout-start",,f.on(w,_,,f.on(j,_,,f.on(j,"new-xhr",,f.on(j,"send-xhr-start",,f.on(m,"xhr-resolved",,f.on(k,"new-jsonp",,f.on(k,"cb-start",,f.on(k,"jsonp-error",,f.on(k,D,,f.on(b,H,,f.on(b,$+"start",,f.on(b,$+"end",,f.on(b,z,,f.on(x,"newURL",,k.on("dom-start",,f.on(v,_,function(){a(tt)}),f.on(g,"resolve-start",i),f.on(g,"executor-err",i),f.on(g,"propagate",r),f.on(g,I,,f(F+"get",,f(F+"actionText",,f(F+"setName",,f(F+"setAttribute",,f(F+"end",,f(F+"ignore",function(){this.ixn.ignored=!0}),f(F+"save",,f(F+"tracer",,f.on(T,_,e),f.on(T,"no-"+_,e),f(F+"getContext",,f(F+"onEnd",,f("api-routeName",});var at=null;l.on("events",,m.on("errorAgg",,m.on("interaction",c)},{}],35:[{}],36:[{}],37:[{}],38:[{}],39:[{}],40:[{}],41:[function(t,n,e){function r(){return s.exists&&performance.now?Math.round(performance.now()):(o=Math.max((new Date).getTime(),o))-a}ar o=(new Date).getTime(),a=o,s=t(45);n.exports=r,n.exports.offset=a,n.exports.getLastTimestamp=i},{}],42:[function(t,n,e){function r(){function t(){return n?15&n[e++]:16*Math.random()|0}var n=null,e=0,r=window.crypto||window.msCrypto;r&&r.getRandomValues&&(n=r.getRandomValues(new Uint8Array(31)));for(var i,o="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx",a="",s=0;s<o.length;s++)i=o[s],"x"===i?a+=t().toString(16):"y"===i?(i=3&t()|8,a+=i.toString(16)):a+=i;return a}function i(){return a(16)}unction a(t){ar e=null,r=0,i=window.crypto||window.msCrypto;i&&i.getRandomValues&&Uint8Array&&(e=i.getRandomValues(new Uint8Array(31)));for(var o=[],a=0;a<t;a++)o.push(n().toString(16));return o.join("")}n.exports={generateUuid:r,generateSpanId:i,generateTraceId:o}},{}],43:[function(t,n,e){function r(t,n){var e=[],r="",o=0;for(r in t)i.call(t,r)&&(e[o]=n(r,t[r]),o+=1);return e}var i=Object.prototype.hasOwnProperty;n.exports=r},{}],44:[function(t,n,e){.exports=r},{}],45:[function(t,n,e){n.exports={exists:"undefined"!=typeof window.performance&&window.performance.timing&&"undefined"!=typeof window.performance.timing.navigationStart}},{}],46:[{}]},{},[29,37,36,31,34,11]);