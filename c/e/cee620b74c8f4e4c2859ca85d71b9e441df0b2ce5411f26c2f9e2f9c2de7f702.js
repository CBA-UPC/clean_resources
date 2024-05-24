/*!
 * fullPage 2.9.4*/
!function(e,n){"use strict";"function"==typeof define&&define.amd?define(["jquery"],function(t){return n(t,e,e.document,e.Math)}):"object"==typeof exports&&exports?module.exports=n(require("jquery"),e,e.document,e.Math):n(jQuery,e,e.document,e.Math)}("undefined"!=typeof window?window:this,function(e,n,t,o,i){"use strict";var a="fullpage-wrapper",r="."+a,l="fp-scrollable",s="."+l,c="fp-responsive",d="fp-notransition",f="fp-destroyed",u="fp-enabled",h="fp-viewing",p="active",v="."+p,g="fp-completely",m="."+g,w=".section",S="fp-section",y="."+S,b=y+v,x=y+":first",C=y+":last",T="fp-tableCell",k="."+T,I="fp-auto-height",L="fp-normal-scroll",E="fp-nav",M="#"+E,O="fp-tooltip",A="."+O,R="fp-show-active",H=".slide",B="fp-slide",z="."+B,D=z+v,P="fp-slides",q="."+P,F="fp-slidesContainer",V="."+F,W="fp-table",U="fp-slidesNav",Y="."+U,j=Y+" a",N="fp-controlArrow",X="."+N,K="fp-prev",Q="."+K,G=N+" "+K,J=X+Q,Z="fp-next",$="."+Z,_=N+" "+Z,ee=X+$,ne=e(n),te=e(t),oe={scrollbars:!0,mouseWheel:!0,hideScrollbars:!1,fadeScrollbars:!1,disableMouse:!0,interactiveScrollbars:!0};e.fn.fullpage=function(l){function s(n,t){n||nt(0),rt("autoScrolling",n,t);var o=e(b);l.autoScrolling&&!l.scrollBar?(ct.css({overflow:"hidden",height:"100%"}),N(Bt.recordHistory,"internal"),St.css({"-ms-touch-action":"none","touch-action":"none"}),o.length&&nt(o.position().top)):(ct.css({overflow:"visible",height:"initial"}),N(!1,"internal"),St.css({"-ms-touch-action":"","touch-action":""}),o.length&&ct.scrollTop(o.position().top))}function N(e,n){rt("recordHistory",e,n)}function Q(e,n){rt("scrollingSpeed",e,n)}function Z(e,n){rt("fitToSection",e,n)}function $(e){l.lockAnchors=e}function ae(e){e?(Kn(),Qn()):(Xn(),Gn())}function re(n,t){"undefined"!=typeof t?(t=t.replace(/ /g,"").split(","),e.each(t,function(e,t){ot(n,t,"m")})):n?(ae(!0),Jn()):(ae(!1),Zn())}function le(n,t){"undefined"!=typeof t?(t=t.replace(/ /g,"").split(","),e.each(t,function(e,t){ot(n,t,"k")})):l.keyboardScrolling=n}function se(){var n=e(b).prev(y);n.length||!l.loopTop&&!l.continuousVertical||(n=e(y).last()),n.length&&Ke(n,null,!0)}function ce(){var n=e(b).next(y);n.length||!l.loopBottom&&!l.continuousVertical||(n=e(y).first()),n.length&&Ke(n,null,!1)}function de(e,n){Q(0,"internal"),fe(e,n),Q(Bt.scrollingSpeed,"internal")}function fe(e,n){var t=Dn(e);"undefined"!=typeof n?qn(e,n):t.length>0&&Ke(t)}function ue(e){je("right",e)}function he(e){je("left",e)}function pe(n){if(!St.hasClass(f)){bt=!0,yt=ne.height(),e(y).each(function(){var n=e(this).find(q),t=e(this).find(z);l.verticalCentered&&e(this).find(k).css("height",Bn(e(this))+"px"),e(this).css("height",yt+"px"),l.scrollOverflow&&(t.length?t.each(function(){Rn(e(this))}):Rn(e(this))),t.length>1&&Sn(n,n.find(D))});var t=e(b),o=t.index(y);o&&de(o+1),bt=!1,e.isFunction(l.afterResize)&&n&&l.afterResize.call(St),e.isFunction(l.afterReBuild)&&!n&&l.afterReBuild.call(St)}}function ve(n){var t=dt.hasClass(c);n?t||(s(!1,"internal"),Z(!1,"internal"),e(M).hide(),dt.addClass(c),e.isFunction(l.afterResponsive)&&l.afterResponsive.call(St,n)):t&&(s(Bt.autoScrolling,"internal"),Z(Bt.autoScrolling,"internal"),e(M).show(),dt.removeClass(c),e.isFunction(l.afterResponsive)&&l.afterResponsive.call(St,n))}function ge(){l.css3&&(l.css3=Nn()),l.scrollBar=l.scrollBar||l.hybrid,we(),Se(),re(!0),s(l.autoScrolling,"internal"),Tn(),jn(),"complete"===t.readyState&&rn(),ne.on("load",rn)}function me(){ne.on("scroll",Re).on("hashchange",ln).blur(pn).resize(Cn),te.keydown(sn).keyup(dn).on("click touchstart",M+" a",vn).on("click touchstart",j,gn).on("click",A,cn),e(y).on("click touchstart",X,hn),l.normalScrollElements&&(te.on("mouseenter",l.normalScrollElements,function(){ae(!1)}),te.on("mouseleave",l.normalScrollElements,function(){ae(!0)}))}function we(){var n=St.find(l.sectionSelector);l.anchors.length||(l.anchors=n.filter("[data-anchor]").map(function(){return e(this).data("anchor").toString()}).get()),l.navigationTooltips.length||(l.navigationTooltips=n.filter("[data-tooltip]").map(function(){return e(this).data("tooltip").toString()}).get())}function Se(){St.css({height:"100%",position:"relative"}),St.addClass(a),e("html").addClass(u),yt=ne.height(),St.removeClass(f),Ce(),e(y).each(function(n){var t=e(this),o=t.find(z),i=o.length;be(t,n),xe(t,n),i>0?ye(t,o,i):l.verticalCentered&&Hn(t)}),l.fixedElements&&l.css3&&e(l.fixedElements).appendTo(dt),l.navigation&&ke(),Le(),l.scrollOverflow?("complete"===t.readyState&&Ie(),ne.on("load",Ie)):Oe()}function ye(n,t,o){var i=100*o,a=100/o;t.wrapAll('<div class="'+F+'" />'),t.parent().wrap('<div class="'+P+'" />'),n.find(V).css("width",i+"%"),o>1&&(l.controlArrows&&Te(n),l.slidesNavigation&&Vn(n,o)),t.each(function(n){e(this).css("width",a+"%"),l.verticalCentered&&Hn(e(this))});var r=n.find(D);r.length&&(0!==e(b).index(y)||0===e(b).index(y)&&0!==r.index())?et(r,"internal"):t.eq(0).addClass(p)}function be(n,t){t||0!==e(b).length||n.addClass(p),vt=e(b),n.css("height",yt+"px"),l.paddingTop&&n.css("padding-top",l.paddingTop),l.paddingBottom&&n.css("padding-bottom",l.paddingBottom),"undefined"!=typeof l.sectionsColor[t]&&n.css("background-color",l.sectionsColor[t]),"undefined"!=typeof l.anchors[t]&&n.attr("data-anchor",l.anchors[t])}function xe(n,t){"undefined"!=typeof l.anchors[t]&&n.hasClass(p)&&Mn(l.anchors[t],t),l.menu&&l.css3&&e(l.menu).closest(r).length&&e(l.menu).appendTo(dt)}function Ce(){St.find(l.sectionSelector).addClass(S),St.find(l.slideSelector).addClass(B)}function Te(e){e.find(q).after('<div class="'+G+'"></div><div class="'+_+'"></div>'),"#fff"!=l.controlArrowColor&&(e.find(ee).css("border-color","transparent transparent transparent "+l.controlArrowColor),e.find(J).css("border-color","transparent "+l.controlArrowColor+" transparent transparent")),l.loopHorizontal||e.find(J).hide()}function ke(){dt.append('<div id="'+E+'"><ul></ul></div>');var n=e(M);n.addClass(function(){return l.showActiveTooltip?R+" "+l.navigationPosition:l.navigationPosition});for(var t=0;t<e(y).length;t++){var o="";l.anchors.length&&(o=l.anchors[t]);var i='<li><a href="#'+o+'"><span></span></a>',a=l.navigationTooltips[t];"undefined"!=typeof a&&""!==a&&(i+='<div class="'+O+" "+l.navigationPosition+'">'+a+"</div>"),i+="</li>",n.find("ul").append(i)}e(M).css("margin-top","-"+e(M).height()/2+"px"),e(M).find("li").eq(e(b).index(y)).find("a").addClass(p)}function Ie(){e(y).each(function(){var n=e(this).find(z);n.length?n.each(function(){Rn(e(this))}):Rn(e(this))}),Oe()}function Le(){St.find('iframe[src*="youtube.com/embed/"]').each(function(){Ee(e(this),"enablejsapi=1")})}function Ee(e,n){var t=e.attr("src");e.attr("src",t+Me(t)+n)}function Me(e){return/\?/.test(e)?"&":"?"}function Oe(){var n=e(b);n.addClass(g),l.scrollOverflowHandler.afterRender&&l.scrollOverflowHandler.afterRender(n),en(n),nn(n),l.scrollOverflowHandler.afterLoad(),Ae()&&e.isFunction(l.afterLoad)&&l.afterLoad.call(n,n.data("anchor"),n.index(y)+1),e.isFunction(l.afterRender)&&l.afterRender.call(St)}function Ae(){var e=n.location.hash.replace("#","").split("/"),t=Dn(decodeURIComponent(e[0]));return!t.length||t.length&&t.index()===vt.index()}function Re(){var n;if(!l.autoScrolling||l.scrollBar){var o=ne.scrollTop(),i=ze(o),a=0,r=o+ne.height()/2,s=dt.height()-ne.height()===o,c=t.querySelectorAll(y);if(s)a=c.length-1;else if(o)for(var d=0;d<c.length;++d){var f=c[d];f.offsetTop<=r&&(a=d)}else a=0;if(Be(i)&&(e(b).hasClass(g)||e(b).addClass(g).siblings().removeClass(g)),n=e(c).eq(a),!n.hasClass(p)){zt=!0;var u,h,v=e(b),m=v.index(y)+1,w=On(n),S=n.data("anchor"),x=n.index(y)+1,C=n.find(D);C.length&&(h=C.data("anchor"),u=C.index()),Ct&&(n.addClass(p).siblings().removeClass(p),e.isFunction(l.onLeave)&&l.onLeave.call(v,m,x,w),e.isFunction(l.afterLoad)&&l.afterLoad.call(n,S,x),on(v),en(n),nn(n),Mn(S,x-1),l.anchors.length&&(ut=S),Wn(u,h,S,x)),clearTimeout(Mt),Mt=setTimeout(function(){zt=!1},100)}l.fitToSection&&(clearTimeout(Ot),Ot=setTimeout(function(){l.fitToSection&&He()},l.fitToSectionDelay))}}function He(){Ct&&(bt=!0,Ke(e(b)),bt=!1)}function Be(n){var t=e(b).position().top,o=t+ne.height();return"up"==n?o>=ne.scrollTop()+ne.height():t<=ne.scrollTop()}function ze(e){var n=e>Dt?"down":"up";return Dt=e,Ut=e,n}function De(e,n){if(kt.m[e]){var t="down"===e?"bottom":"top",o="down"===e?ce:se;if(n.length>0){if(!l.scrollOverflowHandler.isScrolled(t,n))return!0;o()}else o()}}function Pe(e){var n=e.originalEvent;!Fe(e.target)&&l.autoScrolling&&Ve(n)&&e.preventDefault()}function qe(n){var t=n.originalEvent,i=e(t.target).closest(y);if(!Fe(n.target)&&Ve(t)){l.autoScrolling&&n.preventDefault();var a=l.scrollOverflowHandler.scrollable(i),r=_n(t);Ft=r.y,Vt=r.x,i.find(q).length&&o.abs(qt-Vt)>o.abs(Pt-Ft)?!gt&&o.abs(qt-Vt)>ne.outerWidth()/100*l.touchSensitivity&&(qt>Vt?kt.m.right&&ue(i):kt.m.left&&he(i)):l.autoScrolling&&Ct&&o.abs(Pt-Ft)>ne.height()/100*l.touchSensitivity&&(Pt>Ft?De("down",a):Ft>Pt&&De("up",a))}}function Fe(n,t){t=t||0;var o=e(n).parent();return t<l.normalScrollElementTouchThreshold&&o.is(l.normalScrollElements)?!0:t==l.normalScrollElementTouchThreshold?!1:Fe(o,++t)}function Ve(e){return"undefined"==typeof e.pointerType||"mouse"!=e.pointerType}function We(e){var n=e.originalEvent;if(l.fitToSection&&ct.stop(),Ve(n)){var t=_n(n);Pt=t.y,qt=t.x}}function Ue(e,n){for(var t=0,i=e.slice(o.max(e.length-n,1)),a=0;a<i.length;a++)t+=i[a];return o.ceil(t/n)}function Ye(t){var i=(new Date).getTime(),a=e(m).hasClass(L);if(l.autoScrolling&&!pt&&!a){t=t||n.event;var r=t.wheelDelta||-t.deltaY||-t.detail,s=o.max(-1,o.min(1,r)),c="undefined"!=typeof t.wheelDeltaX||"undefined"!=typeof t.deltaX,d=o.abs(t.wheelDeltaX)<o.abs(t.wheelDelta)||o.abs(t.deltaX)<o.abs(t.deltaY)||!c;Tt.length>149&&Tt.shift(),Tt.push(o.abs(r)),l.scrollBar&&(t.preventDefault?t.preventDefault():t.returnValue=!1);var f=e(b),u=l.scrollOverflowHandler.scrollable(f),h=i-Wt;if(Wt=i,h>200&&(Tt=[]),Ct){var p=Ue(Tt,10),v=Ue(Tt,70),g=p>=v;g&&d&&(0>s?De("down",u):De("up",u))}return!1}l.fitToSection&&ct.stop()}function je(n,t){var o="undefined"==typeof t?e(b):t,i=o.find(q),a=i.find(z).length;if(!(!i.length||gt||2>a)){var r=i.find(D),s=null;if(s="left"===n?r.prev(z):r.next(z),!s.length){if(!l.loopHorizontal)return;s="left"===n?r.siblings(":last"):r.siblings(":first")}gt=!0,Sn(i,s,n)}}function Ne(){e(D).each(function(){et(e(this),"internal")})}function Xe(e){var n=e.position(),t=n.top,o=n.top>Ut,i=t-yt+e.outerHeight(),a=l.bigSectionsDestination;return e.outerHeight()>yt?(!o&&!a||"bottom"===a)&&(t=i):(o||bt&&e.is(":last-child"))&&(t=i),Ut=t,t}function Ke(n,t,o){if("undefined"!=typeof n){var i,a,r=Xe(n),s={element:n,callback:t,isMovementUp:o,dtop:r,yMovement:On(n),anchorLink:n.data("anchor"),sectionIndex:n.index(y),activeSlide:n.find(D),activeSection:e(b),leavingSection:e(b).index(y)+1,localIsResizing:bt};s.activeSection.is(n)&&!bt||l.scrollBar&&ne.scrollTop()===s.dtop&&!n.hasClass(I)||(s.activeSlide.length&&(i=s.activeSlide.data("anchor"),a=s.activeSlide.index()),l.autoScrolling&&l.continuousVertical&&"undefined"!=typeof s.isMovementUp&&(!s.isMovementUp&&"up"==s.yMovement||s.isMovementUp&&"down"==s.yMovement)&&(s=Je(s)),(!e.isFunction(l.onLeave)||s.localIsResizing||l.onLeave.call(s.activeSection,s.leavingSection,s.sectionIndex+1,s.yMovement)!==!1)&&(s.localIsResizing||on(s.activeSection),l.scrollOverflowHandler.beforeLeave(),n.addClass(p).siblings().removeClass(p),en(n),l.scrollOverflowHandler.onLeave(),Ct=!1,Wn(a,i,s.anchorLink,s.sectionIndex),Qe(s),ut=s.anchorLink,Mn(s.anchorLink,s.sectionIndex)))}}function Qe(n){if(l.css3&&l.autoScrolling&&!l.scrollBar){var t="translate3d(0px, -"+o.round(n.dtop)+"px, 0px)";zn(t,!0),l.scrollingSpeed?(clearTimeout(Lt),Lt=setTimeout(function(){$e(n)},l.scrollingSpeed)):$e(n)}else{var i=Ge(n);e(i.element).animate(i.options,l.scrollingSpeed,l.easing).promise().done(function(){l.scrollBar?setTimeout(function(){$e(n)},30):$e(n)})}}function Ge(e){var n={};return l.autoScrolling&&!l.scrollBar?(n.options={top:-e.dtop},n.element=r):(n.options={scrollTop:e.dtop},n.element="html, body"),n}function Je(n){return n.isMovementUp?e(b).before(n.activeSection.nextAll(y)):e(b).after(n.activeSection.prevAll(y).get().reverse()),nt(e(b).position().top),Ne(),n.wrapAroundElements=n.activeSection,n.dtop=n.element.position().top,n.yMovement=On(n.element),n}function Ze(n){n.wrapAroundElements&&n.wrapAroundElements.length&&(n.isMovementUp?e(x).before(n.wrapAroundElements):e(C).after(n.wrapAroundElements),nt(e(b).position().top),Ne())}function $e(n){Ze(n),e.isFunction(l.afterLoad)&&!n.localIsResizing&&l.afterLoad.call(n.element,n.anchorLink,n.sectionIndex+1),l.scrollOverflowHandler.afterLoad(),n.localIsResizing||nn(n.element),n.element.addClass(g).siblings().removeClass(g),Ct=!0,e.isFunction(n.callback)&&n.callback.call(this)}function _e(e,n){e.attr(n,e.data(n)).removeAttr("data-"+n)}function en(n){if(l.lazyLoading){var t,o=an(n);o.find("img[data-src], img[data-srcset], source[data-src], audio[data-src], iframe[data-src]").each(function(){t=e(this),e.each(["src","srcset"],function(e,n){var o=t.attr("data-"+n);"undefined"!=typeof o&&o&&_e(t,n)}),t.is("source")&&t.closest("video").get(0).load()})}}function nn(n){var t=an(n);t.find("video, audio").each(function(){var n=e(this).get(0);n.hasAttribute("data-autoplay")&&"function"==typeof n.play&&n.play()}),t.find('iframe[src*="youtube.com/embed/"]').each(function(){var n=e(this).get(0);n.hasAttribute("data-autoplay")&&tn(n),n.onload=function(){n.hasAttribute("data-autoplay")&&tn(n)}})}function tn(e){e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*")}function on(n){var t=an(n);t.find("video, audio").each(function(){var n=e(this).get(0);n.hasAttribute("data-keepplaying")||"function"!=typeof n.pause||n.pause()}),t.find('iframe[src*="youtube.com/embed/"]').each(function(){var n=e(this).get(0);/youtube\.com\/embed\//.test(e(this).attr("src"))&&!n.hasAttribute("data-keepplaying")&&e(this).get(0).contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*")})}function an(n){var t=n.find(D);return t.length&&(n=e(t)),n}function rn(){var e=n.location.hash.replace("#","").split("/"),t=decodeURIComponent(e[0]),o=decodeURIComponent(e[1]);t&&(l.animateAnchor?qn(t,o):de(t,o))}function ln(){if(!zt&&!l.lockAnchors){var e=n.location.hash.replace("#","").split("/"),t=decodeURIComponent(e[0]),o=decodeURIComponent(e[1]),i="undefined"==typeof ut,a="undefined"==typeof ut&&"undefined"==typeof o&&!gt;t.length&&(t&&t!==ut&&!i||a||!gt&&ht!=o)&&qn(t,o)}}function sn(n){clearTimeout(At);var t=e(":focus");if(!t.is("textarea")&&!t.is("input")&&!t.is("select")&&"true"!==t.attr("contentEditable")&&""!==t.attr("contentEditable")&&l.keyboardScrolling&&l.autoScrolling){var o=n.which,i=[40,38,32,33,34];e.inArray(o,i)>-1&&n.preventDefault(),pt=n.ctrlKey,At=setTimeout(function(){mn(n)},150)}}function cn(){e(this).prev().trigger("click")}function dn(e){xt&&(pt=e.ctrlKey)}function fn(e){2==e.which&&(Yt=e.pageY,St.on("mousemove",wn))}function un(e){2==e.which&&St.off("mousemove")}function hn(){var n=e(this).closest(y);e(this).hasClass(K)?kt.m.left&&he(n):kt.m.right&&ue(n)}function pn(){xt=!1,pt=!1}function vn(n){n.preventDefault();var t=e(this).parent().index();Ke(e(y).eq(t))}function gn(n){n.preventDefault();var t=e(this).closest(y).find(q),o=t.find(z).eq(e(this).closest("li").index());Sn(t,o)}function mn(n){var t=n.shiftKey;if(Ct||!([37,39].indexOf(n.which)<0))switch(n.which){case 38:case 33:kt.k.up&&se();break;case 32:if(t&&kt.k.up){se();break}case 40:case 34:kt.k.down&&ce();break;case 36:kt.k.up&&fe(1);break;case 35:kt.k.down&&fe(e(y).length);break;case 37:kt.k.left&&he();break;case 39:kt.k.right&&ue();break;default:return}}function wn(e){Ct&&(e.pageY<Yt&&kt.m.up?se():e.pageY>Yt&&kt.m.down&&ce()),Yt=e.pageY}function Sn(n,t,o){var i=n.closest(y),a={slides:n,destiny:t,direction:o,destinyPos:t.position(),slideIndex:t.index(),section:i,sectionIndex:i.index(y),anchorLink:i.data("anchor"),slidesNav:i.find(Y),slideAnchor:Yn(t),prevSlide:i.find(D),prevSlideIndex:i.find(D).index(),localIsResizing:bt};return a.xMovement=An(a.prevSlideIndex,a.slideIndex),a.localIsResizing||(Ct=!1),l.onSlideLeave&&!a.localIsResizing&&"none"!==a.xMovement&&e.isFunction(l.onSlideLeave)&&l.onSlideLeave.call(a.prevSlide,a.anchorLink,a.sectionIndex+1,a.prevSlideIndex,a.xMovement,a.slideIndex)===!1?void(gt=!1):(t.addClass(p).siblings().removeClass(p),a.localIsResizing||(on(a.prevSlide),en(t)),!l.loopHorizontal&&l.controlArrows&&(i.find(J).toggle(0!==a.slideIndex),i.find(ee).toggle(!t.is(":last-child"))),i.hasClass(p)&&!a.localIsResizing&&Wn(a.slideIndex,a.slideAnchor,a.anchorLink,a.sectionIndex),void bn(n,a,!0))}function yn(n){xn(n.slidesNav,n.slideIndex),n.localIsResizing||(e.isFunction(l.afterSlideLoad)&&l.afterSlideLoad.call(n.destiny,n.anchorLink,n.sectionIndex+1,n.slideAnchor,n.slideIndex),Ct=!0,nn(n.destiny)),gt=!1}function bn(e,n,t){var i=n.destinyPos;if(l.css3){var a="translate3d(-"+o.round(i.left)+"px, 0px, 0px)";kn(e.find(V)).css(tt(a)),Et=setTimeout(function(){t&&yn(n)},l.scrollingSpeed,l.easing)}else e.animate({scrollLeft:o.round(i.left)},l.scrollingSpeed,l.easing,function(){t&&yn(n)})}function xn(e,n){e.find(v).removeClass(p),e.find("li").eq(n).find("a").addClass(p)}function Cn(){if(Tn(),mt){var n=e(t.activeElement);if(!n.is("textarea")&&!n.is("input")&&!n.is("select")){var i=ne.height();o.abs(i-jt)>20*o.max(jt,i)/100&&(pe(!0),jt=i)}}else clearTimeout(It),It=setTimeout(function(){pe(!0)},350)}function Tn(){var e=l.responsive||l.responsiveWidth,n=l.responsiveHeight,t=e&&ne.outerWidth()<e,o=n&&ne.height()<n;e&&n?ve(t||o):e?ve(t):n&&ve(o)}function kn(e){var n="all "+l.scrollingSpeed+"ms "+l.easingcss3;return e.removeClass(d),e.css({"-webkit-transition":n,transition:n})}function In(e){return e.addClass(d)}function Ln(n,t){l.navigation&&(e(M).find(v).removeClass(p),n?e(M).find('a[href="#'+n+'"]').addClass(p):e(M).find("li").eq(t).find("a").addClass(p))}function En(n){l.menu&&(e(l.menu).find(v).removeClass(p),e(l.menu).find('[data-menuanchor="'+n+'"]').addClass(p))}function Mn(e,n){En(e),Ln(e,n)}function On(n){var t=e(b).index(y),o=n.index(y);return t==o?"none":t>o?"up":"down"}function An(e,n){return e==n?"none":e>n?"left":"right"}function Rn(e){if(!e.hasClass("fp-noscroll")){e.css("overflow","hidden");var n,t=l.scrollOverflowHandler,o=t.wrapContent(),i=e.closest(y),a=t.scrollable(e);a.length?n=t.scrollHeight(e):(n=e.get(0).scrollHeight,l.verticalCentered&&(n=e.find(k).get(0).scrollHeight));var r=yt-parseInt(i.css("padding-bottom"))-parseInt(i.css("padding-top"));n>r?a.length?t.update(e,r):(l.verticalCentered?e.find(k).wrapInner(o):e.wrapInner(o),t.create(e,r)):t.remove(e),e.css("overflow","")}}function Hn(e){e.hasClass(W)||e.addClass(W).wrapInner('<div class="'+T+'" style="height:'+Bn(e)+'px;" />')}function Bn(e){var n=yt;if(l.paddingTop||l.paddingBottom){var t=e;t.hasClass(S)||(t=e.closest(y));var o=parseInt(t.css("padding-top"))+parseInt(t.css("padding-bottom"));n=yt-o}return n}function zn(e,n){n?kn(St):In(St),St.css(tt(e)),setTimeout(function(){St.removeClass(d)},10)}function Dn(n){if(!n)return[];var t=St.find(y+'[data-anchor="'+n+'"]');return t.length||(t=e(y).eq(n-1)),t}function Pn(e,n){var t=n.find(q),o=t.find(z+'[data-anchor="'+e+'"]');return o.length||(o=t.find(z).eq(e)),o}function qn(e,n){var t=Dn(e);t.length&&("undefined"==typeof n&&(n=0),e===ut||t.hasClass(p)?Fn(t,n):Ke(t,function(){Fn(t,n)}))}function Fn(e,n){if("undefined"!=typeof n){var t=e.find(q),o=Pn(n,e);o.length&&Sn(t,o)}}function Vn(e,n){e.append('<div class="'+U+'"><ul></ul></div>');var t=e.find(Y);t.addClass(l.slidesNavPosition);for(var o=0;n>o;o++)t.find("ul").append('<li><a href="#"><span></span></a></li>');t.css("margin-left","-"+t.width()/2+"px"),t.find("li").first().find("a").addClass(p)}function Wn(e,n,t,o){var i="";l.anchors.length&&!l.lockAnchors&&(e?("undefined"!=typeof t&&(i=t),"undefined"==typeof n&&(n=e),ht=n,Un(i+"/"+n)):"undefined"!=typeof e?(ht=n,Un(t)):Un(t)),jn()}function Un(e){if(l.recordHistory)location.hash=e;else if(mt||wt)n.history.replaceState(i,i,"#"+e);else{var t=n.location.href.split("#")[0];n.location.replace(t+"#"+e)}}function Yn(e){var n=e.data("anchor"),t=e.index();return"undefined"==typeof n&&(n=t),n}function jn(){var n=e(b),t=n.find(D),o=Yn(n),i=Yn(t),a=String(o);t.length&&(a=a+"-"+i),a=a.replace("/","-").replace("#","");var r=new RegExp("\\b\\s?"+h+"-[^\\s]+\\b","g");dt[0].className=dt[0].className.replace(r,""),dt.addClass(h+"-"+a)}function Nn(){var e,o=t.createElement("p"),a={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};t.body.insertBefore(o,null);for(var r in a)o.style[r]!==i&&(o.style[r]="translate3d(1px,1px,1px)",e=n.getComputedStyle(o).getPropertyValue(a[r]));return t.body.removeChild(o),e!==i&&e.length>0&&"none"!==e}function Xn(){t.addEventListener?(t.removeEventListener("mousewheel",Ye,!1),t.removeEventListener("wheel",Ye,!1),t.removeEventListener("MozMousePixelScroll",Ye,!1)):t.detachEvent("onmousewheel",Ye)}function Kn(){var e,o="";n.addEventListener?e="addEventListener":(e="attachEvent",o="on");var a="onwheel"in t.createElement("div")?"wheel":t.onmousewheel!==i?"mousewheel":"DOMMouseScroll";"DOMMouseScroll"==a?t[e](o+"MozMousePixelScroll",Ye,!1):t[e](o+a,Ye,!1)}function Qn(){St.on("mousedown",fn).on("mouseup",un)}function Gn(){St.off("mousedown",fn).off("mouseup",un)}function Jn(){(mt||wt)&&(l.autoScrolling&&dt.off(Ht.touchmove).on(Ht.touchmove,Pe),e(r).off(Ht.touchstart).on(Ht.touchstart,We).off(Ht.touchmove).on(Ht.touchmove,qe))}function Zn(){(mt||wt)&&e(r).off(Ht.touchstart).off(Ht.touchmove)}function $n(){var e;return e=n.PointerEvent?{down:"pointerdown",move:"pointermove"}:{down:"MSPointerDown",move:"MSPointerMove"}}function _n(e){var n=[];return n.y="undefined"!=typeof e.pageY&&(e.pageY||e.pageX)?e.pageY:e.touches[0].pageY,n.x="undefined"!=typeof e.pageX&&(e.pageY||e.pageX)?e.pageX:e.touches[0].pageX,wt&&Ve(e)&&l.scrollBar&&(n.y=e.touches[0].pageY,n.x=e.touches[0].pageX),n}function et(e,n){Q(0,"internal"),"undefined"!=typeof n&&(bt=!0),Sn(e.closest(q),e),"undefined"!=typeof n&&(bt=!1),Q(Bt.scrollingSpeed,"internal")}function nt(e){var n=o.round(e);if(l.css3&&l.autoScrolling&&!l.scrollBar){var t="translate3d(0px, -"+n+"px, 0px)";zn(t,!1)}else l.autoScrolling&&!l.scrollBar?St.css("top",-n):ct.scrollTop(n)}function tt(e){return{"-webkit-transform":e,"-moz-transform":e,"-ms-transform":e,transform:e}}function ot(e,n,t){switch(n){case"up":kt[t].up=e;break;case"down":kt[t].down=e;break;case"left":kt[t].left=e;break;case"right":kt[t].right=e;break;case"all":"m"==t?re(e):le(e)}}function it(n){s(!1,"internal"),re(!1),le(!1),St.addClass(f),clearTimeout(Et),clearTimeout(Lt),clearTimeout(It),clearTimeout(Mt),clearTimeout(Ot),ne.off("scroll",Re).off("hashchange",ln).off("resize",Cn),te.off("click touchstart",M+" a").off("mouseenter",M+" li").off("mouseleave",M+" li").off("click touchstart",j).off("mouseover",l.normalScrollElements).off("mouseout",l.normalScrollElements),e(y).off("click touchstart",X),clearTimeout(Et),clearTimeout(Lt),n&&at()}function at(){nt(0),St.find("img[data-src], source[data-src], audio[data-src], iframe[data-src]").each(function(){_e(e(this),"src")}),St.find("img[data-srcset]").each(function(){_e(e(this),"srcset")}),e(M+", "+Y+", "+X).remove(),e(y).css({height:"","background-color":"",padding:""}),e(z).css({width:""}),St.css({height:"",position:"","-ms-touch-action":"","touch-action":""}),ct.css({overflow:"",height:""}),e("html").removeClass(u),dt.removeClass(c),e.each(dt.get(0).className.split(/\s+/),function(e,n){0===n.indexOf(h)&&dt.removeClass(n)}),e(y+", "+z).each(function(){l.scrollOverflowHandler.remove(e(this)),e(this).removeClass(W+" "+p)}),In(St),St.find(k+", "+V+", "+q).each(function(){e(this).replaceWith(this.childNodes)}),St.css({"-webkit-transition":"none",transition:"none"}),ct.scrollTop(0);var n=[S,B,F];e.each(n,function(n,t){e("."+t).removeClass(t)})}function rt(e,n,t){l[e]=n,"internal"!==t&&(Bt[e]=n)}function lt(){var n=["fadingEffect","continuousHorizontal","scrollHorizontally","interlockedSlides","resetSliders","responsiveSlides","offsetSections","dragAndMove","scrollOverflowReset","parallax"];return e("html").hasClass(u)?void st("error","Fullpage.js can only be initialized once and you are doing it multiple times!"):(l.continuousVertical&&(l.loopTop||l.loopBottom)&&(l.continuousVertical=!1,st("warn","Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),l.scrollBar&&l.scrollOverflow&&st("warn","Option `scrollBar` is mutually exclusive with `scrollOverflow`. Sections with scrollOverflow might not work well in Firefox"),!l.continuousVertical||!l.scrollBar&&l.autoScrolling||(l.continuousVertical=!1,st("warn","Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),e.each(n,function(e,n){l[n]&&st("warn","fullpage.js extensions require jquery.fullpage.extensions.min.js file instead of the usual jquery.fullpage.js. Requested: "+n)}),void e.each(l.anchors,function(n,t){var o=te.find("[name]").filter(function(){return e(this).attr("name")&&e(this).attr("name").toLowerCase()==t.toLowerCase()}),i=te.find("[id]").filter(function(){return e(this).attr("id")&&e(this).attr("id").toLowerCase()==t.toLowerCase()});(i.length||o.length)&&(st("error","data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE)."),i.length&&st("error",'"'+t+'" is is being used by another element `id` property'),o.length&&st("error",'"'+t+'" is is being used by another element `name` property'))}))}function st(e,n){console&&console[e]&&console[e]("fullPage: "+n)}if(e("html").hasClass(u))return void lt();var ct=e("html, body"),dt=e("body"),ft=e.fn.fullpage;l=e.extend({menu:!1,anchors:[],lockAnchors:!1,navigation:!1,navigationPosition:"right",navigationTooltips:[],showActiveTooltip:!1,slidesNavigation:!1,slidesNavPosition:"bottom",scrollBar:!1,hybrid:!1,css3:!0,scrollingSpeed:700,autoScrolling:!0,fitToSection:!0,fitToSectionDelay:1e3,easing:"easeInOutCubic",easingcss3:"ease",loopBottom:!1,loopTop:!1,loopHorizontal:!0,continuousVertical:!1,continuousHorizontal:!1,scrollHorizontally:!1,interlockedSlides:!1,dragAndMove:!1,offsetSections:!1,resetSliders:!1,fadingEffect:!1,normalScrollElements:null,scrollOverflow:!1,scrollOverflowReset:!1,scrollOverflowHandler:ie,scrollOverflowOptions:null,touchSensitivity:5,normalScrollElementTouchThreshold:5,bigSectionsDestination:null,keyboardScrolling:!0,animateAnchor:!0,recordHistory:!0,controlArrows:!0,controlArrowColor:"#fff",verticalCentered:!0,sectionsColor:[],paddingTop:0,paddingBottom:0,fixedElements:null,responsive:0,responsiveWidth:0,responsiveHeight:0,responsiveSlides:!1,parallax:!1,parallaxOptions:{type:"reveal",percentage:62,property:"translate"},sectionSelector:w,slideSelector:H,afterLoad:null,onLeave:null,afterRender:null,afterResize:null,afterReBuild:null,afterSlideLoad:null,onSlideLeave:null,afterResponsive:null,lazyLoading:!0},l);var ut,ht,pt,vt,gt=!1,mt=navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),wt="ontouchstart"in n||navigator.msMaxTouchPoints>0||navigator.maxTouchPoints,St=e(this),yt=ne.height(),bt=!1,xt=!0,Ct=!0,Tt=[],kt={};kt.m={up:!0,down:!0,left:!0,right:!0},kt.k=e.extend(!0,{},kt.m);var It,Lt,Et,Mt,Ot,At,Rt=$n(),Ht={touchmove:"ontouchmove"in n?"touchmove":Rt.move,touchstart:"ontouchstart"in n?"touchstart":Rt.down},Bt=e.extend(!0,{},l);lt(),oe.click=wt,oe=e.extend(oe,l.scrollOverflowOptions),e.extend(e.easing,{easeInOutCubic:function(e,n,t,o,i){return(n/=i/2)<1?o/2*n*n*n+t:o/2*((n-=2)*n*n+2)+t}}),e(this).length&&(ft.setAutoScrolling=s,ft.setRecordHistory=N,ft.setScrollingSpeed=Q,ft.setFitToSection=Z,ft.setLockAnchors=$,ft.setMouseWheelScrolling=ae,ft.setAllowScrolling=re,ft.setKeyboardScrolling=le,ft.moveSectionUp=se,ft.moveSectionDown=ce,ft.silentMoveTo=de,ft.moveTo=fe,ft.moveSlideRight=ue,ft.moveSlideLeft=he,ft.fitToSection=He,ft.reBuild=pe,ft.setResponsive=ve,ft.destroy=it,ge(),me());var zt=!1,Dt=0,Pt=0,qt=0,Ft=0,Vt=0,Wt=(new Date).getTime(),Ut=0,Yt=0,jt=yt},"undefined"!=typeof IScroll&&(IScroll.prototype.wheelOn=function(){this.wrapper.addEventListener("wheel",this),this.wrapper.addEventListener("mousewheel",this),this.wrapper.addEventListener("DOMMouseScroll",this)},IScroll.prototype.wheelOff=function(){this.wrapper.removeEventListener("wheel",this),this.wrapper.removeEventListener("mousewheel",this),this.wrapper.removeEventListener("DOMMouseScroll",this)});var ie={refreshId:null,iScrollInstances:[],toggleWheel:function(n){var t=e(b).find(s);t.each(function(){var t=e(this).data("iscrollInstance");"undefined"!=typeof t&&t&&(n?t.wheelOn():t.wheelOff())})},onLeave:function(){ie.toggleWheel(!1)},beforeLeave:function(){ie.onLeave()},afterLoad:function(){ie.toggleWheel(!0)},create:function(n,t){var o=n.find(s);o.height(t),o.each(function(){var n=e(this),t=n.data("iscrollInstance");t&&e.each(ie.iScrollInstances,function(){e(this).destroy()}),t=new IScroll(n.get(0),oe),ie.iScrollInstances.push(t),t.wheelOff(),n.data("iscrollInstance",t)})},isScrolled:function(e,n){var t=n.data("iscrollInstance");return t?"top"===e?t.y>=0&&!n.scrollTop():"bottom"===e?0-t.y+n.scrollTop()+1+n.innerHeight()>=n[0].scrollHeight:void 0:!0},scrollable:function(e){return e.find(q).length?e.find(D).find(s):e.find(s)},scrollHeight:function(e){return e.find(s).children().first().get(0).scrollHeight},remove:function(e){var n=e.find(s);if(n.length){var t=n.data("iscrollInstance");t.destroy(),n.data("iscrollInstance",null)}e.find(s).children().first().children().first().unwrap().unwrap()},update:function(n,t){clearTimeout(ie.refreshId),ie.refreshId=setTimeout(function(){e.each(ie.iScrollInstances,function(){e(this).get(0).refresh()})},150),n.find(s).css("height",t+"px").parent().css("height",t+"px")},wrapContent:function(){return'<div class="'+l+'"><div class="fp-scroller"></div></div>'}}});
//# sourceMappingURL=jquery.fullpage.min.js.map
anation .asset-video .mediaplayer-download.mediaplayer-download{padding:0 8px}.col-xs-12 .asset-audio .mediaplayer-download.mediaplayer-download a,.col-xs-12 .asset-video .mediaplayer-download.mediaplayer-download a,.detail .asset-audio .mediaplayer-download.mediaplayer-download a,.detail .asset-video .mediaplayer-download.mediaplayer-download a,.quiz-explanation .asset-audio .mediaplayer-download.mediaplayer-download a,.quiz-explanation .asset-video .mediaplayer-download.mediaplayer-download a{position:relative;padding-left:32px;border-bottom:none!important;font-size:var(--fs-xs);line-height:1.25rem;display:block}.col-xs-12 .asset-audio .mediaplayer-download.mediaplayer-download a:before,.col-xs-12 .asset-video .mediaplayer-download.mediaplayer-download a:before,.detail .asset-audio .mediaplayer-download.mediaplayer-download a:before,.detail .asset-video .mediaplayer-download.mediaplayer-download a:before,.quiz-explanation .asset-audio .mediaplayer-download.mediaplayer-download a:before,.quiz-explanation .asset-video .mediaplayer-download.mediaplayer-download a:before{content:url(/assets/images/swr/icons/download.svg);position:absolute;left:0;width:24px;opacity:.6;display:block;transition:opacity .4s linear}body[data-fractal=fractal] .col-xs-12 .asset-audio .mediaplayer-download.mediaplayer-download a:before,body[data-fractal=fractal] .col-xs-12 .asset-video .mediaplayer-download.mediaplayer-download a:before,body[data-fractal=fractal] .detail .asset-audio .mediaplayer-download.mediaplayer-download a:before,body[data-fractal=fractal] .detail .asset-video .mediaplayer-download.mediaplayer-download a:before,body[data-fractal=fractal] .quiz-explanation .asset-audio .mediaplayer-download.mediaplayer-download a:before,body[data-fractal=fractal] .quiz-explanation .asset-video .mediaplayer-download.mediaplayer-download a:before{content:url(../../assets/images/swr/icons/download.svg)}.col-xs-12 .asset-audio .mediaplayer-download.mediaplayer-download a:focus,.col-xs-12 .asset-audio .mediaplayer-download.mediaplayer-download a:hover,.col-xs-12 .asset-video .mediaplayer-download.mediaplayer-download a:focus,.col-xs-12 .asset-video .mediaplayer-download.mediaplayer-download a:hover,.detail .asset-audio .mediaplayer-download.mediaplayer-download a:focus,.detail .asset-audio .mediaplayer-download.mediaplayer-download a:hover,.detail .asset-video .mediaplayer-download.mediaplayer-download a:focus,.detail .asset-video .mediaplayer-download.mediaplayer-download a:hover,.quiz-explanation .asset-audio .mediaplayer-download.mediaplayer-download a:focus,.quiz-explanation .asset-audio .mediaplayer-download.mediaplayer-download a:hover,.quiz-explanation .asset-video .mediaplayer-download.mediaplayer-download a:focus,.quiz-explanation .asset-video .mediaplayer-download.mediaplayer-download a:hover{text-decoration:none;padding-bottom:0;outline:0;background-color:transparent}.col-xs-12 .asset-audio .mediaplayer-download.mediaplayer-download a:focus:before,.col-xs-12 .asset-audio .mediaplayer-download.mediaplayer-download a:hover:before,.col-xs-12 .asset-video .mediaplayer-download.mediaplayer-download a:focus:before,.col-xs-12 .asset-video .mediaplayer-download.mediaplayer-download a:hover:before,.detail .asset-audio .mediaplayer-download.mediaplayer-download a:focus:before,.detail .asset-audio .mediaplayer-download.mediaplayer-download a:hover:before,.detail .asset-video .mediaplayer-download.mediaplayer-download a:focus:before,.detail .asset-video .mediaplayer-download.mediaplayer-download a:hover:before,.quiz-explanation .asset-audio .mediaplayer-download.mediaplayer-download a:focus:before,.quiz-explanation .asset-audio .mediaplayer-download.mediaplayer-download a:hover:before,.quiz-explanation .asset-video .mediaplayer-download.mediaplayer-download a:focus:before,.quiz-explanation .asset-video .mediaplayer-download.mediaplayer-download a:hover:before{opacity:1}.col-xs-12 .asset-audio .mediaplayer-parentaladvice,.col-xs-12 .asset-video .mediaplayer-parentaladvice,.detail .asset-audio .mediaplayer-parentaladvice,.detail .asset-video .mediaplayer-parentaladvice,.quiz-explanation .asset-audio .mediaplayer-parentaladvice,.quiz-explanation .asset-video .mediaplayer-parentaladvice{font-size:var(--fs-xs);line-height:1.25rem;padding:0 8px}.col-xs-12 .asset-audio .audio-player+.mediaplayer-download,.col-xs-12 .asset-audio .audio-player+.mediaplayer-parentaladvice,.col-xs-12 .asset-audio .video-player+.mediaplayer-download,.col-xs-12 .asset-audio .video-player+.mediaplayer-parentaladvice,.col-xs-12 .asset-video .audio-player+.mediaplayer-download,.col-xs-12 .asset-video .audio-player+.mediaplayer-parentaladvice,.col-xs-12 .asset-video .video-player+.mediaplayer-download,.col-xs-12 .asset-video .video-player+.mediaplayer-parentaladvice,.detail .asset-audio .audio-player+.mediaplayer-download,.detail .asset-audio .audio-player+.mediaplayer-parentaladvice,.detail .asset-audio .video-player+.mediaplayer-download,.detail .asset-audio .video-player+.mediaplayer-parentaladvice,.detail .asset-video .audio-player+.mediaplayer-download,.detail .asset-video .audio-player+.mediaplayer-parentaladvice,.detail .asset-video .video-player+.mediaplayer-download,.detail .asset-video .video-player+.mediaplayer-parentaladvice,.quiz-explanation .asset-audio .audio-player+.mediaplayer-download,.quiz-explanation .asset-audio .audio-player+.mediaplayer-parentaladvice,.quiz-explanation .asset-audio .video-player+.mediaplayer-download,.quiz-explanation .asset-audio .video-player+.mediaplayer-parentaladvice,.quiz-explanation .asset-video .audio-player+.mediaplayer-download,.quiz-explanation .asset-video .audio-player+.mediaplayer-parentaladvice,.quiz-explanation .asset-video .video-player+.mediaplayer-download,.quiz-explanation .asset-video .video-player+.mediaplayer-parentaladvice{margin-top:16px}.detail-embeded{padding:0}.detail-embeded .asset-audio,.detail-embeded .asset-video{width:100%;margin:0!important}.detail-embeded .asset-video.video-16by9 .video-player,.detail-embeded .asset-video.video-1by1 .video-player{margin-bottom:0!important}.ardplayer-info-scroll-container,.ardplayer-info.ardplayer-info-responsive-full{height:calc(100% - 48px - 60px)}
</style>
<link media="print" type="text/css" rel="stylesheet" href="/assets/css/swr-print.min.css?13ae7a03781c11978dc7851af1360fb1"/>
<link type="text/css" rel="stylesheet" href="/assets/css/swr.min.css?a1f65c3078d102ed55a1ea36f59bcde7"/>
<link type="text/css" rel="stylesheet" href="/assets/css/swr-header.min.css?f9f849e8080061418342ac59accc7c63"/>

