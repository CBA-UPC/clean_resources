(function() {
    var TMPL_CACHE = {};
    PH.template = function tmpl(str, data) {
        // Figure out if we're getting a template, or if we need to
        // load the template - and be sure to cache the result.
        var fn = !/\W/.test(str) ? TMPL_CACHE[str] = TMPL_CACHE[str] || tmpl(document.querySelector(str).innerHTML) :
            // Generate a reusable function that will serve as a template generator (and which will be cached).
            new Function("obj", // jshint ignore:line
                "var p=[],print=function(){p.push.apply(p,arguments);};" +

                // Introduce the data as local variables using with(){}
                "with(obj){p.push('" +

                // Convert the template into pure JavaScript
                str
                .replace(/[\r\t\n]/g, " ")
                .split("<%").join("\t")
                .replace(/((^|%>)[^\t]*)'/g, "$1\r")
                .replace(/\t-(.*?)%>/g, "',PH.htmlEscape($1),'")
                .replace(/\t=(.*?)%>/g, "',$1,'")
                .split("\t").join("');")
                .split("%>").join("p.push('")
                .split("\r").join("\\'")
                + "');}return p.join('');");

        // Provide some basic currying to the user
        return data ? fn( data ) : fn;
    };
})();
(function $TWEEG(n){var t=n.bool,e=n.escape_html,s=n.filter,a=n.out,o=n.register,i=n.string;o("@Components/GDPRCookieBanner/template.html.twig",function(){var o=n.t({$main:function(n){var o,l,c,r=n.acceptGtm,m=n.laterGtm,p=n.groupsEnabled;return a([(r=t(r)?" "+i(r):"",""),(m=t(m)?" "+i(m):"",""),(o=" col-xs-7 col-sm-6",""),(l=" col-xs-5 col-sm-6 js-later",""),(c=s.trans("confirm later"),""),t(s.default(p,!1))?a([(o=" pho-btn btn-block",""),(l=" pho-btn btn-block js-change-settings",""),(c=s.trans("change settings"),"")]):"",'\n\n<div class="gdpr-cookie-banner js-gdpr-cookie-banner pad-sep-xs pad-hrz-none">\n    <div class="container">\n        <div class="table-layout">\n            <div class="table-cell col-xs-12 col-sm-7 col-md-8 col-lg-9 pad-hrz-none">\n                <p class="cookie-banner-text mrg-btm-none">\n                    ',s.trans("We use cookies and similar technologies to display site content and improve navigation experience. In %link% section you can find details and management options.",{"%link%":'<a class="gtm_lmqn0slxa4" href="'+i(s.trans("/info/politica-de-utilizare-cookie-uri"))+'" target="_blank">'+i(s.trans("Cookie Policy"))+"</a>"}),'\n                </p>\n                <div class="cookie-banner-text-overlay visible-xs visible-sm"></div>\n            </div>\n            <div class="table-cell col-xs-12 col-sm-5 col-md-4 col-lg-3 cookie-banner-buttons">\n                <button class="pho-btn btn btn-primary js-accept',e(r),e(o),'">',e(s.trans("Accept cookies")),'</button>\n                <button class="pho-btn btn btn-link',e(m),e(l),'">',e(c),"</button>\n            </div>\n        </div>\n    </div>\n</div>"])}});return o})})(EM.TMPL);

// AvatarEditor
(function $TWEEG(n){var a=n.escape_html,s=n.filter,i=n.out,t=n.register;t("@Features/MyAccount/components/AvatarEditor",function(){var t=n.t({$main:function(n){return i(['<div class="modal-header">\n    <button type="button" class="pho-btn btn btn-link close hidden-xs" data-dismiss="modal" aria-label="',a(s.trans("Close")),'"><i class="em em-close"></i></button>\n    <h4 class="modal-title">',a(s.trans("Position and resize the picture")),'</h4>\n</div>\n\n<div class="modal-body with-canvas"><canvas></canvas></div>\n\n<div class="modal-body">\n    <div class="size-slider-wrapper">\n        <div class="icon-zoom-out"><i class="em em-zoom-out"></i></div>\n        <div class="js-size-slider" data-phino="Slider" data-ph-min="0" data-ph-max="100"\n             data-ph-allow-range="false"></div>\n        <div class="icon-zoom-in"><i class="em em-zoom-in"></i></div>\n    </div>\n</div>\n\n<div class="modal-body modal-content-darken">\n    <div class="row">\n        <div class="col-sm-4">\n            <button data-dismiss class="pho-btn btn btn-default btn-block">',a(s.trans("Cancel")),'</button>\n        </div>\n        <div class="col-sm-4"></div>\n        <div class="col-sm-4">\n            <button class="js-save pho-btn btn btn-primary btn-block">',a(s.trans("Save")),"</button>\n        </div>\n    </div>\n</div>\n"])}});return t})})(EM.TMPL);

// Modal window for free shipping progress bar
(function $TWEEG(t){var a=t.bool,e=t.escape_html,n=t.filter,d=t.for,i=t.include,r=t.number,l=t.operator,s=t.out,o=t.register,c=t.string,u=t.index;o("@Components/CompatibleProductsForFreeShippingModal/template.html.twig",function(){var e=t.t({$main:function(t){var e,r,l,o=t.getProductsForFreeShipping;return s([(e=n.slice(n.default(u(u(o,"PRODUCTS_FOR_FREE_DELIVERY"),"product_collection"),[]),0,12),""),(r=u(u(o,"PRODUCTS_FOR_FREE_DELIVERY"),"recommendation_id"),""),(l=u(u(o,"PRODUCTS_FOR_FREE_DELIVERY"),"scenario_name"),""),'<div class="product-wrapper">\r\n    <div class="product-tabs js-product-tabs">\r\n        ',a(n.length(e))?s(['\r\n            <div id="ca-all" class="js-accessory-tab">\r\n                ',d(e,function(t,a){return t?s([i("@Components/Card/template.html.twig",{productData:a,hasActionButtons:!0,showPrice:!0,isBuyable:u(u(u(a,"offer"),"flags"),"may_be_ordered"),recommendationId:r,submitBtnClass:"card-buy-button",useEmagAddToCartBtn:1,ref:l,gtmAddToCart:"gtm_w9157khq",gtmFavorites:'gtm_pwvh94g4 '})]):""}),"\r\n            </div>\r\n        "]):"","\r\n    </div>\r\n</div>"])}});return e})})(EM.TMPL);

// WidgetProductFeedback
!function(e){var p=e.bool,f=(e.empty,e.escape,e.escape_html),h=(e.escape_js,e.filter),v=e.for,o=(e.func,e.hash,e.include),s=e.iterable,g=(e.merge,e.number),m=e.operator,_=e.out,t=e.register,b=(e.slice,e.spaceless,e.string),l=e.index;e.global;t("@Components/StarRating/template.html.twig",function(){return e.t({$main:function(e){var t,n=e.rating,i=e.displayAverage,a=e.extraClass,r=e.size,s=e.text,d=e.inputName,o=e.input,l=e.required,c=e.inputAttributes,u=e.gtm,e=e.ratingNumber;return _([(t="star-rating",""),"",(n=h.default(n,0),""),(i=h.default(i,!1),""),(a=h.default(a,""),""),null!=r?_([(r=" "+b(t)+"-"+b(r),"")]):"",null!=s?_([""]):"",(d=h.default(d,"star"),""),null!=o?_([(a=b(a)+" "+b(t)+"-input","")]):"",null==l?_([(l=!1,"")]):"",(c=h.default(c,{}),""),(u=" "+b(h.default(u,"")),""),_(null!=o?['<div class="',f(t)," ",f(t),"-input ",f(r)," ",f(a),f(u),'">\r\n        <div class="',f(t),"-inner",f(u),'">',v(m[".."](1,5),function(e,t){return e?_(['<button type="button" class="em em-star_fill',f(u),f(t==1+g(h.round(g(5)-g(n),0,"ceil"))?" active":""),'" data-rating="',f(g(5)-g(t)+1),'"></button>']):""}),'</div>\r\n        <input type="hidden" name="',f(d),'" value="',f(n),'"',p(l)?_(["required"]):"","\r\n            ",h.join(h.map(c,function(e,t){return b(t)+"='"+b(e)+"'"})," "),"\r\n        >\r\n    </div>",null!=s?_(['<div class="',f(t),'-text">',s,"</div>"]):""]:['<div class="',f(t)," ",f(t),"-read rated-",f(n)," ",f(r)," ",f(a),f(u),'">\r\n        <div class="',f(t),"-inner",f(u),'" style="width: ',f(g(n)*(100/g(5))),'%"></div>\r\n    </div>',null!=s?_(['<div class="',f(t),"-text",f(u),'">',p(n)&&p(i)?_(['<span class="average-rating semibold">',f(n),"</span>"]):"",'<span class="hidden-xs',f(u),'">',s,"</span>",null!=e?_(['<span class="visible-xs-inline-block',f(u),'">(',f(e),")</span>"]):"","</div>"]):""])])}})}),t("@Components/WidgetProductFeedback/templates/card.html.twig",function(){return e.t({$main:function(e){var t,n=e.product,i=e.seeAllProducts,a=e.buttonRef,r=e.iconRef,e=e.page_type;return _([(n=h.default(n,{}),""),(i=null!=i&&i,""),(a=h.default(a,""),""),(r=h.default(r,""),""),(t=s(l(n,"image"))?h.default(l(l(l(l(n,"image"),"resized_images"),0),"url"),""):l(n,"image"),""),(e=h.default(e,null),""),'<div class="panel pf-card ',f(p(l(n,"is_soft_hidden"))?"soft-hidden-product js-soft-hidden-product":""),'">\n    <div class="d-flex pf-content">\n        <div class="flex-item pad-hrz-xs card-image">\n            <div class="thumbnail-wrapper">\n                <div class="thumbnail">\n                    <img src="',f(t),'" />\n                </div>\n            </div>\n        </div>\n        <div class="flex-item rating-container" data-add-review-url="',f(h.addQueryParam(l(n,"add_review_url"),"ref",r)),'">\n            <div class="pf-hide-product">',"homepage"!=e?_(['<a href="#" class="js-pf-hide-temporarily pf-hide-temporarily close" data-product-id="',f(l(n,"id")),'"',f(p(l(n,"is_soft_hidden"))?h.raw(" data-is-hidden='1'"):""),'>\n                        <span class="font-size-sm inline-block--middle">',f(p(l(n,"is_soft_hidden"))?"afișează":"ascunde"),'</span>\n                        <i class="inline-block--middle em ',f(p(l(n,"is_soft_hidden"))?"em-icon_show":"em-icon_hide"),'"></i>\n                    </a>']):"",'</div>\n            <div class="pf-title block">',f(l(n,"product_name")),"</div>",p(h.default(l(n,"allow_feedback"),!1))?_(['<div class="review-add-info form-group mrg-btm-none">\n                    <div class="mrg-btm-sm">\n                        <label for="new-review-input" class="control-label sr-only">',f("Rating:"),"</label>\n                        ",o("@Components/StarRating/template.html.twig",{input:!0,inputName:"new-review",size:"md",gtm:"gtm_dx0pnu",rating:0,inputAttributes:{"data-modal-product-pnk":l(n,"pnk")}}),'\n\n                        <span class="review-add-text star-rating-text star-rating-lg strong hidden-xs"></span>\n                    </div>\n\n                    <a\n                        href="',f(h.addQueryParam(l(n,"add_review_url"),"ref",a)),'"\n                        class="btn btn-primary btn-sm add-review-btn semibold js-product-review-modal"\n                        data-modal-product-pnk="',f(l(n,"pnk")),'"\n                        data-modal-refresh-page-on-form-submit\n                    >',f("Scrie un review"),"</a>\n                    ",p(h.default(i,!1))?_(['\n                        <a href="',f(h.addQueryParam("/user/reviews","ref",a)),'" class="pad-hrz-sm hidden-xs"><b>',f(h.capitalize("vezi toate produsele")),"</b></a>\n                    "]):"","\n                </div>"]):"","</div>\n    </div>\n</div>\n"])}})}),t("@Components/WidgetProductFeedback/template.html.twig",function(){return e.t({$main:function(e){var t=e.isSmall,i=e.seeAllProducts,a=e.page_type,n=e.snapTo,r=e.products,s=e.iconRef,d=e.buttonRef;return _([(t=h.default(t,!1),""),(i=h.default(i,!1),""),(a=h.default(a,null),""),(n=h.default(n,"center"),""),'<div class="pf-wrapper pf-bg ',f(p(t)?"pf-wrapper-sm":""),'">\n    <div class="pf-sidebar text-center">\n        <div class="pf-headline-1 semibold hidden-xs hidden-sm ',f(p(t)?"hidden-md":""),'">',f("Incantat de ce ti-ai luat?"),'</div>\n        <div class="pf-headline-2">',f("Spune-ti parerea, cu bune si cu rele."),"</div>\n    </div>",'<div class="pf-widget">\n        <div class="widget-product-feedback product-carousel ph-carousel-init" data-phino="Carousel"\n             data-ph-handle-resize="true"\n             data-ph-auto-scroll="',f(1<h.length(r)?"3000":"0"),'"\n             data-ph-loop="true" data-ph-dots="',f(1<h.length(r)),'"\n             data-ph-snap="',f(n),'">',v(r,function(e,t,n){return e?_([p(l(t,"is_hidden_from_products_without_reviews"))?"":_([o("@Components/WidgetProductFeedback/templates/card.html.twig",{product:t,seeAllProducts:i,iconRef:p(s)?b(s)+b(l(e,"index")):"",buttonRef:p(d)?b(d)+b(l(e,"index")):"",page_type:a})])]):""}),"</div>\n    </div>\n</div>\n"])}})})}(EM.TMPL);

(function $TWEEG(d){var a=d.bool,e=d.escape_html,i=d.filter,t=d.for,n=d.out,o=d.register,l=d.index,r=d.global;o("@Components/ProductBadges/template.html.twig",function(){var o=d.t({$main:function(d){var o,c,s,u,g,b,p=d.appData,f=d.productData,v=d.classList,m=d.defaultDisplayBadges,y=d.maxBadges,_=d.unifiedBadges,h=d.discountBadges,k=d.isMainGallery;return n([(p=i.default(p,[]),""),(f=i.default(f,[]),""),(v=i.default(v,""),""),(m=i.default(m,!1),""),(y=i.default(y,2),""),(_=null!=(o=_)?o:i.slice(i.default(l(l(f,"offer"),"unified_badges"),[]),0,y),""),(_=i.filter(}),""),(h=i.slice(i.default(h,[]),0,y),""),(c=i.default(l(l(l(f,"offer"),"flags"),"is_genius_eligible"),!1),""),(s="b"==i.default(l(r("abTestsAuto"),"getById")("listing_superprice"),"na"),""),(k=i.default(k,!1),""),(u=a(k)&&"b"==l(r("abTestsAuto"),"getById")("pd_fashion")&&"fashion"==l(l(f,"offer"),"display_type"),""),(g=a(i.default(l(l(l(f,"offer"),"flags"),"has_unified_badges"),m))&&a(_),""),a(g)||a(h)||a(u)?n(['<div class="product-badge-box js-product-badge-box ',e(a(g)?"":"hidden "),e(v),'">',a(u)?n([a(c)?n(['<div class="product-badge-container">\n                    <div class="product-badge fashion-genius-badge">\n                        <div class="product-badge-label">\n                            <i class="em em-genius-text"></i>\n                        </div>\n                    </div>\n                </div>']):"",(b=l(l(f,"offer"),"price"),""),"percent"==i.default(l(l(b,"discount"),"type"),null)?n(['<div class="product-badge-container">\n                    <div class="product-badge fashion-discount-badge">\n                        <div class="product-badge-label">\n                            -',e(l(l(b,"discount"),"percent")),"%\n                        </div>\n                    </div>\n                </div>"]):""]):"",a(i.length(_))?n(['<div class="js-product-unified-badges',e(a(u)?" hidden":""),'">',t(_,function(d,t){var o;return d?n([(o="SUPER PRET"==l(t,"label"),""),'<div class="product-badge-container js-product-badge-container ',e(a(o)?"super-price-badge":""),'" data-product-type="',e(l(t,"type")),'" style="',e(a(o)&&a(s)?"display: block;":""),'">\n                    <div class="product-badge product-badge--',e(l(t,"type")),'" style="background-color: rgb(',e(l(l(t,"background_color"),"r")),", ",e(l(l(t,"background_color"),"g")),", ",e(l(l(t,"background_color"),"b")),');">',a(i.default(l(t,"indicator")))?n(['<span class="product-badge-indicator">',e(l(t,"indicator")),"</span>"]):"",'<div class="product-badge-label">\n                            ',e("our_recommendation"==l(t,"type")?l(t,"label"):i.lower(l(t,"label"))),"\n                        </div>",null!=l(t,"image")&&a(l(t,"image"))?n(['<div class="product-badge-image" style="background-image: url(',e(l(l(t,"image"),"original")),')"></div>']):"","</div>\n                </div>"]):""}),"</div>"]):"",a(i.length(h))?n(['<div class="js-product-discount-badges hidden">',t(h,function(d,t){return d?n(['<div class="product-badge-container js-product-badge-container" data-product-type="',e(l(t,"type")),'">\n                    <div class="product-badge product-badge--',e(l(t,"type")),'" style="background-color: rgb(',e(l(l(t,"background_color"),"r")),", ",e(l(l(t,"background_color"),"g")),", ",e(l(l(t,"background_color"),"b")),');">',a(i.default(l(t,"indicator")))?n(['<span class="product-badge-indicator">',e(l(t,"indicator")),"</span>"]):"",'<div class="product-badge-label">',l(t,"label"),"</div>",null!=l(t,"image")&&a(l(t,"image"))?n(['<div class="product-badge-image" style="background-image: url(',e(l(l(t,"image"),"original")),')"></div>']):"","</div>\n                </div>"]):""}),"</div>"]):"","</div>"]):""])}});return o})})(EM.TMPL);

(function $TWEEG(n){var t=n.bool,i=n.escape_html,e=n.filter,r=n.for,a=n.number,l=n.operator,u=n.out,s=n.register,d=n.string;s("@Components/StarRating/template.html.twig",function(){var s=n.t({$main:function(n){var s,o,c,v=n.rating,p=n.size,m=n.text,f=n.inputName,b=n.input,g=n.required,h=n.inputAttributes,x=n.gtm,y=n.ratingNumber;return u([(s="star-rating",""),(o=5,""),(v=e.default(v,0),""),(c="",""),null!=p?u([(p=" "+d(s)+"-"+d(p),"")]):"",null!=m?u([(m=m,"")]):"",(f=e.default(f,"star"),""),null!=b?u([(c=d(c)+" "+d(s)+"-input","")]):"",null==g?u([(g=!1,"")]):"",(h=e.default(h,{}),""),(x=" "+d(e.default(x,"")),""),u(null!=b?['<div class="',i(s)," ",i(s),"-input ",i(p)," ",i(c),i(x),'">\r\n        <div class="',i(s),"-inner",i(x),'">',r(l[".."](1,o),function(n,t){return n?u(['<button type="button" class="em em-star_fill',i(x),i(t==1+a(e.round(a(o)-a(v),0,"ceil"))?" active":""),'" data-rating="',i(1+(a(o)-a(t))),'"></button>']):""}),'</div>\r\n        <input type="hidden" name="',i(f),'" value="',i(v),'"',t(g)?u(["required"]):"","\r\n            ",e.join(e.map(h,function(n,t){return d(t)+"='"+d(n)+"'"})," "),"\r\n        >\r\n    </div>",null!=m?u(['<div class="',i(s),'-text">',m,"</div>"]):""]:['<div class="',i(s)," ",i(s),"-read rated-",i(v)," ",i(p)," ",i(c),i(x),'">\r\n        <div class="',i(s),"-inner",i(x),'" style="width: ',i(a(v)*(100/a(o))),'%"></div>\r\n    </div>',null!=m?u(['<div class="',i(s),"-text",i(x),'">\r\n            <span class="hidden-xs',i(x),'">',m,"</span>",null!=y?u(['<span class="visible-xs-inline-block',i(x),'">(',i(y),")</span>"]):"","</div>"]):""])])}});return s})})(EM.TMPL);
(function $TWEEG(n){var e=n.bool,t=n.escape_html,s=n.filter,i=n.out,o=n.register,a=n.string;o("@Components/ABTest/listingNotificationSection.html.twig",function(){var e=n.t({$main:function(n){return i(['<div class="listing-notification-section js-listing-notification-section"></div>'])}});return e}),o("@Components/ABTest/GDPRBanner/floating-center.html.twig",function(){var o=n.t({$main:function(n){var o=n.acceptGtm,r=n.laterGtm;return i([(o=e(o)?" "+a(o):"",""),(r=e(r)?" "+a(r):"",""),'<div class="gdpr-cookie-banner js-gdpr-cookie-banner pad-sep-xs pad-hrz-none">\r\n    <div class="container">\r\n        <div class="cookie-banner-content col-xs-12 col-sm-7 col-md-8 col-lg-9">\r\n            <i class="hidden-xs cookies-bkg"></i>\r\n            <div class="cookie-banner-text">\r\n                <p class="strong visible-xs">',t(s.trans("We'll take care of your data to remain private")),'</p>\r\n                <span class="font-size-sm">',s.trans("We use cookies and similar technologies to display site content and improve navigation experience. In %link% section you can find details and management options.",{"%link%":'<a class="gtm_lmqn0slxa4" href="'+a(s.trans("/info/politica-de-utilizare-cookie-uri"))+'" target="_blank">'+a(s.trans("Cookie Policy"))+"</a>"}),'</span>\r\n            </div>\r\n            <div class="cookie-banner-text-overlay visible-xs visible-sm"></div>\r\n        </div>\r\n        <div class="col-xs-offset-1 col-xs-10 col-sm-offset-0 col-sm-5 col-md-4 col-lg-3 cookie-banner-buttons">\r\n            <button class="pho-btn btn btn-secondary js-accept btn-block',t(o),'">',t(s.trans("Accept cookies")),'</button>\r\n            <button class="pho-btn btn btn-link btn-block js-change-settings',t(r),'">',t(s.trans("change settings")),"</button>\r\n        </div>\r\n    </div>\r\n</div>"])}});return o}),o("@Components/ABTest/GDPRBanner/2-column.html.twig",function(){var o=n.t({$main:function(n){var o=n.acceptGtm,r=n.laterGtm;return i([(o=e(o)?" "+a(o):"",""),(r=e(r)?" "+a(r):"",""),'<div class="gdpr-cookie-banner js-gdpr-cookie-banner pad-sep-xs pad-hrz-none">\r\n    <div class="container">\r\n        <div class="cookie-banner-content col-xs-12 col-sm-7 col-md-9 col-lg-9">\r\n            <div class="cookie-banner-text">\r\n                <div>\r\n                    <p class="font-size-ms strong">',t(s.trans("We'll take care of your data to remain private")),"</p>\r\n                    <span>",s.trans("We use cookies and similar technologies to display site content and improve navigation experience. In %link% section you can find details and management options.",{"%link%":'<a class="gtm_lmqn0slxa4" href="'+a(s.trans("/info/politica-de-utilizare-cookie-uri"))+'" target="_blank">'+a(s.trans("Cookie Policy"))+"</a>"}),'</span>\r\n                </div>\r\n                <div>\r\n                    <p class="font-size-ms strong">',t(s.trans("What are cookies used for?")),"</p>\r\n                    <span>",s.trans("These files mainly make it possible to recognize the user's terminal and present the content in a relevant way, adapted to the user's preferences. Cookies provide users with a pleasant browsing experience and support eMAG's efforts to provide more user-friendly services, eg: - online privacy preferences, shopping cart or relevant advertising."),'</span>\r\n                </div>\r\n            </div>\r\n            <div class="cookie-banner-text-overlay visible-xs visible-sm"></div>\r\n        </div>\r\n        <div class="col-xs-12 col-sm-5 col-md-3 col-lg-3 cookie-banner-buttons">\r\n            <button class="pho-btn btn btn-secondary js-accept btn-block',t(o),'">',t(s.trans("Accept cookies")),'</button>\r\n            <button class="pho-btn btn btn-link btn-block js-change-settings',t(r),'">',t(s.trans("change settings")),"</button>\r\n        </div>\r\n    </div>\r\n</div>"])}});return o}),o("@Components/ABTest/GDPRBanner/floating-left.html.twig",function(){var o=n.t({$main:function(n){var o=n.acceptGtm,r=n.laterGtm;return i([(o=e(o)?" "+a(o):"",""),(r=e(r)?" "+a(r):"",""),'<div class="gdpr-cookie-banner js-gdpr-cookie-banner pad-sep-xs pad-hrz-none">\r\n    <div class="container">\r\n        <div class="cookie-banner-content col-xs-12 col-sm-7 col-md-8 col-lg-9 text-center">\r\n            <div class="cookie-banner-text font-size-sm">\r\n                <i class="cookies-bkg"></i>\r\n                <p class="strong font-size-ms hidden-xs">',t(s.trans("We'll take care of your data to remain private")),"</p>\r\n                ",s.trans("We use cookies and similar technologies to display site content and improve navigation experience. In %link% section you can find details and management options.",{"%link%":'<a class="gtm_lmqn0slxa4" href="'+a(s.trans("/info/politica-de-utilizare-cookie-uri"))+'" target="_blank">'+a(s.trans("Cookie Policy"))+"</a>"}),'\r\n            </div>\r\n            <div class="cookie-banner-text-overlay visible-xs visible-sm"></div>\r\n        </div>\r\n        <div class="col-xs-offset-1 col-xs-10 col-sm-offset-0 col-sm-5 col-md-4 col-lg-3 cookie-banner-buttons">\r\n            <button class="pho-btn btn btn-default js-accept btn-block',t(o),'">',t(s.trans("Accept cookies")),'</button>\r\n            <button class="pho-btn btn btn-link btn-block js-change-settings',t(r),'">',t(s.trans("change settings")),"</button>\r\n        </div>\r\n    </div>\r\n</div>"])}});return o})})(EM.TMPL);
var sapi = sapi || {};

(function(sapi, ajax, PH, EM) {

    'use strict';

    var sapiHeaders = {
        'X-Request-Source': 'www'
    };

    var tokenData = {};
    tokenData.token = EM.token;

    /* REVIEWS start */

    sapi.getReviews = function(params, data) {
        data = data || {};
        params = params || {};

        return ajax({
            url: params.url || PH.template('/product-feedback/<%= prefix %><%= sef_name %>/pd/<%= pnk %>/reviews/list', {
                prefix: EM.is_supermarket ? 'supermarket/' : '',
                sef_name: params.sef_name,
                pnk: params.pnk
            }),
            type: 'json',
            method: 'get',
            headers: sapiHeaders,
            data: PH.merge({}, tokenData, data),
            form: params.form
        });
    };

    sapi.getProductsWithoutReviews = function(){
        return ajax({
            url: EM.sapi_endpoint + '/users/products-without-reviews',
            type: 'json',
            method: 'get',
            headers: sapiHeaders,
            data: {
                source_id: EM.source_id,
                token: EM.token || EM.user_token
            }
        });
    };

    sapi.voteReview = function(params, data) {
        data = data || {};
        params = params || {};

        return ajax({
            url: PH.template('/product-feedback/<%= sef_name %>/pd/<%= pnk %>/review/<%= review_id %>/vote/add', {
                sef_name: params.sef_name,
                pnk: params.pnk,
                review_id: params.review_id
            }),
            type: 'json',
            method: 'post',
            headers: sapiHeaders,
            data: PH.extend({
                token: EM.token
            }, data),
            form: params.form
        });
    };

    sapi.unvoteReview = function(params, data) {
        data = data || {};
        params = params || {};

        return ajax({
            url: PH.template('/product-feedback/<%= sef_name %>/pd/<%= pnk %>/review/<%= review_id %>/vote/remove', {
                sef_name: params.sef_name,
                pnk: params.pnk,
                review_id: params.review_id
            }),
            type: 'json',
            method: 'delete',
            headers: sapiHeaders,
            data: PH.extend({
                token: EM.token
            }, data),
            form: params.form
        });
    };

    sapi.addReview = function(params, data) {
        data = data || {};
        params = params || {};

        return ajax({
            url: PH.template('/product-feedback/<%= prefix %><%= sef_name %>/pd/<%= pnk %>/review/add', {
                prefix: EM.is_supermarket ? 'supermarket/' : '',
                sef_name: params.sef_name,
                pnk: params.pnk
            }),
            type: 'json',
            method: 'post',
            headers: sapiHeaders,
            data: PH.extend({
                token: EM.token,
                source_id: 7
            }, data),
            form: params.form
        });
    };

    sapi.editReview = function(params, data) {
        data = data || {};
        params = params || {};

        return ajax({
            url: PH.template('/product-feedback/<%= prefix %><%= sef_name %>/pd/<%= pnk %>/review/<%= review_id %>/edit', {
                prefix: EM.is_supermarket ? 'supermarket/' : '',
                sef_name: params.sef_name,
                pnk: params.pnk,
                review_id: params.review_id
            }),
            type: 'json',
            method: 'put',
            headers: sapiHeaders,
            data: PH.extend({
                token: EM.token,
                source_id: 7
            }, data),
            form: params.form
        });
    };

    sapi.addComment = function(params, data) {
        data = data || {};
        params = params || {};

        return ajax({
            url: PH.template('/product-feedback/<%= prefix %><%= sef_name %>/pd/<%= pnk %>/review/<%= review_id %>/comment/add', {
                prefix: EM.is_supermarket ? 'supermarket/' : '',
                sef_name: params.sef_name,
                pnk: params.pnk,
                review_id: params.id
            }),
            type: 'json',
            method: 'post',
            headers: sapiHeaders,
            data: PH.extend({
                token: EM.token,
                source_id: 7
            }, data),
            form: params.form
        });
    };

    sapi.editComment = function(params, data) {
        data = data || {};
        params = params || {};

        return ajax({
            url: PH.template('/product-feedback/<%= prefix %><%= sef_name %>/pd/<%= pnk %>/review/<%= review_id %>/comment/<%= comment_id %>/edit', {
                prefix: EM.is_supermarket ? 'supermarket/' : '',
                sef_name: params.sef_name,
                pnk: params.pnk,
                review_id: params.review_id,
                comment_id: params.comment_id
            }),
            type: 'json',
            method: 'put',
            headers: sapiHeaders,
            data: PH.extend({
                token: EM.token,
                source_id: 7
            }, data),
            form: params.form
        });
    };

    /* REVIEWS stop */


    /* QUESTIONS start */

    sapi.getQuestions = function(params, data) {
        data = data || {};
        params = params || {};

        return ajax({
            url: PH.template('/product-feedback/<%= prefix %><%= sef_name %>/pd/<%= pnk %>/questions/list', {
                prefix: EM.is_supermarket ? 'supermarket/' : '',
                sef_name: params.sef_name,
                pnk: params.pnk
            }),
            type: 'json',
            method: 'get',
            headers: sapiHeaders,
            data: PH.merge({}, tokenData, {
                source_id: 7
            }, data),
            form: params.form
        });
    };

    sapi.addQuestion = function(params, data) {
        data = data || {};
        params = params || {};

        return ajax({
            url: PH.template('/product-feedback/<%= prefix %><%= sef_name %>/pd/<%= pnk %>/question/add', {
                prefix: EM.is_supermarket ? 'supermarket/' : '',
                sef_name: params.sef_name,
                pnk: params.pnk
            }),
            type: 'json',
            method: 'post',
            headers: sapiHeaders,
            data: PH.extend({
                token: EM.token,
                source_id: 7
            }, data),
            form: params.form
        });
    };

    sapi.editQuestion = function(params, data) {
        data = data || {};
        params = params || {};

        return ajax({
            url: PH.template('/product-feedback/<%= prefix %><%= sef_name %>/pd/<%= pnk %>/question/<%= question_id %>/edit', {
                prefix: EM.is_supermarket ? 'supermarket/' : '',
                sef_name: params.sef_name,
                pnk: params.pnk,
                question_id: params.question_id
            }),
            type: 'json',
            method: 'put',
            headers: sapiHeaders,
            data: PH.extend({
                token: EM.token,
                source_id: 7
            }, data),
            form: params.form
        });
    };

    sapi.voteAnswer = function(params, data) {
        data = data || {};
        params = params || {};

        return ajax({
            url: PH.template('/product-feedback/<%= sef_name %>/pd/<%= pnk %>/question/<%= question_id %>/answer/<%= answer_id %>/vote/add', {
                sef_name: params.sef_name,
                pnk: params.pnk,
                question_id: params.question_id,
                answer_id: params.answer_id
            }),
            type: 'json',
            method: 'post',
            headers: sapiHeaders,
            data: PH.extend({
                token: EM.token,
                source_id: 7
            }, data)
        });
    };

    sapi.unvoteAnswer = function(params, data) {
        data = data || {};
        params = params || {};

        return ajax({
            url: PH.template('/product-feedback/<%= sef_name %>/pd/<%= pnk %>/question/<%= question_id %>/answer/<%= answer_id %>/vote/remove', {
                sef_name: params.sef_name,
                pnk: params.pnk,
                question_id: params.question_id,
                answer_id: params.answer_id
            }),
            type: 'json',
            method: 'delete',
            headers: sapiHeaders,
            data: PH.extend({
                token: EM.token,
                source_id: 7
            }, data)
        });
    };

    sapi.addAnswer = function(params, data) {
        data = data || {};
        params = params || {};

        return ajax({
            url: PH.template('/product-feedback/<%= prefix %><%= sef_name %>/pd/<%= pnk %>/question/<%= question_id %>/answer/add', {
                prefix: EM.is_supermarket ? 'supermarket/' : '',
                sef_name: params.sef_name,
                pnk: params.pnk,
                question_id: params.question_id
            }),
            type: 'json',
            method: 'post',
            headers: sapiHeaders,
            data: PH.extend({
                token: EM.token,
                source_id: 7
            }, data),
            form: params.form
        });
    };

    sapi.editAnswer = function(params, data) {
        data = data || {};
        params = params || {};

        return ajax({
            url: PH.template('/product-feedback/<%= prefix %><%= sef_name %>/pd/<%= pnk %>/question/<%= question_id %>/answer/<%= answer_id %>/edit', {
                prefix: EM.is_supermarket ? 'supermarket/' : '',
                sef_name: params.sef_name,
                pnk: params.pnk,
                question_id: params.question_id,
                answer_id: params.answer_id
            }),
            type: 'json',
            method: 'put',
            headers: sapiHeaders,
            data: PH.extend({
                token: EM.token,
                source_id: 7
            }, data),
            form: params.form
        });
    };

    /* QUESTIONS stop */


})(sapi, $.ajax, PH, EM);

