import{r as e,d as r}from"./index-6f0b08dd.js";const l=t=>e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 60 60",...t},e.createElement("defs",null,e.createElement("radialGradient",{id:"left-arrow_gradient",cx:"50%",cy:"50%",r:"50%",fx:"50%",fy:"50%"},e.createElement("stop",{offset:"0%",stopOpacity:.5}),e.createElement("stop",{offset:"100%",stopOpacity:0})),e.createElement("filter",{id:"left-arrow_filter",width:"236%",height:"270%",x:"-72%",y:"-85%",filterUnits:"objectBoundingBox"},e.createElement("feOffset",{in:"SourceAlpha",result:"shadowOffsetOuter1"}),e.createElement("feGaussianBlur",{in:"shadowOffsetOuter1",result:"shadowBlurOuter1",stdDeviation:4}),e.createElement("feColorMatrix",{in:"shadowBlurOuter1",result:"shadowMatrixOuter1",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.8 0"}),e.createElement("feMerge",null,e.createElement("feMergeNode",{in:"shadowMatrixOuter1"}),e.createElement("feMergeNode",{in:"SourceGraphic"})))),e.createElement("g",{fill:"none",fillRule:"evenodd",transform:"matrix(-1 0 0 1 60 0)"},e.createElement("circle",{cx:30,cy:30,r:30,fill:"url(#left-arrow_gradient)"}),e.createElement("g",{strokeWidth:2,filter:"url(#left-arrow_filter)",transform:"matrix(-1 0 0 1 40 20)"},e.createElement("path",{d:"M9 0L0 9.989 9 20M0 10L22.5 10"})))),o=r(l)`
  width: 40px;
`;export{o as StyledLeftArrow};
//# sourceMappingURL=LeftArrow-d82fe6ea.js.map
roll=function(){var t,e=this;t={horizontal:{newScroll:this.$element.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.$element.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};if(c&&(!t.vertical.oldScroll||!t.vertical.newScroll)){n[m]("refresh")}n.each(t,function(t,r){var i,o,l;l=[];o=r.newScroll>r.oldScroll;i=o?r.forward:r.backward;n.each(e.waypoints[t],function(t,e){var n,i;if(r.oldScroll<(n=e.offset)&&n<=r.newScroll){return l.push(e)}else if(r.newScroll<(i=e.offset)&&i<=r.oldScroll){return l.push(e)}});l.sort(function(t,e){return t.offset-e.offset});if(!o){l.reverse()}return n.each(l,function(t,e){if(e.options.continuous||t===l.length-1){return e.trigger([i])}})});return this.oldScroll={x:t.horizontal.newScroll,y:t.vertical.newScroll}};t.prototype.refresh=function(){var t,e,r,i=this;r=n.isWindow(this.element);e=this.$element.offset();this.doScroll();t={horizontal:{contextOffset:r?0:e.left,contextScroll:r?0:this.oldScroll.x,contextDimension:this.$element.width(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:r?0:e.top,contextScroll:r?0:this.oldScroll.y,contextDimension:r?n[m]("viewportHeight"):this.$element.height(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};return n.each(t,function(t,e){return n.each(i.waypoints[t],function(t,r){var i,o,l,s,f;i=r.options.offset;l=r.offset;o=n.isWindow(r.element)?0:r.$element.offset()[e.offsetProp];if(n.isFunction(i)){i=i.apply(r.element)}else if(typeof i==="string"){i=parseFloat(i);if(r.options.offset.indexOf("%")>-1){i=Math.ceil(e.contextDimension*i/100)}}r.offset=o-e.contextOffset+e.contextScroll-i;if(r.options.onlyOnScroll&&l!=null||!r.enabled){return}if(l!==null&&l<(s=e.oldScroll)&&s<=r.offset){return r.trigger([e.backward])}else if(l!==null&&l>(f=e.oldScroll)&&f>=r.offset){return r.trigger([e.forward])}else if(l===null&&e.oldScroll>=r.offset){return r.trigger([e.forward])}})})};t.prototype.checkEmpty=function(){if(n.isEmptyObject(this.waypoints.horizontal)&&n.isEmptyObject(this.waypoints.vertical)){this.$element.unbind([p,y].join(" "));return delete a[this.id]}};return t}();l=function(){function t(t,e,r){var i,o;r=n.extend({},n.fn[g].defaults,r);if(r.offset==="bottom-in-view"){r.offset=function(){var t;t=n[m]("viewportHeight");if(!n.isWindow(e.element)){t=e.$element.height()}return t-n(this).outerHeight()}}this.$element=t;this.element=t[0];this.axis=r.horizontal?"horizontal":"vertical";this.callback=r.handler;this.context=e;this.enabled=r.enabled;this.id="waypoints"+v++;this.offset=null;this.options=r;e.waypoints[this.axis][this.id]=this;s[this.axis][this.id]=this;i=(o=t.data(w))!=null?o:[];i.push(this.id);t.data(w,i)}t.prototype.trigger=function(t){if(!this.enabled){return}if(this.callback!=null){this.callback.apply(this.element,t)}if(this.options.triggerOnce){return this.destroy()}};t.prototype.disable=function(){return this.enabled=false};t.prototype.enable=function(){this.context.refresh();return this.enabled=true};t.prototype.destroy=function(){delete s[this.axis][this.id];delete this.context.waypoints[this.axis][this.id];return this.context.checkEmpty()};t.getWaypointsByElement=function(t){var e,r;r=n(t).data(w);if(!r){return[]}e=n.extend({},s.horizontal,s.vertical);return n.map(r,function(t){return e[t]})};return t}();d={init:function(t,e){var r;if(e==null){e={}}if((r=e.handler)==null){e.handler=t}this.each(function(){var t,r,i,s;t=n(this);i=(s=e.context)!=null?s:n.fn[g].defaults.context;if(!n.isWindow(i)){i=t.closest(i)}i=n(i);r=a[i.data(u)];if(!r){r=new o(i)}return new l(t,r,e)});n[m]("refresh");return this},disable:function(){return d._invoke(this,"disable")},enable:function(){return d._invoke(this,"enable")},destroy:function(){return d._invoke(this,"destroy")},prev:function(t,e){return d._traverse.call(this,t,e,function(t,e,n){if(e>0){return t.push(n[e-1])}})},next:function(t,e){return d._traverse.call(this,t,e,function(t,e,n){if(e<n.length-1){return t.push(n[e+1])}})},_traverse:function(t,e,i){var o,l;if(t==null){t="vertical"}if(e==null){e=r}l=h.aggregate(e);o=[];this.each(function(){var e;e=n.inArray(this,l[t]);return i(o,e,l[t])});return this.pushStack(o)},_invoke:function(t,e){t.each(function(){var t;t=l.getWaypointsByElement(this);return n.each(t,function(t,n){n[e]();return true})});return this}};n.fn[g]=function(){var t,r;r=arguments[0],t=2<=arguments.length?e.call(arguments,1):[];if(d[r]){return d[r].apply(this,t)}else if(n.isFunction(r)){return d.init.apply(this,arguments)}else if(n.isPlainObject(r)){return d.init.apply(this,[null,r])}else if(!r){return n.error("jQuery Waypoints needs a callback function or handler option.")}else{return n.error("The "+r+" method does not exist in jQuery Waypoints.")}};n.fn[g].defaults={context:r,continuous:true,enabled:true,horizontal:false,offset:0,triggerOnce:false};h={refresh:function(){return n.each(a,function(t,e){return e.refresh()})},viewportHeight:function(){var t;return(t=r.innerHeight)!=null?t:i.height()},aggregate:function(t){var e,r,i;e=s;if(t){e=(i=a[n(t).data(u)])!=null?i.waypoints:void 0}if(!e){return[]}r={horizontal:[],vertical:[]};n.each(r,function(t,i){n.each(e[t],function(t,e){return i.push(e)});i.sort(function(t,e){return t.offset-e.offset});r[t]=n.map(i,function(t){return t.element});return r[t]=n.unique(r[t])});return r},above:function(t){if(t==null){t=r}return h._filter(t,"vertical",function(t,e){return e.offset<=t.oldScroll.y})},below:function(t){if(t==null){t=r}return h._filter(t,"vertical",function(t,e){return e.offset>t.oldScroll.y})},left:function(t){if(t==null){t=r}return h._filter(t,"horizontal",function(t,e){return e.offset<=t.oldScroll.x})},right:function(t){if(t==null){t=r}return h._filter(t,"horizontal",function(t,e){return e.offset>t.oldScroll.x})},enable:function(){return h._invoke("enable")},disable:function(){return h._invoke("disable")},destroy:function(){return h._invoke("destroy")},extendFn:function(t,e){return d[t]=e},_invoke:function(t){var e;e=n.extend({},s.vertical,s.horizontal);return n.each(e,function(e,n){n[t]();return true})},_filter:function(t,e,r){var i,o;i=a[n(t).data(u)];if(!i){return[]}o=[];n.each(i.waypoints[e],function(t,e){if(r(i,e)){return o.push(e)}});o.sort(function(t,e){return t.offset-e.offset});return n.map(o,function(t){return t.element})}};n[m]=function(){var t,n;n=arguments[0],t=2<=arguments.length?e.call(arguments,1):[];if(h[n]){return h[n].apply(null,t)}else{return h.aggregate.call(null,n)}};n[m].settings={resizeThrottle:100,scrollThrottle:30};return i.load(function(){return n[m]("refresh")})})}).call(this);