<link href="/assets/fonts/swr_type/SWR_VAR_WEB/SWR-VAR-Sans.woff2" as="font" crossorigin rel="preload">
<link href="/assets/fonts/swr_type/SWR_VAR_WEB/SWR-VAR-Text.woff2" as="font" crossorigin rel="preload">
<link href="/assets/css/swr-playerleiste.min.css?85eed1cf7f69960362863dfbbccd646f" as="style" media="screen" onload="this.onload=null;this.media=&#039;screen&#039;;this.rel=&#039;stylesheet&#039;" rel="preload">
<noscript>
<link href="/assets/css/swr-playerleiste.min.css?85eed1cf7f69960362863dfbbccd646f" rel="stylesheet" type="">
</noscript>
<link href="/assets/css/swr-social.min.css?65c4464e8cc4ce92fd3840bdd4b9da73" as="style" media="screen" onload="this.onload=null;this.media=&#039;screen&#039;;this.rel=&#039;stylesheet&#039;" rel="preload">
<noscript>
<link href="/assets/css/swr-social.min.css?65c4464e8cc4ce92fd3840bdd4b9da73" rel="stylesheet" type="">
</noscript>
<link href="/assets/css/swr-modal.min.css?196299cb39d75b5fca26fd9508534bc9" as="style" media="screen" onload="this.onload=null;this.media=&#039;screen&#039;;this.rel=&#039;stylesheet&#039;" rel="preload">
<noscript>
<link href="/assets/css/swr-modal.min.css?196299cb39d75b5fca26fd9508534bc9" rel="stylesheet" type="">
</noscript>
<link href="https://static.chartbeat.com" rel="preconnect">
<link href="https://ping.chartbeat.net" rel="preconnect">
<link href="https://logs1241.xiti.com" rel="preconnect">
<link href="/polyfill/v2/polyfill.min.js?flags=gated&amp;rum=false&amp;features=document,Array.prototype.forEach,Array.prototype.includes,CustomEvent,Navigator.prototype.geolocation,navigator.geolocation,HTMLPictureElement,IntersectionObserver,IntersectionObserverEntry,NodeList.prototype.forEach,Object.entries,Object.values,URL,default,es6,Element.prototype.scrollIntoView" as="script" type="text/javascript" rel="preload">
<link href="/assets/js/lazyload.min.js?fded0d9701bf4f76e7742858eaac91ac" as="script" type="text/javascript" rel="preload">
<link href="https://tag.aticdn.net/piano-analytics.js" as="script" type="text/javascript" rel="preload">
<link href="/assets/js/piano-swr.min.js?95f6b6809f625870dd5ec22f4d3a7247" as="script" type="text/javascript" rel="preload">
<link href="/assets/js/piano.min.js?29c2e71d9e367a451de560049616ba9e" as="script" type="text/javascript" rel="preload">
<link href="/assets/js/common.min.js?aa97e4bf3f38a37afd21ed7b52281cfa" as="script" type="text/javascript" rel="preload">
<link href="/assets/js/swr.min.js?1d71b0168400b701398057777199e258" as="script" type="text/javascript" rel="preload">
<link href="/assets/js/common-wom2021.min.js?f394556036ee42f6f35b57b691ff0380" as="script" type="text/javascript" rel="preload">

<script>
window.getOptOuts = function (){
var parts= ("; "+document.cookie).split("; tracking_optout=");
return 2 === parts.length ? parts.pop().split(";").shift() : ""
};
</script>
<!-- Chartbeat -->
<style>
.cb-it-hide {
visibility: hidden;
}
</style>
<script>
!function(){
// Add customization below
var headlineSelector = ".hgroup";
var articleBlockSelector = ".teaser header";
var timeout = 1000;
if(!("srcset"in document.createElement("img")))return;const e=window.chartbeatFlicker=window.chartbeatFlicker||{};function t(e,t,c,o){const n=document.createElement("style"),i=function(e,t){return e.split(",").reduce((e,c)=>e+c+`  { visibility: hidden; }\n`,"")}(c,o);n.id=t,e.appendChild(n),n.type="text/css",n.appendChild(document.createTextNode(i))}window._sf_async_config=window._sf_async_config||{},e.timeout=timeout||1e3,e.headlineSelector=headlineSelector||"h3, h2, h1",window._sf_async_config.articleBlockSelector=articleBlockSelector||"article, section";const c=window._sf_async_config.articleBlockSelector;e.timeoutFlag=!1,e.strategyFetched=e.strategyFetched||!1;const o=document.head||document.querySelector("head");t(o,"chartbeat-flicker-control-style-ht",c,e.headlineSelector),t(o,"chartbeat-flicker-control-style-it",c,"img"),document.addEventListener("DOMContentLoaded",()=>{if(e.timeoutFlag){const e=document.getElementById("chartbeat-flicker-control-style-it");return void(e&&e.parentNode.removeChild(e))}document.querySelectorAll(c).forEach(function(e){Array.prototype.slice.call(e.querySelectorAll("img")).forEach(function(e){e.getAttribute("pinger-seen")||e.classList.add("cb-it-hide")})});const t=document.getElementById("chartbeat-flicker-control-style-it");t&&t.parentNode.removeChild(t)}),window.setTimeout(function(){if(!e.strategyFetched){e.timeoutFlag=!0;const t=document.getElementById("chartbeat-flicker-control-style-ht");t&&t.parentNode.removeChild(t)}document.querySelectorAll(c).forEach(function(e){Array.prototype.slice.call(e.querySelectorAll("img")).forEach(function(e){"true"!==e.getAttribute("keep-hiding")&&e.classList.remove("cb-it-hide")})});const t=document.getElementById("chartbeat-flicker-control-style-it");t&&t.parentNode.removeChild(t)},e.timeout)
}();
</script>
<script>
(function(window) {
if ('undefined' === typeof window.getOptOuts || -1 !== window.getOptOuts().indexOf('chartbeat')) {
return;
}
var _sf_async_config = window._sf_async_config = (window._sf_async_config || {});
/** CONFIGURATION START **/
_sf_async_config.uid = 57320;
_sf_async_config.domain = 'swr.de';
_sf_async_config.useCanonical = true;
_sf_async_config.useCanonicalDomain = true;
_sf_async_config.topStorageDomain = 'swr.de';
_sf_async_config.sections = 'swraktuell,rheinland-pfalz,trier';
_sf_async_config.authors = 'SWR.de';
_sf_async_config.noCookies = false;
_sf_async_config.flickerControl = false;
/** CONFIGURATION END **/
function loadChartbeat() {
var e = document.createElement('script');
e.type = 'text/javascript';
e.async = true;
e.src = '//static.chartbeat.com/js/chartbeat.js';
(document.head || document.getElementsByTagName('head')[0]).appendChild(e);
}
loadChartbeat();
})(window);
</script>
<script async src="//static.chartbeat.com/js/chartbeat_mab.js"></script>
<script>
// piano config;
window._pac = window._pac || {};
window._pac.site = '487212';
window._pac.collectDomain = 'https://logs1241.xiti.com';
window._pac.tvrd = '2';
// piano queue;
window._paq = window._paq || [];
</script>

</head>
<body class="rubrik-swraktuell" data-menubox-filter-section="aktuell" data-stationid="swraktuell">
<div id="loader" class="loader-container" aria-hidden="true" role="progressbar" aria-valuemin="0" aria-valuetext="Lade Seite... " aria-valuemax="100">
<div class="loader"></div>
</div>
<div id="skippy" class="sr-only-focusable" data-nosnippet data-crawler="ignore">
<ul class="skiplinks">
<li><a href="#navigation" class="skiplink-text" title="Zur Navigation springen">zur Navigation</a></li>
<li><a href="#content" class="skiplink-text" title="Zum Inhalt springen">zum Inhalt</a></li>
<li><a href="#footer" class="skiplink-text" title="Zur Fußzeile springen">zur Fußzeile</a></li>
</ul>
</div>
<div id="content-wrapper">
<header id="header" role="banner" data-crawler="ignore">
<nav class="navbar navbar-default" id="header-main-navi">
<!-- ========== Toggle-Button  -->
<div class="container navbar-header" id="header-main-navi-header" data-nosnippet>
<button type="button" class="hamburger hamburger--squeeze" data-toggle="collapse"
data-target="#header-main-navi-nav"
aria-expanded="false">
<span class="hamburger-box">
<span class="hamburger-inner"></span>
</span>
<span class="hamburger-title">Menü</span>
</button>
<a href="/index.html" title="Regional und aktuell - Südwestrundfunk | SWR.de" class="navbar-brand" data-menubox-linksource="section">SWR</a>
<!--========= Meta-Navigation // NOTE: verschoben und .container entfernt -->
<div class="meta-navi" itemscope itemtype="https://schema.org/WebSite">
<link itemprop="url" href="http://www.swr.de">
<link itemprop="publisher" href="swr">
<div class="navbar-search-wrapper">
<div class="search-overlay">
<div class="form-wrapper">
<form class="navbar-left navbar-form navbar-search" role="search" action="https://www.swr.de/swraktuell/swraktuell-suche-100.html" method="get"  rel="nofollow" data-suggest-url="/search/suggest?token=">
<input type="hidden" class="form-control" name="swx_restriction" value="/swraktuell">
<div class="form-group">
<input type="text" name="swx_q" placeholder="Suche" aria-label="Suche" required autocomplete="off" maxlength="200" class="form-control" value="">
</div>
<button type="button" class="btn btn-delete-search" title="Eingabe lÃ¶schen"></button>
<button type="submit" class="btn btn-search"><span class="sr-only">Suchen</span></button>
</form>
<button class="search-button-animated" type="button">
<span class="search-icon-wrapper">
<span class="search-icon-inner"></span>
</span>
<span class="search-title">Abbrechen</span>
</button>
</div>
</div>
</div>

