(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5354],{43695:function(t,e,i){"use strict";var a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==i.g?i.g:"undefined"!=typeof self?self:{};r o=n(;r(o),o.BLOCKS;var s=n(;r(s),s.INLINES;var d=n(;r(d);var _=n(;r(_),_.V1_MARKS,_.V1_NODE_TYPES,_.TEXT_CONTAINERS,_.HEADINGS,_.CONTAINERS,_.VOID_BLOCKS,_.TABLE_BLOCKS,_.LIST_ITEM_BLOCKS,_.TOP_LEVEL_BLOCKS;var u=n(function(t,e){Object.defineProperty(e,"__esModule",{value:!0})});r(u);var h=n(;r(h);var l=n(;r(l);var c=n(;r(c),c.isText,c.isBlock,c.isInline;var E=n(;r(E);var f=E.helpers;E.EMPTY_DOCUMENT,E.MARKS,E.INLINES,E.BLOCKS,e.a=,10808:function(t,e,i){var a,r;r=function(){var t,e,i,a={defaultRadius:40,defaultRenderer:"canvas2d",defaultGradient:{.25:"rgb(0,0,255)",.55:"rgb(0,255,0)",.85:"yellow",1:"rgb(255,0,0)"},defaultMaxOpacity:1,defaultMinOpacity:0,defaultBlur:.85,defaultXField:"x",defaultYField:"y",defaultValueField:"value",plugins:{}},r=(t=function(t){this._coordinator={},this._data=[],this._radi=[],this._min=10,this._max=1,this._xField=t.xField||t.defaultXField,this._yField=t.yField||t.defaultYField,this._valueField=t.valueField||t.defaultValueField,t.radius&&(this._cfgRadius=t.radius)},e=a.defaultRadius,t.prototype={_organiseData:function(t,i){var a=t[this._xField],r=t[this._yField],n=this._radi,o=this._data,s=this._max,d=this._min,_=t[this._valueField]||1,u=t.radius||this._cfgRadius||e;o[a]||(o[a]=[],n[a]=[]),o[a][r]?o[a][r]+=_:(o[a][r]=_,n[a][r]=u);var h=o[a][r];return h>s?(i?this.setDataMax(h):this._max=h,!1):h<d?(i?this.setDataMin(h):this._min=h,!1):{x:a,y:r,value:_,radius:u,min:d,max:s}},_unOrganizeData:function(){var t=[],e=this._data,i=this._radi;for(var a in e)for(var r in e[a])t.push({x:a,y:r,radius:i[a][r],value:e[a][r]});return{min:this._min,max:this._max,data:t}},_onExtremaChange:addData:function(){if(arguments[0].length>0)for(var t=arguments[0],e=t.length;e--;)this.addData.call(this,t[e]);else{var i=this._organiseData(arguments[0],!0);i&&(0===this._data.length&&(this._min=this._max=i.value),this._coordinator.emit("renderpartial",{min:this._min,max:this._max,data:[i]}))}return this},setData:function(t){var e=t.data,i=e.length;this._data=[],this._radi=[];for(var a=0;a<i;a++)this._organiseData(e[a],!1);return this._max=t.max,this._min=t.min||0,this._onExtremaChange(),this._coordinator.emit("renderall",this._getInternalData()),this},removeData:setDataMax:function(t){return this._max=t,this._onExtremaChange(),this._coordinator.emit("renderall",this._getInternalData()),this},setDataMin:function(t){return this._min=t,this._onExtremaChange(),this._coordinator.emit("renderall",this._getInternalData()),this},setCoordinator:_getInternalData:getData:,t),n=function(){var t=function(t){var e=t.gradient||t.defaultGradient,i=document.createElement("canvas"),a=i.getContext("2d");i.width=256,i.height=1;var r=a.createLinearGradient(0,0,256,1);for(var n in e)r.addColorStop(n,e[n]);return a.fillStyle=r,a.fillRect(0,0,256,1),a.getImageData(0,0,256,1).data},e=function(t,e){var i=document.createElement("canvas"),a=i.getContext("2d");if(i.width=i.height=2*t,1==e)a.beginPath(),a.arc(t,t,t,0,2*Math.PI,!1),a.fillStyle="rgba(0,0,0,1)",a.fill();else{var r=a.createRadialGradient(t,t,t*e,t,t,t);r.addColorStop(0,"rgba(0,0,0,1)"),r.addColorStop(1,"rgba(0,0,0,0)"),a.fillStyle=r,a.fillRect(0,0,2*t,2*t)}return i},i=function(t){for(var e=[],i=t.min,a=t.max,r=t.radi,t=t.data,n=Object.keys(t),o=n.length;o--;)for(var s=n[o],d=Object.keys(t[s]),_=d.length;_--;){var u=d[_],h=t[s][u],l=r[s][u];e.push({x:s,y:u,value:h,radius:l})}return{min:i,max:a,data:e}};function a(e){var i=e.container,a=this.shadowCanvas=document.createElement("canvas"),r=this.canvas=e.canvas||document.createElement("canvas");this._renderBoundaries=[1e4,1e4,0,0];var n=getComputedStyle(e.container)||{};r.className="heatmap-canvas",this._width=r.width=a.width=e.width||+n.width.replace(/px/,""),this._height=r.height=a.height=e.height||+n.height.replace(/px/,""),this.shadowCtx=a.getContext("2d"),this.ctx=r.getContext("2d"),r.style.cssText=a.style.cssText="position:absolute;left:0;top:0;",i.style.position="relative",i.appendChild(r),this._palette=t(e),this._templates={},this._setStyles(e)}return a.prototype={renderPartial:function(t){t.data.length>0&&(this._drawAlpha(t),this._colorize())},renderAll:function(t){this._clear(),t.data.length>0&&(this._drawAlpha(i(t)),this._colorize())},_updateGradient:updateConfig:function(t){t.gradient&&this._updateGradient(t),this._setStyles(t)},setDimensions:function(t,e){this._width=t,this._height=e,this.canvas.width=this.shadowCanvas.width=t,this.canvas.height=this.shadowCanvas.height=e},_clear:function(){this.shadowCtx.clearRect(0,0,this._width,this._height),this.ctx.clearRect(0,0,this._width,this._height)},_setStyles:function(t){this._blur=0==t.blur?0:t.blur||t.defaultBlur,t.backgroundColor&&(this.canvas.style.backgroundColor=t.backgroundColor),this._width=this.canvas.width=this.shadowCanvas.width=t.width||this._width,this._height=this.canvas.height=this.shadowCanvas.height=t.height||this._height,this._opacity=255*(t.opacity||0),this._maxOpacity=255*(t.maxOpacity||t.defaultMaxOpacity),this._minOpacity=255*(t.minOpacity||t.defaultMinOpacity),this._useGradientOpacity=!!t.useGradientOpacity},_drawAlpha:function(t){for(var i=this._min=t.min,a=this._max=t.max,t=t.data||[],r=t.length,n=1-this._blur;r--;){var o,s=t[r],d=s.x,_=s.y,u=s.radius,h=Math.min(s.value,a),l=d-u,c=_-u,E=this.shadowCtx;this._templates[u]?o=this._templates[u]:this._templates[u]=o=e(u,n);var f=(h-i)/(a-i);E.globalAlpha=f<.01?.01:f,E.drawImage(o,l,c),l<this._renderBoundaries[0]&&(this._renderBoundaries[0]=l),c<this._renderBoundaries[1]&&(this._renderBoundaries[1]=c),l+2*u>this._renderBoundaries[2]&&(this._renderBoundaries[2]=l+2*u),c+2*u>this._renderBoundaries[3]&&(this._renderBoundaries[3]=c+2*u)}},_colorize:function(){var t=this._renderBoundaries[0],e=this._renderBoundaries[1],i=this._renderBoundaries[2]-t,a=this._renderBoundaries[3]-e,r=this._width,n=this._height,o=this._opacity,s=this._maxOpacity,d=this._minOpacity,_=this._useGradientOpacity;t<0&&(t=0),e<0&&(e=0),t+i>r&&(i=r-t),e+a>n&&(a=n-e);for(var u=this.shadowCtx.getImageData(t,e,i,a),h=u.data,l=h.length,c=this._palette,E=3;E<l;E+=4){var f,L=h[E],S=4*L;S&&(f=o>0?o:L<s?L<d?d:L:s,h[E-3]=c[S],h[E-2]=c[S+1],h[E-1]=c[S+2],h[E]=_?c[S+3]:f)}u.data=h,this.ctx.putImageData(u,t,e),this._renderBoundaries=[1e3,1e3,0,0]},getValueAt:function(t){var e=this.shadowCtx.getImageData(t.x,t.y,1,1).data[3];return Math.abs(this._max-this._min)*(e/255)>>0},getDataURL:function(){return this.canvas.toDataURL()}},a}(),o=(i=!1,"canvas2d"===a.defaultRenderer&&(i=n),i),s={merge:function(){for(var t={},e=arguments.length,i=0;i<e;i++){var a=arguments[i];for(var r in a)t[r]=a[r]}return t}},d=function(){var t=function(){eturn t.prototype={on:function(t,e,i){var a=this.cStore;a[t]||(a[t]=[]),a[t].push(},emit:function(t,e){var i=this.cStore;if(i[t])for(var a=i[t].length,r=0;r<a;r++)(0,i[t][r])(e)}},t}(),e=function(t){var e=t._renderer,i=t._coordinator,a=t._store;i.on("renderpartial",e.renderPartial,e),i.on("renderall",e.renderAll,e),i.on("extremachange",function(e){t._config.onExtremaChange&&t._config.onExtremaChange({min:e.min,max:e.max,gradient:t._config.gradient||t._config.defaultGradient})}),a.setCoordinator(i)};function i(){var i=this._config=s.merge(a,arguments[0]||{});if(this._coordinator=new t,i.plugin){var n=i.plugin;if(a.plugins[n]){var d=a.plugins[n];this._renderer=new d.renderer(i),this._store=new d.store(i)}else throw Error("Plugin '"+n+"' not found. Maybe it was not registered.")}else this._renderer=new o(i),this._store=new r(i);e(this)}return i.prototype={addData:function(){return this._store.addData.apply(this._store,arguments),this},removeData:function(){return this._store.removeData&&this._store.removeData.apply(this._store,arguments),this},setData:function(){return this._store.setData.apply(this._store,arguments),this},setDataMax:function(){return this._store.setDataMax.apply(this._store,arguments),this},setDataMin:configure:function(t){return this._config=s.merge(this._config,t),this._renderer.updateConfig(this._config),this._coordinator.emit("renderall",this._store._getInternalData()),this},repaint:function(){return this._coordinator.emit("renderall",this._store._getInternalData()),this},getData:function(){return this._store.getData()},getDataURL:getValueAt:function(t){return this._store.getValueAt?this._store.getValueAt(t):this._renderer.getValueAt?this._renderer.getValueAt(t):null}},i}();return{create:register:},t.exports?t.exports=r():void 0===(a=r.call(e,i,e,t))||(t.exports=a)},40696:function(t){"use strict";/*!
 * reading-time
 * Copyright (c) Nicolas Gryman <ngryman@gmail.com>
 * MIT Licensed
 */function e(t,e){return e.some(([e,i])=>e<=t&&t<=i)}function i(t){if("string"!=typeof t)return!1;let i=t.charCodeAt(0);return e(i,[[12352,12447],[19968,40959],[44032,55203],[131072,191456]])}.exports=function(t,r={}){let n=0,o=0,s=t.length-1,d=r.wordsPerMinute||200,_=r.wordBound||a;for(;_(t[o]);)o++;for(;_(t[s]);)s--;let u=`${t}
`;for(let t=o;t<=s;t++)if((i(u[t])||!_(u[t])&&(_(u[t+1])||i(u[t+1])))&&n++,i(u[t]))for(;t<=s&&(function(t){if("string"!=typeof t)return!1;let i=t.charCodeAt(0);return e(i,[[33,47],[58,64],[91,96],[123,126],[12288,12351],[65280,65519]])}(u[t+1])||_(u[t+1]));)t++;let h=n/d,l=Math.ceil(h.toFixed(2));return{text:l+" min read",minutes:h,time:Math.round(6e4*h),words:n}}}}]);