var sapi = sapi || {};

(function(sapi, ajax, PH) {

    'use strict';
    var sapitoken = PH.cookie.get('sapi-token') && decodeURIComponent(PH.cookie.get('sapi-token'));

    sapi.saveVoucher = function(params, data) {
        data = data || {};
        params = params || {};

        if (!data.id){ return false; }
        return ajax({
            url: data.id,
            type: 'json',
            method: 'post',
            headers: {
                'X-Request-Source': 'www'
            },
            crossOrigin: true,
            data: PH.extend({
                source_id: 7,
                token: sapitoken
            }, data),
            form: params.form
        });
    };

})(sapi, $.ajax, PH);



var sapi = sapi || {};

(function(sapi, ajax, PH) {

    'use strict';

    sapi.getAdminNotifications = function(params, data) {
        data = data || {};
        params = params || {};

        return ajax({
            url: '/matching-notifications',
            type: 'json',
            method: 'get',
            headers: {
                'X-Request-Source': 'www'
            },
            data: PH.extend({
            }, data),
            form: params.form
        });
    };

})(sapi, $.ajax, PH);



var sapi = sapi || {};

(function(sapi, ajax, PH) {
    'use strict';

    sapi.gdprUpdateStatus = function(params, data) {
        data = data || {};
        params = params || {};

        return ajax({
            url: '/gdpr/customer-status',
            type: 'json',
            method: 'post',
            headers: {
                'X-Request-Source': 'www'
            },
            data: PH.extend({
                source_id: 7,
            }, data),
            form: params.form
        });
    };

    sapi.gdprSaveBirthdate = function(params, data) {
        data = data || {};
        params = params || {};

        return ajax({
            url: '/user/ajax/saveBirthdate',
            type: 'json',
            method: 'post',
            headers: {
                'X-Request-Source': 'www'
            },
            data: PH.extend({
                source_id: 7,
            }, data),
            form: params.form
        });
    };

})(sapi, $.ajax, PH);



var sapi = sapi || {};

(function(sapi, ajax, PH, EM) {

    'use strict';

    sapi.getSupermarketLocalities = function(params, data) {
        data = data || {};
        params = params || {};

        return ajax({
            url: EM.sapi_endpoint + '/supermarket/localities',
            type: 'json',
            method: 'get',
            headers: {
                'X-Request-Source': 'www'
            },
            crossOrigin: true,
            data: PH.extend({
                source_id: 7
            }, data),
            form: params.form
        });
    };

    sapi.getSupermarketDelivery = function(params, data) {
        data = data || {};
        params = params || {};

        return ajax({
            url: EM.sapi_endpoint + '/supermarket/delivery/' + params.locality_id,
            type: 'json',
            method: 'get',
            headers: {
                'X-Request-Source': 'www'
            },
            crossOrigin: true,
            data: PH.extend({
                source_id: 7
            }, data),
            form: params.form
        });
    };

})(sapi, $.ajax, PH, EM);



var sapi = sapi || {};

(function(sapi, ajax, PH, EM) {

    'use strict';

    sapi.getCookiePreferencesRenderEsi = function(params, data) {
        data = data || {};
        params = params || {};

        return ajax({
            url: '/gdpr/render-esi-consent/' + (typeof EM.gdpr_consent === 'number' ? EM.gdpr_consent : ''),
            method: 'get',
            type: 'html',
            headers: {
                'X-Request-Source': 'www'
            },
            data: data,
            form: params.form
        });
    };

    sapi.postCookiePreferences = function(params, data) {
        data = data || {};
        params = params || {};

        return ajax({
            url: '/gdpr/cookie-policy',
            method: 'post',
            type: 'json',
            headers: {
                'X-Request-Source': 'www'
            },
            data: PH.extend({
                source_id: 7
            }, data),
            form: params.form
        });
    };

})(sapi, $.ajax, PH, EM);

var sapi = sapi || {};

(function(sapi, ajax, PH, EM) {

    'use strict';

    sapi.getPacByOffer = function(params, data) {
        data = data || {};
        params = params || {};
        var identifier = params.identifier || EM.product_id;
        var fields = params.fields || {};
        var ref = params.ref || {};

        return ajax({
            url: EM.sapi_endpoint + '/recommendations/by-zone' + (EM.siteModules.profiling_widgets ? '?do_profiling' : ''),
            type: 'json',
            method: 'get',
            crossOrigin: true,
            withCredentials: true,
            headers: {
                'X-Request-Source': 'www'
            },
            data: PH.extend({
                ref: ref,
                zones: params.zone,
                identifier: identifier,
                fields: fields,
                token: EM.user_token,
                source_id: 7
            }, data),
            form: params.form
        });
    };

    sapi.getPacByOfferGrouped = function(params, data) {
        data = data || {};
        params = params || {};
        var identifier = params.identifier || EM.product_id;
        var fields = params.fields || {};

        if (EM.page_type === 'cart'){
            var eabString = 'eab379';
            var eabValue = PH.cookie.get(eabString);
            var req = false;
            if (eabValue){ req = { ab_test: eabString + ',' + eabValue }; }
            if (req){
                data.extra_params = req;
            }
        }

        return ajax({
            url: EM.sapi_endpoint + '/recommendations/by-zone-grouped-by-category' + (EM.siteModules.profiling_widgets ? '?do_profiling' : ''),
            type: 'json',
            method: 'get',
            crossOrigin: true,
            withCredentials: true,
            headers: {
                'X-Request-Source': 'www'
            },
            data: PH.extend({
                fields: fields,
                zones: params.zone,
                identifier: identifier,
                token: EM.user_token,
                source_id: 7
            }, data),
            form: params.form
        });
    };

    sapi.getPacByOfferBoughtTogether = function(params, data) {
        data = data || {};
        params = params || {};
        var pnk = params.pnk || EM.pnk;
        var fields = params.fields || {};
        var vendor_id = params.vendor_id || EM.vendor_id;
        var shop_type = params.display_type || EM.display_type;

        return ajax({
            url: EM.sapi_endpoint + '/products/' + pnk + '/bundle-pac-by-pnk',
            type: 'json',
            method: 'get',
            crossOrigin: true,
            withCredentials: true,
            headers: {
                'X-Request-Source': 'www'
            },
            data: PH.extend({
                fields: fields,
                source_id: 7,
                shop_type: shop_type,
                vendor_id: vendor_id
            }, data),
            form: params.form
        });
    };

    sapi.getPacLivePurchases = function(nocache, position) {
        var data = {
            source_id: 7,
            'positions[]': position,
            identifier: 1,
            page_type: 'homepage'
        };

        if (EM.user_token) {
            data.token = EM.user_token;
        }

        if (EM.siteModules.profiling_widgets) {
            data.gr_reco = PH.cookie.get("gr_reco");
        }

        if (nocache) data.nocache = Date.now();

        return ajax({
            url: EM.sapi_endpoint + '/recommendations/by-slot',
            type: 'json',
            method: 'get',
            crossOrigin: true,
            headers: {
                'X-Request-Source': 'www'
            },
            data: data
        });
    };

    sapi.getRecommendationsByCampaign = function(params) {
        params = params || {};
        return ajax({
            url: EM.sapi_endpoint + '/recommendations/by-campaign/' + params.campaign,
            type: 'json',
            method: 'get',
            crossOrigin: true,
            headers: {
                'X-Request-Source': 'www'
            },
            data: {
                source_id: 7
            }
        });
    };

    sapi.getProductsForFreeShipping = function(params, data) {
        data = data || {};

        var qs = $.param(params || {});
        return ajax({
            url: EM.sapi_endpoint + '/recommendations/by-complete-cart-for-free-delivery?' + qs,
            type: 'json',
            method: 'get',
            crossOrigin: true,
            headers: {
                'X-Request-Source': 'www'
            },
            data: PH.extend({
                source_id: 7,
                nocache: Date.now()
            }, data)
        });
    };

})(sapi, ajax, PH, EM);

var oldSiteAjax = oldSiteAjax || {};

(function(oldSiteAjax, ajax, PH, EM) {

    'use strict';

    oldSiteAjax.addToCart = function(params, data) {
        data = data || {};
        params = params || {};

        return ajax({
            url: params.url,
            type: 'json',
            method: 'post',
            data: data,
            form: params.form
        });
    };

    oldSiteAjax.removeFromCart = function(params, data) {
        data = data || {};
        params = params || {};
        var url = '/shopping/header-cart?lineId='+ (params.line_service ? params.line_service : params.line_id) +'&itemId='+ (params.line_service ? params.line_id : 0) +'&uId=0&act=remove&q=0&ref=del-cart&source=front';

        return ajax({
            url: url,
            type: 'json',
            method: 'post',
            data: PH.extend(params, data),
            form: params.form
        });
    };

    oldSiteAjax.addService = function(params, data) {
        data = data || {};
        params = params || {};

        return ajax({
            url: '/cart/add-extra-modal?ref='+params.ref,
            type: 'json',
            method: 'post',
            data: PH.extend({
                line_id: params.line_id, // addToCart response lineId
                extra_id: params.extra_id, // addToCart response main.services.services.id
                item_id: params.item_id, // addToCart response main.id
                type: 'service'
            }, data),
            form: params.form
        });
    };

    oldSiteAjax.removeService = function(params, data) {
        data = data || {};
        params = params || {};

        return ajax({
            url: '/cart/remove-extra-modal?ref='+params.ref,
            type: 'json',
            method: 'post',
            data: PH.extend({
                line_id: params.line_id, // addToCart response lineId
                item_id: params.extra_id // addToCart response service
            }, data),
            form: params.form
        });
    };

})(oldSiteAjax, $.ajax, PH, EM);





var oldSiteAjax = oldSiteAjax || {};

(function(oldSiteAjax, ajax, PH, EM) {

    'use strict';

    // Modal data
    oldSiteAjax.getDeliveryRegions = function(params, data) {
        data = data || {};
        params = params || {};

        return ajax({
            url: EM.old_site_endpoint + '/product/estimate-modal',
            type: 'json',
            method: 'get',
            data: data,
            form: params.form
        });
    };

    // For delivery tab, data for the second select based on first select
    oldSiteAjax.getDeliveryLocalities = function(params, data) {
        data = data || {};
        params = params || {};

        return ajax({
            url: EM.old_site_endpoint + '/user/localities_list/' + params.regionId,
            type: 'json',
            method: 'get',
            data: PH.extend({
                source: 'front'
            }, data),
            form: params.form
        });
    };

    // For delivery tab, get estimate on second select change
    oldSiteAjax.getCourierEstimate = function(params, data) {
        data = data || {};
        params = params || {};

        return ajax({
            url: EM.old_site_endpoint + '/product/get-estimate',
            type: 'json',
            method: 'post',
            data: PH.extend({
                localityId: params.locality_id,
                type: 'courier',
                productId: params.offer_id
            }, data),
            form: params.form
        });
    };

    // For pickup tab, data for the second select based on first select
    oldSiteAjax.getDeliveryPoints = function(params, data) {
        data = data || {};
        params = params || {};

        return ajax({
            url: EM.old_site_endpoint + '/product/get-delivery-points',
            type: 'json',
            method: 'post',
            data: PH.extend({
                showroom_id: params.showroom_id
            }, data),
            form: params.form
        });
    };

    oldSiteAjax.getDeliveryPointsByRegion = function(params, data) {
        data = data || {};
        params = params || {};

        return ajax({
            url: EM.old_site_endpoint + '/product/get-delivery-points-by-region',
            type: 'json',
            method: 'post',
            data: PH.extend({
                region_id: params.regionId,
                products: params.products
            }, data),
            form: params.form
        });
    };

    // For courier tab, get estimate on second select change
    oldSiteAjax.getShowroomEstimate = function(params, data) {
        data = data || {};
        params = params || {};

        return ajax({
            url: EM.old_site_endpoint + '/product/get-estimate',
            type: 'json',
            method: 'post',
            data: PH.extend({
                showroomId: params.showroom_id,
                type: 'pickup',
                productId: params.offer_id
            }, data),
            form: params.form
        });
    };

})(oldSiteAjax, $.ajax, PH, EM);

var oldSiteAjax = oldSiteAjax || {};

(function(oldSiteAjax, ajax, PH, EM) {

    'use strict';

    oldSiteAjax.getSupermarketModalForLocality = function(params, data) {
        data = data || {};
        params = params || {};

        return ajax({
            url: EM.old_site_endpoint + '/user/update-supermarket-address',
            type: 'json',
            method: 'get',
            data: PH.extend({
                loc_id: params.loc_id
            }, data),
            form: params.form
        });
    };

    oldSiteAjax.setSupermarketAddress = function(params, data) {
        data = data || {};
        params = params || {};

        return ajax({
            url: EM.old_site_endpoint + '/user/update-supermarket-address',
            type: 'json',
            method: 'post',
            data: PH.extend({
                loc_id: params.loc_id
            }, data),
            form: params.form
        });
    };

    oldSiteAjax.getDistrictList = function(params, data) {
        data = data || {};
        params = params || {};

        return ajax({
            url: EM.old_site_endpoint + '/get-district-list',
            type: 'json',
            method: 'get',
            data: data,
            form: params.form
        });
    };

})(oldSiteAjax, $.ajax, PH, EM);





(function () {
  var WidgetTracking = /*#__PURE__*/function () {
    "use strict";

    function WidgetTracking(el, phpSelfData) {
      _classCallCheck(this, WidgetTracking);

      if (!EM.siteModules.google_tag_manager || !EM.is_tracking_enabled) return;

      if (!el) {
        console.log('WidgetTracking require a NodeElement as parameter.');
        return;
      }

      this.el = el;
      this.phpSelfData = phpSelfData || '/recommendationWidgetInViewport';
      this.scenarioIndex = Number(PH.getData(el, 'scenarioIndex') || '0');
      this.recid = PH.getData(el, 'recommendationId') || '';
      this.provider = PH.getData(el, 'trackingEngine') || '';
      this.spid = PH.getData(el, 'sourceProductId') || '';
      this.trackingAlias = PH.getData(el, 'trackingAlias') || '';
      this.scenarioId = PH.getData(el, 'scenarioId') || '';
      this.ecommerce = {
        impressions: []
      };
      this.trackWhenInViewport();
      this.attachEvents();
    }

    _createClass(WidgetTracking, [{
      key: "attachEvents",
      value: function attachEvents() {
        PH.live(this.el, 'mousedown', '.js-card-item a', this.trackProductClick, this, true);
      }
    }, {
      key: "trackWhenInViewport",
      value: function trackWhenInViewport() {
        var _this2 = this;

        var OFFSET = 200;
        PH.onceInViewport(this.el, function () {
          _this2.saveImpressionsData();

          _this2.pushToDataLayer();

          _this2.sendXHRTracking();

          _this2.trackIndividualProducts();

          PH.trigger(EM.dispatcher, 'PHLoggerDone', _this2.el);
        }, {
          rootMargin: "-".concat(OFFSET, "px 0px -").concat(OFFSET, "px 0px")
        });
      }
    }, {
      key: "trackIndividualProducts",
      value: function trackIndividualProducts() {
        if (!EM.siteModules.toggle_rec_product_impression_logging) {
          return;
        }

        var widgetType = this.trackingAlias;

        if (PH.hasClass(this.el, 'ph-carousel')) {
          widgetType = 'carousel';
        }

        switch (widgetType) {
          case 'carousel':
            if (!this.el.getAttribute('data-ads')) {
              EM.trackCarousel(this.el);
            }

            break;

          case 'pac_bundles':
            EM.WidgetTracking.storeProductImpressions(this.getOfferIdsFromSelectorAndAttributeRequestData());
            break;

          case 'automated-compare':
            EM.WidgetTracking.storeProductImpressions(this.getOfferIdsFromSelectorAndAttributeRequestData('.js-card-item[data-offer-id]', 'data-offer-id'));
            break;

          default:
            break;
        }
      }
    }, {
      key: "getOfferIdsFromSelectorAndAttributeRequestData",
      value: function getOfferIdsFromSelectorAndAttributeRequestData() {
        var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "input[name=\"product[]\"]";
        var attribute = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'value';
        var requestString = "".concat(this.provider, ",").concat(this.spid, ",").concat(this.getScenarioNameAndPosition(), ",").concat(this.recid);
        var offerIdEls = PH.qs(selector, this.el);
        var offerIdArray = [];
        offerIdEls.forEach(function (el) {
          var oid = el.getAttribute(attribute);

          if (!EM.WidgetTracking.productImpressionsAlreadyLogged[requestString]) {
            EM.WidgetTracking.productImpressionsAlreadyLogged[requestString] = [];
          }

          if (EM.WidgetTracking.productImpressionsAlreadyLogged[requestString].indexOf(oid) !== -1) {
            return;
          }

          EM.WidgetTracking.productImpressionsAlreadyLogged[requestString].push(oid);
          offerIdArray.push(oid);
        });
        return _defineProperty({}, requestString, offerIdArray.join(','));
      }
    }, {
      key: "getScenarioNameAndPosition",
      value: function getScenarioNameAndPosition() {
        return "pw_".concat(this.trackingAlias, "_pos_").concat(this.scenarioIndex);
      }
    }, {
      key: "trackProductClick",
      value: function trackProductClick(event, element) {
        var scenario = this.el;
        var cardItem = PH.closest(element, '.js-card-item');
        var offerId = PH.getData(cardItem, 'offerId');
        var siblings = PH.qs('.js-card-item', scenario);
        var itemPosition = siblings.indexOf(cardItem);
        var scenarioPosition = this.scenarioIndex;
        var trackData = {
          event: 'widget_productClick',
          pageToken}(),
          ecommerce: {
            click: {
              actionField: {
                list: this.getScenarioNameAndPosition()
              },
              products: [{
                list: this.getScenarioNameAndPosition(),
                id: offerId,
                name: PH.getData(cardItem, 'name') || '',
                position: itemPosition + 1
              }]
            }
          }
        };

        try {
          var productPageEvent = dataLayer.fin});
          trackData.previous_category = productPageEvent.ecommerce.detail.products[0].category;
        } catch (ex) {}

        PH.storage.set("TRKListingProductClick-".concat(offerId), trackData, '5m');
      }
    }, {
      key: "saveImpressionsData",
      value: function saveImpressionsData() {
        var products = PH.qs('.js-card-item', this.el);

        for (var i = 0, l = products.length; i < l; i++) {
          var name = PH.getData(products[i], 'name');
          if (!name) continue;
          var offerId = PH.getData(products[i], 'offerId');
          this.ecommerce.impressions.push({
            name: name,
            id: offerId,
            list: this.getScenarioNameAndPosition(),
            position: i + 1
          });
        }
      }
    }, {
      key: "pushToDataLayer",
      value: function pushToDataLayer() {
        // push undefined in impressions for clean up (to avoid back merging)
        dataLayer.push({
          ecommerce: {
            impressions: undefined
          }
        });
        dataLayer.push({
          event: 'widget_impression_tracking',
          // ec: 'Scroll Recomandari Pagina Produs',
          // ea: {x{EC_27_prod category}x}, TBD
          el: this.getScenarioNameAndPosition(),
          ecommerce: this.ecommerce
        });
      }
    }, {
      key: "sendXHRTracking",
      value: function sendXHRTracking() {
        var requestData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

        if (!requestData) {
          requestData = {
            'X-PHP-Self': this.phpSelfData,
            'X-Scenario-Name-Pos': this.getScenarioNameAndPosition(),
            recid: this.recid,
            provider: this.provider,
            scenario_ID: this.scenarioId
          };

          if (this.spid) {
            requestData.spid = this.spid;
          }
        }

        if (!EM.siteModules.toggle_rec_widget_impression_logging && ['/recommendationWidgetInViewport', '/recommendationWidgetInModalWindow'].indexOf(requestData['X-PHP-Self']) !== -1) {
          return;
        } // This is used also in microsite where we don't have ajax function.
        // Don't change from XMLHttpRequest to ajax


        var xhr = new XMLHttpRequest();
        xhr.open('GET', EM.WidgetTracking.getLoggerUrlForRequestData(requestData), true);
        xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        xhr.send();
      }
    }], [{
      key: "formatParams",
      value: function formatParams(obj) {
        var parentProp = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var pairs = [];

        for (var prop in obj) {
          if (!obj.hasOwnProperty(prop)) {
            continue;
          }

          if (Object.prototype.toString.call(obj[prop]) == '[object Object]') {
            pairs.push(EM.WidgetTracking.formatParams(obj[prop], prop));
            continue;
          }

          var encodedProp = encodeURIComponent(prop);
          var encodedValue = encodeURIComponent(obj[prop]);
          pairs.push(parentProp ? "".concat(parentProp, "[").concat(encodedProp, "]=").concat(encodedValue) : "".concat(encodedProp, "=").concat(encodedValue));
        }

        return pairs.join('&');
      }
    }, {
      key: "storeProductImpressions",
      value: function storeProductImpressions() {
        var offerIdsObject = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var insertIntoRequestObject = function insertIntoRequestObject() {
          var offerIdKeys = Object.keys(offerIdsObject);
          offerIdKeys.forEach(function (item) {
            if (EM.WidgetTracking.productImpressionsRequestData.offer_ids[item]) {
              EM.WidgetTracking.productImpressionsRequestData.offer_ids[item] += ',' + offerIdsObject[item];
              return;
            }

            EM.WidgetTracking.productImpressionsRequestData.offer_ids[item] = offerIdsObject[item];
          });
        };

        var urlPart = EM.WidgetTracking.formatParams(offerIdsObject);
        var loggerUrl = EM.WidgetTracking.getLoggerUrlForRequestData(EM.WidgetTracking.productImpressionsRequestData);

        if (loggerUrl.length + urlPart.length > EM.WidgetTracking.PRODUCT_IMPRESSIONS_MAX_REQUEST_LENGTH) {
          EM.WidgetTracking.getProductImpressionsPromise().then(function () {
            EM.WidgetTracking.productImpressionsRequestData.offer_ids = {};
            insertIntoRequestObject();
          });
        } else {
          insertIntoRequestObject();
        }
      }
    }, {
      key: "getLoggerUrlForRequestData",
      value: function getLoggerUrlForRequestData(requestData) {
        var queryString = EM.WidgetTracking.formatParams(requestData);
        queryString = queryString ? "?".concat(queryString) : '';
        return "/logger.json".concat(queryString);
      }
    }, {
      key: "getProductImpressionsPromise",
      value: function getProductImpressionsPromise() {
        return fetch(EM.WidgetTracking.getLoggerUrlForRequestData(EM.WidgetTracking.productImpressionsRequestData), {
          method: 'GET',
          credentials: 'include',
          keepalive: true,
          headers:{
            "X-Requested-With": "XMLHttpRequest"
          }
        });
      }
    }, {
      key: "sendProductImpressions",
      value: function sendProductImpressions() {
        if (!Object.keys(EM.WidgetTracking.productImpressionsRequestData.offer_ids).length) {
          return;
        }

        EM.WidgetTracking.getProductImpressionsPromise().then(function () {
          return EM.WidgetTracking.productImpressionsRequestData.offer_ids = {};
        });
      }
    }]);

    return WidgetTracking;
  }();

  EM.WidgetTracking = WidgetTracking;
  EM.WidgetTracking.productImpressionsAlreadyLogged = {};
  EM.WidgetTracking.productImpressionsRequestData = {
    "X-PHP-Self": "/recommendationWidgetProductImpressionsAll",
    "X-Action-UA": "ignore_recommendations_impressions",
    "offer_ids": {}
  };
  EM.WidgetTracking.PRODUCT_IMPRESSIONS_MAX_REQUEST_LENGTH = 5000;
  document.addEventListener('visibilitychange'});
  window.addEventListener("pagehide"}, false);
  setInterval(function () {
    EM.WidgetTracking.sendProductImpressions();
  }, 10 * 1000);
})();
(function (EM) {
  'use strict'; // ensuring that hotjar exists

  window.hj = window.hj |};

  var AdminNotificationsManager = {
    fetchRequest: null,
    notifications: {},
    KEY: 'campaign_notifications',
    DATA: {},
    EXCEPTIONS: [{
      //selector to search in uri: event triggered
      selector: '#trigger-newsletter-modal',
      event: 'em-trigger-newsletter-modal'
    }, {
      //notification type: event triggered
      type: 'voucher',
      event: 'em-trigger-voucher-notification'
    }, {
      //selector to gdpr in uri: event triggered
      selector: '#trigger-gdpr-notification',
      event: 'em-trigger-gdpr-notification'
    }],
    addToDataLayer: function addToDataLayer(obj) {
      dataLayer.push({
        event: 'gaEvent',
        ec: 'tooltip',
        ea: "".concat(obj.type, "_").concat(obj.id, "_").concat(obj.name),
        el: "".concat(obj.action, " ").concat(obj.type, "_").concat(obj.id, "_").concat(obj.name)
      });
    },
    onShowNotificationTracking: function onShowNotificationTracking(obj) {
      hj("tagRecording", ["BO notification open"]);
      obj.action = 'Display';
      AdminNotificationsManager.addToDataLayer(obj);
    },
    onCloseNotificationTracking: function onCloseNotificationTracking(obj, isCloseButton) {
      if (!isCloseButton) {
        hj("tagRecording", ["BO notification nonbtn close"]);
      } else {
        hj("tagRecording", ["BO notification btn close"]);
        obj.action = 'Close';
        AdminNotificationsManager.addToDataLayer(obj);
      }
    },
    disableNotificationForShown: function disableNotificationForShown(notificationId) {
      var expireDate = new Date();
      AdminNotificationsManager.DATA[notificationId] = 1;
      PH.cookie.set(AdminNotificationsManager.KEY, JSON.stringify(AdminNotificationsManager.DATA), false, '/', EM.cookie_domain);
    },
    removeNotificationFromStorage: function removeNotificationFromStorage(notificationId) {
      if (!Object.keys.length(AdminNotificationsManager.DATA)) {
        AdminNotificationsManager.getStorageData();
      }

      delete AdminNotificationsManager.DATA[notificationId];
      PH.cookie.set(AdminNotificationsManager.KEY, JSON.stringify(AdminNotificationsManager.DATA), false, '/', EM.cookie_domain);
    },
    getStorageData: function getStorageData() {
      try {
        AdminNotificationsManager.DATA = JSON.parse(PH.cookie.get(AdminNotificationsManager.KEY)) || {};
      } catch (e) {}
    },
    displayNotifications: function displayNotifications(response) {
      if (response.matching_notifications.code != 200 || !response.matching_notifications.data) {
        AdminNotificationsManager.clearNotifications();
        return;
      }

      AdminNotificationsManager.getStorageData(); // removing all notifications not part of the response

      var newIds = response.matching_notifications.data.items.reduc}, []);

      for (var id in AdminNotificationsManager.notifications) {
        if (!AdminNotificationsManager.notifications.hasOwnProperty(id)) continue;

        if (newIds.indexOf(parseInt(id, 10)) === -1) {
          AdminNotificationsManager.clearNotification(id);
        }
      }

      response.matching_notifications.data.items.forEach(function (n) {
        // was notification displayed previously this session
        if (AdminNotificationsManager.DATA[n.id]) {
          return;
        } // is notification already on screen


        if (AdminNotificationsManager.notifications[n.id]) {
          return;
        } // trigger exceptions


        for (var i in AdminNotificationsManager.EXCEPTIONS) {
          var exceptionObject = AdminNotificationsManager.EXCEPTIONS[i];

          if (exceptionObject.selector && n.link && n.link.uri && n.link.uri.indexOf(exceptionObject.selector) !== -1 || exceptionObject.type && n.link && n.link.type === 'voucher') {
            PH.trigger(EM.dispatcher, exceptionObject.event, n);
            return;
          }
        }

        var link = n.link && n.link.type !== 'none' ? n.link : null;
        var ntfName = n.campaign || n.name;
        var type = n.notification_type && n.notification_type.type;

        if (link) {
          var cleanLink = link.uri,
              hash = "";

          if (link.uri.indexOf("#") !== -1) {
            var linkParts = link.uri.split("#");
            cleanLink = linkParts[0];
            hash = "#" + linkParts[1];
          }

          var sep = cleanLink.indexOf('?') === -1 ? '?' : '&';
          cleanLink += "".concat(sep, "ref=tooltip_").concat(type, "_").concat(encodeURIComponent("".concat(n.id, "_").concat(ntfName)));
          link.uri = cleanLink + hash;
        }

        var dataLayerObj = {
          id: n.id,
          name: ntfName,
          type: type
        };
        var isRibbon = n.display_type === 1;
        var notificationData = {
          id: n.id,
          message: isRibbon ? n.content.text : n.content.html,
          title: isRibbon ? n.name : n.name_html,
          link: link,
          image: n.image ? EM.getSize(n.image.resized_images, '78x78') : null,
          position: 'bottom right',
          ttl: false,
          effect: EM.notifications_effect || 'slide',
          container: EM.notifications_container,
          notification_type: type,
          onOpen: AdminNotificationsManager.onShowNotificationTracking.bind(this, dataLayerObj),
          onClose: AdminNotificationsManager.onCloseNotificationTracking.bind(this, dataLayerObj)
        };
        var notificationComponent = isRibbon ? EM.NotificationRibbon : EM.Notification;
        AdminNotificationsManager.notifications[n.id] = new notificationComponent(notificationData);
      });
    },
    fetchNotifications: function fetchNotifications() {
      // Disable notifications from BO site modules
      if (EM.hideNotifications || EM.siteModules && !EM.siteModules.matching_notifications) {
        return false;
      }

      if (AdminNotificationsManager.fetchRequest) {
        AdminNotificationsManager.fetchRequest.abort();
      }

      AdminNotificationsManager.fetchRequest = window.sapi.getAdminNotifications().then(AdminNotificationsManager.displayNotifications).alway});
    },
    clearNotifications: function clearNotifications() {
      for (var key in AdminNotificationsManager.notifications) {
        if (!AdminNotificationsManager.notifications.hasOwnProperty(key)) continue;
        AdminNotificationsManager.clearNotification(key);
      }
    },
    clearNotification: function clearNotification(id) {
      if (!AdminNotificationsManager.notifications[id]) return;

      if (AdminNotificationsManager.notifications[id]) {
        AdminNotificationsManager.notifications[id].remove();
      }

      delete AdminNotificationsManager.notifications[id];
    }
  };
  EM.AdminNotificationsManager = AdminNotificationsManager;
})(EM);
/**
 *  Creates a responsive modal box.
 *
 *  >   Instantiating the modal box class will not also open it! You will need to call the {@link Modal#open .open()}
 *      method yourself in order to do that.
 *
 *  ```javascript
 *  // setting up a modal box
 *  var myModal = new PH.Modal({
 *      className  : 'foo',
 *      content    : '<p>Hello</p>',
 *      title      : 'My modal box',
 *      hash       : 'hash'
 *  });
 *
 *  // open it
 *  myModal.open();
 *
 *  // remember that having the hash in the URL doesn't open the modal box!
 *  // you will have to take care yourself of that
 *  if (window.location.toString().indexOf('#hash') !== -1) {
 *      myModal.open();
 *  }
 *  ```
 *
 *  <br>Generated HTML structure
 *
 *  ```xml
 *  <div class="ph-modal modal fade in value_of_className" tabindex="-1">
 *      <div class="modal-dialog">
 *          <div class="modal-content">
 *              <div class="modal-header">
 *                  <button class="close"><i class="em em-close"></i></button>
 *                  <h4 class="modal-title"><!-- title goes here --></h4>
 *              </div>
 *              <!-- content goes here -->
 *          </div>
 *      </div>
 *  </div>
 *  ```
 *  <br>
 *  @param  {object}    properties  Use this to customize the modal box. See below the properties which can be used.
 *
 *  |   Property        |   Type        |   Description
 *  |-------------------|---------------|-------------------------------------------------------------------------------
 *  |   `className`     |   *string*    |   A class name to be added to the modal box's container <div>
 *  |   `closeButton`   |   *boolean*   |   Setting this to `false` will hide the `close` button from the header.
 *  |                   |               |   *Is ignored if `showHeader` is set to `false`*
 *  |                   |               |   Default is `true`
 *  |   `content`       |   *mixed*     |   Can be a string representing valid HTML to be used as the modal box's content, or an `id` of an existing `<script type="text/template">` element from where to fetch the modal box's content.
 *  |   `fullscreen`    |   *boolean*   |   Setting this to `true` will make the modal box to take up the entire screen when the window's width is less than `992px`
 *  |   `hash`          |   *string*    |   Hash to add to the URL when the modal box opens.
 *  |                   |               |   * Note that the presence of the hash in the URL doesn't open the modal box! You will have to take care yourself of that *
 *  |                   |               |   Here's some code to get you going for doing that
 *  |                   |               |   if (window.location.toString().indexOf('#hash') !== -1) {<br>myModal.open();<br>}
 *  |                   |               |   Default is no hash (an empty string).
 *  |   `showHeader`    |   *boolean*   |   Setting this to `false` will hide the modal box's header entirely.
 *  |                   |               |   * Note that if hidden, both `titleClose` and `closeButton` properties are disregarded *
 *  |                   |               |   Default is `true`
 *  |   `size`          |   *string*    |   The default size of the modal box on large screens.
 *  |                   |               |   Possible values are `modal-lg`, `modal-md` and `modal-sm` which will set the modal's width to `900px`, `600px` and `300px` respectively.
 *  |                   |               |   Whatever the initial size, the modal box's width will be `600px` when window size is less than `992px`  and will have `width:auto` from `767px` and below.
 *  |                   |               |   Default is an empty string (meaning a width of `600px`)
 *  |   `title`         |   *string*    |   The tile to show to the modal box's header.
 *  |                   |               |   *Is ignored if `showHeader` is set to `false`*
 *  |   `titleClose`    |   *boolean*   |   Setting this to `true` will make the modal box close when the title is clicked.
 *  |                   |               |   *Is ignored if `showHeader` is set to `false`*
 *  |                   |               |   Default is `false`
 *
 *  @class      Modal
 */
