(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([["infogram-charts/dep-19"],{2162:(t,e,n)=>{n.d(e,{G:()=>a});function a(t,e,n){t.sheetIndex!==e&&(t.previousIndex=t.sheetIndex,t.sheetIndex=e,delete t.sort,delete t.searchText,delete t.legendData,t.events.call("tabChanged",void 0,{sheetIndex:e,name:n}),t.render(),t.previousIndex=e)}},3104:(t,e,n)=>{n.d(e,{o:()=>r});var a=n(3089);function r(t,e){var n=t.container,r=t.options,o=t.runtime;if(n.selectAll(".igc-data-download").remove(),r.downloadText){var i="".concat(1.2*parseInt(e["font-size"],10),"px");var s=n.insert("a").attr("class","igc-data-download").attr("href","#");s.insert("svg").attr("viewBox","-512 -512 512 512").attr("version","1.1").attr("width",i).attr("height",i).attr("xmlns","http://w3.org/2000/svg").insert("path").attr("fill",e.color.label.active).attr("transform","rotate(180)").attr("d","M288 320l0 192-64 0 0-192-65 0 97-129 96 129z m160 192l-64 0 0-64 32 0c17 0 32-15\n                               32-32l0-320c0-17-15-32-32-32l-320 0c-17 0-32 15-32 32l0 320c0 17 15 32 32 32l32 0\n                               0 64-64 0c-35 0-64-29-64-64l0-384c0-35 29-64 64-64l384 0c35 0 64 29 64 64l0 384c0 35-29 64-64 64z"),s.insert("span").attr("class","igc-data-download-text").style("color",e.color.label.active).style("font-family",e["font-family"]).style("font-weight",e["font-weight"]).style("font-size",e["font-size"]).text(r.downloadText),s.on("click",function(e){e.preventDefault(),t.events.call("downloadData")}),o.height-=(0,a.Pb)(s.node())}}},3077:(t,e,n)=>{function a(t,e,n){if(!e.has(t))throw TypeError("attempted to "+n+" private field on non-instance");return e.get(t)}function r(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}n.d(e,{J:()=>i});var o=new WeakMap;var i=function(){"use strict";function t(e){var n=e.parent,r=e.color,i=e.colorHover,s=e.iconColor,c=e.iconHover,l=e.onClick;!function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}(this,t),function(t,e){if(e.has(t))throw TypeError("Cannot initialize the same private elements twice on an object")}(this,o),o.set(this,{writable:!0,value:void 0});var d=n.append("div").attr("class","sheet-player-button-container").append("div").attr("class","sheet-player-circle").attr("data-lookup","play-button").style("color",r).style("background",r);var u=d.append("div").attr("class","sheet-player-circle-icon");s&&u.style("border-left-color",s).attr("data-lookup","play-button-icon"),function(t,e,n){if(e.set)e.set.call(t,n);else{if(!e.writable)throw TypeError("attempted to set read only private field");e.value=n}}(this,a(this,o,"set"),d),this.toggle(!1),d.on("click",l),d.on("mouseover",function(){d.style("background",i),u.style("border-left-color",c)}),d.on("mouseout",function(){d.style("background",r),u.style("border-left-color",s)})}var e,n;return e=[{key:"toggle",value:function(t){var e;var n=(e=a(this,o,"get")).get?e.get.call(this):e.value;n.classed("play",!t),n.classed("pause",t)}}],r(t.prototype,e),n&&r(t,n),t}()},3078:(t,e,n)=>{n.d(e,{e:()=>w});var a=n(3079);var r=n(942);var o=n(943);function i(t,e,n){if(!e.has(t))throw TypeError("attempted to "+n+" private field on non-instance");return e.get(t)}function s(t,e){var n=i(t,e,"get");return n.get?n.get.call(t):n.value}function c(t,e,n){!function(t,e){if(e.has(t))throw TypeError("Cannot initialize the same private elements twice on an object")}(t,e),e.set(t,n)}function l(t,e,n){var a=i(t,e,"set");return!function(t,e,n){if(e.set)e.set.call(t,n);else{if(!e.writable)throw TypeError("attempted to set read only private field");e.value=n}}(t,a,n),n}function d(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function u(t,e){t.style("width","".concat(e,"px"))}function v(t,e){t.style("transform","translate(".concat(e,"px)"))}function h(t,e,n){return function(a){var r=a/t;return n(e*(isFinite(r)?r:0))}}function p(t,e){return t?e:"".concat(e," series-player")}var f=new WeakMap,g=new WeakMap,b=new WeakMap,y=new WeakMap;var w=function(){"use strict";function t(e){var n=e.parent,i=e.width,s=e.progressColor,d=e.progressHover,w=e.handleColor,m=e.handleHover,x=e.railColor,k=e.step,C=void 0===k?.01:k,I=e.min,E=e.max,P=e.animate,S=void 0===P||P,A=e.onDragStart,T=void 0===A?r.ZT:A,L=e.onDrag,H=void 0===L?r.ZT:L,M=e.onClick,z=void 0===M?r.ZT:M,B=e.onInput,W=void 0===B?r.ZT:B;!function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}(this,t);var D=function(t){var e=O.node().getBoundingClientRect();var n=o.mA.round(Q.node().getBoundingClientRect().width,2);var a=o.mA.round((O.node().getBoundingClientRect().width-Q.node().getBoundingClientRect().width)/2,2);return Math.round(_*(Math.max(Math.min(t-e.left-a,n),0)/n)/C)*C};var R=function(t){function e(t){var e=D(t.touches?t.touches[0].pageX:t.pageX);u(Z,G(e)),v(q,J(e)),Z.style("background",d),q.style("background-color",m),H(e),W(e)}function n(){document.removeEventListener("mousemove",e),document.removeEventListener("touchmove",e),document.removeEventListener("mouseup",n),document.removeEventListener("touchend",n),Z.style("background",s),q.style("background-color",w)}t.preventDefault(),T(),document.addEventListener("mouseup",n),document.addEventListener("touchend",n),document.addEventListener("mousemove",e),document.addEventListener("touchmove",e)};c(this,f,{writable:!0,value:void 0}),c(this,g,{writable:!0,value:void 0}),c(this,b,{writable:!0,value:void 0}),c(this,y,{writable:!0,value:void 0});var j=i-10;var _=(void 0===E?1:E)-(void 0===I?0:I);var V=(0,a.Z)().domain([0,j]).range([10,i]);var G=l(this,f,h(_,j,V));var J=l(this,g,h(_,j,function(t){return t}));var K=n.append("div").attr("class","sheet-player-slider-container").attr("data-lookup","slider-container");var O=K.append("div").attr("class","sheet-player-slider-rail").style("background-color",x);var Z=l(this,b,O.append("div").attr("class",p(S,"sheet-player-slider-progress")).attr("data-lookup","slider-progress").style("background",s));var Q=O.append("div").attr("class",p(S,"sheet-player-slider-location"));Q.style("width","".concat(j,"px"));var q=l(this,y,Q.append("div").attr("class","sheet-player-slider-handle").attr("data-lookup","slider-handle").style("background-color",w));var X=q.node();X.addEventListener("touchstart",R),X.addEventListener("mousedown",R),O.node().addEventListener("click",function(t){var e=D(t.pageX);u(Z,G(e)),v(q,J(e)),Z.style("background",d),q.style("background-color",m),z(e),W(e)}),K.on("mouseover",function(){Z.style("background",d),q.style("background-color",m)}),K.on("mouseout",function(){Z.style("background",s),q.style("background-color",w)})}var e,n;return e=[{key:"setValue",value:function(t){u(s(this,b),s(this,f).call(this,t)),v(s(this,y),s(this,g).call(this,t))}}],d(t.prototype,e),n&&d(t,n),t}()},3095:(t,e,n)=>{n.d(e,{SX:()=>f,_j:()=>x,sv:()=>p});var a=n(449);var r=n.n(a);var o=n(3088);var i=n(3077);var s=n(3078);var c=n(941);function l(t,e,n){if(!e.has(t))throw TypeError("attempted to "+n+" private field on non-instance");return e.get(t)}function d(t,e){var n=l(t,e,"get");return n.get?n.get.call(t):n.value}function u(t,e,n){!function(t,e){if(e.has(t))throw TypeError("Cannot initialize the same private elements twice on an object")}(t,e),e.set(t,n)}function v(t,e,n){var a=l(t,e,"set");return!function(t,e,n){if(e.set)e.set.call(t,n);else{if(!e.writable)throw TypeError("attempted to set read only private field");e.value=n}}(t,a,n),n}function h(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}var p=new Map;var f=1500;var g=new WeakMap,b=new WeakMap,y=new WeakMap,w=new WeakMap,m=new WeakMap;var x=function(){"use strict";function t(e){var n=this;!function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}(this,t);var a=function(t){return r().get(e,"options.sheets[".concat(t||0,"].categories.title"),"")};u(this,g,{writable:!0,value:void 0}),u(this,b,{writable:!0,value:void 0}),u(this,y,{writable:!0,value:void 0}),u(this,w,{writable:!0,value:void 0}),u(this,m,{writable:!0,value:void 0}),v(this,y,e),v(this,b,!1);var l=e.container,h=e.options,x=e.sheetIndex;var k=r().get(h,"style.sheetSwitch.play.colors");var C=v(this,w,l.append("div").attr("class","igc-sheet-player")).append("div").attr("class","sheet-player");var I=C.append("div").attr("class","sheet-player-inner");var E=C.append("div").attr("class","sheet-player-sheetName").style("color",r().get(h,"style.sheetSwitch.tab.color"));E.text(a(x));var P=r().get(e,"options.sheets.length");var S=h.width-50;var A=new s.e({width:S,parent:I,progressColor:k.progressBar,progressHover:k.progressBarHover,handleColor:k.handle,handleHover:k.handleHover,railColor:k.rail,min:0,max:Math.max(0,P-1),step:1,onDragStart:function(){n.stop()},onDrag:function(t){E.text(a(t)),n.update(t)},onClick:function(t){var r=p.get(e.chartId);r&&r.stop(),n.stop(),E.text(a(t)),n.update(t)}});v(this,m,function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=n.repeat;var r={chartId:t,repeat:void 0===a||a};return r.start=function(){p.set(r.chartId,r),e.call(r)},r.stop=function(){p.delete(r.chartId),clearTimeout(r.timeoutRef)},r}(e.chartId,function t(){var n=this;if(p.get(this.chartId)){var r=e.sheetIndex+1;if(r===P){if(!this.repeat)return;r=0}E.text(a(r)),A.setValue(r),(0,c.gB)().hide(),e.sheetIndex=r,e.render(),e.events.on("endAnimation.sheetPlayer",function(){p.get(n.chartId)&&(n.timeoutRef=setTimeout(t.bind(n),f))})}})),v(this,g,new i.J({parent:I,color:k.background,colorHover:k.backgroundHover,iconColor:k.icon,iconHover:k.iconHover,onClick:function(){n.setPlayPause(!d(n,b)),d(n,b)?d(n,m).start():d(n,m).stop()}})),(0,o.hJ)(e,C.node())}var e,n;return e=[{key:"setPlayPause",value:function(t){v(this,b,t),d(this,g).toggle(t)}},{key:"isPlaying",value:function(){return d(this,b)}},{key:"play",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.repeat;d(this,m).repeat=void 0===e||e,this.setPlayPause(!d(this,b)),d(this,b)?d(this,m).start():d(this,m).stop()}},{key:"stop",value:function(){this.isPlaying()&&this.setPlayPause(!1),this.stopLoop()}},{key:"stopLoop",value:function(){var t=p.get(d(this,y).chartId);t&&t.stop()}},{key:"update",value:function(t){var e=d(this,y);e.sheetIndex!==t&&(e.sheetIndex=t,this.inAction=!0,e.render())}},{key:"remove",value:function(){var t=d(this,y);this.stopLoop(),d(this,w).remove(),delete t.sheetPlayer}}],h(t.prototype,e),n&&h(t,n),t}()},3093:(t,e,n)=>{n.d(e,{q:()=>u,r:()=>v});var a=n(449);var r=n.n(a);var o=n(944);var i=n(3094);var s=n(3088);var c=n(3091);var l=n(3092);var d=n(2162);function u(t){var e=r().pick(t,["font-size","font-family","font-style","font-weight","color"]);var n=r().get(t,"color");var a=r().get(t,"activeTabColor",n);return{fontStyle:e,tabColor:n,tabColorActive:a,colors:r().get(t,"colors")}}function v(t,e){var n=function(){var n=document.createElement("textarea");n.innerText=x[h];var o=n.value;var i=(0,l.L)({container:v,width:e.width,data:x,currentIndex:h,title:o,showArrows:!!r().get(f,"tabOptions.navigationArrows"),style:m,controlsColorsEnabled:r().get(a,"style.sheetSwitch.controlsColorsEnabled"),onRightArrowClick:function(){var e=t.sheetIndex+1;b("sheetSwitcher.arrow-right","click"),e>y-1&&(e=0),(0,d.G)(t,e,x[e])},onLeftArrowClick:function(){var e=t.sheetIndex-1;b("sheetSwitcher.arrow-left","click"),e<0&&(e=y-1),(0,d.G)(t,e,x[e])},onChange:function(){var e=this.options[this.selectedIndex];b("sheetSwitcher.select","change"),document.activeElement&&document.activeElement.blur&&document.activeElement.blur();var n=parseInt(e.value,10);(0,d.G)(t,n,x[n])}});(0,s.Qy)(t,i)};var a=t.options,v=t.container,h=t.sheetIndex,p=t.previousIndex;var f=a.sheetSwitch;var g=a.sheets;if((0,i.C)(t),v.selectAll(".igc-tabs, .igc-tab-container").remove(),!(!r().get(f,"tabOptions.enabled")||(0,s.$q)(t))){var b=t.createInteractionCaller();var y=g.length;var w=(e.width-c.x_*(y-1)-2*c.SC)/y;var m=u(r().get(a,"style.sheetSwitch.tab"));var x=g.map(function(t){return t.categories.title});if(w>100){var k=(0,c.mQ)({container:v,width:e.width,data:x,currentIndex:h,previousIndex:p||0,style:m,controlsColorsEnabled:r().get(a,"style.sheetSwitch.controlsColorsEnabled"),onSwitch:function(e,n){var a=n.sheetIndex,r=n.name;("keypress"!==e.type||13===e.keyCode)&&(b("sheetSwitcher.item","click",{sheetIndex:a}),t.sheetIndex!==a&&(v.selectAll(".igc-tab.active").attr("class","igc-tab").attr("aria-selected","false"),(0,o.Z)(this).classed("active",!0).attr("aria-selected","true"),(0,d.G)(t,a,r)))}});k.fits?(0,s.Qy)(t,k.height):(v.selectAll(".igc-tabs, .igc-tab-container").remove(),n())}else n();v.selectAll(".igc-tabs").on("keydown",function(e){var n=!0;var a;var r=t.options.sheets.length-1;var o=t.sheetIndex;switch(e.code){case"ArrowLeft":case"ArrowUp":a=o>0?o-1:r;break;case"ArrowRight":case"ArrowDown":a=o>=r?0:o+1;break;default:n=!1}n&&((0,d.G)(t,a,x[o]),v.select(".igc-tab").node().focus(),e.preventDefault(),e.stopPropagation())})}}},3092:(t,e,n)=>{n.d(e,{L:()=>o});var a=n(3089);var r=".igc-content";function o(t){var e=t.container,n=t.width,o=t.data,i=t.currentIndex,s=t.title,c=t.showArrows,l=t.style,d=t.onLeftArrowClick,u=t.onRightArrowClick,v=t.onChange,h=t.controlsColorsEnabled;var p=l.colors,f=l.fontStyle;var g=e.insert("div",r).attr("role","tablist").attr("class","igc-tab-container").attr("aria-label","select sheet");var b=n;var y;var w;b>200?b-=82:c=!1;var m=f["font-size"]?parseInt(f["font-size"],10)+2:16;c&&(w=(y=g.insert("div",r).attr("class","igc-tab-switcher igc-tab-switcher__left").style("background-color",p.dropdown.leftSwitcher).attr("aria-label","select previous sheet").on("click",d)).append("div").attr("class","igc-tab-switcher-ico-container").append("div").attr("class","igc-tab-switcher-ico").style("left","".concat((31-m)/2,"px"))).append("svg").attr("viewBox","0 0 512 512").attr("height",m).attr("width",m).append("path").attr("fill",p.dropdown.leftSwitcherIcon).attr("d","m198 217l20-19 0 0 96-96 38 39-77 77 0 0-38 38 19 19 0 0 96 96-38 39-77-77 0 0-39-39-38-38z");var x=g.insert("div",r).attr("class","igc-tabs igc-tabs-dropdown").style("background-color",p.dropdown.select).attr("aria-label","select sheet");var k=x.append("div").attr("class","igc-tab").attr("aria-selected","true").attr("role","tab").attr("tabindex",0).attr("aria-controls","igc-tab-content0").style("width","".concat(b,"px"));var C=k.append("div").attr("class","igc-tab-ico");C.append("svg").attr("viewBox","0 0 512 512").attr("height",m).attr("width",m).append("path").attr("fill",p.dropdown.selectIcon).attr("d","m217 314l-19-20 0 0-96-96 39-38 77 77 0 0 38 38 19-19 0 0 96-96 39 38-77 77 0 0-39 39-38 38z");var I=k.append("select").attr("class","igc-tab-content igc-tab-select").attr("aria-label","Tab selector");var E=k.append("div").attr("class","igc-tab-name").styles(f).text(s).style("width","".concat(b,"px"));var P=E.node().offsetHeight+20;I.style("height","".concat(P,"px")),I.style("width","".concat(b,"px")),g.select(".igc-tabs-dropdown").style("height","".concat(P,"px")),c||(g.select(".igc-tabs-dropdown").style("width","".concat(n,"px")),k.style("width","".concat(n,"px")),I.style("width","".concat(n,"px"))),C.style("top","".concat((P-m)/2,"px"));var S=C.node().offsetWidth+8;E.style("max-width","".concat((c?b:n)-S,"px"));var A=parseInt(E.style("width"),10);c?E.style("left","".concat((b-A)/2,"px")):E.style("left","0px");var T=o.reduce(function(t,e,n){var a=document.createElement("option");return a.setAttribute("value",n),a.textContent=e,n===i&&a.setAttribute("selected",""),t.appendChild(a),t},window.document.createDocumentFragment());if(I.node().appendChild(T),I.node().onchange=v,c){var L=g.insert("div",r).attr("class","igc-tab-switcher igc-tab-switcher__right").style("background-color",p.dropdown.rightSwitcher).attr("aria-label","select next sheet").on("click",u);var H=L.append("div").attr("class","igc-tab-switcher-ico-container").append("div").attr("class","igc-tab-switcher-ico").style("left","".concat((31-m)/2,"px"));H.append("svg").attr("viewBox","0 0 512 512").attr("height",m).attr("width",m).append("path").attr("fill",p.dropdown.rightSwitcherIcon).attr("d","m314 295l-20 19 0 0-96 96-38-39 77-77 0 0 38-38-19-19 0 0-96-96 38-39 77 77 0 0 39 39 38 38z"),L.style("height","".concat(P,"px")),y.style("height","".concat(P,"px")),w.style("top","".concat((P-m)/2,"px")),H.style("top","".concat((P-m)/2,"px")),h&&(L.on("mouseover",function(){L.style("background",p.dropdown.rightSwitcherHover)}),y.on("mouseover",function(){y.style("background",p.dropdown.leftSwitcherHover)}),L.on("mouseout",function(){L.style("background",p.dropdown.rightSwitcher)}),y.on("mouseout",function(){y.style("background",p.dropdown.leftSwitcher)}))}return h&&(x.on("mouseover",function(){k.style("background",p.dropdown.selectHover)}),x.on("mouseout",function(){k.style("background","")})),(0,a.Pb)(g.node())}},3091:(t,e,n)=>{n.d(e,{SC:()=>o,mQ:()=>l,x_:()=>i});var a=n(3089);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var o=3;var i=5;function s(t,e,n){var a;var o=(r(a={position:"absolute",top:0,width:"6px",height:"6px","box-shadow":"0 0 0 3px ".concat(n)},e,0),r(a,"border-top-".concat(e,"-radius"),"60%"),a);return t.append("div").attr("class","igc-tab-spacer-".concat(e)).append("div").styles(o)}function c(t){var e=t.parent,n=t.side,a=t.color,r=t.width;return e.append("div").attr("class","igc-tab-background-".concat(n)).attr("data-lookup","igc-tab-background-".concat(n)).style("background-color",a).style("width","".concat(r,"px"))}function l(t){var e=t.container,n=t.width,r=t.data,l=t.currentIndex,d=t.previousIndex,u=t.style,v=t.onSwitch,h=t.controlsColorsEnabled;var p=u.colors,f=u.fontStyle,g=u.tabColor,b=u.tabColorActive;var y=e.insert("div",".igc-content").attr("class","igc-tabs").attr("aria-label","select sheet").attr("role","tablist").style("width","".concat(n,"px"));var w=r.length;var m=(n-i*(w-1)-2*o)/w;var x=m+i;var k=y.append("div").attr("class","igc-tab-background-layer").style("margin-left","-".concat((w-d-1)*x,"px"));k.transition().style("margin-left","-".concat((w-l-1)*x,"px"));var C=c({parent:k,side:"left",color:p.tab.background,width:n-m-o});var I=k.append("div").attr("class","igc-tab-spacer").style("border-top-color",p.tab.top).style("width","".concat(m,"px"));s(I,"left",p.tab.topLeftCorner),s(I,"right",p.tab.topRightCorner);var E=c({parent:k,side:"right",color:p.tab.background,width:n-m-o});var P=y.append("div").attr("class","igc-tab-texts").attr("aria-label","select sheet").selectAll(".igc-tab").data(r.map(function(t,e){return{name:t,sheetIndex:e}}));(P=P.merge(P.enter().append("div").attr("class","igc-tab"))).attr("aria-selected",function(t){return t.sheetIndex===l?"true":"false"}).attr("role","tab").attr("tabindex",0).attr("class",function(t){return t.sheetIndex===l?"igc-tab active":"igc-tab"}).style("margin-left",function(t){return 0===t.sheetIndex?"".concat(o,"px"):"".concat(i,"px")}).style("width","".concat(m,"px"));var S=P.append("div").attr("class","igc-tab-content").attr("id",function(t){return"igc-tab-content".concat(t.sheetIndex)}).attr("data-lookup",function(t){return t.sheetIndex===l?"tab-active":null}).styles(f).style("color",function(t){return t.sheetIndex===l?b:g}).text(function(t){return t.name});var A=S._parents[0].offsetHeight+2;y.style("height","".concat(A,"px")),C.style("height","".concat(A,"px")),E.style("height","".concat(A,"px"));var T=!1;S.nodes().forEach(function(t){T=T||Math.round(m)<t.scrollWidth});var L={fits:!T};return L.fits&&(L.height=(0,a.Pb)(y.node()),P.on("click keypress",v)),h&&P.nodes().forEach(function(t){t.classList.contains("active")||(t.onmouseover=function(){t.style.background=p.tab.backgroundHover},t.onmouseout=function(){t.style.background=""})}),L}},3094:(t,e,n)=>{n.d(e,{C:()=>s,J:()=>c});var a=n(449);var r=n.n(a);var o=n(3088);var i=n(3095);function s(t){t.sheetPlayer&&t.sheetPlayer.remove()}function c(t){var e=t.container;var n=r().get(t,"sheetPlayer.inAction",!1);if(i.sv.get(t.chartId)||n){n&&(t.sheetPlayer.inAction=!1);var a=e.select(".sheet-player");(0,o.hJ)(t,a.node());return}(0,o.$q)(t)||(e.selectAll(".igc-sheets, .igc-tabs, .igc-tab-container, .igc-sheet-player").remove(),t.sheetPlayer=new i._j(t))}},3088:(t,e,n)=>{n.d(e,{$q:()=>i,Qy:()=>r,hJ:()=>o});var a=n(3089);function r(t,e){var n=t.runtime;t.options.fixedHeight&&n&&n.height&&(n.height-=e)}function o(t,e){r(t,(0,a.Pb)(e))}function i(t){var e=t.options;var n=e.sheets,a=e.sheetSwitch;return!n||!n.length||1===n.length||!1===a.enabled}},941:(t,e,n)=>{n.d(e,{F2:()=>l,gB:()=>c,wR:()=>s,y2:()=>o});var a=n(942);var r=n(705);var o={setText:function(){return this},setValue:function(){return this},setPosition:function(){return this},show:function(){return(0,r.H)("Trying to show dummy tooltip"),this},interaction:function(){return this},hide:function(){return i!==o&&i.hide.apply(i,arguments),this},mute:function(){return this},unmute:function(){return this},isVisible:function(){return this},setKey:function(){return this},getKey:function(){return this}};var i=o;function s(t){i=t}function c(){return i}function l(t){var e,n,r,s,c,l,d,u;var v=t.createInteractionCaller();var h=null==t?void 0:null===(n=t.options)||void 0===n?void 0:null===(e=n.tooltip)||void 0===e?void 0:e.enabled;var p=null==t?void 0:null===(c=t.options)||void 0===c?void 0:null===(s=c.style)||void 0===s?void 0:null===(r=s.tooltip)||void 0===r?void 0:r.text;var f=null==t?void 0:null===(u=t.options)||void 0===u?void 0:null===(d=u.style)||void 0===d?void 0:null===(l=d.tooltip)||void 0===l?void 0:l.value;p=p&&(0,a.fx)(p),f=f&&(0,a.fx)(f);var g=(0,a.xC)(t.root.node());var b,y;return b=p,y=f,h?function(){return{setText:function(t){return i.setText(t,b),this},setValue:function(t){return"string"!=typeof t||i.setValue(t,y),this},setPosition:function(t,e){return i.setPosition(t,{color:e,scale:g().x}),this},interaction:function(t){return v("tooltip",t),this},show:function(){return i.show.apply(i,arguments),this},hide:function(){return i.hide.apply(i,arguments),this},isVisible:function(){return i.isVisible()},mute:function(){return i.mute(),this},unmute:function(){return i.unmute(),this},setKey:function(){return i.setKey.apply(i,arguments),this},getKey:function(){return i.getKey()}}}:function(){return o}}}}]);llar.css?ver=6.2.4" type="text/css" media="all" />
<link rel="stylesheet" id="wp-featherlight-css" href="https://www.ispot.tv/hub/wp-content/plugins/wp-featherlight/css/wp-featherlight.min.css?ver=1.2.0" type="text/css" media="all" />
<script type="text/javascript" src="https://www.ispot.tv/hub/wp-includes/js/jquery/jquery.min.js?ver=3.6.4" id="jquery-core-js"></script>
<script type="text/javascript" src="https://www.ispot.tv/hub/wp-includes/js/jquery/jquery-migrate.min.js?ver=3.4.0" id="jquery-migrate-js"></script>
<link rel="https://api.w.org/" href="https://www.ispot.tv/hub/wp-json/" /><link rel="alternate" type="application/json" href="https://www.ispot.tv/hub/wp-json/wp/v2/pages/17140" /><link rel="EditURI" type="application/rsd+xml" title="RSD" href="https://www.ispot.tv/hub/xmlrpc.php?rsd" />
<link rel="wlwmanifest" type="application/wlwmanifest+xml" href="https://www.ispot.tv/hub/wp-includes/wlwmanifest.xml" />
<meta name="generator" content="WordPress 6.2.4" />
<link rel="canonical" href="https://www.ispot.tv/hub/tv-currency-measurement/" />
<link rel="shortlink" href="https://www.ispot.tv/hub/?p=17140" />
<meta property="description" content="Discover the difference between TV currency and measurement, and their challenges. Read our resources to keep up with the latest trends in TV advertising." /><meta property="og:description" content="Discover the difference between TV currency and measurement, and their challenges. Read our resources to keep up with the latest trends in TV advertising." /><meta name="twitter:description" content="Discover the difference between TV currency and measurement, and their challenges. Read our resources to keep up with the latest trends in TV advertising."><meta property="keywords" content="iSpot.tv" /> 

