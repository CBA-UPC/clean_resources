!),function(){rototype={add:function(){e(arguments,function(e){this.contains(e)||(this.element.className+=0<this.element.className.length?" "+e:e)},this)},remove:toggle:contains:replace:,"classList"in Element.prototype||Object.defineProperty(Element.prototype,"classList",{get:),window.DOMTokenList&&null==DOMTokenList.prototype.replace&&(DOMTokenList.prototype.replace=n.prototype.replace)}(),function(a,r){var e=new function(){this.cookiesAccepted=null,this.noticeContainer=null,this.setStatus=function(e){var t=this;"1"===cnArgs.onScroll&&a.removeEventListener("scroll",this.handleScroll);var n=new Date,i=new Date;"accept"===e?(e="true",i.setTime(parseInt(n.getTime())+1e3*parseInt(cnArgs.cookieTime))):(e="false",i.setTime(parseInt(n.getTime())+1e3*parseInt(cnArgs.cookieTimeRejected))),r.cookie=cnArgs.cookieName+"="+e+";expires="+i.toUTCString()+";"+(cnArgs.cookieDomain?"domain="+cnArgs.cookieDomain+";":"")+(cnArgs.cookiePath?"path="+cnArgs.cookiePath+";":"")+("1"===cnArgs.secure?"secure;":""),this.cookiesAccepted="true"===e;var o=new CustomEvent("setCookieNotice",{detail:{value:e,time:n,expires:i,data:cnArgs}});if(r.dispatchEvent(o),this.setBodyClass(["cookies-set","true"===e?"cookies-accepted":"cookies-refused"]),this.hideCookieNotice(),"automatic"===cnArgs.revokeCookiesOpt&&(this.noticeContainer.addEventListener("animationend",function e(){t.noticeContainer.removeEventListener("animationend",e),t.showRevokeNotice()}),this.noticeContainer.addEventListener("webkitAnimationEnd",function e(){t.noticeContainer.removeEventListener("webkitAnimationEnd",e),t.showRevokeNotice()})),"1"===cnArgs.redirection&&("true"===e&&null===this.cookiesAccepted||e!==this.cookiesAccepted&&null!==this.cookiesAccepted)){var s=a.location.protocol+"//",c=a.location.host+"/"+a.location.pathname;"1"===cnArgs.cache?(s=s+c.replace("//","/")+(""===a.location.search?"?":a.location.search+"&")+"cn-reloaded=1"+a.location.hash,a.location.href=s):(s=s+c.replace("//","/")+a.location.search+a.location.hash,a.location.reload(!0))}else;},this.getStatus=this.showCookieNotice=function(){var t=this,e=new CustomEvent("showCookieNotice",{detail:{data:cnArgs}});r.dispatchEvent(e),this.noticeContainer.classList.remove("cookie-notice-hidden"),this.noticeContainer.classList.add("cn-animated"),this.noticeContainer.classList.add("cookie-notice-visible"),this.noticeContainer.addEventListener("animationend",function e(){t.noticeContainer.removeEventListener("animationend",e),t.noticeContainer.classList.remove("cn-animated")}),this.noticeContainer.addEventListener("webkitAnimationEnd",function e(){t.noticeContainer.removeEventListener("webkitAnimationEnd",e),t.noticeContainer.classList.remove("cn-animated")})},this.hideCookieNotice=function(){var t=this,e=new CustomEvent("hideCookieNotice",{detail:{data:cnArgs}});r.dispatchEvent(e),this.noticeContainer.classList.add("cn-animated"),this.noticeContainer.classList.remove("cookie-notice-visible"),this.noticeContainer.addEventListener("animationend",function e(){t.noticeContainer.removeEventListener("animationend",e),t.noticeContainer.classList.remove("cn-animated"),t.noticeContainer.classList.add("cookie-notice-hidden")}),this.noticeContainer.addEventListener("webkitAnimationEnd",function e(){t.noticeContainer.removeEventListener("webkitAnimationEnd",e),t.noticeContainer.classList.remove("cn-animated"),t.noticeContainer.classList.add("cookie-notice-hidden")})},this.showRevokeNotice=this.hideRevokeNotice=this.setBodyClass=this.handleScroll=this.adjustOffset=function(){var e=r.getElementById("coronabar"),t=r.getElementById("wpadminbar"),n=0,i=0;"top"===cnArgs.position&&null!==t&&(i=t.offsetHeight,this.noticeContainer.style.top=i+"px"),null!==e&&(n=e.offsetHeight-1,"top"===cnArgs.position?(e.style.top=i+"px",this.noticeContainer.style.top=n+i+"px"):this.noticeContainer.style.bottom=n+"px")},this.getClosest=function(e,t){for(Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector||;e&&e!==r;e=e.parentNode)if(e.matches(t))return e;return null},this.init=function(){var t=this;this.cookiesAccepted=this.getStatus(!0),this.noticeContainer=r.getElementById("cookie-notice");var e=r.getElementsByClassName("cn-set-cookie"),n=r.getElementsByClassName("cn-revoke-cookie"),i=r.getElementById("cn-close-notice");this.noticeContainer.classList.add("cn-effect-"+cnArgs.hideEffect),t.adjustOffset(),a.addEventListener("resize",function(e){t.adjustOffset()}),"1"===cnArgs.coronabarActive&&(r.addEventListener("display.coronabar",function(e){t.adjustOffset()}),r.addEventListener("hide.coronabar",function(e){t.adjustOffset()}),r.addEventListener("saveData.coronabar",function(e){var t=e.detail;if(null!==t){var n=new XMLHttpRequest;n.open("POST",cnArgs.ajaxUrl,!0),n.setRequestHeader("Content-Type","application/x-www-form-urlencoded;"),n.onload=function(){200<=this.status&&this.status},n.onerror=n.send("action=cn_save_cases&nonce="+cnArgs.nonce+"&data="+JSON.stringify(t))}})),null===this.cookiesAccepted?("1"===cnArgs.onScroll&&a.addEventListener("scroll",,"1"===cnArgs.onClick&&a.addEventListener("click",!0),this.setBodyClass(["cookies-not-set"]),this.showCookieNotice()):(this.setBodyClass(["cookies-set",!0===this.cookiesAccepted?"cookies-accepted":"cookies-refused"]),"1"===cnArgs.revokeCookies&&"automatic"===cnArgs.revokeCookiesOpt&&this.showRevokeNotice());for(var o=0;o<e.length;o++)e[o].addEventListener("click",function(e){e.preventDefault(),e.stopPropagation(),t.setStatus(this.dataset.cookieSet)});"null"!==i&&i.addEventListener("click",;for(o=0;o<n.length;o++)n[o].addEventListener("click",}};a.addEventListener("load",!1)}(window,document);