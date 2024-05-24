(window.webpackJsonp=window.webpackJsonp||[]).push([[208],{576:function(e,t,n){"use strict";n.r(t);var r=n(28),o=n.n(r),r=n(15),i=n.n(r),r=n(16),c=n.n(r),r=n(346),a=n.n(r),r=n(347),u=n.n(r),r=n(348),s=n.n(r),r=n(11),l=n.n(r);function d(n){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t=s()(n);return t=r?(e=s()(this).constructor,Reflect.construct(t,arguments,e)):t.apply(this,arguments),u()(this,t)}}n=function(e){a()(n,e);var t=d(n);function n(){return i()(this,n),t.apply(this,arguments)}return c()(n,[{key:"setCookie",value:function(e){var t=new Date,t=t.setTime(t.getTime()+31536e7);document.cookie=e+"=1;"+t+"; path=/"}},{key:"getCookie",value:function(e){for(var t=e+"=",n=document.cookie.split(";"),r=0;r<n.length;r++){for(var o=n[r];" "==o.charAt(0);)o=o.substring(1,o.length);if(0==o.indexOf(t))return o.substring(t.length,o.length)}return null}},{key:"updateLinks",value:function(e){var t=this.dom,r=(r=t.getAttribute("data-settings"))?JSON.parse(r):{},n="feedTeamRedirected",o=Object.keys(r),t=document.querySelectorAll('a[href*="futebol/times"]');e?(t.forEach(function(t){var n=t.getAttribute("href");o.forEach(function(e){-1<n.indexOf(e)&&-1==n.indexOf("?redir")&&-1==n.indexOf("?cancel-redir")&&t.setAttribute("href",n+"?redir="+encodeURIComponent(r[e]))})}),this.setCookie(n)):document.cookie=n+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/"}},{key:"onCreate",value:function(){var e,t="feedCancelRedir";-1<location.href.indexOf("feedRedirect")&&(e=!0,-1<location.href.toString().indexOf("?cancel-redir")?(e=!1,this.setCookie(t),window.history.replaceState({},document.title,location.href.split("?")[0])):this.getCookie(t)&&(e=!1),this.updateLinks(e)),console.log("[feed-redirect]")}}]),n}(n(349).a);t.default=n,window._onSuperFeedUpdateCards=function(){var i=function(){var t=o()(l.a.mark(function e(t){var n,r,o,i,c,a;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.id,r=t.twitterEl,o=t.element,i=t.parent,c=function(){o.classList.remove("loading"),o.innerHTML='\n                <p class="feed-twitter-error">Houve um problema para carregar este tweet.</p>\n            '},a=function(){return twttr.widgets.createTweet(n,r)},e.prev=3,e.next=6,a();case 6:a=e.sent,(a=window.location.search.includes("forceTweetError")?!1:a)?(o.classList.remove("loading"),i.classList.remove("loading")):c(),o.classList.add("completed"),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(3),c(),o.classList.add("completed");case 16:case"end":return e.stop()}},e,null,[[3,12]])}));return function(e){return t.apply(this,arguments)}}();document.querySelectorAll(".social-media:not(.completed)").forEach(function(e){var t,n,r=e.getAttribute("data-id"),o=e.getAttribute("data-type");"twitter"==o?((t=e.closest(".feed-gallery-item")).classList.add("loading"),n=(n=document.querySelector("#card-twitter").innerHTML).replace(/{postID}/gi,r),e.innerHTML=n,setTimeout(function(){i({id:r,twitterEl:document.getElementById("tweet-"+r),element:e,parent:t})},300)):"facebook"==o&&(n=e.getAttribute("data-url"),o=(o=(o=document.querySelector("#card-facebook").innerHTML).replace(/{postID}/gi,r)).replace(/{postURL}/gi,n),e.innerHTML=o,e.classList.add("completed"),setTimeout(function(){FB.XFBML.parse()},300))})}}}]); url: new RegExp('^https?:\/\/(conteudo\.)?imguol\.com(\.br)?\/c\/_layout\/v2\/ads\/bg-listras\.(jpg|png|webp)$')
        }]
    }
});

self.AreaStorage.push({
    config: {
      cacheName: '[VUELAND][ASSETS][SVG]',
      strategy: 'CacheFirst',
      plugins: {
        expiration: {
          maxEntries: 10,
          maxAgeSeconds: 518400,
          purgeOnQuotaError: true
        }
      }
    },
    cache: {
      precache: [],
      assets: [{url: new RegExp('^https?:\\/\\/c.jsuol.com.br\\/assets\\/(.*)&loadSvgs\\=')}]
    }
});

self.AreaStorage.push({
    config: {
      cacheName: '[VUELAND][SERVICES]',
      strategy: 'StaleWhileRevalidate',
      plugins: {
        expiration: {
          maxEntries: 10,
          maxAgeSeconds: 604800,
          purgeOnQuotaError: true
        }
      }
    },
    cache: {
      precache: [],
      assets: [{url: new RegExp('^https?:\\/\\/c.jsuol.com.br\\/assets\\/(.*)loadComponent\\=JupiterTeamShowcase')}]
    }
});

self.AreaStorage.push({
    config: {
      cacheName: '[VUELAND][ASSETS][CSS]',
      strategy: 'StaleWhileRevalidate',
      plugins: {
        expiration: {
          maxEntries: 100,
          maxAgeSeconds: 518400,
          purgeOnQuotaError: true
        }
      }
    },
    cache: {
      precache: [],
      assets: [
        {url: new RegExp('^https?:\\/\\/c.jsuol.com.br\\/assets\\/(.*)loadComponent\\=Media&contentType\\=css&scope\\=assets')}
      ]
    }
});


/**
 * Estratégia padrão para o cache.
 * https://developers.google.com/web/tools/workbox/reference-docs/v4/workbox.strategies
 *
 * Valores permitidos:
 * - CacheFirst
 * - CacheOnly
 * - NetworkFirst
 * - NetworkOnly
 * - StaleWhileRevalidate
 */
const DEFAULT_STRATEGY = 'StaleWhileRevalidate';

/**
 * Recebe um objeto de configuração de cache e retorna a classe Plugin do workbox,
 * configurada conforme a `cfg` recebida.
 *
 * @param {Object} cfg
 * @returns workbox.Plugin
 */
const getPluginClass = (cfg = {}) => {
    const plugins = [];
    for(const plugin of Object.keys(cfg)) {
        switch(plugin) {
        case 'expiration':
            plugins.push(new workbox.expiration.ExpirationPlugin(Object.assign({}, cfg[plugin])));
            break;
        }
    }
    return plugins;
};

for(const area of self.AreaStorage) {
    const {
        cache = undefined,
        config = undefined,
    } = area;

    if(config === undefined) {
        console.error(`sw: object "config" not defined`);
        continue;
    }

    if(cache === undefined) {
        console.error(`sw: object "cache" not defined`);
        continue;
    }

    // valida se a estratégia é válida
    if(workbox.strategies[config.strategy] === undefined) {
        console.error(`sw: strategy ${config.strategy} is not a valida value`);
        continue;
    }

    if(cache.precache instanceof Array === true && /(\[OFFLINE\])$/.test(config.cacheName) === true) {
            workbox.precaching.precacheAndRoute(cache.precache, {
            offlinePage: offlineLatestUrl
        });
    }

    const plugins = getPluginClass(config.plugins);

    // https://stackoverflow.com/questions/39109789/what-limitations-apply-to-opaque-responses
    plugins.push(new workbox.cacheableResponse.CacheableResponsePlugin({
        statuses: [200],
    }));

    for(const asset of cache.assets) {
        workbox.routing.registerRoute(
            asset.url,
            new workbox.strategies[config.strategy || DEFAULT_STRATEGY]({
                cacheName: config.cacheName,
                plugins
            })
        );
    }
}

/**
 * Define a RegExp para match da url de home que será cacheada
 *
 * @returns RegExp
 */
function getHomePathStrategy() {
    const {host, pathname, href} = location;
    if(host === 'www.uol.com.br') {
        return new RegExp(`^https?:\/\/www.uol.com.br\/${pathname.replace(/^\//,'')}\/?$`)
    }
    const match = href.match(/^https?:\/\/([^www].*).uol.com.br/);
    return new RegExp(`^https?:\/\/${match[1]}.uol.com.br\/?$`);
}

// remove cache antigo
Promise.all([
    caches.delete("[PGV3][SHELL]"),
    caches.delete("[PGV3][ASSETS][FONT]"),
    caches.delete("[PGV3][ASSETS][CSS]"),
    caches.delete("[PGV3][ASSETS][SVG]"),
    caches.delete("[PGV3][ASSETS][JS]")
]).catch(err => {});