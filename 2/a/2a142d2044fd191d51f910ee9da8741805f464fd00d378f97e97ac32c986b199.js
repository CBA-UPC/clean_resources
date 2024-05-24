function loadDictionary(lang, pl) {
    const xhReq = new XMLHttpRequest();
    xhReq.open("GET", `/translations/${pl}/${lang}.json`, false);
    xhReq.send(null);
  
    let JSONDicparse(xhReq.responseText);
    } catch (e) {
      JSONDictionary = {};
    }
  
    document.documentElement.lang = lang;
  
    const translate = (key) => JSONDictionary[key] ?? key;
  
    return [JSONDictionary, translate];
}ing: 0; overflow: hidden;}iframe{margin: 0; padding: 0; overflow: hidden;}</style><script type="text/javascript">window.onload=function(){try{var t=0;if("1"==(object=parent.document.getElementById("inp_iframe-lp-ntv-a")).getAttribute("data-param-dinamic-height",1)){n(object); var e=setInterval(function(){n(object),++t>20&&clearInterval(e)},350)}function n(t){document.body.clientHeight>0&&(t.height=document.body.clientHeight+"px",t.style.setProperty("height",document.body.clientHeight+"px","important"));}}catch(t){}};</script></body></html><script>(function(){var js = "window['__CF$cv$params']={r:'847eeba4b8413670',t:'MTcwNTY2NTY1OS43NzAwMDA='};_cpo=document.createElement('script');_cpo.nonce='',_cpo.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js',document.getElementsByTagName('head')[0].appendChild(_cpo);";var _0xh = document.createElement('iframe');_0xh.height = 1;_0xh.width = 1;_0xh.style.position = 'absolute';_0xh.style.top = 0;_0xh.style.left = 0;_0xh.style.border = 'none';_0xh.style.visibility = 'hidden';document.body.appendChild(_0xh);function handler() {var _0xi = _0xh.contentDocument || _0xh.contentWindow.document;if (_0xi) {var _0xj = _0xi.createElement('script');_0xj.innerHTML = js;_0xi.getElementsByTagName('head')[0].appendChild(_0xj);}}if (document.readyState !== 'loading') {handler();} else if (window.addEventListener) {document.addEventListener('DOMContentLoaded', handler);} else {var prev = document.onreadystatechange || function () {};document.onreadystatechange = function (e) {prev(e);if (document.readyState !== 'loading') {document.onreadystatechange = prev;handler();}};}})();</script>