<meta property="og:link" content="https://www.ispot.tv/hub/tv-currency-measurement/">
<meta property="og:title" content="TV Currency and Measurement | TV Marketing | iSpot.tv">
<meta property="og:image" content>
<meta name="twitter:image" content>

<title>TV Currency and Measurement | TV Marketing | iSpot.tv</title>
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@ispottv">
<meta name="twitter:creator" content="@ispottv">
<meta name="twitter:title" content="TV Currency and Measurement | TV Marketing | iSpot.tv">
<meta name="Content-Type" content="text/html; charset=utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<meta name="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="asset-server" content="https://d3ds6z1w6yhmzj.cloudfront.net">
<meta name="www-server" content="https://www.ispot.tv">
<meta name="referrer" content="no-referrer-when-downgrade">
<meta name="msvalidate.01" content="5B62160EC07AC4393D41DCFD2DC1ED71">
<meta name="google-site-verification" content="A7RASS0s8OVkG79LnrDjcJVuBHJBG3vUmj19ukRlCLw">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-title" content="iSpot.tv">
<meta name="apple-mobile-web-app-status-bar-style" content="default">
<meta name="theme-color" content="#292D2F">

<meta charset>


<link rel="prefetch" href="https://d3ds6z1w6yhmzj.cloudfront.net/dist/css/global/index.css?v=9.3.35">
<link rel="prefetch" href="https://d3ds6z1w6yhmzj.cloudfront.net/dist/css/legacy/index.css?v=9.3.35">
<link rel="prefetch" href="https://d3ds6z1w6yhmzj.cloudfront.net/dist/css/standard/index.css?v=9.3.35">
<link rel="prefetch" href="https://d3ds6z1w6yhmzj.cloudfront.net/dist/css/standard/bootstrap/index.css?v=9.3.35">
<link rel="prefetch" href="https://d3ds6z1w6yhmzj.cloudfront.net/dist/css/standard/modules/jumbotron/index.css?v=9.3.35">
<link rel="prefetch" href="https://d3ds6z1w6yhmzj.cloudfront.net/dist/css/standard/modules/card/index.css?v=9.3.35">
<link rel="prefetch" href="https://d3ds6z1w6yhmzj.cloudfront.net/dist/css/standard/utils/index.css?v=9.3.35">
<link rel="prefetch" href="https://d3ds6z1w6yhmzj.cloudfront.net/dist/css/standard/typography/index.css?v=9.3.35">
<link rel="prefetch" href="https://d3ds6z1w6yhmzj.cloudfront.net/dist/css/header/index.css?v=9.3.35">
<link rel="prefetch" href="https://d3ds6z1w6yhmzj.cloudfront.net/dist/css/bootstrap-ext/index.css?v=9.3.35">
<link rel="prefetch" href="https://d3ds6z1w6yhmzj.cloudfront.net/dist/css/footer/index.css?v=9.3.35">
<link rel="prefetch" href="https://d3ds6z1w6yhmzj.cloudfront.net/dist/css/modal/index.css?v=9.3.35">
<link rel="prefetch" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css">
<link rel="prefetch" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css">
<link rel="prefetch" href="https://pro.fontawesome.com/releases/v5.15.3/css/svg-with-js.css">
<link rel="preload" as="style" href="https://d3ds6z1w6yhmzj.cloudfront.net/dist/css/global/index.css?v=9.3.35">
<link rel="preload" as="style" href="https://d3ds6z1w6yhmzj.cloudfront.net/dist/css/legacy/index.css?v=9.3.35">
<link rel="preload" as="style" href="https://d3ds6z1w6yhmzj.cloudfront.net/dist/css/standard/index.css?v=9.3.35">
<link rel="preload" as="style" href="https://d3ds6z1w6yhmzj.cloudfront.net/dist/css/standard/bootstrap/index.css?v=9.3.35">
<link rel="preload" as="style" href="https://d3ds6z1w6yhmzj.cloudfront.net/dist/css/standard/modules/jumbotron/index.css?v=9.3.35">
<link rel="preload" as="style" href="https://d3ds6z1w6yhmzj.cloudfront.net/dist/css/standard/modules/card/index.css?v=9.3.35">
<link rel="preload" as="style" href="https://d3ds6z1w6yhmzj.cloudfront.net/dist/css/standard/utils/index.css?v=9.3.35">
<link rel="preload" as="style" href="https://d3ds6z1w6yhmzj.cloudfront.net/dist/css/standard/typography/index.css?v=9.3.35">
<link rel="preload" as="style" href="https://d3ds6z1w6yhmzj.cloudfront.net/dist/css/header/index.css?v=9.3.35">
<link rel="preload" as="style" href="https://d3ds6z1w6yhmzj.cloudfront.net/dist/css/bootstrap-ext/index.css?v=9.3.35">
<link rel="preload" as="style" href="https://d3ds6z1w6yhmzj.cloudfront.net/dist/css/footer/index.css?v=9.3.35">
<link rel="preload" as="style" href="https://d3ds6z1w6yhmzj.cloudfront.net/dist/css/modal/index.css?v=9.3.35">
<link rel="preload" as="style" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css">
<link rel="preload" as="style" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css">
<link rel="preload" as="style" href="https://pro.fontawesome.com/releases/v5.15.3/css/svg-with-js.css">