PH.Modal = PH.defclass("Modal", PH.Widget, function(ctor, proto) {

    "use strict";

    var history = window.history;

    ctor.options = {
        _title        : [ "title"        , null  ],
        _content      : [ "content"      , null  ],
        _size         : [ "size"         , ""    ],
        _showHeader   : [ "showHeader"   , true  ],
        _hash         : [ "hash"         , null  ],
        _closeButton  : [ "closeButton"  , true  ],
        _fullscreen   : [ "fullscreen"   , false ],
        _titleClose   : [ "titleClose"   , false  ],
        _force        : [ "force"        , false ]
    };


    var BACKDROP = null;
    var VSCROLL = null;
    var CURRENT_DLG = null;

    function backdrop(insert) {
        if (!BACKDROP) {
            BACKDROP = PH.createDOM("div", { className: "modal-backdrop fade" });
        }
        if (insert) {
            document.body.appendChild(BACKDROP);
        }
        return BACKDROP;
    }

    proto._initElement = function() {
        var content = this._content;
        if (/^#/.test(content)) {
            content = document.querySelector(content);
            if (content.tagName == "SCRIPT") {
                content = content.innerHTML;
            }
        }
        var autoInit = false;
        if (typeof content == "string") {
            autoInit = true;
            content = [ "*html", content ];
        }
        var self = this;
        self._on_mouseDown = self._on_mouseDown.bind(self);
        self._on_keyDown = self._on_keyDown.bind(self);
        self._on_popState = self._on_popState.bind(self);
        var div = PH.createDOM(
            [ "div", { className: "ph-modal pho-modal modal fade" + (self._fullscreen ? ' ph-modal-fullscreen' : ''), tabIndex: "-1" },
              [ "div", { className: "modal-dialog " + self._size },
                [ "div", { className: "modal-content" },
                  (self._showHeader ?
                   [ "div", { className: "modal-header" },
                     (self._closeButton ? [ "button", { className: "pho-btn btn btn-link close" },
                                            [ "i", { className: "em em-close" } ] ] : null),
                     (self._title ? [ "h4", { className: "modal-title" + (self._titleClose ? " close" : "") },
                                      [ "*text", self._title ] ] : null) ]
                   : null),
                  content ] ] ]
        );
        self._element = div;
        if (self._className) {
            self.addClass(self._className);
        }
        document.body.appendChild(self._element);
        var close = self.close.bind(self);
        PH.slice(div.querySelectorAll(".close, [data-dismiss]")).forEac});
        if (autoInit) {
            PH.Widget.autoInit(div);
        }
    };

    /**
     *  Opens a previously initialized modal box.
     *
     *  @instance
     *  @alias      open
     *  @memberof   Modal
     *
     *  @example
     *
     *  // initialize a modal box
     *  var myModal = new PH.Modal({
     *      className  : 'foo',
     *      content    : '<p>Hello</p>',
     *      title      : 'My modal box'
     *  });
     *
     *  myModal.open();
     *
     *  // alternatively you can use chaining
     *  var myModal = new PH.Modal({
     *      className  : 'foo',
     *      content    : '<p>Hello</p>',
     *      title      : 'My modal box'
     *  }).open();
     */
    proto.open = function() {
        if (CURRENT_DLG && CURRENT_DLG._element) {
            CURRENT_DLG.once("close", this.open.bind(this));
            CURRENT_DLG.close();
            return;
        }
        var self = this;
        CURRENT_DLG = self;
        self._element.style.display = "block";
        self._element.focus();

        VSCROLL = (window.pageYOffset || document.body.scrollTop)  - (document.body.clientTop || 0);
        document.body.style.top = (VSCROLL * -1) + 'px';

        backdrop(true);
        setTimeout(function(){
            PH.addClass(backdrop(), "in");
            PH.addClass(document.body, "modal-open");
            self.addClass("in");
            var sb = PH.getScrollbarSize().width;
            document.body.style.paddingRight = sb + "px";
            PH.on(self._element, "click", self._on_mouseDown);
            PH.on(document, "keydown", self._on_keyDown);
            self.trigger('open');
        }, 10);
        self.relayoutCarousels();

        if (self._hash && history.pushState) {
            history.pushState(null, "", "#" + self._hash);
            PH.on(window, "popstate", self._on_popState);
        }
    };

    /**
     *  Closes a modal box.
     *
     *  @instance
     *  @alias      close
     *  @memberof   Modal
     *
     *  @example
     *
     *  // initialize a modal box
     *  var myModal = new PH.Modal({
     *      className  : 'foo',
     *      content    : '<p>Hello</p>',
     *      title      : 'My modal box'
     *  });
     *
     *  myModal.close();
     */
    proto.close = function() {
        CURRENT_DLG = null;
        var self = this;
        PH.removeClass(document.body, "modal-open");
        self.delClass("in");
        PH.removeClass(backdrop(), "in");
        document.body.style.paddingRight = "0px";
        window.scrollTo(0, VSCROLL);
        document.body.style.top = "";
        this._eventsOff();
        PH.trigger(self._element, 'PHModalClose');
        setTimeout(function(){
            PH.remove(backdrop());
            self._element.style.display = "none";
            if (self._hash && history.replaceState) {
                history.replaceState(null, "", window.location.pathname + window.location.search);
            }

            self.trigger("close");
        }, 300);
        if (self._hash && history.pushState) {
            PH.off(window, "popstate", self._on_popState);
        }
    };

    proto.getElement };

    proto._eventsOff = function() {
        PH.off(this._element, "click", this._on_mouseDown);
        PH.off(document, "keydown", this._on_keyDown);
    };

    proto._quickClose = function() {
        CURRENT_DLG = null;
        var self = this;
        self._eventsOff();
        self.delClass("in");
        setTimeou}, 300);
    };

    proto._on_popState = function(ev) {
        this.close();
    };

    proto._on_mouseDown = function(ev) {
        if (!this._force &&
            !PH.closest(ev.target, ".modal-dialog") &&
            !ev.target.parentNode.querySelector('.gm-style-iw') &&              //  mobile
            !ev.target.parentNode.parentNode.querySelector('.gm-style-iw') &&   //  desktop
            this._closeButton
        ) {
            this.close();
        }
    };

    proto._on_keyDown = function(ev) {
        if (!this._force && this._closeButton && ev.keyCode == 27 /* Escape */) {
            this.close();
        }
    };

    PH.on(window, "load", function(){
        setTimeout(function(){
            var style = document.createElement("style");
            var sb = PH.getScrollbarSize();
            style.type = "text/css";
            var css = [
                ".modal-open .adjust-on-modal { padding-right: " + sb.width + "px; }",
                ".ph-modal { padding-left: " + sb.width + "px; }",
                ".modal-open .ph-modal { padding-left: 0 } "
            ].join("\n");
            style.innerHTML = css;
            document.getElementsByTagName("head")[0].appendChild(style);
        }, 500);
    });

});

PH.ModalTrigger = PH.defclass("ModalTrigger", PH.Modal, function(ctor, proto){

    "use strict";

    proto._initElement = function() {
        var self = this;
        self._from.addEventListener("click"});
    };

    proto.open = function() {
        var dlg = this._modal;
        if (!dlg) {
            dlg = this._modal = new PH.Modal(this);
        }
        dlg.open();
    };

});

PH.StarRating = (function(document, getChildIndex) {

    "use strict";

    if (EM.page_type === 'shopping_history') return;

    var StarRating = function(el, obj) {

        this.el = PH.element(el);
        obj = obj || {};
        if (typeof obj.onSelect !== 'function') obj.onSelect = PH.noop;
        if (typeof obj.onRatingChange !== 'function') obj.onRatingChange = PH.noop;
        this.options = obj;

        this.currentlyActive = PH.q('.active', this.el);
        this.rating = 0;
        this.updateRating();
        this.saveRating();

        this.addListeners();
    };

    StarRating.prototype = {
        constructor: StarRating,
        addListeners: function() {
            var self = this;
            var stars = PH.qs('[data-rating]', this.el);

            stars.forEac});

            this.el.addEventListener('click', function(evt){
                if (evt.target.classList.contains('em')) {

                    self.makeActive(evt.target);
                }
            });

            function onMouseEnter(event) {
                if (self.currentlyActive) {
                    self.currentlyActive.classList.remove('active');
                }
                self.options.onRatingChange(PH.getData(event.target, 'rating'));
            }
            function onMouseLeave() {
                if (self.currentlyActive) {
                    self.currentlyActive.classList.add('active');
                }
                self.options.onRatingChange(self.rating);
            }
        },
        makeActive: function(element) {
            if (this.currentlyActive) {
                this.currentlyActive.classList.remove('active');
            }

            element.classList.add('active');
            this.currentlyActive = element;
            this.updateRating();
            this.saveRating();
            this.options.onSelect(this.rating);
        },
        updateRating: function() {
            if (this.currentlyActive) {
                this.rating = PH.getData(this.currentlyActive, 'rating');
            }
        },
        setRating: function(param) {
            var stars = PH.qs('[data-rating]', this.el);
            var _self = this;
            stars.forEach(function(star) {
                if (PH.getData(star, 'rating') === param) {
                    _self.makeActive(star);
                }
            });
            this.rating = param;
            this.saveRating();
        },
        saveRating: function() {
            PH.q('input', this.el).value = this.rating;
        },
        onSelect: function(callback) {
            if (typeof callback === 'function') {
                this.options.onSelect = callback;
            }
        }
    };

    StarRating.init = function(where) {
        var containers = PH.qq('.star-rating.star-rating-input', where);
        for (var i = 0, len = containers.length; i < len; i++) {
            new StarRating(containers[i]);
        }
    };

    StarRating.init(document);
    return StarRating;

})(document, PH.whichChild);
(function () {
    PH.on(EM.dispatcher, 'AddToFavorites', function (event) {
      if (!event.data) {
        return;
      }

      switch (event.data.type) {
        case 'beforeAdd':
          PH.trigger(EM.dispatcher, 'OneSignal', 'show');
          break;

        case 'afterAdd':
          PH.trigger(EM.dispatcher, 'NavbarDropdowns', {
            type: 'add-to-favorites',
            response: event.data.response
          });
          break;

        case 'afterRemove':
          PH.trigger(EM.dispatcher, 'NavbarDropdowns', {
            type: 'remove-from-favorites',
            response: event.data.response
          });
          break;
      }
    });
  })();
(function $TWEEG(n){var t=n.bool,r=n.escape_html,a=n.filter,e=n.out,s=n.register,l=n.index;s("@Components/Notification/template.html.twig",function(){var s=n.t({$main:function(n){var s=n.image,i=n.icon_class,c=n.class_outer,o=n.title,d=n.content,u=n.link,f=n.secondaryLink;return e([(s=a.default(s,!1),""),(i=a.default(i,!1),""),'<div class="',c,'">\r\n    <div class="ns-box-inner">\r\n        ',t(s)||t(i)?e(['\r\n            <div class="thumbnail-wrapper">\r\n                <div class="thumbnail">\r\n                    ',t(s)?e(['\r\n                        <img src="',r(s),'" alt="Image">\r\n                    ']):t(i)?e(['\r\n                        <i class="',r(i),'"></i>\r\n                    ']):"","\r\n                </div>\r\n            </div>\r\n        "]):"",'\r\n        <div class="ns-content">\r\n            ',t(a.default(o,!1))?e(['\r\n                <h4 class="ns-content-title">',o,"</h4>\r\n            "]):"","\r\n            ",d,"\r\n            ",t(a.default(u,!1))||t(a.default(f,!1))?e(['\r\n                <p class="ns-content-footer">\r\n                    ',t(a.default(u,!1))?e(['\r\n                        <a data-ntf="close" href="',r(l(u,"uri")),'" target="',r(l(u,"target")),'" class="',r(l(u,"class_name")),'">',r(l(u,"link_name")),"</a>\r\n                    "]):"","\r\n                    ",t(a.default(f,!1))?e(['\r\n                        <a data-ntf="close" href="',r(l(f,"uri")),'" target="',r(l(f,"target")),'" class="',r(l(f,"class_name")),'">',r(l(f,"link_name")),"</a>\r\n                    "]):"","\r\n                </p>\r\n            "]):"",'\r\n        </div>\r\n        <button class="close" data-ntf="close"><i class="em em-close"></i></button>\r\n    </div>\r\n</div>\r\n'])}});return s})})(EM.TMPL);
(function (EM, PH, window) {
    var Notification = function Notification(options) {
        this.options = PH.extend({
            // position
            position : 'top left', // TO DO
            // the image
            // this will have precedence over the image set by setting the "type" attribute and icon attribute
            image : false,
            // this will have precedence over the image set by setting the "type" attribute
            icon : false,
            // the video (will overwrite the image setting). Requires plyr video player.
            video : false,
            // optional title
            title: null,
            // the message
            message : 'Does this effect make me look fat?',
            // optional link
            link: null,
            // effect: slide, thumbslide
            effect : 'slide',
            // possible values are success|danger|warning
            // will add class ns-type-success, ns-type-danger, ns-type-warning
            // no icon will be show if a different value is specified (unless overridden by the image attribute, that is)
            type : '',
            // if the user doesn´t close the notification then we remove it
            // after the following time
            ttl : 6000,
            className: '',
            // available screen size:
            // possible values are "all" or any combination of xs, sm, md, lg
            viewport : 'all',
            // callbacks
            onClose : function () { return false; },
            onOpen }
        }, options);
        this._init();
        this.show();
    };
    Notification.prototype._init = function _init (){
        // create HTML structure

        this.position = this.options.position.split(' '); // Break string into array

        if(this.position.length != 2 || ["top", "bottom"].indexOf(this.position[0]) === -1 || ["left", "right"].indexOf(this.position[1]) === -1) {
            // Check if array matches a basic condition
            console.log(this.position);
            console.error("--- A notification's position option can only take a combination of two elements in a specific order ---");
            return false;
        }

        this.containerClass = 'ns-wrap-' + this.position.join('-');

        if (EM.notifications_effect) this.options.effect = EM.notifications_effect;

        if (EM.notifications_container) {
            this.containerClass = EM.notifications_container;
        } else {
            if (this.checkContainer(this.options.position)) {
                this.container = this.getContainer(this.options.position);
            } else {
                this.container = PH.createDOM(
                    [ "div", { className: this.containerClass }]
                );
                document.body.insertBefore( this.container, document.body.firstChild );
                Notification.nsWrapper[this.options.position] = this.containerClass;
            }
        }

        // let's see where the notification should be hidden
        // basically is the diference between the array below and the supplied array (whatever remains, is hidden)

        var viewports = ['xs', 'sm', 'md', 'lg'],
            provided_viewports = this.options.viewport.split(' ').m }),
            position, i;

        if (provided_viewports[0] == 'all') {
            viewports = [];
        } else {
            for (i in provided_viewports) {
                if ((position =  viewports.indexOf(provided_viewports[i])) > -1) {
                    viewports.splice(position, 1);
                }
            }
        }

        var ltype = this.options.type.toLowerCase();
        var map = {
            'success': 'em em-check',
            'warning': 'em em-question',
            'danger': 'em em-error_fill',
            'error': 'em em-error_fill'
        };

        this.ntf = PH.node(EM.TMPL.exec('@Components/Notification/template.html.twig',{
            class_outer: 'ns-box ns-effect-' + this.options.effect + ' ns-type-' + this.options.type + (viewports.length ? ' hidden-' + viewports.join(' hidden-') : '') + ' ' + this.options.className,
            image: this.options.image,
            icon_class: this.options.icon || (ltype in map && map[ltype]),
            title:  this.options.title,
            content: this.options.message,
            link: this.options.link && {
                uri: this.options.link.uri || '',
                target: this.options.link.target || '_self',
                class_name: this.options.link.className ? this.options.link.className : this.options.link.type === 'link' ? '' : 'pho-btn btn btn-primary btn-sm',
                link_name: this.options.link.name || ''
            },
            secondaryLink: this.options.secondaryLink && {
                uri: this.options.secondaryLink.uri || '',
                target: this.options.secondaryLink.target || '_self',
                class_name: this.options.secondaryLink.className ? this.options.secondaryLink.className : this.options.secondaryLink.type === 'link' ? '' : 'pho-btn btn btn-primary btn-sm',
                link_name: this.options.secondaryLink.name || ''
            }
        }));

        this.containerElem = document.querySelector('.'+this.containerClass);
        this.containerElem.insertBefore( this.ntf, this.containerElem.firstChild );

        // append to body or the element specified in options.wrapper
        //this.options.wrapper.insertBefore( this.ntf, this.options.wrapper.firstChild );

        // dismiss after [options.ttl]ms
        var self = this;

        if(this.options.ttl) { // checks to make sure ttl is not set to false in notification initialization
            this.dismissttl = setTimeou }, this.options.ttl );
        }

        // init events
        this._initEvents();
    };
    Notification.prototype._initEvents = function _initEvents (){
        var self = this;
        // dismiss notification
        PH.live(self.ntf, 'click', '[data-ntf="close"]', function (event, element) {
            self.dismiss(PH.hasClass(element, 'close'));
        });
    };
    Notification.prototype.show = function show (){
        var self = this;
        this.active = true;
        setTimeou }, 25 );

        // callback
        if (typeof this.options.onOpen === 'function')
            this.options.onOpen.call(this);
    };
    Notification.prototype.dismiss = function dismiss (isCloseButton){
        var self = this;
        this.active = false;
        clearTimeout( this.dismissttl );
        this.ntf.classList.remove('ns-show');

        if (typeof this.options.onClose === 'function')
            this.options.onClose(isCloseButton);

        if (this.options.id){
            PH.trigger(EM.dispatcher, Notification.Events.AFTER_CLOSE_NOTIFICATION, {id: this.options.id});
        }
        // after animation ends remove ntf from the DOM
        var onEndAnimationFn = function (ev) {
            setTimeout( function () {
                if (self.ntf.parentNode){
                    self.ntf.parentNode.removeChild(self.ntf);
                }
                //self.containerElem.removeChild(self.ntf);
            }, 1000 );
        };
        onEndAnimationFn();
    };
    Notification.prototype.remove };
    Notification.prototype.getContainer = function getContainer (position) {
        return document.querySelector('.' + Notification.nsWrapper[position]);
    };
    Notification.prototype.checkContainer };

    Notification.nsWrapper = {
        "top left": null,
        "top right": null,
        "bottom left": null,
        "bottom right": null
    };

    Notification.Events = {
        AFTER_CLOSE_NOTIFICATION: 'pho_after_close_notification'
    };

	// Add to global namespace
	EM.Notification = Notification;
})(EM, PH, window);

(function (EM, PH) {
  if (!window.IntersectionObserver) {
    return;
  } // This event is triggered when product carousels are initialized
  // (look for _com_pac-carousels.js).  Install tracker that logs
  // when individual product cards enter the view via logger.json.
  // We're only interested in rec_59 for now.


  PH.on(EM.dispatcher, "PHCarouselWidgetProductsLoaded", function (ev) {
    var carouselElement = ev.data;
    if (!PH.hasClass(carouselElement, "ph-widget")) return false;
    var recid = PH.getData(carouselElement, "recommendationId");
    var ads = PH.getData(carouselElement, 'ads');

    if (ads) {
      // give it some time to initialize, and start tracking
      // individual cards only when it gets into view.
      setTimeout(function () {
        var observer = new IntersectionObserver(function (entries) {
          if (entries[0].isIntersecting) {
            trackCarousel(carouselElement);
            observer.disconnect();
          }
        });
        observer.observe(carouselElement);
      }, 250);
    }
  });

  var loggedIds = {};

  function trackCarousel(carouselElement) {
    var carousel = carouselElement.PH_Widget;

    if (!carousel) {
      return;
    }

    var scrollArea = carousel._scroller;
    var cards = carousel.getCards();
    var options = {
      root: scrollArea,
      rootMargin: "10px",
      threshold: 1
    };
    var visibleCards = [];
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          addCard(entry.target);
        } else if (entry.intersectionRatio <= 0.1) {
          removeCard(entry.target);
        }
      });
    }, options);
    cards.forEach(function (card) {
      return observer.observe(card);
    });
    carousel.on({
      destroy: function destroy() {
        observer.disconnect();
      },
      reloa }
    });

    function addCard(card) {
      if (visibleCards.indexOf(card) < 0) {
        visibleCards.push(card);
        triggerRequest();
      }
    }

    function removeCard(card) {
      var pos = visibleCards.indexOf(card);

      if (pos >= 0) {
        visibleCards.splice(pos, 1);
        triggerRequest();
      }
    }

    var timer = null;
    var trackingAlias = PH.getData(carouselElement, "trackingAlias") || '';
    var scenarioIndex = PH.getData(carouselElement, "scenarioIndex") || '0';
    var recommendationId = PH.getData(carouselElement, "recommendationId") || '';
    var trackingEngine = PH.getData(carouselElement, "trackingEngine") || '';
    var sourceProductId = PH.getData(carouselElement, "sourceProductId") || '';

    function triggerRequest() {
      var requestString = "".concat(trackingEngine, ",").concat(sourceProductId, ",pw_").concat(trackingAlias, "_pos_").concat(scenarioIndex, ",").concat(recommendationId);
      clearTimeout(timer);
      timer = setTimeout(function () {
        var newIds = [];
        var newAids = [];
        visibleCards.forEach(function (card) {
          var offerId = PH.getData(card, "offerId");

          if (!offerId) {
            return;
          }

          var aid = PH.getData(card, "aid");

          if (!loggedIds[requestString]) {
            loggedIds[requestString] = [];
          }

          if (loggedIds[requestString].indexOf(offerId) < 0) {
            newIds.push(offerId);
            loggedIds[requestString].push(offerId);

            if (aid) {
              newAids.push(aid);
            }
          }
        });
        if (newAids.length) {
          requestData = {
            "X-PHP-Self": "/recommendationWidgetProductImpressions",
            "X-Scenario-Name-Pos": "pw_".concat(trackingAlias, "_pos_").concat(scenarioIndex),
            "recid": recommendationId,
            "provider": trackingEngine,
            "spid": sourceProductId,
            "offer_ids": newIds.join(","),
            "aids": newAids.join(",")
          };
          ajax({
            url: "/logger.json",
            method: "GET",
            data: requestData,
            headers:{
              "X-Requested-With": "XMLHttpRequest"
            }
          });
        } else if (newIds.length) {
          EM.WidgetTracking.storeProductImpressions(_defineProperty({}, requestString, newIds.join(',')));
        }

        visibleCards = [];
      }, 500);
    }
  }

  EM.trackCarousel = trackCarousel;
})(EM, PH);
var EM = EM || {};

EM.ABTest = (function(document, window, PH, ajax) {

    var ABTest = {
        showEmptyCartFavoritesWidget: function(){
            if (EM.pageType !== 'cart' || EM.locale !== 'ro'){
                return;
            }

            this.mustDisplayEmptyCartFavoritesWidget = 1;

            var emptyCartContainer = PH.q('#empty-cart');
            if (!emptyCartContainer){
                return;
            }

            var body = PH.q('body'),
                favProductsWidget = PH.q('.widget-favorite-products-carousel'),
                favProductsCarousel = PH.q('.js-favorite-products-carousel', favProductsWidget),
                emptyCartPrimaryBtn = PH.q('.empty-cart-primary-btn', emptyCartContainer),
                emptyCartSecondaryBtn = PH.q('.empty-cart-secondary-btn', emptyCartContainer),
                animatedIcons;

            PH.addClass(body, 'show-empty-cart-favorites-widget');

            if (favProductsWidget && favProductsCarousel.children.length){
                PH.Widget.autoInit(favProductsWidget);
            } else {
                PH.remove(favProductsWidget);
            }

            PH.removeClass(emptyCartPrimaryBtn, 'btn-primary');
            PH.addClass(emptyCartPrimaryBtn, 'btn-default');

            if (!EM.is_mobile){
                PH.addClass(emptyCartPrimaryBtn, 'btn-lg');
                PH.addClass(emptyCartSecondaryBtn, 'btn-lg');
                animatedIcons = PH.qq('#empty-cart > .ic');
                for (var i in animatedIcons){
                    PH.remove(animatedIcons[i]);
                }
            } else {
                animatedIcons = PH.qq('#empty-cart > .icon-curtain');
                for (var i in animatedIcons){
                    PH.remove(animatedIcons[i]);
                }
            }
        },
        showCartPacCarousels: function(){
            if (EM.pageType !== 'cart') return;

            var cartProductsPage = PH.q('#cartProductsPage');
            if (!cartProductsPage) return;

            EM.ABTest.cartPacCarouselsEnabled = true;

            var cartLines = cartProductsPage.querySelectorAll('.cart-line:not(.pac-carousel-ab-test-enabled) .line-item.main-product.display-carousel-widget');
            for (var j = 0, clen = cartLines.length; j < clen; j++){
                var cl = PH.closest(cartLines[j], '.cart-line');
                PH.addClass(cl, 'pac-carousel-ab-test-enabled');
                var widget = PH.q('.js-pac-carousel', cl);
                new EM.WidgetTracking(widget);
            }
            PH.Widget.autoInit(cartProductsPage);
            PH.trigger(window, 'resize');
        },
        gdprBannerVariation: function(tplName){
            var tplPath = "@Components/ABTest/GDPRBanner/" + tplName + ".html.twig";
            if (!EM.GDPRCookieBanner || !EM.TMPL.get(tplPath)){
                return;
            }
            EM.GDPRCookieBanner.TEMPLATE_PATH = tplPath;
            PH.addClass(document.body, ("gdpr-banner-variation-" + tplName));
        }
    }

    return ABTest;
})(document, window, PH, $.ajax);

/*
*   This script initializes the recommendation widgets in the page with various data;
*   it will take on more responsibilites as recommendation widgets are refactored
*/
(function () {
    'use strict';

    // assigning position in page data to all scenarios
    var scenariosInPage = PH.slice(document.querySelectorAll('.js-recommendation-carousel'));
    scenariosInPage.forEach(function (element, index) { return PH.setData(element, 'scenarioIndex', index + 1); });
})();