<ul class="nav navbar-nav navbar-right">
<li>
<button class="search-button-animated" type="button">
<span class="search-icon-wrapper">
<span class="search-icon-inner">
</span>
</span>
<span class="search-title">Suchen</span>
</button>
</li>
<li>
<a href="https://www.swr.de/wetter/wetter-liste-swr-100.html" class="weather">
Wetter
</a>
</li>
<li>
<a href="https://www.swr.de/verkehr/verkehr-122.html" class="verkehr">
Verkehr
</a>
</li>
</ul>
</div>
</div>
<!-- ========= Hauptnavigation zum Aufklappen  // NOTE: verschoben  -->
<div class="collapse navbar-collapse" id="header-main-navi-nav" data-menubox-source="header-main-navi-items" data-nosnippet>
<div id="header-main-navi-nav-inner">
<button type="button" class="btn navbar-toggle collapsed" data-toggle="collapse" data-target="#header-main-navi-nav"
aria-expanded="false">
<span class="icon icon-close" aria-hidden="true"></span>
Schließen
</button>
<div class="menubox empty" data-menubox-name="section" data-menubox-source-aliases="imswr,tvradio"></div>
<div class="menubox empty" data-menubox-name="imswr" data-menubox-title="Im SWR"></div>
<div class="menubox empty" data-menubox-name="tvradio" data-menubox-title="Video und Audio"></div>
<div class="menubox-source" id="header-main-navi-items">
<ul class="container nav navbar-nav">
<li  data-menuboxes="imswr,breadcrumbs" data-menubox-priority="0" data-menubox-filter-section="home" data-menubox-invisible-section="true" data-menubox-items-level="1">
<a href="https://www.swr.de/" data-menubox-header-name="SWR">SWR Home</a>
</li>
<li  data-menuboxes="imswr,footer,title,breadcrumbs" data-menubox-priority="1" data-menubox-filter-section="aktuell" data-menubox-items-level="2" data-menubox-items-level-section="3" data-menubox-title="SWR Aktuell">
<a href="/swraktuell/index.html" title="SWR Aktuell" data-menubox-item-name-section="Startseite">SWR Aktuell</a>
<ul class="navbar-nav">
<li  data-menuboxes="imswr,breadcrumbs" data-menubox-priority="2">
<a href="/swraktuell/baden-wuerttemberg/index.html" title="SWR Aktuell Baden-Württemberg">SWR Aktuell Baden-Württemberg</a>
<ul class="navbar-nav">
<li  data-menuboxes="imswr,breadcrumbs">
<a href="/swraktuell/baden-wuerttemberg/friedrichshafen/index.html" title="SWR Aktuell Studio Friedrichshafen">Friedrichshafen</a>
</li>
<li  data-menuboxes="imswr,breadcrumbs">
<a href="/swraktuell/baden-wuerttemberg/heilbronn/index.html" title="SWR Aktuell Studio Heilbronn">Heilbronn</a>
</li>
<li  data-menuboxes="imswr,breadcrumbs">
<a href="/swraktuell/baden-wuerttemberg/karlsruhe/index.html" title="SWR Aktuell Studio Karlsruhe">Karlsruhe</a>
</li>
<li  data-menuboxes="imswr,breadcrumbs">
<a href="/swraktuell/baden-wuerttemberg/mannheim/index.html" title="SWR Aktuell Studio Mannheim-Ludwigshafen">Mannheim</a>
</li>
<li  data-menuboxes="imswr,breadcrumbs">
<a href="/swraktuell/baden-wuerttemberg/stuttgart/index.html" title="SWR Aktuell Studio Stuttgart">Stuttgart</a>
</li>
<li  data-menuboxes="imswr,breadcrumbs">
<a href="/swraktuell/baden-wuerttemberg/suedbaden/index.html" title="SWR Aktuell Studio Südbaden">Südbaden</a>
</li>
<li  data-menuboxes="imswr,breadcrumbs">
<a href="/swraktuell/baden-wuerttemberg/tuebingen/index.html" title="SWR Aktuell Studio Tübingen">Tübingen</a>
</li>
<li  data-menuboxes="imswr,breadcrumbs">
<a href="/swraktuell/baden-wuerttemberg/ulm/index.html" title="SWR Aktuell Studio Ulm">Ulm</a>
</li>
</ul>
</li>
<li  data-menuboxes="imswr,breadcrumbs" data-menubox-priority="3">
<a href="/swraktuell/rheinland-pfalz/index.html" title="SWR Aktuell Rheinland-Pfalz">SWR Aktuell Rheinland-Pfalz</a>
<ul class="navbar-nav">
<li  data-menuboxes="imswr,breadcrumbs">
<a href="/swraktuell/rheinland-pfalz/kaiserslautern/index.html" title="SWR Aktuell Studio Kaiserslautern">Kaiserslautern</a>
</li>
<li  data-menuboxes="imswr,breadcrumbs">
<a href="/swraktuell/rheinland-pfalz/koblenz/index.html" title="SWR Aktuell Studio Koblenz">Koblenz</a>
</li>
<li  data-menuboxes="imswr,breadcrumbs">
<a href="/swraktuell/rheinland-pfalz/ludwigshafen/index.html" title="SWR Aktuell Studio Ludwigshafen">Ludwigshafen</a>
</li>
<li  data-menuboxes="imswr,breadcrumbs">
<a href="/swraktuell/rheinland-pfalz/mainz/index.html" title="SWR Aktuell Studio Mainz">Mainz</a>
</li>
<li  data-menuboxes="imswr,breadcrumbs">
<a href="/swraktuell/rheinland-pfalz/trier/index.html" title="SWR Aktuell Studio Trier">Trier</a>
</li>
</ul>
</li>
<li  data-menuboxes="imswr,breadcrumbs" data-menubox-filter-section="wahl" data-menubox-items-level="1" data-menubox-items-level-section="3" data-menubox-title="Wahlen" data-menubox-filter-aliases-section="aktuell" data-menubox-invisible-imswr="true">
<a href="/swraktuell/wahl/index.html" title="Wahlen im Südwesten - Bundestagswahlen 2021" data-menubox-item-name-section="Startseite Wahlen">Wahlen</a>
<ul class="navbar-nav">
<li  data-menuboxes="imswr,breadcrumbs" data-menubox-filter-section="wahl">
<a href="/swraktuell/wahl/bw/index.html" title="Wahlen in Baden-Württemberg">Wahlen in Baden-Württemberg</a>
</li>
<li  data-menuboxes="imswr,breadcrumbs" data-menubox-filter-section="wahl">
<a href="/swraktuell/wahl/rp/index.html" title="Wahlen in Rheinland-Pfalz">Wahlen in Rheinland-Pfalz</a>
</li>
</ul>
</li>
</ul>
</li>
<li  data-menuboxes="imswr,footer,title,breadcrumbs" data-menubox-priority="11" data-menubox-filter-section="swr2" data-menubox-items-level="1" data-menubox-items-level-section="3" data-menubox-title="SWR Kultur">
<a href="/swr2/index.html" title="SWR2 - Kultur neu entdecken" data-menubox-item-name-section="Startseite">SWR Kultur</a>
<ul class="navbar-nav">
<li  data-menuboxes="tvradio,breadcrumbs" data-menubox-filter-section="swr2" data-menubox-item-name-section="Radioprogramm">
<a href="/swr2/programm/index.html" title="SWR2 Radio – alle Informationen zum Kulturradio-Programm des SWR">SWR2</a>
</li>
<li  data-menuboxes="tvradio,breadcrumbs" data-menubox-filter-section="swr2">
<a href="/swr2/musik-klassik/index.html" title="SWR2 Klassik">Klassik</a>
</li>
<li  data-menuboxes="tvradio,breadcrumbs" data-menubox-filter-section="swr2">
<a href="/swr2/musik-jazz-und-pop/index.html" title="SWR2 Jazz &amp; Pop">Jazz &amp; Pop</a>
</li>
<li  data-menuboxes="tvradio,breadcrumbs" data-menubox-filter-section="swr2">
<a href="/swr2/literatur/index.html" title="SWR2 Literatur">Literatur</a>
</li>
<li  data-menuboxes="tvradio,breadcrumbs" data-menubox-filter-section="swr2">
<a href="/swr2/hoerspiel/index.html" title="SWR2 Hörspiel">Hörspiel</a>
</li>
<li  data-menuboxes="tvradio,breadcrumbs" data-menubox-filter-section="swr2">
<a href="/swr2/doku-und-feature/index.html" title="SWR2 Feature">Doku &amp; Feature</a>
</li>
<li  data-menuboxes="tvradio,breadcrumbs" data-menubox-filter-section="swr2">
<a href="/swr2/wissen/index.html" title="SWR2 Wissen">Wissen</a>
</li>
<li  data-menuboxes="tvradio,breadcrumbs" data-menubox-filter-section="swr2">
<a href="/swr2/film-und-serie/index.html" title="SWR2 Film und Serie">Film &amp; Serie</a>
</li>
<li  data-menuboxes="tvradio,breadcrumbs" data-menubox-filter-section="swr2">
<a href="/swr2/kunst-und-ausstellung/index.html" title="SWR2 Kunst &amp; Ausstellung">Kunst &amp; Ausstellung</a>
</li>
<li  data-menuboxes="tvradio,breadcrumbs" data-menubox-filter-section="swr2">
<a href="/swr2/buehne/index.html" title="SWR2 Bühne ">Bühne</a>
</li>
<li  data-menuboxes="tvradio,breadcrumbs" data-menubox-filter-section="swr2">
<a href="/swr2/leben-und-gesellschaft/index.html" title="SWR2 Leben &amp; Gesellschaft">Leben &amp; Gesellschaft</a>
</li>
<li  data-menuboxes="tvradio,breadcrumbs" data-menubox-filter-section="swr2">
<a href="/swr2/veranstaltungen/index.html" title="SWR2 Veranstaltungskalender ">Veranstaltungen</a>
</li>
</ul>
</li>
<li  data-menuboxes="imswr,footer,title,breadcrumbs" data-menubox-priority="4" data-menubox-filter-section="sport" data-menubox-items-level="1" data-menubox-items-level-section="2" data-menubox-title="SWR Sport">
<a href="/sport/index.html" title="SWR Sport" data-menubox-item-name-section="Startseite">SWR Sport</a>
<ul class="navbar-nav">
<li  data-menuboxes="imswr,title,breadcrumbs">
<a href="/sport/fussball/index.html" title="Fußball">Fußball</a>
</li>
<li  data-menuboxes="imswr,breadcrumbs">
<a href="/sport/mehr-sport/index.html" title="Übersicht - Mehr Sport">Mehr Sport</a>
</li>
<li  data-menuboxes="imswr,breadcrumbs">
<a href="/sport/media/index.html" title="Videos &amp; Audios">Videos &amp; Audios</a>
</li>
<li  data-menuboxes="imswr,breadcrumbs">
<a href="/sport/sendungen/index.html" title="Sendungen">Sendungen</a>
</li>
</ul>
</li>
<li  data-menuboxes="imswr,footer,title,breadcrumbs" data-menubox-priority="5" data-menubox-filter-section="wissen" data-menubox-items-level="1" data-menubox-items-level-section="2" data-menubox-title="SWR Wissen">
<a href="/wissen/index.html" title="SWR Wissen" data-menubox-item-name-section="Startseite">SWR Wissen</a>
<ul class="navbar-nav">
<li  data-menuboxes="imswr,breadcrumbs">
<a href="/wissen/rettet-die-insekten/index.html" title="Rettet die Insekten!">Rettet die Insekten!</a>
</li>
<li  data-menuboxes="imswr,breadcrumbs">
<a href="/wissen/zulaut/index.html" title="SWR-Themenschwerpunkt rund um Lärm - Hier ist es #zuLAUT!">zuLAUT</a>
</li>
<li  data-menuboxes="imswr,breadcrumbs">
<a href="/wissen/abgasalarm/index.html" title="Abgasalarm">Abgasalarm</a>
</li>
<li  data-menuboxes="imswr,breadcrumbs">
<a href="/wissen/apfelbluete/index.html" title="Hobbyforscher sammeln Klimadaten - Das große Blühen">Apfelblüte</a>
</li>
<li  data-menuboxes="imswr,breadcrumbs">
<a href="https://www.swr.de/blautopfvr/">BlautopfVR</a>
</li>
<li  data-menuboxes="imswr,breadcrumbs">
<a href="/wissen/1000-antworten/index.html" title="1000 Antworten">1000 Antworten</a>
</li>
<li  data-menuboxes="imswr,breadcrumbs">
<a href="/wissen/spuren-im-stein/index.html" title="Spuren im Stein">Spuren im Stein</a>
</li>
<li  data-menuboxes="imswr,breadcrumbs">
<a href="/wissen/odysso/index.html" title="SWR Odysso">odysso</a>
</li>
</ul>
</li>
<li  data-menuboxes="imswr,footer,title,breadcrumbs" data-menubox-priority="5" data-menubox-filter-section="heimat" data-menubox-items-level="1" data-menubox-items-level-section="2" data-menubox-title="SWR Heimat">
<a href="/heimat/index.html" title="SWR Heimat " data-menubox-item-name-section="Startseite">SWR Heimat</a>
<ul class="navbar-nav">
<li  data-menuboxes="imswr,breadcrumbs">
<a href="/heimat/videos/index.html" title="Alle Heimat Videos">Videos</a>
</li>
<li  data-menuboxes="imswr,breadcrumbs">
<a href="/heimat/deine-story/index.html" title="Erzähl uns Deine Story">Deine Story</a>
</li>
<li  data-menuboxes="imswr,breadcrumbs">
<a href="/heimat/team/index.html" title="Das Heimat-Team stellt sich vor">Team</a>
</li>
<li  data-menuboxes="imswr,breadcrumbs">
<a href="/heimat/was-ist-heimat/index.html" title="Was ist SWR Heimat? ">Was ist SWR Heimat?</a>
</li>
</ul>
</li>
<li  data-menuboxes="imswr,footer,title,breadcrumbs" data-menubox-filter-section="schlager" data-menubox-items-level="1" data-menubox-items-level-section="2" data-menubox-title="SWR Schlager">
<a href="/schlager/index.html" title="Mehr aus der Schlagerwelt - SWR Schlager" data-menubox-item-name-section="Startseite">SWR Schlager</a>
<ul class="navbar-nav">
<li  data-menuboxes="imswr,breadcrumbs">
<a href="/schlager/stories/index.html" title="Stories">Stories</a>
</li>
<li  data-menuboxes="imswr,breadcrumbs">
<a href="/schlager/videos/index.html" title="Videos">Videos</a>
</li>
</ul>
</li>
<li  data-menuboxes="imswr,footer-meta,mainNaviHeader,title,breadcrumbs" data-menubox-priority="17">
<a href="https://www.kindernetz.de/index.html" title="Startseite SWR Kindernetz">SWR Kindernetz</a>
</li>
<li  data-menuboxes="imswr,mainNaviHeader,title,breadcrumbs" data-menubox-priority="18" data-menubox-filter-section="planet-schule">
<a href="https://www.planet-schule.de/index.html" target="_blank" rel="noopener" title="planet schule">planet schule</a>
</li>
<li  data-menuboxes="imswr,footer,breadcrumbs" data-menubox-priority="7" data-menubox-filter-section="unternehmen" data-menubox-items-level="1" data-menubox-items-level-section="2" data-menubox-title="Der SWR">
<a href="/unternehmen/index.html" title="Der SWR" data-menubox-item-name-section="Startseite">Der SWR</a>
<ul class="navbar-nav">
<li  data-menuboxes="imswr,footer,breadcrumbs">
<a href="/unternehmen/organisation/index.html" title="Das ist der SWR">Organisation</a>
</li>
<li  data-menuboxes="imswr,footer,breadcrumbs">
<a href="/unternehmen/karriere/index.html" title="Karriere im SWR">Karriere</a>
</li>
<li  data-menuboxes="imswr,footer,breadcrumbs">
<a href="/unternehmen/kommunikation/index.html" title="SWR Kommunikation">Kommunikation</a>
</li>
<li  data-menuboxes="imswr,breadcrumbs" data-menubox-items-level="1">
<a href="/unternehmen/gniffkebloggt/index.html" title="Übersicht - Gniffke bloggt">Gniffke bloggt</a>
</li>
<li  data-menuboxes="imswr,breadcrumbs" data-menubox-items-level="1">
<a href="/unternehmen/virtuell/index.html" title="Innovation - SWR Virtuell - alle Informationen zum Projekt">Virtuell</a>
</li>
</ul>
</li>
<li  data-menuboxes="imswr,title,breadcrumbs" data-menubox-filter-section="sommerfestival" data-menubox-items-level="1" data-menubox-items-level-section="2" data-menubox-title="SWR Sommerfestival" data-menubox-invisible-imswr="true">
<a href="/sommerfestival/index.html" title="Stuttgart - SWR Sommerfestival 2024" data-menubox-item-name-section="Startseite">SWR Sommerfestival</a>
<ul class="navbar-nav">
<li  data-menuboxes="imswr,breadcrumbs">
<a href="/sommerfestival/stuttgart/index.html" title="17. bis 20. Mai - Stuttgart">Stuttgart</a>
</li>
<li  data-menuboxes="imswr,breadcrumbs">
<a href="/sommerfestival/rheinland-pfalz/index.html" title="2025 - SWR Sommerfestival in Rheinland-Pfalz">Ingelheim</a>
</li>
<li  data-menuboxes="imswr,breadcrumbs">
<a href="/sommerfestival/tickets/index.html" title="17. bis 20. Mai | Schlossplatz Stuttgart - Vorverkauf für das SWR Sommerfestival 2024">Tickets</a>
</li>
</ul>
</li>
<li  data-menuboxes="footer,tvradio,title,breadcrumbs" data-menubox-priority="8" data-menubox-filter-section="fernsehen" data-menubox-items-level="1" data-menubox-items-level-section="3" data-menubox-title="TV">
<a href="https://www.swrfernsehen.de/index.html" title="SWR Fernsehen - Das aktuelle Programm" data-menubox-item-name-section="Startseite">TV</a>
<ul class="navbar-nav">
<li  data-menuboxes="footer,tvradio,breadcrumbs">
<a href="https://www.swrfernsehen.de/tv-programm/index.html" title="SWR Fernsehen - TV-Programm">TV-Programm</a>
</li>
<li  data-menuboxes="footer,tvradio,breadcrumbs">
<a href="https://www.ardmediathek.de/swr/live/Y3JpZDovL3N3ci5kZS8xMzQ4MTA0Mg/" target="_blank" rel="noopener">Live</a>
</li>
<li  data-menuboxes="footer,tvradio,breadcrumbs">
<a href="https://www.swrfernsehen.de/videotext/index.html" title="SWR Fernsehen - Ihr Videotext im Netz">Videotext</a>
</li>
<li  data-menuboxes="tvradio,title,breadcrumbs" data-menubox-filter-section="ard-buffet" data-menubox-items-level="1" data-menubox-items-level-section="2" data-menubox-title="ARD-Buffet">
<a href="https://www.swrfernsehen.de/ard-buffet/index.html" title="ARD-Buffet Startseite" data-menubox-item-name-section="Startseite">ARD-Buffet</a>
<ul class="navbar-nav">
<li  data-menuboxes="tvradio,title,breadcrumbs">
<a href="https://www.swrfernsehen.de/ard-buffet/ratgeber/index.html" title="Unsere Ratgeber-Themen">Ratgeber</a>
</li>
<li  data-menuboxes="tvradio,title,breadcrumbs">
<a href="https://www.swrfernsehen.de/ard-buffet/kreativ/index.html" title="Kreativ">Kreativ</a>
</li>
<li  data-menuboxes="tvradio,title,breadcrumbs">
<a href="https://www.swrfernsehen.de/ard-buffet/rezepte/index.html" title="Die ARD-Buffet-Rezepte">Rezepte</a>
</li>
</ul>
</li>
<li  data-menuboxes="tvradio,title,breadcrumbs" data-menubox-filter-section="fallers" data-menubox-items-level="1" data-menubox-items-level-section="2" data-menubox-title="Die Fallers">
<a href="https://www.swrfernsehen.de/die-fallers/index.html" title="Die Fallers" data-menubox-item-name-section="Startseite">Die Fallers</a>
<ul class="navbar-nav">
<li  data-menuboxes="tvradio,breadcrumbs">
<a href="https://www.swrfernsehen.de/die-fallers/archiv/index.html" title="Alle Folgen aus 30 Jahren  - 1994 bis 2024">Archiv</a>
</li>
<li  data-menuboxes="tvradio,breadcrumbs">
<a href="https://www.swrfernsehen.de/die-fallers/fallerhof/index.html" title="Der Fallerhof">Fallerhof</a>
</li>
<li  data-menuboxes="tvradio,breadcrumbs">
<a href="https://www.swrfernsehen.de/die-fallers/familie/index.html" title="Wer ist wer bei den Fallers - Familienverhältnisse">Familie</a>
</li>
<li  data-menuboxes="tvradio,breadcrumbs">
<a href="https://www.swrfernsehen.de/die-fallers/video/index.html" title="Sehen Sie hier die aktuellen Folgen">Video</a>
</li>
</ul>
</li>
<li  data-menuboxes="tvradio,title,breadcrumbs" data-menubox-filter-section="eisenbahn-romantik" data-menubox-items-level="1" data-menubox-items-level-section="2" data-menubox-title="Eisenbahnromantik">
<a href="https://www.swrfernsehen.de/eisenbahn-romantik/index.html" title="Eisenbahn-Romantik" data-menubox-item-name-section="Startseite">Eisenbahn-Romantik</a>
<ul class="navbar-nav">
<li  data-menuboxes="tvradio,breadcrumbs">
<a href="https://www.swrfernsehen.de/eisenbahn-romantik/vorschau/index.html" title="Vorschau">Vorschau</a>
</li>
<li  data-menuboxes="tvradio,breadcrumbs">
<a href="https://www.swrfernsehen.de/eisenbahn-romantik/folgen/index.html" title="Alle Folgen">Folgen</a>
</li>
<li  data-menuboxes="tvradio,breadcrumbs">
<a href="https://www.swrfernsehen.de/eisenbahn-romantik/service/index.html" title="Service">Service</a>
</li>
<li  data-menuboxes="tvradio,breadcrumbs">
<a href="https://www.swrfernsehen.de/eisenbahn-romantik/ueber-uns/index.html" title="Über uns">Über uns</a>
</li>
</ul>
</li>
<li  data-menuboxes="tvradio,title,breadcrumbs" data-menubox-filter-section="kaffee-oder-tee" data-menubox-items-level="1" data-menubox-items-level-section="2" data-menubox-title="Kaffee oder Tee">
<a href="https://www.swrfernsehen.de/kaffee-oder-tee/index.html" title="Startseite" data-menubox-item-name-section="Startseite">Kaffee oder Tee</a>
<ul class="navbar-nav">
<li  data-menuboxes="tvradio,title,breadcrumbs">
<a href="https://www.swrfernsehen.de/kaffee-oder-tee/rezepte/index.html" title="Rezepte">Rezepte</a>
</li>
<li  data-menuboxes="tvradio,breadcrumbs">
<a href="https://www.swrfernsehen.de/kaffee-oder-tee/ratgeber/index.html" title="Unsere Ratgeber-Themen">Ratgeber</a>
</li>
<li  data-menuboxes="tvradio,breadcrumbs">
<a href="https://www.swrfernsehen.de/kaffee-oder-tee/wir-im-suedwesten/index.html" title="Wir im Südwesten">Wir im Südwesten</a>
</li>
<li  data-menuboxes="tvradio,title,breadcrumbs">
<a href="https://www.swrfernsehen.de/kaffee-oder-tee/kreativ/index.html" title="Kreativ">Kreativ</a>
</li>
</ul>
</li>
<li  data-menuboxes="tvradio,title,breadcrumbs" data-menubox-filter-section="landesschau-bw" data-menubox-items-level="1" data-menubox-items-level-section="2" data-menubox-title="Landesschau Baden-Württemberg">
<a href="https://www.swrfernsehen.de/landesschau-bw/index.html" title="Landesschau Baden-Württemberg" data-menubox-item-name-section="Startseite">Landesschau Baden-Württemberg</a>
<ul class="navbar-nav">
<li  data-menuboxes="tvradio,breadcrumbs">
<a href="https://www.swrfernsehen.de/landesschau-bw/studiogaeste/index.html" title="Rückblick: Studiogäste der Landesschau">Studiogäste</a>
</li>
<li  data-menuboxes="tvradio,breadcrumbs">
<a href="https://www.swrfernsehen.de/landesschau-bw/videos/index.html" title="Alle Videos der Landesschau Baden-Württemberg">Alle Videos</a>
</li>
<li  data-menuboxes="tvradio,breadcrumbs">
<a href="https://www.swrfernsehen.de/landesschau-bw/ueber-uns/index.html" title="Über uns">Über Uns</a>
</li>
<li  data-menuboxes="tvradio,breadcrumbs">
<a href="https://www.swrfernsehen.de/landesschau-bw/kontakt/index.html" title="Schreiben Sie uns!">Kontakt</a>
</li>
</ul>
</li>
<li  data-menuboxes="tvradio,title,breadcrumbs" data-menubox-filter-section="landesschau-rp" data-menubox-items-level="1" data-menubox-items-level-section="2" data-menubox-title="Landesschau Rheinland-Pfalz">
<a href="https://www.swrfernsehen.de/landesschau-rp/index.html" title="Landesschau Rheinland-Pfalz" data-menubox-item-name-section="Startseite">Landesschau Rheinland-Pfalz</a>
<ul class="navbar-nav">
<li  data-menuboxes="tvradio,breadcrumbs">
<a href="https://www.swrfernsehen.de/landesschau-rp/persoenlich/index.html" title="Persönlich">Persönlich</a>
</li>
<li  data-menuboxes="tvradio,breadcrumbs">
<a href="https://www.swrfernsehen.de/landesschau-rp/gutzuwissen/index.html" title="Gut zu Wissen">Gut zu wissen</a>
</li>
<li  data-menuboxes="tvradio,breadcrumbs">
<a href="https://www.swrfernsehen.de/landesschau-rp/hierzuland/index.html" title="Hierzuland">Hierzuland</a>
</li>
<li  data-menuboxes="tvradio,breadcrumbs">
<a href="https://www.swrfernsehen.de/landesschau-rp/couchgespraeche/index.html" title="Couchgespräche">Couchgespräche</a>
</li>
<li  data-menuboxes="tvradio,breadcrumbs">
<a href="https://www.swrfernsehen.de/landesschau-rp/wetter/index.html" title="Das Wetter in der Landesschau Rheinland-Pfalz">Wetter</a>
</li>
<li  data-menuboxes="tvradio,breadcrumbs">
<a href="https://www.swrfernsehen.de/landesschau-rp/kontakt/index.html" title="Wir über uns">Kontakt</a>
</li>
</ul>
</li>
<li  data-menuboxes="tvradio,title,breadcrumbs" data-menubox-filter-section="lecker-aufs-land" data-menubox-items-level="1" data-menubox-items-level-section="2" data-menubox-title="Lecker aufs Land">
<a href="https://www.swrfernsehen.de/lecker-aufs-land/index.html" title="Startseite" data-menubox-item-name-section="Startseite">Lecker aufs Land</a>
<ul class="navbar-nav">
<li  data-menuboxes="tvradio,title,breadcrumbs">
<a href="https://www.swrfernsehen.de/lecker-aufs-land/rezepte/index.html" title="Rezepte">Rezepte</a>
</li>
</ul>
</li>
<li  data-menuboxes="tvradio,title,breadcrumbs" data-menubox-filter-section="marktcheck" data-menubox-items-level="1" data-menubox-items-level-section="2" data-menubox-title="Marktcheck">
<a href="https://www.swrfernsehen.de/marktcheck/index.html" title="SWR Marktcheck" data-menubox-item-name-section="Startseite">Marktcheck</a>
<ul class="navbar-nav">
<li  data-menuboxes="tvradio,breadcrumbs">
<a href="https://www.swrfernsehen.de/marktcheck/kontakt/index.html" title="Kontaktformular - Wir freuen uns über Ihre Nachricht!">Kontakt</a>
</li>
<li  data-menuboxes="tvradio,breadcrumbs">
<a href="https://www.swrfernsehen.de/marktcheck/sendungen/index.html" title="Sendungen">Sendungen</a>
</li>
<li  data-menuboxes="tvradio,breadcrumbs">
<a href="https://www.swrfernsehen.de/marktcheck/checkt-und-deckt-auf/index.html" title="Marktcheck-Specials">Marktcheck-Specials</a>
</li>
<li  data-menuboxes="tvradio,breadcrumbs">
<a href="https://www.swrfernsehen.de/marktcheck/oekochecker/index.html" title="Ökochecker">Ökochecker</a>
</li>
<li  data-menuboxes="tvradio,breadcrumbs">
<a href="https://www.swrfernsehen.de/marktcheck/preiswert-nuetzlich-gut/index.html" title="Preiswert, nützlich, gut?">Preiswert, nützlich, gut</a>
</li>
<li  data-menuboxes="tvradio,breadcrumbs">
<a href="https://www.swrfernsehen.de/marktcheck/gesundheit/index.html" title="Gesundheit">Doc Fischer</a>
</li>
<li  data-menuboxes="tvradio,breadcrumbs" data-menubox-filter-section="marktcheck">
<a href="https://www.swrfernsehen.de/marktcheck/sabine-isst/index.html" title="Sabine isst - Aktuelle Infos rund ums Essen">Sabine isst</a>
</li>
</ul>
</li>
<li  data-menuboxes="tvradio,title,breadcrumbs" data-menubox-filter-section="nachtcafe" data-menubox-items-level="1" data-menubox-items-level-section="2" data-menubox-title="Nachtcafé">
<a href="https://www.swrfernsehen.de/nachtcafe/index.html" title="Das NACHTCAFÉ" data-menubox-item-name-section="Startseite">Nachtcafé</a>
<ul class="navbar-nav">
<li  data-menuboxes="tvradio,breadcrumbs">
<a href="https://www.swrfernsehen.de/nachtcafe/rueckschau/index.html" title="Rückschau">Rückschau</a>
</li>
<li  data-menuboxes="tvradio,breadcrumbs">
<a href="https://www.swrfernsehen.de/nachtcafe/ueber-uns/index.html" title="Über uns">Über uns</a>
</li>
<li  data-menuboxes="tvradio,breadcrumbs">
<a href="https://www.swrfernsehen.de/nachtcafe/tickets/index.html" title="Tickets">Tickets</a>
</li>
<li  data-menuboxes="tvradio,breadcrumbs">
<a href="https://www.swrfernsehen.de/nachtcafe/kontakt/index.html" title="So erreichen Sie uns">Kontakt</a>
</li>
</ul>
</li>
</ul>
</li>
<li  data-menuboxes="tvradio,breadcrumbs" data-menubox-priority="6" data-menubox-filter-section="mediathek">
<a href="https://www.ardmediathek.de/swr/" target="_blank" rel="noopener">ARD Mediathek</a>
</li>
<li  data-menuboxes="tvradio,breadcrumbs" data-menubox-priority="7" data-menubox-filter-section="audiothek">
<a href="https://www.ardaudiothek.de/sender/swr" target="_blank" rel="noopener">ARD Audiothek</a>
</li>
<li  data-menuboxes="footer,tvradio,title,breadcrumbs" data-menubox-priority="1" data-menubox-filter-section="swr1" data-menubox-items-level="2" data-menubox-items-level-section="2" data-menubox-title="SWR1" data-menubox-invisible-tvradio="true" data-sublist-visible="true">
<a href="/swr1/index.html" title="Eins gehört gehört. - SWR1" data-menubox-item-name-section="Startseite">SWR1</a>
<ul class="navbar-nav">
<li  data-menuboxes="tvradio,title,breadcrumbs" data-menubox-priority="9" data-menubox-filter-section="swr1bw" data-menubox-items-level="2" data-menubox-items-level-section="3" data-menubox-title="SWR1 BW" data-menubox-show-in-section="swr1">
<a href="/swr1/bw/index.html" title="Eins gehört gehört. SWR1. - SWR1 Baden-Württemberg" data-menubox-item-name-section="Startseite">SWR1 BW</a>
<ul class="navbar-nav">
<li  data-menuboxes="tvradio,breadcrumbs" data-menubox-filter-section="swr1bw">
<a href="/swr1/bw/programm/index.html" title="Programmschema, Podcasts und mehr - Das Programm von SWR1">Programm</a>
</li>
<li  data-menuboxes="tvradio,breadcrumbs" data-menubox-filter-section="swr1bw">
<a href="/swr1/bw/musik/index.html" title="Die Musik in SWR1 - Die größten Hits aller Zeiten">Musik</a>
</li>
<li  data-menuboxes="tvradio,breadcrumbs" data-menubox-filter-section="swr1bw">
<a href="/swr1/bw/playlist/index.html" title="Die größten Hits aller Zeiten in der Musikrecherche - Die SWR1 Playlist">Playlist</a>
</li>
<li  data-menuboxes="tvradio,breadcrumbs" data-menubox-filter-section="swr1bw">
<a href="/swr1/bw/events/index.html" title="Termine, Events, Veranstaltungen und mehr - SWR1 Musik live erleben">Events</a>
</li>
</ul>
</li>
<li  data-menuboxes="tvradio,title,breadcrumbs" data-menubox-priority="10" data-menubox-filter-section="swr1rp" data-menubox-items-level="2" data-menubox-items-level-section="3" data-menubox-title="SWR1 RP" data-menubox-show-in-section="swr1">
<a href="/swr1/rp/index.html" title="SWR1 Rheinland-Pfalz" data-menubox-item-name-section="Startseite">SWR1 RP</a>
<ul class="navbar-nav">
<li  data-menuboxes="tvradio,breadcrumbs" data-menubox-filter-section="swr1rp">
<a href="/swr1/rp/programm/index.html" title="Unsere Sendungsthemen - Programmkalender">Programm</a>
</li>
<li  data-menuboxes="tvradio,breadcrumbs" data-menubox-filter-section="swr1rp">
<a href="/swr1/rp/events/index.html" title="SWR1 Rheinland-Pfalz | Veranstaltungen">Events</a>
</li>
<li  data-menuboxes="tvradio,breadcrumbs" data-menubox-filter-section="swr1rp">
<a href="/swr1/rp/kaiserslautern/index.html" title="Kaiserslautern">Kaiserslautern</a>
</li>
<li  data-menuboxes="tvradio,breadcrumbs" data-menubox-filter-section="swr1rp">
<a href="/swr1/rp/koblenz/index.html" title="Koblenz">Koblenz</a>
</li>
<li  data-menuboxes="tvradio,breadcrumbs" data-menubox-filter-section="swr1rp">
<a href="/swr1/rp/ludwigshafen/index.html" title="Ludwigshafen">Ludwigshafen</a>
</li>
<li  data-menuboxes="tvradio,breadcrumbs" data-menubox-filter-section="swr1rp">
<a href="/swr1/rp/mainz/index.html" title="Mainz">Mainz</a>
</li>
<li  data-menuboxes="tvradio,breadcrumbs" data-menubox-filter-section="swr1rp">
<a href="/swr1/rp/trier/index.html" title="Trier">Trier</a>
</li>
<li  data-menuboxes="tvradio,breadcrumbs" data-menubox-filter-section="swr1rp">
<a href="/swr1/rp/kontakt/index.html" title="SWR1 Rheinland-Pfalz | So erreichen Sie uns">Kontakt</a>
</li>
</ul>
</li>
<li  data-menuboxes="tvradio,title,breadcrumbs" data-menubox-priority="11" data-menubox-filter-section="swr1leute" data-menubox-title="SWR1 Leute" data-menubox-show-in-section="swr1" data-menubox-invisible-tvradio="true">
<a href="/swr1/swr1leute/index.html" title="People Are People - SWR1 Leute">SWR1 Leute</a>
</li>
</ul>
</li>
<li  data-menuboxes="tvradio,breadcrumbs" data-menubox-filter-section="swr2" data-menubox-item-name-section="Radioprogramm">
<a href="/swr2/programm/index.html" title="SWR2 Radio – alle Informationen zum Kulturradio-Programm des SWR">SWR2</a>
</li>
<li  data-menuboxes="footer-meta,mainNaviHeader,tvradio,breadcrumbs" data-menubox-priority="12">
<a href="https://www.swr3.de/index.html" target="_blank" rel="noopener" title="SWR3">SWR3</a>
</li>
<li  data-menuboxes="footer,tvradio,title,breadcrumbs" data-menubox-priority="13" data-menubox-filter-section="swr4" data-menubox-items-level-section="3" data-menubox-title="SWR4">
<a href="/swr4/index.html" title="SWR4 - praktische Alltagstipps, viel Musik und tolle Promi-Bilder" data-menubox-item-name-section="Startseite">SWR4</a>
<ul class="navbar-nav">
<li  data-menuboxes="tvradio,breadcrumbs">
<a href="/swr4/musik/index.html" title="Musik bei SWR4">Musik</a>
</li>
<li  data-menuboxes="tvradio,breadcrumbs">
<a href="/swr4/events/index.html" title="Events von SWR4">Events</a>
</li>
<li  data-menuboxes="tvradio,breadcrumbs">
<a href="/swr4/tipps/index.html" title="Gute Tipps bei SWR4">Tipps</a>
</li>
<li  data-menuboxes="tvradio,breadcrumbs">
<a href="/swr4/programm-bw/index.html" title="Das Programm von SWR4">Programm BW</a>
</li>
<li  data-menuboxes="tvradio,breadcrumbs">
<a href="/swr4/programm-rp/index.html" title="SWR4 Rheinland-Pfalz">Programm RP</a>
</li>
<li  data-menuboxes="tvradio,breadcrumbs">
<a href="/swr4/kontakt/index.html" title="So erreichen Sie uns in Baden-Württemberg und Rheinland-Pfalz">Kontakt</a>
</li>
<li  data-menuboxes="tvradio,breadcrumbs" data-menubox-invisible-section="true" data-sublist-visible="true">
<a href="/swr4/nachrichten/index.html" title="Nachrichten">Nachrichten</a>
<ul class="navbar-nav">
<li  data-menuboxes="tvradio,breadcrumbs">
<a href="/swr4/nachrichten/friedrichshafen/index.html" title="Friedrichshafen">Friedrichshafen</a>
</li>
<li  data-menuboxes="tvradio,breadcrumbs">
<a href="/swr4/nachrichten/heilbronn/index.html" title="Heilbronn">Heilbronn</a>
</li>
<li  data-menuboxes="tvradio,breadcrumbs">
<a href="/swr4/nachrichten/kaiserslautern/index.html" title="Kaiserslautern">Kaiserslautern</a>
</li>
<li  data-menuboxes="tvradio,breadcrumbs">
<a href="/swr4/nachrichten/karlsruhe/index.html" title="Karlsruhe">Karlsruhe</a>
</li>
<li  data-menuboxes="tvradio,breadcrumbs">
<a href="/swr4/nachrichten/koblenz/index.html" title="Koblenz">Koblenz</a>
</li>
<li  data-menuboxes="tvradio,breadcrumbs">
<a href="/swr4/nachrichten/ludwigshafen/index.html" title="Ludwigshafen">Ludwigshafen</a>
</li>
<li  data-menuboxes="tvradio,breadcrumbs">
<a href="/swr4/nachrichten/mainz/index.html" title="Mainz">Mainz</a>
</li>
<li  data-menuboxes="tvradio,breadcrumbs">
<a href="/swr4/nachrichten/mannheim/index.html" title="Mannheim">Mannheim</a>
</li>
<li  data-menuboxes="tvradio,breadcrumbs">
<a href="/swr4/nachrichten/stuttgart/index.html" title="Stuttgart">Stuttgart</a>
</li>
<li  data-menuboxes="tvradio,breadcrumbs">
<a href="/swr4/nachrichten/suedbaden/index.html" title="Südbaden">Südbaden</a>
</li>
<li  data-menuboxes="tvradio,breadcrumbs">
<a href="/swr4/nachrichten/trier/index.html" title="Trier">Trier</a>
</li>
<li  data-menuboxes="tvradio,breadcrumbs">
<a href="/swr4/nachrichten/tuebingen/index.html" title="Tübingen">Tübingen</a>
</li>
<li  data-menuboxes="tvradio,breadcrumbs">
<a href="/swr4/nachrichten/ulm/index.html" title="Ulm">Ulm</a>
</li>
</ul>
</li>
</ul>
</li>
<li  data-menuboxes="footer,tvradio,title,breadcrumbs" data-menubox-priority="15">
<a href="https://www.dasding.de/index.html" title="DASDING">DASDING</a>
</li>
<li  data-menuboxes="imswr,breadcrumbs" data-menubox-filter-section="ehrensache" data-menubox-items-level="1" data-menubox-items-level-section="2" data-menubox-title="Ehrensache" data-menubox-invisible-imswr="true">
<a href="/ehrensache/index.html" title="Ehrensache" data-menubox-item-name-section="Startseite">Ehrensache</a>
<ul class="navbar-nav">
<li  data-menuboxes="imswr,breadcrumbs">
<a href="/ehrensache/ueber-uns/index.html" title="Unsere Aktion für Ehrenamtliche - Ehrensache &#34;Ehrensache&#34; ">Über uns</a>
</li>
</ul>
</li>
<li  data-menuboxes="imswr,title,breadcrumbs" data-menubox-priority="8" data-menubox-filter-section="herzenssache" data-menubox-items-level="1" data-menubox-items-level-section="2" data-menubox-title="Herzenssache" data-menubox-invisible-imswr="true">
<a href="https://www.herzenssache.de/index.html" target="_blank" rel="external noopener noreferrer" title="Jetzt spenden und helfen! - Herzenssache " data-menubox-item-name-section="Startseite">Herzenssache</a>
<ul class="navbar-nav">
<li  data-menuboxes="imswr,breadcrumbs">
<a href="https://www.herzenssache.de/projekte/index.html" target="_blank" rel="external noopener noreferrer" title="Alle Kinderhilfsprojekte">Projekte</a>
</li>
<li  data-menuboxes="imswr,breadcrumbs">
<a href="https://www.herzenssache.de/foerderung/index.html" target="_blank" rel="external noopener noreferrer" title="Mach Deine Herzenssache">Förderung</a>
</li>
<li  data-menuboxes="imswr,breadcrumbs">
<a href="https://www.herzenssache.de/mitmachen/index.html" target="_blank" rel="external noopener noreferrer" title="Mitmachaktionen">Mitmachen</a>
</li>
<li  data-menuboxes="imswr,breadcrumbs">
<a href="https://www.herzenssache.de/promis-mit-herz/index.html" target="_blank" rel="external noopener noreferrer" title="Promis engagieren sich für Herzenssache">Promis mit Herz</a>
</li>
<li  data-menuboxes="imswr,breadcrumbs">
<a href="https://www.herzenssache.de/ueber-uns/index.html" target="_blank" rel="external noopener noreferrer" title="Über uns">Über uns</a>
</li>
<li  data-menuboxes="imswr,breadcrumbs">
<a href="https://www.herzenssache.de/kontakt/index.html" target="_blank" rel="external noopener noreferrer" title="Das Herzenssache-Team - Unser Team">Kontakt</a>
</li>
<li  data-menuboxes="imswr,breadcrumbs">
<a href="https://www.herzenssache.de/jetzt-spenden/index.html" target="_blank" rel="external noopener noreferrer" title="Zur sicheren Online-Spende - Jetzt spenden und helfen!">Jetzt spenden!</a>
</li>
</ul>
</li>
<li  data-menuboxes="imswr,title,breadcrumbs" data-menubox-filter-section="swr-doku-festival" data-menubox-items-level="1" data-menubox-items-level-section="2" data-menubox-title="SWR Doku Festival" data-menubox-invisible-imswr="true">
<a href="/swr-doku-festival/index.html" title="SWR Doku Festival" data-menubox-item-name-section="Startseite">SWR Doku Festival</a>
<ul class="navbar-nav">
<li  data-menuboxes="imswr,breadcrumbs">
<a href="/swr-doku-festival/deutscher-dokumentarfilmpreis/index.html" title="SWR Doku Festival - Deutscher Dokumentarfilmpreis">Deutscher Dokumentarfilmpreis</a>
</li>
<li  data-menuboxes="imswr,breadcrumbs">
<a href="/swr-doku-festival/partner/index.html" title="Partner und Preisstifter des SWR Doku Festivals">Partner</a>
</li>
</ul>
</li>
</ul>

</div>
</div>
</div>
</nav>
</header>

<div id="inner-content-wrapper">
<main role="main" id="content" aria-live="assertive">
<div class="container breadcrumbs" data-crawler="ignore" data-nosnippet>
<div class="row">
<div class="col-xs-12">
<ol class="breadcrumb" itemscope itemtype="https://schema.org/BreadcrumbList">
<li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
<meta itemprop="position" content="1"/>
<a href="/index.html" title="Regional und aktuell - Südwestrundfunk | SWR.de" itemprop="item">
<span itemprop="name">
SWR
</span>
</a>
</li>
<li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
<meta itemprop="position" content="2"/>
<a href="/swraktuell/index.html" title="SWR Aktuell" itemprop="item">
<span itemprop="name">
SWR Aktuell
</span>
</a>
</li>
<li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
<meta itemprop="position" content="3"/>
<a href="/swraktuell/rheinland-pfalz/index.html" title="SWR Aktuell Rheinland-Pfalz" itemprop="item">
<span itemprop="name">
Rheinland-Pfalz
</span>
</a>
</li>
<li class="active" itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
<meta itemprop="position" content="4"/>
<a href="/swraktuell/rheinland-pfalz/trier/index.html" title="SWR Aktuell Studio Trier" itemprop="item">
<span itemprop="name">
Trier
</span>
</a>
</li>
</ol>
</div>
</div>
</div>


