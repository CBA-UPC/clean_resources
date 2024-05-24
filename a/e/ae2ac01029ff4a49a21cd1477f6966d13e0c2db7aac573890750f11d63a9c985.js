(function($){$.fn.gslider=function(settings){var config={groupid:0,speed:3000,repeat_impressions:'Y'};if(settings)$.extend(true,config,settings)
this.each(function(i){var $cont=$(this);var gallery=$(this).children();var length=gallery.length;var timer=0;var counter=1;var repeat=1;if(length==1){var tracker=$cont.find(".c-1 a").attr("data-track");if(typeof tracker!=='undefined'){impressiontracker(tracker);}}
if(length>1){$cont.find(".c-1").show();for(n=2;n<=length;n++){$cont.find(".c-"+n).hide();}
timer=setInterval(function(){play();},config.speed);}
function transitionTo(gallery,index){if((counter>=length)||(index>=length)){counter=1;repeat=2;}else{counter++;}
$cont.find(".c-"+counter).show();var tracker=$cont.find(".c-"+counter+' a').attr("data-track");if(typeof tracker!=='undefined'){if((repeat==1&&config.repeat_impressions=='N')||config.repeat_impressions=='Y'){impressiontracker(tracker);}}
$cont.find(".c-"+index).hide();}
function play(){transitionTo(gallery,counter);}
function impressiontracker(tracker){admeta=atob(tracker).split(',');var name=escape('adrotate-'+admeta[0]);var now=Math.round(Date.now()/1000);var expired=now-admeta[3];var session=sessionStorage.getItem(name);if(session==null){session=0;}
if(session<=expired){$.post(impression_object.ajax_url,{'action':'adrotate_impression','track':tracker});sessionStorage.setItem(name,now);delete tracker;}}});return this;};}(jQuery));e=function(t){return this.isShown?this.hide():this.show(t)},a.prototype.show=function(i){var o=this,t=n.Event("show.bs.modal",{relatedTarget:i});this.$element.trigger(t),this.isShown||t.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',n.proxy(this.hide,this)),this.backdrop(function(){var t=n.support.transition&&o.$element.hasClass("fade"),e=(o.$element.parent().length||o.$element.appendTo(o.$body),o.$element.show().scrollTop(0),o.options.backdrop&&o.adjustBackdrop(),o.adjustDialog(),t&&o.$element[0].offsetWidth,o.$element.addClass("in").attr("aria-hidden",!1),o.enforceFocus(),n.Event("shown.bs.modal",{relatedTarget:i}));t?o.$element.find(".modal-dialog").one("bsTransitionEnd",function(){o.$element.trigger("focus").trigger(e)}).emulateTransitionEnd(a.TRANSITION_DURATION):o.$element.trigger("focus").trigger(e)}))},a.prototype.hide=function(t){t&&t.preventDefault(),t=n.Event("hide.bs.modal"),this.$element.trigger(t),this.isShown&&!t.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),n(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal"),n.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",n.proxy(this.hideModal,this)).emulateTransitionEnd(a.TRANSITION_DURATION):this.hideModal())},a.prototype.enforceFocus=function(){n(document).off("focusin.bs.modal").on("focusin.bs.modal",n.proxy(function(t){this.$element[0]===t.target||this.$element.has(t.target).length||this.$element.trigger("focus")},this))},a.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",n.proxy(function(t){27==t.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},a.prototype.resize=function(){this.isShown?n(window).on("resize.bs.modal",n.proxy(this.handleUpdate,this)):n(window).off("resize.bs.modal")},a.prototype.hideModal=function(){var t=this;this.$element.hide(),this.backdrop(function(){t.$body.removeClass("modal-open"),t.resetAdjustments(),t.resetScrollbar(),t.$element.trigger("hidden.bs.modal")})},a.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},a.prototype.backdrop=function(t){var e,i=this,o=this.$element.hasClass("fade")?"fade":"";this.isShown&&this.options.backdrop?(e=n.support.transition&&o,this.$backdrop=n('<div class="modal-backdrop '+o+'" />').prependTo(this.$element).on("click.dismiss.bs.modal",n.proxy(function(t){t.target===t.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),e&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),t&&(e?this.$backdrop.one("bsTransitionEnd",t).emulateTransitionEnd(a.BACKDROP_TRANSITION_DURATION):t())):!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),o=function(){i.removeBackdrop(),t&&t()},n.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",o).emulateTransitionEnd(a.BACKDROP_TRANSITION_DURATION):o()):t&&t()},a.prototype.handleUpdate=function(){this.options.backdrop&&this.adjustBackdrop(),this.adjustDialog()},a.prototype.adjustBackdrop=function(){this.$backdrop.css("height",0).css("height",this.$element[0].scrollHeight)},a.prototype.adjustDialog=function(){var t=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&t?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!t?this.scrollbarWidth:""})},a.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},a.prototype.checkScrollbar=function(){this.bodyIsOverflowing=document.body.scrollHeight>document.documentElement.clientHeight,this.scrollbarWidth=this.measureScrollbar()},a.prototype.setScrollbar=function(){var t=parseInt(this.$body.css("padding-right")||0,10);this.bodyIsOverflowing&&this.$body.css("padding-right",t+this.scrollbarWidth)},a.prototype.resetScrollbar=function(){this.$body.css("padding-right","")},a.prototype.measureScrollbar=function(){var t=document.createElement("div"),e=(t.className="modal-scrollbar-measure",this.$body.append(t),t.offsetWidth-t.clientWidth);return this.$body[0].removeChild(t),e};var t=n.fn.modal;n.fn.modal=s,n.fn.modal.Constructor=a,n.fn.modal.noConflict=function(){return n.fn.modal=t,this},n(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(t){var e=n(this),i=e.attr("href"),o=n(e.attr("data-target")||i&&i.replace(/.*(?=#[^\s]+$)/,"")),i=o.data("bs.modal")?"toggle":n.extend({remote:!/#/.test(i)&&i},o.data(),e.data());e.is("a")&&t.preventDefault(),o.one("show.bs.modal",function(t){t.isDefaultPrevented()||o.one("hidden.bs.modal",function(){e.is(":visible")&&e.trigger("focus")})}),s.call(o,i,this)})}(jQuery),function(a){"use strict";function r(t){this.element=a(t)}function e(i){return this.each(function(){var t=a(this),e=t.data("bs.tab");e||t.data("bs.tab",e=new r(this)),"string"==typeof i&&e[i]()})}r.VERSION="3.3.1",r.TRANSITION_DURATION=150,r.prototype.show=function(){var t,e,i,o=this.element,s=o.closest("ul:not(.dropdown-menu)"),n=(n=o.data("target"))||(n=o.attr("href"))&&n.replace(/.*(?=#[^\s]*$)/,"");o.parent("li").hasClass("active")||(t=s.find(".active:last a"),e=a.Event("hide.bs.tab",{relatedTarget:o[0]}),i=a.Event("show.bs.tab",{relatedTarget:t[0]}),t.trigger(e),o.trigger(i),i.isDefaultPrevented())||e.isDefaultPrevented()||(i=a(n),this.activate(o.closest("li"),s),this.activate(i,i.parent(),function(){t.trigger({type:"hidden.bs.tab",relatedTarget:o[0]}),o.trigger({type:"shown.bs.tab",relatedTarget:t[0]})}))},r.prototype.activate=function(t,e,i){var o=e.find("> .active"),s=i&&a.support.transition&&(o.length&&o.hasClass("fade")||!!e.find("> .fade").length);function n(){o.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),t.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),s?(t[0].offsetWidth,t.addClass("in")):t.removeClass("fade"),t.parent(".dropdown-menu")&&t.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),i&&i()}o.length&&s?o.one("bsTransitionEnd",n).emulateTransitionEnd(r.TRANSITION_DURATION):n(),o.removeClass("in")};function t(t){t.preventDefault(),e.call(a(this),"show")}var i=a.fn.tab;a.fn.tab=e,a.fn.tab.Constructor=r,a.fn.tab.noConflict=function(){return a.fn.tab=i,this};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',t).on("click.bs.tab.data-api",'[data-toggle="pill"]',t)}(jQuery),function(l){"use strict";function h(t,e){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",t,e)}h.VERSION="3.3.1",h.TRANSITION_DURATION=150,h.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},h.prototype.init=function(t,e,i){this.enabled=!0,this.type=t,this.$element=l(e),this.options=this.getOptions(i),this.$viewport=this.options.viewport&&l(this.options.viewport.selector||this.options.viewport);for(var o=this.options.trigger.split(" "),s=o.length;s--;){var n,a=o[s];"click"==a?this.$element.on("click."+this.type,this.options.selector,l.proxy(this.toggle,this)):"manual"!=a&&(n="hover"==a?"mouseleave":"focusout",this.$element.on(("hover"==a?"mouseenter":"focusin")+"."+this.type,this.options.selector,l.proxy(this.enter,this)),this.$element.on(n+"."+this.type,this.options.selector,l.proxy(this.leave,this)))}this.options.selector?this._options=l.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},h.prototype.getDefaults=function(){return h.DEFAULTS},h.prototype.getOptions=function(t){return(t=l.extend({},this.getDefaults(),this.$element.data(),t)).delay&&"number"==typeof t.delay&&(t.delay={show:t.delay,hide:t.delay}),t},h.prototype.getDelegateOptions=function(){var i={},o=this.getDefaults();return this._options&&l.each(this._options,function(t,e){o[t]!=e&&(i[t]=e)}),i},h.prototype.enter=function(t){var e=t instanceof this.constructor?t:l(t.currentTarget).data("bs."+this.type);if(e&&e.$tip&&e.$tip.is(":visible"))e.hoverState="in";else{if(e||(e=new this.constructor(t.currentTarget,this.getDelegateOptions()),l(t.currentTarget).data("bs."+this.type,e)),clearTimeout(e.timeout),e.hoverState="in",!e.options.delay||!e.options.delay.show)return e.show();e.timeout=setTimeout(function(){"in"==e.hoverState&&e.show()},e.options.delay.show)}},h.prototype.leave=function(t){var e=t instanceof this.constructor?t:l(t.currentTarget).data("bs."+this.type);if(e||(e=new this.constructor(t.currentTarget,this.getDelegateOptions()),l(t.currentTarget).data("bs."+this.type,e)),clearTimeout(e.timeout),e.hoverState="out",!e.options.delay||!e.options.delay.hide)return e.hide();e.timeout=setTimeout(function(){"out"==e.hoverState&&e.hide()},e.options.delay.hide)},h.prototype.show=function(){var e,t,i,o,s,n,a,r=l.Event("show.bs."+this.type);this.hasContent()&&this.enabled&&(this.$element.trigger(r),s=l.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]),!r.isDefaultPrevented())&&s&&(r=(e=this).tip(),s=this.getUID(this.type),this.setContent(),r.attr("id",s),this.$element.attr("aria-describedby",s),this.options.animation&&r.addClass("fade"),s="function"==typeof this.options.placement?this.options.placement.call(this,r[0],this.$element[0]):this.options.placement,(a=(t=/\s?auto?\s?/i).test(s))&&(s=s.replace(t,"")||"top"),r.detach().css({top:0,left:0,display:"block"}).addClass(s).data("bs."+this.type,this),this.options.container?r.appendTo(this.options.container):r.insertAfter(this.$element),t=this.getPosition(),i=r[0].offsetWidth,o=r[0].offsetHeight,a&&(a=s,n=this.options.container?l(this.options.container):this.$element.parent(),n=this.getPosition(n),s="bottom"==s&&t.bottom+o>n.bottom?"top":"top"==s&&t.top-o<n.top?"bottom":"right"==s&&t.right+i>n.width?"left":"left"==s&&t.left-i<n.left?"right":s,r.removeClass(a).addClass(s)),n=this.getCalculatedOffset(s,t,i,o),this.applyPlacement(n,s),a=function(){var t=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==t&&e.leave(e)},l.support.transition&&this.$tip.hasClass("fade")?r.one("bsTransitionEnd",a).emulateTransitionEnd(h.TRANSITION_DURATION):a())},h.prototype.applyPlacement=function(t,e){var i=this.tip(),o=i[0].offsetWidth,s=i[0].offsetHeight,n=parseInt(i.css("margin-top"),10),a=parseInt(i.css("margin-left"),10),n=(isNaN(n)&&(n=0),isNaN(a)&&(a=0),t.top=t.top+n,t.left=t.left+a,l.offset.setOffset(i[0],l.extend({using:function(t){i.css({top:Math.round(t.top),left:Math.round(t.left)})}},t),0),i.addClass("in"),i[0].offsetWidth),a=i[0].offsetHeight,r=("top"==e&&a!=s&&(t.top=t.top+s-a),this.getViewportAdjustedDelta(e,t,n,a)),e=(r.left?t.left+=r.left:t.top+=r.top,/top|bottom/.test(e)),o=e?2*r.left-o+n:2*r.top-s+a,n=e?"offsetWidth":"offsetHeight";i.offset(t),this.replaceArrow(o,i[0][n],e)},h.prototype.replaceArrow=function(t,e,i){this.arrow().css(i?"left":"top",50*(1-t/e)+"%").css(i?"top":"left","")},h.prototype.setContent=function(){var t=this.tip(),e=this.getTitle();t.find(".tooltip-inner")[this.options.html?"html":"text"](e),t.removeClass("fade in top bottom left right")},h.prototype.hide=function(t){var e=this,i=this.tip(),o=l.Event("hide.bs."+this.type);function s(){"in"!=e.hoverState&&i.detach(),e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),t&&t()}if(this.$element.trigger(o),!o.isDefaultPrevented())return i.removeClass("in"),l.support.transition&&this.$tip.hasClass("fade")?i.one("bsTransitionEnd",s).emulateTransitionEnd(h.TRANSITION_DURATION):s(),this.hoverState=null,this},h.prototype.fixTitle=function(){var t=this.$element;!t.attr("title")&&"string"==typeof t.attr("data-original-title")||t.attr("data-original-title",t.attr("title")||"").attr("title","")},h.prototype.hasContent=function(){return this.getTitle()},h.prototype.getPosition=function(t){var e=(t=t||this.$element)[0],i="BODY"==e.tagName,e=e.getBoundingClientRect(),o=(null==e.width&&(e=l.extend({},e,{width:e.right-e.left,height:e.bottom-e.top})),i?{top:0,left:0}:t.offset()),t={scroll:i?document.documentElement.scrollTop||document.body.scrollTop:t.scrollTop()},i=i?{width:l(window).width(),height:l(window).height()}:null;return l.extend({},e,t,i,o)},h.prototype.getCalculatedOffset=function(t,e,i,o){return"bottom"==t?{top:e.top+e.height,left:e.left+e.width/2-i/2}:"top"==t?{top:e.top-o,left:e.left+e.width/2-i/2}:"left"==t?{top:e.top+e.height/2-o/2,left:e.left-i}:{top:e.top+e.height/2-o/2,left:e.left+e.width}},h.prototype.getViewportAdjustedDelta=function(t,e,i,o){var s,n,a={top:0,left:0};return this.$viewport&&(s=this.options.viewport&&this.options.viewport.padding||0,n=this.getPosition(this.$viewport),/right|left/.test(t)?(t=e.top-s-n.scroll,o=e.top+s-n.scroll+o,t<n.top?a.top=n.top-t:o>n.top+n.height&&(a.top=n.top+n.height-o)):(t=e.left-s,o=e.left+s+i,t<n.left?a.left=n.left-t:o>n.width&&(a.left=n.left+n.width-o))),a},h.prototype.getTitle=function(){var t=this.$element,e=this.options;return t.attr("data-original-title")||("function"==typeof e.title?e.title.call(t[0]):e.title)},h.prototype.getUID=function(t){for(;t+=~~(1e6*Math.random()),document.getElementById(t););return t},h.prototype.tip=function(){return this.$tip=this.$tip||l(this.options.template)},h.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},h.prototype.enable=function(){this.enabled=!0},h.prototype.disable=function(){this.enabled=!1},h.prototype.toggleEnabled=function(){this.enabled=!this.enabled},h.prototype.toggle=function(t){var e=this;t&&!(e=l(t.currentTarget).data("bs."+this.type))&&(e=new this.constructor(t.currentTarget,this.getDelegateOptions()),l(t.currentTarget).data("bs."+this.type,e)),e.tip().hasClass("in")?e.leave(e):e.enter(e)},h.prototype.destroy=function(){var t=this;clearTimeout(this.timeout),this.hide(function(){t.$element.off("."+t.type).removeData("bs."+t.type)})};var t=l.fn.tooltip;l.fn.tooltip=function(s){return this.each(function(){var t=l(this),e=t.data("bs.tooltip"),i="object"==typeof s&&s,o=i&&i.selector;!e&&"destroy"==s||(o?(e||t.data("bs.tooltip",e={}),e[o]||(e[o]=new h(this,i))):e||t.data("bs.tooltip",e=new h(this,i)),"string"!=typeof s)||e[s]()})},l.fn.tooltip.Constructor=h,l.fn.tooltip.noConflict=function(){return l.fn.tooltip=t,this}}(jQuery),function(s){"use strict";function n(t,e){this.$element=s(t),this.options=s.extend({},n.DEFAULTS,e),this.$trigger=s(this.options.trigger).filter('[href="#'+t.id+'"], [data-target="#'+t.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()}function i(t){t=t.attr("data-target")||(t=t.attr("href"))&&t.replace(/.*(?=#[^\s]+$)/,"");return s(t)}function a(o){return this.each(function(){var t=s(this),e=t.data("bs.collapse"),i=s.extend({},n.DEFAULTS,t.data(),"object"==typeof o&&o);!e&&i.toggle&&"show"==o&&(i.toggle=!1),e||t.data("bs.collapse",e=new n(this,i)),"string"==typeof o&&e[o]()})}n.VERSION="3.3.1",n.TRANSITION_DURATION=350,n.DEFAULTS={toggle:!0,trigger:'[data-toggle="collapse"]'},n.prototype.dimension=function(){return this.$element.hasClass("width")?"width":"height"},n.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var t=this.$parent&&this.$parent.find("> .panel").children(".in, .collapsing");if(!(t&&t.length&&(o=t.data("bs.collapse"))&&o.transitioning)){var e=s.Event("show.bs.collapse");if(this.$element.trigger(e),!e.isDefaultPrevented()){t&&t.length&&(a.call(t,"hide"),o||t.data("bs.collapse",null));var i=this.dimension(),e=(this.$element.removeClass("collapse").addClass("collapsing")[i](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1,function(){this.$element.removeClass("collapsing").addClass("collapse in")[i](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")});if(!s.support.transition)return e.call(this);var o=s.camelCase(["scroll",i].join("-"));this.$element.one("bsTransitionEnd",s.proxy(e,this)).emulateTransitionEnd(n.TRANSITION_DURATION)[i](this.$element[0][o])}}}},n.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var t=s.Event("hide.bs.collapse");if(this.$element.trigger(t),!t.isDefaultPrevented()){var t=this.dimension(),e=(this.$element[t](this.$element[t]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1,function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")});if(!s.support.transition)return e.call(this);this.$element[t](0).one("bsTransitionEnd",s.proxy(e,this)).emulateTransitionEnd(n.TRANSITION_DURATION)}}},n.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},n.prototype.getParent=function(){return s(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(s.proxy(function(t,e){e=s(e);this.addAriaAndCollapsedClass(i(e),e)},this)).end()},n.prototype.addAriaAndCollapsedClass=function(t,e){var i=t.hasClass("in");t.attr("aria-expanded",i),e.toggleClass("collapsed",!i).attr("aria-expanded",i)};var t=s.fn.collapse;s.fn.collapse=a,s.fn.collapse.Constructor=n,s.fn.collapse.noConflict=function(){return s.fn.collapse=t,this},s(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(t){var e=s(this),t=(e.attr("data-target")||t.preventDefault(),i(e)),e=t.data("bs.collapse")?"toggle":s.extend({},e.data(),{trigger:this});a.call(t,e)})}(jQuery);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    color: #E14D71;
  }

  .font-color-box-hover:hover{
   color: #E14D71;
  }


  /* ---------------
     Menu Mobile, início
     --------------- */

  .hotsite-menu-vertical-mobile-container {
    position: relative;
    margin-top: -20px;
  }

  .hotsite-menu-vertical-mobile,
  .hotsite-menu-vertical-mobile .wrapper-menu-hotsite-vertical,
  .hotsite-menu-vertical-mobile .content-menu,
  .hotsite-menu-vertical-mobile .item-pather-menu,
  .hotsite-menu-vertical-mobile .item-pather-menu.has_child,
  .hotsite-menu-vertical-mobile .sub-menu-hotsite-vertical {
    position: static;
  }

  .hotsite-menu-vertical-mobile {    
    margin-bottom: 20px;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
  }

  .hotsite-menu-vertical-mobile .wrapper-menu-hotsite-vertical {
    width: 100%;
  }

  .hotsite-menu-vertical-mobile .item-pather-menu.has_child:hover .wrapper-menu-hotsite-vertical-children {
    display: none;
  }

  .hotsite-menu-vertical-mobile .item-pather-menu.has_child.open .wrapper-menu-hotsite-vertical-children {
    display: block;
    left: 0;
    padding-bottom: 10px;
    padding-top: 10px;
    top: 38px;
    transition: height 2s;
    width: 100%;
  }

  .hotsite-menu-vertical-mobile .item-children-menu {
    padding: 9px 20px;
  }

  .hotsite-menu-vertical-mobile .item-children-menu .children-link {
    color: #333;
    font-size: 15px;
    font-stretch: normal;
    font-style: normal;
    font-weight: normal;
    letter-spacing: normal;
    line-height: normal;
    text-transform: none;
  }

  .hotsite-menu-vertical-mobile .item-pather-menu {
    padding: 15px 10px 15px;
  }

  .hotsite-menu-vertical-mobile .item-pather-menu:first-child {
    padding-left: 14px;
  }

  .hotsite-menu-vertical-mobile .pather-link {
    color: #999999;
    font-size: 14px;
    font-style: normal;
    font-stretch: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.5px;
    padding: 0;
  }

  /* Menu Mobile, término */

</style>
    <style>
      .top-participants_group{padding:6.4px 0 7.4px 0;position:relative;overflow:hidden;text-align:center;white-space:nowrap}.top-participants_group .owl-stage{margin:0 auto}.top-participants_group .owl-prev.disabled,.top-participants_group .owl-next.disabled{display:none !important}.top-participants_group .owl-prev,.top-participants_group .owl-next{color:#fff;cursor:pointer;font-size:30px;height:100%;line-height:65px;position:absolute;top:0;width:50px}.top-participants_group .owl-prev{background-image:linear-gradient(to left, rgba(0,0,0,0),#000000 90%);left:0;padding-left:15px;text-align:left}.top-participants_group .owl-next{background-image:linear-gradient(to right, rgba(0,0,0,0),#000000 90%);display:block;padding-right:15px;right:0;text-align:right}.top-participants_item{width:57.1px;height:57.1px;list-style:none;border-radius:50%;display:inline-block;border:2px solid;border-color:rgba(0,0,0,0.2);padding:4.5px 2px 0 2.5px;position:relative}.top-participants_link{display:inline-block}.top-participants_img{width:49px;height:49px;border-radius:50%;margin-top:-3px}.top-participants_text{display:block;color:#fff;font-size:10px;text-align:center;text-transform:capitalize;position:absolute;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);bottom:-2px;padding:0 2px;border-radius:2px}.eliminated-yes{-webkit-filter:grayscale(100%);filter:grayscale(100%);filter:gray}.main-r7mobile .top-participants_container{margin:auto;padding:0 10px;position:relative}.main-r7mobile .top-participants{width:100%;left:0;overflow-y:hidden;overflow-x:scroll;margin-bottom:20px;box-shadow:0px 4px 4px 0px rgba(0,0,0,0.1);z-index:1;position:relative}.main-r7mobile .header-hotsite-mobile .link-header{position:relative}.main-r7mobile .top-participants_group{display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-webkit-flex;display:flex;margin-top:-3px;overflow-x:auto;overflow-y:hidden;touch-action:auto !important}.main-r7mobile .top-participants_text{font-weight:bold;font-size:12px;bottom:-2px;transform:initial;margin-left:9px;padding:0 3.3px;max-width:15px;overflow:hidden}.main-r7mobile .top-participants_img{width:35.8px;height:35.8px;margin-left:-1px}.main-r7mobile .top-participants_item{width:42.8px;height:42.8px;margin:0;margin-right:15px}.main-r7mobile .top-participants_item:first-child .top-participants_img{margin-top:0}.main-r7mobile .top-participants_logo:first-child{display:none}.main-r7mobile .top-participants_logo:first-child .top-participants_img{width:inherit;border-radius:inherit;height:inherit}.main-r7mobile .top-participants_logo:first-child .top-participants_link{width:120px;height:50px;margin:-4px 0 0 -2px}.main-r7mobile .top-participants_logo:first-child .top-participants_text{display:none}body:not(.main-r7mobile) .top-participants_group--double .top-participants_item{border:none}body:not(.main-r7mobile) .top-participants_group--double .top-participants_item--double{border-radius:unset;height:50px;margin:0;padding:0;width:90px !important}body:not(.main-r7mobile) .top-participants_group--double .top-participants_link{position:absolute;top:0;right:0;bottom:0;left:0;height:100%;width:100%}body:not(.main-r7mobile) .top-participants_group--double .top-participants_img--double{border-width:2px;border-style:solid;border-color:transparent;width:50px;height:50px;position:absolute;top:0;margin-top:0}body:not(.main-r7mobile) .top-participants_group--double .top-participants_img--double.top-participants_img--mulher{right:0}body:not(.main-r7mobile) .top-participants_group--double .top-participants_img--double.top-participants_img--homem{left:0}.main-r7mobile .top-participants_group--double{display:block;height:50px;margin:0;overflow-x:auto;padding:0;white-space:nowrap;width:100%}.main-r7mobile .top-participants_group--double .top-participants_item--double{border:none;border-radius:unset;display:inline-block;height:50px;margin:0;margin-right:2px;padding:0;top:-3px;width:80px}.main-r7mobile .top-participants_group--double .top-participants_item--double:first-child{margin-right:6px;margin-top:0;top:0;width:120px}.main-r7mobile .top-participants_group--double .top-participants_item--double:first-child .top-participants_link{margin:0}.main-r7mobile .top-participants_group--double .top-participants_item--double:first-child .top-participants_img--mulher{display:none}.main-r7mobile .top-participants_group--double .top-participants_item--double:not(:first-child) .top-participants_link{margin:0;padding:0}.main-r7mobile .top-participants_group--double .top-participants_item--double:not(:first-child) .top-participants_img--double{border-width:2px;border-style:solid;border-color:transparent;height:43px;width:43px}.main-r7mobile .top-participants_group--double .top-participants_item--double:not(:first-child) .top-participants_img--double.top-participants_img--mulher{position:relative;left:-10px}.main-r7mobile .top-participants_group--double .top-participants_item--double:not(:first-child) .top-participants_text{bottom:6px;margin:0;margin-left:-8.5px}

    </style>
    

    <!-- flex_critical_path_css start -->
      <style></style>
    <!-- flex_critical_path_css end -->

    <!-- header bidding -->
    <script>
  var googletag = googletag || {},
      pbjs = pbjs || {},
      PREBID_TIMEOUT = 3000,
      FAILSET_TIMEOUT = 5000,
      adUnits = []; 

  googletag.cmd = googletag.cmd || [];
  pbjs.que      = pbjs.que  || []; 
</script>
    	<script>
  function prebidValidation() {
    var hbUrl = window.location.href.split('?');

    if (hbUrl.length === 2) {

      if (hbUrl[1].indexOf('headerbidding=false') !== -1) {

        // Habilita o carregamento das publicidade via Lazy Load
        var interval = setInterval(function() {
          if (window.R7AdvLazy) {
            window.R7AdvLazy.thisIsReadyToLoad();
            clearInterval(interval);
          }
        }, 1);

        throw new Error("Header bidding stopped");
      }
    }
  }
</script>
	<script>
/**
  prebid.js v8.28.0
  Updated: 2023-12-21
  Adapters 	: Rubicon Project, Smart AdServer, Teads
  Analytics : ATS Analytics
  User ID Modules: Google PAIR ID, LiveRamp RampID
  Modules: userId, rubiconBidAdapter, smartadserverBidAdapter, teadsBidAdapter, atsAnalyticsAdapter, consentManagement, consentManagementGpp, consentManagementUsp, enrichmentFpdModule, gdprEnforcement, gppControl_usnat, gppControl_usstates, gptPreAuction, currency, pairIdSystem, identityLinkIdSystem */
  if(window.pbjs&&window.pbjs.libLoaded)try{window.pbjs.getConfig("debug")&&console.warn("Attempted to load a copy of Prebid.js that clashes with the existing 'pbjs' instance. Load aborted.")}catch(e){}else (function(){
  !function(){var e,n={35706:function(e,n,t){t.d(n,{Pd:function(){return d},Th:function(){return s},_U:function(){return f}});var r=t(55730),i=t(64358),o=t(20265),a=t(34614),u=(0,t(78640).R)(),c="outstream";function s(e){var n=this,t=e.url,o=e.config,a=e.id,u=e.callback,s=e.loaded,d=e.adUnitCode,f=e.renderNow;this.url=t,this.config=o,this.handlers={},this.id=a,this.renderNow=f,this.loaded=s,this.cmd=[],this.push=function(e){"function"==typeof e?n.loaded?e.call():n.cmd.push(e):(0,i.logError)("Commands given to Renderer.push must be wrapped in a function")},this.callback=u||function(){n.loaded=!0,n.process()},this.render=function(){var e=this,n=arguments,o=function(){e._render?e._render.apply(e,n):(0,i.logWarn)("No render function was provided, please use .setRender on the renderer")};l(d)?((0,i.logWarn)("External Js not loaded by Renderer since renderer url and callback is already defined on adUnit ".concat(d)),o()):f?o():(this.cmd.unshift(o),(0,r.B)(t,c,this.callback,this.documentContext))}.bind(this)}function d(e){return!(!e||!e.url&&!e.renderNow)}function f(e,n,t){var r=null;e.config&&e.config.documentResolver&&(r=e.config.documentResolver(n,document,t)),r||(r=document),e.documentContext=r,e.render(n,e.documentContext)}function l(e){var n=u.adUnits,t=(0,a.sE)(n,(function(n){return n.code===e}));if(!t)return!1;var r=(0,o.Z)(t,"renderer"),i=!!(r&&r.url&&r.render),c=(0,o.Z)(t,"mediaTypes.video.renderer"),s=!!(c&&c.url&&c.render);return!!(i&&!0!==r.backupOnly||s&&!0!==c.backupOnly)}s.install=function(e){return new s({url:e.url,config:e.config,id:e.id,callback:e.callback,loaded:e.loaded,adUnitCode:e.adUnitCode,renderNow:e.renderNow})},s.prototype.getConfig=function(){return this.config},s.prototype.setRender=function(e){this._render=e},s.prototype.setEventHandlers=function(e){this.handlers=e},s.prototype.handleVideoEvent=function(e){var n=e.id,t=e.eventName;"function"==typeof this.handlers[t]&&this.handlers[t](),(0,i.logMessage)("Prebid Renderer event for id ".concat(n," type ").concat(t))},s.prototype.process=function(){for(;this.cmd.length>0;)try{this.cmd.shift().call()}catch(e){(0,i.logError)("Error processing Renderer command: ",e)}}},74947:function(e,n,t){t.d(n,{EL:function(){return a},Jt:function(){return l},K$:function(){return i},S1:function(){return r},S5:function(){return o},UE:function(){return u},e:function(){return s},g0:function(){return f},oK:function(){return d},x$:function(){return c}});var r="accessDevice",i="syncUser",o="enrichUfpd",a="enrichEids",u="fetchBids",c="reportAnalytics",s="transmitEids",d="transmitUfpd",f="transmitPreciseGeo",l="transmitTid"},10286:function(e,n,t){t.d(n,{T:function(){return i}});var r=t(86104),i=(0,t(16310).Oj)((function(e){return r.ZP.resolveAlias(e)}))},9633:function(e,n,t){t.d(n,{UL:function(){return i},XG:function(){return a},_U:function(){return u},wu:function(){return r},y2:function(){return o}});var r="prebid",i="bidder",o="userId",a="rtd",u="analytics"},16310:function(e,n,t){t.d(n,{$k:function(){return u},Hw:function(){return p},IV:function(){return g},JR:function(){return a},Ki:function(){return s},Oj:function(){return v},Qf:function(){return f},Ww:function(){return h},bL:function(){return d},bp:function(){return c},cx:function(){return l}});var r=t(4942),i=t(9633),o=t(92797),a="component",u=a+"Type",c=a+"Name",s="adapterCode",d="storageType",f="configName",l="syncType",g="syncUrl",p="_config";function v(e){return function(n,t,o){var d,f=(d={},(0,r.Z)(d,u,n),(0,r.Z)(d,c,t),(0,r.Z)(d,a,"".concat(n,".").concat(t)),d);return n===i.UL&&(f[s]=e(t)),h(Object.assign(f,o))}}var h=(0,o.z3)("sync",(function(e){return e}))},41087:function(e,n,t){t.d(n,{$8:function(){return f},Db:function(){return v},Mp:function(){return w},RD:function(){return h},ZZ:function(){return l},a:function(){return m},hb:function(){return E},js:function(){return b}});var r=t(71002),i=t(93324),o=t(20265),a=t(3193),u=t(50571),c=t(74947);function s(e,n){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,n){if(!e)return;if("string"==typeof e)return d(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return d(e,n)}(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,u=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return a=e.done,e},e:function(e){u=!0,o=e},f:function(){try{a||null==t.return||t.return()}finally{if(u)throw o}}}}function d(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var f=["data","ext.data","yob","gender","keywords","kwarray","id","buyeruid","customdata"].map((function(e){return"user.".concat(e)})).concat("device.ext.cdep"),l=["user.eids","user.ext.eids"],g=["user.geo.lat","user.geo.lon","device.geo.lat","device.geo.lon"];function p(e){return Object.assign({get:function(){},run:function(e,n,t,r,i){var o=t&&t[r];if(m(o)&&i()){var a=this.get(o);void 0===a?delete t[r]:t[r]=a}}},e)}function v(e){return e.forEach((function(e){e.paths=e.paths.map((function(e){var n=e.split("."),t=n.pop();return[n.length>0?n.join("."):null,t]}))})),function(n,t){for(var r=[],a=arguments.length,u=new Array(a>2?a-2:0),c=2;c<a;c++)u[c-2]=arguments[c];var d=h.apply(void 0,[n].concat(u));return e.forEach((function(e){if(!1!==n[e.name]){var a,u=s(e.paths);try{for(u.s();!(a=u.n()).done;){var c=(0,i.Z)(a.value,2),f=c[0],l=c[1],g=null==f?t:(0,o.Z)(t,f);if(r.push(e.run(t,f,g,l,d.bind(null,e))),!1===n[e.name])return}}catch(e){u.e(e)}finally{u.f()}}})),r.filter((function(e){return null!=e}))}}function h(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];return function(n){return e.hasOwnProperty(n.name)||(e[n.name]=!!n.applies.apply(n,t)),e[n.name]}}function m(e){return null!=e&&("object"!==(0,r.Z)(e)||Object.keys(e).length>0)}function b(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u.xD;return function(t){return!n(e,t)}}function y(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u.xD;return[{name:c.e,paths:["userId","userIdAsEids"],applies:b(c.e,e)},{name:c.Jt,paths:["ortb2Imp.ext.tid"],applies:b(c.Jt,e)}].map(p)}function w(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u.xD;return[{name:c.oK,paths:f,applies:b(c.oK,e)},{name:c.e,paths:l,applies:b(c.e,e)},{name:c.g0,paths:g,applies:b(c.g0,e),get:function(e){return Math.round(100*(e+Number.EPSILON))/100}},{name:c.Jt,paths:["source.tid"],applies:b(c.Jt,e)}].map(p)}var E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u.xD,n=v(w(e)),t=v(y(e));return function(e){var r={};return{ortb2:function(t){return n(r,t,e),t},bidRequest:function(n){return t(r,n,e),n}}}}();(0,u.oB)(c.Jt,"enableTIDs config",(function(){if(!a.vc.getConfig("enableTIDs"))return{allow:!1,reason:"TIDs are disabled"}}))},50571:function(e,n,t){t.d(n,{oB:function(){return d},xD:function(){return f}});var r=t(93324),i=t(64358),o=t(16310);function a(e,n){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,n){if(!e)return;if("string"==typeof e)return u(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return u(e,n)}(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,c=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return a=e.done,e},e:function(e){c=!0,o=e},f:function(){try{a||null==t.return||t.return()}finally{if(c)throw o}}}}function u(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,i.prefixLog)("Activity control:"),n={};function t(e){return n[e]=n[e]||[]}function u(n,t,r,i){var a;try{a=r(i)}catch(r){e.logError("Exception in rule ".concat(t," for '").concat(n,"'"),r),a={allow:!1,reason:r}}return a&&Object.assign({activity:n,name:t,component:i[o.JR]},a)}var c={},s=1e3;function d(n){var t=n.activity,r=n.name,i=n.allow,o=n.reason,a=n.component,u="".concat(r," ").concat(i?"allowed":"denied"," '").concat(t,"' for '").concat(a,"'").concat(o?":":""),d=c.hasOwnProperty(u);if(d&&clearTimeout(c[u]),c[u]=setTimeout((function(){return delete c[u]}),s),!d){var f=[u];o&&f.push(o),(i?e.logInfo:e.logWarn).apply(e,f)}}return[function(e,n,i){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:10,a=t(e),u=a.findIndex((function(e){var n=(0,r.Z)(e,1)[0];return o<n})),c=[o,n,i];return a.splice(u<0?a.length:u,0,c),function(){var e=a.indexOf(c);e>=0&&a.splice(e,1)}},function(e,n){var i,o,c,s=a(t(e));try{for(s.s();!(c=s.n()).done;){var f=(0,r.Z)(c.value,3),l=f[0],g=f[1],p=f[2];if(i!==l&&o)break;i=l;var v=u(e,g,p,n);if(v){if(!v.allow)return d(v),!1;o=v}}}catch(e){s.e(e)}finally{s.f()}return o&&d(o),!0}]}(),s=(0,r.Z)(c,2),d=s[0],f=s[1]},13667:function(e,n,t){t.d(n,{Pm:function(){return h},XD:function(){return b},bL:function(){return m}});var r=t(64358),i=t(20265),o=t(52021),a=t(5644),u=t(3193),c=t(35706),s=t(24679),d=t(78653),f=a.FP,l=f.AD_RENDER_FAILED,g=f.AD_RENDER_SUCCEEDED,p=f.STALE_RENDER,v=f.BID_WON;function h(e){var n=e.reason,t=e.message,i=e.bid,a=e.id,u={reason:n,message:t};i&&(u.bid=i),a&&(u.adId=a),(0,r.logError)("Error rendering ad (id: ".concat(a,"): ").concat(t)),o.emit(l,u)}function m(e){var n=e.doc,t=e.bid,r=e.id,i={doc:n};t&&(i.bid=t),r&&(i.adId=r),o.emit(g,i)}function b(e,n){var t=n.adId,f=n.options,l=n.bidResponse;if(null!=l){if(l.status!==a.UE.fe||((0,r.logWarn)("Ad id ".concat(t," has been rendered before")),o.emit(p,l),!(0,i.Z)(u.vc.getConfig("auctionOptions"),"suppressStaleRender"))){try{var g=l.adId,m=l.ad,b=l.adUrl,y=l.width,w=l.height,E=l.renderer,A=l.cpm,C=l.originalCpm,T=l.mediaType;if((0,c.Pd)(E))(0,c._U)(E,l);else if(g){if(T===s.pX)return void h({reason:a.q_.Sn,message:"Cannot render video ad",bid:l,id:g});var I={AUCTION_PRICE:C||A,CLICKTHROUGH:(null==f?void 0:f.clickUrl)||""};e({ad:(0,r.replaceMacros)(m,I),adUrl:(0,r.replaceMacros)(b,I),adId:g,width:y,height:w})}}catch(e){return void h({reason:a.q_.XW,message:e.message,id:t,bid:l})}d.K.addWinningBid(l),o.emit(v,l)}}else h({reason:a.q_.WT,message:"Cannot find ad '".concat(t,"'"),id:t})}},875:function(e,n,t){t.d(n,{f:function(){return a}});var r=t(20265),i={};function o(e,n,t){var r=function(e,n){var t=i[e]=i[e]||{bidders:{}};return n?t.bidders[n]=t.bidders[n]||{}:t}(e,t);return r[n]=(r[n]||0)+1,r[n]}var a={incrementRequestsCounter:function(e){return o(e,"requestsCounter")},incrementBidderRequestsCounter:function(e,n){return o(e,"requestsCounter",n)},incrementBidderWinsCounter:function(e,n){return o(e,"winsCounter",n)},getRequestsCounter:function(e){return(0,r.Z)(i,"".concat(e,".requestsCounter"))||0},getBidderRequestsCounter:function(e,n){return(0,r.Z)(i,"".concat(e,".bidders.").concat(n,".requestsCounter"))||0},getBidderWinsCounter:function(e,n){return(0,r.Z)(i,"".concat(e,".bidders.").concat(n,".winsCounter"))||0}}},48525:function(e,n,t){function r(e){var n=e;return{callBids:function(){},setBidderCode:function(e){n=e},getBidderCode:function(){return n}}}t.d(n,{Z:function(){return r}})},86104:function(e,n,t){t.d(n,{Ct:function(){return z},JO:function(){return N},O6:function(){return x},_x:function(){return F},qJ:function(){return B},uV:function(){return L}});var r=t(89062),i=t(93324),o=t(4942),a=t(64358),u=t(20265),c=t(70059),s=t(14699),d=t(48928),f=t(3193),l=t(92797),g=t(34614),p=t(875),v=t(25102),h=t(34516),m=t(52021),b=t(5644),y=t(99128),w=t(78653),E=t(9633),A=t(50571),C=t(74947),T=t(16310),I=t(41087);function O(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function S(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?O(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):O(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var k="pbsBidAdapter",B={CLIENT:"client",SERVER:"server"},j={isAllowed:A.xD,redact:I.hb},U={},R=U.bidderRegistry={},P=U.aliasRegistry={},D=[];f.vc.getConfig("s2sConfig",(function(e){e&&e.s2sConfig&&(D=(0,a.isArray)(e.s2sConfig)?e.s2sConfig:[e.s2sConfig])}));var Z={},q=(0,T.Oj)((function(e){return U.resolveAlias(e)}));function x(e){return q(E.wu,k,(0,o.Z)({},T.Qf,e.configName))}var _=(0,l.z3)("sync",(function(e){var n=e.bidderCode,t=e.auctionId,r=e.bidderRequestId,i=e.adUnits,o=e.src,c=e.metrics;return i.reduce((function(e,i){var s=i.bids.filter((function(e){return e.bidder===n}));return null==n&&0===s.length&&null!=i.s2sBid&&s.push({bidder:null}),e.push(s.reduce((function(e,n){var s=null==(n=Object.assign({},n,{ortb2Imp:(0,a.mergeDeep)({},i.ortb2Imp,n.ortb2Imp)},(0,a.getDefinedParams)(i,["nativeParams","nativeOrtbRequest","mediaType","renderer"]))).mediaTypes?i.mediaTypes:n.mediaTypes;return(0,a.isValidMediaTypes)(s)?n=Object.assign({},n,{mediaTypes:s}):(0,a.logError)("mediaTypes is not correctly configured for adunit ".concat(i.code)),e.push(Object.assign({},n,{adUnitCode:i.code,transactionId:i.transactionId,sizes:(0,u.Z)(s,"banner.sizes")||(0,u.Z)(s,"video.playerSize")||[],bidId:n.bid_id||(0,a.getUniqueIdentifierStr)(),bidderRequestId:r,auctionId:t,src:o,metrics:c,bidRequestsCount:p.f.getRequestsCounter(i.code),bidderRequestsCount:p.f.getBidderRequestsCounter(i.code,n.bidder),bidderWinsCount:p.f.getBidderWinsCounter(i.code,n.bidder)})),e}),[])),e}),[]).reduce(a.flatten,[]).filter((function(e){return""!==e}))}),"getBids");var N=(0,l.z3)("sync",(function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=t.getS2SBidders,i=void 0===r?L:r;if(null==n)return e;var o=i(n);return e.filter((function(e){return o.has(e.bidder)}))}),"filterBidsForAdUnit");function M(e,n){var t=(0,a.deepClone)(e),r=!1;return t.forEach((function(e){var t=e.bids.filter((function(e){var t;return e.module===k&&(null===(t=e.params)||void 0===t?void 0:t.configName)===n.configName}));1===t.length?(e.s2sBid=t[0],r=!0,e.ortb2Imp=(0,a.mergeDeep)({},e.s2sBid.ortb2Imp,e.ortb2Imp)):t.length>1&&(0,a.logWarn)('Multiple "module" bids for the same s2s configuration; all will be ignored',t),e.bids=N(e.bids,n).map((function(e){return e.bid_id=(0,a.getUniqueIdentifierStr)(),e}))})),{adUnits:t=t.filter((function(e){return 0!==e.bids.length||null!=e.s2sBid})),hasModuleBids:r}}function W(e){var n=(0,a.deepClone)(e);return n.forEach((function(e){e.bids=N(e.bids,null)})),n=n.filter((function(e){return 0!==e.bids.length}))}var F=(0,l.z3)("sync",(function(e,n){return e}),"setupAdUnitMediaTypes");function L(e){(0,a.isArray)(e)||(e=[e]);var n=new Set([null]);return e.filter((function(e){return e&&e.enabled})).flatMap((function(e){return e.bidders})).forEach((function(e){return n.add(e)})),n}var z=(0,l.z3)("sync",(function(e,n){var t,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=r.getS2SBidders,u=void 0===i?L:i,c=u(n);return(0,a.getBidderCodes)(e).reduce((function(e,n){return e[c.has(n)?B.SERVER:B.CLIENT].push(n),e}),(t={},(0,o.Z)(t,B.CLIENT,[]),(0,o.Z)(t,B.SERVER,[]),t))}),"partitionBidders");function K(e,n){var t=R[e],r=(null==t?void 0:t.getSpec)&&t.getSpec();if(r&&r[n]&&"function"==typeof r[n])return[r,r[n]]}function H(e,n,t,r){try{(0,a.logInfo)("Invoking ".concat(e,".").concat(n));for(var i=arguments.length,o=new Array(i>4?i-4:0),u=4;u<i;u++)o[u-4]=arguments[u];f.vc.runWithBidder(e,r.bind.apply(r,[t].concat(o)))}catch(t){(0,a.logWarn)("Error calling ".concat(n," of ").concat(e))}}function G(e,n,t){if((null==t?void 0:t.src)!==b.os.YZ){var i=K(e,n);null!=i&&H.apply(void 0,[e,n].concat((0,r.Z)(i),[t]))}}function V(e){for(var n=new Set;P.hasOwnProperty(e)&&!n.has(e);)n.add(e),e=P[e];return e}U.makeBidRequests=(0,l.z3)("sync",(function(e,n,t,r,i){var o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{},u=arguments.length>6?arguments[6]:void 0;u=(0,y.Bf)(u),m.emit(b.FP.BEFORE_REQUEST_BIDS,e),(0,c.Fb)(e),e.forEach((function(e){(0,a.isPlainObject)(e.mediaTypes)||(e.mediaTypes={}),e.bids=e.bids.filter((function(e){return!e.bidder||j.isAllowed(C.UE,q(E.UL,e.bidder))}))})),e=F(e,i);var s=z(e,D),d=s[B.CLIENT],l=s[B.SERVER];f.vc.getConfig("bidderSequence")===f.FD&&(d=(0,a.shuffle)(d));var p=(0,v.nH)(),w=[],A=o.global||{},T=o.bidder||{};function I(e,n){var r=j.redact(null!=n?n:q(E.UL,e.bidderCode)),i=Object.freeze(r.ortb2((0,a.mergeDeep)({source:{tid:t}},A,T[e.bidderCode])));return e.ortb2=i,e.bids=e.bids.map((function(e){return e.ortb2=i,r.bidRequest(e)})),e}D.forEach((function(r){var i=x(r);if(r&&r.enabled&&j.isAllowed(C.UE,i)){var o=M(e,r),c=o.adUnits,s=o.hasModuleBids,d=(0,a.generateUUID)();(0===l.length&&s?[null]:l).forEach((function(e){var o=(0,a.getUniqueIdentifierStr)(),s=u.fork(),f=I({bidderCode:e,auctionId:t,bidderRequestId:o,uniquePbsTid:d,bids:_({bidderCode:e,auctionId:t,bidderRequestId:o,adUnits:(0,a.deepClone)(c),src:b.os.YZ,metrics:s}),auctionStart:n,timeout:r.timeout,src:b.os.YZ,refererInfo:p,metrics:s},i);0!==f.bids.length&&w.push(f)})),c.forEach((function(e){var n=e.bids.filter((function(e){return(0,g.sE)(w,(function(n){return(0,g.sE)(n.bids,(function(n){return n.bidId===e.bid_id}))}))}));e.bids=n})),w.forEach((function(e){void 0===e.adUnitsS2SCopy&&(e.adUnitsS2SCopy=c.filter((function(e){return e.bids.length>0||null!=e.s2sBid})))}))}}));var O=W(e);return d.forEach((function(e){var o=(0,a.getUniqueIdentifierStr)(),c=u.fork(),s=I({bidderCode:e,auctionId:t,bidderRequestId:o,bids:_({bidderCode:e,auctionId:t,bidderRequestId:o,adUnits:(0,a.deepClone)(O),labels:i,src:"client",metrics:c}),auctionStart:n,timeout:r,refererInfo:p,metrics:c}),d=R[e];d||(0,a.logError)("Trying to make a request for bidder that does not exist: ".concat(e)),d&&s.bids&&0!==s.bids.length&&w.push(s)})),w.forEach((function(e){h.rp.getConsentData()&&(e.gdprConsent=h.rp.getConsentData()),h.nX.getConsentData()&&(e.uspConsent=h.nX.getConsentData()),h.TJ.getConsentData()&&(e.gppConsent=h.TJ.getConsentData())})),w}),"makeBidRequests"),U.callBids=function(e,n,t,r,o,u,c){var s=arguments.length>7&&void 0!==arguments[7]?arguments[7]:{};if(n.length){var l=n.reduce((function(e,n){return e[Number(void 0!==n.src&&n.src===b.os.YZ)].push(n),e}),[[],[]]),g=(0,i.Z)(l,2),p=g[0],v=g[1],h=[];v.forEach((function(e){for(var n=-1,t=0;t<h.length;++t)if(e.uniquePbsTid===h[t].uniquePbsTid){n=t;break}n<=-1&&h.push(e)}));var y=0;D.forEach((function(e){if(e&&h[y]&&L(e).has(h[y].bidderCode)){var n=(0,d.OI)(u,o?{request:o.request.bind(null,"s2s"),done:o.done}:void 0),i=e.bidders,f=R[e.adapter],l=h[y].uniquePbsTid,g=h[y].adUnitsS2SCopy,p=v.filter((function(e){return e.uniquePbsTid===l}));if(f){var w={ad_units:g,s2sConfig:e,ortb2Fragments:s};if(w.ad_units.length){var E=p.map((function(e){return e.start=(0,a.timestamp)(),function(){c(e.bidderRequestId),r.apply(e,arguments)}})),A=(0,a.getBidderCodes)(w.ad_units).filter((function(e){return i.includes(e)}));(0,a.logMessage)("CALLING S2S HEADER BIDDERS ==== ".concat(A.length>0?A.join(", "):'No bidder specified, using "ortb2Imp" definition(s) only')),p.forEach((function(e){m.emit(b.FP.BID_REQUESTED,S(S({},e),{},{tid:e.auctionId}))})),f.callBids(w,v,t,(function(){return E.forEach((function(e){return e()}))}),n)}}else(0,a.logError)("missing "+e.adapter);y++}})),p.forEach((function(e){e.start=(0,a.timestamp)();var n=R[e.bidderCode];f.vc.runWithBidder(e.bidderCode,(function(){(0,a.logMessage)("CALLING BIDDER"),m.emit(b.FP.BID_REQUESTED,e)}));var i=(0,d.OI)(u,o?{request:o.request.bind(null,e.bidderCode),done:o.done}:void 0),s=r.bind(e);try{f.vc.runWithBidder(e.bidderCode,n.callBids.bind(n,e,t,s,i,(function(){return c(e.bidderRequestId)}),f.vc.callbackWithBidder(e.bidderCode)))}catch(n){(0,a.logError)("".concat(e.bidderCode," Bid Adapter emitted an uncaught error when parsing their bidRequest"),{e:n,bidRequest:e}),s()}}))}else(0,a.logWarn)("callBids executed with no bidRequests.  Were they filtered by labels or sizing?")},U.videoAdapters=[],U.registerBidAdapter=function(e,n){var t,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=r.supportedMediaTypes,o=void 0===i?[]:i;e&&n?"function"==typeof e.callBids?(R[n]=e,h.qh.register(E.UL,n,null===(t=e.getSpec)||void 0===t?void 0:t.call(e).gvlid),(0,g.q9)(o,"video")&&U.videoAdapters.push(n),(0,g.q9)(o,"native")&&c.Sg.push(n)):(0,a.logError)("Bidder adaptor error for bidder code: "+n+"bidder must implement a callBids() function"):(0,a.logError)("bidAdapter or bidderCode not specified")},U.aliasBidAdapter=function(e,n,t){if(void 0===R[n]){var r=R[e];if(void 0===r){var i=[];D.forEach((function(t){if(t.bidders&&t.bidders.length){var r=t&&t.bidders;t&&(0,g.q9)(r,n)?P[n]=e:i.push(e)}})),i.forEach((function(e){(0,a.logError)('bidderCode "'+e+'" is not an existing bidder.',"adapterManager.aliasBidAdapter")}))}else try{var o,u=function(e){var n=[];return(0,g.q9)(U.videoAdapters,e)&&n.push("video"),(0,g.q9)(c.Sg,e)&&n.push("native"),n}(e);if(r.constructor.prototype!=Object.prototype)(o=new r.constructor).setBidderCode(n);else{var d=r.getSpec(),f=t&&t.gvlid;null!=d.gvlid&&null==f&&(0,a.logWarn)("Alias '".concat(n,"' will NOT re-use the GVL ID of the original adapter ('").concat(d.code,"', gvlid: ").concat(d.gvlid,"). Functionality that requires TCF consent may not work as expected."));var l=t&&t.skipPbsAliasing;o=(0,s.PZ)(Object.assign({},d,{code:n,gvlid:f,skipPbsAliasing:l})),P[n]=e}U.registerBidAdapter(o,n,{supportedMediaTypes:u})}catch(n){(0,a.logError)(e+" bidder does not currently support aliasing.","adapterManager.aliasBidAdapter")}}else(0,a.logMessage)('alias name "'+n+'" has been already specified.')},U.resolveAlias=function(e){for(var n,t=e;P[t]&&(!n||!n.has(t));)t=P[t],(n=n||new Set).add(t);return t},U.registerAnalyticsAdapter=function(e){var n=e.adapter,t=e.code,r=e.gvlid;n&&t?"function"==typeof n.enableAnalytics?(n.code=t,Z[t]={adapter:n,gvlid:r},h.qh.register(E._U,t,r)):(0,a.logError)('Prebid Error: Analytics adaptor error for analytics "'.concat(t,'"\n        analytics adapter must implement an enableAnalytics() function')):(0,a.logError)("Prebid Error: analyticsAdapter or analyticsCode not specified")},U.enableAnalytics=function(e){(0,a.isArray)(e)||(e=[e]),e.forEach((function(e){var n=Z[e.provider];n&&n.adapter?j.isAllowed(C.x$,q(E._U,e.provider,(0,o.Z)({},T.Hw,e)))&&n.adapter.enableAnalytics(e):(0,a.logError)("Prebid Error: no analytics adapter found in registry for '".concat(e.provider,"'."))}))},U.getBidAdapter=function(e){return R[e]},U.getAnalyticsAdapter=function(e){return Z[e]},U.callTimedOutBidders=function(e,n,t){n=n.map((function(n){return n.params=(0,a.getUserConfiguredParams)(e,n.adUnitCode,n.bidder),n.timeout=t,n})),n=(0,a.groupBy)(n,"bidder"),Object.keys(n).forEach((function(e){G(e,"onTimeout",n[e])}))},U.callBidWonBidder=function(e,n,t){n.params=(0,a.getUserConfiguredParams)(t,n.adUnitCode,n.bidder),p.f.incrementBidderWinsCounter(n.adUnitCode,n.bidder),G(e,"onBidWon",n)},U.callBidBillableBidder=function(e){G(e.bidder,"onBidBillable",e)},U.callSetTargetingBidder=function(e,n){G(e,"onSetTargeting",n)},U.callBidViewableBidder=function(e,n){G(e,"onBidViewable",n)},U.callBidderError=function(e,n,t){G(e,"onBidderError",{error:n,bidderRequest:t})},U.callDataDeletionRequest=(0,l.z3)("sync",(function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];var o="onDataDeletionRequest";Object.keys(R).filter((function(e){return!P.hasOwnProperty(e)})).forEach((function(e){var t=K(e,o);if(null!=t){var i=w.K.getBidsRequested().filter((function(n){return V(n.bidderCode)===e}));H.apply(void 0,[e,o].concat((0,r.Z)(t),[i],n))}})),Object.entries(Z).forEach((function(e){var t,r=(0,i.Z)(e,2),u=r[0],c=r[1],s=null==c||null===(t=c.adapter)||void 0===t?void 0:t[o];if("function"==typeof s)try{s.apply(c.adapter,n)}catch(e){(0,a.logError)("error calling ".concat(o," of ").concat(u),e)}}))})),n.ZP=U},14699:function(e,n,t){t.d(n,{BF:function(){return j},JY:function(){return R},PZ:function(){return S},dX:function(){return O}});var r=t(71002),i=t(93324),o=t(48525),a=t(86104),u=t(3193),c=t(69626),s=t(11974),d=t(70059),f=t(90154),l=t(5644),g=t(52021),p=t(34614),v=t(64358),h=t(92797),m=t(78653),b=t(55975),y=t(99128),w=t(50571),E=t(10286),A=t(9633),C=t(74947),T=["cpm","ttl","creativeId","netRevenue","currency"],I=["auctionId","transactionId"];function O(e){var n=Array.isArray(e.supportedMediaTypes)?{supportedMediaTypes:e.supportedMediaTypes}:void 0;function t(e){var t=S(e);a.ZP.registerBidAdapter(t,e.code,n)}t(e),Array.isArray(e.aliases)&&e.aliases.forEach((function(n){var r,i,o=n;(0,v.isPlainObject)(n)&&(o=n.code,r=n.gvlid,i=n.skipPbsAliasing),a.ZP.aliasRegistry[o]=e.code,t(Object.assign({},e,{code:o,gvlid:r,skipPbsAliasing:i}))}))}function S(e){return Object.assign(new o.Z(e.code),{getSpec:function(){return Object.freeze(Object.assign({},e))},registerSyncs:n,callBids:function(t,r,o,s,d,f){if(Array.isArray(t.bids)){var p=function(e){if((0,w.xD)(C.Jt,(0,E.T)(A.UL,e)))return{bidRequest:function(e){return e},bidderRequest:function(e){return e}};function n(e,n,t){return I.includes(n)?null:Reflect.get(e,n,t)}function t(e,n){var t=new Proxy(e,n);return Object.entries(e).filter((function(e){var n=(0,i.Z)(e,2);return n[0],"function"==typeof n[1]})).forEach((function(n){var r=(0,i.Z)(n,2),o=r[0],a=r[1];return t[o]=a.bind(e)})),t}var r=(0,v.memoize)((function(e){return t(e,{get:n})}),(function(e){return e.bidId}));return{bidRequest:r,bidderRequest:function(e){return t(e,{get:function(t,i,o){return"bids"===i?e.bids.map(r):n(t,i,o)}})}}}(t.bidderCode),h={},m=[],T=P(t).measureTime("validate",(function(){return t.bids.filter((function(n){return function(n){if(!e.isBidRequestValid(n))return(0,v.logWarn)("Invalid bid sent to bidder ".concat(e.code,": ").concat(JSON.stringify(n))),!1;return!0}(p.bidRequest(n))}))}));if(0!==T.length){var O={};T.forEach((function(e){O[e.bidId]=e,e.adUnitCode||(e.adUnitCode=e.placementCode)})),k(e,T.map(p.bidRequest),p.bidderRequest(t),s,f,{onRequest:function(e){return g.emit(l.FP.BEFORE_BIDDER_HTTP,t,e)},onResponse:function(n){d(e.code),m.push(n)},onFledgeAuctionConfigs:function(e){e.forEach((function(e){var n=O[e.bidId];n?j(n,e.config):(0,v.logWarn)("Received fledge auction configuration for an unknown bidId",e)}))},onError:function(n,r){d(e.code),a.ZP.callBidderError(e.code,r,t),g.emit(l.FP.BIDDER_ERROR,{error:r,bidderRequest:t}),(0,v.logError)("Server call for ".concat(e.code," failed: ").concat(n," ").concat(r.status,". Continuing without bids."))},onBid:function(n){var t=O[n.requestId];if(t){if(n.adapterCode=t.bidder,function(e,n){var t=b.S.get(n,"allowAlternateBidderCodes")||!1,r=b.S.get(n,"allowedAlternateBidderCodes");if(e&&n&&n!==e&&(r=(0,v.isArray)(r)?r.map((function(e){return e.trim().toLowerCase()})).filter((function(e){return!!e})).filter(v.uniques):r,!t||(0,v.isArray)(r)&&"*"!==r[0]&&!r.includes(e)))return!0;return!1}(n.bidderCode,t.bidder))return(0,v.logWarn)("".concat(n.bidderCode," is not a registered partner or known bidder of ").concat(t.bidder,", hence continuing without bid. If you wish to support this bidder, please mark allowAlternateBidderCodes as true in bidderSettings.")),void r.reject(t.adUnitCode,n,l.Gw.Dg);n.originalCpm=n.cpm,n.originalCurrency=n.currency,n.meta=n.meta||Object.assign({},n[t.bidder]);var i=Object.assign((0,c.m)(l.Q_.Q,t),n,(0,v.pick)(t,I));!function(e,n){var t=(0,y.Bf)(n.metrics);t.checkpoint("addBidResponse"),h[e]=!0,t.measureTime("addBidResponse.validate",(function(){return R(e,n)}))?r(e,n):r.reject(e,n,l.Gw.UI)}(t.adUnitCode,i)}else(0,v.logWarn)("Bidder ".concat(e.code," made bid for unknown request ID: ").concat(n.requestId,". Ignoring.")),r.reject(null,n,l.Gw.Gp)},onCompletion:S})}else S()}function S(){o(),u.vc.runWithBidder(e.code,(function(){g.emit(l.FP.BIDDER_DONE,t),n(m,t.gdprConsent,t.uspConsent,t.gppConsent)}))}}});function n(n,t,r,i){B(e,n,t,r,i)}}var k=(0,h.z3)("sync",(function(e,n,t,i,o,a){var u=a.onRequest,c=a.onResponse,s=a.onFledgeAuctionConfigs,d=a.onError,f=a.onBid,l=a.onCompletion,g=P(t);l=g.startTiming("total").stopBefore(l);var p=g.measureTime("buildRequests",(function(){return e.buildRequests(n,t)}));if(p&&0!==p.length){Array.isArray(p)||(p=[p]);var h=(0,v.delayExecution)(l,p.length);p.forEach((function(n){var t=g.fork();function a(e){null!=e&&(e.metrics=t.fork().renameWith()),f(e)}var l=o((function(r,i){m();try{r=JSON.parse(r)}catch(e){}r={body:r,headers:{get:i.getResponseHeader.bind(i)}},c(r);try{r=t.measureTime("interpretResponse",(function(){return e.interpretResponse(r,n)}))}catch(n){return(0,v.logError)("Bidder ".concat(e.code," failed to interpret the server's response. Continuing without bids"),null,n),void h()}var o;r&&(0,v.isArray)(r.fledgeAuctionConfigs)?(s(r.fledgeAuctionConfigs),o=r.bids):o=r,o&&((0,v.isArray)(o)?o.forEach(a):a(o)),h()})),p=o((function(e,n){m(),d(e,n),h()}));u(n);var m=t.startTiming("net");function y(t){var r,i=n.options;return Object.assign(t,i,{browsingTopics:!(null!=i&&i.hasOwnProperty("browsingTopics")&&!i.browsingTopics)&&((null===(r=b.S.get(e.code,"topicsHeader"))||void 0===r||r)&&(0,w.xD)(C.oK,(0,E.T)(A.UL,e.code)))})}switch(n.method){case"GET":i("".concat(n.url).concat(function(e){if(e)return"?".concat("object"===(0,r.Z)(e)?(0,v.parseQueryStringParameters)(e):e);return""}(n.data)),{success:l,error:p},void 0,y({method:"GET",withCredentials:!0}));break;case"POST":i(n.url,{success:l,error:p},"string"==typeof n.data?n.data:JSON.stringify(n.data),y({method:"POST",contentType:"text/plain",withCredentials:!0}));break;default:(0,v.logWarn)("Skipping invalid request from ".concat(e.code,". Request type ").concat(n.type," must be GET or POST")),h()}}))}else l()}),"processBidderRequests"),B=(0,h.z3)("async",(function(e,n,t,r,i){var o=u.vc.getConfig("userSync.aliasSyncEnabled");if(e.getUserSyncs&&(o||!a.ZP.aliasRegistry[e.code])){var c=u.vc.getConfig("userSync.filterSettings"),d=e.getUserSyncs({iframeEnabled:!(!c||!c.iframe&&!c.all),pixelEnabled:!(!c||!c.image&&!c.all)},n,t,r,i);d&&(Array.isArray(d)||(d=[d]),d.forEach((function(n){s.k_.registerSync(n.type,e.code,n.url)})),s.k_.bidderDone(e.code))}}),"registerSyncs"),j=(0,h.z3)("sync",(function(e,n){}),"addComponentAuction");function U(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=t.index,o=void 0===r?m.K.index:r;if((n.width||0===parseInt(n.width,10))&&(n.height||0===parseInt(n.height,10)))return n.width=parseInt(n.width,10),n.height=parseInt(n.height,10),!0;var a=o.getBidRequest(n),u=o.getMediaTypes(n),c=a&&a.sizes||u&&u.banner&&u.banner.sizes,s=(0,v.parseSizesInput)(c);if(1===s.length){var d=s[0].split("x"),f=(0,i.Z)(d,2),l=f[0],g=f[1];return n.width=parseInt(l,10),n.height=parseInt(g,10),!0}return!1}function R(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=t.index,i=void 0===r?m.K.index:r;function o(){var e=Object.keys(n);return T.every((function(t){return(0,p.q9)(e,t)&&!(0,p.q9)([void 0,null],n[t])}))}function a(e){return"Invalid bid from ".concat(n.bidderCode,". Ignoring bid: ").concat(e)}return e?n?o()?"native"!==n.mediaType||(0,d.r4)(n,{index:i})?"video"!==n.mediaType||(0,f.Dn)(n,{index:i})?!("banner"===n.mediaType&&!U(e,n,{index:i}))||((0,v.logError)(a("Banner bids require a width and height")),!1):((0,v.logError)(a("Video bid does not have required vastUrl or renderer property")),!1):((0,v.logError)(a("Native bid missing some required properties.")),!1):((0,v.logError)(a("Bidder ".concat(n.bidderCode," is missing required params. Check http://prebid.org/dev-docs/bidder-adapter-1.html for list of params."))),!1):((0,v.logWarn)("Some adapter tried to add an undefined bid for ".concat(e,".")),!1):((0,v.logWarn)("No adUnitCode was supplied to addBidResponse."),!1)}function P(e){return(0,y.Bf)(e.metrics).renameWith((function(n){return["adapter.client.".concat(n),"adapters.client.".concat(e.bidderCode,".").concat(n)]}))}},55730:function(e,n,t){t.d(n,{B:function(){return u}});var r=t(34614),i=t(64358),o=new WeakMap,a=["debugging","adloox","criteo","outstream","adagio","spotx","browsi","brandmetrics","justtag","tncId","akamaidap","ftrackId","inskin","hadron","medianet","improvedigital","aaxBlockmeter","confiant","arcspan","airgrid","clean.io","a1Media","geoedge","mediafilter","qortex","dynamicAdBoost"];function u(e,n,t,u,c){if(n&&e){if((0,r.q9)(a,n)){u||(u=document);var s=l(u,e);if(s)return t&&"function"==typeof t&&(s.loaded?t():s.callbacks.push(t)),s.tag;var d=o.get(u)||{},f={loaded:!1,tag:null,callbacks:[]};return d[e]=f,o.set(u,d),t&&"function"==typeof t&&f.callbacks.push(t),(0,i.logWarn)("module ".concat(n," is loading external JavaScript")),function(n,t,r,o){r||(r=document);var a=r.createElement("script");a.type="text/javascript",a.async=!0;var u=l(r,e);u&&(u.tag=a);a.readyState?a.onreadystatechange=function(){"loaded"!==a.readyState&&"complete"!==a.readyState||(a.onreadystatechange=null,t())}:a.onload=function(){t()};a.src=n,o&&(0,i.setScriptAttributes)(a,o);return(0,i.insertElement)(a,r),a}(e,(function(){f.loaded=!0;try{for(var e=0;e<f.callbacks.length;e++)f.callbacks[e]()}catch(e){(0,i.logError)("Error executing callback","adloader.js:loadExternalScript",e)}}),u,c)}(0,i.logError)("".concat(n," not whitelisted for loading external JavaScript"))}else(0,i.logError)("cannot load external script without url and moduleCode");function l(e,n){var t=o.get(e);return t&&t[n]?t[n]:null}}},48928:function(e,n,t){t.d(n,{OI:function(){return v},hj:function(){return h}});var r=t(93324),i=t(71002),o=t(3193),a=t(64358),u={fetch:window.fetch.bind(window),makeRequest:function(e,n){return new Request(e,n)},timeout:function(e,n){var t=new AbortController,r=setTimeout((function(){t.abort(),(0,a.logError)("Request timeout after ".concat(e,"ms"),n),r=null}),e);return{signal:t.signal,done:function(){r&&clearTimeout(r)}}}},c="GET",s="POST",d="Content-Type";function f(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=t.method||(n?s:c);if(r===c&&n){var i=(0,a.parseUrl)(e,t);Object.assign(i.search,n),e=(0,a.buildUrl)(i)}var o=new Headers(t.customHeaders);o.set(d,t.contentType||"text/plain");var f={method:r,headers:o};return r!==c&&n&&(f.body=n),t.withCredentials&&(f.credentials="include"),t.browsingTopics&&isSecureContext&&(f.browsingTopics=!0),u.makeRequest(e,f)}function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3e3,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.request,r=n.done,i=function(n,t){var r,i,a;null==e||null!=(null===(r=t)||void 0===r?void 0:r.signal)||o.vc.getConfig("disableAjaxTimeout")||(a=u.timeout(e,n),t=Object.assign({signal:a.signal},t));var c=u.fetch(n,t);return null!=(null===(i=a)||void 0===i?void 0:i.done)&&(c=c.finally(a.done)),c};return null==t&&null==r||(i=function(e){return function(n,i){var o=new URL(null==(null==n?void 0:n.url)?n:n.url,document.location).origin,a=e(n,i);return t&&t(o),r&&(a=a.finally((function(){return r(o)}))),a}}(i)),i}function g(e,n){var t=e.status,r=e.statusText,i=void 0===r?"":r,o=e.headers,u=e.url,c=0;function s(e){if(0===c)try{var t,r;c=(new DOMParser).parseFromString(n,null==o||null===(t=o.get(d))||void 0===t||null===(r=t.split(";"))||void 0===r?void 0:r[0])}catch(n){c=null,e&&e(n)}return c}return{readyState:XMLHttpRequest.DONE,status:t,statusText:i,responseText:n,response:n,responseType:"",responseURL:u,get responseXML(){return s(a.logError)},getResponseHeader:function(e){return null!=o&&o.has(e)?o.get(e):null},toJSON:function(){return Object.assign({responseXML:s()},this)}}}function p(e,n){var t="object"===(0,i.Z)(n)&&null!=n?n:{success:"function"==typeof n?n:function(){return null},error:function(e,n){return(0,a.logError)("Network error",e,n)}},o=t.success,u=t.error;e.then((function(e){return e.text().then((function(n){return[e,n]}))})).then((function(e){var n=(0,r.Z)(e,2),t=n[0],i=n[1],a=g(t,i);t.ok||304===t.status?o(i,a):u(t.statusText,a)}),(function(){return u("",g({status:0},""))}))}function v(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3e3,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.request,r=n.done,i=l(e,{request:t,done:r});return function(e,n,t){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};p(i(f(e,t,r)),n)}}var h=v();l()},25686:function(e,n,t){t.d(n,{LX:function(){return $},RH:function(){return V},Yt:function(){return P},Yw:function(){return O},dg:function(){return J},e0:function(){return Z},lU:function(){return x},mv:function(){return S},vO:function(){return R}});var r=t(71002),i=t(64358),o=t(20265),a=t(56463),u=t(70059),c=t(79885),s=t(35706),d=t(3193),f=t(11974),l=t(92797),g=t(34614),p=t(90154),v=t(24679),h=t(78653),m=t(55975),b=t(52021),y=t(86104),w=t(5644),E=t(68792),A=t(99128),C=t(36066),T=t(78640),I=f.k_.syncUsers,O="inProgress",S="completed";b.on(w.FP.BID_ADJUSTMENT,(function(e){!function(e){var n=(0,C.O)(e.cpm,e);n>=0&&(e.cpm=n)}(e)}));var k={},B={},j=[],U=(0,T.R)();function R(e){var n=e.adUnits,t=e.adUnitCodes,o=e.callback,a=e.cbTimeout,u=e.labels,c=e.auctionId,s=e.ortb2Fragments,f=e.metrics;f=(0,A.Bf)(f);var l,p,m,C,T=n,R=u,N=t,M=c||(0,i.generateUUID)(),F=a,L=new Set,z=(0,E.P)(),G=[],V=o,J=[],Q=[],$=[],Y=[],ee=[];function ne(){return{auctionId:M,timestamp:l,auctionEnd:p,auctionStatus:C,adUnits:T,adUnitCodes:N,labels:R,bidderRequests:J,noBids:$,bidsReceived:Q,bidsRejected:G,winningBids:Y,timeout:F,metrics:f,seatNonBids:ee}}function te(e){if(e?b.emit(w.FP.AUCTION_TIMEOUT,ne()):clearTimeout(m),void 0===p){var t=[];e&&((0,i.logMessage)("Auction ".concat(M," timedOut")),(t=J.filter((function(e){return!L.has(e.bidderRequestId)})).flatMap((function(e){return e.bids}))).length&&b.emit(w.FP.BID_TIMEOUT,t)),C=S,p=Date.now(),f.checkpoint("auctionEnd"),f.timeBetween("requestBids","auctionEnd","requestBids.total"),f.timeBetween("callBids","auctionEnd","requestBids.callBids"),z.resolve(),b.emit(w.FP.AUCTION_END,ne()),q(T,(function(){try{if(null!=V){var r=Q.filter((function(e){return N.includes(e.adUnitCode)})).reduce(X,{});V.apply(U,[r,e,M]),V=null}}catch(e){(0,i.logError)("Error executing bidsBackHandler",null,e)}finally{t.length&&y.ZP.callTimedOutBidders(n,t,F);var o=d.vc.getConfig("userSync")||{};o.enableOverride||I(o.syncDelay)}}))}}function re(){d.vc.resetBidder(),(0,i.logInfo)("Bids Received for Auction with id: ".concat(M),Q),C=S,te(!1)}function ie(e){L.add(e)}function oe(e){var n=this;e.forEach((function(e){var n;n=e,J=J.concat(n)}));var t={},o={bidRequests:e,run:function(){m=setTimeout((function(){return te(!0)}),F),C=O,b.emit(w.FP.AUCTION_INIT,ne());var o=function(e,n){var t=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).index,o=(void 0===t&&h.K.index,0),a=!1,u=new Set,c={};function s(){o--,a&&0===o&&e()}function f(e,n,t){return c[n.requestId]=!0,K(n,e),o++,t(s)}function l(e,t){f(e,t,(function(e){var i=H(t);b.emit(w.FP.BID_ACCEPTED,i),i.mediaType===v.pX?_(n,i,e):(null!=i.native&&"object"===(0,r.Z)(i.native)&&W(i),x(n,i),e())}))}function p(e,t,r){return f(e,t,(function(e){t.rejectionReason=r,(0,i.logWarn)("Bid from ".concat(t.bidder||"unknown bidder"," was rejected: ").concat(r),t),b.emit(w.FP.BID_REJECTED,t),n.addBidRejected(t),e()}))}function m(){var t=this,r=n.getBidRequests(),s=d.vc.getConfig("auctionOptions");if(u.add(t),s&&!(0,i.isEmpty)(s)){var f=s.secondaryBidders;f&&!r.every((function(e){return(0,g.q9)(f,e.bidderCode)}))&&(r=r.filter((function(e){return!(0,g.q9)(f,e.bidderCode)})))}a=r.every((function(e){return u.has(e)})),t.bids.forEach((function(e){c[e.bidId]||(n.addNoBid(e),b.emit(w.FP.NO_BID,e))})),a&&0===o&&e()}return{addBidResponse:function(){function e(e,n){var t;P.call({dispatch:l},e,n,(t=!1,function(r){t||(p(e,n,r),t=!0)}))}return e.reject=p,e}(),adapterDone:function(){var e=this;D(E.Z.resolve()).finally((function(){return m.call(e)}))}}}(re,n);y.ZP.callBids(T,e,o.addBidResponse,o.adapterDone,{request:function(e,n){u(k,n),u(t,e),B[e]||(B[e]={SRA:!0,origin:n}),t[e]>1&&(B[e].SRA=!1)},done:function(e){k[e]--,j[0]&&a(j[0])&&j.shift()}},F,ie,s)}};function a(e){var n=!0,t=d.vc.getConfig("maxRequestsPerOrigin")||4;return e.bidRequests.some((function(e){var r=1,i=void 0!==e.src&&e.src===w.os.YZ?"s2s":e.bidderCode;return B[i]&&(!1===B[i].SRA&&(r=Math.min(e.bids.length,t)),k[B[i].origin]+r>t&&(n=!1)),!n})),n&&e.run(),n}function u(e,n){void 0===e[n]?e[n]=1:e[n]++}a(o)||((0,i.logWarn)("queueing auction due to limited endpoint capacity"),j.push(o))}return b.on(w.FP.SEAT_NON_BID,(function(e){var n;e.auctionId===M&&(n=e.seatnonbid,ee=ee.concat(n))})),{addBidReceived:function(e){Q=Q.concat(e)},addBidRejected:function(e){G=G.concat(e)},addNoBid:function(e){$=$.concat(e)},callBids:function(){C="started",l=Date.now();var e=f.measureTime("requestBids.makeRequests",(function(){return y.ZP.makeBidRequests(T,l,M,F,R,s,f)}));(0,i.logInfo)("Bids Requested for Auction with id: ".concat(M),e),f.checkpoint("callBids"),e.length<1?((0,i.logWarn)("No valid bid requests returned for auction"),re()):Z.call({dispatch:oe,context:this},e)},addWinningBid:function(e){var t=n.find((function(n){return n.transactionId===e.transactionId}));Y=Y.concat(e),(0,i.callBurl)(e),y.ZP.callBidWonBidder(e.adapterCode||e.bidder,e,n),t&&!t.deferBilling&&y.ZP.callBidBillableBidder(e)},setBidTargeting:function(e){y.ZP.callSetTargetingBidder(e.adapterCode||e.bidder,e)},getWinningBids:function(){return Y},getAuctionStart:function(){return l},getAuctionEnd:function(){return p},getTimeout:function(){return F},getAuctionId:function(){return M},getAuctionStatus:function(){return C},getAdUnits:function(){return T},getAdUnitCodes:function(){return N},getBidRequests:function(){return J},getBidsReceived:function(){return Q},getNoBids:function(){return $},getNonBids:function(){return ee},getFPD:function(){return s},getMetrics:function(){return f},end:z.promise}}var P=(0,l.z3)("sync",(function(e,n,t){this.dispatch.call(null,e,n)}),"addBidResponse"),D=(0,l.z3)("sync",(function(e){return e}),"responsesReady"),Z=(0,l.z3)("sync",(function(e){this.dispatch.call(this.context,e)}),"addBidderRequests"),q=(0,l.z3)("async",(function(e,n){n&&n()}),"bidsBackCallback");function x(e,n){!function(e){var n,t=!0===m.S.get(e.bidderCode,"allowZeroCpmBids")?e.cpm>=0:e.cpm>0;e.bidderCode&&(t||e.dealId)&&(n=function(e,n){var t=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).index,r=void 0===t?h.K.index:t;if(!n)return{};var i=r.getBidRequest(n),o={},a=$(n.mediaType,e);Y(o,a,n,i),e&&m.S.getOwn(e,w.k2.xn)&&(Y(o,m.S.ownSettingsFor(e),n,i),n.sendStandardTargeting=m.S.get(e,"sendStandardTargeting"));n.native&&(o=Object.assign({},o,(0,u.Ur)(n)));return o}(e.bidderCode,e));e.adserverTargeting=Object.assign(e.adserverTargeting||{},n)}(n),(0,A.Bf)(n.metrics).timeSince("addBidResponse","addBidResponse.total"),e.addBidReceived(n),b.emit(w.FP.BID_RESPONSE,n)}function _(e,n,t){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},a=r.index,u=void 0===a?h.K.index:a,c=!0,s=(0,o.Z)(u.getMediaTypes({requestId:n.originalRequestId||n.requestId,transactionId:n.transactionId}),"video"),f=s&&(0,o.Z)(s,"context"),l=s&&(0,o.Z)(s,"useCacheKey");d.vc.getConfig("cache.url")&&(l||f!==p.gZ)&&(!n.videoCacheKey||d.vc.getConfig("cache.ignoreBidderCacheKey")?(c=!1,z(e,n,t,s)):n.vastUrl||((0,i.logError)("videoCacheKey specified but not required vastUrl for video bid"),c=!1)),c&&(x(e,n),t())}var N,M,W=function(e){var n,t,r=null===(n=h.K.index.getAdUnit(e))||void 0===n?void 0:n.nativeOrtbRequest,i=null===(t=e.native)||void 0===t?void 0:t.ortb;if(r&&i){var o=(0,u.zq)(i,r);Object.assign(e.native,o)}},F=function(e){(0,c.h)(e.map((function(e){return e.bidResponse})),(function(n,t){t.forEach((function(t,r){var o=e[r],a=o.auctionInstance,u=o.bidResponse,s=o.afterBidAdded;n?(0,i.logWarn)("Failed to save to the video cache: ".concat(n,". Video bid must be discarded.")):""===t.uuid?(0,i.logWarn)("Supplied video cache key was already in use by Prebid Cache; caching attempt was rejected. Video bid must be discarded."):(u.videoCacheKey=t.uuid,u.vastUrl||(u.vastUrl=(0,c.z)(u.videoCacheKey)),x(a,u),s())}))}))};d.vc.getConfig("cache",(function(e){N="number"==typeof e.cache.batchSize&&e.cache.batchSize>0?e.cache.batchSize:1,M="number"==typeof e.cache.batchTimeout&&e.cache.batchTimeout>0?e.cache.batchTimeout:0}));var L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:setTimeout,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:F,t=[[]],r=!1,i=function(e){return e()};return function(o,a,u){var c=M>0?e:i;t[t.length-1].length>=N&&t.push([]),t[t.length-1].push({auctionInstance:o,bidResponse:a,afterBidAdded:u}),r||(r=!0,c((function(){t.forEach(n),t=[[]],r=!1}),M))}}(),z=(0,l.z3)("async",(function(e,n,t,r){L(e,n,t)}),"callPrebidCache");function K(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=t.index,o=void 0===r?h.K.index:r,a=o.getBidderRequest(e),u=o.getAdUnit(e),c=a&&a.start||e.requestTimestamp;Object.assign(e,{responseTimestamp:e.responseTimestamp||(0,i.timestamp)(),requestTimestamp:e.requestTimestamp||c,cpm:parseFloat(e.cpm)||0,bidder:e.bidder||e.bidderCode,adUnitCode:n}),null!=(null==u?void 0:u.ttlBuffer)&&(e.ttlBuffer=u.ttlBuffer),e.timeToRespond=e.responseTimestamp-e.requestTimestamp}function H(e){var n,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=t.index,o=void 0===i?h.K.index:i;b.emit(w.FP.BID_ADJUSTMENT,e);var u=(null===(n=o.getBidRequest(e))||void 0===n?void 0:n.renderer)||o.getAdUnit(e).renderer,c=e.mediaType,f=o.getMediaTypes(e),l=f&&f[c],g=l&&l.renderer,p=null;g&&g.url&&g.render&&(!0!==g.backupOnly||!e.renderer)?p=g:u&&u.url&&u.render&&(!0!==u.backupOnly||!e.renderer)&&(p=u),p&&(e.renderer=s.Th.install({url:p.url,config:p.options}),e.renderer.setRender(p.render));var v=G(e.mediaType,f,d.vc.getConfig("mediaTypePriceGranularity")),m=(0,a.D)(e.cpm,"object"===(0,r.Z)(v)?v:d.vc.getConfig("customPriceBucket"),d.vc.getConfig("currency.granularityMultiplier"));return e.pbLg=m.low,e.pbMg=m.med,e.pbHg=m.high,e.pbAg=m.auto,e.pbDg=m.dense,e.pbCg=m.custom,e}function G(e,n,t){if(e&&t){if(e===v.pX){var r=(0,o.Z)(n,"".concat(v.pX,".context"),"instream");if(t["".concat(v.pX,"-").concat(r)])return t["".concat(v.pX,"-").concat(r)]}return t[e]}}var V=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.index,r=void 0===t?h.K.index:t,i=G(e.mediaType,r.getMediaTypes(e),d.vc.getConfig("mediaTypePriceGranularity")),o="string"==typeof e.mediaType&&i?"string"==typeof i?i:"custom":d.vc.getConfig("priceGranularity");return o},J=function(e){return function(n){var t=e||V(n);return t===w.Ql.B7?n.pbAg:t===w.Ql.uN?n.pbDg:t===w.Ql.yE?n.pbLg:t===w.Ql.M2?n.pbMg:t===w.Ql.lj?n.pbHg:t===w.Ql.qN?n.pbCg:void 0}};function Q(e,n){return{key:e,val:"function"==typeof n?function(e,t){return n(e,t)}:function(e){return(0,i.getValue)(e,n)}}}function $(e,n){var t=w.TD,r=Object.assign({},m.S.settingsFor(null));if(r[w.k2.xn]||(r[w.k2.xn]=function(){var e=w.TD;return[Q(e.BIDDER,"bidderCode"),Q(e.AD_ID,"adId"),Q(e.PRICE_BUCKET,J()),Q(e.SIZE,"size"),Q(e.DEAL,"dealId"),Q(e.SOURCE,"source"),Q(e.FORMAT,"mediaType"),Q(e.ADOMAIN,(function(e){return e.meta&&e.meta.advertiserDomains&&e.meta.advertiserDomains.length>0?[e.meta.advertiserDomains].flat()[0]:""})),Q(e.ACAT,(function(e){return e.meta&&e.meta.primaryCatId?e.meta.primaryCatId:""})),Q(e.DSP,(function(e){return e.meta&&(e.meta.networkId||e.meta.networkName)?(0,o.Z)(e,"meta.networkName")||(0,o.Z)(e,"meta.networkId"):""})),Q(e.CRID,(function(e){return e.creativeId?e.creativeId:""}))]}()),"video"===e){var a=r[w.k2.xn].slice();if(r[w.k2.xn]=a,[t.UUID,t.CACHE_ID].forEach((function(e){void 0===(0,g.sE)(a,(function(n){return n.key===e}))&&a.push(Q(e,"videoCacheKey"))})),d.vc.getConfig("cache.url")&&(!n||!1!==m.S.get(n,"sendStandardTargeting"))){var u=(0,i.parseUrl)(d.vc.getConfig("cache.url"));void 0===(0,g.sE)(a,(function(e){return e.key===t.CACHE_HOST}))&&a.push(Q(t.CACHE_HOST,(function(e){return(0,o.Z)(e,"adserverTargeting.".concat(t.CACHE_HOST))?e.adserverTargeting[t.CACHE_HOST]:u.hostname})))}}return r}function Y(e,n,t,r){var o=n[w.k2.xn];return t.size=t.getSize(),(o||[]).forEach((function(o){var a=o.key,u=o.val;if(e[a]&&(0,i.logWarn)("The key: "+a+" is being overwritten"),(0,i.isFn)(u))try{u=u(t,r)}catch(e){(0,i.logError)("bidmanager","ERROR",e)}(void 0===n.suppressEmptyKeys||!0!==n.suppressEmptyKeys)&&a!==w.TD.DEAL&&a!==w.TD.ACAT&&a!==w.TD.DSP&&a!==w.TD.CRID||!(0,i.isEmptyStr)(u)&&null!=u?e[a]=u:(0,i.logInfo)("suppressing empty key '"+a+"' from adserver targeting")})),e}function X(e,n){return e[n.adUnitCode]||(e[n.adUnitCode]={bids:[]}),e[n.adUnitCode].bids.push(n),e}},78653:function(e,n,t){t.d(n,{K:function(){return h}});var r=t(93324),i=t(89062),o=t(64358),a=t(25686);function u(e){Object.assign(this,{getAuction:function(n){var t=n.auctionId;if(null!=t)return e().find((function(e){return e.getAuctionId()===t}))},getAdUnit:function(n){var t=n.transactionId;if(null!=t)return e().flatMap((function(e){return e.getAdUnits()})).find((function(e){return e.transactionId===t}))},getMediaTypes:function(e){var n=e.transactionId,t=e.requestId;if(null!=t){var r=this.getBidRequest({requestId:t});if(null!=r&&(null==n||r.transactionId===n))return r.mediaTypes}else if(null!=n){var i=this.getAdUnit({transactionId:n});if(null!=i)return i.mediaTypes}},getBidderRequest:function(n){var t=n.requestId,r=n.bidderRequestId;if(null!=t||null!=r){var i=e().flatMap((function(e){return e.getBidRequests()}));return null!=r&&(i=i.filter((function(e){return e.bidderRequestId===r}))),null==t?i[0]:i.find((function(e){return e.bids&&null!=e.bids.find((function(e){return e.bidId===t}))}))}},getBidRequest:function(n){var t=n.requestId;if(null!=t)return e().flatMap((function(e){return e.getBidRequests()})).flatMap((function(e){return e.bids})).find((function(e){return e&&e.bidId===t}))}})}var c=t(5644),s=t(99128),d=t(10613),f=t(8833),l=t(3193);function g(e,n){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,n){if(!e)return;if("string"==typeof e)return p(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return p(e,n)}(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,u=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return a=e.done,e},e:function(e){u=!0,o=e},f:function(){try{a||null==t.return||t.return()}finally{if(u)throw o}}}}function p(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var v="minBidCacheTTL";var h=function(){var e=null,n=(0,d.Z)({startTime:function(e){return e.end.then((function(){return e.getAuctionEnd()}))},ttl:function(n){return null==e?null:n.end.then((function(){return 1e3*Math.max.apply(Math,[e].concat((0,i.Z)(n.getBidsReceived().map(f.N))))}))}});(0,f.l)((function(){null!=e&&n.refresh()})),l.vc.getConfig(v,(function(t){e!==(e="number"==typeof(e=null==t?void 0:t.minBidCacheTTL)?e:null)&&n.refresh()}));var t={};function p(e){var t,r=g(n);try{for(r.s();!(t=r.n()).done;){var i=t.value;if(i.getAuctionId()===e)return i}}catch(e){r.e(e)}finally{r.f()}}function h(){return n.toArray().flatMap((function(e){return e.getBidsReceived()}))}return t.addWinningBid=function(e){var n=(0,s.Bf)(e.metrics);n.checkpoint("bidWon"),n.timeBetween("auctionEnd","bidWon","render.pending"),n.timeBetween("requestBids","bidWon","render.e2e");var t=p(e.auctionId);t?(e.status=c.UE.fe,t.addWinningBid(e)):(0,o.logWarn)("Auction not found when adding winning bid")},Object.entries({getAllWinningBids:{name:"getWinningBids"},getBidsRequested:{name:"getBidRequests"},getNoBids:{},getAdUnits:{},getBidsReceived:{pre:function(e){return e.getAuctionStatus()===a.mv}},getAdUnitCodes:{post:o.uniques}}).forEach((function(e){var i=(0,r.Z)(e,2),o=i[0],a=i[1],u=a.name,c=void 0===u?o:u,s=a.pre,d=a.post,f=null==s?function(e){return e[c]()}:function(e){return s(e)?e[c]():[]},l=null==d?function(e){return e}:function(e){return e.filter(d)};t[o]=function(){return l(n.toArray().flatMap(f))}})),t.getAllBidsForAdUnitCode=function(e){return h().filter((function(n){return n&&n.adUnitCode===e}))},t.createAuction=function(e){var t=(0,a.vO)(e);return function(e){n.add(e)}(t),t},t.findBidByAdId=function(e){return h().find((function(n){return n.adId===e}))},t.getStandardBidderAdServerTargeting=function(){return(0,a.LX)()[c.k2.xn]},t.setStatusForBids=function(e,n){var r=t.findBidByAdId(e);if(r&&(r.status=n),r&&n===c.UE.CK){var i=p(r.auctionId);i&&i.setBidTargeting(r)}},t.getLastAuctionId=function(){var e=n.toArray();return e.length&&e[e.length-1].getAuctionId()},t.clearAllAuctions=function(){n.clear()},t.index=new u((function(){return n.toArray()})),t}()},8833:function(e,n,t){t.d(n,{N:function(){return u},l:function(){return c}});var r=t(3193),i=t(64358),o=1,a=[];function u(e){return e.ttl-(e.hasOwnProperty("ttlBuffer")?e.ttlBuffer:o)}function c(e){a.push(e)}r.vc.getConfig("ttlBuffer",(function(e){"number"==typeof e.ttlBuffer?o!==(o=e.ttlBuffer)&&a.forEach((function(e){return e(o)})):(0,i.logError)("Invalid value for ttlBuffer",e.ttlBuffer)}))},55975:function(e,n,t){t.d(n,{S:function(){return g}});var r=t(15671),i=t(43144),o=t(20265),a=t(64358),u=t(78640),c=t(5644);function s(e,n){!function(e,n){if(n.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e,n),n.add(e)}function d(e,n,t){if(!n.has(e))throw new TypeError("attempted to get private field on non-instance");return t}var f=new WeakSet;function l(e){return null==e?this.defaultScope:e}var g=new(function(){function e(n,t){(0,r.Z)(this,e),s(this,f),this.getSettings=n,this.defaultScope=t}return(0,i.Z)(e,[{key:"get",value:function(e,n){var t=this.getOwn(e,n);return void 0===t&&(t=this.getOwn(null,n)),t}},{key:"getOwn",value:function(e,n){return e=d(this,f,l).call(this,e),(0,o.Z)(this.getSettings(),"".concat(e,".").concat(n))}},{key:"getScopes",value:function(){var e=this;return Object.keys(this.getSettings()).filter((function(n){return n!==e.defaultScope}))}},{key:"settingsFor",value:function(e){return(0,a.mergeDeep)({},this.ownSettingsFor(null),this.ownSettingsFor(e))}},{key:"ownSettingsFor",value:function(e){return e=d(this,f,l).call(this,e),this.getSettings()[e]||{}}}]),e}())((function(){return(0,u.R)().bidderSettings||{}}),c.k2.zF)},69626:function(e,n,t){t.d(n,{m:function(){return o}});var r=t(64358);function i(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.src,i=void 0===t?"client":t,o=n.bidder,a=void 0===o?"":o,u=n.bidId,c=n.transactionId,s=n.auctionId,d=i,f=e||0;function l(){switch(f){case 0:return"Pending";case 1:return"Bid available";case 2:return"Bid returned empty or error response";case 3:return"Bid timed out"}}this.bidderCode=a,this.width=0,this.height=0,this.statusMessage=l(),this.adId=(0,r.getUniqueIdentifierStr)(),this.requestId=u,this.transactionId=c,this.auctionId=s,this.mediaType="banner",this.source=d,this.getStatusCode=function(){return f},this.getSize=function(){return this.width+"x"+this.height},this.getIdentifiers=function(){return{src:this.source,bidder:this.bidderCode,bidId:this.requestId,transactionId:this.transactionId,auctionId:this.auctionId}}}function o(e,n){return new i(e,n)}},3193:function(e,n,t){t.d(n,{FD:function(){return g},vc:function(){return b}});var r=t(4942),i=t(71002),o=t(93324),a=t(56463),u=t(34614),c=t(64358),s=t(20265),d=t(5644);function f(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}var l="TRUE"===(0,c.getParameterByName)(d.f).toUpperCase(),g="random",p={};p[g]=!0,p.fixed=!0;var v=g,h={LOW:"low",MEDIUM:"medium",HIGH:"high",AUTO:"auto",DENSE:"dense",CUSTOM:"custom"},m="*";var b=function(){var e,n,t,d=[],g=null;function b(){function r(e){return s[e].val}function i(e,n){s[e].val=n}e={};var s={publisherDomain:{set:function(e){null!=e&&(0,c.logWarn)("publisherDomain is deprecated and has no effect since v7 - use pageUrl instead"),i("publisherDomain",e)}},priceGranularity:{val:h.MEDIUM,set:function(e){g(e)&&("string"==typeof e?i("priceGranularity",f(e)?e:h.MEDIUM):(0,c.isPlainObject)(e)&&(i("customPriceBucket",e),i("priceGranularity",h.CUSTOM),(0,c.logMessage)("Using custom price granularity")))}},customPriceBucket:{val:{},set:function(){}},mediaTypePriceGranularity:{val:{},set:function(e){null!=e&&i("mediaTypePriceGranularity",Object.keys(e).reduce((function(n,t){return g(e[t])?"string"==typeof e?n[t]=f(e[t])?e[t]:r("priceGranularity"):(0,c.isPlainObject)(e)&&(n[t]=e[t],(0,c.logMessage)("Using custom price granularity for ".concat(t))):(0,c.logWarn)("Invalid price granularity for media type: ".concat(t)),n}),{}))}},bidderSequence:{val:v,set:function(e){p[e]?i("bidderSequence",e):(0,c.logWarn)("Invalid order: ".concat(e,". Bidder Sequence was not set."))}},auctionOptions:{val:{},set:function(e){(function(e){if(!(0,c.isPlainObject)(e))return(0,c.logWarn)("Auction Options must be an object"),!1;for(var n=0,t=Object.keys(e);n<t.length;n++){var r=t[n];if("secondaryBidders"!==r&&"suppressStaleRender"!==r)return(0,c.logWarn)("Auction Options given an incorrect param: ".concat(r)),!1;if("secondaryBidders"===r){if(!(0,c.isArray)(e[r]))return(0,c.logWarn)("Auction Options ".concat(r," must be of type Array")),!1;if(!e[r].every(c.isStr))return(0,c.logWarn)("Auction Options ".concat(r," must be only string")),!1}else if("suppressStaleRender"===r&&!(0,c.isBoolean)(e[r]))return(0,c.logWarn)("Auction Options ".concat(r," must be of type boolean")),!1}return!0})(e)&&i("auctionOptions",e)}}},d={debug:l,bidderTimeout:3e3,enableSendAllBids:true,useBidCache:false,deviceAccess:true,timeoutBuffer:400,disableAjaxTimeout:false,maxNestedIframes:10};function f(e){return(0,u.sE)(Object.keys(h),(function(n){return e===h[n]}))}function g(e){if(!e)return(0,c.logError)("Prebid Error: no value passed to `setPriceGranularity()`"),!1;if("string"==typeof e)f(e)||(0,c.logWarn)("Prebid Warning: setPriceGranularity was called with invalid setting, using `medium` as default.");else if((0,c.isPlainObject)(e)&&!(0,a.t)(e))return(0,c.logError)("Invalid custom price value passed to `setPriceGranularity()`"),!1;return!0}Object.defineProperties(d,Object.fromEntries(Object.entries(s).map((function(e){var n=(0,o.Z)(e,2),t=n[0],a=n[1];return[t,Object.assign({get:r.bind(null,t),set:i.bind(null,t),enumerable:!0},a)]})))),n&&j(Object.keys(n).reduce((function(e,t){return n[t]!==d[t]&&(e[t]=d[t]||{}),e}),{})),n=d,t={}}function y(){if(g&&t&&(0,c.isPlainObject)(t[g])){var e=t[g],r=new Set(Object.keys(n).concat(Object.keys(e)));return(0,u.Oc)(r).reduce((function(t,r){return void 0===e[r]?t[r]=n[r]:void 0===n[r]?t[r]=e[r]:(0,c.isPlainObject)(e[r])?t[r]=(0,c.mergeDeep)({},n[r],e[r]):t[r]=e[r],t}),{})}return Object.assign({},n)}var w=[y,function(){var e=y();return Object.defineProperty(e,"ortb2",{get:function(){throw new Error("invalid access to 'orbt2' config - use request parameters instead")}}),e}].map((function(e){return function(){if(arguments.length<=1&&"function"!=typeof(arguments.length<=0?void 0:arguments[0])){var n=arguments.length<=0?void 0:arguments[0];return n?(0,s.Z)(e(),n):y()}return B.apply(void 0,arguments)}})),E=(0,o.Z)(w,2),A=E[0],C=E[1],T=[C,A].map((function(e){return function(){var n=e.apply(void 0,arguments);return n&&"object"===(0,i.Z)(n)&&(n=(0,c.deepClone)(n)),n}})),I=(0,o.Z)(T,2),O=I[0],S=I[1];function k(t){if((0,c.isPlainObject)(t)){var r=Object.keys(t),i={};r.forEach((function(r){var o=t[r];(0,c.isPlainObject)(e[r])&&(0,c.isPlainObject)(o)&&(o=Object.assign({},e[r],o));try{i[r]=n[r]=o}catch(e){(0,c.logWarn)("Cannot set config for property ".concat(r," : "),e)}})),j(i)}else(0,c.logError)("setConfig options must be an object")}function B(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=n;if("string"!=typeof e&&(i=e,e=m,t=n||{}),"function"==typeof i){var o={topic:e,callback:i};return d.push(o),t.init&&i(e===m?C():(0,r.Z)({},e,C(e))),function(){d.splice(d.indexOf(o),1)}}(0,c.logError)("listener must be a function")}function j(e){var n=Object.keys(e);d.filter((function(e){return(0,u.q9)(n,e.topic)})).forEach((function(n){n.callback((0,r.Z)({},n.topic,e[n.topic]))})),d.filter((function(e){return e.topic===m})).forEach((function(n){return n.callback(e)}))}function U(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];try{r(e),e.bidders.forEach((function(r){t[r]||(t[r]={}),Object.keys(e.config).forEach((function(i){var o=e.config[i];if((0,c.isPlainObject)(o)){var a=n?c.mergeDeep:Object.assign;t[r][i]=a({},t[r][i]||{},o)}else t[r][i]=o}))}))}catch(e){(0,c.logError)(e)}function r(e){if(!(0,c.isPlainObject)(e))throw"setBidderConfig bidder options must be an object";if(!Array.isArray(e.bidders)||!e.bidders.length)throw"setBidderConfig bidder options must contain a bidders list with at least 1 bidder";if(!(0,c.isPlainObject)(e.config))throw"setBidderConfig bidder options must contain a config object"}}function R(e,n){g=e;try{return n()}finally{P()}}function P(){g=null}return b(),{getCurrentBidder:function(){return g},resetBidder:P,getConfig:C,getAnyConfig:A,readConfig:O,readAnyConfig:S,setConfig:k,mergeConfig:function(e){if((0,c.isPlainObject)(e)){var n=(0,c.mergeDeep)(y(),e);return k(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?f(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):f(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},n)),n}(0,c.logError)("mergeConfig input must be an object")},setDefaults:function(t){(0,c.isPlainObject)(e)?(Object.assign(e,t),Object.assign(n,t)):(0,c.logError)("defaults must be an object")},resetConfig:b,runWithBidder:R,callbackWithBidder:function(e){return function(n){return function(){if("function"==typeof n){for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return R(e,n.bind.apply(n,[this].concat(r)))}(0,c.logWarn)("config.callbackWithBidder callback is not a function")}}},setBidderConfig:U,getBidderConfig:function(){return t},mergeBidderConfig:function(e){return U(e,!0)}}}()},34516:function(e,n,t){t.d(n,{$P:function(){return w},Lw:function(){return E},NO:function(){return L},TJ:function(){return N},VP:function(){return M},nX:function(){return _},qh:function(){return W},rp:function(){return x}});var r=t(93324),i=t(97326),o=t(60136),a=t(82963),u=t(61120),c=t(15671),s=t(43144),d=t(4942),f=t(18916),l=t(42793),g=t(64358),p=t(68792),v=t(3193);function h(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=(0,u.Z)(e);if(n){var i=(0,u.Z)(this).constructor;t=Reflect.construct(r,arguments,i)}else t=r.apply(this,arguments);return(0,a.Z)(this,t)}}function m(e,n,t){b(e,n),n.set(e,t)}function b(e,n){if(n.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function y(e,n,t){if(!n.has(e))throw new TypeError("attempted to get private field on non-instance");return t}var w=Object.freeze({}),E=Object.freeze({}),A=new WeakMap,C=new WeakMap,T=new WeakMap,I=new WeakMap,O=new WeakMap,S=new WeakMap,k=new WeakSet,B=function(){function e(){var n,t;(0,c.Z)(this,e),b(n=this,t=k),t.add(n),m(this,A,{writable:!0,value:void 0}),m(this,C,{writable:!0,value:void 0}),m(this,T,{writable:!0,value:void 0}),m(this,I,{writable:!0,value:void 0}),m(this,O,{writable:!0,value:!0}),m(this,S,{writable:!0,value:void 0}),(0,d.Z)(this,"generatedTime",void 0),(0,d.Z)(this,"hashFields",void 0),this.reset()}return(0,s.Z)(e,[{key:"reset",value:function(){(0,l.Z)(this,T,(0,p.P)()),(0,l.Z)(this,A,!1),(0,l.Z)(this,C,null),(0,l.Z)(this,I,!1),this.generatedTime=null}},{key:"enable",value:function(){(0,l.Z)(this,A,!0)}},{key:"enabled",get:function(){return(0,f.Z)(this,A)}},{key:"ready",get:function(){return(0,f.Z)(this,I)}},{key:"promise",get:function(){return(0,f.Z)(this,I)?p.Z.resolve((0,f.Z)(this,C)):((0,f.Z)(this,A)||y(this,k,j).call(this,null),(0,f.Z)(this,T).promise)}},{key:"setConsentData",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,g.timestamp)();this.generatedTime=n,(0,l.Z)(this,O,!0),y(this,k,j).call(this,e)}},{key:"getConsentData",value:function(){return(0,f.Z)(this,C)}},{key:"hash",get:function(){var e=this;return(0,f.Z)(this,O)&&((0,l.Z)(this,S,(0,g.cyrb53Hash)(JSON.stringify((0,f.Z)(this,C)&&this.hashFields?this.hashFields.map((function(n){return(0,f.Z)(e,C)[n]})):(0,f.Z)(this,C)))),(0,l.Z)(this,O,!1)),(0,f.Z)(this,S)}}]),e}();function j(e){(0,l.Z)(this,I,!0),(0,l.Z)(this,C,e),(0,f.Z)(this,T).resolve(e)}var U=function(e){(0,o.Z)(t,e);var n=h(t);function t(){return(0,c.Z)(this,t),n.apply(this,arguments)}return(0,s.Z)(t,[{key:"getConsentMeta",value:function(){var e=this.getConsentData();if(e&&this.generatedTime)return{usp:e,generatedAt:this.generatedTime}}}]),t}(B),R=function(e){(0,o.Z)(t,e);var n=h(t);function t(){var e;(0,c.Z)(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return e=n.call.apply(n,[this].concat(o)),(0,d.Z)((0,i.Z)(e),"hashFields",["gdprApplies","consentString"]),e}return(0,s.Z)(t,[{key:"getConsentMeta",value:function(){var e=this.getConsentData();if(e&&e.vendorData&&this.generatedTime)return{gdprApplies:e.gdprApplies,consentStringSize:(0,g.isStr)(e.vendorData.tcString)?e.vendorData.tcString.length:0,generatedAt:this.generatedTime,apiVersion:e.apiVersion}}}]),t}(B),P=function(e){(0,o.Z)(t,e);var n=h(t);function t(){var e;(0,c.Z)(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return e=n.call.apply(n,[this].concat(o)),(0,d.Z)((0,i.Z)(e),"hashFields",["applicableSections","gppString"]),e}return(0,s.Z)(t,[{key:"getConsentMeta",value:function(){if(this.getConsentData()&&this.generatedTime)return{generatedAt:this.generatedTime}}}]),t}(B);var D,Z,q,x=new R,_=new U,N=new P,M=function(){function e(){return!!v.vc.getConfig("coppa")}return{getCoppa:e,getConsentData:e,getConsentMeta:e,reset:function(){},get promise(){return p.Z.resolve(e())},get hash(){return e()?"1":"0"}}}(),W=(D={},Z={},q={},{register:function(e,n,t){t&&((D[n]=D[n]||{})[e]=t,Z.hasOwnProperty(n)?Z[n]!==t&&(Z[n]=q):Z[n]=t)},get:function(e){var n={modules:D[e]||{}};return Z.hasOwnProperty(e)&&Z[e]!==q&&(n.gvlid=Z[e]),n}}),F={gdpr:x,usp:_,gpp:N,coppa:M};var L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F;function n(n){return function(){return Object.fromEntries(e.map((function(e){var t=(0,r.Z)(e,2);return[t[0],t[1][n]()]})))}}return e=Object.entries(e),Object.assign({get promise(){return p.Z.all(e.map((function(e){var n=(0,r.Z)(e,2),t=n[0];return n[1].promise.then((function(e){return[t,e]}))}))).then((function(e){return Object.fromEntries(e)}))},get hash(){return(0,g.cyrb53Hash)(e.map((function(e){var n=(0,r.Z)(e,2);n[0];return n[1].hash})).join(":"))}},Object.fromEntries(["getConsentData","getConsentMeta","reset"].map((function(e){return[e,n(e)]}))))}()},56463:function(e,n,t){t.d(n,{D:function(){return f},t:function(){return g}});var r=t(34614),i=t(64358),o=t(3193),a={buckets:[{max:5,increment:.5}]},u={buckets:[{max:20,increment:.1}]},c={buckets:[{max:20,increment:.01}]},s={buckets:[{max:3,increment:.01},{max:8,increment:.05},{max:20,increment:.5}]},d={buckets:[{max:5,increment:.05},{max:10,increment:.1},{max:20,increment:.5}]};function f(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=parseFloat(e);return isNaN(r)&&(r=""),{low:""===r?"":l(e,a,t),med:""===r?"":l(e,u,t),high:""===r?"":l(e,c,t),auto:""===r?"":l(e,d,t),dense:""===r?"":l(e,s,t),custom:""===r?"":l(e,n,t)}}function l(e,n,t){var a="";if(!g(n))return a;var u=n.buckets.reduce((function(e,n){return e.max>n.max?e:n}),{max:0}),c=0,s=(0,r.sE)(n.buckets,(function(n){if(e>u.max*t){var r=n.precision;void 0===r&&(r=2),a=(n.max*t).toFixed(r)}else{if(e<=n.max*t&&e>=c*t)return n.min=c,n;c=n.max}}));return s&&(a=function(e,n,t){var r=void 0!==n.precision?n.precision:2,a=n.increment*t,u=n.min*t,c=Math.floor,s=o.vc.getConfig("cpmRoundingFunction");"function"==typeof s&&(c=s);var d,f,l=Math.pow(10,r+2),g=(e*l-u*l)/(a*l);try{d=c(g)*a+u}catch(e){f=!0}(f||"number"!=typeof d)&&((0,i.logWarn)("Invalid rounding function passed in config"),d=Math.floor(g)*a+u);return(d=Number(d.toFixed(10))).toFixed(r)}(e,s,t)),a}function g(e){if((0,i.isEmpty)(e)||!e.buckets||!Array.isArray(e.buckets))return!1;var n=!0;return e.buckets.forEach((function(e){e.max&&e.increment||(n=!1)})),n}},53777:function(e,n,t){t.d(n,{Jc:function(){return d},dF:function(){return v}});var r=t(3193),i=t(92797),o=t(78640),a=t(64358),u=t(69626),c=t(55730),s=t(68792),d="__pbjs_debugging__";function f(){return(0,o.R)().installedModules.includes("debugging")}function l(e){return new s.Z((function(n){(0,c.B)(e,"debugging",n)}))}function g(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.alreadyInstalled,t=void 0===n?f:n,c=e.script,g=void 0===c?l:c,p=null;return function(){return null==p&&(p=new s.Z((function(e,n){setTimeout((function(){if(t())e();else{var c="https://cdn.jsdelivr.net/npm/prebid.js@8.28.0/dist/debugging-standalone.js";(0,a.logMessage)('Debugging module not installed, loading it from "'.concat(c,'"...')),(0,o.R)()._installDebugging=!0,g(c).then((function(){(0,o.R)()._installDebugging({DEBUG_KEY:d,hook:i.z3,config:r.vc,createBid:u.m,logger:(0,a.prefixLog)("DEBUG:")})})).then(e,n)}}))}))),p}}var p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.load,t=void 0===n?g():n,r=e.hook,o=void 0===r?(0,i.v5)("requestBids"):r,a=null,u=!1;function c(e){for(var n=this,t=arguments.length,r=new Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];return(a||s.Z.resolve()).then((function(){return e.apply(n,r)}))}function d(){u||(a=t(),o.before(c,99),u=!0)}function f(){o.getHooks({hook:c}).remove(),u=!1}function l(){a=null,f()}return{enable:d,disable:f,reset:l}}();p.reset;function v(){var e=null;try{e=window.sessionStorage}catch(e){}if(null!==e){var n=p,t=null;try{t=e.getItem(d)}catch(e){}null!==t&&n.enable()}}r.vc.getConfig("debugging",(function(e){var n=e.debugging;null!=n&&n.enabled?p.enable():p.disable()}))},52021:function(e,n,t){t.r(n),t.d(n,{addEvents:function(){return w},clearEvents:function(){return A},emit:function(){return y},get:function(){return m},getEvents:function(){return b},has:function(){return E},off:function(){return h},on:function(){return v}});var r=t(64358),i=t(5644),o=t(10613),a=t(3193),u="eventHistoryTTL",c=null,s=(0,o.Z)({monotonic:!0,ttl:function(){return c}});a.vc.getConfig(u,(function(e){var n,t=c;e=null===(n=e)||void 0===n?void 0:n[u],t!==(c="number"==typeof e?1e3*e:null)&&s.refresh()}));var d=Array.prototype.slice,f=Array.prototype.push,l=Object.values(i.FP),g=i.aI,p=function(){var e={},n={};function t(n,t){r.logMessage("Emitting event for: "+n);var i=t[0]||{},o=i[g[n]],a=e[n]||{que:[]},u=Object.keys(a),c=[];s.add({eventType:n,args:i,id:o,elapsedTime:r.getPerformanceNow()}),o&&u.includes(o)&&f.apply(c,a[o].que),f.apply(c,a.que),(c||[]).forEach((function(e){if(e)try{e.apply(null,t)}catch(e){r.logError("Error executing handler:","events.js",e,n)}}))}function i(e){return l.includes(e)}return n.has=i,n.on=function(n,t,o){if(i(n)){var a=e[n]||{que:[]};o?(a[o]=a[o]||{que:[]},a[o].que.push(t)):a.que.push(t),e[n]=a}else r.logError("Wrong event name : "+n+" Valid event names :"+l)},n.emit=function(e){var n=d.call(arguments,1);t(e,n)},n.off=function(n,t,i){var o=e[n];r.isEmpty(o)||r.isEmpty(o.que)&&r.isEmpty(o[i])||i&&(r.isEmpty(o[i])||r.isEmpty(o[i].que))||(i?(o[i].que||[]).forEach((function(e){var n=o[i].que;e===t&&n.splice(n.indexOf(e),1)})):(o.que||[]).forEach((function(e){var n=o.que;e===t&&n.splice(n.indexOf(e),1)})),e[n]=o)},n.get=function(){return e},n.addEvents=function(e){l=l.concat(e)},n.getEvents=function(){return s.toArray().map((function(e){return Object.assign({},e)}))},n}();r._setEventEmitter(p.emit.bind(p));var v=p.on,h=p.off,m=p.get,b=p.getEvents,y=p.emit,w=p.addEvents,E=p.has;function A(){s.clear()}},54078:function(e,n,t){t.d(n,{S:function(){return I}});var r=t(93324),i=t(92797),o=t(25102),a=t(38196),u=t(64358),c=t(96475),s=t(3193),d=t(68792),f=["architecture","bitness","model","platformVersion","fullVersionList"],l=["brands","mobile","platform"],g=function(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null===(e=window.navigator)||void 0===e?void 0:e.userAgentData,t=n&&l.some((function(e){return void 0!==n[e]}))?Object.freeze(v(1,n)):null;return function(){return t}}(),p=function(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null===(e=window.navigator)||void 0===e?void 0:e.userAgentData,t={},r=new WeakMap;return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f;if(!r.has(e)){var i=Array.from(e);i.sort(),r.set(e,i.join("|"))}var o=r.get(e);if(!t.hasOwnProperty(o))try{t[o]=n.getHighEntropyValues(e).then((function(e){return(0,u.isEmpty)(e)?null:Object.freeze(v(2,e))})).catch((function(){return null}))}catch(e){t[o]=d.Z.resolve(null)}return t[o]}}();function v(e,n){function t(e,n){var t={brand:e};return(0,u.isStr)(n)&&!(0,u.isEmptyStr)(n)&&(t.version=n.split(".")),t}var r={source:e};return n.platform&&(r.platform=t(n.platform,n.platformVersion)),(n.fullVersionList||n.brands)&&(r.browsers=(n.fullVersionList||n.brands).map((function(e){return t(e.brand,e.version)}))),void 0!==n.mobile&&(r.mobile=n.mobile?1:0),["model","bitness","architecture"].forEach((function(e){var t=n[e];(0,u.isStr)(t)&&(r[e]=t)})),r}var h=t(83790),m=t(50571),b=t(10286),y=t(74947),w=t(9633);function E(e,n){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,n){if(!e)return;if("string"==typeof e)return A(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return A(e,n)}(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,u=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return a=e.done,e},e:function(e){u=!0,o=e},f:function(){try{a||null==t.return||t.return()}finally{if(u)throw o}}}}function A(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var C={getRefererInfo:o.nH,findRootDomain:a.W,getWindowTop:u.getWindowTop,getWindowSelf:u.getWindowSelf,getHighEntropySUA:p,getLowEntropySUA:g},T=(0,h.A_)("FPD"),I=(0,i.z3)("sync",(function(e){var n,t=[e,(n=s.vc.getConfig("firstPartyData.uaHints"),Array.isArray(n)&&0!==n.length?C.getHighEntropySUA(n):d.Z.resolve(C.getLowEntropySUA())).catch((function(){return null})),d.Z.resolve("cookieDeprecationLabel"in navigator&&(0,m.xD)(y.S1,(0,b.T)(w.wu,"cdep"))&&navigator.cookieDeprecationLabel.getValue()).catch((function(){return null}))];return d.Z.all(t).then((function(e){var n=(0,r.Z)(e,3),t=n[0],i=n[1],o=n[2],a=C.getRefererInfo();if(function(e){["app","site","device"].forEach((function(n){var t=s.vc.getConfig(n);null!=t&&(e[n]=(0,u.mergeDeep)({},t,e[n]))}))}(t),Object.entries(k).forEach((function(e){var n=(0,r.Z)(e,2),i=n[0],o=(0,n[1])(t,a);o&&Object.keys(o).length>0&&(t[i]=(0,u.mergeDeep)({},o,t[i]))})),i&&(0,c.N)(t,"device.sua",Object.assign({},i,t.device.sua)),o){var d={cdep:o};(0,c.N)(t,"device.ext",Object.assign({},d,t.device.ext))}t=T(t);var f,l=E(h.Iq);try{for(l.s();!(f=l.n()).done;){var g=f.value;if((0,h.Qg)(t,g)){t[g]=(0,u.mergeDeep)({},B(t,a),t[g]);break}}}catch(e){l.e(e)}finally{l.f()}return t}))}));function O(e){try{return e(C.getWindowTop())}catch(n){return e(C.getWindowSelf())}}function S(e){return(0,u.getDefinedParams)(e,Object.keys(e))}var k={site:function(e,n){if(!h.Iq.filter((function(e){return"site"!==e})).some(h.Qg.bind(null,e)))return S({page:n.page,ref:n.ref})},device:function(){return O((function(e){return{w:e.innerWidth||e.document.documentElement.clientWidth||e.document.body.clientWidth,h:e.innerHeight||e.document.documentElement.clientHeight||e.document.body.clientHeight,dnt:(0,u.getDNT)()?1:0,ua:e.navigator.userAgent,language:e.navigator.language.split("-").shift()}}))},regs:function(){var e={};O((function(e){return e.navigator.globalPrivacyControl}))&&(0,c.N)(e,"ext.gpc",1);var n=s.vc.getConfig("coppa");return"boolean"==typeof n&&(e.coppa=n?1:0),e}};function B(e,n){var t,r,i,a=(0,o.hh)(n.page,{noLeadingWww:!0});return S({domain:a,keywords:null===(t=O((function(e){return e.document.querySelector("meta[name='keywords']")})))||void 0===t||null===(r=t.content)||void 0===r||null===(i=r.replace)||void 0===i?void 0:i.call(r,/\s/g,""),publisher:S({domain:C.findRootDomain(a)})})}},83790:function(e,n,t){t.d(n,{A_:function(){return o},Iq:function(){return i},Qg:function(){return a}});var r=t(64358),i=["dooh","app","site"];function o(e){return function(n){return i.reduce((function(t,i){return a(n,i)&&(null!=t?((0,r.logWarn)("".concat(e," specifies both '").concat(t,"' and '").concat(i,"'; dropping the latter.")),delete n[i]):t=i),t}),null),n}}function a(e,n){return null!=e[n]&&Object.keys(e[n]).length>0}},38196:function(e,n,t){t.d(n,{W:function(){return o}});var r=t(64358),i=(0,t(15164).eA)("fpdEnrichment"),o=(0,r.memoize)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.location.host;if(!i.cookiesAreEnabled())return e;var n,t,o=e.split(".");if(2===o.length)return e;var a=-2,u="_rdc".concat(Date.now()),c="writeable";do{n=o.slice(a).join(".");var s=new Date((0,r.timestamp)()+1e4).toUTCString();i.setCookie(u,c,s,"Lax",n,void 0);var d=i.getCookie(u,void 0);d===c?(t=!1,i.setCookie(u,"","Thu, 01 Jan 1970 00:00:01 GMT",void 0,n,void 0)):(a+=-1,t=Math.abs(a)<=o.length)}while(t);return n}))},92797:function(e,n,t){t.d(n,{Bx:function(){return p},Cd:function(){return s},IF:function(){return v},bA:function(){return g},o0:function(){return f},v5:function(){return d},z3:function(){return u}});var r=t(89062),i=t(81432),o=t.n(i),a=t(68792),u=o()({ready:o().SYNC|o().ASYNC|o().QUEUE}),c=(0,a.P)();u.ready=function(){var e=u.ready;return function(){try{return e.apply(u,arguments)}finally{c.resolve()}}}();var s=c.promise,d=u.get;function f(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:15,r=e.getHooks({hook:n});0===r.length&&e.before(n,t)}var l={};function g(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=t.postInstallAllowed,o=void 0!==i&&i;u("async",(function(t){t.forEach((function(e){return n.apply(void 0,(0,r.Z)(e))})),o&&(l[e]=n)}),e)([])}function p(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];var i=l[e];if(i)return i.apply(void 0,t);d(e).before((function(e,n){n.push(t),e(n)}))}function v(e,n){return Object.defineProperties(n,Object.fromEntries(["before","after","getHooks","removeAll"].map((function(n){return[n,{get:function(){return e[n]}}]})))),n}},24679:function(e,n,t){t.d(n,{B5:function(){return r},Mk:function(){return o},Oh:function(){return a},pX:function(){return i}});var r="native",i="video",o="banner",a="adpod"},70059:function(e,n,t){t.d(n,{Fb:function(){return B},JL:function(){return _},Sg:function(){return h},Ur:function(){return D},e6:function(){return P},eK:function(){return x},lY:function(){return F},r4:function(){return U},xc:function(){return m},zq:function(){return K}});var r=t(89062),i=t(93324),o=t(4942),a=t(20265),u=t(64358),c=t(34614),s=t(78653),d=t(5644),f=t(24679);function l(e,n){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,n){if(!e)return;if("string"==typeof e)return g(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return g(e,n)}(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,u=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return a=e.done,e},e:function(e){u=!0,o=e},f:function(){try{a||null==t.return||t.return()}finally{if(u)throw o}}}}function g(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function v(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var h=[],m=Object.keys(d.FY).map((function(e){return d.FY[e]})),b={image:{ortb:{ver:"1.2",assets:[{required:1,id:1,img:{type:3,wmin:100,hmin:100}},{required:1,id:2,title:{len:140}},{required:1,id:3,data:{type:1}},{required:0,id:4,data:{type:2}},{required:0,id:5,img:{type:1,wmin:20,hmin:20}}]},image:{required:!0},title:{required:!0},sponsoredBy:{required:!0},clickUrl:{required:!0},body:{required:!1},icon:{required:!1}}},y=d.s$,w=d.oF,E=d.V1,A=d.zA,C=d.FY,T=H(E),I=H(y),O={img:1,js:2,1:"img",2:"js"},S=1;function k(e){if(e&&e.type&&function(e){if(!e||!(0,c.q9)(Object.keys(b),e))return(0,u.logError)("".concat(e," nativeParam is not supported")),!1;return!0}(e.type)&&(e=b[e.type]),!e||!e.ortb||j(e.ortb))return e}function B(e){e.forEach((function(e){var n=e.nativeParams||(0,a.Z)(e,"mediaTypes.native");n&&(e.nativeParams=k(n)),e.nativeParams&&(e.nativeOrtbRequest=e.nativeParams.ortb||function(e){if(!e&&!(0,u.isPlainObject)(e))return void(0,u.logError)("Native assets object is empty or not an object: ",e);var n={ver:"1.2",assets:[]};for(var t in e)if(!A.includes(t))if(C.hasOwnProperty(t))if("privacyLink"!==t){var r=e[t],i=0;r.required&&(0,u.isBoolean)(r.required)&&(i=Number(r.required));var o={id:n.assets.length,required:i};if(t in E)o.data={type:y[E[t]]},r.len&&(o.data.len=r.len);else if("icon"===t||"image"===t){if(o.img={type:"icon"===t?w.ICON:w.MAIN},r.aspect_ratios)if((0,u.isArray)(r.aspect_ratios))if(r.aspect_ratios.length){var a=r.aspect_ratios[0],c=a.min_width,s=a.min_height;(0,u.isInteger)(c)&&(0,u.isInteger)(s)?(o.img.wmin=c,o.img.hmin=s):(0,u.logError)("image.aspect_ratios min_width or min_height are invalid: ",c,s);var d=r.aspect_ratios.filter((function(e){return e.ratio_width&&e.ratio_height})).map((function(e){return"".concat(e.ratio_width,":").concat(e.ratio_height)}));d.length>0&&(o.img.ext={aspectratios:d})}else(0,u.logError)("image.aspect_ratios was passed, but it's empty:",r.aspect_ratios);else(0,u.logError)("image.aspect_ratios was passed, but it's not a an array:",r.aspect_ratios);r.sizes&&(2===r.sizes.length&&(0,u.isInteger)(r.sizes[0])&&(0,u.isInteger)(r.sizes[1])?(o.img.w=r.sizes[0],o.img.h=r.sizes[1],delete o.img.hmin,delete o.img.wmin):(0,u.logError)("image.sizes was passed, but its value is not an array of integers:",r.sizes))}else"title"===t?o.title={len:r.len||140}:"ext"===t&&(o.ext=r,delete o.required);n.assets.push(o)}else n.privacy=1;else(0,u.logError)("Unrecognized native asset code: ".concat(t,". Asset will be ignored."));return n}(e.nativeParams))}))}function j(e){var n=e.assets;if(!Array.isArray(n)||0===n.length)return(0,u.logError)("assets in mediaTypes.native.ortb is not an array, or it's empty. Assets: ",n),!1;var t=n.map((function(e){return e.id}));return n.length!==new Set(t).size||t.some((function(e){return e!==parseInt(e,10)}))?((0,u.logError)("each asset object must have 'id' property, it must be unique and it must be an integer"),!1):e.hasOwnProperty("eventtrackers")&&!Array.isArray(e.eventtrackers)?((0,u.logError)("ortb.eventtrackers is not an array. Eventtrackers: ",e.eventtrackers),!1):n.every((function(e){return function(e){if(!(0,u.isPlainObject)(e))return(0,u.logError)("asset must be an object. Provided asset: ",e),!1;if(e.img){if(!(0,u.isNumber)(e.img.w)&&!(0,u.isNumber)(e.img.wmin))return(0,u.logError)("for img asset there must be 'w' or 'wmin' property"),!1;if(!(0,u.isNumber)(e.img.h)&&!(0,u.isNumber)(e.img.hmin))return(0,u.logError)("for img asset there must be 'h' or 'hmin' property"),!1}else if(e.title){if(!(0,u.isNumber)(e.title.len))return(0,u.logError)("for title asset there must be 'len' property defined"),!1}else if(e.data){if(!(0,u.isNumber)(e.data.type))return(0,u.logError)("for data asset 'type' property must be a number"),!1}else if(e.video&&!(Array.isArray(e.video.mimes)&&Array.isArray(e.video.protocols)&&(0,u.isNumber)(e.video.minduration)&&(0,u.isNumber)(e.video.maxduration)))return(0,u.logError)("video asset is not properly configured"),!1;return!0}(e)}))}function U(e){var n,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.index,i=void 0===r?s.K.index:r,o=i.getAdUnit(e);if(!o)return!1;var a=o.nativeOrtbRequest,u=(null===(n=e.native)||void 0===n?void 0:n.ortb)||z(e.native,a);return R(u,a)}function R(e,n){if(!(0,a.Z)(e,"link.url"))return(0,u.logError)("native response doesn't have 'link' property. Ortb response: ",e),!1;var t=n.assets.filter((function(e){return 1===e.required})).map((function(e){return e.id})),r=e.assets.map((function(e){return e.id})),i=t.every((function(e){return(0,c.q9)(r,e)}));return i||(0,u.logError)("didn't receive a bid with all required assets. Required ids: ".concat(t,", but received ids in response: ").concat(r)),i}function P(e,n){var t=n.native.ortb||L(n.native);return"click"===e.action?function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,t=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).fetchURL,r=void 0===t?u.triggerPixel:t;if(n){var i,o=(e.assets||[]).filter((function(e){return e.link})).reduce((function(e,n){return e[n.id]=n.link,e}),{}),a=(null===(i=e.link)||void 0===i?void 0:i.clicktrackers)||[],c=o[n],s=a;c&&(s=c.clicktrackers||[]),s.forEach((function(e){return r(e)}))}else{var d;((null===(d=e.link)||void 0===d?void 0:d.clicktrackers)||[]).forEach((function(e){return r(e)}))}}(t,null==e?void 0:e.assetId):function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.runMarkup,r=void 0===t?function(e){return(0,u.insertHtmlIntoIframe)(e)}:t,i=n.fetchURL,o=void 0===i?u.triggerPixel:i,a=(e.eventtrackers||[]).filter((function(e){return e.event===S})).reduce((function(e,n){return O.hasOwnProperty(n.method)&&e[O[n.method]].push(n.url),e}),{img:[],js:[]}),c=a.img,s=a.js;e.imptrackers&&(c=c.concat(e.imptrackers));c.forEach((function(e){return o(e)})),s=s.map((function(e){return'<script async src="'.concat(e,'"><\/script>')})),e.jstracker&&(s=s.concat([e.jstracker]));s.length&&r(s.join("\n"))}(t),e.action}function D(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.index,r=void 0===t?s.K.index:t,i={},o=r.getAdUnit(e);(0,a.Z)(o,"nativeParams.rendererUrl")?e.native.rendererUrl=N(o.nativeParams.rendererUrl):(0,a.Z)(o,"nativeParams.adTemplate")&&(e.native.adTemplate=N(o.nativeParams.adTemplate));var u=!1!==(0,a.Z)(o,"nativeParams.sendTargetingKeys"),c=M(o),d=v(v({},e.native),e.native.ext);return delete d.ext,Object.keys(d).forEach((function(n){var t=c[n],r=N(e.native[n])||N((0,a.Z)(e,"native.ext.".concat(n)));if("adTemplate"!==n&&t&&r){var s=(0,a.Z)(o,"nativeParams.".concat(n,".sendId"));if("boolean"!=typeof s&&(s=(0,a.Z)(o,"nativeParams.ext.".concat(n,".sendId"))),s)r="".concat(t,":").concat(e.adId);var d=(0,a.Z)(o,"nativeParams.".concat(n,".sendTargetingKeys"));"boolean"!=typeof d&&(d=(0,a.Z)(o,"nativeParams.ext.".concat(n,".sendTargetingKeys"))),("boolean"==typeof d?d:u)&&(i[t]=r)}})),i}function Z(e,n,t){var r,i,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},a=o.index,u=void 0===a?s.K.index:a,c={message:"assetResponse",adId:e.adId},f=u.getAdUnit(n),l=n.native;return n.native.ortb?c.ortb=n.native.ortb:null!==(r=f.mediaTypes)&&void 0!==r&&null!==(i=r.native)&&void 0!==i&&i.ortb&&(c.ortb=z(n.native,f.nativeOrtbRequest)),c.assets=[],(null==t?Object.keys(l):t).forEach((function(e){if("adTemplate"===e&&l[e])c.adTemplate=N(l[e]);else if("rendererUrl"===e&&l[e])c.rendererUrl=N(l[e]);else if("ext"===e)Object.keys(l[e]).forEach((function(n){if(l[e][n]){var t=N(l[e][n]);c.assets.push({key:n,value:t})}}));else if(l[e]&&d.FY.hasOwnProperty(e)){var n=N(l[e]);c.assets.push({key:e,value:n})}})),c}var q=Object.fromEntries(Object.entries(d.FY).map((function(e){var n=(0,i.Z)(e,2),t=n[0];return[n[1],t]})));function x(e,n){var t=e.assets.map((function(e){return q[e]}));return Z(e,n,t)}function _(e,n){return Z(e,n,null)}function N(e){return(null==e?void 0:e.url)||e}function M(e){var n={};return(0,a.Z)(e,"nativeParams.ext")&&Object.keys(e.nativeParams.ext).forEach((function(e){n[e]="hb_native_".concat(e)})),v(v({},d.FY),n)}function W(e){if(j(e)){var n,t={},r=l(e.assets);try{var i=function(){var r=n.value;if(r.title){var i={required:!!r.required&&Boolean(r.required),len:r.title.len};t.title=i}else if(r.img){var o={required:!!r.required&&Boolean(r.required)};if(r.img.w&&r.img.h)o.sizes=[r.img.w,r.img.h];else if(r.img.wmin&&r.img.hmin){var a=function(e,n){for(;e&&n&&e!==n;)e>n?e-=n:n-=e;return e||n}(r.img.wmin,r.img.hmin);o.aspect_ratios=[{min_width:r.img.wmin,min_height:r.img.hmin,ratio_width:r.img.wmin/a,ratio_height:r.img.hmin/a}]}r.img.type===w.MAIN?t.image=o:t.icon=o}else if(r.data){var u=Object.keys(y).find((function(e){return y[e]===r.data.type})),c=Object.keys(E).find((function(e){return E[e]===u}));t[c]={required:!!r.required&&Boolean(r.required)},r.data.len&&(t[c].len=r.data.len)}e.privacy&&(t.privacyLink={required:!1})};for(r.s();!(n=r.n()).done;)i()}catch(e){r.e(e)}finally{r.f()}return t}}function F(e){if(!e||!(0,u.isArray)(e))return e;if(!e.some((function(e){var n;return null===(n=((null==e?void 0:e.mediaTypes)||{})[f.B5])||void 0===n?void 0:n.ortb})))return e;var n,t=(0,u.deepClone)(e),r=l(t);try{for(r.s();!(n=r.n()).done;){var i=n.value;i.mediaTypes&&i.mediaTypes[f.B5]&&i.mediaTypes[f.B5].ortb&&(i.mediaTypes[f.B5]=Object.assign((0,u.pick)(i.mediaTypes[f.B5],A),W(i.mediaTypes[f.B5].ortb)),i.nativeParams=k(i.mediaTypes[f.B5]))}}catch(e){r.e(e)}finally{r.f()}return t}function L(e){var n={link:{},eventtrackers:[]};return Object.entries(e).forEach((function(e){var t=(0,i.Z)(e,2),r=t[0],o=t[1];switch(r){case"clickUrl":n.link.url=o;break;case"clickTrackers":n.link.clicktrackers=Array.isArray(o)?o:[o];break;case"impressionTrackers":(Array.isArray(o)?o:[o]).forEach((function(e){n.eventtrackers.push({event:S,method:O.img,url:e})}));break;case"javascriptTrackers":n.jstracker=Array.isArray(o)?o.join(""):o;break;case"privacyLink":n.privacy=o}})),n}function z(e,n){var t=v(v({},L(e)),{},{assets:[]});function r(e,r){var i=n.assets.find(e);null!=i&&(r(i=(0,u.deepClone)(i)),t.assets.push(i))}return Object.keys(e).filter((function(n){return!!e[n]})).forEach((function(n){var t=N(e[n]);switch(n){case"title":r((function(e){return null!=e.title}),(function(e){e.title={text:t}}));break;case"image":case"icon":var i="image"===n?w.MAIN:w.ICON;r((function(e){return null!=e.img&&e.img.type===i}),(function(e){e.img={url:t}}));break;default:n in E&&r((function(e){return null!=e.data&&e.data.type===y[E[n]]}),(function(e){e.data={value:t}}))}})),t}function K(e,n){var t={},i=(null==n?void 0:n.assets)||[];t.clickUrl=e.link.url,t.privacyLink=e.privacy;var o,a=l((null==e?void 0:e.assets)||[]);try{var u=function(){var e=o.value,n=i.find((function(n){return e.id===n.id}));e.title?t.title=e.title.text:e.img?t[n.img.type===w.MAIN?"image":"icon"]={url:e.img.url,width:e.img.w,height:e.img.h}:e.data&&(t[T[I[n.data.type]]]=e.data.value)};for(a.s();!(o=a.n()).done;)u()}catch(e){a.e(e)}finally{a.f()}t.impressionTrackers=[];var c,s=[];e.imptrackers&&(c=t.impressionTrackers).push.apply(c,(0,r.Z)(e.imptrackers));var d,f=l((null==e?void 0:e.eventtrackers)||[]);try{for(f.s();!(d=f.n()).done;){var g=d.value;g.event===S&&g.method===O.img&&t.impressionTrackers.push(g.url),g.event===S&&g.method===O.js&&s.push(g.url)}}catch(e){f.e(e)}finally{f.f()}return s=s.map((function(e){return'<script async src="'.concat(e,'"><\/script>')})),null!=e&&e.jstracker&&s.push(e.jstracker),s.length&&(t.javascriptTrackers=s.join("\n")),t}function H(e){var n={};for(var t in e)n[e[t]]=t;return n}},34614:function(e,n,t){function r(e,n,t){return e&&e.includes(n,t)||!1}function i(){return Array.from.apply(Array,arguments)}function o(e,n,t){return e&&e.find(n,t)}function a(e,n,t){return e&&e.findIndex(n,t)}t.d(n,{Oc:function(){return i},cx:function(){return a},q9:function(){return r},sE:function(){return o}})},20327:function(e,n,t){t.d(n,{zh:function(){return $},O5:function(){return X},ew:function(){return te}});var r,i=t(93324),o=t(4942),a=t(78640),u=t(64358),c=t(20265),s=t(96475),d=t(52021),f=t(70059),l=t(5644),g=t(78653),p=t(34614),v=t(13667),h=t(17007),m=l.FP.BID_WON,b=new WeakSet,y=(r={},(0,o.Z)(r,h.ZR,(function(e,n,t){(0,v.XD)((function(n){E(t),e(Object.assign({message:h.VX},n))}),{options:n.options,adId:n.adId,bidResponse:t})})),(0,o.Z)(r,h.G,(function(e,n,t){if(null==t)return void(0,u.logError)("Cannot find ad '".concat(n.adId,"' for x-origin event request"));if(t.status!==l.UE.fe)return void(0,u.logWarn)("Received x-origin event request without corresponding render request for ad '".concat(n.adId,"'"));switch(n.event){case l.FP.AD_RENDER_FAILED:(0,v.Pm)({bid:t,id:n.adId,reason:n.info.reason,message:n.info.message});break;case l.FP.AD_RENDER_SUCCEEDED:(0,v.bL)({doc:null,bid:t,id:n.adId});break;default:(0,u.logError)("Received x-origin event request for unsupported event: '".concat(n.event,"' (adId: '").concat(n.adId,"')"))}})),r);function w(e){var n=e.message?"message":"data",t={};try{t=JSON.parse(e[n])}catch(e){return}if(t&&t.adId&&t.message){var r=(0,p.sE)(g.K.getBidsReceived(),(function(e){return e.adId===t.adId}));y.hasOwnProperty(t.message)&&y[t.message](function(e){return null==e.origin&&0===e.ports.length?function(){var e="Cannot post message to a frame with null origin. Please update creatives to use MessageChannel, see https://github.com/prebid/Prebid.js/issues/7870";throw(0,u.logError)(e),new Error(e)}:e.ports.length>0?function(n){e.ports[0].postMessage(JSON.stringify(n))}:function(n){e.source.postMessage(JSON.stringify(n),e.origin)}}(e),t,r)}}function E(e){var n=e.adId,t=e.adUnitCode,r=e.width,i=e.height;["div","iframe"].forEach((function(e){var o=function(e){var r=function(e,n){return(0,u.isGptPubadsDefined)()?function(e){var n=(0,p.sE)(window.googletag.pubads().getSlots(),(function(n){return(0,p.sE)(n.getTargetingKeys(),(function(t){return(0,p.q9)(n.getTargeting(t),e)}))}));return n?n.getSlotElementId():null}(e):(0,u.isApnGetTagDefined)()?function(e){var n=window.apntag.getTag(e);return n&&n.targetId}(n):n}(n,t),i=document.getElementById(r);return i&&i.querySelector(e)}(e+':not([style*="display: none"])');if(o){var a=o.style;a.width=r?r+"px":"100%",a.height=i+"px"}else(0,u.logWarn)("Unable to locate matching page element for adUnitCode ".concat(t,".  Can't resize it to ad's dimensions.  Please review setup."))}))}Object.assign(y,(0,o.Z)({},h.u7,(function(e,n,t){if(null==t)return void(0,u.logError)("Cannot find ad for x-origin event request: '".concat(n.adId,"'"));b.has(t)||(b.add(t),g.K.addWinningBid(t),d.emit(m,t));switch(n.action){case"assetRequest":e((0,f.eK)(n,t));break;case"allAssetRequest":e((0,f.JL)(n,t));break;case"resizeNativeHeight":t.height=n.height,t.width=n.width,E(t);break;default:(0,f.e6)(n,t)}})));var A=t(11974),C=t(3193),T=t(18621),I=t(92797),O=t(53777),S=t(875),k=t(69626),B=t(15164),j=t(86104),U=t(99128),R=t(68792),P=t(54078),D=t(34516),Z=t(29819),q=t(31136),x=t(90154),_=(0,a.R)(),N=A.k_.triggerUserSyncs,M=l.FP,W=M.ADD_AD_UNITS,F=M.REQUEST_BIDS,L=M.SET_TARGETING,z={bidWon:function(e){if(!g.K.getBidsRequested().map((function(e){return e.bids.map((function(e){return e.adUnitCode}))})).reduce(u.flatten).filter(u.uniques).includes(e))return void(0,u.logError)('The "'+e+'" placement is not defined.');return!0}};function K(e,n){var t=[];return(0,u.isArray)(e)&&(n?e.length===n:e.length>0)&&(e.every((function(e){return(0,u.isArrayOfNums)(e,2)}))?t=e:(0,u.isArrayOfNums)(e,2)&&t.push(e)),t}function H(e){var n=(0,u.deepClone)(e),t=n.mediaTypes.banner,r=K(t.sizes);return r.length>0?(t.sizes=r,n.sizes=r):((0,u.logError)("Detected a mediaTypes.banner object without a proper sizes field.  Please ensure the sizes are listed like: [[300, 250], ...].  Removing invalid mediaTypes.banner object from request."),delete n.mediaTypes.banner),n}function G(e){var n=(0,u.deepClone)(e),t=n.mediaTypes.video;if(t.playerSize){var r="number"==typeof t.playerSize[0]?2:1,i=K(t.playerSize,r);i.length>0?(2===r&&(0,u.logInfo)("Transforming video.playerSize from [640,480] to [[640,480]] so it's in the proper format."),t.playerSize=i,n.sizes=i):((0,u.logError)("Detected incorrect configuration of mediaTypes.video.playerSize.  Please specify only one set of dimensions in a format like: [[640, 480]]. Removing invalid mediaTypes.video.playerSize property from request."),delete n.mediaTypes.video.playerSize)}return n}function V(e){var n=(0,u.deepClone)(e),t=n.mediaTypes.native;if(t.ortb){var r=Object.keys(l.FY).filter((function(e){return l.FY[e].includes("hb_native_")})),i=Object.keys(t).filter((function(e){return r.includes(e)}));i.length>0&&((0,u.logError)("when using native OpenRTB format, you cannot use legacy native properties. Deleting ".concat(i," keys from request.")),i.forEach((function(e){return delete n.mediaTypes.native[e]})))}return t.image&&t.image.sizes&&!Array.isArray(t.image.sizes)&&((0,u.logError)("Please use an array of sizes for native.image.sizes field.  Removing invalid mediaTypes.native.image.sizes property from request."),delete n.mediaTypes.native.image.sizes),t.image&&t.image.aspect_ratios&&!Array.isArray(t.image.aspect_ratios)&&((0,u.logError)("Please use an array of sizes for native.image.aspect_ratios field.  Removing invalid mediaTypes.native.image.aspect_ratios property from request."),delete n.mediaTypes.native.image.aspect_ratios),t.icon&&t.icon.sizes&&!Array.isArray(t.icon.sizes)&&((0,u.logError)("Please use an array of sizes for native.icon.sizes field.  Removing invalid mediaTypes.native.icon.sizes property from request."),delete n.mediaTypes.native.icon.sizes),n}function J(e,n){var t=(0,c.Z)(e,"mediaTypes.".concat(n,".pos"));if(!(0,u.isNumber)(t)||isNaN(t)||!isFinite(t)){var r="Value of property 'pos' on ad unit ".concat(e.code," should be of type: Number");(0,u.logWarn)(r),d.emit(l.FP.AUCTION_DEBUG,{type:"WARNING",arguments:r}),delete e.mediaTypes[n].pos}return e}function Q(e){var n=function(n){return"adUnit.code '".concat(e.code,"' ").concat(n)},t=e.mediaTypes,r=e.bids;return null==r||(0,u.isArray)(r)?null==r&&null==e.ortb2Imp?((0,u.logError)(n("has no 'adUnit.bids' and no 'adUnit.ortb2Imp'. Removing adUnit from auction")),null):t&&0!==Object.keys(t).length?(null==e.ortb2Imp||null!=r&&0!==r.length||(e.bids=[{bidder:null}],(0,u.logMessage)(n("defines 'adUnit.ortb2Imp' with no 'adUnit.bids'; it will be seen only by S2S adapters"))),e):((0,u.logError)(n("does not define a 'mediaTypes' object.  This is a required field for the auction, so this adUnit has been removed.")),null):((0,u.logError)(n("defines 'adUnit.bids' that is not an array. Removing adUnit from auction")),null)}(0,O.dF)(),_.bidderSettings=_.bidderSettings||{},_.libLoaded=!0,_.version="v8.28.0",(0,u.logInfo)("Prebid.js v8.28.0 loaded"),_.installedModules=_.installedModules||[],_.adUnits=_.adUnits||[],_.triggerUserSyncs=N;var $={validateAdUnit:Q,validateBannerMediaType:H,validateSizes:K};Object.assign($,{validateNativeMediaType:V}),Object.assign($,{validateVideoMediaType:G});var Y,X=(0,I.z3)("sync",(function(e){var n=[];return e.forEach((function(e){if(null!=(e=Q(e))){var t,r,i,o=e.mediaTypes;o.banner&&(t=H(e),o.banner.hasOwnProperty("pos")&&(t=J(t,"banner"))),o.video&&(r=G(t||e),o.video.hasOwnProperty("pos")&&(r=J(r,"video"))),o.native&&(i=V(r||(t||e)));var a=Object.assign({},t,r,i);n.push(a)}})),n}),"checkAdUnitSetup");function ee(e){e.forEach((function(e){return(0,x.cx)(e)}))}function ne(e){var n=g.K[e]().filter((function(e){return g.K.getAdUnitCodes().includes(e.adUnitCode)})),t=g.K.getLastAuctionId();return n.map((function(e){return e.adUnitCode})).filter(u.uniques).map((function(e){return n.filter((function(n){return n.auctionId===t&&n.adUnitCode===e}))})).filter((function(e){return e&&e[0]&&e[0].adUnitCode})).map((function(e){return(0,o.Z)({},e[0].adUnitCode,{bids:e})})).reduce((function(e,n){return Object.assign(e,n)}),{})}_.getAdserverTargetingForAdUnitCodeStr=function(e){if((0,u.logInfo)("Invoking pbjs.getAdserverTargetingForAdUnitCodeStr",arguments),e){var n=_.getAdserverTargetingForAdUnitCode(e);return(0,u.transformAdServerTargetingObj)(n)}(0,u.logMessage)("Need to call getAdserverTargetingForAdUnitCodeStr with adunitCode")},_.getHighestUnusedBidResponseForAdUnitCode=function(e){if(e){var n=g.K.getAllBidsForAdUnitCode(e).filter(T.TL);return n.length?n.reduce(q.ZH):{}}(0,u.logMessage)("Need to call getHighestUnusedBidResponseForAdUnitCode with adunitCode")},_.getAdserverTargetingForAdUnitCode=function(e){return _.getAdserverTargeting(e)[e]},_.getAdserverTargeting=function(e){return(0,u.logInfo)("Invoking pbjs.getAdserverTargeting",arguments),T.q0.getAllTargeting(e)},_.getConsentMetadata=function(){return(0,u.logInfo)("Invoking pbjs.getConsentMetadata"),D.NO.getConsentMeta()},_.getNoBids=function(){return(0,u.logInfo)("Invoking pbjs.getNoBids",arguments),ne("getNoBids")},_.getNoBidsForAdUnitCode=function(e){return{bids:g.K.getNoBids().filter((function(n){return n.adUnitCode===e}))}},_.getBidResponses=function(){return(0,u.logInfo)("Invoking pbjs.getBidResponses",arguments),ne("getBidsReceived")},_.getBidResponsesForAdUnitCode=function(e){return{bids:g.K.getBidsReceived().filter((function(n){return n.adUnitCode===e}))}},_.setTargetingForGPTAsync=function(e,n){if((0,u.logInfo)("Invoking pbjs.setTargetingForGPTAsync",arguments),(0,u.isGptPubadsDefined)()){var t=T.q0.getAllTargeting(e);T.q0.resetPresetTargeting(e,n),T.q0.setTargetingForGPT(t,n),Object.keys(t).forEach((function(e){Object.keys(t[e]).forEach((function(n){"hb_adid"===n&&g.K.setStatusForBids(t[e][n],l.UE.CK)}))})),d.emit(L,t)}else(0,u.logError)("window.googletag is not defined on the page")},_.setTargetingForAst=function(e){(0,u.logInfo)("Invoking pbjs.setTargetingForAn",arguments),T.q0.isApntagDefined()?(T.q0.setTargetingForAst(e),d.emit(L,T.q0.getAllTargeting())):(0,u.logError)("window.apntag is not defined on the page")},_.renderAd=(0,I.z3)("async",(function(e,n,t){(0,u.logInfo)("Invoking pbjs.renderAd",arguments),(0,u.logMessage)("Calling renderAd with adId :"+n),(0,Z.t)(e,n,t)})),_.removeAdUnit=function(e){((0,u.logInfo)("Invoking pbjs.removeAdUnit",arguments),e)?((0,u.isArray)(e)?e:[e]).forEach((function(e){for(var n=_.adUnits.length-1;n>=0;n--)_.adUnits[n].code===e&&_.adUnits.splice(n,1)})):_.adUnits=[]},_.requestBids=(Y=(0,I.z3)("async",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.bidsBackHandler,t=e.timeout,r=e.adUnits,o=e.adUnitCodes,a=e.labels,c=e.auctionId,s=e.ttlBuffer,f=e.ortb2,l=e.metrics,g=e.defer;d.emit(F);var v=t||C.vc.getConfig("bidderTimeout");(0,u.logInfo)("Invoking pbjs.requestBids",arguments),o&&o.length?r=r.filter((function(e){return(0,p.q9)(o,e.code)})):o=r&&r.map((function(e){return e.code}));var h={global:(0,u.mergeDeep)({},C.vc.getAnyConfig("ortb2")||{},f||{}),bidder:Object.fromEntries(Object.entries(C.vc.getBidderConfig()).map((function(e){var n=(0,i.Z)(e,2);return[n[0],n[1].ortb2]})).filter((function(e){var n=(0,i.Z)(e,2);return n[0],null!=n[1]})))};return(0,P.S)(R.Z.resolve(h.global)).then((function(e){return h.global=e,te({bidsBackHandler:n,timeout:v,adUnits:r,adUnitCodes:o,labels:a,auctionId:c,ttlBuffer:s,ortb2Fragments:h,metrics:l,defer:g})}))}),"requestBids"),(0,I.IF)(Y,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.adUnits||_.adUnits;return e.adUnits=(0,u.isArray)(n)?n.slice():[n],e.metrics=(0,U.V6)(),e.metrics.checkpoint("requestBids"),e.defer=(0,R.P)({promiseFactory:function(e){return new Promise(e)}}),Y.call(this,e),e.defer.promise})));var te=(0,I.z3)("async",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.bidsBackHandler,t=e.timeout,r=e.adUnits,i=e.ttlBuffer,o=e.adUnitCodes,a=e.labels,c=e.auctionId,d=e.ortb2Fragments,f=e.metrics,l=e.defer,v=(0,j.uV)(C.vc.getConfig("s2sConfig")||[]);function h(e,t,r){if("function"==typeof n)try{n(e,t,r)}catch(e){(0,u.logError)("Error executing bidsBackHandler",null,e)}l.resolve({bids:e,timedOut:t,auctionId:r})}if(ee(r),(r=(0,U.Bf)(f).measureTime("requestBids.validate",(function(){return X(r)}))).forEach((function(e){var n,t,r=Object.keys(e.mediaTypes||{banner:"banner"}),o=e.bids.map((function(e){return e.bidder})),a=j.ZP.bidderRegistry,c=o.filter((function(e){return!v.has(e)})),d=(null===(n=e.ortb2Imp)||void 0===n||null===(t=n.ext)||void 0===t?void 0:t.tid)||(0,u.generateUUID)();e.transactionId=d,null==i||e.hasOwnProperty("ttlBuffer")||(e.ttlBuffer=i),(0,s.N)(e,"ortb2Imp.ext.tid",d),c.forEach((function(n){var t=a[n],i=t&&t.getSpec&&t.getSpec(),o=i&&i.supportedMediaTypes||["banner"];r.some((function(e){return(0,p.q9)(o,e)}))?S.f.incrementBidderRequestsCounter(e.code,n):((0,u.logWarn)((0,u.unsupportedBidderMessage)(e,n)),e.bids=e.bids.filter((function(e){return e.bidder!==n})))})),S.f.incrementRequestsCounter(e.code)})),r&&0!==r.length){var m=g.K.createAuction({adUnits:r,adUnitCodes:o,callback:h,cbTimeout:t,labels:a,auctionId:c,ortb2Fragments:d,metrics:f}),b=r.length;b>15&&(0,u.logInfo)("Current auction ".concat(m.getAuctionId()," contains ").concat(b," adUnits."),r),o.forEach((function(e){return T.q0.setLatestAuctionForAdUnit(e,m.getAuctionId())})),m.callBids()}else(0,u.logMessage)("No adUnits configured. No bids requested."),h()}),"startAuction");_.requestBids.before((function(e,n){function t(e){for(var n;n=e.shift();)n()}t(B.Ld),t(re),e.call(this,n)}),49),_.addAdUnits=function(e){(0,u.logInfo)("Invoking pbjs.addAdUnits",arguments),_.adUnits.push.apply(_.adUnits,(0,u.isArray)(e)?e:[e]),d.emit(W)},_.onEvent=function(e,n,t){(0,u.logInfo)("Invoking pbjs.onEvent",arguments),(0,u.isFn)(n)?!t||z[e].call(null,t)?d.on(e,n,t):(0,u.logError)('The id provided is not valid for event "'+e+'" and no handler was set.'):(0,u.logError)('The event handler provided is not a function and was not set on event "'+e+'".')},_.offEvent=function(e,n,t){(0,u.logInfo)("Invoking pbjs.offEvent",arguments),t&&!z[e].call(null,t)||d.off(e,n,t)},_.getEvents=function(){return(0,u.logInfo)("Invoking pbjs.getEvents"),d.getEvents()},_.registerBidAdapter=function(e,n){(0,u.logInfo)("Invoking pbjs.registerBidAdapter",arguments);try{j.ZP.registerBidAdapter(e(),n)}catch(e){(0,u.logError)("Error registering bidder adapter : "+e.message)}},_.registerAnalyticsAdapter=function(e){(0,u.logInfo)("Invoking pbjs.registerAnalyticsAdapter",arguments);try{j.ZP.registerAnalyticsAdapter(e)}catch(e){(0,u.logError)("Error registering analytics adapter : "+e.message)}},_.createBid=function(e){return(0,u.logInfo)("Invoking pbjs.createBid",arguments),(0,k.m)(e)};var re=[],ie=(0,I.z3)("async",(function(e){e&&!(0,u.isEmpty)(e)?((0,u.logInfo)("Invoking pbjs.enableAnalytics for: ",e),j.ZP.enableAnalytics(e)):(0,u.logError)("pbjs.enableAnalytics should be called with option {}")}),"enableAnalyticsCb");_.enableAnalytics=function(e){re.push(ie.bind(this,e))},_.aliasBidder=function(e,n,t){(0,u.logInfo)("Invoking pbjs.aliasBidder",arguments),e&&n?j.ZP.aliasBidAdapter(e,n,t):(0,u.logError)("bidderCode and alias must be passed as arguments","pbjs.aliasBidder")},_.aliasRegistry=j.ZP.aliasRegistry,C.vc.getConfig("aliasRegistry",(function(e){"private"===e.aliasRegistry&&delete _.aliasRegistry})),_.getAllWinningBids=function(){return g.K.getAllWinningBids()},_.getAllPrebidWinningBids=function(){return g.K.getBidsReceived().filter((function(e){return e.status===l.UE.CK}))},_.getHighestCpmBids=function(e){return T.q0.getWinningBids(e)},_.markWinningBidAsUsed=function(e){var n=oe(e,"Improper use of markWinningBidAsUsed. It needs an adUnitCode or an adId to function.");n.length>0&&g.K.addWinningBid(n[0])};var oe=function(e,n){var t=[];return e.adUnitCode&&e.adId?t=g.K.getBidsReceived().filter((function(n){return n.adId===e.adId&&n.adUnitCode===e.adUnitCode})):e.adUnitCode?t=T.q0.getWinningBids(e.adUnitCode):e.adId?t=g.K.getBidsReceived().filter((function(n){return n.adId===e.adId})):(0,u.logWarn)(n),t};function ae(e){e.forEach((function(e){if(void 0===e.called)try{e.call(),e.called=!0}catch(e){(0,u.logError)("Error processing command :","prebid.js",e)}}))}_.getConfig=C.vc.getAnyConfig,_.readConfig=C.vc.readAnyConfig,_.mergeConfig=C.vc.mergeConfig,_.mergeBidderConfig=C.vc.mergeBidderConfig,_.setConfig=C.vc.setConfig,_.setBidderConfig=C.vc.setBidderConfig,_.que.push((function(){window.addEventListener("message",w,!1)})),_.cmd.push=function(e){if("function"==typeof e)try{e.call()}catch(e){(0,u.logError)("Error processing command :",e.message,e.stack)}else(0,u.logError)("Commands written into pbjs.cmd.push must be wrapped in a function")},_.que.push=_.cmd.push,_.processQueue=function(){I.z3.ready(),ae(_.que),ae(_.cmd)},_.triggerBilling=function(e){var n=oe(e,"Improper use of triggerBilling. It requires a bid with at least an adUnitCode or an adId to function."),t=n.find((function(n){return n.requestId===e.requestId}))||n[0];if(n.length>0&&t)try{j.ZP.callBidBillableBidder(t)}catch(e){(0,u.logError)("Error when triggering billing :",e)}else(0,u.logWarn)("The bid provided to triggerBilling did not match any bids received.")}},78640:function(e,n,t){t.d(n,{R:function(){return o},z:function(){return a}});var r=window,i=r.pbjs=r.pbjs||{};function o(){return i}function a(e){i.installedModules.push(e)}i.cmd=i.cmd||[],i.que=i.que||[],r===window&&(r._pbjsGlobals=r._pbjsGlobals||[],r._pbjsGlobals.push("pbjs"))},25102:function(e,n,t){t.d(n,{hh:function(){return a},nH:function(){return s}});var r=t(3193),i=t(64358);function o(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window;if(!e)return e;if(/\w+:\/\//.exec(e))return e;var t=n.location.protocol;try{t=n.top.location.protocol}catch(e){}return/^\/\//.exec(e)?t+e:"".concat(t,"//").concat(e)}function a(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.noLeadingWww,r=void 0!==t&&t,i=n.noPort,a=void 0!==i&&i;try{e=new URL(o(e))}catch(e){return}return e=a?e.hostname:e.host,r&&e.startsWith("www.")&&(e=e.substring(4)),e}function u(e){try{var n=e.querySelector("link[rel='canonical']");if(null!==n)return n.href}catch(e){}return null}var c,s=function(e){var n,t,r,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window;return i.top!==i?e:function(){var o=u(i.document),a=i.location.href;return n===o&&a===t||(n=o,t=a,r=e()),r}}((c=window,function(){var e,n,t,s,d=[],f=function(e){try{if(!e.location.ancestorOrigins)return;return e.location.ancestorOrigins}catch(e){}}(c),l=r.vc.getConfig("maxNestedIframes"),g=!1,p=0,v=!1,h=!1,m=!1;do{var b=e,y=h,w=void 0,E=!1,A=null;h=!1,e=e?e.parent:c;try{w=e.location.href||null}catch(e){E=!0}if(E)if(y){var C=b.context;try{n=A=C.sourceUrl,m=!0,v=!0,e===c.top&&(g=!0),C.canonicalUrl&&(t=C.canonicalUrl)}catch(e){}}else{(0,i.logWarn)("Trying to access cross domain iframe. Continuing without referrer and location");try{var T=b.document.referrer;T&&(A=T,e===c.top&&(g=!0))}catch(e){}!A&&f&&f[p-1]&&(A=f[p-1],e===c.top&&(m=!0)),A&&!v&&(n=A)}else{if(w&&(n=A=w,v=!1,e===c.top)){g=!0;var I=u(e.document);I&&(t=I)}e.context&&e.context.sourceUrl&&(h=!0)}d.push(A),p++}while(e!==c.top&&p<l);d.reverse();try{s=c.top.document.referrer}catch(e){}var O=g||m?n:null,S=r.vc.getConfig("pageUrl")||t||null,k=r.vc.getConfig("pageUrl")||O||o(S,c);return O&&O.indexOf("?")>-1&&-1===k.indexOf("?")&&(k="".concat(k).concat(O.substring(O.indexOf("?")))),{reachedTop:g,isAmp:v,numIframes:p-1,stack:d,topmostLocation:n||null,location:O,canonicalUrl:S,page:k,domain:a(k)||null,ref:s||null,legacy:{reachedTop:g,isAmp:v,numIframes:p-1,stack:d,referer:n||null,canonicalUrl:S}}}))},15164:function(e,n,t){t.d(n,{Dp:function(){return g},Ld:function(){return v},c$:function(){return p},df:function(){return m},eA:function(){return b}});var r=t(4942),i=t(64358),o=t(55975),a=t(9633),u=t(50571),c=t(16310),s=t(74947),d=t(3193),f=t(86104),l=t(10286),g="html5",p="cookie",v=[];function h(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.moduleName,t=e.moduleType,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},h=o.isAllowed,m=void 0===h?u.xD:h;function b(e,i){var o=n,u=d.vc.getCurrentBidder();return u&&t===a.UL&&f.ZP.aliasRegistry[u]===n&&(o=u),e({valid:m(s.S1,(0,l.T)(t,o,(0,r.Z)({},c.bL,i)))})}function y(e,n,t){if(!t||"function"!=typeof t)return b(e,n);v.push((function(){var r=b(e,n);t(r)}))}var w=function(e,n,t,r,i,o){return y((function(o){if(o&&o.valid){var a=i&&""!==i?" ;domain=".concat(encodeURIComponent(i)):"",u=t&&""!==t?" ;expires=".concat(t):"",c=null!=r&&"none"==r.toLowerCase()?"; Secure":"";document.cookie="".concat(e,"=").concat(encodeURIComponent(n)).concat(u,"; path=/").concat(a).concat(r?"; SameSite=".concat(r):"").concat(c)}}),p,o)},E=function(e,n){return y((function(n){if(n&&n.valid){var t=window.document.cookie.match("(^|;)\\s*"+e+"\\s*=\\s*([^;]*)\\s*(;|$)");return t?decodeURIComponent(t[2]):null}return null}),p,n)},A=function(e){return y((function(e){if(e&&e.valid)try{return localStorage.setItem("prebid.cookieTest","1"),"1"===localStorage.getItem("prebid.cookieTest")}catch(e){}finally{try{localStorage.removeItem("prebid.cookieTest")}catch(e){}}return!1}),g,e)},C=function(e){return y((function(e){return!(!e||!e.valid)&&(0,i.checkCookieSupport)()}),p,e)},T=function(e,n,t){return y((function(t){t&&t.valid&&S()&&window.localStorage.setItem(e,n)}),g,t)},I=function(e,n){return y((function(n){return n&&n.valid&&S()?window.localStorage.getItem(e):null}),g,n)},O=function(e,n){return y((function(n){n&&n.valid&&S()&&window.localStorage.removeItem(e)}),g,n)},S=function(e){return y((function(e){if(e&&e.valid)try{return!!window.localStorage}catch(e){(0,i.logError)("Local storage api disabled")}return!1}),g,e)},k=function(e,n){return y((function(n){if(n&&n.valid){var t=[];if((0,i.hasDeviceAccess)())for(var r=document.cookie.split(";");r.length;){var o=r.pop(),a=o.indexOf("=");a=a<0?o.length:a,decodeURIComponent(o.slice(0,a).replace(/^\s+/,"")).indexOf(e)>=0&&t.push(decodeURIComponent(o.slice(a+1)))}return t}}),p,n)};return{setCookie:w,getCookie:E,localStorageIsEnabled:A,cookiesAreEnabled:C,setDataInLocalStorage:T,getDataFromLocalStorage:I,removeDataFromLocalStorage:O,hasLocalStorage:S,findSimilarCookies:k}}function m(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.moduleType,t=e.moduleName,r=e.bidderCode;function i(){throw new Error("Invalid invocation for getStorageManager: must set either bidderCode, or moduleType + moduleName")}return r?((n&&n!==a.UL||t)&&i(),n=a.UL,t=r):t&&n||i(),h({moduleType:n,moduleName:t})}function b(e){return h({moduleName:e,moduleType:a.wu})}(0,u.oB)(s.S1,"deviceAccess config",(function(){if(!(0,i.hasDeviceAccess)())return{allow:!1}})),(0,u.oB)(s.S1,"bidderSettings.*.storageAllowed",(function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o.S;if(e[c.$k]===a.UL){var t=n.get(e[c.Ki],"storageAllowed");if(t&&!0!==t){var r=e[c.bL];t=Array.isArray(t)?t.some((function(e){return e===r})):t===r}else t=!!t;return t?void 0:{allow:t}}}))},18621:function(e,n,t){t.d(n,{TL:function(){return C},bP:function(){return I},ol:function(){return T},q0:function(){return O}});var r=t(4942),i=t(89062),o=t(64358),a=t(20265),u=t(3193),c=t(70059),s=t(78653),d=t(24679),f=t(92797),l=t(55975),g=t(34614),p=t(5644),v=t(31136),h=t(8833),m=[],b="targetingControls.allowTargetingKeys",y="targetingControls.addTargetingKeys",w='Only one of "'.concat(b,'" or "').concat(y,'" can be set'),E=Object.keys(p.TD).map((function(e){return p.TD[e]})),A={isActualBid:function(e){return e.getStatusCode()===p.Q_.Q},isBidNotExpired:function(e){return e.responseTimestamp+1e3*(0,h.N)(e)>(0,o.timestamp)()},isUnusedBid:function(e){return e&&(e.status&&!(0,g.q9)([p.UE.fe],e.status)||!e.status)}};function C(e){return!Object.values(A).some((function(n){return!n(e)}))}var T=(0,f.z3)("sync",(function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(!r){var a=[],c=u.vc.getConfig("sendBidsControl.dealPrioritization"),s=(0,o.groupBy)(e,"adUnitCode");return Object.keys(s).forEach((function(e){var r=[],u=(0,o.groupBy)(s[e],"bidderCode");Object.keys(u).forEach((function(e){return r.push(u[e].reduce(n))})),t>0?(r=c?r.sort(I(!0)):r.sort((function(e,n){return n.cpm-e.cpm})),a.push.apply(a,(0,i.Z)(r.slice(0,t)))):a.push.apply(a,(0,i.Z)(r))})),a}return e}));function I(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return function(n,t){return void 0!==n.adserverTargeting.hb_deal&&void 0===t.adserverTargeting.hb_deal?-1:void 0===n.adserverTargeting.hb_deal&&void 0!==t.adserverTargeting.hb_deal?1:e?t.cpm-n.cpm:t.adserverTargeting.hb_pb-n.adserverTargeting.hb_pb}}var O=function(e){var n={},t={};function s(e,n){return e.adserverTargeting&&n&&((0,o.isArray)(n)&&(0,g.q9)(n,e.adUnitCode)||"string"==typeof n&&e.adUnitCode===n)}function f(e,n){if(!0===u.vc.getConfig("targetingControls.alwaysIncludeDeals")){var t=E.concat(c.xc);return T(n,v.ZH).map((function(n){if(n.dealId&&s(n,e))return(0,r.Z)({},n.adUnitCode,q(n,t.filter((function(e){return void 0!==n.adserverTargeting[e]}))))})).filter((function(e){return e}))}return[]}function h(e,n){var t=Object.assign({},p.TD,p.FY),r=Object.keys(t),i={};(0,o.logInfo)("allowTargetingKeys - allowed keys [ ".concat(n.map((function(e){return t[e]})).join(", ")," ]")),e.map((function(e){var o=Object.keys(e)[0],a=e[o].filter((function(e){var o=Object.keys(e)[0],a=0===r.filter((function(e){return 0===o.indexOf(t[e])})).length||(0,g.sE)(n,(function(e){var n=t[e];return 0===o.indexOf(n)}));return i[o]=!a,a}));e[o]=a}));var a=Object.keys(i).filter((function(e){return i[e]}));return(0,o.logInfo)("allowTargetingKeys - removed keys [ ".concat(a.join(", ")," ]")),e.filter((function(e){return e[Object.keys(e)[0]].length>0}))}function A(e,n){var t=(0,o.deepClone)(e);return Object.keys(t).map((function(e){return{adUnitCode:e,adserverTargeting:t[e]}})).sort(I()).reduce((function(e,r,i,a){var u,c=(u=r.adserverTargeting,Object.keys(u).reduce((function(e,n){return e+"".concat(n,"%3d").concat(encodeURIComponent(u[n]),"%26")}),""));i+1===a.length&&(c=c.slice(0,-3));var s=r.adUnitCode,d=c.length;return d<=n?(n-=d,(0,o.logInfo)("AdUnit '".concat(s,"' auction keys comprised of ").concat(d," characters.  Deducted from running threshold; new limit is ").concat(n),t[s]),e[s]=t[s]):(0,o.logWarn)("The following keys for adUnitCode '".concat(s,"' exceeded the current limit of the 'auctionKeyMaxChars' setting.\nThe key-set size was ").concat(d,", the current allotted amount was ").concat(n,".\n"),t[s]),i+1===a.length&&0===Object.keys(e).length&&(0,o.logError)("No auction targeting keys were permitted due to the setting in setConfig(targetingControls.auctionKeyMaxChars).  Please review setup and consider adjusting."),e}),{})}function O(e){var n=e.map((function(e){return(0,r.Z)({},Object.keys(e)[0],e[Object.keys(e)[0]].map((function(e){return(0,r.Z)({},Object.keys(e)[0],e[Object.keys(e)[0]].join(","))})).reduce((function(e,n){return Object.assign(n,e)}),{}))})).reduce((function(e,n){var t=Object.keys(n)[0];return e[t]=Object.assign({},e[t],n[t]),e}),{});return n}function S(n){return"string"==typeof n?[n]:(0,o.isArray)(n)?n:e.getAdUnitCodes()||[]}function k(){var n=e.getBidsReceived();if(u.vc.getConfig("useBidCache")){var r=u.vc.getConfig("bidCacheFilterFunction");"function"==typeof r&&(n=n.filter((function(e){return t[e.adUnitCode]===e.auctionId||!!r(e)})))}else n=n.filter((function(e){return t[e.adUnitCode]===e.auctionId}));return(n=n.filter((function(e){return(0,a.Z)(e,"video.context")!==d.Oh})).filter(C)).forEach((function(e){return e.latestTargetedAuctionId=t[e.adUnitCode],e})),T(n,v.K$)}function B(e,t){var o=n.getWinningBids(e,t),a=j();return o=o.map((function(e){return(0,r.Z)({},e.adUnitCode,Object.keys(e.adserverTargeting).filter((function(n){return void 0===e.sendStandardTargeting||e.sendStandardTargeting||-1===a.indexOf(n)})).reduce((function(n,t){var o=[e.adserverTargeting[t]],a=(0,r.Z)({},t.substring(0,20),o);if(t===p.TD.DEAL){var u="".concat(t,"_").concat(e.bidderCode).substring(0,20),c=(0,r.Z)({},u,o);return[].concat((0,i.Z)(n),[a,c])}return[].concat((0,i.Z)(n),[a])}),[]))})),o}function j(){return e.getStandardBidderAdServerTargeting().map((function(e){return e.key})).concat(E).filter(o.uniques)}function U(e,n,t,r){return Object.keys(n.adserverTargeting).filter(R()).forEach((function(t){e.length&&e.filter(function(e){return function(t){return t.adUnitCode===n.adUnitCode&&t.adserverTargeting[e]}}(t)).forEach(function(e){return function(t){(0,o.isArray)(t.adserverTargeting[e])||(t.adserverTargeting[e]=[t.adserverTargeting[e]]),t.adserverTargeting[e]=t.adserverTargeting[e].concat(n.adserverTargeting[e]).filter(o.uniques),delete n.adserverTargeting[e]}}(t))})),e.push(n),e}function R(){var e=j();return e=e.concat(c.xc),function(n){return-1===e.indexOf(n)}}function P(e){return(0,r.Z)({},e.adUnitCode,Object.keys(e.adserverTargeting).filter(R()).map((function(n){return(0,r.Z)({},n.substring(0,20),[e.adserverTargeting[n]])})))}function D(e,n){return n.filter((function(n){return(0,g.q9)(e,n.adUnitCode)})).map((function(e){return Object.assign({},e)})).reduce(U,[]).map(P).filter((function(e){return e}))}function Z(e,n){var t=E.concat(c.xc),i=u.vc.getConfig("sendBidsControl.bidLimit"),o=T(n,v.ZH,i),a=u.vc.getConfig("targetingControls.allowSendAllBidsTargetingKeys"),d=a?a.map((function(e){return p.TD[e]})):t;return o.map((function(n){if(s(n,e))return(0,r.Z)({},n.adUnitCode,q(n,t.filter((function(e){return void 0!==n.adserverTargeting[e]&&-1!==d.indexOf(e)}))))})).filter((function(e){return e}))}function q(e,n){return n.map((function(n){return(0,r.Z)({},"".concat(n,"_").concat(e.bidderCode).substring(0,20),[e.adserverTargeting[n]])}))}function x(n){function t(e){return(0,a.Z)(e,p.k2.xn)}return e.getAdUnits().filter((function(e){return(0,g.q9)(n,e.code)&&t(e)})).map((function(e){return(0,r.Z)({},e.code,function(e){var n=t(e);return Object.keys(n).map((function(e){return(0,o.isStr)(n[e])&&(n[e]=n[e].split(",").map((function(e){return e.trim()}))),(0,o.isArray)(n[e])||(n[e]=[n[e]]),(0,r.Z)({},e,n[e])}))}(e))}))}return n.setLatestAuctionForAdUnit=function(e,n){t[e]=n},n.resetPresetTargeting=function(n,t){if((0,o.isGptPubadsDefined)()){var r=S(n),i=e.getAdUnits().filter((function(e){return(0,g.q9)(r,e.code)})),a=m.reduce((function(e,n){return e[n]=null,e}),{});window.googletag.pubads().getSlots().forEach((function(e){var n=(0,o.isFn)(t)&&t(e);i.forEach((function(t){(t.code===e.getAdUnitPath()||t.code===e.getSlotElementId()||(0,o.isFn)(n)&&n(t.code))&&e.updateTargetingFromMap(a)}))}))}},n.resetPresetTargetingAST=function(e){S(e).forEach((function(e){var n=window.apntag.getTag(e);if(n&&n.keywords){var t=Object.keys(n.keywords),r={};t.forEach((function(e){(0,g.q9)(m,e.toLowerCase())||(r[e]=n.keywords[e])})),window.apntag.modifyTag(e,{keywords:r})}}))},n.getAllTargeting=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:k(),t=S(e),r=B(t,n).concat(D(t,n)).concat(u.vc.getConfig("enableSendAllBids")?Z(t,n):f(t,n)).concat(x(t));r.map((function(e){Object.keys(e).map((function(n){e[n].map((function(e){-1===m.indexOf(Object.keys(e)[0])&&(m=Object.keys(e).concat(m))}))}))}));var i=Object.keys(Object.assign({},p.kF,p.FY)),a=u.vc.getConfig(b),c=u.vc.getConfig(y);if(null!=c&&null!=a)throw new Error(w);a=null!=c?i.concat(c):a||i,Array.isArray(a)&&a.length>0&&(r=h(r,a)),r=O(r);var s=u.vc.getConfig("targetingControls.auctionKeyMaxChars");return s&&((0,o.logInfo)("Detected 'targetingControls.auctionKeyMaxChars' was active for this auction; set with a limit of ".concat(s," characters.  Running checks on auction keys...")),r=A(r,s)),t.forEach((function(e){r[e]||(r[e]={})})),r},u.vc.getConfig("targetingControls",(function(e){null!=(0,a.Z)(e,b)&&null!=(0,a.Z)(e,y)&&(0,o.logError)(w)})),n.setTargetingForGPT=function(e,n){window.googletag.pubads().getSlots().forEach((function(t){Object.keys(e).filter(n?n(t):(0,o.isAdUnitCodeMatchingSlot)(t)).forEach((function(n){Object.keys(e[n]).forEach((function(t){var r=e[n][t];"string"==typeof r&&-1!==r.indexOf(",")&&(r=r.split(",")),e[n][t]=r})),(0,o.logMessage)("Attempting to set targeting-map for slot: ".concat(t.getSlotElementId()," with targeting-map:"),e[n]),t.updateTargetingFromMap(e[n])}))}))},n.getWinningBids=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:k(),t=S(e);return n.filter((function(e){return(0,g.q9)(t,e.adUnitCode)})).filter((function(e){return!0===l.S.get(e.bidderCode,"allowZeroCpmBids")?e.cpm>=0:e.cpm>0})).map((function(e){return e.adUnitCode})).filter(o.uniques).map((function(e){return n.filter((function(n){return n.adUnitCode===e?n:null})).reduce(v.ZH)}))},n.setTargetingForAst=function(e){var t=n.getAllTargeting(e);try{n.resetPresetTargetingAST(e)}catch(e){(0,o.logError)("unable to reset targeting for AST"+e)}Object.keys(t).forEach((function(e){return Object.keys(t[e]).forEach((function(n){if((0,o.logMessage)("Attempting to set targeting for targetId: ".concat(e," key: ").concat(n," value: ").concat(t[e][n])),(0,o.isStr)(t[e][n])||(0,o.isArray)(t[e][n])){var r={};n.search(/pt[0-9]/)<0?r[n.toUpperCase()]=t[e][n]:r[n]=t[e][n],window.apntag.setKeywords(e,r,{overrideKeyValue:!0})}}))}))},n.isApntagDefined=function(){if(window.apntag&&(0,o.isFn)(window.apntag.setKeywords))return!0},n}(s.K)},11974:function(e,n,t){t.d(n,{k_:function(){return h},oS:function(){return p}});var r=t(4942),i=t(93324),o=t(64358),a=t(3193),u=t(34614),c=t(15164),s=t(50571),d=t(74947),f=t(16310),l=t(9633),g=t(10286),p={syncEnabled:!0,filterSettings:{image:{bidders:"*",filter:"include"}},syncsPerBidder:5,syncDelay:3e3,auctionDelay:0};a.vc.setDefaults({userSync:(0,o.deepClone)(p)});var v=(0,c.eA)("usersync");var h=function(e){var n={},t={image:[],iframe:[]},c=new Set,s={},p={image:!0,iframe:!1},v=e.config;function h(){if(v.syncEnabled&&e.browserSupportsCookies){try{!function(){if(!p.iframe)return;m(t.iframe,(function(e){var n=(0,i.Z)(e,2),r=n[0],a=n[1];(0,o.logMessage)("Invoking iframe user sync for bidder: ".concat(r)),(0,o.insertUserSyncIframe)(a),function(e,n){e.image=e.image.filter((function(e){return e[0]!==n}))}(t,r)}))}(),function(){if(!p.image)return;m(t.image,(function(e){var n=(0,i.Z)(e,2),t=n[0],r=n[1];(0,o.logMessage)("Invoking image pixel user sync for bidder: ".concat(t)),(0,o.triggerPixel)(r)}))}()}catch(e){return(0,o.logError)("Error firing user syncs",e)}t={image:[],iframe:[]}}}function m(e,n){(0,o.shuffle)(e).forEach(n)}function b(e,n){var t=v.filterSettings;if(function(e,n){if(e.all&&e[n])return(0,o.logWarn)('Detected presence of the "filterSettings.all" and "filterSettings.'.concat(n,'" in userSync config.  You cannot mix "all" with "iframe/image" configs; they are mutually exclusive.')),!1;var t=e.all?e.all:e[n],r=e.all?"all":n;if(!t)return!1;var i=t.filter,a=t.bidders;if(i&&"include"!==i&&"exclude"!==i)return(0,o.logWarn)('UserSync "filterSettings.'.concat(r,".filter\" setting '").concat(i,"' is not a valid option; use either 'include' or 'exclude'.")),!1;if("*"!==a&&!(Array.isArray(a)&&a.length>0&&a.every((function(e){return(0,o.isStr)(e)&&"*"!==e}))))return(0,o.logWarn)('Detected an invalid setup in userSync "filterSettings.'.concat(r,".bidders\"; use either '*' (to represent all bidders) or an array of bidders.")),!1;return!0}(t,e)){p[e]=!0;var r=t.all?t.all:t[e],i="*"===r.bidders?[n]:r.bidders,a={include:function(e,n){return!(0,u.q9)(e,n)},exclude:function(e,n){return(0,u.q9)(e,n)}};return a[r.filter||"include"](i,n)}return!p[e]}return a.vc.getConfig("userSync",(function(e){if(e.userSync){var n=e.userSync.filterSettings;(0,o.isPlainObject)(n)&&(n.image||n.all||(e.userSync.filterSettings.image={bidders:"*",filter:"include"}))}v=Object.assign(v,e.userSync)})),e.regRule(d.K$,"userSync config",(function(e){if(!v.syncEnabled)return{allow:!1,reason:"syncs are disabled"};if(e[f.$k]===l.UL){var t=e[f.cx],r=e[f.bp];if(!n.canBidderRegisterSync(t,r))return{allow:!1,reason:"".concat(t," syncs are not enabled for ").concat(r)}}})),n.registerSync=function(n,i,a){var u;return c.has(i)?(0,o.logMessage)('already fired syncs for "'.concat(i,'", ignoring registerSync call')):v.syncEnabled&&(0,o.isArray)(t[n])?i?0!==v.syncsPerBidder&&Number(s[i])>=v.syncsPerBidder?(0,o.logWarn)('Number of user syncs exceeded for "'.concat(i,'"')):void(e.isAllowed(d.K$,(0,g.T)(l.UL,i,(u={},(0,r.Z)(u,f.cx,n),(0,r.Z)(u,f.IV,a),u)))&&(t[n].push([i,a]),s=function(e,n){return e[n]?e[n]+=1:e[n]=1,e}(s,i))):(0,o.logWarn)("Bidder is required for registering sync"):(0,o.logWarn)('User sync type "'.concat(n,'" not supported'))},n.bidderDone=c.add.bind(c),n.syncUsers=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;if(e)return setTimeout(h,Number(e));h()},n.triggerUserSyncs=function(){v.enableOverride&&n.syncUsers()},n.canBidderRegisterSync=function(e,n){return!v.filterSettings||!b(e,n)},n}(Object.defineProperties({config:a.vc.getConfig("userSync"),isAllowed:s.xD,regRule:s.oB},{browserSupportsCookies:{get:function(){return!(0,o.isSafariBrowser)()&&v.cookiesAreEnabled()}}}))},64358:function(e,n,t){t.r(n),t.d(n,{_each:function(){return ce},_map:function(){return de},_setEventEmitter:function(){return T},binarySearch:function(){return un},buildUrl:function(){return Xe},callBurl:function(){return pe},checkCookieSupport:function(){return qe},cleanObj:function(){return Ge},compareCodeAndSlot:function(){return Le},contains:function(){return se},createInvisibleIframe:function(){return $},createTrackPixelHtml:function(){return me},createTrackPixelIframeHtml:function(){return be},cyrb53Hash:function(){return tn},debugTurnedOn:function(){return Q},deepAccess:function(){return v.Z},deepClone:function(){return Se},deepEqual:function(){return en},deepSetValue:function(){return h.N},delayExecution:function(){return xe},flatten:function(){return we},formatQS:function(){return $e},generateUUID:function(){return R},getBidIdParameter:function(){return P},getBidRequest:function(){return Ee},getBidderCodes:function(){return Ce},getDNT:function(){return Fe},getDefinedParams:function(){return Ne},getParameterByName:function(){return Y},getPerformanceNow:function(){return De},getPrebidInternal:function(){return k},getUniqueIdentifierStr:function(){return U},getUserConfiguredParams:function(){return We},getValue:function(){return Ae},getWindowLocation:function(){return F},getWindowSelf:function(){return W},getWindowTop:function(){return M},groupBy:function(){return _e},hasConsoleLogger:function(){return J},hasDeviceAccess:function(){return Ze},inIframe:function(){return ke},insertElement:function(){return fe},insertHtmlIntoIframe:function(){return ve},insertUserSyncIframe:function(){return he},internal:function(){return O},isA:function(){return X},isAdUnitCodeMatchingSlot:function(){return ze},isApnGetTagDefined:function(){return Ie},isArray:function(){return te},isArrayOfNums:function(){return Je},isBoolean:function(){return oe},isEmpty:function(){return ae},isEmptyStr:function(){return ue},isFn:function(){return ee},isGptPubadsDefined:function(){return Te},isInteger:function(){return He},isNumber:function(){return re},isPlainObject:function(){return ie},isSafariBrowser:function(){return Be},isStr:function(){return ne},isValidMediaTypes:function(){return Me},logError:function(){return H},logInfo:function(){return z},logMessage:function(){return L},logWarn:function(){return K},memoize:function(){return on},mergeDeep:function(){return nn},parseGPTSingleSizeArray:function(){return x},parseGPTSingleSizeArrayToRtbSize:function(){return _},parseQS:function(){return Qe},parseQueryStringParameters:function(){return D},parseSizesInput:function(){return q},parseUrl:function(){return Ye},pick:function(){return Ve},prefixLog:function(){return G},replaceAuctionPrice:function(){return Ue},replaceClickThrough:function(){return Re},replaceMacros:function(){return je},safeJSONParse:function(){return rn},setScriptAttributes:function(){return an},shuffle:function(){return Oe},timestamp:function(){return Pe},transformAdServerTargetingObj:function(){return Z},triggerPixel:function(){return ge},uniques:function(){return ye},unsupportedBidderMessage:function(){return Ke},waitForElementToLoad:function(){return le}});var r,i=t(89062),o=t(4942),a=t(93324),u=t(71002),c=t(3193),s=t(77079),d=t.n(s),f=t(34614),l=t(5644),g=t(68792),p=t(78640),v=t(20265),h=t(96475),m=Object.prototype.toString,b=Boolean(window.console),y=Boolean(b&&window.console.log),w=Boolean(b&&window.console.info),E=Boolean(b&&window.console.warn),A=Boolean(b&&window.console.error),C=(0,p.R)();function T(e){r=e}function I(){null!=r&&r.apply(void 0,arguments)}var O={checkCookieSupport:qe,createTrackPixelIframeHtml:be,getWindowSelf:W,getWindowTop:M,getWindowLocation:F,insertUserSyncIframe:he,insertElement:fe,isFn:ee,triggerPixel:ge,logError:H,logWarn:K,logMessage:L,logInfo:z,parseQS:Qe,formatQS:$e,deepEqual:en},S={};function k(){return S}var B,j=(B=0,function(){return++B});function U(){return j()+Math.random().toString(16).substr(2)}function R(e){return e?(e^(window&&window.crypto&&window.crypto.getRandomValues?crypto.getRandomValues(new Uint8Array(1))[0]%16:16*Math.random())>>e/4).toString(16):([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,R)}function P(e,n){return(null==n?void 0:n[e])||""}function D(e){var n="";for(var t in e)e.hasOwnProperty(t)&&(n+=t+"="+encodeURIComponent(e[t])+"&");return n=n.replace(/&$/,"")}function Z(e){return e&&Object.getOwnPropertyNames(e).length>0?Object.keys(e).map((function(n){return"".concat(n,"=").concat(encodeURIComponent(e[n]))})).join("&"):""}function q(e){return"string"==typeof e?e.split(",").filter((function(e){return e.match(/^(\d)+x(\d)+$/i)})):"object"===(0,u.Z)(e)?2===e.length&&"number"==typeof e[0]&&"number"==typeof e[1]?[x(e)]:e.map(x):[]}function x(e){if(N(e))return e[0]+"x"+e[1]}function _(e){if(N(e))return{w:e[0],h:e[1]}}function N(e){return te(e)&&2===e.length&&!isNaN(e[0])&&!isNaN(e[1])}function M(){return window.top}function W(){return window.self}function F(){return window.location}function L(){Q()&&y&&console.log.apply(console,V(arguments,"MESSAGE:"))}function z(){Q()&&w&&console.info.apply(console,V(arguments,"INFO:"))}function K(){Q()&&E&&console.warn.apply(console,V(arguments,"WARNING:")),I(l.FP.AUCTION_DEBUG,{type:"WARNING",arguments:arguments})}function H(){Q()&&A&&console.error.apply(console,V(arguments,"ERROR:")),I(l.FP.AUCTION_DEBUG,{type:"ERROR",arguments:arguments})}function G(e){function n(n){return function(){for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];n.apply(void 0,[e].concat(r))}}return{logError:n(H),logWarn:n(K),logMessage:n(L),logInfo:n(z)}}function V(e,n){e=[].slice.call(e);var t=c.vc.getCurrentBidder();return n&&e.unshift(n),t&&e.unshift(r("#aaa")),e.unshift(r("#3b88c3")),e.unshift("%cPrebid"+(t?"%c".concat(t):"")),e;function r(e){return"display: inline-block; color: #fff; background: ".concat(e,"; padding: 1px 4px; border-radius: 3px;")}}function J(){return y}function Q(){return!!c.vc.getConfig("debug")}function $(){var e=document.createElement("iframe");return e.id=U(),e.height=0,e.width=0,e.border="0px",e.hspace="0",e.vspace="0",e.marginWidth="0",e.marginHeight="0",e.style.border="0",e.scrolling="no",e.frameBorder="0",e.src="about:blank",e.style.display="none",e.style.height="0px",e.style.width="0px",e.allowtransparency="true",e}function Y(e){return Qe(F().search)[e]||""}function X(e,n){return m.call(e)==="[object "+n+"]"}function ee(e){return X(e,"Function")}function ne(e){return X(e,"String")}var te=Array.isArray.bind(Array);function re(e){return X(e,"Number")}function ie(e){return X(e,"Object")}function oe(e){return X(e,"Boolean")}function ae(e){return!e||(te(e)||ne(e)?!(e.length>0):Object.keys(e).length<=0)}function ue(e){return ne(e)&&(!e||0===e.length)}function ce(e,n){var t=this;if(ee(null==e?void 0:e.forEach))return e.forEach(n,this);Object.entries(e||{}).forEach((function(e){var r=(0,a.Z)(e,2),i=r[0],o=r[1];return n.call(t,o,i)}))}function se(e,n){return ee(null==e?void 0:e.includes)&&e.includes(n)}function de(e,n){return ee(null==e?void 0:e.map)?e.map(n):Object.entries(e||{}).map((function(t){var r=(0,a.Z)(t,2),i=r[0],o=r[1];return n(o,i,e)}))}function fe(e,n,t,r){var i;n=n||document,i=t?n.getElementsByTagName(t):n.getElementsByTagName("head");try{if((i=i.length?i:n.getElementsByTagName("body")).length){i=i[0];var o=r?null:i.firstChild;return i.insertBefore(e,o)}}catch(e){}}function le(e,n){var t=null;return new g.Z((function(r){var i=function n(){e.removeEventListener("load",n),e.removeEventListener("error",n),null!=t&&window.clearTimeout(t),r()};e.addEventListener("load",i),e.addEventListener("error",i),null!=n&&(t=window.setTimeout(i,n))}))}function ge(e,n,t){var r=new Image;n&&O.isFn(n)&&le(r,t).then(n),r.src=e}function pe(e){var n=e.source,t=e.burl;n===l.os.YZ&&t&&O.triggerPixel(t)}function ve(e){if(e){var n,t=$();O.insertElement(t,document,"body"),(n=t.contentWindow.document).open(),n.write(e),n.close()}}function he(e,n,t){var r=O.createTrackPixelIframeHtml(e,!1,"allow-scripts allow-same-origin"),i=document.createElement("div");i.innerHTML=r;var o=i.firstChild;n&&O.isFn(n)&&le(o,t).then(n),O.insertElement(o,document,"html",!0)}function me(e){if(!e)return"";var n='<div style="position:absolute;left:0px;top:0px;visibility:hidden;">';return n+='<img src="'+encodeURI(e)+'"></div>'}function be(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return e?(n&&(e=encodeURI(e)),t&&(t='sandbox="'.concat(t,'"')),"<iframe ".concat(t,' id="').concat(U(),'"\n      frameborder="0"\n      allowtransparency="true"\n      marginheight="0" marginwidth="0"\n      width="0" hspace="0" vspace="0" height="0"\n      style="height:0px;width:0px;display:none;"\n      scrolling="no"\n      src="').concat(e,'">\n    </iframe>')):""}function ye(e,n,t){return t.indexOf(e)===n}function we(e,n){return e.concat(n)}function Ee(e,n){if(e)return n.flatMap((function(e){return e.bids})).find((function(n){return["bidId","adId","bid_id"].some((function(t){return n[t]===e}))}))}function Ae(e,n){return e[n]}function Ce(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C.adUnits;return e.map((function(e){return e.bids.map((function(e){return e.bidder})).reduce(we,[])})).reduce(we,[]).filter((function(e){return void 0!==e})).filter(ye)}function Te(){if(window.googletag&&ee(window.googletag.pubads)&&ee(window.googletag.pubads().getSlots))return!0}function Ie(){if(window.apntag&&ee(window.apntag.getTag))return!0}function Oe(e){for(var n=e.length;n>0;){var t=Math.floor(Math.random()*n),r=e[--n];e[n]=e[t],e[t]=r}return e}function Se(e){return d()(e)}function ke(){try{return O.getWindowSelf()!==O.getWindowTop()}catch(e){return!0}}function Be(){return/^((?!chrome|android|crios|fxios).)*safari/i.test(navigator.userAgent)}function je(e,n){if(e)return Object.entries(n).reduce((function(e,n){var t=(0,a.Z)(n,2),r=t[0],i=t[1];return e.replace(new RegExp("\\$\\{"+r+"\\}","g"),i||"")}),e)}function Ue(e,n){return je(e,{AUCTION_PRICE:n})}function Re(e,n){if(e&&n&&"string"==typeof n)return e.replace(/\${CLICKTHROUGH}/g,n)}function Pe(){return(new Date).getTime()}function De(){return window.performance&&window.performance.now&&window.performance.now()||0}function Ze(){return!1!==c.vc.getConfig("deviceAccess")}function qe(){if(window.navigator.cookieEnabled||document.cookie.length)return!0}function xe(e,n){if(n<1)throw new Error("numRequiredCalls must be a positive number. Got ".concat(n));var t=0;return function(){++t===n&&e.apply(this,arguments)}}function _e(e,n){return e.reduce((function(e,t){return(e[t[n]]=e[t[n]]||[]).push(t),e}),{})}function Ne(e,n){return n.filter((function(n){return e[n]})).reduce((function(n,t){return Object.assign(n,(0,o.Z)({},t,e[t]))}),{})}function Me(e){var n=["banner","native","video"];return!!Object.keys(e).every((function(e){return(0,f.q9)(n,e)}))&&(!e.video||!e.video.context||(0,f.q9)(["instream","outstream","adpod"],e.video.context))}function We(e,n,t){return e.filter((function(e){return e.code===n})).flatMap((function(e){return e.bids})).filter((function(e){return e.bidder===t})).map((function(e){return e.params||{}}))}function Fe(){return"1"===navigator.doNotTrack||"1"===window.doNotTrack||"1"===navigator.msDoNotTrack||"yes"===navigator.doNotTrack}var Le=function(e,n){return e.getAdUnitPath()===n||e.getSlotElementId()===n};function ze(e){return function(n){return Le(e,n)}}function Ke(e,n){var t=Object.keys(e.mediaTypes||{banner:"banner"}).join(", ");return"\n    ".concat(e.code," is a ").concat(t," ad unit\n    containing bidders that don't support ").concat(t,": ").concat(n,".\n    This bidder won't fetch demand.\n  ")}var He=Number.isInteger.bind(Number);function Ge(e){return Object.fromEntries(Object.entries(e).filter((function(e){var n=(0,a.Z)(e,2);n[0];return void 0!==n[1]})))}function Ve(e,n){return"object"!==(0,u.Z)(e)?{}:n.reduce((function(t,r,i){if("function"==typeof r)return t;var o=r,a=r.match(/^(.+?)\sas\s(.+?)$/i);a&&(r=a[1],o=a[2]);var u=e[r];return"function"==typeof n[i+1]&&(u=n[i+1](u,t)),void 0!==u&&(t[o]=u),t}),{})}function Je(e,n){return te(e)&&(!n||e.length===n)&&e.every((function(e){return He(e)}))}function Qe(e){return e?e.replace(/^\?/,"").split("&").reduce((function(e,n){var t=n.split("="),r=(0,a.Z)(t,2),i=r[0],o=r[1];return/\[\]$/.test(i)?(e[i=i.replace("[]","")]=e[i]||[],e[i].push(o)):e[i]=o||"",e}),{}):{}}function $e(e){return Object.keys(e).map((function(n){return Array.isArray(e[n])?e[n].map((function(e){return"".concat(n,"[]=").concat(e)})).join("&"):"".concat(n,"=").concat(e[n])})).join("&")}function Ye(e,n){var t=document.createElement("a");n&&"noDecodeWholeURL"in n&&n.noDecodeWholeURL?t.href=e:t.href=decodeURIComponent(e);var r=n&&"decodeSearchAsString"in n&&n.decodeSearchAsString;return{href:t.href,protocol:(t.protocol||"").replace(/:$/,""),hostname:t.hostname,port:+t.port,pathname:t.pathname.replace(/^(?!\/)/,"/"),search:r?t.search:O.parseQS(t.search||""),hash:(t.hash||"").replace(/^#/,""),host:t.host||window.location.host}}function Xe(e){return(e.protocol||"http")+"://"+(e.host||e.hostname+(e.port?":".concat(e.port):""))+(e.pathname||"")+(e.search?"?".concat(O.formatQS(e.search||"")):"")+(e.hash?"#".concat(e.hash):"")}function en(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=t.checkTypes,i=void 0!==r&&r;if(e===n)return!0;if("object"!==(0,u.Z)(e)||null===e||"object"!==(0,u.Z)(n)||null===n||i&&e.constructor!==n.constructor)return!1;if(Object.keys(e).length!==Object.keys(n).length)return!1;for(var o in e){if(!n.hasOwnProperty(o))return!1;if(!en(e[o],n[o],{checkTypes:i}))return!1}return!0}function nn(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];if(!t.length)return e;var a=t.shift();if(ie(e)&&ie(a)){var u=function(n){ie(a[n])?(e[n]||Object.assign(e,(0,o.Z)({},n,{})),nn(e[n],a[n])):te(a[n])?e[n]?te(e[n])&&a[n].forEach((function(t){for(var r=1,i=0;i<e[n].length;i++)if(en(e[n][i],t)){r=0;break}r&&e[n].push(t)})):Object.assign(e,(0,o.Z)({},n,(0,i.Z)(a[n]))):Object.assign(e,(0,o.Z)({},n,a[n]))};for(var c in a)u(c)}return nn.apply(void 0,[e].concat(t))}function tn(e){for(var n,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=function(e,n){if(ee(Math.imul))return Math.imul(e,n);var t=(4194303&e)*(n|=0);return 4290772992&e&&(t+=(4290772992&e)*n|0),0|t},i=3735928559^t,o=1103547991^t,a=0;a<e.length;a++)i=r(i^(n=e.charCodeAt(a)),2654435761),o=r(o^n,1597334677);return i=r(i^i>>>16,2246822507)^r(o^o>>>13,3266489909),(4294967296*(2097151&(o=r(o^o>>>16,2246822507)^r(i^i>>>13,3266489909)))+(i>>>0)).toString()}function rn(e){try{return JSON.parse(e)}catch(e){}}function on(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(e){return e},t=new Map,r=function(){var r=n.apply(this,arguments);return t.has(r)||t.set(r,e.apply(this,arguments)),t.get(r)};return r.clear=t.clear.bind(t),r}function an(e,n){Object.entries(n).forEach((function(n){var t=(0,a.Z)(n,2),r=t[0],i=t[1];return e.setAttribute(r,i)}))}function un(e,n){for(var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(e){return e},r=0,i=e.length&&e.length-1,o=t(n);i-r>1;){var a=r+Math.round((i-r)/2);o>t(e[a])?r=a:i=a}for(;e.length>r&&o>t(e[r]);)r++;return r}},36066:function(e,n,t){t.d(n,{O:function(){return a}});var r=t(78653),i=t(55975),o=t(64358);function a(e,n,t){var a,u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},c=u.index,s=void 0===c?r.K.index:c,d=u.bs,f=void 0===d?i.S:d;t=t||s.getBidRequest(n);var l=null==n?void 0:n.adapterCode,g=(null==n?void 0:n.bidderCode)||(null===(a=t)||void 0===a?void 0:a.bidder),p=f.get(null==n?void 0:n.adapterCode,"adjustAlternateBids"),v=f.getOwn(g,"bidCpmAdjustment")||f.get(p?l:g,"bidCpmAdjustment");if(v&&"function"==typeof v)try{return v(e,Object.assign({},n),t)}catch(e){(0,o.logError)("Error during bid adjustment",e)}return e}},99128:function(e,n,t){t.d(n,{A:function(){return E},Bf:function(){return h},V6:function(){return b},g3:function(){return w}});var r=t(93324),i=t(3193);function o(e,n){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,n){if(!e)return;if("string"==typeof e)return a(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return a(e,n)}(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,u=!0,c=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return u=e.done,e},e:function(e){c=!0,o=e},f:function(){try{u||null==t.return||t.return()}finally{if(c)throw o}}}}function a(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var u="performanceMetrics",c=window.performance&&window.performance.now?function(){return window.performance.now()}:function(){return Date.now()},s=new WeakMap;function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.now,t=void 0===n?c:n,r=e.mkNode,i=void 0===r?g:r,o=e.mkTimer,a=void 0===o?l:o,u=e.mkRenamer,d=void 0===u?function(e){return e}:u,f=e.nodes,p=void 0===f?s:f;return function(){return function e(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(e){return{forEach:function(n){n(e)}}};function o(e){return function(t){return n.dfWalk({visit:function(n,r){var i=r[e];if(i.hasOwnProperty(t))return i[t]}})}}r=d(r);var u=o("timestamps");function c(e,t){var i=r(e);n.dfWalk({follow:function(e,n){return n.propagate&&(!e||!e.stopPropagation)},visit:function(e,n){i.forEach((function(r){null==e?n.metrics[r]=t:(n.groups.hasOwnProperty(r)||(n.groups[r]=[]),n.groups[r].push(t))}))}})}function s(e){n.timestamps[e]=t()}function f(e,n){var r=u(e),i=null!=r?t()-r:null;return null!=n&&c(n,i),i}function l(e,n,t){var r=u(e),i=u(n),o=null!=r&&null!=i?i-r:null;return null!=t&&c(t,o),o}function g(e){return a(t,(function(n){return c(e,n)}))}function v(e,n){return g(e).stopAfter(n)()}function h(e,n,t){var r=g(e);return t(function(e){var n=r.stopBefore(e);return n.bail=e.bail&&r.stopBefore(e.bail),n.stopTiming=r,n.untimed=e,n}(n))}function m(){var e={};return n.dfWalk({visit:function(n,t){e=Object.assign({},!n||n.includeGroups?t.groups:null,t.metrics,e)}}),e}function b(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=t.propagate,a=void 0===o||o,u=t.stopPropagation,c=void 0!==u&&u,s=t.includeGroups,d=void 0!==s&&s;return e(i([[n,{propagate:a,stopPropagation:c,includeGroups:d}]]),r)}function y(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.propagate,i=void 0===r||r,o=t.stopPropagation,a=void 0!==o&&o,u=t.includeGroups,c=void 0!==u&&u,s=p.get(e);null!=s&&s.addParent(n,{propagate:i,stopPropagation:a,includeGroups:c})}function w(t){return e(n,t)}function E(){return e(n.newSibling(),r)}var A={startTiming:g,measureTime:v,measureHookTime:h,checkpoint:s,timeSince:f,timeBetween:l,setMetric:c,getMetrics:m,fork:b,join:y,newMetrics:E,renameWith:w,toJSON:function(){return m()}};return p.set(A,n),A}(i([]))}}function f(e,n,t){return function(){n&&n();try{return e.apply(this,arguments)}finally{t&&t()}}}function l(e,n){var t=e(),r=!1;function i(){r||(n(e()-t),r=!0)}return i.stopBefore=function(e){return f(e,i)},i.stopAfter=function(e){return f(e,null,i)},i}function g(e){return{metrics:{},timestamps:{},groups:{},addParent:function(n,t){e.push([n,t])},newSibling:function(){return g(e.slice())},dfWalk:function(){var n,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=t.visit,a=t.follow,u=void 0===a?function(){return!0}:a,c=t.visited,s=void 0===c?new Set:c,d=t.inEdge;if(!s.has(this)){if(s.add(this),null!=(n=i(d,this)))return n;var f,l=o(e);try{for(l.s();!(f=l.n()).done;){var g=(0,r.Z)(f.value,2),p=g[0],v=g[1];if(u(d,v)&&null!=(n=p.dfWalk({visit:i,follow:u,visited:s,inEdge:v})))return n}}catch(e){l.e(e)}finally{l.f()}}}}}var p=function(){var e=function(){},n=function(){return{}},t={forEach:e},r=function(){return null};r.stopBefore=function(e){return e},r.stopAfter=function(e){return e};var i=Object.defineProperties({dfWalk:e,newSibling:function(){return i},addParent:e},Object.fromEntries(["metrics","timestamps","groups"].map((function(e){return[e,{get:n}]}))));return d({now:function(){return 0},mkNode:function(){return i},mkRenamer:function(){return function(){return t}},mkTimer:function(){return r},nodes:{get:e,set:e}})()}(),v=!0;function h(e){return v&&e||p}i.vc.getConfig(u,(function(e){v=!!e[u]}));var m,b=(m=d(),function(){return v?m():p});function y(e,n){return function(t,r){return function(i){for(var o=arguments.length,a=new Array(o>1?o-1:0),u=1;u<o;u++)a[u-1]=arguments[u];var c=this;return h(n.apply(c,a)).measureHookTime(e+t,i,(function(e){return r.call.apply(r,[c,e].concat(a))}))}}}var w=y("requestBids.",(function(e){return e.metrics})),E=y("addBidResponse.",(function(e,n){return n.metrics}))},68792:function(e,n,t){t.d(n,{P:function(){return h},Z:function(){return p}});var r=t(93324),i=t(15671),o=t(43144),a=t(18916),u=t(42793);function c(e,n,t){!function(e,n){if(n.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e,n),n.set(e,t)}function s(e,n,t){return function(e,n){if(e!==n)throw new TypeError("Private static access of wrong provenance")}(e,n),t}var d=0,f=1,l=new WeakMap,g=new WeakMap,p=function(){function e(n){if((0,i.Z)(this,e),c(this,l,{writable:!0,value:void 0}),c(this,g,{writable:!0,value:void 0}),"function"!=typeof n)throw new Error("resolver not a function");var t=[],o=[],a=[d,f].map((function(e){return function(n){if(e===d&&"function"==typeof(null==n?void 0:n.then))n.then(p,v);else if(!t.length)for(t.push(e,n);o.length;)o.shift()()}})),s=(0,r.Z)(a,2),p=s[0],v=s[1];try{n(p,v)}catch(e){v(e)}(0,u.Z)(this,l,t),(0,u.Z)(this,g,o)}return(0,o.Z)(e,[{key:"then",value:function(e,n){var t=this,i=(0,a.Z)(this,l);return new this.constructor((function(o,u){var c=function(){var t=i[1],a=i[0]===d?[e,o]:[n,u],c=(0,r.Z)(a,2),s=c[0],f=c[1];if("function"==typeof s){try{t=s(t)}catch(e){return void u(e)}f=o}f(t)};i.length?c():(0,a.Z)(t,g).push(c)}))}},{key:"catch",value:function(e){return this.then(null,e)}},{key:"finally",value:function(e){var n,t=this;return this.then((function(t){return n=t,e()}),(function(r){return n=t.constructor.reject(r),e()})).then((function(){return n}))}}],[{key:"timeout",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return new e((function(e){0===n?e():setTimeout(e,n)}))}},{key:"race",value:function(n){var t=this;return new this((function(r,i){s(t,e,v).call(t,n,(function(e,n){return e?r(n):i(n)}))}))}},{key:"all",value:function(n){var t=this;return new this((function(r,i){var o=[];s(t,e,v).call(t,n,(function(e,n,t){return e?o[t]=n:i(n)}),(function(){return r(o)}))}))}},{key:"allSettled",value:function(n){var t=this;return new this((function(r){var i=[];s(t,e,v).call(t,n,(function(e,n,t){return i[t]=e?{status:"fulfilled",value:n}:{status:"rejected",reason:n}}),(function(){return r(i)}))}))}},{key:"resolve",value:function(e){return new this((function(n){return n(e)}))}},{key:"reject",value:function(e){return new this((function(n,t){return t(e)}))}}]),e}();function v(e,n,t){var r=this,i=e.length;function o(){n.apply(this,arguments),--i<=0&&t&&t()}0===e.length&&t?t():e.forEach((function(e,n){return r.resolve(e).then((function(e){return o(!0,e,n)}),(function(e){return o(!1,e,n)}))}))}function h(){var e,n,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.promiseFactory,i=void 0===r?function(e){return new p(e)}:r;function o(e){return function(n){return e(n)}}return{promise:i((function(t,r){e=t,n=r})),resolve:o(e),reject:o(n)}}},31136:function(e,n,t){function r(e,n){return e===n?0:e<n?-1:1}function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(e){return e};return function(n,t){return r(e(n),e(t))}}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r;return function(n,t){return-e(n,t)||0}}function a(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return function(e,t){for(var r=0,i=n;r<i.length;r++){var o=(0,i[r])(e,t);if(0!==o)return o}return 0}}function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r;return function(n,t){return e(t,n)<0?t:n}}function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r;return u(o(e))}t.d(n,{K$:function(){return l},LT:function(){return u},ZH:function(){return f},gW:function(){return c},xI:function(){return i}});var s=i((function(e){return e.cpm})),d=i((function(e){return e.responseTimestamp})),f=c(a(s,o(i((function(e){return e.timeToRespond}))))),l=c(a(s,o(d)));c(a(s,d))},10613:function(e,n,t){t.d(n,{Z:function(){return s}});var r=t(4942),i=t(93324),o=t(68792),a=t(64358);function u(e,n){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,n){if(!e)return;if("string"==typeof e)return c(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return c(e,n)}(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,u=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return a=e.done,e},e:function(e){u=!0,o=e},f:function(){try{a||null==t.return||t.return()}finally{if(u)throw o}}}}function c(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function s(){var e,n,t,c=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=c.startTime,d=void 0===s?a.timestamp:s,f=c.ttl,l=void 0===f?function(){return null}:f,g=c.monotonic,p=void 0!==g&&g,v=c.slack,h=void 0===v?5e3:v,m=new Map,b=[],y=p?function(e){return b.push(e)}:function(e){return b.splice((0,a.binarySearch)(b,e,(function(e){return e.expiry})),0,e)};function w(){if(t&&clearTimeout(t),b.length>0){var e=(0,a.timestamp)();n=Math.max(e,b[0].expiry+h),t=setTimeout((function(){for(var e=(0,a.timestamp)(),n=0,r=0,i=b;r<i.length;r++){var o=i[r];if(o.expiry>e)break;m.delete(o.item),n++}b.splice(0,n),t=null,w()}),n-e)}else t=null}function E(e){var r,a={},u=A;var c=Object.entries({start:d,delta:l}).map((function(c){var s,d=(0,i.Z)(c,2),f=d[0],l=d[1];return function(){var i=s={};o.Z.resolve(l(e)).then((function(e){i===s&&(a[f]=e,u===A&&null!=a.start&&null!=a.delta&&(r=a.start+a.delta,y(p),(null==t||n>r+h)&&w()))}))}})),s=(0,i.Z)(c,2),f=s[0],g=s[1],p={item:e,refresh:g,get expiry(){return r}};return f(),g(),p}var A={};return e={},(0,r.Z)(e,Symbol.iterator,(function(){return m.keys()})),(0,r.Z)(e,"add",(function(e){!m.has(e)&&m.set(e,E(e))})),(0,r.Z)(e,"clear",(function(){b.length=0,w(),m.clear(),A={}})),(0,r.Z)(e,"toArray",(function(){return Array.from(m.keys())})),(0,r.Z)(e,"refresh",(function(){b.length=0,w();var e,n=u(m.values());try{for(n.s();!(e=n.n()).done;){e.value.refresh()}}catch(e){n.e(e)}finally{n.f()}})),e}},90154:function(e,n,t){t.d(n,{Dn:function(){return f},LD:function(){return s},cx:function(){return d},gZ:function(){return c},hD:function(){return l}});var r=t(20265),i=t(64358),o=t(3193),a=t(92797),u=t(78653),c="outstream",s="instream";function d(e){var n,t=null==e||null===(n=e.mediaTypes)||void 0===n?void 0:n.video;null!=t&&null==t.plcmt&&(t.context===c||[2,3,4].includes(t.placement)?t.plcmt=4:t.context!==c&&[2,6].includes(t.playbackmethod)&&(t.plcmt=2))}function f(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.index,i=void 0===t?u.K.index:t,o=(0,r.Z)(i.getMediaTypes(e),"video"),a=o&&(0,r.Z)(o,"context"),c=o&&(0,r.Z)(o,"useCacheKey"),s=i.getAdUnit(e);return l(e,s,o,a,c)}var l=(0,a.z3)("sync",(function(e,n,t,r,a){return t&&(a||r!==c)?o.vc.getConfig("cache.url")||!e.vastXml||e.vastUrl?!(!e.vastUrl&&!e.vastXml):((0,i.logError)('\n        This bid contains only vastXml and will not work when a prebid cache url is not specified.\n        Try enabling prebid cache with pbjs.setConfig({ cache: {url: "..."} });\n      '),!1):!(r===c&&!a)||!!(e.renderer||n&&n.renderer||t.renderer)}),"checkVideoBidSetup")},79885:function(e,n,t){t.d(n,{h:function(){return s},z:function(){return d}});var r=t(48928),i=t(3193),o=t(78653);function a(e,n){var t=n?"<![CDATA[".concat(n,"]]>"):"";return'<VAST version="3.0">\n    <Ad>\n      <Wrapper>\n        <AdSystem>prebid.org wrapper</AdSystem>\n        <VASTAdTagURI><![CDATA['.concat(e,"]]></VASTAdTagURI>\n        <Impression>").concat(t,"</Impression>\n        <Creatives></Creatives>\n      </Wrapper>\n    </Ad>\n  </VAST>")}function u(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.index,r=void 0===t?o.K.index:t,u=e.vastXml?e.vastXml:a(e.vastUrl,e.vastImpUrl),c=r.getAuction(e),s=Number(e.ttl)+15,d={type:"xml",value:u,ttlseconds:s};return i.vc.getConfig("cache.vasttrack")&&(d.bidder=e.bidder,d.bidid=e.requestId,d.aid=e.auctionId),null!=c&&(d.timestamp=c.getAuctionStart()),"string"==typeof e.customCacheKey&&""!==e.customCacheKey&&(d.key=e.customCacheKey),d}function c(e){return{success:function(n){var t;try{t=JSON.parse(n).responses}catch(n){return void e(n,[])}t?e(null,t):e(new Error("The cache server didn't respond with a responses property."),[])},error:function(n,t){e(new Error("Error storing video ad in the cache: ".concat(n,": ").concat(JSON.stringify(t))),[])}}}function s(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:r.OI,o={puts:e.map(u)},a=t(i.vc.getConfig("cache.timeout"));a(i.vc.getConfig("cache.url"),c(n),JSON.stringify(o),{contentType:"text/plain",withCredentials:!0})}function d(e){return"".concat(i.vc.getConfig("cache.url"),"?uuid=").concat(e)}},20265:function(e,n,t){function r(e,n,t,r,i){for(n=n.split?n.split("."):n,r=0;r<n.length;r++)e=e?e[n[r]]:i;return e===i?t:e}t.d(n,{Z:function(){return r}})},81432:function(e){
  /*
  * @license MIT
  * Fun Hooks v0.9.10
  * (c) @snapwich
  */
  a.SYNC=1,a.ASYNC=2,a.QUEUE=4;var n=Object.freeze({useProxy:!0,ready:0}),t=new WeakMap,r="2,1,0"===[1].reduce((function(e,n,t){return[e,n,t]}),2).toString()?Array.prototype.reduce:function(e,n){var t,r=Object(this),i=r.length>>>0,o=0;if(n)t=n;else{for(;o<i&&!(o in r);)o++;t=r[o++]}for(;o<i;)o in r&&(t=e(t,r[o],o,r)),o++;return t};function i(e,n){return Array.prototype.slice.call(e,n)}var o=Object.assign||function(e){return r.call(i(arguments,1),(function(e,n){return n&&Object.keys(n).forEach((function(t){e[t]=n[t]})),e}),e)};function a(e){var u,c={},s=[];function d(e,n){return"function"==typeof e?p.call(null,"sync",e,n):"string"==typeof e&&"function"==typeof n?p.apply(null,arguments):"object"==typeof e?f.apply(null,arguments):void 0}function f(e,n,t){var r=!0;void 0===n&&(n=Object.getOwnPropertyNames(e),r=!1);var i={},o=["constructor"];do{(n=n.filter((function(n){return!("function"!=typeof e[n]||-1!==o.indexOf(n)||n.match(/^_/))}))).forEach((function(n){var r=n.split(":"),o=r[0],a=r[1]||"sync";if(!i[o]){var u=e[o];i[o]=e[o]=p(a,u,t?[t,o]:void 0)}})),e=Object.getPrototypeOf(e)}while(r&&e);return i}function l(e){var n=Array.isArray(e)?e:e.split(".");return r.call(n,(function(t,r,i){var o=t[r],a=!1;return o||(i===n.length-1?(u||s.push((function(){a||console.warn("fun-hooks: referenced '"+e+"' but it was never created")})),t[r]=g((function(e){t[r]=e,a=!0}))):t[r]={})}),c)}function g(e){var n=[],r=[],i=function(){},a={before:function(e,t){return c.call(this,n,"before",e,t)},after:function(e,n){return c.call(this,r,"after",e,n)},getHooks:function(e){var t=n.concat(r);"object"==typeof e&&(t=t.filter((function(n){return Object.keys(e).every((function(t){return n[t]===e[t]}))})));try{o(t,{remove:function(){return t.forEach((function(e){e.remove()})),this}})}catch(e){console.error("error adding `remove` to array, did you modify Array.prototype?")}return t},removeAll:function(){return this.getHooks().remove()}},u={install:function(t,o,a){this.type=t,i=a,a(n,r),e&&e(o)}};return t.set(a.after,u),a;function c(e,t,o,a){var u={hook:o,type:t,priority:a||10,remove:function(){var t=e.indexOf(u);-1!==t&&(e.splice(t,1),i(n,r))}};return e.push(u),e.sort((function(e,n){return n.priority-e.priority})),i(n,r),this}}function p(n,r,c){var d=r.after&&t.get(r.after);if(d){if(d.type!==n)throw"fun-hooks: recreated hookable with different type";return r}var f,p,v=c?l(c):g(),h={get:function(e,n){return v[n]||Reflect.get.apply(Reflect,arguments)}};return u||s.push(m),e.useProxy&&"function"==typeof Proxy&&Proxy.revocable?p=new Proxy(r,h):(p=function(){return h.apply?h.apply(r,this,i(arguments)):r.apply(this,arguments)},o(p,v)),t.get(p.after).install(n,p,(function(e,t){var r,o=[];e.length||t.length?(e.forEach(a),r=o.push(void 0)-1,t.forEach(a),f=function(e,t,a){var u,c=0,s="async"===n&&"function"==typeof a[a.length-1]&&a.pop();function d(e){"sync"===n?u=e:s&&s.apply(null,arguments)}function f(e){if(o[c]){var r=i(arguments);return f.bail=d,r.unshift(f),o[c++].apply(t,r)}"sync"===n?u=e:s&&s.apply(null,arguments)}return o[r]=function(){var r=i(arguments,1);"async"===n&&s&&(delete f.bail,r.push(f));var o=e.apply(t,r);"sync"===n&&f(o)},f.apply(null,a),u}):f=void 0;function a(e){o.push(e.hook)}m()})),p;function m(){!u&&("sync"!==n||e.ready&a.SYNC)&&("async"!==n||e.ready&a.ASYNC)?"sync"!==n&&e.ready&a.QUEUE?h.apply=function(){var e=arguments;s.push((function(){p.apply(e[1],e[2])}))}:h.apply=function(){throw"fun-hooks: hooked function not ready"}:h.apply=f}}return(e=o({},n,e)).ready?d.ready=function(){u=!0,function(e){for(var n;n=e.shift();)n()}(s)}:u=!0,d.get=l,d}e.exports=a},77079:function(e){e.exports=function e(n){var t=Array.isArray(n)?[]:{};for(var r in n){var i=n[r];t[r]=i&&"object"==typeof i?e(i):i}return t}},30907:function(e,n,t){function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}t.d(n,{Z:function(){return r}})},83878:function(e,n,t){function r(e){if(Array.isArray(e))return e}t.d(n,{Z:function(){return r}})},45057:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(30907);function i(e){if(Array.isArray(e))return(0,r.Z)(e)}},97326:function(e,n,t){function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}t.d(n,{Z:function(){return r}})},26983:function(e,n,t){function r(e,n){return n.get?n.get.call(e):n.value}t.d(n,{Z:function(){return r}})},86011:function(e,n,t){function r(e,n,t){if(n.set)n.set.call(e,t);else{if(!n.writable)throw new TypeError("attempted to set read only private field");n.value=t}}t.d(n,{Z:function(){return r}})},15671:function(e,n,t){function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}t.d(n,{Z:function(){return r}})},1519:function(e,n,t){function r(e,n,t){if(!n.has(e))throw new TypeError("attempted to "+t+" private field on non-instance");return n.get(e)}t.d(n,{Z:function(){return r}})},18916:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(26983),i=t(1519);function o(e,n){var t=(0,i.Z)(e,n,"get");return(0,r.Z)(e,t)}},42793:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(86011),i=t(1519);function o(e,n,t){var o=(0,i.Z)(e,n,"set");return(0,r.Z)(e,o,t),t}},43144:function(e,n,t){function r(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,n,t){return n&&r(e.prototype,n),t&&r(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}t.d(n,{Z:function(){return i}})},4942:function(e,n,t){function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}t.d(n,{Z:function(){return r}})},61120:function(e,n,t){function r(e){return r=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},r(e)}t.d(n,{Z:function(){return r}})},60136:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(89611);function i(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&(0,r.Z)(e,n)}},59199:function(e,n,t){function r(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}t.d(n,{Z:function(){return r}})},31902:function(e,n,t){function r(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,i,o=[],a=!0,u=!1;try{for(t=t.call(e);!(a=(r=t.next()).done)&&(o.push(r.value),!n||o.length!==n);a=!0);}catch(e){u=!0,i=e}finally{try{a||null==t.return||t.return()}finally{if(u)throw i}}return o}}t.d(n,{Z:function(){return r}})},25267:function(e,n,t){function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}t.d(n,{Z:function(){return r}})},42786:function(e,n,t){function r(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}t.d(n,{Z:function(){return r}})},82963:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(71002),i=t(97326);function o(e,n){if(n&&("object"===(0,r.Z)(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return(0,i.Z)(e)}},89611:function(e,n,t){function r(e,n){return r=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,n){return e.__proto__=n,e},r(e,n)}t.d(n,{Z:function(){return r}})},93324:function(e,n,t){t.d(n,{Z:function(){return u}});var r=t(83878),i=t(31902),o=t(40181),a=t(25267);function u(e,n){return(0,r.Z)(e)||(0,i.Z)(e,n)||(0,o.Z)(e,n)||(0,a.Z)()}},89062:function(e,n,t){t.d(n,{Z:function(){return u}});var r=t(45057),i=t(59199),o=t(40181),a=t(42786);function u(e){return(0,r.Z)(e)||(0,i.Z)(e)||(0,o.Z)(e)||(0,a.Z)()}},71002:function(e,n,t){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}t.d(n,{Z:function(){return r}})},40181:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(30907);function i(e,n){if(e){if("string"==typeof e)return(0,r.Z)(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?(0,r.Z)(e,n):void 0}}},96475:function(e,n,t){function r(e,n,t){n.split&&(n=n.split("."));for(var r,i,o=0,a=n.length,u=e;o<a&&"__proto__"!==(i=n[o++])&&"constructor"!==i&&"prototype"!==i;)u=u[i]=o===a?t:typeof(r=u[i])==typeof n?r:0*n[o]!=0||~(""+n[o]).indexOf(".")?{}:[]}t.d(n,{N:function(){return r}})},5644:function(e){e.exports=JSON.parse('{"k2":{"xn":"adserverTargeting","zF":"standard"},"f":"pbjs_debug","Q_":{"Q":1},"FP":{"AUCTION_INIT":"auctionInit","AUCTION_TIMEOUT":"auctionTimeout","AUCTION_END":"auctionEnd","BID_ADJUSTMENT":"bidAdjustment","BID_TIMEOUT":"bidTimeout","BID_REQUESTED":"bidRequested","BID_RESPONSE":"bidResponse","BID_REJECTED":"bidRejected","NO_BID":"noBid","SEAT_NON_BID":"seatNonBid","BID_WON":"bidWon","BIDDER_DONE":"bidderDone","BIDDER_ERROR":"bidderError","SET_TARGETING":"setTargeting","BEFORE_REQUEST_BIDS":"beforeRequestBids","BEFORE_BIDDER_HTTP":"beforeBidderHttp","REQUEST_BIDS":"requestBids","ADD_AD_UNITS":"addAdUnits","AD_RENDER_FAILED":"adRenderFailed","AD_RENDER_SUCCEEDED":"adRenderSucceeded","TCF2_ENFORCEMENT":"tcf2Enforcement","AUCTION_DEBUG":"auctionDebug","BID_VIEWABLE":"bidViewable","STALE_RENDER":"staleRender","BILLABLE_EVENT":"billableEvent","BID_ACCEPTED":"bidAccepted"},"q_":{"Sn":"preventWritingOnMainDocument","Ex":"noAd","XW":"exception","WT":"cannotFindAd","mb":"missingDocOrAdid"},"aI":{"bidWon":"adUnitCode"},"Ql":{"yE":"low","M2":"medium","lj":"high","B7":"auto","uN":"dense","qN":"custom"},"TD":{"BIDDER":"hb_bidder","AD_ID":"hb_adid","PRICE_BUCKET":"hb_pb","SIZE":"hb_size","DEAL":"hb_deal","SOURCE":"hb_source","FORMAT":"hb_format","UUID":"hb_uuid","CACHE_ID":"hb_cache_id","CACHE_HOST":"hb_cache_host","ADOMAIN":"hb_adomain","ACAT":"hb_acat","CRID":"hb_crid","DSP":"hb_dsp"},"kF":{"BIDDER":"hb_bidder","AD_ID":"hb_adid","PRICE_BUCKET":"hb_pb","SIZE":"hb_size","DEAL":"hb_deal","FORMAT":"hb_format","UUID":"hb_uuid","CACHE_HOST":"hb_cache_host"},"FY":{"title":"hb_native_title","body":"hb_native_body","body2":"hb_native_body2","privacyLink":"hb_native_privacy","privacyIcon":"hb_native_privicon","sponsoredBy":"hb_native_brand","image":"hb_native_image","icon":"hb_native_icon","clickUrl":"hb_native_linkurl","displayUrl":"hb_native_displayurl","cta":"hb_native_cta","rating":"hb_native_rating","address":"hb_native_address","downloads":"hb_native_downloads","likes":"hb_native_likes","phone":"hb_native_phone","price":"hb_native_price","salePrice":"hb_native_saleprice","rendererUrl":"hb_renderer_url","adTemplate":"hb_adTemplate"},"os":{"YZ":"s2s"},"UE":{"CK":"targetingSet","fe":"rendered","G9":"bidRejected"},"Gw":{"UI":"Bid has missing or invalid properties","Gp":"Invalid request ID","Dg":"Bidder code is not allowed by allowedAlternateBidderCodes / allowUnknownBidderCodes","pe":"Bid does not meet price floor","Xx":"Unable to convert currency"},"V1":{"body":"desc","body2":"desc2","sponsoredBy":"sponsored","cta":"ctatext","rating":"rating","address":"address","downloads":"downloads","likes":"likes","phone":"phone","price":"price","salePrice":"saleprice","displayUrl":"displayurl"},"s$":{"sponsored":1,"desc":2,"rating":3,"likes":4,"downloads":5,"price":6,"saleprice":7,"phone":8,"address":9,"desc2":10,"displayurl":11,"ctatext":12},"oF":{"ICON":1,"MAIN":3},"zA":["privacyIcon","clickUrl","sendTargetingKeys","adTemplate","rendererUrl","type"],"C_":{"Ot":"noData","Vs":"adUnit","cl":"setConfig","jR":"fetch","MR":"success","pn":"error","LX":"timeout"}}')}},t={};function r(e){var i=t[e];if(void 0!==i)return i.exports;var o=t[e]={exports:{}};return n[e].call(o.exports,o,o.exports,r),o.exports}r.m=n,e=[],r.O=function(n,t,i,o){if(!t){var a=1/0;for(d=0;d<e.length;d++){t=e[d][0],i=e[d][1],o=e[d][2];for(var u=!0,c=0;c<t.length;c++)(!1&o||a>=o)&&Object.keys(r.O).every((function(e){return r.O[e](t[c])}))?t.splice(c--,1):(u=!1,o<a&&(a=o));if(u){e.splice(d--,1);var s=i();void 0!==s&&(n=s)}}return n}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[t,i,o]},r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,{a:n}),n},r.d=function(e,n){for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){var e={25602:0};r.O.j=function(n){return 0===e[n]};var n=function(n,t){var i,o,a=t[0],u=t[1],c=t[2],s=0;if(a.some((function(n){return 0!==e[n]}))){for(i in u)r.o(u,i)&&(r.m[i]=u[i]);if(c)var d=c(r)}for(n&&n(t);s<a.length;s++)o=a[s],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(d)},t=self.pbjsChunk=self.pbjsChunk||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))}();var i=r.O(void 0,[38409],(function(){return r(20327)}));i=r.O(i)}();
  (self.pbjsChunk=self.pbjsChunk||[]).push([[38409],{17007:function(e,n,t){t.d(n,{Ex:function(){return u},G:function(){return o},VX:function(){return a},XW:function(){return c},ZR:function(){return d},u7:function(){return r}});var i=t(5644),r="Prebid Native",d="Prebid Request",a="Prebid Response",o="Prebid Event",u=(i.FP.AD_RENDER_SUCCEEDED,i.FP.AD_RENDER_FAILED,i.q_.Ex),c=i.q_.XW},29819:function(e,n,t){t.d(n,{t:function(){return l}});var i=t(13667),r=t(93324),d=t(17007),a={frameBorder:0,scrolling:"no",marginHeight:0,marginWidth:0,topMargin:0,leftMargin:0,allowTransparency:"true"};function o(e,n){var t=e.createElement("iframe");return n=Object.assign({},n,a),Object.entries(n).forEach((function(e){var n=(0,r.Z)(e,2),i=n[0],d=n[1];return t.setAttribute(i,d)})),e.body.appendChild(t),t}var u=t(78653),c=t(5644),s=t(64358),f=t(78640);function l(e,n,t){var r;function a(t){null!=t?(0,i.Pm)(Object.assign({id:n,bid:r},t)):(0,i.bL)({doc:e,bid:r,adId:n})}try{if(n&&e){var l=(r=u.K.findBidByAdId(n))&&u.K.index.getAdUnit(r),m=(0,f.R)().videoModule;if(null!=l&&l.video&&m)return void m.renderBid(l.video.divId,r);e!==document||(0,s.inIframe)()?(0,i.XD)((function(n){!function(e,n){var t=e.ad,i=e.adUrl,r=e.width,a=e.height,u=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;t||i?(i&&!t?o(u,{width:r,height:a,src:i}):(u.write(t),u.close()),n()):n({reason:d.Ex,message:"Missing ad markup or URL"})}(n,a,e),e.defaultView&&e.defaultView.frameElement&&(e.defaultView.frameElement.width=n.width,e.defaultView.frameElement.height=n.height);var t=document.createComment("Creative ".concat(r.creativeId," served by ").concat(r.bidder," Prebid.js Header Bidding"));(0,s.insertElement)(t,e,"html")}),{adId:n,options:{clickUrl:null==t?void 0:t.clickThrough},bidResponse:r}):a({reason:c.q_.Sn,message:"renderAd was prevented from writing to the main document."})}else a({reason:c.q_.mb,message:"missing ".concat(n?"doc":"adId")})}catch(e){a({reason:d.XW,message:e.message})}}}}]);
  (self.pbjsChunk=self.pbjsChunk||[]).push([[14861],{64563:function(e,n,t){t.d(n,{ZP:function(){return v}});var a=t(93324),r=t(71002),i=t(5644),l=t(48928),o=t(64358),s=t(52021),c={ajax:l.hj},u="endpoint",f="bundle",p=Object.values(i.FP).filter((function(e){return e!==i.FP.AUCTION_DEBUG})),d=100;function v(e){var n,t,l,v,g,y=e.url,b=e.analyticsType,h=e.global,T=e.handler,A=[],j=!1,E=(v=!1,g=function(){if(!v){v=!0;try{for(var e=0,n=0;A.length>0;){e++;var a=A.length;if(A.shift()(),A.length>=a?n++:n=0,n>=10)return(0,o.logError)("Detected probable infinite loop, discarding events",A),void(A.length=0)}(0,o.logMessage)("".concat(t," analytics: processed ").concat(e," events"))}finally{v=!1}}},function(){null!=l&&(clearTimeout(l),l=null),0===d?g():l=setTimeout(g,d)});return Object.defineProperties({track:function(e){var n=e.eventType,t=e.args;this.getAdapterType()===f&&window[h](T,n,t);this.getAdapterType()===u&&m.apply(void 0,arguments)},enqueue:O,enableAnalytics:k,disableAnalytics:function(){Object.entries(n||{}).forEach((function(e){var n=(0,a.Z)(e,2),t=n[0],r=n[1];s.off(t,r)})),this.enableAnalytics=this._oldEnable?this._oldEnable:k,j=!1},getAdapterType:function(){return b},getGlobal:function(){return h},getHandler:function(){return T},getUrl:function(){return y}},{enabled:{get:function(){return j}}});function m(e){var n=e.eventType,t=e.args,a=e.callback;c.ajax(y,a,JSON.stringify({eventType:n,args:t}))}function O(e){var n=this,t=e.eventType,a=e.args;A.push((function(){n.track({eventType:t,args:a})})),E()}function k(e){var a=this;t=null==e?void 0:e.provider;var l,c,u,f,d,v=this;if("object"!==(0,r.Z)(e)||"object"!==(0,r.Z)(e.options)||(void 0===e.options.sampling||Math.random()<parseFloat(e.options.sampling))){var g=(c=(l=e||{}).includeEvents,u=void 0===c?p:c,f=l.excludeEvents,d=void 0===f?[]:f,new Set(Object.values(i.FP).filter((function(e){return u.includes(e)})).filter((function(e){return!d.includes(e)}))));s.getEvents().forEach((function(e){if(e&&g.has(e.eventType)){var n=e.eventType,t=e.args;O.call(v,{eventType:n,args:t})}})),n=Object.fromEntries(Array.from(g).map((function(e){var n=function(n){return a.enqueue({eventType:e,args:n})};return s.on(e,n),[e,n]})))}else(0,o.logMessage)('Analytics adapter for "'.concat(h,'" disabled by sampling'));this._oldEnable=this.enableAnalytics,this.enableAnalytics=function(){return(0,o.logMessage)('Analytics adapter for "'.concat(h,'" already enabled, unnecessary call to `enableAnalytics`.'))},j=!0}}}}]);
  (self.pbjsChunk=self.pbjsChunk||[]).push([[17968],{52712:function(n,t,r){r.d(t,{b6:function(){return p},kX:function(){return f},m1:function(){return s},sM:function(){return u}});var e=r(4942),a=r(93324),c=r(89062),o=r(68792);function i(n,t){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(n);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.push.apply(r,e)}return r}function l(n){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){(0,e.Z)(n,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(r,t))}))}return n}var u=0,f=1,s=2;function p(n){var t=n.apiName,r=n.apiVersion,i=n.apiArgs,p=void 0===i?["command","callback","parameter","version"]:i,v=n.callbackArgs,b=void 0===v?["returnValue","success"]:v,d=n.mode,O=void 0===d?u:d,y=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window,g={},m="".concat(t,"Call"),j="".concat(t,"Return");function k(n){var t,r="string"==typeof n.data&&n.data.includes(j)?JSON.parse(n.data):n.data;if(null!=r&&null!==(t=r[j])&&void 0!==t&&t.callId){var e=r[j];g.hasOwnProperty(e.callId)&&g[e.callId].apply(g,(0,c.Z)(b.map((function(n){return e[n]}))))}}function h(){for(var n,r=y,e=!1;null!=r;){try{if("function"==typeof r[t]){n=r,e=!0;break}}catch(n){}try{if(r.frames["".concat(t,"Locator")]){n=r;break}}catch(n){}if(r===y.top)break;r=r.parent}return[n,e]}var w,P=h(),Z=(0,a.Z)(P,2),D=Z[0],E=Z[1];if(D)return E?w=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new o.Z((function(r,e){var o=D[t].apply(D,(0,c.Z)(I(l(l({},n),{},{callback:n.callback||O===s?S(n.callback,r,e):void 0})).map((function(n){var t=(0,a.Z)(n,2);t[0];return t[1]}))));(O===f||null==n.callback&&O===u)&&r(o)}))}:(y.addEventListener("message",k,!1),w=function(n){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return new o.Z((function(r,c){var o=Math.random().toString(),i=(0,e.Z)({},m,l(l({},Object.fromEntries(I(n).filter((function(n){return"callback"!==(0,a.Z)(n,1)[0]})))),{},{callId:o}));g[o]=S(null==n?void 0:n.callback,r,c,(t||null==(null==n?void 0:n.callback))&&function(){delete g[o]}),D.postMessage(i,"*"),O===f&&r()}))}),Object.assign(w,{isDirect:E,close:function(){!E&&y.removeEventListener("message",k)}});function I(n){return n=Object.assign({version:r},n),p.map((function(t){return[t,n[t]]}))}function S(n,t,r,e){var a="function"==typeof n;return function(c,o){if(e&&e(),O!==f){var i=null==o||o?t:r;i(a?void 0:c)}a&&n.apply(this,arguments)}}}}}]);
  (self.pbjsChunk=self.pbjsChunk||[]).push([[35051],{77337:function(n,t,e){e.d(t,{Ji:function(){return O}});var r,i=e(93324),o=e(4942),u=e(50571),a=e(74947),c=e(34516),s=e(64358);function f(n){return null!=n&&0!==n}function l(n){return["MspaServiceProviderMode","Gpc"].some((function(t){return 1===n[t]}))||2===n.PersonalDataConsents||1===n.KnownChildSensitiveDataConsents[0]||f(n.KnownChildSensitiveDataConsents[1])||0===n.MspaCoveredTransaction}function v(n,t){return["SensitiveDataProcessingOptOutNotice","SensitiveDataLimitUseNotice"].some((function(e){return n[e]===t}))}function d(n){return l(n)||["Sale","Sharing","TargetedAdvertising"].some((function(t){var e=n["".concat(t,"OptOut")],r=n["".concat(t,"OptOutNotice")];return 1===e||2===r||2===e&&0===r}))||2===n.SharingNotice||2===n.SharingOptOut&&0===n.SharingNotice}var g,h,S,p=(g=[6,7,9,10,12].map((function(n){return--n})),h=Array.from(Array(12).keys()).filter((function(n){return 7!==n})),S=h.filter((function(n){return!g.includes(n)})),function(n){return d(n)||v(n,2)||g.some((function(t){return f(n.SensitiveDataProcessing[t])}))||S.some((function(t){return 1===n.SensitiveDataProcessing[t]}))||v(n,0)&&h.some((function(t){return 2===n.SensitiveDataProcessing[t]}))});var D=(r={},(0,o.Z)(r,a.K$,d),(0,o.Z)(r,a.EL,d),(0,o.Z)(r,a.S5,p),(0,o.Z)(r,a.g0,(function(n){var t=n.SensitiveDataProcessing[7];return 1===t||l(n)||v(n,2)||v(n,0)&&2===t})),r);function m(n,t,e){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(){var n;return null===(n=c.TJ.getConsentData())||void 0===n?void 0:n.applicableSections};return function(){if(r().some((function(t){return n.includes(t)}))){var i=t();if(null==i)return{allow:!1,reason:"consent data not available"};if(e(i))return{allow:!1}}}}function C(n){return null==n?n:n.reduceRight((function(n,t){return Object.assign(t,n)}),{})}function O(n,t){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(n){return n},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:D,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:u.oB,a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:function(){return c.TJ.getConsentData()},f=[],l="MSPA (GPP '".concat(n,"' for section").concat(t.length>1?"s":""," ").concat(t.join(", "),")");return(0,s.logInfo)("Enabling activity controls for ".concat(l)),Object.entries(r).forEach((function(r){var u=(0,i.Z)(r,2),c=u[0],s=u[1];f.push(o(c,l,m(t,(function(){var t,r;return e(C(null===(t=a())||void 0===t||null===(r=t.parsedSections)||void 0===r?void 0:r[n]))}),s,(function(){var n;return(null===(n=a())||void 0===n?void 0:n.applicableSections)||[]}))))})),function(){return f.forEach((function(n){return n()}))}}}}]);
  (self.pbjsChunk=self.pbjsChunk||[]).push([[85279],{24980:function(e,r,t){t.d(r,{T:function(){return O},x:function(){return g}});var n=t(93324),i=new WeakMap;function o(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!i.has(e)){var t=Object.entries(e);t.sort((function(e,r){return(e=e[1].priority||0)===(r=r[1].priority||0)?0:e>r?-1:1})),i.set(e,t.map((function(e){var r=(0,n.Z)(e,2);return[r[0],r[1].fn]})))}var o=i.get(e).filter((function(e){var t=(0,n.Z)(e,1)[0];return!r.hasOwnProperty(t)||r[t]})).map((function(e){var t=(0,n.Z)(e,2),i=t[0],o=t[1];return r.hasOwnProperty(i)?r[i].bind(this,o):o}));return function(){var e=this,r=Array.from(arguments);o.forEach((function(t){t.apply(e,r)}))}}var a=t(64358),s=t(4942),d=t(20265),p=t(24679);function u(e){return(e=(0,a.parseSizesInput)(e)).map((function(e){var r=e.split("x"),t=(0,n.Z)(r,2),i=t[0],o=t[1];return{w:parseInt(i,10),h:parseInt(o,10)}}))}var f=new Set(["pos","placement","plcmt","api","mimes","protocols","playbackmethod","minduration","maxduration","w","h","startdelay","placement","linearity","skip","skipmin","skipafter","minbitrate","maxbitrate","delivery","playbackend"]),c={instream:1};var m=t(15840);var l,v=t(26372),b=t(83790),y=(l={},(0,s.Z)(l,v.Z,{fpd:{priority:99,fn:function(e,r){(0,a.mergeDeep)(e,r.ortb2)}},onlyOneClient:{priority:-99,fn:(0,b.A_)("ORTB request")},props:{fn:function(e,r){Object.assign(e,{id:e.id||(0,a.generateUUID)(),test:e.test||0});var t=parseInt(r.timeout,10);isNaN(t)||(e.tmax=t)}}}),(0,s.Z)(l,v.DZ,{fpd:{priority:99,fn:function(e,r){(0,a.mergeDeep)(e,r.ortb2Imp)}},id:{fn:function(e,r){e.id=r.bidId}},banner:{fn:function(e,r,t){if(!t.mediaType||t.mediaType===p.Mk){var n=(0,d.Z)(r,"mediaTypes.banner");if(n){var i={topframe:!0===(0,a.inIframe)()?0:1};n.sizes&&(i.format=u(n.sizes)),n.hasOwnProperty("pos")&&(i.pos=n.pos),e.banner=(0,a.mergeDeep)(i,e.banner)}}}},pbadslot:{fn:function(e){var r,t,n,i,o=null===(r=e.ext)||void 0===r||null===(t=r.data)||void 0===t?void 0:t.pbadslot;o&&"string"==typeof o||(null===(n=e.ext)||void 0===n||(null===(i=n.data)||void 0===i||delete i.pbadslot))}}}),(0,s.Z)(l,v.Px,{mediaType:{priority:99,fn:m.R},banner:{fn:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.createPixel,t=void 0===r?function(e){return(0,a.createTrackPixelHtml)(decodeURIComponent(e))}:r;return function(e,r){e.mediaType===p.Mk&&(r.adm&&r.nurl?(e.ad=r.adm,e.ad+=t(r.nurl)):r.adm?e.ad=r.adm:r.nurl&&(e.adUrl=r.nurl))}}()},props:{fn:function(e,r,t){var i;Object.entries({requestId:null===(i=t.bidRequest)||void 0===i?void 0:i.bidId,seatBidId:r.id,cpm:r.price,currency:t.ortbResponse.cur||t.currency,width:r.w,height:r.h,dealId:r.dealid,creative_id:r.crid,creativeId:r.crid,burl:r.burl,ttl:r.exp||t.ttl,netRevenue:t.netRevenue}).filter((function(e){var r=(0,n.Z)(e,2);r[0];return void 0!==r[1]})).forEach((function(r){var t=(0,n.Z)(r,2),i=t[0],o=t[1];return e[i]=o})),e.meta||(e.meta={}),r.adomain&&(e.meta.advertiserDomains=r.adomain)}}}),l);y[v.DZ].native={fn:function(e,r,t){if(!t.mediaType||t.mediaType===p.B5){var n,i=r.nativeOrtbRequest;i&&(null!==(n=(i=Object.assign({},t.nativeRequest,i)).assets)&&void 0!==n&&n.length?e.native=(0,a.mergeDeep)({},{request:JSON.stringify(i),ver:i.ver},e.native):(0,a.logWarn)("mediaTypes.native is set, but no assets were specified. Native request skipped.",r))}}},y[v.Px].native={fn:function(e,r){if(e.mediaType===p.B5){var t;if(t="string"==typeof r.adm?JSON.parse(r.adm):r.adm,!(0,a.isPlainObject)(t)||!Array.isArray(t.assets))throw new Error("ORTB native response contained no assets");e.native={ortb:t}}}},y[v.DZ].video={fn:function(e,r,t){if(!t.mediaType||t.mediaType===p.pX){var i=(0,d.Z)(r,"mediaTypes.video");if(!(0,a.isEmpty)(i)){var o=Object.fromEntries(Object.entries(i).filter((function(e){var r=(0,n.Z)(e,1)[0];return f.has(r)})));if(i.playerSize){var s=u(i.playerSize);s.length>1&&(0,a.logWarn)("video request specifies more than one playerSize; all but the first will be ignored"),Object.assign(o,s[0])}var m=c[i.context];null!=m&&(o.placement=m),e.video=(0,a.mergeDeep)(o,e.video)}}}},y[v.Px].video={fn:function(e,r,t){if(e.mediaType===p.pX){if((0,d.Z)(t.imp,"video.w")&&(0,d.Z)(t.imp,"video.h")){var n=[t.imp.video.w,t.imp.video.h];e.playerWidth=n[0],e.playerHeight=n[1]}r.adm&&(e.vastXml=r.adm),r.nurl&&(e.vastUrl=r.nurl)}}};var h=t(61283);function g(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.context,t=void 0===r?{}:r,n=e.processors,i=void 0===n?O:n,s=e.overrides,d=void 0===s?{}:s,p=e.imp,u=e.request,f=e.bidResponse,c=e.response,m=new WeakMap;function l(e,r,t,n){var a;return function(){return null==a&&(a=function(){var a=t.bind(this,o(i()[e]||{},d[e]||{}));return r&&(a=r.bind(this,a)),function(){try{return a.apply(this,arguments)}catch(e){n.call.apply(n,[this,e].concat(Array.prototype.slice.call(arguments)))}}}()),a.apply(this,arguments)}}var b=l(v.DZ,p,(function(e,r,t){var n={};return e(n,r,t),n}),(function(e,r,t){(0,a.logError)("Error while converting bidRequest to ORTB imp; request skipped.",{error:e,bidRequest:r,context:t})})),y=l(v.Z,u,(function(e,r,t,n){var i={imp:r};return e(i,t,n),i}),(function(e,r,t,n){throw(0,a.logError)("Error while converting to ORTB request",{error:e,imps:r,bidderRequest:t,context:n}),e})),h=l(v.Px,f,(function(e,r,t){var n={};return e(n,r,t),n}),(function(e,r,t){(0,a.logError)("Error while converting ORTB seatbid.bid to bidResponse; bid skipped.",{error:e,bid:r,context:t})})),g=l(v.YC,c,(function(e,r,t,n){var i={bids:r};return e(i,t,n),i}),(function(e,r,t,n){throw(0,a.logError)("Error while converting from ORTB response",{error:e,bidResponses:r,ortbResponse:t,context:n}),e}));return{toORTB:function(e){var r=e.bidderRequest,n=e.bidRequests,i=e.context,o=void 0===i?{}:i;n=n||r.bids;var s={req:Object.assign({bidRequests:n},t,o),imp:{}};s.req.impContext=s.imp;var d=n.map((function(e){var n=Object.assign({bidderRequest:r,reqContext:s.req},t,o),i=b(e,n);if(null!=i){if(i.hasOwnProperty("id"))return Object.assign(n,{bidRequest:e,imp:i}),s.imp[i.id]=n,i;(0,a.logError)("Converted ORTB imp does not specify an id, ignoring bid request",e,i)}})).filter(Boolean),p=y(d,r,s.req);return s.req.bidderRequest=r,null!=p&&m.set(p,s),p},fromORTB:function(e){var r=e.request,t=e.response,n=m.get(r);if(null==n)throw new Error("ortbRequest passed to `fromORTB` must be the same object returned by `toORTB`");function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.assign(e,{ortbRequest:r},t,e)}var o=Object.fromEntries((r.imp||[]).map((function(e){return[e.id,e]}))),s=(t.seatbid||[]).flatMap((function(e){return(e.bid||[]).map((function(r){if(o.hasOwnProperty(r.impid)&&n.imp.hasOwnProperty(r.impid))return h(r,i(n.imp[r.impid],{imp:o[r.impid],seatbid:e,ortbResponse:t}));(0,a.logError)("ORTB response seatbid[].bid[].impid does not match any imp in request; ignoring bid",r)}))})).filter(Boolean);return g(s,t,i(n.req))}}}var O=(0,a.memoize)((function(){return(0,h.F)(y,(0,v.fP)(v.TP))}))},61283:function(e,r,t){t.d(r,{F:function(){return i}});var n=t(26372);function i(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];var o=r.shift(),a=r.length>1?i.apply(void 0,r):r[0];return Object.fromEntries(n.gm.map((function(e){return[e,Object.assign({},o[e],a[e])]})))}},15840:function(e,r,t){t.d(r,{R:function(){return o},e:function(){return i}});var n=t(24679),i={1:n.Mk,2:n.pX,4:n.B5};function o(e,r,t){if(!e.mediaType){var n=t.mediaType;if(!n&&!i.hasOwnProperty(r.mtype))throw new Error("Cannot determine mediaType for response");e.mediaType=n||i[r.mtype]}}}}]);
  (self.pbjsChunk=self.pbjsChunk||[]).push([[33402],{85370:function(n,e,u){u.d(e,{u:function(){return t}});var r=u(64358);function t(n,e){return Object.keys(n).forEach((function(u){var t,s;e[u]&&((0,r.isFn)(n[u])?e[u]=n[u](e[u]):e[u]=(t=n[u],s=e[u],"string"===t?s&&s.toString():"number"===t?Number(s):s),isNaN(e[u])&&delete e.key)})),e}}}]);
  (self.pbjsChunk=self.pbjsChunk||[]).push([[93157],{20676:function(n,r,t){t.d(r,{c:function(){return f}});var e=t(89062),u=t(83790),c=t(20265),o=["user.keywords"].concat(u.Iq.flatMap((function(n){return["keywords","content.keywords"].map((function(r){return"".concat(n,".").concat(r)}))})));function a(){for(var n=new Set,r=arguments.length,t=new Array(r),e=0;e<r;e++)t[e]=arguments[e];return t.filter((function(n){return n})).flatMap((function(n){return Array.isArray(n)?n:n.split(",")})).map((function(n){return n.replace(/^\s*/,"").replace(/\s*$/,"")})).filter((function(n){return n})).forEach((function(r){return n.add(r)})),Array.from(n.keys())}function f(n){for(var r=arguments.length,t=new Array(r>1?r-1:0),u=1;u<r;u++)t[u-1]=arguments[u];return a.apply(void 0,(0,e.Z)(o.map((function(r){return(0,c.Z)(n,r)}))).concat(t))}}}]);
  (self.pbjsChunk=self.pbjsChunk||[]).push([[70951],{99933:function(e,i,r){r.d(i,{X:function(){return x}});var t=r(61283),d=r(4942),n=r(93324),a=r(26372),o=r(20265),s=r(64358),c=r(11021),b=r(86104),u=r(96475);var p=r(39702);var v=r(3193),f=r(78640);var l,g=r(24679);var m=(l={},(0,d.Z)(l,a.Z,{extPrebid:{fn:function(e,i){var r;(0,u.N)(e,"ext.prebid",(0,s.mergeDeep)({auctiontimestamp:i.auctionStart,targeting:{includewinners:!0,includebidderkeys:!1}},null===(r=e.ext)||void 0===r?void 0:r.prebid)),v.vc.getConfig("debug")&&(e.ext.prebid.debug=!0)}},extPrebidChannel:{fn:function(e){var i,r;(0,u.N)(e,"ext.prebid.channel",Object.assign({name:"pbjs",version:(0,f.R)().version},null===(i=e.ext)||void 0===i||null===(r=i.prebid)||void 0===r?void 0:r.channel))}},extPrebidAliases:{fn:function(e,i,r){var t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},d=t.am,n=void 0===d?b.ZP:d;if(n.aliasRegistry[i.bidderCode]){var a=n.bidderRegistry[i.bidderCode];a&&a.getSpec().skipPbsAliasing||(0,u.N)(e,"ext.prebid.aliases.".concat(i.bidderCode),n.aliasRegistry[i.bidderCode])}}}}),(0,d.Z)(l,a.DZ,{params:{fn:p.j},adUnitCode:{fn:function(e,i){var r=i.adUnitCode;r&&(0,u.N)(e,"ext.prebid.adunitcode",r)}}}),(0,d.Z)(l,a.Px,{mediaType:{fn:c.P,priority:99},videoCache:{fn:function(e,i){if(e.mediaType===g.pX){var r=(0,o.Z)(i,"ext.prebid.cache.vastXml")||{},t=r.cacheId,d=r.url;if(!t||!d){var n=(0,o.Z)(i,"ext.prebid.targeting")||{},a=n.hb_uuid,s=n.hb_cache_host,c=n.hb_cache_path;a&&s&&c&&(t=a,d="https://".concat(s).concat(c,"?uuid=").concat(a))}t&&d&&Object.assign(e,{videoCacheKey:t,vastUrl:d})}},priority:-10},bidderCode:{fn:function(e,i,r){var t;e.bidderCode=r.seatbid.seat,e.adapterCode=(0,o.Z)(i,"ext.prebid.meta.adaptercode")||(null===(t=r.bidRequest)||void 0===t?void 0:t.bidder)||e.bidderCode}},pbsBidId:{fn:function(e,i){var r=(0,o.Z)(i,"ext.prebid.bidid");(0,s.isStr)(r)&&(e.pbsBidId=r)}},adserverTargeting:{fn:function(e,i){var r=(0,o.Z)(i,"ext.prebid.targeting");(0,s.isPlainObject)(r)&&(e.adserverTargeting=r)}},extPrebidMeta:{fn:function(e,i){e.meta=(0,s.mergeDeep)({},(0,o.Z)(i,"ext.prebid.meta"),e.meta)}},pbsWurl:{fn:function(e,i){var r=(0,o.Z)(i,"ext.prebid.events.win");(0,s.isStr)(r)&&(e.pbsWurl=r)}}}),(0,d.Z)(l,a.YC,{serverSideStats:{fn:function(e,i,r){Object.entries({errors:"serverErrors",responsetimemillis:"serverResponseTimeMs"}).forEach((function(e){var t=(0,n.Z)(e,2),d=t[0],a=t[1],s=(0,o.Z)(i,"ext.".concat(d,".").concat(r.bidderRequest.bidderCode));s&&(r.bidderRequest[a]=s,r.bidRequests.forEach((function(e){return e[a]=s})))}))}}}),l),h=r(24980),x=(0,s.memoize)((function(){return(0,t.F)((0,h.T)(),m,(0,a.fP)(a.md))}))},11021:function(e,i,r){r.d(i,{E:function(){return o},P:function(){return s}});var t,d=r(4942),n=r(24679),a=r(15840),o=(t={},(0,d.Z)(t,n.Mk,"banner"),(0,d.Z)(t,n.B5,"native"),(0,d.Z)(t,n.pX,"video"),t);function s(e,i,r){var t,d,s=r.mediaType;s||(s=a.e.hasOwnProperty(i.mtype)?a.e[i.mtype]:null===(t=i.ext)||void 0===t||null===(d=t.prebid)||void 0===d?void 0:d.type,o.hasOwnProperty(s)||(s=n.Mk));e.mediaType=s}},39702:function(e,i,r){r.d(i,{j:function(){return a}});var t=r(78653),d=r(86104),n=r(96475);function a(e,i,r){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=a.adUnit,s=a.bidderRequests,c=a.index,b=void 0===c?t.K.index:c,u=a.bidderRegistry,p=void 0===u?d.ZP.bidderRegistry:u,v=i.params,f=p[i.bidder];f&&f.getSpec().transformBidParams&&(o=o||b.getAdUnit(i),s=s||[r.bidderRequest],v=f.getSpec().transformBidParams(v,!0,o,s)),v&&(0,n.N)(e,"ext.prebid.bidder.".concat(i.bidder),v)}}}]);
  (self.pbjsChunk=self.pbjsChunk||[]).push([[62944],{45813:function(e,t,n){var i=n(78640),o=n(64358),r=n(64563),a=n(5644),s=n(86104),l=n(48928),c=n(15164),d=n(9633),u="atsAnalytics",m=(0,c.df)({moduleType:d._U,moduleName:u}),p=[],f=[],g=[{test:/googlebot/i,name:"Googlebot"},{test:/opera/i,name:"Opera"},{test:/opr\/|opios/i,name:"Opera"},{test:/SamsungBrowser/i,name:"Samsung Internet for Android"},{test:/Whale/i,name:"NAVER Whale Browser"},{test:/MZBrowser/i,name:"MZ Browser"},{test:/focus/i,name:"Focus"},{test:/swing/i,name:"Swing"},{test:/coast/i,name:"Opera Coast"},{test:/opt\/\d+(?:.?_?\d+)+/i,name:"Opera Touch"},{test:/yabrowser/i,name:"Yandex Browser"},{test:/ucbrowser/i,name:"UC Browser"},{test:/Maxthon|mxios/i,name:"Maxthon"},{test:/epiphany/i,name:"Epiphany"},{test:/puffin/i,name:"Puffin"},{test:/sleipnir/i,name:"Sleipnir"},{test:/k-meleon/i,name:"K-Meleon"},{test:/micromessenger/i,name:"WeChat"},{test:/qqbrowser/i,name:/qqbrowserlite/i.test(window.navigator.userAgent)?"QQ Browser Lite":"QQ Browser"},{test:/msie|trident/i,name:"Internet Explorer"},{test:/\sedg\//i,name:"Microsoft Edge"},{test:/edg([ea]|ios)/i,name:"Microsoft Edge"},{test:/vivaldi/i,name:"Vivaldi"},{test:/seamonkey/i,name:"SeaMonkey"},{test:/sailfish/i,name:"Sailfish"},{test:/silk/i,name:"Amazon Silk"},{test:/phantom/i,name:"PhantomJS"},{test:/slimerjs/i,name:"SlimerJS"},{test:/blackberry|\bbb\d+/i,name:"BlackBerry"},{test:/(web|hpw)[o0]s/i,name:"WebOS Browser"},{test:/bada/i,name:"Bada"},{test:/tizen/i,name:"Tizen"},{test:/qupzilla/i,name:"QupZilla"},{test:/firefox|iceweasel|fxios/i,name:"Firefox"},{test:/electron/i,name:"Electron"},{test:/MiuiBrowser/i,name:"Miui"},{test:/chromium/i,name:"Chromium"},{test:/chrome|crios|crmo/i,name:"Chrome"},{test:/GSA/i,name:"Google Search"},{test:/android/i,name:"Android Browser"},{test:/playstation 4/i,name:"PlayStation 4"},{test:/safari|applewebkit/i,name:"Safari"}],h=["Safari","Chrome","Firefox","Microsoft Edge"];function A(){var e=b.getUserAgent();try{var t=g.filter((function(t){return t.test.test(e)})),n=t&&t.length?t[0].name:"";return h.indexOf(n)>=0?n:"Unknown"}catch(e){(0,o.logError)("ATS Analytics - Error while checking user browser!",e)}}function S(e){try{var t={Data:e},n=JSON.stringify(t);(0,o.logInfo)("ATS Analytics - tried to send analytics data!"),(0,l.hj)("https://analytics.rlcdn.com",(function(){(0,o.logInfo)("ATS Analytics - events sent successfully!")}),n,{method:"POST",contentType:"application/json"})}catch(e){(0,o.logError)("ATS Analytics - request encounter an error: ",e)}}var b=Object.assign((0,r.ZP)({analyticsType:"endpoint"}),{track:function(e){var t=e.eventType,n=e.args;void 0!==n&&b.callHandler(t,n)}});b.originEnableAnalytics=b.enableAnalytics,b.shouldFireRequest=function(e){if(0!==e){var t=100===Math.floor(100*Math.random()+1);return(0,o.logInfo)("ATS Analytics - Should Fire Request: ",t),t}return(0,o.logInfo)("ATS Analytics - Should Fire Request: ",!1),!1},b.getUserAgent=function(){return window.navigator.userAgent},b.setSamplingCookie=function(e){var t=new Date;t.setTime(t.getTime()+864e5),m.setCookie("_lr_sampling_rate",e,t.toUTCString())},b.enableAnalytics=function(e){if(e.options.pid){b.context={events:[],pid:e.options.pid,bidWonTimeout:e.options.bidWonTimeout};var t=e.options;(0,o.logInfo)("ATS Analytics - adapter enabled! "),b.originEnableAnalytics(t)}else(0,o.logError)("ATS Analytics - Publisher ID (pid) option is not defined. Analytics won't work")},b.callHandler=function(e,t){if(e===a.FP.BID_REQUESTED?p=p.concat(function(e){var t="true"===m.getCookie("_lr_env_src_ats");return e.bids.map((function(n){return{envelope_source:t,has_envelope:!!n.userId&&!!n.userId.idl_env,bidder:n.bidder,bid_id:n.bidId,auction_id:e.auctionId,user_browser:A(),user_platform:navigator.platform,auction_start:new Date(e.auctionStart).toJSON(),domain:window.location.hostname,pid:b.context.pid,adapter_version:3,bid_won:!1}}))}(t)):e===a.FP.BID_RESPONSE&&f.push(function(e){return{bid_id:e.requestId,response_time_stamp:new Date(e.responseTimestamp).toJSON(),currency:e.currency,cpm:e.cpm,net_revenue:e.netRevenue}}(t)),e===a.FP.AUCTION_END){var n=b.context.bidWonTimeout?b.context.bidWonTimeout:2e3,r=[];setTimeout((function(){var e=(0,i.R)().getAllWinningBids();if((0,o.logInfo)("ATS Analytics - winning bids: ",e),p.length){var t={};f.length?(r=p.filter((function(e){return f.filter((function(t){e.bid_id===t.bid_id&&Object.assign(e,t)}))})),e.length&&(r=r.filter((function(n){return e.filter((function(e){t.bid_id=e.requestId,t.bid_won=!0,n.bid_id===t.bid_id&&Object.assign(n,t)}))})))):r=p;try{var n=m.getCookie("_lr_sampling_rate");n?b.shouldFireRequest(parseInt(n))&&((0,o.logInfo)("ATS Analytics - events to send: ",r),S(r)):function(e){(0,o.logInfo)("ATS Analytics - preflight request!"),(0,l.hj)("https://check.analytics.rlcdn.com/check/"+b.context.pid,{success:function(t){var n=JSON.parse(t);(0,o.logInfo)("ATS Analytics - Sampling Rate: ",n);var i=n.samplingRate;b.setSamplingCookie(i);var r=Number(i);t&&i&&b.shouldFireRequest(r)&&((0,o.logInfo)("ATS Analytics - events to send: ",e),S(e))},error:function(){b.setSamplingCookie(0),(0,o.logInfo)("ATS Analytics - Sampling Rate Request Error!")}},void 0,{method:"GET",crossOrigin:!0})}(r),r=[]}catch(e){(0,o.logError)("ATS Analytics - preflight request encounter an error: ",e)}}}),n)}},s.ZP.registerAnalyticsAdapter({adapter:b,code:u,gvlid:97});(0,i.z)("atsAnalyticsAdapter")}},function(e){e.O(0,[14861,38409],(function(){return t=45813,e(e.s=t);var t}));e.O()}]);
  (self.pbjsChunk=self.pbjsChunk||[]).push([[21266],{55630:function(n,e,t){var o,r,i,a,c,s,u=t(71002),l=t(78640),f=t(64358),d=t(96475),p=t(3193),g=t(34516),m=t(34614),v=t(99128),b=t(26372),y=t(54078),C=t(52712),P=!1,M={iab:function(n){var e=n.onSuccess,t=n.onError,o=n.onEvent;var r=(0,C.b6)({apiName:"__tcfapi",apiVersion:2,apiArgs:["command","version","callback","parameter"]});if(!r)return t("TCF2 CMP not found.");r.isDirect?(0,f.logInfo)("Detected CMP API is directly accessible, calling it now..."):(0,f.logInfo)("Detected CMP is outside the current iframe where Prebid.js is located, calling it now...");r({command:"addEventListener",callback:function(n,r){(0,f.logInfo)("Received a response from CMP",n),r?(o(n),!1!==n.gdprApplies&&"tcloaded"!==n.eventStatus&&"useractioncomplete"!==n.eventStatus||A(n,{onSuccess:e,onError:t})):t("CMP unable to register callback function.  Please check CMP setup.")}})},static:function(n){var e=n.onSuccess,t=n.onError;A(a,{onSuccess:e,onError:t})}};function S(n){var e,t,i=!1,a=null,s=!1;function u(n){null!=a&&clearTimeout(a),i||null==n||(0===n?e():a=setTimeout(e,n))}function l(e,t,o){if(u(null),i=!0,g.rp.setConsentData(e),"function"==typeof n){for(var r=arguments.length,a=new Array(r>3?r-3:0),c=3;c<r;c++)a[c-3]=arguments[c];n.apply(void 0,[t,o].concat(a))}}if((0,m.q9)(Object.keys(M),o)){var f={onSuccess:function(n){return l(n,!1)},onError:function(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),o=1;o<e;o++)t[o-1]=arguments[o];l.apply(void 0,[null,!0,n].concat(t))},onEvent:function(n){t=n,s||(s=!0,null!=c&&u(c))}};e=function(){var n=function(n){l(n,!1,"".concat(s?"Timeout waiting for user action on CMP":"CMP did not load",", continuing auction..."))};A(t,{onSuccess:n,onError:function(){return n(w(void 0))}})},M[o](f),null!=c&&s||u(r)}else l(null,!1,"CMP framework (".concat(o,") is not a supported framework.  Aborting consentManagement module and resuming auction."))}var h=(0,v.g3)("gdpr",(function(n,e){var t;t=function(t,o){if(o){var r=f.logWarn;t&&(r=f.logError,o="".concat(o," Canceling auction as per consentManagement config."));for(var i=arguments.length,a=new Array(i>2?i-2:0),c=2;c<i;c++)a[c-2]=arguments[c];r.apply(void 0,[o].concat(a))}t?(n.stopTiming(),"function"==typeof e.bidsBackHandler?e.bidsBackHandler():(0,f.logError)("Error executing bidsBackHandler")):n.call(this,e)},s?((0,f.logInfo)("User consent information already known.  Pulling internally stored information..."),t(!1)):S(t)}));function A(n,e){var t,o,r=e.onSuccess,a=e.onError;t=n&&"boolean"==typeof n.gdprApplies?n.gdprApplies:i,o=n&&n.tcString,"boolean"==typeof t&&(!0!==t||o&&(0,f.isStr)(o))?r(w(n)):a("CMP returned unexpected value during lookup process.",n)}function w(n){return s={consentString:n?n.tcString:void 0,vendorData:n||void 0,gdprApplies:n&&"boolean"==typeof n.gdprApplies?n.gdprApplies:i},n&&n.addtlConsent&&(0,f.isStr)(n.addtlConsent)&&(s.addtlConsent=n.addtlConsent),s.apiVersion=2,s}p.vc.getConfig("consentManagement",(function(n){return function(n){if((n=n&&(n.gdpr||n.usp||n.gpp?n.gdpr:n))&&"object"===(0,u.Z)(n)){var e;(0,f.isStr)(n.cmpApi)?o=n.cmpApi:(o="iab",(0,f.logInfo)("consentManagement config did not specify cmp.  Using system default setting (".concat("iab",")."))),(0,f.isNumber)(n.timeout)?r=n.timeout:(r=1e4,(0,f.logInfo)("consentManagement config did not specify timeout.  Using system default setting (".concat(1e4,")."))),c=(0,f.isNumber)(n.actionTimeout)?n.actionTimeout:null,i=!0===n.defaultGdprScope,(0,f.logInfo)("consentManagement module has been activated..."),"static"===o&&((0,f.isPlainObject)(n.consentData)?(null!=(null===(e=a=n.consentData)||void 0===e?void 0:e.getTCData)&&(a=a.getTCData),r=0):(0,f.logError)("consentManagement config with cmpApi: 'static' did not specify consentData. No consents will be available to adapters.")),P||(0,l.R)().requestBids.before(h,50),P=!0,g.rp.enable(),S()}else(0,f.logWarn)("consentManagement (gdpr) config not defined, exiting consent manager")}(n.consentManagement)})),y.S.before((function(n,e){return n(e.then((function(n){var e=g.rp.getConsentData();return e&&("boolean"==typeof e.gdprApplies&&(0,d.N)(n,"regs.ext.gdpr",e.gdprApplies?1:0),(0,d.N)(n,"user.ext.consent",e.consentString)),n})))})),(0,b.f8)({type:b.Z,name:"gdprAddtlConsent",fn:function(n,e){var t,o=null===(t=e.gdprConsent)||void 0===t?void 0:t.addtlConsent;o&&"string"==typeof o&&(0,d.N)(n,"user.ext.ConsentedProvidersSettings.consented_providers",o)}}),(0,l.z)("consentManagement")},26372:function(n,e,t){t.d(e,{DZ:function(){return a},Px:function(){return c},TP:function(){return u},YC:function(){return s},Z:function(){return i},f8:function(){return g},fP:function(){return m},gm:function(){return o},md:function(){return l}});var o=["request","imp","bidResponse","response"],r=["default","pbs"],i=o[0],a=o[1],c=o[2],s=o[3],u=r[0],l=r[1],f=new Set(o);var d,p=(d={},{registerOrtbProcessor:function(n){var e=n.type,t=n.name,r=n.fn,i=n.priority,a=void 0===i?0:i,c=n.dialects,s=void 0===c?[u]:c;if(!f.has(e))throw new Error("ORTB processor type must be one of: ".concat(o.join(", ")));s.forEach((function(n){d.hasOwnProperty(n)||(d[n]={}),d[n].hasOwnProperty(e)||(d[n][e]={}),d[n][e][t]={priority:a,fn:r}}))},getProcessors:function(n){return d[n]||{}}}),g=p.registerOrtbProcessor,m=p.getProcessors}},function(n){n.O(0,[17968,38409],(function(){return e=55630,n(n.s=e);var e}));n.O()}]);
  (self.pbjsChunk=self.pbjsChunk||[]).push([[69168],{30277:function(n,t,e){var r=e(71002),i=e(97326),o=e(60136),a=e(82963),c=e(61120);function u(n,t){for(;!Object.prototype.hasOwnProperty.call(n,t)&&null!==(n=(0,c.Z)(n)););return n}function s(){return s="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(n,t,e){var r=u(n,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(arguments.length<3?n:e):i.value}},s.apply(this,arguments)}var l=e(93324),p=e(4942),f=e(18916),g=e(43144),d=e(15671),v=e(89062),h=e(78640),m=e(64358),y=e(96475),b=e(3193),P=e(34516),w=e(99128),S=e(54078),Z=e(52712),C=e(68792),O=e(16310);function k(n){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var e,r=(0,c.Z)(n);if(t){var i=(0,c.Z)(this).constructor;e=Reflect.construct(r,arguments,i)}else e=r.apply(this,arguments);return(0,a.Z)(this,e)}}function M(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function j(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?M(Object(e),!0).forEach((function(t){(0,p.Z)(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):M(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function E(n,t,e){!function(n,t){if(t.has(n))throw new TypeError("Cannot initialize the same private elements twice on an object")}(n,t),t.set(n,e)}function T(n,t){var e=function(n,t,e){if(!t.has(n))throw new TypeError("attempted to "+e+" private field on non-instance");return t.get(n)}(n,t,"set");return function(n,t){if(t.set)return"__destrObj"in t||(t.__destrObj={set value(e){t.set.call(n,e)}}),t.__destrObj;if(!t.writable)throw new TypeError("attempted to set read only private field");return t}(n,e)}var D,I,R,G,N=!1;function A(n,t){var e=t.onSuccess,r=t.onError;new C.Z((function(t){return t(n())})).then(e,(function(n){n instanceof _?r.apply(void 0,[n.message].concat((0,v.Z)(n.args))):r("GPP error:",n)}))}var W="1.0",_=(0,g.Z)((function n(t,e){(0,d.Z)(this,n),this.message=t,this.args=null==e?[]:[e]})),z=new WeakMap,L=new WeakMap,U=new WeakMap,V=function(){function n(t,e){var r=this;(0,d.Z)(this,n),E(this,z,{writable:!0,value:void 0}),E(this,L,{writable:!0,value:void 0}),E(this,U,{writable:!0,value:[]}),(0,p.Z)(this,"initialized",!1),this.apiVersion=this.constructor.apiVersion,this.cmpVersion=e,this.cmp=e;var i=[0,1].map((function(n){return function(t){for(;(0,f.Z)(r,U).length;)(0,f.Z)(r,U).pop()[n](t)}})),o=(0,l.Z)(i,2);T(this,z).value=o[0],T(this,L).value=o[1]}return(0,g.Z)(n,[{key:"init",value:function(n){var t=this,e=this.updateWhenReady(n);return this.initialized||(this.initialized=!0,this.cmp({command:"addEventListener",callback:function(n,e){var r;null==e||e?"error"===(null==n||null===(r=n.pingData)||void 0===r?void 0:r.cmpStatus)?(0,f.Z)(t,L).call(t,new _('CMP status is "error"; please check CMP setup',n)):t.isCMPReady((null==n?void 0:n.pingData)||{})&&t.events.includes(null==n?void 0:n.eventName)&&(0,f.Z)(t,z).call(t,t.updateConsent(n.pingData)):(0,f.Z)(t,L).call(t,new _("Received error response from CMP",n))}})),e}},{key:"refresh",value:function(){return this.cmp({command:"ping"}).then(this.updateWhenReady.bind(this))}},{key:"updateConsent",value:function(n){return this.getGPPData(n).then((function(n){if(null==n||(0,m.isEmpty)(n))throw new _("Received empty response from CMP",n);return X(n)})).then((function(n){return(0,m.logInfo)("Retrieved GPP consent from CMP:",n),n}))}},{key:"nextUpdate",value:function(){var n=this;return new C.Z((function(t,e){(0,f.Z)(n,U).push([t,e])}))}},{key:"updateWhenReady",value:function(n){return this.isCMPReady(n)?this.updateConsent(n):this.nextUpdate()}}],[{key:"register",value:function(n){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];this.apiVersion=n,this.CLIENTS[n]=this,t&&(this.CLIENTS.default=this)}},{key:"init",value:function(){var n=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z.b6;return null==this.INST&&(this.INST=this.ping(t).catch((function(t){throw n.INST=null,t}))),this.INST.then((function(n){var t=(0,l.Z)(n,2),e=t[0],r=t[1];return[e,e.initialized?e.refresh():e.init(r)]}))}},{key:"ping",value:function(){var n=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z.b6,e={apiName:"__gpp",apiArgs:["command","callback","parameter"]},r=t(j(j({},e),{},{mode:Z.kX}));return new C.Z((function(i,o){if(null!=r){var a=!1,c=function(r,c){if(!a)if(null==c||c){if(null!=r){a=!0;var u=null==r?void 0:r.gppVersion,s=n.getClient(u);u!==s.apiVersion?(0,m.logWarn)("Unrecognized GPP CMP version: ".concat(u,". Continuing using GPP API version ").concat(s,"...")):(0,m.logInfo)("Using GPP version ".concat(u));var l=s.apiVersion===W?Z.sM:Z.m1,p=new s(u,t(j(j({},e),{},{mode:l})));i([p,r])}}else o(r)};r({command:"ping",callback:c}).then((function(n){return c(n,!0)}),o)}else o(new _("GPP CMP not found"))})).finally((function(){r&&r.close()}))}},{key:"getClient",value:function(n){return this.CLIENTS.hasOwnProperty(n)?this.CLIENTS[n]:this.CLIENTS.default}}]),n}();(0,p.Z)(V,"CLIENTS",{}),(0,p.Z)(V,"INST",void 0);var x=function(n){(0,o.Z)(e,n);var t=k(e);function e(){var n;(0,d.Z)(this,e);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return n=t.call.apply(t,[this].concat(o)),(0,p.Z)((0,i.Z)(n),"events",["sectionChange","cmpStatus"]),n}return(0,g.Z)(e,[{key:"isCMPReady",value:function(n){return"loaded"===n.cmpStatus}},{key:"getGPPData",value:function(n){var t=this,e=C.Z.all((n.supportedAPIs||n.apiSupport||[]).map((function(n){return t.cmp({command:"getSection",parameter:n}).catch((function(t){(0,m.logWarn)("Could not retrieve GPP section '".concat(n,"'"),t)})).then((function(t){return[n,t]}))}))).then((function(n){return Object.fromEntries(n.filter((function(n){var t=(0,l.Z)(n,2);t[0];return null!=t[1]})).map((function(n){var t=(0,l.Z)(n,2),e=t[0],r=t[1],i=[Object.fromEntries(Object.entries(r).filter((function(n){return"Gpc"!==(0,l.Z)(n,1)[0]})))];return null!=r.Gpc&&i.push({SubsectionType:1,Gpc:r.Gpc}),[e,i]})))}));return C.Z.all([this.cmp({command:"getGPPData"}),e]).then((function(n){var t=(0,l.Z)(n,2),e=t[0],r=t[1];return Object.assign({},e,{parsedSections:r})}))}}]),e}(V);s((0,c.Z)(x),"register",x).call(x,W);var B=function(n){(0,o.Z)(e,n);var t=k(e);function e(){var n;(0,d.Z)(this,e);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return n=t.call.apply(t,[this].concat(o)),(0,p.Z)((0,i.Z)(n),"events",["sectionChange","signalStatus"]),n}return(0,g.Z)(e,[{key:"isCMPReady",value:function(n){return"ready"===n.signalStatus}},{key:"getGPPData",value:function(n){return C.Z.resolve(n)}}]),e}(V);s((0,c.Z)(B),"register",B).call(B,"1.1",!0);var J={iab:function(n){var t=n.onSuccess,e=n.onError,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Z.b6;A((function(){return V.init(r).then((function(n){var t=(0,l.Z)(n,2);t[0];return t[1]}))}),{onSuccess:t,onError:e})},static:function(n){return A((function(){return X(R)}),n)}};function H(n){var t=!1,e=null;function r(r,i,o){if(null!=e&&clearTimeout(e),t=!0,P.TJ.setConsentData(r),"function"==typeof n){for(var a=arguments.length,c=new Array(a>3?a-3:0),u=3;u<a;u++)c[u-3]=arguments[u];n.apply(void 0,[i,o].concat(c))}}if(J.hasOwnProperty(D)){var i={onSuccess:function(n){return r(n,!1)},onError:function(n){for(var t=arguments.length,e=new Array(t>1?t-1:0),i=1;i<t;i++)e[i-1]=arguments[i];r.apply(void 0,[null,!0,n].concat(e))}};if(J[D](i),!t){var o=function(){var n=function(n){r(n,!1,"GPP CMP did not load, continuing auction...")};A((function(){return X(G)}),{onSuccess:n,onError:function(){return n(F())}})};0===I?o():e=setTimeout(o,I)}}else r(null,!1,"GPP CMP framework (".concat(D,") is not a supported framework.  Aborting consentManagement module and resuming auction."))}var q=(0,w.g3)("gpp",(function(n,t){var e;e=function(e,r){if(r){var i=m.logWarn;e&&(i=m.logError,r="".concat(r," Canceling auction as per consentManagement config."));for(var o=arguments.length,a=new Array(o>2?o-2:0),c=2;c<o;c++)a[c-2]=arguments[c];i.apply(void 0,[r].concat(a))}e?(n.stopTiming(),"function"==typeof t.bidsBackHandler?t.bidsBackHandler():(0,m.logError)("Error executing bidsBackHandler")):n.call(this,t)},G?((0,m.logInfo)("User consent information already known.  Pulling internally stored information..."),e(!1)):H(e)}));function X(n){if(null!=(null==n?void 0:n.applicableSections)&&!Array.isArray(n.applicableSections)||null!=(null==n?void 0:n.gppString)&&!(0,m.isStr)(n.gppString)||null!=(null==n?void 0:n.parsedSections)&&!(0,m.isPlainObject)(n.parsedSections))throw new _("CMP returned unexpected value during lookup process.",n);return F(n)}function F(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return G={gppString:null==n?void 0:n.gppString,applicableSections:(null==n?void 0:n.applicableSections)||[],parsedSections:(null==n?void 0:n.parsedSections)||{},gppData:n},P.TJ.setConsentData(n),G}b.vc.getConfig("consentManagement",(function(n){return function(n){(n=n&&n.gpp)&&"object"===(0,r.Z)(n)?((0,m.isStr)(n.cmpApi)?D=n.cmpApi:(D="iab",(0,m.logInfo)("consentManagement.gpp config did not specify cmp.  Using system default setting (".concat("iab",")."))),(0,m.isNumber)(n.timeout)?I=n.timeout:(I=1e4,(0,m.logInfo)("consentManagement.gpp config did not specify timeout.  Using system default setting (".concat(1e4,")."))),"static"===D&&((0,m.isPlainObject)(n.consentData)?(R=n.consentData,I=0):(0,m.logError)("consentManagement.gpp config with cmpApi: 'static' did not specify consentData. No consents will be available to adapters.")),(0,m.logInfo)("consentManagement.gpp module has been activated..."),N||((0,h.R)().requestBids.before(q,50),O.Ww.before((function(n,t){return n(Object.assign({gppConsent:P.TJ.getConsentData()},t))}))),N=!0,P.TJ.enable(),H()):(0,m.logWarn)("consentManagement.gpp config not defined, exiting consent manager module")}(n.consentManagement)})),S.S.before((function(n,t){return n(t.then((function(n){var t=P.TJ.getConsentData();return t&&(Array.isArray(t.applicableSections)&&(0,y.N)(n,"regs.gpp_sid",t.applicableSections),(0,y.N)(n,"regs.gpp",t.gppString)),n})))})),(0,h.z)("consentManagementGpp")}},function(n){n.O(0,[17968,38409],(function(){return t=30277,n(n.s=t);var t}));n.O()}]);
  (self.pbjsChunk=self.pbjsChunk||[]).push([[5160],{9099:function(n,t,e){var o,a,c=e(71002),i=e(78640),r=e(64358),s=e(96475),u=e(3193),l=e(86104),g=e(34516),f=e(99128),p=e(92797),d=e(54078),m=e(52712),v="iab",P=v,b=50,S=!1,D={iab:function(n){var t=n.onSuccess,e=n.onError;var o=(c={},{consentDataCallback:function(n,o){o&&n.uspString&&(c.usPrivacy=n.uspString),c.usPrivacy?U(c,{onSuccess:t,onError:e}):e("Unable to get USP consent string.")}}),a=(0,m.b6)({apiName:"__uspapi",apiVersion:1,apiArgs:["command","version","callback"]});var c;if(!a)return e("USP CMP not found.");a.isDirect?(0,r.logInfo)("Detected USP CMP is directly accessible, calling it now..."):(0,r.logInfo)("Detected USP CMP is outside the current iframe where Prebid.js is located, calling it now...");a({command:"getUSPData",callback:o.consentDataCallback}),a({command:"registerDeletion",callback:function(n,t){return(null==t||t)&&l.ZP.callDataDeletionRequest(n)}}).catch((function(n){(0,r.logError)("Error invoking CMP `registerDeletion`:",n)}))},static:function(n){var t=n.onSuccess,e=n.onError;U(o,{onSuccess:t,onError:e})}};function y(n){var t=null,e=!1;function o(o,a){if(null!=t&&clearTimeout(t),e=!0,g.nX.setConsentData(o),null!=n){for(var c=arguments.length,i=new Array(c>2?c-2:0),r=2;r<c;r++)i[r-2]=arguments[r];n.apply(void 0,[a].concat(i))}}if(D[P]){var a={onSuccess:o,onError:function(n){for(var t=arguments.length,e=new Array(t>1?t-1:0),a=1;a<t;a++)e[a-1]=arguments[a];o.apply(void 0,[null,"".concat(n," Resuming auction without consent data as per consentManagement config.")].concat(e))}};D[P](a),e||(0===b?U(void 0,a):t=setTimeout(a.onError.bind(null,"USPAPI workflow exceeded timeout threshold."),b))}else o(null,"USP framework (".concat(P,") is not a supported framework. Aborting consentManagement module and resuming auction."))}var h=(0,f.g3)("usp",(function(n,t){var e=this;S||M(),y((function(o){if(null!=o){for(var a=arguments.length,c=new Array(a>1?a-1:0),i=1;i<a;i++)c[i-1]=arguments[i];r.logWarn.apply(void 0,[o].concat(c))}n.call(e,t)}))}));function U(n,t){var e=t.onSuccess,o=t.onError;!n||!n.usPrivacy?o("USPAPI returned unexpected value during lookup process.",n):(!function(n){n&&n.usPrivacy&&(a=n.usPrivacy)}(n),e(a))}function M(){var n=arguments.length>0&&void 0!==arguments[0]&&arguments[0];S||((0,r.logInfo)("USPAPI consentManagement module has been activated".concat(n?"":" using default values (api: '".concat(P,"', timeout: ").concat(b,"ms)"))),S=!0,g.nX.enable()),y()}u.vc.getConfig("consentManagement",(function(n){return function(n){(n=n&&n.usp)&&"object"===(0,c.Z)(n)||(0,r.logWarn)("consentManagement.usp config not defined, using defaults"),n&&(0,r.isStr)(n.cmpApi)?P=n.cmpApi:(P=v,(0,r.logInfo)("consentManagement.usp config did not specify cmpApi. Using system default setting (".concat(v,")."))),n&&(0,r.isNumber)(n.timeout)?b=n.timeout:(b=50,(0,r.logInfo)("consentManagement.usp config did not specify timeout. Using system default setting (".concat(50,")."))),"static"===P&&((0,r.isPlainObject)(n.consentData)&&(0,r.isPlainObject)(n.consentData.getUSPData)?(n.consentData.getUSPData.uspString&&(o={usPrivacy:n.consentData.getUSPData.uspString}),b=0):(0,r.logError)("consentManagement config with cmpApi: 'static' did not specify consentData. No consents will be available to adapters.")),M(!0)}(n.consentManagement)})),(0,p.v5)("requestBids").before(h,50),d.S.before((function(n,t){return n(t.then((function(n){var t=g.nX.getConsentData();return t&&(0,s.N)(n,"regs.ext.us_privacy",t),n})))})),(0,i.z)("consentManagementUsp")}},function(n){n.O(0,[17968,38409],(function(){return t=9099,n(n.s=t);var t}));n.O()}]);
  (self.pbjsChunk=self.pbjsChunk||[]).push([[99226],{72663:function(r,n,e){var o,c,t=e(93324),i=e(71002),s=e(78640),u=e(64358),a=e(5644),f=e(48928),l=e(3193),d=e(92797),v=e(68792),y=e(26372),g=e(99128),p=e(52021),h="https://cdn.jsdelivr.net/gh/prebid/currency-file@1/latest.json?date=$$TODAY$$",C=[],b={},I=!1,R=!0,m="USD",w=!1,O={},S={},P=(0,v.P)();function F(r){c?((0,u.logWarn)(r),(0,u.logWarn)("Currency failed loading rates, falling back to currency.defaultRates")):(0,u.logError)(r)}function D(){R?(R=!1,I=!1,(0,f.hj)(o,{success:function(r){try{O=JSON.parse(r),(0,u.logInfo)("currencyRates set to "+JSON.stringify(O)),b={},I=!0,k()}catch(n){F("Failed to parse currencyRates response: "+r)}},error:function(){F.apply(void 0,arguments),I=!0,k(),R=!0}})):k()}function T(){b={},w=!0,(0,u.logInfo)("Installing addBidResponse decorator for currency module",arguments),(0,s.R)().convertCurrency=function(r,n,e){return parseFloat(r)*A(n,e)},(0,d.v5)("addBidResponse").before(E,100),(0,d.v5)("responsesReady").before(j),(0,p.on)(a.FP.AUCTION_TIMEOUT,N),(0,p.on)(a.FP.AUCTION_INIT,D),D()}function U(){(0,u.logInfo)("Uninstalling addBidResponse decorator for currency module",arguments),(0,d.v5)("addBidResponse").getHooks({hook:E}).remove(),(0,d.v5)("responsesReady").getHooks({hook:j}).remove(),(0,p.off)(a.FP.AUCTION_TIMEOUT,N),(0,p.off)(a.FP.AUCTION_INIT,D),delete(0,s.R)().convertCurrency,m="USD",b={},w=!1,I=!1,R=!0,O={},S={},P=(0,v.P)()}function j(r,n){r(n.then((function(){return P.promise})))}l.vc.getConfig("currency",(function(r){return function(r){if(o=h,"object"===(0,i.Z)(r.rates)&&(O.conversions=r.rates,I=!0,R=!1),"object"===(0,i.Z)(r.defaultRates)&&(c=r.defaultRates,O.conversions=c,I=!0),"string"==typeof r.adServerCurrency){(0,u.logInfo)("enabling currency support",arguments),m=r.adServerCurrency,r.conversionRateFile&&((0,u.logInfo)("currency using override conversionRateFile:",r.conversionRateFile),o=r.conversionRateFile);var n=o.indexOf("$$TODAY$$");if(-1!==n){var e=new Date,t="".concat(e.getMonth()+1),s="".concat(e.getDate());t.length<2&&(t="0".concat(t)),s.length<2&&(s="0".concat(s));var a="".concat(e.getFullYear()).concat(t).concat(s);o="".concat(o.substring(0,n)).concat(a).concat(o.substring(n+9,o.length))}T()}else(0,u.logInfo)("disabling currency support"),U();"object"===(0,i.Z)(r.bidderCurrencyDefault)&&(S=r.bidderCurrencyDefault)}(r.currency)}));var E=(0,g.A)("currency",(function(r,n,e,o){if(!e)return r.call(this,n,e,o);var c=e.bidderCode||e.bidder;if(S[c]){var t=S[c];e.currency&&t!==e.currency?(0,u.logWarn)("Currency default '".concat(c,": ").concat(t,"' ignored. adapter specified '").concat(e.currency,"'")):e.currency=t}if(e.currency||((0,u.logWarn)('Currency not specified on bid.  Defaulted to "USD"'),e.currency="USD"),e.getCpmInNewCurrency=function(r){return(parseFloat(this.cpm)*A(this.currency,r)).toFixed(3)},e.currency===m)return r.call(this,n,e,o);C.push([r,this,n,e,o]),w&&!I||k()}));function N(r){var n=r.auctionId;C=C.filter((function(r){var e=(0,t.Z)(r,5),o=(e[0],e[1],e[2],e[3]),c=e[4];if(o.auctionId!==n)return!0;c(a.Gw.Xx)}))}function k(){for(;C.length>0;){var r=C.shift(),n=(0,t.Z)(r,5),e=n[0],o=n[1],c=n[2],i=n[3],s=n[4];if(void 0!==i&&"currency"in i&&"cpm"in i){var f=i.currency;try{var l=A(f);1!==l&&(i.cpm=(parseFloat(i.cpm)*l).toFixed(4),i.currency=m)}catch(r){(0,u.logWarn)("getCurrencyConversion threw error: ",r),s(a.Gw.Xx);continue}}e.call(o,c,i,s)}P.resolve()}function A(r){var n,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:m,o=null,c="".concat(r,"->").concat(e);if(c in b)o=b[c],(0,u.logMessage)("Using conversionCache value "+o+" for "+c);else if(!1===w){if("USD"!==r)throw new Error("Prebid currency support has not been enabled and fromCurrency is not USD");o=1}else if(r===e)o=1;else if(r in O.conversions){if(!(e in(n=O.conversions[r])))throw new Error("Specified adServerCurrency in config '"+e+"' not found in the currency rates file");o=n[e],(0,u.logInfo)("getCurrencyConversion using direct "+r+" to "+e+" conversionRate "+o)}else if(e in O.conversions){if(!(r in(n=O.conversions[e])))throw new Error("Specified fromCurrency '"+r+"' not found in the currency rates file");o=Z(1/n[r],4),(0,u.logInfo)("getCurrencyConversion using reciprocal "+r+" to "+e+" conversionRate "+o)}else{var t=Object.keys(O.conversions)[0];if(!(r in O.conversions[t]))throw new Error("Specified fromCurrency '"+r+"' not found in the currency rates file");var i=1/O.conversions[t][r];if(!(e in O.conversions[t]))throw new Error("Specified adServerCurrency in config '"+e+"' not found in the currency rates file");var s=O.conversions[t][e];o=Z(i*s,4),(0,u.logInfo)("getCurrencyConversion using intermediate "+r+" thru "+t+" to "+e+" conversionRate "+o)}return c in b||((0,u.logMessage)("Adding conversionCache value "+o+" for "+c),b[c]=o),o}function Z(r,n){for(var e=1,o=0;o<n;o++)e+="0";return Math.round(r*e)/e}(0,y.f8)({type:y.Z,name:"currency",fn:function(r,n,e){w&&(r.cur=r.cur||[e.currency||m])}}),(0,s.z)("currency")},26372:function(r,n,e){e.d(n,{DZ:function(){return i},Px:function(){return s},TP:function(){return a},YC:function(){return u},Z:function(){return t},f8:function(){return y},fP:function(){return g},gm:function(){return o},md:function(){return f}});var o=["request","imp","bidResponse","response"],c=["default","pbs"],t=o[0],i=o[1],s=o[2],u=o[3],a=c[0],f=c[1],l=new Set(o);var d,v=(d={},{registerOrtbProcessor:function(r){var n=r.type,e=r.name,c=r.fn,t=r.priority,i=void 0===t?0:t,s=r.dialects,u=void 0===s?[a]:s;if(!l.has(n))throw new Error("ORTB processor type must be one of: ".concat(o.join(", ")));u.forEach((function(r){d.hasOwnProperty(r)||(d[r]={}),d[r].hasOwnProperty(n)||(d[r][n]={}),d[r][n][e]={priority:i,fn:c}}))},getProcessors:function(r){return d[r]||{}}}),y=v.registerOrtbProcessor,g=v.getProcessors}},function(r){r.O(0,[38409],(function(){return n=72663,r(r.s=n);var n}));r.O()}]);
  (self.pbjsChunk=self.pbjsChunk||[]).push([[88806],{19749:function(n,u,e){(0,e(78640).z)("enrichmentFpdModule")}},function(n){n.O(0,[38409],(function(){return u=19749,n(n.s=u);var u}));n.O()}]);
  (self.pbjsChunk=self.pbjsChunk||[]).push([[87083],{31498:function(n,e,r){var t=r(93324),o=r(78640),u=r(64358),i=r(20265),a=r(3193),c=r(86104),l=r(34516),s=r(52021),p=r(5644),f=r(9633),d=r(16310),v=r(50571),g=r(74947);function h(n,e){var r="undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(!r){if(Array.isArray(n)||(r=function(n,e){if(!n)return;if("string"==typeof n)return y(n,e);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(n);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return y(n,e)}(n))||e&&n&&"number"==typeof n.length){r&&(n=r);var t=0,o=function(){};return{s:o,n:function(){return t>=n.length?{done:!0}:{done:!1,value:n[t++]}},e:function(n){throw n},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u,i=!0,a=!1;return{s:function(){r=r.call(n)},n:function(){var n=r.next();return i=n.done,n},e:function(n){a=!0,u=n},f:function(){try{i||null==r.return||r.return()}finally{if(a)throw u}}}}function y(n,e){(null==e||e>n.length)&&(e=n.length);for(var r=0,t=new Array(e);r<e;r++)t[r]=n[r];return t}var m={purpose:{},feature:{}},b={purpose:"purpose.consents",feature:"specialFeatureOptins"},w={storage:{type:"purpose",default:{purpose:"storage",enforcePurpose:!0,enforceVendor:!0,vendorExceptions:[]},id:1},basicAds:{type:"purpose",id:2,default:{purpose:"basicAds",enforcePurpose:!0,enforceVendor:!0,vendorExceptions:[]}},personalizedAds:{type:"purpose",id:4},measurement:{type:"purpose",id:7},transmitPreciseGeo:{type:"feature",id:1}},E=new Set,A=new Set,k=new Set,B=new Set,S=new Set,P=new Set,C=!1,O=!1,D=[f.UL,f.y2,f._U,f.XG],I="TCF2",Z=[],j=[2];function x(n,e,r){if(e){var t=a.vc.getConfig("gvlMapping");if(t&&t[e])return t[e];if(n===f.wu)return"cdep"===e?l.Lw:l.$P;var o=l.qh.get(e),i=o.gvlid,c=o.modules;if(null==i&&Object.keys(c).length>0){var s,p=h(D);try{for(p.s();!(s=p.n()).done;){var d=s.value;if(c.hasOwnProperty(d)){i=c[d],d!==n&&(0,u.logWarn)("Multiple GVL IDs found for module '".concat(e,"'; using the ").concat(d," module's ID (").concat(i,") instead of the ").concat(n,"'s ID (").concat(c[n],")"));break}}}catch(n){p.e(n)}finally{p.f()}}return null==i&&r&&(i=r()),i||null}return null}function F(n,e,r){return null==n&&l.rp.enabled?((0,u.logWarn)("Attempting operation that requires purpose ".concat(e," consent while consent data is not available").concat(r?" (module: ".concat(r,")"):"",". Assuming no consent was given.")),!0):n&&n.gdprApplies}function $(n,e,r,t){var o=!!(0,i.Z)(n,"vendorData.".concat(b[e],".").concat(r)),u=!!(0,i.Z)(n,"vendorData.vendor.consents.".concat(t));return"purpose"===e&&j.includes(r)&&(o||(o=!!(0,i.Z)(n,"vendorData.purpose.legitimateInterests.".concat(r))),u||(u=!!(0,i.Z)(n,"vendorData.vendor.legitimateInterests.".concat(t)))),{purpose:o,vendor:u}}function M(n,e,r,t){var o=w[n.purpose];if((n.vendorExceptions||[]).includes(r))return!0;var u=n.enforceVendor&&!(t===l.$P||(n.softVendorExceptions||[]).includes(r)),a=$(e,o.type,o.id,t),c=a.purpose,s=a.vendor,p=(!n.enforcePurpose||c)&&(!u||s);return t===l.Lw&&(p=!n.enforcePurpose||!!(0,i.Z)(e,"vendorData.publisher.consents.".concat(o.id))),p}function T(n,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(){return null};return function(o){var u=l.rp.getConsentData(),i=o[d.bp];if(F(u,n,i)){var a=x(o[d.$k],i,t(o)),c=!!e(u,i,a);if(!c)return r&&r.add(i),{allow:c}}}}function V(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){return null};return T(n,(function(e,r,t){return!!M(m.purpose[n],e,r,t)}),e,r)}function L(n){return function(e){if(e[d.$k]!==f.wu)return n(e)}}var U,N,q,G=(U=V(1,E),function(n){if(n[d.$k]!==f.wu||O)return U(n)}),W=V(1,E),_=V(1,E),z=L(V(2,A)),K=V(7,k,(function(n){return e=n[d.bp],r=n[d.Hw],function(n){if("function"!=typeof n)return n;try{return n.call(o.adapter,r)}catch(n){(0,u.logError)("Error invoking ".concat(e," adapter.gvlid()"),n)}}(null==(o=c.ZP.getAnalyticsAdapter(e))||null===(t=o.adapter)||void 0===t?void 0:t.gvlid);var e,r,t,o})),R=V(4,B),H=L((N=T("2-10",(function(n,e,r){for(var t=2;t<=10;t++){var o,u,i,a;if(null!==(o=m.purpose[t])&&void 0!==o&&null!==(u=o.vendorExceptions)&&void 0!==u&&u.includes(e))return!0;var c=$(n,"purpose",t,r),l=c.purpose,s=c.vendor;if(l&&(s||null!==(i=m.purpose[t])&&void 0!==i&&null!==(a=i.softVendorExceptions)&&void 0!==a&&a.includes(e)))return!0}return!1}),S),q=V(4,S),function(){var n,e=null!==(n=m.purpose[4])&&void 0!==n&&n.eidsRequireP4Consent?q:N;return e.apply(this,arguments)})),X=T("Special Feature 1",(function(n,e,r){return M(m.feature[1],n,e,r)}),P);s.on(p.FP.AUCTION_END,(function(){var n=function(n){return Array.from(n.keys()).filter((function(n){return null!=n}))},e={storageBlocked:n(E),biddersBlocked:n(A),analyticsBlocked:n(k),ufpdBlocked:n(B),eidsBlocked:n(S),geoBlocked:n(P)};s.emit(p.FP.TCF2_ENFORCEMENT,e),[E,A,k,B,S,P].forEach((function(n){return n.clear()}))})),a.vc.getConfig("consentManagement",(function(n){return function(n){var e=(0,i.Z)(n,"gdpr.rules");e||(0,u.logWarn)("TCF2: enforcing P1 and P2 by default"),e=Object.fromEntries((e||[]).map((function(n){return[n.purpose,n]}))),O=!!(0,i.Z)(n,"strictStorageEnforcement"),Object.entries(w).forEach((function(n){var r,o=(0,t.Z)(n,2),u=o[0],i=o[1];m[i.type][i.id]=null!==(r=e[u])&&void 0!==r?r:i.default})),C||(null!=m.purpose[1]&&(C=!0,Z.push((0,v.oB)(g.S1,I,G)),Z.push((0,v.oB)(g.K$,I,W)),Z.push((0,v.oB)(g.EL,I,_))),null!=m.purpose[2]&&Z.push((0,v.oB)(g.UE,I,z)),null!=m.purpose[4]&&Z.push((0,v.oB)(g.oK,I,R),(0,v.oB)(g.S5,I,R)),null!=m.purpose[7]&&Z.push((0,v.oB)(g.x$,I,K)),null!=m.feature[1]&&Z.push((0,v.oB)(g.g0,I,X)),Z.push((0,v.oB)(g.e,I,H)))}(n.consentManagement)})),(0,o.z)("gdprEnforcement")}},function(n){n.O(0,[38409],(function(){return e=31498,n(n.s=e);var e}));n.O()}]);
  (self.pbjsChunk=self.pbjsChunk||[]).push([[48958],{12670:function(n,t,u){var o=u(78640),e=u(3193),s=u(77337),a=!1;e.vc.getConfig("consentManagement",(function(n){var t;null==(null==n||null===(t=n.consentManagement)||void 0===t?void 0:t.gpp)||a||((0,s.Ji)("usnat",[7]),a=!0)})),(0,o.z)("gppControl_usnat")}},function(n){n.O(0,[35051,38409],(function(){return t=12670,n(n.s=t);var t}));n.O()}]);
  (self.pbjsChunk=self.pbjsChunk||[]).push([[35093],{76875:function(n,t,e){var r=e(93324),i=e(78640),o=e(3193),a=e(77337),s=e(96475),u=e(64358),c={Version:0,Gpc:0,SharingNotice:0,SaleOptOutNotice:0,SharingOptOutNotice:0,TargetedAdvertisingOptOutNotice:0,SensitiveDataProcessingOptOutNotice:0,SensitiveDataLimitUseNotice:0,SaleOptOut:0,SharingOptOut:0,TargetedAdvertisingOptOut:0,SensitiveDataProcessing:12,KnownChildSensitiveDataConsents:2,PersonalDataConsents:0,MspaCoveredTransaction:0,MspaOptOutOptionMode:0,MspaServiceProviderMode:0};function f(n){var t=n.nullify,e=void 0===t?[]:t,i=n.move,o=void 0===i?{}:i,a=n.fn,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:c;return o=Object.fromEntries(Object.entries(o).map((function(n){var t=(0,r.Z)(n,2),e=t[0],i=t[1];return[e,Object.fromEntries(Object.entries(i).map((function(n){var t=(0,r.Z)(n,2),e=t[0],i=t[1];return[e,Array.isArray(i)?i:[i]]})).map((function(n){var t=(0,r.Z)(n,2),e=t[0];return[--e,t[1].map((function(n){return--n}))]})))]}))),function(n){var t=Object.fromEntries(Object.entries(u).map((function(t){var e=(0,r.Z)(t,2),i=e[0],a=e[1],s=null;if(a>0){if(s=Array(a).fill(null),Array.isArray(n[i])){var u=o[i]||{},c=[];n[i].forEach((function(n,t){var e=u.hasOwnProperty(t)?[u[t],!0]:[[t],!1],i=(0,r.Z)(e,2),o=i[0],f=i[1];o.forEach((function(t){t<a&&!c.includes(t)&&(s[t]=n,f&&c.push(t))}))}))}}else null!=n[i]&&(s=Array.isArray(n[i])?null:n[i]);return[i,s]})));return e.forEach((function(n){return(0,s.N)(t,n,null)})),a&&a(n,t),t}}function v(n,t){t.KnownChildSensitiveDataConsents=0===n.KnownChildSensitiveDataConsents?[0,0]:[1,1]}var l,p={7:function(n){return n},8:f({move:{SensitiveDataProcessing:{1:9,2:10,3:8,4:[1,2],5:12,8:3,9:4}},fn:function(n,t){n.KnownChildSensitiveDataConsents.some((function(n){return 0!==n}))&&(t.KnownChildSensitiveDataConsents=[1,1])}}),9:f({fn:v}),10:f({fn:v}),11:f({move:{SensitiveDataProcessing:{3:4,4:5,5:3}},fn:v}),12:f({fn:function(n,t){var e,r=n.KnownChildSensitiveDataConsents;e=r.some((function(n){return 0!==n}))?2===r[1]&&2===r[2]?[2,1]:[1,1]:[0,0],t.KnownChildSensitiveDataConsents=e}})},O={8:"usca",9:"usva",10:"usco",11:"usut",12:"usct"},d=(l=Object.keys(O).map(Number),function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=n.sections,e=void 0===t?{}:t,r=n.sids,i=void 0===r?l:r;return i.map((function(n){var t=(0,u.prefixLog)("Cannot set up MSPA controls for SID ".concat(n,":")),r=e[n]||{},i=r.normalizeAs||n;if(p.hasOwnProperty(i)){var o=r.name||O[n];if("string"==typeof o)return[o,[n],p[i]];t.logError("cannot determine GPP section name")}else t.logError("no normalization rules are known for SID ".concat(i))})).filter((function(n){return null!=n}))}),m=[];o.vc.getConfig("consentManagement",(function(n){var t,e=null===(t=n.consentManagement)||void 0===t?void 0:t.gpp;if(e){for(;m.length;)m.pop()();d((null==e?void 0:e.mspa)||{}).forEach((function(n){var t=(0,r.Z)(n,3),e=t[0],i=t[1],o=t[2];return m.push((0,a.Ji)(e,i,o))}))}})),(0,i.z)("gppControl_usstates")}},function(n){n.O(0,[35051,38409],(function(){return t=76875,n(n.s=t);var t}));n.O()}]);
  (self.pbjsChunk=self.pbjsChunk||[]).push([[65296],{96787:function(t,o,e){var n=e(78640),a=e(64358),r=e(96475),d=e(20265),i=e(3193),u=e(92797),c=e(34614),s=void 0,f={},l=!1,p=function(t){var o=f.customGptSlotMatching;if((0,a.isGptPubadsDefined)()){var e=t.reduce((function(t,o){return t[o.code]=t[o.code]||[],t[o.code].push(o),t}),{});window.googletag.pubads().getSlots().forEach((function(t){var n=(0,c.sE)(Object.keys(e),o?o(t):(0,a.isAdUnitCodeMatchingSlot)(t));if(n){var d={name:"gam",adslot:b(t.getAdUnitPath())};e[n].forEach((function(t){var o,e,n;(0,r.N)(t,"ortb2Imp.ext.data.adserver",Object.assign({},null===(o=t.ortb2Imp)||void 0===o||null===(e=o.ext)||void 0===e||null===(n=e.data)||void 0===n?void 0:n.adserver,d))}))}}))}},b=function(t){return(i.vc.getConfig("gptPreAuction")||{}).mcmEnabled?t.replace(/(^\/\d*),\d*\//,"$1/"):t},g=function(t,o){var e=t.ortb2Imp.ext.data;if(e.pbadslot)return e.pbadslot;if((0,a.isGptPubadsDefined)()){var n=window.googletag.pubads().getSlots().filter((function(t){return t.getAdUnitPath()===o}));if(0!==n.length)return 1===n.length?o:"".concat(o,"#").concat(t.code)}},v=function(t){var o=t.ortb2Imp.ext.data,e=f.customPbAdSlot;if(!o.pbadslot)if(e)o.pbadslot=e(t.code,(0,d.Z)(o,"adserver.adslot"));else{try{var n=document.getElementById(t.code);if(n.dataset.adslotid)return void(o.pbadslot=n.dataset.adslotid)}catch(t){}if(!(0,d.Z)(o,"adserver.adslot"))return o.pbadslot=t.code,!0;o.pbadslot=o.adserver.adslot}},m=function(t,o){p(o);var e=f,n=e.useDefaultPreAuction,a=e.customPreAuction;o.forEach((function(t){t.ortb2Imp=t.ortb2Imp||{},t.ortb2Imp.ext=t.ortb2Imp.ext||{},t.ortb2Imp.ext.data=t.ortb2Imp.ext.data||{};var o=t.ortb2Imp.ext;if(a||n){var e,r=(0,d.Z)(o,"data.adserver.adslot");a?e=a(t,r):n&&(e=g(t,r)),e&&(o.gpid=o.data.pbadslot=e)}else{var i=v(t);o.gpid||i||(o.gpid=o.data.pbadslot)}}));for(var r=arguments.length,i=new Array(r>2?r-2:0),u=2;u<r;u++)i[u-2]=arguments[u];return t.call.apply(t,[s,o].concat(i))},h=function(t){(f=(0,a.pick)(t,["enabled",function(t){return!1!==t},"customGptSlotMatching",function(t){return"function"==typeof t&&t},"customPbAdSlot",function(t){return"function"==typeof t&&t},"customPreAuction",function(t){return"function"==typeof t&&t},"useDefaultPreAuction",function(t){return!0===t}])).enabled?l||((0,u.v5)("makeBidRequests").before(m),l=!0):((0,a.logInfo)("".concat("GPT Pre-Auction",": Turning off module")),f={},(0,u.v5)("makeBidRequests").getHooks({hook:m}).remove(),l=!1)};i.vc.getConfig("gptPreAuction",(function(t){return h(t.gptPreAuction)})),h({}),(0,n.z)("gptPreAuction")}},function(t){t.O(0,[38409],(function(){return o=96787,t(t.s=o);var o}));t.O()}]);
  (self.pbjsChunk=self.pbjsChunk||[]).push([[79114],{45407:function(e,t,n){var i=n(78640),o=n(64358),r=n(48928),a=n(92797),p=n(15164),s=n(9633),l=n(34516),d="identityLink",c=(0,p.df)({moduleType:s.y2,moduleName:d}),v="_lr_env",g={name:d,gvlid:97,decode:function(e){return{idl_env:e}},getId:function(e,t){var n=e&&e.params||{};if(n&&"string"==typeof n.pid){var i=t&&"boolean"==typeof t.gdprApplies&&t.gdprApplies?1:0,r=i?t.consentString:"";if(!i||r&&""!==r){var a=l.TJ.getConsentData(),p=!(!a||!a.gppString)&&a.gppString,s=!!(a&&a.gppString&&a.applicableSections.length>0&&-1!==a.applicableSections[0])&&a.applicableSections[0],d=p&&s,g="https://api.rlcdn.com/api/identity/envelope?pid=".concat(n.pid).concat(i?"&ct=4&cv="+r:"").concat(d?"&gpp="+p+"&gpp_sid="+s:"");return{callback:function(e){if(window.ats&&window.ats.retrieveEnvelope)o.logInfo("identityLink: ATS exists!"),window.ats.retrieveEnvelope((function(t){t?(o.logInfo("identityLink: An envelope can be retrieved from ATS!"),u(!0),e(JSON.parse(t).envelope)):f(g,e,n)}));else{var t=(i=c.getCookie(v)||c.getDataFromLocalStorage(v))?window.atob(i):void 0;t?(o.logInfo("identityLink: LiveRamp envelope successfully retrieved from storage!"),e(JSON.parse(t).envelope)):f(g,e,n)}var i}}}o.logInfo("identityLink: Consent string is required to call envelope API.")}else o.logError("identityLink: requires partner id to be defined")},eids:{idl_env:{source:"liveramp.com",atype:3}}};function f(e,t,n){var i,a={success:function(e){var n;if(e)try{n=JSON.parse(e)}catch(e){o.logInfo(e)}t(n&&n.envelope?n.envelope:"")},error:function(e){o.logInfo("identityLink: identityLink: ID fetch encountered an error",e),t()}};n.notUse3P||c.getCookie("_lr_retry_request")||((i=new Date).setTime(i.getTime()+36e5),c.setCookie("_lr_retry_request","true",i.toUTCString()),o.logInfo("identityLink: A 3P retrieval is attempted!"),u(!1),(0,r.hj)(e,a,void 0,{method:"GET",withCredentials:!0}))}function u(e){var t=new Date;t.setTime(t.getTime()+2592e6),c.setCookie("_lr_env_src_ats",e,t.toUTCString())}(0,a.Bx)("userId",g),(0,i.z)("identityLinkIdSystem")}},function(e){e.O(0,[38409],(function(){return t=45407,e(e.s=t);var t}));e.O()}]);
  (self.pbjsChunk=self.pbjsChunk||[]).push([[31249],{4972:function(r,e,a){var o=a(78640),n=a(92797),t=a(15164),i=a(64358),l=a(9633),u="pairId",c="pairId",d=(0,t.df)({moduleType:l.y2,moduleName:u});function f(r){return d.localStorageIsEnabled()?d.getDataFromLocalStorage(r):null}function p(r){return d.cookiesAreEnabled()?d.getCookie(r):null}var s={name:u,gvlid:755,decode:function(r){return r&&Array.isArray(r)?{pairId:r}:void 0},getId:function(r){var e=f(c)||p(c),a=[];if(e&&"string"==typeof e)try{a=a.concat(JSON.parse(atob(e)))}catch(r){(0,i.logInfo)(r)}var o=r&&r.params||{};if(o&&o.liveramp){var n=o.liveramp.storageKey||"_lr_pairId",t=f(n)||p(n);try{var l=JSON.parse(atob(t));a=a.concat(l.envelope)}catch(r){(0,i.logInfo)(r)}}if(0!=a.length)return{id:a};(0,i.logInfo)("PairId not found.")},eids:{pairId:{source:"google.com",atype:571187}}};(0,n.Bx)("userId",s),(0,o.z)("pairIdSystem")}},function(r){r.O(0,[38409],(function(){return e=4972,r(r.s=e);var e}));r.O()}]);
  (self.pbjsChunk=self.pbjsChunk||[]).push([[56187],{40060:function(e,r,t){var n=t(89062),i=t(4942),o=t(93324),a=t(71002),s=t(78640),d=t(24980),c=t(99933),u=t(14699),p=t(3193),l=t(24679),f=t(34614),v=t(35706),m=t(64358),g=t(96475),b=t(20265),x=t(20676),y=t(85370);function h(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function _(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?h(Object(t),!0).forEach((function(r){(0,i.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):h(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var j="https://video-outstream.rubiconproject.com/apex-2.2.1.js",k=p.vc.getConfig("rubicon")||{};p.vc.getConfig("rubicon",(function(e){(0,m.mergeDeep)(k,e.rubicon)}));var O={1:"468x60",2:"728x90",5:"120x90",7:"125x125",8:"120x600",9:"160x600",10:"300x600",13:"200x200",14:"250x250",15:"300x250",16:"336x280",17:"240x400",19:"300x100",31:"980x120",32:"250x360",33:"180x500",35:"980x150",37:"468x400",38:"930x180",39:"750x100",40:"750x200",41:"750x300",42:"2x4",43:"320x50",44:"300x50",48:"300x300",53:"1024x768",54:"300x1050",55:"970x90",57:"970x250",58:"1000x90",59:"320x80",60:"320x150",61:"1000x1000",64:"580x500",65:"640x480",66:"930x600",67:"320x480",68:"1800x1000",72:"320x320",73:"320x160",78:"980x240",79:"980x300",80:"980x400",83:"480x300",85:"300x120",90:"548x150",94:"970x310",95:"970x100",96:"970x210",101:"480x320",102:"768x1024",103:"480x280",105:"250x800",108:"320x240",113:"1000x300",117:"320x100",125:"800x250",126:"200x600",144:"980x600",145:"980x150",152:"1000x250",156:"640x320",159:"320x250",179:"250x600",195:"600x300",198:"640x360",199:"640x200",213:"1030x590",214:"980x360",221:"1x1",229:"320x180",230:"2000x1400",232:"580x400",234:"6x6",251:"2x2",256:"480x820",257:"400x600",258:"500x200",259:"998x200",261:"480x480",264:"970x1000",265:"1920x1080",274:"1800x200",278:"320x500",282:"320x400",288:"640x380",484:"720x1280",524:"1x2",548:"500x1000",550:"980x480",552:"300x200",558:"640x640",562:"300x431",564:"320x431",566:"320x300",568:"300x150",570:"300x125",572:"250x350",574:"620x891",576:"610x877",578:"980x552",580:"505x656",622:"192x160",632:"1200x450",634:"340x450"};(0,m._each)(O,(function(e,r){return O[e]=r}));var S=(0,d.x)({request:function(e,r,t,i){var o,d,c,u=i.bidRequests,l=e(r,t,i);l.cur=["USD"],l.test=p.vc.getConfig("debug")?1:0,(0,g.N)(l,"ext.prebid.cache",{vastxml:{returnCreative:!0===k.returnVast}}),(0,g.N)(l,"ext.prebid.bidders",{rubicon:{integration:k.int_type||"pbjs"}}),(0,g.N)(l,"ext.prebid.targeting.pricegranularity",{ranges:{low:[{max:5,increment:.5}],medium:[{max:20,increment:.1}],high:[{max:20,increment:.01}],auto:[{max:5,increment:.05},{min:5,max:10,increment:.1},{min:10,max:20,increment:.5}],dense:[{max:3,increment:.01},{min:3,max:8,increment:.05},{min:8,max:20,increment:.5}],custom:(c=p.vc).getConfig("customPriceBucket")&&c.getConfig("customPriceBucket").buckets}[c.getConfig("priceGranularity")]});var f=(0,s.R)().installedModules;return!f||f.length&&-1===f.indexOf("rubiconAnalyticsAdapter")||(0,g.N)(l,"ext.prebid.analytics",{rubicon:{"client-analytics":!0}}),function(e,r,t){var i,o,a={},s=x.c.apply(void 0,[t].concat((0,n.Z)(r.map((function(e){return e.params.keywords})))));r.forEach((function(r){var t,n,i,o,s,d={user:{ext:{data:_({},r.params.visitor)}},site:{ext:{data:_({},r.params.inventory)}}},c=e.imp.find((function(e){var r,t,n,i,o;return null===(r=e.ext)||void 0===r||null===(t=r.prebid)||void 0===t||null===(n=t.bidder)||void 0===n||null===(i=n.rubicon)||void 0===i||null===(o=i.video)||void 0===o?void 0:o.language}));c&&(d.site.content={language:null===(t=c.ext)||void 0===t||null===(n=t.prebid)||void 0===n||null===(i=n.bidder)||void 0===i||null===(o=i.rubicon)||void 0===o||null===(s=o.video)||void 0===s?void 0:s.language});a=(0,m.mergeDeep)(a,r.ortb2||{},d);var u=p.vc.getConfig("user.id");a.user.id=a.user.id||u})),(0,m.mergeDeep)(e,a),s&&s.length&&(0,g.N)(e,"site.keywords",s.join(","));null==e||(null===(i=e.ext)||void 0===i||(null===(o=i.prebid)||void 0===o||delete o.storedrequest))}(l,u,t.ortb2),null==l||(null===(o=l.ext)||void 0===o||(null===(d=o.prebid)||void 0===d||delete d.storedrequest)),!0===k.disableFloors&&delete l.ext.prebid.floors,u.filter((function(e){return"object"===(0,a.Z)(e.floorData)})).length>0&&(l.ext.prebid.floors={enabled:!1}),l},imp:function(e,r,t){var n,i,o=Z(r);if(!o.includes(l.Mk)||1!=o.length){var a=e(r,t);return a.id=r.adUnitCode,delete a.banner,p.vc.getConfig("s2sConfig.defaultTtl")&&(a.exp=p.vc.getConfig("s2sConfig.defaultTtl")),"atf"===r.params.position&&a.video&&(a.video.pos=1),"btf"===r.params.position&&a.video&&(a.video.pos=3),null===(n=a.ext)||void 0===n||(null===(i=n.prebid)||void 0===i||delete i.storedrequest),!0===r.params.bidonmultiformat&&o.length>1&&(0,g.N)(a,"ext.prebid.bidder.rubicon.formats",o),function(e,r){"USD"!=r.bidfloorcur&&(delete r.bidfloor,delete r.bidfloorcur);if(!r.bidfloor){var t=parseFloat((0,b.Z)(e,"params.floor"));isNaN(t)||(r.bidfloor=t,r.bidfloorcur="USD")}}(r,a),a}},bidResponse:function(e,r,t){var n,i=e(r,t);i.meta.mediaType=(0,b.Z)(r,"ext.prebid.type");var a=t.bidRequest,s="outstream"===(null===(n=a.mediaTypes.video)||void 0===n?void 0:n.context)?C(a,l.pX):[void 0,void 0],d=(0,o.Z)(s,2),c=d[0],u=d[1];return i.width=r.w||c||i.playerWidth,i.height=r.h||u||i.playerHeight,i.mediaType===l.pX&&"outstream"===a.mediaTypes.video.context&&(i.renderer=function(e){var r=v.Th.install({id:e.adId,url:k.rendererUrl||j,config:k.rendererConfig||{},loaded:!1,adUnitCode:e.adUnitCode});try{r.setRender(I)}catch(e){(0,m.logWarn)("Prebid Error calling setRender on renderer",e)}return r}(i)),(0,b.Z)(r,"ext.bidder.rp.advid")&&(0,g.N)(i,"meta.advertiserId",r.ext.bidder.rp.advid),i},context:{netRevenue:!1!==k.netRevenue,ttl:300},processors:c.X}),w={code:"rubicon",gvlid:52,supportedMediaTypes:[l.Mk,l.pX,l.B5],isBidRequestValid:function(e){var r=!0;if("object"!==(0,a.Z)(e.params))return!1;for(var t=0,n=["accountId","siteId","zoneId"];t<n.length;t++)if(e.params[n[t]]=parseInt(e.params[n[t]]),isNaN(e.params[n[t]]))return(0,m.logError)("Rubicon: wrong format of accountId or siteId or zoneId."),!1;var i=Z(e,!0);if(!i.length)return!1;i.includes(l.pX)&&(r=function(e){var r=!0,t=Object.prototype.toString.call([]),n=Object.prototype.toString.call(0),i={mimes:t,protocols:t,linearity:n,api:t};return Object.keys(i).forEach((function(t){Object.prototype.toString.call((0,b.Z)(e,"mediaTypes.video."+t))!==i[t]&&(r=!1,(0,m.logError)("Rubicon: mediaTypes.video."+t+" is required and must be of type: "+i[t]))})),r}(e));var o=[l.Mk,l.B5].filter((function(e){return i.includes(e)})).length>0;return o?r&&o:r},buildRequests:function(e,r){var t,n=[],i=[];if((t=e.filter((function(e){var r=Z(e)||[],t=r.length,n=e.params||{},i=n.bidonmultiformat,o=n.video;return 1===t&&(r.includes(l.pX)||r.includes(l.B5))||2===t&&!r.includes(l.Mk)||o&&r.includes(l.pX)||i&&(r.includes(l.pX)||r.includes(l.B5))})))&&t.length){var o=S.toORTB({bidRequests:t,bidderRequest:r});i.push({method:"POST",url:"https://".concat(k.videoHost||"prebid-server",".rubiconproject.com/openrtb2/auction"),data:o,bidRequest:t})}var a=e.filter((function(e){var r=Z(e)||[],t=e.params||{},n=t.bidonmultiformat,i=t.video;return r.includes(l.Mk)&&(1===r.length||n||!n&&!i||!n&&i&&!r.includes(l.pX))}));if(!0!==k.singleRequest)n=i.concat(a.map((function(e){var t=w.createSlotParams(e,r);return{method:"GET",url:"https://".concat(k.bannerHost||"fastlane",".rubiconproject.com/a/api/fastlane.json"),data:w.getOrderedParams(t).reduce((function(e,r){var n=t[r];return(0,m.isStr)(n)&&""!==n||(0,m.isNumber)(n)?"".concat(e).concat(P(r,n),"&"):e}),"")+"slots=1&rand=".concat(Math.random()),bidRequest:e}})));else{var s=a.reduce((function(e,r){return(e[r.params.siteId]=e[r.params.siteId]||[]).push(r),e}),{});n=i.concat(Object.keys(s).reduce((function(e,t){var n,i;return(n=s[t],i=10,n.map((function(e,r){return r%i==0?n.slice(r,r+i):null})).filter((function(e){return e}))).forEach((function(t){var n=w.combineSlotUrlParams(t.map((function(e){return w.createSlotParams(e,r)})));e.push({method:"GET",url:"https://".concat(k.bannerHost||"fastlane",".rubiconproject.com/a/api/fastlane.json"),data:w.getOrderedParams(n).reduce((function(e,r){var t=n[r];return(0,m.isStr)(t)&&""!==t||(0,m.isNumber)(t)?"".concat(e).concat(P(r,t),"&"):e}),"")+"slots=".concat(t.length,"&rand=").concat(Math.random()),bidRequest:t})})),e}),[]))}return n},getOrderedParams:function(e){var r=/^tg_v/,t=/^tg_i/,n=/^eid_|^tpid_/,i=["account_id","site_id","zone_id","size_id","alt_size_ids","p_pos","gdpr","gdpr_consent","us_privacy","gpp","gpp_sid","rp_schain"].concat(Object.keys(e).filter((function(e){return n.test(e)}))).concat(["x_liverampidl","ppuid","rf","p_geo.latitude","p_geo.longitude","kw"]).concat(Object.keys(e).filter((function(e){return r.test(e)}))).concat(Object.keys(e).filter((function(e){return t.test(e)}))).concat(["tk_flint","x_source.tid","l_pb_bid_id","p_screen_res","o_ae","o_cdep","rp_floor","rp_secure","tk_user_key"]);return i.concat(Object.keys(e).filter((function(e){return-1===i.indexOf(e)})))},combineSlotUrlParams:function(e){if(1===e.length)return e[0];var r=e.reduce((function(r,t,n){return Object.keys(t).forEach((function(i){r.hasOwnProperty(i)||(r[i]=new Array(e.length)),r[i].splice(n,1,t[i])})),r}),{}),t=new RegExp("^([^;]*)(;\\1)+$");return Object.keys(r).forEach((function(e){var n=r[e].join(";"),i=n.match(t);r[e]=i?i[1]:n})),r},createSlotParams:function(e,r){var t,n,i,s,d,c,u,v,g,x;e.startTime=(new Date).getTime();var y=e.params,h=C(e,"banner"),j=y.latLong||[],O=(0,o.Z)(j,2),S=O[0],I=O[1],R={account_id:y.accountId,site_id:y.siteId,zone_id:y.zoneId,size_id:h[0],alt_size_ids:h.slice(1).join(",")||void 0,rp_floor:(y.floor=parseFloat(y.floor))>=.01?y.floor:void 0,rp_secure:"1",tk_flint:"".concat(k.int_type||"pbjs_lite","_v8.28.0"),"x_source.tid":null===(t=r.ortb2)||void 0===t||null===(n=t.source)||void 0===n?void 0:n.tid,"x_imp.ext.tid":null===(i=e.ortb2Imp)||void 0===i||null===(s=i.ext)||void 0===s?void 0:s.tid,l_pb_bid_id:e.bidId,o_cdep:null===(d=e.ortb2)||void 0===d||null===(c=d.device)||void 0===c||null===(u=c.ext)||void 0===u?void 0:u.cdep,p_screen_res:[window.screen.width,window.screen.height].join("x"),tk_user_key:y.userId,"p_geo.latitude":isNaN(parseFloat(S))?void 0:parseFloat(S).toFixed(4),"p_geo.longitude":isNaN(parseFloat(I))?void 0:parseFloat(I).toFixed(4),"tg_fl.eid":e.code,rf:A(e,r)};if("function"==typeof e.getFloor&&!k.disableFloors){var T;try{T=e.getFloor({currency:"USD",mediaType:"banner",size:"*"})}catch(e){(0,m.logError)("Rubicon: getFloor threw an error: ",e)}R.rp_hard_floor="object"!==(0,a.Z)(T)||"USD"!==T.currency||isNaN(parseInt(T.floor))?void 0:T.floor}!0===y.bidonmultiformat&&(0,b.Z)(e,"mediaTypes")&&Object.keys(e.mediaTypes).length>1&&(R.p_formats=Object.keys(e.mediaTypes).join(","));var Z={1:"atf",3:"btf"}[(0,b.Z)(e,"mediaTypes.banner.pos")]||"";R.p_pos="atf"===y.position||"btf"===y.position?y.position:Z;var P,E,U=p.vc.getConfig("user.id");(U&&(R.ppuid=U),null!=e&&null!==(v=e.ortb2Imp)&&void 0!==v&&null!==(g=v.ext)&&void 0!==g&&g.ae&&(R.o_ae=1),e.userIdAsEids&&e.userIdAsEids.forEach((function(e){try{if("adserver.org"===e.source)R.tpid_tdid=e.uids[0].id,R["eid_adserver.org"]=e.uids[0].id;else if("liveintent.com"===e.source)R["tpid_liveintent.com"]=e.uids[0].id,R["eid_liveintent.com"]=e.uids[0].id,e.ext&&Array.isArray(e.ext.segments)&&e.ext.segments.length&&(R["tg_v.LIseg"]=e.ext.segments.join(","));else if("liveramp.com"===e.source)R.x_liverampidl=e.uids[0].id;else if("id5-sync.com"===e.source)R["eid_id5-sync.com"]="".concat(e.uids[0].id,"^").concat(e.uids[0].atype,"^").concat(e.uids[0].ext&&e.uids[0].ext.linkType||"");else{var r="rubiconproject.com"===e.source?e.uids[0].id:"".concat(e.uids[0].id,"^").concat(e.uids[0].atype||"");R["eid_".concat(e.source)]=r}if(!R.ppuid){var t=(0,f.sE)(e.uids,(function(e){return e.ext&&"ppuid"===e.ext.stype}));t&&t.id&&(R.ppuid=t.id)}}catch(r){(0,m.logWarn)("Rubicon: error reading eid:",e,r)}})),r.gdprConsent&&("boolean"==typeof r.gdprConsent.gdprApplies&&(R.gdpr=Number(r.gdprConsent.gdprApplies)),R.gdpr_consent=r.gdprConsent.consentString),r.uspConsent&&(R.us_privacy=encodeURIComponent(r.uspConsent)),null!==(x=r.gppConsent)&&void 0!==x&&x.gppString)&&(R.gpp=r.gppConsent.gppString,R.gpp_sid=null===(P=r.gppConsent)||void 0===P||null===(E=P.applicableSections)||void 0===E?void 0:E.toString());return R.rp_maxbids=r.bidLimit||1,function(e,r,t){var n={user:{ext:{data:_({},e.params.visitor)}},site:{ext:{data:_({},e.params.inventory)}}};e.params.keywords&&(n.site.keywords=(0,m.isArray)(e.params.keywords)?e.params.keywords.join(","):e.params.keywords);var i=(0,m.mergeDeep)({},e.ortb2||{},n),s=(0,b.Z)(e.ortb2Imp,"ext")||{},d=(0,b.Z)(e.ortb2Imp,"ext.data")||{},c=(0,b.Z)(e,"ortb2Imp.ext.gpid"),u={user:[4],site:[1,2,5,6]},p={user:"tg_v.",site:"tg_i.",adserver:"tg_i.dfp_ad_unit_code",pbadslot:"tg_i.pbadslot",keywords:"kw"},f=function(e,r,t){return"data"===r&&Array.isArray(e)?e.filter((function(e){return e.segment&&(0,b.Z)(e,"ext.segtax")&&u[t]&&-1!==u[t].indexOf((0,b.Z)(e,"ext.segtax"))})).map((function(e){var r=e.segment.filter((function(e){return e.id})).reduce((function(e,r){return e.push(r.id),e}),[]);if(r.length>0)return r.toString()})).toString():("object"!==(0,a.Z)(e)||Array.isArray(e))&&void 0!==e?Array.isArray(e)?e.filter((function(e){if("object"!==(0,a.Z)(e)&&void 0!==e)return e.toString();(0,m.logWarn)("Rubicon: Filtered value: ",e,"for key",r,": Expected value to be string, integer, or an array of strings/ints")})).toString():e.toString():void 0},v=function(e,r,n){var i=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],o=f(e,n,r),a=p[n]&&i?"".concat(p[n]):"data"===n?"".concat(p[r],"iab"):"".concat(p[r]).concat(n);t[a]=t[a]?t[a].concat(",",o):o};if(r===l.Mk){["site","user"].forEach((function(e){Object.keys(i[e]).forEach((function(r){"site"===e&&"content"===r&&i[e][r].data?v(i[e][r].data,e,"data"):"ext"!==r?v(i[e][r],e,r):i[e][r].data&&Object.keys(i[e].ext.data).forEach((function(r){v(i[e].ext.data[r],e,r,!1)}))}))})),Object.keys(d).forEach((function(e){"adserver"!==e?v(d[e],"site",e):"gam"===d[e].name&&v(d[e].adslot,name,e)})),c&&(t.p_gpid=c),t["tg_i.pbadslot"]&&delete t["tg_i.dfp_ad_unit_code"];var g=(0,b.Z)(i,"device.sua");g&&!1!==k.chEnabled&&(0,m.pick)(g,["architecture",function(e){return t.m_ch_arch=e},"bitness",function(e){return t.m_ch_bitness=e},"browsers",function(e){var r,n;if(Array.isArray(e)){var i=e.reduce((function(e,r){var t,n,i;return e[0].push('"'.concat(null==r?void 0:r.brand,'"|v="').concat(null==r||null===(t=r.version)||void 0===t?void 0:t[0],'"')),e[1].push('"'.concat(null==r?void 0:r.brand,'"|v="').concat(null==r||null===(n=r.version)||void 0===n||null===(i=n.join)||void 0===i?void 0:i.call(n,"."),'"')),e}),[[],[]]),a=(0,o.Z)(i,2),s=a[0],d=a[1];t.m_ch_ua=null==s||null===(r=s.join)||void 0===r?void 0:r.call(s,","),t.m_ch_full_ver=null==d||null===(n=d.join)||void 0===n?void 0:n.call(d,",")}},"mobile",function(e){return t.m_ch_mobile="?".concat(e)},"model",function(e){return t.m_ch_model=e},"platform",function(e){var r,n;t.m_ch_platform=null==e?void 0:e.brand,t.m_ch_platform_ver=null==e||null===(r=e.version)||void 0===r||null===(n=r.join)||void 0===n?void 0:n.call(r,".")}])}else Object.keys(s).length&&(0,m.mergeDeep)(t.imp[0].ext,s),c&&(t.imp[0].ext.gpid=c),(0,m.mergeDeep)(t,i)}(e,l.Mk,R),!0===p.vc.getConfig("coppa")&&(R.coppa=1),e.schain&&z(e.schain)&&(R.rp_schain=w.serializeSupplyChain(e.schain)),R},serializeSupplyChain:function(e){if(!z(e))return"";var r=e.ver,t=e.complete,n=e.nodes;return"".concat(r,",").concat(t,"!").concat(w.serializeSupplyChainNodes(n))},serializeSupplyChainNodes:function(e){var r=["asi","sid","hp","rid","name","domain"];return e.map((function(e){return r.map((function(r){return encodeURIComponent(e[r]||"")})).join(",")})).join("!")},interpretResponse:function(e,r){var t;e=e.body;var n=r.data;if(!e||"object"!==(0,a.Z)(e))return[];if(e.seatbid){var i=(0,b.Z)(e,"ext.errors.rubicon");return Array.isArray(i)&&i.length>0&&(0,m.logWarn)("Rubicon: Error in video response"),S.fromORTB({request:n,response:e}).bids}var s,d=e.ads,c=0,u=r.bidRequest;if("object"===(0,a.Z)(u)&&!Array.isArray(u)&&Z(u).includes(l.pX)&&"object"===(0,a.Z)(d)&&(d=d[u.adUnitCode]),!Array.isArray(d)||d.length<1)return[];var p=d.reduce((function(r,t,n){if(t.impression_id&&s===t.impression_id?c++:s=t.impression_id,"ok"!==t.status)return r;var i,d,p=Array.isArray(u)?u[n-c]:u;if(p&&"object"===(0,a.Z)(p)){var f={requestId:p.bidId,currency:"USD",creativeId:t.creative_id||"".concat(t.network||"","-").concat(t.advertiser||""),cpm:t.cpm||0,dealId:t.deal,ttl:300,netRevenue:!1!==k.netRevenue,rubicon:{advertiserId:t.advertiser,networkId:t.network},meta:{advertiserId:t.advertiser,networkId:t.network,mediaType:l.Mk}};if(t.creative_type&&(f.mediaType=t.creative_type),t.adomain&&(f.meta.advertiserDomains=Array.isArray(t.adomain)?t.adomain:[t.adomain]),t.creative_type===l.pX)f.width=p.params.video.playerWidth,f.height=p.params.video.playerHeight,f.vastUrl=t.creative_depot_url,f.impression_id=t.impression_id,f.videoCacheKey=t.impression_id;else{f.ad=(i=t.script,d=t.impression_id,"<html>\n<head><script type='text/javascript'>inDapIF=true;<\/script></head>\n<body style='margin : 0; padding: 0;'>\n\x3c!-- Rubicon Project Ad Tag --\x3e\n<div data-rp-impression-id='".concat(d,"'>\n<script type='text/javascript'>").concat(i,"<\/script>\n</div>\n</body>\n</html>"));var v=O[t.size_id].split("x").map((function(e){return Number(e)})),g=(0,o.Z)(v,2);f.width=g[0],f.height=g[1]}f.rubiconTargeting=(Array.isArray(t.targeting)?t.targeting:[]).reduce((function(e,r){return e[r.key]=r.values[0],e}),{rpfl_elemid:p.adUnitCode}),r.push(f)}else(0,m.logError)("Rubicon: bidRequest undefined at index position:".concat(n),u,e);return r}),[]).sort((function(e,r){return(r.cpm||0)-(e.cpm||0)})),f=null===(t=e.component_auction_config)||void 0===t?void 0:t.map((function(e){return{config:e,bidId:e.bidId}}));return f?{bids:p,fledgeAuctionConfigs:f}:p},getUserSyncs:function(e,r,t,n,i){if(!E&&e.iframeEnabled){var o,a={};if(t&&("boolean"==typeof t.gdprApplies&&(a.gdpr=Number(t.gdprApplies)),"string"==typeof t.consentString&&(a.gdpr_consent=t.consentString)),n&&(a.us_privacy=encodeURIComponent(n)),null!=i&&i.gppString)a.gpp=i.gppString,a.gpp_sid=null===(o=i.applicableSections)||void 0===o?void 0:o.toString();return a=Object.keys(a).length?"?".concat((0,m.formatQS)(a)):"",E=!0,{type:"iframe",url:"https://".concat(k.syncHost||"eus",".rubiconproject.com/usync.html")+a}}},transformBidParams:function(e,r){return(0,y.u)({accountId:"number",siteId:"number",zoneId:"number"},e)}};function A(e,r){var t;return t=e.params.referrer?e.params.referrer:r.refererInfo.page,e.params.secure?t.replace(/^http:/i,"https:"):t}function I(e){var r,t=document.getElementById(e.adUnitCode);(r=t.querySelector("div[id^='google_ads']"))&&r.style.setProperty("display","none"),function(e){var r=e.querySelector("script[id^='sas_script']"),t=r&&r.nextSibling;t&&"iframe"===t.localName&&t.style.setProperty("display","none")}(t);var n=e.renderer.getConfig();e.renderer.push((function(){window.MagniteApex.renderAd({width:e.width,height:e.height,vastUrl:e.vastUrl,placement:{attachTo:t,align:n.align||"center",position:n.position||"append"},closeButton:n.closeButton||!1,label:n.label||void 0,collapse:n.collapse||!0})}))}function C(e,r){var t=e.params;if(r===l.pX){var n=[];return t.video&&t.video.playerWidth&&t.video.playerHeight?n=[t.video.playerWidth,t.video.playerHeight]:Array.isArray((0,b.Z)(e,"mediaTypes.video.playerSize"))&&1===e.mediaTypes.video.playerSize.length?n=e.mediaTypes.video.playerSize[0]:Array.isArray(e.sizes)&&e.sizes.length>0&&Array.isArray(e.sizes[0])&&e.sizes[0].length>1&&(n=e.sizes[0]),n}var i=[];return Array.isArray(t.sizes)?i=t.sizes:void 0!==(0,b.Z)(e,"mediaTypes.banner.sizes")?i=R(e.mediaTypes.banner.sizes):Array.isArray(e.sizes)&&e.sizes.length>0?i=R(e.sizes):(0,m.logWarn)("Rubicon: no sizes are setup or found"),function(e){var r=[15,2,9];return e.sort((function(e,t){var n=r.indexOf(e),i=r.indexOf(t);return n>-1||i>-1?-1===n?1:-1===i?-1:n-i:e-t}))}(i)}function R(e){return(0,m.parseSizesInput)(e).reduce((function(e,r){var t=parseInt(O[r],10);return t&&e.push(t),e}),[])}function T(e){var r=void 0!==(0,b.Z)(e,"mediaTypes.".concat(l.pX)),t=void 0!==(0,b.Z)(e,"mediaTypes.".concat(l.Mk)),n=void 0!==(0,b.Z)(e,"params.bidonmultiformat"),i="object"!==(0,a.Z)((0,b.Z)(e,"params.video"));return!(!r||!n)||(t&&i&&(r=!1),r&&i&&(0,g.N)(e,"params.video",{}),r)}function Z(e){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=[];if(T(e)){if(-1===["outstream","instream"].indexOf((0,b.Z)(e,"mediaTypes.".concat(l.pX,".context"))))return r&&(0,m.logError)("Rubicon: mediaTypes.video.context must be outstream or instream"),t;if(C(e,l.pX).length<2)return r&&(0,m.logError)("Rubicon: could not determine the playerSize of the video"),t;r&&(0,m.logMessage)("Rubicon: making video request for adUnit",e.adUnitCode),t.push(l.pX)}if(void 0!==(0,b.Z)(e,"mediaTypes.".concat(l.B5))&&t.push(l.B5),void 0!==(0,b.Z)(e,"mediaTypes.".concat(l.Mk))){if(0===C(e,l.Mk).length)return r&&(0,m.logError)("Rubicon: could not determine the sizes for banner request"),t;r&&(0,m.logMessage)("Rubicon: making banner request for adUnit",e.adUnitCode),t.push(l.Mk)}return t}function z(e){var r=!1,t=["asi","sid","hp"];return e.nodes?((r=e.nodes.reduce((function(e,r){return e?t.every((function(e){return r.hasOwnProperty(e)})):e}),!0))||(0,m.logError)("Rubicon: required schain params missing"),r):r}function P(e,r){return"rp_schain"===e?"rp_schain=".concat(r):"".concat(e,"=").concat(encodeURIComponent(r))}var E=!1;(0,u.dX)(w),(0,s.z)("rubiconBidAdapter")},26372:function(e,r,t){t.d(r,{DZ:function(){return a},Px:function(){return s},TP:function(){return c},YC:function(){return d},Z:function(){return o},f8:function(){return v},fP:function(){return m},gm:function(){return n},md:function(){return u}});var n=["request","imp","bidResponse","response"],i=["default","pbs"],o=n[0],a=n[1],s=n[2],d=n[3],c=i[0],u=i[1],p=new Set(n);var l,f=(l={},{registerOrtbProcessor:function(e){var r=e.type,t=e.name,i=e.fn,o=e.priority,a=void 0===o?0:o,s=e.dialects,d=void 0===s?[c]:s;if(!p.has(r))throw new Error("ORTB processor type must be one of: ".concat(n.join(", ")));d.forEach((function(e){l.hasOwnProperty(e)||(l[e]={}),l[e].hasOwnProperty(r)||(l[e][r]={}),l[e][r][t]={priority:a,fn:i}}))},getProcessors:function(e){return l[e]||{}}}),v=f.registerOrtbProcessor,m=f.getProcessors}},function(e){e.O(0,[85279,33402,93157,70951,38409],(function(){return r=40060,e(e.s=r);var r}));e.O()}]);
  (self.pbjsChunk=self.pbjsChunk||[]).push([[31215],{13522:function(e,r,a){var t=a(78640),i=a(20265),o=a(64358),n=a(24679),d=a(3193),s=a(14699),p={code:"smartadserver",gvlid:45,aliases:["smart"],supportedMediaTypes:[n.Mk,n.pX],isBidRequestValid:function(e){return!!(e.params&&e.params.siteId&&e.params.pageId&&e.params.formatId)},serializeSupplyChain:function(e){if(!e||!e.nodes)return null;var r=["asi","sid","hp","rid","name","domain"];return"".concat(e.ver,",").concat(e.complete,"!")+e.nodes.map((function(e){return r.map((function(r){return e[r]?encodeURIComponent(e[r]):""})).join(",")})).join("!")},adaptBannerSizes:function(e){return e.map((function(e){return{w:e[0],h:e[1]}}))},fillPayloadForVideoBidRequest:function(e,r,a){var t=r.playerSize[0];e.isVideo="instream"===r.context,e.mediaType=n.pX,e.videoData={videoProtocol:this.getProtocolForVideoBidRequest(r,a),playerWidth:t[0],playerHeight:t[1],adBreak:this.getStartDelayForVideoBidRequest(r,a)}},getProtocolForVideoBidRequest:function(e,r){return void 0!==r&&r.protocol?r.protocol:void 0!==e&&Array.isArray(e.protocols)?Math.max.apply(Math,e.protocols):null},getStartDelayForVideoBidRequest:function(e,r){if(void 0!==r&&r.startDelay)return r.startDelay;if(void 0!==e){if(0==e.startdelay)return 1;if(-1==e.startdelay)return 2;if(-2==e.startdelay)return 3}return 2},createServerRequest:function(e,r){return{method:"POST",url:(void 0!==r?r:"https://prg.smartadserver.com")+"/prebid/v1",data:JSON.stringify(e)}},buildRequests:function(e,r){var a=d.vc.getConfig("currency.adServerCurrency"),t=(0,i.Z)(r,"ortb2.user.data",d.vc.getAnyConfig("ortb2.user.data")),s=(0,i.Z)(r,"ortb2.site.content.data",d.vc.getAnyConfig("ortb2.site.content.data"));return e.reduce((function(e,u){var l,c,m={siteid:u.params.siteId,pageid:u.params.pageId,formatid:u.params.formatId,currencyCode:a,targeting:u.params.target&&""!==u.params.target?u.params.target:void 0,buid:u.params.buId&&""!==u.params.buId?u.params.buId:void 0,appname:u.params.appName&&""!==u.params.appName?u.params.appName:void 0,ckid:u.params.ckId||0,tagId:u.adUnitCode,pageDomain:r&&r.refererInfo&&r.refererInfo.page?r.refererInfo.page:void 0,transactionId:null===(l=u.ortb2Imp)||void 0===l||null===(c=l.ext)||void 0===c?void 0:c.tid,timeout:d.vc.getConfig("bidderTimeout"),bidId:u.bidId,prebidVersion:"8.28.0",schain:p.serializeSupplyChain(u.schain),sda:t,sdc:s},f=(0,i.Z)(u,"ortb2Imp.ext.gpid",(0,i.Z)(u,"ortb2Imp.ext.data.pbadslot",""));f&&(m.gpid=f),r&&(r.gdprConsent&&(m.addtl_consent=r.gdprConsent.addtlConsent,m.gdpr_consent=r.gdprConsent.consentString,m.gdpr=r.gdprConsent.gdprApplies),r.gppConsent&&(m.gpp=r.gppConsent.gppString,m.gpp_sid=r.gppConsent.applicableSections),r.uspConsent&&(m.us_privacy=r.uspConsent)),u&&u.userIdAsEids&&(m.eids=u.userIdAsEids),r&&r.uspConsent&&(m.us_privacy=r.uspConsent);var g=(0,i.Z)(u,"mediaTypes.banner"),v=(0,i.Z)(u,"mediaTypes.video"),y=v&&("instream"===v.context||"outstream"===v.context);if(g||y){var b;if(g){if(b=n.Mk,m.sizes=p.adaptBannerSizes(g.sizes),y){var h=(0,o.deepClone)(m);p.fillPayloadForVideoBidRequest(h,v,u.params.video),h.bidfloor=u.params.bidfloor||p.getBidFloor(u,a,n.pX),e.push(p.createServerRequest(h,u.params.domain))}}else b=n.pX,p.fillPayloadForVideoBidRequest(m,v,u.params.video);m.bidfloor=u.params.bidfloor||p.getBidFloor(u,a,b),e.push(p.createServerRequest(m,u.params.domain))}else e.push({});return e}),[])},interpretResponse:function(e,r){var a=[],t=e.body;try{if(t&&!t.isNoAd&&(t.ad||t.adUrl)){var i=JSON.parse(r.data),d={requestId:i.bidId,cpm:t.cpm,width:t.width,height:t.height,creativeId:t.creativeId,dealId:t.dealId,currency:t.currency,netRevenue:t.isNetCpm,ttl:t.ttl,dspPixels:t.dspPixels,meta:{advertiserDomains:t.adomain?t.adomain:[]}};i.mediaType===n.pX?(d.mediaType=n.pX,d.vastUrl=t.adUrl,d.vastXml=t.ad,d.content=t.ad):(d.adUrl=t.adUrl,d.ad=t.ad),a.push(d)}}catch(e){(0,o.logError)("Error while parsing smart server response",e)}return a},getBidFloor:function(e,r,a){if(!(0,o.isFn)(e.getFloor))return 0;var t=e.getFloor({currency:r||"USD",mediaType:a,size:"*"});return(0,o.isPlainObject)(t)&&!isNaN(t.floor)?t.floor:0},getUserSyncs:function(e,r){var a=[];return e.iframeEnabled&&r.length>0&&null!=r[0].body.cSyncUrl?a.push({type:"iframe",url:r[0].body.cSyncUrl}):e.pixelEnabled&&r.length>0&&void 0!==r[0].body.dspPixels&&r[0].body.dspPixels.forEach((function(e){a.push({type:"image",url:e})})),a}};(0,s.dX)(p),(0,t.z)("smartadserverBidAdapter")}},function(e){e.O(0,[38409],(function(){return r=13522,e(e.s=r);var r}));e.O()}]);
  (self.pbjsChunk=self.pbjsChunk||[]).push([[88029],{76401:function(e,t,r){var n=r(4942),i=r(78640),o=r(64358),a=r(20265),d=r(14699),s=r(15164);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u="teads",l=12,v=11,g=0,m=22,y="_tfpvi",f=(0,s.df)({bidderCode:u}),I={code:u,gvlid:132,supportedMediaTypes:["video","banner"],isBidRequestValid:function(e){var t=!1;if(void 0!==e.params){var r=P((0,o.getValue)(e.params,"placementId")),n=P((0,o.getValue)(e.params,"pageId"));t=r&&n}return t||(0,o.logError)("Teads placementId and pageId parameters are required. Bid aborted."),t},buildRequests:function(e,t){var r,n,i,o,d,s,c,u=e.map(O),I=window.top,P=p(p({referrer:h(t),pageReferrer:document.referrer,pageTitle:b().slice(0,300),pageDescription:w().slice(0,300),networkBandwidth:(c=window.navigator,c&&c.connection&&c.connection.downlink>=0?c.connection.downlink.toString():""),timeToFirstByte:S(window),data:u,deviceWidth:screen.width,screenOrientation:null===(r=screen.orientation)||void 0===r?void 0:r.type,historyLength:null===(n=I.history)||void 0===n?void 0:n.length,viewportHeight:null===(i=I.visualViewport)||void 0===i?void 0:i.height,viewportWidth:null===(o=I.visualViewport)||void 0===o?void 0:o.width,hardwareConcurrency:null===(d=I.navigator)||void 0===d?void 0:d.hardwareConcurrency,deviceMemory:null===(s=I.navigator)||void 0===s?void 0:s.deviceMemory,hb_version:"8.28.0"},function(e){var t={unifiedId2:"uid2.id",liveRampId:"idl_env",lotamePanoramaId:"lotamePanoramaId",id5Id:"id5id.uid",criteoId:"criteoId",yahooConnectId:"connectId",quantcastId:"quantcastId",epsilonPublisherLinkId:"publinkId",publisherFirstPartyViewerId:"pubcid",merkleId:"merkleId.id",kinessoId:"kpuid"},r={};for(var n in t){var i=t[n],o=(0,a.Z)(e,"0.userId.".concat(i));o&&(r[n]=o)}return r}(e)),function(e){var t=(0,a.Z)(e,"0.userId.teadsId");if(t)return{firstPartyCookieTeadsId:t};if(f.cookiesAreEnabled(null)){var r=f.getCookie(y,null);if(r)return{firstPartyCookieTeadsId:r}}return{}}(e)),q=e[0];q.schain&&(P.schain=q.schain);var T=t.gdprConsent;if(t&&T){var k="boolean"==typeof T.gdprApplies,B="string"==typeof T.consentString,j=k?function(e,t){var r=l;e?t&&!t.isServiceSpecific&&(r=v):r=g;return r}(T.gdprApplies,T.vendorData):m;P.gdpr_iab={consent:B?T.consentString:"",status:j,apiVersion:T.apiVersion}}t&&t.uspConsent&&(P.us_privacy=t.uspConsent);var C=(0,a.Z)(q,"ortb2.device.sua");return C&&(P.userAgentClientHints=C),{method:"POST",url:"https://a.teads.tv/hb/bid-request",data:JSON.stringify(P)}},interpretResponse:function(e,t){var r=[];return(e=e.body).responses&&e.responses.forEach((function(e){var t={cpm:e.cpm,width:e.width,height:e.height,currency:e.currency,netRevenue:!0,ttl:e.ttl,meta:{advertiserDomains:e&&e.adomain?e.adomain:[]},ad:e.ad,requestId:e.bidId,creativeId:e.creativeId,placementId:e.placementId};e.dealId&&(t.dealId=e.dealId),r.push(t)})),r}};function h(e){var t="";return e&&e.refererInfo&&e.refererInfo.page&&(t=e.refererInfo.page),t}function b(){try{var e=window.top.document.querySelector('meta[property="og:title"]');return window.top.document.title||e&&e.content||""}catch(e){var t=document.querySelector('meta[property="og:title"]');return document.title||t&&t.content||""}}function w(){var e;try{e=window.top.document.querySelector('meta[name="description"]')||window.top.document.querySelector('meta[property="og:description"]')}catch(t){e=document.querySelector('meta[name="description"]')||document.querySelector('meta[property="og:description"]')}return e&&e.content||""}function S(e){var t=e.performance||e.webkitPerformance||e.msPerformance||e.mozPerformance,r=t&&"function"==typeof t.getEntriesByType&&"[object Function]"===Object.prototype.toString.call(t.getEntriesByType)&&t.getEntriesByType("navigation")[0]&&t.getEntriesByType("navigation")[0].responseStart&&t.getEntriesByType("navigation")[0].requestStart&&t.getEntriesByType("navigation")[0].responseStart>0&&t.getEntriesByType("navigation")[0].requestStart>0&&Math.round(t.getEntriesByType("navigation")[0].responseStart-t.getEntriesByType("navigation")[0].requestStart);if(r)return r.toString();var n=t&&t.timing.responseStart&&t.timing.requestStart&&t.timing.responseStart>0&&t.timing.requestStart>0&&t.timing.responseStart-t.timing.requestStart;return n?n.toString():""}function O(e){var t,r,n={},i=(0,o.getValue)(e.params,"placementId"),d=(0,o.getValue)(e.params,"pageId"),s=(0,a.Z)(e,"ortb2Imp.ext.gpid"),c=(0,a.Z)(e,"mediaTypes.video.plcmt");return n.sizes=function(e){return(0,o.parseSizesInput)(function(e){var t=(0,a.Z)(e,"mediaTypes.video.playerSize"),r=(0,a.Z)(e,"mediaTypes.video.sizes"),n=(0,a.Z)(e,"mediaTypes.banner.sizes");return(0,o.isArray)(n)||(0,o.isArray)(t)||(0,o.isArray)(r)?[n,r,t].reduce((function(e,t){return(0,o.isArray)(t)&&((0,o.isArray)(t[0])?t.forEach((function(t){e.push(t)})):e.push(t)),e}),[]):e.sizes}(e))}(e),n.bidId=(0,o.getBidIdParameter)("bidId",e),n.bidderRequestId=(0,o.getBidIdParameter)("bidderRequestId",e),n.placementId=parseInt(i,10),n.pageId=parseInt(d,10),n.adUnitCode=(0,o.getBidIdParameter)("adUnitCode",e),n.transactionId=(null===(t=e.ortb2Imp)||void 0===t||null===(r=t.ext)||void 0===r?void 0:r.tid)||"",s&&(n.gpid=s),c&&(n.videoPlcmt=c),n}function P(e){return parseInt(e)>0}(0,d.dX)(I),(0,i.z)("teadsBidAdapter")}},function(e){e.O(0,[38409],(function(){return t=76401,e(e.s=t);var t}));e.O()}]);
  (self.pbjsChunk=self.pbjsChunk||[]).push([[9215],{82547:function(e,n,r){var t=r(89062),o=r(71002),i=r(93324),a=r(4942),u=r(78640),c=r(34614),s=r(3193),f=r(52021),l=r(34516),d=r(86104),g=r(5644),m=r(92797),v=r(64358),b=r(20265),p=new Map;function h(e){var n={};function r(e){var r,o,i=JSON.stringify([null===(r=e.source)||void 0===r?void 0:r.toLowerCase(),e.ext]);n.hasOwnProperty(i)?(o=n[i].uids).push.apply(o,(0,t.Z)(e.uids)):n[i]=e}return Object.entries(e).forEach((function(e){var n=(0,i.Z)(e,2),t=n[0],o=n[1];o=Array.isArray(o)?o:[o],("pubProvidedId"===t?(0,v.deepClone)(o):o.map((function(e){return function(e,n){var r=p.get(n);if(r&&e){var t={};t.source=(0,v.isFn)(r.getSource)?r.getSource(e):r.source;var o=(0,v.isFn)(r.getValue)?r.getValue(e):e;if((0,v.isStr)(o)){var i={id:o,atype:r.atype};if((0,v.isFn)(r.getUidExt)){var a=r.getUidExt(e);a&&(i.ext=a)}if(t.uids=[i],(0,v.isFn)(r.getEidExt)){var u=r.getEidExt(e);u&&(t.ext=u)}return t}}return null}(e,t)}))).filter((function(e){return null!=e})).forEach(r)})),Object.values(n)}var y,I,w,E,O,S,D=r(15164),j=r(96475),P=r(7563),k=r(68792),A=r(26372),C=r(99128),N=r(38196),Z=r(9633),T=r(50571),x=r(74947),U=r(10286),F="User ID",R=D.c$,L=D.Dp,_="_pbjs_id_optout",q=(0,D.eA)("userId"),G={isAllowed:T.xD},M=!1,B=[],W=[],J={},z=[],V=function(){return null==S&&(S=(0,C.V6)()),S};function Y(e){return V().fork().renameWith((function(n){return["userId.mod.".concat(n),"userId.mods.".concat(e,".").concat(n)]}))}function $(e,n){n=n||e.storageMgr;var r="function"==typeof e.submodule.domainOverride?e.submodule.domainOverride():null,t=e.config.storage.name;return function(e,o,i){n.setCookie(t+(e||""),o,i,"Lax",r)}}function H(e,n){var r=e.config.storage,t=e.storageMgr;try{var o=new Date(Date.now()+864e5*r.expires).toUTCString(),i=(0,v.isPlainObject)(n)?JSON.stringify(n):n;if(r.type===R){var a=$(e);a(null,i,o),a("_cst",he(),o),"number"==typeof r.refreshInSeconds&&a("_last",(new Date).toUTCString(),o)}else r.type===L&&(t.setDataInLocalStorage("".concat(r.name,"_exp"),o),t.setDataInLocalStorage("".concat(r.name,"_cst"),he()),t.setDataInLocalStorage(r.name,encodeURIComponent(i)),"number"==typeof r.refreshInSeconds&&t.setDataInLocalStorage("".concat(r.name,"_last"),(new Date).toUTCString()))}catch(e){(0,v.logError)(e)}}function K(e){var n,r,t,o;switch(null===(n=e.config)||void 0===n||null===(r=n.storage)||void 0===r?void 0:r.type){case R:var i=$(e,q),a=new Date(Date.now()-864e5).toUTCString();t=function(e){return i(e,"",a)},o=["","_last","_cst"];break;case L:t=function(n){return q.removeDataFromLocalStorage(e.config.storage.name+n)},o=["","_last","_exp","_cst"]}t&&o.forEach((function(e){try{t(e)}catch(e){(0,v.logError)(e)}}))}function Q(e){var n=(0,v.getPrebidInternal)().setEidPermissions;"function"==typeof n&&(0,v.isArray)(e)&&n(function(e){var n=[];return e.filter((function(e){return(0,v.isPlainObject)(e.idObj)&&Object.keys(e.idObj).length})).forEach((function(e){Object.keys(e.idObj).forEach((function(r){var t=p.get(r)||{};(0,b.Z)(e,"config.bidders")&&Array.isArray(e.config.bidders)&&t.source&&n.push({source:t.source,bidders:e.config.bidders})}))})),n}(e))}function X(e){var n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,t=e.storageMgr,o=e.config.storage,i=r?"".concat(o.name,"_").concat(r):o.name;try{if(o.type===R)n=t.getCookie(i);else if(o.type===L){var a=t.getDataFromLocalStorage("".concat(o.name,"_exp"));""===a?n=t.getDataFromLocalStorage(i):a&&new Date(a).getTime()-Date.now()>0&&(n=decodeURIComponent(t.getDataFromLocalStorage(i)))}"string"==typeof n&&"{"===n.trim().charAt(0)&&(n=JSON.parse(n))}catch(e){(0,v.logError)(e)}return n}function ee(e,n,r){n=V().fork().startTiming("userId.callbacks.total").stopBefore(n);var t=(0,v.delayExecution)((function(){clearTimeout(undefined),n()}),e.length);e.forEach((function(e){var n=Y(e.submodule.name).startTiming("callback").stopBefore(t);try{e.callback((function(t){t?(e.config.storage&&H(e,t),e.idObj=e.submodule.decode(t,e.config),Ie(ne(r))):(0,v.logInfo)("".concat(F,": ").concat(e.submodule.name," - request id responded with an empty value")),n()}),X.bind(null,e))}catch(r){(0,v.logError)("Error in userID module '".concat(e.submodule.name,"':"),r),n()}e.callback=void 0}))}function ne(e){return Array.isArray(e)&&e.length?te(e):{}}function re(e,n,r){return Object.fromEntries(Object.entries(e.reduce((function(e,t){var o=n(t);return o&&Object.keys(o).forEach((function(n){var i,a=null===(i=J[n])||void 0===i?void 0:i.indexOf(r(t)),u={priority:(0,v.isNumber)(a)?a:-1,value:o[n]};if(e[n]){var c=u.priority>e[n].priority?u:e[n];e[n]=c}else e[n]=u})),e}),{})).map((function(e){var n=(0,i.Z)(e,2);return[n[0],n[1].value]})))}function te(e){return re(e.filter((function(e){return(0,v.isPlainObject)(e.idObj)&&Object.keys(e.idObj).length})),(function(e){return e.idObj}),(function(e){return e.submodule.name}))}function oe(e,n){[e].some((function(e){return!Array.isArray(e)||!e.length}))||e.forEach((function(e){e.bids&&(0,v.isArray)(e.bids)&&e.bids.forEach((function(e){var r=function(e,n){return Array.isArray(e)&&e.length&&n?te(e.filter((function(e){return!e.config.bidders||!(0,v.isArray)(e.config.bidders)||(0,c.q9)(e.config.bidders,n)}))):{}}(n,e.bidder);Object.keys(r).length&&(e.userId=r,e.userIdAsEids=h(r))}))}))}var ie,ae={};function ue(){var e,n,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=r.delay,o=void 0===t?k.Z.timeout:t,i=(0,k.P)(),a=(0,k.P)(),u=!1;function c(r){return n=V().fork(),null!=e&&e.reject(ae),e=(0,k.P)(),k.Z.race([r,e.promise]).finally(n.startTiming("userId.total"))}var s=y,d=B;function b(e){return function(){if(s===y&&d===B)return e.apply(void 0,arguments)}}function p(){return l.NO.promise.finally(n.startTiming("userId.init.consent"))}var h=c(k.Z.all([m.Cd,i.promise]).then(p).then(b((function(){we(s,d)}))).then((function(){return a.promise.finally(n.startTiming("userId.callbacks.pending"))})).then(b((function(){var e=s.filter((function(e){return(0,v.isFn)(e.callback)}));if(e.length)return new k.Z((function(n){return ee(e,n,s)}))}))));return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.refresh,r=void 0!==n&&n,t=e.submoduleNames,l=void 0===t?null:t,m=e.ready,v=void 0!==m&&m;return v&&!u&&(u=!0,i.resolve(),w>0?a.resolve():f.on(g.FP.AUCTION_END,(function e(){f.off(g.FP.AUCTION_END,e),o(I).then(a.resolve)}))),r&&u&&(h=c(h.catch((function(){return null})).then(p).then(b((function(){var e=we(s,d.filter((function(e){return null==l||l.includes(e.submodule.name)})),!0).filter((function(e){return null!=e.callback}));if(e.length)return new k.Z((function(n){return ee(e,n,s)}))}))))),h}}function ce(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le()||[],n=E&&e.find((function(e){return e.source===E}));if(n&&"string"==typeof(0,b.Z)(n,"uids.0.id")){var r=n.uids[0].id.replace(/[\W_]/g,"");if(r.length>=32&&r.length<=150)return r;(0,v.logWarn)("User ID - Googletag Publisher Provided ID for ".concat(E," is not between 32 and 150 characters - ").concat(r))}}var se=(0,C.g3)("userId",(function(e,n){var r=this,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=t.delay,i=void 0===o?k.Z.timeout:o,a=t.getIds,c=void 0===a?pe:a;k.Z.race([c().catch((function(){return null})),i(w)]).then((function(){oe(n.adUnits||(0,u.R)().adUnits,y),V().join((0,C.Bf)(n.metrics),{propagate:!1,includeGroups:!0}),e.call(r,n)}))}));function fe(){return ne(y)}function le(){return h(fe())}function de(e){return h(function(e,n){if(!Array.isArray(e)||!e.length)return{};var r=te(e),t=Object.keys(r).find((function(e){var r=p.get(e);return(null==r?void 0:r.source)===n||(0,v.isFn)(null==r?void 0:r.getSource)&&r.getSource()===n}));return t?(0,a.Z)({},t,r[t]):[]}(y,e))[0]}function ge(e,n,r){return ie().then((function(){var t={};if((0,v.isFn)(r)){(0,v.logInfo)("".concat(F," - Getting encrypted signal from custom function : ").concat(r.name," & source : ").concat(e," "));var o=r(e);t[e]=o?me(o):null}else{var i=de(e);(0,v.logInfo)("".concat(F," - Getting encrypted signal for eids :").concat(JSON.stringify(i))),(0,v.isEmpty)(i)||(t[i.source]=!0===n?me(i):i.uids[0].id)}return(0,v.logInfo)("".concat(F," - Fetching encrypted eids: ").concat(t[e])),t[e]}))}function me(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r="";if(1===n)r="object"===(0,o.Z)(e)?window.btoa(JSON.stringify(e)):window.btoa(e);return"".concat(n,"||").concat(r)}function ve(){if((0,v.isGptPubadsDefined)()){window.googletag.secureSignalProviders=window.googletag.secureSignalProviders||[];var e=s.vc.getConfig("userSync.encryptedSignalSources");if(e){var n=e.registerDelay||0;setTimeout((function(){e.sources&&e.sources.forEach((function(e){var n=e.source,r=e.encrypt,t=e.customFunc;n.forEach((function(e){window.googletag.secureSignalProviders.push({id:e,collectorFunction:function(){return ge(e,r,t)}})}))}))}),n)}else(0,v.logWarn)("".concat(F," - ESP : encryptedSignalSources config not defined under userSync Object"))}}function be(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.submoduleNames,r=arguments.length>1?arguments[1]:void 0;return ie({refresh:!0,submoduleNames:n}).then((function(){return r&&(0,v.isFn)(r)&&r(),fe()}))}function pe(){return ie().then((function(){return fe()}),(function(e){return e===ae?Promise.resolve().then(pe):((0,v.logError)("Error initializing userId",e),k.Z.reject(e))}))}function he(){for(var e=Number(l.NO.hash),n=[];e>0;)n.push(String.fromCharCode(255&e)),e>>>=8;return btoa(n.join())}function ye(e,n,r){var t=l.rp.getConsentData();if(e.config.storage){var o,i=X(e),a=!1;if("number"==typeof e.config.storage.refreshInSeconds){var u=new Date(X(e,"last"));a=u&&Date.now()-u.getTime()>1e3*e.config.storage.refreshInSeconds}!i||a||n||function(e){var n=X(e,"cst");return!n||n!==he()}(e)?o=e.submodule.getId(e.config,t,i):"function"==typeof e.submodule.extendId&&(o=e.submodule.extendId(e.config,t,i)),(0,v.isPlainObject)(o)&&(o.id&&(H(e,o.id),i=o.id),"function"==typeof o.callback&&(e.callback=o.callback)),i&&(e.idObj=e.submodule.decode(i,e.config))}else if(e.config.value)e.idObj=e.config.value;else{var c=e.submodule.getId(e.config,t,void 0);(0,v.isPlainObject)(c)&&("function"==typeof c.callback&&(e.callback=c.callback),c.id&&(e.idObj=e.submodule.decode(c.id,e.config)))}Ie(ne(r))}function Ie(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe();if(e&&E){var n=ce(h(e));n&&((0,v.isGptPubadsDefined)()?window.googletag.pubads().setPublisherProvidedId(n):(window.googletag=window.googletag||{},window.googletag.cmd=window.googletag.cmd||[],window.googletag.cmd.push((function(){window.googletag.pubads().setPublisherProvidedId(n)}))))}}function we(e,n){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return V().fork().measureTime("userId.init.modules",(function(){if(!n.length)return[];if(!(n=n.filter((function(e){return(!e.config.storage||Se(e))&&G.isAllowed(x.EL,(0,U.T)(Z.y2,e.config.name))}))).length)return(0,v.logWarn)("".concat(F," - no ID module configured")),[];var t=n.reduce((function(e,t){return Y(t.submodule.name).measureTime("init",(function(){try{ye(t,r,n),e.push(t)}catch(e){(0,v.logError)("Error in userID module '".concat(t.submodule.name,"':"),e)}return e}))}),[]);return t.length&&Q(t),t.forEach(Ee.bind(null,e)),t}))}function Ee(e,n){for(var r=!1,t=0;t<e.length;t++)if(n.config.name.toLowerCase()===e[t].config.name.toLowerCase()){r=!0,e[t]=n;break}r||e.push(n)}var Oe=new Set([L,R]);function Se(e){var n,r;switch(null===(n=e.config)||void 0===n||null===(r=n.storage)||void 0===r?void 0:r.type){case L:if(e.storageMgr.localStorageIsEnabled())return!q.getDataFromLocalStorage(_)||((0,v.logInfo)("".concat(F," - opt-out localStorage found, storage disabled")),!1);break;case R:if(e.storageMgr.cookiesAreEnabled())return!q.getCookie(_)||((0,v.logInfo)("".concat(F," - opt-out cookie found, storage disabled")),!1)}return!1}function De(e){p.clear(),Object.entries(re(e,(function(e){return e.eids}),(function(e){return e.name}))).forEach((function(e){var n=(0,i.Z)(e,2),r=n[0],t=n[1];return p.set(r,t)}))}function je(){De(z);var e=function(e,n){return Array.isArray(e)?e.reduce((function(e,n){return!n||(0,v.isEmptyStr)(n.name)||(n.storage&&!(0,v.isEmptyStr)(n.storage.type)&&!(0,v.isEmptyStr)(n.storage.name)&&Oe.has(n.storage.type)||(0,v.isPlainObject)(n.value)?e.push(n):n.storage||n.value||e.push(n)),e}),[]):[]}(W);if(e.length){var n=z.filter((function(e){return!(0,c.sE)(B,(function(n){return n.name===e.name}))}));B.splice(0,B.length),n.map((function(n){var r=(0,c.sE)(e,(function(e){return e.name&&(e.name.toLowerCase()===n.name.toLowerCase()||n.aliasName&&e.name.toLowerCase()===n.aliasName.toLowerCase())}));return r&&n.name!==r.name&&(r.name=n.name),n.findRootDomain=N.W,r?{submodule:n,config:r,callback:void 0,idObj:void 0,storageMgr:(0,D.df)({moduleType:Z.y2,moduleName:r.name})}:null})).filter((function(e){return null!==e})).forEach((function(e){return B.push(e)})),!M&&B.length&&((0,u.R)().requestBids.before(se,40),d.ZP.callDataDeletionRequest.before(ke),P.G.after((function(e){return e(ce())})),(0,v.logInfo)("".concat(F," - usersync config updated for ").concat(B.length," submodules: "),B.map((function(e){return e.submodule.name}))),M=!0)}}function Pe(e,n){if(e){var r={},o=new Map(n.map((function(e){return e.submodule.aliasName?[e.submodule.aliasName,e.submodule.name]:[]})));Object.keys(e).forEach((function(n){var i=(0,v.isArray)(e[n])?(0,t.Z)(e[n]).reverse():[];r[n]=i.map((function(e){return o.has(e)?o.get(e):e}))})),J=r}else J={}}function ke(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),t=1;t<n;t++)r[t-1]=arguments[t];(0,v.logInfo)("UserID: received data deletion request; deleting all stored IDs..."),B.forEach((function(e){if("function"==typeof e.submodule.onDataDeletionRequest)try{var n;(n=e.submodule).onDataDeletionRequest.apply(n,[e.config,e.idObj].concat(r))}catch(n){(0,v.logError)("Error calling onDataDeletionRequest for ID submodule ".concat(e.submodule.name),n)}K(e)})),e.apply(this,r)}function Ae(e){return function(){return Promise.resolve(e.apply(this,arguments))}}!function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.delay,t=void 0===r?k.Z.timeout:r;E=void 0,B=[],W=[],M=!1,y=[],ie=ue({delay:t}),null!=O&&O(),z=[],O=e.getConfig("userSync",(function(e){var n=e.userSync;n&&(E=n.ppid,n.userIds&&(W=n.userIds,I=(0,v.isNumber)(n.syncDelay)?n.syncDelay:500,w=(0,v.isNumber)(n.auctionDelay)?n.auctionDelay:0,je(),Pe(n.idPriority,B),ie({ready:!0})))})),(0,u.R)().getUserIds=fe,(0,u.R)().getUserIdsAsEids=le,(0,u.R)().getEncryptedEidsForSource=Ae(ge),(0,u.R)().registerSignalSources=ve,(0,u.R)().refreshUserIds=Ae(be),(0,u.R)().getUserIdsAsync=Ae(pe),(0,u.R)().getUserIdsAsEidBySource=de}(s.vc),(0,m.bA)("userId",(function(e){(0,c.sE)(z,(function(n){return n.name===e.name}))||(z.push(e),l.qh.register(Z.y2,e.name,e.gvlid),je(),ie({refresh:!0,submoduleNames:[e.name]}))})),(0,A.f8)({type:A.Z,name:"userExtEids",fn:function(e,n,r){var t=(0,b.Z)(r,"bidRequests.0.userIdAsEids");t&&Object.keys(t).length>0&&(0,j.N)(e,"user.ext.eids",t)}}),(0,u.z)("userId")},7563:function(e,n,r){r.d(n,{G:function(){return t}});var t=(0,r(92797).z3)("sync",(function(){}))},26372:function(e,n,r){r.d(n,{DZ:function(){return a},Px:function(){return u},TP:function(){return s},YC:function(){return c},Z:function(){return i},f8:function(){return m},fP:function(){return v},gm:function(){return t},md:function(){return f}});var t=["request","imp","bidResponse","response"],o=["default","pbs"],i=t[0],a=t[1],u=t[2],c=t[3],s=o[0],f=o[1],l=new Set(t);var d,g=(d={},{registerOrtbProcessor:function(e){var n=e.type,r=e.name,o=e.fn,i=e.priority,a=void 0===i?0:i,u=e.dialects,c=void 0===u?[s]:u;if(!l.has(n))throw new Error("ORTB processor type must be one of: ".concat(t.join(", ")));c.forEach((function(e){d.hasOwnProperty(e)||(d[e]={}),d[e].hasOwnProperty(n)||(d[e][n]={}),d[e][n][r]={priority:a,fn:o}}))},getProcessors:function(e){return d[e]||{}}}),m=g.registerOrtbProcessor,v=g.getProcessors}},function(e){e.O(0,[38409],(function(){return n=82547,e(e.s=n);var n}));e.O()}]);
  })(),pbjs.processQueue();
</script>


      <!-- Inicio da tag TT de segmencatao -->
<script id="tailtarget">
  var _ttprofiles = window._ttprofiles || [];
  _ttprofiles.profiles = [];
  _ttprofiles.push(['_sync', false]);
  _ttprofiles.push(['_setAccount', 'TT-9964-3']);

  var setGoogletagTargets = function(profiles) {
    googletag.pubads().setTargeting("age", profiles.getAge);
    googletag.pubads().setTargeting("equipment", profiles.getEquipment);
    googletag.pubads().setTargeting("customaud", profiles.getCustomAudience);
    googletag.pubads().setTargeting("customaudiences", profiles.getCustomAudience);
    googletag.pubads().setTargeting("gender", profiles.getGender);
    googletag.pubads().setTargeting("msegments", profiles.getMicrosegments);
    googletag.pubads().setTargeting("microsegments", profiles.getMicrosegments);
    googletag.pubads().setTargeting("profiles", profiles.getProfiles);
    googletag.pubads().setTargeting("cluster", profiles.getProfiles);
    googletag.pubads().setTargeting("sclass", profiles.getSocialClass);
    googletag.pubads().setTargeting("socialclass", profiles.getSocialClass);
    googletag.pubads().setTargeting("subjects", profiles.getSubjects);
    googletag.pubads().setTargeting("team", profiles.getTeam);
  };

  var callback = function(profiles) {
    // É necessário esperar o carregamento do Googletag
    var intvl = setInterval(function() {
      if (googletag && googletag.pubads) {
        clearInterval(intvl);
        setGoogletagTargets(profiles);
      }
    }, 0);
  };
  _ttprofiles.push(['_registerCallback', callback]);
  _ttprofiles.push(['_enableServices']);
</script>
<script defer src="//d.tailtarget.com/profiles.js"></script>
<!-- Final da tag TT de segmentacao -->

      

      <script type='text/javascript'>

        var is_iframe, url_preview, show_ads;

        is_iframe   = window.self !== window.top;
        url_preview = window.location.href.split('?')[0].split('/');
        show_ads    = url_preview.indexOf('preview') === -1 && !is_iframe;

        if (show_ads) {
          function R7AdvLazy(){}function R7AdvPrinter(){}function R7AdvRefresh(){}R7AdvLazy.prototype={cssClasses:{loading:"r7-adlazyload-loading"},adsMap:{},containers:[],defineGoogleTagEnvironment:function(){window.googletag=window.googletag||{},window.googletag.cmd=window.googletag.cmd||[]},disableInitialLoad:function(){window.googletag.cmd.push(function(){window.googletag.pubads().enableSingleRequest(),window.googletag.pubads().disableInitialLoad()})},slotRenderEnded:function(){var e=this;e.slotRender={},window.googletag.cmd.push(function(){window.googletag.pubads().addEventListener("slotRenderEnded",function(t){e.removeAdLazyLoadIcon(t)})})},removeAdLazyLoadIcon:function(t){if(!this.viewportAds)return!1;var e=t.slot,n=$.map(this.viewportAds,function(t,e){return e}),i=e.getSlotElementId();-1!==$.inArray(i,n)&&this.viewportAds[i].container.removeClass(this.cssClasses.loading)},isInViewport:function(t){if(t&&0===t.length)return!0;var e=$(window),n=t.offset().top,i=n+t.outerHeight(),o=(t.height(),-500),s=e.scrollTop();n+=o,i-=o;var a=s+e.height();return s<i&&n<a},getAdsContainers:function(){if(!$.isEmptyObject(this.adsMap))return this.getAdsMapContainers();for(var t=this.getSlots(),e=[],n=0;n<t.length;n++){var i=t[n],o="#"+i.getSlotElementId(),s=$(o),a=s.find("[id*=google]"),r=this.thisAdIsAvailable(i);!a.hasClass(this.cssClasses.loading)&&r&&(s=0<a.length?a.first():s,e.push(s),this.registerAdMapValue(i,s))}return this.containers=e},getAdsMapContainers:function(){var n=[];return $.each(this.adsMap,function(t,e){n.push(e.container)}),n},getGptTarget:function(t,e){var n=t.getTargeting(e);return 0<n.length?n[0]:null},getSlots:function(){return window.googletag.pubads().getSlots()},isItHBException:function(t){var e=window.hbException,n=!0;if(0===e.length)return!1;for(var i=0;i<e.length;i++){var o=e[i],s="yes"===o.disable_desktop&&!this.isMobile(),a="yes"===o.disable_mobile&&this.isMobile();if(n=!0,o.hash&&(n=n&&r7ad.hash===o.hash),o.pos&&(n=n&&this.getGptTarget(t,"pos")===o.pos),o.context&&(n=n&&this.getGptTarget(t,"context")===o.context),n=n&&s||n&&a)return n}return n},isMobile:function(){return this.isMobileDevice||(this.isMobileDevice=-1!==document.body.className.indexOf("main-r7mobile")),this.isMobileDevice},loadExceptionAds:function(){var t=this.getSlots(),i=[],o=["imonomy","intextvideo"];$.each(t,function(t,e){var n=e.getTargeting("pos");n=1===n.length?n[0]:null,-1!==$.inArray(n,o)&&i.push(e)}),0<i.length&&window.googletag.pubads().refresh(i)},registerAdMapValue:function(t,e){if(t){var n=t.getSlotElementId();this.adsMap[n]={slot:t,container:e}}},registerViewPortAd:function(t,e){var n=t.getSlotElementId();this.viewportAds=this.viewportAds||{},this.viewportAds[n]={slot:t,container:e}},removeAdMapValue:function(t){this.adsMap[t]&&delete this.adsMap[t]},setContainerLoadingClass:function(){var e=this,t=e.getAdsContainers();$.each(t,function(){var t=$(this);89<t.height()&&t.addClass(e.cssClasses.loading)})},setStateChangeEvents:function(t){var e=window.document;e.onreadystatechange=function(){"interactive"===e.readyState&&t.hasOwnProperty("loading")&&t.loading(),"complete"===e.readyState&&t.hasOwnProperty("complete")&&t.complete()}},showAllAds:function(){window.googletag.pubads().refresh()},showHeaderBiddingExceptions:function(){var t=this.adsMap,o=[];$.each(t,function(t,e){var n=e.slot,i=e.container;this.isInViewport(i)&&this.isItHBException(n)&&(o.push(n),this.registerViewPortAd(n,i),this.removeAdMapValue(n.getSlotElementId()))}.bind(this)),0<o.length&&window.googletag.pubads().refresh(o)},showVisibleAds:function(){if(!window.R7AdvLazy.readyToLoad)return!1;var t=this.adsMap,o=[];$.each(t,function(t,e){var n=e.slot,i=e.container;this.isInViewport(i)&&(o.push(n),this.registerViewPortAd(n,i),this.removeAdMapValue(n.getSlotElementId()))}.bind(this)),0<o.length&&window.googletag.pubads().refresh(o)},loadAds:function(){this.loadExceptionAds(),this.waitingToHeaderBiddingExceptions();var t=setInterval(function(){window.R7AdvLazy.readyToLoad&&(this.waitingHeaderBiddingToStart(),this.watchingAds(),clearInterval(t))}.bind(this),0)},start:function(){var t=this;t.defineGoogleTagEnvironment(),t.disableInitialLoad(),t.slotRenderEnded(),t.setStateChangeEvents({loading:function(){t.waitingGoogletag()},complete:function(){setTimeout(t.loadAds.bind(t),150)}})},thisAdIsAvailable:function(t){var e=t.getTargeting("pos");return e=1===e.length?e[0]:"",-1===$.inArray(e,["rotativo","sticky_ad","Galeria1_Imagem","Island_Galeria","imonomy"])},waitingGoogletag:function(){var t;t=setInterval(function(){window.googletag&&window.googletag.apiReady&&(this.setContainerLoadingClass(),clearInterval(t))}.bind(this),1)},waitingHeaderBiddingToStart:function(){var t;t=setInterval(function(){window.googletag&&window.googletag.apiReady&&window.R7AdvLazy.readyToLoad&&(this.showVisibleAds(),clearInterval(t))}.bind(this),50)},watchingAds:function(){$(window).scroll(function(t){this.showHeaderBiddingExceptions(),this.showVisibleAds(),$.isEmptyObject(this.adsMap)&&$(this).off(t)}.bind(this))},waitingToHeaderBiddingExceptions:function(){var t;t=setInterval(function(){window.googletag&&window.googletag.apiReady&&window.r7ad&&(clearInterval(t),window.hbException&&0<window.hbException.length&&this.showHeaderBiddingExceptions())}.bind(this),0)}},R7AdvLazy.thisIsReadyToLoad=function(){(function(){R7AdvLazy.readyToLoad=!0})()},R7AdvPrinter.prototype={tags:{},css:{count:"js-print-counter",lazy:"r7-img-lazy"},createPrintCounterContainer:function(t){var e=document.createElement("div");return e.className="js-print-counter-container",e.style.display="none",t.parentNode.insertBefore(e,t.nextSibling),e},createPrintCounterIframe:function(t,e){var n=document.createElement("iframe");n.src=e.getAttribute("data-url"),n.height="1",n.width="1",t.appendChild(n)},format:function(t){this.formatURL(t),this.replaceCountClass(t)},formatElements:function(){for(var t="."+this.css.count,e=document.querySelectorAll(t),n=0;n<e.length;n++)this.format(e[n])},formatURL:function(t){var e=t.getAttribute("data-url"),n=this.splitParameters(e);this.tags[n.iu]?this.tags[n.iu].tile+=1:(this.tags[n.iu]=n,this.tags[n.iu].c=parseInt(9999999999*Math.random()),this.tags[n.iu].tile=1),e=e.split("?")[0],e=(e=this.joinParameters(e,this.tags[n.iu])).replace("/ad?","/adx?"),t.setAttribute("data-url",e)},joinParameters:function(t,e){var n=[];for(var i in e)e.hasOwnProperty(i)&&n.push(i+"="+e[i]);return[t,n=n.join("&")].join("?")},printCounterLoad:function(e){var n=setInterval(function(){if(window.R7AdvLazy.readyToLoad){var t=this.createPrintCounterContainer(e);this.createPrintCounterIframe(t,e),clearInterval(n)}}.bind(this),1e3)},replaceCountClass:function(t){t.className=this.css.lazy},splitParameters:function(t){if(!t)return!1;for(var e={},n=t.split("?").reverse()[0].split("&"),i=0;i<n.length;i++){var o=n[i].split("="),s=o[0],a=o[1];e[s]=a}return e},start:function(){this.waitReadyToLoad()},waitReadyToLoad:function(){var t=setInterval(function(){window.R7AdvLazy.readyToLoad&&(this.formatElements(),clearInterval(t))}.bind(this),0)}},R7AdvRefresh.prototype={REFRESH_INTERVAL:2e4,RULES_KEYS:{VIEWPORT:"viewportRule",VIEWABILITY:"viewabilityRule"},slots:[],mappedSizes:[{width:320,height:50},{width:300,height:250},{width:300,height:600},{width:970,height:250},{width:728,height:90},{width:120,height:600},{width:160,height:600},{width:970,height:90}],defineGoogleTagEnvironment:function(){window.googletag=window.googletag||{},window.googletag.cmd=window.googletag.cmd||[]},getDefaultSlotStructure:function(t){return{slotId:t.getSlotElementId(),slot:t,viewportRule:!1,viewabilityRule:!1}},createSlot:function(e,t,n){if(e){var i=this.getDefaultSlotStructure(e);i[t]=n,this.slots.find(function(t){return t.slot===e})||this.slots.push(i)}},updateSlot:function(e,t,n){if(e){var i=this.slots.findIndex(function(t){return t.slot===e});0<=i?this.slots[i][t]=n:this.createSlot(e,t,n)}},setViewportRule:function(){var i=this;googletag.cmd.push(function(){googletag.pubads().addEventListener("slotVisibilityChanged",function(t){var e=100===t.inViewPercentage,n=t.slot;e?i.updateSlot(n,i.RULES_KEYS.VIEWPORT,!0):i.updateSlot(n,i.RULES_KEYS.VIEWPORT,!1)})})},setViewabilityRule:function(){var n=this;googletag.cmd.push(function(){googletag.pubads().addEventListener("impressionViewable",function(t){var e=t.slot;n.updateSlot(e,n.RULES_KEYS.VIEWABILITY,!0)})})},updateSlotTimeout:function(t){setTimeout(t,self.REFRESH_INTERVAL)},start:function(){this.defineGoogleTagEnvironment(),this.setViewportRule(),this.setViewabilityRule()}};var r7adv=function(){function t(e){var n={reference:null};return googletag.cmd.push(function(){var t=googletag.defineSlot(r7ad.hash,e.sizes,e.id);if(!t)return!1;n.reference=t.setClickUrl("http://c.t.tailtarget.com/clk/TT-9964-3/4219/click=").addService(googletag.pubads()).setTargeting("pos",e.pos).setTargeting("context",e.context),googletag.enableServices()}),n}function e(){return!document.getElementById("has-adblock")}function n(t,e){this.incrementUnit(t);var n=window.adUnits[window.adUnits.length-1];window.adUnits=[n],window.sendRequestHeaderBidding(e)}function i(t){pbjs.que.push(function(){pbjs.requestBids({timeout:PREBID_TIMEOUT,adUnitCodes:[t.getSlotElementId()],bidsBackHandler:function(){pbjs.setTargetingForGPTAsync([t.getSlotElementId()]),googletag.pubads().refresh([t])}})})}function o(t){googletag.cmd.push(function(){googletag.pubads().refresh([t])})}function s(t){u(t),d(t),g(t),h(),adUnits.push(t)}function a(t){if(t.length<1)return t;for(var e=0;e<t.length;e++){var n=t[e];n.sizes&&(n.mediaTypes={},n.mediaTypes.banner={},n.mediaTypes.banner.sizes=n.sizes),t[e]=n}return t}function r(t){var e=-1!=document.querySelector("body").className.indexOf("main-r7mobile")?"mobile":"desktop";r7adv.smartController=r7adv.smartController||JSON.parse(JSON.stringify(y));var n=t.split(",").sort(function(t,e){return t.split("x").reduce(function(t,e){return t*e})-e.split("x").reduce(function(t,e){return t*e})}).reverse()[0],i=r7adv.smartController[e][n];if(i){var o=Object.keys(i),s=o.findIndex(function(t){if(i[t])return!0}),a=o[s];if(!a)return null;var r=i[a];return i[a]=null,r}}function d(t){var e=window.location.href.includes("lifestyle.r7.com"),n=document.body.classList.contains("is_section")?"subhome":"internals",i=e?y:b,o=JSON.parse(JSON.stringify(t));e&&2<o.sizes.length&&(o.sizes=o.sizes.sort().reverse()[0]);var s=c(o,i);if(s){var a=l(t);(s=s===Object(s)?r(a):s)&&(p(t,"smartadserver"),t.bids.unshift({bidder:"smartadserver",params:{domain:"https://prg.smartadserver.com",siteId:i.global.siteId,pageId:e?i.global.pageId[n]:i.global.pageId,formatId:s}}))}}function l(t){var e=[];if(2===t.sizes.length)e.push(t.sizes.join("x"));else{for(var n=[],i=0;i<t.sizes.length;i++)n.push(t.sizes[i].join("x"));n.sort(),e.push(n.join(","))}return e.toString()}function c(t,e){var n=t.code,i=-1!=document.querySelector("body").className.indexOf("main-r7mobile")?"mobile":"desktop",o=(e="undefined"!=typeof e.exceptions[n]?e.exceptions[n]:e[i],l(t));return e[o]?e[o]:null}function u(t){var e=t.code;p(t,"rubicon"),t.bids.push({bidder:"rubicon",params:{accountId:"15284",siteId:"181560",zoneId:"885996",inventory:{adunit:e}}})}function g(t){var e=t.sizes,n=t.code,i=(Array.isArray(e[0])?e.reverse()[0]:e).toString().replace(",","x"),o=/^\d{1,3}x\d{1,3}$/g,s=I.sizeExceptions;p(t,"teads"),o.test(i)&&i==s[0]&&t.bids.push({bidder:"teads",params:{placementId:152515,pageId:138995,inventory:{adunit:n}}})}function h(){pbjs.setConfig({userSync:{userIds:[{name:"identityLink",params:{pid:"13919",notUse3P:!1},storage:{type:"cookie",name:"idl_env",expires:15,refreshInSeconds:1800}},{name:"pairId",params:{liveramp:{}}}],syncDelay:3e3}})}function p(t,e){t.bids=t.bids||[];for(var n=0,i=t.bids.length;n<i;)t.bids[n].bidder===e&&t.bids.splice(n,1),n+=1,i=t.bids.length}function f(e,n){googletag.cmd.push(function(){googletag.pubads().addEventListener("slotRenderEnded",function(t){t.slot===e.reference&&n&&n(t)})})}function w(){pbjs.que.push(function(){adUnits=r7adv.normalizeUnits(adUnits),pbjs.addAdUnits(adUnits),pbjs.requestBids({bidsBackHandler:sendAdserverRequest,timeout:PREBID_TIMEOUT||3e3})})}function v(t){var e={adUnits:[t]};e.adUnits=r7adv.normalizeUnits(e.adUnits),pbjs.que.push(function(){pbjs.requestBids(e)})}function m(){var t=window.location.href.split("?");return!(2!==t.length||(stopAds=-1!==t[1].indexOf("ads=false"),!stopAds))}var b={global:{siteId:"297790",pageId:"1092054"},desktop:{"728x90,920x100,970x150,970x250":"78785","300x250":"78786","300x600":"78787","970x250":"78788","728x90":"78789"},mobile:{"300x250":"78790","320x100":"78791","320x50":"78792"},exceptions:{}},y={global:{siteId:"297790",pageId:{subhome:"1421923",internals:"1421924"}},desktop:{"728x90":{pos1:"78785"},"300x250":{pos1:"78786",pos2:"104267",pos3:"104540"},"300x600":{pos1:"78787"},"970x250":{pos1:"78788",pos2:"104266"}},mobile:{"300x250":{pos1:"78790"},"320x50":{pos1:"78792",pos2:"104541"}},exceptions:{}},I={sizeExceptions:["300x250"]};return{defineAd:t,hasAdBlock:e,makeBid:n,refreshSlot:i,refreshAdByInstance:o,incrementUnit:s,slotRenderEnded:f,sendBidsRequest:w,sendSingleRequest:v,normalizeUnits:a,load:function(t,e){var n="/script?href=";r7adv.asyncLoad(t,e,n)},asyncLoad:function(t,e,n){if(m())throw new Error("Ads' load stopped");window.r7ad=window.r7ad||{},window.r7advlazy=window.r7advlazy||new window.R7AdvLazy,window.r7advlazy.start(),window.r7AdvPrinter=window.r7AdvPrinter||new window.R7AdvPrinter,window.r7AdvPrinter.start(),window.r7advrefresh=window.r7advrefresh||new window.R7AdvRefresh,window.r7advrefresh.start(),""===e&&(e=undefined),t+=n=n||"/script/async?href=";var i=("https:"===document.location.protocol?"https:":"http:")+"//"+t,o=document.location.protocol+"//"+document.location.host+document.location.pathname,s=void 0===e?o:e,a=!1;i=(a=(a=(a=a||-1!==t.indexOf("http://"))||-1!==t.indexOf("https://"))||0==t.indexOf("//"))?t:i;var r=document.createElement("script");r.type="text/javascript",r.src=i+s,document.write(r.outerHTML)}}}();
          
          window.hbException = [{"context":"","disable_desktop":"yes","disable_mobile":"","hash":"/7542/r7home/home","pos":"header"},{"context":"principal","disable_desktop":"yes","disable_mobile":"","hash":"/7542/r7home/home","pos":"island"}];

        }
      </script>

    
      <script type="text/javascript">
        try {document.domain = 'r7.com';}catch(e){}
        window.r7url = document.location.href;
        window.advdom = "https://adv.r7.com/";
        window.advid  = "";
        window.snippetsurl = "https://snippets.r7.com/snippet/5293b08110d73e0d53000001/";

        r7adv.asyncLoad(window.advdom,window.advid);
      </script>


    <script type="text/javascript">
//<![CDATA[

      
  var omnitureObject = {
            "page_name": "viva a vida:bem estar:home",
        "site_section": "viva a vida",
        "sub_section": "viva a vida:bem estar",
        "sub_section_2": "viva a vida:bem estar:home",
        "sub_section_3": "viva a vida:bem estar:home",

    'content_type'   : 'sub section:home',
    
    
    'short_url'   : 'https://www.r7.com/nADz',
    'url_pagina'   : 'https://vivaavida.r7.com/bem-estar',
  };

    var omnitureObject = {
      "page_name" : "viva a vida:bem estar:home",
      "site_section" : "viva a vida",
      "sub_section" : "viva a vida:bem estar",
      "sub_section_2" : "viva a vida:bem estar:home",
      "content_type" : "sub section:home",
      
      "url_pagina" : document.location.href
    };

      
  //evita ReferenceError
  _ttprofiles = (typeof _ttprofiles !== 'undefined')? _ttprofiles : {};

  var dp6DataLayer = {
    "id": "5d8aa0d11df97bf2670000e1",
      "publication_date": "2023-07-03T00:07:48-03:00",
      "content_type": "sub section:home",
      "section0": "Viva a Vida",
      "section1": "Bem Estar",
    
  };


//]]>
</script>
      <!-- Begin comScore Tag -->
<script>
  var _comscore = _comscore || [];
  _comscore.push({ 
    c1: "2", c2: "14194541",
    options: {
      enableFirstPartyCookie: true,
      bypassUserConsentRequirementFor1PCookie: true
    }
  });
  (function() {
    var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
    s.src = "https://sb.scorecardresearch.com/cs/14194541/beacon.js";
    el.parentNode.insertBefore(s, el);
  })();  
</script>
<noscript>
  <img src="https://sb.scorecardresearch.com/p?c1=2&c2=14194541&cv=4.4.0&cj=1">
</noscript>
<!-- End comScore Tag -->

    

    <!-- configuração global de publicidade -->
    <script>
  window.googletag = window.googletag || { cmd: [] };

  googletag.cmd.push(function() {
    googletag.pubads().setTargeting('keywords', ['bemestar', 'saude', 'habitos_saudaveis', 'tratamentos', 'remedios', 'r7']);

    googletag.pubads().setTargeting('ab', (function() {
      if (!googletag.gamRandomValue) {
        googletag.gamRandomValue = Math.floor(Math.random() * 20) + 1;
      }
      return googletag.gamRandomValue + '';
    })());
  });
</script>


    <!--PER-7281: Polyfill para o web-vitals-->
      <script>
    // disponível em https://unpkg.com/web-vitals/dist/polyfill.js
    !function(){var e,t,n,i,r={passive:!0,capture:!0},a=new Date,o=function(){i=[],t=-1,e=null,f(addEventListener)},c=function(i,r){e||(e=r,t=i,n=new Date,f(removeEventListener),u())},u=function(){if(t>=0&&t<n-a){var r={entryType:"first-input",name:e.type,target:e.target,cancelable:e.cancelable,startTime:e.timeStamp,processingStart:e.timeStamp+t};i.forEach((function(e){e(r)})),i=[]}},s=function(e){if(e.cancelable){var t=(e.timeStamp>1e12?new Date:performance.now())-e.timeStamp;"pointerdown"==e.type?function(e,t){var n=function(){c(e,t),a()},i=function(){a()},a=function(){removeEventListener("pointerup",n,r),removeEventListener("pointercancel",i,r)};addEventListener("pointerup",n,r),addEventListener("pointercancel",i,r)}(t,e):c(t,e)}},f=function(e){["mousedown","keydown","touchstart","pointerdown"].forEach((function(t){return e(t,s,r)}))},p="hidden"===document.visibilityState?0:1/0;addEventListener("visibilitychange",(function e(t){"hidden"===document.visibilityState&&(p=t.timeStamp,removeEventListener("visibilitychange",e,!0))}),!0);o(),self.webVitals={firstInputPolyfill:function(e){i.push(e),u()},resetFirstInputPolyfill:o,get firstHiddenTime(){return p}}}();
  </script>

    <!-- PER-11014: Tiktok pixel -->
    <script>
  !function (w, d, t) { w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var i="https://analytics.tiktok.com/i18n/pixel/events.js";ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=i,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};var o=document.createElement("script");o.type="text/javascript",o.async=!0,o.src=i+"?sdkid="+e+"&lib="+t;var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(o,a)}; ttq.load('CI4THM3C77U8RIVTGAL0');ttq.page(); }(window, document, 'ttq');
</script>
    
    <script type="text/javascript">
  window._taboola = window._taboola || [];
  _taboola.push({ category: 'auto' });

  !function (e, f, u, i) {
    if (!document.getElementById(i)){
      e.defer = 1;
      e.src = u;
      e.id = i;
      f.parentNode.insertBefore(e, f);
    }
  }(document.createElement('script'), 
    document.getElementsByTagName('script')[0],
    '//cdn.taboola.com/libtrc/r7-r7com/loader.js',
    'tb_loader_script');

  if(window.performance && typeof window.performance.mark == 'function'){
    window.performance.mark('tbl_ic');
  }
</script>
  </head>
  <body class=" is_section   ">
    
  <!-- Google Tag Manager (noscript) -->
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id='GTM-N4WN2MJ'"
  height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
  <!-- End Google Tag Manager (noscript) -->


      <header class="header has-header-ads">

  <div class="header-wrap" data-header-banner="desktop">
    <div class="header-wrap-content" style="background: #E14D71">
      <div class="header-container">
        <a href="https://www.r7.com/" class="r7-logo" title="Portal R7">
          <svg aria-labelledby="logo-r7com" xmlns="http://www.w3.org/2000/svg" width="39.003" height="34.201" viewBox="0 0 710.44 622.969">
  <defs>
    <style>
      .logo-r7-svg{
        fill: #fff;
      }
      .show .logo-r7-svg{
        fill: #E14D71 !important;
      }
    </style>
  </defs>
  <path class="logo-r7-svg" d="M1728.61,489.533h-33.24v98.64h32.17q59.49,0,59.5-50.122Q1787.04,489.544,1728.61,489.533Zm486.76,164.676v-141.9c0-210.308-177.59-204.249-177.59-204.249H1709.23C1505,308.059,1505,494.544,1505,494.544V931s19.61-72.37,116.18-72.37h372.19C2226,858.63,2215.37,654.209,2215.37,654.209ZM1778.46,766.148l-83.09-115.8v115.8H1608V408.579h113.11q45.54,0,68.88,5.373a95.344,95.344,0,0,1,41,20.37q43.95,36.457,43.95,98.1,0,44.5-24.11,74.773-24.12,30.314-64.86,37.266l97.02,121.689H1778.46Zm346.82-287.34-125.97,287.34H1899.07L2030.94,485.78H1892.1v-77.2h233.18v70.229Z" transform="translate(-1505 -308.031)"/>
</svg>

  <h1 id="logo-r7com" class="visuallyhidden">R7.com</h1>

        </a>
          
<button type="button"
  data-btn-side-menu
  data-toolkit-toggle-id="sideMenu"
  aria-expanded="false"
  aria-controls="sideMenu"
  class="toolkit-side-menu-btn"
>
  <div class="toolkit-side-menu-btn__line-wrapper">
    <span class="toolkit-side-menu-btn__line"></span>
    <span class="toolkit-side-menu-btn__line"></span>
    <span class="toolkit-side-menu-btn__line"></span>
  </div>
  Menu
</button>
<span class="toolkit-side-menu__divisor"></span>
<nav class="toolkit-side-menu" id="sideMenu" role="menubar" aria-labelledby="sidemenulabel" data-side-menu>
  <div class="toolkit-side-menu--backdrop" data-side-menu-backdrop></div>
  <div class="toolkit-side-menu__container" data-side-menu-container>
  <div class="toolkit-side-menu__categories" data-side-menu-categories>
      <div class="toolkit-side-menu__category">
        <h4 class="toolkit-side-menu__category-title">Destaques R7</h4>
        <ul class="toolkit-side-menu__list" role="tablist" aria-label="menu">
    <li class="toolkit-side-menu__item" role="tab" >
        <a
          tabindex="-1"
          href="https://recordtv.r7.com/a-grande-conquista-2"
          target="_self"
          title="Ir Para A GRANDE CONQUISTA 2"
          class="toolkit-side-menu__link"
        >
          A GRANDE CONQUISTA 2
        </a>
    </li>
    <li class="toolkit-side-menu__item" role="tab" aria-haspopup=&quot;true&quot;>
        <button
          role="tab" type="button"
          data-toolkit-toggle-id="BLOGS-65c5355243527f6a7200078d"
          aria-expanded="false"
          data-btn-side-menu-section="open"
          class="toolkit-side-menu__button"
        >
          BLOGS
          <svg class="toolkit-side-menu__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/></svg>
        </button>
        <div id="BLOGS-65c5355243527f6a7200078d" class="toolkit-side-menu__section" data-side-menu-section>
          <button
            role="tab" type="button"
            data-toolkit-toggle-id="BLOGS-65c5355243527f6a7200078d"
            aria-expanded="true"
            data-btn-side-menu-section="back"
            class="toolkit-side-menu__button toolkit-side-menu__button--back"
          >
            <i class="fa fa-arrow-left toolkit-side-menu__arrow-left"></i>
            Voltar
          </button>
            <ul class="toolkit-side-menu__column-list">
              <!-- loop com as colunas de cada item do menu -->
                  <li class="toolkit-side-menu__item">
                    <ul class="toolkit-side-menu__item-list" role="menu">
                      <!-- loop com todos os links presentes na coluna -->
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://prisma.r7.com/todos-os-blogs"
                            target="_self"
                            title="Ir Para Home"
                            class="toolkit-side-menu__link"
                          >
                            Home
                          </a>
                        </li>
                    </ul>
                  </li>
                  <span class="toolkit-side-menu__category-line"></span> 
                  <li class="toolkit-side-menu__item">
                      <h4 class="toolkit-side-menu__category-title">JR 24H</h4>
                    <ul class="toolkit-side-menu__item-list" role="menu">
                      <!-- loop com todos os links presentes na coluna -->
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://noticias.r7.com/prisma/andre-azeredo"
                            target="_self"
                            title="Ir Para André Azeredo"
                            class="toolkit-side-menu__link"
                          >
                            André Azeredo
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://noticias.r7.com/prisma/arquivo-vivo"
                            target="_self"
                            title="Ir Para Arquivo Vivo"
                            class="toolkit-side-menu__link"
                          >
                            Arquivo Vivo
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://noticias.r7.com/prisma/autos-carros"
                            target="_self"
                            title="Ir Para Autos Carros"
                            class="toolkit-side-menu__link"
                          >
                            Autos Carros
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://noticias.r7.com/prisma/blog-do-nolasco"
                            target="_self"
                            title="Ir Para Blog do Nolasco"
                            class="toolkit-side-menu__link"
                          >
                            Blog do Nolasco
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://noticias.r7.com/prisma/christina-lemos"
                            target="_self"
                            title="Ir Para Christina Lemos"
                            class="toolkit-side-menu__link"
                          >
                            Christina Lemos
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://noticias.r7.com/prisma/conversa-de-reporter"
                            target="_self"
                            title="Ir Para Conversa de Repórter"
                            class="toolkit-side-menu__link"
                          >
                            Conversa de Repórter
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://noticias.r7.com/prisma/cronicas-do-stoliar"
                            target="_self"
                            title="Ir Para Crônicas do Stoliar"
                            class="toolkit-side-menu__link"
                          >
                            Crônicas do Stoliar
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://noticias.r7.com/prisma/empreendendo-direito"
                            target="_self"
                            title="Ir Para Empreendendo Direito"
                            class="toolkit-side-menu__link"
                          >
                            Empreendendo Direito
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://noticias.r7.com/prisma/herodoto-barbeiro"
                            target="_self"
                            title="Ir Para Heródoto Barbeiro"
                            class="toolkit-side-menu__link"
                          >
                            Heródoto Barbeiro
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://noticias.r7.com/prisma/joel-renno-jr"
                            target="_self"
                            title="Ir Para Joel Rennó Jr."
                            class="toolkit-side-menu__link"
                          >
                            Joel Rennó Jr.
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://noticias.r7.com/prisma/luiz-fara-monteiro"
                            target="_self"
                            title="Ir Para Luiz Fara Monteiro"
                            class="toolkit-side-menu__link"
                          >
                            Luiz Fara Monteiro
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://noticias.r7.com/prisma/quarta-instancia"
                            target="_self"
                            title="Ir Para Quarta Instância"
                            class="toolkit-side-menu__link"
                          >
                            Quarta Instância
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://noticias.r7.com/prisma/refletindo-sobre-a-noticia-por-ana-carolina-cury"
                            target="_self"
                            title="Ir Para Refletindo sobre a noticia-por Ana Carolina Cury"
                            class="toolkit-side-menu__link"
                          >
                            Refletindo sobre a noticia-por Ana Carolina Cury
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://noticias.r7.com/prisma/trilha-do-agro"
                            target="_self"
                            title="Ir Para Trilha do Agro"
                            class="toolkit-side-menu__link"
                          >
                            Trilha do Agro
                          </a>
                        </li>
                    </ul>
                  </li>
                  <span class="toolkit-side-menu__category-line"></span> 
                  <li class="toolkit-side-menu__item">
                      <h4 class="toolkit-side-menu__category-title">Entretenimento</h4>
                    <ul class="toolkit-side-menu__item-list" role="menu">
                      <!-- loop com todos os links presentes na coluna -->
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://entretenimento.r7.com/prisma/cine-r7"
                            target="_self"
                            title="Ir Para Cine R7"
                            class="toolkit-side-menu__link"
                          >
                            Cine R7
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://entretenimento.r7.com/prisma/estante-da-vivi"
                            target="_self"
                            title="Ir Para Estante da Vivi"
                            class="toolkit-side-menu__link"
                          >
                            Estante da Vivi
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://entretenimento.r7.com/prisma/essa-eh-do-rock"
                            target="_self"
                            title="Ir Para Essa eh do Rock"
                            class="toolkit-side-menu__link"
                          >
                            Essa eh do Rock
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://entretenimento.r7.com/prisma/fabiola-reipert"
                            target="_self"
                            title="Ir Para Fabíola Reipert"
                            class="toolkit-side-menu__link"
                          >
                            Fabíola Reipert
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://entretenimento.r7.com/prisma/flavio-ricco"
                            target="_self"
                            title="Ir Para Flavio Ricco"
                            class="toolkit-side-menu__link"
                          >
                            Flavio Ricco
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://entretenimento.r7.com/prisma/keila-jimenez"
                            target="_self"
                            title="Ir Para Keila Jimenez"
                            class="toolkit-side-menu__link"
                          >
                            Keila Jimenez
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://entretenimento.r7.com/prisma/melhor-nao-ler"
                            target="_self"
                            title="Ir Para Melhor não ler"
                            class="toolkit-side-menu__link"
                          >
                            Melhor não ler
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://entretenimento.r7.com/prisma/odair-braz-jr"
                            target="_self"
                            title="Ir Para Odair Braz Jr"
                            class="toolkit-side-menu__link"
                          >
                            Odair Braz Jr
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://entretenimento.r7.com/prisma/testemunha-da-historia"
                            target="_self"
                            title="Ir Para Testemunha da História"
                            class="toolkit-side-menu__link"
                          >
                            Testemunha da História
                          </a>
                        </li>
                    </ul>
                  </li>
                  <span class="toolkit-side-menu__category-line"></span> 
                  <li class="toolkit-side-menu__item">
                      <h4 class="toolkit-side-menu__category-title">Esportes</h4>
                    <ul class="toolkit-side-menu__item-list" role="menu">
                      <!-- loop com todos os links presentes na coluna -->
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://esportes.r7.com/prisma/blog-do-fabiano-farah"
                            target="_self"
                            title="Ir Para Blog do Fabiano Farah"
                            class="toolkit-side-menu__link"
                          >
                            Blog do Fabiano Farah
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://esportes.r7.com/prisma/blog-do-nicola"
                            target="_self"
                            title="Ir Para Blog do Nicola"
                            class="toolkit-side-menu__link"
                          >
                            Blog do Nicola
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://esportes.r7.com/prisma/cosme-rimoli"
                            target="_self"
                            title="Ir Para Cosme Rimoli"
                            class="toolkit-side-menu__link"
                          >
                            Cosme Rimoli
                          </a>
                        </li>
                    </ul>
                  </li>
                  <span class="toolkit-side-menu__category-line"></span> 
                  <li class="toolkit-side-menu__item">
                      <h4 class="toolkit-side-menu__category-title">Viva a Vida</h4>
                    <ul class="toolkit-side-menu__item-list" role="menu">
                      <!-- loop com todos os links presentes na coluna -->
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://vivaavida.r7.com/prisma/achamos-em-minas"
                            target="_self"
                            title="Ir Para Achamos em Minas"
                            class="toolkit-side-menu__link"
                          >
                            Achamos em Minas
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://vivaavida.r7.com/prisma/adega-do-deco"
                            target="_self"
                            title="Ir Para Adega do Déco"
                            class="toolkit-side-menu__link"
                          >
                            Adega do Déco
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://vivaavida.r7.com/prisma/aprendiz-de-cozinheira"
                            target="_self"
                            title="Ir Para Aprendiz de cozinheira"
                            class="toolkit-side-menu__link"
                          >
                            Aprendiz de cozinheira
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://vivaavida.r7.com/prisma/como-ser-saudavel"
                            target="_self"
                            title="Ir Para Como ser saudável"
                            class="toolkit-side-menu__link"
                          >
                            Como ser saudável
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://vivaavida.r7.com/prisma/descubra-bh"
                            target="_self"
                            title="Ir Para Descubra BH"
                            class="toolkit-side-menu__link"
                          >
                            Descubra BH
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://vivaavida.r7.com/prisma/difato-tudo-importa"
                            target="_self"
                            title="Ir Para DiFato, Tudo importa!"
                            class="toolkit-side-menu__link"
                          >
                            DiFato, Tudo importa!
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://vivaavida.r7.com/prisma/e-de-comer"
                            target="_self"
                            title="Ir Para É de comer"
                            class="toolkit-side-menu__link"
                          >
                            É de comer
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://vivaavida.r7.com/prisma/entre-a-gente"
                            target="_self"
                            title="Ir Para Entre a Gente"
                            class="toolkit-side-menu__link"
                          >
                            Entre a Gente
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://entretenimento.r7.com/prisma/entre-dois-paes"
                            target="_self"
                            title="Ir Para Entre Dois Pães"
                            class="toolkit-side-menu__link"
                          >
                            Entre Dois Pães
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://vivaavida.r7.com/prisma/makes-e-afins"
                            target="_self"
                            title="Ir Para Makes &amp; Afins"
                            class="toolkit-side-menu__link"
                          >
                            Makes &amp; Afins
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://vivaavida.r7.com/prisma/maria-do-caos"
                            target="_self"
                            title="Ir Para Maria do Caos"
                            class="toolkit-side-menu__link"
                          >
                            Maria do Caos
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://vivaavida.r7.com/prisma/papo-de-paciente"
                            target="_self"
                            title="Ir Para Papo de Paciente"
                            class="toolkit-side-menu__link"
                          >
                            Papo de Paciente
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://vivaavida.r7.com/patricia-lages"
                            target="_self"
                            title="Ir Para Patricia Lages"
                            class="toolkit-side-menu__link"
                          >
                            Patricia Lages
                          </a>
                        </li>
                    </ul>
                  </li>
                  <span class="toolkit-side-menu__category-line"></span> 
                  <li class="toolkit-side-menu__item">
                      <h4 class="toolkit-side-menu__category-title">RPET</h4>
                    <ul class="toolkit-side-menu__item-list" role="menu">
                      <!-- loop com todos os links presentes na coluna -->
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://rpet.r7.com/prisma/entre-pets-e-beijos"
                            target="_self"
                            title="Ir Para Entre Pets e Beijos"
                            class="toolkit-side-menu__link"
                          >
                            Entre Pets e Beijos
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://rpet.r7.com/prisma/pai-de-cachorro"
                            target="_self"
                            title="Ir Para Pai de Cachorro"
                            class="toolkit-side-menu__link"
                          >
                            Pai de Cachorro
                          </a>
                        </li>
                    </ul>
                  </li>
            </ul>
        </div>
    </li>
    <li class="toolkit-side-menu__item" role="tab" aria-haspopup=&quot;true&quot;>
        <button
          role="tab" type="button"
          data-toolkit-toggle-id="ESPORTES-65c5355243527f6a72000741"
          aria-expanded="false"
          data-btn-side-menu-section="open"
          class="toolkit-side-menu__button"
        >
          ESPORTES
          <svg class="toolkit-side-menu__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/></svg>
        </button>
        <div id="ESPORTES-65c5355243527f6a72000741" class="toolkit-side-menu__section" data-side-menu-section>
          <button
            role="tab" type="button"
            data-toolkit-toggle-id="ESPORTES-65c5355243527f6a72000741"
            aria-expanded="true"
            data-btn-side-menu-section="back"
            class="toolkit-side-menu__button toolkit-side-menu__button--back"
          >
            <i class="fa fa-arrow-left toolkit-side-menu__arrow-left"></i>
            Voltar
          </button>
            <ul class="toolkit-side-menu__column-list">
              <!-- loop com as colunas de cada item do menu -->
                  <li class="toolkit-side-menu__item">
                    <ul class="toolkit-side-menu__item-list" role="menu">
                      <!-- loop com todos os links presentes na coluna -->
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://esportes.r7.com"
                            target="_self"
                            title="Ir Para Home"
                            class="toolkit-side-menu__link"
                          >
                            Home
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://esportes.r7.com/futebol/campeonato-paulista"
                            target="_self"
                            title="Ir Para Paulistão 2024"
                            class="toolkit-side-menu__link"
                          >
                            Paulistão 2024
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://esportes.r7.com/automobilismo"
                            target="_self"
                            title="Ir Para Automobilismo"
                            class="toolkit-side-menu__link"
                          >
                            Automobilismo
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://esportes.r7.com/fora-de-jogo"
                            target="_self"
                            title="Ir Para Fora de Jogo"
                            class="toolkit-side-menu__link"
                          >
                            Fora de Jogo
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://esportes.r7.com/futebol"
                            target="_self"
                            title="Ir Para Futebol"
                            class="toolkit-side-menu__link"
                          >
                            Futebol
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://esportes.r7.com/e-sports"
                            target="_self"
                            title="Ir Para E-Sports"
                            class="toolkit-side-menu__link"
                          >
                            E-Sports
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://esportes.r7.com/joga-nas-11"
                            target="_self"
                            title="Ir Para Joga nas 11"
                            class="toolkit-side-menu__link"
                          >
                            Joga nas 11
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://esportes.r7.com/mais-esportes"
                            target="_self"
                            title="Ir Para Mais Esportes"
                            class="toolkit-side-menu__link"
                          >
                            Mais Esportes
                          </a>
                        </li>
                    </ul>
                  </li>
            </ul>
        </div>
    </li>
    <li class="toolkit-side-menu__item" role="tab" >
        <a
          tabindex="-1"
          href="https://hora7.r7.com"
          target="_self"
          title="Ir Para HORA 7"
          class="toolkit-side-menu__link"
        >
          HORA 7
        </a>
    </li>
    <li class="toolkit-side-menu__item" role="tab" >
        <a
          tabindex="-1"
          href="https://monitor7.r7.com"
          target="_self"
          title="Ir Para MONITOR7"
          class="toolkit-side-menu__link"
        >
          MONITOR7
        </a>
    </li>
    <li class="toolkit-side-menu__item" role="tab" >
        <a
          tabindex="-1"
          href="https://nitro.r7.com"
          target="_self"
          title="Ir Para R7 NITRO"
          class="toolkit-side-menu__link"
        >
          R7 NITRO
        </a>
    </li>
    <li class="toolkit-side-menu__item" role="tab" >
        <a
          tabindex="-1"
          href="http://r7.com/reis"
          target="_self"
          title="Ir Para REIS"
          class="toolkit-side-menu__link"
        >
          REIS
        </a>
    </li>
    <li class="toolkit-side-menu__item" role="tab" aria-haspopup=&quot;true&quot;>
        <button
          role="tab" type="button"
          data-toolkit-toggle-id="RENDA EXTRA-65c5355243527f6a720007c4"
          aria-expanded="false"
          data-btn-side-menu-section="open"
          class="toolkit-side-menu__button"
        >
          RENDA EXTRA
          <svg class="toolkit-side-menu__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/></svg>
        </button>
        <div id="RENDA EXTRA-65c5355243527f6a720007c4" class="toolkit-side-menu__section" data-side-menu-section>
          <button
            role="tab" type="button"
            data-toolkit-toggle-id="RENDA EXTRA-65c5355243527f6a720007c4"
            aria-expanded="true"
            data-btn-side-menu-section="back"
            class="toolkit-side-menu__button toolkit-side-menu__button--back"
          >
            <i class="fa fa-arrow-left toolkit-side-menu__arrow-left"></i>
            Voltar
          </button>
            <ul class="toolkit-side-menu__column-list">
              <!-- loop com as colunas de cada item do menu -->
                  <li class="toolkit-side-menu__item">
                    <ul class="toolkit-side-menu__item-list" role="menu">
                      <!-- loop com todos os links presentes na coluna -->
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://renda-extra.r7.com"
                            target="_self"
                            title="Ir Para Home"
                            class="toolkit-side-menu__link"
                          >
                            Home
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://renda-extra.r7.com/minha-historia"
                            target="_self"
                            title="Ir Para Minha História"
                            class="toolkit-side-menu__link"
                          >
                            Minha História
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://renda-extra.r7.com/seu-bolso"
                            target="_self"
                            title="Ir Para Seu Bolso"
                            class="toolkit-side-menu__link"
                          >
                            Seu Bolso
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://renda-extra.r7.com/profissionalize-se"
                            target="_self"
                            title="Ir Para Profissionalize-se"
                            class="toolkit-side-menu__link"
                          >
                            Profissionalize-se
                          </a>
                        </li>
                    </ul>
                  </li>
            </ul>
        </div>
    </li>
    <li class="toolkit-side-menu__item" role="tab" >
        <a
          tabindex="-1"
          href="https://rpet.r7.com"
          target="_self"
          title="Ir Para RPET"
          class="toolkit-side-menu__link"
        >
          RPET
        </a>
    </li>
    <li class="toolkit-side-menu__item" role="tab" aria-haspopup=&quot;true&quot;>
        <button
          role="tab" type="button"
          data-toolkit-toggle-id="VIVA A VIDA-65c5355243527f6a720007ca"
          aria-expanded="false"
          data-btn-side-menu-section="open"
          class="toolkit-side-menu__button"
        >
          VIVA A VIDA
          <svg class="toolkit-side-menu__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/></svg>
        </button>
        <div id="VIVA A VIDA-65c5355243527f6a720007ca" class="toolkit-side-menu__section" data-side-menu-section>
          <button
            role="tab" type="button"
            data-toolkit-toggle-id="VIVA A VIDA-65c5355243527f6a720007ca"
            aria-expanded="true"
            data-btn-side-menu-section="back"
            class="toolkit-side-menu__button toolkit-side-menu__button--back"
          >
            <i class="fa fa-arrow-left toolkit-side-menu__arrow-left"></i>
            Voltar
          </button>
            <ul class="toolkit-side-menu__column-list">
              <!-- loop com as colunas de cada item do menu -->
                  <li class="toolkit-side-menu__item">
                    <ul class="toolkit-side-menu__item-list" role="menu">
                      <!-- loop com todos os links presentes na coluna -->
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://vivaavida.r7.com"
                            target="_self"
                            title="Ir Para Home"
                            class="toolkit-side-menu__link"
                          >
                            Home
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://vivaavida.r7.com/beleza"
                            target="_self"
                            title="Ir Para Beleza"
                            class="toolkit-side-menu__link"
                          >
                            Beleza
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://vivaavida.r7.com/bem-estar"
                            target="_self"
                            title="Ir Para Bem-Estar"
                            class="toolkit-side-menu__link"
                          >
                            Bem-Estar
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://vivaavida.r7.com/casa-e-decoracao"
                            target="_self"
                            title="Ir Para Casa e Decoração"
                            class="toolkit-side-menu__link"
                          >
                            Casa e Decoração
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://vivaavida.r7.com/dietas"
                            target="_self"
                            title="Ir Para Dietas"
                            class="toolkit-side-menu__link"
                          >
                            Dietas
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://vivaavida.r7.com/filhos"
                            target="_self"
                            title="Ir Para Filhos"
                            class="toolkit-side-menu__link"
                          >
                            Filhos
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://vivaavida.r7.com/moda"
                            target="_self"
                            title="Ir Para Moda"
                            class="toolkit-side-menu__link"
                          >
                            Moda
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://vivaavida.r7.com/viagens"
                            target="_self"
                            title="Ir Para Viagens"
                            class="toolkit-side-menu__link"
                          >
                            Viagens
                          </a>
                        </li>
                    </ul>
                  </li>
            </ul>
        </div>
    </li>
</ul>

      </div>
      <span class="toolkit-side-menu__category-line"></span>

      <div class="toolkit-side-menu__category">
        <h4 class="toolkit-side-menu__category-title">Seções</h4>
        <ul class="toolkit-side-menu__list" role="tablist" aria-label="menu">
    <li class="toolkit-side-menu__item" role="tab" >
        <a
          tabindex="-1"
          href="https://recordtv.r7.com/a-grande-conquista-2"
          target="_self"
          title="Ir Para A GRANDE CONQUISTA 2"
          class="toolkit-side-menu__link"
        >
          A GRANDE CONQUISTA 2
        </a>
    </li>
    <li class="toolkit-side-menu__item" role="tab" >
        <a
          tabindex="-1"
          href="https://aclr.r7.com"
          target="_self"
          title="Ir Para ACLR"
          class="toolkit-side-menu__link"
        >
          ACLR
        </a>
    </li>
    <li class="toolkit-side-menu__item" role="tab" aria-haspopup=&quot;true&quot;>
        <button
          role="tab" type="button"
          data-toolkit-toggle-id="BLOGS-65c5355243527f6a7200078d"
          aria-expanded="false"
          data-btn-side-menu-section="open"
          class="toolkit-side-menu__button"
        >
          BLOGS
          <svg class="toolkit-side-menu__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/></svg>
        </button>
        <div id="BLOGS-65c5355243527f6a7200078d" class="toolkit-side-menu__section" data-side-menu-section>
          <button
            role="tab" type="button"
            data-toolkit-toggle-id="BLOGS-65c5355243527f6a7200078d"
            aria-expanded="true"
            data-btn-side-menu-section="back"
            class="toolkit-side-menu__button toolkit-side-menu__button--back"
          >
            <i class="fa fa-arrow-left toolkit-side-menu__arrow-left"></i>
            Voltar
          </button>
            <ul class="toolkit-side-menu__column-list">
              <!-- loop com as colunas de cada item do menu -->
                  <li class="toolkit-side-menu__item">
                    <ul class="toolkit-side-menu__item-list" role="menu">
                      <!-- loop com todos os links presentes na coluna -->
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://prisma.r7.com/todos-os-blogs"
                            target="_self"
                            title="Ir Para Home"
                            class="toolkit-side-menu__link"
                          >
                            Home
                          </a>
                        </li>
                    </ul>
                  </li>
                  <span class="toolkit-side-menu__category-line"></span> 
                  <li class="toolkit-side-menu__item">
                      <h4 class="toolkit-side-menu__category-title">JR 24H</h4>
                    <ul class="toolkit-side-menu__item-list" role="menu">
                      <!-- loop com todos os links presentes na coluna -->
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://noticias.r7.com/prisma/andre-azeredo"
                            target="_self"
                            title="Ir Para André Azeredo"
                            class="toolkit-side-menu__link"
                          >
                            André Azeredo
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://noticias.r7.com/prisma/arquivo-vivo"
                            target="_self"
                            title="Ir Para Arquivo Vivo"
                            class="toolkit-side-menu__link"
                          >
                            Arquivo Vivo
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://noticias.r7.com/prisma/autos-carros"
                            target="_self"
                            title="Ir Para Autos Carros"
                            class="toolkit-side-menu__link"
                          >
                            Autos Carros
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://noticias.r7.com/prisma/blog-do-nolasco"
                            target="_self"
                            title="Ir Para Blog do Nolasco"
                            class="toolkit-side-menu__link"
                          >
                            Blog do Nolasco
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://noticias.r7.com/prisma/christina-lemos"
                            target="_self"
                            title="Ir Para Christina Lemos"
                            class="toolkit-side-menu__link"
                          >
                            Christina Lemos
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://noticias.r7.com/prisma/conversa-de-reporter"
                            target="_self"
                            title="Ir Para Conversa de Repórter"
                            class="toolkit-side-menu__link"
                          >
                            Conversa de Repórter
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://noticias.r7.com/prisma/cronicas-do-stoliar"
                            target="_self"
                            title="Ir Para Crônicas do Stoliar"
                            class="toolkit-side-menu__link"
                          >
                            Crônicas do Stoliar
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://noticias.r7.com/prisma/empreendendo-direito"
                            target="_self"
                            title="Ir Para Empreendendo Direito"
                            class="toolkit-side-menu__link"
                          >
                            Empreendendo Direito
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://noticias.r7.com/prisma/herodoto-barbeiro"
                            target="_self"
                            title="Ir Para Heródoto Barbeiro"
                            class="toolkit-side-menu__link"
                          >
                            Heródoto Barbeiro
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://noticias.r7.com/prisma/joel-renno-jr"
                            target="_self"
                            title="Ir Para Joel Rennó Jr."
                            class="toolkit-side-menu__link"
                          >
                            Joel Rennó Jr.
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://noticias.r7.com/prisma/luiz-fara-monteiro"
                            target="_self"
                            title="Ir Para Luiz Fara Monteiro"
                            class="toolkit-side-menu__link"
                          >
                            Luiz Fara Monteiro
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://noticias.r7.com/prisma/quarta-instancia"
                            target="_self"
                            title="Ir Para Quarta Instância"
                            class="toolkit-side-menu__link"
                          >
                            Quarta Instância
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://noticias.r7.com/prisma/refletindo-sobre-a-noticia-por-ana-carolina-cury"
                            target="_self"
                            title="Ir Para Refletindo sobre a noticia-por Ana Carolina Cury"
                            class="toolkit-side-menu__link"
                          >
                            Refletindo sobre a noticia-por Ana Carolina Cury
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://noticias.r7.com/prisma/trilha-do-agro"
                            target="_self"
                            title="Ir Para Trilha do Agro"
                            class="toolkit-side-menu__link"
                          >
                            Trilha do Agro
                          </a>
                        </li>
                    </ul>
                  </li>
                  <span class="toolkit-side-menu__category-line"></span> 
                  <li class="toolkit-side-menu__item">
                      <h4 class="toolkit-side-menu__category-title">Entretenimento</h4>
                    <ul class="toolkit-side-menu__item-list" role="menu">
                      <!-- loop com todos os links presentes na coluna -->
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://entretenimento.r7.com/prisma/cine-r7"
                            target="_self"
                            title="Ir Para Cine R7"
                            class="toolkit-side-menu__link"
                          >
                            Cine R7
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://entretenimento.r7.com/prisma/estante-da-vivi"
                            target="_self"
                            title="Ir Para Estante da Vivi"
                            class="toolkit-side-menu__link"
                          >
                            Estante da Vivi
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://entretenimento.r7.com/prisma/essa-eh-do-rock"
                            target="_self"
                            title="Ir Para Essa eh do Rock"
                            class="toolkit-side-menu__link"
                          >
                            Essa eh do Rock
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://entretenimento.r7.com/prisma/fabiola-reipert"
                            target="_self"
                            title="Ir Para Fabíola Reipert"
                            class="toolkit-side-menu__link"
                          >
                            Fabíola Reipert
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://entretenimento.r7.com/prisma/flavio-ricco"
                            target="_self"
                            title="Ir Para Flavio Ricco"
                            class="toolkit-side-menu__link"
                          >
                            Flavio Ricco
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://entretenimento.r7.com/prisma/keila-jimenez"
                            target="_self"
                            title="Ir Para Keila Jimenez"
                            class="toolkit-side-menu__link"
                          >
                            Keila Jimenez
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://entretenimento.r7.com/prisma/melhor-nao-ler"
                            target="_self"
                            title="Ir Para Melhor não ler"
                            class="toolkit-side-menu__link"
                          >
                            Melhor não ler
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://entretenimento.r7.com/prisma/odair-braz-jr"
                            target="_self"
                            title="Ir Para Odair Braz Jr"
                            class="toolkit-side-menu__link"
                          >
                            Odair Braz Jr
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://entretenimento.r7.com/prisma/testemunha-da-historia"
                            target="_self"
                            title="Ir Para Testemunha da História"
                            class="toolkit-side-menu__link"
                          >
                            Testemunha da História
                          </a>
                        </li>
                    </ul>
                  </li>
                  <span class="toolkit-side-menu__category-line"></span> 
                  <li class="toolkit-side-menu__item">
                      <h4 class="toolkit-side-menu__category-title">Esportes</h4>
                    <ul class="toolkit-side-menu__item-list" role="menu">
                      <!-- loop com todos os links presentes na coluna -->
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://esportes.r7.com/prisma/blog-do-fabiano-farah"
                            target="_self"
                            title="Ir Para Blog do Fabiano Farah"
                            class="toolkit-side-menu__link"
                          >
                            Blog do Fabiano Farah
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://esportes.r7.com/prisma/blog-do-nicola"
                            target="_self"
                            title="Ir Para Blog do Nicola"
                            class="toolkit-side-menu__link"
                          >
                            Blog do Nicola
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://esportes.r7.com/prisma/cosme-rimoli"
                            target="_self"
                            title="Ir Para Cosme Rimoli"
                            class="toolkit-side-menu__link"
                          >
                            Cosme Rimoli
                          </a>
                        </li>
                    </ul>
                  </li>
                  <span class="toolkit-side-menu__category-line"></span> 
                  <li class="toolkit-side-menu__item">
                      <h4 class="toolkit-side-menu__category-title">Viva a Vida</h4>
                    <ul class="toolkit-side-menu__item-list" role="menu">
                      <!-- loop com todos os links presentes na coluna -->
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://vivaavida.r7.com/prisma/achamos-em-minas"
                            target="_self"
                            title="Ir Para Achamos em Minas"
                            class="toolkit-side-menu__link"
                          >
                            Achamos em Minas
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://vivaavida.r7.com/prisma/adega-do-deco"
                            target="_self"
                            title="Ir Para Adega do Déco"
                            class="toolkit-side-menu__link"
                          >
                            Adega do Déco
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://vivaavida.r7.com/prisma/aprendiz-de-cozinheira"
                            target="_self"
                            title="Ir Para Aprendiz de cozinheira"
                            class="toolkit-side-menu__link"
                          >
                            Aprendiz de cozinheira
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://vivaavida.r7.com/prisma/como-ser-saudavel"
                            target="_self"
                            title="Ir Para Como ser saudável"
                            class="toolkit-side-menu__link"
                          >
                            Como ser saudável
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://vivaavida.r7.com/prisma/descubra-bh"
                            target="_self"
                            title="Ir Para Descubra BH"
                            class="toolkit-side-menu__link"
                          >
                            Descubra BH
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://vivaavida.r7.com/prisma/difato-tudo-importa"
                            target="_self"
                            title="Ir Para DiFato, Tudo importa!"
                            class="toolkit-side-menu__link"
                          >
                            DiFato, Tudo importa!
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://vivaavida.r7.com/prisma/e-de-comer"
                            target="_self"
                            title="Ir Para É de comer"
                            class="toolkit-side-menu__link"
                          >
                            É de comer
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://vivaavida.r7.com/prisma/entre-a-gente"
                            target="_self"
                            title="Ir Para Entre a Gente"
                            class="toolkit-side-menu__link"
                          >
                            Entre a Gente
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://entretenimento.r7.com/prisma/entre-dois-paes"
                            target="_self"
                            title="Ir Para Entre Dois Pães"
                            class="toolkit-side-menu__link"
                          >
                            Entre Dois Pães
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://vivaavida.r7.com/prisma/makes-e-afins"
                            target="_self"
                            title="Ir Para Makes &amp; Afins"
                            class="toolkit-side-menu__link"
                          >
                            Makes &amp; Afins
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://vivaavida.r7.com/prisma/maria-do-caos"
                            target="_self"
                            title="Ir Para Maria do Caos"
                            class="toolkit-side-menu__link"
                          >
                            Maria do Caos
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://vivaavida.r7.com/prisma/papo-de-paciente"
                            target="_self"
                            title="Ir Para Papo de Paciente"
                            class="toolkit-side-menu__link"
                          >
                            Papo de Paciente
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://vivaavida.r7.com/patricia-lages"
                            target="_self"
                            title="Ir Para Patricia Lages"
                            class="toolkit-side-menu__link"
                          >
                            Patricia Lages
                          </a>
                        </li>
                    </ul>
                  </li>
                  <span class="toolkit-side-menu__category-line"></span> 
                  <li class="toolkit-side-menu__item">
                      <h4 class="toolkit-side-menu__category-title">RPET</h4>
                    <ul class="toolkit-side-menu__item-list" role="menu">
                      <!-- loop com todos os links presentes na coluna -->
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://rpet.r7.com/prisma/entre-pets-e-beijos"
                            target="_self"
                            title="Ir Para Entre Pets e Beijos"
                            class="toolkit-side-menu__link"
                          >
                            Entre Pets e Beijos
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://rpet.r7.com/prisma/pai-de-cachorro"
                            target="_self"
                            title="Ir Para Pai de Cachorro"
                            class="toolkit-side-menu__link"
                          >
                            Pai de Cachorro
                          </a>
                        </li>
                    </ul>
                  </li>
            </ul>
        </div>
    </li>
    <li class="toolkit-side-menu__item" role="tab" aria-haspopup=&quot;true&quot;>
        <button
          role="tab" type="button"
          data-toolkit-toggle-id="BRASÍLIA-65c5355243527f6a72000733"
          aria-expanded="false"
          data-btn-side-menu-section="open"
          class="toolkit-side-menu__button"
        >
          BRASÍLIA
          <svg class="toolkit-side-menu__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/></svg>
        </button>
        <div id="BRASÍLIA-65c5355243527f6a72000733" class="toolkit-side-menu__section" data-side-menu-section>
          <button
            role="tab" type="button"
            data-toolkit-toggle-id="BRASÍLIA-65c5355243527f6a72000733"
            aria-expanded="true"
            data-btn-side-menu-section="back"
            class="toolkit-side-menu__button toolkit-side-menu__button--back"
          >
            <i class="fa fa-arrow-left toolkit-side-menu__arrow-left"></i>
            Voltar
          </button>
            <ul class="toolkit-side-menu__column-list">
              <!-- loop com as colunas de cada item do menu -->
                  <li class="toolkit-side-menu__item">
                    <ul class="toolkit-side-menu__item-list" role="menu">
                      <!-- loop com todos os links presentes na coluna -->
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://noticias.r7.com/brasilia"
                            target="_self"
                            title="Ir Para Home"
                            class="toolkit-side-menu__link"
                          >
                            Home
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://noticias.r7.com/brasilia/noticias"
                            target="_self"
                            title="Ir Para Noticias"
                            class="toolkit-side-menu__link"
                          >
                            Noticias
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://noticias.r7.com/brasilia/fotos"
                            target="_self"
                            title="Ir Para Fotos"
                            class="toolkit-side-menu__link"
                          >
                            Fotos
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://noticias.r7.com/brasilia/videos"
                            target="_self"
                            title="Ir Para Vídeos"
                            class="toolkit-side-menu__link"
                          >
                            Vídeos
                          </a>
                        </li>
                    </ul>
                  </li>
            </ul>
        </div>
    </li>
    <li class="toolkit-side-menu__item" role="tab" aria-haspopup=&quot;true&quot;>
        <button
          role="tab" type="button"
          data-toolkit-toggle-id="ELEIÇÕES 2022-65c5355243527f6a720007be"
          aria-expanded="false"
          data-btn-side-menu-section="open"
          class="toolkit-side-menu__button"
        >
          ELEIÇÕES 2022
          <svg class="toolkit-side-menu__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/></svg>
        </button>
        <div id="ELEIÇÕES 2022-65c5355243527f6a720007be" class="toolkit-side-menu__section" data-side-menu-section>
          <button
            role="tab" type="button"
            data-toolkit-toggle-id="ELEIÇÕES 2022-65c5355243527f6a720007be"
            aria-expanded="true"
            data-btn-side-menu-section="back"
            class="toolkit-side-menu__button toolkit-side-menu__button--back"
          >
            <i class="fa fa-arrow-left toolkit-side-menu__arrow-left"></i>
            Voltar
          </button>
            <ul class="toolkit-side-menu__column-list">
              <!-- loop com as colunas de cada item do menu -->
                  <li class="toolkit-side-menu__item">
                    <ul class="toolkit-side-menu__item-list" role="menu">
                      <!-- loop com todos os links presentes na coluna -->
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://noticias.r7.com/eleicoes-2022"
                            target="_self"
                            title="Ir Para Home"
                            class="toolkit-side-menu__link"
                          >
                            Home
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://noticias.r7.com/eleicoes-2022/pesquisas"
                            target="_self"
                            title="Ir Para Pesquisas"
                            class="toolkit-side-menu__link"
                          >
                            Pesquisas
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://noticias.r7.com/eleicoes-2022/noticias"
                            target="_self"
                            title="Ir Para Últimas Notícias"
                            class="toolkit-side-menu__link"
                          >
                            Últimas Notícias
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://noticias.r7.com/eleicoes-2022/apuracao-completa-segundo-turno"
                            target="_self"
                            title="Ir Para Apuração Segundo Turno"
                            class="toolkit-side-menu__link"
                          >
                            Apuração Segundo Turno
                          </a>
                        </li>
                    </ul>
                  </li>
            </ul>
        </div>
    </li>
    <li class="toolkit-side-menu__item" role="tab" aria-haspopup=&quot;true&quot;>
        <button
          role="tab" type="button"
          data-toolkit-toggle-id="ENTRETENIMENTO-65c5355243527f6a72000739"
          aria-expanded="false"
          data-btn-side-menu-section="open"
          class="toolkit-side-menu__button"
        >
          ENTRETENIMENTO
          <svg class="toolkit-side-menu__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/></svg>
        </button>
        <div id="ENTRETENIMENTO-65c5355243527f6a72000739" class="toolkit-side-menu__section" data-side-menu-section>
          <button
            role="tab" type="button"
            data-toolkit-toggle-id="ENTRETENIMENTO-65c5355243527f6a72000739"
            aria-expanded="true"
            data-btn-side-menu-section="back"
            class="toolkit-side-menu__button toolkit-side-menu__button--back"
          >
            <i class="fa fa-arrow-left toolkit-side-menu__arrow-left"></i>
            Voltar
          </button>
            <ul class="toolkit-side-menu__column-list">
              <!-- loop com as colunas de cada item do menu -->
                  <li class="toolkit-side-menu__item">
                    <ul class="toolkit-side-menu__item-list" role="menu">
                      <!-- loop com todos os links presentes na coluna -->
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://entretenimento.r7.com"
                            target="_self"
                            title="Ir Para Home"
                            class="toolkit-side-menu__link"
                          >
                            Home
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://entretenimento.r7.com/cinema-e-series"
                            target="_self"
                            title="Ir Para Cinema"
                            class="toolkit-side-menu__link"
                          >
                            Cinema
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://entretenimento.r7.com/famosos-e-tv"
                            target="_self"
                            title="Ir Para Famosos e TV"
                            class="toolkit-side-menu__link"
                          >
                            Famosos e TV
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://entretenimento.r7.com/games"
                            target="_self"
                            title="Ir Para Games"
                            class="toolkit-side-menu__link"
                          >
                            Games
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://entretenimento.r7.com/musica"
                            target="_self"
                            title="Ir Para Música"
                            class="toolkit-side-menu__link"
                          >
                            Música
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://entretenimento.r7.com/o-programa-de-todos-os-programas"
                            target="_self"
                            title="Ir Para O Programa"
                            class="toolkit-side-menu__link"
                          >
                            O Programa
                          </a>
                        </li>
                    </ul>
                  </li>
            </ul>
        </div>
    </li>
    <li class="toolkit-side-menu__item" role="tab" aria-haspopup=&quot;true&quot;>
        <button
          role="tab" type="button"
          data-toolkit-toggle-id="ESPORTES-65c5355243527f6a72000741"
          aria-expanded="false"
          data-btn-side-menu-section="open"
          class="toolkit-side-menu__button"
        >
          ESPORTES
          <svg class="toolkit-side-menu__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/></svg>
        </button>
        <div id="ESPORTES-65c5355243527f6a72000741" class="toolkit-side-menu__section" data-side-menu-section>
          <button
            role="tab" type="button"
            data-toolkit-toggle-id="ESPORTES-65c5355243527f6a72000741"
            aria-expanded="true"
            data-btn-side-menu-section="back"
            class="toolkit-side-menu__button toolkit-side-menu__button--back"
          >
            <i class="fa fa-arrow-left toolkit-side-menu__arrow-left"></i>
            Voltar
          </button>
            <ul class="toolkit-side-menu__column-list">
              <!-- loop com as colunas de cada item do menu -->
                  <li class="toolkit-side-menu__item">
                    <ul class="toolkit-side-menu__item-list" role="menu">
                      <!-- loop com todos os links presentes na coluna -->
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://esportes.r7.com"
                            target="_self"
                            title="Ir Para Home"
                            class="toolkit-side-menu__link"
                          >
                            Home
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://esportes.r7.com/futebol/campeonato-paulista"
                            target="_self"
                            title="Ir Para Paulistão 2024"
                            class="toolkit-side-menu__link"
                          >
                            Paulistão 2024
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://esportes.r7.com/automobilismo"
                            target="_self"
                            title="Ir Para Automobilismo"
                            class="toolkit-side-menu__link"
                          >
                            Automobilismo
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://esportes.r7.com/fora-de-jogo"
                            target="_self"
                            title="Ir Para Fora de Jogo"
                            class="toolkit-side-menu__link"
                          >
                            Fora de Jogo
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://esportes.r7.com/futebol"
                            target="_self"
                            title="Ir Para Futebol"
                            class="toolkit-side-menu__link"
                          >
                            Futebol
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://esportes.r7.com/e-sports"
                            target="_self"
                            title="Ir Para E-Sports"
                            class="toolkit-side-menu__link"
                          >
                            E-Sports
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://esportes.r7.com/joga-nas-11"
                            target="_self"
                            title="Ir Para Joga nas 11"
                            class="toolkit-side-menu__link"
                          >
                            Joga nas 11
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://esportes.r7.com/mais-esportes"
                            target="_self"
                            title="Ir Para Mais Esportes"
                            class="toolkit-side-menu__link"
                          >
                            Mais Esportes
                          </a>
                        </li>
                    </ul>
                  </li>
            </ul>
        </div>
    </li>
    <li class="toolkit-side-menu__item" role="tab" >
        <a
          tabindex="-1"
          href="https://hora7.r7.com"
          target="_self"
          title="Ir Para HORA 7"
          class="toolkit-side-menu__link"
        >
          HORA 7
        </a>
    </li>
    <li class="toolkit-side-menu__item" role="tab" aria-haspopup=&quot;true&quot;>
        <button
          role="tab" type="button"
          data-toolkit-toggle-id="JR 24H-65c5355243527f6a7200074b"
          aria-expanded="false"
          data-btn-side-menu-section="open"
          class="toolkit-side-menu__button"
        >
          JR 24H
          <svg class="toolkit-side-menu__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/></svg>
        </button>
        <div id="JR 24H-65c5355243527f6a7200074b" class="toolkit-side-menu__section" data-side-menu-section>
          <button
            role="tab" type="button"
            data-toolkit-toggle-id="JR 24H-65c5355243527f6a7200074b"
            aria-expanded="true"
            data-btn-side-menu-section="back"
            class="toolkit-side-menu__button toolkit-side-menu__button--back"
          >
            <i class="fa fa-arrow-left toolkit-side-menu__arrow-left"></i>
            Voltar
          </button>
            <ul class="toolkit-side-menu__column-list">
              <!-- loop com as colunas de cada item do menu -->
                  <li class="toolkit-side-menu__item">
                    <ul class="toolkit-side-menu__item-list" role="menu">
                      <!-- loop com todos os links presentes na coluna -->
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://noticias.r7.com"
                            target="_self"
                            title="Ir Para Home"
                            class="toolkit-side-menu__link"
                          >
                            Home
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://noticias.r7.com/agronegocios"
                            target="_self"
                            title="Ir Para Agronegócio"
                            class="toolkit-side-menu__link"
                          >
                            Agronegócio
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://noticias.r7.com/carros"
                            target="_self"
                            title="Ir Para Carros"
                            class="toolkit-side-menu__link"
                          >
                            Carros
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://noticias.r7.com/concursos"
                            target="_self"
                            title="Ir Para Concursos"
                            class="toolkit-side-menu__link"
                          >
                            Concursos
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://noticias.r7.com/saude/coronavirus"
                            target="_self"
                            title="Ir Para Coronavírus"
                            class="toolkit-side-menu__link"
                          >
                            Coronavírus
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://noticias.r7.com/direito-do-consumidor"
                            target="_self"
                            title="Ir Para Direito do Consumidor"
                            class="toolkit-side-menu__link"
                          >
                            Direito do Consumidor
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://noticias.r7.com/economia"
                            target="_self"
                            title="Ir Para Economia"
                            class="toolkit-side-menu__link"
                          >
                            Economia
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://noticias.r7.com/educacao"
                            target="_self"
                            title="Ir Para Educação"
                            class="toolkit-side-menu__link"
                          >
                            Educação
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://noticias.r7.com/e-golpe"
                            target="_self"
                            title="Ir Para É golpe!"
                            class="toolkit-side-menu__link"
                          >
                            É golpe!
                          </a>
                        </li>
                    </ul>
                  </li>
                  <li class="toolkit-side-menu__item">
                    <ul class="toolkit-side-menu__item-list" role="menu">
                      <!-- loop com todos os links presentes na coluna -->
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://noticias.r7.com/internacional/guerra-israel-x-hamas"
                            target="_self"
                            title="Ir Para Guerra Israel x Hamas"
                            class="toolkit-side-menu__link"
                          >
                            Guerra Israel x Hamas
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://noticias.r7.com/internacional/russia-x-ucrania"
                            target="_self"
                            title="Ir Para Guerra na Ucrânia"
                            class="toolkit-side-menu__link"
                          >
                            Guerra na Ucrânia
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://noticias.r7.com/economia/imposto-de-renda"
                            target="_self"
                            title="Ir Para Imposto de Renda"
                            class="toolkit-side-menu__link"
                          >
                            Imposto de Renda
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://noticias.r7.com/internacional"
                            target="_self"
                            title="Ir Para Internacional"
                            class="toolkit-side-menu__link"
                          >
                            Internacional
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://tempo.r7.com"
                            target="_self"
                            title="Ir Para R7 Tempo"
                            class="toolkit-side-menu__link"
                          >
                            R7 Tempo
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://noticias.r7.com/saude"
                            target="_self"
                            title="Ir Para Saúde"
                            class="toolkit-side-menu__link"
                          >
                            Saúde
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://noticias.r7.com/tecnologia-e-ciencia"
                            target="_self"
                            title="Ir Para Tecnologia &amp; Ciência"
                            class="toolkit-side-menu__link"
                          >
                            Tecnologia &amp; Ciência
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://noticias.r7.com/tim-5g"
                            target="_self"
                            title="Ir Para Tim 5G"
                            class="toolkit-side-menu__link"
                          >
                            Tim 5G
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://noticias.r7.com/saude/coronavirus/mapa-da-vacinacao/#br"
                            target="_self"
                            title="Ir Para Vacinômetro"
                            class="toolkit-side-menu__link"
                          >
                            Vacinômetro
                          </a>
                        </li>
                    </ul>
                  </li>
                  <li class="toolkit-side-menu__item">
                    <ul class="toolkit-side-menu__item-list" role="menu">
                      <!-- loop com todos os links presentes na coluna -->
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://noticias.r7.com/brasil"
                            target="_self"
                            title="Ir Para Brasil"
                            class="toolkit-side-menu__link"
                          >
                            Brasil
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://noticias.r7.com/cidades"
                            target="_self"
                            title="Ir Para Cidades"
                            class="toolkit-side-menu__link"
                          >
                            Cidades
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://noticias.r7.com/brasilia"
                            target="_self"
                            title="Ir Para Brasília"
                            class="toolkit-side-menu__link"
                          >
                            Brasília
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://noticias.r7.com/sao-paulo"
                            target="_self"
                            title="Ir Para São Paulo"
                            class="toolkit-side-menu__link"
                          >
                            São Paulo
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://noticias.r7.com/rio-de-janeiro"
                            target="_self"
                            title="Ir Para Rio de Janeiro"
                            class="toolkit-side-menu__link"
                          >
                            Rio de Janeiro
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://noticias.r7.com/minas-gerais"
                            target="_self"
                            title="Ir Para Minas Gerais"
                            class="toolkit-side-menu__link"
                          >
                            Minas Gerais
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://noticias.r7.com/pernambuco"
                            target="_self"
                            title="Ir Para Pernambuco"
                            class="toolkit-side-menu__link"
                          >
                            Pernambuco
                          </a>
                        </li>
                    </ul>
                  </li>
            </ul>
        </div>
    </li>
    <li class="toolkit-side-menu__item" role="tab" >
        <a
          tabindex="-1"
          href="https://monitor7.r7.com"
          target="_self"
          title="Ir Para MONITOR7"
          class="toolkit-side-menu__link"
        >
          MONITOR7
        </a>
    </li>
    <li class="toolkit-side-menu__item" role="tab" >
        <a
          tabindex="-1"
          href="https://www.mundorecord.com.br"
          target="_blank"
          title="Ir Para MUNDO RECORD"
          class="toolkit-side-menu__link"
        >
          MUNDO RECORD
        </a>
    </li>
    <li class="toolkit-side-menu__item" role="tab" >
        <a
          tabindex="-1"
          href="https://www.playplus.com"
          target="_self"
          title="Ir Para PLAYPLUS"
          class="toolkit-side-menu__link"
        >
          PLAYPLUS
        </a>
    </li>
    <li class="toolkit-side-menu__item" role="tab" >
        <a
          tabindex="-1"
          href="https://www.r7.com/apps"
          target="_self"
          title="Ir Para R7 APPs"
          class="toolkit-side-menu__link"
        >
          R7 APPs
        </a>
    </li>
    <li class="toolkit-side-menu__item" role="tab" >
        <a
          tabindex="-1"
          href="https://www.r7.com/cupons"
          target="_self"
          title="Ir Para R7 CUPONS"
          class="toolkit-side-menu__link"
        >
          R7 CUPONS
        </a>
    </li>
    <li class="toolkit-side-menu__item" role="tab" >
        <a
          tabindex="-1"
          href="https://entrevista.r7.com"
          target="_self"
          title="Ir Para R7 ENTREVISTA"
          class="toolkit-side-menu__link"
        >
          R7 ENTREVISTA
        </a>
    </li>
    <li class="toolkit-side-menu__item" role="tab" >
        <a
          tabindex="-1"
          href="https://estudio.r7.com"
          target="_self"
          title="Ir Para R7 ESTÚDIO"
          class="toolkit-side-menu__link"
        >
          R7 ESTÚDIO
        </a>
    </li>
    <li class="toolkit-side-menu__item" role="tab" >
        <a
          tabindex="-1"
          href="https://nitro.r7.com"
          target="_self"
          title="Ir Para R7 NITRO"
          class="toolkit-side-menu__link"
        >
          R7 NITRO
        </a>
    </li>
    <li class="toolkit-side-menu__item" role="tab" >
        <a
          tabindex="-1"
          href="https://podcasts.r7.com/"
          target="_self"
          title="Ir Para R7 PODCASTS"
          class="toolkit-side-menu__link"
        >
          R7 PODCASTS
        </a>
    </li>
    <li class="toolkit-side-menu__item" role="tab" >
        <a
          tabindex="-1"
          href="https://receitas.r7.com"
          target="_self"
          title="Ir Para R7 RECEITAS"
          class="toolkit-side-menu__link"
        >
          R7 RECEITAS
        </a>
    </li>
    <li class="toolkit-side-menu__item" role="tab" >
        <a
          tabindex="-1"
          href="https://tempo.r7.com/sp/sao-paulo"
          target="_self"
          title="Ir Para R7 TEMPO"
          class="toolkit-side-menu__link"
        >
          R7 TEMPO
        </a>
    </li>
    <li class="toolkit-side-menu__item" role="tab" >
        <a
          tabindex="-1"
          href="https://trilhassonoras.r7.com"
          target="_self"
          title="Ir Para R7 TRILHAS SONORAS"
          class="toolkit-side-menu__link"
        >
          R7 TRILHAS SONORAS
        </a>
    </li>
    <li class="toolkit-side-menu__item" role="tab" >
        <a
          tabindex="-1"
          href="https://videos.r7.com"
          target="_self"
          title="Ir Para R7 VÍDEOS"
          class="toolkit-side-menu__link"
        >
          R7 VÍDEOS
        </a>
    </li>
    <li class="toolkit-side-menu__item" role="tab" aria-haspopup=&quot;true&quot;>
        <button
          role="tab" type="button"
          data-toolkit-toggle-id="RECORD-65c5355243527f6a72000768"
          aria-expanded="false"
          data-btn-side-menu-section="open"
          class="toolkit-side-menu__button"
        >
          RECORD
          <svg class="toolkit-side-menu__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/></svg>
        </button>
        <div id="RECORD-65c5355243527f6a72000768" class="toolkit-side-menu__section" data-side-menu-section>
          <button
            role="tab" type="button"
            data-toolkit-toggle-id="RECORD-65c5355243527f6a72000768"
            aria-expanded="true"
            data-btn-side-menu-section="back"
            class="toolkit-side-menu__button toolkit-side-menu__button--back"
          >
            <i class="fa fa-arrow-left toolkit-side-menu__arrow-left"></i>
            Voltar
          </button>
            <ul class="toolkit-side-menu__column-list">
              <!-- loop com as colunas de cada item do menu -->
                  <span class="toolkit-side-menu__category-line"></span> 
                  <li class="toolkit-side-menu__item">
                      <h4 class="toolkit-side-menu__category-title">RECORD</h4>
                    <ul class="toolkit-side-menu__item-list" role="menu">
                      <!-- loop com todos os links presentes na coluna -->
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://recordtv.r7.com/"
                            target="_self"
                            title="Ir Para HOME RECORD"
                            class="toolkit-side-menu__link"
                          >
                            HOME RECORD
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://recordtv.r7.com/programacao"
                            target="_self"
                            title="Ir Para Programação"
                            class="toolkit-side-menu__link"
                          >
                            Programação
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://recordtv.r7.com/recordtv-emissoras"
                            target="_self"
                            title="Ir Para Emissoras"
                            class="toolkit-side-menu__link"
                          >
                            Emissoras
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://sociedadeonline.com/"
                            target="_self"
                            title="Ir Para Rádio Sociedade"
                            class="toolkit-side-menu__link"
                          >
                            Rádio Sociedade
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://www.recordtvamericas.com/"
                            target="_self"
                            title="Ir Para Record Américas"
                            class="toolkit-side-menu__link"
                          >
                            Record Américas
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://recordtv.r7.com/record-europa"
                            target="_self"
                            title="Ir Para Record Europa"
                            class="toolkit-side-menu__link"
                          >
                            Record Europa
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://recordtv.r7.com/recordtv-interior-sp"
                            target="_self"
                            title="Ir Para Record Interior SP"
                            class="toolkit-side-menu__link"
                          >
                            Record Interior SP
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://recordtvjapan.com/"
                            target="_self"
                            title="Ir Para Record Japão"
                            class="toolkit-side-menu__link"
                          >
                            Record Japão
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://recordtv.r7.com/record-tv-litoral-e-vale"
                            target="_self"
                            title="Ir Para Record Litoral e Vale"
                            class="toolkit-side-menu__link"
                          >
                            Record Litoral e Vale
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="http://recordtv.r7.com/tv-digital"
                            target="_blank"
                            title="Ir Para TV Digital"
                            class="toolkit-side-menu__link"
                          >
                            TV Digital
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://recordtv.r7.com/videos"
                            target="_self"
                            title="Ir Para Vídeos"
                            class="toolkit-side-menu__link"
                          >
                            Vídeos
                          </a>
                        </li>
                    </ul>
                  </li>
                  <span class="toolkit-side-menu__category-line"></span> 
                  <li class="toolkit-side-menu__item">
                      <h4 class="toolkit-side-menu__category-title">JORNALISMO</h4>
                    <ul class="toolkit-side-menu__item-list" role="menu">
                      <!-- loop com todos os links presentes na coluna -->
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://recordtv.r7.com/balanco-geral"
                            target="_self"
                            title="Ir Para Balanço Geral"
                            class="toolkit-side-menu__link"
                          >
                            Balanço Geral
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://recordtv.r7.com/balanco-geral-manha"
                            target="_self"
                            title="Ir Para Balanço Geral Manhã"
                            class="toolkit-side-menu__link"
                          >
                            Balanço Geral Manhã
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://recordtv.r7.com/camera-record"
                            target="_self"
                            title="Ir Para Câmera Record"
                            class="toolkit-side-menu__link"
                          >
                            Câmera Record
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://recordtv.r7.com/cidade-alerta"
                            target="_self"
                            title="Ir Para Cidade Alerta"
                            class="toolkit-side-menu__link"
                          >
                            Cidade Alerta
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://recordtv.r7.com/doc-investigacao"
                            target="_self"
                            title="Ir Para Doc Investigação"
                            class="toolkit-side-menu__link"
                          >
                            Doc Investigação
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://recordtv.r7.com/domingo-espetacular"
                            target="_self"
                            title="Ir Para Domingo Espetacular"
                            class="toolkit-side-menu__link"
                          >
                            Domingo Espetacular
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://recordtv.r7.com/fala-brasil"
                            target="_self"
                            title="Ir Para Fala Brasil "
                            class="toolkit-side-menu__link"
                          >
                            Fala Brasil 
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://noticias.r7.com"
                            target="_self"
                            title="Ir Para Jornal da Record"
                            class="toolkit-side-menu__link"
                          >
                            Jornal da Record
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://noticias.r7.com/record-news"
                            target="_self"
                            title="Ir Para Record News"
                            class="toolkit-side-menu__link"
                          >
                            Record News
                          </a>
                        </li>
                    </ul>
                  </li>
                  <span class="toolkit-side-menu__category-line"></span> 
                  <li class="toolkit-side-menu__item">
                      <h4 class="toolkit-side-menu__category-title">VARIEDADES</h4>
                    <ul class="toolkit-side-menu__item-list" role="menu">
                      <!-- loop com todos os links presentes na coluna -->
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://brasilcaminhoneiro.com.br"
                            target="_blank"
                            title="Ir Para Brasil Caminhoneiro"
                            class="toolkit-side-menu__link"
                          >
                            Brasil Caminhoneiro
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://recordtv.r7.com/hoje-em-dia"
                            target="_self"
                            title="Ir Para Hoje em Dia"
                            class="toolkit-side-menu__link"
                          >
                            Hoje em Dia
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://recordtv.r7.com/hora-do-faro"
                            target="_self"
                            title="Ir Para Hora do Faro"
                            class="toolkit-side-menu__link"
                          >
                            Hora do Faro
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://mundorecord.com.br/ "
                            target="_blank"
                            title="Ir Para Mundo Record"
                            class="toolkit-side-menu__link"
                          >
                            Mundo Record
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://recordtv.r7.com/love-school-escola-amor"
                            target="_self"
                            title="Ir Para The Love School - Escola do Amor"
                            class="toolkit-side-menu__link"
                          >
                            The Love School - Escola do Amor
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href=""
                            target="_self"
                            title="Ir Para "
                            class="toolkit-side-menu__link"
                          >
                            
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href=""
                            target="_self"
                            title="Ir Para DRAMATURGIA"
                            class="toolkit-side-menu__link"
                          >
                            DRAMATURGIA
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://recordtv.r7.com/a-terra-prometida"
                            target="_self"
                            title="Ir Para A Terra Prometida"
                            class="toolkit-side-menu__link"
                          >
                            A Terra Prometida
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://recordtv.r7.com/jezabel"
                            target="_self"
                            title="Ir Para Jezabel"
                            class="toolkit-side-menu__link"
                          >
                            Jezabel
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://recordtv.r7.com/pecado-mortal"
                            target="_self"
                            title="Ir Para Pecado Mortal"
                            class="toolkit-side-menu__link"
                          >
                            Pecado Mortal
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://recordtv.r7.com/quando-chama-o-coracao"
                            target="_self"
                            title="Ir Para Quando Chama o Coração"
                            class="toolkit-side-menu__link"
                          >
                            Quando Chama o Coração
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://recordtv.r7.com/reis"
                            target="_self"
                            title="Ir Para Reis"
                            class="toolkit-side-menu__link"
                          >
                            Reis
                          </a>
                        </li>
                    </ul>
                  </li>
            </ul>
        </div>
    </li>
    <li class="toolkit-side-menu__item" role="tab" >
        <a
          tabindex="-1"
          href="http://r7.com/reis"
          target="_self"
          title="Ir Para REIS"
          class="toolkit-side-menu__link"
        >
          REIS
        </a>
    </li>
    <li class="toolkit-side-menu__item" role="tab" aria-haspopup=&quot;true&quot;>
        <button
          role="tab" type="button"
          data-toolkit-toggle-id="RENDA EXTRA-65c5355243527f6a720007c4"
          aria-expanded="false"
          data-btn-side-menu-section="open"
          class="toolkit-side-menu__button"
        >
          RENDA EXTRA
          <svg class="toolkit-side-menu__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/></svg>
        </button>
        <div id="RENDA EXTRA-65c5355243527f6a720007c4" class="toolkit-side-menu__section" data-side-menu-section>
          <button
            role="tab" type="button"
            data-toolkit-toggle-id="RENDA EXTRA-65c5355243527f6a720007c4"
            aria-expanded="true"
            data-btn-side-menu-section="back"
            class="toolkit-side-menu__button toolkit-side-menu__button--back"
          >
            <i class="fa fa-arrow-left toolkit-side-menu__arrow-left"></i>
            Voltar
          </button>
            <ul class="toolkit-side-menu__column-list">
              <!-- loop com as colunas de cada item do menu -->
                  <li class="toolkit-side-menu__item">
                    <ul class="toolkit-side-menu__item-list" role="menu">
                      <!-- loop com todos os links presentes na coluna -->
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://renda-extra.r7.com"
                            target="_self"
                            title="Ir Para Home"
                            class="toolkit-side-menu__link"
                          >
                            Home
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://renda-extra.r7.com/minha-historia"
                            target="_self"
                            title="Ir Para Minha História"
                            class="toolkit-side-menu__link"
                          >
                            Minha História
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://renda-extra.r7.com/seu-bolso"
                            target="_self"
                            title="Ir Para Seu Bolso"
                            class="toolkit-side-menu__link"
                          >
                            Seu Bolso
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://renda-extra.r7.com/profissionalize-se"
                            target="_self"
                            title="Ir Para Profissionalize-se"
                            class="toolkit-side-menu__link"
                          >
                            Profissionalize-se
                          </a>
                        </li>
                    </ul>
                  </li>
            </ul>
        </div>
    </li>
    <li class="toolkit-side-menu__item" role="tab" >
        <a
          tabindex="-1"
          href="https://rpet.r7.com"
          target="_self"
          title="Ir Para RPET"
          class="toolkit-side-menu__link"
        >
          RPET
        </a>
    </li>
    <li class="toolkit-side-menu__item" role="tab" >
        <a
          tabindex="-1"
          href="https://virtz.r7.com"
          target="_self"
          title="Ir Para VIRTZ"
          class="toolkit-side-menu__link"
        >
          VIRTZ
        </a>
    </li>
    <li class="toolkit-side-menu__item" role="tab" aria-haspopup=&quot;true&quot;>
        <button
          role="tab" type="button"
          data-toolkit-toggle-id="VIVA A VIDA-65c5355243527f6a720007ca"
          aria-expanded="false"
          data-btn-side-menu-section="open"
          class="toolkit-side-menu__button"
        >
          VIVA A VIDA
          <svg class="toolkit-side-menu__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/></svg>
        </button>
        <div id="VIVA A VIDA-65c5355243527f6a720007ca" class="toolkit-side-menu__section" data-side-menu-section>
          <button
            role="tab" type="button"
            data-toolkit-toggle-id="VIVA A VIDA-65c5355243527f6a720007ca"
            aria-expanded="true"
            data-btn-side-menu-section="back"
            class="toolkit-side-menu__button toolkit-side-menu__button--back"
          >
            <i class="fa fa-arrow-left toolkit-side-menu__arrow-left"></i>
            Voltar
          </button>
            <ul class="toolkit-side-menu__column-list">
              <!-- loop com as colunas de cada item do menu -->
                  <li class="toolkit-side-menu__item">
                    <ul class="toolkit-side-menu__item-list" role="menu">
                      <!-- loop com todos os links presentes na coluna -->
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://vivaavida.r7.com"
                            target="_self"
                            title="Ir Para Home"
                            class="toolkit-side-menu__link"
                          >
                            Home
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://vivaavida.r7.com/beleza"
                            target="_self"
                            title="Ir Para Beleza"
                            class="toolkit-side-menu__link"
                          >
                            Beleza
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://vivaavida.r7.com/bem-estar"
                            target="_self"
                            title="Ir Para Bem-Estar"
                            class="toolkit-side-menu__link"
                          >
                            Bem-Estar
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://vivaavida.r7.com/casa-e-decoracao"
                            target="_self"
                            title="Ir Para Casa e Decoração"
                            class="toolkit-side-menu__link"
                          >
                            Casa e Decoração
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://vivaavida.r7.com/dietas"
                            target="_self"
                            title="Ir Para Dietas"
                            class="toolkit-side-menu__link"
                          >
                            Dietas
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://vivaavida.r7.com/filhos"
                            target="_self"
                            title="Ir Para Filhos"
                            class="toolkit-side-menu__link"
                          >
                            Filhos
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://vivaavida.r7.com/moda"
                            target="_self"
                            title="Ir Para Moda"
                            class="toolkit-side-menu__link"
                          >
                            Moda
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://vivaavida.r7.com/viagens"
                            target="_self"
                            title="Ir Para Viagens"
                            class="toolkit-side-menu__link"
                          >
                            Viagens
                          </a>
                        </li>
                    </ul>
                  </li>
            </ul>
        </div>
    </li>
</ul>

      </div>
      <span class="toolkit-side-menu__category-line"></span>

      <div class="toolkit-side-menu__category">
        <h4 class="toolkit-side-menu__category-title">Institucional</h4>
        <ul class="toolkit-side-menu__list" role="tablist" aria-label="menu">
    <li class="toolkit-side-menu__item" role="tab" >
        <a
          tabindex="-1"
          href="https://recordtv.gupy.io"
          target="_blank"
          title="Ir Para CARREIRA"
          class="toolkit-side-menu__link"
        >
          CARREIRA
        </a>
    </li>
    <li class="toolkit-side-menu__item" role="tab" >
        <a
          tabindex="-1"
          href="http://recordtv.r7.com/cite"
          target="_self"
          title="Ir Para CITE (FALE CONOSCO)"
          class="toolkit-side-menu__link"
        >
          CITE (FALE CONOSCO)
        </a>
    </li>
    <li class="toolkit-side-menu__item" role="tab" >
        <a
          tabindex="-1"
          href="http://comercial.recordtv.com.br"
          target="_self"
          title="Ir Para COMERCIAL"
          class="toolkit-side-menu__link"
        >
          COMERCIAL
        </a>
    </li>
    <li class="toolkit-side-menu__item" role="tab" aria-haspopup=&quot;true&quot;>
        <button
          role="tab" type="button"
          data-toolkit-toggle-id="GRUPO RECORD-65c5355243527f6a720007d5"
          aria-expanded="false"
          data-btn-side-menu-section="open"
          class="toolkit-side-menu__button"
        >
          GRUPO RECORD
          <svg class="toolkit-side-menu__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/></svg>
        </button>
        <div id="GRUPO RECORD-65c5355243527f6a720007d5" class="toolkit-side-menu__section" data-side-menu-section>
          <button
            role="tab" type="button"
            data-toolkit-toggle-id="GRUPO RECORD-65c5355243527f6a720007d5"
            aria-expanded="true"
            data-btn-side-menu-section="back"
            class="toolkit-side-menu__button toolkit-side-menu__button--back"
          >
            <i class="fa fa-arrow-left toolkit-side-menu__arrow-left"></i>
            Voltar
          </button>
            <ul class="toolkit-side-menu__column-list">
              <!-- loop com as colunas de cada item do menu -->
                  <li class="toolkit-side-menu__item">
                    <ul class="toolkit-side-menu__item-list" role="menu">
                      <!-- loop com todos os links presentes na coluna -->
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://www.bancodigimais.com.br"
                            target="_blank"
                            title="Ir Para BANCO DIGI+"
                            class="toolkit-side-menu__link"
                          >
                            BANCO DIGI+
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://sociedadeonline.com"
                            target="_blank"
                            title="Ir Para RÁDIO SOCIEDADE"
                            class="toolkit-side-menu__link"
                          >
                            RÁDIO SOCIEDADE
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://www.erecord.com.br"
                            target="_self"
                            title="Ir Para RECORD ENTRETENIMENTO"
                            class="toolkit-side-menu__link"
                          >
                            RECORD ENTRETENIMENTO
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://www.redefamilia.com.br"
                            target="_self"
                            title="Ir Para REDE FAMÍLIA"
                            class="toolkit-side-menu__link"
                          >
                            REDE FAMÍLIA
                          </a>
                        </li>
                    </ul>
                  </li>
            </ul>
        </div>
    </li>
    <li class="toolkit-side-menu__item" role="tab" >
        <a
          tabindex="-1"
          href="https://ressoar.org.br"
          target="_blank"
          title="Ir Para INSTITUTO RESSOAR"
          class="toolkit-side-menu__link"
        >
          INSTITUTO RESSOAR
        </a>
    </li>
    <li class="toolkit-side-menu__item" role="tab" >
        <a
          tabindex="-1"
          href="https://recordtv.r7.com/recordtv-emissoras"
          target="_self"
          title="Ir Para RECORD EMISSORAS"
          class="toolkit-side-menu__link"
        >
          RECORD EMISSORAS
        </a>
    </li>
    <li class="toolkit-side-menu__item" role="tab" aria-haspopup=&quot;true&quot;>
        <button
          role="tab" type="button"
          data-toolkit-toggle-id="RECORD INTERNACIONAL-65c5355243527f6a720007db"
          aria-expanded="false"
          data-btn-side-menu-section="open"
          class="toolkit-side-menu__button"
        >
          RECORD INTERNACIONAL
          <svg class="toolkit-side-menu__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/></svg>
        </button>
        <div id="RECORD INTERNACIONAL-65c5355243527f6a720007db" class="toolkit-side-menu__section" data-side-menu-section>
          <button
            role="tab" type="button"
            data-toolkit-toggle-id="RECORD INTERNACIONAL-65c5355243527f6a720007db"
            aria-expanded="true"
            data-btn-side-menu-section="back"
            class="toolkit-side-menu__button toolkit-side-menu__button--back"
          >
            <i class="fa fa-arrow-left toolkit-side-menu__arrow-left"></i>
            Voltar
          </button>
            <ul class="toolkit-side-menu__column-list">
              <!-- loop com as colunas de cada item do menu -->
                  <li class="toolkit-side-menu__item">
                    <ul class="toolkit-side-menu__item-list" role="menu">
                      <!-- loop com todos os links presentes na coluna -->
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://recordtvamericas.com"
                            target="_blank"
                            title="Ir Para AMÉRICAS"
                            class="toolkit-side-menu__link"
                          >
                            AMÉRICAS
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://recordtv.r7.com/record-europa"
                            target="_blank"
                            title="Ir Para EUROPA"
                            class="toolkit-side-menu__link"
                          >
                            EUROPA
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://recordtvjapan.com"
                            target="_blank"
                            title="Ir Para JAPÃO"
                            class="toolkit-side-menu__link"
                          >
                            JAPÃO
                          </a>
                        </li>
                    </ul>
                  </li>
            </ul>
        </div>
    </li>
    <li class="toolkit-side-menu__item" role="tab" >
        <a
          tabindex="-1"
          href="https://noticias.r7.com/record-news"
          target="_self"
          title="Ir Para RECORD NEWS"
          class="toolkit-side-menu__link"
        >
          RECORD NEWS
        </a>
    </li>
    <li class="toolkit-side-menu__item" role="tab" aria-haspopup=&quot;true&quot;>
        <button
          role="tab" type="button"
          data-toolkit-toggle-id="UNIVERSAL-65c5355243527f6a720007e0"
          aria-expanded="false"
          data-btn-side-menu-section="open"
          class="toolkit-side-menu__button"
        >
          UNIVERSAL
          <svg class="toolkit-side-menu__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/></svg>
        </button>
        <div id="UNIVERSAL-65c5355243527f6a720007e0" class="toolkit-side-menu__section" data-side-menu-section>
          <button
            role="tab" type="button"
            data-toolkit-toggle-id="UNIVERSAL-65c5355243527f6a720007e0"
            aria-expanded="true"
            data-btn-side-menu-section="back"
            class="toolkit-side-menu__button toolkit-side-menu__button--back"
          >
            <i class="fa fa-arrow-left toolkit-side-menu__arrow-left"></i>
            Voltar
          </button>
            <ul class="toolkit-side-menu__column-list">
              <!-- loop com as colunas de cada item do menu -->
                  <li class="toolkit-side-menu__item">
                    <ul class="toolkit-side-menu__item-list" role="menu">
                      <!-- loop com todos os links presentes na coluna -->
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://videos.r7.com/universal"
                            target="_self"
                            title="Ir Para HOME"
                            class="toolkit-side-menu__link"
                          >
                            HOME
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://www.universal.org"
                            target="_blank"
                            title="Ir Para UNIVERSAL.ORG"
                            class="toolkit-side-menu__link"
                          >
                            UNIVERSAL.ORG
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://www.univervideo.com"
                            target="_blank"
                            title="Ir Para UNIVER"
                            class="toolkit-side-menu__link"
                          >
                            UNIVER
                          </a>
                        </li>
                        <li class="toolkit-side-menu__item" role="menuitem">
                          <a
                            tabindex="-1"
                            href="https://redealeluia.com.br"
                            target="_blank"
                            title="Ir Para REDE ALELUIA"
                            class="toolkit-side-menu__link"
                          >
                            REDE ALELUIA
                          </a>
                        </li>
                    </ul>
                  </li>
            </ul>
        </div>
    </li>
</ul>

      </div>
      <span class="toolkit-side-menu__category-line"></span>
  </div>
  </div>
</nav>
          <nav class="header-nav" aria-label="Menu Principal">
            <span class="visuallyhidden">Menu Principal</span>
            
            <ul class="header-menu">
        <li class="header-menu-item ">
          <a href="https://noticias.r7.com/brasilia" data-css-title="BRASÍLIA" target="_self" class="header-menu-link" title="Ir para BRASÍLIA">
            BRASÍLIA
          </a>
              <svg class="header-menu-arrow" width="10" height="7" viewBox="0 0 10 7" fill="none">
                <path d="M5.528.227 9.78 4.616a.789.789 0 0 1 0 1.094l-.707.73a.73.73 0 0 1-1.06 0L5 3.327 
                  1.987 6.44a.73.73 0 0 1-1.06 0L.22 5.71a.789.789 0 0 1 0-1.093L4.472.227a.727.727 0 0 1 1.056 0z" 
                  fill="#fff"/>
              </svg>
            <div class="header-submenu header-submenu-1-column">
      <ul class="header-submenu-column ">
        <p class="header-submenu-title-column"> </p>
          <li class="header-submenu-item">
            <a href="https://noticias.r7.com/brasilia" target="_self" class="header-submenu-link" title="Ir Para Home" style="color: #666">
              Home
            </a>
          </li>
          <li class="header-submenu-item">
            <a href="https://noticias.r7.com/brasilia/noticias" target="_self" class="header-submenu-link" title="Ir Para Noticias" style="color: #666">
              Noticias
            </a>
          </li>
          <li class="header-submenu-item">
            <a href="https://noticias.r7.com/brasilia/fotos" target="_self" class="header-submenu-link" title="Ir Para Fotos" style="color: #666">
              Fotos
            </a>
          </li>
          <li class="header-submenu-item">
            <a href="https://noticias.r7.com/brasilia/videos" target="_self" class="header-submenu-link" title="Ir Para Vídeos" style="color: #666">
              Vídeos
            </a>
          </li>
      </ul>
  </div>

        </li>
        <li class="header-menu-item ">
          <a href="https://entretenimento.r7.com" data-css-title="ENTRETENIMENTO" target="_self" class="header-menu-link" title="Ir para ENTRETENIMENTO">
            ENTRETENIMENTO
          </a>
              <svg class="header-menu-arrow" width="10" height="7" viewBox="0 0 10 7" fill="none">
                <path d="M5.528.227 9.78 4.616a.789.789 0 0 1 0 1.094l-.707.73a.73.73 0 0 1-1.06 0L5 3.327 
                  1.987 6.44a.73.73 0 0 1-1.06 0L.22 5.71a.789.789 0 0 1 0-1.093L4.472.227a.727.727 0 0 1 1.056 0z" 
                  fill="#fff"/>
              </svg>
            <div class="header-submenu header-submenu-1-column">
      <ul class="header-submenu-column ">
        <p class="header-submenu-title-column"> </p>
          <li class="header-submenu-item">
            <a href="https://entretenimento.r7.com" target="_self" class="header-submenu-link" title="Ir Para Home" style="color: #666">
              Home
            </a>
          </li>
          <li class="header-submenu-item">
            <a href="https://entretenimento.r7.com/cinema-e-series" target="_self" class="header-submenu-link" title="Ir Para Cinema" style="color: #666">
              Cinema
            </a>
          </li>
          <li class="header-submenu-item">
            <a href="https://entretenimento.r7.com/famosos-e-tv" target="_self" class="header-submenu-link" title="Ir Para Famosos e TV" style="color: #666">
              Famosos e TV
            </a>
          </li>
          <li class="header-submenu-item">
            <a href="https://entretenimento.r7.com/games" target="_self" class="header-submenu-link" title="Ir Para Games" style="color: #666">
              Games
            </a>
          </li>
          <li class="header-submenu-item">
            <a href="https://entretenimento.r7.com/musica" target="_self" class="header-submenu-link" title="Ir Para Música" style="color: #666">
              Música
            </a>
          </li>
          <li class="header-submenu-item">
            <a href="https://entretenimento.r7.com/o-programa-de-todos-os-programas" target="_self" class="header-submenu-link" title="Ir Para O Programa" style="color: #666">
              O Programa
            </a>
          </li>
      </ul>
  </div>

        </li>
        <li class="header-menu-item ">
          <a href="https://esportes.r7.com" data-css-title="ESPORTES" target="_self" class="header-menu-link" title="Ir para ESPORTES">
            ESPORTES
          </a>
              <svg class="header-menu-arrow" width="10" height="7" viewBox="0 0 10 7" fill="none">
                <path d="M5.528.227 9.78 4.616a.789.789 0 0 1 0 1.094l-.707.73a.73.73 0 0 1-1.06 0L5 3.327 
                  1.987 6.44a.73.73 0 0 1-1.06 0L.22 5.71a.789.789 0 0 1 0-1.093L4.472.227a.727.727 0 0 1 1.056 0z" 
                  fill="#fff"/>
              </svg>
            <div class="header-submenu header-submenu-1-column">
      <ul class="header-submenu-column ">
        <p class="header-submenu-title-column"> </p>
          <li class="header-submenu-item">
            <a href="https://esportes.r7.com" target="_self" class="header-submenu-link" title="Ir Para Home" style="color: #666">
              Home
            </a>
          </li>
          <li class="header-submenu-item">
            <a href="https://esportes.r7.com/futebol/campeonato-paulista" target="_self" class="header-submenu-link" title="Ir Para Paulistão 2024" style="color: #666">
              Paulistão 2024
            </a>
          </li>
          <li class="header-submenu-item">
            <a href="https://esportes.r7.com/automobilismo" target="_self" class="header-submenu-link" title="Ir Para Automobilismo" style="color: #666">
              Automobilismo
            </a>
          </li>
          <li class="header-submenu-item">
            <a href="https://esportes.r7.com/fora-de-jogo" target="_self" class="header-submenu-link" title="Ir Para Fora de Jogo" style="color: #666">
              Fora de Jogo
            </a>
          </li>
          <li class="header-submenu-item">
            <a href="https://esportes.r7.com/futebol" target="_self" class="header-submenu-link" title="Ir Para Futebol" style="color: #666">
              Futebol
            </a>
          </li>
          <li class="header-submenu-item">
            <a href="https://esportes.r7.com/e-sports" target="_self" class="header-submenu-link" title="Ir Para E-Sports" style="color: #666">
              E-Sports
            </a>
          </li>
          <li class="header-submenu-item">
            <a href="https://esportes.r7.com/joga-nas-11" target="_self" class="header-submenu-link" title="Ir Para Joga nas 11" style="color: #666">
              Joga nas 11
            </a>
          </li>
          <li class="header-submenu-item">
            <a href="https://esportes.r7.com/mais-esportes" target="_self" class="header-submenu-link" title="Ir Para Mais Esportes" style="color: #666">
              Mais Esportes
            </a>
          </li>
      </ul>
  </div>

        </li>
        <li class="header-menu-item ">
          <a href="https://hora7.r7.com" data-css-title="HORA 7" target="_self" class="header-menu-link" title="Ir para HORA 7">
            HORA 7
          </a>
          
        </li>
        <li class="header-menu-item ">
          <a href="https://noticias.r7.com" data-css-title="JR 24H" target="_self" class="header-menu-link" title="Ir para JR 24H">
            JR 24H
          </a>
              <svg class="header-menu-arrow" width="10" height="7" viewBox="0 0 10 7" fill="none">
                <path d="M5.528.227 9.78 4.616a.789.789 0 0 1 0 1.094l-.707.73a.73.73 0 0 1-1.06 0L5 3.327 
                  1.987 6.44a.73.73 0 0 1-1.06 0L.22 5.71a.789.789 0 0 1 0-1.093L4.472.227a.727.727 0 0 1 1.056 0z" 
                  fill="#fff"/>
              </svg>
            <div class="header-submenu header-submenu-3-column">
      <ul class="header-submenu-column border-right">
        <p class="header-submenu-title-column"> </p>
          <li class="header-submenu-item">
            <a href="https://noticias.r7.com" target="_self" class="header-submenu-link" title="Ir Para Home" style="color: #666">
              Home
            </a>
          </li>
          <li class="header-submenu-item">
            <a href="https://noticias.r7.com/agronegocios" target="_self" class="header-submenu-link" title="Ir Para Agronegócio" style="color: #666">
              Agronegócio
            </a>
          </li>
          <li class="header-submenu-item">
            <a href="https://noticias.r7.com/carros" target="_self" class="header-submenu-link" title="Ir Para Carros" style="color: #666">
              Carros
            </a>
          </li>
          <li class="header-submenu-item">
            <a href="https://noticias.r7.com/concursos" target="_self" class="header-submenu-link" title="Ir Para Concursos" style="color: #666">
              Concursos
            </a>
          </li>
          <li class="header-submenu-item">
            <a href="https://noticias.r7.com/saude/coronavirus" target="_self" class="header-submenu-link" title="Ir Para Coronavírus" style="color: #666">
              Coronavírus
            </a>
          </li>
          <li class="header-submenu-item">
            <a href="https://noticias.r7.com/direito-do-consumidor" target="_self" class="header-submenu-link" title="Ir Para Direito do Consumidor" style="color: #666">
              Direito do Consumidor
            </a>
          </li>
          <li class="header-submenu-item">
            <a href="https://noticias.r7.com/economia" target="_self" class="header-submenu-link" title="Ir Para Economia" style="color: #666">
              Economia
            </a>
          </li>
          <li class="header-submenu-item">
            <a href="https://noticias.r7.com/educacao" target="_self" class="header-submenu-link" title="Ir Para Educação" style="color: #666">
              Educação
            </a>
          </li>
          <li class="header-submenu-item">
            <a href="https://noticias.r7.com/e-golpe" target="_self" class="header-submenu-link" title="Ir Para É golpe!" style="color: #666">
              É golpe!
            </a>
          </li>
      </ul>
      <ul class="header-submenu-column border-right">
        <p class="header-submenu-title-column"> </p>
          <li class="header-submenu-item">
            <a href="https://noticias.r7.com/internacional/guerra-israel-x-hamas" target="_self" class="header-submenu-link" title="Ir Para Guerra Israel x Hamas" style="color: #666">
              Guerra Israel x Hamas
            </a>
          </li>
          <li class="header-submenu-item">
            <a href="https://noticias.r7.com/internacional/russia-x-ucrania" target="_self" class="header-submenu-link" title="Ir Para Guerra na Ucrânia" style="color: #666">
              Guerra na Ucrânia
            </a>
          </li>
          <li class="header-submenu-item">
            <a href="https://noticias.r7.com/economia/imposto-de-renda" target="_self" class="header-submenu-link" title="Ir Para Imposto de Renda" style="color: #666">
              Imposto de Renda
            </a>
          </li>
          <li class="header-submenu-item">
            <a href="https://noticias.r7.com/internacional" target="_self" class="header-submenu-link" title="Ir Para Internacional" style="color: #666">
              Internacional
            </a>
          </li>
          <li class="header-submenu-item">
            <a href="https://tempo.r7.com" target="_self" class="header-submenu-link" title="Ir Para R7 Tempo" style="color: #666">
              R7 Tempo
            </a>
          </li>
          <li class="header-submenu-item">
            <a href="https://noticias.r7.com/saude" target="_self" class="header-submenu-link" title="Ir Para Saúde" style="color: #666">
              Saúde
            </a>
          </li>
          <li class="header-submenu-item">
            <a href="https://noticias.r7.com/tecnologia-e-ciencia" target="_self" class="header-submenu-link" title="Ir Para Tecnologia &amp; Ciência" style="color: #666">
              Tecnologia &amp; Ciência
            </a>
          </li>
          <li class="header-submenu-item">
            <a href="https://noticias.r7.com/tim-5g" target="_self" class="header-submenu-link" title="Ir Para Tim 5G" style="color: #666">
              Tim 5G
            </a>
          </li>
          <li class="header-submenu-item">
            <a href="https://noticias.r7.com/saude/coronavirus/mapa-da-vacinacao/#br" target="_self" class="header-submenu-link" title="Ir Para Vacinômetro" style="color: #666">
              Vacinômetro
            </a>
          </li>
      </ul>
      <ul class="header-submenu-column ">
        <p class="header-submenu-title-column"> </p>
          <li class="header-submenu-item">
            <a href="https://noticias.r7.com/brasil" target="_self" class="header-submenu-link" title="Ir Para Brasil" style="color: #666">
              Brasil
            </a>
          </li>
          <li class="header-submenu-item">
            <a href="https://noticias.r7.com/cidades" target="_self" class="header-submenu-link" title="Ir Para Cidades" style="color: #666">
              Cidades
            </a>
          </li>
          <li class="header-submenu-item">
            <a href="https://noticias.r7.com/brasilia" target="_self" class="header-submenu-link" title="Ir Para Brasília" style="color: #666">
              Brasília
            </a>
          </li>
          <li class="header-submenu-item">
            <a href="https://noticias.r7.com/sao-paulo" target="_self" class="header-submenu-link" title="Ir Para São Paulo" style="color: #666">
              São Paulo
            </a>
          </li>
          <li class="header-submenu-item">
            <a href="https://noticias.r7.com/rio-de-janeiro" target="_self" class="header-submenu-link" title="Ir Para Rio de Janeiro" style="color: #666">
              Rio de Janeiro
            </a>
          </li>
          <li class="header-submenu-item">
            <a href="https://noticias.r7.com/minas-gerais" target="_self" class="header-submenu-link" title="Ir Para Minas Gerais" style="color: #666">
              Minas Gerais
            </a>
          </li>
          <li class="header-submenu-item">
            <a href="https://noticias.r7.com/pernambuco" target="_self" class="header-submenu-link" title="Ir Para Pernambuco" style="color: #666">
              Pernambuco
            </a>
          </li>
      </ul>
  </div>

        </li>
        <li class="header-menu-item ">
          <a href="https://recordtv.r7.com" data-css-title="RECORD" target="_self" class="header-menu-link" title="Ir para RECORD">
            RECORD
          </a>
              <svg class="header-menu-arrow" width="10" height="7" viewBox="0 0 10 7" fill="none">
                <path d="M5.528.227 9.78 4.616a.789.789 0 0 1 0 1.094l-.707.73a.73.73 0 0 1-1.06 0L5 3.327 
                  1.987 6.44a.73.73 0 0 1-1.06 0L.22 5.71a.789.789 0 0 1 0-1.093L4.472.227a.727.727 0 0 1 1.056 0z" 
                  fill="#fff"/>
              </svg>
            <div class="header-submenu header-submenu-3-column">
      <ul class="header-submenu-column border-right">
        <p class="header-submenu-title-column"> RECORD</p>
          <li class="header-submenu-item">
            <a href="https://recordtv.r7.com/" target="_self" class="header-submenu-link" title="Ir Para HOME RECORD" style="color: #000000">
              HOME RECORD
            </a>
          </li>
          <li class="header-submenu-item">
            <a href="https://recordtv.r7.com/programacao" target="_self" class="header-submenu-link" title="Ir Para Programação" style="color: #666">
              Programação
            </a>
          </li>
          <li class="header-submenu-item">
            <a href="https://recordtv.r7.com/recordtv-emissoras" target="_self" class="header-submenu-link" title="Ir Para Emissoras" style="color: #666">
              Emissoras
            </a>
          </li>
          <li class="header-submenu-item">
            <a href="https://sociedadeonline.com/" target="_self" class="header-submenu-link" title="Ir Para Rádio Sociedade" style="color: #666">
              Rádio Sociedade
            </a>
          </li>
          <li class="header-submenu-item">
            <a href="https://www.recordtvamericas.com/" target="_self" class="header-submenu-link" title="Ir Para Record Américas" style="color: #666">
              Record Américas
            </a>
          </li>
          <li class="header-submenu-item">
            <a href="https://recordtv.r7.com/record-europa" target="_self" class="header-submenu-link" title="Ir Para Record Europa" style="color: #666">
              Record Europa
            </a>
          </li>
          <li class="header-submenu-item">
            <a href="https://recordtv.r7.com/recordtv-interior-sp" target="_self" class="header-submenu-link" title="Ir Para Record Interior SP" style="color: #666">
              Record Interior SP
            </a>
          </li>
          <li class="header-submenu-item">
            <a href="https://recordtvjapan.com/" target="_self" class="header-submenu-link" title="Ir Para Record Japão" style="color: #666">
              Record Japão
            </a>
          </li>
          <li class="header-submenu-item">
            <a href="https://recordtv.r7.com/record-tv-litoral-e-vale" target="_self" class="header-submenu-link" title="Ir Para Record Litoral e Vale" style="color: #666">
              Record Litoral e Vale
            </a>
          </li>
          <li class="header-submenu-item">
            <a href="http://recordtv.r7.com/tv-digital" target="_blank" class="header-submenu-link" title="Ir Para TV Digital" style="color: #666">
              TV Digital
            </a>
          </li>
          <li class="header-submenu-item">
            <a href="https://recordtv.r7.com/videos" target="_self" class="header-submenu-link" title="Ir Para Vídeos" style="color: #666">
              Vídeos
            </a>
          </li>
      </ul>
      <ul class="header-submenu-column border-right">
        <p class="header-submenu-title-column"> JORNALISMO</p>
          <li class="header-submenu-item">
            <a href="https://recordtv.r7.com/balanco-geral" target="_self" class="header-submenu-link" title="Ir Para Balanço Geral" style="color: #666">
              Balanço Geral
            </a>
          </li>
          <li class="header-submenu-item">
            <a href="https://recordtv.r7.com/balanco-geral-manha" target="_self" class="header-submenu-link" title="Ir Para Balanço Geral Manhã" style="color: #666">
              Balanço Geral Manhã
            </a>
          </li>
          <li class="header-submenu-item">
            <a href="https://recordtv.r7.com/camera-record" target="_self" class="header-submenu-link" title="Ir Para Câmera Record" style="color: #666">
              Câmera Record
            </a>
          </li>
          <li class="header-submenu-item">
            <a href="https://recordtv.r7.com/cidade-alerta" target="_self" class="header-submenu-link" title="Ir Para Cidade Alerta" style="color: #666">
              Cidade Alerta
            </a>
          </li>
          <li class="header-submenu-item">
            <a href="https://recordtv.r7.com/doc-investigacao" target="_self" class="header-submenu-link" title="Ir Para Doc Investigação" style="color: #666">
              Doc Investigação
            </a>
          </li>
          <li class="header-submenu-item">
            <a href="https://recordtv.r7.com/domingo-espetacular" target="_self" class="header-submenu-link" title="Ir Para Domingo Espetacular" style="color: #666">
              Domingo Espetacular
            </a>
          </li>
          <li class="header-submenu-item">
            <a href="https://recordtv.r7.com/fala-brasil" target="_self" class="header-submenu-link" title="Ir Para Fala Brasil " style="color: #666">
              Fala Brasil 
            </a>
          </li>
          <li class="header-submenu-item">
            <a href="https://noticias.r7.com" target="_self" class="header-submenu-link" title="Ir Para Jornal da Record" style="color: #666">
              Jornal da Record
            </a>
          </li>
          <li class="header-submenu-item">
            <a href="https://noticias.r7.com/record-news" target="_self" class="header-submenu-link" title="Ir Para Record News" style="color: #666">
              Record News
            </a>
          </li>
      </ul>
      <ul class="header-submenu-column ">
        <p class="header-submenu-title-column"> VARIEDADES</p>
          <li class="header-submenu-item">
            <a href="https://brasilcaminhoneiro.com.br" target="_blank" class="header-submenu-link" title="Ir Para Brasil Caminhoneiro" style="color: #666">
              Brasil Caminhoneiro
            </a>
          </li>
          <li class="header-submenu-item">
            <a href="https://recordtv.r7.com/hoje-em-dia" target="_self" class="header-submenu-link" title="Ir Para Hoje em Dia" style="color: #666">
              Hoje em Dia
            </a>
          </li>
          <li class="header-submenu-item">
            <a href="https://recordtv.r7.com/hora-do-faro" target="_self" class="header-submenu-link" title="Ir Para Hora do Faro" style="color: #666">
              Hora do Faro
            </a>
          </li>
          <li class="header-submenu-item">
            <a href="https://mundorecord.com.br/ " target="_blank" class="header-submenu-link" title="Ir Para Mundo Record" style="color: #666">
              Mundo Record
            </a>
          </li>
          <li class="header-submenu-item">
            <a href="https://recordtv.r7.com/love-school-escola-amor" target="_self" class="header-submenu-link" title="Ir Para The Love School - Escola do Amor" style="color: #666">
              The Love School - Escola do Amor
            </a>
          </li>
          <li class="header-submenu-item">
            <a href="" target="_self" class="header-submenu-link" title="Ir Para " style="color: #ffffff">
              
            </a>
          </li>
          <li class="header-submenu-item">
            <a href="" target="_self" class="header-submenu-link" title="Ir Para DRAMATURGIA" style="color: #000000">
              DRAMATURGIA
            </a>
          </li>
          <li class="header-submenu-item">
            <a href="https://recordtv.r7.com/a-terra-prometida" target="_self" class="header-submenu-link" title="Ir Para A Terra Prometida" style="color: #666">
              A Terra Prometida
            </a>
          </li>
          <li class="header-submenu-item">
            <a href="https://recordtv.r7.com/jezabel" target="_self" class="header-submenu-link" title="Ir Para Jezabel" style="color: #666">
              Jezabel
            </a>
          </li>
          <li class="header-submenu-item">
            <a href="https://recordtv.r7.com/pecado-mortal" target="_self" class="header-submenu-link" title="Ir Para Pecado Mortal" style="color: #666">
              Pecado Mortal
            </a>
          </li>
          <li class="header-submenu-item">
            <a href="https://recordtv.r7.com/quando-chama-o-coracao" target="_self" class="header-submenu-link" title="Ir Para Quando Chama o Coração" style="color: #666">
              Quando Chama o Coração
            </a>
          </li>
          <li class="header-submenu-item">
            <a href="https://recordtv.r7.com/reis" target="_self" class="header-submenu-link" title="Ir Para Reis" style="color: #666">
              Reis
            </a>
          </li>
      </ul>
  </div>

        </li>
  <div class="move"></div>
</ul>
          </nav>
        <div class="align-right">
          <ul class="header-social-network" data-dp6-item='socialMedias'>
  <li class="header-social-network-item social-network-facebook get-ga" data-social="facebook" data-action="share-socialnews" data-url="https://www.facebook.com/" data-info="social">
    <a href="https://www.facebook.com/portalr7" class="social-network-link" rel="nofollow" target="_blank" title="Curta Bem Estar no Facebook">
    <i aria-labelledby="social-network-facebook" class="fa fa-facebook"></i>
    <span class="visuallyhidden" id="social-network-facebook">Facebook</span></a>
  </li>
  <li class="header-social-network-item get-ga" data-social="twitter" data-action="share-socialnews" data-url="https://www.twitter.com/" data-info="social">
      <a href="https://twitter.com/i/flow/login" class="social-network-link" rel="nofollow" target="_blank" title="Siga Bem Estar no Twitter">
        <svg class="svg-inline" viewBox="0 0 1200 1227" fill="none" xmlns="http://www.w3.org/2000/svg" width="13px" height="13px">
          <path xmlns="http://www.w3.org/2000/svg" d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" fill="white" />
        </svg>
      <span class="visuallyhidden" id="social-network-twitter">Twitter</span>
    </a>
  </li>
  <li class="header-social-network-item get-ga" data-social="instagram" data-action="share-socialmenu" data-url="https://www.instagram.com/" data-info="social">
    <a href="https://www.instagram.com/portalr7/" class="social-network-link" rel="nofollow" target="_blank" title="Siga Bem Estar no Instagram">
      <i aria-labelledby="social-network-instagram" class="fa fa-instagram-svg">
        <svg focusable="false" data-prefix="fab" data-icon="instagram" class="svg-inline" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ffffff" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
      </i>
      <span class="visuallyhidden" id="social-network-instagram">Instagram</span>
    </a>
  </li>
</ul>


          
          
<div data-cda-menu-profile>
</div>

          
          <div class="header-search-base">
            <a
              href="#search"
              class="header-search-btn get-ga"
              title="Busca"
              data-info="event"
              data-social="busca"
              data-action="busca-socialmenu"
              role="switch"
              aria-label="Alternador de busca"
              aria-checked="false"
              data-url="https://busca.r7.com/">
              <i class="fa fa-search-custom">
                <svg class="header-search-icon" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
                  <path fill="#FFF" fill-rule="nonzero" d="M9.5 0A9.5 9.5 0 0 1 19 9.5a9.46 9.46 0 0 1-2.112 5.973L21.414 20 20 21.414l-4.527-4.526A9.46 9.46 0 0 1 9.5 19a9.5 9.5 0 0 1 0-19zm0 2a7.5 7.5 0 1 0 0 15 7.5 7.5 0 0 0 0-15z"/>
                </svg>
              </i>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="header-search">

  <form action="https://busca.r7.com" method="get" role="search" class="form container">
    <div class="form-field-wrap">
      <div class="form-fields">
        <label for="q" class="visuallyhidden">Busca do Portal R7</label>
        <input type="text" id="q" name="q" class="form-input header-search-field" placeholder="Digite sua busca" autocomplete="off">
      </div>
      <div class="form-buttons">
        <button type="submit" class="form-button">Buscar</button>
      </div>
    </div>
  </form>
</div>

  </div>

      
      <div class="generic-hotsite-header" id="generic-hotsite-header">
        <div class="header-content">
          <a href="https://vivaavida.r7.com" class="link-header" target="_self"></a>
        </div>
      </div>
    <!-- Topo Participantes -->
    <div class="">
  <div class="hotsite-menu-vertical ">
    <nav class="wrapper-menu-hotsite-vertical" data-dp6-item="headerHotsiteMenu">
      <ul class="content-menu">

          <li class="item-pather-menu ">
            <a href="https://vivaavida.r7.com"
               target=""
               class="pather-link"
               title="Home"
               alt="Home">
              Home
            </a>


          </li>


          <li class="item-pather-menu ">
            <a href="https://vivaavida.r7.com/beleza"
               target=""
               class="pather-link"
               title="Beleza"
               alt="Beleza">
              Beleza
            </a>


          </li>


          <li class="item-pather-menu ">
            <a href="https://vivaavida.r7.com/bem-estar"
               target=""
               class="pather-link"
               title="Bem Estar"
               alt="Bem Estar">
              Bem Estar
            </a>


          </li>


          <li class="item-pather-menu ">
            <a href="https://vivaavida.r7.com/casa-e-decoracao"
               target=""
               class="pather-link"
               title="Casa e Decoração"
               alt="Casa e Decoração">
              Casa e Decoração
            </a>


          </li>


          <li class="item-pather-menu ">
            <a href="https://vivaavida.r7.com/dietas"
               target=""
               class="pather-link"
               title="Dietas"
               alt="Dietas">
              Dietas
            </a>


          </li>


          <li class="item-pather-menu ">
            <a href="https://vivaavida.r7.com/filhos"
               target=""
               class="pather-link"
               title="Filhos"
               alt="Filhos">
              Filhos
            </a>


          </li>


          <li class="item-pather-menu ">
            <a href="https://vivaavida.r7.com/moda"
               target=""
               class="pather-link"
               title="Moda"
               alt="Moda">
              Moda
            </a>


          </li>


          <li class="item-pather-menu ">
            <a href="https://vivaavida.r7.com/viagens"
               target=""
               class="pather-link"
               title="Viagens"
               alt="Viagens">
              Viagens
            </a>


          </li>

      </ul>
    </nav>
  </div>
</div>
        

  
    <script>
      r7adv.incrementUnit({
        code: 'vertical-header-ads',
        sizes: [[728, 90], [970, 90], [970, 250], [970, 150], [920, 100]],
      });

      r7adv.defineAd({
        sizes: [[728, 90], [970, 90], [970, 250], [970, 150], [920, 100]],
        id: 'vertical-header-ads',
        pos: 'header'
      });
    </script>

  <div id="vertical-header-ads" class="header-adv">
    
  </div>



  
</header>

  <div class="toolkit-container-large pt-6">
    
<nav class="toolkit-media-breadcrumb" aria-label="Breadcrumb">
  <ol class="toolkit-media-breadcrumb__list">
      <li class="toolkit-media-breadcrumb__group">
          <a href="https://vivaavida.r7.com/" title="Ir para a página de Viva a Vida" class="toolkit-media-breadcrumb__link">
            Viva a Vida
          </a>
      </li>
      <li class="toolkit-media-breadcrumb__group">
          <span class="toolkit-media-breadcrumb__wrap-icon">
            <i class="fa fa-angle-right toolkit-media-breadcrumb__icon" aria-hidden="true"></i>
          </span>
          <span class="toolkit-media-breadcrumb__link">
            Bem Estar
          </span>
      </li>
  </ol>
</nav>

  </div>



    <!-- início: assets secundários -->
      

        <link rel="stylesheet" type="text/css" href="https://assets.r7.com/static/widget-24x1-ultimas/2.8.0/stylesheets/style.css" media="screen">
  <link rel="stylesheet" type="text/css" href="https://assets.r7.com/static/widget-24x1-ultimas/2.8.0/stylesheets/style-cda.css" media="screen">
  <link rel="stylesheet" type="text/css" href="https://assets.r7.com/static/widget-24x1-footer/2.0.0/stylesheets/style.css" media="screen">
  <link rel="stylesheet" type="text/css" href="https://assets.r7.com/static/widget-6x1-a/2.1.0/stylesheets/style-cda.css" media="screen">
  <link rel="stylesheet" type="text/css" href="https://assets.r7.com/static/widget-5x1-d/2.0.2/stylesheets/style.css" media="screen">
  <link rel="stylesheet" type="text/css" href="https://assets.r7.com/static/widget-12x1-a/2.1.0/stylesheets/style.css" media="screen">
  <link rel="stylesheet" type="text/css" href="https://assets.r7.com/static/widget-core/2.4.0/stylesheets/style-cda.css" media="screen">
  <link rel="stylesheet" type="text/css" href="https://assets.r7.com/static/widget-core/2.4.0/stylesheets/style.css" media="screen">
  <link rel="stylesheet" type="text/css" href="https://assets.r7.com/static/widget-24x1-header/2.1.0/stylesheets/style-cda.css" media="screen">
  <link rel="stylesheet" type="text/css" href="https://assets.r7.com/static/widget-24x1-header/2.1.0/stylesheets/style.css" media="screen">
  <link rel="stylesheet" type="text/css" href="https://assets.r7.com/static/grid-core/1.0.10/stylesheets/style.css" media="screen">
    

      <!-- flex_stylesheets start -->
      
      <!-- flex_stylesheets end -->

      
    <!-- término: assets secundários -->

    

    <div class="container">
        




<div class="main-content">
      <div class="row r7section-row r7last-row">
          <div class="column r7cl7 r7omega">
            <div>
                  <div class="box rw flex" id="box_5d8aa1e91df97b9600000b71">
                    




                  </div>
                  <div class="box rw flex" id="box_5d8aa1e91df97b9600000b72">
                    




                  </div>
                  <div class="box rw flex" id="box_6189f362c012ad81ea00177b">
                    




                  </div>
                  <div class="box rw flex" id="box_6189f362c012ad81ea00177c">
                    




                  </div>
                  <div class="box rw flex" id="box_6189f362c012ad81ea00177d">
                    




                  </div>
                  <div class="box rw flex" id="box_5dfd1752cd77c059a20006af">
                    




  <div class="flexContainer "    >
    <div class="grid-flex proporcinal1"><div class="col-flex col-flex-24"><div class="widget-24x1-header"><div class="r7-header-section">
<div class="r7-header-section__box">      <span class="r7-header-section__title" style="color: 
                    #E14D71
">Bem-estar </span>    <span class="r7-header-line" style="background: 
              #E14D71
"></span> </div>
<div class="r7-subsection"><div class="r7-subsection__content">  </div></div>
</div></div></div></div>
  </div>

                  </div>
                  <div class="box rw flex" id="box_5d8aa1e91df97b9600000b70">
                    




  <div class="flexContainer "    >
    <div class="grid-flex proporcinal1"><div class="col-flex col-flex-24"><div class="widget-24x1-ultimas">
<aside class="widget-24x1-ultimas__aside"><div class="widget-24x1-ultimas__publicidade">
<div class="r7-flex-adv__placeholder">
  <div class="r7-flex-adv__container">
    <div id="r7-flex-adv-5d8aa221cd77c0eb47000431" class="r7-flex-adv__content"></div>
  </div>
</div>
<script>
  (function (doc, adv) {

    var isMobile = function () {
      return doc.querySelectorAll('body.main-r7mobile').length > 0;
    };

    var getSizes = function () {
      return JSON.parse(isMobile() ? '[[300, 250]]' : '[[300, 250]]');
    };

    var startHeaderBidding = function () {
      var incrementConfig = {
        code: 'r7-flex-adv-5d8aa221cd77c0eb47000431',
        sizes: getSizes()
      };

      adv.incrementUnit(incrementConfig);
    };

    var startAd = function () {
      var pos = 'island',
        context = 'ultimas',
        adConfig = {
          id: 'r7-flex-adv-5d8aa221cd77c0eb47000431',
          sizes: getSizes()
        };

      if (pos) { adConfig['pos'] = pos; }
      if (context) { adConfig['context'] = context; }

      adv.defineAd(adConfig);
    };

    var startWidget = function () {
      startHeaderBidding();
      startAd();
    };

    startWidget();

  })(document, r7adv);
</script>
</div> <div class="widget-24x1-ultimas__taboola">
<div id="taboola-right-rail"></div>
</div><div class="widget-24x1-ultimas__publicidade widget-24x1-ultimas__publicidade--fix">
<div class="r7-flex-adv__placeholder">
  <div class="r7-flex-adv__container">
    <div id="r7-flex-adv-5f2aa9f0cd77c082b3000d32" class="r7-flex-adv__content"></div>
  </div>
</div>
<script>
  (function (doc, adv) {

    var isMobile = function () {
      return doc.querySelectorAll('body.main-r7mobile').length > 0;
    };

    var getSizes = function () {
      return JSON.parse(isMobile() ? '[[300, 600]]' : '[[300, 600]]');
    };

    var startHeaderBidding = function () {
      var incrementConfig = {
        code: 'r7-flex-adv-5f2aa9f0cd77c082b3000d32',
        sizes: getSizes()
      };

      adv.incrementUnit(incrementConfig);
    };

    var startAd = function () {
      var pos = 'halfpage',
        context = 'ultimas',
        adConfig = {
          id: 'r7-flex-adv-5f2aa9f0cd77c082b3000d32',
          sizes: getSizes()
        };

      if (pos) { adConfig['pos'] = pos; }
      if (context) { adConfig['context'] = context; }

      adv.defineAd(adConfig);
    };

    var startWidget = function () {
      startHeaderBidding();
      startAd();
    };

    startWidget();

  })(document, r7adv);
</script>
</div></aside><div class="widget-24x1-ultimas__noticias" id="widget-24x1-ultimas"><div class="widget-24x1-ultimas__noticias-content">
<div class="widget-24x1-ultimas__header"></div>
<script type="text/template" id="template-item-article">
      {{#articles}}
        {{#if agency}}
          <div class="r7-flex-hat">
            <a href="{{{agencyUrl}}}" title="{{{agency}}}" class="r7-flex-hat__link" target="{{{linkTarget}}}">
              <img src="{{{agencyImage}}}?dimensions=16x16" loading="lazy" data-src="{{{agencyImage}}}" alt="{{{agency}}}" title="{{{agency}}}" class="r7-flex-hat__img">
              <span class="r7-flex-hat__description">
                {{{agency}}} / {{{timePublication}}}
              </span>
            </a>
          </div>
        {{else}}
          <div class="r7-flex-hat">
            <a href="{{{url}}}" title="{{{agency}}}" class="r7-flex-hat__description" target="{{{linkTarget}}}">
              {{{canonicalSectionName}}} / {{{timePublication}}}
            </a>
          </div>
        {{/if}}
        <div class ="widget-24x1-ultimas__item">
          {{#if img}}
            <div class="widget-24x1-ultimas__img">
              <figure class="r7-flex-image">
                <a href="{{{url}}}" title="{{{title}}}" class="r7-flex-image__link" target="{{{linkTarget}}}">
                  {{#if video}}
                    <div class="r7-flex-icon-play--wrapper">
                      <span class="r7-flex-icon-play"></span>
                    </div>
                    <div class="r7-flex-video__cover" data-videoid="{{{id}}}" data-shorturl="https:{{{url}}}" style="background-image: url('{{img}}')"></div>
                  {{else}}
                    <img src="{{img}}" alt="{{{title}}}" title="{{{title}}}" class="r7-flex-image__img" loading="lazy">
                  {{/if}}
                </a>
              </figure>
            </div>
            <h3 class="r7-flex-title-h6">
              <a href="{{{url}}}" title="{{{title}}}" class="r7-flex-title-h6__link" target="{{{linkTarget}}}">
                {{{title}}}
              </a>
            </h3>
          {{else}}
            <h3 class="r7-flex-title-h5">
              <a href="{{{url}}}" title="{{{title}}}" class="r7-flex-title-h5__link" target="{{{linkTarget}}}">
                {{{title}}}
              </a>
            </h3>
          {{/if}}
        </div>
      {{/articles}}</script><section class="widget-24x1-ultimas__container"><main class="widget-24x1-ultimas__articles tab_5d8aa221cd77c0eb4700042f tab tab--active" data-tab="tab_5d8aa221cd77c0eb4700042f"></main></section><div class="loading show-element" style="margin-top: 30px"><div class="loading-content">
<span class="load-bg-grey"></span> <span class="text">Carregando...</span>
</div></div>
<script>function template() {
          if (window['UltimasNoticiasFlex'] && window['UltimasNoticiasFlex'].loaded) {
            return;
          }

          const boxIdTab1 = '.tab_5d8aa221cd77c0eb4700042f';
          const boxIdTab2 = '.tab_5d8aa221cd77c0eb47000430';

          const isTab2Active = 'false' == 'on' ? true : false;

          let tabs = [{
            urlArticle: 'https://cms-media-api.r7.com/?section[]=5d8aa0d11df97bf2670000e1&hierarchy=true&external_media=true&page=1',
            amount: '5',
            posNative: '6',
            idBox: boxIdTab1,
            isActive: true
          }, {
            urlArticle: '',
            amount: '12',
            posNative: '6',
            idBox: boxIdTab2,
            isActive: isTab2Active
          }].filter(tab => tab.isActive == true);

          window['UltimasNoticiasFlex'] = new R7.UltimasNoticiasFlex(tabs);
          window['UltimasNoticiasFlex'].loaded = true;
        };

        document.addEventListener('readystatechange', () => {
          if (document.readyState === 'complete') {
            template();
          } else {
            document.addEventListener('DOMContentLoaded', template);
          }
        });</script>
</div></div>
<script>let loadedWidgetAuthorCarousel = false;

    function initWidgetAuthorCarousel() {
      if (loadedWidgetAuthorCarousel) {
        return;
      }
      loadedWidgetAuthorCarousel = true;

      try {
        const hideUltimasNoticiasFlexAsides = () => {
          const selector = '.widget-24x1-ultimas__aside';
          const asides = [...document.querySelectorAll(selector)];
          const classHide = 'widget-24x1-ultimas__aside--hide';

          asides.forEach(aside => aside.classList.add(classHide));
        };

        if (!window.r7adv || window.r7adv.hasAdBlock()) {
          hideUltimasNoticiasFlexAsides();
        }
      } catch (e) {
        const msg = 'Widget Últimas: Não foi possível verificar o adblock';
        window.console.error(msg);
      }

      function init() {
        var instance = new window.WidgetAuthorCarousel("5d8aa221cd77c0eb4700042f");
      }

      if (typeof window.WidgetAuthorCarousel != undefined) {
        init();
      }
    }

    document.addEventListener('readystatechange', () => {
      if (document.readyState === 'complete') {
        initWidgetAuthorCarousel();
      } else {
        document.addEventListener('DOMContentLoaded', initWidgetAuthorCarousel);
      }
    });</script>
</div></div></div>
  </div>

                  </div>
            </div>
          </div>
      <hr />
    </div>

  <div id="ModalVideo" class="modal-video" style="display:none">

  <a href="javascript:;" title="Fechar" class="btn-close-modal">
    <i class="fa fa-times"></i>
  </a>
  
  <a href="javascript:;" title="Anterior" class="modal-video__prev">
    <i class="modal-video__icon fa fa-chevron-left"></i>
  </a>

  <a href="javascript:;" title="Próximo" class="modal-video__next">
    <i class="modal-video__icon fa fa-chevron-right"></i>
  </a>

  <div class="modal-video-content"></div>
  
  <div class="modal-video-youtube"></div>

  <div class="modal-video-playplus">
    <img alt="PlayPlus" class="modal-video-playplus__logo" src="https://assets.r7.com/assets/schumi_core/playplus/logo-1be0714cc7581f9275ca3d68b27f5521.png" title="PlayPlus" />

    <p class="modal-video-playplus__description">
      Tenha à disposição toda a programação RecordTV e os conteúdos dos melhores canais em um só lugar.
    </p>

    <a href="https://www.playplus.tv?utm_source=Home-R7&utm_medium=boxvideos" title="Assista agora" class="modal-video-playplus__call-to-action" target="_blank">
      Assista agora
    </a>
  </div>
</div>

</div>

  




<script>
  r7ad.printGAds([1,1], {'pos':'yahoo','context':'lista'});
</script>

<script>
	// Load do Newsrrom
	
	var host = window.location.hostname;
	var pathname = window.location.pathname === '/' ? '' : window.location.pathname;
	var page = this.host + this.pathname;
	var isHome = this.host === 'www.r7.com';
	var pageDashboard = this.isHome ? 'home' : this.page;

	window._newsroom = window._newsroom || [];
	window._newsroom.push({pageTemplate: 'home'});
	window._newsroom.push({pageDashboard: pageDashboard});
	window._newsroom.push('auditClicks');
	window._newsroom.push('trackPage');

	!function (e, f, u) {
		e.async = 1;
		e.src = u;
		f.parentNode.insertBefore(e, f);
	}(document.createElement('script'),
		document.getElementsByTagName('script')[0],
		'//c2.taboola.com/nr/r7-r7com/newsroom.js');

</script>


    </div>

    <link href="https://assets.r7.com/assets/schumi_core/vertical/critical_path/second_load/application-e1645ac483c8fcf31f43a0d2ea9a7b8e.css" media="screen" rel="stylesheet" type="text/css" />

      <div id="r7-footer-portal-holder" data-infinite-list="init">
        <div class="r7-footer-copyright">
  <div id="r7-footer-cols">
    <nav class="menu-footer">
      <ul id="r7-sitemap">


            <li class="r7-cols">

                

                <h5 class="title-father ">
                  <a class="info-father" href="https://noticias.r7.com/brasilia" style="color: #666" target="_self" title="Brasília">Brasília</a>
                </h5>



                <span class="break-line"></span>

                <h5 class="title-father top-border">
                  <a class="info-father" href="https://noticias.r7.com/" style="color: #333333" target="_self" title="JR 24H">JR 24H</a>
                </h5>


                    <ul class="sub-menu-footer">
                        <li class="sub-item">
                          <h6>
                            <a href="https://noticias.r7.com/economia" style="color: #333333" title="Economia" target="_self">
                             Economia
                            </a>
                          </h6>
                        </li>
                        <li class="sub-item">
                          <h6>
                            <a href="https://noticias.r7.com/economia/imposto-de-renda" style="color: #333333" title="Imposto de Renda" target="_self">
                             Imposto de Renda
                            </a>
                          </h6>
                        </li>
                        <li class="sub-item">
                          <h6>
                            <a href="https://noticias.r7.com/internacional" style="color: #333333" title="Internacional" target="_self">
                             Internacional
                            </a>
                          </h6>
                        </li>
                        <li class="sub-item">
                          <h6>
                            <a href="https://noticias.r7.com/internacional/guerra-israel-x-hamas   " style="color: #666" title="Guerra Israel x Hamas" target="_self">
                             Guerra Israel x Hamas
                            </a>
                          </h6>
                        </li>
                        <li class="sub-item">
                          <h6>
                            <a href="https://noticias.r7.com/internacional/russia-x-ucrania" style="color: #666" title="Guerra na Ucrânia" target="_self">
                             Guerra na Ucrânia
                            </a>
                          </h6>
                        </li>
                        <li class="sub-item">
                          <h6>
                            <a href="https://noticias.r7.com/" style="color: #666" title="Resumo R7" target="_self">
                             Resumo R7
                            </a>
                          </h6>
                        </li>
                        <li class="sub-item">
                          <h6>
                            <a href="https://noticias.r7.com/tecnologia-e-ciencia" style="color: #333333" title="Tecnologia e Ciência" target="_self">
                             Tecnologia e Ciência
                            </a>
                          </h6>
                        </li>
                        <li class="sub-item">
                          <h6>
                            <a href="https://www.tecmundo.com.br/" style="color: #333333" title="TecMundo" target="_blank">
                             TecMundo
                            </a>
                          </h6>
                        </li>
                        <li class="sub-item">
                          <h6>
                            <a href="https://noticias.r7.com/saude" style="color: #333333" title="Saúde" target="_self">
                             Saúde
                            </a>
                          </h6>
                        </li>
                        <li class="sub-item">
                          <h6>
                            <a href="https://noticias.r7.com/agronegocios" style="color: #333333" title="Agronegócios" target="_self">
                             Agronegócios
                            </a>
                          </h6>
                        </li>
                        <li class="sub-item">
                          <h6>
                            <a href="https://noticias.r7.com/educacao" style="color: #333333" title="Educação" target="_self">
                             Educação
                            </a>
                          </h6>
                        </li>
                        <li class="sub-item">
                          <h6>
                            <a href="https://noticias.r7.com/carros" style="color: #333333" title="Carros" target="_self">
                             Carros
                            </a>
                          </h6>
                        </li>
                        <li class="sub-item">
                          <h6>
                            <a href="https://noticias.r7.com/concursos" style="color: #333333" title="Concursos" target="_self">
                             Concursos
                            </a>
                          </h6>
                        </li>
                        <li class="sub-item">
                          <h6>
                            <a href="https://noticias.r7.com/cidades" style="color: #333333" title="Cidades" target="_self">
                             Cidades
                            </a>
                          </h6>
                        </li>
                        <li class="sub-item">
                          <h6>
                            <a href="https://noticias.r7.com/brasil" style="color: #333333" title="Brasil" target="_self">
                             Brasil
                            </a>
                          </h6>
                        </li>
                        <li class="sub-item">
                          <h6>
                            <a href="https://noticias.r7.com/brasilia" style="color: #333333" title="Brasília" target="_self">
                             Brasília
                            </a>
                          </h6>
                        </li>
                        <li class="sub-item">
                          <h6>
                            <a href="https://noticias.r7.com/sao-paulo" style="color: #333333" title="São Paulo" target="_self">
                             São Paulo
                            </a>
                          </h6>
                        </li>
                        <li class="sub-item">
                          <h6>
                            <a href="https://noticias.r7.com/rio-de-janeiro" style="color: #333333" title="Rio de Janeiro" target="_self">
                             Rio de Janeiro
                            </a>
                          </h6>
                        </li>
                        <li class="sub-item">
                          <h6>
                            <a href="https://noticias.r7.com/minas-gerais" style="color: #333333" title="Minas Gerais" target="_self">
                             Minas Gerais
                            </a>
                          </h6>
                        </li>
                        <li class="sub-item">
                          <h6>
                            <a href="https://noticias.r7.com/pernambuco" style="color: #666" title="Pernambuco" target="_self">
                             Pernambuco
                            </a>
                          </h6>
                        </li>
                        <li class="sub-item">
                          <h6>
                            <a href="https://noticias.r7.com/saude/coronavirus/mapa-da-vacinacao/#br" style="color: #666" title="Vacinômetro" target="_self">
                             Vacinômetro
                            </a>
                          </h6>
                        </li>
                    </ul>



                <span class="break-line"></span>

                <h5 class="title-father top-border">
                  <a class="info-father" href="https://monitor7.r7.com/" style="color: #666" target="_self" title="MonitoR7">MonitoR7</a>
                </h5>


            </li>


            <li class="r7-cols">

                

                <h5 class="title-father ">
                  <a class="info-father" href="https://entretenimento.r7.com" style="color: #333333" target="_self" title="Entretenimento">Entretenimento</a>
                </h5>


                    <ul class="sub-menu-footer">
                        <li class="sub-item">
                          <h6>
                            <a href="https://entretenimento.r7.com/cinema-e-series" style="color: #333333" title="Cinema" target="_self">
                             Cinema
                            </a>
                          </h6>
                        </li>
                        <li class="sub-item">
                          <h6>
                            <a href="https://www.estrelando.com.br" style="color: #333333" title="Estrelando" target="_blank">
                             Estrelando
                            </a>
                          </h6>
                        </li>
                        <li class="sub-item">
                          <h6>
                            <a href="https://entretenimento.r7.com/famosos-e-tv" style="color: #333333" title="Famosos e TV" target="_self">
                             Famosos e TV
                            </a>
                          </h6>
                        </li>
                        <li class="sub-item">
                          <h6>
                            <a href="https://entretenimento.r7.com/games" style="color: #666" title="Games" target="_self">
                             Games
                            </a>
                          </h6>
                        </li>
                        <li class="sub-item">
                          <h6>
                            <a href="https://entretenimento.r7.com/musica" style="color: #333333" title="Música" target="_self">
                             Música
                            </a>
                          </h6>
                        </li>
                        <li class="sub-item">
                          <h6>
                            <a href="https://www.vagalume.com.br/" style="color: #333333" title="Vagalume" target="_blank">
                             Vagalume
                            </a>
                          </h6>
                        </li>
                    </ul>



                <span class="break-line"></span>

                <h5 class="title-father top-border">
                  <a class="info-father" href="https://receitas.r7.com/" style="color: #666" target="_self" title="R7 Receitas">R7 Receitas</a>
                </h5>



                <span class="break-line"></span>

                <h5 class="title-father top-border">
                  <a class="info-father" href="https://hora7.r7.com/" style="color: #333333" target="_self" title="Hora 7">Hora 7</a>
                </h5>


                    <ul class="sub-menu-footer">
                        <li class="sub-item">
                          <h6>
                            <a href="https://www.megacurioso.com.br/" style="color: #333333" title="Mega Curioso" target="_blank">
                             Mega Curioso
                            </a>
                          </h6>
                        </li>
                    </ul>



                <span class="break-line"></span>

                <h5 class="title-father top-border">
                  <a class="info-father" href="https://nitro.r7.com/" style="color: #666" target="_self" title="R7 Nitro">R7 Nitro</a>
                </h5>


                    <ul class="sub-menu-footer">
                        <li class="sub-item">
                          <h6>
                            <a href="https://www.baixaki.com.br/" style="color: #333333" title="Baixaki" target="_blank">
                             Baixaki
                            </a>
                          </h6>
                        </li>
                        <li class="sub-item">
                          <h6>
                            <a href="https://www.clickjogos.com.br/" style="color: #333333" title="Click Jogos" target="_blank">
                             Click Jogos
                            </a>
                          </h6>
                        </li>
                    </ul>



                <span class="break-line"></span>

                <h5 class="title-father top-border">
                  <a class="info-father" href="https://renda-extra.r7.com/" style="color: #666" target="_self" title="Renda Extra">Renda Extra</a>
                </h5>


                    <ul class="sub-menu-footer">
                        <li class="sub-item">
                          <h6>
                            <a href="https://renda-extra.r7.com/minha-historia" style="color: #666" title="Minha História" target="_self">
                             Minha História
                            </a>
                          </h6>
                        </li>
                        <li class="sub-item">
                          <h6>
                            <a href="https://renda-extra.r7.com/seu-bolso" style="color: #666" title="Seu Bolso" target="_self">
                             Seu Bolso
                            </a>
                          </h6>
                        </li>
                        <li class="sub-item">
                          <h6>
                            <a href="https://renda-extra.r7.com/profissionalize-se" style="color: #666" title="Profissionalize-se" target="_self">
                             Profissionalize-se
                            </a>
                          </h6>
                        </li>
                    </ul>



                <span class="break-line"></span>

                <h5 class="title-father top-border">
                  <a class="info-father" href="https://rpet.r7.com/" style="color: #666" target="_self" title="RPET">RPET</a>
                </h5>


            </li>


            <li class="r7-cols">

                

                <h5 class="title-father ">
                  <a class="info-father" href="https://esportes.r7.com/" style="color: #333333" target="_self" title="Esportes">Esportes</a>
                </h5>


                    <ul class="sub-menu-footer">
                        <li class="sub-item">
                          <h6>
                            <a href="https://esportes.r7.com/automobilismo" style="color: #333333" title="Automobilismo" target="_self">
                             Automobilismo
                            </a>
                          </h6>
                        </li>
                        <li class="sub-item">
                          <h6>
                            <a href="https://esportes.r7.com/e-sports" style="color: #333333" title="e-Sports" target="_self">
                             e-Sports
                            </a>
                          </h6>
                        </li>
                        <li class="sub-item">
                          <h6>
                            <a href="https://esportes.r7.com/fora-de-jogo" style="color: #333333" title="Fora de Jogo" target="_self">
                             Fora de Jogo
                            </a>
                          </h6>
                        </li>
                        <li class="sub-item">
                          <h6>
                            <a href="https://esportes.r7.com/futebol" style="color: #333333" title="Futebol" target="_self">
                             Futebol
                            </a>
                          </h6>
                        </li>
                        <li class="sub-item">
                          <h6>
                            <a href="https://esportes.r7.com/lance" style="color: #333333" title="Lance" target="_self">
                             Lance
                            </a>
                          </h6>
                        </li>
                        <li class="sub-item">
                          <h6>
                            <a href="https://esportes.r7.com/mais-esportes" style="color: #333333" title="Mais Esportes" target="_self">
                             Mais Esportes
                            </a>
                          </h6>
                        </li>
                    </ul>



                <span class="break-line"></span>

                <h5 class="title-father top-border">
                  <a class="info-father" href="https://vivaavida.r7.com" style="color: #333333" target="_self" title="Viva a Vida">Viva a Vida</a>
                </h5>


                    <ul class="sub-menu-footer">
                        <li class="sub-item">
                          <h6>
                            <a href="https://vivaavida.r7.com/beleza" style="color: #666" title="Beleza" target="_self">
                             Beleza
                            </a>
                          </h6>
                        </li>
                        <li class="sub-item">
                          <h6>
                            <a href="https://vivaavida.r7.com/bem-estar" style="color: #666" title="Bem-Estar" target="_self">
                             Bem-Estar
                            </a>
                          </h6>
                        </li>
                        <li class="sub-item">
                          <h6>
                            <a href="https://vivaavida.r7.com/casa-e-decoracao" style="color: #666" title="Casa e Decoração" target="_self">
                             Casa e Decoração
                            </a>
                          </h6>
                        </li>
                        <li class="sub-item">
                          <h6>
                            <a href="https://vivaavida.r7.com/dietas" style="color: #333333" title="Dietas" target="_self">
                             Dietas
                            </a>
                          </h6>
                        </li>
                        <li class="sub-item">
                          <h6>
                            <a href="https://vivaavida.r7.com/filhos" style="color: #666" title="Filhos" target="_self">
                             Filhos
                            </a>
                          </h6>
                        </li>
                        <li class="sub-item">
                          <h6>
                            <a href="https://vivaavida.r7.com/moda" style="color: #333333" title="Moda" target="_self">
                             Moda
                            </a>
                          </h6>
                        </li>
                        <li class="sub-item">
                          <h6>
                            <a href="https://vivaavida.r7.com/viagens" style="color: #333333" title="Viagens" target="_self">
                             Viagens
                            </a>
                          </h6>
                        </li>
                    </ul>


            </li>


            <li class="r7-cols">

                

                <h5 class="title-father ">
                  <a class="info-father" href="https://recordtv.r7.com/" style="color: #333333" target="_self" title="Record">Record</a>
                </h5>


                    <ul class="sub-menu-footer">
                        <li class="sub-item">
                          <h6>
                            <a href="https://recordtv.r7.com/balanco-geral" style="color: #333333" title="Balanço Geral" target="_self">
                             Balanço Geral
                            </a>
                          </h6>
                        </li>
                        <li class="sub-item">
                          <h6>
                            <a href="https://recordtv.r7.com/balanco-geral-manha" style="color: #333333" title="Balanço Geral Manhã" target="_self">
                             Balanço Geral Manhã
                            </a>
                          </h6>
                        </li>
                        <li class="sub-item">
                          <h6>
                            <a href="https://recordtv.r7.com/camera-record" style="color: #333333" title="Câmera Record" target="_self">
                             Câmera Record
                            </a>
                          </h6>
                        </li>
                        <li class="sub-item">
                          <h6>
                            <a href="https://recordtv.r7.com/cidade-alerta" style="color: #333333" title="Cidade Alerta" target="_self">
                             Cidade Alerta
                            </a>
                          </h6>
                        </li>
                        <li class="sub-item">
                          <h6>
                            <a href="https://recordtv.r7.com/doc-investigacao" style="color: #333333" title="Doc Investigação" target="_self">
                             Doc Investigação
                            </a>
                          </h6>
                        </li>
                        <li class="sub-item">
                          <h6>
                            <a href="https://recordtv.r7.com/domingo-espetacular" style="color: #333333" title="Domingo Espetacular" target="_self">
                             Domingo Espetacular
                            </a>
                          </h6>
                        </li>
                        <li class="sub-item">
                          <h6>
                            <a href="https://recordtv.r7.com/fala-brasil" style="color: #333333" title="Fala Brasil" target="_self">
                             Fala Brasil
                            </a>
                          </h6>
                        </li>
                        <li class="sub-item">
                          <h6>
                            <a href="https://noticias.r7.com/jr-na-tv" style="color: #333333" title="Jornal da Record" target="_self">
                             Jornal da Record
                            </a>
                          </h6>
                        </li>
                    </ul>


                    <ul class="sub-menu-footer">
                        <li class="sub-item">
                          <h6>
                            <a href="https://brasilcaminhoneiro.com.br" style="color: #333333" title="Brasil Caminhoneiro" target="_blank">
                             Brasil Caminhoneiro
                            </a>
                          </h6>
                        </li>
                        <li class="sub-item">
                          <h6>
                            <a href="https://recordtv.r7.com/hoje-em-dia" style="color: #333333" title="Hoje em Dia" target="_self">
                             Hoje em Dia
                            </a>
                          </h6>
                        </li>
                        <li class="sub-item">
                          <h6>
                            <a href="https://recordtv.r7.com/hora-do-faro" style="color: #333333" title="Hora do Faro" target="_self">
                             Hora do Faro
                            </a>
                          </h6>
                        </li>
                        <li class="sub-item">
                          <h6>
                            <a href="https://recordtv.r7.com/love-school-escola-amor" style="color: #333333" title="The Love School – Escola do Amor" target="_self">
                             The Love School – Escola do Amor
                            </a>
                          </h6>
                        </li>
                    </ul>


                    <ul class="sub-menu-footer">
                        <li class="sub-item">
                          <h6>
                            <a href="https://recordtv.r7.com/a-terra-prometida" style="color: #666" title="A Terra Prometida" target="_self">
                             A Terra Prometida
                            </a>
                          </h6>
                        </li>
                        <li class="sub-item">
                          <h6>
                            <a href="https://recordtv.r7.com/jezabel" style="color: #333333" title="Jezabel" target="_self">
                             Jezabel
                            </a>
                          </h6>
                        </li>
                        <li class="sub-item">
                          <h6>
                            <a href="https://recordtv.r7.com/pecado-mortal" style="color: #333333" title="Pecado Mortal" target="_self">
                             Pecado Mortal
                            </a>
                          </h6>
                        </li>
                        <li class="sub-item">
                          <h6>
                            <a href="https://recordtv.r7.com/quando-chama-o-coracao" style="color: #333333" title="Quando Chama o Coração" target="_self">
                             Quando Chama o Coração
                            </a>
                          </h6>
                        </li>
                        <li class="sub-item">
                          <h6>
                            <a href="https://recordtv.r7.com/reis" style="color: #333333" title="Reis" target="_self">
                             Reis
                            </a>
                          </h6>
                        </li>
                    </ul>


            </li>


            <li class="r7-cols">

                

                <h5 class="title-father ">
                  <a class="info-father" href="https://recordtv.gupy.io/" style="color: #333333" target="_blank" title="Carreira">Carreira</a>
                </h5>



                <span class="break-line"></span>

                <h5 class="title-father top-border">
                  <a class="info-father" href="http://comercial.recordtv.com.br/" style="color: #333333" target="_self" title="Comercial">Comercial</a>
                </h5>



                <span class="break-line"></span>

                <h5 class="title-father top-border">
                  <a class="info-father" href="https://recordtv.r7.com/recordtv-emissoras" style="color: #333333" target="_self" title="Emissoras">Emissoras</a>
                </h5>



                <span class="break-line"></span>

                <h5 class="title-father top-border">
                  <a class="info-father" href="https://recordtv.r7.com/institucional" style="color: #333333" target="_self" title="Institucional">Institucional</a>
                </h5>



                <span class="break-line"></span>

                <h5 class="title-father top-border">
                  <a class="info-father" href="https://www.mundorecord.com.br/" style="color: #333333" target="_blank" title="Mundo Record">Mundo Record</a>
                </h5>



                <span class="break-line"></span>

                <h5 class="title-father top-border">
                  <a class="info-father" href="https://www.r7.com/servicos" style="color: #333333" target="_self" title="Serviços">Serviços</a>
                </h5>


                    <ul class="sub-menu-footer">
                        <li class="sub-item">
                          <h6>
                            <a href="https://trilhassonoras.r7.com/" style="color: #333333" title="R7 Trilhas Sonoras" target="_blank">
                             R7 Trilhas Sonoras
                            </a>
                          </h6>
                        </li>
                        <li class="sub-item">
                          <h6>
                            <a href="https://www.playplus.com/" style="color: #333333" title="Playplus" target="_blank">
                             Playplus
                            </a>
                          </h6>
                        </li>
                    </ul>



                <span class="break-line"></span>

                <h5 class="title-father top-border">
                  <span class="info-father" style="color: ">Rádios</span>
                </h5>


                    <ul class="sub-menu-footer">
                        <li class="sub-item">
                          <h6>
                            <a href="https://sociedadeonline.com/" style="color: #333333" title="Rádio Sociedade" target="_blank">
                             Rádio Sociedade
                            </a>
                          </h6>
                        </li>
                    </ul>



                <span class="break-line"></span>

                <h5 class="title-father top-border">
                  <a class="info-father" href="https://noticias.r7.com/record-news/" style="color: #333333" target="_self" title="Record News">Record News</a>
                </h5>



                <span class="break-line"></span>

                <h5 class="title-father top-border">
                  <a class="info-father" href="https://videos.r7.com/" style="color: #333333" target="_self" title="Vídeos">Vídeos</a>
                </h5>


                    <ul class="sub-menu-footer">
                        <li class="sub-item">
                          <h6>
                            <a href="https://videos.r7.com/universal" style="color: #333333" title="Universal" target="_blank">
                             Universal
                            </a>
                          </h6>
                        </li>
                    </ul>


            </li>


            <li class="r7-cols">

                

                <h5 class="title-father ">
                  <span class="info-father" style="color: ">Grupo Record</span>
                </h5>


                    <ul class="sub-menu-footer">
                        <li class="sub-item">
                          <h6>
                            <a href="https://www.bancodigimais.com.br/" style="color: #333333" title="Banco Digi+" target="_blank">
                             Banco Digi+
                            </a>
                          </h6>
                        </li>
                        <li class="sub-item">
                          <h6>
                            <a href="https://www.erecord.com.br/" style="color: #333333" title="Record Entretenimento" target="_blank">
                             Record Entretenimento
                            </a>
                          </h6>
                        </li>
                        <li class="sub-item">
                          <h6>
                            <a href="https://www.redefamilia.com.br/" style="color: #333333" title="Rede Família" target="_blank">
                             Rede Família
                            </a>
                          </h6>
                        </li>
                        <li class="sub-item">
                          <h6>
                            <a href="https://www.ressoar.org.br/" style="color: #333333" title="Instituto Ressoar" target="_blank">
                             Instituto Ressoar
                            </a>
                          </h6>
                        </li>
                    </ul>



                <span class="break-line"></span>

                <h5 class="title-father top-border">
                  <span class="info-father" style="color: #333333">Record Internacional</span>
                </h5>


                    <ul class="sub-menu-footer">
                        <li class="sub-item">
                          <h6>
                            <a href="https://recordtvamericas.com/" style="color: #333333" title="Record Américas" target="_blank">
                             Record Américas
                            </a>
                          </h6>
                        </li>
                        <li class="sub-item">
                          <h6>
                            <a href="https://recordtv.r7.com/record-europa" style="color: #333333" title="Record Europa" target="_blank">
                             Record Europa
                            </a>
                          </h6>
                        </li>
                        <li class="sub-item">
                          <h6>
                            <a href="https://recordtvjapan.com" style="color: #333333" title="Record Japão" target="_blank">
                             Record Japão
                            </a>
                          </h6>
                        </li>
                    </ul>



                <span class="break-line"></span>

                <h5 class="title-father top-border">
                  <a class="info-father" href="https://www.universal.org/" style="color: #333333" target="_blank" title="Universal.org">Universal.org</a>
                </h5>


                    <ul class="sub-menu-footer">
                        <li class="sub-item">
                          <h6>
                            <a href="https://www.univervideo.com/" style="color: #333333" title="Univer" target="_blank">
                             Univer
                            </a>
                          </h6>
                        </li>
                        <li class="sub-item">
                          <h6>
                            <a href="https://redealeluia.com.br/" style="color: #333333" title="Rede Aleluia" target="_blank">
                             Rede Aleluia
                            </a>
                          </h6>
                        </li>
                    </ul>


            </li>


      </ul>
    </nav>
  </div>
</div>
        
<!--Footer main -->
<div class="toolkit-footer-main">
  <div class="toolkit-footer-main__wrapper">
    <div class="toolkit-footer-main__content">
          <a href="https://vivaavida.r7.com/bem-estar" class="toolkit-footer-main__logo" title="Viva a vida">
            <svg xmlns="http://www.w3.org/2000/svg" width="39.003" height="34.201" viewBox="0 0 710.44 622.969"><path fill="currentColor" d="M1728.61,489.533h-33.24v98.64h32.17q59.49,0,59.5-50.122Q1787.04,489.544,1728.61,489.533Zm486.76,164.676v-141.9c0-210.308-177.59-204.249-177.59-204.249H1709.23C1505,308.059,1505,494.544,1505,494.544V931s19.61-72.37,116.18-72.37h372.19C2226,858.63,2215.37,654.209,2215.37,654.209ZM1778.46,766.148l-83.09-115.8v115.8H1608V408.579h113.11q45.54,0,68.88,5.373a95.344,95.344,0,0,1,41,20.37q43.95,36.457,43.95,98.1,0,44.5-24.11,74.773-24.12,30.314-64.86,37.266l97.02,121.689H1778.46Zm346.82-287.34-125.97,287.34H1899.07L2030.94,485.78H1892.1v-77.2h233.18v70.229Z" transform="translate(-1505 -308.031)"></path></svg>
            <p class="toolkit-footer-main__name-section">Viva a Vida</p>
          </a>

      <span class="toolkit-footer-main__copyright-date">Todos os direitos reservados - 2009-2024 -
       Rádio e Televisão Record S.A</span>
    </div>
    <!--Footer menu -->
    <nav class="toolkit-menu-footer">
      <ul class="toolkit-menu-footer__list">
            <li class="toolkit-menu-footer__item"><a class="toolkit-menu-footer__link" title="Anuncie no R7" href="http://anuncie.r7.com/">Anuncie no R7</a></li>
            <li class="toolkit-menu-footer__item"><a class="toolkit-menu-footer__link" title="Carreira" href="https://recordtv.gupy.io/" target="_blank">Carreira</a></li>
            <li class="toolkit-menu-footer__item"><a class="toolkit-menu-footer__link" title="Comunicar erro" href="https://www.r7.com/institucional/comunicar-erro">Comunicar erro</a></li>
            <li class="toolkit-menu-footer__item"><a class="toolkit-menu-footer__link" title="Fale com o R7" href=" http://recordtv.r7.com/cite/">Fale com o R7</a></li>
            <li class="toolkit-menu-footer__item"><a class="toolkit-menu-footer__link" title="Mapa do Site" href="https://www.r7.com/institucional/mapa-do-site">Mapa do Site</a></li>
            <li class="toolkit-menu-footer__item"><a class="toolkit-menu-footer__link" title="Termos e Condições de Uso" href=" https://www.r7.com/termos-e-condicoes">Termos e Condições de Uso</a></li>
            <li class="toolkit-menu-footer__item"><a class="toolkit-menu-footer__link" title="Privacidade" href="https://www.r7.com/privacidade">Privacidade</a></li>
      </ul>
    </nav>
  </div>
</div>

  <div id="adsBottomSpace" class="toolkit-menu-footer__space"></div>

      </div>

    <script src="https://assets.r7.com/assets/schumi_core/vertical/application-af5d23c4a37624f2c927ecc8a059093f.js" type="text/javascript"></script>
    
    <script src="https://assets.r7.com/toolkit/homes.js?474307" type="text/javascript"></script>

    <!-- flex_javascripts start -->
    
    <!-- flex_javascripts end -->

      <script>
   (function(window) {

        new R7.StickyAd();

      new R7.Header();
      new R7.BoxShare();
      new R7.ModalVideo();
      new R7.Share();
      new R7.SideMenuR7();
      
      // coloquei o time dentro de uma global
      // porque nos hotsites verticais é necessario
      // cancelar o timemout
      window.timeRefreshR7 = new R7.Refresh()
      window.timeRefreshR7.start();

      var buttonShared = $('.get-ga');
      buttonShared.on('click', postGa);
      function postGa(){
        var info   = $(this).data('info'),
            social = $(this).data('social'),
            action = $(this).data('action'),
            url    = $(this).data('url');

        ga('send', info, social, action, url);
      }
    })(window);
  </script>
    <script>

  /**
   * Generic Hotsite Vertical - Menu mobile
   */
  var GHV_MenuMobile = {

    // bind do elementos do DOM
    bind: function() {
      this.patherLink.click(this.toggleMenu);
    },

    // configura os eventos
    getElements: function() {
      this.mobileBody = $("body.main-r7mobile");
      this.patherMenu = $(".item-pather-menu.has_child");
      this.patherLink = $(".pather-link", this.patherMenu);
    },

    // inicia a classe se a mesma estiver no mobile
    init: function() {
      this.getElements();

      if (this.mobileBody.length === 0)  {
        return;
      }
      this.start();
    },

    // associa os elementos aos eventos correspondentes
    start: function() {      
      this.bind();
    },

    // abre-fecha o menu mobile
    toggleMenu: function(event) {
      event.preventDefault();
      $(this).parent().siblings(".has_child").removeClass("open");
      $(this).parent().toggleClass("open");
    },

  };

  (document.readyState === "complete") 
    ? GHV_MenuMobile.init() 
    : window.addEventListener('load', function() { GHV_MenuMobile.init(); });

  
</script>



      <div class="adBanner" style="background-color: transparent; height: 1px; width: 1px;"></div>

<script>
  var adBanner = document.querySelector('.adBanner');
  if (adBanner.offsetHeight > 0) {
    var container = document.createElement("div");
    container.id = "has-adblock";
    container.style.display = "none";    
    document.body.appendChild(container);
  }
  adBanner.style.display = "none";
</script>
        <script type="text/javascript">
    if (typeof window.R7HashAudience != 'undefined') {
      window.R7HashPath = 'https://adv.r7.com/audience.js?s=' + window.R7HashAudience;
      document.write('<scr' + 'ipt type="text/javascript" src="' + window.R7HashPath + '"><\/scr' + 'ipt>');
    }
  </script>

  






  <script type='text/javascript'>
     var _ttconversion = _ttconversion || [];
     _ttconversion.push(['_channel', 'vivaavida-bemestar']);
  </script>



    <script type="text/javascript">
//<![CDATA[

        $(function () {
        });
        //Logger.setLevel(0);

//]]>
</script>
    <script></script>

      
  <script async src="https://assets.r7.com/static/widget-24x1-ultimas/2.8.0/javascripts/script.js"></script>
  <script async src="https://assets.r7.com/static/widget-24x1-ultimas/2.8.0/javascripts/script-cda.js"></script>
  <script async src="https://assets.r7.com/static/widget-12x1-a/2.1.0/javascripts/script-cda.js"></script>
  <script async src="https://assets.r7.com/static/widget-core/2.4.0/javascripts/script-cda.js"></script>

    <!-- tailtarget tag manager -->
    <!-- TailTarget Tag Manager TT-9964-3/CT-23 -->
<script>
  (function(i) {
    var ts = document.createElement('script');
    ts.type = 'text/javascript';
    ts.defer = true;
    ts.src = '//tags.t.tailtarget.com/t3m.js?i=' + i;
    
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(ts, s);
  })('TT-9964-3/CT-23');
</script>
<!-- End TailTarget Tag Manager -->



    <!-- header bindding request -->
    <script>
  function getAdUnitsUpdated(adUnits) {
    $.each(r7advlazy.getSlots(), function(i, slot) {
      var isException = r7advlazy.isItHBException(slot);
      var adUnitIndex = null;

      $.each(window.adUnits, function(i, unit) {
        if (isException && unit.code === slot.getSlotElementId()) {
          adUnitIndex = i;
        }
      });

      if (!isNaN(adUnitIndex)) { 
        delete window.adUnits[adUnitIndex]; 

        window.adUnits = $.map(window.adUnits, function(n, i) {
          if (n) { return n; }
        });
      }
    });

    return $.map(window.adUnits, function(n, i) { if (n) { return n; } });
  }

  function sendRequestHeaderBidding(successCallback) {
    // Verifica se o header bidding está habilitado
    prebidValidation();

    pbjs.que.push(function() {
      pbjs.setConfig({
        bidderSequence: 'random',
        enableSendAllBids: true,
        priceGranularity: {
          'buckets': [{
            'min': 0,
            'max': 50,
            'increment': 0.01
          }]
        },
      });

      adUnits = getAdUnitsUpdated(adUnits);

      adUnits = r7adv.normalizeUnits(adUnits);
      pbjs.addAdUnits(adUnits);

      pbjs.requestBids({
        bidsBackHandler: function() {
          sendAdserverRequest();          
          if (typeof successCallback === typeof Function) {
            successCallback();
          }
        },
        timeout: PREBID_TIMEOUT
      });
    });

    function sendAdserverRequest() {
      if (pbjs.adserverRequestSent) return;

      pbjs.adserverRequestSent = true;

      googletag.cmd.push(function() {
        pbjs.que.push(function() {
          pbjs.setTargetingForGPTAsync();
          window.R7AdvLazy.thisIsReadyToLoad();          
        });
      });
    }

    setTimeout(sendAdserverRequest, FAILSET_TIMEOUT);
  };

  window.addEventListener('DOMContentLoaded', sendRequestHeaderBidding);
</script>

    <!-- publicidade fixa no scroll -->  
    <div class="sticky-ad">
  <button class="sticky-ad-close">
    <span class="sticky-ad-close__icon">x</span>
  </button>
  <div id="sticky-ad"></div>
</div>

    <script>
  /**
   * Classe responsável exibir uma companha publicitária na home o R7.com
   * @author Bruno Bulnes
   **/
  function AbstractAdCampaign() {};

  AbstractAdCampaign.prototype = {
    getSnippetID: function() {
      return '5df38b1bbbb3eb7f21000014';
    },

    /**
     * Mudar o background da barra de links
     * @param {string} bgColor
     * @param {string} color Cor do texto
     **/
    changeBarBackground: function(bgColor, color) {
      var barSelector = this.isMobile() ? '.wrapper-mobile-header .menu-logo ' : '.header .header-wrap-content';

      $(barSelector).css({
        'background-color': bgColor,
        'background-image': 'none',
        'transition': 'background-color 500ms linear',
        'animation-direction': 'alternate',
        'animation-iteration-count': '2',
      });
      $('.header .header-menu-link').css('color', color);
    },

    /**
     * Muda o branckground do do corpo da página
     * 
     * @param {string} pageBg cor para ser inserida na página
     **/
    changePageBackground: function(pageBg) {
      $('body').css('background', pageBg);
    },

    /**
     * Mudar o logo do portal
     * @param {string} imagem
     * @param {string} link
     **/
    changeR7Logo: function(imagem, link, target) {
      if(!imagem) return

      var timeout = 400;
      var $logo = this.isMobile() ? $('.wrapper-mobile-header .logo') : $('.header .r7-logo');
      var $img  = $('<img>', {
        'src': imagem,
        'alt': 'R7.com',
        'title': 'R7.com',
      }).css('display', 'none');

      $logo.css({
        'transition': '.5s ease-in-out'
      });

      $('svg', $logo).fadeOut();

      setTimeout(function() {
        $logo.empty();
        $logo.append($img);
        $logo.attr('href', link);
        $logo.attr('target', target);

        $img.fadeIn();

      }.bind(this), timeout);
    },

    /**
     * Muda a tag de um elemento existente no DOM
     * 
     * @param {string} targetSelector seletor com tag a ser mudada
     * @param {string} newTagString nova tag a ser atribuida
     **/
    changeSelectorTag: function(targetSelector, newTagString) {
      if(!this.isMobile()) return


      $(targetSelector).each(function(){
        var newElem = $(newTagString, {html: $(this).html()});

        $.each(this.attributes, function() {
          newElem.attr(this.name, this.value);
        });

        $(this).replaceWith(newElem);
      });
    },

    /**
     * Método responsável por habilitar o funcionamento do snippet
     * @param {obejct} data
     **/
    itIsOn: function(data) {
      if (!data.hasOwnProperty('itens')) return false;
      if (data.itens.length === 0) return false;
      if (!data.itens[0].hasOwnProperty('enable')) return false;
      
      return data.itens[0].enable === 'on';
    },

    /**
     * Verifica se a mídia é mobile
     **/
    isMobile: function() {
      return $('body').hasClass('main-r7mobile')
    },

    /**
     * Verifica se está numa Home válida para executar o snippet
     * @param {object} data Snippet
     **/
    checkValidHome: function(data) {
      var loc = window.location;
      var itIsOn = this.itIsOn(data);
      var homes = this.getHomes(data.itens[0]);

      var isHome = !/\S+(-\d{2})(\d{2})(\d{4})$/.test(loc.pathname);

      if (isHome) {
        var isDev = /(\?actual_host=)(\w+\S)(\.r7\.com)/gi.test(loc.search);

        var section = !isDev 
          ? loc.host
          : loc.search.slice(loc.search.indexOf('=') + 1, loc.search.length);

        var subSection = loc.pathname !== '/' ? loc.pathname : '';

        var isValidHome = homes.filter(function(home) {
          if (subSection) {
            return home === section + subSection;
          }
          return home === section;
        }).length > 0;

        if (itIsOn && isValidHome) {
          if (this.isMobile()) {
            $('.mobile-header').addClass('snippet-active');
          }

          this.setNewLayout(data);
        }
      }
    },

    /**
     * Obtém a lista de homes onde o snippet deve funcionar
     **/
    getHomes: function(snippetData) {
      var list = snippetData.sitesUrls
        ? snippetData.sitesUrls.split(/[,;]/g) 
        : ['www.r7.com'];

      return list.filter(function(item) {
        return item.length > 0;
      });
    },

    /**
     * Retorna a imagem do logo
     * @param {object} data
     **/
    getDataImage: function(data) {
      return data.imgUrl;
    },

    /**
     * Retorna o link da campanha
     * @param {object} data
     **/
    getDataLink: function(data) {
      return data.link ? data.link.text : 'https://www.r7.com';
    },

    /**
     * Retorna o target da campanha
     * @param {object} data
     **/
    getDataLinkTarget: function(data) {
      return data.link && data.link._blank ? '_blank' : '_self';
    },

    /**
     * Retorna a cor do menu
     * @param {object} data
     **/
    getDataBgColor: function(data) {
      return (data && data.menuBgColor) ? data.menuBgColor : '#218EE1';
    },

    /**
     * Retorna a cor do fundo da página
     * @param {object} data
     **/
    getDataPageBgColor: function(data) {
      return (data && data.pageBgColor) ? data.pageBgColor : 'transparent';
    },

    /**
     * Retorna a cor do texto
     * @param {object} data
     **/
    getDataColor: function(data) {
      return (data && data.menuFontColor) ? data.menuFontColor : '#EFEFEF';
    },

    /**
     * Adiciona a imagem com o contador de impressão no corpo da página
     * @param {object} data
     **/
    appendCounterImpression: function(data) {
      var src = data && data.counterImpression ? data.counterImpression : '';
      var counter = $('<img>', { src: src });

      $('body').append(counter);
    },

    /**
     * Diminiu o padding dos items do menu no desktop para
     * quando o usuário clicar na busca ela não quebrar o layout
     **/
    changeItemMenuPadding: function() {
      if(this.isMobile()) return

      $('.header-menu-item').css('padding', ' 0 2px');
    },

    /**
     * Busca o snippet no endereõ registrado
     * @param {method} callbackSuccess Método de callback
     **/
    getSnippet: function(callbackSuccess) {
      $.ajax({
        async: true,
        cache: true,
        dataType: 'jsonp',
        processData: false,
        jsonpCallback: 'abstractAdCampaignCallback',
        success: callbackSuccess,
        url: '//snippets.r7.com/snippet/' + this.getSnippetID()
      });
    },

    /**
     * Verifica se o snippet está habilitado
     * para a barra de navegação poder ser formatada
     * @param {object} data Snippet
     **/
    setNewLayout: function(data) {
      var firstData =  data.itens[0];

      var img     = this.getDataImage(firstData);
      var link    = this.getDataLink(firstData);
      var target  = this.getDataLinkTarget(firstData);
      var bgColor = this.getDataBgColor(firstData);
      var color   = this.getDataColor(firstData);
      var pageBg  = this.getDataPageBgColor(firstData);

      setTimeout(function() {
        this.changeSelectorTag('.main-r7mobile .logo', '<a></a>')
        this.changeBarBackground(bgColor, color);
        this.changePageBackground(pageBg);
        this.appendCounterImpression(firstData);
        this.changeItemMenuPadding();
      }.bind(this), 1000);

      setTimeout(function() {
        this.changeR7Logo(img, link, target);
      }.bind(this), 1400);
    },

    /**
     * Método que inicia a classe
     **/
    start: function() {
      if (this.getSnippetID()) {
        this.getSnippet(this.checkValidHome.bind(this));
      }
    },

  };

  var AbstractAdCampaign = new AbstractAdCampaign();
  AbstractAdCampaign.start();
</script>
    <!--
  Make your site’s pages instant in 1 minute and improve your conversion rate by 1%.
  Source: https://instant.page/
 -->
<script 
  src="//instant.page/3.0.0" 
  type="module" 
  defer 
  integrity="sha384-OeDn4XE77tdHo8pGtE1apMPmAipjoxUQ++eeJa6EtJCfHlvijigWiJpD7VDPWXV1">
</script>
    

    <!--PER-7281: web-vitals-->
    <script>
  function getWebVitals() {
    var script = document.createElement('script');
    script.src = 'https://unpkg.com/web-vitals/dist/web-vitals.iife.js';
    script.onload = function () {
      // envia informações para a camada de dados.
      function sendToGTM(obj) {
        var r7dataLayer = window.r7dataLayer || [];
        var value = obj.name === 'CLS' ? obj.value * 1000 : obj.value;
        var delta = obj.delta === 'CLS' ? obj.delta * 1000 : obj.delta;

        r7dataLayer.push({
          event: 'coreWebVitals',
          webVitalsMeasurement: {
            name: obj.name,
            id: obj.id,
            value: value,
            delta: delta,
            valueRound: Math.round(value),
            deltaRound: Math.round(delta)
          }
        })
      } 

      webVitals.getCLS(sendToGTM, true);
      webVitals.getFID(sendToGTM, true);
      webVitals.getLCP(sendToGTM, true);
      webVitals.getFCP(sendToGTM, true);
      webVitals.getTTFB(sendToGTM, true);
    }

    document.head.appendChild(script);
  }

  getWebVitals();
</script>

    

    <!-- script área logada -->
    


    <!-- script taboola last body --> 
    <script type="text/javascript">
  window._taboola = window._taboola || [];
  _taboola.push({flush: true});
</script>
  </body>
</html>


                <h6>
                            <a href="https://www.ressoar.org.br/" style="color: #333333" title="Instituto Ressoar" target="_blank">
                             Instituto Ressoar
                            </a>
                          </h6>
                        </li>
                    </ul>



                <span class="break-line"></span>

                <h5 class="title-father top-border">
                  <span class="info-father" style="color: #333333">Record Internacional</span>
                </h5>


                    <ul class="sub-menu-footer">
                        <li class="sub-item">
                          <h6>
                            <a href="https://recordtvamericas.com/" style="color: #333333" title="Record Américas" target="_blank">
                             Record Américas
                            </a>
                          </h6>
                        </li>
                        <li class="sub-item">
                          <h6>
                            <a href="https://recordtv.r7.com/record-europa" style="color: #333333" title="Record Europa" target="_blank">
                             Record Europa
                            </a>
                          </h6>
                        </li>
                        <li class="sub-item">
                          <h6>
                            <a href="https://recordtvjapan.com" style="color: #333333" title="Record Japão" target="_blank">
                             Record Japão
                            </a>
                          </h6>
                        </li>
                    </ul>



                <span class="break-line"></span>

                <h5 class="title-father top-border">
                  <a class="info-father" href="https://www.universal.org/" style="color: #333333" target="_blank" title="Universal.org">Universal.org</a>
                </h5>


                    <ul class="sub-menu-footer">
                        <li class="sub-item">
                          <h6>
                            <a href="https://www.univervideo.com/" style="color: #333333" title="Univer" target="_blank">
                             Univer
                            </a>
                          </h6>
                        </li>
                        <li class="sub-item">
                          <h6>
                            <a href="https://redealeluia.com.br/" style="color: #333333" title="Rede Aleluia" target="_blank">
                             Rede Aleluia
                            </a>
                          </h6>
                        </li>
                    </ul>


            </li>


      </ul>
    </nav>
  </div>
</div>
        
<!--Footer main -->
<div class="toolkit-footer-main">
  <div class="toolkit-footer-main__wrapper">
    <div class="toolkit-footer-main__content">
          <a href="https://vivaavida.r7.com/beleza" class="toolkit-footer-main__logo" title="Viva a vida">
            <svg xmlns="http://www.w3.org/2000/svg" width="39.003" height="34.201" viewBox="0 0 710.44 622.969"><path fill="currentColor" d="M1728.61,489.533h-33.24v98.64h32.17q59.49,0,59.5-50.122Q1787.04,489.544,1728.61,489.533Zm486.76,164.676v-141.9c0-210.308-177.59-204.249-177.59-204.249H1709.23C1505,308.059,1505,494.544,1505,494.544V931s19.61-72.37,116.18-72.37h372.19C2226,858.63,2215.37,654.209,2215.37,654.209ZM1778.46,766.148l-83.09-115.8v115.8H1608V408.579h113.11q45.54,0,68.88,5.373a95.344,95.344,0,0,1,41,20.37q43.95,36.457,43.95,98.1,0,44.5-24.11,74.773-24.12,30.314-64.86,37.266l97.02,121.689H1778.46Zm346.82-287.34-125.97,287.34H1899.07L2030.94,485.78H1892.1v-77.2h233.18v70.229Z" transform="translate(-1505 -308.031)"></path></svg>
            <p class="toolkit-footer-main__name-section">Viva a Vida</p>
          </a>

      <span class="toolkit-footer-main__copyright-date">Todos os direitos reservados - 2009-2024 -
       Rádio e Televisão Record S.A</span>
    </div>
    <!--Footer menu -->
    <nav class="toolkit-menu-footer">
      <ul class="toolkit-menu-footer__list">
            <li class="toolkit-menu-footer__item"><a class="toolkit-menu-footer__link" title="Anuncie no R7" href="http://anuncie.r7.com/">Anuncie no R7</a></li>
            <li class="toolkit-menu-footer__item"><a class="toolkit-menu-footer__link" title="Carreira" href="https://recordtv.gupy.io/" target="_blank">Carreira</a></li>
            <li class="toolkit-menu-footer__item"><a class="toolkit-menu-footer__link" title="Comunicar erro" href="https://www.r7.com/institucional/comunicar-erro">Comunicar erro</a></li>
            <li class="toolkit-menu-footer__item"><a class="toolkit-menu-footer__link" title="Fale com o R7" href=" http://recordtv.r7.com/cite/">Fale com o R7</a></li>
            <li class="toolkit-menu-footer__item"><a class="toolkit-menu-footer__link" title="Mapa do Site" href="https://www.r7.com/institucional/mapa-do-site">Mapa do Site</a></li>
            <li class="toolkit-menu-footer__item"><a class="toolkit-menu-footer__link" title="Termos e Condições de Uso" href=" https://www.r7.com/termos-e-condicoes">Termos e Condições de Uso</a></li>
            <li class="toolkit-menu-footer__item"><a class="toolkit-menu-footer__link" title="Privacidade" href="https://www.r7.com/privacidade">Privacidade</a></li>
      </ul>
    </nav>
  </div>
</div>

  <div id="adsBottomSpace" class="toolkit-menu-footer__space"></div>

      </div>

    <script src="https://assets.r7.com/assets/schumi_core/vertical/application-af5d23c4a37624f2c927ecc8a059093f.js" type="text/javascript"></script>
    
    <script src="https://assets.r7.com/toolkit/homes.js?474307" type="text/javascript"></script>

    <!-- flex_javascripts start -->
    
    <!-- flex_javascripts end -->

      <script>
   (function(window) {

        new R7.StickyAd();

      new R7.Header();
      new R7.BoxShare();
      new R7.ModalVideo();
      new R7.Share();
      new R7.SideMenuR7();
      
      // coloquei o time dentro de uma global
      // porque nos hotsites verticais é necessario
      // cancelar o timemout
      window.timeRefreshR7 = new R7.Refresh()
      window.timeRefreshR7.start();

      var buttonShared = $('.get-ga');
      buttonShared.on('click', postGa);
      function postGa(){
        var info   = $(this).data('info'),
            social = $(this).data('social'),
            action = $(this).data('action'),
            url    = $(this).data('url');

        ga('send', info, social, action, url);
      }
    })(window);
  </script>
    <script>

  /**
   * Generic Hotsite Vertical - Menu mobile
   */
  var GHV_MenuMobile = {

    // bind do elementos do DOM
    bind: function() {
      this.patherLink.click(this.toggleMenu);
    },

    // configura os eventos
    getElements: function() {
      this.mobileBody = $("body.main-r7mobile");
      this.patherMenu = $(".item-pather-menu.has_child");
      this.patherLink = $(".pather-link", this.patherMenu);
    },

    // inicia a classe se a mesma estiver no mobile
    init: function() {
      this.getElements();

      if (this.mobileBody.length === 0)  {
        return;
      }
      this.start();
    },

    // associa os elementos aos eventos correspondentes
    start: function() {      
      this.bind();
    },

    // abre-fecha o menu mobile
    toggleMenu: function(event) {
      event.preventDefault();
      $(this).parent().siblings(".has_child").removeClass("open");
      $(this).parent().toggleClass("open");
    },

  };

  (document.readyState === "complete") 
    ? GHV_MenuMobile.init() 
    : window.addEventListener('load', function() { GHV_MenuMobile.init(); });

  
</script>



      <div class="adBanner" style="background-color: transparent; height: 1px; width: 1px;"></div>

<script>
  var adBanner = document.querySelector('.adBanner');
  if (adBanner.offsetHeight > 0) {
    var container = document.createElement("div");
    container.id = "has-adblock";
    container.style.display = "none";    
    document.body.appendChild(container);
  }
  adBanner.style.display = "none";
</script>
        <script type="text/javascript">
    if (typeof window.R7HashAudience != 'undefined') {
      window.R7HashPath = 'https://adv.r7.com/audience.js?s=' + window.R7HashAudience;
      document.write('<scr' + 'ipt type="text/javascript" src="' + window.R7HashPath + '"><\/scr' + 'ipt>');
    }
  </script>

  






  <script type='text/javascript'>
     var _ttconversion = _ttconversion || [];
     _ttconversion.push(['_channel', 'vivaavida-beleza']);
  </script>



    <script type="text/javascript">
//<![CDATA[

        $(function () {
        });
        //Logger.setLevel(0);

//]]>
</script>
    <script></script>

      
  <script async src="https://assets.r7.com/static/widget-24x1-ultimas/2.8.0/javascripts/script.js"></script>
  <script async src="https://assets.r7.com/static/widget-24x1-ultimas/2.8.0/javascripts/script-cda.js"></script>
  <script async src="https://assets.r7.com/static/widget-24x1-carousel-3/2.0.0/javascripts/script-cda.js"></script>
  <script async src="https://assets.r7.com/static/widget-12x1-a/2.1.0/javascripts/script-cda.js"></script>
  <script async src="https://assets.r7.com/static/widget-core/2.4.0/javascripts/script-cda.js"></script>

    <!-- tailtarget tag manager -->
    <!-- TailTarget Tag Manager TT-9964-3/CT-23 -->
<script>
  (function(i) {
    var ts = document.createElement('script');
    ts.type = 'text/javascript';
    ts.defer = true;
    ts.src = '//tags.t.tailtarget.com/t3m.js?i=' + i;
    
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(ts, s);
  })('TT-9964-3/CT-23');
</script>
<!-- End TailTarget Tag Manager -->



    <!-- header bindding request -->
    <script>
  function getAdUnitsUpdated(adUnits) {
    $.each(r7advlazy.getSlots(), function(i, slot) {
      var isException = r7advlazy.isItHBException(slot);
      var adUnitIndex = null;

      $.each(window.adUnits, function(i, unit) {
        if (isException && unit.code === slot.getSlotElementId()) {
          adUnitIndex = i;
        }
      });

      if (!isNaN(adUnitIndex)) { 
        delete window.adUnits[adUnitIndex]; 

        window.adUnits = $.map(window.adUnits, function(n, i) {
          if (n) { return n; }
        });
      }
    });

    return $.map(window.adUnits, function(n, i) { if (n) { return n; } });
  }

  function sendRequestHeaderBidding(successCallback) {
    // Verifica se o header bidding está habilitado
    prebidValidation();

    pbjs.que.push(function() {
      pbjs.setConfig({
        bidderSequence: 'random',
        enableSendAllBids: true,
        priceGranularity: {
          'buckets': [{
            'min': 0,
            'max': 50,
            'increment': 0.01
          }]
        },
      });

      adUnits = getAdUnitsUpdated(adUnits);

      adUnits = r7adv.normalizeUnits(adUnits);
      pbjs.addAdUnits(adUnits);

      pbjs.requestBids({
        bidsBackHandler: function() {
          sendAdserverRequest();          
          if (typeof successCallback === typeof Function) {
            successCallback();
          }
        },
        timeout: PREBID_TIMEOUT
      });
    });

    function sendAdserverRequest() {
      if (pbjs.adserverRequestSent) return;

      pbjs.adserverRequestSent = true;

      googletag.cmd.push(function() {
        pbjs.que.push(function() {
          pbjs.setTargetingForGPTAsync();
          window.R7AdvLazy.thisIsReadyToLoad();          
        });
      });
    }

    setTimeout(sendAdserverRequest, FAILSET_TIMEOUT);
  };

  window.addEventListener('DOMContentLoaded', sendRequestHeaderBidding);
</script>

    <!-- publicidade fixa no scroll -->  
    <div class="sticky-ad">
  <button class="sticky-ad-close">
    <span class="sticky-ad-close__icon">x</span>
  </button>
  <div id="sticky-ad"></div>
</div>

    <script>
  /**
   * Classe responsável exibir uma companha publicitária na home o R7.com
   * @author Bruno Bulnes
   **/
  function AbstractAdCampaign() {};

  AbstractAdCampaign.prototype = {
    getSnippetID: function() {
      return '5df38b1bbbb3eb7f21000014';
    },

    /**
     * Mudar o background da barra de links
     * @param {string} bgColor
     * @param {string} color Cor do texto
     **/
    changeBarBackground: function(bgColor, color) {
      var barSelector = this.isMobile() ? '.wrapper-mobile-header .menu-logo ' : '.header .header-wrap-content';

      $(barSelector).css({
        'background-color': bgColor,
        'background-image': 'none',
        'transition': 'background-color 500ms linear',
        'animation-direction': 'alternate',
        'animation-iteration-count': '2',
      });
      $('.header .header-menu-link').css('color', color);
    },

    /**
     * Muda o branckground do do corpo da página
     * 
     * @param {string} pageBg cor para ser inserida na página
     **/
    changePageBackground: function(pageBg) {
      $('body').css('background', pageBg);
    },

    /**
     * Mudar o logo do portal
     * @param {string} imagem
     * @param {string} link
     **/
    changeR7Logo: function(imagem, link, target) {
      if(!imagem) return

      var timeout = 400;
      var $logo = this.isMobile() ? $('.wrapper-mobile-header .logo') : $('.header .r7-logo');
      var $img  = $('<img>', {
        'src': imagem,
        'alt': 'R7.com',
        'title': 'R7.com',
      }).css('display', 'none');

      $logo.css({
        'transition': '.5s ease-in-out'
      });

      $('svg', $logo).fadeOut();

      setTimeout(function() {
        $logo.empty();
        $logo.append($img);
        $logo.attr('href', link);
        $logo.attr('target', target);

        $img.fadeIn();

      }.bind(this), timeout);
    },

    /**
     * Muda a tag de um elemento existente no DOM
     * 
     * @param {string} targetSelector seletor com tag a ser mudada
     * @param {string} newTagString nova tag a ser atribuida
     **/
    changeSelectorTag: function(targetSelector, newTagString) {
      if(!this.isMobile()) return


      $(targetSelector).each(function(){
        var newElem = $(newTagString, {html: $(this).html()});

        $.each(this.attributes, function() {
          newElem.attr(this.name, this.value);
        });

        $(this).replaceWith(newElem);
      });
    },

    /**
     * Método responsável por habilitar o funcionamento do snippet
     * @param {obejct} data
     **/
    itIsOn: function(data) {
      if (!data.hasOwnProperty('itens')) return false;
      if (data.itens.length === 0) return false;
      if (!data.itens[0].hasOwnProperty('enable')) return false;
      
      return data.itens[0].enable === 'on';
    },

    /**
     * Verifica se a mídia é mobile
     **/
    isMobile: function() {
      return $('body').hasClass('main-r7mobile')
    },

    /**
     * Verifica se está numa Home válida para executar o snippet
     * @param {object} data Snippet
     **/
    checkValidHome: function(data) {
      var loc = window.location;
      var itIsOn = this.itIsOn(data);
      var homes = this.getHomes(data.itens[0]);

      var isHome = !/\S+(-\d{2})(\d{2})(\d{4})$/.test(loc.pathname);

      if (isHome) {
        var isDev = /(\?actual_host=)(\w+\S)(\.r7\.com)/gi.test(loc.search);

        var section = !isDev 
          ? loc.host
          : loc.search.slice(loc.search.indexOf('=') + 1, loc.search.length);

        var subSection = loc.pathname !== '/' ? loc.pathname : '';

        var isValidHome = homes.filter(function(home) {
          if (subSection) {
            return home === section + subSection;
          }
          return home === section;
        }).length > 0;

        if (itIsOn && isValidHome) {
          if (this.isMobile()) {
            $('.mobile-header').addClass('snippet-active');
          }

          this.setNewLayout(data);
        }
      }
    },

    /**
     * Obtém a lista de homes onde o snippet deve funcionar
     **/
    getHomes: function(snippetData) {
      var list = snippetData.sitesUrls
        ? snippetData.sitesUrls.split(/[,;]/g) 
        : ['www.r7.com'];

      return list.filter(function(item) {
        return item.length > 0;
      });
    },

    /**
     * Retorna a imagem do logo
     * @param {object} data
     **/
    getDataImage: function(data) {
      return data.imgUrl;
    },

    /**
     * Retorna o link da campanha
     * @param {object} data
     **/
    getDataLink: function(data) {
      return data.link ? data.link.text : 'https://www.r7.com';
    },

    /**
     * Retorna o target da campanha
     * @param {object} data
     **/
    getDataLinkTarget: function(data) {
      return data.link && data.link._blank ? '_blank' : '_self';
    },

    /**
     * Retorna a cor do menu
     * @param {object} data
     **/
    getDataBgColor: function(data) {
      return (data && data.menuBgColor) ? data.menuBgColor : '#218EE1';
    },

    /**
     * Retorna a cor do fundo da página
     * @param {object} data
     **/
    getDataPageBgColor: function(data) {
      return (data && data.pageBgColor) ? data.pageBgColor : 'transparent';
    },

    /**
     * Retorna a cor do texto
     * @param {object} data
     **/
    getDataColor: function(data) {
      return (data && data.menuFontColor) ? data.menuFontColor : '#EFEFEF';
    },

    /**
     * Adiciona a imagem com o contador de impressão no corpo da página
     * @param {object} data
     **/
    appendCounterImpression: function(data) {
      var src = data && data.counterImpression ? data.counterImpression : '';
      var counter = $('<img>', { src: src });

      $('body').append(counter);
    },

    /**
     * Diminiu o padding dos items do menu no desktop para
     * quando o usuário clicar na busca ela não quebrar o layout
     **/
    changeItemMenuPadding: function() {
      if(this.isMobile()) return

      $('.header-menu-item').css('padding', ' 0 2px');
    },

    /**
     * Busca o snippet no endereõ registrado
     * @param {method} callbackSuccess Método de callback
     **/
    getSnippet: function(callbackSuccess) {
      $.ajax({
        async: true,
        cache: true,
        dataType: 'jsonp',
        processData: false,
        jsonpCallback: 'abstractAdCampaignCallback',
        success: callbackSuccess,
        url: '//snippets.r7.com/snippet/' + this.getSnippetID()
      });
    },

    /**
     * Verifica se o snippet está habilitado
     * para a barra de navegação poder ser formatada
     * @param {object} data Snippet
     **/
    setNewLayout: function(data) {
      var firstData =  data.itens[0];

      var img     = this.getDataImage(firstData);
      var link    = this.getDataLink(firstData);
      var target  = this.getDataLinkTarget(firstData);
      var bgColor = this.getDataBgColor(firstData);
      var color   = this.getDataColor(firstData);
      var pageBg  = this.getDataPageBgColor(firstData);

      setTimeout(function() {
        this.changeSelectorTag('.main-r7mobile .logo', '<a></a>')
        this.changeBarBackground(bgColor, color);
        this.changePageBackground(pageBg);
        this.appendCounterImpression(firstData);
        this.changeItemMenuPadding();
      }.bind(this), 1000);

      setTimeout(function() {
        this.changeR7Logo(img, link, target);
      }.bind(this), 1400);
    },

    /**
     * Método que inicia a classe
     **/
    start: function() {
      if (this.getSnippetID()) {
        this.getSnippet(this.checkValidHome.bind(this));
      }
    },

  };

  var AbstractAdCampaign = new AbstractAdCampaign();
  AbstractAdCampaign.start();
</script>
    <!--
  Make your site’s pages instant in 1 minute and improve your conversion rate by 1%.
  Source: https://instant.page/
 -->
<script 
  src="//instant.page/3.0.0" 
  type="module" 
  defer 
  integrity="sha384-OeDn4XE77tdHo8pGtE1apMPmAipjoxUQ++eeJa6EtJCfHlvijigWiJpD7VDPWXV1">
</script>
    

    <!--PER-7281: web-vitals-->
    <script>
  function getWebVitals() {
    var script = document.createElement('script');
    script.src = 'https://unpkg.com/web-vitals/dist/web-vitals.iife.js';
    script.onload = function () {
      // envia informações para a camada de dados.
      function sendToGTM(obj) {
        var r7dataLayer = window.r7dataLayer || [];
        var value = obj.name === 'CLS' ? obj.value * 1000 : obj.value;
        var delta = obj.delta === 'CLS' ? obj.delta * 1000 : obj.delta;

        r7dataLayer.push({
          event: 'coreWebVitals',
          webVitalsMeasurement: {
            name: obj.name,
            id: obj.id,
            value: value,
            delta: delta,
            valueRound: Math.round(value),
            deltaRound: Math.round(delta)
          }
        })
      } 

      webVitals.getCLS(sendToGTM, true);
      webVitals.getFID(sendToGTM, true);
      webVitals.getLCP(sendToGTM, true);
      webVitals.getFCP(sendToGTM, true);
      webVitals.getTTFB(sendToGTM, true);
    }

    document.head.appendChild(script);
  }

  getWebVitals();
</script>

    

    <!-- script área logada -->
    


    <!-- script taboola last body --> 
    <script type="text/javascript">
  window._taboola = window._taboola || [];
  _taboola.push({flush: true});
</script>
  </body>
</html>


