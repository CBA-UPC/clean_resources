var tabcontrol;(function(n){tion k(n){n&&!ct(n)&&Lib.CssClass.add(n,"tab-disable")}function d(n){n&&Lib.CssClass.remove(n,"tab-disable")}ction r(n){return t(n,"appns")}unction t(n,t,i){if(i===void 0&&(i=null),!n)return null;var r="data-"+t;return i===null?n.getAttribute(r):(n.setAttribute(r,i),i)}function e(n,i){return i===void 0&&(i=null),i===null?parseInt(t(n,v),10):(t(n,v,i.toString()),i)}function lt(n,t,i){i===void 0&&(i=null);t.style.opacity="0";sb_st(function(){Lib.CssClass.add(t,"tab-hide");n.style.opacity="1";Lib.CssClass.remove(n,"tab-hide");i&&i()},0);Log.Log("Show","Tab","TabControl",!1,"AppNS",r(n),"K",u(n),"Category","CommonControls");Log.Log("Hide","Tab","TabControl",!1,"AppNS",r(t),"K",u(t),"Category","CommonControls")}function s(n){return t(n,tt)?!0:!1}function nt(n){return t(n,it)?!0:!1}function at(n){return t(n,l)?!0:!1}function vt(n,i){var r,y,p,e,u,c,v;if(i===void 0&&(i=null),r=t(n,o),r){if(y=t(n.parentNode,o),y&&r[0]==="#")for(p=r.substr(1).split("#"),r=y,e=0;e<p.length;++e)r=r.replace(new RegExp("\\{"+e+"\\}","gm"),p[e]);s(n)||t(n,o,"");var h=f(n),w=h.id+"_dynamic",a=sj_ce("div",w,"tab-ajaxLoad");h.innerHTML="";h.appendChild(a);u=sj_gx();c=t(f(n),"k");c=t(f(n),"appns")+"."+c.substring(0,c.indexOf("."));r+=(r.indexOf("?")!=-1?"&":"?")+"IID="+c+"&IG="+_G.IG;v="&darkschemeovr=1";_w.location.href.indexOf(v)!=-1&&r.indexOf(v)==-1&&(r+=v);u.open("GET",r,!0);sb_st(1e4);u.onreadystatechange=function(){var r;if(u!==null&&4===u.readyState){var e=u.status,f=u.responseText,o=!u.getAllResponseHeaders();if(u=null,r=200===e&&f!==null&&f!=="",r&&(h.style.overflow="hidden"),a.className=r?ut:ft,a.innerHTML=r?f:ot(),r){sb_st(et+80);nt(n)&&t(n,l,"1");r=!1;try{f&&(yt(a),_w.rms&&_w.rms.start(),r=!0)}catch(s){Log.Log("Error","Tab","ScriptException",!1,"Tx",s.message,"Category","CommonControls")}}else Log.Log("Error","Tab",o?"Timeout":""+e,!1,"Category","CommonControls");i&&i(r)}};u.send()}}function yt(n){var t=n.getElementsByTagName("script"),i;if(t)while(t.length>0)i=t[0],wt(i),pt(i)}function pt(n){n.parentNode.removeChild(n)}function wt(n){if(n){var t=sj_ce("script","");t.type="text/javascript";n.src?t.src=n.src:t.innerHTML=n.innerHTML;bt(t)}}unction h(n,t,i){var u,r;return(i===void 0&&(i=0),!n||n.clientHeight==0)?0:(u=c(n),u>=i)?t:(r=t-(i-u),r<0&&(r=0),r)}function c(n){for(var t=0;n;)t+=n.offsetTop-n.scrollTop+n.clientTop,n=n.offsetParent;return t}function kt(n,t,i,r,u,f,e,o,s,h,c,l,a,v,y,p){var k=w();(sj_evt.bind("ajax.unload",ht),k[n])||(st(t),k[n]=new b(n,i,u,f,e,r,o,s,h,c,l,a,v,y,p))}function dt(n){var t=w();for(var i in t)if(i.indexOf(n)===0)return t[i]}function gt(n,t){var i=dt(n);i&&i.swipeOnHeader(t)}function ni(n){var t=Math.abs(n);return t>400?5:t<=100?1:Math.ceil(t/100)}var o="dataurl",tt="nc",it="nr",l="al",a=91,rt=10,v="tabindex",y=5,ut="tab-ajaxCompleted",ft="tab-ajaxError",et=320,p=i,b;typeof String.prototype.trim!="function"&&(String.prototype.trim=,i||(i={}));b=function(){function n(n,t,f,o,s,h,c,l,a,v,y,w,b,k,d){var nt,ft,tt,ut,it;if((this.id=n,this.rtl=t,this.maxOffset=f,this.totalTabWidth=o,this.minTotalTabWidthForEqualFlexing=s,this.menuOffset=h,this.isSwitchToFullWidthMode=c,this.enableDock=l,this.dockContentMinHeight=a,this.undockContentVisibleMaxHeight=v,this.horizontalSwipeThreshold=y,this.enableBleeding=w,this.enableScrollableHeader=b,this.enableSupportHorizontalSwipe=k,this.enableAnimation=d,nt=this,ft=_ge(n),ft)&&(nt.container=ft,nt.head=nt.container.firstElementChild,nt.content=nt.container.lastElementChild,w&&(nt.content=nt.container.lastChild.firstChild),nt.menuContainer=nt.head.children.length==3?nt.head.children[1]:nt.head.firstElementChild,nt.menu=nt.menuContainer.firstElementChild,nt.header=_ge("b_header"),nt.menuTotalHeight=nt.menuContainer.clientHeight+rt,tt=nt.menu,tt)){for(ut=0;ut<tt.children.length;++ut)it=tt.children[ut],nt.active==null&&g(it)&&(nt.active=it),e(it,ut),nt.bind(it),sj_be(it,"keydown",function(n){var r=!1,t,i;n.keyCode===37?r=nt.nav(!0):n.keyCode===39?nt.nav(!1):n.keyCode===36?(n.preventDefault(),t=tt.children[0],nt.click(t),t.focus()):n.keyCode===35&&(n.preventDefault(),i=tt.children[tt.childElementCount-1],nt.click(i),i.focus());p()&&(r&&n.keyCode===37||n.keyCode===39)&&n.preventDefault()});if(nt.navLeft=_ge(n+"_navl"),nt.navRight=_ge(n+"_navr"),nt.navLeft&&(sj_be(nt.navLeft,"click",function(n){nt.nav(!0);Swipe.StopEffect(n);Log.Log(nt.rtl?"NextChevron":"PrevChevron","Tab","Nav",!1,"AppNS",r(nt.navLeft),"K",u(nt.navLeft),"Category","CommonControls")}),sj_be(nt.navRight,"click",function(n){nt.nav();Swipe.StopEffect(n);Log.Log(nt.rtl?"PrevChevron":"NextChevron","Tab","Nav",!1,"AppNS",r(nt.navRight),"K",u(nt.navRight),"Category","CommonControls")})),nt.navRight&&nt.enableDrag(tt),typeof Orientation!="undefined"&&Orientation&&Orientation.onOrientation)Orientation.onOrientation(function(n){nt.adjustMenu();Log.Log("Rotate","Tab",n?"LS":"PT",!1,"Category","CommonControls")});sj_evt.bind("tab_reload",function(n){n[1]===nt.id&&nt.loadAjaxData(nt.active)});nt.navstate();nt.dockStatus=i.Disabled;nt.shouldEnableDock()&&sj_be(_w,"scroll",nt.onScrollHelper());nt.enableSupportHorizontalSwipe&&nt.addSupportSwipeEvent(y);sj_evt.fire("tab_init_finished")}}return n.prototype.addSupportSwipeEvent=function(n){if(typeof Swipe!="undefined"){var t=this;Swipe.OnSwipe(function(){t.nav(!0);Log.Log("Left","Tab","Swipe",!1,r(t.container),"K",u(t.container),"Category","CommonControls")},function(){t.nav(!1);Log.Log("Right","Tab","Swipe",!1,r(t.container),"K",u(t.container),"Category","CommonControls")},t.enableScrollableHeader?t.content:t.container,n,function(){},function(){},function(){},!0,!1,y);t.enableScrollableHeader&&this.totalTabWidth>t.menu.clientWidth&&Swipe.OnSwipe(function(){Log.Log("Left","Tab","Swipe",!1,r(t.container),"K",u(t.container),"Category","CommonControls");Log.Log("Left","Tab","FastSwitchSwipeHeader",!1,r(t.container),"K",u(t.container),"Category","CommonControls")},function(){Log.Log("Right","Tab","Swipe",!1,r(t.container),"K",u(t.container),"Category","CommonControls");Log.Log("Right","Tab","FastSwitchSwipeHeader",!1,r(t.container),"K",u(t.container),"Category","CommonControls")},t.head,n,null,!0,!1,y)}},n.prototype.adjustMenu=function(){var n=this;if(this.isSwitchToFullWidthMode)this.adjustTabWidthForFullWidthMode();else{if(n.navLeft||n.navRight||n.menu.children.length<=1)return;this.container.scrollWidth>this.totalTabWidth?this.enableFlexing():this.disableFlexing()}},n.prototype.adjustTabWidthForFullWidthMode=function(){var r=this,n=r.menu,f=r.container.offsetWidth-r.navLeft.scrollWidth*2,o=parseInt(_w.getComputedStyle(n.children[0]).paddingRight)*2,u,t,i,e;for(n.parentElement.style.width=""+f+"px",t=0;t<n.children.length;++t)i=n.children[t],i.style.width=""+(f-o)+"px";for(u=0,t=0;t<n.children.length;++t){if(i=n.children[t],e=i.clientWidth,g(i))break;u+=e}r.maxOffset=-n.scrollWidth;Lib.CssClass.add(n,"tab-notrans");sb_st(100);this.shift(-u,!0)},n.prototype.enableFlexing=function(){this.container.scrollWidth>=this.minTotalTabWidthForEqualFlexing?this.enableEqualFlexing():this.enableProportionalFlexing();Lib.CssClass.add(this.menuContainer,"tab-flex");this.maxOffset=0;this.shift(0,!0)},n.prototype.enableProportionalFlexing=function(){for(var i,u,e=this,r=e.menu,f=0,n=0;n<r.children.length;++n)i=r.children[n],u=parseInt(t(i,"ow")),f+=u;for(n=0;n<r.children.length;++n)i=r.children[n],u=parseInt(t(i,"ow")),i.style.flex=(u/f).toString()+" 1 0px",i.style.width=""},n.prototype.enableEqualFlexing=function(){for(var t,r=this,i=r.menu,n=0;n<i.children.length;++n)t=i.children[n],t.style.flex="1 1 0px",t.style.width=""},n.prototype.disableFlexing=function(){for(var i,f,n=this,u=n.menu,r=0;r<u.children.length;++r)i=u.children[r],f=parseInt(t(i,"w")),i.style.width=""+f+"px",i.style.flex="";Lib.CssClass.remove(this.menuContainer,"tab-flex");n.maxOffset=this.container.scrollWidth-this.totalTabWidth;n.shiftToItem(n.active)},n.prototype.nav=function(n){n===void 0&&(n=!1);var t=this,i=n===t.rtl?t.active.nextSibling:t.active.previousSibling;return(Log.Log(n===t.rtl?"NextTab":"PrevTab","Tab","Nav",!1,"AppNS",r(f(t.active)),"K",u(f(t.active)),"Category","CommonControls"),i)?(t.click(i),i.focus(),!0):!1},n.prototype.headerOnMove=function(n){var t=this,i=t.menuOffset+n;t.shift(i,!0)},n.prototype.bind=function(n){var t=this;sj_be(n,"click",function(i){t.click(n);var e=f(n),o=n&&n.innerText;Log.Log("Select","Tab","TabControl",!1,"AppNS",r(e),"K",u(e),"Category","CommonControls","TabName",o);Swipe.StopEffect(i)})},n.prototype.click=function(n){var t=this;n&&t.active!==n&&(t.onTabChange(),lt(f(n),f(t.active),function(){sj_evt.fire("layoutChange",t.id,e(n))}),this.deactivate(t.active),this.activate(n),t.active.removeAttribute&&t.active.removeAttribute("tabindex"),n.tabIndex=0,t.select(n))},n.prototype.activate=function(n){Lib.CssClass.add(n,"tab-active");sj_evt.fire("tabactive",this.id,e(n));n.setAttribute("aria-selected","true")},n.prototype.deactivate=function(n){Lib.CssClass.remove(n,"tab-active");sj_evt.fire("tabdeactive",this.id,e(n));n.setAttribute("aria-selected","false")},n.prototype.select=function(n){var t=this,i,r;nt(n)&&at(n)||t.loadAjaxData(n);t.active=n;t.shiftToItem(n);t.navstate();i=t.active.previousSibling;s(i)||t.loadAjaxData(i);r=t.active.nextSibling;s(r)||t.loadAjaxData(r);p()&&n.focus()},n.prototype.navstate=function(){var n=this;d(n.navLeft);d(n.navRight);n.active===n.menu.firstElementChild&&k(n.rtl?n.navRight:n.navLeft);n.active===n.menu.lastElementChild&&k(n.rtl?n.navLeft:n.navRight)},n.prototype.shiftToItem=function(){var i=this,u,e,r;if(i.maxOffset<0){var t=i.menu.parentElement,n=i.active,f=0;i.enableScrollableHeader?(u=0,n&&typeof _w.getComputedStyle!="undefined"&&(u=parseInt(_w.getComputedStyle(n).marginRight)),e=n.previousSibling!=null?n.previousSibling:n,r=n.nextSibling!=null?n.nextSibling:n,f=r.offsetLeft+r.offsetWidth-e.offsetLeft+2*u>=t.offsetWidth?t.offsetLeft-n.offsetLeft+(t.offsetWidth-n.offsetWidth)/2:e.offsetLeft<t.offsetLeft?t.offsetLeft-e.offsetLeft+u:r.offsetLeft+r.offsetWidth>t.offsetLeft+t.offsetWidth?t.offsetLeft+t.offsetWidth-r.offsetLeft-r.offsetWidth-u:0):f=t.offsetLeft-n.offsetLeft+(t.offsetWidth-n.offsetWidth)/2;f*=i.rtl?-1:1;i.shift(i.menuOffset+f,!0)}},n.prototype.shift=function(n,t){var i=this,r,u,f,e;n>=0?n=0:n<=i.maxOffset&&(n=i.maxOffset);this.enableAnimation&&t?(r=Math.abs(i.menuOffset-n),r>0&&(u="sp_".concat(ni(r)),Lib.CssClass.add(i.menu,u),f=function(){Lib.CssClass.remove(i.menu,u);sj_ue(i.menu,"transitionend",f)},sj_be(i.menu,"transitionend",f))):Lib.CssClass.add(i.menu,"tab-notrans");i.menuOffset=n;e=n+"px";i.rtl?i.menu.style.marginRight=e:i.menu.style.marginLeft=e},n.prototype.enableDrag=function(n){var t=this,i,r,u;sj_be(n,"mousedown",function(n){i=n.pageX;r=n.pageY;n.preventDefault&&n.preventDefault();var u=n.pageX,f=function(n){var i=n.pageX-u,r=t.menuOffset+i;t.shift(r,!1);u=n.pageX},e=function(){sj_ue(_w,"mousemove",f,!0);sj_ue(_w,"mouseup",e,!0)};sj_be(_w,"mousemove",f,!0);sj_be(_w,"mouseup",e,!0)},!0);u=function(n){(Math.abs(n.pageX-i)>5||Math.abs(n.pageY-r)>5)&&(n.preventDefault&&n.preventDefault(),n.stopPropagation&&n.stopPropagation())};sj_be(n,"click",u,!0)},n.prototype.loadAjaxData=function(n){var t=this;vt(n,function(i){sj_evt.fire("layoutChange",t.id,e(n));i&&sj_evt.fire("tab_ajaxLoaded",t.id,e(n))})},n.prototype.onScrollHelper=function(){var n=this;return function(){if(n.shouldEnableDock()){n.headerVisibleHeight=h(n.header,a);n.menuVisibleHeight=h(n.menuContainer,n.menuTotalHeight);switch(n.dockStatus){case i.Disabled:n.shouldDockFromDisabled()&&n.dock();break;case i.Dock:var t=n.nextStatusInDock();t==i.Flow?n.flow():t==i.Disabled?n.disableDock():n.dock();break;case i.Flow:n.shouldDockFromFlow()&&n.dock()}}}},n.prototype.shouldDockFromDisabled=function(){if(this.content.clientHeight<this.dockContentMinHeight)return!1;var n=c(this.menuContainer);return n>this.headerVisibleHeight?!1:!0},n.prototype.shouldDockFromFlow=function(){var n=this.contentVisibleHeight();return n>=this.undockContentVisibleMaxHeight},n.prototype.nextStatusInDock=function(){var n=this.contentVisibleHeight();return n>=this.content.scrollHeight?i.Disabled:n<=this.undockContentVisibleMaxHeight?i.Flow:i.Dock},n.prototype.contentVisibleHeight=function(){var n=this.headerVisibleHeight+this.menuVisibleHeight;return h(this.content,this.content.scrollHeight,n)},n.prototype.dock=function(){this.dockStatus=i.Dock;Lib.CssClass.remove(this.head,"flow");Lib.CssClass.add(this.head,"dock");this.head.style.top=this.headerVisibleHeight+"px";this.content.style.marginTop=this.menuTotalHeight+"px"},n.prototype.flow=function(){this.dockStatus=i.Flow;var n=this.headerVisibleHeight+_w.pageYOffset;Lib.CssClass.add(this.head,"flow");this.head.style.top=n+"px"},n.prototype.disableDock=function(){this.dockStatus=i.Disabled;Lib.CssClass.remove(this.head,"flow");Lib.CssClass.remove(this.head,"dock");this.head.style.position="";this.head.style.top="";this.content.style.marginTop=""},n.prototype.onTabChange=function(){if(this.shouldEnableDock()&&this.dockStatus!=i.Disabled){var n=a+this.menuTotalHeight,t=c(this.content);_w.scrollBy(0,t-n)}},n.prototype.shouldEnableDock=function(){return this.enableDock?/backbuttonhelper/.test(location.hash)?!1:!0:!1},n.prototype.swipeOnHeader=n.prototype.selectTab=function(n){var t=this.menu.children[n];t&&this.click(t)},n}();n.init=kt;n.swipeTabHeader=gt;typeof WireUp!="undefined"&&WireUp&&WireUp.init("tab",function(n){if(n){var t=n.id;WireUp.onUpdate(n,"a",}});sj_evt.fire("tab_init",n)})(tabcontrol||(tabcontrol={}))