<div class="container container-masterheadline">
<div class="hgroup">
<h1>SWR Aktuell Studio Trier</h1>
</div>
</div>
<div class="container">
<div class="row">
<div class="col-xs-12"
>
<article data-id="article-weiberfastnacht-in-der-region-trier-so-feiern-moehnen-narren-und-karnevalisten-den-weiberdonnerstag-100"  class="teaser media-video teaser-asterus broadcast-info-hidden rubrik-swraktuell teaser-7by2"
data-crawler="ignore">
<script data-spy="piano" type="application/json">{"onsitead_advertiser":"weiberfastnacht-in-der-region-trier-so-feiern-moehnen-narren-und-karnevalisten-den-weiberdonnerstag-100","onsitead_creation":"Weiberfastnacht: So ausgelassen feierte die Region Trier","onsitead_url":"https://www.swr.de/swraktuell/rheinland-pfalz/trier/weiberfastnacht-in-der-region-trier-so-feiern-moehnen-narren-und-karnevalisten-den-weiberdonnerstag-100.html"}</script>
<header>
<mark>Eifel, Mosel, Hunsrück</mark>
<div class="image">
<a href="/swraktuell/rheinland-pfalz/trier/weiberfastnacht-in-der-region-trier-so-feiern-moehnen-narren-und-karnevalisten-den-weiberdonnerstag-100.html" title="Möhnen und Narren unterwegs - Weiberfastnacht: So ausgelassen feierte die Region Trier" class="teasertracking clickzone" role="presentation" tabindex="-1">
<picture>
<source  media="(min-width: 1200px)" srcset="/swraktuell/rheinland-pfalz/trier/1707394534989%2Cprinz-thomas-der-dritte-erobert-rathaus-trier-100~_v-7x2@2dL_-bc89d1b8c81b47b66f836795f7bde50a08841ecb.jpg 1407w,/swraktuell/rheinland-pfalz/trier/1707394534989%2Cprinz-thomas-der-dritte-erobert-rathaus-trier-100~_v-7x2@2dXL_-af48df89fc49bdf44040dbdbfd4c3186dde02694.jpg 1911w"  sizes="(min-width: 1200px) 1000px" width="1407" height="402"/>
<source  media="(min-width: 768px)" srcset="/swraktuell/rheinland-pfalz/trier/1707394534989%2Cprinz-thomas-der-dritte-erobert-rathaus-trier-100~_v-16x7@2dM_-03f2ec8e043634bddf06d1d3200e0f3e485744ee.jpg 768w,/swraktuell/rheinland-pfalz/trier/1707394534989%2Cprinz-thomas-der-dritte-erobert-rathaus-trier-100~_v-16x7@2dL_-594eb175bf96444e7f86c89c3d9f78feed295e4a.jpg 1440w"  sizes="(min-width: 768px) 730px" width="768" height="336"/>
<source  srcset="/swraktuell/rheinland-pfalz/trier/1707394534989%2Cprinz-thomas-der-dritte-erobert-rathaus-trier-100~_v-16x9@2dXS_-b9bac15fe0af001f663131e7814653aed0ad7167.jpg 320w,/swraktuell/rheinland-pfalz/trier/1707394534989%2Cprinz-thomas-der-dritte-erobert-rathaus-trier-100~_v-16x9@2dS_-6be50a9c75559ca1aaf1d0b25bae287afdcd877a.jpg 480w,/swraktuell/rheinland-pfalz/trier/1707394534989%2Cprinz-thomas-der-dritte-erobert-rathaus-trier-100~_v-16x9@2dM_-ad6791ade5eb8b5c935dd377130b903c4b5781d8.jpg 768w"  sizes="calc(100vw - 32px)" width="320" height="180"/>
<img src="/swraktuell/rheinland-pfalz/trier/1707394534989%2Cprinz-thomas-der-dritte-erobert-rathaus-trier-100~_v-16x9@2dM_-ad6791ade5eb8b5c935dd377130b903c4b5781d8.jpg"   class="" data-copyright="Foto: SWR" alt="Prinz Thomas III. hat das Trierer Rathaus übernommen. (Foto: SWR)" title="Foto: SWR" width="320" height="180" loading="lazy" decoding="async"/>
</picture>
</a>
</div>
<h2 class="hgroup">
<a href="/swraktuell/rheinland-pfalz/trier/weiberfastnacht-in-der-region-trier-so-feiern-moehnen-narren-und-karnevalisten-den-weiberdonnerstag-100.html" title="Möhnen und Narren unterwegs - Weiberfastnacht: So ausgelassen feierte die Region Trier" class="teasertracking clickzone">
<span class="topline">Möhnen und Narren unterwegs</span>
<span class="headline">Weiberfastnacht: So ausgelassen feierte die Region Trier</span>
</a>
</h2>
</header>
<a href="/swraktuell/rheinland-pfalz/trier/weiberfastnacht-in-der-region-trier-so-feiern-moehnen-narren-und-karnevalisten-den-weiberdonnerstag-100.html" title="Möhnen und Narren unterwegs - Weiberfastnacht: So ausgelassen feierte die Region Trier" class="teasertracking clickzone">
<div class="lead description">
<p>Rathauserstürmungen, Schuheputzende Möhnen, Umzüge und jede Menge Erbsensuppe. An Weiberdonnerstag war in der Eifel, an der Mosel und im Hunsrück jede Menge los.
</p>
</div>
</a>
</article>
</div>
</div>
</div>
<div class="container">
<div class="row">
<div class="col-sm-6"
>
<article data-id="article-glasverbot-und-polizeikontrollen-an-fastnacht-in-trier-sicherheitskonzept-der-stadt-an-karneval-100"  class="teaser media-article teaser-asterus broadcast-info-hidden rubrik-swraktuell teaser-16by9"
data-crawler="ignore">
<script data-spy="piano" type="application/json">{"onsitead_advertiser":"glasverbot-und-polizeikontrollen-an-fastnacht-in-trier-sicherheitskonzept-der-stadt-an-karneval-100","onsitead_creation":"Fastnacht in Trier 2024: Was Jecken beachten sollten! ","onsitead_url":"https://www.swr.de/swraktuell/rheinland-pfalz/trier/glasverbot-und-polizeikontrollen-an-fastnacht-in-trier-sicherheitskonzept-der-stadt-an-karneval-100.html"}</script>
<header>
<mark>Trier</mark>
<div class="image">
<a href="/swraktuell/rheinland-pfalz/trier/glasverbot-und-polizeikontrollen-an-fastnacht-in-trier-sicherheitskonzept-der-stadt-an-karneval-100.html" title="Sicherheit an Karneval  - Fastnacht in Trier 2024: Was Jecken beachten sollten! " class="teasertracking clickzone" role="presentation" tabindex="-1">
<picture>
<source  srcset="/swraktuell/rheinland-pfalz/1676389012588%2Cclown-kuss-fastnacht-rosenmontag-100~_v-16x9@2dXS_-b9bac15fe0af001f663131e7814653aed0ad7167.jpg 320w,/swraktuell/rheinland-pfalz/1676389012588%2Cclown-kuss-fastnacht-rosenmontag-100~_v-16x9@2dS_-6be50a9c75559ca1aaf1d0b25bae287afdcd877a.jpg 480w,/swraktuell/rheinland-pfalz/1676389012588%2Cclown-kuss-fastnacht-rosenmontag-100~_v-16x9@2dM_-ad6791ade5eb8b5c935dd377130b903c4b5781d8.jpg 768w"  sizes="(min-width: 1200px) 500px, (min-width: 768px) 360px, (min-width: 510px) 500px, calc(100vw - 32px)" width="320" height="180"/>
<img src="/swraktuell/rheinland-pfalz/1676389012588%2Cclown-kuss-fastnacht-rosenmontag-100~_v-16x9@2dM_-ad6791ade5eb8b5c935dd377130b903c4b5781d8.jpg"   class="" data-copyright="Foto: dpa Bildfunk, Picture Alliance" alt="Glückliche Fastnachter küssen sich bei strahlendem Sonnenschein (Foto: dpa Bildfunk, Picture Alliance)" title="Foto: dpa Bildfunk, Picture Alliance" width="320" height="180" loading="lazy" decoding="async"/>
</picture>
</a>
</div>
<h2 class="hgroup">
<a href="/swraktuell/rheinland-pfalz/trier/glasverbot-und-polizeikontrollen-an-fastnacht-in-trier-sicherheitskonzept-der-stadt-an-karneval-100.html" title="Sicherheit an Karneval  - Fastnacht in Trier 2024: Was Jecken beachten sollten! " class="teasertracking clickzone">
<span class="topline">Sicherheit an Karneval </span>
<span class="headline">Fastnacht in Trier 2024: Was Jecken beachten sollten! </span>
</a>
</h2>
</header>
<a href="/swraktuell/rheinland-pfalz/trier/glasverbot-und-polizeikontrollen-an-fastnacht-in-trier-sicherheitskonzept-der-stadt-an-karneval-100.html" title="Sicherheit an Karneval  - Fastnacht in Trier 2024: Was Jecken beachten sollten! " class="teasertracking clickzone">
<div class="lead description">
<p>Glasverbot und Polizeikontrollen sollen für Sicherheit an Karneval sorgen. Auch bei der Wahl des Kostüms ist nicht alles erlaubt.
</p>
</div>
</a>
</article>
</div>
<div class="col-sm-6"
>
<article data-id="article-jugendlichen-helfen-neuer-streetworker-im-kreis-vulkaneifel-100"  class="teaser media-audio teaser-asterus broadcast-info-hidden rubrik-swraktuell teaser-16by9"
data-crawler="ignore">
<script data-spy="piano" type="application/json">{"onsitead_advertiser":"jugendlichen-helfen-neuer-streetworker-im-kreis-vulkaneifel-100","onsitead_creation":"Jugendlichen helfen: Das hat der neue Streetworker in der Vulkaneifel vor","onsitead_url":"https://www.swr.de/swraktuell/rheinland-pfalz/trier/jugendlichen-helfen-neuer-streetworker-im-kreis-vulkaneifel-100.html"}</script>
<header>
<mark>Kelberg</mark>
<div class="image">
<a href="/swraktuell/rheinland-pfalz/trier/jugendlichen-helfen-neuer-streetworker-im-kreis-vulkaneifel-100.html" title="Aufsuchende Jugend- und Sozialarbeit - Jugendlichen helfen: Das hat der neue Streetworker in der Vulkaneifel vor" class="teasertracking clickzone" role="presentation" tabindex="-1">
<picture>
<source  srcset="/swraktuell/rheinland-pfalz/trier/1707282479606%2Cjugendlichen-helfen-neuer-streetworker-im-kreis-vulkaneifel-100-110~_v-16x9@2dXS_-b9bac15fe0af001f663131e7814653aed0ad7167.jpg 320w,/swraktuell/rheinland-pfalz/trier/1707282479606%2Cjugendlichen-helfen-neuer-streetworker-im-kreis-vulkaneifel-100-110~_v-16x9@2dS_-6be50a9c75559ca1aaf1d0b25bae287afdcd877a.jpg 480w,/swraktuell/rheinland-pfalz/trier/1707282479606%2Cjugendlichen-helfen-neuer-streetworker-im-kreis-vulkaneifel-100-110~_v-16x9@2dM_-ad6791ade5eb8b5c935dd377130b903c4b5781d8.jpg 768w"  sizes="(min-width: 1200px) 500px, (min-width: 768px) 360px, (min-width: 510px) 500px, calc(100vw - 32px)" width="320" height="180"/>
<img src="/swraktuell/rheinland-pfalz/trier/1707282479606%2Cjugendlichen-helfen-neuer-streetworker-im-kreis-vulkaneifel-100-110~_v-16x9@2dM_-ad6791ade5eb8b5c935dd377130b903c4b5781d8.jpg"   class="" data-copyright="Foto: SWR, Anna-Carina Blessmann" alt="Streetworker Jonas Klein an einem seiner Arbeitsorte im Kreis Vulkaneifel: einem Bushäuschen in Kelberg. (Foto: SWR, Anna-Carina Blessmann)" title="Foto: SWR, Anna-Carina Blessmann" width="320" height="180" loading="lazy" decoding="async"/>
</picture>
</a>
</div>
<h2 class="hgroup">
<a href="/swraktuell/rheinland-pfalz/trier/jugendlichen-helfen-neuer-streetworker-im-kreis-vulkaneifel-100.html" title="Aufsuchende Jugend- und Sozialarbeit - Jugendlichen helfen: Das hat der neue Streetworker in der Vulkaneifel vor" class="teasertracking clickzone">
<span class="topline">Aufsuchende Jugend- und Sozialarbeit</span>
<span class="headline">Jugendlichen helfen: Das hat der neue Streetworker in der Vulkaneifel vor</span>
</a>
</h2>
</header>
<a href="/swraktuell/rheinland-pfalz/trier/jugendlichen-helfen-neuer-streetworker-im-kreis-vulkaneifel-100.html" title="Aufsuchende Jugend- und Sozialarbeit - Jugendlichen helfen: Das hat der neue Streetworker in der Vulkaneifel vor" class="teasertracking clickzone">
<div class="lead description">
<p>Er wurde länger gesucht, aber vor Kurzem erst gefunden: ein Streetworker für den Kreis Vulkaneifel. Jonas Klein will für die Probleme der Jugendlichen ein offenes Ohr haben.
</p>
</div>
</a>
</article>
</div>
</div>
</div>
<div class="container">
<div class="row">
<div class="col-sm-6"
>
<article data-id="article-pflege-betrug-vor-landgericht-trier-100"  class="teaser media-article teaser-asterus teaser-broadcast broadcast-info-hidden broadcast-info-expired rubrik-swraktuell teaser-16by9"
data-crawler="ignore">
<script data-spy="piano" type="application/json">{"onsitead_advertiser":"pflege-betrug-vor-landgericht-trier-100","onsitead_creation":"Prozess um Pflegebetrug in Millionenhöhe vor Trierer Gericht","onsitead_url":"https://www.swr.de/swraktuell/rheinland-pfalz/trier/pflege-betrug-vor-landgericht-trier-100.html"}</script>
<header>
<mark>Trier</mark>
<div class="image">
<a href="/swraktuell/rheinland-pfalz/trier/pflege-betrug-vor-landgericht-trier-100.html" title="Angeklagte zum zweiten Mal vor Gericht - Prozess um Pflegebetrug in Millionenhöhe vor Trierer Gericht" class="teasertracking clickzone" role="presentation" tabindex="-1">
<picture>
<source  srcset="/swraktuell/rheinland-pfalz/trier/1707297354610%2Chaeusliche-pflege-118~_v-16x9@2dXS_-b9bac15fe0af001f663131e7814653aed0ad7167.jpg 320w,/swraktuell/rheinland-pfalz/trier/1707297354610%2Chaeusliche-pflege-118~_v-16x9@2dS_-6be50a9c75559ca1aaf1d0b25bae287afdcd877a.jpg 480w,/swraktuell/rheinland-pfalz/trier/1707297354610%2Chaeusliche-pflege-118~_v-16x9@2dM_-ad6791ade5eb8b5c935dd377130b903c4b5781d8.jpg 768w"  sizes="(min-width: 1200px) 500px, (min-width: 768px) 360px, (min-width: 510px) 500px, calc(100vw - 32px)" width="320" height="180"/>
<img src="/swraktuell/rheinland-pfalz/trier/1707297354610%2Chaeusliche-pflege-118~_v-16x9@2dM_-ad6791ade5eb8b5c935dd377130b903c4b5781d8.jpg"   class="" data-copyright="Foto: picture-alliance / Reportdienste, Peter Steffen" alt="Pflegekraft mit Seniorin im Rollstuhl (Foto: picture-alliance / Reportdienste, Peter Steffen)" title="Foto: picture-alliance / Reportdienste, Peter Steffen" width="320" height="180" loading="lazy" decoding="async"/>
</picture>
</a>
</div>
<h2 class="hgroup">
<a href="/swraktuell/rheinland-pfalz/trier/pflege-betrug-vor-landgericht-trier-100.html" title="Angeklagte zum zweiten Mal vor Gericht - Prozess um Pflegebetrug in Millionenhöhe vor Trierer Gericht" class="teasertracking clickzone">
<span class="topline">Angeklagte zum zweiten Mal vor Gericht</span>
<span class="headline">Prozess um Pflegebetrug in Millionenhöhe vor Trierer Gericht</span>
</a>
</h2>
</header>
<a href="/swraktuell/rheinland-pfalz/trier/pflege-betrug-vor-landgericht-trier-100.html" title="Angeklagte zum zweiten Mal vor Gericht - Prozess um Pflegebetrug in Millionenhöhe vor Trierer Gericht" class="teasertracking clickzone">
<div class="lead description">
<p>Die Staatsanwaltschaft wirft der Angeklagten vor, nicht qualifiziertes Personal zur Pflege eingesetzt zu haben. Trotzdem habe sie die Leistungen abgerechnet.
</p>
</div>
</a>
<footer>
<p class="broadcastinfo">
<time content="2024-02-07T10:00">
<span class="date">
<abbr
title="Mittwoch">Mi.</abbr><span>7.2.2024</span></span>
<span class="time">10:00 Uhr</span>
</time>
<span>SWR4 am Mittwoch</span>
<span>
<span>SWR4</span>
</span>
</p>
</footer>
</article>
</div>
<div class="col-sm-6"
>
<article data-id="article-erdrutsch-traben-trabach-unfall-100"  class="teaser media-video teaser-asterus teaser-broadcast broadcast-info-hidden broadcast-info-expired rubrik-swraktuell teaser-mediaplayer teaser-16by9"
data-crawler="ignore">
<script data-spy="piano" type="application/json">{"onsitead_advertiser":"erdrutsch-traben-trabach-unfall-100","onsitead_creation":"Aufräumen nach dem Hangrutsch zwischen Traben-Trarbach und Enkirch ","onsitead_url":"https://www.swr.de/swraktuell/rheinland-pfalz/trier/erdrutsch-traben-trabach-unfall-100.html"}</script>
<header>
<mark>Traben-Trarbach</mark>
<div id="teaser-mediaplayer-aufraeumarbeiten-laufen-auf-hochtouren-100_8303"
class="video video-16by9" data-spy="teaser-mediaplayer"
data-config="https://www.swr.de/~mediaplayer/swraktuell/rheinland-pfalz/aufraeumarbeiten-laufen-auf-hochtouren-100.json"></div>
<div class="image">
<a href="/swraktuell/rheinland-pfalz/trier/erdrutsch-traben-trabach-unfall-100.html" title="Weiterhin Vollsperrung auf B53 - Aufräumen nach dem Hangrutsch zwischen Traben-Trarbach und Enkirch " class="teasertracking clickzone" role="presentation" tabindex="-1">
<picture>
<source  srcset="/swraktuell/rheinland-pfalz/trier/1707228315955%2Caufraeumarbeiten-hangrutsch-traben-trarbach-102~_v-16x9@2dXS_-b9bac15fe0af001f663131e7814653aed0ad7167.jpg 320w,/swraktuell/rheinland-pfalz/trier/1707228315955%2Caufraeumarbeiten-hangrutsch-traben-trarbach-102~_v-16x9@2dS_-6be50a9c75559ca1aaf1d0b25bae287afdcd877a.jpg 480w,/swraktuell/rheinland-pfalz/trier/1707228315955%2Caufraeumarbeiten-hangrutsch-traben-trarbach-102~_v-16x9@2dM_-ad6791ade5eb8b5c935dd377130b903c4b5781d8.jpg 768w"  sizes="(min-width: 1200px) 500px, (min-width: 768px) 360px, (min-width: 510px) 500px, calc(100vw - 32px)" width="320" height="180"/>
<img src="/swraktuell/rheinland-pfalz/trier/1707228315955%2Caufraeumarbeiten-hangrutsch-traben-trarbach-102~_v-16x9@2dM_-ad6791ade5eb8b5c935dd377130b903c4b5781d8.jpg"   class="" data-copyright="Foto: Winkler TV" alt="Start der Aufräumarbeiten nach einem Hangrutsch auf der B53 bei Traben-Trarbach. (Foto: Winkler TV)" title="Foto: Winkler TV" width="320" height="180" loading="lazy" decoding="async"/>
</picture>
</a>
</div>
<h2 class="hgroup">
<a href="/swraktuell/rheinland-pfalz/trier/erdrutsch-traben-trabach-unfall-100.html" title="Weiterhin Vollsperrung auf B53 - Aufräumen nach dem Hangrutsch zwischen Traben-Trarbach und Enkirch " class="teasertracking clickzone">
<span class="topline">Weiterhin Vollsperrung auf B53</span>
<span class="headline">Aufräumen nach dem Hangrutsch zwischen Traben-Trarbach und Enkirch </span>
</a>
</h2>
</header>
<a href="/swraktuell/rheinland-pfalz/trier/erdrutsch-traben-trabach-unfall-100.html" title="Weiterhin Vollsperrung auf B53 - Aufräumen nach dem Hangrutsch zwischen Traben-Trarbach und Enkirch " class="teasertracking clickzone">
<div class="lead description">
<p>Die B53 zwischen Traben-Trarbach und Enkirch ist wegen eines Hangrutsches immer noch gesperrt. Am Dienstag haben die Aufräumarbeiten an der Bundesstraße begonnen.
</p>
</div>
</a>
<footer>
<p class="broadcastinfo">
<time content="2024-02-05T06:00">
<span class="date">
<abbr
title="Montag">Mo.</abbr><span>5.2.2024</span></span>
<span class="time">6:00 Uhr</span>
</time>
<span>SWR4 RP am Morgen</span>
<span>
<span>SWR4 Rheinland-Pfalz</span>
</span>
</p>
</footer>
</article>
</div>
</div>
</div>
<div class="container">
<div class="row">
<div class="col-xs-12"
>
<article data-id="article-karnevalsumzuege-und-kappensitzungen-2024-in-der-region-trier-100"  class="teaser media-article teaser-asterus teaser-broadcast broadcast-info-expired rubrik-swraktuell teaser-7by2"
data-crawler="ignore">
<script data-spy="piano" type="application/json">{"onsitead_advertiser":"karnevalsumzuege-und-kappensitzungen-2024-in-der-region-trier-100","onsitead_creation":"Hier wird in der Region Trier Karneval gefeiert","onsitead_url":"https://www.swr.de/swraktuell/rheinland-pfalz/trier/karnevalsumzuege-und-kappensitzungen-2024-in-der-region-trier-100.html"}</script>
<header>
<mark>Eifel, Mosel, Hunsrück</mark>
<div class="image">
<a href="/swraktuell/rheinland-pfalz/trier/karnevalsumzuege-und-kappensitzungen-2024-in-der-region-trier-100.html" title="Kappensitzungen und Karnevalsumzüge 2024 - Hier wird in der Region Trier Karneval gefeiert" class="teasertracking clickzone" role="presentation" tabindex="-1">
<picture>
<source  media="(min-width: 1200px)" srcset="/swraktuell/rheinland-pfalz/trier/1706698086262%2Cnaerrischer-fahrplan-karneval-2024-region-trier-100~_v-7x2@2dL_-bc89d1b8c81b47b66f836795f7bde50a08841ecb.jpg 1407w,/swraktuell/rheinland-pfalz/trier/1706698086262%2Cnaerrischer-fahrplan-karneval-2024-region-trier-100~_v-7x2@2dXL_-af48df89fc49bdf44040dbdbfd4c3186dde02694.jpg 1911w"  sizes="(min-width: 1200px) 1000px" width="1407" height="402"/>
<source  media="(min-width: 768px)" srcset="/swraktuell/rheinland-pfalz/trier/1706698086262%2Cnaerrischer-fahrplan-karneval-2024-region-trier-100~_v-16x7@2dM_-03f2ec8e043634bddf06d1d3200e0f3e485744ee.jpg 768w,/swraktuell/rheinland-pfalz/trier/1706698086262%2Cnaerrischer-fahrplan-karneval-2024-region-trier-100~_v-16x7@2dL_-594eb175bf96444e7f86c89c3d9f78feed295e4a.jpg 1440w"  sizes="(min-width: 768px) 730px" width="768" height="336"/>
<source  srcset="/swraktuell/rheinland-pfalz/trier/1706698086262%2Cnaerrischer-fahrplan-karneval-2024-region-trier-100~_v-16x9@2dXS_-b9bac15fe0af001f663131e7814653aed0ad7167.jpg 320w,/swraktuell/rheinland-pfalz/trier/1706698086262%2Cnaerrischer-fahrplan-karneval-2024-region-trier-100~_v-16x9@2dS_-6be50a9c75559ca1aaf1d0b25bae287afdcd877a.jpg 480w,/swraktuell/rheinland-pfalz/trier/1706698086262%2Cnaerrischer-fahrplan-karneval-2024-region-trier-100~_v-16x9@2dM_-ad6791ade5eb8b5c935dd377130b903c4b5781d8.jpg 768w"  sizes="calc(100vw - 32px)" width="320" height="180"/>
<img src="/swraktuell/rheinland-pfalz/trier/1706698086262%2Cnaerrischer-fahrplan-karneval-2024-region-trier-100~_v-16x9@2dM_-ad6791ade5eb8b5c935dd377130b903c4b5781d8.jpg"   class="" data-copyright="Foto: Montage: SWR" alt="Bildmontage: Fastnachtsveranstaltungen in der Region Trier (Foto: Montage: SWR)" title="Foto: Montage: SWR" width="320" height="180" loading="lazy" decoding="async"/>
</picture>
</a>
</div>
<h2 class="hgroup">
<a href="/swraktuell/rheinland-pfalz/trier/karnevalsumzuege-und-kappensitzungen-2024-in-der-region-trier-100.html" title="Kappensitzungen und Karnevalsumzüge 2024 - Hier wird in der Region Trier Karneval gefeiert" class="teasertracking clickzone">
<span class="topline">Kappensitzungen und Karnevalsumzüge 2024</span>
<span class="headline">Hier wird in der Region Trier Karneval gefeiert</span>
</a>
</h2>
</header>
<a href="/swraktuell/rheinland-pfalz/trier/karnevalsumzuege-und-kappensitzungen-2024-in-der-region-trier-100.html" title="Kappensitzungen und Karnevalsumzüge 2024 - Hier wird in der Region Trier Karneval gefeiert" class="teasertracking clickzone">
<div class="lead description">
<p>Von wegen Mainz und Köln: Die Region Trier kann beim Karneval und Fastnacht feiern locker mit den karnevalistischen Hochburgen mithalten. Denn bis Rosenmontag ist jede Menge los.
</p>
</div>
</a>
<footer>
<p class="broadcastinfo">
<time content="2024-01-20T06:00">
<span class="date">
<abbr
title="Samstag">Sa.</abbr><span>20.1.2024</span></span>
<span class="time">6:00 Uhr</span>
</time>
<span>SWR4 RP am Morgen</span>
<span>
<span>SWR4 Rheinland-Pfalz</span>
</span>
</p>
</footer>
</article>
</div>
</div>
</div>
<div class="container">
<div class="row">
<h2>Mehr Nachrichten aus dem Studio Trier</h2>
<div class="teasercarousel" aria-roledescription="carousel" data-spy="teasercarousel"
>
<div class="col-sm-6 col-lg-4">
<article data-id="article-trierer-helfer-erdbebengebiet-tuerkei-ein-jahr-danach-100"  class="teaser media-video teaser-majestix teaser-broadcast broadcast-info-hidden broadcast-info-expired rubrik-swraktuell teaser-1by1"
data-crawler="ignore">
<script data-spy="piano" type="application/json">{"onsitead_advertiser":"trierer-helfer-erdbebengebiet-tuerkei-ein-jahr-danach-100","onsitead_creation":"Trierer Helfer: Schwierige Situation im türkischen Erdbebengebiet um die Stadt Gaziantep ","onsitead_url":"https://www.swr.de/swraktuell/rheinland-pfalz/trier/trierer-helfer-erdbebengebiet-tuerkei-ein-jahr-danach-100.html"}</script>
<header>
<mark>Trier</mark>
<div class="image">
<a href="/swraktuell/rheinland-pfalz/trier/trierer-helfer-erdbebengebiet-tuerkei-ein-jahr-danach-100.html" title="Für viele Menschen ist es noch schlimmer geworden - Trierer Helfer: Schwierige Situation im türkischen Erdbebengebiet um die Stadt Gaziantep " class="teasertracking clickzone" role="presentation" tabindex="-1">
<picture>
<source  srcset="/swraktuell/rheinland-pfalz/trier/1707231598515%2Cemra-bayindir-trierer-bauunternehmer-half-erdbebeopfern-in-tuerkei-100~_v-1x1@2dXS_-9a91314e681c924f29ec89ca45e4e12f5b1d728e.jpg 320w,/swraktuell/rheinland-pfalz/trier/1707231598515%2Cemra-bayindir-trierer-bauunternehmer-half-erdbebeopfern-in-tuerkei-100~_v-1x1@2dS_-4026684eab220e7fb9eb2f80f316da061f3d025c.jpg 480w"  sizes="(min-width: 768px) 300px, (min-width: 510px) 400px, calc(100vw - 152px)" width="320" height="320"/>
<img src="/swraktuell/rheinland-pfalz/trier/1707231598515%2Cemra-bayindir-trierer-bauunternehmer-half-erdbebeopfern-in-tuerkei-100~_v-1x1@2dS_-4026684eab220e7fb9eb2f80f316da061f3d025c.jpg"   class="" data-copyright="Foto: SWR" alt="Der Trierer Bauunternehmer Emra Bayindir half Erdbebenopfern in der Türkei (Foto: SWR)" title="Foto: SWR" width="320" height="320" loading="lazy" decoding="async"/>
</picture>
</a>
</div>
<h3 class="hgroup">
<a href="/swraktuell/rheinland-pfalz/trier/trierer-helfer-erdbebengebiet-tuerkei-ein-jahr-danach-100.html" title="Für viele Menschen ist es noch schlimmer geworden - Trierer Helfer: Schwierige Situation im türkischen Erdbebengebiet um die Stadt Gaziantep " class="teasertracking clickzone">
<span class="topline">Für viele Menschen ist es noch schlimmer geworden</span>
<span class="headline">Trierer Helfer: Schwierige Situation im türkischen Erdbebengebiet um die Stadt Gaziantep </span>
</a>
</h3>
</header>
<a href="/swraktuell/rheinland-pfalz/trier/trierer-helfer-erdbebengebiet-tuerkei-ein-jahr-danach-100.html" title="Für viele Menschen ist es noch schlimmer geworden - Trierer Helfer: Schwierige Situation im türkischen Erdbebengebiet um die Stadt Gaziantep " class="teasertracking clickzone">
<div class="lead description">
<p>Nach dem großen Erdbeben in der Türkei 2023 hat ein Trierer mit Wurzeln in der Türkei eine große Hilfsaktion in Gang gesetzt. Seine Eindrücke ein Jahr danach.
</p>
</div>
</a>
<footer>
<p class="broadcastinfo">
<time content="2024-02-06T13:00">
<span class="date">
<abbr
title="Dienstag">Di.</abbr><span>6.2.2024</span></span>
<span class="time">13:00 Uhr</span>
</time>
<span>Der Nachmittag</span>
<span>
<span>SWR1 Rheinland-Pfalz</span>
</span>
</p>
</footer>
</article>
</div>
<div class="col-sm-6 col-lg-4">
<article data-id="article-mitarbeiter-erben-modehaus-mueller-hamann-saarburg-100"  class="teaser media-article teaser-majestix teaser-broadcast broadcast-info-hidden broadcast-info-expired rubrik-swraktuell teaser-1by1"
data-crawler="ignore">
<script data-spy="piano" type="application/json">{"onsitead_advertiser":"mitarbeiter-erben-modehaus-mueller-hamann-saarburg-100","onsitead_creation":"Modehaus in Saarburg: Wenn aus Mitarbeiterinnen Chefinnen werden","onsitead_url":"https://www.swr.de/swraktuell/rheinland-pfalz/trier/mitarbeiter-erben-modehaus-mueller-hamann-saarburg-100.html"}</script>
<header>
<mark>Saarburg</mark>
<div class="image">
<a href="/swraktuell/rheinland-pfalz/trier/mitarbeiter-erben-modehaus-mueller-hamann-saarburg-100.html" title="Ungewöhnliche Betriebsnachfolge - Modehaus in Saarburg: Wenn aus Mitarbeiterinnen Chefinnen werden" class="teasertracking clickzone" role="presentation" tabindex="-1">
<picture>
<source  srcset="/swraktuell/rheinland-pfalz/trier/1707214062622%2Cmueller-hamann-106~_v-1x1@2dXS_-9a91314e681c924f29ec89ca45e4e12f5b1d728e.jpg 320w,/swraktuell/rheinland-pfalz/trier/1707214062622%2Cmueller-hamann-106~_v-1x1@2dS_-4026684eab220e7fb9eb2f80f316da061f3d025c.jpg 480w"  sizes="(min-width: 768px) 300px, (min-width: 510px) 400px, calc(100vw - 152px)" width="320" height="320"/>
<img src="/swraktuell/rheinland-pfalz/trier/1707214062622%2Cmueller-hamann-106~_v-1x1@2dS_-4026684eab220e7fb9eb2f80f316da061f3d025c.jpg"   class="" data-copyright="Foto: SWR" alt="Müller-Hamann (Foto: SWR)" title="Foto: SWR" width="320" height="320" loading="lazy" decoding="async"/>
</picture>
</a>
</div>
<h3 class="hgroup">
<a href="/swraktuell/rheinland-pfalz/trier/mitarbeiter-erben-modehaus-mueller-hamann-saarburg-100.html" title="Ungewöhnliche Betriebsnachfolge - Modehaus in Saarburg: Wenn aus Mitarbeiterinnen Chefinnen werden" class="teasertracking clickzone">
<span class="topline">Ungewöhnliche Betriebsnachfolge</span>
<span class="headline">Modehaus in Saarburg: Wenn aus Mitarbeiterinnen Chefinnen werden</span>
</a>
</h3>
</header>
<a href="/swraktuell/rheinland-pfalz/trier/mitarbeiter-erben-modehaus-mueller-hamann-saarburg-100.html" title="Ungewöhnliche Betriebsnachfolge - Modehaus in Saarburg: Wenn aus Mitarbeiterinnen Chefinnen werden" class="teasertracking clickzone">
<div class="lead description">
<p>Der Chef eines Saarburger Modehauses stirbt unerwartet und vermacht das Unternehmen seinen zwölf Angestellten. Die führen das Traditionsunternehmen seit einem Jahr erfolgreich.
</p>
</div>
</a>
<footer>
<p class="broadcastinfo">
<time content="2024-01-27T13:00">
<span class="date">
<abbr
title="Samstag">Sa.</abbr><span>27.1.2024</span></span>
<span class="time">13:00 Uhr</span>
</time>
<span>Arbeitsplatz</span>
<span>
<span>SWR1</span>
</span>
</p>
</footer>
</article>
</div>
<div class="col-sm-6 col-lg-4">
<article data-id="article-absturz-eines-fluggeraetes-entpuppt-sich-als-waldkalkung-100"  class="teaser media-article teaser-majestix teaser-broadcast broadcast-info-hidden broadcast-info-expired rubrik-swraktuell teaser-1by1"
data-crawler="ignore">
<script data-spy="piano" type="application/json">{"onsitead_advertiser":"absturz-eines-fluggeraetes-entpuppt-sich-als-waldkalkung-100","onsitead_creation":"Flugzeugabsturz in der Eifel entpuppt sich als Waldkalkung","onsitead_url":"https://www.swr.de/swraktuell/rheinland-pfalz/trier/absturz-eines-fluggeraetes-entpuppt-sich-als-waldkalkung-100.html"}</script>
<header>
<mark>Prüm</mark>
<div class="image">
<a href="/swraktuell/rheinland-pfalz/trier/absturz-eines-fluggeraetes-entpuppt-sich-als-waldkalkung-100.html" title="Notruf bei der Polizei - Flugzeugabsturz in der Eifel entpuppt sich als Waldkalkung" class="teasertracking clickzone" role="presentation" tabindex="-1">
<picture>
<source  srcset="/swraktuell/rheinland-pfalz/trier/1707197599016%2Cvermeintlicher-flugunfall-in-der-eifel-100~_v-1x1@2dXS_-9a91314e681c924f29ec89ca45e4e12f5b1d728e.jpg 320w,/swraktuell/rheinland-pfalz/trier/1707197599016%2Cvermeintlicher-flugunfall-in-der-eifel-100~_v-1x1@2dS_-4026684eab220e7fb9eb2f80f316da061f3d025c.jpg 480w"  sizes="(min-width: 768px) 300px, (min-width: 510px) 400px, calc(100vw - 152px)" width="320" height="320"/>
<img src="/swraktuell/rheinland-pfalz/trier/1707197599016%2Cvermeintlicher-flugunfall-in-der-eifel-100~_v-1x1@2dS_-4026684eab220e7fb9eb2f80f316da061f3d025c.jpg"   class="" data-copyright="Foto: SWR" alt="Ein Flugunfall in der Eifel hat sich im Nachhinein als Waldkalkung herausgestellt (Foto: SWR)" title="Foto: SWR" width="320" height="320" loading="lazy" decoding="async"/>
</picture>
</a>
</div>
<h3 class="hgroup">
<a href="/swraktuell/rheinland-pfalz/trier/absturz-eines-fluggeraetes-entpuppt-sich-als-waldkalkung-100.html" title="Notruf bei der Polizei - Flugzeugabsturz in der Eifel entpuppt sich als Waldkalkung" class="teasertracking clickzone">
<span class="topline">Notruf bei der Polizei</span>
<span class="headline">Flugzeugabsturz in der Eifel entpuppt sich als Waldkalkung</span>
</a>
</h3>
</header>
<a href="/swraktuell/rheinland-pfalz/trier/absturz-eines-fluggeraetes-entpuppt-sich-als-waldkalkung-100.html" title="Notruf bei der Polizei - Flugzeugabsturz in der Eifel entpuppt sich als Waldkalkung" class="teasertracking clickzone">
<div class="lead description">
<p>Der vermeintliche Absturz eines Fluggeräts in der Eifel hat sich am Montag als Waldkalkung herausgestellt. Eine Zeuge hatte die Polizei alarmiert.
</p>
</div>
</a>
<footer>
<p class="broadcastinfo">
<time content="2024-02-06T06:00">
<span class="date">
<abbr
title="Dienstag">Di.</abbr><span>6.2.2024</span></span>
<span class="time">6:00 Uhr</span>
</time>
<span>SWR4 RP am Morgen</span>
<span>
<span>SWR4 Rheinland-Pfalz</span>
</span>
</p>
</footer>
</article>
</div>
<div class="col-sm-6 col-lg-4">
<article data-id="article-steillagen-winzer-duerfen-trotz-apollo-falter-per-hubschrauber-spritzen-100"  class="teaser media-article teaser-majestix teaser-broadcast broadcast-info-hidden broadcast-info-expired rubrik-swraktuell teaser-1by1"
data-crawler="ignore">
<script data-spy="piano" type="application/json">{"onsitead_advertiser":"steillagen-winzer-duerfen-trotz-apollo-falter-per-hubschrauber-spritzen-100","onsitead_creation":"Trotz Apollofalter: Steillagen-Winzer dürfen an der Mosel mit Hubschrauber spritzen","onsitead_url":"https://www.swr.de/swraktuell/rheinland-pfalz/koblenz/steillagen-winzer-duerfen-trotz-apollo-falter-per-hubschrauber-spritzen-100.html"}</script>
<header>
<mark>Winningen</mark>
<div class="image">
<a href="/swraktuell/rheinland-pfalz/koblenz/steillagen-winzer-duerfen-trotz-apollo-falter-per-hubschrauber-spritzen-100.html" title="Umweltbundesamt fordert Schutz des Schmetterlings - Trotz Apollofalter: Steillagen-Winzer dürfen an der Mosel mit Hubschrauber spritzen" class="teasertracking clickzone" role="presentation" tabindex="-1">
<picture>
<source  srcset="/swraktuell/rheinland-pfalz/koblenz/1707322805792%2Csteillagen-winzer-duerfen-trotz-apollo-falter-per-hubschrauber-spritzen-102~_v-1x1@2dXS_-9a91314e681c924f29ec89ca45e4e12f5b1d728e.jpg 320w,/swraktuell/rheinland-pfalz/koblenz/1707322805792%2Csteillagen-winzer-duerfen-trotz-apollo-falter-per-hubschrauber-spritzen-102~_v-1x1@2dS_-4026684eab220e7fb9eb2f80f316da061f3d025c.jpg 480w"  sizes="(min-width: 768px) 300px, (min-width: 510px) 400px, calc(100vw - 152px)" width="320" height="320"/>
<img src="/swraktuell/rheinland-pfalz/koblenz/1707322805792%2Csteillagen-winzer-duerfen-trotz-apollo-falter-per-hubschrauber-spritzen-102~_v-1x1@2dS_-4026684eab220e7fb9eb2f80f316da061f3d025c.jpg"   class="" data-copyright="Foto: dpa Bildfunk, Picture Alliance" alt="Steillagen-Winzer dürfen an der Mosel trotz Apollofalter mit Hubschrauber spritzen (Foto: dpa Bildfunk, Picture Alliance)" title="Foto: dpa Bildfunk, Picture Alliance" width="320" height="320" loading="lazy" decoding="async"/>
</picture>
</a>
</div>
<h3 class="hgroup">
<a href="/swraktuell/rheinland-pfalz/koblenz/steillagen-winzer-duerfen-trotz-apollo-falter-per-hubschrauber-spritzen-100.html" title="Umweltbundesamt fordert Schutz des Schmetterlings - Trotz Apollofalter: Steillagen-Winzer dürfen an der Mosel mit Hubschrauber spritzen" class="teasertracking clickzone">
<span class="topline">Umweltbundesamt fordert Schutz des Schmetterlings</span>
<span class="headline">Trotz Apollofalter: Steillagen-Winzer dürfen an der Mosel mit Hubschrauber spritzen</span>
</a>
</h3>
</header>
<a href="/swraktuell/rheinland-pfalz/koblenz/steillagen-winzer-duerfen-trotz-apollo-falter-per-hubschrauber-spritzen-100.html" title="Umweltbundesamt fordert Schutz des Schmetterlings - Trotz Apollofalter: Steillagen-Winzer dürfen an der Mosel mit Hubschrauber spritzen" class="teasertracking clickzone">
<div class="lead description">
<p>Steillagen-Winzer an der Mosel dürfen weiterhin Pflanzenschutzmittel in ihren Weinbergen spritzen. Naturschützer hatten ein Verbot gefordert, um den Apollofalter zu schützen.
</p>
</div>
</a>
<footer>
<p class="broadcastinfo">
<time content="2024-02-07T14:00">
<span class="date">
<abbr
title="Mittwoch">Mi.</abbr><span>7.2.2024</span></span>
<span class="time">14:00 Uhr</span>
</time>
<span>SWR4 am Nachmittag</span>
<span>
<span>SWR4</span>
</span>
</p>
</footer>
</article>
</div>
<div class="col-sm-6 col-lg-4">
<article data-id="article-polizei-idar-oberstein-ermittelt-nach-messerangriff-gegen-verdaechtigen-100"  class="teaser media-article teaser-majestix broadcast-info-hidden rubrik-swraktuell teaser-1by1"
data-crawler="ignore">
<script data-spy="piano" type="application/json">{"onsitead_advertiser":"polizei-idar-oberstein-ermittelt-nach-messerangriff-gegen-verdaechtigen-100","onsitead_creation":"21-Jähriger nach Attacke in Idar-Oberstein in Lebensgefahr","onsitead_url":"https://www.swr.de/swraktuell/rheinland-pfalz/trier/polizei-idar-oberstein-ermittelt-nach-messerangriff-gegen-verdaechtigen-100.html"}</script>
<header>
<mark>Idar-Oberstein</mark>
<div class="image">
<a href="/swraktuell/rheinland-pfalz/trier/polizei-idar-oberstein-ermittelt-nach-messerangriff-gegen-verdaechtigen-100.html" title="Vermutlich Messerangriff in der Innenstadt  - 21-Jähriger nach Attacke in Idar-Oberstein in Lebensgefahr" class="teasertracking clickzone" role="presentation" tabindex="-1">
<picture>
<source  srcset="/swraktuell/rheinland-pfalz/trier/1707140222540%2Cpolizei-idar-oberstein-ermittelt-nach-messerangriff-100~_v-1x1@2dXS_-9a91314e681c924f29ec89ca45e4e12f5b1d728e.jpg 320w,/swraktuell/rheinland-pfalz/trier/1707140222540%2Cpolizei-idar-oberstein-ermittelt-nach-messerangriff-100~_v-1x1@2dS_-4026684eab220e7fb9eb2f80f316da061f3d025c.jpg 480w"  sizes="(min-width: 768px) 300px, (min-width: 510px) 400px, calc(100vw - 152px)" width="320" height="320"/>
<img src="/swraktuell/rheinland-pfalz/trier/1707140222540%2Cpolizei-idar-oberstein-ermittelt-nach-messerangriff-100~_v-1x1@2dS_-4026684eab220e7fb9eb2f80f316da061f3d025c.jpg"   class="" data-copyright="Foto: SWR, Andreas Adam" alt="Die Polizei Idar-Oberstein ermittelt nach einem Messerangriff gegen einen 23-jährigen Mann. (Foto: SWR, Andreas Adam)" title="Foto: SWR, Andreas Adam" width="320" height="320" loading="lazy" decoding="async"/>
</picture>
</a>
</div>
<h3 class="hgroup">
<a href="/swraktuell/rheinland-pfalz/trier/polizei-idar-oberstein-ermittelt-nach-messerangriff-gegen-verdaechtigen-100.html" title="Vermutlich Messerangriff in der Innenstadt  - 21-Jähriger nach Attacke in Idar-Oberstein in Lebensgefahr" class="teasertracking clickzone">
<span class="topline">Vermutlich Messerangriff in der Innenstadt </span>
<span class="headline">21-Jähriger nach Attacke in Idar-Oberstein in Lebensgefahr</span>
</a>
</h3>
</header>
<a href="/swraktuell/rheinland-pfalz/trier/polizei-idar-oberstein-ermittelt-nach-messerangriff-gegen-verdaechtigen-100.html" title="Vermutlich Messerangriff in der Innenstadt  - 21-Jähriger nach Attacke in Idar-Oberstein in Lebensgefahr" class="teasertracking clickzone">
<div class="lead description">
<p>Ein Streit zwischen zwei Gruppen, danach muss ein junger Mann ins Krankenhaus. Die Polizei nimmt einen Verdächtigen fest, der danach selbst angegriffen worden sein soll.
</p>
</div>
</a>
</article>
</div>
<div class="col-sm-6 col-lg-4">
<article data-id="article-mann-durch-messerangriff-in-trier-lebensgefaehrlich-verletzt-100"  class="teaser media-article teaser-majestix broadcast-info-hidden rubrik-swraktuell teaser-1by1"
data-crawler="ignore">
<script data-spy="piano" type="application/json">{"onsitead_advertiser":"mann-durch-messerangriff-in-trier-lebensgefaehrlich-verletzt-100","onsitead_creation":"Mann durch Messerangriff in Trier lebensgefährlich verletzt","onsitead_url":"https://www.swr.de/swraktuell/rheinland-pfalz/trier/mann-durch-messerangriff-in-trier-lebensgefaehrlich-verletzt-100.html"}</script>
<header>
<mark>Trier</mark>
<div class="image">
<a href="/swraktuell/rheinland-pfalz/trier/mann-durch-messerangriff-in-trier-lebensgefaehrlich-verletzt-100.html" title="Verdächtiger in U-Haft - Mann durch Messerangriff in Trier lebensgefährlich verletzt" class="teasertracking clickzone" role="presentation" tabindex="-1">
<picture>
<source  srcset="/swraktuell/rheinland-pfalz/trier/1707129116064%2Cmann-bei-streit-in-trier-niedergestochen-und-schwer-verletzt-100~_v-1x1@2dXS_-9a91314e681c924f29ec89ca45e4e12f5b1d728e.jpg 320w,/swraktuell/rheinland-pfalz/trier/1707129116064%2Cmann-bei-streit-in-trier-niedergestochen-und-schwer-verletzt-100~_v-1x1@2dS_-4026684eab220e7fb9eb2f80f316da061f3d025c.jpg 480w"  sizes="(min-width: 768px) 300px, (min-width: 510px) 400px, calc(100vw - 152px)" width="320" height="320"/>
<img src="/swraktuell/rheinland-pfalz/trier/1707129116064%2Cmann-bei-streit-in-trier-niedergestochen-und-schwer-verletzt-100~_v-1x1@2dS_-4026684eab220e7fb9eb2f80f316da061f3d025c.jpg"   class="" data-copyright="Foto: SWR" alt="Bei einem Streit in Trier ist ein 48-jähriger Mann niedergstochen und schwer verletzt worden (Foto: SWR)" title="Foto: SWR" width="320" height="320" loading="lazy" decoding="async"/>
</picture>
</a>
</div>
<h3 class="hgroup">
<a href="/swraktuell/rheinland-pfalz/trier/mann-durch-messerangriff-in-trier-lebensgefaehrlich-verletzt-100.html" title="Verdächtiger in U-Haft - Mann durch Messerangriff in Trier lebensgefährlich verletzt" class="teasertracking clickzone">
<span class="topline">Verdächtiger in U-Haft</span>
<span class="headline">Mann durch Messerangriff in Trier lebensgefährlich verletzt</span>
</a>
</h3>
</header>
<a href="/swraktuell/rheinland-pfalz/trier/mann-durch-messerangriff-in-trier-lebensgefaehrlich-verletzt-100.html" title="Verdächtiger in U-Haft - Mann durch Messerangriff in Trier lebensgefährlich verletzt" class="teasertracking clickzone">
<div class="lead description">
<p>Die Polizei ist in Trier zu einem Streit in einem Mehrfamilienhaus gerufen worden. Vor Ort finden die Beamten einen schwer verletzten Mann.
</p>
</div>
</a>
</article>
</div>
</div>
</div>
</div>
<div class="container">
<div class="row">
<h2>Mehr aus der Region Trier</h2>
<div class="teasercarousel" aria-roledescription="carousel" data-spy="teasercarousel"
>
<div class="col-sm-6 col-lg-4">
<article data-id="video-plaene-fuer-die-zukunft-des-klosters-himmerod-100"  class="teaser media-video teaser-majestix teaser-broadcast broadcast-info-hidden broadcast-info-expired rubrik-swrlandesschaurp teaser-1by1"
data-crawler="ignore">
<script data-spy="piano" type="application/json">{"onsitead_advertiser":"plaene-fuer-die-zukunft-des-klosters-himmerod-100","onsitead_creation":"Pläne für die Zukunft des Klosters Himmerod","onsitead_url":"https://www.swrfernsehen.de/landesschau-rp/plaene-fuer-die-zukunft-des-klosters-himmerod-100.html"}</script>
<header>
<mark>Großlittgen</mark>
<div class="image">
<a href="https://www.swrfernsehen.de/landesschau-rp/plaene-fuer-die-zukunft-des-klosters-himmerod-100.html" title="Ein Unternehmer soll Pächter des Klosters werden - Pläne für die Zukunft des Klosters Himmerod" class="teasertracking clickzone" role="presentation" tabindex="-1">
<picture>
<source  srcset="https://www.swrfernsehen.de/landesschau-rp/1707326320249%2Cplaene-fuer-die-zukunft-des-klosters-himmerod-102~_v-1x1@2dXS_-9a91314e681c924f29ec89ca45e4e12f5b1d728e.jpg 320w,https://www.swrfernsehen.de/landesschau-rp/1707326320249%2Cplaene-fuer-die-zukunft-des-klosters-himmerod-102~_v-1x1@2dS_-4026684eab220e7fb9eb2f80f316da061f3d025c.jpg 480w"  sizes="(min-width: 768px) 300px, (min-width: 510px) 400px, calc(100vw - 152px)" width="320" height="320"/>
<img src="https://www.swrfernsehen.de/landesschau-rp/1707326320249%2Cplaene-fuer-die-zukunft-des-klosters-himmerod-102~_v-1x1@2dS_-4026684eab220e7fb9eb2f80f316da061f3d025c.jpg"   class="" data-copyright="Foto: SWR" alt="Ein Unternehmer möchte Pächter des Kloster Himmerod in der Eifel werden. (Foto: SWR)" title="Foto: SWR" width="320" height="320" loading="lazy" decoding="async"/>
</picture>
</a>
</div>
<h3 class="hgroup">
<a href="https://www.swrfernsehen.de/landesschau-rp/plaene-fuer-die-zukunft-des-klosters-himmerod-100.html" title="Ein Unternehmer soll Pächter des Klosters werden - Pläne für die Zukunft des Klosters Himmerod" class="teasertracking clickzone">
<span class="topline">Ein Unternehmer soll Pächter des Klosters werden</span>
<span class="headline">Pläne für die Zukunft des Klosters Himmerod</span>
</a>
</h3>
</header>
<a href="https://www.swrfernsehen.de/landesschau-rp/plaene-fuer-die-zukunft-des-klosters-himmerod-100.html" title="Ein Unternehmer soll Pächter des Klosters werden - Pläne für die Zukunft des Klosters Himmerod" class="teasertracking clickzone">
<div class="lead description">
<p>Die Gebäude des Kloster Himmerod sind marode, die Unterhaltung teuer. Der Unternehmer Wolfgang Scheidtweiler möchte Pächter des Klosters werden. Der Förderverein steht dem kritisch gegenüber.
</p>
</div>
</a>
<footer>
<p class="broadcastinfo">
<time content="2024-02-07T18:15">
<span class="date">
<abbr
title="Mittwoch">Mi.</abbr><span>7.2.2024</span></span>
<span class="time">18:15 Uhr</span>
</time>
<span>Landesschau Rheinland-Pfalz</span>
<span>
<span>SWR RP</span>
</span>
</p>
</footer>
</article>
</div>
<div class="col-sm-6 col-lg-4">
<article data-id="article-200-jahre-auswanderung-hunsrueck-brasilien-102"  class="teaser media-audio teaser-majestix teaser-broadcast broadcast-info-hidden broadcast-info-expired rubrik-swraktuell teaser-1by1"
data-crawler="ignore">
<script data-spy="piano" type="application/json">{"onsitead_advertiser":"200-jahre-auswanderung-hunsrueck-brasilien-102","onsitead_creation":"Warum in Brasilien Hunsrücker Dialekt gesprochen wird","onsitead_url":"https://www.swr.de/swraktuell/rheinland-pfalz/koblenz/200-jahre-auswanderung-hunsrueck-brasilien-102.html"}</script>
<header>
<mark>Simmern</mark>
<div class="image">
<a href="/swraktuell/rheinland-pfalz/koblenz/200-jahre-auswanderung-hunsrueck-brasilien-102.html" title="Jubiläumsjahr: 200 Jahre Auswanderung - Warum in Brasilien Hunsrücker Dialekt gesprochen wird" class="teasertracking clickzone" role="presentation" tabindex="-1">
<picture>
<source  srcset="/swraktuell/rheinland-pfalz/koblenz/1707313281036%2Causwanderer-hunsrueck-brasilien-neue-heimat-100~_v-1x1@2dXS_-9a91314e681c924f29ec89ca45e4e12f5b1d728e.jpg 320w,/swraktuell/rheinland-pfalz/koblenz/1707313281036%2Causwanderer-hunsrueck-brasilien-neue-heimat-100~_v-1x1@2dS_-4026684eab220e7fb9eb2f80f316da061f3d025c.jpg 480w"  sizes="(min-width: 768px) 300px, (min-width: 510px) 400px, calc(100vw - 152px)" width="320" height="320"/>
<img src="/swraktuell/rheinland-pfalz/koblenz/1707313281036%2Causwanderer-hunsrueck-brasilien-neue-heimat-100~_v-1x1@2dS_-4026684eab220e7fb9eb2f80f316da061f3d025c.jpg"   class="" data-copyright="Foto: dpa Bildfunk, Picture Alliance" alt="Aussiedler verlassen auf Pferdewagen den Hunsrück gen Brasilien in einer Szene des Kinofilms &#034;Die andere Heimat&#034; von Regisseur Edgar Reitz. (Foto: dpa Bildfunk, Picture Alliance)" title="Foto: dpa Bildfunk, Picture Alliance" width="320" height="320" loading="lazy" decoding="async"/>
</picture>
</a>
</div>
<h3 class="hgroup">
<a href="/swraktuell/rheinland-pfalz/koblenz/200-jahre-auswanderung-hunsrueck-brasilien-102.html" title="Jubiläumsjahr: 200 Jahre Auswanderung - Warum in Brasilien Hunsrücker Dialekt gesprochen wird" class="teasertracking clickzone">
<span class="topline">Jubiläumsjahr: 200 Jahre Auswanderung</span>
<span class="headline">Warum in Brasilien Hunsrücker Dialekt gesprochen wird</span>
</a>
</h3>
</header>
<a href="/swraktuell/rheinland-pfalz/koblenz/200-jahre-auswanderung-hunsrueck-brasilien-102.html" title="Jubiläumsjahr: 200 Jahre Auswanderung - Warum in Brasilien Hunsrücker Dialekt gesprochen wird" class="teasertracking clickzone">
<div class="lead description">
<p>Sich im Süden Brasiliens auf Deutsch unterhalten? Oft kein Problem, denn viele sprechen hier noch die Sprache ihrer Vorfahren. Vor 200 Jahren kamen sie dort an - viele aus dem Hunsrück.
</p>
</div>
</a>
<footer>
<p class="broadcastinfo">
<time content="2024-02-07T06:00">
<span class="date">
<abbr
title="Mittwoch">Mi.</abbr><span>7.2.2024</span></span>
<span class="time">6:00 Uhr</span>
</time>
<span>SWR4 RP am Morgen</span>
<span>
<span>SWR4 Rheinland-Pfalz</span>
</span>
</p>
</footer>
</article>
</div>
<div class="col-sm-6 col-lg-4">
<article data-id="article-schwarzer-mann-in-der-eifel-wenn-das-skigebiet-keinen-schnee-hat-100"  class="teaser media-video teaser-majestix teaser-broadcast broadcast-info-hidden broadcast-info-expired rubrik-swraktuell teaser-1by1"
data-crawler="ignore">
<script data-spy="piano" type="application/json">{"onsitead_advertiser":"schwarzer-mann-in-der-eifel-wenn-das-skigebiet-keinen-schnee-hat-100","onsitead_creation":"Schwarzer Mann: Wenn das Skigebiet irgendwann keinen Schnee hat","onsitead_url":"https://www.swr.de/swraktuell/rheinland-pfalz/trier/schwarzer-mann-in-der-eifel-wenn-das-skigebiet-keinen-schnee-hat-100.html"}</script>
<header>
<mark>Gondenbrett</mark>
<div class="image">
<a href="/swraktuell/rheinland-pfalz/trier/schwarzer-mann-in-der-eifel-wenn-das-skigebiet-keinen-schnee-hat-100.html" title="Winterkonzept 2.0 in der Eifel - Schwarzer Mann: Wenn das Skigebiet irgendwann keinen Schnee hat" class="teasertracking clickzone" role="presentation" tabindex="-1">
<picture>
<source  srcset="/swraktuell/rheinland-pfalz/trier/1707037383569%2Cschwarzer-mann-in-der-eifel-wenn-das-skigebiet-keinen-schnee-hat-108~_v-1x1@2dXS_-9a91314e681c924f29ec89ca45e4e12f5b1d728e.jpg 320w,/swraktuell/rheinland-pfalz/trier/1707037383569%2Cschwarzer-mann-in-der-eifel-wenn-das-skigebiet-keinen-schnee-hat-108~_v-1x1@2dS_-4026684eab220e7fb9eb2f80f316da061f3d025c.jpg 480w"  sizes="(min-width: 768px) 300px, (min-width: 510px) 400px, calc(100vw - 152px)" width="320" height="320"/>
<img src="/swraktuell/rheinland-pfalz/trier/1707037383569%2Cschwarzer-mann-in-der-eifel-wenn-das-skigebiet-keinen-schnee-hat-108~_v-1x1@2dS_-4026684eab220e7fb9eb2f80f316da061f3d025c.jpg"   class="" data-copyright="Foto: SWR, Nicole Mertes" alt="Auch am Schwarzen Mann in der Eifel werden die Schneetage immer weniger. (Foto: SWR, Nicole Mertes)" title="Foto: SWR, Nicole Mertes" width="320" height="320" loading="lazy" decoding="async"/>
</picture>
</a>
</div>
<h3 class="hgroup">
<a href="/swraktuell/rheinland-pfalz/trier/schwarzer-mann-in-der-eifel-wenn-das-skigebiet-keinen-schnee-hat-100.html" title="Winterkonzept 2.0 in der Eifel - Schwarzer Mann: Wenn das Skigebiet irgendwann keinen Schnee hat" class="teasertracking clickzone">
<span class="topline">Winterkonzept 2.0 in der Eifel</span>
<span class="headline">Schwarzer Mann: Wenn das Skigebiet irgendwann keinen Schnee hat</span>
</a>
</h3>
</header>
<a href="/swraktuell/rheinland-pfalz/trier/schwarzer-mann-in-der-eifel-wenn-das-skigebiet-keinen-schnee-hat-100.html" title="Winterkonzept 2.0 in der Eifel - Schwarzer Mann: Wenn das Skigebiet irgendwann keinen Schnee hat" class="teasertracking clickzone">
<div class="lead description">
<p>Damit Lifte nicht stehen bleiben, überlegen sich viele Skigebiete ein Sommerkonzept - so ist es auch am Schwarzen Mann. Aber was, wenn es auch jetzt im Winter keinen Schnee gibt?
</p>
</div>
</a>
<footer>
<p class="broadcastinfo">
<time content="2024-02-03T06:00">
<span class="date">
<abbr
title="Samstag">Sa.</abbr><span>3.2.2024</span></span>
<span class="time">6:00 Uhr</span>
</time>
<span>SWR4 RP am Morgen</span>
<span>
<span>SWR4 Rheinland-Pfalz</span>
</span>
</p>
</footer>
</article>
</div>
<div class="col-sm-6 col-lg-4">
<article data-id="article-hunsrueckquerbahn-sanierung-hoffnung-100"  class="teaser media-article teaser-majestix teaser-broadcast broadcast-info-hidden broadcast-info-expired rubrik-swraktuell teaser-mediaplayer teaser-1by1"
data-crawler="ignore">
<script data-spy="piano" type="application/json">{"onsitead_advertiser":"hunsrueckquerbahn-sanierung-hoffnung-100","onsitead_creation":"Politiker fordern Nahverkehr auf Hunsrückquerbahn","onsitead_url":"https://www.swr.de/swraktuell/rheinland-pfalz/koblenz/hunsrueckquerbahn-sanierung-hoffnung-100.html"}</script>
<header>
<mark>Simmern (Hunsrück)</mark>
<div id="teaser-mediaplayer-sanierung-der-hunsrueckquerbahn-weckt-hoffnung-auf-personenverkehr-100_3459"
class="audio" data-spy="teaser-mediaplayer"
data-config="https://www.swr.de/~mediaplayer/swraktuell/rheinland-pfalz/koblenz/sanierung-der-hunsrueckquerbahn-weckt-hoffnung-auf-personenverkehr-100.json"></div>
<div class="image">
<a href="/swraktuell/rheinland-pfalz/koblenz/hunsrueckquerbahn-sanierung-hoffnung-100.html" title="Bahn saniert Strecke für Güterverkehr - Politiker fordern Nahverkehr auf Hunsrückquerbahn" class="teasertracking clickzone" role="presentation" tabindex="-1">
<picture>
<source  srcset="/swraktuell/rheinland-pfalz/koblenz/1706114371966%2Chunsrueckquerbahn-sanierung-zug-100~_v-1x1@2dXS_-9a91314e681c924f29ec89ca45e4e12f5b1d728e.jpg 320w,/swraktuell/rheinland-pfalz/koblenz/1706114371966%2Chunsrueckquerbahn-sanierung-zug-100~_v-1x1@2dS_-4026684eab220e7fb9eb2f80f316da061f3d025c.jpg 480w"  sizes="(min-width: 768px) 300px, (min-width: 510px) 400px, calc(100vw - 152px)" width="320" height="320"/>
<img src="/swraktuell/rheinland-pfalz/koblenz/1706114371966%2Chunsrueckquerbahn-sanierung-zug-100~_v-1x1@2dS_-4026684eab220e7fb9eb2f80f316da061f3d025c.jpg"   class="" data-copyright="Foto: Nicolai Geller/ Pro Hunsrückquerbahn" alt="Ein Güterzug bringt neue Schienen in den Hunsrück. (Foto: Nicolai Geller/ Pro Hunsrückquerbahn)" title="Foto: Nicolai Geller/ Pro Hunsrückquerbahn" width="320" height="320" loading="lazy" decoding="async"/>
</picture>
</a>
</div>
<h3 class="hgroup">
<a href="/swraktuell/rheinland-pfalz/koblenz/hunsrueckquerbahn-sanierung-hoffnung-100.html" title="Bahn saniert Strecke für Güterverkehr - Politiker fordern Nahverkehr auf Hunsrückquerbahn" class="teasertracking clickzone">
<span class="topline">Bahn saniert Strecke für Güterverkehr</span>
<span class="headline">Politiker fordern Nahverkehr auf Hunsrückquerbahn</span>
</a>
</h3>
</header>
<a href="/swraktuell/rheinland-pfalz/koblenz/hunsrueckquerbahn-sanierung-hoffnung-100.html" title="Bahn saniert Strecke für Güterverkehr - Politiker fordern Nahverkehr auf Hunsrückquerbahn" class="teasertracking clickzone">
<div class="lead description">
<p>Die schon lange nicht mehr genutzte Hunsrückquerbahn wird gerade für den Güterverkehr saniert. Jetzt fordern Politiker, sie so auszubauen, dass dort auch Personenzüge fahren können.
</p>
</div>
</a>
<footer>
<p class="broadcastinfo">
<time content="2024-01-24T14:00">
<span class="date">
<abbr
title="Mittwoch">Mi.</abbr><span>24.1.2024</span></span>
<span class="time">14:00 Uhr</span>
</time>
<span>SWR4 am Nachmittag</span>
<span>
<span>SWR4</span>
</span>
</p>
</footer>
</article>
</div>
<div class="col-sm-6 col-lg-4">
<article data-id="article-keine-fernwaerme-aus-biogasanlage-in-eifeldorf-menschen-drohen-kalte-wohnungen-100"  class="teaser media-article teaser-majestix broadcast-info-hidden rubrik-swraktuell teaser-1by1"
data-crawler="ignore">
<script data-spy="piano" type="application/json">{"onsitead_advertiser":"keine-fernwaerme-aus-biogasanlage-in-eifeldorf-menschen-drohen-kalte-wohnungen-100","onsitead_creation":"Ein halbes Dorf in der Eifel könnte Ende des Jahres im Kalten sitzen","onsitead_url":"https://www.swr.de/swraktuell/rheinland-pfalz/trier/keine-fernwaerme-aus-biogasanlage-in-eifeldorf-menschen-drohen-kalte-wohnungen-100.html"}</script>
<header>
<mark>Scheidchen bei Lauperath</mark>
<div class="image">
<a href="/swraktuell/rheinland-pfalz/trier/keine-fernwaerme-aus-biogasanlage-in-eifeldorf-menschen-drohen-kalte-wohnungen-100.html" title="Biogasanlage soll abgeschaltet werden - Ein halbes Dorf in der Eifel könnte Ende des Jahres im Kalten sitzen" class="teasertracking clickzone" role="presentation" tabindex="-1">
<picture>
<source  srcset="/swraktuell/rheinland-pfalz/trier/1706884079295%2Ckeine-fernwaerme-aus-biogasanlage-in-eifeldorf-100~_v-1x1@2dXS_-9a91314e681c924f29ec89ca45e4e12f5b1d728e.jpg 320w,/swraktuell/rheinland-pfalz/trier/1706884079295%2Ckeine-fernwaerme-aus-biogasanlage-in-eifeldorf-100~_v-1x1@2dS_-4026684eab220e7fb9eb2f80f316da061f3d025c.jpg 480w"  sizes="(min-width: 768px) 300px, (min-width: 510px) 400px, calc(100vw - 152px)" width="320" height="320"/>
<img src="/swraktuell/rheinland-pfalz/trier/1706884079295%2Ckeine-fernwaerme-aus-biogasanlage-in-eifeldorf-100~_v-1x1@2dS_-4026684eab220e7fb9eb2f80f316da061f3d025c.jpg"   class="" data-copyright="Foto: SWR, Silja Friedrich" alt="Menschen in Scheidchen in der Eifel fürchten, nicht länger Fernwärme aus einer Biogasanlage zu bekommen, weil deren Förderung ausläuft. (Foto: SWR, Silja Friedrich)" title="Foto: SWR, Silja Friedrich" width="320" height="320" loading="lazy" decoding="async"/>
</picture>
</a>
</div>
<h3 class="hgroup">
<a href="/swraktuell/rheinland-pfalz/trier/keine-fernwaerme-aus-biogasanlage-in-eifeldorf-menschen-drohen-kalte-wohnungen-100.html" title="Biogasanlage soll abgeschaltet werden - Ein halbes Dorf in der Eifel könnte Ende des Jahres im Kalten sitzen" class="teasertracking clickzone">
<span class="topline">Biogasanlage soll abgeschaltet werden</span>
<span class="headline">Ein halbes Dorf in der Eifel könnte Ende des Jahres im Kalten sitzen</span>
</a>
</h3>
</header>
<a href="/swraktuell/rheinland-pfalz/trier/keine-fernwaerme-aus-biogasanlage-in-eifeldorf-menschen-drohen-kalte-wohnungen-100.html" title="Biogasanlage soll abgeschaltet werden - Ein halbes Dorf in der Eifel könnte Ende des Jahres im Kalten sitzen" class="teasertracking clickzone">
<div class="lead description">
<p>In Scheidchen bei Lauperath in der Eifel versorgt eine Biogasanlage das halbe Dorf mit Fernwärme. Noch. Denn die Anlage soll nach Ablauf ihrer Förderung abgeschaltet werden.
</p>
</div>
</a>
</article>
</div>
<div class="col-sm-6 col-lg-4">
<article data-id="imagegallery-trierer-archaeologen-machen-spannende-funde-auf-gelaende-der-zukuenftigen-hauptfeuerwache-trier-100"  class="teaser media-imagegallery teaser-majestix teaser-broadcast broadcast-info-hidden broadcast-info-expired rubrik-swraktuell teaser-1by1"
data-crawler="ignore">
<script data-spy="piano" type="application/json">{"onsitead_advertiser":"trierer-archaeologen-machen-spannende-funde-auf-gelaende-der-zukuenftigen-hauptfeuerwache-trier-100","onsitead_creation":"Spannende Funde auf dem Gelände der künftigen Hauptfeuerwache Trier ","onsitead_url":"https://www.swr.de/swraktuell/rheinland-pfalz/trier/trierer-archaeologen-machen-spannende-funde-auf-gelaende-der-zukuenftigen-hauptfeuerwache-trier-100.html"}</script>
<header>
<mark>Trier</mark>
<div class="image">
<a href="/swraktuell/rheinland-pfalz/trier/trierer-archaeologen-machen-spannende-funde-auf-gelaende-der-zukuenftigen-hauptfeuerwache-trier-100.html" title="Archäologen graben noch bis August  - Spannende Funde auf dem Gelände der künftigen Hauptfeuerwache Trier " class="teasertracking clickzone" role="presentation" tabindex="-1">
<picture>
<source  srcset="/swraktuell/rheinland-pfalz/trier/1705679961367%2Causgrabung-trier-ehemaliges-polizeipraesidium-landesmuseum-106~_v-1x1@2dXS_-9a91314e681c924f29ec89ca45e4e12f5b1d728e.jpg 320w,/swraktuell/rheinland-pfalz/trier/1705679961367%2Causgrabung-trier-ehemaliges-polizeipraesidium-landesmuseum-106~_v-1x1@2dS_-4026684eab220e7fb9eb2f80f316da061f3d025c.jpg 480w"  sizes="(min-width: 768px) 300px, (min-width: 510px) 400px, calc(100vw - 152px)" width="320" height="320"/>
<img src="/swraktuell/rheinland-pfalz/trier/1705679961367%2Causgrabung-trier-ehemaliges-polizeipraesidium-landesmuseum-106~_v-1x1@2dS_-4026684eab220e7fb9eb2f80f316da061f3d025c.jpg"   class="" data-copyright="Foto: SWR, Claudia Krell" alt="Archäologische Ausgrabungen in Trier am ehemaligen Polizeipräsidium. Spannende Funde  (Foto: SWR, Claudia Krell)" title="Foto: SWR, Claudia Krell" width="320" height="320" loading="lazy" decoding="async"/>
</picture>
</a>
</div>
<h3 class="hgroup">
<a href="/swraktuell/rheinland-pfalz/trier/trierer-archaeologen-machen-spannende-funde-auf-gelaende-der-zukuenftigen-hauptfeuerwache-trier-100.html" title="Archäologen graben noch bis August  - Spannende Funde auf dem Gelände der künftigen Hauptfeuerwache Trier " class="teasertracking clickzone">
<span class="topline">Archäologen graben noch bis August </span>
<span class="headline">Spannende Funde auf dem Gelände der künftigen Hauptfeuerwache Trier </span>
</a>
</h3>
</header>
<a href="/swraktuell/rheinland-pfalz/trier/trierer-archaeologen-machen-spannende-funde-auf-gelaende-der-zukuenftigen-hauptfeuerwache-trier-100.html" title="Archäologen graben noch bis August  - Spannende Funde auf dem Gelände der künftigen Hauptfeuerwache Trier " class="teasertracking clickzone">
<div class="lead description">
<p>Das Gelände des ehemaligen Polizeipräsidiums in Trier war in römischer Zeit ein chices Villenviertel. Bis August graben die Archäologen. Dann wird dort die Hauptfeuerwache gebaut.
</p>
</div>
</a>
<footer>
<p class="broadcastinfo">
<time content="2024-01-19T14:00">
<span class="date">
<abbr
title="Freitag">Fr.</abbr><span>19.1.2024</span></span>
<span class="time">14:00 Uhr</span>
</time>
<span>SWR4 am Nachmittag</span>
<span>
<span>SWR4</span>
</span>
</p>
</footer>
</article>
</div>
<div class="col-sm-6 col-lg-4">
<article data-id="video-anna-beckers-leben-wirkt-auch-20-jahre-nach-ihrem-tod-noch-nach-100"  class="teaser media-video teaser-majestix teaser-broadcast broadcast-info-hidden broadcast-info-expired rubrik-swrlandesschaurp teaser-1by1"
data-crawler="ignore">
<script data-spy="piano" type="application/json">{"onsitead_advertiser":"anna-beckers-leben-wirkt-auch-20-jahre-nach-ihrem-tod-noch-nach-100","onsitead_creation":"Anna Beckers Leben wirkt auch 20 Jahre nach ihrem Tod noch nach","onsitead_url":"https://www.swrfernsehen.de/landesschau-rp/anna-beckers-leben-wirkt-auch-20-jahre-nach-ihrem-tod-noch-nach-100.html"}</script>
<header>
<mark>Burgen</mark>
<div class="image">
<a href="https://www.swrfernsehen.de/landesschau-rp/anna-beckers-leben-wirkt-auch-20-jahre-nach-ihrem-tod-noch-nach-100.html" title="Sie legte damals Grundstein für Krebs-Verein gelegt - Anna Beckers Leben wirkt auch 20 Jahre nach ihrem Tod noch nach" class="teasertracking clickzone" role="presentation" tabindex="-1">
<picture>
<source  srcset="https://www.swrfernsehen.de/landesschau-rp/1700059021922%2Canna-beckers-leben-wirkt-auch-20-jahre-nach-ihrem-tod-noch-nach-102~_v-1x1@2dXS_-9a91314e681c924f29ec89ca45e4e12f5b1d728e.jpg 320w,https://www.swrfernsehen.de/landesschau-rp/1700059021922%2Canna-beckers-leben-wirkt-auch-20-jahre-nach-ihrem-tod-noch-nach-102~_v-1x1@2dS_-4026684eab220e7fb9eb2f80f316da061f3d025c.jpg 480w"  sizes="(min-width: 768px) 300px, (min-width: 510px) 400px, calc(100vw - 152px)" width="320" height="320"/>
<img src="https://www.swrfernsehen.de/landesschau-rp/1700059021922%2Canna-beckers-leben-wirkt-auch-20-jahre-nach-ihrem-tod-noch-nach-102~_v-1x1@2dS_-4026684eab220e7fb9eb2f80f316da061f3d025c.jpg"   class="" data-copyright="Foto: SWR" alt="Anna Becker legte vor ihrem Tod vor 20 Jahren den Grundstein für einen Verein, der Kinder und Familiem im Umgang mit Krebs unterstützt. (Foto: SWR)" title="Foto: SWR" width="320" height="320" loading="lazy" decoding="async"/>
</picture>
</a>
</div>
<h3 class="hgroup">
<a href="https://www.swrfernsehen.de/landesschau-rp/anna-beckers-leben-wirkt-auch-20-jahre-nach-ihrem-tod-noch-nach-100.html" title="Sie legte damals Grundstein für Krebs-Verein gelegt - Anna Beckers Leben wirkt auch 20 Jahre nach ihrem Tod noch nach" class="teasertracking clickzone">
<span class="topline">Sie legte damals Grundstein für Krebs-Verein gelegt</span>
<span class="headline">Anna Beckers Leben wirkt auch 20 Jahre nach ihrem Tod noch nach</span>
</a>
</h3>
</header>
<a href="https://www.swrfernsehen.de/landesschau-rp/anna-beckers-leben-wirkt-auch-20-jahre-nach-ihrem-tod-noch-nach-100.html" title="Sie legte damals Grundstein für Krebs-Verein gelegt - Anna Beckers Leben wirkt auch 20 Jahre nach ihrem Tod noch nach" class="teasertracking clickzone">
<div class="lead description">
<p>Vor 20 Jahren ist Anna Becker an Krebs gestorben. Vor ihrem Tod aber hat sie noch den Grundstein für einen Verein gelegt, der Familien im Umgang mit Krebs unterstützt.
</p>
</div>
</a>
<footer>
<p class="broadcastinfo">
<time content="2023-11-15T18:15">
<span class="date">
<abbr
title="Mittwoch">Mi.</abbr><span>15.11.2023</span></span>
<span class="time">18:15 Uhr</span>
</time>
<span>Landesschau Rheinland-Pfalz</span>
<span>
<span>SWR RP</span>
</span>
</p>
</footer>
</article>
</div>
<div class="col-sm-6 col-lg-4">
<article data-id="article-neue-laser-technologie-koennte-vor-felsstuerzen-wie-in-trier-kuenftig-warnen-100"  class="teaser media-article teaser-majestix teaser-broadcast broadcast-info-hidden broadcast-info-expired rubrik-swraktuell teaser-1by1"
data-crawler="ignore">
<script data-spy="piano" type="application/json">{"onsitead_advertiser":"neue-laser-technologie-koennte-vor-felsstuerzen-wie-in-trier-kuenftig-warnen-100","onsitead_creation":"Der Felsvermesser: Sein Laser sichert Trierer Steilwand","onsitead_url":"https://www.swr.de/swraktuell/rheinland-pfalz/trier/neue-laser-technologie-koennte-vor-felsstuerzen-wie-in-trier-kuenftig-warnen-100.html"}</script>
<header>
<mark>Trier</mark>
<div class="image">
<a href="/swraktuell/rheinland-pfalz/trier/neue-laser-technologie-koennte-vor-felsstuerzen-wie-in-trier-kuenftig-warnen-100.html" title="Neue Technik - Der Felsvermesser: Sein Laser sichert Trierer Steilwand" class="teasertracking clickzone" role="presentation" tabindex="-1">
<picture>
<source  srcset="/swraktuell/rheinland-pfalz/trier/1702552312869%2Cforscher-vermessen-und-ueberwachen-trierer-roten-fels-mit-laser-um-vor-felsstuerzen-zu-warnen-104~_v-1x1@2dXS_-9a91314e681c924f29ec89ca45e4e12f5b1d728e.jpg 320w,/swraktuell/rheinland-pfalz/trier/1702552312869%2Cforscher-vermessen-und-ueberwachen-trierer-roten-fels-mit-laser-um-vor-felsstuerzen-zu-warnen-104~_v-1x1@2dS_-4026684eab220e7fb9eb2f80f316da061f3d025c.jpg 480w"  sizes="(min-width: 768px) 300px, (min-width: 510px) 400px, calc(100vw - 152px)" width="320" height="320"/>
<img src="/swraktuell/rheinland-pfalz/trier/1702552312869%2Cforscher-vermessen-und-ueberwachen-trierer-roten-fels-mit-laser-um-vor-felsstuerzen-zu-warnen-104~_v-1x1@2dS_-4026684eab220e7fb9eb2f80f316da061f3d025c.jpg"   class="" data-copyright="Foto: SWR, Ludger Peters" alt="Forscher überwachen einen Trierer Fels mit Lasertechnologie um vor Felsstürzen zu warnen (Foto: SWR, Ludger Peters)" title="Foto: SWR, Ludger Peters" width="320" height="320" loading="lazy" decoding="async"/>
</picture>
</a>
</div>
<h3 class="hgroup">
<a href="/swraktuell/rheinland-pfalz/trier/neue-laser-technologie-koennte-vor-felsstuerzen-wie-in-trier-kuenftig-warnen-100.html" title="Neue Technik - Der Felsvermesser: Sein Laser sichert Trierer Steilwand" class="teasertracking clickzone">
<span class="topline">Neue Technik</span>
<span class="headline">Der Felsvermesser: Sein Laser sichert Trierer Steilwand</span>
</a>
</h3>
</header>
<a href="/swraktuell/rheinland-pfalz/trier/neue-laser-technologie-koennte-vor-felsstuerzen-wie-in-trier-kuenftig-warnen-100.html" title="Neue Technik - Der Felsvermesser: Sein Laser sichert Trierer Steilwand" class="teasertracking clickzone">
<div class="lead description">
<p>Der Trierer rote Fels auf der linken Moselseite wird jetzt mit Hilfe einer Lasertechnologie überwacht. So will ein Forscherteam jede noch so kleine Bewegung des Gesteins erkennen.
</p>
</div>
</a>
<footer>
<p class="broadcastinfo">
<time content="2023-12-14T10:00">
<span class="date">
<abbr
title="Donnerstag">Do.</abbr><span>14.12.2023</span></span>
<span class="time">10:00 Uhr</span>
</time>
<span>SWR4 RP am Donnerstag</span>
<span>
<span>SWR4 Rheinland-Pfalz</span>
</span>
</p>
</footer>
</article>
</div>
<div class="col-sm-6 col-lg-4">
<article data-id="video-brasilianer-forscht-an-der-mosel-nach-ahnen-100"  class="teaser media-video teaser-majestix teaser-broadcast broadcast-info-hidden broadcast-info-expired rubrik-swrlandesschaurp teaser-1by1"
data-crawler="ignore">
<script data-spy="piano" type="application/json">{"onsitead_advertiser":"brasilianer-forscht-an-der-mosel-nach-ahnen-100","onsitead_creation":"Brasilianer forscht an der Mosel nach Ahnen","onsitead_url":"https://www.swrfernsehen.de/landesschau-rp/brasilianer-forscht-an-der-mosel-nach-ahnen-100.html"}</script>
<header>
<div class="image">
<a href="https://www.swrfernsehen.de/landesschau-rp/brasilianer-forscht-an-der-mosel-nach-ahnen-100.html" title="Vorfahren vor 200 Jahren ausgewandert - Brasilianer forscht an der Mosel nach Ahnen" class="teasertracking clickzone" role="presentation" tabindex="-1">
<picture>
<source  srcset="https://www.swrfernsehen.de/landesschau-rp/1702315599348%2Cvor-200-jahren-ausgewandert-brasilianer-forscht-an-der-mosel-nach-ahnen-102~_v-1x1@2dXS_-9a91314e681c924f29ec89ca45e4e12f5b1d728e.jpg 320w,https://www.swrfernsehen.de/landesschau-rp/1702315599348%2Cvor-200-jahren-ausgewandert-brasilianer-forscht-an-der-mosel-nach-ahnen-102~_v-1x1@2dS_-4026684eab220e7fb9eb2f80f316da061f3d025c.jpg 480w"  sizes="(min-width: 768px) 300px, (min-width: 510px) 400px, calc(100vw - 152px)" width="320" height="320"/>
<img src="https://www.swrfernsehen.de/landesschau-rp/1702315599348%2Cvor-200-jahren-ausgewandert-brasilianer-forscht-an-der-mosel-nach-ahnen-102~_v-1x1@2dS_-4026684eab220e7fb9eb2f80f316da061f3d025c.jpg"   class="" data-copyright="Foto: SWR" alt="Brasilianischer Ahnenforscher Felipe Kuhn (Foto: SWR)" title="Foto: SWR" width="320" height="320" loading="lazy" decoding="async"/>
</picture>
</a>
</div>
<h3 class="hgroup">
<a href="https://www.swrfernsehen.de/landesschau-rp/brasilianer-forscht-an-der-mosel-nach-ahnen-100.html" title="Vorfahren vor 200 Jahren ausgewandert - Brasilianer forscht an der Mosel nach Ahnen" class="teasertracking clickzone">
<span class="topline">Vorfahren vor 200 Jahren ausgewandert</span>
<span class="headline">Brasilianer forscht an der Mosel nach Ahnen</span>
</a>
</h3>
</header>
<a href="https://www.swrfernsehen.de/landesschau-rp/brasilianer-forscht-an-der-mosel-nach-ahnen-100.html" title="Vorfahren vor 200 Jahren ausgewandert - Brasilianer forscht an der Mosel nach Ahnen" class="teasertracking clickzone">
<div class="lead description">
<p>Felipe Kuhn Brauns Ahnen haben sich vor rund 200 Jahren auf den Weg nach Brasilien gemacht, um in der Ferne ein neues Leben zu beginnen.
</p>
</div>
</a>
<footer>
<p class="broadcastinfo">
<time content="2023-12-11T18:15">
<span class="date">
<abbr
title="Montag">Mo.</abbr><span>11.12.2023</span></span>
<span class="time">18:15 Uhr</span>
</time>
<span>Landesschau Rheinland-Pfalz</span>
<span>
<span>SWR RP</span>
</span>
</p>
</footer>
</article>
</div>
<div class="col-sm-6 col-lg-4">
<article data-id="article-hosanna-proben-fuer-passionsspiele-wallersheim-laufen-100"  class="teaser media-article teaser-majestix teaser-broadcast broadcast-info-hidden broadcast-info-expired rubrik-swraktuell teaser-1by1"
data-crawler="ignore">
<script data-spy="piano" type="application/json">{"onsitead_advertiser":"hosanna-proben-fuer-passionsspiele-wallersheim-laufen-100","onsitead_creation":"Hosanna! Proben für Passionsspiele Wallersheim laufen","onsitead_url":"https://www.swr.de/swraktuell/rheinland-pfalz/trier/hosanna-proben-fuer-passionsspiele-wallersheim-laufen-100.html"}</script>
<header>
<mark>Wallersheim</mark>
<div class="image">
<a href="/swraktuell/rheinland-pfalz/trier/hosanna-proben-fuer-passionsspiele-wallersheim-laufen-100.html" title="Laienstück zum achten Mal seit 1987 in der Eifel - Hosanna! Proben für Passionsspiele Wallersheim laufen" class="teasertracking clickzone" role="presentation" tabindex="-1">
<picture>
<source  srcset="/swraktuell/rheinland-pfalz/trier/1700383682703%2Cpassionsspiele-wallersheim-110~_v-1x1@2dXS_-9a91314e681c924f29ec89ca45e4e12f5b1d728e.jpg 320w,/swraktuell/rheinland-pfalz/trier/1700383682703%2Cpassionsspiele-wallersheim-110~_v-1x1@2dS_-4026684eab220e7fb9eb2f80f316da061f3d025c.jpg 480w"  sizes="(min-width: 768px) 300px, (min-width: 510px) 400px, calc(100vw - 152px)" width="320" height="320"/>
<img src="/swraktuell/rheinland-pfalz/trier/1700383682703%2Cpassionsspiele-wallersheim-110~_v-1x1@2dS_-4026684eab220e7fb9eb2f80f316da061f3d025c.jpg"   class="" data-copyright="Foto: SWR, Anna-Carina Blessmann" alt="Die Darsteller in bunten Gewändern auf der Bühne der Passionsspiele Wallersheim. (Foto: SWR, Anna-Carina Blessmann)" title="Foto: SWR, Anna-Carina Blessmann" width="320" height="320" loading="lazy" decoding="async"/>
</picture>
</a>
</div>
<h3 class="hgroup">
<a href="/swraktuell/rheinland-pfalz/trier/hosanna-proben-fuer-passionsspiele-wallersheim-laufen-100.html" title="Laienstück zum achten Mal seit 1987 in der Eifel - Hosanna! Proben für Passionsspiele Wallersheim laufen" class="teasertracking clickzone">
<span class="topline">Laienstück zum achten Mal seit 1987 in der Eifel</span>
<span class="headline">Hosanna! Proben für Passionsspiele Wallersheim laufen</span>
</a>
</h3>
</header>
<a href="/swraktuell/rheinland-pfalz/trier/hosanna-proben-fuer-passionsspiele-wallersheim-laufen-100.html" title="Laienstück zum achten Mal seit 1987 in der Eifel - Hosanna! Proben für Passionsspiele Wallersheim laufen" class="teasertracking clickzone">
<div class="lead description">
<p>Etwa alle fünf Jahre verwandelt sich die Kirche St. Nikolaus Wallersheim in Jerusalem mit dem Ölberg. Auch jetzt proben wieder 100 Laiendarsteller für Ostern das Leiden Christi.
</p>
</div>
</a>
<footer>
<p class="broadcastinfo">
<time content="2023-11-18T12:40">
<span class="date">
<abbr
title="Samstag">Sa.</abbr><span>18.11.2023</span></span>
<span class="time">12:40 Uhr</span>
</time>
<span>SWR2 Journal am Mittag</span>
<span>
<span>SWR2</span>
</span>
</p>
</footer>
</article>
</div>
</div>
</div>
</div>
<div class="container">
<div class="row">
<div class="col-xs-12"
>
<article data-id="teaser-wetter-in-der-region-trier-im-februar-100"  class="teaser media-article teaser-special rubrik-swraktuell"
data-crawler="ignore">
<script data-spy="piano" type="application/json">{"onsitead_advertiser":"wetter-in-der-region-trier-im-februar-100","onsitead_creation":"Wetter in der Region Trier","onsitead_url":"https://www.swr.de/wetter/wetter-liste-swr-100.html"}</script>
<header>
<mark>Meerfeld</mark>
<div class="image">
<a href="/wetter/wetter-liste-swr-100.html" title="Service - Wetter in der Region Trier" class="teasertracking clickzone" role="presentation" tabindex="-1">
<picture>
<source  media="(min-width: 1200px)" srcset="/swraktuell/rheinland-pfalz/trier/1707221115979%2Cwetterbild-meerfelder-maar-eifel-100~_v-16x7@2dM_-03f2ec8e043634bddf06d1d3200e0f3e485744ee.jpg 768w,/swraktuell/rheinland-pfalz/trier/1707221115979%2Cwetterbild-meerfelder-maar-eifel-100~_v-16x7@2dL_-594eb175bf96444e7f86c89c3d9f78feed295e4a.jpg 1440w,/swraktuell/rheinland-pfalz/trier/1707221115979%2Cwetterbild-meerfelder-maar-eifel-100~_v-16x7@2dXL_-a253d9ef734ceed2dcb1222775e1f0a268339ea8.jpg 1920w"  sizes="(min-width: 1200px) 1000px" width="768" height="336"/>
<source  media="(min-width: 768px)" srcset="/swraktuell/rheinland-pfalz/trier/1707221115979%2Cwetterbild-meerfelder-maar-eifel-100~_v-16x9@2dS_-6be50a9c75559ca1aaf1d0b25bae287afdcd877a.jpg 480w,/swraktuell/rheinland-pfalz/trier/1707221115979%2Cwetterbild-meerfelder-maar-eifel-100~_v-16x9@2dM_-ad6791ade5eb8b5c935dd377130b903c4b5781d8.jpg 768w"  sizes="(min-width: 768px) 750px" width="480" height="270"/>
<source  srcset="/swraktuell/rheinland-pfalz/trier/1707221115979%2Cwetterbild-meerfelder-maar-eifel-100~_v-1x1@2dXS_-9a91314e681c924f29ec89ca45e4e12f5b1d728e.jpg 320w,/swraktuell/rheinland-pfalz/trier/1707221115979%2Cwetterbild-meerfelder-maar-eifel-100~_v-1x1@2dS_-4026684eab220e7fb9eb2f80f316da061f3d025c.jpg 480w,/swraktuell/rheinland-pfalz/trier/1707221115979%2Cwetterbild-meerfelder-maar-eifel-100~_v-1x1@2dM_-733e4a95d343c52e922dfd8e3ff26ae78b29e5be.jpg 768w"  sizes="(min-width: 510px) 500px, calc(100vw - 32px)" width="320" height="320"/>
<img src="/swraktuell/rheinland-pfalz/trier/1707221115979%2Cwetterbild-meerfelder-maar-eifel-100~_v-1x1@2dM_-733e4a95d343c52e922dfd8e3ff26ae78b29e5be.jpg"   class="" data-copyright="Foto: SWR, Claudia Krell" alt="Das Meerfelder Maar in der Eifel.  (Foto: SWR, Claudia Krell)" title="Foto: SWR, Claudia Krell" width="320" height="320" loading="lazy" decoding="async"/>
</picture>
</a>
</div>
<h2 class="hgroup">
<a href="/wetter/wetter-liste-swr-100.html" title="Service - Wetter in der Region Trier" class="teasertracking clickzone">
<span class="topline">Service</span>
<span class="headline">Wetter in der Region Trier</span>
</a>
</h2>
</header>
<a href="/wetter/wetter-liste-swr-100.html" title="Service - Wetter in der Region Trier" class="teasertracking clickzone">
<div class="lead description">
<p>Wetter
</p>
</div>
</a>
</article>
</div>
</div>
</div>
<div class="container">
<div class="row">
<h2>Mehr Filme aus der Region</h2>
<div class="teasercarousel" aria-roledescription="carousel" data-spy="teasercarousel"
>
<div class="col-sm-6 col-lg-4">
<article data-id="video-marathoni-samuel-fitwi-vom-fluechtling-zu-olympia-paris-100"  class="teaser media-video teaser-majestix teaser-broadcast broadcast-info-hidden broadcast-info-expired rubrik-swrlandesschaurp teaser-1by1"
data-crawler="ignore">
<script data-spy="piano" type="application/json">{"onsitead_advertiser":"marathoni-samuel-fitwi-vom-fluechtling-zu-olympia-paris-100","onsitead_creation":"Vom Flüchtling zur deutschen Marathonhoffnung: Samuel Fitwi","onsitead_url":"https://www.swrfernsehen.de/landesschau-rp/marathoni-samuel-fitwi-vom-fluechtling-zu-olympia-paris-100.html"}</script>
<header>
<mark>Gerolstein</mark>
<div class="image">
<a href="https://www.swrfernsehen.de/landesschau-rp/marathoni-samuel-fitwi-vom-fluechtling-zu-olympia-paris-100.html" title="Teilnehmer an Olympischen Spielen 2024 in Paris - Vom Flüchtling zur deutschen Marathonhoffnung: Samuel Fitwi" class="teasertracking clickzone" role="presentation" tabindex="-1">
<picture>
<source  srcset="https://www.swrfernsehen.de/landesschau-rp/1706545047422%2Csamuel-fitwi-vom-fluechtling-zum-olympioniken-102~_v-1x1@2dXS_-9a91314e681c924f29ec89ca45e4e12f5b1d728e.png 320w,https://www.swrfernsehen.de/landesschau-rp/1706545047422%2Csamuel-fitwi-vom-fluechtling-zum-olympioniken-102~_v-1x1@2dS_-4026684eab220e7fb9eb2f80f316da061f3d025c.png 480w"  sizes="(min-width: 768px) 300px, (min-width: 510px) 400px, calc(100vw - 152px)" width="320" height="320"/>
<img src="https://www.swrfernsehen.de/landesschau-rp/1706545047422%2Csamuel-fitwi-vom-fluechtling-zum-olympioniken-102~_v-1x1@2dS_-4026684eab220e7fb9eb2f80f316da061f3d025c.png"   class="" data-copyright="Foto: SWR" alt="Samuel Fitwi (Foto: SWR)" title="Foto: SWR" width="320" height="320" loading="lazy" decoding="async"/>
</picture>
</a>
</div>
<h3 class="hgroup">
<a href="https://www.swrfernsehen.de/landesschau-rp/marathoni-samuel-fitwi-vom-fluechtling-zu-olympia-paris-100.html" title="Teilnehmer an Olympischen Spielen 2024 in Paris - Vom Flüchtling zur deutschen Marathonhoffnung: Samuel Fitwi" class="teasertracking clickzone">
<span class="topline">Teilnehmer an Olympischen Spielen 2024 in Paris</span>
<span class="headline">Vom Flüchtling zur deutschen Marathonhoffnung: Samuel Fitwi</span>
</a>
</h3>
</header>
<a href="https://www.swrfernsehen.de/landesschau-rp/marathoni-samuel-fitwi-vom-fluechtling-zu-olympia-paris-100.html" title="Teilnehmer an Olympischen Spielen 2024 in Paris - Vom Flüchtling zur deutschen Marathonhoffnung: Samuel Fitwi" class="teasertracking clickzone">
<div class="lead description">
<p>Als Flüchtling kam Samuel Fitwi 2013 aus Eritrea in die Eifel. Im Sommer wird er Deutschland bei den Olympischen Spielen in Paris im Marathon vertreten.
</p>
</div>
</a>
<footer>
<p class="broadcastinfo">
<time content="2024-01-29T18:15">
<span class="date">
<abbr
title="Montag">Mo.</abbr><span>29.1.2024</span></span>
<span class="time">18:15 Uhr</span>
</time>
<span>Landesschau Rheinland-Pfalz</span>
<span>
<span>SWR RP</span>
</span>
</p>
</footer>
</article>
</div>
<div class="col-sm-6 col-lg-4">
<article data-id="video-hunsruecker-baecker-verkauft-brot-aus-dem-automaten-100"  class="teaser media-video teaser-majestix teaser-broadcast broadcast-info-hidden broadcast-info-expired rubrik-swrlandesschaurp teaser-1by1"
data-crawler="ignore">
<script data-spy="piano" type="application/json">{"onsitead_advertiser":"hunsruecker-baecker-verkauft-brot-aus-dem-automaten-100","onsitead_creation":"Hunsrücker Bäcker verkauft Brot aus dem Automaten","onsitead_url":"https://www.swrfernsehen.de/landesschau-rp/hunsruecker-baecker-verkauft-brot-aus-dem-automaten-100.html"}</script>
<header>
<mark>Blankenrath</mark>
<div class="image">
<a href="https://www.swrfernsehen.de/landesschau-rp/hunsruecker-baecker-verkauft-brot-aus-dem-automaten-100.html" title="Frisches Brot trotz Personalmangels - Hunsrücker Bäcker verkauft Brot aus dem Automaten" class="teasertracking clickzone" role="presentation" tabindex="-1">
<picture>
<source  srcset="https://www.swrfernsehen.de/landesschau-rp/1706030182996%2Chunsruecker-baecker-verkauft-brot-aus-dem-automaten-102~_v-1x1@2dXS_-9a91314e681c924f29ec89ca45e4e12f5b1d728e.jpg 320w,https://www.swrfernsehen.de/landesschau-rp/1706030182996%2Chunsruecker-baecker-verkauft-brot-aus-dem-automaten-102~_v-1x1@2dS_-4026684eab220e7fb9eb2f80f316da061f3d025c.jpg 480w"  sizes="(min-width: 768px) 300px, (min-width: 510px) 400px, calc(100vw - 152px)" width="320" height="320"/>
<img src="https://www.swrfernsehen.de/landesschau-rp/1706030182996%2Chunsruecker-baecker-verkauft-brot-aus-dem-automaten-102~_v-1x1@2dS_-4026684eab220e7fb9eb2f80f316da061f3d025c.jpg"   class="" data-copyright="Foto: SWR" alt="Der Bäcker Christopher Reis befüllt seinen Verkaufsautomaten mit frischem Brot. (Foto: SWR)" title="Foto: SWR" width="320" height="320" loading="lazy" decoding="async"/>
</picture>
</a>
</div>
<h3 class="hgroup">
<a href="https://www.swrfernsehen.de/landesschau-rp/hunsruecker-baecker-verkauft-brot-aus-dem-automaten-100.html" title="Frisches Brot trotz Personalmangels - Hunsrücker Bäcker verkauft Brot aus dem Automaten" class="teasertracking clickzone">
<span class="topline">Frisches Brot trotz Personalmangels</span>
<span class="headline">Hunsrücker Bäcker verkauft Brot aus dem Automaten</span>
</a>
</h3>
</header>
<a href="https://www.swrfernsehen.de/landesschau-rp/hunsruecker-baecker-verkauft-brot-aus-dem-automaten-100.html" title="Frisches Brot trotz Personalmangels - Hunsrücker Bäcker verkauft Brot aus dem Automaten" class="teasertracking clickzone">
<div class="lead description">
<p>Der Blankenrather Bäcker Christopher Reis hat einen Verkaufsautomaten aufgestellt, um seinen Kunden trotz Personalmangels auch nachmittags frische Backwaren anbieten zu können.
</p>
</div>
</a>
<footer>
<p class="broadcastinfo">
<time content="2024-01-23T18:15">
<span class="date">
<abbr
title="Dienstag">Di.</abbr><span>23.1.2024</span></span>
<span class="time">18:15 Uhr</span>
</time>
<span>Landesschau Rheinland-Pfalz</span>
<span>
<span>SWR RP</span>
</span>
</p>
</footer>
</article>
</div>
<div class="col-sm-6 col-lg-4">
<article data-id="video-bei-schnee-veranstaltet-familie-groesser-taeglich-eine-apres-ski-party-100"  class="teaser media-video teaser-majestix teaser-broadcast broadcast-info-hidden broadcast-info-expired rubrik-swrlandesschaurp teaser-1by1"
data-crawler="ignore">
<script data-spy="piano" type="application/json">{"onsitead_advertiser":"bei-schnee-veranstaltet-familie-groesser-taeglich-eine-apres-ski-party-100","onsitead_creation":"Rodelparadies und Hüttenzauber im eigenen Garten","onsitead_url":"https://www.swrfernsehen.de/landesschau-rp/bei-schnee-veranstaltet-familie-groesser-taeglich-eine-apres-ski-party-100.html"}</script>
<header>
<mark>Veitsrodt</mark>
<div class="image">
<a href="https://www.swrfernsehen.de/landesschau-rp/bei-schnee-veranstaltet-familie-groesser-taeglich-eine-apres-ski-party-100.html" title="Après Ski in Veitsrodt - Rodelparadies und Hüttenzauber im eigenen Garten" class="teasertracking clickzone" role="presentation" tabindex="-1">
<picture>
<source  srcset="https://www.swrfernsehen.de/landesschau-rp/1705675738442%2Cbei-schnee-veranstaltet-familie-groesser-taeglich-eine-apres-ski-party-102~_v-1x1@2dXS_-9a91314e681c924f29ec89ca45e4e12f5b1d728e.jpg 320w,https://www.swrfernsehen.de/landesschau-rp/1705675738442%2Cbei-schnee-veranstaltet-familie-groesser-taeglich-eine-apres-ski-party-102~_v-1x1@2dS_-4026684eab220e7fb9eb2f80f316da061f3d025c.jpg 480w"  sizes="(min-width: 768px) 300px, (min-width: 510px) 400px, calc(100vw - 152px)" width="320" height="320"/>
<img src="https://www.swrfernsehen.de/landesschau-rp/1705675738442%2Cbei-schnee-veranstaltet-familie-groesser-taeglich-eine-apres-ski-party-102~_v-1x1@2dS_-4026684eab220e7fb9eb2f80f316da061f3d025c.jpg"   class="" data-copyright="Foto: SWR" alt="Spaß auf dem Rodelhang der &#034;Grösser Alm&#034; in Veitsrodt. (Foto: SWR)" title="Foto: SWR" width="320" height="320" loading="lazy" decoding="async"/>
</picture>
</a>
</div>
<h3 class="hgroup">
<a href="https://www.swrfernsehen.de/landesschau-rp/bei-schnee-veranstaltet-familie-groesser-taeglich-eine-apres-ski-party-100.html" title="Après Ski in Veitsrodt - Rodelparadies und Hüttenzauber im eigenen Garten" class="teasertracking clickzone">
<span class="topline">Après Ski in Veitsrodt</span>
<span class="headline">Rodelparadies und Hüttenzauber im eigenen Garten</span>
</a>
</h3>
</header>
<a href="https://www.swrfernsehen.de/landesschau-rp/bei-schnee-veranstaltet-familie-groesser-taeglich-eine-apres-ski-party-100.html" title="Après Ski in Veitsrodt - Rodelparadies und Hüttenzauber im eigenen Garten" class="teasertracking clickzone">
<div class="lead description">
<p>So bald Schnee liegt, lädt Familie Grösser Freunde und Bekannten zum Rodeln und Feiern in ihren Garten ein. Hinter ihrem Haus gibt es einen tollen Rodelhang.
</p>
</div>
</a>
<footer>
<p class="broadcastinfo">
<time content="2024-01-19T18:15">
<span class="date">
<abbr
title="Freitag">Fr.</abbr><span>19.1.2024</span></span>
<span class="time">18:15 Uhr</span>
</time>
<span>Landesschau Rheinland-Pfalz</span>
<span>
<span>SWR RP</span>
</span>
</p>
</footer>
</article>
</div>
<div class="col-sm-6 col-lg-4">
<article data-id="video-skat-verein-trifft-sich-jede-woche-zum-spielen-in-wirtshaus-100"  class="teaser media-video teaser-majestix teaser-broadcast broadcast-info-hidden broadcast-info-expired rubrik-swrlandesschaurp teaser-1by1"
data-crawler="ignore">
<script data-spy="piano" type="application/json">{"onsitead_advertiser":"skat-verein-trifft-sich-jede-woche-zum-spielen-in-wirtshaus-100","onsitead_creation":"Skat-Verein trifft sich jede Woche zum Spielen in Wirtshaus","onsitead_url":"https://www.swrfernsehen.de/landesschau-rp/skat-verein-trifft-sich-jede-woche-zum-spielen-in-wirtshaus-100.html"}</script>
<header>
<mark>Hetzerath</mark>
<div class="image">
<a href="https://www.swrfernsehen.de/landesschau-rp/skat-verein-trifft-sich-jede-woche-zum-spielen-in-wirtshaus-100.html" title="Eldorado für Skatbegeisterte - Skat-Verein trifft sich jede Woche zum Spielen in Wirtshaus" class="teasertracking clickzone" role="presentation" tabindex="-1">
<picture>
<source  srcset="https://www.swrfernsehen.de/landesschau-rp/1704903422738%2Cskat-verein-trifft-sich-jede-woche-zum-spielen-in-wirtshaus-102~_v-1x1@2dXS_-9a91314e681c924f29ec89ca45e4e12f5b1d728e.jpg 320w,https://www.swrfernsehen.de/landesschau-rp/1704903422738%2Cskat-verein-trifft-sich-jede-woche-zum-spielen-in-wirtshaus-102~_v-1x1@2dS_-4026684eab220e7fb9eb2f80f316da061f3d025c.jpg 480w"  sizes="(min-width: 768px) 300px, (min-width: 510px) 400px, calc(100vw - 152px)" width="320" height="320"/>
<img src="https://www.swrfernsehen.de/landesschau-rp/1704903422738%2Cskat-verein-trifft-sich-jede-woche-zum-spielen-in-wirtshaus-102~_v-1x1@2dS_-4026684eab220e7fb9eb2f80f316da061f3d025c.jpg"   class="" data-copyright="Foto: SWR" alt="Montagabends wird das Gasthaus Paltzer in der Eifel zum Eldorado für Skatbegeisterte. (Foto: SWR)" title="Foto: SWR" width="320" height="320" loading="lazy" decoding="async"/>
</picture>
</a>
</div>
<h3 class="hgroup">
<a href="https://www.swrfernsehen.de/landesschau-rp/skat-verein-trifft-sich-jede-woche-zum-spielen-in-wirtshaus-100.html" title="Eldorado für Skatbegeisterte - Skat-Verein trifft sich jede Woche zum Spielen in Wirtshaus" class="teasertracking clickzone">
<span class="topline">Eldorado für Skatbegeisterte</span>
<span class="headline">Skat-Verein trifft sich jede Woche zum Spielen in Wirtshaus</span>
</a>
</h3>
</header>
<a href="https://www.swrfernsehen.de/landesschau-rp/skat-verein-trifft-sich-jede-woche-zum-spielen-in-wirtshaus-100.html" title="Eldorado für Skatbegeisterte - Skat-Verein trifft sich jede Woche zum Spielen in Wirtshaus" class="teasertracking clickzone">
<div class="lead description">
<p>Montagabends wird das Gasthaus Paltzer in der Eifel zum Eldorado für Skatbegeisterte. Mindestens 40 Leute sind dabei, kommen oft auch von weiter her.
</p>
</div>
</a>
<footer>
<p class="broadcastinfo">
<time content="2024-01-10T18:15">
<span class="date">
<abbr
title="Mittwoch">Mi.</abbr><span>10.1.2024</span></span>
<span class="time">18:15 Uhr</span>
</time>
<span>Landesschau Rheinland-Pfalz</span>
<span>
<span>SWR RP</span>
</span>
</p>
</footer>
</article>
</div>
<div class="col-sm-6 col-lg-4">
<article data-id="video-im-troedelladen-von-rafael-graw-100"  class="teaser media-video teaser-majestix teaser-broadcast broadcast-info-hidden broadcast-info-expired rubrik-swrlandesschaurp teaser-1by1"
data-crawler="ignore">
<script data-spy="piano" type="application/json">{"onsitead_advertiser":"im-troedelladen-von-rafael-graw-100","onsitead_creation":"Im Trödelladen von Rafael Graw","onsitead_url":"https://www.swrfernsehen.de/landesschau-rp/im-troedelladen-von-rafael-graw-100.html"}</script>
<header>
<mark>Schönecken</mark>
<div class="image">
<a href="https://www.swrfernsehen.de/landesschau-rp/im-troedelladen-von-rafael-graw-100.html" title="Lehrer erfüllt sich Traum - Im Trödelladen von Rafael Graw" class="teasertracking clickzone" role="presentation" tabindex="-1">
<picture>
<source  srcset="https://www.swrfernsehen.de/landesschau-rp/1704364051456%2Cim-troedelladen-von-rafael-graw-102~_v-1x1@2dXS_-9a91314e681c924f29ec89ca45e4e12f5b1d728e.jpg 320w,https://www.swrfernsehen.de/landesschau-rp/1704364051456%2Cim-troedelladen-von-rafael-graw-102~_v-1x1@2dS_-4026684eab220e7fb9eb2f80f316da061f3d025c.jpg 480w"  sizes="(min-width: 768px) 300px, (min-width: 510px) 400px, calc(100vw - 152px)" width="320" height="320"/>
<img src="https://www.swrfernsehen.de/landesschau-rp/1704364051456%2Cim-troedelladen-von-rafael-graw-102~_v-1x1@2dS_-4026684eab220e7fb9eb2f80f316da061f3d025c.jpg"   class="" data-copyright="Foto: SWR" alt="Rafael Graw hat sich den Traum vom eigenen Trödelladen erfüllt. (Foto: SWR)" title="Foto: SWR" width="320" height="320" loading="lazy" decoding="async"/>
</picture>
</a>
</div>
<h3 class="hgroup">
<a href="https://www.swrfernsehen.de/landesschau-rp/im-troedelladen-von-rafael-graw-100.html" title="Lehrer erfüllt sich Traum - Im Trödelladen von Rafael Graw" class="teasertracking clickzone">
<span class="topline">Lehrer erfüllt sich Traum</span>
<span class="headline">Im Trödelladen von Rafael Graw</span>
</a>
</h3>
</header>
<a href="https://www.swrfernsehen.de/landesschau-rp/im-troedelladen-von-rafael-graw-100.html" title="Lehrer erfüllt sich Traum - Im Trödelladen von Rafael Graw" class="teasertracking clickzone">
<div class="lead description">
<p>Eigentlich ist Rafael Graw Realschullehrer, doch sein größtes Hobby gilt dem Sammeln von Antiquitäten. Nun eröffnete er in der Eifel seine "Stöber-Stube".
</p>
</div>
</a>
<footer>
<p class="broadcastinfo">
<time content="2024-01-04T18:15">
<span class="date">
<abbr
title="Donnerstag">Do.</abbr><span>4.1.2024</span></span>
<span class="time">18:15 Uhr</span>
</time>
<span>Landesschau Rheinland-Pfalz</span>
<span>
<span>SWR RP</span>
</span>
</p>
</footer>
</article>
</div>
<div class="col-sm-6 col-lg-4">
<article data-id="video-restaurant-des-berghotels-kristall-schliesst-wegen-mehrwertstauererhoehung-100"  class="teaser media-video teaser-majestix teaser-broadcast broadcast-info-hidden broadcast-info-expired rubrik-swraktuell teaser-1by1"
data-crawler="ignore">
<script data-spy="piano" type="application/json">{"onsitead_advertiser":"restaurant-des-berghotels-kristall-schliesst-wegen-mehrwertstauererhoehung-100","onsitead_creation":"Wegen Steuer-Erhöhung: Restaurant in Idar-Oberstein schließt","onsitead_url":"https://www.swr.de/swraktuell/rheinland-pfalz/restaurant-des-berghotels-kristall-schliesst-wegen-mehrwertstauererhoehung-100.html"}</script>
<header>
<div class="image">
<a href="/swraktuell/rheinland-pfalz/restaurant-des-berghotels-kristall-schliesst-wegen-mehrwertstauererhoehung-100.html" title="19 Prozent statt 7 Prozent - Wegen Steuer-Erhöhung: Restaurant in Idar-Oberstein schließt" class="teasertracking clickzone" role="presentation" tabindex="-1">
<picture>
<source  srcset="/swraktuell/rheinland-pfalz/1703957672184%2Cgastro-und-mehrwertsteuer-102~_v-1x1@2dXS_-9a91314e681c924f29ec89ca45e4e12f5b1d728e.jpg 320w,/swraktuell/rheinland-pfalz/1703957672184%2Cgastro-und-mehrwertsteuer-102~_v-1x1@2dS_-4026684eab220e7fb9eb2f80f316da061f3d025c.jpg 480w"  sizes="(min-width: 768px) 300px, (min-width: 510px) 400px, calc(100vw - 152px)" width="320" height="320"/>
<img src="/swraktuell/rheinland-pfalz/1703957672184%2Cgastro-und-mehrwertsteuer-102~_v-1x1@2dS_-4026684eab220e7fb9eb2f80f316da061f3d025c.jpg"   class="" data-copyright="Foto: SWR" alt="Berghotel Kristall (Foto: SWR)" title="Foto: SWR" width="320" height="320" loading="lazy" decoding="async"/>
</picture>
</a>
</div>
<h3 class="hgroup">
<a href="/swraktuell/rheinland-pfalz/restaurant-des-berghotels-kristall-schliesst-wegen-mehrwertstauererhoehung-100.html" title="19 Prozent statt 7 Prozent - Wegen Steuer-Erhöhung: Restaurant in Idar-Oberstein schließt" class="teasertracking clickzone">
<span class="topline">19 Prozent statt 7 Prozent</span>
<span class="headline">Wegen Steuer-Erhöhung: Restaurant in Idar-Oberstein schließt</span>
</a>
</h3>
</header>
<a href="/swraktuell/rheinland-pfalz/restaurant-des-berghotels-kristall-schliesst-wegen-mehrwertstauererhoehung-100.html" title="19 Prozent statt 7 Prozent - Wegen Steuer-Erhöhung: Restaurant in Idar-Oberstein schließt" class="teasertracking clickzone">
<div class="lead description">
<p>Das Berghotel Kristall in Idar-Oberstein schließt sein Restaurant. Ein Grund ist die Erhöhung der Mehrwertsteuer von 7 auf 19 Prozent in der Gastronomie ab 1. Januar 2024.
</p>
</div>
</a>
<footer>
<p class="broadcastinfo">
<time content="2023-12-30T18:00">
<span class="date">
<abbr
title="Samstag">Sa.</abbr><span>30.12.2023</span></span>
<span class="time">18:00 Uhr</span>
</time>
<span>SWR Aktuell Rheinland-Pfalz</span>
<span>
<span>SWR RP</span>
</span>
</p>
</footer>
</article>
</div>
<div class="col-sm-6 col-lg-4">
<article data-id="video-meet-a-jew-junge-juedin-klaert-auf-100"  class="teaser media-video teaser-majestix teaser-broadcast broadcast-info-hidden broadcast-info-expired rubrik-swrlandesschaurp teaser-1by1"
data-crawler="ignore">
<script data-spy="piano" type="application/json">{"onsitead_advertiser":"meet-a-jew-junge-juedin-klaert-auf-100","onsitead_creation":"\"Meet a Jew\" – Junge Jüdin klärt auf","onsitead_url":"https://www.swrfernsehen.de/landesschau-rp/meet-a-jew-junge-juedin-klaert-auf-100.html"}</script>
<header>
<mark>Trier</mark>
<div class="image">
<a href="https://www.swrfernsehen.de/landesschau-rp/meet-a-jew-junge-juedin-klaert-auf-100.html" title="Begegnungsprojekt für mehr Miteinander - &#34;Meet a Jew&#34; – Junge Jüdin klärt auf" class="teasertracking clickzone" role="presentation" tabindex="-1">
<picture>
<source  srcset="https://www.swrfernsehen.de/landesschau-rp/1703090429529%2Cmeet-a-jew-junge-juedin-klaert-auf-102~_v-1x1@2dXS_-9a91314e681c924f29ec89ca45e4e12f5b1d728e.jpg 320w,https://www.swrfernsehen.de/landesschau-rp/1703090429529%2Cmeet-a-jew-junge-juedin-klaert-auf-102~_v-1x1@2dS_-4026684eab220e7fb9eb2f80f316da061f3d025c.jpg 480w"  sizes="(min-width: 768px) 300px, (min-width: 510px) 400px, calc(100vw - 152px)" width="320" height="320"/>
<img src="https://www.swrfernsehen.de/landesschau-rp/1703090429529%2Cmeet-a-jew-junge-juedin-klaert-auf-102~_v-1x1@2dS_-4026684eab220e7fb9eb2f80f316da061f3d025c.jpg"   class="" data-copyright="Foto: SWR" alt="Emilia Taran und David Rosenberg sprechen mit Schülern über das Judentum und Antisemitismus. (Foto: SWR)" title="Foto: SWR" width="320" height="320" loading="lazy" decoding="async"/>
</picture>
</a>
</div>
<h3 class="hgroup">
<a href="https://www.swrfernsehen.de/landesschau-rp/meet-a-jew-junge-juedin-klaert-auf-100.html" title="Begegnungsprojekt für mehr Miteinander - &#34;Meet a Jew&#34; – Junge Jüdin klärt auf" class="teasertracking clickzone">
<span class="topline">Begegnungsprojekt für mehr Miteinander</span>
<span class="headline">&#034;Meet a Jew&#034; – Junge Jüdin klärt auf</span>
</a>
</h3>
</header>
<a href="https://www.swrfernsehen.de/landesschau-rp/meet-a-jew-junge-juedin-klaert-auf-100.html" title="Begegnungsprojekt für mehr Miteinander - &#34;Meet a Jew&#34; – Junge Jüdin klärt auf" class="teasertracking clickzone">
<div class="lead description">
<p>"Miteinander statt übereinander reden!" Das ist das Motto des Begegnungsprojekts "Meet a Jew". Emilia Taran aus Trier ist Teil des Projekts und besucht eine Schulklasse.
</p>
</div>
</a>
<footer>
<p class="broadcastinfo">
<time content="2023-12-20T18:15">
<span class="date">
<abbr
title="Mittwoch">Mi.</abbr><span>20.12.2023</span></span>
<span class="time">18:15 Uhr</span>
</time>
<span>Landesschau Rheinland-Pfalz</span>
<span>
<span>SWR RP</span>
</span>
</p>
</footer>
</article>
</div>
</div>
</div>
</div>
<div class="container">
<div class="row">
<h2>HIERZULAND</h2>
<div class="teasercarousel" aria-roledescription="carousel" data-spy="teasercarousel"
>
<div class="col-sm-6 col-lg-4">
<article data-id="video-wawern-weinbergstrasse-102"  class="teaser media-video teaser-majestix teaser-broadcast broadcast-info-hidden broadcast-info-expired rubrik-swrlandesschaurp teaser-1by1"
data-crawler="ignore">
<script data-spy="piano" type="application/json">{"onsitead_advertiser":"wawern-weinbergstrasse-102","onsitead_creation":"Die Weinbergstraße in Wawern","onsitead_url":"https://www.swrfernsehen.de/landesschau-rp/hierzuland/wawern-weinbergstrasse-102.html"}</script>
<header>
<mark>Wawern</mark>
<div class="image">
<a href="https://www.swrfernsehen.de/landesschau-rp/hierzuland/wawern-weinbergstrasse-102.html" title="Die Weinbergstraße in Wawern" class="teasertracking clickzone" role="presentation" tabindex="-1">
<picture>
<source  srcset="https://www.swrfernsehen.de/landesschau-rp/hierzuland/1707153123884%2Cwawern-weinbergstrasse-100~_v-1x1@2dXS_-9a91314e681c924f29ec89ca45e4e12f5b1d728e.png 320w,https://www.swrfernsehen.de/landesschau-rp/hierzuland/1707153123884%2Cwawern-weinbergstrasse-100~_v-1x1@2dS_-4026684eab220e7fb9eb2f80f316da061f3d025c.png 480w"  sizes="(min-width: 768px) 300px, (min-width: 510px) 400px, calc(100vw - 152px)" width="320" height="320"/>
<img src="https://www.swrfernsehen.de/landesschau-rp/hierzuland/1707153123884%2Cwawern-weinbergstrasse-100~_v-1x1@2dS_-4026684eab220e7fb9eb2f80f316da061f3d025c.png"   class="" data-copyright="Foto: SWR" alt="Wawern Weinbergstraße (Foto: SWR)" title="Foto: SWR" width="320" height="320" loading="lazy" decoding="async"/>
</picture>
</a>
</div>
<h3 class="hgroup">
<a href="https://www.swrfernsehen.de/landesschau-rp/hierzuland/wawern-weinbergstrasse-102.html" title="Die Weinbergstraße in Wawern" class="teasertracking clickzone">
<span class="headline">Die Weinbergstraße in Wawern</span>
</a>
</h3>
</header>
<a href="https://www.swrfernsehen.de/landesschau-rp/hierzuland/wawern-weinbergstrasse-102.html" title="Die Weinbergstraße in Wawern" class="teasertracking clickzone">
<div class="lead description">
<p>Wawern liegt 15 Kilometer südwestlich von Trier, im Saartal. Rund 630 Menschen leben in dem kleinen Ort.
</p>
</div>
</a>
<footer>
<p class="broadcastinfo">
<time content="2024-02-05T18:15">
<span class="date">
<abbr
title="Montag">Mo.</abbr><span>5.2.2024</span></span>
<span class="time">18:15 Uhr</span>
</time>
<span>Landesschau Rheinland-Pfalz</span>
<span>
<span>SWR RP</span>
</span>
</p>
</footer>
</article>
</div>
<div class="col-sm-6 col-lg-4">
<article data-id="video-hierzuland-immert-zur-traef-100"  class="teaser media-video teaser-majestix teaser-broadcast broadcast-info-hidden broadcast-info-expired rubrik-swrlandesschaurp teaser-1by1"
data-crawler="ignore">
<script data-spy="piano" type="application/json">{"onsitead_advertiser":"hierzuland-immert-zur-traef-100","onsitead_creation":"Zur Träf in Immert","onsitead_url":"https://www.swrfernsehen.de/landesschau-rp/hierzuland/hierzuland-immert-zur-traef-100.html"}</script>
<header>
<mark>Immert</mark>
<div class="image">
<a href="https://www.swrfernsehen.de/landesschau-rp/hierzuland/hierzuland-immert-zur-traef-100.html" title="Zur Träf in Immert" class="teasertracking clickzone" role="presentation" tabindex="-1">
<picture>
<source  srcset="https://www.swrfernsehen.de/landesschau-rp/hierzuland/1702637461397%2Cimmert-zur-traef-100~_v-1x1@2dXS_-9a91314e681c924f29ec89ca45e4e12f5b1d728e.png 320w,https://www.swrfernsehen.de/landesschau-rp/hierzuland/1702637461397%2Cimmert-zur-traef-100~_v-1x1@2dS_-4026684eab220e7fb9eb2f80f316da061f3d025c.png 480w"  sizes="(min-width: 768px) 300px, (min-width: 510px) 400px, calc(100vw - 152px)" width="320" height="320"/>
<img src="https://www.swrfernsehen.de/landesschau-rp/hierzuland/1702637461397%2Cimmert-zur-traef-100~_v-1x1@2dS_-4026684eab220e7fb9eb2f80f316da061f3d025c.png"   class="" data-copyright="Foto: SWR" alt="Immert Zur Träf (Foto: SWR)" title="Foto: SWR" width="320" height="320" loading="lazy" decoding="async"/>
</picture>
</a>
</div>
<h3 class="hgroup">
<a href="https://www.swrfernsehen.de/landesschau-rp/hierzuland/hierzuland-immert-zur-traef-100.html" title="Zur Träf in Immert" class="teasertracking clickzone">
<span class="headline">Zur Träf in Immert</span>
</a>
</h3>
</header>
<a href="https://www.swrfernsehen.de/landesschau-rp/hierzuland/hierzuland-immert-zur-traef-100.html" title="Zur Träf in Immert" class="teasertracking clickzone">
<div class="lead description">
<p>Das Örtchen Immert liegt in der hügeligen Landschaft des Hunsrück zwischen Trier und Idar Oberstein. Gut 170 Menschen wohnen in dem Dorf nahe der Hunsrückhöhenstraße.
</p>
</div>
</a>
<footer>
<p class="broadcastinfo">
<time content="2023-12-15T18:15">
<span class="date">
<abbr
title="Freitag">Fr.</abbr><span>15.12.2023</span></span>
<span class="time">18:15 Uhr</span>
</time>
<span>Landesschau Rheinland-Pfalz</span>
<span>
<span>SWR RP</span>
</span>
</p>
</footer>
</article>
</div>
<div class="col-sm-6 col-lg-4">
<article data-id="video-hierzuland-hauptstrasse-neroth-100"  class="teaser media-video teaser-majestix teaser-broadcast broadcast-info-hidden broadcast-info-expired rubrik-swrlandesschaurp teaser-1by1"
data-crawler="ignore">
<script data-spy="piano" type="application/json">{"onsitead_advertiser":"hierzuland-hauptstrasse-neroth-100","onsitead_creation":"Die Hauptstraße in Neroth","onsitead_url":"https://www.swrfernsehen.de/landesschau-rp/hierzuland/hierzuland-hauptstrasse-neroth-100.html"}</script>
<header>
<mark>Neroth</mark>
<div class="image">
<a href="https://www.swrfernsehen.de/landesschau-rp/hierzuland/hierzuland-hauptstrasse-neroth-100.html" title="Die Hauptstraße in Neroth" class="teasertracking clickzone" role="presentation" tabindex="-1">
<picture>
<source  srcset="https://www.swrfernsehen.de/landesschau-rp/hierzuland/1701703643389%2Cneroth-hauptstrasse-100~_v-1x1@2dXS_-9a91314e681c924f29ec89ca45e4e12f5b1d728e.png 320w,https://www.swrfernsehen.de/landesschau-rp/hierzuland/1701703643389%2Cneroth-hauptstrasse-100~_v-1x1@2dS_-4026684eab220e7fb9eb2f80f316da061f3d025c.png 480w"  sizes="(min-width: 768px) 300px, (min-width: 510px) 400px, calc(100vw - 152px)" width="320" height="320"/>
<img src="https://www.swrfernsehen.de/landesschau-rp/hierzuland/1701703643389%2Cneroth-hauptstrasse-100~_v-1x1@2dS_-4026684eab220e7fb9eb2f80f316da061f3d025c.png"   class="" data-copyright="Foto: SWR" alt="Hierzuland Neroth Hauptstraße (Foto: SWR)" title="Foto: SWR" width="320" height="320" loading="lazy" decoding="async"/>
</picture>
</a>
</div>
<h3 class="hgroup">
<a href="https://www.swrfernsehen.de/landesschau-rp/hierzuland/hierzuland-hauptstrasse-neroth-100.html" title="Die Hauptstraße in Neroth" class="teasertracking clickzone">
<span class="headline">Die Hauptstraße in Neroth</span>
</a>
</h3>
</header>
<a href="https://www.swrfernsehen.de/landesschau-rp/hierzuland/hierzuland-hauptstrasse-neroth-100.html" title="Die Hauptstraße in Neroth" class="teasertracking clickzone">
<div class="lead description">
<p>Mausefallen waren in früheren Zeiten eine Erfolgsgeschichte in dem Eifelort. In der Hauptstraße wird diese Zeit noch entsprechend gewürdigt, mit einem Mausefallenmuseum.
</p>
</div>
</a>
<footer>
<p class="broadcastinfo">
<time content="2023-12-04T18:15">
<span class="date">
<abbr
title="Montag">Mo.</abbr><span>4.12.2023</span></span>
<span class="time">18:15 Uhr</span>
</time>
<span>Landesschau Rheinland-Pfalz</span>
<span>
<span>SWR RP</span>
</span>
</p>
</footer>
</article>
</div>
<div class="col-sm-6 col-lg-4">
<article data-id="video-saargaustrasse-in-kahren-100"  class="teaser media-video teaser-majestix teaser-broadcast broadcast-info-hidden broadcast-info-expired rubrik-swrlandesschaurp teaser-1by1"
data-crawler="ignore">
<script data-spy="piano" type="application/json">{"onsitead_advertiser":"saargaustrasse-in-kahren-100","onsitead_creation":"Die Saargaustraße in Kahren","onsitead_url":"https://www.swrfernsehen.de/landesschau-rp/hierzuland/saargaustrasse-in-kahren-100.html"}</script>
<header>
<mark>Saarburg-Kahren</mark>
<div class="image">
<a href="https://www.swrfernsehen.de/landesschau-rp/hierzuland/saargaustrasse-in-kahren-100.html" title="Die Saargaustraße in Kahren" class="teasertracking clickzone" role="presentation" tabindex="-1">
<picture>
<source  srcset="https://www.swrfernsehen.de/landesschau-rp/hierzuland/1701431103380%2Ckahren-saargaustrasse-100~_v-1x1@2dXS_-9a91314e681c924f29ec89ca45e4e12f5b1d728e.png 320w,https://www.swrfernsehen.de/landesschau-rp/hierzuland/1701431103380%2Ckahren-saargaustrasse-100~_v-1x1@2dS_-4026684eab220e7fb9eb2f80f316da061f3d025c.png 480w"  sizes="(min-width: 768px) 300px, (min-width: 510px) 400px, calc(100vw - 152px)" width="320" height="320"/>
<img src="https://www.swrfernsehen.de/landesschau-rp/hierzuland/1701431103380%2Ckahren-saargaustrasse-100~_v-1x1@2dS_-4026684eab220e7fb9eb2f80f316da061f3d025c.png"   class="" data-copyright="Foto: SWR" alt="Kahren Saargaustraße (Foto: SWR)" title="Foto: SWR" width="320" height="320" loading="lazy" decoding="async"/>
</picture>
</a>
</div>
<h3 class="hgroup">
<a href="https://www.swrfernsehen.de/landesschau-rp/hierzuland/saargaustrasse-in-kahren-100.html" title="Die Saargaustraße in Kahren" class="teasertracking clickzone">
<span class="headline">Die Saargaustraße in Kahren</span>
</a>
</h3>
</header>
<a href="https://www.swrfernsehen.de/landesschau-rp/hierzuland/saargaustrasse-in-kahren-100.html" title="Die Saargaustraße in Kahren" class="teasertracking clickzone">
<div class="lead description">
<p>Kahren ist ein Ortsteil der Stadt Saarburg. 1970 eingemeindet, liegt Kahren etwas abseits der Kernstadt auf einem Höhenzug des Saargaus.
</p>
</div>
</a>
<footer>
<p class="broadcastinfo">
<time content="2023-12-01T18:15">
<span class="date">
<abbr
title="Freitag">Fr.</abbr><span>1.12.2023</span></span>
<span class="time">18:15 Uhr</span>
</time>
<span>Landesschau Rheinland-Pfalz</span>
<span>
<span>SWR RP</span>
</span>
</p>
</footer>
</article>
</div>
<div class="col-sm-6 col-lg-4">
<article data-id="video-hierzuland-allenbach-100"  class="teaser media-video teaser-majestix teaser-broadcast broadcast-info-hidden broadcast-info-expired rubrik-swrlandesschaurp teaser-1by1"
data-crawler="ignore">
<script data-spy="piano" type="application/json">{"onsitead_advertiser":"hierzuland-allenbach-100","onsitead_creation":"In der Schied in Allenbach","onsitead_url":"https://www.swrfernsehen.de/landesschau-rp/hierzuland/hierzuland-allenbach-100.html"}</script>
<header>
<mark>Allenbach</mark>
<div class="image">
<a href="https://www.swrfernsehen.de/landesschau-rp/hierzuland/hierzuland-allenbach-100.html" title="In der Schied in Allenbach" class="teasertracking clickzone" role="presentation" tabindex="-1">
<picture>
<source  srcset="https://www.swrfernsehen.de/landesschau-rp/hierzuland/1669650271220%2Callenbach-in-der-schied-100~_v-1x1@2dXS_-9a91314e681c924f29ec89ca45e4e12f5b1d728e.png 320w,https://www.swrfernsehen.de/landesschau-rp/hierzuland/1669650271220%2Callenbach-in-der-schied-100~_v-1x1@2dS_-4026684eab220e7fb9eb2f80f316da061f3d025c.png 480w"  sizes="(min-width: 768px) 300px, (min-width: 510px) 400px, calc(100vw - 152px)" width="320" height="320"/>
<img src="https://www.swrfernsehen.de/landesschau-rp/hierzuland/1669650271220%2Callenbach-in-der-schied-100~_v-1x1@2dS_-4026684eab220e7fb9eb2f80f316da061f3d025c.png"   class="" data-copyright="Foto: SWR" alt="Hierzuland Allenbach In der Schied (Foto: SWR)" title="Foto: SWR" width="320" height="320" loading="lazy" decoding="async"/>
</picture>
</a>
</div>
<h3 class="hgroup">
<a href="https://www.swrfernsehen.de/landesschau-rp/hierzuland/hierzuland-allenbach-100.html" title="In der Schied in Allenbach" class="teasertracking clickzone">
<span class="headline">In der Schied in Allenbach</span>
</a>
</h3>
</header>
<a href="https://www.swrfernsehen.de/landesschau-rp/hierzuland/hierzuland-allenbach-100.html" title="In der Schied in Allenbach" class="teasertracking clickzone">
<div class="lead description">
<p>Rund 660 Menschen leben in dem Hunsrückort. „"In der Schied" ist ein kleines, kurviges Sträßchen mit einem echten Hingucker: ein mittelalterliches Schloß wie aus dem Bilderbuch.
</p>
</div>
</a>
<footer>
<p class="broadcastinfo">
<time content="2023-11-24T18:15">
<span class="date">
<abbr
title="Freitag">Fr.</abbr><span>24.11.2023</span></span>
<span class="time">18:15 Uhr</span>
</time>
<span>Landesschau Rheinland-Pfalz</span>
<span>
<span>SWR RP</span>
</span>
</p>
</footer>
</article>
</div>
<div class="col-sm-6 col-lg-4">
<article data-id="video-hauptstrasse-in-wallscheid-100"  class="teaser media-video teaser-majestix teaser-broadcast broadcast-info-hidden broadcast-info-expired rubrik-swrlandesschaurp teaser-1by1"
data-crawler="ignore">
<script data-spy="piano" type="application/json">{"onsitead_advertiser":"hauptstrasse-in-wallscheid-100","onsitead_creation":"Die Hauptstraße in Wallscheid","onsitead_url":"https://www.swrfernsehen.de/landesschau-rp/hierzuland/hauptstrasse-in-wallscheid-100.html"}</script>
<header>
<mark>Wallscheid</mark>
<div class="image">
<a href="https://www.swrfernsehen.de/landesschau-rp/hierzuland/hauptstrasse-in-wallscheid-100.html" title="Die Hauptstraße in Wallscheid" class="teasertracking clickzone" role="presentation" tabindex="-1">
<picture>
<source  srcset="https://www.swrfernsehen.de/landesschau-rp/hierzuland/1701172945160%2Cwallscheid-hauptstrasse-100~_v-1x1@2dXS_-9a91314e681c924f29ec89ca45e4e12f5b1d728e.png 320w,https://www.swrfernsehen.de/landesschau-rp/hierzuland/1701172945160%2Cwallscheid-hauptstrasse-100~_v-1x1@2dS_-4026684eab220e7fb9eb2f80f316da061f3d025c.png 480w"  sizes="(min-width: 768px) 300px, (min-width: 510px) 400px, calc(100vw - 152px)" width="320" height="320"/>
<img src="https://www.swrfernsehen.de/landesschau-rp/hierzuland/1701172945160%2Cwallscheid-hauptstrasse-100~_v-1x1@2dS_-4026684eab220e7fb9eb2f80f316da061f3d025c.png"   class="" data-copyright="Foto: SWR" alt="Hierzuland Wallscheid Hauptstraße (Foto: SWR)" title="Foto: SWR" width="320" height="320" loading="lazy" decoding="async"/>
</picture>
</a>
</div>
<h3 class="hgroup">
<a href="https://www.swrfernsehen.de/landesschau-rp/hierzuland/hauptstrasse-in-wallscheid-100.html" title="Die Hauptstraße in Wallscheid" class="teasertracking clickzone">
<span class="headline">Die Hauptstraße in Wallscheid</span>
</a>
</h3>
</header>
<a href="https://www.swrfernsehen.de/landesschau-rp/hierzuland/hauptstrasse-in-wallscheid-100.html" title="Die Hauptstraße in Wallscheid" class="teasertracking clickzone">
<div class="lead description">
<p>Längs durch den Eifelort Wallscheid zieht sich die Hauptstraße. Gaststätten und Geschäfte gibt es hier zwar keine mehr, aber dafür viele nette und sehr kreative Menschen.
</p>
</div>
</a>
<footer>
<p class="broadcastinfo">
<time content="2023-12-02T18:08">
<span class="date">
<abbr
title="Samstag">Sa.</abbr><span>2.12.2023</span></span>
<span class="time">18:08 Uhr</span>
</time>
<span>Hierzuland</span>
<span>
<span>SWR RP</span>
</span>
</p>
</footer>
</article>
</div>
<div class="col-sm-6 col-lg-4">
<article data-id="video-video-roth-104"  class="teaser media-video teaser-majestix teaser-broadcast broadcast-info-hidden broadcast-info-expired rubrik-swrlandesschaurp teaser-1by1"
data-crawler="ignore">
<script data-spy="piano" type="application/json">{"onsitead_advertiser":"video-roth-104","onsitead_creation":"Die Rother Straße in Roth","onsitead_url":"https://www.swrfernsehen.de/landesschau-rp/hierzuland/video-roth-104.html"}</script>
<header>
<mark>Gerolstein-Roth</mark>
<div class="image">
<a href="https://www.swrfernsehen.de/landesschau-rp/hierzuland/video-roth-104.html" title="Die Rother Straße in Roth" class="teasertracking clickzone" role="presentation" tabindex="-1">
<picture>
<source  srcset="https://www.swrfernsehen.de/landesschau-rp/hierzuland/1698396144417%2Croth-rother-strasse-100~_v-1x1@2dXS_-9a91314e681c924f29ec89ca45e4e12f5b1d728e.png 320w,https://www.swrfernsehen.de/landesschau-rp/hierzuland/1698396144417%2Croth-rother-strasse-100~_v-1x1@2dS_-4026684eab220e7fb9eb2f80f316da061f3d025c.png 480w"  sizes="(min-width: 768px) 300px, (min-width: 510px) 400px, calc(100vw - 152px)" width="320" height="320"/>
<img src="https://www.swrfernsehen.de/landesschau-rp/hierzuland/1698396144417%2Croth-rother-strasse-100~_v-1x1@2dS_-4026684eab220e7fb9eb2f80f316da061f3d025c.png"   class="" data-copyright="Foto: SWR" alt="Roth Rother Straße (Foto: SWR)" title="Foto: SWR" width="320" height="320" loading="lazy" decoding="async"/>
</picture>
</a>
</div>
<h3 class="hgroup">
<a href="https://www.swrfernsehen.de/landesschau-rp/hierzuland/video-roth-104.html" title="Die Rother Straße in Roth" class="teasertracking clickzone">
<span class="headline">Die Rother Straße in Roth</span>
</a>
</h3>
</header>
<a href="https://www.swrfernsehen.de/landesschau-rp/hierzuland/video-roth-104.html" title="Die Rother Straße in Roth" class="teasertracking clickzone">
<div class="lead description">
<p>Das beschauliche Dorf hat für die 157 Einwohner einiges zu bieten. Das rege Vereinsleben hält den kleinen Eifelort lebendig.
</p>
</div>
</a>
<footer>
<p class="broadcastinfo">
<time content="2023-10-27T18:15">
<span class="date">
<abbr
title="Freitag">Fr.</abbr><span>27.10.2023</span></span>
<span class="time">18:15 Uhr</span>
</time>
<span>Landesschau Rheinland-Pfalz</span>
<span>
<span>SWR RP</span>
</span>
</p>
</footer>
</article>
</div>
<div class="col-sm-6 col-lg-4">
<article data-id="video-kapellenstrasse-in-baldringen-100"  class="teaser media-video teaser-majestix teaser-broadcast broadcast-info-hidden broadcast-info-expired rubrik-swrlandesschaurp teaser-1by1"
data-crawler="ignore">
<script data-spy="piano" type="application/json">{"onsitead_advertiser":"kapellenstrasse-in-baldringen-100","onsitead_creation":"Die Kapellenstraße in Baldringen","onsitead_url":"https://www.swrfernsehen.de/landesschau-rp/hierzuland/kapellenstrasse-in-baldringen-100.html"}</script>
<header>
<mark>Baldringen</mark>
<div class="image">
<a href="https://www.swrfernsehen.de/landesschau-rp/hierzuland/kapellenstrasse-in-baldringen-100.html" title="Die Kapellenstraße in Baldringen" class="teasertracking clickzone" role="presentation" tabindex="-1">
<picture>
<source  srcset="https://www.swrfernsehen.de/landesschau-rp/hierzuland/1669281652940%2Cbaldringen-kapellenstrasse-100~_v-1x1@2dXS_-9a91314e681c924f29ec89ca45e4e12f5b1d728e.png 320w,https://www.swrfernsehen.de/landesschau-rp/hierzuland/1669281652940%2Cbaldringen-kapellenstrasse-100~_v-1x1@2dS_-4026684eab220e7fb9eb2f80f316da061f3d025c.png 480w"  sizes="(min-width: 768px) 300px, (min-width: 510px) 400px, calc(100vw - 152px)" width="320" height="320"/>
<img src="https://www.swrfernsehen.de/landesschau-rp/hierzuland/1669281652940%2Cbaldringen-kapellenstrasse-100~_v-1x1@2dS_-4026684eab220e7fb9eb2f80f316da061f3d025c.png"   class="" data-copyright="Foto: SWR" alt="Hierzuland Baldringen Kapellenstraße (Foto: SWR)" title="Foto: SWR" width="320" height="320" loading="lazy" decoding="async"/>
</picture>
</a>
</div>
<h3 class="hgroup">
<a href="https://www.swrfernsehen.de/landesschau-rp/hierzuland/kapellenstrasse-in-baldringen-100.html" title="Die Kapellenstraße in Baldringen" class="teasertracking clickzone">
<span class="headline">Die Kapellenstraße in Baldringen</span>
</a>
</h3>
</header>
<a href="https://www.swrfernsehen.de/landesschau-rp/hierzuland/kapellenstrasse-in-baldringen-100.html" title="Die Kapellenstraße in Baldringen" class="teasertracking clickzone">
<div class="lead description">
<p>Einst landwirtschaftlich geprägt, hat sich die Hunsrückgemeinde zu einem Ort für junge Familien entwickelt, die zum Arbeiten nach Trier und in den Hochwald pendeln.
</p>
</div>
</a>
<footer>
<p class="broadcastinfo">
<time content="2023-11-25T18:08">
<span class="date">
<abbr
title="Samstag">Sa.</abbr><span>25.11.2023</span></span>
<span class="time">18:08 Uhr</span>
</time>
<span>Hierzuland</span>
<span>
<span>SWR RP</span>
</span>
</p>
</footer>
</article>
</div>
<div class="col-sm-6 col-lg-4">
<article data-id="video-video-mannebach-102"  class="teaser media-video teaser-majestix teaser-broadcast broadcast-info-hidden broadcast-info-expired rubrik-swrlandesschaurp teaser-1by1"
data-crawler="ignore">
<script data-spy="piano" type="application/json">{"onsitead_advertiser":"video-mannebach-102","onsitead_creation":"Der Schmiedeweg in Mannebach","onsitead_url":"https://www.swrfernsehen.de/landesschau-rp/hierzuland/video-mannebach-102.html"}</script>
<header>
<mark>Mannebach-Beltheim</mark>
<div class="image">
<a href="https://www.swrfernsehen.de/landesschau-rp/hierzuland/video-mannebach-102.html" title="Der Schmiedeweg in Mannebach" class="teasertracking clickzone" role="presentation" tabindex="-1">
<picture>
<source  srcset="https://www.swrfernsehen.de/landesschau-rp/hierzuland/1667223433140%2Cmannebach-schmiedeweg-100~_v-1x1@2dXS_-9a91314e681c924f29ec89ca45e4e12f5b1d728e.png 320w,https://www.swrfernsehen.de/landesschau-rp/hierzuland/1667223433140%2Cmannebach-schmiedeweg-100~_v-1x1@2dS_-4026684eab220e7fb9eb2f80f316da061f3d025c.png 480w"  sizes="(min-width: 768px) 300px, (min-width: 510px) 400px, calc(100vw - 152px)" width="320" height="320"/>
<img src="https://www.swrfernsehen.de/landesschau-rp/hierzuland/1667223433140%2Cmannebach-schmiedeweg-100~_v-1x1@2dS_-4026684eab220e7fb9eb2f80f316da061f3d025c.png"   class="" data-copyright="Foto: SWR" alt="Hierzuland Mannebach Schmiedeweg (Foto: SWR)" title="Foto: SWR" width="320" height="320" loading="lazy" decoding="async"/>
</picture>
</a>
</div>
<h3 class="hgroup">
<a href="https://www.swrfernsehen.de/landesschau-rp/hierzuland/video-mannebach-102.html" title="Der Schmiedeweg in Mannebach" class="teasertracking clickzone">
<span class="headline">Der Schmiedeweg in Mannebach</span>
</a>
</h3>
</header>
<a href="https://www.swrfernsehen.de/landesschau-rp/hierzuland/video-mannebach-102.html" title="Der Schmiedeweg in Mannebach" class="teasertracking clickzone">
<div class="lead description">
<p>Rund 110 Menschen leben in dem Hunsrückort. Der Schmiedeweg hat einen durchaus treffenden Namen. Denn in Haus Nummer drei werden seit über 30 Jahren Hufeisen angefertigt.
</p>
</div>
</a>
<footer>
<p class="broadcastinfo">
<time content="2023-10-20T18:15">
<span class="date">
<abbr
title="Freitag">Fr.</abbr><span>20.10.2023</span></span>
<span class="time">18:15 Uhr</span>
</time>
<span>Landesschau Rheinland-Pfalz</span>
<span>
<span>SWR Fernsehen RP</span>
</span>
</p>
</footer>
</article>
</div>
<div class="col-sm-6 col-lg-4">
<article data-id="video-video-wiltingen-100"  class="teaser media-video teaser-majestix teaser-broadcast broadcast-info-hidden broadcast-info-expired rubrik-swrlandesschaurp teaser-1by1"
data-crawler="ignore">
<script data-spy="piano" type="application/json">{"onsitead_advertiser":"video-wiltingen-100","onsitead_creation":"Die Klosterbergstraße in Wiltingen","onsitead_url":"https://www.swrfernsehen.de/landesschau-rp/hierzuland/video-wiltingen-100.html"}</script>
<header>
<mark>Wiltingen</mark>
<div class="image">
<a href="https://www.swrfernsehen.de/landesschau-rp/hierzuland/video-wiltingen-100.html" title="Die Klosterbergstraße in Wiltingen" class="teasertracking clickzone" role="presentation" tabindex="-1">
<picture>
<source  srcset="https://www.swrfernsehen.de/landesschau-rp/hierzuland/1666169343536%2Cwiltingen-klosterbergstrasse-100~_v-1x1@2dXS_-9a91314e681c924f29ec89ca45e4e12f5b1d728e.png 320w,https://www.swrfernsehen.de/landesschau-rp/hierzuland/1666169343536%2Cwiltingen-klosterbergstrasse-100~_v-1x1@2dS_-4026684eab220e7fb9eb2f80f316da061f3d025c.png 480w"  sizes="(min-width: 768px) 300px, (min-width: 510px) 400px, calc(100vw - 152px)" width="320" height="320"/>
<img src="https://www.swrfernsehen.de/landesschau-rp/hierzuland/1666169343536%2Cwiltingen-klosterbergstrasse-100~_v-1x1@2dS_-4026684eab220e7fb9eb2f80f316da061f3d025c.png"   class="" data-copyright="Foto: SWR" alt="Hierzuland Wiltingen Klosterbergstraße (Foto: SWR)" title="Foto: SWR" width="320" height="320" loading="lazy" decoding="async"/>
</picture>
</a>
</div>
<h3 class="hgroup">
<a href="https://www.swrfernsehen.de/landesschau-rp/hierzuland/video-wiltingen-100.html" title="Die Klosterbergstraße in Wiltingen" class="teasertracking clickzone">
<span class="headline">Die Klosterbergstraße in Wiltingen</span>
</a>
</h3>
</header>
<a href="https://www.swrfernsehen.de/landesschau-rp/hierzuland/video-wiltingen-100.html" title="Die Klosterbergstraße in Wiltingen" class="teasertracking clickzone">
<div class="lead description">
<p>In Wiltingen heißen viele Wege so wie die Weinlagen, an denen sie enden. Unsere Straße führt zum Klosterberg. Was auffällt, sind die vielen Villen.
</p>
</div>
</a>
<footer>
<p class="broadcastinfo">
<time content="2023-10-12T18:15">
<span class="date">
<abbr
title="Donnerstag">Do.</abbr><span>12.10.2023</span></span>
<span class="time">18:15 Uhr</span>
</time>
<span>Landesschau Rheinland-Pfalz</span>
<span>
<span>SWR Fernsehen RP</span>
</span>
</p>
</footer>
</article>
</div>
</div>
</div>
</div>
<div class="container">
<div class="row">
<h2>SWR Aktuell Fernsehen</h2>
<div class="teasercarousel" aria-roledescription="carousel" data-spy="teasercarousel"
>
<div class="col-sm-6 col-lg-6">
<article data-id="video-sendung-2245-uhr-vom-822024-100"  class="teaser media-video teaser-majestix teaser-broadcast broadcast-info-hidden broadcast-info-expired rubrik-swraktuell teaser-majestix-2er-karussell media-16by9"
data-crawler="ignore">
<script data-spy="piano" type="application/json">{"onsitead_advertiser":"sendung-2245-uhr-vom-822024-100","onsitead_creation":"Sendung 22:45 Uhr vom 8.2.2024","onsitead_url":"https://www.swr.de/swraktuell/rheinland-pfalz/sendung-2245-uhr-vom-822024-100.html"}</script>
<header>
<div class="image">
<a href="/swraktuell/rheinland-pfalz/sendung-2245-uhr-vom-822024-100.html" title="SWR Aktuell RP - Sendung 22:45 Uhr vom 8.2.2024" class="teasertracking clickzone" role="presentation" tabindex="-1">
<picture>
<source  media="(min-width: 1200px)" srcset="/swraktuell/rheinland-pfalz/1707429477268%2Cstephanebmeyer-106~_v-16x9@2dXS_-b9bac15fe0af001f663131e7814653aed0ad7167.jpg 320w,/swraktuell/rheinland-pfalz/1707429477268%2Cstephanebmeyer-106~_v-16x9@2dS_-6be50a9c75559ca1aaf1d0b25bae287afdcd877a.jpg 480w,/swraktuell/rheinland-pfalz/1707429477268%2Cstephanebmeyer-106~_v-16x9@2dM_-ad6791ade5eb8b5c935dd377130b903c4b5781d8.jpg 768w"  sizes="(min-width: 1200px) 400px" width="320" height="180"/>
<source  srcset="/swraktuell/rheinland-pfalz/1707429477268%2Cstephanebmeyer-106~_v-1x1@2dXS_-9a91314e681c924f29ec89ca45e4e12f5b1d728e.jpg 320w,/swraktuell/rheinland-pfalz/1707429477268%2Cstephanebmeyer-106~_v-1x1@2dS_-4026684eab220e7fb9eb2f80f316da061f3d025c.jpg 480w"  sizes="(min-width: 768px) 300px, (min-width: 510px) 400px, calc(100vw - 152px)" width="320" height="320"/>
<img src="/swraktuell/rheinland-pfalz/1707429477268%2Cstephanebmeyer-106~_v-1x1@2dS_-4026684eab220e7fb9eb2f80f316da061f3d025c.jpg"   class="" data-copyright="Foto: SWR" alt="Nachrichtensprecher Stephan Ebmeyer (Foto: SWR)" title="Foto: SWR" width="320" height="320" loading="lazy" decoding="async"/>
</picture>
</a>
</div>
<h3 class="hgroup">
<a href="/swraktuell/rheinland-pfalz/sendung-2245-uhr-vom-822024-100.html" title="SWR Aktuell RP - Sendung 22:45 Uhr vom 8.2.2024" class="teasertracking clickzone">
<span class="topline">SWR Aktuell RP</span>
<span class="headline">Sendung 22:45 Uhr vom 8.2.2024</span>
</a>
</h3>
</header>
<a href="/swraktuell/rheinland-pfalz/sendung-2245-uhr-vom-822024-100.html" title="SWR Aktuell RP - Sendung 22:45 Uhr vom 8.2.2024" class="teasertracking clickzone">
<div class="lead description">
<p>Nachrichten aus Rheinland-Pfalz mit Stephan Ebmeyer.
</p>
</div>
</a>
<footer>
<p class="broadcastinfo">
<time content="2024-02-08T22:45">
<span class="date">
<abbr
title="Donnerstag">Do.</abbr><span>8.2.2024</span></span>
<span class="time">22:45 Uhr</span>
</time>
<span>SWR Aktuell Rheinland-Pfalz</span>
<span>
<span>SWR RP</span>
</span>
</p>
</footer>
</article>
</div>
<div class="col-sm-6 col-lg-6">
<article data-id="video-sendung-1930-uhr-vom-822024-104"  class="teaser media-video teaser-majestix teaser-broadcast broadcast-info-hidden broadcast-info-expired rubrik-swraktuell teaser-majestix-2er-karussell media-16by9"
data-crawler="ignore">
<script data-spy="piano" type="application/json">{"onsitead_advertiser":"sendung-1930-uhr-vom-822024-104","onsitead_creation":"Sendung 19:30 Uhr vom 8.2.2024","onsitead_url":"https://www.swr.de/swraktuell/rheinland-pfalz/sendung-1930-uhr-vom-822024-104.html"}</script>
<header>
<div class="image">
<a href="/swraktuell/rheinland-pfalz/sendung-1930-uhr-vom-822024-104.html" title="SWR Aktuell RP - Sendung 19:30 Uhr vom 8.2.2024" class="teasertracking clickzone" role="presentation" tabindex="-1">
<picture>
<source  media="(min-width: 1200px)" srcset="/swraktuell/rheinland-pfalz/1707421862503%2Csendung-1930-uhr-vom-822024-106~_v-16x9@2dXS_-b9bac15fe0af001f663131e7814653aed0ad7167.jpg 320w,/swraktuell/rheinland-pfalz/1707421862503%2Csendung-1930-uhr-vom-822024-106~_v-16x9@2dS_-6be50a9c75559ca1aaf1d0b25bae287afdcd877a.jpg 480w,/swraktuell/rheinland-pfalz/1707421862503%2Csendung-1930-uhr-vom-822024-106~_v-16x9@2dM_-ad6791ade5eb8b5c935dd377130b903c4b5781d8.jpg 768w"  sizes="(min-width: 1200px) 400px" width="320" height="180"/>
<source  srcset="/swraktuell/rheinland-pfalz/1707421862503%2Csendung-1930-uhr-vom-822024-106~_v-1x1@2dXS_-9a91314e681c924f29ec89ca45e4e12f5b1d728e.jpg 320w,/swraktuell/rheinland-pfalz/1707421862503%2Csendung-1930-uhr-vom-822024-106~_v-1x1@2dS_-4026684eab220e7fb9eb2f80f316da061f3d025c.jpg 480w"  sizes="(min-width: 768px) 300px, (min-width: 510px) 400px, calc(100vw - 152px)" width="320" height="320"/>
<img src="/swraktuell/rheinland-pfalz/1707421862503%2Csendung-1930-uhr-vom-822024-106~_v-1x1@2dS_-4026684eab220e7fb9eb2f80f316da061f3d025c.jpg"   class="" data-copyright="Foto: SWR" alt="Nachrichtensprecher Sascha Becker (Foto: SWR)" title="Foto: SWR" width="320" height="320" loading="lazy" decoding="async"/>
</picture>
</a>
</div>
<h3 class="hgroup">
<a href="/swraktuell/rheinland-pfalz/sendung-1930-uhr-vom-822024-104.html" title="SWR Aktuell RP - Sendung 19:30 Uhr vom 8.2.2024" class="teasertracking clickzone">
<span class="topline">SWR Aktuell RP</span>
<span class="headline">Sendung 19:30 Uhr vom 8.2.2024</span>
</a>
</h3>
</header>
<a href="/swraktuell/rheinland-pfalz/sendung-1930-uhr-vom-822024-104.html" title="SWR Aktuell RP - Sendung 19:30 Uhr vom 8.2.2024" class="teasertracking clickzone">
<div class="lead description">
<p>Nachrichten aus Rheinland-Pfalz mit Sascha Becker.
</p>
</div>
</a>
<footer>
<p class="broadcastinfo">
<time content="2024-02-08T19:30">
<span class="date">
<abbr
title="Donnerstag">Do.</abbr><span>8.2.2024</span></span>
<span class="time">19:30 Uhr</span>
</time>
<span>SWR Aktuell Rheinland-Pfalz</span>
<span>
<span>SWR RP</span>
</span>
</p>
</footer>
</article>
</div>
<div class="col-sm-6 col-lg-6">
<article data-id="video-sendung-1800-uhr-vom-822024-104"  class="teaser media-video teaser-majestix teaser-broadcast broadcast-info-hidden broadcast-info-expired rubrik-swraktuell teaser-majestix-2er-karussell media-16by9"
data-crawler="ignore">
<script data-spy="piano" type="application/json">{"onsitead_advertiser":"sendung-1800-uhr-vom-822024-104","onsitead_creation":"Sendung 18:00 Uhr vom 8.2.2024","onsitead_url":"https://www.swr.de/swraktuell/rheinland-pfalz/sendung-1800-uhr-vom-822024-104.html"}</script>
<header>
<div class="image">
<a href="/swraktuell/rheinland-pfalz/sendung-1800-uhr-vom-822024-104.html" title="SWR Aktuell RP - Sendung 18:00 Uhr vom 8.2.2024" class="teasertracking clickzone" role="presentation" tabindex="-1">
<picture>
<source  media="(min-width: 1200px)" srcset="/swraktuell/rheinland-pfalz/1707413539366%2Csendung-1800-uhr-vom-822024-106~_v-16x9@2dXS_-b9bac15fe0af001f663131e7814653aed0ad7167.jpg 320w,/swraktuell/rheinland-pfalz/1707413539366%2Csendung-1800-uhr-vom-822024-106~_v-16x9@2dS_-6be50a9c75559ca1aaf1d0b25bae287afdcd877a.jpg 480w,/swraktuell/rheinland-pfalz/1707413539366%2Csendung-1800-uhr-vom-822024-106~_v-16x9@2dM_-ad6791ade5eb8b5c935dd377130b903c4b5781d8.jpg 768w"  sizes="(min-width: 1200px) 400px" width="320" height="180"/>
<source  srcset="/swraktuell/rheinland-pfalz/1707413539366%2Csendung-1800-uhr-vom-822024-106~_v-1x1@2dXS_-9a91314e681c924f29ec89ca45e4e12f5b1d728e.jpg 320w,/swraktuell/rheinland-pfalz/1707413539366%2Csendung-1800-uhr-vom-822024-106~_v-1x1@2dS_-4026684eab220e7fb9eb2f80f316da061f3d025c.jpg 480w"  sizes="(min-width: 768px) 300px, (min-width: 510px) 400px, calc(100vw - 152px)" width="320" height="320"/>
<img src="/swraktuell/rheinland-pfalz/1707413539366%2Csendung-1800-uhr-vom-822024-106~_v-1x1@2dS_-4026684eab220e7fb9eb2f80f316da061f3d025c.jpg"   class="" data-copyright="Foto: SWR" alt="Nachrichtensprecherin Christina Dietrich (Foto: SWR)" title="Foto: SWR" width="320" height="320" loading="lazy" decoding="async"/>
</picture>
</a>
</div>
<h3 class="hgroup">
<a href="/swraktuell/rheinland-pfalz/sendung-1800-uhr-vom-822024-104.html" title="SWR Aktuell RP - Sendung 18:00 Uhr vom 8.2.2024" class="teasertracking clickzone">
<span class="topline">SWR Aktuell RP</span>
<span class="headline">Sendung 18:00 Uhr vom 8.2.2024</span>
</a>
</h3>
</header>
<a href="/swraktuell/rheinland-pfalz/sendung-1800-uhr-vom-822024-104.html" title="SWR Aktuell RP - Sendung 18:00 Uhr vom 8.2.2024" class="teasertracking clickzone">
<div class="lead description">
<p>Nachrichten aus Rheinland-Pfalz mit Christina Dietrich.
</p>
</div>
</a>
<footer>
<p class="broadcastinfo">
<time content="2024-02-08T18:00">
<span class="date">
<abbr
title="Donnerstag">Do.</abbr><span>8.2.2024</span></span>
<span class="time">18:00 Uhr</span>
</time>
<span>SWR Aktuell Rheinland-Pfalz</span>
<span>
<span>SWR RP</span>
</span>
</p>
</footer>
</article>
</div>
<div class="col-sm-6 col-lg-6">
<article data-id="video-sendung-1700-uhr-vom-822024-100"  class="teaser media-video teaser-majestix teaser-broadcast broadcast-info-hidden broadcast-info-expired rubrik-swraktuell teaser-majestix-2er-karussell media-16by9"
data-crawler="ignore">
<script data-spy="piano" type="application/json">{"onsitead_advertiser":"sendung-1700-uhr-vom-822024-100","onsitead_creation":"Sendung 17:00 Uhr vom 8.2.2024","onsitead_url":"https://www.swr.de/swraktuell/rheinland-pfalz/sendung-1700-uhr-vom-822024-100.html"}</script>
<header>
<div class="image">
<a href="/swraktuell/rheinland-pfalz/sendung-1700-uhr-vom-822024-100.html" title="SWR Aktuell RP - Sendung 17:00 Uhr vom 8.2.2024" class="teasertracking clickzone" role="presentation" tabindex="-1">
<picture>
<source  media="(min-width: 1200px)" srcset="/swraktuell/rheinland-pfalz/1707409226345%2Csendung-1700-uhr-vom-822024-102~_v-16x9@2dXS_-b9bac15fe0af001f663131e7814653aed0ad7167.jpg 320w,/swraktuell/rheinland-pfalz/1707409226345%2Csendung-1700-uhr-vom-822024-102~_v-16x9@2dS_-6be50a9c75559ca1aaf1d0b25bae287afdcd877a.jpg 480w,/swraktuell/rheinland-pfalz/1707409226345%2Csendung-1700-uhr-vom-822024-102~_v-16x9@2dM_-ad6791ade5eb8b5c935dd377130b903c4b5781d8.jpg 768w"  sizes="(min-width: 1200px) 400px" width="320" height="180"/>
<source  srcset="/swraktuell/rheinland-pfalz/1707409226345%2Csendung-1700-uhr-vom-822024-102~_v-1x1@2dXS_-9a91314e681c924f29ec89ca45e4e12f5b1d728e.jpg 320w,/swraktuell/rheinland-pfalz/1707409226345%2Csendung-1700-uhr-vom-822024-102~_v-1x1@2dS_-4026684eab220e7fb9eb2f80f316da061f3d025c.jpg 480w"  sizes="(min-width: 768px) 300px, (min-width: 510px) 400px, calc(100vw - 152px)" width="320" height="320"/>
<img src="/swraktuell/rheinland-pfalz/1707409226345%2Csendung-1700-uhr-vom-822024-102~_v-1x1@2dS_-4026684eab220e7fb9eb2f80f316da061f3d025c.jpg"   class="" data-copyright="Foto: SWR" alt="Nachrichtensprecherin Christina Dietrich (Foto: SWR)" title="Foto: SWR" width="320" height="320" loading="lazy" decoding="async"/>
</picture>
</a>
</div>
<h3 class="hgroup">
<a href="/swraktuell/rheinland-pfalz/sendung-1700-uhr-vom-822024-100.html" title="SWR Aktuell RP - Sendung 17:00 Uhr vom 8.2.2024" class="teasertracking clickzone">
<span class="topline">SWR Aktuell RP</span>
<span class="headline">Sendung 17:00 Uhr vom 8.2.2024</span>
</a>
</h3>
</header>
<a href="/swraktuell/rheinland-pfalz/sendung-1700-uhr-vom-822024-100.html" title="SWR Aktuell RP - Sendung 17:00 Uhr vom 8.2.2024" class="teasertracking clickzone">
<div class="lead description">
<p>Nachrichten aus Rheinland-Pfalz mit Christina Dietrich.
</p>
</div>
</a>
<footer>
<p class="broadcastinfo">
<time content="2024-02-08T17:00">
<span class="date">
<abbr
title="Donnerstag">Do.</abbr><span>8.2.2024</span></span>
<span class="time">17:00 Uhr</span>
</time>
<span>SWR Aktuell Rheinland-Pfalz</span>
<span>
<span>SWR RP</span>
</span>
</p>
</footer>
</article>
</div>
</div>
</div>
</div>

