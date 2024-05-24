/* == jquery mousewheel plugin == Version: 3.1.15, License: MIT License (MIT) */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a:a(jQuery)}(function(a){function b(b){var g=b||window.event,h=i.call(arguments,1),j=0,l=0,m=0,n=0,o=0,p=0;if(b=a.event.fix(g),b.type="mousewheel","detail"in g&&(m=-1*g.detail),"wheelDelta"in g&&(m=g.wheelDelta),"wheelDeltaY"in g&&(m=g.wheelDeltaY),"wheelDeltaX"in g&&(l=-1*g.wheelDeltaX),"axis"in g&&g.axis===g.HORIZONTAL_AXIS&&(l=-1*m,m=0),j=0===m?l:m,"deltaY"in g&&(m=-1*g.deltaY,j=m),"deltaX"in g&&(l=g.deltaX,0===m&&(j=-1*l)),0!==m||0!==l){if(1===g.deltaMode){var q=a.data(this,"mousewheel-line-height");j*=q,m*=q,l*=q}else if(2===g.deltaMode){var r=a.data(this,"mousewheel-page-height");j*=r,m*=r,l*=r}if(n=Math.max(Math.abs(m),Math.abs(l)),(!f||f>n)&&(f=n,d(g,n)&&(f/=40)),d(g,n)&&(j/=40,l/=40,m/=40),j=Math[j>=1?"floor":"ceil"](j/f),l=Math[l>=1?"floor":"ceil"](l/f),m=Math[m>=1?"floor":"ceil"](m/f),k.settings.normalizeOffset&&this.getBoundingClientRect){var s=this.getBoundingClientRect();o=b.clientX-s.left,p=b.clientY-s.top}return b.deltaX=l,b.deltaY=m,b.deltaFactor=f,b.offsetX=o,b.offsetY=p,b.deltaMode=0,h.unshift(b,j,l,m),e&&clearTimeout(e),e=setTimeout(c,200),(a.event.dispatch||a.event.handle).apply(this,h)}}function c(){f=null}function d(a,b){return k.settings.adjustOldDeltas&&"mousewheel"===a.type&&b%120===0}var e,f,g=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],h="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],i=Array.prototype.slice;if(a.event.fixHooks)for(var j=g.length;j;)a.event.fixHooks[g[--j]]=a.event.mouseHooks;var k=a.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var c=h.length;c;)this.addEventListener(h[--c],b,!1);else this.onmousewheel=b;a.data(this,"mousewheel-line-height",k.getLineHeight(this)),a.data(this,"mousewheel-page-height",k.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var c=h.length;c;)this.removeEventListener(h[--c],b,!1);else this.onmousewheel=null;a.removeData(this,"mousewheel-line-height"),a.removeData(this,"mousewheel-page-height")},getLineHeight:function(b){var c=a(b),d=c["offsetParent"in a.fn?"offsetParent":"parent"]();return d.length||(d=a("body")),parseInt(d.css("fontSize"),10)||parseInt(c.css("fontSize"),10)||16},getPageHeight:function(b){return a(b).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})});!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a:a(jQuery)}(function(a){function b(b){var g=b||window.event,h=i.call(arguments,1),j=0,l=0,m=0,n=0,o=0,p=0;if(b=a.event.fix(g),b.type="mousewheel","detail"in g&&(m=-1*g.detail),"wheelDelta"in g&&(m=g.wheelDelta),"wheelDeltaY"in g&&(m=g.wheelDeltaY),"wheelDeltaX"in g&&(l=-1*g.wheelDeltaX),"axis"in g&&g.axis===g.HORIZONTAL_AXIS&&(l=-1*m,m=0),j=0===m?l:m,"deltaY"in g&&(m=-1*g.deltaY,j=m),"deltaX"in g&&(l=g.deltaX,0===m&&(j=-1*l)),0!==m||0!==l){if(1===g.deltaMode){var q=a.data(this,"mousewheel-line-height");j*=q,m*=q,l*=q}else if(2===g.deltaMode){var r=a.data(this,"mousewheel-page-height");j*=r,m*=r,l*=r}if(n=Math.max(Math.abs(m),Math.abs(l)),(!f||f>n)&&(f=n,d(g,n)&&(f/=40)),d(g,n)&&(j/=40,l/=40,m/=40),j=Math[j>=1?"floor":"ceil"](j/f),l=Math[l>=1?"floor":"ceil"](l/f),m=Math[m>=1?"floor":"ceil"](m/f),k.settings.normalizeOffset&&this.getBoundingClientRect){var s=this.getBoundingClientRect();o=b.clientX-s.left,p=b.clientY-s.top}return b.deltaX=l,b.deltaY=m,b.deltaFactor=f,b.offsetX=o,b.offsetY=p,b.deltaMode=0,h.unshift(b,j,l,m),e&&clearTimeout(e),e=setTimeout(c,200),(a.event.dispatch||a.event.handle).apply(this,h)}}function c(){f=null}function d(a,b){return k.settings.adjustOldDeltas&&"mousewheel"===a.type&&b%120===0}var e,f,g=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],h="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],i=Array.prototype.slice;if(a.event.fixHooks)for(var j=g.length;j;)a.event.fixHooks[g[--j]]=a.event.mouseHooks;var k=a.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var c=h.length;c;)this.addEventListener(h[--c],b,!1);else this.onmousewheel=b;a.data(this,"mousewheel-line-height",k.getLineHeight(this)),a.data(this,"mousewheel-page-height",k.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var c=h.length;c;)this.removeEventListener(h[--c],b,!1);else this.onmousewheel=null;a.removeData(this,"mousewheel-line-height"),a.removeData(this,"mousewheel-page-height")},getLineHeight:function(b){var c=a(b),d=c["offsetParent"in a.fn?"offsetParent":"parent"]();return d.length||(d=a("body")),parseInt(d.css("fontSize"),10)||parseInt(c.css("fontSize"),10)||16},getPageHeight:function(b){return a(b).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})});
/* == malihu jquery custom scrollbar plugin == Version: 3.1.5, License: MIT License (MIT) */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"undefined"!=typeof module&&module.exports?module.exports=e:e(jQuery,window,document)}(function(e){!function(t){var o="function"==typeof define&&define.amd,a="undefined"!=typeof module&&module.exports,n="https:"==document.location.protocol?"https:":"http:",i="cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js";o||(a?require("jquery-mousewheel")(e):e.event.special.mousewheel||e("head").append(decodeURI("%3Cscript src="+n+"//"+i+"%3E%3C/script%3E"))),t()}(function(){var t,o="mCustomScrollbar",a="mCS",n=".mCustomScrollbar",i={setTop:0,setLeft:0,axis:"y",scrollbarPosition:"inside",scrollInertia:950,autoDraggerLength:!0,alwaysShowScrollbar:0,snapOffset:0,mouseWheel:{enable:!0,scrollAmount:"auto",axis:"y",deltaFactor:"auto",disableOver:["select","option","keygen","datalist","textarea"]},scrollButtons:{scrollType:"stepless",scrollAmount:"auto"},keyboard:{enable:!0,scrollType:"stepless",scrollAmount:"auto"},contentTouchScroll:25,documentTouchScroll:!0,advanced:{autoScrollOnFocus:"input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",updateOnContentResize:!0,updateOnImageLoad:"auto",autoUpdateTimeout:60},theme:"light",callbacks:{onTotalScrollOffset:0,onTotalScrollBackOffset:0,alwaysTriggerOffsets:!0}},r=0,l={},s=window.attachEvent&&!window.addEventListener?1:0,c=!1,d=["mCSB_dragger_onDrag","mCSB_scrollTools_onDrag","mCS_img_loaded","mCS_disabled","mCS_destroyed","mCS_no_scrollbar","mCS-autoHide","mCS-dir-rtl","mCS_no_scrollbar_y","mCS_no_scrollbar_x","mCS_y_hidden","mCS_x_hidden","mCSB_draggerContainer","mCSB_buttonUp","mCSB_buttonDown","mCSB_buttonLeft","mCSB_buttonRight"],u={init:function(t){var t=e.extend(!0,{},i,t),o=f.call(this);if(t.live){var s=t.liveSelector||this.selector||n,c=e(s);if("off"===t.live)return void m(s);l[s]=setTimeout(function(){c.mCustomScrollbar(t),"once"===t.live&&c.length&&m(s)},500)}else m(s);return t.setWidth=t.set_width?t.set_width:t.setWidth,t.setHeight=t.set_height?t.set_height:t.setHeight,t.axis=t.horizontalScroll?"x":p(t.axis),t.scrollInertia=t.scrollInertia>0&&t.scrollInertia<17?17:t.scrollInertia,"object"!=typeof t.mouseWheel&&1==t.mouseWheel&&(t.mouseWheel={enable:!0,scrollAmount:"auto",axis:"y",preventDefault:!1,deltaFactor:"auto",normalizeDelta:!1,invert:!1}),t.mouseWheel.scrollAmount=t.mouseWheelPixels?t.mouseWheelPixels:t.mouseWheel.scrollAmount,t.mouseWheel.normalizeDelta=t.advanced.normalizeMouseWheelDelta?t.advanced.normalizeMouseWheelDelta:t.mouseWheel.normalizeDelta,t.scrollButtons.scrollType=g(t.scrollButtons.scrollType),h(t),e(o).each(function(){var o=e(this);if(!o.data(a)){o.data(a,{idx:++r,opt:t,scrollRatio:{y:null,x:null},overflowed:null,contentReset:{y:null,x:null},bindEvents:!1,tweenRunning:!1,sequential:{},langDir:o.css("direction"),cbOffsets:null,trigger:null,poll:{size:{o:0,n:0},img:{o:0,n:0},change:{o:0,n:0}}});var n=o.data(a),i=n.opt,l=o.data("mcs-axis"),s=o.data("mcs-scrollbar-position"),c=o.data("mcs-theme");l&&(i.axis=l),s&&(i.scrollbarPosition=s),c&&(i.theme=c,h(i)),v.call(this),n&&i.callbacks.onCreate&&"function"==typeof i.callbacks.onCreate&&i.callbacks.onCreate.call(this),e("#mCSB_"+n.idx+"_container img:not(."+d[2]+")").addClass(d[2]),u.update.call(null,o)}})},update:function(t,o){var n=t||f.call(this);return e(n).each(function(){var t=e(this);if(t.data(a)){var n=t.data(a),i=n.opt,r=e("#mCSB_"+n.idx+"_container"),l=e("#mCSB_"+n.idx),s=[e("#mCSB_"+n.idx+"_dragger_vertical"),e("#mCSB_"+n.idx+"_dragger_horizontal")];if(!r.length)return;n.tweenRunning&&Q(t),o&&n&&i.callbacks.onBeforeUpdate&&"function"==typeof i.callbacks.onBeforeUpdate&&i.callbacks.onBeforeUpdate.call(this),t.hasClass(d[3])&&t.removeClass(d[3]),t.hasClass(d[4])&&t.removeClass(d[4]),l.css("max-height","none"),l.height()!==t.height()&&l.css("max-height",t.height()),_.call(this),"y"===i.axis||i.advanced.autoExpandHorizontalScroll||r.css("width",x(r)),n.overflowed=y.call(this),M.call(this),i.autoDraggerLength&&S.call(this),b.call(this),T.call(this);var c=[Math.abs(r[0].offsetTop),Math.abs(r[0].offsetLeft)];"x"!==i.axis&&(n.overflowed[0]?s[0].height()>s[0].parent().height()?B.call(this):(G(t,c[0].toString(),{dir:"y",dur:0,overwrite:"none"}),n.contentReset.y=null):(B.call(this),"y"===i.axis?k.call(this):"yx"===i.axis&&n.overflowed[1]&&G(t,c[1].toString(),{dir:"x",dur:0,overwrite:"none"}))),"y"!==i.axis&&(n.overflowed[1]?s[1].width()>s[1].parent().width()?B.call(this):(G(t,c[1].toString(),{dir:"x",dur:0,overwrite:"none"}),n.contentReset.x=null):(B.call(this),"x"===i.axis?k.call(this):"yx"===i.axis&&n.overflowed[0]&&G(t,c[0].toString(),{dir:"y",dur:0,overwrite:"none"}))),o&&n&&(2===o&&i.callbacks.onImageLoad&&"function"==typeof i.callbacks.onImageLoad?i.callbacks.onImageLoad.call(this):3===o&&i.callbacks.onSelectorChange&&"function"==typeof i.callbacks.onSelectorChange?i.callbacks.onSelectorChange.call(this):i.callbacks.onUpdate&&"function"==typeof i.callbacks.onUpdate&&i.callbacks.onUpdate.call(this)),N.call(this)}})},scrollTo:function(t,o){if("undefined"!=typeof t&&null!=t){var n=f.call(this);return e(n).each(function(){var n=e(this);if(n.data(a)){var i=n.data(a),r=i.opt,l={trigger:"external",scrollInertia:r.scrollInertia,scrollEasing:"mcsEaseInOut",moveDragger:!1,timeout:60,callbacks:!0,onStart:!0,onUpdate:!0,onComplete:!0},s=e.extend(!0,{},l,o),c=Y.call(this,t),d=s.scrollInertia>0&&s.scrollInertia<17?17:s.scrollInertia;c[0]=X.call(this,c[0],"y"),c[1]=X.call(this,c[1],"x"),s.moveDragger&&(c[0]*=i.scrollRatio.y,c[1]*=i.scrollRatio.x),s.dur=ne()?0:d,setTimeout(function(){null!==c[0]&&"undefined"!=typeof c[0]&&"x"!==r.axis&&i.overflowed[0]&&(s.dir="y",s.overwrite="all",G(n,c[0].toString(),s)),null!==c[1]&&"undefined"!=typeof c[1]&&"y"!==r.axis&&i.overflowed[1]&&(s.dir="x",s.overwrite="none",G(n,c[1].toString(),s))},s.timeout)}})}},stop:function(){var t=f.call(this);return e(t).each(function(){var t=e(this);t.data(a)&&Q(t)})},disable:function(t){var o=f.call(this);return e(o).each(function(){var o=e(this);if(o.data(a)){o.data(a);N.call(this,"remove"),k.call(this),t&&B.call(this),M.call(this,!0),o.addClass(d[3])}})},destroy:function(){var t=f.call(this);return e(t).each(function(){var n=e(this);if(n.data(a)){var i=n.data(a),r=i.opt,l=e("#mCSB_"+i.idx),s=e("#mCSB_"+i.idx+"_container"),c=e(".mCSB_"+i.idx+"_scrollbar");r.live&&m(r.liveSelector||e(t).selector),N.call(this,"remove"),k.call(this),B.call(this),n.removeData(a),$(this,"mcs"),c.remove(),s.find("img."+d[2]).removeClass(d[2]),l.replaceWith(s.contents()),n.removeClass(o+" _"+a+"_"+i.idx+" "+d[6]+" "+d[7]+" "+d[5]+" "+d[3]).addClass(d[4])}})}},f=function(){return"object"!=typeof e(this)||e(this).length<1?n:this},h=function(t){var o=["rounded","rounded-dark","rounded-dots","rounded-dots-dark"],a=["rounded-dots","rounded-dots-dark","3d","3d-dark","3d-thick","3d-thick-dark","inset","inset-dark","inset-2","inset-2-dark","inset-3","inset-3-dark"],n=["minimal","minimal-dark"],i=["minimal","minimal-dark"],r=["minimal","minimal-dark"];t.autoDraggerLength=e.inArray(t.theme,o)>-1?!1:t.autoDraggerLength,t.autoExpandScrollbar=e.inArray(t.theme,a)>-1?!1:t.autoExpandScrollbar,t.scrollButtons.enable=e.inArray(t.theme,n)>-1?!1:t.scrollButtons.enable,t.autoHideScrollbar=e.inArray(t.theme,i)>-1?!0:t.autoHideScrollbar,t.scrollbarPosition=e.inArray(t.theme,r)>-1?"outside":t.scrollbarPosition},m=function(e){l[e]&&(clearTimeout(l[e]),$(l,e))},p=function(e){return"yx"===e||"xy"===e||"auto"===e?"yx":"x"===e||"horizontal"===e?"x":"y"},g=function(e){return"stepped"===e||"pixels"===e||"step"===e||"click"===e?"stepped":"stepless"},v=function(){var t=e(this),n=t.data(a),i=n.opt,r=i.autoExpandScrollbar?" "+d[1]+"_expand":"",l=["<div id='mCSB_"+n.idx+"_scrollbar_vertical' class='mCSB_scrollTools mCSB_"+n.idx+"_scrollbar mCS-"+i.theme+" mCSB_scrollTools_vertical"+r+"'><div class='"+d[12]+"'><div id='mCSB_"+n.idx+"_dragger_vertical' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>","<div id='mCSB_"+n.idx+"_scrollbar_horizontal' class='mCSB_scrollTools mCSB_"+n.idx+"_scrollbar mCS-"+i.theme+" mCSB_scrollTools_horizontal"+r+"'><div class='"+d[12]+"'><div id='mCSB_"+n.idx+"_dragger_horizontal' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"],s="yx"===i.axis?"mCSB_vertical_horizontal":"x"===i.axis?"mCSB_horizontal":"mCSB_vertical",c="yx"===i.axis?l[0]+l[1]:"x"===i.axis?l[1]:l[0],u="yx"===i.axis?"<div id='mCSB_"+n.idx+"_container_wrapper' class='mCSB_container_wrapper' />":"",f=i.autoHideScrollbar?" "+d[6]:"",h="x"!==i.axis&&"rtl"===n.langDir?" "+d[7]:"";i.setWidth&&t.css("width",i.setWidth),i.setHeight&&t.css("height",i.setHeight),i.setLeft="y"!==i.axis&&"rtl"===n.langDir?"989999px":i.setLeft,t.addClass(o+" _"+a+"_"+n.idx+f+h).wrapInner("<div id='mCSB_"+n.idx+"' class='mCustomScrollBox mCS-"+i.theme+" "+s+"'><div id='mCSB_"+n.idx+"_container' class='mCSB_container' style='position:relative; top:"+i.setTop+"; left:"+i.setLeft+";' dir='"+n.langDir+"' /></div>");var m=e("#mCSB_"+n.idx),p=e("#mCSB_"+n.idx+"_container");"y"===i.axis||i.advanced.autoExpandHorizontalScroll||p.css("width",x(p)),"outside"===i.scrollbarPosition?("static"===t.css("position")&&t.css("position","relative"),t.css("overflow","visible"),m.addClass("mCSB_outside").after(c)):(m.addClass("mCSB_inside").append(c),p.wrap(u)),w.call(this);var g=[e("#mCSB_"+n.idx+"_dragger_vertical"),e("#mCSB_"+n.idx+"_dragger_horizontal")];g[0].css("min-height",g[0].height()),g[1].css("min-width",g[1].width())},x=function(t){var o=[t[0].scrollWidth,Math.max.apply(Math,t.children().map(function(){return e(this).outerWidth(!0)}).get())],a=t.parent().width();return o[0]>a?o[0]:o[1]>a?o[1]:"100%"},_=function(){var t=e(this),o=t.data(a),n=o.opt,i=e("#mCSB_"+o.idx+"_container");if(n.advanced.autoExpandHorizontalScroll&&"y"!==n.axis){i.css({width:"auto","min-width":0,"overflow-x":"scroll"});var r=Math.ceil(i[0].scrollWidth);3===n.advanced.autoExpandHorizontalScroll||2!==n.advanced.autoExpandHorizontalScroll&&r>i.parent().width()?i.css({width:r,"min-width":"100%","overflow-x":"inherit"}):i.css({"overflow-x":"inherit",position:"absolute"}).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({width:Math.ceil(i[0].getBoundingClientRect().right+.4)-Math.floor(i[0].getBoundingClientRect().left),"min-width":"100%",position:"relative"}).unwrap()}},w=function(){var t=e(this),o=t.data(a),n=o.opt,i=e(".mCSB_"+o.idx+"_scrollbar:first"),r=oe(n.scrollButtons.tabindex)?"tabindex='"+n.scrollButtons.tabindex+"'":"",l=["<a href='#' class='"+d[13]+"' "+r+" />","<a href='#' class='"+d[14]+"' "+r+" />","<a href='#' class='"+d[15]+"' "+r+" />","<a href='#' class='"+d[16]+"' "+r+" />"],s=["x"===n.axis?l[2]:l[0],"x"===n.axis?l[3]:l[1],l[2],l[3]];n.scrollButtons.enable&&i.prepend(s[0]).append(s[1]).next(".mCSB_scrollTools").prepend(s[2]).append(s[3])},S=function(){var t=e(this),o=t.data(a),n=e("#mCSB_"+o.idx),i=e("#mCSB_"+o.idx+"_container"),r=[e("#mCSB_"+o.idx+"_dragger_vertical"),e("#mCSB_"+o.idx+"_dragger_horizontal")],l=[n.height()/i.outerHeight(!1),n.width()/i.outerWidth(!1)],c=[parseInt(r[0].css("min-height")),Math.round(l[0]*r[0].parent().height()),parseInt(r[1].css("min-width")),Math.round(l[1]*r[1].parent().width())],d=s&&c[1]<c[0]?c[0]:c[1],u=s&&c[3]<c[2]?c[2]:c[3];r[0].css({height:d,"max-height":r[0].parent().height()-10}).find(".mCSB_dragger_bar").css({"line-height":c[0]+"px"}),r[1].css({width:u,"max-width":r[1].parent().width()-10})},b=function(){var t=e(this),o=t.data(a),n=e("#mCSB_"+o.idx),i=e("#mCSB_"+o.idx+"_container"),r=[e("#mCSB_"+o.idx+"_dragger_vertical"),e("#mCSB_"+o.idx+"_dragger_horizontal")],l=[i.outerHeight(!1)-n.height(),i.outerWidth(!1)-n.width()],s=[l[0]/(r[0].parent().height()-r[0].height()),l[1]/(r[1].parent().width()-r[1].width())];o.scrollRatio={y:s[0],x:s[1]}},C=function(e,t,o){var a=o?d[0]+"_expanded":"",n=e.closest(".mCSB_scrollTools");"active"===t?(e.toggleClass(d[0]+" "+a),n.toggleClass(d[1]),e[0]._draggable=e[0]._draggable?0:1):e[0]._draggable||("hide"===t?(e.removeClass(d[0]),n.removeClass(d[1])):(e.addClass(d[0]),n.addClass(d[1])))},y=function(){var t=e(this),o=t.data(a),n=e("#mCSB_"+o.idx),i=e("#mCSB_"+o.idx+"_container"),r=null==o.overflowed?i.height():i.outerHeight(!1),l=null==o.overflowed?i.width():i.outerWidth(!1),s=i[0].scrollHeight,c=i[0].scrollWidth;return s>r&&(r=s),c>l&&(l=c),[r>n.height(),l>n.width()]},B=function(){var t=e(this),o=t.data(a),n=o.opt,i=e("#mCSB_"+o.idx),r=e("#mCSB_"+o.idx+"_container"),l=[e("#mCSB_"+o.idx+"_dragger_vertical"),e("#mCSB_"+o.idx+"_dragger_horizontal")];if(Q(t),("x"!==n.axis&&!o.overflowed[0]||"y"===n.axis&&o.overflowed[0])&&(l[0].add(r).css("top",0),G(t,"_resetY")),"y"!==n.axis&&!o.overflowed[1]||"x"===n.axis&&o.overflowed[1]){var s=dx=0;"rtl"===o.langDir&&(s=i.width()-r.outerWidth(!1),dx=Math.abs(s/o.scrollRatio.x)),r.css("left",s),l[1].css("left",dx),G(t,"_resetX")}},T=function(){function t(){r=setTimeout(function(){e.event.special.mousewheel?(clearTimeout(r),W.call(o[0])):t()},100)}var o=e(this),n=o.data(a),i=n.opt;if(!n.bindEvents){if(I.call(this),i.contentTouchScroll&&D.call(this),E.call(this),i.mouseWheel.enable){var r;t()}P.call(this),U.call(this),i.advanced.autoScrollOnFocus&&H.call(this),i.scrollButtons.enable&&F.call(this),i.keyboard.enable&&q.call(this),n.bindEvents=!0}},k=function(){var t=e(this),o=t.data(a),n=o.opt,i=a+"_"+o.idx,r=".mCSB_"+o.idx+"_scrollbar",l=e("#mCSB_"+o.idx+",#mCSB_"+o.idx+"_container,#mCSB_"+o.idx+"_container_wrapper,"+r+" ."+d[12]+",#mCSB_"+o.idx+"_dragger_vertical,#mCSB_"+o.idx+"_dragger_horizontal,"+r+">a"),s=e("#mCSB_"+o.idx+"_container");n.advanced.releaseDraggableSelectors&&l.add(e(n.advanced.releaseDraggableSelectors)),n.advanced.extraDraggableSelectors&&l.add(e(n.advanced.extraDraggableSelectors)),o.bindEvents&&(e(document).add(e(!A()||top.document)).unbind("."+i),l.each(function(){e(this).unbind("."+i)}),clearTimeout(t[0]._focusTimeout),$(t[0],"_focusTimeout"),clearTimeout(o.sequential.step),$(o.sequential,"step"),clearTimeout(s[0].onCompleteTimeout),$(s[0],"onCompleteTimeout"),o.bindEvents=!1)},M=function(t){var o=e(this),n=o.data(a),i=n.opt,r=e("#mCSB_"+n.idx+"_container_wrapper"),l=r.length?r:e("#mCSB_"+n.idx+"_container"),s=[e("#mCSB_"+n.idx+"_scrollbar_vertical"),e("#mCSB_"+n.idx+"_scrollbar_horizontal")],c=[s[0].find(".mCSB_dragger"),s[1].find(".mCSB_dragger")];"x"!==i.axis&&(n.overflowed[0]&&!t?(s[0].add(c[0]).add(s[0].children("a")).css("display","block"),l.removeClass(d[8]+" "+d[10])):(i.alwaysShowScrollbar?(2!==i.alwaysShowScrollbar&&c[0].css("display","none"),l.removeClass(d[10])):(s[0].css("display","none"),l.addClass(d[10])),l.addClass(d[8]))),"y"!==i.axis&&(n.overflowed[1]&&!t?(s[1].add(c[1]).add(s[1].children("a")).css("display","block"),l.removeClass(d[9]+" "+d[11])):(i.alwaysShowScrollbar?(2!==i.alwaysShowScrollbar&&c[1].css("display","none"),l.removeClass(d[11])):(s[1].css("display","none"),l.addClass(d[11])),l.addClass(d[9]))),n.overflowed[0]||n.overflowed[1]?o.removeClass(d[5]):o.addClass(d[5])},O=function(t){var o=t.type,a=t.target.ownerDocument!==document&&null!==frameElement?[e(frameElement).offset().top,e(frameElement).offset().left]:null,n=A()&&t.target.ownerDocument!==top.document&&null!==frameElement?[e(t.view.frameElement).offset().top,e(t.view.frameElement).offset().left]:[0,0];switch(o){case"pointerdown":case"MSPointerDown":case"pointermove":case"MSPointerMove":case"pointerup":case"MSPointerUp":return a?[t.originalEvent.pageY-a[0]+n[0],t.originalEvent.pageX-a[1]+n[1],!1]:[t.originalEvent.pageY,t.originalEvent.pageX,!1];case"touchstart":case"touchmove":case"touchend":var i=t.originalEvent.touches[0]||t.originalEvent.changedTouches[0],r=t.originalEvent.touches.length||t.originalEvent.changedTouches.length;return t.target.ownerDocument!==document?[i.screenY,i.screenX,r>1]:[i.pageY,i.pageX,r>1];default:return a?[t.pageY-a[0]+n[0],t.pageX-a[1]+n[1],!1]:[t.pageY,t.pageX,!1]}},I=function(){function t(e,t,a,n){if(h[0].idleTimer=d.scrollInertia<233?250:0,o.attr("id")===f[1])var i="x",s=(o[0].offsetLeft-t+n)*l.scrollRatio.x;else var i="y",s=(o[0].offsetTop-e+a)*l.scrollRatio.y;G(r,s.toString(),{dir:i,drag:!0})}var o,n,i,r=e(this),l=r.data(a),d=l.opt,u=a+"_"+l.idx,f=["mCSB_"+l.idx+"_dragger_vertical","mCSB_"+l.idx+"_dragger_horizontal"],h=e("#mCSB_"+l.idx+"_container"),m=e("#"+f[0]+",#"+f[1]),p=d.advanced.releaseDraggableSelectors?m.add(e(d.advanced.releaseDraggableSelectors)):m,g=d.advanced.extraDraggableSelectors?e(!A()||top.document).add(e(d.advanced.extraDraggableSelectors)):e(!A()||top.document);m.bind("contextmenu."+u,function(e){e.preventDefault()}).bind("mousedown."+u+" touchstart."+u+" pointerdown."+u+" MSPointerDown."+u,function(t){if(t.stopImmediatePropagation(),t.preventDefault(),ee(t)){c=!0,s&&(document.onselectstart=function(){return!1}),L.call(h,!1),Q(r),o=e(this);var a=o.offset(),l=O(t)[0]-a.top,u=O(t)[1]-a.left,f=o.height()+a.top,m=o.width()+a.left;f>l&&l>0&&m>u&&u>0&&(n=l,i=u),C(o,"active",d.autoExpandScrollbar)}}).bind("touchmove."+u,function(e){e.stopImmediatePropagation(),e.preventDefault();var a=o.offset(),r=O(e)[0]-a.top,l=O(e)[1]-a.left;t(n,i,r,l)}),e(document).add(g).bind("mousemove."+u+" pointermove."+u+" MSPointerMove."+u,function(e){if(o){var a=o.offset(),r=O(e)[0]-a.top,l=O(e)[1]-a.left;if(n===r&&i===l)return;t(n,i,r,l)}}).add(p).bind("mouseup."+u+" touchend."+u+" pointerup."+u+" MSPointerUp."+u,function(){o&&(C(o,"active",d.autoExpandScrollbar),o=null),c=!1,s&&(document.onselectstart=null),L.call(h,!0)})},D=function(){function o(e){if(!te(e)||c||O(e)[2])return void(t=0);t=1,b=0,C=0,d=1,y.removeClass("mCS_touch_action");var o=I.offset();u=O(e)[0]-o.top,f=O(e)[1]-o.left,z=[O(e)[0],O(e)[1]]}function n(e){if(te(e)&&!c&&!O(e)[2]&&(T.documentTouchScroll||e.preventDefault(),e.stopImmediatePropagation(),(!C||b)&&d)){g=K();var t=M.offset(),o=O(e)[0]-t.top,a=O(e)[1]-t.left,n="mcsLinearOut";if(E.push(o),W.push(a),z[2]=Math.abs(O(e)[0]-z[0]),z[3]=Math.abs(O(e)[1]-z[1]),B.overflowed[0])var i=D[0].parent().height()-D[0].height(),r=u-o>0&&o-u>-(i*B.scrollRatio.y)&&(2*z[3]<z[2]||"yx"===T.axis);if(B.overflowed[1])var l=D[1].parent().width()-D[1].width(),h=f-a>0&&a-f>-(l*B.scrollRatio.x)&&(2*z[2]<z[3]||"yx"===T.axis);r||h?(U||e.preventDefault(),b=1):(C=1,y.addClass("mCS_touch_action")),U&&e.preventDefault(),w="yx"===T.axis?[u-o,f-a]:"x"===T.axis?[null,f-a]:[u-o,null],I[0].idleTimer=250,B.overflowed[0]&&s(w[0],R,n,"y","all",!0),B.overflowed[1]&&s(w[1],R,n,"x",L,!0)}}function i(e){if(!te(e)||c||O(e)[2])return void(t=0);t=1,e.stopImmediatePropagation(),Q(y),p=K();var o=M.offset();h=O(e)[0]-o.top,m=O(e)[1]-o.left,E=[],W=[]}function r(e){if(te(e)&&!c&&!O(e)[2]){d=0,e.stopImmediatePropagation(),b=0,C=0,v=K();var t=M.offset(),o=O(e)[0]-t.top,a=O(e)[1]-t.left;if(!(v-g>30)){_=1e3/(v-p);var n="mcsEaseOut",i=2.5>_,r=i?[E[E.length-2],W[W.length-2]]:[0,0];x=i?[o-r[0],a-r[1]]:[o-h,a-m];var u=[Math.abs(x[0]),Math.abs(x[1])];_=i?[Math.abs(x[0]/4),Math.abs(x[1]/4)]:[_,_];var f=[Math.abs(I[0].offsetTop)-x[0]*l(u[0]/_[0],_[0]),Math.abs(I[0].offsetLeft)-x[1]*l(u[1]/_[1],_[1])];w="yx"===T.axis?[f[0],f[1]]:"x"===T.axis?[null,f[1]]:[f[0],null],S=[4*u[0]+T.scrollInertia,4*u[1]+T.scrollInertia];var y=parseInt(T.contentTouchScroll)||0;w[0]=u[0]>y?w[0]:0,w[1]=u[1]>y?w[1]:0,B.overflowed[0]&&s(w[0],S[0],n,"y",L,!1),B.overflowed[1]&&s(w[1],S[1],n,"x",L,!1)}}}function l(e,t){var o=[1.5*t,2*t,t/1.5,t/2];return e>90?t>4?o[0]:o[3]:e>60?t>3?o[3]:o[2]:e>30?t>8?o[1]:t>6?o[0]:t>4?t:o[2]:t>8?t:o[3]}function s(e,t,o,a,n,i){e&&G(y,e.toString(),{dur:t,scrollEasing:o,dir:a,overwrite:n,drag:i})}var d,u,f,h,m,p,g,v,x,_,w,S,b,C,y=e(this),B=y.data(a),T=B.opt,k=a+"_"+B.idx,M=e("#mCSB_"+B.idx),I=e("#mCSB_"+B.idx+"_container"),D=[e("#mCSB_"+B.idx+"_dragger_vertical"),e("#mCSB_"+B.idx+"_dragger_horizontal")],E=[],W=[],R=0,L="yx"===T.axis?"none":"all",z=[],P=I.find("iframe"),H=["touchstart."+k+" pointerdown."+k+" MSPointerDown."+k,"touchmove."+k+" pointermove."+k+" MSPointerMove."+k,"touchend."+k+" pointerup."+k+" MSPointerUp."+k],U=void 0!==document.body.style.touchAction&&""!==document.body.style.touchAction;I.bind(H[0],function(e){o(e)}).bind(H[1],function(e){n(e)}),M.bind(H[0],function(e){i(e)}).bind(H[2],function(e){r(e)}),P.length&&P.each(function(){e(this).bind("load",function(){A(this)&&e(this.contentDocument||this.contentWindow.document).bind(H[0],function(e){o(e),i(e)}).bind(H[1],function(e){n(e)}).bind(H[2],function(e){r(e)})})})},E=function(){function o(){return window.getSelection?window.getSelection().toString():document.selection&&"Control"!=document.selection.type?document.selection.createRange().text:0}function n(e,t,o){d.type=o&&i?"stepped":"stepless",d.scrollAmount=10,j(r,e,t,"mcsLinearOut",o?60:null)}var i,r=e(this),l=r.data(a),s=l.opt,d=l.sequential,u=a+"_"+l.idx,f=e("#mCSB_"+l.idx+"_container"),h=f.parent();f.bind("mousedown."+u,function(){t||i||(i=1,c=!0)}).add(document).bind("mousemove."+u,function(e){if(!t&&i&&o()){var a=f.offset(),r=O(e)[0]-a.top+f[0].offsetTop,c=O(e)[1]-a.left+f[0].offsetLeft;r>0&&r<h.height()&&c>0&&c<h.width()?d.step&&n("off",null,"stepped"):("x"!==s.axis&&l.overflowed[0]&&(0>r?n("on",38):r>h.height()&&n("on",40)),"y"!==s.axis&&l.overflowed[1]&&(0>c?n("on",37):c>h.width()&&n("on",39)))}}).bind("mouseup."+u+" dragend."+u,function(){t||(i&&(i=0,n("off",null)),c=!1)})},W=function(){function t(t,a){if(Q(o),!z(o,t.target)){var r="auto"!==i.mouseWheel.deltaFactor?parseInt(i.mouseWheel.deltaFactor):s&&t.deltaFactor<100?100:t.deltaFactor||100,d=i.scrollInertia;if("x"===i.axis||"x"===i.mouseWheel.axis)var u="x",f=[Math.round(r*n.scrollRatio.x),parseInt(i.mouseWheel.scrollAmount)],h="auto"!==i.mouseWheel.scrollAmount?f[1]:f[0]>=l.width()?.9*l.width():f[0],m=Math.abs(e("#mCSB_"+n.idx+"_container")[0].offsetLeft),p=c[1][0].offsetLeft,g=c[1].parent().width()-c[1].width(),v="y"===i.mouseWheel.axis?t.deltaY||a:t.deltaX;else var u="y",f=[Math.round(r*n.scrollRatio.y),parseInt(i.mouseWheel.scrollAmount)],h="auto"!==i.mouseWheel.scrollAmount?f[1]:f[0]>=l.height()?.9*l.height():f[0],m=Math.abs(e("#mCSB_"+n.idx+"_container")[0].offsetTop),p=c[0][0].offsetTop,g=c[0].parent().height()-c[0].height(),v=t.deltaY||a;"y"===u&&!n.overflowed[0]||"x"===u&&!n.overflowed[1]||((i.mouseWheel.invert||t.webkitDirectionInvertedFromDevice)&&(v=-v),i.mouseWheel.normalizeDelta&&(v=0>v?-1:1),(v>0&&0!==p||0>v&&p!==g||i.mouseWheel.preventDefault)&&(t.stopImmediatePropagation(),t.preventDefault()),t.deltaFactor<5&&!i.mouseWheel.normalizeDelta&&(h=t.deltaFactor,d=17),G(o,(m-v*h).toString(),{dir:u,dur:d}))}}if(e(this).data(a)){var o=e(this),n=o.data(a),i=n.opt,r=a+"_"+n.idx,l=e("#mCSB_"+n.idx),c=[e("#mCSB_"+n.idx+"_dragger_vertical"),e("#mCSB_"+n.idx+"_dragger_horizontal")],d=e("#mCSB_"+n.idx+"_container").find("iframe");d.length&&d.each(function(){e(this).bind("load",function(){A(this)&&e(this.contentDocument||this.contentWindow.document).bind("mousewheel."+r,function(e,o){t(e,o)})})}),l.bind("mousewheel."+r,function(e,o){t(e,o)})}},R=new Object,A=function(t){var o=!1,a=!1,n=null;if(void 0===t?a="#empty":void 0!==e(t).attr("id")&&(a=e(t).attr("id")),a!==!1&&void 0!==R[a])return R[a];if(t){try{var i=t.contentDocument||t.contentWindow.document;n=i.body.innerHTML}catch(r){}o=null!==n}else{try{var i=top.document;n=i.body.innerHTML}catch(r){}o=null!==n}return a!==!1&&(R[a]=o),o},L=function(e){var t=this.find("iframe");if(t.length){var o=e?"auto":"none";t.css("pointer-events",o)}},z=function(t,o){var n=o.nodeName.toLowerCase(),i=t.data(a).opt.mouseWheel.disableOver,r=["select","textarea"];return e.inArray(n,i)>-1&&!(e.inArray(n,r)>-1&&!e(o).is(":focus"))},P=function(){var t,o=e(this),n=o.data(a),i=a+"_"+n.idx,r=e("#mCSB_"+n.idx+"_container"),l=r.parent(),s=e(".mCSB_"+n.idx+"_scrollbar ."+d[12]);s.bind("mousedown."+i+" touchstart."+i+" pointerdown."+i+" MSPointerDown."+i,function(o){c=!0,e(o.target).hasClass("mCSB_dragger")||(t=1)}).bind("touchend."+i+" pointerup."+i+" MSPointerUp."+i,function(){c=!1}).bind("click."+i,function(a){if(t&&(t=0,e(a.target).hasClass(d[12])||e(a.target).hasClass("mCSB_draggerRail"))){Q(o);var i=e(this),s=i.find(".mCSB_dragger");if(i.parent(".mCSB_scrollTools_horizontal").length>0){if(!n.overflowed[1])return;var c="x",u=a.pageX>s.offset().left?-1:1,f=Math.abs(r[0].offsetLeft)-u*(.9*l.width())}else{if(!n.overflowed[0])return;var c="y",u=a.pageY>s.offset().top?-1:1,f=Math.abs(r[0].offsetTop)-u*(.9*l.height())}G(o,f.toString(),{dir:c,scrollEasing:"mcsEaseInOut"})}})},H=function(){var t=e(this),o=t.data(a),n=o.opt,i=a+"_"+o.idx,r=e("#mCSB_"+o.idx+"_container"),l=r.parent();r.bind("focusin."+i,function(){var o=e(document.activeElement),a=r.find(".mCustomScrollBox").length,i=0;o.is(n.advanced.autoScrollOnFocus)&&(Q(t),clearTimeout(t[0]._focusTimeout),t[0]._focusTimer=a?(i+17)*a:0,t[0]._focusTimeout=setTimeout(function(){var e=[ae(o)[0],ae(o)[1]],a=[r[0].offsetTop,r[0].offsetLeft],s=[a[0]+e[0]>=0&&a[0]+e[0]<l.height()-o.outerHeight(!1),a[1]+e[1]>=0&&a[0]+e[1]<l.width()-o.outerWidth(!1)],c="yx"!==n.axis||s[0]||s[1]?"all":"none";"x"===n.axis||s[0]||G(t,e[0].toString(),{dir:"y",scrollEasing:"mcsEaseInOut",overwrite:c,dur:i}),"y"===n.axis||s[1]||G(t,e[1].toString(),{dir:"x",scrollEasing:"mcsEaseInOut",overwrite:c,dur:i})},t[0]._focusTimer))})},U=function(){var t=e(this),o=t.data(a),n=a+"_"+o.idx,i=e("#mCSB_"+o.idx+"_container").parent();i.bind("scroll."+n,function(){0===i.scrollTop()&&0===i.scrollLeft()||e(".mCSB_"+o.idx+"_scrollbar").css("visibility","hidden")})},F=function(){var t=e(this),o=t.data(a),n=o.opt,i=o.sequential,r=a+"_"+o.idx,l=".mCSB_"+o.idx+"_scrollbar",s=e(l+">a");s.bind("contextmenu."+r,function(e){e.preventDefault()}).bind("mousedown."+r+" touchstart."+r+" pointerdown."+r+" MSPointerDown."+r+" mouseup."+r+" touchend."+r+" pointerup."+r+" MSPointerUp."+r+" mouseout."+r+" pointerout."+r+" MSPointerOut."+r+" click."+r,function(a){function r(e,o){i.scrollAmount=n.scrollButtons.scrollAmount,j(t,e,o)}if(a.preventDefault(),ee(a)){var l=e(this).attr("class");switch(i.type=n.scrollButtons.scrollType,a.type){case"mousedown":case"touchstart":case"pointerdown":case"MSPointerDown":if("stepped"===i.type)return;c=!0,o.tweenRunning=!1,r("on",l);break;case"mouseup":case"touchend":case"pointerup":case"MSPointerUp":case"mouseout":case"pointerout":case"MSPointerOut":if("stepped"===i.type)return;c=!1,i.dir&&r("off",l);break;case"click":if("stepped"!==i.type||o.tweenRunning)return;r("on",l)}}})},q=function(){function t(t){function a(e,t){r.type=i.keyboard.scrollType,r.scrollAmount=i.keyboard.scrollAmount,"stepped"===r.type&&n.tweenRunning||j(o,e,t)}switch(t.type){case"blur":n.tweenRunning&&r.dir&&a("off",null);break;case"keydown":case"keyup":var l=t.keyCode?t.keyCode:t.which,s="on";if("x"!==i.axis&&(38===l||40===l)||"y"!==i.axis&&(37===l||39===l)){if((38===l||40===l)&&!n.overflowed[0]||(37===l||39===l)&&!n.overflowed[1])return;"keyup"===t.type&&(s="off"),e(document.activeElement).is(u)||(t.preventDefault(),t.stopImmediatePropagation(),a(s,l))}else if(33===l||34===l){if((n.overflowed[0]||n.overflowed[1])&&(t.preventDefault(),t.stopImmediatePropagation()),"keyup"===t.type){Q(o);var f=34===l?-1:1;if("x"===i.axis||"yx"===i.axis&&n.overflowed[1]&&!n.overflowed[0])var h="x",m=Math.abs(c[0].offsetLeft)-f*(.9*d.width());else var h="y",m=Math.abs(c[0].offsetTop)-f*(.9*d.height());G(o,m.toString(),{dir:h,scrollEasing:"mcsEaseInOut"})}}else if((35===l||36===l)&&!e(document.activeElement).is(u)&&((n.overflowed[0]||n.overflowed[1])&&(t.preventDefault(),t.stopImmediatePropagation()),"keyup"===t.type)){if("x"===i.axis||"yx"===i.axis&&n.overflowed[1]&&!n.overflowed[0])var h="x",m=35===l?Math.abs(d.width()-c.outerWidth(!1)):0;else var h="y",m=35===l?Math.abs(d.height()-c.outerHeight(!1)):0;G(o,m.toString(),{dir:h,scrollEasing:"mcsEaseInOut"})}}}var o=e(this),n=o.data(a),i=n.opt,r=n.sequential,l=a+"_"+n.idx,s=e("#mCSB_"+n.idx),c=e("#mCSB_"+n.idx+"_container"),d=c.parent(),u="input,textarea,select,datalist,keygen,[contenteditable='true']",f=c.find("iframe"),h=["blur."+l+" keydown."+l+" keyup."+l];f.length&&f.each(function(){e(this).bind("load",function(){A(this)&&e(this.contentDocument||this.contentWindow.document).bind(h[0],function(e){t(e)})})}),s.attr("tabindex","0").bind(h[0],function(e){t(e)})},j=function(t,o,n,i,r){function l(e){u.snapAmount&&(f.scrollAmount=u.snapAmount instanceof Array?"x"===f.dir[0]?u.snapAmount[1]:u.snapAmount[0]:u.snapAmount);var o="stepped"!==f.type,a=r?r:e?o?p/1.5:g:1e3/60,n=e?o?7.5:40:2.5,s=[Math.abs(h[0].offsetTop),Math.abs(h[0].offsetLeft)],d=[c.scrollRatio.y>10?10:c.scrollRatio.y,c.scrollRatio.x>10?10:c.scrollRatio.x],m="x"===f.dir[0]?s[1]+f.dir[1]*(d[1]*n):s[0]+f.dir[1]*(d[0]*n),v="x"===f.dir[0]?s[1]+f.dir[1]*parseInt(f.scrollAmount):s[0]+f.dir[1]*parseInt(f.scrollAmount),x="auto"!==f.scrollAmount?v:m,_=i?i:e?o?"mcsLinearOut":"mcsEaseInOut":"mcsLinear",w=!!e;return e&&17>a&&(x="x"===f.dir[0]?s[1]:s[0]),G(t,x.toString(),{dir:f.dir[0],scrollEasing:_,dur:a,onComplete:w}),e?void(f.dir=!1):(clearTimeout(f.step),void(f.step=setTimeout(function(){l()},a)))}function s(){clearTimeout(f.step),$(f,"step"),Q(t)}var c=t.data(a),u=c.opt,f=c.sequential,h=e("#mCSB_"+c.idx+"_container"),m="stepped"===f.type,p=u.scrollInertia<26?26:u.scrollInertia,g=u.scrollInertia<1?17:u.scrollInertia;switch(o){case"on":if(f.dir=[n===d[16]||n===d[15]||39===n||37===n?"x":"y",n===d[13]||n===d[15]||38===n||37===n?-1:1],Q(t),oe(n)&&"stepped"===f.type)return;l(m);break;case"off":s(),(m||c.tweenRunning&&f.dir)&&l(!0)}},Y=function(t){var o=e(this).data(a).opt,n=[];return"function"==typeof t&&(t=t()),t instanceof Array?n=t.length>1?[t[0],t[1]]:"x"===o.axis?[null,t[0]]:[t[0],null]:(n[0]=t.y?t.y:t.x||"x"===o.axis?null:t,n[1]=t.x?t.x:t.y||"y"===o.axis?null:t),"function"==typeof n[0]&&(n[0]=n[0]()),"function"==typeof n[1]&&(n[1]=n[1]()),n},X=function(t,o){if(null!=t&&"undefined"!=typeof t){var n=e(this),i=n.data(a),r=i.opt,l=e("#mCSB_"+i.idx+"_container"),s=l.parent(),c=typeof t;o||(o="x"===r.axis?"x":"y");var d="x"===o?l.outerWidth(!1)-s.width():l.outerHeight(!1)-s.height(),f="x"===o?l[0].offsetLeft:l[0].offsetTop,h="x"===o?"left":"top";switch(c){case"function":return t();case"object":var m=t.jquery?t:e(t);if(!m.length)return;return"x"===o?ae(m)[1]:ae(m)[0];case"string":case"number":if(oe(t))return Math.abs(t);if(-1!==t.indexOf("%"))return Math.abs(d*parseInt(t)/100);if(-1!==t.indexOf("-="))return Math.abs(f-parseInt(t.split("-=")[1]));if(-1!==t.indexOf("+=")){var p=f+parseInt(t.split("+=")[1]);return p>=0?0:Math.abs(p)}if(-1!==t.indexOf("px")&&oe(t.split("px")[0]))return Math.abs(t.split("px")[0]);if("top"===t||"left"===t)return 0;if("bottom"===t)return Math.abs(s.height()-l.outerHeight(!1));if("right"===t)return Math.abs(s.width()-l.outerWidth(!1));if("first"===t||"last"===t){var m=l.find(":"+t);return"x"===o?ae(m)[1]:ae(m)[0]}return e(t).length?"x"===o?ae(e(t))[1]:ae(e(t))[0]:(l.css(h,t),void u.update.call(null,n[0]))}}},N=function(t){function o(){return clearTimeout(f[0].autoUpdate),0===l.parents("html").length?void(l=null):void(f[0].autoUpdate=setTimeout(function(){return c.advanced.updateOnSelectorChange&&(s.poll.change.n=i(),s.poll.change.n!==s.poll.change.o)?(s.poll.change.o=s.poll.change.n,void r(3)):c.advanced.updateOnContentResize&&(s.poll.size.n=l[0].scrollHeight+l[0].scrollWidth+f[0].offsetHeight+l[0].offsetHeight+l[0].offsetWidth,s.poll.size.n!==s.poll.size.o)?(s.poll.size.o=s.poll.size.n,void r(1)):!c.advanced.updateOnImageLoad||"auto"===c.advanced.updateOnImageLoad&&"y"===c.axis||(s.poll.img.n=f.find("img").length,s.poll.img.n===s.poll.img.o)?void((c.advanced.updateOnSelectorChange||c.advanced.updateOnContentResize||c.advanced.updateOnImageLoad)&&o()):(s.poll.img.o=s.poll.img.n,void f.find("img").each(function(){n(this)}))},c.advanced.autoUpdateTimeout))}function n(t){function o(e,t){return function(){
return t.apply(e,arguments)}}function a(){this.onload=null,e(t).addClass(d[2]),r(2)}if(e(t).hasClass(d[2]))return void r();var n=new Image;n.onload=o(n,a),n.src=t.src}function i(){c.advanced.updateOnSelectorChange===!0&&(c.advanced.updateOnSelectorChange="*");var e=0,t=f.find(c.advanced.updateOnSelectorChange);return c.advanced.updateOnSelectorChange&&t.length>0&&t.each(function(){e+=this.offsetHeight+this.offsetWidth}),e}function r(e){clearTimeout(f[0].autoUpdate),u.update.call(null,l[0],e)}var l=e(this),s=l.data(a),c=s.opt,f=e("#mCSB_"+s.idx+"_container");return t?(clearTimeout(f[0].autoUpdate),void $(f[0],"autoUpdate")):void o()},V=function(e,t,o){return Math.round(e/t)*t-o},Q=function(t){var o=t.data(a),n=e("#mCSB_"+o.idx+"_container,#mCSB_"+o.idx+"_container_wrapper,#mCSB_"+o.idx+"_dragger_vertical,#mCSB_"+o.idx+"_dragger_horizontal");n.each(function(){Z.call(this)})},G=function(t,o,n){function i(e){return s&&c.callbacks[e]&&"function"==typeof c.callbacks[e]}function r(){return[c.callbacks.alwaysTriggerOffsets||w>=S[0]+y,c.callbacks.alwaysTriggerOffsets||-B>=w]}function l(){var e=[h[0].offsetTop,h[0].offsetLeft],o=[x[0].offsetTop,x[0].offsetLeft],a=[h.outerHeight(!1),h.outerWidth(!1)],i=[f.height(),f.width()];t[0].mcs={content:h,top:e[0],left:e[1],draggerTop:o[0],draggerLeft:o[1],topPct:Math.round(100*Math.abs(e[0])/(Math.abs(a[0])-i[0])),leftPct:Math.round(100*Math.abs(e[1])/(Math.abs(a[1])-i[1])),direction:n.dir}}var s=t.data(a),c=s.opt,d={trigger:"internal",dir:"y",scrollEasing:"mcsEaseOut",drag:!1,dur:c.scrollInertia,overwrite:"all",callbacks:!0,onStart:!0,onUpdate:!0,onComplete:!0},n=e.extend(d,n),u=[n.dur,n.drag?0:n.dur],f=e("#mCSB_"+s.idx),h=e("#mCSB_"+s.idx+"_container"),m=h.parent(),p=c.callbacks.onTotalScrollOffset?Y.call(t,c.callbacks.onTotalScrollOffset):[0,0],g=c.callbacks.onTotalScrollBackOffset?Y.call(t,c.callbacks.onTotalScrollBackOffset):[0,0];if(s.trigger=n.trigger,0===m.scrollTop()&&0===m.scrollLeft()||(e(".mCSB_"+s.idx+"_scrollbar").css("visibility","visible"),m.scrollTop(0).scrollLeft(0)),"_resetY"!==o||s.contentReset.y||(i("onOverflowYNone")&&c.callbacks.onOverflowYNone.call(t[0]),s.contentReset.y=1),"_resetX"!==o||s.contentReset.x||(i("onOverflowXNone")&&c.callbacks.onOverflowXNone.call(t[0]),s.contentReset.x=1),"_resetY"!==o&&"_resetX"!==o){if(!s.contentReset.y&&t[0].mcs||!s.overflowed[0]||(i("onOverflowY")&&c.callbacks.onOverflowY.call(t[0]),s.contentReset.x=null),!s.contentReset.x&&t[0].mcs||!s.overflowed[1]||(i("onOverflowX")&&c.callbacks.onOverflowX.call(t[0]),s.contentReset.x=null),c.snapAmount){var v=c.snapAmount instanceof Array?"x"===n.dir?c.snapAmount[1]:c.snapAmount[0]:c.snapAmount;o=V(o,v,c.snapOffset)}switch(n.dir){case"x":var x=e("#mCSB_"+s.idx+"_dragger_horizontal"),_="left",w=h[0].offsetLeft,S=[f.width()-h.outerWidth(!1),x.parent().width()-x.width()],b=[o,0===o?0:o/s.scrollRatio.x],y=p[1],B=g[1],T=y>0?y/s.scrollRatio.x:0,k=B>0?B/s.scrollRatio.x:0;break;case"y":var x=e("#mCSB_"+s.idx+"_dragger_vertical"),_="top",w=h[0].offsetTop,S=[f.height()-h.outerHeight(!1),x.parent().height()-x.height()],b=[o,0===o?0:o/s.scrollRatio.y],y=p[0],B=g[0],T=y>0?y/s.scrollRatio.y:0,k=B>0?B/s.scrollRatio.y:0}b[1]<0||0===b[0]&&0===b[1]?b=[0,0]:b[1]>=S[1]?b=[S[0],S[1]]:b[0]=-b[0],t[0].mcs||(l(),i("onInit")&&c.callbacks.onInit.call(t[0])),clearTimeout(h[0].onCompleteTimeout),J(x[0],_,Math.round(b[1]),u[1],n.scrollEasing),!s.tweenRunning&&(0===w&&b[0]>=0||w===S[0]&&b[0]<=S[0])||J(h[0],_,Math.round(b[0]),u[0],n.scrollEasing,n.overwrite,{onStart:function(){n.callbacks&&n.onStart&&!s.tweenRunning&&(i("onScrollStart")&&(l(),c.callbacks.onScrollStart.call(t[0])),s.tweenRunning=!0,C(x),s.cbOffsets=r())},onUpdate:function(){n.callbacks&&n.onUpdate&&i("whileScrolling")&&(l(),c.callbacks.whileScrolling.call(t[0]))},onComplete:function(){if(n.callbacks&&n.onComplete){"yx"===c.axis&&clearTimeout(h[0].onCompleteTimeout);var e=h[0].idleTimer||0;h[0].onCompleteTimeout=setTimeout(function(){i("onScroll")&&(l(),c.callbacks.onScroll.call(t[0])),i("onTotalScroll")&&b[1]>=S[1]-T&&s.cbOffsets[0]&&(l(),c.callbacks.onTotalScroll.call(t[0])),i("onTotalScrollBack")&&b[1]<=k&&s.cbOffsets[1]&&(l(),c.callbacks.onTotalScrollBack.call(t[0])),s.tweenRunning=!1,h[0].idleTimer=0,C(x,"hide")},e)}}})}},J=function(e,t,o,a,n,i,r){function l(){S.stop||(x||m.call(),x=K()-v,s(),x>=S.time&&(S.time=x>S.time?x+f-(x-S.time):x+f-1,S.time<x+1&&(S.time=x+1)),S.time<a?S.id=h(l):g.call())}function s(){a>0?(S.currVal=u(S.time,_,b,a,n),w[t]=Math.round(S.currVal)+"px"):w[t]=o+"px",p.call()}function c(){f=1e3/60,S.time=x+f,h=window.requestAnimationFrame?window.requestAnimationFrame:function(e){return s(),setTimeout(e,.01)},S.id=h(l)}function d(){null!=S.id&&(window.requestAnimationFrame?window.cancelAnimationFrame(S.id):clearTimeout(S.id),S.id=null)}function u(e,t,o,a,n){switch(n){case"linear":case"mcsLinear":return o*e/a+t;case"mcsLinearOut":return e/=a,e--,o*Math.sqrt(1-e*e)+t;case"easeInOutSmooth":return e/=a/2,1>e?o/2*e*e+t:(e--,-o/2*(e*(e-2)-1)+t);case"easeInOutStrong":return e/=a/2,1>e?o/2*Math.pow(2,10*(e-1))+t:(e--,o/2*(-Math.pow(2,-10*e)+2)+t);case"easeInOut":case"mcsEaseInOut":return e/=a/2,1>e?o/2*e*e*e+t:(e-=2,o/2*(e*e*e+2)+t);case"easeOutSmooth":return e/=a,e--,-o*(e*e*e*e-1)+t;case"easeOutStrong":return o*(-Math.pow(2,-10*e/a)+1)+t;case"easeOut":case"mcsEaseOut":default:var i=(e/=a)*e,r=i*e;return t+o*(.499999999999997*r*i+-2.5*i*i+5.5*r+-6.5*i+4*e)}}e._mTween||(e._mTween={top:{},left:{}});var f,h,r=r||{},m=r.onStart||function(){},p=r.onUpdate||function(){},g=r.onComplete||function(){},v=K(),x=0,_=e.offsetTop,w=e.style,S=e._mTween[t];"left"===t&&(_=e.offsetLeft);var b=o-_;S.stop=0,"none"!==i&&d(),c()},K=function(){return window.performance&&window.performance.now?window.performance.now():window.performance&&window.performance.webkitNow?window.performance.webkitNow():Date.now?Date.now():(new Date).getTime()},Z=function(){var e=this;e._mTween||(e._mTween={top:{},left:{}});for(var t=["top","left"],o=0;o<t.length;o++){var a=t[o];e._mTween[a].id&&(window.requestAnimationFrame?window.cancelAnimationFrame(e._mTween[a].id):clearTimeout(e._mTween[a].id),e._mTween[a].id=null,e._mTween[a].stop=1)}},$=function(e,t){try{delete e[t]}catch(o){e[t]=null}},ee=function(e){return!(e.which&&1!==e.which)},te=function(e){var t=e.originalEvent.pointerType;return!(t&&"touch"!==t&&2!==t)},oe=function(e){return!isNaN(parseFloat(e))&&isFinite(e)},ae=function(e){var t=e.parents(".mCSB_container");return[e.offset().top-t.offset().top,e.offset().left-t.offset().left]},ne=function(){function e(){var e=["webkit","moz","ms","o"];if("hidden"in document)return"hidden";for(var t=0;t<e.length;t++)if(e[t]+"Hidden"in document)return e[t]+"Hidden";return null}var t=e();return t?document[t]:!1};e.fn[o]=function(t){return u[t]?u[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?void e.error("Method "+t+" does not exist"):u.init.apply(this,arguments)},e[o]=function(t){return u[t]?u[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?void e.error("Method "+t+" does not exist"):u.init.apply(this,arguments)},e[o].defaults=i,window[o]=!0,e(window).bind("load",function(){e(n)[o](),e.extend(e.expr[":"],{mcsInView:e.expr[":"].mcsInView||function(t){var o,a,n=e(t),i=n.parents(".mCSB_container");if(i.length)return o=i.parent(),a=[i[0].offsetTop,i[0].offsetLeft],a[0]+ae(n)[0]>=0&&a[0]+ae(n)[0]<o.height()-n.outerHeight(!1)&&a[1]+ae(n)[1]>=0&&a[1]+ae(n)[1]<o.width()-n.outerWidth(!1)},mcsInSight:e.expr[":"].mcsInSight||function(t,o,a){var n,i,r,l,s=e(t),c=s.parents(".mCSB_container"),d="exact"===a[3]?[[1,0],[1,0]]:[[.9,.1],[.6,.4]];if(c.length)return n=[s.outerHeight(!1),s.outerWidth(!1)],r=[c[0].offsetTop+ae(s)[0],c[0].offsetLeft+ae(s)[1]],i=[c.parent()[0].offsetHeight,c.parent()[0].offsetWidth],l=[n[0]<i[0]?d[0]:d[1],n[1]<i[1]?d[0]:d[1]],r[0]-i[0]*l[0][0]<0&&r[0]+n[0]-i[0]*l[0][1]>=0&&r[1]-i[1]*l[1][0]<0&&r[1]+n[1]-i[1]*l[1][1]>=0},mcsOverflow:e.expr[":"].mcsOverflow||function(t){var o=e(t).data(a);if(o)return o.overflowed[0]||o.overflowed[1]}})})})});(this.currentForm).triggerHandler("invalid-form",[this]),this.formSubmitted=!1)},previousValue:function(t,i){return i="string"==typeof i&&i||"remote",e.data(t,"previousValue")||e.data(t,"previousValue",{old:null,valid:!0,message:this.defaultMessage(t,{method:i})})},destroy:function(){this.resetForm(),e(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur").find(".validate-lessThan-blur").off(".validate-lessThan").removeClass("validate-lessThan-blur").find(".validate-lessThanEqual-blur").off(".validate-lessThanEqual").removeClass("validate-lessThanEqual-blur").find(".validate-greaterThanEqual-blur").off(".validate-greaterThanEqual").removeClass("validate-greaterThanEqual-blur").find(".validate-greaterThan-blur").off(".validate-greaterThan").removeClass("validate-greaterThan-blur")}},classRuleSettings:{required:{required:!0},email:{email:!0},url:{url:!0},date:{date:!0},dateISO:{dateISO:!0},number:{number:!0},digits:{digits:!0},creditcard:{creditcard:!0}},addClassRules:function(t,i){t.constructor===String?this.classRuleSettings[t]=i:e.extend(this.classRuleSettings,t)},classRules:function(t){var i={},o=e(t).attr("class");return o&&e.each(o.split(" "),function(){this in e.validator.classRuleSettings&&e.extend(i,e.validator.classRuleSettings[this])}),i},normalizeAttributeRule:function(e,t,i,o){/min|max|step/.test(i)&&(null===t||/number|range|text/.test(t))&&(o=Number(o),isNaN(o)&&(o=void 0)),o||0===o?e[i]=o:t===i&&"range"!==t&&(e[i]=!0)},attributeRules:function(t){var i,o,n={},s=e(t),r=t.getAttribute("type");for(i in e.validator.methods)"required"===i?(o=t.getAttribute(i),""===o&&(o=!0),o=!!o):o=s.attr(i),this.normalizeAttributeRule(n,r,i,o);return n.maxlength&&/-1|2147483647|524288/.test(n.maxlength)&&delete n.maxlength,n},dataRules:function(t){var i,o,n={},s=e(t),r=t.getAttribute("type");for(i in e.validator.methods)o=s.data("rule"+i.charAt(0).toUpperCase()+i.substring(1).toLowerCase()),""===o&&(o=!0),this.normalizeAttributeRule(n,r,i,o);return n},staticRules:function(t){var i={},o=e.data(t.form,"validator");return o.settings.rules&&(i=e.validator.normalizeRule(o.settings.rules[t.name])||{}),i},normalizeRules:function(t,i){return e.each(t,function(o,n){if(n===!1)return void delete t[o];if(n.param||n.depends){var s=!0;switch(typeof n.depends){case"string":s=!!e(n.depends,i.form).length;break;case"function":s=n.depends.call(i,i)}s?t[o]=void 0===n.param||n.param:(e.data(i.form,"validator").resetElements(e(i)),delete t[o])}}),e.each(t,function(o,n){t[o]=e.isFunction(n)&&"normalizer"!==o?n(i):n}),e.each(["minlength","maxlength"],function(){t[this]&&(t[this]=Number(t[this]))}),e.each(["rangelength","range"],function(){var i;t[this]&&(e.isArray(t[this])?t[this]=[Number(t[this][0]),Number(t[this][1])]:"string"==typeof t[this]&&(i=t[this].replace(/[\[\]]/g,"").split(/[\s,]+/),t[this]=[Number(i[0]),Number(i[1])]))}),e.validator.autoCreateRanges&&(null!=t.min&&null!=t.max&&(t.range=[t.min,t.max],delete t.min,delete t.max),null!=t.minlength&&null!=t.maxlength&&(t.rangelength=[t.minlength,t.maxlength],delete t.minlength,delete t.maxlength)),t},normalizeRule:function(t){if("string"==typeof t){var i={};e.each(t.split(/\s/),function(){i[this]=!0}),t=i}return t},addMethod:function(t,i,o){e.validator.methods[t]=i,e.validator.messages[t]=void 0!==o?o:e.validator.messages[t],i.length<3&&e.validator.addClassRules(t,e.validator.normalizeRule(t))},methods:{required:function(t,i,o){if(!this.depend(o,i))return"dependency-mismatch";if("select"===i.nodeName.toLowerCase()){var n=e(i).val();return n&&n.length>0}return this.checkable(i)?this.getLength(t,i)>0:void 0!==t&&null!==t&&t.length>0},email:function(e,t){return this.optional(t)||/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(e)},url:function(e,t){return this.optional(t)||/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(e)},date:function(){var e=!1;return function(t,i){return e||(e=!0,this.settings.debug&&window.console&&console.warn("The `date` method is deprecated and will be removed in version '2.0.0'.\nPlease don't use it, since it relies on the Date constructor, which\nbehaves very differently across browsers and locales. Use `dateISO`\ninstead or one of the locale specific methods in `localizations/`\nand `additional-methods.js`.")),this.optional(i)||!/Invalid|NaN/.test(new Date(t).toString())}}(),dateISO:function(e,t){return this.optional(t)||/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(e)},number:function(e,t){return this.optional(t)||/^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(e)},digits:function(e,t){return this.optional(t)||/^\d+$/.test(e)},minlength:function(t,i,o){var n=e.isArray(t)?t.length:this.getLength(t,i);return this.optional(i)||n>=o},maxlength:function(t,i,o){var n=e.isArray(t)?t.length:this.getLength(t,i);return this.optional(i)||n<=o},rangelength:function(t,i,o){var n=e.isArray(t)?t.length:this.getLength(t,i);return this.optional(i)||n>=o[0]&&n<=o[1]},min:function(e,t,i){return this.optional(t)||e>=i},max:function(e,t,i){return this.optional(t)||e<=i},range:function(e,t,i){return this.optional(t)||e>=i[0]&&e<=i[1]},step:function(t,i,o){var n,s=e(i).attr("type"),r="Step attribute on input type "+s+" is not supported.",a=["text","number","range"],l=new RegExp("\\b"+s+"\\b"),d=s&&!l.test(a.join()),c=function(e){var t=(""+e).match(/(?:\.(\d+))?$/);return t&&t[1]?t[1].length:0},u=function(e){return Math.round(e*Math.pow(10,n))},p=!0;if(d)throw new Error(r);return n=c(o),(c(t)>n||u(t)%u(o)!==0)&&(p=!1),this.optional(i)||p},equalTo:function(t,i,o){var n=e(o);return this.settings.onfocusout&&n.not(".validate-equalTo-blur").length&&n.addClass("validate-equalTo-blur").on("blur.validate-equalTo",function(){e(i).valid()}),t===n.val()},remote:function(t,i,o,n){if(this.optional(i))return"dependency-mismatch";n="string"==typeof n&&n||"remote";var s,r,a,l=this.previousValue(i,n);return this.settings.messages[i.name]||(this.settings.messages[i.name]={}),l.originalMessage=l.originalMessage||this.settings.messages[i.name][n],this.settings.messages[i.name][n]=l.message,o="string"==typeof o&&{url:o}||o,a=e.param(e.extend({data:t},o.data)),l.old===a?l.valid:(l.old=a,s=this,this.startRequest(i),r={},r[i.name]=t,e.ajax(e.extend(!0,{mode:"abort",port:"validate"+i.name,dataType:"json",data:r,context:s.currentForm,success:function(e){var o,r,a,d=e===!0||"true"===e;s.settings.messages[i.name][n]=l.originalMessage,d?(a=s.formSubmitted,s.resetInternals(),s.toHide=s.errorsFor(i),s.formSubmitted=a,s.successList.push(i),s.invalid[i.name]=!1,s.showErrors()):(o={},r=e||s.defaultMessage(i,{method:n,parameters:t}),o[i.name]=l.message=r,s.invalid[i.name]=!0,s.showErrors(o)),l.valid=d,s.stopRequest(i,d)}},o)),"pending")}}});var t,i={};return e.ajaxPrefilter?e.ajaxPrefilter(function(e,t,o){var n=e.port;"abort"===e.mode&&(i[n]&&i[n].abort(),i[n]=o)}):(t=e.ajax,e.ajax=function(o){var n=("mode"in o?o:e.ajaxSettings).mode,s=("port"in o?o:e.ajaxSettings).port;return"abort"===n?(i[s]&&i[s].abort(),i[s]=t.apply(this,arguments),i[s]):t.apply(this,arguments)}),e}),function(){"use strict";function e(o){if(!o)throw new Error("No options passed to Waypoint constructor");if(!o.element)throw new Error("No element option passed to Waypoint constructor");if(!o.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+t,this.options=e.Adapter.extend({},e.defaults,o),this.element=this.options.element,this.adapter=new e.Adapter(this.element),this.callback=o.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=e.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=e.Context.findOrCreateByElement(this.options.context),e.offsetAliases[this.options.offset]&&(this.options.offset=e.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),i[this.key]=this,t+=1}var t=0,i={};e.prototype.queueTrigger=function(e){this.group.queueTrigger(this,e)},e.prototype.trigger=function(e){this.enabled&&this.callback&&this.callback.apply(this,e)},e.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete i[this.key]},e.prototype.disable=function(){return this.enabled=!1,this},e.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},e.prototype.next=function(){return this.group.next(this)},e.prototype.previous=function(){return this.group.previous(this)},e.invokeAll=function(e){var t=[];for(var o in i)t.push(i[o]);for(var n=0,s=t.length;n<s;n++)t[n][e]()},e.destroyAll=function(){e.invokeAll("destroy")},e.disableAll=function(){e.invokeAll("disable")},e.enableAll=function(){e.invokeAll("enable")},e.refreshAll=function(){e.Context.refreshAll()},e.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},e.viewportWidth=function(){return document.documentElement.clientWidth},e.adapters=[],e.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},e.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=e}(),function(){"use strict";function e(e){window.setTimeout(e,1e3/60)}function t(e){this.element=e,this.Adapter=n.Adapter,this.adapter=new this.Adapter(e),this.key="waypoint-context-"+i,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},e.waypointContextKey=this.key,o[e.waypointContextKey]=this,i+=1,this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}var i=0,o={},n=window.Waypoint,s=window.onload;t.prototype.add=function(e){var t=e.options.horizontal?"horizontal":"vertical";this.waypoints[t][e.key]=e,this.refresh()},t.prototype.checkEmpty=function(){var e=this.Adapter.isEmptyObject(this.waypoints.horizontal),t=this.Adapter.isEmptyObject(this.waypoints.vertical);e&&t&&(this.adapter.off(".waypoints"),delete o[this.key])},t.prototype.createThrottledResizeHandler=function(){function e(){t.handleResize(),t.didResize=!1}var t=this;this.adapter.on("resize.waypoints",function(){t.didResize||(t.didResize=!0,n.requestAnimationFrame(e))})},t.prototype.createThrottledScrollHandler=function(){function e(){t.handleScroll(),t.didScroll=!1}var t=this;this.adapter.on("scroll.waypoints",function(){t.didScroll&&!n.isTouch||(t.didScroll=!0,n.requestAnimationFrame(e))})},t.prototype.handleResize=function(){n.Context.refreshAll()},t.prototype.handleScroll=function(){var e={},t={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var i in t){var o=t[i],n=o.newScroll>o.oldScroll,s=n?o.forward:o.backward;for(var r in this.waypoints[i]){var a=this.waypoints[i][r],l=o.oldScroll<a.triggerPoint,d=o.newScroll>=a.triggerPoint,c=l&&d,u=!l&&!d;(c||u)&&(a.queueTrigger(s),e[a.group.id]=a.group)}}for(var p in e)e[p].flushTriggers();this.oldScroll={x:t.horizontal.newScroll,y:t.vertical.newScroll}},t.prototype.innerHeight=function(){return this.element==this.element.window?n.viewportHeight():this.adapter.innerHeight()},t.prototype.remove=function(e){delete this.waypoints[e.axis][e.key],this.checkEmpty()},t.prototype.innerWidth=function(){return this.element==this.element.window?n.viewportWidth():this.adapter.innerWidth()},t.prototype.destroy=function(){var e=[];for(var t in this.waypoints)for(var i in this.waypoints[t])e.push(this.waypoints[t][i]);for(var o=0,n=e.length;o<n;o++)e[o].destroy()},t.prototype.refresh=function(){var e,t=this.element==this.element.window,i=t?void 0:this.adapter.offset(),o={};this.handleScroll(),e={horizontal:{contextOffset:t?0:i.left,contextScroll:t?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:t?0:i.top,contextScroll:t?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};for(var s in e){var r=e[s];for(var a in this.waypoints[s]){var l,d,c,u,p,h=this.waypoints[s][a],f=h.options.offset,m=h.triggerPoint,g=0,v=null==m;h.element!==h.element.window&&(g=h.adapter.offset()[r.offsetProp]),"function"==typeof f?f=f.apply(h):"string"==typeof f&&(f=parseFloat(f),h.options.offset.indexOf("%")>-1&&(f=Math.ceil(r.contextDimension*f/100))),l=r.contextScroll-r.contextOffset,h.triggerPoint=g+l-f,d=m<r.oldScroll,c=h.triggerPoint>=r.oldScroll,u=d&&c,p=!d&&!c,!v&&u?(h.queueTrigger(r.backward),o[h.group.id]=h.group):!v&&p?(h.queueTrigger(r.forward),o[h.group.id]=h.group):v&&r.oldScroll>=h.triggerPoint&&(h.queueTrigger(r.forward),o[h.group.id]=h.group)}}return n.requestAnimationFrame(function(){for(var e in o)o[e].flushTriggers()}),this},t.findOrCreateByElement=function(e){return t.findByElement(e)||new t(e)},t.refreshAll=function(){for(var e in o)o[e].refresh()},t.findByElement=function(e){return o[e.waypointContextKey]},window.onload=function(){s&&s(),t.refreshAll()},n.requestAnimationFrame=function(t){var i=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||e;i.call(window,t)},n.Context=t}(),function(){"use strict";function e(e,t){return e.triggerPoint-t.triggerPoint}function t(e,t){return t.triggerPoint-e.triggerPoint}function i(e){this.name=e.name,this.axis=e.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),o[this.axis][this.name]=this}var o={vertical:{},horizontal:{}},n=window.Waypoint;i.prototype.add=function(e){this.waypoints.push(e)},i.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},i.prototype.flushTriggers=function(){for(var i in this.triggerQueues){var o=this.triggerQueues[i],n="up"===i||"left"===i;o.sort(n?t:e);for(var s=0,r=o.length;s<r;s+=1){var a=o[s];(a.options.continuous||s===o.length-1)&&a.trigger([i])}}this.clearTriggerQueues()},i.prototype.next=function(t){this.waypoints.sort(e);var i=n.Adapter.inArray(t,this.waypoints),o=i===this.waypoints.length-1;return o?null:this.waypoints[i+1]},i.prototype.previous=function(t){this.waypoints.sort(e);var i=n.Adapter.inArray(t,this.waypoints);return i?this.waypoints[i-1]:null},i.prototype.queueTrigger=function(e,t){this.triggerQueues[t].push(e)},i.prototype.remove=function(e){var t=n.Adapter.inArray(e,this.waypoints);t>-1&&this.waypoints.splice(t,1)},i.prototype.first=function(){return this.waypoints[0]},i.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},i.findOrCreate=function(e){return o[e.axis][e.name]||new i(e)},n.Group=i}(),function(){"use strict";function e(e){this.$element=t(e)}var t=window.jQuery,i=window.Waypoint;t.each(["innerHeight","innerWidth","off","offset","on","outerHeight","outerWidth","scrollLeft","scrollTop"],function(t,i){e.prototype[i]=function(){var e=Array.prototype.slice.call(arguments);return this.$element[i].apply(this.$element,e)}}),t.each(["extend","inArray","isEmptyObject"],function(i,o){e[o]=t[o]}),i.adapters.push({name:"jquery",Adapter:e}),i.Adapter=e}(),function(){"use strict";function e(e){return function(){var i=[],o=arguments[0];return e.isFunction(arguments[0])&&(o=e.extend({},arguments[1]),o.handler=arguments[0]),this.each(function(){var n=e.extend({},o,{element:this});"string"==typeof n.context&&(n.context=e(this).closest(n.context)[0]),i.push(new t(n))}),i}}var t=window.Waypoint;window.jQuery&&(window.jQuery.fn.waypoint=e(window.jQuery)),window.Zepto&&(window.Zepto.fn.waypoint=e(window.Zepto))}(),function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?module.exports=e:e(jQuery)}(function(e){function t(t){var r=t||window.event,a=l.call(arguments,1),d=0,u=0,p=0,h=0,f=0,m=0;if(t=e.event.fix(r),t.type="mousewheel","detail"in r&&(p=r.detail*-1),"wheelDelta"in r&&(p=r.wheelDelta),"wheelDeltaY"in r&&(p=r.wheelDeltaY),"wheelDeltaX"in r&&(u=r.wheelDeltaX*-1),"axis"in r&&r.axis===r.HORIZONTAL_AXIS&&(u=p*-1,p=0),d=0===p?u:p,"deltaY"in r&&(p=r.deltaY*-1,d=p),"deltaX"in r&&(u=r.deltaX,0===p&&(d=u*-1)),0!==p||0!==u){if(1===r.deltaMode){var g=e.data(this,"mousewheel-line-height");d*=g,p*=g,u*=g}else if(2===r.deltaMode){var v=e.data(this,"mousewheel-page-height");d*=v,p*=v,u*=v}if(h=Math.max(Math.abs(p),Math.abs(u)),(!s||h<s)&&(s=h,o(r,h)&&(s/=40)),o(r,h)&&(d/=40,u/=40,p/=40),d=Math[d>=1?"floor":"ceil"](d/s),u=Math[u>=1?"floor":"ceil"](u/s),p=Math[p>=1?"floor":"ceil"](p/s),c.settings.normalizeOffset&&this.getBoundingClientRect){var y=this.getBoundingClientRect();f=t.clientX-y.left,m=t.clientY-y.top}return t.deltaX=u,t.deltaY=p,t.deltaFactor=s,t.offsetX=f,t.offsetY=m,t.deltaMode=0,a.unshift(t,d,u,p),n&&clearTimeout(n),n=setTimeout(i,200),(e.event.dispatch||e.event.handle).apply(this,a)}}function i(){s=null}function o(e,t){return c.settings.adjustOldDeltas&&"mousewheel"===e.type&&t%120===0}var n,s,r=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],a="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],l=Array.prototype.slice;if(e.event.fixHooks)for(var d=r.length;d;)e.event.fixHooks[r[--d]]=e.event.mouseHooks;var c=e.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var i=a.length;i;)this.addEventListener(a[--i],t,!1);else this.onmousewheel=t;e.data(this,"mousewheel-line-height",c.getLineHeight(this)),e.data(this,"mousewheel-page-height",c.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var i=a.length;i;)this.removeEventListener(a[--i],t,!1);else this.onmousewheel=null;e.removeData(this,"mousewheel-line-height"),e.removeData(this,"mousewheel-page-height")},getLineHeight:function(t){var i=e(t),o=i["offsetParent"in e.fn?"offsetParent":"parent"]();
return o.length||(o=e("body")),parseInt(o.css("fontSize"),10)||parseInt(i.css("fontSize"),10)||16},getPageHeight:function(t){return e(t).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};e.fn.extend({mousewheel:function(e){return e?this.bind("mousewheel",e):this.trigger("mousewheel")},unmousewheel:function(e){return this.unbind("mousewheel",e)}})}),function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery"],e):"undefined"!=typeof exports?module.exports=e(require("jquery")):e(jQuery)}(function(e){"use strict";var t=window.Slick||{};t=function(){function t(t,o){var n,s=this;s.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:e(t),appendDots:e(t),arrows:!0,asNavFor:null,prevArrow:'<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',nextArrow:'<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(e,t){return'<button type="button" data-role="none" role="button" aria-required="false" tabindex="0">'+(t+1)+"</button>"},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!1,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},s.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},e.extend(s,s.initials),s.activeBreakpoint=null,s.animType=null,s.animProp=null,s.breakpoints=[],s.breakpointSettings=[],s.cssTransitions=!1,s.hidden="hidden",s.paused=!1,s.positionProp=null,s.respondTo=null,s.rowCount=1,s.shouldClick=!0,s.$slider=e(t),s.$slidesCache=null,s.transformType=null,s.transitionType=null,s.visibilityChange="visibilitychange",s.windowWidth=0,s.windowTimer=null,n=e(t).data("slick")||{},s.options=e.extend({},s.defaults,n,o),s.currentSlide=s.options.initialSlide,s.originalSettings=s.options,"undefined"!=typeof document.mozHidden?(s.hidden="mozHidden",s.visibilityChange="mozvisibilitychange"):"undefined"!=typeof document.webkitHidden&&(s.hidden="webkitHidden",s.visibilityChange="webkitvisibilitychange"),s.autoPlay=e.proxy(s.autoPlay,s),s.autoPlayClear=e.proxy(s.autoPlayClear,s),s.changeSlide=e.proxy(s.changeSlide,s),s.clickHandler=e.proxy(s.clickHandler,s),s.selectHandler=e.proxy(s.selectHandler,s),s.setPosition=e.proxy(s.setPosition,s),s.swipeHandler=e.proxy(s.swipeHandler,s),s.dragHandler=e.proxy(s.dragHandler,s),s.keyHandler=e.proxy(s.keyHandler,s),s.autoPlayIterator=e.proxy(s.autoPlayIterator,s),s.instanceUid=i++,s.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,s.registerBreakpoints(),s.init(!0),s.checkResponsive(!0)}var i=0;return t}(),t.prototype.addSlide=t.prototype.slickAdd=function(t,i,o){var n=this;if("boolean"==typeof i)o=i,i=null;else if(i<0||i>=n.slideCount)return!1;n.unload(),"number"==typeof i?0===i&&0===n.$slides.length?e(t).appendTo(n.$slideTrack):o?e(t).insertBefore(n.$slides.eq(i)):e(t).insertAfter(n.$slides.eq(i)):o===!0?e(t).prependTo(n.$slideTrack):e(t).appendTo(n.$slideTrack),n.$slides=n.$slideTrack.children(this.options.slide),n.$slideTrack.children(this.options.slide).detach(),n.$slideTrack.append(n.$slides),n.$slides.each(function(t,i){e(i).attr("data-slick-index",t)}),n.$slidesCache=n.$slides,n.reinit()},t.prototype.animateHeight=function(){var e=this;if(1===e.options.slidesToShow&&e.options.adaptiveHeight===!0&&e.options.vertical===!1){var t=e.$slides.eq(e.currentSlide).outerHeight(!0);e.$list.animate({height:t},e.options.speed)}},t.prototype.animateSlide=function(t,i){var o={},n=this;n.animateHeight(),n.options.rtl===!0&&n.options.vertical===!1&&(t=-t),n.transformsEnabled===!1?n.options.vertical===!1?n.$slideTrack.animate({left:t},n.options.speed,n.options.easing,i):n.$slideTrack.animate({top:t},n.options.speed,n.options.easing,i):n.cssTransitions===!1?(n.options.rtl===!0&&(n.currentLeft=-n.currentLeft),e({animStart:n.currentLeft}).animate({animStart:t},{duration:n.options.speed,easing:n.options.easing,step:function(e){e=Math.ceil(e),n.options.vertical===!1?(o[n.animType]="translate("+e+"px, 0px)",n.$slideTrack.css(o)):(o[n.animType]="translate(0px,"+e+"px)",n.$slideTrack.css(o))},complete:function(){i&&i.call()}})):(n.applyTransition(),t=Math.ceil(t),n.options.vertical===!1?o[n.animType]="translate3d("+t+"px, 0px, 0px)":o[n.animType]="translate3d(0px,"+t+"px, 0px)",n.$slideTrack.css(o),i&&setTimeout(function(){n.disableTransition(),i.call()},n.options.speed))},t.prototype.asNavFor=function(t){var i=this,o=i.options.asNavFor;o&&null!==o&&(o=e(o).not(i.$slider)),null!==o&&"object"==typeof o&&o.each(function(){var i=e(this).slick("getSlick");i.unslicked||i.slideHandler(t,!0)})},t.prototype.applyTransition=function(e){var t=this,i={};t.options.fade===!1?i[t.transitionType]=t.transformType+" "+t.options.speed+"ms "+t.options.cssEase:i[t.transitionType]="opacity "+t.options.speed+"ms "+t.options.cssEase,t.options.fade===!1?t.$slideTrack.css(i):t.$slides.eq(e).css(i)},t.prototype.autoPlay=function(){var e=this;e.autoPlayTimer&&clearInterval(e.autoPlayTimer),e.slideCount>e.options.slidesToShow&&e.paused!==!0&&(e.autoPlayTimer=setInterval(e.autoPlayIterator,e.options.autoplaySpeed))},t.prototype.autoPlayClear=function(){var e=this;e.autoPlayTimer&&clearInterval(e.autoPlayTimer)},t.prototype.autoPlayIterator=function(){var e=this;e.options.infinite===!1?1===e.direction?(e.currentSlide+1===e.slideCount-1&&(e.direction=0),e.slideHandler(e.currentSlide+e.options.slidesToScroll)):(e.currentSlide-1===0&&(e.direction=1),e.slideHandler(e.currentSlide-e.options.slidesToScroll)):e.slideHandler(e.currentSlide+e.options.slidesToScroll)},t.prototype.buildArrows=function(){var t=this;t.options.arrows===!0&&(t.$prevArrow=e(t.options.prevArrow).addClass("slick-arrow"),t.$nextArrow=e(t.options.nextArrow).addClass("slick-arrow"),t.slideCount>t.options.slidesToShow?(t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.prependTo(t.options.appendArrows),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.appendTo(t.options.appendArrows),t.options.infinite!==!0&&t.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},t.prototype.buildDots=function(){var t,i,o=this;if(o.options.dots===!0&&o.slideCount>o.options.slidesToShow){for(i='<ul class="'+o.options.dotsClass+'">',t=0;t<=o.getDotCount();t+=1)i+="<li>"+o.options.customPaging.call(this,o,t)+"</li>";i+="</ul>",o.$dots=e(i).appendTo(o.options.appendDots),o.$dots.find("li").first().addClass("slick-active").attr("aria-hidden","false")}},t.prototype.buildOut=function(){var t=this;t.$slides=t.$slider.children(t.options.slide+":not(.slick-cloned)").addClass("slick-slide"),t.slideCount=t.$slides.length,t.$slides.each(function(t,i){e(i).attr("data-slick-index",t).data("originalStyling",e(i).attr("style")||"")}),t.$slider.addClass("slick-slider"),t.$slideTrack=0===t.slideCount?e('<div class="slick-track"/>').appendTo(t.$slider):t.$slides.wrapAll('<div class="slick-track"/>').parent(),t.$list=t.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(),t.$slideTrack.css("opacity",0),t.options.centerMode!==!0&&t.options.swipeToSlide!==!0||(t.options.slidesToScroll=1),e("img[data-lazy]",t.$slider).not("[src]").addClass("slick-loading"),t.setupInfinite(),t.buildArrows(),t.buildDots(),t.updateDots(),t.setSlideClasses("number"==typeof t.currentSlide?t.currentSlide:0),t.options.draggable===!0&&t.$list.addClass("draggable")},t.prototype.buildRows=function(){var e,t,i,o,n,s,r,a=this;if(o=document.createDocumentFragment(),s=a.$slider.children(),a.options.rows>1){for(r=a.options.slidesPerRow*a.options.rows,n=Math.ceil(s.length/r),e=0;e<n;e++){var l=document.createElement("div");for(t=0;t<a.options.rows;t++){var d=document.createElement("div");for(i=0;i<a.options.slidesPerRow;i++){var c=e*r+(t*a.options.slidesPerRow+i);s.get(c)&&d.appendChild(s.get(c))}l.appendChild(d)}o.appendChild(l)}a.$slider.html(o),a.$slider.children().children().children().css({width:100/a.options.slidesPerRow+"%",display:"inline-block"})}},t.prototype.checkResponsive=function(t,i){var o,n,s,r=this,a=!1,l=r.$slider.width(),d=window.innerWidth||e(window).width();if("window"===r.respondTo?s=d:"slider"===r.respondTo?s=l:"min"===r.respondTo&&(s=Math.min(d,l)),r.options.responsive&&r.options.responsive.length&&null!==r.options.responsive){n=null;for(o in r.breakpoints)r.breakpoints.hasOwnProperty(o)&&(r.originalSettings.mobileFirst===!1?s<r.breakpoints[o]&&(n=r.breakpoints[o]):s>r.breakpoints[o]&&(n=r.breakpoints[o]));null!==n?null!==r.activeBreakpoint?(n!==r.activeBreakpoint||i)&&(r.activeBreakpoint=n,"unslick"===r.breakpointSettings[n]?r.unslick(n):(r.options=e.extend({},r.originalSettings,r.breakpointSettings[n]),t===!0&&(r.currentSlide=r.options.initialSlide),r.refresh(t)),a=n):(r.activeBreakpoint=n,"unslick"===r.breakpointSettings[n]?r.unslick(n):(r.options=e.extend({},r.originalSettings,r.breakpointSettings[n]),t===!0&&(r.currentSlide=r.options.initialSlide),r.refresh(t)),a=n):null!==r.activeBreakpoint&&(r.activeBreakpoint=null,r.options=r.originalSettings,t===!0&&(r.currentSlide=r.options.initialSlide),r.refresh(t),a=n),t||a===!1||r.$slider.trigger("breakpoint",[r,a])}},t.prototype.changeSlide=function(t,i){var o,n,s,r=this,a=e(t.target);switch(a.is("a")&&t.preventDefault(),a.is("li")||(a=a.closest("li")),s=r.slideCount%r.options.slidesToScroll!==0,o=s?0:(r.slideCount-r.currentSlide)%r.options.slidesToScroll,t.data.message){case"previous":n=0===o?r.options.slidesToScroll:r.options.slidesToShow-o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide-n,!1,i);break;case"next":n=0===o?r.options.slidesToScroll:o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide+n,!1,i);break;case"index":var l=0===t.data.index?0:t.data.index||a.index()*r.options.slidesToScroll;r.slideHandler(r.checkNavigable(l),!1,i),a.children().trigger("focus");break;default:return}},t.prototype.checkNavigable=function(e){var t,i,o=this;if(t=o.getNavigableIndexes(),i=0,e>t[t.length-1])e=t[t.length-1];else for(var n in t){if(e<t[n]){e=i;break}i=t[n]}return e},t.prototype.cleanUpEvents=function(){var t=this;t.options.dots&&null!==t.$dots&&(e("li",t.$dots).off("click.slick",t.changeSlide),t.options.pauseOnDotsHover===!0&&t.options.autoplay===!0&&e("li",t.$dots).off("mouseenter.slick",e.proxy(t.setPaused,t,!0)).off("mouseleave.slick",e.proxy(t.setPaused,t,!1))),t.options.arrows===!0&&t.slideCount>t.options.slidesToShow&&(t.$prevArrow&&t.$prevArrow.off("click.slick",t.changeSlide),t.$nextArrow&&t.$nextArrow.off("click.slick",t.changeSlide)),t.$list.off("touchstart.slick mousedown.slick",t.swipeHandler),t.$list.off("touchmove.slick mousemove.slick",t.swipeHandler),t.$list.off("touchend.slick mouseup.slick",t.swipeHandler),t.$list.off("touchcancel.slick mouseleave.slick",t.swipeHandler),t.$list.off("click.slick",t.clickHandler),e(document).off(t.visibilityChange,t.visibility),t.$list.off("mouseenter.slick",e.proxy(t.setPaused,t,!0)),t.$list.off("mouseleave.slick",e.proxy(t.setPaused,t,!1)),t.options.accessibility===!0&&t.$list.off("keydown.slick",t.keyHandler),t.options.focusOnSelect===!0&&e(t.$slideTrack).children().off("click.slick",t.selectHandler),e(window).off("orientationchange.slick.slick-"+t.instanceUid,t.orientationChange),e(window).off("resize.slick.slick-"+t.instanceUid,t.resize),e("[draggable!=true]",t.$slideTrack).off("dragstart",t.preventDefault),e(window).off("load.slick.slick-"+t.instanceUid,t.setPosition),e(document).off("ready.slick.slick-"+t.instanceUid,t.setPosition)},t.prototype.cleanUpRows=function(){var e,t=this;t.options.rows>1&&(e=t.$slides.children().children(),e.removeAttr("style"),t.$slider.html(e))},t.prototype.clickHandler=function(e){var t=this;t.shouldClick===!1&&(e.stopImmediatePropagation(),e.stopPropagation(),e.preventDefault())},t.prototype.destroy=function(t){var i=this;i.autoPlayClear(),i.touchObject={},i.cleanUpEvents(),e(".slick-cloned",i.$slider).detach(),i.$dots&&i.$dots.remove(),i.$prevArrow&&i.$prevArrow.length&&(i.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),i.htmlExpr.test(i.options.prevArrow)&&i.$prevArrow.remove()),i.$nextArrow&&i.$nextArrow.length&&(i.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),i.htmlExpr.test(i.options.nextArrow)&&i.$nextArrow.remove()),i.$slides&&(i.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){e(this).attr("style",e(this).data("originalStyling"))}),i.$slideTrack.children(this.options.slide).detach(),i.$slideTrack.detach(),i.$list.detach(),i.$slider.append(i.$slides)),i.cleanUpRows(),i.$slider.removeClass("slick-slider"),i.$slider.removeClass("slick-initialized"),i.unslicked=!0,t||i.$slider.trigger("destroy",[i])},t.prototype.disableTransition=function(e){var t=this,i={};i[t.transitionType]="",t.options.fade===!1?t.$slideTrack.css(i):t.$slides.eq(e).css(i)},t.prototype.fadeSlide=function(e,t){var i=this;i.cssTransitions===!1?(i.$slides.eq(e).css({zIndex:i.options.zIndex}),i.$slides.eq(e).animate({opacity:1},i.options.speed,i.options.easing,t)):(i.applyTransition(e),i.$slides.eq(e).css({opacity:1,zIndex:i.options.zIndex}),t&&setTimeout(function(){i.disableTransition(e),t.call()},i.options.speed))},t.prototype.fadeSlideOut=function(e){var t=this;t.cssTransitions===!1?t.$slides.eq(e).animate({opacity:0,zIndex:t.options.zIndex-2},t.options.speed,t.options.easing):(t.applyTransition(e),t.$slides.eq(e).css({opacity:0,zIndex:t.options.zIndex-2}))},t.prototype.filterSlides=t.prototype.slickFilter=function(e){var t=this;null!==e&&(t.$slidesCache=t.$slides,t.unload(),t.$slideTrack.children(this.options.slide).detach(),t.$slidesCache.filter(e).appendTo(t.$slideTrack),t.reinit())},t.prototype.getCurrent=t.prototype.slickCurrentSlide=function(){var e=this;return e.currentSlide},t.prototype.getDotCount=function(){var e=this,t=0,i=0,o=0;if(e.options.infinite===!0)for(;t<e.slideCount;)++o,t=i+e.options.slidesToScroll,i+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;else if(e.options.centerMode===!0)o=e.slideCount;else for(;t<e.slideCount;)++o,t=i+e.options.slidesToScroll,i+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;return o-1},t.prototype.getLeft=function(e){var t,i,o,n=this,s=0;return n.slideOffset=0,i=n.$slides.first().outerHeight(!0),n.options.infinite===!0?(n.slideCount>n.options.slidesToShow&&(n.slideOffset=n.slideWidth*n.options.slidesToShow*-1,s=i*n.options.slidesToShow*-1),n.slideCount%n.options.slidesToScroll!==0&&e+n.options.slidesToScroll>n.slideCount&&n.slideCount>n.options.slidesToShow&&(e>n.slideCount?(n.slideOffset=(n.options.slidesToShow-(e-n.slideCount))*n.slideWidth*-1,s=(n.options.slidesToShow-(e-n.slideCount))*i*-1):(n.slideOffset=n.slideCount%n.options.slidesToScroll*n.slideWidth*-1,s=n.slideCount%n.options.slidesToScroll*i*-1))):e+n.options.slidesToShow>n.slideCount&&(n.slideOffset=(e+n.options.slidesToShow-n.slideCount)*n.slideWidth,s=(e+n.options.slidesToShow-n.slideCount)*i),n.slideCount<=n.options.slidesToShow&&(n.slideOffset=0,s=0),n.options.centerMode===!0&&n.options.infinite===!0?n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)-n.slideWidth:n.options.centerMode===!0&&(n.slideOffset=0,n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)),t=n.options.vertical===!1?e*n.slideWidth*-1+n.slideOffset:e*i*-1+s,n.options.variableWidth===!0&&(o=n.slideCount<=n.options.slidesToShow||n.options.infinite===!1?n.$slideTrack.children(".slick-slide").eq(e):n.$slideTrack.children(".slick-slide").eq(e+n.options.slidesToShow),t=n.options.rtl===!0?o[0]?(n.$slideTrack.width()-o[0].offsetLeft-o.width())*-1:0:o[0]?o[0].offsetLeft*-1:0,n.options.centerMode===!0&&(o=n.slideCount<=n.options.slidesToShow||n.options.infinite===!1?n.$slideTrack.children(".slick-slide").eq(e):n.$slideTrack.children(".slick-slide").eq(e+n.options.slidesToShow+1),t=n.options.rtl===!0?o[0]?(n.$slideTrack.width()-o[0].offsetLeft-o.width())*-1:0:o[0]?o[0].offsetLeft*-1:0,t+=(n.$list.width()-o.outerWidth())/2)),t},t.prototype.getOption=t.prototype.slickGetOption=function(e){var t=this;return t.options[e]},t.prototype.getNavigableIndexes=function(){var e,t=this,i=0,o=0,n=[];for(t.options.infinite===!1?e=t.slideCount:(i=t.options.slidesToScroll*-1,o=t.options.slidesToScroll*-1,e=2*t.slideCount);i<e;)n.push(i),i=o+t.options.slidesToScroll,o+=t.options.slidesToScroll<=t.options.slidesToShow?t.options.slidesToScroll:t.options.slidesToShow;return n},t.prototype.getSlick=function(){return this},t.prototype.getSlideCount=function(){var t,i,o,n=this;return o=n.options.centerMode===!0?n.slideWidth*Math.floor(n.options.slidesToShow/2):0,n.options.swipeToSlide===!0?(n.$slideTrack.find(".slick-slide").each(function(t,s){if(s.offsetLeft-o+e(s).outerWidth()/2>n.swipeLeft*-1)return i=s,!1}),t=Math.abs(e(i).attr("data-slick-index")-n.currentSlide)||1):n.options.slidesToScroll},t.prototype.goTo=t.prototype.slickGoTo=function(e,t){var i=this;i.changeSlide({data:{message:"index",index:parseInt(e)}},t)},t.prototype.init=function(t){var i=this;e(i.$slider).hasClass("slick-initialized")||(e(i.$slider).addClass("slick-initialized"),i.buildRows(),i.buildOut(),i.setProps(),i.startLoad(),i.loadSlider(),i.initializeEvents(),i.updateArrows(),i.updateDots()),t&&i.$slider.trigger("init",[i]),i.options.accessibility===!0&&i.initADA()},t.prototype.initArrowEvents=function(){var e=this;e.options.arrows===!0&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow.on("click.slick",{message:"previous"},e.changeSlide),e.$nextArrow.on("click.slick",{message:"next"},e.changeSlide))},t.prototype.initDotEvents=function(){var t=this;t.options.dots===!0&&t.slideCount>t.options.slidesToShow&&e("li",t.$dots).on("click.slick",{message:"index"},t.changeSlide),t.options.dots===!0&&t.options.pauseOnDotsHover===!0&&t.options.autoplay===!0&&e("li",t.$dots).on("mouseenter.slick",e.proxy(t.setPaused,t,!0)).on("mouseleave.slick",e.proxy(t.setPaused,t,!1))},t.prototype.initializeEvents=function(){var t=this;t.initArrowEvents(),t.initDotEvents(),t.$list.on("touchstart.slick mousedown.slick",{action:"start"},t.swipeHandler),t.$list.on("touchmove.slick mousemove.slick",{action:"move"},t.swipeHandler),t.$list.on("touchend.slick mouseup.slick",{action:"end"},t.swipeHandler),t.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},t.swipeHandler),t.$list.on("click.slick",t.clickHandler),e(document).on(t.visibilityChange,e.proxy(t.visibility,t)),t.$list.on("mouseenter.slick",e.proxy(t.setPaused,t,!0)),t.$list.on("mouseleave.slick",e.proxy(t.setPaused,t,!1)),t.options.accessibility===!0&&t.$list.on("keydown.slick",t.keyHandler),t.options.focusOnSelect===!0&&e(t.$slideTrack).children().on("click.slick",t.selectHandler),e(window).on("orientationchange.slick.slick-"+t.instanceUid,e.proxy(t.orientationChange,t)),e(window).on("resize.slick.slick-"+t.instanceUid,e.proxy(t.resize,t)),e("[draggable!=true]",t.$slideTrack).on("dragstart",t.preventDefault),e(window).on("load.slick.slick-"+t.instanceUid,t.setPosition),e(document).on("ready.slick.slick-"+t.instanceUid,t.setPosition)},t.prototype.initUI=function(){var e=this;e.options.arrows===!0&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow.show(),e.$nextArrow.show()),e.options.dots===!0&&e.slideCount>e.options.slidesToShow&&e.$dots.show(),e.options.autoplay===!0&&e.autoPlay()},t.prototype.keyHandler=function(e){var t=this;e.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===e.keyCode&&t.options.accessibility===!0?t.changeSlide({data:{message:"previous"}}):39===e.keyCode&&t.options.accessibility===!0&&t.changeSlide({data:{message:"next"}}))},t.prototype.lazyLoad=function(){function t(t){e("img[data-lazy]",t).each(function(){var t=e(this),i=e(this).attr("data-lazy"),o=document.createElement("img");o.onload=function(){t.animate({opacity:0},100,function(){t.attr("src",i).animate({opacity:1},200,function(){t.removeAttr("data-lazy").removeClass("slick-loading")})})},o.src=i})}var i,o,n,s,r=this;r.options.centerMode===!0?r.options.infinite===!0?(n=r.currentSlide+(r.options.slidesToShow/2+1),s=n+r.options.slidesToShow+2):(n=Math.max(0,r.currentSlide-(r.options.slidesToShow/2+1)),s=2+(r.options.slidesToShow/2+1)+r.currentSlide):(n=r.options.infinite?r.options.slidesToShow+r.currentSlide:r.currentSlide,s=n+r.options.slidesToShow,r.options.fade===!0&&(n>0&&n--,s<=r.slideCount&&s++)),i=r.$slider.find(".slick-slide").slice(n,s),t(i),r.slideCount<=r.options.slidesToShow?(o=r.$slider.find(".slick-slide"),t(o)):r.currentSlide>=r.slideCount-r.options.slidesToShow?(o=r.$slider.find(".slick-cloned").slice(0,r.options.slidesToShow),t(o)):0===r.currentSlide&&(o=r.$slider.find(".slick-cloned").slice(r.options.slidesToShow*-1),t(o))},t.prototype.loadSlider=function(){var e=this;e.setPosition(),e.$slideTrack.css({opacity:1}),e.$slider.removeClass("slick-loading"),e.initUI(),"progressive"===e.options.lazyLoad&&e.progressiveLazyLoad()},t.prototype.next=t.prototype.slickNext=function(){var e=this;e.changeSlide({data:{message:"next"}})},t.prototype.orientationChange=function(){var e=this;e.checkResponsive(),e.setPosition()},t.prototype.pause=t.prototype.slickPause=function(){var e=this;e.autoPlayClear(),e.paused=!0},t.prototype.play=t.prototype.slickPlay=function(){var e=this;e.paused=!1,e.autoPlay()},t.prototype.postSlide=function(e){var t=this;t.$slider.trigger("afterChange",[t,e]),t.animating=!1,t.setPosition(),t.swipeLeft=null,t.options.autoplay===!0&&t.paused===!1&&t.autoPlay(),t.options.accessibility===!0&&t.initADA()},t.prototype.prev=t.prototype.slickPrev=function(){var e=this;e.changeSlide({data:{message:"previous"}})},t.prototype.preventDefault=function(e){e.preventDefault()},t.prototype.progressiveLazyLoad=function(){var t,i,o=this;t=e("img[data-lazy]",o.$slider).length,t>0&&(i=e("img[data-lazy]",o.$slider).first(),i.attr("src",null),i.attr("src",i.attr("data-lazy")).removeClass("slick-loading").load(function(){i.removeAttr("data-lazy"),o.progressiveLazyLoad(),o.options.adaptiveHeight===!0&&o.setPosition()}).error(function(){i.removeAttr("data-lazy"),o.progressiveLazyLoad()}))},t.prototype.refresh=function(t){var i,o,n=this;o=n.slideCount-n.options.slidesToShow,n.options.infinite||(n.slideCount<=n.options.slidesToShow?n.currentSlide=0:n.currentSlide>o&&(n.currentSlide=o)),i=n.currentSlide,n.destroy(!0),e.extend(n,n.initials,{currentSlide:i}),n.init(),t||n.changeSlide({data:{message:"index",index:i}},!1)},t.prototype.registerBreakpoints=function(){var t,i,o,n=this,s=n.options.responsive||null;if("array"===e.type(s)&&s.length){n.respondTo=n.options.respondTo||"window";for(t in s)if(o=n.breakpoints.length-1,i=s[t].breakpoint,s.hasOwnProperty(t)){for(;o>=0;)n.breakpoints[o]&&n.breakpoints[o]===i&&n.breakpoints.splice(o,1),o--;n.breakpoints.push(i),n.breakpointSettings[i]=s[t].settings}n.breakpoints.sort(function(e,t){return n.options.mobileFirst?e-t:t-e})}},t.prototype.reinit=function(){var t=this;t.$slides=t.$slideTrack.children(t.options.slide).addClass("slick-slide"),t.slideCount=t.$slides.length,t.currentSlide>=t.slideCount&&0!==t.currentSlide&&(t.currentSlide=t.currentSlide-t.options.slidesToScroll),t.slideCount<=t.options.slidesToShow&&(t.currentSlide=0),t.registerBreakpoints(),t.setProps(),t.setupInfinite(),t.buildArrows(),t.updateArrows(),t.initArrowEvents(),t.buildDots(),t.updateDots(),t.initDotEvents(),t.checkResponsive(!1,!0),t.options.focusOnSelect===!0&&e(t.$slideTrack).children().on("click.slick",t.selectHandler),t.setSlideClasses(0),t.setPosition(),t.$slider.trigger("reInit",[t]),t.options.autoplay===!0&&t.focusHandler()},t.prototype.resize=function(){var t=this;e(window).width()!==t.windowWidth&&(clearTimeout(t.windowDelay),t.windowDelay=window.setTimeout(function(){t.windowWidth=e(window).width(),t.checkResponsive(),t.unslicked||t.setPosition()},50))},t.prototype.removeSlide=t.prototype.slickRemove=function(e,t,i){var o=this;return"boolean"==typeof e?(t=e,e=t===!0?0:o.slideCount-1):e=t===!0?--e:e,!(o.slideCount<1||e<0||e>o.slideCount-1)&&(o.unload(),i===!0?o.$slideTrack.children().remove():o.$slideTrack.children(this.options.slide).eq(e).remove(),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slidesCache=o.$slides,void o.reinit())},t.prototype.setCSS=function(e){var t,i,o=this,n={};o.options.rtl===!0&&(e=-e),t="left"==o.positionProp?Math.ceil(e)+"px":"0px",i="top"==o.positionProp?Math.ceil(e)+"px":"0px",n[o.positionProp]=e,o.transformsEnabled===!1?o.$slideTrack.css(n):(n={},o.cssTransitions===!1?(n[o.animType]="translate("+t+", "+i+")",o.$slideTrack.css(n)):(n[o.animType]="translate3d("+t+", "+i+", 0px)",o.$slideTrack.css(n)))},t.prototype.setDimensions=function(){var e=this;e.options.vertical===!1?e.options.centerMode===!0&&e.$list.css({padding:"0px "+e.options.centerPadding}):(e.$list.height(e.$slides.first().outerHeight(!0)*e.options.slidesToShow),e.options.centerMode===!0&&e.$list.css({padding:e.options.centerPadding+" 0px"})),e.listWidth=e.$list.width(),e.listHeight=e.$list.height(),e.options.vertical===!1&&e.options.variableWidth===!1?(e.slideWidth=Math.ceil(e.listWidth/e.options.slidesToShow),e.$slideTrack.width(Math.ceil(e.slideWidth*e.$slideTrack.children(".slick-slide").length))):e.options.variableWidth===!0?e.$slideTrack.width(5e3*e.slideCount):(e.slideWidth=Math.ceil(e.listWidth),e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0)*e.$slideTrack.children(".slick-slide").length)));var t=e.$slides.first().outerWidth(!0)-e.$slides.first().width();e.options.variableWidth===!1&&e.$slideTrack.children(".slick-slide").width(e.slideWidth-t)},t.prototype.setFade=function(){var t,i=this;i.$slides.each(function(o,n){t=i.slideWidth*o*-1,i.options.rtl===!0?e(n).css({position:"relative",right:t,top:0,zIndex:i.options.zIndex-2,opacity:0}):e(n).css({position:"relative",left:t,top:0,zIndex:i.options.zIndex-2,opacity:0})}),i.$slides.eq(i.currentSlide).css({zIndex:i.options.zIndex-1,opacity:1})},t.prototype.setHeight=function(){var e=this;if(1===e.options.slidesToShow&&e.options.adaptiveHeight===!0&&e.options.vertical===!1){var t=e.$slides.eq(e.currentSlide).outerHeight(!0);e.$list.css("height",t)}},t.prototype.setOption=t.prototype.slickSetOption=function(t,i,o){var n,s,r=this;if("responsive"===t&&"array"===e.type(i))for(s in i)if("array"!==e.type(r.options.responsive))r.options.responsive=[i[s]];else{for(n=r.options.responsive.length-1;n>=0;)r.options.responsive[n].breakpoint===i[s].breakpoint&&r.options.responsive.splice(n,1),n--;r.options.responsive.push(i[s])}else r.options[t]=i;o===!0&&(r.unload(),r.reinit())},t.prototype.setPosition=function(){var e=this;e.setDimensions(),e.setHeight(),e.options.fade===!1?e.setCSS(e.getLeft(e.currentSlide)):e.setFade(),e.$slider.trigger("setPosition",[e])},t.prototype.setProps=function(){var e=this,t=document.body.style;e.positionProp=e.options.vertical===!0?"top":"left","top"===e.positionProp?e.$slider.addClass("slick-vertical"):e.$slider.removeClass("slick-vertical"),void 0===t.WebkitTransition&&void 0===t.MozTransition&&void 0===t.msTransition||e.options.useCSS===!0&&(e.cssTransitions=!0),e.options.fade&&("number"==typeof e.options.zIndex?e.options.zIndex<3&&(e.options.zIndex=3):e.options.zIndex=e.defaults.zIndex),void 0!==t.OTransform&&(e.animType="OTransform",e.transformType="-o-transform",e.transitionType="OTransition",void 0===t.perspectiveProperty&&void 0===t.webkitPerspective&&(e.animType=!1)),void 0!==t.MozTransform&&(e.animType="MozTransform",e.transformType="-moz-transform",e.transitionType="MozTransition",void 0===t.perspectiveProperty&&void 0===t.MozPerspective&&(e.animType=!1)),void 0!==t.webkitTransform&&(e.animType="webkitTransform",e.transformType="-webkit-transform",e.transitionType="webkitTransition",void 0===t.perspectiveProperty&&void 0===t.webkitPerspective&&(e.animType=!1)),void 0!==t.msTransform&&(e.animType="msTransform",e.transformType="-ms-transform",e.transitionType="msTransition",void 0===t.msTransform&&(e.animType=!1)),void 0!==t.transform&&e.animType!==!1&&(e.animType="transform",e.transformType="transform",e.transitionType="transition"),e.transformsEnabled=e.options.useTransform&&null!==e.animType&&e.animType!==!1},t.prototype.setSlideClasses=function(e){var t,i,o,n,s=this;i=s.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),s.$slides.eq(e).addClass("slick-current"),s.options.centerMode===!0?(t=Math.floor(s.options.slidesToShow/2),s.options.infinite===!0&&(e>=t&&e<=s.slideCount-1-t?s.$slides.slice(e-t,e+t+1).addClass("slick-active").attr("aria-hidden","false"):(o=s.options.slidesToShow+e,i.slice(o-t+1,o+t+2).addClass("slick-active").attr("aria-hidden","false")),0===e?i.eq(i.length-1-s.options.slidesToShow).addClass("slick-center"):e===s.slideCount-1&&i.eq(s.options.slidesToShow).addClass("slick-center")),s.$slides.eq(e).addClass("slick-center")):e>=0&&e<=s.slideCount-s.options.slidesToShow?s.$slides.slice(e,e+s.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):i.length<=s.options.slidesToShow?i.addClass("slick-active").attr("aria-hidden","false"):(n=s.slideCount%s.options.slidesToShow,o=s.options.infinite===!0?s.options.slidesToShow+e:e,s.options.slidesToShow==s.options.slidesToScroll&&s.slideCount-e<s.options.slidesToShow?i.slice(o-(s.options.slidesToShow-n),o+n).addClass("slick-active").attr("aria-hidden","false"):i.slice(o,o+s.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false")),"ondemand"===s.options.lazyLoad&&s.lazyLoad()},t.prototype.setupInfinite=function(){var t,i,o,n=this;if(n.options.fade===!0&&(n.options.centerMode=!1),n.options.infinite===!0&&n.options.fade===!1&&(i=null,n.slideCount>n.options.slidesToShow)){for(o=n.options.centerMode===!0?n.options.slidesToShow+1:n.options.slidesToShow,t=n.slideCount;t>n.slideCount-o;t-=1)i=t-1,e(n.$slides[i]).clone(!0).attr("id","").attr("data-slick-index",i-n.slideCount).prependTo(n.$slideTrack).addClass("slick-cloned");for(t=0;t<o;t+=1)i=t,e(n.$slides[i]).clone(!0).attr("id","").attr("data-slick-index",i+n.slideCount).appendTo(n.$slideTrack).addClass("slick-cloned");n.$slideTrack.find(".slick-cloned").find("[id]").each(function(){e(this).attr("id","")})}},t.prototype.setPaused=function(e){var t=this;t.options.autoplay===!0&&t.options.pauseOnHover===!0&&(t.paused=e,e?t.autoPlayClear():t.autoPlay())},t.prototype.selectHandler=function(t){var i=this,o=e(t.target).is(".slick-slide")?e(t.target):e(t.target).parents(".slick-slide"),n=parseInt(o.attr("data-slick-index"));return n||(n=0),i.slideCount<=i.options.slidesToShow?(i.setSlideClasses(n),void i.asNavFor(n)):void i.slideHandler(n)},t.prototype.slideHandler=function(e,t,i){var o,n,s,r,a=null,l=this;if(t=t||!1,(l.animating!==!0||l.options.waitForAnimate!==!0)&&!(l.options.fade===!0&&l.currentSlide===e||l.slideCount<=l.options.slidesToShow))return t===!1&&l.asNavFor(e),
o=e,a=l.getLeft(o),r=l.getLeft(l.currentSlide),l.currentLeft=null===l.swipeLeft?r:l.swipeLeft,l.options.infinite===!1&&l.options.centerMode===!1&&(e<0||e>l.getDotCount()*l.options.slidesToScroll)?void(l.options.fade===!1&&(o=l.currentSlide,i!==!0?l.animateSlide(r,function(){l.postSlide(o)}):l.postSlide(o))):l.options.infinite===!1&&l.options.centerMode===!0&&(e<0||e>l.slideCount-l.options.slidesToScroll)?void(l.options.fade===!1&&(o=l.currentSlide,i!==!0?l.animateSlide(r,function(){l.postSlide(o)}):l.postSlide(o))):(l.options.autoplay===!0&&clearInterval(l.autoPlayTimer),n=o<0?l.slideCount%l.options.slidesToScroll!==0?l.slideCount-l.slideCount%l.options.slidesToScroll:l.slideCount+o:o>=l.slideCount?l.slideCount%l.options.slidesToScroll!==0?0:o-l.slideCount:o,l.animating=!0,l.$slider.trigger("beforeChange",[l,l.currentSlide,n]),s=l.currentSlide,l.currentSlide=n,l.setSlideClasses(l.currentSlide),l.updateDots(),l.updateArrows(),l.options.fade===!0?(i!==!0?(l.fadeSlideOut(s),l.fadeSlide(n,function(){l.postSlide(n)})):l.postSlide(n),void l.animateHeight()):void(i!==!0?l.animateSlide(a,function(){l.postSlide(n)}):l.postSlide(n)))},t.prototype.startLoad=function(){var e=this;e.options.arrows===!0&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow.hide(),e.$nextArrow.hide()),e.options.dots===!0&&e.slideCount>e.options.slidesToShow&&e.$dots.hide(),e.$slider.addClass("slick-loading")},t.prototype.swipeDirection=function(){var e,t,i,o,n=this;return e=n.touchObject.startX-n.touchObject.curX,t=n.touchObject.startY-n.touchObject.curY,i=Math.atan2(t,e),o=Math.round(180*i/Math.PI),o<0&&(o=360-Math.abs(o)),o<=45&&o>=0?n.options.rtl===!1?"left":"right":o<=360&&o>=315?n.options.rtl===!1?"left":"right":o>=135&&o<=225?n.options.rtl===!1?"right":"left":n.options.verticalSwiping===!0?o>=35&&o<=135?"left":"right":"vertical"},t.prototype.swipeEnd=function(e){var t,i=this;if(i.dragging=!1,i.shouldClick=!(i.touchObject.swipeLength>10),void 0===i.touchObject.curX)return!1;if(i.touchObject.edgeHit===!0&&i.$slider.trigger("edge",[i,i.swipeDirection()]),i.touchObject.swipeLength>=i.touchObject.minSwipe)switch(i.swipeDirection()){case"left":t=i.options.swipeToSlide?i.checkNavigable(i.currentSlide+i.getSlideCount()):i.currentSlide+i.getSlideCount(),i.slideHandler(t),i.currentDirection=0,i.touchObject={},i.$slider.trigger("swipe",[i,"left"]);break;case"right":t=i.options.swipeToSlide?i.checkNavigable(i.currentSlide-i.getSlideCount()):i.currentSlide-i.getSlideCount(),i.slideHandler(t),i.currentDirection=1,i.touchObject={},i.$slider.trigger("swipe",[i,"right"])}else i.touchObject.startX!==i.touchObject.curX&&(i.slideHandler(i.currentSlide),i.touchObject={})},t.prototype.swipeHandler=function(e){var t=this;if(!(t.options.swipe===!1||"ontouchend"in document&&t.options.swipe===!1||t.options.draggable===!1&&e.type.indexOf("mouse")!==-1))switch(t.touchObject.fingerCount=e.originalEvent&&void 0!==e.originalEvent.touches?e.originalEvent.touches.length:1,t.touchObject.minSwipe=t.listWidth/t.options.touchThreshold,t.options.verticalSwiping===!0&&(t.touchObject.minSwipe=t.listHeight/t.options.touchThreshold),e.data.action){case"start":t.swipeStart(e);break;case"move":t.swipeMove(e);break;case"end":t.swipeEnd(e)}},t.prototype.swipeMove=function(e){var t,i,o,n,s,r=this;return s=void 0!==e.originalEvent?e.originalEvent.touches:null,!(!r.dragging||s&&1!==s.length)&&(t=r.getLeft(r.currentSlide),r.touchObject.curX=void 0!==s?s[0].pageX:e.clientX,r.touchObject.curY=void 0!==s?s[0].pageY:e.clientY,r.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(r.touchObject.curX-r.touchObject.startX,2))),r.options.verticalSwiping===!0&&(r.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(r.touchObject.curY-r.touchObject.startY,2)))),i=r.swipeDirection(),"vertical"!==i?(void 0!==e.originalEvent&&r.touchObject.swipeLength>4&&e.preventDefault(),n=(r.options.rtl===!1?1:-1)*(r.touchObject.curX>r.touchObject.startX?1:-1),r.options.verticalSwiping===!0&&(n=r.touchObject.curY>r.touchObject.startY?1:-1),o=r.touchObject.swipeLength,r.touchObject.edgeHit=!1,r.options.infinite===!1&&(0===r.currentSlide&&"right"===i||r.currentSlide>=r.getDotCount()&&"left"===i)&&(o=r.touchObject.swipeLength*r.options.edgeFriction,r.touchObject.edgeHit=!0),r.options.vertical===!1?r.swipeLeft=t+o*n:r.swipeLeft=t+o*(r.$list.height()/r.listWidth)*n,r.options.verticalSwiping===!0&&(r.swipeLeft=t+o*n),r.options.fade!==!0&&r.options.touchMove!==!1&&(r.animating===!0?(r.swipeLeft=null,!1):void r.setCSS(r.swipeLeft))):void 0)},t.prototype.swipeStart=function(e){var t,i=this;return 1!==i.touchObject.fingerCount||i.slideCount<=i.options.slidesToShow?(i.touchObject={},!1):(void 0!==e.originalEvent&&void 0!==e.originalEvent.touches&&(t=e.originalEvent.touches[0]),i.touchObject.startX=i.touchObject.curX=void 0!==t?t.pageX:e.clientX,i.touchObject.startY=i.touchObject.curY=void 0!==t?t.pageY:e.clientY,void(i.dragging=!0))},t.prototype.unfilterSlides=t.prototype.slickUnfilter=function(){var e=this;null!==e.$slidesCache&&(e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.appendTo(e.$slideTrack),e.reinit())},t.prototype.unload=function(){var t=this;e(".slick-cloned",t.$slider).remove(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove(),t.$nextArrow&&t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove(),t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},t.prototype.unslick=function(e){var t=this;t.$slider.trigger("unslick",[t,e]),t.destroy()},t.prototype.updateArrows=function(){var e,t=this;e=Math.floor(t.options.slidesToShow/2),t.options.arrows===!0&&t.slideCount>t.options.slidesToShow&&!t.options.infinite&&(t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===t.currentSlide?(t.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):t.currentSlide>=t.slideCount-t.options.slidesToShow&&t.options.centerMode===!1?(t.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):t.currentSlide>=t.slideCount-1&&t.options.centerMode===!0&&(t.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},t.prototype.updateDots=function(){var e=this;null!==e.$dots&&(e.$dots.find("li").removeClass("slick-active").attr("aria-hidden","true"),e.$dots.find("li").eq(Math.floor(e.currentSlide/e.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden","false"))},t.prototype.visibility=function(){var e=this;document[e.hidden]?(e.paused=!0,e.autoPlayClear()):e.options.autoplay===!0&&(e.paused=!1,e.autoPlay())},t.prototype.initADA=function(){var t=this;t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),t.$slideTrack.attr("role","listbox"),t.$slides.not(t.$slideTrack.find(".slick-cloned")).each(function(i){e(this).attr({role:"option","aria-describedby":"slick-slide"+t.instanceUid+i})}),null!==t.$dots&&t.$dots.attr("role","tablist").find("li").each(function(i){e(this).attr({role:"presentation","aria-selected":"false","aria-controls":"navigation"+t.instanceUid+i,id:"slick-slide"+t.instanceUid+i})}).first().attr("aria-selected","true").end().find("button").attr("role","button").end().closest("div").attr("role","toolbar"),t.activateADA()},t.prototype.activateADA=function(){var e=this;e.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},t.prototype.focusHandler=function(){var t=this;t.$slider.on("focus.slick blur.slick","*",function(i){i.stopImmediatePropagation();var o=e(this);setTimeout(function(){t.isPlay&&(o.is(":focus")?(t.autoPlayClear(),t.paused=!0):(t.paused=!1,t.autoPlay()))},0)})},e.fn.slick=function(){var e,i,o=this,n=arguments[0],s=Array.prototype.slice.call(arguments,1),r=o.length;for(e=0;e<r;e++)if("object"==typeof n||"undefined"==typeof n?o[e].slick=new t(o[e],n):i=o[e].slick[n].apply(o[e].slick,s),"undefined"!=typeof i)return i;return o}}),function(e,t,i,o){"use strict";var n=i("html"),s=i(e),r=i(t),a=i.fancybox=function(){a.open.apply(this,arguments)},l=navigator.userAgent.match(/msie/i),d=null,c=t.createTouch!==o,u=function(e){return e&&e.hasOwnProperty&&e instanceof i},p=function(e){return e&&"string"===i.type(e)},h=function(e){return p(e)&&e.indexOf("%")>0},f=function(e){return e&&!(e.style.overflow&&"hidden"===e.style.overflow)&&(e.clientWidth&&e.scrollWidth>e.clientWidth||e.clientHeight&&e.scrollHeight>e.clientHeight)},m=function(e,t){var i=parseInt(e,10)||0;return t&&h(e)&&(i=a.getViewport()[t]/100*i),Math.ceil(i)},g=function(e,t){return m(e,t)+"px"};i.extend(a,{version:"2.1.5",defaults:{padding:15,margin:20,width:800,height:600,minWidth:100,minHeight:100,maxWidth:9999,maxHeight:9999,pixelRatio:1,autoSize:!0,autoHeight:!1,autoWidth:!1,autoResize:!0,autoCenter:!c,fitToView:!0,aspectRatio:!1,topRatio:.5,leftRatio:.5,scrolling:"auto",wrapCSS:"",arrows:!0,closeBtn:!0,closeClick:!1,nextClick:!1,mouseWheel:!0,autoPlay:!1,playSpeed:3e3,preload:3,modal:!1,loop:!0,ajax:{dataType:"html",headers:{"X-fancyBox":!0}},iframe:{scrolling:"auto",preload:!0},swf:{wmode:"transparent",allowfullscreen:"true",allowscriptaccess:"always"},keys:{next:{13:"left",34:"up",39:"left",40:"up"},prev:{8:"right",33:"down",37:"right",38:"down"},close:[27],play:[32],toggle:[70]},direction:{next:"left",prev:"right"},scrollOutside:!0,index:0,type:null,href:null,content:null,title:null,tpl:{wrap:'<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',image:'<img class="fancybox-image" src="{href}" alt="" />',iframe:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen'+(l?' allowtransparency="true"':"")+"></iframe>",error:'<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',closeBtn:'<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',next:'<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',prev:'<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>',loading:'<div id="fancybox-loading"><div></div></div>'},openEffect:"fade",openSpeed:250,openEasing:"swing",openOpacity:!0,openMethod:"zoomIn",closeEffect:"fade",closeSpeed:250,closeEasing:"swing",closeOpacity:!0,closeMethod:"zoomOut",nextEffect:"elastic",nextSpeed:250,nextEasing:"swing",nextMethod:"changeIn",prevEffect:"elastic",prevSpeed:250,prevEasing:"swing",prevMethod:"changeOut",helpers:{overlay:!0,title:!0},onCancel:i.noop,beforeLoad:i.noop,afterLoad:i.noop,beforeShow:i.noop,afterShow:i.noop,beforeChange:i.noop,beforeClose:i.noop,afterClose:i.noop},group:{},opts:{},previous:null,coming:null,current:null,isActive:!1,isOpen:!1,isOpened:!1,wrap:null,skin:null,outer:null,inner:null,player:{timer:null,isActive:!1},ajaxLoad:null,imgPreload:null,transitions:{},helpers:{},open:function(e,t){if(e&&(i.isPlainObject(t)||(t={}),!1!==a.close(!0)))return i.isArray(e)||(e=u(e)?i(e).get():[e]),i.each(e,function(n,s){var r,l,d,c,h,f,m,g={};"object"===i.type(s)&&(s.nodeType&&(s=i(s)),u(s)?(g={href:s.data("fancybox-href")||s.attr("href"),title:i("<div/>").text(s.data("fancybox-title")||s.attr("title")||"").html(),isDom:!0,element:s},i.metadata&&i.extend(!0,g,s.metadata())):g=s),r=t.href||g.href||(p(s)?s:null),l=t.title!==o?t.title:g.title||"",d=t.content||g.content,c=d?"html":t.type||g.type,!c&&g.isDom&&(c=s.data("fancybox-type"),c||(h=s.prop("class").match(/fancybox\.(\w+)/),c=h?h[1]:null)),p(r)&&(c||(a.isImage(r)?c="image":a.isSWF(r)?c="swf":"#"===r.charAt(0)?c="inline":p(s)&&(c="html",d=s)),"ajax"===c&&(f=r.split(/\s+/,2),r=f.shift(),m=f.shift())),d||("inline"===c?r?d=i(p(r)?r.replace(/.*(?=#[^\s]+$)/,""):r):g.isDom&&(d=s):"html"===c?d=r:c||r||!g.isDom||(c="inline",d=s)),i.extend(g,{href:r,type:c,content:d,title:l,selector:m}),e[n]=g}),a.opts=i.extend(!0,{},a.defaults,t),t.keys!==o&&(a.opts.keys=!!t.keys&&i.extend({},a.defaults.keys,t.keys)),a.group=e,a._start(a.opts.index)},cancel:function(){var e=a.coming;e&&!1===a.trigger("onCancel")||(a.hideLoading(),e&&(a.ajaxLoad&&a.ajaxLoad.abort(),a.ajaxLoad=null,a.imgPreload&&(a.imgPreload.onload=a.imgPreload.onerror=null),e.wrap&&e.wrap.stop(!0,!0).trigger("onReset").remove(),a.coming=null,a.current||a._afterZoomOut(e)))},close:function(e){a.cancel(),!1!==a.trigger("beforeClose")&&(a.unbindEvents(),a.isActive&&(a.isOpen&&e!==!0?(a.isOpen=a.isOpened=!1,a.isClosing=!0,i(".fancybox-item, .fancybox-nav").remove(),a.wrap.stop(!0,!0).removeClass("fancybox-opened"),a.transitions[a.current.closeMethod]()):(i(".fancybox-wrap").stop(!0).trigger("onReset").remove(),a._afterZoomOut())))},play:function(e){var t=function(){clearTimeout(a.player.timer)},i=function(){t(),a.current&&a.player.isActive&&(a.player.timer=setTimeout(a.next,a.current.playSpeed))},o=function(){t(),r.unbind(".player"),a.player.isActive=!1,a.trigger("onPlayEnd")},n=function(){a.current&&(a.current.loop||a.current.index<a.group.length-1)&&(a.player.isActive=!0,r.bind({"onCancel.player beforeClose.player":o,"onUpdate.player":i,"beforeLoad.player":t}),i(),a.trigger("onPlayStart"))};e===!0||!a.player.isActive&&e!==!1?n():o()},next:function(e){var t=a.current;t&&(p(e)||(e=t.direction.next),a.jumpto(t.index+1,e,"next"))},prev:function(e){var t=a.current;t&&(p(e)||(e=t.direction.prev),a.jumpto(t.index-1,e,"prev"))},jumpto:function(e,t,i){var n=a.current;n&&(e=m(e),a.direction=t||n.direction[e>=n.index?"next":"prev"],a.router=i||"jumpto",n.loop&&(e<0&&(e=n.group.length+e%n.group.length),e%=n.group.length),n.group[e]!==o&&(a.cancel(),a._start(e)))},reposition:function(e,t){var o,n=a.current,s=n?n.wrap:null;s&&(o=a._getPosition(t),e&&"scroll"===e.type?(delete o.position,s.stop(!0,!0).animate(o,200)):(s.css(o),n.pos=i.extend({},n.dim,o)))},update:function(e){var t=e&&e.originalEvent&&e.originalEvent.type,i=!t||"orientationchange"===t;i&&(clearTimeout(d),d=null),a.isOpen&&!d&&(d=setTimeout(function(){var o=a.current;o&&!a.isClosing&&(a.wrap.removeClass("fancybox-tmp"),(i||"load"===t||"resize"===t&&o.autoResize)&&a._setDimension(),"scroll"===t&&o.canShrink||a.reposition(e),a.trigger("onUpdate"),d=null)},i&&!c?0:300))},toggle:function(e){a.isOpen&&(a.current.fitToView="boolean"===i.type(e)?e:!a.current.fitToView,c&&(a.wrap.removeAttr("style").addClass("fancybox-tmp"),a.trigger("onUpdate")),a.update())},hideLoading:function(){r.unbind(".loading"),i("#fancybox-loading").remove()},showLoading:function(){var e,t;a.hideLoading(),e=i(a.opts.tpl.loading).click(a.cancel).appendTo("body"),r.bind("keydown.loading",function(e){27===(e.which||e.keyCode)&&(e.preventDefault(),a.cancel())}),a.defaults.fixed||(t=a.getViewport(),e.css({position:"absolute",top:.5*t.h+t.y,left:.5*t.w+t.x})),a.trigger("onLoading")},getViewport:function(){var t=a.current&&a.current.locked||!1,i={x:s.scrollLeft(),y:s.scrollTop()};return t&&t.length?(i.w=t[0].clientWidth,i.h=t[0].clientHeight):(i.w=c&&e.innerWidth?e.innerWidth:s.width(),i.h=c&&e.innerHeight?e.innerHeight:s.height()),i},unbindEvents:function(){a.wrap&&u(a.wrap)&&a.wrap.unbind(".fb"),r.unbind(".fb"),s.unbind(".fb")},bindEvents:function(){var e,t=a.current;t&&(s.bind("orientationchange.fb"+(c?"":" resize.fb")+(t.autoCenter&&!t.locked?" scroll.fb":""),a.update),e=t.keys,e&&r.bind("keydown.fb",function(n){var s=n.which||n.keyCode,r=n.target||n.srcElement;return(27!==s||!a.coming)&&void(n.ctrlKey||n.altKey||n.shiftKey||n.metaKey||r&&(r.type||i(r).is("[contenteditable]"))||i.each(e,function(e,r){return t.group.length>1&&r[s]!==o?(a[e](r[s]),n.preventDefault(),!1):i.inArray(s,r)>-1?(a[e](),n.preventDefault(),!1):void 0}))}),i.fn.mousewheel&&t.mouseWheel&&a.wrap.bind("mousewheel.fb",function(e,o,n,s){for(var r=e.target||null,l=i(r),d=!1;l.length&&!(d||l.is(".fancybox-skin")||l.is(".fancybox-wrap"));)d=f(l[0]),l=i(l).parent();0===o||d||a.group.length>1&&!t.canShrink&&(s>0||n>0?a.prev(s>0?"down":"left"):(s<0||n<0)&&a.next(s<0?"up":"right"),e.preventDefault())}))},trigger:function(e,t){var o,n=t||a.coming||a.current;if(n){if(i.isFunction(n[e])&&(o=n[e].apply(n,Array.prototype.slice.call(arguments,1))),o===!1)return!1;n.helpers&&i.each(n.helpers,function(t,o){o&&a.helpers[t]&&i.isFunction(a.helpers[t][e])&&a.helpers[t][e](i.extend(!0,{},a.helpers[t].defaults,o),n)})}r.trigger(e)},isImage:function(e){return p(e)&&e.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)},isSWF:function(e){return p(e)&&e.match(/\.(swf)((\?|#).*)?$/i)},_start:function(e){var t,o,n,s,r,l={};if(e=m(e),t=a.group[e]||null,!t)return!1;if(l=i.extend(!0,{},a.opts,t),s=l.margin,r=l.padding,"number"===i.type(s)&&(l.margin=[s,s,s,s]),"number"===i.type(r)&&(l.padding=[r,r,r,r]),l.modal&&i.extend(!0,l,{closeBtn:!1,closeClick:!1,nextClick:!1,arrows:!1,mouseWheel:!1,keys:null,helpers:{overlay:{closeClick:!1}}}),l.autoSize&&(l.autoWidth=l.autoHeight=!0),"auto"===l.width&&(l.autoWidth=!0),"auto"===l.height&&(l.autoHeight=!0),l.group=a.group,l.index=e,a.coming=l,!1===a.trigger("beforeLoad"))return void(a.coming=null);if(n=l.type,o=l.href,!n)return a.coming=null,!(!a.current||!a.router||"jumpto"===a.router)&&(a.current.index=e,a[a.router](a.direction));if(a.isActive=!0,"image"!==n&&"swf"!==n||(l.autoHeight=l.autoWidth=!1,l.scrolling="visible"),"image"===n&&(l.aspectRatio=!0),"iframe"===n&&c&&(l.scrolling="scroll"),l.wrap=i(l.tpl.wrap).addClass("fancybox-"+(c?"mobile":"desktop")+" fancybox-type-"+n+" fancybox-tmp "+l.wrapCSS).appendTo(l.parent||"body"),i.extend(l,{skin:i(".fancybox-skin",l.wrap),outer:i(".fancybox-outer",l.wrap),inner:i(".fancybox-inner",l.wrap)}),i.each(["Top","Right","Bottom","Left"],function(e,t){l.skin.css("padding"+t,g(l.padding[e]))}),a.trigger("onReady"),"inline"===n||"html"===n){if(!l.content||!l.content.length)return a._error("content")}else if(!o)return a._error("href");"image"===n?a._loadImage():"ajax"===n?a._loadAjax():"iframe"===n?a._loadIframe():a._afterLoad()},_error:function(e){i.extend(a.coming,{type:"html",autoWidth:!0,autoHeight:!0,minWidth:0,minHeight:0,scrolling:"no",hasError:e,content:a.coming.tpl.error}),a._afterLoad()},_loadImage:function(){var e=a.imgPreload=new Image;e.onload=function(){this.onload=this.onerror=null,a.coming.width=this.width/a.opts.pixelRatio,a.coming.height=this.height/a.opts.pixelRatio,a._afterLoad()},e.onerror=function(){this.onload=this.onerror=null,a._error("image")},e.src=a.coming.href,e.complete!==!0&&a.showLoading()},_loadAjax:function(){var e=a.coming;a.showLoading(),a.ajaxLoad=i.ajax(i.extend({},e.ajax,{url:e.href,error:function(e,t){a.coming&&"abort"!==t?a._error("ajax",e):a.hideLoading()},success:function(t,i){"success"===i&&(e.content=t,a._afterLoad())}}))},_loadIframe:function(){var e=a.coming,t=i(e.tpl.iframe.replace(/\{rnd\}/g,(new Date).getTime())).attr("scrolling",c?"auto":e.iframe.scrolling).attr("src",e.href);i(e.wrap).bind("onReset",function(){try{i(this).find("iframe").hide().attr("src","//about:blank").end().empty()}catch(e){}}),e.iframe.preload&&(a.showLoading(),t.one("load",function(){i(this).data("ready",1),c||i(this).bind("load.fb",a.update),i(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show(),a._afterLoad()})),e.content=t.appendTo(e.inner),e.iframe.preload||a._afterLoad()},_preloadImages:function(){var e,t,i=a.group,o=a.current,n=i.length,s=o.preload?Math.min(o.preload,n-1):0;for(t=1;t<=s;t+=1)e=i[(o.index+t)%n],"image"===e.type&&e.href&&((new Image).src=e.href)},_afterLoad:function(){var e,t,o,n,s,r,l=a.coming,d=a.current,c="fancybox-placeholder";if(a.hideLoading(),l&&a.isActive!==!1){if(!1===a.trigger("afterLoad",l,d))return l.wrap.stop(!0).trigger("onReset").remove(),void(a.coming=null);switch(d&&(a.trigger("beforeChange",d),d.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove()),a.unbindEvents(),e=l,t=l.content,o=l.type,n=l.scrolling,i.extend(a,{wrap:e.wrap,skin:e.skin,outer:e.outer,inner:e.inner,current:e,previous:d}),s=e.href,o){case"inline":case"ajax":case"html":e.selector?t=i("<div>").html(t).find(e.selector):u(t)&&(t.data(c)||t.data(c,i('<div class="'+c+'"></div>').insertAfter(t).hide()),t=t.show().detach(),e.wrap.bind("onReset",function(){i(this).find(t).length&&t.hide().replaceAll(t.data(c)).data(c,!1)}));break;case"image":t=e.tpl.image.replace(/\{href\}/g,s);break;case"swf":t='<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="'+s+'"></param>',r="",i.each(e.swf,function(e,i){t+='<param name="'+e+'" value="'+i+'"></param>',r+=" "+e+'="'+i+'"'}),t+='<embed src="'+s+'" type="application/x-shockwave-flash" width="100%" height="100%"'+r+"></embed></object>"}u(t)&&t.parent().is(e.inner)||e.inner.append(t),a.trigger("beforeShow"),e.inner.css("overflow","yes"===n?"scroll":"no"===n?"hidden":n),a._setDimension(),a.reposition(),a.isOpen=!1,a.coming=null,a.bindEvents(),a.isOpened?d.prevMethod&&a.transitions[d.prevMethod]():i(".fancybox-wrap").not(e.wrap).stop(!0).trigger("onReset").remove(),a.transitions[a.isOpened?e.nextMethod:e.openMethod](),a._preloadImages()}},_setDimension:function(){var e,t,o,n,s,r,l,d,c,u,p,f,v,y,w,b=a.getViewport(),k=0,x=!1,C=!1,S=a.wrap,T=a.skin,$=a.inner,E=a.current,A=E.width,P=E.height,O=E.minWidth,M=E.minHeight,L=E.maxWidth,I=E.maxHeight,z=E.scrolling,H=E.scrollOutside?E.scrollbarWidth:0,j=E.margin,W=m(j[1]+j[3]),F=m(j[0]+j[2]);if(S.add(T).add($).width("auto").height("auto").removeClass("fancybox-tmp"),e=m(T.outerWidth(!0)-T.width()),t=m(T.outerHeight(!0)-T.height()),o=W+e,n=F+t,s=h(A)?(b.w-o)*m(A)/100:A,r=h(P)?(b.h-n)*m(P)/100:P,"iframe"===E.type){if(y=E.content,E.autoHeight&&y&&1===y.data("ready"))try{y[0].contentWindow.document.location&&($.width(s).height(9999),w=y.contents().find("body"),H&&w.css("overflow-x","hidden"),r=w.outerHeight(!0))}catch(R){}}else(E.autoWidth||E.autoHeight)&&($.addClass("fancybox-tmp"),E.autoWidth||$.width(s),E.autoHeight||$.height(r),E.autoWidth&&(s=$.width()),E.autoHeight&&(r=$.height()),$.removeClass("fancybox-tmp"));if(A=m(s),P=m(r),c=s/r,O=m(h(O)?m(O,"w")-o:O),L=m(h(L)?m(L,"w")-o:L),M=m(h(M)?m(M,"h")-n:M),I=m(h(I)?m(I,"h")-n:I),l=L,d=I,E.fitToView&&(L=Math.min(b.w-o,L),I=Math.min(b.h-n,I)),f=b.w-W,v=b.h-F,E.aspectRatio?(A>L&&(A=L,P=m(A/c)),P>I&&(P=I,A=m(P*c)),A<O&&(A=O,P=m(A/c)),P<M&&(P=M,A=m(P*c))):(A=Math.max(O,Math.min(A,L)),E.autoHeight&&"iframe"!==E.type&&($.width(A),P=$.height()),P=Math.max(M,Math.min(P,I))),E.fitToView)if($.width(A).height(P),S.width(A+e),u=S.width(),p=S.height(),E.aspectRatio)for(;(u>f||p>v)&&A>O&&P>M&&!(k++>19);)P=Math.max(M,Math.min(I,P-10)),A=m(P*c),A<O&&(A=O,P=m(A/c)),A>L&&(A=L,P=m(A/c)),$.width(A).height(P),S.width(A+e),u=S.width(),p=S.height();else A=Math.max(O,Math.min(A,A-(u-f))),P=Math.max(M,Math.min(P,P-(p-v)));H&&"auto"===z&&P<r&&A+e+H<f&&(A+=H),$.width(A).height(P),S.width(A+e),u=S.width(),p=S.height(),x=(u>f||p>v)&&A>O&&P>M,C=E.aspectRatio?A<l&&P<d&&A<s&&P<r:(A<l||P<d)&&(A<s||P<r),i.extend(E,{dim:{width:g(u),height:g(p)},origWidth:s,origHeight:r,canShrink:x,canExpand:C,wPadding:e,hPadding:t,wrapSpace:p-T.outerHeight(!0),skinSpace:T.height()-P}),!y&&E.autoHeight&&P>M&&P<I&&!C&&$.height("auto")},_getPosition:function(e){var t=a.current,i=a.getViewport(),o=t.margin,n=a.wrap.width()+o[1]+o[3],s=a.wrap.height()+o[0]+o[2],r={position:"absolute",top:o[0],left:o[3]};return t.autoCenter&&t.fixed&&!e&&s<=i.h&&n<=i.w?r.position="fixed":t.locked||(r.top+=i.y,r.left+=i.x),r.top=g(Math.max(r.top,r.top+(i.h-s)*t.topRatio)),r.left=g(Math.max(r.left,r.left+(i.w-n)*t.leftRatio)),r},_afterZoomIn:function(){var e=a.current;e&&(a.isOpen=a.isOpened=!0,a.wrap.css("overflow","visible").addClass("fancybox-opened").hide().show(0),a.update(),(e.closeClick||e.nextClick&&a.group.length>1)&&a.inner.css("cursor","pointer").bind("click.fb",function(t){i(t.target).is("a")||i(t.target).parent().is("a")||(t.preventDefault(),a[e.closeClick?"close":"next"]())}),e.closeBtn&&i(e.tpl.closeBtn).appendTo(a.skin).bind("click.fb",function(e){e.preventDefault(),a.close()}),e.arrows&&a.group.length>1&&((e.loop||e.index>0)&&i(e.tpl.prev).appendTo(a.outer).bind("click.fb",a.prev),(e.loop||e.index<a.group.length-1)&&i(e.tpl.next).appendTo(a.outer).bind("click.fb",a.next)),a.trigger("afterShow"),e.loop||e.index!==e.group.length-1?a.opts.autoPlay&&!a.player.isActive&&(a.opts.autoPlay=!1,a.play(!0)):a.play(!1))},_afterZoomOut:function(e){e=e||a.current,i(".fancybox-wrap").trigger("onReset").remove(),i.extend(a,{group:{},opts:{},router:!1,current:null,isActive:!1,isOpened:!1,isOpen:!1,isClosing:!1,wrap:null,skin:null,outer:null,inner:null}),a.trigger("afterClose",e)}}),a.transitions={getOrigPosition:function(){var e=a.current,t=e.element,i=e.orig,o={},n=50,s=50,r=e.hPadding,l=e.wPadding,d=a.getViewport();return!i&&e.isDom&&t.is(":visible")&&(i=t.find("img:first"),i.length||(i=t)),u(i)?(o=i.offset(),i.is("img")&&(n=i.outerWidth(),s=i.outerHeight())):(o.top=d.y+(d.h-s)*e.topRatio,o.left=d.x+(d.w-n)*e.leftRatio),("fixed"===a.wrap.css("position")||e.locked)&&(o.top-=d.y,o.left-=d.x),o={top:g(o.top-r*e.topRatio),left:g(o.left-l*e.leftRatio),width:g(n+l),height:g(s+r)}},step:function(e,t){var i,o,n,s=t.prop,r=a.current,l=r.wrapSpace,d=r.skinSpace;"width"!==s&&"height"!==s||(i=t.end===t.start?1:(e-t.start)/(t.end-t.start),a.isClosing&&(i=1-i),o="width"===s?r.wPadding:r.hPadding,n=e-o,a.skin[s](m("width"===s?n:n-l*i)),a.inner[s](m("width"===s?n:n-l*i-d*i)))},zoomIn:function(){var e=a.current,t=e.pos,o=e.openEffect,n="elastic"===o,s=i.extend({opacity:1},t);delete s.position,n?(t=this.getOrigPosition(),e.openOpacity&&(t.opacity=.1)):"fade"===o&&(t.opacity=.1),a.wrap.css(t).animate(s,{duration:"none"===o?0:e.openSpeed,easing:e.openEasing,step:n?this.step:null,complete:a._afterZoomIn})},zoomOut:function(){var e=a.current,t=e.closeEffect,i="elastic"===t,o={opacity:.1};i&&(o=this.getOrigPosition(),e.closeOpacity&&(o.opacity=.1)),a.wrap.animate(o,{duration:"none"===t?0:e.closeSpeed,easing:e.closeEasing,step:i?this.step:null,complete:a._afterZoomOut})},changeIn:function(){var e,t=a.current,i=t.nextEffect,o=t.pos,n={opacity:1},s=a.direction,r=200;o.opacity=.1,"elastic"===i&&(e="down"===s||"up"===s?"top":"left","down"===s||"right"===s?(o[e]=g(m(o[e])-r),n[e]="+="+r+"px"):(o[e]=g(m(o[e])+r),n[e]="-="+r+"px")),"none"===i?a._afterZoomIn():a.wrap.css(o).animate(n,{duration:t.nextSpeed,easing:t.nextEasing,complete:a._afterZoomIn})},changeOut:function(){var e=a.previous,t=e.prevEffect,o={opacity:.1},n=a.direction,s=200;"elastic"===t&&(o["down"===n||"up"===n?"top":"left"]=("up"===n||"left"===n?"-":"+")+"="+s+"px"),e.wrap.animate(o,{duration:"none"===t?0:e.prevSpeed,easing:e.prevEasing,complete:function(){i(this).trigger("onReset").remove()}})}},a.helpers.overlay={defaults:{closeClick:!0,speedOut:200,showEarly:!0,css:{},locked:!c,fixed:!0},overlay:null,fixed:!1,el:i("html"),create:function(e){var t;e=i.extend({},this.defaults,e),this.overlay&&this.close(),t=a.coming?a.coming.parent:e.parent,this.overlay=i('<div class="fancybox-overlay"></div>').appendTo(t&&t.length?t:"body"),this.fixed=!1,e.fixed&&a.defaults.fixed&&(this.overlay.addClass("fancybox-overlay-fixed"),this.fixed=!0)},open:function(e){var t=this;e=i.extend({},this.defaults,e),this.overlay?this.overlay.unbind(".overlay").width("auto").height("auto"):this.create(e),this.fixed||(s.bind("resize.overlay",i.proxy(this.update,this)),this.update()),e.closeClick&&this.overlay.bind("click.overlay",function(e){if(i(e.target).hasClass("fancybox-overlay"))return a.isActive?a.close():t.close(),!1}),this.overlay.css(e.css).show()},close:function(){s.unbind("resize.overlay"),this.el.hasClass("fancybox-lock")&&(i(".fancybox-margin").removeClass("fancybox-margin"),this.el.removeClass("fancybox-lock"),s.scrollTop(this.scrollV).scrollLeft(this.scrollH)),i(".fancybox-overlay").remove().hide(),i.extend(this,{overlay:null,fixed:!1})},update:function(){var e,i="100%";this.overlay.width(i).height("100%"),l?(e=Math.max(t.documentElement.offsetWidth,t.body.offsetWidth),r.width()>e&&(i=r.width())):r.width()>s.width()&&(i=r.width()),this.overlay.width(i).height(r.height())},onReady:function(e,t){var o=this.overlay;i(".fancybox-overlay").stop(!0,!0),o||this.create(e),e.locked&&this.fixed&&t.fixed&&(t.locked=this.overlay.append(t.wrap),t.fixed=!1),e.showEarly===!0&&this.beforeShow.apply(this,arguments)},beforeShow:function(e,t){t.locked&&!this.el.hasClass("fancybox-lock")&&(this.fixPosition!==!1&&i("*:not(object)").filter(function(){return"fixed"===i(this).css("position")&&!i(this).hasClass("fancybox-overlay")&&!i(this).hasClass("fancybox-wrap")}).addClass("fancybox-margin"),this.el.addClass("fancybox-margin"),this.scrollV=s.scrollTop(),this.scrollH=s.scrollLeft(),this.el.addClass("fancybox-lock"),s.scrollTop(this.scrollV).scrollLeft(this.scrollH)),this.open(e)},onUpdate:function(){this.fixed||this.update()},afterClose:function(e){this.overlay&&!a.coming&&this.overlay.fadeOut(e.speedOut,i.proxy(this.close,this))}},a.helpers.title={defaults:{type:"float",position:"bottom"},beforeShow:function(e){var t,o,n=a.current,s=n.title,r=e.type;if(i.isFunction(s)&&(s=s.call(n.element,n)),p(s)&&""!==i.trim(s)){switch(t=i('<div class="fancybox-title fancybox-title-'+r+'-wrap">'+s+"</div>"),r){case"inside":o=a.skin;break;case"outside":o=a.wrap;break;case"over":o=a.inner;break;default:o=a.skin,t.appendTo("body"),l&&t.width(t.width()),t.wrapInner('<span class="child"></span>'),a.current.margin[2]+=Math.abs(m(t.css("margin-bottom")))}t["top"===e.position?"prependTo":"appendTo"](o)}}},i.fn.fancybox=function(e){var t,o=i(this),n=this.selector||"",s=function(s){var r,l,d=i(this).blur(),c=t;s.ctrlKey||s.altKey||s.shiftKey||s.metaKey||d.is(".fancybox-wrap")||(r=e.groupAttr||"data-fancybox-group",l=d.attr(r),l||(r="rel",l=d.get(0)[r]),l&&""!==l&&"nofollow"!==l&&(d=n.length?i(n):o,d=d.filter("["+r+'="'+l+'"]'),c=d.index(this)),e.index=c,a.open(d,e)!==!1&&s.preventDefault())};return e=e||{},t=e.index||0,n&&e.live!==!1?r.undelegate(n,"click.fb-start").delegate(n+":not('.fancybox-item, .fancybox-nav')","click.fb-start",s):o.unbind("click.fb-start").bind("click.fb-start",s),this.filter("[data-fancybox-start=1]").trigger("click"),this},r.ready(function(){var t,s;i.scrollbarWidth===o&&(i.scrollbarWidth=function(){var e=i('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),t=e.children(),o=t.innerWidth()-t.height(99).innerWidth();return e.remove(),o}),i.support.fixedPosition===o&&(i.support.fixedPosition=function(){var e=i('<div style="position:fixed;top:20px;"></div>').appendTo("body"),t=20===e[0].offsetTop||15===e[0].offsetTop;return e.remove(),t}()),i.extend(a.defaults,{scrollbarWidth:i.scrollbarWidth(),fixed:i.support.fixedPosition,parent:i("body")}),t=i(e).width(),n.addClass("fancybox-lock-test"),s=i(e).width(),n.removeClass("fancybox-lock-test"),i("<style type='text/css'>.fancybox-margin{margin-right:"+(s-t)+"px;}</style>").appendTo("head")})}(window,document,jQuery),function(e){"use strict";var t=e.fancybox,i=function(t,i,o){return o=o||"","object"===e.type(o)&&(o=e.param(o,!0)),e.each(i,function(e,i){t=t.replace("$"+e,i||"")}),o.length&&(t+=(t.indexOf("?")>0?"&":"?")+o),t};t.helpers.media={defaults:{youtube:{matcher:/(youtube\.com|youtu\.be|youtube-nocookie\.com)\/(watch\?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*)).*/i,params:{autoplay:1,autohide:1,fs:1,rel:0,hd:1,wmode:"opaque",enablejsapi:1,ps:"docs",controls:1},type:"iframe",url:"//www.youtube.com/embed/$3"
},vimeo:{matcher:/(?:vimeo(?:pro)?.com)\/(?:[^\d]+)?(\d+)(?:.*)/,params:{autoplay:1,hd:1,show_title:1,show_byline:1,show_portrait:0,fullscreen:1},type:"iframe",url:"//player.vimeo.com/video/$1"},metacafe:{matcher:/metacafe.com\/(?:watch|fplayer)\/([\w\-]{1,10})/,params:{autoPlay:"yes"},type:"swf",url:function(t,i,o){return o.swf.flashVars="playerVars="+e.param(i,!0),"//www.metacafe.com/fplayer/"+t[1]+"/.swf"}},dailymotion:{matcher:/dailymotion.com\/video\/(.*)\/?(.*)/,params:{additionalInfos:0,autoStart:1},type:"swf",url:"//www.dailymotion.com/swf/video/$1"},twitvid:{matcher:/twitvid\.com\/([a-zA-Z0-9_\-\?\=]+)/i,params:{autoplay:0},type:"iframe",url:"//www.twitvid.com/embed.php?guid=$1"},twitpic:{matcher:/twitpic\.com\/(?!(?:place|photos|events)\/)([a-zA-Z0-9\?\=\-]+)/i,type:"image",url:"//twitpic.com/show/full/$1/"},instagram:{matcher:/(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,type:"image",url:"//$1/p/$2/media/?size=l"},google_maps:{matcher:/maps\.google\.([a-z]{2,3}(\.[a-z]{2})?)\/(\?ll=|maps\?)(.*)/i,type:"iframe",url:function(e){return"//maps.google."+e[1]+"/"+e[3]+e[4]+"&output="+(e[4].indexOf("layer=c")>0?"svembed":"embed")}}},beforeLoad:function(t,o){var n,s,r,a,l=o.href||"",d=!1;for(n in t)if(t.hasOwnProperty(n)&&(s=t[n],r=l.match(s.matcher))){d=s.type,a=e.extend(!0,{},s.params,o[n]||(e.isPlainObject(t[n])?t[n].params:null)),l="function"===e.type(s.url)?s.url.call(this,r,a,o):i(s.url,r,a);break}d&&(o.href=l,o.type=d,o.autoHeight=!1)}}}(jQuery);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                top: 50%;
  -webkit-transform: translate(50%, -50%);
  -ms-transform: translate(50%, -50%);
  transform: translate(50%, -50%);
}
.vc_general.vc_cta3.vc_cta3-icons-on-border.vc_cta3-icons-right.vc_cta3-icon-size-xs {
  margin-right: 17px;
}
.vc_general.vc_cta3.vc_cta3-icons-on-border.vc_cta3-icons-right.vc_cta3-icon-size-xs .vc_cta3_content-container {
  padding-right: 0;
}
.vc_general.vc_cta3.vc_cta3-icons-on-border.vc_cta3-icons-right.vc_cta3-icon-size-xs.vc_cta3-icons-in-box .vc_cta3_content-container {
  padding-right: 7px;
}
.vc_general.vc_cta3.vc_cta3-icons-on-border.vc_cta3-icons-right.vc_cta3-icon-size-sm {
  margin-right: 22px;
}
.vc_general.vc_cta3.vc_cta3-icons-on-border.vc_cta3-icons-right.vc_cta3-icon-size-sm .vc_cta3_content-container {
  padding-right: 7px;
}
.vc_general.vc_cta3.vc_cta3-icons-on-border.vc_cta3-icons-right.vc_cta3-icon-size-sm.vc_cta3-icons-in-box .vc_cta3_content-container {
  padding-right: 14px;
}
.vc_general.vc_cta3.vc_cta3-icons-on-border.vc_cta3-icons-right.vc_cta3-icon-size-md {
  margin-right: 28px;
}
.vc_general.vc_cta3.vc_cta3-icons-on-border.vc_cta3-icons-right.vc_cta3-icon-size-md .vc_cta3_content-container {
  padding-right: 14px;
}
.vc_general.vc_cta3.vc_cta3-icons-on-border.vc_cta3-icons-right.vc_cta3-icon-size-md.vc_cta3-icons-in-box .vc_cta3_content-container {
  padding-right: 21px;
}
.vc_general.vc_cta3.vc_cta3-icons-on-border.vc_cta3-icons-right.vc_cta3-icon-size-lg {
  margin-right: 35px;
}
.vc_general.vc_cta3.vc_cta3-icons-on-border.vc_cta3-icons-right.vc_cta3-icon-size-lg .vc_cta3_content-container {
  padding-right: 21px;
}
.vc_general.vc_cta3.vc_cta3-icons-on-border.vc_cta3-icons-right.vc_cta3-icon-size-lg.vc_cta3-icons-in-box .vc_cta3_content-container {
  padding-right: 28px;
}
.vc_general.vc_cta3.vc_cta3-icons-on-border.vc_cta3-icons-right.vc_cta3-icon-size-xl {
  margin-right: 50px;
}
.vc_general.vc_cta3.vc_cta3-icons-on-border.vc_cta3-icons-right.vc_cta3-icon-size-xl .vc_cta3_content-container {
  padding-right: 28px;
}
.vc_general.vc_cta3.vc_cta3-icons-on-border.vc_cta3-icons-right.vc_cta3-icon-size-xl.vc_cta3-icons-in-box .vc_cta3_content-container {
  padding-right: 35px;
}
.vc_general.vc_cta3.vc_cta3-icons-on-border.vc_cta3-icons-left .vc_cta3-icons {
  left: 0;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.vc_general.vc_cta3.vc_cta3-icons-on-border.vc_cta3-icons-left.vc_cta3-icon-size-xs {
  margin-left: 17px;
}
.vc_general.vc_cta3.vc_cta3-icons-on-border.vc_cta3-icons-left.vc_cta3-icon-size-xs .vc_cta3_content-container {
  padding-left: 0;
}
.vc_general.vc_cta3.vc_cta3-icons-on-border.vc_cta3-icons-left.vc_cta3-icon-size-xs.vc_cta3-icons-in-box .vc_cta3_content-container {
  padding-left: 7px;
}
.vc_general.vc_cta3.vc_cta3-icons-on-border.vc_cta3-icons-left.vc_cta3-icon-size-sm {
  margin-left: 22px;
}
.vc_general.vc_cta3.vc_cta3-icons-on-border.vc_cta3-icons-left.vc_cta3-icon-size-sm .vc_cta3_content-container {
  padding-left: 7px;
}
.vc_general.vc_cta3.vc_cta3-icons-on-border.vc_cta3-icons-left.vc_cta3-icon-size-sm.vc_cta3-icons-in-box .vc_cta3_content-container {
  padding-left: 14px;
}
.vc_general.vc_cta3.vc_cta3-icons-on-border.vc_cta3-icons-left.vc_cta3-icon-size-md {
  margin-left: 28px;
}
.vc_general.vc_cta3.vc_cta3-icons-on-border.vc_cta3-icons-left.vc_cta3-icon-size-md .vc_cta3_content-container {
  padding-left: 14px;
}
.vc_general.vc_cta3.vc_cta3-icons-on-border.vc_cta3-icons-left.vc_cta3-icon-size-md.vc_cta3-icons-in-box .vc_cta3_content-container {
  padding-left: 21px;
}
.vc_general.vc_cta3.vc_cta3-icons-on-border.vc_cta3-icons-left.vc_cta3-icon-size-lg {
  margin-left: 35px;
}
.vc_general.vc_cta3.vc_cta3-icons-on-border.vc_cta3-icons-left.vc_cta3-icon-size-lg .vc_cta3_content-container {
  padding-left: 21px;
}
.vc_general.vc_cta3.vc_cta3-icons-on-border.vc_cta3-icons-left.vc_cta3-icon-size-lg.vc_cta3-icons-in-box .vc_cta3_content-container {
  padding-left: 28px;
}
.vc_general.vc_cta3.vc_cta3-icons-on-border.vc_cta3-icons-left.vc_cta3-icon-size-xl {
  margin-left: 50px;
}
.vc_general.vc_cta3.vc_cta3-icons-on-border.vc_cta3-icons-left.vc_cta3-icon-size-xl .vc_cta3_content-container {
  padding-left: 28px;
}
.vc_general.vc_cta3.vc_cta3-icons-on-border.vc_cta3-icons-left.vc_cta3-icon-size-xl.vc_cta3-icons-in-box .vc_cta3_content-container {
  padding-left: 35px;
}
.vc_general.vc_cta3.vc_cta3-icons-on-border.vc_cta3-icons-top .vc_cta3-icons {
  left: 50%;
  top: 0;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.vc_general.vc_cta3.vc_cta3-icons-on-border.vc_cta3-icons-top.vc_cta3-icon-size-xs {
  margin-top: 17px;
}
.vc_general.vc_cta3.vc_cta3-icons-on-border.vc_cta3-icons-top.vc_cta3-icon-size-xs .vc_cta3_content-container {
  padding-top: 0;
}
.vc_general.vc_cta3.vc_cta3-icons-on-border.vc_cta3-icons-top.vc_cta3-icon-size-xs.vc_cta3-icons-in-box .vc_cta3_content-container {
  padding-top: 7px;
}
.vc_general.vc_cta3.vc_cta3-icons-on-border.vc_cta3-icons-top.vc_cta3-icon-size-sm {
  margin-top: 22px;
}
.vc_general.vc_cta3.vc_cta3-icons-on-border.vc_cta3-icons-top.vc_cta3-icon-size-sm .vc_cta3_content-container {
  padding-top: 7px;
}
.vc_general.vc_cta3.vc_cta3-icons-on-border.vc_cta3-icons-top.vc_cta3-icon-size-sm.vc_cta3-icons-in-box .vc_cta3_content-container {
  padding-top: 14px;
}
.vc_general.vc_cta3.vc_cta3-icons-on-border.vc_cta3-icons-top.vc_cta3-icon-size-md {
  margin-top: 28px;
}
.vc_general.vc_cta3.vc_cta3-icons-on-border.vc_cta3-icons-top.vc_cta3-icon-size-md .vc_cta3_content-container {
  padding-top: 14px;
}
.vc_general.vc_cta3.vc_cta3-icons-on-border.vc_cta3-icons-top.vc_cta3-icon-size-md.vc_cta3-icons-in-box .vc_cta3_content-container {
  padding-top: 21px;
}
.vc_general.vc_cta3.vc_cta3-icons-on-border.vc_cta3-icons-top.vc_cta3-icon-size-lg {
  margin-top: 35px;
}
.vc_general.vc_cta3.vc_cta3-icons-on-border.vc_cta3-icons-top.vc_cta3-icon-size-lg .vc_cta3_content-container {
  padding-top: 21px;
}
.vc_general.vc_cta3.vc_cta3-icons-on-border.vc_cta3-icons-top.vc_cta3-icon-size-lg.vc_cta3-icons-in-box .vc_cta3_content-container {
  padding-top: 28px;
}
.vc_general.vc_cta3.vc_cta3-icons-on-border.vc_cta3-icons-top.vc_cta3-icon-size-xl {
  margin-top: 50px;
}
.vc_general.vc_cta3.vc_cta3-icons-on-border.vc_cta3-icons-top.vc_cta3-icon-size-xl .vc_cta3_content-container {
  padding-top: 28px;
}
.vc_general.vc_cta3.vc_cta3-icons-on-border.vc_cta3-icons-top.vc_cta3-icon-size-xl.vc_cta3-icons-in-box .vc_cta3_content-container {
  padding-top: 35px;
}
.vc_general.vc_cta3.vc_cta3-icons-on-border.vc_cta3-icons-bottom .vc_cta3-icons {
  left: 50%;
  bottom: 0;
  -webkit-transform: translate(-50%, 50%);
  -ms-transform: translate(-50%, 50%);
  transform: translate(-50%, 50%);
}
.vc_general.vc_cta3.vc_cta3-icons-on-border.vc_cta3-icons-bottom.vc_cta3-icon-size-xs {
  margin-bottom: 17px;
}
.vc_general.vc_cta3.vc_cta3-icons-on-border.vc_cta3-icons-bottom.vc_cta3-icon-size-xs .vc_cta3_content-container {
  padding-bottom: 0;
}
.vc_general.vc_cta3.vc_cta3-icons-on-border.vc_cta3-icons-bottom.vc_cta3-icon-size-xs.vc_cta3-icons-in-box .vc_cta3_content-container {
  padding-bottom: 7px;
}
.vc_general.vc_cta3.vc_cta3-icons-on-border.vc_cta3-icons-bottom.vc_cta3-icon-size-sm {
  margin-bottom: 22px;
}
.vc_general.vc_cta3.vc_cta3-icons-on-border.vc_cta3-icons-bottom.vc_cta3-icon-size-sm .vc_cta3_content-container {
  padding-bottom: 7px;
}
.vc_general.vc_cta3.vc_cta3-icons-on-border.vc_cta3-icons-bottom.vc_cta3-icon-size-sm.vc_cta3-icons-in-box .vc_cta3_content-container {
  padding-bottom: 14px;
}
.vc_general.vc_cta3.vc_cta3-icons-on-border.vc_cta3-icons-bottom.vc_cta3-icon-size-md {
  margin-bottom: 28px;
}
.vc_general.vc_cta3.vc_cta3-icons-on-border.vc_cta3-icons-bottom.vc_cta3-icon-size-md .vc_cta3_content-container {
  padding-bottom: 14px;
}
.vc_general.vc_cta3.vc_cta3-icons-on-border.vc_cta3-icons-bottom.vc_cta3-icon-size-md.vc_cta3-icons-in-box .vc_cta3_content-container {
  padding-bottom: 21px;
}
.vc_general.vc_cta3.vc_cta3-icons-on-border.vc_cta3-icons-bottom.vc_cta3-icon-size-lg {
  margin-bottom: 35px;
}
.vc_general.vc_cta3.vc_cta3-icons-on-border.vc_cta3-icons-bottom.vc_cta3-icon-size-lg .vc_cta3_content-container {
  padding-bottom: 21px;
}
.vc_general.vc_cta3.vc_cta3-icons-on-border.vc_cta3-icons-bottom.vc_cta3-icon-size-lg.vc_cta3-icons-in-box .vc_cta3_content-container {
  padding-bottom: 28px;
}
.vc_general.vc_cta3.vc_cta3-icons-on-border.vc_cta3-icons-bottom.vc_cta3-icon-size-xl {
  margin-bottom: 50px;
}
.vc_general.vc_cta3.vc_cta3-icons-on-border.vc_cta3-icons-bottom.vc_cta3-icon-size-xl .vc_cta3_content-container {
  padding-bottom: 28px;
}
.vc_general.vc_cta3.vc_cta3-icons-on-border.vc_cta3-icons-bottom.vc_cta3-icon-size-xl.vc_cta3-icons-in-box .vc_cta3_content-container {
  padding-bottom: 35px;
}
.vc_general.vc_cta3.vc_cta3-actions-top .vc_cta3-content {
  margin-top: 1em;
}
.vc_general.vc_cta3.vc_cta3-actions-bottom .vc_cta3-content {
  margin-bottom: 1em;
}
@media (min-width: 768px) {
  .vc_general.vc_cta3.vc_cta3-actions-left .vc_cta3-actions {
    display: table-cell;
    max-width: 30%;
  }
  .vc_general.vc_cta3.vc_cta3-actions-left .vc_cta3-content {
    padding-left: 28px;
    display: table-cell;
  }
  .vc_general.vc_cta3.vc_cta3-actions-right .vc_cta3-actions {
    display: table-cell;
    max-width: 30%;
  }
  .vc_general.vc_cta3.vc_cta3-actions-right .vc_cta3-content {
    padding-right: 28px;
    display: table-cell;
  }
}
.vc_general.vc_cta3.vc_cta3-style-classic {
  border-color: #eaeaea;
  background-color: #f7f7f7;
}
.vc_general.vc_cta3.vc_cta3-style-classic:not(.vc_cta3-color-classic) .vc_cta3-content-header h2,
.vc_general.vc_cta3.vc_cta3-style-classic:not(.vc_cta3-color-classic) .vc_cta3-content-header h4 {
  color: inherit;
}
.vc_general.vc_cta3.vc_cta3-style-flat .vc_cta3-content-header h2,
.vc_general.vc_cta3.vc_cta3-style-flat .vc_cta3-content-header h4 {
  color: inherit;
}
.vc_general.vc_cta3.vc_cta3-style-outline {
  border-width: 3px;
}
.vc_general.vc_cta3.vc_cta3-style-outline:not(.vc_cta3-color-classic) .vc_cta3-content-header h2,
.vc_general.vc_cta3.vc_cta3-style-outline:not(.vc_cta3-color-classic) .vc_cta3-content-header h4 {
  color: inherit;
}
.vc_general.vc_cta3.vc_cta3-style-3d .vc_cta3-content-header h2,
.vc_general.vc_cta3.vc_cta3-style-3d .vc_cta3-content-header h4 {
  color: inherit;
}
.vc_general.vc_cta3.vc_cta3-style-custom {
  border-color: #eaeaea;
  background-color: #f7f7f7;
}
.vc_general.vc_cta3.vc_cta3-shape-square {
  border-radius: 0;
}
.vc_general.vc_cta3.vc_cta3-shape-rounded {
  border-radius: 5px;
}
.vc_general.vc_cta3.vc_cta3-shape-round {
  border-radius: 4em;
}
.vc_general.vc_cta3.vc_cta3-color-blue.vc_cta3-style-classic .vc_cta3-content-header {
  color: #5472D2;
}
.vc_general.vc_cta3.vc_cta3-color-blue.vc_cta3-style-flat {
  color: #c9d2f0;
  border-color: transparent;
  background-color: #5472D2;
}
.vc_general.vc_cta3.vc_cta3-color-blue.vc_cta3-style-flat .vc_cta3-content-header {
  color: #fff;
}
.vc_general.vc_cta3.vc_cta3-color-blue.vc_cta3-style-3d {
  box-shadow: 0 5px 0 #3253bc;
  color: #c9d2f0;
  border-color: transparent;
  background-color: #5472D2;
}
.vc_general.vc_cta3.vc_cta3-color-blue.vc_cta3-style-3d .vc_cta3-content-header {
  color: #fff;
}
.vc_general.vc_cta3.vc_cta3-color-blue.vc_cta3-style-outline {
  border-color: #5472D2;
  background-color: transparent;
}
.vc_general.vc_cta3.vc_cta3-color-blue.vc_cta3-style-outline .vc_cta3-content-header {
  color: #5472D2;
}
.vc_general.vc_cta3.vc_cta3-color-turquoise.vc_cta3-style-classic .vc_cta3-content-header {
  color: #00C1CF;
}
.vc_general.vc_cta3.vc_cta3-color-turquoise.vc_cta3-style-flat {
  color: #d3f5f1;
  border-color: transparent;
  background-color: #00C1CF;
}
.vc_general.vc_cta3.vc_cta3-color-turquoise.vc_cta3-style-flat .vc_cta3-content-header {
  color: #fff;
}
.vc_general.vc_cta3.vc_cta3-color-turquoise.vc_cta3-style-3d {
  box-shadow: 0 5px 0 #008d97;
  color: #d3f5f1;
  border-color: transparent;
  background-color: #00C1CF;
}
.vc_general.vc_cta3.vc_cta3-color-turquoise.vc_cta3-style-3d .vc_cta3-content-header {
  color: #fff;
}
.vc_general.vc_cta3.vc_cta3-color-turquoise.vc_cta3-style-outline {
  border-color: #00C1CF;
  background-color: transparent;
}
.vc_general.vc_cta3.vc_cta3-color-turquoise.vc_cta3-style-outline .vc_cta3-content-header {
  color: #00C1CF;
}
.vc_general.vc_cta3.vc_cta3-color-pink.vc_cta3-style-classic .vc_cta3-content-header {
  color: #FE6C61;
}
.vc_general.vc_cta3.vc_cta3-color-pink.vc_cta3-style-flat {
  color: #fcdbd7;
  border-color: transparent;
  background-color: #FE6C61;
}
.vc_general.vc_cta3.vc_cta3-color-pink.vc_cta3-style-flat .vc_cta3-content-header {
  color: #fff;
}
.vc_general.vc_cta3.vc_cta3-color-pink.vc_cta3-style-3d {
  box-shadow: 0 5px 0 #fe3829;
  color: #fcdbd7;
  border-color: transparent;
  background-color: #FE6C61;
}
.vc_general.vc_cta3.vc_cta3-color-pink.vc_cta3-style-3d .vc_cta3-content-header {
  color: #fff;
}
.vc_general.vc_cta3.vc_cta3-color-pink.vc_cta3-style-outline {
  border-color: #FE6C61;
  background-color: transparent;
}
.vc_general.vc_cta3.vc_cta3-color-pink.vc_cta3-style-outline .vc_cta3-content-header {
  color: #FE6C61;
}
.vc_general.vc_cta3.vc_cta3-color-violet.vc_cta3-style-classic .vc_cta3-content-header {
  color: #8D6DC4;
}
.vc_general.vc_cta3.vc_cta3-color-violet.vc_cta3-style-flat {
  color: #e1d5f5;
  border-color: transparent;
  background-color: #8D6DC4;
}
.vc_general.vc_cta3.vc_cta3-color-violet.vc_cta3-style-flat .vc_cta3-content-header {
  color: #fff;
}
.vc_general.vc_cta3.vc_cta3-color-violet.vc_cta3-style-3d {
  box-shadow: 0 5px 0 #6e48b1;
  color: #e1d5f5;
  border-color: transparent;
  background-color: #8D6DC4;
}
.vc_general.vc_cta3.vc_cta3-color-violet.vc_cta3-style-3d .vc_cta3-content-header {
  color: #fff;
}
.vc_general.vc_cta3.vc_cta3-color-violet.vc_cta3-style-outline {
  border-color: #8D6DC4;
  background-color: transparent;
}
.vc_general.vc_cta3.vc_cta3-color-violet.vc_cta3-style-outline .vc_cta3-content-header {
  color: #8D6DC4;
}
.vc_general.vc_cta3.vc_cta3-color-peacoc.vc_cta3-style-classic .vc_cta3-content-header {
  color: #4CADC9;
}
.vc_general.vc_cta3.vc_cta3-color-peacoc.vc_cta3-style-flat {
  color: #d0edf5;
  border-color: transparent;
  background-color: #4CADC9;
}
.vc_general.vc_cta3.vc_cta3-color-peacoc.vc_cta3-style-flat .vc_cta3-content-header {
  color: #fff;
}
.vc_general.vc_cta3.vc_cta3-color-peacoc.vc_cta3-style-3d {
  box-shadow: 0 5px 0 #338faa;
  color: #d0edf5;
  border-color: transparent;
  background-color: #4CADC9;
}
.vc_general.vc_cta3.vc_cta3-color-peacoc.vc_cta3-style-3d .vc_cta3-content-header {
  color: #fff;
}
.vc_general.vc_cta3.vc_cta3-color-peacoc.vc_cta3-style-outline {
  border-color: #4CADC9;
  background-color: transparent;
}
.vc_general.vc_cta3.vc_cta3-color-peacoc.vc_cta3-style-outline .vc_cta3-content-header {
  color: #4CADC9;
}
.vc_general.vc_cta3.vc_cta3-color-chino.vc_cta3-style-classic .vc_cta3-content-header {
  color: #CEC2AB;
}
.vc_general.vc_cta3.vc_cta3-color-chino.vc_cta3-style-flat {
  color: #f7f3eb;
  border-color: transparent;
  background-color: #CEC2AB;
}
.vc_general.vc_cta3.vc_cta3-color-chino.vc_cta3-style-flat .vc_cta3-content-header {
  color: #fff;
}
.vc_general.vc_cta3.vc_cta3-color-chino.vc_cta3-style-3d {
  box-shadow: 0 5px 0 #b9a888;
  color: #f7f3eb;
  border-color: transparent;
  background-color: #CEC2AB;
}
.vc_general.vc_cta3.vc_cta3-color-chino.vc_cta3-style-3d .vc_cta3-content-header {
  color: #fff;
}
.vc_general.vc_cta3.vc_cta3-color-chino.vc_cta3-style-outline {
  border-color: #CEC2AB;
  background-color: transparent;
}
.vc_general.vc_cta3.vc_cta3-color-chino.vc_cta3-style-outline .vc_cta3-content-header {
  color: #CEC2AB;
}
.vc_general.vc_cta3.vc_cta3-color-mulled-wine.vc_cta3-style-classic .vc_cta3-content-header {
  color: #50485B;
}
.vc_general.vc_cta3.vc_cta3-color-mulled-wine.vc_cta3-style-flat {
  color: #e2ddeb;
  border-color: transparent;
  background-color: #50485B;
}
.vc_general.vc_cta3.vc_cta3-color-mulled-wine.vc_cta3-style-flat .vc_cta3-content-header {
  color: #fff;
}
.vc_general.vc_cta3.vc_cta3-color-mulled-wine.vc_cta3-style-3d {
  box-shadow: 0 5px 0 #342f3c;
  color: #e2ddeb;
  border-color: transparent;
  background-color: #50485B;
}
.vc_general.vc_cta3.vc_cta3-color-mulled-wine.vc_cta3-style-3d .vc_cta3-content-header {
  color: #fff;
}
.vc_general.vc_cta3.vc_cta3-color-mulled-wine.vc_cta3-style-outline {
  border-color: #50485B;
  background-color: transparent;
}
.vc_general.vc_cta3.vc_cta3-color-mulled-wine.vc_cta3-style-outline .vc_cta3-content-header {
  color: #50485B;
}
.vc_general.vc_cta3.vc_cta3-color-vista-blue.vc_cta3-style-classic .vc_cta3-content-header {
  color: #75D69C;
}
.vc_general.vc_cta3.vc_cta3-color-vista-blue.vc_cta3-style-flat {
  color: #e1f5e9;
  border-color: transparent;
  background-color: #75D69C;
}
.vc_general.vc_cta3.vc_cta3-color-vista-blue.vc_cta3-style-flat .vc_cta3-content-header {
  color: #fff;
}
.vc_general.vc_cta3.vc_cta3-color-vista-blue.vc_cta3-style-3d {
  box-shadow: 0 5px 0 #4ac97d;
  color: #e1f5e9;
  border-color: transparent;
  background-color: #75D69C;
}
.vc_general.vc_cta3.vc_cta3-color-vista-blue.vc_cta3-style-3d .vc_cta3-content-header {
  color: #fff;
}
.vc_general.vc_cta3.vc_cta3-color-vista-blue.vc_cta3-style-outline {
  border-color: #75D69C;
  background-color: transparent;
}
.vc_general.vc_cta3.vc_cta3-color-vista-blue.vc_cta3-style-outline .vc_cta3-content-header {
  color: #75D69C;
}
.vc_general.vc_cta3.vc_cta3-color-orange.vc_cta3-style-classic .vc_cta3-content-header {
  color: #F7BE68;
}
.vc_general.vc_cta3.vc_cta3-color-orange.vc_cta3-style-flat {
  color: #faf0e1;
  border-color: transparent;
  background-color: #F7BE68;
}
.vc_general.vc_cta3.vc_cta3-color-orange.vc_cta3-style-flat .vc_cta3-content-header {
  color: #fff;
}
.vc_general.vc_cta3.vc_cta3-color-orange.vc_cta3-style-3d {
  box-shadow: 0 5px 0 #f4a733;
  color: #faf0e1;
  border-color: transparent;
  background-color: #F7BE68;
}
.vc_general.vc_cta3.vc_cta3-color-orange.vc_cta3-style-3d .vc_cta3-content-header {
  color: #fff;
}
.vc_general.vc_cta3.vc_cta3-color-orange.vc_cta3-style-outline {
  border-color: #F7BE68;
  background-color: transparent;
}
.vc_general.vc_cta3.vc_cta3-color-orange.vc_cta3-style-outline .vc_cta3-content-header {
  color: #F7BE68;
}
.vc_general.vc_cta3.vc_cta3-color-sky.vc_cta3-style-classic .vc_cta3-content-header {
  color: #5AA1E3;
}
.vc_general.vc_cta3.vc_cta3-color-sky.vc_cta3-style-flat {
  color: #dce9f5;
  border-color: transparent;
  background-color: #5AA1E3;
}
.vc_general.vc_cta3.vc_cta3-color-sky.vc_cta3-style-flat .vc_cta3-content-header {
  color: #fff;
}
.vc_general.vc_cta3.vc_cta3-color-sky.vc_cta3-style-3d {
  box-shadow: 0 5px 0 #2a86db;
  color: #dce9f5;
  border-color: transparent;
  background-color: #5AA1E3;
}
.vc_general.vc_cta3.vc_cta3-color-sky.vc_cta3-style-3d .vc_cta3-content-header {
  color: #fff;
}
.vc_general.vc_cta3.vc_cta3-color-sky.vc_cta3-style-outline {
  border-color: #5AA1E3;
  background-color: transparent;
}
.vc_general.vc_cta3.vc_cta3-color-sky.vc_cta3-style-outline .vc_cta3-content-header {
  color: #5AA1E3;
}
.vc_general.vc_cta3.vc_cta3-color-green.vc_cta3-style-classic .vc_cta3-content-header {
  color: #6DAB3C;
}
.vc_general.vc_cta3.vc_cta3-color-green.vc_cta3-style-flat {
  color: #e5f2da;
  border-color: transparent;
  background-color: #6DAB3C;
}
.vc_general.vc_cta3.vc_cta3-color-green.vc_cta3-style-flat .vc_cta3-content-header {
  color: #fff;
}
.vc_general.vc_cta3.vc_cta3-color-green.vc_cta3-style-3d {
  box-shadow: 0 5px 0 #53812d;
  color: #e5f2da;
  border-color: transparent;
  background-color: #6DAB3C;
}
.vc_general.vc_cta3.vc_cta3-color-green.vc_cta3-style-3d .vc_cta3-content-header {
  color: #fff;
}
.vc_general.vc_cta3.vc_cta3-color-green.vc_cta3-style-outline {
  border-color: #6DAB3C;
  background-color: transparent;
}
.vc_general.vc_cta3.vc_cta3-color-green.vc_cta3-style-outline .vc_cta3-content-header {
  color: #6DAB3C;
}
.vc_general.vc_cta3.vc_cta3-color-juicy-pink.vc_cta3-style-classic .vc_cta3-content-header {
  color: #F4524D;
}
.vc_general.vc_cta3.vc_cta3-color-juicy-pink.vc_cta3-style-flat {
  color: #fce2e1;
  border-color: transparent;
  background-color: #F4524D;
}
.vc_general.vc_cta3.vc_cta3-color-juicy-pink.vc_cta3-style-flat .vc_cta3-content-header {
  color: #fff;
}
.vc_general.vc_cta3.vc_cta3-color-juicy-pink.vc_cta3-style-3d {
  box-shadow: 0 5px 0 #f11f18;
  color: #fce2e1;
  border-color: transparent;
  background-color: #F4524D;
}
.vc_general.vc_cta3.vc_cta3-color-juicy-pink.vc_cta3-style-3d .vc_cta3-content-header {
  color: #fff;
}
.vc_general.vc_cta3.vc_cta3-color-juicy-pink.vc_cta3-style-outline {
  border-color: #F4524D;
  background-color: transparent;
}
.vc_general.vc_cta3.vc_cta3-color-juicy-pink.vc_cta3-style-outline .vc_cta3-content-header {
  color: #F4524D;
}
.vc_general.vc_cta3.vc_cta3-color-sandy-brown.vc_cta3-style-classic .vc_cta3-content-header {
  color: #F79468;
}
.vc_general.vc_cta3.vc_cta3-color-sandy-brown.vc_cta3-style-flat {
  color: #f7e1d7;
  border-color: transparent;
  background-color: #F79468;
}
.vc_general.vc_cta3.vc_cta3-color-sandy-brown.vc_cta3-style-flat .vc_cta3-content-header {
  color: #fff;
}
.vc_general.vc_cta3.vc_cta3-color-sandy-brown.vc_cta3-style-3d {
  box-shadow: 0 5px 0 #f46e33;
  color: #f7e1d7;
  border-color: transparent;
  background-color: #F79468;
}
.vc_general.vc_cta3.vc_cta3-color-sandy-brown.vc_cta3-style-3d .vc_cta3-content-header {
  color: #fff;
}
.vc_general.vc_cta3.vc_cta3-color-sandy-brown.vc_cta3-style-outline {
  border-color: #F79468;
  background-color: transparent;
}
.vc_general.vc_cta3.vc_cta3-color-sandy-brown.vc_cta3-style-outline .vc_cta3-content-header {
  color: #F79468;
}
.vc_general.vc_cta3.vc_cta3-color-purple.vc_cta3-style-classic .vc_cta3-content-header {
  color: #B97EBB;
}
.vc_general.vc_cta3.vc_cta3-color-purple.vc_cta3-style-flat {
  color: #f4dff5;
  border-color: transparent;
  background-color: #B97EBB;
}
.vc_general.vc_cta3.vc_cta3-color-purple.vc_cta3-style-flat .vc_cta3-content-header {
  color: #fff;
}
.vc_general.vc_cta3.vc_cta3-color-purple.vc_cta3-style-3d {
  box-shadow: 0 5px 0 #a559a8;
  color: #f4dff5;
  border-color: transparent;
  background-color: #B97EBB;
}
.vc_general.vc_cta3.vc_cta3-color-purple.vc_cta3-style-3d .vc_cta3-content-header {
  color: #fff;
}
.vc_general.vc_cta3.vc_cta3-color-purple.vc_cta3-style-outline {
  border-color: #B97EBB;
  background-color: transparent;
}
.vc_general.vc_cta3.vc_cta3-color-purple.vc_cta3-style-outline .vc_cta3-content-header {
  color: #B97EBB;
}
.vc_general.vc_cta3.vc_cta3-color-black.vc_cta3-style-classic .vc_cta3-content-header {
  color: #2A2A2A;
}
.vc_general.vc_cta3.vc_cta3-color-black.vc_cta3-style-flat {
  color: #d9d9d9;
  border-color: transparent;
  background-color: #2A2A2A;
}
.vc_general.vc_cta3.vc_cta3-color-black.vc_cta3-style-flat .vc_cta3-content-header {
  color: #fff;
}
.vc_general.vc_cta3.vc_cta3-color-black.vc_cta3-style-3d {
  box-shadow: 0 5px 0 #0e0e0e;
  color: #d9d9d9;
  border-color: transparent;
  background-color: #2A2A2A;
}
.vc_general.vc_cta3.vc_cta3-color-black.vc_cta3-style-3d .vc_cta3-content-header {
  color: #fff;
}
.vc_general.vc_cta3.vc_cta3-color-black.vc_cta3-style-outline {
  border-color: #2A2A2A;
  background-color: transparent;
}
.vc_general.vc_cta3.vc_cta3-color-black.vc_cta3-style-outline .vc_cta3-content-header {
  color: #2A2A2A;
}
.vc_general.vc_cta3.vc_cta3-color-grey.vc_cta3-style-classic .vc_cta3-content-header {
  color: #EBEBEB;
}
.vc_general.vc_cta3.vc_cta3-color-grey.vc_cta3-style-flat {
  color: #9d9d9e;
  border-color: transparent;
  background-color: #EBEBEB;
}
.vc_general.vc_cta3.vc_cta3-color-grey.vc_cta3-style-flat .vc_cta3-content-header {
  color: #666;
}
.vc_general.vc_cta3.vc_cta3-color-grey.vc_cta3-style-3d {
  box-shadow: 0 5px 0 #cfcfcf;
  color: #9d9d9e;
  border-color: transparent;
  background-color: #EBEBEB;
}
.vc_general.vc_cta3.vc_cta3-color-grey.vc_cta3-style-3d .vc_cta3-content-header {
  color: #666;
}
.vc_general.vc_cta3.vc_cta3-color-grey.vc_cta3-style-outline {
  border-color: #EBEBEB;
  background-color: transparent;
}
.vc_general.vc_cta3.vc_cta3-color-grey.vc_cta3-style-outline .vc_cta3-content-header {
  color: #EBEBEB;
}
.vc_general.vc_cta3.vc_cta3-color-white.vc_cta3-style-classic .vc_cta3-content-header {
  color: #FFFFFF;
}
.vc_general.vc_cta3.vc_cta3-color-white.vc_cta3-style-flat {
  color: #9d9d9e;
  border-color: transparent;
  background-color: #FFFFFF;
}
.vc_general.vc_cta3.vc_cta3-color-white.vc_cta3-style-flat .vc_cta3-content-header {
  color: #666;
}
.vc_general.vc_cta3.vc_cta3-color-white.vc_cta3-style-3d {
  box-shadow: 0 5px 0 #e3e3e3;
  color: #9d9d9e;
  border-color: transparent;
  background-color: #FFFFFF;
}
.vc_general.vc_cta3.vc_cta3-color-white.vc_cta3-style-3d .vc_cta3-content-header {
  color: #666;
}
.vc_general.vc_cta3.vc_cta3-color-white.vc_cta3-style-outline {
  border-color: #FFFFFF;
  background-color: transparent;
}
.vc_general.vc_cta3.vc_cta3-color-white.vc_cta3-style-outline .vc_cta3-content-header {
  color: #FFFFFF;
}
.vc_general.vc_cta3.vc_cta3-color-classic.vc_cta3-style-flat {
  color: #9d9d9e;
  border-color: transparent;
  background-color: #eaeaea;
}
.vc_general.vc_cta3.vc_cta3-color-classic.vc_cta3-style-flat .vc_cta3-content-header {
  color: #666;
}
.vc_general.vc_cta3.vc_cta3-color-classic.vc_cta3-style-3d {
  box-shadow: 0 5px 0 #cecece;
  color: #9d9d9e;
  border-color: transparent;
  background-color: #eaeaea;
}
.vc_general.vc_cta3.vc_cta3-color-classic.vc_cta3-style-3d .vc_cta3-content-header {
  color: #666;
}
.vc_general.vc_cta3.vc_cta3-color-classic.vc_cta3-style-outline {
  border-color: #eaeaea;
  background-color: transparent;
}
.vc_general.vc_cta3.vc_cta3-color-classic.vc_cta3-style-outline .vc_cta3-content-header {
  color: #eaeaea;
}
.vc_cta3.vc_cta3-icon-size-xs .vc_icon_element .vc_icon_element-inner {
  height: 1em;
  width: 1em;
}
.vc_cta3.vc_cta3-icon-size-sm .vc_icon_element .vc_icon_element-inner {
  height: 2em;
  width: 2em;
}
.vc_cta3.vc_cta3-icon-size-md .vc_icon_element .vc_icon_element-inner {
  height: 3em;
  width: 3em;
}
.vc_cta3.vc_cta3-icon-size-lg .vc_icon_element .vc_icon_element-inner {
  height: 4em;
  width: 4em;
}
.vc_cta3.vc_cta3-icon-size-xl .vc_icon_element .vc_icon_element-inner {
  height: 5em;
  width: 5em;
}
/* Google maps
---------------------------------------------------------- */
.wpb_gmaps_widget .wpb_wrapper {
  background-color: #f7f7f7;
  padding: 5px;
}
.wpb_gmaps_widget .wpb_map_wraper iframe {
  margin-bottom: 0;
  padding: 0;
  display: block;
  width: 100%;
  border: none;
}
.wpb_gmaps_widget.vc_map_responsive .wpb_map_wraper {
  position: relative;
  padding-bottom: 56.25%;
  /* 16:9 */
  height: 0;
}
.wpb_gmaps_widget.vc_map_responsive .wpb_map_wraper iframe {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
}
.wpb_content_element .wpb_tabs_nav li a:focus,
.wpb_accordion_section .wpb_accordion_header a:focus,
.wpb_tour_next_prev_nav a:focus {
  outline: none;
}
/** Tabs/Tour Common **/
.wpb_content_element .wpb_tour_tabs_wrapper,
.wpb_content_element .wpb_tabs_nav {
  padding: 0;
}
.wpb_content_element .wpb_tabs_nav {
  margin: 0;
  padding-left: 0 !important;
  text-indent: inherit !important;
}
#content .wpb_content_element .wpb_tabs_nav {
  margin: 0;
}
.wpb_content_element .wpb_tabs_nav li {
  background-color: #FFFFFF;
  white-space: nowrap;
  padding: 0;
  background-image: none;
  list-style: none !important;
}
.wpb_content_element .wpb_tabs_nav li:after,
.wpb_content_element .wpb_tabs_nav li:before {
  display: none !important;
}
.wpb_content_element .wpb_tabs_nav li.ui-tabs-active,
.wpb_content_element .wpb_tabs_nav li:hover {
  background-color: #f7f7f7;
}
.wpb_content_element .wpb_tabs_nav li.ui-tabs-active a {
  cursor: default;
}
.wpb_content_element .wpb_tour_tabs_wrapper .wpb_ui-tabs-hide {
  display: none;
}
/** Tabs/Tour/Accordion Common **/
.wpb_content_element .wpb_tour_tabs_wrapper .wpb_tabs_nav a,
.wpb_content_element .wpb_accordion_header a {
  border-bottom: none;
  text-decoration: none;
  display: block;
  padding: 0.5em 1em;
}
.wpb_content_element .wpb_accordion_wrapper .wpb_accordion_header,
.wpb_content_element.wpb_tabs .wpb_tour_tabs_wrapper .wpb_tab {
  background-color: #f7f7f7;
}
.wpb_content_element .wpb_tour_tabs_wrapper .wpb_tab,
.wpb_content_element .wpb_accordion_wrapper .wpb_accordion_content {
  padding: 1em;
}
.wpb_content_element .wpb_tour_tabs_wrapper .wpb_tab > .wpb_content_element:last-child,
.wpb_content_element .wpb_accordion_wrapper .wpb_accordion_content > .wpb_content_element:last-child,
.wpb_content_element .wpb_tour_tabs_wrapper .wpb_tab .wpb_row:last-child > div > div.wpb_wrapper .wpb_content_element:last-child,
.wpb_content_element .wpb_accordion_wrapper .wpb_accordion_content .wpb_row:last-child > div > div.wpb_wrapper .wpb_content_element:last-child {
  margin-bottom: 0;
}
/** Tabs **/
.wpb_tabs .wpb_tabs_nav li {
  float: left;
  margin: 0 1px 0 0;
}
/** Tour **/
.wpb_tour .wpb_tabs_nav {
  float: left;
  width: 31.66666667%;
}
.wpb_tour .wpb_tabs_nav li {
  margin: 0 0 1px 0;
  clear: left;
  width: 100%;
}
.wpb_tour .wpb_tabs_nav a {
  width: 100%;
}
.wpb_tour .wpb_tour_tabs_wrapper .wpb_tab {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  border: none;
  float: left;
  width: 68.33333333%;
  padding: 0 0 0 0px;
}
.wpb_tour_next_prev_nav {
  margin-left: 31.66666667%;
  padding-left: 0px;
  font-size: 80%;
}
.wpb_tour_next_prev_nav a {
  border-bottom: 1px dotted;
  text-decoration: none;
}
.wpb_tour_next_prev_nav a:hover {
  text-decoration: none;
  border-bottom: none;
}
.wpb_tour_next_prev_nav span {
  width: 48%;
  display: inline-block;
  padding-top: 1em;
  float: left;
}
.wpb_tour_next_prev_nav span.wpb_next_slide {
  text-align: right;
  float: right;
}
/** Accordion **/
.wpb_accordion .wpb_accordion_wrapper .wpb_accordion_header {
  margin: 0 0 1px 0;
  padding-top: 0;
  position: relative;
  text-transform: none;
  font-weight: inherit;
  font-size: inherit;
  font-family: inherit;
  line-height: inherit;
  letter-spacing: inherit;
}
.wpb_accordion .wpb_accordion_wrapper .wpb_accordion_header a {
  padding-left: 1em;
}
.wpb_accordion .wpb_accordion_wrapper .ui-state-default .ui-icon,
.wpb_accordion .wpb_accordion_wrapper .ui-state-active .ui-icon {
  display: block;
  width: 16px;
  height: 16px;
  background-image: url(//app.ieee.org/wp-content/plugins/visual-composer/assets/images/toggle_open.png);
  background-repeat: no-repeat;
  position: absolute;
  right: 0.7em;
  top: 0.7em;
}
.wpb_accordion .wpb_accordion_wrapper .ui-state-active .ui-icon {
  background-image: url(//app.ieee.org/wp-content/plugins/visual-composer/assets/images/toggle_close.png);
}
/* tabs_tour_accordion responsive rules */
@media (max-width: 480px) {
  .vc_responsive .wpb_tour .wpb_tour_tabs_wrapper .wpb_tabs_nav,
  .vc_responsive .wpb_tour .wpb_tab,
  .vc_responsive .wpb_tour_next_prev_nav {
    width: 100%;
    float: none;
    margin-left: 0;
  }
  .vc_responsive .wpb_tour_next_prev_nav {
    width: auto;
    padding: 0 1em;
  }
  .vc_responsive #content .wpb_tour .wpb_tour_tabs_wrapper .wpb_tabs_nav {
    margin-bottom: 1em;
  }
  .vc_responsive .wpb_tour .wpb_tab {
    padding-left: 1em;
    padding-right: 1em;
  }
}
/* Teaser Grid
---------------------------------------------------------- */
.wpb_column .wpb_wrapper .wpb_teaser_grid {
  float: none;
}
body ul.wpb_thumbnails-fluid li {
  /* some themes add bg image as a bullet */
  padding: 0;
  margin-left: 0;
  background-image: none;
  list-style: none !important;
}
body ul.wpb_thumbnails-fluid li:after,
body ul.wpb_thumbnails-fluid li:before {
  display: none !important;
}
body ul.wpb_thumbnails-fluid li .entry-content *:last-child {
  margin-bottom: 0;
}
.wpb_row .wpb_grid ul.wpb_thumbnails-fluid,
.wpb_row .wpb_filtered_grid ul.wpb_thumbnails-fluid {
  padding: 0;
  overflow: visible !important;
}
/* Teaser grid
---------------------------------------------------------- */
.wpb_teaser_grid .entry-content {
  margin: 0;
  padding: 0;
  width: 100%;
}
.grid_layout-thumbnail .post-thumb {
  margin-bottom: 0;
}
.grid_layout-thumbnail .post-thumb img {
  max-width: 100%;
}
/* Carousel layout
---------------------------------------------------------- */
.wpb_carousel .wpb_wrapper {
  position: relative;
}
.wpb_carousel .prev,
.wpb_carousel .next {
  position: absolute;
  top: 3px;
  background-color: #f7f7f7;
  padding: 0px 6px 0px 6px;
  font-size: 12px;
  z-index: 10;
  text-decoration: none;
  transition: all 0.2s linear;
  -moz-transition: all 0.2s linear;
  -webkit-transition: all 0.2s linear;
  -o-transition: all 0.2s linear;
}
.wpb_carousel .prev:hover,
.wpb_carousel .next:hover {
  background-color: #006699;
}
.wpb_carousel .prev:focus,
.wpb_carousel .next:focus {
  outline: none;
  text-decoration: none;
}
.wpb_carousel .prev {
  right: 30px;
}
.wpb_carousel .next {
  right: 0px;
}
.wpb_carousel .wpb_thumbnails-fluid {
  width: 100%;
}
.wpb_carousel .wpb_thumbnails-fluid > [class*="vc_span"] {
  height: auto !important;
}
/*** Categories filter ***/
.wpb_teaser_grid .categories_filter,
.wpb_categories_filter {
  list-style: none;
  list-style-type: none;
  padding: 0;
  margin: 0 0 10px 0;
}
.wpb_teaser_grid .categories_filter li,
.wpb_categories_filter li {
  display: block;
  float: left;
  margin: 0 10px 10px 0;
  background-image: none;
  list-style: none !important;
}
.wpb_teaser_grid .categories_filter li:after,
.wpb_categories_filter li:after,
.wpb_teaser_grid .categories_filter li:before,
.wpb_categories_filter li:before {
  display: none !important;
}
.wpb_teaser_grid .categories_filter li a,
.wpb_categories_filter li a {
  border: none;
  text-decoration: none;
}
.wpb_teaser_grid .categories_filter li a:hover,
.wpb_categories_filter li a:hover {
  border-bottom: 1px dotted;
}
.wpb_teaser_grid .categories_filter li.active a,
.wpb_categories_filter li.active a {
  border-bottom: 1px dotted;
}
@media (max-width: 480px) {
  .vc_responsive .wpb_row ul.wpb_thumbnails-fluid {
    margin-left: 0;
    width: auto;
  }
  .vc_responsive .wpb_row .wpb_teaser_grid ul.wpb_thumbnails-fluid [class*="vc_col-"] {
    width: 100%;
    float: none;
    display: block;
    margin-left: 0;
    margin-right: 0;
  }
}
/* Image grid
---------------------------------------------------------- */
.wpb_image_grid .wpb_image_grid_ul {
  margin: 0;
  padding: 0;
}
.wpb_image_grid .wpb_image_grid_ul > li {
  background-image: none;
  list-style: none !important;
}
.wpb_image_grid .wpb_image_grid_ul > li:after,
.wpb_image_grid .wpb_image_grid_ul > li:before {
  display: none !important;
}
.wpb_image_grid .wpb_image_grid_ul .isotope-item {
  list-style: none;
  margin: 0 1px 1px 0;
  max-width: 100%;
  float: left;
}
.wpb_image_grid .wpb_image_grid_ul a {
  display: block;
}
.wpb_image_grid .wpb_image_grid_ul img {
  display: block;
  max-width: 100%;
  height: auto;
}
/* Gallery
---------------------------------------------------------- */
.wpb_gallery .theme-default .nivoSlider {
  margin-bottom: 0;
}
.wpb_gallery .theme-default .nivo-controlNav {
  padding: 10px 0 3px 0;
}
.wpb_gallery .wpb_flexslider .flex-control-nav {
  bottom: auto;
  top: 100%;
  margin-top: 15px;
}
.wpb_gallery .wpb_flexslider .flex-caption {
  cursor: default;
}
.wpb_gallery .wpb_flexslider .flex-direction-nav a {
  border: none;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
}
.wpb_gallery .wpb_flexslider .flex-direction-nav a:hover {
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
}
.wpb_gallery .wpb_flexslider .flex-direction-nav a:before {
  line-height: 1;
}
.wpb_gallery .wpb_flexslider .flex-control-paging {
  z-index: 10;
}
#content .wpb_gallery_slides ul.slides,
.content .wpb_gallery_slides ul.slides,
.wpb_gallery_slides ul.slides,
#content .wpb_gallery_slides ul.flex-direction-nav,
.content .wpb_gallery_slides ul.flex-direction-nav,
.wpb_gallery_slides ul.flex-direction-nav,
body .wpb_gallery_slides ul li,
.wpb_content_element .wpb_gallery_slides ul li {
  list-style: none;
  padding: 0;
  background-image: none;
  margin: 0;
}
/* Flickr stream
---------------------------------------------------------- */
.flickr_badge_image {
  margin: 0 10px 10px 0px;
  width: 72px;
  height: 72px;
  float: left;
  background: none;
  padding: 0;
}
.flickr_badge_image a {
  border: none;
}
.flickr_badge_image img {
  margin: 0;
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
}
.wpb_flickr_widget p.flickr_stream_wrap {
  clear: both;
  margin-bottom: 0;
  font-size: 80%;
}
.wpb_flickr_widget p.flickr_stream_wrap a {
  background-image: url(//app.ieee.org/wp-content/plugins/visual-composer/assets/images/flickr.png);
  background-repeat: no-repeat;
  background-position: left center;
  padding-left: 25px;
  display: inline-block;
}
/* Video widget
---------------------------------------------------------- */
.wpb_video_widget.vc_video-el-width-10 .wpb_wrapper {
  width: 10%;
}
.wpb_video_widget.vc_video-el-width-20 .wpb_wrapper {
  width: 20%;
}
.wpb_video_widget.vc_video-el-width-30 .wpb_wrapper {
  width: 30%;
}
.wpb_video_widget.vc_video-el-width-40 .wpb_wrapper {
  width: 40%;
}
.wpb_video_widget.vc_video-el-width-50 .wpb_wrapper {
  width: 50%;
}
.wpb_video_widget.vc_video-el-width-60 .wpb_wrapper {
  width: 60%;
}
.wpb_video_widget.vc_video-el-width-70 .wpb_wrapper {
  width: 70%;
}
.wpb_video_widget.vc_video-el-width-80 .wpb_wrapper {
  width: 80%;
}
.wpb_video_widget.vc_video-el-width-90 .wpb_wrapper {
  width: 90%;
}
.wpb_video_widget.vc_video-el-width-100 .wpb_wrapper {
  width: 100%;
}
.wpb_video_widget .wpb_video_wrapper {
  padding-top: 56.25%;
  position: relative;
  width: 100%;
}
.wpb_video_widget .wpb_video_wrapper > div {
  padding-top: 0 !important;
  position: static;
}
.wpb_video_widget.vc_video-aspect-ratio-169 .wpb_video_wrapper {
  padding-top: 56.25%;
}
.wpb_video_widget.vc_video-aspect-ratio-43 .wpb_video_wrapper {
  padding-top: 75%;
}
.wpb_video_widget.vc_video-aspect-ratio-235 .wpb_video_wrapper {
  padding-top: 42.55319149%;
}
.wpb_video_widget.vc_video-align-left .wpb_wrapper {
  float: left;
}
.wpb_video_widget.vc_video-align-center .wpb_wrapper {
  margin: 0 auto;
}
.wpb_video_widget.vc_video-align-right .wpb_wrapper {
  float: right;
}
.wpb_video_widget .wpb_wrapper {
  position: relative;
}
.wpb_video_widget .wpb_wrapper iframe {
  width: 100%;
  height: 100%;
  display: block;
  position: absolute;
  margin: 0;
  top: 0;
  left: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.wpb_video_wrapper .fluid-width-video-wrapper {
  padding-top: 0 !important;
  position: static;
}
/* Posts slider
---------------------------------------------------------- */
.wpb_posts_slider .flex-caption,
.wpb_posts_slider .nivo-caption {
  background-color: #f7f7f7;
  opacity: 1;
  filter: alpha(opacity=100);
  color: inherit;
  padding: 10px 15px;
  position: static;
}
.wpb_posts_slider .wpb_gallery_slides > ul > li {
  background-image: none;
  list-style: none !important;
}
.wpb_posts_slider .wpb_gallery_slides > ul > li:after,
.wpb_posts_slider .wpb_gallery_slides > ul > li:before {
  display: none !important;
}
/* Progress bar
---------------------------------------------------------- */
.vc_progress_bar .vc_single_bar {
  background: #8c8c8c;
  position: relative;
  margin-bottom: 0px;
  -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1) inset;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1) inset;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
}
.vc_progress_bar .vc_single_bar:last-child {
  margin-bottom: 0;
}
.vc_progress_bar .vc_single_bar .vc_label {
  display: block;
  padding: 0.5em 1em;
  position: relative;
  z-index: 1;
}
.vc_progress_bar .vc_single_bar .vc_bar {
  display: block;
  position: absolute;
  height: 100%;
  background-color: #e0e0e0;
  width: 0%;
  top: 0;
  left: 0;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
  transition: width 1s linear;
  -moz-transition: width 1s linear;
  -webkit-transition: width 1s linear;
  -o-transition: width 1s linear;
}
.vc_progress_bar .vc_single_bar .vc_bar.striped {
  background-image: -webkit-gradient(linear, 0 100%, 100% 0, color-stop(0.25, rgba(255, 255, 255, 0.15)), color-stop(0.25, transparent), color-stop(0.5, transparent), color-stop(0.5, rgba(255, 255, 255, 0.15)), color-stop(0.75, rgba(255, 255, 255, 0.15)), color-stop(0.75, transparent), to(transparent));
  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-image: -moz-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  -webkit-background-size: 40px 40px;
  -moz-background-size: 40px 40px;
  -o-background-size: 40px 40px;
  background-size: 40px 40px;
}
.vc_progress_bar .vc_single_bar .vc_bar.animated {
  -webkit-animation: progress-bar-stripes 2s linear infinite;
  -moz-animation: progress-bar-stripes 2s linear infinite;
  -ms-animation: progress-bar-stripes 2s linear infinite;
  -o-animation: progress-bar-stripes 2s linear infinite;
  animation: progress-bar-stripes 2s linear infinite;
}
.vc_progress_bar.vc_progress-bar-color-bar_blue .vc_single_bar .vc_bar {
  background-color: #0074CC;
}
.vc_progress_bar.vc_progress-bar-color-bar_blue .vc_single_bar .vc_label {
  color: #ffffff;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
}
.vc_progress_bar .vc_general.vc_single_bar.vc_progress-bar-color-bar_blue .vc_bar {
  background-color: #0074CC;
}
.vc_progress_bar .vc_general.vc_single_bar.vc_progress-bar-color-bar_blue .vc_label {
  color: #ffffff;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
}
.vc_progress_bar.vc_progress-bar-color-bar_turquoise .vc_single_bar .vc_bar {
  background-color: #49afcd;
}
.vc_progress_bar.vc_progress-bar-color-bar_turquoise .vc_single_bar .vc_label {
  color: #ffffff;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
}
.vc_progress_bar .vc_general.vc_single_bar.vc_progress-bar-color-bar_turquoise .vc_bar {
  background-color: #49afcd;
}
.vc_progress_bar .vc_general.vc_single_bar.vc_progress-bar-color-bar_turquoise .vc_label {
  color: #ffffff;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
}
.vc_progress_bar.vc_progress-bar-color-bar_green .vc_single_bar .vc_bar {
  background-color: #5bb75b;
}
.vc_progress_bar.vc_progress-bar-color-bar_green .vc_single_bar .vc_label {
  color: #ffffff;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
}
.vc_progress_bar .vc_general.vc_single_bar.vc_progress-bar-color-bar_green .vc_bar {
  background-color: #5bb75b;
}
.vc_progress_bar .vc_general.vc_single_bar.vc_progress-bar-color-bar_green .vc_label {
  color: #ffffff;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
}
.vc_progress_bar.vc_progress-bar-color-bar_orange .vc_single_bar .vc_bar {
  background-color: #faa732;
}
.vc_progress_bar.vc_progress-bar-color-bar_orange .vc_single_bar .vc_label {
  color: #ffffff;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
}
.vc_progress_bar .vc_general.vc_single_bar.vc_progress-bar-color-bar_orange .vc_bar {
  background-color: #faa732;
}
.vc_progress_bar .vc_general.vc_single_bar.vc_progress-bar-color-bar_orange .vc_label {
  color: #ffffff;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
}
.vc_progress_bar.vc_progress-bar-color-bar_red .vc_single_bar .vc_bar {
  background-color: #da4f49;
}
.vc_progress_bar.vc_progress-bar-color-bar_red .vc_single_bar .vc_label {
  color: #ffffff;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
}
.vc_progress_bar .vc_general.vc_single_bar.vc_progress-bar-color-bar_red .vc_bar {
  background-color: #da4f49;
}
.vc_progress_bar .vc_general.vc_single_bar.vc_progress-bar-color-bar_red .vc_label {
  color: #ffffff;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
}
.vc_progress_bar.vc_progress-bar-color-bar_black .vc_single_bar .vc_bar {
  background-color: #414141;
}
.vc_progress_bar.vc_progress-bar-color-bar_black .vc_single_bar .vc_label {
  color: #ffffff;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
}
.vc_progress_bar .vc_general.vc_single_bar.vc_progress-bar-color-bar_black .vc_bar {
  background-color: #414141;
}
.vc_progress_bar .vc_general.vc_single_bar.vc_progress-bar-color-bar_black .vc_label {
  color: #ffffff;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
}
.vc_progress_bar.vc_progress-bar-color-blue .vc_single_bar .vc_bar {
  background-color: #5472D2;
}
.vc_progress_bar.vc_progress-bar-color-blue .vc_single_bar .vc_label {
  color: #ffffff;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
}
.vc_progress_bar .vc_general.vc_single_bar.vc_progress-bar-color-blue .vc_bar {
  background-color: #5472D2;
}
.vc_progress_bar .vc_general.vc_single_bar.vc_progress-bar-color-blue .vc_label {
  color: #ffffff;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
}
.vc_progress_bar.vc_progress-bar-color-turquoise .vc_single_bar .vc_bar {
  background-color: #00C1CF;
}
.vc_progress_bar.vc_progress-bar-color-turquoise .vc_single_bar .vc_label {
  color: #ffffff;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
}
.vc_progress_bar .vc_general.vc_single_bar.vc_progress-bar-color-turquoise .vc_bar {
  background-color: #00C1CF;
}
.vc_progress_bar .vc_general.vc_single_bar.vc_progress-bar-color-turquoise .vc_label {
  color: #ffffff;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
}
.vc_progress_bar.vc_progress-bar-color-pink .vc_single_bar .vc_bar {
  background-color: #FE6C61;
}
.vc_progress_bar.vc_progress-bar-color-pink .vc_single_bar .vc_label {
  color: #ffffff;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
}
.vc_progress_bar .vc_general.vc_single_bar.vc_progress-bar-color-pink .vc_bar {
  background-color: #FE6C61;
}
.vc_progress_bar .vc_general.vc_single_bar.vc_progress-bar-color-pink .vc_label {
  color: #ffffff;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
}
.vc_progress_bar.vc_progress-bar-color-violet .vc_single_bar .vc_bar {
  background-color: #8D6DC4;
}
.vc_progress_bar.vc_progress-bar-color-violet .vc_single_bar .vc_label {
  color: #ffffff;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
}
.vc_progress_bar .vc_general.vc_single_bar.vc_progress-bar-color-violet .vc_bar {
  background-color: #8D6DC4;
}
.vc_progress_bar .vc_general.vc_single_bar.vc_progress-bar-color-violet .vc_label {
  color: #ffffff;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
}
.vc_progress_bar.vc_progress-bar-color-peacoc .vc_single_bar .vc_bar {
  background-color: #4CADC9;
}
.vc_progress_bar.vc_progress-bar-color-peacoc .vc_single_bar .vc_label {
  color: #ffffff;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
}
.vc_progress_bar .vc_general.vc_single_bar.vc_progress-bar-color-peacoc .vc_bar {
  background-color: #4CADC9;
}
.vc_progress_bar .vc_general.vc_single_bar.vc_progress-bar-color-peacoc .vc_label {
  color: #ffffff;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
}
.vc_progress_bar.vc_progress-bar-color-chino .vc_single_bar .vc_bar {
  background-color: #CEC2AB;
}
.vc_progress_bar.vc_progress-bar-color-chino .vc_single_bar .vc_label {
  color: #ffffff;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
}
.vc_progress_bar .vc_general.vc_single_bar.vc_progress-bar-color-chino .vc_bar {
  background-color: #CEC2AB;
}
.vc_progress_bar .vc_general.vc_single_bar.vc_progress-bar-color-chino .vc_label {
  color: #ffffff;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
}
.vc_progress_bar.vc_progress-bar-color-mulled-wine .vc_single_bar .vc_bar {
  background-color: #50485B;
}
.vc_progress_bar.vc_progress-bar-color-mulled-wine .vc_single_bar .vc_label {
  color: #ffffff;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
}
.vc_progress_bar .vc_general.vc_single_bar.vc_progress-bar-color-mulled-wine .vc_bar {
  background-color: #50485B;
}
.vc_progress_bar .vc_general.vc_single_bar.vc_progress-bar-color-mulled-wine .vc_label {
  color: #ffffff;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
}
.vc_progress_bar.vc_progress-bar-color-vista_blue .vc_single_bar .vc_bar {
  background-color: #75D69C;
}
.vc_progress_bar.vc_progress-bar-color-vista_blue .vc_single_bar .vc_label {
  color: #ffffff;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
}
.vc_progress_bar .vc_general.vc_single_bar.vc_progress-bar-color-vista_blue .vc_bar {
  background-color: #75D69C;
}
.vc_progress_bar .vc_general.vc_single_bar.vc_progress-bar-color-vista_blue .vc_label {
  color: #ffffff;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
}
.vc_progress_bar.vc_progress-bar-color-vista-blue .vc_single_bar .vc_bar {
  background-color: #75D69C;
}
.vc_progress_bar.vc_progress-bar-color-vista-blue .vc_single_bar .vc_label {
  color: #ffffff;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
}
.vc_progress_bar .vc_general.vc_single_bar.vc_progress-bar-color-vista-blue .vc_bar {
  background-color: #75D69C;
}
.vc_progress_bar .vc_general.vc_single_bar.vc_progress-bar-color-vista-blue .vc_label {
  color: #ffffff;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
}
.vc_progress_bar.vc_progress-bar-color-black .vc_single_bar .vc_bar {
  background-color: #2A2A2A;
}
.vc_progress_bar.vc_progress-bar-color-black .vc_single_bar .vc_label {
  color: #ffffff;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
}
.vc_progress_bar .vc_general.vc_single_bar.vc_progress-bar-color-black .vc_bar {
  background-color: #2A2A2A;
}
.vc_progress_bar .vc_general.vc_single_bar.vc_progress-bar-color-black .vc_label {
  color: #ffffff;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
}
.vc_progress_bar.vc_progress-bar-color-grey .vc_single_bar .vc_bar {
  background-color: #EBEBEB;
}
.vc_progress_bar.vc_progress-bar-color-grey .vc_single_bar .vc_label {
  color: #666666;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
}
.vc_progress_bar .vc_general.vc_single_bar.vc_progress-bar-color-grey .vc_bar {
  background-color: #EBEBEB;
}
.vc_progress_bar .vc_general.vc_single_bar.vc_progress-bar-color-grey .vc_label {
  color: #666666;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
}
.vc_progress_bar.vc_progress-bar-color-orange .vc_single_bar .vc_bar {
  background-color: #F7BE68;
}
.vc_progress_bar.vc_progress-bar-color-orange .vc_single_bar .vc_label {
  color: #ffffff;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
}
.vc_progress_bar .vc_general.vc_single_bar.vc_progress-bar-color-orange .vc_bar {
  background-color: #F7BE68;
}
.vc_progress_bar .vc_general.vc_single_bar.vc_progress-bar-color-orange .vc_label {
  color: #ffffff;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
}
.vc_progress_bar.vc_progress-bar-color-sky .vc_single_bar .vc_bar {
  background-color: #5AA1E3;
}
.vc_progress_bar.vc_progress-bar-color-sky .vc_single_bar .vc_label {
  color: #ffffff;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
}
.vc_progress_bar .vc_general.vc_single_bar.vc_progress-bar-color-sky .vc_bar {
  background-color: #5AA1E3;
}
.vc_progress_bar .vc_general.vc_single_bar.vc_progress-bar-color-sky .vc_label {
  color: #ffffff;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
}
.vc_progress_bar.vc_progress-bar-color-green .vc_single_bar .vc_bar {
  background-color: #6DAB3C;
}
.vc_progress_bar.vc_progress-bar-color-green .vc_single_bar .vc_label {
  color: #ffffff;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
}
.vc_progress_bar .vc_general.vc_single_bar.vc_progress-bar-color-green .vc_bar {
  background-color: #6DAB3C;
}
.vc_progress_bar .vc_general.vc_single_bar.vc_progress-bar-color-green .vc_label {
  color: #ffffff;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
}
.vc_progress_bar.vc_progress-bar-color-juicy-pink .vc_single_bar .vc_bar {
  background-color: #F4524D;
}
.vc_progress_bar.vc_progress-bar-color-juicy-pink .vc_single_bar .vc_label {
  color: #ffffff;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
}
.vc_progress_bar .vc_general.vc_single_bar.vc_progress-bar-color-juicy-pink .vc_bar {
  background-color: #F4524D;
}
.vc_progress_bar .vc_general.vc_single_bar.vc_progress-bar-color-juicy-pink .vc_label {
  color: #ffffff;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
}
.vc_progress_bar.vc_progress-bar-color-sandy-brown .vc_single_bar .vc_bar {
  background-color: #F79468;
}
.vc_progress_bar.vc_progress-bar-color-sandy-brown .vc_single_bar .vc_label {
  color: #ffffff;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
}
.vc_progress_bar .vc_general.vc_single_bar.vc_progress-bar-color-sandy-brown .vc_bar {
  background-color: #F79468;
}
.vc_progress_bar .vc_general.vc_single_bar.vc_progress-bar-color-sandy-brown .vc_label {
  color: #ffffff;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
}
.vc_progress_bar.vc_progress-bar-color-purple .vc_single_bar .vc_bar {
  background-color: #B97EBB;
}
.vc_progress_bar.vc_progress-bar-color-purple .vc_single_bar .vc_label {
  color: #ffffff;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
}
.vc_progress_bar .vc_general.vc_single_bar.vc_progress-bar-color-purple .vc_bar {
  background-color: #B97EBB;
}
.vc_progress_bar .vc_general.vc_single_bar.vc_progress-bar-color-purple .vc_label {
  color: #ffffff;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
}
.vc_progress_bar.vc_progress-bar-color-white .vc_single_bar .vc_bar {
  background-color: #FFFFFF;
}
.vc_progress_bar.vc_progress-bar-color-white .vc_single_bar .vc_label {
  color: #666666;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
}
.vc_progress_bar .vc_general.vc_single_bar.vc_progress-bar-color-white .vc_bar {
  background-color: #FFFFFF;
}
.vc_progress_bar .vc_general.vc_single_bar.vc_progress-bar-color-white .vc_label {
  color: #666666;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
}
@-webkit-keyframes progress-bar-stripes {
  from {
    background-position: 40px 0;
  }
  to {
    background-position: 0 0;
  }
}
@-moz-keyframes progress-bar-stripes {
  from {
    background-position: 40px 0;
  }
  to {
    background-position: 0 0;
  }
}
@-ms-keyframes progress-bar-stripes {
  from {
    background-position: 40px 0;
  }
  to {
    background-position: 0 0;
  }
}
@-o-keyframes progress-bar-stripes {
  from {
    background-position: 0 0;
  }
  to {
    background-position: 40px 0;
  }
}
@keyframes progress-bar-stripes {
  from {
    background-position: 40px 0;
  }
  to {
    background-position: 0 0;
  }
}
/*** Pie chart **/
.vc_pie_chart {
  z-index: 0;
  text-align: center;
  opacity: 0;
  filter: alpha(opacity=0);
}
.vc_pie_chart.vc_ready {
  opacity: 1;
  filter: alpha(opacity=100);
}
.vc_pie_chart .vc_pie_wrapper {
  position: relative;
  margin: 0 auto;
}
.vc_pie_chart canvas {
  position: relative;
  z-index: 1;
}
.vc_pie_chart .vc_pie_chart_value {
  font-size: 200%;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  text-align: center;
}
.vc_pie_chart_back {
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 6px solid #f7f7f7;
  border-radius: 999px;
  border-radius: 50%;
  opacity: 0.3;
  filter: alpha(opacity=30);
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.vc_images_carousel .vc_carousel-control {
  border: none;
}
.vc_carousel .vc_carousel-control {
  text-shadow: none;
  border: none;
  transition: all 0.2s linear;
  -moz-transition: all 0.2s linear;
  -webkit-transition: all 0.2s linear;
  -o-transition: all 0.2s linear;
}
.vc_carousel .vc_carousel-control:active,
.vc_carousel .vc_carousel-control:focus {
  outline: none;
}
.vc_carousel .vc_carousel-indicators li {
  width: 5px;
  height: 5px;
  margin: 0;
  border-color: #f7f7f7;
  transition: all 0.2s linear;
  -moz-transition: all 0.2s linear;
  -webkit-transition: all 0.2s linear;
  -o-transition: all 0.2s linear;
}
.vc_separator {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-flex-wrap: nowrap;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}
.vc_separator h4 {
  line-height: 1em;
  font-size: 100%;
  margin: 0;
  word-wrap: break-word;
  -webkit-box-flex: 0;
  -webkit-flex: 0 1 auto;
  -ms-flex: 0 1 auto;
  flex: 0 1 auto;
}
.vc_separator h4 .normal {
  font-size: 12px;
  font-weight: normal;
}
.vc_separator .vc_sep_holder {
  height: 1px;
  position: relative;
  -webkit-box-flex: 1;
  -webkit-flex: 1 1 auto;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  min-width: 10%;
}
.vc_separator .vc_sep_holder .vc_sep_line {
  height: 1px;
  border-top: 1px solid #EBEBEB;
  display: block;
  position: relative;
  top: 1px;
  width: 100%;
}
.vc_separator.vc_separator_align_center h4 {
  padding: 0 0.8em;
}
.vc_separator.vc_separator_align_left h4 {
  padding: 0 0.8em 0 0;
}
.vc_separator.vc_separator_align_left .vc_sep_holder.vc_sep_holder_l {
  display: none;
}
.vc_separator.vc_separator_align_right h4 {
  padding: 0 0 0 0.8em;
  margin: 0 !important;
}
.vc_separator.vc_separator_align_right .vc_sep_holder.vc_sep_holder_r {
  display: none;
}
.vc_separator.vc_sep_double {
  height: 3px;
}
.vc_separator.vc_sep_double .vc_sep_line {
  border-bottom: 1px solid #EBEBEB;
  border-top: 1px solid #EBEBEB;
  height: 3px;
}
.vc_separator.vc_sep_dashed .vc_sep_line {
  border-top-style: dashed;
}
.vc_separator.vc_sep_dotted .vc_sep_line {
  border-top-style: dotted;
}
.vc_separator.vc_sep_shadow .vc_sep_line {
  border: none;
  position: relative;
  height: 20px;
  top: 0;
  overflow: hidden;
}
.vc_separator.vc_sep_shadow .vc_sep_line::after {
  content: '';
  display: block;
  position: absolute;
  left: 0;
  top: -20px;
  right: 0;
  height: 10px;
  border-radius: 100%;
}
.vc_separator.vc_sep_shadow .vc_sep_holder_l .vc_sep_line::after {
  right: -100%;
  box-shadow: 10px 10px 10px 1px;
}
.vc_separator.vc_sep_shadow .vc_sep_holder_r .vc_sep_line::after {
  left: -100%;
  box-shadow: -10px 10px 10px 1px;
}
.vc_separator.vc_separator_no_text:not(.vc_sep_shadow) .vc_sep_holder_l {
  width: 100%;
}
.vc_separator.vc_separator_no_text:not(.vc_sep_shadow) .vc_sep_holder_r {
  display: none;
}
.vc_separator .vc_icon_element {
  margin-bottom: 0;
}
.vc_separator .vc_icon_element:not(.vc_icon_element-have-style) + h4 {
  padding-left: 0;
}
.vc_separator .vc_icon_element:not(.vc_icon_element-have-style) .vc_icon_element-size-xl {
  margin-left: 0.8em;
  margin-right: 0.8em;
}
.vc_separator.vc_separator-has-text.vc_separator_align_center .vc_icon_element.vc_icon_element-have-style,
.vc_separator.vc_separator-has-text.vc_separator_align_right .vc_icon_element.vc_icon_element-have-style {
  margin-left: 0.8em;
}
.vc_separator.vc_separator_align_left .vc_icon_element.vc_icon_element-have-style + h4 {
  padding-left: 0.8em;
}
.vc_separator.vc_sep_border_width_1 .vc_sep_holder .vc_sep_line {
  border-top-width: 1px;
}
.vc_separator.vc_sep_border_width_1.vc_sep_double .vc_sep_holder .vc_sep_line {
  border-bottom-width: 1px;
  top: 0px;
}
.vc_separator.vc_sep_border_width_1.vc_sep_shadow .vc_sep_line {
  top: 0px;
}
.vc_separator.vc_sep_border_width_1.vc_sep_shadow .vc_sep_holder_l .vc_sep_line::after {
  box-shadow: 10px 10px 10px 1px;
}
.vc_separator.vc_sep_border_width_1.vc_sep_shadow .vc_sep_holder_r .vc_sep_line::after {
  box-shadow: -10px 10px 10px 1px;
}
.vc_separator.vc_sep_border_width_2 .vc_sep_holder .vc_sep_line {
  border-top-width: 2px;
}
.vc_separator.vc_sep_border_width_2.vc_sep_double .vc_sep_holder .vc_sep_line {
  border-bottom-width: 2px;
  top: -1px;
}
.vc_separator.vc_sep_border_width_2.vc_sep_shadow .vc_sep_line {
  top: -1px;
}
.vc_separator.vc_sep_border_width_2.vc_sep_shadow .vc_sep_holder_l .vc_sep_line::after {
  box-shadow: 10px 10px 10px 2px;
}
.vc_separator.vc_sep_border_width_2.vc_sep_shadow .vc_sep_holder_r .vc_sep_line::after {
  box-shadow: -10px 10px 10px 2px;
}
.vc_separator.vc_sep_border_width_3 .vc_sep_holder .vc_sep_line {
  border-top-width: 3px;
}
.vc_separator.vc_sep_border_width_3.vc_sep_double .vc_sep_holder .vc_sep_line {
  border-bottom-width: 3px;
  top: -1px;
}
.vc_separator.vc_sep_border_width_3.vc_sep_shadow .vc_sep_line {
  top: -1px;
}
.vc_separator.vc_sep_border_width_3.vc_sep_shadow .vc_sep_holder_l .vc_sep_line::after {
  box-shadow: 10px 10px 10px 3px;
}
.vc_separator.vc_sep_border_width_3.vc_sep_shadow .vc_sep_holder_r .vc_sep_line::after {
  box-shadow: -10px 10px 10px 3px;
}
.vc_separator.vc_sep_border_width_4 .vc_sep_holder .vc_sep_line {
  border-top-width: 4px;
}
.vc_separator.vc_sep_border_width_4.vc_sep_double .vc_sep_holder .vc_sep_line {
  border-bottom-width: 4px;
  top: -2px;
}
.vc_separator.vc_sep_border_width_4.vc_sep_shadow .vc_sep_line {
  top: -2px;
}
.vc_separator.vc_sep_border_width_4.vc_sep_shadow .vc_sep_holder_l .vc_sep_line::after {
  box-shadow: 10px 10px 10px 4px;
}
.vc_separator.vc_sep_border_width_4.vc_sep_shadow .vc_sep_holder_r .vc_sep_line::after {
  box-shadow: -10px 10px 10px 4px;
}
.vc_separator.vc_sep_border_width_5 .vc_sep_holder .vc_sep_line {
  border-top-width: 5px;
}
.vc_separator.vc_sep_border_width_5.vc_sep_double .vc_sep_holder .vc_sep_line {
  border-bottom-width: 5px;
  top: -2px;
}
.vc_separator.vc_sep_border_width_5.vc_sep_shadow .vc_sep_line {
  top: -2px;
}
.vc_separator.vc_sep_border_width_5.vc_sep_shadow .vc_sep_holder_l .vc_sep_line::after {
  box-shadow: 10px 10px 10px 5px;
}
.vc_separator.vc_sep_border_width_5.vc_sep_shadow .vc_sep_holder_r .vc_sep_line::after {
  box-shadow: -10px 10px 10px 5px;
}
.vc_separator.vc_sep_border_width_6 .vc_sep_holder .vc_sep_line {
  border-top-width: 6px;
}
.vc_separator.vc_sep_border_width_6.vc_sep_double .vc_sep_holder .vc_sep_line {
  border-bottom-width: 6px;
  top: -3px;
}
.vc_separator.vc_sep_border_width_6.vc_sep_shadow .vc_sep_line {
  top: -3px;
}
.vc_separator.vc_sep_border_width_6.vc_sep_shadow .vc_sep_holder_l .vc_sep_line::after {
  box-shadow: 10px 10px 10px 6px;
}
.vc_separator.vc_sep_border_width_6.vc_sep_shadow .vc_sep_holder_r .vc_sep_line::after {
  box-shadow: -10px 10px 10px 6px;
}
.vc_separator.vc_sep_border_width_7 .vc_sep_holder .vc_sep_line {
  border-top-width: 7px;
}
.vc_separator.vc_sep_border_width_7.vc_sep_double .vc_sep_holder .vc_sep_line {
  border-bottom-width: 7px;
  top: -3px;
}
.vc_separator.vc_sep_border_width_7.vc_sep_shadow .vc_sep_line {
  top: -3px;
}
.vc_separator.vc_sep_border_width_7.vc_sep_shadow .vc_sep_holder_l .vc_sep_line::after {
  box-shadow: 10px 10px 10px 7px;
}
.vc_separator.vc_sep_border_width_7.vc_sep_shadow .vc_sep_holder_r .vc_sep_line::after {
  box-shadow: -10px 10px 10px 7px;
}
.vc_separator.vc_sep_border_width_8 .vc_sep_holder .vc_sep_line {
  border-top-width: 8px;
}
.vc_separator.vc_sep_border_width_8.vc_sep_double .vc_sep_holder .vc_sep_line {
  border-bottom-width: 8px;
  top: -4px;
}
.vc_separator.vc_sep_border_width_8.vc_sep_shadow .vc_sep_line {
  top: -4px;
}
.vc_separator.vc_sep_border_width_8.vc_sep_shadow .vc_sep_holder_l .vc_sep_line::after {
  box-shadow: 10px 10px 10px 8px;
}
.vc_separator.vc_sep_border_width_8.vc_sep_shadow .vc_sep_holder_r .vc_sep_line::after {
  box-shadow: -10px 10px 10px 8px;
}
.vc_separator.vc_sep_border_width_9 .vc_sep_holder .vc_sep_line {
  border-top-width: 9px;
}
.vc_separator.vc_sep_border_width_9.vc_sep_double .vc_sep_holder .vc_sep_line {
  border-bottom-width: 9px;
  top: -4px;
}
.vc_separator.vc_sep_border_width_9.vc_sep_shadow .vc_sep_line {
  top: -4px;
}
.vc_separator.vc_sep_border_width_9.vc_sep_shadow .vc_sep_holder_l .vc_sep_line::after {
  box-shadow: 10px 10px 10px 9px;
}
.vc_separator.vc_sep_border_width_9.vc_sep_shadow .vc_sep_holder_r .vc_sep_line::after {
  box-shadow: -10px 10px 10px 9px;
}
.vc_separator.vc_sep_border_width_10 .vc_sep_holder .vc_sep_line {
  border-top-width: 10px;
}
.vc_separator.vc_sep_border_width_10.vc_sep_double .vc_sep_holder .vc_sep_line {
  border-bottom-width: 10px;
  top: -5px;
}
.vc_separator.vc_sep_border_width_10.vc_sep_shadow .vc_sep_line {
  top: -5px;
}
.vc_separator.vc_sep_border_width_10.vc_sep_shadow .vc_sep_holder_l .vc_sep_line::after {
  box-shadow: 10px 10px 10px 10px;
}
.vc_separator.vc_sep_border_width_10.vc_sep_shadow .vc_sep_holder_r .vc_sep_line::after {
  box-shadow: -10px 10px 10px 10px;
}
.vc_separator.vc_sep_color_blue .vc_sep_line {
  border-color: #5472D2;
}
.vc_separator.vc_sep_color_blue.vc_sep_shadow .vc_sep_holder {
  color: #5472D2;
}
.vc_separator.vc_sep_color_turquoise .vc_sep_line {
  border-color: #00C1CF;
}
.vc_separator.vc_sep_color_turquoise.vc_sep_shadow .vc_sep_holder {
  color: #00C1CF;
}
.vc_separator.vc_sep_color_pink .vc_sep_line {
  border-color: #FE6C61;
}
.vc_separator.vc_sep_color_pink.vc_sep_shadow .vc_sep_holder {
  color: #FE6C61;
}
.vc_separator.vc_sep_color_violet .vc_sep_line {
  border-color: #8D6DC4;
}
.vc_separator.vc_sep_color_violet.vc_sep_shadow .vc_sep_holder {
  color: #8D6DC4;
}
.vc_separator.vc_sep_color_peacoc .vc_sep_line {
  border-color: #4CADC9;
}
.vc_separator.vc_sep_color_peacoc.vc_sep_shadow .vc_sep_holder {
  color: #4CADC9;
}
.vc_separator.vc_sep_color_chino .vc_sep_line {
  border-color: #CEC2AB;
}
.vc_separator.vc_sep_color_chino.vc_sep_shadow .vc_sep_holder {
  color: #CEC2AB;
}
.vc_separator.vc_sep_color_mulled_wine .vc_sep_line {
  border-color: #50485B;
}
.vc_separator.vc_sep_color_mulled_wine.vc_sep_shadow .vc_sep_holder {
  color: #50485B;
}
.vc_separator.vc_sep_color_vista_blue .vc_sep_line {
  border-color: #75D69C;
}
.vc_separator.vc_sep_color_vista_blue.vc_sep_shadow .vc_sep_holder {
  color: #75D69C;
}
.vc_separator.vc_sep_color_black .vc_sep_line {
  border-color: #2A2A2A;
}
.vc_separator.vc_sep_color_black.vc_sep_shadow .vc_sep_holder {
  color: #2A2A2A;
}
.vc_separator.vc_sep_color_grey .vc_sep_line {
  border-color: #EBEBEB;
}
.vc_separator.vc_sep_color_grey.vc_sep_shadow .vc_sep_holder {
  color: #EBEBEB;
}
.vc_separator.vc_sep_color_orange .vc_sep_line {
  border-color: #F7BE68;
}
.vc_separator.vc_sep_color_orange.vc_sep_shadow .vc_sep_holder {
  color: #F7BE68;
}
.vc_separator.vc_sep_color_sky .vc_sep_line {
  border-color: #5AA1E3;
}
.vc_separator.vc_sep_color_sky.vc_sep_shadow .vc_sep_holder {
  color: #5AA1E3;
}
.vc_separator.vc_sep_color_green .vc_sep_line {
  border-color: #6DAB3C;
}
.vc_separator.vc_sep_color_green.vc_sep_shadow .vc_sep_holder {
  color: #6DAB3C;
}
.vc_separator.vc_sep_color_juicy_pink .vc_sep_line {
  border-color: #F4524D;
}
.vc_separator.vc_sep_color_juicy_pink.vc_sep_shadow .vc_sep_holder {
  color: #F4524D;
}
.vc_separator.vc_sep_color_sandy_brown .vc_sep_line {
  border-color: #F79468;
}
.vc_separator.vc_sep_color_sandy_brown.vc_sep_shadow .vc_sep_holder {
  color: #F79468;
}
.vc_separator.vc_sep_color_purple .vc_sep_line {
  border-color: #B97EBB;
}
.vc_separator.vc_sep_color_purple.vc_sep_shadow .vc_sep_holder {
  color: #B97EBB;
}
.vc_separator.vc_sep_color_white .vc_sep_line {
  border-color: #FFFFFF;
}
.vc_separator.vc_sep_color_white.vc_sep_shadow .vc_sep_holder {
  color: #FFFFFF;
}
.wpb_separator,
.vc_text_separator {
  border-bottom: 1px solid #EBEBEB;
}
.vc_sep_width_10 {
  width: 10%;
}
.vc_sep_width_20 {
  width: 20%;
}
.vc_sep_width_30 {
  width: 30%;
}
.vc_sep_width_40 {
  width: 40%;
}
.vc_sep_width_50 {
  width: 50%;
}
.vc_sep_width_60 {
  width: 60%;
}
.vc_sep_width_70 {
  width: 70%;
}
.vc_sep_width_80 {
  width: 80%;
}
.vc_sep_width_90 {
  width: 90%;
}
.vc_sep_width_100 {
  width: 100%;
}
.vc_sep_pos_align_center {
  margin-left: auto;
  margin-right: auto;
}
.vc_sep_pos_align_left {
  margin-left: 0;
  margin-right: auto;
}
.vc_sep_pos_align_right {
  margin-left: auto;
  margin-right: 0;
}
/* Separator
---------------------------------------------------------- */
.wpb_separator {
  clear: both;
  height: 1px;
}
/* Text Separator
---------------------------------------------------------- */
.vc_text_separator {
  clear: both;
  height: 1px;
}
.vc_text_separator div {
  display: inline-block;
  background-color: #FFFFFF;
  padding: 1px 1em;
  position: relative;
  top: -9px;
}
.separator_align_center {
  text-align: center;
}
.separator_align_left {
  text-align: left;
}
.separator_align_right {
  text-align: right;
}
.vc-zigzag-wrapper {
  text-align: center;
}
.vc-zigzag-wrapper.vc-zigzag-align-left {
  text-align: left;
}
.vc-zigzag-wrapper.vc-zigzag-align-right {
  text-align: right;
}
.vc-zigzag-inner {
  display: inline-block;
}
.wpb_single_image a {
  border: none;
  outline: none;
}
.wpb_single_image img {
  height: auto;
  max-width: 100%;
  vertical-align: top;
}
.wpb_single_image img.vc_img-placeholder {
  width: 100%;
}
.wpb_single_image .vc_single_image-wrapper {
  display: inline-block;
  vertical-align: top;
  max-width: 100%;
}
.wpb_single_image .vc_single_image-wrapper.vc_box_rounded,
.wpb_single_image .vc_single_image-wrapper.vc_box_rounded img {
  border-radius: 4px;
  -webkit-box-shadow: none;
  box-shadow: none;
}
.wpb_single_image .vc_single_image-wrapper.vc_box_outline,
.wpb_single_image .vc_single_image-wrapper.vc_box_outline_circle {
  border-radius: 0;
  -webkit-box-shadow: none;
  box-shadow: none;
  padding: 6px;
  border: 1px solid #EBEBEB;
}
.wpb_single_image .vc_single_image-wrapper.vc_box_outline img,
.wpb_single_image .vc_single_image-wrapper.vc_box_outline_circle img {
  border-radius: 0;
  -webkit-box-shadow: none;
  box-shadow: none;
  border: 1px solid #EBEBEB;
}
.wpb_single_image .vc_single_image-wrapper.vc_box_border,
.wpb_single_image .vc_single_image-wrapper.vc_box_border_circle {
  border-radius: 0;
  -webkit-box-shadow: none;
  box-shadow: none;
  padding: 6px;
  border: none;
}
.wpb_single_image .vc_single_image-wrapper.vc_box_border img,
.wpb_single_image .vc_single_image-wrapper.vc_box_border_circle img {
  border-radius: 0;
  -webkit-box-shadow: none;
  box-shadow: none;
  border: none;
}
.wpb_single_image .vc_single_image-wrapper.vc_box_shadow,
.wpb_single_image .vc_single_image-wrapper.vc_box_shadow_border,
.wpb_single_image .vc_single_image-wrapper.vc_box_shadow_border_circle,
.wpb_single_image .vc_single_image-wrapper.vc_box_shadow_circle {
  border-radius: 0;
  -webkit-box-shadow: 0 0px 5px rgba(0, 0, 0, 0.1);
  box-shadow: 0 0px 5px rgba(0, 0, 0, 0.1);
}
.wpb_single_image .vc_single_image-wrapper.vc_box_shadow img,
.wpb_single_image .vc_single_image-wrapper.vc_box_shadow_border img,
.wpb_single_image .vc_single_image-wrapper.vc_box_shadow_border_circle img,
.wpb_single_image .vc_single_image-wrapper.vc_box_shadow_circle img {
  border-radius: 0;
  -webkit-box-shadow: 0 0px 5px rgba(0, 0, 0, 0.1);
  box-shadow: 0 0px 5px rgba(0, 0, 0, 0.1);
}
.wpb_single_image .vc_single_image-wrapper.vc_box_shadow_border,
.wpb_single_image .vc_single_image-wrapper.vc_box_shadow_border_circle {
  padding: 6px;
}
.wpb_single_image .vc_single_image-wrapper.vc_box_shadow_3d {
  border-radius: 0;
  -webkit-box-shadow: none;
  box-shadow: none;
  margin-bottom: 15px;
}
.wpb_single_image .vc_single_image-wrapper.vc_box_shadow_3d img {
  border-radius: 0;
  -webkit-box-shadow: none;
  box-shadow: none;
}
.wpb_single_image .vc_single_image-wrapper.vc_box_circle,
.wpb_single_image .vc_single_image-wrapper.vc_box_outline_circle,
.wpb_single_image .vc_single_image-wrapper.vc_box_border_circle,
.wpb_single_image .vc_single_image-wrapper.vc_box_shadow_circle,
.wpb_single_image .vc_single_image-wrapper.vc_box_shadow_border_circle {
  border-radius: 50%;
  -webkit-box-shadow: none;
  box-shadow: none;
  overflow: hidden;
}
.wpb_single_image .vc_single_image-wrapper.vc_box_circle img,
.wpb_single_image .vc_single_image-wrapper.vc_box_outline_circle img,
.wpb_single_image .vc_single_image-wrapper.vc_box_border_circle img,
.wpb_single_image .vc_single_image-wrapper.vc_box_shadow_circle img,
.wpb_single_image .vc_single_image-wrapper.vc_box_shadow_border_circle img {
  border-radius: 50%;
  -webkit-box-shadow: none;
  box-shadow: none;
  overflow: hidden;
}
.wpb_single_image .vc_single_image-wrapper.vc_box_shadow_circle,
.wpb_single_image .vc_single_image-wrapper.vc_box_shadow_border_circle {
  -webkit-box-shadow: 0 0px 5px rgba(0, 0, 0, 0.1);
  box-shadow: 0 0px 5px rgba(0, 0, 0, 0.1);
}
.wpb_single_image .vc_single_image-wrapper.vc_box_shadow_circle img,
.wpb_single_image .vc_single_image-wrapper.vc_box_shadow_border_circle img {
  -webkit-box-shadow: 0 0px 5px rgba(0, 0, 0, 0.1);
  box-shadow: 0 0px 5px rgba(0, 0, 0, 0.1);
}
.wpb_single_image.vc_align_center {
  text-align: center;
}
.wpb_single_image.vc_align_right {
  text-align: right;
}
.wpb_single_image.vc_align_left {
  text-align: left;
}
.wpb_single_image .vc_box_shadow_3d {
  position: relative;
  z-index: 0;
  display: inline-block;
  max-width: 100%;
}
.wpb_single_image .vc_box_shadow_3d:after,
.wpb_single_image .vc_box_shadow_3d:before {
  content: "";
  position: absolute;
  -webkit-box-shadow: 0 15px 10px rgba(0, 0, 0, 0.6);
  box-shadow: 0 15px 10px rgba(0, 0, 0, 0.6);
  left: 5px;
  right: 50%;
  bottom: 8px;
  height: 30%;
  z-index: -1;
  border-radius: inherit;
  -webkit-transform-origin: 0 0;
  -moz-transform-origin: 0 0;
  -ms-transform-origin: 0 0;
  transform-origin: 0 0;
  -webkit-transform: skewY(-6deg);
  -ms-transform: skewY(-6deg);
  transform: skewY(-6deg);
}
.wpb_single_image .vc_box_shadow_3d:after {
  left: 50%;
  right: 5px;
  -webkit-transform: skewY(6deg);
  -ms-transform: skewY(6deg);
  transform: skewY(6deg);
  -webkit-transform-origin: 100% 0;
  -moz-transform-origin: 100% 0;
  -ms-transform-origin: 100% 0;
  transform-origin: 100% 0;
}
.wpb_single_image .vc_figure {
  display: inline-block;
  vertical-align: top;
  margin: 0;
  max-width: 100%;
}
.wpb_single_image .vc_figure-caption {
  margin-top: .2em;
  font-size: .8em;
}
.wpb_single_image .vc_box_outline.vc_box_border_blue,
.wpb_single_image .vc_box_outline_circle.vc_box_border_blue {
  border-color: #5472D2;
}
.wpb_single_image .vc_box_border.vc_box_border_blue,
.wpb_single_image .vc_box_border_circle.vc_box_border_blue {
  background-color: #5472D2;
}
.wpb_single_image .vc_box_outline.vc_box_border_turquoise,
.wpb_single_image .vc_box_outline_circle.vc_box_border_turquoise {
  border-color: #00C1CF;
}
.wpb_single_image .vc_box_border.vc_box_border_turquoise,
.wpb_single_image .vc_box_border_circle.vc_box_border_turquoise {
  background-color: #00C1CF;
}
.wpb_single_image .vc_box_outline.vc_box_border_pink,
.wpb_single_image .vc_box_outline_circle.vc_box_border_pink {
  border-color: #FE6C61;
}
.wpb_single_image .vc_box_border.vc_box_border_pink,
.wpb_single_image .vc_box_border_circle.vc_box_border_pink {
  background-color: #FE6C61;
}
.wpb_single_image .vc_box_outline.vc_box_border_violet,
.wpb_single_image .vc_box_outline_circle.vc_box_border_violet {
  border-color: #8D6DC4;
}
.wpb_single_image .vc_box_border.vc_box_border_violet,
.wpb_single_image .vc_box_border_circle.vc_box_border_violet {
  background-color: #8D6DC4;
}
.wpb_single_image .vc_box_outline.vc_box_border_peacoc,
.wpb_single_image .vc_box_outline_circle.vc_box_border_peacoc {
  border-color: #4CADC9;
}
.wpb_single_image .vc_box_border.vc_box_border_peacoc,
.wpb_single_image .vc_box_border_circle.vc_box_border_peacoc {
  background-color: #4CADC9;
}
.wpb_single_image .vc_box_outline.vc_box_border_chino,
.wpb_single_image .vc_box_outline_circle.vc_box_border_chino {
  border-color: #CEC2AB;
}
.wpb_single_image .vc_box_border.vc_box_border_chino,
.wpb_single_image .vc_box_border_circle.vc_box_border_chino {
  background-color: #CEC2AB;
}
.wpb_single_image .vc_box_outline.vc_box_border_mulled_wine,
.wpb_single_image .vc_box_outline_circle.vc_box_border_mulled_wine {
  border-color: #50485B;
}
.wpb_single_image .vc_box_border.vc_box_border_mulled_wine,
.wpb_single_image .vc_box_border_circle.vc_box_border_mulled_wine {
  background-color: #50485B;
}
.wpb_single_image .vc_box_outline.vc_box_border_vista_blue,
.wpb_single_image .vc_box_outline_circle.vc_box_border_vista_blue {
  border-color: #75D69C;
}
.wpb_single_image .vc_box_border.vc_box_border_vista_blue,
.wpb_single_image .vc_box_border_circle.vc_box_border_vista_blue {
  background-color: #75D69C;
}
.wpb_single_image .vc_box_outline.vc_box_border_black,
.wpb_single_image .vc_box_outline_circle.vc_box_border_black {
  border-color: #2A2A2A;
}
.wpb_single_image .vc_box_border.vc_box_border_black,
.wpb_single_image .vc_box_border_circle.vc_box_border_black {
  background-color: #2A2A2A;
}
.wpb_single_image .vc_box_outline.vc_box_border_grey,
.wpb_single_image .vc_box_outline_circle.vc_box_border_grey {
  border-color: #EBEBEB;
}
.wpb_single_image .vc_box_border.vc_box_border_grey,
.wpb_single_image .vc_box_border_circle.vc_box_border_grey {
  background-color: #EBEBEB;
}
.wpb_single_image .vc_box_outline.vc_box_border_orange,
.wpb_single_image .vc_box_outline_circle.vc_box_border_orange {
  border-color: #F7BE68;
}
.wpb_single_image .vc_box_border.vc_box_border_orange,
.wpb_single_image .vc_box_border_circle.vc_box_border_orange {
  background-color: #F7BE68;
}
.wpb_single_image .vc_box_outline.vc_box_border_sky,
.wpb_single_image .vc_box_outline_circle.vc_box_border_sky {
  border-color: #5AA1E3;
}
.wpb_single_image .vc_box_border.vc_box_border_sky,
.wpb_single_image .vc_box_border_circle.vc_box_border_sky {
  background-color: #5AA1E3;
}
.wpb_single_image .vc_box_outline.vc_box_border_green,
.wpb_single_image .vc_box_outline_circle.vc_box_border_green {
  border-color: #6DAB3C;
}
.wpb_single_image .vc_box_border.vc_box_border_green,
.wpb_single_image .vc_box_border_circle.vc_box_border_green {
  background-color: #6DAB3C;
}
.wpb_single_image .vc_box_outline.vc_box_border_juicy_pink,
.wpb_single_image .vc_box_outline_circle.vc_box_border_juicy_pink {
  border-color: #F4524D;
}
.wpb_single_image .vc_box_border.vc_box_border_juicy_pink,
.wpb_single_image .vc_box_border_circle.vc_box_border_juicy_pink {
  background-color: #F4524D;
}
.wpb_single_image .vc_box_outline.vc_box_border_sandy_brown,
.wpb_single_image .vc_box_outline_circle.vc_box_border_sandy_brown {
  border-color: #F79468;
}
.wpb_single_image .vc_box_border.vc_box_border_sandy_brown,
.wpb_single_image .vc_box_border_circle.vc_box_border_sandy_brown {
  background-color: #F79468;
}
.wpb_single_image .vc_box_outline.vc_box_border_purple,
.wpb_single_image .vc_box_outline_circle.vc_box_border_purple {
  border-color: #B97EBB;
}
.wpb_single_image .vc_box_border.vc_box_border_purple,
.wpb_single_image .vc_box_border_circle.vc_box_border_purple {
  background-color: #B97EBB;
}
.wpb_single_image .vc_box_outline.vc_box_border_white,
.wpb_single_image .vc_box_outline_circle.vc_box_border_white {
  border-color: #FFFFFF;
}
.wpb_single_image .vc_box_border.vc_box_border_white,
.wpb_single_image .vc_box_border_circle.vc_box_border_white {
  background-color: #FFFFFF;
}
.vc_icon_element {
  line-height: 0;
  font-size: 14px;
  margin-bottom: 0px;
}
.vc_icon_element.vc_icon_element-outer {
  box-sizing: border-box;
  text-align: center;
}
.vc_icon_element.vc_icon_element-outer.vc_icon_element-align-left {
  text-align: left;
}
.vc_icon_element.vc_icon_element-outer.vc_icon_element-align-center {
  text-align: center;
}
.vc_icon_element.vc_icon_element-outer.vc_icon_element-align-right {
  text-align: right;
}
.vc_icon_element.vc_icon_element-outer .vc_icon_element-inner {
  text-align: center;
  display: inline-block;
  border: 2px solid transparent;
  width: 4em;
  height: 4em;
  box-sizing: content-box;
  position: relative;
}
.vc_icon_element.vc_icon_element-outer .vc_icon_element-inner .vc_icon_element-icon {
  font-size: 2.15em;
  font-style: normal;
  font-weight: normal;
  line-height: 1 !important;
  font-size-adjust: none;
  font-stretch: normal;
  -webkit-font-feature-settings: normal;
  font-feature-settings: normal;
  -webkit-font-language-override: normal;
  font-language-override: normal;
  -webkit-font-kerning: auto;
  font-kerning: auto;
  font-synthesis: weight style;
  font-variant: normal;
  text-rendering: auto;
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.vc_icon_element.vc_icon_element-outer .vc_icon_element-inner .vc_icon_element-icon:before {
  font-style: normal;
  font-weight: normal;
  display: inline-block;
  text-decoration: inherit;
  width: inherit;
  height: inherit;
  font-size: 1em;
  text-align: center;
  text-rendering: optimizelegibility;
}
.vc_icon_element.vc_icon_element-outer .vc_icon_element-inner .vc_icon_element-link,
.vc_icon_element.vc_icon_element-outer .vc_icon_element-inner .vc_gitem-link {
  width: 100%;
  height: 100%;
  display: block;
  position: absolute;
  top: 0;
  box-sizing: content-box;
  border: none;
}
.vc_icon_element.vc_icon_element-outer .vc_icon_element-inner.vc_icon_element-size-xs {
  max-width: 100% !important;
  line-height: 1.2em !important;
}
.vc_icon_element.vc_icon_element-outer .vc_icon_element-inner.vc_icon_element-size-xs.vc_icon_element-have-style-inner {
  width: 2.5em !important;
  height: 2.5em !important;
}
.vc_icon_element.vc_icon_element-outer .vc_icon_element-inner.vc_icon_element-size-xs .vc_icon_element-icon {
  font-size: 1.2em !important;
}
.vc_icon_element.vc_icon_element-outer .vc_icon_element-inner.vc_icon_element-size-sm {
  max-width: 100% !important;
  line-height: 1.6em !important;
}
.vc_icon_element.vc_icon_element-outer .vc_icon_element-inner.vc_icon_element-size-sm.vc_icon_element-have-style-inner {
  width: 3.15em !important;
  height: 3.15em !important;
}
.vc_icon_element.vc_icon_element-outer .vc_icon_element-inner.vc_icon_element-size-sm .vc_icon_element-icon {
  font-size: 1.6em !important;
}
.vc_icon_element.vc_icon_element-outer .vc_icon_element-inner.vc_icon_element-size-md {
  max-width: 100% !important;
  line-height: 2.15em !important;
}
.vc_icon_element.vc_icon_element-outer .vc_icon_element-inner.vc_icon_element-size-md.vc_icon_element-have-style-inner {
  width: 4em !important;
  height: 4em !important;
}
.vc_icon_element.vc_icon_element-outer .vc_icon_element-inner.vc_icon_element-size-md .vc_icon_element-icon {
  font-size: 2.15em !important;
}
.vc_icon_element.vc_icon_element-outer .vc_icon_element-inner.vc_icon_element-size-lg {
  max-width: 100% !important;
  line-height: 2.85em !important;
}
.vc_icon_element.vc_icon_element-outer .vc_icon_element-inner.vc_icon_element-size-lg.vc_icon_element-have-style-inner {
  width: 5em !important;
  height: 5em !important;
}
.vc_icon_element.vc_icon_element-outer .vc_icon_element-inner.vc_icon_element-size-lg .vc_icon_element-icon {
  font-size: 2.85em !important;
}
.vc_icon_element.vc_icon_element-outer .vc_icon_element-inner.vc_icon_element-size-xl {
  max-width: 100% !important;
  line-height: 5em !important;
}
.vc_icon_element.vc_icon_element-outer .vc_icon_element-inner.vc_icon_element-size-xl.vc_icon_element-have-style-inner {
  width: 7.15em !important;
  height: 7.15em !important;
}
.vc_icon_element.vc_icon_element-outer .vc_icon_element-inner.vc_icon_element-size-xl .vc_icon_element-icon {
  font-size: 5em !important;
}
.vc_icon_element.vc_icon_element-outer .vc_icon_element-inner.vc_icon_element-style-rounded {
  border-radius: 50%;
}
.vc_icon_element.vc_icon_element-outer .vc_icon_element-inner.vc_icon_element-style-rounded .vc_icon_element-link,
.vc_icon_element.vc_icon_element-outer .vc_icon_element-inner.vc_icon_element-style-rounded .vc_gitem-link {
  border-radius: 50%;
}
.vc_icon_element.vc_icon_element-outer .vc_icon_element-inner.vc_icon_element-style-rounded-outline {
  border-radius: 50%;
}
.vc_icon_element.vc_icon_element-outer .vc_icon_element-inner.vc_icon_element-style-rounded-outline .vc_icon_element-link,
.vc_icon_element.vc_icon_element-outer .vc_icon_element-inner.vc_icon_element-style-rounded-outline .vc_gitem-link {
  border-radius: 50%;
}
.vc_icon_element.vc_icon_element-outer .vc_icon_element-inner.vc_icon_element-style-rounded-less {
  border-radius: 5px;
}
.vc_icon_element.vc_icon_element-outer .vc_icon_element-inner.vc_icon_element-style-rounded-less .vc_icon_element-link,
.vc_icon_element.vc_icon_element-outer .vc_icon_element-inner.vc_icon_element-style-rounded-less .vc_gitem-link {
  border-radius: 5px;
}
.vc_icon_element.vc_icon_element-outer .vc_icon_element-inner.vc_icon_element-style-rounded-less-outline {
  border-radius: 5px;
}
.vc_icon_element.vc_icon_element-outer .vc_icon_element-inner.vc_icon_element-style-rounded-less-outline .vc_icon_element-link,
.vc_icon_element.vc_icon_element-outer .vc_icon_element-inner.vc_icon_element-style-rounded-less-outline .vc_gitem-link {
  border-radius: 5px;
}
.vc_icon_element.vc_icon_element-outer .vc_icon_element-inner.vc_icon_element-color-blue .vc_icon_element-icon {
  color: #5472D2;
}
.vc_icon_element.vc_icon_element-outer .vc_icon_element-inner.vc_icon_element-color-turquoise .vc_icon_element-icon {
  color: #00C1CF;
}
.vc_icon_element.vc_icon_element-outer .vc_icon_element-inner.vc_icon_element-color-pink .vc_icon_element-icon {
  color: #FE6C61;
}
.vc_icon_element.vc_icon_element-outer .vc_icon_element-inner.vc_icon_element-color-violet .vc_icon_element-icon {
  color: #8D6DC4;
}
.vc_icon_element.vc_icon_element-outer .vc_icon_element-inner.vc_icon_element-color-peacoc .vc_icon_element-icon {
  color: #4CADC9;
}
.vc_icon_element.vc_icon_element-outer .vc_icon_element-inner.vc_icon_element-color-chino .vc_icon_element-icon {
  color: #CEC2AB;
}
.vc_icon_element.vc_icon_element-outer .vc_icon_element-inner.vc_icon_element-color-mulled_wine .vc_icon_element-icon {
  color: #50485B;
}
.vc_icon_element.vc_icon_element-outer .vc_icon_element-inner.vc_icon_element-color-vista_blue .vc_icon_element-icon {
  color: #75D69C;
}
.vc_icon_element.vc_icon_element-outer .vc_icon_element-inner.vc_icon_element-color-black .vc_icon_element-icon {
  color: #2A2A2A;
}
.vc_icon_element.vc_icon_element-outer .vc_icon_element-inner.vc_icon_element-color-grey .vc_icon_element-icon {
  color: #EBEBEB;
}
.vc_icon_element.vc_icon_element-outer .vc_icon_element-inner.vc_icon_element-color-orange .vc_icon_element-icon {
  color: #F7BE68;
}
.vc_icon_element.vc_icon_element-outer .vc_icon_element-inner.vc_icon_element-color-sky .vc_icon_element-icon {
  color: #5AA1E3;
}
.vc_icon_element.vc_icon_element-outer .vc_icon_element-inner.vc_icon_element-color-green .vc_icon_element-icon {
  color: #6DAB3C;
}
.vc_icon_element.vc_icon_element-outer .vc_icon_element-inner.vc_icon_element-color-juicy_pink .vc_icon_element-icon {
  color: #F4524D;
}
.vc_icon_element.vc_icon_element-outer .vc_icon_element-inner.vc_icon_element-color-sandy_brown .vc_icon_element-icon {
  color: #F79468;
}
.vc_icon_element.vc_icon_element-outer .vc_icon_element-inner.vc_icon_element-color-purple .vc_icon_element-icon {
  color: #B97EBB;
}
.vc_icon_element.vc_icon_element-outer .vc_icon_element-inner.vc_icon_element-color-white .vc_icon_element-icon {
  color: #FFFFFF;
}
.vc_icon_element.vc_icon_element-outer .vc_icon_element-inner.vc_icon_element-background-color-blue.vc_icon_element-outline {
  border-color: #5472D2;
}
.vc_icon_element.vc_icon_element-outer .vc_icon_element-inner.vc_icon_element-background-color-blue.vc_icon_element-background {
  background-color: #5472D2;
}
.vc_icon_element.vc_icon_element-outer .vc_icon_element-inner.vc_icon_element-background-color-turquoise.vc_icon_element-outline {
  border-color: #00C1CF;
}
.vc_icon_element.vc_icon_element-outer .vc_icon_element-inner.vc_icon_element-background-color-turquoise.vc_icon_element-background {
  background-color: #00C1CF;
}
.vc_icon_element.vc_icon_element-outer .vc_icon_element-inner.vc_icon_element-background-color-pink.vc_icon_element-outline {
  border-color: #FE6C61;
}
.vc_icon_element.vc_icon_element-outer .vc_icon_element-inner.vc_icon_element-background-color-pink.vc_icon_element-background {
  background-color: #FE6C61;
}
.vc_icon_element.vc_icon_element-outer .vc_icon_element-inner.vc_icon_element-background-color-violet.vc_icon_element-outline {
  border-color: #8D6DC4;
}
.vc_icon_element.vc_icon_element-outer .vc_icon_element-inner.vc_icon_element-background-color-violet.vc_icon_element-background {
  background-color: #8D6DC4;
}
.vc_icon_element.vc_icon_element-outer .vc_icon_element-inner.vc_icon_element-background-color-peacoc.vc_icon_element-outline {
  border-color: #4CADC9;
}
.vc_icon_element.vc_icon_element-outer .vc_icon_element-inner.vc_icon_element-background-color-peacoc.vc_icon_element-background {
  background-color: #4CADC9;
}
.vc_icon_element.vc_icon_element-outer .vc_icon_element-inner.vc_icon_element-background-color-chino.vc_icon_element-outline {
  border-color: #CEC2AB;
}
.vc_icon_element.vc_icon_element-outer .vc_icon_element-inner.vc_icon_element-background-color-chino.vc_icon_element-background {
  background-color: #CEC2AB;
}
.vc_icon_element.vc_icon_element-outer .vc_icon_element-inner.vc_icon_element-background-color-mulled_wine.vc_icon_element-outline {
  border-color: #50485B;
}
.vc_icon_element.vc_icon_element-outer .vc_icon_element-inner.vc_icon_element-background-color-mulled_wine.vc_icon_element-background {
  background-color: #50485B;
}
.vc_icon_element.vc_icon_element-outer .vc_icon_element-inner.vc_icon_element-background-color-vista_blue.vc_icon_element-outline {
  border-color: #75D69C;
}
.vc_icon_element.vc_icon_element-outer .vc_icon_element-inner.vc_icon_element-background-color-vista_blue.vc_icon_element-background {
  background-color: #75D69C;
}
.vc_icon_element.vc_icon_element-outer .vc_icon_element-inner.vc_icon_element-background-color-black.vc_icon_element-outline {
  border-color: #2A2A2A;
}
.vc_icon_element.vc_icon_element-outer .vc_icon_element-inner.vc_icon_element-background-color-black.vc_icon_element-background {
  background-color: #2A2A2A;
}
.vc_icon_element.vc_icon_element-outer .vc_icon_element-inner.vc_icon_element-background-color-grey.vc_icon_element-outline {
  border-color: #EBEBEB;
}
.vc_icon_element.vc_icon_element-outer .vc_icon_element-inner.vc_icon_element-background-color-grey.vc_icon_element-background {
  background-color: #EBEBEB;
}
.vc_icon_element.vc_icon_element-outer .vc_icon_element-inner.vc_icon_element-background-color-orange.vc_icon_element-outline {
  border-color: #F7BE68;
}
.vc_icon_element.vc_icon_element-outer .vc_icon_element-inner.vc_icon_element-background-color-orange.vc_icon_element-background {
  background-color: #F7BE68;
}
.vc_icon_element.vc_icon_element-outer .vc_icon_element-inner.vc_icon_element-background-color-sky.vc_icon_element-outline {
  border-color: #5AA1E3;
}
.vc_icon_element.vc_icon_element-outer .vc_icon_element-inner.vc_icon_element-background-color-sky.vc_icon_element-background {
  background-color: #5AA1E3;
}
.vc_icon_element.vc_icon_element-outer .vc_icon_element-inner.vc_icon_element-background-color-green.vc_icon_element-outline {
  border-color: #6DAB3C;
}
.vc_icon_element.vc_icon_element-outer .vc_icon_element-inner.vc_icon_element-background-color-green.vc_icon_element-background {
  background-color: #6DAB3C;
}
.vc_icon_element.vc_icon_element-outer .vc_icon_element-inner.vc_icon_element-background-color-juicy_pink.vc_icon_element-outline {
  border-color: #F4524D;
}
.vc_icon_element.vc_icon_element-outer .vc_icon_element-inner.vc_icon_element-background-color-juicy_pink.vc_icon_element-background {
  background-color: #F4524D;
}
.vc_icon_element.vc_icon_element-outer .vc_icon_element-inner.vc_icon_element-background-color-sandy_brown.vc_icon_element-outline {
  border-color: #F79468;
}
.vc_icon_element.vc_icon_element-outer .vc_icon_element-inner.vc_icon_element-background-color-sandy_brown.vc_icon_element-background {
  background-color: #F79468;
}
.vc_icon_element.vc_icon_element-outer .vc_icon_element-inner.vc_icon_element-background-color-purple.vc_icon_element-outline {
  border-color: #B97EBB;
}
.vc_icon_element.vc_icon_element-outer .vc_icon_element-inner.vc_icon_element-background-color-purple.vc_icon_element-background {
  background-color: #B97EBB;
}
.vc_icon_element.vc_icon_element-outer .vc_icon_element-inner.vc_icon_element-background-color-white.vc_icon_element-outline {
  border-color: #FFFFFF;
}
.vc_icon_element.vc_icon_element-outer .vc_icon_element-inner.vc_icon_element-background-color-white.vc_icon_element-background {
  background-color: #FFFFFF;
}
.vc_chart .vc_chart-legend {
  font-size: 14px;
  margin: 0;
  padding: 0;
}
.vc_chart .vc_chart-legend li {
  line-height: 1.3em;
  list-style: none;
  margin: 0 0 0.3em 0;
  min-height: 1.3em;
}
.vc_chart .vc_chart-legend span {
  border-radius: 0.3em;
  display: inline-block;
  height: 1.3em;
  left: 0;
  margin-right: 0.5em;
  vertical-align: middle;
  width: 1.3em;
}
@media (min-width: 768px) {
  .vc_chart .vc_chart-legend {
    display: inline-block;
    vertical-align: middle;
    width: 40%;
  }
  .vc_chart .vc_chart-legend li {
    margin-left: 1em;
  }
  .vc_chart .vc_chart-with-legend {
    display: inline-block;
    vertical-align: middle;
    width: 60%;
  }
}
.vc_line-chart .vc_chart-with-legend {
  width: 75%;
}
.vc_line-chart .vc_chart-legend {
  width: 25%;
}
.wpb_single_image .wpb_wrapper .vc_single_image-wrapper .zoomImg {
  border-radius: 0;
}
.wpb_single_image [class*='_circle'] .vc-zoom-wrapper {
  border-radius: 50%;
}
.wpb_single_image [class*='_rounded'] .vc-zoom-wrapper {
  border-radius: 4px;
}
.vc_general.vc_pagination {
  display: block;
  margin: 0;
  padding: 0;
  text-align: center;
}
.vc_general.vc_pagination .vc_pagination-item {
  display: inline-block;
  margin: 0;
  padding: 0;
  vertical-align: middle;
}
.vc_general.vc_pagination .vc_pagination-trigger {
  display: block;
  text-decoration: none;
  cursor: pointer;
  height: 10px;
  width: 10px;
  margin: 5px 7px;
  background: transparent;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  border: none;
}
.vc_general.vc_pagination .vc_pagination-trigger:focus {
  outline: none;
}
.vc_general.vc_pagination .vc_active .vc_pagination-trigger {
  cursor: default;
}
.vc_pagination.vc_pagination-style-outline .vc_pagination-trigger {
  border: 3px solid transparent;
}
.vc_pagination.vc_pagination-style-flat .vc_pagination-trigger {
  opacity: .6;
}
.vc_pagination.vc_pagination-style-flat .vc_pagination-trigger:hover {
  opacity: 1;
}
.vc_pagination.vc_pagination-style-flat .vc_active .vc_pagination-trigger {
  opacity: 1;
}
.vc_pagination.vc_pagination-shape-round .vc_pagination-trigger {
  border-radius: 50%;
}
.vc_pagination.vc_pagination-shape-rounded .vc_pagination-trigger {
  border-radius: 3px;
}
.vc_pagination-color-blue.vc_pagination-style-outline .vc_pagination-trigger {
  border-color: #5472D2;
}
.vc_pagination-color-blue.vc_pagination-style-outline .vc_pagination-trigger:hover {
  background-color: #5472D2;
}
.vc_pagination-color-blue.vc_pagination-style-outline .vc_active .vc_pagination-trigger {
  background-color: #5472D2;
}
.vc_pagination-color-blue.vc_pagination-style-flat .vc_pagination-trigger {
  background-color: #5472D2;
}
.vc_pagination-color-turquoise.vc_pagination-style-outline .vc_pagination-trigger {
  border-color: #00C1CF;
}
.vc_pagination-color-turquoise.vc_pagination-style-outline .vc_pagination-trigger:hover {
  background-color: #00C1CF;
}
.vc_pagination-color-turquoise.vc_pagination-style-outline .vc_active .vc_pagination-trigger {
  background-color: #00C1CF;
}
.vc_pagination-color-turquoise.vc_pagination-style-flat .vc_pagination-trigger {
  background-color: #00C1CF;
}
.vc_pagination-color-pink.vc_pagination-style-outline .vc_pagination-trigger {
  border-color: #FE6C61;
}
.vc_pagination-color-pink.vc_pagination-style-outline .vc_pagination-trigger:hover {
  background-color: #FE6C61;
}
.vc_pagination-color-pink.vc_pagination-style-outline .vc_active .vc_pagination-trigger {
  background-color: #FE6C61;
}
.vc_pagination-color-pink.vc_pagination-style-flat .vc_pagination-trigger {
  background-color: #FE6C61;
}
.vc_pagination-color-violet.vc_pagination-style-outline .vc_pagination-trigger {
  border-color: #8D6DC4;
}
.vc_pagination-color-violet.vc_pagination-style-outline .vc_pagination-trigger:hover {
  background-color: #8D6DC4;
}
.vc_pagination-color-violet.vc_pagination-style-outline .vc_active .vc_pagination-trigger {
  background-color: #8D6DC4;
}
.vc_pagination-color-violet.vc_pagination-style-flat .vc_pagination-trigger {
  background-color: #8D6DC4;
}
.vc_pagination-color-peacoc.vc_pagination-style-outline .vc_pagination-trigger {
  border-color: #4CADC9;
}
.vc_pagination-color-peacoc.vc_pagination-style-outline .vc_pagination-trigger:hover {
  background-color: #4CADC9;
}
.vc_pagination-color-peacoc.vc_pagination-style-outline .vc_active .vc_pagination-trigger {
  background-color: #4CADC9;
}
.vc_pagination-color-peacoc.vc_pagination-style-flat .vc_pagination-trigger {
  background-color: #4CADC9;
}
.vc_pagination-color-chino.vc_pagination-style-outline .vc_pagination-trigger {
  border-color: #CEC2AB;
}
.vc_pagination-color-chino.vc_pagination-style-outline .vc_pagination-trigger:hover {
  background-color: #CEC2AB;
}
.vc_pagination-color-chino.vc_pagination-style-outline .vc_active .vc_pagination-trigger {
  background-color: #CEC2AB;
}
.vc_pagination-color-chino.vc_pagination-style-flat .vc_pagination-trigger {
  background-color: #CEC2AB;
}
.vc_pagination-color-mulled-wine.vc_pagination-style-outline .vc_pagination-trigger {
  border-color: #50485B;
}
.vc_pagination-color-mulled-wine.vc_pagination-style-outline .vc_pagination-trigger:hover {
  background-color: #50485B;
}
.vc_pagination-color-mulled-wine.vc_pagination-style-outline .vc_active .vc_pagination-trigger {
  background-color: #50485B;
}
.vc_pagination-color-mulled-wine.vc_pagination-style-flat .vc_pagination-trigger {
  background-color: #50485B;
}
.vc_pagination-color-vista-blue.vc_pagination-style-outline .vc_pagination-trigger {
  border-color: #75D69C;
}
.vc_pagination-color-vista-blue.vc_pagination-style-outline .vc_pagination-trigger:hover {
  background-color: #75D69C;
}
.vc_pagination-color-vista-blue.vc_pagination-style-outline .vc_active .vc_pagination-trigger {
  background-color: #75D69C;
}
.vc_pagination-color-vista-blue.vc_pagination-style-flat .vc_pagination-trigger {
  background-color: #75D69C;
}
.vc_pagination-color-orange.vc_pagination-style-outline .vc_pagination-trigger {
  border-color: #F7BE68;
}
.vc_pagination-color-orange.vc_pagination-style-outline .vc_pagination-trigger:hover {
  background-color: #F7BE68;
}
.vc_pagination-color-orange.vc_pagination-style-outline .vc_active .vc_pagination-trigger {
  background-color: #F7BE68;
}
.vc_pagination-color-orange.vc_pagination-style-flat .vc_pagination-trigger {
  background-color: #F7BE68;
}
.vc_pagination-color-sky.vc_pagination-style-outline .vc_pagination-trigger {
  border-color: #5AA1E3;
}
.vc_pagination-color-sky.vc_pagination-style-outline .vc_pagination-trigger:hover {
  background-color: #5AA1E3;
}
.vc_pagination-color-sky.vc_pagination-style-outline .vc_active .vc_pagination-trigger {
  background-color: #5AA1E3;
}
.vc_pagination-color-sky.vc_pagination-style-flat .vc_pagination-trigger {
  background-color: #5AA1E3;
}
.vc_pagination-color-green.vc_pagination-style-outline .vc_pagination-trigger {
  border-color: #6DAB3C;
}
.vc_pagination-color-green.vc_pagination-style-outline .vc_pagination-trigger:hover {
  background-color: #6DAB3C;
}
.vc_pagination-color-green.vc_pagination-style-outline .vc_active .vc_pagination-trigger {
  background-color: #6DAB3C;
}
.vc_pagination-color-green.vc_pagination-style-flat .vc_pagination-trigger {
  background-color: #6DAB3C;
}
.vc_pagination-color-juicy-pink.vc_pagination-style-outline .vc_pagination-trigger {
  border-color: #F4524D;
}
.vc_pagination-color-juicy-pink.vc_pagination-style-outline .vc_pagination-trigger:hover {
  background-color: #F4524D;
}
.vc_pagination-color-juicy-pink.vc_pagination-style-outline .vc_active .vc_pagination-trigger {
  background-color: #F4524D;
}
.vc_pagination-color-juicy-pink.vc_pagination-style-flat .vc_pagination-trigger {
  background-color: #F4524D;
}
.vc_pagination-color-sandy-brown.vc_pagination-style-outline .vc_pagination-trigger {
  border-color: #F79468;
}
.vc_pagination-color-sandy-brown.vc_pagination-style-outline .vc_pagination-trigger:hover {
  background-color: #F79468;
}
.vc_pagination-color-sandy-brown.vc_pagination-style-outline .vc_active .vc_pagination-trigger {
  background-color: #F79468;
}
.vc_pagination-color-sandy-brown.vc_pagination-style-flat .vc_pagination-trigger {
  background-color: #F79468;
}
.vc_pagination-color-purple.vc_pagination-style-outline .vc_pagination-trigger {
  border-color: #B97EBB;
}
.vc_pagination-color-purple.vc_pagination-style-outline .vc_pagination-trigger:hover {
  background-color: #B97EBB;
}
.vc_pagination-color-purple.vc_pagination-style-outline .vc_active .vc_pagination-trigger {
  background-color: #B97EBB;
}
.vc_pagination-color-purple.vc_pagination-style-flat .vc_pagination-trigger {
  background-color: #B97EBB;
}
.vc_pagination-color-black.vc_pagination-style-outline .vc_pagination-trigger {
  border-color: #2A2A2A;
}
.vc_pagination-color-black.vc_pagination-style-outline .vc_pagination-trigger:hover {
  background-color: #2A2A2A;
}
.vc_pagination-color-black.vc_pagination-style-outline .vc_active .vc_pagination-trigger {
  background-color: #2A2A2A;
}
.vc_pagination-color-black.vc_pagination-style-flat .vc_pagination-trigger {
  background-color: #2A2A2A;
}
.vc_pagination-color-grey.vc_pagination-style-outline .vc_pagination-trigger {
  border-color: #EBEBEB;
}
.vc_pagination-color-grey.vc_pagination-style-outline .vc_pagination-trigger:hover {
  background-color: #EBEBEB;
}
.vc_pagination-color-grey.vc_pagination-style-outline .vc_active .vc_pagination-trigger {
  background-color: #EBEBEB;
}
.vc_pagination-color-grey.vc_pagination-style-flat .vc_pagination-trigger {
  background-color: #EBEBEB;
}
.vc_pagination-color-white.vc_pagination-style-outline .vc_pagination-trigger {
  border-color: #FFFFFF;
}
.vc_pagination-color-white.vc_pagination-style-outline .vc_pagination-trigger:hover {
  background-color: #FFFFFF;
}
.vc_pagination-color-white.vc_pagination-style-outline .vc_active .vc_pagination-trigger {
  background-color: #FFFFFF;
}
.vc_pagination-color-white.vc_pagination-style-flat .vc_pagination-trigger {
  background-color: #FFFFFF;
}
.vc_grid.vc_row {
  padding-left: 0;
  padding-right: 0;
  margin-left: 0;
  margin-right: 0;
}
.vc-row[data-vc-full-width] .vc_grid.vc_row {
  overflow: hidden;
}
.vc_grid.vc_row.vc_grid-gutter-1px {
  margin-bottom: -1px;
}
.vc_grid.vc_row.vc_grid-gutter-1px .vc_pageable-slide-wrapper {
  margin-right: -1px;
}
.vc_grid.vc_row.vc_grid-gutter-1px .vc_grid-item {
  padding-right: 1px;
  padding-bottom: 1px;
}
.vc_grid.vc_row.vc_grid-gutter-2px {
  margin-bottom: -2px;
}
.vc_grid.vc_row.vc_grid-gutter-2px .vc_pageable-slide-wrapper {
  margin-right: -2px;
}
.vc_grid.vc_row.vc_grid-gutter-2px .vc_grid-item {
  padding-right: 2px;
  padding-bottom: 2px;
}
.vc_grid.vc_row.vc_grid-gutter-3px {
  margin-bottom: -3px;
}
.vc_grid.vc_row.vc_grid-gutter-3px .vc_pageable-slide-wrapper {
  margin-right: -3px;
}
.vc_grid.vc_row.vc_grid-gutter-3px .vc_grid-item {
  padding-right: 3px;
  padding-bottom: 3px;
}
.vc_grid.vc_row.vc_grid-gutter-4px {
  margin-bottom: -4px;
}
.vc_grid.vc_row.vc_grid-gutter-4px .vc_pageable-slide-wrapper {
  margin-right: -4px;
}
.vc_grid.vc_row.vc_grid-gutter-4px .vc_grid-item {
  padding-right: 4px;
  padding-bottom: 4px;
}
.vc_grid.vc_row.vc_grid-gutter-5px {
  margin-bottom: -5px;
}
.vc_grid.vc_row.vc_grid-gutter-5px .vc_pageable-slide-wrapper {
  margin-right: -5px;
}
.vc_grid.vc_row.vc_grid-gutter-5px .vc_grid-item {
  padding-right: 5px;
  padding-bottom: 5px;
}
.vc_grid.vc_row.vc_grid-gutter-10px {
  margin-bottom: -10px;
}
.vc_grid.vc_row.vc_grid-gutter-10px .vc_pageable-slide-wrapper {
  margin-right: -10px;
}
.vc_grid.vc_row.vc_grid-gutter-10px .vc_grid-item {
  padding-right: 10px;
  padding-bottom: 10px;
}
.vc_grid.vc_row.vc_grid-gutter-15px {
  margin-bottom: -15px;
}
.vc_grid.vc_row.vc_grid-gutter-15px .vc_pageable-slide-wrapper {
  margin-right: -15px;
}
.vc_grid.vc_row.vc_grid-gutter-15px .vc_grid-item {
  padding-right: 15px;
  padding-bottom: 15px;
}
.vc_grid.vc_row.vc_grid-gutter-20px {
  margin-bottom: -20px;
}
.vc_grid.vc_row.vc_grid-gutter-20px .vc_pageable-slide-wrapper {
  margin-right: -20px;
}
.vc_grid.vc_row.vc_grid-gutter-20px .vc_grid-item {
  padding-right: 20px;
  padding-bottom: 20px;
}
.vc_grid.vc_row.vc_grid-gutter-25px {
  margin-bottom: -25px;
}
.vc_grid.vc_row.vc_grid-gutter-25px .vc_pageable-slide-wrapper {
  margin-right: -25px;
}
.vc_grid.vc_row.vc_grid-gutter-25px .vc_grid-item {
  padding-right: 25px;
  padding-bottom: 25px;
}
.vc_grid.vc_row.vc_grid-gutter-30px {
  margin-bottom: -30px;
}
.vc_grid.vc_row.vc_grid-gutter-30px .vc_pageable-slide-wrapper {
  margin-right: -30px;
}
.vc_grid.vc_row.vc_grid-gutter-30px .vc_grid-item {
  padding-right: 30px;
  padding-bottom: 30px;
}
.vc_grid.vc_row.vc_grid-gutter-35px {
  margin-bottom: -35px;
}
.vc_grid.vc_row.vc_grid-gutter-35px .vc_pageable-slide-wrapper {
  margin-right: -35px;
}
.vc_grid.vc_row.vc_grid-gutter-35px .vc_grid-item {
  padding-right: 35px;
  padding-bottom: 35px;
}
.vc_grid.vc_row .vc_pageable-slide-wrapper .vc_grid-item.vc_visible-item:hover {
  z-index: 3;
}
.vc_grid.vc_row .vc_grid-item {
  display: none;
  padding: 0;
  vertical-align: top;
  float: none;
  box-sizing: border-box;
  z-index: 1;
}
.vc_grid.vc_row .vc_grid-item .vc_grid-item-mini .vc_grid-item-content {
  overflow: hidden;
}
.vc_grid.vc_row .vc_grid-item .wpb_content_element,
.vc_grid.vc_row .vc_grid-item .vc_icon_element,
.vc_grid.vc_row .vc_grid-item .vc_btn {
  margin-bottom: 15px;
}
.vc_grid.vc_row .vc_grid-item .wpb_content_element a,
.vc_grid.vc_row .vc_grid-item .vc_icon_element a,
.vc_grid.vc_row .vc_grid-item .vc_btn a {
  text-decoration: none;
  border-bottom: 0;
}
.vc_grid .vc_gitem-link {
  border-bottom: none;
  outline: none;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
}
.vc_masonry_grid .vc_grid.vc_row .vc_grid-item,
.vc_masonry_media_grid .vc_grid.vc_row .vc_grid-item {
  position: static;
}
.vc_masonry_grid .vc_grid.vc_row .vc_grid-item.vc_visible-item,
.vc_masonry_media_grid .vc_grid.vc_row .vc_grid-item.vc_visible-item {
  display: block;
}
.vc_basic_grid .vc_grid.vc_row .vc_grid-item.vc_visible-item,
.vc_media_grid .vc_grid.vc_row .vc_grid-item.vc_visible-item {
  display: block;
}
@media (min-width: 768px) {
  .vc_basic_grid .vc_grid.vc_row .vc_grid-item.vc_visible-item,
  .vc_media_grid .vc_grid.vc_row .vc_grid-item.vc_visible-item {
    display: inline-block;
  }
}
@-moz-document url-prefix() {
  .vc_masonry_grid .vc_grid-item,
  .vc_masonry_media_grid .vc_grid-item {
    margin-left: -0.01px;
  }
}
.vc_gitem-zone-b {
  display: none;
}
.vc_gitem-float-none {
  float: none;
}
.vc_gitem-float-left {
  float: left;
}
.vc_gitem-float-right {
  float: right;
}
.vc_gitem-align-center {
  text-align: center;
}
.vc_gitem-align-right {
  text-align: right;
}
.vc_gitem-align-justify {
  text-align: justify;
}
.vc_gitem-block {
  position: relative;
  overflow: hidden;
}
.vc_gitem-is-link {
  cursor: pointer;
}
.vc_gitem-link {
  text-decoration: none;
}
.vc_gitem_row {
  margin-left: 0;
  margin-right: 0;
  margin-bottom: 0px;
  padding: inherit;
  box-sizing: border-box;
}
.vc_gitem_row .vc_gitem_row {
  margin-bottom: 0px;
}
.vc_gitem-zone-a .vc_gitem-row-position-top,
.vc_gitem-zone-b .vc_gitem-row-position-top {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
}
.vc_gitem-zone-a .vc_gitem-row-position-middle,
.vc_gitem-zone-b .vc_gitem-row-position-middle {
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  -webkit-transform: translate(0, -50%);
  -ms-transform: translate(0, -50%);
  -o-transform: translate(0, -50%);
  transform: translate(0, -50%);
}
.vc_gitem-zone-a .vc_gitem-row-position-bottom,
.vc_gitem-zone-b .vc_gitem-row-position-bottom {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
.vc_gitem_row .vc_gitem-col {
  box-sizing: border-box;
  padding: 10px;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;
}
.vc_gitem-zone {
  position: relative;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;
  background-clip: border-box;
  box-sizing: border-box;
  overflow: hidden;
}
.vc_gitem-zone .vc-zone-link {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 5;
}
.vc_gitem-zone-img {
  width: 100%;
  display: block;
  visibility: hidden;
  height: auto;
}
.vc_gitem-zone-a .vc_gitem-zone-mini {
  box-sizing: border-box;
  padding: inherit;
  position: static;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.vc_gitem-zone-b {
  overflow: hidden;
}
.vc_gitem-zone-b .vc_gitem-zone-mini {
  position: static;
  padding: inherit;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0;
}
.vc_grid-item-zone-c-left .vc_gitem-animated-block {
  float: right;
  width: 50%;
}
.vc_grid-item-zone-c-left .vc_gitem-zone-c {
  float: left;
  width: 50%;
}
.vc_grid-item-zone-c-right .vc_gitem-animated-block {
  float: left;
  width: 50%;
}
.vc_grid-item-zone-c-right .vc_gitem-zone-c {
  float: right;
  width: 50%;
}
.vc-gitem-zone-height-mode-auto .vc_gitem-zone-img {
  display: none !important;
}
.vc-gitem-zone-height-mode-auto:before {
  content: "";
  display: block;
  padding-top: 100%;
}
.vc-gitem-zone-height-mode-auto.vc-gitem-zone-height-mode-auto-4-3:before {
  padding-top: 75%;
}
.vc-gitem-zone-height-mode-auto.vc-gitem-zone-height-mode-auto-3-4:before {
  padding-top: 133.33333333%;
}
.vc-gitem-zone-height-mode-auto.vc-gitem-zone-height-mode-auto-3-4:before {
  padding-top: 133.33333333%;
}
.vc-gitem-zone-height-mode-auto.vc-gitem-zone-height-mode-auto-16-9:before {
  padding-top: 56.25%;
}
.vc-gitem-zone-height-mode-auto.vc-gitem-zone-height-mode-auto-9-16:before {
  padding-top: 177.77777778%;
}
.vc_gitem-animated-block {
  position: relative;
}
.vc_gitem-animate .vc_btn {
  -webkit-transition: all 0s ease;
  -o-transition: all 0s ease;
  transition: all 0s ease;
}
.vc_gitem-animate .vc_gitem-zone-b {
  z-index: 199;
}
.vc_gitem-animate-none .vc_gitem-zone-b {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: 0;
  opacity: 0;
  filter: alpha(opacity=0);
  box-sizing: border-box;
}
.vc_grid-item-mini.vc_is-hover .vc_gitem-animate-none .vc_gitem-zone-b {
  opacity: 1;
  filter: alpha(opacity=100);
}
.vc_gitem-animate-fadeIn .vc_gitem-zone-b,
.vc_gitem-animate-scaleIn .vc_gitem-zone-b,
.vc_gitem-animate-scaleRotateIn .vc_gitem-zone-b,
.vc_gitem-animate-blurOut .vc_gitem-zone-b,
.vc_gitem-animate-blurScaleOut .vc_gitem-zone-b {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: 0;
  opacity: 0;
  filter: alpha(opacity=0);
  -webkit-transition: all 1s ease;
  -o-transition: all 1s ease;
  transition: all 1s ease;
  box-sizing: border-box;
}
.vc_gitem-animate-fadeIn .vc_gitem-zone-b .vc_separator,
.vc_gitem-animate-scaleIn .vc_gitem-zone-b .vc_separator,
.vc_gitem-animate-scaleRotateIn .vc_gitem-zone-b .vc_separator,
.vc_gitem-animate-blurOut .vc_gitem-zone-b .vc_separator,
.vc_gitem-animate-blurScaleOut .vc_gitem-zone-b .vc_separator {
  -webkit-transition: all 1s ease;
  -o-transition: all 1s ease;
  transition: all 1s ease;
  width: 0;
}
.vc_gitem-animate-fadeIn .vc_gitem-zone-b .vc_btn,
.vc_gitem-animate-scaleIn .vc_gitem-zone-b .vc_btn,
.vc_gitem-animate-scaleRotateIn .vc_gitem-zone-b .vc_btn,
.vc_gitem-animate-blurOut .vc_gitem-zone-b .vc_btn,
.vc_gitem-animate-blurScaleOut .vc_gitem-zone-b .vc_btn {
  -webkit-transition: all 1s ease;
  -o-transition: all 1s ease;
  transition: all 1s ease;
  -webkit-transform: scale(0);
  -ms-transform: scale(0);
  -o-transform: scale(0);
  transform: scale(0);
}
.vc_gitem-animate-fadeIn .vc_gitem-zone-b .vc_post-title,
.vc_gitem-animate-scaleIn .vc_gitem-zone-b .vc_post-title,
.vc_gitem-animate-scaleRotateIn .vc_gitem-zone-b .vc_post-title,
.vc_gitem-animate-blurOut .vc_gitem-zone-b .vc_post-title,
.vc_gitem-animate-blurScaleOut .vc_gitem-zone-b .vc_post-title {
  display: inline-block;
  opacity: 0;
  filter: alpha(opacity=0);
  -webkit-transform: translate3d(0, -100%, 0);
  transform: translate3d(0, -100%, 0);
  -webkit-perspective: 1000;
  -webkit-backface-visibility: hidden;
  -webkit-transition: -webkit-transform 1s cubic-bezier(0, 0.275, 0.125, 1), opacity 0.5s cubic-bezier(0, 0.275, 0.125, 1);
  -moz-transition: -moz-transform 1s cubic-bezier(0, 0.275, 0.125, 1), opacity 0.5s cubic-bezier(0, 0.275, 0.125, 1);
  transition: transform 1s cubic-bezier(0, 0.275, 0.125, 1), opacity 0.5s cubic-bezier(0, 0.275, 0.125, 1);
}
.vc_grid-item-mini.vc_is-hover .vc_gitem-animate-fadeIn .vc_gitem-zone-b .vc_post-title,
.vc_grid-item-mini.vc_is-hover .vc_gitem-animate-scaleIn .vc_gitem-zone-b .vc_post-title,
.vc_grid-item-mini.vc_is-hover .vc_gitem-animate-scaleRotateIn .vc_gitem-zone-b .vc_post-title,
.vc_grid-item-mini.vc_is-hover .vc_gitem-animate-blurOut .vc_gitem-zone-b .vc_post-title,
.vc_grid-item-mini.vc_is-hover .vc_gitem-animate-blurScaleOut .vc_gitem-zone-b .vc_post-title {
  opacity: 1;
  filter: alpha(opacity=100);
}
.vc_grid-item-mini.vc_is-hover .vc_gitem-animate-fadeIn .vc_gitem-zone-b .vc_post-title .vc_separator,
.vc_grid-item-mini.vc_is-hover .vc_gitem-animate-scaleIn .vc_gitem-zone-b .vc_post-title .vc_separator,
.vc_grid-item-mini.vc_is-hover .vc_gitem-animate-scaleRotateIn .vc_gitem-zone-b .vc_post-title .vc_separator,
.vc_grid-item-mini.vc_is-hover .vc_gitem-animate-blurOut .vc_gitem-zone-b .vc_post-title .vc_separator,
.vc_grid-item-mini.vc_is-hover .vc_gitem-animate-blurScaleOut .vc_gitem-zone-b .vc_post-title .vc_separator {
  -webkit-transition: all 1s ease;
  -o-transition: all 1s ease;
  transition: all 1s ease;
  width: 50%;
}
.vc_grid-item-mini.vc_is-hover .vc_gitem-animate-fadeIn .vc_gitem-zone-b .vc_post-title .vc_btn,
.vc_grid-item-mini.vc_is-hover .vc_gitem-animate-scaleIn .vc_gitem-zone-b .vc_post-title .vc_btn,
.vc_grid-item-mini.vc_is-hover .vc_gitem-animate-scaleRotateIn .vc_gitem-zone-b .vc_post-title .vc_btn,
.vc_grid-item-mini.vc_is-hover .vc_gitem-animate-blurOut .vc_gitem-zone-b .vc_post-title .vc_btn,
.vc_grid-item-mini.vc_is-hover .vc_gitem-animate-blurScaleOut .vc_gitem-zone-b .vc_post-title .vc_btn {
  -webkit-transition: all 1s ease;
  -o-transition: all 1s ease;
  transition: all 1s ease;
  -webkit-transform: scale(1);
  -ms-transform: scale(1);
  -o-transform: scale(1);
  transform: scale(1);
}
.vc_grid-item-mini.vc_is-hover .vc_gitem-animate-fadeIn .vc_gitem-zone-b .vc_post-title .vc_post-title,
.vc_grid-item-mini.vc_is-hover .vc_gitem-animate-scaleIn .vc_gitem-zone-b .vc_post-title .vc_post-title,
.vc_grid-item-mini.vc_is-hover .vc_gitem-animate-scaleRotateIn .vc_gitem-zone-b .vc_post-title .vc_post-title,
.vc_grid-item-mini.vc_is-hover .vc_gitem-animate-blurOut .vc_gitem-zone-b .vc_post-title .vc_post-title,
.vc_grid-item-mini.vc_is-hover .vc_gitem-animate-blurScaleOut .vc_gitem-zone-b .vc_post-title .vc_post-title {
  opacity: 1;
  filter: alpha(opacity=100);
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}
.vc_grid-item-mini.vc_is-hover .vc_gitem-animate-fadeIn .vc_gitem-zone-b,
.vc_grid-item-mini.vc_is-hover .vc_gitem-animate-scaleIn .vc_gitem-zone-b,
.vc_grid-item-mini.vc_is-hover .vc_gitem-animate-scaleRotateIn .vc_gitem-zone-b,
.vc_grid-item-mini.vc_is-hover .vc_gitem-animate-blurOut .vc_gitem-zone-b,
.vc_grid-item-mini.vc_is-hover .vc_gitem-animate-blurScaleOut .vc_gitem-zone-b {
  opacity: 1;
  filter: alpha(opacity=100);
}
.vc_grid-item-mini.vc_is-hover .vc_gitem-animate-fadeIn .vc_gitem-zone-b .vc_separator,
.vc_grid-item-mini.vc_is-hover .vc_gitem-animate-scaleIn .vc_gitem-zone-b .vc_separator,
.vc_grid-item-mini.vc_is-hover .vc_gitem-animate-scaleRotateIn .vc_gitem-zone-b .vc_separator,
.vc_grid-item-mini.vc_is-hover .vc_gitem-animate-blurOut .vc_gitem-zone-b .vc_separator,
.vc_grid-item-mini.vc_is-hover .vc_gitem-animate-blurScaleOut .vc_gitem-zone-b .vc_separator {
  -webkit-transition: all 1s ease;
  -o-transition: all 1s ease;
  transition: all 1s ease;
  width: 50%;
}
.vc_grid-item-mini.vc_is-hover .vc_gitem-animate-fadeIn .vc_gitem-zone-b .vc_btn,
.vc_grid-item-mini.vc_is-hover .vc_gitem-animate-scaleIn .vc_gitem-zone-b .vc_btn,
.vc_grid-item-mini.vc_is-hover .vc_gitem-animate-scaleRotateIn .vc_gitem-zone-b .vc_btn,
.vc_grid-item-mini.vc_is-hover .vc_gitem-animate-blurOut .vc_gitem-zone-b .vc_btn,
.vc_grid-item-mini.vc_is-hover .vc_gitem-animate-blurScaleOut .vc_gitem-zone-b .vc_btn {
  -webkit-transition: all 1s ease;
  -o-transition: all 1s ease;
  transition: all 1s ease;
  -webkit-transform: scale(1);
  -ms-transform: scale(1);
  -o-transform: scale(1);
  transform: scale(1);
}
.vc_grid-item-mini.vc_is-hover .vc_gitem-animate-fadeIn .vc_gitem-zone-b .vc_post-title,
.vc_grid-item-mini.vc_is-hover .vc_gitem-animate-scaleIn .vc_gitem-zone-b .vc_post-title,
.vc_grid-item-mini.vc_is-hover .vc_gitem-animate-scaleRotateIn .vc_gitem-zone-b .vc_post-title,
.vc_grid-item-mini.vc_is-hover .vc_gitem-animate-blurOut .vc_gitem-zone-b .vc_post-title,
.vc_grid-item-mini.vc_is-hover .vc_gitem-animate-blurScaleOut .vc_gitem-zone-b .vc_post-title {
  opacity: 1;
  filter: alpha(opacity=100);
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}
.vc_gitem-animate-scaleIn {
  overflow: hidden;
}
.vc_gitem-animate-scaleIn .vc_gitem-zone-a {
  -webkit-transform: scale(1);
  -ms-transform: scale(1);
  -o-transform: scale(1);
  transform: scale(1);
  -webkit-transition: -webkit-transform 0.3s ease-in-out;
  -moz-transition: -moz-transform 0.3s ease-in-out;
  -o-transition: -o-transform 0.3s ease-in-out;
  transition: transform 0.3s ease-in-out;
}
.vc_grid-item-mini.vc_is-hover .vc_gitem-animate-scaleIn .vc_gitem-zone-a {
  -webkit-transform: scale(1.1);
  -ms-transform: scale(1.1);
  -o-transform: scale(1.1);
  transform: scale(1.1);
}
.vc_gitem-animate-scaleRotateIn {
  overflow: hidden;
}
.vc_gitem-animate-scaleRotateIn .vc_gitem-zone-a {
  -webkit-transform: scale(1);
  -ms-transform: scale(1);
  -o-transform: scale(1);
  transform: scale(1);
  -webkit-transition: -webkit-transform 0.3s ease-in-out;
  -moz-transition: -moz-transform 0.3s ease-in-out;
  -o-transition: -o-transform 0.3s ease-in-out;
  transition: transform 0.3s ease-in-out;
}
.vc_grid-item-mini.vc_is-hover .vc_gitem-animate-scaleRotateIn .vc_gitem-zone-a {
  -webkit-transform: scale(1.5) rotate(10deg);
  -moz-transform: scale(1.5) rotate(10deg);
  -ms-transform: scale(1.5) rotate(10deg);
  -o-transform: scale(1.5) rotate(10deg);
  transform: scale(1.5) rotate(10deg);
}
.vc_gitem-animate-blurOut .vc_gitem-zone-a,
.vc_gitem-animate-blurScaleOut .vc_gitem-zone-a {
  filter: blur(0px);
  -webkit-filter: blur(0px);
  -moz-filter: blur(0px);
  -ms-filter: blur(0px);
  filter: progid:DXImageTransform.Microsoft.Blur(PixelRadius='0');
  -webkit-transform-origin: 50% 50%;
  -moz-transform-origin: 50% 50%;
  -ms-transform-origin: 50% 50%;
  transform-origin: 50% 50%;
  -webkit-perspective: 1000;
  -webkit-backface-visibility: hidden;
  webkit-transition: filter 0.5s cubic-bezier(0, 0.275, 0.125, 1), -webkit-transform 0.5s cubic-bezier(0, 0.275, 0.125, 1);
  -moz-transition: filter 0.5s cubic-bezier(0, 0.275, 0.125, 1), -moz-transform 0.5s cubic-bezier(0, 0.275, 0.125, 1);
  transition: filter 0.5s cubic-bezier(0, 0.275, 0.125, 1), transform 0.5s cubic-bezier(0, 0.275, 0.125, 1);
}
.vc_grid-item-mini.vc_is-hover .vc_gitem-animate-blurOut .vc_gitem-zone-a,
.vc_grid-item-mini.vc_is-hover .vc_gitem-animate-blurScaleOut .vc_gitem-zone-a {
  filter: url('//app.ieee.org/wp-content/plugins/visual-composer/assets/vc/blur.svg#blur');
  -webkit-filter: blur(2px);
  -moz-filter: blur(2px);
  -ms-filter: blur(2px);
  filter: blur(2px);
  filter: progid:DXImageTransform.Microsoft.Blur(PixelRadius='0');
}
.vc_gitem-animate-blurScaleOut {
  overflow: hidden;
}
.vc_gitem-animate-blurScaleOut .vc_gitem-zone-a {
  -webkit-transform: scale(1.1);
  -ms-transform: scale(1.1);
  -o-transform: scale(1.1);
  transform: scale(1.1);
}
.vc_grid-item-mini.vc_is-hover .vc_gitem-animate-blurScaleOut .vc_gitem-zone-a {
  -webkit-transform: scale(1);
  -ms-transform: scale(1);
  -o-transform: scale(1);
  transform: scale(1);
}
.vc_gitem-animate-slideInRight {
  overflow: hidden;
}
.vc_gitem-animate-slideInRight .vc_gitem-zone-b {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0;
  opacity: 0;
  filter: alpha(opacity=0);
  -webkit-transition: all 1s ease;
  -o-transition: all 1s ease;
  transition: all 1s ease;
  -webkit-transform: translateX(-100%);
  -ms-transform: translateX(-100%);
  -o-transform: translateX(-100%);
  transform: translateX(-100%);
}
.vc_grid-item-mini.vc_is-hover .vc_gitem-animate-slideInRight .vc_gitem-zone-b {
  opacity: 1;
  filter: alpha(opacity=100);
  -webkit-transform: translateX(0);
  -ms-transform: translateX(0);
  -o-transform: translateX(0);
  transform: translateX(0);
}
.vc_gitem-animate-slideInLeft {
  overflow: hidden;
}
.vc_gitem-animate-slideInLeft .vc_gitem-zone-b {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0;
  -webkit-transition: all 1s ease;
  -o-transition: all 1s ease;
  transition: all 1s ease;
  -webkit-transform: translateX(-100%);
  -ms-transform: translateX(-100%);
  -o-transform: translateX(-100%);
  transform: translateX(-100%);
  opacity: 0;
  filter: alpha(opacity=0);
}
.vc_grid-item-mini.vc_is-hover .vc_gitem-animate-slideInLeft .vc_gitem-zone-b {
  opacity: 1;
  filter: alpha(opacity=100);
  -webkit-transform: translateX(0);
  -ms-transform: translateX(0);
  -o-transform: translateX(0);
  transform: translateX(0);
}
.vc_gitem-animate-slideBottom {
  overflow: hidden;
  position: relative;
}
.vc_gitem-animate-slideBottom .vc_gitem-zone-b {
  display: block;
  -webkit-transition: all 1s ease;
  -o-transition: all 1s ease;
  transition: all 1s ease;
  z-index: 1000;
  position: absolute;
  top: 100%;
  height: 100%;
  left: 0;
  right: 0;
  margin: 0;
}
.vc_grid-item-mini.vc_is-hover .vc_gitem-animate-slideBottom .vc_gitem-zone-b {
  top: 0;
}
.vc_gitem-animate-slideTop {
  overflow: hidden;
  position: relative;
}
.vc_gitem-animate-slideTop .vc_gitem-zone-b {
  display: block;
  -webkit-transition: all 1s ease;
  -o-transition: all 1s ease;
  transition: all 1s ease;
  z-index: 1000;
  position: absolute;
  top: -100%;
  height: 100%;
  left: 0;
  right: 0;
  margin: 0;
}
.vc_grid-item-mini.vc_is-hover .vc_gitem-animate-slideTop .vc_gitem-zone-b {
  top: 0;
}
.vc_gitem-animate-flipFadeIn {
  overflow: hidden;
}
.vc_gitem-animate-flipFadeIn .vc_gitem-zone-a {
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-transition: -webkit-transform 1s;
  -moz-transition: -moz-transform 1s;
  -o-transition: -o-transform 1s;
  transition: transform 1s;
  -webkit-transform-style: preserve-3d;
  -moz-transform-style: preserve-3d;
  -o-transform-style: preserve-3d;
  transform-style: preserve-3d;
}
.vc_grid-item-mini.vc_is-hover .vc_gitem-animate-flipFadeIn .vc_gitem-zone-a {
  -webkit-transform: rotateX(180deg);
  -ms-transform: rotateX(180deg);
  -o-transform: rotateX(180deg);
  transform: rotateX(180deg);
}
.vc_gitem-animate-flipFadeIn .vc_gitem-zone-b {
  display: block;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  filter: alpha(opacity=0);
  -webkit-transition: all 0.6s ease;
  -o-transition: all 0.6s ease;
  transition: all 0.6s ease;
  -webkit-transform-style: preserve-3d;
  -moz-transform-style: preserve-3d;
  -o-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-transform: rotateX(180deg);
  -ms-transform: rotateX(180deg);
  -o-transform: rotateX(180deg);
  transform: rotateX(180deg);
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  backface-visibility: hidden;
}
.vc_grid-item-mini.vc_is-hover .vc_gitem-animate-flipFadeIn .vc_gitem-zone-b {
  opacity: 1;
  filter: alpha(opacity=100);
  -webkit-transform: rotateX(0deg);
  -ms-transform: rotateX(0deg);
  -o-transform: rotateX(0deg);
  transform: rotateX(0deg);
}
.vc_gitem-animate-flipHorizontalFadeIn {
  overflow: hidden;
}
.vc_gitem-animate-flipHorizontalFadeIn .vc_gitem-zone-a {
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-transition: -webkit-transform 1s;
  -moz-transition: -moz-transform 1s;
  -o-transition: -o-transform 1s;
  transition: transform 1s;
  -webkit-transform-style: preserve-3d;
  -moz-transform-style: preserve-3d;
  -o-transform-style: preserve-3d;
  transform-style: preserve-3d;
}
.vc_grid-item-mini.vc_is-hover .vc_gitem-animate-flipHorizontalFadeIn .vc_gitem-zone-a {
  -webkit-transform: rotateY(180deg);
  -ms-transform: rotateY(180deg);
  -o-transform: rotateY(180deg);
  transform: rotateY(180deg);
}
.vc_gitem-animate-flipHorizontalFadeIn .vc_gitem-zone-b {
  display: block;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  filter: alpha(opacity=0);
  -webkit-transition: all 0.6s ease;
  -o-transition: all 0.6s ease;
  transition: all 0.6s ease;
  -webkit-transform-style: preserve-3d;
  -moz-transform-style: preserve-3d;
  -o-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-transform: rotateY(180deg);
  -ms-transform: rotateY(180deg);
  -o-transform: rotateY(180deg);
  transform: rotateY(180deg);
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  backface-visibility: hidden;
}
.vc_grid-item-mini.vc_is-hover .vc_gitem-animate-flipHorizontalFadeIn .vc_gitem-zone-b {
  opacity: 1;
  filter: alpha(opacity=100);
  -webkit-transform: rotateY(0deg);
  -ms-transform: rotateY(0deg);
  -o-transform: rotateY(0deg);
  transform: rotateY(0deg);
}
.vc_gitem-animate-goTop20 {
  overflow: hidden;
}
.vc_gitem-animate-goTop20 .vc_gitem-zone-a {
  position: relative;
  -webkit-transform: translateY(0);
  -ms-transform: translateY(0);
  -o-transform: translateY(0);
  transform: translateY(0);
  -webkit-transition: -webkit-transform 0.5s ease;
  -moz-transition: -moz-transform 0.5s ease;
  -o-transition: -o-transform 0.5s ease;
  transition: transform 0.5s ease;
}
.vc_grid-item-mini.vc_is-hover .vc_gitem-animate-goTop20 .vc_gitem-zone-a {
  -webkit-transform: translateY(-20%);
  -ms-transform: translateY(-20%);
  -o-transform: translateY(-20%);
  transform: translateY(-20%);
}
.vc_gitem-animate-goTop20 .vc_gitem-zone-b {
  display: block;
  -webkit-transition: bottom 0.5s ease;
  -o-transition: bottom 0.5s ease;
  transition: bottom 0.5s ease;
  bottom: -100%;
  z-index: 1000;
  position: absolute;
  width: 100%;
  margin: 0;
}
.vc_gitem-animate-goTop20 .vc_gitem-zone-b .vc_gitem-zone-mini {
  position: static;
  -webkit-transform: none;
  -ms-transform: none;
  transform: none;
}
.vc_grid-item-mini.vc_is-hover .vc_gitem-animate-goTop20 .vc_gitem-zone-b {
  bottom: 0%;
}
.vc_gitem-animate-goBottom20 {
  overflow: hidden;
}
.vc_gitem-animate-goBottom20 .vc_gitem-zone-a {
  position: relative;
  -webkit-transform: translateY(0);
  -ms-transform: translateY(0);
  transform: translateY(0);
  -webkit-transition: -webkit-transform 0.5s ease;
  -moz-transition: -moz-transform 0.5s ease;
  -o-transition: -o-transform 0.5s ease;
  transition: transform 0.5s ease;
}
.vc_grid-item-mini.vc_is-hover .vc_gitem-animate-goBottom20 .vc_gitem-zone-a {
  -webkit-transform: translateY(20%);
  -ms-transform: translateY(20%);
  transform: translateY(20%);
}
.vc_gitem-animate-goBottom20 .vc_gitem-zone-b {
  display: block;
  -webkit-transition: top 0.5s ease;
  -o-transition: top 0.5s ease;
  transition: top 0.5s ease;
  top: -100%;
  z-index: 1000;
  position: absolute;
  width: 100%;
  margin: 0;
}
.vc_gitem-animate-goBottom20 .vc_gitem-zone-b .vc_gitem-zone-mini {
  position: static;
  -webkit-transform: none;
  -ms-transform: none;
  transform: none;
}
.vc_grid-item-mini.vc_is-hover .vc_gitem-animate-goBottom20 .vc_gitem-zone-b {
  top: 0%;
}
.vc_gitem-post-data {
  margin-bottom: 15px;
}
.vc_gitem-post-data h2 {
  margin: 0;
}
.vc_gitem-post-category-name .vc_gitem-link {
  color: inherit;
}
.vc_grid .vc_pageable-load-more-btn {
  text-align: center;
  margin-top: 25px;
}
.vc_grid .vc_pageable-load-more-btn > .vc_btn {
  outline: none;
}
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots {
  display: none;
  margin-top: 20px;
  text-align: center;
  -webkit-tap-highlight-color: transparent;
}
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots .vc_grid-owl-dot {
  cursor: pointer;
  display: inline-block;
}
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots .vc_grid-owl-dot span {
  width: 10px;
  height: 10px;
  margin: 5px 7px;
  display: block;
  -webkit-backface-visibility: visible;
  -webkit-transition: opacity 200ms ease;
  -o-transition: opacity 200ms ease;
  transition: opacity 200ms ease;
}
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-square_dots {
  display: block;
}
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-square_dots .vc_grid-owl-dot span {
  border: 3px solid;
  -webkit-transition: background-color 200ms ease;
  -o-transition: background-color 200ms ease;
  transition: background-color 200ms ease;
}
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-radio_dots {
  display: block;
}
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-radio_dots .vc_grid-owl-dot span {
  border: 3px solid;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 10px;
  -webkit-transition: background-color 200ms ease;
  -o-transition: background-color 200ms ease;
  transition: background-color 200ms ease;
}
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-point_dots {
  display: block;
}
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-point_dots .vc_grid-owl-dot span {
  -webkit-border-radius: 30px;
  -moz-border-radius: 30px;
  border-radius: 30px;
  opacity: 0.6;
  filter: alpha(opacity=60);
}
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-point_dots .vc_grid-owl-dot.active span,
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-point_dots .vc_grid-owl-dot:hover span {
  opacity: 1;
  filter: alpha(opacity=100);
}
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-fill_square_dots {
  display: block;
}
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-fill_square_dots .vc_grid-owl-dot span {
  width: 10px;
  height: 10px;
  margin: 5px 7px;
  display: block;
  -webkit-backface-visibility: visible;
  -webkit-transition: opacity 200ms ease;
  -o-transition: opacity 200ms ease;
  transition: opacity 200ms ease;
}
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-fill_square_dots .vc_grid-owl-dot span {
  opacity: 0.6;
  filter: alpha(opacity=60);
}
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-fill_square_dots .vc_grid-owl-dot.active span,
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-fill_square_dots .vc_grid-owl-dot:hover span {
  opacity: 1;
  filter: alpha(opacity=100);
}
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-round_fill_square_dots {
  display: block;
}
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-round_fill_square_dots .vc_grid-owl-dot span {
  width: 10px;
  height: 10px;
  margin: 5px 7px;
  display: block;
  -webkit-backface-visibility: visible;
  -webkit-transition: opacity 200ms ease;
  -o-transition: opacity 200ms ease;
  transition: opacity 200ms ease;
}
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-round_fill_square_dots .vc_grid-owl-dot span {
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
  opacity: 0.6;
  filter: alpha(opacity=60);
}
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-round_fill_square_dots .vc_grid-owl-dot.active span,
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-round_fill_square_dots .vc_grid-owl-dot:hover span {
  opacity: 1;
  filter: alpha(opacity=100);
}
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-square_dots.vc_grid-owl-dots-color-blue .vc_grid-owl-dot span,
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-radio_dots.vc_grid-owl-dots-color-blue .vc_grid-owl-dot span {
  border-color: #5472D2 !important;
}
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-square_dots.vc_grid-owl-dots-color-blue .vc_grid-owl-dot:hover span,
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-radio_dots.vc_grid-owl-dots-color-blue .vc_grid-owl-dot:hover span,
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-square_dots.vc_grid-owl-dots-color-blue .vc_grid-owl-dot.active span,
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-radio_dots.vc_grid-owl-dots-color-blue .vc_grid-owl-dot.active span {
  background-color: #5472D2 !important;
  border-color: #5472D2 !important;
}
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-square_dots.vc_grid-owl-dots-color-turquoise .vc_grid-owl-dot span,
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-radio_dots.vc_grid-owl-dots-color-turquoise .vc_grid-owl-dot span {
  border-color: #00C1CF !important;
}
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-square_dots.vc_grid-owl-dots-color-turquoise .vc_grid-owl-dot:hover span,
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-radio_dots.vc_grid-owl-dots-color-turquoise .vc_grid-owl-dot:hover span,
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-square_dots.vc_grid-owl-dots-color-turquoise .vc_grid-owl-dot.active span,
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-radio_dots.vc_grid-owl-dots-color-turquoise .vc_grid-owl-dot.active span {
  background-color: #00C1CF !important;
  border-color: #00C1CF !important;
}
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-square_dots.vc_grid-owl-dots-color-pink .vc_grid-owl-dot span,
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-radio_dots.vc_grid-owl-dots-color-pink .vc_grid-owl-dot span {
  border-color: #FE6C61 !important;
}
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-square_dots.vc_grid-owl-dots-color-pink .vc_grid-owl-dot:hover span,
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-radio_dots.vc_grid-owl-dots-color-pink .vc_grid-owl-dot:hover span,
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-square_dots.vc_grid-owl-dots-color-pink .vc_grid-owl-dot.active span,
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-radio_dots.vc_grid-owl-dots-color-pink .vc_grid-owl-dot.active span {
  background-color: #FE6C61 !important;
  border-color: #FE6C61 !important;
}
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-square_dots.vc_grid-owl-dots-color-violet .vc_grid-owl-dot span,
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-radio_dots.vc_grid-owl-dots-color-violet .vc_grid-owl-dot span {
  border-color: #8D6DC4 !important;
}
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-square_dots.vc_grid-owl-dots-color-violet .vc_grid-owl-dot:hover span,
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-radio_dots.vc_grid-owl-dots-color-violet .vc_grid-owl-dot:hover span,
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-square_dots.vc_grid-owl-dots-color-violet .vc_grid-owl-dot.active span,
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-radio_dots.vc_grid-owl-dots-color-violet .vc_grid-owl-dot.active span {
  background-color: #8D6DC4 !important;
  border-color: #8D6DC4 !important;
}
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-square_dots.vc_grid-owl-dots-color-peacoc .vc_grid-owl-dot span,
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-radio_dots.vc_grid-owl-dots-color-peacoc .vc_grid-owl-dot span {
  border-color: #4CADC9 !important;
}
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-square_dots.vc_grid-owl-dots-color-peacoc .vc_grid-owl-dot:hover span,
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-radio_dots.vc_grid-owl-dots-color-peacoc .vc_grid-owl-dot:hover span,
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-square_dots.vc_grid-owl-dots-color-peacoc .vc_grid-owl-dot.active span,
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-radio_dots.vc_grid-owl-dots-color-peacoc .vc_grid-owl-dot.active span {
  background-color: #4CADC9 !important;
  border-color: #4CADC9 !important;
}
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-square_dots.vc_grid-owl-dots-color-chino .vc_grid-owl-dot span,
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-radio_dots.vc_grid-owl-dots-color-chino .vc_grid-owl-dot span {
  border-color: #CEC2AB !important;
}
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-square_dots.vc_grid-owl-dots-color-chino .vc_grid-owl-dot:hover span,
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-radio_dots.vc_grid-owl-dots-color-chino .vc_grid-owl-dot:hover span,
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-square_dots.vc_grid-owl-dots-color-chino .vc_grid-owl-dot.active span,
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-radio_dots.vc_grid-owl-dots-color-chino .vc_grid-owl-dot.active span {
  background-color: #CEC2AB !important;
  border-color: #CEC2AB !important;
}
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-square_dots.vc_grid-owl-dots-color-mulled_wine .vc_grid-owl-dot span,
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-radio_dots.vc_grid-owl-dots-color-mulled_wine .vc_grid-owl-dot span {
  border-color: #50485B !important;
}
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-square_dots.vc_grid-owl-dots-color-mulled_wine .vc_grid-owl-dot:hover span,
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-radio_dots.vc_grid-owl-dots-color-mulled_wine .vc_grid-owl-dot:hover span,
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-square_dots.vc_grid-owl-dots-color-mulled_wine .vc_grid-owl-dot.active span,
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-radio_dots.vc_grid-owl-dots-color-mulled_wine .vc_grid-owl-dot.active span {
  background-color: #50485B !important;
  border-color: #50485B !important;
}
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-square_dots.vc_grid-owl-dots-color-vista_blue .vc_grid-owl-dot span,
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-radio_dots.vc_grid-owl-dots-color-vista_blue .vc_grid-owl-dot span {
  border-color: #75D69C !important;
}
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-square_dots.vc_grid-owl-dots-color-vista_blue .vc_grid-owl-dot:hover span,
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-radio_dots.vc_grid-owl-dots-color-vista_blue .vc_grid-owl-dot:hover span,
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-square_dots.vc_grid-owl-dots-color-vista_blue .vc_grid-owl-dot.active span,
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-radio_dots.vc_grid-owl-dots-color-vista_blue .vc_grid-owl-dot.active span {
  background-color: #75D69C !important;
  border-color: #75D69C !important;
}
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-square_dots.vc_grid-owl-dots-color-black .vc_grid-owl-dot span,
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-radio_dots.vc_grid-owl-dots-color-black .vc_grid-owl-dot span {
  border-color: #2A2A2A !important;
}
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-square_dots.vc_grid-owl-dots-color-black .vc_grid-owl-dot:hover span,
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-radio_dots.vc_grid-owl-dots-color-black .vc_grid-owl-dot:hover span,
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-square_dots.vc_grid-owl-dots-color-black .vc_grid-owl-dot.active span,
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-radio_dots.vc_grid-owl-dots-color-black .vc_grid-owl-dot.active span {
  background-color: #2A2A2A !important;
  border-color: #2A2A2A !important;
}
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-square_dots.vc_grid-owl-dots-color-grey .vc_grid-owl-dot span,
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-radio_dots.vc_grid-owl-dots-color-grey .vc_grid-owl-dot span {
  border-color: #EBEBEB !important;
}
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-square_dots.vc_grid-owl-dots-color-grey .vc_grid-owl-dot:hover span,
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-radio_dots.vc_grid-owl-dots-color-grey .vc_grid-owl-dot:hover span,
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-square_dots.vc_grid-owl-dots-color-grey .vc_grid-owl-dot.active span,
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-radio_dots.vc_grid-owl-dots-color-grey .vc_grid-owl-dot.active span {
  background-color: #EBEBEB !important;
  border-color: #EBEBEB !important;
}
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-square_dots.vc_grid-owl-dots-color-orange .vc_grid-owl-dot span,
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-radio_dots.vc_grid-owl-dots-color-orange .vc_grid-owl-dot span {
  border-color: #F7BE68 !important;
}
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-square_dots.vc_grid-owl-dots-color-orange .vc_grid-owl-dot:hover span,
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-radio_dots.vc_grid-owl-dots-color-orange .vc_grid-owl-dot:hover span,
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-square_dots.vc_grid-owl-dots-color-orange .vc_grid-owl-dot.active span,
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-radio_dots.vc_grid-owl-dots-color-orange .vc_grid-owl-dot.active span {
  background-color: #F7BE68 !important;
  border-color: #F7BE68 !important;
}
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-square_dots.vc_grid-owl-dots-color-sky .vc_grid-owl-dot span,
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-radio_dots.vc_grid-owl-dots-color-sky .vc_grid-owl-dot span {
  border-color: #5AA1E3 !important;
}
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-square_dots.vc_grid-owl-dots-color-sky .vc_grid-owl-dot:hover span,
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-radio_dots.vc_grid-owl-dots-color-sky .vc_grid-owl-dot:hover span,
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-square_dots.vc_grid-owl-dots-color-sky .vc_grid-owl-dot.active span,
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-radio_dots.vc_grid-owl-dots-color-sky .vc_grid-owl-dot.active span {
  background-color: #5AA1E3 !important;
  border-color: #5AA1E3 !important;
}
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-square_dots.vc_grid-owl-dots-color-green .vc_grid-owl-dot span,
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-radio_dots.vc_grid-owl-dots-color-green .vc_grid-owl-dot span {
  border-color: #6DAB3C !important;
}
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-square_dots.vc_grid-owl-dots-color-green .vc_grid-owl-dot:hover span,
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-radio_dots.vc_grid-owl-dots-color-green .vc_grid-owl-dot:hover span,
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-square_dots.vc_grid-owl-dots-color-green .vc_grid-owl-dot.active span,
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-radio_dots.vc_grid-owl-dots-color-green .vc_grid-owl-dot.active span {
  background-color: #6DAB3C !important;
  border-color: #6DAB3C !important;
}
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-square_dots.vc_grid-owl-dots-color-juicy_pink .vc_grid-owl-dot span,
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-radio_dots.vc_grid-owl-dots-color-juicy_pink .vc_grid-owl-dot span {
  border-color: #F4524D !important;
}
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-square_dots.vc_grid-owl-dots-color-juicy_pink .vc_grid-owl-dot:hover span,
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-radio_dots.vc_grid-owl-dots-color-juicy_pink .vc_grid-owl-dot:hover span,
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-square_dots.vc_grid-owl-dots-color-juicy_pink .vc_grid-owl-dot.active span,
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-radio_dots.vc_grid-owl-dots-color-juicy_pink .vc_grid-owl-dot.active span {
  background-color: #F4524D !important;
  border-color: #F4524D !important;
}
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-square_dots.vc_grid-owl-dots-color-sandy_brown .vc_grid-owl-dot span,
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-radio_dots.vc_grid-owl-dots-color-sandy_brown .vc_grid-owl-dot span {
  border-color: #F79468 !important;
}
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-square_dots.vc_grid-owl-dots-color-sandy_brown .vc_grid-owl-dot:hover span,
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-radio_dots.vc_grid-owl-dots-color-sandy_brown .vc_grid-owl-dot:hover span,
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-square_dots.vc_grid-owl-dots-color-sandy_brown .vc_grid-owl-dot.active span,
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-radio_dots.vc_grid-owl-dots-color-sandy_brown .vc_grid-owl-dot.active span {
  background-color: #F79468 !important;
  border-color: #F79468 !important;
}
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-square_dots.vc_grid-owl-dots-color-purple .vc_grid-owl-dot span,
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-radio_dots.vc_grid-owl-dots-color-purple .vc_grid-owl-dot span {
  border-color: #B97EBB !important;
}
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-square_dots.vc_grid-owl-dots-color-purple .vc_grid-owl-dot:hover span,
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-radio_dots.vc_grid-owl-dots-color-purple .vc_grid-owl-dot:hover span,
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-square_dots.vc_grid-owl-dots-color-purple .vc_grid-owl-dot.active span,
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-radio_dots.vc_grid-owl-dots-color-purple .vc_grid-owl-dot.active span {
  background-color: #B97EBB !important;
  border-color: #B97EBB !important;
}
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-square_dots.vc_grid-owl-dots-color-white .vc_grid-owl-dot span,
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-radio_dots.vc_grid-owl-dots-color-white .vc_grid-owl-dot span {
  border-color: #FFFFFF !important;
}
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-square_dots.vc_grid-owl-dots-color-white .vc_grid-owl-dot:hover span,
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-radio_dots.vc_grid-owl-dots-color-white .vc_grid-owl-dot:hover span,
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-square_dots.vc_grid-owl-dots-color-white .vc_grid-owl-dot.active span,
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-radio_dots.vc_grid-owl-dots-color-white .vc_grid-owl-dot.active span {
  background-color: #FFFFFF !important;
  border-color: #FFFFFF !important;
}
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-point_dots.vc_grid-owl-dots-color-blue .vc_grid-owl-dot span,
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-fill_square_dots.vc_grid-owl-dots-color-blue .vc_grid-owl-dot span,
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-round_fill_square_dots.vc_grid-owl-dots-color-blue .vc_grid-owl-dot span {
  background-color: #5472D2 !important;
}
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-point_dots.vc_grid-owl-dots-color-turquoise .vc_grid-owl-dot span,
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-fill_square_dots.vc_grid-owl-dots-color-turquoise .vc_grid-owl-dot span,
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-round_fill_square_dots.vc_grid-owl-dots-color-turquoise .vc_grid-owl-dot span {
  background-color: #00C1CF !important;
}
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-point_dots.vc_grid-owl-dots-color-pink .vc_grid-owl-dot span,
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-fill_square_dots.vc_grid-owl-dots-color-pink .vc_grid-owl-dot span,
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-round_fill_square_dots.vc_grid-owl-dots-color-pink .vc_grid-owl-dot span {
  background-color: #FE6C61 !important;
}
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-point_dots.vc_grid-owl-dots-color-violet .vc_grid-owl-dot span,
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-fill_square_dots.vc_grid-owl-dots-color-violet .vc_grid-owl-dot span,
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-round_fill_square_dots.vc_grid-owl-dots-color-violet .vc_grid-owl-dot span {
  background-color: #8D6DC4 !important;
}
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-point_dots.vc_grid-owl-dots-color-peacoc .vc_grid-owl-dot span,
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-fill_square_dots.vc_grid-owl-dots-color-peacoc .vc_grid-owl-dot span,
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-round_fill_square_dots.vc_grid-owl-dots-color-peacoc .vc_grid-owl-dot span {
  background-color: #4CADC9 !important;
}
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-point_dots.vc_grid-owl-dots-color-chino .vc_grid-owl-dot span,
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-fill_square_dots.vc_grid-owl-dots-color-chino .vc_grid-owl-dot span,
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-round_fill_square_dots.vc_grid-owl-dots-color-chino .vc_grid-owl-dot span {
  background-color: #CEC2AB !important;
}
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-point_dots.vc_grid-owl-dots-color-mulled_wine .vc_grid-owl-dot span,
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-fill_square_dots.vc_grid-owl-dots-color-mulled_wine .vc_grid-owl-dot span,
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-round_fill_square_dots.vc_grid-owl-dots-color-mulled_wine .vc_grid-owl-dot span {
  background-color: #50485B !important;
}
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-point_dots.vc_grid-owl-dots-color-vista_blue .vc_grid-owl-dot span,
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-fill_square_dots.vc_grid-owl-dots-color-vista_blue .vc_grid-owl-dot span,
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-round_fill_square_dots.vc_grid-owl-dots-color-vista_blue .vc_grid-owl-dot span {
  background-color: #75D69C !important;
}
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-point_dots.vc_grid-owl-dots-color-black .vc_grid-owl-dot span,
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-fill_square_dots.vc_grid-owl-dots-color-black .vc_grid-owl-dot span,
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-round_fill_square_dots.vc_grid-owl-dots-color-black .vc_grid-owl-dot span {
  background-color: #2A2A2A !important;
}
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-point_dots.vc_grid-owl-dots-color-grey .vc_grid-owl-dot span,
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-fill_square_dots.vc_grid-owl-dots-color-grey .vc_grid-owl-dot span,
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-round_fill_square_dots.vc_grid-owl-dots-color-grey .vc_grid-owl-dot span {
  background-color: #EBEBEB !important;
}
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-point_dots.vc_grid-owl-dots-color-orange .vc_grid-owl-dot span,
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-fill_square_dots.vc_grid-owl-dots-color-orange .vc_grid-owl-dot span,
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-round_fill_square_dots.vc_grid-owl-dots-color-orange .vc_grid-owl-dot span {
  background-color: #F7BE68 !important;
}
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-point_dots.vc_grid-owl-dots-color-sky .vc_grid-owl-dot span,
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-fill_square_dots.vc_grid-owl-dots-color-sky .vc_grid-owl-dot span,
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-round_fill_square_dots.vc_grid-owl-dots-color-sky .vc_grid-owl-dot span {
  background-color: #5AA1E3 !important;
}
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-point_dots.vc_grid-owl-dots-color-green .vc_grid-owl-dot span,
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-fill_square_dots.vc_grid-owl-dots-color-green .vc_grid-owl-dot span,
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-round_fill_square_dots.vc_grid-owl-dots-color-green .vc_grid-owl-dot span {
  background-color: #6DAB3C !important;
}
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-point_dots.vc_grid-owl-dots-color-juicy_pink .vc_grid-owl-dot span,
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-fill_square_dots.vc_grid-owl-dots-color-juicy_pink .vc_grid-owl-dot span,
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-round_fill_square_dots.vc_grid-owl-dots-color-juicy_pink .vc_grid-owl-dot span {
  background-color: #F4524D !important;
}
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-point_dots.vc_grid-owl-dots-color-sandy_brown .vc_grid-owl-dot span,
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-fill_square_dots.vc_grid-owl-dots-color-sandy_brown .vc_grid-owl-dot span,
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-round_fill_square_dots.vc_grid-owl-dots-color-sandy_brown .vc_grid-owl-dot span {
  background-color: #F79468 !important;
}
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-point_dots.vc_grid-owl-dots-color-purple .vc_grid-owl-dot span,
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-fill_square_dots.vc_grid-owl-dots-color-purple .vc_grid-owl-dot span,
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-round_fill_square_dots.vc_grid-owl-dots-color-purple .vc_grid-owl-dot span {
  background-color: #B97EBB !important;
}
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-point_dots.vc_grid-owl-dots-color-white .vc_grid-owl-dot span,
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-fill_square_dots.vc_grid-owl-dots-color-white .vc_grid-owl-dot span,
.vc_grid.vc_grid-owl-theme .vc_grid-owl-dots.vc_grid-round_fill_square_dots.vc_grid-owl-dots-color-white .vc_grid-owl-dot span {
  background-color: #FFFFFF !important;
}
.vc_grid.vc_grid-owl-theme:hover .vc_grid-owl-nav {
  opacity: 1;
  filter: alpha(opacity=100);
}
.vc_grid.vc_grid-owl-theme .vc_grid-owl-nav {
  cursor: pointer;
  opacity: 0;
  filter: alpha(opacity=0);
  -webkit-transition: opacity 0.3s ease-in 0s;
  -o-transition: opacity 0.3s ease-in 0s;
  transition: opacity 0.3s ease-in 0s;
  -webkit-tap-highlight-color: transparent;
}
.vc_grid.vc_grid-owl-theme .vc_grid-owl-nav .disabled {
  display: none !important;
}
.vc_grid.vc_grid-owl-theme .vc_grid-owl-nav .vc_grid-owl-prev,
.vc_grid.vc_grid-owl-theme .vc_grid-owl-nav .vc_grid-owl-next {
  position: absolute;
  top: 50%;
  margin-top: -12.5px;
  opacity: 0.5;
  filter: alpha(opacity=50);
  font-size: 25px;
  line-height: 25px;
  height: 25px;
  display: inline-block;
  text-decoration: none;
  cursor: pointer;
  -webkit-transition: opacity 0.3s ease-in 0s;
  -o-transition: opacity 0.3s ease-in 0s;
  transition: opacity 0.3s ease-in 0s;
}
.vc_grid.vc_grid-owl-theme .vc_grid-owl-nav .vc_grid-owl-prev:hover,
.vc_grid.vc_grid-owl-theme .vc_grid-owl-nav .vc_grid-owl-next:hover {
  opacity: 1;
  filter: alpha(opacity=100);
}
.vc_grid.vc_grid-owl-theme .vc_grid-owl-nav .vc_grid-owl-prev {
  left: 5px;
}
.vc_grid.vc_grid-owl-theme .vc_grid-owl-nav .vc_grid-owl-prev.vc_grid-nav-prev-outside {
  left: -30px;
}
.vc_grid.vc_grid-owl-theme .vc_grid-owl-nav .vc_grid-owl-next {
  right: 5px;
}
.vc_grid.vc_grid-owl-theme .vc_grid-owl-nav .vc_grid-owl-next.vc_grid-nav-next-outside {
  right: -30px;
}
.vc_grid.vc_grid-owl-theme .vc_grid-owl-nav.vc_grid-owl-nav-color-blue {
  color: #5472D2 !important;
}
.vc_grid.vc_grid-owl-theme .vc_grid-owl-nav.vc_grid-owl-nav-color-turquoise {
  color: #00C1CF !important;
}
.vc_grid.vc_grid-owl-theme .vc_grid-owl-nav.vc_grid-owl-nav-color-pink {
  color: #FE6C61 !important;
}
.vc_grid.vc_grid-owl-theme .vc_grid-owl-nav.vc_grid-owl-nav-color-violet {
  color: #8D6DC4 !important;
}
.vc_grid.vc_grid-owl-theme .vc_grid-owl-nav.vc_grid-owl-nav-color-peacoc {
  color: #4CADC9 !important;
}
.vc_grid.vc_grid-owl-theme .vc_grid-owl-nav.vc_grid-owl-nav-color-chino {
  color: #CEC2AB !important;
}
.vc_grid.vc_grid-owl-theme .vc_grid-owl-nav.vc_grid-owl-nav-color-mulled_wine {
  color: #50485B !important;
}
.vc_grid.vc_grid-owl-theme .vc_grid-owl-nav.vc_grid-owl-nav-color-vista_blue {
  color: #75D69C !important;
}
.vc_grid.vc_grid-owl-theme .vc_grid-owl-nav.vc_grid-owl-nav-color-black {
  color: #2A2A2A !important;
}
.vc_grid.vc_grid-owl-theme .vc_grid-owl-nav.vc_grid-owl-nav-color-grey {
  color: #EBEBEB !important;
}
.vc_grid.vc_grid-owl-theme .vc_grid-owl-nav.vc_grid-owl-nav-color-orange {
  color: #F7BE68 !important;
}
.vc_grid.vc_grid-owl-theme .vc_grid-owl-nav.vc_grid-owl-nav-color-sky {
  color: #5AA1E3 !important;
}
.vc_grid.vc_grid-owl-theme .vc_grid-owl-nav.vc_grid-owl-nav-color-green {
  color: #6DAB3C !important;
}
.vc_grid.vc_grid-owl-theme .vc_grid-owl-nav.vc_grid-owl-nav-color-juicy_pink {
  color: #F4524D !important;
}
.vc_grid.vc_grid-owl-theme .vc_grid-owl-nav.vc_grid-owl-nav-color-sandy_brown {
  color: #F79468 !important;
}
.vc_grid.vc_grid-owl-theme .vc_grid-owl-nav.vc_grid-owl-nav-color-purple {
  color: #B97EBB !important;
}
.vc_grid.vc_grid-owl-theme .vc_grid-owl-nav.vc_grid-owl-nav-color-white {
  color: #FFFFFF !important;
}
.vc_grid.vc_grid-owl-theme.vc_grid-gutter-1px .vc_grid-owl-nav .vc_grid-owl-prev,
.vc_grid.vc_grid-owl-theme.vc_grid-gutter-1px .vc_grid-owl-nav .vc_grid-owl-next {
  margin-top: -13px;
}
.vc_grid.vc_grid-owl-theme.vc_grid-gutter-2px .vc_grid-owl-nav .vc_grid-owl-prev,
.vc_grid.vc_grid-owl-theme.vc_grid-gutter-2px .vc_grid-owl-nav .vc_grid-owl-next {
  margin-top: -13.5px;
}
.vc_grid.vc_grid-owl-theme.vc_grid-gutter-3px .vc_grid-owl-nav .vc_grid-owl-prev,
.vc_grid.vc_grid-owl-theme.vc_grid-gutter-3px .vc_grid-owl-nav .vc_grid-owl-next {
  margin-top: -14px;
}
.vc_grid.vc_grid-owl-theme.vc_grid-gutter-4px .vc_grid-owl-nav .vc_grid-owl-prev,
.vc_grid.vc_grid-owl-theme.vc_grid-gutter-4px .vc_grid-owl-nav .vc_grid-owl-next {
  margin-top: -14.5px;
}
.vc_grid.vc_grid-owl-theme.vc_grid-gutter-5px .vc_grid-owl-nav .vc_grid-owl-prev,
.vc_grid.vc_grid-owl-theme.vc_grid-gutter-5px .vc_grid-owl-nav .vc_grid-owl-next {
  margin-top: -15px;
}
.vc_grid.vc_grid-owl-theme.vc_grid-gutter-10px .vc_grid-owl-nav .vc_grid-owl-prev,
.vc_grid.vc_grid-owl-theme.vc_grid-gutter-10px .vc_grid-owl-nav .vc_grid-owl-next {
  margin-top: -17.5px;
}
.vc_grid.vc_grid-owl-theme.vc_grid-gutter-15px .vc_grid-owl-nav .vc_grid-owl-prev,
.vc_grid.vc_grid-owl-theme.vc_grid-gutter-15px .vc_grid-owl-nav .vc_grid-owl-next {
  margin-top: -20px;
}
.vc_grid.vc_grid-owl-theme.vc_grid-gutter-20px .vc_grid-owl-nav .vc_grid-owl-prev,
.vc_grid.vc_grid-owl-theme.vc_grid-gutter-20px .vc_grid-owl-nav .vc_grid-owl-next {
  margin-top: -22.5px;
}
.vc_grid.vc_grid-owl-theme.vc_grid-gutter-25px .vc_grid-owl-nav .vc_grid-owl-prev,
.vc_grid.vc_grid-owl-theme.vc_grid-gutter-25px .vc_grid-owl-nav .vc_grid-owl-next {
  margin-top: -25px;
}
.vc_grid.vc_grid-owl-theme.vc_grid-gutter-30px .vc_grid-owl-nav .vc_grid-owl-prev,
.vc_grid.vc_grid-owl-theme.vc_grid-gutter-30px .vc_grid-owl-nav .vc_grid-owl-next {
  margin-top: -27.5px;
}
.vc_grid.vc_grid-owl-theme.vc_grid-gutter-35px .vc_grid-owl-nav .vc_grid-owl-prev,
.vc_grid.vc_grid-owl-theme.vc_grid-gutter-35px .vc_grid-owl-nav .vc_grid-owl-next {
  margin-top: -30px;
}
.vc_grid-pagination .vc_grid-pagination-list {
  outline: none;
  display: block;
  padding-left: 0;
  text-align: center;
  margin: 20px 0 0 !important;
  border-radius: 2px;
}
.vc_grid-pagination .vc_grid-pagination-list > li {
  display: inline-block;
  margin: 0;
  border: 0px solid transparent;
}
.vc_grid-pagination .vc_grid-pagination-list > li > a,
.vc_grid-pagination .vc_grid-pagination-list > li > span {
  color: #fff;
  background-color: #428bca;
  border: 1px solid #428bca;
  -webkit-transition: opacity 0.3s ease-in 0s;
  -o-transition: opacity 0.3s ease-in 0s;
  transition: opacity 0.3s ease-in 0s;
  position: relative;
  float: left;
  padding: 3px 10px;
  line-height: 1.42857143;
  text-decoration: none;
  opacity: 0.5;
  filter: alpha(opacity=50);
  margin-left: -1px;
  font-size: 10px;
}
.vc_grid-pagination .vc_grid-pagination-list > li:first-child > a,
.vc_grid-pagination .vc_grid-pagination-list > li:first-child > span {
  margin-left: 0;
}
.vc_grid-pagination .vc_grid-pagination-list > li:hover a,
.vc_grid-pagination .vc_grid-pagination-list > li:focus a,
.vc_grid-pagination .vc_grid-pagination-list > li:hover span,
.vc_grid-pagination .vc_grid-pagination-list > li:focus span {
  opacity: 1;
  filter: alpha(opacity=100);
}
.vc_grid-pagination .vc_grid-pagination-list > .vc_grid-prev > a:after {
  font-family: 'vc_grid_v1';
  display: inline-block;
  content: "\e61b";
}
.vc_grid-pagination .vc_grid-pagination-list > .vc_grid-next > a:after {
  font-family: 'vc_grid_v1';
  display: inline-block;
  content: "\e61a";
}
.vc_grid-pagination .vc_grid-pagination-list > .vc_grid-first > a:after {
  font-family: 'vc_grid_v1';
  display: inline-block;
  content: "\e618";
}
.vc_grid-pagination .vc_grid-pagination-list > .vc_grid-last > a:after {
  font-family: 'vc_grid_v1';
  display: inline-block;
  content: "\e619";
}
.vc_grid-pagination .vc_grid-pagination-list > .vc_grid-active > a,
.vc_grid-pagination .vc_grid-pagination-list > .vc_grid-active > span,
.vc_grid-pagination .vc_grid-pagination-list > .vc_grid-active > a:hover,
.vc_grid-pagination .vc_grid-pagination-list > .vc_grid-active > span:hover,
.vc_grid-pagination .vc_grid-pagination-list > .vc_grid-active > a:focus,
.vc_grid-pagination .vc_grid-pagination-list > .vc_grid-active > span:focus {
  z-index: 2;
  opacity: 1;
  filter: alpha(opacity=100);
  cursor: default;
}
.vc_grid-pagination .vc_grid-pagination-list > .vc_grid-disabled > span,
.vc_grid-pagination .vc_grid-pagination-list > .vc_grid-disabled > span:hover,
.vc_grid-pagination .vc_grid-pagination-list > .vc_grid-disabled > span:focus,
.vc_grid-pagination .vc_grid-pagination-list > .vc_grid-disabled > a,
.vc_grid-pagination .vc_grid-pagination-list > .vc_grid-disabled > a:hover,
.vc_grid-pagination .vc_grid-pagination-list > .vc_grid-disabled > a:focus {
  display: none;
}
.vc_grid-pagination .vc_grid-pagination-list.vc_grid-pagination-color-blue > li {
  border-color: #5472D2 !important;
}
.vc_grid-pagination .vc_grid-pagination-list.vc_grid-pagination-color-blue > li > a,
.vc_grid-pagination .vc_grid-pagination-list.vc_grid-pagination-color-blue > li > span {
  background-color: #5472D2 !important;
  border-color: #5472D2 !important;
  color: #FFFFFF !important;
}
.vc_grid-pagination .vc_grid-pagination-list.vc_grid-pagination-color-turquoise > li {
  border-color: #00C1CF !important;
}
.vc_grid-pagination .vc_grid-pagination-list.vc_grid-pagination-color-turquoise > li > a,
.vc_grid-pagination .vc_grid-pagination-list.vc_grid-pagination-color-turquoise > li > span {
  background-color: #00C1CF !important;
  border-color: #00C1CF !important;
  color: #FFFFFF !important;
}
.vc_grid-pagination .vc_grid-pagination-list.vc_grid-pagination-color-pink > li {
  border-color: #FE6C61 !important;
}
.vc_grid-pagination .vc_grid-pagination-list.vc_grid-pagination-color-pink > li > a,
.vc_grid-pagination .vc_grid-pagination-list.vc_grid-pagination-color-pink > li > span {
  background-color: #FE6C61 !important;
  border-color: #FE6C61 !important;
  color: #FFFFFF !important;
}
.vc_grid-pagination .vc_grid-pagination-list.vc_grid-pagination-color-violet > li {
  border-color: #8D6DC4 !important;
}
.vc_grid-pagination .vc_grid-pagination-list.vc_grid-pagination-color-violet > li > a,
.vc_grid-pagination .vc_grid-pagination-list.vc_grid-pagination-color-violet > li > span {
  background-color: #8D6DC4 !important;
  border-color: #8D6DC4 !important;
  color: #FFFFFF !important;
}
.vc_grid-pagination .vc_grid-pagination-list.vc_grid-pagination-color-peacoc > li {
  border-color: #4CADC9 !important;
}
.vc_grid-pagination .vc_grid-pagination-list.vc_grid-pagination-color-peacoc > li > a,
.vc_grid-pagination .vc_grid-pagination-list.vc_grid-pagination-color-peacoc > li > span {
  background-color: #4CADC9 !important;
  border-color: #4CADC9 !important;
  color: #FFFFFF !important;
}
.vc_grid-pagination .vc_grid-pagination-list.vc_grid-pagination-color-chino > li {
  border-color: #CEC2AB !important;
}
.vc_grid-pagination .vc_grid-pagination-list.vc_grid-pagination-color-chino > li > a,
.vc_grid-pagination .vc_grid-pagination-list.vc_grid-pagination-color-chino > li > span {
  background-color: #CEC2AB !important;
  border-color: #CEC2AB !important;
  color: #FFFFFF !important;
}
.vc_grid-pagination .vc_grid-pagination-list.vc_grid-pagination-color-mulled_wine > li {
  border-color: #50485B !important;
}
.vc_grid-pagination .vc_grid-pagination-list.vc_grid-pagination-color-mulled_wine > li > a,
.vc_grid-pagination .vc_grid-pagination-list.vc_grid-pagination-color-mulled_wine > li > span {
  background-color: #50485B !important;
  border-color: #50485B !important;
  color: #FFFFFF !important;
}
.vc_grid-pagination .vc_grid-pagination-list.vc_grid-pagination-color-vista_blue > li {
  border-color: #75D69C !important;
}
.vc_grid-pagination .vc_grid-pagination-list.vc_grid-pagination-color-vista_blue > li > a,
.vc_grid-pagination .vc_grid-pagination-list.vc_grid-pagination-color-vista_blue > li > span {
  background-color: #75D69C !important;
  border-color: #75D69C !important;
  color: #FFFFFF !important;
}
.vc_grid-pagination .vc_grid-pagination-list.vc_grid-pagination-color-black > li {
  border-color: #2A2A2A !important;
}
.vc_grid-pagination .vc_grid-pagination-list.vc_grid-pagination-color-black > li > a,
.vc_grid-pagination .vc_grid-pagination-list.vc_grid-pagination-color-black > li > span {
  background-color: #2A2A2A !important;
  border-color: #2A2A2A !important;
  color: #FFFFFF !important;
}
.vc_grid-pagination .vc_grid-pagination-list.vc_grid-pagination-color-grey > li {
  border-color: #EBEBEB !important;
}
.vc_grid-pagination .vc_grid-pagination-list.vc_grid-pagination-color-grey > li > a,
.vc_grid-pagination .vc_grid-pagination-list.vc_grid-pagination-color-grey > li > span {
  background-color: #EBEBEB !important;
  border-color: #EBEBEB !important;
  color: #FFFFFF !important;
}
.vc_grid-pagination .vc_grid-pagination-list.vc_grid-pagination-color-orange > li {
  border-color: #F7BE68 !important;
}
.vc_grid-pagination .vc_grid-pagination-list.vc_grid-pagination-color-orange > li > a,
.vc_grid-pagination .vc_grid-pagination-list.vc_grid-pagination-color-orange > li > span {
  background-color: #F7BE68 !important;
  border-color: #F7BE68 !important;
  color: #FFFFFF !important;
}
.vc_grid-pagination .vc_grid-pagination-list.vc_grid-pagination-color-sky > li {
  border-color: #5AA1E3 !important;
}
.vc_grid-pagination .vc_grid-pagination-list.vc_grid-pagination-color-sky > li > a,
.vc_grid-pagination .vc_grid-pagination-list.vc_grid-pagination-color-sky > li > span {
  background-color: #5AA1E3 !important;
  border-color: #5AA1E3 !important;
  color: #FFFFFF !important;
}
.vc_grid-pagination .vc_grid-pagination-list.vc_grid-pagination-color-green > li {
  border-color: #6DAB3C !important;
}
.vc_grid-pagination .vc_grid-pagination-list.vc_grid-pagination-color-green > li > a,
.vc_grid-pagination .vc_grid-pagination-list.vc_grid-pagination-color-green > li > span {
  background-color: #6DAB3C !important;
  border-color: #6DAB3C !important;
  color: #FFFFFF !important;
}
.vc_grid-pagination .vc_grid-pagination-list.vc_grid-pagination-color-juicy_pink > li {
  border-color: #F4524D !important;
}
.vc_grid-pagination .vc_grid-pagination-list.vc_grid-pagination-color-juicy_pink > li > a,
.vc_grid-pagination .vc_grid-pagination-list.vc_grid-pagination-color-juicy_pink > li > span {
  background-color: #F4524D !important;
  border-color: #F4524D !important;
  color: #FFFFFF !important;
}
.vc_grid-pagination .vc_grid-pagination-list.vc_grid-pagination-color-sandy_brown > li {
  border-color: #F79468 !important;
}
.vc_grid-pagination .vc_grid-pagination-list.vc_grid-pagination-color-sandy_brown > li > a,
.vc_grid-pagination .vc_grid-pagination-list.vc_grid-pagination-color-sandy_brown > li > span {
  background-color: #F79468 !important;
  border-color: #F79468 !important;
  color: #FFFFFF !important;
}
.vc_grid-pagination .vc_grid-pagination-list.vc_grid-pagination-color-purple > li {
  border-color: #B97EBB !important;
}
.vc_grid-pagination .vc_grid-pagination-list.vc_grid-pagination-color-purple > li > a,
.vc_grid-pagination .vc_grid-pagination-list.vc_grid-pagination-color-purple > li > span {
  background-color: #B97EBB !important;
  border-color: #B97EBB !important;
  color: #FFFFFF !important;
}
.vc_grid-pagination .vc_grid-pagination-list.vc_grid-pagination-color-white > li {
  border-color: #FFFFFF !important;
}
.vc_grid-pagination .vc_grid-pagination-list.vc_grid-pagination-color-white > li > a,
.vc_grid-pagination .vc_grid-pagination-list.vc_grid-pagination-color-white > li > span {
  background-color: #FFFFFF !important;
  border-color: #FFFFFF !important;
  color: #2A2A2A !important;
}
.vc_grid-pagination .vc_grid-pagination-list.vc_grid-pagination_default > li > a,
.vc_grid-pagination .vc_grid-pagination-list.vc_grid-pagination_default_dark > li > a,
.vc_grid-pagination .vc_grid-pagination-list.vc_grid-pagination_default_light > li > a,
.vc_grid-pagination .vc_grid-pagination-list.vc_grid-pagination_default > li > span,
.vc_grid-pagination .vc_grid-pagination-list.vc_grid-pagination_default_dark > li > span,
.vc_grid-pagination .vc_grid-pagination-list.vc_grid-pagination_default_light > li > span {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  min-width: 28px;
  min-height: 22px;
}
.vc_grid-pagination .vc_grid-pagination-list.vc_grid-pagination_default > li:first-child > a,
.vc_grid-pagination .vc_grid-pagination-list.vc_grid-pagination_default_dark > li:first-child > a,
.vc_grid-pagination .vc_grid-pagination-list.vc_grid-pagination_default_light > li:first-child > a,
.vc_grid-pagination .vc_grid-pagination-list.vc_grid-pagination_default > li:first-child > span,
.vc_grid-pagination .vc_grid-pagination-list.vc_grid-pagination_default_dark > li:first-child > span,
.vc_grid-pagination .vc_grid-pagination-list.vc_grid-pagination_default_light > li:first-child > span {
  border-bottom-left-radius: 2px;
  border-top-left-radius: 2px;
}
.vc_grid-pagination .vc_grid-pagination-list.vc_grid-pagination_default > li:last-child > a,
.vc_grid-pagination .vc_grid-pagination-list.vc_grid-pagination_default_dark > li:last-child > a,
.vc_grid-pagination .vc_grid-pagination-list.vc_grid-pagination_default_light > li:last-child > a,
.vc_grid-pagination .vc_grid-pagination-list.vc_grid-pagination_default > li:last-child > span,
.vc_grid-pagination .vc_grid-pagination-list.vc_grid-pagination_default_dark > li:last-child > span,
.vc_grid-pagination .vc_grid-pagination-list.vc_grid-pagination_default_light > li:last-child > span {
  border-bottom-right-radius: 2px;
  border-top-right-radius: 2px;
}
.vc_grid-pagination .vc_grid-pagination-list.vc_grid-pagination_square > li > a,
.vc_grid-pagination .vc_grid-pagination-list.vc_grid-pagination_square_dark > li > a,
.vc_grid-pagination .vc_grid-pagination-list.vc_grid-pagination_square_light > li > a,
.vc_grid-pagination .vc_grid-pagination-list.vc_grid-pagination_square > li > span,
.vc_grid-pagination .vc_grid-pagination-list.vc_grid-pagination_square_dark > li > span,
.vc_grid-pagination .vc_grid-pagination-list.vc_grid-pagination_square_light > li > span {
  margin-left: 5px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  min-height: 22px;
  min-width: 22px;
  padding: 3px;
}
.vc_grid-pagination .vc_grid-pagination-list.vc_grid-pagination_rounded > li > a,
.vc_grid-pagination .vc_grid-pagination-list.vc_grid-pagination_rounded_dark > li > a,
.vc_grid-pagination .vc_grid-pagination-list.vc_grid-pagination_rounded_light > li > a,
.vc_grid-pagination .vc_grid-pagination-list.vc_grid-pagination_rounded_square > li > a,
.vc_grid-pagination .vc_grid-pagination-list.vc_grid-pagination_rounded_square_dark > li > a,
.vc_grid-pagination .vc_grid-pagination-list.vc_grid-pagination_rounded_square_light > li > a,
.vc_grid-pagination .vc_grid-pagination-list.vc_grid-pagination_rounded > li > span,
.vc_grid-pagination .vc_grid-pagination-list.vc_grid-pagination_rounded_dark > li > span,
.vc_grid-pagination .vc_grid-pagination-list.vc_grid-pagination_rounded_light > li > span,
.vc_grid-pagination .vc_grid-pagination-list.vc_grid-pagination_rounded_square > li > span,
.vc_grid-pagination .vc_grid-pagination-list.vc_grid-pagination_rounded_square_dark > li > span,
.vc_grid-pagination .vc_grid-pagination-list.vc_grid-pagination_rounded_square_light > li > span {
  margin-left: 5px;
  border-radius: 30px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  min-height: 22px;
  min-width: 22px;
  padding: 3px;
}
.vc_grid-pagination .vc_grid-pagination-list.vc_grid-pagination_rounded_square > li > a,
.vc_grid-pagination .vc_grid-pagination-list.vc_grid-pagination_rounded_square_dark > li > a,
.vc_grid-pagination .vc_grid-pagination-list.vc_grid-pagination_rounded_square_light > li > a,
.vc_grid-pagination .vc_grid-pagination-list.vc_grid-pagination_rounded_square > li > span,
.vc_grid-pagination .vc_grid-pagination-list.vc_grid-pagination_rounded_square_dark > li > span,
.vc_grid-pagination .vc_grid-pagination-list.vc_grid-pagination_rounded_square_light > li > span {
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  min-height: 22px;
  min-width: 22px;
  padding: 3px;
}
.vc_grid-pagination .vc_grid-pagination-list.vc_grid-pagination_square_dark > li > a,
.vc_grid-pagination .vc_grid-pagination-list.vc_grid-pagination_default_dark > li > a,
.vc_grid-pagination .vc_grid-pagination-list.vc_grid-pagination_rounded_dark > li > a,
.vc_grid-pagination .vc_grid-pagination-list.vc_grid-pagination_rounded_square_dark > li > a,
.vc_grid-pagination .vc_grid-pagination-list.vc_grid-pagination_square_dark > li > span,
.vc_grid-pagination .vc_grid-pagination-list.vc_grid-pagination_default_dark > li > span,
.vc_grid-pagination .vc_grid-pagination-list.vc_grid-pagination_rounded_dark > li > span,
.vc_grid-pagination .vc_grid-pagination-list.vc_grid-pagination_rounded_square_dark > li > span {
  background-color: transparent !important;
  color: #000 !important;
}
.vc_grid-pagination .vc_grid-pagination-list.vc_grid-pagination_square_light > li > a,
.vc_grid-pagination .vc_grid-pagination-list.vc_grid-pagination_default_light > li > a,
.vc_grid-pagination .vc_grid-pagination-list.vc_grid-pagination_rounded_light > li > a,
.vc_grid-pagination .vc_grid-pagination-list.vc_grid-pagination_rounded_square_light > li > a,
.vc_grid-pagination .vc_grid-pagination-list.vc_grid-pagination_square_light > li > span,
.vc_grid-pagination .vc_grid-pagination-list.vc_grid-pagination_default_light > li > span,
.vc_grid-pagination .vc_grid-pagination-list.vc_grid-pagination_rounded_light > li > span,
.vc_grid-pagination .vc_grid-pagination-list.vc_grid-pagination_rounded_square_light > li > span {
  background-color: transparent !important;
  color: #fff !important;
}
.vc_grid-pagination .vc_grid-pagination-list.vc_grid-pagination_stripes_dark > li,
.vc_grid-pagination .vc_grid-pagination-list.vc_grid-pagination_stripes_light > li {
  border-left-width: 1px !important;
}
.vc_grid-pagination .vc_grid-pagination-list.vc_grid-pagination_stripes_dark > li > a,
.vc_grid-pagination .vc_grid-pagination-list.vc_grid-pagination_stripes_light > li > a {
  border-width: 0;
  background: none repeat scroll 0 0 rgba(0, 0, 0, 0) !important;
}
.vc_grid-pagination .vc_grid-pagination-list.vc_grid-pagination_stripes_dark li.vc_grid-disabled + li,
.vc_grid-pagination .vc_grid-pagination-list.vc_grid-pagination_stripes_light li.vc_grid-disabled + li,
.vc_grid-pagination .vc_grid-pagination-list.vc_grid-pagination_stripes_dark > li:first-child,
.vc_grid-pagination .vc_grid-pagination-list.vc_grid-pagination_stripes_light > li:first-child {
  border-width: 0 !important;
}
.vc_grid-pagination .vc_grid-pagination-list.vc_grid-pagination_stripes_dark > li > a {
  color: #000 !important;
}
.vc_grid-pagination .vc_grid-pagination-list.vc_grid-pagination_stripes_light > li > a {
  color: #fff !important;
}
.vc_grid-loading {
  margin: 2em auto;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  -webkit-animation-delay: 0.16s;
  animation-delay: 0.16s;
  height: 20px;
}
.vc_grid-loading:before,
.vc_grid-loading:after,
.vc_grid-loading {
  border-radius: 50%;
  width: 12px;
  height: 12px;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation: load7 1.8s infinite ease-in-out;
  animation: load7 1.8s infinite ease-in-out;
}
.vc_grid-loading:before {
  left: -20px;
}
.vc_grid-loading:after {
  left: 20px;
  -webkit-animation-delay: 0.32s;
  animation-delay: 0.32s;
}
.vc_grid-loading:before,
.vc_grid-loading:after {
  content: '';
  position: absolute;
  top: 0;
}
@-webkit-keyframes load7 {
  0%,
  80%,
  100% {
    box-shadow: 0 2.5em 0 -1.3em rgba(235, 235, 235, 0.75);
  }
  40% {
    box-shadow: 0 2.5em 0 0 rgba(235, 235, 235, 0.75);
  }
}
@keyframes load7 {
  0%,
  80%,
  100% {
    box-shadow: 0 2.5em 0 -1.3em rgba(235, 235, 235, 0.75);
  }
  40% {
    box-shadow: 0 2.5em 0 0 rgba(235, 235, 235, 0.75);
  }
}
.vc_grid-filter {
  margin-left: 0;
  margin-bottom: 20px;
  list-style: none;
  padding: 0;
}
.vc_grid-filter.vc_grid-filter-center {
  text-align: center;
}
.vc_grid-filter.vc_grid-filter-right {
  text-align: right;
}
.vc_grid-filter.vc_grid-filter-left {
  text-align: left;
}
.vc_grid-filter.vc_grid-filter-color-blue > .vc_grid-filter-item:hover,
.vc_grid-filter.vc_grid-filter-color-blue > .vc_grid-filter-item.vc_active {
  background-color: #5472D2;
}
.vc_grid-filter.vc_grid-filter-color-blue > .vc_grid-filter-item:hover > span,
.vc_grid-filter.vc_grid-filter-color-blue > .vc_grid-filter-item.vc_active > span {
  color: #FFFFFF;
}
.vc_grid-filter.vc_grid-filter-color-turquoise > .vc_grid-filter-item:hover,
.vc_grid-filter.vc_grid-filter-color-turquoise > .vc_grid-filter-item.vc_active {
  background-color: #00C1CF;
}
.vc_grid-filter.vc_grid-filter-color-turquoise > .vc_grid-filter-item:hover > span,
.vc_grid-filter.vc_grid-filter-color-turquoise > .vc_grid-filter-item.vc_active > span {
  color: #FFFFFF;
}
.vc_grid-filter.vc_grid-filter-color-pink > .vc_grid-filter-item:hover,
.vc_grid-filter.vc_grid-filter-color-pink > .vc_grid-filter-item.vc_active {
  background-color: #FE6C61;
}
.vc_grid-filter.vc_grid-filter-color-pink > .vc_grid-filter-item:hover > span,
.vc_grid-filter.vc_grid-filter-color-pink > .vc_grid-filter-item.vc_active > span {
  color: #FFFFFF;
}
.vc_grid-filter.vc_grid-filter-color-violet > .vc_grid-filter-item:hover,
.vc_grid-filter.vc_grid-filter-color-violet > .vc_grid-filter-item.vc_active {
  background-color: #8D6DC4;
}
.vc_grid-filter.vc_grid-filter-color-violet > .vc_grid-filter-item:hover > span,
.vc_grid-filter.vc_grid-filter-color-violet > .vc_grid-filter-item.vc_active > span {
  color: #FFFFFF;
}
.vc_grid-filter.vc_grid-filter-color-peacoc > .vc_grid-filter-item:hover,
.vc_grid-filter.vc_grid-filter-color-peacoc > .vc_grid-filter-item.vc_active {
  background-color: #4CADC9;
}
.vc_grid-filter.vc_grid-filter-color-peacoc > .vc_grid-filter-item:hover > span,
.vc_grid-filter.vc_grid-filter-color-peacoc > .vc_grid-filter-item.vc_active > span {
  color: #FFFFFF;
}
.vc_grid-filter.vc_grid-filter-color-chino > .vc_grid-filter-item:hover,
.vc_grid-filter.vc_grid-filter-color-chino > .vc_grid-filter-item.vc_active {
  background-color: #CEC2AB;
}
.vc_grid-filter.vc_grid-filter-color-chino > .vc_grid-filter-item:hover > span,
.vc_grid-filter.vc_grid-filter-color-chino > .vc_grid-filter-item.vc_active > span {
  color: #FFFFFF;
}
.vc_grid-filter.vc_grid-filter-color-mulled_wine > .vc_grid-filter-item:hover,
.vc_grid-filter.vc_grid-filter-color-mulled_wine > .vc_grid-filter-item.vc_active {
  background-color: #50485B;
}
.vc_grid-filter.vc_grid-filter-color-mulled_wine > .vc_grid-filter-item:hover > span,
.vc_grid-filter.vc_grid-filter-color-mulled_wine > .vc_grid-filter-item.vc_active > span {
  color: #FFFFFF;
}
.vc_grid-filter.vc_grid-filter-color-vista_blue > .vc_grid-filter-item:hover,
.vc_grid-filter.vc_grid-filter-color-vista_blue > .vc_grid-filter-item.vc_active {
  background-color: #75D69C;
}
.vc_grid-filter.vc_grid-filter-color-vista_blue > .vc_grid-filter-item:hover > span,
.vc_grid-filter.vc_grid-filter-color-vista_blue > .vc_grid-filter-item.vc_active > span {
  color: #FFFFFF;
}
.vc_grid-filter.vc_grid-filter-color-black > .vc_grid-filter-item:hover,
.vc_grid-filter.vc_grid-filter-color-black > .vc_grid-filter-item.vc_active {
  background-color: #2A2A2A;
}
.vc_grid-filter.vc_grid-filter-color-black > .vc_grid-filter-item:hover > span,
.vc_grid-filter.vc_grid-filter-color-black > .vc_grid-filter-item.vc_active > span {
  color: #FFFFFF;
}
.vc_grid-filter.vc_grid-filter-color-grey > .vc_grid-filter-item:hover,
.vc_grid-filter.vc_grid-filter-color-grey > .vc_grid-filter-item.vc_active {
  background-color: #EBEBEB;
}
.vc_grid-filter.vc_grid-filter-color-grey > .vc_grid-filter-item:hover > span,
.vc_grid-filter.vc_grid-filter-color-grey > .vc_grid-filter-item.vc_active > span {
  color: #666666;
}
.vc_grid-filter.vc_grid-filter-color-orange > .vc_grid-filter-item:hover,
.vc_grid-filter.vc_grid-filter-color-orange > .vc_grid-filter-item.vc_active {
  background-color: #F7BE68;
}
.vc_grid-filter.vc_grid-filter-color-orange > .vc_grid-filter-item:hover > span,
.vc_grid-filter.vc_grid-filter-color-orange > .vc_grid-filter-item.vc_active > span {
  color: #FFFFFF;
}
.vc_grid-filter.vc_grid-filter-color-sky > .vc_grid-filter-item:hover,
.vc_grid-filter.vc_grid-filter-color-sky > .vc_grid-filter-item.vc_active {
  background-color: #5AA1E3;
}
.vc_grid-filter.vc_grid-filter-color-sky > .vc_grid-filter-item:hover > span,
.vc_grid-filter.vc_grid-filter-color-sky > .vc_grid-filter-item.vc_active > span {
  color: #FFFFFF;
}
.vc_grid-filter.vc_grid-filter-color-green > .vc_grid-filter-item:hover,
.vc_grid-filter.vc_grid-filter-color-green > .vc_grid-filter-item.vc_active {
  background-color: #6DAB3C;
}
.vc_grid-filter.vc_grid-filter-color-green > .vc_grid-filter-item:hover > span,
.vc_grid-filter.vc_grid-filter-color-green > .vc_grid-filter-item.vc_active > span {
  color: #FFFFFF;
}
.vc_grid-filter.vc_grid-filter-color-juicy_pink > .vc_grid-filter-item:hover,
.vc_grid-filter.vc_grid-filter-color-juicy_pink > .vc_grid-filter-item.vc_active {
  background-color: #F4524D;
}
.vc_grid-filter.vc_grid-filter-color-juicy_pink > .vc_grid-filter-item:hover > span,
.vc_grid-filter.vc_grid-filter-color-juicy_pink > .vc_grid-filter-item.vc_active > span {
  color: #FFFFFF;
}
.vc_grid-filter.vc_grid-filter-color-sandy_brown > .vc_grid-filter-item:hover,
.vc_grid-filter.vc_grid-filter-color-sandy_brown > .vc_grid-filter-item.vc_active {
  background-color: #F79468;
}
.vc_grid-filter.vc_grid-filter-color-sandy_brown > .vc_grid-filter-item:hover > span,
.vc_grid-filter.vc_grid-filter-color-sandy_brown > .vc_grid-filter-item.vc_active > span {
  color: #FFFFFF;
}
.vc_grid-filter.vc_grid-filter-color-purple > .vc_grid-filter-item:hover,
.vc_grid-filter.vc_grid-filter-color-purple > .vc_grid-filter-item.vc_active {
  background-color: #B97EBB;
}
.vc_grid-filter.vc_grid-filter-color-purple > .vc_grid-filter-item:hover > span,
.vc_grid-filter.vc_grid-filter-color-purple > .vc_grid-filter-item.vc_active > span {
  color: #FFFFFF;
}
.vc_grid-filter.vc_grid-filter-color-white > .vc_grid-filter-item:hover,
.vc_grid-filter.vc_grid-filter-color-white > .vc_grid-filter-item.vc_active {
  background-color: #FFFFFF;
}
.vc_grid-filter.vc_grid-filter-color-white > .vc_grid-filter-item:hover > span,
.vc_grid-filter.vc_grid-filter-color-white > .vc_grid-filter-item.vc_active > span {
  color: #666666;
}
.vc_grid-filter > .vc_grid-filter-item {
  cursor: pointer;
  display: inline-block;
  background: transparent;
  padding: 4px 10px;
  -webkit-transition: background-color 0.1s linear;
  -o-transition: background-color 0.1s linear;
  transition: background-color 0.1s linear;
}
.vc_grid-filter > .vc_grid-filter-item:first-child {
  margin-left: 0 !important;
}
.vc_grid-filter > .vc_grid-filter-item > span {
  -webkit-transition: color 0.1s linear;
  -o-transition: color 0.1s linear;
  transition: color 0.1s linear;
  outline: none;
  padding: 0;
  text-decoration: none;
}
.vc_grid-filter > .vc_grid-filter-item:hover > span,
.vc_grid-filter > .vc_grid-filter-item.vc_active > span {
  text-decoration: none;
}
.vc_grid-filter.vc_grid-filter-default > .vc_grid-filter-item {
  margin: 0 5px 5px 0;
  border-radius: 30px;
}
.vc_grid-filter.vc_grid-filter-comma .vc_grid-filter-item,
.vc_grid-filter.vc_grid-filter- .vc_grid-filter-item {
  padding: 0 !important;
}
.vc_grid-filter.vc_grid-filter-default-less-rounded > .vc_grid-filter-item {
  margin: 0 5px 5px 0;
  border-radius: 5px;
}
.vc_grid-filter.vc_grid-filter-bordered > .vc_grid-filter-item,
.vc_grid-filter.vc_grid-filter-bordered-rounded > .vc_grid-filter-item,
.vc_grid-filter.vc_grid-filter-bordered-rounded-less > .vc_grid-filter-item {
  margin: 0;
  border: 1px solid rgba(235, 235, 235, 0.8);
  border-collapse: collapse;
}
.vc_grid-filter.vc_grid-filter-bordered > .vc_grid-filter-item:nth-child(n+2),
.vc_grid-filter.vc_grid-filter-bordered-rounded > .vc_grid-filter-item:nth-child(n+2),
.vc_grid-filter.vc_grid-filter-bordered-rounded-less > .vc_grid-filter-item:nth-child(n+2) {
  margin-left: -1px;
  margin-top: -1px;
}
.vc_grid-filter.vc_grid-filter-bordered > .vc_grid-filter-item:hover,
.vc_grid-filter.vc_grid-filter-bordered-rounded > .vc_grid-filter-item:hover,
.vc_grid-filter.vc_grid-filter-bordered-rounded-less > .vc_grid-filter-item:hover,
.vc_grid-filter.vc_grid-filter-bordered > .vc_grid-filter-item.vc_active,
.vc_grid-filter.vc_grid-filter-bordered-rounded > .vc_grid-filter-item.vc_active,
.vc_grid-filter.vc_grid-filter-bordered-rounded-less > .vc_grid-filter-item.vc_active {
  position: relative;
  z-index: 1;
  border-color: transparent;
}
.vc_grid-filter.vc_grid-filter-bordered > .vc_grid-filter-item:hover > a,
.vc_grid-filter.vc_grid-filter-bordered-rounded > .vc_grid-filter-item:hover > a,
.vc_grid-filter.vc_grid-filter-bordered-rounded-less > .vc_grid-filter-item:hover > a,
.vc_grid-filter.vc_grid-filter-bordered > .vc_grid-filter-item.vc_active > a,
.vc_grid-filter.vc_grid-filter-bordered-rounded > .vc_grid-filter-item.vc_active > a,
.vc_grid-filter.vc_grid-filter-bordered-rounded-less > .vc_grid-filter-item.vc_active > a {
  text-decoration: none;
}
.vc_grid-filter.vc_grid-filter-bordered-rounded > .vc_grid-filter-item:first-child {
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
}
.vc_grid-filter.vc_grid-filter-bordered-rounded > .vc_grid-filter-item:last-child {
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
}
.vc_grid-filter.vc_grid-filter-bordered-rounded-less > .vc_grid-filter-item:first-child {
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
}
.vc_grid-filter.vc_grid-filter-bordered-rounded-less > .vc_grid-filter-item:last-child {
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
}
.vc_grid-filter.vc_grid-filter-filled.vc_grid-filter-color-blue > .vc_grid-filter-item,
.vc_grid-filter.vc_grid-filter-filled-rounded.vc_grid-filter-color-blue > .vc_grid-filter-item {
  background-color: #7c93dd;
}
.vc_grid-filter.vc_grid-filter-filled.vc_grid-filter-color-blue > .vc_grid-filter-item > span,
.vc_grid-filter.vc_grid-filter-filled-rounded.vc_grid-filter-color-blue > .vc_grid-filter-item > span {
  color: #FFFFFF;
}
.vc_grid-filter.vc_grid-filter-filled.vc_grid-filter-color-blue > .vc_grid-filter-item:hover,
.vc_grid-filter.vc_grid-filter-filled-rounded.vc_grid-filter-color-blue > .vc_grid-filter-item:hover,
.vc_grid-filter.vc_grid-filter-filled.vc_grid-filter-color-blue > .vc_grid-filter-item.vc_active,
.vc_grid-filter.vc_grid-filter-filled-rounded.vc_grid-filter-color-blue > .vc_grid-filter-item.vc_active {
  background-color: #5472D2;
}
.vc_grid-filter.vc_grid-filter-filled.vc_grid-filter-color-blue > .vc_grid-filter-item:hover > span,
.vc_grid-filter.vc_grid-filter-filled-rounded.vc_grid-filter-color-blue > .vc_grid-filter-item:hover > span,
.vc_grid-filter.vc_grid-filter-filled.vc_grid-filter-color-blue > .vc_grid-filter-item.vc_active > span,
.vc_grid-filter.vc_grid-filter-filled-rounded.vc_grid-filter-color-blue > .vc_grid-filter-item.vc_active > span {
  color: #FFFFFF;
}
.vc_grid-filter.vc_grid-filter-filled.vc_grid-filter-color-turquoise > .vc_grid-filter-item,
.vc_grid-filter.vc_grid-filter-filled-rounded.vc_grid-filter-color-turquoise > .vc_grid-filter-item {
  background-color: #00919c;
}
.vc_grid-filter.vc_grid-filter-filled.vc_grid-filter-color-turquoise > .vc_grid-filter-item > span,
.vc_grid-filter.vc_grid-filter-filled-rounded.vc_grid-filter-color-turquoise > .vc_grid-filter-item > span {
  color: #FFFFFF;
}
.vc_grid-filter.vc_grid-filter-filled.vc_grid-filter-color-turquoise > .vc_grid-filter-item:hover,
.vc_grid-filter.vc_grid-filter-filled-rounded.vc_grid-filter-color-turquoise > .vc_grid-filter-item:hover,
.vc_grid-filter.vc_grid-filter-filled.vc_grid-filter-color-turquoise > .vc_grid-filter-item.vc_active,
.vc_grid-filter.vc_grid-filter-filled-rounded.vc_grid-filter-color-turquoise > .vc_grid-filter-item.vc_active {
  background-color: #00C1CF;
}
.vc_grid-filter.vc_grid-filter-filled.vc_grid-filter-color-turquoise > .vc_grid-filter-item:hover > span,
.vc_grid-filter.vc_grid-filter-filled-rounded.vc_grid-filter-color-turquoise > .vc_grid-filter-item:hover > span,
.vc_grid-filter.vc_grid-filter-filled.vc_grid-filter-color-turquoise > .vc_grid-filter-item.vc_active > span,
.vc_grid-filter.vc_grid-filter-filled-rounded.vc_grid-filter-color-turquoise > .vc_grid-filter-item.vc_active > span {
  color: #FFFFFF;
}
.vc_grid-filter.vc_grid-filter-filled.vc_grid-filter-color-pink > .vc_grid-filter-item,
.vc_grid-filter.vc_grid-filter-filled-rounded.vc_grid-filter-color-pink > .vc_grid-filter-item {
  background-color: #fe9b94;
}
.vc_grid-filter.vc_grid-filter-filled.vc_grid-filter-color-pink > .vc_grid-filter-item > span,
.vc_grid-filter.vc_grid-filter-filled-rounded.vc_grid-filter-color-pink > .vc_grid-filter-item > span {
  color: #FFFFFF;
}
.vc_grid-filter.vc_grid-filter-filled.vc_grid-filter-color-pink > .vc_grid-filter-item:hover,
.vc_grid-filter.vc_grid-filter-filled-rounded.vc_grid-filter-color-pink > .vc_grid-filter-item:hover,
.vc_grid-filter.vc_grid-filter-filled.vc_grid-filter-color-pink > .vc_grid-filter-item.vc_active,
.vc_grid-filter.vc_grid-filter-filled-rounded.vc_grid-filter-color-pink > .vc_grid-filter-item.vc_active {
  background-color: #FE6C61;
}
.vc_grid-filter.vc_grid-filter-filled.vc_grid-filter-color-pink > .vc_grid-filter-item:hover > span,
.vc_grid-filter.vc_grid-filter-filled-rounded.vc_grid-filter-color-pink > .vc_grid-filter-item:hover > span,
.vc_grid-filter.vc_grid-filter-filled.vc_grid-filter-color-pink > .vc_grid-filter-item.vc_active > span,
.vc_grid-filter.vc_grid-filter-filled-rounded.vc_grid-filter-color-pink > .vc_grid-filter-item.vc_active > span {
  color: #FFFFFF;
}
.vc_grid-filter.vc_grid-filter-filled.vc_grid-filter-color-violet > .vc_grid-filter-item,
.vc_grid-filter.vc_grid-filter-filled-rounded.vc_grid-filter-color-violet > .vc_grid-filter-item {
  background-color: #a991d3;
}
.vc_grid-filter.vc_grid-filter-filled.vc_grid-filter-color-violet > .vc_grid-filter-item > span,
.vc_grid-filter.vc_grid-filter-filled-rounded.vc_grid-filter-color-violet > .vc_grid-filter-item > span {
  color: #FFFFFF;
}
.vc_grid-filter.vc_grid-filter-filled.vc_grid-filter-color-violet > .vc_grid-filter-item:hover,
.vc_grid-filter.vc_grid-filter-filled-rounded.vc_grid-filter-color-violet > .vc_grid-filter-item:hover,
.vc_grid-filter.vc_grid-filter-filled.vc_grid-filter-color-violet > .vc_grid-filter-item.vc_active,
.vc_grid-filter.vc_grid-filter-filled-rounded.vc_grid-filter-color-violet > .vc_grid-filter-item.vc_active {
  background-color: #8D6DC4;
}
.vc_grid-filter.vc_grid-filter-filled.vc_grid-filter-color-violet > .vc_grid-filter-item:hover > span,
.vc_grid-filter.vc_grid-filter-filled-rounded.vc_grid-filter-color-violet > .vc_grid-filter-item:hover > span,
.vc_grid-filter.vc_grid-filter-filled.vc_grid-filter-color-violet > .vc_grid-filter-item.vc_active > span,
.vc_grid-filter.vc_grid-filter-filled-rounded.vc_grid-filter-color-violet > .vc_grid-filter-item.vc_active > span {
  color: #FFFFFF;
}
.vc_grid-filter.vc_grid-filter-filled.vc_grid-filter-color-peacoc > .vc_grid-filter-item,
.vc_grid-filter.vc_grid-filter-filled-rounded.vc_grid-filter-color-peacoc > .vc_grid-filter-item {
  background-color: #73bfd5;
}
.vc_grid-filter.vc_grid-filter-filled.vc_grid-filter-color-peacoc > .vc_grid-filter-item > span,
.vc_grid-filter.vc_grid-filter-filled-rounded.vc_grid-filter-color-peacoc > .vc_grid-filter-item > span {
  color: #FFFFFF;
}
.vc_grid-filter.vc_grid-filter-filled.vc_grid-filter-color-peacoc > .vc_grid-filter-item:hover,
.vc_grid-filter.vc_grid-filter-filled-rounded.vc_grid-filter-color-peacoc > .vc_grid-filter-item:hover,
.vc_grid-filter.vc_grid-filter-filled.vc_grid-filter-color-peacoc > .vc_grid-filter-item.vc_active,
.vc_grid-filter.vc_grid-filter-filled-rounded.vc_grid-filter-color-peacoc > .vc_grid-filter-item.vc_active {
  background-color: #4CADC9;
}
.vc_grid-filter.vc_grid-filter-filled.vc_grid-filter-color-peacoc > .vc_grid-filter-item:hover > span,
.vc_grid-filter.vc_grid-filter-filled-rounded.vc_grid-filter-color-peacoc > .vc_grid-filter-item:hover > span,
.vc_grid-filter.vc_grid-filter-filled.vc_grid-filter-color-peacoc > .vc_grid-filter-item.vc_active > span,
.vc_grid-filter.vc_grid-filter-filled-rounded.vc_grid-filter-color-peacoc > .vc_grid-filter-item.vc_active > span {
  color: #FFFFFF;
}
.vc_grid-filter.vc_grid-filter-filled.vc_grid-filter-color-chino > .vc_grid-filter-item,
.vc_grid-filter.vc_grid-filter-filled-rounded.vc_grid-filter-color-chino > .vc_grid-filter-item {
  background-color: #e1d9cb;
}
.vc_grid-filter.vc_grid-filter-filled.vc_grid-filter-color-chino > .vc_grid-filter-item > span,
.vc_grid-filter.vc_grid-filter-filled-rounded.vc_grid-filter-color-chino > .vc_grid-filter-item > span {
  color: #FFFFFF;
}
.vc_grid-filter.vc_grid-filter-filled.vc_grid-filter-color-chino > .vc_grid-filter-item:hover,
.vc_grid-filter.vc_grid-filter-filled-rounded.vc_grid-filter-color-chino > .vc_grid-filter-item:hover,
.vc_grid-filter.vc_grid-filter-filled.vc_grid-filter-color-chino > .vc_grid-filter-item.vc_active,
.vc_grid-filter.vc_grid-filter-filled-rounded.vc_grid-filter-color-chino > .vc_grid-filter-item.vc_active {
  background-color: #CEC2AB;
}
.vc_grid-filter.vc_grid-filter-filled.vc_grid-filter-color-chino > .vc_grid-filter-item:hover > span,
.vc_grid-filter.vc_grid-filter-filled-rounded.vc_grid-filter-color-chino > .vc_grid-filter-item:hover > span,
.vc_grid-filter.vc_grid-filter-filled.vc_grid-filter-color-chino > .vc_grid-filter-item.vc_active > span,
.vc_grid-filter.vc_grid-filter-filled-rounded.vc_grid-filter-color-chino > .vc_grid-filter-item.vc_active > span {
  color: #FFFFFF;
}
.vc_grid-filter.vc_grid-filter-filled.vc_grid-filter-color-mulled_wine > .vc_grid-filter-item,
.vc_grid-filter.vc_grid-filter-filled-rounded.vc_grid-filter-color-mulled_wine > .vc_grid-filter-item {
  background-color: #695f77;
}
.vc_grid-filter.vc_grid-filter-filled.vc_grid-filter-color-mulled_wine > .vc_grid-filter-item > span,
.vc_grid-filter.vc_grid-filter-filled-rounded.vc_grid-filter-color-mulled_wine > .vc_grid-filter-item > span {
  color: #FFFFFF;
}
.vc_grid-filter.vc_grid-filter-filled.vc_grid-filter-color-mulled_wine > .vc_grid-filter-item:hover,
.vc_grid-filter.vc_grid-filter-filled-rounded.vc_grid-filter-color-mulled_wine > .vc_grid-filter-item:hover,
.vc_grid-filter.vc_grid-filter-filled.vc_grid-filter-color-mulled_wine > .vc_grid-filter-item.vc_active,
.vc_grid-filter.vc_grid-filter-filled-rounded.vc_grid-filter-color-mulled_wine > .vc_grid-filter-item.vc_active {
  background-color: #50485B;
}
.vc_grid-filter.vc_grid-filter-filled.vc_grid-filter-color-mulled_wine > .vc_grid-filter-item:hover > span,
.vc_grid-filter.vc_grid-filter-filled-rounded.vc_grid-filter-color-mulled_wine > .vc_grid-filter-item:hover > span,
.vc_grid-filter.vc_grid-filter-filled.vc_grid-filter-color-mulled_wine > .vc_grid-filter-item.vc_active > span,
.vc_grid-filter.vc_grid-filter-filled-rounded.vc_grid-filter-color-mulled_wine > .vc_grid-filter-item.vc_active > span {
  color: #FFFFFF;
}
.vc_grid-filter.vc_grid-filter-filled.vc_grid-filter-color-vista_blue > .vc_grid-filter-item,
.vc_grid-filter.vc_grid-filter-filled-rounded.vc_grid-filter-color-vista_blue > .vc_grid-filter-item {
  background-color: #9ce2b8;
}
.vc_grid-filter.vc_grid-filter-filled.vc_grid-filter-color-vista_blue > .vc_grid-filter-item > span,
.vc_grid-filter.vc_grid-filter-filled-rounded.vc_grid-filter-color-vista_blue > .vc_grid-filter-item > span {
  color: #FFFFFF;
}
.vc_grid-filter.vc_grid-filter-filled.vc_grid-filter-color-vista_blue > .vc_grid-filter-item:hover,
.vc_grid-filter.vc_grid-filter-filled-rounded.vc_grid-filter-color-vista_blue > .vc_grid-filter-item:hover,
.vc_grid-filter.vc_grid-filter-filled.vc_grid-filter-color-vista_blue > .vc_grid-filter-item.vc_active,
.vc_grid-filter.vc_grid-filter-filled-rounded.vc_grid-filter-color-vista_blue > .vc_grid-filter-item.vc_active {
  background-color: #75D69C;
}
.vc_grid-filter.vc_grid-filter-filled.vc_grid-filter-color-vista_blue > .vc_grid-filter-item:hover > span,
.vc_grid-filter.vc_grid-filter-filled-rounded.vc_grid-filter-color-vista_blue > .vc_grid-filter-item:hover > span,
.vc_grid-filter.vc_grid-filter-filled.vc_grid-filter-color-vista_blue > .vc_grid-filter-item.vc_active > span,
.vc_grid-filter.vc_grid-filter-filled-rounded.vc_grid-filter-color-vista_blue > .vc_grid-filter-item.vc_active > span {
  color: #FFFFFF;
}
.vc_grid-filter.vc_grid-filter-filled.vc_grid-filter-color-black > .vc_grid-filter-item,
.vc_grid-filter.vc_grid-filter-filled-rounded.vc_grid-filter-color-black > .vc_grid-filter-item {
  background-color: #444444;
}
.vc_grid-filter.vc_grid-filter-filled.vc_grid-filter-color-black > .vc_grid-filter-item > span,
.vc_grid-filter.vc_grid-filter-filled-rounded.vc_grid-filter-color-black > .vc_grid-filter-item > span {
  color: #FFFFFF;
}
.vc_grid-filter.vc_grid-filter-filled.vc_grid-filter-color-black > .vc_grid-filter-item:hover,
.vc_grid-filter.vc_grid-filter-filled-rounded.vc_grid-filter-color-black > .vc_grid-filter-item:hover,
.vc_grid-filter.vc_grid-filter-filled.vc_grid-filter-color-black > .vc_grid-filter-item.vc_active,
.vc_grid-filter.vc_grid-filter-filled-rounded.vc_grid-filter-color-black > .vc_grid-filter-item.vc_active {
  background-color: #2A2A2A;
}
.vc_grid-filter.vc_grid-filter-filled.vc_grid-filter-color-black > .vc_grid-filter-item:hover > span,
.vc_grid-filter.vc_grid-filter-filled-rounded.vc_grid-filter-color-black > .vc_grid-filter-item:hover > span,
.vc_grid-filter.vc_grid-filter-filled.vc_grid-filter-color-black > .vc_grid-filter-item.vc_active > span,
.vc_grid-filter.vc_grid-filter-filled-rounded.vc_grid-filter-color-black > .vc_grid-filter-item.vc_active > span {
  color: #FFFFFF;
}
.vc_grid-filter.vc_grid-filter-filled.vc_grid-filter-color-grey > .vc_grid-filter-item,
.vc_grid-filter.vc_grid-filter-filled-rounded.vc_grid-filter-color-grey > .vc_grid-filter-item {
  background-color: #d2d2d2;
}
.vc_grid-filter.vc_grid-filter-filled.vc_grid-filter-color-grey > .vc_grid-filter-item > span,
.vc_grid-filter.vc_grid-filter-filled-rounded.vc_grid-filter-color-grey > .vc_grid-filter-item > span {
  color: #666666;
}
.vc_grid-filter.vc_grid-filter-filled.vc_grid-filter-color-grey > .vc_grid-filter-item:hover,
.vc_grid-filter.vc_grid-filter-filled-rounded.vc_grid-filter-color-grey > .vc_grid-filter-item:hover,
.vc_grid-filter.vc_grid-filter-filled.vc_grid-filter-color-grey > .vc_grid-filter-item.vc_active,
.vc_grid-filter.vc_grid-filter-filled-rounded.vc_grid-filter-color-grey > .vc_grid-filter-item.vc_active {
  background-color: #EBEBEB;
}
.vc_grid-filter.vc_grid-filter-filled.vc_grid-filter-color-grey > .vc_grid-filter-item:hover > span,
.vc_grid-filter.vc_grid-filter-filled-rounded.vc_grid-filter-color-grey > .vc_grid-filter-item:hover > span,
.vc_grid-filter.vc_grid-filter-filled.vc_grid-filter-color-grey > .vc_grid-filter-item.vc_active > span,
.vc_grid-filter.vc_grid-filter-filled-rounded.vc_grid-filter-color-grey > .vc_grid-filter-item.vc_active > span {
  color: #666666;
}
.vc_grid-filter.vc_grid-filter-filled.vc_grid-filter-color-orange > .vc_grid-filter-item,
.vc_grid-filter.vc_grid-filter-filled-rounded.vc_grid-filter-color-orange > .vc_grid-filter-item {
  background-color: #fad398;
}
.vc_grid-filter.vc_grid-filter-filled.vc_grid-filter-color-orange > .vc_grid-filter-item > span,
.vc_grid-filter.vc_grid-filter-filled-rounded.vc_grid-filter-color-orange > .vc_grid-filter-item > span {
  color: #FFFFFF;
}
.vc_grid-filter.vc_grid-filter-filled.vc_grid-filter-color-orange > .vc_grid-filter-item:hover,
.vc_grid-filter.vc_grid-filter-filled-rounded.vc_grid-filter-color-orange > .vc_grid-filter-item:hover,
.vc_grid-filter.vc_grid-filter-filled.vc_grid-filter-color-orange > .vc_grid-filter-item.vc_active,
.vc_grid-filter.vc_grid-filter-filled-rounded.vc_grid-filter-color-orange > .vc_grid-filter-item.vc_active {
  background-color: #F7BE68;
}
.vc_grid-filter.vc_grid-filter-filled.vc_grid-filter-color-orange > .vc_grid-filter-item:hover > span,
.vc_grid-filter.vc_grid-filter-filled-rounded.vc_grid-filter-color-orange > .vc_grid-filter-item:hover > span,
.vc_grid-filter.vc_grid-filter-filled.vc_grid-filter-color-orange > .vc_grid-filter-item.vc_active > span,
.vc_grid-filter.vc_grid-filter-filled-rounded.vc_grid-filter-color-orange > .vc_grid-filter-item.vc_active > span {
  color: #FFFFFF;
}
.vc_grid-filter.vc_grid-filter-filled.vc_grid-filter-color-sky > .vc_grid-filter-item,
.vc_grid-filter.vc_grid-filter-filled-rounded.vc_grid-filter-color-sky > .vc_grid-filter-item {
  background-color: #86baea;
}
.vc_grid-filter.vc_grid-filter-filled.vc_grid-filter-color-sky > .vc_grid-filter-item > span,
.vc_grid-filter.vc_grid-filter-filled-rounded.vc_grid-filter-color-sky > .vc_grid-filter-item > span {
  color: #FFFFFF;
}
.vc_grid-filter.vc_grid-filter-filled.vc_grid-filter-color-sky > .vc_grid-filter-item:hover,
.vc_grid-filter.vc_grid-filter-filled-rounded.vc_grid-filter-color-sky > .vc_grid-filter-item:hover,
.vc_grid-filter.vc_grid-filter-filled.vc_grid-filter-color-sky > .vc_grid-filter-item.vc_active,
.vc_grid-filter.vc_grid-filter-filled-rounded.vc_grid-filter-color-sky > .vc_grid-filter-item.vc_active {
  background-color: #5AA1E3;
}
.vc_grid-filter.vc_grid-filter-filled.vc_grid-filter-color-sky > .vc_grid-filter-item:hover > span,
.vc_grid-filter.vc_grid-filter-filled-rounded.vc_grid-filter-color-sky > .vc_grid-filter-item:hover > span,
.vc_grid-filter.vc_grid-filter-filled.vc_grid-filter-color-sky > .vc_grid-filter-item.vc_active > span,
.vc_grid-filter.vc_grid-filter-filled-rounded.vc_grid-filter-color-sky > .vc_grid-filter-item.vc_active > span {
  color: #FFFFFF;
}
.vc_grid-filter.vc_grid-filter-filled.vc_grid-filter-color-green > .vc_grid-filter-item,
.vc_grid-filter.vc_grid-filter-filled-rounded.vc_grid-filter-color-green > .vc_grid-filter-item {
  background-color: #87c456;
}
.vc_grid-filter.vc_grid-filter-filled.vc_grid-filter-color-green > .vc_grid-filter-item > span,
.vc_grid-filter.vc_grid-filter-filled-rounded.vc_grid-filter-color-green > .vc_grid-filter-item > span {
  color: #FFFFFF;
}
.vc_grid-filter.vc_grid-filter-filled.vc_grid-filter-color-green > .vc_grid-filter-item:hover,
.vc_grid-filter.vc_grid-filter-filled-rounded.vc_grid-filter-color-green > .vc_grid-filter-item:hover,
.vc_grid-filter.vc_grid-filter-filled.vc_grid-filter-color-green > .vc_grid-filter-item.vc_active,
.vc_grid-filter.vc_grid-filter-filled-rounded.vc_grid-filter-color-green > .vc_grid-filter-item.vc_active {
  background-color: #6DAB3C;
}
.vc_grid-filter.vc_grid-filter-filled.vc_grid-filter-color-green > .vc_grid-filter-item:hover > span,
.vc_grid-filter.vc_grid-filter-filled-rounded.vc_grid-filter-color-green > .vc_grid-filter-item:hover > span,
.vc_grid-filter.vc_grid-filter-filled.vc_grid-filter-color-green > .vc_grid-filter-item.vc_active > span,
.vc_grid-filter.vc_grid-filter-filled-rounded.vc_grid-filter-color-green > .vc_grid-filter-item.vc_active > span {
  color: #FFFFFF;
}
.vc_grid-filter.vc_grid-filter-filled.vc_grid-filter-color-juicy_pink > .vc_grid-filter-item,
.vc_grid-filter.vc_grid-filter-filled-rounded.vc_grid-filter-color-juicy_pink > .vc_grid-filter-item {
  background-color: #f7817d;
}
.vc_grid-filter.vc_grid-filter-filled.vc_grid-filter-color-juicy_pink > .vc_grid-filter-item > span,
.vc_grid-filter.vc_grid-filter-filled-rounded.vc_grid-filter-color-juicy_pink > .vc_grid-filter-item > span {
  color: #FFFFFF;
}
.vc_grid-filter.vc_grid-filter-filled.vc_grid-filter-color-juicy_pink > .vc_grid-filter-item:hover,
.vc_grid-filter.vc_grid-filter-filled-rounded.vc_grid-filter-color-juicy_pink > .vc_grid-filter-item:hover,
.vc_grid-filter.vc_grid-filter-filled.vc_grid-filter-color-juicy_pink > .vc_grid-filter-item.vc_active,
.vc_grid-filter.vc_grid-filter-filled-rounded.vc_grid-filter-color-juicy_pink > .vc_grid-filter-item.vc_active {
  background-color: #F4524D;
}
.vc_grid-filter.vc_grid-filter-filled.vc_grid-filter-color-juicy_pink > .vc_grid-filter-item:hover > span,
.vc_grid-filter.vc_grid-filter-filled-rounded.vc_grid-filter-color-juicy_pink > .vc_grid-filter-item:hover > span,
.vc_grid-filter.vc_grid-filter-filled.vc_grid-filter-color-juicy_pink > .vc_grid-filter-item.vc_active > span,
.vc_grid-filter.vc_grid-filter-filled-rounded.vc_grid-filter-color-juicy_pink > .vc_grid-filter-item.vc_active > span {
  color: #FFFFFF;
}
.vc_grid-filter.vc_grid-filter-filled.vc_grid-filter-color-sandy_brown > .vc_grid-filter-item,
.vc_grid-filter.vc_grid-filter-filled-rounded.vc_grid-filter-color-sandy_brown > .vc_grid-filter-item {
  background-color: #fab698;
}
.vc_grid-filter.vc_grid-filter-filled.vc_grid-filter-color-sandy_brown > .vc_grid-filter-item > span,
.vc_grid-filter.vc_grid-filter-filled-rounded.vc_grid-filter-color-sandy_brown > .vc_grid-filter-item > span {
  color: #FFFFFF;
}
.vc_grid-filter.vc_grid-filter-filled.vc_grid-filter-color-sandy_brown > .vc_grid-filter-item:hover,
.vc_grid-filter.vc_grid-filter-filled-rounded.vc_grid-filter-color-sandy_brown > .vc_grid-filter-item:hover,
.vc_grid-filter.vc_grid-filter-filled.vc_grid-filter-color-sandy_brown > .vc_grid-filter-item.vc_active,
.vc_grid-filter.vc_grid-filter-filled-rounded.vc_grid-filter-color-sandy_brown > .vc_grid-filter-item.vc_active {
  background-color: #F79468;
}
.vc_grid-filter.vc_grid-filter-filled.vc_grid-filter-color-sandy_brown > .vc_grid-filter-item:hover > span,
.vc_grid-filter.vc_grid-filter-filled-rounded.vc_grid-filter-color-sandy_brown > .vc_grid-filter-item:hover > span,
.vc_grid-filter.vc_grid-filter-filled.vc_grid-filter-color-sandy_brown > .vc_grid-filter-item.vc_active > span,
.vc_grid-filter.vc_grid-filter-filled-rounded.vc_grid-filter-color-sandy_brown > .vc_grid-filter-item.vc_active > span {
  color: #FFFFFF;
}
.vc_grid-filter.vc_grid-filter-filled.vc_grid-filter-color-purple > .vc_grid-filter-item,
.vc_grid-filter.vc_grid-filter-filled-rounded.vc_grid-filter-color-purple > .vc_grid-filter-item {
  background-color: #cb9fcd;
}
.vc_grid-filter.vc_grid-filter-filled.vc_grid-filter-color-purple > .vc_grid-filter-item > span,
.vc_grid-filter.vc_grid-filter-filled-rounded.vc_grid-filter-color-purple > .vc_grid-filter-item > span {
  color: #FFFFFF;
}
.vc_grid-filter.vc_grid-filter-filled.vc_grid-filter-color-purple > .vc_grid-filter-item:hover,
.vc_grid-filter.vc_grid-filter-filled-rounded.vc_grid-filter-color-purple > .vc_grid-filter-item:hover,
.vc_grid-filter.vc_grid-filter-filled.vc_grid-filter-color-purple > .vc_grid-filter-item.vc_active,
.vc_grid-filter.vc_grid-filter-filled-rounded.vc_grid-filter-color-purple > .vc_grid-filter-item.vc_active {
  background-color: #B97EBB;
}
.vc_grid-filter.vc_grid-filter-filled.vc_grid-filter-color-purple > .vc_grid-filter-item:hover > span,
.vc_grid-filter.vc_grid-filter-filled-rounded.vc_grid-filter-color-purple > .vc_grid-filter-item:hover > span,
.vc_grid-filter.vc_grid-filter-filled.vc_grid-filter-color-purple > .vc_grid-filter-item.vc_active > span,
.vc_grid-filter.vc_grid-filter-filled-rounded.vc_grid-filter-color-purple > .vc_grid-filter-item.vc_active > span {
  color: #FFFFFF;
}
.vc_grid-filter.vc_grid-filter-filled.vc_grid-filter-color-white > .vc_grid-filter-item,
.vc_grid-filter.vc_grid-filter-filled-rounded.vc_grid-filter-color-white > .vc_grid-filter-item {
  background-color: #e6e6e6;
}
.vc_grid-filter.vc_grid-filter-filled.vc_grid-filter-color-white > .vc_grid-filter-item > span,
.vc_grid-filter.vc_grid-filter-filled-rounded.vc_grid-filter-color-white > .vc_grid-filter-item > span {
  color: #666666;
}
.vc_grid-filter.vc_grid-filter-filled.vc_grid-filter-color-white > .vc_grid-filter-item:hover,
.vc_grid-filter.vc_grid-filter-filled-rounded.vc_grid-filter-color-white > .vc_grid-filter-item:hover,
.vc_grid-filter.vc_grid-filter-filled.vc_grid-filter-color-white > .vc_grid-filter-item.vc_active,
.vc_grid-filter.vc_grid-filter-filled-rounded.vc_grid-filter-color-white > .vc_grid-filter-item.vc_active {
  background-color: #FFFFFF;
}
.vc_grid-filter.vc_grid-filter-filled.vc_grid-filter-color-white > .vc_grid-filter-item:hover > span,
.vc_grid-filter.vc_grid-filter-filled-rounded.vc_grid-filter-color-white > .vc_grid-filter-item:hover > span,
.vc_grid-filter.vc_grid-filter-filled.vc_grid-filter-color-white > .vc_grid-filter-item.vc_active > span,
.vc_grid-filter.vc_grid-filter-filled-rounded.vc_grid-filter-color-white > .vc_grid-filter-item.vc_active > span {
  color: #666666;
}
.vc_grid-filter.vc_grid-filter-filled > .vc_grid-filter-item,
.vc_grid-filter.vc_grid-filter-filled-rounded > .vc_grid-filter-item {
  margin: 0;
  border: 1px solid transparent;
  border-collapse: collapse;
  padding: 3px 7px;
}
.vc_grid-filter.vc_grid-filter-filled > .vc_grid-filter-item > span,
.vc_grid-filter.vc_grid-filter-filled-rounded > .vc_grid-filter-item > span {
  color: #FFFFFF;
}
.vc_grid-filter.vc_grid-filter-filled > .vc_grid-filter-item:nth-child(n+2),
.vc_grid-filter.vc_grid-filter-filled-rounded > .vc_grid-filter-item:nth-child(n+2) {
  border-left: none;
  margin-left: 1px;
  border-top: none;
  margin-top: 1px;
}
.vc_grid-filter.vc_grid-filter-filled > .vc_grid-filter-item:first-child,
.vc_grid-filter.vc_grid-filter-filled-rounded > .vc_grid-filter-item:first-child {
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  border-top: 0;
}
.vc_grid-filter.vc_grid-filter-filled > .vc_grid-filter-item:last-child,
.vc_grid-filter.vc_grid-filter-filled-rounded > .vc_grid-filter-item:last-child {
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
}
.vc_grid-filter.vc_grid-filter-filled-rounded > .vc_grid-filter-item:first-child {
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  border-top: 0;
}
.vc_grid-filter.vc_grid-filter-filled-rounded > .vc_grid-filter-item:last-child {
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
}
.vc_grid-filter.vc_grid-filter-filled-rounded-all > .vc_grid-filter-item {
  border-radius: 3px !important;
}
.vc_grid-filter.vc_grid-filter-filled-round-all > .vc_grid-filter-item {
  border-radius: 30px !important;
}
.vc_grid-filter.vc_grid-filter-size-xs .vc_grid-filter-item {
  font-size: 12px;
  padding: 1px 5px;
}
.vc_grid-filter.vc_grid-filter-size-sm .vc_grid-filter-item {
  font-size: 13px;
  padding: 2px 7px;
}
.vc_grid-filter.vc_grid-filter-size-md .vc_grid-filter-item {
  font-size: 100%;
  padding: 2px 10px;
}
.vc_grid-filter.vc_grid-filter-size-lg .vc_grid-filter-item {
  font-size: 18px;
  padding: 4px 10px;
}
.vc_grid-filter-select {
  display: none;
}
.vc_grid-filter-select,
.vc_grid-filter-dropdown {
  font-size: 12px;
  margin-bottom: 20px;
}
.vc_grid-filter-select.vc_grid-filter-center,
.vc_grid-filter-dropdown.vc_grid-filter-center {
  text-align: center;
}
.vc_grid-filter-select.vc_grid-filter-right,
.vc_grid-filter-dropdown.vc_grid-filter-right {
  text-align: right;
}
.vc_grid-filter-select.vc_grid-filter-left,
.vc_grid-filter-dropdown.vc_grid-filter-left {
  text-align: left;
}
.vc_grid-filter-select .vc_grid-styled-select .vc_arrow-icon-navicon,
.vc_grid-filter-dropdown .vc_grid-styled-select .vc_arrow-icon-navicon {
  display: none;
}
.vc_grid-filter-select .vc_grid-styled-select select,
.vc_grid-filter-dropdown .vc_grid-styled-select select {
  outline: none;
  display: inline-block;
}
@media (min-width: 768px) {
  .vc_grid-filter-select.vc_grid-filter-color-blue .vc_arrow-icon-navicon,
  .vc_grid-filter-dropdown.vc_grid-filter-color-blue .vc_arrow-icon-navicon {
    color: #5472D2;
  }
  .vc_grid-filter-select.vc_grid-filter-color-turquoise .vc_arrow-icon-navicon,
  .vc_grid-filter-dropdown.vc_grid-filter-color-turquoise .vc_arrow-icon-navicon {
    color: #00C1CF;
  }
  .vc_grid-filter-select.vc_grid-filter-color-pink .vc_arrow-icon-navicon,
  .vc_grid-filter-dropdown.vc_grid-filter-color-pink .vc_arrow-icon-navicon {
    color: #FE6C61;
  }
  .vc_grid-filter-select.vc_grid-filter-color-violet .vc_arrow-icon-navicon,
  .vc_grid-filter-dropdown.vc_grid-filter-color-violet .vc_arrow-icon-navicon {
    color: #8D6DC4;
  }
  .vc_grid-filter-select.vc_grid-filter-color-peacoc .vc_arrow-icon-navicon,
  .vc_grid-filter-dropdown.vc_grid-filter-color-peacoc .vc_arrow-icon-navicon {
    color: #4CADC9;
  }
  .vc_grid-filter-select.vc_grid-filter-color-chino .vc_arrow-icon-navicon,
  .vc_grid-filter-dropdown.vc_grid-filter-color-chino .vc_arrow-icon-navicon {
    color: #CEC2AB;
  }
  .vc_grid-filter-select.vc_grid-filter-color-mulled_wine .vc_arrow-icon-navicon,
  .vc_grid-filter-dropdown.vc_grid-filter-color-mulled_wine .vc_arrow-icon-navicon {
    color: #50485B;
  }
  .vc_grid-filter-select.vc_grid-filter-color-vista_blue .vc_arrow-icon-navicon,
  .vc_grid-filter-dropdown.vc_grid-filter-color-vista_blue .vc_arrow-icon-navicon {
    color: #75D69C;
  }
  .vc_grid-filter-select.vc_grid-filter-color-black .vc_arrow-icon-navicon,
  .vc_grid-filter-dropdown.vc_grid-filter-color-black .vc_arrow-icon-navicon {
    color: #2A2A2A;
  }
  .vc_grid-filter-select.vc_grid-filter-color-grey .vc_arrow-icon-navicon,
  .vc_grid-filter-dropdown.vc_grid-filter-color-grey .vc_arrow-icon-navicon {
    color: #EBEBEB;
  }
  .vc_grid-filter-select.vc_grid-filter-color-orange .vc_arrow-icon-navicon,
  .vc_grid-filter-dropdown.vc_grid-filter-color-orange .vc_arrow-icon-navicon {
    color: #F7BE68;
  }
  .vc_grid-filter-select.vc_grid-filter-color-sky .vc_arrow-icon-navicon,
  .vc_grid-filter-dropdown.vc_grid-filter-color-sky .vc_arrow-icon-navicon {
    color: #5AA1E3;
  }
  .vc_grid-filter-select.vc_grid-filter-color-green .vc_arrow-icon-navicon,
  .vc_grid-filter-dropdown.vc_grid-filter-color-green .vc_arrow-icon-navicon {
    color: #6DAB3C;
  }
  .vc_grid-filter-select.vc_grid-filter-color-juicy_pink .vc_arrow-icon-navicon,
  .vc_grid-filter-dropdown.vc_grid-filter-color-juicy_pink .vc_arrow-icon-navicon {
    color: #F4524D;
  }
  .vc_grid-filter-select.vc_grid-filter-color-sandy_brown .vc_arrow-icon-navicon,
  .vc_grid-filter-dropdown.vc_grid-filter-color-sandy_brown .vc_arrow-icon-navicon {
    color: #F79468;
  }
  .vc_grid-filter-select.vc_grid-filter-color-purple .vc_arrow-icon-navicon,
  .vc_grid-filter-dropdown.vc_grid-filter-color-purple .vc_arrow-icon-navicon {
    color: #B97EBB;
  }
  .vc_grid-filter-select.vc_grid-filter-color-white .vc_arrow-icon-navicon,
  .vc_grid-filter-dropdown.vc_grid-filter-color-white .vc_arrow-icon-navicon {
    color: #FFFFFF;
  }
  .vc_grid-filter-select .vc_grid-styled-select,
  .vc_grid-filter-dropdown .vc_grid-styled-select {
    border: 1px solid #ccc;
    display: inline-block;
    height: 30px;
    overflow: hidden;
    padding-right: 5px;
    text-align: left;
    width: auto;
    vertical-align: middle;
  }
  .vc_grid-filter-select .vc_grid-styled-select .vc_arrow-icon-navicon,
  .vc_grid-filter-dropdown .vc_grid-styled-select .vc_arrow-icon-navicon {
    font-size: 17px;
    display: inline;
    vertical-align: middle;
  }
  .vc_grid-filter-select .vc_grid-styled-select select,
  .vc_grid-filter-dropdown .vc_grid-styled-select select {
    background: none repeat scroll 0 0 transparent;
    border: 0 none;
    border-radius: 0;
    height: 30px;
    line-height: 1;
    margin-right: -50px;
    padding: 5px;
    position: relative;
    font-size: 12px;
    z-index: 0;
    cursor: pointer;
    max-width: inherit !important;
  }
}
@media (max-width: 768px) {
  .vc_responsive .vc_grid-filter-select {
    display: block;
  }
  .vc_responsive .vc_grid-filter {
    display: none !important;
  }
}
.owl-carousel {
  /* .owl-animated-out - only for current item */
  /* This is very important class. Use z-index if you want move Out item above In item */
  /* .owl-animated-in - only for upcoming item
  /* This is very important class. Use z-index if you want move In item above Out item */
  /* .fadeOut is style taken from Animation.css and this is how it looks in owl.carousel.css:  */
}
.owl-carousel .owl-item .vc_grid-item {
  -webkit-transform: translate3D(0, 0, 0);
  -ms-transform: translate3D(0, 0, 0);
  transform: translate3D(0, 0, 0);
}
.owl-carousel .owl-animated-out {
  z-index: 0;
}
.owl-carousel .owl-animated-in {
  z-index: 1;
}
.vc-hoverbox-wrapper,
.vc-hoverbox-wrapper * {
  box-sizing: border-box;
}
.vc-hoverbox-wrapper.vc-hoverbox-shape--rounded .vc-hoverbox-front,
.vc-hoverbox-wrapper.vc-hoverbox-shape--rounded .vc-hoverbox-back {
  border-radius: 10px;
}
.vc-hoverbox-wrapper.vc-hoverbox-shape--round .vc-hoverbox-front,
.vc-hoverbox-wrapper.vc-hoverbox-shape--round .vc-hoverbox-back {
  border-radius: 50px;
}
.vc-hoverbox-wrapper.vc-hoverbox-align--center {
  text-align: center;
}
.vc-hoverbox-wrapper.vc-hoverbox-align--left {
  text-align: left;
}
.vc-hoverbox-wrapper.vc-hoverbox-align--right {
  text-align: right;
}
.vc-hoverbox-wrapper .vc-hoverbox {
  position: relative;
  display: inline-block;
  text-align: center;
  width: 100%;
}
.vc-hoverbox-wrapper.vc-hoverbox-width--100 .vc-hoverbox {
  width: 100%;
}
.vc-hoverbox-wrapper.vc-hoverbox-width--90 .vc-hoverbox {
  width: 90%;
}
.vc-hoverbox-wrapper.vc-hoverbox-width--80 .vc-hoverbox {
  width: 80%;
}
.vc-hoverbox-wrapper.vc-hoverbox-width--70 .vc-hoverbox {
  width: 70%;
}
.vc-hoverbox-wrapper.vc-hoverbox-width--60 .vc-hoverbox {
  width: 60%;
}
.vc-hoverbox-wrapper.vc-hoverbox-width--50 .vc-hoverbox {
  width: 50%;
}
.vc-hoverbox-wrapper.vc-hoverbox-width--40 .vc-hoverbox {
  width: 40%;
}
.vc-hoverbox-wrapper.vc-hoverbox-width--30 .vc-hoverbox {
  width: 30%;
}
.vc-hoverbox-wrapper.vc-hoverbox-width--20 .vc-hoverbox {
  width: 20%;
}
.vc-hoverbox-wrapper.vc-hoverbox-width--10 .vc-hoverbox {
  width: 10%;
}
.vc-hoverbox-inner {
  width: 100%;
  display: inline-block;
  min-height: 250px;
}
.vc-hoverbox-inner :last-child {
  margin-bottom: 0;
}
.vc-hoverbox-block {
  height: 100%;
  width: 100%;
  backface-visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: transform 0.5s ease-in-out;
  transform-style: preserve-3d;
  background-size: cover;
  background-position: center;
}
.vc-hoverbox-block-inner {
  flex-shrink: 0;
  padding: 20px;
}
.vc-hoverbox-front {
  transform: rotateY(0deg);
}
.vc-hoverbox-back {
  transform: rotateY(180deg);
}
.vc-hoverbox:hover .vc-hoverbox-front {
  transform: rotateY(-180deg);
}
.vc-hoverbox:hover .vc-hoverbox-back {
  transform: rotateY(0deg);
}
.vc-hoverbox-wrapper.vc-hoverbox-direction--reverse .vc-hoverbox-front {
  transform: rotateY(180deg);
}
.vc-hoverbox-wrapper.vc-hoverbox-direction--reverse .vc-hoverbox-back {
  transform: rotateY(0deg);
}
.vc-hoverbox-wrapper.vc-hoverbox-direction--reverse .vc-hoverbox:hover .vc-hoverbox-front {
  transform: rotateY(0deg);
}
.vc-hoverbox-wrapper.vc-hoverbox-direction--reverse .vc-hoverbox:hover .vc-hoverbox-back {
  transform: rotateY(-180deg);
}
@font-face {
  font-family: 'vc_grid_v1';
  src: url('//app.ieee.org/wp-content/plugins/visual-composer/assets/fonts/vc_grid/vc_grid_v1.eot?-9hbgac');
  src: url('//app.ieee.org/wp-content/plugins/visual-composer/assets/fonts/vc_grid/vc_grid_v1.eot?#iefix-9hbgac') format('embedded-opentype'), url('//app.ieee.org/wp-content/plugins/visual-composer/assets/fonts/vc_grid/vc_grid_v1.woff?-9hbgac') format('woff'), url('//app.ieee.org/wp-content/plugins/visual-composer/assets/fonts/vc_grid/vc_grid_v1.ttf?-9hbgac') format('truetype'), url('//app.ieee.org/wp-content/plugins/visual-composer/assets/fonts/vc_grid/vc_grid_v1.svg?-9hbgac#vc_grid_v1') format('svg');
  font-weight: normal;
  font-style: normal;
}
[class^="vc_arrow-icon-"],
[class*=" vc_arrow-icon-"] {
  font-family: 'vc_grid_v1';
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.vc_arrow-icon-minus:before {
  content: "\e61c";
}
.vc_arrow-icon-plus:before {
  content: "\e61d";
}
.vc_arrow-icon-arrow_down:before {
  content: "\e61e";
}
.vc_arrow-icon-arrow_up:before {
  content: "\e61f";
}
.vc_arrow-icon-arrow_01_left:before {
  content: "\e600";
}
.vc_arrow-icon-arrow_01_right:before {
  content: "\e601";
}
.vc_arrow-icon-arrow_02_left:before {
  content: "\e602";
}
.vc_arrow-icon-arrow_02_right:before {
  content: "\e603";
}
.vc_arrow-icon-arrow_03_left:before {
  content: "\e604";
}
.vc_arrow-icon-arrow_03_right:before {
  content: "\e605";
}
.vc_arrow-icon-arrow_04_left:before {
  content: "\e606";
}
.vc_arrow-icon-arrow_04_right:before {
  content: "\e607";
}
.vc_arrow-icon-arrow_05_left:before {
  content: "\e608";
}
.vc_arrow-icon-arrow_05_right:before {
  content: "\e609";
}
.vc_arrow-icon-arrow_06_left:before {
  content: "\e60a";
}
.vc_arrow-icon-arrow_06_right:before {
  content: "\e60b";
}
.vc_arrow-icon-arrow_07_left:before {
  content: "\e60c";
}
.vc_arrow-icon-arrow_07_right:before {
  content: "\e60d";
}
.vc_arrow-icon-arrow_08_left:before {
  content: "\e60e";
}
.vc_arrow-icon-arrow_08_right:before {
  content: "\e60f";
}
.vc_arrow-icon-arrow_09_left:before {
  content: "\e610";
}
.vc_arrow-icon-arrow_09_right:before {
  content: "\e611";
}
.vc_arrow-icon-arrow_10_left:before {
  content: "\e612";
}
.vc_arrow-icon-arrow_10_right:before {
  content: "\e613";
}
.vc_arrow-icon-arrow_11_left:before {
  content: "\e614";
}
.vc_arrow-icon-arrow_11_right:before {
  content: "\e615";
}
.vc_arrow-icon-arrow_12_left:before {
  content: "\e616";
}
.vc_arrow-icon-arrow_12_right:before {
  content: "\e617";
}
.vc_arrow-icon-navicon:before {
  content: "\f0c9";
}
/* CSS Animations */
.wpb_animate_when_almost_visible {
  opacity: 0;
  filter: alpha(opacity=0);
}
.wpb_animate_when_almost_visible:not(.wpb_start_animation) {
  -webkit-animation: none;
  -o-animation: none;
  animation: none;
}
.wpb_top-to-bottom,
.top-to-bottom {
  -webkit-animation: wpb_ttb 0.7s 1 cubic-bezier(0.175, 0.885, 0.32, 1.275);
  -o-animation: wpb_ttb 0.7s 1 cubic-bezier(0.175, 0.885, 0.32, 1.275);
  animation: wpb_ttb 0.7s 1 cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.wpb_bottom-to-top,
.bottom-to-top {
  -webkit-animation: wpb_btt 0.7s 1 cubic-bezier(0.175, 0.885, 0.32, 1.275);
  -o-animation: wpb_btt 0.7s 1 cubic-bezier(0.175, 0.885, 0.32, 1.275);
  animation: wpb_btt 0.7s 1 cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.wpb_left-to-right,
.left-to-right {
  -webkit-animation: wpb_ltr 0.7s 1 cubic-bezier(0.175, 0.885, 0.32, 1.275);
  -o-animation: wpb_ltr 0.7s 1 cubic-bezier(0.175, 0.885, 0.32, 1.275);
  animation: wpb_ltr 0.7s 1 cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.wpb_right-to-left,
.right-to-left {
  -webkit-animation: wpb_rtl 0.7s 1 cubic-bezier(0.175, 0.885, 0.32, 1.275);
  -o-animation: wpb_rtl 0.7s 1 cubic-bezier(0.175, 0.885, 0.32, 1.275);
  animation: wpb_rtl 0.7s 1 cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.wpb_appear,
.appear {
  -webkit-animation: wpb_appear 0.7s 1 cubic-bezier(0.175, 0.885, 0.32, 1.275);
  -o-animation: wpb_appear 0.7s 1 cubic-bezier(0.175, 0.885, 0.32, 1.275);
  animation: wpb_appear 0.7s 1 cubic-bezier(0.175, 0.885, 0.32, 1.275);
  -webkit-transform: scale(1);
  -ms-transform: scale(1);
  -o-transform: scale(1);
  transform: scale(1);
}
.wpb_start_animation {
  opacity: 1;
  filter: alpha(opacity=100);
}
/* Top to bottom keyframes */
@-webkit-keyframes wpb_ttb {
  0% {
    -webkit-transform: translate(0, -10%);
    opacity: 0;
    filter: alpha(opacity=0);
  }
  100% {
    -webkit-transform: translate(0, 0);
    opacity: 1;
    filter: alpha(opacity=100);
  }
}
@-moz-keyframes wpb_ttb {
  0% {
    -moz-transform: translate(0, -10%);
    opacity: 0;
    filter: alpha(opacity=0);
  }
  100% {
    -moz-transform: translate(0, 0);
    opacity: 1;
    filter: alpha(opacity=100);
  }
}
@-o-keyframes wpb_ttb {
  0% {
    -o-transform: translate(0, -10%);
    opacity: 0;
    filter: alpha(opacity=0);
  }
  100% {
    -o-transform: translate(0, 0);
    opacity: 1;
    filter: alpha(opacity=100);
  }
}
@keyframes wpb_ttb {
  0% {
    -webkit-transform: translate(0, -10%);
    -ms-transform: translate(0, -10%);
    -o-transform: translate(0, -10%);
    transform: translate(0, -10%);
    opacity: 0;
    filter: alpha(opacity=0);
  }
  100% {
    -webkit-transform: translate(0, 0);
    -ms-transform: translate(0, 0);
    -o-transform: translate(0, 0);
    transform: translate(0, 0);
    opacity: 1;
    filter: alpha(opacity=100);
  }
}
/* Bottom to top keyframes */
@-webkit-keyframes wpb_btt {
  0% {
    -webkit-transform: translate(0, 10%);
    opacity: 0;
    filter: alpha(opacity=0);
  }
  100% {
    -webkit-transform: translate(0, 0);
    opacity: 1;
    filter: alpha(opacity=100);
  }
}
@-moz-keyframes wpb_btt {
  0% {
    -moz-transform: translate(0, 10%);
    opacity: 0;
    filter: alpha(opacity=0);
  }
  100% {
    -moz-transform: translate(0, 0);
    opacity: 1;
    filter: alpha(opacity=100);
  }
}
@-o-keyframes wpb_btt {
  0% {
    -o-transform: translate(0, 10%);
    opacity: 0;
    filter: alpha(opacity=0);
  }
  100% {
    -o-transform: translate(0, 0);
    opacity: 1;
    filter: alpha(opacity=100);
  }
}
@keyframes wpb_btt {
  0% {
    -webkit-transform: translate(0, 10%);
    -ms-transform: translate(0, 10%);
    -o-transform: translate(0, 10%);
    transform: translate(0, 10%);
    opacity: 0;
    filter: alpha(opacity=0);
  }
  100% {
    -webkit-transform: translate(0, 0);
    -ms-transform: translate(0, 0);
    -o-transform: translate(0, 0);
    transform: translate(0, 0);
    opacity: 1;
    filter: alpha(opacity=100);
  }
}
/* Left to right keyframes */
@-webkit-keyframes wpb_ltr {
  0% {
    -webkit-transform: translate(-10%, 0);
    opacity: 0;
    filter: alpha(opacity=0);
  }
  100% {
    -webkit-transform: translate(0, 0);
    opacity: 1;
    filter: alpha(opacity=100);
  }
}
@-moz-keyframes wpb_ltr {
  0% {
    -moz-transform: translate(-10%, 0);
    opacity: 0;
    filter: alpha(opacity=0);
  }
  100% {
    -moz-transform: translate(0, 0);
    opacity: 1;
    filter: alpha(opacity=100);
  }
}
@-o-keyframes wpb_ltr {
  0% {
    -o-transform: translate(-10%, 0);
    opacity: 0;
    filter: alpha(opacity=0);
  }
  100% {
    -o-transform: translate(0, 0);
    opacity: 1;
    filter: alpha(opacity=100);
  }
}
@keyframes wpb_ltr {
  0% {
    -webkit-transform: translate(-10%, 0);
    -ms-transform: translate(-10%, 0);
    -o-transform: translate(-10%, 0);
    transform: translate(-10%, 0);
    opacity: 0;
    filter: alpha(opacity=0);
  }
  100% {
    -webkit-transform: translate(0, 0);
    -ms-transform: translate(0, 0);
    -o-transform: translate(0, 0);
    transform: translate(0, 0);
    opacity: 1;
    filter: alpha(opacity=100);
  }
}
/* Right to left keyframes */
@-webkit-keyframes wpb_rtl {
  0% {
    -webkit-transform: translate(10%, 0);
    opacity: 0;
    filter: alpha(opacity=0);
  }
  100% {
    -webkit-transform: translate(0, 0);
    opacity: 1;
    filter: alpha(opacity=100);
  }
}
@-moz-keyframes wpb_rtl {
  0% {
    -moz-transform: translate(10%, 0);
    opacity: 0;
    filter: alpha(opacity=0);
  }
  100% {
    -moz-transform: translate(0, 0);
    opacity: 1;
    filter: alpha(opacity=100);
  }
}
@-o-keyframes wpb_rtl {
  0% {
    -o-transform: translate(10%, 0);
    opacity: 0;
    filter: alpha(opacity=0);
  }
  100% {
    -o-transform: translate(0, 0);
    opacity: 1;
    filter: alpha(opacity=100);
  }
}
@keyframes wpb_rtl {
  0% {
    -webkit-transform: translate(10%, 0);
    -ms-transform: translate(10%, 0);
    -o-transform: translate(10%, 0);
    transform: translate(10%, 0);
    opacity: 0;
    filter: alpha(opacity=0);
  }
  100% {
    -webkit-transform: translate(0, 0);
    -ms-transform: translate(0, 0);
    -o-transform: translate(0, 0);
    transform: translate(0, 0);
    opacity: 1;
    filter: alpha(opacity=100);
  }
}
/* Appear from center keyframes */
@-webkit-keyframes wpb_appear {
  0% {
    -webkit-transform: scale(0.5);
    opacity: 0.1;
    filter: alpha(opacity=10);
  }
  100% {
    -webkit-transform: scale(1);
    opacity: 1;
    filter: alpha(opacity=100);
  }
}
@-moz-keyframes wpb_appear {
  0% {
    -moz-transform: scale(0.5);
    opacity: 0.1;
    filter: alpha(opacity=10);
  }
  100% {
    -moz-transform: scale(1);
    opacity: 1;
    filter: alpha(opacity=100);
  }
}
@-o-keyframes wpb_appear {
  0% {
    -o-transform: scale(0.5);
    opacity: 0.1;
    filter: alpha(opacity=10);
  }
  100% {
    -o-transform: scale(1);
    opacity: 1;
    filter: alpha(opacity=100);
  }
}
@keyframes wpb_appear {
  0% {
    -webkit-transform: scale(0.5);
    -ms-transform: scale(0.5);
    -o-transform: scale(0.5);
    transform: scale(0.5);
    opacity: 0.1;
    filter: alpha(opacity=10);
  }
  100% {
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    -o-transform: scale(1);
    transform: scale(1);
    opacity: 1;
    filter: alpha(opacity=100);
  }
}
.vc-spinner::before {
  content: '';
  width: 16px;
  height: 16px;
  display: inline-block;
  pointer-events: none;
  margin-top: 6px;
  background: url('//app.ieee.org/wp-content/plugins/visual-composer/assets/images/spinner.gif') no-repeat;
  background-position-x: center;
  background-position-y: center;
}
.vc-spinner.vc-spinner-complete::before {
  background-image: url('//app.ieee.org/wp-content/plugins/visual-composer/assets/vc/tick.png');
}
.vc-spinner.vc-spinner-failed::before {
  background-image: url('//app.ieee.org/wp-content/plugins/visual-composer/assets/vc/remove.png');
}
.vc-woocommerce-add-to-cart-loading.vc_grid-item-mini {
  position: relative;
}
.vc-woocommerce-add-to-cart-loading.vc_grid-item-mini .vc_gitem-zone {
  opacity: 0 !important;
  filter: alpha(opacity=0) !important;
  -webkit-transform: none !important;
  -ms-transform: none !important;
  transform: none !important;
  -webkit-transition: none !important;
  -o-transition: none !important;
  transition: none !important;
}
.vc-woocommerce-add-to-cart-loading.vc_grid-item-mini .vc_wc-load-add-to-loader-wrapper {
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -50px;
  left: 0;
}
.vc-woocommerce-add-to-cart-loading.vc_grid-item-mini .vc_wc-load-add-to-loader {
  margin: 2em auto;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  -webkit-animation-delay: 0.16s;
  animation-delay: 0.16s;
  height: 50px;
}
.vc-woocommerce-add-to-cart-loading.vc_grid-item-mini .vc_wc-load-add-to-loader:before,
.vc-woocommerce-add-to-cart-loading.vc_grid-item-mini .vc_wc-load-add-to-loader:after,
.vc-woocommerce-add-to-cart-loading.vc_grid-item-mini .vc_wc-load-add-to-loader {
  border-radius: 50%;
  width: 12px;
  height: 12px;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation: vc_woo-add-cart-load 1.8s infinite ease-in-out;
  animation: vc_woo-add-cart-load 1.8s infinite ease-in-out;
}
.vc-woocommerce-add-to-cart-loading.vc_grid-item-mini .vc_wc-load-add-to-loader:before {
  left: -20px;
}
.vc-woocommerce-add-to-cart-loading.vc_grid-item-mini .vc_wc-load-add-to-loader:after {
  left: 20px;
  -webkit-animation-delay: 0.32s;
  animation-delay: 0.32s;
}
.vc-woocommerce-add-to-cart-loading.vc_grid-item-mini .vc_wc-load-add-to-loader:before,
.vc-woocommerce-add-to-cart-loading.vc_grid-item-mini .vc_wc-load-add-to-loader:after {
  content: '';
  position: absolute;
  top: 0;
}
@-webkit-keyframes vc_woo-add-cart-load {
  0%,
  80%,
  100% {
    box-shadow: 0 2.5em 0 -1.3em rgba(235, 235, 235, 0.75);
  }
  40% {
    box-shadow: 0 2.5em 0 0 rgba(235, 235, 235, 0.75);
  }
}
@keyframes vc_woo-add-cart-load {
  0%,
  80%,
  100% {
    box-shadow: 0 2.5em 0 -1.3em rgba(235, 235, 235, 0.75);
  }
  40% {
    box-shadow: 0 2.5em 0 0 rgba(235, 235, 235, 0.75);
  }
}
.vc_grid-item-mini .added_to_cart.wc-forward {
  display: none;
}