(function $TWEEG(t){var n=t.bool,i=t.escape_html,a=t.filter,s=t.out,o=t.register,e=t.string,r=t.index;o("@Components/WidgetFavoritePickupPoint/templates/main.html.twig",function(){var o=t.t({$main:function(t){var o=t.point,c=t.isRecommended,v=t.favoritePointId,d=t.preview;return s([(o=a.default(o,{}),""),(c=a.default(c,!1),""),(v=a.default(v,null),""),(d=a.default(d,{}),""),n(r(o,"id"))?s(['<div class="fav-section-main text-center">',s(r(o,"id")==v?['<div class="fav-section-desc fav-section-feedback">',a.trans("You have chosen %point% as your favorite pickup point",{"%point%":"<div class='fav-section-title'><span class='icon-favorite'></span> <strong>"+e(r(o,"name"))+"</strong></div>"}),"</div>"]:[s(n(c)?['<div class="fav-section-title mrg-btm-xs">',a.trans("Hey, %point% is right next to you",{"%point%":"<strong>"+e(r(o,"name"))+"</strong>"}),'</div>\n\t\t        <div class="fav-section-desc">',i(a.trans("Save it as Favorite pickup point and you can use it easily at the next order")),"</div>"]:['<div class="fav-section-title mrg-btm-xs">',a.trans("Save %point% as Favorite pickup point",{"%point%":"<strong>"+e(r(o,"name"))+"</strong>"}),'</div>\n\t\t        <div class="fav-section-desc">',i(a.trans("Your favorite point can be used easily at the next order")),"</div>"]),'<img alt="TY" src="',i(a.default(r(d,"www"),"")),'" class="fav-section-img hidden-xs" />\n\t\t\t<img alt="TY" src="',i(a.default(r(d,"mob"),"")),'" class="fav-section-img visible-xs" />\n\n\t\t\t<div class="action-container mrg-top-xs mrg-btm-sm">\n\t\t\t\t<button class="btn btn-primary mrg-hrz-xs js-wdgt-fav-point-save">',i(a.trans("Save as favorite pickup point")),'</button>\n\t\t\t\t<button class="btn btn-default mrg-hrz-xs js-mc-modal-trigger">',i(a.trans("Choose other pickup point")),"</button>\n\t\t\t</div>"]),"</div>"]):""])}});return o}),o("@Components/WidgetFavoritePickupPoint/templates/secondary.html.twig",function(){var o=t.t({$main:function(t){var o=t.favoritePoint,c=t.point,v=t.isRecommended,d=t.favoritePointId;return s([(o=a.default(o,{}),""),(c=a.default(c,{}),""),(v=a.default(v,!1),""),(d=a.default(d,null),""),n(r(c,"id"))?s(['<div class="fav-section-secondary">',s(r(c,"id")==d?["<div>",a.trans("You have chosen %point% as your favorite pickup point",{"%point%":"<span class='icon-favorite'></span> <strong>"+e(r(c,"name"))+"</strong>"}),"</div>"]:['<div class="strong mrg-btm-xs">',i(a.trans("Save point as favorite pickup point")),'</div>\n\t\t\t<div class="mrg-btm-sm">\n\t\t\t\t',a.trans("Do you wish to replace your favorite pickup point %old_point% with %point%?",{"%old_point%":"<strong>"+e(r(o,"name"))+"</strong>","%point%":"<strong>"+e(r(c,"name"))+"</strong>"}),'\n\t\t    </div>\n\n\t\t\t<div class="action-container">\n\t\t\t\t<button class="btn btn-default js-wdgt-fav-point-save">',i(a.trans("Replace as favorite pickup point")),"</button>\n\t\t\t</div>"]),"</div>"]):""])}});return o})})(EM.TMPL);
(function (EM) {
    var base = "//" + (EM.CDN) + "/layout/ro/static-upload";
    var previewImages = {
        "ro": {
            "www": (base + "/poza_harta_TY.PNG"),
            "mob": (base + "/ty_m_poza.jpg"),
        },
        "bg": {
            "www": (base + "/bg_ty_shw2_w.png"),
            "mob": (base + "/m_ty_shw_bg.jpg"),
        },
        "hu": {
            "www": (base + "/hu_ty_shw2_w.png"),
            "mob": (base + "/m_ty_shw_hu.jpg"),
        },
        "pl": {
            "www": (base + "/pl_ty_w.png"),
            "mob": (base + "/pl_ty_m.jpg"),
        },
    };
    
    var FavPointWidget = function FavPointWidget(args) {
        var this$1 = this;

        this.mainContainer  = args.main      || null;
        this.secondaryContainer = args.secondary || null;

        this.point       = args.point|| {};
        this.location    = args.location || {};
            this.favoritePointId = args.favorite || localStorage.favorite_delivery_point;

        this.addEventListeners();
        this.initMap();
        if (!this.point.id) this.getRecommendedPoint();

        PH.on(EM.dispatcher, 'PHFavoritePointLoaded', function (ev) {
            this$1.favoritePointId = ev.data && ev.data.id ? ev.data.id : null;
            this$1.favoritePoint   = ev.data && ev.data.name ? ev.data : {};
            this$1.render();
            });

        PH.on(EM.dispatcher, "MapComponentDidUpdate", function (ev) {
            if (ev.data.point.id) this$1.point = ev.data.point;
            this$1.favoritePointId = localStorage.favorite_delivery_point;
            this$1.isRecommended = false;
            this$1.render();
            });

        this.render();
    };

    FavPointWidget.prototype.getRecommendedPoint = function getRecommendedPoint () {
            var this$1 = this;

        sapi.getNearestPoint(this.location).then(function (response) {
            if (!response.data) return;
            this$1.point = response.data.delivery_point;
            this$1.isRecommended = true;
            this$1.MC.setState({point: this$1.point});
            PH.trigger(EM.dispatcher, 'PHEmphasizePointLoaded', response.data);
            this$1.render();
        });
    };

    FavPointWidget.prototype.initMap = function initMap () {
        this.MC = new EM.MapComponent({
            data: {
                point: this.point,
                locality: {
                    id: this.location.locality
                },
                region: {
                    id: this.location.region
                }
            },
            flags: {
                hasModal: true,
                hasMap: true,
                hasLocationSelector: true,
                hasDiscoveryModule: true,
                hasGeoLocation: true,
                hasPointsList: true,
                hasZipCode: true,
                hasRecommendedPoint: true,
                hasFavoritePoint: true,
                triggerUpdate: true,
                selectPointOnDemand: false,
                updateLocationOnLS: true,
            },
            requests: {
                getRegions: sapi.getRegionsWithCoordinates,
                getLocalities: sapi.getCitiesFormated,
                getPoints: sapi.getPointsByLocation,
            },
            params: {
                modalTitle: EM.trans("Choose favorite pickup point"),
            }
        });
    };

    FavPointWidget.prototype.addEventListeners = function addEventListeners () {
        PH.live(document, "click", ".js-wdgt-fav-point-save", this.save.bind(this));
        PH.live(document, "click", ".js-wdgt-fav-point-dismiss", this.clear.bind(this));
    };

    FavPointWidget.prototype.clear };

    FavPointWidget.prototype.save = function save () {
            var this$1 = this;

        sapi.setFavoritePoint({ common_key: this.point.id }).then(function () {
            PH.trigger(EM.dispatcher, "PHFavoritePointLoaded", this$1.point);
            this$1.render();
            sapi.getFavoritePoint().then(function (response) {
                  if ( response === void 0 ) response = {};

              var point = response.data;
              if (!point) return;
              this$1.MC.setState({ 
                point: point, 
                locality: point.locality, 
                region: point.region,
                selectionType: "user_selection"
              });
              this$1.MC.updateLocationOnLS(this$1.MC.state);
            });
        });
    };

    FavPointWidget.prototype.render = function render () {
        var data = {
            favoritePoint: this.favoritePoint,
            point: this.point,
            favoritePointId: this.favoritePointId,
            isRecommended: this.isRecommended,
            preview: previewImages[EM.locale],
        };

        if (this.mainContainer) this.renderMain(data);
        if (this.secondaryContainer) this.renderSecondary(data);
    };

    FavPointWidget.prototype.renderMain = function renderMain (data) {
            if ( data === void 0 ) data = {};

        this.mainContainer.innerHTML = EM.TMPL.exec('@Components/WidgetFavoritePickupPoint/templates/main.html.twig', data);
    };

    FavPointWidget.prototype.renderSecondary = function renderSecondary (data) {
            if ( data === void 0 ) data = {};

        this.secondaryContainer.innerHTML = EM.TMPL.exec('@Components/WidgetFavoritePickupPoint/templates/secondary.html.twig', data);
    };

    EM.WidgetFavoritePickupPoint = FavPointWidget;
})(EM);
var initMarketingResearch = function () {
    var KEY_HIDE_MARKETING_RESEARCH = 'OHMRB_HIDE';
    var panel = PH.q(".marketing-research-box");
    if (!panel) { return; }

    sapi.newsletterGetSubscriptionContactTypes = function(params, data) {
        data = data || {};
        params = params || {};

        return ajax({
            url: EM.sapi_endpoint + "/newsletter/subscription/collection",
            type: "json",
            method: "get",
            data: PH.merge({}, data, {source_id: 7, token: EM.user_token}),
            form: params.form
        });
    };

    sapi.newsletterSubscribe = function(params, data) {
        data = data || {};
        params = params || {};

        return ajax({
            url: EM.sapi_endpoint + "/newsletter/subscription/collection",
            type: "json",
            method: "post",
            data: PH.merge({}, data, {source_id: 7, token: EM.user_token}),
            form: params.form
        });
    };

    var sendTypeIds = function(dataTypeIds) {
        dataTypeIds = dataTypeIds || [];

        var requestData = {};
        requestData.subscriptions = dataTypeIds.map(function(item) {
            return { email: EM.user_data.email, source: "Order_history", tracking: "email", status: item.status, type_id: item.id };
        });
        sapi.newsletterSubscribe({ form: panel }, requestData)
            .then(function(response) {
                if (response.data.success){
                    new EM.Notification({ message  : EM.trans("Your changes were saved. Thank you!"), type : "success", position : "top right" });
                    PH.q('.order-hist-box.marketing-research-box').classList.add('hidden');
                    PH.q('.order-hist-box.marketing-research-box-registered').classList.remove('hidden');
                    return;
                }
                EM.showFailNotification();
            });
    };

    PH.live(document, "click", ".js-marketing-research-btn", function(event, btn) {
        PH.stopEvent(event);
        dataLayer.push({event: 'gaEvent', ec: 'website_sandbox_events', ea: 'ViewMarketResearchWidgetOrderHistory', el: undefined});
        var parentId = btn.getAttribute('data-parent-id');
        sapi.newsletterGetSubscriptionContactTypes({form: panel}, {parent_id: parentId, email: EM.user_data.email}).then(function(response) {
            if (response.data) {
                var requestData = [];
                for (var item in response.data) {
                    requestData.push({id:item, status: 1});
                }
                sendTypeIds(requestData);
            }
        });
    });

    PH.live(document, "click", '.js-marketing-research-later', function(e) {
        PH.stopEvent(e);
        PH.cookie.set(KEY_HIDE_MARKETING_RESEARCH, '1', 15, '/', EM.cookie_domain || EM.getDomain(window.location.hostname));
        PH.q('.order-hist-box.marketing-research-box').classList.add('hidden')
    })
};


document.addEventListener("DOMContentLoaded", function() {
    initMarketingResearch();

    PH.onceInViewport(PH.q('.marketing-research-box' });
});

(function (PH) {
    var KEY = "products_without_reviews";
    var loaded = false;

    var WidgetProductFeedback = /*#__PURE__*/function () {
        "use strict";

        function WidgetProductFeedback() {
            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            _classCallCheck(this, WidgetProductFeedback);

            this.options = options;
            this.el = options.el;
            this.init();
        }

        _createClass(WidgetProductFeedback, [{
            key: "init",
            value: function init() {
                var _this = this;
                
                if (!this.el) return;
                var products = this.options.items ? WidgetProductFeedback.parseProducts(this.options.items) : WidgetProductFeedback.getFromLocalStorage();

                if (products && products.length) {
                    this.render(products);
                } else {
                    sapi.getProductsWithoutReviews().then(function (response) {
                        var products = WidgetProductFeedback.parseProducts(response.data);
                        if (products && products.length) _this.render(products);
                    });
                }

                var onProductRemoved = function onProductRemoved(event) {
                    products = WidgetProductFeedback.parseProducts(event.data);

                    _this.render(products);
                };

                var onHideProductPermanently = function onHideProductPermanently(event, element) {
                    PH.stopEvent(event);
                    WidgetProductFeedback.hideProductPermanently(PH.getData(element, 'productId'));
                };

                var onHideProductTemporarily = function onHideProductTemporarily(event, element) {
                    PH.stopEvent(event);
                    WidgetProductFeedback.hideProductTemporarily(PH.getData(element, 'productId'));
                };

                if (!loaded) {
                    PH.on(EM.dispatcher, "productRemoved", onProductRemoved);
                    PH.live(this.el, 'click', '.js-pf-hide-permanently', onHideProductPermanently);
                    PH.live(this.el, 'click', '.js-pf-hide-temporarily', onHideProductTemporarily);
                    loaded = true;
                }
            }
        }, {
            key: "render",
            value: function render(products) {
                var _this2 = this;

                var wrapper = PH.closest(this.el, ".placeholder-product-feedback-widget");

                if (!products || !products.length) {
                    if (wrapper) PH.addClass(wrapper, "hidden");
                    return;
                }

                if (wrapper) PH.removeClass(wrapper, "hidden");
                this.el.innerHTML = EM.TMPL.exec('@Components/WidgetProductFeedback/template.html.twig', PH.merge({
                    products: products,
                    page_type: EM.page_type
                }, this.options));
                PH.qs(".rating-container", this.el).forEach(WidgetProductFeedback.generateStarRating);
                setTimeout(function () {
                    PH.Widget.autoInit(_this2.el);
                    var carousel = PH.q(".ph-carousel", wrapper);
                    if (!carousel) return;

                    OUT: {
                        var first = PH.q(".star-rating", carousel);
                        if (!first) break OUT;
                        PH.addClass(first, "pulse");
                        carousel = carousel.PH_Widget;
                        carousel.on("dot-change", function (pageIndex, page) {
                            if (page) {
                                var stars = PH.q(".star-rating", page.card);
                                if (!stars) return;
                                PH.removeClass(stars, "pulse");
                                stars.offsetWidth; // jshint ignore:line

                                PH.addClass(stars, "pulse");
                            }
                        });
                    }
                });
            }
        }], [{
            key: "hideProductTemporarily",
            value: function hideProductTemporarily(product) {
                PH.trigger(EM.dispatcher, "hideProductTemporarily", {
                    product: product
                });
            }
        }, {
            key: "unhideProduct",
            value: function unhideProduct(product) {
                PH.trigger(EM.dispatcher, "unhideProduct", {
                    product: product
                });
            }
        }, {
            key: "hideProductPermanently",
            value: function hideProductPermanently(product) {
                PH.trigger(EM.dispatcher, "hideProductPermanently", {
                    product: product
                });
            }
        }, {
            key: "parseProducts",
            value: function parseProducts(pwr) {
                if (!pwr || !pwr.products || !pwr.products.length) return []; // the _parsed flag is there so we can make sure it's not
                // already "parsed" :-/

                return pwr.products.map(function (p) {
                    return p._parsed ? p : {
                        _parsed: true,
                        id: p.id,
                        image: p.image.resized_images[0].url,
                        product_name: p.name,
                        doc_product_id: p.id,
                        pnk: p.part_number_key,
                        add_review_url: '/product-feedback/' + p.sef_name + '/pd/' + p.part_number_key + '/review/add',
                        is_hidden_from_products_without_reviews: p.flags.is_hidden_from_products_without_reviews,
                        is_soft_hidden: p.flags.is_soft_hidden,
                        allow_feedback: p.flags.allow_feedback
                    };
                });
            }
        }, {
            key: "getFromLocalStorage",
            value: function getFromLocalStorage() {
                var LS;

                try {
                    LS = JSON.parse(localStorage.getItem(KEY));
                } catch (ex) {}

                if (LS && EM.customer_id == LS.data.userId && EM.last_review == LS.data.lastModified) {
                    return LS.data.products;
                }
            }
        }, {
            key: "generateStarRating",
            value: function generateStarRating(container) {
                // STAR RATING IN PAGE
                var info = PH.q('.review-add-info', container),
                    text = PH.q('.review-add-text', container),
                    textArray = EM.ratingMessages || [];

                if (info && text) {
                    text.innerHTML = textArray[0] || '';
                    var starRating = new PH.StarRating(PH.q('.star-rating.star-rating-input', info), {
                        onRatingChang },
                        onSelect: function onSelect(rating) {
                            var productReviewModal = EM.ProductReviewModal;

                            productReviewModal.open({
                                productPnk: PH.q('input', starRating.el).dataset.modalProductPnk,
                                replaceData: { rating: rating },
                                refreshPageOnFormSubmit: true,
                            });

                            var handleProductReviewModalClose = function() {
                                productReviewModal.off('close', handleProductReviewModalClose);
    
                                starRating.reset();
                                text.innerHTML = textArray[0];
                            };
    
                            productReviewModal.on('close', handleProductReviewModalClose);
                        }
                    });
                }
            }
        }]);

        return WidgetProductFeedback;
    }();

    EM.WidgetProductFeedback = WidgetProductFeedback;
})(PH);
PH.merge(EM.translations, {});
(function $TWEEG(r){var t=r.bool,e=r.escape_html,n=r.filter,i=r.for,s=r.include,o=r.merge,a=r.out,c=r.register,d=r.index,l=r.global;c("@Components/OrderHistoryProductSearch/templates/container.html.twig",function(){var t=r.t({$main:function(r){return a(['<div class="order-history-product-search-container hidden">\r\n    <div class="header d-flex justify-space-between align-items-center pad-hrz-xs">\r\n        <i class="em em-search navbar-icon"></i>\r\n        <input type="text" class="js-order-history-product-search-mobile" placeholder="',e(n.trans("order history search by product")),'">\r\n        <i class="em em-close"></i>\r\n    </div>\r\n\r\n    <div class="body">\r\n        <div class="content-container"></div>\r\n        <div class="load-more-trigger mrg-hrz-xs mrg-sep-xs">\r\n        </div>\r\n    </div>\r\n</div>\r\n'])}});return t}),c("@Components/OrderHistoryProductSearch/template.html.twig",function(){var t=r.t({$main:function(r){return a(['<div class="ohps-container">\r\n    <div class="order-history-product-search-input-container">\r\n        <div class="input-container">\r\n            <i class="em em-search"></i>\r\n            <input type="text" name="order_history_product_search" class="js-order-history-product-search" autocomplete="off" placeholder="',e(n.trans("order history search by product")),'"/>\r\n            <i class="em em-close hidden"></i>\r\n        </div>\r\n    </div>',s("@Components/OrderHistoryProductSearch/templates/container.html.twig",o({},r)),"</div>\r\n"])}});return t}),c("@Components/OrderHistoryProductSearch/templates/item.html.twig",function(){var i=r.t({$main:function(r){var i,s=r.item;return a([(s=n.default(s,[]),""),(i=n.default(n.getSize(d(d(s,"image"),"resized_images"),"80x80"),""),""),t(s)?a(['<a href="/history/shoppingdetails/',e(d(s,"order_id")),'?ref=search_in_order_history" class="item-container d-flex gtm_HJBXGptirz">\r\n        <div class="thumb mrg-hrz-xs mrg-sep-xs gtm_HJBXGptirz">\r\n            <img src="//',e(l("CDN")),'/layout/all/images/placeholder.jpg" data-src="',e(i),'" alt="',e(d(s,"product_name")),'" class="lozad gtm_HJBXGptirz">\r\n        </div>\r\n\r\n        <div class="content d-flex flex-direction-column mrg-hrz-xs mrg-sep-xs gtm_HJBXGptirz">\r\n            <div class="name font-semi-bold gtm_HJBXGptirz">',e(d(s,"product_name")),'</div>\r\n            <div class="price font-semi-bold gtm_HJBXGptirz">',n.moneyFormat(d(d(s,"price"),"current")),'</div>\r\n            <div class="text-muted font-size-sm mrg-top-xs gtm_HJBXGptirz">',e(n.dateFormat(d(s,"order_date"),"F")),'</div>\r\n            <div class="status font-semi-bold gtm_HJBXGptirz">',d(s,"status_text"),"</div>\r\n        </div>\r\n    </a>"]):""])}});return i}),c("@Components/OrderHistoryProductSearch/templates/items.html.twig",function(){var t=r.t({$main:function(r){var t=r.items;return a([(t=n.default(t,[]),""),i(t,function(e,n){return e?a([s("@Components/OrderHistoryProductSearch/templates/item.html.twig",o({},r,{loop:e,item:n,items:t}))]):""})])}});return t}),c("@Components/OrderHistoryProductSearch/templates/no-results.html.twig",function(){var t=r.t({$main:function(r){return a(['<div class="no-results-container d-flex flex-direction-column align-items-center mrg-top-lg mrg-btm-lg">\r\n    <div class="thumb"><img src="//',e(l("CDN")),'/layout/ro/static-upload/user_account_sad_fridge.png" alt="no products"/></div>\r\n    <div class="title font-bold mrg-top-xs">',e(n.trans("order history no result")),'</div>\r\n    <div class="info">',e(n.trans("order history please check search term")),"</div>\r\n</div>\r\n"])}});return t})})(EM.TMPL);

(function (PH, EM) {
    var isXs = window.innerWidth < PH.globals.viewportBreakpoints.sm;

    var OrderHistoryProductSearch = /*#__PURE__*/function () {
        "use strict";

        function OrderHistoryProductSearch(options) {
            _classCallCheck(this, OrderHistoryProductSearch);

            this.container = PH.q('.ohps-container');
            this.responseContainer = PH.q('.order-history-product-search-container', this.container);
            this.closeButton = PH.q('.order-history-product-search-input-container .em-close', this.container);
            this.contentContainer = PH.q('.content-container', this.container);
            this.triggerGetMore = PH.q('.load-more-trigger', this.container);
            this.inputElement = PH.q('.js-order-history-product-search', this.container);
            this.inputElementXs = PH.q('.js-order-history-product-search-mobile', this.container);
            this.body = PH.q('.body', this.container);
            this.hasMore = 1;
            this.items = [];
            this.query = '';
            this.options = PH.extend({
                min_length: 3,
                // min input length
                limit: 10,
                // max items to show,
                offset: 0 // starting from

            }, options);
            this.registerEvents();
        }

        _createClass(OrderHistoryProductSearch, [{
            key: "isValidQuery",
            valu }
        }, {
            key: "fetchItems",
            value: function fetchItems() {
                var _this = this;

                if (!this.hasMore) return;
                sapi.getOrderHistoryProducts({}, {
                    search_text: this.query,
                    page: {
                        limit: this.options.limit,
                        offset: this.options.offset
                    }
                }).then(function (response) {
                    _this.items = [];

                    if (response.data.length) {
                        response.data.forEa });
                        _this.options.offset += response.data.length;
                    }

                    if (_this.items.length < _this.options.limit || response.data.length == 0 && _this.items.length > 0) {
                        _this.hasMore = 0;

                        _this.triggerGetMore.classList.add('hidden');
                    }

                    _this.render();
                }).alwa });

                if (!this.items && PH.isVisible(this.container)) {
                    this.close();
                }
            }
            /**
             * Hide items container
             */

        }, {
            key: "close",
            value: function close() {
                if (isXs) {
                    PH.q('body').style.overflowY = 'visible';
                }

                this.responseContainer.classList.remove('show');
                this.responseContainer.classList.add('hidden');
            }
            /**
             * Show items Container
             */

        }, {
            key: "open",
            value: function open() {
                var _this2 = this;

                if (!this.query && !isXs) {
                    return;
                }

                this.responseContainer.classList.remove('hidden');
                this.responseContainer.classList.add('show');

                if (isXs) {
                    PH.q('body').style.overflowY = 'hidden';
                    setTimeout(function () {
                        _this2.inputElementXs.focus();
                    }, 150);
                }

                var smartAppBanner = PH.q('.smart-app-banner');

                if (smartAppBanner) {
                    smartAppBanner.classList.add('hidden');
                }
            }
        }, {
            key: "clearContent",
            value: function clearContent() {
                this.contentContainer.innerHTML = '';
                this.body.style.height = 'auto';
            }
        }, {
            key: "reset",
            value: function reset() {
                this.inputElement.value = '';
                this.inputElementXs.value = '';
                this.query = '';
                this.items = [];
                this.hasMore = 0;
                this.options.offset = 0;
                this.triggerGetMore.classList.remove('hidden');
                this.clearContent();
                this.close();
            }
            /**
             * render items and append to
             */

        }, {
            key: "render",
            value: function render() {
                var html;

                if (this.items == 0 && !PH.qs('.order-history-product-search-container a', this.container).length) {
                    this.triggerGetMore.classList.add('hidden');
                    html = PH.node(EM.TMPL.exec('@Components/OrderHistoryProductSearch/templates/no-results.html.twig'));
                    dataLayer.push({
                        event: 'gaEvent',
                        ec: 'website_sandbox_events',
                        ea: 'OrderSearchWidget_SearchNoResults',
                        el: undefined
                    });
                    this.clearContent();
                } else {
                    html = PH.node(EM.TMPL.exec('@Components/OrderHistoryProductSearch/templates/items.html.twig', {
                        items: this.items
                    }));
                    dataLayer.push({
                        event: 'gaEvent',
                        ec: 'website_sandbox_events',
                        ea: 'OrderSearchWidget_SearchWithResults',
                        el: undefined
                    });
                }

                if (html) this.contentContainer.appendChild(html);
                PH.LazyImg(this.responseContainer);
            }
        }, {
            key: "registerEvents",
            value: function registerEvents() {
                var _this3 = this;

                if (!isXs) {
                    PH.on(this.inputElement, 'focus', function () {
                        if (!PH.isVisible(_this3.responseContainer)) {
                            _this3.open();
                        }
                    });
                } else {
                    PH.on(this.inputElement, 'click });
                } // on click outside div and container is visible => hide element


                window.addEventListener('click', function (e) {
                    if (!isXs && !e.target.closest('.ohps-container') && [].indexOf.call(e.target.classList, 'js-order-history-product-search') === -1 && [].indexOf.call(e.target.classList, 'js-order-history-product-search-mobile') === -1) {
                        _this3.close();
                    }
                });
                PH.on(PH.qs('.em-close', this.container), 'click', function () {
                    _this3.reset();

                    _this3.closeButton.classList.add('hidden');
                });
                [this.inputElement, this.inputElementXs].forEach(function (item) {
                    PH.on(item, 'input', PH.debounce(function (e) {
                        if (_this3.query != e.target.value) {
                            _this3.clearContent();

                            _this3.query = e.target.value;
                            _this3.items = [];
                            _this3.hasMore = 1;
                            _this3.options.offset = 0;

                            _this3.triggerGetMore.classList.remove('hidden');
                        }

                        _this3.closeButton.classList.add('hidden');

                        PH.removeLoaderFrom(_this3.body);

                        if (_this3.isValidQuery()) {
                            _this3.closeButton.classList.remove('hidden');

                            _this3.clearContent();

                            if (!PH.isVisible(_this3.responseContainer)) {
                                _this3.open();
                            }

                            PH.addLoaderTo(_this3.responseContainer);

                            _this3.fetchItems();
                        }

                        if (!_this3.isValidQuery() && !isXs) {
                            _this3.close();
                        }
                    }, 500));
                });
                this.inputElementXs.addEventListener('keypress });
                var observer = new IntersectionObserver(function (entries) {
                    entries.forEach(function (entry) {
                        if (entry.isIntersecting && PH.isVisible(_this3.contentContainer) && _this3.items.length > 0 && _this3.hasMore) {
                            PH.addLoaderTo(_this3.triggerGetMore);

                            _this3.fetchItems();
                        }
                    });
                }, {
                    root: this.responseContainer,
                    threshold: 0.5
                });
                observer.observe(this.triggerGetMore);
                window.addEventListener('resize', function () {
                    if (isXs != window.innerWidth < PH.globals.viewportBreakpoints.sm) {
                        isXs = window.innerWidth < PH.globals.viewportBreakpoints.sm;

                        _this3.reset();
                    }
                });
            }
        }]);

        return OrderHistoryProductSearch;
    }();

    EM.OrderHistoryProductSearch = OrderHistoryProductSearch;
})(PH, EM);

sapi.getOrderHistoryProducts = function () {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return ajax({
        url: "".concat(EM.sapi_endpoint, "/orders/search-products"),
        type: 'json',
        method: 'get',
        crossOrigin: true,
        headers: {
            'X-Request-Source': 'www',
            'X-Tokens': EM.token
        },
        data: PH.extend({
            source_id: 7
        }, data)
    });
};

window.EM = window.EM || {};

(function (EM, PH) {

    if (!PH){
        return false;
    }

    var LiveagentButton = function LiveagentButton(buttonElSelector, options) {
        this.button = PH.q(buttonElSelector);
        if (!this.button || !options.agentId || !window.liveagent){
            return false;
        }

        this.options = {
            salesForceUrl: 'https://d.la1-c2-frf.salesforceliveagent.com/chat',
            organisationId: '5720Y000000kLON',
            deploymentId: '00D0Y000002IYwU',
            showChatButtonDelay: 2000,
            chatButtonExpandDelay: 500,
            chatButtonCollapseDelay: 5000,
            hideAfterStartChat: true,
            enableLogging: false,
            showClass: 'show'
        };

        PH.merge(this.options, options);

        this.btnShown = false;
        this.displayedFirstTime = false;

        this.attachLiveAgentEvents();
        this.attachEvents();
        this.initLiveAgent();
    };
    LiveagentButton.prototype.attachLiveAgentEvents = function attachLiveAgentEvents (){
        var self = this;

        window.liveagent.showWhenOnline(this.options.agentId, this.button);

        window.liveagent.addButtonEventHandler(this.options.agentId, function(e){
            switch(e){
                case window.liveagent.BUTTON_EVENT.BUTTON_AVAILABLE:
                    PH.removeClass(self.button, 'hidden');
                    if (self.button.nodeName === 'BUTTON'){
                        self.button.disabled = false;
                    }
                    if (!self.displayedFirstTime){
                        setTimeo },self.showChatButtonDelay);
                        return;
                    }
                    if (!self.btnShown){
                        self.showLiveChatBtn();           
                    }      
                    if (self.options.onBtnAvailable){
                        self.options.onBtnUnavailable();
                    }              
                    break;
                case window.liveagent.BUTTON_EVENT.BUTTON_UNAVAILABLE:                    
                    PH.removeClass(self.button, self.options.showClass);                
                    if (self.options.onButtonUnavailable){
                        self.options.onButtonUnavailable.call(self);
                    } else {
                        PH.addClass(self.button, 'hidden');
                    }
                    if (self.button.nodeName === 'BUTTON'){
                        self.button.disabled = true;
                    }
                    self.btnShown = false;
                    if (self.options.onBtnUnavailable){
                        self.options.onBtnUnavailable();
                    }
                    break;
            }
        });
    };
    LiveagentButton.prototype.attachEvents = function attachEvents (){
            var this$1 = this;

        PH.on(this.button,'click',function (e) {
            e.preventDefault();
            this$1.defaultStartChatHandler();
            return false;
        });
    };

    LiveagentButton.prototype.defaultStartChatHandler = function defaultStartChatHandler (){
        if (this.options.onBeforeStartChat && !this.options.onBeforeStartChat()){
            return false;
        }
        window.liveagent.startChat(this.options.agentId);
        if (this.options.onAfterStartChat){
            this.options.onAfterStartChat();
        }
        if (this.options.hideAfterStartChat){
            PH.removeClass(this.button, this.options.showClass);
            var notificationsBottomRight = PH.q('.ns-wrap-bottom-right');
            if (notificationsBottomRight){
                PH.removeClass(notificationsBottomRight, 'liveagent-chat-bottom-modifier');
            }
        }
    };

    LiveagentButton.prototype.initLiveAgent = function initLiveAgent (){
        if (this.options.enableLogging){
            window.liveagent.enableLogging();
        }
        window.liveagent.init(this.options.salesForceUrl, this.options.organisationId, this.options.deploymentId);
    };

    LiveagentButton.prototype.showLiveChatBtn = function showLiveChatBtn (){
        var notificationsBottomRight = PH.q('.ns-wrap-bottom-right');
        if (notificationsBottomRight){
            PH.addClass(notificationsBottomRight, 'liveagent-chat-bottom-modifier');
        }
        PH.addClass(this.button,this.options.showClass);        
        if (this.options.onShowChatButton){
            this.options.onShowChatButton();
        }                            
        this.btnShown = true;
        this.afterShowLiveChatBtn();
    };

    LiveagentButton.prototype.afterShowLiveChatBtn = function afterShowLiveChatBtn (){
            var this$1 = this;

        setTimeout(function () {
            PH.addClass(this$1.button, 'open');
            setTimeout(function(){
                PH.removeClass(this$1.button, 'open');
            }, this$1.options.chatButtonCollapseDelay);
        }, this.options.chatButtonExpandDelay);
    };

    EM.LiveagentButton = LiveagentButton;

    /*PH.on(window,'load', () => {
        new EM.LiveagentButton('#liveagent_button_online_5730Y000000PRjZ',{
            agentId: '5730Y000000PRjZ',
            onShowChatButton: function(){
                dataLayer.push({event:'gaEvent',ec:'SF_Chat_tracking', ea:'Impression', el:undefined});
            },
            onStartChat: function(){
                dataLayer.push({event:'gaEvent',ec:'SF_Chat_tracking', ea:'Click', el:'Accept'});
            },
            showChatButtonDelay: 100
        });
    });*/
})(EM, PH, window.liveagent);
(function (EM, PH, liveagent) {
    
        if (!PH || !liveagent){
            return false;
        }
    
        var BuyBackLiveagentButton = (function (superclass) {
          }

            if ( superclass ) BuyBackLiveagentButton.__proto__ = superclass;
            BuyBackLiveagentButton.prototype = Object.create( superclass && superclass.prototype );
            BuyBackLiveagentButton.prototype.constructor = BuyBackLiveagentButton;

            BuyBackLiveagentButton.prototype.attachEvents = function attachEvents (){
                var this$1 = this;

                PH.live(this.button,'click', '.js-start-chat-btn });

                PH.live(this.button,'click', '.js-expand-collapse-chat', function (e) {
                    if (PH.hasClass(this$1.button, 'open')){
                        PH.removeClass(this$1.button, 'open');
                        if (this$1.options.onCloseChatButton){
                            this$1.options.onCloseChatButton();
                        }
                        return false;
                    }
                    PH.addClass(this$1.button, 'open');
                });          
            };
    
            BuyBackLiveagentButton.prototype.afterShowLiveChatBtn = function afterShowLiveChatBtn (){
                var this$1 = this;

                setTimeo }, this.options.chatButtonExpandDelay);
            };

            return BuyBackLiveagentButton;
        }(EM.LiveagentButton));
    
        EM.BuyBackLiveagentButton = BuyBackLiveagentButton;

        // PH.on(window,'load', () => {
        //     if (EM.city === 'BUCURESTI'){
        //         new EM.BuyBackLiveagentButton('#buybackagent_button_online_5730Y000000PRjZ',{
        //             agentId: '5730Y000000PRjZ',
        //             onShowChatButton: function(){
        //                 dataLayer.push({event:'gaEvent', ec:'SF_Chat_BuyBack_tracking', ea:'Impression', el:undefined});
        //             },
        //             onStartChat: function(){
        //                 dataLayer.push({event:'gaEvent', ec:'SF_Chat_BuyBack_tracking', ea:'Click', el:'Accept'});
        //             },
        //             onCloseChatButton: function(){
        //                 dataLayer.push({event:'gaEvent', ec:'SF_Chat_BuyBack_tracking', ea:'Close', el:'Accept'});
        //             },
        //             showChatButtonDelay: 100
        //         });
        //     }
        // });
        
    })(EM, PH);
