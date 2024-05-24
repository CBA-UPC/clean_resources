importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.1.2/workbox-sw.js');

    workbox.setConfig({debug:false});

workbox.loadModule('workbox-cacheable-response');


self.addEventListener('install', ;

const cachePrefix = '[PGV3:v2]';
const offlineLatestUrl = '/esporte/?loadComponent=pwa-summary-wrapper&configPath=pwa/offline/esporte';

self.AreaStorage = self.AreaStorage || [];

self.AreaStorage.push({
    config: {
        cacheName: `${cachePrefix}[ASSETS][FONT]`,
        strategy: "CacheFirst",
        cacheExpiration: {
            maxEntries: 30,
            maxAgeSeconds: 2592000
        }
    },
    cache: {
        precache: [],
        assets: [{
            url: /https:\/\/stc\.uol\.com\/c\/webfont\/projeto-grafico\/uollogo\/.*$/
        }, {
            url: /https:\/\/stc\.uol\.com\/c\/webfont\/projeto-grafico\/uol-font\/.*$/
        }, {
            url: /https:\/\/stc\.uol\.com\/c\/webfont\/projeto-grafico\/uol-icones-e-setas\/.*$/
        }, {
            url: /https:\/\/stc.uol.com\/c\/webfont\/projeto-grafico\/v2\/.*$/
        }]
    }
});

self.AreaStorage.push({
    config: {
        cacheName: `${cachePrefix}[ASSETS][CSS]`,
        strategy: "StaleWhileRevalidate",
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
        assets: [{url: new RegExp('^https?:\/\/c.jsuol.com.br\/assets\/(.*)&tpl=(.*).css')}]
    }
});

self.AreaStorage.push({
    config: {
        cacheName: `${cachePrefix}[ASSETS][JS]`,
        strategy: "StaleWhileRevalidate",
        plugins: {
            expiration: {
                maxEntries: 80,
                maxAgeSeconds: 518400,
                purgeOnQuotaError: true
            }
        }
    },
    cache: {
        precache: [],
        assets: [
            {url: new RegExp('^https?:\/\/c.jsuol.com.br\/assets\/(.*)&tpl=(.*).js')},
            {url: new RegExp('^https?:\/\/c.jsuol.com.br\/assets\/(.*)&contentType=js')}
        ]
    }
});


self.AreaStorage.push({
    config: {
        cacheName: `${cachePrefix}[ASSETS][SVG]`,
        strategy: "CacheFirst",
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
        assets: [{url: new RegExp('loadComponent\=svg-icons&loadSvg\=true')}]
    }
});



self.AreaStorage.push({
    config: {
        cacheName: `${cachePrefix}[ASSETS][SERVICES]`,
        strategy: "StaleWhileRevalidate",
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
        assets: [{url: new RegExp('loadComponent\=header-menu')}]
    }
});

self.AreaStorage.push({
    config: {
        cacheName: `${cachePrefix}[ASSETS][IMAGES]`,
        strategy: "CacheFirst",
        cacheExpiration: {
            maxEntries: 30,
            maxAgeSeconds: 2592000
        }
    },
    cache: {
        precache: [],
        assets: [{
            url: new RegExp('^https?:\/\/(conteudo\.)?imguol\.com(\.br)?\/c\/geral\/3d\/2021\/05\/25\/placeholder-image-1621949831997')
        }, {
            url: new RegExp('^https?:\/\/(conteudo\.)?imguol\.com(\.br)?\/c\/_layout\/v2\/ads\/bg-listras\.(jpg|png|webp)$')
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
]r => {});