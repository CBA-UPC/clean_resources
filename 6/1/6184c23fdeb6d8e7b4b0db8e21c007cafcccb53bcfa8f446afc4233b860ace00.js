![function(e,t,n){"use strict";e.exports={phone:{mainSelector:".single-news-content",minAdSpace:{value:"80",unit:"percent"},ads:{maxAds:"10",defaultHeight:"300",fixedHeight:"330"},videoScript:"",wrapper:{id:"wtgLazy"},sendWrapperIdEvents:"true",searchAds:["adoSlot","wtgLazy","Reklama","google_ads_iframe","contentstream","optad-360","w2g","teads","teads-inread","googleads.g.doubleclick.net","LazyAd","data-google-query-id", ".banner mb-2 d-block", ".banner mb-2 d-none d-md-block", "div.exchange-news-srecna-wrapper", ".exchange-news-srecna-wrapper", ".arrows-web"],allowedElements:["body","div","section","figure","header","main","footer","ul","article","p","aside"],excludedSelectors:[".single-news-recommendation",".banner.mb-2.d-block", "banner.mb-2.d-block", ".banner.mb-2.d-none.d-md-block", "banner.mb-2.d-none.d-md-block", "div.single-news-content > p:nth-child(6)", "div.single-news-content > div:nth-child(4)", "banner.mb-2.d-block.d-md-none + p", ".embed-responsive embed-responsive-16by9 + p", "div.single-news-content > p:nth-child(15)", "div.single-news-content > div:nth-child(13) + p", "banner.mb-2.d-block.d-md-none", "div.single-news-content > p:nth-child(10)", "div.single-news-content > div:nth-child(13)", "banner.mb-2.d-none.d-md-block", ".wtgLazyWrapper", "banner.mb-2.d-none.d-md-block - p", "banner.mb-2.d-block - p", "div.exchange-news-srecna-wrapper + p", "div.exchange-news-srecna-wrapper", ".exchange-news-srecna-wrapper", "div.dz-widget-news.carousel-content", ".arrows-web"],margin:{top:"10",bottom:"10"},requirements:{width:{value:"60",unit:"percent"},height:{value:"20",unit:"px"}},visibilityMargin:"640",prepareElementsMaxLoopIteration:"500",scrollDelay:"200",maxDepth:"25",lazyContentDataAttr:"data-wtg-lazy"},desktop:{mainSelector:".single-news-content",minAdSpace:{value:"600",unit:"px"},ads:{maxAds:"10",defaultHeight:"300",fixedHeight:"280"},videoScript:"",wrapper:{id:"wtgLazy"},sendWrapperIdEvents:"true",searchAds:["adoSlot","wtgLazy","Reklama","google_ads_iframe","contentstream","optad-360","w2g","teads","teads-inread","googleads.g.doubleclick.net","LazyAd","data-google-query-id", "div.banner.mb-2.d-none.d-md-block", "div.exchange-news-srecna-wrapper", ".exchange-news-srecna-wrapper", ".arrows-web"],allowedElements:["body","div","section","figure","header","main","footer","ul","article","p","aside"],excludedSelectors:[".single-news-recommendation",".banner.mb-2.d-block", "banner.mb-2.d-block", ".banner.mb-2.d-none.d-md-block", "banner.mb-2.d-none.d-md-block", "div.single-news-content > p:nth-child(6)", "div.single-news-content > div:nth-child(4)", "banner.mb-2.d-block.d-md-none + p", ".embed-responsive embed-responsive-16by9 + p", "div.single-news-content > p:nth-child(15)", "div.single-news-content > div:nth-child(13) + p", "banner.mb-2.d-block.d-md-none", "div.single-news-content > p:nth-child(10)", "div.single-news-content > div:nth-child(13)", "banner.mb-2.d-none.d-md-block", ".wtgLazyWrapper", "banner.mb-2.d-none.d-md-block - p", "banner.mb-2.d-block - p", ".single-news-content   p",".single-news-content  > p + p","body > main > div.layout-group > div > div > div > article > div.single-news-content > p:nth-child(1)", "div.exchange-news-srecna-wrapper", ".exchange-news-srecna-wrapper", "div.dz-widget-news.carousel-content", ".arrows-web"],margin:{top:"10",bottom:"10"},requirements:{width:{value:"300",unit:"px"},height:{value:"40",unit:"px"},parentWidth:{value:"500",unit:"px"}},visibilityMargin:"640",prepareElementsMaxLoopIteration:"500",scrollDelay:"200",maxDepth:"25",lazyContentDataAttr:"data-wtg-lazy"}}},function(e,t,n){"use strict";var i=n(3);t.a=i.a},function(e,t,n){"use strict";(function(e){t.a=class{constructor(){this.self=this,this.details={browser:!1,node:!1,jsdom:!1},this.run()}run(){const{browser:e,node:t,jsdom:n}=this.checkEnv();return this.details={browser:e,node:t,jsdom:n}}checkEnv(){return{browser:this.isBrowser(),node:this.isNode(),jsdom:this.isJsDOM()}}isBrowser(){return"undefined"!=typeof window&&void 0!==window.document}isNode(){return void 0!==e&&null!=e.versions&&null!=e.versions.node}isJsDOM(){return"undefined"!=typeof window&&"nodejs"===window.name||"undefined"!=typeof navigator&&(navigator.userAgent.includes("Node.js")||navigator.userAgent.includes("jsdom"))}isBrowserEnabled(){const{browser:e,node:t,jsdom:n}=this.details;return e&&!t&&!n}showDecisions(){return console.dir(this.details)}}}).call(this,n(10))},function(e,t,n){"use strict";var i=n(5);t.a=i.a},function(e,t,n){"use strict";(function(e){t.a=t=>{if(!e.lazyAds||!e.lazyAds.config)throw"global.ads does not exist";const n=/iPhone/i,i=/iPod/i,r=/iPad/i,o=/\bAndroid(?:.+)Mobile\b/i,l=/Android/i,s=/(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i,a=/Silk/i,c=/Windows Phone/i,d=/\bWindows(?:.+)ARM\b/i,u=/BlackBerry/i,g=/BB10/i,p=/Opera Mini/i,f=/\b(CriOS|Chrome)(?:.+)Mobile/i,h=/Mobile(?:.+)Firefox\b/i;let m=(t=t||("undefined"!=typeof navigator?navigator.userAgent:"")).split("[FBAN");void 0!==m[1]&&(t=m[0]),m=t.split("Twitter"),void 0!==m[1]&&(t=m[0]);const A=((t),w={apple:{phone:A(n)&&!A(c),ipod:A(i),tablet:!A(n)&&A(r)&&!A(c),device:(A(n)||A(i)||A(r))&&!A(c)},amazon:{phone:A(s),tablet:!A(s)&&A(a),device:A(s)||A(a)},android:{phone:!A(c)&&A(s)||!A(c)&&A(o),tablet:!A(c)&&!A(s)&&!A(o)&&(A(a)||A(l)),device:!A(c)&&(A(s)||A(a)||A(o)||A(l))||A(/\bokhttp\b/i)},windows:{phone:A(c),tablet:A(d),device:A(c)||A(d)},other:{blackberry:A(u),blackberry10:A(g),opera:A(p),firefox:A(h),chrome:A(f),device:A(u)||A(g)||A(p)||A(h)||A(f)},any:!1,phone:!1,tablet:!1};return w.any=w.apple.device||w.android.device||w.windows.device||w.other.device,w.phone=w.apple.phone||w.android.phone||w.windows.phone,w.tablet=w.apple.tablet||w.android.tablet||w.windows.tablet,w.device=w.phone?"phone":w.tablet?"tablet":"desktop",w}}).call(this,n(1))},function(e,t,n){"use strict";(function(e){t.a=()=>{const t=e.lazyAds.currentDevice,n=e.lazyAds.config,i=top.document,r=window.top;let o,l=[],s=0,a=i.documentElement.scrollHeight,c=1,d=!1,u=!1,g=!1,p=!1,f=r.location.href;if(f.indexOf("#")>0){f.split("#")[1].indexOf("w2g_lazyAd_debug")>=0&&(p=!0)}const h=function(e,t="",n="log"){if(p&&console)switch(n){case"time":case"timeEnd":console[n](e);break;default:console[n]("%c %s %c %s ","background:#3b88c3;color:#FFFFFF;font-weight:bold;padding:1px 2px;","LazyAds","color:#555;padding:2px",e,t)}},m={getElementWidth:getElementHeight:function(e,i=!1){if(i){let t=e.offsetHeight,n=getComputedStyle(e);return t+=parseInt(n.marginTop)+parseInt(n.marginBottom),t}let r=e.getBoundingClientRect().height;return 0===r&&"SPAN"==e.tagName&&this.isElementContainAd(e)&&(r=n[t].ads&&n[t].ads.defaultHeight?parseInt(n[t].ads.defaultHeight):r),r},getDocumentHeight:getScrollPosition:function(){if(null!=r.pageYOffset)return r.pageYOffset;{let e,t=i,n=t.documentElement,r=t.body;return e=n.scrollTop||r.scrollTop||0,e}},getDeviceWidth:function(){return i.documentElement.clientWidth||r.innerWidth||i.body.clientWidth},getDeviceHeight:getOffsetTop:getElementMainSelector:function(e){let r=n[t].mainSelector.split(",").map((function(e){return e.trim()}));for(let t=0;t<r.length;t++){let n=r[t];if(!e)throw h(`Main element: ${r[t]} not found.`),new`Main element: ${r[t]} not found.`;if(i.querySelector(n).contains(e))return n}return!1},nl2br:function(e,t){return null==e?"":(e+"").replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g,"$1"+(t||void 0===t?"<br />":"<br>")+"$2")},pushElement:function(e,i=!1,r=!1){try{if(!e)throw new Error("wtgThrow: no element to push");let o=!!n[t].lazyContentDataAttr&&n[t].lazyContentDataAttr;if(o&&e.getAttribute(o));else{let t=this.getOffsetTop(e),n=!1,s=!this.isElementContainAd(e)&&!r;for(let t=0;t<l.length;t++)(l[t].element==e||l[t].element.contains(e))&&(n=!0);if(!n){let n=this.getElementHeight(e,!1),a={index:l.length,element:e,height:n,fromTop:t,insertAd:s};return i?l.splice(i,0,a):l.push(a),o&&a.element.setAttribute(o,a.index),r&&m.wrapperSendEvent(),!0}}}catch(e){console.log("wtgThrow: ",e)}},setWrapperMargin:e=>{if(n[t].margin){const{top:i,bottom:r}=n[t].margin;i&&parseInt(i)>0&&(e.style.marginTop=i+"px"),r&&parseInt(r)>0&&(e.style.marginBottom=r+"px")}return e},isElementContainAd:function(e){try{let i=!1;for(let r=0;r<n[t].searchAds.length;r++){let o=n[t].searchAds[r];if(-1!==e.outerHTML.indexOf(o)){i=!0;break}}return i}catch(e){console.log("wtgThrow: ",e)}},isLinkElement:isRequiredElement:function(e){try{let i=parseInt(n[t].requirements.width.value),r=n[t].requirements.width.unit,o=parseInt(n[t].requirements.height.value),l=n[t].requirements.height.unit,s=parseInt(this.getDeviceWidth()),a=parseInt(this.getDeviceHeight()),c=parseInt(this.getElementWidth(e)),d=parseInt(this.getElementHeight(e)),u=100*c/s,g=100*d/a,p="percent"==l?g>=o:d>=o;return!(!("percent"==r?u>=i:c>=i)||!p)}catch(e){console.log("wtgThrow: ",e)}},isAllowedTag:function(e){try{let i=e.tagName;for(let e=0;e<n[t].allowedElements.length;e++)if(n[t].allowedElements[e].toUpperCase()==i.toUpperCase())return!0;return!1}catch(e){console.log("wtgThrow: ",e)}},isExcludedElement:function(e){try{if(n[t].excludedSelectors)for(let r=0;r<n[t].excludedSelectors.length;r++){let o=i.querySelectorAll(n[t].excludedSelectors[r]);if(o)for(let t=0;t<o.length;t++)if(o[t]==e)return!0}return!1}catch(e){console.log("wtgThrow: ",e)}},isVisibleElement:function(e,i=!1){try{let r=this.getScrollPosition(),o=this.getDeviceHeight(),l=this.getElementHeight(e),s=this.getOffsetTop(e),a=s+l,c=i?2*parseInt(n[t].visibilityMargin):parseInt(n[t].visibilityMargin),d=r-c,u=r+o+c,g=s<=d&&a>=u,p=s>=d&&s<=u,f=a>=d&&a<=u;return!!(s>=d&&a<=u||g||p||f)}catch(e){console.log("wtgThrow: ",e)}},prepareInterestingElements:function(e="scrollDown",r=i.body){try{let r=[];if(n[t].mainSelector){let e=n[t].mainSelector.split(",").map(();for(let t=0;t<e.length;t++){let n=i.querySelector(e[t]);if(!n)return void h(`Main element: ${e[t]} not found.`);r.push({element:n,fromTop:m.getOffsetTop(n)})}}r.sort(();let o=[];for(let e=0;e<r.length;e++)o.push(r[e].element);const l=this.getDeviceHeight(),a=this.getDeviceWidth(),c=n[t].maxDepth?parseInt(n[t].maxDepth):50,d=o,u=[1],g=!!n[t].lazyContentDataAttr&&n[t].lazyContentDataAttr;for(;d.length>0;){const i=d.pop();let r=u.length-1;if(u[r]=u[r]-1,r<=c){if(1==i.nodeType&&(!g||!i.getAttribute(g))&&!m.isInvalidElement(i)&&m.isAllowedTag(i)&&!m.isExcludedElement(i)&&("BR"==i.tagName||"SPAN"==i.tagName||m.isRequiredElement(i)&&m.isVisibleElement(i,!0))){let r=!1;if(m.isElementContainAd(i)&&"scrollDown"==e){m.getOffsetTop(i)+m.getElementHeight(i)<s&&(r=1)}if(m.getElementHeight(i)<=l||"P"==i.tagName){m.pushElement(i,r,!1);continue}let o=!0;if(n[t].requirements.parentWidth){let e=i.clientWidth,r=100*e/a,l=parseInt(n[t].requirements.parentWidth.value);o="percent"==n[t].requirements.parentWidth.unit?r>=l:e>=l}i.childNodes.length&&o&&(u.push(i.childNodes.length),"scrollUp"==e?d.push(...Array.from(i.childNodes)):d.push(...Array.from(i.childNodes).reverse()))}}else u.splice(-1);for(;0===u[u.length-1];)u.splice(-1)}}catch(e){console.log("wtgThrow: ",e)}},spaUrlListener:clearLazy:function(){l=[],s=0,a=i.documentElement.scrollHeight,o=null,c=1,d=!0,g=!1,u=!0,setTimeout((function(){u=!(!n[t].mainSelector||i.querySelector(n[t].mainSelector))}),100)},getAdWrapper:function(){let e=this.getEventId(),r=i.createElement("div");r.setAttribute("class","wtgLazyWrapper"),r=this.setWrapperMargin(r);let o=i.createElement("div");if(o.setAttribute("id",e),o.setAttribute("class","w2g"),n[t].demo){let e=300,n=250;"desktop"==t&&(e="auto",n=200),o.innerHTML='<span style="position: absolute; bottom: calc('+.25*n+'px - 10px); left:0; right:0; margin:auto; font-family: arial,sans-serif; font-size: 10px; color: #555;">Ads by <strong>Waytogrow</strong></span>',o.style.cssText="width: "+e+"px;min-width: 300px;height: "+n+"px;position: relative;margin: 20px auto; text-align: center; display: block; justify-content: center; align-items: center; border: 1px solid #ccc; background-color: #f0f0f0;background-repeat: no-repeat;background-size: auto "+.5*n+"px;background-position: center;background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOgAAACECAMAAACtQZdrAAAC/VBMVEUAAAAzMS81Mi80MjA0Mi/weg45OTk0Mi8zMi40MS7siwk0Mi/8kQg0Mi41My/rXw/yoAQzMi80MS/nRQ85OS41MTDwlwY0Mi/mORQzMy7/mAA0Mi/sdg4rKys0Mi80Mi/oShHwjAU0MS8zMi80MS/xlAM0Mi8zMy4vLy40MTDxswA0Mi40MS80Mi80Mi/0sAP0yAPugg7pZhEzMi4zMi7wmAAzMi80MS80Mi40MS71ugI0MS/vmQHvmATwmAA0MS8zMi80Mi/zoQM0Mi80MS/xnAXwmQM0Mi/3ygHzqgXvlQrvlgPwmQfuhQn0sgD1uQLpXxbvmAXqVBDrZA40Mi/wmAL2wQLvlwHwmQDvlgHwlgLwmAH1vwE0Mi/scwvpTBHxnQPpURH1wgHnTxPyqQnqVRD0swP1vgLwmQHrZA72wQHrYg7vmQPzswPytATthAnnOxPmQxLqVg/viQfxmgXwmAD3yADlOBX1vQLfqBB/SjjviAn2xQHrYQ6leh7zpQX2yAH0sQTqUhDvmADjPhj0tgH0rgX3xQBWd4vRkw+kSCybiT/yoATpoBTsdAznbxB9emTkMRXskQb1vALhhB7tdQzrexjoSBLtbg32xwGhbjLSXx+IZjvNhRPCPhm+kyeeTS30sQSxnEe1MBb3ygHsjBj0tgDzqAWiaVPndyfsaQvRoC5cWlhsiXF1YV+vYSXOhwr3zwDsbg6Wp2A0Mi/vmADrYQ7xnAfvhwrufQvzrQPsbg3ynwXuggrviwnugAvuhArxmQfteQvwkAjrZQ7zsAPsaw3zqQTwlAfzqwPscgzviQnrZw7tdAzpURHypAbyogT0tAPwkgfqXg/tdwz0twP0sgLscA3tewvxlgjzpgXvjQjqWw/raQ3pVxD0uwLpVBD1vQLnQhPoTBHqWQ/0uAPnPRPoSRL1wQLnRRLypQD1vwHoThHwjgn2xAL2yAHoRxLmOBTtdgzynAD2xgHxmAT0uQHlNBT3zADIRR7qWBBmXVmcpFCKYEvnvg6mNVHUAAAAtHRSTlMAd8xm+xED92stCfEEv0EzGEkaEAggVTQzDAKAMwXo0TIy7dqViFwUECgSxbeQjYhWVRbh1rqwhmJVVTn43svKpJyIc1AP7KuIVUQ6JIkyKSXUVVSgkoZsZk2nnpyYiId+ZUf39evq5MCrqolfHfrd1sjAsLB1dDw6/vHu7uzZzLuzq5mTcWdg/f36+fDv7ezr6unRvq6feGL59/fw8O/q2tfW0tLLubGihUH5+PTq4+Lhu3ctRiR7AAANAElEQVR42uTa20uTcRzH8e9NN9LFA8EudtW1N7kHuhndKhmR4siLkswzk7Q8kImHUrIQzUKRMogoIiEIimC66TzMedbp1HnW6Tzn2cwkIvo904c52+E7L57x+/n+D17s8xu/59mArZT34TTEFVgr4BSkTFywzgYC63EFZguBKoHxQhOH7dAoYDquWtd6AE0ClguN7xShq2HAbFz1eLsDWgSsJivtOwpNBjbjMuv7naC5Z4HFZCE1x6DLD4C9uMzmmv+gkcBcspAxF9BHwFhcxkCHK2hVMDCVIqfFNXQjFhiKy2iYcAe9DOykyOl2D/0ArMRnNNV6gO6mABspcvSeoU+BhfhKbaMXKBO3QEXZqFdorhxoj68cMniHbl4DylOV9aKglL8L5CtHunBQum+Bqud1WGhVAFAbr55qQ0M36b0FqvJ6fIHSegvk1RqjT1BKb4GqPI2P0H0aX9jzhZODPkODgLoiEuZPAKXuhT1fODN9EuhXoKuIBNPJoPt0vbDnI+ypVKpXWGiyMsgerc+kaiQ0icav2yOpsNOl90pkj89DQqn7sj2WWoODJlH+SjdiEAml/GcXPgEJvQB0h70CvqP4KVQoBnlhSKV+uEgo7cNNR14BqR8u9q5L+SvO8Dgk9DbQXboJB31I+V80Ykw4aDxdT2UuhouEUv4vKnn6Gg5K+3BfzuGg8VeB6sLjkNAnQHVn05Zw0ItykLZvQQcp7YWKycQUYsG44W7hoKUpIG2B7/9s7m4sL8/O7lnM5lZdZ3v7eF9/fU1N81jHQMt6Q3dtk16v1RqGdm4BovMrSOgdkDhl6+e/G4RpXbCYW4nTzqx3MGv1+kbt6NBOb9dIOGa4SGgmSF2U7m3Jqp05fMDsE5jNAnOim3ycAtMwRJh1bWrwWrQNBw3hQOoSdZ0vsvcczH7CFD7O9YkGZ2Zbj/GT1+HakFAZSF3YsK7zWYmZrNbV4SROg7Daurq2KaNRky4HjwXcQ0JvgOQVEej3/Gy3h9MgHE7C7DFqNIOTMeCxx4s4qB+GCx8F6KXXjsM5RpjOqxWZg5O/E86Bh7IWkVAZSF5AqgDtzy/uc6z2KLN3hKy2x2gUmPPTM6Zoj8NFQm+C9MVa7NAf+W4Pp7hawpwxrcWFexjuNg5afgakL/IQ+qXYwXRercicJsy5uaVC98PdRkKvgB+qOIT+zCdOD4eTMIlzaWvFluV2uEjodfBDnFWElr85XC1hah2HU1ytyLQtpsndDPcXDno3GPzQP/bNpjeJKArDLx8O3wgI4ogMCihggY1C27SlNKAkrR9p0qZoY6I7YzRu9Be4cG3iTxn/iBsX7lyYuHTl1szMuffMKUgbF37FZ9N7LjNz5z1zzjsXkr7WQt+/lc35QTSnJ/PLp8+fP399NL9wv51Q6A5+B09Y6Mfni5qTHufnr1+/vTmDWc68OaHQ2/gt3L3jcYm4oDjNXPQ4p5krVH9Kh59mLhDuCn/579X/+YO5ccrjX6+x+Po7j7P4t9l5R/zlv0UeywHpvPn3/8vCYg5JaA9/BqOASxYuLS8awSPqhVEAyK/WU8HUcMVELkA0iyGPVRBXaCIH7JLQy2CeHRwOdjcGLx5uy8fcvFJvb7a3xnkgTVcoAGVaJgTERpNUFC6F6NZSpRbsl9KGlDBeLOG67ZKCS8r2aMBhlaISYEQtCqzsFRqF8+qASBkuY4qvP51O3xGH0+n0rte1vXeajWmSZXYjdN61IjZpGANiNOwX3dtys7nWtjXXou6yJ5IQQN8b1OCQtYk1JzLoClUTjZStiSzRIIiCrW/LoVyjME2Oq9gGED+Uc4MMPNKW79qtCA0MYIUmK95cAchv2YLNHAD0SfcCCZaJZXo6ZWe6YhNX3KdOQRQNUiDZAiz/8QhQNCTH1VwFMgMdERue0ixJo1qgv0sAHojVqkAjaB+hlgOkhOBcCSFA1WEBlEJVrDAtylTeWLIFfHafhh0AyCW8IJE7OCIJiEudbFP0CI9SB6iKFSnkaULOsoQWjVlC/hrlowwUaT7rTRNDACWdmpE9lyIQ8K2HIQUjclzNfWCfI+YeAM6hYAUoyxQso8MBMz5WArW3qeqT7lpXTiNBHWKYVZsIV66HbR04HknjBIA1VX1lclzNS1zS45uPN/T4BZDl9qxwf7AXMasxvXQ1xYf2TyBhEw6Ugy6aVVtjAR2dp5BNBAtArKYjAGZYV76hCiuNZK+nK/Vxr9fbwX0V7ieBs+u8l+jbRMcEitQs7EUUTZYDy7k9fWgeGKuFE8YPJFRZQhoObZWZru2jWYjoomzbqvfoFaK9CKiofOt07MFhqrTwvpd3D6+U7IyRoLPaIO9gL6rrPnTXzSe4TfxOlVsoga+tPqzQNFEcsktXhYSmTUT965VMi7NBWljZDnelw1O9DS6wsTlk53mR1YRD0deVftdpsYTcfAlFuIToBoey9envBGjYREAKLcJn1O0Oy3cY8L5IKJNhZs0msuKJCi/qAlKZDHMsYU9KEM+HPISheg/TnxZQ0KtTZtmLgJYq67CyLjgk5Xe0A36hOlymaD2pFx+BXoKzXrQGTgJveUrczYslRArwaIiDgqWZ11nOFqlViao4Ade16Ht22VtS6I6bhQ1lVJzExNhAqy+8SCQUCIklDP/OorlIQhcKS9zoqj+K5ADkw8rHCgDSEfYin5fJSZxVym7A4Z724Dhwfl9FB/7Fw2Q27EVs7qJ/UybAtjOakZAVEhINKFI2k5JvrxJtmolEPTAMsxeJEmIncniptLzant4DMrxJ2r880K/UU0Dn2H3RA1V5euVapxQUOoSEJSkhAM0DUXnlMEdVUxSrpCgSzeJJKHMIoMch85K3jbP7IiMi/FjUzoyO+g8lWJ4E7nJ+49Rm7rsQtiXcOrLFgwYAqlVmwO8XQe/8TKKEF+kxUZxzGynjGAkhMGn5lPrsXqRF7nVF68irrkERv8mC1h1BDylgBjfgssIvPzWq+rwoUoYiMHsTzWMk1AwwOT09kYV6BYrJvO9oxHBmin2WnXdG6f04iFiKaqS757uPum45pmRLJuZxEsbwk1DV2BJv4gpno9zRk6qjozOVX23Ax8t18SUF2Pbv9He9OaI1qk+2ojnD0vXGXtSBj3TFZq6PhQQudJawCcEw6NH1Ehwk0vAR26o6J0bLy/Spc0XTAFDkdhDc3d9wbfb+2SRczm+/2nXUr+/u+34yCpXyR0szYQJYonXGEKQfuN+fwpV6+kQSfoZmIQ/JXmWlmO6rGjNwlHgmE4cgeerWKRbpuW61k20C5Zaumg4WYjQLTQO/krTYW7TwM0zobMvWWA38WXyXiDJqFUoqwFW5WDIMMmCOWgiTAySxDLpJMwwyoMmCXNCTl2mkMdshzgyDDagguY7cWJBkVEJr6XAyDD5gqcMOaUCpiJJviKxgCLi+gFQZg9GbYFdyCgpai1JeqnFaC7rwcUoyjAJaAJ4yDxAoS3IlrLZCHwicwEAVDBTxKfYICwMqByn19V2xIh4IskEgDgR8QQBkAsgsfRAICwsDOiOMhjt3XGMgWwDuT45p88c/iRsDWpz76tWFPZ8/f/0KXP8XhU+5K0DpT48eP7/95uHTe2/0dyQ/Bi4gunMZuHzo2O5Tnw7t3H9gx763h08c3L4HuKNu19GLV+8/fPHu/Q/anpKWlP4CuDYevGg8rTHBiwvnjqo0VI8W4w/+tpPn9xw8vO/AzivX1/18TpRHG2i8FUsrC+RN2FaH8/WhOVi3lvhdQ/FoBheBTFF/8NLtHfsPnTq2oOslUR6tof0eQqs06B4A2DLjSVHh3ujB24riUTuCmdrr7Y69h87uPjK76hFxHqXHGZwCjUA/wBbHQxfgVi/1jWRFXlyO7NFAIhYJF+88u/vMtjtVj4jzKEANdFnmIdWWgupN6NaV/GkzAuCLyxEetRUgZlfd9bvbLt9b8PMZUR6toddWLJ8M6Kpx+CYA2JLNvk1xq7gYki4iPGpL3GKi7Mv3zs2b94w4j9Lv8FieBBtUbyJ2Adw9c2bCIoRH3YhcNCWc+vjl4o/EeZSuZ8f626GujkcsND6yrWM13KM9ikTv2X60+DtxHk0HjL47WngS4JkTvp4asm58dsdFmEf3eJOwJ3QikR6l+wU13vnwVAvyJnwbwKwJV6EevbCSlKWQwiiAFQNoQQED3QGXLyxznkJ4886Tv90wj65kGC7AKx8pc8LWx/+uhHp0GsPwAazTYJkTsQ1gDXQD5RSGYQWC+2GpFrqr4+cciEeHmT9BB78ie/PN4675YI8uZRh+YEYtONVC9yJV5YE8GjjET7TADgKKniB2llWBOnK2w3VfQGIyfC/SHKBHe4f4KXz4IrUQuuXqZ+f9b71GDMMX8Ex//hK0tazr4f2hfhILIaBQANpBt/51SgDDMAdc8cCdgnPzZBiGPygv+F7pxTASgHCLIcNQAwBJR688MfLqwQAAAABJRU5ErkJggg==');"}return n[t].ads.fixedHeight&&parseInt(n[t].ads.fixedHeight)>0&&(r.style.minHeight=n[t].ads.fixedHeight+"px","true"!=n[t].ads.setSticky&&1!=n[t].ads.setSticky||(o.style.position="sticky",o.style.top=n[t].ads.stickyTop&&parseInt(n[t].ads.stickyTop)>0?n[t].ads.stickyTop+"px":0)),r.appendChild(o),r},isInvalidElement:function(e){let t=r.getComputedStyle(e);return"none"===t.display||"hidden"===t.visibility||"fixed"===t.position||"sticky"===t.position},wrapperSendEvent:function(){let e=this.getEventId(),o=!1,l=Number.parseInt(c);const{videoScript:s}=n[t]||!1;if(n[t].ads.videoIdx)for(let e=0;e<n[t].ads.videoIdx.length;e++)parseInt(n[t].ads.videoIdx[e])===l&&(o=!0);if(n[t].adSingle&&!o){const i=n[t].adSingle&&n[t].adSingle.customEventName?n[t].adSingle.customEventName:"wtgLazyAdSingle";let o={publisher:!(!n[t].adSingle||!n[t].adSingle.publisher)&&n[t].adSingle.publisher,slot:e};const l=new CustomEvent(i,{detail:o});r.dispatchEvent(l),p&&h(`dispatchEvent(${i})`)}if(s&&o&&!g&&(this.appendVideoScript(e),h("Append video script for "+e),g=!0),n[t].sendWrapperIdEvents){let t;"function"==typeof r.CustomEvent&&"undefined"==typeof MooTools?t=new Event(e):(t=i.createEvent("Event"),t.initEvent(e,!0,!0)),r.dispatchEvent(t),h("windowTop.dispatchEvent(currentAdWrapper)")}c++},wrapperEventListener:function(e){r.addEventListener(e,(,!1)},appendVideoScript:e=>{const{videoScript:r}=n[t]||!1;if(!r||0===r.length)return void h("Missing config videoScript.");const o=i.getElementById(e);if(!o||o.dataset.appended)return void h(`Element ${e} not exist or script was appended`);const l=i.createElement("script");l.setAttribute("src",r),o.closest(".wtgLazyWrapper").appendChild(l),o.dataset.appended=!0,h(`Append video script for ${t}.`)},getEventId:function(){let e=n[t].wrapper.id?n[t].wrapper.id+"-"+c:"wtgLazy-"+c;if(n[t].ads.videoIdx){let i="-video";for(let r=0;r<n[t].ads.videoIdx.length;r++)e=parseInt(n[t].ads.videoIdx[r])===parseInt(c)?e+i:e}return e},isSafeSpace:function(e,r){let o=l[r].element,c=this.getDeviceHeight(),d="percent"==n[t].minAdSpace.unit?c/100*parseInt(n[t].minAdSpace.value):parseInt(n[t].minAdSpace.value),u=this.getAdWrapper(),g=n[t].ads&&n[t].ads.defaultHeight?parseInt(n[t].ads.defaultHeight):this.getElementHeight(u),p=this.getElementMainSelector(o),f=i.querySelector(p),h="body"!==n[t].mainSelector&&this.getOffsetTop(f),A="body"!==n[t].mainSelector&&this.getOffsetTop(f)+this.getElementHeight(f);switch(e){case"scrollUp":for(let e=r+1;e<l.length;e++){let t=m.getOffsetTop(o)-d;if(m.getOffsetTop(l[e].element)+m.getElementHeight(l[e].element)>t&&(m.isElementContainAd(l[e].element)||h&&t<h))return a=m.getOffsetTop(l[e].element)-g,!1}break;case"scrollDown":default:for(let e=r+1;e<l.length;e++){let t=m.getOffsetTop(o)+m.getElementHeight(o)+d;if(m.getOffsetTop(l[e].element)<t&&(m.isElementContainAd(l[e].element)||A&&t>A))return s=m.getOffsetTop(l[e].element)+m.getElementHeight(l[e].element)+g,!1}}return!0},pushAds:function(e){try{let r=this.getDeviceHeight(),d="percent"==n[t].minAdSpace.unit?r/100*parseInt(n[t].minAdSpace.value):parseInt(n[t].minAdSpace.value),u="body"!==n[t].mainSelector&&this.getOffsetTop(i.querySelector(n[t].mainSelector));h("lastTopOffset ",a),h("lastBottomOffset ",s),p&&console.log("elements ",l);for(let r=1;r<l.length-1;r++){if(n[t].ads&&n[t].ads.maxAds&&c>parseInt(n[t].ads.maxAds))return;let g=this.isInvalidElement(l[r].element),f=!0,A=!0;if(l[r+1]){let e=m.isElementContainAd(l[r+1].element),t=m.isLinkElement(l[r+1].element);(e||t)&&(f=!1),p&&l[r].element.setAttribute("data-next-valid",f)}if(l[r-1]){let e=m.isElementContainAd(l[r-1].element),t=m.isLinkElement(l[r-1].element);(e||t)&&(A=!1),p&&l[r].element.setAttribute("data-prev-valid",f)}if(!g){let c;if(n[t].lazyContentDataAttr){c=i.querySelector("["+n[t].lazyContentDataAttr+'="'+l[r].index+'"]').parentNode}else c=l[r].element.parentNode;let g=this.getAdWrapper(),p=n[t].ads&&n[t].ads.defaultHeight?parseInt(n[t].ads.defaultHeight):m.getElementHeight(g);switch(e){case"scrollDown":if(l[r].insertAd&&m.isVisibleElement(l[r].element)&&f&&m.getOffsetTop(l[r].element)+m.getElementHeight(l[r].element)>u+d&&m.getOffsetTop(l[r].element)+m.getElementHeight(l[r].element)>s+d){h("elBottom "+(m.getOffsetTop(l[r].element)+m.getElementHeight(l[r].element))+" > "+(s+d));let t=m.isSafeSpace(e,r);h("safeSpace: "+t),t&&(h("wtgLazy - wstawiam reklamę ... (dół)"),null!==c&&(c.lastChild==l[r].element?c.appendChild(g):c.insertBefore(g,l[r].element.nextSibling),l[r].insertAd=!1,m.pushElement(g,r+1,!0)),s=m.getOffsetTop(l[r].element)+m.getElementHeight(l[r].element)+p,h("AdTop: "+m.getOffsetTop(l[r].element)+m.getElementHeight(l[r].element)),h("AdBottom: "+s))}else!l[r].insertAd&&m.getOffsetTop(l[r].element)+m.getElementHeight(l[r].element)>s&&(s=m.getOffsetTop(l[r].element)+m.getElementHeight(l[r].element));o="scrollDown";break;case"scrollUp":if(l[r].insertAd&&m.isVisibleElement(l[r].element)&&A&&m.getOffsetTop(l[r].element)<a-d){h("elTop "+m.getOffsetTop(l[r].element)+" < "+(a-d));let t=m.isSafeSpace(e,r);if(h("safeSpace: "+t),t){if(h("wtgLazy - wstawiam reklamę ... (góra)"),null!==c){c.insertBefore(g,l[r].element),l[r].insertAd=!1,m.pushElement(g,r,!0)&&(s+=p)}a=m.getOffsetTop(l[r].element)}}else!l[r].insertAd&&m.getOffsetTop(l[r].element)<a&&(a=m.getOffsetTop(l[r].element));o="scrollUp"}}}}catch(e){console.log("wtgThrow: ",e)}},lazyStopListener:function(){window.addEventListener("lazyStopEvent",(function(e){u=!0,h("lazyStopListener: lazy is stopped")}))},lazyResumeListener:function(){window.addEventListener("lazyResumeEved")}))},start:function(){if(n[t].mainSelector&&!i.querySelector(n[t].mainSelector)){if(!n[t].isSpa)return;u=!0}if(n[t].nl2br){let e=i.querySelector(n[t].mainSelector),r=this.nl2br(e.innerHTML);e.innerHTML=r}let e,o=this.getScrollPosition();this.lazyStopListener(),this.lazyResumeListener();try{n[t].isSpa&&this.spaUrlListener(),r.addEventListener("scroll",(function(){u||n[t].ads&&n[t].ads.maxAds&&c<=parseInt(n[t].ads.maxAds)&&(e&&r.clearTimeout(e),e=r.setTimeout((function(){h("wtgLazy ⌚ DOM scan","","time");let e=m.getScrollPosition();e>o?(m.prepareInterestingElements("scrollDown"),m.pushAds("scrollDown")):(m.prepareInterestingElements("scrollUp"),m.pushAds("scrollUp")),o=e<=0?0:e,h("wtgLazy ⌚ DOM scan","","timeEnd")}),parseInt(n[t].scrollDelay)))}),!1)}catch(e){console.log("wtgThrow: ",e)}}};return m}}).call(thits=n(9)},function(e,t,n){"use strict";n.r(t),function(e){var t=n(2),i=n(0),r=n.n(i),o=n(4),l=n(6);(async()=>{if((new t.a).isBrowserEnabled()){if(!r.a)throw"error config";e.lazyAds={},e.lazyAds.config=r.a,e.lazyAds.currentDevice=Object(o.a)().device,e.lazyAds.config[e.lazyAds.currentDevice]&&Object(l.a)().start()}})(r.a)}.call(thiturn 0}}]);
w2g.bidders = [
	{
		BidderSize: [970, 250],
		BidderSizeSent: [[970, 250], [970, 90], [750, 100], [728, 90]],
		bids: [
			{ bidder: "adform", params: { mid: "1681228" } },
			{ bidder: "rtbhouse", params: { region: "prebid-eu", publisherId: "DPvmdEIcN6xczqVEVpOV" } },
			{ bidder: "criteo", params: {networkId: 8025}},
			{ bidder: "ix", params: { siteId: "982893", size: [970, 250] } },
			{ bidder: 'smartadserver', params: { domain: '//prg.smartadserver.com', siteId: '595401', pageId: '1822269', formatId: '62524' } },
			{ bidder: "sspBC" },
			{ bidder: "connectad", params: { networkId: 118, siteId: 1080010} },
			{ bidder: "appnexus", params:{ placementId:"29982579"}},
			{ bidder: "rubicon", params: { accountId: "17862", siteId: "482714", zoneId: "2862514" } },
			{ bidder: "openx",params:{unit:"559450523",delDomain:"waytogrow-d.openx.net"}},
			{ bidder: "pubmatic", params: { publisherId: "156701", adSlot: "www.republika.rs_all" } },
			 
		]
	},
	{
		BidderSize: [970, 90],
		BidderSizeSent: [[970, 90], [750, 100], [728, 90]],
		bids: [
			{ bidder: "adform", params: { mid: "1681229" } },
			{ bidder: "rtbhouse", params: { region: "prebid-eu", publisherId: "DPvmdEIcN6xczqVEVpOV" } },
			{ bidder: "criteo", params: {networkId: 8025}},
			{ bidder: "ix", params: { siteId: "982893", size: [970, 90] } },
			{ bidder: 'smartadserver', params: { domain: '//prg.smartadserver.com', siteId: '595401', pageId: '1822269', formatId: '63332' } },
			{ bidder: "sspBC" },
			{ bidder: "connectad", params: { networkId: 118, siteId: 1080010} },
			{ bidder: "appnexus", params:{ placementId:"29982579"}},
			{ bidder: "rubicon", params: { accountId: "17862", siteId: "482714", zoneId: "2862514" } },
			{ bidder: "openx",params:{unit:"559450524",delDomain:"waytogrow-d.openx.net"}},
			{ bidder: "pubmatic", params: { publisherId: "156701", adSlot: "www.republika.rs_all" } },
		]
	},
	{
		BidderSize: [728, 90],
		BidderSizeSent: [[728, 90]],
		bids: [
			{ bidder: "adform", params: { mid: "1681234" } },
			{ bidder: "rtbhouse", params: { region: "prebid-eu", publisherId: "DPvmdEIcN6xczqVEVpOV" } },
			{ bidder: "criteo", params: {networkId: 8025}},
			{ bidder: "ix", params: { siteId: "982893", size: [728, 90] } },
			{ bidder: 'smartadserver', params: { domain: '//prg.smartadserver.com', siteId: '595401', pageId: '1822269', formatId: '62186' } },
			{ bidder: "sspBC" },
			{ bidder: "connectad", params: { networkId: 118, siteId: 1080010} },
			{ bidder: "appnexus", params:{ placementId:"29982579"}},
			{ bidder: "rubicon", params: { accountId: "17862", siteId: "482714", zoneId: "2862514" } },
			{ bidder: "openx",params:{unit:"559450525",delDomain:"waytogrow-d.openx.net"}},
			{ bidder: "pubmatic", params: { publisherId: "156701", adSlot: "www.republika.rs_all" } },
		]
	},
	{
		BidderSize: [365, 1080],
		BidderSizeSent: [[365, 1080], [360, 1080], [300, 600], [160, 600]],
		bids: [
			{ bidder: "adform", params: { mid: "1698348" } },
			{ bidder: "rtbhouse", params: { region: "prebid-eu", publisherId: "DPvmdEIcN6xczqVEVpOV" } },
			{ bidder: "criteo", params: {networkId: 8025}},
			{ bidder: "ix", params: { siteId: "982893", size: [365, 1080] } },
			{ bidder: 'smartadserver', params: { domain: '//prg.smartadserver.com', siteId: '595401', pageId: '1822269', formatId: '119821' } },
			{ bidder: "sspBC" },
			{ bidder: "connectad", params: { networkId: 118, siteId: 1080010} },
			{ bidder: "appnexus", params:{ placementId:"29982579"}},
			{ bidder: "rubicon", params: { accountId: "17862", siteId: "482714", zoneId: "2862514" } },
			{ bidder: "openx",params:{unit:"559450525",delDomain:"waytogrow-d.openx.net"}},
			{ bidder: "pubmatic", params: { publisherId: "156701", adSlot: "www.republika.rs_all" } },
		]
	},
	{
        BidderSize: [468, 60],
        BidderSizeSent: [[468, 60], [320, 100], [320, 50], [300, 100], [300, 50]],
        bids: [
			{ bidder: "adform", params: { mid: "1681248" } },
			{ bidder: "rtbhouse", params: { region: "prebid-eu", publisherId: "DPvmdEIcN6xczqVEVpOV" } },
			{ bidder: "criteo", params: {networkId: 8025}},
			{ bidder: "ix", params: { siteId: "982893", size: [468, 60] } },
			{ bidder: 'smartadserver', params: { domain: '//prg.smartadserver.com', siteId: '595401', pageId: '1822269', formatId: '63831' } },
			{ bidder: "sspBC" },
			{ bidder: "connectad", params: { networkId: 118, siteId: 1080010} },
			{ bidder: "appnexus", params:{ placementId:"29982579"}},
			{ bidder: "rubicon", params: { accountId: "17862", siteId: "482714", zoneId: "2862514" } },
			{ bidder: "openx",params:{unit:"559450526",delDomain:"waytogrow-d.openx.net"}},
			{ bidder: "pubmatic", params: { publisherId: "156701", adSlot: "www.republika.rs_all" } },
		]
    },
	{
		BidderSize: [300, 600],
		BidderSizeSent: [[360, 280], [336, 280], [300, 250], [250, 250]],
		bids: [
			{ bidder: "adform", params: { mid: "1681249" } },
			{ bidder: "rtbhouse", params: { region: "prebid-eu", publisherId: "DPvmdEIcN6xczqVEVpOV" } },
			{ bidder: "criteo", params: {networkId: 8025}},
			{ bidder: "ix", params: { siteId: "982893", size: [300, 600] } },
			{ bidder: 'smartadserver', params: { domain: '//prg.smartadserver.com', siteId: '595401', pageId: '1822269', formatId: '62189' } },
			{ bidder: "sspBC" },
			{ bidder: "connectad", params: { networkId: 118, siteId: 1080010} },
			{ bidder: "appnexus", params:{ placementId:"29982579"}},
			{ bidder: "rubicon", params: { accountId: "17862", siteId: "482714", zoneId: "2862514" } },
			{ bidder: "openx",params:{unit:"559450527",delDomain:"waytogrow-d.openx.net"}},
			{ bidder: "pubmatic", params: { publisherId: "156701", adSlot: "www.republika.rs_all" } },
		]
	},
	{
		BidderSize: [360, 100],
		BidderSizeSent: [[360, 280], [336, 280], [300, 250], [250, 250]],
		bids: [
			{ bidder: "adform", params: { mid: "1681251" } },
			{ bidder: "rtbhouse", params: { region: "prebid-eu", publisherId: "DPvmdEIcN6xczqVEVpOV" } },
			{ bidder: "ix", params: { siteId: "982893", size: [360, 100] } },
			{ bidder: 'smartadserver', params: { domain: '//prg.smartadserver.com', siteId: '595401', pageId: '1822269', formatId: '84448' } },
			{ bidder: "sspBC" },
			{ bidder: "connectad", params: { networkId: 118, siteId: 1080010} },
			{ bidder: "appnexus", params:{ placementId:"29982579"}},
			{ bidder: "rubicon", params: { accountId: "17862", siteId: "482714", zoneId: "2862514" } },
			{ bidder: "openx",params:{unit:"559450528",delDomain:"waytogrow-d.openx.net"}},
			{ bidder: "pubmatic", params: { publisherId: "156701", adSlot: "www.republika.rs_all" } },
		]
	}, 
	{
		BidderSize: [336, 280],
		BidderSizeSent: [[336, 280], [300, 250], [250, 250]],
		bids: [
			{ bidder: "adform", params: { mid: "1681252" } },
			{ bidder: "rtbhouse", params: { region: "prebid-eu", publisherId: "DPvmdEIcN6xczqVEVpOV" } },
			{ bidder: "ix", params: { siteId: "982893", size: [336, 280] } },
			{ bidder: 'smartadserver', params: { domain: '//prg.smartadserver.com', siteId: '595401', pageId: '1822269', formatId: '62431' } },
			{ bidder: "sspBC" },
			{ bidder: "connectad", params: { networkId: 118, siteId: 1080010} },
			{ bidder: "appnexus", params:{ placementId:"29982579"}},
			{ bidder: "rubicon", params: { accountId: "17862", siteId: "482714", zoneId: "2862514" } },
			{ bidder: "openx",params:{unit:"559450529",delDomain:"waytogrow-d.openx.net"}},
			{ bidder: "pubmatic", params: { publisherId: "156701", adSlot: "www.republika.rs_all" } },
		]
	},
	{
		BidderSize: [300, 250],
		BidderSizeSent: [[300, 250], [250, 250]],
		bids: [
			{ bidder: "adform", params: { mid: "1681253" } },
			{ bidder: "rtbhouse", params: { region: "prebid-eu", publisherId: "DPvmdEIcN6xczqVEVpOV" } },
			{ bidder: "ix", params: { siteId: "982893", size: [300, 250] } },
			{ bidder: 'smartadserver', params: { domain: '//prg.smartadserver.com', siteId: '595401', pageId: '1822269', formatId: '32923' } },
			{ bidder: "sspBC" },
			{ bidder: "connectad", params: { networkId: 118, siteId: 1080010} },
			{ bidder: "appnexus", params:{ placementId:"29982579"}},
			{ bidder: "rubicon", params: { accountId: "17862", siteId: "482714", zoneId: "2862514" } },
			{ bidder: "openx",params:{unit:"559450530",delDomain:"waytogrow-d.openx.net"}},
			{ bidder: "pubmatic", params: { publisherId: "156701", adSlot: "www.republika.rs_all" } },
		]
	},
	{
		BidderSize: [320, 100],
		BidderSizeSent: [[360, 100], [360, 50], [320, 100], [320, 50]],
		bids: [
			{ bidder: "adform", params: { mid: "1681254" } },
			{ bidder: "rtbhouse", params: { region: "prebid-eu", publisherId: "DPvmdEIcN6xczqVEVpOV" } },
			{ bidder: "ix", params: { siteId: "982893", size: [320, 100] } },
			{ bidder: 'smartadserver', params: { domain: '//prg.smartadserver.com', siteId: '595401', pageId: '1822269', formatId: '62429' } },
			{ bidder: "sspBC" },
			{ bidder: "connectad", params: { networkId: 118, siteId: 1080010} },
			{ bidder: "appnexus", params:{ placementId:"29982579"}},
			{ bidder: "rubicon", params: { accountId: "17862", siteId: "482714", zoneId: "2862514" } },
			{ bidder: "openx",params:{unit:"559450531",delDomain:"waytogrow-d.openx.net"}},
			{ bidder: "pubmatic", params: { publisherId: "156701", adSlot: "www.republika.rs_all" } },
		]
	},
	{
		BidderSize: [320, 50],
		BidderSizeSent: [[360, 100], [360, 50], [320, 100], [320, 50]],
		bids: [
			{ bidder: "adform", params: { mid: "1681259" } },
			{ bidder: "rtbhouse", params: { region: "prebid-eu", publisherId: "DPvmdEIcN6xczqVEVpOV" } },
			{ bidder: "ix", params: { siteId: "982893", size: [320, 50] } },
			{ bidder: 'smartadserver', params: { domain: '//prg.smartadserver.com', siteId: '595401', pageId: '1822269', formatId: '62430' } },
			{ bidder: "sspBC" },
			{ bidder: "connectad", params: { networkId: 118, siteId: 1080010} },
			{ bidder: "appnexus", params:{ placementId:"29982579"}},
			{ bidder: "rubicon", params: { accountId: "17862", siteId: "482714", zoneId: "2862514" } },
			{ bidder: "openx",params:{unit:"559450532",delDomain:"waytogrow-d.openx.net"}},
			{ bidder: "pubmatic", params: { publisherId: "156701", adSlot: "www.republika.rs_all" } },
		]
	}];
	w2g.sideBidders = [
		 {
			BidderSize: [336, 280],
			BidderSizeSent: [[336, 280], [300, 250], [250, 250]],
			bids: [
				{ bidder: "adform", params: { mid: "1681252" } },
				{ bidder: "rtbhouse", params: { region: "prebid-eu", publisherId: "DPvmdEIcN6xczqVEVpOV" } },
				{ bidder: "ix", params: { siteId: "982893", size: [336, 280] } },
				{ bidder: 'smartadserver', params: { domain: '//prg.smartadserver.com', siteId: '595401', pageId: '1822269', formatId: '62431' } },
				{ bidder: "sspBC" },
				{ bidder: "connectad", params: { networkId: 118, siteId: 1080010} },
				{ bidder: "appnexus", params:{ placementId:"29982579"}},
				{ bidder: "rubicon", params: { accountId: "17862", siteId: "482714", zoneId: "2862514" } },
				{ bidder: "openx",params:{unit:"559450529",delDomain:"waytogrow-d.openx.net"}},
				{ bidder: "pubmatic", params: { publisherId: "156701", adSlot: "www.republika.rs_all" } },
			]
		}, {
			BidderSize: [300, 250],
			BidderSizeSent: [[300, 250], [250, 250]],
			bids: [
				{ bidder: "adform", params: { mid: "1681253" } },
				{ bidder: "rtbhouse", params: { region: "prebid-eu", publisherId: "DPvmdEIcN6xczqVEVpOV" } },
				{ bidder: "ix", params: { siteId: "982893", size: [300, 250] } },
				{ bidder: 'smartadserver', params: { domain: '//prg.smartadserver.com', siteId: '595401', pageId: '1822269', formatId: '32923' } },
				{ bidder: "sspBC" },
				{ bidder: "connectad", params: { networkId: 118, siteId: 1080010} },
				{ bidder: "appnexus", params:{ placementId:"29982579"}},
				{ bidder: "rubicon", params: { accountId: "17862", siteId: "482714", zoneId: "2862514" } },
				{ bidder: "openx",params:{unit:"559450530",delDomain:"waytogrow-d.openx.net"}},
				{ bidder: "pubmatic", params: { publisherId: "156701", adSlot: "www.republika.rs_all" } },
			]
		}];
		w2g.Mapping = [
			[[1024, 0],[[300, 600]]],
			[[0, 0],[]]
		];
		
		w2g.Mapping2 = [
			[[772, 0],[]],
			[[340, 0],[[336, 280], [320, 100], [300, 250]]],
			[[0, 0],[300, 250]]
		];
		
		w2g.Sizes = [
			[300, 600]
			[336, 280],
			[300, 250],

		];
		window.pbjs = window.pbjs || {}, window.pbjs.que = window.pbjs.que || [], window.pbjs.que.push(function() {
			window.pbjs.setConfig({
				useBidCache: !0,
				userSync: {
					userIds: [{
						name: "id5Id",
						params: {
							partner: 802
						},
						storage: {
							type: "html5",
							name: "id5id",
							expires: 90,
							refreshInSeconds: 28800
						}
					}],
					auctionDelay: 50
				}
			})
		})
		
	$(document).on("galleryBannerEvent", function () {
	if (typeof window.CustomEvent === "function") {
		var galleryevent = new Event('galleryBannerEvent');
	} else {
		var galleryevent = document.createEvent("Event");
		galleryevent.initEvent('galleryBannerEvent', true, true);
	}
	window.dispatchEvent(galleryevent);
});

w2g.publisherConfigCallback(conf = {
	amazon : {
	timeout: 1200,
	pubID: 'e01babcc-1a26-4bf8-a4b4-551fa47b2e56'
		},
    gdpr : {
		set: true
        },
	configByUrl: [
			{ "/": "sg" },
		],
	adDelay: true,
    slots: [{
		SlotId: "leaderboard_top",
		//label: !0,
        //labelCustomText: 'Oglas',
        slotsPadding: { top: 20, bottom: 20 },
        Handle: {
        selector: "",
        insert: { type: 'inside' },
            },
        AdUnitName: "/21831979902/Republika.rs/leaderboard_top",
        Sizes: [[990, 250], [970, 250], [970, 90], [728, 90]],
        PBSize: w2g.bidders,
        Mapping: [
            [[1000, 0],[[990, 250],[970, 250], [970, 90], [728, 90]]],
            [[0, 0],[]]
		]
	},{
		SlotId: "m_top",
		//label: !0,
		//labelCustomText: 'Oglas',
		slotsPadding: { top: 10, bottom: 10 },
		theme: {
			template: "temporaryFixedTop",
			device: ["mobile"],
			timeout: 5000
		},
		Handle: {
			selector: "",
			insert: { type: 'inside' },
				},
        AdUnitName: "/21831979902/Republika.rs/m_top",
        Sizes: [[320, 100],[320, 50]],
		PBSize: w2g.bidders,
		Mapping:  [
            [[970, 0], []],
            [[0, 0],[[320, 100], [320, 50]]]
        ]
	},{
		SlotId: "leaderboard_top_A1",
		label: false,
		slotsPadding: { top: 10, bottom: 10 },
		Handle: {
			selector: "",
			insert: { type: 'inside' },
				},
        AdUnitName: "/21831979902/Republika.rs/leaderboard_top_A1",
        Sizes: [728, 90],
		PBSize: w2g.bidders,
		Mapping: [
			[[1000, 0],[728, 90]],
            [[0, 0],[]]
		]
	},{
		SlotId: "sidebar_1",
		//label: !0,
		//labelCustomText: 'Oglas',
		Handle: {
			selector: "",
			insert: { type: 'inside' },
				},
        AdUnitName: "/21831979902/Republika.rs/sidebar_1",
        Sizes: w2g.Sizes,
		PBSize: w2g.bidders,
		Mapping: w2g.Mapping,
	},{
		SlotId: "sidebar_2",
		//label: !0,
		//labelCustomText: 'Oglas',
		slotsPadding: { top: 10, bottom: 10 },
		Handle: {
			selector: "",
			insert: { type: 'inside' },
				},
        AdUnitName: "/21831979902/Republika.rs/sidebar_2",
        Sizes: w2g.Sizes,
		PBSize: w2g.bidders,
		Mapping: w2g.Mapping,
	},{
		SlotId: "sidebar_3",
		//label: !0,
		//labelCustomText: 'Oglas',
		slotsPadding: { top: 10, bottom: 10 },
		Handle: {
			selector: "",
			insert: { type: 'inside' },
				},
        AdUnitName: "/21831979902/Republika.rs/sidebar_3",
        Sizes: w2g.Sizes,
		PBSize: w2g.bidders,
		Mapping: w2g.Mapping,
	},{
		SlotId: "sidebar_4",
		//label: !0,
		//labelCustomText: 'Oglas',
		slotsPadding: { top: 10, bottom: 10 },
		Handle: {
			selector: "",
			insert: { type: 'inside' },
				},
        AdUnitName: "/21831979902/Republika.rs/sidebar_4",
        Sizes: w2g.Sizes,
		PBSize: w2g.bidders,
		Mapping: w2g.Mapping,
	},{
		SlotId: "sidebar_5",
		//label: !0,
		//labelCustomText: 'Oglas',
		slotsPadding: { top: 10, bottom: 10 },
		Handle: {
			selector: "",
			insert: { type: 'inside' },
				},
        AdUnitName: "/21831979902/Republika.rs/sidebar_5",
        Sizes: w2g.Sizes,
		PBSize: w2g.bidders,
		Mapping: w2g.Mapping,
	},{
		SlotId: "m.box_1",
		//label: !0,
		//labelCustomText: 'Oglas',
		slotsPadding: { top: 10, bottom: 10 },
		Handle: {
			selector: "",
			insert: { type: 'inside' },
				},
        AdUnitName: "/21831979902/Republika.rs/m.box_1",
        Sizes: w2g.Sizes,
		PBSize: w2g.sideBidders,
		Mapping: w2g.Mapping2,
	},{
		SlotId: "m.box_2",
		//label: !0,
		//labelCustomText: 'Oglas',
		slotsPadding: { top: 10, bottom: 10 },
		Handle: {
			selector: "",
			insert: { type: 'inside' },
				},
        AdUnitName: "/21831979902/Republika.rs/m.box_2",
        Sizes: w2g.Sizes,
		PBSize: w2g.sideBidders,
		Mapping: w2g.Mapping2,
	},{
		SlotId: "m.box_3",
		//label: !0,
		//labelCustomText: 'Oglas',
		slotsPadding: { top: 10, bottom: 10 },
		Handle: {
			selector: "",
			insert: { type: 'inside' },
				},
        AdUnitName: "/21831979902/Republika.rs/m.box_3",
        Sizes: w2g.Sizes,
		PBSize: w2g.sideBidders,
		Mapping: w2g.Mapping2,
	},{
		SlotId: "m.box_4",
		//label: !0,
		//labelCustomText: 'Oglas',
		slotsPadding: { top: 10, bottom: 10 },
		Handle: {
			selector: "",
			insert: { type: 'inside' },
				},
        AdUnitName: "/21831979902/Republika.rs/m.box_4",
        Sizes: w2g.Sizes,
		PBSize: w2g.sideBidders,
		Mapping: w2g.Mapping2,
	},{
		SlotId: "wtgLazy-1",
		//label: !0,
		//labelCustomText: 'Oglas',
		slotsPadding: { top: 10, bottom: 10 },
		type: {
			name: "runonevent",
			event: "wtgLazy-1"
		},
        AdUnitName: "/21831979902/Republika.rs/lazy_1",
        Sizes: [[336, 280], [300, 250], [468, 60]],
		PBSize: w2g.bidders,
		Mapping: [
            [[1000, 0],[[468, 60], [336, 280], [300, 250]]],
			[[340, 0], [[336, 280],[300, 250]]],
            [[0, 0],[300, 250]]
		],
	},{
		SlotId: "wtgLazy-2",
		//label: !0,
		//labelCustomText: 'Oglas',
		slotsPadding: { top: 10, bottom: 10 },
		type: {
			name: "runonevent",
			event: "wtgLazy-2"
		},
        AdUnitName: "/21831979902/Republika.rs/lazy_2",
        Sizes: [[336, 280], [300, 250], [468, 60]],
		PBSize: w2g.bidders,
		Mapping: [
            [[1000, 0],[[468, 60], [336, 280], [300, 250]]],
			[[340, 0], [[336, 280],[300, 250]]],
            [[0, 0],[300, 250]]
		],
	},{
		SlotId: "wtgLazy-3",
		//label: !0,
		//labelCustomText: 'Oglas',
		slotsPadding: { top: 10, bottom: 10 },
		type: {
			name: "runonevent",
			event: "wtgLazy-3"
		},
        AdUnitName: "/21831979902/Republika.rs/lazy_3",
        Sizes: [[336, 280], [300, 250], [468, 60]],
		PBSize: w2g.bidders,
		Mapping: [
            [[1000, 0],[[468, 60], [336, 280], [300, 250]]],
			[[340, 0], [[336, 280],[300, 250]]],
            [[0, 0],[300, 250]]
		],
	},{
		SlotId: "wtgLazy-4",
		//label: !0,
		//labelCustomText: 'Oglas',
		slotsPadding: { top: 10, bottom: 10 },
		type: {
			name: "runonevent",
			event: "wtgLazy-4"
		},
        AdUnitName: "/21831979902/Republika.rs/lazy_4",
        Sizes: [[336, 280], [300, 250], [468, 60]],
		PBSize: w2g.bidders,
		Mapping: [
            [[1000, 0],[[468, 60], [336, 280], [300, 250]]],
			[[340, 0], [[336, 280],[300, 250]]],
            [[0, 0],[300, 250]]
		],
	},{
		SlotId: "wtgLazy-5",
		//label: !0,
		//labelCustomText: 'Oglas',
		slotsPadding: { top: 10, bottom: 10 },
		type: {
			name: "runonevent",
			event: "wtgLazy-5"
		},
        AdUnitName: "/21831979902/Republika.rs/lazy_5",
        Sizes: [[336, 280], [300, 250], [468, 60]],
		PBSize: w2g.bidders,
		Mapping: [
            [[1000, 0],[[468, 60], [336, 280], [300, 250]]],
			[[340, 0], [[336, 280],[300, 250]]],
            [[0, 0],[300, 250]]
		],
	},{
		SlotId: "wtgLazy-6",
		//label: !0,
		//labelCustomText: 'Oglas',
		slotsPadding: { top: 10, bottom: 10 },
		type: {
			name: "runonevent",
			event: "wtgLazy-6"
		},
        AdUnitName: "/21831979902/Republika.rs/lazy_6",
        Sizes: [[336, 280], [300, 250], [468, 60]],
		PBSize: w2g.bidders,
		Mapping: [
            [[1000, 0],[[468, 60], [336, 280], [300, 250]]],
			[[340, 0], [[336, 280],[300, 250]]],
            [[0, 0],[300, 250]]
		],
	},{
		SlotId: "wtgLazy-7",
		//label: !0,
		//labelCustomText: 'Oglas',
		slotsPadding: { top: 10, bottom: 10 },
		type: {
			name: "runonevent",
			event: "wtgLazy-7"
		},
        AdUnitName: "/21831979902/Republika.rs/lazy_7",
        Sizes: [[336, 280], [300, 250], [468, 60]],
		PBSize: w2g.bidders,
		Mapping: [
            [[1000, 0],[[468, 60], [336, 280], [300, 250]]],
			[[340, 0], [[336, 280],[300, 250]]],
            [[0, 0],[300, 250]]
		],
	},{
		SlotId: "wtgLazy-8",
		//label: !0,
		//labelCustomText: 'Oglas',
		slotsPadding: { top: 10, bottom: 10 },
		type: {
			name: "runonevent",
			event: "wtgLazy-8"
		},
        AdUnitName: "/21831979902/Republika.rs/lazy_8",
        Sizes: [[336, 280], [300, 250], [468, 60]],
		PBSize: w2g.bidders,
		Mapping: [
            [[1000, 0],[[468, 60], [336, 280], [300, 250]]],
			[[340, 0], [[336, 280],[300, 250]]],
            [[0, 0],[300, 250]]
		],
	},{
		SlotId: "wtgLazy-9",
		//label: !0,
		//labelCustomText: 'Oglas',
		slotsPadding: { top: 10, bottom: 10 },
		type: {
			name: "runonevent",
			event: "wtgLazy-9"
		},
        AdUnitName: "/21831979902/Republika.rs/lazy_9",
        Sizes: [[336, 280], [300, 250], [468, 60]],
		PBSize: w2g.bidders,
		Mapping: [
            [[1000, 0],[[468, 60], [336, 280], [300, 250]]],
			[[340, 0], [[336, 280],[300, 250]]],
            [[0, 0],[300, 250]]
		],
	},{
		SlotId: "wtgLazy-10",
		//label: !0,
		//labelCustomText: 'Oglas',
		slotsPadding: { top: 10, bottom: 10 },
		type: {
			name: "runonevent",
			event: "wtgLazy-10"
		},
        AdUnitName: "/21831979902/Republika.rs/lazy_10",
        Sizes: [[336, 280], [300, 250], [468, 60]],
		PBSize: w2g.bidders,
		Mapping: [
            [[1000, 0],[[468, 60], [336, 280], [300, 250]]],
			[[340, 0], [[336, 280],[300, 250]]],
            [[0, 0],[300, 250]]
		],
	},{
		SlotId: "InText_1",
		//label: !0,
		//labelCustomText: 'Oglas',
		slotsPadding: { top: 10, bottom: 10 },
		Handle: {
			selector: "",
			insert: { type: 'inside' },
				},
        AdUnitName: "/21831979902/Republika.rs/InText_1",
        Sizes: [[468, 60], [336, 280], [300, 250]],
		PBSize: w2g.bidders,
		Mapping: [
            [[1000, 0],[[468, 60], [336, 280], [300, 250]]],
            [[0, 0],[]]
		],
	},{
		SlotId: "InText_2",
		//label: !0,
		//labelCustomText: 'Oglas',
		slotsPadding: { top: 10, bottom: 10 },
		Handle: {
			selector: "",
			insert: { type: 'inside' },
				},
        AdUnitName: "/21831979902/Republika.rs/InText_2",
        Sizes: [[468, 60], [336, 280], [300, 250]],
		PBSize: w2g.bidders,
		Mapping: [
            [[1000, 0],[[468, 60], [336, 280], [300, 250]]],
            [[0, 0],[]]
		],
	},{
		SlotId: "m.InText_1",
		//label: !0,
		//labelCustomText: 'Oglas',
		slotsPadding: { top: 10, bottom: 10 },
		Handle: {
			selector: "",
			insert: { type: 'inside' },
				},
        AdUnitName: "/21831979902/Republika.rs/m.InText_1",
        Sizes: [[300, 600], [336, 280], [300, 250]],
		PBSize: w2g.sideBidders,
		Mapping: [
			[[772, 0],[]],
			[[340, 0],[[336, 280],[300, 250]]],
			[[0, 0],[300, 250]]
		],
	},{
		SlotId: "m.InText_2",
		//label: !0,
		//labelCustomText: 'Oglas',
		slotsPadding: { top: 10, bottom: 10 },
		Handle: {
			selector: "",
			insert: { type: 'inside' },
				},
        AdUnitName: "/21831979902/Republika.rs/m.InText_2",
        Sizes: [[300, 600], [336, 280], [300, 250]],
		PBSize: w2g.sideBidders,
		Mapping: [
			[[772, 0],[]],
			[[340, 0],[[336, 280],[300, 250]]],
			[[0, 0],[300, 250]]
		],
	},{
		SlotId: "under_text",
		//label: !0,
		//labelCustomText: 'Oglas',
		slotsPadding: { top: 10, bottom: 10 },
		Handle: {
			selector: "",
			insert: { type: 'inside' },
				},
        AdUnitName: "/21831979902/Republika.rs/under_text",
        Sizes: [[300, 600], [468, 60], [336, 280], [300, 250]],
		PBSize: w2g.bidders,
		Mapping: [
			[[1000, 0],[[468, 60], [336, 280], [300, 250]]],
			[[340, 0],[[300, 600],[336, 280],[300, 250]]],
			[[0, 0],[300, 250], [300, 600]]
		],
	},
	{
		SlotId: "branding_right",
		//label: !0,
		//labelCustomText: 'Oglas',
		//delay: true,
		Handle: {
			selector: "",
			insert: { type: 'inside' },
				},
        AdUnitName: "/21831979902/Republika.rs/branding_right",
        Sizes: [[365, 1080], [360, 1080], [300, 600], [160, 600]],
		PBSize: w2g.bidders,
		Mapping: [
			[[800, 0],[[365, 1080], [360, 1080], [300, 600], [160, 600]]],
			[[0, 0],[]]
		],
	},{
		SlotId: "branding_left",
		//label: !0,
		//labelCustomText: 'Oglas',
		//delay: true,
		Handle: {
			selector: "",
			insert: { type: 'inside' },
				},
        AdUnitName: "/21831979902/Republika.rs/branding_left",
        Sizes: [[365, 1080], [360, 1080], [300, 600], [160, 600]],
		PBSize: w2g.bidders,
		Mapping: [
			[[800, 0],[[365, 1080], [360, 1080], [300, 600], [160, 600]]],
			[[0, 0],[]]
		],
	},{
		SlotId: "banner_gallery",
		//label: !0,
		//labelCustomText: 'Oglas',
		type : { name : 'runonevent', event : 'galleryBannerEvent' },
		slotsPadding: { top: 10, bottom: 10 },
		// Handle: {
		// 	selector: "",
		// 	insert: { type: 'inside' },
		// 		},
        AdUnitName: "/21831979902/Republika.rs/banner_gallery",
        Sizes: [[970, 250], [750, 200], [300, 600],[580, 400], [336, 280], [300, 250]],
		PBSize: w2g.bidders,
		Mapping: [
            [[1000, 0],[[970, 250], [750, 200], [580, 400]]],
            [[340, 0],[[300, 600],[336, 280],[300, 250]]],
			[[0, 0],[300, 250], [300, 600]]
		],
	},{
		SlotId: "footer_script",
		//label: !0,
       // labelCustomText: 'Oglas',
		Handle: {
			selector: "",
			insert: { type: 'after' },
				},
        AdUnitName: "/21831979902/Republika.rs/footer_script",
        Sizes: [[250, 250], [300, 250]],
		PBSize: w2g.bidders,
		Mapping: [
			[[340, 0],[[250, 250], [300, 250]]],
			[[0, 0],[]]
		],
	},{
		SlotId: "w2g-pushad",
		Handle: {
		selector: "body",
			insert: {
			type: "after"
			}
		},
		adBlank: {
		   show: 100,
		   code: '<script>!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){\"undefined\"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:\"Module\"}),Object.defineProperty(t,\"__esModule\",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&\"object\"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,\"default\",{enumerable:!0,value:t}),2&e&&\"string\"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,\"a\",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p=\"\/\",n(n.s=49)}([function(t,e){var n;n=function(){return this}();try{n=n||new Function(\"return this\")()}catch(t){\"object\"==typeof window&&(n=window)}t.exports=n},function(t,e){var n=t.exports={version:\"2.6.11\"};\"number\"==typeof __e&&(__e=n)},function(t,e){var n=t.exports=\"undefined\"!=typeof window&&window.Math==Math?window:\"undefined\"!=typeof self&&self.Math==Math?self:Function(\"return this\")();\"number\"==typeof __g&&(__g=n)},function(t,e,n){var o=n(33)(\"wks\"),r=n(34),i=n(2).Symbol,a=\"function\"==typeof i;(t.exports=function(t){return o[t]||(o[t]=a&&i[t]||(a?i:r)(\"Symbol.\"+t))}).store=o},function(t,e,n){var o=n(10);t.exports=function(t){if(!o(t))throw TypeError(t+\" is not an object!\");return t}},function(t,e,n){var o=n(2),r=n(1),i=n(11),a=n(6),s=n(13),c=function(t,e,n){var u,l,f,d=t&c.F,p=t&c.G,g=t&c.S,h=t&c.P,v=t&c.B,y=t&c.W,m=p?r:r[e]||(r[e]={}),w=m.prototype,b=p?o:g?o[e]:(o[e]||{}).prototype;for(u in p&&(n=e),n)(l=!d&&b&&void 0!==b[u])&&s(m,u)||(f=l?b[u]:n[u],m[u]=p&&\"function\"!=typeof b[u]?n[u]:v&&l?i(f,o):y&&b[u]==f?function(t){var e=function(e,n,o){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,o)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(f):h&&\"function\"==typeof f?i(Function.call,f):f,h&&((m.virtual||(m.virtual={}))[u]=f,t&c.R&&w&&!w[u]&&a(w,u,f)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},function(t,e,n){var o=n(9),r=n(30);t.exports=n(7)?function(t,e,n){return o.f(t,e,r(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){t.exports=!n(19)((function(){return 7!=Object.defineProperty({},\"a\",{get:function(){return 7}}).a}))},function(t,e){t.exports={}},function(t,e,n){var o=n(4),r=n(59),i=n(60),a=Object.defineProperty;e.f=n(7)?Object.defineProperty:function(t,e,n){if(o(t),e=i(e,!0),o(n),r)try{return a(t,e,n)}catch(t){}if(\"get\"in n||\"set\"in n)throw TypeError(\"Accessors not supported!\");return\"value\"in n&&(t[e]=n.value),t}},function(t,e){t.exports=function(t){return\"object\"==typeof t?null!==t:\"function\"==typeof t}},function(t,e,n){var o=n(12);t.exports=function(t,e,n){if(o(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,o){return t.call(e,n,o)};case 3:return function(n,o,r){return t.call(e,n,o,r)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if(\"function\"!=typeof t)throw TypeError(t+\" is not a function!\");return t}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){\"use strict\";var o=n(58)(!0);n(29)(String,\"String\",(function(t){this._t=String(t),this._i=0}),(function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=o(e,n),this._i+=t.length,{value:t,done:!1})}))},function(t,e){var n=Math.ceil,o=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?o:n)(t)}},function(t,e){t.exports=function(t){if(null==t)throw TypeError(\"Can\'t call method on  \"+t);return t}},function(t,e){t.exports=!0},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var o=n(10),r=n(2).document,i=o(r)&&o(r.createElement);t.exports=function(t){return i?r.createElement(t):{}}},function(t,e,n){var o=n(66),r=n(17);t.exports=function(t){return o(r(t))}},function(t,e,n){var o=n(33)(\"keys\"),r=n(34);t.exports=function(t){return o[t]||(o[t]=r(t))}},function(t,e,n){var o=n(9).f,r=n(13),i=n(3)(\"toStringTag\");t.exports=function(t,e,n){t&&!r(t=n?t:t.prototype,i)&&o(t,i,{configurable:!0,value:e})}},function(t,e,n){n(70);for(var o=n(2),r=n(6),i=n(8),a=n(3)(\"toStringTag\"),s=\"CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList\".split(\",\"),c=0;c<s.length;c++){var u=s[c],l=o[u],f=l&&l.prototype;f&&!f[a]&&r(f,a,u),i[u]=i.Array}},function(t,e,n){var o=n(14),r=n(3)(\"toStringTag\"),i=\"Arguments\"==o(function(){return arguments}());t.exports=function(t){var e,n,a;return void 0===t?\"Undefined\":null===t?\"Null\":\"string\"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),r))?n:i?o(e):\"Object\"==(a=o(e))&&\"function\"==typeof e.callee?\"Arguments\":a}},function(t,e,n){\"use strict\";var o=n(12);function r(t){var e,n;this.promise=new t((function(t,o){if(void 0!==e||void 0!==n)throw TypeError(\"Bad Promise constructor\");e=t,n=o})),this.resolve=o(e),this.reject=o(n)}t.exports.f=function(t){return new r(t)}},function(t,e,n){\"use strict\";Object.defineProperty(e,\"__esModule\",{value:!0});var o,r=n(109),i=(o=r)&&o.__esModule?o:{default:o};e.default=i.default},function(t,e,n){\"use strict\";Object.defineProperty(e,\"__esModule\",{value:!0});var o,r=n(110),i=(o=r)&&o.__esModule?o:{default:o};e.default=i.default},function(t,e,n){\"use strict\";var o=n(18),r=n(5),i=n(61),a=n(6),s=n(8),c=n(62),u=n(23),l=n(69),f=n(3)(\"iterator\"),d=!([].keys&&\"next\"in[].keys()),p=function(){return this};t.exports=function(t,e,n,g,h,v,y){c(n,e,g);var m,w,b,x=function(t){if(!d&&t in E)return E[t];switch(t){case\"keys\":case\"values\":return function(){return new n(this,t)}}return function(){return new n(this,t)}},k=e+\" Iterator\",_=\"values\"==h,S=!1,E=t.prototype,O=E[f]||E[\"@@iterator\"]||h&&E[h],M=O||x(h),P=h?_?x(\"entries\"):M:void 0,T=\"Array\"==e&&E.entries||O;if(T&&(b=l(T.call(new t)))!==Object.prototype&&b.next&&(u(b,k,!0),o||\"function\"==typeof b[f]||a(b,f,p)),_&&O&&\"values\"!==O.name&&(S=!0,M=function(){return O.call(this)}),o&&!y||!d&&!S&&E[f]||a(E,f,M),s[e]=M,s[k]=p,h)if(m={values:_?M:x(\"values\"),keys:v?M:x(\"keys\"),entries:P},y)for(w in m)w in E||i(E,w,m[w]);else r(r.P+r.F*(d||S),e,m);return m}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var o=n(65),r=n(35);t.exports=Object.keys||function(t){return o(t,r)}},function(t,e,n){var o=n(16),r=Math.min;t.exports=function(t){return t>0?r(o(t),9007199254740991):0}},function(t,e,n){var o=n(1),r=n(2),i=r[\"__core-js_shared__\"]||(r[\"__core-js_shared__\"]={});(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})(\"versions\",[]).push({version:o.version,mode:n(18)?\"pure\":\"global\",copyright:\"\u00A9 2019 Denis Pushkarev (zloirock.ru)\"})},function(t,e){var n=0,o=Math.random();t.exports=function(t){return\"Symbol(\".concat(void 0===t?\"\":t,\")_\",(++n+o).toString(36))}},function(t,e){t.exports=\"constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf\".split(\",\")},function(t,e,n){var o=n(2).document;t.exports=o&&o.documentElement},function(t,e,n){var o=n(17);t.exports=function(t){return Object(o(t))}},function(t,e,n){var o=n(25),r=n(3)(\"iterator\"),i=n(8);t.exports=n(1).getIteratorMethod=function(t){if(null!=t)return t[r]||t[\"@@iterator\"]||i[o(t)]}},function(t,e,n){var o=n(4),r=n(12),i=n(3)(\"species\");t.exports=function(t,e){var n,a=o(t).constructor;return void 0===a||null==(n=o(a)[i])?e:r(n)}},function(t,e,n){var o,r,i,a=n(11),s=n(78),c=n(36),u=n(20),l=n(2),f=l.process,d=l.setImmediate,p=l.clearImmediate,g=l.MessageChannel,h=l.Dispatch,v=0,y={},m=function(){var t=+this;if(y.hasOwnProperty(t)){var e=y[t];delete y[t],e()}},w=function(t){m.call(t.data)};d&&p||(d=function(t){for(var e=[],n=1;arguments.length>n;)e.push(arguments[n++]);return y[++v]=function(){s(\"function\"==typeof t?t:Function(t),e)},o(v),v},p=function(t){delete y[t]},\"process\"==n(14)(f)?o=function(t){f.nextTick(a(m,t,1))}:h&&h.now?o=function(t){h.now(a(m,t,1))}:g?(i=(r=new g).port2,r.port1.onmessage=w,o=a(i.postMessage,i,1)):l.addEventListener&&\"function\"==typeof postMessage&&!l.importScripts?(o=function(t){l.postMessage(t+\"\",\"*\")},l.addEventListener(\"message\",w,!1)):o=\"onreadystatechange\"in u(\"script\")?function(t){c.appendChild(u(\"script\")).onreadystatechange=function(){c.removeChild(this),m.call(t)}}:function(t){setTimeout(a(m,t,1),0)}),t.exports={set:d,clear:p}},function(t,e){t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},function(t,e,n){var o=n(4),r=n(10),i=n(26);t.exports=function(t,e){if(o(t),r(e)&&e.constructor===t)return e;var n=i.f(t);return(0,n.resolve)(e),n.promise}},function(t,e,n){\"use strict\";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError(\"Cannot call a class as a function\")}},function(t,e,n){\"use strict\";e.__esModule=!0;var o,r=n(45),i=(o=r)&&o.__esModule?o:{default:o};e.default=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,\"value\"in o&&(o.writable=!0),(0,i.default)(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}()},function(t,e,n){t.exports={default:n(89),__esModule:!0}},function(t,e,n){\"use strict\";Object.defineProperty(e,\"__esModule\",{value:!0});var o,r=n(105),i=(o=r)&&o.__esModule?o:{default:o};e.default=i.default},function(t,e,n){\"use strict\";Object.defineProperty(e,\"__esModule\",{value:!0});var o,r=n(108),i=(o=r)&&o.__esModule?o:{default:o};e.default=i.default},function(t,e,n){\"use strict\";Object.defineProperty(e,\"__esModule\",{value:!0});var o,r=n(113),i=(o=r)&&o.__esModule?o:{default:o};e.default=i.default},function(t,e,n){t.exports=n(50)},function(t,e,n){\"use strict\";(function(t){var e=m(n(51)),o=m(n(54)),r=m(n(86)),i=m(n(91)),a=m(n(93)),s=m(n(95)),c=m(n(96)),u=m(n(97)),l=m(n(103)),f=m(n(47)),d=m(n(48)),p=(m(n(46)),m(n(114))),g=m(n(116)),h=m(n(118)),v=m(n(120)),y=m(n(130));function m(t){return t&&t.__esModule?t:{default:t}}n(132),(0,o.default)(e.default.mark((function n(){var o,m,w,b,x,k,_,S,E,O,M,P;return e.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((new r.default).isBrowserEnabled()){e.next=3;break}return e.abrupt(\"return\");case 3:if(o=(0,d.default)(\"AdsCore\",\"w2g_\"),s.default){e.next=6;break}throw\"error config\";case 6:if(t.ads={},t.ads.config=s.default,t.ads.currentDevice=(0,l.default)(),m=t.ads.currentDevice,w=(0,i.default)(),b=w.iframeStatus,x=w.document,k=w.window,t.ads.iframeStatus=b,t.ads.document=x,t.ads.window=k,b&&(0,a.default)(),!(0,f.default)()){e.next=18;break}return o(\"wtgAd is disabled\",\"\",\"info\"),e.abrupt(\"return\");case 18:if(!ads.document.getElementById(\"wtgSticky\")){e.next=24;break}return o(\"wtgSticky already exists\"),_=new Event(\"ads4gRefreshSPA\"),ads.window.dispatchEvent(_),e.abrupt(\"return\");case 24:for(S in c.default)E=c.default[S],O=E.tag,M=E.attributes,P=E.parent,O&&M&&P&&(t.ads.config&&t.ads.config[m].adInnerId&&M.class&&\"wtgStickyInner\"===M.class&&(M.id=t.ads.config[m].adInnerId),new u.default(O,M,P).append());(0,g.default)(\"closeButton\",\"wtgSticky\",\"wtgDisableStickyAd\"),(0,p.default)(\"closeButton\"),(0,h.default)(\"wtgStickyWrapper\"),(0,v.default)(),(0,y.default)();case 30:case\"end\":return e.stop()}}),n,void 0)})))(s.default)}).call(this,n(0))},function(t,e,n){t.exports=n(52)},function(t,e,n){var o=function(){return this}()||Function(\"return this\")(),r=o.regeneratorRuntime&&Object.getOwnPropertyNames(o).indexOf(\"regeneratorRuntime\")>=0,i=r&&o.regeneratorRuntime;if(o.regeneratorRuntime=void 0,t.exports=n(53),r)o.regeneratorRuntime=i;else try{delete o.regeneratorRuntime}catch(t){o.regeneratorRuntime=void 0}},function(t,e){!function(e){\"use strict\";var n=Object.prototype,o=n.hasOwnProperty,r=\"function\"==typeof Symbol?Symbol:{},i=r.iterator||\"@@iterator\",a=r.asyncIterator||\"@@asyncIterator\",s=r.toStringTag||\"@@toStringTag\",c=\"object\"==typeof t,u=e.regeneratorRuntime;if(u)c&&(t.exports=u);else{(u=e.regeneratorRuntime=c?t.exports:{}).wrap=h;var l={},f={};f[i]=function(){return this};var d=Object.getPrototypeOf,p=d&&d(d(O([])));p&&p!==n&&o.call(p,i)&&(f=p);var g=w.prototype=y.prototype=Object.create(f);m.prototype=g.constructor=w,w.constructor=m,w[s]=m.displayName=\"GeneratorFunction\",u.isGeneratorFunction=function(t){var e=\"function\"==typeof t&&t.constructor;return!!e&&(e===m||\"GeneratorFunction\"===(e.displayName||e.name))},u.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,s in t||(t[s]=\"GeneratorFunction\")),t.prototype=Object.create(g),t},u.awrap=function(t){return{__await:t}},b(x.prototype),x.prototype[a]=function(){return this},u.AsyncIterator=x,u.async=function(t,e,n,o){var r=new x(h(t,e,n,o));return u.isGeneratorFunction(e)?r:r.next().then((function(t){return t.done?t.value:r.next()}))},b(g),g[s]=\"Generator\",g[i]=function(){return this},g.toString=function(){return\"[object Generator]\"},u.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var o=e.pop();if(o in t)return n.value=o,n.done=!1,n}return n.done=!0,n}},u.values=O,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method=\"next\",this.arg=void 0,this.tryEntries.forEach(S),!t)for(var e in this)\"t\"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if(\"throw\"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return a.type=\"throw\",a.arg=t,e.next=n,o&&(e.method=\"next\",e.arg=void 0),!!o}for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r],a=i.completion;if(\"root\"===i.tryLoc)return n(\"end\");if(i.tryLoc<=this.prev){var s=o.call(i,\"catchLoc\"),c=o.call(i,\"finallyLoc\");if(s&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error(\"try statement without catch or finally\");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,\"finallyLoc\")&&this.prev<r.finallyLoc){var i=r;break}}i&&(\"break\"===t||\"continue\"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method=\"next\",this.next=i.finallyLoc,l):this.complete(a)},complete:function(t,e){if(\"throw\"===t.type)throw t.arg;return\"break\"===t.type||\"continue\"===t.type?this.next=t.arg:\"return\"===t.type?(this.rval=this.arg=t.arg,this.method=\"return\",this.next=\"end\"):\"normal\"===t.type&&e&&(this.next=e),l},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),S(n),l}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var o=n.completion;if(\"throw\"===o.type){var r=o.arg;S(n)}return r}}throw new Error(\"illegal catch attempt\")},delegateYield:function(t,e,n){return this.delegate={iterator:O(t),resultName:e,nextLoc:n},\"next\"===this.method&&(this.arg=void 0),l}}}function h(t,e,n,o){var r=e&&e.prototype instanceof y?e:y,i=Object.create(r.prototype),a=new E(o||[]);return i._invoke=function(t,e,n){var o=\"suspendedStart\";return function(r,i){if(\"executing\"===o)throw new Error(\"Generator is already running\");if(\"completed\"===o){if(\"throw\"===r)throw i;return M()}for(n.method=r,n.arg=i;;){var a=n.delegate;if(a){var s=k(a,n);if(s){if(s===l)continue;return s}}if(\"next\"===n.method)n.sent=n._sent=n.arg;else if(\"throw\"===n.method){if(\"suspendedStart\"===o)throw o=\"completed\",n.arg;n.dispatchException(n.arg)}else\"return\"===n.method&&n.abrupt(\"return\",n.arg);o=\"executing\";var c=v(t,e,n);if(\"normal\"===c.type){if(o=n.done?\"completed\":\"suspendedYield\",c.arg===l)continue;return{value:c.arg,done:n.done}}\"throw\"===c.type&&(o=\"completed\",n.method=\"throw\",n.arg=c.arg)}}}(t,n,a),i}function v(t,e,n){try{return{type:\"normal\",arg:t.call(e,n)}}catch(t){return{type:\"throw\",arg:t}}}function y(){}function m(){}function w(){}function b(t){[\"next\",\"throw\",\"return\"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function x(t){var e;this._invoke=function(n,r){function i(){return new Promise((function(e,i){!function e(n,r,i,a){var s=v(t[n],t,r);if(\"throw\"!==s.type){var c=s.arg,u=c.value;return u&&\"object\"==typeof u&&o.call(u,\"__await\")?Promise.resolve(u.__await).then((function(t){e(\"next\",t,i,a)}),(function(t){e(\"throw\",t,i,a)})):Promise.resolve(u).then((function(t){c.value=t,i(c)}),a)}a(s.arg)}(n,r,e,i)}))}return e=e?e.then(i,i):i()}}function k(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,\"throw\"===e.method){if(t.iterator.return&&(e.method=\"return\",e.arg=void 0,k(t,e),\"throw\"===e.method))return l;e.method=\"throw\",e.arg=new TypeError(\"The iterator does not provide a \'throw\' method\")}return l}var o=v(n,t.iterator,e.arg);if(\"throw\"===o.type)return e.method=\"throw\",e.arg=o.arg,e.delegate=null,l;var r=o.arg;return r?r.done?(e[t.resultName]=r.value,e.next=t.nextLoc,\"return\"!==e.method&&(e.method=\"next\",e.arg=void 0),e.delegate=null,l):r:(e.method=\"throw\",e.arg=new TypeError(\"iterator result is not an object\"),e.delegate=null,l)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type=\"normal\",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:\"root\"}],t.forEach(_,this),this.reset(!0)}function O(t){if(t){var e=t[i];if(e)return e.call(t);if(\"function\"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,r=function e(){for(;++n<t.length;)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return r.next=r}}return{next:M}}function M(){return{value:void 0,done:!0}}}(function(){return this}()||Function(\"return this\")())},function(t,e,n){\"use strict\";e.__esModule=!0;var o,r=n(55),i=(o=r)&&o.__esModule?o:{default:o};e.default=function(t){return function(){var e=t.apply(this,arguments);return new i.default((function(t,n){return function o(r,a){try{var s=e[r](a),c=s.value}catch(t){return void n(t)}if(!s.done)return i.default.resolve(c).then((function(t){o(\"next\",t)}),(function(t){o(\"throw\",t)}));t(c)}(\"next\")}))}}},function(t,e,n){t.exports={default:n(56),__esModule:!0}},function(t,e,n){n(57),n(15),n(24),n(73),n(84),n(85),t.exports=n(1).Promise},function(t,e){},function(t,e,n){var o=n(16),r=n(17);t.exports=function(t){return function(e,n){var i,a,s=String(r(e)),c=o(n),u=s.length;return c<0||c>=u?t?\"\":void 0:(i=s.charCodeAt(c))<55296||i>56319||c+1===u||(a=s.charCodeAt(c+1))<56320||a>57343?t?s.charAt(c):i:t?s.slice(c,c+2):a-56320+(i-55296<<10)+65536}}},function(t,e,n){t.exports=!n(7)&&!n(19)((function(){return 7!=Object.defineProperty(n(20)(\"div\"),\"a\",{get:function(){return 7}}).a}))},function(t,e,n){var o=n(10);t.exports=function(t,e){if(!o(t))return t;var n,r;if(e&&\"function\"==typeof(n=t.toString)&&!o(r=n.call(t)))return r;if(\"function\"==typeof(n=t.valueOf)&&!o(r=n.call(t)))return r;if(!e&&\"function\"==typeof(n=t.toString)&&!o(r=n.call(t)))return r;throw TypeError(\"Can\'t convert object to primitive value\")}},function(t,e,n){t.exports=n(6)},function(t,e,n){\"use strict\";var o=n(63),r=n(30),i=n(23),a={};n(6)(a,n(3)(\"iterator\"),(function(){return this})),t.exports=function(t,e,n){t.prototype=o(a,{next:r(1,n)}),i(t,e+\" Iterator\")}},function(t,e,n){var o=n(4),r=n(64),i=n(35),a=n(22)(\"IE_PROTO\"),s=function(){},c=function(){var t,e=n(20)(\"iframe\"),o=i.length;for(e.style.display=\"none\",n(36).appendChild(e),e.src=\"javascript:\",(t=e.contentWindow.document).open(),t.write(\"<script>document.F=Object<\\\/script>\"),t.close(),c=t.F;o--;)delete c.prototype[i[o]];return c()};t.exports=Object.create||function(t,e){var n;return null!==t?(s.prototype=o(t),n=new s,s.prototype=null,n[a]=t):n=c(),void 0===e?n:r(n,e)}},function(t,e,n){var o=n(9),r=n(4),i=n(31);t.exports=n(7)?Object.defineProperties:function(t,e){r(t);for(var n,a=i(e),s=a.length,c=0;s>c;)o.f(t,n=a[c++],e[n]);return t}},function(t,e,n){var o=n(13),r=n(21),i=n(67)(!1),a=n(22)(\"IE_PROTO\");t.exports=function(t,e){var n,s=r(t),c=0,u=[];for(n in s)n!=a&&o(s,n)&&u.push(n);for(;e.length>c;)o(s,n=e[c++])&&(~i(u,n)||u.push(n));return u}},function(t,e,n){var o=n(14);t.exports=Object(\"z\").propertyIsEnumerable(0)?Object:function(t){return\"String\"==o(t)?t.split(\"\"):Object(t)}},function(t,e,n){var o=n(21),r=n(32),i=n(68);t.exports=function(t){return function(e,n,a){var s,c=o(e),u=r(c.length),l=i(a,u);if(t&&n!=n){for(;u>l;)if((s=c[l++])!=s)return!0}else for(;u>l;l++)if((t||l in c)&&c[l]===n)return t||l||0;return!t&&-1}}},function(t,e,n){var o=n(16),r=Math.max,i=Math.min;t.exports=function(t,e){return(t=o(t))<0?r(t+e,0):i(t,e)}},function(t,e,n){var o=n(13),r=n(37),i=n(22)(\"IE_PROTO\"),a=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=r(t),o(t,i)?t[i]:\"function\"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?a:null}},function(t,e,n){\"use strict\";var o=n(71),r=n(72),i=n(8),a=n(21);t.exports=n(29)(Array,\"Array\",(function(t,e){this._t=a(t),this._i=0,this._k=e}),(function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,r(1)):r(0,\"keys\"==e?n:\"values\"==e?t[n]:[n,t[n]])}),\"values\"),i.Arguments=i.Array,o(\"keys\"),o(\"values\"),o(\"entries\")},function(t,e){t.exports=function(){}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,n){\"use strict\";var o,r,i,a,s=n(18),c=n(2),u=n(11),l=n(25),f=n(5),d=n(10),p=n(12),g=n(74),h=n(75),v=n(39),y=n(40).set,m=n(79)(),w=n(26),b=n(41),x=n(80),k=n(42),_=c.TypeError,S=c.process,E=S&&S.versions,O=E&&E.v8||\"\",M=c.Promise,P=\"process\"==l(S),T=function(){},A=r=w.f,j=!!function(){try{var t=M.resolve(1),e=(t.constructor={})[n(3)(\"species\")]=function(t){t(T,T)};return(P||\"function\"==typeof PromiseRejectionEvent)&&t.then(T)instanceof e&&0!==O.indexOf(\"6.6\")&&-1===x.indexOf(\"Chrome\/66\")}catch(t){}}(),I=function(t){var e;return!(!d(t)||\"function\"!=typeof(e=t.then))&&e},L=function(t,e){if(!t._n){t._n=!0;var n=t._c;m((function(){for(var o=t._v,r=1==t._s,i=0,a=function(e){var n,i,a,s=r?e.ok:e.fail,c=e.resolve,u=e.reject,l=e.domain;try{s?(r||(2==t._h&&R(t),t._h=1),!0===s?n=o:(l&&l.enter(),n=s(o),l&&(l.exit(),a=!0)),n===e.promise?u(_(\"Promise-chain cycle\")):(i=I(n))?i.call(n,c,u):c(n)):u(o)}catch(t){l&&!a&&l.exit(),u(t)}};n.length>i;)a(n[i++]);t._c=[],t._n=!1,e&&!t._h&&C(t)}))}},C=function(t){y.call(c,(function(){var e,n,o,r=t._v,i=B(t);if(i&&(e=b((function(){P?S.emit(\"unhandledRejection\",r,t):(n=c.onunhandledrejection)?n({promise:t,reason:r}):(o=c.console)&&o.error&&o.error(\"Unhandled promise rejection\",r)})),t._h=P||B(t)?2:1),t._a=void 0,i&&e.e)throw e.v}))},B=function(t){return 1!==t._h&&0===(t._a||t._c).length},R=function(t){y.call(c,(function(){var e;P?S.emit(\"rejectionHandled\",t):(e=c.onrejectionhandled)&&e({promise:t,reason:t._v})}))},W=function(t){var e=this;e._d||(e._d=!0,(e=e._w||e)._v=t,e._s=2,e._a||(e._a=e._c.slice()),L(e,!0))},D=function(t){var e,n=this;if(!n._d){n._d=!0,n=n._w||n;try{if(n===t)throw _(\"Promise can\'t be resolved itself\");(e=I(t))?m((function(){var o={_w:n,_d:!1};try{e.call(t,u(D,o,1),u(W,o,1))}catch(t){W.call(o,t)}})):(n._v=t,n._s=1,L(n,!1))}catch(t){W.call({_w:n,_d:!1},t)}}};j||(M=function(t){g(this,M,\"Promise\",\"_h\"),p(t),o.call(this);try{t(u(D,this,1),u(W,this,1))}catch(t){W.call(this,t)}},(o=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1}).prototype=n(81)(M.prototype,{then:function(t,e){var n=A(v(this,M));return n.ok=\"function\"!=typeof t||t,n.fail=\"function\"==typeof e&&e,n.domain=P?S.domain:void 0,this._c.push(n),this._a&&this._a.push(n),this._s&&L(this,!1),n.promise},catch:function(t){return this.then(void 0,t)}}),i=function(){var t=new o;this.promise=t,this.resolve=u(D,t,1),this.reject=u(W,t,1)},w.f=A=function(t){return t===M||t===a?new i(t):r(t)}),f(f.G+f.W+f.F*!j,{Promise:M}),n(23)(M,\"Promise\"),n(82)(\"Promise\"),a=n(1).Promise,f(f.S+f.F*!j,\"Promise\",{reject:function(t){var e=A(this);return(0,e.reject)(t),e.promise}}),f(f.S+f.F*(s||!j),\"Promise\",{resolve:function(t){return k(s&&this===a?M:this,t)}}),f(f.S+f.F*!(j&&n(83)((function(t){M.all(t).catch(T)}))),\"Promise\",{all:function(t){var e=this,n=A(e),o=n.resolve,r=n.reject,i=b((function(){var n=[],i=0,a=1;h(t,!1,(function(t){var s=i++,c=!1;n.push(void 0),a++,e.resolve(t).then((function(t){c||(c=!0,n[s]=t,--a||o(n))}),r)})),--a||o(n)}));return i.e&&r(i.v),n.promise},race:function(t){var e=this,n=A(e),o=n.reject,r=b((function(){h(t,!1,(function(t){e.resolve(t).then(n.resolve,o)}))}));return r.e&&o(r.v),n.promise}})},function(t,e){t.exports=function(t,e,n,o){if(!(t instanceof e)||void 0!==o&&o in t)throw TypeError(n+\": incorrect invocation!\");return t}},function(t,e,n){var o=n(11),r=n(76),i=n(77),a=n(4),s=n(32),c=n(38),u={},l={};(e=t.exports=function(t,e,n,f,d){var p,g,h,v,y=d?function(){return t}:c(t),m=o(n,f,e?2:1),w=0;if(\"function\"!=typeof y)throw TypeError(t+\" is not iterable!\");if(i(y)){for(p=s(t.length);p>w;w++)if((v=e?m(a(g=t[w])[0],g[1]):m(t[w]))===u||v===l)return v}else for(h=y.call(t);!(g=h.next()).done;)if((v=r(h,m,g.value,e))===u||v===l)return v}).BREAK=u,e.RETURN=l},function(t,e,n){var o=n(4);t.exports=function(t,e,n,r){try{return r?e(o(n)[0],n[1]):e(n)}catch(e){var i=t.return;throw void 0!==i&&o(i.call(t)),e}}},function(t,e,n){var o=n(8),r=n(3)(\"iterator\"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||i[r]===t)}},function(t,e){t.exports=function(t,e,n){var o=void 0===n;switch(e.length){case 0:return o?t():t.call(n);case 1:return o?t(e[0]):t.call(n,e[0]);case 2:return o?t(e[0],e[1]):t.call(n,e[0],e[1]);case 3:return o?t(e[0],e[1],e[2]):t.call(n,e[0],e[1],e[2]);case 4:return o?t(e[0],e[1],e[2],e[3]):t.call(n,e[0],e[1],e[2],e[3])}return t.apply(n,e)}},function(t,e,n){var o=n(2),r=n(40).set,i=o.MutationObserver||o.WebKitMutationObserver,a=o.process,s=o.Promise,c=\"process\"==n(14)(a);t.exports=function(){var t,e,n,u=function(){var o,r;for(c&&(o=a.domain)&&o.exit();t;){r=t.fn,t=t.next;try{r()}catch(o){throw t?n():e=void 0,o}}e=void 0,o&&o.enter()};if(c)n=function(){a.nextTick(u)};else if(!i||o.navigator&&o.navigator.standalone)if(s&&s.resolve){var l=s.resolve(void 0);n=function(){l.then(u)}}else n=function(){r.call(o,u)};else{var f=!0,d=document.createTextNode(\"\");new i(u).observe(d,{characterData:!0}),n=function(){d.data=f=!f}}return function(o){var r={fn:o,next:void 0};e&&(e.next=r),t||(t=r,n()),e=r}}},function(t,e,n){var o=n(2).navigator;t.exports=o&&o.userAgent||\"\"},function(t,e,n){var o=n(6);t.exports=function(t,e,n){for(var r in e)n&&t[r]?t[r]=e[r]:o(t,r,e[r]);return t}},function(t,e,n){\"use strict\";var o=n(2),r=n(1),i=n(9),a=n(7),s=n(3)(\"species\");t.exports=function(t){var e=\"function\"==typeof r[t]?r[t]:o[t];a&&e&&!e[s]&&i.f(e,s,{configurable:!0,get:function(){return this}})}},function(t,e,n){var o=n(3)(\"iterator\"),r=!1;try{var i=[7][o]();i.return=function(){r=!0},Array.from(i,(function(){throw 2}))}catch(t){}t.exports=function(t,e){if(!e&&!r)return!1;var n=!1;try{var i=[7],a=i[o]();a.next=function(){return{done:n=!0}},i[o]=function(){return a},t(i)}catch(t){}return n}},function(t,e,n){\"use strict\";var o=n(5),r=n(1),i=n(2),a=n(39),s=n(42);o(o.P+o.R,\"Promise\",{finally:function(t){var e=a(this,r.Promise||i.Promise),n=\"function\"==typeof t;return this.then(n?function(n){return s(e,t()).then((function(){return n}))}:t,n?function(n){return s(e,t()).then((function(){throw n}))}:t)}})},function(t,e,n){\"use strict\";var o=n(5),r=n(26),i=n(41);o(o.S,\"Promise\",{try:function(t){var e=r.f(this),n=i(t);return(n.e?e.reject:e.resolve)(n.v),e.promise}})},function(t,e,n){\"use strict\";Object.defineProperty(e,\"__esModule\",{value:!0});var o,r=n(87),i=(o=r)&&o.__esModule?o:{default:o};e.default=i.default},function(t,e,n){\"use strict\";(function(t){Object.defineProperty(e,\"__esModule\",{value:!0});var o=i(n(43)),r=i(n(44));function i(t){return t&&t.__esModule?t:{default:t}}var a=function(){function e(){(0,o.default)(this,e),this.self=this,this.details={browser:!1,node:!1,jsdom:!1},this.run()}return(0,r.default)(e,[{key:\"run\",value:function(){var t=this.checkEnv(),e=t.browser,n=t.node,o=t.jsdom;return this.details={browser:e,node:n,jsdom:o}}},{key:\"checkEnv\",value:function(){return{browser:this.isBrowser(),node:this.isNode(),jsdom:this.isJsDOM()}}},{key:\"isBrowser\",value:function(){return\"undefined\"!=typeof window&&void 0!==window.document}},{key:\"isNode\",value:function(){return void 0!==t&&null!=t.versions&&null!=t.versions.node}},{key:\"isJsDOM\",value:function(){return\"undefined\"!=typeof window&&\"nodejs\"===window.name||\"undefined\"!=typeof navigator&&(navigator.userAgent.includes(\"Node.js\")||navigator.userAgent.includes(\"jsdom\"))}},{key:\"isBrowserEnabled\",value:function(){var t=this.details,e=t.browser,n=t.node,o=t.jsdom;return e&&!n&&!o}},{key:\"showDecisions\",value:function(){return console.dir(this.details)}}]),e}();e.default=a}).call(this,n(88))},function(t,e){var n,o,r=t.exports={};function i(){throw new Error(\"setTimeout has not been defined\")}function a(){throw new Error(\"clearTimeout has not been defined\")}function s(t){if(n===setTimeout)return setTimeout(t,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n=\"function\"==typeof setTimeout?setTimeout:i}catch(t){n=i}try{o=\"function\"==typeof clearTimeout?clearTimeout:a}catch(t){o=a}}();var c,u=[],l=!1,f=-1;function d(){l&&c&&(l=!1,c.length?u=c.concat(u):f=-1,u.length&&p())}function p(){if(!l){var t=s(d);l=!0;for(var e=u.length;e;){for(c=u,u=[];++f<e;)c&&c[f].run();f=-1,e=u.length}c=null,l=!1,function(t){if(o===clearTimeout)return clearTimeout(t);if((o===a||!o)&&clearTimeout)return o=clearTimeout,clearTimeout(t);try{o(t)}catch(e){try{return o.call(null,t)}catch(e){return o.call(this,t)}}}(t)}}function g(t,e){this.fun=t,this.array=e}function h(){}r.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];u.push(new g(t,e)),1!==u.length||l||s(p)},g.prototype.run=function(){this.fun.apply(null,this.array)},r.title=\"browser\",r.browser=!0,r.env={},r.argv=[],r.version=\"\",r.versions={},r.on=h,r.addListener=h,r.once=h,r.off=h,r.removeListener=h,r.removeAllListeners=h,r.emit=h,r.prependListener=h,r.prependOnceListener=h,r.listeners=function(t){return[]},r.binding=function(t){throw new Error(\"process.binding is not supported\")},r.cwd=function(){return\"\/\"},r.chdir=function(t){throw new Error(\"process.chdir is not supported\")},r.umask=function(){return 0}},function(t,e,n){n(90);var o=n(1).Object;t.exports=function(t,e,n){return o.defineProperty(t,e,n)}},function(t,e,n){var o=n(5);o(o.S+o.F*!n(7),\"Object\",{defineProperty:n(9).f})},function(t,e,n){\"use strict\";Object.defineProperty(e,\"__esModule\",{value:!0});var o,r=n(92),i=(o=r)&&o.__esModule?o:{default:o};e.default=i.default},function(t,e,n){\"use strict\";(function(t){Object.defineProperty(e,\"__esModule\",{value:!0}),e.default=function(){if(!t.ads||!t.ads.config)throw\"global.ads does not exist\";return t.ads.config.leaveIframe&&window.self!==window.top?{iframeStatus:!0,document:top.document,window:window.top}:{iframeStatus:!1,document:document,window:window}}}).call(this,n(0))},function(t,e,n){\"use strict\";Object.defineProperty(e,\"__esModule\",{value:!0});var o,r=n(94),i=(o=r)&&o.__esModule?o:{default:o};e.default=i.default},function(t,e,n){\"use strict\";(function(t){Object.defineProperty(e,\"__esModule\",{value:!0}),e.default=function(){var e=document.getElementsByTagName(\"style\");if(!e)throw\"style tag does not exist in DOM\";if(!t.ads)throw\"global.ads does not exist\";var n=t.ads,o=n.document.createElement(\"style\");o.innerHTML=e[0].innerHTML,o.type=\"text\/css\",n.document.head.append(o)}}).call(this,n(0))},function(t,e,n){\"use strict\";t.exports={leaveIframe:!0,devices:[\"phone\",\"desktop\"],phone:{collapse:\"bottom\",closeButton:\"close-arrow-down\",closePosition:\"right\",closeBackground:\"rgb(255, 255, 255)\",alignmentAd:\"center\",background:\"rgb(255, 255, 255)\",adText:{text:\"Oglas\",color:!1},moveElements:[{selector:\"selektor\",position:\"relative\",direction:\"top\",movePx:10,animate:!1}],adBlank:{dispatchCustomEventName:\"wtgStickyScrollEvent\",dispatchCustomEventTimeout:1401,refresh:!0,refreshTime:30},adInnerId:\"wtgStickyScrollDivInner\",adUnitName:\"\/21831979902\/Republika.rs\/footer_sticky\",zIndexWrapper:999999,adSingleType:\"standard\",startingPosition:\"bottom\"},tablet:{},desktop:{collapse:\"bottom\",closeButton:\"close-x-bottom\",closePosition:\"right\",closeBackground:\"rgb(255, 255, 255)\",alignmentAd:\"center\",background:\"rgb(255, 255, 255)\",adText:{text:\"Oglas\",color:!1},adBlank:{dispatchCustomEventName:\"wtgStickyScrollEvent\",dispatchCustomEventTimeout:1401,refresh:!0,refreshTime:30},adInnerId:\"wtgStickyScrollDivInner\",adUnitName:\"\/21831979902\/Republika.rs\/footer_sticky\",zIndexWrapper:999999,fitToAd:!0,adSingleType:\"standard\",startingPosition:\"bottom\"}}},function(t,e,n){\"use strict\";t.exports=[{tag:\"div\",attributes:{id:\"wtgSticky\",class:\"slideFromBottom animated\"},parent:\"body\"},{tag:\"div\",attributes:{id:\"wtgStickyWrapper\"},parent:\"#wtgSticky\"},{tag:\"div\",attributes:{class:\"wtgStickyInner\"},parent:\"#wtgStickyWrapper\"},{tag:\"div\",attributes:{id:\"wtgAdText\"},parent:\".wtgStickyInner\"},{tag:\"div\",attributes:{id:\"closeButton\"},parent:\".wtgStickyInner\"}]},function(t,e,n){\"use strict\";Object.defineProperty(e,\"__esModule\",{value:!0});var o,r=n(98),i=(o=r)&&o.__esModule?o:{default:o};e.default=i.default},function(t,e,n){\"use strict\";(function(t){Object.defineProperty(e,\"__esModule\",{value:!0});var o=a(n(99)),r=a(n(43)),i=a(n(44));function a(t){return t&&t.__esModule?t:{default:t}}var s=function(){function e(t,n,o){if((0,r.default)(this,e),!t||!n||!o)throw\"tag, attributes or parent is empty!\";this.tag=t,this.attributes=n,this.parent=o}return(0,i.default)(e,[{key:\"create\",value:function(){if(!t.ads)throw\"global.ads does not exist\";var e=t.ads.document.createElement(this.tag),n=(0,o.default)(this.attributes);for(var r in n)\"string\"==typeof n[r]&&e.setAttribute(n[r],this.attributes[n[r]]);return e}},{key:\"append\",value:function(){var e=this.create();if(\"body\"===this.parent)t.ads.document.body.append(e);else{var n=t.ads.document.querySelector(this.parent);if(!n)throw\"parentElement \"+this.parent+\" does not exist in DOM!\";n&&n.append(e)}}}]),e}();e.default=s}).call(this,n(0))},function(t,e,n){t.exports={default:n(100),__esModule:!0}},function(t,e,n){n(101),t.exports=n(1).Object.keys},function(t,e,n){var o=n(37),r=n(31);n(102)(\"keys\",(function(){return function(t){return r(o(t))}}))},function(t,e,n){var o=n(5),r=n(1),i=n(19);t.exports=function(t,e){var n=(r.Object||{})[t]||Object[t],a={};a[t]=e(n),o(o.S+o.F*i((function(){n(1)})),\"Object\",a)}},function(t,e,n){\"use strict\";Object.defineProperty(e,\"__esModule\",{value:!0});var o,r=n(104),i=(o=r)&&o.__esModule?o:{default:o};e.default=i.default},function(t,e,n){\"use strict\";(function(t){Object.defineProperty(e,\"__esModule\",{value:!0});var o=i(n(46)),r=i(n(106));function i(t){return t&&t.__esModule?t:{default:t}}e.default=function(){if(!t.ads||!t.ads.config)throw\"global.ads does not exist\";var e=t.ads;if(e.config.devices){e.config.devices;return e.config.deviceWidth?(0,r.default)().device:(0,o.default)().device}throw\"No devices defined\"}}).call(this,n(0))},function(t,e,n){\"use strict\";(function(t){Object.defineProperty(e,\"__esModule\",{value:!0}),e.default=function(e){if(!t.ads||!t.ads.config)throw\"global.ads does not exist\";if(!t.ads.config.devices)throw\"devices in config is not set, but used in script\";var n=\/iPhone\/i,o=\/iPod\/i,r=\/iPad\/i,i=\/\\bAndroid(?:.+)Mobile\\b\/i,a=\/Android\/i,s=\/(?:SD4930UR|\\bSilk(?:.+)Mobile\\b)\/i,c=\/Silk\/i,u=\/Windows Phone\/i,l=\/\\bWindows(?:.+)ARM\\b\/i,f=\/BlackBerry\/i,d=\/BB10\/i,p=\/Opera Mini\/i,g=\/\\b(CriOS|Chrome)(?:.+)Mobile\/i,h=\/Mobile(?:.+)Firefox\\b\/i,v=(e=e||(\"undefined\"!=typeof navigator?navigator.userAgent:\"\")).split(\"[FBAN\");void 0!==v[1]&&(e=v[0]),void 0!==(v=e.split(\"Twitter\"))[1]&&(e=v[0]);var y=function(t){return function(e){return e.test(t)}}(e),m={apple:{phone:y(n)&&!y(u),ipod:y(o),tablet:!y(n)&&y(r)&&!y(u),device:(y(n)||y(o)||y(r))&&!y(u)},amazon:{phone:y(s),tablet:!y(s)&&y(c),device:y(s)||y(c)},android:{phone:!y(u)&&y(s)||!y(u)&&y(i),tablet:!y(u)&&!y(s)&&!y(i)&&(y(c)||y(a)),device:!y(u)&&(y(s)||y(c)||y(i)||y(a))||y(\/\\bokhttp\\b\/i)},windows:{phone:y(u),tablet:y(l),device:y(u)||y(l)},other:{blackberry:y(f),blackberry10:y(d),opera:y(p),firefox:y(h),chrome:y(g),device:y(f)||y(d)||y(p)||y(h)||y(g)},any:!1,phone:!1,tablet:!1};return m.any=m.apple.device||m.android.device||m.windows.device||m.other.device,m.phone=m.apple.phone||m.android.phone||m.windows.phone,m.tablet=m.apple.tablet||m.android.tablet||m.windows.tablet,m.device=m.phone?\"phone\":m.tablet?\"tablet\":\"desktop\",m}}).call(this,n(0))},function(t,e,n){\"use strict\";Object.defineProperty(e,\"__esModule\",{value:!0});var o,r=n(107),i=(o=r)&&o.__esModule?o:{default:o};e.default=i.default},function(t,e,n){\"use strict\";(function(t){Object.defineProperty(e,\"__esModule\",{value:!0}),e.default=function(){if(!t.ads||!t.ads.config)throw\"global.ads does not exist\";var e=t.ads;if(!e.config.deviceWidth)throw\"deviceWidth in config is not set, but used in script\";var n=e.config.deviceWidth.phoneMax?e.config.deviceWidth.phoneMax:360,o=e.config.deviceWidth.tabletMax?e.config.deviceWidth.tabletMax:800;if(!n||!o)throw\"phone, tablet max width is empty!\";var r=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;return{phone:r<=n,tablet:r>n&&r<=o,desktop:r>o,device:r<=n?\"phone\":r>n&&r<=o?\"tablet\":\"desktop\"}}}).call(this,n(0))},function(t,e,n){\"use strict\";(function(t){Object.defineProperty(e,\"__esModule\",{value:!0});var o=i(n(27)),r=i(n(28));function i(t){return t&&t.__esModule?t:{default:t}}e.default=function(){if(!t.ads||!t.ads.config)throw\"global.ads does not exist\";if(!t.ads.currentDevice)throw\"device not recognized\";var e=t.ads,n=t.ads.currentDevice;if(e.config[n].domains){for(var i=e.config[n].domains,a=window.location.href,s=!1,c=0;c<i.length;c++)a.indexOf(i[c])>-1&&(s=!0);if(!s)return!0}var u=!1;if(e.config.devices&&(u=-1==e.config.devices.indexOf(n)))return u;if(!e.config[n].disableAdAfterCloseCookie&&!e.config[n].disableAdAfterDisplayCookie&&!e.config[n].disableAdAfterCloseStorage)return!1;var l=e.config[n].disableAdAfterCloseCookie&&e.config[n].disableAdAfterCloseCookie.cookieName?e.config[n].disableAdAfterCloseCookie.cookieName:\"wtgDisableAd\",f=e.config[n].disableAdAfterDisplayCookie&&e.config[n].disableAdAfterDisplayCookie.cookieName?e.config[n].disableAdAfterDisplayCookie.cookieName:\"wtgDisableAd\",d=!!(0,o.default)().get(l)&&parseInt((0,o.default)().get(l)),p=!!(0,o.default)().get(f)&&parseInt((0,o.default)().get(f)),g=!!(0,r.default)().get(\"wtgDisableAd\")&&parseInt((0,r.default)().get(\"wtgDisableAd\"));return!!(d||p||g)}}).call(this,n(0))},function(t,e,n){\"use strict\";(function(t){Object.defineProperty(e,\"__esModule\",{value:!0}),e.default=function(){if(!t.ads||!t.ads.config)throw\"global.ads does not exist\";t.ads;return{set:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:\"\",o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:\"\/\";if(!t||!e)throw\"key or value is empty!\";if(\"undefined\"!=typeof document){var r=\"\",i=\"\";if(parseInt(n)>0){var a=parseInt(n),s=new Date;s.setTime(s.getTime()+60*a*1e3),r=\"; expires=\"+s.toGMTString()}return o.length<=0&&(o=\"\/\"),i=\"; path=\"+o,document.cookie=t+\"=\"+e+r+i}},get:function(t){if(!t)throw\"key is empty!\";if(\"undefined\"!=typeof document){for(var e=t+\"=\",n=decodeURIComponent(document.cookie).split(\";\"),o=0;o<n.length;o++){for(var r=n[o];\" \"==r.charAt(0);)r=r.substring(1);if(0==r.indexOf(e))return r.substring(e.length,r.length)}return\"\"}},incrementValue:function(t){if(!t)throw\"key or value is empty!\";var e=parseInt(this.get(t));return e?this.set(t,++e):this.set(t,1),this}}}}).call(this,n(0))},function(t,e,n){\"use strict\";(function(t){Object.defineProperty(e,\"__esModule\",{value:!0});var o,r=n(111),i=(o=r)&&o.__esModule?o:{default:o};e.default=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(!t.ads||!t.ads.config)throw\"global.ads does not exist\";t.ads;var n=e?sessionStorage:localStorage;if(null==n)return!1;var o={getStorageType:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n;return t},get:function(t){return JSON.parse(this.getStorageType()[t]||!1)},set:function(t,e){return this.getStorageType()[t]=(0,i.default)(e||{})},remove:function(t){return this.getStorageType().removeItem(t)},incrementValue:function(t){if(!t)throw\"name or value is empty!\";var e=parseInt(this.get(t));return e?this.set(t,++e):this.set(t,1),this}};return o}}).call(this,n(0))},function(t,e,n){t.exports={default:n(112),__esModule:!0}},function(t,e,n){var o=n(1),r=o.JSON||(o.JSON={stringify:JSON.stringify});t.exports=function(t){return r.stringify.apply(r,arguments)}},function(t,e,n){\"use strict\";Object.defineProperty(e,\"__esModule\",{value:!0}),e.default=function(t,e){var n=!1,o=window,r=o.location.href;return function(i){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:\"\",s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:\"log\";if(window.self!==window.top)try{o=window.top,r=o.location.href}catch(t){}if(r.indexOf(\"#\")>0){var c=r.split(\"#\");(c[1].indexOf(e)>=0||c[1].indexOf(\"w2g_debug_all\")>=0)&&(n=!0),c[1].indexOf(\"w2g_products\")>=0&&console.log(\"%c %s %c\",\"background:#EE7D0B;color:#FFFFFF;font-weight:bold;padding:1px 2px;\",\"WTG product: \"+t,\"color:#555;padding:2px\")}if(n&&console)switch(s){case\"time\":case\"timeEnd\":console[s](i);break;default:console[s](\"%c %s %c %s \",\"background:#3b88c3;color:#FFFFFF;font-weight:bold;padding:1px 2px;\",t,\"color:#555;padding:2px\",i,a)}}}},function(t,e,n){\"use strict\";Object.defineProperty(e,\"__esModule\",{value:!0});var o,r=n(115),i=(o=r)&&o.__esModule?o:{default:o};e.default=i.default},function(t,e,n){\"use strict\";(function(t){Object.defineProperty(e,\"__esModule\",{value:!0}),e.default=function(e){if(!t.ads||!t.ads.config)throw\"global.ads does not exist\";if(!t.ads.currentDevice)throw\"device not recognized\";var n=t.ads,o=t.ads.currentDevice;if(n.config[o].closeButton){if(!t.ads.document.getElementById(e))throw\"closeElementId does not exist\";var r=[];r.push(n.config[o].closePosition?n.config[o].closePosition:\"right\"),r.push(n.config[o].closeButton?n.config[o].closeButton:\"close-arrow-down\");var i=t.ads.document.getElementById(e);r.forEach((function(t,e){i.classList.add(r[e])}));var a=n.config[o].closeButtonCustomColors;if(n.config[o].closeButtonText){var s=n.config[o].closeButtonText;i.innerHTML=s,a&&a.text&&-1!==a.text.indexOf(\"#\")&&(i.style.color=a.text||\"#000000\")}if(n.config[o].closeBackground){var c=n.config[o].closeBackground;i.style.background=c}if(a&&a.icon){if(!(-1!==a.icon.indexOf(\"#\")))return;var u=window.getComputedStyle(i,\":after\");if(!u)return;var l=u.getPropertyValue(\"background-image\");if(!l)return;l=l.replace(\"fill=\'%23000000\'\",\"fill=\'%23\"+(a.icon.substring(1)||\"000000\")+\"\'\"),t.ads.document.head.appendChild(document.createElement(\"style\")).innerHTML=\"#wtgSticky #closeButton::after {background-image: \"+l+\" !important;}\"}}}}).call(this,n(0))},function(t,e,n){\"use strict\";Object.defineProperty(e,\"__esModule\",{value:!0});var o,r=n(117),i=(o=r)&&o.__esModule?o:{default:o};e.default=i.default},function(t,e,n){\"use strict\";(function(t){Object.defineProperty(e,\"__esModule\",{value:!0});var o=i(n(27)),r=i(n(28));function i(t){return t&&t.__esModule?t:{default:t}}e.default=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:\"wtgSticky\";if(!t.ads||!t.ads.config)throw\"global.ads does not exist\";if(!t.ads.currentDevice)throw\"device not recognized\";var i=t.ads,a=t.ads.currentDevice;if(i.config[a].collapse){if(!e||!n)throw\"iconCloseName or elementRemoveName is empty!\";var s=i.document.getElementById(e);if(!s)throw\"closeButton does not exist in DOM!\";var c=i.config[a].collapse?i.config[a].collapse:\"bottom\",u=i.document.getElementById(n);if(!n)throw\"elementToRemove does not exist in DOM!\";var l=function(t){var e=t.cappingValue?i.config[a].capping:i.config[a].disableAdAfterCloseCookie,n=e.cookieName?e.cookieName:\"wtgDisableAd\",r=e.expireInMinutes?e.expireInMinutes:\"\",s=e.cookiePath?e.cookiePath:\"\/\";(0,o.default)().set(n,1,r,s)};s.addEventListener(\"click\",(function(t){t.stopPropagation();var e=i.document.getElementById(\"wtgStickyWrapper\"),n=e.style.top?parseInt(e.style.top,10):0,f=e.style.bottom?parseInt(e.style.bottom,10):0,d=(e.style.left&&parseInt(e.style.left,10),e.style.right&&parseInt(e.style.right,10),void 0);switch(c){case\"bottom\":case\"top\":d=1.1*-(u.offsetHeight+s.offsetHeight-n+f);break;case\"left\":case\"right\":d=2*-u.offsetWidth-10}if(d){u.style[c]=d+\"px\";var p=new Event(\"wtgStickyCollapseBegin\");i.window.dispatchEvent(p)}if(i.config[a].disableAdAfterCloseCookie&&l(i.config[a].disableAdAfterCloseCookie),i.config[a].disableAdAfterCloseStorage){(0,r.default)().set(\"wtgDisableAd\",1)}if(i.config[a].cappingOnClose){var g=\"wtgCloseCappingCounter\";if(!1===(0,r.default)(!0).get(g)?(0,r.default)(!0).set(g,1):(0,r.default)(!0).incrementValue(g),(0,r.default)(!0).get(g)>=i.config[a].cappingOnClose.cappingValue){var h=i.config[a].cappingOnClose,v=h.cookieName,y=void 0===v?\"wtgDisableAd\":v,m=h.expireInMinutes,w=void 0===m?\"\":m,b=h.cookiePath,x=void 0===b?\"\/\":b;(0,o.default)().set(y,1,w,x),(0,r.default)(!0).remove(g)}}}))}}}).call(this,n(0))},function(t,e,n){\"use strict\";Object.defineProperty(e,\"__esModule\",{value:!0});var o,r=n(119),i=(o=r)&&o.__esModule?o:{default:o};e.default=i.default},function(t,e,n){\"use strict\";(function(t){Object.defineProperty(e,\"__esModule\",{value:!0}),e.default=function(e){if(!t.ads||!t.ads.config)throw\"global.ads does not exist\";if(!t.ads.currentDevice)throw\"device not recognized\";var n=t.ads,o=t.ads.currentDevice,r=n.document.getElementById(\"wtgSticky\");if(!r)throw\"wtgMainWrapper does not exist in DOM!\";if(n.config[o].startingPosition&&\"top\"===n.config[o].startingPosition&&r.classList.replace(\"slideFromBottom\",\"slideFromTop\"),r){if(n.config[o].zIndexWrapper){var i=parseInt(n.config[o].zIndexWrapper);r.style.zIndex=i}n.config[o].disableAnimation&&(r.style.transition=\"none\")}if(!t.ads.document.getElementById(e))throw\"wrapperId does not exist\";var a=t.ads.document.getElementById(e);if(n.config[o].background&&(a.style.backgroundColor=n.config[o].background),n.config[o].adText&&n.config[o].adText.text){var s=t.ads.document.getElementById(\"wtgAdText\");n.config[o].adText.text;s.innerHTML=n.config[o].adText.text;var c=n.config[o].adText.color;c&&-1!==c.indexOf(\"#\")&&(s.style.color=c||\"#888888\")}if(n.config[o].moveAd&&n.config[o].moveAd.direction&&n.config[o].moveAd.moveInPx){var u=n.config[o].moveAd.direction,l=n.config[o].moveAd.moveInPx;r.style[u]=l+\"px\"}}}).call(this,n(0))},function(t,e,n){\"use strict\";Object.defineProperty(e,\"__esModule\",{value:!0});var o,r=n(121),i=(o=r)&&o.__esModule?o:{default:o};e.default=i.default},function(t,e,n){\"use strict\";(function(t){Object.defineProperty(e,\"__esModule\",{value:!0});var o=i(n(122)),r=i(n(123));function i(t){return t&&t.__esModule?t:{default:t}}e.default=function(){if(!t.ads||!t.ads.config)throw\"global.ads does not exist\";if(!t.ads.currentDevice)throw\"device not recognized\";var e=t.ads,n=t.ads.currentDevice;if(e.config[n].moveElements){var i=function(){var t=[],i=[],a=[],s=[];e.config[n].moveElements.forEach((function(n,c){var u=n.selector,l=n.position,f=n.direction,d=n.movePx,p=n.animate,g=void 0!==p&&p,h={};if(n.delta){var v=n.delta.split(\":\"),y=(0,r.default)(v,2);h.name=y[0],h.valueTemplate=y[1]}u&&l&&f&&d&&(t.push(u),s.push((0,o.default)({direction:f,position:l,transition:g?\"all 500ms linear 0s\":\"\"},f,d)),a[c]=function(){var t=e.document.querySelector(u);if(t){var n=t.style,o={direction:f,deltaProperty:h};[\"position\",\"transition\",f,h.name].forEach((function(t){t&&(o[t]={value:n.getPropertyValue(t),priority:n.getPropertyPriority(t)})})),i[c]=o}})})),e.window.addEventListener(\"wtgStickyShowBegin\",(function(){t.forEach((function(t,e){var n=document.querySelector(t);if(n){var o=s[e],r=o.transition,c=o.position,u=o.direction,l=o[u];!i[e]&&a[e]&&a[e](),r&&(n.style.transition=r,n.style[u]=0),window.setTimeout((function(){n.style.position=c,n.style[u]=l+\"px\"}),10)}}))})),e.window.addEventListener(\"wtgStickyDeltaChange\",(function(e){var n=e.detail;t.forEach((function(t,e){var o=document.querySelector(t);if(o&&i[e]){var r=i[e].deltaProperty;r.name&&o.style.setProperty(r.name,n?r.valueTemplate.replace(\"$N\",n+\"px\"):\"\",i[e][r.name].priority)}}))})),e.window.addEventListener(\"wtgStickyCollapseBegin\",(function(){t.forEach((function(t,e){var n=document.querySelector(t),o=i[e];if(n&&o){var r=o.direction,a=o.deltaProperty.name;a&&n.style.setProperty(a,o[a].value,o[a].priority),n.style.setProperty(\"position\",o.position.value,o.position.priority),n.style.setProperty(r,o[r].value||0,o[r].priority),setTimeout((function(){n.style.setProperty(\"transition\",o.transition.value,o.transition.priority),n.style.setProperty(r,o[r].value,o[r].priority)}),500)}}))}))};\"loading\"!=document.readyState?i():document.addEventListener?document.addEventListener(\"DOMContentLoaded\",i):document.attachEvent(\"onreadystatechange\",(function(){\"complete\"==document.readyState&&i()}))}}}).call(this,n(0))},function(t,e,n){\"use strict\";e.__esModule=!0;var o,r=n(45),i=(o=r)&&o.__esModule?o:{default:o};e.default=function(t,e,n){return e in t?(0,i.default)(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},function(t,e,n){\"use strict\";e.__esModule=!0;var o=i(n(124)),r=i(n(127));function i(t){return t&&t.__esModule?t:{default:t}}e.default=function(t,e){if(Array.isArray(t))return t;if((0,o.default)(Object(t)))return function(t,e){var n=[],o=!0,i=!1,a=void 0;try{for(var s,c=(0,r.default)(t);!(o=(s=c.next()).done)&&(n.push(s.value),!e||n.length!==e);o=!0);}catch(t){i=!0,a=t}finally{try{!o&&c.return&&c.return()}finally{if(i)throw a}}return n}(t,e);throw new TypeError(\"Invalid attempt to destructure non-iterable instance\")}},function(t,e,n){t.exports={default:n(125),__esModule:!0}},function(t,e,n){n(24),n(15),t.exports=n(126)},function(t,e,n){var o=n(25),r=n(3)(\"iterator\"),i=n(8);t.exports=n(1).isIterable=function(t){var e=Object(t);return void 0!==e[r]||\"@@iterator\"in e||i.hasOwnProperty(o(e))}},function(t,e,n){t.exports={default:n(128),__esModule:!0}},function(t,e,n){n(24),n(15),t.exports=n(129)},function(t,e,n){var o=n(4),r=n(38);t.exports=n(1).getIterator=function(t){var e=r(t);if(\"function\"!=typeof e)throw TypeError(t+\" is not iterable!\");return o(e.call(t))}},function(t,e,n){\"use strict\";Object.defineProperty(e,\"__esModule\",{value:!0});var o,r=n(131),i=(o=r)&&o.__esModule?o:{default:o};e.default=i.default},function(t,e,n){\"use strict\";(function(t){Object.defineProperty(e,\"__esModule\",{value:!0});var o=s(n(27)),r=s(n(47)),i=s(n(48)),a=s(n(28));function s(t){return t&&t.__esModule?t:{default:t}}e.default=function(e){var n=(0,i.default)(\"Adblank\",\"w2g_adblank_debug\");if(!t.ads||!t.ads.config)throw\"global.ads does not exist\";if(!t.ads.currentDevice)throw\"device not recognized\";var s=t.ads,c=t.ads.currentDevice;if(s.config[c].runOnEvent,s.config[c].adBlank)if(s.config[c].adUnitName){n(\'Config for device \"\'+c+\'\" is\',s.config[c]);var u=s.config[c].startingPosition?s.config[c].startingPosition:\"bottom\",l=s.config[c].adInnerId?s.config[c].adInnerId:\"adInnerId\",f=(s.config[c].adSinglePublisher,s.config[c].adUnitName),d=s.config[c].adBlank.dispatchCustomEventName?s.config[c].adBlank.dispatchCustomEventName:\"wtgStickyScrollDesktopEvent\",p=s.config[c].adBlank.dispatchCustomEventTimeout?parseInt(s.config[c].adBlank.dispatchCustomEventTimeout):1501,g=!!s.config[c].adBlank.refresh&&s.config[c].adBlank.refresh,h=s.config[c].adBlank.refreshTime?parseInt(s.config[c].adBlank.refreshTime)>30?parseInt(s.config[c].adBlank.refreshTime):30:0,v=s.document.getElementById(\"wtgSticky\"),y=s.document.getElementById(\"wtgStickyWrapper\"),m=!!s.config[c].closeButton&&s.document.getElementsByClassName(s.config[c].closeButton)[0],w=s.window.location.href,b=!1,x=!0,k=!0,_=!!s.config[c].preventAutoshowOnSPAReload,S=s.config[c].isSPA,E=!1;n(\"Page is declared as \"+(S?\"\":\"non-\")+\"SPA\");var O,M,P=\"boolean\"==typeof s.config[c].passbackCfg&&s.config[c].passbackCfg?2855756155:parseInt(s.config[c].passbackCfg)||!1,T=!!s.config[c].customTargeting&&[\"adSticky\",\"true\"];if(window.self!==window.top)var A=top.document,j=window.top;else A=document,j=window;j.googletag=j.googletag||{},j.googletag.cmd=j.googletag.cmd||[];var I,L=!1,C=!1,B=f,R=function(t,e,o){var r=e.style.top?parseInt(e.style.top,10):0,i=e.style.bottom?parseInt(e.style.bottom,10):0,a=1.1*-(t.offsetHeight+o.offsetHeight-r+i);\"top\"===u?t.style.top=a+\"px\":t.style.bottom=a+\"px\",J(\"wtgStickyCollapseBegin\"),n(\"collapseHandler called:\",{startingPosition:u,collapseValue:a})};if(\"desktop\"===c){var W,D,F=!1,N=!1,U=!1,z=0;window.top.document.addEventListener(\"visibilitychange\",(function(){\"visible\"===window.top.document.visibilityState?(x=!0,F=!1):x=!1,n(\'Visibility changed to \"\'+(x?\"\":\"not \")+\'visible\"\')}));var V=function(){x||z!==h||(F=!0),N||F||z===h||z++,x&&z===h&&0!==z&&(J(d,T),clearTimeout(I),z=0,n(\"refreshTimeCounter reached \"+h))};(D=new IntersectionObserver((function(t){t[0].isIntersecting?(U||(W=setInterval(V,1e3)),U=!0,F=!1,N=!1):U&&(F=!0)}),{root:null,rootMargin:\"0px\",threshold:1})).observe(v)}var H={detectUrlChange:function(){return O||C||!S?this:(O=setInterval((function(){w!==s.window.location.href&&(L=!1,w=s.window.location.href,n(\"URL changed, still no viewable impression\"),M&&J(d))}),10),this)},impressionViewableListener:function(){return C?this:(j.googletag.cmd.push((function(){j.googletag.pubads().addEventListener(\"impressionViewable\",(function(t){B==t.slot.getAdUnitPath()&&(g&&d&&(n(\"googletag impressionViewable called\"),I=setTimeout((function(){if(\"undefined\"!=typeof iOS&&iOS){for(var t=j.googletag.pubads().getSlots(),e=[],o=0;o<t.length;o++)B.indexOf(t[o].getAdUnitPath())>=0&&e.push(t[o]);e.length&&j.googletag.pubads().refresh(e)}else x&&(n(\"dispatching refresh event after impressionViewable\"+(T?\" with targeting\":\"\"),T||\"\"),J(d,T),\"desktop\"===c&&(F=!1,N=!1))}),1e3*h),m&&!b&&m.addEventListener(\"click\",(function(t){n(\"closeButton clicked\"),clearTimeout(I),\"desktop\"===c&&(N=!0,F=!0,z=0,U=!1,clearInterval(W))})),S&&!b&&(w=s.window.location.href,clearInterval(O),setTimeout((function e(){if(w!==s.window.location.href){n(\"URL changed on SPA page\"),k=!0;var o=T&&T[0];o&&t.slot.getTargeting(o).length&&t.slot.clearTargeting(T[0]),s.config[c].widgets&&(v.style.transition=\"all 500ms linear 0s\"),w=s.window.location.href,R(v,y,m),\"desktop\"===c&&(z=0,F=!0),clearTimeout(I),L=!1,_||(L=!0,J(d)),J(\"ads4gUrlChange\")}setTimeout(e,10)}),10)),b=!0),k&&(!function(){if(s.config[c].capping){var t=\"wtgViewCappingCounter\";if(!1===(0,a.default)(!0).get(t)?(0,a.default)(!0).set(t,1):(0,a.default)(!0).incrementValue(t),(0,a.default)(!0).get(t)>=s.config[c].capping.cappingValue){var e=s.config[c].capping,n=e.cookieName,r=void 0===n?\"wtgDisableAd\":n,i=e.expireInMinutes,u=void 0===i?\"\":i,l=e.cookiePath,f=void 0===l?\"\/\":l;(0,o.default)().set(r,1,u,f),(0,a.default)(!0).remove(t)}}}(),k=!1))})),n(\"googletag impressionViewable listener added\")})),this)},slotRenderEndedListener:function(){if(C)return this;var t=function(t){if(t){var e=t.size&&t.size[0]?parseInt(t.size[0]):0;if(\"top\"===u?s.config[c].moveAd&&\"top\"===s.config[c].moveAd.direction&&s.config[c].moveAd.moveInPx?v.style.top=v.style.top=s.config[c].moveAd.moveInPx+\"px\":v.style.top=\"0px\":s.config[c].moveAd&&\"bottom\"===s.config[c].moveAd.direction&&s.config[c].moveAd.moveInPx?v.style.bottom=v.style.bottom=s.config[c].moveAd.moveInPx+\"px\":v.style.bottom=\"0px\",J(\"wtgStickyShowBegin\"),A.getElementById(B).style.width=e+\"px\",e<=1&&(A.getElementById(B).style.minWidth=\"phone\"==c?\"320px\":\"728px\"),s.config[c].fitToAd)if(v.classList.add(\"fitToAd\"),e>1)v.style.width=e+\"px\";else if(void 0!==t.slot.getTargeting(\"hb_size\")[0]){var n=t.slot.getTargeting(\"hb_size\")[0].split(\"x\");v.style.width=n[0]+\"px\",A.getElementById(B).style.width=n[0]+\"px\"}switch(c){case\"desktop\":v.classList.add(\"wtgDesktop\");break;case\"tablet\":v.classList.add(\"wtgTablet\");break;default:v.classList.add(\"wtgPhone\")}if(s.config[c].alignmentAd)switch(s.config[c].alignmentAd){case\"right\":A.getElementById(B).style.marginLeft=\"auto\";break;case\"left\":A.getElementById(B).style.marginRight=\"auto\";break;default:A.getElementById(B).style.marginLeft=\"auto\",A.getElementById(B).style.marginRight=\"auto\"}else A.getElementById(B).style.marginLeft=\"auto\",A.getElementById(B).style.marginRight=\"auto\";if(s.config[c].adText&&s.config[c].adText.text){var r=A.getElementById(B),i=A.getElementById(\"wtgAdText\"),a=!1,f=!1;\"top\"===u&&A.getElementById(l).appendChild(i);for(var d=0,p=r.style.length;d<p;d++)\"width\"==r.style[d]&&(a=!0),\"min-width\"==r.style[d]&&(f=r.style[r.style[d]]),\"width\"!=r.style[d]&&\"min-width\"!=r.style[d]&&\"margin-left\"!=r.style[d]&&\"margin-right\"!=r.style[d]||(i.style[r.style[d]]=r.style[r.style[d]]);!a&&f&&(i.style.width=f)}if(s.config[c].disableAdAfterDisplayCookie){var g=s.config[c].disableAdAfterDisplayCookie,h=g.cookieName,y=void 0===h?\"wtgDisableAd\":h,m=g.expireInMinutes,w=void 0===m?\"\":m,b=g.cookiePath,x=void 0===b?\"\/\":b;(0,o.default)().set(y,1,w,x)}}};return j.addEventListener(\"wtgStickyTestStart\",(function(e){(0,r.default)()?n(\"wtgAd is disabled (passback)\",\"\",\"info\"):t(e.detail&&e.detail.event)})),j.addEventListener(\"wtgStickyTestStop\",(function(t){R(v,y,m)})),j.googletag.cmd.push((function(){j.googletag.pubads().addEventListener(\"slotRenderEnded\",(function(e){(0,r.default)()?B==e.slot.getAdUnitPath()&&n(\"wtgAd is disabled\",\"\",\"info\"):(e.isEmpty||P&&e.campaignId===P)&&B==e.slot.getAdUnitPath()?e.isEmpty&&(n(\"wtgEmptyAd\"),R(v,y,m),\"desktop\"===c&&(clearInterval(W),D.unobserve(v))):(C=!0,B==e.slot.getAdUnitPath()&&(n(\"googletag slotRenderEnded called\"),J(\"wtgSlotRendered\"),t(e)))})),n(\"googletag slotRenderEnded listener added\")})),this},dispatchCustomEvent:function(){if(d&&window.setTimeout((function(){if(\"function\"==typeof j.CustomEvent)var t=new Event(d);else(t=A.createEvent(\"Event\")).initEvent(d,!0,!0);j.dispatchEvent(t)}),p),s.config[c].customCode&&s.config[c].customCode.length>0){var t=s.config[c].customCode;new Function(t)()}return this}};if(s.config[c].runOnEvent){if(n(\"wtgRunOnEvent\"),!s.config[c].runOnEvent)throw\"runOnEvent: runOnEventElementListen config does not exist\";if(!s.config[c].runOnEvent.name||!s.config[c].runOnEvent.listenElement)throw\"runOnEvent.name or runOnEvent.listenElement config does not exist\";e=s.config[c].runOnEvent.name;var G=s.config[c].runOnEvent.listenElement;switch(G){case\"window\":window.addEventListener(e,(function(){n(\"Running on window event \"+e),Y()}));break;case\"document\":document.addEventListener(e,(function(){n(\"Running on document event \"+e),Y()}));break;default:(G=document.querySelector(G)).addEventListener(e,(function(){n(\"Running \"+e+\" event on custom element\",G),Y()}))}}else s.config[c].runOnTouchMove?\"phone\"==c?(j.addEventListener(\"touchmove\",q),n(\"wtgRunOnTouchMove\")):\"desktop\"==c&&(j.addEventListener(\"scroll\",q),n(\"wtgRunOnScroll\")):(n(\"wtgSimplyRun\"),_=!1,M=!0,Y());window.top.addEventListener(\"stopRefreshWtg\",(function(){clearTimeout(I),n(\"stopRefreshWtg listener\")})),window.addEventListener(\"ads4gRefreshSPA\",(function(t){S?n(\"\\tSPA page\"):(n(\"\\tStandard page\"),J(\"ads4gRefresh\"))})),window.top.addEventListener(\"collapseStickyWtg\",(function(){n(\"collapseStickyWtg listener\"),R(v,y,m)}))}else n(\"adUnitName not defined in config\",s.config[c],\"error\");else n(\"adBlank not found in config\",s.config[c],\"error\");function q(){if(!s.config[c].runOnTouchMove)throw\"runOnTouchMove: runOnTouchMovePercentFromTop config does not exist\";if(!s.config[c].runOnTouchMove.percentScroll)throw\"runOnTouchMove.percentScroll config does not exist\";var t=parseInt(s.config[c].runOnTouchMove.percentScroll);if(!1===L){var e=top.document.documentElement.getBoundingClientRect().top,o=e<0?-1*e:e,r=window.top.innerHeight*(t\/100);void 0!==o&&void 0!==r&&o>=r&&(L=!0,n(\"Scroll\/touchmove activated\"),Y())}}function J(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(e&&e.length){var o=$(B);o&&K(o,e)}if(t===d&&(0,r.default)())n(\"No refresh: wtgAd is disabled\",\"\",\"error\");else{n(\"Dispatching event \",t);var i=new Event(t);s.window.dispatchEvent(i)}}function $(t){for(var e,n=j.googletag.pubads().getSlots(),o=0;e=n[o];o++)if(e.getAdUnitPath()===t)return e;return null}function K(t,e){var n=e;if(!Array.isArray(e)||!e.length)return!1;var o=e[0];if(!Array.isArray(o)){if(\"string\"!=typeof o||e.length<2)return!1;n=[e.slice(0,2)]}return n.forEach((function(e){return t.setTargeting(e[0],e[1])})),!0}function Y(){C?d&&J(d):E||((0,r.default)()?L=!1:(H.slotRenderEndedListener().impressionViewableListener().dispatchCustomEvent().detectUrlChange(),E=!0))}}}).call(this,n(0))},function(t,e,n){var o=n(133);\"string\"==typeof o&&(o=[[t.i,o,\"\"]]);var r={insertAt:\"top\",attrs:{id:\"wtgStyles\"},singleton:!0,hmr:!0,transform:void 0,insertInto:()=>!document.querySelector(\"#wtgStyles\")&&document.querySelector(\"head\")||document.createElement(\"span\")};n(135)(o,r);o.locals&&(t.exports=o.locals)},function(t,e,n){(e=n(134)(!1)).push([t.i,\"#wtgSticky{position:fixed;left:0px;right:0px;margin:0px auto;width:100%;z-index:999999;background:transparent;transition:all 500ms linear 0s}#wtgSticky.wtgPhone{height:119px}#wtgSticky.wtgPhone .wtgStickyInner{height:100% !important;display:-ms-flexbox;display:-webkit-flex;display:flex;justify-content:space-between;align-items:center;-ms-flex-align:center;-ms-flex-pack:center;-ms-flex-direction:column;-webkit-flex-direction:column;flex-direction:column}#wtgSticky.wtgPhone .wtgStickyInner::after{content:\\\"\\\";-ms-flex:1;-webkit-flex:1;flex:1;flex-basis:0}#wtgSticky.wtgPhone #wtgStickyWrapper{height:100%}#wtgSticky.wtgPhone #wtgAdText{line-height:initial;-ms-flex:1;-webkit-flex:1;flex:1;flex-basis:0}#wtgSticky.slideFromBottom{bottom:-210px}#wtgSticky.slideFromTop{top:-210px}#wtgSticky.fitToAd{-webkit-transition:all 500ms linear 0s, width 0s, height 0s;-moz-transition:all 500ms linear 0s, width 0s, height 0s;-o-transition:all 500ms linear 0s, width 0s, height 0s;transition:all 500ms linear 0s, width 0s, height 0s}#wtgSticky #closeWrapper{position:relative}#wtgSticky #wtgStickyWrapper{display:block;position:relative;margin:0 auto;box-shadow:rgba(17,58,102,0.45) 0px 2px 4px 3px;width:100%;background-color:#FFFFFF}#wtgSticky #wtgStickyWrapper #wtgAdText{padding:5px 0 5px 5px;font-size:8px;font-family:Arial, Helvetica, sans-serif;text-transform:uppercase;color:#888888;display:block}#wtgSticky #wtgStickyWrapper #wtgStickyInner{display:block;margin:0 auto;min-width:320px;text-align:center}#wtgSticky #wtgStickyWrapper #wtgStickyInner.move-left{text-align:left}#wtgSticky #wtgStickyWrapper #wtgStickyInner.move-right{text-align:right}#wtgStickyWrapper .close-arrow-down{position:absolute;display:block;box-shadow:rgba(17,58,102,0.35) 0px -2px 4px 0px;width:38px;height:38px;top:-38px;right:0;border-top-left-radius:80px;border-top-right-radius:80px;justify-content:center;background-color:#ffffff;z-index:10000001;text-indent:-9999px;font-size:0;overflow:hidden}#wtgStickyWrapper .close-arrow-down:after{display:block;width:38px;height:38px;background-image:url(\\\"data:image\/svg+xml,%3Csvg fill=\'%23000000\' height=\'38\' viewBox=\'0 0 24 24\' width=\'38\' xmlns=\'http:\/\/www.w3.org\/2000\/svg\' style=\'height: 38px; width: 38px;\'%3E%3Cpath d=\'M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z\'%3E%3C\/path%3E%3Cpath d=\'M0 0h24v24H0z\' fill=\'none\'%3E%3C\/path%3E%3C\/svg%3E\\\");background-repeat:no-repeat;background-position:center;content:\\\"\\\"}#wtgStickyWrapper .close-text{position:absolute;display:inline-table;min-width:70px;height:28px;line-height:28px;top:-28px;padding:0 13px;font-size:14px;box-shadow:rgba(17,58,102,0.35) -1px -3px 3px 0px;border-top-left-radius:20px;border-top-right-radius:20px;justify-content:center;text-align:center;background-color:#ffffff;z-index:10000001;color:#000000}#wtgStickyWrapper .close-text-square{position:absolute;display:inline-table;min-width:70px;height:22px;line-height:22px;top:-22px;padding:0 13px;font-size:14px;box-shadow:rgba(17,58,102,0.35) -2px -2px 8px 0;justify-content:center;text-align:center;background-color:#ffffff;z-index:-1;font-family:Arial, Helvetica, sans-serif;cursor:pointer;color:#000000}#wtgStickyWrapper .close-arrow-up{position:absolute;display:block;box-shadow:rgba(17,58,102,0.35) 0px -2px 4px 0px;width:38px;height:38px;bottom:-38px;right:0;border-top-left-radius:80px;border-top-right-radius:80px;justify-content:center;background-color:#ffffff;z-index:10000001;text-indent:-9999px;font-size:0;overflow:hidden;transform:rotate(180deg)}#wtgStickyWrapper .close-arrow-up:after{display:block;width:38px;height:38px;background-image:url(\\\"data:image\/svg+xml,%3Csvg fill=\'%23000000\' height=\'38\' viewBox=\'0 0 24 24\' width=\'38\' xmlns=\'http:\/\/www.w3.org\/2000\/svg\' style=\'transform: scale(-1,1); height: 38px; width: 38px;\'%3E%3Cpath d=\'M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z\'%3E%3C\/path%3E%3Cpath d=\'M0 0h24v24H0z\' fill=\'none\'%3E%3C\/path%3E%3C\/svg%3E\\\");background-repeat:no-repeat;background-position:center;content:\\\"\\\"}#wtgStickyWrapper .left{left:0}#wtgStickyWrapper .right{right:0}#wtgStickyWrapper .center{left:0;right:0;margin:auto;text-align:center}#wtgStickyWrapper .close-x-bottom{position:absolute;display:block;box-shadow:rgba(17,58,102,0.35) 0px -2px 4px 0px;width:28px;height:28px;right:0;top:-28px;justify-content:center;background-color:#ffffff;z-index:10000001;text-indent:-9999px;font-size:0;overflow:hidden}#wtgStickyWrapper .close-x-bottom.right{right:0;border-top-left-radius:8px}#wtgStickyWrapper .close-x-bottom.left{left:0;border-top-right-radius:8px}#wtgStickyWrapper .close-x-bottom.center{border-top-left-radius:8px;border-top-right-radius:8px}#wtgStickyWrapper .close-x-bottom:after{display:block;width:28px;height:28px;background-image:url(\\\"data:image\/svg+xml,%3C%3Fxml version=\'1.0\' encoding=\'UTF-8\'%3F%3E%3Csvg width=\'14px\' height=\'14px\' fill=\'%23000000\' viewBox=\'0 0 30 30\' xmlns=\'http:\/\/www.w3.org\/2000\/svg\'%3E%3Cpath d=\'m7 4c-0.25588 0-0.51203 0.097469-0.70703 0.29297l-2 2c-0.391 0.391-0.391 1.0241 0 1.4141l7.293 7.293-7.293 7.293c-0.391 0.391-0.391 1.0241 0 1.4141l2 2c0.391 0.391 1.0241 0.391 1.4141 0l7.293-7.293 7.293 7.293c0.39 0.391 1.0241 0.391 1.4141 0l2-2c0.391-0.391 0.391-1.0241 0-1.4141l-7.293-7.293 7.293-7.293c0.391-0.39 0.391-1.0241 0-1.4141l-2-2c-0.391-0.391-1.0241-0.391-1.4141 0l-7.293 7.293-7.293-7.293c-0.1955-0.1955-0.45116-0.29297-0.70703-0.29297z\'\/%3E%3C\/svg%3E\\\");background-repeat:no-repeat;background-position:center;content:\\\"\\\"}#wtgStickyWrapper .close-x-top{position:absolute;display:block;box-shadow:rgba(17,58,102,0.35) 0px 2px 4px 0px;width:28px;height:28px;right:0;bottom:-28px;justify-content:center;background-color:#ffffff;z-index:10000001;text-indent:-9999px;font-size:0;overflow:hidden}#wtgStickyWrapper .close-x-top.right{right:0;border-bottom-left-radius:8px}#wtgStickyWrapper .close-x-top.left{left:0;border-bottom-right-radius:8px}#wtgStickyWrapper .close-x-top.center{border-bottom-left-radius:8px;border-bottom-right-radius:8px}#wtgStickyWrapper .close-x-top:after{display:block;width:28px;height:28px;background-image:url(\\\"data:image\/svg+xml,%3C%3Fxml version=\'1.0\' encoding=\'UTF-8\'%3F%3E%3Csvg width=\'14px\' height=\'14px\' fill=\'%23000000\' viewBox=\'0 0 30 30\' xmlns=\'http:\/\/www.w3.org\/2000\/svg\'%3E%3Cpath d=\'m7 4c-0.25588 0-0.51203 0.097469-0.70703 0.29297l-2 2c-0.391 0.391-0.391 1.0241 0 1.4141l7.293 7.293-7.293 7.293c-0.391 0.391-0.391 1.0241 0 1.4141l2 2c0.391 0.391 1.0241 0.391 1.4141 0l7.293-7.293 7.293 7.293c0.39 0.391 1.0241 0.391 1.4141 0l2-2c0.391-0.391 0.391-1.0241 0-1.4141l-7.293-7.293 7.293-7.293c0.391-0.39 0.391-1.0241 0-1.4141l-2-2c-0.391-0.391-1.0241-0.391-1.4141 0l-7.293 7.293-7.293-7.293c-0.1955-0.1955-0.45116-0.29297-0.70703-0.29297z\'\/%3E%3C\/svg%3E\\\");background-repeat:no-repeat;background-position:center;content:\\\"\\\"}\\n\",\"\"]),t.exports=e},function(t,e,n){\"use strict\";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||\"\",o=t[3];if(!o)return n;if(e&&\"function\"==typeof btoa){var r=(a=o,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c=\"sourceMappingURL=data:application\/json;charset=utf-8;base64,\".concat(s),\"\/*# \".concat(c,\" *\/\")),i=o.sources.map((function(t){return\"\/*# sourceURL=\".concat(o.sourceRoot||\"\").concat(t,\" *\/\")}));return[n].concat(i).concat([r]).join(\"\\n\")}var a,s,c;return[n].join(\"\\n\")}(e,t);return e[2]?\"@media \".concat(e[2],\" {\").concat(n,\"}\"):n})).join(\"\")},e.i=function(t,n,o){\"string\"==typeof t&&(t=[[null,t,\"\"]]);var r={};if(o)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var s=0;s<t.length;s++){var c=[].concat(t[s]);o&&r[c[0]]||(n&&(c[2]?c[2]=\"\".concat(n,\" and \").concat(c[2]):c[2]=n),e.push(c))}},e}},function(t,e,n){var o,r,i={},a=(o=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===r&&(r=o.apply(this,arguments)),r}),s=function(t,e){return e?e.querySelector(t):document.querySelector(t)},c=function(t){var e={};return function(t,n){if(\"function\"==typeof t)return t();if(void 0===e[t]){var o=s.call(this,t,n);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(t){o=null}e[t]=o}return e[t]}}(),u=null,l=0,f=[],d=n(136);function p(t,e){for(var n=0;n<t.length;n++){var o=t[n],r=i[o.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](o.parts[a]);for(;a<o.parts.length;a++)r.parts.push(w(o.parts[a],e))}else{var s=[];for(a=0;a<o.parts.length;a++)s.push(w(o.parts[a],e));i[o.id]={id:o.id,refs:1,parts:s}}}}function g(t,e){for(var n=[],o={},r=0;r<t.length;r++){var i=t[r],a=e.base?i[0]+e.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};o[a]?o[a].parts.push(s):n.push(o[a]={id:a,parts:[s]})}return n}function h(t,e){var n=c(t.insertInto);if(!n)throw new Error(\"Couldn\'t find a style target. This probably means that the value for the \'insertInto\' parameter is invalid.\");var o=f[f.length-1];if(\"top\"===t.insertAt)o?o.nextSibling?n.insertBefore(e,o.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),f.push(e);else if(\"bottom\"===t.insertAt)n.appendChild(e);else{if(\"object\"!=typeof t.insertAt||!t.insertAt.before)throw new Error(\"[Style Loader]\\n\\n Invalid value for parameter \'insertAt\' (\'options.insertAt\') found.\\n Must be \'top\', \'bottom\', or Object.\\n (https:\/\/github.com\/webpack-contrib\/style-loader#insertat)\\n\");var r=c(t.insertAt.before,n);n.insertBefore(e,r)}}function v(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=f.indexOf(t);e>=0&&f.splice(e,1)}function y(t){var e=document.createElement(\"style\");if(void 0===t.attrs.type&&(t.attrs.type=\"text\/css\"),void 0===t.attrs.nonce){var o=function(){0;return n.nc}();o&&(t.attrs.nonce=o)}return m(e,t.attrs),h(t,e),e}function m(t,e){Object.keys(e).forEach((function(n){t.setAttribute(n,e[n])}))}function w(t,e){var n,o,r,i;if(e.transform&&t.css){if(!(i=\"function\"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=i}if(e.singleton){var a=l++;n=u||(u=y(e)),o=k.bind(null,n,a,!1),r=k.bind(null,n,a,!0)}else t.sourceMap&&\"function\"==typeof URL&&\"function\"==typeof URL.createObjectURL&&\"function\"==typeof URL.revokeObjectURL&&\"function\"==typeof Blob&&\"function\"==typeof btoa?(n=function(t){var e=document.createElement(\"link\");return void 0===t.attrs.type&&(t.attrs.type=\"text\/css\"),t.attrs.rel=\"stylesheet\",m(e,t.attrs),h(t,e),e}(e),o=S.bind(null,n,e),r=function(){v(n),n.href&&URL.revokeObjectURL(n.href)}):(n=y(e),o=_.bind(null,n),r=function(){v(n)});return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else r()}}t.exports=function(t,e){if(\"undefined\"!=typeof DEBUG&&DEBUG&&\"object\"!=typeof document)throw new Error(\"The style-loader cannot be used in a non-browser environment\");(e=e||{}).attrs=\"object\"==typeof e.attrs?e.attrs:{},e.singleton||\"boolean\"==typeof e.singleton||(e.singleton=a()),e.insertInto||(e.insertInto=\"head\"),e.insertAt||(e.insertAt=\"bottom\");var n=g(t,e);return p(n,e),function(t){for(var o=[],r=0;r<n.length;r++){var a=n[r];(s=i[a.id]).refs--,o.push(s)}t&&p(g(t,e),e);for(r=0;r<o.length;r++){var s;if(0===(s=o[r]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete i[s.id]}}}};var b,x=(b=[],function(t,e){return b[t]=e,b.filter(Boolean).join(\"\\n\")});function k(t,e,n,o){var r=n?\"\":o.css;if(t.styleSheet)t.styleSheet.cssText=x(e,r);else{var i=document.createTextNode(r),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function _(t,e){var n=e.css,o=e.media;if(o&&t.setAttribute(\"media\",o),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function S(t,e,n){var o=n.css,r=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&r;(e.convertToAbsoluteUrls||i)&&(o=d(o)),r&&(o+=\"\\n\/*# sourceMappingURL=data:application\/json;base64,\"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+\" *\/\");var a=new Blob([o],{type:\"text\/css\"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}},function(t,e){t.exports=function(t){var e=\"undefined\"!=typeof window&&window.location;if(!e)throw new Error(\"fixUrls requires window.location\");if(!t||\"string\"!=typeof t)return t;var n=e.protocol+\"\/\/\"+e.host,o=n+e.pathname.replace(\/\\\/[^\\\/]*$\/,\"\/\");return t.replace(\/url\\s*\\(((?:[^)(]|\\((?:[^)(]+|\\([^)(]*\\))*\\))*)\\)\/gi,(function(t,e){var r,i=e.trim().replace(\/^\"(.*)\"$\/,(function(t,e){return e})).replace(\/^\'(.*)\'$\/,(function(t,e){return e}));return\/^(#|data:|http:\\\/\\\/|https:\\\/\\\/|file:\\\/\\\/\\\/|\\s*$)\/i.test(i)?t:(r=0===i.indexOf(\"\/\/\")?i:0===i.indexOf(\"\/\")?n+i:o+i.replace(\/^\\.\\\/\/,\"\"),\"url(\"+JSON.stringify(r)+\")\")}))}}]);</script>'
			}
		},{
			SlotId: "wtgStickyScrollDivInner",
			type : {
				name : 'runonevent', event : 'wtgStickyScrollEvent'
			},
			branding: false,
			Handle: {
				selector: "",
				insert: {
					type: "after"
				}
			},
			AdUnitName: "/21831979902/Republika.rs/footer_sticky",
			Sizes: [[970, 200],[970, 90],[728, 90],[360, 100],[320, 100],[320, 50]],
			PBSize: [
				{
				   BidderSize: [970, 90],
				   BidderSizeSent: [[970, 90], [750, 100], [728, 90]],
				   bids: [
					{ bidder: "adform", params: { mid: "1681229" } },
					{ bidder: "rtbhouse", params: { region: "prebid-eu", publisherId: "DPvmdEIcN6xczqVEVpOV" } },
					{ bidder: "ix", params: { siteId: "982893", size: [970, 90] } },
					{ bidder: 'smartadserver', params: { domain: '//prg.smartadserver.com', siteId: '595401', pageId: '1822269', formatId: '63332' } },
					{ bidder: "sspBC" },
					{ bidder: "connectad", params: { networkId: 118, siteId: 1080010} },
					{ bidder: "appnexus", params:{ placementId:"29982579"}},
					{ bidder: "rubicon", params: { accountId: "17862", siteId: "482714", zoneId: "2862514" } },
					{ bidder: "openx",params:{unit:"559450524",delDomain:"waytogrow-d.openx.net"}},
					{ bidder: "pubmatic", params: { publisherId: "156701", adSlot: "www.republika.rs_all" } },
				]
			   }, 
			   {
				   BidderSize: [728, 90],
				   BidderSizeSent: [[970, 90], [750, 100], [728, 90]],
				   bids: [
					{ bidder: "adform", params: { mid: "1681234" } },
					{ bidder: "rtbhouse", params: { region: "prebid-eu", publisherId: "DPvmdEIcN6xczqVEVpOV" } },
					{ bidder: "ix", params: { siteId: "982893", size: [728, 90] } },
					{ bidder: 'smartadserver', params: { domain: '//prg.smartadserver.com', siteId: '595401', pageId: '1822269', formatId: '62186' } },
					{ bidder: "sspBC" },
					{ bidder: "connectad", params: { networkId: 118, siteId: 1080010} },
					{ bidder: "appnexus", params:{ placementId:"29982579"}},
					{ bidder: "rubicon", params: { accountId: "17862", siteId: "482714", zoneId: "2862514" } },
					{ bidder: "openx",params:{unit:"559450525",delDomain:"waytogrow-d.openx.net"}},
					{ bidder: "pubmatic", params: { publisherId: "156701", adSlot: "www.republika.rs_all" } },
				]
				},
				{
					BidderSize: [360, 100],
					BidderSizeSent: [[360, 100], [360, 50], [320, 100], [320, 50]],
					bids: [
						{ bidder: "adform", params: { mid: "1681252" } },
						{ bidder: "rtbhouse", params: { region: "prebid-eu", publisherId: "DPvmdEIcN6xczqVEVpOV" } },
						{ bidder: "ix", params: { siteId: "982893", size: [360, 100] } },
						{ bidder: 'smartadserver', params: { domain: '//prg.smartadserver.com', siteId: '595401', pageId: '1822269', formatId: '84448' } },
						{ bidder: "sspBC" },
						{ bidder: "connectad", params: { networkId: 118, siteId: 1080010} },
						{ bidder: "appnexus", params:{ placementId:"29982579"}},
						{ bidder: "rubicon", params: { accountId: "17862", siteId: "482714", zoneId: "2862514" } },
						{ bidder: "openx",params:{unit:"559450528",delDomain:"waytogrow-d.openx.net"}},
						{ bidder: "pubmatic", params: { publisherId: "156701", adSlot: "www.republika.rs_all" } },
					]
				 },
				 {
					BidderSize: [320, 100],
					BidderSizeSent: [[360, 100], [360, 50], [320, 100], [320, 50]],
					bids: [
						{ bidder: "adform", params: { mid: "1681254" } },
						{ bidder: "rtbhouse", params: { region: "prebid-eu", publisherId: "DPvmdEIcN6xczqVEVpOV" } },
						{ bidder: "ix", params: { siteId: "982893", size: [320, 100] } },
						{ bidder: 'smartadserver', params: { domain: '//prg.smartadserver.com', siteId: '595401', pageId: '1822269', formatId: '62429' } },
						{ bidder: "sspBC" },
						{ bidder: "connectad", params: { networkId: 118, siteId: 1080010} },
						{ bidder: "appnexus", params:{ placementId:"29982579"}},
						{ bidder: "rubicon", params: { accountId: "17862", siteId: "482714", zoneId: "2862514" } },
						{ bidder: "openx", params:{unit:"559450531",delDomain:"waytogrow-d.openx.net"}},
						{ bidder: "pubmatic", params: { publisherId: "156701", adSlot: "www.republika.rs_all" } },
			
					]
				},
				{
					BidderSize: [320, 50],
					BidderSizeSent: [[360, 100], [360, 50], [320, 100], [320, 50]],
					bids: [
						{ bidder: "adform", params: { mid: "1681259" } },
						{ bidder: "rtbhouse", params: { region: "prebid-eu", publisherId: "DPvmdEIcN6xczqVEVpOV" } },
						{ bidder: "ix", params: { siteId: "982893", size: [320, 50] } },
						{ bidder: 'smartadserver', params: { domain: '//prg.smartadserver.com', siteId: '595401', pageId: '1822269', formatId: '62430' } },
						{ bidder: "sspBC" },
						{ bidder: "connectad", params: { networkId: 118, siteId: 1080010} },
						{ bidder: "appnexus", params:{ placementId:"29982579"}},
						{ bidder: "rubicon", params: { accountId: "17862", siteId: "482714", zoneId: "2862514" } },
						{ bidder: "openx", params:{unit:"559450532",delDomain:"waytogrow-d.openx.net"}},
						{ bidder: "pubmatic", params: { publisherId: "156701", adSlot: "www.republika.rs_all" } },
					]
				}],
			Mapping:[
				[
					[900, 0],
					[[970, 200], [750, 200], [970, 90], [728, 90]],
				],
				[
					[0, 0],
					[[360, 100], [360, 50], [320, 100], [320, 50]],
				]
			]
		}],
	
    prebid: {
        timeout: 1400,
		currency: !0,
		USD: 0.86,   // USD/EUR
		CHF: 1.02,   // CHF/EUR
		EUR: 1.00,   // EUR/EUR
		defaultCurrency: "EUR",
        schain: {
			validation: "strict",
			config: {
				ver: "1.0",
				complete: 1,
				nodes: [{
					asi: "waytogrow.eu",
					sid: "3108909",
					hp: 1
				}]
			}
		},
        bidderSettings: {
            openx: {
                bidCpmAdjustment: function(e) {
                    return .9 * e * conf.prebid.EUR
                }
            },
            criteo: {
                bidCpmAdjustment: function(e) {
                    return 1.0 * e * conf.prebid.EUR
                }
            },
            rtbhouse: {
                bidCpmAdjustment: function(e) {
                    return 1.0 * e * conf.prebid.USD
                }
            },
			ix: {
                bidCpmAdjustment: function(e) {
					return e * conf.prebid.USD
				}
            },
			smartadserver: {
				bidCpmAdjustment: function(e) {
					return .9 * e * conf.prebid.EUR
				}
			},
			adform: {
				bidCpmAdjustment: function(e) {
					return .9 * e * conf.prebid.EUR
				}
			},
			connectad: {				
			    bidCpmAdj
			   }
		    },
			appnexus: {
				bidCpmAdjustment: function (e) {
					return .86 * e * conf.prebid.USD
				}
			},
			rubicon: {				
				bidCpmAdjustment: function (e) {				
					return .85 * e * conf.prebid.USD
			}
		},
		pubmatic: {
			bidCpmAdjSD
			}
		},
					
        },
        customConfigObject: {
            buckets: [{
                precision: 2,
                min: 0,
                max: 4,
                increment: .01
            }, {
                precision: 2,
                min: 4,
                max: 8,
                increment: .01
            }, {
                precision: 2,
                min: 8,
                max: 12,
                increment: .01
            }, {
                precision: 2,
                min: 12,
                max: 20,
                increment: .1
            }, {
                precision: 2,
                min: 20,
                max: 50,
                increment: .2
            }, {
                precision: 2,
                min: 50,
                max: 100,
                increment: .5
            }]
        }
    }

});   