(function $TWEEG(a){var n=a.bool,i=a.escape_html,t=a.filter,e=a.out,c=a.register,s=a.index;c("@Components/AdminNotifications/templates/in-page-voucher-campaign.html.twig",function(){var c=a.t({$main:function(a){var c=a.image,l=a.icon_class,r=a.title,o=a.content,v=a.link,m=a.secondaryLink;return e(['<div class="voucher-campaign-container js-voucher-campaign-container',i(n(c)||n(l)?" vc-has-icon":""),'">',n(c)||n(l)?e(['<div class="thumbnail-wrapper">\n            <div class="thumbnail">',n(c)?e(['<img src="',i(c),'" alt="Image">']):n(l)?e(['<i class="',i(l),'"></i>']):"","</div>\n        </div>"]):"",'<div class="vc-content">',n(t.default(r,!1))?e(['<span class="vc-title font-bold">',r,"</span>"]):""," ",o,n(t.default(v,!1))||n(t.default(m,!1))?e([n(t.default(v,!1))?e([' <a href="',i(s(v,"uri")),'" target="',i(s(v,"target")),'" class="',i(s(v,"class_name")),' vc-link js-vc-link">',i(s(v,"name")),"</a>"]):"",n(t.default(m,!1))?e([' <a href="',i(s(m,"uri")),'" target="',i(s(m,"target")),'" class="',i(s(m,"class_name")),' vc-link js-vc-link">',i(s(m,"name")),"</a>"]):""]):"","</div>\n</div>\n"])}});return c})})(EM.TMPL);

(function (window, sapi) {
  PH.on(EM.dispatcher, EM.Notification.Events.AFTER_CLOSE_NOTIFICATION, function (e) {
    var notificationId = e.data.id;
    if (!notificationId) return false;
    EM.AdminNotificationsManager.disableNotificationForShown(notificationId);
  });
  PH.on(EM.dispatcher, 'em-trigger-voucher-notification', function (e) {
    var n = e.data;
    if (!n.id) return false; // keep only title text

    var tmp = document.createElement('div');
    tmp.innerHTML = n.name;
    var nameText = n.campaign || tmp.innerText || tmp.textContent;

    if (EM.show_voucher_notification_in_page) {
      // add markup
      var container = PH.q('.js-product-page-actions');
      if (!container) return;
      var voucherElement = PH.node(EM.TMPL.exec("@Components/AdminNotifications/templates/in-page-voucher-campaign.html.twig", {
        content: n.content.text,
        title: n.name,
        link: n.link && n.link.type !== 'none' ? n.link : null
      }));
      container.insertBefore(voucherElement, container.firstChild); // TO DO - change datalayer format

      EM.AdminNotificationsManager.addToDataLayer({
        id: n.id,
        name: nameText,
        action: 'Display',
        type: n.notification_type && n.notification_type.type
      }); // tracking when the notification reaches the viewport

      PH.onceInViewport(voucherElement, function () {
        EM.AdminNotificationsManager.addToDataLayer({
          id: n.id,
          name: nameText,
          action: 'Viewport',
          type: n.notification_type && n.notification_type.type
        });
      }); // add event listener for adding the voucher

      PH.live(container, 'click', '.js-voucher-campaign-container .js-vc-link', function (evt) {
        evt.preventDefault();
        PH.trigger(EM.dispatcher, 'em-save-voucher-ajax', {
          id: n.id,
          name: nameText,
          code: n.link.uri,
          loaderElement: voucherElement,
          type: n.notification_type && n.notification_type.type
        });
      });
      return;
    }

    var ntf = new EM.Notification({
      id: n.id,
      message: n.content.html,
      title: n.name,
      link: n.link && n.link.type !== 'none' ? n.link : null,
      image: n.image ? EM.getSize(n.image.resized_images, '78x78') : null,
      position: 'bottom right',
      ttl: false,
      onOpen: function onOpen() {
        EM.AdminNotificationsManager.addToDataLayer({
          id: n.id,
          name: nameText,
          action: 'Viewport',
          type: n.notification_type && n.notification_type.type
        });
        EM.AdminNotificationsManager.onShowNotificationTracking({
          id: n.id,
          name: nameText,
          type: n.notification_type && n.notification_type.type
        });
      },
      onClose: EM.AdminNotificationsManager.onCloseNotificationTracking.bind(this, {
        name: nameText,
        id: n.id,
        type: n.notification_type && n.notification_type.type
      })
    });

    if (EM.AdminNotificationsManager) {
      EM.AdminNotificationsManager.notifications[n.id] = ntf;
    }

    var triggerBtn;

    if (ntf.container) {
      triggerBtn = PH.q('.ns-content [data-ntf="close"]', ntf.container);
    } else {
      var mobileNtfContainer = PH.q('.widget-notifications-section');
      triggerBtn = PH.q('.ns-content [data-ntf="close"]', mobileNtfContainer);
    }

    if (triggerBtn) {
      PH.on(triggerBtn, 'click', function (e) {
        e.preventDefault();
        PH.trigger(EM.dispatcher, 'em-save-voucher-ajax', {
          code: n.link.uri,
          name: nameText,
          id: n.id,
          type: n.notification_type && n.notification_type.type
        });
        return false;
      });
    }
  });
  PH.on(EM.dispatcher, 'em-save-voucher-ajax', function (e) {
    var voucherCode = e.data.code;
    var name = e.data.name;
    var id = e.data.id;
    var type = e.data.type;

    if (e.data.loaderElement) {
      PH.addLoaderTo(e.data.loaderElement);
    }

    EM.AdminNotificationsManager.addToDataLayer({
      id: id,
      name: name,
      action: 'Click',
      type: type
    });
    sapi.saveVoucher({}, {
      id: voucherCode
    }).then(function (data) {
      if (data.status === 'redirect') {
        window.location.href = data.url;
        return;
      }

      if (EM.show_voucher_notification_in_page) {
        var messageElement = PH.node(EM.TMPL.exec("@Components/AdminNotifications/templates/in-page-voucher-campaign.html.twig", {
          content: data.message,
          title: ""
        }));
        e.data.loaderElement.parentNode.insertBefore(messageElement, e.data.loaderElement);
        PH.remove(e.data.loaderElement);

        if (e.data.id) {
          EM.AdminNotificationsManager.disableNotificationForShown(e.data.id);
        }
      } else {
        new EM.Notification({
          position: 'top right',
          message: data.message,
          icon: 'em em-voucher',
          ttl: false,
          className: 'voucher-response-notification'
        });
      }
    }).fa }).alwa });
  });

  if (EM.siteModules.matching_notifications) {
    PH.on(window, 'load', function () {
      EM.AdminNotificationsManager.fetchNotifications();
    });
  }

  PH.on(EM.dispatcher, "PHRequestClearNotifications", EM.AdminNotificationsManager.clearNotifications);
  PH.on(EM.dispatcher, "PHRequestFetchNotifications", EM.AdminNotificationsManager.fetchNotifications);
})(window, sapi);
window.EM = window.EM || {};
window.sapi = window.sapi || {};
window.PH = window.PH || {};

sapi.newsletterSubscribeUser = function(params, data) {
    data = data || {};
    params = params || {};

    if (params.form){
        PH.addLoaderTo(params.form);
    }
    return $.ajax({
        url: '/newsletter_subscribe_ajax_general',
        type: 'json',
        method: 'post',
        headers: {
            'X-Request-Source': 'www'
        },
        crossOrigin: true,
        data: PH.extend({
            source_id: 7
        }, data),
        form: params.form
    });
};

sapi.newsletterSavePreferences = function(params, data) {
    data = data || {};
    params = params || {};

    if (params.form){
        PH.addLoaderTo(params.form);
    }

    return $.ajax({
        url: '/newsletter_manage_subscriptions',
        type: 'json',
        method: 'post',
        headers: {
            'X-Request-Source': 'www'
        },
        crossOrigin: true,
        data: PH.extend({
            source_id: 7
        }, data),
        form: params.form
    });
};

window.cookie_domain = window.cookie_domain || EM.getDomain(window.location.hostname);

EM.NewsletterModal = PH.defclass("NewsletterModal", PH.Modal, function(ctor, proto){
    
    "use strict";

    var subscribeFormEl,
        modalDialog,
        modalContent;

    var SESSION_STORAGE_KEY = 'current_user_subscribed';

    ctor.args = {
        size: 'modal-lg',
        showHeader: false,
        className: 'pho-modal newsletter-modal'
    };

    proto._initElement = function() {
        ctor.base._initElement.call(this);

        var el = this.element(); 
        modalDialog = PH.q('.modal-dialog', el);
        modalContent = PH.q('.modal-content', modalDialog);

        subscribeFormEl = PH.q('.js-newsletter-form',modalContent);        
        PH.on(subscribeFormEl, 'submit', this._onNewsletterSubmit.bind(this));        

        if (EM.Social.facebookApiLoaded){
            PH.live(modalContent, 'click', '.js-facebook-login', this._onSocialLoginClick, this);
            PH.on(document,EM.Social.Events.FACEBOOK_DATA_FETCHED, this._onFacebookDataFetched.bind(this));
            PH.on(document,EM.Social.Events.FACEBOOK_DATA_REQUEST_ERROR, this._onSocialDataError);
        }
        if (EM.Social.googleApiLoaded){
            PH.live(modalContent, 'click', '.js-google-login', this._onSocialLoginClick, this);        
            PH.on(document,EM.Social.Events.GOOGLE_DATA_FETCHED, this._onGoogleDataFetched.bind(this));        
            PH.on(document,EM.Social.Events.GOOGLE_DATA_REQUEST_ERROR, this._onSocialDataError);
        }
        if (PH.Validator){
            PH.Validator.addValidatorToForm(subscribeFormEl, {validateOnBlur: true}, {});
        }
        this.open();
    };

    proto._onNewsletterSubmit = function(e){
        e.preventDefault();
        if (!PH.Validator.validateForm(subscribeFormEl)){
            return false;
        }

        var nameInput = PH.q('input[name="name"]',modalContent),
            emailInput = PH.q('input[name="email"]',modalContent);
        
        if (!nameInput || !emailInput){
            return false;
        }

        var requestData = {
            name: nameInput.value,
            email: emailInput.value,
            ref: 'email'
        };
              
        this.dataLayerSubscribedFrom = 'Email';
        sapi.newsletterSubscribeUser({form: modalContent}, requestData).then(this._onSubscribeAjaxSuccess.bind(this, requestData)).fail(this._onSubscribeAjaxError);                
        return false;
    };

    proto._onSocialLoginClick = function(e, element){
        e.preventDefault();
        var ev = PH.getData( element, 'event');
        PH.addLoaderTo(modalContent);
        PH.Validator.removeHelpers(modalContent);
        PH.trigger(document, ev);
        return false;
    };

    proto._onSocialDataError = function(e){
        PH.removeLoaderFrom(modalContent); 
        if (e.data){
            PH.Validator.addErrorsToForm(modalContent, e.data);
        }
    };

    proto._onFacebookDataFetched = function(e){
        PH.removeLoaderFrom(modalContent);
        if (!e.data.name || !e.data.email){
            return false;
        }
        var requestData = {
            name: e.data.name,
            email: e.data.email,
            facebook: e.data,
            ref: 'facebook'
        };
        this.dataLayerSubscribedFrom = 'Facebook';
        // console.log(e);
        sapi.newsletterSubscribeUser({form: modalContent}, requestData).then(this._onSubscribeAjaxSuccess.bind(this, requestData)).fail(this._onSubscribeAjaxError);                
    };

    proto._onGoogleDataFetched = function(e){        
        PH.removeLoaderFrom(modalContent);
        // console.log(e);
        if (!e.data.fullName || !e.data.email){
            return false;
        }
        var requestData = {
            name: e.data.fullName,
            email: e.data.email,
            google: e.data,
            ref: 'google'
        };
        this.dataLayerSubscribedFrom = 'Google';
        sapi.newsletterSubscribeUser({form: modalContent}, requestData).then(this._onSubscribeAjaxSuccess.bind(this, requestData)).fail(this._onSubscribeAjaxError);                
    };

    proto._onNewsletterOptionsSubmit = function(e, el){
        e.preventDefault();
        subscribeFormEl = el;
        var requestData = { subscriptions: [] };
        for (var i=0,len=subscribeFormEl.length; i < len; i++){
            var field = subscribeFormEl.elements[i];         
            if (field.type === 'checkbox'){
                requestData.subscriptions.push({ id: field.getAttribute('data-subscription-id'), status: field.checked ? 1 : 0 });
            }
            if (field.type === 'hidden'){
                requestData[field.name] = field.value;
            }
        }

        // console.log(requestData);
        sapi.newsletterSavePreferences({form: modalContent}, requestData).then(this._onNewsletterOptionsAjaxSuccess.bind(this)).fail(this._onSubscribeAjaxError);        
        return false;
    };

    proto._onSubscribeAjaxError };

    proto._renderSuccessView = function(data){
        if (!data || !data.subscriptions || !Object.keys(data.subscriptions).length){
            this._onNewsletterOptionsAjaxSuccess();
            return false;
        }
        var newsletterModalSuccessTemplate = $('#modal-newsletter-success-template');
        PH.removeClass(modalDialog, "modal-lg");
        //PH.addClass(modalDialog, "modal-md");
        modalContent.innerHTML = PH.template(newsletterModalSuccessTemplate.html(), data);                

        PH.live(modalContent, 'submit', '.js-options-form', this._onNewsletterOptionsSubmit.bind(this));
        PH.live(modalContent, 'click', '.close }, this);
    };

    proto._onSubscribeAjaxSuccess = function(requestData, data){
        dataLayer.push ({event:"Newsletter Notification", ec: "Newsletter Modal Signup", ea:"Signup success", el:this.dataLayerSubscribedFrom ? this.dataLayerSubscribedFrom : "Email"});
        PH.cookie.set(SESSION_STORAGE_KEY, 1, false, '/', cookie_domain);
        data.name = requestData.name;
        data.email = requestData.email;
        this._renderSuccessView(data);
    };

    proto._onNewsletterOptionsAjaxSuccess = function(data){
        this.close();
        new EM.Notification({
            position: 'top right',
            message: EM.trans('You have subscribed to our newsletter. Thank you!'),
            type: 'success'
        });
    };

    PH.on(document,'DOMContentLoaded',function(e){
        var fbAppIdEl = PH.q('head meta[property="fb:app_id"]'),
            googleClientIdEl = PH.q('head meta[property="google:newsletter_client_id"]')
        if (!googleClientIdEl){
            googleClientIdEl = PH.q('head meta[property="google:client_id"]')
        }
        if (fbAppIdEl){
            EM.Social.loadFacebookApi(fbAppIdEl.getAttribute('content'));
        }        
        if (googleClientIdEl){
            EM.Social.loadGoogleApi(googleClientIdEl.getAttribute('content'));
        }
    });

    var triggerNewsletterModal = function(e){
        e.preventDefault();
        var newsletterModalTemplate = $('#modal-newsletter-template');
        if (!newsletterModalTemplate.length){
            return false;
        }
        new EM.NewsletterModal({
            content: PH.template(newsletterModalTemplate.html(), {
                facebook_disabled: !EM.Social.facebookApiLoaded,
                google_disabled: !EM.Social.googleApiLoaded,
                facebook_click_event: EM.Social.Events.GET_FACEBOOK_DATA,
                google_click_event: EM.Social.Events.GET_GOOGLE_DATA
            })
        });
        dataLayer.push ({event:"Newsletter Notification", ec: "Newsletter Modal Signup", ea:"Click signup notification"});
        var parent = PH.closest(this, '.ns-box');
        if (parent){
            PH.trigger(parent.querySelector('button.close'), 'click');
        }
        return false;
    };

    PH.on(EM.dispatcher,'em-trigger-newsletter-modal', function(e){
        var hasSubscribedThisSession = PH.cookie.get(SESSION_STORAGE_KEY);
        if (hasSubscribedThisSession){
            return false;
        }
        
        var n = e.data;        
        var ntf = new EM.Notification({
            id: n.id,
            message: n.content.html,
            title: n.name,
            link: n.link && n.link.type !== 'none' ? n.link : null,
            image: n.image ? EM.getSize(n.image.resized_images, '78x78') : null,
            position: 'bottom right',
            className: 'newsletter-notification',
            ttl: false
        });
        dataLayer.push ({event:"Newsletter Notification", ec: "Newsletter Modal Signup", ea:"Display notification"});
        var triggerBtn = ntf.container.querySelector('a');
        if (triggerBtn){
            PH.on(triggerBtn, 'click', triggerNewsletterModal);
        }        
    });
});

PH.merge(EM.translations, {});
(function $TWEEG(t){var n=t.escape_html,r=t.filter,o=t.for,s=t.number,a=t.operator,e=t.out,i=t.register;i("@Components/GDPRNotification/templates/dropdown.html.twig",function(){var o=t.t({$main:function(t){var o=t.user;return e(['<div class="gdpr-dropdown text-center">\r\n    <div class="mrg-btm-sm">\r\n        <strong>',n(r.trans("Hello, %username%",{"%username%":o})),',</strong>\r\n    </div>\r\n    <div class="mrg-btm-sm gdpr-primary">\r\n        <strong>',n(r.trans("Take a moment to update your account")),'</strong>\r\n    </div>\r\n    <div class="mrg-btm-sm">',n(r.trans("Please help us know you better. Confirm your age with just 1 click so that we may keep you up to date with what's new at eMAG.")),'</div>\r\n    <button class="pho-btn mrg-btm-sm btn btn-primary js-gdpr-notification-confirm">',n(r.trans("Yes, I am over 16")),'</button>\r\n    <button class="pho-btn mrg-btm-xs btn btn-default js-gdpr-notification-deny">',n(r.trans("I am not 16 yet")),"</button>\r\n</div>\r\n"])}});return o}),i("@Components/GDPRNotification/templates/modal.html.twig",function(){var i=t.t({$main:function(t){var i=t.year;return e(['<div class="text-center gdpr-modal">\r\n    <div class="mrg-sep-sm headline">',n(r.trans("Take a moment to update your account")),'</div>\r\n    <div class="pad-sep-sm border-top border-bottom mrg-btm-sm">\r\n        <div class="container content">\r\n            <img class="mrg-btm-sm" src="https://s13emagst.akamaized.net/layout/all/static-upload/u24.png" />\r\n            <div class="mrg-btm-sm gdpr-primary">\r\n                <strong>',n(r.trans("Confirm your date of birth")),'</strong>\r\n            </div>\r\n            <div class="mrg-btm-sm">',r.trans("It helps us share our nicest offers and discounts with you."),'</div>\r\n        </div>\r\n    </div>\r\n    <div class="container content">\r\n        <p>',n(r.trans("Your date of birth:")),'</p>\r\n        <form class="js-gdpr-form">\r\n            <div class="mrg-btm-xs row">\r\n                <div class="col-xs-12 col-sm-4">\r\n                    <div class="form-group">\r\n                        <select class="form-control js-gdpr-day" data-phino="Select" data-phino="Select" required>\r\n                            <option value="" selected disabled>',n(r.trans("Day")),"</option>\r\n                            ",o(a[".."](1,31),function(t,r){return t?e(['\r\n                                <option value="',10>r?e(["0"]):"",n(r),'">',10>r?e(["0"]):"",n(r),"</option>\r\n                            "]):""}),'\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n                <div class="col-xs-12 col-sm-4">\r\n                    <div class="form-group">\r\n                        <select class="form-control js-gdpr-month" data-phino="Select" data-phino="Select" required>\r\n                            <option value="" selected disabled>',n(r.trans("Month")),"</option>\r\n                            ",o(a[".."](1,12),function(t,r){return t?e(['\r\n                                <option value="',10>r?e(["0"]):"",n(r),'">',10>r?e(["0"]):"",n(r),"</option>\r\n                            "]):""}),'\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n                <div class="col-xs-12 col-sm-4">\r\n                    <div class="form-group">\r\n                        <select class="form-control js-gdpr-year" data-phino="Select" data-phino="Select" required>\r\n                            <option value="" selected disabled>',n(r.trans("Year")),"</option>\r\n                            ",o(a[".."](s(i)-10,1920),function(t,r){return t?e(['\r\n                                <option value="',n(r),'">',n(r),"</option>\r\n                            "]):""}),'\r\n                        </select>\r\n                    </div>    \r\n                </div>    \r\n            </div>\r\n            <div class="errors"></div>\r\n            <button class="pho-btn btn btn-block btn-primary js-gdpr-notification-save">',n(r.trans("Confirm date of birth")),'</button>\r\n            <button class="pho-btn mrg-btm-sm btn btn-link js-gdpr-notification-later">',n(r.trans("maybe later")),"</button>\r\n        </form>\r\n    </div>\r\n</div>"])}});return i}),i("@Components/GDPRNotification/template.html.twig",function(){var n=t.t({$ma)}});return n})})(EM.TMPL);
(function (dataLayer) {
    if ( dataLayer === void 0 ) dataLayer = {};    
    var GDPR_KEY;
    
    var isValidDate = function (d, m, y) {
        var date = new Date(y, m-1, d);
        var convertedDate = "" + date.getFullYear() + (date.getMonth()+1) + date.getDate();
        var givenDate = "" + y + m + d;
        return givenDate == convertedDate;
    };

    var trackEvent };

    var GDPRNotification = function GDPRNotification(selector) {
        this.selector= PH.q(selector || "a#my_account");
        if (!this.selector){
            return false;
        }
        this.initDropdown();
        this.initEvents();
        this.notificationListener();

        // tracking
        trackEvent("Header takeover", "Active");
    };
    GDPRNotification.prototype.enablePreviousWidget = function enablePreviousWidget(enable) {
        var dropdown = this.selector.PH_Widget;
        if (dropdown) {
            dropdown.disable(!enable);
        }
    }

    GDPRNotification.prototype.updateStatus = function updateStatus (status, cb) {
        if (this.notification) this.notification.dismiss();
        if (this.dropdown) this.dropdown.close();        
        sapi.gdprUpdateStatus({}, {status: status}).th });
    };
    GDPRNotification.prototype.initDropdown = function initDropdown () {

        this.enablePreviousWidget(false);

        this.dropdown = new PH.Dropdown({
            trigger: this.selector,
            content: PH.node(EM.TMPL.exec("@Components/GDPRNotification/templates/dropdown.html.twig", {user: EM.username})),
            align: "S",
            openOn: "hover",
            className: " navbar-drop gdpr-notification-dropdown",
            permanent: true,
            scrollClose: 0
        });

        if (!EM.is_mobile){
            this.dropdown.open();
        }
        PH.addClass(this.selector, "gdpr-warning");
            
        // show jewel on m.site
        if (PH.q(".user-sidebar-avatar")) PH.addClass(PH.q(".user-sidebar-avatar"), "gdpr-jewel");

        // tracking
        this.dropdown.on("show", trackEvent.bind(this, "Header takeover", "View"));
    };
    GDPRNotification.prototype.initEvents = function initEvents () {
            var this$1 = this;


        // submit age btn
        PH.live(document, "click", ".js-gdpr-notification-save", function (ev) {
            PH.stopEvent(ev);
            var form = PH.closest(ev.target, ".js-gdpr-form");
            var year = PH.q("select.js-gdpr-year", form).value;
            var month = PH.q("select.js-gdpr-month", form).value;
            var day = PH.q("select.js-gdpr-day", form).value;
            var errors = PH.q(".errors", form);

            errors.innerHTML = "";

            if (PH.Validator.validateForm(form)) {
                if (isValidDate(+day, +month, +year)) {
                    sapi.gdprSaveBirthdate(form, {birthdate: (year + "-" + month + "-" + day)}).then(this$1.destroy.bind(this$1));

                    // tracking
                   trackEvent("Provide age", "Submit age");
                } else {
                    errors.innerHTML = EM.trans('The selected date is invalid.');
                }
            }
        });

        // over 16 btn
        PH.live(document, "click", ".js-gdpr-notification-confirm", function (ev) {
            PH.stopEvent(ev);

            this$1.updateStatus(1, this$1.destroy.bind(this$1));

            // tracking
            trackEvent("Confirm age", "Over 16");
        });

        // under 16 btn
        PH.live(document, "click", ".js-gdpr-notification-deny", function (ev) {
            PH.stopEvent(ev);

            this$1.updateStatus(-1, this$1.initModal.bind(this$1));

            // tracking
            trackEvent("Confirm age", "Under 16");
        });
        PH.live(document, "click", ".js-gdpr-notification-later", function (ev) {
            PH.stopEvent(ev);

            // tracking
            trackEvent("Provide age", "Click maybe later");

            this$1.destroy();
        });
    };
    GDPRNotification.prototype.initModal = function initModal () {
        this.modal = new PH.Modal({
            content: PH.node(EM.TMPL.exec("@Components/GDPRNotification/templates/modal.html.twig", {year: (new Date()).getFullYear()})),
            showHeader: false,
            fullscreen: true,
            closeButton: false
        });
        this.modal.open();
        PH.Validator.addValidatorToForm(PH.q(".js-gdpr-form", this.modal.element()), {validateOnChange: true}, {});
        PH.Widget.autoInit(this.modal.element());

        // tracking
        trackEvent("Provide age", "View");
    };
    GDPRNotification.prototype.notificationListener = function notificationListener () {
            var this$1 = this;

        PH.on(EM.dispatcher,'em-trigger-gdpr-notification', function (e) {
            var n = e.data;
            var dataLayerObj = {
                id: n.id,
                name: n.name,
                type: n.notification_type ? n.notification_type.type : 'campaign'
            };
            this$1.notification = new EM.Notification({
                id: n.id,
                message: n.content.html,
                title: n.name_html,
                image: n.image ? EM.getSize(n.image.resized_images, '78x78') : null,
                ttl: 0,
                position: 'bottom right',
                link: {
                   uri: '#',
                   name: EM.trans('I am over 16'),
                   className: 'pho-btn btn btn-sm btn-primary mrg-btm-xs ntf-gdpr-btn js-gdpr-notification-confirm'
                },
                secondaryLink: {
                   uri: '#',
                   name: EM.trans('I am under 16'),
                   className: 'pho-btn btn btn-sm btn-default mrg-btm-xs js-gdpr-notification-deny'
                },
                onOpen: EM.AdminNotificationsManager.onShowNotificationTracking.bind(this$1, dataLayerObj),
                onClose: EM.AdminNotificationsManager.onCloseNotificationTracking.bind(this$1, dataLayerObj)
            });
        });
    };
    GDPRNotification.prototype.destroy = function destroy () {
        this.enablePreviousWidget(true);

        if (this.dropdown) {
            this.dropdown.disable();
            this.dropdown.close();
        };
        if (this.modal) this.modal.close();

        PH.removeClass(this.selector, "gdpr-warning");

        // remove jewel on m.site
        if (PH.q(".user-sidebar-avatar")) PH.removeClass(PH.q(".user-sidebar-avatar"), "gdpr-jewel");
    };
    EM.GDPRNotification = GDPRNotification;

    document.addEventListener("DOMContentLoaded", function () {        
        if (EM.eUserInfo && EM.eUserInfo.userId) {
            GDPR_KEY = 'gdpr_'+EM.eUserInfo.userId;
        } else if (window.eUserInfo && window.eUserInfo.userId) {
            GDPR_KEY = 'gdpr_'+window.eUserInfo.userId;
        }

        if ( ((EM.eUserInfo && EM.eUserInfo.hasUnknownAge)||
            (window.eUserInfo && window.eUserInfo.hasUnknownAge))
            && GDPR_KEY && !localStorage.getItem(GDPR_KEY)
            && EM.pageType !== 'cart'){
            var t = "#emg-user-menu";
            if (EM.is_mobile){
                t = ".side-navigation-account";
            }
            EM.GDPRNotification.instance = new EM.GDPRNotification(t);
        }
    })
})(dataLayer);