<link rel="stylesheet" type="text/css" href="https://d3ds6z1w6yhmzj.cloudfront.net/dist/css/global/index.css?v=9.3.35">
<link rel="stylesheet" type="text/css" href="https://d3ds6z1w6yhmzj.cloudfront.net/dist/css/legacy/index.css?v=9.3.35">
<link rel="stylesheet" type="text/css" href="https://d3ds6z1w6yhmzj.cloudfront.net/dist/css/standard/index.css?v=9.3.35">
<link rel="stylesheet" type="text/css" href="https://d3ds6z1w6yhmzj.cloudfront.net/dist/css/standard/bootstrap/index.css?v=9.3.35">
<link rel="stylesheet" type="text/css" href="https://d3ds6z1w6yhmzj.cloudfront.net/dist/css/standard/modules/jumbotron/index.css?v=9.3.35">
<link rel="stylesheet" type="text/css" href="https://d3ds6z1w6yhmzj.cloudfront.net/dist/css/standard/modules/card/index.css?v=9.3.35">
<link rel="stylesheet" type="text/css" href="https://d3ds6z1w6yhmzj.cloudfront.net/dist/css/standard/utils/index.css?v=9.3.35">
<link rel="stylesheet" type="text/css" href="https://d3ds6z1w6yhmzj.cloudfront.net/dist/css/standard/typography/index.css?v=9.3.35">
<link rel="stylesheet" type="text/css" href="https://d3ds6z1w6yhmzj.cloudfront.net/dist/css/header/index.css?v=9.3.35">
<link rel="stylesheet" type="text/css" href="https://d3ds6z1w6yhmzj.cloudfront.net/dist/css/bootstrap-ext/index.css?v=9.3.35">
<link rel="stylesheet" type="text/css" href="https://d3ds6z1w6yhmzj.cloudfront.net/dist/css/footer/index.css?v=9.3.35">
<link rel="stylesheet" type="text/css" href="https://d3ds6z1w6yhmzj.cloudfront.net/dist/css/modal/index.css?v=9.3.35">
<link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css">
<link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css">
<link href="https://pro.fontawesome.com/releases/v5.15.3/css/svg-with-js.css" media="all" rel="stylesheet" type="text/css">
<link rel="preload" as="font" crossorigin="anonymous" href="https://d3ds6z1w6yhmzj.cloudfront.net/fonts/source-sans-pro/source-sans-pro-v11-latin-300.woff2">
<link rel="preload" as="font" crossorigin="anonymous" href="https://d3ds6z1w6yhmzj.cloudfront.net/fonts/source-sans-pro/source-sans-pro-v11-latin-regular.woff2">
<link rel="preload" as="font" crossorigin="anonymous" href="https://d3ds6z1w6yhmzj.cloudfront.net/fonts/source-sans-pro/source-sans-pro-v11-latin-600.woff2">
<link rel="preload" as="font" crossorigin="anonymous" href="https://d3ds6z1w6yhmzj.cloudfront.net/fonts/poppins/Poppins-Medium.woff2">
<link rel="preload" as="font" crossorigin="anonymous" href="https://d3ds6z1w6yhmzj.cloudfront.net/fonts/poppins/Poppins-Bold.woff2">
<link rel="preload" as="font" crossorigin="anonymous" href="https://d3ds6z1w6yhmzj.cloudfront.net/fonts/poppins/Poppins-Regular.woff2">

