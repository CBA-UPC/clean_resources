(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([["infogram-charts/dep-21"],{5234:(t,r,e)=>{e.d(r,{s6:()=>w,EM:()=>k,nJ:()=>E,NN:()=>P,_:()=>m,eM:()=>O,i8:()=>I,FZ:()=>L,zf:()=>A,Y8:()=>Y,J3:()=>b});var n=e(449);var a=e.n(n);var i=e(1713);var o=e(919);var l=e(918);var u=e(3101);var v=e(1714);var c=e(5235);var s=e.n(c);function f(t){return(t-t%4)/4}function h(t){var r=4*t;return Array.from({length:4},}function d(t){var r=t.data,e=t.metrics,n=t.style,a=t.dataPointRadius,i=t.valueProperty,o=void 0===i?"yLabel":i,l=t.hideOverlapping,u=t.width,v=t.height;var c=[];var f=[];var h=[];if(u<1||v<1)return[];if(void 0===l||l){var d=new(s())({width:u,height:v});r.forEach(function(t,r){if(null===t.y||null===t.x){f.push(r);return}var n=e.collection[r];var i={x:t.x-n.width/2,y:t.y-a-n.baseLineOffset,width:n.width,height:n.height,index:r};d.push(i)}),d.each(function(t){var r=d.colliding(t).length;r&&h.push({collisions:r,item:t})}),h.sort(,h.forEach(function(t){var r=t.item;d.colliding(r).length&&(d.remove(r),f.push(r.index))})}else r.forEach(function(t,r){(null===t.y||null===t.x)&&f.push(r)});return r.forEach(function(t,r){var i;if(!f.includes(r)){var l={fillColor:n.color,textX:t.x,textY:t.y-a,textAnchor:"middle",text:t[o],yPct:t.yPct,index:r,seriesIdx:t.seriesIdx,yLabel:t.yLabel,xLabel:t.xLabel,groupLabel:t.groupLabel,categoryLabel:t.categoryLabel,color:(null==t?void 0:null===(i=t.colors)||void 0===i?void 0:i[0])||(null==t?void 0:t.color),textWidth:e.collection[r].width,textHeight:e.collection[r].height-e.collection[r].baseLineOffset,yAxisIndex:t.yAxisIndex};c.push(l)}}),c} p={falp:function(t){var r=t.data,e=t.style,n=t.metrics,a=t.dataPointRadius,i=t.valueProperty,o=void 0===i?"yLabel":i,l=t.hideOverlapping,u=void 0===l||l,v=t.width,c=t.height;var d=[];var x=[];var y=[];if(v<1||c<1)return[];var g=new(s())({width:v,height:c});var p;r.forEach(function(t,r){if(null===t.y||null===t.x){x.push(r);return}var e=n.collection[r];for(var i=0;i<4;i++){var o={x:t.x,y:t.y,width:e.width,height:e.height,index:r,labelIndex:4*r+i,text:t.yLabel};!function(t,r,e,n){switch(t){case 0:r.x-=e.width/2,r.y-=Math.max(e.height/2,n)+e.height;return;case 1:r.x-=e.width/2,r.y+=Math.max(e.height/2,n);return;case 2:r.x-=e.width+n,r.y-=e.height/2;return;case 3:r.x+=n,r.y-=e.height/2}}(i,o,e,a),y[o.labelIndex]=o,g.push(o)}});var b=(p=Array(4*r.length).fill(0)).map(function(t,r){return p.map(function(t,e){return r===e?0:f(r)===f(e)?1:0})});g.each(function(t){var r=g.colliding(t);var e=!0,n=!1,a=void 0;try{for(var i=r[Symbol.iterator](),o;!(e=(o=i.next()).done);e=!0){var l=o.value;b[t.labelIndex][l.labelIndex]=1}}catch(t){n=!0,a=t}finally{try{e||null==i.return||i.return()}finally{if(n)throw a}}});var m=function(t){var r=function(t){var r=Number.MAX_SAFE_INTEGER;var e=[];for(var n=0,a=t.length;n<a;n++){var i=t[n].conflicts.length;i<=r&&(i===r?e.push(n):(e=[n],r=i))}return e};var e=function(t,r){var e=Number.MAX_SAFE_INTEGER;var n=-1;var a=Number.MAX_SAFE_INTEGER;var i=!0,o=!1,l=void 0;try{for(var u=t[Symbol.iterator](),v;!(i=(v=u.next()).done);i=!0)!function(){var t=v.value;var i=r[t];var o=r.filter(.length;(o<e||e===o&&a>=i.point)&&(a=i.point,e=o,n=t)}()}catch(t){o=!0,l=t}finally{try{i||null==u.return||u.return()}finally{if(o)throw l}}return n};var n=[];for(var a=t.length,i=0;i<a;i++){var o=f(i);var l={id:i,conflicts:[],point:o};for(var u=0;u<a;u++)i!==u&&1===t[i][u]&&l.conflicts.push(u);n.push(l)}var v=[];for(;n.length>0;)!function(){var t=r(n);var a=t[0];void 0!==t[1]&&(a=e(t,n));var i=[];var o=n[a];v.push(o.id),i.push(o.id),n.splice(a,1);for(var l=0,u=o.conflicts.length;l<u;l++)!function(t,r){var e=o.conflicts[t];var a=n.findIndex(;-1!==a&&(i.push(n[a].id),n.splice(a,1))}(l,0);var c=!0,s=!1,f=void 0;try{for(var h=n[Symbol.iterator](),d;!(c=(d=h.next()).done);c=!0){var x=d.value;x.conflicts=x.conflicts.filter(}}catch(t){s=!0,f=t}finally{try{c||null==h.return||h.return()}finally{if(s)throw f}}}();var c=t.length/4;if(v.length!==c){var s=v.map(function(t){return f(t)});for(var d=0;d<c;d++)!function(r){if(!s.includes(r)){var e=Number.MAX_SAFE_INTEGER;var n=-1;var a=h(r);var i=!0,o=!1,l=void 0;try{for(var u=a[Symbol.iterator](),c;!(i=(c=u.next()).done);i=!0)!function(){var r=c.value;var a=v.filter(.length;e>a&&(e=a,n=r)}()}catch(t){o=!0,l=t}finally{try{i||null==u.return||u.return()}finally{if(o)throw l}}v.push(n)}}(d)}v.sort(;for(var x=0;x<5;x++){var y=function(r){var e=h(r);var n=Number.MAX_SAFE_INTEGER;var a=-1;var i=!0,o=!1,l=void 0;try{for(var u=e[Symbol.iterator](),c;!(i=(c=u.next()).done);i=!0){var s=function(){var e=c.value;var i=v.filter(function(n,a){return a!==r&&1===t[e][n]}).length;if(n>i&&(n=i,a=e),0===n)return"break"}();if("break"===s)break}}catch(t){o=!0,l=t}finally{try{i||null==u.return||u.return()}finally{if(o)throw l}}-1===a||v.includes(a)||(v[r]=a)};for(var g=0;g<c;g++)y(g)}return v}(b);if(u){g=new(s())({width:v,height:c});var L=!0,w=!1,k=void 0;try{for(var I=m[Symbol.iterator](),E;!(L=(E=I.next()).done);L=!0){var P=y[E.value];P&&g.push(P)}}catch(t){w=!0,k=t}finally{try{L||null==I.return||I.return()}finally{if(w)throw k}}}return r.forEach(function(t,r){var a;if(!x.includes(r)){var i=y[m[r]];if(u&&g.colliding(i).length>0){g.remove(i);return}var l=n.collection[r];var v={fillColor:e.color,textX:i.x,textY:i.y+l.baseLineOffset,textAnchor:"start",text:t[o],yPct:t.yPct,index:r,seriesIdx:t.seriesIdx,yLabel:t.yLabel,xLabel:t.xLabel,groupLabel:t.groupLabel,categoryLabel:t.categoryLabel,color:(null==t?void 0:null===(a=t.colors)||void 0===a?void 0:a[0])||(null==t?void 0:t.color),textWidth:l.width,textHeight:l.height,yAxisIndex:t.yAxisIndex};d.push(v)}}),d},"hide-most-colliding":d};function b(t){var r=a().get(t,"color.method","manual");var e=a().get(t,"color.".concat(r));var n;switch(r){case"manualWithControls":n=a().get(e,"fill.enabled",!1)?a().get(e,"fill.value","#000000"):function(t){return t.color};break;case"manual":n=a().get(e,"fill","#000000");break;default:var o,l,u;o=a().get(e,"dark","#000000"),l=a().get(e,"light","#ffffff"),u=a().get(e,"background","#ffffff"),n=function(t){return i.w.getContrastYIQ(t.inside?(0,v.B)(t.color).hex():(0,v.B)(u).hex(),(0,v.B)(o).hex(),(0,v.B)(l).hex())}}return n}function m(t,r,e){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:var i=b(e);var l=t.selectAll("text").data(r,n);return l.transition().duration(0),l.exit().remove(),(l=l.merge(l.enter().append("text").style("opacity",o.sU))).attr("x",function(t){return t.textX}).attr("y",function(t){return t.textY}).attr("text-anchor",function(t){return t.textAnchor}).attr("fill",i).style("cursor","default").styles(a().omit(e,["color"])),l}function L(t){var r=a().get(t,"color.method","contrast");var e=a().get(t,"color.manual.stroke");var n=a().get(t,"color.manual.fill","#000000");if("manualWithControls"===r){var i,o,l,u,v,c,s,f,h,d;return{manual:null==t?void 0:null===(l=t.color)||void 0===l?void 0:null===(o=l.manualWithControls)||void 0===o?void 0:null===(i=o.stroke)||void 0===i?void 0:i.enabled,stroke:null==t?void 0:null===(c=t.color)||void 0===c?void 0:null===(v=c.manualWithControls)||void 0===v?void 0:null===(u=v.stroke)||void 0===u?void 0:u.value,fill:null===(d=a().style)||void 0===d?void 0:null===(h=d.color)||void 0===h?void 0:null===(f=h.manualWithControls)||void 0===f?void 0:null===(s=f.fill)||void 0===s?void 0:s.value}}return{manual:"manual"===r&&e&&e!==n,stroke:e,fill:n}}function w(t,r,e){var n=L(r);if(t.selectAll("tspan").remove(),n.manual){var a=n.stroke,i=n.fill;t.append("tspan").attr("class","text-outline").attr("x",function(t){return t.textX}).attr("y",function(t){return t.textY}).attr("stroke",a).attr("fill",a).attr("stroke-width","3px").attr("stroke-linejoin","round").text(e),t.append("tspan").attr("class","text-outline-fill").attr("fill",i).attr("x",function(t){return t.textX}).attr("y",function(t){return t.textY}).text(e)}else t.text(e)}function k(t,r){var e,n,a;var o;t.selectAll("tspan").remove();var l=null!==(o=null==r?void 0:null===(e=r.color)||void 0===e?void 0:e.method)&&void 0!==o?o:"manual";var u;var c=null!==(u=null==r?void 0:null===(n=r.color)||void 0===n?void 0:n.contrast)&&void 0!==u?u:{};var s;var f=null!==(s=null==r?void 0:null===(a=r.color)||void 0===a?void 0:a.manual)&&void 0!==s?s:{};var h;var d=null!==(h=null==c?void 0:c.dark)&&void 0!==h?h:"#000000";var x;var y=null!==(x=null==c?void 0:c.light)&&void 0!==x?x:"#ffffff";var g;var p="contrast"===l?function(t){return t.color}:null!==(g=f.stroke)&&void 0!==g?g:"#000000";var b;var m="contrast"===l?function(t){return i.w.getContrastYIQ((0,v.B)(t.color).hex(),(0,v.B)(d).hex(),(0,v.B)(y).hex())}:null!==(b=f.fill)&&void 0!==b?b:"#ffffff";"contrast"===l||"manual"===l&&p!==m?(t.append("tspan").attr("class","text-outline").attr("x",function(t){return t.textX}).attr("y",function(t){return t.textY}).attr("stroke",p).attr("fill",p).attr("stroke-width","3px").attr("stroke-linejoin","round").text(function(t){return t.text}),t.append("tspan").attr("class","text-outline-fill").attr("x",function(t){return t.textX}).attr("y",function(t){return t.textY}).attr("fill",m).text(function(t){return t.text})):t.text(function(t){return t.text})}function I(t){var r=t.metrics,e=t.data,n=t.isStacked,i=t.padding;var o=a().get(e,"[0].width",0);var l=o>=r.height;var u=o>=r.width;if(!n)return{vertical:l,horizontal:u};var v={horizontal:0,vertical:0};var c=r.height;var s=c-r.baseLineOffset;null!=i||(i=.25*c);var f=i-s;r.collection.reduce(function(t,r,n){var a=e[n];var o=Math.abs(a.width);var l=Math.abs(a.height);var u=r.height+f;var v=r.width+i;return t.horizontal+=+(r.width<=o&&u<=l),t.vertical+=+(v<=l&&r.height<=o),t},v);var h=0===v.horizontal&&v.horizontal===v.vertical;return u=v.horizontal>=v.vertical,{horizontal:u=!h&&u,vertical:!h&&!u}}function E(t){var r=t.dispatch,e=t.legend,n=t.opacity,a=void 0===n?null:n,i=t.tooltip,o=t.chartId,v=t.tooltipText,c=t.tooltipValue,s=t.colors;return function(t){(0,u.U)(t,r,i,v,c),t.on("mousemove",function(t,r){var n=(0,l.yK)(t);var u=r.color||(0,l.Lq)(r.seriesIdx,s);var f=v(r);var h=c(r);i().setText(f).setValue(h).setPosition(n,u),null!==a&&e&&e.sendListeners(r.seriesIdx,o,"highlightStart")}).on("mouseout.labels",function(t,r){null!==a&&e&&e.sendListeners(r.seriesIdx,o,"highlightEnd")})}}function P(t){var r=t.data,e=t.style,n=t.showValues,a=t.maxY,i=t.isWaterfall,o=t.isStacked,u=t.textFormat,v=t.valuesOutside,c=t.hideOverlapping,s=void 0===c||c;if(n){var f=r.map(function(t){return u({text:t.yLabel})});var h=(0,l.w7)(f,e);var d=I({metrics:h,data:r,isStacked:o});var x=d.horizontal||d.vertical||!s;var y=[];if(x){var g={data:r,metrics:h,style:e,maxY:a,hideOverlapping:s};if(i)y=function(t){var r=t.data,e=t.metrics,n=t.style;var a=[];var i=[];var o=function(t,r){var n=e.collection[r];var a=(0,l.yp)({x:t.xPos,y:t.yPos-t.height/2+.25*n.height-n.baseLineOffset,width:n.width,height:n.height});return a.xLabel=t.xLabel,a};var u=r.length;for(var v=0;v<u;v++){var c=r[v];if(null===c.x&&i.push(v),!i.includes(v)){var s=o(c,v);for(var f=0;f<u;f++){var h=r[f];if(!i.includes(f)){var d=o(h,f);v===f||s.x>d.x2||s.x2<d.x||s.y>d.y2||s.y2<d.y||i.push(f)}}}}return r.forEach(function(t,r){if(!i.includes(r)){var o={};var l=e.collection[r].height;o.inside=!0,o.fillColor=n.color,o.textX=t.xPos+t.width/2,o.textY=Math.round(t.yPos-t.height/2+.25*l),o.transform=null,o.textAnchor="middle",o.text=t.yLabel,o.index=r,o.seriesIdx=t.seriesIdx,o.yLabel=t.yLabel,o.xLabel=t.xLabel,o.groupLabel=t.groupLabel,o.categoryLabel=t.categoryLabel,o.color=t.color,a.push(o)}}),a}(g);else if(o){var p,b,m,L,w,k;var E;var P;var A;var M;g.horizontal=d.horizontal,p=g.data,b=g.metrics,m=g.style,L=g.horizontal,k=void 0===(w=g.hideOverlapping)||w,E=[],A=(P=b.height)-b.baseLineOffset,M=.25*P,p.forEach(function(t,r){if(null!==t.x){var e={};var n=b.collection[r];var a=Math.abs(t.width);var i=Math.abs(t.height);var o=n[L?"width":"height"];var l=n[L?"height":"width"]+(L?M-A:M);var u=t.y<0;var v=u?-1:1;var c=t.xPos+t.width/2+M;var s=t.yPos-v*M;(o<=a&&l<=i||!k)&&(e.y=t.y,e.inside=!0,e.fillColor=m.color,e.textX=c,e.textY=s,e.textAnchor=u?"end":"start",e.transform="rotate(-90,".concat(c,",").concat(s,")"),L&&(e.textAnchor="middle",e.transform=null,e.textX=t.xPos+t.width/2,e.textY=t.yPos-v*(u?b.baseLineOffset+1:M)),e.yLabel=t.yLabel,e.xLabel=t.xLabel,e.groupLabel=t.groupLabel,e.categoryLabel=t.categoryLabel,e.text=t.yLabel,e.seriesIdx=t.seriesIdx,e.color=t.color,E.push(e))}}),y=E}else if(d.horizontal){var O,Y,S,X,C;var z;g.valuesOutside=v,O=g.data,Y=g.style,S=g.maxY,X=g.metrics,C=g.valuesOutside,z=[],O.forEach(function(t,r){var e=t.y,n=t.xPos,a=t.yPos,i=t.width,o=t.height,l=t.seriesIdx,u=t.xLabel,v=t.yLabel,c=t.groupLabel,s=t.categoryLabel,f=t.color;var h=a;var d=a;var x=S-a;var y=1;var g=!0;var p=X.collection[r];var b=.25*p.height;var m=p.height;var L=m+b;var w=Math.abs(o);var k=!C&&w>L;e<0&&(d=x,x=a,y=-1),k?h-=y*(e<0?m-1:b):d>=w+L?h-=y*(w+(e<0?m-1:b)):x>=L?h+=y*(e<0?b+1:m):g=!1,g&&z.push({inside:k,fillColor:Y.color,textX:n+i/2,textY:h,transform:null,textAnchor:"middle",text:v,index:r,seriesIdx:l,yLabel:v,xLabel:u,groupLabel:c,categoryLabel:s,color:f})}),y=z}else{var N,T,R,_,F;var W;var B;g.valuesOutside=v,N=g.data,T=g.metrics,R=g.style,_=g.maxY,F=g.valuesOutside,W=[],B=.25*T.height,N.forEach(function(t,r){if(null!==t.x){var e={};var n=t.yPos;var a;var i=n;var o="start";var l=n;var u=_-n;var v=1;var c=!0;var s=T.collection[r].width+B;var f=Math.abs(t.height);var h=!F&&f>s;t.y<0&&(o="end",l=u,u=n,v=-1),h?i-=v*B:l>=f+s?i-=v*(f+B):u>=s?(i+=v*B,o="end"===o?"start":"end"):c=!1,c&&(e.inside=h,e.fillColor=R.color,e.textX=a=t.xPos+t.width/2+B,e.textY=i,e.transform="rotate(-90,".concat(a,",").concat(i,")"),e.textAnchor=o,e.text=t.yLabel,e.index=r,e.seriesIdx=t.seriesIdx,e.yLabel=t.yLabel,e.xLabel=t.xLabel,e.groupLabel=t.groupLabel,e.categoryLabel=t.categoryLabel,e.color=t.color,W.push(e))}}),y=W}}return y}}function A(t){return M.apply(this,arguments)}function M(){return(M=y(function(t){var r,e,n,a,i,o,l,u,v,c;return g(this,function(s){return(r=t.selection,e=t.data,n=t.style,a=t.showValues,i=t.textFormat,o=t.transitionDuration,l=t.addMouseEvents,u=t.listenToLegendText,v=t.opacity,r.selectAll("text").transition().duration(0).remove(),a)?((c=m(r,e,n)).attr("transform",function(t){return t.transform}),w(c,n,i),0===c.size())?[2]:[2,new Promise(function(t){var r=0;c.transition().duration(o).style("opacity",v||1).on("start",function(){return r++}).on("end",function(){--r||(l(c.filter(),u(c),t())})})]:[2]})})).apply(this,arguments)}function O(t){var r=t.data,e=t.strategy,n=t.style,a=t.showDataPoints,i=t.dataPointRadius,o=t.hideOverlapping,u=t.valueProperty,v=t.textFormat,c=t.width,s=t.height;var f=r.map(;var h=(0,l.w7)(f,n);return(p[e]||d)({data:r,metrics:h,style:n,dataPointRadius:a?i:0,valueProperty:u,hideOverlapping:o,width:c,height:s})}unction S(){return(S=y(function(t){var r,e,n,a,i,o,l,u;return g(this,function(v){return(r=t.selection,e=t.data,n=t.style,a=t.textFormat,i=t.transitionDuration,o=t.listenToLegendText,l=t.addMouseEvents,e.length)?(w(u=m(r,e,n),n,a),[2,new Promise(function(t){var r=0;u.transition().duration(i).style("opacity",1).on("start",.on("end",function(){--r||(o(u),l(u),t())})})]):[2]})})).apply(this,arguments)}},5224:(t,r,e)=>{function n(t){return"number"==typeof t[1]&&"number"==typeof t[0]?Math.abs(t[1]-t[0]):1/0}function a(t,r){var e=t[0];var n=t[1];var a=0;if(void 0===e||void 0===n)return a;var i=Math.abs(n-e);return i>=r?a:(a=r/i,0==r%i?a-1:Math.floor(a))}function i(t,r,e){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;var a=t.length;var i=[];var o=[];var l=[];if(!a)return{range:i,domain:o,domainIndex:l};var u=e+1;var v=Math.ceil(a/u);var c=-1===n?a-1-(v-1)*u:0;for(var s=0,f=c;s<v;s++,f+=u)i.push(t[f]),o.push(r[f]),l.push(f);return{range:i,domain:o,domainIndex:l}}function o(t,r,e){var n=t.bandwidth()/2;var o=t.domain().map(;var l=o.length-1;var u=0;for(var v=0,c=o.length;v<c;v++){var s;if(o[s=v]+n-e.collection[s].height/2>=0){u=v;break}}var f=a(o=o.slice(u),r.height);return i(o,o,f).domainIndex.map(.filter(}e.d(r,{RH:()=>i,RL:()=>o,fJ:()=>a,wd:)}}]);