(function (EM) {
    if (!EM) return;

    var LOCALSTORAGE_KEY = "deliveryData";

    var gaGeoTracking = function (ea) {
        if (!window.dataLayer) return;

        dataLayer.push({
            event: "gaEvent",
            ec: "Location - Browser Detection",
            ea: ea,
            el: EM.page_type || "not set"
        });
    };

    // UserLocation
    var UL = {
        type: {
            ip: "ip2location",
            geo: "geolocation",
            user: "user_selection"
        },

        init: function init() {
            // try to get the location by ip if it does not exist in localstorage
            if (!UL.getLocation().locality.id) UL.getLocationByIp();

            // get geolocation permissions
            if (!UL.GLPerm.state) UL.GLPerm.init();
        },

        // Geo Location Permissions
        GLPerm: {
            init: function init$1(cb) {
                if ( cb === void 0 ) cb = PH.noop;

                try {
                    UL.GLPerm.promise = navigator.permissions.query({name:"geolocation"}).then(function (permissionStatus) {  
                        UL.GLPerm.promise = null;
                        UL.GLPerm.update(permissionStatus.state);
                        permissionStatus.onchange = function() { 
                            if (UL.GLPerm.isPrompt()) gaGeoTracking(("Permission " + (this.state)));
                            UL.GLPerm.update(this.state);
                        };
                        cb();
                    });
                } catch (ex) {
                    UL.GLPerm.state = "denied";
                    cb();
                }
            },
            waitForState: function waitForState(callback, data) {
                callback = callback || PH.noop;
                if (UL.GLPerm.promise) {
                    UL.GLPerm.promise.th });  
                } else {
                    callback(data);
                }
            },
            update: function update(state) {
                UL.GLPerm.state = state;
                PH.trigger(EM.dispatcher, "GLPermUpdated");
            },
            isPrompt: function isPrompt() {
                return UL.GLPerm.state == "prompt";
            },
            isAvailabl },
            hasAcces }
        },

        getGeoLocation: function getGeoLocation(success, fail, form) {
            success = success || PH.noop;
            fail = fail || PH.noop;

            try {
                if (UL.GLPerm.isPrompt()) gaGeoTracking("Permission request");

                navigator.geolocation.getCurrentPosition(function (response) {
                    var ref = response.coords;
                    var latitude = ref.latitude;
                    var longitude = ref.longitude;
                    var accuracy = ref.accuracy;

                    sapi.getLocalityByGeoLocation({latitude: latitude, longitude: longitude}, {form: form}).then(function (response) {
                        gaGeoTracking("Geoloc sapi req");
                        var data = response.data;

                        // save the location if the user didn't changed the location earlier
                        if (UL.getLocation().type != UL.type.user && data.locality.id && data.locality.name) {

                            // get main and sub loc.
                            var localityData = data.locality.name.split(", ");
                            var sub_loc = localityData[0];
                            var main_loc = localityData[1] || sub_loc;

                            // define model
                            var storage = {
                                region: data.region,
                                locality: {
                                    id: data.locality.id,
                                    main_loc: main_loc,
                                    sub_loc: sub_loc
                                },
                                latitude: latitude,
                                longitude: longitude,
                                type: UL.type.geo
                            };

                            // save in localstorage
                            UL.setLocation(storage);
                        }

                        success(data);
                    });
                }, fail, { enableHighAccuracy: true });
            } catch (ex) {
                fail();
            }
        },

        getGeoLocationPosition: function getGeoLocationPosition(success, fail, form) {
            success = success || PH.noop;
            fail = fail || PH.noop;

            try {
                navigator.geolocation.getCurrentPosition(function (response) {
                    var ref = response.coords;
                    var latitude = ref.latitude;
                    var longitude = ref.longitude;
                    var accuracy = ref.accuracy;
                    success(response.coords);
                }, fail, { enableHighAccuracy: true });
            } catch (ex) {
                fail();
            }
        },

        getLocation: function getLocation() {
            var storage;
            try {
                // get current location saved in localstorage
                storage = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
            } catch(ex) {}

            // generate model if it doesn't exist
            storage = storage || {};
            storage.region = storage.region || {};
            storage.locality = storage.locality || {};
            storage.point = storage.point || {};

            return storage;
        },

        setLocation: function setLocation(model, ignoreCookie) {
            try {
                var storage = model || {};
                storage.region = model.region || {};
                storage.locality = model.locality || {};
                storage.point = model.point || {};

                if (!model.type) {
                    storage.type = UL.getLocation().type || UL.type.ip;
                } else {
                    storage.type = model.type;
                }

                // save the new model into the localstorage
                localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(storage));

                // clear supermarket cookie
                if (!ignoreCookie) PH.cookie.set("supermarket_delivery_zone", "", -1, "/", EM.cookie_domain || EM.getDomain(window.location.hostname));

                PH.trigger(EM.dispatcher, 'PHSetUserLocation');
                PH.cookie.set("delivery_locality_id", storage.locality.id || "", null, "/", EM.cookie_domain || EM.getDomain(window.location.hostname));
            } catch (ex) {}
        },

        getLocationByIp: function getLocationByIp(cb) {
            if ( cb === void 0 ) cb = PH.noop;

            try {
                var data = EM.city_data.location_data;

                // switch main loc. with sub loc.
                var regionData = data.region_name.replace(")", "").split(" (");
                var main_loc = regionData[0];
                var sub_loc = regionData[1] || main_loc;

                var model = {
                    region: {
                        id: data.region_id,
                        name: sub_loc
                    },
                    locality: {
                        id: data.id,
                        main_loc: main_loc,
                        sub_loc: sub_loc
                    },
                    type: UL.type.ip
                };

                // update the localstorage
                UL.setLocation(model);

            } catch (ex) {}
            cb();
        },

        getCurrentLocation: function getCurrentLocation() {
            if (!UL.getLocation().locality.id) UL.getLocationByIp();
            return UL.getLocation();
        },

        logger(source = "") {
            var location = UL.getLocation();

            var params = {
                "X-PHP-Self": "UserLocation",
                "X-Locality-Id": location.locality.id,
                "X-Region-Id": location.region.id,
                "X-Source": source,
            };
            try {
                var searchParams = new URLSearchParams(params).toString();
                fetch('/logger.json?' + searchParams, {
                    keepalive: true,
                    headers: { "X-Requested-With": "XMLHttpRequest" },
                });
            } catch (err) {}
        },
    };

    EM.UserLocation = UL;
})(EM);

(function (UL) {
    if (!UL || !EM.has_delivery_estimate || !EM.siteModules || !EM.siteModules.product_delivery_estimate) return;
    UL.init();
    var storage = UL.getLocation();
    var locality = storage.locality.id;
    var getGeoLocation = function () {
        UL.getGeoLocation(function (data) {
            if (data.locality.id != locality) PH.trigger(EM.dispatcher, "locationUpdated");
        });
    };
    if (storage.type == UL.type.geo) {
        UL.GLPerm.waitForState(getGeoLocation);
    }

})(EM.UserLocation);
(function $TWEEG(t){var r=t.escape_html,e=t.filter,n=t.out,a=t.register,i=t.string,o=t.index;a("@Components/AdminNotifications/templates/addReviewNotification.html.twig",function(){var a=t.t({$main:function(t){var a=t.product;return n(["<strong>",r(e.trans("Happy with your purchase?")),"</strong>\n<p>",r(e.trans("Share your experience with the product, good and bad.")),'</p>\n<a href="',r(e.addQueryParam("/product-feedback"+i(o(a,"product_uri"))+"review/add","ref","notif_add-review_btn")),'" class="pho-btn btn btn-primary mrg-top-xs btn-sm">',r(e.trans("Add a review")),"</a>"])}});return a})})(EM.TMPL);

PH.on(document, 'DOMContentLoaded', function(){

  var KEY = 'products_without_reviews',
      HIDE_FEEDBACK_NOTIFICATION_PERIOD = '48h';
  var FEEDBACK_NOTIFICATION = null; // remove old entries, which might have s11akamai images

  try {
    var CLEAN_KEY = 'pwr_feb_2020';
    var isClean = localStorage.getItem(CLEAN_KEY);

    if (!isClean) {
      localStorage.removeItem(KEY);
      localStorage.setItem(CLEAN_KEY, '1');
    }
  } catch (ex) {}

  if (!EM.siteModules || !EM.siteModules.feedback_notification) {
    return;
  }

  function hasProductsWithoutReviews() {
    var LS;

    try {
      LS = JSON.parse(localStorage.getItem(KEY));
    } catch (ex) {}

    return LS && EM.customer_id == LS.data.userId && EM.last_review == LS.data.lastModified;
  }
 }

  function getProductsWithoutReviews() {
    if (!hasProductsWithoutReviews()) {
      // && !isHttpsProtocol() ) {
      localStorage.removeItem(KEY);
      sapi.getProductsWithoutReviews().th });
    } //delete the localstorage for the https
    //there is no need for it here
    //this is temporary


    if (isHttpsProtocol()) {
      localStorage.removeItem(KEY);
    }
  }

  function setResponseToStorage(response) {
    var data = response.data;
    if (!data.products) return;
    var localStorageItem = {
      data: {
        userId: EM.customer_id,
        products: [],
        hideFeedbackNotificationUntil: data.hide_feedback_notification_until,
        lastModified: data.last_modified
      }
    };
    data.products.forEach(function (p) {
      localStorageItem.data.products.push({
        doc_product_id: p.id,
        pnk: p.part_number_key,
        image: p.image.resized_images[0].url,
        product_name: p.name,
        product_uri: p.url.path,
        add_review_url: "/product-feedback/".concat(p.sef_name, "/pd/").concat(p.part_number_key, "/review/add"),
        count_close_feedback_notification: p.flags.count_close_feedback_notification,
        is_hidden_from_products_without_reviews_notification: p.flags.is_hidden_from_products_without_reviews_notification,
        is_hidden_from_products_without_reviews: p.flags.is_hidden_from_products_without_reviews,
        allow_feedback: p.flags.allow_feedback
      });
    });
    localStorage.setItem(KEY, JSON.stringify(localStorageItem));
  }

  function unhideProduct(product) {
    ajax({
      url: "".concat(EM.sapi_endpoint, "/users/notification/hidden-product/").concat(product.id),
      type: "json",
      method: "DELETE",
      data: {
        source_id: 7,
        token: EM.token
      },
      form: PH.q(".js-user-reviews-content")
    }).alwa });
  }

  function hideFeedBackNotification(product_id) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref$from = _ref.from,
        from = _ref$from === void 0 ? null : _ref$from,
        _ref$notification = _ref.notification,
        notification = _ref$notification === void 0 ? true : _ref$notification,
        _ref$soft_hide = _ref.soft_hide,
        soft_hide = _ref$soft_hide === void 0 ? 0 : _ref$soft_hide;

    ajax({
      url: "".concat(EM.sapi_endpoint, "/products/").concat(product_id, "/reviews/hide-product"),
      type: 'json',
      method: 'put',
      data: {
        product_id: product_id,
        from: from,
        token: EM.token,
        source_id: 7,
        is_soft_hidden: soft_hide
      },
      form: PH.q(".js-user-reviews-content")
    }).then(function (response) {
      localStorage.removeItem(KEY);

      if (FEEDBACK_NOTIFICATION) {
        FEEDBACK_NOTIFICATION.dismiss();
        FEEDBACK_NOTIFICATION = null;
      }

      PH.trigger(EM.dispatcher, "productRemoved", {
        product_id: product_id,
        products: response.data && response.data.products,
        count: response.data && response.data.count
      });

      if (notification) {
        new EM.Notification({
          message: EM.trans('The product has been successfully removed!'),
          position: 'top right',
          ttl: 2000,
          effect: "slide"
        });
      }
    });
  }

  var enableTemporaryHideNotificationFlag = function enableTemporaryHideNotificationFlag(e) {
    PH.storage.set('hide_feedback_notification', 1, HIDE_FEEDBACK_NOTIFICATION_PERIOD);
    localStorage.removeItem('feedback_notification_count');
  };

  function showNotification() {
    if (['subdepartment', 'subcategory','alldepartments'].indexOf(EM.page_type) === -1){
      return;
    }

    var notificationPageCount = localStorage.getItem('feedback_notification_count') || 0,
        hideFeedbackNotification = PH.storage.get('hide_feedback_notification');
    var productsWithoutReviews = PH.getJsonFromLocalStorage(KEY); //missing something

    if (!productsWithoutReviews) {
      return false;
    }

    if (productsWithoutReviews.data.products !== null) {
      if (productsWithoutReviews.data.products.length > 0) {
        if (hideFeedbackNotification) {
          return;
        }

        if (notificationPageCount < 3 && !hideFeedbackNotification) {
          localStorage.setItem('feedback_notification_count', ++notificationPageCount);
          return;
        }

        var product = productsWithoutReviews.data.products[0]; //show notification

        EM.AdminNotificationsManager.addToDataLayer({
          id: '000',
          name: 'Feedback_notif',
          type: 'hardcoded',
          action: 'Display'
        });
        var ntf = new EM.Notification({
          position: "bottom right",
          message: EM.TMPL.exec('@Components/AdminNotifications/templates/addReviewNotification.html.twig', {
            product: product
          }),
          image: product.image,
          className: 'add-review-notification',
          ttl: false,
          effect: 'slide',
          onOpen: function onOpen(e) {
            FEEDBACK_NOTIFICATION = this;
            PH.live(this.ntf, 'click', 'a.btn-primary', function() {
              EM.AdminNotificationsManager.addToDataLayer({
                id: '000',
                name: 'Feedback_notif',
                type: 'hardcoded',
                action: 'Click'
              });
              enableTemporaryHideNotificationFlag();
            });
          },
          onClose: function onClose(isCloseButton) {
            FEEDBACK_NOTIFICATION = null;

            if (isCloseButton) {
              EM.AdminNotificationsManager.addToDataLayer({
                id: '000',
                name: 'Feedback_notif',
                type: 'hardcoded',
                action: 'Close'
              });
              enableTemporaryHideNotificationFlag();
            }
          }
        });
      }
    }
  }

  PH.on(EM.dispatcher, "hideProductPermanently", function (event) {
    hideFeedBackNotification(event.data.product);
  });
  PH.on(EM.dispatcher, "unhideProduct });
  PH.on(EM.dispatcher, "hideProductTemporarily", function (event) {
    hideFeedBackNotification(event.data.product, {
      soft_hide: 1
    });
  });

  if (EM.customer_id) {
    PH.on(window, 'load', function () {
      if (!EM.hideNotifications) {
        if (EM.siteModules && EM.siteModules.products_bought_without_review_module) {
          getProductsWithoutReviews();
        }

        showNotification();
      }
    });
  }
});
(function(){

    "use strict";

    if (!HTMLCanvasElement.prototype.toBlob) {
        // from https://stackoverflow.com/a/47487073
        Object.defineProperty(HTMLCanvasElement.prototype, "toBlob", {
            value: function (callback, type, quality) {
                var canvas = this;
                setTimeout(function() {
                    var binStr = atob(canvas.toDataURL(type, quality).split(',')[1]),
                        len = binStr.length,
                        arr = new Uint8Array(len);
                    for (var i = 0; i < len; i++ ) {
                        arr[i] = binStr.charCodeAt(i);
                    }
                    callback(new Blob([ arr ], { type: type || "image/png" }));
                });
            }
        });
    }

    sapi.updateUserAvatar = function(data, form) {
        var fd = new FormData();
        fd.append("token", EM.token);
        fd.append("source_id", "7");
        fd.append("avatar", data.blob, data.filename);
        return ajax({
            url: "/account/avatar",
            form: form,
            type: "json",
            method: "POST",
            processData: false,
            data: fd
        });
    };

    sapi.deleteUserAvatar = function(form) {
        return ajax({
            url: "/account/avatar",
            form: form,
            method: "DELETE",
            type: "json",
            data: {
                source_id: 7,
                token: EM.token
            }
        });
    };

    function updateAvatars(data) {
        PH.qs([
            ".user-account-profile > .user-avatar",
            ".navbar-toolbox .navbar-icon.navbar-thumb > .user-avatar",
            ".user-sidebar-avatar > .user-avatar",
            ".side-navigation-account .avatar > .user-avatar",
            ".emg-fluid-user-avatar > .user-avatar",
        ].join(", ")).forEach(function (avatar) {
            var hasEdit = !!PH.q(".edit-avatar", avatar);
            var hasGenius = !!PH.q(".avatar-genius", avatar);
            var prefix = "user-avatar-";
            var node = PH.node(EM.TMPL.exec('@Components/Avatar/Avatar.html.twig', {
                app: EM.APP,
                avatar: data,
                size: '120x120',
                showEdit: hasEdit,
                showGenius: hasGenius,
                modifier: PH.slice(avatar.classList)
                    .filt })
                    .redu }, "")
            }));
            avatar.replaceWith(node);
            if (hasEdit) {
                PH.Widget.autoInit(node);
            }
        });
    }

    function openDialog(image, filename, contentType) {
        var dlg = new PH.Modal({
            className: "avatar-editor",
            content: EM.TMPL.exec("@Features/MyAccount/components/AvatarEditor"),
            showHeader: false,
            fullscreen: true
        });
        dlg.open();

      }

        PH.on(window, "resize", handleResize);
        dlg.on("close", function(){
            PH.off(window, "resize", handleResize);
        });

        PH.on(PH.q(".js-save", dlg.element()), "click", function (ev) {
            fetchImage(function (blob) {
                sapi.updateUserAvatar({
                    blob: blob,
                    filename: filename
                }, PH.q(".modal-content", dlg.element())).th }).fa });
            });
        });

        var canvas = PH.q("canvas", dlg.element());
        var context = canvas.getContext("2d");
        var sizeSlider = PH.q(".js-size-slider", dlg.element()).PH_Widget;

        var canvasWidth;
        var canvasHeight;
        var fullWidth;
        var fullHeight;
        var imageAspect;
        var canvasAspect;
        var imgOffsetX;
        var imgOffsetY;
        var imgScale;
        var rootRotation;
        var rootScale;

        var scaledWidth, scaledHeight;
        var targetX, targetY;

        var dragOrigX, dragOrigY, dragOrigScale;

        function reset() {
            var parent = canvas.parentNode;
            canvasWidth = canvas.width = parent.offsetWidth;
            canvasHeight = canvas.height = parent.offsetHeight;
            imgOffsetX = 0;
            imgOffsetY = 0;
            imgScale = 1;
            rootRotation = 0;
            rootScale = [ 1, 1 ];
            fullWidth = image.width;
            fullHeight = image.height;
            imageAspect = fullWidth / fullHeight;
            canvasAspect = canvasWidth / canvasHeight;
            if (imageAspect > canvasAspect) {
                scaledWidth = canvasWidth;
                scaledHeight = scaledWidth / imageAspect;
                targetX = 0;
                targetY = (canvasHeight - scaledHeight) / 2;
            } else {
                scaledHeight = canvasHeight;
                scaledWidth = scaledHeight * imageAspect;
                targetY = 0;
                targetX = (canvasWidth - scaledWidth) / 2;
            }
            sizeSlider.withoutHooks([ "start", "move"  });
            redraw();
        }

        reset();

        PH.dragging({
            element: canvas,
            star },
            move: function move(ev) {
                imgOffsetX = dragOrigX + ev.dx;
                imgOffsetY = dragOrigY + ev.dy;
                setLimits();
                redraw();
            },
            cursor: "move"
        });

        PH.on(canvas, "wheel", function (ev) {
            PH.stopEvent(ev);
            var val = sizeSlider.getValue();
            sizeSlider.trigger("start", val);
            if (ev.deltaY < 0) {
                sizeSlider.setValue(Math.min(100, val + 2));
            } else {
                sizeSlider.setValue(Math.max(0, val - 2));
            }
        });

        sizeSlider.on({
            start: function start$1(value) {
                dragOrigScale = scale(value);
                dragOrigX = imgOffsetX / dragOrigScale;
                dragOrigY = imgOffsetY / dragOrigScale;
            },
            move: function move$1(knob, value) {
                imgScale = scale(value);
                imgOffsetX = dragOrigX * imgScale;
                imgOffsetY = dragOrigY * imgScale;
                setLimits();
                redraw();
            }
        });

        function setLimits() {
            var left = imgOffsetX / imgScale + targetX;
            var top = imgOffsetY / imgScale + targetY;
            var right = left + scaledWidth;
            var bottom = top + scaledHeight;

            var maxLeft = canvasWidth/2 - 120 / imgScale;
            var maxTop = canvasHeight/2 - 120 / imgScale;
            var minRight = maxLeft + 240 / imgScale;
            var minBottom = maxTop + 240 / imgScale;

            if (imgScale * scaledWidth <= 240) {
                imgOffsetX = imgScale * (maxLeft + minRight - scaledWidth) / 2;
            } else if (left > maxLeft) {
                imgOffsetX -= imgScale * (left - maxLeft);
            } else if (right < minRight) {
                imgOffsetX += imgScale * (minRight - right);
            }
            if (imgScale * scaledHeight <= 240) {
                imgOffsetY = imgScale * (maxTop + minBottom - scaledHeight) / 2;
            } else if (top > maxTop) {
                imgOffsetY -= imgScale * (top - maxTop);
            } else if (bottom < minBottom) {
                imgOffsetY += imgScale * (minBottom - bottom);
            }
        }

        function scale(value) {
            return mapnr(value / 100, 1/5, 5);
        }

        function drawImage() {
            context.translate(imgOffsetX, imgOffsetY);
            context.scale(imgScale * rootScale[0], imgScale * rootScale[1]);
            context.drawImage(image, 0, 0, fullWidth, fullHeight,
                              targetX - canvasWidth/2, targetY - canvasHeight/2, scaledWidth, scaledHeight);
        }

        function redraw() {
            context.save();
            {
                context.clearRect(0, 0, canvasWidth, canvasHeight);
                context.setTransform(1, 0, 0, 1, canvasWidth/2, canvasHeight/2);

                context.save();
                {
                    // shadowed image
                    drawImage();

                    // backdrop
                    context.fillStyle = "rgba(0, 0, 0, 0.6)";
                    context.fillRect(targetX - canvasWidth/2, targetY - canvasHeight/2, scaledWidth, scaledHeight);
                }
                context.restore();

                context.save();
                {
                    // selection image
                    context.beginPath();
                    context.moveTo(-121, -121);
                    context.lineTo(121, -121);
                    context.lineTo(121, 121);
                    context.lineTo(-121, 121);
                    context.clip();
                    drawImage();
                }
                context.restore();

                // the highlighted rectangle
                context.lineWidth = 2;
                context.strokeStyle = "#ccc";
                context.strokeRect(-122, -122, 244, 244);
            }
            context.restore();
        }

        function fetchImage(callback) {
            var x = Math.round(canvasWidth/2 - 120);
            var y = Math.round(canvasHeight/2 - 120);
            var data = context.getImageData(x, y, 240, 240);

            var canvas = document.createElement("canvas");
            canvas.width = 240;
            canvas.height = 240;
            var ctx = canvas.getContext("2d");
            ctx.putImageData(data, 0, 0);

            canvas.toBlob(callback, "image/jpeg");
        }
    }

    PH.on(window, "DOMContentLoaded", function () {
        PH.live(document.body, "click", ".js-avatar-delete", function(ev, el){
            PH.stopEvent(ev);
            var cont = PH.q(".user-account-sidebar > .user-account-profile > .user-avatar");
            sapi.deleteUserAvatar(cont)
                .th });
            var popup = PH.closest(el, ".ph-widget.ph-popup");
            if (popup) popup.PH_Widget.hide();
        });
        PH.live(document.body, "change", ".js-avatar-uploader", function(ev, el) {
            var popup = PH.closest(el, ".ph-widget.ph-popup");
            if (popup) popup.PH_Widget.hide();

            var files = ev.target.files;
            var imgFile;
            for (var i = 0; i < files.length; ++i) {
                if (/^image\//i.test(files[i].type)) {
                    imgFile = files[i];
                    break;
                }
            }
            if (imgFile) {
                var image = new Image();
                var url = window.URL.createObjectURL(imgFile);
                image.onload = function() {
                    if (/^image\/jpe?g$/.test(imgFile.type)) {
                        getOrientation(imgFil });
                    } else {
                        next(image);
                    }
                    function next(image) {
                        openDialog(image, imgFile.name, imgFile.type);
                        window.URL.revokeObjectURL(url);
                    }
                };
                image.onerror };
                image.src = url;
            } else {
                EM.showFailNotification();
            }
            el.parentElement.reset();
        });
        PH.Widget.autoInit();
    });

    function rotateImage(img, orientation, callback) {
        if (!orientation || orientation < 2) {
            return callback(img); // not rotated
        }
        var canvas = document.createElement("canvas");
        var context = canvas.getContext("2d");
        context.save();
        switch (orientation) {
          case 2:
            canvas.width = img.width;
            canvas.height = img.height;
            context.translate(canvas.width / 2, canvas.height / 2);
            context.scale(-1, 1);
            context.drawImage(img, -canvas.width / 2, -canvas.height / 2);
            break;

          case 3:
            canvas.width = img.width;
            canvas.height = img.height;
            context.translate(canvas.width / 2, canvas.height / 2);
            context.rotate(Math.PI);
            context.drawImage(img, -canvas.width / 2, -canvas.height / 2);
            break;

          case 4:
            canvas.width = img.width;
            canvas.height = img.height;
            context.translate(canvas.width / 2, canvas.height / 2);
            context.scale(1, -1);
            context.drawImage(img, -canvas.width / 2, -canvas.height / 2);
            break;

          case 5:
            canvas.width = img.height;
            canvas.height = img.width;
            context.translate(canvas.width / 2, canvas.height / 2);
            context.rotate(-Math.PI / 2);
            context.scale(-1, 1);
            context.drawImage(img, -canvas.height / 2, -canvas.width / 2);
            break;

          case 6:
            canvas.width = img.height;
            canvas.height = img.width;
            context.translate(canvas.width / 2, canvas.height / 2);
            context.rotate(Math.PI / 2);
            context.drawImage(img, -canvas.height / 2, -canvas.width / 2);
            break;

          case 7:
            canvas.width = img.height;
            canvas.height = img.width;
            context.translate(canvas.width / 2, canvas.height / 2);
            context.rotate(Math.PI / 2);
            context.scale(-1, 1);
            context.drawImage(img, -canvas.height / 2, -canvas.width / 2);
            break;

          case 8:
            canvas.width = img.height;
            canvas.height = img.width;
            context.translate(canvas.width / 2, canvas.height / 2);
            context.rotate(-Math.PI / 2);
            context.drawImage(img, -canvas.height / 2, -canvas.width / 2);
            break;
        }
        context.restore();
        canvas.toBlob(function (blob) {
            var url = window.URL.createObjectURL(blob);
            var img = new Image();
            img.onload };
            img.src = url;
        }, "image/jpeg");
    }

    // from https://stackoverflow.com/a/32490603
    function getOrientation(file, callback) {
        var reader = new FileReader();
        reader.onload = function(e) {
            var view = new DataView(e.target.result);
            if (view.getUint16(0, false) != 0xFFD8) {
                return callback(-2);
            }
            var length = view.byteLength, offset = 2;
            while (offset < length) {
                if (view.getUint16(offset+2, false) <= 8) return callback(-1);
                var marker = view.getUint16(offset, false);
                offset += 2;
                if (marker == 0xFFE1) {
                    if (view.getUint32(offset += 2, false) != 0x45786966) {
                        return callback(-1);
                    }
                    var little = view.getUint16(offset += 6, false) == 0x4949;
                    offset += view.getUint32(offset + 4, little);
                    var tags = view.getUint16(offset, little);
                    offset += 2;
                    for (var i = 0; i < tags; i++) {
                        if (view.getUint16(offset + (i * 12), little) == 0x0112) {
                            return callback(view.getUint16(offset + (i * 12) + 8, little));
                        }
                    }
                }
                else if ((marker & 0xFF00) != 0xFF00) {
                    break;
                }
                else {
                    offset += view.getUint16(offset, false);
                }
            }
            return callback(-1);
        };
        reader.readAsArrayBuffer(file);
    }

    function mapnr(f, a, b) {
        return a + f * (b - a);
    }

})();
(function () {
    'use strict';

  }

    window.EM = window.EM || {};
    window.sapi = window.sapi || {};
    window.PH = window.PH || {};

    sapi.getServicesAvailability = function (params, data) {
        data = data || {};
        params = params || {};
        const { offer_id } = params;
        return ajax({
            url: EM.sapi_endpoint + `/extraservice/regions-by-offer/${offer_id}`,
            type: 'json',
            method: 'get',
            headers: {
                'X-Request-Source': 'www',
            },
            data: PH.extend(
                {
                    source_id: 7,
                },
                data,
            ),
        });
    };

    (() => {
        class ServicesAvailabilityModal {
            constructor({ triggerElem, productData }) {
                _defineProperty(this, 'selectedRegion', void 0);

                _defineProperty(this, 'tElem', void 0);

                _defineProperty(this, 'productData', void 0);

                _defineProperty(this, 'modal', void 0);

                _defineProperty(this, 'onSubmitServiceCallback', ({ data }) => {
                    if (!PH.hasClass(data.el, 'modal-atc-btn-service')) return;

                    if ('checkbox' === this.tElem.type) {
                        this.tElem.setAttribute('data-cart-line-id', data.response.lineId);
                        this.tElem.checked = true;
                    }

                    dataLayer.push({
                        event: 'gaEvent',
                        ec: 'website_sandox_event',
                        ea: 'atc_instalation_service',
                        el: this.selectedRegion,
                    });
                    this.modal.close();
                });

                this.tElem = triggerElem;
                this.productData = productData;
                this.modal = new PH.Modal({
                    className: 'services-availability-modal',
                    showHeader: false,
                });
                this.modal.on('close', () => {
                    PH.off(EM.dispatcher, 'yeahIWantThisProduct', this.onSubmitServiceCallback);
                    this.modal.destroy();
                });
            }

            open() {
                sapi.getServicesAvailability({
                    offer_id: this.productData.offer_id,
                })
                    .then((response) => {
                        if (response.code !== 200 || !response.data) return;
                        this.modal._content = EM.TMPL.exec('@Components/ServicesAvailabilityModal/template.html.twig', {
                            productData: this.productData,
                            appData: EM.APP,
                            availabilityData: response.data,
                        });

                        this.modal._initElement();

                        this.init();
                        this.modal.open();
                    })
                    .fail(EM.showFailNotification);
            }

            init() {
                let container = this.modal.element();
                let button = PH.q('.js-submit-container button', container);
                let input = PH.q('input[name="product[]"]', container);
                let offerId = PH.getData(this.tElem, 'offerId');
                PH.setData(button, 'pnk', PH.getData(this.tElem, 'pnk'));
                PH.setData(button, 'offerId', offerId);
                PH.setData(button, 'categoryId', PH.getData(this.tElem, 'categoryId'));
                PH.setData(button, 'forms', PH.getData(this.tElem, 'forms'));
                input.value = offerId;
                PH.on(PH.q('.availability-container', container), 'change', (e) => {
                    this.selectedRegion = e.target.value;
                    button.disabled = false;
                });
                PH.on(EM.dispatcher, 'yeahIWantThisProduct', this.onSubmitServiceCallback);
            }
        }

        EM.ServicesAvailabilityModal = ServicesAvailabilityModal;
    })();
})();

