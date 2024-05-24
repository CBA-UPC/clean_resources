importScripts('https://s-eu-1.pushpushgo.com/615eadd4e1c9de5418f27208/worker.js');
importScripts('/workbox-sw.js');

workbox.googleAnalytics.initialize();

workbox.routing.registerRoute(
    /^https:\/\/(?!.*securepubads).*\.(js|css|woff2)$/,
    new workbox.strategies.CacheFirst({
        cacheName: 'assets',
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 50,
                maxAgeSeconds: 24 * 60 * 60
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());
coration:none;display:flex;border-top:1px solid #dcdcdc;align-items:center;justify-content:flex-end;padding-right:1rem}.carousel__link-bar span{font-size:.5rem;margin-left:.25rem;margin-bottom:2px}.carousel__odds-wrapper{display:flex;border-top:1px solid #dcdcdc;align-items:center}.carousel__odds-item{flex:1 0 auto;font-size:12px;text-align:center;height:20px}.carousel__odds-item:nth-child(2){border-right:1px solid #dcdcdc;border-left:1px solid #dcdcdc}.carousel__odds-label{color:#a7a7a7;line-height:20px;margin-right:5px}.carousel__odds-value{line-height:20px;color:#191919;font-weight:500}.carousel__arrow{background:transparent linear-gradient(90deg,#fff0,#fff 72%,#fff) 0 0 no-repeat padding-box;position:absolute;z-index:1;height:100%;width:140px;display:flex;justify-content:flex-end;top:0}.carousel__arrow--left{left:0;transform:rotate(180deg)}.carousel__arrow--right{right:0}.carousel__arrow-button{width:50px;height:100%;cursor:pointer;display:flex;justify-content:center;align-items:center}.carousel__arrow-icon{width:15px;height:15px;background:transparent;border-top:3px solid #000;border-right:3px solid #000;transition:all .2s ease;right:15px;transform:rotate(45deg);z-index:5}
