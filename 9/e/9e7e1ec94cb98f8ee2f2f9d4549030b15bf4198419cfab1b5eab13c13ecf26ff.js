/*!
 * Masonry PACKAGED v4.0.0
 * Cascading grid layout library
 * http://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */

!window,,this,,window,,window,,window,,window,function(t,e,i){"use strict"; s=document.documentElement.style,a="string"==typeof s.transition?"transition":"WebkitTransition",h="string"==typeof s.transform?"transform":"WebkitTransform",u={WebkitTransition:"webkitTransitionEnd",transition:"transitionend"}[a],d=[h,a,a+"Duration",a+"Property"],c=o.prototype=Object.create(e.prototype);c.constructor=o,c._create=c.handleEvent=c.getSize=function(){this.size=i(this.element)},c.css=c.getPosition=c.layoutPosition=c.getXValue=c.getYValue=c._transitionTo=c.getTranslate=c.goTo=c.moveTo=c._transitionTo,c.setPosition=c._nonTransition=c._transition=var l="opacity,"+r(d.transform||"transform");c.enableTransition=c.transition=o.prototype[a?"_transition":"_nonTransition"],c.onwebkitTransitionEnd=function(t){this.ontransitionend(t)},c.onotransitionend=var f={"-webkit-transform":"transform"};c.ontransitionend=c.disableTransition=c._removeStyles=var m={transitionProperty:"",transitionDuration:""};return c.removeTransitionStyles=c.removeElem=c.remove=c.reveal=c.onRevealTransitionEnd=c.getHideRevealTransitionEndProperty=c.hide=c.onHideTransitionEnd=c.destroy=o}),window,,window,;