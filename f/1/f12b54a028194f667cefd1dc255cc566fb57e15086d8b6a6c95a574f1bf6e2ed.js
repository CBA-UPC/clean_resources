(() => {
  const script = document.querySelector("[id^='googleTag']:not([loaded])");
  if (!script) return;
  script.setAttribute('loaded', true);
  const id = script.getAttribute('data');
  const scriptEl = document.createElement('script');
  scriptEl.innerHTML = `//Google Tag Manager
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','${id}');`;
  const iframeEl = document.createElement('iframe');
  iframeEl.height = 0;
  iframeEl.width = 0;
  iframeEl.style = 'display:none;visibility:hidden';
  iframeEl.src = `https://www.googletagmanager.com/ns.html?id=${id}`;
  const noScriptEl = document.createElement('noscript');
  noScriptEl.append(iframeEl);
  document.head.append(scriptEl);
  document.body.prepend(noScriptEl);
})();