<div class="container">
<div class="row">
<h2>Info und Service</h2>
<div class="col-sm-4"
>
<article data-id="teaser-regionalprogramm-radio-trier-100"  class="teaser media-video teaser-asterus rubrik-swraktuell teaser-16by9 teaser-image-xs-1by1 teaser-image-sm-16by9"
data-crawler="ignore">
<script data-spy="piano" type="application/json">{"onsitead_advertiser":"regionalprogramm-radio-trier-100","onsitead_creation":"SWR4 Webradio","onsitead_url":"https://www.swr.de/swr4/programm-rp/webcam-studiokamera-sendestudio-live-swr4-rheinland-pfalz-102.html"}</script>
<header>
<mark>Trier</mark>
<div class="image">
<a href="/swr4/programm-rp/webcam-studiokamera-sendestudio-live-swr4-rheinland-pfalz-102.html" title="Regionalprogramm - SWR4 Webradio" class="teasertracking clickzone" role="presentation" tabindex="-1">
<picture>
<source  media="(min-width: 768px)" srcset="/swraktuell/rheinland-pfalz/trier/1673432375803%2Candrea-meisberger-112~_v-16x9@2dXS_-b9bac15fe0af001f663131e7814653aed0ad7167.jpg 320w,/swraktuell/rheinland-pfalz/trier/1673432375803%2Candrea-meisberger-112~_v-16x9@2dS_-6be50a9c75559ca1aaf1d0b25bae287afdcd877a.jpg 480w,/swraktuell/rheinland-pfalz/trier/1673432375803%2Candrea-meisberger-112~_v-16x9@2dM_-ad6791ade5eb8b5c935dd377130b903c4b5781d8.jpg 768w"  sizes="(min-width: 768px) 320px" width="320" height="180"/>
<source  srcset="/swraktuell/rheinland-pfalz/trier/1673432375803%2Candrea-meisberger-112~_v-1x1@2dXS_-9a91314e681c924f29ec89ca45e4e12f5b1d728e.jpg 320w,/swraktuell/rheinland-pfalz/trier/1673432375803%2Candrea-meisberger-112~_v-1x1@2dS_-4026684eab220e7fb9eb2f80f316da061f3d025c.jpg 480w,/swraktuell/rheinland-pfalz/trier/1673432375803%2Candrea-meisberger-112~_v-1x1@2dM_-733e4a95d343c52e922dfd8e3ff26ae78b29e5be.jpg 768w"  sizes="calc(100vw - 32px)" width="320" height="320"/>
<img src="/swraktuell/rheinland-pfalz/trier/1673432375803%2Candrea-meisberger-112~_v-1x1@2dM_-733e4a95d343c52e922dfd8e3ff26ae78b29e5be.jpg"   class="" data-copyright="Foto: SWR" alt="Andrea Meisberger am Mikrofon (Foto: SWR)" title="Foto: SWR" width="320" height="320" loading="lazy" decoding="async"/>
</picture>
</a>
</div>
<h3 class="hgroup">
<a href="/swr4/programm-rp/webcam-studiokamera-sendestudio-live-swr4-rheinland-pfalz-102.html" title="Regionalprogramm - SWR4 Webradio" class="teasertracking clickzone">
<span class="topline">Regionalprogramm</span>
<span class="headline">SWR4 Webradio</span>
</a>
</h3>
</header>
<a href="/swr4/programm-rp/webcam-studiokamera-sendestudio-live-swr4-rheinland-pfalz-102.html" title="Regionalprogramm - SWR4 Webradio" class="teasertracking clickzone">
<div class="lead description">
<p>SWR4 Webradio
</p>
</div>
</a>
</article>
</div>
<div class="col-sm-4"
>
<article data-id="teaser-verkehr-102"  class="teaser media-article teaser-asterus rubrik-swrglobal teaser-16by9 teaser-image-xs-1by1 teaser-image-sm-16by9"
data-crawler="ignore">
<script data-spy="piano" type="application/json">{"onsitead_advertiser":"verkehr-102","onsitead_creation":"Verkehr","onsitead_url":"https://www.swr.de/verkehr/index.html"}</script>
<header>
<div class="image">
<a href="/verkehr/index.html" title="Service - Verkehr" class="teasertracking clickzone" role="presentation" tabindex="-1">
<picture>
<source  media="(min-width: 768px)" srcset="/swraktuell/baden-wuerttemberg/1671100370656%2Cverkehrsmeldungen-service-100~_v-16x9@2dXS_-b9bac15fe0af001f663131e7814653aed0ad7167.jpg 320w,/swraktuell/baden-wuerttemberg/1671100370656%2Cverkehrsmeldungen-service-100~_v-16x9@2dS_-6be50a9c75559ca1aaf1d0b25bae287afdcd877a.jpg 480w,/swraktuell/baden-wuerttemberg/1671100370656%2Cverkehrsmeldungen-service-100~_v-16x9@2dM_-ad6791ade5eb8b5c935dd377130b903c4b5781d8.jpg 768w"  sizes="(min-width: 768px) 320px" width="320" height="180"/>
<source  srcset="/swraktuell/baden-wuerttemberg/1671100370656%2Cverkehrsmeldungen-service-100~_v-1x1@2dXS_-9a91314e681c924f29ec89ca45e4e12f5b1d728e.jpg 320w,/swraktuell/baden-wuerttemberg/1671100370656%2Cverkehrsmeldungen-service-100~_v-1x1@2dS_-4026684eab220e7fb9eb2f80f316da061f3d025c.jpg 480w,/swraktuell/baden-wuerttemberg/1671100370656%2Cverkehrsmeldungen-service-100~_v-1x1@2dM_-733e4a95d343c52e922dfd8e3ff26ae78b29e5be.jpg 768w"  sizes="calc(100vw - 32px)" width="320" height="320"/>
<img src="/swraktuell/baden-wuerttemberg/1671100370656%2Cverkehrsmeldungen-service-100~_v-1x1@2dM_-733e4a95d343c52e922dfd8e3ff26ae78b29e5be.jpg"   class="" data-copyright="Foto: dpa Bildfunk, Picture Alliance" alt="Autos stehen im Stau. Symbolbild mit Schriftzug Verkehr für aktuelle Verkehrsmeldungen. (Foto: dpa Bildfunk, Picture Alliance)" title="Foto: dpa Bildfunk, Picture Alliance" width="320" height="320" loading="lazy" decoding="async"/>
</picture>
</a>
</div>
<h3 class="hgroup">
<a href="/verkehr/index.html" title="Service - Verkehr" class="teasertracking clickzone">
<span class="topline">Service</span>
<span class="headline">Verkehr</span>
</a>
</h3>
</header>
<a href="/verkehr/index.html" title="Service - Verkehr" class="teasertracking clickzone">
<div class="lead description">
<p>Infos zu Staus, Unfällen, Baustellen und Sperrungen auf Autobahnen und Bundesstraßen in Baden-Württemberg und Rheinland-Pfalz direkt aus der Verkehrsredaktion des SWR.
</p>
</div>
</a>
</article>
</div>
<div class="col-sm-4"
>
<article data-id="article-swr-studio-trier-100"  class="teaser media-article teaser-asterus rubrik-swraktuell teaser-16by9 teaser-image-xs-1by1 teaser-image-sm-16by9"
data-crawler="ignore">
<script data-spy="piano" type="application/json">{"onsitead_advertiser":"swr-studio-trier-100","onsitead_creation":"SWR Studio Trier","onsitead_url":"https://www.swr.de/swraktuell/rheinland-pfalz/trier/swr-studio-trier-100.html"}</script>
<header>
<div class="image">
<a href="/swraktuell/rheinland-pfalz/trier/swr-studio-trier-100.html" title="Organisation - SWR Studio Trier" class="teasertracking clickzone" role="presentation" tabindex="-1">
<picture>
<source  media="(min-width: 768px)" srcset="/unternehmen/organisation/standorte/1654850323941%2Cstudio-trier-102~_v-16x9@2dXS_-b9bac15fe0af001f663131e7814653aed0ad7167.jpg 320w,/unternehmen/organisation/standorte/1654850323941%2Cstudio-trier-102~_v-16x9@2dS_-6be50a9c75559ca1aaf1d0b25bae287afdcd877a.jpg 480w,/unternehmen/organisation/standorte/1654850323941%2Cstudio-trier-102~_v-16x9@2dM_-ad6791ade5eb8b5c935dd377130b903c4b5781d8.jpg 768w"  sizes="(min-width: 768px) 320px" width="320" height="180"/>
<source  srcset="/unternehmen/organisation/standorte/1654850323941%2Cstudio-trier-102~_v-1x1@2dXS_-9a91314e681c924f29ec89ca45e4e12f5b1d728e.jpg 320w,/unternehmen/organisation/standorte/1654850323941%2Cstudio-trier-102~_v-1x1@2dS_-4026684eab220e7fb9eb2f80f316da061f3d025c.jpg 480w,/unternehmen/organisation/standorte/1654850323941%2Cstudio-trier-102~_v-1x1@2dM_-733e4a95d343c52e922dfd8e3ff26ae78b29e5be.jpg 768w"  sizes="calc(100vw - 32px)" width="320" height="320"/>
<img src="/unternehmen/organisation/standorte/1654850323941%2Cstudio-trier-102~_v-1x1@2dM_-733e4a95d343c52e922dfd8e3ff26ae78b29e5be.jpg"   class="" data-copyright="Foto: SWR" alt="Das Bild zigt das Studio Trier (Foto: SWR)" title="Foto: SWR" width="320" height="320" loading="lazy" decoding="async"/>
</picture>
</a>
</div>
<h3 class="hgroup">
<a href="/swraktuell/rheinland-pfalz/trier/swr-studio-trier-100.html" title="Organisation - SWR Studio Trier" class="teasertracking clickzone">
<span class="topline">Organisation</span>
<span class="headline">SWR Studio Trier</span>
</a>
</h3>
</header>
<a href="/swraktuell/rheinland-pfalz/trier/swr-studio-trier-100.html" title="Organisation - SWR Studio Trier" class="teasertracking clickzone">
<div class="lead description">
<p>Das SWR Studio Trier betreut den Westen von Rheinland-Pfalz. Es liegt mitten in Deutschlands ältester Stadt. Hier, von der Porta Nigra aus, geht der Blick auch zu den Nachbarn in der Europäischen Großregion. <br/>
</p>
</div>
</a>
</article>
</div>
</div>
</div>


