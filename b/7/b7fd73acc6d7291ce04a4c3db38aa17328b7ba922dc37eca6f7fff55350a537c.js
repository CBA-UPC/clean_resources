!function(t,e,i,s){.Defaults={items:3,loop:!1,center:!1,rewind:!1,checkVisibility:!0,mouseDrag:!0,touchDrag:!0,pullDrag:!0,freeDrag:!1,margin:0,stagePadding:0,merge:!1,mergeFit:!0,autoWidth:!1,startPosition:0,rtl:!1,smartSpeed:250,fluidSpeed:!1,dragEndSpeed:!1,responsive:{},responsiveRefreshRate:200,responsiveBaseElement:e,fallbackEasing:"swing",slideTransition:"",info:!1,nestedItemSelector:!1,itemElement:"div",stageElement:"div",refreshClass:"owl-refresh",loadedClass:"owl-loaded",loadingClass:"owl-loading",rtlClass:"owl-rtl",responsiveClass:"owl-responsive",dragClass:"owl-drag",itemClass:"owl-item",stageClass:"owl-stage",stageOuterClass:"owl-stage-outer",grabClass:"owl-grab"},n.Width={Default:"default",Inner:"inner",Outer:"outer"},n.Type={Event:"event",State:"state"},n.Plugins={},n.Workers=[{filter:["width","settings"],run:,{filter:["width","items","settings"],run:,{filter:["items","settings"],run:,{filter:["width","items","settings"],run:,{filter:["width","items","settings"],run:,{filter:["items","settings"],run:,{filter:["width","items","settings"],run:function(){for(var t=this.settings.rtl?1:-1,e=this._clones.length+this._items.length,i=-1,s=0,n=0,o=[];++i<e;)o.push((s=o[i-1]||0)+(n=this._widths[this.relative(i)]+this.settings.margin)*t);this._coordinates=o}},{filter:["width","items","settings"],run:,{filter:["width","items","settings"],run:,{filter:["items"],run:,{filter:["width","items","settings"],run:,{filter:["position"],run:,{filter:["width","position","items","settings"],run:],n.prototype.initializeStage=n.prototype.initializeItems=n.prototype.initialize=n.prototype.isVisible=n.prototype.setup=function(){var e=this.viewport(),i=this.options.responsive,s=-1,n=null;i?(t.each(i,,"function"==typeof(n=t.extend({},this.options,i[s])).stagePadding&&(n.stagePadding=n.stagePadding()),delete n.responsive,n.responsiveClass&&this.$element.attr("class",this.$element.attr("class").replace(RegExp("("+this.options.responsiveClass+"-)\\S+\\s","g"),"$1"+s))):n=t.extend({},this.options),this.trigger("change",{property:{name:"settings",value:n}}),this._breakpoint=s,this.settings=n,this.invalidate("settings"),this.trigger("changed",{property:{name:"settings",value:this.settings}})},n.prototype.optionsLogic=n.prototype.prepare=n.prototype.update=function(){for(var e=0,i=this._pipe.length,s=t.proxy(this._invalidated),n={};e<i;)(this._invalidated.all||t.grep(this._pipe[e].filter,s).length>0)&&this._pipe[e].run(n),e++;this._invalidated={},this.is("valid")||this.enter("valid")},n.prototype.width=n.prototype.refresh=n.prototype.onThrottledResize=n.prototype.onResize=n.prototype.registerEventHandlers=n.prototype.onDragStart=n.prototype.onDragMove=n.prototype.onDragEnd=n.prototype.closest=n.prototype.animate=n.prototype.is=n.prototype.current=n.prototype.invalidate=n.prototype.reset=n.prototype.normalize=n.prototype.relative=n.prototype.maximum=n.prototype.minimum=n.prototype.items=function(t){return t===s?this._items.slice():(t=this.normalize(t,!0),this._items[t])},n.prototype.mergers=n.prototype.clones=n.prototype.speed=n.prototype.coordinates=n.prototype.duration=n.prototype.to=function(t,e){var i=this.current(),s=null,n=t-this.relative(i),o=(n>0)-(n<0),a=this._items.length,r=this.minimum(),l=this.maximum();this.settings.loop?(!this.settings.rewind&&Math.abs(n)>a/2&&(n+=-1*o*a),(s=(((t=i+n)-r)%a+a)%a+r)!==t&&s-n<=l&&s-n>0&&(i=s-n,t=s,this.reset(i))):this.settings.rewind?(l+=1,t=(t%l+l)%l):t=Math.max(r,Math.min(l,t)),this.speed(this.duration(i,t,e)),this.current(t),this.isVisible()&&this.update()},n.prototype.next=n.prototype.prev=n.prototype.onTransitionEnd=n.prototype.viewport=n.prototype.replace=n.prototype.add=n.prototype.remove=n.prototype.preloadAutoWidthImages=n.prototype.destroy=function(){for(var s in this.$element.off(".owl.core"),this.$stage.off(".owl.core"),t(i).off(".owl.core"),!1!==this.settings.responsive&&(e.clearTimeout(this.resizeTimer),this.off(e,"resize",this._handlers.onThrottledResize)),this._plugins)this._plugins[s].destroy();this.$stage.children(".cloned").remove(),this.$stage.unwrap(),this.$stage.children().contents().unwrap(),this.$stage.children().unwrap(),this.$stage.remove(),this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class",this.$element.attr("class").replace(RegExp(this.options.responsiveClass+"-\\S+\\s","g"),"")).removeData("owl.carousel")},n.prototype.op=n.prototype.on=function(t,e,i,s){t.addEventListener?t.addEventListener(e,i,s):t.attachEvent&&t.attachEvent("on"+e,i)},n.prototype.off=n.prototype.trigger=n.prototype.enter=n.prototype.leave=n.prototype.register=function(e){if(e.type===n.Type.Event){if(t.event.special[e.name]||(t.event.special[e.name]={}),!t.event.special[e.name].owl){var i=t.event.special[e.name]._default;t.event.special[e.name]._default=function(t){return i&&i.apply&&(!t.namespace||-1===t.namespace.indexOf("owl"))?i.apply(this,arguments):t.namespace&&t.namespace.indexOf("owl")>-1},t.event.special[e.name].owl=!0}}else e.type===n.Type.State&&(this._states.tags[e.name]?this._states.tags[e.name]=this._states.tags[e.name].concat(e.tags):this._states.tags[e.name]=e.tags,this._states.tags[e.name]=t.grep(this._states.tags[e.name],t.proxy(this)))},n.prototype.suppress=n.prototype.release=n.prototype.pointer=n.prototype.isNumeric=n.prototype.difference=t.fn.owlCarousel=t.fn.owlCarousel.Constructor=n}(window.Zepto||window.jQuery,window,document),window.Zepto||window.jQuery,window,document),window.Zepto||window.jQuery,window,document),window.Zepto||window.jQuery,window,document),function(t,e,i,s){var n=n.Defaults={video:!1,videoHeight:!1,videoWidth:!1},n.prototype.fetch=function(t,e){var i=t.attr("data-vimeo-id")?"vimeo":t.attr("data-vzaar-id")?"vzaar":"youtube",s=t.attr("data-vimeo-id")||t.attr("data-youtube-id")||t.attr("data-vzaar-id"),n=t.attr("data-width")||this._core.settings.videoWidth,o=t.attr("data-height")||this._core.settings.videoHeight,a=t.attr("href");if(!a)throw Error("Missing video URL.");if((s=a.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/))[3].indexOf("youtu")>-1)i="youtube";else if(s[3].indexOf("vimeo")>-1)i="vimeo";else{if(!(s[3].indexOf("vzaar")>-1))throw Error("Video URL not supported.");i="vzaar"}s=s[6],this._videos[a]={type:i,id:s,width:n,height:o},e.attr("data-video",a),this.thumbnail(t,this._videos[a])},n.prototype.thumbnail=function(e,i){var s,n,o,a=i.width&&i.height?"width:"+i.width+"px;height:"+i.height+"px;":"",r=e.find("img"),l="src",h="",c=this._core.settings,d=if(e.wrap(t("<div/>",{class:"owl-video-wrapper",style:a})),this._core.settings.lazyLoad&&(l="data-src",h="owl-lazy"),r.length)return d(r.attr(l)),r.remove(),!1;"youtube"===i.type?d(o="//img.youtube.com/vi/"+i.id+"/hqdefault.jpg"):"vimeo"===i.type?t.ajax({type:"GET",url:"//vimeo.com/api/v2/video/"+i.id+".json",jsonp:"callback",dataType:"jsonp",success:function(t){d(o=t[0].thumbnail_large)}}):"vzaar"===i.type&&t.ajax({type:"GET",url:"//vzaar.com/api/videos/"+i.id+".json",jsonp:"callback",dataType:"jsonp",success:)},n.prototype.stop=n.prototype.play=n.prototype.isInFullScreen=n.prototype.destroy=t.fn.owlCarousel.Constructor.Plugins.Video=n}(window.Zepto||window.jQuery,window,document),window.Zepto||window.jQuery,window,document),window.Zepto||window.jQuery,window,document),function(t,e,i,s){"use strict";var n=n.Defaults={nav:!1,navText:['<span aria-label="Previous">&#x2039;</span>','<span aria-label="Next">&#x203a;</span>'],navSpeed:!1,navElement:'button type="button" role="presentation"',navContainer:!1,navContainerClass:"owl-nav",navClass:["owl-prev","owl-next"],slideBy:1,dotClass:"owl-dot",dotsClass:"owl-dots",dots:!0,dotsEach:!1,dotsData:!1,dotsSpeed:!1,dotsContainer:!1},n.prototype.initialize=n.prototype.destroy=n.prototype.update=n.prototype.draw=function(){var e,i=this._core.settings,s=this._core.items().length<=i.items,n=this._core.relative(this._core.current()),o=i.loop||i.rewind;this._controls.$relative.toggleClass("disabled",!i.nav||s),i.nav&&(this._controls.$previous.toggleClass("disabled",!o&&n<=this._core.minimum(!0)),this._controls.$next.toggleClass("disabled",!o&&n>=this._core.maximum(!0))),this._controls.$absolute.toggleClass("disabled",!i.dots||s),i.dots&&(e=this._pages.length-this._controls.$absolute.children().length,i.dotsData&&0!==e?this._controls.$absolute.html(this._templates.join("")):e>0?this._controls.$absolute.append(Array(e+1).join(this._templates[0])):e<0&&this._controls.$absolute.children().slice(e).remove(),this._controls.$absolute.find(".active").removeClass("active"),this._controls.$absolute.children().eq(t.inArray(this.current(),this._pages)).addClass("active"))},n.prototype.onTrigger=n.prototype.current=n.prototype.getPosition=n.prototype.next=function(e){t.proxy(this._overrides.to,this._core)(this.getPosition(!0),e)},n.prototype.prev=n.prototype.to=t.fn.owlCarousel.Constructor.Plugins.Navigation=n}(window.Zepto||window.jQuery,window,document),function(t,e,i,s){"use strict";var n=function(i){this._core=i,this._hashes={},this.$element=this._core.$element,this._handlers={"initialized.owl.carousel":t.proxy(this),"prepared.owl.carousel":t.proxy(this),"changed.owl.carousel":t.proxy(function(i){if(i.namespace&&"position"===i.property.name){var s=this._core.items(this._core.relative(this._core.current())),n=t.map(this._hashes,.join();n&&e.location.hash.slice(1)!==n&&(e.location.hash=n)}},this)},this._core.options=t.extend({},n.Defaults,this._core.options),this.$element.on(this._handlers),t(e).on("hashchange.owl.navigation",t.proxy(this))};n.Defaults={URLhashListener:!1},n.prototype.destroy=t.fn.owlCarousel.Constructor.Plugins.Hash=n}(window.Zepto||window.jQuery,window,document),function(t,e,i,s){r a=t("<support>").get(0).style,r="Webkit Moz O ms".split(" "),l={transition:{end:{WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",transition:"transitionend"}},animation:{end:{WebkitAnimation:"webkitAnimationEnd",MozAnimation:"animationend",OAnimation:"oAnimationEnd",animation:"animationend"}}},h={csstransforms:function(){return!!n("transform")},csstransforms3d:function(){return!!n("perspective")},csstransitions:function(){return!!n("transition")},cssanimations:;h.csstransitions()&&(t.support.transition=new String(o("transition")),t.support.transition.end=l.transition.end[t.support.transition]),h.cssanimations()&&(t.support.animation=new String(o("animation")),t.support.animation.end=l.animation.end[t.support.animation]),h.csstransforms()&&(t.support.transform=new String(o("transform")),t.support.transform3d=h.csstransforms3d())}(window.Zepto||window.jQuery,window,document),function(t){t(".wp-block-columns").each(function(e,i){0==t(i).find("h2").length&&t(i).addClass("no-border")}),t(".tour-links").each(;let e=document;t(".sidebar .title .icon, .sidebar-second .title .icon").on("click",function(){t(this).parent().siblings(".list").slideToggle(),t(this).toggleClass("active"),t(this).parent().toggleClass("radius-10")}),t(".btn-convert").on("click",function(e){var i=t(this);t.post("https://salamparvaz.com/wp-admin/admin-ajax.php",{action:"convert_date",type:t(this).hasClass("c-1")?"jalali":"georgian",date:t(this).hasClass("c-1")?t(".form.jalali #year").val()+"-"+t(".form.jalali #month").val()+"-"+t(".form.jalali #day").val():t(".form.georgian  #year").val()+"-"+t(".form.georgian  #month").val()+"-"+t(".form.georgian  #day").val()},function(e){t(".convert .result").text(e),i.hasClass("c-1")?t(".convert .result").addClass("jalali"):t(".convert .result").removeClass("jalali"),t(".convert .result").removeClass("d-none")})}),t(".convert .tabs.active-1 span:nth-child(1)").on("click",function(e){t(".convert .tabs").removeClass("active-2"),t(".convert .tabs").addClass("active-1"),t(".form.georgian").addClass("d-none"),t(".form.jalali").removeClass("d-none")}),t(".convert .tabs.active-1 span:nth-child(2)").on("click",,t(".mobile-menu .contact-filter .btn-filter").on("click",function(e){t("body").css("overflow-y","hidden"),t(".filter-popup").addClass("active")}),t(".filter-popup .header .close").on("click",,t(window).width()>1024&&t(".main-menu > ul > li > a").each(function(e,i){t(i).attr("background-image")&&t(i).parent().find(".sub-menu").append('<li class="sub-img"><img src="'+t(i).attr("background-image")+'"></li>')}),t('.main-menu > ul.menu > .menu-item > a[href="#"]').on("click",,t(".main-menu .menu > .menu-item ").on("click",function(e){t(this).hasClass("active")?(console.log("test"),t("header").removeClass("active"),t(".main-navbar .sub-menu").removeClass("active")):(t(".main-navbar").each(function(){t(this).find(".sub-menu").removeClass("active").siblings("a").removeClass("active-menu"),t("header").addClass("active")}).css("zIndex","110"),t(this).find("ul").hasClass("sub-menu")?(t(this).find(".sub-menu").addClass("active").siblings("a").addClass("active-menu"),t(".backdrop").addClass("active")):t(".backdrop").removeClass("active"))}),t(".backdrop").on("click",function(){t(".main-navbar").each(,t("header").removeClass("active"),t(".menu-mobile").removeClass("active")}),t(".open-menu-mobile").on("click",function(){t(".menu-mobile").addClass("active"),t(".backdrop").addClass("active")}),t(".close-menu-mobile").on("click",,t(".menu-mobile .menu > .menu-item > a").on("click",function(e){t(this).siblings().hasClass("sub-menu")&&(e.preventDefault(),t(this).toggleClass("color-red")),t(this).siblings(".sub-menu").slideToggle()});var i,s,n=t(t(".wp-block-column[id]").get().reverse());if(t(window).on("scroll",function(){var i=t(window).scrollTop(),s=!1;t(".destination .sidebar-second .article-links a").removeClass("active"),n.each(function(e,n){i>t(n).offset().top-50&&!s&&(s=!0,t('.destination .sidebar-second .article-links a[href="#'+t(n).attr("id")+'"]').addClass("active"))}),t("body").hasClass("page")&&t(".tour-card").length&&t("#packages").length&&(t("#packages").offset().top+t("#packages").height()>i?t(".contact-filter").removeClass("no-filter"):t(".contact-filter").addClass("no-filter")),t("body").hasClass("single-tour")&&(i>t("footer").offset().top-t("footer").height()?t(".contact-filter").removeClass("active"):t(".contact-filter").addClass("active")),t(".navbar").length&&(e.querySelector(".navbar").offsetTop>500?t(".navbar").addClass("active"):t(".navbar").removeClass("active"))}),t(".schema-faq-question").on("click",,t(".tour-reserve,.call-popup").on("click",function(){t("header .main-navbar").css("z-index","100"),t(".phone-modal").addClass("active"),t(".backdrop").addClass("active")}),t(".backdrop").on("click",function(){t("header .main-navbar").css("z-index","110"),t(".phone-modal").removeClass("active"),t(".backdrop").removeClass("active")}),t(".phone-modal i.close").click(function(){t("header .main-navbar").css("z-index","110"),t(".phone-modal").removeClass("active"),t(".backdrop").removeClass("active")}),"on"==localStorage.getItem("newsletter")?t(".newsletters").removeClass("active"):t(".newsletters").addClass("active"),t(".newsletters .open").on("click",function(){localStorage.setItem("newsletter","on"),t(".newsletters").removeClass("active")}),t(".newsletters .close").on("click",,t(".scroll-top").on("click",,t("footer").length){let o,a,r,l;t(window).on("scroll",function(){o=t(window).scrollTop(),r=(a=t("footer").offset().top)-o,l=t("footer").innerHeight(),t("body").hasClass("single-tour")||(r<l?t(".mobile-menu").addClass("active"):t(".mobile-menu").removeClass("active"))})}if(t(".home-suggestion").length){let h,c,d,p;t(window).on("scroll",function(){h=t(window).scrollTop(),(d=(c=t(".home-suggestion").offset().top)-h)<(p=t(".home-suggestion").innerHeight())/2?t(".show-section").addClass("dark"):t(".show-section").removeClass("dark")})}var u=0;let m=t=>t.replace(/[۰-۹]/.indexOf(t));if(t(".trip-list .trip-item").click(function(){t(".trip-list .trip-item").removeClass("active"),t(this).addClass("active");var e=parseInt(atob(t(this).attr("data-actions")).replaceAll(",",""));t(".tour-container .tour-info .bed-info .bed p:last-child span").each(function(i,s){if(!t(s).text().includes("یورو")&&!t(s).text().includes("دلار")){var n=m(t(s).text());0!=n&&(n=(n=n.replace(/,/g,"")).replace(/٬/g,""),n=(n=parseInt(n)-u+e).toLocaleString("fa-IR"),t(s).text(n))}}),u=e}),t(".trip-list li").length){var g=[];t(".tour-container .sidebar .tour-properties .around-trip .trip-list .trip-item").each(function(e,i){var s=parseInt(atob(t(this).attr("data-actions")).replaceAll(",",""));g.push({i:e.price>i.price?1:0}),t(".tour-container .sidebar .tour-properties .around-trip .trip-list .trip-item:nth-child("+(g[0].i+1)+")").click(),t(".tour-container .sidebar .tour-properties .around-trip .trip-list").animate({scrollTop:t(".tour-container .sidebar .tour-properties .around-trip .trip-list li.active").position().top-20},500,"swing",function()window).scrollTop()}),t(".filter-popup .footer .reset").click(function(){t(".filter-airline").each(function(){this.checked=!1}),t(".fin(){this.checked=!1}),f=[],v=[],y()}),t(".filter-popup .fomoveClass("active")});var f=[],v=[];function y(){console.log(f),t("#packages .tour-card").each(function(e,i){f.length>0&&v.length>0?f.includes(t(i).find(".tour-plane span").text())&&v.includes(t(i).find(".tour-time").attr("duration"))?t(i).attr("style","display:grid !important"):t(i).attr("style","display:none !important"):f.length>0?(console.log(t(i).find(".tour-plane span").text()),f.includes(t(i).find(".tour-plane span").text())?t(i).attr("style","display:grid !important"):t(i).attr("style","display:none !important")):v.length>0&&(v.includes(t(i).find(".tour-time").attr("duration"))?t(i).attr("style","display:grid !important"):t(i).attr("style","display:none !important")),0==f.length&&0==v.length&&t(i).attr("style","display:grid !important")})}t(".filter-airline").change(function(){if(this.checked)f.push(t(this).attr("name"));else{var e=f.indexOf(t(this).attr("name"));e>-1&&f.splice(e,1)}console.log(f,v),y()}),t(".filter-duration").change(function(){if(this.checked)v.push(t(this).attr("name"));else{var e=v.indexOf(t(this).attr("name"));e>-1&&v.splice(e,1)}console.log(f,v),y()});var w=["mousedown","mousemove","keydown","scroll","tor(t,$,{passive:!0})});var C=!1;functieEventListener(t,$)}),C=!0,t('img[loadi).g(t).toLowerCase())}function b(t){var e=t.closest(".new-comment"),i={comment_author:e.find('input.dirty[name="comments-name"]').val(),comment_author_email:e.find('input.dirty[name="comments-mobile"]').val(),comment_content:e.find("textarea.dirty").val(),comment_author_mobile:e.find('input.dirty[name="comments-mobile"]').val()};RegExp("^(\\+98|0)?9\\d{9}$").test(i.comment_author_email)?(i.comment_author_email="",e.find('input.dirty[name="comments-mobile"]').removeClass("error"),is_mobile_valid=!0):x(i.comment_author_email)?(i.comment_author_mobile="",e.find('input.dirty[name="comments-mobile"]').removeClass("error"),is_mobile_valid=!0):(is_mobile_valid=!1,e.find('input.dirty[name="comments-mobile"]').addClass("error")),e.find('input.dirty[name="comments-name"]').length>0&&(e.find('input.dirty[name="comments-name"]').val().length>0?(is_name_valid=!0,e.find('input.dirty[name="comments-name"]').removeClass("error")):(e.find('input.dirty[name="comments-name"]').addClass("error"),is_name_valid=!1)),e.find("textarea.dirty").length>0&&(e.find("textarea.dirty").val().length>0?(is_massage_valid=!0,e.find("textarea.dirty").removeClass("error")):(e.find("textarea.dirty").addClass("error"),is_massage_valid=!1))}t(document).on("focus keyup active",":input:not(:button)).addClass("dirty")}),t(document).on("keyup focus",".new-comment input",function(){b(t(this))}),t(document).on("keyup focus",".nnction(){b(t(this))}),t(document).on("click",".send-comment",function(){var e=t(this).closest(".new-comment"),i={comment_post_ID:e.attr("post-id"),comment_parent:0,comment_author:e.find('input.dirty[name="comments-name"]').val(),comment_author_email:e.find('input.dirty[name="comments-mobile"]').val(),comment_content:e.find("textarea.dirty").val(),comment_author_mobile:e.find('input.dirty[name="comments-mobile"]').val()};RegExp("^(\\+98|0)?9\\d{9}$").test(i.comment_author_email)?(i.comment_author_email="",e.find('input[name="comments-mobile"]').removeClass("error"),is_mobile_valid=!0):x(i.comment_author_email)?(i.comment_author_mobile="",e.find('input[name="comments-mobile"]').removeClass("error"),is_mobile_valid=!0):(is_mobile_valid=!1,e.find('input[name="comments-mobile"]').addClass("error")),e.find('input[name="comments-name"]').length>0&&(e.find('input[name="comments-name"]').val().length>0?(is_name_valid=!0,e.find('input[name="comments-name"]').removeClass("error")):(e.find('input[name="comments-name"]').addClass("error"),is_name_valid=!1)),e.find("textarea").length>0&&(e.find("textarea").val().length>0?(is_massage_valid=!0,e.find("textarea").removeClass("error")):(e.find("textarea").addClass("error"),is_massage_valid=!1)),is_mobile_valid&&is_name_valid&&is_massage_valid?(e.find("> .loading").addClass("active"),e.find(".send-comment").addClass("loading"),t.post("/wp-json/api/new_comment",i,function(i){t(".reply-comment-form").removeClass("active"),k("succeed","دیدگاه شما با موفقیت ثبت شد.",""),e.find("> .loading").removeClass("active"),e.find(".send-comment").removeClass("loading"),e.find("input,textarea").val("")}).fail(function(t){})):((is_mobile_valid||is_name_valid||is_massage_valid)&&(is_mobile_valid||is_name_valid)&&(is_mobile_valid||is_massage_valid)&&(is_name_valid||is_massage_valid)||k("fail","توجه!","لطفا موارد خواسته شده را تکمیل نمایید"),!is_mobile_valid&&is_name_valid&&is_massage_valid&&k("fail","توجه!","پاسخ شما به ایمیل یا شماره شما ارسال خواهد شد"),is_mobile_valid&&!is_name_valid&&is_massage_valid&&k("fail","توجه!"," لطفا نام زیبای خود را وارد نمایید"),is_mobile_valid&&is_name_valid&&!is_massage_valid&&k("fail","توجه!","لطفا نظر یا سوال خود را در بخش مشخص شده وارد نمایید"))});var _=[];localStorage.getItem("rating_pages")?_=localStorage.getItem("rating_pages").split(","):localStorage.setItem("rating_pages",""),_.includes(t(".tour-point .list .stars").attr("post-id"))&&t(".tour-point .list .stars").removeClass("can-rate"),t(document).on("click"," .tour-point .list .stars.can-rate li",function(){var e=t(this).index()+1;_.push(t(this).pare,t(this).parent().removeClass("can-rate"),t.post("/wp-json/api/rating",{post_id:t(this).parent().attr("post-id"),rating:e},function(t){k("succeed","امتیاز شما ثبت شد","با سپاس از مشارکت شما")}).fail(function(t){})}),t(document).on("click",".submit-newsletter",function(){var e=RegExp("^(\\+98|0)?9\\d{9}$");console.log(),e.test(t("footer .newsletters .form .form-control input").val())?t.post/news_letter",{mobile:t("footer .newsletters .form .form-control input").val()},function(e){k("succeed","شماره همراه شما با موفقیت ثبت شد.",""),t("footer .newsletters .form .form-control input").val("")}).fail(function(t){}):k("fail","خطا!","شماره تلفن همراه وارد شده معتبر نیست")});var z=[100];function k(e,i,s){z[z.length]=z[z.length-1]+1;var n=z[z.length-1];console.log(z),setTimeout(function(){var o=`
			<div class="toast `+e+"  toasiv>
  <div class="body">
	  <p>`+i+`</p>
	  <p>`+s+`</p>
	  <i class="icon"></i>
  </div>
  </div>`;t("body .toasts-container,200),setTimeout(function(){t(".toast.toast-"+n).addClass("active")},300),setTimeout(function(){t(".toast.toast-"+n).addClass("deactive")},4e3),setTimeout(function(){},5e3)}if(t(document).on("click",".toast .close",function(){t(".toast").addClass("deactive"),setTimeout(function(){},12e3)}),768>t(window).width()&&t(".scroll-area").css("height",window.innerHeight),t(".home-slider").length&&t(window).width()>768&&(i=new Swiper(".home-slider",{effect:"creative",mousewheel:!0,speed:1e3,allowTouchMove:!1,direction:"vertical",loop:!1,creativeEffect:{prev:{shadow:!1,translate:[0,"-20%",-1]},next:{translate:[0,"100%",0]}},scrollbar:{el:".swiper-scrollbar"}})).on("slideChange",function(e){0==i.activeIndex&&t(".home section .home-fix-elements .show-section button:first-child").removeClass("active"),4==i.activeIndex&&t(".home section .home-fix-elements .show-section button:last-child").removeClass("active"),(1==i.activeIndex||2==i.activeIndex||3==i.activeIndex)&&(t(".home section .home-fix-elements .show-section button:last-child").addClass("active"),t(".home section .home-fix-elements .show-section button:first-child").addClass("active")),t("body").addClass("slide-switch").removeClass("active-slide-4").removeClass("active-slide-1").removeClass("active-slide-2").removeClass("active-slide-3").removeClass("active-slide-0").removeClass("active-slide-5"),setTimeout(function(){t("body").addClass("active-slide-"+i.activeIndex).removeClass("slide-switch")},1e3)}),t(".scroll-down").click(function(){t(window).width()>768?i.slideNext():(t(".home-suggestion").offset().top,t(window).scrollTop(200))}),t(".home section .home-fix-elements .show-section button:last-child").click(function(){t(this).hasClass("active")&&i.slideNext()}),t(".home section .home-fix-elements .show-section button:first-child").click(function(){t(this).hasClass("active")&&i.slidePrev()}),t(".tours-slider").length&&(s=t(window).width()>768?new Swiper(".tours-slider",{mousewheel:!1,slidesPerView:"auto",spaceBetween:200,centeredSlides:!0,allowTouchMove:!1,speed:1e3,direction:"horizontal",loop:!1,scrollbar:{el:".swiper-scrollbar"}}):new Swiper(".tours-slider",{mousewheel:!1,slidesPerView:1,spaceBetween:0,allowTouchMove:!1,speed:1e3,direction:"horizontal",loop:!1,scrollbar:{el:".swiper-scrollbar"}})),t(".home .home-suggestion .tab-container .tab-header button").click(function(){t(".home .home-suggestion .tab-container .tab-header button").removeClass("active"),t(this).addClass("active"),s.slideTo(t(this).index(),500)}),jQuery(".mouse-cursor").length&&t("body")){let T=document.querySelector(".cursor-inner"),E=dE.style.transform="translate("+t.clientX+"px, "+t.clientY+"px)",T.style.transform="translate("+t.clientX+"px, "+t.clientY+"px)",D=t.clientY,P=t.clientX},t("body").on("mouseenter","a, .cursor-pointer,button",function(){T.classList.add("cursor-hover"),E.classList.add("cursor-hover")}),t("body").on("mouseleave","a, .cursor-pointer,button",function(){t(this).is("a")&&t(this).closest(".cursor-pointer").length||(T.classList.remove("cursor-hover"),E.classList.remove("cursor-hover"))}),T.style.visibility="visible",E.sength){let I=document.querySelector("#my-svg"),j=new LazyLinePainter(I,{strokeWidth:10});t("#my-svg").addClass("animate");var S=0;let L=setInterval(function e(){var i=Math.floor(30*Math.random());S+i>=100?(clearInterval(L),S=100,setTimeout(function(){t(".load-container").fadeOut()},1e3)):(S+=i,j.set("progress",S/100)),t(".load-container .loading p:nth-child(2) span").text(S)},200)}var H=0;t(window).scroll(function(e){var i=t(this).scrollTop();console.log(i),i>600?t("header .main-navbar").addClass("fixed"):t("header .main-navbar").removeClass("fixed"),i>H?t("header .main-navbar").removeClass("active"):t("header .main-navbar").addClass("active"),H=i})}(jQuery);