(function(){
    var CompatibleAccessoriesModal = function CompatibleAccessoriesModal(options){
        var this$1 = this;

        // Check in TOOLS -> SITE MODULES from BO to see if the module is active
        if (!EM.siteModules.recommendations_zone_mcart || !sapi.getPacByOffer || !sapi.getPacByOfferGrouped) {
            return;
        }

        this.options = PH.extend({
            offerId: options.offerId,
            identifier: options.identifier,
            pageSection: options.pageSection || document,
            source: options.source,
            productImage: options.productImage,
            productTitle: options.productTitle || false,
            isFashion: options.isFashion || false
        }, options);

        var _source = this.options.source || 'page';
        var ref; // sorry
        if (_source == 'page') {
            ref = 'seeallproducts_accessories_widget';
        } else {
            ref = 'seeallproducts_accessories_modal';
        }

        var self = this;
        var params = {
            identifier: this.options.identifier,
            zone: this.options.zoneGrouped,
            form: this.options.pageSection,
        };
        var data = {
            fields: { resized_images: '150x150' },
            flags: [1]
        };

        var paramsGrouped = PH.merge({}, params);
        paramsGrouped.zone = this.options.zoneGrouped;

        PH.addLoaderTo(this.options.pageSection);
        sapi.getPacByOfferGrouped(params, data).then(function (getPacByOfferGrouped) {
            var group = getPacByOfferGrouped.data || [];
            if (!group.length) {
                new EM.Notification({
                    position: 'top right',
                    message: EM.trans('Uh oh! An error occurred. The request could not be completed!'),
                    type: 'danger'
                });
                return;
            }
            for (var i = 0; i < group.length; i++) {
                group[i].product_collection = group[i].product_collection.filter(function (product) { return (
                    product.offer.flags.may_be_ordered
                ); });
            }

            var allProducts = [];
            getPacByOfferGrouped.data.forEach(function(group){
                if (group.product_collection && group.product_collection.length){
                    allProducts.push(group.product_collection[0]);
                }
            });
            var html = EM.TMPL.exec("@Components/CompatibleAccessoriesModal/template.html.twig", {
                appData: EM.APP,
                getPacByOfferGrouped: getPacByOfferGrouped.data,
                allProducts: allProducts,
                offerId: EM.offer_id,
                isFashion: this$1.options.isFashion,
                moduleStatus: EM.siteModules
            });
            var modal = new PH.Modal({
                content: html || '',
                showHeader: true,
                title: EM.trans(EM.page_type === 'listing' ? 'Compatible accessories:' : 'Accesories for this product')+ (self.options.productTitle ? ': ' + self.options.productTitle : ''),
                className: 'compatible-accessories-modal',
                fullscreen: true
            });
            modal.on('close', function(){
                if (EM.page_type === 'cart'){
                    if (productsBought){
                        window.location.reload();
                        return;
                    } else {
                        PH.removeLoaderFrom(self.options.pageSection);
                    }
                }

                modal.destroy.bind(modal)
            });
            modal.open();

            var modalEl = modal.element(),
                categoryCollectionEl = PH.q('.js-category-collections', modalEl),
                productTabsEl = PH.q('.js-product-tabs', modalEl),
                productTabs = PH.qs('.js-accessory-tab', productTabsEl),
                categoryLinks = {};

            if (self.options && self.options.source && self.options.source !== "EOSMKP_75423_active") {
                new EM.WidgetTracking(productTabs[0], '/recommendationWidgetInModalWindow');
            }

            PH.qs('a[data-toggle="tab"]', categoryCollectionEl).forE  });

            EM.initFavorites(modalEl);
            PH.Widget.autoInit(modalEl);

            var oldLink = PH.q('.active', categoryCollectionEl),
                currentLink,
                productsBought = 0;

            var onCategoryLinkClick = function (event) {
                event.preventDefault();
                var clickedLink = PH.target(event),
                    tab = PH.q(clickedLink.getAttribute('href'), productTabsEl);
                PH.removeClass(oldLink, 'active');
                PH.addClass(clickedLink, 'active');
                categoryCollectionEl.PH_Widget.bringCardInView(clickedLink);

              }
                function decelerate(t) {
                    t = 1-t;
                    return 1 - t*t;
                }

                var target = tab.offsetTop;
                PH.off(productTabsEl, 'scroll', modalScrollHandler);
                PH.animate(function (t) {
                    productTabsEl.scrollTop = mapnr(decelerate(t), productTabsEl.scrollTop, target);
                }, {
                    onSt  }
                });

                oldLink = clickedLink;
            };

            PH.live(modalEl, 'click', 'a[data-toggle="tab"]', onCategoryLinkClick);

            var modalScrollHandler = function (event) {
                var currentTabTarget;
                for(var i = 0, len = productTabs.length; i < len; i++){
                    if ((i === productTabs.length -1 && productTabsEl.scrollTop >= productTabs[i].offsetTop) ||
                        (productTabsEl.scrollTop < productTabs[i+1].offsetTop)) {
                        currentTabTarget = productTabs[i];
                        break;
                    }
                }
                if (!currentTabTarget){
                    return;
                }
                currentLink = categoryLinks['#'+currentTabTarget.getAttribute('id')];
                if (currentLink === oldLink){
                    return;
                }
                PH.removeClass(oldLink, 'active');
                PH.addClass(currentLink, 'active');
                categoryCollectionEl.PH_Widget.bringCardInView(currentLink);
                oldLink = currentLink;
            };

            PH.on(EM.dispatcher, 'yeahIWantThisProduct', function() {
                productsBought = 1;
            });

            PH.on(productTabsEl, 'scroll', modalScrollHandler);

            if (EM.siteModules.toggle_rec_product_impression_logging) {
                self.initTracking(modal);
            }
        }).always( function () {
            if (EM.page_type === 'cart'){
                return;
            }
            PH.removeLoaderFrom(this$1.options.pageSection);
        });

        return this;
    };

    CompatibleAccessoriesModal.prototype.initTracking = function(modalInstance) {
        var modalEl = modalInstance.element();
        var productTabsEl = PH.q('.js-product-tabs', modalEl);
        var visibleCards = [];
        var observer = new IntersectionObserver(function (entries) {
          entries.forEach(function (entry) {
            var card = entry.target;

            if (entry.isIntersecting && visibleCards.indexOf(card) < 0) {
              visibleCards.push(card);
              triggerRequest(card);
            }
          });
        }, {
          root: productTabsEl,
          threshold: 1
        });
        modalInstance.on('clos  });
        PH.qs('.js-card-item', productTabsEl).forE  });
        var timer = null;
        var loggedIds = [];

        function triggerRequest(forCard) {
          var recEl = PH.closest(forCard, '.js-accessory-tab');
          var trackingAlias = PH.getData(recEl, "trackingAlias") || '';
          var scenarioIndex = PH.getData(recEl, "scenarioIndex") || '';
          var recommendationId = PH.getData(recEl, "recommendationId") || '';
          var trackingEngine = PH.getData(recEl, "trackingEngine") || '';
          var sourceProductId = PH.getData(recEl, "sourceProductId") || '';
          clearTimeout(timer);
          timer = setTimeout(function () {
            var newIds = [];
            visibleCards.forEach(function (card) {
              var offerId = PH.getData(card, "offerId");

              if (loggedIds.indexOf(offerId) < 0) {
                newIds.push(offerId);
                loggedIds.push(offerId);
              }
            });

            if (newIds.length) {
              EM.WidgetTracking.storeProductImpressions(_defineProperty({}, "".concat(trackingEngine, ",").concat(sourceProductId, ",pw_").concat(trackingAlias, "_pos_").concat(scenarioIndex, ",").concat(recommendationId), newIds.join(",")));
            }

            visibleCards = [];
          }, 500);
        }
    };

    EM.CompatibleAccessoriesModal = CompatibleAccessoriesModal;

    PH.live(document, "click", ".trigger-accessories-modal", function(event) {
        var pageSection = PH.closest(this, '.page-section');
        var offerId = PH.getData(this, 'offerId');
        new EM.CompatibleAccessoriesModal({
            identifier: offerId,
            pageSection: pageSection
        });
        event.preventDefault();
    });

    PH.live(document, "click", ".purchased-product-trigger-accessories-modal", function(event) {
        var pageSection = PH.closest(this, '.modal-body');
        var offerId = PH.getData(this, 'offerId');
        var productTitle = PH.getData(this, 'productTitle');
        new EM.CompatibleAccessoriesModal({
            identifier: offerId,
            pageSection: pageSection,
            source: 'modal',
            productTitle: productTitle
        });
        event.preventDefault();
    });
})();

(function(){
    var CompatibleProductsForFreeShippingModal = function CompatibleProductsForFreeShippingModal(options){
        // settings for CompatibleProductsForFreeShippingModal
        var this$1 = this;
        var callGotProducts = 0;
        var retryCall = 0;
        var secondsBeforeRecall = 3;

        // if sapi.getProductsForFreeShipping does not exist script has no sense
        if (typeof(sapi.getProductsForFreeShipping) !== typeof(Function)) {
            return;
        }

        // setting params for ajax call
        this.options = PH.extend({
            pageSection: options.pageSection || document,
            source: options.source
        }, options);

        var params = {};
        params.vendor_id = this.options.vendorId || "";
        params.vendor_total = this.options.subTotal || 0;
        params.free_shipping_threshold = this.options.minForFreeShipping || 0;
        params.doc_ids = this.options.docIds.split(',') || [];

        PH.addLoaderTo(this.options.pageSection);

        var callBackWhenAjaxDone = function(getProductsForFreeShipping) {
            var prodsForFreeDelivery = getProductsForFreeShipping.data.PRODUCTS_FOR_FREE_DELIVERY;

            if (prodsForFreeDelivery && prodsForFreeDelivery.product_collection){
                prodsForFreeDelivery.product_collection = prodsForFreeDelivery.product_collection.fi   });
            } else {
                prodsForFreeDelivery = prodsForFreeDelivery || {};
                prodsForFreeDelivery.product_collection = [];
            }

            if (!prodsForFreeDelivery.product_collection.length){
                if (retryCall === 1) {
                    var linkElements = this$1.options.pageSection.querySelectorAll('.show-modal-for-free-delivery');
                    for (var x = 0; x < linkElements.length; x++) {
                        linkElements[x].parentNode.removeChild(linkElements[x]);
                    }
                }

                return;
            }

            callGotProducts = 1;

            var html = EM.TMPL.exec("@Components/CompatibleProductsForFreeShippingModal/template.html.twig", {
                getProductsForFreeShipping: getProductsForFreeShipping.data
            });

            var modal = new PH.Modal({
                content: html || '',
                showHeader: true,
                title:  EM.trans('Get free standard delivery with products sold by %vendor_name%', {'%vendor_name%': this$1.options.vendorName}),
                className: 'compatible-accessories-modal no-categories',
                fullscreen : true
            });

            var productsBought = 0;

            modal.on('close', function(){
                if (EM.page_type === 'cart'){
                    if (productsBought){
                        window.location.reload();
                        return;
                    } else {
                        PH.removeLoaderFrom(this$1.options.pageSection);
                    }
                }
                modal.destroy.bind(modal)
            });

            modal.open();

            var modalEl = modal.element();

            EM.initFavorites(modalEl);
            PH.Widget.autoInit(modalEl);

            PH.on(EM.dispatcher, 'yeahIWantThisProdu   });
        };

        var callBackAlways = function () {
            if (callGotProducts === 0 && retryCall === 0) {
                retryCall = 1;
                setTimeout(sapiCallForMoreProductsForFreeShipping, secondsBeforeRecall * 1000);
                return;
            }
            PH.removeLoaderFrom(this$1.options.pageSection);
        };

        var sapiCallForMoreProductsForFreeShipping = function () {
            PH.when(sapi.getProductsForFreeShipping(params))
                .then(callBackWhenAjaxDone)
                .always(callBackAlways);
        };

        sapiCallForMoreProductsForFreeShipping();

        return this;
    };

    EM.CompatibleProductsForFreeShippingModal = CompatibleProductsForFreeShippingModal;

}a}PH.merge(EM.translations,{Valabilty:"Valabilitate","%count% year|%count% years|%count% years":"%count% an|%count% ani|%count% de ani","Covers approximately all types of damage and theft":"Beneficiezi de servicii de reparatie sau, dupa caz, de inlocuire a bunului avariat/furat cu un produs nou sau reconditionat","The insurance policy is also valid abroad":"Te bucuri de acoperire in strainatate","Choose Casco":"Alege",Added:"Adaugat","For more details on insurance click here for IPID and click here for cover letter.":'Pentru mai multe detalii privind asigurarea apasa <a href="https://s13emagst.akamaized.net/layout/ro/static-upload/ipid-eprotect.pdf" target="_blank">aici</a> pentru IPID si <a href="https://s13emagst.akamaized.net/layout/ro/static-upload/scrisoare-de-prezentare-dante-international-sa-eprotect-docx.pdf" target="_blank">aici</a> pentru Scrisoarea de prezentare',"We recommend that you protect your purchase by choosing one of the casco insurance packages. This service package is offered by Allianz-Tiriac Asigurari.":"Iti recomandam sa iti protejezi achizitia cu asigurarea eProtect oferita de Allianz-Tiriac Asigurari",Close:"Inchide","Service Casco EasyCare":"Serviciul de asigurare eProtect","Personal info":"Date personale","Last name":"Nume",last_name_placeholder:"Ex: Popescu","First name":"Prenume",first_name_placeholder:"Ex: Alexandru","Social security number (CNP)":"Cod numeric personal (CNP)",user_account_cnp_placeholder:"1yymmddxxxxxx","The CNP is requested by the insurance companies. In order to calculate the correct price, they have the legal obligation to verify the number of damages, found with the help of the CNP and the chassis series by querying the CSA / CEDAM database.":"CNP-ul este necesar pentru incheierea oricarei polite de asigurare. Cu aceasta informatie veti putea aviza dauna si Asiguratorul va identifica rapid polita de asigurare.","I agree with the data processing":"Sunt de acord cu prelucrarea datelor personale, pentru emiterea si administrarea politei de asigurare",Back:"Inapoi",Forward:"Inainte","easy care modal terms and conditions placeholder":'<p><strong>CONDITII GENERALE</strong></p> \n\n<p><strong>ASIGURAREA DE AVARII SI FURT ePROTECT </strong></p> \n\n<p><strong>SUMAR </strong></p> \n\n<p>Cine este Asiguratul?</p> \n\n<p>Proprietarul sau Utilizatorul bunului asigurat.</p> \n\n<p>Ce bunuri se pot asigura?</p> \n\n<p>Echipamentele noi (electrice, electronice si electrocasnice) vandute exclusiv de eMag si achizitionate online (site-ul sau aplicatia mobila eMAG), prin call center sau din reteaua de showroom-uri.</p> \n\n<p>Ce riscuri sunt asigurate?</p> \n\n<p>Avarii de tipul loviri, caderi, contactul cu lichide, fenomene atmosferice (trasnet), daune electrice etc , inclusiv daca acestea au loc pe durata transportului efectuat de catre Asigurat/Contractant de la locul de livrare la domiciliul acestuia, precum si furtul prin efractie sau prin acte de talharie, dovedite prin acte emise de Politie.</p> \n\n<p>Cand Incepe acoperirea politei?</p> \n\n<p>Acoperirea politei Incepe la data la care Iti dai acordul pentru Incheierea politei de asigurare prin plata primei de asigurare, dar nu mai tarziu de 5 (cinci) zile calendaristice de la data la care ai achizitionat echipamentul eligibil pentru asigurare.</p> \n\n<p>Cum se avizeaza o dauna?</p> \n\n<p>Poti aviza o dauna apeland serviciul de asistenta la numarul de telefon 021/305.98.00 de luni pana vineri Intre orele 9.00 si 18.00, In termen de maximum 30 de zile lucratoare de la data producerii evenimentului asigurat, In cazul unei avarii, respectiv 7 zile lucratoare de la data producerii sau constatarii furtului. Atunci cand dauna a fost produsa de un incendiu, explozie,furt prin efractie sau talharie trebuie sa raportezi evenimentul autoritatilor competente In termen de maximum 48 de ore(In situatia In care evenimentul a avut loc In afara Romaniei, vei contacta autoritatile locale competente).</p> \n\n<p>Cum procedezi daca nu esti multumit de asigurare?</p> \n\n<p>In situatia in care ai o nemultumire cu privire la asigurare, poti transmite o reclamatie scrisa la oricare dintre adresele urmatoare:</p> \n\n<p>Posta/Registratura, Str. Caderea Bastiliei 80-84, Sector 1, Bucuresti E-mail: <a href="mailto:reclamatii@allianztiriac.ro">reclamatii@allianztiriac.ro</a></p> \n\n<p>Website: www.allianztiriac.ro, sectiunile Contact si Reclamatii Telefon: 021.201.91.00, de luni pana vineri, intre orele 8:00 si 20:00 Fax: 021.208.22.11.</p> \n\n<p>Daca Allianz-Tiriac nu rezolva reclamatia, te poti adresa Autoritatii de Supraveghere Financiara: Bucuresti, Splaiul Independentei nr. 15, sector 5, telefon 021/316 78 80/81, email: <a href="mailto:office@csa-isc.ro,office@asfromania.ro">office@csa-isc.ro,office@asfromania.ro</a></p> \n\n<p><strong>I. ASIGURAREA PE INTELESUL TAU</strong></p> \n\n<p>In cuprinsul prezentelor Conditii de asigurare, se adopta urmatoarele definitii:</p> \n\n<p>Asigurat: persoana fizica sau juridica mentionata in polita de asigurare, care are calitatea de proprietar sau utilizator al bunului asigurat si care, in schimbul platii primei de asigurare, se asigura pentru producerea riscurilor asigurate.</p> \n\n<p>Asigurator: Allianz-Tiriac Asigurari S.A., cu sediul in Bucuresti, Str. Caderea Bastiliei nr. 80-84, sector 1, avand CUI 6120740, nr. de ordine in Registrul Comertului J40/15882/1994, inregistrata in Registrul asiguratorilor, reasiguratorilor si Intermediarilor in asigurari cu nr. RA- 017, autorizata de CSA prin Decizia nr. 35/2001, inregistrat in Registrul de Evidenta a Prelucrarilor de Date cu Caracter Personal cu nr. 779.</p> \n\n<p>Bun asigurat: echipament electronic, electric sau electrocasnic nou, vandut exclusiv de eMAG si achizitionat online (site-ul eMAG, aplicatia mobila, prin call center sau din reteaua de showroom-uri)</p> \n\n<p>Broker: S.C. MARSH Broker de Asigurare - Reasigurare S.R.L., cu sediul in Bucuresti, Calea Floreasca nr. 169A, cladirea Floreasca Business Park, Corp A1, etaj 3, Sector 1, inregistrata la Registrul Comertului sub nr. J40/3767 din 10.05.1995, avand Codul Unic de Inregistrare 7381700, societate ce a negociat conditiile cadru in baza carora se emite polita de asigurare si care, prin intermediul serviciului de asistenta in caz de dauna, ofera asistenta in cazul aparitiei unor riscuri asigurate.</p> \n\n<p>Contract de asigurare: polita de asigurare, impreuna cu oferta de asigurare, suplimentele de asigurare si prezentele Conditii de asigurare</p> \n\n<p>Contractant al asigurarii: Persoana care incheie contractul de asigurare pentru asigurarea unui risc privind alta persoana si care se obliga fata de Asigurator sa plateasca prima de asigurare.</p> \n\n<p>Culpa grava: culpa este grava atunci cand tu sau utilizatorul bunului asigurat ati actionat cu o neglijenta sau imprudenta pe care nici persoana cea mai lipsita de dibacie nu ar fi manifestat-o fata de propriile interese.</p> \n\n<p>Dauna partiala: se considera dauna partiala situatia in care, in urma producerii unui eveniment asigurat, bunul asigurat poate fi reparat si readus la starea anterioara producerii evenimentului. Costul reparatiei (piese, manopera, transport etc.) nu trebuie sa depaseasca suma asigurata din polita.</p> \n\n<p>Dauna totala: se considera dauna totala situatia in care bunul asigurat a fost furat sau a fost distrus, in urma producerii unui eveniment asigurat, iar repararea bunului sau inlocuirea cu un produs reconditionat nu este posibila sau, din punct de vedere economic, costul reparatiei nu se justifica (depaseste suma asigurata din polita).</p> \n\n<p>Distribuitor/Intermediar al asigurarii: persoana juridica ce comercializeaza bunurile ce fac obiectul acestor Conditii de asigurare si intermediaza politele de asigurare: DANTE INTERNATIONAL S.A., cu sediul social in Bucuresti, Sos. Virtutii, nr. 148, sector 6, inregistrata la Registrul Comertului sub nr. J40/372/2002, avand Cod de Inregistrare Fiscala: RO14399840.</p> \n\n<p>Eveniment asigurat: evenimentul brusc si neprevazut, posibil dar incert, prevazut in Conditiile de asigurare, la producerea caruia Allianz-Tiriac isi asuma obligatia de a plati despagubirea.</p> \n\n<p>Fransiza: parte din valoarea daunei/prejudiciului, mentionata in polita de asigurare, suportata de tine pentru fiecare eveniment asigurat.</p> \n\n<p>Garantia legala a producatorului: obligatia asumata de catre producator, importator sau distribuitorul autorizat oferita pentru bunul asigurat, pentru o perioada stabilita conform legislatiei in vigoare, cu privire la efectuarea reparatiilor la anumite piese si/sau inlocuirea acestora, inlocuirea bunului, returnarea sumei de bani platita pentru achizitionarea bunului respectiv sau orice alt mod de protejare a consumatorului in cazul in care bunul achizitionat nu functioneaza perfect sau nu are caracteristicile mentionate in certificatul de garantie sau in materialele promotionale.</p> \n\n<p>Polita de asigurare (Polita): documentul semnat de Asigurator ce cuprinde datele de identificare ale partilor contractante, obiectul asigurarii, suma asigurata, prima de asigurare, termenul de plata a primei de asigurare, fransiza, limita de despagubire, alte elemente care probeaza incheierea contractului de asigurare.</p> \n\n<p>Polita de asigurare de grup: polita de asigurare cadru incheiata intre Distribuitor, Broker si Asigurator in baza careia se emite polita de asigurare.</p> \n\n<p>Prima de asigurare: suma platita de Asigurat/Contractant in schimbul asumarii de catre Allianz-Tiriac a obligatiei de plata a despagubirii la producerea riscurilor asigurate.</p> \n\n<p>Produs reconditionat: produs de acelasi tip si calitate sau cel putin egal din punct de vedere al caracteristicilor tehnice cu bunul asigurat, a carui functionalitate a fost verificata de catre unitatea de service.</p> \n\n<p>Suma asigurata: suma maxima prevazuta in contractul de asigurare, in limita careia Allianz-Tiriac se angajeaza sa plateasca despagubiri la producerea riscurilor asigurate.</p> \n\n<p>Unitatea de service: service-ul imputernicit de catre Allianz Tiriac pentru repararea avariilor ca urmare a producerii unui eveniment asigurat.</p> \n\n<p>Utilizatorul bunului asigurat: Asiguratul sau membrii familiei sale (sot, sotie, copii cu varsta de minimum 6 ani, parinti), respectiv utilizatorul autorizat, in cazul persoanelor juridice sau persoana mentionata in contractul de asigurare, indreptatita sa primeasca despagubirea in cazul producerii riscurilor asigurate.</p> \n\n<p><strong>II. BUNURI ASIGURATE SI ACHIZITIA ASIGURARII </strong></p> \n\n<p>Pot fi preluate in asigurare echipamentele noi (electrice, electronice si electrocasnice) cu un pret de achizitie mai mare de 200 de lei, vandute exclusiv de eMAG si achizitionate online (site-ul eMAG, aplicatia mobila), prin call center sau din reteaua de showroom-uri. Asigurarea se poate incheia online, sau din reteaua de showroom-uri eMAG, o data cu achizitia sau in maximum 5 (cinci) zile calendaristice de la data la care ai achizitionat echipamentul eligibil pentru asigurare.</p> \n\n<p><strong>III. EVENIMENTE ASIGURATE </strong></p> \n\n<p>Pe intreaga perioada de valabilitate a contractului de asigurare, Allianz-Tiriac se obliga sa te despagubeasca in cazul producerii unui eveniment care afecteaza bunul asigurat si decurge din unul dintre urmatoarele riscuri asigurate:</p> \n\n<ol> \n\n<li><strong> Avarii cauzate de:</strong></li> \n\n</ol> \n\n<p>a) contact cu lichide sau patrunderea lichidului, cu exceptia daunelor provocate de precipitatii</p> \n\n<p>b) lovituri sau caderi</p> \n\n<p>c) actiune directa sau indirecta a trasnetului</p> \n\n<p>d) presiune</p> \n\n<p>e) incendiu si urmarile acestuia, fum, explozie</p> \n\n<p>f) scurtcircuit, supratensiune (daune electrice)</p> \n\n<p>g) interferenta cu un camp electromagnetic.</p> \n\n<p>Toate aceste avarii sunt acoperite inclusiv pe durata transportului efectuat de catre Asigurat/Contractant de la locul de livrare a produsului la domiciliul Asiguratului/Contractantului.</p> \n\n<ol start="2"> \n\n<li><strong> Furt, ca urmare a: </strong></li> \n\n</ol> \n\n<p>a) patrunderii prin efractie</p> \n\n<p>b) spargerii unui autovehicul, cu conditia ca bunul sa nu fi fost lasat la vedere in autovehicul si evenimentul sa fi avut loc in intervalul orar 06:00-22:00</p> \n\n<p>c) violentelor sau amenintarilor (acte de talharie)</p> \n\n<p><strong>Riscul de furt se acopera doar pentru bunurile asigurate din categoriile de produse electrice si electronice, acoperirea nefiind valabila pentru bunurile din categoria de produse electrocasnice. </strong></p> \n\n<p><strong>IV. CONTRIBUTIA ASIGURATULUI IN CAZ DE DAUNA (FRANSIZA) </strong></p> \n\n<p>In cazul producerii unui eveniment asigurat, conditia prealabila pentru a beneficia de acoperirea oferita prin polita de asigurare este sa achiti contravaloarea fransizei. Plata fransizei este o pre-conditie pentru preluarea echipamentului de la unitatea de service sau de la curier, atat in cazul bunurilor reparate, cat si in cazul bunurilor inlocuite.</p> \n\n<p><strong>Posibilitati de plata a fransizei: </strong></p> \n\n<p>a) daca bunul reparat sau inlocuit este preluat de la unitatea de service, vei plati fransiza direct catre service</p> \n\n<p>b) daca bunul reparat sau inlocuit iti este transmis prin curierat rapid, vei plati fransiza curierului, la primirea bunului</p> \n\n<p>c) daca bunul este reparat sau inlocuit la adresa ta, vei plati fransiza direct catre reprezentantul Distribuitorului /unitatii de service.</p> \n\n<p><strong>V. ACOPERIRE TERITORIALA</strong></p> \n\n<p>Asigurarea este valabila In intreaga lume, cu exceptia teritoriilor supuse sanctiunilor financiare sau comerciale, dar toate serviciile conexe (inclusiv repararea sau inlocuirea bunului avariat) se vor face exclusiv pe teritoriul Romaniei.</p> \n\n<p><strong>VI. INCEPUTUL SI INCETAREA ACOPERIRII ASIGURARII </strong></p> \n\n<p>Perioada asigurata si raspunderea Allianz-Tiriac incep la data emiterii politei si a platii primei de asigurare si inceteaza la ora 24:00 in ultima zi din perioada pentru care s-a incheiat asigurarea sau la data incetarii anticipate a politei.</p> \n\n<p>Politele se emit pe perioade de 12 sau 24 de luni cu posibilitatea reinnoirii anuale, pana la o perioada de asigurare de maximum:</p> \n\n<p>a) 3 ani pentru telefoane mobile</p> \n\n<p>b) 5 ani pentru celelalte categorii de produse.</p> \n\n<p>Contractul de asigurare Inceteaza anticipat, inainte de data de expirare prevazuta in polita, in urmatoarele cazuri:</p> \n\n<p>a) dupa plata unei daune totale sau in cazul distrugerii bunului asigurat din orice cauza care nu constituie eveniment asigurat, precum si in cazul disparitiei/furtului acestuia</p> \n\n<p>b) producerea riscului a devenit imposibila si/sau polita a fost reziliata (spre exemplu, atunci cand bunul asigurat a fost returnat distribuitorului sau a fost instrainat)</p> \n\n<p>c) dupa despagubirea a 2 evenimente (daune partiale) pentru acelasi bun asigurat.</p> \n\n<p><strong>VII. RENUNTAREA LA ASIGURARE, RETURNAREA SAU INSTRAINAREA ECHIPAMENTULUI SI RAMBURSAREA PRIMEI DE ASIGURARE </strong></p> \n\n<p>Ai dreptul sa renunti la polita fara invocarea unui motiv si sa soliciti incetarea contractului de asigurare In primele 30 de zile de la incheierea acestuia, daca nu a avut loc nicio dauna. In acest caz, Distribuitorul sau Asiguratorul ramburseaza integral prima de asigurare achitata, in baza cererii scrise de renuntare la polita.</p> \n\n<p>Poti solicita oricand rezilierea politei de asigurare si inainte si dupa 30 de zile de la achizitie, urmand a fi aplicate conditiile de restituire de prima detaliate in paragrafele urmatoare.</p> \n\n<p>Daca bunul asigurat este returnat din orice motiv stipulate in legislatia privind protectia consumatorului sau in alte conditii agreate de comun acord Intre Distribuitor si Asigurat, polita se reziliaza in baza solicitarii tale.</p> \n\n<p>Daca vinzi sau instrainezi bunul catre o terta parte esti indreptatit sa soliciti rezilierea politei de asigurare.</p> \n\n<p>Solicitarea de reziliere a politei se poate transmite telefonic, la numerele de telefon 021.200.52.00 sau 0722.25.00.00, sau direct din platforma eMAG.</p> \n\n<p>Daca rezilierea se produce in conditiile in care nu a avut loc nicio dauna in anul de asigurare curent, esti indreptatit sa primesti prima de asigurare aferenta perioadei de risc ramase. Allianz-Tiriac va retine primele de asigurare pentru perioada scursa de la incheierea asigurarii pana la data solicitarii rezilierii, pe zile de asigurare, in proportie de 1/365 din prima anuala, iar diferenta de prima Iti va fi restituita.</p> \n\n<p>Daca perioada de asigurare este de 1 an si soliciti rezilierea politei dupa ce a fost avizata si /sau platita o dauna, prima de asigurare se retine integral.</p> \n\n<p>Daca perioada de asigurare este de 2 ani si soliciti rezilierea politei In anul I, dupa ce a fost avizata si/sau platita o dauna, prima de asigurare se retine integral pana la sfarsitul anului de asigurare in curs, diferenta de prima aferenta anului II urmand a se restitui in baza solicitarii tale.</p> \n\n<p>Daca perioada de asigurare este de 2 ani si soliciti rezilierea politei in anul II, dupa ce a fost avizata si/sau platita o dauna in anul II, prima de asigurare se retine integral.</p> \n\n<p>Daca beneficiezi de serviciul eMAG Genius si returnezi produsul intre 30 si 60 de zile de la achizitie, in baza cererii scrise de renuntare la polita, Distribuitorul ramburseaza integral prima de asigurare daca nu a avut loc nicio dauna.</p> \n\n<p>Restituirea primelor de asigurare datorate se face In termen de maximum 15 zile de la data incetarii sau rezilierii asigurarii.</p> \n\n<p><strong>VIII. OBLIGATIILE ASIGURATULUI</strong></p> \n\n<p>La Incheierea politei si pe Intreaga perioada de valabilitate a contractului de asigurare, trebuie:</p> \n\n<p>a) sa platesti prima de asigurare la termenul prevazut in polita de asigurare; in caz contrar Allianz-Tiriac are dreptul sa refuze plata despagubirii</p> \n\n<p>b) sa te conformezi cerintelor si recomandarilor producatorului cu privire la pastrarea si operarea bunului asigurat, sa mentii bunul asigurat in bune conditii</p> \n\n<p>c) sa conservi dreptul Allianz-Tiriac de regres Impotriva celor vinovati de producerea pagubei</p> \n\n<p>d) sa avizezi producerea unui eveniment asigurat conform procedurii de solicitare a despagubirilor anexata prezentelor Conditii de asigurare</p> \n\n<p>e) sa furnizezi toate informatiile si documentele solicitate de catre Allianz-Tiriac, Broker sau Imputernicitii acestora si sa permiti efectuarea investigatiilor necesare in vederea solutionarii dosarului de dauna</p> \n\n<p>f) sa pastrezi partile avariate si sa le pui la dispozitia reprezentantilor sau expertilor Allianz-Tiriac pentru constatare si sa nu aduci nicio modificare bunurilor afectate, care ar putea sa Ingreuneze sau sa impiedice cercetarile</p> \n\n<p>g) In toate cazurile prevazute de lege si cu precadere atunci cand dauna a fost produsa de un incendiu, explozie, furt prin efractie sau talharie, sa raportezi imediat evenimentul catre autoritatile competente in termen de pana la 48 de ore</p> \n\n<p>h) daca bunul asigurat a fost schimbat ca urmare a unei reparatii sau Inlocuit din orice motiv legat de garantia producatorului sau in baza garantiei extinse achizitionate de la eMAG, la avizarea unei daune trebuie sa prezinti documentele eliberate de unitatea de service care atesta inlocuirea produsului (certificat de garantie, proces verbal, factura etc.)</p> \n\n<p>In cazul nerespectarii acestor obligatii, Allianz-Tiriac are dreptul sa refuze plata despagubirii asumata prin prezentul contract, daca din acest motiv nu s-a putut determina cauza sau dimensiunea reala a pagubei produse din riscurile asigurate.</p> \n\n<p><strong>IX. OBLIGATIILE ALLIANZ-TIRIAC </strong></p> \n\n<p>In baza politei de asigurare, In cazul producerii unui eveniment asigurat, Allianz-Tiriac acopera costurile de reparatie a bunului avariat sau inlocuirea acestuia cu un produs reconditionat (dauna partiala) sau cu un produs nou (dauna totala).</p> \n\n<p>Daca, din punct de vedere tehnic, produsul nu poate fi reparat sau din punct de vedere economic costul reparatiei nu se justifica, Allianz-Tiriac se obliga sa te depagubeasca prin inlocuirea, in functie de disponibilitate, cu un bun nou sau reconditionat, identic sau similar ca tip si calitate cu bunul avariat, a carui valoare la momentul solutionarii daunei nu depaseste suma asigurata mentionata in polita.</p> \n\n<p>Daca, la data evenimentului, un produs de acelasi tip si calitate cu bunul asigurat nu este disponibil In oferta comerciala proprie a distribuitorului, Allianz-Tiriac se obliga sa inlocuiasca bunul avariat cu un produs similar, cel putin egal din punct de vedere al caracteristicilor tehnice, disponibil in acel moment la distribuitor. Acest produs similar poate fi un produs nou sau unul reconditionat, conform deciziei Asiguratorului.</p> \n\n<p><strong>X. SUMA PENTRU CARE SE INCHEIE ASIGURAREA </strong></p> \n\n<p>Suma pentru care se incheie asigurarea este suma asigurata mentionata in polita de asigurare, reprezentand valoarea bunului la momentul achizitiei, respectiv pretul de vanzare al bunului, inainte de aplicarea unor eventuale reduceri promotionale /comerciale.</p> \n\n<p>In cazul in care, la momentul producerii unui eveniment asigurat, valoarea bunului asigurat este mai mare decat suma asigurata, Allianz-Tiriac va acorda despagubiri pana la maximum suma asigurata mentionata in polita de asigurare.</p> \n\n<p><strong>XI. CE NU ACOPERA POLITA DE ASIGURARE </strong></p> \n\n<p>Nu sunt cuprinse in asigurare si nu sunt acoperite de catre Allianz-Tiriac:</p> \n\n<p>Pagubele produse de/sau provenind din:</p> \n\n<p>a) razboi (declarat sau nu), razboi civil, lege martiala, revolutie, rebeliune, razvratire militara cu sau fara uzurparea puterii, tulburari interne, acte politice de violenta, suprimare sau acte de terorism, expropriere, confiscare, distrugere sau avariere din ordinul oricarui guvern sau oricarei autoritati publice, din orice caz de forta majora si ca urmare a unor catastrofe naturale sau nucleare, infiltratii, poluare, contaminare, inundatii; orice impuls electromagnetic, indiferent daca a fost provocat de om sau de natura</p> \n\n<p>b) pierderile financiare indirecte, pierderile de consecinta in legatura cu bunul asigurat, respectiv pierderea de venituri si/ saupenalizari</p> \n\n<p>c) daune directe sau indirecte ale altor bunuri decat cele cuprinse in asigurare.</p> \n\n<p>Solicitarile de despagubire pentru sau care rezulta din:</p> \n\n<p>a) echipamente utilizate pentru activitati profesionale, comerciale si industriale, cu exceptia celor de tipul Desktop PC/monitor, laptop, tableta, telefon mobil</p> \n\n<p>b) eliminarea defectelor minore, defecte care rezulta, de regula, din zgarieturi si frecare, alte defecte exterioare care nu afecteaza utilizarea tehnica a bunului asigurat</p> \n\n<p>c) Intretinerea periodica, curatarea si alte servicii similare; sau pentru materiale consumabile, precum bateriile si acumulatorii, cu exceptia cazurilor in care daunele sunt cauzate direct de un eveniment asigurat si numai daca aceste materiale consumabile au fost furnizate impreuna cu bunul asigurat</p> \n\n<p>d) defectele de design, de fabricatie sau alte tipuri de defecte asociate cu retragerea de pe piata a bunului asigurat sau ale partilor acestuia</p> \n\n<p>e) prejudiciile care cad sub incidenta raspunderii producatorului sau sub incidenta garantiei legale a producatorului</p> \n\n<p>f) uitarea sau pierderea,Inchirierea sau concesionarea bunului asigurat</p> \n\n<p>g) uzura normala a bunului asigurat sau a oricarei parti componente</p> \n\n<p>h) precipitatiile de orice tip sau defectarea bunului din cauza umiditatii</p> \n\n<p>i) nerespectarea instructiunilor de instalare si de utilizare sau Incercari proprii de reparare, interventii neautorizate sau alte daune cauzate de configurarea gresita a produselor sau programelor, mentenanta si reconditionare, modificare si Intretinere a aparatului</p> \n\n<p>j) virusarile, deteriorarea sau functionarea necorespunzatoare a sistemului de operare, a fisierelor de configurare sau a programelor instalate, folosirea altor drivere sau programe decat cele originale care insotesc produsul, eventualele incompatibilitati de natura software si a celor care rezulta din stocarea si transferul datelor</p> \n\n<p>k) actiunile ilicite,intentia sau culpa grava a Asiguratului saua Utilizatorului, neconformarea cu cerintele si recomandarile producatorului cu privire la pastrarea si operarea bunului asigurat</p> \n\n<p>l) daunele produse prin strivire sau sprijinire pe bunul asigurat, de catre Asiguratul sau Utilizatorul bunului asigurat</p> \n\n<p>m) furtul si disparitia in alte conditii decat cele prevazute la Cap. III, pct. 2; evaziunea, frauda si ascunderea, avand drept consecinta disparitia bunului asigurat.</p> \n\n<p><strong>XII. ALTE ASIGURARI </strong></p> \n\n<p>In cazul in care, la data formularii cererii de despagubire, exista o alta asigurare pentru bunul asigurat ce acopera acelasi risc la un alt Asigurator, Allianz-Tiriac va achita despagubirea In mod proportional cu suma asigurata mentionata In polita de asigurare si pana la concurenta acesteia, fara ca tu sa poti Incasa o despagubire mai mare decat prejudiciul efectiv.</p> \n\n<p><strong>XIII. DISPOZITII FINALE </strong></p> \n\n<p>In baza acestui contract, nu poti folosi despagubirea ca o plata partiala pentru a achizitiona un alt bun In afara celui oferit de Distribuitor (prin plata unei diferente de pret) si nici nu poti, in nicio situatie, sa soliciti sau sa primesti o compensatie/ despagubire in bani.</p> \n\n<p>Prezentul Contract este guvernat de legea romana.</p> \n\n<p>Orice disputa posibila care decurge din contract sau in legatura cu acesta va fi supusa spre solutionare instantelor judecatoresti din Romania.</p> \n\n<p>Prezentele conditii de asigurare, ca parte integranta a contractului de asigurare, intra in vigoare la data mentionata in polita de asigurare, dar nu mai devreme de emiterea si acceptarea acesteia prin plata primei de asigurare.</p> ','To activate the "Finish" button you must read the Terms and Conditions':'Pentru activarea butonului "Finalizeaza" te rugam sa citesti Termenii si Conditiile',Finish:"Finalizeaza"}),function(a){var u=a.bool,l=a.escape_html,c=a.filter,t=a.for,o=a.include,p=a.merge,d=a.number,m=a.out,e=a.register,g=a.string,v=a.index;e("@Components/ProtectPlus/templates/partials/header.html.twig",function(){return a.t({$main:function(a){return m(['<div class="modal-header">\n    <button type="button" class="close gtm_hs832p1zim" data-dismiss="modal" aria-label="',l(c.trans("Close")),'"><i class="em em-close"></i></button>\n    <h4 class="modal-title">',l(c.trans("Service Casco EasyCare")),"</h4>\n</div>"])}})}),e("@Components/ProtectPlus/templates/step-1.html.twig",function(){return a.t({$main:function(a){var e=a.options,n=a.tracking,s=a.offerId,i=a.deductible;return m([(e=c.default(e,[]),""),(n=c.default(n,{}),""),(s=c.default(s,""),""),"",'<div class="step step-1">',o("@Components/ProtectPlus/templates/partials/header.html.twig",p({},a,{options:e,tracking:n,offerId:s,deductible:i=null!=i?i:0})),'<div class="modal-body">\n        <div class="table-items">',t(e,function(a,e){var i,t,r;return a?m([(i=[c.trans("Valabilty")],""),(t=d(v(e,"value"))+d(c.default(v(a,"index"),1)),""),(r=d(v(a,"index0"))+1,""),(a=v(n,"product_"+g(r)),""),u(t)?m([(i=c.merge(i,[c.trans("%count% year|%count% years|%count% years",{"%count%":t})]),"")]):"",'<a href="#" class="ew-item ec-item ew-item-',l(r)," js-choose-ec-casco ",l(a),'" data-next-step="2" data-ew="',l(r),'"\n                   data-service="',l(v(e,"id")),'"\n                   data-name="',v(e,"name"),'"\n                   data-price="',l(c.default(v(v(e,"price"),"current"),null)),'" data-initial-price="',l(c.default(v(v(e,"price"),"initial"),null)),'"\n                   data-price-discount="',l(v(v(v(e,"price"),"discount"),"percent")),'" data-offer-id="',l(s),'"\n                   data-upsell-id="',l(c.default(v(e,"upsell_id"),"")),'"\n                >\n                    <div class="ec-title">',v(e,"name"),'</div>\n\n                    <div class="ec-body pad-hrz-xs pad-sep-xs">\n                        <ul class="ec-benefits-list">\n                            <li class="benefit-yes">',l(c.trans("Covers approximately all types of damage and theft")),'</li>\n                            <li class="benefit-yes">',l(c.trans("The insurance policy is also valid abroad")),'</li>\n                        </ul>\n\n                        <div class="ec-pricing">\n                            <div class="price">',0<c.default(v(v(v(e,"price"),"discount"),"percent"),0)?m(['<div class="price-discount">\n                                        <span class="old-price">',c.moneyFormat(v(v(e,"price"),"initial")),'</span>\n                                        <span class="label label-danger">-',l(v(v(v(e,"price"),"discount"),"percent")),"%</span>\n                                    </div>"]):"","<div>",c.moneyFormat(v(v(e,"price"),"current")),"</div>\n                            </div>\n                            <div>",l(c.join(i," ")),'</div>\n\n                            <button class="btn btn-block btn-default mrg-top-md">',l(c.trans("Choose Casco")),'</button>\n                            <div class="ec-item-checked">',l(c.trans("Added")),"</div>\n                        </div>\n                    </div>\n                </a>"]):""}),'</div>\n\n        <p class="ec-details pad-hrz-md mrg-btm-xxs text-center">',c.trans("For more details on insurance click here for IPID and click here for cover letter."),"</p>",u(i)?m(['<p class="ec-details mrg-btm-xxs pad-hrz-xs text-center">',c.trans("in case of damage, you will have to pay a deductible of %cost%",{"%cost%":c.moneyFormat(i)}),"</p>"]):"",'<p class="ec-details text-muted mrg-btm-xs pad-hrz-xxs text-center">',c.trans("We recommend that you protect your purchase by choosing one of the casco insurance packages. This service package is offered by Allianz-Tiriac Asigurari."),"</p>\n    </div>\n</div>"])}})}),e("@Components/ProtectPlus/templates/step-2.html.twig",function(){return a.t({$main:function(a){var e=a.deductible;return m(["",'<div class="step step-2 hidden">',o("@Components/ProtectPlus/templates/partials/header.html.twig",p({},a,{deductible:e=null!=e?e:0})),'<div class="modal-body">\n        <div class="row">\n            <div class="col-md-6 col-md-offset-3">\n                <h3 class="ec-title-protect-plus">',l(c.trans("Easycare modal selected title")),'</h3>\n\n                <h4 class="mrg-top-lg font-bold">',l(c.trans("Personal info")),'</h4>\n\n                <form class="js-protect-plus-user-form">\n\n                    <div class="form-group">\n                        <label for="user-name" class="mrg-top-xs"><span class="text-muted">',l(c.trans("Last name")),'</span></label>\n                        <input type="text" class="form-control" id="user-name" value="" placeholder="',l(c.trans("last_name_placeholder")),'" name="name" required/>\n                    </div>\n\n                    <div class="form-group">\n                        <label for="easycare-user-last_name" class="mrg-top-xs"><span class="text-muted">',l(c.trans("First name")),'</span></label>\n                        <input type="text" class="form-control" id="easycare-user-last_name" value="" placeholder="',l(c.trans("first_name_placeholder")),'" name="last_name" required/>\n                    </div>\n\n                    <div class="form-group">\n                        <label for="easycare-user-cnp" class="mrg-top-xs"><span class="text-muted">',l(c.trans("Social security number (CNP)")),'</span></label>\n                        <input type="text" class="form-control" id="easycare-user-cnp" value="" placeholder="',l(c.trans("user_account_cnp_placeholder")),'" name="cnp" data-v-cnp="true" data-v-length="13" required/>\n                    </div>\n\n                    <div class="cnp-info mrg-top-sm font-size-sm">',c.trans("The CNP is requested by the insurance companies. In order to calculate the correct price, they have the legal obligation to verify the number of damages, found with the help of the CNP and the chassis series by querying the CSA / CEDAM database."),"</div>",u(e)?m(['<div class="font-bold mrg-top-sm">',c.trans("In case of an insured event, you will have to pay a deductible of %price%, regardless of the value of the damage. This value is written on the insurance policy.",{"%price%":c.moneyFormat(e)}),"</div>"]):"",'<div class="form-group agreement-checkbox mrg-top-sm">\n                        <div class="checkbox-custom inline-block--middle">\n                            <input type="checkbox" class="form-check-input" name="easycare-terms" value="" id="easycare-terms" required>\n                            <label for="easycare-terms">',c.trans("I agree with the data processing"),'</label>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n\n    <div class="modal-footer">\n        <div class="row">\n            <div class="col-sm-5">\n                <button type="button" class="js-go-to-step font-size-sm btn btn-go-back gtm_bhr328syw7" data-next-step="1"><span class="em em-left" aria-hidden="true"></span> ',c.trans("Back"),'</button>\n            </div>\n            <div class="col-sm-6">\n                <button type="button" class="btn btn-primary btn-default btn-lg js-validate-user-form gtm_m93uttyrqk" data-next-step="3">',c.trans("Forward"),"</button>\n            </div>\n        </div>\n    </div>\n</div>"])}})}),e("@Components/ProtectPlus/templates/step-3.html.twig",function(){return a.t({$main:function(a){return m(['<div class="step step-3 hidden">',o("@Components/ProtectPlus/templates/partials/header.html.twig",p({},a)),'<div class="modal-body">\n        <div class="agreement-text">\n            ',c.trans("easy care modal terms and conditions placeholder"),'\n        </div>\n    </div>\n\n    <div class="modal-footer">\n        <div class="agreement-info pad-btm-sm text-center">',c.trans('To activate the "Finish" button you must read the Terms and Conditions'),'</div>\n        <div class="row">\n            <div class="col-sm-5"><button type="button" class="js-go-to-step font-size-sm btn btn-go-back gtm_bhr328syw7" data-next-step="2"><span class="em em-left" aria-hidden="true"></span> ',l(c.trans("Back")),'</button></div>\n            <div class="col-sm-7"><button type="button" class="js-finish-protect-plus btn btn-primary btn-default btn-lg gtm_l7071s2mta" disabled>',l(c.trans("Finish")),"</button></div>\n        </div>\n    </div>\n</div>"])}})}),e("@Components/ProtectPlus/modal.html.twig",function(){return a.t({$main:function(a){var e,i=a.options,t=a.tracking,r=a.offerId;return m([(e=u(v(v(i,0),"deductible"))?v(v(i,0),"deductible"):u(v(v(v(i,0),"line_id"),"deductible"))?v(v(v(i,0),"line_id"),"deductible"):0,""),o("@Components/ProtectPlus/templates/step-1.html.twig",{options:i,tracking:t,offerId:r,deductible:e}),o("@Components/ProtectPlus/templates/step-2.html.twig",{deductible:e}),o("@Components/ProtectPlus/templates/step-3.html.twig",p({},a,{deductible:e}))])}})})}(EM.TMPL),function(){var i={validateOnChange:!0,validateOnBlur:!0,validateOnSubmit:!0},n={product_page:{product_1:"gtm_c88b7ir3li",product_2:"gtm_yvdmvddwdm",close:"gtm_hs832p1zim",delete:"gtm_1km399qzk4"},user_warranties:{product_1:"gtm_p1i93uklv4",product_2:"gtm_aj3s15d7v0",close:"gtm_hs832p1zim",delete:""},atc_modal:{product_1:"gtm_aj6femwtxn",product_2:"gtm_aj6femwtxn",close:"gtm_hs832p1zim",delete:"gtm_1km399qzk4"}},a=function(){"use strict";function r(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"",i=2<arguments.length&&void 0!==arguments[2]?arguments[2]:"",t=3<arguments.length&&void 0!==arguments[3]?arguments[3]:"";_classCallCheck(this,r),this.options=a,this.selected=e,this.pageType=i,this.userData={},this.source="",this.tracking=n[i],this.lineId=t}return _createClass(r,[{key:"setOfferId",vd=a}},{key:"setEvents",value:function(){var a=this,e=this.modal.element();PH.live(e,"click",".ew-item",this.setExtraWarranty.bind(this)),PH.live(e,"click",".js-validate-user-form",this.validateForm.bind(this)),PH.live(e,"click",".js-go-to-step",this.goToStep.bind(this)),PH.live(e,"click",".js-finish-protect-plus",function(){sapi.protectPlusSaveUser({first_name:a.userData.name,last_name:a.userData.last_name,personal_identity_code:a.userData.cnp},{form:a.modal.element()}).then(function(){a.modal&&a.modal.close(),PH.trigger(EM.dispatcher,"ProtectPlusSelected",{data:a.selected,hasRedirect:!!a.source,pageType:a.pageType,lineId:a.lineId})}).c(){})}),PH.on(PH.q(".step-3 .agreement-text",this.modal.element()),"scroll",function(){var a=PH.q(".step-3 .js-finish-protect-plus");a.disabled&&(a.disabled=!1)})}},{key:"setExtraWarranty",value:function(a,e){a&&PH.stopEvent(a);var i=this.modal.element();PH.addLoaderTo(i),PH.qs(".ec-item",this.modal.element()).ford")});a=PH.getData(e,"service")||PH.getData(e,"serviceEc"),a=PH.q('[data-service="'.concat(a,'"]'),i);a&&a.classList.add("ec-item-checked"),e.classList.add("ec-item-checked"),this.selected=e,PH.q(".ec-title-protect-plus",i).innerHTML=PH.getData(this.selected,"serviceName")||PH.getData(this.selected,"name"),this.setStep(t(e)),PH.removeLoaderFrom(i)}},{key:"goToStep",value:function(a){a=t(a.target);1==a&&(PH.q(".step-2 form",this.modal.element()).reset(),this.checkExtraWarranty()),this.setStep(a)}},{key:"setStep",value:function(i){PH.qs(".step",this.modal.element()).forEach(function(a,e){e+1==i?(a.classList.remove("hidden"),a.classList.add("show")):(a.classList.remove("show"),a.classList.add("hidden"))})}},{key:"checkExtraWarranty",value:function(){this.selected="";var a=PH.q(".ew-item.ec-item-checked",this.modal.element());a&&PH.removeClass(a,"ec-item-checked")}},{key:"validateForm",value:function(a){var e=PH.q(".step-2 form",this.modal.element());PH.Validator.addValidatorToForm(e,i,{}).validate()&&(e=PH.q(".js-protect-plus-user-form",this.modal.element()),this.userData=Object.fromEntries(new FormData(e).entries()),this.setStep(t(a.target)))}},{key:"open",value:function(){var a=this;this.modal=new PH.Modal({content:EM.TMPL.exec("@Components/ProtectPlus/modal.html.twig",{options:this.options,selected:this.selected,tracking:this.tracking,offerId:this.offerId}),className:"modal-protect-plus",size:"modal-lg",showHeader:!1,hash:r.HASH,fullscreen:e()}),this.source="",this.selected&&(this.setExtraWarranty("",this.selected),this.source="upsell_modal"),this.modal.on("cly()}),this.setEvents(),this.modal.open()}},{key:"setOptions",value:function(){this.options=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}}}]),r}.s||1};a.HASH="protect-plus",EM.ProtectPlus=a}(),sapi.protectPlusSaveUser=function(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};return ajax({url:"".concat(EM.old_site_endpoint,"/easycare/save"),type:"json",method:"post",headers:{"X-Request-Source":"www"},crossOrigin:!0,data:PH.extend({source_id:7},a),form:e.form})};
//# sourceMappingURL=maps/exported_script.min.js.map