<!-- Piano -->
<script type="text/template" id="piano"
data-redaktion='Studio Trier'
data-objekttyp='page'
data-page-id='74aae14d5d52a03bc54225ccf073cf4982301c99e93566eb2141ee4889ab269f'
data-first-published='2018-04-05T13:22:25'
data-page-chapter1='SWR Aktuell Rheinland-Pfalz'
data-page-chapter2='Trier'
data-page-categories='[]'
data-site-level2='79'
data-content-id='trier-102'
data-page='SWR Aktuell Studio Trier'
data-page-producers='[]'
></script>
<!-- Chartbeat -->
<script type="text/template" id="chartbeat" data-useCanonical="true"  data-sections="swraktuell,rheinland-pfalz,trier"></script>




</main>

<aside id="SWR Aktuell" class="big-footer" itemscope itemtype="https://schema.org/Organization">
<meta itemprop="name" content="SWR">
<link itemprop="url" href="https://www.swr.de">
<meta itemprop="email" content="info@swr.de">
<link itemprop="sameAs" href="https://de.wikipedia.org/wiki/S%C3%BCdwestrundfunk">

<span itemprop="parentOrganization" itemscope itemtype="https://schema.org/Organization">
<meta itemprop="name" content="SWR">
<meta itemprop="alternateName" content="Südwestrundfunk">
<link itemprop="url" href="http://www.swr.de">
<link itemprop="sameAs" href="https://de.wikipedia.org/wiki/Südwestrundfunk">
</span>
<span itemprop="memberOf" itemscope itemtype="https://schema.org/Organization">
<meta itemprop="name" content="ARD">
<meta itemprop="alternateName"
content="Arbeitsgemeinschaft der öffentlich-rechtlichen Rundfunkanstalten der Bundesrepublik Deutschland">
<link itemprop="url" href="http://www.ard.de">
<link itemprop="sameAs" href="https://de.wikipedia.org/wiki/ARD">
</span>
</aside>