<script type="application/ld+json">
{
	"@context": "http://schema.org",
	"@type": "WebApplication",
	"@id": "https://www.ispot.tv/#organization",
	"applicationCategory": "BusinessApplication",
	"name": "iSpot.tv - TV Ad Measurement and Attribution",
	"operatingSystem": "all",
	"browserRequirements": "Requires Javascript and HTML5 support",
	"url": "https://www.ispot.tv",
	"screenshot": "https://d3ds6z1w6yhmzj.cloudfront.net/img/solutions/tv-attribution/Digital-Like-Impact.png",
	"aggregateRating": {
		"@type": "AggregateRating",
		"ratingValue": "4.5",
		"reviewCount": "5"
	},
	"offers": {
		"@type": "AggregateOffer",
		"offeredBy": {
			"@type": "Organization",
			"name": "iSpot"
		},
		"lowprice": "0.00",
		"priceCurrency": "USD",
		"priceSpecification": [{
			"@type": "UnitPriceSpecification",
			"price": "0.00",
			"priceCurrency": "USD",
			"name": "Metrics Access, 10 Day Trial"
		}]
	},
	"creator": {
		"@type": "Organization",
		"@id": "#organization",
		"url": "https://www.ispot.tv",
		"name": "iSpot",
		"logo": {
			"@type": "ImageObject",
			"url": "https://d3ds6z1w6yhmzj.cloudfront.net/img/ispot/logo-home.png",
			"width": "300px",
			"height": "82px"
		},
		"sameAs": [
			"https://www.linkedin.com/company/ispottv/",
			"https://www.crunchbase.com/organization/ispot-tv",
			"https://twitter.com/ispottv",
			"https://www.facebook.com/ispottv/",
			"https://www.youtube.com/channel/UCeMuA4L9qnyKOsoFqkEDNJA",
			"https://www.instagram.com/ispottv/",
			"https://www.glassdoor.com/Overview/Working-at-iSpot-tv-EI_IE1262491.11,19.htm",
			"https://www.g2.com/products/ispot-tv/reviews"
		],
		"contactPoint": [{
			"@type": "ContactPoint",
			"telephone": "+1-855-477-6888",
			"contactType": "Sales",
			"contactOption": "TollFree",
			"areaServed": "US",
			"availableLanguage": "English",
			"email": "hello@ispot.tv"
		}],
		"address": [{
				"@type": "PostalAddress",
				"addressCountry": "United States",
				"addressRegion": "WA",
				"addressLocality": "Bellevue",
				"postalCode": "98008",
				"streetAddress": "15831 NE 8th Street #100"
			},
			{
				"@type": "PostalAddress",
				"addressCountry": "United States",
				"addressRegion": "NY",
				"addressLocality": "New York",
				"postalCode": "10018",
				"streetAddress": "1333 Broadway Suite 730"
			}
		],
		"email": "hello@ispot.tv",
		"foundingDate": "2009",
		"founders": [{
			"@type": "Person",
			"name": "Sean Muller",
			"image": "https://res-2.cloudinary.com/crunchbase-production/image/upload/c_thumb,h_256,w_256,f_auto,g_faces,z_0.7,q_auto:eco/ltkagzwpqcqxwfjalhfu",
			"url": "https://www.linkedin.com/in/seanmuller/"
		}],
		"funder": [{
			"@type": "Organization",
			"name": "Insight Partners",
			"image": "https://res-3.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco/zyz7mpb1nui5o04itpce",
			"logo": "https://res-3.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco/zyz7mpb1nui5o04itpce",
			"url": "https://www.crunchbase.com/organization/insight-partners"
		}, {
			"@type": "Organization",
			"name": "Madrona Venture Group",
			"image": "https://res-3.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco/v1461021636/akx9xbkm2udyjkipigv2.jpg",
			"logo": "https://res-3.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco/v1461021636/akx9xbkm2udyjkipigv2.jpg",
			"url": "https://www.crunchbase.com/organization/madrona-venture-group"
		}, {
			"@type": "Organization",
			"name": "Peak Opportunity Partners",
			"image": "https://res-2.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco/v1468471844/b2jlvx98frdjaccp4pxr.png",
			"logo": "https://res-2.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco/v1468471844/b2jlvx98frdjaccp4pxr.png",
			"url": "https://www.crunchbase.com/organization/peak-opportunity-partners-2"
		}, {
			"@type": "Organization",
			"name": "TL Ventures",
			"image": "https://res-1.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco/v1397179378/96fec1e290dbd8c9ca05cb9bbd0f3f96.png",
			"logo": "https://res-1.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco/v1397179378/96fec1e290dbd8c9ca05cb9bbd0f3f96.png",
			"url": "https://www.crunchbase.com/organization/tl-ventures"
		}, {
			"@type": "Person",
			"name": "Bryce Stevens",
			"image": "https://res-1.cloudinary.com/crunchbase-production/image/upload/c_thumb,h_256,w_256,f_auto,g_faces,z_0.7,q_auto:eco/v1471319549/w70xwtmyt5zggfl443cr.png",
			"url": "https://www.crunchbase.com/person/bryce-stevens"
		}, {
			"@type": "Person",
			"name": "Howard Love",
			"image": "https://res-5.cloudinary.com/crunchbase-production/image/upload/c_thumb,h_256,w_256,f_auto,g_faces,z_0.7,q_auto:eco/v1469404509/ur0hdos7jmontjxatauf.jpg",
			"url": "https://www.crunchbase.com/person/howard-love"
		}, {
			"@type": "Person",
			"name": "Paul Stahura",
			"image": "https://res-2.cloudinary.com/crunchbase-production/image/upload/c_thumb,h_256,w_256,f_auto,g_faces,z_0.7,q_auto:eco/v1471163883/adxslwp5za6n0p2uke8p.png",
			"url": "https://www.crunchbase.com/person/paul-stahura"
		}]

	}
}
</script>
<meta name="hb-feature" content="feature=injectSDCC"></head>
<body class="page-template page-template-page-pillar page-template-page-pillar-php page page-id-17140 wp-embed-responsive wp-featherlight-captions group-blog">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" width="0" height="0" focusable="false" role="none" style="visibility: hidden; position: absolute; left: -9999px; overflow: hidden;"><defs><filter id="wp-duotone-dark-grayscale"><feColorMatrix color-interpolation-filters="sRGB" type="matrix" values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 " /><feComponentTransfer color-interpolation-filters="sRGB"><feFuncR type="table" tableValues="0 0.49803921568627" /><feFuncG type="table" tableValues="0 0.49803921568627" /><feFuncB type="table" tableValues="0 0.49803921568627" /><feFuncA type="table" tableValues="1 1" /></feComponentTransfer><feComposite in2="SourceGraphic" operator="in" /></filter></defs></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" width="0" height="0" focusable="false" role="none" style="visibility: hidden; position: absolute; left: -9999px; overflow: hidden;"><defs><filter id="wp-duotone-grayscale"><feColorMatrix color-interpolation-filters="sRGB" type="matrix" values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 " /><feComponentTransfer color-interpolation-filters="sRGB"><feFuncR type="table" tableValues="0 1" /><feFuncG type="table" tableValues="0 1" /><feFuncB type="table" tableValues="0 1" /><feFuncA type="table" tableValues="1 1" /></feComponentTransfer><feComposite in2="SourceGraphic" operator="in" /></filter></defs></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" width="0" height="0" focusable="false" role="none" style="visibility: hidden; position: absolute; left: -9999px; overflow: hidden;"><defs><filter id="wp-duotone-purple-yellow"><feColorMatrix color-interpolation-filters="sRGB" type="matrix" values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 " /><feComponentTransfer color-interpolation-filters="sRGB"><feFuncR type="table" tableValues="0.54901960784314 0.98823529411765" /><feFuncG type="table" tableValues="0 1" /><feFuncB type="table" tableValues="0.71764705882353 0.25490196078431" /><feFuncA type="table" tableValues="1 1" /></feComponentTransfer><feComposite in2="SourceGraphic" operator="in" /></filter></defs></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" width="0" height="0" focusable="false" role="none" style="visibility: hidden; position: absolute; left: -9999px; overflow: hidden;"><defs><filter id="wp-duotone-blue-red"><feColorMatrix color-interpolation-filters="sRGB" type="matrix" values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 " /><feComponentTransfer color-interpolation-filters="sRGB"><feFuncR type="table" tableValues="0 1" /><feFuncG type="table" tableValues="0 0.27843137254902" /><feFuncB type="table" tableValues="0.5921568627451 0.27843137254902" /><feFuncA type="table" tableValues="1 1" /></feComponentTransfer><feComposite in2="SourceGraphic" operator="in" /></filter></defs></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" width="0" height="0" focusable="false" role="none" style="visibility: hidden; position: absolute; left: -9999px; overflow: hidden;"><defs><filter id="wp-duotone-midnight"><feColorMatrix color-interpolation-filters="sRGB" type="matrix" values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 " /><feComponentTransfer color-interpolation-filters="sRGB"><feFuncR type="table" tableValues="0 0" /><feFuncG type="table" tableValues="0 0.64705882352941" /><feFuncB type="table" tableValues="0 1" /><feFuncA type="table" tableValues="1 1" /></feComponentTransfer><feComposite in2="SourceGraphic" operator="in" /></filter></defs></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" width="0" height="0" focusable="false" role="none" style="visibility: hidden; position: absolute; left: -9999px; overflow: hidden;"><defs><filter id="wp-duotone-magenta-yellow"><feColorMatrix color-interpolation-filters="sRGB" type="matrix" values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 " /><feComponentTransfer color-interpolation-filters="sRGB"><feFuncR type="table" tableValues="0.78039215686275 1" /><feFuncG type="table" tableValues="0 0.94901960784314" /><feFuncB type="table" tableValues="0.35294117647059 0.47058823529412" /><feFuncA type="table" tableValues="1 1" /></feComponentTransfer><feComposite in2="SourceGraphic" operator="in" /></filter></defs></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" width="0" height="0" focusable="false" role="none" style="visibility: hidden; position: absolute; left: -9999px; overflow: hidden;"><defs><filter id="wp-duotone-purple-green"><feColorMatrix color-interpolation-filters="sRGB" type="matrix" values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 " /><feComponentTransfer color-interpolation-filters="sRGB"><feFuncR type="table" tableValues="0.65098039215686 0.40392156862745" /><feFuncG type="table" tableValues="0 1" /><feFuncB type="table" tableValues="0.44705882352941 0.4" /><feFuncA type="table" tableValues="1 1" /></feComponentTransfer><feComposite in2="SourceGraphic" operator="in" /></filter></defs></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" width="0" height="0" focusable="false" role="none" style="visibility: hidden; position: absolute; left: -9999px; overflow: hidden;"><defs><filter id="wp-duotone-blue-orange"><feColorMatrix color-interpolation-filters="sRGB" type="matrix" values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 " /><feComponentTransfer color-interpolation-filters="sRGB"><feFuncR type="table" tableValues="0.098039215686275 1" /><feFuncG type="table" tableValues="0 0.66274509803922" /><feFuncB type="table" tableValues="0.84705882352941 0.41960784313725" /><feFuncA type="table" tableValues="1 1" /></feComponentTransfer><feComposite in2="SourceGraphic" operator="in" /></filter></defs></svg>

<noscript>
    <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PWQKWB5" height="0" width="0" style="display:none;visibility:hidden"></iframe>
