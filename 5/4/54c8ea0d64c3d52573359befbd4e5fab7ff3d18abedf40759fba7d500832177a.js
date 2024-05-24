/**
* Detect Element Resize Plugin for jQuery
*
* https://github.com/sdecima/javascript-detect-element-resize
* Sebastian Decima
*
* version: 0.5.3
**/
!function(e){ction n(){if(!o){var e=(p?p:"")+".resize-triggers { "+(L?L:"")+'visibility: hidden; opacity: 0; } .resize-triggers, .resize-triggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }',i=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style")
t.type="text/css",t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e)),i.appendChild(t),o=!0}}var s=document.attachEvent,o=!1,a=e.fn.resize
if(e.fn.resize=e.fn.removeResize=!s){var _=),c=),d=!1,l="animation",h="",m="animationstart",f="Webkit Moz O ms".split(" "),g="webkitAnimationStart animationstart oAnimationStart MSAnimationStart".split(" "),u="",z=document.createElement("fakeelement")
if(void 0!==z.style.animationName&&(d=!0),d===!1)for(var v=0;v<f.length;v++)if(void 0!==z.style[f[v]+"AnimationName"]){u=f[v],l=u+"Animation",h="-"+u.toLowerCase()+"-",m=g[v],d=!0
break}var w="resizeanim",p="@"+h+"keyframes "+w+" { from { opacity: 0; } to { opacity: 0; } } ",L=h+"animation: 1ms "+w+"; "}window.addResizeListener=window.removeResizeListener=(jQuery)