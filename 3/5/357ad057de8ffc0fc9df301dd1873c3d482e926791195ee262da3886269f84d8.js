/*!
 * WPBakery Page Builder v6.0.0 (https://wpbakery.com)
 * Copyright 2011-2019 Michael M, WPBakery
 * License: Commercial. More details: http://go.wpbakery.com/licensing
 */

// jscs:disable
// jshint ignore: start

/*!
Waypoints - 4.0.1
Copyright © 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
(),function(){"use strict"var i=0,o={},y=window.VcWaypoint,t=window.onloadn.prototype.add,n.prototype.checkEmpty,n.prototype.createThrottledResizeHandler,n.prototype.createThrottledScrollHandler,n.prototype.handleResize,n.prototype.handleScroll,n.prototype.innerHeight=function(){return this.element==this.element.window?y.viewportHeight():this.adapter.innerHeight()},n.prototype.remove,n.prototype.innerWidth,n.prototype.destroy,n.prototype.refresh=function(){var t,e=this.element==this.element.window,i=e?void 0:this.adapter.offset(),o={};for(var n in this.handleScroll(),t={horizontal:{contextOffset:e?0:i.left,contextScroll:e?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:e?0:i.top,contextScroll:e?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}}){var r=t[n];for(var s in this.waypoints[n]){var a,l,h,p,c=this.waypoints[n][s],u=c.options.offset,d=c.triggerPoint,f=0,w=null==d;c.element!==c.element.window&&(f=c.adapter.offset()[r.offsetProp]),"function"==typeof u?u=u.apply(c):"string"==typeof u&&(u=parseFloat(u),-1<c.options.offset.indexOf("%")&&(u=Math.ceil(r.contextDimension*u/100))),a=r.contextScroll-r.contextOffset,c.triggerPoint=Math.floor(f+a-u),l=d<r.oldScroll,h=c.triggerPoint>=r.oldScroll,p=!l&&!h,!w&&(l&&h)?(c.queueTrigger(r.backward),o[c.group.id]=c.group):!w&&p?(c.queueTrigger(r.forward),o[c.group.id]=c.group):w&&r.oldScroll>=c.triggerPoint&&(c.queueTrigger(r.forward),o[c.group.id]=c.group)}}return y.requestAnimationFrame(function(){for(var t in o)o[t].flushTriggers()}),this},n.findOrCreateByElement,n.refreshAll,n.findByElement,window.onload,y.requestAnimationFrame,y.Context=n}(),function(){"use strict";function s(t,e){return t.triggerPoint-e.triggerPointvar e={vertical:{},horizontal:{}},i=window.VcWaypointo.prototype.add,o.prototype.clearTriggerQueues,o.prototype.flushTriggers,o.prototype.next,o.prototype.previous,o.prototype.queueTrigger,o.prototype.remove,o.prototype.first,o.prototype.last,o.findOrCreate,i.Group=o}()()();