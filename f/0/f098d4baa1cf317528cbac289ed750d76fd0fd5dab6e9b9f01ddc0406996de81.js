importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.5.4/workbox-sw.js')
importScripts('sw-route-config-list.js')
oninstall = onactivate = workbox.setConfig({ debug: false })
workbox.loadModule('workbox-core')
workbox.loadModule('workbox-routing')
workbox.loadModule('workbox-strategies')
workbox.loadModule('workbox-expiration')
const { routing, strategies, expiration } = workbox
const { workboxGetRouteList, workboxPostRouteList } = schttp

class PostCacheFirst extends strategies.Strategy {
  async _handle(request, handler) {
    try {
      const [, postStr] = await Promise.all([
        request.clone().json(),
        request.clone().text(),
      ])
      const cacheKey = request.url + '|POST:' + postStr
      const cacheReq = new Request(cacheKey)

      const cacheResponse = await handler.cacheMatch(cacheReq)
      if (cacheResponse) return cacheResponse

      const response = await handler.fetch(request.clone())
      if (!response) throw new Error(request.url + 'no-response')

      void handler.waitUntil(handler.cachePut(cacheReq, response.clone()))
      return response
    } catch (error) {
      console.error(error)
      return await fetch(request)
    }
  }
}

class CacheableResponsePlugin {
  constructor(config = {}) {
    this._statuses = config.statuses
    this._headers = config.headers
    this._validator = config.validator
    this._jsonValidator = config.jsonValidator
  }

  async cacheWillUpdate({ request, response, event }) {
    if (!response.ok || response.headers.get('X-Sw-Skip')) return null

    const url = new URL(request.url)
    const sameOrigin = url.origin === location.origin

    if (this._statuses !== null) {
      const validated = this._statuses
        ? this._statuses.includes(response.status)
        : response.status === 200
      if (!validated) return null
    }

    if (this._headers) {
      const validated = Object.keys(this._headers).some(
      if (!validated) return null
    }

    if (this._jsonValidator) {
      try {
        const copy = response.clone()
        copy.headers.get('content-Type').includes('application/json')
        const json = await copy.json()

        const validated = await this._jsonValidator({ request: request.clone(), response: response.clone(), event, url, sameOrigin, json })
        if (!validated) return null
      } catch (error) {
        console.error(error)
        return null
      }
    }

    if (this._validator) {
      try {
        const validated = await this._validator({ request: request.clone(), response: response.clone(), event, url, sameOrigin })
        if (!validated) return null
      } catch (error) {
        console.error(error)
        return null
      }
    }

    return response
  }
}

class CacheRecognizePlugin {
  constructor(config) {
    if (!config) {
      this._marks = null
      return
    }

    const marks = { 'x-recognize-cache': '1' }
    if ((typeof config === 'object') && !Array.isArray(config)) {
      Object.keys(config).forEach(key => {
        const value = String(config[key])
        if (value) {
          marks[key] = value
        }
      })
    }
    this._marks = marks
  }

  async cacheWillUpdate({ response }) {
    if (!response.ok || response.status !== 200) {
      return null
    }
    const { _marks } = this
    if (!_marks) {
      return response
    }

    const extraHeaders = this._extraHeaders || null
    const recHeaders = new Headers(
      Object.assign(
        Array.from(response.headers.entries())
          .reduce((curr, [key, val]) => { curr[key] = val; return curr }, {}),
        {
          'x-recognize-cache': '1',
          ...(extraHeaders || {}),
        },
      )
    )
    const recResponse = new Response(response.body, { headers: recHeaders })
    return recResponse
  }
}

// dealing workboxGetRouteList
workboxGetRouteList.forEach(({ capture, strategy, strategyOptions, ExpirationPluginConfig, CacheableResponsePluginConfig, CacheRecognizePluginConfig }) => {
  const plugins = []
  ExpirationPluginConfig && plugins.push(new expiration.ExpirationPlugin({ ...ExpirationPluginConfig, purgeOnQuotaError: true }))
  plugins.push(new CacheableResponsePlugin(CacheableResponsePluginConfig))
  CacheRecognizePluginConfig && plugins.push(new CacheRecognizePlugin(CacheRecognizePluginConfig))
  routing.registerRoute(capture, new strategies[strategy]({ ...strategyOptions, plugins }))
})
// dealing workboxPostRouteList
workboxPostRouteList.forEach(({ capture, strategyOptions, ExpirationPluginConfig, CacheableResponsePluginConfig, CacheRecognizePluginConfig }) => {
  const plugins = []
  ExpirationPluginConfig && plugins.push(new expiration.ExpirationPlugin({ ...ExpirationPluginConfig, purgeOnQuotaError: true }))
  plugins.push(new CacheableResponsePlugin(CacheableResponsePluginConfig))
  CacheRecognizePluginConfig && plugins.push(new CacheRecognizePlugin(CacheRecognizePluginConfig))
  routing.registerRoute(capture, new PostCacheFirst({ ...strategyOptions, plugins }), 'POST')
})
