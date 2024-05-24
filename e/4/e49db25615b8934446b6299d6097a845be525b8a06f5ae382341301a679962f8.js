!function(){function q(a){var c=[],b=[],e=function(f){for(var g={},h=0;h<u.length;h++){var d=u[h];if(d.Tag===f){g=d;break}var l=void 0,k=d.Tag;var C=(k=-1!==k.indexOf("http:")?k.replace("http:",""):k.replace("https:",""),-1!==(l=k.indexOf("?"))?k.replace(k.substring(l),""):k);if(f&&(-1!==f.indexOf(C)||-1!==d.Tag.indexOf(f))){g=d;break}}return g}(a);return e.CategoryId&&(c=e.CategoryId),e.Vendor&&(b=e.Vendor.split(":")),!e.Tag&&D&&(b=c=function(f){var g=[],h=function(d){var l=document.createElement("a");
return l.href=d,-1!==(d=l.hostname.split(".")).indexOf("www")||2<d.length?d.slice(1).join("."):l.hostname}(f);v.some(function(d){return d===h})&&(g=["C0004"]);return g}(a)),{categoryIds:c,vsCatIds:b}}function w(a){return!a||!a.length||(a&&window.OptanonActiveGroups?a.every(function(c){return-1!==window.OptanonActiveGroups.indexOf(","+c+",")}):void 0)}function m(a,c){void 0===c&&(c=null);var b=window,e=b.OneTrust&&b.OneTrust.IsVendorServiceEnabled;b=e&&b.OneTrust.IsVendorServiceEnabled();return"Categories"===
r||"All"===r&&e&&!b?w(a):("Vendors"===r||"All"===r&&e&&b)&&w(c)}function n(a){a=a.getAttribute("class")||"";return-1!==a.indexOf("optanon-category")||-1!==a.indexOf("ot-vscat")}function p(a){return a.hasAttribute("data-ot-ignore")}function x(a,c,b){void 0===b&&(b=null);var e=a.join("-"),f=b&&b.join("-"),g=c.getAttribute("class")||"",h="",d=!1;a&&a.length&&-1===g.indexOf("optanon-category-"+e)&&(h=("optanon-category-"+e).trim(),d=!0);b&&b.length&&-1===g.indexOf("ot-vscat-"+f)&&(h+=" "+("ot-vscat-"+
f).trim(),d=!0);d&&c.setAttribute("class",h+" "+g)}function y(a,c,b){void 0===b&&(b=null);var e;a=a.join("-");b=b&&b.join("-");return-1===c.indexOf("optanon-category-"+a)&&(e=("optanon-category-"+a).trim()),-1===c.indexOf("ot-vscat-"+b)&&(e+=" "+("ot-vscat-"+b).trim()),e+" "+c}function z(a){var c,b=q(a.src||"");(b.categoryIds.length||b.vsCatIds.length)&&(x(b.categoryIds,a,b.vsCatIds),m(b.categoryIds,b.vsCatIds)||(a.type="text/plain"),a.addEventListener("beforescriptexecute",c=function(e){"text/plain"===
a.getAttribute("type")&&e.preventDefault();a.removeEventListener("beforescriptexecute",c)}))}function A(a){var c=a.src||"",b=q(c);(b.categoryIds.length||b.vsCatIds.length)&&(x(b.categoryIds,a,b.vsCatIds),m(b.categoryIds,b.vsCatIds)||(a.removeAttribute("src"),a.setAttribute("data-src",c)))}var u=JSON.parse('[{"Tag":"https://youtube.com/embed/lw3bsyb_Re4","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.googletagmanager.com/gtm.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/y1mYu7rrv08","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://youtube.com/embed/PiO_viExzwc","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://youtube.com/embed/KCT1a1n-OqY","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/zVYG-_e5D_g","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://cdn.amplitude.com/libs/amplitude-8.11.0-min.gz.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://youtube.com/embed/yStZmVt15Iw","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://youtube.com/embed/E6SAOgzLgXc","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/37rayrgVbE4","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/IBQOkTXfQMo","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://youtube.com/embed/IBQOkTXfQMo","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/KCT1a1n-OqY","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://console.worldoftanks.com/en/encyclopedia/vehicles/sweden/","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://youtube.com/embed/zVYG-_e5D_g","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://youtube.com/embed/UaYmjPl2HrI","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/1TXUHwdWwZQ","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/UaYmjPl2HrI","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/jXSI4zjMmss","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/VqihRTXvrWQ","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/CK-_nvXT_0U","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://cdn-cm.gcdn.co/loader.min.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://youtube.com/embed/0V0UzwliC2I","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/BiW8dpst1ZA","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/CglcTKlXJGQ","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://youtube.com/embed/ekLs5zJvYlk","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://youtube.com/embed/7JR4ad0R0Xk","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/2mBa-ZfX8WA","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://console.worldoftanks.com/en/store/","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/nYTAW54lD0o","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://youtube.com/embed/FIoOfTd9Hxw","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/gHKkIH565D4","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/yStZmVt15Iw","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://youtube.com/embed/YEQpdnhhrrI","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/WPrSlHDKkU8","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/_707m0CatHE","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://na-wotp.wgcdn.co/static/5.68.0_f4bae2/portal/js/geoip/region_widget.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://youtube.com/embed/VqihRTXvrWQ","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://youtube.com/embed/Q0VVMKcGYz0","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/lw3bsyb_Re4","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://youtube.com/embed/Lf7xGnaX7yk","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://youtube.com/embed/1JizKt_iKxw","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/1KcJh5Lh3pQ","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/EiGJpo95Dq4","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/XFD-2XHO-G0","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/tfmIom047Ho","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.googletagmanager.com/gtag/js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/5-6hITDtRRg","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://youtube.com/embed/CglcTKlXJGQ","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/Q43NmbhoJD0","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/sUQ3T4BPuBY","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://youtube.com/embed/CK-_nvXT_0U","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/MIToqePXKL4","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.google-analytics.com/gtm/js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://youtube.com/embed/q0jy0nyn_Iw","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://youtube.com/embed/jXSI4zjMmss","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/XT2tXo8IDtQ","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://youtube.com/embed/lgPOa8KNkcg","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://youtube.com/embed/nRaPMqgpKMU","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://youtube.com/embed/nYTAW54lD0o","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/UY4f9DF9rss","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://youtube.com/embed/uZvqmSi3vaQ","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://youtube.com/embed/EiGJpo95Dq4","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://youtube.com/embed/XFD-2XHO-G0","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://youtube.com/embed/4sOy3YJ5KF0","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/7JR4ad0R0Xk","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/klNbWF7OM1o","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://console.worldoftanks.com/en/encyclopedia/vehicles/china/Ch26_59_Patton/","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/BIq-Qh0Lj24","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://youtube.com/embed/sUQ3T4BPuBY","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://youtube.com/embed/Q43NmbhoJD0","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://youtube.com/embed/WPrSlHDKkU8","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/nRaPMqgpKMU","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/bZpJYgYBG7Q","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://youtube.com/embed/5-6hITDtRRg","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/4L8pxhRvdRI","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://youtube.com/embed/Z3awyVU7nUY","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/Lf7xGnaX7yk","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.google-analytics.com/analytics.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://youtube.com/embed/klNbWF7OM1o","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/q0jy0nyn_Iw","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/4sOy3YJ5KF0","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/1JizKt_iKxw","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://youtube.com/embed/BiW8dpst1ZA","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/mO848PC3lSg","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/JzCNr_ZtNxA","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://youtube.com/embed/MIToqePXKL4","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/uZvqmSi3vaQ","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://youtube.com/embed/tfmIom047Ho","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/PiO_viExzwc","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/lgPOa8KNkcg","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://youtube.com/embed/gHKkIH565D4","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://console.worldoftanks.com/en/encyclopedia/vehicles/ussr/R34_BT-SV/","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://youtube.com/embed/y1mYu7rrv08","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://youtube.com/embed/4L8pxhRvdRI","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://console.worldoftanks.com/apple-touch-icon_180.png","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/Z3awyVU7nUY","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/Q0VVMKcGYz0","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/ekLs5zJvYlk","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://youtube.com/embed/_707m0CatHE","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://youtube.com/embed/UY4f9DF9rss","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/0V0UzwliC2I","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/YEQpdnhhrrI","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/FIoOfTd9Hxw","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://dev.visualwebsiteoptimizer.com/j.php","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://youtube.com/embed/BIq-Qh0Lj24","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://youtube.com/embed/2mBa-ZfX8WA","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/E6SAOgzLgXc","CategoryId":["C0004"],"Vendor":null}]'),
D=JSON.parse("true"),r=JSON.parse('"Categories"'),v=(v=[""]).filter(function(a){if("null"!==a&&a.trim().length)return a}),t=["embed","iframe","img","script"],B=((new MutationObserver(function(a){Array.prototype.forEach.call(a,function(c){Array.prototype.forEach.call(c.addedNodes,function(e){1!==e.nodeType||-1===t.indexOf(e.tagName.toLowerCase())||n(e)||p(e)||("script"===e.tagName.toLowerCase()?z:A)(e)});var b=c.target;!c.attributeName||n(b)&&p(b)||("script"===b.nodeName.toLowerCase()?z(b):-1!==t.indexOf(c.target.nodeName.toLowerCase())&&
A(b))})})).observe(document.documentElement,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["src"]}),document.createElement);document.createElement=function(){for(var a,c,b=[],e=0;e<arguments.length;e++)b[e]=arguments[e];return"script"===b[0].toLowerCase()||-1!==t.indexOf(b[0].toLowerCase())?(a=B.bind(document).apply(void 0,b),c=a.setAttribute.bind(a),Object.defineProperties(a,{src:{get:function(){try{return a.cloneNode().src}catch(f){return a.getAttribute("src")||""}},set:function(f){var g=
b[0],h,d,l,k="";k=q(k="string"==typeof f||f instanceof Object?f.toString():k);return d=g,l=a,!(h=k).categoryIds.length&&!h.vsCatIds.length||"script"!==d.toLowerCase()||n(l)||m(h.categoryIds,h.vsCatIds)||p(l)?(d=g,h=a,!(l=k).categoryIds.length||-1===t.indexOf(d.toLowerCase())||n(h)||m(l.categoryIds,l.vsCatIds)||p(h)?c("src",f):(a.removeAttribute("src"),c("data-src",f),(g=a.getAttribute("class"))||c("class",y(k.categoryIds,g||"",k.vsCatIds)))):(c("type","text/plain"),c("src",f)),!0}},type:{get:function(){return a.getAttribute("type")||
""},set:function(f){return h=c,d=q((g=a).src||""),h("type",!d.categoryIds.length&&!d.vsCatIds.length||n(g)||m(d.categoryIds,d.vsCatIds)||p(g)?f:"text/plain"),!0;var g,h,d}},class:{set:function(f){return h=c,!(d=q((g=a).src)).categoryIds.length&&!d.vsCatIds.length||n(g)||m(d.categoryIds,d.vsCatIds)||p(g)?h("class",f):h("class",y(d.categoryIds,f,d.vsCatIds)),!0;var g,h,d}}}),a.setAttribute=function(f,g,h){"type"!==f&&"src"!==f||h?c(f,g):a[f]=g},a):B.bind(document).apply(void 0,b)}}();    <img alt="" class="category-card_icon" src="https://cdn-kbms.gcdn.co/documents/billing_issues_U8zWVy7.svg">
                </div>
            
        </div>
    </a>

                        </div>
                    
                
                    
                        <div class="list-cards_item">
                            
                            
    <a class="category-card" href="/support/en/products/wows/category/25306/">
        <div class="category-card_mask">
            <div class="category-card_name">
                <span class="category-card_text">Technical</span>
            </div>
            
                <div class="category-card_icon-wrapper">
                    <img alt="" class="category-card_icon" src="https://cdn-kbms.gcdn.co/documents/technical_issues_y2LK77y.svg">
                </div>
            
        </div>
    </a>

                        </div>
                    
                
                    
                        <div class="list-cards_item">
                            
                            
    <a class="category-card" href="/support/en/products/wows/category/25346/">
        <div class="category-card_mask">
            <div class="category-card_name">
                <span class="category-card_text">In-Game</span>
            </div>
            
                <div class="category-card_icon-wrapper">
                    <img alt="" class="category-card_icon" src="https://cdn-kbms.gcdn.co/documents/game_issues_ydzjnuU_1.svg">
                </div>
            
        </div>
    </a>

                        </div>
                    
                
                    
                        <div class="list-cards_item">
                            
                            
    <a class="category-card" href="/support/en/products/wows/category/25744/">
        <div class="category-card_mask">
            <div class="category-card_name">
                <span class="category-card_text">Reports & Appeals</span>
            </div>
            
                <div class="category-card_icon-wrapper">
                    <img alt="" class="category-card_icon" src="https://cdn-kbms.gcdn.co/documents/rule_violations_ZDjyoBL.svg">
                </div>
            
        </div>
    </a>

                        </div>
                    
                
                    
                        <div class="list-cards_item">
                            
                            
    <a class="category-card" href="/support/en/products/wows/category/25389/">
        <div class="category-card_mask">
            <div class="category-card_name">
                <span class="category-card_text">Player Support Guide</span>
            </div>
            
                <div class="category-card_icon-wrapper">
                    <img alt="" class="category-card_icon" src="https://cdn-kbms.gcdn.co/documents/default_neutral_p0XGXN5.svg">
                </div>
            
        </div>
    </a>

                        </div>
                    
                
            </div>
            <div id="more_categories"></div>
        </div>
    

    
    
    

    
        <div class="product-section">
            
    
    <div class="assistance-panel">
        <div class="assistance-panel_content">
            <div class="assistance">
                <h3 class="assistance_title">Need assistance?</h3>
                <div class="assistance_content">
                    <p class="assistance_text">
                        Just let us know how we can help and we'll be happy to assist you.
                    </p>
                    <div class="assistance_controls">
                        <a href="/support/en/products/wows/help/" class="button-main button-main__lifted">Contact Support</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="assistance-panel_icon-wrapper">
            <img class="assistance-panel_icon" src="//static-cspbe-eu.wargaming.net/images/skins/wows/contact.svg?v=29">
        </div>
    </div>
        </div>
    

    

                </div>
                
            </div>
            
            <div class="layout_footer-wrapper">
                
                <footer class="footer">
    <div class="footer_heading">
        <a href="http://wargaming.net/" rel="nofollow">
            <img alt="Wargaming.net Let's battle" class="footer_logo" src="//static-cspbe-eu.wargaming.net/images/logo-tablet@2x.png?v=29" width="183" height="50">
        </a>

        <div class="footer-social">
                
            <h4 class="footer-social_title">Get help on:</h4>
            <ul class="footer-social_list">
                <li class="footer-social_item">
                    <a class="footer-network footer-network__twitter" href="https://twitter.com/WargamingEUCS" target="_blank" rel="noopener noreferrer nofollow">
                        <span class="footer-network_text">Get in touch on Twitter</span>
                    </a>
                </li>
            </ul>
            
        </div>
    </div>
    <div class="languages languages__collapsed" data-collapsed-class="languages__collapsed">
        <div class="languages_content">
            
                <div class="languages-column">
                    <h4 class="languages-column_title">Europe</h4>
                    <ul class="languages-list">
                        
                            <li class="languages-list_item">
                                
                                    
                                        <span class="languages-list_link languages-list_link__active">
                                            English
                                        </span>
                                    
                                
                            </li>
                        
                            <li class="languages-list_item">
                                
                                    
                                        
                                            
                                            
                                            
                                        
					<a href="/support/set_language/?next_url=/support/cs/products/wows/?redirect_lang%3Dcs&lang=cs" class="languages-list_link">
                                            Čeština
                                        </a>
                                    
                                
                            </li>
                        
                            <li class="languages-list_item">
                                
                                    
                                        
                                            
                                            
                                            
                                        
					<a href="/support/set_language/?next_url=/support/de/products/wows/?redirect_lang%3Dde&lang=de" class="languages-list_link">
                                            Deutsch
                                        </a>
                                    
                                
                            </li>
                        
                            <li class="languages-list_item">
                                
                                    
                                        
                                            
                                            
                                            
                                        
					<a href="/support/set_language/?next_url=/support/es/products/wows/?redirect_lang%3Des&lang=es" class="languages-list_link">
                                            Español
                                        </a>
                                    
                                
                            </li>
                        
                            <li class="languages-list_item">
                                
                                    
                                        
                                            
                                            
                                            
                                        
					<a href="/support/set_language/?next_url=/support/fr/products/wows/?redirect_lang%3Dfr&lang=fr" class="languages-list_link">
                                            Français
                                        </a>
                                    
                                
                            </li>
                        
                            <li class="languages-list_item">
                                
                                    
                                        
                                            
                                            
                                            
                                        
					<a href="/support/set_language/?next_url=/support/it/products/wows/?redirect_lang%3Dit&lang=it" class="languages-list_link">
                                            Italiano
                                        </a>
                                    
                                
                            </li>
                        
                            <li class="languages-list_item">
                                
                                    
                                        
                                            
                                            
                                            
                                        
					<a href="/support/set_language/?next_url=/support/hu/products/wows/?redirect_lang%3Dhu&lang=hu" class="languages-list_link">
                                            Magyar
                                        </a>
                                    
                                
                            </li>
                        
                            <li class="languages-list_item">
                                
                                    
                                        
                                            
                                            
                                            
                                        
					<a href="/support/set_language/?next_url=/support/pl/products/wows/?redirect_lang%3Dpl&lang=pl" class="languages-list_link">
                                            Polski
                                        </a>
                                    
                                
                            </li>
                        
                            <li class="languages-list_item">
                                
                                    
                                        
                                            
                                            
                                            
                                        
					<a href="/support/set_language/?next_url=/support/ru/products/wows/?redirect_lang%3Dru&lang=ru" class="languages-list_link">
                                            Русский
                                        </a>
                                    
                                
                            </li>
                        
                            <li class="languages-list_item">
                                
                                    
                                        
                                            
                                            
                                            
                                        
					<a href="/support/set_language/?next_url=/support/tr/products/wows/?redirect_lang%3Dtr&lang=tr" class="languages-list_link">
                                            Türkçe
                                        </a>
                                    
                                
                            </li>
                        
                            <li class="languages-list_item">
                                
                                    
                                        
                                            
                                            
                                            
                                        
					<a href="/support/set_language/?next_url=/support/uk/products/wows/?redirect_lang%3Duk&lang=uk" class="languages-list_link">
                                            Українська
                                        </a>
                                    
                                
                            </li>
                        
                    </ul>
                </div>
            
                <div class="languages-column">
                    <h4 class="languages-column_title">Americas</h4>
                    <ul class="languages-list">
                        
                            <li class="languages-list_item">
                                
                                    <a href="https://na.wargaming.net/support/en/" class="languages-list_link">
                                        English
                                    </a>
                                
                            </li>
                        
                            <li class="languages-list_item">
                                
                                    <a href="https://na.wargaming.net/support/es_mx/" class="languages-list_link">
                                        Español
                                    </a>
                                
                            </li>
                        
                            <li class="languages-list_item">
                                
                                    <a href="https://na.wargaming.net/support/pt_br/" class="languages-list_link">
                                        Português
                                    </a>
                                
                            </li>
                        
                    </ul>
                </div>
            
                <div class="languages-column">
                    <h4 class="languages-column_title">Asia</h4>
                    <ul class="languages-list">
                        
                            <li class="languages-list_item">
                                
                                    <a href="https://asia.wargaming.net/support/en/" class="languages-list_link">
                                        English
                                    </a>
                                
                            </li>
                        
                            <li class="languages-list_item">
                                
                                    <a href="https://asia.wargaming.net/support/th/" class="languages-list_link">
                                        ไทย
                                    </a>
                                
                            </li>
                        
                            <li class="languages-list_item">
                                
                                    <a href="https://asia.wargaming.net/support/zh_tw/" class="languages-list_link">
                                        繁體中文
                                    </a>
                                
                            </li>
                        
                            <li class="languages-list_item">
                                
                                    <a href="https://asia.wargaming.net/support/zh_sg/" class="languages-list_link">
                                        简体中文（新加坡)
                                    </a>
                                
                            </li>
                        
                            <li class="languages-list_item">
                                
                                    <a href="https://asia.wargaming.net/support/ja/" class="languages-list_link">
                                        日本語
                                    </a>
                                
                            </li>
                        
                            <li class="languages-list_item">
                                
                                    <a href="https://asia.wargaming.net/support/ko/" class="languages-list_link">
                                        한국어
                                    </a>
                                
                            </li>
                        
                    </ul>
                </div>
            
        </div>
    </div>
    <div class="footer_panel">
        <ul class="footer-menu">
            <li class="footer-menu_item">
                <span class="footer-menu_link footer-menu_link__button" data-active-class="footer-menu_link__button-active">
                    Europe (English)
                </span>
            </li>
            <li class="footer-menu_item">
                <a class="footer-menu_link" href="https://legal.eu.wargaming.net/privacy-policy/" target="_blank" rel="noopener noreferrer nofollow">Privacy Policy</a>
            </li>
            
            <li class="footer-menu_item">
                <a class="footer-menu_link" href="https://legal.eu.wargaming.net/eula/" target="_blank" rel="noopener noreferrer nofollow">EULA</a>
            </li>
            
            
            <li id="cookie-settings-button" class="footer-menu_item">
                <a class="footer-menu_link ot-sdk-show-settings"></a>
            </li>
            
        </ul>
        <span class="footer_copy">© 2009-2024. Wargaming.net. All rights reserved</span>
    </div>