,this.resume=function(){this.isPaused=!1},this};c.prototype.initialize=function(){if(this.isInitialized)return!1;var a=!!("onscroll"in this.$scrollContainer.get(0)),b=this.getCurrentScrollOffset(this.$scrollContainer),c=this.getScrollThreshold();return a?(this.hidePagination(),this.bind(),this.nextUrl=this.getNextUrl(),this.nextUrl||this.fire("noneLeft",[this.getLastItem()]),this.nextUrl&&b>=c?(this.next(),this.one("rendered",function(){this.isInitialized=!0,this.fire("ready")})):(this.isInitialized=!0,this.fire("ready")),this):!1},c.prototype.reinitialize=function(){this.isInitialized=!1,this.unbind(),this.initialize()},c.prototype.bind=function(){if(!this.isBound){this.$scrollContainer.on("scroll",a.proxy(this.throttle(this.scrollHandler,150),this));for(var b=0,c=this.extensions.length;c>b;b++)this.extensions[b].bind(this);this.isBound=!0,this.resume()}},c.prototype.unbind=function(){if(this.isBound){this.$scrollContainer.off("scroll",this.scrollHandler);for(var a=0,b=this.extensions.length;b>a;a++)"undefined"!=typeof this.extensions[a].unbind&&this.extensions[a].unbind(this);this.isBound=!1}},c.prototype.destroy=function(){try{this.jsXhr.abort()}catch(a){}this.unbind(),this.$scrollContainer.data("ias",null)},c.prototype.on=function(b,c,d){if("undefined"==typeof this.listeners[b])throw new Error('There is no event called "'+b+'"');return d=d||0,this.listeners[b].add(a.proxy(c,this),d),this.isInitialized&&("ready"===b?a.proxy(c,this)():"noneLeft"!==b||this.nextUrl||a.proxy(c,this)()),this},c.prototype.one=function(a,b){var c=this,d=function(){c.off(a,b),c.off(a,d)};return this.on(a,b),this.on(a,d),this},c.prototype.off=function(a,b){if("undefined"==typeof this.listeners[a])throw new Error('There is no event called "'+a+'"');return this.listeners[a].remove(b),this},c.prototype.next=function(){var a=this.nextUrl,b=this;if(!a)return!1;this.pause();var c=this.fire("next",[a]);return c.done(function(){b.load(a+'&j3_ajax',function(a,c){b.render(c,function(){b.nextUrl=b.getNextUrl(a),b.nextUrl||b.fire("noneLeft",[b.getLastItem()]),b.resume()})})}),c.fail(function(){b.resume()}),!0},c.prototype.extension=function(a){if("undefined"==typeof a.bind)throw new Error('Extension doesn\'t have required method "bind"');return"undefined"!=typeof a.initialize&&a.initialize(this),this.extensions.push(a),this.isBound&&this.reinitialize(),this},a.ias=function(b){var c=a(window);return c.ias.apply(c,arguments)},a.fn.ias=function(b){var d=Array.prototype.slice.call(arguments),e=this;return this.each(function(){var f=a(this),g=f.data("ias"),h=a.extend({},a.fn.ias.defaults,f.data(),"object"==typeof b&&b);if(g||(f.data("ias",g=new c(f,h)),h.initialize&&a(document).ready(a.proxy(g.initialize,g))),"string"==typeof b){if("function"!=typeof g[b])throw new Error('There is no method called "'+b+'"');d.shift(),g[b].apply(g,d)}e=g}),e},a.fn.ias.defaults={item:".item",container:".listing",next:".next",pagination:!1,delay:600,negativeMargin:10,initialize:!0}}(jQuery);var IASHistoryExtension=function(a){return a=jQuery.extend({},this.defaults,a),this.ias=null,this.prevSelector=a.prev,this.prevUrl=null,this.listeners={prev:new IASCallbacks(jQuery)},this.onPageChange=function(a,b,c){if(window.history&&window.history.replaceState){var d=history.state;history.replaceState(d,document.title,c)}},this.onScroll=function(a,b){var c=this.getScrollThresholdFirstItem();this.prevUrl&&(a-=this.ias.$scrollContainer.height(),c>=a&&this.prev())},this.onReady=function(){var a=this.ias.getCurrentScrollOffset(this.ias.$scrollContainer),b=this.getScrollThresholdFirstItem();a-=this.ias.$scrollContainer.height(),b>=a&&this.prev()},this.getPrevUrl=function(a){return a||(a=this.ias.$container),jQuery(this.prevSelector,a).last().attr("href")},this.getScrollThresholdFirstItem=function(){var a;return a=this.ias.getFirstItem(),0===a.length?-1:a.offset().top},this.renderBefore=function(a,b){var c=this.ias,d=c.getFirstItem(),e=0;c.fire("render",[a]),jQuery(a).hide(),d.before(a),jQuery(a).fadeIn(400,function(){++e<a.length||(c.fire("rendered",[a]),b&&b())})},this};IASHistoryExtension.prototype.initialize=function(a){var b=this;this.ias=a,jQuery.extend(a.listeners,this.listeners),a.prev=function(){return b.prev()},this.prevUrl=this.getPrevUrl()},IASHistoryExtension.prototype.bind=function(a){a.on("pageChange",jQuery.proxy(this.onPageChange,this)),a.on("scroll",jQuery.proxy(this.onScroll,this)),a.on("ready",jQuery.proxy(this.onReady,this))},IASHistoryExtension.prototype.unbind=function(a){a.off("pageChange",this.onPageChange),a.off("scroll",this.onScroll),a.off("ready",this.onReady)},IASHistoryExtension.prototype.prev=function(){var a=this.prevUrl,b=this,c=this.ias;if(!a)return!1;c.pause();var d=c.fire("prev",[a]);return d.done(function(){c.load(a,function(a,d){b.renderBefore(d,function(){b.prevUrl=b.getPrevUrl(a),c.resume(),b.prevUrl&&b.prev()})})}),d.fail(function(){c.resume()}),!0},IASHistoryExtension.prototype.defaults={prev:".prev"};var IASNoneLeftExtension=function(a){return a=jQuery.extend({},this.defaults,a),this.ias=null,this.uid=(new Date).getTime(),this.html=a.html.replace("{text}",a.text),this.showNoneLeft=function(){var a=jQuery(this.html).attr("id","ias_noneleft_"+this.uid),b=this.ias.getLastItem();b.after(a),a.fadeIn()},this};IASNoneLeftExtension.prototype.bind=function(a){this.ias=a,a.on("noneLeft",jQuery.proxy(this.showNoneLeft,this))},IASNoneLeftExtension.prototype.unbind=function(a){a.off("noneLeft",this.showNoneLeft)},IASNoneLeftExtension.prototype.defaults={text:"You reached the end.",html:'<div class="ias-noneleft" style="text-align: center;">{text}</div>'};var IASPagingExtension=function(){return this.ias=null,this.pagebreaks=[[0,document.location.toString()]],this.lastPageNum=1,this.enabled=!0,this.listeners={pageChange:new IASCallbacks(jQuery)},this.onScroll=function(a,b){if(this.enabled){var c,d=this.ias,e=this.getCurrentPageNum(a),f=this.getCurrentPagebreak(a);this.lastPageNum!==e&&(c=f[1],d.fire("pageChange",[e,a,c])),this.lastPageNum=e}},this.onNext=function(a){var b=this.ias.getCurrentScrollOffset(this.ias.$scrollContainer);this.pagebreaks.push([b,a]);var c=this.getCurrentPageNum(b)+1;this.ias.fire("pageChange",[c,b,a]),this.lastPageNum=c},this.onPrev=function(a){var b=this,c=b.ias,d=c.getCurrentScrollOffset(c.$scrollContainer),e=d-c.$scrollContainer.height(),f=c.getFirstItem();this.enabled=!1,this.pagebreaks.unshift([0,a]),c.one("rendered",function(){for(var d=1,g=b.pagebreaks.length;g>d;d++)b.pagebreaks[d][0]=b.pagebreaks[d][0]+f.offset().top;var h=b.getCurrentPageNum(e)+1;c.fire("pageChange",[h,e,a]),b.lastPageNum=h,b.enabled=!0})},this};IASPagingExtension.prototype.initialize=function(a){this.ias=a,jQuery.extend(a.listeners,this.listeners)},IASPagingExtension.prototype.bind=function(a){try{a.on("prev",jQuery.proxy(this.onPrev,this),this.priority)}catch(b){}a.on("next",jQuery.proxy(this.onNext,this),this.priority),a.on("scroll",jQuery.proxy(this.onScroll,this),this.priority)},IASPagingExtension.prototype.unbind=function(a){try{a.off("prev",this.onPrev)}catch(b){}a.off("next",this.onNext),a.off("scroll",this.onScroll)},IASPagingExtension.prototype.getCurrentPageNum=function(a){for(var b=this.pagebreaks.length-1;b>0;b--)if(a>this.pagebreaks[b][0])return b+1;return 1},IASPagingExtension.prototype.getCurrentPagebreak=function(a){for(var b=this.pagebreaks.length-1;b>=0;b--)if(a>this.pagebreaks[b][0])return this.pagebreaks[b];return null},IASPagingExtension.prototype.priority=500;var IASSpinnerExtension=function(a){return a=jQuery.extend({},this.defaults,a),this.ias=null,this.uid=(new Date).getTime(),this.src=a.src,this.html=a.html.replace("{src}",this.src),this.showSpinner=function(){var a=this.getSpinner()||this.createSpinner(),b=this.ias.getLastItem();b.after(a),a.fadeIn()},this.showSpinnerBefore=function(){var a=this.getSpinner()||this.createSpinner(),b=this.ias.getFirstItem();b.before(a),a.fadeIn()},this.removeSpinner=function(){this.hasSpinner()&&this.getSpinner().remove()},this.getSpinner=function(){var a=jQuery("#ias_spinner_"+this.uid);return a.length>0?a:!1},this.hasSpinner=function(){var a=jQuery("#ias_spinner_"+this.uid);return a.length>0},this.createSpinner=function(){var a=jQuery(this.html).attr("id","ias_spinner_"+this.uid);return a.hide(),a},this};IASSpinnerExtension.prototype.bind=function(a){this.ias=a,a.on("next",jQuery.proxy(this.showSpinner,this)),a.on("render",jQuery.proxy(this.removeSpinner,this));try{a.on("prev",jQuery.proxy(this.showSpinnerBefore,this))}catch(b){}},IASSpinnerExtension.prototype.unbind=function(a){a.off("next",this.showSpinner),a.off("render",this.removeSpinner);try{a.off("prev",this.showSpinnerBefore)}catch(b){}},IASSpinnerExtension.prototype.defaults={src:"data:image/gif;base64,R0lGODlhEAAQAPQAAP///wAAAPDw8IqKiuDg4EZGRnp6egAAAFhYWCQkJKysrL6+vhQUFJycnAQEBDY2NmhoaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAAFdyAgAgIJIeWoAkRCCMdBkKtIHIngyMKsErPBYbADpkSCwhDmQCBethRB6Vj4kFCkQPG4IlWDgrNRIwnO4UKBXDufzQvDMaoSDBgFb886MiQadgNABAokfCwzBA8LCg0Egl8jAggGAA1kBIA1BAYzlyILczULC2UhACH5BAkKAAAALAAAAAAQABAAAAV2ICACAmlAZTmOREEIyUEQjLKKxPHADhEvqxlgcGgkGI1DYSVAIAWMx+lwSKkICJ0QsHi9RgKBwnVTiRQQgwF4I4UFDQQEwi6/3YSGWRRmjhEETAJfIgMFCnAKM0KDV4EEEAQLiF18TAYNXDaSe3x6mjidN1s3IQAh+QQJCgAAACwAAAAAEAAQAAAFeCAgAgLZDGU5jgRECEUiCI+yioSDwDJyLKsXoHFQxBSHAoAAFBhqtMJg8DgQBgfrEsJAEAg4YhZIEiwgKtHiMBgtpg3wbUZXGO7kOb1MUKRFMysCChAoggJCIg0GC2aNe4gqQldfL4l/Ag1AXySJgn5LcoE3QXI3IQAh+QQJCgAAACwAAAAAEAAQAAAFdiAgAgLZNGU5joQhCEjxIssqEo8bC9BRjy9Ag7GILQ4QEoE0gBAEBcOpcBA0DoxSK/e8LRIHn+i1cK0IyKdg0VAoljYIg+GgnRrwVS/8IAkICyosBIQpBAMoKy9dImxPhS+GKkFrkX+TigtLlIyKXUF+NjagNiEAIfkECQoAAAAsAAAAABAAEAAABWwgIAICaRhlOY4EIgjH8R7LKhKHGwsMvb4AAy3WODBIBBKCsYA9TjuhDNDKEVSERezQEL0WrhXucRUQGuik7bFlngzqVW9LMl9XWvLdjFaJtDFqZ1cEZUB0dUgvL3dgP4WJZn4jkomWNpSTIyEAIfkECQoAAAAsAAAAABAAEAAABX4gIAICuSxlOY6CIgiD8RrEKgqGOwxwUrMlAoSwIzAGpJpgoSDAGifDY5kopBYDlEpAQBwevxfBtRIUGi8xwWkDNBCIwmC9Vq0aiQQDQuK+VgQPDXV9hCJjBwcFYU5pLwwHXQcMKSmNLQcIAExlbH8JBwttaX0ABAcNbWVbKyEAIfkECQoAAAAsAAAAABAAEAAABXkgIAICSRBlOY7CIghN8zbEKsKoIjdFzZaEgUBHKChMJtRwcWpAWoWnifm6ESAMhO8lQK0EEAV3rFopIBCEcGwDKAqPh4HUrY4ICHH1dSoTFgcHUiZjBhAJB2AHDykpKAwHAwdzf19KkASIPl9cDgcnDkdtNwiMJCshACH5BAkKAAAALAAAAAAQABAAAAV3ICACAkkQZTmOAiosiyAoxCq+KPxCNVsSMRgBsiClWrLTSWFoIQZHl6pleBh6suxKMIhlvzbAwkBWfFWrBQTxNLq2RG2yhSUkDs2b63AYDAoJXAcFRwADeAkJDX0AQCsEfAQMDAIPBz0rCgcxky0JRWE1AmwpKyEAIfkECQoAAAAsAAAAABAAEAAABXkgIAICKZzkqJ4nQZxLqZKv4NqNLKK2/Q4Ek4lFXChsg5ypJjs1II3gEDUSRInEGYAw6B6zM4JhrDAtEosVkLUtHA7RHaHAGJQEjsODcEg0FBAFVgkQJQ1pAwcDDw8KcFtSInwJAowCCA6RIwqZAgkPNgVpWndjdyohACH5BAkKAAAALAAAAAAQABAAAAV5ICACAimc5KieLEuUKvm2xAKLqDCfC2GaO9eL0LABWTiBYmA06W6kHgvCqEJiAIJiu3gcvgUsscHUERm+kaCxyxa+zRPk0SgJEgfIvbAdIAQLCAYlCj4DBw0IBQsMCjIqBAcPAooCBg9pKgsJLwUFOhCZKyQDA3YqIQAh+QQJCgAAACwAAAAAEAAQAAAFdSAgAgIpnOSonmxbqiThCrJKEHFbo8JxDDOZYFFb+A41E4H4OhkOipXwBElYITDAckFEOBgMQ3arkMkUBdxIUGZpEb7kaQBRlASPg0FQQHAbEEMGDSVEAA1QBhAED1E0NgwFAooCDWljaQIQCE5qMHcNhCkjIQAh+QQJCgAAACwAAAAAEAAQAAAFeSAgAgIpnOSoLgxxvqgKLEcCC65KEAByKK8cSpA4DAiHQ/DkKhGKh4ZCtCyZGo6F6iYYPAqFgYy02xkSaLEMV34tELyRYNEsCQyHlvWkGCzsPgMCEAY7Cg04Uk48LAsDhRA8MVQPEF0GAgqYYwSRlycNcWskCkApIyEAOwAAAAAAAAAAAA==",html:'<div class="ias-spinner" style="text-align: center;"><img src="{src}"/></div>'};var IASTriggerExtension=function(a){return a=jQuery.extend({},this.defaults,a),this.ias=null,this.html=a.html.replace("{text}",a.text),this.htmlPrev=a.htmlPrev.replace("{text}",a.textPrev),this.enabled=!0,this.count=0,this.offset=a.offset,this.$triggerNext=null,this.$triggerPrev=null,this.showTriggerNext=function(){if(!this.enabled)return!0;if(!1===this.offset||++this.count<this.offset)return!0;var a=this.$triggerNext||(this.$triggerNext=this.createTrigger(this.next,this.html)),b=this.ias.getLastItem();return b.after(a),a.fadeIn(),!1},this.showTriggerPrev=function(){if(!this.enabled)return!0;var a=this.$triggerPrev||(this.$triggerPrev=this.createTrigger(this.prev,this.htmlPrev)),b=this.ias.getFirstItem();return b.before(a),a.fadeIn(),!1},this.onRendered=function(){this.enabled=!0},this.createTrigger=function(a,b){var c,d=(new Date).getTime();return b=b||this.html,c=jQuery(b).attr("id","ias_trigger_"+d),c.hide(),c.on("click",jQuery.proxy(a,this)),c},this};IASTriggerExtension.prototype.bind=function(a){this.ias=a,a.on("next",jQuery.proxy(this.showTriggerNext,this),this.priority),a.on("rendered",jQuery.proxy(this.onRendered,this),this.priority);try{a.on("prev",jQuery.proxy(this.showTriggerPrev,this),this.priority)}catch(b){}},IASTriggerExtension.prototype.unbind=function(a){a.off("next",this.showTriggerNext),a.off("rendered",this.onRendered);try{a.off("prev",this.showTriggerPrev)}catch(b){}},IASTriggerExtension.prototype.next=function(){this.enabled=!1,this.ias.pause(),this.$triggerNext&&(this.$triggerNext.remove(),this.$triggerNext=null),this.ias.next()},IASTriggerExtension.prototype.prev=function(){this.enabled=!1,this.ias.pause(),this.$triggerPrev&&(this.$triggerPrev.remove(),this.$triggerPrev=null),this.ias.prev()},IASTriggerExtension.prototype.defaults={text:"Load more items",html:'<div class="ias-trigger ias-trigger-next" style="text-align: center; cursor: pointer;"><a>{text}</a></div>',textPrev:"Load previous items",htmlPrev:'<div class="ias-trigger ias-trigger-prev" style="text-align: center; cursor: pointer;"><a>{text}</a></div>',offset:0},IASTriggerExtension.prototype.priority=1e3;
;
/*!
 * JavaScript Cookie v2.2.0
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
;(function (factory) {
	var registeredInModuleLoader;
	if (typeof define === 'function' && define.amd) {
		define(factory);
		registeredInModuleLoader = true;
	}
	if (typeof exports === 'object') {
		module.exports = factory();
		registeredInModuleLoader = true;
	}
	if (!registeredInModuleLoader) {
		var OldCookies = window.Cookies;
		var api = window.Cookies = factory();
		api.noConflict = function () {
			window.Cookies = OldCookies;
			return api;
		};
	}
}(function () {
	function extend () {
		var i = 0;
		var result = {};
		for (; i < arguments.length; i++) {
			var attributes = arguments[ i ];
			for (var key in attributes) {
				result[key] = attributes[key];
			}
		}
		return result;
	}

	function init (converter) {
		function api (key, value, attributes) {
			if (typeof document === 'undefined') {
				return;
			}

			// Write

			if (arguments.length > 1) {
				attributes = extend({
					path: '/'
				}, api.defaults, attributes);

				if (typeof attributes.expires === 'number') {
					attributes.expires = new Date(new Date() * 1 + attributes.expires * 864e+5);
				}

				// We're using "expires" because "max-age" is not supported by IE
				attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

				try {
					var result = JSON.stringify(value);
					if (/^[\{\[]/.test(result)) {
						value = result;
					}
				} catch (e) {}

				value = converter.write ?
					converter.write(value, key) :
					encodeURIComponent(String(value))
						.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);

				key = encodeURIComponent(String(key))
					.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
					.replace(/[\(\)]/g, escape);

				var stringifiedAttributes = '';
				for (var attributeName in attributes) {
					if (!attributes[attributeName]) {
						continue;
					}
					stringifiedAttributes += '; ' + attributeName;
					if (attributes[attributeName] === true) {
						continue;
					}

					// Considers RFC 6265 section 5.2:
					// ...
					// 3.  If the remaining unparsed-attributes contains a %x3B (";")
					//     character:
					// Consume the characters of the unparsed-attributes up to,
					// not including, the first %x3B (";") character.
					// ...
					stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
				}

				return (document.cookie = key + '=' + value + stringifiedAttributes);
			}

			// Read

			var jar = {};
			var decode = function (s) {
				return s.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
			};
			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all.
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			var i = 0;

			for (; i < cookies.length; i++) {
				var parts = cookies[i].split('=');
				var cookie = parts.slice(1).join('=');

				if (!this.json && cookie.charAt(0) === '"') {
					cookie = cookie.slice(1, -1);
				}

				try {
					var name = decode(parts[0]);
					cookie = (converter.read || converter)(cookie, name) ||
						decode(cookie);

					if (this.json) {
						try {
							cookie = JSON.parse(cookie);
						} catch (e) {}
					}

					jar[name] = cookie;

					if (key === name) {
						break;
					}
				} catch (e) {}
			}

			return key ? jar[key] : jar;
		}

		api.set = api;
		api.get = function (key) {
			return api.call(api, key);
		};
		api.getJSON = function () {
			return api.apply({
				json: true
			}, arguments);
		};
		api.remove = function (key, attributes) {
			api(key, '', extend(attributes, {
				expires: -1
			}));
		};

		api.defaults = {};

		api.withConverter = init;

		return api;
	}

	return init(function () {});
}));
;
// Array includes polyfill
if (!Array.prototype.includes) {
	Object.defineProperty(Array.prototype, 'includes', {
		value: function (searchElement, fromIndex) {

			if (this == null) {
				throw new TypeError('"this" is null or not defined');
			}

			// 1. Let O be ? ToObject(this value).
			var o = Object(this);

			// 2. Let len be ? ToLength(? Get(O, "length")).
			var len = o.length >>> 0;

			// 3. If len is 0, return false.
			if (len === 0) {
				return false;
			}

			// 4. Let n be ? ToInteger(fromIndex).
			//    (If fromIndex is undefined, this step produces the value 0.)
			var n = fromIndex | 0;

			// 5. If n ≥ 0, then
			//  a. Let k be n.
			// 6. Else n < 0,
			//  a. Let k be len + n.
			//  b. If k < 0, let k be 0.
			var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

			function sameValueZero(x, y) {
				return x === y || (typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y));
			}

			// 7. Repeat, while k < len
			while (k < len) {
				// a. Let elementK be the result of ? Get(O, ! ToString(k)).
				// b. If SameValueZero(searchElement, elementK) is true, return true.
				if (sameValueZero(o[k], searchElement)) {
					return true;
				}
				// c. Increase k by 1.
				k++;
			}

			// 8. Return false
			return false;
		}
	});
}

$(function () {
	// Currency
	$('#form-currency .currency-select').unbind().on('click', function (e) {
		e.preventDefault();

		$('#form-currency input[name=\'code\']').val($(this).data('name'));

		$('#form-currency').submit();
	});

	// Language
	$('#form-language .language-select').unbind().on('click', function (e) {
		e.preventDefault();

		$('#form-language input[name=\'code\']').val($(this).data('name'));

		$('#form-language').submit();
	});
});

window['cart'].add = function (product_id, quantity, quick_buy) {
	quantity = quantity || 1;

	$.ajax({
		url: 'index.php?route=checkout/cart/add',
		type: 'post',
		data: 'product_id=' + product_id + '&quantity=' + quantity,
		dataType: 'json',
		beforeSend: function () {
			$('[data-toggle="tooltip"]').tooltip('hide');
			$('[onclick*="cart.add(\'' + product_id + '\'"]').button('loading');
		},
		complete: function () {
			$('[onclick*="cart.add(\'' + product_id + '\'"]').button('reset');
		},
		success: function (json) {
			$('.alert, .text-danger').remove();

			if (json['redirect']) {
				if (json['options_popup']) {
					if ($('html').hasClass('iphone') || $('html').hasClass('ipad')) {
						iNoBounce.enable();
					}

					var html = '';

					html += '<div class="popup-wrapper popup-options">';
					html += '	<div class="popup-container">';
					html += '		<button class="btn popup-close"></button>';
					html += '		<div class="popup-body">';
					html += '		<div class="popup-inner-body">';
					html += '			<div class="journal-loading"><i class="fa fa-spinner fa-spin"></i></div>';
					html += '			<iframe src="index.php?route=journal3/product&product_id=' + product_id + '&popup=options&product_quantity=' + quantity + '&' + (quick_buy ? 'quick_buy=true' : '') + '" width="100%" height="100%" frameborder="0" onload="this.height = this.contentWindow.document.body.offsetHeight; $(this).prev(\'.journal-loading\').fadeOut();"></iframe>';
					html += '		</div>';
					html += '		</div>';
					html += '	</div>';
					html += '	<div class="popup-bg popup-bg-closable"></div>';
					html += '</div>';

					// show modal
					$('.popup-wrapper').remove();

					$('body').append(html);

					setTimeout(function () {
						$('html').addClass('popup-open popup-center');
					}, 10);
				} else {
					location = json['redirect'];
				}
			}

			if (json['success']) {
				if (json['options_popup']) {
					if ($('html').hasClass('iphone') || $('html').hasClass('ipad')) {
						iNoBounce.enable();
					}

					var html = '';

					html += '<div class="popup-wrapper popup-options">';
					html += '	<div class="popup-container">';
					html += '		<button class="btn popup-close"></button>';
					html += '		<div class="popup-body">';
					html += '		<div class="popup-inner-body">';
					html += '			<div class="journal-loading"><i class="fa fa-spinner fa-spin"></i></div>';
					html += '			<iframe src="index.php?route=journal3/product&product_id=' + product_id + '&popup=options&' + (quick_buy ? 'quick_buy=true' : '') + '" width="100%" height="100%" frameborder="0" onload="this.height = this.contentWindow.document.body.offsetHeight; $(this).prev(\'.journal-loading\').fadeOut();"></iframe>';
					html += '		</div>';
					html += '		</div>';
					html += '	</div>';
					html += '	<div class="popup-bg popup-bg-closable"></div>';
					html += '</div>';

					// show modal
					$('.popup-wrapper').remove();

					$('body').append(html);

					setTimeout(function () {
						$('html').addClass('popup-open popup-center');
					}, 10);
				} else {
					if (json['notification']) {
						show_notification(json['notification']);

						if (quick_buy) {
							location = Journal['checkoutUrl'];
						}
					} else {
						$('header').after('<div class="alert alert-success"><i class="fa fa-check-circle"></i> ' + json['success'] + ' <button type="button" class="close" data-dismiss="alert">&times;</button></div>');
					}
				}

				// Need to set timeout otherwise it wont update the total
				setTimeout(function () {
					$('#cart-total').html(json['total']);
					$('#cart-items').html(json['items_count']);

					if (json['items_count']) {
						$('#cart-items').removeClass('count-zero');
					} else {
						$('#cart-items').addClass('count-zero');
					}
				}, 100);

				if (Journal['scrollToTop']) {
					$('html, body').animate({ scrollTop: 0 }, 'slow');
				}

				$('.cart-content ul').load('index.php?route=common/cart/info ul li');

				if (parent.window['_QuickCheckout']) {
					parent.window['_QuickCheckout'].save();
				}
			}
		},
		error: function (xhr, ajaxOptions, thrownError) {
			alert(thrownError + '\r\n' + xhr.statusText + '\r\n' + xhr.responseText);
		}
	});
};

window['cart'].remove = function (key) {
	$.ajax({
		url: 'index.php?route=checkout/cart/remove',
		type: 'post',
		data: 'key=' + key,
		dataType: 'json',
		beforeSend: function () {
			$('#cart > button').button('loading');
		},
		complete: function () {
			$('#cart > button').button('reset');
		},
		success: function (json) {
			// Need to set timeout otherwise it wont update the total
			setTimeout(function () {
				$('#cart-total').html(json['total']);
				$('#cart-items').html(json['items_count']);

				if (json['items_count']) {
					$('#cart-items').removeClass('count-zero');
				} else {
					$('#cart-items').addClass('count-zero');
				}
			}, 100);

			if ($('html').hasClass('route-checkout-cart') || $('html').hasClass('route-checkout-checkout')) {
				location = 'index.php?route=checkout/cart';
			} else {
				$('.cart-content ul').load('index.php?route=common/cart/info ul li');
			}
		},
		error: function (xhr, ajaxOptions, thrownError) {
			alert(thrownError + '\r\n' + xhr.statusText + '\r\n' + xhr.responseText);
		}
	});
};

window['cart'].update = function (key, quantity) {
	$.ajax({
		url: 'index.php?route=checkout/cart/edit',
		type: 'post',
		data: 'key=' + key + '&quantity=' + (typeof(quantity) != 'undefined' ? quantity : 1),
		dataType: 'json',
		beforeSend: function () {
			$('#cart > button').button('loading');
		},
		complete: function () {
			$('#cart > button').button('reset');
		},
		success: function (json) {
			// Need to set timeout otherwise it wont update the total
			setTimeout(function () {
				$('#cart-total').html(json['total']);
				$('#cart-items').html(json['items_count']);

				if (json['items_count']) {
					$('#cart-items').removeClass('count-zero');
				} else {
					$('#cart-items').addClass('count-zero');
				}
			}, 100);

			if ($('html').hasClass('route-checkout-cart') || $('html').hasClass('route-checkout-checkout')) {
				location = 'index.php?route=checkout/cart';
			} else {
				$('.cart-content ul').load('index.php?route=common/cart/info ul li');
			}
		},
		error: function (xhr, ajaxOptions, thrownError) {
			alert(thrownError + '\r\n' + xhr.statusText + '\r\n' + xhr.responseText);
		}
	});
};

window['wishlist'].add = function (product_id) {
	$.ajax({
		url: 'index.php?route=account/wishlist/add',
		type: 'post',
		data: 'product_id=' + product_id,
		dataType: 'json',
		success: function (json) {
			$('.alert').remove();

			if (json['redirect']) {
				location = json['redirect'];
			}

			if (json['success']) {
				$('[data-toggle="tooltip"]').tooltip('hide');

				if (json['notification']) {
					show_notification(json['notification']);
				} else {
					$('header').after('<div class="alert alert-success"><i class="fa fa-check-circle"></i> ' + json['success'] + ' <button type="button" class="close" data-dismiss="alert">&times;</button></div>');
				}
			}

			$('#wishlist-total span').html(json['total']);
			$('#wishlist-total').attr('title', json['total']);
			$('.wishlist-badge').text(json['count']);

			if (json['count']) {
				$('.wishlist-badge').removeClass('count-zero');
			} else {
				$('.wishlist-badge').addClass('count-zero');
			}

			if (Journal['scrollToTop']) {
				$('html, body').animate({ scrollTop: 0 }, 'slow');
			}
		},
		error: function (xhr, ajaxOptions, thrownError) {
			alert(thrownError + '\r\n' + xhr.statusText + '\r\n' + xhr.responseText);
		}
	});
};

window['compare'].add = function (product_id) {
	$.ajax({
		url: 'index.php?route=product/compare/add',
		type: 'post',
		data: 'product_id=' + product_id,
		dataType: 'json',
		success: function (json) {
			$('.alert').remove();

			if (json['success']) {
				$('[data-toggle="tooltip"]').tooltip('hide');

				if (json['notification']) {
					show_notification(json['notification']);
				} else {
					$('header').after('<div class="alert alert-success"><i class="fa fa-check-circle"></i> ' + json['success'] + ' <button type="button" class="close" data-dismiss="alert">&times;</button></div>');
				}

				$('#compare-total').html(json['total']);
				$('.compare-badge').text(json['count']);

				if (json['count']) {
					$('.compare-badge').removeClass('count-zero');
				} else {
					$('.compare-badge').addClass('count-zero');
				}

				if (Journal['scrollToTop']) {
					$('html, body').animate({ scrollTop: 0 }, 'slow');
				}
			}
		},
		error: function (xhr, ajaxOptions, thrownError) {
			alert(thrownError + '\r\n' + xhr.statusText + '\r\n' + xhr.responseText);
		}
	});
};

window['quickview'] = function (product_id) {
	product_id = parseInt(product_id, 10);

	// hide tooltip
	$('[data-toggle="tooltip"]').tooltip('hide');

	var html = '';

	html += '<div class="popup-wrapper popup-quickview">';
	html += '	<div class="popup-container">';
	html += '		<button class="btn popup-close"></button>';
	html += '		<div class="popup-body">';
	html += '			<div class="popup-inner-body">';
	html += '				<div class="journal-loading"><i class="fa fa-spinner fa-spin"></i></div>';
	html += '				<iframe src="index.php?route=journal3/product&product_id=' + product_id + '&popup=quickview" width="100%" height="100%" frameborder="0" onload="this.height = this.contentWindow.document.body.offsetHeight; $(this).prev(\'.journal-loading\').hide();"></iframe>';
	html += '			</div>';
	html += '		</div>';
	html += '	</div>';
	html += '	<div class="popup-bg popup-bg-closable"></div>';
	html += '</div>';

	// show modal
	$('.popup-wrapper').remove();

	$('body').append(html);

	setTimeout(function () {
		$('html').addClass('popup-open popup-center');
	}, 10);
};

window['open_popup'] = function (module_id) {
	if ($('html').hasClass('iphone') || $('html').hasClass('ipad')) {
		iNoBounce.enable();
	}

	module_id = parseInt(module_id, 10);

	var html = '';

	html += '<div class="popup-wrapper popup-module">';
	html += '	<div class="popup-container">';
	html += '		<button class="btn popup-close"></button>';
	html += '		<div class="popup-body">';
	html += '		<div class="popup-inner-body">';
	html += '		</div>';
	html += '		</div>';
	html += '	</div>';
	html += '	<div class="popup-bg popup-bg-closable"></div>';
	html += '</div>';

	// show modal
	$('.popup-wrapper').remove();

	$('body').append(html);

	setTimeout(function () {
		$('html').addClass('popup-open popup-center');
	}, 10);

	$('.popup-container').css('visibility', 'hidden');

	$.ajax({
		url: 'index.php?route=journal3/popup/get&module_id=' + module_id + '&popup=module',
		success: function (html) {
			var $html = $(html);
			var $popup = $html.siblings('.module-popup');
			var $style = $html.siblings('style');
			var $content = $popup.find('.popup-container');

			$('#popup-style-' + module_id).remove();
			$('head').append($style.attr('id', 'popup-style-' + module_id));
			$('.popup-wrapper').attr('class', $popup.attr('class'));
			$('.popup-container').html($content.html());

			$('.popup-container').css('visibility', 'visible');
		},
		error: function (xhr, ajaxOptions, thrownError) {
			alert(thrownError + '\r\n' + xhr.statusText + '\r\n' + xhr.responseText);
		}
	});
};

window['open_login_popup'] = function () {
	if ($('html').hasClass('iphone') || $('html').hasClass('ipad')) {
		iNoBounce.enable();
	}

	var html = '';

	html += '<div class="popup-wrapper popup-login">';
	html += '	<div class="popup-container">';
	html += '		<button class="btn popup-close"></button>';
	html += '		<div class="popup-body">';
	html += '		<div class="popup-inner-body">';
	html += '			<div class="journal-loading"><i class="fa fa-spinner fa-spin"></i></div>';
	html += '			<iframe src="index.php?route=account/login&popup=login" width="100%" height="100%" frameborder="0" onload="this.height = this.contentWindow.document.body.offsetHeight; $(this).prev(\'.journal-loading\').fadeOut();"></iframe>';
	html += '		</div>';
	html += '		</div>';
	html += '	</div>';
	html += '	<div class="popup-bg popup-bg-closable"></div>';
	html += '</div>';

	// show modal
	$('.popup-wrapper').remove();

	$('body').append(html);

	setTimeout(function () {
		$('html').addClass('popup-open popup-center');
	}, 10);
};

window['open_register_popup'] = function () {
	if ($('html').hasClass('iphone') || $('html').hasClass('ipad')) {
		iNoBounce.enable();
	}

	var html = '';

	html += '<div class="popup-wrapper popup-register">';
	html += '	<div class="popup-container">';
	html += '		<button class="btn popup-close"></button>';
	html += '		<div class="popup-body">';
	html += '		<div class="popup-inner-body">';
	html += '			<div class="journal-loading"><i class="fa fa-spinner fa-spin"></i></div>';
	html += '			<iframe src="index.php?route=account/register&popup=register" width="100%" height="100%" frameborder="0" onload="this.height = this.contentWindow.document.body.offsetHeight; $(this).prev(\'.journal-loading\').fadeOut();"></iframe>';
	html += '		</div>';
	html += '		</div>';
	html += '	</div>';
	html += '	<div class="popup-bg popup-bg-closable"></div>';
	html += '</div>';

	// show modal
	$('.popup-wrapper').remove();

	$('body').append(html);

	setTimeout(function () {
		$('html').addClass('popup-open popup-center');
	}, 10);
};

window['show_notification'] = function (opts) {
	opts = $.extend({
		position: 'center',
		className: '',
		title: '',
		image: '',
		message: '',
		buttons: [],
		timeout: Journal.notificationHideAfter
	}, opts);

	if ($('.notification-wrapper-' + opts.position).length === 0) {
		$('body').append('<div class="notification-wrapper notification-wrapper-' + opts.position + '"></div>');
	}

	var html = '';

	var buttons = $.map(opts.buttons, function (button) {
		return '<a class="' + button.className + '" href="' + button.href + '">' + button.name + '</a>';
	});

	html += '<div class="notification ' + opts.className + '">';
	html += '	<button class="btn notification-close"></button>';
	html += '	<div class="notification-content">';

	if (opts.image) {
		html += '		<img src="' + opts.image + '" srcset="' + opts.image + ' 1x, ' + opts.image2x + ' 2x">';
	}

	html += '		<div>';
	html += '			<div class="notification-title">' + opts.title + '</div>';
	html += '			<div class="notification-text">' + opts.message + '</div>';
	html += '		</div>';
	html += '	</div>';

	if (buttons && buttons.length) {
		html += '<div class="notification-buttons">' + buttons.join('\n') + '</div>';
	}

	html += '</div>';

	var $notification = $(html);

	$('.notification-wrapper-' + opts.position).append($notification);

	if (opts.timeout) {
		setTimeout(function () {
			$notification.find('.notification-close').trigger('click');
		}, opts.timeout);
	}

	return $notification;
};

window['loader'] = function (el, status) {
	var $el = $(el);

	if (status) {
		$el.attr('style', 'position: relative');
		$el.append('<div class="journal-loading-overlay"><div class="journal-loading"><i class="fa fa-spinner fa-spin"></i></div></div>');
	} else {
		$el.attr('style', '');
		$el.find('.journal-loading-overlay').remove();
	}
};

window['resize_iframe'] = function (module_id, height) {
	$('.module-popup-' + module_id + ' iframe').height(height);
};
;
function journal_enable_countdown() {
	$('.countdown').each(function () {

		var $this = $(this);

		if ($this.data('_isEnabled')) {
			return;
		}

		$this.data('_isEnabled', true);

		$this.countdown({
			date: $this.data('date'),
			render: function (data) {
				return $(this.el).html(
					'<div>' + this.leadingZeros(data.days, 2) + ' <span>' + Journal['countdownDay'] + '</span></div>' +
					'<div>' + this.leadingZeros(data.hours, 2) + ' <span>' + Journal['countdownHour'] + '</span></div>' +
					'<div>' + this.leadingZeros(data.min, 2) + ' <span>' + Journal['countdownMin'] + '</span></div>' +
					'<div>' + this.leadingZeros(data.sec, 2) + ' <span>' + Journal['countdownSec'] + '</span></div>');
			}
		});
	});
}

function journal_enable_stepper() {
	$('.stepper').each(function () {
		var $this = $(this);

		if ($this.data('_isEnabled')) {
			return;
		}

		$this.data('_isEnabled', true);

		var $input = $this.find('input[name^="quantity"]');
		var value = $input.val();
		var minimum = parseInt($input.data('minimum')) || 1;

		$this.find('.fa-angle-up').on('click', function () {
			$input.val(parseInt($input.val()) + 1);
			$input.trigger('change');
		});

		$this.find('.fa-angle-down').on('click', function () {
			if (parseInt($input.val()) > minimum) {
				$input.val(parseInt($input.val()) - 1);
				$input.trigger('change');
			}
		});

		$input.on('keypress', function (e) {
			if ((e.which < 48 || e.which > 57) && [8].indexOf(e.which) === -1) {
				e.preventDefault();
			}
		});

		$input.on('keydown', function (e) {
			if (e.which === 38) {
				e.preventDefault();
				$input.val(parseInt($input.val()) + 1);
				$input.trigger('change');
			}

			if (e.which === 40) {
				e.preventDefault();
				if (parseInt($input.val()) > minimum) {
					$input.val(parseInt($input.val()) - 1);
					$input.trigger('change');
				}
			}
		});

		$input.on('blur', function () {
			if ((parseInt($input.val()) || 0) < minimum) {
				$input.val(value);
				$input.trigger('change');
			}
		});
	});
}

jQuery(function ($) {
	var $html = $('html');
	var $body = $('body');
	var $content = $('#content');
	var $column_left = $('#column-left');
	var $column_right = $('#column-right');
	var $panel_group = $('.panel-group');
	var $main_products = $('.main-products');

	// Bg video
	(function () {
		var lazyVideos = [].slice.call(document.querySelectorAll('.video-bg'));

		if ('IntersectionObserver' in window) {
			var lazyVideoObserver = new IntersectionObserver(function (entries, observer) {
				entries.forEach(function (video) {
					if (video.isIntersecting) {
						var source = document.createElement('source');
						source.src = video.target.getAttribute('data-src');

						video.target.appendChild(source);
						video.target.load();
						video.target.classList.remove('lazy');

						lazyVideoObserver.unobserve(video.target);
					}
				});
			});

			lazyVideos.forEach(function (lazyVideo) {
				lazyVideoObserver.observe(lazyVideo);
			});
		}
	})();

	// Tooltip class
	$(document).on('show.bs.tooltip', function (e) {
		if ($html.hasClass('touchevents')) {
			e.preventDefault();
		}

		var $target = $(e.target);
		var cls = $target.data('tooltipClass');

		if (cls) {
			$target.data('bs.tooltip').$tip.addClass(cls);
		}
	});

	// Popover class
	$(document).on('show.bs.popover', function (e) {
		if ($html.hasClass('touchevents')) {
			e.preventDefault();
		}

		var $target = $(e.target);
		var cls = $target.data('popoverClass');

		if (cls) {
			$target.data('bs.popover').$tip.addClass(cls);
		}
	});

	// Datepicker class
	$(document).on('dp.show', function (e) {
		var $target = $(e.target);
		var cls = $target.data('pickerClass');

		if (cls) {
			$target.data('DateTimePicker').widget.addClass(cls);
		}
	});

	// Dropdowns animation
	$(document).on('shown.bs.dropdown', function (e) {
		var $target = $(e.target);
		var $toggle = $target.find('> .dropdown-toggle');

		$toggle.addClass('disabled');

		// reflow
		$target.outerWidth();

		$target.addClass('animating');
	});

	$(document).on('hide.bs.dropdown', function (e) {
		var $target = $(e.target);
		var $toggle = $target.find('> .dropdown-toggle');

		$target.removeClass('animating');

		$toggle.removeClass('disabled');
	});

	// Dropdowns
	if ('ontouchstart' in document) {
		$('.main-menu .dropdown .dropdown > .dropdown-toggle, .flyout-menu .dropdown .dropdown > .dropdown-toggle, .mini-search .search-categories-button').on('click', function (e) {
			var $this = $(this);
			var $parent = $this.parent();
			var isOpen = $parent.hasClass('open');
			var isLink = false;

			// close other dropdowns
			$parent.parent().find('.open').removeClass('open');

			// toggle current dropdown
			if (isOpen) {
				if ($this.attr('href')) {
					isLink = true;
				} else {
					$parent.removeClass('open').trigger('hide.bs.dropdown');
				}
			} else {
				$parent.addClass('open').trigger('shown.bs.dropdown');
			}

			if (!isLink) {
				return false;
			}
		});
	} else {
		// Dropdowns on hover
		function mouseOver() {
			var $this = $(this);
			var $trigger = $('> .dropdown-toggle', this);

			clearTimeout(this.__timeout);

			$trigger.attr('aria-expanded', 'true').attr('data-toggle', '');

			$this.addClass('open');

			// reflow
			$this.outerWidth();

			$this.addClass('animating');
		}

		function mouseOut() {
			var $this = $(this);
			var $trigger = $('> .dropdown-toggle', this);

			$this.removeClass('animating');

			clearTimeout(this.__timeout);

			this.__timeout = setTimeout(function () {
				$this.removeClass('open');

				$trigger.attr('aria-expanded', 'false');
			}, 300);
		}

		$('.dropdown').each(function () {
			var $this = $(this);

			if ($this.is($('.search-page #search'))) {
				$('> .dropdown-toggle', this).on('click', function () {
					var $this = $(this);
					var $parent = $this.parent();
					var isOpen = $parent.hasClass('open');
					var isLink = false;

					// close other dropdowns
					$parent.parent().find('.open').removeClass('open');

					// toggle current dropdown
					if (isOpen) {
						if ($this.attr('href')) {
							isLink = true;
						} else {
							$parent.removeClass('open').trigger('hide.bs.dropdown');
						}
					} else {
						$parent.addClass('open').trigger('shown.bs.dropdown');
					}

					if (!isLink) {
						return false;
					}
				});
			} else if ($this.hasClass('main-menu-item')) {
				$this.hoverIntent(mouseOver, mouseOut);
			} else {
				$this.hover(mouseOver, mouseOut);
			}
		});
	}

	// Collapse .panel-active toggle
	$panel_group.on('show.bs.collapse', function (e) {
		$(e.target).parent().addClass('panel-active');
		$(e.target).parent().removeClass('panel-collapsed');
	});

	$panel_group.on('hide.bs.collapse', function (e) {
		$(e.target).parent().removeClass('panel-active');
		$(e.target).parent().addClass('panel-collapsing');
	});

	$panel_group.on('hidden.bs.collapse', function (e) {
		$(e.target).parent().removeClass('panel-collapsing');
		$(e.target).parent().addClass('panel-collapsed');
	});

	// Accordion Menu Collapse .open toggle
	$(document).delegate('.accordion-menu span[data-toggle="collapse"]', 'click', function (e) {
		e.preventDefault();

		$(this).closest('.menu-item').toggleClass('open');
	});

	$(document).delegate('.mobile .accordion-menu li > a', 'click', function (e) {
		var $this = $(this);
		var $trigger = $this.find('.open-menu');

		if (!$trigger.length) {
			return;
		}

		if ($trigger.attr('aria-expanded') === 'true' && $this.attr('href')) {
			return;
		}

		e.preventDefault();

		$($trigger.data('target')).collapse('toggle');
	});

	// Infinite Scroll
	if (Journal['infiniteScrollStatus'] && $.ias && $main_products.length) {
		Journal.infiniteScrollInstance = $.ias({
			container: '.main-products',
			item: '.product-layout',
			pagination: '.pagination-results',
			next: '.pagination a.next'
		});

		Journal.infiniteScrollInstance.extension(new IASTriggerExtension({
			offset: parseInt(Journal['infiniteScrollOffset'], 10) || Infinity,
			text: Journal['infiniteScrollLoadNext'],
			textPrev: Journal['infiniteScrollLoadPrev'],
			htmlPrev: '<div class="ias-trigger ias-trigger-prev"><a class="btn">{text}</a></div>',
			html: '<div class="ias-trigger ias-trigger-next"><a class="btn">{text}</a></div>'
		}));

		Journal.infiniteScrollInstance.extension(new IASSpinnerExtension({
			html: '<div class="ias-spinner"><i class="fa fa-spinner fa-spin"></i></div>'
		}));

		Journal.infiniteScrollInstance.extension(new IASNoneLeftExtension({
			text: Journal['infiniteScrollNoneLeft']
		}));

		Journal.infiniteScrollInstance.extension(new IASPagingExtension());

		Journal.infiniteScrollInstance.extension(new IASHistoryExtension({
			prev: '.pagination a.prev'
		}));

		Journal.infiniteScrollInstance.on('loaded', function (data) {
			$('.pagination-results').html($(data).find('.pagination-results'));
		});

		Journal.infiniteScrollInstance.on('rendered', function (data) {
			journal_enable_countdown();

			journal_enable_stepper();
		});
	}

	// Revolution Slider
	$('.revolution').each(function () {
		var $this = $(this);
		var $img = $('>img', this);

		$this.css('height', $img.height());

		var options = $.extend(true, {
			spinner: 'off',
			sliderType: 'standard',
			sliderLayout: 'auto',
			autoHeight: 'on',
			navigation: {
				arrows: { enable: true }
			}
		}, $this.data('options'));

		var $slider = $('.rev_slider', this).revolution(options);

		$slider.on('revolution.slide.onloaded', function () {
			$img.remove();
			$this.removeClass('rev_hide_navigation');

			$this.find('.tp-caption-hotspot').popover({
				container: 'body',
				trigger: 'hover',
				html: true,
				template: '<div class="popover" role="tooltip"><div class="arrow"></div><div class="popover-content"></div></div>'
			});
		});

		$slider.on('revolution.slide.onchange', function () {
			$this.removeAttr('style');
		});

		$this.data('slider', $slider);
	});

	// Layer Slider
	$('.layerslider').each(function () {
		var $this = $(this);

		var $img = $('>img', this);

		$this.css({
			width: $this.width(),
			height: $this.height()
		});

		// var props = [
		// 	'border-top-width',
		// 	'border-bottom-width',
		// 	'border-left-width',
		// 	'border-right-width'
		// ];
		//
		// $this.find('.ls-layer').each(function () {
		// 	var $this = $(this);
		// 	var css = {};
		//
		// 	props.forEach(function (prop) {
		// 		css[prop] = $this.css(prop);
		// 	});
		//
		// 	$this.css(css);
		// });

		var options = $.extend(true, {
			sliderVersion: '6.1.0',
			skin: 'v6',
			maxRatio: 1,
			navStartStop: false,
			showCircleTimer: false,
			tnContainerWidth: '100%',
			skinsPath: 'catalog/view/theme/journal3/lib/layerslider/skins/'
		}, $this.data('options'));

		$this.on('sliderDidLoad', function () {
			$img.remove();
		});

		var $slider = $this.layerSlider(options);

		$slider.on('slideTimelineDidCreate', function () {
			$this.find('.ls-layer-hotspot').each(function () {
				var $this = $(this);

				if (!$this.data('bs.popover')) {
					$this.popover({
						container: 'body',
						trigger: 'hover',
						html: true,
						template: '<div class="popover" role="tooltip"><div class="arrow"></div><div class="popover-content"></div></div>'
					});
				}
			});
		});
	});

	// Master Slider
	$('.master-slider').each(function () {
		var $this = $(this);

		var options = $.extend(true, {
			loop: true,
			mobileBGVideo: true
		}, $this.data('options'));

		var $slider = $this.masterslider(options);

		var $img = $('>img', $(this).parent());

		$slider.masterslider('slider').api.addEventListener(MSSliderEvent.INIT, function () {

			$slider.parent().find('.journal-loading').remove();

			$img.css({
				position: 'absolute',
				'z-index': -1
			});

			setTimeout(function () {
				$img.remove();
				$this.parent().css('background-image', 'none');
			}, 1500);
		});

		$slider.masterslider('slider').api.addEventListener(MSSliderEvent.CHANGE_START, function () {
			$this.find('video').each(function () {
				$(this)[0].pause();
			});
		});

		// var $current = null;

		// $slider.masterslider('slider').api.addEventListener(MSSliderEvent.CHANGE_START, function (e) {
		// 	$('.no-animation').removeClass('no-animation');
		// 	$('.ms-prev').removeClass('ms-prev');
		// 	$('.ms-next').removeClass('ms-next').addClass('ms-prev');
		// 	$(e.target.currentSlide.$element).addClass('ms-next');
		// 	$('.ms-slide').not($(e.target.currentSlide.$element)).not($current).each(function () {
		// 		$(this).addClass('no-animation');
		// 	});
		// });
		//
		// $slider.masterslider('slider').api.addEventListener(MSSliderEvent.CHANGE_END, function (e) {
		// 	$('.no-animation').removeClass('no-animation');
		// 	$current = $(e.target.currentSlide.$element);
		// });

		if ($this.data('parallax')) {
			MSScrollParallax.setup($slider.masterslider('slider'), 0, $this.data('parallax'), false);
		}
	});

	// Isotope
	$('.isotope').each(function () {
		var $this = $(this);
		var filter = $this.find('ul .active a').attr('data-filter') || null;

		var $isotope = $this.find('.isotope-grid').isotope({
			itemSelector: '.isotope-item',
			filter: filter
		});

		$this.find('ul a').on('click', function () {
			var $this2 = $(this);

			$this.find('ul li').removeClass('active');
			$this2.closest('li').addClass('active');

			$isotope.isotope({
				filter: $this2.attr('data-filter')
			});
		});
	});

	// Swiper
	$('.swiper').each(function () {
		var $this = $(this);
		var c = 'c0';

		if ($content.has($this).length) {
			c = 'c' + window['Journal']['columnsCount'];
		} else if ($column_left.has($this).length || $column_right.has($this).length) {
			c = 'sc';
		}

		var itemsPerRow = $this.data('items-per-row') ? $this.data('items-per-row')[c] : { 0: { items: 1, spacing: 0 } };
		var breakpoints = {};

		$.each(itemsPerRow, function (v, k) {
			breakpoints[v] = {
				slidesPerView: parseInt(k.items, 10),
				slidesPerGroup: parseInt(k.items, 10),
				spaceBetween: parseInt(k.spacing, 10)
			}
		});

		var options = $.extend({
			init: false,
			slidesPerView: parseInt(itemsPerRow[0].items, 10),
			slidesPerGroup: parseInt(itemsPerRow[0].items, 10),
			spaceBetween: parseInt(itemsPerRow[0].spacing, 10),
			breakpoints: breakpoints,
			observer: true,
			observeParents: true,
			paginationClickable: true,
			preventClicks: false,
			preventClicksPropagation: false,
			simulateTouch: true,
			watchSlidesProgress: true,
			watchSlidesVisibility: true,
			navigation: {
				nextEl: $this.find('.swiper-button-next'),
				prevEl: $this.find('.swiper-button-prev')
			},
			pagination: {
				el: $this.find('.swiper-pagination'),
				type: 'bullets',
				clickable: true
			},
			scrollbar: $this.find('.swiper-scrollbar'),
			scrollbarHide: false,
			scrollbarDraggable: true
		}, $this.data('options'));

		var swiper = new Swiper($('.swiper-container', this), options);

		function checkPages() {
			if ($('.product-image').hasClass('direction-vertical') && $this.hasClass('additional-images')) {
				var height = Journal['isPopup'] ? Journal['quickviewPageStyleAdditionalImagesHeightAdjustment'] : Journal['productPageStyleAdditionalImagesHeightAdjustment'];

				var interval = setInterval(function () {
					var imageHeight = $('.main-image .swiper-slide-visible img').outerHeight();

					if (imageHeight) {
						$this.css('height', imageHeight + (parseInt(height, 10) || 0));

						swiper.update();

						clearInterval(interval);

						$('.product-image').addClass('additional-images-loaded');
					}
				}, 1000);
			}

			if (swiper.isBeginning && swiper.isEnd) {
				$this.removeClass('swiper-has-pages');
			} else {
				$this.addClass('swiper-has-pages');
			}
		}

		swiper.on('init', checkPages);

		swiper.on('resize', checkPages);

		swiper.init();

		if (options.autoplay) {
			// pause on hover
			if (options.pauseOnHover) {
				$('.swiper-container', this).hover(function () {
					swiper.autoplay.stop();
				}, function () {
					swiper.autoplay.start();
				});
			}

			// stop autoplay for elements not in viewport
			swiper.on('observerUpdate', function () {
				var visible = $(swiper.$el).is(':visible');
				var running = swiper.autoplay.running;

				if (visible && !running) {
					swiper.autoplay.start();
				}

				if (!visible && running) {
					swiper.autoplay.stop();
				}
			});
		}

		$this.data('swiper', swiper);
	});

	// Gallery
	$(document).delegate('[data-gallery]', 'click', function () {
		var $this = $(this);
		var $gallery = $($this.data('gallery'));
		var index = parseInt($this.data('index'), 10) || 0;

		if ($gallery.data('lightGallery')) {
			$gallery.data('lightGallery').s.index = index;
		}

		$gallery.lightGallery($.extend({
			dynamic: true,
			dynamicEl: $gallery.data('images'),
			index: index,
			download: false,
			loadYoutubeThumbnail: false,
			loadVimeoThumbnail: false,
			share: false,
			pager: false,
			fullScreen: false,
			autoplay: false,
			autoplayControls: false,
			thumbWidth: 100,
			thumbContHeight: 100,
			thumbMargin: 0,
			showThumbByDefault: true,
			hash: false
		}, $gallery.data('options')));

		$gallery.on('onAfterOpen.lg', function () {
			$('.lg-backdrop').addClass($gallery.data('lightGallery').s.addClass);
		});

		return false;
	});

	// Catalog
	$('.module-catalog.image-on-hover .subitem').hover(function () {
		var $this = $(this);
		var $img = $this.closest('.item-content').find('.catalog-image img');

		if ($img.length) {
			$img[0]._src = $img.attr('src');
			$img[0]._srcSet = $img.attr('srcset');

			$img.attr('src', $this.data('image'));
			$img.attr('srcset', $this.data('image2x'));
		}
	}, function () {
		var $this = $(this);
		var $img = $this.closest('.item-content').find('.catalog-image img');

		if ($img.length) {
			$img.attr('src', $img[0]._src);
			$img.attr('srcset', $img[0]._srcSet);
		}
	});

	// Module Blocks Tab Expand
	$('.block-expand').on('click', function () {
		$(this).closest('.expand-block').find('.expand-content').toggleClass('block-expanded');
	});

	//Search focus
	$('.search-input').focus(
		function () {
			$(this).closest('.header-search').addClass('focused');
		}).blur(
		function () {
			$(this).closest('.header-search').removeClass('focused');
		});

	// Stepper
	journal_enable_stepper();

	// Countdown
	journal_enable_countdown();

	// Blog Search
	$('.module-blog_search').each(function () {
		var $this = $(this);
		var $input = $this.find('input');
		var $button = $this.find('button');

		$button.on('click', function () {
			var search = $input.val().trim();

			if (search) {
				parent.window.location = $this.data('url') + encodeURIComponent(search);
			}
		});

		$input.on('keydown', function (e) {
			if (e.keyCode === 13) {
				var search = $input.val().trim();

				if (search) {
					parent.window.location = $this.data('url') + encodeURIComponent(search);
				}
			}
		});
	});

	// Newsletter Module
	$(document).delegate('.module-newsletter .btn-primary', 'click', function (e) {
		e.preventDefault();

		var $this = $(this);
		var $form = $this.closest('form');

		function ajax(unsubscribe) {
			$.ajax({
				url: $form.attr('action') + (unsubscribe ? '&unsubscribe=1' : ''),
				type: 'post',
				dataType: 'json',
				data: $form.serialize(),
				beforeSend: function () {
					$this.button('loading');
				},
				complete: function () {
					$this.button('reset');
				},
				success: function (json) {
					if (json.status === 'success') {
						if (json.response.unsubscribe) {
							if (confirm(json.response.message)) {
								ajax(true);
							}
						} else {
							alert(json.response.message);
						}
					} else {
						alert(json.response);
					}
				},
				error: function (xhr, ajaxOptions, thrownError) {
					alert(thrownError + '\r\n' + xhr.statusText + '\r\n' + xhr.responseText);
				}
			})
		}

		ajax();
	});

	// Header Notice
	$('.module-header_notice').each(function () {
		var $this = $(this);
		var options = $this.data('options');
		var cookie = 'hn-' + options['cookie'];

		if (!Cookies.get(cookie)) {
			$this.slideDown();
		}

		$this.find('.header-notice-close-button button').on('click', function () {
			anime({
				targets: $this[0],
				height: 0,
				duration: parseInt(options['duration']),
				easing: options['ease'],
				complete: function () {
					$this.remove();
				}
			});

			Cookies.set(cookie, '1', { expires: 365 });
		});
	});

	// Layout Notice
	$('.module-layout_notice').each(function () {
		var $this = $(this);
		var options = $this.data('options');
		var cookie = 'ln-' + options['cookie'];

		if (!Cookies.get(cookie)) {
			$this.slideDown();
		}

		$this.find('.layout-notice-close-button button').on('click', function () {
			anime({
				targets: $this[0],
				height: 0,
				duration: parseInt(options['duration']),
				easing: options['ease'],
				complete: function () {
					$this.remove();
				}
			});

			Cookies.set(cookie, '1', { expires: 365 });
		});
	});

	// Notification Module
	$('.module-notification').each(function () {
		var $this = $(this);
		var options = $this.data('options');
		var cookie = 'n-' + options['cookie'];

		if (!Cookies.get(cookie)) {
			$this.find('.notification-close').on('click', function () {
				Cookies.set(cookie, '1', { expires: 365 });
			});
		}
	});

	$(document).delegate('.notification-close', 'click', function () {
		var $this = $(this);
		var height = $this.parent().outerHeight();

		$this.parent().next('div').css('margin-top', -height);

		$('.removed').removeClass('removed');

		$this.parent().addClass('fade-out').on('transitionend MSTransitionEnd webkitTransitionEnd oTransitionEnd', function () {
			$(this).next('div').addClass('removed').css('margin-top', '');
			$(this).remove();
		});
	});

	// Popup Module
	$('.module-popup').each(function () {
		var $this = $(this);
		var options = $.extend({
			message: $this.html(),
			timeout: 0
		}, $this.data('options'));
		var cookie = 'p-' + options['cookie'];

		if (!Cookies.get(cookie)) {
			setTimeout(function () {
				$('html').addClass('popup-open popup-center');

				var $checkbox = $this.find('.popup-dont-show input[type="checkbox"]');

				$checkbox.on('change', function () {
					if ($(this).is(':checked')) {
						Cookies.set(cookie, '1', { expires: 365 });
					} else {
						Cookies.remove(cookie);
					}
				});

				if ($checkbox.is(':checked')) {
					Cookies.set(cookie, '1', { expires: 365 });
				}
			}, parseInt(options['showAfter'], 10) || 1);
		}

		var hideAfter = parseInt(options['hideAfter'], 10) || 0;

		if (hideAfter) {
			setTimeout(function () {
				$html.removeClass('popup-open popup-center');

				if ($html.hasClass('iphone') || $html.hasClass('ipad')) {
					iNoBounce.disable();
				}

				$('.popup-wrapper').attr('removing', true);

				setTimeout(function () {
					if ($('.popup-wrapper').attr('removing')) {
						$('.popup-wrapper').remove();
					}
				}, 5000);
			}, hideAfter);
		}
	});

	$(document).delegate('.popup-close, .popup-bg-closable, .btn-popup:not([href])', 'click', function () {
		$html.removeClass('popup-open popup-center');

		if ($html.hasClass('iphone') || $html.hasClass('ipad')) {
			iNoBounce.disable();
		}

		$('.popup-wrapper').attr('removing', true);

		setTimeout(function () {
			if ($('.popup-wrapper').attr('removing')) {
				$('.popup-wrapper').remove();
			}
		}, 5000);
	});

	$(document).on('keydown', function (e) {
		if (e.keyCode === 27) {
			parent.$('.popup-bg-closable').trigger('click');
		}
	});

	// Login / Register Popup
	$(document).delegate('html.popup-login .login-form button, html.popup-register .register-form .buttons button', 'click', function (e) {
		e.preventDefault();

		var $this = $(this);
		var $form = $this.closest('form');

		$form.find('.has-error').removeClass('has-error');
		$form.find('.text-danger').remove();

		$.ajax({
			url: $form.attr('action'),
			type: 'post',
			data: $form.serialize(),
			dataType: 'json',
			beforeSend: function () {
				$this.button('loading');
			},
			complete: function () {
				$this.button('reset');
			},
			success: function (json) {
				if (json.status === 'success') {
					if ($form.hasClass('login-form')) {
						if (parent.$('html').hasClass('route-account-logout')) {
							parent.window.location = $('base').attr('href');
						} else {
							parent.window.location.reload();
						}
					} else {
						if (json.customer) {
							parent.window.location = $('base').attr('href');
						} else {
							parent.window.location = 'index.php?route=account/success';
						}
					}
				} else {
					$.each(json.response, function (field, value) {
						if (field === 'custom_field') {
							$.each(value, function (key, val) {
								$('#custom-field' + key).addClass('has-error').find('input').after('<div class="text-danger">' + val + '</div>');
							});
						} else {
							$form.find('[name="' + field + '"]').closest('.form-group').addClass('has-error').after('<div class="text-danger">' + value + '</div>');
						}
					});

					if (json.response.warning) {
						var $span = $('<span style="display: none !important;"></span>').html(json.response.warning);

						$span.appendTo($('body'));

						var msg = $span.html();

						$span.remove();

						alert(msg);
					}
				}
			}
		});
	});

	// Contact Form
	$('.module-form').each(function () {
		if ($.fn.datetimepicker) {
			$('.date', this).datetimepicker({
				pickTime: false
			});

			$('.datetime', this).datetimepicker({
				pickDate: true,
				pickTime: true
			});

			$('.time', this).datetimepicker({
				pickDate: false
			});
		}
	});

	$(document).delegate('.btn-extra', 'click', function () {
		parent.window.__popup_url = $(this).data('product_url') || '';
	});

	$(document).delegate('.module-form .btn-primary', 'click', function (e) {
		e.preventDefault();

		var $this = $(this);
		var $form = $this.closest('.module-form').find('form');
		$form.find('.has-error').removeClass('has-error');

		var data = $form.serializeArray();

		data.push({
			name: 'url',
			value: parent.window.__popup_url || parent.window.location.toString()
		});

		$.ajax({
			url: $form.attr('action'),
			type: 'post',
			data: data,
			dataType: 'json',
			beforeSend: function () {
				$this.button('loading');
			},
			complete: function () {
				$this.button('reset');
			},
			success: function (response) {
				if (response.status === 'success') {
					alert(response.response.message);
					$form[0].reset();
					parent.window.__popup_url = undefined;
					parent.$('.module-popup-' + Journal['modulePopupId'] + ' .popup-close').trigger('click');
				}

				if (response.status === 'error') {
					$.each(response.response.errors, function (field, error) {
						if (field === 'agree') {
							alert(error);
						} else if (field === 'captcha') {
							$form.find('.captcha').addClass('has-error');
						} else {
							$form.find('[name^="' + field + '"]').closest('.form-group').addClass('has-error');
						}
					});
				}
			},
			error: function (xhr, ajaxOptions, thrownError) {
				alert(thrownError + '\r\n' + xhr.statusText + '\r\n' + xhr.responseText);
			}
		});
	});

	// Grid / List toggle
	$(document).delegate('.grid-list .view-btn', 'click', function () {
		var $this = $(this);
		var $products = $('.main-products');
		var view = $this.data('view');
		var current = $products.hasClass('product-grid') ? 'grid' : 'list';

		$this.tooltip('hide');

		if (view !== current) {
			$products.addClass('no-transitions').removeClass('product-' + current).addClass('product-' + view);
			setTimeout(function () {
				$products.removeClass('no-transitions');
			}, 1);
			Cookies.set('view', view, { expires: 365 });
		}

		$('.grid-list .view-btn').removeClass('active');
		$this.addClass('active');
	});

	// Main Menu Hover Site Overlay
	$('.desktop-main-menu-wrapper #main-menu > .j-menu > .main-menu-item').first().addClass('first-dropdown');

	var $desktop_main_menu_wrapper = $('.desktop-main-menu-wrapper');

	$desktop_main_menu_wrapper.delegate('.main-menu > .j-menu > .menu-item:not(.dropdown)', 'mouseover', function () {
		$body.addClass('menu-hover');
	});

	$desktop_main_menu_wrapper.delegate('.main-menu > .j-menu > .menu-item:not(.dropdown)', 'mouseleave', function () {
		$body.removeClass('menu-hover');
	});

	$desktop_main_menu_wrapper.delegate('.main-menu > .j-menu > .dropdown', 'mouseover', function () {
		$body.addClass('menu-open');
	});

	$desktop_main_menu_wrapper.delegate('.main-menu', 'mouseleave', function () {
		$body.removeClass('menu-open');
	});

	// $desktop_main_menu_wrapper.delegate('.main-menu > .j-menu > .mega-menu', 'mouseover', function () {
	// 	$(this).addClass('animation-delay');
	// });
	//
	// $desktop_main_menu_wrapper.delegate('.main-menu > .j-menu > .mega-menu', 'mouseleave', function () {
	// 	var $this = $(this);
	// 	setTimeout(function () {
	// 		$this.removeClass('animation-delay');
	// 	}, 250);
	// });

	//$('head').append('<style>.desktop-main-menu-wrapper .menu-item.dropdown::before {height: ' + ($body.height() - $('header').height()) + 'px} </style>');

	if (($html.hasClass('iphone') || $html.hasClass('ipad')) && !$html.hasClass('popup-open')) {
		iNoBounce.disable();
	}

	// Mobile Menu Wrapper
	$(document).delegate('.menu-trigger', 'click', function (e) {
		e.stopPropagation();

		$html.addClass('mobile-overlay mobile-main-menu-container-open');

		if ($html.hasClass('mobile-menu-active')) {
			$('[data-is-open]').each(function () {
				$('> a > .open-menu', this).trigger('click');
				$(this).removeAttr('data-is-open');
			});
		}

		var $container = $('.mobile-main-menu-container');

		$container.outerWidth();

		$container.addClass('animating');

		if ($html.hasClass('iphone') || $html.hasClass('ipad')) {
			iNoBounce.enable();
		}
	});

	// Mobile Cart Wrapper
	if ($html.hasClass('mobile-header-active')) {
		$('.cart-content > ul').appendTo('.mobile-cart-content-wrapper');
	}

	$(document).delegate('.mobile-header-active .cart-heading', 'click', function (e) {
		e.stopPropagation();

		$html.addClass('mobile-overlay mobile-cart-content-container-open');

		var $totals = $('.cart-totals').outerHeight();

		$('.cart-products').css('padding-bottom', $totals - 1);

		var $container = $('.mobile-cart-content-container');

		$container.outerWidth();

		$container.addClass('animating');

		if ($html.hasClass('iphone') || $html.hasClass('ipad')) {
			iNoBounce.enable();
		}
		return false;
	});

	// Mobile Filter Wrapper
	if (Journal['isPhone'] || (Journal['isTablet'] && (!Journal['globalPageColumnLeftTabletStatus'] || !Journal['globalPageColumnLeftTabletStatus']))) {
		if ($('.module-filter').length) {
			$('.module-filter h3 > *').prependTo('.mobile-filter-container .mobile-wrapper-header');
			$('.module-filter').appendTo('.mobile-filter-wrapper');

			$('<a class="mobile-filter-trigger btn">' + Journal['mobileFilterButtonText'] + '</a>').appendTo('body');
		}
	}

	$(document).delegate('.mobile-header-active .mobile-filter-trigger', 'click', function (e) {
		e.stopPropagation();

		$html.addClass('mobile-overlay mobile-filter-container-open');

		var $container = $('.mobile-filter-container');

		$container.outerWidth();

		$container.addClass('animating');

		if ($html.hasClass('iphone') || $html.hasClass('ipad')) {
			iNoBounce.enable();
		}

		return false;
	});

	// Close Mobile Wrapper
	$(document).delegate('.x, .site-wrapper, .close-filter', 'click', function () {
		$('.mobile-container.animating').removeClass('animating');

		$html.removeClass('mobile-overlay');

		setTimeout(function () {
			$html.removeClass('mobile-main-menu-container-open mobile-cart-content-container-open mobile-filter-container-open');
		}, 300);

		if ($html.hasClass('iphone') || $html.hasClass('ipad')) {
			iNoBounce.disable();
		}
	});

	// Product Page
	if ($html.hasClass('route-product-product')) {
		// sync image carousels
		$(document).delegate('.additional-image', 'click', function () {
			$('.additional-image').removeClass('swiper-slide-active');
			$(this).addClass('swiper-slide-active');

			var $s = $('.main-image').data('swiper');

			if ($s.params.loop) {
				$s.slideToLoop($(this).data('index'), 0);
			} else {
				$s.slideTo($(this).data('index'), 0);
			}
		});

		// image zoom
		if (!('ontouchstart' in document)) {
			if (Journal['isPopup'] ? Journal['quickviewPageStyleCloudZoomStatus'] : Journal['productPageStyleCloudZoomStatus']) {
				$('.main-image img').each(function () {
					var $this = $(this);

					$this.ImageZoom({
						type: Journal['isPopup'] ? Journal['quickviewPageStyleCloudZoomPosition'] : Journal['productPageStyleCloudZoomPosition'],
						showDescription: false,
						offset: [0, 0],
						zoomSize: [$this.width(), $this.height()],
						bigImageSrc: $this.data('largeimg')
					});
				});

				// delay mouseover
				$('.product-image').mouseover(function () {
					$('.zm-viewer').delay(200).queue(function (next) {
						$(this).css('opacity', '1');
						next();
					});
				}).mouseleave(function () {
					$('.zm-viewer').css('opacity', '0');
				});
			}
		}

		// Select first option
		if ((Journal['isPopup'] ? Journal['quickviewPageStyleOptionsSelect'] : Journal['productPageStyleOptionsSelect']) === 'all') {
			$('.product-options .form-group .radio:first-child input, .product-options .form-group .checkbox:first-child input').prop('checked', true);
			$('.product-options .form-group select').each(function() {
				$(this).find('option').eq(1).prop('selected', true);
			});
		}

		if ((Journal['isPopup'] ? Journal['quickviewPageStyleOptionsSelect'] : Journal['productPageStyleOptionsSelect']) === 'required') {
			$('.product-options .form-group.required .radio:first-child input, .product-options .form-group.required .checkbox:first-child input').prop('checked', true);
			$('.product-options .form-group.required select').each(function() {
				$(this).find('option').eq(1).prop('selected', true);
			});
		}

		// Auto Update Price
		if (Journal['isPopup'] ? Journal['quickviewPageStylePriceUpdate'] : Journal['productPageStylePriceUpdate']) {
			function autoUpdatePrice() {
				$.ajax({
					url: 'index.php?route=journal3/price',
					type: 'post',
					data: $('#product-id, #product-quantity, #product input[type="radio"]:checked, #product input[type="checkbox"]:checked, #product select'),
					dataType: 'json',
					beforeSend: function () {
						$('#button-cart').button('loading');
					},
					complete: function () {
						$('#button-cart').button('reset');
					},
					success: function (json) {
						if (json['response']['status'] === 'error') {
							alert(json['response']['message']);
						} else {
							if (json['response']['tax']) {
								$('.product-tax').html(json['response']['tax']);
							}

							if (json['response']['price']) {
								if (json['response']['special']) {
									$('.product-price-group .product-price-old').html(json['response']['price']);
									$('.product-price-group .product-price-new').html(json['response']['special']);
								} else {
									$('.product-price-group .product-price').html(json['response']['price']);
								}
							}

							if (json['response']['discounts']) {
								$('.product-discount').each(function (index) {
									$(this).html(json['response']['discounts'][index]);
								});
							}

							if (json['response']['weight']) {
								$('.product-stats .product-weight span').html(json['response']['weight']);
							}
						}
					}
				});
			}

			$('.product-options input[type="radio"], .product-options input[type="checkbox"], .product-options select, #product-quantity').on('change', autoUpdatePrice);

			autoUpdatePrice();
		}

		// Push Option Radio
		// $('.push-option.product-option-radio').each(function () {
		// 	var $this = $(this);
		// 	var hasImages = $this.find('img').length > 0;
		// 	var options = $this.find('.radio').map(function (index) {
		// 		var text = $(this).text().trim();
		//
		// 		if (hasImages) {
		// 			$this.addClass('push-image');
		// 			var src = $(this).find('img').attr('src') || 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=';
		// 			return '<li class="' + ($(this).find('input').is(':checked') ? 'checked' : '') + '" data-index="' + index + '"><img src="' + src + '" alt="' + text + '" title="' + text + '" data-tooltip-class="push-image-tooltip" /></li>';
		// 		}
		//
		// 		return '<li class="' + ($(this).find('input').is(':checked') ? 'checked' : '') + '" data-index="' + index + '">' + text + '</li>';
		// 	});
		//
		// 	$this.append('<ul>' + options.toArray().join('') + '</ul>');
		//
		// 	$this.find('li').on('click', function () {
		// 		$this.find('.radio').eq($(this).data('index')).find('input').trigger('click');
		// 		$this.find('li').not($(this)).removeClass('checked');
		// 		$(this).addClass('checked');
		// 	});
		//
		// 	$this.find('li img').tooltip({ container: 'body' });
		// });

		// Push Option Checkbox
		// $('.push-option.product-option-checkbox').each(function () {
		// 	var $this = $(this);
		// 	var hasImages = $this.find('img').length;
		// 	var options = $this.find('.checkbox').map(function (index) {
		// 		var text = $(this).text().trim();
		//
		// 		if (hasImages) {
		// 			$this.addClass('push-image');
		// 			var src = $(this).find('img').attr('src') || 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=';
		// 			return '<li class="' + ($(this).find('input').is(':checked') ? 'checked' : '') + '" data-index="' + index + '"><img src="' + src + '" alt="' + text + '" title="' + text + '" data-tooltip-class="push-image-tooltip" /></li>';
		// 		}
		//
		// 		return '<li class="' + ($(this).find('input').is(':checked') ? 'checked' : '') + '" data-index="' + index + '">' + text + '</li>';
		// 	});
		//
		// 	$this.append('<ul>' + options.toArray().join('') + '</ul>');
		//
		// 	$this.find('li').on('click', function () {
		// 		$this.find('.checkbox').eq($(this).data('index')).find('input').trigger('click');
		// 		$(this).toggleClass('checked');
		// 	});
		//
		// 	$this.find('li img').tooltip({ container: 'body' });
		// });

		// Push Option Select
		// $('.push-option.product-option-select').each(function () {
		// 	var $this = $(this);
		// 	var options = $this.find('option').slice(1).map(function (index) {
		// 		return '<li class="' + ($(this).is(':checked') ? 'checked' : '') + '" data-index="' + index + '">' + $(this).text() + '</li>';
		// 	});
		//
		// 	$this.append('<ul>' + options.toArray().join('') + '</ul>');
		//
		// 	$this.find('li').on('click', function () {
		// 		$this.find('option').eq($(this).data('index') + 1).prop('selected', true);
		// 		$this.find('select').trigger('change');
		// 		$this.find('li').not($(this)).removeClass('checked');
		// 		$(this).addClass('checked');
		// 	});
		// });
	}

	// Iframe height
	if ($html.hasClass('route-journal3-popup-page')) {
		$(document).on('click', function () {
			parent.resize_iframe(Journal['popupModuleId'], $('.popup-content').height());
		});
	}

	//Footer Links module collapse
	$('.links-menu .module-title').addClass('closed');

	$('.links-menu .module-title').click(function () {
		$(this).toggleClass('closed');
	});

	// Open popup links in new tab
	if (Journal.isPopup) {
		$('a[href]').each(function () {
			var $this = $(this);

			if (!$this.attr('target')) {
				$this.attr('target', '_blank');
			}

			if (Journal.isPhone || Journal.isTablet) {
				$this.removeClass('agree');
			}
		});
	}
});

$(window).on('load', function () {
	var $html = $('html');
	var $body = $('body');

	// Search
	var $search = $('#search').find('input[name=\'search\']');

	$('.search-button').on('click', function () {
		var url = $(this).data('search-url');
		var value = $search.val();
		var category_id = parseInt($search.attr('data-category_id'));

		if (value) {
			url += encodeURIComponent(value);
		}

		if (Journal['searchStyleSearchAutoSuggestDescription']) {
			url += '&description=true';
		}

		if (category_id) {
			url += '&category_id=' + category_id;
		}

		location = url;
	});

	$search.on('keydown', function (e) {
		if (e.keyCode === 13) {
			$('.search-button').trigger('click');
		}
	});

	$('.search-categories li').on('click', function (e) {
		e.stopPropagation();

		var $this = $(this);
		$('.search-categories-button').html($this.html());
		$search.attr('data-category_id', $this.attr('data-category_id'))
	});

	// Autosuggest
	if (Journal['searchStyleSearchAutoSuggestStatus']) {
		$search.typeahead({
			hint: true,
			minLength: 1,
			autoSelect: true
		}, {
			async: true,
			display: 'name',
			limit: Infinity,
			source: function (query, processSync, processAsync) {
				var data = {
					search: query
				};

				var category_id = parseInt($search.attr('data-category_id'));

				if (category_id) {
					data.category_id = category_id;
				}

				return $.ajax({
					url: 'index.php?route=journal3/search',
					data: data,
					dataType: 'json',
					success: function (json) {
						return processAsync(json['response']);
					}
				});
			},
			templates: {
				suggestion: function (data) {
					if (data['view_more']) {
						return '<div class="search-result view-more"><a href="' + data['href'] + '">' + data['name'] + '</a></div>';
					}

					if (data['no_results']) {
						return '<div class="search-result no-results"><a>' + data['name'] + '</a></div>';
					}

					var html = '';

					html += '<div class="search-result"><a href="' + data['href'] + '">';

					if (data['thumb']) {
						html += '<img src="' + data['thumb'] + '" srcset="' + data['thumb'] + ' 1x, ' + data['thumb2'] + ' 2x" />';
					}

					var classes = [];

					if (data['quantity'] <= 0) {
						classes.push('out-of-stock');
					}

					if (!data['price_value']) {
						classes.push('has-zero-price');
					}

					html += '<span class="' + classes.join(' ') + '">';

					html += '<span class="product-name">' + data['name'] + '</span>';

					if (data['price']) {
						if (data['special']) {
							html += '<span><span class="price-old">' + data['price'] + '</span><span class="price-new">' + data['special'] + '</span></span>';
						} else {
							html += '<span class="price">' + data['price'] + '</span>';
						}
					}

					html += '</span>';

					html += '</a></div>';

					return html;
				}
			}

		});

		$('.header-search > span > div').addClass('.tt-empty');

		// mobile page zoom fix
		$('.mobile .tt-menu').on('click', function (e) {
			e.stopPropagation();
		});
	}

	// Sticky Desktop
	if (!Journal.isPopup && Journal['isDesktop'] && Journal['stickyStatus'] && (['classic', 'mega', 'default'].includes(Journal['headerType']))) {
		var holder = document.body;
		var headerHeightOffset = $('.desktop-main-menu-wrapper').offset().top + (parseInt(Journal['stickyAt'], 10) || 100);
		var menuHeight = $('.desktop-main-menu-wrapper').outerHeight();

		function enableSticky() {
			if (Journal['headerType'] === 'classic' || Journal['headerType'] === 'mega') {
				$body.css('padding-top', menuHeight);
			}
		}

		function disableSticky() {
			if (Journal['headerType'] === 'classic' || Journal['headerType'] === 'mega') {
				$body.css('padding-top', '');
			}
		}

		function checkStickyOffset() {
			return headerHeightOffset <= window.scrollY;
		}

		function checkSticky() {
			var old = holder.classList.contains('is-sticky');

			holder.classList.toggle('is-sticky', checkStickyOffset());

			var current = holder.classList.contains('is-sticky');

			if (current !== old) {
				if (current) {
					enableSticky();
				} else {
					disableSticky();
				}
			}
		}

		function checkStickyListener() {
			requestAnimationFrame(checkSticky)
		}

		window.addEventListener('scroll', checkStickyListener, false);
	}

	//Compact Sticky top bar
	if (!Journal.isPopup && Journal['isDesktop'] && Journal['stickyStatus'] && Journal['topBarStatus'] && (['compact', 'slim'].includes(Journal['headerType']))) {
		var compact = $('.mid-bar');
		if (compact.length) {
			$(window).on('scroll', function () {
				var compactOffset = compact.offset().top;
				var scroll = $(this)[0].scrollY
				if (scroll >= compactOffset) {
					$('body').addClass('sticky-compact');
				} else {
					$('body').removeClass('sticky-compact');
				}
			});
		}
	}

	//Compact Sticky no top bar
	if (!Journal.isPopup && Journal['isDesktop'] && Journal['stickyStatus'] && !Journal['topBarStatus'] && !Journal['stickyFullHomePadding'] && (['compact', 'slim'].includes(Journal['headerType']))) {
		var site = $('.site-wrapper');
		var header = $('.mid-bar').outerHeight();
		if (site.length) {
			$(window).on('scroll', function () {
				var siteOffset = site.offset().top - header + 1;
				var scroll = $(this)[0].scrollY
				if (scroll >= siteOffset) {
					$('body').addClass('sticky-compact');
				} else {
					$('body').removeClass('sticky-compact');
				}
			});
		}
	}

	//Compact Sticky no top bar over hover
	if (!Journal.isPopup && Journal['isDesktop'] && Journal['stickyStatus'] && !Journal['topBarStatus'] && Journal['stickyFullHomePadding'] && (['compact', 'slim'].includes(Journal['headerType']))) {
		var site = $('.site-wrapper');
		var header = $('html:not(.route-common-home) .mid-bar').outerHeight();
		if (site.length) {
			$(window).on('scroll', function () {
				var siteOffset = site.offset().top - header + 1;
				var scroll = $(this)[0].scrollY
				if (scroll >= siteOffset) {
					$('body').addClass('sticky-compact');
				} else {
					$('body').removeClass('sticky-compact');
				}
			});
		}
	}


	// Sticky Mobile
	if (!Journal['isDesktop'] && Journal['headerMobileStickyStatus'] && $html.hasClass('mobile-header-active')) {
		var mobileBar = $('.mobile-header .sticky-bar');
		if (mobileBar.length) {
			var mobileBarSticky = mobileBar.offset().top;
			var mobileBarHeight = mobileBar.outerHeight();
			$(window).on('scroll', function () {
				var scroll = $(this)[0].scrollY
				if (scroll >= mobileBarSticky) {
					mobileBar.addClass('mobile-bar-sticky');
					$body.css('padding-top', mobileBarHeight);
				} else {
					mobileBar.removeClass('mobile-bar-sticky');
					$body.css('padding-top', '');
				}
			});
		}
	}

	//Focus mini search on click
	if (Journal['isDesktop'] && (Journal['headerMiniSearchDisplay'] === 'page')) {
		$('.search-trigger, .desktop .search-categories .j-menu > li > a').click(function () {
			$('.header-search input').focus();
		});
	}

	// Scroll Top
	if (Journal['scrollTop']) {
		var scrollTopTimeout;

		$(window).on('scroll', function () {
			clearTimeout(scrollTopTimeout);
			var scroll = $(this)[0].scrollY
			if (scroll > 500) {
				$('.scroll-top').addClass('scroll-top-active');

				scrollTopTimeout = setTimeout(function () {
					$('.scroll-top').removeClass('scroll-top-active');
				}, 3000);
			} else {
				$('.scroll-top').removeClass('scroll-top-active');
			}
		});

		$('.scroll-top').click(function () {
			anime({
				targets: 'html, body',
				scrollTop: 0,
				duration: 750,
				easing: 'easeInOutQuad'
			});
		});
	}

	if ($html.hasClass('footer-reveal')) {
		var footerHeight = $('.desktop.footer-reveal footer').outerHeight();
		$('.desktop body').css('padding-bottom', footerHeight);
	}
});

$('.block-map iframe').on('load', function () {
	$('.block-map .journal-loading').hide();
});
;