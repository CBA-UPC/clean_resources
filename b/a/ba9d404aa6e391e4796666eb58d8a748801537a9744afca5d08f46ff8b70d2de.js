importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.1.5/workbox-sw.js')

const regexStore = new RegExp(/@[\w-]+($|\?.*)/)
const regexSearch = new RegExp(/(\/[\w\d-]+)?\/s\?.*/)
const regexProduct = new RegExp(/\/p\/[\w-\d]+-[0-9]+($|\?.*)/)

function isLocalHost(url) {
  return /localhost/i.test(url)
}



function cacheKeyWillBeUsedInSearch({ request }) {
  const url = new URL(request.url)
  url.pathname = '/s'
  url.search = `?device_type=${getDeviceType(request.headers.get('User-Agent'))}`
  return url.href
}

function cacheKeyWillBeUsedInProduct({ request }) {
  const url = new URL(request.url)
  url.pathname = '/p'
  url.search = `?device_type=${getDeviceType(request.headers.get('User-Agent'))}`
  return url.href
}

function cacheKeyWillBeUsedInStore({ request }) {
  const url = new URL(request.url)
  url.pathname = '/@'
  url.search = `?device_type=${getDeviceType(request.headers.get('User-Agent'))}`
  return url.href
}

workbox.routing.registerRoute(
  ({url, request}) => !isLocalHost(url) && request.mode === 'navigate' && regexStore.test(url) && !isBot(request.headers.get('User-Agent')),
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'store-page-html',
    plugins: [
      { cacheKeyWillBeUsed: cacheKeyWillBeUsedInStore },
      new workbox.cacheableResponse.CacheableResponsePlugin({ statuses: [200] })
    ]
  })
)

workbox.routing.registerRoute(
  ({url, request}) => !isLocalHost(url) &&request.mode === 'navigate' && regexSearch.test(url) && !isBot(request.headers.get('User-Agent')),
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'search-page-html',
    plugins: [
      { cacheKeyWillBeUsed: cacheKeyWillBeUsedInSearch },
      new workbox.cacheableResponse.CacheableResponsePlugin({ statuses: [200] })
    ]
  })
)

workbox.routing.registerRoute(
  ({url, request}) => {
    return (
      !isLocalHost(url) &&
      request.mode === 'navigate' &&
      regexProduct.test(url) &&
      !isBot(request.headers.get('User-Agent'))
    )
  },
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'product-page-html',
    plugins: [
      { cacheKeyWillBeUsed: cacheKeyWillBeUsedInProduct },
      new workbox.cacheableResponse.CacheableResponsePlugin({ statuses: [200] })
    ]
  })
)