function wtgChangeMobileTopPosition() {
	var targetNode = document.querySelector(".billboard-mobile.w-100.text-center");
	var config = { childList: true, subtree: true, attributes: true };
	var callback = function (mutationList, observer) {
		targetNode = document.querySelector("#m_top-background");
		if (targetNode) {
			if (parseInt(targetNode.parentNode.style.minHeight) > 0) {
				targetNode.parentNode.style.minHeight = "0px";
			}
			if (targetNode.style.position == "fixed") {
				targetNode.style.top = "82px";
				wtgContainerMobileTopObserver.disconnect()
			}
		}
	};
	var wtgContainerMobileTopObserver = new MutationObserver(callback);
	wtgContainerMobileTopObserver.observe(targetNode, config);
}
function detectmob(){if(navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/BlackBerry/i)||navigator.userAgent.match(/Windows Phone/i)){return!0}else{return!1}}
if(detectmob()){
wtgChangeMobileTopPosition();
}

		
!function(){var t={466:function(t){"use strict";t.exports={removeAdUnits:["/21831979902/Republika.rs/footer_sticky", "/21831979902/Republika.rs/branding_right", "/21831979902/Republika.rs/branding_left"],prebidObject:"pbjs",maxUnfilled:"ype}}(expa:e}:e[iwindowll(t,e)},function(){"use strict";n(337);var t=()=>{const{config:t}=n.g.reloadAds,e=t.leaveIframe&&"true"===t.leaveIframe,i={},o=((t,e)=>{let n=!1,i=window,o=i.location.href;return function(r){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",d=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"log";if(window.self!==window.top)try{i=window.top,o=i.location.href}catch(t){}if(o.indexOf("#")>0){const i=o.split("#");(i[1].indexOf(e)>=0||i[1].indexOf("w2g_debug_all")>=0)&&(n=!0),i[1].indexOf("w2g_products")>=0&&console.log("%c %s %c","background:#EE7D0B;color:#FFFFFF;font-weight:bold;padding:1px 2px;",`WTG product: ${t}`,"color:#555;padding:2px")}if(n&&console)switch(d){case"time":case"timeEnd":console[d](r);break;default:console[d]("%c %s %c %s ","background:#3b88c3;color:#FFFFFF;font-weight:bold;padding:1px 2px;",t,"color:#555;padding:2px",r,s)}}})("Smart Reload","w2g_reload_debug"),r=[];let s,d=!1,a=window,l=document;const c={init(){let n=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e&&window.self!==window.top)try{a=window.top,l=a.document}catch(t){return void o("Can't leave iframe. Exit script.")}a.googletag=a.googletag||{cmd:[]},a[t.prebidObject]=a[t.prebidObject]||{},a[t.prebidObject].que=a[t.prebidObject].que||[],a.wtgAllConfigAdunitsReload||(a.wtgAllConfigAdunitsReload=r),this.setCurrentUrl(a.location.href),this.overrideConfig(n),this.removeAdUnitsFromConfig(),this.addAdUnitsToArr(),this.setGoogleSlotRenderEndedListener(),o("Config: ",t)},startReload(){if(t.adUnits&&t.adUnits.length>0){for(let e=0;e<t.adUnits.length;e+=1)this.prepareAdUnitObject(t.adUnits[e].name);this.setGoogleImpressionViewableListener(),this.observerCustomEventListener(),this.visibilityChangeListener(),this.setEventListenersReload(),o("START",i)}else o("No adUnits in config");d=!0},prepareAdUnitObject(t){i[t]={isImpression:!1,isReloadTimeout:!1,intersectionState:!1,unfilledCount:0,reloadTimeoutHandler:!1,isValidAdvertiserId:!0,isValidCampaignId:!0}},resetAdUnitObjectForSPA(){o("resetAdUnitObjectForSPA"),Object.keys(i).forEach((t=>{i[t].reloadTimeoutHandler&&clearTimeout(i[t].reloadTimeoutHandler),i[t].isImpression=!1,i[t].isReloadTimeout=!1,i[t].unfilledCount=0}))},setUrlChangeListener(){d||new MutationObserver((()=>{const t=a.location.href;t!==s&&(s=t,c.resetAdUnitObjectForSPA())})).observe(document,{subtree:!0,childList:!0})},debounce(t,e){let n;return function(){for(var i=arguments.length,o=new Array(i),r=0;r<i;r++)o[r]=arguments[r];clearTimeout(n),n=sett(...o)}),e)}}}),e))}},setEventListenersReload(){if(t.events){const e=500;t.events.forEach((t=>{a.addEventListener(t,this.throttle((()=>{o("event detected",`${t} timestamp:${Date.now()}`),Object.keys(i).d(t,!0)}))}),e))}))}},setGoogleImpressionViewableListener(){const t=this.getAdUnitsData();a.googletag.cmd.push((function(){a.googletag.pubads().addEventListener("impressionViewable",(function(e){const n=e.slot.getAdUnitPath();if(t[n]){const e=t[n].reloadTime;o("impressionViewable",n),i[n].isImpression=!0,i[n].reloadTimeoutHandler=setTimeout((()=>{i[n].isReloadTimeout=!0,c.reloadBid(n)}),e)}}))}))},setGoogleSlotRenderEndedListener(){const e=this.getAdUnitsData();a.googletag.cmd.push((function(){a.googletag.pubads().addEventListener("slotRenderEnded",(function(n){const r=n.slot.getAdUnitPath();if(e[r]){o("slotRenderEnded",r),d||c.startReload();const e=n.slot.getResponseInformation();if(t.advertiserId){o("checking AdvertiserId ...");let t=0;e&&e.advertiserId&&(t=e.advertiserId),c.checkAdvertiserId(t,r),o("google advertiserId: ",t)}if(t.campaignId){o("checking CampaignId (DFP OrderID) ...");let t=0;e&&e.campaignId&&(t=e.campaignId),c.checkCampaignId(t,r),o("google campaignId (DFP OrderID): ",t)}if(n.isEmpty||1===n.size[0]&&!n.slot.getTargeting("hb_size")[0]?(i[r].unfilledCount+=1,o("Unfilled:",`${r} count:${i[r].unfilledCount}`,"warn")):i[r].unfilledCount=0,i[r].reloadTimeoutHandler&&clearTimeout(i[r].reloadTimeoutHandler),i[r].isImpression=!1,i[r].isReloadTimeout=!1,!i[r].intersectionState){const t=n.slot.getSlotId().getDomId();c.observe(r,t)}}}))}))},observerCustomEventListener(){const t=this.getAdUnitsData();a.addEventListener("wtgReloadObserverChange",(e=>{const n=e.detail;t[n]&&(o("wtgObserverChange",e.detail),c.reloadBid(e.detail))}))},observe(t,e){const n=l.getElementById(e);n?new IntersectionObserver((e=>{e.forEach((e=>{i[t].intersectionState=e;const n=new CustomEvent("wtgReloadObserverChange",{detail:t});a.dispatchEvent(n)}))})).observe(n):o("Can not set observer, element not found in DOM.",`Element id: ${e}`,"warn")},visibilityChangeListener(){a.addEventListener("visibilitychange",(()=>{"visible"===l.visibilityState&&Object.keys(i).dBid(t)}))}))},reloadBid(e){let n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];void 0!==i[e]&&(t.events&&t.events.length>0&&!n||"visible"===l.visibilityState&&(i[e].unfilledCount>t.maxUnfilled-1||i[e].isValidAdvertiserId&&i[e].isValidCampaignId&&i[e].isImpression&&i[e].isReloadTimeout&&i[e].intersectionState.isIntersecting&&(i[e].isImpression=!1,i[e].isReloadTimeout=!1,a.googletag.pubads().getSlots().forEach((t=>{t.getAdUnitPath()===e&&t.setTargeting("adReload",!0)})),a[t.prebidObject].que.push((function(){o("requestBids reload",e),a[t.prebidObject].requestBids({timeout:1e3,adUnitCodes:[e],bidsBackHandler(){a[t.prebidObject].setTargetingForGPTAsync([e]);for(let t=0;t<a.googletag.pubads().getSlots().length;t+=1)a.googletag.pubads().getSlots()[t].getAdUnitPath()===e&&a.googletag.pubads().refresh([a.googletag.pubads().getSlots()[t]])}})})))))},getAdUnitsData(){const e=[];for(let n=0;n<t.adUnits.length;n+=1){const i=t.adUnits[n].reloadTime?1e3*t.adUnits[n].reloadTime:3e4;e[t.adUnits[n].name]={reloadTime:i}}return e},overrideConfig(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e&&(o("Config object detected"),!t.adUnits&&e.slots)){t.adUnits=[];for(let n=0;n<e.slots.length;n+=1)e.slots[n].AdUnitName&&t.adUnits.push({name:e.slots[n].AdUnitName,reloadTime:e.slots[n].AdUnitReloadTime?e.slots[n].AdUnitReloadTime:30});o("Override config by conf object: "),o("overrides adunits",t.adUnits),e.smartReload&&(e.smartReload.prebidObject&&(t.prebidObject=e.smartReload.prebidObject,o("overrides prebidObject",t.prebidObject)),e.smartReload.maxUnfilled&&(t.maxUnfilled=e.smartReload.maxUnfilled,o("overrides maxUnfilled",t.maxUnfilled)),e.smartReload.events&&(t.events=e.smartReload.events,o("overrides events",t.events)))}},addAdUnitsToArr(){if(a.wtgAllConfigAdunitsReload&&t.adUnits&&t.adUnits.length>0)for(let e=0;e<t.adUnits.length;e+=1)-1===a.wtgAllConfigAdunitsReload.indexOf(t.adUnits[e].name)&&a.wtgAllConfigAdunitsReload.push(t.adUnits[e].name)},removeAdUnitsFromConfig(){t.removeAdUnits&&(t.adUnits?(o("remove adUnits from config",t.removeAdUnits),t.adUnits=t.adUnits.filter((e=>-1===t.removeAdUnits.indexOf(e.name)))):o("Can not remove AdUnits. There is no config.adUnits object",!1,"warn")),a.wtgAllConfigAdunitsReload&&(t.adUnits?(o("remove adUnits from config (configs duplicates)"),t.adUnits=t.adUnits(t.name)))):o("Can not remove AdUnits (configs duplicates). There is no config.adUnits object",!1,"warn"))},checkAdvertiserId(e,n){t.advertiserId.allowed&&(-1===t.advertiserId.allowed.map((t=>Number(t))).indexOf(e)?(i[n].isValidAdvertiserId=!1,o("wrong AdvertiserId (not find in allowed ids)")):o("AdvertiserId is OK (find in allowed ids)")),t.advertiserId.notAllowed&&(t.advertiserId.notAllowed.map((t=>Number(t))).indexOf(e)>-1?(i[n].isValidAdvertiserId=!1,o("wrong AdvertiserId (find in notAllowed ids)")):o("AdvertiserId is OK (not find in notAllowed ids)"))},checkCampaignId(e,n){t.campaignId.allowed&&(-1===t.campaignId.allowed.map((t=>Number(t))).indexOf(e)?(i[n].isValidCampaignId=!1,o("wrong CampaignId (DFP OrderID) (not find in allowed ids)")):o("CampaignId (DFP OrderID) is OK (find in allowed ids)")),t.campaignId.notAllowed&&(t.campaignId.notAlloumber(t))).indexOf(e)>-1?(i[n].isValidCampaignId=!1,o("wrong CampaignId (DFP OrderID) (find in notAllowed ids)")):o("CampaignId (DFP OrderID) is OK (not find in notAllowed ids)"))},setC(t){s=t}};return c},e=n(466),i=n.n(e);const o="undefined"!=typeof conf&&conf;(async()=>{if((new class{constructor(){this.self=this,this.details={browser:!1,node:!1,jsdom:!1},this.run()}run(){const{browser:t,node:e,jsdom:n}=this.checkEnv();return this.details={browser:t,node:e,jsdom:n}sDOM()}}ocument}isNode(){return"undefined"!=typeof process&&null!=process.versions&&null!=process.versions.node}isJsDOM(){return"undefined"!=typeof window&&"nodejs"===window.name||"undefined"!=typeof navigator&&(navigator.userAgent.includes("Node.js")||navigator.userAgent.includes("jsdom"))}isBrowserEnabled(){const{browser:t,node:e,jsdom:n}=this.details;return tetails)}}).isBrowserEnabled()){if(!i())throw new Error("config error");n.g.reloadAds={},n.g.reloadAds.config=i(),t().init(o)}})(i())}()}();