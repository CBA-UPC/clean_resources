try {
  self["workbox:core:6.6.0"] && _();
} catch {
}
const ee = (s, ...e) => {
  let t = s;
  return e.length > 0 && (t += ` :: ${JSON.stringify(e)}`), t;
}, te = ee;
class h extends Error {
  /**
   *
   * @param {string} errorCode The error code that
   * identifies this particular error.
   * @param {Object=} details Any relevant arguments
   * that will help developers identify issues should
   * be added as a key on the context object.
   */
  constructor(e, t) {
    const a = te(e, t);
    super(a), this.name = e, this.details = t;
  }
}
try {
  self["workbox:routing:6.6.0"] && _();
} catch {
}
const $ = "GET", E = (s) => s && typeof s == "object" ? s : { handle: s };
class R {
  /**
   * Constructor for Route class.
   *
   * @param {workbox-routing~matchCallback} match
   * A callback function that determines whether the route matches a given
   * `fetch` event by returning a non-falsy value.
   * @param {workbox-routing~handlerCallback} handler A callback
   * function that returns a Promise resolving to a Response.
   * @param {string} [method='GET'] The HTTP method to match the Route
   * against.
   */
  constructor(e, t, a = $) {
    this.handler = E(t), this.match = e, this.method = a;
  }
  /**
   *
   * @param {workbox-routing-handlerCallback} handler A callback
   * function that returns a Promise resolving to a Response
   */
  setCatchHandler(e) {
    this.catchHandler = E(e);
  }
}
class se extends R {
  /**
   * If the regular expression contains
   * [capture groups]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp#grouping-back-references},
   * the captured values will be passed to the
   * {@link workbox-routing~handlerCallback} `params`
   * argument.
   *
   * @param {RegExp} regExp The regular expression to match against URLs.
   * @param {workbox-routing~handlerCallback} handler A callback
   * function that returns a Promise resulting in a Response.
   * @param {string} [method='GET'] The HTTP method to match the Route
   * against.
   */
  constructor(e, t, a) {
    const n = ({ url: i }) => {
      const r = e.exec(i.href);
      if (r && !(i.origin !== location.origin && r.index !== 0))
        return r.slice(1);
    };
    super(n, t, a);
  }
}
const ae = (s) => new URL(String(s), location.href).href.replace(new RegExp(`^${location.origin}`), "");
class ne {
  /**
   * Initializes a new Router.
   */
  constructor() {
    this._routes = /* @__PURE__ */ new Map(), this._defaultHandlerMap = /* @__PURE__ */ new Map();
  }
  /**
   * @return {Map<string, Array<workbox-routing.Route>>} routes A `Map` of HTTP
   * method name ('GET', etc.) to an array of all the corresponding `Route`
   * instances that are registered.
   */
  get routes() {
    return this._routes;
  }
  /**
   * Adds a fetch event listener to respond to events when a route matches
   * the event's request.
   */
  addFetchListener() {
    self.addEventListener("fetch", (e) => {
      const { request: t } = e, a = this.handleRequest({ request: t, event: e });
      a && e.respondWith(a);
    });
  }
  /**
   * Adds a message event listener for URLs to cache from the window.
   * This is useful to cache resources loaded on the page prior to when the
   * service worker started controlling it.
   *
   * The format of the message data sent from the window should be as follows.
   * Where the `urlsToCache` array may consist of URL strings or an array of
   * URL string + `requestInit` object (the same as you'd pass to `fetch()`).
   *
   * ```
   * {
   *   type: 'CACHE_URLS',
   *   payload: {
   *     urlsToCache: [
   *       './script1.js',
   *       './script2.js',
   *       ['./script3.js', {mode: 'no-cors'}],
   *     ],
   *   },
   * }
   * ```
   */
  addCacheListener() {
    self.addEventListener("message", (e) => {
      if (e.data && e.data.type === "CACHE_URLS") {
        const { payload: t } = e.data, a = Promise.all(t.urlsToCache.map((n) => {
          typeof n == "string" && (n = [n]);
          const i = new Request(...n);
          return this.handleRequest({ request: i, event: e });
        }));
        e.waitUntil(a), e.ports && e.ports[0] && a.then(() => e.ports[0].postMessage(!0));
      }
    });
  }
  /**
   * Apply the routing rules to a FetchEvent object to get a Response from an
   * appropriate Route's handler.
   *
   * @param {Object} options
   * @param {Request} options.request The request to handle.
   * @param {ExtendableEvent} options.event The event that triggered the
   *     request.
   * @return {Promise<Response>|undefined} A promise is returned if a
   *     registered route can handle the request. If there is no matching
   *     route and there's no `defaultHandler`, `undefined` is returned.
   */
  handleRequest({ request: e, event: t }) {
    const a = new URL(e.url, location.href);
    if (!a.protocol.startsWith("http"))
      return;
    const n = a.origin === location.origin, { params: i, route: r } = this.findMatchingRoute({
      event: t,
      request: e,
      sameOrigin: n,
      url: a
    });
    let c = r && r.handler;
    const o = e.method;
    if (!c && this._defaultHandlerMap.has(o) && (c = this._defaultHandlerMap.get(o)), !c)
      return;
    let l;
    try {
      l = c.handle({ url: a, request: e, event: t, params: i });
    } catch (u) {
      l = Promise.reject(u);
    }
    const m = r && r.catchHandler;
    return l instanceof Promise && (this._catchHandler || m) && (l = l.catch(async (u) => {
      if (m)
        try {
          return await m.handle({ url: a, request: e, event: t, params: i });
        } catch (W) {
          W instanceof Error && (u = W);
        }
      if (this._catchHandler)
        return this._catchHandler.handle({ url: a, request: e, event: t });
      throw u;
    })), l;
  }
  /**
   * Checks a request and URL (and optionally an event) against the list of
   * registered routes, and if there's a match, returns the corresponding
   * route along with any params generated by the match.
   *
   * @param {Object} options
   * @param {URL} options.url
   * @param {boolean} options.sameOrigin The result of comparing `url.origin`
   *     against the current origin.
   * @param {Request} options.request The request to match.
   * @param {Event} options.event The corresponding event.
   * @return {Object} An object with `route` and `params` properties.
   *     They are populated if a matching route was found or `undefined`
   *     otherwise.
   */
  findMatchingRoute({ url: e, sameOrigin: t, request: a, event: n }) {
    const i = this._routes.get(a.method) || [];
    for (const r of i) {
      let c;
      const o = r.match({ url: e, sameOrigin: t, request: a, event: n });
      if (o)
        return c = o, (Array.isArray(c) && c.length === 0 || o.constructor === Object && // eslint-disable-line
        Object.keys(o).length === 0 || typeof o == "boolean") && (c = void 0), { route: r, params: c };
    }
    return {};
  }
  /**
   * Define a default `handler` that's called when no routes explicitly
   * match the incoming request.
   *
   * Each HTTP method ('GET', 'POST', etc.) gets its own default handler.
   *
   * Without a default handler, unmatched requests will go against the
   * network as if there were no service worker present.
   *
   * @param {workbox-routing~handlerCallback} handler A callback
   * function that returns a Promise resulting in a Response.
   * @param {string} [method='GET'] The HTTP method to associate with this
   * default handler. Each method has its own default.
   */
  setDefaultHandler(e, t = $) {
    this._defaultHandlerMap.set(t, E(e));
  }
  /**
   * If a Route throws an error while handling a request, this `handler`
   * will be called and given a chance to provide a response.
   *
   * @param {workbox-routing~handlerCallback} handler A callback
   * function that returns a Promise resulting in a Response.
   */
  setCatchHandler(e) {
    this._catchHandler = E(e);
  }
  /**
   * Registers a route with the router.
   *
   * @param {workbox-routing.Route} route The route to register.
   */
  registerRoute(e) {
    this._routes.has(e.method) || this._routes.set(e.method, []), this._routes.get(e.method).push(e);
  }
  /**
   * Unregisters a route with the router.
   *
   * @param {workbox-routing.Route} route The route to unregister.
   */
  unregisterRoute(e) {
    if (!this._routes.has(e.method))
      throw new h("unregister-route-but-not-found-with-method", {
        method: e.method
      });
    const t = this._routes.get(e.method).indexOf(e);
    if (t > -1)
      this._routes.get(e.method).splice(t, 1);
    else
      throw new h("unregister-route-route-not-registered");
  }
}
let w;
const Q = () => (w || (w = new ne(), w.addFetchListener(), w.addCacheListener()), w);
function g(s, e, t) {
  let a;
  if (typeof s == "string") {
    const i = new URL(s, location.href), r = ({ url: c }) => c.href === i.href;
    a = new R(r, e, t);
  } else if (s instanceof RegExp)
    a = new se(s, e, t);
  else if (typeof s == "function")
    a = new R(s, e, t);
  else if (s instanceof R)
    a = s;
  else
    throw new h("unsupported-route-type", {
      moduleName: "workbox-routing",
      funcName: "registerRoute",
      paramName: "capture"
    });
  return Q().registerRoute(a), a;
}
try {
  self["workbox:strategies:6.6.0"] && _();
} catch {
}
const re = {
  /**
   * Returns a valid response (to allow caching) if the status is 200 (OK) or
   * 0 (opaque).
   *
   * @param {Object} options
   * @param {Response} options.response
   * @return {Response|null}
   *
   * @private
   */
  cacheWillUpdate: async ({ response: s }) => s.status === 200 || s.status === 0 ? s : null
}, d = {
  googleAnalytics: "googleAnalytics",
  precache: "precache-v2",
  prefix: "workbox",
  runtime: "runtime",
  suffix: typeof registration < "u" ? registration.scope : ""
}, U = (s) => [d.prefix, s, d.suffix].filter((e) => e && e.length > 0).join("-"), ie = (s) => {
  for (const e of Object.keys(d))
    s(e);
}, L = {
  updateDetails: (s) => {
    ie((e) => {
      typeof s[e] == "string" && (d[e] = s[e]);
    });
  },
  getGoogleAnalyticsName: (s) => s || U(d.googleAnalytics),
  getPrecacheName: (s) => s || U(d.precache),
  getPrefix: () => d.prefix,
  getRuntimeName: (s) => s || U(d.runtime),
  getSuffix: () => d.suffix
};
function F(s, e) {
  const t = new URL(s);
  for (const a of e)
    t.searchParams.delete(a);
  return t.href;
}
async function ce(s, e, t, a) {
  const n = F(e.url, t);
  if (e.url === n)
    return s.match(e, a);
  const i = Object.assign(Object.assign({}, a), { ignoreSearch: !0 }), r = await s.keys(e, i);
  for (const c of r) {
    const o = F(c.url, t);
    if (n === o)
      return s.match(c, a);
  }
}
class oe {
  /**
   * Creates a promise and exposes its resolve and reject functions as methods.
   */
  constructor() {
    this.promise = new Promise((e, t) => {
      this.resolve = e, this.reject = t;
    });
  }
}
const G = /* @__PURE__ */ new Set();
async function le() {
  for (const s of G)
    await s();
}
function he(s) {
  return new Promise((e) => setTimeout(e, s));
}
function k(s) {
  return typeof s == "string" ? new Request(s) : s;
}
class ue {
  /**
   * Creates a new instance associated with the passed strategy and event
   * that's handling the request.
   *
   * The constructor also initializes the state that will be passed to each of
   * the plugins handling this request.
   *
   * @param {workbox-strategies.Strategy} strategy
   * @param {Object} options
   * @param {Request|string} options.request A request to run this strategy for.
   * @param {ExtendableEvent} options.event The event associated with the
   *     request.
   * @param {URL} [options.url]
   * @param {*} [options.params] The return value from the
   *     {@link workbox-routing~matchCallback} (if applicable).
   */
  constructor(e, t) {
    this._cacheKeys = {}, Object.assign(this, t), this.event = t.event, this._strategy = e, this._handlerDeferred = new oe(), this._extendLifetimePromises = [], this._plugins = [...e.plugins], this._pluginStateMap = /* @__PURE__ */ new Map();
    for (const a of this._plugins)
      this._pluginStateMap.set(a, {});
    this.event.waitUntil(this._handlerDeferred.promise);
  }
  /**
   * Fetches a given request (and invokes any applicable plugin callback
   * methods) using the `fetchOptions` (for non-navigation requests) and
   * `plugins` defined on the `Strategy` object.
   *
   * The following plugin lifecycle methods are invoked when using this method:
   * - `requestWillFetch()`
   * - `fetchDidSucceed()`
   * - `fetchDidFail()`
   *
   * @param {Request|string} input The URL or request to fetch.
   * @return {Promise<Response>}
   */
  async fetch(e) {
    const { event: t } = this;
    let a = k(e);
    if (a.mode === "navigate" && t instanceof FetchEvent && t.preloadResponse) {
      const r = await t.preloadResponse;
      if (r)
        return r;
    }
    const n = this.hasCallback("fetchDidFail") ? a.clone() : null;
    try {
      for (const r of this.iterateCallbacks("requestWillFetch"))
        a = await r({ request: a.clone(), event: t });
    } catch (r) {
      if (r instanceof Error)
        throw new h("plugin-error-request-will-fetch", {
          thrownErrorMessage: r.message
        });
    }
    const i = a.clone();
    try {
      let r;
      r = await fetch(a, a.mode === "navigate" ? void 0 : this._strategy.fetchOptions);
      for (const c of this.iterateCallbacks("fetchDidSucceed"))
        r = await c({
          event: t,
          request: i,
          response: r
        });
      return r;
    } catch (r) {
      throw n && await this.runCallbacks("fetchDidFail", {
        error: r,
        event: t,
        originalRequest: n.clone(),
        request: i.clone()
      }), r;
    }
  }
  /**
   * Calls `this.fetch()` and (in the background) runs `this.cachePut()` on
   * the response generated by `this.fetch()`.
   *
   * The call to `this.cachePut()` automatically invokes `this.waitUntil()`,
   * so you do not have to manually call `waitUntil()` on the event.
   *
   * @param {Request|string} input The request or URL to fetch and cache.
   * @return {Promise<Response>}
   */
  async fetchAndCachePut(e) {
    const t = await this.fetch(e), a = t.clone();
    return this.waitUntil(this.cachePut(e, a)), t;
  }
  /**
   * Matches a request from the cache (and invokes any applicable plugin
   * callback methods) using the `cacheName`, `matchOptions`, and `plugins`
   * defined on the strategy object.
   *
   * The following plugin lifecycle methods are invoked when using this method:
   * - cacheKeyWillByUsed()
   * - cachedResponseWillByUsed()
   *
   * @param {Request|string} key The Request or URL to use as the cache key.
   * @return {Promise<Response|undefined>} A matching response, if found.
   */
  async cacheMatch(e) {
    const t = k(e);
    let a;
    const { cacheName: n, matchOptions: i } = this._strategy, r = await this.getCacheKey(t, "read"), c = Object.assign(Object.assign({}, i), { cacheName: n });
    a = await caches.match(r, c);
    for (const o of this.iterateCallbacks("cachedResponseWillBeUsed"))
      a = await o({
        cacheName: n,
        matchOptions: i,
        cachedResponse: a,
        request: r,
        event: this.event
      }) || void 0;
    return a;
  }
  /**
   * Puts a request/response pair in the cache (and invokes any applicable
   * plugin callback methods) using the `cacheName` and `plugins` defined on
   * the strategy object.
   *
   * The following plugin lifecycle methods are invoked when using this method:
   * - cacheKeyWillByUsed()
   * - cacheWillUpdate()
   * - cacheDidUpdate()
   *
   * @param {Request|string} key The request or URL to use as the cache key.
   * @param {Response} response The response to cache.
   * @return {Promise<boolean>} `false` if a cacheWillUpdate caused the response
   * not be cached, and `true` otherwise.
   */
  async cachePut(e, t) {
    const a = k(e);
    await he(0);
    const n = await this.getCacheKey(a, "write");
    if (!t)
      throw new h("cache-put-with-no-response", {
        url: ae(n.url)
      });
    const i = await this._ensureResponseSafeToCache(t);
    if (!i)
      return !1;
    const { cacheName: r, matchOptions: c } = this._strategy, o = await self.caches.open(r), l = this.hasCallback("cacheDidUpdate"), m = l ? await ce(
      // TODO(philipwalton): the `__WB_REVISION__` param is a precaching
      // feature. Consider into ways to only add this behavior if using
      // precaching.
      o,
      n.clone(),
      ["__WB_REVISION__"],
      c
    ) : null;
    try {
      await o.put(n, l ? i.clone() : i);
    } catch (u) {
      if (u instanceof Error)
        throw u.name === "QuotaExceededError" && await le(), u;
    }
    for (const u of this.iterateCallbacks("cacheDidUpdate"))
      await u({
        cacheName: r,
        oldResponse: m,
        newResponse: i.clone(),
        request: n,
        event: this.event
      });
    return !0;
  }
  /**
   * Checks the list of plugins for the `cacheKeyWillBeUsed` callback, and
   * executes any of those callbacks found in sequence. The final `Request`
   * object returned by the last plugin is treated as the cache key for cache
   * reads and/or writes. If no `cacheKeyWillBeUsed` plugin callbacks have
   * been registered, the passed request is returned unmodified
   *
   * @param {Request} request
   * @param {string} mode
   * @return {Promise<Request>}
   */
  async getCacheKey(e, t) {
    const a = `${e.url} | ${t}`;
    if (!this._cacheKeys[a]) {
      let n = e;
      for (const i of this.iterateCallbacks("cacheKeyWillBeUsed"))
        n = k(await i({
          mode: t,
          request: n,
          event: this.event,
          // params has a type any can't change right now.
          params: this.params
          // eslint-disable-line
        }));
      this._cacheKeys[a] = n;
    }
    return this._cacheKeys[a];
  }
  /**
   * Returns true if the strategy has at least one plugin with the given
   * callback.
   *
   * @param {string} name The name of the callback to check for.
   * @return {boolean}
   */
  hasCallback(e) {
    for (const t of this._strategy.plugins)
      if (e in t)
        return !0;
    return !1;
  }
  /**
   * Runs all plugin callbacks matching the given name, in order, passing the
   * given param object (merged ith the current plugin state) as the only
   * argument.
   *
   * Note: since this method runs all plugins, it's not suitable for cases
   * where the return value of a callback needs to be applied prior to calling
   * the next callback. See
   * {@link workbox-strategies.StrategyHandler#iterateCallbacks}
   * below for how to handle that case.
   *
   * @param {string} name The name of the callback to run within each plugin.
   * @param {Object} param The object to pass as the first (and only) param
   *     when executing each callback. This object will be merged with the
   *     current plugin state prior to callback execution.
   */
  async runCallbacks(e, t) {
    for (const a of this.iterateCallbacks(e))
      await a(t);
  }
  /**
   * Accepts a callback and returns an iterable of matching plugin callbacks,
   * where each callback is wrapped with the current handler state (i.e. when
   * you call each callback, whatever object parameter you pass it will
   * be merged with the plugin's current state).
   *
   * @param {string} name The name fo the callback to run
   * @return {Array<Function>}
   */
  *iterateCallbacks(e) {
    for (const t of this._strategy.plugins)
      if (typeof t[e] == "function") {
        const a = this._pluginStateMap.get(t);
        yield (i) => {
          const r = Object.assign(Object.assign({}, i), { state: a });
          return t[e](r);
        };
      }
  }
  /**
   * Adds a promise to the
   * [extend lifetime promises]{@link https://w3c.github.io/ServiceWorker/#extendableevent-extend-lifetime-promises}
   * of the event event associated with the request being handled (usually a
   * `FetchEvent`).
   *
   * Note: you can await
   * {@link workbox-strategies.StrategyHandler~doneWaiting}
   * to know when all added promises have settled.
   *
   * @param {Promise} promise A promise to add to the extend lifetime promises
   *     of the event that triggered the request.
   */
  waitUntil(e) {
    return this._extendLifetimePromises.push(e), e;
  }
  /**
   * Returns a promise that resolves once all promises passed to
   * {@link workbox-strategies.StrategyHandler~waitUntil}
   * have settled.
   *
   * Note: any work done after `doneWaiting()` settles should be manually
   * passed to an event's `waitUntil()` method (not this handler's
   * `waitUntil()` method), otherwise the service worker thread my be killed
   * prior to your work completing.
   */
  async doneWaiting() {
    let e;
    for (; e = this._extendLifetimePromises.shift(); )
      await e;
  }
  /**
   * Stops running the strategy and immediately resolves any pending
   * `waitUntil()` promises.
   */
  destroy() {
    this._handlerDeferred.resolve(null);
  }
  /**
   * This method will call cacheWillUpdate on the available plugins (or use
   * status === 200) to determine if the Response is safe and valid to cache.
   *
   * @param {Request} options.request
   * @param {Response} options.response
   * @return {Promise<Response|undefined>}
   *
   * @private
   */
  async _ensureResponseSafeToCache(e) {
    let t = e, a = !1;
    for (const n of this.iterateCallbacks("cacheWillUpdate"))
      if (t = await n({
        request: this.request,
        response: t,
        event: this.event
      }) || void 0, a = !0, !t)
        break;
    return a || t && t.status !== 200 && (t = void 0), t;
  }
}
class K {
  /**
   * Creates a new instance of the strategy and sets all documented option
   * properties as public instance properties.
   *
   * Note: if a custom strategy class extends the base Strategy class and does
   * not need more than these properties, it does not need to define its own
   * constructor.
   *
   * @param {Object} [options]
   * @param {string} [options.cacheName] Cache name to store and retrieve
   * requests. Defaults to the cache names provided by
   * {@link workbox-core.cacheNames}.
   * @param {Array<Object>} [options.plugins] [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
   * to use in conjunction with this caching strategy.
   * @param {Object} [options.fetchOptions] Values passed along to the
   * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
   * of [non-navigation](https://github.com/GoogleChrome/workbox/issues/1796)
   * `fetch()` requests made by this strategy.
   * @param {Object} [options.matchOptions] The
   * [`CacheQueryOptions`]{@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions}
   * for any `cache.match()` or `cache.put()` calls made by this strategy.
   */
  constructor(e = {}) {
    this.cacheName = L.getRuntimeName(e.cacheName), this.plugins = e.plugins || [], this.fetchOptions = e.fetchOptions, this.matchOptions = e.matchOptions;
  }
  /**
   * Perform a request strategy and returns a `Promise` that will resolve with
   * a `Response`, invoking all relevant plugin callbacks.
   *
   * When a strategy instance is registered with a Workbox
   * {@link workbox-routing.Route}, this method is automatically
   * called when the route matches.
   *
   * Alternatively, this method can be used in a standalone `FetchEvent`
   * listener by passing it to `event.respondWith()`.
   *
   * @param {FetchEvent|Object} options A `FetchEvent` or an object with the
   *     properties listed below.
   * @param {Request|string} options.request A request to run this strategy for.
   * @param {ExtendableEvent} options.event The event associated with the
   *     request.
   * @param {URL} [options.url]
   * @param {*} [options.params]
   */
  handle(e) {
    const [t] = this.handleAll(e);
    return t;
  }
  /**
   * Similar to {@link workbox-strategies.Strategy~handle}, but
   * instead of just returning a `Promise` that resolves to a `Response` it
   * it will return an tuple of `[response, done]` promises, where the former
   * (`response`) is equivalent to what `handle()` returns, and the latter is a
   * Promise that will resolve once any promises that were added to
   * `event.waitUntil()` as part of performing the strategy have completed.
   *
   * You can await the `done` promise to ensure any extra work performed by
   * the strategy (usually caching responses) completes successfully.
   *
   * @param {FetchEvent|Object} options A `FetchEvent` or an object with the
   *     properties listed below.
   * @param {Request|string} options.request A request to run this strategy for.
   * @param {ExtendableEvent} options.event The event associated with the
   *     request.
   * @param {URL} [options.url]
   * @param {*} [options.params]
   * @return {Array<Promise>} A tuple of [response, done]
   *     promises that can be used to determine when the response resolves as
   *     well as when the handler has completed all its work.
   */
  handleAll(e) {
    e instanceof FetchEvent && (e = {
      event: e,
      request: e.request
    });
    const t = e.event, a = typeof e.request == "string" ? new Request(e.request) : e.request, n = "params" in e ? e.params : void 0, i = new ue(this, { event: t, request: a, params: n }), r = this._getResponse(i, a, t), c = this._awaitComplete(r, i, a, t);
    return [r, c];
  }
  async _getResponse(e, t, a) {
    await e.runCallbacks("handlerWillStart", { event: a, request: t });
    let n;
    try {
      if (n = await this._handle(t, e), !n || n.type === "error")
        throw new h("no-response", { url: t.url });
    } catch (i) {
      if (i instanceof Error) {
        for (const r of e.iterateCallbacks("handlerDidError"))
          if (n = await r({ error: i, event: a, request: t }), n)
            break;
      }
      if (!n)
        throw i;
    }
    for (const i of e.iterateCallbacks("handlerWillRespond"))
      n = await i({ event: a, request: t, response: n });
    return n;
  }
  async _awaitComplete(e, t, a, n) {
    let i, r;
    try {
      i = await e;
    } catch {
    }
    try {
      await t.runCallbacks("handlerDidRespond", {
        event: n,
        request: a,
        response: i
      }), await t.doneWaiting();
    } catch (c) {
      c instanceof Error && (r = c);
    }
    if (await t.runCallbacks("handlerDidComplete", {
      event: n,
      request: a,
      response: i,
      error: r
    }), t.destroy(), r)
      throw r;
  }
}
class D extends K {
  /**
   * @param {Object} [options]
   * @param {string} [options.cacheName] Cache name to store and retrieve
   * requests. Defaults to cache names provided by
   * {@link workbox-core.cacheNames}.
   * @param {Array<Object>} [options.plugins] [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
   * to use in conjunction with this caching strategy.
   * @param {Object} [options.fetchOptions] Values passed along to the
   * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
   * of [non-navigation](https://github.com/GoogleChrome/workbox/issues/1796)
   * `fetch()` requests made by this strategy.
   * @param {Object} [options.matchOptions] [`CacheQueryOptions`](https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions)
   */
  constructor(e = {}) {
    super(e), this.plugins.some((t) => "cacheWillUpdate" in t) || this.plugins.unshift(re);
  }
  /**
   * @private
   * @param {Request|string} request A request to run this strategy for.
   * @param {workbox-strategies.StrategyHandler} handler The event that
   *     triggered the request.
   * @return {Promise<Response>}
   */
  async _handle(e, t) {
    const a = t.fetchAndCachePut(e).catch(() => {
    });
    t.waitUntil(a);
    let n = await t.cacheMatch(e), i;
    if (!n)
      try {
        n = await a;
      } catch (r) {
        r instanceof Error && (i = r);
      }
    if (!n)
      throw new h("no-response", { url: e.url, error: i });
    return n;
  }
}
class de extends K {
  /**
   * @private
   * @param {Request|string} request A request to run this strategy for.
   * @param {workbox-strategies.StrategyHandler} handler The event that
   *     triggered the request.
   * @return {Promise<Response>}
   */
  async _handle(e, t) {
    let a = await t.cacheMatch(e), n;
    if (!a)
      try {
        a = await t.fetchAndCachePut(e);
      } catch (i) {
        i instanceof Error && (n = i);
      }
    if (!a)
      throw new h("no-response", { url: e.url, error: n });
    return a;
  }
}
try {
  self["workbox:cacheable-response:6.6.0"] && _();
} catch {
}
class fe {
  /**
   * To construct a new CacheableResponse instance you must provide at least
   * one of the `config` properties.
   *
   * If both `statuses` and `headers` are specified, then both conditions must
   * be met for the `Response` to be considered cacheable.
   *
   * @param {Object} config
   * @param {Array<number>} [config.statuses] One or more status codes that a
   * `Response` can have and be considered cacheable.
   * @param {Object<string,string>} [config.headers] A mapping of header names
   * and expected values that a `Response` can have and be considered cacheable.
   * If multiple headers are provided, only one needs to be present.
   */
  constructor(e = {}) {
    this._statuses = e.statuses, this._headers = e.headers;
  }
  /**
   * Checks a response to see whether it's cacheable or not, based on this
   * object's configuration.
   *
   * @param {Response} response The response whose cacheability is being
   * checked.
   * @return {boolean} `true` if the `Response` is cacheable, and `false`
   * otherwise.
   */
  isResponseCacheable(e) {
    let t = !0;
    return this._statuses && (t = this._statuses.includes(e.status)), this._headers && t && (t = Object.keys(this._headers).some((a) => e.headers.get(a) === this._headers[a])), t;
  }
}
class z {
  /**
   * To construct a new CacheableResponsePlugin instance you must provide at
   * least one of the `config` properties.
   *
   * If both `statuses` and `headers` are specified, then both conditions must
   * be met for the `Response` to be considered cacheable.
   *
   * @param {Object} config
   * @param {Array<number>} [config.statuses] One or more status codes that a
   * `Response` can have and be considered cacheable.
   * @param {Object<string,string>} [config.headers] A mapping of header names
   * and expected values that a `Response` can have and be considered cacheable.
   * If multiple headers are provided, only one needs to be present.
   */
  constructor(e) {
    this.cacheWillUpdate = async ({ response: t }) => this._cacheableResponse.isResponseCacheable(t) ? t : null, this._cacheableResponse = new fe(e);
  }
}
function J(s) {
  s.then(() => {
  });
}
function pe(s) {
  G.add(s);
}
const ge = (s, e) => e.some((t) => s instanceof t);
let B, j;
function me() {
  return B || (B = [
    IDBDatabase,
    IDBObjectStore,
    IDBIndex,
    IDBCursor,
    IDBTransaction
  ]);
}
function we() {
  return j || (j = [
    IDBCursor.prototype.advance,
    IDBCursor.prototype.continue,
    IDBCursor.prototype.continuePrimaryKey
  ]);
}
const X = /* @__PURE__ */ new WeakMap(), I = /* @__PURE__ */ new WeakMap(), Y = /* @__PURE__ */ new WeakMap(), P = /* @__PURE__ */ new WeakMap(), O = /* @__PURE__ */ new WeakMap();
function ye(s) {
  const e = new Promise((t, a) => {
    const n = () => {
      s.removeEventListener("success", i), s.removeEventListener("error", r);
    }, i = () => {
      t(f(s.result)), n();
    }, r = () => {
      a(s.error), n();
    };
    s.addEventListener("success", i), s.addEventListener("error", r);
  });
  return e.then((t) => {
    t instanceof IDBCursor && X.set(t, s);
  }).catch(() => {
  }), O.set(e, s), e;
}
function _e(s) {
  if (I.has(s))
    return;
  const e = new Promise((t, a) => {
    const n = () => {
      s.removeEventListener("complete", i), s.removeEventListener("error", r), s.removeEventListener("abort", r);
    }, i = () => {
      t(), n();
    }, r = () => {
      a(s.error || new DOMException("AbortError", "AbortError")), n();
    };
    s.addEventListener("complete", i), s.addEventListener("error", r), s.addEventListener("abort", r);
  });
  I.set(s, e);
}
let S = {
  get(s, e, t) {
    if (s instanceof IDBTransaction) {
      if (e === "done")
        return I.get(s);
      if (e === "objectStoreNames")
        return s.objectStoreNames || Y.get(s);
      if (e === "store")
        return t.objectStoreNames[1] ? void 0 : t.objectStore(t.objectStoreNames[0]);
    }
    return f(s[e]);
  },
  set(s, e, t) {
    return s[e] = t, !0;
  },
  has(s, e) {
    return s instanceof IDBTransaction && (e === "done" || e === "store") ? !0 : e in s;
  }
};
function be(s) {
  S = s(S);
}
function Re(s) {
  return s === IDBDatabase.prototype.transaction && !("objectStoreNames" in IDBTransaction.prototype) ? function(e, ...t) {
    const a = s.call(T(this), e, ...t);
    return Y.set(a, e.sort ? e.sort() : [e]), f(a);
  } : we().includes(s) ? function(...e) {
    return s.apply(T(this), e), f(X.get(this));
  } : function(...e) {
    return f(s.apply(T(this), e));
  };
}
function Ce(s) {
  return typeof s == "function" ? Re(s) : (s instanceof IDBTransaction && _e(s), ge(s, me()) ? new Proxy(s, S) : s);
}
function f(s) {
  if (s instanceof IDBRequest)
    return ye(s);
  if (P.has(s))
    return P.get(s);
  const e = Ce(s);
  return e !== s && (P.set(s, e), O.set(e, s)), e;
}
const T = (s) => O.get(s);
function xe(s, e, { blocked: t, upgrade: a, blocking: n, terminated: i } = {}) {
  const r = indexedDB.open(s, e), c = f(r);
  return a && r.addEventListener("upgradeneeded", (o) => {
    a(f(r.result), o.oldVersion, o.newVersion, f(r.transaction), o);
  }), t && r.addEventListener("blocked", (o) => t(
    // Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405
    o.oldVersion,
    o.newVersion,
    o
  )), c.then((o) => {
    i && o.addEventListener("close", () => i()), n && o.addEventListener("versionchange", (l) => n(l.oldVersion, l.newVersion, l));
  }).catch(() => {
  }), c;
}
function ke(s, { blocked: e } = {}) {
  const t = indexedDB.deleteDatabase(s);
  return e && t.addEventListener("blocked", (a) => e(
    // Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405
    a.oldVersion,
    a
  )), f(t).then(() => {
  });
}
const Ee = ["get", "getKey", "getAll", "getAllKeys", "count"], Le = ["put", "add", "delete", "clear"], M = /* @__PURE__ */ new Map();
function q(s, e) {
  if (!(s instanceof IDBDatabase && !(e in s) && typeof e == "string"))
    return;
  if (M.get(e))
    return M.get(e);
  const t = e.replace(/FromIndex$/, ""), a = e !== t, n = Le.includes(t);
  if (
    // Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.
    !(t in (a ? IDBIndex : IDBObjectStore).prototype) || !(n || Ee.includes(t))
  )
    return;
  const i = async function(r, ...c) {
    const o = this.transaction(r, n ? "readwrite" : "readonly");
    let l = o.store;
    return a && (l = l.index(c.shift())), (await Promise.all([
      l[t](...c),
      n && o.done
    ]))[0];
  };
  return M.set(e, i), i;
}
be((s) => ({
  ...s,
  get: (e, t, a) => q(e, t) || s.get(e, t, a),
  has: (e, t) => !!q(e, t) || s.has(e, t)
}));
try {
  self["workbox:expiration:6.6.0"] && _();
} catch {
}
const De = "workbox-expiration", y = "cache-entries", H = (s) => {
  const e = new URL(s, location.href);
  return e.hash = "", e.href;
};
class Ue {
  /**
   *
   * @param {string} cacheName
   *
   * @private
   */
  constructor(e) {
    this._db = null, this._cacheName = e;
  }
  /**
   * Performs an upgrade of indexedDB.
   *
   * @param {IDBPDatabase<CacheDbSchema>} db
   *
   * @private
   */
  _upgradeDb(e) {
    const t = e.createObjectStore(y, { keyPath: "id" });
    t.createIndex("cacheName", "cacheName", { unique: !1 }), t.createIndex("timestamp", "timestamp", { unique: !1 });
  }
  /**
   * Performs an upgrade of indexedDB and deletes deprecated DBs.
   *
   * @param {IDBPDatabase<CacheDbSchema>} db
   *
   * @private
   */
  _upgradeDbAndDeleteOldDbs(e) {
    this._upgradeDb(e), this._cacheName && ke(this._cacheName);
  }
  /**
   * @param {string} url
   * @param {number} timestamp
   *
   * @private
   */
  async setTimestamp(e, t) {
    e = H(e);
    const a = {
      url: e,
      timestamp: t,
      cacheName: this._cacheName,
      // Creating an ID from the URL and cache name won't be necessary once
      // Edge switches to Chromium and all browsers we support work with
      // array keyPaths.
      id: this._getId(e)
    }, i = (await this.getDb()).transaction(y, "readwrite", {
      durability: "relaxed"
    });
    await i.store.put(a), await i.done;
  }
  /**
   * Returns the timestamp stored for a given URL.
   *
   * @param {string} url
   * @return {number | undefined}
   *
   * @private
   */
  async getTimestamp(e) {
    const a = await (await this.getDb()).get(y, this._getId(e));
    return a == null ? void 0 : a.timestamp;
  }
  /**
   * Iterates through all the entries in the object store (from newest to
   * oldest) and removes entries once either `maxCount` is reached or the
   * entry's timestamp is less than `minTimestamp`.
   *
   * @param {number} minTimestamp
   * @param {number} maxCount
   * @return {Array<string>}
   *
   * @private
   */
  async expireEntries(e, t) {
    const a = await this.getDb();
    let n = await a.transaction(y).store.index("timestamp").openCursor(null, "prev");
    const i = [];
    let r = 0;
    for (; n; ) {
      const o = n.value;
      o.cacheName === this._cacheName && (e && o.timestamp < e || t && r >= t ? i.push(n.value) : r++), n = await n.continue();
    }
    const c = [];
    for (const o of i)
      await a.delete(y, o.id), c.push(o.url);
    return c;
  }
  /**
   * Takes a URL and returns an ID that will be unique in the object store.
   *
   * @param {string} url
   * @return {string}
   *
   * @private
   */
  _getId(e) {
    return this._cacheName + "|" + H(e);
  }
  /**
   * Returns an open connection to the database.
   *
   * @private
   */
  async getDb() {
    return this._db || (this._db = await xe(De, 1, {
      upgrade: this._upgradeDbAndDeleteOldDbs.bind(this)
    })), this._db;
  }
}
class Pe {
  /**
   * To construct a new CacheExpiration instance you must provide at least
   * one of the `config` properties.
   *
   * @param {string} cacheName Name of the cache to apply restrictions to.
   * @param {Object} config
   * @param {number} [config.maxEntries] The maximum number of entries to cache.
   * Entries used the least will be removed as the maximum is reached.
   * @param {number} [config.maxAgeSeconds] The maximum age of an entry before
   * it's treated as stale and removed.
   * @param {Object} [config.matchOptions] The [`CacheQueryOptions`](https://developer.mozilla.org/en-US/docs/Web/API/Cache/delete#Parameters)
   * that will be used when calling `delete()` on the cache.
   */
  constructor(e, t = {}) {
    this._isRunning = !1, this._rerunRequested = !1, this._maxEntries = t.maxEntries, this._maxAgeSeconds = t.maxAgeSeconds, this._matchOptions = t.matchOptions, this._cacheName = e, this._timestampModel = new Ue(e);
  }
  /**
   * Expires entries for the given cache and given criteria.
   */
  async expireEntries() {
    if (this._isRunning) {
      this._rerunRequested = !0;
      return;
    }
    this._isRunning = !0;
    const e = this._maxAgeSeconds ? Date.now() - this._maxAgeSeconds * 1e3 : 0, t = await this._timestampModel.expireEntries(e, this._maxEntries), a = await self.caches.open(this._cacheName);
    for (const n of t)
      await a.delete(n, this._matchOptions);
    this._isRunning = !1, this._rerunRequested && (this._rerunRequested = !1, J(this.expireEntries()));
  }
  /**
   * Update the timestamp for the given URL. This ensures the when
   * removing entries based on maximum entries, most recently used
   * is accurate or when expiring, the timestamp is up-to-date.
   *
   * @param {string} url
   */
  async updateTimestamp(e) {
    await this._timestampModel.setTimestamp(e, Date.now());
  }
  /**
   * Can be used to check if a URL has expired or not before it's used.
   *
   * This requires a look up from IndexedDB, so can be slow.
   *
   * Note: This method will not remove the cached entry, call
   * `expireEntries()` to remove indexedDB and Cache entries.
   *
   * @param {string} url
   * @return {boolean}
   */
  async isURLExpired(e) {
    if (this._maxAgeSeconds) {
      const t = await this._timestampModel.getTimestamp(e), a = Date.now() - this._maxAgeSeconds * 1e3;
      return t !== void 0 ? t < a : !0;
    } else
      return !1;
  }
  /**
   * Removes the IndexedDB object store used to keep track of cache expiration
   * metadata.
   */
  async delete() {
    this._rerunRequested = !1, await this._timestampModel.expireEntries(1 / 0);
  }
}
class C {
  /**
   * @param {ExpirationPluginOptions} config
   * @param {number} [config.maxEntries] The maximum number of entries to cache.
   * Entries used the least will be removed as the maximum is reached.
   * @param {number} [config.maxAgeSeconds] The maximum age of an entry before
   * it's treated as stale and removed.
   * @param {Object} [config.matchOptions] The [`CacheQueryOptions`](https://developer.mozilla.org/en-US/docs/Web/API/Cache/delete#Parameters)
   * that will be used when calling `delete()` on the cache.
   * @param {boolean} [config.purgeOnQuotaError] Whether to opt this cache in to
   * automatic deletion if the available storage quota has been exceeded.
   */
  constructor(e = {}) {
    this.cachedResponseWillBeUsed = async ({ event: t, request: a, cacheName: n, cachedResponse: i }) => {
      if (!i)
        return null;
      const r = this._isResponseDateFresh(i), c = this._getCacheExpiration(n);
      J(c.expireEntries());
      const o = c.updateTimestamp(a.url);
      if (t)
        try {
          t.waitUntil(o);
        } catch {
        }
      return r ? i : null;
    }, this.cacheDidUpdate = async ({ cacheName: t, request: a }) => {
      const n = this._getCacheExpiration(t);
      await n.updateTimestamp(a.url), await n.expireEntries();
    }, this._config = e, this._maxAgeSeconds = e.maxAgeSeconds, this._cacheExpirations = /* @__PURE__ */ new Map(), e.purgeOnQuotaError && pe(() => this.deleteCacheAndMetadata());
  }
  /**
   * A simple helper method to return a CacheExpiration instance for a given
   * cache name.
   *
   * @param {string} cacheName
   * @return {CacheExpiration}
   *
   * @private
   */
  _getCacheExpiration(e) {
    if (e === L.getRuntimeName())
      throw new h("expire-custom-caches-only");
    let t = this._cacheExpirations.get(e);
    return t || (t = new Pe(e, this._config), this._cacheExpirations.set(e, t)), t;
  }
  /**
   * @param {Response} cachedResponse
   * @return {boolean}
   *
   * @private
   */
  _isResponseDateFresh(e) {
    if (!this._maxAgeSeconds)
      return !0;
    const t = this._getDateHeaderTimestamp(e);
    if (t === null)
      return !0;
    const a = Date.now();
    return t >= a - this._maxAgeSeconds * 1e3;
  }
  /**
   * This method will extract the data header and parse it into a useful
   * value.
   *
   * @param {Response} cachedResponse
   * @return {number|null}
   *
   * @private
   */
  _getDateHeaderTimestamp(e) {
    if (!e.headers.has("date"))
      return null;
    const t = e.headers.get("date"), n = new Date(t).getTime();
    return isNaN(n) ? null : n;
  }
  /**
   * This is a helper method that performs two operations:
   *
   * - Deletes *all* the underlying Cache instances associated with this plugin
   * instance, by calling caches.delete() on your behalf.
   * - Deletes the metadata from IndexedDB used to keep track of expiration
   * details for each Cache instance.
   *
   * When using cache expiration, calling this method is preferable to calling
   * `caches.delete()` directly, since this will ensure that the IndexedDB
   * metadata is also cleanly removed and open IndexedDB instances are deleted.
   *
   * Note that if you're *not* using cache expiration for a given cache, calling
   * `caches.delete()` and passing in the cache's name should be sufficient.
   * There is no Workbox-specific method needed for cleanup in that case.
   */
  async deleteCacheAndMetadata() {
    for (const [e, t] of this._cacheExpirations)
      await self.caches.delete(e), await t.delete();
    this._cacheExpirations = /* @__PURE__ */ new Map();
  }
}
try {
  self["workbox:recipes:6.6.0"] && _();
} catch {
}
function Z(s) {
  self.addEventListener("install", (e) => {
    const t = s.urls.map((a) => s.strategy.handleAll({
      event: e,
      request: new Request(a)
    })[1]);
    e.waitUntil(Promise.all(t));
  });
}
function Te(s = {}) {
  const e = ({ request: o }) => o.destination === "image", t = s.cacheName || "images", a = s.matchCallback || e, n = s.maxAgeSeconds || 30 * 24 * 60 * 60, i = s.maxEntries || 60, r = s.plugins || [];
  r.push(new z({
    statuses: [0, 200]
  })), r.push(new C({
    maxEntries: i,
    maxAgeSeconds: n
  }));
  const c = new de({
    cacheName: t,
    plugins: r
  });
  g(a, c), s.warmCache && Z({ urls: s.warmCache, strategy: c });
}
function Me(s = {}) {
  const e = ({ request: r }) => r.destination === "style" || r.destination === "script" || r.destination === "worker", t = s.cacheName || "static-resources", a = s.matchCallback || e, n = s.plugins || [];
  n.push(new z({
    statuses: [0, 200]
  }));
  const i = new D({
    cacheName: t,
    plugins: n
  });
  g(a, i), s.warmCache && Z({ urls: s.warmCache, strategy: i });
}
function Ae(s) {
  Q().setCatchHandler(s);
}
function V(s, e) {
  const t = e();
  return s.waitUntil(t), t;
}
try {
  self["workbox:precaching:6.6.0"] && _();
} catch {
}
const Ne = "__WB_REVISION__";
function Ie(s) {
  if (!s)
    throw new h("add-to-cache-list-unexpected-type", { entry: s });
  if (typeof s == "string") {
    const i = new URL(s, location.href);
    return {
      cacheKey: i.href,
      url: i.href
    };
  }
  const { revision: e, url: t } = s;
  if (!t)
    throw new h("add-to-cache-list-unexpected-type", { entry: s });
  if (!e) {
    const i = new URL(t, location.href);
    return {
      cacheKey: i.href,
      url: i.href
    };
  }
  const a = new URL(t, location.href), n = new URL(t, location.href);
  return a.searchParams.set(Ne, e), {
    cacheKey: a.href,
    url: n.href
  };
}
class Se {
  constructor() {
    this.updatedURLs = [], this.notUpdatedURLs = [], this.handlerWillStart = async ({ request: e, state: t }) => {
      t && (t.originalRequest = e);
    }, this.cachedResponseWillBeUsed = async ({ event: e, state: t, cachedResponse: a }) => {
      if (e.type === "install" && t && t.originalRequest && t.originalRequest instanceof Request) {
        const n = t.originalRequest.url;
        a ? this.notUpdatedURLs.push(n) : this.updatedURLs.push(n);
      }
      return a;
    };
  }
}
class Ke {
  constructor({ precacheController: e }) {
    this.cacheKeyWillBeUsed = async ({ request: t, params: a }) => {
      const n = (a == null ? void 0 : a.cacheKey) || this._precacheController.getCacheKeyForURL(t.url);
      return n ? new Request(n, { headers: t.headers }) : t;
    }, this._precacheController = e;
  }
}
let b;
function Oe() {
  if (b === void 0) {
    const s = new Response("");
    if ("body" in s)
      try {
        new Response(s.body), b = !0;
      } catch {
        b = !1;
      }
    b = !1;
  }
  return b;
}
async function ve(s, e) {
  let t = null;
  if (s.url && (t = new URL(s.url).origin), t !== self.location.origin)
    throw new h("cross-origin-copy-response", { origin: t });
  const a = s.clone(), n = {
    headers: new Headers(a.headers),
    status: a.status,
    statusText: a.statusText
  }, i = e ? e(n) : n, r = Oe() ? a.body : await a.blob();
  return new Response(r, i);
}
class p extends K {
  /**
   *
   * @param {Object} [options]
   * @param {string} [options.cacheName] Cache name to store and retrieve
   * requests. Defaults to the cache names provided by
   * {@link workbox-core.cacheNames}.
   * @param {Array<Object>} [options.plugins] {@link https://developers.google.com/web/tools/workbox/guides/using-plugins|Plugins}
   * to use in conjunction with this caching strategy.
   * @param {Object} [options.fetchOptions] Values passed along to the
   * {@link https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters|init}
   * of all fetch() requests made by this strategy.
   * @param {Object} [options.matchOptions] The
   * {@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions|CacheQueryOptions}
   * for any `cache.match()` or `cache.put()` calls made by this strategy.
   * @param {boolean} [options.fallbackToNetwork=true] Whether to attempt to
   * get the response from the network if there's a precache miss.
   */
  constructor(e = {}) {
    e.cacheName = L.getPrecacheName(e.cacheName), super(e), this._fallbackToNetwork = e.fallbackToNetwork !== !1, this.plugins.push(p.copyRedirectedCacheableResponsesPlugin);
  }
  /**
   * @private
   * @param {Request|string} request A request to run this strategy for.
   * @param {workbox-strategies.StrategyHandler} handler The event that
   *     triggered the request.
   * @return {Promise<Response>}
   */
  async _handle(e, t) {
    const a = await t.cacheMatch(e);
    return a || (t.event && t.event.type === "install" ? await this._handleInstall(e, t) : await this._handleFetch(e, t));
  }
  async _handleFetch(e, t) {
    let a;
    const n = t.params || {};
    if (this._fallbackToNetwork) {
      const i = n.integrity, r = e.integrity, c = !r || r === i;
      a = await t.fetch(new Request(e, {
        integrity: e.mode !== "no-cors" ? r || i : void 0
      })), i && c && e.mode !== "no-cors" && (this._useDefaultCacheabilityPluginIfNeeded(), await t.cachePut(e, a.clone()));
    } else
      throw new h("missing-precache-entry", {
        cacheName: this.cacheName,
        url: e.url
      });
    return a;
  }
  async _handleInstall(e, t) {
    this._useDefaultCacheabilityPluginIfNeeded();
    const a = await t.fetch(e);
    if (!await t.cachePut(e, a.clone()))
      throw new h("bad-precaching-response", {
        url: e.url,
        status: a.status
      });
    return a;
  }
  /**
   * This method is complex, as there a number of things to account for:
   *
   * The `plugins` array can be set at construction, and/or it might be added to
   * to at any time before the strategy is used.
   *
   * At the time the strategy is used (i.e. during an `install` event), there
   * needs to be at least one plugin that implements `cacheWillUpdate` in the
   * array, other than `copyRedirectedCacheableResponsesPlugin`.
   *
   * - If this method is called and there are no suitable `cacheWillUpdate`
   * plugins, we need to add `defaultPrecacheCacheabilityPlugin`.
   *
   * - If this method is called and there is exactly one `cacheWillUpdate`, then
   * we don't have to do anything (this might be a previously added
   * `defaultPrecacheCacheabilityPlugin`, or it might be a custom plugin).
   *
   * - If this method is called and there is more than one `cacheWillUpdate`,
   * then we need to check if one is `defaultPrecacheCacheabilityPlugin`. If so,
   * we need to remove it. (This situation is unlikely, but it could happen if
   * the strategy is used multiple times, the first without a `cacheWillUpdate`,
   * and then later on after manually adding a custom `cacheWillUpdate`.)
   *
   * See https://github.com/GoogleChrome/workbox/issues/2737 for more context.
   *
   * @private
   */
  _useDefaultCacheabilityPluginIfNeeded() {
    let e = null, t = 0;
    for (const [a, n] of this.plugins.entries())
      n !== p.copyRedirectedCacheableResponsesPlugin && (n === p.defaultPrecacheCacheabilityPlugin && (e = a), n.cacheWillUpdate && t++);
    t === 0 ? this.plugins.push(p.defaultPrecacheCacheabilityPlugin) : t > 1 && e !== null && this.plugins.splice(e, 1);
  }
}
p.defaultPrecacheCacheabilityPlugin = {
  async cacheWillUpdate({ response: s }) {
    return !s || s.status >= 400 ? null : s;
  }
};
p.copyRedirectedCacheableResponsesPlugin = {
  async cacheWillUpdate({ response: s }) {
    return s.redirected ? await ve(s) : s;
  }
};
class We {
  /**
   * Create a new PrecacheController.
   *
   * @param {Object} [options]
   * @param {string} [options.cacheName] The cache to use for precaching.
   * @param {string} [options.plugins] Plugins to use when precaching as well
   * as responding to fetch events for precached assets.
   * @param {boolean} [options.fallbackToNetwork=true] Whether to attempt to
   * get the response from the network if there's a precache miss.
   */
  constructor({ cacheName: e, plugins: t = [], fallbackToNetwork: a = !0 } = {}) {
    this._urlsToCacheKeys = /* @__PURE__ */ new Map(), this._urlsToCacheModes = /* @__PURE__ */ new Map(), this._cacheKeysToIntegrities = /* @__PURE__ */ new Map(), this._strategy = new p({
      cacheName: L.getPrecacheName(e),
      plugins: [
        ...t,
        new Ke({ precacheController: this })
      ],
      fallbackToNetwork: a
    }), this.install = this.install.bind(this), this.activate = this.activate.bind(this);
  }
  /**
   * @type {workbox-precaching.PrecacheStrategy} The strategy created by this controller and
   * used to cache assets and respond to fetch events.
   */
  get strategy() {
    return this._strategy;
  }
  /**
   * Adds items to the precache list, removing any duplicates and
   * stores the files in the
   * {@link workbox-core.cacheNames|"precache cache"} when the service
   * worker installs.
   *
   * This method can be called multiple times.
   *
   * @param {Array<Object|string>} [entries=[]] Array of entries to precache.
   */
  precache(e) {
    this.addToCacheList(e), this._installAndActiveListenersAdded || (self.addEventListener("install", this.install), self.addEventListener("activate", this.activate), this._installAndActiveListenersAdded = !0);
  }
  /**
   * This method will add items to the precache list, removing duplicates
   * and ensuring the information is valid.
   *
   * @param {Array<workbox-precaching.PrecacheController.PrecacheEntry|string>} entries
   *     Array of entries to precache.
   */
  addToCacheList(e) {
    const t = [];
    for (const a of e) {
      typeof a == "string" ? t.push(a) : a && a.revision === void 0 && t.push(a.url);
      const { cacheKey: n, url: i } = Ie(a), r = typeof a != "string" && a.revision ? "reload" : "default";
      if (this._urlsToCacheKeys.has(i) && this._urlsToCacheKeys.get(i) !== n)
        throw new h("add-to-cache-list-conflicting-entries", {
          firstEntry: this._urlsToCacheKeys.get(i),
          secondEntry: n
        });
      if (typeof a != "string" && a.integrity) {
        if (this._cacheKeysToIntegrities.has(n) && this._cacheKeysToIntegrities.get(n) !== a.integrity)
          throw new h("add-to-cache-list-conflicting-integrities", {
            url: i
          });
        this._cacheKeysToIntegrities.set(n, a.integrity);
      }
      if (this._urlsToCacheKeys.set(i, n), this._urlsToCacheModes.set(i, r), t.length > 0) {
        const c = `Workbox is precaching URLs without revision info: ${t.join(", ")}
This is generally NOT safe. Learn more at https://bit.ly/wb-precache`;
        console.warn(c);
      }
    }
  }
  /**
   * Precaches new and updated assets. Call this method from the service worker
   * install event.
   *
   * Note: this method calls `event.waitUntil()` for you, so you do not need
   * to call it yourself in your event handlers.
   *
   * @param {ExtendableEvent} event
   * @return {Promise<workbox-precaching.InstallResult>}
   */
  install(e) {
    return V(e, async () => {
      const t = new Se();
      this.strategy.plugins.push(t);
      for (const [i, r] of this._urlsToCacheKeys) {
        const c = this._cacheKeysToIntegrities.get(r), o = this._urlsToCacheModes.get(i), l = new Request(i, {
          integrity: c,
          cache: o,
          credentials: "same-origin"
        });
        await Promise.all(this.strategy.handleAll({
          params: { cacheKey: r },
          request: l,
          event: e
        }));
      }
      const { updatedURLs: a, notUpdatedURLs: n } = t;
      return { updatedURLs: a, notUpdatedURLs: n };
    });
  }
  /**
   * Deletes assets that are no longer present in the current precache manifest.
   * Call this method from the service worker activate event.
   *
   * Note: this method calls `event.waitUntil()` for you, so you do not need
   * to call it yourself in your event handlers.
   *
   * @param {ExtendableEvent} event
   * @return {Promise<workbox-precaching.CleanupResult>}
   */
  activate(e) {
    return V(e, async () => {
      const t = await self.caches.open(this.strategy.cacheName), a = await t.keys(), n = new Set(this._urlsToCacheKeys.values()), i = [];
      for (const r of a)
        n.has(r.url) || (await t.delete(r), i.push(r.url));
      return { deletedURLs: i };
    });
  }
  /**
   * Returns a mapping of a precached URL to the corresponding cache key, taking
   * into account the revision information for the URL.
   *
   * @return {Map<string, string>} A URL to cache key mapping.
   */
  getURLsToCacheKeys() {
    return this._urlsToCacheKeys;
  }
  /**
   * Returns a list of all the URLs that have been precached by the current
   * service worker.
   *
   * @return {Array<string>} The precached URLs.
   */
  getCachedURLs() {
    return [...this._urlsToCacheKeys.keys()];
  }
  /**
   * Returns the cache key used for storing a given URL. If that URL is
   * unversioned, like `/index.html', then the cache key will be the original
   * URL with a search parameter appended to it.
   *
   * @param {string} url A URL whose cache key you want to look up.
   * @return {string} The versioned URL that corresponds to a cache key
   * for the original URL, or undefined if that URL isn't precached.
   */
  getCacheKeyForURL(e) {
    const t = new URL(e, location.href);
    return this._urlsToCacheKeys.get(t.href);
  }
  /**
   * @param {string} url A cache key whose SRI you want to look up.
   * @return {string} The subresource integrity associated with the cache key,
   * or undefined if it's not set.
   */
  getIntegrityForCacheKey(e) {
    return this._cacheKeysToIntegrities.get(e);
  }
  /**
   * This acts as a drop-in replacement for
   * [`cache.match()`](https://developer.mozilla.org/en-US/docs/Web/API/Cache/match)
   * with the following differences:
   *
   * - It knows what the name of the precache is, and only checks in that cache.
   * - It allows you to pass in an "original" URL without versioning parameters,
   * and it will automatically look up the correct cache key for the currently
   * active revision of that URL.
   *
   * E.g., `matchPrecache('index.html')` will find the correct precached
   * response for the currently active service worker, even if the actual cache
   * key is `'/index.html?__WB_REVISION__=1234abcd'`.
   *
   * @param {string|Request} request The key (without revisioning parameters)
   * to look up in the precache.
   * @return {Promise<Response|undefined>}
   */
  async matchPrecache(e) {
    const t = e instanceof Request ? e.url : e, a = this.getCacheKeyForURL(t);
    if (a)
      return (await self.caches.open(this.strategy.cacheName)).match(a);
  }
  /**
   * Returns a function that looks up `url` in the precache (taking into
   * account revision information), and returns the corresponding `Response`.
   *
   * @param {string} url The precached URL which will be used to lookup the
   * `Response`.
   * @return {workbox-routing~handlerCallback}
   */
  createHandlerBoundToURL(e) {
    const t = this.getCacheKeyForURL(e);
    if (!t)
      throw new h("non-precached-url", { url: e });
    return (a) => (a.request = new Request(e), a.params = Object.assign({ cacheKey: t }, a.params), this.strategy.handle(a));
  }
}
let A;
const v = () => (A || (A = new We()), A);
function N(s) {
  return v().matchPrecache(s);
}
function Fe(s = {}) {
  const e = s.pageFallback || "offline.html", t = s.imageFallback || !1, a = s.fontFallback || !1;
  self.addEventListener("install", (i) => {
    const r = [e];
    t && r.push(t), a && r.push(a), i.waitUntil(self.caches.open("workbox-offline-fallbacks").then((c) => c.addAll(r)));
  }), Ae(async (i) => {
    const r = i.request.destination, c = await self.caches.open("workbox-offline-fallbacks");
    return r === "document" ? await N(e) || await c.match(e) || Response.error() : r === "image" && t !== !1 ? await N(t) || await c.match(t) || Response.error() : r === "font" && a !== !1 && (await N(a) || await c.match(a)) || Response.error();
  });
}
function Be(s, e = []) {
  for (const t of [...s.searchParams.keys()])
    e.some((a) => a.test(t)) && s.searchParams.delete(t);
  return s;
}
function* je(s, { ignoreURLParametersMatching: e = [/^utm_/, /^fbclid$/], directoryIndex: t = "index.html", cleanURLs: a = !0, urlManipulation: n } = {}) {
  const i = new URL(s, location.href);
  i.hash = "", yield i.href;
  const r = Be(i, e);
  if (yield r.href, t && r.pathname.endsWith("/")) {
    const c = new URL(r.href);
    c.pathname += t, yield c.href;
  }
  if (a) {
    const c = new URL(r.href);
    c.pathname += ".html", yield c.href;
  }
  if (n) {
    const c = n({ url: i });
    for (const o of c)
      yield o.href;
  }
}
class qe extends R {
  /**
   * @param {PrecacheController} precacheController A `PrecacheController`
   * instance used to both match requests and respond to fetch events.
   * @param {Object} [options] Options to control how requests are matched
   * against the list of precached URLs.
   * @param {string} [options.directoryIndex=index.html] The `directoryIndex` will
   * check cache entries for a URLs ending with '/' to see if there is a hit when
   * appending the `directoryIndex` value.
   * @param {Array<RegExp>} [options.ignoreURLParametersMatching=[/^utm_/, /^fbclid$/]] An
   * array of regex's to remove search params when looking for a cache match.
   * @param {boolean} [options.cleanURLs=true] The `cleanURLs` option will
   * check the cache for the URL with a `.html` added to the end of the end.
   * @param {workbox-precaching~urlManipulation} [options.urlManipulation]
   * This is a function that should take a URL and return an array of
   * alternative URLs that should be checked for precache matches.
   */
  constructor(e, t) {
    const a = ({ request: n }) => {
      const i = e.getURLsToCacheKeys();
      for (const r of je(n.url, t)) {
        const c = i.get(r);
        if (c) {
          const o = e.getIntegrityForCacheKey(c);
          return { cacheKey: c, integrity: o };
        }
      }
    };
    super(a, e.strategy);
  }
}
function He(s) {
  const e = v(), t = new qe(e, s);
  g(t);
}
function Ve(s) {
  v().precache(s);
}
function $e(s, e) {
  Ve(s), He(e);
}
const Qe = ([{"revision":null,"url":"assets/js/_commonjsHelpers-39b5b250.js"},{"revision":null,"url":"assets/js/additional-info-ead3942b.js"},{"revision":null,"url":"assets/js/alert-service-d581ac94.js"},{"revision":null,"url":"assets/js/app-badge-fc8dcab6.js"},{"revision":null,"url":"assets/js/applicationinsights-core-js-9783d46c.js"},{"revision":null,"url":"assets/js/applicationinsights-web-9ad09b9c.js"},{"revision":null,"url":"assets/js/apps-5e537cd2.js"},{"revision":null,"url":"assets/js/auto-complete-app-search-ba3a8619.js"},{"revision":null,"url":"assets/js/chunk.5QOG63ET-86d395e3.js"},{"revision":null,"url":"assets/js/chunk.I7QNFR2M-3870cfe0.js"},{"revision":null,"url":"assets/js/chunk.KF7JSGG3-b3beea31.js"},{"revision":null,"url":"assets/js/chunk.RK73WSZS-e061cb19.js"},{"revision":null,"url":"assets/js/chunk.RO5AEVD4-7bdab42d.js"},{"revision":null,"url":"assets/js/chunk.STXFIMXZ-d2f2afca.js"},{"revision":null,"url":"assets/js/chunk.W5IOVX7A-d0429cdc.js"},{"revision":null,"url":"assets/js/chunk.XLNYK33R-4eb08d82.js"},{"revision":null,"url":"assets/js/collection-group-2b5b58bb.js"},{"revision":null,"url":"assets/js/collections-browse-fad61e97.js"},{"revision":null,"url":"assets/js/collections-fb2356b6.js"},{"revision":null,"url":"assets/js/css-function-ae09fb24.js"},{"revision":null,"url":"assets/js/dash.all.min-f4f61554.js"},{"revision":null,"url":"assets/js/dash.mss.min-9e6d10cc.js"},{"revision":null,"url":"assets/js/editorial-e147994c.js"},{"revision":null,"url":"assets/js/error-65450945.js"},{"revision":null,"url":"assets/js/footer-menu-ba3d9c81.js"},{"revision":null,"url":"assets/js/gaming-5b43dd3d.js"},{"revision":null,"url":"assets/js/header-a986c565.js"},{"revision":null,"url":"assets/js/home-242c909d.js"},{"revision":null,"url":"assets/js/image-helper-99359f42.js"},{"revision":null,"url":"assets/js/index-742cead1.js"},{"revision":null,"url":"assets/js/index-b5fbfb8f.css"},{"revision":null,"url":"assets/js/Index-cbed7ffc.js"},{"revision":null,"url":"assets/js/index-d961e0b8.js"},{"revision":null,"url":"assets/js/InstrumentHooks-cd565348.js"},{"revision":null,"url":"assets/js/market-collection-service-07430c1f.js"},{"revision":null,"url":"assets/js/movies-62f66d52.js"},{"revision":null,"url":"assets/js/nav-bar-c4155e9c.js"},{"revision":null,"url":"assets/js/not-found-6c13d044.js"},{"revision":null,"url":"assets/js/paged-list-d85ba96d.js"},{"revision":null,"url":"assets/js/platform-2180e403.js"},{"revision":null,"url":"assets/js/product-collection-bb13b8b7.js"},{"revision":null,"url":"assets/js/product-details-e87dac41.js"},{"revision":null,"url":"assets/js/product-review-53ecffb7.js"},{"revision":null,"url":"assets/js/ratings-reviews-list-5017cc7f.js"},{"revision":null,"url":"assets/js/ratings-reviews-summary-8ecf06b2.js"},{"revision":null,"url":"assets/js/ref-7faff88e.js"},{"revision":null,"url":"assets/js/related-products-fe4e0778.js"},{"revision":null,"url":"assets/js/repeat-1a166ce4.js"},{"revision":null,"url":"assets/js/search-results-afd3139d.js"},{"revision":null,"url":"assets/js/search-results-publisher-41b2f94c.js"},{"revision":null,"url":"assets/js/spacing.styles-d31ea5ff.js"},{"revision":null,"url":"assets/js/spotlight-control-944e26f6.js"},{"revision":null,"url":"assets/js/style-map-8e87bfe1.js"},{"revision":null,"url":"assets/js/system-requirements-0b3dfc07.js"},{"revision":null,"url":"assets/js/tall-tile-group-1b22db9b.js"},{"revision":null,"url":"assets/js/trending-collection-06be6dda.js"},{"revision":"869914f2d432d50c1fd8939f4fdd4a8e","url":"clarity.js"},{"revision":"958f9766ac248393bfdf49eae8768caf","url":"index.html"},{"revision":"bbb81272febce86ec548d40431088763","url":"offline.html"},{"revision":"75747a0f40e29e418b67fdc1057a6979","url":"shoelace-dark-2.7.0.css"},{"revision":"3f9d2914730633e202161219597ebeb5","url":"shoelace-light-2.7.0.css"}] || []).filter((s) => s.url !== "index.html");
try {
  $e(Qe);
} catch (s) {
  console.warn("Service worker warning: error during precache", s);
}
const Ge = [
  "style",
  "script",
  "worker",
  "font"
];
Me({
  matchCallback: (s) => s.request.url.endsWith("/ms-store-badge.bundled.js") ? !1 : Ge.some((e) => e === s.request.destination) || // Our JSON strings are loaded without a destination type. So, match based on names
  s.request.url.includes(".json"),
  plugins: [
    new C({
      maxEntries: 200,
      maxAgeSeconds: x(90)
      // 90 days. This helps us weed out old static assets, e.g. /js/build-432abc.js
    })
  ]
});
Te({
  maxAgeSeconds: x(14),
  maxEntries: 1e3,
  matchCallback: (s) => {
    const e = s.request.url ? new URL(s.request.url).host : "";
    return s.request.destination === "image" && e !== "web.vortex.data.microsoft.com";
  }
});
Fe();
const ze = [
  "/api/reco/getcuratedproductslist",
  // curated collections
  "/api/reco/getcomputedproductslist",
  // computed collections
  "/api/reco/getmerchandisercontentproductlist",
  // merchadiser collections
  "/api/reco/getpromotionproducts",
  // promoted products for spotlight
  "/api/reco/getrelatedproductslist",
  // related products, shown from a PDP
  "/api/productsdetails/getproductdetailsbyid",
  // product details
  "/api/pages/pdp",
  // product description pages
  "/api/pages/collection",
  // market-permitted collections
  "/api/pages/getmoviegenresbymarket"
  // movie genres by market
];
function Je(s) {
  const e = s.url.pathname.toLowerCase();
  return ze.some((t) => e.startsWith(t));
}
g(
  Je,
  new D({
    cacheName: "api-results",
    plugins: [
      new C({
        maxEntries: 200,
        maxAgeSeconds: x(1)
        // 1 day. OK to cache these API results longer as we have a StaleWhileRevalidate, meaning we show results from cache instantly while refreshing cache in background.
      })
    ]
  })
);
g(
  ({ url: s }) => s.pathname.toLowerCase().startsWith("/api/settings/market"),
  new D({
    cacheName: "market",
    plugins: [
      new C({
        maxEntries: 2,
        maxAgeSeconds: x(90)
      })
    ]
  })
);
g(
  ({ url: s }) => s.pathname.toLowerCase().startsWith("/api/pages/chrome"),
  new D({
    cacheName: "chrome",
    plugins: [
      new C({
        maxEntries: 5,
        maxAgeSeconds: x(365)
      })
    ]
  })
);
function x(s) {
  return s * 24 * 60 * 60;
}