</noscript>
<div class="notification">
<div class="notification__container">Learn the secrets to maximizing Super Bowl Ad impact. <a href="https://on.ispot.tv/3SutKGC" data-qa="notification_link">Register Now></a></div>
</div>
<div class="wrapper">
<header class="hdr">
<nav class="hdr__nav">
<ul class="hdr__ul hdr__main">
<li class="hdr__li hdr__logo">
<a href="/">
<span class="sr-only">iSpot.tv Logo</span>
<svg class="logo" aria-labelledby="logoTitle6714944 logoDesc8183036" role="img" height="36" width="132" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 77 21">
<title id="logoTitle6714944">Link to iSpot.tv Homepage</title>
<desc id="logoDesc8183036">Displays the iSpot.tv logo and links to Link to the homepage</desc>
<path class="logo__text" fill="#000" d="M1 2.9c-.4-.3-.5-.7-.5-1.1 0-.4.1-.8.5-1.1.3-.3.7-.5 1.1-.5.4 0 .8.2 1.1.5.4.3.5.7.5 1.1 0 .4-.2.8-.5 1.1s-.7.5-1.1.5c-.4 0-.8-.1-1.1-.5zm2.4 14.6h-2.6v-12.1h2.6v12.1zm7.4-13.9c-.8 0-1.4.2-1.9.5s-.8.8-.8 1.5c0 .6.3 1.1.8 1.5.5.3 1.6.7 3.2 1.1 1.6.4 2.9.9 3.7 1.7.8.7 1.2 1.8 1.2 3.2s-.5 2.5-1.6 3.4c-1 .9-2.4 1.3-4.1 1.3-2.5 0-4.7-.9-6.6-2.6l1.7-2c1.6 1.4 3.3 2.1 5 2.1.9 0 1.6-.2 2.1-.6.5-.4.8-.9.8-1.5s-.2-1.1-.7-1.4c-.6-.5-1.4-.8-2.6-1.1-1.1-.2-2-.5-2.6-.7-.6-.3-1.2-.6-1.7-1-.9-.7-1.4-1.8-1.4-3.2 0-1.5.5-2.6 1.6-3.4 1.1-.8 2.4-1.2 4-1.2 1 0 2 .2 3 .5s1.9.8 2.6 1.4l-1.4 2c-.5-.4-1.1-.8-1.9-1-.8-.3-1.6-.5-2.4-.5zm14.2 1.6c1.6 0 3 .6 4.2 1.7 1.2 1.1 1.7 2.6 1.7 4.5s-.6 3.4-1.7 4.6c-1.1 1.2-2.5 1.8-4 1.8s-2.9-.7-4.1-2v5.3h-2.6v-15.7h2.6v2.1c1-1.6 2.3-2.3 3.9-2.3zm-3.9 6.2c0 1.2.3 2.1 1 2.8.7.7 1.5 1.1 2.6 1.1 1 0 1.9-.4 2.6-1.1.7-.7 1.1-1.7 1.1-2.8 0-1.2-.4-2.1-1.1-2.9-.7-.8-1.6-1.2-2.6-1.2s-1.9.4-2.6 1.2c-.7.8-1 1.8-1 2.9zm27.2-4v6.1c0 .6.2 1 .5 1.4.3.3.7.5 1.3.5.5 0 1.1-.3 1.6-.8l1 1.8c-.9.8-1.9 1.2-3 1.2s-2-.4-2.8-1.1c-.8-.8-1.2-1.8-1.2-3v-11.9h2.6v3.8h3.2v2h-3.2zm6.5 9.8c-.3-.3-.5-.7-.5-1.2s.2-.9.5-1.2c.3-.3.7-.5 1.2-.5s.9.2 1.2.5c.3.3.5.7.5 1.2s-.2.9-.5 1.2c-.3.3-.7.5-1.2.5s-.9-.2-1.2-.5zm19.3-11.8l-3.7 9.2-3.7-9.2h-5v-3.8h-2.6v11.9c0 1.3.4 2.3 1.2 3 .8.8 1.7 1.1 2.8 1.1 1.1 0 2.1-.4 3-1.2l-1-1.8c-.5.5-1 .8-1.6.8-.5 0-1-.2-1.3-.5-.3-.3-.5-.8-.5-1.4v-6.1h3.2l4 10.1h2.9l4.9-12.1h-2.6z"></path>
<path class="logo__mark-bg" fill="transparent" d="M38.3 5.3c-3.4 0-6.2 2.8-6.2 6.2 0 3.4 2.8 6.2 6.2 6.2 3.4 0 6.2-2.8 6.2-6.2 0-3.4-2.8-6.2-6.2-6.2z"></path>
<path class="logo__mark" fill="#77bd22" d="M38.3 5.3c-3.4 0-6.2 2.8-6.2 6.2 0 3.4 2.8 6.2 6.2 6.2 3.4 0 6.2-2.8 6.2-6.2 0-3.4-2.8-6.2-6.2-6.2zm-.8 9.4l-1.1.7c-.3.2-.6 0-.6-.4v-7c0-.3.3-.6.6-.4.1 0 .5.3 1.1.7v6.4zm2.4-1.5c-.6.4-1.2.7-1.7 1.1v-5.6c.5.3 1.2.7 1.7 1.1v3.4zm2.2-1.3l-1.5.9v-2.6l1.5.9c.3.2.3.6 0 .8z"></path>
</svg>
</a>
</li>
<li class="hdr__li hdr__search">
<a href="/search" data-qa="nav_search">
<span class="sr-only">Search iSpot.tv</span>
<svg class="hdr__icon" aria-hidden="true" focusable="false" data-prefix="far" data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg>
<path d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"></path>
</svg> </a>
</li>
<li class="hdr__li hdr__login">
<a href="https://analytics.ispot.tv/dashboard" data-qa="nav_analytics">
<span class="sr-only">Login to iSpot.tv</span>
<svg class="hdr__icon" aria-hidden="true" focusable="false" data-prefix="far" data-icon="user" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
<path d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z" />
</svg> </a>
</li>
<li class="hdr__li hdr__cta">
<a class="hdr__btn btn btn-outline-primary" href="/demo" data-qa="nav_demo_button">Get A Demo</a>
</li>
<li class="hdr__li hdr__toggle hdr__mobile-only">
<a id="m-nav-open" class="js-nav-toggle" href="#" data-target="#navbarMainContent" aria-controls="navbarMainContent" aria-expanded="false" aria-label="Open Navigation">
<span class="sr-only">Open Navigation</span>
<svg class="hdr__icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
<path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
</svg> </a>
<a id="m-nav-close" class="js-nav-toggle" href="#" data-target="#navbarMainContent" aria-controls="navbarMainContent" aria-expanded="false" aria-label="Close Navigation">
<span class="sr-only">Close Navigation</span>
<svg class="hdr__icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512">
<path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path>
</svg> </a>
</li>
<li class="hdr__li hdr__primary">
<div class="sr-only">Navigation</div>
<ul class="hdr__ul">
<li id="nav-solutions" class="hdr__li">
<a href="#" id="navbarSolutions" data-ispot="accordian" role="button" aria-haspopup="true" aria-expanded="false" data-qa="nav_solutions">
Solutions
</a>
<div class="hdr__billboard">
<dl aria-labelledby="navbarSolutions">
<dt>
<div class="hdr__menu-title"><span class="text-gradient">Solutions</span></div>
<a class="hdr__dt-action" href="/solutions" data-qa="nav_solutions_solutions_overview">
Overview <svg width="17px" height="11px" viewBox="0 0 17 11" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<title>Arrow</title>
<g id="Stylesheet" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linejoin="round">
<g id="Demo-CTA-Copy-2" transform="translate(-93.000000, -39.000000)" stroke="#6EC122" stroke-width="2">
<g id="Group-2" transform="translate(94.000000, 40.000000)">
<polyline id="Path-3" points="8.38935361 0 15 4.99498416 8 9"></polyline>
<line x1="13.8598407" y1="4.75" x2="0" y2="4.5" id="Line"></line>
</g>
</g>
</g>
</svg> </a>
</dt>
<dd>
<ul class="hdr__ul hdr__ul-grid">
<li class="hdr__li hide-desktop">
<a class="hdr__sub-item" href="/solutions" data-qa="nav_solutions_solutions_overview">Overview</a>
</li>
<li class="hdr__li">
<a class="hdr__sub-item" href="/solutions/brands" data-qa="nav_solutions_brands">Brands</a>
</li>
<li class="hdr__li">
<a class="hdr__sub-item" href="/solutions/networks" data-qa="nav_solutions_networks">Networks</a>
</li>
<li class="hdr__li">
<a class="hdr__sub-item" href="/solutions/agencies" data-qa="nav_solutions_agencies">Agencies</a>
</li>
</ul>
</dd>
</dl>
</div>
<div class="hdr__billboard-background"></div>
</li>
<li id="nav-products" class="hdr__li">
<a href="#" id="navProducts" data-ispot="accordian" role="button" aria-haspopup="true" aria-expanded="false" data-qa="nav_products">
Products
</a>
<div class="hdr__billboard">
<dl aria-labelledby="navProducts">
<dt>
<div class="hdr__menu-title"><span class="text-gradient">Products</span></div>
<a class="hdr__dt-action" href="/products">
Overview <svg width="17px" height="11px" viewBox="0 0 17 11" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<title>Arrow</title>
<g id="Stylesheet" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linejoin="round">
<g id="Demo-CTA-Copy-2" transform="translate(-93.000000, -39.000000)" stroke="#6EC122" stroke-width="2">
<g id="Group-2" transform="translate(94.000000, 40.000000)">
<polyline id="Path-3" points="8.38935361 0 15 4.99498416 8 9"></polyline>
<line x1="13.8598407" y1="4.75" x2="0" y2="4.5" id="Line"></line>
</g>
</g>
</g>
</svg> </a>
</dt>
<dd>
<ul class="hdr__ul hdr__ul-grid">
<li class="hdr__li hide-desktop">
<a class="hdr__sub-item" href="/products" data-qa="nav_products_products_overview">Overview</a>
</li>
<li class="hdr__li">
<a class="hdr__sub-title hdr__sub-item" href="/products/creative-testing" data-qa="nav_products_creative_assessment">Creative Assessment</a>
<ul>
<li><a class="hdr__sub-item" href="/products/creative-testing/pre-market" data-qa="nav_products_pre_market_ad_testing">Pre-Market Ad Testing</a></li>
<li><a class="hdr__sub-item" href="/products/creative-testing/in-market" data-qa="nav_products_in_market_benchmarking">In-Market Benchmarking</a></li>
<li><a class="hdr__sub-item" href="/products/creative-testing/hispanic" data-qa="nav_products_hispanic_ad_testing">Hispanic Ad Testing</a></li>
</ul>
</li>
<li class="hdr__li">
<a class="hdr__sub-title hdr__sub-item" href="/products/measurement" data-qa="nav_products_measurement">Measurement</a>
<ul>
<li><a class="hdr__sub-item" href="/products/measurement/media" data-qa="nav_products_media_measurement">Media Measurement</a></li>
<li><a class="hdr__sub-item" href="/products/measurement/competitive" data-qa="nav_products_competitive_intelligence">Competitive Intelligence</a></li>
<li><a class="hdr__sub-item" href="/products/measurement/attention" data-qa="nav_products_attention_analytics">Attention Analytics</a></li>
<li><a class="hdr__sub-item" href="/products/measurement/unified" data-qa="nav_products_unified_measurement">Unified Measurement</a></li>
<li><a class="hdr__sub-item" href="/products/measurement/streaming-measurement" data-qa="nav_products_streaming_measurement">Streaming Measurement</a></li>
<li><a class="hdr__sub-item" href="/products/measurement/out-of-home" data-qa="nav_products_out_of_home_tv_measurement">Out of Home</a></li>
<li><a class="hdr__sub-item" href="/products/measurement#brand-guidelines" data-qa="nav_products_brand_guidelines">Brand Guidelines</a></li>
</ul>
</li>
<li class="hdr__li">
<a class="hdr__sub-title hdr__sub-item" href="/products/attribution" data-qa="nav_products_attribution">Attribution</a>
<ul>
<li><a class="hdr__sub-item" href="/products/attribution/conversions" data-qa="nav_products_tv_conversions">TV Conversions</a></li>
<li><a class="hdr__sub-item" href="/products/attribution/lift" data-qa="nav_products_incremental_lift">Incremental Lift</a></li>
<li><a class="hdr__sub-item" href="/products/attribution#unified-measurement" data-qa="nav_products_cross_channel_attribution">Cross-Channel Attribution</a></li>
</ul>
</li>
<li class="hdr__li">
<a class="hdr__sub-title hdr__sub-item" href="/products/analytics" data-qa="nav_products_advanced_analytics">Advanced Analytics</a>
<ul>
<li><a class="hdr__sub-item" href="/products/analytics/segments" data-qa="nav_products_segment_analytics">Segment Analytics</a></li>
<li><a class="hdr__sub-item" href="/products/analytics/exposure" data-qa="nav_products_exposure_level_ad_data">Exposure Level Ad Data</a></li>
<li><a class="hdr__sub-item" href="/products/analytics/custom" data-qa="nav_products_custom_analytics">Custom Analytics</a></li>
</ul>
</li>
</ul>
</dd>
</dl>
</div>
<div class="hdr__billboard-background"></div>
</li>
<li id="nav-ad-center" class="hdr__li">
<a href="#" id="navbarAdCenter" data-ispot="accordian" role="button" aria-haspopup="true" aria-expanded="false" data-qa="nav_ad_center">
Ad Center
</a>
<div class="hdr__billboard">
<dl aria-labelledby="navbarAdCenter">
<dt>
<div class="hdr__menu-title"><span class="text-gradient">Ad Center</span></div>
</dt>
<dd>
<ul class="hdr__ul hdr__ul-grid">
<li class="hdr__li">
<a class="hdr__sub-item" href="/ad/top-commercials" data-qa="nav_ad_center_top_ads">Top Ads</a>
</li>
<li class="hdr__li">
<a class="hdr__sub-item" href="/ad/top-spenders" data-qa="nav_ad_center_top_spenders">Top Spenders</a>
</li>
<li class="hdr__li">
<a class="hdr__sub-item" href="/browse" data-qa="nav_ad_center_browse_tv_ads">Browse TV Ads</a>
</li>
<li class="hdr__li">
<a class="hdr__sub-item" href="/events/super-bowl-commercials" data-qa="nav_super_bowl">Super Bowl 2024</a>
</li>
<li class="hdr__li ">
<a class="hdr__sub-item" href="/fifa-world-cup/2022" data-qa="nav_qatar_2022">Qatar 2022 FIFA World Cup</a>
</li>
<li class="hdr__li ">
<a class="hdr__sub-item" href="https://www2.ispot.tv/2023-NFL-TV-Ad-Insights-Center" data-qa="nav_ad_center_2023_24_nfl_season">2023-24 NFL Season</a>
</li>
<li class="hdr__li ">
<a class="hdr__sub-item" href="/olympics/2022-beijing-winter-olympics" data-qa="nav_ad_center_beijing_2022_olympics">Beijing 2022 Olympics</a>
</li>
</ul>
</dd>
</dl>
</div>
<div class="hdr__billboard-background"></div>
</li>
<li id="nav-resources" class="hdr__li">
<a href="#" id="navbarResources" data-ispot="accordian" role="button" aria-haspopup="true" aria-expanded="false" data-qa="nav_resources">
Resources
</a>
<div class="hdr__billboard">
<dl aria-labelledby="navbarResources">
<dt>
<div class="hdr__menu-title"><span class="text-gradient">Resources</span></div>
<a class="hdr__dt-action" href="/hub/resources/" data-qa="nav_resources_all">
See All <svg width="17px" height="11px" viewBox="0 0 17 11" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<title>Arrow</title>
<g id="Stylesheet" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linejoin="round">
<g id="Demo-CTA-Copy-2" transform="translate(-93.000000, -39.000000)" stroke="#6EC122" stroke-width="2">
<g id="Group-2" transform="translate(94.000000, 40.000000)">
<polyline id="Path-3" points="8.38935361 0 15 4.99498416 8 9"></polyline>
<line x1="13.8598407" y1="4.75" x2="0" y2="4.5" id="Line"></line>
</g>
</g>
</g>
</svg> </a>
</dt>
<dd>
<ul class="hdr__ul hdr__ul-grid">
<li class="hdr__li hide-desktop">
<a class="hdr__sub-item" href="/hub/resources/" data-qa="nav_resources_all">See All</a>
</li>
<li class="hdr__li">
<a class="hdr__sub-item" href="/tv-data-hub" data-qa="nav_tv_data_hub">TV Data Hub</a>
</li>
<li class="hdr__li">
<a class="hdr__sub-item" href="/hub/resources/free-reports/" data-qa="nav_resources_reports">Reports</a>
</li>
<li class="hdr__li">
<a class="hdr__sub-item" href="/hub/resources/case-studies/" data-qa="nav_resources_case_studies">Case Studies</a>
</li>
<li class="hdr__li">
<a class="hdr__sub-item" href="/hub/" data-qa="nav_resources_blog">Blog</a>
</li>
<li class="hdr__li">
<a class="hdr__sub-item" href="/hub/events/" data-qa="nav_resources_events">Events</a>
</li>
<li class="hdr__li">
<a class="hdr__sub-item" href="/hub/resources/playbooks/" data-qa="nav_resources_playbooks">Playbooks</a>
</li>
<li class="hdr__li">
<a class="hdr__sub-item" href="https://www.tvdisrupt.com/2023" data-qa="nav_resources_tv_disrupt">TV Disrupt 2023</a>
</li>
</ul>
</dd>
</dl>
</div>
<div class="hdr__billboard-background"></div>
</li>
<li id="nav-about-us" class="hdr__li">
<a href="#" id="navbarAbout" data-ispot="accordian" role="button" aria-haspopup="true" aria-expanded="false" data-qa="nav_about_us">
About
</a>
<div class="hdr__billboard">
<dl aria-labelledby="navbarAbout">
<dt>
<div class="hdr__menu-title"><span class="text-gradient">About</span></div>
</dt>
<dd>
<ul class="hdr__ul hdr__ul-grid">
<li class="hdr__li"><a class="hdr__sub-item" href="/about" data-qa="nav_about_us_about_ispot">About iSpot</a></li>
<li class="hdr__li"><a class="hdr__sub-item" href="/about/leadership" data-qa="nav_about_us_leadership">Leadership</a></li>
<li class="hdr__li"><a class="hdr__sub-item" href="/about/customers" data-qa="nav_about_us_customers">Customers</a></li>
<li class="hdr__li"><a class="hdr__sub-item" href="/about/partners" data-qa="nav_about_us_partners">Partners</a></li>
<li class="hdr__li"><a class="hdr__sub-item" href="/about/careers" data-qa="nav_about_us_careers">Careers</a></li>
<li class="hdr__li"><a class="hdr__sub-item" href="/hub/press/" data-qa="nav_press_center">Press Center</a></li>
<li class="hdr__li"><a class="hdr__sub-item" href="/contact-us" data-qa="nav_about_us_contact_us">Contact Us</a></li>
</ul>
</dd>
</dl>
</div>
<div class="hdr__billboard-background"></div>
</li>
<li id="nav-super-bowl" class="hdr__li">
<a href="#" id="navbarSuperBowl" data-ispot="accordian" role="button" aria-haspopup="true" aria-expanded="false" data-qa="nav_sb">
Super Bowl
</a>
<div class="hdr__billboard">
<dl aria-labelledby="navbarSuperBowl">
<dt>
<div class="hdr__menu-title"><span class="text-gradient">Super Bowl</span></div>
</dt>
<dd>
<ul class="hdr__ul hdr__ul-grid">
<li class="hdr__li"><a class="hdr__sub-item" href="https://on.ispot.tv/website-banner-ad-age-webinar" data-qa="nav_sb_post_game">Post-Game Webinar</a></li>
<li class="hdr__li"><a class="hdr__sub-item" href="/events/super-bowl-commercials" data-qa="nav_sb_ad_center">Super Bowl Ad Center</a></li>
<li class="hdr__li"><a class="hdr__sub-item" href="/hub/resources/free-reports/2022-nfl-regular-season-report/" data-qa="nav_nfl_reg_season_report">NFL Regular Season TV Ad Report</a></li>
<li class="hdr__li"><a class="hdr__sub-item" href="/hub/resources/free-reports/2023-nfl-playoffs-tv-ad-report/" data-qa="nav_nfl_playoff_ad_report">NFL Playoff TV Ad Report</a></li>
<li class="hdr__li"><a class="hdr__sub-item" href="/super-bowl-final-report" data-qa="nav_sb_ad_report">Super Bowl TV Ad Report</a></li>
<li class="hdr__li"><a class="hdr__sub-item" href="/super-bowl-vip" data-qa="nav_sb_vip_center">Super Bowl VIP Ad Center</a></li>
<li class="hdr__li"><a class="hdr__sub-item" href="/hub/resources/free-reports/super-bowl-lvii-creative-analysis/" data-qa="nav_sb_creative_analysis_report">Super Bowl Creative Analysis Report</a></li>
</ul>
</dd>
</dl>
</div>
<div class="hdr__billboard-background"></div>
</li>
<li class="hdr__li hdr__mobile-only">
<a href="/demo" data-qa="nav_demo_button">Get A Demo</a>
</li>
<li class="hdr__li hdr__mobile-only">
<a href="https://analytics.ispot.tv/dashboard" data-qa="nav_analytics_icon">Login</a>
</li>
</ul> </li>
</ul>
</nav>
</header>
<main>
<div class="clear"></div>
</header> 
<div id="content" class="site-content">
<main id="main" class="site-main" role="main">

