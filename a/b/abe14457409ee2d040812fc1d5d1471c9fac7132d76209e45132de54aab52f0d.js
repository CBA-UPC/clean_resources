/*
 swiped-events.js - v@version@
 Pure JavaScript swipe events
 https://github.com/john-doherty/swiped-events
 @inspiration https://stackoverflow.com/questions/16348031/disable-scrolling-when-touch-moving-certain-element
 @author John Doherty <www.johndoherty.info>
 @license MIT
*/
(function(){window.WPD="undefined"!==typeof window.WPD?window.WPD:{};if("undefined"!=typeof WPD.dom)return!1;WPD.dom=function(){if("undefined"==typeof WPD.dom.fn||"undefined"==typeof WPD.dom.fn.a)WPD.dom.fn={a:[],is_wpd_dom:!0,length:0,get:_:$:extend:copy:parent:first:last:prev:function(a){let b=this.copy(this,!0);if("undefined"==typeof a)b.a="undefined"!=typeof b.a[0]&&null!=b.a[0].previousElementSibling?
[b.a[0].previousElementSibling]:[];else if("undefined"!=typeof b.a[0]){let c=b.a[0].previousElementSibling;for(b.a=[];null!=c;){if(c.matches(a)){b.a=[c];break}c=c.previousElementSibling}}b.length=b.a.length;return b},next:closest:add:find:forEach:each:
hasClass:addClass:removeClass:is:val:isVisible:attr:removeAttr:
prop:data:html:function(a){let b=this.get(0);return null!=b?1==arguments.length?(b.innerHTML=a,this):b.innerHTML:""},text:css:position:offset:outerWidth:outerHeight:width:function(){return this.outerWidth()},height:on:off:offForced:trigger:clone:remove:detach:prepend:append:uuidv4:,WPD.dom._fn={bodyTransform:bodyTransformY:function(){return this.bodyTransform().y},bodyTransformX:hasFixedParent:hasEventListener:allDescendants:createElementsFromHTML:absolutePosition:plugin:,WPD.dom.version=1;return 1<=arguments.length?WPD.dom.fn.$.apply(WPD.dom.fn,arguments):WPD.dom.fn};WPD.dom();document.dispatchEvent(new Event("wpd-dom-core-loaded"))})();
(();
(function(){let a=WPD.dom;if("undefined"!=typeof WPD.dom.fn.unhighlight)return!1;WPD.dom.fn.unhighlight=function(b){let c={className:"highlight",element:"span"};a.extend(c,b);return this.find(c.element+"."+c.className).each(};WPD.dom.fn.highlight=)();
(();
(();
(();
window.WPD=window.WPD||{};
window.WPD.Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:decode:_utf8_encode:_utf8_decode:;
(();window.WPD=window.WPD||{};
window.WPD.intervalUntilExecute=
((window,document);