<footer id="footer" role="contentinfo" data-crawler="ignore">
<div class="container" data-nosnippet>
<nav role="navigation">
<div class="logo-swr-ard">
<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" class="icon-logo-swr-ard">
<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/assets/images/swr/symbols.svg?596bb5ba0636eda5b392b8c44ca2d167#SWR_Teil_der_ARD"></use>
</svg>
</div>
<div class="menubox first" data-menu-box="footer">
<ul class="container nav navbar-nav">
<li class="swrglobal">
<button data-toggle="collapse" aria-expanded="false" data-target="#collapse-0">Themen</button>
<ul class="collapse" id="collapse-0">
<li class="swraktuell">
<a href="/swraktuell/index.html" title="SWR Aktuell">SWR Aktuell</a>
</li>
<li class="swr2">
<a href="/swr2/index.html" title="SWR2 - Kultur neu entdecken">SWR Kultur</a>
</li>
<li class="swrsport">
<a href="/sport/index.html" title="SWR Sport">SWR Sport</a>
</li>
<li class="swrwissen">
<a href="/wissen/index.html" title="SWR Wissen">SWR Wissen</a>
</li>
<li class="swrheimat">
<a href="/heimat/index.html" title="SWR Heimat ">SWR Heimat</a>
</li>
<li class="swrschlager">
<a href="/schlager/index.html" title="Mehr aus der Schlagerwelt - SWR Schlager">SWR Schlager</a>
</li>
<li class="knet-global">
<a href="https://www.kindernetz.de/index.html" title="Startseite SWR Kindernetz">SWR Kindernetz</a>
</li>
<li class="planet-schule">
<a href="https://www.planet-schule.de/index.html" target="_blank" rel="noopener" title="planet schule">planet schule</a>
</li>
<li class="swrglobal">
<a href="/archiv/index.html" title="SWR Archiv">Archiv</a>
</li>
</ul>
</li>
<li class="swrglobal">
<button data-toggle="collapse" aria-expanded="false" data-target="#collapse-11">Video und Audio</button>
<ul class="collapse" id="collapse-11">
<li class="swrfernsehen">
<a href="https://www.swrfernsehen.de/index.html" title="SWR Fernsehen - Das aktuelle Programm">TV</a>
</li>
<li>
<a href="https://www.ardmediathek.de/swr/live/Y3JpZDovL3N3ci5kZS8xMzQ4MTA0Mg" target="_blank" rel="noopener" title="ARD Mediathek" data-pjax="0">ARD Mediathek</a>
</li>
<li>
<a href="https://www.ardaudiothek.de/sender/swr" target="_blank" rel="noopener" title="ARD Audiothek" data-pjax="0">ARD Audiothek</a>
</li>
<li class="swr1">
<a href="/swr1/index.html" title="Eins gehört gehört. - SWR1">SWR1</a>
</li>
<li>
<a href="/swr2/programm/index.html" title="SWR2">SWR2</a>
</li>
<li>
<a href="https://www.swr3.de/index.html" target="_blank" rel="noopener" title="SWR3">SWR3</a>
</li>
<li class="swr4">
<a href="/swr4/index.html" title="SWR4 - praktische Alltagstipps, viel Musik und tolle Promi-Bilder">SWR4</a>
</li>
<li class="dasding">
<a href="https://www.dasding.de/index.html" title="DASDING">DASDING</a>
</li>
</ul>
</li>
<li class="swrglobal">
<button data-toggle="collapse" aria-expanded="false" data-target="#collapse-21">Unternehmen</button>
<ul class="collapse" id="collapse-21">
<li class="swrglobal">
<a href="/unternehmen/index.html" title="Der SWR">Der SWR</a>
</li>
<li class="swrglobal">
<a href="/unternehmen/organisation/index.html" title="Das ist der SWR">Organisation</a>
</li>
<li class="swrglobal">
<a href="/unternehmen/karriere/index.html" title="Karriere im SWR">Karriere</a>
</li>
<li class="swrglobal">
<a href="/unternehmen/kommunikation/index.html" title="SWR Kommunikation">Kommunikation</a>
</li>
</ul>
</li>
<li class="swrglobal">
<button data-toggle="collapse" aria-expanded="false" data-target="#collapse-27">Gremien</button>
<ul class="collapse" id="collapse-27">
<li>
<a href="/gremien/index.html" title="Übersicht der Gremien">Übersicht der Gremien</a>
</li>
<li>
<a href="/gremien/rundfunkrat/rundfunkrat-100.html" title="Rundfunkrat">Rundfunkrat</a>
</li>
<li>
<a href="/gremien/verwaltungsrat/verwaltungsrat-100.html" title="Verwaltungsrat">Verwaltungsrat</a>
</li>
<li>
<a href="/gremien/rundfunkrat/dreistufentest-100.html" title="Dreistufentest">Dreistufentest</a>
</li>
<li>
<a href="/gremien/artikel-landesrundfunkrat-bw-100.html" title="Landesrundfunkrat BW">Landesrundfunkrat BW</a>
</li>
<li>
<a href="/gremien/artikel-landesrundfunkrat-rp-100.html" title="Landesrundfunkrat RP">Landesrundfunkrat RP</a>
</li>
</ul>
</li>
<li class="swrglobal">
<button data-toggle="collapse" aria-expanded="false" data-target="#collapse-35">Service</button>
<ul class="collapse" id="collapse-35">
<li>
<a href="https://www.swr.de/home/ansprechpartner-100.html" title="Kontakt" data-pjax="0">Kontakt</a>
</li>
<li>
<a href="https://www.swr.de/home/swr-von-a-z-100.html" title="SWR A-Z" data-pjax="0">SWR A-Z</a>
</li>
<li>
<a href="https://www.swr.de/unternehmen/besucherfuehrung-100.html" title="Besucherführungen" data-pjax="0">Besucherführungen</a>
</li>
<li>
<a href="https://www.swr.de/unternehmen/swr-veranstaltungen-102.html" title="Veranstaltungen" data-pjax="0">Veranstaltungen</a>
</li>
<li>
<a href="https://www.swr.de/unternehmen/empfang/empfang-102.html" title="Empfang &amp; Technik" data-pjax="0">Empfang &amp; Technik</a>
</li>
<li>
<a href="https://www.swr-shop.de/" target="_blank" rel="external noopener noreferrer" title="SWR Shop" data-pjax="0">SWR Shop</a>
</li>
</ul>
</li>
</ul>
</div>
<div class="menubox" data-menu-box="footer-meta">
<ul class="container nav navbar-nav">
<li class="imgrights">
<button data-toggle="copyrights">Bildrechte</button>
</li>
<li class="swrglobal"><a href="/datenschutz/index.html" title="Datenschutz bei SWR.de">Datenschutz</a></li>
<li class="swrglobal"><a href="/impressum/index.html" title="Impressum ">Impressum</a></li>
<li class="copy">
<span>&copy; SWR 2024</span>
</li>
</ul>
</div>
<a href="#" class="to-top"><span class="sr-only">nach oben</span></a>
</nav>