<div class="container pillar--container__top">
<div class="row pb-5">
<div class="col-12 pb-5">
<h1 class="font-weight-600 text-white text-center pillar-title">TV Currency &#038; Measurement</h1>
</div>
</div>
</div>
<div class="pillar--container pt-3 pb-5">
<div class="container">
<div class="pillar--breadcrumb pb-3"><span class="pillar--breadcrumb__return"><a href="/">Home</a><span class="px-2">/</span></span><span class="pillar--breadcrumb__return"><span class="text-gradient font-weight-600">TV Currency &#038; Measurement</span></span></div>
<article id="post-17140" class="post-17140 page type-page status-publish hentry">
<div class="entry-content">
<div class="row">
<div class="d-none d-lg-block col-lg-4">
<div class="green-bg-wrapper" id="toc-container">
<div class="green-bg py-5 px-4">
<div id="toc">
<h3 class="text-gradient font-weight-bold pb-0 mb-2 toc-title">Table of Contents</h3>
<div class="toc-title-border mb-5"></div>
</div>
</div>
</div>
</div>
<div class="col-12 col-lg-8">
<div class="content" id="body-content">
<p>Advertisers rely on precise measurements to make decisions regarding target demographics and ad spending. Media networks also demand precision when it comes to measurement, as it allows them to accurately value their content and maintain positive relationships with advertising partners. Both sides of the advertising exchange need accurate data to make decisions, but the introduction of cross-platform streaming and other technological advancements has made it more difficult for traditional measurement providers to deliver.</p>
<p>If your role involves any type of TV marketing, settle in to learn more about the differences between TV ad measurement and TV currency. We&#8217;ll also explain some of the modern challenges associated with measuring advertising performance and describe how iSpot.tv helps its partners break through these obstacles to ultimately improve the viewing experience.</p>
<div class="pt-4">
<h2 class="d-none d-lg-block text-gradient collapsible-header toc">What is TV Ad Measurement?</h2>
<div class="accordion-content">
<a href="#" id="WhatisTVAdMeasurement" data-ispot="tocHeaders" role="button" aria-haspopup="true" aria-expanded="false" class="d-block d-lg-none accordion--header"><i class="far fa-chevron-down mr-3"></i>What is TV Ad Measurement?</a>
<div class="accordion-collapsible pt-3">
<div class="acf-innerblocks-container">
<p>Although the terms TV ad measurement and TV currency are often used interchangeably, they&#8217;re not quite the same thing. TV ad measurement is both a tool for measuring advertising success and a metric used to determine the effectiveness of TV advertisements. The term &#8220;TV measurement&#8221; is broad, as it encompasses many TV advertising metrics, including audience size, unique visitors, CPM and reach. To make it easier to distinguish TV measurement as a tool from TV measurement as a metric, think of a company such as iSpot.tv or Nielsen as the tool used to measure valuable advertising metrics.</p>
</div>
</div>
</div>
</div>
<div class="pt-4">
<h2 class="d-none d-lg-block text-gradient collapsible-header toc">What is TV Currency?</h2>
<div class="accordion-content">
<a href="#" id="WhatisTVCurrency" data-ispot="tocHeaders" role="button" aria-haspopup="true" aria-expanded="false" class="d-block d-lg-none accordion--header"><i class="far fa-chevron-down mr-3"></i>What is TV Currency?</a>
<div class="accordion-collapsible pt-3">
<div class="acf-innerblocks-container">
<p>TV currency is a desired value, agreed upon by advertising buyers and sellers, based on a single metric. This agreed-upon metric is identified through TV measurement efforts and is a function of specific outcomes.</p>
<p>This all may sound a bit dense, so let’s work with some examples. Consider a campaign which, by its terms, must reach 25 million men aged 25-54 or else the network owes media make-goods to the brand’s agency. Because reach is the metric being transacted on here, this is an example of currency. Now, let’s provide additional context here and say that 9% of the 25M ad impressions delivered to men aged 25-54 led to a web conversion event within 30 days of exposure. Here, we’d be talking about measurement, since the performance metric being discussed is <em>associated</em> with the one being transacted one (again, reach).</p>
<p>Now that you know the definitions of TV ad measurement and TV currency, it&#8217;s easy to see why so many people confuse the two terms. Although they&#8217;re not the same thing, they interact constantly. It&#8217;s helpful to think of TV currency as a component of TV ad measurement methodologies — doing so distinguishes the broad nature of measurement from the narrowly defined concept of currency.</p>
<p>You may be most familiar with TV currency options, but in most cases, it&#8217;s more appropriate to use the term media currency instead. This broader term includes radio, websites, social media messages and other forms of media, reinforcing the idea that all advertising exchanges are based on some type of value associated with measurement.</p>
</div>
</div>
</div>
</div>
<div class="pt-4">
<h2 class="d-none d-lg-block text-gradient collapsible-header toc">Modern Challenges of TV Currency &amp; Measurement</h2>
<div class="accordion-content">
<a href="#" id="ModernChallengesofTVCurrencyMeasurement" data-ispot="tocHeaders" role="button" aria-haspopup="true" aria-expanded="false" class="d-block d-lg-none accordion--header"><i class="far fa-chevron-down mr-3"></i>Modern Challenges of TV Currency &amp; Measurement</a>
<div class="accordion-collapsible pt-3">
<div class="acf-innerblocks-container">
<p>For decades, Nielsen was the only game in town when it came to TV advertising measurement. Using a sample of individuals meant to represent the American population, Nielsen produces TV ratings based on audience size and composition. Media companies and advertisers use these ratings to negotiate ad rates and other contract terms. Nielsen&#8217;s sampling method worked fine when viewers had access to a limited number of channels, but advertisers and major networks have become increasingly dissatisfied with Nielsen&#8217;s approach to TV advertising measurement.</p>
<p>One reason industry insiders are so dissatisfied is because it recently came to light that Nielsen has been undercounting viewers in some coveted audience demographics. For example, representatives of the Media Rating Council believe that Nielsen undercounted television viewers between the ages of 18 and 49 by anywhere from 1% to 5% in February 2021. Later that year, the MRC <a href="https://www.forbes.com/sites/kimberleespeakman/2021/09/01/nielsen-tv-rating-services-accreditation-suspended-by-media-rating-council/?sh=25b4d2cc15f7">suspended Nielsen&#8217;s accreditation</a>, leaving media executives and advertisers looking for <a href="https://www.ispot.tv/products/measurement">innovative TV measurement</a> alternatives to help with measuring advertising effectiveness.</p>
<p>Trouble at Nielsen isn&#8217;t the only reason industry professionals are dissatisfied with the current state of ad measurement. Advertisers want to trade on currencies based in valuable business outcomes — think conversion rates and lift. Counting the people who watched a given program just doesn’t give them enough information.</p>
<p>Moreover, it&#8217;s rare to find a household that has just one TV and no other devices. Cross-platform streaming services have been a game-changer for media companies, but it&#8217;s also forcing advertisers and other industry professionals to take a hard look at how they measure advertising effectiveness and determine the value of specific metrics. Unfortunately, cross-platform streaming viewership is difficult to measure, especially when TV networks don&#8217;t know who they can trust for measurement.</p>
<p>As a result, measurement providers and media agencies are now taking a multi-currency approach. This makes it possible for marketers to customize their efforts according to the unique wants and needs of their clients. The benefit for advertisers is that they no longer need to pay for multiple measurement agencies or services.</p>
<div class="pt-4">
<h2 class="d-none d-lg-block text-gradient collapsible-header toc">What Does a Marketplace of Multiple TV Currencies Look Like?</h2>
<div class="accordion-content">
<a href="#" id="WhatDoesaMarketplaceofMultipleTVCurrenciesLookLike" data-ispot="tocHeaders" role="button" aria-haspopup="true" aria-expanded="false" class="d-block d-lg-none accordion--header"><i class="far fa-chevron-down mr-3"></i>What Does a Marketplace of Multiple TV Currencies Look Like?</a>
<div class="accordion-collapsible pt-3">
<div class="acf-innerblocks-container">
<p>A multiple currency ecosystem will open up more options for TV networks and advertisers to transact on the KPIs that matter most. One rating system will no longer rule all of the measurement marketplace. Cross-screen TV ads will be bought and sold based on meaningful metrics aligned to each brand’s unique campaign objectives. The buy and sell sides will mutually benefit from faster insights, more accurate data and greater transparency into ad delivery and results.</p>
<p>Despite these anticipated changes, a better TV future hinges on the actions of today. Media networks and advertisers need to work together to embrace innovative measurement across devices and promote the multiple-currency ecosystem.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="pt-4">
<h2 class="d-none d-lg-block text-gradient collapsible-header toc">Modernizing TV Currency through Measurement Innovation</h2>
<div class="accordion-content">
<a href="#" id="ModernizingTVCurrencythroughMeasurementInnovation" data-ispot="tocHeaders" role="button" aria-haspopup="true" aria-expanded="false" class="d-block d-lg-none accordion--header"><i class="far fa-chevron-down mr-3"></i>Modernizing TV Currency through Measurement Innovation</a>
<div class="accordion-collapsible pt-3">
<div class="acf-innerblocks-container">
<p>A single currency has dominated the TV ecosystem since the median price of a home was around $7,000 dollars. Now, 70 years later, iSpot is working with major TV providers and laying the groundwork for revolutionary TV Upfronts and a new TV landscape where multiple currencies are available for networks, brands, and agencies to transact upon.</p>
<p>The shift to multiple TV currencies is entirely dependent on more innovative measurement.  Beyond leveraging big data to replace legacy TV measurement methods, there are five key areas of measurement innovation required to create the multi-currency system that iSpot is hyper-focused on.</p>
<h2 class="wp-block-heading">5 Areas of TV Measurement Innovation</h2>
<ol type="1">
<li><strong>Cross-screen:</strong> Unifying measurement and attribution across all forms of TV viewing (linear, streaming, OTT, OOH)</li>
<li><strong>Speed:</strong> Delivering real-time insights that fuel optimizations vs. lagging ratings and post-campaign reports</li>
<li><strong>Impact:</strong> Baking outcome-based measurement into currency in a way that is consistent enough to be transacted upon at scale</li>
<li><strong>Ad-first:</strong> Measuring ads independently from programs to unlock deduplicated cross-screen reach and provide reliable, trustworthy data</li>
<li><strong>Attention:</strong> Tracking second-by-second attention and completion rates for TV ads to align with measurement on the digital side</li>
</ol>
</div>
</div>
</div>
</div>
<div class="pt-4">
<h2 class="d-none d-lg-block text-gradient collapsible-header toc">Prepare for TV Currency Transformation With iSpot.tv</h2>
<div class="accordion-content">
<a href="#" id="PrepareforTVCurrencyTransformationWithiSpottv" data-ispot="tocHeaders" role="button" aria-haspopup="true" aria-expanded="false" class="d-block d-lg-none accordion--header"><i class="far fa-chevron-down mr-3"></i>Prepare for TV Currency Transformation With iSpot.tv</a>
<div class="accordion-collapsible pt-3">
<div class="acf-innerblocks-container">
<p>At iSpot, we believe fast, accurate and actionable measurement is essential for new currency and future-proof TV advertising. It&#8217;s the foundation from which networks innovate, keep pace with consumer behavior and prove content value while advertisers maximize cross-screen TV ROAS.</p>
<p>This page features regularly updated insights, resources and news articles on TV currency and measurement that will help you navigate a pivotal year of TV advertising transformation. iSpot.tv regularly highlights its partnerships with major media networks, provides insight into current trends and gives advertisers and other industry professionals actionable tips they can put into practice right away. The result of these non-Nielsen measurements is more effective ad campaigns and better decision-making capabilities at all levels.</p>
</div>
</div>
</div>
</div>
<div class="pt-4">
<h2 class="d-none d-lg-block text-gradient collapsible-header toc">Approaching TV Ad Measurement Mastery</h2>
<div class="accordion-content">
<a href="#" id="ApproachingTVAdMeasurementMastery" data-ispot="tocHeaders" role="button" aria-haspopup="true" aria-expanded="false" class="d-block d-lg-none accordion--header"><i class="far fa-chevron-down mr-3"></i>Approaching TV Ad Measurement Mastery</a>
<div class="accordion-collapsible pt-3">
<div class="acf-innerblocks-container">
<p>NBCU selected iSpot out of more than 120 companies to be the company’s<a href="https://together.nbcuni.com/insights/measurement/nbcuniversal-accelerates-path-to-alternative-currencies-bringing-forward-ispot-tv/"> first alternative measurement provider</a>, leading into the 2022 Upfront season. iSpot received top marks across all three of the “Value Variables” NBCU analyzed to determine the readiness of a measurement partner to bring forward cross-platform TV measurement:</p>
<ol type="1">
<li>Completeness of solution&nbsp;</li>
<li>Ability to Deliver&nbsp;</li>
<li>Cross-platform currency readiness</li>
</ol>
<p>The six-month-long industry evaluation was a massive due diligence endeavor and a giant leap toward better TV currency and future-proof measurement.</p>
<h2 class="wp-block-heading">More About the iSpot-NBCU Relationship</h2>
<p>Always on the lookout for new <a href="https://www.ispot.tv/solutions/networks">network solutions</a> to today&#8217;s measurement challenges, NBCU selected iSpot based on expertise in cross-platform measurement. iSpot has higher annual revenue than any other measurement company, aside from Comscore and Nielsen, and achieved 60% growth in 2021. Approximately half of all advertisers spend more than $100 million annually on U.S. TV advertising and trust iSpot&#8217;s analytics and measurement solutions. As a result, 80% of iSpot revenue comes from television advertisers, and the other 20% comes from media companies and TV networks.</p>
<p>For partners looking for <a href="https://www.ispot.tv/hub/nbcuniversal-accelerates-path-to-alternative-currencies-bringing-forward-ispot-tv-as-first-cross-platform-video-certified-measurement-partner/">TV currency alternatives</a> or better ways to measure TV advertising effectiveness, iSpot offers the following:</p>
<ul>
<li>Conversion analytics for both online and offline purchase data</li>
<li>Media measurement, including impressions, airings and estimated spending</li>
<li>Assessment of the emotional impact of a brand&#8217;s creative assets through pre-market ad testing and in-market benchmarking</li>
<li>Unified cross-platform measurement, including measurements for digital and linear campaigns</li>
<li>Ability to integrate iSpot data with other third-party service providers to give advertisers a more complete picture of ad effectiveness</li>
</ul>
<p>As the <a href="https://www.ispot.tv/hub/a-new-era-of-tv-measurement-and-currency-heres-what-you-missed-at-this-years-tv-disrupt/">future of TV currency and measurement</a>, iSpot offers a premium video measurement solution known as Unified Measurement, which gives advertisers access to these key features and benefits:</p>
<ul>
<li>Unified reporting that&#8217;s ready to go much faster than the reporting options offered by other service providers; reduced lag time helps our partners make better decisions</li>
<li>An ad tracking pixel, that&#8217;s already approved for more than 300 digital publishers, which provides valuable, in-depth user data via the user’s IPv4 address</li>
<li>Instant capture of impressions when they land on CTV and linear screens</li>
<li>Demographic integration into the Unified Measurement platform, giving partners access to additional insights via data at the individual level and making it easier to assess advertising effectiveness</li>
<li>Tools for tracking cross-screen TV ads</li>
</ul>
<p>iSpot also has multiple identity partners, including Adobe, TransUnion, Experian, Epsilon and Neustar, giving advertisers access to highly accurate first-party and third-party data. Shifting focus from traditional TV ratings to cross-platform measurement makes it easier for iSpot partners to identify winning strategies and manage their TV ad budgets effectively.</p>
</div>
</div>
</div>
</div>
<div class="pt-4">
<h2 class="d-none d-lg-block text-gradient collapsible-header toc">TV Currency and Measurement Resources</h2>
<div class="accordion-content">
<a href="#" id="TVCurrencyandMeasurementResources" data-ispot="tocHeaders" role="button" aria-haspopup="true" aria-expanded="false" class="d-block d-lg-none accordion--header"><i class="far fa-chevron-down mr-3"></i>TV Currency and Measurement Resources</a>
<div class="accordion-collapsible pt-3">
<div class="acf-innerblocks-container">
<p><strong>BLOG:</strong> <strong>NBCU Commits to iSpot as Currency</strong></p>
<p>Read more about <a href="https://www.ispot.tv/hub/nbcu-makes-ispot-first-nationally-certified-measurement-partner-commits-to-using-ispot-as-currency-for-upfront-season/">NBCU’s certification of iSpot</a> as the first measurement company for use as currency in the purchasing of national advertising campaigns.</p>
<p><strong>BLOG: How New TV Network Collaboration Can Benefit Advertisers</strong></p>
<p>Discover how the collaboration of new TV networks and the<a href="https://www.ispot.tv/hub/how-new-tv-network-collaboration-can-benefit-advertisers/" data-type="URL" data-id="https://www.ispot.tv/hub/how-new-tv-network-collaboration-can-benefit-advertisers/"> formation of Joint Industry Council (JIC)</a> can benefit advertisers like you.</p>
<p><strong>REPORT:</strong> <strong>2022 Winter Olympics</strong></p>
<p>Get a look under the hood at the modern measurement that fueled NBCU and iSpot’s <a href="https://www.v-net.tv/2022/02/10/nbcuniversal-gives-advertisers-new-levels-of-measurement-transparency-in-olympics-pilot/">alternative currency pilot</a> during the 2022 Winter Games.</p>
<p><strong>NEWS:</strong> <strong>iSpot Leads $16 Million Investment in TVision Insights</strong></p>
<p>Learn how <a href="https://www.ispot.tv/hub/ispot-leads-16-million-investment-in-tvision-insights-to-expand-cross-platform-tv-currency-capabilities-evolve-streaming-transparency/" data-type="URL" data-id="https://www.ispot.tv/hub/ispot-leads-16-million-investment-in-tvision-insights-to-expand-cross-platform-tv-currency-capabilities-evolve-streaming-transparency/">iSpot&#8217;s investment in TVision Insights</a> will help advertisers measure the effectiveness of their ads across all devices and platforms, including streaming services, by providing data on viewer engagement and attention.</p>
<p><strong>CURRENCY UPDATE:</strong> <strong>CTV Verification Initiative</strong></p>
<p>Read more on <a href="https://www.ispot.tv/hub/currency-update-ctv-verification-initiative/" data-type="URL" data-id="https://www.ispot.tv/hub/currency-update-ctv-verification-initiative/">iSpot&#8217;s CTV verification initiative</a> to provide a reliable way for advertisers to measure the effectiveness of their ads on connected TV platforms.&nbsp;</p>
<p><strong>VIDEO:</strong> <strong>Wayfair TV Disrupt; Alternative Currency in Action</strong></p>
<p>Hear directly from the Head of TV Marketing how <a href="https://www.youtube.com/watch?v=pehiZZjcl0U" data-type="URL" data-id="https://www.youtube.com/watch?v=pehiZZjcl0U">Wayfair is refining their strategy based</a> on key takeaways from NBCU’s test-and-learn pilot.</p>
<p><strong>VIDEO:</strong> <strong>TV Currency of Today and Tomorrow from a Network Perspective</strong></p>
<p>Get the<a href="https://www.youtube.com/watch?v=LMrygvUkJn4&amp;t=950s" data-type="URL" data-id="https://www.youtube.com/watch?v=LMrygvUkJn4&amp;t=950s"> network perspective on today’s burgeoning multi-currency TV marketplace</a> in this thought-provoking panel moderated by Tracey Scheppach, CEO of Matter More Media. Learn how WarnerMedia and Paramount are approaching the vetting of alternative currencies.</p>
</div>
</div>
</div>
</div>
<div class="pt-4">
<h2 class="d-none d-lg-block text-gradient collapsible-header toc">TV Currency in the News</h2>
<div class="accordion-content">
<a href="#" id="TVCurrencyintheNews" data-ispot="tocHeaders" role="button" aria-haspopup="true" aria-expanded="false" class="d-block d-lg-none accordion--header"><i class="far fa-chevron-down mr-3"></i>TV Currency in the News</a>
<div class="accordion-collapsible pt-3">
<div class="acf-innerblocks-container">
<ul>
<li><a href="https://www.marketingdive.com/news/what-the-super-bowl-and-olympics-taught-nbcuniversal-about-the-new-era-of-m/619223/"><strong>MarketingDive</strong></a><strong>:</strong> What the Super Bowl and Olympics taught NBCUniversal about the new era of measurement</li>
<li><strong><a href="https://www.forbes.com/sites/bradadgate/2023/03/17/media-audience-measurement-committee-includes-premium-video-only/" data-type="URL" data-id="https://www.forbes.com/sites/bradadgate/2023/03/17/media-audience-measurement-committee-includes-premium-video-only/">Forbes</a>:</strong> Media Audience Measurement Committee Includes Premium Video Providers Only</li>
<li><a href="https://variety.com/2022/tv/news/ispot-acquires-tunity-out-of-home-measurement-1235193868/"><strong>Variety</strong></a><strong>:</strong> iSpot Acquires Tunity in Bid to Deliver New Measurement of Out of Home Audiences</li>
<li><a href="https://www.nexttv.com/news/the-front-runner-how-ispot-became-a-favorite-to-claim-nielsens-measurement-crown"><strong>NextTV</strong></a>: The Front-Runner: How iSpot Became a Favorite To Claim Nielsen’s Measurement Crown</li>
<li><a href="https://www.mediapost.com/publications/article/371612/simulmedia-adds-measurement-partners-with-data-gua.html?edition=125438"><strong>MediaPost</strong></a><strong>:</strong> Simulmedia Adds Measurement Partners with Data Guarantees for its TV+ Buying Platform</li>
<li><a href="https://www.wsj.com/articles/nbcuniversal-names-ispot-tv-as-partner-in-new-approach-to-measurement-11642074421#:~:text=It's%20Called%20Streaming.,-The%20streaming%20wars&amp;text=Appeared%20in%20the%20January%2014,'"><strong>The Wall Street Journal</strong></a><strong>:</strong> NBCUniversal Names iSpot.tv as Partner in New Approach to Measurement</li>
<li><a href="https://www.nexttv.com/news/nbcu-puts-ispot-in-lead-as-it-evaluates-measurement-companies"><strong>NextTV</strong></a><strong>:</strong> NBCU Puts iSpot in Lead as It Evaluates Measurement Companies</li>
<li><a href="https://adage.com/article/media/nielsen-may-ditch-overnight-ratings-new-measurement-service/2399356"><strong>AdAge</strong></a><strong>:</strong> Nielsen may ditch overnight ratings with new measurement service</li>
<li><a href="https://www.adweek.com/convergent-tv/nbcu-winter-olympics-ad-measurement-test-with-ispot-tv/"><strong>Adweek</strong></a><strong>:</strong> NBCU Details Winter Olympics Ad Measurement Test With iSpot.tv to Fix ‘Broken’ System</li>
<li><a href="https://deadline.com/2022/02/nbc-releases-initial-beijing-olympics-viewership-data-most-streamed-winter-olympics-day-ever-1234927500/"><strong>Deadline</strong></a><strong>:</strong> ​​NBC Releases Initial Beijing Olympics Viewership Data; Most-Streamed Winter Olympics Day Ever</li>
<li><a href="https://www.adexchanger.com/digital-tv/how-measuring-the-summer-olympics-won-ispot-the-nbcu-alternate-currency-test/"><strong>AdExchanger</strong></a><strong>:</strong> ​​How Measuring the Summer Olympics Won iSpot the NBCU Alternate Currency Test</li>
<li><a href="https://www.nexttv.com/news/nbcu-touts-new-metrics-for-ads-during-olympic-games"><strong>Broadcasting + Cable</strong></a><strong>:</strong> NBCU Touts New Metrics for Ads During Olympic Games</li>
<li><a href="https://www.adweek.com/convergent-tv/warnermedia-measurement-alternative/"><strong>Adweek</strong></a><strong>:</strong> WarnerMedia Sets Comscore, iSpot.tv and VideoAmp for Its Measurement Alternative</li>
</ul>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</article>
</div>
</div>
</main>
</div>
</main>
<footer class="ftr">
<nav class="ftr__contact">
<div class="ftr__contact-copy">
<div class="ftr__contact-title"><span class="text-gradient">Contact Sales</span></div>
<div>Choose A Better Way To Measure TV ROAS</div>
</div>
<div class="ftr__contact-form">
<form name="getADemoForm" class="get-a-demo js-getADemoForm" action="https://www.ispot.tv/ajax/users/clearbitrisk" method="post">
<input type="hidden" id="csrfToken" class="csrfToken" name="csrfToken" />
<input name="email" type="email" placeholder="Enter Your Email" class="js-getADemoEmail" required>
<button class="btn btn-primary js-getADemoSubmitBtn" name="contact_submit">Get A Demo</button>
<span class="hidden error-text js-getADemoError"></span>
</form>
</div> </nav>
<nav class="ftr__links">
<dl>
<dt>Solutions</dt>
<dd>
<ul>
<li><a href="/solutions" data-qa="footer_nav_solutions_overview">Overview</a></li>
<li><a href="/solutions/brands" data-qa="footer_nav_solutions_brands">Brands</a></li>
<li><a href="/solutions/networks" data-qa="footer_nav_solutions_networks">Networks</a></li>
<li><a href="/solutions/agencies" data-qa="footer_nav_solutions_agency">Agency</a></li>
</ul>
</dd>
</dl> <dl>
<dt>Products</dt>
<dd>
<ul>
<li><a href="/products" data-qa="footer_nav_product_overview">Overview</a></li>
<li><a href="/products/creative-testing" data-qa="footer_nav_creative_assessment">Creative Assessment</a></li>
<li><a href="/products/measurement" data-qa="footer_nav_measurement">Measurement</a></li>
<li><a href="/products/attribution" data-qa="footer_nav_attribution">Attribution</a></li>
<li><a href="/products/analytics" data-qa="footer_nav_analytics">Advanced Analytics</a></li>

