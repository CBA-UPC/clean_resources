!(function (w, d, p, u, a, t) {
    "use strict";

    const T0 = 1 * new Date();
    const K_TTL = 'au_seg_ttl';
    const K_DATA = 'au_seg_data';
    const AU_SEG = {'segments': []};

    function getTaggerId() {
        try {
            const item = localStorage.getItem('au/tid');
            if (item !== null) {
                const taggerId = JSON.parse(item);
                return taggerId['v'];
            }
            return null;
        }
        catch (err) {
            return null;
        }
    }

    function getAudigentId() {
        const fkey = '_au_1d=';
        const decodedCookie = decodeURIComponent(document.cookie);
        const ca = decodedCookie.split(';');
        for (let i = 0; i < ca.length; ++i) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(fkey) == 0) {
                return c.substring(fkey.length, c.length);
            }
        }
        return null;
    }

    function getCache() {
        if (typeof (Storage) !== 'undefined') {
            const ttl = parseInt(w.localStorage.getItem(K_TTL) || '0');
            if (ttl > T0) {
                return JSON.parse(w.localStorage.getItem(K_DATA));
            }
        }
        return null;
    }

    function setCache(response) {
        if (typeof (Storage) !== 'undefined' && response.segments.length > 0) {
            const t1 = T0 + (5 * 60 * 1000);

            w.localStorage.setItem(K_TTL, t1);
            w.localStorage.setItem(K_DATA, JSON.stringify(response));
        }
    }

    function responseHandler(response, withCache) {
        // default behaviour saves segments in the window context
        w.au_seg = response;

        const t2 = 1 * new Date();
        console.log('[Audigent/' + p + '] Segment Service > Response Time ' + (t2 - T0).toString() + ' millis');

        // trigger custom event to notify other libraries that the data is ready
        d.dispatchEvent(new CustomEvent('auSegReady', { 'detail': response }));

        if (withCache) {
            setCache(response);
        }
    }

    const cres = getCache();
    if (cres === null) {
        console.log('[Audigent/' + p + '] Segment Service > Cache Miss');

        responseHandler(AU_SEG, false);

        u = 'https://' + u + '/api/v1/segments?url=' + encodeURIComponent(d.location.href) + '&partner_id=' + p;
        a = getAudigentId();
        if (typeof a === 'string') {
            u = u + '&au_id=' + a;
        }
        t = getTaggerId();
        if (typeof t === 'string') {
            u = u + '&tagger_id=' + t;
        }

        const xhr = new XMLHttpRequest();
        xhr.timeout = 3000;  // 3 secs
        xhr.open('GET', u, true);
        xhr.onreadystatechange = () => {
            if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
                const nres = JSON.parse(xhr.responseText);
                responseHandler(nres, true);
            }
        };
        xhr.ontimeout = () => {
            console.warn('[Audigent/' + p + '] Segment Service > Timeout');
        }
        xhr.onerror = () => {
            console.warn('[Audigent/' + p + '] Segment Service > Invalid Response');
        };
        xhr.send(null);
    } else {
        console.log('[Audigent/' + p + '] Segment Service > Cache Hit');

        responseHandler(cres, true);
    }
})(window, document, '158', 'seg.ad.gt');{overflow-x:unset}.martech-modal-component-overlay.martech-paywall{z-index:10000}.martech-paywall__bold{font-family:"Austin News", "Austin News Deck Semibold", Georgia, Times, serif;font-variation-settings:"wght" 525, "opsz" 60}@media only screen and (min-width: 360px){.martech-paywall__display-inverse-xss{display:none}}@media only screen and (min-width: 480px){.martech-paywall__display-inverse-xs{display:none}}@media only screen and (min-width: 768px){.martech-paywall__display-inverse-sm{display:none}}.martech-paywall__display-sm{display:none}@media only screen and (min-width: 768px){.martech-paywall__display-sm{display:block}}.martech-paywall__display-md{display:none}@media only screen and (min-width: 1024px){.martech-paywall__display-md{display:block}}.martech-paywall__inline-block{display:inline-block}.martech-paywall__underline{position:relative}.martech-paywall__underline::after{border-bottom:1px inset #000;bottom:2px;content:"";display:block;left:1px;position:absolute;width:calc(100% - 1px)}.martech-paywall__hidden-item{display:none !important}.martech-paywall *::-moz-selection{background-color:#222;color:#fff}.martech-paywall *::selection{background-color:#222;color:#fff}.martech-paywall{background-color:#fff4b0;border-color:#222;border-style:solid;border-width:1px 0 1px 0;bottom:0;margin-top:-16px;position:sticky;width:100%;z-index:9998}@media only screen and (min-height: 500px){.martech-paywall{top:-1px}}.martech-paywall--regwall,.martech-paywall--reg-paywall{top:auto}.martech-paywall--minimise{bottom:-344px;bottom:var(--martech-paywall-bottom-pos)}.martech-paywall--clicked{transition:bottom .2s ease-in-out}.martech-paywall--loggedin{padding-bottom:16px}.martech-paywall__header{padding-bottom:16px;padding-top:16px}.martech-paywall__footer{padding-top:16px}.martech-paywall__text-center{margin-bottom:0;margin-top:0;text-align:center}.martech-paywall__bold-underline{text-decoration:underline}.martech-paywall__paywall-container{margin:0 auto;max-width:1536px;padding-bottom:16px;padding-left:8px;padding-right:8px;width:100%}.martech-paywall__main{flex-wrap:nowrap;width:100%}.martech-paywall__content{background-color:#fff;border:1px solid #222;border-radius:8px;padding:16px 8px;position:relative;text-align:center}@media only screen and (min-width: 768px){.martech-paywall__content{border-radius:20px;padding:24px}}.martech-paywall__border-top{fill:#e9f5fd;left:50%;position:absolute;stroke:#222;top:-1px;transform:translate(-15px)}.martech-paywall__link,.martech-paywall__button{font-family:"Doric News", Arial, Helvetica, sans-serif;font-variation-settings:"wght" 400, "opsz" 16;text-decoration:none}.martech-paywall__login .martech-paywall__button{padding:16px 32px}.martech-paywall__footer-text{font-family:"Doric News", Arial, Helvetica, sans-serif;font-variation-settings:"wght" 400, "opsz" 16;color:#494949;font-size:15px;line-height:20px;margin:0;text-align:center}.martech-paywall__info{font-family:"Doric News", Arial, Helvetica, sans-serif;font-variation-settings:"wght" 400, "opsz" 16;font-size:17px;line-height:22px;margin:0 auto 10px;max-width:560px}.martech-paywall__info--small{font-family:"Doric News", Arial, Helvetica, sans-serif;font-variation-settings:"wght" 400, "opsz" 16;color:#767676;font-size:13px;line-height:16px;margin-bottom:0;margin-top:8px}.martech-paywall__info--strong{font-family:"Doric News", Arial, Helvetica, sans-serif;font-variation-settings:"wght" 700, "opsz" 16}@media only screen and (min-width: 480px){.martech-paywall__info--small{max-width:100%}}@media only screen and (min-width: 768px){.martech-paywall__info{font-size:19px;line-height:25px;max-width:700px}.martech-paywall__info--small{font-size:13px;line-height:16px;margin-top:16px;max-width:600px}}.martech-paywall__terms{margin-top:0}.martech-paywall__info a,.martech-paywall__info a:visited{color:#222;padding:3px 2px;text-decoration:underline;-webkit-text-decoration-color:#222;text-decoration-color:#222}.martech-paywall__info a:active,.martech-paywall__info a:focus,.martech-paywall__info a:hover{background-color:#222;border-radius:3px;color:#fff}.martech-paywall__link{color:#222;padding:3px 2px;text-decoration:underline;-webkit-text-decoration-color:#222;text-decoration-color:#222}.martech-paywall__link:active,.martech-paywall__link:focus,.martech-paywall__link:hover{background-color:#222;border-radius:3px;color:#fff}.martech-paywall__link.martech-paywall__link--terms{color:#767676;text-decoration:underline;-webkit-text-decoration-color:#767676;text-decoration-color:#767676}.martech-paywall__link.martech-paywall__link--terms:hover{color:#767676;-webkit-text-decoration-color:#767676;text-decoration-color:#767676}.martech-paywall__main-heading{font-family:"Austin News", "Austin News Deck Roman", Georgia, Times, serif;font-variation-settings:"wght" 300, "opsz" 9;font-size:16px;line-height:24px}@media only screen and (min-width: 768px){.martech-paywall__main-heading{font-size:18px;line-height:28px}}.martech-paywall--minimise .martech-paywall__main-heading{cursor:pointer}.martech-paywall__headline{font-family:"Doric News", Arial, Helvetica, sans-serif;font-variation-settings:"wght" 575, "opsz" 60;font-size:30px;line-height:36px;margin-bottom:8px;margin-top:0}@media only screen and (min-width: 768px){.martech-paywall__headline{font-size:34px}}.martech-paywall__headline--no-wrap{white-space:nowrap}.martech-paywall__blur{position:relative}.martech-paywall__blur::after{background:linear-gradient(to bottom, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, 0.7) 31%, #ffffff 100%);bottom:0;content:"";display:block;height:32px;position:absolute;width:100%}.martech-paywall__blur--short::after{height:40px}@media only screen and (min-width: 768px){.martech-paywall__blur--short::after{bottom:-12px;height:60px}}@media only screen and (min-width: 1280px){.martech-paywall__blur--short::after{bottom:-8px}}.martech-paywall__display--mobile-sm{display:none}@media only screen and (min-width: 360px){.martech-paywall__display--mobile-sm{display:inline}}@media only screen and (min-width: 480px){.martech-paywall__display--mobile-sm{display:none}}.martech-paywall--old{margin-bottom:32px;margin-left:calc(50% - 50vw);margin-right:calc(50% - 50vw);margin-top:0;width:100vw}@supports(display: grid){.martech-paywall__main{display:grid;grid-gap:1.6rem;grid-template-columns:repeat(12, 1fr)}.martech-paywall__content{grid-column:1/-1}@media only screen and (min-width: 768px){.martech-paywall__content{grid-column:2/12}}@media only screen and (min-width: 1280px){.martech-paywall__content{grid-column:3/11}}}.martech-paywall__tablet-display{display:none}.articleRenderer2HTML .martech-paywall__tablet-display,.galleryRendererHTML .martech-paywall__tablet-display{display:none}@media only screen and (min-width: 768px){.martech-paywall__tablet-display{display:block}}.martech-paywall__tablet-display-inline{display:none}@media only screen and (min-width: 768px){.martech-paywall__tablet-display-inline{display:inline-block}}.martech-paywall__desktop-display{display:none}.articleRenderer2HTML .martech-paywall__desktop-display,.galleryRendererHTML .martech-paywall__desktop-display{display:none}@media only screen and (min-width: 1024px){.martech-paywall__desktop-display{display:block}}.martech-paywall__inline-block{display:inline-block}.martech-paywall__flex{margin-top:32px}.martech-paywall__flex h2{font-size:2.2rem}.martech-paywall__flex .article-list{display:flex;flex-wrap:wrap}.martech-paywall__flex .article-list .card{padding-bottom:16px;padding-right:16px;padding-top:16px;width:100%}@media only screen and (min-width: 768px){.martech-paywall__flex .article-list .card{width:100%}}@media only screen and (min-width: 1024px){.martech-paywall__flex .article-list .card{width:50%}.martech-paywall__flex .article-list .card::after{background-color:#ddd;content:"";display:inline-block;height:100%;margin-left:8px;width:1px}.martech-paywall__flex .article-list .card:nth-child(2n)::after{display:none}}@media only screen and (min-width: 1280px){.martech-paywall__flex .article-list .card{width:33%}.martech-paywall__flex .article-list .card:nth-child(2n)::after{display:inline-block}.martech-paywall__flex .article-list .card:nth-child(3n)::after{display:none}}.martech-paywall__rhr-container{display:flex;flex-direction:column;margin-bottom:16px}.martech-paywall__rhr-container .commercial-unit{align-self:flex-start;margin-top:32px;min-width:348px;width:348px}.martech-paywall__rhr-container .commercial-unit .advert-label.advert-label--sidebar{margin-left:24px}@media only screen and (min-width: 730px){.martech-paywall__rhr-container .martech-paywall__flex{margin-right:16px}}.martech-paywall__rhr-container .martech-paywall__flex--old{margin-right:16px;margin-top:0;width:100%}@media only screen and (min-width: 730px){.martech-paywall__rhr-container .martech-paywall__flex--old .recommended-articles__items{display:flex;flex-wrap:wrap}}.martech-paywall__rhr-container .martech-paywall__flex--old .recommended-articles__item-link{max-height:unset}@media only screen and (min-width: 730px){.martech-paywall__rhr-container .martech-paywall__flex--old .recommended-articles__item{margin-right:16px;width:170px}}@media only screen and (min-width: 1008px){.martech-paywall__rhr-container .martech-paywall__flex--old .recommended-articles__item{width:180px}}@media only screen and (min-width: 1328px){.martech-paywall__rhr-container .martech-paywall__flex--old .recommended-articles__item{width:200px}}.martech-paywall__rhr-container .martech-paywall__flex--old .html-embed.component{margin-left:0}.martech-paywall__rhr-container .card__thumbnail{height:60px;max-height:60px;max-width:60px;width:60px}@media only screen and (min-width: 768px){.martech-paywall__rhr-container .card__thumbnail{height:70px;max-height:70px;max-width:70px;width:70px}}@media only screen and (min-width: 768px){.martech-paywall__rhr-container{flex-direction:row-reverse}}@media only screen and (min-width: 1024px){.martech-paywall__rhr-container.tpl-article__sidebar{position:relative}}.martech-paywall__rhr-ads-container{margin-top:32px}.martech-paywall__rhr-ads-container .commercial-unit{margin-top:0}.page-article .martech-paywall__rhr-container--old .article__sidebar-inner.is-sticky{max-width:unset;padding:0;width:100%}@media only screen and (min-width: 730px){.page-article .martech-paywall__rhr-container--old .article__sidebar-inner.is-sticky .component-content{display:flex;flex-direction:row-reverse}}.page-article .martech-paywall__rhr-container--old .article__sidebar-inner.is-sticky .component-content #advert_tmg_mpu.js-advert{min-width:300px}.article__sidebar.martech-paywall__rhr-container--old{margin-bottom:0;margin-left:0;margin-right:0;width:100%}@media only screen and (min-width: 1008px){.articleRenderer2 .martech-paywall__article-center--narrow{padding:0;width:620px}}@media only screen and (min-width: 1328px){.articleRenderer2 .martech-paywall__article-center--narrow{width:640px}}@media only screen and (min-width: 1008px){.articleRenderer2 .martech-paywall__article-center{margin:0 auto}}@supports(display: grid){@media only screen and (min-width: 768px){.martech-paywall__full-width{grid-column:2/12}}@media only screen and (min-width: 1024px){.martech-paywall__full-width{grid-column:2/10}}@media only screen and (min-width: 1280px){.martech-paywall__full-width{grid-column:3/10}}}.martech-paywall--loggedin.martech-paywall--student .martech-paywall__paywall-container{padding-bottom:8px}.grecaptcha-badge{visibility:hidden}.martech-paywall__cta-placeholder{align-items:center;display:flex;flex-direction:column;justify-content:center}@media only screen and (min-width: 768px){.martech-paywall__cta-placeholder{flex-direction:row}}.martech-paywall__cta-container{align-items:center;display:flex;flex-direction:column;justify-content:center;width:100%}.martech-paywall__cta-bau{font-family:"Doric News", Arial, Helvetica, sans-serif;font-variation-settings:"wght" 700, "opsz" 16;align-items:center;background-color:#222;border:1px solid #000;border-radius:100px;color:#fff;display:block;font-size:15px;letter-spacing:1px;line-height:17px;padding:15px 17px;text-align:center;text-decoration:none;text-transform:uppercase;width:100%}.martech-paywall__cta-bau:active,.martech-paywall__cta-bau:focus,.martech-paywall__cta-bau:hover{background-color:#fff;color:#222}@media only screen and (min-width: 360px){.martech-paywall__cta-bau{font-size:17px;padding:15px 24px}}@media only screen and (min-width: 768px){.martech-paywall__cta-bau{width:350px}}.martech-paywall__cta-applepay{--apple-pay-button-width: 100%;--apple-pay-button-height: 50px;--apple-pay-button-border-radius: 100px;--apple-pay-button-padding: 5px 0;--apple-pay-button-box-sizing: border-box}.martech-paywall__cta-applepay-container,.martech-paywall__cta-swg-container{display:flex;margin-bottom:6px;width:100%}.martech-paywall__cta-applepay-container+.martech-paywall__cta-bau-container,.martech-paywall__cta-swg-container+.martech-paywall__cta-bau-container{display:flex;margin-top:6px;width:100%}.martech-paywall__cta-applepay-container+.martech-paywall__cta-bau-container .martech-paywall__cta-bau,.martech-paywall__cta-swg-container+.martech-paywall__cta-bau-container .martech-paywall__cta-bau{font-family:"Doric News", Arial, Helvetica, sans-serif;font-variation-settings:"wght" 500, "opsz" 60;background-color:#222;border:1px solid #222;border-radius:100px;color:#fff;font-size:19px;letter-spacing:unset;line-height:23px;padding:12px 26px;text-decoration:none;text-transform:unset;white-space:nowrap;width:100%}.martech-paywall__cta-applepay-container+.martech-paywall__cta-bau-container .martech-paywall__cta-bau:active,.martech-paywall__cta-applepay-container+.martech-paywall__cta-bau-container .martech-paywall__cta-bau:focus,.martech-paywall__cta-applepay-container+.martech-paywall__cta-bau-container .martech-paywall__cta-bau:hover,.martech-paywall__cta-swg-container+.martech-paywall__cta-bau-container .martech-paywall__cta-bau:active,.martech-paywall__cta-swg-container+.martech-paywall__cta-bau-container .martech-paywall__cta-bau:focus,.martech-paywall__cta-swg-container+.martech-paywall__cta-bau-container .martech-paywall__cta-bau:hover{background-color:#fff;color:#222}@media only screen and (min-width: 768px){.martech-paywall__cta-applepay-container+.martech-paywall__cta-bau-container,.martech-paywall__cta-swg-container+.martech-paywall__cta-bau-container{margin-left:8px;margin-top:0;width:255px}}@media only screen and (min-width: 768px){.martech-paywall__cta-applepay-container,.martech-paywall__cta-swg-container{margin-bottom:0;margin-right:8px;width:255px}}main.tpl-gallery{padding-bottom:0}