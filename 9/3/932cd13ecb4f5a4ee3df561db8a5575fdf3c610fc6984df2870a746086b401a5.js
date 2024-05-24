!function(t,i){"function"==typeof define&&define.amd?define(["jquery"],i):"object"==typeof module&&"object"==typeof module.exports?module.exports=i(require("jquery")):i(t.jQuery)}(this,function(t){"use strict";nction s(t,i){for(var s in t){var o=t[s];if(!e(o,"-")&&void 0!==p[o])return"pfx"==i?o:!0}return!1}function o(t,e,s){for(var o in t){var n=e[t[o]];if(void 0!==n)return s===!1?t[o]:i(n,"function")?n.bind(s||e):n}return!1}ar r,h,l={image:null,imageAttribute:"image",holderClass:"imageHolder",imgClass:"img-holder-img",container:t("body"),windowObject:t(window),speed:.2,coverRatio:.75,holderMinHeight:200,holderMaxHeight:null,extraHeight:0,mediaWidth:1600,mediaHeight:900,parallax:!0,touch:!1},a="imageScroll",d="plugin_"+a,c=g={},m=document.documentElement,f="imageScrollModernizr",u=document.createElement(f),p=u.style,v="Webkit Moz O ms",H=v.split(" "),w=v.toLowerCase().split(" "),b={},y=0,x="",$=return b.csstransforms=b.csstransforms3d=g.prefixed=window.requestAnimationFrame=g.prefixed("requestAnimationFrame",window)||b.csstransforms3d()?x="csstransforms3d":b.csstransforms()&&(x="csstransforms"),""!==x&&(h=g.prefixed("transform")),r=function(i,e){this.$imageHolder=t(i),this.settings=t.extend({},l,e),this.image=this.$imageHolder.data(this.settings.imageAttribute)||this.settings.image,this.mediaWidth=this.$imageHolder.data("width")||this.settings.mediaWidth,this.mediaHeight=this.$imageHolder.data("height")||this.settings.mediaHeight,this.coverRatio=this.$imageHolder.data("cover-ratio")||this.settings.coverRatio,this.holderMinHeight=this.$imageHolder.data("min-height")||this.settings.holderMinHeight,this.holderMaxHeight=this.$imageHolder.data("max-height")||this.settings.holderMaxHeight,this.extraHeight=this.$imageHolder.data("extra-height")||this.settings.extraHeight,this.ticking=!1,this.refresh=c(this.refresh,this),this._onScroll=c(this._onScroll,this),this._defaults=l,this._name=a,this.init()},t.extend(r.prototype,{constructor:r,init:function(){if(!this.image)throw new Error("You need to provide either a data-img attr or an image option");this.$scrollingElement=t("<img/>",{src:this.image}).addClass(this.settings.imgClass),this.settings.touch===!0?this.$scrollingElement.css({maxWidth:"100%"}).prependTo(this.$imageHolder):this.settings.parallax===!0?(this.$scrollerHolder=t("<div/>",{html:this.$imageHolder.html()}).css({top:0,visibility:"hidden",position:"fixed",overflow:"hidden"}).addClass(this.settings.holderClass).prependTo(this.settings.container),this.$imageHolder.css("visibility","hidden").empty(),this.$scrollingElement.css({position:"absolute",top:0,left:0,visibility:"hidden",maxWidth:"none"}).prependTo(this.$scrollerHolder)):(this.$scrollerHolder=this.$imageHolder.css({overflow:"hidden"}),this.$scrollingElement.css({position:"relative",overflow:"hidden"}).prependTo(this.$imageHolder)),this.settings.touch===!1&&(this._bindEvents(),this.refresh())},_adjustImgHolderHeights:function(){var t,i,e,s,o,n,r,h,l,a=this.settings.windowObject.height(),d=this.settings.windowObject.width()-this.settings.container.offset().left,c=this.coverRatio*a;c=null===this.holderMaxHeight||this.holderMaxHeight>c?Math.floor(c):this.holderMaxHeight,c=this.holderMinHeight<c?Math.floor(c):this.holderMinHeight,c+=this.extraHeight,h=Math.floor(a-(a-c)*this.settings.speed),n=Math.round(this.mediaWidth*(h/this.mediaHeight)),n>=d?r=h:(n=d,r=Math.round(this.mediaHeight*(n/this.mediaWidth))),l=h-c,o=a+c,s=2*a*(1-this.settings.speed)-l,t=-(l/2+(r-h)/2),i=Math.round((n-d)*-.5),e=t-s/2,this.$scrollingElement.css({height:r,width:n}),this.$imageHolder.height(c),this.$scrollerHolder.css({height:c,width:n}),this.scrollingState={winHeight:a,fromY:e,imgTopPos:t,imgLeftPos:i,imgHolderHeight:c,imgScrollingDistance:s,travelDistance:o,holderDistanceFromTop:this.$imageHolder.offset().top-this.settings.windowObject.scrollTop()}},_bindEvents:function(){this.settings.windowObject.on("resize",this.refresh),this.settings.parallax===!0&&this.settings.windowObject.on("scroll",this._onScroll)},_unBindEvents:function(){this.settings.windowObject.off("resize",this.refresh),this.settings.parallax===!0&&this.settings.windowObject.off("scroll",this._onScroll)},_onScroll:function(){this.scrollingState.holderDistanceFromTop=this.$imageHolder.offset().top-this.settings.windowObject.scrollTop(),this._requestTick()},_requestTick:_updatePositions:function(){if(this.scrollingState.holderDistanceFromTop<=this.scrollingState.winHeight&&this.scrollingState.holderDistanceFromTop>=-this.scrollingState.imgHolderHeight){var t=this.scrollingState.holderDistanceFromTop+this.scrollingState.imgHolderHeight,i=t/this.scrollingState.travelDistance,e=Math.round(this.scrollingState.fromY+this.scrollingState.imgScrollingDistance*(1-i)),s=this.settings.container.offset().left;this.$scrollerHolder.css(this._getCSSObject({transform:h,left:s,x:Math.ceil(this.scrollingState.imgLeftPos)+(""===x&&s>0?s:0),y:Math.round(this.scrollingState.holderDistanceFromTop),visibility:"visible"})),this.$scrollingElement.css(this._getCSSObject({transform:h,x:0,y:e,visibility:"visible"}))}else this.$scrollerHolder.css({visibility:"hidden"}),this.$scrollingElement.css({visibility:"hidden"});this.ticking=!1},_updateFallbackPositions:function(){this.$scrollerHolder.css({width:"100%"}),this.$scrollingElement.css({top:this.scrollingState.imgTopPos,left:this.scrollingState.imgLeftPos})},_getCSSObject:function(t){return"csstransforms3d"===x?t.transform="translate3d("+t.x+"px, "+t.y+"px, 0)":"csstransforms"===x?t.transform="translate("+t.x+"px, "+t.y+"px)":(t.top=t.y,t.left=t.x),delete t.x,delete t.y,t},enable:function(){this.settings.touch===!1&&(this._bindEvents(),this.refresh())},disable:function(){this.settings.touch===!1&&this._unBindEvents()},refresh:function(){this.settings.touch===!1&&(this._adjustImgHolderHeights(),this.settings.parallax===!0?this._requestTick():this._updateFallbackPositions())},destroy:function(){this.settings.touch===!1&&this._unBindEvents(),this.settings.touch===!0?(this.$imageHolder.removeAttr("style"),this.$scrollingElement.remove()):this.settings.parallax===!0?(this.$scrollerHolder.find("."+this.settings.imgClass).remove(),this.$imageHolder.css({visibility:"visible",height:"auto"}).html(this.$scrollerHolder.html()),this.$scrollerHolder.remove()):(this.$imageHolder.css({overflow:"auto"}).removeAttr("style"),this.$scrollingElement.remove()),this.$imageHolder.removeData()}}),t.fn[a]=function(i){return void 0===i||"object"==typeof i?this.each(:"string"==typeof i&&"_"!==i[0]&&"init"!==i?this.each(function(){var e=t.data(this,d);e instanceof r&&"function"==typeof e[i]&&e[i].apply(e,Array.prototype.slice.call(arguments,1))}):void 0},t.fn[a].defaults=r.defaults=l,t.fn[a].Plugin=r,r});