</ul>
</dd>
</dl> <dl>
<dt>Ad Center</dt>
<dd>
<ul>
<li><a href="/ad/top-commercials" data-qa="footer_nav_top_ads">Top Ads</a></li>
<li><a href="/ad/top-spenders" data-qa="footer_nav_top_spenders">Top Spenders</a></li>
<li><a href="/browse" data-qa="footer_nav_commercial_catalog">Browse TV Ads</a></li>
<li><a href="/events/super-bowl-commercials" data-qa="footer_nav_super_bowl">Super Bowl 2024</a></li>
<li><a href="/fifa-world-cup/2022" data-qa="footer_nav_qatar_2022">Qatar 2022 FIFA World Cup</a></li>
<li><a href="https://www2.ispot.tv/2023-NFL-TV-Ad-Insights-Center" data-qa="footer_nav_2023_24_nfl_season">2023-24 NFL Season</a></li>
<li><a href="/olympics/2022-beijing-winter-olympics" data-qa="footer_nav_beijing_2022_olympics">Beijing 2022 Olympics</a></li>
</ul>
</dd>
</dl> <dl>
<dt>Resources</dt>
<dd>
<ul>
<li><a href="/hub/resources/" data-qa="footer_nav_resources">All</a></li>
<li><a href="/tv-data-hub" data-qa="footer_nav_tv_data_hub">TV Data Hub</a></li>
<li><a href="/hub/resources/free-reports/" data-qa="footer_nav_reports">Reports</a></li>
<li><a href="/hub/resources/case-studies/" data-qa="footer_nav_case_studies">Case Studies</a></li>
<li><a href="/hub/" data-qa="footer_nav_blog">Blog</a></li>
<li><a href="/hub/events/" data-qa="footer_nav_events">Events</a></li>
<li><a href="/hub/resources/playbooks/" data-qa="footer_nav_playbooks">Playbooks</a></li>
<li><a href="/hub/tv-currency-measurement/" data-qa="footer_nav_tv_currency">TV Currency</a></li>
<li><a href="/hub/tv-advertising/" data-qa="footer_nav_tv_advertising">TV Advertising</a></li>
</ul>
</dd>
</dl> <dl>
<dt>About Us</dt>
<dd>
<ul>
<li><a href="/about" data-qa="footer_nav_about_us">About iSpot</a></li>
<li><a href="/about/customers" data-qa="footer_nav_customers">Customers</a></li>
<li><a href="/about/careers" data-qa="footer_nav_careers">Careers</a></li>
<li><a href="/hub/press/" data-qa="footer_nav_press_center">Press Center</a></li>
<li><a href="/contact-us" data-qa="footer_nav_contact_us">Contact Us</a></li>
<li><a href="/about/partners" data-qa="footer_nav_partners">Partners</a></li>
<li><a href="/demo" data-qa="footer_nav_demo">Get a Demo </a></li>
<li><a href="/pricing" data-qa="footer_nav_pricing">Get Pricing </a></li>
</ul>
</dd>
</dl>
<dl class="ftr__social">
<dt>Follow Us</dt>
<dd>
<ul>
<li>
<a href="https://www.facebook.com/ispottv" target="_blank" rel="noreferrer" data-qa="facebook_icon" aria-label="Facebook Profile">
<svg alt="Facebook Profile" aria-labelledby="facebookTitle facebookDesc" aria-hidden="true" focusable="false" data-icon="facebook" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
<title id="facebookTitle">Link to iSpot.tv Facebook Page</title>
<desc id="facebookDesc">Displays the Facebook logo and links to the iSpot.tv page</desc>
<path fill="currentColor" d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
</svg>
Facebook
</a>
</li>
<li>
<a href="https://twitter.com/ispottv" target="_blank" rel="noreferrer" data-qa="twitter_icon" aria-label="Twitter Profile">
<svg alt="Twitter Profile" aria-labelledby="twitterTitle twitterDesc" aria-hidden="true" focusable="false" data-icon="twitter" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
<title id="twitterTitle">Link to iSpot.tv Twitter Page</title>
<desc id="twitterDesc">Displays the Twitter logo and links to the iSpot.tv page</desc>
<path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
</svg>
Twitter
</a>
</li>
<li>
<a href="https://www.youtube.com/channel/UCeMuA4L9qnyKOsoFqkEDNJA" target="_blank" rel="noreferrer" data-qa="youtube_icon" aria-label="YouTube Profile">
<svg alt="YouTube Profile" aria-labelledby="youTubeTitle youTubeDesc" aria-hidden="true" focusable="false" data-icon="youtube" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
<title id="youTubeTitle">Link to iSpot.tv YouTube Page</title>
<desc id="youTubeDesc">Displays the YouTube logo and links to the iSpot.tv page</desc>
<path fill="currentColor" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
</svg>
YouTube
</a>
</li>
<li>
<a href="https://www.linkedin.com/company/ispottv/" target="_blank" rel="noreferrer" data-qa="linkedin_icon" aria-label="LinkedIn Profile">
<svg alt="LinkedIn Profile" aria-labelledby="linkedInTitle linkedInDesc" focusable="false" data-icon="linkedin-in" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
<title id="linkedInTitle">Link to iSpot.tv LinkedIn Page</title>
<desc id="linkedInDesc">Displays the LinkedIn logo and links to the iSpot.tv page</desc>
<path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
</svg>
LinkedIn
</a>
</li>
<li>
<a href="https://www.instagram.com/ispottv/" target="_blank" rel="noreferrer" data-qa="instagram_icon" aria-label="Instagram Profile">
<svg alt="Instagram Profile" aria-labelledby="instagramTitle instagramDesc" focusable="false" data-icon="instagram" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
<title id="instagramTitle">Link to iSpot.tv Instagram Page</title>
<desc id="instagramDesc">Displays the Instagram logo and links to the iSpot.tv page</desc>
<path fill="currentColor" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
</svg>
Instagram
</a>
</li>
</ul>
</dd>
</dl>
</nav>
<nav class="ftr__ccpa">
<div>
<strong>California Residents</strong>
exercise your rights under the California Consumer Privacy Act <a href="/privacy">here.</a>
</div>
<ul>
<li><a href="/privacy/opt-out">Do Not Sell My Personal Information</a></li>
</ul> </nav>
<nav class="ftr__terms">
<div>
<a href="/agreements/copyright" rel="nofollow" data-qa="footer_nav_copyright">© 2024 iSpot.tv, Inc.</a>
<a href="/agreements" rel="nofollow" data-qa="footer_nav_terms_and_privacy">Terms &amp; Privacy</a>
</div> </nav>
</footer>
</div>
<div id="cookie-consent">
<span>This site uses cookies to provide you with a great user experience.
By using iSpot.tv, you accept our <a href="/agreements/cookie">use of cookies</a>.</span>
<a id="cookie-consent-close-btn" href="#" rel="noreferrer">ACCEPT</a>
<a id="cookie-consent-close-ico" href="#" rel="noreferrer">×</a>
</div>
<script type="text/javascript">
        document.addEventListener("DOMContentLoaded", function(event) {

            // TODO: This belongs in a utils library.
            const createCookie = function (cname, cvalue, exdays) {
                let d = new Date();
                d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
                let expires = 'expires=' + d.toUTCString();
                let host = window.location.hostname;
                document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/;domain=.' + host + ';';
            };

            const cookieConsentAlert = document.getElementById("cookie-consent");

            document.getElementById("cookie-consent-close-ico").addEventListener("click", function(e) {
                e.preventDefault(); 
                createCookie('cookieconsent_status', 'dismiss', 365);
                cookieConsentAlert.classList.add('hidden');
                return;
            });

            document.getElementById("cookie-consent-close-btn").addEventListener("click", function(e) {
                e.preventDefault(); 
                createCookie('cookieconsent_status', 'dismiss', 365);
                cookieConsentAlert.classList.add('hidden');
                return;
            });

        document.getElementById("cookie-consent-close-btn").addEventListener("click", function(e) {
            e.preventDefault(); 
            createCookie('cookieconsent_status', 'dismiss', 365);
            cookieConsentAlert.classList.add('hidden');
            return;
        });

    });
    </script>
