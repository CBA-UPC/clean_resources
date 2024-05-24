/*!
   JW Player version 8.23.1
   Copyright (c) 2021, JW Player, All Rights Reserved
   This source code and its use and distribution is subject to the terms
   and conditions of the applicable license agreement.
   https://www.jwplayer.com/tos/
   This product includes portions of other software. For the full text of licenses, see
   https://ssl.p.jwpcdn.com/player/v/8.23.1/notice.txt
*/
window.jwplayer=[function(t,e,n){"use strict";n.d(e,"a",(function(){return g})),n.d(e,"b",(function(){return k})),n.d(e,"c",(function(){return A}));var r=n(5),i=n(3),o=n(9),u=n(18),a=n(7);ar s,l,f="ontouchstart"in window,d="PointerEvent"in window&&!r.OS.android,p=!(d||f&&r.OS.mobile),h=r.Features.passiveEvents,v=!!h&&{passive:!0},g=o.a),m=/\s+/;unction y(t){if(!t.handlers.init){var e=t.el,n=t.passive,r=!!h&&{passive:n},o=u=w(t,"init"),_(t,"init",(,r)}}unction w(t,e){if(l||(l=new g(document).on("interaction")),!t.handlers.init&&!t.handlers.select){var n=t.el;C(t,e,"blur",(),C(t,e,"focus",()}}var O={drag:function(t){y(t)},dragStart:function(t){y(t)},dragEnd:function(t){y(t)},click:function(t){j(t)},doubleClick:longPress:focus:function(t){C(t,"focus","focus",(function(e){S(t,"focus",e)}))},blur:over:function(t){(d||p)&&C(t,i.Z,d?"pointerover":"mouseover",(function(e){"touch"!==e.pointerType&&T(t,i.Z,e)}))},out:move:enter:keydown:gesture:interaction:tap:function(){},doubleTap:function(){}};n(t,e,n){"use strict";var r=n(0),i=n(50),o=n(21),u=n(10),a=n(51),c=n(25),s=n(20);ar f=n(68),d=n.n(f),p=n(66);n.d(e,"b",(function(){return b}));,).default;

var jwDefaults = {
    "aspectratio": "16:9",
    "autostart": false,
    "controls": true,
    "cast": {
        "appid": "00000000"
    },
    "displaydescription": true,
    "displaytitle": true,
    "height": 360,
    "key": "ITWMv7t88JGzI0xPwW8I0+LveiXX9SWbfdmt0ArUSyc=",
    "mute": false,
    "ph": 1,
    "pid": "aVr2lJgW",
    "playbackRateControls": true,
    "preload": "none",
    "repeat": false,
    "stretching": "uniform",
    "width": "100%",
};
jwplayer.defaults = jwDefaults;