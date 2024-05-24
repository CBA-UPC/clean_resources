// For license information, see `https://assets.adobedtm.com/5ef092d1efb5/80899f83bd8d/3aabd82aa1cb/RC20323210b2624817b8c3df3c97e72b41-source.js`.
_satellite.__registerScript('https://assets.adobedtm.com/5ef092d1efb5/80899f83bd8d/3aabd82aa1cb/RC20323210b2624817b8c3df3c97e72b41-source.min.js', "null!=window.wdgtagging&&(window.wdgtagging.oneds=window.wdgtagging.oneds||{},function(t,a,o,r){o.tagPartnerName=function(t){!r(t).attr(\"data-bi-prtnm\")&&t.href&&r.trim(t.hostname)&&!t.hostname.match(/javascript|^#|xbox\\.com/i)&&r(t).attr(\"data-bi-prtnm\",t.hostname)},o.tagChooseContentType=function(t){return t.find(\"img\").length>0||t.find(\"picture\").length>0?\"image\":i(t,\"class\",\"glyph-play\")&&(t.find(\"span\").length<=0||i(t.find(\"span\"),\"class\",\"screen-reader\"))||i(t,\"class\",\"mscom-popup-close|m-back-to-top|video_pp_button|ps-lightbox-close\")||t.is(\"button\")?\"button\":\"text\"};var i=function(t,a,o){var i=r(t),e=new RegExp(o,\"i\");return i.attr(a)&&i.attr(a).match(e)};r(document).on(\"mousedown\",\"a:not([data-m]):not([data-bi-type]), button:not([data-m]):not([data-bi-type])\",(function(){r(this).attr(\"data-bi-type\",o.tagChooseContentType(r(this)))})),o.tagProdSkuId=function(t){var a,o;r(t).is(\"a\")&&(o=!0);var i=r(t).attr(\"data-cta-href\");if(!o&&i&&\"\"!=i){var e=document.createElement(\"A\");e.href=i,a=r(e)}else a=r(t);var n=a.is(\"A\")?a[0].pathname:\"\",d=a.is(\"A\")?a[0].hostname:\"\",s=a.is(\"A\")?a[0].search:\"\";if(n.match(/onerf\\/signin/i)){var c=document.createElement(\"a\");if(c.href=window.wdgtagging.util.getQueryParam(\"ru\",s),!c||!r(c).attr(\"href\"))return;n=r(c)[0].pathname||\"\",d=r(c)[0].hostname||\"\",s=r(c)[0].search||\"\"}var m,h,l,g=(a=r(t)).find(\"button\");if(n.match(/productID/i))a.attr(\"data-bi-product\",n.split(\"productID\")[1]);else if(s.match(/pid\\=/i)){var u=window.wdgtagging.util.getQueryParam(\"pid\",s);a.attr(\"data-bi-product\",u)}else d.match(/xbox.com/gi)&&n.match(/\\/..-..\\/configure\\//i)?(l=(m=n.substring(n.indexOf(\"/configure\")).split(\"/\")).length>2?m[2]:null,a.attr(\"data-bi-product\",l)):d.match(/xbox.com/gi)&&n.match(/\\/games\\/store\\//i)?(l=(m=n.substring(n.indexOf(\"/games/store\")).split(\"/\")).length>4?m[4]:null,a.attr(\"data-bi-product\",l)):n.match(/\\/store\\/(b|d|config|buy|p)\\//i)||n.match(/\\/store\\/configure\\/xbox-design-lab/gi)?(l=(m=n.substring(n.indexOf(\"/store\")).split(\"/\")).length>4?m[4]:null,a.attr(\"data-bi-product\",l)):n.match(/\\/store\\/build/)?(produId=n.split(\"/\")[5],a.attr(\"data-bi-product\",produId)):a.is(\"[data-xbbigid]\")&&a.attr(\"data-bi-product\",a.attr(\"data-xbbigid\"));if(s.match(/sid\\=/i))h=window.wdgtagging.util.getQueryParam(\"sid\",s),a.attr(\"data-bi-sku\",h);else if(n.match(/\\/store\\/(d|config|p)\\//i)){var p=m.length>5?m[5]:null;a.attr(\"data-bi-sku\",p)}else if(d.match(/xbox.com/gi)&&n.match(/\\/games\\/store\\//i)){p=(m=n.substring(n.indexOf(\"/games/store\")).split(\"/\")).length>5?m[5]:null;a.attr(\"data-bi-sku\",p)}if(!a.attr(\"data-bi-product\")){var f=a.attr(\"data-updated-productid\"),b=a.attr(\"data-special-productid\"),w=null!=b&&b.length>1?b:f;null!=w&&w.length>1&&(k=w.split(\"/\")[0],h=w.split(\"/\")[1],k&&(a.attr(\"data-bi-product\",k),g.attr(\"data-bi-product\",k)),h&&(a.attr(\"data-bi-sku\",h),g.attr(\"data-bi-sku\",h)))}if(!a.attr(\"data-bi-product\"))if(null!=a.attr(\"data-productId\")||null!=a.attr(\"data-bigid\")||null!=a.parent().attr(\"data-bigid\")||null!=a.parent().attr(\"data-productId\")){var v=null!=a.attr(\"data-productId\")?a.attr(\"data-productId\"):a.parent().attr(\"data-productId\");if(v||(v=null!=a.attr(\"data-bigid\")?a.attr(\"data-bigid\"):a.parent().attr(\"data-bigid\")),v){var k=v.split(\"/\")[0],x=v.split(\"/\")[1];k&&(a.attr(\"data-bi-product\",k),g.attr(\"data-bi-product\",k)),x&&(a.attr(\"data-bi-sku\",x),g.attr(\"data-bi-sku\",x))}}else if(a.attr(\"onclick\")&&a.attr(\"onclick\").match(/(xboxContextualStore|OpenWithExp)/i)){var A=a.attr(\"onclick\").match(/([\\w]+)\\(['\"]?([\\w]+)?['\"]?,?['\"]?([\\w]+)?['\"]?\\)/),L={open:2,openwithexp:3},y=1;if(A&&A[y]){var E=r.trim(A[y].toLowerCase()),R=(u=A[L[E]])||null;a.attr(\"data-bi-product\",R)}}if(!a.attr(\"data-bi-product\")&&n.match(/\\/(..\\-..\\/)?p\\//gi)){var C=n.split(\"/\"),T=n.match(/\\/(..\\-..)\\//i);k=T?C[4]:C[3],h=\"\",T&&C.length>5?h=C[5]:!T&&C.length>4&&(h=C[4]),a.attr({\"data-bi-sku\":h,\"data-bi-product\":k})}},o.tagProdName=function(t){var a,i;r(t).is(\"a\")&&(i=!0);var e=r(t).attr(\"data-cta-href\");if(!i&&e&&\"\"!=e){var n=document.createElement(\"A\");n.href=e,a=r(n)}else a=r(t);var d,s,c=a.is(\"A\")?a[0].pathname:\"\",m=a.is(\"A\")?a[0].hostname:\"\",h=a.is(\"A\")?a[0].search:\"\";if(c.match(/onerf\\/signin/i)){var l=document.createElement(\"a\");if(l.href=window.wdgtagging.util.getQueryParam(\"ru\",h),!l||!r(l).attr(\"href\"))return;c=r(l)[0].pathname||\"\",m=r(l)[0].hostname||\"\",h=r(l)[0].search||\"\"}if(a=r(t),c.match(/\\/store\\/(b|d|config|buy|p)\\//i))s=(d=c.substring(c.indexOf(\"/store\")).split(\"/\")).length>=4?d[3].replace(/\\-/g,\" \"):null,a.attr(\"data-bi-prod\",o.tlcStr(s));else if(m.match(/xbox.com/gi)&&c.match(/\\/games\\/store\\//i))s=(d=c.substring(c.indexOf(\"/games/store\")).split(\"/\")).length>3?d[3].replace(/\\-/g,\" \"):null,a.attr(\"data-bi-prod\",o.tlcStr(s));else if(c.match(/product/i)){var g=c.split(\"/\");s=4==g.length?g[2].replace(/\\-/g,\" \"):g[3].replace(/\\-/g,\" \"),a.attr(\"data-bi-prod\",o.tlcStr(s))}else if(c.match(/\\/store\\/build\\//gi)||c.match(/\\/store\\/buy/gi)){var u=window.location.pathname.split(\"/\");if(null===(s=6==u.length?u[3].replace(/\\/-/g,\" \")+\"-\"+u[4].replace(/\\-/g,\" \")+\" \"+u[5].replace(/\\-/g,\" \"):null)){var p=c.split(\"/\");s=6==p.length?p[4].replace(/\\/-/g,\" \"):null}a.attr(\"data-bi-prod\",o.tlcStr(s))}else if(c.match(/\\/(..\\-..\\/)?p\\//gi)){var f=c.split(\"/\");s=c.match(/\\/(..\\-..)\\//i)?f[3].replace(/\\-/g,\" \"):f[2].replace(/\\-/g,\" \"),a.attr(\"data-bi-prod\",o.tlcStr(s))}},o.tagPartnerLinks=function(t){if(void 0!==r(t)){var a,i,e;r(t).is(\"a\")&&(e=!0);var n=r(t).attr(\"data-cta-href\");if(!e&&n&&\"\"!=n){var d=document.createElement(\"A\");d.href=n,a=(i=r(d)).attr(\"href\")}else a=r(t).attr(\"href\"),i=r(t);var s=i[0].hostname||\"\";if(a&&!1===a.startsWith(\"#\")){var c=r.trim(r(t).attr(\"data-retailer\")).toLowerCase();if(a&&(a.match(/microsoft.com\\//i)&&a.match(/\\/(store|p)\\//i)||a.match(/\\/games\\/store\\//i)||a.match(/xbox.com\\/..-..\\/configure\\//i)))c=\"ms store\",o.tagProdSkuId(t);else if(a&&a.match(/^https?:\\/\\/login\\.live\\.com\\//i)){var m=a.replace(/.*\\&wreply=(.*)/,\"$1\").split(\"&\")[0];if(m){var h=decodeURIComponent(m).replace(/^https?:\\/\\/(www.)?microsoft.com\\/(..\\-..\\/)?store\\/(.*)/,\"$3\");if(h.match(/^buy\\?pid=.+/i)){var l=h.replace(/^buy\\?pid=(.*)/,\"$1\").split(\"&\")[0].toUpperCase();l&&t.attr({\"data-bi-product\":l});var g=h.replace(/.*sid=(.*)/,\"$1\").split(\"&\")[0].toUpperCase();g&&t.attr({\"data-bi-sku\":g})}}}c&&(o.tagGenericName(t),t.attr({\"data-bi-prtnm\":c,\"data-bi-bhvr\":\"PARTNERREFERRAL\",\"data-bi-type\":o.tagChooseContentType(t)})),(!a.match(/javascript:void\\(0\\)|xbox.com/i)||a.match(/\\/games\\/store\\//i)||a.match(/xbox.com\\/..-..\\/configure\\//i))&&t.attr(\"data-bi-prtid\",s)}}},o.tagMsStoreLink=function(t){o.tagProdName(r(t)),o.tagPartnerLinks(r(t)),r(t).attr({\"data-bi-prtnm\":\"ms store\",\"data-bi-bhvr\":\"PARTNERREFERRAL\",\"data-bi-type\":o.tagChooseContentType(r(this))})};var e=\"A[href*='apps.apple.com']:not([data-m]), A[href*='itunes.apple.com']:not([data-m]), A[href*='aka.ms/xbox.events.ios']:not([data-m]), A[href*='aka.ms/xbox.events.android']:not([data-m]), A[href*='play.google']:not([data-m]), A[href*='//go.onelink.me/app']:not([data-m]), A[href*='ms-windows-store:']:not([data-m]), a[href*='XboxFamilyBetaAndroid']:not([data-m]), a[href*='XboxFamilyBetaiOS']:not([data-m]),  a[href*='galaxystore.samsung.com']:not([data-m]),  a[href*='Aka.ms/XboxFamilySettingsiOS']:not([data-m]),  a[href*='Aka.ms/XboxFamilySettingsAndroid']:not([data-m]),  a[href*='testflight.apple.com']:not([data-m])\",n=\"button[data-cta-href*='ms-windows-store'],button[data-uri*='ms-windows-store']\";r(\"a[data-retailer]\").each((function(){r(this).is(e)||o.tagPartnerLinks(r(this))})),r(document).on(\"mousedown\",\"a[data-retailer]\",(function(){o.tagPartnerLinks(r(this))}));var d=\" A[href*='marketplace.xbox.com'][data-retailer][data-retailer!='']:not([data-m]), a[href*='microsoftstore']:not([data-m]),  a[href*='microsoft.com'][href*='/store/'],[id*='ContentBlockList']  a[href*='microsoft.com'][href*='/store/'],[id*='TopContentBlockList']  a[href*='microsoft.com'][href*='/store/']:not([data-m]),  a[href*='microsoft.com'][href*='/p/']:not([data-m]), a[href*='microsoft.com'][href*='/d/']:not([data-m])\";r(d).each((function(){o.tagMsStoreLink(r(this))})),r(document).on(\"mousedown\",d,(function(){o.tagMsStoreLink(r(this))}));var s=\" [id*='ContentBlockList'] a[href*='microsoft.com'][href*='/p/'], [id*='ContentBlockList'] a[href*='microsoft.com'][href*='/d/'], [id*='TopContentBlockList'] a[href*='microsoft.com'][href*='/p/'], [id*='TopContentBlockList'] a[href*='microsoft.com'][href*='/d/'], .c-dialog a[href*='microsoft.com'][href*='/p/'], .c-dialog a[href*='microsoft.com'][href*='/d/'], .c-dialog a[href*='microsoft.com'][href*='/store/']\";r(s).each((function(){o.tagMsStoreLink(r(this))})),r(document).on(\"mousedown\",s,(function(){o.tagMsStoreLink(r(this))}));var c=\"a[href*='/games/store/'], a[href*='xbox.com'][href*='/configure/'],button[data-cta-href*='/configure/']\";r(c).each((function(){o.tagMsStoreLink(r(this))})),r(document).on(\"mousedown\",c,(function(){o.tagMsStoreLink(r(this))})),window.location.pathname.match(/\\/developers\\/creators-program/gi)&&r(document).on(\"mousedown\",\" #ContentBlockList_4 A:not(a[href*='docs.microsoft.com']), #ContentBlockList_5 a\",(function(){var t=this.href.split(\"/\")[2].replace(\"www.\",\"\");r(this).attr({\"data-bi-bhvr\":\"PARTNERREFERRAL\",\"data-bi-prtnm\":t,\"data-bi-type\":o.tagChooseContentType(r(this))})})),r(document).on(\"mousedown\",\" A:not([data-bi-product]):not([data-m]),[id*='ContentBlockList'] A:not([data-bi-product])\",(function(){jqThis=r(this);try{o.tagProdSkuId(jqThis),jqThis.attr(\"data-productid\").length>0?jqThis.attr(\"data-bi-product\",jElem.attr(\"data-productid\")):jqThis.attr(\"productbuyxmlid\").length>0&&jqThis.attr(\"data-bi-product\",jElem.attr(\"productbuyxmlid\"))}catch(t){o.debugLog(\"Error Tagging Product ID and SKU ID in the script\"+t)}})),window.location.pathname.match(/\\/promotions\\/voyage/gi)&&r(document).on(\"mousedown\",\".center-mod A[href*='app.appsflyer']\",(function(){var t=this.href.split(\"/\")[2].replace(\"www.\",\"\");r(this).attr({\"data-bi-bhvr\":\"DOWNLOADCOMMIT\",\"data-bi-prtnm\":t,\"data-bi-type\":o.tagChooseContentType(r(this))})})),window.location.pathname.match(/\\/promotions\\/xbox-cutouts/gi)&&r(document).on(\"mousedown\",\".m-content-placement-item a[href*='query.prod.cms.rt']\",(function(){r(this).attr(\"data-bi-bhvr\",\"DOWNLOADCOMMIT\")})),o.tagDownloadCommit=function(t){var a=r(t).attr(\"data-retailer\")||r(t).attr(\"data-cta-href\")||r(t).attr(\"data-uri\")||t.hostname||\"\";(r(t).is(\"a[href]\")&&r(t).attr(\"href\").match(/ms-windows-store:/gi)||a.match(/ms-windows-store:/gi))&&(a=\"ms store\"),r(t).attr({\"data-bi-bhvr\":\"DOWNLOADCOMMIT\",\"data-bi-prtnm\":a,\"data-bi-type\":o.tagChooseContentType(r(t))})};try{r(e).each((function(){o.tagDownloadCommit(this)})),r(n).each((function(){o.tagDownloadCommit(this)}))}catch(t){o.debugLog(\"Error while tagging links with DOWNLOADCOMMIT on pageload. Error: \"+t)}r(document).on(\"mousedown\",e,(function(){try{o.tagDownloadCommit(this)}catch(t){o.debugLog(\"Error while tagging links with DOWNLOADCOMMIT on pageAction. Error: \"+t)}})),r(document).on(\"mousedown\",n,(function(){try{o.tagDownloadCommit(this)}catch(t){o.debugLog(\"Error while tagging links with DOWNLOADCOMMIT on pageAction. Error: \"+t)}})),window.location.pathname.match(/xbox-one-s\\/family-entertainment\\/?/gi)&&r(document).on(\"mousedown\",\" A[href*='/live-apps/']:not([data-m])\",(function(){var t=this.pathname.split(\"/\");t.length>5&&(t=t[5]),r(this).attr({\"data-bi-prod\":t,\"data-bi-prtnm\":\"ms store\",\"data-bi-bhvr\":\"PARTNERREFERRAL\"})})),window.location.pathname.match(/\\/promotions\\/game-pass-offer\\/?/gi)&&r(document).on(\"mousedown\",\".m-area-heading.threeliner A:not([data-retailer])\",(function(){r(this).attr({\"data-bi-prtnm\":o.tlcStr(this.hostname.replace(\"www.\",\"\")),\"data-bi-bhvr\":\"PARTNERREFERRAL\"})})),r(\"a[href]:not([data-bi-prtnm])\").each((function(){var t=this;o.tagPartnerName(t)})),r(document).on(\"mousedown\",\"a[href]:not([data-bi-prtnm]), .c-age-rating a[href]\",(function(){r(this).is(\".c-age-rating a[href]\")&&r(this).removeAttr(\"data-bi-prtnm\"),o.tagPartnerName(this)})),window.location.pathname.match(/\\/..-..\\/promotions\\/tus-juegos-digitales\\/home/gi)&&r(document).on(\"mousedown\",\".container-logos .logos A[href], #ContentBlockList_5 section.m-content-placement-item A[href]\",(function(){r(this).attr(\"data-bi-bhvr\",\"PARTNERREFERRAL\")})),r(document).on(\"mousedown\",\"a[href*='stores.footlocker'], a[href*='www.footlocker']\",(function(){r(this).attr(\"data-bi-bhvr\",\"PARTNERREFERRAL\")})),window.location.pathname.match(/\\/promotions\\/control-your-discount/gi)&&r(document).on(\"mousedown\",\".container-retailers a[href]\",(function(){r(this).attr(\"data-bi-bhvr\",\"PARTNERREFERRAL\")})),o.tagMSLinkLightbox=function(t){r(t).attr(\"data-retailer\",\"ms store\"),o.tagMsStoreLink(r(t));var a=r(t).closest(\".hatchretailer[data-retailerpriority=0]\");r(a).attr({\"data-gm-store\":r(t).attr(\"data-bi-prtnm\"),\"data-gm-productId\":r(t).attr(\"data-bi-product\"),\"data-gm-productName\":r(t).attr(\"data-bi-prod\"),\"data-gm-productSku\":r(t).attr(\"data-bi-sku\")})},r(document).on(\"mousedown\",\".hatchProd[data-js-dialog-show]\",(function(){var t=r(this).attr(\"data-js-dialog-show\"),a=r(\".hatchDialog[id*=\"+t+\"][data-product-name]\").attr(\"data-product-name\"),o=r(this).attr(\"data-hatch-bigids\");r(this).attr({\"data-bi-bhvr\":\"INTENTTOBUY\",\"data-bi-prtnm\":\"gethatch\",\"data-bi-prod\":a,\"data-bi-product\":t,\"data-bi-sku\":o})})),r(document).on(\"mousedown\",\".c-dialog:not([data-bi-area])\",(function(){o.tagLightboxArea()})),r(document).on(\"mouseenter\",\".c-dialog\",(function(){r(this).find(\"input:not([data-bi-name])\").length&&o.tagInputElem(),r(this).find(\".hatchretailer a[href*=microsoft][href*='/p/'], .hatchretailer a[href*=microsoft][href*='/d/']\").each((function(){var t=this;o.tagMSLinkLightbox(r(t))}))})),r(document).on(\"mousedown\",\".c-dialog .hatchretailer a[href]\",(function(){if(r(this).attr(\"href\").match(/microsoft.com/i))o.tagMSLinkLightbox(r(this));else{var t=r(this).closest(\".hatchretailer[data-retailerpriority]\"),a=r(t).siblings(\"[data-retailerpriority][data-gm-store]\");if(a.length)var i=a.attr(\"data-gm-productName\"),e=a.attr(\"data-gm-productId\"),n=a.attr(\"data-gm-productSku\");else{var d=r(this).closest(\".hatchDialog[data-product-name]\");if(d.length)i=d.attr(\"data-product-name\"),e=d.attr(\"id\"),n=d.attr(\"data-product-spec\")}r(this).attr({\"data-bi-prod\":i,\"data-bi-product\":e,\"data-bi-sku\":n})}}))}(window.wdgtagging,window.wdgtagging.oneds,window.wdgtagging.util,window.jQuery));");current-redirect-confirm" lang="es" dir="ltr" hreflang="es">
                                    Ir a {0}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

	</div>

	






    






    
    <div class="modal fade renderModalOnPageLoad" id="emailSup-modal" tabindex="-1" role="dialog" data-emailsup-selector-endpoint="/aemapi/emailSupApi.emailSupSelectorData.json" aria-labelledby="email-modal-header" aria-hidden="true" data-automation-test-id="emailSup-modal-">
        <div class="modal-dialog  " data-automation-test-id="modal-dialog-">
            <div class="modal-content">
                <div class="modal-header">
                    <div class="emailSup-swapContent">
                        
    <h2 data-automation-test-id="heading-" class="    modal-title " id="email-modal-header">
            
    
    
        
            Registrarme
        
        
    

    </h2>

                    </div>
                    
                    <div class="emailSup-swapContent" style="display: none;">
                        
    <h2 data-automation-test-id="heading-" class="    modal-title ">
            
    
    
        
            ¡Gracias!
        
        
    

    </h2>

                    </div>
                    
    <button data-bi-bhvr="1234" data-bi-cT="Button" data-bi-pA="Body" class="close" aria-label="Cerrar ventana de diálogo" data-dismiss="modal" type="button">
        
    </button>

                </div>
                <div class="modal-body">
                    <form class="emailSup-swapContent" method="post" id="emailSignupForm" novalidate data-automation-test-id="form-">
                        <div>
                            <div><p>Mantente informado acerca de las ofertas especiales, los productos más recientes, los eventos y otras cosas de Microsoft Store. Disponible para residentes de España.</p></div>

                            <div class="form-group">
                                <label for="xc475ffbb5d784f4bbb743673ab8b5da0" data-automation-test-id="formLabel-input-">Dirección de correo electrónico (obligatoria)</label>
                                
    <input class="form-control userEmail " required data-feedback-content="Escribe un correo electrónico válido" data-feedback="feedback-xc475ffbb5d784f4bbb743673ab8b5da0" aria-describedby="feedback-xc475ffbb5d784f4bbb743673ab8b5da0" aria-invalid="false" pattern="[^@]+@[^@]+\.[a-zA-Z]{2,}" size="64" autocomplete="email" name="userEmail" type="email" id="xc475ffbb5d784f4bbb743673ab8b5da0"/>


    <div class="invalid-feedback" id="feedback-xc475ffbb5d784f4bbb743673ab8b5da0"></div>

                            </div>

                            <div class="form-group">
                                <label for="xc26ff5ea228543228ce4d845d0af3ec6" data-automation-test-id="formlabel-location-">Ubicación (obligatoria)</label>
                                <div class="custom-select">
                                    <select class="custom-select-input countryList" id="xc26ff5ea228543228ce4d845d0af3ec6" data-automation-test-id="form-select-" data-attribute-lang="es-ES">
                                        
                                            <option value="AR">Argentina</option>
                                        
                                            <option value="AU">Australia</option>
                                        
                                            <option value="AT">Austria</option>
                                        
                                            <option value="BE">Bélgica</option>
                                        
                                            <option value="BR">Brasil</option>
                                        
                                            <option value="CA">Canadá</option>
                                        
                                            <option value="CL">Chile</option>
                                        
                                            <option value="CO">Colombia</option>
                                        
                                            <option value="CZ">República Checa</option>
                                        
                                            <option value="DK">Dinamarca</option>
                                        
                                            <option value="FI">Finlandia</option>
                                        
                                            <option value="FR">Francia</option>
                                        
                                            <option value="DE">Alemania</option>
                                        
                                            <option value="HU">Hungría</option>
                                        
                                            <option value="IN">India</option>
                                        
                                            <option value="IE">Irlanda</option>
                                        
                                            <option value="IL">Israel</option>
                                        
                                            <option value="IT">Italia</option>
                                        
                                            <option value="JP">Japón</option>
                                        
                                            <option value="LU">Luxemburgo</option>
                                        
                                            <option value="MX">México</option>
                                        
                                            <option value="NL">Países Bajos</option>
                                        
                                            <option value="NZ">Nueva Zelanda</option>
                                        
                                            <option value="NO">Noruega</option>
                                        
                                            <option value="PL">Polonia</option>
                                        
                                            <option value="PT">Portugal</option>
                                        
                                            <option value="SG">Singapur</option>
                                        
                                            <option value="ZA">Sudáfrica</option>
                                        
                                            <option value="KR">Corea del Sur</option>
                                        
                                            <option value="ES">España</option>
                                        
                                            <option value="SE">Suecia</option>
                                        
                                            <option value="TR">Turquía</option>
                                        
                                            <option value="CH">Suiza</option>
                                        
                                            <option value="GB">Reino Unido</option>
                                        
                                            <option value="US">Estados Unidos</option>
                                        
                                    </select>
                                    <span class="custom-select-arrow" aria-hidden="true"></span>
                                </div>
                            </div>

                            <div class="form-group">
                                <div id="consentNotCanada">
                                    Me gustaría recibir información, sugerencias y ofertas de Microsoft Store y de otros productos y servicios de Microsoft.
                                    <span class="sr-only">Haz clic aquí para leer la</span>
                                    <a data-bi-cn="Privacy Statement" data-bi-ecn="Privacy Statement" data-bi-hn="Registrarme" data-bi-ehn="Registrarme" data-bi-bhvr="0" data-bi-compnm="Modal: Default" data-bi-ct="Link" data-bi-pa="Body" href="https://go.microsoft.com/fwlink/?LinkId=521839" target="_blank" class="privacyStatementLink" data-automation-test-id="form-privacy-">
                                        Declaración de privacidad
                                    </a>
                                    <span class="sr-only">.</span>
                                </div>
                                <div id="consentCanada" style="display:none" data-automation-test-id="consent-text-">
                                    <p>Al hacer clic en Registrarse, confirmo que deseo recibir información de Microsoft y su familia de empresas sobre Microsoft Store y otros productos y servicios de Microsoft.</p><p>Para retirar el consentimiento o gestionar las preferencias de contacto, visita el <a aria-labelledby="pcm-sr-text" href="https://go.microsoft.com/fwlink/?linkid=243189" target="_blank">Administrador de comunicaciones promocionales</a>.<span class="sr-only" id="pcm-sr-text">Haz clic aquí para abrir el Administrador de comunicaciones promocionales</span></p>
                                    <span class="sr-only">Haz clic aquí para leer la</span>
                                    <a data-bi-cn="Privacy Statement" data-bi-ecn="Privacy Statement" data-bi-hn="Registrarme" data-bi-ehn="Registrarme" data-bi-bhvr="0" data-bi-compnm="Modal: Default" data-bi-ct="Link" data-bi-pa="Body" href="https://go.microsoft.com/fwlink/?LinkId=521839" target="_blank" class="privacyStatementLink" data-automation-test-id="privacy-">
                                        Declaración de privacidad
                                    </a>
                                    <span class="sr-only">.</span>
                                </div>
                            </div>

                            

                            
    <button data-bi-cN="Registrarme" data-bi-ecN="Registrarme" data-bi-bhvr="210" data-bi-cT="Button" data-bi-pA="Body" class="btn btn-primary form-group" type="submit" id="signUpButton">
        Registrarme
    </button>

                        </div>
                    </form>
                    
                    <div class="emailSup-swapContent" style="display: none;">
                        <p data-automation-test-id="close-description-">Ya estás registrado para recibir correos electrónicos de Microsoft Store</p>
                    </div>
                </div>
                <div class="modal-footer">
                </div>
            </div>
        </div>
    </div>



	

	
		
    
    
        
    
<link rel="stylesheet" href="/etc.clientlibs/microsoft/components/content/chat/v1/chat/clientlibs/site-performance-enhancement.min.ACSHASH6bc698c78c74d43ae7e47ae3beed9603.css" type="text/css">



    
    <div id="msChatContainer">
        <div class="s-multiflyout-bottom multiflyout-hideTextChat" role="region" aria-label="Chatea con un experto">
            <div class="x-flyout " data-grid="col-12">
                <button class="btn btn-primary  d-sm-inline-block c-button f-primary multiflyout-button innerwidth-place-holder expertChatButton" aria-expanded="false" id="top-multiflyout-button" type="button" data-js-flyout="lp-iframe-container" aria-controls="lp-iframe-container" data-bi-cN="¿Tienes alguna pregunta? Habla con un experto" data-bi-ecn="Questions? Talk to an expert" data-bi-bhvr="180" data-bi-cT="Button" data-bi-pa="Body" data-bi-compnm="Chat Launch" style="visibility: hidden;">
                    ¿Tienes alguna pregunta? Habla con un experto
                </button>
            </div>
        </div>
        <div id="LivePerson" class="lp-live-person" data-bi-cN="LivePerson" data-bi-cT="Module_onestore-livepersonmodule" data-bi-id="m3r1a3" data-bi-sn="3" data-bi-an="r1a3" data-module-id="Hero Category Page|footerRegion|coreui-region|LivePerson|OneStore-LivePersonModule">

            <div>
                <div class="c-flyout flyout-nohide" id="lp-iframe-container" role="dialog" aria-label="Chatea con un experto" data-js-flyout-placement="top" data-js-flyout-dismissible="false" aria-hidden="true">

                    <button class="c-glyph glyph-cancel lp-iframe-close x-hidden" aria-label="Cerrar" tabindex="0"></button>

                    <iframe tabindex="-1" title="Ventana de chat en directo para ponerte en contacto con el equipo de soporte técnico de Microsoft" class="lp-iframe-window" data-isGreeterBotChat="True" data-isMobile="False" data-isOfficeCommercial="False" data-domainUrl="https://publisher.liveperson.net" data-iframeSrc="https://publisher.liveperson.net/iframe-le-tag/iframe-cs.html?lpsite=60270350&amp;lpsection=store-sales-es-es&amp;buttons=lpChatService,lpChatSales" name="lpSS_89316509127" id="lpSS_89316509127" allow="camera;microphone" data-islpCookieMitigationEnabled="True" sandbox="allow-scripts allow-same-origin allow-popups allow-forms"> <!--lgtm [js/insufficient-iframe-sandboxing]/-->
                    </iframe>
                    
                    

                </div>
            </div>

            <div>

                <div class="c-flyout flyout-nohide " id="lp-proactive-invite" role="alert" data-js-flyout-placement="top" data-js-flyout-dismissible="false" aria-hidden="true" data-lpcurl="https://www.microsoft.com/es-es/store/b/xbox" aria-labelledby="lp-proactive-invite-chat-heading">

                    <div class="text-center pt-3 p-1 bg-black position-fixed proactive-chat" id="lp-proactive-chat">
                        <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/chat-2?scl=1" alt/>
                        <p class="chat-heading mb-3" id="lp-proactive-invite-chat-heading">¿Necesitas ayuda?</p>
                        <div class="chat-box">
                            <div class="row">
                                <button class="btn btn-primary btn-block lp-chatnow glyph-append glyph-append-chevron-right chat-box-button" aria-label="¿Necesitas ayuda? Chatea ahora con el equipo de ventas de Microsoft" data-bi-cN="CHATEAR AHORA" data-bi-ecn="Chat Now" data-bi-bhvr="180" data-bi-cT="Button" data-bi-pa="Body" data-bi-compnm="Chat Launch">
                                    CHATEAR AHORA
                                </button>
                            </div>
                            
                            <div class="row">
                                <button class="btn btn-faint-light btn-block lp-nothanks glyph-append glyph-append-chevron-right chat-box-button" aria-label="No, gracias." data-bi-cN="No, gracias." data-bi-ecn="No Thanks" data-bi-bhvr="0" data-bi-cT="Button" data-bi-pa="Body" data-bi-compnm="Chat Launch">
                                    No, gracias.
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        

    </div>
    </div>
    
        
    
<script src="/etc.clientlibs/microsoft/components/content/chat/v1/chat/clientlibs/site-performance-enhancement.min.ACSHASH10e268e8c625d4734b38095c8fd946b3.js"></script>



    

	
	
	
	
		



		
<div class="universalheader" data-component-id="cf9a86dceae618e01d6e6399d243873c">

	

	
		

    

    
        
                




        
        
                
                
            
    
<!-- Start of ADDITIONAL DEBUG INFO ** cv.html **

    CVToken: CASMicrosoftCV1421a8cb.1
  End of ADDITIONAL DEBUG INFO -->

                <!-- Start of ADDITIONAL DEBUG INFO ** uhftemplate.html **

    CVToken: CASMicrosoftCV1421a8cb.1
  End of ADDITIONAL DEBUG INFO -->
                <link rel="stylesheet" href="https://www.microsoft.com/onerfstatics/marketingsites-neu-prod/west-european/shell/_scrf/css/themes=default.device=uplevel_web/29-591900/68-c3a397/f4-0855a6/a8-3dc4a6/f1-3221a1/dc-d4cb46/1f-806835/44-c33a61?ver=2.0&amp;_cf=20210618" type="text/css" media="all" />    <div id="headerArea" class="uhf"  data-m='{"cN":"headerArea","cT":"Area_coreuiArea","id":"a1Body","sN":1,"aN":"Body"}'>
                <div id="headerRegion"      data-region-key="headerregion" data-m='{"cN":"headerRegion","cT":"Region_coreui-region","id":"r1a1","sN":1,"aN":"a1"}' >

    <div  id="headerUniversalHeader" data-m='{"cN":"headerUniversalHeader","cT":"Module_coreui-universalheader","id":"m1r1a1","sN":1,"aN":"r1a1"}'  data-module-id="Category|headerRegion|coreui-region|headerUniversalHeader|coreui-universalheader">
        

                        <div id="epb" class="x-hidden x-hidden-vp-mobile-st uhfc-universal-context context-uhf" data-m='{"cN":"epb_cont","cT":"Container","id":"c1m1r1a1","sN":1,"aN":"m1r1a1"}'>

	<div class="c-uhfh-alert f-information epb-container theme-light" role="dialog" aria-label="Banner promocional" data-m='{"cT":"Container","id":"c1c1m1r1a1","sN":1,"aN":"c1m1r1a1"}' data-pb="[{&quot;Browser&quot;:&quot;non-anaheim&quot;,&quot;ExtensionType&quot;:&quot;windows10only&quot;,&quot;ExtensionUrl&quot;:&quot;https://microsoftstart.msn.com/personalize/newslettersignup?ocid=NL_UHF_Banner&quot;,&quot;BackgroundColorDarkTheme&quot;:&quot;b-black&quot;,&quot;LogoUrlDarkTheme&quot;:&quot;https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW1aaZu?ver=16a9&quot;,&quot;ActionLinkBackgroundColorDarkTheme&quot;:&quot;btn-white&quot;,&quot;BackgroundColorLightTheme&quot;:&quot;b-white&quot;,&quot;LogoUrlLightTheme&quot;:&quot;https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW1aaZu?ver=16a9&quot;,&quot;ActionLinkBackgroundColorLightTheme&quot;:&quot;btn-light-blue&quot;,&quot;Title&quot;:&quot;Registrarse en el boletín&quot;,&quot;Paragraph&quot;:&quot;Las historias principales se entregan gratis en su bandeja de entrada&quot;,&quot;ActionLinkText&quot;:&quot;Registrarse&quot;,&quot;ActionLinkAriaLabel&quot;:&quot;Registrarse&quot;,&quot;DismissText&quot;:&quot;Cerrar&quot;,&quot;DismissAriaLabel&quot;:&quot;Cerrar&quot;,&quot;CookieExpiration&quot;:&quot;30&quot;,&quot;CurrentTheme&quot;:&quot;theme-light&quot;},{&quot;Browser&quot;:&quot;firefox&quot;,&quot;ExtensionType&quot;:&quot;msn&quot;,&quot;ExtensionUrl&quot;:&quot;https://browserdefaults.microsoft.com/BNP/redirect?br=mf&amp;xid=2&amp;channel=uhf&quot;,&quot;BackgroundColorDarkTheme&quot;:&quot;b-blue&quot;,&quot;LogoUrlDarkTheme&quot;:&quot;https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE3zanz?ver=4e18&quot;,&quot;ActionLinkBackgroundColorDarkTheme&quot;:&quot;btn-white&quot;,&quot;BackgroundColorLightTheme&quot;:&quot;b-white&quot;,&quot;LogoUrlLightTheme&quot;:&quot;https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE3zcX5?ver=0d48&quot;,&quot;ActionLinkBackgroundColorLightTheme&quot;:&quot;btn-blue&quot;,&quot;Title&quot;:&quot;Las últimas noticias de todo el mundo&quot;,&quot;Paragraph&quot;:&quot;Obtén la extensión de Bing+MSN&quot;,&quot;ActionLinkText&quot;:&quot;Añádela ahora&quot;,&quot;ActionLinkAriaLabel&quot;:&quot;Añádela ahora&quot;,&quot;DismissText&quot;:&quot;No, gracias&quot;,&quot;DismissAriaLabel&quot;:&quot;No, gracias&quot;,&quot;CookieExpiration&quot;:&quot;30&quot;,&quot;CurrentTheme&quot;:&quot;theme-light&quot;}]" data-pb-g="true">
		<div>
			<div class="c-paragraph">
				<img alt="" data-src="" src="" class="f-img-lzy" />
				<span class="c-text-group pb-content">
					<span class="epb-launch pb-content-heading"></span>
					<span class="epb-text pb-content-text"></span>
				</span>
			</div>
			<span class="c-group">
				<button id="close-epb" class="c-action-trigger c-action-cancel glyph-cancel" data-m='{"cN":"PB-dismiss_nonnav","id":"nn1c1c1m1r1a1","sN":1,"aN":"c1c1m1r1a1"}'></button>
				<a id="epbTryNow" href="" target="_blank" class="epb-launch c-action-trigger c-action-open" data-m='{"cN":"PB-launch_nav","id":"n2c1c1m1r1a1","sN":2,"aN":"c1c1m1r1a1"}'></a>
			</span>
		</div>
	</div>





                            
                        </div>

                        <div data-m='{"cN":"cookiebanner_cont","cT":"Container","id":"c2c1m1r1a1","sN":2,"aN":"c1m1r1a1"}'>

<div id="uhfCookieAlert" data-locale="es-es">
    <div id="msccBannerV2"></div>
</div>

                            
                        </div>




        <a id="uhfSkipToMain" class="m-skip-to-main" href="javascript:void(0)" data-href="#mainArea" tabindex="0" data-m='{"cN":"Skip to content_nonnav","id":"nn3c1m1r1a1","sN":3,"aN":"c1m1r1a1"}'>Saltar al contenido principal</a>


<header class="c-uhfh context-uhf no-js c-sgl-stck c-category-header " itemscope="itemscope" data-header-footprint="/RetailStore2/03_XboxStoreL1Header, fromService: True"   data-magict="true"   itemtype="http://schema.org/Organization">
    <div class="theme-light js-global-head f-closed  global-head-cont" data-m='{"cN":"Universal Header_cont","cT":"Container","id":"c4c1m1r1a1","sN":4,"aN":"c1m1r1a1"}'>
        <div class="c-uhfh-gcontainer-st">
            <button type="button" class="c-action-trigger c-glyph glyph-global-nav-button" aria-label="All Microsoft expand to see list of Microsoft products and services" initialState-label="All Microsoft expand to see list of Microsoft products and services" toggleState-label="Close All Microsoft list" aria-expanded="false" data-m='{"cN":"Mobile menu button_nonnav","id":"nn1c4c1m1r1a1","sN":1,"aN":"c4c1m1r1a1"}'></button>
            <button type="button" class="c-action-trigger c-glyph glyph-arrow-htmllegacy c-close-search" aria-label="Cerrar la b&#250;squeda" aria-expanded="false" data-m='{"cN":"Close Search_nonnav","id":"nn2c4c1m1r1a1","sN":2,"aN":"c4c1m1r1a1"}'></button>
                    <a id="uhfLogo" class="c-logo c-sgl-stk-uhfLogo" itemprop="url" href="https://www.microsoft.com" aria-label="Microsoft" data-m='{"cN":"GlobalNav_Logo_cont","cT":"Container","id":"c3c4c1m1r1a1","sN":3,"aN":"c4c1m1r1a1"}'>
                        <img alt="" itemprop="logo" class="c-image" src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31" role="presentation" aria-hidden="true" />
                        <span itemprop="name" role="presentation" aria-hidden="true">Microsoft</span>
                    </a>
            <div class="f-mobile-title">
                <button type="button" class="c-action-trigger c-glyph glyph-chevron-left" aria-label="Ver m&#225;s opciones del men&#250;" data-m='{"cN":"Mobile back button_nonnav","id":"nn4c4c1m1r1a1","sN":4,"aN":"c4c1m1r1a1"}'></button>
                <span data-global-title="P&#225;gina principal de Microsoft" class="js-mobile-title">Juegos</span>
                <button type="button" class="c-action-trigger c-glyph glyph-chevron-right" aria-label="Ver m&#225;s opciones del men&#250;" data-m='{"cN":"Mobile forward button_nonnav","id":"nn5c4c1m1r1a1","sN":5,"aN":"c4c1m1r1a1"}'></button>
            </div>
                    <div class="c-show-pipe x-hidden-vp-mobile-st">
                        <a id="uhfCatLogo" class="c-logo c-cat-logo" href="https://www.microsoft.com/es-es/store/b/xbox?icid=CNavDevicesXbox" aria-label="Juegos" itemprop="url" data-m='{"cN":"CatNav_Juegos_nav","id":"n6c4c1m1r1a1","sN":6,"aN":"c4c1m1r1a1"}'>
                                <span>Juegos</span>
                        </a>
                    </div>
                <div class="cat-logo-button-cont x-hidden">
                        <button type="button" id="uhfCatLogoButton" class="c-cat-logo-button x-hidden" aria-expanded="false" aria-label="Juegos" data-m='{"cN":"Juegos_nonnav","id":"nn7c4c1m1r1a1","sN":7,"aN":"c4c1m1r1a1"}'>
                            Juegos
                        </button>
                </div>



                    <nav id="uhf-g-nav" aria-label="Menú contextual" class="c-uhfh-gnav" data-m='{"cN":"Category nav_cont","cT":"Container","id":"c8c4c1m1r1a1","sN":8,"aN":"c4c1m1r1a1"}'>
            <ul class="js-paddle-items">
                    <li class="single-link js-nav-menu x-hidden-none-mobile-vp uhf-menu-item">
                        <a class="c-uhf-nav-link" href="https://www.microsoft.com/es-es/store/b/xbox?icid=CNavDevicesXbox" data-m='{"cN":"CatNav_Inicio_nav","id":"n1c8c4c1m1r1a1","sN":1,"aN":"c8c4c1m1r1a1"}' > Inicio </a>
                    </li>
                                        <li class="nested-menu uhf-menu-item">
                            <div class="c-uhf-menu js-nav-menu">
                                <button type="button" id="c-shellmenu_51"  aria-expanded="false" data-m='{"cN":"CatNav_Xbox_Consoles_nonnav","id":"nn2c8c4c1m1r1a1","sN":2,"aN":"c8c4c1m1r1a1"}'>Consolas</button>

                                <ul class="" data-class-idn="" aria-hidden="true" data-m='{"cN":"Xbox_Consoles_cont","cT":"Container","id":"c3c8c4c1m1r1a1","sN":3,"aN":"c8c4c1m1r1a1"}'>
        <li class="js-nav-menu single-link" data-m='{"cN":"Xbox_Consoles_AllConsoles_cont","cT":"Container","id":"c1c3c8c4c1m1r1a1","sN":1,"aN":"c3c8c4c1m1r1a1"}'>
            <a id="c-shellmenu_52" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/es-es/store/collections/xboxconsoles?icid=CNav_Xbox_Consoles" data-m='{"cN":"CatNav_Xbox_Consoles_AllConsoles_nav","id":"n1c1c3c8c4c1m1r1a1","sN":1,"aN":"c1c3c8c4c1m1r1a1"}'>Todas las consolas Xbox</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"Xbox_Consoles_XboxOneX_cont","cT":"Container","id":"c2c3c8c4c1m1r1a1","sN":2,"aN":"c3c8c4c1m1r1a1"}'>
            <a id="c-shellmenu_53" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/es-es/store/collections/xboxseriesxconsoles?icid=CNav_Xbox_Series_X" data-m='{"cN":"CatNav_Xbox_Consoles_XboxOneX_nav","id":"n1c2c3c8c4c1m1r1a1","sN":1,"aN":"c2c3c8c4c1m1r1a1"}'>Xbox Series X</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"Xbox_Consoles_XboxSeriesS_cont","cT":"Container","id":"c3c3c8c4c1m1r1a1","sN":3,"aN":"c3c8c4c1m1r1a1"}'>
            <a id="c-shellmenu_54" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/es-es/store/collections/xboxseriessconsoles?icid=CNav_Xbox_Series_S" data-m='{"cN":"CatNav_Xbox_Consoles_XboxSeriesS_nav","id":"n1c3c3c8c4c1m1r1a1","sN":1,"aN":"c3c3c8c4c1m1r1a1"}'>Xbox Series S</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"Xbox_Consoles_XboxCertifiedRefurbished_cont","cT":"Container","id":"c4c3c8c4c1m1r1a1","sN":4,"aN":"c3c8c4c1m1r1a1"}'>
            <a id="c-shellmenu_55" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/es-es/store/collections/xboxconsolesrefurbished?icid=CNav_Xbox_Certified_Refurbished" data-m='{"cN":"CatNav_Xbox_Consoles_XboxCertifiedRefurbished_nav","id":"n1c4c3c8c4c1m1r1a1","sN":1,"aN":"c4c3c8c4c1m1r1a1"}'>Xbox Reacondicionadas certificadas</a>
            
        </li>
                                                    
                                </ul>
                            </div>
                        </li>                        <li class="nested-menu uhf-menu-item">
                            <div class="c-uhf-menu js-nav-menu">
                                <button type="button" id="c-shellmenu_56"  aria-expanded="false" data-m='{"cN":"CatNav_Xbox_XboxAccessories_nonnav","id":"nn4c8c4c1m1r1a1","sN":4,"aN":"c8c4c1m1r1a1"}'>Accesorios</button>

                                <ul class="" data-class-idn="" aria-hidden="true" data-m='{"cN":"Xbox_XboxAccessories_cont","cT":"Container","id":"c5c8c4c1m1r1a1","sN":5,"aN":"c8c4c1m1r1a1"}'>
        <li class="js-nav-menu single-link" data-m='{"cN":"Xbox_AllXboxAccessories_cont","cT":"Container","id":"c1c5c8c4c1m1r1a1","sN":1,"aN":"c5c8c4c1m1r1a1"}'>
            <a id="Todos los accesorios Xbox" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/es-es/store/collections/xboxaccessories?icid=CNav_Xbox_Accessories" data-m='{"cN":"CatNav_Xbox_AllXboxAccessories_nav","id":"n1c1c5c8c4c1m1r1a1","sN":1,"aN":"c1c5c8c4c1m1r1a1"}'>Todos los accesorios Xbox</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"Xbox_Controllers_cont","cT":"Container","id":"c2c5c8c4c1m1r1a1","sN":2,"aN":"c5c8c4c1m1r1a1"}'>
            <a id="Controllers" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/es-es/store/collections/xboxcontrollers?icid=CNav_Xbox_Controllers" data-m='{"cN":"CatNav_Xbox_Controllers_nav","id":"n1c2c5c8c4c1m1r1a1","sN":1,"aN":"c2c5c8c4c1m1r1a1"}'>Mandos Xbox</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"Xbox_Headsets_cont","cT":"Container","id":"c3c5c8c4c1m1r1a1","sN":3,"aN":"c5c8c4c1m1r1a1"}'>
            <a id="c-shellmenu_59" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/es-es/store/collections/xboxheadsets?icid=CNav_Xbox_Headsets" data-m='{"cN":"CatNav_Xbox_Headsets_nav","id":"n1c3c5c8c4c1m1r1a1","sN":1,"aN":"c3c5c8c4c1m1r1a1"}'>Auriculares Xbox</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"Xbox_PCaccessories_cont","cT":"Container","id":"c4c5c8c4c1m1r1a1","sN":4,"aN":"c5c8c4c1m1r1a1"}'>
            <a id="Todos los accesorios Xbox" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/es-es/store/collections/pcgamingaccessories?icid=CNav_Xbox_PC_Accessories" data-m='{"cN":"CatNav_Xbox_PCaccessories_nav","id":"n1c4c5c8c4c1m1r1a1","sN":1,"aN":"c4c5c8c4c1m1r1a1"}'>Accesorios para PC</a>
            
        </li>
                                                    
                                </ul>
                            </div>
                        </li>                        <li class="nested-menu uhf-menu-item">
                            <div class="c-uhf-menu js-nav-menu">
                                <button type="button" id="c-shellmenu_61"  aria-expanded="false" data-m='{"cN":"CatNav_Xbox_XboxGames_nonnav","id":"nn6c8c4c1m1r1a1","sN":6,"aN":"c8c4c1m1r1a1"}'>Game&#160;Pass</button>

                                <ul class="" data-class-idn="" aria-hidden="true" data-m='{"cN":"Xbox_XboxGames_cont","cT":"Container","id":"c7c8c4c1m1r1a1","sN":7,"aN":"c8c4c1m1r1a1"}'>
        <li class="js-nav-menu single-link" data-m='{"cN":"Xbox_Game_Pass_Ultimate_cont","cT":"Container","id":"c1c7c8c4c1m1r1a1","sN":1,"aN":"c7c8c4c1m1r1a1"}'>
            <a id="c-shellmenu_62" class="js-subm-uhf-nav-link" href="https://www.xbox.com/es-es/games/store/xbox-game-pass-ultimate/cfq7ttc0khs0?icid=CNav_Game_Pass_Ultimate" data-m='{"cN":"CatNav_Xbox_Game_Pass_Ultimate_nav","id":"n1c1c7c8c4c1m1r1a1","sN":1,"aN":"c1c7c8c4c1m1r1a1"}'>Xbox Game Pass Ultimate</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"Xbox_Game_Pass_Xbox_PC_cont","cT":"Container","id":"c2c7c8c4c1m1r1a1","sN":2,"aN":"c7c8c4c1m1r1a1"}'>
            <a id="c-shellmenu_63" class="js-subm-uhf-nav-link" href="https://www.xbox.com/es-es/games/store/pc-game-pass/cfq7ttc0kgq8?icid=CNav_PC_Game_Pass" data-m='{"cN":"CatNav_Xbox_Game_Pass_Xbox_PC_nav","id":"n1c2c7c8c4c1m1r1a1","sN":1,"aN":"c2c7c8c4c1m1r1a1"}'>PC Game Pass</a>
            
        </li>
                                                    
                                </ul>
                            </div>
                        </li>                        <li class="nested-menu uhf-menu-item">
                            <div class="c-uhf-menu js-nav-menu">
                                <button type="button" id="c-shellmenu_64"  aria-expanded="false" data-m='{"cN":"CatNav_Xbox_nonnav","id":"nn8c8c4c1m1r1a1","sN":8,"aN":"c8c4c1m1r1a1"}'>Juegos</button>

                                <ul class="" data-class-idn="" aria-hidden="true" data-m='{"cN":"Xbox_cont","cT":"Container","id":"c9c8c4c1m1r1a1","sN":9,"aN":"c8c4c1m1r1a1"}'>
        <li class="js-nav-menu single-link" data-m='{"cN":"Gaming_Xbox_Xbox games_cont","cT":"Container","id":"c1c9c8c4c1m1r1a1","sN":1,"aN":"c9c8c4c1m1r1a1"}'>
            <a id="c-shellmenu_65" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/es-es/store/most-played/games/xbox?icid=CNav_Xbox_Games" data-m='{"cN":"CatNav_Gaming_Xbox_Xbox games_nav","id":"n1c1c9c8c4c1m1r1a1","sN":1,"aN":"c1c9c8c4c1m1r1a1"}'>Juegos Xbox</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"Gaming_Gaming_PCs_cont","cT":"Container","id":"c2c9c8c4c1m1r1a1","sN":2,"aN":"c9c8c4c1m1r1a1"}'>
            <a id="c-shellmenu_66" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/es-es/store/most-popular/games/pc?icid=CNav_PC_Games" data-m='{"cN":"CatNav_Gaming_Gaming_PCs_nav","id":"n1c2c9c8c4c1m1r1a1","sN":1,"aN":"c2c9c8c4c1m1r1a1"}'>Juegos para PC</a>
            
        </li>
                                                    
                                </ul>
                            </div>
                        </li>                        <li class="single-link js-nav-menu uhf-menu-item">
                            <a id="c-shellmenu_67" class="c-uhf-nav-link" href="https://www.microsoft.com/es-es/p/tarjeta-regalo-digital-de-xbox/cfq7ttc0k64h/0003?icid=CNav_Xbox_Gift_Card" data-m='{"cN":"CatNav_Xbox_GiftCards_nav","id":"n10c8c4c1m1r1a1","sN":10,"aN":"c8c4c1m1r1a1"}'>Tarjeta regalo</a>
                        </li>


                <li id="overflow-menu" class="overflow-menu x-hidden uhf-menu-item">
                        <div class="c-uhf-menu js-nav-menu">
        <button data-m='{"pid":"Más","id":"nn11c8c4c1m1r1a1","sN":11,"aN":"c8c4c1m1r1a1"}' type="button" aria-label="M&#225;s" aria-expanded="false">M&#225;s</button>
        <ul id="overflow-menu-list" aria-hidden="true" class="overflow-menu-list">
        </ul>
    </div>

                </li>
                            </ul>
            
        </nav>


            <div class="c-uhfh-actions" data-m='{"cN":"Header actions_cont","cT":"Container","id":"c9c4c1m1r1a1","sN":9,"aN":"c4c1m1r1a1"}'>
                <div class="wf-menu">        <nav id="uhf-c-nav" aria-label="Todo el menú de Microsoft" data-m='{"cN":"GlobalNav_cont","cT":"Container","id":"c1c9c4c1m1r1a1","sN":1,"aN":"c9c4c1m1r1a1"}'>
            <ul class="js-paddle-items">
                <li>
                    <div class="c-uhf-menu js-nav-menu">
                        <button type="button" class="c-button-logo all-ms-nav" aria-expanded="false" data-m='{"cN":"GlobalNav_More_nonnav","id":"nn1c1c9c4c1m1r1a1","sN":1,"aN":"c1c9c4c1m1r1a1"}'> <span>Todo Microsoft</span></button>
                        <ul class="f-multi-column f-multi-column-6" aria-hidden="true" data-m='{"cN":"More_cont","cT":"Container","id":"c2c1c9c4c1m1r1a1","sN":2,"aN":"c1c9c4c1m1r1a1"}'>
                                    <li class="c-w0-contr">
            <h2 class="c-uhf-sronly">Global</h2>
            <ul class="c-w0">
        <li class="js-nav-menu single-link" data-m='{"cN":"M365_cont","cT":"Container","id":"c1c2c1c9c4c1m1r1a1","sN":1,"aN":"c2c1c9c4c1m1r1a1"}'>
            <a id="shellmenu_0" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/microsoft-365" data-m='{"cN":"W0Nav_M365_nav","id":"n1c1c2c1c9c4c1m1r1a1","sN":1,"aN":"c1c2c1c9c4c1m1r1a1"}'>Microsoft 365</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"Teams_cont","cT":"Container","id":"c2c2c1c9c4c1m1r1a1","sN":2,"aN":"c2c1c9c4c1m1r1a1"}'>
            <a id="l0_Teams" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/microsoft-teams/group-chat-software" data-m='{"cN":"W0Nav_Teams_nav","id":"n1c2c2c1c9c4c1m1r1a1","sN":1,"aN":"c2c2c1c9c4c1m1r1a1"}'>Teams</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"Copilot_cont","cT":"Container","id":"c3c2c1c9c4c1m1r1a1","sN":3,"aN":"c2c1c9c4c1m1r1a1"}'>
            <a id="shellmenu_2" class="js-subm-uhf-nav-link" href="https://copilot.microsoft.com/" data-m='{"cN":"W0Nav_Copilot_nav","id":"n1c3c2c1c9c4c1m1r1a1","sN":1,"aN":"c3c2c1c9c4c1m1r1a1"}'>Copilot</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"Windows_cont","cT":"Container","id":"c4c2c1c9c4c1m1r1a1","sN":4,"aN":"c2c1c9c4c1m1r1a1"}'>
            <a id="shellmenu_3" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/es-es/windows/" data-m='{"cN":"W0Nav_Windows_nav","id":"n1c4c2c1c9c4c1m1r1a1","sN":1,"aN":"c4c2c1c9c4c1m1r1a1"}'>Windows</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"Surface_cont","cT":"Container","id":"c5c2c1c9c4c1m1r1a1","sN":5,"aN":"c2c1c9c4c1m1r1a1"}'>
            <a id="shellmenu_4" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/surface" data-m='{"cN":"W0Nav_Surface_nav","id":"n1c5c2c1c9c4c1m1r1a1","sN":1,"aN":"c5c2c1c9c4c1m1r1a1"}'>Surface</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"Xbox_cont","cT":"Container","id":"c6c2c1c9c4c1m1r1a1","sN":6,"aN":"c2c1c9c4c1m1r1a1"}'>
            <a id="shellmenu_5" class="js-subm-uhf-nav-link" href="https://www.xbox.com/" data-m='{"cN":"W0Nav_Xbox_nav","id":"n1c6c2c1c9c4c1m1r1a1","sN":1,"aN":"c6c2c1c9c4c1m1r1a1"}'>Xbox</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"Deals_cont","cT":"Container","id":"c7c2c1c9c4c1m1r1a1","sN":7,"aN":"c2c1c9c4c1m1r1a1"}'>
            <a id="shellmenu_6" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/es-es/store/b/sale?icid=TopNavDealsSale" data-m='{"cN":"W0Nav_Deals_nav","id":"n1c7c2c1c9c4c1m1r1a1","sN":1,"aN":"c7c2c1c9c4c1m1r1a1"}'>Ofertas</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"Small Business_cont","cT":"Container","id":"c8c2c1c9c4c1m1r1a1","sN":8,"aN":"c2c1c9c4c1m1r1a1"}'>
            <a id="l0_SmallBusiness" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/es-es/store/b/business" data-m='{"cN":"W0Nav_Small Business_nav","id":"n1c8c2c1c9c4c1m1r1a1","sN":1,"aN":"c8c2c1c9c4c1m1r1a1"}'>Peque&#241;as empresas</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"Support_cont","cT":"Container","id":"c9c2c1c9c4c1m1r1a1","sN":9,"aN":"c2c1c9c4c1m1r1a1"}'>
            <a id="l1_support" class="js-subm-uhf-nav-link" href="https://support.microsoft.com/es-es" data-m='{"cN":"W0Nav_Support_nav","id":"n1c9c2c1c9c4c1m1r1a1","sN":1,"aN":"c9c2c1c9c4c1m1r1a1"}'>Soporte</a>
            
        </li>
            </ul>
        </li>

<li class="f-sub-menu js-nav-menu nested-menu" data-m='{"cT":"Container","id":"c10c2c1c9c4c1m1r1a1","sN":10,"aN":"c2c1c9c4c1m1r1a1"}'>

    <span id="uhf-navspn-shellmenu_10-span" style="display:none"   f-multi-parent="true" aria-expanded="false" data-m='{"id":"nn1c10c2c1c9c4c1m1r1a1","sN":1,"aN":"c10c2c1c9c4c1m1r1a1"}'>Software</span>
    <button id="uhf-navbtn-shellmenu_10-button" type="button"   f-multi-parent="true" aria-expanded="false" data-m='{"id":"nn2c10c2c1c9c4c1m1r1a1","sN":2,"aN":"c10c2c1c9c4c1m1r1a1"}'>Software</button>
    <ul aria-hidden="true" aria-labelledby="uhf-navspn-shellmenu_10-span">
        <li class="js-nav-menu single-link" data-m='{"cN":"More_Software_WindowsApps_cont","cT":"Container","id":"c3c10c2c1c9c4c1m1r1a1","sN":3,"aN":"c10c2c1c9c4c1m1r1a1"}'>
            <a id="shellmenu_11" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/es-es/store/apps/windows?icid=CNavAppsWindowsApps" data-m='{"cN":"GlobalNav_More_Software_WindowsApps_nav","id":"n1c3c10c2c1c9c4c1m1r1a1","sN":1,"aN":"c3c10c2c1c9c4c1m1r1a1"}'>Aplicaciones Windows</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"More_Software_AI_cont","cT":"Container","id":"c4c10c2c1c9c4c1m1r1a1","sN":4,"aN":"c10c2c1c9c4c1m1r1a1"}'>
            <a id="shellmenu_12" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/ai" data-m='{"cN":"GlobalNav_More_Software_AI_nav","id":"n1c4c10c2c1c9c4c1m1r1a1","sN":1,"aN":"c4c10c2c1c9c4c1m1r1a1"}'>IA</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"More_Software_OneDrive_cont","cT":"Container","id":"c5c10c2c1c9c4c1m1r1a1","sN":5,"aN":"c10c2c1c9c4c1m1r1a1"}'>
            <a id="shellmenu_13" class="js-subm-uhf-nav-link" href="https://onedrive.live.com/about/es-es/" data-m='{"cN":"GlobalNav_More_Software_OneDrive_nav","id":"n1c5c10c2c1c9c4c1m1r1a1","sN":1,"aN":"c5c10c2c1c9c4c1m1r1a1"}'>OneDrive</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"More_Software_Outlook_cont","cT":"Container","id":"c6c10c2c1c9c4c1m1r1a1","sN":6,"aN":"c10c2c1c9c4c1m1r1a1"}'>
            <a id="shellmenu_14" class="js-subm-uhf-nav-link" href="https://outlook.live.com/owa/" data-m='{"cN":"GlobalNav_More_Software_Outlook_nav","id":"n1c6c10c2c1c9c4c1m1r1a1","sN":1,"aN":"c6c10c2c1c9c4c1m1r1a1"}'>Outlook</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"More_Software_Skype_cont","cT":"Container","id":"c7c10c2c1c9c4c1m1r1a1","sN":7,"aN":"c10c2c1c9c4c1m1r1a1"}'>
            <a id="shellmenu_15" class="js-subm-uhf-nav-link" href="https://www.skype.com/es/" data-m='{"cN":"GlobalNav_More_Software_Skype_nav","id":"n1c7c10c2c1c9c4c1m1r1a1","sN":1,"aN":"c7c10c2c1c9c4c1m1r1a1"}'>Skype</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"More_Software_OneNote_cont","cT":"Container","id":"c8c10c2c1c9c4c1m1r1a1","sN":8,"aN":"c10c2c1c9c4c1m1r1a1"}'>
            <a id="shellmenu_16" class="js-subm-uhf-nav-link" href="https://www.onenote.com/?omkt=es-ES" data-m='{"cN":"GlobalNav_More_Software_OneNote_nav","id":"n1c8c10c2c1c9c4c1m1r1a1","sN":1,"aN":"c8c10c2c1c9c4c1m1r1a1"}'>OneNote</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"More_Software_Microsoft Teams_cont","cT":"Container","id":"c9c10c2c1c9c4c1m1r1a1","sN":9,"aN":"c10c2c1c9c4c1m1r1a1"}'>
            <a id="shellmenu_17" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/microsoft-teams/group-chat-software" data-m='{"cN":"GlobalNav_More_Software_Microsoft Teams_nav","id":"n1c9c10c2c1c9c4c1m1r1a1","sN":1,"aN":"c9c10c2c1c9c4c1m1r1a1"}'>Microsoft Teams</a>
            
        </li>
    </ul>
    
</li>
<li class="f-sub-menu js-nav-menu nested-menu" data-m='{"cN":"PCsAndDevices_cont","cT":"Container","id":"c11c2c1c9c4c1m1r1a1","sN":11,"aN":"c2c1c9c4c1m1r1a1"}'>

    <span id="uhf-navspn-shellmenu_18-span" style="display:none"   f-multi-parent="true" aria-expanded="false" data-m='{"cN":"GlobalNav_PCsAndDevices_nonnav","id":"nn1c11c2c1c9c4c1m1r1a1","sN":1,"aN":"c11c2c1c9c4c1m1r1a1"}'>PCs y dispositivos</span>
    <button id="uhf-navbtn-shellmenu_18-button" type="button"   f-multi-parent="true" aria-expanded="false" data-m='{"cN":"GlobalNav_PCsAndDevices_nonnav","id":"nn2c11c2c1c9c4c1m1r1a1","sN":2,"aN":"c11c2c1c9c4c1m1r1a1"}'>PCs y dispositivos</button>
    <ul aria-hidden="true" aria-labelledby="uhf-navspn-shellmenu_18-span">
        <li class="js-nav-menu single-link" data-m='{"cN":"More_PCsAndDevices_ShopXbox_cont","cT":"Container","id":"c3c11c2c1c9c4c1m1r1a1","sN":3,"aN":"c11c2c1c9c4c1m1r1a1"}'>
            <a id="shellmenu_19" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/es-es/store/b/xbox?icid=CNavDevicesXbox" data-m='{"cN":"GlobalNav_More_PCsAndDevices_ShopXbox_nav","id":"n1c3c11c2c1c9c4c1m1r1a1","sN":1,"aN":"c3c11c2c1c9c4c1m1r1a1"}'>Comprar Xbox</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"More_PCsAndDevices_Accessories_cont","cT":"Container","id":"c4c11c2c1c9c4c1m1r1a1","sN":4,"aN":"c11c2c1c9c4c1m1r1a1"}'>
            <a id="shellmenu_20" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/es-es/store/b/accessories?icid=CNavDevicesAccessories" data-m='{"cN":"GlobalNav_More_PCsAndDevices_Accessories_nav","id":"n1c4c11c2c1c9c4c1m1r1a1","sN":1,"aN":"c4c11c2c1c9c4c1m1r1a1"}'>Accesorios</a>
            
        </li>
    </ul>
    
</li>
<li class="f-sub-menu js-nav-menu nested-menu" data-m='{"cT":"Container","id":"c12c2c1c9c4c1m1r1a1","sN":12,"aN":"c2c1c9c4c1m1r1a1"}'>

    <span id="uhf-navspn-shellmenu_21-span" style="display:none"   f-multi-parent="true" aria-expanded="false" data-m='{"id":"nn1c12c2c1c9c4c1m1r1a1","sN":1,"aN":"c12c2c1c9c4c1m1r1a1"}'>Entretenimiento</span>
    <button id="uhf-navbtn-shellmenu_21-button" type="button"   f-multi-parent="true" aria-expanded="false" data-m='{"id":"nn2c12c2c1c9c4c1m1r1a1","sN":2,"aN":"c12c2c1c9c4c1m1r1a1"}'>Entretenimiento</button>
    <ul aria-hidden="true" aria-labelledby="uhf-navspn-shellmenu_21-span">
        <li class="js-nav-menu single-link" data-m='{"cN":"More_Entertainment_XboxGamePassUltimate_cont","cT":"Container","id":"c3c12c2c1c9c4c1m1r1a1","sN":3,"aN":"c12c2c1c9c4c1m1r1a1"}'>
            <a id="shellmenu_22" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/es-es/p/xbox-game-pass-ultimate/cfq7ttc0khs0?WT.mc_id=CNavGamesXboxGamePassUltimate" data-m='{"cN":"GlobalNav_More_Entertainment_XboxGamePassUltimate_nav","id":"n1c3c12c2c1c9c4c1m1r1a1","sN":1,"aN":"c3c12c2c1c9c4c1m1r1a1"}'>Xbox Game Pass Ultimate</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"Products_DevicesAndXbox_Xbox Live Gold_cont","cT":"Container","id":"c4c12c2c1c9c4c1m1r1a1","sN":4,"aN":"c12c2c1c9c4c1m1r1a1"}'>
            <a id="shellmenu_23" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/es-es/p/xbox-live-gold/cfq7ttc0k5dj?WT.mc_id=CNavGamesXboxLiveGold" data-m='{"cN":"GlobalNav_Products_DevicesAndXbox_Xbox Live Gold_nav","id":"n1c4c12c2c1c9c4c1m1r1a1","sN":1,"aN":"c4c12c2c1c9c4c1m1r1a1"}'>Xbox Live Gold</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"More_Entertainment_XboxGames_cont","cT":"Container","id":"c5c12c2c1c9c4c1m1r1a1","sN":5,"aN":"c12c2c1c9c4c1m1r1a1"}'>
            <a id="shellmenu_24" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/es-es/store/top-paid/games/xbox" data-m='{"cN":"GlobalNav_More_Entertainment_XboxGames_nav","id":"n1c5c12c2c1c9c4c1m1r1a1","sN":1,"aN":"c5c12c2c1c9c4c1m1r1a1"}'>Xbox y juegos</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"More_Entertainment_PCGames_cont","cT":"Container","id":"c6c12c2c1c9c4c1m1r1a1","sN":6,"aN":"c12c2c1c9c4c1m1r1a1"}'>
            <a id="shellmenu_25" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/es-es/store/games/windows?icid=CNavGamesWindowsGames" data-m='{"cN":"GlobalNav_More_Entertainment_PCGames_nav","id":"n1c6c12c2c1c9c4c1m1r1a1","sN":1,"aN":"c6c12c2c1c9c4c1m1r1a1"}'>Juegos para PC</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"More_Entertainment_WindowsDigitalGames_cont","cT":"Container","id":"c7c12c2c1c9c4c1m1r1a1","sN":7,"aN":"c12c2c1c9c4c1m1r1a1"}'>
            <a id="shellmenu_26" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/es-es/store/games/windows?icid=TopNavWindowsGames" data-m='{"cN":"GlobalNav_More_Entertainment_WindowsDigitalGames_nav","id":"n1c7c12c2c1c9c4c1m1r1a1","sN":1,"aN":"c7c12c2c1c9c4c1m1r1a1"}'>Juegos para Windows</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"More_Entertainment_MoviesAndTV_cont","cT":"Container","id":"c8c12c2c1c9c4c1m1r1a1","sN":8,"aN":"c12c2c1c9c4c1m1r1a1"}'>
            <a id="shellmenu_27" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/es-es/store/movies-and-tv?icid=TopNavMoviesAndTv" data-m='{"cN":"GlobalNav_More_Entertainment_MoviesAndTV_nav","id":"n1c8c12c2c1c9c4c1m1r1a1","sN":1,"aN":"c8c12c2c1c9c4c1m1r1a1"}'>Pel&#237;culas y TV</a>
            
        </li>
    </ul>
    
</li>
<li class="f-sub-menu js-nav-menu nested-menu" data-m='{"cT":"Container","id":"c13c2c1c9c4c1m1r1a1","sN":13,"aN":"c2c1c9c4c1m1r1a1"}'>

    <span id="uhf-navspn-shellmenu_28-span" style="display:none"   f-multi-parent="true" aria-expanded="false" data-m='{"id":"nn1c13c2c1c9c4c1m1r1a1","sN":1,"aN":"c13c2c1c9c4c1m1r1a1"}'>Empresas</span>
    <button id="uhf-navbtn-shellmenu_28-button" type="button"   f-multi-parent="true" aria-expanded="false" data-m='{"id":"nn2c13c2c1c9c4c1m1r1a1","sN":2,"aN":"c13c2c1c9c4c1m1r1a1"}'>Empresas</button>
    <ul aria-hidden="true" aria-labelledby="uhf-navspn-shellmenu_28-span">
        <li class="js-nav-menu single-link" data-m='{"cN":"More_Business_Microsoft_Cloud_cont","cT":"Container","id":"c3c13c2c1c9c4c1m1r1a1","sN":3,"aN":"c13c2c1c9c4c1m1r1a1"}'>
            <a id="shellmenu_29" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/es-es/microsoft-cloud" data-m='{"cN":"GlobalNav_More_Business_Microsoft_Cloud_nav","id":"n1c3c13c2c1c9c4c1m1r1a1","sN":1,"aN":"c3c13c2c1c9c4c1m1r1a1"}'>Microsoft Cloud</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"More_Business_Microsoft Security_cont","cT":"Container","id":"c4c13c2c1c9c4c1m1r1a1","sN":4,"aN":"c13c2c1c9c4c1m1r1a1"}'>
            <a id="shellmenu_30" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/es-es/security" data-m='{"cN":"GlobalNav_More_Business_Microsoft Security_nav","id":"n1c4c13c2c1c9c4c1m1r1a1","sN":1,"aN":"c4c13c2c1c9c4c1m1r1a1"}'>Seguridad de Microsoft</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"More_DeveloperAndIT_Azure_cont","cT":"Container","id":"c5c13c2c1c9c4c1m1r1a1","sN":5,"aN":"c13c2c1c9c4c1m1r1a1"}'>
            <a id="shellmenu_31" class="js-subm-uhf-nav-link" href="https://azure.microsoft.com/es-es/" data-m='{"cN":"GlobalNav_More_DeveloperAndIT_Azure_nav","id":"n1c5c13c2c1c9c4c1m1r1a1","sN":1,"aN":"c5c13c2c1c9c4c1m1r1a1"}'>Azure</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"More_Business_MicrosoftDynamics365_cont","cT":"Container","id":"c6c13c2c1c9c4c1m1r1a1","sN":6,"aN":"c13c2c1c9c4c1m1r1a1"}'>
            <a id="shellmenu_32" class="js-subm-uhf-nav-link" href="https://dynamics.microsoft.com/es-es/" data-m='{"cN":"GlobalNav_More_Business_MicrosoftDynamics365_nav","id":"n1c6c13c2c1c9c4c1m1r1a1","sN":1,"aN":"c6c13c2c1c9c4c1m1r1a1"}'>Dynamics 365</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"More_Business_Microsoft365forbusiness_cont","cT":"Container","id":"c7c13c2c1c9c4c1m1r1a1","sN":7,"aN":"c13c2c1c9c4c1m1r1a1"}'>
            <a id="shellmenu_33" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/es-es/microsoft-365/business" data-m='{"cN":"GlobalNav_More_Business_Microsoft365forbusiness_nav","id":"n1c7c13c2c1c9c4c1m1r1a1","sN":1,"aN":"c7c13c2c1c9c4c1m1r1a1"}'>Microsoft 365 para empresas</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"More_Business_MicrosoftIndustry_cont","cT":"Container","id":"c8c13c2c1c9c4c1m1r1a1","sN":8,"aN":"c13c2c1c9c4c1m1r1a1"}'>
            <a id="shellmenu_34" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/es-es/industry" data-m='{"cN":"GlobalNav_More_Business_MicrosoftIndustry_nav","id":"n1c8c13c2c1c9c4c1m1r1a1","sN":1,"aN":"c8c13c2c1c9c4c1m1r1a1"}'>Microsoft Industry</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"More_Business_MicrosoftPowerPlatform_cont","cT":"Container","id":"c9c13c2c1c9c4c1m1r1a1","sN":9,"aN":"c13c2c1c9c4c1m1r1a1"}'>
            <a id="shellmenu_35" class="js-subm-uhf-nav-link" href="https://powerplatform.microsoft.com/es-es/" data-m='{"cN":"GlobalNav_More_Business_MicrosoftPowerPlatform_nav","id":"n1c9c13c2c1c9c4c1m1r1a1","sN":1,"aN":"c9c13c2c1c9c4c1m1r1a1"}'>Microsoft Power Platform</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"More_Business_Windows365_cont","cT":"Container","id":"c10c13c2c1c9c4c1m1r1a1","sN":10,"aN":"c13c2c1c9c4c1m1r1a1"}'>
            <a id="shellmenu_36" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/es-es/windows-365" data-m='{"cN":"GlobalNav_More_Business_Windows365_nav","id":"n1c10c13c2c1c9c4c1m1r1a1","sN":1,"aN":"c10c13c2c1c9c4c1m1r1a1"}'>Windows 365</a>
            
        </li>
    </ul>
    
</li>
<li class="f-sub-menu js-nav-menu nested-menu" data-m='{"cT":"Container","id":"c14c2c1c9c4c1m1r1a1","sN":14,"aN":"c2c1c9c4c1m1r1a1"}'>

    <span id="uhf-navspn-shellmenu_37-span" style="display:none"   f-multi-parent="true" aria-expanded="false" data-m='{"id":"nn1c14c2c1c9c4c1m1r1a1","sN":1,"aN":"c14c2c1c9c4c1m1r1a1"}'>Desarrolladores y TI
</span>
    <button id="uhf-navbtn-shellmenu_37-button" type="button"   f-multi-parent="true" aria-expanded="false" data-m='{"id":"nn2c14c2c1c9c4c1m1r1a1","sN":2,"aN":"c14c2c1c9c4c1m1r1a1"}'>Desarrolladores y TI
</button>
    <ul aria-hidden="true" aria-labelledby="uhf-navspn-shellmenu_37-span">
        <li class="js-nav-menu single-link" data-m='{"cN":"More_DeveloperAndIT_DeveloperCenter_cont","cT":"Container","id":"c3c14c2c1c9c4c1m1r1a1","sN":3,"aN":"c14c2c1c9c4c1m1r1a1"}'>
            <a id="shellmenu_38" class="js-subm-uhf-nav-link" href="https://developer.microsoft.com/es-es/" data-m='{"cN":"GlobalNav_More_DeveloperAndIT_DeveloperCenter_nav","id":"n1c3c14c2c1c9c4c1m1r1a1","sN":1,"aN":"c3c14c2c1c9c4c1m1r1a1"}'>Centro para desarrolladores</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"More_DeveloperAndIT_Documentation_cont","cT":"Container","id":"c4c14c2c1c9c4c1m1r1a1","sN":4,"aN":"c14c2c1c9c4c1m1r1a1"}'>
            <a id="shellmenu_39" class="js-subm-uhf-nav-link" href="https://learn.microsoft.com/docs/" data-m='{"cN":"GlobalNav_More_DeveloperAndIT_Documentation_nav","id":"n1c4c14c2c1c9c4c1m1r1a1","sN":1,"aN":"c4c14c2c1c9c4c1m1r1a1"}'>Documentaci&#243;n</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"More_DeveloperAndIT_MicrosoftLearn_cont","cT":"Container","id":"c5c14c2c1c9c4c1m1r1a1","sN":5,"aN":"c14c2c1c9c4c1m1r1a1"}'>
            <a id="shellmenu_40" class="js-subm-uhf-nav-link" href="https://learn.microsoft.com/" data-m='{"cN":"GlobalNav_More_DeveloperAndIT_MicrosoftLearn_nav","id":"n1c5c14c2c1c9c4c1m1r1a1","sN":1,"aN":"c5c14c2c1c9c4c1m1r1a1"}'>Microsoft Learn</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"More_DeveloperAndIT_MicrosoftTechCommunity_cont","cT":"Container","id":"c6c14c2c1c9c4c1m1r1a1","sN":6,"aN":"c14c2c1c9c4c1m1r1a1"}'>
            <a id="shellmenu_41" class="js-subm-uhf-nav-link" href="https://techcommunity.microsoft.com/" data-m='{"cN":"GlobalNav_More_DeveloperAndIT_MicrosoftTechCommunity_nav","id":"n1c6c14c2c1c9c4c1m1r1a1","sN":1,"aN":"c6c14c2c1c9c4c1m1r1a1"}'>Microsoft Tech Community</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"More_DeveloperAndIT_AzureMarketplace_cont","cT":"Container","id":"c7c14c2c1c9c4c1m1r1a1","sN":7,"aN":"c14c2c1c9c4c1m1r1a1"}'>
            <a id="shellmenu_42" class="js-subm-uhf-nav-link" href="https://azuremarketplace.microsoft.com/es-es/" data-m='{"cN":"GlobalNav_More_DeveloperAndIT_AzureMarketplace_nav","id":"n1c7c14c2c1c9c4c1m1r1a1","sN":1,"aN":"c7c14c2c1c9c4c1m1r1a1"}'>Azure Marketplace</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"More_DeveloperAndIT_AppSource_cont","cT":"Container","id":"c8c14c2c1c9c4c1m1r1a1","sN":8,"aN":"c14c2c1c9c4c1m1r1a1"}'>
            <a id="shellmenu_43" class="js-subm-uhf-nav-link" href="https://appsource.microsoft.com/es-es/" data-m='{"cN":"GlobalNav_More_DeveloperAndIT_AppSource_nav","id":"n1c8c14c2c1c9c4c1m1r1a1","sN":1,"aN":"c8c14c2c1c9c4c1m1r1a1"}'>AppSource</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"More_DeveloperAndIT_VisualStudio_cont","cT":"Container","id":"c9c14c2c1c9c4c1m1r1a1","sN":9,"aN":"c14c2c1c9c4c1m1r1a1"}'>
            <a id="shellmenu_44" class="js-subm-uhf-nav-link" href="https://visualstudio.microsoft.com/" data-m='{"cN":"GlobalNav_More_DeveloperAndIT_VisualStudio_nav","id":"n1c9c14c2c1c9c4c1m1r1a1","sN":1,"aN":"c9c14c2c1c9c4c1m1r1a1"}'>Visual Studio</a>
            
        </li>
    </ul>
    
</li>
<li class="f-sub-menu js-nav-menu nested-menu" data-m='{"cT":"Container","id":"c15c2c1c9c4c1m1r1a1","sN":15,"aN":"c2c1c9c4c1m1r1a1"}'>

    <span id="uhf-navspn-shellmenu_45-span" style="display:none"   f-multi-parent="true" aria-expanded="false" data-m='{"id":"nn1c15c2c1c9c4c1m1r1a1","sN":1,"aN":"c15c2c1c9c4c1m1r1a1"}'>Otro</span>
    <button id="uhf-navbtn-shellmenu_45-button" type="button"   f-multi-parent="true" aria-expanded="false" data-m='{"id":"nn2c15c2c1c9c4c1m1r1a1","sN":2,"aN":"c15c2c1c9c4c1m1r1a1"}'>Otro</button>
    <ul aria-hidden="true" aria-labelledby="uhf-navspn-shellmenu_45-span">
        <li class="js-nav-menu single-link" data-m='{"cN":"More_Other_Microsoft Rewards_cont","cT":"Container","id":"c3c15c2c1c9c4c1m1r1a1","sN":3,"aN":"c15c2c1c9c4c1m1r1a1"}'>
            <a id="shellmenu_46" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/rewards" data-m='{"cN":"GlobalNav_More_Other_Microsoft Rewards_nav","id":"n1c3c15c2c1c9c4c1m1r1a1","sN":1,"aN":"c3c15c2c1c9c4c1m1r1a1"}'>Microsoft Rewards </a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"More_Other_FreeDownloadsAndSecurity_cont","cT":"Container","id":"c4c15c2c1c9c4c1m1r1a1","sN":4,"aN":"c15c2c1c9c4c1m1r1a1"}'>
            <a id="shellmenu_47" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/es-es/download" data-m='{"cN":"GlobalNav_More_Other_FreeDownloadsAndSecurity_nav","id":"n1c4c15c2c1c9c4c1m1r1a1","sN":1,"aN":"c4c15c2c1c9c4c1m1r1a1"}'>Seguridad y descargas gratuitas</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"More_Other_Education_cont","cT":"Container","id":"c5c15c2c1c9c4c1m1r1a1","sN":5,"aN":"c15c2c1c9c4c1m1r1a1"}'>
            <a id="shellmenu_48" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/es-es/education?icid=CNavMSCOML0_Studentsandeducation" data-m='{"cN":"GlobalNav_More_Other_Education_nav","id":"n1c5c15c2c1c9c4c1m1r1a1","sN":1,"aN":"c5c15c2c1c9c4c1m1r1a1"}'>Educaci&#243;n</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"More_Other_GiftCards_cont","cT":"Container","id":"c6c15c2c1c9c4c1m1r1a1","sN":6,"aN":"c15c2c1c9c4c1m1r1a1"}'>
            <a id="shellmenu_49" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/es-es/store/b/gift-cards" data-m='{"cN":"GlobalNav_More_Other_GiftCards_nav","id":"n1c6c15c2c1c9c4c1m1r1a1","sN":1,"aN":"c6c15c2c1c9c4c1m1r1a1"}'>Tarjetas regalo</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"More_Other_Licensing_cont","cT":"Container","id":"c7c15c2c1c9c4c1m1r1a1","sN":7,"aN":"c15c2c1c9c4c1m1r1a1"}'>
            <a id="Licensing" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/licensing/" data-m='{"cN":"GlobalNav_More_Other_Licensing_nav","id":"n1c7c15c2c1c9c4c1m1r1a1","sN":1,"aN":"c7c15c2c1c9c4c1m1r1a1"}'>Licenciamiento</a>
            
        </li>
    </ul>
    
</li>
                                                            <li class="f-multi-column-info">
                                    <a data-m='{"id":"n16c2c1c9c4c1m1r1a1","sN":16,"aN":"c2c1c9c4c1m1r1a1"}' href="https://www.microsoft.com/es-es/sitemap.aspx" aria-label="" class="c-glyph">Ver mapa del sitio</a>
                                </li>
                            
                        </ul>
                    </div>
                </li>
            </ul>
        </nav>
</div>
                            <form class="c-search" autocomplete="off" id="searchForm" name="searchForm" role="search" action="https://www.microsoft.com/es-es/search/explore" method="GET" data-seAutoSuggest='{"queryParams":{"market":"es-es","clientId":"7F27B536-CF6B-4C65-8638-A0F8CBDFCA65","sources":"Iris-Products,DCatAll-Products,Microsoft-Terms","filter":"+ClientType:StoreWeb","counts":"1,5,5"},"familyNames":{"Apps":"Aplicación","Books":"Libro","Bundles":"Pack","Devices":"Dispositivo","Fees":"Fee","Games":"Juego","MusicAlbums":"Álbum","MusicTracks":"Canción","MusicVideos":"Vídeo","MusicArtists":"Artista","OperatingSystem":"Sistema operativo","Software":"Software","Movies":"Película","TV":"Televisión","CSV":"Tarjeta de regalo","VideoActor":"Actor"}}' data-seautosuggestapi="https://www.microsoft.com/msstoreapiprod/api/autosuggest" data-m='{"cN":"GlobalNav_Search_cont","cT":"Container","id":"c3c1c9c4c1m1r1a1","sN":3,"aN":"c1c9c4c1m1r1a1"}' aria-expanded="false">
                                <input  id="cli_shellHeaderSearchInput" aria-label="B&#250;squeda ampliada" aria-autocomplete="list" aria-expanded="false" aria-controls="universal-header-search-auto-suggest-transparent" aria-owns="universal-header-search-auto-suggest-ul" type="search" name="q" role="combobox" placeholder="Buscar en Microsoft.com" data-m='{"cN":"SearchBox_nav","id":"n1c3c1c9c4c1m1r1a1","sN":1,"aN":"c3c1c9c4c1m1r1a1"}' data-toggle="tooltip" data-placement="right" title="Buscar en Microsoft.com" />
                                    <button id="search" aria-label="Buscar en Microsoft.com" class="c-glyph" data-m='{"cN":"Search_nav","id":"n2c3c1c9c4c1m1r1a1","sN":2,"aN":"c3c1c9c4c1m1r1a1"}' data-bi-mto="true" aria-expanded="false" disabled="disabled">
                                        <span role="presentation">Buscar</span>
                                        <span role="tooltip" class="c-uhf-tooltip c-uhf-search-tooltip">Buscar en Microsoft.com</span>
                                    </button>
                                <div class="m-auto-suggest" id="universal-header-search-auto-suggest-transparent" role="group">
                                    <ul class="c-menu" id="universal-header-search-auto-suggest-ul" aria-label="Sugerencias de b&#250;squeda" aria-hidden="true" data-bi-dnt="true" data-bi-mto="true" data-js-auto-suggest-position="default" role="listbox" data-tel="jsll" data-m='{"cN":"search suggestions_cont","cT":"Container","id":"c3c3c1c9c4c1m1r1a1","sN":3,"aN":"c3c1c9c4c1m1r1a1"}'></ul>
                                    <ul class="c-menu f-auto-suggest-no-results" aria-hidden="true" data-js-auto-suggest-postion="default" data-js-auto-suggest-position="default" role="listbox">
                                        <li class="c-menu-item"> <span tabindex="-1">Sin resultados</span></li>
                                    </ul>
                                </div>
                                
                            </form>
                        <button data-m='{"cN":"cancel-search","pid":"Cancelar Buscar","id":"nn4c1c9c4c1m1r1a1","sN":4,"aN":"c1c9c4c1m1r1a1"}' id="cancel-search" class="cancel-search" aria-label="Cancelar Buscar">
                            <span>Cancelar</span>
                        </button>
                    <a id="uhf-shopping-cart"
                       aria-label="0 artículos del carro de la compra"
                       class="c-action-trigger c-glyph c-uhf-nav-link glyph-shopping-cart"
                       href="https://www.microsoft.com/es-es/store/cart"
                       data-src-dmn-chk="true"
                       data-m='{"cN":"GlobalNav_Cart_nav","bhvr":82,"id":"n5c1c9c4c1m1r1a1","sN":5,"aN":"c1c9c4c1m1r1a1"}'>
                        <span class="shopping-cart-amount x-hidden" aria-hidden="true">0</span>
                        <span class="c-cart-lbl c-st-lbl">Carro</span>
                        <span id="uhf-shopping-cart-tooltip" class="c-uhf-tooltip" role="tooltip">0 art&#237;culos del carro de la compra</span>
                    </a>
                            <iframe id="shell-cart-count" data-src="//www.microsoft.com/store/buy/cartcount"></iframe>
                        <div id="meControl" class="c-me"  data-signinsettings='{"containerId":"meControl","enabled":true,"headerHeight":48,"debug":false,"extensibleLinks":[{"string":"Historial de pedidos","url":"https://www.microsoftstore.com/store/mseea/es_ES/DisplayAccountOrderListPage","id":""},{"string":"Historial de devolución","url":"https://www.microsoftstore.com/store/mseea/es_ES/DisplayAccountReturnListPage","id":""},{"string":"Contenido digital","url":"https://www.microsoftstore.com/store/mseea/es_ES/DisplayDownloadHistoryPage","id":""},{"string":"Libreta de direcciones","url":"https://www.microsoftstore.com/store/mseea/es_ES/DisplayEditProfilePage/tab.addressbook","id":""},{"string":"Pago","url":"https://www.microsoftstore.com/store/mseea/es_ES/DisplayAddEditPaymentPage","id":""},{"string":"Perfil de su cuenta","url":"https://www.microsoftstore.com/store/mseea/es_ES/DisplayEditProfilePage/tab.profile","id":""}],"userData":{"idp":"msa","firstName":"","lastName":"","memberName":"","cid":"","authenticatedState":"3"},"rpData":{"preferredIdp":"msa","msaInfo":{"signInUrl":"/es-es/store/signin","signOutUrl":"/es-es/store/signout","meUrl":"https://login.live.com/me.srf?wa=wsignin1.0"},"aadInfo":{"signOutUrl":"/es-es/store/signout","appId":"","siteUrl":"","blockMsaFed":true}}}' data-m='{"cN":"GlobalNav_Account_cont","cT":"Container","id":"c6c1c9c4c1m1r1a1","sN":6,"aN":"c1c9c4c1m1r1a1"}'>
                            <div class="msame_Header">
                                <div class="msame_Header_name st_msame_placeholder">Iniciar sesi&#243;n</div>
                            </div>
                            
                        </div>
                
            </div>
        </div>
        
        
    </div>
    
</header>




    </div>
        </div>

    </div>

            
    

	



    




<div class='meControl-configInfo' data-isenabled='true' data-preferredidp='msa' data-signinurl='/rpsauth/v1/account/SignIn' data-msasignouturl='/rpsauth/v1/account/SignOut' data-convergedstack='false' data-accountconstraint='0' data-apigeneration='GEN1' data-silentauthrequirereload='false' data-silentauthaction='none'></div>
<div class='userInfo-config' data-userInfoUrl='/rpsauth/account/api/v1/userinfo' data-userInfoTimeoutMS='1000' data-retryDelayMS='2000' data-maxRetryAttempt='3'></div>


    
    
<script src="/etc.clientlibs/microsoft/components/content/universalheader/v1/universalheader/clientlibs/site.min.ACSHASHd01b887060eeda8457a067614f5353bb.js"></script>




</div>
<div class="root responsivegrid">


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="layout-container responsivegrid aem-GridColumn aem-GridColumn--default--12" data-component-id="28134f1ee1370eee417bc52d1ed0a717">

<main class="microsoft-template-layout-container" tabindex="-1">
    <div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
        
        <div class="responsivegrid mt-4 aem-GridColumn aem-GridColumn--default--12">


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="experiencefragment aem-GridColumn aem-GridColumn--default--12" data-component-id="de24b40c7bf8f27f84caf1ea60652979">

    
    




<div class="cmp-experiencefragment">

    



<div class="xf-content-height">
    


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="alert-component aem-GridColumn aem-GridColumn--default--12" data-component-id="eef2af98123779adee801727449a8dad">














    



    
<link rel="stylesheet" href="/etc.clientlibs/microsoft/components/content/alert/v1/alert/clientlibs/site.min.ACSHASHedcbe2fb2c52e02391bc836e33fdb0b7.css" type="text/css">







    
    
    <script type="text/javascript" src="/etc.clientlibs/microsoft/components/content/alert/v1/alert/clientlibs/site-countdown.min.ACSHASH94aa1eb906a7edbbac5f31e5866db0fd.js" defer></script>






    <div class="alertThemer" data-enable-schedule-control="false" data-start-date=" UTC" data-end-date=" UTC" clickgroup-telemetry-enabled data-automation-test-id="alert-uide849">
    
        <section id="alert-uide849" data-componentName="alert-uide849" class="alert announcement-bar-theme alert-full-bleed  bg-green" data-mount="click-group" data-automation-test-id="AnnouncementBar-alert-uide849" data-bi-ecN="Alert bar" data-bi-pA="Body" data-bi-cT="Button" data-bi-bhvr="0" data-bi-cN="Alert bar" data-bi-compNm="Alert">
            <div class="alert-content text-center" data-automation-test-id="AlertContent-alert-uide849">
                
                
    

                <p class="text-break-keep-all" data-automation-test-id="AlertDescription-alert-uide849">Envíos y devoluciones gratis, promesa de precio bajo durante 60 días y ayuda de expertos.
                    
                        
    
        
    
    <a data-bi-cn="Más información" data-bi-ecn="Más información" data-bi-ct="Link" data-bi-compnm="Alert" data-bi-pa="body" class=" cta text-light " data-automation-test-id="cta-alert-uide849" data-bi-bhvr="0" target="_self" aria-label="Más información sobre nuestra promesa" href="https://www.microsoft.com/es-es/store/b/why-microsoft-store?icid=AlertXF-Generic-ValueProp">
        Más información
        <span class="glyph" aria-hidden="true"></span>
    </a>

                    
                </p>
            </div>
        </section>
    
    
    
 </div>





</div>

    
</div>

</div></div>

    <span style="display:none">
        
        
                
                    
                
            
    </span>


    
</div>

    
</div>
</div>
<div class="responsivegrid mt-4 aem-GridColumn aem-GridColumn--default--12">


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="layout-container responsivegrid aem-GridColumn aem-GridColumn--default--12" data-component-id="51e927945f39700e952adb9bd3dc97e7">





<div class="aem-Grid aem-Grid--12 aem-Grid--default--12  grid-image-layout-container-uid0b24  heading-bg-color-layout-container-uid0b24" data-automation-test-id="layout-container-uid0b24">
          <style data-automation-test-id="headingColor-layout-container-uid0b24">
                    .heading-bg-color-layout-container-uid0b24{
                         background-color:  !important;
                    }
          </style>
     
     <div class="container" id="layout-container-uid0b24" data-componentName="layout-container-uid0b24">
          
          
          <div class="areaheading dynamic-price-container aem-GridColumn aem-GridColumn--default--12" data-component-id="60bf9066c3eebdbf5a6e3f039c9b54ab">
    
    
    
    
    
    
    
    
    
    
        
            
    
    <script type="text/javascript" src="/etc.clientlibs/microsoft/components/content/areaheading/v1/areaheading/clientlibs/site.min.ACSHASHd60230a0d64115fa0302297053d89926.js" defer></script>


        
        
            
    
<link rel="stylesheet" href="/etc.clientlibs/microsoft/components/content/areaheading/v1/areaheading/clientlibs/site.min.ACSHASH8396009a793fda25f0ad1c495ec773f4.css" type="text/css">



        

        <div id="areaheading-uid16ed" data-componentName="areaheading-uid16ed" class="area-heading text-md-center  " data-automation-test-id="Areaheading-areaheading-uid16ed" style="background-color: null">
            
            
      

            <div class="row">
                
                    <div class="col-12 col-md-8 mx-auto" data-automation-test-id="AreaheadingHeadingText-areaheading-uid16ed" style="color:">
                        
                        
                            
                            
    <h1 data-automation-test-id="heading-areaheading-uid16ed">
            
    
        
        
            
            
                <h1>Xbox</h1>

            
        
    
    

    </h1>

                        
                    </div>
                
                
            </div>
        </div>
        
    
</div>

          
     </div>
</div></div>

    
</div>
</div>
<div class="responsivegrid aem-GridColumn aem-GridColumn--default--12">


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    
    
</div>
</div>
<div class="responsivegrid mt-0 mb-0 aem-GridColumn aem-GridColumn--default--12">


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="layout-container responsivegrid aem-GridColumn aem-GridColumn--default--12" data-component-id="51e927945f39700e952adb9bd3dc97e7">





<div class="aem-Grid aem-Grid--12 aem-Grid--default--12  grid-image-layout-container-uidba64  heading-bg-color-layout-container-uidba64" data-automation-test-id="layout-container-uidba64">
          <style data-automation-test-id="headingColor-layout-container-uidba64">
                    .heading-bg-color-layout-container-uidba64{
                         background-color:  !important;
                    }
          </style>
     
     <div class="container" id="layout-container-uidba64" data-componentName="layout-container-uidba64">
          
          
          <div class="link-list parent-list mt-4 mb-0 aem-GridColumn aem-GridColumn--default--12" data-component-id="719c9512848ea2270ac91e57592dc97e">





    


    


<nav id="link-list-uidb488" data-componentName="link-list-uidb488" data-automation-test-id="LinkListNav-link-list-uidb488" aria-label="Categorías de Xbox">

    
        
    



    
    
    
        
    

    
    <ul class="text-center d-flex flex-wrap list-inline justify-content-center" data-automation-test-id="LinkList-link-list-uidb488">
        
        
        
        
        <li class="font-weight-semibold mx-4 my-3 d-flex align-items-center card flex-grow-0  " data-mount="click-group" data-automation-test-id="LinkListItem0-link-list-uidb488" aria-expanded="false" clickgroup-telemetry-enabled data-close-label="Close dialog" aria-controls="listitempopoverx646570cf8cd340a89b20890a12cba9ca" data-placement="bottom">
            
            
                <img src="https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Link-List-Icon-Xbox-Series-X?wid=64&hei=64" data-automation-test-id="LinkListItemGlobalImgLazyLoad0-link-list-uidb488" loading="lazy" width="64" height="64" alt="Icono de consolas Xbox " class="img-fluid flex-shrink-0 mb-2" data-bi-cn="Consolas Xbox" data-bi-ecn="Consolas Xbox" data-bi-bhvr="0" data-bi-ct="CTA" data-bi-pa="Body" data-bi-compnm="Link List"/>
            
            
            <a href="https://www.microsoft.com/es-es/store/collections/xboxconsoles?icid=Cat-Xbox-QL1-Consoles" data-automation-test-id="LinkListItemCTA0-link-list-uidb488" aria-label="Click para comprar consolas Xbox con EA Sports 24 " target="_self" data-bi-mto data-bi-cn="Consolas Xbox" data-bi-ecn="Consolas Xbox" data-bi-bhvr="0" data-bi-ct="Link" data-bi-pa="Body" data-bi-compnm="Link List" data-target-uri="https://www.microsoft.com/es-es/store/collections/xboxconsoles?icid=Cat-Xbox-QL1-Consoles">
                Consolas Xbox
                    <span class="glyph" aria-hidden="true" data-automation-test-id="LinkListItemCTAWithMwfupgrade0-link-list-uidb488"></span>
            </a>

            
        </li>
        
    
        
        
        
        
        <li class="font-weight-semibold mx-4 my-3 d-flex align-items-center card flex-grow-0  " data-mount="click-group" data-automation-test-id="LinkListItem1-link-list-uidb488" aria-expanded="false" clickgroup-telemetry-enabled data-close-label="Close dialog" aria-controls="listitempopoverx761efe5c393f4912b5f11e0181cba255" data-placement="bottom">
            
            
                <img src="https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Link-List-Icon-Xbox-Accessories?wid=64&hei=64" data-automation-test-id="LinkListItemGlobalImgLazyLoad1-link-list-uidb488" loading="lazy" width="64" height="64" alt="Icono de mandos y accesorios Xbox " class="img-fluid flex-shrink-0 mb-2" data-bi-cn="Mandos y accesorios Xbox" data-bi-ecn="Mandos y accesorios Xbox" data-bi-bhvr="0" data-bi-ct="CTA" data-bi-pa="Body" data-bi-compnm="Link List"/>
            
            
            <a href="https://www.microsoft.com/es-es/store/collections/xboxaccessories?icid=Cat-Xbox-QL2-Xboxaccessories" data-automation-test-id="LinkListItemCTA1-link-list-uidb488" aria-label="Botón Xbox Mando Elite Serie 2" target="_self" data-bi-mto data-bi-cn="Mandos y accesorios Xbox" data-bi-ecn="Mandos y accesorios Xbox" data-bi-bhvr="0" data-bi-ct="Link" data-bi-pa="Body" data-bi-compnm="Link List" data-target-uri="https://www.microsoft.com/es-es/store/collections/xboxaccessories?icid=Cat-Xbox-QL2-Xboxaccessories">
                Mandos y accesorios Xbox
                    <span class="glyph" aria-hidden="true" data-automation-test-id="LinkListItemCTAWithMwfupgrade1-link-list-uidb488"></span>
            </a>

            
        </li>
        
    
        
        
        
        
        <li class="font-weight-semibold mx-4 my-3 d-flex align-items-center card flex-grow-0  " data-mount="click-group" data-automation-test-id="LinkListItem2-link-list-uidb488" aria-expanded="false" clickgroup-telemetry-enabled data-close-label="Close dialog" aria-controls="listitempopoverxdd88abd1b3e84159bcc1b867f9a83004" data-placement="bottom">
            
            
                <img src="https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Link-List-Icons-Xbox-Games-Consoles?wid=64&hei=64" data-automation-test-id="LinkListItemGlobalImgLazyLoad2-link-list-uidb488" loading="lazy" width="64" height="64" alt="Icono de Xbox " class="img-fluid flex-shrink-0 mb-2" data-bi-cn="Juegos " data-bi-ecn="Juegos " data-bi-bhvr="0" data-bi-ct="CTA" data-bi-pa="Body" data-bi-compnm="Link List"/>
            
            
            <a href="https://www.microsoft.com/es-es/store/best-rated/games/xbox?icid=Cat-Xbox-QL3-Games" data-automation-test-id="LinkListItemCTA2-link-list-uidb488" aria-label="Descubre los juegos" target="_self" data-bi-mto data-bi-cn="Juegos " data-bi-ecn="Juegos " data-bi-bhvr="0" data-bi-ct="Link" data-bi-pa="Body" data-bi-compnm="Link List" data-target-uri="https://www.microsoft.com/es-es/store/best-rated/games/xbox?icid=Cat-Xbox-QL3-Games">
                Juegos 
                    <span class="glyph" aria-hidden="true" data-automation-test-id="LinkListItemCTAWithMwfupgrade2-link-list-uidb488"></span>
            </a>

            
        </li>
        
    
        
        
        
        
        <li class="font-weight-semibold mx-4 my-3 d-flex align-items-center card flex-grow-0  " data-mount="click-group" data-automation-test-id="LinkListItem3-link-list-uidb488" aria-expanded="false" clickgroup-telemetry-enabled data-close-label="Close dialog" aria-controls="listitempopoverxc320bb1b4cb94abb82e3b7bb8b901fca" data-placement="bottom">
            
            
                <img src="https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Link-List-Icon-TradeIn?wid=64&hei=64" data-automation-test-id="LinkListItemGlobalImgLazyLoad3-link-list-uidb488" loading="lazy" width="64" height="64" alt="Icono de Trade-in " class="img-fluid flex-shrink-0 mb-2" data-bi-cn="Programa Trade-in" data-bi-ecn="Programa Trade-in" data-bi-bhvr="0" data-bi-ct="CTA" data-bi-pa="Body" data-bi-compnm="Link List"/>
            
            
            <a href="https://tradein.recommerce.com/#/microsoft-es/es?icid=Cat-Xbox-QL4-TradeIn" data-automation-test-id="LinkListItemCTA3-link-list-uidb488" aria-label="Botón para descubrir el programa Trade - in " target="_self" data-bi-mto data-bi-cn="Programa Trade-in" data-bi-ecn="Programa Trade-in" data-bi-bhvr="0" data-bi-ct="Link" data-bi-pa="Body" data-bi-compnm="Link List" data-target-uri="https://tradein.recommerce.com/#/microsoft-es/es?icid=Cat-Xbox-QL4-TradeIn">
                Programa Trade-in
                    <span class="glyph" aria-hidden="true" data-automation-test-id="LinkListItemCTAWithMwfupgrade3-link-list-uidb488"></span>
            </a>

            
        </li>
        
    
        
        
        
        
        <li class="font-weight-semibold mx-4 my-3 d-flex align-items-center card flex-grow-0  " data-mount="click-group" data-automation-test-id="LinkListItem4-link-list-uidb488" aria-expanded="false" clickgroup-telemetry-enabled data-close-label="Close dialog" aria-controls="listitempopoverx85d53d29994040b4ba55831d8428cba4" data-placement="bottom">
            
            
                <img src="https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Link-List-Icon-Payments?wid=64&hei=64" data-automation-test-id="LinkListItemGlobalImgLazyLoad4-link-list-uidb488" loading="lazy" width="64" height="64" alt="Icono de pagos " class="img-fluid flex-shrink-0 mb-2" data-bi-cn="PayPal Paga en 3 plazos" data-bi-ecn="PayPal Paga en 3 plazos" data-bi-bhvr="0" data-bi-ct="CTA" data-bi-pa="Body" data-bi-compnm="Link List"/>
            
            
            <a href="https://www.microsoft.com/es-es/store/b/paypal?icid=Cat-Xbox-QL5-BNPL-PayPal%20" data-automation-test-id="LinkListItemCTA4-link-list-uidb488" aria-label="Más información sobre el programa de PayPal paga en tres plazos " target="_self" data-bi-mto data-bi-cn="PayPal Paga en 3 plazos" data-bi-ecn="PayPal Paga en 3 plazos" data-bi-bhvr="0" data-bi-ct="Link" data-bi-pa="Body" data-bi-compnm="Link List" data-target-uri="https://www.microsoft.com/es-es/store/b/paypal?icid=Cat-Xbox-QL5-BNPL-PayPal ">
                PayPal Paga en 3 plazos
                    <span class="glyph" aria-hidden="true" data-automation-test-id="LinkListItemCTAWithMwfupgrade4-link-list-uidb488"></span>
            </a>

            
        </li>
        
    </ul>
</nav></div>

          
     </div>
</div></div>

    
</div>
</div>
<div class="responsivegrid aem-GridColumn aem-GridColumn--default--12">


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="layout-container responsivegrid aem-GridColumn aem-GridColumn--default--12" data-component-id="51e927945f39700e952adb9bd3dc97e7">





<div class="aem-Grid aem-Grid--12 aem-Grid--default--12  grid-image-layout-container-uid9461 default heading-bg-color-layout-container-uid9461" data-automation-test-id="layout-container-uid9461">
          <style data-automation-test-id="headingColor-layout-container-uid9461">
                    .heading-bg-color-layout-container-uid9461{
                         background-color:  !important;
                    }
          </style>
     
     <div class="container" id="layout-container-uid9461" data-componentName="layout-container-uid9461">
          
          
          <div class="content-card carouselbase carousel mt-4 mb-4 aem-GridColumn aem-GridColumn--default--12" data-component-id="e4caa97101f9f7cf8317c819b353e6ed">

    




    
        
    
    <script type="text/javascript" src="/etc.clientlibs/microsoft/components/content/content-card/v1/content-card/clientlibs/site.min.ACSHASH92ba1cb9da3dd68605f38095fc34ba98.js" defer></script>


    



	
    
<link rel="stylesheet" href="/etc.clientlibs/microsoft/components/content/content-card/v1/content-card/clientlibs/site.min.ACSHASHc033b611d87d511847501ade7913431f.css" type="text/css">





<section id="content-card-uid3f2e" data-componentName="content-card-uid3f2e">
    <div class="row row-cols-1   row-cols-sm-2 row-cols-lg-4">
        
            
                
    

    
        
    
<link rel="stylesheet" href="/etc.clientlibs/microsoft/components/content/content-card-item/v3/content-card-item/clientlibs/site.min.ACSHASH7e98ce1d1fb3c40effe0a57430c1371c.css" type="text/css">
<link rel="stylesheet" href="/etc.clientlibs/microsoft/components/content/content-card-item/v1/content-card-item/clientlibs/site.min.ACSHASH5eb7940588edeff2b13a25b0bd1cb864.css" type="text/css">



    

    
        
        
    
    
    
    
    
    
    
    
        <div class="col 
                    mb-5 mb-lg-0
                    " data-mount="click-group" clickgroup-telemetry-enabled>
            <div class="card material-card h-100 " data-target-uri="https://www.microsoft.com/es-es/store/collections/xboxseriesxconsoles?icid=Cat-Xbox-CC1-XSX-Generic " data-bi-ecN="Comprar ahora " data-bi-cT="Content Card" data-bi-pA="body" data-bi-ehN="Xbox Series X" data-bi-assetid="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Xbox-Series-X-Refurbished?fmt=png-alpha&amp;wid=515&amp;hei=293&amp;fit=crop" data-bi-bhvr="0" data-bi-hN="Xbox Series X" data-bi-compNm="Content card vertical 4 up - depth" data-bi-cN="Comprar ahora ">
                
                    
	
		<picture>
			<source srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Xbox-Series-X-Refurbished?fmt=png-alpha&amp;wid=380&amp;hei=213&amp;fit=crop" media="(min-width: 1400px)"/>
			<source srcset=" https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Xbox-Series-X-Refurbished?fmt=png-alpha&amp;wid=297&amp;hei=167&amp;fit=crop" media="(min-width: 1084px)"/>
			<source srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Xbox-Series-X-Refurbished?fmt=png-alpha&amp;wid=517&amp;hei=293&amp;fit=crop" media="(min-width: 860px)"/>
			<source srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Xbox-Series-X-Refurbished?fmt=png-alpha&amp;wid=406&amp;hei=230&amp;fit=crop" media="(min-width: 540px)"/>
			<img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Xbox-Series-X-Refurbished?fmt=png-alpha&wid=406&hei=230&fit=crop" loading="lazy" class="card-img" alt="Imagen de Xbox Series X "/>
		</picture>
	
	

                    
                
                    <!-- If any of the cards in a group contain a badge, all cards should include a card header -->
                    
                        <div class="card-header pt-3 px-4">
                            
      <span class="badge    " style="background-color: #ffb900">
            Desde 469,99€
      </span>

                        </div>
                    
                    <div class="card-body px-4 ">
                        
                            <h2 class="h3    ">
                                Xbox Series X
                            </h2>
                        
                        
                            <p> Disfruta de miles de juegos de cuatro generaciones de consolas: todos tienen mejor aspecto y son mejores en la Xbox Series X. Compra ahora y paga después con PayPal. </p>
                        
                    </div>
                    <div class="card-footer pt-3 px-4 pb-4">
                        

    
    <div class="link-group" data-automation-test-id="LinkGroupDiv-">
        
        
            
    
    
        
    
    

    

    
        <a data-bi-cn="Comprar ahora " data-bi-ecn="Comprar ahora " data-bi-ct="button" data-bi-pa="body" class=" btn btn-xbox-green   " data-target-uri="https://www.microsoft.com/es-es/store/collections/xboxseriesxconsoles?icid=Cat-Xbox-CC1-XSX-Generic " data-bi-assetid="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Xbox-Series-X-Refurbished?fmt=png-alpha&amp;wid=515&amp;hei=293&amp;fit=crop" data-bi-bhvr="0" data-bi-mto data-automation-test-id="button1-" aria-label="Click para comprar Xbox Series X" data-bi-ehn="Xbox Series X" data-bi-hn="Xbox Series X" data-bi-compnm="Content card vertical 4 up - depth" target="_self" href="https://www.microsoft.com/es-es/store/collections/xboxseriesxconsoles?icid=Cat-Xbox-CC1-XSX-Generic%20">
            Comprar ahora </a>
    

    

    

    


        
    </div>


                    </div>
            </div>
        </div>
    

    
    
        
    
    <script type="text/javascript" src="/etc.clientlibs/microsoft/components/content/content-card-item/v3/content-card-item/clientlibs/site.min.ACSHASHd41d8cd98f00b204e9800998ecf8427e.js" defer></script><script type="text/javascript" src="/etc.clientlibs/microsoft/components/content/content-card-item/v1/content-card-item/clientlibs/site.min.ACSHASHd41d8cd98f00b204e9800998ecf8427e.js" defer></script>


    



            
            
        
            
                
    

    
        
    



    

    
        
        
    
    
    
    
    
    
    
    
        <div class="col 
                    mb-5 mb-lg-0
                    " data-mount="click-group" clickgroup-telemetry-enabled>
            <div class="card material-card h-100 " data-target-uri="https://www.microsoft.com/es-es/store/collections/xboxseriessconsoles?icid=Cat-Xbox-CC2-XSS-Generic " data-bi-ecN="Comprar ahora" data-bi-cT="Content Card" data-bi-pA="body" data-bi-ehN="Xbox Series S" data-bi-assetid="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-XSS-CP-Xbox-Series-S-Evergreen-1?wid=515&amp;hei=293&amp;fit=crop" data-bi-bhvr="0" data-bi-hN="Xbox Series S" data-bi-compNm="Content card vertical 4 up - depth" data-bi-cN="Comprar ahora">
                
                    
	
		<picture>
			<source srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-XSS-CP-Xbox-Series-S-Evergreen-1?wid=380&amp;hei=213&amp;fit=crop" media="(min-width: 1400px)"/>
			<source srcset=" https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-XSS-CP-Xbox-Series-S-Evergreen-1?wid=297&amp;hei=167&amp;fit=crop" media="(min-width: 1084px)"/>
			<source srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-XSS-CP-Xbox-Series-S-Evergreen-1?wid=517&amp;hei=293&amp;fit=crop" media="(min-width: 860px)"/>
			<source srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-XSS-CP-Xbox-Series-S-Evergreen-1?wid=406&amp;hei=230&amp;fit=crop" media="(min-width: 540px)"/>
			<img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-XSS-CP-Xbox-Series-S-Evergreen-1?wid=406&hei=230&fit=crop" loading="lazy" class="card-img" alt="Imagen de Xbox Series S "/>
		</picture>
	
	

                    
                
                    <!-- If any of the cards in a group contain a badge, all cards should include a card header -->
                    
                        <div class="card-header pt-3 px-4">
                            
      <span class="badge  material-color-inverse  " style="background-color: #000">
            Lista para la acción 
      </span>

                        </div>
                    
                    <div class="card-body px-4 ">
                        
                            <h2 class="h3    ">
                                Xbox Series S
                            </h2>
                        
                        
                            <p> Deshazte de los discos y disfruta de juegos en modo solo digital. Añade Xbox Game Pass Ultimate y disfruta de una biblioteca instantánea de más de 100 juegos. Comprar ahora y paga después con PayPal. </p>
                        
                    </div>
                    <div class="card-footer pt-3 px-4 pb-4">
                        

    
    <div class="link-group" data-automation-test-id="LinkGroupDiv-">
        
        
            
    
    
        
    
    

    

    
        <a data-bi-cn="Comprar ahora" data-bi-ecn="Comprar ahora" data-bi-ct="button" data-bi-pa="body" class=" btn btn-xbox-green   " data-target-uri="https://www.microsoft.com/es-es/store/collections/xboxseriessconsoles?icid=Cat-Xbox-CC2-XSS-Generic " data-bi-assetid="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-XSS-CP-Xbox-Series-S-Evergreen-1?wid=515&amp;hei=293&amp;fit=crop" data-bi-bhvr="0" data-bi-mto data-automation-test-id="button1-" aria-label="Click para comprar Xbox Series S " data-bi-ehn="Xbox Series S" data-bi-hn="Xbox Series S" data-bi-compnm="Content card vertical 4 up - depth" target="_self" href="https://www.microsoft.com/es-es/store/collections/xboxseriessconsoles?icid=Cat-Xbox-CC2-XSS-Generic%20">
            Comprar ahora</a>
    

    

    

    


        
    </div>


                    </div>
            </div>
        </div>
    

    
    
        
    
    <script type="text/javascript" src="/etc.clientlibs/microsoft/components/content/content-card-item/v3/content-card-item/clientlibs/site.min.ACSHASHd41d8cd98f00b204e9800998ecf8427e.js" defer></script><script type="text/javascript" src="/etc.clientlibs/microsoft/components/content/content-card-item/v1/content-card-item/clientlibs/site.min.ACSHASHd41d8cd98f00b204e9800998ecf8427e.js" defer></script>


    



            
            
        
            
                
    

    
        
    



    

    
        
        
    
    
    
    
    
    
    
    
        <div class="col 
                    
                    mb-5 mb-sm-0" data-mount="click-group" clickgroup-telemetry-enabled>
            <div class="card material-card h-100 " data-target-uri="https://www.microsoft.com/es-es/d/xbox-series-s-1tb-black/8zcbgtt29h9c?icid=Cat-Xbox-CC3-CTA1-XSS-Black " data-bi-ecN="Comprar ahora" data-bi-cT="Content Card" data-bi-pA="body" data-bi-ehN="Power your dreams" data-bi-assetid="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Xbox-Series-S-1TB-Black-Merch-01?wid=515&amp;hei=293&amp;fit=crop" data-bi-bhvr="0" data-bi-hN="Power your dreams" data-bi-compNm="Content card vertical 4 up - depth" data-bi-cN="Comprar ahora">
                
                    
	
		<picture>
			<source srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Xbox-Series-S-1TB-Black-Merch-01?wid=380&amp;hei=213&amp;fit=crop" media="(min-width: 1400px)"/>
			<source srcset=" https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Xbox-Series-S-1TB-Black-Merch-01?wid=297&amp;hei=167&amp;fit=crop" media="(min-width: 1084px)"/>
			<source srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Xbox-Series-S-1TB-Black-Merch-01?wid=517&amp;hei=293&amp;fit=crop" media="(min-width: 860px)"/>
			<source srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Xbox-Series-S-1TB-Black-Merch-01?wid=406&amp;hei=230&amp;fit=crop" media="(min-width: 540px)"/>
			<img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Xbox-Series-S-1TB-Black-Merch-01?wid=406&hei=230&fit=crop" loading="lazy" class="card-img" alt="Imagen de la consola Xbox Series S negra "/>
		</picture>
	
	

                    
                
                    <!-- If any of the cards in a group contain a badge, all cards should include a card header -->
                    
                        <div class="card-header pt-3 px-4">
                            
      <span class="badge  material-color-dark  " style="background-color: #000">
            Nueva 
      </span>

                        </div>
                    
                    <div class="card-body px-4 ">
                        
                            <h2 class="h3    ">
                                Power your dreams
                            </h2>
                        
                        
                            <p> Presentamos Xbox Series S en Carbon Black, ahora con una SSD de 1 TB. Experimente la velocidad y el rendimiento de próxima generación. </p>
                        
                    </div>
                    <div class="card-footer pt-3 px-4 pb-4">
                        

    
    <div class="link-group" data-automation-test-id="LinkGroupDiv-">
        
        
            
    
    
        
    
    

    

    
        <a data-bi-cn="Comprar ahora" data-bi-ecn="Comprar ahora" data-bi-ct="button" data-bi-pa="body" class=" btn btn-xbox-green   " data-target-uri="https://www.microsoft.com/es-es/d/xbox-series-s-1tb-black/8zcbgtt29h9c?icid=Cat-Xbox-CC3-CTA1-XSS-Black " data-bi-assetid="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Xbox-Series-S-1TB-Black-Merch-01?wid=515&amp;hei=293&amp;fit=crop" data-bi-bhvr="0" data-bi-mto data-automation-test-id="button1-" aria-label="Botón para comprar Xbox Series S negra " data-bi-ehn="Power your dreams" data-bi-hn="Power your dreams" data-bi-compnm="Content card vertical 4 up - depth" target="_self" href="https://www.microsoft.com/es-es/d/xbox-series-s-1tb-black/8zcbgtt29h9c?icid=Cat-Xbox-CC3-CTA1-XSS-Black%20">
            Comprar ahora</a>
    

    

    

    


        
    </div>


                    </div>
            </div>
        </div>
    

    
    
        
    
    <script type="text/javascript" src="/etc.clientlibs/microsoft/components/content/content-card-item/v3/content-card-item/clientlibs/site.min.ACSHASHd41d8cd98f00b204e9800998ecf8427e.js" defer></script><script type="text/javascript" src="/etc.clientlibs/microsoft/components/content/content-card-item/v1/content-card-item/clientlibs/site.min.ACSHASHd41d8cd98f00b204e9800998ecf8427e.js" defer></script>


    



            
            
        
            
                
    

    
        
    



    

    
        
        
    
    
    
    
    
    
    
    
        <div class="col 
                    
                    " data-mount="click-group" clickgroup-telemetry-enabled>
            <div class="card material-card h-100 " data-target-uri="https://www.microsoft.com/es-es/d/mando-inalambrico-xbox/8xn59crbsqgz?icid=Cat-Xbox-CC4-XboxControllers " data-bi-ecN="Comprar mandos inalámbricos Xbox  " data-bi-cT="Content Card" data-bi-pA="body" data-bi-ehN="Mandos inalámbricos Xbox" data-bi-assetid="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Xbox-Wireless-Controller-7 -Colors?wid=515&amp;hei=293&amp;fit=crop" data-bi-bhvr="0" data-bi-hN="Mandos inalámbricos Xbox" data-bi-compNm="Content card vertical 4 up - depth" data-bi-cN="Comprar mandos inalámbricos Xbox  ">
                
                    
	
		<picture>
			<source srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Xbox-Wireless-Controller-7 -Colors?wid=380&amp;hei=213&amp;fit=crop" media="(min-width: 1400px)"/>
			<source srcset=" https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Xbox-Wireless-Controller-7 -Colors?wid=297&amp;hei=167&amp;fit=crop" media="(min-width: 1084px)"/>
			<source srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Xbox-Wireless-Controller-7 -Colors?wid=517&amp;hei=293&amp;fit=crop" media="(min-width: 860px)"/>
			<source srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Xbox-Wireless-Controller-7 -Colors?wid=406&amp;hei=230&amp;fit=crop" media="(min-width: 540px)"/>
			<img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Xbox-Wireless-Controller-7%20-Colors?wid=406&hei=230&fit=crop" loading="lazy" class="card-img" alt="Siete mandos inalámbricos Xbox en varios colores. "/>
		</picture>
	
	

                    
                
                    <!-- If any of the cards in a group contain a badge, all cards should include a card header -->
                    
                        <div class="card-header pt-3 px-4">
                            
      <span class="badge  material-color-inverse  " style="background-color: #000">
            Elige tu color favorito 
      </span>

                        </div>
                    
                    <div class="card-body px-4 ">
                        
                            <h2 class="h3    ">
                                Mandos inalámbricos Xbox
                            </h2>
                        
                        
                            <p> Juega a otro nivel con los mandos inalámbricos Xbox, diseñados para una mayor comodidad durante el juego. </p>
                        
                    </div>
                    <div class="card-footer pt-3 px-4 pb-4">
                        

    
    <div class="link-group" data-automation-test-id="LinkGroupDiv-">
        
        
            
    
    
        
    
    

    

    
        <a data-bi-cn="Comprar mandos inalámbricos Xbox  " data-bi-ecn="Comprar mandos inalámbricos Xbox  " data-bi-ct="button" data-bi-pa="body" class=" btn btn-xbox-green   " data-target-uri="https://www.microsoft.com/es-es/d/mando-inalambrico-xbox/8xn59crbsqgz?icid=Cat-Xbox-CC4-XboxControllers " data-bi-assetid="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Xbox-Wireless-Controller-7 -Colors?wid=515&amp;hei=293&amp;fit=crop" data-bi-bhvr="0" data-bi-mto data-automation-test-id="button1-" aria-label="Botón de comprar mandos inalámbricos Xbox  " data-bi-ehn="Mandos inalámbricos Xbox" data-bi-hn="Mandos inalámbricos Xbox" data-bi-compnm="Content card vertical 4 up - depth" target="_blank" href="https://www.microsoft.com/es-es/d/mando-inalambrico-xbox/8xn59crbsqgz?icid=Cat-Xbox-CC4-XboxControllers%20">
            Comprar mandos inalámbricos Xbox  </a>
    

    

    

    


        
    </div>


                    </div>
            </div>
        </div>
    

    
    
        
    
    <script type="text/javascript" src="/etc.clientlibs/microsoft/components/content/content-card-item/v3/content-card-item/clientlibs/site.min.ACSHASHd41d8cd98f00b204e9800998ecf8427e.js" defer></script><script type="text/javascript" src="/etc.clientlibs/microsoft/components/content/content-card-item/v1/content-card-item/clientlibs/site.min.ACSHASHd41d8cd98f00b204e9800998ecf8427e.js" defer></script>


    



            
            
        
    </div>
    
</section>



</div>
<div class="content-card carouselbase carousel mt-4 mb-4 aem-GridColumn aem-GridColumn--default--12" data-component-id="e4caa97101f9f7cf8317c819b353e6ed">

    




    
        
    
    <script type="text/javascript" src="/etc.clientlibs/microsoft/components/content/content-card/v1/content-card/clientlibs/site.min.ACSHASH92ba1cb9da3dd68605f38095fc34ba98.js" defer></script>


    



	
    





<section id="content-card-uidc7de" data-componentName="content-card-uidc7de">
    <div class="row row-cols-1   row-cols-sm-2 row-cols-lg-4">
        
            
                
    

    
        
    



    

    
        
        
    
    
    
    
    
    
    
    
        <div class="col 
                    mb-5 mb-lg-0
                    " data-mount="click-group" clickgroup-telemetry-enabled>
            <div class="card material-card h-100 " data-bi-cT="Content Card" data-bi-pA="body" data-bi-ehN="Mandos inalámbricos Xbox Elite Series 2 Core" data-bi-assetid="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Xbox-Elite-Wireless-Controller-Series-2-Black-White?wid=515&amp;hei=293&amp;fit=crop" data-bi-bhvr="0" data-bi-hN="Mandos inalámbricos Xbox Elite Series 2 Core" data-bi-compNm="Content card vertical 4 up - depth">
                
                    
	
		<picture>
			<source srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Xbox-Elite-Wireless-Controller-Series-2-Black-White?wid=380&amp;hei=213&amp;fit=crop" media="(min-width: 1400px)"/>
			<source srcset=" https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Xbox-Elite-Wireless-Controller-Series-2-Black-White?wid=297&amp;hei=167&amp;fit=crop" media="(min-width: 1084px)"/>
			<source srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Xbox-Elite-Wireless-Controller-Series-2-Black-White?wid=517&amp;hei=293&amp;fit=crop" media="(min-width: 860px)"/>
			<source srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Xbox-Elite-Wireless-Controller-Series-2-Black-White?wid=406&amp;hei=230&amp;fit=crop" media="(min-width: 540px)"/>
			<img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Xbox-Elite-Wireless-Controller-Series-2-Black-White?wid=406&hei=230&fit=crop" loading="lazy" class="card-img" alt="en de mándos inalámbricos Xbox en varios colores."/>
		</picture>
	
	

                    
                
                    <!-- If any of the cards in a group contain a badge, all cards should include a card header -->
                    
                        <div class="card-header pt-3 px-4">
                            
      <span class="badge  material-color-primary  " style="background-color: #000">
            Elige tu color favorito
      </span>

                        </div>
                    
                    <div class="card-body px-4 ">
                        
                            <h2 class="h3    ">
                                Mandos inalámbricos Xbox Elite Series 2 Core
                            </h2>
                        
                        
                            <p> Disfruta del Mando inalámbrico Xbox Elite Series 2 – Core. Mejora tu puntería con los nuevos sticks de tensión regulable y dispara más rápido con bloqueos más cortos de los gatillos de alta sensibilidad. </p>
                        
                    </div>
                    <div class="card-footer pt-3 px-4 pb-4">
                        

    
    <div class="link-group" data-automation-test-id="LinkGroupDiv-">
        
        
            
    
    
        
    
    

    

    
        <a data-bi-cn="Comprar mando inalámbrico Xbox Elite Series 2 Core" data-bi-ecn="Comprar mando inalámbrico Xbox Elite Series 2 Core" data-bi-ct="button" data-bi-pa="body" class=" btn btn-xbox-green   " data-target-uri="https://www.microsoft.com/es-es/d/Mando-inal%C3%A1mbrico-Xbox-Elite-Series-2-Core/8v7m3k0bsh52?icid=Cat-Xbox-CC5-EliteController-CTA1" data-bi-assetid="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Xbox-Elite-Wireless-Controller-Series-2-Black-White?wid=515&amp;hei=293&amp;fit=crop" data-bi-bhvr="0" data-bi-mto data-automation-test-id="button1-" aria-label="Click para comprar mando inalámbrico Xbox Elite Series 2" data-bi-ehn="Mandos inalámbricos Xbox Elite Series 2 Core" data-bi-hn="Mandos inalámbricos Xbox Elite Series 2 Core" data-bi-compnm="Content card vertical 4 up - depth" target="_self" href="https://www.microsoft.com/es-es/d/Mando-inal%C3%A1mbrico-Xbox-Elite-Series-2-Core/8v7m3k0bsh52?icid=Cat-Xbox-CC5-EliteController-CTA1">
            Comprar mando inalámbrico Xbox Elite Series 2 Core</a>
    

    

    

    


        
            
    
    
        
    
    

    
        <a data-bi-cn="Comprar mando inalámbricos Xbox Elite Series 2" data-bi-ecn="Comprar mando inalámbricos Xbox Elite Series 2" data-bi-ct="cta" data-bi-pa="body" class=" cta text-green  " data-target-uri="https://www.microsoft.com/es-es/d/mando-inalambrico-xbox-elite-series-2/8rsn7j6375gg?icid=Cat-Xbox-CC5-EliteController-CTA2" data-bi-assetid="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Xbox-Elite-Wireless-Controller-Series-2-Black-White?wid=515&amp;hei=293&amp;fit=crop" data-bi-bhvr="0" data-bi-mto data-automation-test-id="cta2-" aria-label="Click para comprar mandos inalámbricos Xbox Elite Series 2" target="_self" data-bi-ehn="Mandos inalámbricos Xbox Elite Series 2 Core" data-bi-hn="Mandos inalámbricos Xbox Elite Series 2 Core" data-bi-compnm="Content card vertical 4 up - depth" href="https://www.microsoft.com/es-es/d/mando-inalambrico-xbox-elite-series-2/8rsn7j6375gg?icid=Cat-Xbox-CC5-EliteController-CTA2">
            
            Comprar mando inalámbricos Xbox Elite Series 2
             <span class="glyph" aria-hidden="true"></span> 
        </a>
    

    

    

    

    


        
    </div>


                    </div>
            </div>
        </div>
    

    
    
        
    
    <script type="text/javascript" src="/etc.clientlibs/microsoft/components/content/content-card-item/v3/content-card-item/clientlibs/site.min.ACSHASHd41d8cd98f00b204e9800998ecf8427e.js" defer></script><script type="text/javascript" src="/etc.clientlibs/microsoft/components/content/content-card-item/v1/content-card-item/clientlibs/site.min.ACSHASHd41d8cd98f00b204e9800998ecf8427e.js" defer></script>


    



            
            
        
            
                
    

    
        
    



    

    
        
        
    
    
    
    
    
    
    
    
        <div class="col 
                    mb-5 mb-lg-0
                    " data-mount="click-group" clickgroup-telemetry-enabled>
            <div class="card material-card h-100 " data-target-uri="https://www.microsoft.com/es-es/d/auricular-inalambrico-xbox/8z1dcql8z512?icid=Cat-Xbox-CC6-XboxHeadset " data-bi-ecN="Comprar ahora " data-bi-cT="Content Card" data-bi-pA="body" data-bi-ehN="Auricular inalámbrico Xbox" data-bi-assetid="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/CC-AEM-Xbox-Wireless-Headset?wid=515&amp;hei=293&amp;fit=crop" data-bi-bhvr="0" data-bi-hN="Auricular inalámbrico Xbox" data-bi-compNm="Content card vertical 4 up - depth" data-bi-cN="Comprar ahora ">
                
                    
	
		<picture>
			<source srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/CC-AEM-Xbox-Wireless-Headset?wid=380&amp;hei=213&amp;fit=crop" media="(min-width: 1400px)"/>
			<source srcset=" https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/CC-AEM-Xbox-Wireless-Headset?wid=297&amp;hei=167&amp;fit=crop" media="(min-width: 1084px)"/>
			<source srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/CC-AEM-Xbox-Wireless-Headset?wid=517&amp;hei=293&amp;fit=crop" media="(min-width: 860px)"/>
			<source srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/CC-AEM-Xbox-Wireless-Headset?wid=406&amp;hei=230&amp;fit=crop" media="(min-width: 540px)"/>
			<img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/CC-AEM-Xbox-Wireless-Headset?wid=406&hei=230&fit=crop" loading="lazy" class="card-img" alt="Imagen de auricular inalámbrico Xbox "/>
		</picture>
	
	

                    
                
                    <!-- If any of the cards in a group contain a badge, all cards should include a card header -->
                    
                        <div class="card-header pt-3 px-4">
                            
      <span class="badge  material-color-primary  " style="background-color: #000">
            Alto y claro 
      </span>

                        </div>
                    
                    <div class="card-body px-4 ">
                        
                            <h2 class="h3    ">
                                Auricular inalámbrico Xbox
                            </h2>
                        
                        
                            <p> Silencio automático y aislamiento de voz para charlar con gran nitidez, diseño intuitivo y emparejamiento directo con tu consola. </p>
                        
                    </div>
                    <div class="card-footer pt-3 px-4 pb-4">
                        

    
    <div class="link-group" data-automation-test-id="LinkGroupDiv-">
        
        
            
    
    
        
    
    

    

    
        <a data-bi-cn="Comprar ahora " data-bi-ecn="Comprar ahora " data-bi-ct="button" data-bi-pa="body" class=" btn btn-xbox-green   " data-target-uri="https://www.microsoft.com/es-es/d/auricular-inalambrico-xbox/8z1dcql8z512?icid=Cat-Xbox-CC6-XboxHeadset " data-bi-assetid="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/CC-AEM-Xbox-Wireless-Headset?wid=515&amp;hei=293&amp;fit=crop" data-bi-bhvr="0" data-bi-mto data-automation-test-id="button1-" aria-label="Botón de comprar mandos inalámbricos Xbox " data-bi-ehn="Auricular inalámbrico Xbox" data-bi-hn="Auricular inalámbrico Xbox" data-bi-compnm="Content card vertical 4 up - depth" target="_self" href="https://www.microsoft.com/es-es/d/auricular-inalambrico-xbox/8z1dcql8z512?icid=Cat-Xbox-CC6-XboxHeadset%20">
            Comprar ahora </a>
    

    

    

    


        
    </div>


                    </div>
            </div>
        </div>
    

    
    
        
    
    <script type="text/javascript" src="/etc.clientlibs/microsoft/components/content/content-card-item/v3/content-card-item/clientlibs/site.min.ACSHASHd41d8cd98f00b204e9800998ecf8427e.js" defer></script><script type="text/javascript" src="/etc.clientlibs/microsoft/components/content/content-card-item/v1/content-card-item/clientlibs/site.min.ACSHASHd41d8cd98f00b204e9800998ecf8427e.js" defer></script>


    



            
            
        
            
                
    

    
        
    



    

    
        
        
    
    
    
    
    
    
    
    
        <div class="col 
                    
                    mb-5 mb-sm-0" data-mount="click-group" clickgroup-telemetry-enabled>
            <div class="card material-card h-100 " data-target-uri="https://www.xbox.com/es-es/games/store/xbox-game-pass-ultimate/cfq7ttc0khs0?icid=Cat-Xbox-CC7-CTA1-XGPU" data-bi-ecN="Únete ahora" data-bi-cT="Content Card" data-bi-pA="body" data-bi-ehN="Xbox Game Pass Ultimate " data-bi-assetid="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-XGP-Starfield-SoT-Forza-Minecraft-MSFS?wid=515&amp;hei=293&amp;fit=crop" data-bi-bhvr="0" data-bi-hN="Xbox Game Pass Ultimate " data-bi-compNm="Content card vertical 4 up - depth" data-bi-cN="Únete ahora">
                
                    
	
		<picture>
			<source srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-XGP-Starfield-SoT-Forza-Minecraft-MSFS?wid=380&amp;hei=213&amp;fit=crop" media="(min-width: 1400px)"/>
			<source srcset=" https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-XGP-Starfield-SoT-Forza-Minecraft-MSFS?wid=297&amp;hei=167&amp;fit=crop" media="(min-width: 1084px)"/>
			<source srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-XGP-Starfield-SoT-Forza-Minecraft-MSFS?wid=517&amp;hei=293&amp;fit=crop" media="(min-width: 860px)"/>
			<source srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-XGP-Starfield-SoT-Forza-Minecraft-MSFS?wid=406&amp;hei=230&amp;fit=crop" media="(min-width: 540px)"/>
			<img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-XGP-Starfield-SoT-Forza-Minecraft-MSFS?wid=406&hei=230&fit=crop" loading="lazy" class="card-img" alt="Siete mandos inalámbricos Xbox en varios colores."/>
		</picture>
	
	

                    
                
                    <!-- If any of the cards in a group contain a badge, all cards should include a card header -->
                    
                        <div class="card-header pt-3 px-4">
                            
      <span class="badge  material-surface  " style="background-color: #ffb900">
            Únete por 1€
      </span>

                        </div>
                    
                    <div class="card-body px-4 ">
                        
                            <h2 class="h3    ">
                                Xbox Game Pass Ultimate 
                            </h2>
                        
                        
                            <p>  Únete a Xbox Game Pass Ultimate o PC Game Pass y desbloquea cientos de juegos increíbles y mucho más por 1€. Oferta disponible solo para nuevos suscriptores.  </p>
                        
                    </div>
                    <div class="card-footer pt-3 px-4 pb-4">
                        

    
    <div class="link-group" data-automation-test-id="LinkGroupDiv-">
        
        
            
    
    
        
    
    

    

    
        <a data-bi-cn="Únete ahora" data-bi-ecn="Únete ahora" data-bi-ct="button" data-bi-pa="body" class=" btn btn-xbox-green   " data-target-uri="https://www.xbox.com/es-es/games/store/xbox-game-pass-ultimate/cfq7ttc0khs0?icid=Cat-Xbox-CC7-CTA1-XGPU" data-bi-assetid="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-XGP-Starfield-SoT-Forza-Minecraft-MSFS?wid=515&amp;hei=293&amp;fit=crop" data-bi-bhvr="0" data-bi-mto data-automation-test-id="button1-" aria-label="Botón para unirse a Xbox Game Pass Ultimate" data-bi-ehn="Xbox Game Pass Ultimate " data-bi-hn="Xbox Game Pass Ultimate " data-bi-compnm="Content card vertical 4 up - depth" target="_self" href="https://www.xbox.com/es-es/games/store/xbox-game-pass-ultimate/cfq7ttc0khs0?icid=Cat-Xbox-CC7-CTA1-XGPU">
            Únete ahora</a>
    

    

    

    


        
    </div>


                    </div>
            </div>
        </div>
    

    
    
        
    
    <script type="text/javascript" src="/etc.clientlibs/microsoft/components/content/content-card-item/v3/content-card-item/clientlibs/site.min.ACSHASHd41d8cd98f00b204e9800998ecf8427e.js" defer></script><script type="text/javascript" src="/etc.clientlibs/microsoft/components/content/content-card-item/v1/content-card-item/clientlibs/site.min.ACSHASHd41d8cd98f00b204e9800998ecf8427e.js" defer></script>


    



            
            
        
            
                
    

    
        
    



    

    
        
        
    
    
    
    
    
    
    
    
        <div class="col 
                    
                    " data-mount="click-group" clickgroup-telemetry-enabled>
            <div class="card material-card h-100 " data-target-uri="https://www.microsoft.com/es-es/p/tarjeta-regalo-digital-de-xbox/cfq7ttc0k64h/0003?icid=Cat-Xbox-Cc8-giftcard" data-bi-ecN="Comprar ahora" data-bi-cT="Content Card" data-bi-pA="body" data-bi-ehN="Tu regalas, ellos eligen" data-bi-assetid="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Gift-Cards-Refresh-Xbox-es-ES?wid=515&amp;hei=293&amp;fit=crop" data-bi-bhvr="0" data-bi-hN="Tu regalas, ellos eligen" data-bi-compNm="Content card vertical 4 up - depth" data-bi-cN="Comprar ahora">
                
                    
	
		<picture>
			<source srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Gift-Cards-Refresh-Xbox-es-ES?wid=380&amp;hei=213&amp;fit=crop" media="(min-width: 1400px)"/>
			<source srcset=" https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Gift-Cards-Refresh-Xbox-es-ES?wid=297&amp;hei=167&amp;fit=crop" media="(min-width: 1084px)"/>
			<source srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Gift-Cards-Refresh-Xbox-es-ES?wid=517&amp;hei=293&amp;fit=crop" media="(min-width: 860px)"/>
			<source srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Gift-Cards-Refresh-Xbox-es-ES?wid=406&amp;hei=230&amp;fit=crop" media="(min-width: 540px)"/>
			<img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Gift-Cards-Refresh-Xbox-es-ES?wid=406&hei=230&fit=crop" loading="lazy" class="card-img" alt="Imagen de tarjeta regalo Xbox"/>
		</picture>
	
	

                    
                
                    <!-- If any of the cards in a group contain a badge, all cards should include a card header -->
                    
                        <div class="card-header pt-3 px-4">
                            
      <span class="badge  material-color-inverse  " style="background-color: #000">
            El mejor regalo para gamers
      </span>

                        </div>
                    
                    <div class="card-body px-4 ">
                        
                            <h2 class="h3    ">
                                Tu regalas, ellos eligen
                            </h2>
                        
                        
                            <p> Ofrece a tu jugador favorito la posibilidad de elegir entre las descargas de juegos más populares para Xbox y PC. Además, pueden conseguir fantásticas aplicaciones, películas, programas de TV, accesorios y mucho más. </p>
                        
                    </div>
                    <div class="card-footer pt-3 px-4 pb-4">
                        

    
    <div class="link-group" data-automation-test-id="LinkGroupDiv-">
        
        
            
    
    
        
    
    

    

    
        <a data-bi-cn="Comprar ahora" data-bi-ecn="Comprar ahora" data-bi-ct="button" data-bi-pa="body" class=" btn btn-xbox-green   " data-target-uri="https://www.microsoft.com/es-es/p/tarjeta-regalo-digital-de-xbox/cfq7ttc0k64h/0003?icid=Cat-Xbox-Cc8-giftcard" data-bi-assetid="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Gift-Cards-Refresh-Xbox-es-ES?wid=515&amp;hei=293&amp;fit=crop" data-bi-bhvr="0" data-bi-mto data-automation-test-id="button1-" aria-label="Botón para comprar la tarjeta regalo Xbox" data-bi-ehn="Tu regalas, ellos eligen" data-bi-hn="Tu regalas, ellos eligen" data-bi-compnm="Content card vertical 4 up - depth" target="_self" href="https://www.microsoft.com/es-es/p/tarjeta-regalo-digital-de-xbox/cfq7ttc0k64h/0003?icid=Cat-Xbox-Cc8-giftcard">
            Comprar ahora</a>
    

    

    

    


        
    </div>


                    </div>
            </div>
        </div>
    

    
    
        
    
    <script type="text/javascript" src="/etc.clientlibs/microsoft/components/content/content-card-item/v3/content-card-item/clientlibs/site.min.ACSHASHd41d8cd98f00b204e9800998ecf8427e.js" defer></script><script type="text/javascript" src="/etc.clientlibs/microsoft/components/content/content-card-item/v1/content-card-item/clientlibs/site.min.ACSHASHd41d8cd98f00b204e9800998ecf8427e.js" defer></script>


    



            
            
        
    </div>
    
</section>



</div>

          
     </div>
</div></div>

    
</div>
</div>
<div class="responsivegrid aem-GridColumn aem-GridColumn--default--12">


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    
    
</div>
</div>
<div class="responsivegrid aem-GridColumn aem-GridColumn--default--12">


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    
    
</div>
</div>
<div class="responsivegrid aem-GridColumn aem-GridColumn--default--12">


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    
    
</div>
</div>
<div class="responsivegrid aem-GridColumn aem-GridColumn--default--12">


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    
    
</div>
</div>
<div class="responsivegrid aem-GridColumn aem-GridColumn--default--12">


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    
    
</div>
</div>
<div class="responsivegrid mt-md-5 aem-GridColumn aem-GridColumn--default--12">


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="layout-container responsivegrid aem-GridColumn aem-GridColumn--default--12" data-component-id="51e927945f39700e952adb9bd3dc97e7">





<div class="aem-Grid aem-Grid--12 aem-Grid--default--12  grid-image-layout-container-uidf962  heading-bg-color-layout-container-uidf962" data-automation-test-id="layout-container-uidf962">
          <style data-automation-test-id="headingColor-layout-container-uidf962">
                    .heading-bg-color-layout-container-uidf962{
                         background-color:  !important;
                    }
          </style>
     
     <div class="container" id="layout-container-uidf962" data-componentName="layout-container-uidf962">
          
          
          <div class="productcards mb-md-5 aem-GridColumn aem-GridColumn--default--12" data-component-id="277fdfcaff130aee6c0e8803411261b3">


    
    






    


    
        


        
            
                
                        
                        
                            <div data-ssrmodule="ProductCards" data-props="%7B%22cards%22%3A%5B%7B%22compName%22%3A%22Product%20Placement%20Carousel%3A%20Games%22%2C%22description%22%3A%7B%22full%22%3A%5B%22Explora%20mundos%20generados%20aleatoriamente%20y%20construye%20cosas%20maravillosas%2C%20desde%20una%20simple%20casa%20hasta%20un%20fastuoso%20castillo.%20Juega%20en%20modo%20creativo%20con%20recursos%20ilimitados%20o%20explota%20a%20lo%20grande%20el%20mundo%20con%20el%20modo%20supervivencia%2C%20fabricando%20armas%20y%20armaduras%20para%20deshacerte%20de%20peligrosas%20criaturas.%5Cr%22%2C%22%5Cr%22%2C%22CARACTER%C3%8DSTICAS%5Cr%22%2C%22%C2%A1Packs%20de%20aspectos%2C%20texturas%20y%20popurr%C3%AD%20de%20la%20comunidad!%20Encontrar%C3%A1s%20m%C3%A1s%20informaci%C3%B3n%20en%20minecraft.net%2Fmarketplace.%20%5Cr%22%2C%22%5Cr%22%2C%22%C2%A1ADD-ONS!%20Descubre%20m%C3%A1s%20en%20minecraft.net%2Faddons%2C%20donde%20podr%C3%A1s%20probar%20un%20anticipo%20de%20forma%20gratuita%20o%20aprender%20a%20crear%20los%20tuyos%20propios.%5Cr%22%2C%22%5Cr%22%2C%22%C2%A1Realms!%20Juega%20con%20hasta%2010%20amigos%20de%20plataformas%20diferentes%20en%20mundos%20que%20siempre%20existen%2C%20en%20cualquier%20momento%20y%20en%20cualquier%20lugar.%20%C2%A1Pru%C3%A9balo%20gratis%20en%20la%20aplicaci%C3%B3n%20durante%2030%20d%C3%ADas!%20Descubre%20m%C3%A1s%20en%20http%3A%2F%2Fminecraft.net%2Frealms.%5Cr%22%2C%22%5Cr%22%2C%22Compatibilidad%20con%20Xbox%20Live%20(tambi%C3%A9n%20con%20logros)%5Cr%22%2C%22%5Cr%22%2C%22Juego%20multiplataforma%20para%20hasta%20ocho%20jugadores%3A%20Windows%2010%2C%20dispositivos%20Android%2C%20tel%C3%A9fonos%20y%20tablets%20iOS%2C%20Xbox%20One%20y%20plataformas%20de%20realidad%20virtual.%5Cr%22%2C%22%5Cr%22%2C%22Los%20comandos%20te%20permitir%C3%A1n%20ajustar%20tu%20manera%20de%20jugar.%20Ahora%20podr%C3%A1s%20regalar%20objetos%2C%20invocar%20enemigos%20y%20cambiar%20la%20hora%20del%20d%C3%ADa%20entre%20otras%20cosas.%22%5D%2C%22showReadMore%22%3Atrue%2C%22visibleText%22%3A%5B%22Explora%20mundos%20generados%20aleatoriamente%20y%20construye%20cosas%20maravillosas%2C%20desde%20una...%22%5D%7D%2C%22subscriptionBadgeText%22%3A%22Game%20Pass%22%2C%22idx%22%3A0%2C%22image%22%3A%7B%22uri%22%3A%22https%3A%2F%2Fstore-images.s-microsoft.com%2Fimage%2Fapps.17382.13850085746326678.a9b1e0db-29d0-40f3-a86c-2155353d053c.b8233937-28f5-4fdf-a696-6ef666a6ff6e%3F%22%2C%22alt%22%3A%22Minecraft%22%2C%22background%22%3A%22%22%2C%22system%22%3A%22store-images%22%7D%2C%22isCondensed%22%3Afalse%2C%22listDisplayName%22%3A%22Juegos%20mejor%20valorados%22%2C%22locale%22%3A%22es-es%22%2C%22newTab%22%3Afalse%2C%22pdpUri%22%3A%22https%3A%2F%2Fwww.microsoft.com%2Fes-es%2Fp%2Fminecraft%2F9mvxmvt8zkwc%22%2C%22preOrder%22%3Afalse%2C%22price%22%3A%7B%22inAppPurchases%22%3Atrue%2C%22fromText%22%3A%22%22%2C%22currentPrice%22%3A%22Incluido%22%2C%22screenReaderText%22%3A%22Incluido%22%7D%2C%22productId%22%3A%229mvxmvt8zkwc%22%2C%22skuId%22%3A%220010%22%2C%22availabilityId%22%3A%22B1DZXZ868M8P%22%2C%22productHeadingTagLevel%22%3A%22h3%22%2C%22showCtaLink%22%3Afalse%2C%22title%22%3A%22Minecraft%22%2C%22inStock%22%3Atrue%7D%2C%7B%22compName%22%3A%22Product%20Placement%20Carousel%3A%20Games%22%2C%22description%22%3A%7B%22full%22%3A%5B%22EL%20JUEGO%20M%C3%81S%20GALARDONADO%20DE%20TODA%20UNA%20GENERACI%C3%93N%5Cr%22%2C%22AHORA%20MEJORADO%20PARA%20LA%20NUEVA%20GENERACI%C3%93N%20DE%20CONSOLAS%5Cr%22%2C%22%20%5Cr%22%2C%22INFORMACI%C3%93N%20SOBRE%20EL%20JUEGO%5Cr%22%2C%22Eres%20Geralt%20de%20Rivia%2C%20cazador%20de%20monstruos.%20En%20un%20continente%20devastado%20por%20la%20guerra%20e%20infestado%20de%20criaturas%2C%20tu%20misi%C3%B3n%20es%20encontrar%20a%20Ciri%2C%20la%20ni%C3%B1a%20de%20la%20profec%C3%ADa%2C%20un%20arma%20viviente%20que%20puede%20alterar%20el%20mundo%20tal%20y%20como%20lo%20conocemos.%5Cr%22%2C%22%20%5Cr%22%2C%22Actualizado%20a%20la%20versi%C3%B3n%20m%C3%A1s%20reciente%2C%20The%20Witcher%203%3A%20Wild%20Hunt%20incluye%20nuevo%20contenido%20publicado%20para%20el%20juego%2C%20junto%20con%20todos%20los%20nuevos%20a%C3%B1adidos%3A%20un%20modo%20foto%20integrado%2C%20objetos%20inspirados%20en%20la%20serie%20de%20Netflix%20The%20Witcher%20%E2%80%94espadas%2C%20armaduras%20y%20atuendos%20alternativos%E2%80%94%20%C2%A1y%20muchas%20cosas%20m%C3%A1s!%5Cr%22%2C%22%20%5Cr%22%2C%22ACTUALIZADO%20PARA%20XBOX%20SERIES%20X%7CS%5Cr%22%2C%22%C2%A1Contempla%20el%20siniestro%20mundo%20de%20fantas%C3%ADa%20del%20continente%20como%20nunca%20antes!%20La%20versi%C3%B3n%20de%20The%20Witcher%203%3A%20Wild%20Hunt%20para%20Xbox%20Series%20X%7CS%20ha%20sido%20mejorada%20con%20numerosos%20efectos%20visuales%20y%20mejoras%20t%C3%A9cnicas%2C%20incluidos%20un%20nivel%20de%20detalle%20perfeccionado%2C%20tiempos%20de%20carga%20m%C3%A1s%20r%C3%A1pidos%2C%20una%20gran%20variedad%20de%20mods%20creados%20y%20reci%C3%A9n%20desarrollados%20por%20la%20comunidad%2C%20trazado%20de%20rayos%20en%20tiempo%20real%20y%20mucho%20m%C3%A1s%20%E2%80%94todo%20ello%20implementado%20pensando%20en%20la%20potencia%20de%20las%20nuevas%20consolas%E2%80%94%2C%20adem%C3%A1s%20del%20modo%20foto%20integrado.%20%5Cr%22%2C%22%20%5Cr%22%2C%22CONVI%C3%89RTETE%20EN%20UN%20EXPERTO%20CAZADOR%20DE%20MONSTRUOS%20A%20SUELDO%5Cr%22%2C%22Adiestrados%20desde%20su%20infancia%20y%20mutados%20para%20obtener%20habilidades%2C%20fuerza%20y%20reflejos%20sobrehumanos%2C%20los%20brujos%20sirven%20como%20contrapeso%20al%20mundo%20infestado%20de%20monstruos%20en%20el%20que%20viven.%5Cr%22%2C%22%E2%80%A2%20Destruye%20a%20tus%20enemigos%20de%20formas%20espantosas%20como%20cazador%20de%20monstruos%20profesional%2C%20armado%20con%20una%20gran%20variedad%20de%20armas%20mejorables%2C%20pociones%20de%20mutaci%C3%B3n%20y%20magia%20de%20combate.%5Cr%22%2C%22%E2%80%A2%20Da%20caza%20a%20una%20amplia%20gama%20de%20monstruos%20ex%C3%B3ticos%3A%20desde%20bestias%20salvajes%20que%20merodean%20por%20los%20pasos%20de%20monta%C3%B1a%2C%20hasta%20astutos%20depredadores%20sobrenaturales%20que%20acechan%20en%20las%20sombras%20de%20los%20callejones%20de%20ciudades%20densamente%20pobladas.%5Cr%22%2C%22%E2%80%A2%20Invierte%20tus%20recompensas%20en%20mejorar%20tus%20armas%20y%20comprar%20armaduras%20personalizadas%2C%20o%20g%C3%A1statelas%20en%20carreras%20de%20caballos%2C%20juegos%20de%20cartas%2C%20peleas%20a%20pu%C3%B1etazos%20y%20otros%20placeres%20que%20te%20ofrece%20la%20vida.%5Cr%22%2C%22%20%5Cr%22%2C%22EXPLORA%20UN%20MUNDO%20ABIERTO%20DE%20FANTAS%C3%8DA%20DE%20MORAL%20AMBIGUA%5Cr%22%2C%22Creado%20para%20vivir%20aventuras%20interminables%2C%20el%20enorme%20mundo%20abierto%20de%20The%20Witcher%20establece%20un%20nuevo%20est%C3%A1ndar%20en%20cuanto%20a%20tama%C3%B1o%2C%20profundidad%20y%20complejidad.%5Cr%22%2C%22%E2%80%A2%20Recorre%20un%20mundo%20abierto%20fant%C3%A1stico%3A%20explora%20ruinas%20olvidadas%2C%20cuevas%20y%20naufragios%2C%20comercia%20con%20mercaderes%20y%20herreros%20enanos%20en%20las%20ciudades%2C%20y%20caza%20en%20llanuras%2C%20monta%C3%B1as%20y%20mares.%5Cr%22%2C%22%E2%80%A2%20Trata%20con%20generales%20traicioneros%2C%20brujas%20retorcidas%20y%20miembros%20de%20la%20realeza%20corruptos%20para%20prestar%20servicios%20siniestros%20y%20peligrosos.%5Cr%22%2C%22%E2%80%A2%20Toma%20decisiones%20que%20van%20m%C3%A1s%20all%C3%A1%20del%20bien%20y%20el%20mal%2C%20y%20afronta%20sus%20trascendentales%20consecuencias.%5Cr%22%2C%22%20%5Cr%22%2C%22BUSCA%20A%20LA%20NI%C3%91A%20DE%20LA%20PROFEC%C3%8DA%5Cr%22%2C%22Acepta%20el%20contrato%20m%C3%A1s%20importante%20de%20tu%20vida%3A%20buscar%20a%20la%20ni%C3%B1a%20de%20la%20profec%C3%ADa%2C%20la%20clave%20para%20salvar%20o%20destruir%20el%20mundo.%5Cr%22%2C%22%E2%80%A2%20En%20tiempos%20de%20guerra%2C%20encuentra%20a%20la%20ni%C3%B1a%20de%20la%20profec%C3%ADa%2C%20un%20arma%20viviente%20profetizada%20por%20antiguas%20leyendas%20%C3%A9lficas.%5Cr%22%2C%22%E2%80%A2%20Lucha%20contra%20fieros%20gobernantes%2C%20esp%C3%ADritus%20de%20la%20naturaleza%20e%20incluso%20contra%20una%20amenaza%20de%20otra%20dimensi%C3%B3n%2C%20todos%20dispuestos%20a%20controlar%20este%20mundo.%5Cr%22%2C%22%E2%80%A2%20Define%20tu%20destino%20en%20un%20mundo%20que%20tal%20vez%20no%20merezca%20la%20pena%20salvar.%22%5D%2C%22showReadMore%22%3Atrue%2C%22visibleText%22%3A%5B%22EL%20JUEGO%20M%C3%81S%20GALARDONADO%20DE%20TODA%20UNA%20GENERACI%C3%93N%5Cr%22%2C%22AHORA%20MEJORADO%20PARA%20LA%20NUEVA...%22%5D%7D%2C%22idx%22%3A1%2C%22image%22%3A%7B%22uri%22%3A%22https%3A%2F%2Fstore-images.s-microsoft.com%2Fimage%2Fapps.13986.69531514236615003.534d4f71-03cb-4592-929a-b00a7de28b58.c4152bcf-9088-4e35-98b5-9a2e44b927c5%3F%22%2C%22alt%22%3A%22The%20Witcher%203%3A%20Wild%20Hunt%22%2C%22background%22%3A%22%22%2C%22system%22%3A%22store-images%22%7D%2C%22isCondensed%22%3Afalse%2C%22listDisplayName%22%3A%22Juegos%20mejor%20valorados%22%2C%22locale%22%3A%22es%22%2C%22newTab%22%3Afalse%2C%22pdpUri%22%3A%22https%3A%2F%2Fwww.microsoft.com%2Fes-es%2Fp%2Fthe-witcher-3-wild-hunt%2Fbr765873cqjd%22%2C%22preOrder%22%3Afalse%2C%22price%22%3A%7B%22inAppPurchases%22%3Atrue%2C%22fromText%22%3A%22%22%2C%22currentPrice%22%3A%2229%2C99%C2%A0%E2%82%AC%22%2C%22screenReaderText%22%3A%2229%2C99%C2%A0%E2%82%AC%22%7D%2C%22productId%22%3A%22br765873cqjd%22%2C%22skuId%22%3A%220001%22%2C%22availabilityId%22%3A%22B19HFTF2X759%22%2C%22productHeadingTagLevel%22%3A%22h3%22%2C%22showCtaLink%22%3Afalse%2C%22title%22%3A%22The%20Witcher%203%3A%20Wild%20Hunt%22%2C%22inStock%22%3Atrue%7D%2C%7B%22compName%22%3A%22Product%20Placement%20Carousel%3A%20Games%22%2C%22description%22%3A%7B%22full%22%3A%5B%22%C2%A1Milo%20llega%20a%20la%20Tierra%20y%20se%20da%20cuenta%20de%20que%20es%20muy%20peque%C3%B1o%2C%20no%20hay%20ni%20un%20alma%20y%20no%20ha%20pasado%20ni%20un%20solo%20d%C3%ADa%20desde%20el%20a%C3%B1o%201991!%5Cr%22%2C%22%C2%A1Haz%20equipo%20con%20los%20misteriosos%20tinykin%20y%20usa%20sus%20poderes%20especiales%20para%20crear%20escaleras%2C%20puentes%2C%20explosiones%20y%20mucho%20m%C3%A1s!%5Cr%22%2C%22%C2%A1Encuentra%20el%20camino%20de%20vuelta%20a%20casa%20por%20una%20extensa%20y%20diminuta%20metr%C3%B3polis%20y%20descubre%20el%20mayor%20misterio%20de%20la%20Tierra!%5Cr%22%2C%22%5Cr%22%2C%22%E2%80%94%20Explora%20ciudades%20de%20hormigas%2C%20escarabajos%20y%20otros%20insectos%20erigidas%20dentro%20de%20una%20casa%20gigante.%5Cr%22%2C%22%E2%80%94%20Te%20encontrar%C3%A1s%20personajes%20por%20el%20camino%20y%20conocer%C3%A1s%20sus%20historias%20y%20su%20pasado.%5Cr%22%2C%22%E2%80%94%20%C2%A1Atrapa%20m%C3%A1s%20de%20cien%20tinykin%20en%20cada%20ciudad%20y%20usas%20sus%20habilidades%20especiales%20para%20llegar%20m%C3%A1s%20alto%2C%20derribar%20puertas%20y%20resolver%20los%20problemas%20de%20la%20ciudad!%5Cr%22%2C%22%E2%80%94%20%C2%A1Patina%20con%20el%20minimonojab%C3%B3n%20de%20Milo!%20Salta%2C%20grinda%20y%20despl%C3%A1zate%20por%20la%20casa.%5Cr%22%2C%22%E2%80%94%20%C2%A1Consigue%20mejoras%20para%20aumentar%20la%20calidad%20de%20la%20mochila%20burbujadora%20de%20Milo%2C%20construir%20el%20museo%20de%20Ardwin%20y%20completar%20la%20m%C3%A1quina%20misteriosa%20de%20Ridmi!%22%5D%2C%22showReadMore%22%3Atrue%2C%22visibleText%22%3A%5B%22%C2%A1Milo%20llega%20a%20la%20Tierra%20y%20se%20da%20cuenta%20de%20que%20es%20muy%20peque%C3%B1o%2C%20no%20hay%20ni%20un%20alma%20y%20no...%22%5D%7D%2C%22idx%22%3A2%2C%22image%22%3A%7B%22uri%22%3A%22https%3A%2F%2Fstore-images.s-microsoft.com%2Fimage%2Fapps.16944.13705408154411770.2b22153d-5a9e-4527-9b1e-67532d3e2ef4.60f2e2f5-0ad5-4051-abe2-2f4d6a81eabd%3F%22%2C%22alt%22%3A%22Tinykin%22%2C%22background%22%3A%22%22%2C%22system%22%3A%22store-images%22%7D%2C%22isCondensed%22%3Afalse%2C%22listDisplayName%22%3A%22Juegos%20mejor%20valorados%22%2C%22locale%22%3A%22es%22%2C%22newTab%22%3Afalse%2C%22pdpUri%22%3A%22https%3A%2F%2Fwww.microsoft.com%2Fes-es%2Fp%2Ftinykin%2F9nllp82xvskh%22%2C%22preOrder%22%3Afalse%2C%22price%22%3A%7B%22inAppPurchases%22%3Afalse%2C%22fromText%22%3A%22%22%2C%22currentPrice%22%3A%2224%2C99%C2%A0%E2%82%AC%22%2C%22screenReaderText%22%3A%2224%2C99%C2%A0%E2%82%AC%22%7D%2C%22productId%22%3A%229nllp82xvskh%22%2C%22skuId%22%3A%220010%22%2C%22availabilityId%22%3A%229XCVRW8MNL8Q%22%2C%22productHeadingTagLevel%22%3A%22h3%22%2C%22showCtaLink%22%3Afalse%2C%22title%22%3A%22Tinykin%22%2C%22inStock%22%3Atrue%7D%2C%7B%22compName%22%3A%22Product%20Placement%20Carousel%3A%20Games%22%2C%22description%22%3A%7B%22full%22%3A%5B%22Hironobu%20Sakaguchi%2C%20de%20Mistwalker%2C%20re%C3%BAne%20el%20talento%20de%20Takehiko%20Inoue%2C%20Kiyoshi%20Shigematsu%20y%20Nobuo%20Uematsu%20para%20presentar%20el%20RPG%20de%20la%20nueva%20generaci%C3%B3n%3A%20Lost%20Odyssey.%22%5D%2C%22showReadMore%22%3Atrue%2C%22visibleText%22%3A%5B%22Hironobu%20Sakaguchi%2C%20de%20Mistwalker%2C%20re%C3%BAne%20el%20talento%20de%20Takehiko%20Inoue%2C%20Kiyoshi...%22%5D%7D%2C%22idx%22%3A3%2C%22image%22%3A%7B%22uri%22%3A%22https%3A%2F%2Fstore-images.s-microsoft.com%2Fimage%2Fapps.41267.64171167600854339.769a7d46-88f2-46ee-befd-5bcc8d35dbb4.b08d4981-cd45-491d-a8a1-e65ca4975545%3F%22%2C%22alt%22%3A%22Lost%20Odyssey%22%2C%22background%22%3A%22%22%2C%22system%22%3A%22store-images%22%7D%2C%22isCondensed%22%3Afalse%2C%22listDisplayName%22%3A%22Juegos%20mejor%20valorados%22%2C%22locale%22%3A%22es-es%22%2C%22newTab%22%3Afalse%2C%22pdpUri%22%3A%22https%3A%2F%2Fwww.microsoft.com%2Fes-es%2Fp%2Flost-odyssey%2Fbzb4s8fs8t5b%22%2C%22preOrder%22%3Afalse%2C%22price%22%3A%7B%22inAppPurchases%22%3Atrue%2C%22fromText%22%3A%22%22%2C%22currentPrice%22%3A%2224%2C99%C2%A0%E2%82%AC%22%2C%22screenReaderText%22%3A%2224%2C99%C2%A0%E2%82%AC%22%7D%2C%22productId%22%3A%22bzb4s8fs8t5b%22%2C%22skuId%22%3A%220001%22%2C%22availabilityId%22%3A%22B2BPNHXPV26D%22%2C%22productHeadingTagLevel%22%3A%22h3%22%2C%22showCtaLink%22%3Afalse%2C%22title%22%3A%22Lost%20Odyssey%22%2C%22inStock%22%3Atrue%7D%2C%7B%22compName%22%3A%22Product%20Placement%20Carousel%3A%20Games%22%2C%22description%22%3A%7B%22full%22%3A%5B%22La%20versi%C3%B3n%20de%20Juegos%20a%20petici%C3%B3n%20est%C3%A1%20disponible%20en%20ingl%C3%A9s%2C%20franc%C3%A9s%2C%20italiano%2C%20alem%C3%A1n%20y%20espa%C3%B1ol.Am%C3%A9rica%2C%201911.%20El%20salvaje%20oeste%20est%C3%A1%20muriendo.%20Cuando%20unos%20agentes%20federales%20amenazan%20a%20su%20familia%2C%20el%20ex%20bandido%20John%20Marston%20se%20ve%20obligado%20a%20tomar%20las%20armas%20de%20nuevo%20y%20cazar%20a%20una%20banda%20de%20criminales%20a%20los%20que%20una%20vez%20llam%C3%B3%20amigos.%20Disfruta%20de%20una%20experiencia%20de%20supervivencia%20%C3%A9pica%20por%20las%20desamparadas%20llanuras%20del%20oeste%20americano%20y%20M%C3%A9xico%20mientras%20John%20Marston%20lucha%20para%20enterrar%20su%20sangriento%20pasado%20de%20hombre%20en%20hombre.%C2%A92006-2010%20Rockstar%20Games.%20Rockstar%20Games%2C%20R*%2C%20Red%20Dead%20Redemption%20y%20otras%20marcas%20son%20marcas%20registradas%20de%20Take-Two%20Interactive%20Software.%20Todos%20los%20derechos%20reservados.El%20contenido%20de%20este%20videojuego%20es%20totalmente%20ficticio%20y%20no%20pretende%20representar%20ni%20mostrar%20ning%C3%BAn%20evento%2C%20persona%20o%20entidad%20reales%2C%20y%20cualquier%20similitud%20es%20pura%20coincidencia.%20Los%20creadores%20y%20los%20editores%20de%20este%20videojuego%20no%20apoyan%2C%20fomentan%20ni%20animan%20ninguna%20conducta%20mostrada%20en%20el%20mismo.%20Quedan%20prohibidos%20el%20alquiler%2C%20la%20copia%20no%20autorizada%2C%20la%20ingenier%C3%ADa%20inversa%2C%20la%20transmisi%C3%B3n%2C%20la%20emisi%C3%B3n%20en%20p%C3%BAblico%2C%20el%20pago%20por%20jugar%20y%20la%20anulaci%C3%B3n%20de%20la%20protecci%C3%B3n%20anticopia.El%20uso%20de%20este%20software%20est%C3%A1%20sujeto%20a%20la%20licencia%20en%20el%20manual%20del%20juego%20y%20en%20l%C3%ADnea%2C%20en%20rockstargames.com%2Feula.%20Para%20acceder%20de%20forma%20no%20transferible%20a%20caracter%C3%ADsticas%20especiales%2C%20como%20contenidos%2C%20servicios%20o%20funciones%20exclusivos%2C%20desbloqueables%2C%20descargables%20o%20en%20l%C3%ADnea%20puede%20necesitarse%20un%20c%C3%B3digo%20de%20serie%20de%20un%20%C3%BAnico%20uso%2C%20cuotas%20adicionales%20o%20el%20registro%20de%20una%20cuenta%20en%20l%C3%ADnea%20(13%2B).%20El%20acceso%20a%20funciones%20especiales%20puede%20requerir%20conexi%C3%B3n%20a%20Internet%2C%20no%20estar%20disponible%20para%20todos%20los%20usuarios%20y%20puede%20ser%20cancelado%2C%20modificado%20u%20ofrecido%20con%20otras%20condiciones%20con%2030%20d%C3%ADas%20de%20preaviso.%22%5D%2C%22showReadMore%22%3Atrue%2C%22visibleText%22%3A%5B%22La%20versi%C3%B3n%20de%20Juegos%20a%20petici%C3%B3n%20est%C3%A1%20disponible%20en%20ingl%C3%A9s%2C%20franc%C3%A9s%2C%20italiano%2C%20alem%C3%A1n%20y...%22%5D%7D%2C%22idx%22%3A4%2C%22image%22%3A%7B%22uri%22%3A%22https%3A%2F%2Fstore-images.s-microsoft.com%2Fimage%2Fapps.42256.71534445913389778.3217f3df-0d90-489b-8f2f-90d018aded6a.93f85cbb-507f-45b4-8073-bc9c7f9514e4%3F%22%2C%22alt%22%3A%22Red%20Dead%20Redemption%22%2C%22background%22%3A%22%22%2C%22system%22%3A%22store-images%22%7D%2C%22isCondensed%22%3Afalse%2C%22listDisplayName%22%3A%22Juegos%20mejor%20valorados%22%2C%22locale%22%3A%22es-es%22%2C%22newTab%22%3Afalse%2C%22pdpUri%22%3A%22https%3A%2F%2Fwww.microsoft.com%2Fes-es%2Fp%2Fred-dead-redemption%2Fbwklfhwt7dhc%22%2C%22preOrder%22%3Afalse%2C%22price%22%3A%7B%22inAppPurchases%22%3Atrue%2C%22fromText%22%3A%22%22%2C%22currentPrice%22%3A%2229%2C99%C2%A0%E2%82%AC%22%2C%22screenReaderText%22%3A%2229%2C99%C2%A0%E2%82%AC%22%7D%2C%22productId%22%3A%22bwklfhwt7dhc%22%2C%22skuId%22%3A%220001%22%2C%22availabilityId%22%3A%229VQKWHHRB7WG%22%2C%22productHeadingTagLevel%22%3A%22h3%22%2C%22showCtaLink%22%3Afalse%2C%22title%22%3A%22Red%20Dead%20Redemption%22%2C%22inStock%22%3Atrue%7D%2C%7B%22compName%22%3A%22Product%20Placement%20Carousel%3A%20Games%22%2C%22description%22%3A%7B%22full%22%3A%5B%22NOVEDADES%20DE%20LA%20DEFINITIVE%20EDITION%5Cr%5Cr%22%2C%22%E2%80%A2%20Equipada%20con%20contenido%20nuevo%20y%20adicional%3A%20nuevas%20%C3%A1reas%2C%20nuevos%20secretos%2C%20nuevas%20habilidades%2C%20m%C3%A1s%20historias%2C%20m%C3%BAltiples%20modos%20de%20dificultad%2C%20sistema%20de%20recuperaci%C3%B3n%20completo%2C%20%C2%A1y%20muchos%20m%C3%A1s!%5Cr%5Cr%22%2C%22%E2%80%A2%20Descubre%20el%20pasado%20de%20Naru%20en%20dos%20nuevos%20escenarios.%5Cr%5Cr%22%2C%22%E2%80%A2%20Domina%20dos%20nuevas%20y%20poderosas%20habilidades%3A%20Deslizar%20y%20R%C3%A1faga%20de%20luz.%5Cr%5Cr%22%2C%22%E2%80%A2%20Encuentra%20nuevas%20%C3%A1reas%20secretas%20y%20explora%20Nibel%20m%C3%A1s%20r%C3%A1pido%20teletransport%C3%A1ndote%20entre%20pozos%20de%20esp%C3%ADritu.%5Cr%5Cr%22%2C%22%5Cr%5Cr%22%2C%22El%20bosque%20de%20Nibel%20perece.%20Tras%20una%20poderosa%20tormenta%20que%20desencadena%20una%20serie%20de%20devastadores%20acontecimientos%2C%20Ori%20emprende%20una%20traves%C3%ADa%20para%20encontrar%20el%20valor%20y%20enfrentarse%20a%20una%20n%C3%A9mesis%20oscura%20para%20salvar%20el%20bosque%20de%20Nibel.%20%5C%22Ori%20and%20the%20Blind%20Forest%5C%22%20cuenta%20la%20historia%20de%20un%20joven%20hu%C3%A9rfano%20destinado%20a%20realizar%20heroicas%20haza%C3%B1as%2C%20todo%20ello%20en%20un%20juego%20de%20acci%C3%B3n%20y%20plataforma%20visualmente%20impresionante%20de%20Moon%20Studios.%20Cuenta%20con%20dibujos%20hechos%20a%20mano%2C%20personajes%20animados%20de%20forma%20meticulosa%2C%20una%20banda%20sonora%20sin%20igual%20y%20decenas%20de%20nuevas%20caracter%C3%ADsticas.%20Esta%20Definitive%20Edition%20de%20%5C%22Ori%20and%20the%20Blind%20Forest%5C%22%20explora%20una%20profunda%20y%20emotiva%20historia%20sobre%20el%20amor%2C%20el%20sacrificio%20y%20la%20esperanza%20que%20vive%20dentro%20cada%20uno%20de%20nosotros.%22%5D%2C%22showReadMore%22%3Atrue%2C%22visibleText%22%3A%5B%22NOVEDADES%20DE%20LA%20DEFINITIVE%20EDITION%5Cr%5Cr%22%2C%22%E2%80%A2%20Equipada%20con%20contenido%20nuevo%20y%20adicional...%22%5D%7D%2C%22subscriptionBadgeText%22%3A%22Game%20Pass%22%2C%22idx%22%3A5%2C%22image%22%3A%7B%22uri%22%3A%22https%3A%2F%2Fstore-images.s-microsoft.com%2Fimage%2Fapps.4128.71930896676716842.b6740fa4-0359-4ca8-9e17-5d4e45c2d497.ffa292b1-579d-4a08-99ef-308ab7791f79%3F%22%2C%22alt%22%3A%22Ori%20and%20the%20Blind%20Forest%3A%20Definitive%20Edition%22%2C%22background%22%3A%22%22%2C%22system%22%3A%22store-images%22%7D%2C%22isCondensed%22%3Afalse%2C%22listDisplayName%22%3A%22Juegos%20mejor%20valorados%22%2C%22locale%22%3A%22es-es%22%2C%22newTab%22%3Afalse%2C%22pdpUri%22%3A%22https%3A%2F%2Fwww.microsoft.com%2Fes-es%2Fp%2Fori-and-the-blind-forest-definitive-edition%2Fbw85kqb8q31m%22%2C%22preOrder%22%3Afalse%2C%22price%22%3A%7B%22inAppPurchases%22%3Afalse%2C%22fromText%22%3A%22%22%2C%22currentPrice%22%3A%22Incluido%22%2C%22screenReaderText%22%3A%22Incluido%22%7D%2C%22productId%22%3A%22bw85kqb8q31m%22%2C%22skuId%22%3A%220001%22%2C%22availabilityId%22%3A%22B4VH1RJC8ZRX%22%2C%22productHeadingTagLevel%22%3A%22h3%22%2C%22showCtaLink%22%3Afalse%2C%22title%22%3A%22Ori%20and%20the%20Blind%20Forest%3A%20Definitive%20Edition%22%2C%22inStock%22%3Atrue%7D%2C%7B%22compName%22%3A%22Product%20Placement%20Carousel%3A%20Games%22%2C%22description%22%3A%7B%22full%22%3A%5B%22Publicado%20originalmente%20en%201998%2C%20Resident%20Evil%202%2C%20uno%20de%20los%20juegos%20m%C3%A1s%20ic%C3%B3nicos%20de%20todos%20los%20tiempos%2C%20regresa%20completamente%20reinventado%20para%20las%20consolas%20de%20nueva%20generaci%C3%B3n.%5Cr%22%2C%22%5Cr%22%2C%22Juega%20campa%C3%B1as%20individuales%20tanto%20para%20Leon%20Kennedy%20como%20para%20Claire%20Redfield%20con%20una%20flamante%20nueva%20vista%20en%203.%C2%AA%20persona%20mientras%20exploras%20las%20%C3%A1reas%20infestadas%20de%20zombis%20de%20Raccoon%20City%2C%20ahora%20reconstruido%20espectacularmente%20con%20el%20motor%20RE%20Engine%20de%20Capcom.%20Nuevos%20rompecabezas%2C%20tramas%20y%20%C3%A1reas%20para%20que%20tanto%20los%20nuevos%20fans%20como%20los%20m%C3%A1s%20veteranos%20descubran%20terror%C3%ADficas%20nuevas%20sorpresas.%22%5D%2C%22showReadMore%22%3Atrue%2C%22visibleText%22%3A%5B%22Publicado%20originalmente%20en%201998%2C%20Resident%20Evil%202%2C%20uno%20de%20los%20juegos%20m%C3%A1s%20ic%C3%B3nicos%20de...%22%5D%7D%2C%22subscriptionBadgeText%22%3A%22Game%20Pass%22%2C%22idx%22%3A6%2C%22image%22%3A%7B%22uri%22%3A%22https%3A%2F%2Fstore-images.s-microsoft.com%2Fimage%2Fapps.36567.71571739681700792.c61fa2d7-3d69-4edf-8e51-accc41d47823.a8c614fc-0dcb-4788-89ed-958635753296%3F%22%2C%22alt%22%3A%22RESIDENT%20EVIL%202%22%2C%22background%22%3A%22%22%2C%22system%22%3A%22store-images%22%7D%2C%22isCondensed%22%3Afalse%2C%22listDisplayName%22%3A%22Juegos%20mejor%20valorados%22%2C%22locale%22%3A%22es%22%2C%22newTab%22%3Afalse%2C%22pdpUri%22%3A%22https%3A%2F%2Fwww.microsoft.com%2Fes-es%2Fp%2Fresident-evil-2%2Fbwmh951m3g3p%22%2C%22preOrder%22%3Afalse%2C%22price%22%3A%7B%22inAppPurchases%22%3Atrue%2C%22fromText%22%3A%22%22%2C%22currentPrice%22%3A%22Incluido%22%2C%22screenReaderText%22%3A%22Incluido%22%7D%2C%22productId%22%3A%22bwmh951m3g3p%22%2C%22skuId%22%3A%220001%22%2C%22availabilityId%22%3A%229ND2NDN2CZ2L%22%2C%22productHeadingTagLevel%22%3A%22h3%22%2C%22showCtaLink%22%3Afalse%2C%22title%22%3A%22RESIDENT%20EVIL%202%22%2C%22inStock%22%3Atrue%7D%2C%7B%22compName%22%3A%22Product%20Placement%20Carousel%3A%20Games%22%2C%22description%22%3A%7B%22full%22%3A%5B%22En%20Cities%3A%20Skylines%20%E2%80%93%20Xbox%20One%20Edition%20podr%C3%A1s%20crear%20una%20ciudad%20y%20gestionar%20desde%20la%20construcci%C3%B3n%20de%20las%20primeras%20calles%20hasta%20las%20miles%20de%20necesidades%20de%20los%20ciudadanos.%20Dise%C3%B1a%2C%20construye%20y%20gestiona%20la%20ciudad%20de%20tus%20sue%C3%B1os%2C%20organiza%20los%20servicios%20p%C3%BAblicos%20y%20aprueba%20leyes%3A%20%C2%BFconseguir%C3%A1s%20convertir%20un%20peque%C3%B1o%20pueblo%20en%20una%20bulliciosa%20metr%C3%B3polis%3F%5Cr%22%2C%22%5Cr%22%2C%22D%C3%A9jate%20atrapar%20por%20su%20encanto%20y%20sus%20m%C3%BAltiples%20opciones%20de%20juego%3A%20este%20galardonado%20superventas%20est%C3%A1%20ahora%20disponible%20para%20Xbox%20One.%20Esta%20edici%C3%B3n%20incluye%20el%20juego%20original%20completo%20as%C3%AD%20como%20la%20expansi%C3%B3n%20After%20Dark%2C%20que%20te%20permitir%C3%A1%20implementar%20actividades%20de%20ocio%20nocturno%20y%20atracciones%20tur%C3%ADsticas%20en%20tu%20ciudad.%5Cr%22%2C%22%5Cr%22%2C%22Caracter%C3%ADsticas%20principales%3A%5Cr%22%2C%22Construye%20la%20ciudad%20de%20tus%20sue%C3%B1os%3A%20dise%C3%B1a%20las%20redes%20de%20carreteras%2C%20planifica%20el%20recorrido%20del%20transporte%20p%C3%BAblico%20y%20construye%20zonas%20verdes.%20Ofrece%20educaci%C3%B3n%2C%20sanidad%20y%20seguridad%20a%20tus%20ciudadanos%3B%20l%C3%A1nzate%20a%20por%20la%20revoluci%C3%B3n%20industrial%20o%20crea%20un%20pueblecito%20costero%20para%20turistas%20y%20experimenta%20con%20las%20energ%C3%ADas%20renovables.%20%C2%A1T%C3%BA%20decides!%5Cr%22%2C%22%5Cr%22%2C%22Simulaci%C3%B3n%20en%20m%C3%BAltiples%20niveles%3A%20como%20alcalde%20o%20alcaldesa%20de%20tu%20ciudad%2C%20tendr%C3%A1s%20que%20gestionar%20las%20finanzas%20de%20la%20ciudad%20al%20tiempo%20que%20ofreces%20servicios%20esenciales%20como%20la%20educaci%C3%B3n%2C%20el%20agua%2C%20la%20electricidad%2C%20la%20polic%C3%ADa%2C%20los%20bomberos%20o%20el%20sistema%20sanitario%20a%20tus%20ciudadanos.%20Estos%20reaccionar%C3%A1n%20r%C3%A1pidamente%20a%20tus%20decisiones%2C%20y%20sus%20necesidades%20ir%C3%A1n%20evolucionando%20a%20medida%20que%20crezca%20la%20ciudad%2C%20as%C3%AD%20que%20%C2%A1no%20los%20pierdas%20de%20vista!%5Cr%22%2C%22%5Cr%22%2C%22Gestiona%20el%20tr%C3%A1fico%20local%3A%20combina%20con%20inteligencia%20los%20distintos%20sistemas%20de%20transporte%20para%20que%20tus%20ciudadanos%20puedan%20ir%20a%20trabajar%20y%20disfrutar%20de%20su%20tiempo%20de%20ocio.%20As%C3%AD%2C%20no%20solo%20tendr%C3%A1s%20que%20planificar%20la%20red%20de%20carreteras%2C%20sino%20tambi%C3%A9n%20las%20interacciones%20con%20los%20recorridos%20de%20autobuses%2C%20trenes%2C%20metros%2C%20etc.%5Cr%22%2C%22%5Cr%22%2C%22Aplica%20leyes%20a%20los%20distritos%3A%20divide%20la%20ciudad%20en%20distritos%20y%20aplica%20distintas%20leyes%20para%20adaptarte%20a%20las%20necesidades%20de%20cada%20zona%20y%20conseguir%20que%20tengan%20un%20car%C3%A1cter%20propio.%20As%C3%AD%2C%20podr%C3%A1s%20prohibir%20los%20coches%20en%20el%20centro%2C%20hacer%20que%20el%20transporte%20p%C3%BAblico%20sea%20gratuito%20en%20los%20muelles%20o%20prohibir%20las%20mascotas%20en%20las%20afueras%2C%20entre%20muchas%20otras%20opciones.%5Cr%22%2C%22%5Cr%22%2C%22Disfruta%20del%20contenido%20de%20After%20Dark%3A%20con%20miles%20de%20habitantes%20buscando%20un%20lugar%20donde%20desconectar%2C%20tu%20ciudad%20se%20convertir%C3%A1%20en%20un%20lugar%20completamente%20distinto%20por%20la%20noche.%20Aplica%20nuevas%20pol%C3%ADticas%20para%20crear%20zonas%20de%20marcha%20y%20no%20te%20olvides%20de%20conectarlas%20con%20servicios%20de%20tren%20y%20taxi%20para%20que%20los%20ciudadanos%20puedan%20acceder%20a%20ellas.%22%5D%2C%22showReadMore%22%3Atrue%2C%22visibleText%22%3A%5B%22En%20Cities%3A%20Skylines%20%E2%80%93%20Xbox%20One%20Edition%20podr%C3%A1s%20crear%20una%20ciudad%20y%20gestionar%20desde%20la...%22%5D%7D%2C%22subscriptionBadgeText%22%3A%22Game%20Pass%22%2C%22idx%22%3A7%2C%22image%22%3A%7B%22uri%22%3A%22https%3A%2F%2Fstore-images.s-microsoft.com%2Fimage%2Fapps.7220.66617542682682743.811213f2-2c45-4145-973d-fe3e3774b196.96b48a30-7ed1-4bc9-8f8b-b114375b2e1c%3F%22%2C%22alt%22%3A%22Cities%3A%20Skylines%20-%20Xbox%20One%20Edition%22%2C%22background%22%3A%22%22%2C%22system%22%3A%22store-images%22%7D%2C%22isCondensed%22%3Afalse%2C%22listDisplayName%22%3A%22Juegos%20mejor%20valorados%22%2C%22locale%22%3A%22es%22%2C%22newTab%22%3Afalse%2C%22pdpUri%22%3A%22https%3A%2F%2Fwww.microsoft.com%2Fes-es%2Fp%2Fcities-skylines-xbox-one-edition%2Fc4gh8n6zxg5l%22%2C%22preOrder%22%3Afalse%2C%22price%22%3A%7B%22inAppPurchases%22%3Atrue%2C%22fromText%22%3A%22%22%2C%22currentPrice%22%3A%22Incluido%22%2C%22screenReaderText%22%3A%22Incluido%22%7D%2C%22productId%22%3A%22c4gh8n6zxg5l%22%2C%22skuId%22%3A%220001%22%2C%22availabilityId%22%3A%229TT9PR1DWBTR%22%2C%22productHeadingTagLevel%22%3A%22h3%22%2C%22showCtaLink%22%3Afalse%2C%22title%22%3A%22Cities%3A%20Skylines%20-%20Xbox%20One%20Edition%22%2C%22inStock%22%3Atrue%7D%2C%7B%22compName%22%3A%22Product%20Placement%20Carousel%3A%20Games%22%2C%22description%22%3A%7B%22full%22%3A%5B%22El%20combustible%20que%20hace%20que%20tu%20pulso%20se%20acelere.%20Acelera%2C%20derrapa%20y%20derriba%20a%20tus%20rivales%20en%20ubicaciones%20reales.%20Colecciona%20m%C3%A1s%20de%20200%20hipercoches%20(y%20cada%20vez%20m%C3%A1s)%20y%20compite%20con%20los%20fabricantes%20m%C3%A1s%20prestigiosos%2C%20como%20Ferrari%2C%20Porsche%20o%20Lamborghini.%20%C2%A1Prep%C3%A1rate%20para%20la%20excelencia%20en%20este%20juego%20arcade%20de%20carreras%20ganador%20de%20m%C3%BAltiples%20premios!%5Cr%22%2C%22%5Cr%22%2C%22Coches%20legendarios%20que%20coleccionar%20y%20personalizar%5Cr%22%2C%22Compite%20con%20los%20veh%C3%ADculos%20m%C3%A1s%20incre%C3%ADbles%20elegidos%20con%20esmero%20entre%20fabricantes%20reconocidos%20mundialmente.%20Mejora%20sus%20estad%C3%ADsticas%2C%20elige%20el%20color%20de%20sus%20pinzas%20de%20frenos%20o%20a%C3%B1ade%20piezas%20de%20carbono%20y%20m%C3%A1s%20para%20personalizar%20completamente%20tus%20coches.%5Cr%22%2C%22%5Cr%22%2C%22Circuitos%20impresionantes%5Cr%22%2C%22Siente%20la%20emoci%C3%B3n%20de%20carreras%20que%20desaf%C3%ADan%20la%20ley%20de%20la%20gravedad%20en%20185%20circuitos%20en%2015%20ubicaciones%20reales%20como%20San%20Francisco%2C%20Osaka%20o%20El%20Cairo.%20%C2%A1Compite%20cerca%20de%20tornados%20gigantes%20en%20las%20tierras%20salvajes%20americanas%2C%20evita%20desprendimientos%20en%20el%20Himalaya%20y%20mucho%20m%C3%A1s!%5Cr%22%2C%22%5Cr%22%2C%22Individual%20y%20multijugador%5Cr%22%2C%22%C2%A1Completa%20m%C3%A1s%20de%20900%20eventos%20de%20historia%20individuales%20o%20participa%20en%20carreras%20de%208%20jugadores%20en%20directo%20para%20conseguir%20las%20mejores%20recompensas!%20Puedes%20incluso%20crear%20un%20club%20y%20unirte%20a%20otros%20jugadores%20para%20aumentar%20su%20prestigio%20y%20desbloquear%20recompensas%20de%20hitos.%5Cr%22%2C%22%5Cr%22%2C%22Coopera%20en%20un%20club%5Cr%22%2C%22Corre%20con%20los%20miembros%20de%20tu%20club%20para%20desbloquear%20recompensas%20de%20hitos%20y%20ascender%20en%20los%20rangos%20de%20la%20clasificaci%C3%B3n.%20Tambi%C3%A9n%20puedes%20crear%20tus%20propias%20carreras%20privadas%20para%20desafiar%20a%20tus%20amigos%20del%20club%20en%20cualquiera%20de%20los%20circuitos.%5Cr%22%2C%22%5Cr%22%2C%22Eventos%20y%20recompensas%5Cr%22%2C%22Compite%20en%20eventos%20diarios%20para%20acumular%20recursos%20adicionales%20para%20tus%20veh%C3%ADculos.%20Tambi%C3%A9n%20puedes%20jugar%20eventos%20especiales%20para%20ganar%20coches%20exclusivos%20mientras%20compites%20en%20modos%20de%20juego%20tambi%C3%A9n%20exclusivos.%5Cr%22%2C%22%5Cr%22%2C%22Nuevo%20contenido%5Cr%22%2C%22%C2%A1Como%20el%20juego%20se%20actualiza%20a%20menudo%2C%20siempre%20hay%20nuevos%20coches%2C%20nuevas%20funciones%20o%20nuevos%20circuitos%20en%20camino!%5Cr%22%2C%22%5Cr%22%2C%22Lo%20%C3%BAltimo%20en%20controles%20de%20carrera%5Cr%22%2C%22%C2%A1Vive%20la%20experiencia%20de%20controles%20manuales%20cuidad%C3%ADsimos%20para%20conducir%20como%20un%20piloto%20profesional%20o%20elige%20los%20controles%20m%C3%A1s%20informales%20de%20TouchDrive%20que%20optimiza%20el%20manejo%20para%20que%20puedas%20concentrarte%20en%20la%20diversi%C3%B3n!%5Cr%22%2C%22_____________________________________________%5Cr%22%2C%22%5Cr%22%2C%22Ten%20en%20cuenta%20que%20este%20juego%20contiene%20compras%20dentro%20de%20la%20aplicaci%C3%B3n%2C%20incluyendo%20objetos%20aleatorios%20de%20pago.%5Cr%22%2C%22%5Cr%22%2C%22Visita%20nuestra%20p%C3%A1gina%20web%20oficial%3A%20http%3A%2F%2Fgmlft.co%2Fwebsite_ES%5Cr%22%2C%22Visita%20nuestro%20nuevo%20blog%3A%20http%3A%2F%2Fgmlft.co%2Fcentral%5Cr%22%2C%22%5Cr%22%2C%22No%20olvides%20seguirnos%20en%20las%20redes%20sociales%3A%5Cr%22%2C%22Facebook%3A%20http%3A%2F%2Fgmlft.co%2FSNS_FB_ES%5Cr%22%2C%22Twitter%3A%20http%3A%2F%2Fgmlft.co%2FSNS_TW_ES%5Cr%22%2C%22Instagram%3A%20http%3A%2F%2Fgmlft.co%2FSNS_IG%5Cr%22%2C%22YouTube%3A%20http%3A%2F%2Fgmlft.co%2FGL_SNS_YT%5Cr%22%2C%22%5Cr%22%2C%22Pol%C3%ADtica%20de%20privacidad%3A%20http%3A%2F%2Fwww.gameloft.com%2Fes%2Fprivacy-notice%5Cr%22%2C%22T%C3%A9rminos%20de%20uso%3A%20http%3A%2F%2Fwww.gameloft.com%2Fes%2Fconditions-of-use%5Cr%22%2C%22Acuerdo%20de%20licencia%20de%20usuario%20final%3A%20http%3A%2F%2Fwww.gameloft.com%2Fes%2Feula%22%5D%2C%22showReadMore%22%3Atrue%2C%22visibleText%22%3A%5B%22El%20combustible%20que%20hace%20que%20tu%20pulso%20se%20acelere.%20Acelera%2C%20derrapa%20y%20derriba%20a%20tus...%22%5D%7D%2C%22idx%22%3A8%2C%22image%22%3A%7B%22uri%22%3A%22https%3A%2F%2Fstore-images.s-microsoft.com%2Fimage%2Fapps.15390.14471421918435459.3615d8d5-10ca-4c2f-b3e5-e8c97fe18682.abd3cc95-35b2-40d0-8b62-33ced0101eec%3F%22%2C%22alt%22%3A%22Asphalt%209%3A%20Legends%22%2C%22background%22%3A%22%22%2C%22system%22%3A%22store-images%22%7D%2C%22isCondensed%22%3Afalse%2C%22listDisplayName%22%3A%22Juegos%20mejor%20valorados%22%2C%22locale%22%3A%22es%22%2C%22newTab%22%3Afalse%2C%22pdpUri%22%3A%22https%3A%2F%2Fwww.microsoft.com%2Fes-es%2Fp%2Fasphalt-9-legends%2F9nzqpt0mwtd0%22%2C%22preOrder%22%3Afalse%2C%22price%22%3A%7B%22inAppPurchases%22%3Atrue%2C%22fromText%22%3A%22%22%2C%22currentPrice%22%3A%22Gratuito%22%2C%22screenReaderText%22%3A%22Gratuito%22%7D%2C%22productId%22%3A%229nzqpt0mwtd0%22%2C%22skuId%22%3A%220010%22%2C%22availabilityId%22%3A%229TNH2M9JNR6K%22%2C%22productHeadingTagLevel%22%3A%22h3%22%2C%22showCtaLink%22%3Afalse%2C%22title%22%3A%22Asphalt%209%3A%20Legends%22%2C%22inStock%22%3Atrue%7D%2C%7B%22compName%22%3A%22Product%20Placement%20Carousel%3A%20Games%22%2C%22description%22%3A%7B%22full%22%3A%5B%22En%202013%2C%20el%20mundo%20ha%20quedado%20devastado%20por%20una%20cat%C3%A1strofe%20apocal%C3%ADptica%20que%20ha%20aniquilado%20a%20toda%20la%20humanidad%20y%20convertido%20la%20superficie%20terrestre%20en%20un%20p%C3%A1ramo%20contaminado.%20Un%20pu%C3%B1ado%20de%20supervivientes%20se%20refugiaron%20en%20las%20profundidades%20del%20metro%20de%20Mosc%C3%BA%2C%20y%20la%20civilizaci%C3%B3n%20humana%20comenz%C3%B3%20una%20nueva%20Edad%20Oscura.%5Cr%22%2C%22%5Cr%22%2C%22Estamos%20en%202033.%20Toda%20una%20generaci%C3%B3n%20ha%20nacido%20y%20crecido%20bajo%20el%20suelo%2C%20y%20sus%20asediadas%20ciudades-estaci%C3%B3n%20de%20metro%20luchan%20por%20la%20supervivencia%2C%20entre%20s%C3%AD%20y%20con%20los%20horrores%20mutantes%20que%20esperan%20en%20el%20exterior.%20Eres%20Artyom%2C%20nacido%20en%20los%20%C3%BAltimos%20d%C3%ADas%20antes%20del%20fuego%20pero%20criado%20bajo%20el%20suelo.%20Nunca%20has%20cruzado%20los%20l%C3%ADmites%20de%20la%20ciudad%2C%20pero%20un%20desafortunado%20incidente%20desencadena%20una%20misi%C3%B3n%20al%20n%C3%BAcleo%20del%20sistema%20de%20Metro%20para%20advertir%20al%20resto%20de%20la%20humanidad%20de%20una%20terrible%20amenaza%20inminente.%20%C2%BFPero%20te%20escuchar%C3%A1n%3F%20En%20vez%20de%20unirse%2C%20las%20distintas%20estaciones%20libran%20una%20lucha%20por%20hacerse%20con%20el%20poder%20definitivo%20obteniendo%20un%20mecanismo%20letal%20surgido%20de%20las%20c%C3%A1maras%20militares%20de%20D6%3A%20una%20guerra%20civil%20que%20podr%C3%ADa%20borrar%20a%20la%20humanidad%20de%20la%20faz%20de%20la%20Tierra%20para%20siempre.%5Cr%22%2C%22%5Cr%22%2C%22Adem%C3%A1s%20de%20incluir%20las%20campa%C3%B1as%20de%20un%20jugador%20de%20Metro%202033%20y%20Metro%3A%20Last%20Light%2C%20Metro%20Redux%20te%20lleva%20en%20un%20viaje%20desde%20las%20catacumbas%20olvidadas%20bajo%20el%20metro%20a%20los%20asolados%20p%C3%A1ramos%20de%20la%20superficie%2C%20donde%20tus%20actos%20determinar%C3%A1n%20el%20destino%20de%20la%20humanidad.%5Cr%22%2C%22%5Cr%22%2C%22%E2%80%A2%20Introd%C3%BAcete%20en%20el%20Metro%20de%20Mosc%C3%BA%3A%20Sum%C3%A9rgete%20en%20una%20de%20las%20atm%C3%B3sferas%20m%C3%A1s%20impresionantes%20que%20encontrar%C3%A1s%20en%20un%20juego%20con%20unos%20espectaculares%20gr%C3%A1ficos%20de%20%C3%BAltima%20generaci%C3%B3n%20a%2060%20FPS.%5Cr%22%2C%22%5Cr%22%2C%22%E2%80%A2%20Haz%20frente%20a%20los%20horrores%20del%20apocalipsis%20ruso%3A%20Equ%C3%ADpate%20con%20una%20m%C3%A1scara%20de%20gas%20y%20un%20arsenal%20de%20armamento%20artesanal%20para%20enfrentarte%20a%20la%20amenaza%20de%20letales%20mutantes%2C%20enemigos%20humanos%20y%20el%20aterrador%20entorno.%20%5Cr%22%2C%22%5Cr%22%2C%22%E2%80%A2%20Dos%20campa%C3%B1as%20y%20todo%20el%20contenido%20descargable%20incluido%3A%20Metro%20Redux%20incluye%20dos%20campa%C3%B1as%20completas%20combinadas%20para%20crear%20una%20%C3%A9pica%20aventura%20de%20un%20jugador%2C%20adem%C3%A1s%20de%2010%20horas%20de%20contenido%20adicional.%5Cr%22%2C%22%5Cr%22%2C%22%E2%80%A2%20Dos%20nuevos%20estilos%20de%20juego%20%5C%22%5C%22Supervivencia%5C%22%5C%22%20y%20%5C%22%5C%22Espartano%5C%22%5C%22%3A%20Disfruta%20del%20modo%20campa%C3%B1a%20como%20un%20%5C%22%5C%22survival%20horror%5C%22%5C%22%20cada%20vez%20m%C3%A1s%20intenso%2C%20o%20hazle%20frente%20con%20tus%20habilidades%20de%20combate%20como%20comando%20espartano%20en%20estos%20dos%20modos%20de%20juego%20%C3%BAnicos.%20%5Cr%22%2C%22%5Cr%22%2C%22%E2%80%A2%20Vuelve%20el%20legendario%20Modo%20Comando%3A%20%C2%BFTe%20atreves%20a%20jugar%20al%20temible%20modo%20comando%3F%20Sin%20HUD%2C%20sin%20interfaz%2C%20combate%20m%C3%A1s%20letal%20y%20recursos%20limitados%2C%20todo%20ello%20combinado%20para%20crear%20la%20experiencia%20de%20inmersi%C3%B3n%20de%20juego%20definitiva.%5Cr%22%2C%22%5Cr%22%2C%22Basado%20en%20la%20novela%20%C3%A9xito%20de%20ventas%20mundial%20de%20Dmitry%20Glukhovsky.%22%5D%2C%22showReadMore%22%3Atrue%2C%22visibleText%22%3A%5B%22En%202013%2C%20el%20mundo%20ha%20quedado%20devastado%20por%20una%20cat%C3%A1strofe%20apocal%C3%ADptica%20que%20ha...%22%5D%7D%2C%22idx%22%3A9%2C%22image%22%3A%7B%22uri%22%3A%22https%3A%2F%2Fstore-images.s-microsoft.com%2Fimage%2Fapps.56980.71284913231831834.e5082776-e343-4a65-be15-61de38a07b59.269c5b8f-5ee4-480c-a07a-99d23d898b6f%3F%22%2C%22alt%22%3A%22Metro%20Redux%20Bundle%22%2C%22background%22%3A%22%23FFFFFF%22%2C%22system%22%3A%22store-images%22%7D%2C%22isCondensed%22%3Afalse%2C%22listDisplayName%22%3A%22Juegos%20mejor%20valorados%22%2C%22locale%22%3A%22es-es%22%2C%22newTab%22%3Afalse%2C%22pdpUri%22%3A%22https%3A%2F%2Fwww.microsoft.com%2Fes-es%2Fp%2Fmetro-redux-bundle%2Fbv6mjx1tdl17%22%2C%22preOrder%22%3Afalse%2C%22price%22%3A%7B%22inAppPurchases%22%3Afalse%2C%22fromText%22%3A%22%22%2C%22currentPrice%22%3A%2229%2C99%C2%A0%E2%82%AC%22%2C%22screenReaderText%22%3A%2229%2C99%C2%A0%E2%82%AC%22%7D%2C%22productId%22%3A%22bv6mjx1tdl17%22%2C%22skuId%22%3A%220001%22%2C%22availabilityId%22%3A%22B480MZZL2K71%22%2C%22productHeadingTagLevel%22%3A%22h3%22%2C%22showCtaLink%22%3Afalse%2C%22title%22%3A%22Metro%20Redux%20Bundle%22%2C%22inStock%22%3Atrue%7D%5D%2C%22carouselId%22%3A%220c7dd954-9375-4180-aede-9d8d9f917d33%22%2C%22channelStyle%22%3A%22row%20row-cols-1%20row-cols-sm-3%20row-cols-md-4%20row-cols-xl-6%20py-5%22%2C%22error%22%3A%22%22%2C%22headingSize%22%3A%22h2%22%2C%22headingTagLevel%22%3A%22h2%22%2C%22hideHeader%22%3Afalse%2C%22hideStatus%22%3Afalse%2C%22isCondensed%22%3Afalse%2C%22listDisplayName%22%3A%22Juegos%20mejor%20valorados%22%2C%22listName%22%3A%22best-rated%22%2C%22listType%22%3A%22reco%22%2C%22locale%22%3A%22es-ES%22%2C%22localizedText%22%3A%7B%22OFFERS_IN_APP_PURCHASES%22%3A%22Ofertas%20en%20compras%20de%20aplicaciones%22%2C%22CLOSE%22%3A%22Cerrar%22%2C%22SHOWING_START_THROUGH_END_OF_TOTAL_ITEMS%22%3A%22Mostrando%20de%20%7B0%7D%20a%20%7B1%7D%20de%20%7B2%7D%20elementos%22%2C%22PREVIOUS_SLIDE%22%3A%22Diapositiva%20anterior%22%2C%22BACK_TO_NEXT_AND_PREVIOUS_CONTROLS%22%3A%22Volver%20a%20los%20controles%20Siguiente%20y%20Anterior%22%2C%22Refine%20results%22%3A%22Refinar%20resultados%22%2C%22INCLUDED_WITH_SUBSCRIPTION%22%3A%22con%22%2C%22Less%22%3A%22Menos%22%2C%22SLIDESHOW%22%3A%22Presentaci%C3%B3n%22%2C%22CLOSE_DIALOG_WINDOW%22%3A%22Cerrar%20ventana%20de%20di%C3%A1logo%22%2C%22READ_MORE%22%3A%22M%C3%A1s%20informaci%C3%B3n%22%2C%22SHOWING_START_HYPHEN_END_OF_TOTAL_ITEMS%22%3A%22Mostrando%20%7B0%7D%20-%20%7B1%7D%20de%20%7B2%7D%20art%C3%ADculos%22%2C%22SEE_ALL%22%3A%22Mostrar%20todo%22%2C%22PAGINATION_FOR_SEARCH_RESULTS_TOTAL_PAGES%22%3A%22Paginaci%C3%B3n%20de%20resultados%20de%20la%20b%C3%BAsqueda%3A%20%7B0%7D%20p%C3%A1ginas%22%2C%22Pagination%20for%20search%20results%3A%20%7BnumPages%7D%20pages%22%3A%22Paginaci%C3%B3n%20de%20resultados%20de%20la%20b%C3%BAsqueda%3A%20%7BnumPages%7D%20p%C3%A1ginas%22%2C%22NEW_RELEASE%22%3A%22Nuevo%22%2C%22Pagination%20for%20search%20results%3A%20%7BnumPages%7D%20page%22%3A%22Paginaci%C3%B3n%20de%20resultados%20de%20la%20b%C3%BAsqueda%3A%20%7BnumPages%7D%20p%C3%A1gina%22%2C%22NOW%22%3A%22ahora%22%2C%22Next%22%3A%22Siguiente%22%2C%22Clear%20all%22%3A%22Borrar%20todo%22%2C%22%7BfilterSelections%7D%20filter%20selected%22%3A%22%7BfilterSelections%7D%20filtro%20seleccionado%22%2C%22NEXT_PAGE%22%3A%22P%C3%A1gina%20siguiente%22%2C%22ORIGINALLY%22%3A%22Originalmente%22%2C%22List%20Microsoft.com%22%3A%22Lista%20Microsoft.com%22%2C%22CURRENT_PAGE_SHOWING_START_HYPHEN_END_OF_TOTAL_ITEMS%22%3A%22P%C3%A1gina%20actual%20%7B0%7D%2C%20Mostrando%20%7B1%7D%20-%20%7B2%7D%20de%20%7B3%7D%20resultados%22%2C%22READ_MORE_ON%22%3A%22M%C3%A1s%20informaci%C3%B3n%20sobre%20%7B0%7D%22%2C%22CAROUSEL_BACK%22%3A%22Retroceder%20en%20el%20carrusel%22%2C%22SHOP_NOW%22%3A%22Comprar%20ahora%22%2C%22PREVIOUS_PAGE%22%3A%22P%C3%A1gina%20anterior%22%2C%22PREVIOUS%22%3A%22Anterior%22%2C%22MORE_PRODUCTS_COMING_SOON%22%3A%22Pr%C3%B3ximamente%20habr%C3%A1%20m%C3%A1s%20productos%22%2C%22PREORDER%22%3A%22Reservar%22%2C%22More%22%3A%22M%C3%A1s%22%2C%22NEXT_SLIDE%22%3A%22Diapositiva%20siguiente%22%2C%22remove%20filter%20%7BfilterName%7D%22%3A%22quitar%20filtro%20%7BfilterName%7D%22%2C%22NEXT%22%3A%22Siguiente%22%2C%22META_DESCRIPTION_DEFAULT%22%3A%22%7BlistDisplayName%7D.%20Consigue%20estos%20%7BproductCount%7D%20art%C3%ADculos%20y%20explora%20Microsoft%20Store%7Bcountry%7D%20para%20descubrir%20aplicaciones%2C%20juegos%2C%20port%C3%A1tiles%2C%20PC%20y%20otros%20dispositivos%20incre%C3%ADbles.%22%2C%22SKIP%22%3A%22Omitir%22%2C%22READ_MORE_ABOUT%22%3A%22M%C3%A1s%20informaci%C3%B3n%20sobre%22%2C%22CAROUSEL_FORWARD%22%3A%22Avanzar%20en%20el%20carrusel%22%2C%22Collapse%22%3A%22Contraer%22%2C%22PAGE_SHOWING_START_HYPHEN_END_OF_TOTAL_ITEMS%22%3A%22P%C3%A1gina%20%7B0%7D%2C%20Mostrando%20%7B1%7D%20-%20%7B2%7D%20de%20%7B3%7D%20resultados%22%2C%22END_OF%22%3A%22Fin%20de%22%2C%22READ_MORE_ON_PRODUCT_DESCRIPTION%22%3A%22M%C3%A1s%20informaci%C3%B3n%20sobre%20la%20descripci%C3%B3n%20del%20producto%22%2C%22Skip%20refine%20results%20section%22%3A%22Omitir%20la%20secci%C3%B3n%20de%20refinar%20resultados%22%2C%22NO_RESULTS_FOUND%22%3A%22No%20se%20encontraron%20resultados%22%2C%22STARTING_FROM%22%3A%22desde%22%2C%22OUT_OF_STOCK%22%3A%22Agotado%22%2C%22Previous%22%3A%22Anterior%22%2C%22BACK_END_ERROR%22%3A%22Hubo%20un%20problema%20con%20la%20consulta%20de%20datos%20Tarjetas%3B%20intenta%20volver%20a%20cargar%20la%20p%C3%A1gina%20o%20comprueba%20el%20enlace.%22%2C%22%7BfilterSelections%7D%20filters%20selected%22%3A%22%7BfilterSelections%7D%20filtros%20seleccionados%22%2C%22SELECT_PRODUCT_FOR_MORE%22%3A%22Para%20obtener%20m%C3%A1s%20informaci%C3%B3n%2C%20selecciona%20%7Btitle%7D.%22%7D%2C%22newTab%22%3Afalse%2C%22platform%22%3A%22xbox%22%2C%22productType%22%3A%22game%22%2C%22seoString%22%3A%22%7B%5C%22%40context%5C%22%3A%5C%22http%3A%2F%2Fschema.org%5C%22%2C%5C%22%40type%5C%22%3A%5C%22itemList%5C%22%2C%5C%22numberOfItems%5C%22%3A%5C%2210%5C%22%2C%5C%22name%5C%22%3A%5C%22Juegos%20mejor%20valorados%5C%22%2C%5C%22itemListElement%5C%22%3A%5B%7B%5C%22%40type%5C%22%3A%5C%22ListItem%5C%22%2C%5C%22name%5C%22%3A%5C%22Minecraft%5C%22%2C%5C%22url%5C%22%3A%5C%22https%3A%2F%2Fwww.microsoft.com%2Fes-es%2Fp%2Fminecraft%2F9mvxmvt8zkwc%5C%22%2C%5C%22position%5C%22%3A1%7D%2C%7B%5C%22%40type%5C%22%3A%5C%22ListItem%5C%22%2C%5C%22name%5C%22%3A%5C%22The%20Witcher%203%3A%20Wild%20Hunt%5C%22%2C%5C%22url%5C%22%3A%5C%22https%3A%2F%2Fwww.microsoft.com%2Fes-es%2Fp%2Fthe-witcher-3-wild-hunt%2Fbr765873cqjd%5C%22%2C%5C%22position%5C%22%3A2%7D%2C%7B%5C%22%40type%5C%22%3A%5C%22ListItem%5C%22%2C%5C%22name%5C%22%3A%5C%22Tinykin%5C%22%2C%5C%22url%5C%22%3A%5C%22https%3A%2F%2Fwww.microsoft.com%2Fes-es%2Fp%2Ftinykin%2F9nllp82xvskh%5C%22%2C%5C%22position%5C%22%3A3%7D%2C%7B%5C%22%40type%5C%22%3A%5C%22ListItem%5C%22%2C%5C%22name%5C%22%3A%5C%22Lost%20Odyssey%5C%22%2C%5C%22url%5C%22%3A%5C%22https%3A%2F%2Fwww.microsoft.com%2Fes-es%2Fp%2Flost-odyssey%2Fbzb4s8fs8t5b%5C%22%2C%5C%22position%5C%22%3A4%7D%2C%7B%5C%22%40type%5C%22%3A%5C%22ListItem%5C%22%2C%5C%22name%5C%22%3A%5C%22Red%20Dead%20Redemption%5C%22%2C%5C%22url%5C%22%3A%5C%22https%3A%2F%2Fwww.microsoft.com%2Fes-es%2Fp%2Fred-dead-redemption%2Fbwklfhwt7dhc%5C%22%2C%5C%22position%5C%22%3A5%7D%2C%7B%5C%22%40type%5C%22%3A%5C%22ListItem%5C%22%2C%5C%22name%5C%22%3A%5C%22Ori%20and%20the%20Blind%20Forest%3A%20Definitive%20Edition%5C%22%2C%5C%22url%5C%22%3A%5C%22https%3A%2F%2Fwww.microsoft.com%2Fes-es%2Fp%2Fori-and-the-blind-forest-definitive-edition%2Fbw85kqb8q31m%5C%22%2C%5C%22position%5C%22%3A6%7D%2C%7B%5C%22%40type%5C%22%3A%5C%22ListItem%5C%22%2C%5C%22name%5C%22%3A%5C%22RESIDENT%20EVIL%202%5C%22%2C%5C%22url%5C%22%3A%5C%22https%3A%2F%2Fwww.microsoft.com%2Fes-es%2Fp%2Fresident-evil-2%2Fbwmh951m3g3p%5C%22%2C%5C%22position%5C%22%3A7%7D%2C%7B%5C%22%40type%5C%22%3A%5C%22ListItem%5C%22%2C%5C%22name%5C%22%3A%5C%22Cities%3A%20Skylines%20-%20Xbox%20One%20Edition%5C%22%2C%5C%22url%5C%22%3A%5C%22https%3A%2F%2Fwww.microsoft.com%2Fes-es%2Fp%2Fcities-skylines-xbox-one-edition%2Fc4gh8n6zxg5l%5C%22%2C%5C%22position%5C%22%3A8%7D%2C%7B%5C%22%40type%5C%22%3A%5C%22ListItem%5C%22%2C%5C%22name%5C%22%3A%5C%22Asphalt%209%3A%20Legends%5C%22%2C%5C%22url%5C%22%3A%5C%22https%3A%2F%2Fwww.microsoft.com%2Fes-es%2Fp%2Fasphalt-9-legends%2F9nzqpt0mwtd0%5C%22%2C%5C%22position%5C%22%3A9%7D%2C%7B%5C%22%40type%5C%22%3A%5C%22ListItem%5C%22%2C%5C%22name%5C%22%3A%5C%22Metro%20Redux%20Bundle%5C%22%2C%5C%22url%5C%22%3A%5C%22https%3A%2F%2Fwww.microsoft.com%2Fes-es%2Fp%2Fmetro-redux-bundle%2Fbv6mjx1tdl17%5C%22%2C%5C%22position%5C%22%3A10%7D%5D%7D%22%2C%22showCtaLink%22%3Afalse%2C%22lazyLoadImages%22%3Atrue%2C%22isStacked%22%3Afalse%2C%22totalProducts%22%3A999%2C%22offset%22%3A0%2C%22compName%22%3A%22Product%20Placement%20Carousel%3A%20Games%22%2C%22uuid%22%3A%22ee9e90c9f5f24e209cbeb744896a5383%22%2C%22addToCartHash%22%3A%7B%22cV%22%3A%22CASMicrosoftCV1421a8cb.0.1.0%22%2C%22muid%22%3A%221038B74EAE3D4825834B95B7A0F202CC%22%2C%22atcHash%22%3A%22856CC15A6048D0392F21295DCD3393E23A566B5E4A7016BB2CFE134EC414EB44%22%7D%2C%22exposeAddToCartHash%22%3Atrue%2C%22pageTheme%22%3A%22microsoft.mwf.main-light.new%22%7D"><div data-reactroot=""><script type="application/ld+json">{"@context":"http://schema.org","@type":"itemList","numberOfItems":"10","name":"Juegos mejor valorados","itemListElement":[{"@type":"ListItem","name":"Minecraft","url":"https://www.microsoft.com/es-es/p/minecraft/9mvxmvt8zkwc","position":1},{"@type":"ListItem","name":"The Witcher 3: Wild Hunt","url":"https://www.microsoft.com/es-es/p/the-witcher-3-wild-hunt/br765873cqjd","position":2},{"@type":"ListItem","name":"Tinykin","url":"https://www.microsoft.com/es-es/p/tinykin/9nllp82xvskh","position":3},{"@type":"ListItem","name":"Lost Odyssey","url":"https://www.microsoft.com/es-es/p/lost-odyssey/bzb4s8fs8t5b","position":4},{"@type":"ListItem","name":"Red Dead Redemption","url":"https://www.microsoft.com/es-es/p/red-dead-redemption/bwklfhwt7dhc","position":5},{"@type":"ListItem","name":"Ori and the Blind Forest: Definitive Edition","url":"https://www.microsoft.com/es-es/p/ori-and-the-blind-forest-definitive-edition/bw85kqb8q31m","position":6},{"@type":"ListItem","name":"RESIDENT EVIL 2","url":"https://www.microsoft.com/es-es/p/resident-evil-2/bwmh951m3g3p","position":7},{"@type":"ListItem","name":"Cities: Skylines - Xbox One Edition","url":"https://www.microsoft.com/es-es/p/cities-skylines-xbox-one-edition/c4gh8n6zxg5l","position":8},{"@type":"ListItem","name":"Asphalt 9: Legends","url":"https://www.microsoft.com/es-es/p/asphalt-9-legends/9nzqpt0mwtd0","position":9},{"@type":"ListItem","name":"Metro Redux Bundle","url":"https://www.microsoft.com/es-es/p/metro-redux-bundle/bv6mjx1tdl17","position":10}]}</script><div class="row"><div class="col-12 px-0 px-md-g"><section aria-label="Juegos mejor valorados" aria-roledescription="Presentación"><div class="px-g px-md-0"><div class="row"><div class="col-12 col-md-8"><h2 class="mb-2 h2">Juegos mejor valorados</h2></div><div class="col-12 d-none"><div id="status-container-ee9e90c9f5f24e209cbeb744896a5383" class="float-left mr-3"><span id="status-msg-ee9e90c9f5f24e209cbeb744896a5383" aria-live="polite">Mostrando de %{start} a %{end} de %{total} elementos</span></div><a href="https://www.microsoft.com/es-es/store/best-rated/games/xbox" class="cta float-left product-cards-see-all-link" aria-label="Mostrar todo Juegos mejor valorados" data-bi-cN="Mostrar todo" data-bi-ecN="See all" data-bi-hN="Juegos mejor valorados" data-bi-cT="Link" data-bi-pA="Body" data-bi-compNm="Product Placement Carousel: Games" data-bi-bhvr="0">Mostrar todo<span class="glyph" aria-hidden="true"></span></a></div></div></div><div id="product-cards-carousel-ee9e90c9f5f24e209cbeb744896a5383" class="carousel slide carousel-product-card" data-mount="" data-loop="true" data-status="status-container-ee9e90c9f5f24e209cbeb744896a5383"><a href="#skip-ee9e90c9f5f24e209cbeb744896a5383" class="btn btn-link sr-only-focusable w-100 position-absolute">Omitir Juegos mejor valorados</a><div><div class="carousel-controls"><button id="controls-ee9e90c9f5f24e209cbeb744896a5383" type="button" title="Anterior" data-bi-cN="Retroceder en el carrusel" data-bi-ecN="Carousel back" data-bi-hN="Juegos mejor valorados" data-bi-bhvr="1" data-bi-cT="Button" data-bi-pA="Body" data-bi-compNm="Product Placement Carousel: Games" class="carousel-control-prev my-4 my-md-5" data-slide="prev"><span class="sr-only">Diapositiva anterior</span></button><button id="controls-next-ee9e90c9f5f24e209cbeb744896a5383" type="button" title="Siguiente" data-bi-cN="Avanzar en el carrusel" data-bi-ecN="Carousel forward" data-bi-hN="Juegos mejor valorados" data-bi-bhvr="3" data-bi-cT="Button" data-bi-pA="Body" data-bi-compNm="Product Placement Carousel: Games" class="carousel-control-next my-4 my-md-5" data-slide="next"><span class="sr-only">Diapositiva siguiente</span></button></div><div class="carousel-inner"><section class="carousel-item active" tabindex="0" aria-labelledby="status-msg-ee9e90c9f5f24e209cbeb744896a5383" aria-roledescription="slide"><div class="container"><div class="row row-cols-1 row-cols-sm-3 row-cols-md-4 row-cols-xl-6 py-5"><div class="col slide-item px-2"><div id="card-0-ee9e90c9f5f24e209cbeb744896a5383" class="card h-100 material-card depth-4 depth-8-hover pb-4" data-bi-cN="Minecraft" data-bi-hN="Juegos mejor valorados" data-bi-bhvr="0" data-bi-cT="Product Card" data-bi-pid="9mvxmvt8zkwc" data-bi-prdname="Minecraft" data-bi-carpos="0" data-bi-pa="Body" data-bi-compnm="Product Placement Carousel: Games" style="cursor:pointer"><div class="img-flex-auto"><picture><source srcSet="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-srcSet="https://store-images.s-microsoft.com/image/apps.17382.13850085746326678.a9b1e0db-29d0-40f3-a86c-2155353d053c.b8233937-28f5-4fdf-a696-6ef666a6ff6e?q=90&amp;w=270&amp;h=405&amp;mode=crop&amp;format=jpg&amp;background=%230078D7" media="(min-width: 540px)"/><source srcSet="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-srcSet="https://store-images.s-microsoft.com/image/apps.17382.13850085746326678.a9b1e0db-29d0-40f3-a86c-2155353d053c.b8233937-28f5-4fdf-a696-6ef666a6ff6e?q=90&amp;w=256&amp;h=384&amp;mode=crop&amp;format=jpg&amp;background=%230078D7" media="(min-width: 860px)"/><source srcSet="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-srcSet="https://store-images.s-microsoft.com/image/apps.17382.13850085746326678.a9b1e0db-29d0-40f3-a86c-2155353d053c.b8233937-28f5-4fdf-a696-6ef666a6ff6e?q=90&amp;w=200&amp;h=300&amp;mode=crop&amp;format=jpg&amp;background=%230078D7" media="(min-width: 1084px)"/><source srcSet="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-srcSet="https://store-images.s-microsoft.com/image/apps.17382.13850085746326678.a9b1e0db-29d0-40f3-a86c-2155353d053c.b8233937-28f5-4fdf-a696-6ef666a6ff6e?q=90&amp;w=256&amp;h=384&amp;mode=crop&amp;format=jpg&amp;background=%230078D7" media="(min-width: 1400px)"/><img src="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-src="https://store-images.s-microsoft.com/image/apps.17382.13850085746326678.a9b1e0db-29d0-40f3-a86c-2155353d053c.b8233937-28f5-4fdf-a696-6ef666a6ff6e?q=90&amp;w=256&amp;h=384&amp;mode=crop&amp;format=jpg&amp;background=%230078D7" class="card-img lazy lazyload blur-up lazypreload" data-sizes="auto" alt=""/></picture></div><div class="card-body px-3 pt-3"><h3 class="base mb-2 h6"><a href="https://www.microsoft.com/es-es/p/minecraft/9mvxmvt8zkwc" aria-label="Minecraft" data-bi-mto="true">Minecraft</a></h3><p class="sr-only">Incluido con Game Pass<span>Ofertas en compras de aplicaciones</span></p><p aria-hidden="true"> <span class="font-weight-semibold">Incluido<sup class="small"><span aria-hidden="true">+</span></sup> <span class="font-weight-semibold">con</span></span></p><div aria-hidden="true"><span class="badge bg-gray-500 mt-2 mb-2">Game Pass</span></div></div></div></div><div class="col slide-item px-2"><div id="card-1-ee9e90c9f5f24e209cbeb744896a5383" class="card h-100 material-card depth-4 depth-8-hover pb-4" data-bi-cN="The Witcher 3: Wild Hunt" data-bi-hN="Juegos mejor valorados" data-bi-bhvr="0" data-bi-cT="Product Card" data-bi-pid="br765873cqjd" data-bi-prdname="The Witcher 3: Wild Hunt" data-bi-carpos="1" data-bi-pa="Body" data-bi-compnm="Product Placement Carousel: Games" style="cursor:pointer"><div class="img-flex-auto"><picture><source srcSet="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-srcSet="https://store-images.s-microsoft.com/image/apps.13986.69531514236615003.534d4f71-03cb-4592-929a-b00a7de28b58.c4152bcf-9088-4e35-98b5-9a2e44b927c5?q=90&amp;w=270&amp;h=405&amp;mode=crop&amp;format=jpg&amp;background=%230078D7" media="(min-width: 540px)"/><source srcSet="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-srcSet="https://store-images.s-microsoft.com/image/apps.13986.69531514236615003.534d4f71-03cb-4592-929a-b00a7de28b58.c4152bcf-9088-4e35-98b5-9a2e44b927c5?q=90&amp;w=256&amp;h=384&amp;mode=crop&amp;format=jpg&amp;background=%230078D7" media="(min-width: 860px)"/><source srcSet="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-srcSet="https://store-images.s-microsoft.com/image/apps.13986.69531514236615003.534d4f71-03cb-4592-929a-b00a7de28b58.c4152bcf-9088-4e35-98b5-9a2e44b927c5?q=90&amp;w=200&amp;h=300&amp;mode=crop&amp;format=jpg&amp;background=%230078D7" media="(min-width: 1084px)"/><source srcSet="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-srcSet="https://store-images.s-microsoft.com/image/apps.13986.69531514236615003.534d4f71-03cb-4592-929a-b00a7de28b58.c4152bcf-9088-4e35-98b5-9a2e44b927c5?q=90&amp;w=256&amp;h=384&amp;mode=crop&amp;format=jpg&amp;background=%230078D7" media="(min-width: 1400px)"/><img src="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-src="https://store-images.s-microsoft.com/image/apps.13986.69531514236615003.534d4f71-03cb-4592-929a-b00a7de28b58.c4152bcf-9088-4e35-98b5-9a2e44b927c5?q=90&amp;w=256&amp;h=384&amp;mode=crop&amp;format=jpg&amp;background=%230078D7" class="card-img lazy lazyload blur-up lazypreload" data-sizes="auto" alt=""/></picture></div><div class="card-body px-3 pt-3"><h3 class="base mb-2 h6"><a href="https://www.microsoft.com/es-es/p/the-witcher-3-wild-hunt/br765873cqjd" aria-label="The Witcher 3: Wild Hunt" data-bi-mto="true">The Witcher 3: Wild Hunt</a></h3><p class="sr-only">29,99 €<span>Ofertas en compras de aplicaciones</span></p><p aria-hidden="true"> <span class="font-weight-semibold">29,99 €<sup class="small"><span aria-hidden="true">+</span></sup></span></p></div></div></div><div class="col slide-item px-2"><div id="card-2-ee9e90c9f5f24e209cbeb744896a5383" class="card h-100 material-card depth-4 depth-8-hover pb-4" data-bi-cN="Tinykin" data-bi-hN="Juegos mejor valorados" data-bi-bhvr="0" data-bi-cT="Product Card" data-bi-pid="9nllp82xvskh" data-bi-prdname="Tinykin" data-bi-carpos="2" data-bi-pa="Body" data-bi-compnm="Product Placement Carousel: Games" style="cursor:pointer"><div class="img-flex-auto"><picture><source srcSet="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-srcSet="https://store-images.s-microsoft.com/image/apps.16944.13705408154411770.2b22153d-5a9e-4527-9b1e-67532d3e2ef4.60f2e2f5-0ad5-4051-abe2-2f4d6a81eabd?q=90&amp;w=270&amp;h=405&amp;mode=crop&amp;format=jpg&amp;background=%230078D7" media="(min-width: 540px)"/><source srcSet="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-srcSet="https://store-images.s-microsoft.com/image/apps.16944.13705408154411770.2b22153d-5a9e-4527-9b1e-67532d3e2ef4.60f2e2f5-0ad5-4051-abe2-2f4d6a81eabd?q=90&amp;w=256&amp;h=384&amp;mode=crop&amp;format=jpg&amp;background=%230078D7" media="(min-width: 860px)"/><source srcSet="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-srcSet="https://store-images.s-microsoft.com/image/apps.16944.13705408154411770.2b22153d-5a9e-4527-9b1e-67532d3e2ef4.60f2e2f5-0ad5-4051-abe2-2f4d6a81eabd?q=90&amp;w=200&amp;h=300&amp;mode=crop&amp;format=jpg&amp;background=%230078D7" media="(min-width: 1084px)"/><source srcSet="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-srcSet="https://store-images.s-microsoft.com/image/apps.16944.13705408154411770.2b22153d-5a9e-4527-9b1e-67532d3e2ef4.60f2e2f5-0ad5-4051-abe2-2f4d6a81eabd?q=90&amp;w=256&amp;h=384&amp;mode=crop&amp;format=jpg&amp;background=%230078D7" media="(min-width: 1400px)"/><img src="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-src="https://store-images.s-microsoft.com/image/apps.16944.13705408154411770.2b22153d-5a9e-4527-9b1e-67532d3e2ef4.60f2e2f5-0ad5-4051-abe2-2f4d6a81eabd?q=90&amp;w=256&amp;h=384&amp;mode=crop&amp;format=jpg&amp;background=%230078D7" class="card-img lazy lazyload blur-up lazypreload" data-sizes="auto" alt=""/></picture></div><div class="card-body px-3 pt-3"><h3 class="base mb-2 h6"><a href="https://www.microsoft.com/es-es/p/tinykin/9nllp82xvskh" aria-label="Tinykin" data-bi-mto="true">Tinykin</a></h3><p class="sr-only">24,99 €</p><p aria-hidden="true"> <span class="font-weight-semibold">24,99 €</span></p></div></div></div><div class="col slide-item px-2"><div id="card-3-ee9e90c9f5f24e209cbeb744896a5383" class="card h-100 material-card depth-4 depth-8-hover pb-4" data-bi-cN="Lost Odyssey" data-bi-hN="Juegos mejor valorados" data-bi-bhvr="0" data-bi-cT="Product Card" data-bi-pid="bzb4s8fs8t5b" data-bi-prdname="Lost Odyssey" data-bi-carpos="3" data-bi-pa="Body" data-bi-compnm="Product Placement Carousel: Games" style="cursor:pointer"><div class="img-flex-auto"><picture><source srcSet="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-srcSet="https://store-images.s-microsoft.com/image/apps.41267.64171167600854339.769a7d46-88f2-46ee-befd-5bcc8d35dbb4.b08d4981-cd45-491d-a8a1-e65ca4975545?q=90&amp;w=270&amp;h=405&amp;mode=crop&amp;format=jpg&amp;background=%230078D7" media="(min-width: 540px)"/><source srcSet="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-srcSet="https://store-images.s-microsoft.com/image/apps.41267.64171167600854339.769a7d46-88f2-46ee-befd-5bcc8d35dbb4.b08d4981-cd45-491d-a8a1-e65ca4975545?q=90&amp;w=256&amp;h=384&amp;mode=crop&amp;format=jpg&amp;background=%230078D7" media="(min-width: 860px)"/><source srcSet="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-srcSet="https://store-images.s-microsoft.com/image/apps.41267.64171167600854339.769a7d46-88f2-46ee-befd-5bcc8d35dbb4.b08d4981-cd45-491d-a8a1-e65ca4975545?q=90&amp;w=200&amp;h=300&amp;mode=crop&amp;format=jpg&amp;background=%230078D7" media="(min-width: 1084px)"/><source srcSet="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-srcSet="https://store-images.s-microsoft.com/image/apps.41267.64171167600854339.769a7d46-88f2-46ee-befd-5bcc8d35dbb4.b08d4981-cd45-491d-a8a1-e65ca4975545?q=90&amp;w=256&amp;h=384&amp;mode=crop&amp;format=jpg&amp;background=%230078D7" media="(min-width: 1400px)"/><img src="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-src="https://store-images.s-microsoft.com/image/apps.41267.64171167600854339.769a7d46-88f2-46ee-befd-5bcc8d35dbb4.b08d4981-cd45-491d-a8a1-e65ca4975545?q=90&amp;w=256&amp;h=384&amp;mode=crop&amp;format=jpg&amp;background=%230078D7" class="card-img lazy lazyload blur-up lazypreload" data-sizes="auto" alt=""/></picture></div><div class="card-body px-3 pt-3"><h3 class="base mb-2 h6"><a href="https://www.microsoft.com/es-es/p/lost-odyssey/bzb4s8fs8t5b" aria-label="Lost Odyssey" data-bi-mto="true">Lost Odyssey</a></h3><p class="sr-only">24,99 €<span>Ofertas en compras de aplicaciones</span></p><p aria-hidden="true"> <span class="font-weight-semibold">24,99 €<sup class="small"><span aria-hidden="true">+</span></sup></span></p></div></div></div><div class="col slide-item px-2"><div id="card-4-ee9e90c9f5f24e209cbeb744896a5383" class="card h-100 material-card depth-4 depth-8-hover pb-4" data-bi-cN="Red Dead Redemption" data-bi-hN="Juegos mejor valorados" data-bi-bhvr="0" data-bi-cT="Product Card" data-bi-pid="bwklfhwt7dhc" data-bi-prdname="Red Dead Redemption" data-bi-carpos="4" data-bi-pa="Body" data-bi-compnm="Product Placement Carousel: Games" style="cursor:pointer"><div class="img-flex-auto"><picture><source srcSet="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-srcSet="https://store-images.s-microsoft.com/image/apps.42256.71534445913389778.3217f3df-0d90-489b-8f2f-90d018aded6a.93f85cbb-507f-45b4-8073-bc9c7f9514e4?q=90&amp;w=270&amp;h=405&amp;mode=crop&amp;format=jpg&amp;background=%230078D7" media="(min-width: 540px)"/><source srcSet="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-srcSet="https://store-images.s-microsoft.com/image/apps.42256.71534445913389778.3217f3df-0d90-489b-8f2f-90d018aded6a.93f85cbb-507f-45b4-8073-bc9c7f9514e4?q=90&amp;w=256&amp;h=384&amp;mode=crop&amp;format=jpg&amp;background=%230078D7" media="(min-width: 860px)"/><source srcSet="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-srcSet="https://store-images.s-microsoft.com/image/apps.42256.71534445913389778.3217f3df-0d90-489b-8f2f-90d018aded6a.93f85cbb-507f-45b4-8073-bc9c7f9514e4?q=90&amp;w=200&amp;h=300&amp;mode=crop&amp;format=jpg&amp;background=%230078D7" media="(min-width: 1084px)"/><source srcSet="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-srcSet="https://store-images.s-microsoft.com/image/apps.42256.71534445913389778.3217f3df-0d90-489b-8f2f-90d018aded6a.93f85cbb-507f-45b4-8073-bc9c7f9514e4?q=90&amp;w=256&amp;h=384&amp;mode=crop&amp;format=jpg&amp;background=%230078D7" media="(min-width: 1400px)"/><img src="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-src="https://store-images.s-microsoft.com/image/apps.42256.71534445913389778.3217f3df-0d90-489b-8f2f-90d018aded6a.93f85cbb-507f-45b4-8073-bc9c7f9514e4?q=90&amp;w=256&amp;h=384&amp;mode=crop&amp;format=jpg&amp;background=%230078D7" class="card-img lazy lazyload blur-up lazypreload" data-sizes="auto" alt=""/></picture></div><div class="card-body px-3 pt-3"><h3 class="base mb-2 h6"><a href="https://www.microsoft.com/es-es/p/red-dead-redemption/bwklfhwt7dhc" aria-label="Red Dead Redemption" data-bi-mto="true">Red Dead Redemption</a></h3><p class="sr-only">29,99 €<span>Ofertas en compras de aplicaciones</span></p><p aria-hidden="true"> <span class="font-weight-semibold">29,99 €<sup class="small"><span aria-hidden="true">+</span></sup></span></p></div></div></div><div class="col slide-item px-2"><div id="card-5-ee9e90c9f5f24e209cbeb744896a5383" class="card h-100 material-card depth-4 depth-8-hover pb-4" data-bi-cN="Ori and the Blind Forest: Definitive Edition" data-bi-hN="Juegos mejor valorados" data-bi-bhvr="0" data-bi-cT="Product Card" data-bi-pid="bw85kqb8q31m" data-bi-prdname="Ori and the Blind Forest: Definitive Edition" data-bi-carpos="5" data-bi-pa="Body" data-bi-compnm="Product Placement Carousel: Games" style="cursor:pointer"><div class="img-flex-auto"><picture><source srcSet="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-srcSet="https://store-images.s-microsoft.com/image/apps.4128.71930896676716842.b6740fa4-0359-4ca8-9e17-5d4e45c2d497.ffa292b1-579d-4a08-99ef-308ab7791f79?q=90&amp;w=270&amp;h=405&amp;mode=crop&amp;format=jpg&amp;background=%230078D7" media="(min-width: 540px)"/><source srcSet="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-srcSet="https://store-images.s-microsoft.com/image/apps.4128.71930896676716842.b6740fa4-0359-4ca8-9e17-5d4e45c2d497.ffa292b1-579d-4a08-99ef-308ab7791f79?q=90&amp;w=256&amp;h=384&amp;mode=crop&amp;format=jpg&amp;background=%230078D7" media="(min-width: 860px)"/><source srcSet="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-srcSet="https://store-images.s-microsoft.com/image/apps.4128.71930896676716842.b6740fa4-0359-4ca8-9e17-5d4e45c2d497.ffa292b1-579d-4a08-99ef-308ab7791f79?q=90&amp;w=200&amp;h=300&amp;mode=crop&amp;format=jpg&amp;background=%230078D7" media="(min-width: 1084px)"/><source srcSet="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-srcSet="https://store-images.s-microsoft.com/image/apps.4128.71930896676716842.b6740fa4-0359-4ca8-9e17-5d4e45c2d497.ffa292b1-579d-4a08-99ef-308ab7791f79?q=90&amp;w=256&amp;h=384&amp;mode=crop&amp;format=jpg&amp;background=%230078D7" media="(min-width: 1400px)"/><img src="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-src="https://store-images.s-microsoft.com/image/apps.4128.71930896676716842.b6740fa4-0359-4ca8-9e17-5d4e45c2d497.ffa292b1-579d-4a08-99ef-308ab7791f79?q=90&amp;w=256&amp;h=384&amp;mode=crop&amp;format=jpg&amp;background=%230078D7" class="card-img lazy lazyload blur-up lazypreload" data-sizes="auto" alt=""/></picture></div><div class="card-body px-3 pt-3"><h3 class="base mb-2 h6"><a href="https://www.microsoft.com/es-es/p/ori-and-the-blind-forest-definitive-edition/bw85kqb8q31m" aria-label="Ori and the Blind Forest: Definitive Edition" data-bi-mto="true">Ori and the Blind Forest: Definitive Edition</a></h3><p class="sr-only">Incluido con Game Pass</p><p aria-hidden="true"> <span class="font-weight-semibold">Incluido <span class="font-weight-semibold">con</span></span></p><div aria-hidden="true"><span class="badge bg-gray-500 mt-2 mb-2">Game Pass</span></div></div></div></div><div class="col slide-item px-2"><div id="card-6-ee9e90c9f5f24e209cbeb744896a5383" class="card h-100 material-card depth-4 depth-8-hover pb-4" data-bi-cN="RESIDENT EVIL 2" data-bi-hN="Juegos mejor valorados" data-bi-bhvr="0" data-bi-cT="Product Card" data-bi-pid="bwmh951m3g3p" data-bi-prdname="RESIDENT EVIL 2" data-bi-carpos="6" data-bi-pa="Body" data-bi-compnm="Product Placement Carousel: Games" style="cursor:pointer"><div class="img-flex-auto"><picture><source srcSet="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-srcSet="https://store-images.s-microsoft.com/image/apps.36567.71571739681700792.c61fa2d7-3d69-4edf-8e51-accc41d47823.a8c614fc-0dcb-4788-89ed-958635753296?q=90&amp;w=270&amp;h=405&amp;mode=crop&amp;format=jpg&amp;background=%230078D7" media="(min-width: 540px)"/><source srcSet="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-srcSet="https://store-images.s-microsoft.com/image/apps.36567.71571739681700792.c61fa2d7-3d69-4edf-8e51-accc41d47823.a8c614fc-0dcb-4788-89ed-958635753296?q=90&amp;w=256&amp;h=384&amp;mode=crop&amp;format=jpg&amp;background=%230078D7" media="(min-width: 860px)"/><source srcSet="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-srcSet="https://store-images.s-microsoft.com/image/apps.36567.71571739681700792.c61fa2d7-3d69-4edf-8e51-accc41d47823.a8c614fc-0dcb-4788-89ed-958635753296?q=90&amp;w=200&amp;h=300&amp;mode=crop&amp;format=jpg&amp;background=%230078D7" media="(min-width: 1084px)"/><source srcSet="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-srcSet="https://store-images.s-microsoft.com/image/apps.36567.71571739681700792.c61fa2d7-3d69-4edf-8e51-accc41d47823.a8c614fc-0dcb-4788-89ed-958635753296?q=90&amp;w=256&amp;h=384&amp;mode=crop&amp;format=jpg&amp;background=%230078D7" media="(min-width: 1400px)"/><img src="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-src="https://store-images.s-microsoft.com/image/apps.36567.71571739681700792.c61fa2d7-3d69-4edf-8e51-accc41d47823.a8c614fc-0dcb-4788-89ed-958635753296?q=90&amp;w=256&amp;h=384&amp;mode=crop&amp;format=jpg&amp;background=%230078D7" class="card-img lazy lazyload blur-up lazypreload" data-sizes="auto" alt=""/></picture></div><div class="card-body px-3 pt-3"><h3 class="base mb-2 h6"><a href="https://www.microsoft.com/es-es/p/resident-evil-2/bwmh951m3g3p" aria-label="RESIDENT EVIL 2" data-bi-mto="true">RESIDENT EVIL 2</a></h3><p class="sr-only">Incluido con Game Pass<span>Ofertas en compras de aplicaciones</span></p><p aria-hidden="true"> <span class="font-weight-semibold">Incluido<sup class="small"><span aria-hidden="true">+</span></sup> <span class="font-weight-semibold">con</span></span></p><div aria-hidden="true"><span class="badge bg-gray-500 mt-2 mb-2">Game Pass</span></div></div></div></div><div class="col slide-item px-2"><div id="card-7-ee9e90c9f5f24e209cbeb744896a5383" class="card h-100 material-card depth-4 depth-8-hover pb-4" data-bi-cN="Cities: Skylines - Xbox One Edition" data-bi-hN="Juegos mejor valorados" data-bi-bhvr="0" data-bi-cT="Product Card" data-bi-pid="c4gh8n6zxg5l" data-bi-prdname="Cities: Skylines - Xbox One Edition" data-bi-carpos="7" data-bi-pa="Body" data-bi-compnm="Product Placement Carousel: Games" style="cursor:pointer"><div class="img-flex-auto"><picture><source srcSet="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-srcSet="https://store-images.s-microsoft.com/image/apps.7220.66617542682682743.811213f2-2c45-4145-973d-fe3e3774b196.96b48a30-7ed1-4bc9-8f8b-b114375b2e1c?q=90&amp;w=270&amp;h=405&amp;mode=crop&amp;format=jpg&amp;background=%230078D7" media="(min-width: 540px)"/><source srcSet="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-srcSet="https://store-images.s-microsoft.com/image/apps.7220.66617542682682743.811213f2-2c45-4145-973d-fe3e3774b196.96b48a30-7ed1-4bc9-8f8b-b114375b2e1c?q=90&amp;w=256&amp;h=384&amp;mode=crop&amp;format=jpg&amp;background=%230078D7" media="(min-width: 860px)"/><source srcSet="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-srcSet="https://store-images.s-microsoft.com/image/apps.7220.66617542682682743.811213f2-2c45-4145-973d-fe3e3774b196.96b48a30-7ed1-4bc9-8f8b-b114375b2e1c?q=90&amp;w=200&amp;h=300&amp;mode=crop&amp;format=jpg&amp;background=%230078D7" media="(min-width: 1084px)"/><source srcSet="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-srcSet="https://store-images.s-microsoft.com/image/apps.7220.66617542682682743.811213f2-2c45-4145-973d-fe3e3774b196.96b48a30-7ed1-4bc9-8f8b-b114375b2e1c?q=90&amp;w=256&amp;h=384&amp;mode=crop&amp;format=jpg&amp;background=%230078D7" media="(min-width: 1400px)"/><img src="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-src="https://store-images.s-microsoft.com/image/apps.7220.66617542682682743.811213f2-2c45-4145-973d-fe3e3774b196.96b48a30-7ed1-4bc9-8f8b-b114375b2e1c?q=90&amp;w=256&amp;h=384&amp;mode=crop&amp;format=jpg&amp;background=%230078D7" class="card-img lazy lazyload blur-up lazypreload" data-sizes="auto" alt=""/></picture></div><div class="card-body px-3 pt-3"><h3 class="base mb-2 h6"><a href="https://www.microsoft.com/es-es/p/cities-skylines-xbox-one-edition/c4gh8n6zxg5l" aria-label="Cities: Skylines - Xbox One Edition" data-bi-mto="true">Cities: Skylines - Xbox One Edition</a></h3><p class="sr-only">Incluido con Game Pass<span>Ofertas en compras de aplicaciones</span></p><p aria-hidden="true"> <span class="font-weight-semibold">Incluido<sup class="small"><span aria-hidden="true">+</span></sup> <span class="font-weight-semibold">con</span></span></p><div aria-hidden="true"><span class="badge bg-gray-500 mt-2 mb-2">Game Pass</span></div></div></div></div><div class="col slide-item px-2"><div id="card-8-ee9e90c9f5f24e209cbeb744896a5383" class="card h-100 material-card depth-4 depth-8-hover pb-4" data-bi-cN="Asphalt 9: Legends" data-bi-hN="Juegos mejor valorados" data-bi-bhvr="0" data-bi-cT="Product Card" data-bi-pid="9nzqpt0mwtd0" data-bi-prdname="Asphalt 9: Legends" data-bi-carpos="8" data-bi-pa="Body" data-bi-compnm="Product Placement Carousel: Games" style="cursor:pointer"><div class="img-flex-auto"><picture><source srcSet="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-srcSet="https://store-images.s-microsoft.com/image/apps.15390.14471421918435459.3615d8d5-10ca-4c2f-b3e5-e8c97fe18682.abd3cc95-35b2-40d0-8b62-33ced0101eec?q=90&amp;w=270&amp;h=405&amp;mode=crop&amp;format=jpg&amp;background=%230078D7" media="(min-width: 540px)"/><source srcSet="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-srcSet="https://store-images.s-microsoft.com/image/apps.15390.14471421918435459.3615d8d5-10ca-4c2f-b3e5-e8c97fe18682.abd3cc95-35b2-40d0-8b62-33ced0101eec?q=90&amp;w=256&amp;h=384&amp;mode=crop&amp;format=jpg&amp;background=%230078D7" media="(min-width: 860px)"/><source srcSet="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-srcSet="https://store-images.s-microsoft.com/image/apps.15390.14471421918435459.3615d8d5-10ca-4c2f-b3e5-e8c97fe18682.abd3cc95-35b2-40d0-8b62-33ced0101eec?q=90&amp;w=200&amp;h=300&amp;mode=crop&amp;format=jpg&amp;background=%230078D7" media="(min-width: 1084px)"/><source srcSet="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-srcSet="https://store-images.s-microsoft.com/image/apps.15390.14471421918435459.3615d8d5-10ca-4c2f-b3e5-e8c97fe18682.abd3cc95-35b2-40d0-8b62-33ced0101eec?q=90&amp;w=256&amp;h=384&amp;mode=crop&amp;format=jpg&amp;background=%230078D7" media="(min-width: 1400px)"/><img src="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-src="https://store-images.s-microsoft.com/image/apps.15390.14471421918435459.3615d8d5-10ca-4c2f-b3e5-e8c97fe18682.abd3cc95-35b2-40d0-8b62-33ced0101eec?q=90&amp;w=256&amp;h=384&amp;mode=crop&amp;format=jpg&amp;background=%230078D7" class="card-img lazy lazyload blur-up lazypreload" data-sizes="auto" alt=""/></picture></div><div class="card-body px-3 pt-3"><h3 class="base mb-2 h6"><a href="https://www.microsoft.com/es-es/p/asphalt-9-legends/9nzqpt0mwtd0" aria-label="Asphalt 9: Legends" data-bi-mto="true">Asphalt 9: Legends</a></h3><p class="sr-only">Gratuito<span>Ofertas en compras de aplicaciones</span></p><p aria-hidden="true"> <span class="font-weight-semibold">Gratuito<sup class="small"><span aria-hidden="true">+</span></sup></span></p></div></div></div><div class="col slide-item px-2"><div id="card-9-ee9e90c9f5f24e209cbeb744896a5383" class="card h-100 material-card depth-4 depth-8-hover pb-4" data-bi-cN="Metro Redux Bundle" data-bi-hN="Juegos mejor valorados" data-bi-bhvr="0" data-bi-cT="Product Card" data-bi-pid="bv6mjx1tdl17" data-bi-prdname="Metro Redux Bundle" data-bi-carpos="9" data-bi-pa="Body" data-bi-compnm="Product Placement Carousel: Games" style="cursor:pointer"><div class="img-flex-auto"><picture><source srcSet="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-srcSet="https://store-images.s-microsoft.com/image/apps.56980.71284913231831834.e5082776-e343-4a65-be15-61de38a07b59.269c5b8f-5ee4-480c-a07a-99d23d898b6f?q=90&amp;w=270&amp;h=405&amp;mode=crop&amp;format=jpg&amp;background=%23FFFFFF" media="(min-width: 540px)"/><source srcSet="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-srcSet="https://store-images.s-microsoft.com/image/apps.56980.71284913231831834.e5082776-e343-4a65-be15-61de38a07b59.269c5b8f-5ee4-480c-a07a-99d23d898b6f?q=90&amp;w=256&amp;h=384&amp;mode=crop&amp;format=jpg&amp;background=%23FFFFFF" media="(min-width: 860px)"/><source srcSet="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-srcSet="https://store-images.s-microsoft.com/image/apps.56980.71284913231831834.e5082776-e343-4a65-be15-61de38a07b59.269c5b8f-5ee4-480c-a07a-99d23d898b6f?q=90&amp;w=200&amp;h=300&amp;mode=crop&amp;format=jpg&amp;background=%23FFFFFF" media="(min-width: 1084px)"/><source srcSet="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-srcSet="https://store-images.s-microsoft.com/image/apps.56980.71284913231831834.e5082776-e343-4a65-be15-61de38a07b59.269c5b8f-5ee4-480c-a07a-99d23d898b6f?q=90&amp;w=256&amp;h=384&amp;mode=crop&amp;format=jpg&amp;background=%23FFFFFF" media="(min-width: 1400px)"/><img src="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-src="https://store-images.s-microsoft.com/image/apps.56980.71284913231831834.e5082776-e343-4a65-be15-61de38a07b59.269c5b8f-5ee4-480c-a07a-99d23d898b6f?q=90&amp;w=256&amp;h=384&amp;mode=crop&amp;format=jpg&amp;background=%23FFFFFF" class="card-img lazy lazyload blur-up lazypreload" data-sizes="auto" alt=""/></picture></div><div class="card-body px-3 pt-3"><h3 class="base mb-2 h6"><a href="https://www.microsoft.com/es-es/p/metro-redux-bundle/bv6mjx1tdl17" aria-label="Metro Redux Bundle" data-bi-mto="true">Metro Redux Bundle</a></h3><p class="sr-only">29,99 €</p><p aria-hidden="true"> <span class="font-weight-semibold">29,99 €</span></p></div></div></div></div></div></section></div></div><a href="#controls-ee9e90c9f5f24e209cbeb744896a5383" class="btn btn-link sr-only-focusable w-100 position-absolute bottom-0">Volver a los controles Siguiente y Anterior</a></div></section><a id="skip-ee9e90c9f5f24e209cbeb744896a5383" class="sr-only" tabindex="-1">Fin de<!-- --> <!-- -->Juegos mejor valorados</a></div></div></div></div>
                        
                        
                    
                
                
                        
                        
                    
            

            
        
    



    <div class="cq-placeholder" data-emptytext="ProductCards"></div>




    
        
    
<script src="/etc.clientlibs/microsoft/components/content/productcards/v1/productcards/clientlibs/clientlib.min.ACSHASH7a029ac4ef1eea2cfd81ea74b4205d8d.js"></script>



    
</div>
<div class="productcards mb-md-5 aem-GridColumn aem-GridColumn--default--12" data-component-id="277fdfcaff130aee6c0e8803411261b3">


    
    






    


    
        


        
            
                
                        
                        
                            <div data-ssrmodule="ProductCards" data-props="%7B%22cards%22%3A%5B%7B%22compName%22%3A%22Product%20Placement%20Carousel%3A%20Devices%22%2C%22description%22%3A%7B%22full%22%3A%5B%22El%20Mando%20Inal%C3%A1mbrico%20Xbox%20Elite%20Series%202%20ofrece%20m%C3%A1s%20de%2030%20nuevas%20formas%20de%20jugar%20como%20un%20profesional%2C%20incluidos%20nuevos%20sticks%20de%20tensi%C3%B3n%20regulable%2C%20nuevos%20componentes%20intercambiables%2C%20hasta%2040%20horas%20de%20duraci%C3%B3n%20de%20la%20bater%C3%ADa%20recargable%20y%20una%20personalizaci%C3%B3n%20ilimitada%20con%20la%20aplicaci%C3%B3n%20Accesorios%20de%20Xbox%20en%20Xbox%20One%20y%20Windows.%22%5D%2C%22showReadMore%22%3Atrue%2C%22visibleText%22%3A%5B%22El%20Mando%20Inal%C3%A1mbrico%20Xbox%20Elite%20Series%202%20ofrece%20m%C3%A1s%20de%2030%20nuevas%20formas%20de%20jugar%20como...%22%5D%7D%2C%22idx%22%3A0%2C%22image%22%3A%7B%22uri%22%3A%22https%3A%2F%2Fimg-prod-cms-rt-microsoft-com.akamaized.net%2Fcms%2Fapi%2Fam%2FimageFileData%2FRE2XP73%3Fver%3D7371%26%22%2C%22alt%22%3A%22Mando%20Inal%C3%A1mbrico%20Xbox%20Elite%20Series%202%22%2C%22background%22%3A%22%22%2C%22system%22%3A%22rtdam%22%7D%2C%22isCondensed%22%3Afalse%2C%22listDisplayName%22%3A%22Mandos%20Xbox%22%2C%22locale%22%3A%22es-ES%22%2C%22newTab%22%3Afalse%2C%22pdpUri%22%3A%22https%3A%2F%2Fwww.microsoft.com%2Fes-es%2Fd%2Fmando-inalambrico-xbox-elite-series-2%2F8rsn7j6375gg%22%2C%22preOrder%22%3Afalse%2C%22price%22%3A%7B%22inAppPurchases%22%3Afalse%2C%22fromText%22%3A%22%22%2C%22currentPrice%22%3A%22179%2C99%C2%A0%E2%82%AC%22%2C%22screenReaderText%22%3A%22179%2C99%C2%A0%E2%82%AC%22%7D%2C%22productId%22%3A%228rsn7j6375gg%22%2C%22skuId%22%3A%2266LC%22%2C%22availabilityId%22%3A%228WG5VQP0X697%22%2C%22productHeadingTagLevel%22%3A%22h3%22%2C%22showCtaLink%22%3Afalse%2C%22title%22%3A%22Mando%20Inal%C3%A1mbrico%20Xbox%20Elite%20Series%202%22%2C%22inStock%22%3Atrue%7D%2C%7B%22compName%22%3A%22Product%20Placement%20Carousel%3A%20Devices%22%2C%22description%22%3A%7B%22full%22%3A%5B%22Disfruta%20del%20Mando%20inal%C3%A1mbrico%20Xbox%20Elite%20Series%202%20%E2%80%93%20Core%2C%20que%20cuenta%20con%20palancas%20de%20mando%20de%20tensi%C3%B3n%20ajustable%2C%20bloqueo%20de%20gatillos%20de%20alta%20sensibilidad%20m%C3%A1s%20cortos%20y%20una%20personalizaci%C3%B3n%20ilimitada%20con%20la%20aplicaci%C3%B3n%20Accesorios%20de%20Xbox%20en%20Xbox%20Series%20X%7CS%2C%20Xbox%20One%20y%20PC%20Windows.%C2%B9%22%5D%2C%22showReadMore%22%3Atrue%2C%22visibleText%22%3A%5B%22Disfruta%20del%20Mando%20inal%C3%A1mbrico%20Xbox%20Elite%20Series%202%20%E2%80%93%20Core%2C%20que%20cuenta%20con%20palancas%20de...%22%5D%7D%2C%22idx%22%3A1%2C%22image%22%3A%7B%22uri%22%3A%22https%3A%2F%2Fimg-prod-cms-rt-microsoft-com.akamaized.net%2Fcms%2Fapi%2Fam%2FimageFileData%2FRWXgRg%3Fver%3D79f2%26%22%2C%22alt%22%3A%22Mando%20inal%C3%A1mbrico%20Xbox%20Elite%20Series%202%20%E2%80%93%20Core%22%2C%22background%22%3A%22%22%2C%22system%22%3A%22rtdam%22%7D%2C%22isCondensed%22%3Afalse%2C%22listDisplayName%22%3A%22Mandos%20Xbox%22%2C%22locale%22%3A%22es-es%22%2C%22newTab%22%3Afalse%2C%22pdpUri%22%3A%22https%3A%2F%2Fwww.microsoft.com%2Fes-es%2Fd%2Fmando-inalambrico-xbox-elite-series-2-core%2F8v7m3k0bsh52%22%2C%22preOrder%22%3Afalse%2C%22price%22%3A%7B%22inAppPurchases%22%3Afalse%2C%22fromText%22%3A%22Desde%20%22%2C%22currentPrice%22%3A%22129%2C99%C2%A0%E2%82%AC%22%2C%22screenReaderText%22%3A%22Desde%20%20129%2C99%C2%A0%E2%82%AC%22%7D%2C%22primaryBadgeText%22%3A%22Ahorra%2010%2C99%C2%A0%E2%82%AC%20del%20PVPR%22%2C%22productId%22%3A%228v7m3k0bsh52%22%2C%22skuId%22%3A%22FB41%22%2C%22availabilityId%22%3A%228WH5P1NZZ01M%22%2C%22productHeadingTagLevel%22%3A%22h3%22%2C%22showCtaLink%22%3Afalse%2C%22title%22%3A%22Mando%20inal%C3%A1mbrico%20Xbox%20Elite%20Series%202%20%E2%80%93%20Core%22%2C%22inStock%22%3Atrue%7D%2C%7B%22compName%22%3A%22Product%20Placement%20Carousel%3A%20Devices%22%2C%22description%22%3A%7B%22full%22%3A%5B%22Disfruta%20del%20Mando%20inal%C3%A1mbrico%20Xbox%2C%20dise%C3%B1ado%20para%20una%20mayor%20comodidad%20durante%20el%20juego.%20Disponible%20en%20Carbon%20Black%2C%20Robot%20White%2C%20Shock%20Blue%2C%20Pulse%20Red%2C%20Electric%20Volt%2C%20Deep%20Pink%2C%20Velocity%20Green%20y%20Astral%20Purple.%22%5D%2C%22showReadMore%22%3Atrue%2C%22visibleText%22%3A%5B%22Disfruta%20del%20Mando%20inal%C3%A1mbrico%20Xbox%2C%20dise%C3%B1ado%20para%20una%20mayor%20comodidad%20durante%20el...%22%5D%7D%2C%22idx%22%3A2%2C%22image%22%3A%7B%22uri%22%3A%22https%3A%2F%2Fimg-prod-cms-rt-microsoft-com.akamaized.net%2Fcms%2Fapi%2Fam%2FimageFileData%2FRW198RH%3Fver%3D7110%26%22%2C%22alt%22%3A%22Mando%20Inal%C3%A1mbrico%20Xbox%22%2C%22background%22%3A%22%22%2C%22system%22%3A%22rtdam%22%7D%2C%22isCondensed%22%3Afalse%2C%22listDisplayName%22%3A%22Mandos%20Xbox%22%2C%22locale%22%3A%22es-es%22%2C%22newTab%22%3Afalse%2C%22pdpUri%22%3A%22https%3A%2F%2Fwww.microsoft.com%2Fes-es%2Fd%2Fmando-inalambrico-xbox%2F8xn59crbsqgz%22%2C%22preOrder%22%3Afalse%2C%22price%22%3A%7B%22inAppPurchases%22%3Afalse%2C%22fromText%22%3A%22Desde%20%22%2C%22currentPrice%22%3A%2259%2C99%C2%A0%E2%82%AC%22%2C%22screenReaderText%22%3A%22Desde%20%2059%2C99%C2%A0%E2%82%AC%22%7D%2C%22primaryBadgeText%22%3A%22Ahorra%209%2C50%C2%A0%E2%82%AC%20del%20PVPR%22%2C%22productId%22%3A%228xn59crbsqgz%22%2C%22skuId%22%3A%2230RD%22%2C%22availabilityId%22%3A%228W6QLSRQD47F%22%2C%22productHeadingTagLevel%22%3A%22h3%22%2C%22showCtaLink%22%3Afalse%2C%22title%22%3A%22Mando%20Inal%C3%A1mbrico%20Xbox%22%2C%22inStock%22%3Atrue%7D%2C%7B%22compName%22%3A%22Product%20Placement%20Carousel%3A%20Devices%22%2C%22description%22%3A%7B%22full%22%3A%5B%22Disfruta%20del%20Mando%20inal%C3%A1mbrico%20Xbox%3A%20Edici%C3%B3n%20Especial%20Gold%20Shadow%2C%20que%20cuenta%20con%20un%20acabado%20metalizado%20brillante%20con%20degradado%20de%20dorado%20a%20negro.%22%5D%2C%22showReadMore%22%3Atrue%2C%22visibleText%22%3A%5B%22Disfruta%20del%20Mando%20inal%C3%A1mbrico%20Xbox%3A%20Edici%C3%B3n%20Especial%20Gold%20Shadow%2C%20que%20cuenta%20con%20un...%22%5D%7D%2C%22idx%22%3A3%2C%22image%22%3A%7B%22uri%22%3A%22https%3A%2F%2Fimg-prod-cms-rt-microsoft-com.akamaized.net%2Fcms%2Fapi%2Fam%2FimageFileData%2FRW1aGdI%3Fver%3D1697%26%22%2C%22alt%22%3A%22Mando%20inal%C3%A1mbrico%20Xbox%20%E2%80%93%20Edici%C3%B3n%20especial%20Gold%20Shadow%22%2C%22background%22%3A%22%22%2C%22system%22%3A%22rtdam%22%7D%2C%22isCondensed%22%3Afalse%2C%22listDisplayName%22%3A%22Mandos%20Xbox%22%2C%22locale%22%3A%22es-es%22%2C%22newTab%22%3Afalse%2C%22pdpUri%22%3A%22https%3A%2F%2Fwww.microsoft.com%2Fes-es%2Fd%2Fmando-inalambrico-xbox-edicion-especial-gold-shadow%2F8sdtt2lh2t1h%22%2C%22preOrder%22%3Afalse%2C%22price%22%3A%7B%22inAppPurchases%22%3Afalse%2C%22fromText%22%3A%22%22%2C%22currentPrice%22%3A%2269%2C99%C2%A0%E2%82%AC%22%2C%22screenReaderText%22%3A%2269%2C99%C2%A0%E2%82%AC%22%7D%2C%22productId%22%3A%228sdtt2lh2t1h%22%2C%22skuId%22%3A%2230G1%22%2C%22availabilityId%22%3A%228WR6RB4ZR4MB%22%2C%22productHeadingTagLevel%22%3A%22h3%22%2C%22showCtaLink%22%3Afalse%2C%22title%22%3A%22Mando%20inal%C3%A1mbrico%20Xbox%20%E2%80%93%20Edici%C3%B3n%20especial%20Gold%20Shadow%22%2C%22inStock%22%3Atrue%7D%2C%7B%22compName%22%3A%22Product%20Placement%20Carousel%3A%20Devices%22%2C%22description%22%3A%7B%22full%22%3A%5B%22Disfruta%20del%20Mando%20inal%C3%A1mbrico%20Xbox%20%E2%80%93%20Stormcloud%20Vapor%20Edici%C3%B3n%20Especial%2C%20que%20cuenta%20con%20un%20remolino%20azul%20y%20negro%20%C3%BAnico%20para%20cada%20mando%20y%20agarres%20de%20goma%20azules%20con%20patr%C3%B3n%20de%20diamante%20en%20la%20parte%20trasera.%22%5D%2C%22showReadMore%22%3Atrue%2C%22visibleText%22%3A%5B%22Disfruta%20del%20Mando%20inal%C3%A1mbrico%20Xbox%20%E2%80%93%20Stormcloud%20Vapor%20Edici%C3%B3n%20Especial%2C%20que%20cuenta...%22%5D%7D%2C%22idx%22%3A4%2C%22image%22%3A%7B%22uri%22%3A%22https%3A%2F%2Fimg-prod-cms-rt-microsoft-com.akamaized.net%2Fcms%2Fapi%2Fam%2FimageFileData%2FRW16JNc%3Fver%3Da961%26%22%2C%22alt%22%3A%22Mando%20inal%C3%A1mbrico%20Xbox%3A%20Stormcloud%20Vapor%20Special%20Edition%22%2C%22background%22%3A%22%22%2C%22system%22%3A%22rtdam%22%7D%2C%22isCondensed%22%3Afalse%2C%22listDisplayName%22%3A%22Mandos%20Xbox%22%2C%22locale%22%3A%22es-es%22%2C%22newTab%22%3Afalse%2C%22pdpUri%22%3A%22https%3A%2F%2Fwww.microsoft.com%2Fes-es%2Fd%2Fmando-inalambrico-xbox-stormcloud-vapor-special-edition%2F8xhnlbp36g5f%22%2C%22preOrder%22%3Afalse%2C%22price%22%3A%7B%22inAppPurchases%22%3Afalse%2C%22fromText%22%3A%22%22%2C%22currentPrice%22%3A%2269%2C99%C2%A0%E2%82%AC%22%2C%22screenReaderText%22%3A%2269%2C99%C2%A0%E2%82%AC%22%7D%2C%22productId%22%3A%228xhnlbp36g5f%22%2C%22skuId%22%3A%22BQJS%22%2C%22availabilityId%22%3A%228W0T0VRTVWHW%22%2C%22productHeadingTagLevel%22%3A%22h3%22%2C%22showCtaLink%22%3Afalse%2C%22title%22%3A%22Mando%20inal%C3%A1mbrico%20Xbox%3A%20Stormcloud%20Vapor%20Special%20Edition%22%2C%22inStock%22%3Atrue%7D%2C%7B%22compName%22%3A%22Product%20Placement%20Carousel%3A%20Devices%22%2C%22description%22%3A%7B%22full%22%3A%5B%22Mete%20m%C3%A1s%20presi%C3%B3n%20con%20el%20Mando%20inal%C3%A1mbrico%20Xbox%20%E2%80%93%20Sunkissed%20Vibes%20OPI%20Edici%C3%B3n%20Especial%2C%20inspirado%20en%20la%20colecci%C3%B3n%20Summer%20Make%20the%20Rules%20de%20OPI.%22%5D%2C%22showReadMore%22%3Atrue%2C%22visibleText%22%3A%5B%22Mete%20m%C3%A1s%20presi%C3%B3n%20con%20el%20Mando%20inal%C3%A1mbrico%20Xbox%20%E2%80%93%20Sunkissed%20Vibes%20OPI%20Edici%C3%B3n%20Especial...%22%5D%7D%2C%22idx%22%3A5%2C%22image%22%3A%7B%22uri%22%3A%22https%3A%2F%2Fimg-prod-cms-rt-microsoft-com.akamaized.net%2Fcms%2Fapi%2Fam%2FimageFileData%2FRW10vxe%3Fver%3D98e7%26%22%2C%22alt%22%3A%22Mando%20inal%C3%A1mbrico%20Xbox%20%E2%80%93%20Sunkissed%20Vibes%20OPI%20Edici%C3%B3n%20Especial%22%2C%22background%22%3A%22%22%2C%22system%22%3A%22rtdam%22%7D%2C%22isCondensed%22%3Afalse%2C%22listDisplayName%22%3A%22Mandos%20Xbox%22%2C%22locale%22%3A%22es-es%22%2C%22newTab%22%3Afalse%2C%22pdpUri%22%3A%22https%3A%2F%2Fwww.microsoft.com%2Fes-es%2Fd%2Fmando-inalambrico-xbox-sunkissed-vibes-opi-edicion-especial%2F928w7wcrttkm%22%2C%22preOrder%22%3Afalse%2C%22price%22%3A%7B%22inAppPurchases%22%3Afalse%2C%22fromText%22%3A%22%22%2C%22currentPrice%22%3A%2269%2C99%C2%A0%E2%82%AC%22%2C%22screenReaderText%22%3A%2269%2C99%C2%A0%E2%82%AC%22%7D%2C%22productId%22%3A%22928w7wcrttkm%22%2C%22skuId%22%3A%22FM0L%22%2C%22availabilityId%22%3A%228W31HNLRS6T6%22%2C%22productHeadingTagLevel%22%3A%22h3%22%2C%22showCtaLink%22%3Afalse%2C%22title%22%3A%22Mando%20inal%C3%A1mbrico%20Xbox%20%E2%80%93%20Sunkissed%20Vibes%20OPI%20Edici%C3%B3n%20Especial%22%2C%22inStock%22%3Atrue%7D%2C%7B%22compName%22%3A%22Product%20Placement%20Carousel%3A%20Devices%22%2C%22description%22%3A%7B%22full%22%3A%5B%22Disfruta%20del%20Mando%20inal%C3%A1mbrico%20Xbox%20%E2%80%93%20Edici%C3%B3n%20Especial%20Remix%2C%20que%20est%C3%A1%20hecho%20de%20pl%C3%A1sticos%20recuperados%2C%20un%20tercio%20de%20los%20cuales%20procede%20de%20materiales%20granulados%20y%20reciclados.%20Tambi%C3%A9n%20incluye%20el%20Pack%20de%20bater%C3%ADas%20recargables%20Xbox.%C2%B9%22%5D%2C%22showReadMore%22%3Atrue%2C%22visibleText%22%3A%5B%22Disfruta%20del%20Mando%20inal%C3%A1mbrico%20Xbox%20%E2%80%93%20Edici%C3%B3n%20Especial%20Remix%2C%20que%20est%C3%A1%20hecho%20de...%22%5D%7D%2C%22idx%22%3A6%2C%22image%22%3A%7B%22uri%22%3A%22https%3A%2F%2Fimg-prod-cms-rt-microsoft-com.akamaized.net%2Fcms%2Fapi%2Fam%2FimageFileData%2FRWYNC8%3Fver%3D56c2%26%22%2C%22alt%22%3A%22Mando%20inal%C3%A1mbrico%20Xbox%20%E2%80%93%20Edici%C3%B3n%20Especial%20Remix%22%2C%22background%22%3A%22%22%2C%22system%22%3A%22rtdam%22%7D%2C%22isCondensed%22%3Afalse%2C%22listDisplayName%22%3A%22Mandos%20Xbox%22%2C%22locale%22%3A%22es-es%22%2C%22newTab%22%3Afalse%2C%22pdpUri%22%3A%22https%3A%2F%2Fwww.microsoft.com%2Fes-es%2Fd%2Fmando-inalambrico-xbox-edicion-especial-remix%2F8zfbkd2fjmkn%22%2C%22preOrder%22%3Afalse%2C%22price%22%3A%7B%22inAppPurchases%22%3Afalse%2C%22fromText%22%3A%22%22%2C%22currentPrice%22%3A%2272%2C49%C2%A0%E2%82%AC%22%2C%22originalPrice%22%3A%2284%2C99%C2%A0%E2%82%AC%22%2C%22screenReaderText%22%3A%22Originalmente%2084%2C99%C2%A0%E2%82%AC%20ahora%2072%2C49%C2%A0%E2%82%AC%22%7D%2C%22primaryBadgeText%22%3A%22Ahorra%2012%2C50%C2%A0%E2%82%AC%20del%20PVPR%22%2C%22productId%22%3A%228zfbkd2fjmkn%22%2C%22skuId%22%3A%22CB47%22%2C%22availabilityId%22%3A%228WQVHXGCWMN0%22%2C%22productHeadingTagLevel%22%3A%22h3%22%2C%22showCtaLink%22%3Afalse%2C%22title%22%3A%22Mando%20inal%C3%A1mbrico%20Xbox%20%E2%80%93%20Edici%C3%B3n%20Especial%20Remix%22%2C%22inStock%22%3Atrue%7D%2C%7B%22compName%22%3A%22Product%20Placement%20Carousel%3A%20Devices%22%2C%22description%22%3A%7B%22full%22%3A%5B%22Disfruta%20del%20Mando%20inal%C3%A1mbrico%20Xbox%20%E2%80%93%20Stellar%20Shift%20Special%20Edition%2C%20con%20cambio%20de%20colores%2C%20centelleo%20azul%20y%20p%C3%BArpura%2C%20y%20agarres%20de%20goma%20con%20remolinos%20en%20p%C3%BArpura%20que%20hacen%20que%20el%20mando%20cobre%20vida.%22%5D%2C%22showReadMore%22%3Atrue%2C%22visibleText%22%3A%5B%22Disfruta%20del%20Mando%20inal%C3%A1mbrico%20Xbox%20%E2%80%93%20Stellar%20Shift%20Special%20Edition%2C%20con%20cambio%20de...%22%5D%7D%2C%22idx%22%3A7%2C%22image%22%3A%7B%22uri%22%3A%22https%3A%2F%2Fimg-prod-cms-rt-microsoft-com.akamaized.net%2Fcms%2Fapi%2Fam%2FimageFileData%2FRE5dP2W%3Fver%3D3ced%26%22%2C%22alt%22%3A%22Mando%20inal%C3%A1mbrico%20Xbox%20%E2%80%93%20Stellar%20Shift%20Special%20Edition%22%2C%22background%22%3A%22%22%2C%22system%22%3A%22rtdam%22%7D%2C%22isCondensed%22%3Afalse%2C%22listDisplayName%22%3A%22Mandos%20Xbox%22%2C%22locale%22%3A%22es-es%22%2C%22newTab%22%3Afalse%2C%22pdpUri%22%3A%22https%3A%2F%2Fwww.microsoft.com%2Fes-es%2Fd%2Fmando-inalambrico-xbox-stellar-shift-special-edition%2F94fbjc7h0h6h%22%2C%22preOrder%22%3Afalse%2C%22price%22%3A%7B%22inAppPurchases%22%3Afalse%2C%22fromText%22%3A%22%22%2C%22currentPrice%22%3A%2269%2C99%C2%A0%E2%82%AC%22%2C%22screenReaderText%22%3A%2269%2C99%C2%A0%E2%82%AC%22%7D%2C%22productId%22%3A%2294fbjc7h0h6h%22%2C%22skuId%22%3A%22G61F%22%2C%22availabilityId%22%3A%228W3HG41CDZ9G%22%2C%22productHeadingTagLevel%22%3A%22h3%22%2C%22showCtaLink%22%3Afalse%2C%22title%22%3A%22Mando%20inal%C3%A1mbrico%20Xbox%20%E2%80%93%20Stellar%20Shift%20Special%20Edition%22%2C%22inStock%22%3Atrue%7D%2C%7B%22compName%22%3A%22Product%20Placement%20Carousel%3A%20Devices%22%2C%22description%22%3A%7B%22full%22%3A%5B%22Disfruta%20del%20Mando%20inal%C3%A1mbrico%20Xbox%20%E2%80%93%20Mineral%20Camo%20Special%20Edition%2C%20que%20cuenta%20con%20un%20llamativo%20patr%C3%B3n%20de%20camuflaje%20azul%20mineral%2C%20p%C3%BArpura%20brillante%2C%20aguamarina%20y%20p%C3%BArpura%20oscuro.%C2%B9%22%5D%2C%22showReadMore%22%3Atrue%2C%22visibleText%22%3A%5B%22Disfruta%20del%20Mando%20inal%C3%A1mbrico%20Xbox%20%E2%80%93%20Mineral%20Camo%20Special%20Edition%2C%20que%20cuenta%20con%20un...%22%5D%7D%2C%22idx%22%3A8%2C%22image%22%3A%7B%22uri%22%3A%22https%3A%2F%2Fimg-prod-cms-rt-microsoft-com.akamaized.net%2Fcms%2Fapi%2Fam%2FimageFileData%2FRE54DVo%3Fver%3Db6b5%26%22%2C%22alt%22%3A%22Mando%20inal%C3%A1mbrico%20Xbox%20%E2%80%93%20Mineral%20Camo%20Special%20Edition%22%2C%22background%22%3A%22%22%2C%22system%22%3A%22rtdam%22%7D%2C%22isCondensed%22%3Afalse%2C%22listDisplayName%22%3A%22Mandos%20Xbox%22%2C%22locale%22%3A%22es-es%22%2C%22newTab%22%3Afalse%2C%22pdpUri%22%3A%22https%3A%2F%2Fwww.microsoft.com%2Fes-es%2Fd%2Fmando-inalambrico-xbox-mineral-camo-special-edition%2F93jtnp21rvxn%22%2C%22preOrder%22%3Afalse%2C%22price%22%3A%7B%22inAppPurchases%22%3Afalse%2C%22fromText%22%3A%22%22%2C%22currentPrice%22%3A%2269%2C99%C2%A0%E2%82%AC%22%2C%22screenReaderText%22%3A%2269%2C99%C2%A0%E2%82%AC%22%7D%2C%22productId%22%3A%2293jtnp21rvxn%22%2C%22skuId%22%3A%220J61%22%2C%22availabilityId%22%3A%228WCFN2F9B2WP%22%2C%22productHeadingTagLevel%22%3A%22h3%22%2C%22showCtaLink%22%3Afalse%2C%22title%22%3A%22Mando%20inal%C3%A1mbrico%20Xbox%20%E2%80%93%20Mineral%20Camo%20Special%20Edition%22%2C%22inStock%22%3Atrue%7D%2C%7B%22compName%22%3A%22Product%20Placement%20Carousel%3A%20Devices%22%2C%22description%22%3A%7B%22full%22%3A%5B%22Disfruta%20del%20Mando%20inal%C3%A1mbrico%20Xbox%20modernizado%2C%20dise%C3%B1ado%20para%20una%20mayor%20comodidad%20durante%20el%20juego%20para%20consolas%20compatibles%2C%20PC%20y%20tel%C3%A9fonos%20m%C3%B3viles%20o%20tabletas.%20Juega%20de%20forma%20inal%C3%A1mbrica%20o%20usa%20el%20cable%20USB-C%20de%202%2C7%20m%20incluido%20para%20disfrutar%20de%20una%20experiencia%20de%20juego%20con%20cable.*%22%5D%2C%22showReadMore%22%3Atrue%2C%22visibleText%22%3A%5B%22Disfruta%20del%20Mando%20inal%C3%A1mbrico%20Xbox%20modernizado%2C%20dise%C3%B1ado%20para%20una%20mayor%20comodidad...%22%5D%7D%2C%22idx%22%3A9%2C%22image%22%3A%7B%22uri%22%3A%22https%3A%2F%2Fimg-prod-cms-rt-microsoft-com.akamaized.net%2Fcms%2Fapi%2Fam%2FimageFileData%2FRE4GOMY%3Fver%3D97e3%26%22%2C%22alt%22%3A%22Mando%20inal%C3%A1mbrico%20Xbox%20%2B%20Cable%20USB-C%C2%AE%20%22%2C%22background%22%3A%22%22%2C%22system%22%3A%22rtdam%22%7D%2C%22isCondensed%22%3Afalse%2C%22listDisplayName%22%3A%22Mandos%20Xbox%22%2C%22locale%22%3A%22es-es%22%2C%22newTab%22%3Afalse%2C%22pdpUri%22%3A%22https%3A%2F%2Fwww.microsoft.com%2Fes-es%2Fd%2Fmando-inalambrico-xbox-cable-usb-c%2F8t8kcnb1xs3d%22%2C%22preOrder%22%3Afalse%2C%22price%22%3A%7B%22inAppPurchases%22%3Afalse%2C%22fromText%22%3A%22%22%2C%22currentPrice%22%3A%2259%2C99%C2%A0%E2%82%AC%22%2C%22screenReaderText%22%3A%2259%2C99%C2%A0%E2%82%AC%22%7D%2C%22productId%22%3A%228t8kcnb1xs3d%22%2C%22skuId%22%3A%22796M%22%2C%22availabilityId%22%3A%228WK8MBV0K4D9%22%2C%22productHeadingTagLevel%22%3A%22h3%22%2C%22showCtaLink%22%3Afalse%2C%22title%22%3A%22Mando%20inal%C3%A1mbrico%20Xbox%20%2B%20Cable%20USB-C%C2%AE%20%22%2C%22inStock%22%3Atrue%7D%5D%2C%22carouselId%22%3A%226e1975d4-1a71-4e18-b193-898d00a62ae9%22%2C%22channelStyle%22%3A%22row%20row-cols-1%20row-cols-sm-2%20row-cols-md-3%20row-cols-lg-4%20py-5%22%2C%22error%22%3A%22%22%2C%22headingSize%22%3A%22h2%22%2C%22headingTagLevel%22%3A%22h2%22%2C%22hideHeader%22%3Afalse%2C%22hideStatus%22%3Afalse%2C%22isCondensed%22%3Afalse%2C%22listDisplayName%22%3A%22Mandos%20Xbox%22%2C%22listName%22%3A%22xboxcontrollers%22%2C%22listType%22%3A%22curated%22%2C%22locale%22%3A%22es-ES%22%2C%22localizedText%22%3A%7B%22OFFERS_IN_APP_PURCHASES%22%3A%22Ofertas%20en%20compras%20de%20aplicaciones%22%2C%22CLOSE%22%3A%22Cerrar%22%2C%22SHOWING_START_THROUGH_END_OF_TOTAL_ITEMS%22%3A%22Mostrando%20de%20%7B0%7D%20a%20%7B1%7D%20de%20%7B2%7D%20elementos%22%2C%22PREVIOUS_SLIDE%22%3A%22Diapositiva%20anterior%22%2C%22BACK_TO_NEXT_AND_PREVIOUS_CONTROLS%22%3A%22Volver%20a%20los%20controles%20Siguiente%20y%20Anterior%22%2C%22Refine%20results%22%3A%22Refinar%20resultados%22%2C%22INCLUDED_WITH_SUBSCRIPTION%22%3A%22con%22%2C%22Less%22%3A%22Menos%22%2C%22SLIDESHOW%22%3A%22Presentaci%C3%B3n%22%2C%22CLOSE_DIALOG_WINDOW%22%3A%22Cerrar%20ventana%20de%20di%C3%A1logo%22%2C%22READ_MORE%22%3A%22M%C3%A1s%20informaci%C3%B3n%22%2C%22SHOWING_START_HYPHEN_END_OF_TOTAL_ITEMS%22%3A%22Mostrando%20%7B0%7D%20-%20%7B1%7D%20de%20%7B2%7D%20art%C3%ADculos%22%2C%22SEE_ALL%22%3A%22Mostrar%20todo%22%2C%22PAGINATION_FOR_SEARCH_RESULTS_TOTAL_PAGES%22%3A%22Paginaci%C3%B3n%20de%20resultados%20de%20la%20b%C3%BAsqueda%3A%20%7B0%7D%20p%C3%A1ginas%22%2C%22Pagination%20for%20search%20results%3A%20%7BnumPages%7D%20pages%22%3A%22Paginaci%C3%B3n%20de%20resultados%20de%20la%20b%C3%BAsqueda%3A%20%7BnumPages%7D%20p%C3%A1ginas%22%2C%22NEW_RELEASE%22%3A%22Nuevo%22%2C%22Pagination%20for%20search%20results%3A%20%7BnumPages%7D%20page%22%3A%22Paginaci%C3%B3n%20de%20resultados%20de%20la%20b%C3%BAsqueda%3A%20%7BnumPages%7D%20p%C3%A1gina%22%2C%22NOW%22%3A%22ahora%22%2C%22Next%22%3A%22Siguiente%22%2C%22Clear%20all%22%3A%22Borrar%20todo%22%2C%22%7BfilterSelections%7D%20filter%20selected%22%3A%22%7BfilterSelections%7D%20filtro%20seleccionado%22%2C%22NEXT_PAGE%22%3A%22P%C3%A1gina%20siguiente%22%2C%22ORIGINALLY%22%3A%22Originalmente%22%2C%22List%20Microsoft.com%22%3A%22Lista%20Microsoft.com%22%2C%22CURRENT_PAGE_SHOWING_START_HYPHEN_END_OF_TOTAL_ITEMS%22%3A%22P%C3%A1gina%20actual%20%7B0%7D%2C%20Mostrando%20%7B1%7D%20-%20%7B2%7D%20de%20%7B3%7D%20resultados%22%2C%22READ_MORE_ON%22%3A%22M%C3%A1s%20informaci%C3%B3n%20sobre%20%7B0%7D%22%2C%22CAROUSEL_BACK%22%3A%22Retroceder%20en%20el%20carrusel%22%2C%22SHOP_NOW%22%3A%22Comprar%20ahora%22%2C%22PREVIOUS_PAGE%22%3A%22P%C3%A1gina%20anterior%22%2C%22PREVIOUS%22%3A%22Anterior%22%2C%22MORE_PRODUCTS_COMING_SOON%22%3A%22Pr%C3%B3ximamente%20habr%C3%A1%20m%C3%A1s%20productos%22%2C%22PREORDER%22%3A%22Reservar%22%2C%22More%22%3A%22M%C3%A1s%22%2C%22NEXT_SLIDE%22%3A%22Diapositiva%20siguiente%22%2C%22remove%20filter%20%7BfilterName%7D%22%3A%22quitar%20filtro%20%7BfilterName%7D%22%2C%22NEXT%22%3A%22Siguiente%22%2C%22META_DESCRIPTION_DEFAULT%22%3A%22%7BlistDisplayName%7D.%20Consigue%20estos%20%7BproductCount%7D%20art%C3%ADculos%20y%20explora%20Microsoft%20Store%7Bcountry%7D%20para%20descubrir%20aplicaciones%2C%20juegos%2C%20port%C3%A1tiles%2C%20PC%20y%20otros%20dispositivos%20incre%C3%ADbles.%22%2C%22SKIP%22%3A%22Omitir%22%2C%22READ_MORE_ABOUT%22%3A%22M%C3%A1s%20informaci%C3%B3n%20sobre%22%2C%22CAROUSEL_FORWARD%22%3A%22Avanzar%20en%20el%20carrusel%22%2C%22Collapse%22%3A%22Contraer%22%2C%22PAGE_SHOWING_START_HYPHEN_END_OF_TOTAL_ITEMS%22%3A%22P%C3%A1gina%20%7B0%7D%2C%20Mostrando%20%7B1%7D%20-%20%7B2%7D%20de%20%7B3%7D%20resultados%22%2C%22END_OF%22%3A%22Fin%20de%22%2C%22READ_MORE_ON_PRODUCT_DESCRIPTION%22%3A%22M%C3%A1s%20informaci%C3%B3n%20sobre%20la%20descripci%C3%B3n%20del%20producto%22%2C%22Skip%20refine%20results%20section%22%3A%22Omitir%20la%20secci%C3%B3n%20de%20refinar%20resultados%22%2C%22NO_RESULTS_FOUND%22%3A%22No%20se%20encontraron%20resultados%22%2C%22STARTING_FROM%22%3A%22desde%22%2C%22OUT_OF_STOCK%22%3A%22Agotado%22%2C%22Previous%22%3A%22Anterior%22%2C%22BACK_END_ERROR%22%3A%22Hubo%20un%20problema%20con%20la%20consulta%20de%20datos%20Tarjetas%3B%20intenta%20volver%20a%20cargar%20la%20p%C3%A1gina%20o%20comprueba%20el%20enlace.%22%2C%22%7BfilterSelections%7D%20filters%20selected%22%3A%22%7BfilterSelections%7D%20filtros%20seleccionados%22%2C%22SELECT_PRODUCT_FOR_MORE%22%3A%22Para%20obtener%20m%C3%A1s%20informaci%C3%B3n%2C%20selecciona%20%7Btitle%7D.%22%7D%2C%22newTab%22%3Afalse%2C%22platform%22%3A%22xbox%22%2C%22productType%22%3A%22devices%22%2C%22seoString%22%3A%22%7B%5C%22%40context%5C%22%3A%5C%22http%3A%2F%2Fschema.org%5C%22%2C%5C%22%40type%5C%22%3A%5C%22itemList%5C%22%2C%5C%22numberOfItems%5C%22%3A%5C%2210%5C%22%2C%5C%22name%5C%22%3A%5C%22Mandos%20Xbox%5C%22%2C%5C%22itemListElement%5C%22%3A%5B%7B%5C%22%40type%5C%22%3A%5C%22ListItem%5C%22%2C%5C%22name%5C%22%3A%5C%22Mando%20Inal%C3%A1mbrico%20Xbox%20Elite%20Series%202%5C%22%2C%5C%22url%5C%22%3A%5C%22https%3A%2F%2Fwww.microsoft.com%2Fes-es%2Fd%2Fmando-inalambrico-xbox-elite-series-2%2F8rsn7j6375gg%5C%22%2C%5C%22position%5C%22%3A1%7D%2C%7B%5C%22%40type%5C%22%3A%5C%22ListItem%5C%22%2C%5C%22name%5C%22%3A%5C%22Mando%20inal%C3%A1mbrico%20Xbox%20Elite%20Series%202%20%E2%80%93%20Core%5C%22%2C%5C%22url%5C%22%3A%5C%22https%3A%2F%2Fwww.microsoft.com%2Fes-es%2Fd%2Fmando-inalambrico-xbox-elite-series-2-core%2F8v7m3k0bsh52%5C%22%2C%5C%22position%5C%22%3A2%7D%2C%7B%5C%22%40type%5C%22%3A%5C%22ListItem%5C%22%2C%5C%22name%5C%22%3A%5C%22Mando%20Inal%C3%A1mbrico%20Xbox%5C%22%2C%5C%22url%5C%22%3A%5C%22https%3A%2F%2Fwww.microsoft.com%2Fes-es%2Fd%2Fmando-inalambrico-xbox%2F8xn59crbsqgz%5C%22%2C%5C%22position%5C%22%3A3%7D%2C%7B%5C%22%40type%5C%22%3A%5C%22ListItem%5C%22%2C%5C%22name%5C%22%3A%5C%22Mando%20inal%C3%A1mbrico%20Xbox%20%E2%80%93%20Edici%C3%B3n%20especial%20Gold%20Shadow%5C%22%2C%5C%22url%5C%22%3A%5C%22https%3A%2F%2Fwww.microsoft.com%2Fes-es%2Fd%2Fmando-inalambrico-xbox-edicion-especial-gold-shadow%2F8sdtt2lh2t1h%5C%22%2C%5C%22position%5C%22%3A4%7D%2C%7B%5C%22%40type%5C%22%3A%5C%22ListItem%5C%22%2C%5C%22name%5C%22%3A%5C%22Mando%20inal%C3%A1mbrico%20Xbox%3A%20Stormcloud%20Vapor%20Special%20Edition%5C%22%2C%5C%22url%5C%22%3A%5C%22https%3A%2F%2Fwww.microsoft.com%2Fes-es%2Fd%2Fmando-inalambrico-xbox-stormcloud-vapor-special-edition%2F8xhnlbp36g5f%5C%22%2C%5C%22position%5C%22%3A5%7D%2C%7B%5C%22%40type%5C%22%3A%5C%22ListItem%5C%22%2C%5C%22name%5C%22%3A%5C%22Mando%20inal%C3%A1mbrico%20Xbox%20%E2%80%93%20Sunkissed%20Vibes%20OPI%20Edici%C3%B3n%20Especial%5C%22%2C%5C%22url%5C%22%3A%5C%22https%3A%2F%2Fwww.microsoft.com%2Fes-es%2Fd%2Fmando-inalambrico-xbox-sunkissed-vibes-opi-edicion-especial%2F928w7wcrttkm%5C%22%2C%5C%22position%5C%22%3A6%7D%2C%7B%5C%22%40type%5C%22%3A%5C%22ListItem%5C%22%2C%5C%22name%5C%22%3A%5C%22Mando%20inal%C3%A1mbrico%20Xbox%20%E2%80%93%20Edici%C3%B3n%20Especial%20Remix%5C%22%2C%5C%22url%5C%22%3A%5C%22https%3A%2F%2Fwww.microsoft.com%2Fes-es%2Fd%2Fmando-inalambrico-xbox-edicion-especial-remix%2F8zfbkd2fjmkn%5C%22%2C%5C%22position%5C%22%3A7%7D%2C%7B%5C%22%40type%5C%22%3A%5C%22ListItem%5C%22%2C%5C%22name%5C%22%3A%5C%22Mando%20inal%C3%A1mbrico%20Xbox%20%E2%80%93%20Stellar%20Shift%20Special%20Edition%5C%22%2C%5C%22url%5C%22%3A%5C%22https%3A%2F%2Fwww.microsoft.com%2Fes-es%2Fd%2Fmando-inalambrico-xbox-stellar-shift-special-edition%2F94fbjc7h0h6h%5C%22%2C%5C%22position%5C%22%3A8%7D%2C%7B%5C%22%40type%5C%22%3A%5C%22ListItem%5C%22%2C%5C%22name%5C%22%3A%5C%22Mando%20inal%C3%A1mbrico%20Xbox%20%E2%80%93%20Mineral%20Camo%20Special%20Edition%5C%22%2C%5C%22url%5C%22%3A%5C%22https%3A%2F%2Fwww.microsoft.com%2Fes-es%2Fd%2Fmando-inalambrico-xbox-mineral-camo-special-edition%2F93jtnp21rvxn%5C%22%2C%5C%22position%5C%22%3A9%7D%2C%7B%5C%22%40type%5C%22%3A%5C%22ListItem%5C%22%2C%5C%22name%5C%22%3A%5C%22Mando%20inal%C3%A1mbrico%20Xbox%20%2B%20Cable%20USB-C%C2%AE%20%5C%22%2C%5C%22url%5C%22%3A%5C%22https%3A%2F%2Fwww.microsoft.com%2Fes-es%2Fd%2Fmando-inalambrico-xbox-cable-usb-c%2F8t8kcnb1xs3d%5C%22%2C%5C%22position%5C%22%3A10%7D%5D%7D%22%2C%22showCtaLink%22%3Afalse%2C%22lazyLoadImages%22%3Atrue%2C%22isStacked%22%3Afalse%2C%22totalProducts%22%3A14%2C%22offset%22%3A0%2C%22compName%22%3A%22Product%20Placement%20Carousel%3A%20Devices%22%2C%22uuid%22%3A%22d177adf000b34058a6894307051493f4%22%2C%22addToCartHash%22%3A%7B%22cV%22%3A%22CASMicrosoftCV1421a8cb.1.1.0%22%2C%22muid%22%3A%228F7EA1ED4978464F90A4E33C2EE687BC%22%2C%22atcHash%22%3A%22A2DAC1F109EF64BAE0CE51BCF479020634065C6D7B8C61C5F11B99502B936AD4%22%7D%2C%22exposeAddToCartHash%22%3Atrue%2C%22pageTheme%22%3A%22microsoft.mwf.main-light.new%22%7D"><div data-reactroot=""><script type="application/ld+json">{"@context":"http://schema.org","@type":"itemList","numberOfItems":"10","name":"Mandos Xbox","itemListElement":[{"@type":"ListItem","name":"Mando Inalámbrico Xbox Elite Series 2","url":"https://www.microsoft.com/es-es/d/mando-inalambrico-xbox-elite-series-2/8rsn7j6375gg","position":1},{"@type":"ListItem","name":"Mando inalámbrico Xbox Elite Series 2 – Core","url":"https://www.microsoft.com/es-es/d/mando-inalambrico-xbox-elite-series-2-core/8v7m3k0bsh52","position":2},{"@type":"ListItem","name":"Mando Inalámbrico Xbox","url":"https://www.microsoft.com/es-es/d/mando-inalambrico-xbox/8xn59crbsqgz","position":3},{"@type":"ListItem","name":"Mando inalámbrico Xbox – Edición especial Gold Shadow","url":"https://www.microsoft.com/es-es/d/mando-inalambrico-xbox-edicion-especial-gold-shadow/8sdtt2lh2t1h","position":4},{"@type":"ListItem","name":"Mando inalámbrico Xbox: Stormcloud Vapor Special Edition","url":"https://www.microsoft.com/es-es/d/mando-inalambrico-xbox-stormcloud-vapor-special-edition/8xhnlbp36g5f","position":5},{"@type":"ListItem","name":"Mando inalámbrico Xbox – Sunkissed Vibes OPI Edición Especial","url":"https://www.microsoft.com/es-es/d/mando-inalambrico-xbox-sunkissed-vibes-opi-edicion-especial/928w7wcrttkm","position":6},{"@type":"ListItem","name":"Mando inalámbrico Xbox – Edición Especial Remix","url":"https://www.microsoft.com/es-es/d/mando-inalambrico-xbox-edicion-especial-remix/8zfbkd2fjmkn","position":7},{"@type":"ListItem","name":"Mando inalámbrico Xbox – Stellar Shift Special Edition","url":"https://www.microsoft.com/es-es/d/mando-inalambrico-xbox-stellar-shift-special-edition/94fbjc7h0h6h","position":8},{"@type":"ListItem","name":"Mando inalámbrico Xbox – Mineral Camo Special Edition","url":"https://www.microsoft.com/es-es/d/mando-inalambrico-xbox-mineral-camo-special-edition/93jtnp21rvxn","position":9},{"@type":"ListItem","name":"Mando inalámbrico Xbox + Cable USB-C® ","url":"https://www.microsoft.com/es-es/d/mando-inalambrico-xbox-cable-usb-c/8t8kcnb1xs3d","position":10}]}</script><div class="row"><div class="col-12 px-0 px-md-g"><section aria-label="Mandos Xbox" aria-roledescription="Presentación"><div class="px-g px-md-0"><div class="row"><div class="col-12 col-md-8"><h2 class="mb-2 h2">Mandos Xbox</h2></div><div class="col-12 d-none"><div id="status-container-d177adf000b34058a6894307051493f4" class="float-left mr-3"><span id="status-msg-d177adf000b34058a6894307051493f4" aria-live="polite">Mostrando de %{start} a %{end} de %{total} elementos</span></div><a href="https://www.microsoft.com/es-es/store/collections/xboxcontrollers" class="cta float-left product-cards-see-all-link" aria-label="Mostrar todo Mandos Xbox" data-bi-cN="Mostrar todo" data-bi-ecN="See all" data-bi-hN="Mandos Xbox" data-bi-cT="Link" data-bi-pA="Body" data-bi-compNm="Product Placement Carousel: Devices" data-bi-bhvr="0">Mostrar todo<span class="glyph" aria-hidden="true"></span></a></div></div></div><div id="product-cards-carousel-d177adf000b34058a6894307051493f4" class="carousel slide carousel-product-card" data-mount="" data-loop="true" data-status="status-container-d177adf000b34058a6894307051493f4"><a href="#skip-d177adf000b34058a6894307051493f4" class="btn btn-link sr-only-focusable w-100 position-absolute">Omitir Mandos Xbox</a><div><div class="carousel-controls"><button id="controls-d177adf000b34058a6894307051493f4" type="button" title="Anterior" data-bi-cN="Retroceder en el carrusel" data-bi-ecN="Carousel back" data-bi-hN="Mandos Xbox" data-bi-bhvr="1" data-bi-cT="Button" data-bi-pA="Body" data-bi-compNm="Product Placement Carousel: Devices" class="carousel-control-prev my-4 my-md-5" data-slide="prev"><span class="sr-only">Diapositiva anterior</span></button><button id="controls-next-d177adf000b34058a6894307051493f4" type="button" title="Siguiente" data-bi-cN="Avanzar en el carrusel" data-bi-ecN="Carousel forward" data-bi-hN="Mandos Xbox" data-bi-bhvr="3" data-bi-cT="Button" data-bi-pA="Body" data-bi-compNm="Product Placement Carousel: Devices" class="carousel-control-next my-4 my-md-5" data-slide="next"><span class="sr-only">Diapositiva siguiente</span></button></div><div class="carousel-inner"><section class="carousel-item active" tabindex="0" aria-labelledby="status-msg-d177adf000b34058a6894307051493f4" aria-roledescription="slide"><div class="container"><div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 py-5"><div class="col slide-item px-2"><div id="card-0-d177adf000b34058a6894307051493f4" class="card h-100 material-card depth-4 depth-8-hover pb-4" data-bi-cN="Mando Inalámbrico Xbox Elite Series 2" data-bi-hN="Mandos Xbox" data-bi-bhvr="0" data-bi-cT="Product Card" data-bi-pid="8rsn7j6375gg" data-bi-prdname="Mando Inalámbrico Xbox Elite Series 2" data-bi-carpos="0" data-bi-pa="Body" data-bi-compnm="Product Placement Carousel: Devices" style="cursor:pointer"><div class="img-flex-auto"><picture><source srcSet="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-srcSet="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE2XP73?ver=7371&amp;w=270&amp;h=222&amp;q=90&amp;m=6&amp;p=48&amp;f=jpg&amp;o=f&amp;aim=true" media="(min-width: 540px)"/><source srcSet="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-srcSet="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE2XP73?ver=7371&amp;w=256&amp;h=210&amp;q=90&amp;m=6&amp;p=48&amp;f=jpg&amp;o=f&amp;aim=true" media="(min-width: 860px)"/><source srcSet="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-srcSet="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE2XP73?ver=7371&amp;w=242&amp;h=199&amp;q=90&amp;m=6&amp;p=48&amp;f=jpg&amp;o=f&amp;aim=true" media="(min-width: 1084px)"/><source srcSet="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-srcSet="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE2XP73?ver=7371&amp;w=310&amp;h=254&amp;q=90&amp;m=6&amp;p=48&amp;f=jpg&amp;o=f&amp;aim=true" media="(min-width: 1400px)"/><img src="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE2XP73?ver=7371&amp;w=256&amp;h=207&amp;q=90&amp;m=6&amp;p=48&amp;f=jpg&amp;o=f&amp;aim=true" class="card-img lazy lazyload blur-up lazypreload" data-sizes="auto" alt=""/></picture></div><div class="card-body px-3 pt-3"><h3 class="base mb-2 h6"><a href="https://www.microsoft.com/es-es/d/mando-inalambrico-xbox-elite-series-2/8rsn7j6375gg" aria-label="Mando Inalámbrico Xbox Elite Series 2" data-bi-mto="true">Mando Inalámbrico Xbox Elite Series 2</a></h3><p class="sr-only">179,99 €</p><p aria-hidden="true"> <span class="font-weight-semibold">179,99 €</span></p><div class="mb-2"><p><span style="display:block">El Mando Inalámbrico Xbox Elite Series 2 ofrece más de 30 nuevas formas de jugar como...</span><span class="sr-only">Para obtener más información, selecciona Mando Inalámbrico Xbox Elite Series 2.</span></p></div></div></div></div><div class="col slide-item px-2"><div id="card-1-d177adf000b34058a6894307051493f4" class="card h-100 material-card depth-4 depth-8-hover pb-4" data-bi-cN="Mando inalámbrico Xbox Elite Series 2 – Core" data-bi-hN="Mandos Xbox" data-bi-bhvr="0" data-bi-cT="Product Card" data-bi-pid="8v7m3k0bsh52" data-bi-prdname="Mando inalámbrico Xbox Elite Series 2 – Core" data-bi-carpos="1" data-bi-pa="Body" data-bi-compnm="Product Placement Carousel: Devices" style="cursor:pointer"><div class="img-flex-auto"><picture><source srcSet="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-srcSet="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWXgRg?ver=79f2&amp;w=270&amp;h=222&amp;q=90&amp;m=6&amp;p=48&amp;f=jpg&amp;o=f&amp;aim=true" media="(min-width: 540px)"/><source srcSet="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-srcSet="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWXgRg?ver=79f2&amp;w=256&amp;h=210&amp;q=90&amp;m=6&amp;p=48&amp;f=jpg&amp;o=f&amp;aim=true" media="(min-width: 860px)"/><source srcSet="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-srcSet="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWXgRg?ver=79f2&amp;w=242&amp;h=199&amp;q=90&amp;m=6&amp;p=48&amp;f=jpg&amp;o=f&amp;aim=true" media="(min-width: 1084px)"/><source srcSet="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-srcSet="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWXgRg?ver=79f2&amp;w=310&amp;h=254&amp;q=90&amp;m=6&amp;p=48&amp;f=jpg&amp;o=f&amp;aim=true" media="(min-width: 1400px)"/><img src="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWXgRg?ver=79f2&amp;w=256&amp;h=207&amp;q=90&amp;m=6&amp;p=48&amp;f=jpg&amp;o=f&amp;aim=true" class="card-img lazy lazyload blur-up lazypreload" data-sizes="auto" alt=""/></picture></div><div class="card-header pt-3 px-3"><span class="badge bg-yellow mb-2 product-cards-savings-badge">Ahorra 10,99 € del PVPR</span></div><div class="card-body px-3"><h3 class="base mb-2 h6"><a href="https://www.microsoft.com/es-es/d/mando-inalambrico-xbox-elite-series-2-core/8v7m3k0bsh52" aria-label="Mando inalámbrico Xbox Elite Series 2 – Core" data-bi-mto="true">Mando inalámbrico Xbox Elite Series 2 – Core</a></h3><p class="sr-only">Desde  129,99 €</p><p aria-hidden="true">Desde <span class="font-weight-semibold">129,99 €</span></p><div class="mb-2"><p><span style="display:block">Disfruta del Mando inalámbrico Xbox Elite Series 2 – Core, que cuenta con palancas de...</span><span class="sr-only">Para obtener más información, selecciona Mando inalámbrico Xbox Elite Series 2 – Core.</span></p></div></div></div></div><div class="col slide-item px-2"><div id="card-2-d177adf000b34058a6894307051493f4" class="card h-100 material-card depth-4 depth-8-hover pb-4" data-bi-cN="Mando Inalámbrico Xbox" data-bi-hN="Mandos Xbox" data-bi-bhvr="0" data-bi-cT="Product Card" data-bi-pid="8xn59crbsqgz" data-bi-prdname="Mando Inalámbrico Xbox" data-bi-carpos="2" data-bi-pa="Body" data-bi-compnm="Product Placement Carousel: Devices" style="cursor:pointer"><div class="img-flex-auto"><picture><source srcSet="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-srcSet="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW198RH?ver=7110&amp;w=270&amp;h=222&amp;q=90&amp;m=6&amp;p=48&amp;f=jpg&amp;o=f&amp;aim=true" media="(min-width: 540px)"/><source srcSet="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-srcSet="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW198RH?ver=7110&amp;w=256&amp;h=210&amp;q=90&amp;m=6&amp;p=48&amp;f=jpg&amp;o=f&amp;aim=true" media="(min-width: 860px)"/><source srcSet="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-srcSet="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW198RH?ver=7110&amp;w=242&amp;h=199&amp;q=90&amp;m=6&amp;p=48&amp;f=jpg&amp;o=f&amp;aim=true" media="(min-width: 1084px)"/><source srcSet="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-srcSet="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW198RH?ver=7110&amp;w=310&amp;h=254&amp;q=90&amp;m=6&amp;p=48&amp;f=jpg&amp;o=f&amp;aim=true" media="(min-width: 1400px)"/><img src="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW198RH?ver=7110&amp;w=256&amp;h=207&amp;q=90&amp;m=6&amp;p=48&amp;f=jpg&amp;o=f&amp;aim=true" class="card-img lazy lazyload blur-up lazypreload" data-sizes="auto" alt=""/></picture></div><div class="card-header pt-3 px-3"><span class="badge bg-yellow mb-2 product-cards-savings-badge">Ahorra 9,50 € del PVPR</span></div><div class="card-body px-3"><h3 class="base mb-2 h6"><a href="https://www.microsoft.com/es-es/d/mando-inalambrico-xbox/8xn59crbsqgz" aria-label="Mando Inalámbrico Xbox" data-bi-mto="true">Mando Inalámbrico Xbox</a></h3><p class="sr-only">Desde  59,99 €</p><p aria-hidden="true">Desde <span class="font-weight-semibold">59,99 €</span></p><div class="mb-2"><p><span style="display:block">Disfruta del Mando inalámbrico Xbox, diseñado para una mayor comodidad durante el...</span><span class="sr-only">Para obtener más información, selecciona Mando Inalámbrico Xbox.</span></p></div></div></div></div><div class="col slide-item px-2"><div id="card-3-d177adf000b34058a6894307051493f4" class="card h-100 material-card depth-4 depth-8-hover pb-4" data-bi-cN="Mando inalámbrico Xbox – Edición especial Gold Shadow" data-bi-hN="Mandos Xbox" data-bi-bhvr="0" data-bi-cT="Product Card" data-bi-pid="8sdtt2lh2t1h" data-bi-prdname="Mando inalámbrico Xbox – Edición especial Gold Shadow" data-bi-carpos="3" data-bi-pa="Body" data-bi-compnm="Product Placement Carousel: Devices" style="cursor:pointer"><div class="img-flex-auto"><picture><source srcSet="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-srcSet="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW1aGdI?ver=1697&amp;w=270&amp;h=222&amp;q=90&amp;m=6&amp;p=48&amp;f=jpg&amp;o=f&amp;aim=true" media="(min-width: 540px)"/><source srcSet="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-srcSet="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW1aGdI?ver=1697&amp;w=256&amp;h=210&amp;q=90&amp;m=6&amp;p=48&amp;f=jpg&amp;o=f&amp;aim=true" media="(min-width: 860px)"/><source srcSet="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-srcSet="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW1aGdI?ver=1697&amp;w=242&amp;h=199&amp;q=90&amp;m=6&amp;p=48&amp;f=jpg&amp;o=f&amp;aim=true" media="(min-width: 1084px)"/><source srcSet="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-srcSet="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW1aGdI?ver=1697&amp;w=310&amp;h=254&amp;q=90&amp;m=6&amp;p=48&amp;f=jpg&amp;o=f&amp;aim=true" media="(min-width: 1400px)"/><img src="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW1aGdI?ver=1697&amp;w=256&amp;h=207&amp;q=90&amp;m=6&amp;p=48&amp;f=jpg&amp;o=f&amp;aim=true" class="card-img lazy lazyload blur-up lazypreload" data-sizes="auto" alt=""/></picture></div><div class="card-body px-3 pt-3"><h3 class="base mb-2 h6"><a href="https://www.microsoft.com/es-es/d/mando-inalambrico-xbox-edicion-especial-gold-shadow/8sdtt2lh2t1h" aria-label="Mando inalámbrico Xbox – Edición especial Gold Shadow" data-bi-mto="true">Mando inalámbrico Xbox – Edición especial Gold Shadow</a></h3><p class="sr-only">69,99 €</p><p aria-hidden="true"> <span class="font-weight-semibold">69,99 €</span></p><div class="mb-2"><p><span style="display:block">Disfruta del Mando inalámbrico Xbox: Edición Especial Gold Shadow, que cuenta con un...</span><span class="sr-only">Para obtener más información, selecciona Mando inalámbrico Xbox – Edición especial Gold Shadow.</span></p></div></div></div></div><div class="col slide-item px-2"><div id="card-4-d177adf000b34058a6894307051493f4" class="card h-100 material-card depth-4 depth-8-hover pb-4" data-bi-cN="Mando inalámbrico Xbox: Stormcloud Vapor Special Edition" data-bi-hN="Mandos Xbox" data-bi-bhvr="0" data-bi-cT="Product Card" data-bi-pid="8xhnlbp36g5f" data-bi-prdname="Mando inalámbrico Xbox: Stormcloud Vapor Special Edition" data-bi-carpos="4" data-bi-pa="Body" data-bi-compnm="Product Placement Carousel: Devices" style="cursor:pointer"><div class="img-flex-auto"><picture><source srcSet="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-srcSet="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16JNc?ver=a961&amp;w=270&amp;h=222&amp;q=90&amp;m=6&amp;p=48&amp;f=jpg&amp;o=f&amp;aim=true" media="(min-width: 540px)"/><source srcSet="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-srcSet="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16JNc?ver=a961&amp;w=256&amp;h=210&amp;q=90&amp;m=6&amp;p=48&amp;f=jpg&amp;o=f&amp;aim=true" media="(min-width: 860px)"/><source srcSet="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-srcSet="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16JNc?ver=a961&amp;w=242&amp;h=199&amp;q=90&amp;m=6&amp;p=48&amp;f=jpg&amp;o=f&amp;aim=true" media="(min-width: 1084px)"/><source srcSet="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-srcSet="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16JNc?ver=a961&amp;w=310&amp;h=254&amp;q=90&amp;m=6&amp;p=48&amp;f=jpg&amp;o=f&amp;aim=true" media="(min-width: 1400px)"/><img src="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16JNc?ver=a961&amp;w=256&amp;h=207&amp;q=90&amp;m=6&amp;p=48&amp;f=jpg&amp;o=f&amp;aim=true" class="card-img lazy lazyload blur-up lazypreload" data-sizes="auto" alt=""/></picture></div><div class="card-body px-3 pt-3"><h3 class="base mb-2 h6"><a href="https://www.microsoft.com/es-es/d/mando-inalambrico-xbox-stormcloud-vapor-special-edition/8xhnlbp36g5f" aria-label="Mando inalámbrico Xbox: Stormcloud Vapor Special Edition" data-bi-mto="true">Mando inalámbrico Xbox: Stormcloud Vapor Special Edition</a></h3><p class="sr-only">69,99 €</p><p aria-hidden="true"> <span class="font-weight-semibold">69,99 €</span></p><div class="mb-2"><p><span style="display:block">Disfruta del Mando inalámbrico Xbox – Stormcloud Vapor Edición Especial, que cuenta...</span><span class="sr-only">Para obtener más información, selecciona Mando inalámbrico Xbox: Stormcloud Vapor Special Edition.</span></p></div></div></div></div><div class="col slide-item px-2"><div id="card-5-d177adf000b34058a6894307051493f4" class="card h-100 material-card depth-4 depth-8-hover pb-4" data-bi-cN="Mando inalámbrico Xbox – Sunkissed Vibes OPI Edición Especial" data-bi-hN="Mandos Xbox" data-bi-bhvr="0" data-bi-cT="Product Card" data-bi-pid="928w7wcrttkm" data-bi-prdname="Mando inalámbrico Xbox – Sunkissed Vibes OPI Edición Especial" data-bi-carpos="5" data-bi-pa="Body" data-bi-compnm="Product Placement Carousel: Devices" style="cursor:pointer"><div class="img-flex-auto"><picture><source srcSet="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-srcSet="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW10vxe?ver=98e7&amp;w=270&amp;h=222&amp;q=90&amp;m=6&amp;p=48&amp;f=jpg&amp;o=f&amp;aim=true" media="(min-width: 540px)"/><source srcSet="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-srcSet="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW10vxe?ver=98e7&amp;w=256&amp;h=210&amp;q=90&amp;m=6&amp;p=48&amp;f=jpg&amp;o=f&amp;aim=true" media="(min-width: 860px)"/><source srcSet="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-srcSet="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW10vxe?ver=98e7&amp;w=242&amp;h=199&amp;q=90&amp;m=6&amp;p=48&amp;f=jpg&amp;o=f&amp;aim=true" media="(min-width: 1084px)"/><source srcSet="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-srcSet="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW10vxe?ver=98e7&amp;w=310&amp;h=254&amp;q=90&amp;m=6&amp;p=48&amp;f=jpg&amp;o=f&amp;aim=true" media="(min-width: 1400px)"/><img src="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW10vxe?ver=98e7&amp;w=256&amp;h=207&amp;q=90&amp;m=6&amp;p=48&amp;f=jpg&amp;o=f&amp;aim=true" class="card-img lazy lazyload blur-up lazypreload" data-sizes="auto" alt=""/></picture></div><div class="card-body px-3 pt-3"><h3 class="base mb-2 h6"><a href="https://www.microsoft.com/es-es/d/mando-inalambrico-xbox-sunkissed-vibes-opi-edicion-especial/928w7wcrttkm" aria-label="Mando inalámbrico Xbox – Sunkissed Vibes OPI Edición Especial" data-bi-mto="true">Mando inalámbrico Xbox – Sunkissed Vibes OPI Edición Espe...</a></h3><p class="sr-only">69,99 €</p><p aria-hidden="true"> <span class="font-weight-semibold">69,99 €</span></p><div class="mb-2"><p><span style="display:block">Mete más presión con el Mando inalámbrico Xbox – Sunkissed Vibes OPI Edición Especial...</span><span class="sr-only">Para obtener más información, selecciona Mando inalámbrico Xbox – Sunkissed Vibes OPI Edición Especial.</span></p></div></div></div></div><div class="col slide-item px-2"><div id="card-6-d177adf000b34058a6894307051493f4" class="card h-100 material-card depth-4 depth-8-hover pb-4" data-bi-cN="Mando inalámbrico Xbox – Edición Especial Remix" data-bi-hN="Mandos Xbox" data-bi-bhvr="0" data-bi-cT="Product Card" data-bi-pid="8zfbkd2fjmkn" data-bi-prdname="Mando inalámbrico Xbox – Edición Especial Remix" data-bi-carpos="6" data-bi-pa="Body" data-bi-compnm="Product Placement Carousel: Devices" style="cursor:pointer"><div class="img-flex-auto"><picture><source srcSet="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-srcSet="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWYNC8?ver=56c2&amp;w=270&amp;h=222&amp;q=90&amp;m=6&amp;p=48&amp;f=jpg&amp;o=f&amp;aim=true" media="(min-width: 540px)"/><source srcSet="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-srcSet="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWYNC8?ver=56c2&amp;w=256&amp;h=210&amp;q=90&amp;m=6&amp;p=48&amp;f=jpg&amp;o=f&amp;aim=true" media="(min-width: 860px)"/><source srcSet="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-srcSet="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWYNC8?ver=56c2&amp;w=242&amp;h=199&amp;q=90&amp;m=6&amp;p=48&amp;f=jpg&amp;o=f&amp;aim=true" media="(min-width: 1084px)"/><source srcSet="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-srcSet="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWYNC8?ver=56c2&amp;w=310&amp;h=254&amp;q=90&amp;m=6&amp;p=48&amp;f=jpg&amp;o=f&amp;aim=true" media="(min-width: 1400px)"/><img src="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWYNC8?ver=56c2&amp;w=256&amp;h=207&amp;q=90&amp;m=6&amp;p=48&amp;f=jpg&amp;o=f&amp;aim=true" class="card-img lazy lazyload blur-up lazypreload" data-sizes="auto" alt=""/></picture></div><div class="card-header pt-3 px-3"><span class="badge bg-yellow mb-2 product-cards-savings-badge">Ahorra 12,50 € del PVPR</span></div><div class="card-body px-3"><h3 class="base mb-2 h6"><a href="https://www.microsoft.com/es-es/d/mando-inalambrico-xbox-edicion-especial-remix/8zfbkd2fjmkn" aria-label="Mando inalámbrico Xbox – Edición Especial Remix" data-bi-mto="true">Mando inalámbrico Xbox – Edición Especial Remix</a></h3><p class="sr-only">Originalmente 84,99 € ahora 72,49 €</p><p aria-hidden="true"> <span class="text-line-through text-muted">84,99 €</span> <span class="font-weight-semibold">72,49 €</span></p><div class="mb-2"><p><span style="display:block">Disfruta del Mando inalámbrico Xbox – Edición Especial Remix, que está hecho de...</span><span class="sr-only">Para obtener más información, selecciona Mando inalámbrico Xbox – Edición Especial Remix.</span></p></div></div></div></div><div class="col slide-item px-2"><div id="card-7-d177adf000b34058a6894307051493f4" class="card h-100 material-card depth-4 depth-8-hover pb-4" data-bi-cN="Mando inalámbrico Xbox – Stellar Shift Special Edition" data-bi-hN="Mandos Xbox" data-bi-bhvr="0" data-bi-cT="Product Card" data-bi-pid="94fbjc7h0h6h" data-bi-prdname="Mando inalámbrico Xbox – Stellar Shift Special Edition" data-bi-carpos="7" data-bi-pa="Body" data-bi-compnm="Product Placement Carousel: Devices" style="cursor:pointer"><div class="img-flex-auto"><picture><source srcSet="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-srcSet="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE5dP2W?ver=3ced&amp;w=270&amp;h=222&amp;q=90&amp;m=6&amp;p=48&amp;f=jpg&amp;o=f&amp;aim=true" media="(min-width: 540px)"/><source srcSet="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-srcSet="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE5dP2W?ver=3ced&amp;w=256&amp;h=210&amp;q=90&amp;m=6&amp;p=48&amp;f=jpg&amp;o=f&amp;aim=true" media="(min-width: 860px)"/><source srcSet="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-srcSet="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE5dP2W?ver=3ced&amp;w=242&amp;h=199&amp;q=90&amp;m=6&amp;p=48&amp;f=jpg&amp;o=f&amp;aim=true" media="(min-width: 1084px)"/><source srcSet="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-srcSet="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE5dP2W?ver=3ced&amp;w=310&amp;h=254&amp;q=90&amp;m=6&amp;p=48&amp;f=jpg&amp;o=f&amp;aim=true" media="(min-width: 1400px)"/><img src="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE5dP2W?ver=3ced&amp;w=256&amp;h=207&amp;q=90&amp;m=6&amp;p=48&amp;f=jpg&amp;o=f&amp;aim=true" class="card-img lazy lazyload blur-up lazypreload" data-sizes="auto" alt=""/></picture></div><div class="card-body px-3 pt-3"><h3 class="base mb-2 h6"><a href="https://www.microsoft.com/es-es/d/mando-inalambrico-xbox-stellar-shift-special-edition/94fbjc7h0h6h" aria-label="Mando inalámbrico Xbox – Stellar Shift Special Edition" data-bi-mto="true">Mando inalámbrico Xbox – Stellar Shift Special Edition</a></h3><p class="sr-only">69,99 €</p><p aria-hidden="true"> <span class="font-weight-semibold">69,99 €</span></p><div class="mb-2"><p><span style="display:block">Disfruta del Mando inalámbrico Xbox – Stellar Shift Special Edition, con cambio de...</span><span class="sr-only">Para obtener más información, selecciona Mando inalámbrico Xbox – Stellar Shift Special Edition.</span></p></div></div></div></div><div class="col slide-item px-2"><div id="card-8-d177adf000b34058a6894307051493f4" class="card h-100 material-card depth-4 depth-8-hover pb-4" data-bi-cN="Mando inalámbrico Xbox – Mineral Camo Special Edition" data-bi-hN="Mandos Xbox" data-bi-bhvr="0" data-bi-cT="Product Card" data-bi-pid="93jtnp21rvxn" data-bi-prdname="Mando inalámbrico Xbox – Mineral Camo Special Edition" data-bi-carpos="8" data-bi-pa="Body" data-bi-compnm="Product Placement Carousel: Devices" style="cursor:pointer"><div class="img-flex-auto"><picture><source srcSet="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-srcSet="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE54DVo?ver=b6b5&amp;w=270&amp;h=222&amp;q=90&amp;m=6&amp;p=48&amp;f=jpg&amp;o=f&amp;aim=true" media="(min-width: 540px)"/><source srcSet="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-srcSet="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE54DVo?ver=b6b5&amp;w=256&amp;h=210&amp;q=90&amp;m=6&amp;p=48&amp;f=jpg&amp;o=f&amp;aim=true" media="(min-width: 860px)"/><source srcSet="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-srcSet="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE54DVo?ver=b6b5&amp;w=242&amp;h=199&amp;q=90&amp;m=6&amp;p=48&amp;f=jpg&amp;o=f&amp;aim=true" media="(min-width: 1084px)"/><source srcSet="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-srcSet="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE54DVo?ver=b6b5&amp;w=310&amp;h=254&amp;q=90&amp;m=6&amp;p=48&amp;f=jpg&amp;o=f&amp;aim=true" media="(min-width: 1400px)"/><img src="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE54DVo?ver=b6b5&amp;w=256&amp;h=207&amp;q=90&amp;m=6&amp;p=48&amp;f=jpg&amp;o=f&amp;aim=true" class="card-img lazy lazyload blur-up lazypreload" data-sizes="auto" alt=""/></picture></div><div class="card-body px-3 pt-3"><h3 class="base mb-2 h6"><a href="https://www.microsoft.com/es-es/d/mando-inalambrico-xbox-mineral-camo-special-edition/93jtnp21rvxn" aria-label="Mando inalámbrico Xbox – Mineral Camo Special Edition" data-bi-mto="true">Mando inalámbrico Xbox – Mineral Camo Special Edition</a></h3><p class="sr-only">69,99 €</p><p aria-hidden="true"> <span class="font-weight-semibold">69,99 €</span></p><div class="mb-2"><p><span style="display:block">Disfruta del Mando inalámbrico Xbox – Mineral Camo Special Edition, que cuenta con un...</span><span class="sr-only">Para obtener más información, selecciona Mando inalámbrico Xbox – Mineral Camo Special Edition.</span></p></div></div></div></div><div class="col slide-item px-2"><div id="card-9-d177adf000b34058a6894307051493f4" class="card h-100 material-card depth-4 depth-8-hover pb-4" data-bi-cN="Mando inalámbrico Xbox + Cable USB-C® " data-bi-hN="Mandos Xbox" data-bi-bhvr="0" data-bi-cT="Product Card" data-bi-pid="8t8kcnb1xs3d" data-bi-prdname="Mando inalámbrico Xbox + Cable USB-C® " data-bi-carpos="9" data-bi-pa="Body" data-bi-compnm="Product Placement Carousel: Devices" style="cursor:pointer"><div class="img-flex-auto"><picture><source srcSet="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-srcSet="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4GOMY?ver=97e3&amp;w=270&amp;h=222&amp;q=90&amp;m=6&amp;p=48&amp;f=jpg&amp;o=f&amp;aim=true" media="(min-width: 540px)"/><source srcSet="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-srcSet="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4GOMY?ver=97e3&amp;w=256&amp;h=210&amp;q=90&amp;m=6&amp;p=48&amp;f=jpg&amp;o=f&amp;aim=true" media="(min-width: 860px)"/><source srcSet="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-srcSet="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4GOMY?ver=97e3&amp;w=242&amp;h=199&amp;q=90&amp;m=6&amp;p=48&amp;f=jpg&amp;o=f&amp;aim=true" media="(min-width: 1084px)"/><source srcSet="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-srcSet="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4GOMY?ver=97e3&amp;w=310&amp;h=254&amp;q=90&amp;m=6&amp;p=48&amp;f=jpg&amp;o=f&amp;aim=true" media="(min-width: 1400px)"/><img src="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4GOMY?ver=97e3&amp;w=256&amp;h=207&amp;q=90&amp;m=6&amp;p=48&amp;f=jpg&amp;o=f&amp;aim=true" class="card-img lazy lazyload blur-up lazypreload" data-sizes="auto" alt=""/></picture></div><div class="card-body px-3 pt-3"><h3 class="base mb-2 h6"><a href="https://www.microsoft.com/es-es/d/mando-inalambrico-xbox-cable-usb-c/8t8kcnb1xs3d" aria-label="Mando inalámbrico Xbox + Cable USB-C® " data-bi-mto="true">Mando inalámbrico Xbox + Cable USB-C® </a></h3><p class="sr-only">59,99 €</p><p aria-hidden="true"> <span class="font-weight-semibold">59,99 €</span></p><div class="mb-2"><p><span style="display:block">Disfruta del Mando inalámbrico Xbox modernizado, diseñado para una mayor comodidad...</span><span class="sr-only">Para obtener más información, selecciona Mando inalámbrico Xbox + Cable USB-C® .</span></p></div></div></div></div></div></div></section></div></div><a href="#controls-d177adf000b34058a6894307051493f4" class="btn btn-link sr-only-focusable w-100 position-absolute bottom-0">Volver a los controles Siguiente y Anterior</a></div></section><a id="skip-d177adf000b34058a6894307051493f4" class="sr-only" tabindex="-1">Fin de<!-- --> <!-- -->Mandos Xbox</a></div></div></div></div>
                        
                        
                    
                
                
                        
                        
                    
            

            
        
    



    <div class="cq-placeholder" data-emptytext="ProductCards"></div>




    
        
    



    
</div>
<div class="productcards mb-md-5 aem-GridColumn aem-GridColumn--default--12" data-component-id="277fdfcaff130aee6c0e8803411261b3">


    
    






    


    
        


        
            
                
                        
                        
                            <div data-ssrmodule="ProductCards" data-props="%7B%22cards%22%3A%5B%7B%22compName%22%3A%22Product%20Placement%20Carousel%3A%20Devices%22%2C%22description%22%3A%7B%22full%22%3A%5B%22El%20Mando%20Inal%C3%A1mbrico%20Xbox%20Elite%20Series%202%20ofrece%20m%C3%A1s%20de%2030%20nuevas%20formas%20de%20jugar%20como%20un%20profesional%2C%20incluidos%20nuevos%20sticks%20de%20tensi%C3%B3n%20regulable%2C%20nuevos%20componentes%20intercambiables%2C%20hasta%2040%20horas%20de%20duraci%C3%B3n%20de%20la%20bater%C3%ADa%20recargable%20y%20una%20personalizaci%C3%B3n%20ilimitada%20con%20la%20aplicaci%C3%B3n%20Accesorios%20de%20Xbox%20en%20Xbox%20One%20y%20Windows.%22%5D%2C%22showReadMore%22%3Atrue%2C%22visibleText%22%3A%5B%22El%20Mando%20Inal%C3%A1mbrico%20Xbox%20Elite%20Series%202%20ofrece%20m%C3%A1s%20de%2030%20nuevas%20formas%20de%20jugar%20como...%22%5D%7D%2C%22idx%22%3A0%2C%22image%22%3A%7B%22uri%22%3A%22https%3A%2F%2Fimg-prod-cms-rt-microsoft-com.akamaized.net%2Fcms%2Fapi%2Fam%2FimageFileData%2FRE2XP73%3Fver%3D7371%26%22%2C%22alt%22%3A%22Mando%20Inal%C3%A1mbrico%20Xbox%20Elite%20Series%202%22%2C%22background%22%3A%22%22%2C%22system%22%3A%22rtdam%22%7D%2C%22isCondensed%22%3Afalse%2C%22listDisplayName%22%3A%22Accesorios%20de%20Xbox%22%2C%22locale%22%3A%22es-ES%22%2C%22newTab%22%3Afalse%2C%22pdpUri%22%3A%22https%3A%2F%2Fwww.microsoft.com%2Fes-es%2Fd%2Fmando-inalambrico-xbox-elite-series-2%2F8rsn7j6375gg%22%2C%22preOrder%22%3Afalse%2C%22price%22%3A%7B%22inAppPurchases%22%3Afalse%2C%22fromText%22%3A%22%22%2C%22currentPrice%22%3A%22179%2C99%C2%A0%E2%82%AC%22%2C%22screenReaderText%22%3A%22179%2C99%C2%A0%E2%82%AC%22%7D%2C%22productId%22%3A%228rsn7j6375gg%22%2C%22skuId%22%3A%2266LC%22%2C%22availabilityId%22%3A%228WG5VQP0X697%22%2C%22productHeadingTagLevel%22%3A%22h3%22%2C%22showCtaLink%22%3Afalse%2C%22title%22%3A%22Mando%20Inal%C3%A1mbrico%20Xbox%20Elite%20Series%202%22%2C%22inStock%22%3Atrue%7D%2C%7B%22compName%22%3A%22Product%20Placement%20Carousel%3A%20Devices%22%2C%22description%22%3A%7B%22full%22%3A%5B%22Disfruta%20del%20Mando%20inal%C3%A1mbrico%20Xbox%20Elite%20Series%202%20%E2%80%93%20Core%2C%20que%20cuenta%20con%20palancas%20de%20mando%20de%20tensi%C3%B3n%20ajustable%2C%20bloqueo%20de%20gatillos%20de%20alta%20sensibilidad%20m%C3%A1s%20cortos%20y%20una%20personalizaci%C3%B3n%20ilimitada%20con%20la%20aplicaci%C3%B3n%20Accesorios%20de%20Xbox%20en%20Xbox%20Series%20X%7CS%2C%20Xbox%20One%20y%20PC%20Windows.%C2%B9%22%5D%2C%22showReadMore%22%3Atrue%2C%22visibleText%22%3A%5B%22Disfruta%20del%20Mando%20inal%C3%A1mbrico%20Xbox%20Elite%20Series%202%20%E2%80%93%20Core%2C%20que%20cuenta%20con%20palancas%20de...%22%5D%7D%2C%22idx%22%3A1%2C%22image%22%3A%7B%22uri%22%3A%22https%3A%2F%2Fimg-prod-cms-rt-microsoft-com.akamaized.net%2Fcms%2Fapi%2Fam%2FimageFileData%2FRWXgRg%3Fver%3D79f2%26%22%2C%22alt%22%3A%22Mando%20inal%C3%A1mbrico%20Xbox%20Elite%20Series%202%20%E2%80%93%20Core%22%2C%22background%22%3A%22%22%2C%22system%22%3A%22rtdam%22%7D%2C%22isCondensed%22%3Afalse%2C%22listDisplayName%22%3A%22Accesorios%20de%20Xbox%22%2C%22locale%22%3A%22es-es%22%2C%22newTab%22%3Afalse%2C%22pdpUri%22%3A%22https%3A%2F%2Fwww.microsoft.com%2Fes-es%2Fd%2Fmando-inalambrico-xbox-elite-series-2-core%2F8v7m3k0bsh52%22%2C%22preOrder%22%3Afalse%2C%22price%22%3A%7B%22inAppPurchases%22%3Afalse%2C%22fromText%22%3A%22Desde%20%22%2C%22currentPrice%22%3A%22129%2C99%C2%A0%E2%82%AC%22%2C%22screenReaderText%22%3A%22Desde%20%20129%2C99%C2%A0%E2%82%AC%22%7D%2C%22primaryBadgeText%22%3A%22Ahorra%2010%2C99%C2%A0%E2%82%AC%20del%20PVPR%22%2C%22productId%22%3A%228v7m3k0bsh52%22%2C%22skuId%22%3A%22FB41%22%2C%22availabilityId%22%3A%228WH5P1NZZ01M%22%2C%22productHeadingTagLevel%22%3A%22h3%22%2C%22showCtaLink%22%3Afalse%2C%22title%22%3A%22Mando%20inal%C3%A1mbrico%20Xbox%20Elite%20Series%202%20%E2%80%93%20Core%22%2C%22inStock%22%3Atrue%7D%2C%7B%22compName%22%3A%22Product%20Placement%20Carousel%3A%20Devices%22%2C%22description%22%3A%7B%22full%22%3A%5B%22Disfruta%20del%20Mando%20inal%C3%A1mbrico%20Xbox%2C%20dise%C3%B1ado%20para%20una%20mayor%20comodidad%20durante%20el%20juego.%20Disponible%20en%20Carbon%20Black%2C%20Robot%20White%2C%20Shock%20Blue%2C%20Pulse%20Red%2C%20Electric%20Volt%2C%20Deep%20Pink%2C%20Velocity%20Green%20y%20Astral%20Purple.%22%5D%2C%22showReadMore%22%3Atrue%2C%22visibleText%22%3A%5B%22Disfruta%20del%20Mando%20inal%C3%A1mbrico%20Xbox%2C%20dise%C3%B1ado%20para%20una%20mayor%20comodidad%20durante%20el...%22%5D%7D%2C%22idx%22%3A2%2C%22image%22%3A%7B%22uri%22%3A%22https%3A%2F%2Fimg-prod-cms-rt-microsoft-com.akamaized.net%2Fcms%2Fapi%2Fam%2FimageFileData%2FRW198RH%3Fver%3D7110%26%22%2C%22alt%22%3A%22Mando%20Inal%C3%A1mbrico%20Xbox%22%2C%22background%22%3A%22%22%2C%22system%22%3A%22rtdam%22%7D%2C%22isCondensed%22%3Afalse%2C%22listDisplayName%22%3A%22Accesorios%20de%20Xbox%22%2C%22locale%22%3A%22es-es%22%2C%22newTab%22%3Afalse%2C%22pdpUri%22%3A%22https%3A%2F%2Fwww.microsoft.com%2Fes-es%2Fd%2Fmando-inalambrico-xbox%2F8xn59crbsqgz%22%2C%22preOrder%22%3Afalse%2C%22price%22%3A%7B%22inAppPurchases%22%3Afalse%2C%22fromText%22%3A%22Desde%20%22%2C%22currentPrice%22%3A%2259%2C99%C2%A0%E2%82%AC%22%2C%22screenReaderText%22%3A%22Desde%20%2059%2C99%C2%A0%E2%82%AC%22%7D%2C%22primaryBadgeText%22%3A%22Ahorra%209%2C50%C2%A0%E2%82%AC%20del%20PVPR%22%2C%22productId%22%3A%228xn59crbsqgz%22%2C%22skuId%22%3A%2230RD%22%2C%22availabilityId%22%3A%228W6QLSRQD47F%22%2C%22productHeadingTagLevel%22%3A%22h3%22%2C%22showCtaLink%22%3Afalse%2C%22title%22%3A%22Mando%20Inal%C3%A1mbrico%20Xbox%22%2C%22inStock%22%3Atrue%7D%2C%7B%22compName%22%3A%22Product%20Placement%20Carousel%3A%20Devices%22%2C%22description%22%3A%7B%22full%22%3A%5B%22Disfruta%20del%20Mando%20inal%C3%A1mbrico%20Xbox%3A%20Edici%C3%B3n%20Especial%20Gold%20Shadow%2C%20que%20cuenta%20con%20un%20acabado%20metalizado%20brillante%20con%20degradado%20de%20dorado%20a%20negro.%22%5D%2C%22showReadMore%22%3Atrue%2C%22visibleText%22%3A%5B%22Disfruta%20del%20Mando%20inal%C3%A1mbrico%20Xbox%3A%20Edici%C3%B3n%20Especial%20Gold%20Shadow%2C%20que%20cuenta%20con%20un...%22%5D%7D%2C%22idx%22%3A3%2C%22image%22%3A%7B%22uri%22%3A%22https%3A%2F%2Fimg-prod-cms-rt-microsoft-com.akamaized.net%2Fcms%2Fapi%2Fam%2FimageFileData%2FRW1aGdI%3Fver%3D1697%26%22%2C%22alt%22%3A%22Mando%20inal%C3%A1mbrico%20Xbox%20%E2%80%93%20Edici%C3%B3n%20especial%20Gold%20Shadow%22%2C%22background%22%3A%22%22%2C%22system%22%3A%22rtdam%22%7D%2C%22isCondensed%22%3Afalse%2C%22listDisplayName%22%3A%22Accesorios%20de%20Xbox%22%2C%22locale%22%3A%22es-es%22%2C%22newTab%22%3Afalse%2C%22pdpUri%22%3A%22https%3A%2F%2Fwww.microsoft.com%2Fes-es%2Fd%2Fmando-inalambrico-xbox-edicion-especial-gold-shadow%2F8sdtt2lh2t1h%22%2C%22preOrder%22%3Afalse%2C%22price%22%3A%7B%22inAppPurchases%22%3Afalse%2C%22fromText%22%3A%22%22%2C%22currentPrice%22%3A%2269%2C99%C2%A0%E2%82%AC%22%2C%22screenReaderText%22%3A%2269%2C99%C2%A0%E2%82%AC%22%7D%2C%22productId%22%3A%228sdtt2lh2t1h%22%2C%22skuId%22%3A%2230G1%22%2C%22availabilityId%22%3A%228WR6RB4ZR4MB%22%2C%22productHeadingTagLevel%22%3A%22h3%22%2C%22showCtaLink%22%3Afalse%2C%22title%22%3A%22Mando%20inal%C3%A1mbrico%20Xbox%20%E2%80%93%20Edici%C3%B3n%20especial%20Gold%20Shadow%22%2C%22inStock%22%3Atrue%7D%2C%7B%22compName%22%3A%22Product%20Placement%20Carousel%3A%20Devices%22%2C%22description%22%3A%7B%22full%22%3A%5B%22A%C3%B1ade%20dise%C3%B1os%20atrevidos%20a%20tu%20consola%20con%20vinilos%20para%20la%20consola%20Xbox%20Series%20X.%20Todos%20los%20vinilos%20para%20la%20consola%20Xbox%20est%C3%A1n%20hechos%20de%20paneles%20ciegos%20y%20un%20tejido%20t%C3%A9cnico%2C%20por%20lo%20que%20proporcionan%20un%20ajuste%20y%20acabado%20de%20precisi%C3%B3n%20perfectos%20para%20tu%20Xbox%20Series%20X.%C2%B9%22%5D%2C%22showReadMore%22%3Atrue%2C%22visibleText%22%3A%5B%22A%C3%B1ade%20dise%C3%B1os%20atrevidos%20a%20tu%20consola%20con%20vinilos%20para%20la%20consola%20Xbox%20Series%20X.%20Todos...%22%5D%7D%2C%22idx%22%3A4%2C%22image%22%3A%7B%22uri%22%3A%22https%3A%2F%2Fimg-prod-cms-rt-microsoft-com.akamaized.net%2Fcms%2Fapi%2Fam%2FimageFileData%2FRW1dwEO%3Fver%3D65ae%26%22%2C%22alt%22%3A%22Vinilos%20para%20la%20consola%20Xbox%20Series%20X%22%2C%22background%22%3A%22%22%2C%22system%22%3A%22rtdam%22%7D%2C%22isCondensed%22%3Afalse%2C%22listDisplayName%22%3A%22Accesorios%20de%20Xbox%22%2C%22locale%22%3A%22es-es%22%2C%22newTab%22%3Afalse%2C%22pdpUri%22%3A%22https%3A%2F%2Fwww.microsoft.com%2Fes-es%2Fd%2Fvinilos-para-la-consola-xbox-series-x%2F8x08lwws1qh7%22%2C%22preOrder%22%3Afalse%2C%22price%22%3A%7B%22inAppPurchases%22%3Afalse%2C%22fromText%22%3A%22Desde%20%22%2C%22currentPrice%22%3A%2249%2C99%C2%A0%E2%82%AC%22%2C%22screenReaderText%22%3A%22Desde%20%2049%2C99%C2%A0%E2%82%AC%22%7D%2C%22productId%22%3A%228x08lwws1qh7%22%2C%22skuId%22%3A%225TXV%22%2C%22availabilityId%22%3A%228WDGD55B9JPZ%22%2C%22productHeadingTagLevel%22%3A%22h3%22%2C%22showCtaLink%22%3Afalse%2C%22title%22%3A%22Vinilos%20para%20la%20consola%20Xbox%20Series%20X%22%2C%22inStock%22%3Atrue%7D%2C%7B%22compName%22%3A%22Product%20Placement%20Carousel%3A%20Devices%22%2C%22description%22%3A%7B%22full%22%3A%5B%22Disfruta%20del%20Mando%20inal%C3%A1mbrico%20Xbox%20%E2%80%93%20Stormcloud%20Vapor%20Edici%C3%B3n%20Especial%2C%20que%20cuenta%20con%20un%20remolino%20azul%20y%20negro%20%C3%BAnico%20para%20cada%20mando%20y%20agarres%20de%20goma%20azules%20con%20patr%C3%B3n%20de%20diamante%20en%20la%20parte%20trasera.%22%5D%2C%22showReadMore%22%3Atrue%2C%22visibleText%22%3A%5B%22Disfruta%20del%20Mando%20inal%C3%A1mbrico%20Xbox%20%E2%80%93%20Stormcloud%20Vapor%20Edici%C3%B3n%20Especial%2C%20que%20cuenta...%22%5D%7D%2C%22idx%22%3A5%2C%22image%22%3A%7B%22uri%22%3A%22https%3A%2F%2Fimg-prod-cms-rt-microsoft-com.akamaized.net%2Fcms%2Fapi%2Fam%2FimageFileData%2FRW16JNc%3Fver%3Da961%26%22%2C%22alt%22%3A%22Mando%20inal%C3%A1mbrico%20Xbox%3A%20Stormcloud%20Vapor%20Special%20Edition%22%2C%22background%22%3A%22%22%2C%22system%22%3A%22rtdam%22%7D%2C%22isCondensed%22%3Afalse%2C%22listDisplayName%22%3A%22Accesorios%20de%20Xbox%22%2C%22locale%22%3A%22es-es%22%2C%22newTab%22%3Afalse%2C%22pdpUri%22%3A%22https%3A%2F%2Fwww.microsoft.com%2Fes-es%2Fd%2Fmando-inalambrico-xbox-stormcloud-vapor-special-edition%2F8xhnlbp36g5f%22%2C%22preOrder%22%3Afalse%2C%22price%22%3A%7B%22inAppPurchases%22%3Afalse%2C%22fromText%22%3A%22%22%2C%22currentPrice%22%3A%2269%2C99%C2%A0%E2%82%AC%22%2C%22screenReaderText%22%3A%2269%2C99%C2%A0%E2%82%AC%22%7D%2C%22productId%22%3A%228xhnlbp36g5f%22%2C%22skuId%22%3A%22BQJS%22%2C%22availabilityId%22%3A%228W0T0VRTVWHW%22%2C%22productHeadingTagLevel%22%3A%22h3%22%2C%22showCtaLink%22%3Afalse%2C%22title%22%3A%22Mando%20inal%C3%A1mbrico%20Xbox%3A%20Stormcloud%20Vapor%20Special%20Edition%22%2C%22inStock%22%3Atrue%7D%2C%7B%22compName%22%3A%22Product%20Placement%20Carousel%3A%20Devices%22%2C%22description%22%3A%7B%22full%22%3A%5B%22Mete%20m%C3%A1s%20presi%C3%B3n%20con%20el%20Mando%20inal%C3%A1mbrico%20Xbox%20%E2%80%93%20Sunkissed%20Vibes%20OPI%20Edici%C3%B3n%20Especial%2C%20inspirado%20en%20la%20colecci%C3%B3n%20Summer%20Make%20the%20Rules%20de%20OPI.%22%5D%2C%22showReadMore%22%3Atrue%2C%22visibleText%22%3A%5B%22Mete%20m%C3%A1s%20presi%C3%B3n%20con%20el%20Mando%20inal%C3%A1mbrico%20Xbox%20%E2%80%93%20Sunkissed%20Vibes%20OPI%20Edici%C3%B3n%20Especial...%22%5D%7D%2C%22idx%22%3A6%2C%22image%22%3A%7B%22uri%22%3A%22https%3A%2F%2Fimg-prod-cms-rt-microsoft-com.akamaized.net%2Fcms%2Fapi%2Fam%2FimageFileData%2FRW10vxe%3Fver%3D98e7%26%22%2C%22alt%22%3A%22Mando%20inal%C3%A1mbrico%20Xbox%20%E2%80%93%20Sunkissed%20Vibes%20OPI%20Edici%C3%B3n%20Especial%22%2C%22background%22%3A%22%22%2C%22system%22%3A%22rtdam%22%7D%2C%22isCondensed%22%3Afalse%2C%22listDisplayName%22%3A%22Accesorios%20de%20Xbox%22%2C%22locale%22%3A%22es-es%22%2C%22newTab%22%3Afalse%2C%22pdpUri%22%3A%22https%3A%2F%2Fwww.microsoft.com%2Fes-es%2Fd%2Fmando-inalambrico-xbox-sunkissed-vibes-opi-edicion-especial%2F928w7wcrttkm%22%2C%22preOrder%22%3Afalse%2C%22price%22%3A%7B%22inAppPurchases%22%3Afalse%2C%22fromText%22%3A%22%22%2C%22currentPrice%22%3A%2269%2C99%C2%A0%E2%82%AC%22%2C%22screenReaderText%22%3A%2269%2C99%C2%A0%E2%82%AC%22%7D%2C%22productId%22%3A%22928w7wcrttkm%22%2C%22skuId%22%3A%22FM0L%22%2C%22availabilityId%22%3A%228W31HNLRS6T6%22%2C%22productHeadingTagLevel%22%3A%22h3%22%2C%22showCtaLink%22%3Afalse%2C%22title%22%3A%22Mando%20inal%C3%A1mbrico%20Xbox%20%E2%80%93%20Sunkissed%20Vibes%20OPI%20Edici%C3%B3n%20Especial%22%2C%22inStock%22%3Atrue%7D%2C%7B%22compName%22%3A%22Product%20Placement%20Carousel%3A%20Devices%22%2C%22description%22%3A%7B%22full%22%3A%5B%22Disfruta%20del%20Mando%20inal%C3%A1mbrico%20Xbox%20%E2%80%93%20Edici%C3%B3n%20Especial%20Remix%2C%20que%20est%C3%A1%20hecho%20de%20pl%C3%A1sticos%20recuperados%2C%20un%20tercio%20de%20los%20cuales%20procede%20de%20materiales%20granulados%20y%20reciclados.%20Tambi%C3%A9n%20incluye%20el%20Pack%20de%20bater%C3%ADas%20recargables%20Xbox.%C2%B9%22%5D%2C%22showReadMore%22%3Atrue%2C%22visibleText%22%3A%5B%22Disfruta%20del%20Mando%20inal%C3%A1mbrico%20Xbox%20%E2%80%93%20Edici%C3%B3n%20Especial%20Remix%2C%20que%20est%C3%A1%20hecho%20de...%22%5D%7D%2C%22idx%22%3A7%2C%22image%22%3A%7B%22uri%22%3A%22https%3A%2F%2Fimg-prod-cms-rt-microsoft-com.akamaized.net%2Fcms%2Fapi%2Fam%2FimageFileData%2FRWYNC8%3Fver%3D56c2%26%22%2C%22alt%22%3A%22Mando%20inal%C3%A1mbrico%20Xbox%20%E2%80%93%20Edici%C3%B3n%20Especial%20Remix%22%2C%22background%22%3A%22%22%2C%22system%22%3A%22rtdam%22%7D%2C%22isCondensed%22%3Afalse%2C%22listDisplayName%22%3A%22Accesorios%20de%20Xbox%22%2C%22locale%22%3A%22es-es%22%2C%22newTab%22%3Afalse%2C%22pdpUri%22%3A%22https%3A%2F%2Fwww.microsoft.com%2Fes-es%2Fd%2Fmando-inalambrico-xbox-edicion-especial-remix%2F8zfbkd2fjmkn%22%2C%22preOrder%22%3Afalse%2C%22price%22%3A%7B%22inAppPurchases%22%3Afalse%2C%22fromText%22%3A%22%22%2C%22currentPrice%22%3A%2272%2C49%C2%A0%E2%82%AC%22%2C%22originalPrice%22%3A%2284%2C99%C2%A0%E2%82%AC%22%2C%22screenReaderText%22%3A%22Originalmente%2084%2C99%C2%A0%E2%82%AC%20ahora%2072%2C49%C2%A0%E2%82%AC%22%7D%2C%22primaryBadgeText%22%3A%22Ahorra%2012%2C50%C2%A0%E2%82%AC%20del%20PVPR%22%2C%22productId%22%3A%228zfbkd2fjmkn%22%2C%22skuId%22%3A%22CB47%22%2C%22availabilityId%22%3A%228WQVHXGCWMN0%22%2C%22productHeadingTagLevel%22%3A%22h3%22%2C%22showCtaLink%22%3Afalse%2C%22title%22%3A%22Mando%20inal%C3%A1mbrico%20Xbox%20%E2%80%93%20Edici%C3%B3n%20Especial%20Remix%22%2C%22inStock%22%3Atrue%7D%2C%7B%22compName%22%3A%22Product%20Placement%20Carousel%3A%20Devices%22%2C%22description%22%3A%7B%22full%22%3A%5B%22Disfruta%20del%20Mando%20inal%C3%A1mbrico%20Xbox%20%E2%80%93%20Stellar%20Shift%20Special%20Edition%2C%20con%20cambio%20de%20colores%2C%20centelleo%20azul%20y%20p%C3%BArpura%2C%20y%20agarres%20de%20goma%20con%20remolinos%20en%20p%C3%BArpura%20que%20hacen%20que%20el%20mando%20cobre%20vida.%22%5D%2C%22showReadMore%22%3Atrue%2C%22visibleText%22%3A%5B%22Disfruta%20del%20Mando%20inal%C3%A1mbrico%20Xbox%20%E2%80%93%20Stellar%20Shift%20Special%20Edition%2C%20con%20cambio%20de...%22%5D%7D%2C%22idx%22%3A8%2C%22image%22%3A%7B%22uri%22%3A%22https%3A%2F%2Fimg-prod-cms-rt-microsoft-com.akamaized.net%2Fcms%2Fapi%2Fam%2FimageFileData%2FRE5dP2W%3Fver%3D3ced%26%22%2C%22alt%22%3A%22Mando%20inal%C3%A1mbrico%20Xbox%20%E2%80%93%20Stellar%20Shift%20Special%20Edition%22%2C%22background%22%3A%22%22%2C%22system%22%3A%22rtdam%22%7D%2C%22isCondensed%22%3Afalse%2C%22listDisplayName%22%3A%22Accesorios%20de%20Xbox%22%2C%22locale%22%3A%22es-es%22%2C%22newTab%22%3Afalse%2C%22pdpUri%22%3A%22https%3A%2F%2Fwww.microsoft.com%2Fes-es%2Fd%2Fmando-inalambrico-xbox-stellar-shift-special-edition%2F94fbjc7h0h6h%22%2C%22preOrder%22%3Afalse%2C%22price%22%3A%7B%22inAppPurchases%22%3Afalse%2C%22fromText%22%3A%22%22%2C%22currentPrice%22%3A%2269%2C99%C2%A0%E2%82%AC%22%2C%22screenReaderText%22%3A%2269%2C99%C2%A0%E2%82%AC%22%7D%2C%22productId%22%3A%2294fbjc7h0h6h%22%2C%22skuId%22%3A%22G61F%22%2C%22availabilityId%22%3A%228W3HG41CDZ9G%22%2C%22productHeadingTagLevel%22%3A%22h3%22%2C%22showCtaLink%22%3Afalse%2C%22title%22%3A%22Mando%20inal%C3%A1mbrico%20Xbox%20%E2%80%93%20Stellar%20Shift%20Special%20Edition%22%2C%22inStock%22%3Atrue%7D%2C%7B%22compName%22%3A%22Product%20Placement%20Carousel%3A%20Devices%22%2C%22description%22%3A%7B%22full%22%3A%5B%22Disfruta%20del%20Mando%20inal%C3%A1mbrico%20Xbox%20%E2%80%93%20Mineral%20Camo%20Special%20Edition%2C%20que%20cuenta%20con%20un%20llamativo%20patr%C3%B3n%20de%20camuflaje%20azul%20mineral%2C%20p%C3%BArpura%20brillante%2C%20aguamarina%20y%20p%C3%BArpura%20oscuro.%C2%B9%22%5D%2C%22showReadMore%22%3Atrue%2C%22visibleText%22%3A%5B%22Disfruta%20del%20Mando%20inal%C3%A1mbrico%20Xbox%20%E2%80%93%20Mineral%20Camo%20Special%20Edition%2C%20que%20cuenta%20con%20un...%22%5D%7D%2C%22idx%22%3A9%2C%22image%22%3A%7B%22uri%22%3A%22https%3A%2F%2Fimg-prod-cms-rt-microsoft-com.akamaized.net%2Fcms%2Fapi%2Fam%2FimageFileData%2FRE54DVo%3Fver%3Db6b5%26%22%2C%22alt%22%3A%22Mando%20inal%C3%A1mbrico%20Xbox%20%E2%80%93%20Mineral%20Camo%20Special%20Edition%22%2C%22background%22%3A%22%22%2C%22system%22%3A%22rtdam%22%7D%2C%22isCondensed%22%3Afalse%2C%22listDisplayName%22%3A%22Accesorios%20de%20Xbox%22%2C%22locale%22%3A%22es-es%22%2C%22newTab%22%3Afalse%2C%22pdpUri%22%3A%22https%3A%2F%2Fwww.microsoft.com%2Fes-es%2Fd%2Fmando-inalambrico-xbox-mineral-camo-special-edition%2F93jtnp21rvxn%22%2C%22preOrder%22%3Afalse%2C%22price%22%3A%7B%22inAppPurchases%22%3Afalse%2C%22fromText%22%3A%22%22%2C%22currentPrice%22%3A%2269%2C99%C2%A0%E2%82%AC%22%2C%22screenReaderText%22%3A%2269%2C99%C2%A0%E2%82%AC%22%7D%2C%22productId%22%3A%2293jtnp21rvxn%22%2C%22skuId%22%3A%220J61%22%2C%22availabilityId%22%3A%228WCFN2F9B2WP%22%2C%22productHeadingTagLevel%22%3A%22h3%22%2C%22showCtaLink%22%3Afalse%2C%22title%22%3A%22Mando%20inal%C3%A1mbrico%20Xbox%20%E2%80%93%20Mineral%20Camo%20Special%20Edition%22%2C%22inStock%22%3Atrue%7D%5D%2C%22carouselId%22%3A%224805019e-63c1-42f2-aad7-0307a7f8ded1%22%2C%22channelStyle%22%3A%22row%20row-cols-1%20row-cols-sm-2%20row-cols-md-3%20row-cols-lg-4%20py-5%22%2C%22error%22%3A%22%22%2C%22headingSize%22%3A%22h2%22%2C%22headingTagLevel%22%3A%22h2%22%2C%22hideHeader%22%3Afalse%2C%22hideStatus%22%3Afalse%2C%22isCondensed%22%3Afalse%2C%22listDisplayName%22%3A%22Accesorios%20de%20Xbox%22%2C%22listName%22%3A%22xboxaccessories%22%2C%22listType%22%3A%22curated%22%2C%22locale%22%3A%22es-ES%22%2C%22localizedText%22%3A%7B%22OFFERS_IN_APP_PURCHASES%22%3A%22Ofertas%20en%20compras%20de%20aplicaciones%22%2C%22CLOSE%22%3A%22Cerrar%22%2C%22SHOWING_START_THROUGH_END_OF_TOTAL_ITEMS%22%3A%22Mostrando%20de%20%7B0%7D%20a%20%7B1%7D%20de%20%7B2%7D%20elementos%22%2C%22PREVIOUS_SLIDE%22%3A%22Diapositiva%20anterior%22%2C%22BACK_TO_NEXT_AND_PREVIOUS_CONTROLS%22%3A%22Volver%20a%20los%20controles%20Siguiente%20y%20Anterior%22%2C%22Refine%20results%22%3A%22Refinar%20resultados%22%2C%22INCLUDED_WITH_SUBSCRIPTION%22%3A%22con%22%2C%22Less%22%3A%22Menos%22%2C%22SLIDESHOW%22%3A%22Presentaci%C3%B3n%22%2C%22CLOSE_DIALOG_WINDOW%22%3A%22Cerrar%20ventana%20de%20di%C3%A1logo%22%2C%22READ_MORE%22%3A%22M%C3%A1s%20informaci%C3%B3n%22%2C%22SHOWING_START_HYPHEN_END_OF_TOTAL_ITEMS%22%3A%22Mostrando%20%7B0%7D%20-%20%7B1%7D%20de%20%7B2%7D%20art%C3%ADculos%22%2C%22SEE_ALL%22%3A%22Mostrar%20todo%22%2C%22PAGINATION_FOR_SEARCH_RESULTS_TOTAL_PAGES%22%3A%22Paginaci%C3%B3n%20de%20resultados%20de%20la%20b%C3%BAsqueda%3A%20%7B0%7D%20p%C3%A1ginas%22%2C%22Pagination%20for%20search%20results%3A%20%7BnumPages%7D%20pages%22%3A%22Paginaci%C3%B3n%20de%20resultados%20de%20la%20b%C3%BAsqueda%3A%20%7BnumPages%7D%20p%C3%A1ginas%22%2C%22NEW_RELEASE%22%3A%22Nuevo%22%2C%22Pagination%20for%20search%20results%3A%20%7BnumPages%7D%20page%22%3A%22Paginaci%C3%B3n%20de%20resultados%20de%20la%20b%C3%BAsqueda%3A%20%7BnumPages%7D%20p%C3%A1gina%22%2C%22NOW%22%3A%22ahora%22%2C%22Next%22%3A%22Siguiente%22%2C%22Clear%20all%22%3A%22Borrar%20todo%22%2C%22%7BfilterSelections%7D%20filter%20selected%22%3A%22%7BfilterSelections%7D%20filtro%20seleccionado%22%2C%22NEXT_PAGE%22%3A%22P%C3%A1gina%20siguiente%22%2C%22ORIGINALLY%22%3A%22Originalmente%22%2C%22List%20Microsoft.com%22%3A%22Lista%20Microsoft.com%22%2C%22CURRENT_PAGE_SHOWING_START_HYPHEN_END_OF_TOTAL_ITEMS%22%3A%22P%C3%A1gina%20actual%20%7B0%7D%2C%20Mostrando%20%7B1%7D%20-%20%7B2%7D%20de%20%7B3%7D%20resultados%22%2C%22READ_MORE_ON%22%3A%22M%C3%A1s%20informaci%C3%B3n%20sobre%20%7B0%7D%22%2C%22CAROUSEL_BACK%22%3A%22Retroceder%20en%20el%20carrusel%22%2C%22SHOP_NOW%22%3A%22Comprar%20ahora%22%2C%22PREVIOUS_PAGE%22%3A%22P%C3%A1gina%20anterior%22%2C%22PREVIOUS%22%3A%22Anterior%22%2C%22MORE_PRODUCTS_COMING_SOON%22%3A%22Pr%C3%B3ximamente%20habr%C3%A1%20m%C3%A1s%20productos%22%2C%22PREORDER%22%3A%22Reservar%22%2C%22More%22%3A%22M%C3%A1s%22%2C%22NEXT_SLIDE%22%3A%22Diapositiva%20siguiente%22%2C%22remove%20filter%20%7BfilterName%7D%22%3A%22quitar%20filtro%20%7BfilterName%7D%22%2C%22NEXT%22%3A%22Siguiente%22%2C%22META_DESCRIPTION_DEFAULT%22%3A%22%7BlistDisplayName%7D.%20Consigue%20estos%20%7BproductCount%7D%20art%C3%ADculos%20y%20explora%20Microsoft%20Store%7Bcountry%7D%20para%20descubrir%20aplicaciones%2C%20juegos%2C%20port%C3%A1tiles%2C%20PC%20y%20otros%20dispositivos%20incre%C3%ADbles.%22%2C%22SKIP%22%3A%22Omitir%22%2C%22READ_MORE_ABOUT%22%3A%22M%C3%A1s%20informaci%C3%B3n%20sobre%22%2C%22CAROUSEL_FORWARD%22%3A%22Avanzar%20en%20el%20carrusel%22%2C%22Collapse%22%3A%22Contraer%22%2C%22PAGE_SHOWING_START_HYPHEN_END_OF_TOTAL_ITEMS%22%3A%22P%C3%A1gina%20%7B0%7D%2C%20Mostrando%20%7B1%7D%20-%20%7B2%7D%20de%20%7B3%7D%20resultados%22%2C%22END_OF%22%3A%22Fin%20de%22%2C%22READ_MORE_ON_PRODUCT_DESCRIPTION%22%3A%22M%C3%A1s%20informaci%C3%B3n%20sobre%20la%20descripci%C3%B3n%20del%20producto%22%2C%22Skip%20refine%20results%20section%22%3A%22Omitir%20la%20secci%C3%B3n%20de%20refinar%20resultados%22%2C%22NO_RESULTS_FOUND%22%3A%22No%20se%20encontraron%20resultados%22%2C%22STARTING_FROM%22%3A%22desde%22%2C%22OUT_OF_STOCK%22%3A%22Agotado%22%2C%22Previous%22%3A%22Anterior%22%2C%22BACK_END_ERROR%22%3A%22Hubo%20un%20problema%20con%20la%20consulta%20de%20datos%20Tarjetas%3B%20intenta%20volver%20a%20cargar%20la%20p%C3%A1gina%20o%20comprueba%20el%20enlace.%22%2C%22%7BfilterSelections%7D%20filters%20selected%22%3A%22%7BfilterSelections%7D%20filtros%20seleccionados%22%2C%22SELECT_PRODUCT_FOR_MORE%22%3A%22Para%20obtener%20m%C3%A1s%20informaci%C3%B3n%2C%20selecciona%20%7Btitle%7D.%22%7D%2C%22newTab%22%3Afalse%2C%22productType%22%3A%22devices%22%2C%22seoString%22%3A%22%7B%5C%22%40context%5C%22%3A%5C%22http%3A%2F%2Fschema.org%5C%22%2C%5C%22%40type%5C%22%3A%5C%22itemList%5C%22%2C%5C%22numberOfItems%5C%22%3A%5C%2210%5C%22%2C%5C%22name%5C%22%3A%5C%22Accesorios%20de%20Xbox%5C%22%2C%5C%22itemListElement%5C%22%3A%5B%7B%5C%22%40type%5C%22%3A%5C%22ListItem%5C%22%2C%5C%22name%5C%22%3A%5C%22Mando%20Inal%C3%A1mbrico%20Xbox%20Elite%20Series%202%5C%22%2C%5C%22url%5C%22%3A%5C%22https%3A%2F%2Fwww.microsoft.com%2Fes-es%2Fd%2Fmando-inalambrico-xbox-elite-series-2%2F8rsn7j6375gg%5C%22%2C%5C%22position%5C%22%3A1%7D%2C%7B%5C%22%40type%5C%22%3A%5C%22ListItem%5C%22%2C%5C%22name%5C%22%3A%5C%22Mando%20inal%C3%A1mbrico%20Xbox%20Elite%20Series%202%20%E2%80%93%20Core%5C%22%2C%5C%22url%5C%22%3A%5C%22https%3A%2F%2Fwww.microsoft.com%2Fes-es%2Fd%2Fmando-inalambrico-xbox-elite-series-2-core%2F8v7m3k0bsh52%5C%22%2C%5C%22position%5C%22%3A2%7D%2C%7B%5C%22%40type%5C%22%3A%5C%22ListItem%5C%22%2C%5C%22name%5C%22%3A%5C%22Mando%20Inal%C3%A1mbrico%20Xbox%5C%22%2C%5C%22url%5C%22%3A%5C%22https%3A%2F%2Fwww.microsoft.com%2Fes-es%2Fd%2Fmando-inalambrico-xbox%2F8xn59crbsqgz%5C%22%2C%5C%22position%5C%22%3A3%7D%2C%7B%5C%22%40type%5C%22%3A%5C%22ListItem%5C%22%2C%5C%22name%5C%22%3A%5C%22Mando%20inal%C3%A1mbrico%20Xbox%20%E2%80%93%20Edici%C3%B3n%20especial%20Gold%20Shadow%5C%22%2C%5C%22url%5C%22%3A%5C%22https%3A%2F%2Fwww.microsoft.com%2Fes-es%2Fd%2Fmando-inalambrico-xbox-edicion-especial-gold-shadow%2F8sdtt2lh2t1h%5C%22%2C%5C%22position%5C%22%3A4%7D%2C%7B%5C%22%40type%5C%22%3A%5C%22ListItem%5C%22%2C%5C%22name%5C%22%3A%5C%22Vinilos%20para%20la%20consola%20Xbox%20Series%20X%5C%22%2C%5C%22url%5C%22%3A%5C%22https%3A%2F%2Fwww.microsoft.com%2Fes-es%2Fd%2Fvinilos-para-la-consola-xbox-series-x%2F8x08lwws1qh7%5C%22%2C%5C%22position%5C%22%3A5%7D%2C%7B%5C%22%40type%5C%22%3A%5C%22ListItem%5C%22%2C%5C%22name%5C%22%3A%5C%22Mando%20inal%C3%A1mbrico%20Xbox%3A%20Stormcloud%20Vapor%20Special%20Edition%5C%22%2C%5C%22url%5C%22%3A%5C%22https%3A%2F%2Fwww.microsoft.com%2Fes-es%2Fd%2Fmando-inalambrico-xbox-stormcloud-vapor-special-edition%2F8xhnlbp36g5f%5C%22%2C%5C%22position%5C%22%3A6%7D%2C%7B%5C%22%40type%5C%22%3A%5C%22ListItem%5C%22%2C%5C%22name%5C%22%3A%5C%22Mando%20inal%C3%A1mbrico%20Xbox%20%E2%80%93%20Sunkissed%20Vibes%20OPI%20Edici%C3%B3n%20Especial%5C%22%2C%5C%22url%5C%22%3A%5C%22https%3A%2F%2Fwww.microsoft.com%2Fes-es%2Fd%2Fmando-inalambrico-xbox-sunkissed-vibes-opi-edicion-especial%2F928w7wcrttkm%5C%22%2C%5C%22position%5C%22%3A7%7D%2C%7B%5C%22%40type%5C%22%3A%5C%22ListItem%5C%22%2C%5C%22name%5C%22%3A%5C%22Mando%20inal%C3%A1mbrico%20Xbox%20%E2%80%93%20Edici%C3%B3n%20Especial%20Remix%5C%22%2C%5C%22url%5C%22%3A%5C%22https%3A%2F%2Fwww.microsoft.com%2Fes-es%2Fd%2Fmando-inalambrico-xbox-edicion-especial-remix%2F8zfbkd2fjmkn%5C%22%2C%5C%22position%5C%22%3A8%7D%2C%7B%5C%22%40type%5C%22%3A%5C%22ListItem%5C%22%2C%5C%22name%5C%22%3A%5C%22Mando%20inal%C3%A1mbrico%20Xbox%20%E2%80%93%20Stellar%20Shift%20Special%20Edition%5C%22%2C%5C%22url%5C%22%3A%5C%22https%3A%2F%2Fwww.microsoft.com%2Fes-es%2Fd%2Fmando-inalambrico-xbox-stellar-shift-special-edition%2F94fbjc7h0h6h%5C%22%2C%5C%22position%5C%22%3A9%7D%2C%7B%5C%22%40type%5C%22%3A%5C%22ListItem%5C%22%2C%5C%22name%5C%22%3A%5C%22Mando%20inal%C3%A1mbrico%20Xbox%20%E2%80%93%20Mineral%20Camo%20Special%20Edition%5C%22%2C%5C%22url%5C%22%3A%5C%22https%3A%2F%2Fwww.microsoft.com%2Fes-es%2Fd%2Fmando-inalambrico-xbox-mineral-camo-special-edition%2F93jtnp21rvxn%5C%22%2C%5C%22position%5C%22%3A10%7D%5D%7D%22%2C%22showCtaLink%22%3Afalse%2C%22lazyLoadImages%22%3Atrue%2C%22isStacked%22%3Afalse%2C%22totalProducts%22%3A19%2C%22offset%22%3A0%2C%22compName%22%3A%22Product%20Placement%20Carousel%3A%20Devices%22%2C%22uuid%22%3A%224132ed9437214458ac8519a51997e64f%22%2C%22addToCartHash%22%3A%7B%22cV%22%3A%22CASMicrosoftCV1421a8cb.2.1.0%22%2C%22muid%22%3A%22200F5DFCE50F4699AB4E58D54C583C51%22%2C%22atcHash%22%3A%22BE6A78F00033233374399897F3A923BCAB6DF12D9403750282A78833F4C4E054%22%7D%2C%22exposeAddToCartHash%22%3Atrue%2C%22pageTheme%22%3A%22microsoft.mwf.main-light.new%22%7D"><div data-reactroot=""><script type="application/ld+json">{"@context":"http://schema.org","@type":"itemList","numberOfItems":"10","name":"Accesorios de Xbox","itemListElement":[{"@type":"ListItem","name":"Mando Inalámbrico Xbox Elite Series 2","url":"https://www.microsoft.com/es-es/d/mando-inalambrico-xbox-elite-series-2/8rsn7j6375gg","position":1},{"@type":"ListItem","name":"Mando inalámbrico Xbox Elite Series 2 – Core","url":"https://www.microsoft.com/es-es/d/mando-inalambrico-xbox-elite-series-2-core/8v7m3k0bsh52","position":2},{"@type":"ListItem","name":"Mando Inalámbrico Xbox","url":"https://www.microsoft.com/es-es/d/mando-inalambrico-xbox/8xn59crbsqgz","position":3},{"@type":"ListItem","name":"Mando inalámbrico Xbox – Edición especial Gold Shadow","url":"https://www.microsoft.com/es-es/d/mando-inalambrico-xbox-edicion-especial-gold-shadow/8sdtt2lh2t1h","position":4},{"@type":"ListItem","name":"Vinilos para la consola Xbox Series X","url":"https://www.microsoft.com/es-es/d/vinilos-para-la-consola-xbox-series-x/8x08lwws1qh7","position":5},{"@type":"ListItem","name":"Mando inalámbrico Xbox: Stormcloud Vapor Special Edition","url":"https://www.microsoft.com/es-es/d/mando-inalambrico-xbox-stormcloud-vapor-special-edition/8xhnlbp36g5f","position":6},{"@type":"ListItem","name":"Mando inalámbrico Xbox – Sunkissed Vibes OPI Edición Especial","url":"https://www.microsoft.com/es-es/d/mando-inalambrico-xbox-sunkissed-vibes-opi-edicion-especial/928w7wcrttkm","position":7},{"@type":"ListItem","name":"Mando inalámbrico Xbox – Edición Especial Remix","url":"https://www.microsoft.com/es-es/d/mando-inalambrico-xbox-edicion-especial-remix/8zfbkd2fjmkn","position":8},{"@type":"ListItem","name":"Mando inalámbrico Xbox – Stellar Shift Special Edition","url":"https://www.microsoft.com/es-es/d/mando-inalambrico-xbox-stellar-shift-special-edition/94fbjc7h0h6h","position":9},{"@type":"ListItem","name":"Mando inalámbrico Xbox – Mineral Camo Special Edition","url":"https://www.microsoft.com/es-es/d/mando-inalambrico-xbox-mineral-camo-special-edition/93jtnp21rvxn","position":10}]}</script><div class="row"><div class="col-12 px-0 px-md-g"><section aria-label="Accesorios de Xbox" aria-roledescription="Presentación"><div class="px-g px-md-0"><div class="row"><div class="col-12 col-md-8"><h2 class="mb-2 h2">Accesorios de Xbox</h2></div><div class="col-12 d-none"><div id="status-container-4132ed9437214458ac8519a51997e64f" class="float-left mr-3"><span id="status-msg-4132ed9437214458ac8519a51997e64f" aria-live="polite">Mostrando de %{start} a %{end} de %{total} elementos</span></div><a href="https://www.microsoft.com/es-es/store/collections/xboxaccessories" class="cta float-left product-cards-see-all-link" aria-label="Mostrar todo Accesorios de Xbox" data-bi-cN="Mostrar todo" data-bi-ecN="See all" data-bi-hN="Accesorios de Xbox" data-bi-cT="Link" data-bi-pA="Body" data-bi-compNm="Product Placement Carousel: Devices" data-bi-bhvr="0">Mostrar todo<span class="glyph" aria-hidden="true"></span></a></div></div></div><div id="product-cards-carousel-4132ed9437214458ac8519a51997e64f" class="carousel slide carousel-product-card" data-mount="" data-loop="true" data-status="status-container-4132ed9437214458ac8519a51997e64f"><a href="#skip-4132ed9437214458ac8519a51997e64f" class="btn btn-link sr-only-focusable w-100 position-absolute">Omitir Accesorios de Xbox</a><div><div class="carousel-controls"><button id="controls-4132ed9437214458ac8519a51997e64f" type="button" title="Anterior" data-bi-cN="Retroceder en el carrusel" data-bi-ecN="Carousel back" data-bi-hN="Accesorios de Xbox" data-bi-bhvr="1" data-bi-cT="Button" data-bi-pA="Body" data-bi-compNm="Product Placement Carousel: Devices" class="carousel-control-prev my-4 my-md-5" data-slide="prev"><span class="sr-only">Diapositiva anterior</span></button><button id="controls-next-4132ed9437214458ac8519a51997e64f" type="button" title="Siguiente" data-bi-cN="Avanzar en el carrusel" data-bi-ecN="Carousel forward" data-bi-hN="Accesorios de Xbox" data-bi-bhvr="3" data-bi-cT="Button" data-bi-pA="Body" data-bi-compNm="Product Placement Carousel: Devices" class="carousel-control-next my-4 my-md-5" data-slide="next"><span class="sr-only">Diapositiva siguiente</span></button></div><div class="carousel-inner"><section class="carousel-item active" tabindex="0" aria-labelledby="status-msg-4132ed9437214458ac8519a51997e64f" aria-roledescription="slide"><div class="container"><div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 py-5"><div class="col slide-item px-2"><div id="card-0-4132ed9437214458ac8519a51997e64f" class="card h-100 material-card depth-4 depth-8-hover pb-4" data-bi-cN="Mando Inalámbrico Xbox Elite Series 2" data-bi-hN="Accesorios de Xbox" data-bi-bhvr="0" data-bi-cT="Product Card" data-bi-pid="8rsn7j6375gg" data-bi-prdname="Mando Inalámbrico Xbox Elite Series 2" data-bi-carpos="0" data-bi-pa="Body" data-bi-compnm="Product Placement Carousel: Devices" style="cursor:pointer"><div class="img-flex-auto"><picture><source srcSet="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-srcSet="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE2XP73?ver=7371&amp;w=270&amp;h=222&amp;q=90&amp;m=6&amp;p=48&amp;f=jpg&amp;o=f&amp;aim=true" media="(min-width: 540px)"/><source srcSet="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-srcSet="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE2XP73?ver=7371&amp;w=256&amp;h=210&amp;q=90&amp;m=6&amp;p=48&amp;f=jpg&amp;o=f&amp;aim=true" media="(min-width: 860px)"/><source srcSet="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-srcSet="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE2XP73?ver=7371&amp;w=242&amp;h=199&amp;q=90&amp;m=6&amp;p=48&amp;f=jpg&amp;o=f&amp;aim=true" media="(min-width: 1084px)"/><source srcSet="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-srcSet="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE2XP73?ver=7371&amp;w=310&amp;h=254&amp;q=90&amp;m=6&amp;p=48&amp;f=jpg&amp;o=f&amp;aim=true" media="(min-width: 1400px)"/><img src="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE2XP73?ver=7371&amp;w=256&amp;h=207&amp;q=90&amp;m=6&amp;p=48&amp;f=jpg&amp;o=f&amp;aim=true" class="card-img lazy lazyload blur-up lazypreload" data-sizes="auto" alt=""/></picture></div><div class="card-body px-3 pt-3"><h3 class="base mb-2 h6"><a href="https://www.microsoft.com/es-es/d/mando-inalambrico-xbox-elite-series-2/8rsn7j6375gg" aria-label="Mando Inalámbrico Xbox Elite Series 2" data-bi-mto="true">Mando Inalámbrico Xbox Elite Series 2</a></h3><p class="sr-only">179,99 €</p><p aria-hidden="true"> <span class="font-weight-semibold">179,99 €</span></p><div class="mb-2"><p><span style="display:block">El Mando Inalámbrico Xbox Elite Series 2 ofrece más de 30 nuevas formas de jugar como...</span><span class="sr-only">Para obtener más información, selecciona Mando Inalámbrico Xbox Elite Series 2.</span></p></div></div></div></div><div class="col slide-item px-2"><div id="card-1-4132ed9437214458ac8519a51997e64f" class="card h-100 material-card depth-4 depth-8-hover pb-4" data-bi-cN="Mando inalámbrico Xbox Elite Series 2 – Core" data-bi-hN="Accesorios de Xbox" data-bi-bhvr="0" data-bi-cT="Product Card" data-bi-pid="8v7m3k0bsh52" data-bi-prdname="Mando inalámbrico Xbox Elite Series 2 – Core" data-bi-carpos="1" data-bi-pa="Body" data-bi-compnm="Product Placement Carousel: Devices" style="cursor:pointer"><div class="img-flex-auto"><picture><source srcSet="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-srcSet="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWXgRg?ver=79f2&amp;w=270&amp;h=222&amp;q=90&amp;m=6&amp;p=48&amp;f=jpg&amp;o=f&amp;aim=true" media="(min-width: 540px)"/><source srcSet="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-srcSet="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWXgRg?ver=79f2&amp;w=256&amp;h=210&amp;q=90&amp;m=6&amp;p=48&amp;f=jpg&amp;o=f&amp;aim=true" media="(min-width: 860px)"/><source srcSet="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-srcSet="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWXgRg?ver=79f2&amp;w=242&amp;h=199&amp;q=90&amp;m=6&amp;p=48&amp;f=jpg&amp;o=f&amp;aim=true" media="(min-width: 1084px)"/><source srcSet="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-srcSet="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWXgRg?ver=79f2&amp;w=310&amp;h=254&amp;q=90&amp;m=6&amp;p=48&amp;f=jpg&amp;o=f&amp;aim=true" media="(min-width: 1400px)"/><img src="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWXgRg?ver=79f2&amp;w=256&amp;h=207&amp;q=90&amp;m=6&amp;p=48&amp;f=jpg&amp;o=f&amp;aim=true" class="card-img lazy lazyload blur-up lazypreload" data-sizes="auto" alt=""/></picture></div><div class="card-header pt-3 px-3"><span class="badge bg-yellow mb-2 product-cards-savings-badge">Ahorra 10,99 € del PVPR</span></div><div class="card-body px-3"><h3 class="base mb-2 h6"><a href="https://www.microsoft.com/es-es/d/mando-inalambrico-xbox-elite-series-2-core/8v7m3k0bsh52" aria-label="Mando inalámbrico Xbox Elite Series 2 – Core" data-bi-mto="true">Mando inalámbrico Xbox Elite Series 2 – Core</a></h3><p class="sr-only">Desde  129,99 €</p><p aria-hidden="true">Desde <span class="font-weight-semibold">129,99 €</span></p><div class="mb-2"><p><span style="display:block">Disfruta del Mando inalámbrico Xbox Elite Series 2 – Core, que cuenta con palancas de...</span><span class="sr-only">Para obtener más información, selecciona Mando inalámbrico Xbox Elite Series 2 – Core.</span></p></div></div></div></div><div class="col slide-item px-2"><div id="card-2-4132ed9437214458ac8519a51997e64f" class="card h-100 material-card depth-4 depth-8-hover pb-4" data-bi-cN="Mando Inalámbrico Xbox" data-bi-hN="Accesorios de Xbox" data-bi-bhvr="0" data-bi-cT="Product Card" data-bi-pid="8xn59crbsqgz" data-bi-prdname="Mando Inalámbrico Xbox" data-bi-carpos="2" data-bi-pa="Body" data-bi-compnm="Product Placement Carousel: Devices" style="cursor:pointer"><div class="img-flex-auto"><picture><source srcSet="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-srcSet="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW198RH?ver=7110&amp;w=270&amp;h=222&amp;q=90&amp;m=6&amp;p=48&amp;f=jpg&amp;o=f&amp;aim=true" media="(min-width: 540px)"/><source srcSet="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-srcSet="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW198RH?ver=7110&amp;w=256&amp;h=210&amp;q=90&amp;m=6&amp;p=48&amp;f=jpg&amp;o=f&amp;aim=true" media="(min-width: 860px)"/><source srcSet="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-srcSet="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW198RH?ver=7110&amp;w=242&amp;h=199&amp;q=90&amp;m=6&amp;p=48&amp;f=jpg&amp;o=f&amp;aim=true" media="(min-width: 1084px)"/><source srcSet="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-srcSet="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW198RH?ver=7110&amp;w=310&amp;h=254&amp;q=90&amp;m=6&amp;p=48&amp;f=jpg&amp;o=f&amp;aim=true" media="(min-width: 1400px)"/><img src="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW198RH?ver=7110&amp;w=256&amp;h=207&amp;q=90&amp;m=6&amp;p=48&amp;f=jpg&amp;o=f&amp;aim=true" class="card-img lazy lazyload blur-up lazypreload" data-sizes="auto" alt=""/></picture></div><div class="card-header pt-3 px-3"><span class="badge bg-yellow mb-2 product-cards-savings-badge">Ahorra 9,50 € del PVPR</span></div><div class="card-body px-3"><h3 class="base mb-2 h6"><a href="https://www.microsoft.com/es-es/d/mando-inalambrico-xbox/8xn59crbsqgz" aria-label="Mando Inalámbrico Xbox" data-bi-mto="true">Mando Inalámbrico Xbox</a></h3><p class="sr-only">Desde  59,99 €</p><p aria-hidden="true">Desde <span class="font-weight-semibold">59,99 €</span></p><div class="mb-2"><p><span style="display:block">Disfruta del Mando inalámbrico Xbox, diseñado para una mayor comodidad durante el...</span><span class="sr-only">Para obtener más información, selecciona Mando Inalámbrico Xbox.</span></p></div></div></div></div><div class="col slide-item px-2"><div id="card-3-4132ed9437214458ac8519a51997e64f" class="card h-100 material-card depth-4 depth-8-hover pb-4" data-bi-cN="Mando inalámbrico Xbox – Edición especial Gold Shadow" data-bi-hN="Accesorios de Xbox" data-bi-bhvr="0" data-bi-cT="Product Card" data-bi-pid="8sdtt2lh2t1h" data-bi-prdname="Mando inalámbrico Xbox – Edición especial Gold Shadow" data-bi-carpos="3" data-bi-pa="Body" data-bi-compnm="Product Placement Carousel: Devices" style="cursor:pointer"><div class="img-flex-auto"><picture><source srcSet="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-srcSet="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW1aGdI?ver=1697&amp;w=270&amp;h=222&amp;q=90&amp;m=6&amp;p=48&amp;f=jpg&amp;o=f&amp;aim=true" media="(min-width: 540px)"/><source srcSet="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-srcSet="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW1aGdI?ver=1697&amp;w=256&amp;h=210&amp;q=90&amp;m=6&amp;p=48&amp;f=jpg&amp;o=f&amp;aim=true" media="(min-width: 860px)"/><source srcSet="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-srcSet="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW1aGdI?ver=1697&amp;w=242&amp;h=199&amp;q=90&amp;m=6&amp;p=48&amp;f=jpg&amp;o=f&amp;aim=true" media="(min-width: 1084px)"/><source srcSet="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-srcSet="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW1aGdI?ver=1697&amp;w=310&amp;h=254&amp;q=90&amp;m=6&amp;p=48&amp;f=jpg&amp;o=f&amp;aim=true" media="(min-width: 1400px)"/><img src="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW1aGdI?ver=1697&amp;w=256&amp;h=207&amp;q=90&amp;m=6&amp;p=48&amp;f=jpg&amp;o=f&amp;aim=true" class="card-img lazy lazyload blur-up lazypreload" data-sizes="auto" alt=""/></picture></div><div class="card-body px-3 pt-3"><h3 class="base mb-2 h6"><a href="https://www.microsoft.com/es-es/d/mando-inalambrico-xbox-edicion-especial-gold-shadow/8sdtt2lh2t1h" aria-label="Mando inalámbrico Xbox – Edición especial Gold Shadow" data-bi-mto="true">Mando inalámbrico Xbox – Edición especial Gold Shadow</a></h3><p class="sr-only">69,99 €</p><p aria-hidden="true"> <span class="font-weight-semibold">69,99 €</span></p><div class="mb-2"><p><span style="display:block">Disfruta del Mando inalámbrico Xbox: Edición Especial Gold Shadow, que cuenta con un...</span><span class="sr-only">Para obtener más información, selecciona Mando inalámbrico Xbox – Edición especial Gold Shadow.</span></p></div></div></div></div><div class="col slide-item px-2"><div id="card-4-4132ed9437214458ac8519a51997e64f" class="card h-100 material-card depth-4 depth-8-hover pb-4" data-bi-cN="Vinilos para la consola Xbox Series X" data-bi-hN="Accesorios de Xbox" data-bi-bhvr="0" data-bi-cT="Product Card" data-bi-pid="8x08lwws1qh7" data-bi-prdname="Vinilos para la consola Xbox Series X" data-bi-carpos="4" data-bi-pa="Body" data-bi-compnm="Product Placement Carousel: Devices" style="cursor:pointer"><div class="img-flex-auto"><picture><source srcSet="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-srcSet="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW1dwEO?ver=65ae&amp;w=270&amp;h=222&amp;q=90&amp;m=6&amp;p=48&amp;f=jpg&amp;o=f&amp;aim=true" media="(min-width: 540px)"/><source srcSet="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-srcSet="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW1dwEO?ver=65ae&amp;w=256&amp;h=210&amp;q=90&amp;m=6&amp;p=48&amp;f=jpg&amp;o=f&amp;aim=true" media="(min-width: 860px)"/><source srcSet="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-srcSet="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW1dwEO?ver=65ae&amp;w=242&amp;h=199&amp;q=90&amp;m=6&amp;p=48&amp;f=jpg&amp;o=f&amp;aim=true" media="(min-width: 1084px)"/><source srcSet="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-srcSet="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW1dwEO?ver=65ae&amp;w=310&amp;h=254&amp;q=90&amp;m=6&amp;p=48&amp;f=jpg&amp;o=f&amp;aim=true" media="(min-width: 1400px)"/><img src="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW1dwEO?ver=65ae&amp;w=256&amp;h=207&amp;q=90&amp;m=6&amp;p=48&amp;f=jpg&amp;o=f&amp;aim=true" class="card-img lazy lazyload blur-up lazypreload" data-sizes="auto" alt=""/></picture></div><div class="card-body px-3 pt-3"><h3 class="base mb-2 h6"><a href="https://www.microsoft.com/es-es/d/vinilos-para-la-consola-xbox-series-x/8x08lwws1qh7" aria-label="Vinilos para la consola Xbox Series X" data-bi-mto="true">Vinilos para la consola Xbox Series X</a></h3><p class="sr-only">Desde  49,99 €</p><p aria-hidden="true">Desde <span class="font-weight-semibold">49,99 €</span></p><div class="mb-2"><p><span style="display:block">Añade diseños atrevidos a tu consola con vinilos para la consola Xbox Series X. Todos...</span><span class="sr-only">Para obtener más información, selecciona Vinilos para la consola Xbox Series X.</span></p></div></div></div></div><div class="col slide-item px-2"><div id="card-5-4132ed9437214458ac8519a51997e64f" class="card h-100 material-card depth-4 depth-8-hover pb-4" data-bi-cN="Mando inalámbrico Xbox: Stormcloud Vapor Special Edition" data-bi-hN="Accesorios de Xbox" data-bi-bhvr="0" data-bi-cT="Product Card" data-bi-pid="8xhnlbp36g5f" data-bi-prdname="Mando inalámbrico Xbox: Stormcloud Vapor Special Edition" data-bi-carpos="5" data-bi-pa="Body" data-bi-compnm="Product Placement Carousel: Devices" style="cursor:pointer"><div class="img-flex-auto"><picture><source srcSet="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-srcSet="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16JNc?ver=a961&amp;w=270&amp;h=222&amp;q=90&amp;m=6&amp;p=48&amp;f=jpg&amp;o=f&amp;aim=true" media="(min-width: 540px)"/><source srcSet="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-srcSet="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16JNc?ver=a961&amp;w=256&amp;h=210&amp;q=90&amp;m=6&amp;p=48&amp;f=jpg&amp;o=f&amp;aim=true" media="(min-width: 860px)"/><source srcSet="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-srcSet="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16JNc?ver=a961&amp;w=242&amp;h=199&amp;q=90&amp;m=6&amp;p=48&amp;f=jpg&amp;o=f&amp;aim=true" media="(min-width: 1084px)"/><source srcSet="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-srcSet="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16JNc?ver=a961&amp;w=310&amp;h=254&amp;q=90&amp;m=6&amp;p=48&amp;f=jpg&amp;o=f&amp;aim=true" media="(min-width: 1400px)"/><img src="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16JNc?ver=a961&amp;w=256&amp;h=207&amp;q=90&amp;m=6&amp;p=48&amp;f=jpg&amp;o=f&amp;aim=true" class="card-img lazy lazyload blur-up lazypreload" data-sizes="auto" alt=""/></picture></div><div class="card-body px-3 pt-3"><h3 class="base mb-2 h6"><a href="https://www.microsoft.com/es-es/d/mando-inalambrico-xbox-stormcloud-vapor-special-edition/8xhnlbp36g5f" aria-label="Mando inalámbrico Xbox: Stormcloud Vapor Special Edition" data-bi-mto="true">Mando inalámbrico Xbox: Stormcloud Vapor Special Edition</a></h3><p class="sr-only">69,99 €</p><p aria-hidden="true"> <span class="font-weight-semibold">69,99 €</span></p><div class="mb-2"><p><span style="display:block">Disfruta del Mando inalámbrico Xbox – Stormcloud Vapor Edición Especial, que cuenta...</span><span class="sr-only">Para obtener más información, selecciona Mando inalámbrico Xbox: Stormcloud Vapor Special Edition.</span></p></div></div></div></div><div class="col slide-item px-2"><div id="card-6-4132ed9437214458ac8519a51997e64f" class="card h-100 material-card depth-4 depth-8-hover pb-4" data-bi-cN="Mando inalámbrico Xbox – Sunkissed Vibes OPI Edición Especial" data-bi-hN="Accesorios de Xbox" data-bi-bhvr="0" data-bi-cT="Product Card" data-bi-pid="928w7wcrttkm" data-bi-prdname="Mando inalámbrico Xbox – Sunkissed Vibes OPI Edición Especial" data-bi-carpos="6" data-bi-pa="Body" data-bi-compnm="Product Placement Carousel: Devices" style="cursor:pointer"><div class="img-flex-auto"><picture><source srcSet="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-srcSet="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW10vxe?ver=98e7&amp;w=270&amp;h=222&amp;q=90&amp;m=6&amp;p=48&amp;f=jpg&amp;o=f&amp;aim=true" media="(min-width: 540px)"/><source srcSet="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-srcSet="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW10vxe?ver=98e7&amp;w=256&amp;h=210&amp;q=90&amp;m=6&amp;p=48&amp;f=jpg&amp;o=f&amp;aim=true" media="(min-width: 860px)"/><source srcSet="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-srcSet="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW10vxe?ver=98e7&amp;w=242&amp;h=199&amp;q=90&amp;m=6&amp;p=48&amp;f=jpg&amp;o=f&amp;aim=true" media="(min-width: 1084px)"/><source srcSet="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-srcSet="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW10vxe?ver=98e7&amp;w=310&amp;h=254&amp;q=90&amp;m=6&amp;p=48&amp;f=jpg&amp;o=f&amp;aim=true" media="(min-width: 1400px)"/><img src="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW10vxe?ver=98e7&amp;w=256&amp;h=207&amp;q=90&amp;m=6&amp;p=48&amp;f=jpg&amp;o=f&amp;aim=true" class="card-img lazy lazyload blur-up lazypreload" data-sizes="auto" alt=""/></picture></div><div class="card-body px-3 pt-3"><h3 class="base mb-2 h6"><a href="https://www.microsoft.com/es-es/d/mando-inalambrico-xbox-sunkissed-vibes-opi-edicion-especial/928w7wcrttkm" aria-label="Mando inalámbrico Xbox – Sunkissed Vibes OPI Edición Especial" data-bi-mto="true">Mando inalámbrico Xbox – Sunkissed Vibes OPI Edición Espe...</a></h3><p class="sr-only">69,99 €</p><p aria-hidden="true"> <span class="font-weight-semibold">69,99 €</span></p><div class="mb-2"><p><span style="display:block">Mete más presión con el Mando inalámbrico Xbox – Sunkissed Vibes OPI Edición Especial...</span><span class="sr-only">Para obtener más información, selecciona Mando inalámbrico Xbox – Sunkissed Vibes OPI Edición Especial.</span></p></div></div></div></div><div class="col slide-item px-2"><div id="card-7-4132ed9437214458ac8519a51997e64f" class="card h-100 material-card depth-4 depth-8-hover pb-4" data-bi-cN="Mando inalámbrico Xbox – Edición Especial Remix" data-bi-hN="Accesorios de Xbox" data-bi-bhvr="0" data-bi-cT="Product Card" data-bi-pid="8zfbkd2fjmkn" data-bi-prdname="Mando inalámbrico Xbox – Edición Especial Remix" data-bi-carpos="7" data-bi-pa="Body" data-bi-compnm="Product Placement Carousel: Devices" style="cursor:pointer"><div class="img-flex-auto"><picture><source srcSet="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-srcSet="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWYNC8?ver=56c2&amp;w=270&amp;h=222&amp;q=90&amp;m=6&amp;p=48&amp;f=jpg&amp;o=f&amp;aim=true" media="(min-width: 540px)"/><source srcSet="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-srcSet="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWYNC8?ver=56c2&amp;w=256&amp;h=210&amp;q=90&amp;m=6&amp;p=48&amp;f=jpg&amp;o=f&amp;aim=true" media="(min-width: 860px)"/><source srcSet="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-srcSet="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWYNC8?ver=56c2&amp;w=242&amp;h=199&amp;q=90&amp;m=6&amp;p=48&amp;f=jpg&amp;o=f&amp;aim=true" media="(min-width: 1084px)"/><source srcSet="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-srcSet="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWYNC8?ver=56c2&amp;w=310&amp;h=254&amp;q=90&amp;m=6&amp;p=48&amp;f=jpg&amp;o=f&amp;aim=true" media="(min-width: 1400px)"/><img src="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWYNC8?ver=56c2&amp;w=256&amp;h=207&amp;q=90&amp;m=6&amp;p=48&amp;f=jpg&amp;o=f&amp;aim=true" class="card-img lazy lazyload blur-up lazypreload" data-sizes="auto" alt=""/></picture></div><div class="card-header pt-3 px-3"><span class="badge bg-yellow mb-2 product-cards-savings-badge">Ahorra 12,50 € del PVPR</span></div><div class="card-body px-3"><h3 class="base mb-2 h6"><a href="https://www.microsoft.com/es-es/d/mando-inalambrico-xbox-edicion-especial-remix/8zfbkd2fjmkn" aria-label="Mando inalámbrico Xbox – Edición Especial Remix" data-bi-mto="true">Mando inalámbrico Xbox – Edición Especial Remix</a></h3><p class="sr-only">Originalmente 84,99 € ahora 72,49 €</p><p aria-hidden="true"> <span class="text-line-through text-muted">84,99 €</span> <span class="font-weight-semibold">72,49 €</span></p><div class="mb-2"><p><span style="display:block">Disfruta del Mando inalámbrico Xbox – Edición Especial Remix, que está hecho de...</span><span class="sr-only">Para obtener más información, selecciona Mando inalámbrico Xbox – Edición Especial Remix.</span></p></div></div></div></div><div class="col slide-item px-2"><div id="card-8-4132ed9437214458ac8519a51997e64f" class="card h-100 material-card depth-4 depth-8-hover pb-4" data-bi-cN="Mando inalámbrico Xbox – Stellar Shift Special Edition" data-bi-hN="Accesorios de Xbox" data-bi-bhvr="0" data-bi-cT="Product Card" data-bi-pid="94fbjc7h0h6h" data-bi-prdname="Mando inalámbrico Xbox – Stellar Shift Special Edition" data-bi-carpos="8" data-bi-pa="Body" data-bi-compnm="Product Placement Carousel: Devices" style="cursor:pointer"><div class="img-flex-auto"><picture><source srcSet="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-srcSet="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE5dP2W?ver=3ced&amp;w=270&amp;h=222&amp;q=90&amp;m=6&amp;p=48&amp;f=jpg&amp;o=f&amp;aim=true" media="(min-width: 540px)"/><source srcSet="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-srcSet="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE5dP2W?ver=3ced&amp;w=256&amp;h=210&amp;q=90&amp;m=6&amp;p=48&amp;f=jpg&amp;o=f&amp;aim=true" media="(min-width: 860px)"/><source srcSet="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-srcSet="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE5dP2W?ver=3ced&amp;w=242&amp;h=199&amp;q=90&amp;m=6&amp;p=48&amp;f=jpg&amp;o=f&amp;aim=true" media="(min-width: 1084px)"/><source srcSet="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-srcSet="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE5dP2W?ver=3ced&amp;w=310&amp;h=254&amp;q=90&amp;m=6&amp;p=48&amp;f=jpg&amp;o=f&amp;aim=true" media="(min-width: 1400px)"/><img src="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE5dP2W?ver=3ced&amp;w=256&amp;h=207&amp;q=90&amp;m=6&amp;p=48&amp;f=jpg&amp;o=f&amp;aim=true" class="card-img lazy lazyload blur-up lazypreload" data-sizes="auto" alt=""/></picture></div><div class="card-body px-3 pt-3"><h3 class="base mb-2 h6"><a href="https://www.microsoft.com/es-es/d/mando-inalambrico-xbox-stellar-shift-special-edition/94fbjc7h0h6h" aria-label="Mando inalámbrico Xbox – Stellar Shift Special Edition" data-bi-mto="true">Mando inalámbrico Xbox – Stellar Shift Special Edition</a></h3><p class="sr-only">69,99 €</p><p aria-hidden="true"> <span class="font-weight-semibold">69,99 €</span></p><div class="mb-2"><p><span style="display:block">Disfruta del Mando inalámbrico Xbox – Stellar Shift Special Edition, con cambio de...</span><span class="sr-only">Para obtener más información, selecciona Mando inalámbrico Xbox – Stellar Shift Special Edition.</span></p></div></div></div></div><div class="col slide-item px-2"><div id="card-9-4132ed9437214458ac8519a51997e64f" class="card h-100 material-card depth-4 depth-8-hover pb-4" data-bi-cN="Mando inalámbrico Xbox – Mineral Camo Special Edition" data-bi-hN="Accesorios de Xbox" data-bi-bhvr="0" data-bi-cT="Product Card" data-bi-pid="93jtnp21rvxn" data-bi-prdname="Mando inalámbrico Xbox – Mineral Camo Special Edition" data-bi-carpos="9" data-bi-pa="Body" data-bi-compnm="Product Placement Carousel: Devices" style="cursor:pointer"><div class="img-flex-auto"><picture><source srcSet="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-srcSet="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE54DVo?ver=b6b5&amp;w=270&amp;h=222&amp;q=90&amp;m=6&amp;p=48&amp;f=jpg&amp;o=f&amp;aim=true" media="(min-width: 540px)"/><source srcSet="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-srcSet="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE54DVo?ver=b6b5&amp;w=256&amp;h=210&amp;q=90&amp;m=6&amp;p=48&amp;f=jpg&amp;o=f&amp;aim=true" media="(min-width: 860px)"/><source srcSet="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-srcSet="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE54DVo?ver=b6b5&amp;w=242&amp;h=199&amp;q=90&amp;m=6&amp;p=48&amp;f=jpg&amp;o=f&amp;aim=true" media="(min-width: 1084px)"/><source srcSet="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-srcSet="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE54DVo?ver=b6b5&amp;w=310&amp;h=254&amp;q=90&amp;m=6&amp;p=48&amp;f=jpg&amp;o=f&amp;aim=true" media="(min-width: 1400px)"/><img src="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE54DVo?ver=b6b5&amp;w=256&amp;h=207&amp;q=90&amp;m=6&amp;p=48&amp;f=jpg&amp;o=f&amp;aim=true" class="card-img lazy lazyload blur-up lazypreload" data-sizes="auto" alt=""/></picture></div><div class="card-body px-3 pt-3"><h3 class="base mb-2 h6"><a href="https://www.microsoft.com/es-es/d/mando-inalambrico-xbox-mineral-camo-special-edition/93jtnp21rvxn" aria-label="Mando inalámbrico Xbox – Mineral Camo Special Edition" data-bi-mto="true">Mando inalámbrico Xbox – Mineral Camo Special Edition</a></h3><p class="sr-only">69,99 €</p><p aria-hidden="true"> <span class="font-weight-semibold">69,99 €</span></p><div class="mb-2"><p><span style="display:block">Disfruta del Mando inalámbrico Xbox – Mineral Camo Special Edition, que cuenta con un...</span><span class="sr-only">Para obtener más información, selecciona Mando inalámbrico Xbox – Mineral Camo Special Edition.</span></p></div></div></div></div></div></div></section></div></div><a href="#controls-4132ed9437214458ac8519a51997e64f" class="btn btn-link sr-only-focusable w-100 position-absolute bottom-0">Volver a los controles Siguiente y Anterior</a></div></section><a id="skip-4132ed9437214458ac8519a51997e64f" class="sr-only" tabindex="-1">Fin de<!-- --> <!-- -->Accesorios de Xbox</a></div></div></div></div>
                        
                        
                    
                
                
                        
                        
                    
            

            
        
    



    <div class="cq-placeholder" data-emptytext="ProductCards"></div>




    
        
    



    
</div>
<div class="areaheading dynamic-price-container mb-4 aem-GridColumn aem-GridColumn--default--12" data-component-id="60bf9066c3eebdbf5a6e3f039c9b54ab">
    
    
    
    
    
    
    
    
    
    
        
            
    
    <script type="text/javascript" src="/etc.clientlibs/microsoft/components/content/areaheading/v1/areaheading/clientlibs/site.min.ACSHASHd60230a0d64115fa0302297053d89926.js" defer></script>


        
        
            
    



        

        <div id="areaheading-uid4485" data-componentName="areaheading-uid4485" class="area-heading text-md-center  material-surface" data-automation-test-id="Areaheading-areaheading-uid4485" style="background-color: null">
            
            
      

            <div class="row">
                
                    <div class="col-12 col-md-8 mx-auto" data-automation-test-id="AreaheadingHeadingText-areaheading-uid4485" style="color:">
                        
                        
                            
                                
    <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/newspaper-icon-64x64?fmt=png-alpha" data-automation-test-id="AreaheadingImage-areaheading-uid4485" class="mb-3" alt="Icono de la newsletter"/>

                            
                            
    <h2 data-automation-test-id="heading-areaheading-uid4485" class=" h3    ">
            
    
        
        
            
            
                <p>Mantente al día</p>

            
        
    
    

    </h2>

                        
                    </div>
                
                
                    <div class="col-12 col-md-8 col-xl-6 mx-auto" data-automation-test-id="AreaheadingSubtext-areaheading-uid4485">
                        
                        
                            <p class=" mb-3" data-automation-test-id="AreaheadingDesctext-areaheading-uid4485"> 
                                
    
        
        
            
            
                Suscríbete a nuestra newsletter y recibe información sobre novedades de productos, ofertas especiales y códigos promocionales.
            
        
    
    

                            </p>
                        
                        
                            

    
    <div class="link-group" data-automation-test-id="LinkGroupDiv-">
        
        
            
    
    
        
    
    

    
        <a data-bi-cn="Suscríbete ahora" data-bi-ecn="Suscríbete ahora" data-bi-ct="cta" data-bi-pa="body" class=" cta   " data-target-uri="https://www.microsoft.com/es-es/store/b/email-signup" data-bi-bhvr="0" data-automation-test-id="cta1-areaheading-uid4485" aria-label="Click para inscribirte a la newsletter" target="_self" data-bi-ehn="&lt;p>Mantente al día&lt;/p>
" data-bi-hn="&lt;p>Mantente al día&lt;/p>
" data-bi-compnm="Area Heading: with Heading, Paragraph, Image, Links" href="https://www.microsoft.com/es-es/store/b/email-signup">
            
            Suscríbete ahora
             <span class="glyph" aria-hidden="true"></span> 
        </a>
    

    

    

    

    


        
    </div>


                        
                    </div>
                
            </div>
        </div>
        
    
</div>

          
     </div>
</div></div>

    
</div>
</div>
<div class="responsivegrid aem-GridColumn aem-GridColumn--default--12">


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="layout-container responsivegrid aem-GridColumn aem-GridColumn--default--12" data-component-id="51e927945f39700e952adb9bd3dc97e7">





<div class="aem-Grid aem-Grid--12 aem-Grid--default--12  grid-image-layout-container-uidcf05  heading-bg-color-layout-container-uidcf05" data-automation-test-id="layout-container-uidcf05">
          <style data-automation-test-id="headingColor-layout-container-uidcf05">
                    .heading-bg-color-layout-container-uidcf05{
                         background-color:  !important;
                    }
          </style>
     
     <div class="container" id="layout-container-uidcf05" data-componentName="layout-container-uidcf05">
          
          
          
          
     </div>
</div></div>

    
</div>
</div>
<div class="responsivegrid aem-GridColumn aem-GridColumn--default--12">


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="layout-container responsivegrid aem-GridColumn aem-GridColumn--default--12" data-component-id="51e927945f39700e952adb9bd3dc97e7">





<div class="aem-Grid aem-Grid--12 aem-Grid--default--12  grid-image-layout-container-uide52c  heading-bg-color-layout-container-uide52c" data-automation-test-id="layout-container-uide52c">
          <style data-automation-test-id="headingColor-layout-container-uide52c">
                    .heading-bg-color-layout-container-uide52c{
                         background-color:  !important;
                    }
          </style>
     
     <div class="container" id="layout-container-uide52c" data-componentName="layout-container-uide52c">
          
          
          
          
     </div>
</div></div>

    
</div>
</div>
<div class="responsivegrid mt-0 mb-0 aem-GridColumn aem-GridColumn--default--12">


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="layout-container responsivegrid aem-GridColumn aem-GridColumn--default--12" data-component-id="51e927945f39700e952adb9bd3dc97e7">





<div class="aem-Grid aem-Grid--12 aem-Grid--default--12  grid-image-layout-container-uidf6db  heading-bg-color-layout-container-uidf6db" data-automation-test-id="layout-container-uidf6db">
          <style data-automation-test-id="headingColor-layout-container-uidf6db">
                    .heading-bg-color-layout-container-uidf6db{
                         background-color:  !important;
                    }
          </style>
     
     <div class="container" id="layout-container-uidf6db" data-componentName="layout-container-uidf6db">
          
          
          <div class="experiencefragment mt-5 aem-GridColumn aem-GridColumn--default--12" data-component-id="de24b40c7bf8f27f84caf1ea60652979">

    
    




<div class="cmp-experiencefragment">

    



<div class="xf-content-height">
    


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="areaheading dynamic-price-container mb-4 aem-GridColumn aem-GridColumn--default--12" data-component-id="60bf9066c3eebdbf5a6e3f039c9b54ab">
    
    
    
    
    
    
    
    
    
    
        
            
    
    <script type="text/javascript" src="/etc.clientlibs/microsoft/components/content/areaheading/v1/areaheading/clientlibs/site.min.ACSHASHd60230a0d64115fa0302297053d89926.js" defer></script>


        
        
            
    
<link rel="stylesheet" href="/etc.clientlibs/microsoft/components/content/areaheading/v1/areaheading/clientlibs/site.min.ACSHASH8396009a793fda25f0ad1c495ec773f4.css" type="text/css">



        

        <div id="areaheading-uidb966" data-componentName="areaheading-uidb966" class="area-heading   " data-automation-test-id="Areaheading-areaheading-uidb966" style="background-color: null">
            
            
      

            <div class="row">
                
                    <div class="col-12 col-md-8 " data-automation-test-id="AreaheadingHeadingText-areaheading-uidb966" style="color:">
                        
                        
                            
                            
    <h2 data-automation-test-id="heading-areaheading-uidb966">
            
    
        
        
            
            
                <p>¿Por qué comprar desde Microsoft Store?</p>

            
        
    
    

    </h2>

                        
                    </div>
                
                
                    <div class="col-12 col-md-8 col-xl-6 " data-automation-test-id="AreaheadingSubtext-areaheading-uidb966">
                        
                        
                            <p data-automation-test-id="AreaheadingDesctext-areaheading-uidb966"> 
                                
    
        
        
            
            
                Ofrecemos envíos y devoluciones gratis, dinero en efectivo para dispositivos usados que cumplan los requisitos, así como opciones de pago flexibles. Además, si rebajamos el precio de un producto físico dentro de los 60 días posteriores a la entrega, realizaremos un ajuste único de precio.
            
        
    
    

                            </p>
                        
                        
                    </div>
                
            </div>
        </div>
        
    
</div>
<div class="content-card carouselbase carousel aem-GridColumn aem-GridColumn--default--12" data-component-id="e4caa97101f9f7cf8317c819b353e6ed">

    




    
        
    
    <script type="text/javascript" src="/etc.clientlibs/microsoft/components/content/content-card/v1/content-card/clientlibs/site.min.ACSHASH92ba1cb9da3dd68605f38095fc34ba98.js" defer></script>


    



	
    
<link rel="stylesheet" href="/etc.clientlibs/microsoft/components/content/content-card/v1/content-card/clientlibs/site.min.ACSHASHc033b611d87d511847501ade7913431f.css" type="text/css">





<section id="content-card-uid9a4f" data-componentName="content-card-uid9a4f">
    <div class="row row-cols-1   row-cols-sm-2 row-cols-lg-4">
        
            
                
    

    
        
    
<link rel="stylesheet" href="/etc.clientlibs/microsoft/components/content/content-card-item/v3/content-card-item/clientlibs/site.min.ACSHASH7e98ce1d1fb3c40effe0a57430c1371c.css" type="text/css">
<link rel="stylesheet" href="/etc.clientlibs/microsoft/components/content/content-card-item/v1/content-card-item/clientlibs/site.min.ACSHASH5eb7940588edeff2b13a25b0bd1cb864.css" type="text/css">



    

    
        
        
    
    
    
    
    
    
    
    
        <div class="col 
                    mb-5 mb-lg-0
                    ">
            <div class="card material-card h-100 " data-bi-cT="Content Card" data-bi-pA="body" data-bi-ehN="Envíos y devoluciones gratis" data-bi-assetid="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/MSSTORE-Value-Prop-Free-Shipping?wid=515&amp;hei=293&amp;fit=crop" data-bi-bhvr="0" data-bi-hN="Envíos y devoluciones gratis" data-bi-compNm="Content card vertical 4 up - depth">
                
                    
	
		<picture>
			<source srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/MSSTORE-Value-Prop-Free-Shipping?wid=380&amp;hei=213&amp;fit=crop" media="(min-width: 1400px)"/>
			<source srcset=" https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/MSSTORE-Value-Prop-Free-Shipping?wid=297&amp;hei=167&amp;fit=crop" media="(min-width: 1084px)"/>
			<source srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/MSSTORE-Value-Prop-Free-Shipping?wid=517&amp;hei=293&amp;fit=crop" media="(min-width: 860px)"/>
			<source srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/MSSTORE-Value-Prop-Free-Shipping?wid=406&amp;hei=230&amp;fit=crop" media="(min-width: 540px)"/>
			<img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/MSSTORE-Value-Prop-Free-Shipping?wid=406&hei=230&fit=crop" loading="lazy" class="card-img" alt/>
		</picture>
	
	

                    
                
                    <!-- If any of the cards in a group contain a badge, all cards should include a card header -->
                    
                    <div class="card-body px-4 pt-4">
                        
                            <h3 class="h3    ">
                                Envíos y devoluciones gratis
                            </h3>
                        
                        
                            <p> Obtén envíos gratis sin compra mínima. Además, disfruta de devoluciones durante 60 días de productos físicos de Microsoft. </p>
                        
                    </div>
                    <div class="card-footer pt-3 px-4 pb-4">
                        

    
    <div class="link-group" data-automation-test-id="LinkGroupDiv-">
        
        
            
    
    
        
    
    

    
        <a data-bi-cn="Información sobre los envíos" data-bi-ecn="Información sobre los envíos" data-bi-ct="cta" data-bi-pa="body" class=" cta   " data-target-uri="https://support.microsoft.com/ES-ES/help/4000644/microsoft-store-shipping-options-costs-delivery-times" data-bi-assetid="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/MSSTORE-Value-Prop-Free-Shipping?wid=515&amp;hei=293&amp;fit=crop" data-bi-bhvr="0" data-automation-test-id="cta1-" aria-label="Más información sobre los envíos y devoluciones gratis" target="_self" data-bi-ehn="Envíos y devoluciones gratis" data-bi-hn="Envíos y devoluciones gratis" data-bi-compnm="Content card vertical 4 up - depth" href="https://support.microsoft.com/ES-ES/help/4000644/microsoft-store-shipping-options-costs-delivery-times">
            
            Información sobre los envíos
             <span class="glyph" aria-hidden="true"></span> 
        </a>
    

    

    

    

    


        
            
    
    
        
    
    

    
        <a data-bi-cn="Información sobre las devoluciones " data-bi-ecn="Información sobre las devoluciones " data-bi-ct="cta" data-bi-pa="body" class=" cta   " data-target-uri="https://support.microsoft.com/ES-ES/help/10558/microsoft-store-returning-items-bought-for-exchange-refund" data-bi-assetid="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/MSSTORE-Value-Prop-Free-Shipping?wid=515&amp;hei=293&amp;fit=crop" data-bi-bhvr="0" data-automation-test-id="cta2-" aria-label="Más información sobre devoluciones" target="_self" data-bi-ehn="Envíos y devoluciones gratis" data-bi-hn="Envíos y devoluciones gratis" data-bi-compnm="Content card vertical 4 up - depth" href="https://support.microsoft.com/ES-ES/help/10558/microsoft-store-returning-items-bought-for-exchange-refund">
            
            Información sobre las devoluciones 
             <span class="glyph" aria-hidden="true"></span> 
        </a>
    

    

    

    

    


        
    </div>


                    </div>
            </div>
        </div>
    

    
    
        
    
    <script type="text/javascript" src="/etc.clientlibs/microsoft/components/content/content-card-item/v3/content-card-item/clientlibs/site.min.ACSHASHd41d8cd98f00b204e9800998ecf8427e.js" defer></script><script type="text/javascript" src="/etc.clientlibs/microsoft/components/content/content-card-item/v1/content-card-item/clientlibs/site.min.ACSHASHd41d8cd98f00b204e9800998ecf8427e.js" defer></script>


    



            
            
        
            
                
    

    
        
    



    

    
        
        
    
    
    
    
    
    
    
    
        <div class="col 
                    mb-5 mb-lg-0
                    ">
            <div class="card material-card h-100 " data-target-uri="https://support.microsoft.com/ES-ES/account-billing/contact-microsoft-store-support-4f615f2a-6bbd-fd69-6695-ae213d63eef0" data-bi-ecN="Más información " data-bi-cT="Content Card" data-bi-pA="body" data-bi-ehN="Precio mínimo garantizado" data-bi-assetid="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-VP-XBox-Reward-Fluent-Icon-Charcool-Light-Gray?wid=515&amp;hei=293&amp;fit=crop" data-bi-bhvr="0" data-bi-hN="Precio mínimo garantizado" data-bi-compNm="Content card vertical 4 up - depth" data-bi-cN="Más información ">
                
                    
	
		<picture>
			<source srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-VP-XBox-Reward-Fluent-Icon-Charcool-Light-Gray?wid=380&amp;hei=213&amp;fit=crop" media="(min-width: 1400px)"/>
			<source srcset=" https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-VP-XBox-Reward-Fluent-Icon-Charcool-Light-Gray?wid=297&amp;hei=167&amp;fit=crop" media="(min-width: 1084px)"/>
			<source srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-VP-XBox-Reward-Fluent-Icon-Charcool-Light-Gray?wid=517&amp;hei=293&amp;fit=crop" media="(min-width: 860px)"/>
			<source srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-VP-XBox-Reward-Fluent-Icon-Charcool-Light-Gray?wid=406&amp;hei=230&amp;fit=crop" media="(min-width: 540px)"/>
			<img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-VP-XBox-Reward-Fluent-Icon-Charcool-Light-Gray?wid=406&hei=230&fit=crop" loading="lazy" class="card-img" alt/>
		</picture>
	
	

                    
                
                    <!-- If any of the cards in a group contain a badge, all cards should include a card header -->
                    
                    <div class="card-body px-4 pt-4">
                        
                            <h3 class="h3    ">
                                Precio mínimo garantizado
                            </h3>
                        
                        
                            <p> Si compras un producto físico en Microsoft Store y rebajamos su precio en un plazo de 60 días, contacta con nosotros y te reembolsamos la diferencia. Se aplican términos. </p>
                        
                    </div>
                    <div class="card-footer pt-3 px-4 pb-4">
                        

    
    <div class="link-group" data-automation-test-id="LinkGroupDiv-">
        
        
            
    
    
        
    
    

    
        <a data-bi-cn="Más información " data-bi-ecn="Más información " data-bi-ct="cta" data-bi-pa="body" class=" cta   " data-target-uri="https://support.microsoft.com/ES-ES/account-billing/contact-microsoft-store-support-4f615f2a-6bbd-fd69-6695-ae213d63eef0" data-bi-assetid="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-VP-XBox-Reward-Fluent-Icon-Charcool-Light-Gray?wid=515&amp;hei=293&amp;fit=crop" data-bi-bhvr="0" data-automation-test-id="cta1-" aria-label="Más información sobre el precio minimo garantizado" target="_self" data-bi-ehn="Precio mínimo garantizado" data-bi-hn="Precio mínimo garantizado" data-bi-compnm="Content card vertical 4 up - depth" href="https://support.microsoft.com/ES-ES/account-billing/contact-microsoft-store-support-4f615f2a-6bbd-fd69-6695-ae213d63eef0">
            
            Más información 
             <span class="glyph" aria-hidden="true"></span> 
        </a>
    

    

    

    

    


        
    </div>


                    </div>
            </div>
        </div>
    

    
    
        
    
    <script type="text/javascript" src="/etc.clientlibs/microsoft/components/content/content-card-item/v3/content-card-item/clientlibs/site.min.ACSHASHd41d8cd98f00b204e9800998ecf8427e.js" defer></script><script type="text/javascript" src="/etc.clientlibs/microsoft/components/content/content-card-item/v1/content-card-item/clientlibs/site.min.ACSHASHd41d8cd98f00b204e9800998ecf8427e.js" defer></script>


    



            
            
        
            
                
    

    
        
    



    

    
        
        
    
    
    
    
    
    
    
    
        <div class="col 
                    
                    mb-5 mb-sm-0">
            <div class="card material-card h-100 " data-target-uri="https://www.microsoft.com/es-es/store/b/microsoft-complete" data-bi-ecN="Más información sobre Microsoft Complete" data-bi-cT="Content Card" data-bi-pA="body" data-bi-ehN="Compra y juega con total confianza" data-bi-assetid="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Icon-Glyph-Value-Prop-Security-Shield?wid=515&amp;hei=293&amp;fit=crop" data-bi-bhvr="0" data-bi-hN="Compra y juega con total confianza" data-bi-compNm="Content card vertical 4 up - depth" data-bi-cN="Más información sobre Microsoft Complete">
                
                    
	
		<picture>
			<source srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Icon-Glyph-Value-Prop-Security-Shield?wid=380&amp;hei=213&amp;fit=crop" media="(min-width: 1400px)"/>
			<source srcset=" https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Icon-Glyph-Value-Prop-Security-Shield?wid=297&amp;hei=167&amp;fit=crop" media="(min-width: 1084px)"/>
			<source srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Icon-Glyph-Value-Prop-Security-Shield?wid=517&amp;hei=293&amp;fit=crop" media="(min-width: 860px)"/>
			<source srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Icon-Glyph-Value-Prop-Security-Shield?wid=406&amp;hei=230&amp;fit=crop" media="(min-width: 540px)"/>
			<img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Icon-Glyph-Value-Prop-Security-Shield?wid=406&hei=230&fit=crop" loading="lazy" class="card-img" alt/>
		</picture>
	
	

                    
                
                    <!-- If any of the cards in a group contain a badge, all cards should include a card header -->
                    
                    <div class="card-body px-4 pt-4">
                        
                            <h3 class="h3    ">
                                Compra y juega con total confianza
                            </h3>
                        
                        
                            <p> Juega sin preocupaciones con hasta tres años de protección y soporte ampliados, incluida cobertura por daños accidentales, para la consola Xbox y el mando incluido. </p>
                        
                    </div>
                    <div class="card-footer pt-3 px-4 pb-4">
                        

    
    <div class="link-group" data-automation-test-id="LinkGroupDiv-">
        
        
            
    
    
        
    
    

    
        <a data-bi-cn="Más información sobre Microsoft Complete" data-bi-ecn="Más información sobre Microsoft Complete" data-bi-ct="cta" data-bi-pa="body" class=" cta   " data-target-uri="https://www.microsoft.com/es-es/store/b/microsoft-complete" data-bi-assetid="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Icon-Glyph-Value-Prop-Security-Shield?wid=515&amp;hei=293&amp;fit=crop" data-bi-bhvr="0" data-automation-test-id="cta1-" aria-label="Más información sobre Microsoft Complete" target="_self" data-bi-ehn="Compra y juega con total confianza" data-bi-hn="Compra y juega con total confianza" data-bi-compnm="Content card vertical 4 up - depth" href="https://www.microsoft.com/es-es/store/b/microsoft-complete">
            
            Más información sobre Microsoft Complete
             <span class="glyph" aria-hidden="true"></span> 
        </a>
    

    

    

    

    


        
    </div>


                    </div>
            </div>
        </div>
    

    
    
        
    
    <script type="text/javascript" src="/etc.clientlibs/microsoft/components/content/content-card-item/v3/content-card-item/clientlibs/site.min.ACSHASHd41d8cd98f00b204e9800998ecf8427e.js" defer></script><script type="text/javascript" src="/etc.clientlibs/microsoft/components/content/content-card-item/v1/content-card-item/clientlibs/site.min.ACSHASHd41d8cd98f00b204e9800998ecf8427e.js" defer></script>


    



            
            
        
            
                
    

    
        
    



    

    
        
        
    
    
    
    
    
    
    
    
        <div class="col 
                    
                    ">
            <div class="card material-card h-100 " data-target-uri="https://support.microsoft.com/es-es/account-billing/find-and-install-your-microsoft-downloads-from-microsoft-store-9ee788eb-280a-7d3e-fa8e-0418c71af495?icid=Cat-Xbox-VP4-Downloads" data-bi-ecN="Más información sobre las descargas digitales" data-bi-cT="Content Card" data-bi-pA="body" data-bi-ehN="Descargas instantáneas de juegos" data-bi-assetid="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/MSSTORE-Value-Prop-Downloads?wid=515&amp;hei=293&amp;fit=crop" data-bi-bhvr="0" data-bi-hN="Descargas instantáneas de juegos" data-bi-compNm="Content card vertical 4 up - depth" data-bi-cN="Más información sobre las descargas digitales">
                
                    
	
		<picture>
			<source srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/MSSTORE-Value-Prop-Downloads?wid=380&amp;hei=213&amp;fit=crop" media="(min-width: 1400px)"/>
			<source srcset=" https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/MSSTORE-Value-Prop-Downloads?wid=297&amp;hei=167&amp;fit=crop" media="(min-width: 1084px)"/>
			<source srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/MSSTORE-Value-Prop-Downloads?wid=517&amp;hei=293&amp;fit=crop" media="(min-width: 860px)"/>
			<source srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/MSSTORE-Value-Prop-Downloads?wid=406&amp;hei=230&amp;fit=crop" media="(min-width: 540px)"/>
			<img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/MSSTORE-Value-Prop-Downloads?wid=406&hei=230&fit=crop" loading="lazy" class="card-img" alt/>
		</picture>
	
	

                    
                
                    <!-- If any of the cards in a group contain a badge, all cards should include a card header -->
                    
                    <div class="card-body px-4 pt-4">
                        
                            <h3 class="h3    ">
                                Descargas instantáneas de juegos
                            </h3>
                        
                        
                            <p> Descarga juegos de Xbox y empieza a jugar con ellos en tu consola Xbox o PC en el momento de su lanzamiento.  </p>
                        
                    </div>
                    <div class="card-footer pt-3 px-4 pb-4">
                        

    
    <div class="link-group" data-automation-test-id="LinkGroupDiv-">
        
        
            
    
    
        
    
    

    
        <a data-bi-cn="Más información sobre las descargas digitales" data-bi-ecn="Más información sobre las descargas digitales" data-bi-ct="cta" data-bi-pa="body" class=" cta   " data-target-uri="https://support.microsoft.com/es-es/account-billing/find-and-install-your-microsoft-downloads-from-microsoft-store-9ee788eb-280a-7d3e-fa8e-0418c71af495?icid=Cat-Xbox-VP4-Downloads" data-bi-assetid="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/MSSTORE-Value-Prop-Downloads?wid=515&amp;hei=293&amp;fit=crop" data-bi-bhvr="0" data-automation-test-id="cta1-" target="_self" data-bi-ehn="Descargas instantáneas de juegos" data-bi-hn="Descargas instantáneas de juegos" data-bi-compnm="Content card vertical 4 up - depth" href="https://support.microsoft.com/es-es/account-billing/find-and-install-your-microsoft-downloads-from-microsoft-store-9ee788eb-280a-7d3e-fa8e-0418c71af495?icid=Cat-Xbox-VP4-Downloads">
            
            Más información sobre las descargas digitales
             <span class="glyph" aria-hidden="true"></span> 
        </a>
    

    

    

    

    


        
    </div>


                    </div>
            </div>
        </div>
    

    
    
        
    
    <script type="text/javascript" src="/etc.clientlibs/microsoft/components/content/content-card-item/v3/content-card-item/clientlibs/site.min.ACSHASHd41d8cd98f00b204e9800998ecf8427e.js" defer></script><script type="text/javascript" src="/etc.clientlibs/microsoft/components/content/content-card-item/v1/content-card-item/clientlibs/site.min.ACSHASHd41d8cd98f00b204e9800998ecf8427e.js" defer></script>


    



            
            
        
    </div>
    
</section>



</div>

    
</div>

</div></div>

    <span style="display:none">
        
        
                
                    
                
            
    </span>


    
</div>
<div class="experiencefragment aem-GridColumn aem-GridColumn--default--12" data-component-id="de24b40c7bf8f27f84caf1ea60652979">

    
    




<div class="cmp-experiencefragment">

    



<div class="xf-content-height">
    


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="footnotes-component aem-GridColumn aem-GridColumn--default--12" data-component-id="5aae1cc391ba1be81238febb88e2ef7b">

    



    
    
<link rel="stylesheet" href="/etc.clientlibs/microsoft/components/content/footnotes/v1/footnotes/clientlibs/site.min.ACSHASH40203e0bb3e24fd4626d84825f55e9c5.css" type="text/css">





       
    <div id="footnotes-uid844d" data-componentName="footnotes-uid844d" class="row " style="background-color: null">
    <section class="col-12 mt-5  " aria-label="servicios y garantías para Xbox.">
        <ul class="list-unstyled small mb-0">
            <li class="py-2">
                
                <span><strong>Envíos y devoluciones gratis</strong>: Disponible para productos físicos que cumplan los requisitos adquiridos en Microsoft Store en línea y en Microsoft Experience Centers en algunos mercados. El proceso de devolución debe iniciarse dentro de los 60 días posteriores a la recepción del producto por parte del cliente. Límite de 5 devoluciones de productos por cliente que cumpla los requisitos por compra. No incluye Surface Hub, HoloLens ni Windows DevKit. Se aplica la política de devolución correspondiente. Para las compras realizadas en Microsoft Store, consulta los <a href="https://www.microsoft.com/es-es/store/b/terms-of-sale" class="ms-rte-link"><strong>términos de venta de Microsoft</strong></a> aplicables para obtener más información. En el caso de las compras realizadas en un Microsoft Experience Center, consulta el recibo para obtener más información. Microsoft se reserva el derecho a modificar o interrumpir las ofertas en cualquier momento. </span>
            </li>
<li class="py-2">
                
                <span><strong>Precio mínimo garantizado</strong>: Válido para compras de productos físicos realizadas en Microsoft Store con una cuenta Microsoft válida y en los Microsoft Experience Centers en algunos mercados durante 60 días a partir de la fecha en que el cliente reciba el producto (&quot;Período de la oferta&quot;). No incluye Surface Hub, HoloLens ni Windows DevKit. El cliente solo tiene derecho si el precio del producto comprado baja durante el Período de la oferta y hay existencias del mismo. Para las compras realizadas en Microsoft Store, contacta con el <a href="https://support.microsoft.com/es-es/account-billing/contact-microsoft-store-support-4f615f2a-6bbd-fd69-6695-ae213d63eef0" class="ms-rte-link"><strong>Departamento de Ventas y Soporte de Microsoft Store</strong></a> e indica la información de tu cuenta Microsoft y cualquier otra información que te solicite el representante. Para las compras realizadas en un Microsoft Experience Center, el cliente debe ir al centro con el recibo.  El ajuste de precio se proporcionará de la misma forma que el método de compra. Límite de 1 ajuste de precio por producto. Los ajustes de precio solo se aplican al precio de compra y no incluyen impuestos, gastos de envío ni otros cargos. Microsoft se reserva el derecho a modificar o interrumpir las ofertas en cualquier momento. </span>
            </li>
<li class="py-2">
                
                <span><p><strong>Regala con confianza</strong>: Política de ampliación de los plazos de devolución durante las fiestas disponible con productos físicos que cumplan los requisitos adquiridos entre el 31/10/23 y el 1/12/23 en Microsoft Store en línea y en Microsoft Experience Centers en algunos mercados. Las compras se pueden devolver hasta el 31 de enero de 2024. Límite de 5 devoluciones de productos por cliente que cumpla los requisitos y por compra. No incluye Surface Hub, HoloLens ni Windows DevKit. Se aplica la política de devoluciones correspondiente. Para las compras realizadas en Microsoft Store, consulta los <a href="https://www.microsoft.com/ES-ES/store/b/terms-of-sale"><strong>términos de venta de Microsoft</strong></a> aplicables para obtener más información. En el caso de las compras realizadas en un Microsoft Experience Center, consulta el recibo para obtener más información. Microsoft se reserva el derecho de modificar o interrumpir las ofertas en cualquier momento.</p>
<p><strong>Promesa de precio durante toda la temporada: </strong>La garantía de precio ampliada durante las fiestas es válida para las compras de productos físicos comerciales y de consumo que cumplan los requisitos realizadas en Microsoft Store y en Microsoft Experience Centers en algunos mercados entre el 31/10/23 y el 1/12/23. El ajuste de precio se puede solicitar hasta el 31 de enero de 2024. El cliente solo tiene derecho al mismo si hay existencias del producto para su compra en Microsoft Store o en un Microsoft Experience Centre. El cliente debe contactar con Microsoft para solicitar el ajuste de precio. Para las compras realizadas en Microsoft Store, contacta con el <a href="https://support.microsoft.com/ES-ES/account-billing/contact-microsoft-store-support-4f615f2a-6bbd-fd69-6695-ae213d63eef0"><strong>departamento de ventas y soporte técnico de Microsoft Store</strong></a> e indica la información de tu cuenta Microsoft y cualquier otra información que te solicite un representante. En el caso de las compras realizadas en un Microsoft Experience Centre, debes volver al centro con el recibo. Límite de 1 ajuste de precio en total por producto. No incluye Surface Hub, HoloLens ni Windows DevKit.</p>
 </span>
            </li>

        </ul>
    </section>
    </div>



    
    
<script src="/etc.clientlibs/microsoft/components/content/footnotes/v1/footnotes/clientlibs/site.min.ACSHASH19141611645452b56db9617f068dea98.js"></script>



</div>

    
</div>

</div></div>

    <span style="display:none">
        
        
                
                    
                
            
    </span>


    
</div>

          
     </div>
</div></div>

    
</div>
</div>
<div class="responsivegrid aem-GridColumn aem-GridColumn--default--12">


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    
    
</div>
</div>
<div class="responsivegrid aem-GridColumn aem-GridColumn--default--12">


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="layout-container responsivegrid aem-GridColumn aem-GridColumn--default--12" data-component-id="51e927945f39700e952adb9bd3dc97e7">





<div class="aem-Grid aem-Grid--12 aem-Grid--default--12  grid-image-layout-container-uid9c51  heading-bg-color-layout-container-uid9c51" data-automation-test-id="layout-container-uid9c51">
          <style data-automation-test-id="headingColor-layout-container-uid9c51">
                    .heading-bg-color-layout-container-uid9c51{
                         background-color:  !important;
                    }
          </style>
     
     <div class="container" id="layout-container-uid9c51" data-componentName="layout-container-uid9c51">
          
          
          <div class="footnotes-component mt-0 aem-GridColumn aem-GridColumn--default--12" data-component-id="5aae1cc391ba1be81238febb88e2ef7b">

    



    
    
<link rel="stylesheet" href="/etc.clientlibs/microsoft/components/content/footnotes/v1/footnotes/clientlibs/site.min.ACSHASH40203e0bb3e24fd4626d84825f55e9c5.css" type="text/css">





       
    <div id="footnotes-uidcf04" data-componentName="footnotes-uidcf04" class="row " style="background-color: null">
    <section class="col-12 mt-5  " aria-label="Notas al pie y avisos de declinación de responsabilidades">
        <ul class="list-unstyled small mb-0">
            <li class="py-2">
                
                <span>Compra lo último en consolas Xbox, juegos, mandos, auriculares y suscripciones en Microsoft Store y obtén acceso a productos exclusivos de Microsoft, incluido Xbox Design Lab. Sean cuales sean tus necesidades, Microsoft Store siempre tiene algo para ti, desde consolas hasta juegos, accesorios y regalos. Aquí encontrarás todo lo relacionado con los juegos.<br />
 </span>
            </li>
<li class="py-2">
                
                <span>Consigue grandes ahorros en juegos, consolas y accesorios a juego en Microsoft Store: aprovecha las mejores ofertas de Microsoft con las Ofertas de primavera, Ofertas de Verano, Ofertas desbloqueadas, Super ofertas en juegos, Black Friday, Cyber Monday, Navidad y  Rebajas de invierno. Tanto si quieres disfrutar de una partida nocturna con un amigo como acercar a tu familia al mundo de Xbox o jugar virtualmente con Xbox Game Pass, aquí hay algo para todos. </span>
            </li>
<li class="py-2">
                
                <span>Lleva tus habilidades de juego a un nivel completamente nuevo y sumérgete en la acción con las consolas Xbox Series S o Xbox Series X, que ofrecen retrocompatibilidad con cuatro generaciones de Xbox. </span>
            </li>
<li class="py-2">
                
                <span>Descubre algunas de las formas en las que Microsoft Store lo hace posible:  </span>
            </li>
<li class="py-2">
                
                <span><a href="https://www.xbox.com/es-es/consoles/xbox-series-x?icid=Cat-Xbox-SEO-XSX">Xbox Series X</a>: nuestra consola Xbox más rápida de la historia. La Xbox Series X está diseñada para ofrecer potencia, velocidad y compatibilidad; ofrece una nueva generación de juegos para consola en los que tú, como jugador, eres el centro. Esta consola cuenta con 12 teraflops de capacidad de procesamiento, hasta 120 fotogramas por segundo y Sonido espacial 3D; su arquitectura de rendimiento avanzado te sumerge en experiencias realistas y envolventes como nunca habías visto antes. La Xbox Series X es compatible con los accesorios de juego de Xbox One y ofrece tiempos de respuesta más rápidos que nunca. Disfruta de la experiencia de jugar en la consola más rápida y potente de la historia, disponible en Microsoft Store.  </span>
            </li>
<li class="py-2">
                
                <span><a href="https://www.xbox.com/es-es/consoles/xbox-series-s?icid=Cat-Xbox-SEO-XSS">Xbox Series S</a>: pásate a lo digital con nuestra mejor opción en cuanto a juegos. La Xbox Series S, la Xbox más pequeña y elegante de la historia, pon tus juegos, partidas guardadas y copias de seguridad a salvo en la nube. Es la consola perfecta para una la familia. Experimenta la velocidad de nueva generación, 1440p a 60 fotogramas por segundo, con compatibilidad con hasta 120 fps. Disfruta de Sonido espacial 3D, HDR, un SSD NVMe rápido de 512 GB y retrocompatibilidad con miles de juegos. La Xbox Series S ofrece una potencia extraordinaria para juegos a un precio asequible. Si quieres disfrutar de una noche de juegos con tus hijos, tu pareja o tus amigos, la Xbox Series S incorpora configuraciones únicas que te ayudarán a gestionar el tiempo frente a la pantalla, las interacciones sociales, los gastos online y el acceso a contenido para adultos. La Xbox Series S es la consola perfecta para que todo el mundo disfrute de los juegos y ofrece entretenimiento sin límites.  </span>
            </li>
<li class="py-2">
                
                <span><a href="https://www.microsoft.com/es-es/p/xbox-game-pass-ultimate/cfq7ttc0khs0?icid=Cat-Xbox-SEO-XGPU&amp;activetab=pivot:overviewtab" class="ms-rte-link">Xbox Game Pass Ultimate</a>: Sé el primero en jugar a los títulos nuevos el mismo día de su lanzamiento. Además, disfruta de cientos de juegos de alta calidad con amigos en consola y PC. Adéntrate en el corazón de la comunidad de Xbox y únete a millones de jugadores a la espera de jugar en compañía. </span>
            </li>
<li class="py-2">
                
                <span><a href="https://www.microsoft.com/es-es/store/collections/xboxheadsets?icid=Cat-Xbox-SEO-Headsets">Auriculares Xbox</a>: mejora el rendimiento con nuestros últimos auriculares para juegos y sumérgete en la experiencia con nuestros auriculares con cancelación de ruido para concentrarte en la partida. Disfruta del aspecto social de los juegos y habla con tus amigos, compañeros de equipo u oponentes mientras juegas. Juega con estilo con la gama de auriculares de Microsoft. El auricular inalámbrico Xbox es uno de nuestros éxitos de ventas y ofrece un sonido excepcional, es ligero y flexible y se empareja directamente con la consola para que no pierdas la conexión Nuestros Auriculares Bang &amp; Olufsen Beoplay Portal son ligeros, están diseñados para tu comodidad y te permiten conectarte fácilmente a la Xbox para disfrutar de una experiencia de juego instantánea, con conectividad inalámbrica sin pérdidas de 2,4 GHz integrada. Bluetooth 5.1, aptX™ Adaptive y una batería de larga duración facilitan la experiencia de juego.  </span>
            </li>
<li class="py-2">
                
                <span><a href="https://www.microsoft.com/es-es/store/collections/xboxcontrollers?icid=Cat-Xbox-SEO-Controllers">Mando Xbox</a>: disfruta de los nuevos Mandos inalámbricos Xbox en una gran variedad de colores para jugar con tus amigos y familiares, virtualmente o juntos. Obtén el Mando inalámbrico Xbox Elite Series 2 y actualiza tu estilo de juego con el mando más avanzado del mundo, con una personalización sin límites y 30 formas nuevas de jugar como un profesional para que puedas competir con otros jugadores.  </span>
            </li>
<li class="py-2">
                
                <span><p><a href="https://www.microsoft.com/es-es/store/top-paid/games/xbox?icid=Cat-Xbox-SEO-Xbox-Games">Xbox Games</a>: descubre tus juegos favoritos, los especiales las ultimas ofertas y los juegos más recientes optimizados para Xbox Series X|S. Gracias a la nueva y revolucionaria Xbox Velocity Architecture, miles de juegos de cuatro generaciones de Xbox se ven y funcionan aún mejor en Xbox Series X|S. Encuentra tu nuevo juego favorito de Xbox en la Microsoft Store digital. Juega a Halo Infinite, Forza Horizon 5, Minecraft y Sea of Thieves, Starfield, Flight Sim, Battlefield 2042 y Far Cry 6.</p>
<p>Recibe dinero al canjear tus portátiles, tabletas, consolas o móviles antiguos. <a href="https://www.microsoft.com/es-es/store/b/microsoft-trade-in">Descubre el programa de Trade-in de Microsoft Store</a> impulsado por Recommerce™, una empresa especializada en la reutilización y el reciclaje de dispositivos electrónicos. Obtendrás un canje por dinero y tu dispositivo usado tendrá un nuevo hogar, o Recommerce reciclará tu dispositivo sin coste alguno para ti, y tu obtendrás dinero para tu próximo dispositivo.</p>
 </span>
            </li>
<li class="py-2">
                
                <span><strong>*Microsoft Rewards :</strong> Los puntos se depositarán en tu cuenta al cabo de 48 horas después de realizar la compra. Los puntos obtenidos con compras que se devuelvan posteriormente serán cancelados. Los puntos extra solo se obtienen con compras de productos digitales, por lo que en compras de hardware, se asignará un punto por cada dólar gastado. Se aplican restricciones. Visita las preguntas más frecuentes de <a href="https://www.microsoft.com/es-es/rewards/faq" class="ms-rte-link">Rewards</a> para obtener más información.  </span>
            </li>
<li class="py-2">
                
                <span><strong>**La cobertura por daños accidentales:</strong> La cobertura por daños accidentales (AD) está limitada a los daños por manipulación; es decir, daños causados directamente por la caída involuntaria del Producto Cubierto (como una pantalla rota) o derrames de líquido sobre él. En el caso de averías mecánicas o reclamaciones cubiertas por daño accidental, se proporcionarán un máximo de: un (1) repuesto de la consola Xbox; dos (2) repuestos del Mando inalámbrico Xbox One estándar O BIEN un (1) repuesto del mando Xbox Elite (el suministrado con tu compra); y un (1) repuesto de la fuente de alimentación asociada acompañada de los cables de conexión cuando estos hayan sido suministrados originalmente por Microsoft en una única compra de un pack con todos los elementos.  </span>
            </li>

        </ul>
    </section>
    </div>



    
    
<script src="/etc.clientlibs/microsoft/components/content/footnotes/v1/footnotes/clientlibs/site.min.ACSHASH19141611645452b56db9617f068dea98.js"></script>



</div>

          
     </div>
</div></div>

    
</div>
</div>
<div class="responsivegrid aem-GridColumn aem-GridColumn--default--12">


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="back-to-top-button aem-GridColumn aem-GridColumn--default--12" data-component-id="66f104ac83c5ea29ffc13bb793e679c0">
    
    
        
    
<link rel="stylesheet" href="/etc.clientlibs/microsoft/components/content/back-to-top-button/v1/back-to-top-button/clientlibs/sites.min.ACSHASHa722775809d2312f435036def15bcd62.css" type="text/css">



    
    
    
    <div class="fixed-back-to-top p-g d-flex justify-content-end " data-mount="fixed-back-to-top">
        <a href="#page-top" aria-label="Volver al principio" class="btn bg-body btn-faint-secondary" data-bi-cn="Volver al principio" data-bi-ecn="Volver al principio" data-bi-bhvr="0" data-bi-ct="Button" data-bi-pa="Body" data-bi-compnm="Back to top">
            <span class="glyph-prepend glyph-prepend-xsmall glyph-prepend-up">
                
                    <span class="px-1"></span>
                
                Volver al principio
            </span>
        </a>
    </div>



    
    
<script src="/etc.clientlibs/microsoft/components/content/back-to-top-button/v1/back-to-top-button/clientlibs/sites.min.ACSHASH48d949b834ed32dfd8266989e9dab912.js"></script>



</div>

    
</div>
</div>

        
    </div>
</main></div>

    
</div>
</div>
<div class="universalfooter" data-component-id="873fa1f863becf63b38092282d4ea0b1">
	

	
		

    

    
        
                




        
        
                
                
            
    
<!-- Start of ADDITIONAL DEBUG INFO ** cv.html **

    CVToken: CASMicrosoftCV1421a8cb.4
  End of ADDITIONAL DEBUG INFO -->

                <!-- Start of ADDITIONAL DEBUG INFO ** uhftemplate.html **

    CVToken: CASMicrosoftCV1421a8cb.4
  End of ADDITIONAL DEBUG INFO -->
                    <div id="footerArea" class="uhf"  data-m='{"cN":"footerArea","cT":"Area_coreuiArea","id":"a2Body","sN":2,"aN":"Body"}'>
                <div id="footerRegion"      data-region-key="footerregion" data-m='{"cN":"footerRegion","cT":"Region_coreui-region","id":"r1a2","sN":1,"aN":"a2"}' >

    <div  id="footerUniversalFooter" data-m='{"cN":"footerUniversalFooter","cT":"Module_coreui-universalfooter","id":"m1r1a2","sN":1,"aN":"r1a2"}'  data-module-id="Category|footerRegion|coreui-region|footerUniversalFooter|coreui-universalfooter">
        



<footer id="uhf-footer" class="c-uhff context-uhf"  data-uhf-mscc-rq="false" data-footer-footprint="/RetailStore2/RetailStore2Footer, fromService: True" data-m='{"cN":"Uhf footer_cont","cT":"Container","id":"c1m1r1a2","sN":1,"aN":"m1r1a2"}'>
        <nav class="c-uhff-nav" aria-label="V&#237;nculos de recursos de pie de p&#225;gina" data-m='{"cN":"Footer nav_cont","cT":"Container","id":"c1c1m1r1a2","sN":1,"aN":"c1m1r1a2"}'>
            
                <div class="c-uhff-nav-row">
                    <div class="c-uhff-nav-group" data-m='{"cN":"footerNavColumn1_cont","cT":"Container","id":"c1c1c1m1r1a2","sN":1,"aN":"c1c1m1r1a2"}'>
                        <div class="c-heading-4" role="heading" aria-level="2">Novedades</div>
                        <ul class="c-list f-bare">
                            <li>
                                <a aria-label="Surface Laptop Studio 2 Novedades" class="c-uhff-link" href="https://www.microsoft.com/es-es/d/Surface-Laptop-Studio-2/8rqr54krf1dz" data-m='{"cN":"Footer_WhatsNew_SurfaceLaptopStudio2_nav","id":"n1c1c1c1m1r1a2","sN":1,"aN":"c1c1c1m1r1a2"}'>Surface Laptop Studio 2</a>
                            </li>
                            <li>
                                <a aria-label="Surface Laptop Go 3 Novedades" class="c-uhff-link" href="https://www.microsoft.com/es-es/d/Surface-Laptop-Go-3/8p0wwgj6c6l2" data-m='{"cN":"Footer_WhatsNew_SurfaceLaptopGo3_nav","id":"n2c1c1c1m1r1a2","sN":2,"aN":"c1c1c1m1r1a2"}'>Surface Laptop Go 3</a>
                            </li>
                            <li>
                                <a aria-label="Surface Pro 9 Novedades" class="c-uhff-link" href="https://www.microsoft.com/es-es/d/surface-pro-9/93VKD8NP4FVK" data-m='{"cN":"Footer_WhatsNew_NewSurfacePro8_nav","id":"n3c1c1c1m1r1a2","sN":3,"aN":"c1c1c1m1r1a2"}'>Surface Pro 9</a>
                            </li>
                            <li>
                                <a aria-label="Surface Laptop 5 Novedades" class="c-uhff-link" href="https://www.microsoft.com/es-es/d/surface-laptop-5/8XN49V61S1BN" data-m='{"cN":"Footer_WhatsNew_SurfaceLaptop2_nav","id":"n4c1c1c1m1r1a2","sN":4,"aN":"c1c1c1m1r1a2"}'>Surface Laptop 5</a>
                            </li>
                            <li>
                                <a aria-label="Surface Studio 2+ Novedades" class="c-uhff-link" href="https://www.microsoft.com/es-es/d/surface-studio-2plus/8VLFQC3597K4" data-m='{"cN":"Footer_WhatsNew_SurfaceStudio_nav","id":"n5c1c1c1m1r1a2","sN":5,"aN":"c1c1c1m1r1a2"}'>Surface Studio 2+</a>
                            </li>
                            <li>
                                <a aria-label="Microsoft 365 Novedades" class="c-uhff-link" href="https://www.microsoft.com/microsoft-365" data-m='{"cN":"Footer_WhatsNew_Microsoft365_nav","id":"n6c1c1c1m1r1a2","sN":6,"aN":"c1c1c1m1r1a2"}'>Microsoft 365</a>
                            </li>
                            <li>
                                <a aria-label="Aplicaciones de Windows 11 Novedades" class="c-uhff-link" href="https://www.microsoft.com/windows/windows-11-apps" data-m='{"cN":"Footer_WhatsNew_Windows_11_apps_nav","id":"n7c1c1c1m1r1a2","sN":7,"aN":"c1c1c1m1r1a2"}'>Aplicaciones de Windows 11</a>
                            </li>

                        </ul>
                        
                    </div>
                    <div class="c-uhff-nav-group" data-m='{"cN":"footerNavColumn2_cont","cT":"Container","id":"c2c1c1m1r1a2","sN":2,"aN":"c1c1m1r1a2"}'>
                        <div class="c-heading-4" role="heading" aria-level="2">Microsoft Store</div>
                        <ul class="c-list f-bare">
                            <li>
                                <a aria-label="Perfil de la cuenta Microsoft Store" class="c-uhff-link" href="https://account.microsoft.com/" data-m='{"cN":"Footer_StoreandSupport_AccountProfile_nav","id":"n1c2c1c1m1r1a2","sN":1,"aN":"c2c1c1m1r1a2"}'>Perfil de la cuenta</a>
                            </li>
                            <li>
                                <a aria-label="Centro de descarga Microsoft Store" class="c-uhff-link" href="https://www.microsoft.com/es-es/download" data-m='{"cN":"Footer_StoreandSupport_DownloadCenter_nav","id":"n2c2c1c1m1r1a2","sN":2,"aN":"c2c1c1m1r1a2"}'>Centro de descarga</a>
                            </li>
                            <li>
                                <a aria-label="Soporte de Microsoft Store Microsoft Store" class="c-uhff-link" href="https://go.microsoft.com/fwlink/?linkid=2139749" data-m='{"cN":"Footer_StoreandSupport_SalesAndSupport_nav","id":"n3c2c1c1m1r1a2","sN":3,"aN":"c2c1c1m1r1a2"}'>Soporte de Microsoft Store</a>
                            </li>
                            <li>
                                <a aria-label="Devoluciones Microsoft Store" class="c-uhff-link" href="https://support.microsoft.com/es-es/help/10558/microsoft-store-returning-items-bought-for-exchange-refund" data-m='{"cN":"Footer_StoreandSupport_Returns_nav","id":"n4c2c1c1m1r1a2","sN":4,"aN":"c2c1c1m1r1a2"}'>Devoluciones</a>
                            </li>
                            <li>
                                <a aria-label="Seguimiento de pedidos Microsoft Store" class="c-uhff-link" href="https://account.microsoft.com/orders" data-m='{"cN":"Footer_StoreandSupport_OrderTracking_nav","id":"n5c2c1c1m1r1a2","sN":5,"aN":"c2c1c1m1r1a2"}'>Seguimiento de pedidos</a>
                            </li>
                            <li>
                                <a aria-label="Reciclar  Microsoft Store" class="c-uhff-link" href="https://www.microsoft.com/es-es/store/b/recycling?icid=GlobalFooterNav" data-m='{"cN":"Footer_Recyclying_nav","id":"n6c2c1c1m1r1a2","sN":6,"aN":"c2c1c1m1r1a2"}'>Reciclar </a>
                            </li>
                            <li>
                                <a aria-label="Garant&#237;as comerciales Microsoft Store" class="c-uhff-link" href="https://www.microsoft.com/es-es/store/b/aboutwarranties?icid=GlobalFooterNav" data-m='{"cN":"Footer_Warranties_nav","id":"n7c2c1c1m1r1a2","sN":7,"aN":"c2c1c1m1r1a2"}'>Garant&#237;as comerciales</a>
                            </li>

                        </ul>
                        
                    </div>
                    <div class="c-uhff-nav-group" data-m='{"cN":"footerNavColumn3_cont","cT":"Container","id":"c3c1c1m1r1a2","sN":3,"aN":"c1c1m1r1a2"}'>
                        <div class="c-heading-4" role="heading" aria-level="2">Educaci&#243;n</div>
                        <ul class="c-list f-bare">
                            <li>
                                <a aria-label="Microsoft Educaci&#243;n Educaci&#243;n" class="c-uhff-link" href="https://www.microsoft.com/es-es/education" data-m='{"cN":"Footer_Education_MicrosoftInEducation_nav","id":"n1c3c1c1m1r1a2","sN":1,"aN":"c3c1c1m1r1a2"}'>Microsoft Educaci&#243;n</a>
                            </li>
                            <li>
                                <a aria-label="Dispositivos para educaci&#243;n Educaci&#243;n" class="c-uhff-link" href="https://www.microsoft.com/es-es/education/devices/overview" data-m='{"cN":"Footer_Education_DevicesforEducation_nav","id":"n2c3c1c1m1r1a2","sN":2,"aN":"c3c1c1m1r1a2"}'>Dispositivos para educaci&#243;n</a>
                            </li>
                            <li>
                                <a aria-label="Microsoft Teams para Educaci&#243;n Educaci&#243;n" class="c-uhff-link" href="https://www.microsoft.com/es-es/education/products/teams" data-m='{"cN":"Footer_Education_MicrosoftTeamsforEducation_nav","id":"n3c3c1c1m1r1a2","sN":3,"aN":"c3c1c1m1r1a2"}'>Microsoft Teams para Educaci&#243;n</a>
                            </li>
                            <li>
                                <a aria-label="Microsoft 365 Educaci&#243;n Educaci&#243;n" class="c-uhff-link" href="https://www.microsoft.com/es-es/education/buy-license/microsoft365" data-m='{"cN":"Footer_Education_Microsoft365Education_nav","id":"n4c3c1c1m1r1a2","sN":4,"aN":"c3c1c1m1r1a2"}'>Microsoft 365 Educaci&#243;n</a>
                            </li>
                            <li>
                                <a aria-label="Office Educaci&#243;n Educaci&#243;n" class="c-uhff-link" href="https://www.microsoft.com/es-es/education/products/office" data-m='{"cN":"Footer_Education_Office Education_nav","id":"n5c3c1c1m1r1a2","sN":5,"aN":"c3c1c1m1r1a2"}'>Office Educaci&#243;n</a>
                            </li>
                            <li>
                                <a aria-label="Formaci&#243;n y desarrollo de educadores Educaci&#243;n" class="c-uhff-link" href="https://education.microsoft.com/" data-m='{"cN":"Footer_Education_EducatorTrainingDevelopment_nav","id":"n6c3c1c1m1r1a2","sN":6,"aN":"c3c1c1m1r1a2"}'>Formaci&#243;n y desarrollo de educadores</a>
                            </li>
                            <li>
                                <a aria-label="Ofertas para estudiantes y padres Educaci&#243;n" class="c-uhff-link" href="https://www.microsoft.com/es-es/store/b/student" data-m='{"cN":"Footer_Education_DealsForStudentsandParents_nav","id":"n7c3c1c1m1r1a2","sN":7,"aN":"c3c1c1m1r1a2"}'>Ofertas para estudiantes y padres</a>
                            </li>
                            <li>
                                <a aria-label="Azure para estudiantes Educaci&#243;n" class="c-uhff-link" href="https://azure.microsoft.com/es-es/free/students/" data-m='{"cN":"Footer_Education_Azureforstudents_nav","id":"n8c3c1c1m1r1a2","sN":8,"aN":"c3c1c1m1r1a2"}'>Azure para estudiantes</a>
                            </li>

                        </ul>
                        
                    </div>
                </div>
                <div class="c-uhff-nav-row">
                    <div class="c-uhff-nav-group" data-m='{"cN":"footerNavColumn4_cont","cT":"Container","id":"c4c1c1m1r1a2","sN":4,"aN":"c1c1m1r1a2"}'>
                        <div class="c-heading-4" role="heading" aria-level="2">Empresas
</div>
                        <ul class="c-list f-bare">
                            <li>
                                <a aria-label="Microsoft Cloud Empresas
" class="c-uhff-link" href="https://www.microsoft.com/es-es/microsoft-cloud" data-m='{"cN":"Footer_Business_Microsoft_Cloud_nav","id":"n1c4c1c1m1r1a2","sN":1,"aN":"c4c1c1m1r1a2"}'>Microsoft Cloud</a>
                            </li>
                            <li>
                                <a aria-label="Seguridad de Microsoft Empresas
" class="c-uhff-link" href="https://www.microsoft.com/es-es/security" data-m='{"cN":"Footer_Business_Microsoft Security_nav","id":"n2c4c1c1m1r1a2","sN":2,"aN":"c4c1c1m1r1a2"}'>Seguridad de Microsoft</a>
                            </li>
                            <li>
                                <a aria-label="Azure Empresas
" class="c-uhff-link" href="https://azure.microsoft.com/es-es/" data-m='{"cN":"Footer_DeveloperAndIT_MicrosoftAzure_nav","id":"n3c4c1c1m1r1a2","sN":3,"aN":"c4c1c1m1r1a2"}'>Azure</a>
                            </li>
                            <li>
                                <a aria-label="Dynamics 365 Empresas
" class="c-uhff-link" href="https://dynamics.microsoft.com/es-es/" data-m='{"cN":"Footer_Business_MicrosoftDynamics365_nav","id":"n4c4c1c1m1r1a2","sN":4,"aN":"c4c1c1m1r1a2"}'>Dynamics 365</a>
                            </li>
                            <li>
                                <a aria-label="Microsoft 365 Empresas
" class="c-uhff-link" href="https://www.microsoft.com/es-es/microsoft-365/business/" data-m='{"cN":"Footer_Business_M365_nav","id":"n5c4c1c1m1r1a2","sN":5,"aN":"c4c1c1m1r1a2"}'>Microsoft 365</a>
                            </li>
                            <li>
                                <a aria-label="Microsoft Industry Empresas
" class="c-uhff-link" href="https://www.microsoft.com/es-es/industry" data-m='{"cN":"Footer_Business_MicrosoftIndustry_nav","id":"n6c4c1c1m1r1a2","sN":6,"aN":"c4c1c1m1r1a2"}'>Microsoft Industry</a>
                            </li>
                            <li>
                                <a aria-label="Microsoft Teams Empresas
" class="c-uhff-link" href="https://www.microsoft.com/es-es/microsoft-teams/group-chat-software" data-m='{"cN":"Footer_Business_Microsoft365_nav","id":"n7c4c1c1m1r1a2","sN":7,"aN":"c4c1c1m1r1a2"}'>Microsoft Teams</a>
                            </li>
                            <li>
                                <a aria-label="Peque&#241;as empresas Empresas
" class="c-uhff-link" href="https://www.microsoft.com/es-es/store/b/business" data-m='{"cN":"Footer_Business-SmallBusiness_nav","id":"n8c4c1c1m1r1a2","sN":8,"aN":"c4c1c1m1r1a2"}'>Peque&#241;as empresas</a>
                            </li>

                        </ul>
                        
                    </div>
                    <div class="c-uhff-nav-group" data-m='{"cN":"footerNavColumn5_cont","cT":"Container","id":"c5c1c1m1r1a2","sN":5,"aN":"c1c1m1r1a2"}'>
                        <div class="c-heading-4" role="heading" aria-level="2">Desarrolladores y TI</div>
                        <ul class="c-list f-bare">
                            <li>
                                <a aria-label="Centro para desarrolladores Desarrolladores y TI" class="c-uhff-link" href="https://developer.microsoft.com/es-es/" data-m='{"cN":"Footer_DeveloperAndIT_DeveloperCenter_nav","id":"n1c5c1c1m1r1a2","sN":1,"aN":"c5c1c1m1r1a2"}'>Centro para desarrolladores</a>
                            </li>
                            <li>
                                <a aria-label="Documentaci&#243;n Desarrolladores y TI" class="c-uhff-link" href="https://learn.microsoft.com/docs/" data-m='{"cN":"Footer_DeveloperAndIT_Documentation_nav","id":"n2c5c1c1m1r1a2","sN":2,"aN":"c5c1c1m1r1a2"}'>Documentaci&#243;n</a>
                            </li>
                            <li>
                                <a aria-label="Microsoft Learn Desarrolladores y TI" class="c-uhff-link" href="https://learn.microsoft.com/" data-m='{"cN":"Footer_DeveloperAndIT_MicrosoftLearn_nav","id":"n3c5c1c1m1r1a2","sN":3,"aN":"c5c1c1m1r1a2"}'>Microsoft Learn</a>
                            </li>
                            <li>
                                <a aria-label="Microsoft Tech Community Desarrolladores y TI" class="c-uhff-link" href="https://techcommunity.microsoft.com/" data-m='{"cN":"Footer_DeveloperAndIT_MicrosoftTechCommunity_nav","id":"n4c5c1c1m1r1a2","sN":4,"aN":"c5c1c1m1r1a2"}'>Microsoft Tech Community</a>
                            </li>
                            <li>
                                <a aria-label="Azure Marketplace Desarrolladores y TI" class="c-uhff-link" href="https://azuremarketplace.microsoft.com/es-es/" data-m='{"cN":"Footer_DeveloperAndIT_AzureMarketplace_nav","id":"n5c5c1c1m1r1a2","sN":5,"aN":"c5c1c1m1r1a2"}'>Azure Marketplace</a>
                            </li>
                            <li>
                                <a aria-label="AppSource Desarrolladores y TI" class="c-uhff-link" href="https://appsource.microsoft.com/es-es/" data-m='{"cN":"Footer_DeveloperAndIT_AppSource_nav","id":"n6c5c1c1m1r1a2","sN":6,"aN":"c5c1c1m1r1a2"}'>AppSource</a>
                            </li>
                            <li>
                                <a aria-label="Microsoft Power Platform Desarrolladores y TI" class="c-uhff-link" href="https://powerplatform.microsoft.com/es-es/" data-m='{"cN":"Footer_DeveloperAndIT_Power Platform_nav","id":"n7c5c1c1m1r1a2","sN":7,"aN":"c5c1c1m1r1a2"}'>Microsoft Power Platform</a>
                            </li>
                            <li>
                                <a aria-label="Visual Studio Desarrolladores y TI" class="c-uhff-link" href="https://visualstudio.microsoft.com/" data-m='{"cN":"Footer_DeveloperAndIT_MicrosoftVisualStudio_nav","id":"n8c5c1c1m1r1a2","sN":8,"aN":"c5c1c1m1r1a2"}'>Visual Studio</a>
                            </li>

                        </ul>
                        
                    </div>
                    <div class="c-uhff-nav-group" data-m='{"cN":"footerNavColumn6_cont","cT":"Container","id":"c6c1c1m1r1a2","sN":6,"aN":"c1c1m1r1a2"}'>
                        <div class="c-heading-4" role="heading" aria-level="2">Compa&#241;&#237;a
</div>
                        <ul class="c-list f-bare">
                            <li>
                                <a aria-label="Oportunidades de empleo Compa&#241;&#237;a
" class="c-uhff-link" href="https://careers.microsoft.com/" data-m='{"cN":"Footer_Company_Careers_nav","id":"n1c6c1c1m1r1a2","sN":1,"aN":"c6c1c1m1r1a2"}'>Oportunidades de empleo</a>
                            </li>
                            <li>
                                <a aria-label="Acerca de Microsoft Compa&#241;&#237;a
" class="c-uhff-link" href="https://www.microsoft.com/es-es/about" data-m='{"cN":"Footer_Company_AboutMicrosoft_nav","id":"n2c6c1c1m1r1a2","sN":2,"aN":"c6c1c1m1r1a2"}'>Acerca de Microsoft</a>
                            </li>
                            <li>
                                <a aria-label="Noticias de la compa&#241;&#237;a Compa&#241;&#237;a
" class="c-uhff-link" href="https://news.microsoft.com/es-es" data-m='{"cN":"Footer_Company_CompanyNews_nav","id":"n3c6c1c1m1r1a2","sN":3,"aN":"c6c1c1m1r1a2"}'>Noticias de la compa&#241;&#237;a</a>
                            </li>
                            <li>
                                <a aria-label="Privacidad en Microsoft Compa&#241;&#237;a
" class="c-uhff-link" href="https://privacy.microsoft.com/es-es" data-m='{"cN":"Footer_Company_PrivacyAtMicrosoft_nav","id":"n4c6c1c1m1r1a2","sN":4,"aN":"c6c1c1m1r1a2"}'>Privacidad en Microsoft</a>
                            </li>
                            <li>
                                <a aria-label="Inversores Compa&#241;&#237;a
" class="c-uhff-link" href="https://www.microsoft.com/investor/default.aspx" data-m='{"cN":"Footer_Company_Investors_nav","id":"n5c6c1c1m1r1a2","sN":5,"aN":"c6c1c1m1r1a2"}'>Inversores</a>
                            </li>
                            <li>
                                <a aria-label="Sostenibilidad  Compa&#241;&#237;a
" class="c-uhff-link" href="https://www.microsoft.com/es-es/sustainability/" data-m='{"cN":"Footer_Company_Sustainability_nav","id":"n6c6c1c1m1r1a2","sN":6,"aN":"c6c1c1m1r1a2"}'>Sostenibilidad </a>
                            </li>

                        </ul>
                        
                    </div>
                </div>
        </nav>
    <div class="c-uhff-base">
                <a id="locale-picker-link" aria-label="Selector de idiomas del contenido. Actualmente definido en Espa&#241;ol (Espa&#241;a, alfabetizaci&#243;n internacional)" class="c-uhff-link c-uhff-lang-selector c-glyph glyph-world" href="https://www.microsoft.com/es-es/store/locale" data-m='{"cN":"locale_picker(ES)_nav","id":"n7c1c1m1r1a2","sN":7,"aN":"c1c1m1r1a2"}'>Espa&#241;ol (Espa&#241;a, alfabetizaci&#243;n internacional)</a>

            <a data-m='{"id":"n8c1c1m1r1a2","sN":8,"aN":"c1c1m1r1a2"}' href="https://aka.ms/yourcaliforniaprivacychoices" class='c-uhff-link c-uhff-ccpa'>
        <svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 14" xml:space="preserve" height="16" width="43">
            <title>Icono de exclusi&#243;n de la Ley de privacidad de los consumidores de California (CCPA)</title>
            <path d="M7.4 12.8h6.8l3.1-11.6H7.4C4.2 1.2 1.6 3.8 1.6 7s2.6 5.8 5.8 5.8z" style="fill-rule:evenodd;clip-rule:evenodd;fill:#fff"/>
            <path d="M22.6 0H7.4c-3.9 0-7 3.1-7 7s3.1 7 7 7h15.2c3.9 0 7-3.1 7-7s-3.2-7-7-7zm-21 7c0-3.2 2.6-5.8 5.8-5.8h9.9l-3.1 11.6H7.4c-3.2 0-5.8-2.6-5.8-5.8z" style="fill-rule:evenodd;clip-rule:evenodd;fill:#06f"/>
            <path d="M24.6 4c.2.2.2.6 0 .8L22.5 7l2.2 2.2c.2.2.2.6 0 .8-.2.2-.6.2-.8 0l-2.2-2.2-2.2 2.2c-.2.2-.6.2-.8 0-.2-.2-.2-.6 0-.8L20.8 7l-2.2-2.2c-.2-.2-.2-.6 0-.8.2-.2.6-.2.8 0l2.2 2.2L23.8 4c.2-.2.6-.2.8 0z" style="fill:#fff"/>
            <path d="M12.7 4.1c.2.2.3.6.1.8L8.6 9.8c-.1.1-.2.2-.3.2-.2.1-.5.1-.7-.1L5.4 7.7c-.2-.2-.2-.6 0-.8.2-.2.6-.2.8 0L8 8.6l3.8-4.5c.2-.2.6-.2.9 0z" style="fill:#06f"/>
        </svg>
        <span>Tus opciones de privacidad</span>
    </a>

        <noscript>
                <a data-m='{"id":"n9c1c1m1r1a2","sN":9,"aN":"c1c1m1r1a2"}' href="https://aka.ms/yourcaliforniaprivacychoices" class='c-uhff-link c-uhff-ccpa'>
        <svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 14" xml:space="preserve" height="16" width="43">
            <title>Icono de exclusi&#243;n de la Ley de privacidad de los consumidores de California (CCPA)</title>
            <path d="M7.4 12.8h6.8l3.1-11.6H7.4C4.2 1.2 1.6 3.8 1.6 7s2.6 5.8 5.8 5.8z" style="fill-rule:evenodd;clip-rule:evenodd;fill:#fff"/>
            <path d="M22.6 0H7.4c-3.9 0-7 3.1-7 7s3.1 7 7 7h15.2c3.9 0 7-3.1 7-7s-3.2-7-7-7zm-21 7c0-3.2 2.6-5.8 5.8-5.8h9.9l-3.1 11.6H7.4c-3.2 0-5.8-2.6-5.8-5.8z" style="fill-rule:evenodd;clip-rule:evenodd;fill:#06f"/>
            <path d="M24.6 4c.2.2.2.6 0 .8L22.5 7l2.2 2.2c.2.2.2.6 0 .8-.2.2-.6.2-.8 0l-2.2-2.2-2.2 2.2c-.2.2-.6.2-.8 0-.2-.2-.2-.6 0-.8L20.8 7l-2.2-2.2c-.2-.2-.2-.6 0-.8.2-.2.6-.2.8 0l2.2 2.2L23.8 4c.2-.2.6-.2.8 0z" style="fill:#fff"/>
            <path d="M12.7 4.1c.2.2.3.6.1.8L8.6 9.8c-.1.1-.2.2-.3.2-.2.1-.5.1-.7-.1L5.4 7.7c-.2-.2-.2-.6 0-.8.2-.2.6-.2.8 0L8 8.6l3.8-4.5c.2-.2.6-.2.9 0z" style="fill:#06f"/>
        </svg>
        <span>Tus opciones de privacidad</span>
    </a>

        </noscript>
        <nav aria-label="V&#237;nculos corporativos de Microsoft">
            <ul class="c-list f-bare" data-m='{"cN":"Corp links_cont","cT":"Container","id":"c10c1c1m1r1a2","sN":10,"aN":"c1c1m1r1a2"}'>
                                <li  id="c-uhff-footer_contactus">
                    <a class="c-uhff-link" href="https://go.microsoft.com/fwlink/p/?LinkID=824761&amp;clcid=0xC0A" data-mscc-ic="false" data-m='{"cN":"Footer_ContactUs_nav","id":"n1c10c1c1m1r1a2","sN":1,"aN":"c10c1c1m1r1a2"}'>Ponte en contacto con Microsoft</a>
                </li>
                <li  id="c-uhff-footer_imprint">
                    <a class="c-uhff-link" href="https://www.microsoft.com/es-es/store/b/imprint" data-mscc-ic="false" data-m='{"cN":"Footer_Imprint_nav","id":"n2c10c1c1m1r1a2","sN":2,"aN":"c10c1c1m1r1a2"}'>Imprimir</a>
                </li>
                <li  id="c-uhff-footer_privacyandcookies">
                    <a class="c-uhff-link" href="https://go.microsoft.com/fwlink/?LinkId=521839" data-mscc-ic="false" data-m='{"cN":"Footer_PrivacyandCookies_nav","id":"n3c10c1c1m1r1a2","sN":3,"aN":"c10c1c1m1r1a2"}'>Privacidad</a>
                </li>
                <li class=" x-hidden" id="c-uhff-footer_managecookies">
                    <a class="c-uhff-link" href="#" data-mscc-ic="false" data-m='{"cN":"Footer_ManageCookies_nav","id":"n4c10c1c1m1r1a2","sN":4,"aN":"c10c1c1m1r1a2"}'>Gestionar cookies</a>
                </li>
                <li  id="c-uhff-footer_termsofuse">
                    <a class="c-uhff-link" href="https://go.microsoft.com/fwlink/?LinkID=206977" data-mscc-ic="false" data-m='{"cN":"Footer_TermsofUse_nav","id":"n5c10c1c1m1r1a2","sN":5,"aN":"c10c1c1m1r1a2"}'>T&#233;rminos de uso y venta</a>
                </li>
                <li  id="c-uhff-footer_termsofsale">
                    <a class="c-uhff-link" href="https://www.microsoft.com/es-es/storedocs/terms-of-sale" data-mscc-ic="false" data-m='{"cN":"Footer_TermsOfSale_nav","id":"n6c10c1c1m1r1a2","sN":6,"aN":"c10c1c1m1r1a2"}'>T&#201;RMINOS DE VENTA DE MICROSOFT</a>
                </li>
                <li  id="c-uhff-footer_trademarks">
                    <a class="c-uhff-link" href="https://go.microsoft.com/fwlink/?linkid=2196228" data-mscc-ic="false" data-m='{"cN":"Footer_Trademarks_nav","id":"n7c10c1c1m1r1a2","sN":7,"aN":"c10c1c1m1r1a2"}'>Trademarks</a>
                </li>
                <li  id="c-uhff-footer_aboutourads">
                    <a class="c-uhff-link" href="https://go.microsoft.com/fwlink/p/?linkid=286759&amp;clcid=0xC0A" data-mscc-ic="false" data-m='{"cN":"Footer_AboutourAds_nav","id":"n8c10c1c1m1r1a2","sN":8,"aN":"c10c1c1m1r1a2"}'>Sobre nuestra publicidad</a>
                </li>

                <li>&#169; Microsoft 2024</li>
                
            </ul>
        </nav>
    </div>
    
</footer>

<script id="uhf-footer-ccpa">
    const globalPrivacyControlEnabled = navigator.globalPrivacyControl;

    const GPC_DataSharingOptIn = (globalPrivacyControlEnabled) ? false : checkThirdPartyAdsOptOutCookie();

    function checkThirdPartyAdsOptOutCookie() {
        try {
            const ThirdPartyAdsOptOutCookieName = '3PAdsOptOut';
            var cookieValue = getCookie(ThirdPartyAdsOptOutCookieName);
            return cookieValue != 1;
        } catch {
            return true;
        }
    }

    function getCookie(cookieName) {
        var cookieValue = document.cookie.match('(^|;)\\s*' + cookieName + '\\s*=\\s*([^;]+)');
        return (cookieValue) ? cookieValue[2] : '';
    }
</script>





    </div>
        </div>

    </div>
<script src="https://wcpstatic.microsoft.com/mscc/lib/v2/wcp-consent.js"></script><script src="https://www.microsoft.com/onerfstatics/marketingsites-neu-prod/shell/_scrf/js/themes=default/d6-d6e6df/89-746ba4/df-3feeb0/f5-14aef8/bd-f5f332/27-13b2c3/e9-07937b/33-b505e5/fa-7a47db/6e-e2d05f/74-0b2d48/88-5b9b75/1b-240b37/4e-8e1a50/c2-370434/6f-bf5d0f/ea-315ddf/2e-e273bf/17-02d9ee/cf-2a93c7/c0-2ffa80/77-785548/48-4f52bb/3c-6c8ad0/3a-0d7cd3/5f-7d882b/c1-621df2/38-e8e647/17-c82a09/85-bd536d/44-776362/f8-86938e/61-951d1b/39-3d9dc2/81-96da47/ec-e44e19/6c-7627b9?ver=2.0&_cf=20210618&iife=1"></script><script src="https://mem.gfx.ms/meversion?partner=RetailStore2&market=es-es&uhf=1" defer></script>
            
    

	


    

</div>


		
    
    
    

	


    
<script src="/etc.clientlibs/microsoft/clientlibs/clientlib-mwf-new/main-light.min.ACSHASH9d1e62f31f5fb44aaba93302756881f0.js"></script>




	
    
<script src="/etc.clientlibs/cascade.component.authoring/clientlibs/clientlib-base.min.ACSHASH29c191223ce5765badcd0207f7ce847c.js"></script>




    
        
    
<script src="/etc.clientlibs/microsoft/clientlibs/clientlib-httpclient.min.ACSHASH65e4c1ea0ef81dd1058e657727914791.js"></script>



    
    

		
    
<script src="/etc.clientlibs/cascade.component.authoring/clientlibs/clientlib-cookieconsent.min.ACSHASH96f0c5b1219e39b8788028f5c17a5ad9.js"></script>



		<!-- Changes for Global Pixel -->
		
		
			<script type="text/javascript">
				(function(){
					var partnerScripts =
						{
							"meta": {
									"partnerJsHash": "ACSHASH00f6c26de9c7c0a1e7b10d8bb358e008"
									}
	                    };
	                    window.partnerScripts = partnerScripts;
				})();
			</script>
			<script id="mediapixel">
	            //<![CDATA[
					//_pageBITags=jsonElement;
				//]]>
			</script>
		
		
		
			<script type="text/javascript" id="contentsquare">
				(function(){
					var contentSq =
						{
							"entryFile": "https://cdnssl.clicktale.net/www32/ptc/05d32363-d534-4d93-9b65-cde674775e71.js",
	                    };
					if (typeof window["partnerScripts"]==="undefined"){
						window["partnerScripts"]={};
					}
					window["partnerScripts"]["contentSquare"] = contentSq;
				})();
			</script>
		
		
			<!--Enable 3rd Party script integration based on the configuration settings-->
			
    
<script src="/etc.clientlibs/microsoft/components/structure/page/clientlibs/embed-thirdparty.min.ACSHASHdf31c97130106cddb71542614a39c1bc.js"></script>



		
		<!-- End of changes for Global Pixel -->



    
    
<script src="/etc.clientlibs/microsoft/components/structure/page/clientlibs/featurecontrol.min.ACSHASHc22ea5b46f3fcad90da0abcc0a3f73d4.js"></script>





<!-- Feature Control Service:List of all Enabled Features -->
<div id='customFeatureControl' enabledFeatures="contentbackfillgenerate,esiproductcards,uhf-ms-io-endpoint,uhf-esi-cv,uhf-esi-cache,fraud-greenid,contentsquare,mediapixel,holiday-themer,lazyload-static-components,clientlibDefer,upsellEnabled,contentbackfillpkgdelete,healthcheck,demo-feature,contentbackfillhttpgenerate,perf-tracker-1ds,dynamic-bundle,cvIncrementer,tentingEnabled,chatCookiesImplemented,alertCountDownWithoutServerTime,pdpDynamicRendering,bundlesDynamicRendering,contentbackfillmetadatachangesvideo,contentbackfillmetadatachangesnonvideo,listDynamicRendering,experimentation-without-personalization,generic-list-importer,combinedUHF,cvCallEnabled,m365ProductCatalog,support-unsupported-locales,deferClickTale,videoLazyLoad,prefetchFontsEnabled,enable-code-isolation,imageLinkTag,fetchPriority,contentIngestionAgent,enableClickgroupTelemetry,imageLazyLoad,contentIngestionAgent-dispatcher2westus2Agent,isCacheControlFeatureEnabled,feature-controlled-content-card,lcpPrioritizationPhase1,ocReimagineTelemetry,deferScriptsEnabled,lcpPrioritizationPhase2,ocReimagineSlotNumberTelemetry,contentIngestionAgent-dispatcher1westus2Agent,ocReimagineComponentNameTelemetry,ocReimagineTemplateNameTelemetry,extended-html-minification-sites,dynamicPrice,gl-auto-config,displayV35Toggle"></div>




<div class='oneds-config' data-instrumentationkey='9d8f9f50b9cc40f29c15d8963a6aa0e6-0589b4b6-0575-4686-9935-27ab0e3c0381-6951' data-isenabled='true' data-env='prod' data-market='es-es' data-pageName='Consolas Xbox, juegos y accesorios Gaming | Microsoft Store España' data-urlCollectQuery='true' data-urlCollectHash='false' data-autoCapturelineage='false' data-autoCaptureresize='false' data-autoCapturescroll='false' data-initialize1DSEventName="none" data-tenantName='microsoft' data-tenantTitle='Microsoft' data-tenantDomain='microsoft' data-tenantSiteName='microsoft' data-tenantNameProperty='tenantName' data-tenantTitleProperty='tenantTitle' data-tenantDomainProperty='tenantDomain' data-tenantSiteNameProperty='tenantSiteName' data-max1DSInitializeDelayInSeconds='1'>
</div>


    
    
<script src="/etc.clientlibs/microsoft/components/structure/page/clientlibs/custom-oneds.min.ACSHASHb4f0b5100b03a879dd5d2e97636efc37.js"></script>






    

    


		

	

	

	
		<!--Enable script to inject Green ID iFrame-->
		
			
    
    <script type="text/javascript" src="/etc.clientlibs/cascade.component.authoring/clientlibs/clientlib-greenid.min.ACSHASH383b23d12df0d9265d7569a7102c2f96.js" async></script>


		
		
     

	


	<!-- Start of ADDITIONAL DEBUG INFO
	MS_COMMIT_ID: 337dee1
	MS-CV: CASMicrosoftCV1421a8cb.0
	MS-CV-ESI: CASMicrosoftCV1421a8cb.3
	End of ADDITIONAL DEBUG INFO -->
</body>
</html>