PH = PH || {};
PH.Validator = {
    rules           : {},
    helperNode      : 'span',
    helperClassName : 'help-block',
    elementParent   : '.form-group',
    errorClass      : 'has-error',
    successClass    : 'has-success',

    blurEventMap    : {
        'focusout' : ['input[type="text"]', 'input[type="email"]', 'input[type="number"]', 'textarea'],
        'change'   : ['input[type="checkbox"]', 'input[type="radio"]', 'select'],
        'ph-close' : ['select']
    },
    changeEventMap  : {
        'keyup'    : ['input[type="text"]', 'input[type="email"]', 'input[type="number"]', 'textarea'],
        'change'   : ['input[type="checkbox"]', 'input[type="radio"]', 'select'],
        'ph-close' : ['select']
    },

    FormValidator: function() {
        this.form       = arguments[0];
        this.initEvents = {};
        this.validator  = PH.Validator;

        this.updateArgs(arguments[1], arguments[2]);

        if (this.form.tagName.toLowerCase() == 'form') {
            this.form.setAttribute('novalidate', true);
        }
    },

    addRule: function(name, callback, message) {
        var rule = {};

        if (PH.isArray(name)) {
            if (name.length > 1) {
                rule.alias = name[1];
            }
            name = name[0];
        }

        this.rules[name] = PH.extend(rule, {callback: callback, message: message});
    },

    isFormValid: function() {
        var data = this.addValidatorToForm(arguments[0], arguments[1], arguments[2]);
        return data.isValid();
    },

    validateForm: function() {
        var data = this.addValidatorToForm(arguments[0], arguments[1], arguments[2]);
        return data.validate();
    },

    addValidatorToForm: function() {
        var form = arguments[0];
        var data = form['ph.validator'];

        if (data) {
            if (arguments[1] || arguments[2]) {
                data.updateArgs(arguments[1], arguments[2]);
            }
        } else {
            form['ph.validator'] = (data = new PH.Validator.FormValidator(arguments[0], arguments[1], arguments[2]));
        }

        return data;
    },

    addErrorsToF   },

    removeHelpers: function(container) {
        container.classList.remove(this.errorClass);
        container.classList.remove(this.successClass);

        var elements = container.querySelectorAll('.' + this.helperClassName);
        for (var i = 0; i < elements.length; i++) {
            PH.remove(elements[i]);
        }
    }
};

// Form Validator instance
// ===============================
PH.Validator.FormValidator.prototype.addEventListeners = function () {
    if (this.options.validateOnBlur || this.options.validateOnChange) {
        var validateType = this.options.validateOnBlur ? 'onBlur' : 'onChange';
        var eventMap     = this.options.validateOnBlur ? this.validator.blurEventMap : this.validator.changeEventMap;

        if ((validateType == 'onBlur' && this.initEvents.onBlur) || (validateType == 'onChange' && this.initEvents.onChange)) {
            return;
        }

        Object.keys(eventMap).forEach(function(eventName) {
            var elementSelectorArray = eventMap[eventName];

            if (!Array.isArray(elementSelectorArray)) {
                return false;
            }

            PH.live(this.form, eventName, elementSelectorArray.join(", "), function(event) {
                var el = PH.target(event);
                this.validateField(el, this.rules[el.name]);
            }.bind(this));
        }, this);

        this.initEvents[validateType] = true;
    }

    if (this.options.validateOnSubmit && !this.initEvents.onSubmit) {
        this.form.addEventListener('submit', function(event) {
            if (!this.validate()) {
                event.preventDefault();
            }
        }.bind(this));

        this.initEvents.onSubmit = true;
    }
};

PH.Validator.FormValidator.prototype.updateArgs = function () {
    this.rules   = PH.merge({}, !arguments[0] ? this.rules : arguments[1] ? arguments[1] : arguments[0]);

    this.options = PH.merge({
        addErrorClass       : true,
        addSuccessClass     : false,
        validateOnBlur      : false,
        validateOnChange    : false,
        validateOnSubmit    : true,
        scrollOnError       : false,
        scrollOnErrorOffset : -40
    }, this.options, arguments[1] ? arguments[0] : null);

    this.addEventListeners();
};

PH.Validator.FormValidator.prototype.isVal);
};

PH.Validator.FormValidator.prototype.validate = function (checkIsValid) {
    var isValid  = true;
    var elements = this.form.querySelectorAll('input, select, textarea');

    for (var i = 0; i < elements.length; i++) {
        if (!this.validateField(elements[i], this.rules[elements[i].name], !!checkIsValid)) {
            if (checkIsValid) return false;

            if (this.options.scrollOnError && isValid) {
                PH.scrollToElement(elements[i], {offsetTop: this.options.scrollOnErrorOffset});
            }

            isValid = false;
        }
    }

    return isValid;
};

PH.Validator.FormValidator.prototype.validateField = function (field, rules, skipAddHelper) {
    var rule, error, attrValue, attrMsg, isValid = true, rulesObj = {};

    if (PH.isArray(rules)) {
        for (var i = 0; i < rules.length; i++) {
            rule = rules[i];
            rulesObj[rule[0]] = rule;
        }
    }

    Object.keys(this.validator.rules).forEach(function(key) {
        if (key in rulesObj) {
            return;
        }

        attrValue = field.getAttribute('data-v-' + key);

        if (attrValue === null && this.validator.rules[key].alias) {
            attrValue = field.getAttribute(this.validator.rules[key].alias);
        }

        if (attrValue !== null) {
            var errorMsg = field.getAttribute('data-vm-' + key);
            rulesObj[key] = [key, attrValue, errorMg; } : null];
        }
    }, this);

    var parentElement = PH.closest(field, this.validator.elementParent) || document.createElement('div');
    this.validator.removeHelpers(parentElement);

    var ruleName, ruleValue, ruleMsg;

    for (var r in rulesObj) {
        rule      = rulesObj[r];
        ruleName  = rule[0];
        ruleValue = rule[1];
        ruleMsg   = rule[2];

        if (ruleName in this.validator.rules) {
            isValid = this.validator.rules[ruleName].callback.call(this, field, ruleValue);

            if (!isValid) {
                error = (ruleMsg || this.validator.rules[ruleName].message).call(this, ruleValue);
                break;
            }
        }
    }

    if (skipAddHelper !== true) {
        this.addClassToField(parentElement, isValid);
        this.addHelperToField(parentElement, error);
    }

    return isValid;
};

PH.Validator.FormValidator.prototype.addClassToField = function (container, isValid) {
    if (this.options.addErrorClass && !isValid) {
        container.classList.add(this.validator.errorClass);
    } else if (this.options.addSuccessClass && isValid) {
        container.classList.add(this.validator.successClass);
    }
};

PH.Validator.FormValidator.prototype.addHelperToField = function (container, message) {
    if (message) {
        container.appendChild(this._createHelperNode(message));
    }
};

PH.Validator.FormValidator.prototype.addErrorsToForm = function (errorsObject) {
    for (var errorField in errorsObject) {
        var errorMessage;
        var elements = this.form.querySelectorAll('input[name="'+errorField+'"], select[name="'+errorField+'"], textarea[name="'+errorField+'"]');

        if (typeof errorsObject[errorField] === 'string') {
            errorMessage = errorsObject[errorField];
        } else if (Array.isArray(errorsObject[errorField])) {
            errorMessage = errorsObject[errorField][0];
        } else {
            continue;
        }

        for (var i = 0; i < elements.length; i++) {
            var parentElement = PH.closest(elements[i], this.validator.elementParent) || document.createElement('div');
            this.validator.removeHelpers(parentElement);

            this.addClassToField(parentElement, false);
            this.addHelperToField(parentElement, errorMessage);
        }
    }
};

PH.Validator.FormValidator.prototype._createHelperNode = function (message) {
    var elem = document.createElement(this.validator.helperNode);
    elem.className = this.validator.helperClassName;
    elem.innerHTML = message;
    return elem;
};


// Validator basic rules
// ===============================

PH.Validator.addRule(['required', 'required'], function(element, params) {
    if (element.type === 'radio') {
        var group = params || document;
        var radios = group.querySelectorAll('[name="' + element.name + '"]');
        // we only show the message for the last input in the group
        if (radios[radios.length - 1] === element) {
            for (var k = 0; k < radios.length; k++) {
                if (radios[k].checked) {
                    return true;
                }
            }
            return false;
        }
        return true;
    } else if (element.type === 'checkbox') {
        return element.checked;
    }
    return element.value !== '';
}, function() {
    return EM.trans('This field is required');
});

PH.Validator.addRule('email', function(element) {
    var re = /^([\w-+]+(?:\.[\w-+]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return element.value === '' || re.test(element.value);
}, function() {
    return EM.trans('Invalid email');
});

PH.Validator.addRule('number', function(element) {
    return element.value === '' || (!isNaN(parseFloat(element.value)) && isFinite(element.value));
}, function() {
    return EM.trans('Incorrect number');
});

PH.Validator.addRule('digits', function(element) {
    var re = /^([0-9]+)$/;
    return element.value === '' || re.test(element.value);
}, function() {
    return EM.trans('Only digits allowed');
});

PH.Validator.addRule(['min', 'minlength'], function(element, params) {
    if (element.type == "number") {
        return parseFloat(element.value) >= parseFloat(params);
    } else {
        return element.value.length >= parseInt(params);
    }
}, function() {
    return EM.trans('Too short');
});

PH.Validator.addRule(['max', 'maxlength'], function(element, params) {
    if (element.type == "number") {
        return parseFloat(element.value) <= parseFloat(params);
    } else {
        return element.value.length <= parseInt(params);
    }
}, function() {
    return EM.trans('Too long');
});

PH.Validator.addRule(['length', 'siz);
}, function() {
    return EM.trans('Length mismatch');
});

PH.Validator.addRule(['multiple', 'multiple'], function(element, params) {
    return element.value === '' || (parseInt(element.value) % params === 0);
}, function() {
    return EM.trans('Incorrect multiple');
});

PH.Validator.addRule('phone', function(element, params) {
    var expr;
    switch (params) {
        case 'ro':
            expr = /^07[0-9]{8}$/;
            break;
        case 'bg':
            expr = /^08[0-9]{8}$/;
            break;
        case 'hu':
            expr = /^36[0-9]{2}[0-9]{7}$/;
            break;
        // case 'pl':
        //     expr = /^07[0-9]{8}$/;
        //     break;
        default:
            expr = /^[0-9\-\+ ]+$/;
    }
    return element.value === '' || expr.test(element.value);
}, function() {
    return EM.trans('Incorrect phone number');
});

PH.Validator.addRule('minRatingVals;
}, function() {
    return EM.trans('Please enter a greater value');
});

/**
 * Validate CNP
 *
 * This rule is valid for 1800 - 2099.
 *
 * - If length is 13 characters
 * - If only numeric value
 * - If first character is higher than 0
 * - If birth year is between 1800 - 2099
 * - If birth year is lower than today
 * - If last character is valid (hash check)
 * - If birth location is valid
 */
PH.Validator.addRule('cnp', function(element, params) {
    if (element.value.length === 0) { return true; }
    if (element.value.length !== 13 || isNaN(element.value)) { return false; }

    var birthYear, birthLocation, cnp = [], now = new Date(), hashResult = 0, hashTable = [2, 7, 9, 1, 4, 6, 3, 5, 8, 2, 7, 9];

    for (var i = 0; i < 13; i++) {
        cnp[i] = parseInt(element.value.charAt(i), 10);

        if (i < 12) { hashResult = hashResult + (cnp[i] * hashTable[i]); }
    }

    // Check hash
    hashResult = hashResult % 11;
    if ((hashResult < 10 && hashResult != cnp[12]) || (hashResult == 10 && cnp[12] != 1)) { return false; }

    // Get year of birth
    birthYear = (cnp[1]*10) + cnp[2];
    switch( cnp[0] ) {
        case 1  : case 2 : { birthYear += 1900; } break;
        case 3  : case 4 : { birthYear += 1800; } break;
        case 5  : case 6 : { birthYear += 2000; } break;
        case 7  : case 8 : case 9 : { birthYear += 2000; if( birthYear > ( parseInt( new Date().getYear() , 10 ) - 14 ) ) { birthYear -= 100; } } break;
        default : { return false; }
    }

    // Check if birth year is valid
    if (birthYear < 1800 || birthYear > 2099) { return false; }

    // Check if year of birth and month is lower than today
    if (birthYear + '' + cnp[3] + '' + cnp[4] >= now.getFullYear() + '' + ('0' + (now.getMonth()+1)).slice(-2) ) { return false; }

    // Check if birth location is valid
    birthLocation = parseInt(cnp[7] + '' + cnp[8]);
    if ( birthLocation < 1 || (birthLocation > 52 && birthLocation != 80) ) { return false; }

    // CNP is valid
    return true);
});

/*PH.on(document,'DOMContentLoaded', function(e){
    var forms = document.body.querySelectorAll('form');
    for (var f = 0; f < forms.length; f++) {
        if (forms[f].getAttribute('data-no-validator') == null) {
            PH.Validator.addValidatorToForm(forms[f]);
        } else {
            forms[f].setAttribute('novalidate', true);
        }
    }
});*/