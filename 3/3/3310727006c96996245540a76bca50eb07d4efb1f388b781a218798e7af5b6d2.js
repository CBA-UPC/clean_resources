/*!
 * jQuery Tools v1.2.7 - The missing UI library for the Web
 * 
 * dateinput/dateinput.js
 * overlay/overlay.js
 * overlay/overlay.apple.js
 * rangeinput/rangeinput.js
 * scrollable/scrollable.js
 * scrollable/scrollable.autoscroll.js
 * scrollable/scrollable.navigator.js
 * tabs/tabs.js
 * tabs/tabs.slideshow.js
 * toolbox/toolbox.expose.js
 * toolbox/toolbox.flashembed.js
 * toolbox/toolbox.history.js
 * toolbox/toolbox.mousewheel.js
 * tooltip/tooltip.js
 * tooltip/tooltip.dynamic.js
 * tooltip/tooltip.slide.js
 * validator/validator.js
 * 
 * NO COPYRIGHTS OR LICENSES. DO WHAT YOU LIKE.
 * 
 * http://flowplayer.org/tools/
 * 
 * jquery.event.wheel.js - rev 1 
 * Copyright (c) 2008, Three Dub Media (http://threedubmedia.com)
 * Liscensed under the MIT License (MIT-LICENSE.txt)
 * http://www.opensource.org/licenses/mit-license.php
 * Created: 2008-07-01 | Updated: 2008-07-14
 * 
 * -----
 * 
 */
