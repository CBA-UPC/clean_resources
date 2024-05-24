<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Advertisement</title>
    <style>
        body {height:100%;width:100%;margin:0;background-color:transparent;text-align:center}
        img {border: 0}
    </style>
</head>
<body>

    <img src='//a.medfoodsafety.com/i?tid=fcaba855-4164-4b5c-bf2c-ea41e4fdcb8b&cf=ag0eifbfbd' style='position:absolute;visibility:hidden;' alt=''>
    <a href='//a.medfoodsafety.com/c?tid=fcaba855-4164-4b5c-bf2c-ea41e4fdcb8b&t=1' target='_blank' style='display:inline-block;max-width:100%' rel='nofollow'>
        
        <picture style='border:none;max-width:100%'>
            <source srcset="//cdn3.medfoodsafety.com/56/6a/282290/5353519.webp" type="image/webp">
            <img src='//cdn3.medfoodsafety.com/56/6a/282290/5353519.gif' alt='' style='border:none;max-width:100%'>
        </picture>
        
    </a>

</body>
</html>
","):""}]},o={isParent:function(){try{return r.self!==r.top}catch(e){return!0}},get:function(i){for(var e=!1,t=[function(){return localStorage[i]},function(){return sessionStorage[i]},function(){for(var e,t,n=l.cookie.split(";"),r=0;r<n.length;r++)if(e=n[r].substr(0,n[r].indexOf("=")),t=n[r].substr(n[r].indexOf("=")+1),(e=e.replace(/^\s+|\s+$/g,""))===i)return decodeURI(t)}],n=0;n<t.length;n++)if(e=this.safe(t[n]),!o.def(e)&&!1!==e)return e;return""},set:function(n,r){[function(){localStorage[n]=r},function(){sessionStorage[n]=r},function(){var e=new Date,t=encodeURI(r)+"; expires="+e.setSeconds(e.getSeconds()+31536e4).toUTCString();l.cookie=n+"="+t}].forEach(function(e){o.safe(e)})},safe:function(e){try{return e()}catch(e){return!1}},attr:function(e){var t=i.script.getAttribute(e);return null===t?"":encodeURIComponent(t)},style:function(e,t){return l.defaultView.getComputedStyle(e,null)[t]},url:function(e){try{var t=(i.parent?l.referer:l.location.href).substring(0,255);return e?encodeURIComponent(t):t}catch(e){return""}},title:function(){if(i.parent)return this.url(!1).replace(/[^a-z0-9]/gim," ").replace(/(https?|www)/gim," ").replace(/\s+/g," ").substring(0,255);var e=l.getElementsByTagName("title")[0];return(o.def(e)?"":e.innerText).substring(0,255)},def:function(e){return void 0===e},visible:function(e,t,n,r,i,o,s){var a=e.parentNode;return!(e!==l.body&&!l.body.contains(e))&&(9===a.nodeType||"HTML"===a.nodeName||("SCRIPT"===e.nodeName||"0"!==this.style(e,"opacity")&&"none"!==this.style(e,"display")&&"hidden"!==this.style(e,"visibility"))&&((this.def(t)||this.def(i)||this.def(r)||this.def(n)||this.def(o)||this.def(s))&&(t=e.offsetTop,n=e.offsetLeft,r=t+e.offsetHeight,i=n+e.offsetWidth,o=e.offsetWidth,s=e.offsetHeight),!a||(e.offsetParent!==a||"hidden"!==this.style(a,"overflow")&&"scroll"!==this.style(a,"overflow")||!(n+2>a.offsetWidth+a.scrollLeft||n+o-2<a.scrollLeft||t+2>a.offsetHeight+a.scrollTop||t+s-2<a.scrollTop))&&(e.offsetParent===a&&(n+=a.offsetLeft,t+=a.offsetTop),this.visible(a,t,n,r,i,o,s))))}},e={pre:function(){return r.adnLoaded=o.def(r.adnLoaded)?[]:r.adnLoaded,-1===r.adnLoaded.indexOf(i.zone)&&(r.adnLoaded.push(i.zone),!0)},init:function(){return i.parent=o.isParent(),i.script=l.getElementById("adn-"+i.zone),!(null===i.script||!o.visible(i.script))&&this.frame()},src:function(){var e=i.host+"/loader?a="+i.zone,t=o.url(!0),n=encodeURIComponent(o.title()),r=["v=2","t="+i.type,"s="+i.site,"p="+i.pub,"if="+i.parent];return 0!==t.length&&r.push("url="+t),0!==n.length&&r.push("title="+n),i.extra.forEach(function(e){var t=(t=o.safe(e))&&0!==t.length?r.push(t):""}),e+="&"+r.join("&")},frame:function(){var e=i.script.parentNode,t=l.createElement("iframe");if(null===e)return!1;if(t.src=this.src(),t.width=i.width,t.height=i.height,t.scrolling="no",t.style.cssText="border:0;display:block;",t.sandbox="allow-popups allow-scripts allow-same-origin allow-forms",t.setAttribute("data-zone",i.zone),"SCRIPT"===i.script.nodeName){for(var n=e.childNodes,r=0;r<n.length;r++)"SCRIPT"===n[r].nodeName&&-1!==n[r].innerHTML.indexOf("adn")&&-1!==n[r].innerHTML.indexOf("id="+i.zone)&&e.removeChild(n[r]);try{e.removeChild(l.currentScript)}catch(e){}return e.appendChild(t),!1}i.script.appendChild(t)}};e.pre()&&e.init()}(window,document);