</footer>
            </div>
        </div>
    </div>
    
    <div id="smart_search"></div>

    
        
    
        
    
        
    
        
    
        
    
        
    
        
    <script>
        window.CDN_STATIC_PUBLIC_PATH = '//static-cspbe-eu.wargaming.net/';
        window.STATIC_PUBLIC_PATH = '/support/static/';

        window.Settings = {
            languageCode: 'en',
            test_csp: 'off',
            routerBase: '/support',
            BANWORKER_PROJECT: 'csc',
            BANWORKER_PROJECTS_TO_SHOW: 'game,chat',
            CSPBE_HOST: '//' + window.location.hostname + '/support',
            KBF_HOST: 'https://kbf-eu.wargaming.net/api/v2/',
            TF_HOST: 'https://tf-eu.wargaming.net/',
            PIAAS_HOST: 'https://piaas-eu.wargaming.net/',
            PMS_HOST: 'https://pms-eu.wargaming.net/',
            POW_HOST: 'https://pow-eu.wargaming.net/',
            REALM: 'eu',
            SSW_CLIENT_ID: 'LcJtnCQq6wPXh33y6ZiB4p3vMfgTVSEfhjD9aM7U',
            WGNI_LOGIN_URL: 'https://eu.wargaming.net/id/signin/',
            COOKIE_PATH: '/support/',
            OAUTH_TOKEN_COOKIE: 'auth_token',
            OAUTH_TOKEN_HEADER: 'X-Auth-Token',
            PRODUCT_TITLES: {"lgn": "Login", "moo": "Master of Orion", "wgc": "Game Center", "wot": "World of Tanks", "wotb": "World of Tanks Blitz", "wowp": "World of Warplanes", "wows": "World of Warships"}
        };
    </script>
    <script defer src="//static-cspbe-eu.wargaming.net/translations/en.js?v=29"></script>
    
    
    

    

    

    
    
    <script>
        window.Settings.sidebarCategories = {
            // TODO: replace with correct transformation in view
            list: [],
            /*
             * NOTE: currently we don't have ability to specify active category and
             * subcategories id so we need to path full category path and process it in JS
             */
            activeCategoryPath: '',
        };
        // TODO move to bundle
        (function() {
            var buttonMenuOpen = document.getElementById('button-menu-open');
            var buttonMenuClose = document.getElementById('button-menu-close');

            buttonMenuOpen.addEventListener('click', function(event) {
                event.preventDefault();
                document.body.classList.add('layout__aside-open');
            });

            buttonMenuClose.addEventListener('click', function(event) {
                event.preventDefault();
                document.body.classList.remove('layout__aside-open');
            });
        }());
    </script>


    

    
        
    
        
    
        
    
        
    
        
    
        
    

    <script>
        window.Settings = window.Settings || {};

        window.Settings.categories = [];
    </script>

    <script defer src="//static-cspbe-eu.wargaming.net/js/app.bundle.js?v=29"></script>
    <script defer src="//static-cspbe-eu.wargaming.net/js/workers.bundle.js?v=29"></script>
    <div class="grid grid__hidden">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
</div>
<script>
    document.addEventListener("DOMContentLoaded", function() {
        document.onkeydown = function(e) {
            if (e.ctrlKey && e.keyCode == 'G'.charCodeAt(0)) {
                var grid = document.querySelector('.grid');
                grid.classList.toggle('grid__hidden');
            }

            if (e.ctrlKey && e.keyCode == 'J'.charCodeAt(0)) {
                var content = document.querySelector('.content');
                content.classList.toggle('content__spelling');
            }
        };
    });
</script>
</body>
</html>