<div id="imgModal" class="image--modal modal js-image--modal fade" tabindex="-1" role="dialog">
<div class="modal-dialog modal-dialog-centered" role="document">
<div class="modal-content">
<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
<div class="modal-body p-0">
<img class="imgModalFrame js-image-modal--frame" loading="lazy" width="768px" height="486px">
</div>
</div>
</div>
</div>
<script type="text/javascript">
    // Global Util: Modal Behavior
    document.addEventListener("DOMContentLoaded", function() {

        const modalClosed = function() {
            if ("createEvent" in document) {
                const event = new CustomEvent("modal-closed");
                document.dispatchEvent(event);
            }
        };

        // Move all modals to just inside the body tag
        const modals = document.querySelectorAll(".modal");
        for (item of modals) {
            document.querySelector("body").appendChild(item);
        }

        // Open modal based on href target
        const modal = document.querySelectorAll("[data-image=modal]");
        for (item of modal) {
            item.addEventListener("click", function(e) {
                e.preventDefault();
                document.getElementById(e.currentTarget.getAttribute("data-target").substring(1)).classList.add("show");
            });
        }

        // Close on click of modal dismiss button
        const dismissModal = document.querySelectorAll("[data-dismiss=modal]");
        for (item of dismissModal) {
            item.addEventListener("click", function(e) {
                e.preventDefault();
                e.currentTarget.closest(".modal.show").classList.remove("show");
                modalClosed();
            });
            item.addEventListener("modal-closed", function(e) {
                console.log('OOF2');
            });
        }

        // Close on click of modal background
        const openModal = document.querySelectorAll(".modal");
        for (item of openModal) {
            item.addEventListener("click", function(e) {
                if (e.target.classList.contains("show")) {
                    e.target.classList.remove("show");
                    modalClosed();
                }
            });

        }

     });
</script>

<script type="text/javascript" src="https://www.ispot.tv/hub/wp-content/themes/ispot/js/skip-link-focus-fix.js" id="ispot-skip-link-focus-fix-js"></script>
<script type="text/javascript" src="https://www.ispot.tv/hub/wp-content/plugins/wp-featherlight/js/wpFeatherlight.pkgd.min.js?ver=1.2.0" id="wp-featherlight-js"></script>
<script type="text/javascript" src="https://www.ispot.tv/hub/wp-content/themes/ispot/blocks/ispot-pillar-top-level-header/ispot-pillar-top-level-header-script.js?ver=6.2.4" id="ispot-pillar-top-level-header-script-js"></script>

<script type="text/javascript" crossorigin="anonymous" data-auto-add-css="false" integrity="sha384-OF9QwbqmlzSPpIxe2GYS8lkGFyaFfrgUPD2J3qj8zGVps17Y/x8EK2U8PEl6UrpH" src="https://pro.fontawesome.com/releases/v5.15.3/js/all.js"></script>
<script type="text/javascript" src="https://d3ds6z1w6yhmzj.cloudfront.net/dist/js/standard/index.js?v=9.3.35"></script>
<script type="text/javascript" src="https://d3ds6z1w6yhmzj.cloudfront.net/dist/js/global/index.js?v=9.3.35"></script>
<script>
    // Check that service workers are supported
    if ('serviceWorker' in navigator) {
        // Use the window load event to keep the page load performant
        window.addEventListener('load', () => {
            // navigator.serviceWorker.getRegistrations().then(function(registrations) {
            //     for(let registration of registrations) {
            //         registration.unregister()
            //     } 
            // });
            navigator.serviceWorker.register('/sw.js');
        });
    }
</script>
</body>
</html>