</div>
</footer>

</div>
</div>
<!-- javascript (jquery, libraries, …) -->
<script type="text/javascript">
!function(e,t){var n=function(){try{return t.createElement("link").relList.supports("preload")}catch(e){return!1}}();function r(e,t){var n;function r(){!n&&t&&(n=!0,t.call(e))}e.addEventListener&&e.addEventListener("load",r),e.attachEvent&&e.attachEvent("onload",r),"isApplicationInstalled"in navigator&&"onLoadCssDefined"in e&&e.onLoadCssDefined(r)}e.loadCSS=function(e,n,r){var a,i=t.createElement("link");if(n)a=n;else{var o=(t.body||t.getElementsByTagName("head")[0]).childNodes;a=o[o.length-1]}var l=t.styleSheets;i.rel="stylesheet",i.href=e,i.media="only x",function e(n){if(t.body)return n();setTimeout((function(){e(n)}))}((function(){a.parentNode.insertBefore(i,n?a:a.nextSibling)}));var d=function(e){for(var t=i.href,n=l.length;n--;)if(l[n].href===t)return e();setTimeout((function(){d(e)}))};function s(){i.addEventListener&&i.removeEventListener("load",s),i.media=r||"all"}return i.addEventListener&&i.addEventListener("load",s),i.onLoadCssDefined=d,d(s),i};for(var a,i,o=t.getElementsByTagName("link"),l=0;l<o.length;l++)"preload"===(a=o[l]).rel&&"style"===a.getAttribute("as")&&(n?r(a,(function(){this.rel="stylesheet"})):(i=e.loadCSS(a.href,a),a.rel=null,r(i,(function(){}))))}(window,document),function(e){for(var t=e.getElementsByTagName("link"),n=0;n<t.length;n++){var r=t[n];if("preload"===r.rel&&"script"===r.getAttribute("as")){var a=e.createElement("script");a.async=!1,a.defer=!0,a.src=r.href,e.head.appendChild(a)}}}(document);
//# sourceMappingURL=common-asynchron.min.js.map
</script>

<div id="playerbar">
<div class="container playerbar-container playerbar-fixed">
<!-- Toggle Button -->
<button class="btn playerbar-btn-collapse" type="button" data-toggle="collapse"
data-target="#playerbarContantpane" aria-expanded="false" aria-controls="playerbarContantpane"
title="Einklappen / Ausklappen">
<span class="playerbar-label playerbar-label-pressed">Einklappen</span>
<span class="playerbar-label playerbar-label-not-pressed">Ausklappen</span>
</button>
<!-- Wellenswitcher -->
<div id="stations">
<!-- Drop-Up -->
<nav class="dropup">
<button class="btn btn-secondary dropdown-toggle" type="button" id="stationMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
<span>Sender auswählen</span>
</button>
<ul class="dropdown-menu station-list" aria-labelledby="stationMenuButton">
<li class="station-item">
<button data-spy="audioplayer" data-stationid="dasding" data-config-uri="https://www.dasding.de/~webradio/administration/playerbar/dasding-playerbar-100~playerbarContainer.json" class="btn btn-station">
<figure class="station-image">
<div class="image">
<img src="/assets/images/swr/playerleiste/dasding/logo.svg" title="Logo - DASDING" />
</div>
</figure>
<span class="station-name">DASDING</span>
</button>
</li>
<li class="station-item">
<button data-spy="audioplayer" data-stationid="swraktuell" data-config-uri="https://www.swr.de/~webradio/swraktuell/playerbar/swraktuell-playerbar-100~playerbarContainer.json" class="btn btn-station">
<figure class="station-image">
<div class="image">
<img src="/assets/images/swr/playerleiste/swraktuell/logo.svg" title="Logo - SWR Aktuell" />
</div>
</figure>
<span class="station-name">SWR Aktuell</span>
</button>
</li>
<li class="station-item">
<button data-spy="audioplayer" data-stationid="swr1bw" data-config-uri="https://www.swr.de/~webradio/swr1/bw/swr1bw-playerbar-100~playerbarContainer.json" class="btn btn-station">
<figure class="station-image">
<div class="image">
<img src="/assets/images/swr/playerleiste/swr1/logo_black.svg" title="Logo - SWR1 Baden-Württemberg" />
</div>
</figure>
<span class="station-name">SWR1 Baden-Württemberg</span>
</button>
</li>
<li class="station-item">
<button data-spy="audioplayer" data-stationid="swr1rp" data-config-uri="https://www.swr.de/~webradio/swr1/rp/swr1rp-playerbar-100~playerbarContainer.json" class="btn btn-station">
<figure class="station-image">
<div class="image">
<img src="/assets/images/swr/playerleiste/swr1/logo_black.svg" title="Logo - SWR1 Rheinland-Pfalz" />
</div>
</figure>
<span class="station-name">SWR1 Rheinland-Pfalz</span>
</button>
</li>
<li class="station-item">
<button data-spy="audioplayer" data-stationid="swr2" data-config-uri="https://www.swr.de/~webradio/swr2/swr2-playerbar-102~playerbarContainer.json" class="btn btn-station">
<figure class="station-image">
<div class="image">
<img src="/assets/images/swr/playerleiste/swr2/logo.svg" title="Logo - SWR2" />
</div>
</figure>
<span class="station-name">SWR2</span>
</button>
</li>
<li class="station-item">
<button data-spy="audioplayer" data-stationid="swr3" data-config-uri="https://www.swr.de/~webradio/administration/playerbar-swr3/swr3-playerbar-100~playerbarContainer.json" class="btn btn-station">
<figure class="station-image">
<div class="image">
<img src="/assets/images/swr/playerleiste/swr3/logo-rot.svg" title="Logo - SWR3" />
</div>
</figure>
<span class="station-name">SWR3</span>
</button>
</li>
<li class="station-item">
<button data-spy="audioplayer" data-stationid="swr4bw" data-config-uri="https://www.swr.de/~webradio/swr4/swr4bw-playerbar-100~playerbarContainer.json" class="btn btn-station">
<figure class="station-image">
<div class="image">
<img src="/assets/images/swr/playerleiste/swr4/logo_black.svg" title="Logo - SWR4 Baden-Württemberg" />
</div>
</figure>
<span class="station-name">SWR4 Baden-Württemberg</span>
</button>
</li>
<li class="station-item">
<button data-spy="audioplayer" data-stationid="swr4fn" data-config-uri="https://www.swr.de/~webradio/swr4/nachrichten/friedrichshafen/swr4fn-playerbar-100~playerbarContainer.json" class="btn btn-station">
<figure class="station-image">
<div class="image">
<img src="/assets/images/swr/playerleiste/swr4/logo_black.svg" title="Logo - SWR4 Friedrichshafen" />
</div>
</figure>
<span class="station-name">SWR4 Friedrichshafen</span>
</button>
</li>
<li class="station-item">
<button data-spy="audioplayer" data-stationid="swr4hn" data-config-uri="https://www.swr.de/~webradio/swr4/nachrichten/heilbronn/swr4hn-playerbar-100~playerbarContainer.json" class="btn btn-station">
<figure class="station-image">
<div class="image">
<img src="/assets/images/swr/playerleiste/swr4/logo_black.svg" title="Logo - SWR4 Heilbronn" />
</div>
</figure>
<span class="station-name">SWR4 Heilbronn</span>
</button>
</li>
<li class="station-item">
<button data-spy="audioplayer" data-stationid="swr4ka" data-config-uri="https://www.swr.de/~webradio/swr4/nachrichten/karlsruhe/karlsruhe-playerbar-100~playerbarContainer.json" class="btn btn-station">
<figure class="station-image">
<div class="image">
<img src="/assets/images/swr/playerleiste/swr4/logo_black.svg" title="Logo - SWR4 Karlsruhe" />
</div>
</figure>
<span class="station-name">SWR4 Karlsruhe</span>
</button>
</li>
<li class="station-item">
<button data-spy="audioplayer" data-stationid="swr4ma" data-config-uri="https://www.swr.de/~webradio/swr4/nachrichten/mannheim/mannheim-playerbar-100~playerbarContainer.json" class="btn btn-station">
<figure class="station-image">
<div class="image">
<img src="/assets/images/swr/playerleiste/swr4/logo_black.svg" title="Logo - SWR4 Mannheim" />
</div>
</figure>
<span class="station-name">SWR4 Mannheim</span>
</button>
</li>
<li class="station-item">
<button data-spy="audioplayer" data-stationid="swr4st" data-config-uri="https://www.swr.de/~webradio/swr4/nachrichten/stuttgart/stuttgart-playerbar-100~playerbarContainer.json" class="btn btn-station">
<figure class="station-image">
<div class="image">
<img src="/assets/images/swr/playerleiste/swr4/logo_black.svg" title="Logo - SWR4 Stuttgart" />
</div>
</figure>
<span class="station-name">SWR4 Stuttgart</span>
</button>
</li>
<li class="station-item">
<button data-spy="audioplayer" data-stationid="swr4fr" data-config-uri="https://www.swr.de/~webradio/swr4/nachrichten/suedbaden/suedbaden-playerbar-100~playerbarContainer.json" class="btn btn-station">
<figure class="station-image">
<div class="image">
<img src="/assets/images/swr/playerleiste/swr4/logo_black.svg" title="Logo - SWR4 Südbaden" />
</div>
</figure>
<span class="station-name">SWR4 Südbaden</span>
</button>
</li>
<li class="station-item">
<button data-spy="audioplayer" data-stationid="swr4tu" data-config-uri="https://www.swr.de/~webradio/swr4/nachrichten/tuebingen/tuebingen-playerbar-100~playerbarContainer.json" class="btn btn-station">
<figure class="station-image">
<div class="image">
<img src="/assets/images/swr/playerleiste/swr4/logo_black.svg" title="Logo - SWR4 Tübingen" />
</div>
</figure>
<span class="station-name">SWR4 Tübingen</span>
</button>
</li>
<li class="station-item">
<button data-spy="audioplayer" data-stationid="swr4ul" data-config-uri="https://www.swr.de/~webradio/swr4/nachrichten/ulm/ulm-playerbar-100~playerbarContainer.json" class="btn btn-station">
<figure class="station-image">
<div class="image">
<img src="/assets/images/swr/playerleiste/swr4/logo_black.svg" title="Logo - SWR4 Ulm" />
</div>
</figure>
<span class="station-name">SWR4 Ulm</span>
</button>
</li>
<li class="station-item">
<button data-spy="audioplayer" data-stationid="swr4rp" data-config-uri="https://www.swr.de/~webradio/swr4/programm-rp/swr4rp-playerbar-100~playerbarContainer.json" class="btn btn-station">
<figure class="station-image">
<div class="image">
<img src="/assets/images/swr/playerleiste/swr4/logo_black.svg" title="Logo - SWR4 Rheinland-Pfalz" />
</div>
</figure>
<span class="station-name">SWR4 Rheinland-Pfalz</span>
</button>
</li>
<li class="station-item">
<button data-spy="audioplayer" data-stationid="swr4kl" data-config-uri="https://www.swr.de/~webradio/swr4/nachrichten/kaiserslautern/swr4kl-playerbar-100~playerbarContainer.json" class="btn btn-station">
<figure class="station-image">
<div class="image">
<img src="/assets/images/swr/playerleiste/swr4/logo_black.svg" title="Logo - SWR4 Kaiserslautern" />
</div>
</figure>
<span class="station-name">SWR4 Kaiserslautern</span>
</button>
</li>
<li class="station-item">
<button data-spy="audioplayer" data-stationid="swr4ko" data-config-uri="https://www.swr.de/~webradio/swr4/nachrichten/koblenz/koblenz-playerbar-100~playerbarContainer.json" class="btn btn-station">
<figure class="station-image">
<div class="image">
<img src="/assets/images/swr/playerleiste/swr4/logo_black.svg" title="Logo - SWR4 Koblenz" />
</div>
</figure>
<span class="station-name">SWR4 Koblenz</span>
</button>
</li>
<li class="station-item">
<button data-spy="audioplayer" data-stationid="swr4lu" data-config-uri="https://www.swr.de/~webradio/swr4/nachrichten/ludwigshafen/ludwigshafen-playerbar-100~playerbarContainer.json" class="btn btn-station">
<figure class="station-image">
<div class="image">
<img src="/assets/images/swr/playerleiste/swr4/logo_black.svg" title="Logo - SWR4 Ludwigshafen" />
</div>
</figure>
<span class="station-name">SWR4 Ludwigshafen</span>
</button>
</li>
<li class="station-item">
<button data-spy="audioplayer" data-stationid="swr4mz" data-config-uri="https://www.swr.de/~webradio/swr4/nachrichten/mainz/swr4mz-playerbar-100~playerbarContainer.json" class="btn btn-station">
<figure class="station-image">
<div class="image">
<img src="/assets/images/swr/playerleiste/swr4/logo_black.svg" title="Logo - SWR4 Mainz" />
</div>
</figure>
<span class="station-name">SWR4 Mainz</span>
</button>
</li>
<li class="station-item">
<button data-spy="audioplayer" data-stationid="swr4tr" data-config-uri="https://www.swr.de/~webradio/swr4/nachrichten/trier/trier-playerbar-100~playerbarContainer.json" class="btn btn-station">
<figure class="station-image">
<div class="image">
<img src="/assets/images/swr/playerleiste/swr4/logo_black.svg" title="Logo - SWR4 Trier" />
</div>
</figure>
<span class="station-name">SWR4 Trier</span>
</button>
</li>
</ul>
</nav>
</div>
<!-- Audioplayer UI -->
<div id="audioplayer">
<audio controls controlsList="nodownload"></audio>
</div>
<div class="audioplayer-ui" role="application">
<button class="audioplayer-control" aria-pressed="false" data-spy="audioplayer" data-action="restart">
<span class="audioplayer-label">Erneut abspielen</span>
</button>
<button class="audioplayer-control" aria-pressed="false" data-spy="audioplayer" data-action="skip-previous">
<span class="audioplayer-label">Zurück</span>
</button>
<button class="audioplayer-control" aria-pressed="false" data-spy="audioplayer" data-action="rewind">
<span class="audioplayer-label">{seektime}&nbsp;Sekunden zurückspringen</span>
</button>
<button class="audioplayer-control" aria-pressed="false" aria-label="{title} abspielen" data-spy="audioplayer" data-action="play">
<span class="audioplayer-label audioplayer-label-pressed">Pause</span>
<span class="audioplayer-label audioplayer-label-not-pressed">Abspielen</span>
</button>
<button class="audioplayer-control" aria-pressed="false" data-spy="audioplayer" data-action="fast-forward">
<span class="audioplayer-label">{seektime}&nbsp;Sekunden vorwärtsspringen</span>
</button>
<button class="audioplayer-control" aria-pressed="false" data-spy="audioplayer" data-action="skip-next">
<span class="audioplayer-label">Weiter</span>
</button>
<div class="audioplayer-progress">
<input data-spy="audioplayer" data-action="seek" type="range" min="0" max="100" step="0.01" value="0"
aria-label="Schieberegler für Suche">
<progress class="audioplayer-progress-buffer" min="0" max="100" value="50">% gepuffert</progress>
<span class="audioplayer-label">00:00</span>
</div>
<div class="audioplayer-time audioplayer-time-current" aria-label="Aktuelle Zeit">00:00</div>
<div class="audioplayer-time audioplayer-time-duration" aria-label="Dauer">00:00</div>
<div class="audioplayer-volume">
<button class="audioplayer-control" aria-pressed="false" aria-label="Stumschalten" data-spy="audioplayer" data-action="mute">
<span class="audioplayer-label audioplayer-label-pressed">Stumschaltung aufheben</span>
<span class="audioplayer-label audioplayer-label-not-pressed">Stumschalten</span>
</button>
<input data-spy="audioplayer" data-action="volume" type="range" min="0" max="1" step="0.05" value="1" autocomplete="off"
aria-label="Lautstärke">
</div>
<dl class="audioplayer-title">
<dt>Titel</dt>
<dd></dd>
<dt>Interpret</dt>
<dd></dd>
</dl>
<button class="audioplayer-control" aria-pressed="false" data-spy="audioplayer" data-action="livestream">
<span class="audioplayer-label">Livestream</span>
</button>
</div>
</div>
<div class="collapse" id="playerbarContantpane">
<div class="container playerbar-container">
<!-- Close -->
<nav>
<button class="btn playerbar-btn-close" type="button" data-toggle="collapse"
data-target="#playerbarContantpane" aria-expanded="false" aria-controls="playerbarContantpane"
title="Schließen">
<span>Schließen</span>
</button>
</nav>
<!-- Content -->
</div>
</div>
</div>

</body>
</html>

