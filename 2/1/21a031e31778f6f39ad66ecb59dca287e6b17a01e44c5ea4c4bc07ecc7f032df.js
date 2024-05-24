/**
 * library.js
 * 
 * Modernizr 2.7.0
 * jQuery v3.6.0
 * jQuery Easing v1.3
 * jQuery Bez v1.0.10
 */

/*! Modernizr 2.7.0 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-csstransitions-touch-cssclasses-prefixed-teststyles-testprop-testallprops-prefixes-domprefixes
 * Customize: mspointer
 */
;window.Modernizr=(function(n,t,i){var e="2.7.0",l={},q=true,D=t.documentElement,E="modernizr",B=t.createElement(E),o=B.style,f,w={}.toString,y=" -webkit- -moz- -o- -ms- ".split(" "),d="Webkit Moz O ms",G=d.split(" "),p=d.toLowerCase().split(" "),j={},c={},u={},A=[],v=A.slice,b,z=s=({}).hasOwnProperty,C;if(!k(s,"undefined")&&!k(s.call,"undefined")){C=else{C=if(!Function.prototype.bind){Function.prototype.bind==j.csstransitions=j.mspointer=function(){var I=(n.navigator.msPointerEnabled)?true:false;return I};for(var g in j){if(C(j,g)){b=g.toLowerCase();l[b]=j[g]();A.push((l[b]?"":"no-")+b)}}l.addTest=r("");B=f=null;l._version=e;l._prefixes=y;l._domPrefixes=p;l._cssomPrefixes=G;l.testProp=l.testAllProps=a;l.testStyles=z;l.prefixed=D.className=D.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(q?" js "+A.join(" "):"");return l})(this,this.document);

/*! jQuery v3.6.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!"undefined"!=typeof window?window:this,;

/* jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/ | Open source under the BSD License. */
jQuery.easing.jswing=jQuery.easing.swing;jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:easeInQuad:easeOutQuad:easeInOutQuad:easeInCubic:easeOutCubic:easeInOutCubic:easeInQuart:easeOutQuart:easeInOutQuart:easeInQuint:easeOutQuint:easeInOutQuint:easeInSine:easeOutSine:easeInOutSine:easeInExpo:easeOutExpo:easeInOutExpo:easeInCirc:easeOutCirc:easeInOutCirc:easeInElastic:easeOutElastic:easeInOutElastic:easeInBack:easeOutBack:easeInOutBack:easeInBounce:easeOutBounce:easeInOutBounce:);

/*!
 * Bez v1.0.10-g5ae0136
 * http://github.com/rdallasgray/bez
 * 
 * A plugin to convert CSS3 cubic-bezier co-ordinates to jQuery-compatible easing functions
 * 
 * With thanks to Nikolay Nemshilov for clarification on the cubic-bezier maths
 * See http://st-on-it.blogspot.com/2011/05/calculating-cubic-bezier-function.html
 * 
 * Copyright 2011 Robert Dallas Gray. All rights reserved.
 * Provided under the FreeBSD license: https://github.com/rdallasgray/bez/blob/master/LICENSE.txt
*/jQuery.extend({bez:function(a){var b="bez_"+$.makeArray(arguments).join("_").replace(".","p");if(typeof jQuery.easing[b]!="function"){var c=function(a,b){var c=[null,null],d=[null,null],e=[null,null],f=g=h=return ;jQuery.easing[b]=return b}});