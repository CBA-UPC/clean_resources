// For license information, see `https://assets.adobedtm.com/ccc66c06b30b/dec9e8a112d6/05828be5cb90/RCa30b0a5e1a204aabae7f5faa0996936f-source.js`.
_satellite.__registerScript('https://assets.adobedtm.com/ccc66c06b30b/dec9e8a112d6/05828be5cb90/RCa30b0a5e1a204aabae7f5faa0996936f-source.min.js', "!function(){var e=document.createElement(\"div\");e.id=\"consent_blackbar\",e.style=\"position:fixed; bottom:0px; z-index:1000000; width:100%\",e.dataset=e.dataset||{},e.dataset.sapUiPreserve=\"consent_blackbar\",document.body.appendChild(e)}(),function(){var e=\"teconsent\";\"undefined\"!=typeof trustArcDiv&&\"\"!==trustArcDiv&&(e=trustArcDiv);var t=\"//consent.trustarc.com/notice?domain=news.sap.com&c=\"+e+\"&gtm=1&js=nj&noticeType=bb&text=true&pn=1-0&privacypolicylink=\",r=(window.location.hostname.toLocaleLowerCase(),\"https://www.sap.com/about/legal/privacy.html\");t+=r=encodeURIComponent(r);var o=document.createElement(\"SCRIPT\");o.async=!0,o.src=t,document.head.appendChild(o)}(),window.addEventListener(\"message\",(function(e){if(!(e.origin.indexOf(\"consent-pref.trustarc.com\")<0)){var t=JSON.parse(e.data);t&&\"remove_iframe\"===t.message&&(sessionStorage.setItem(\"referrerBeforeTrustArcReload\",document.referrer),sessionStorage.setItem(\"referrerBeforeTrustArcReloadUpdateTime\",(new Date).getTime()),window.location.reload())}})),document.body.addEventListener(\"click\",(function(e){e&&e.target&&\"truste-consent-button\"===e.target.id&&(sessionStorage.setItem(\"referrerBeforeTrustArcReload\",document.referrer),sessionStorage.setItem(\"referrerBeforeTrustArcReloadUpdateTime\",(new Date).getTime()),setTimeout((function(){window.location.reload()}),1e3))}));");