/*! jQuery v1.7.1 jquery.com | jquery.org/license */
((window);
((jQuery);(function(b){function m(a,c){var d=this,h=a.add(d),n=b(window),e,f,k,g=b.tools.expose&&(c.mask||c.expose),l=Math.random().toString().slice(10);g&&("string"==typeof g&&(g={color:g}),g.closeOnClick=g.closeOnEsc=!1);var i=c.target||a.attr("rel");f=i?b(i):a;if(!f.length)throw"Could not find Overlay: "+i;a&&-1==a.index(f)&&a.click(;b.extend(d,{load:function(a){if(d.isOpened())return d;var p=o[c.effect];if(!p)throw'Overlay: cannot find effect : "'+c.effect+
'"';c.oneInstance&&b.each(q,;a=a||b.Event();a.type="onBeforeLoad";h.trigger(a);if(a.isDefaultPrevented())return d;k=true;g&&b(f).expose(g);var j=c.top,e=c.left,i=f.outerWidth({margin:true}),m=f.outerHeight({margin:true});typeof j=="string"&&(j=j=="center"?Math.max((n.height()-m)/2,0):parseInt(j,10)/100*n.height());e=="center"&&(e=Math.max((n.width()-i)/2,0));p[0].call(d,{top:j,left:e},;if(g&&c.closeOnClick)b.mask.getMask().one("click",
d.close);if(c.closeOnClick)b(document).on("click."+l,;if(c.closeOnEsc)b(document).on("keydown."+l,;return d},close:function(a){if(!d.isOpened())return d;a=a||b.Event();a.type="onBeforeClose";h.trigger(a);if(!a.isDefaultPrevented()){k=false;o[c.effect][1].call(d,function(){a.type="onClose";h.trigger(a)});b(document).off("click."+l+" keydown."+l);g&&b.mask.close();return d}},getOverlay:function(){return f},
getTrigger:function(){return a},getClosers:function(){return e},isOpened:function(){return k},getConf:function(){return c}});b.each(["onBeforeLoad","onStart","onLoad","onBeforeClose","onClose"],function(a,e){if(b.isFunction(c[e]))b(d).on(e,c[e]);d[e]=function(a){if(a)b(d).on(e,a);return d}});e=f.find(c.close||".close");!e.length&&!c.close&&(e=b('<a class="close"></a>'),f.prepend(e));e.click(;c.load&&d.load()}b.tools=b.tools||{version:"@VERSION"};b.tools.overlay={addEffect:function(a,
b,d){o[a]=[b,d]},conf:{close:null,closeOnClick:!0,closeOnEsc:!0,closeSpeed:"fast",effect:"default",fixed:!b.browser.msie||6<b.browser.version,left:"center",load:!1,mask:null,oneInstance:!0,speed:"normal",target:null,top:"10%"}};var q=[],o={};b.tools.overlay.addEffect("default",;b.fn.overlay=)(jQuery);(function(h){ar i=h.tools.overlay,f=h(window);h.extend(i.conf,{start:{top:null,left:null},fadeInSpeed:"fast",zIndex:9999});i.addEffect("apple",function(a,e){var b=this.getOverlay(),d=this.getConf(),g=this.getTrigger(),i=this,m=b.outerWidth({margin:!0}),c=b.data("img"),n=d.fixed?"fixed":"absolute";if(!c){c=b.css("backgroundImage");if(!c)throw"background-image CSS property not set for overlay";c=c.slice(c.indexOf("(")+
1,c.indexOf(")")).replace(/\"/g,"");b.css("backgroundImage","none");c=h('<img src="'+c+'"/>');c.css({border:0,display:"none"}).width(m);h("body").append(c);b.data("img",c)}var j=d.start.top||Math.round(f.height()/2),k=d.start.left||Math.round(f.width()/2);g&&(g=l(g),j=g.top,k=g.left);d.fixed?(j-=f.scrollTop(),k-=f.scrollLeft()):(a.top+=f.scrollTop(),a.left+=f.scrollLeft());c.css({position:"absolute",top:j,left:k,width:0,zIndex:d.zIndex}).show();a.position=n;b.css(a);c.animate({top:a.top,left:a.left,
width:m},d.speed,.css("position",n)},})(jQuery);((jQuery);(function(d){function p(f,b){var c=d(b);return 2>c.length?c:f.parent().find(b)}function u(f,b){var c=this,n=f.add(c),g=f.children(),l=0,j=b.vertical;k||(k=c);1<g.length&&(g=d(b.items,f));1<b.size&&(b.circular=!1);d.extend(c,{getConf:function(){return b},getIndex:function(){return l},getSize:getNaviButtons:function(){return h.add(m)},getRoot:function(){return f},getItemWrap:function(){return g},getItems:
move:next:prev:begin:end:focus:addItem:function(a){a=d(a);if(b.circular){g.children().last().before(a);g.children().first().replaceWith(a.clone().addClass(b.clonedClass))}else{g.append(a);m.removeClass("disabled")}n.trigger("onAddItem",[a]);return c},seekTo:function(a,e,f){a.jquery||(a=
a*1);if(b.circular&&a===0&&l==-1&&e!==0||!b.circular&&a<0||a>c.getSize()||a<-1)return c;var i=a;a.jquery?a=c.getItems().index(a):i=c.getItems().eq(a);var h=d.Event("onBeforeSeek");if(!f){n.trigger(h,[a,e]);if(h.isDefaultPrevented()||!i.length)return c}i=j?{top:-i.position().top}:{left:-i.position().left};l=a;k=c;if(e===void 0)e=b.speed;g.animate(i,e,b.easing,f||;return c}});d.each(["onBeforeSeek","onSeek","onAddItem"],function(a,e){if(d.isFunction(b[e]))d(c).on(e,
b[e]);c[e]=function(a){if(a)d(c).on(e,a);return c}});if(b.circular){var q=c.getItems().slice(-1).clone().prependTo(g),r=c.getItems().eq(1).clone().appendTo(g);q.add(r).addClass(b.clonedClass);c.onBeforeSeek(;var o=f.parents().add(f).filter(;o.length?(o.show(),c.seekTo(0,0,
function(){}),o.hide()):c.seekTo(0,0,function(){})}var h=p(f,b.prev).click(function(a){a.stopPropagation();c.prev()}),m=p(f,b.next).click(;b.circular||(c.onBeforeSeek(,b.initialIndex||h.addClass(b.disabledClass));2>c.getSize()&&h.add(m).addClass(b.disabledClass);b.mousewheel&&d.fn.mousewheel&&f.mousewheel(;if(b.touch){var s,t;g[0].ontouchstart=g[0].ontouchmove=function(a){if(a.touches.length==1&&!g.is(":animated")){var b=a.touches[0],d=s-b.clientX,b=t-b.clientY;c[j&&b>0||!j&&d>0?"next":"prev"]();a.preventDefault()}}}if(b.keyboard)d(document).on("keydown.scrollable",function(a){if(b.keyboard&&!a.altKey&&!a.ctrlKey&&!a.metaKey&&!d(a.target).is(":input")&&!(b.keyboard!="static"&&k!=
c)){var e=a.keyCode;if(j&&(e==38||e==40)){c.move(e==38?-1:1);return a.preventDefault()}if(!j&&(e==37||e==39)){c.move(e==37?-1:1);return a.preventDefault()}}});b.initialIndex&&c.seekTo(b.initialIndex,0,function(){})}d.tools=d.tools||{version:"@VERSION"};d.tools.scrollable={conf:{activeClass:"active",circular:!1,clonedClass:"cloned",disabledClass:"disabled",easing:"swing",initialIndex:0,item:"> *",items:".items",keyboard:!0,mousewheel:!1,next:".next",prev:".prev",size:1,speed:400,vertical:!1,touch:!0,
wheelSpeed:0}};var k;d.fn.scrollable=)(jQuery);((jQuery);(function(b){ar g=b.tools.scrollable;g.navigator={conf:{navi:".navi",naviItem:null,activeClass:"active",indexed:!1,idPrefix:null,history:!1}};b.fn.navigator=function(a){"string"==typeof a&&(a={navi:a});var a=b.extend({},g.navigator.conf,a),f;this.each(function(){r c=b(this).data("scrollable"),i=a.navi.jquery?a.navi:m(c.getRoot(),a.navi),n=c.getNaviButtons(),k=a.activeClass,j=a.history&&!!history.pushState,l=c.getConf().size;c&&(f=c);c.getNaviButtons=function(){return n.add(i)};j&&(history.pushState({i:0},""),b(window).on("popstate",);d().length?d().each(:b.each(c.getItems(),;c.onBeforeSeek(;c.onAddItem(});return a.api?f:this}})(jQuery);(function(d){function n(c,a,b){var e=this,l=c.add(this),g=c.find(b.tabs),f=a.jquery?a:c.children(a),i;g.length||(g=c.children());f.length||(f=c.parent().find(a));f.length||(f=d(a));d.extend(this,{click:getConf:function(){return b},getTabs:function(){return g},getPanes:function(){return f},getCurrentPane:function(){return f.eq(i)},getCurrentTab:getIndex:function(){return i},next:prev:destroy:);d.each(["onBeforeClick","onClick"],function(a,c){if(d.isFunction(b[c]))d(e).on(c,b[c]);e[c]=function(a){if(a)d(e).on(c,a);return e}});b.history&&d.fn.history&&(d.tools.history.init(g),b.event="history");g.each(;f.find('a[href^="#"]').on("click.T",;location.hash&&
"a"==b.tabs&&c.find('[href="'+location.hash+'"]').length?e.click(location.hash):(0===b.initialIndex||0<b.initialIndex)&&e.click(b.initialIndex)}d.tools=d.tools||{version:"@VERSION"};d.tools.tabs={conf:{tabs:"a",current:"current",onBeforeClick:null,onClick:null,effect:"default",initialEffect:!1,initialIndex:0,event:"click",rotate:!1,slideUpSpeed:400,slideDownSpeed:400,history:!1},addEffect:;var m={"default":fade:slide:ajax:,j,k;d.tools.tabs.addEffect("horizontal",;d.fn.tabs=)(jQuery);(function(d){function n(c,a){r b=this,f=c.add(this),e=c.data("tabs"),g,j=!0,m=h(a.next).click(function(){e.next()}),k=h(a.prev).click(function(){e.prev()});d.extend(b,{getTabs:function(){return e},getConf:function(){return a},play:pause:resume:stop:);d.each(["onBeforePlay","onPlay","onBeforePause","onPause"],function(e,c){if(d.isFunction(a[c]))d(b).on(c,a[c]);b[c]=);a.autopause&&e.getTabs().add(m).add(k).add(e.getPanes()).hover(b.pause,b.resume);a.autoplay&&
b.play();a.clickable&&e.getPanes().click(function(){e.next()});if(!e.getConf().rotate){var l=a.disabledClass;e.getIndex()||k.addClass(l);e.onBeforeClick(}}var h;h=d.tools.tabs.slideshow={conf:{next:".forward",prev:".backward",disabledClass:"disabled",autoplay:!1,autopause:!0,interval:3E3,clickable:!0,api:!1}};d.fn.slideshow=)(jQuery);(function(b){tools=b.tools||{version:"@VERSION"};var k;k=b.tools.expose={conf:{maskId:"exposeMask",loadSpeed:"slow",closeSpeed:"fast",closeOnClick:!0,closeOnEsc:!0,zIndex:9998,opacity:0.8,startOpacity:0,color:"#fff",onLoad:null,
onClose:null}};var c,h,d,e,i;b.mask={load:function(a,f){if(d)return this;"string"==typeof a&&(a={color:a});a=a||e;e=a=b.extend(b.extend({},k.conf),a);c=b("#"+a.maskId);c.length||(c=b("<div/>").attr("id",a.maskId),b("body").append(c));var l=j();c.css({position:"absolute",top:0,left:0,width:l[0],height:l[1],display:"none",opacity:a.startOpacity,zIndex:a.zIndex});a.color&&c.css("backgroundColor",a.color);if(!1===g(a.onBeforeLoad))return this;if(a.closeOnEsc)b(document).on("keydown.mask",;if(a.closeOnClick)c.on("click.mask",;b(window).on("resize.mask",;f&&f.length&&(i=f.eq(0).css("zIndex"),b.each(f,,h=f.css({zIndex:Math.max(a.zIndex+1,"auto"==i?0:i)}));c.css({display:"block"}).fadeTo(a.loadSpeed,a.opacity,;d=!0;return this},close:function(){if(d){if(!1===g(e.onBeforeClose))return this;
c.fadeOut(e.closeSpeed,function(){g(e.onClose);h&&h.css({zIndex:i});d=!1});b(document).off("keydown.mask");c.off("click.mask");b(window).off("resize.mask")}return this},fit:getMask:function(){return c},isLoaded:getConf:function(){return e},getExposed:function(){return h}};b.fn.mask=b.fn.expose=)(jQuery);(function(){nction l(a,b,c){if(e.isSupported(b.version))a.innerHTML=e.getHTML(b,c);else if(b.expressInstall&&e.isSupported([6,65]))a.innerHTML=e.getHTML(h(b,{src:b.expressInstall}),{MMredirectURL:location.href,MMplayerType:"PlugIn",MMdoctitle:document.title});else if(a.innerHTML.replace(/\s/g,"")||(a.innerHTML="<h2>Flash version "+b.version+
" or greater is required</h2><h3>"+(0<f[0]?"Your version is "+f:"You have no flash plugin installed")+"</h3>"+("A"==a.tagName?"<p>Click here to download latest version</p>":"<p>Download latest version from <a href='"+j+"'>here</a></p>"),"A"==a.tagName&&(a.onclick=),b.onFail){var d=b.onFail.call(this);"string"==typeof d&&(a.innerHTML=d)}i&&(window[b.id]=document.getElementById(b.id));h(this,{getRoot:function(){return a},getOptions:function(){return b},getConf:function(){return c},
getApi:)}var i=document.all,j="http://www.adobe.com/go/getflashplayer",m="function"==typeof jQuery,n=/(\d+)[^\d]+(\d+)[^\d]*(\d*)/,g={width:"100%",height:"100%",id:"_"+(""+Math.random()).slice(9),allowfullscreen:!0,allowscriptaccess:"always",quality:"high",version:[3,0],onFail:null,expressInstall:null,w3c:!1,cachebusting:!1};window.attachEvent&&window.attachEvent("onbeforeunload",;
window.flashembed=var e=h(window.flashembed,{conf:g,getVersion:asString:function(a){if(null===a||void 0===a)return null;var b=typeof a;"object"==b&&a.push&&(b="array");switch(b){case "string":return a=a.replace(RegExp('(["\\\\])',"g"),"\\$1"),a=a.replace(/^\s?(\d+\.?\d*)%/,"$1pct"),'"'+a+'"';case "array":return"["+k(a,.join(",")+"]";case "function":return'"function()"';case "object":var b=[],c;for(c in a)a.hasOwnProperty(c)&&b.push('"'+c+'":'+e.asString(a[c]));return"{"+b.join(",")+"}"}return(""+
a).replace(/\s/g," ").replace(/\'/g,'"')},getHTML:function(a,b){var a=h({},a),c='<object width="'+a.width+'" height="'+a.height+'" id="'+a.id+'" name="'+a.id+'"';a.cachebusting&&(a.src+=(-1!=a.src.indexOf("?")?"&":"?")+Math.random());c=a.w3c||!i?c+(' data="'+a.src+'" type="application/x-shockwave-flash"'):c+' classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"';c+=">";if(a.w3c||i)c+='<param name="movie" value="'+a.src+'" />';a.width=a.height=a.id=a.w3c=a.src=null;a.onFail=a.version=a.expressInstall=
null;for(var d in a)a[d]&&(c+='<param name="'+d+'" value="'+a[d]+'" />');d="";if(b){for(var f in b)if(b[f]){var g=b[f];d+=f+"="+encodeURIComponent(/function|object/.test(typeof g)?e.asString(g):g)+"&"}d=d.slice(0,-1);c+='<param name="flashvars" value=\''+d+"' />"}return c+"</object>"},isSupported:),f=e.getVersion();m&&(jQuery.tools=jQuery.tools||{version:"@VERSION"},jQuery.tools.flashembed={conf:g},jQuery.fn.flashembed=})();(function(a){ar f,d,e,h;a.tools=a.tools||{version:"@VERSION"};a.tools.history={init:function(c){h||(a.browser.msie&&"8">a.browser.version?d||(d=a("<iframe/>").attr("src","javascript:false;").hide().get(0),a("body").append(d),setInterval(100),g(location.hash||"#")):setInterval(100),e=!e?c:e.add(c),c.click(,h=!0)}};a(window).on("hash",;a.fn.history=)(jQuery);(function(b){.fn.mousewheel=function(a){return this[a?"on":"trigger"]("wheel",a)};b.event.special.wheel={setup:teardown:;var d=
!b.browser.mozilla?"mousewheel":"DOMMouseScroll"+("1.9">b.browser.version?" mousemove":"")})(jQuery);(function(e){unction n(a,b){var d=this,f=a.add(d),c,
h=0,i=0,m=a.attr("title"),q=a.attr("data-tooltip"),r=o[b.effect],l,s=a.is(":input"),n=s&&a.is(":checkbox, :radio, select, :button, :submit"),t=a.attr("type"),j=b.events[t]||b.events[s?n?"widget":"input":"def"];if(!r)throw'Nonexistent effect "'+b.effect+'"';j=j.split(/,\s*/);if(2!=j.length)throw"Tooltip: bad events configuration for "+t;a.on(j[0],function(a){clearTimeout(h);b.predelay?i=setTimeout(function(){d.show(a)},b.predelay):d.show(a)}).on(j[1],;m&&b.cancelDefault&&(a.removeAttr("title"),a.data("title",m));e.extend(d,{show:function(k){if(!c){if(q)c=e(q);else if(b.tip)c=e(b.tip).eq(0);else if(m)c=e(b.layout).addClass(b.tipClass).appendTo(document.body).hide().append(m);else{c=a.next();c.length||(c=a.parent().next())}if(!c.length)throw"Cannot find tooltip for "+a;}if(d.isShown())return d;c.stop(true,true);var g=p(a,c,b);b.tip&&c.html(a.data("title"));k=e.Event();k.type="onBeforeShow";f.trigger(k,[g]);if(k.isDefaultPrevented())return d;
g=p(a,c,b);c.css({position:"absolute",top:g.top,left:g.left});l=true;r[0].call(d,;g=b.events.tooltip.split(/,\s*/);if(!c.data("__set")){c.off(g[0]).on(g[0],;if(g[1]&&!a.is("input:not(:checkbox, :radio), textarea"))c.off(g[1]).on(g[1],;b.tip||c.data("__set",true)}return d},hide:function(a){if(!c||!d.isShown())return d;a=e.Event();a.type="onBeforeHide";
f.trigger(a);if(!a.isDefaultPrevented()){l=false;o[b.effect][1].call(d,;return d}},isShown:getConf:function(){return b},getTip:function(){return c},getTrigger:function(){return a}});e.each(["onHide","onBeforeShow","onShow","onBeforeHide"],function(a,c){if(e.isFunction(b[c]))e(d).on(c,b[c]);d[c]=function(a){if(a)e(d).on(c,a);return d}})}e.tools=e.tools||{version:"@VERSION"};e.tools.tooltip={conf:{effect:"toggle",fadeOutSpeed:"fast",
predelay:0,delay:30,opacity:1,tip:0,fadeIE:!1,position:["top","center"],offset:[0,0],relative:!1,cancelDefault:!0,events:{def:"mouseenter,mouseleave",input:"focus,blur",widget:"focus mouseenter,blur mouseleave",tooltip:"mouseenter,mouseleave"},layout:"<div/>",tipClass:"tooltip"},addEffect:function(a,b,d){o[a]=[b,d]}};var o={toggle:[,fade:[};e.fn.tooltip=)(jQuery);(function(c){var i=c.tools.tooltip;i.dynamic={conf:{classNames:"top right bottom left"}};c.fn.dynamic=function(f){"number"==typeof f&&(f={speed:f});var f=c.extend({},i.dynamic.conf,f),l=c.extend(!0,{},f),j=f.classNames.split(/\s/),e;this.each(function(){var h=c(this).tooltip().onBeforeShow(function(f,h){var d=this.getTip(),a=this.getConf();e||(e=[a.position[0],a.position[1],a.offset[0],a.offset[1],c.extend({},a)]);c.extend(a,e[4]);a.position=[e[0],e[1]];a.offset=[e[2],e[3]];d.css({visibility:"hidden",
position:"absolute",top:h.top,left:h.left}).show();var k=c.extend(!0,{},l),b;b=c(window);var g=b.width()+b.scrollLeft(),i=b.height()+b.scrollTop();b=[d.offset().top<=b.scrollTop(),g<=d.offset().left+d.width(),i<=d.offset().top+d.height(),b.scrollLeft()>=d.offset().left];a:{for(g=b.length;g--;)if(b[g]){g=!1;break a}g=!0}if(!g){b[2]&&(c.extend(a,k.top),a.position[0]="top",d.addClass(j[0]));b[3]&&(c.extend(a,k.right),a.position[1]="right",d.addClass(j[1]));b[0]&&(c.extend(a,k.bottom),a.position[0]="bottom",
d.addClass(j[2]));b[1]&&(c.extend(a,k.left),a.position[1]="left",d.addClass(j[3]));if(b[0]||b[2])a.offset[0]*=-1;if(b[1]||b[3])a.offset[1]*=-1}d.css({visibility:"visible"}).hide()});h.onBeforeShow(;h.onHide(;ret=h});return f.api?ret:this}})(jQuery);((jQuery);((jQuery);