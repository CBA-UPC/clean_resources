/*!
* jQuery Mobile v1.4.5
* Copyright 2010, 2014 jQuery Foundation, Inc.
* jquery.org/license
*
* Modified to adapt the latest jQuery version (v3 above) included on WordPress 5.6:
* - (2020-12-11) - Try to access `.concat` of undefined `$.event.props` - removed.
* - (2021-02-04) - jQuery bind method is deprecated.
* - (2021-02-04) - jQuery unbind method is deprecated.
*/

((this,document,function(e,t,n,r){(function(e,t,n,r){unction N(t,n){var i=t.type,s,o,a,l,c,h,p,d,v;t=e.Event(t),t.type=n,s=t.originalEvent,o=[],i.search(/^(mouse|click)/)>-1&&(o=f);if(s)for(p=o.length,l;p;)l=o[--p],t[l]=s[l];i.search(/mouse(down|up)|click/)>-1&&!t.which&&(t.which=1);if(i.search(/^touch/)!==-1){a=T(s),i=a.touches,c=a.changedTouches,h=i&&i.length?i[0]:c&&c.length?c[0]:r;if(h)for(d=0,v=u.length;d<v;d++)l=u[d],t[l]=h[l]}return t}nction L(){g=!1}MouseBindings",s="virtualTouchID",o="vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel".split(" "),u="clientX clientY pageX pageY screenX screenY".split(" "),a=e.event.mouseHooks?e.event.mouseHooks.props:[],f=[],l={},c=0,h=0,p=0,d=!1,v=[],m=!1,g=!1,y="addEventListener"in n,b=e(n),w=1,E=0,S,x;e.vmouse={moveDistanceThreshold:10,clickDistanceThreshold:10,resetTimerDuration:1500};for(x=0;x<o.length;x++)e.event.special[o[x]]=U(o[x]);y&&n.addEventListener("click",!0)})(e,t,n),e),e),e,this)});