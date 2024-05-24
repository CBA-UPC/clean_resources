try {
  self["workbox:core:7.0.0"] && _();
} catch {
}
const Hn = (a, ...e) => {
  let t = a;
  return e.length > 0 && (t += ` :: ${JSON.stringify(e)}`), t;
}, Vn = Hn;
class L extends Error {
  /**
   *
   * @param {string} errorCode The error code that
   * identifies this particular error.
   * @param {Object=} details Any relevant arguments
   * that will help developers identify issues should
   * be added as a key on the context object.
   */
  constructor(e, t) {
    const s = Vn(e, t);
    super(s), this.name = e, this.details = t;
  }
}
const zn = (a) => new URL(String(a), location.href).href.replace(new RegExp(`^${location.origin}`), ""), Yn = (a, e) => e.some((t) => a instanceof t);
let Et, St;
function Qn() {
  return Et || (Et = [
    IDBDatabase,
    IDBObjectStore,
    IDBIndex,
    IDBCursor,
    IDBTransaction
  ]);
}
function Gn() {
  return St || (St = [
    IDBCursor.prototype.advance,
    IDBCursor.prototype.continue,
    IDBCursor.prototype.continuePrimaryKey
  ]);
}
const Lt = /* @__PURE__ */ new WeakMap(), Ve = /* @__PURE__ */ new WeakMap(), Ot = /* @__PURE__ */ new WeakMap(), ke = /* @__PURE__ */ new WeakMap(), Ge = /* @__PURE__ */ new WeakMap();
function Xn(a) {
  const e = new Promise((t, s) => {
    const u = () => {
      a.removeEventListener("success", f), a.removeEventListener("error", h);
    }, f = () => {
      t(X(a.result)), u();
    }, h = () => {
      s(a.error), u();
    };
    a.addEventListener("success", f), a.addEventListener("error", h);
  });
  return e.then((t) => {
    t instanceof IDBCursor && Lt.set(t, a);
  }).catch(() => {
  }), Ge.set(e, a), e;
}
function Jn(a) {
  if (Ve.has(a))
    return;
  const e = new Promise((t, s) => {
    const u = () => {
      a.removeEventListener("complete", f), a.removeEventListener("error", h), a.removeEventListener("abort", h);
    }, f = () => {
      t(), u();
    }, h = () => {
      s(a.error || new DOMException("AbortError", "AbortError")), u();
    };
    a.addEventListener("complete", f), a.addEventListener("error", h), a.addEventListener("abort", h);
  });
  Ve.set(a, e);
}
let ze = {
  get(a, e, t) {
    if (a instanceof IDBTransaction) {
      if (e === "done")
        return Ve.get(a);
      if (e === "objectStoreNames")
        return a.objectStoreNames || Ot.get(a);
      if (e === "store")
        return t.objectStoreNames[1] ? void 0 : t.objectStore(t.objectStoreNames[0]);
    }
    return X(a[e]);
  },
  set(a, e, t) {
    return a[e] = t, !0;
  },
  has(a, e) {
    return a instanceof IDBTransaction && (e === "done" || e === "store") ? !0 : e in a;
  }
};
function Zn(a) {
  ze = a(ze);
}
function er(a) {
  return a === IDBDatabase.prototype.transaction && !("objectStoreNames" in IDBTransaction.prototype) ? function(e, ...t) {
    const s = a.call(Me(this), e, ...t);
    return Ot.set(s, e.sort ? e.sort() : [e]), X(s);
  } : Gn().includes(a) ? function(...e) {
    return a.apply(Me(this), e), X(Lt.get(this));
  } : function(...e) {
    return X(a.apply(Me(this), e));
  };
}
function tr(a) {
  return typeof a == "function" ? er(a) : (a instanceof IDBTransaction && Jn(a), Yn(a, Qn()) ? new Proxy(a, ze) : a);
}
function X(a) {
  if (a instanceof IDBRequest)
    return Xn(a);
  if (ke.has(a))
    return ke.get(a);
  const e = tr(a);
  return e !== a && (ke.set(a, e), Ge.set(e, a)), e;
}
const Me = (a) => Ge.get(a);
function Ut(a, e, { blocked: t, upgrade: s, blocking: u, terminated: f } = {}) {
  const h = indexedDB.open(a, e), p = X(h);
  return s && h.addEventListener("upgradeneeded", (R) => {
    s(X(h.result), R.oldVersion, R.newVersion, X(h.transaction), R);
  }), t && h.addEventListener("blocked", (R) => t(
    // Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405
    R.oldVersion,
    R.newVersion,
    R
  )), p.then((R) => {
    f && R.addEventListener("close", () => f()), u && R.addEventListener("versionchange", (I) => u(I.oldVersion, I.newVersion, I));
  }).catch(() => {
  }), p;
}
function nr(a, { blocked: e } = {}) {
  const t = indexedDB.deleteDatabase(a);
  return e && t.addEventListener("blocked", (s) => e(
    // Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405
    s.oldVersion,
    s
  )), X(t).then(() => {
  });
}
const rr = ["get", "getKey", "getAll", "getAllKeys", "count"], sr = ["put", "add", "delete", "clear"], qe = /* @__PURE__ */ new Map();
function It(a, e) {
  if (!(a instanceof IDBDatabase && !(e in a) && typeof e == "string"))
    return;
  if (qe.get(e))
    return qe.get(e);
  const t = e.replace(/FromIndex$/, ""), s = e !== t, u = sr.includes(t);
  if (
    // Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.
    !(t in (s ? IDBIndex : IDBObjectStore).prototype) || !(u || rr.includes(t))
  )
    return;
  const f = async function(h, ...p) {
    const R = this.transaction(h, u ? "readwrite" : "readonly");
    let I = R.store;
    return s && (I = I.index(p.shift())), (await Promise.all([
      I[t](...p),
      u && R.done
    ]))[0];
  };
  return qe.set(e, f), f;
}
Zn((a) => ({
  ...a,
  get: (e, t, s) => It(e, t) || a.get(e, t, s),
  has: (e, t) => !!It(e, t) || a.has(e, t)
}));
try {
  self["workbox:background-sync:7.0.0"] && _();
} catch {
}
const xt = 3, ar = "workbox-background-sync", Q = "requests", le = "queueName";
class ir {
  constructor() {
    this._db = null;
  }
  /**
   * Add QueueStoreEntry to underlying db.
   *
   * @param {UnidentifiedQueueStoreEntry} entry
   */
  async addEntry(e) {
    const s = (await this.getDb()).transaction(Q, "readwrite", {
      durability: "relaxed"
    });
    await s.store.add(e), await s.done;
  }
  /**
   * Returns the first entry id in the ObjectStore.
   *
   * @return {number | undefined}
   */
  async getFirstEntryId() {
    const t = await (await this.getDb()).transaction(Q).store.openCursor();
    return t == null ? void 0 : t.value.id;
  }
  /**
   * Get all the entries filtered by index
   *
   * @param queueName
   * @return {Promise<QueueStoreEntry[]>}
   */
  async getAllEntriesByQueueName(e) {
    const s = await (await this.getDb()).getAllFromIndex(Q, le, IDBKeyRange.only(e));
    return s || new Array();
  }
  /**
   * Returns the number of entries filtered by index
   *
   * @param queueName
   * @return {Promise<number>}
   */
  async getEntryCountByQueueName(e) {
    return (await this.getDb()).countFromIndex(Q, le, IDBKeyRange.only(e));
  }
  /**
   * Deletes a single entry by id.
   *
   * @param {number} id the id of the entry to be deleted
   */
  async deleteEntry(e) {
    await (await this.getDb()).delete(Q, e);
  }
  /**
   *
   * @param queueName
   * @returns {Promise<QueueStoreEntry | undefined>}
   */
  async getFirstEntryByQueueName(e) {
    return await this.getEndEntryFromIndex(IDBKeyRange.only(e), "next");
  }
  /**
   *
   * @param queueName
   * @returns {Promise<QueueStoreEntry | undefined>}
   */
  async getLastEntryByQueueName(e) {
    return await this.getEndEntryFromIndex(IDBKeyRange.only(e), "prev");
  }
  /**
   * Returns either the first or the last entries, depending on direction.
   * Filtered by index.
   *
   * @param {IDBCursorDirection} direction
   * @param {IDBKeyRange} query
   * @return {Promise<QueueStoreEntry | undefined>}
   * @private
   */
  async getEndEntryFromIndex(e, t) {
    const u = await (await this.getDb()).transaction(Q).store.index(le).openCursor(e, t);
    return u == null ? void 0 : u.value;
  }
  /**
   * Returns an open connection to the database.
   *
   * @private
   */
  async getDb() {
    return this._db || (this._db = await Ut(ar, xt, {
      upgrade: this._upgradeDb
    })), this._db;
  }
  /**
   * Upgrades QueueDB
   *
   * @param {IDBPDatabase<QueueDBSchema>} db
   * @param {number} oldVersion
   * @private
   */
  _upgradeDb(e, t) {
    t > 0 && t < xt && e.objectStoreNames.contains(Q) && e.deleteObjectStore(Q), e.createObjectStore(Q, {
      autoIncrement: !0,
      keyPath: "id"
    }).createIndex(le, le, { unique: !1 });
  }
}
class or {
  /**
   * Associates this instance with a Queue instance, so entries added can be
   * identified by their queue name.
   *
   * @param {string} queueName
   */
  constructor(e) {
    this._queueName = e, this._queueDb = new ir();
  }
  /**
   * Append an entry last in the queue.
   *
   * @param {Object} entry
   * @param {Object} entry.requestData
   * @param {number} [entry.timestamp]
   * @param {Object} [entry.metadata]
   */
  async pushEntry(e) {
    delete e.id, e.queueName = this._queueName, await this._queueDb.addEntry(e);
  }
  /**
   * Prepend an entry first in the queue.
   *
   * @param {Object} entry
   * @param {Object} entry.requestData
   * @param {number} [entry.timestamp]
   * @param {Object} [entry.metadata]
   */
  async unshiftEntry(e) {
    const t = await this._queueDb.getFirstEntryId();
    t ? e.id = t - 1 : delete e.id, e.queueName = this._queueName, await this._queueDb.addEntry(e);
  }
  /**
   * Removes and returns the last entry in the queue matching the `queueName`.
   *
   * @return {Promise<QueueStoreEntry|undefined>}
   */
  async popEntry() {
    return this._removeEntry(await this._queueDb.getLastEntryByQueueName(this._queueName));
  }
  /**
   * Removes and returns the first entry in the queue matching the `queueName`.
   *
   * @return {Promise<QueueStoreEntry|undefined>}
   */
  async shiftEntry() {
    return this._removeEntry(await this._queueDb.getFirstEntryByQueueName(this._queueName));
  }
  /**
   * Returns all entries in the store matching the `queueName`.
   *
   * @param {Object} options See {@link workbox-background-sync.Queue~getAll}
   * @return {Promise<Array<Object>>}
   */
  async getAll() {
    return await this._queueDb.getAllEntriesByQueueName(this._queueName);
  }
  /**
   * Returns the number of entries in the store matching the `queueName`.
   *
   * @param {Object} options See {@link workbox-background-sync.Queue~size}
   * @return {Promise<number>}
   */
  async size() {
    return await this._queueDb.getEntryCountByQueueName(this._queueName);
  }
  /**
   * Deletes the entry for the given ID.
   *
   * WARNING: this method does not ensure the deleted entry belongs to this
   * queue (i.e. matches the `queueName`). But this limitation is acceptable
   * as this class is not publicly exposed. An additional check would make
   * this method slower than it needs to be.
   *
   * @param {number} id
   */
  async deleteEntry(e) {
    await this._queueDb.deleteEntry(e);
  }
  /**
   * Removes and returns the first or last entry in the queue (based on the
   * `direction` argument) matching the `queueName`.
   *
   * @return {Promise<QueueStoreEntry|undefined>}
   * @private
   */
  async _removeEntry(e) {
    return e && await this.deleteEntry(e.id), e;
  }
}
const cr = [
  "method",
  "referrer",
  "referrerPolicy",
  "mode",
  "credentials",
  "cache",
  "redirect",
  "integrity",
  "keepalive"
];
class pe {
  /**
   * Converts a Request object to a plain object that can be structured
   * cloned or JSON-stringified.
   *
   * @param {Request} request
   * @return {Promise<StorableRequest>}
   */
  static async fromRequest(e) {
    const t = {
      url: e.url,
      headers: {}
    };
    e.method !== "GET" && (t.body = await e.clone().arrayBuffer());
    for (const [s, u] of e.headers.entries())
      t.headers[s] = u;
    for (const s of cr)
      e[s] !== void 0 && (t[s] = e[s]);
    return new pe(t);
  }
  /**
   * Accepts an object of request data that can be used to construct a
   * `Request` but can also be stored in IndexedDB.
   *
   * @param {Object} requestData An object of request data that includes the
   *     `url` plus any relevant properties of
   *     [requestInit]{@link https://fetch.spec.whatwg.org/#requestinit}.
   */
  constructor(e) {
    e.mode === "navigate" && (e.mode = "same-origin"), this._requestData = e;
  }
  /**
   * Returns a deep clone of the instances `_requestData` object.
   *
   * @return {Object}
   */
  toObject() {
    const e = Object.assign({}, this._requestData);
    return e.headers = Object.assign({}, this._requestData.headers), e.body && (e.body = e.body.slice(0)), e;
  }
  /**
   * Converts this instance to a Request.
   *
   * @return {Request}
   */
  toRequest() {
    return new Request(this._requestData.url, this._requestData);
  }
  /**
   * Creates and returns a deep clone of the instance.
   *
   * @return {StorableRequest}
   */
  clone() {
    return new pe(this.toObject());
  }
}
const Ct = "workbox-background-sync", ur = 60 * 24 * 7, Fe = /* @__PURE__ */ new Set(), Dt = (a) => {
  const e = {
    request: new pe(a.requestData).toRequest(),
    timestamp: a.timestamp
  };
  return a.metadata && (e.metadata = a.metadata), e;
};
class lr {
  /**
   * Creates an instance of Queue with the given options
   *
   * @param {string} name The unique name for this queue. This name must be
   *     unique as it's used to register sync events and store requests
   *     in IndexedDB specific to this instance. An error will be thrown if
   *     a duplicate name is detected.
   * @param {Object} [options]
   * @param {Function} [options.onSync] A function that gets invoked whenever
   *     the 'sync' event fires. The function is invoked with an object
   *     containing the `queue` property (referencing this instance), and you
   *     can use the callback to customize the replay behavior of the queue.
   *     When not set the `replayRequests()` method is called.
   *     Note: if the replay fails after a sync event, make sure you throw an
   *     error, so the browser knows to retry the sync event later.
   * @param {number} [options.maxRetentionTime=7 days] The amount of time (in
   *     minutes) a request may be retried. After this amount of time has
   *     passed, the request will be deleted from the queue.
   * @param {boolean} [options.forceSyncFallback=false] If `true`, instead
   *     of attempting to use background sync events, always attempt to replay
   *     queued request at service worker startup. Most folks will not need
   *     this, unless you explicitly target a runtime like Electron that
   *     exposes the interfaces for background sync, but does not have a working
   *     implementation.
   */
  constructor(e, { forceSyncFallback: t, onSync: s, maxRetentionTime: u } = {}) {
    if (this._syncInProgress = !1, this._requestsAddedDuringSync = !1, Fe.has(e))
      throw new L("duplicate-queue-name", { name: e });
    Fe.add(e), this._name = e, this._onSync = s || this.replayRequests, this._maxRetentionTime = u || ur, this._forceSyncFallback = !!t, this._queueStore = new or(this._name), this._addSyncListener();
  }
  /**
   * @return {string}
   */
  get name() {
    return this._name;
  }
  /**
   * Stores the passed request in IndexedDB (with its timestamp and any
   * metadata) at the end of the queue.
   *
   * @param {QueueEntry} entry
   * @param {Request} entry.request The request to store in the queue.
   * @param {Object} [entry.metadata] Any metadata you want associated with the
   *     stored request. When requests are replayed you'll have access to this
   *     metadata object in case you need to modify the request beforehand.
   * @param {number} [entry.timestamp] The timestamp (Epoch time in
   *     milliseconds) when the request was first added to the queue. This is
   *     used along with `maxRetentionTime` to remove outdated requests. In
   *     general you don't need to set this value, as it's automatically set
   *     for you (defaulting to `Date.now()`), but you can update it if you
   *     don't want particular requests to expire.
   */
  async pushRequest(e) {
    await this._addRequest(e, "push");
  }
  /**
   * Stores the passed request in IndexedDB (with its timestamp and any
   * metadata) at the beginning of the queue.
   *
   * @param {QueueEntry} entry
   * @param {Request} entry.request The request to store in the queue.
   * @param {Object} [entry.metadata] Any metadata you want associated with the
   *     stored request. When requests are replayed you'll have access to this
   *     metadata object in case you need to modify the request beforehand.
   * @param {number} [entry.timestamp] The timestamp (Epoch time in
   *     milliseconds) when the request was first added to the queue. This is
   *     used along with `maxRetentionTime` to remove outdated requests. In
   *     general you don't need to set this value, as it's automatically set
   *     for you (defaulting to `Date.now()`), but you can update it if you
   *     don't want particular requests to expire.
   */
  async unshiftRequest(e) {
    await this._addRequest(e, "unshift");
  }
  /**
   * Removes and returns the last request in the queue (along with its
   * timestamp and any metadata). The returned object takes the form:
   * `{request, timestamp, metadata}`.
   *
   * @return {Promise<QueueEntry | undefined>}
   */
  async popRequest() {
    return this._removeRequest("pop");
  }
  /**
   * Removes and returns the first request in the queue (along with its
   * timestamp and any metadata). The returned object takes the form:
   * `{request, timestamp, metadata}`.
   *
   * @return {Promise<QueueEntry | undefined>}
   */
  async shiftRequest() {
    return this._removeRequest("shift");
  }
  /**
   * Returns all the entries that have not expired (per `maxRetentionTime`).
   * Any expired entries are removed from the queue.
   *
   * @return {Promise<Array<QueueEntry>>}
   */
  async getAll() {
    const e = await this._queueStore.getAll(), t = Date.now(), s = [];
    for (const u of e) {
      const f = this._maxRetentionTime * 60 * 1e3;
      t - u.timestamp > f ? await this._queueStore.deleteEntry(u.id) : s.push(Dt(u));
    }
    return s;
  }
  /**
   * Returns the number of entries present in the queue.
   * Note that expired entries (per `maxRetentionTime`) are also included in this count.
   *
   * @return {Promise<number>}
   */
  async size() {
    return await this._queueStore.size();
  }
  /**
   * Adds the entry to the QueueStore and registers for a sync event.
   *
   * @param {Object} entry
   * @param {Request} entry.request
   * @param {Object} [entry.metadata]
   * @param {number} [entry.timestamp=Date.now()]
   * @param {string} operation ('push' or 'unshift')
   * @private
   */
  async _addRequest({ request: e, metadata: t, timestamp: s = Date.now() }, u) {
    const h = {
      requestData: (await pe.fromRequest(e.clone())).toObject(),
      timestamp: s
    };
    switch (t && (h.metadata = t), u) {
      case "push":
        await this._queueStore.pushEntry(h);
        break;
      case "unshift":
        await this._queueStore.unshiftEntry(h);
        break;
    }
    this._syncInProgress ? this._requestsAddedDuringSync = !0 : await this.registerSync();
  }
  /**
   * Removes and returns the first or last (depending on `operation`) entry
   * from the QueueStore that's not older than the `maxRetentionTime`.
   *
   * @param {string} operation ('pop' or 'shift')
   * @return {Object|undefined}
   * @private
   */
  async _removeRequest(e) {
    const t = Date.now();
    let s;
    switch (e) {
      case "pop":
        s = await this._queueStore.popEntry();
        break;
      case "shift":
        s = await this._queueStore.shiftEntry();
        break;
    }
    if (s) {
      const u = this._maxRetentionTime * 60 * 1e3;
      return t - s.timestamp > u ? this._removeRequest(e) : Dt(s);
    } else
      return;
  }
  /**
   * Loops through each request in the queue and attempts to re-fetch it.
   * If any request fails to re-fetch, it's put back in the same position in
   * the queue (which registers a retry for the next sync event).
   */
  async replayRequests() {
    let e;
    for (; e = await this.shiftRequest(); )
      try {
        await fetch(e.request.clone());
      } catch {
        throw await this.unshiftRequest(e), new L("queue-replay-failed", { name: this._name });
      }
  }
  /**
   * Registers a sync event with a tag unique to this instance.
   */
  async registerSync() {
    if ("sync" in self.registration && !this._forceSyncFallback)
      try {
        await self.registration.sync.register(`${Ct}:${this._name}`);
      } catch {
      }
  }
  /**
   * In sync-supporting browsers, this adds a listener for the sync event.
   * In non-sync-supporting browsers, or if _forceSyncFallback is true, this
   * will retry the queue on service worker startup.
   *
   * @private
   */
  _addSyncListener() {
    "sync" in self.registration && !this._forceSyncFallback ? self.addEventListener("sync", (e) => {
      if (e.tag === `${Ct}:${this._name}`) {
        const t = async () => {
          this._syncInProgress = !0;
          let s;
          try {
            await this._onSync({ queue: this });
          } catch (u) {
            if (u instanceof Error)
              throw s = u, s;
          } finally {
            this._requestsAddedDuringSync && !(s && !e.lastChance) && await this.registerSync(), this._syncInProgress = !1, this._requestsAddedDuringSync = !1;
          }
        };
        e.waitUntil(t());
      }
    }) : this._onSync({ queue: this });
  }
  /**
   * Returns the set of queue names. This is primarily used to reset the list
   * of queue names in tests.
   *
   * @return {Set<string>}
   *
   * @private
   */
  static get _queueNames() {
    return Fe;
  }
}
class fr {
  /**
   * @param {string} name See the {@link workbox-background-sync.Queue}
   *     documentation for parameter details.
   * @param {Object} [options] See the
   *     {@link workbox-background-sync.Queue} documentation for
   *     parameter details.
   */
  constructor(e, t) {
    this.fetchDidFail = async ({ request: s }) => {
      await this._queue.pushRequest({ request: s });
    }, this._queue = new lr(e, t);
  }
}
try {
  self["workbox:cacheable-response:7.0.0"] && _();
} catch {
}
class hr {
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
    return this._statuses && (t = this._statuses.includes(e.status)), this._headers && t && (t = Object.keys(this._headers).some((s) => e.headers.get(s) === this._headers[s])), t;
  }
}
class Xe {
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
    this.cacheWillUpdate = async ({ response: t }) => this._cacheableResponse.isResponseCacheable(t) ? t : null, this._cacheableResponse = new hr(e);
  }
}
const G = {
  googleAnalytics: "googleAnalytics",
  precache: "precache-v2",
  prefix: "workbox",
  runtime: "runtime",
  suffix: typeof registration < "u" ? registration.scope : ""
}, We = (a) => [G.prefix, a, G.suffix].filter((e) => e && e.length > 0).join("-"), dr = (a) => {
  for (const e of Object.keys(G))
    a(e);
}, me = {
  updateDetails: (a) => {
    dr((e) => {
      typeof a[e] == "string" && (G[e] = a[e]);
    });
  },
  getGoogleAnalyticsName: (a) => a || We(G.googleAnalytics),
  getPrecacheName: (a) => a || We(G.precache),
  getPrefix: () => G.prefix,
  getRuntimeName: (a) => a || We(G.runtime),
  getSuffix: () => G.suffix
};
function Bt(a) {
  a.then(() => {
  });
}
const kt = /* @__PURE__ */ new Set();
function pr(a) {
  kt.add(a);
}
try {
  self["workbox:expiration:7.0.0"] && _();
} catch {
}
const mr = "workbox-expiration", fe = "cache-entries", Nt = (a) => {
  const e = new URL(a, location.href);
  return e.hash = "", e.href;
};
class gr {
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
    const t = e.createObjectStore(fe, { keyPath: "id" });
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
    this._upgradeDb(e), this._cacheName && nr(this._cacheName);
  }
  /**
   * @param {string} url
   * @param {number} timestamp
   *
   * @private
   */
  async setTimestamp(e, t) {
    e = Nt(e);
    const s = {
      url: e,
      timestamp: t,
      cacheName: this._cacheName,
      // Creating an ID from the URL and cache name won't be necessary once
      // Edge switches to Chromium and all browsers we support work with
      // array keyPaths.
      id: this._getId(e)
    }, f = (await this.getDb()).transaction(fe, "readwrite", {
      durability: "relaxed"
    });
    await f.store.put(s), await f.done;
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
    const s = await (await this.getDb()).get(fe, this._getId(e));
    return s == null ? void 0 : s.timestamp;
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
    const s = await this.getDb();
    let u = await s.transaction(fe).store.index("timestamp").openCursor(null, "prev");
    const f = [];
    let h = 0;
    for (; u; ) {
      const R = u.value;
      R.cacheName === this._cacheName && (e && R.timestamp < e || t && h >= t ? f.push(u.value) : h++), u = await u.continue();
    }
    const p = [];
    for (const R of f)
      await s.delete(fe, R.id), p.push(R.url);
    return p;
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
    return this._cacheName + "|" + Nt(e);
  }
  /**
   * Returns an open connection to the database.
   *
   * @private
   */
  async getDb() {
    return this._db || (this._db = await Ut(mr, 1, {
      upgrade: this._upgradeDbAndDeleteOldDbs.bind(this)
    })), this._db;
  }
}
class yr {
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
    this._isRunning = !1, this._rerunRequested = !1, this._maxEntries = t.maxEntries, this._maxAgeSeconds = t.maxAgeSeconds, this._matchOptions = t.matchOptions, this._cacheName = e, this._timestampModel = new gr(e);
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
    const e = this._maxAgeSeconds ? Date.now() - this._maxAgeSeconds * 1e3 : 0, t = await this._timestampModel.expireEntries(e, this._maxEntries), s = await self.caches.open(this._cacheName);
    for (const u of t)
      await s.delete(u, this._matchOptions);
    this._isRunning = !1, this._rerunRequested && (this._rerunRequested = !1, Bt(this.expireEntries()));
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
      const t = await this._timestampModel.getTimestamp(e), s = Date.now() - this._maxAgeSeconds * 1e3;
      return t !== void 0 ? t < s : !0;
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
class Je {
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
    this.cachedResponseWillBeUsed = async ({ event: t, request: s, cacheName: u, cachedResponse: f }) => {
      if (!f)
        return null;
      const h = this._isResponseDateFresh(f), p = this._getCacheExpiration(u);
      Bt(p.expireEntries());
      const R = p.updateTimestamp(s.url);
      if (t)
        try {
          t.waitUntil(R);
        } catch {
        }
      return h ? f : null;
    }, this.cacheDidUpdate = async ({ cacheName: t, request: s }) => {
      const u = this._getCacheExpiration(t);
      await u.updateTimestamp(s.url), await u.expireEntries();
    }, this._config = e, this._maxAgeSeconds = e.maxAgeSeconds, this._cacheExpirations = /* @__PURE__ */ new Map(), e.purgeOnQuotaError && pr(() => this.deleteCacheAndMetadata());
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
    if (e === me.getRuntimeName())
      throw new L("expire-custom-caches-only");
    let t = this._cacheExpirations.get(e);
    return t || (t = new yr(e, this._config), this._cacheExpirations.set(e, t)), t;
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
    const s = Date.now();
    return t >= s - this._maxAgeSeconds * 1e3;
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
    const t = e.headers.get("date"), u = new Date(t).getTime();
    return isNaN(u) ? null : u;
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
function Tt(a, e) {
  const t = e();
  return a.waitUntil(t), t;
}
try {
  self["workbox:precaching:7.0.0"] && _();
} catch {
}
const vr = "__WB_REVISION__";
function wr(a) {
  if (!a)
    throw new L("add-to-cache-list-unexpected-type", { entry: a });
  if (typeof a == "string") {
    const f = new URL(a, location.href);
    return {
      cacheKey: f.href,
      url: f.href
    };
  }
  const { revision: e, url: t } = a;
  if (!t)
    throw new L("add-to-cache-list-unexpected-type", { entry: a });
  if (!e) {
    const f = new URL(t, location.href);
    return {
      cacheKey: f.href,
      url: f.href
    };
  }
  const s = new URL(t, location.href), u = new URL(t, location.href);
  return s.searchParams.set(vr, e), {
    cacheKey: s.href,
    url: u.href
  };
}
class _r {
  constructor() {
    this.updatedURLs = [], this.notUpdatedURLs = [], this.handlerWillStart = async ({ request: e, state: t }) => {
      t && (t.originalRequest = e);
    }, this.cachedResponseWillBeUsed = async ({ event: e, state: t, cachedResponse: s }) => {
      if (e.type === "install" && t && t.originalRequest && t.originalRequest instanceof Request) {
        const u = t.originalRequest.url;
        s ? this.notUpdatedURLs.push(u) : this.updatedURLs.push(u);
      }
      return s;
    };
  }
}
class br {
  constructor({ precacheController: e }) {
    this.cacheKeyWillBeUsed = async ({ request: t, params: s }) => {
      const u = (s == null ? void 0 : s.cacheKey) || this._precacheController.getCacheKeyForURL(t.url);
      return u ? new Request(u, { headers: t.headers }) : t;
    }, this._precacheController = e;
  }
}
let he;
function Rr() {
  if (he === void 0) {
    const a = new Response("");
    if ("body" in a)
      try {
        new Response(a.body), he = !0;
      } catch {
        he = !1;
      }
    he = !1;
  }
  return he;
}
async function Er(a, e) {
  let t = null;
  if (a.url && (t = new URL(a.url).origin), t !== self.location.origin)
    throw new L("cross-origin-copy-response", { origin: t });
  const s = a.clone(), u = {
    headers: new Headers(s.headers),
    status: s.status,
    statusText: s.statusText
  }, f = e ? e(u) : u, h = Rr() ? s.body : await s.blob();
  return new Response(h, f);
}
function At(a, e) {
  const t = new URL(a);
  for (const s of e)
    t.searchParams.delete(s);
  return t.href;
}
async function Sr(a, e, t, s) {
  const u = At(e.url, t);
  if (e.url === u)
    return a.match(e, s);
  const f = Object.assign(Object.assign({}, s), { ignoreSearch: !0 }), h = await a.keys(e, f);
  for (const p of h) {
    const R = At(p.url, t);
    if (u === R)
      return a.match(p, s);
  }
}
class Ir {
  /**
   * Creates a promise and exposes its resolve and reject functions as methods.
   */
  constructor() {
    this.promise = new Promise((e, t) => {
      this.resolve = e, this.reject = t;
    });
  }
}
async function xr() {
  for (const a of kt)
    await a();
}
function Mt(a) {
  return new Promise((e) => setTimeout(e, a));
}
try {
  self["workbox:strategies:7.0.0"] && _();
} catch {
}
function _e(a) {
  return typeof a == "string" ? new Request(a) : a;
}
class Cr {
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
    this._cacheKeys = {}, Object.assign(this, t), this.event = t.event, this._strategy = e, this._handlerDeferred = new Ir(), this._extendLifetimePromises = [], this._plugins = [...e.plugins], this._pluginStateMap = /* @__PURE__ */ new Map();
    for (const s of this._plugins)
      this._pluginStateMap.set(s, {});
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
    let s = _e(e);
    if (s.mode === "navigate" && t instanceof FetchEvent && t.preloadResponse) {
      const h = await t.preloadResponse;
      if (h)
        return h;
    }
    const u = this.hasCallback("fetchDidFail") ? s.clone() : null;
    try {
      for (const h of this.iterateCallbacks("requestWillFetch"))
        s = await h({ request: s.clone(), event: t });
    } catch (h) {
      if (h instanceof Error)
        throw new L("plugin-error-request-will-fetch", {
          thrownErrorMessage: h.message
        });
    }
    const f = s.clone();
    try {
      let h;
      h = await fetch(s, s.mode === "navigate" ? void 0 : this._strategy.fetchOptions);
      for (const p of this.iterateCallbacks("fetchDidSucceed"))
        h = await p({
          event: t,
          request: f,
          response: h
        });
      return h;
    } catch (h) {
      throw u && await this.runCallbacks("fetchDidFail", {
        error: h,
        event: t,
        originalRequest: u.clone(),
        request: f.clone()
      }), h;
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
    const t = await this.fetch(e), s = t.clone();
    return this.waitUntil(this.cachePut(e, s)), t;
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
    const t = _e(e);
    let s;
    const { cacheName: u, matchOptions: f } = this._strategy, h = await this.getCacheKey(t, "read"), p = Object.assign(Object.assign({}, f), { cacheName: u });
    s = await caches.match(h, p);
    for (const R of this.iterateCallbacks("cachedResponseWillBeUsed"))
      s = await R({
        cacheName: u,
        matchOptions: f,
        cachedResponse: s,
        request: h,
        event: this.event
      }) || void 0;
    return s;
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
    const s = _e(e);
    await Mt(0);
    const u = await this.getCacheKey(s, "write");
    if (!t)
      throw new L("cache-put-with-no-response", {
        url: zn(u.url)
      });
    const f = await this._ensureResponseSafeToCache(t);
    if (!f)
      return !1;
    const { cacheName: h, matchOptions: p } = this._strategy, R = await self.caches.open(h), I = this.hasCallback("cacheDidUpdate"), B = I ? await Sr(
      // TODO(philipwalton): the `__WB_REVISION__` param is a precaching
      // feature. Consider into ways to only add this behavior if using
      // precaching.
      R,
      u.clone(),
      ["__WB_REVISION__"],
      p
    ) : null;
    try {
      await R.put(u, I ? f.clone() : f);
    } catch (w) {
      if (w instanceof Error)
        throw w.name === "QuotaExceededError" && await xr(), w;
    }
    for (const w of this.iterateCallbacks("cacheDidUpdate"))
      await w({
        cacheName: h,
        oldResponse: B,
        newResponse: f.clone(),
        request: u,
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
    const s = `${e.url} | ${t}`;
    if (!this._cacheKeys[s]) {
      let u = e;
      for (const f of this.iterateCallbacks("cacheKeyWillBeUsed"))
        u = _e(await f({
          mode: t,
          request: u,
          event: this.event,
          // params has a type any can't change right now.
          params: this.params
          // eslint-disable-line
        }));
      this._cacheKeys[s] = u;
    }
    return this._cacheKeys[s];
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
    for (const s of this.iterateCallbacks(e))
      await s(t);
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
        const s = this._pluginStateMap.get(t);
        yield (f) => {
          const h = Object.assign(Object.assign({}, f), { state: s });
          return t[e](h);
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
    let t = e, s = !1;
    for (const u of this.iterateCallbacks("cacheWillUpdate"))
      if (t = await u({
        request: this.request,
        response: t,
        event: this.event
      }) || void 0, s = !0, !t)
        break;
    return s || t && t.status !== 200 && (t = void 0), t;
  }
}
class ge {
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
    this.cacheName = me.getRuntimeName(e.cacheName), this.plugins = e.plugins || [], this.fetchOptions = e.fetchOptions, this.matchOptions = e.matchOptions;
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
    const t = e.event, s = typeof e.request == "string" ? new Request(e.request) : e.request, u = "params" in e ? e.params : void 0, f = new Cr(this, { event: t, request: s, params: u }), h = this._getResponse(f, s, t), p = this._awaitComplete(h, f, s, t);
    return [h, p];
  }
  async _getResponse(e, t, s) {
    await e.runCallbacks("handlerWillStart", { event: s, request: t });
    let u;
    try {
      if (u = await this._handle(t, e), !u || u.type === "error")
        throw new L("no-response", { url: t.url });
    } catch (f) {
      if (f instanceof Error) {
        for (const h of e.iterateCallbacks("handlerDidError"))
          if (u = await h({ error: f, event: s, request: t }), u)
            break;
      }
      if (!u)
        throw f;
    }
    for (const f of e.iterateCallbacks("handlerWillRespond"))
      u = await f({ event: s, request: t, response: u });
    return u;
  }
  async _awaitComplete(e, t, s, u) {
    let f, h;
    try {
      f = await e;
    } catch {
    }
    try {
      await t.runCallbacks("handlerDidRespond", {
        event: u,
        request: s,
        response: f
      }), await t.doneWaiting();
    } catch (p) {
      p instanceof Error && (h = p);
    }
    if (await t.runCallbacks("handlerDidComplete", {
      event: u,
      request: s,
      response: f,
      error: h
    }), t.destroy(), h)
      throw h;
  }
}
class ee extends ge {
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
    e.cacheName = me.getPrecacheName(e.cacheName), super(e), this._fallbackToNetwork = e.fallbackToNetwork !== !1, this.plugins.push(ee.copyRedirectedCacheableResponsesPlugin);
  }
  /**
   * @private
   * @param {Request|string} request A request to run this strategy for.
   * @param {workbox-strategies.StrategyHandler} handler The event that
   *     triggered the request.
   * @return {Promise<Response>}
   */
  async _handle(e, t) {
    const s = await t.cacheMatch(e);
    return s || (t.event && t.event.type === "install" ? await this._handleInstall(e, t) : await this._handleFetch(e, t));
  }
  async _handleFetch(e, t) {
    let s;
    const u = t.params || {};
    if (this._fallbackToNetwork) {
      const f = u.integrity, h = e.integrity, p = !h || h === f;
      s = await t.fetch(new Request(e, {
        integrity: e.mode !== "no-cors" ? h || f : void 0
      })), f && p && e.mode !== "no-cors" && (this._useDefaultCacheabilityPluginIfNeeded(), await t.cachePut(e, s.clone()));
    } else
      throw new L("missing-precache-entry", {
        cacheName: this.cacheName,
        url: e.url
      });
    return s;
  }
  async _handleInstall(e, t) {
    this._useDefaultCacheabilityPluginIfNeeded();
    const s = await t.fetch(e);
    if (!await t.cachePut(e, s.clone()))
      throw new L("bad-precaching-response", {
        url: e.url,
        status: s.status
      });
    return s;
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
    for (const [s, u] of this.plugins.entries())
      u !== ee.copyRedirectedCacheableResponsesPlugin && (u === ee.defaultPrecacheCacheabilityPlugin && (e = s), u.cacheWillUpdate && t++);
    t === 0 ? this.plugins.push(ee.defaultPrecacheCacheabilityPlugin) : t > 1 && e !== null && this.plugins.splice(e, 1);
  }
}
ee.defaultPrecacheCacheabilityPlugin = {
  async cacheWillUpdate({ response: a }) {
    return !a || a.status >= 400 ? null : a;
  }
};
ee.copyRedirectedCacheableResponsesPlugin = {
  async cacheWillUpdate({ response: a }) {
    return a.redirected ? await Er(a) : a;
  }
};
class Dr {
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
  constructor({ cacheName: e, plugins: t = [], fallbackToNetwork: s = !0 } = {}) {
    this._urlsToCacheKeys = /* @__PURE__ */ new Map(), this._urlsToCacheModes = /* @__PURE__ */ new Map(), this._cacheKeysToIntegrities = /* @__PURE__ */ new Map(), this._strategy = new ee({
      cacheName: me.getPrecacheName(e),
      plugins: [
        ...t,
        new br({ precacheController: this })
      ],
      fallbackToNetwork: s
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
    for (const s of e) {
      typeof s == "string" ? t.push(s) : s && s.revision === void 0 && t.push(s.url);
      const { cacheKey: u, url: f } = wr(s), h = typeof s != "string" && s.revision ? "reload" : "default";
      if (this._urlsToCacheKeys.has(f) && this._urlsToCacheKeys.get(f) !== u)
        throw new L("add-to-cache-list-conflicting-entries", {
          firstEntry: this._urlsToCacheKeys.get(f),
          secondEntry: u
        });
      if (typeof s != "string" && s.integrity) {
        if (this._cacheKeysToIntegrities.has(u) && this._cacheKeysToIntegrities.get(u) !== s.integrity)
          throw new L("add-to-cache-list-conflicting-integrities", {
            url: f
          });
        this._cacheKeysToIntegrities.set(u, s.integrity);
      }
      if (this._urlsToCacheKeys.set(f, u), this._urlsToCacheModes.set(f, h), t.length > 0) {
        const p = `Workbox is precaching URLs without revision info: ${t.join(", ")}
This is generally NOT safe. Learn more at https://bit.ly/wb-precache`;
        console.warn(p);
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
    return Tt(e, async () => {
      const t = new _r();
      this.strategy.plugins.push(t);
      for (const [f, h] of this._urlsToCacheKeys) {
        const p = this._cacheKeysToIntegrities.get(h), R = this._urlsToCacheModes.get(f), I = new Request(f, {
          integrity: p,
          cache: R,
          credentials: "same-origin"
        });
        await Promise.all(this.strategy.handleAll({
          params: { cacheKey: h },
          request: I,
          event: e
        }));
      }
      const { updatedURLs: s, notUpdatedURLs: u } = t;
      return { updatedURLs: s, notUpdatedURLs: u };
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
    return Tt(e, async () => {
      const t = await self.caches.open(this.strategy.cacheName), s = await t.keys(), u = new Set(this._urlsToCacheKeys.values()), f = [];
      for (const h of s)
        u.has(h.url) || (await t.delete(h), f.push(h.url));
      return { deletedURLs: f };
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
    const t = e instanceof Request ? e.url : e, s = this.getCacheKeyForURL(t);
    if (s)
      return (await self.caches.open(this.strategy.cacheName)).match(s);
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
      throw new L("non-precached-url", { url: e });
    return (s) => (s.request = new Request(e), s.params = Object.assign({ cacheKey: t }, s.params), this.strategy.handle(s));
  }
}
let Ke;
const Ze = () => (Ke || (Ke = new Dr()), Ke);
try {
  self["workbox:routing:7.0.0"] && _();
} catch {
}
const qt = "GET", Ee = (a) => a && typeof a == "object" ? a : { handle: a };
class ae {
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
  constructor(e, t, s = qt) {
    this.handler = Ee(t), this.match = e, this.method = s;
  }
  /**
   *
   * @param {workbox-routing-handlerCallback} handler A callback
   * function that returns a Promise resolving to a Response
   */
  setCatchHandler(e) {
    this.catchHandler = Ee(e);
  }
}
class Nr extends ae {
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
  constructor(e, t, s) {
    const u = ({ url: f }) => {
      const h = e.exec(f.href);
      if (h && !(f.origin !== location.origin && h.index !== 0))
        return h.slice(1);
    };
    super(u, t, s);
  }
}
class Tr {
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
      const { request: t } = e, s = this.handleRequest({ request: t, event: e });
      s && e.respondWith(s);
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
        const { payload: t } = e.data, s = Promise.all(t.urlsToCache.map((u) => {
          typeof u == "string" && (u = [u]);
          const f = new Request(...u);
          return this.handleRequest({ request: f, event: e });
        }));
        e.waitUntil(s), e.ports && e.ports[0] && s.then(() => e.ports[0].postMessage(!0));
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
    const s = new URL(e.url, location.href);
    if (!s.protocol.startsWith("http"))
      return;
    const u = s.origin === location.origin, { params: f, route: h } = this.findMatchingRoute({
      event: t,
      request: e,
      sameOrigin: u,
      url: s
    });
    let p = h && h.handler;
    const R = e.method;
    if (!p && this._defaultHandlerMap.has(R) && (p = this._defaultHandlerMap.get(R)), !p)
      return;
    let I;
    try {
      I = p.handle({ url: s, request: e, event: t, params: f });
    } catch (w) {
      I = Promise.reject(w);
    }
    const B = h && h.catchHandler;
    return I instanceof Promise && (this._catchHandler || B) && (I = I.catch(async (w) => {
      if (B)
        try {
          return await B.handle({ url: s, request: e, event: t, params: f });
        } catch (S) {
          S instanceof Error && (w = S);
        }
      if (this._catchHandler)
        return this._catchHandler.handle({ url: s, request: e, event: t });
      throw w;
    })), I;
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
  findMatchingRoute({ url: e, sameOrigin: t, request: s, event: u }) {
    const f = this._routes.get(s.method) || [];
    for (const h of f) {
      let p;
      const R = h.match({ url: e, sameOrigin: t, request: s, event: u });
      if (R)
        return p = R, (Array.isArray(p) && p.length === 0 || R.constructor === Object && // eslint-disable-line
        Object.keys(R).length === 0 || typeof R == "boolean") && (p = void 0), { route: h, params: p };
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
  setDefaultHandler(e, t = qt) {
    this._defaultHandlerMap.set(t, Ee(e));
  }
  /**
   * If a Route throws an error while handling a request, this `handler`
   * will be called and given a chance to provide a response.
   *
   * @param {workbox-routing~handlerCallback} handler A callback
   * function that returns a Promise resulting in a Response.
   */
  setCatchHandler(e) {
    this._catchHandler = Ee(e);
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
      throw new L("unregister-route-but-not-found-with-method", {
        method: e.method
      });
    const t = this._routes.get(e.method).indexOf(e);
    if (t > -1)
      this._routes.get(e.method).splice(t, 1);
    else
      throw new L("unregister-route-route-not-registered");
  }
}
let de;
const Ar = () => (de || (de = new Tr(), de.addFetchListener(), de.addCacheListener()), de);
function te(a, e, t) {
  let s;
  if (typeof a == "string") {
    const f = new URL(a, location.href), h = ({ url: p }) => p.href === f.href;
    s = new ae(h, e, t);
  } else if (a instanceof RegExp)
    s = new Nr(a, e, t);
  else if (typeof a == "function")
    s = new ae(a, e, t);
  else if (a instanceof ae)
    s = a;
  else
    throw new L("unsupported-route-type", {
      moduleName: "workbox-routing",
      funcName: "registerRoute",
      paramName: "capture"
    });
  return Ar().registerRoute(s), s;
}
function Pr(a, e = []) {
  for (const t of [...a.searchParams.keys()])
    e.some((s) => s.test(t)) && a.searchParams.delete(t);
  return a;
}
function* Lr(a, { ignoreURLParametersMatching: e = [/^utm_/, /^fbclid$/], directoryIndex: t = "index.html", cleanURLs: s = !0, urlManipulation: u } = {}) {
  const f = new URL(a, location.href);
  f.hash = "", yield f.href;
  const h = Pr(f, e);
  if (yield h.href, t && h.pathname.endsWith("/")) {
    const p = new URL(h.href);
    p.pathname += t, yield p.href;
  }
  if (s) {
    const p = new URL(h.href);
    p.pathname += ".html", yield p.href;
  }
  if (u) {
    const p = u({ url: f });
    for (const R of p)
      yield R.href;
  }
}
class Or extends ae {
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
    const s = ({ request: u }) => {
      const f = e.getURLsToCacheKeys();
      for (const h of Lr(u.url, t)) {
        const p = f.get(h);
        if (p) {
          const R = e.getIntegrityForCacheKey(p);
          return { cacheKey: p, integrity: R };
        }
      }
    };
    super(s, e.strategy);
  }
}
function Ur(a) {
  const e = Ze(), t = new Or(e, a);
  te(t);
}
const Br = "-precache-", kr = async (a, e = Br) => {
  const s = (await self.caches.keys()).filter((u) => u.includes(e) && u.includes(self.registration.scope) && u !== a);
  return await Promise.all(s.map((u) => self.caches.delete(u))), s;
};
function Mr() {
  self.addEventListener("activate", (a) => {
    const e = me.getPrecacheName();
    a.waitUntil(kr(e).then((t) => {
    }));
  });
}
function $e(a) {
  return Ze().createHandlerBoundToURL(a);
}
function qr(a) {
  Ze().precache(a);
}
function Fr(a, e) {
  qr(a), Ur(e);
}
class je extends ae {
  /**
   * If both `denylist` and `allowlist` are provided, the `denylist` will
   * take precedence and the request will not match this route.
   *
   * The regular expressions in `allowlist` and `denylist`
   * are matched against the concatenated
   * [`pathname`]{@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/pathname}
   * and [`search`]{@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/search}
   * portions of the requested URL.
   *
   * *Note*: These RegExps may be evaluated against every destination URL during
   * a navigation. Avoid using
   * [complex RegExps](https://github.com/GoogleChrome/workbox/issues/3077),
   * or else your users may see delays when navigating your site.
   *
   * @param {workbox-routing~handlerCallback} handler A callback
   * function that returns a Promise resulting in a Response.
   * @param {Object} options
   * @param {Array<RegExp>} [options.denylist] If any of these patterns match,
   * the route will not handle the request (even if a allowlist RegExp matches).
   * @param {Array<RegExp>} [options.allowlist=[/./]] If any of these patterns
   * match the URL's pathname and search parameter, the route will handle the
   * request (assuming the denylist doesn't match).
   */
  constructor(e, { allowlist: t = [/./], denylist: s = [] } = {}) {
    super((u) => this._match(u), e), this._allowlist = t, this._denylist = s;
  }
  /**
   * Routes match handler.
   *
   * @param {Object} options
   * @param {URL} options.url
   * @param {Request} options.request
   * @return {boolean}
   *
   * @private
   */
  _match({ url: e, request: t }) {
    if (t && t.mode !== "navigate")
      return !1;
    const s = e.pathname + e.search;
    for (const u of this._denylist)
      if (u.test(s))
        return !1;
    return !!this._allowlist.some((u) => u.test(s));
  }
}
class Wr extends ge {
  /**
   * @private
   * @param {Request|string} request A request to run this strategy for.
   * @param {workbox-strategies.StrategyHandler} handler The event that
   *     triggered the request.
   * @return {Promise<Response>}
   */
  async _handle(e, t) {
    let s = await t.cacheMatch(e), u;
    if (!s)
      try {
        s = await t.fetchAndCachePut(e);
      } catch (f) {
        f instanceof Error && (u = f);
      }
    if (!s)
      throw new L("no-response", { url: e.url, error: u });
    return s;
  }
}
const Ft = {
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
  cacheWillUpdate: async ({ response: a }) => a.status === 200 || a.status === 0 ? a : null
};
class Wt extends ge {
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
   * @param {number} [options.networkTimeoutSeconds] If set, any network requests
   * that fail to respond within the timeout will fallback to the cache.
   *
   * This option can be used to combat
   * "[lie-fi]{@link https://developers.google.com/web/fundamentals/performance/poor-connectivity/#lie-fi}"
   * scenarios.
   */
  constructor(e = {}) {
    super(e), this.plugins.some((t) => "cacheWillUpdate" in t) || this.plugins.unshift(Ft), this._networkTimeoutSeconds = e.networkTimeoutSeconds || 0;
  }
  /**
   * @private
   * @param {Request|string} request A request to run this strategy for.
   * @param {workbox-strategies.StrategyHandler} handler The event that
   *     triggered the request.
   * @return {Promise<Response>}
   */
  async _handle(e, t) {
    const s = [], u = [];
    let f;
    if (this._networkTimeoutSeconds) {
      const { id: R, promise: I } = this._getTimeoutPromise({ request: e, logs: s, handler: t });
      f = R, u.push(I);
    }
    const h = this._getNetworkPromise({
      timeoutId: f,
      request: e,
      logs: s,
      handler: t
    });
    u.push(h);
    const p = await t.waitUntil((async () => await t.waitUntil(Promise.race(u)) || // If Promise.race() resolved with null, it might be due to a network
    // timeout + a cache miss. If that were to happen, we'd rather wait until
    // the networkPromise resolves instead of returning null.
    // Note that it's fine to await an already-resolved promise, so we don't
    // have to check to see if it's still "in flight".
    await h)());
    if (!p)
      throw new L("no-response", { url: e.url });
    return p;
  }
  /**
   * @param {Object} options
   * @param {Request} options.request
   * @param {Array} options.logs A reference to the logs array
   * @param {Event} options.event
   * @return {Promise<Response>}
   *
   * @private
   */
  _getTimeoutPromise({ request: e, logs: t, handler: s }) {
    let u;
    return {
      promise: new Promise((h) => {
        u = setTimeout(async () => {
          h(await s.cacheMatch(e));
        }, this._networkTimeoutSeconds * 1e3);
      }),
      id: u
    };
  }
  /**
   * @param {Object} options
   * @param {number|undefined} options.timeoutId
   * @param {Request} options.request
   * @param {Array} options.logs A reference to the logs Array.
   * @param {Event} options.event
   * @return {Promise<Response>}
   *
   * @private
   */
  async _getNetworkPromise({ timeoutId: e, request: t, logs: s, handler: u }) {
    let f, h;
    try {
      h = await u.fetchAndCachePut(t);
    } catch (p) {
      p instanceof Error && (f = p);
    }
    return e && clearTimeout(e), (f || !h) && (h = await u.cacheMatch(t)), h;
  }
}
class Kr extends ge {
  /**
   * @param {Object} [options]
   * @param {Array<Object>} [options.plugins] [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
   * to use in conjunction with this caching strategy.
   * @param {Object} [options.fetchOptions] Values passed along to the
   * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
   * of [non-navigation](https://github.com/GoogleChrome/workbox/issues/1796)
   * `fetch()` requests made by this strategy.
   * @param {number} [options.networkTimeoutSeconds] If set, any network requests
   * that fail to respond within the timeout will result in a network error.
   */
  constructor(e = {}) {
    super(e), this._networkTimeoutSeconds = e.networkTimeoutSeconds || 0;
  }
  /**
   * @private
   * @param {Request|string} request A request to run this strategy for.
   * @param {workbox-strategies.StrategyHandler} handler The event that
   *     triggered the request.
   * @return {Promise<Response>}
   */
  async _handle(e, t) {
    let s, u;
    try {
      const f = [
        t.fetch(e)
      ];
      if (this._networkTimeoutSeconds) {
        const h = Mt(this._networkTimeoutSeconds * 1e3);
        f.push(h);
      }
      if (u = await Promise.race(f), !u)
        throw new Error(`Timed out the network response after ${this._networkTimeoutSeconds} seconds.`);
    } catch (f) {
      f instanceof Error && (s = f);
    }
    if (!u)
      throw new L("no-response", { url: e.url, error: s });
    return u;
  }
}
class $r extends ge {
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
    super(e), this.plugins.some((t) => "cacheWillUpdate" in t) || this.plugins.unshift(Ft);
  }
  /**
   * @private
   * @param {Request|string} request A request to run this strategy for.
   * @param {workbox-strategies.StrategyHandler} handler The event that
   *     triggered the request.
   * @return {Promise<Response>}
   */
  async _handle(e, t) {
    const s = t.fetchAndCachePut(e).catch(() => {
    });
    t.waitUntil(s);
    let u = await t.cacheMatch(e), f;
    if (!u)
      try {
        u = await s;
      } catch (h) {
        h instanceof Error && (f = h);
      }
    if (!u)
      throw new L("no-response", { url: e.url, error: f });
    return u;
  }
}
var be = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Re(a) {
  throw new Error('Could not dynamically require "' + a + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var Ye = {}, jr = {
  get exports() {
    return Ye;
  },
  set exports(a) {
    Ye = a;
  }
};
/*!
    localForage -- Offline Storage, Improved
    Version 1.10.0
    https://localforage.github.io/localForage
    (c) 2013-2017 Mozilla, Apache License 2.0
*/
(function(a, e) {
  (function(t) {
    a.exports = t();
  })(function() {
    return function t(s, u, f) {
      function h(I, B) {
        if (!u[I]) {
          if (!s[I]) {
            var w = typeof Re == "function" && Re;
            if (!B && w)
              return w(I, !0);
            if (p)
              return p(I, !0);
            var S = new Error("Cannot find module '" + I + "'");
            throw S.code = "MODULE_NOT_FOUND", S;
          }
          var O = u[I] = { exports: {} };
          s[I][0].call(O.exports, function(k) {
            var H = s[I][1][k];
            return h(H || k);
          }, O, O.exports, t, s, u, f);
        }
        return u[I].exports;
      }
      for (var p = typeof Re == "function" && Re, R = 0; R < f.length; R++)
        h(f[R]);
      return h;
    }({ 1: [function(t, s, u) {
      (function(f) {
        var h = f.MutationObserver || f.WebKitMutationObserver, p;
        if (h) {
          var R = 0, I = new h(k), B = f.document.createTextNode("");
          I.observe(B, {
            characterData: !0
          }), p = function() {
            B.data = R = ++R % 2;
          };
        } else if (!f.setImmediate && typeof f.MessageChannel < "u") {
          var w = new f.MessageChannel();
          w.port1.onmessage = k, p = function() {
            w.port2.postMessage(0);
          };
        } else
          "document" in f && "onreadystatechange" in f.document.createElement("script") ? p = function() {
            var M = f.document.createElement("script");
            M.onreadystatechange = function() {
              k(), M.onreadystatechange = null, M.parentNode.removeChild(M), M = null;
            }, f.document.documentElement.appendChild(M);
          } : p = function() {
            setTimeout(k, 0);
          };
        var S, O = [];
        function k() {
          S = !0;
          for (var M, V, q = O.length; q; ) {
            for (V = O, O = [], M = -1; ++M < q; )
              V[M]();
            q = O.length;
          }
          S = !1;
        }
        s.exports = H;
        function H(M) {
          O.push(M) === 1 && !S && p();
        }
      }).call(this, typeof be < "u" ? be : typeof self < "u" ? self : typeof window < "u" ? window : {});
    }, {}], 2: [function(t, s, u) {
      var f = t(1);
      function h() {
      }
      var p = {}, R = ["REJECTED"], I = ["FULFILLED"], B = ["PENDING"];
      s.exports = w;
      function w(b) {
        if (typeof b != "function")
          throw new TypeError("resolver must be a function");
        this.state = B, this.queue = [], this.outcome = void 0, b !== h && H(this, b);
      }
      w.prototype.catch = function(b) {
        return this.then(null, b);
      }, w.prototype.then = function(b, D) {
        if (typeof b != "function" && this.state === I || typeof D != "function" && this.state === R)
          return this;
        var C = new this.constructor(h);
        if (this.state !== B) {
          var A = this.state === I ? b : D;
          O(C, A, this.outcome);
        } else
          this.queue.push(new S(C, b, D));
        return C;
      };
      function S(b, D, C) {
        this.promise = b, typeof D == "function" && (this.onFulfilled = D, this.callFulfilled = this.otherCallFulfilled), typeof C == "function" && (this.onRejected = C, this.callRejected = this.otherCallRejected);
      }
      S.prototype.callFulfilled = function(b) {
        p.resolve(this.promise, b);
      }, S.prototype.otherCallFulfilled = function(b) {
        O(this.promise, this.onFulfilled, b);
      }, S.prototype.callRejected = function(b) {
        p.reject(this.promise, b);
      }, S.prototype.otherCallRejected = function(b) {
        O(this.promise, this.onRejected, b);
      };
      function O(b, D, C) {
        f(function() {
          var A;
          try {
            A = D(C);
          } catch (F) {
            return p.reject(b, F);
          }
          A === b ? p.reject(b, new TypeError("Cannot resolve promise with itself")) : p.resolve(b, A);
        });
      }
      p.resolve = function(b, D) {
        var C = M(k, D);
        if (C.status === "error")
          return p.reject(b, C.value);
        var A = C.value;
        if (A)
          H(b, A);
        else {
          b.state = I, b.outcome = D;
          for (var F = -1, W = b.queue.length; ++F < W; )
            b.queue[F].callFulfilled(D);
        }
        return b;
      }, p.reject = function(b, D) {
        b.state = R, b.outcome = D;
        for (var C = -1, A = b.queue.length; ++C < A; )
          b.queue[C].callRejected(D);
        return b;
      };
      function k(b) {
        var D = b && b.then;
        if (b && (typeof b == "object" || typeof b == "function") && typeof D == "function")
          return function() {
            D.apply(b, arguments);
          };
      }
      function H(b, D) {
        var C = !1;
        function A($) {
          C || (C = !0, p.reject(b, $));
        }
        function F($) {
          C || (C = !0, p.resolve(b, $));
        }
        function W() {
          D(F, A);
        }
        var K = M(W);
        K.status === "error" && A(K.value);
      }
      function M(b, D) {
        var C = {};
        try {
          C.value = b(D), C.status = "success";
        } catch (A) {
          C.status = "error", C.value = A;
        }
        return C;
      }
      w.resolve = V;
      function V(b) {
        return b instanceof this ? b : p.resolve(new this(h), b);
      }
      w.reject = q;
      function q(b) {
        var D = new this(h);
        return p.reject(D, b);
      }
      w.all = xe;
      function xe(b) {
        var D = this;
        if (Object.prototype.toString.call(b) !== "[object Array]")
          return this.reject(new TypeError("must be an array"));
        var C = b.length, A = !1;
        if (!C)
          return this.resolve([]);
        for (var F = new Array(C), W = 0, K = -1, $ = new this(h); ++K < C; )
          z(b[K], K);
        return $;
        function z(oe, ye) {
          D.resolve(oe).then(Ce, function(re) {
            A || (A = !0, p.reject($, re));
          });
          function Ce(re) {
            F[ye] = re, ++W === C && !A && (A = !0, p.resolve($, F));
          }
        }
      }
      w.race = ne;
      function ne(b) {
        var D = this;
        if (Object.prototype.toString.call(b) !== "[object Array]")
          return this.reject(new TypeError("must be an array"));
        var C = b.length, A = !1;
        if (!C)
          return this.resolve([]);
        for (var F = -1, W = new this(h); ++F < C; )
          K(b[F]);
        return W;
        function K($) {
          D.resolve($).then(function(z) {
            A || (A = !0, p.resolve(W, z));
          }, function(z) {
            A || (A = !0, p.reject(W, z));
          });
        }
      }
    }, { 1: 1 }], 3: [function(t, s, u) {
      (function(f) {
        typeof f.Promise != "function" && (f.Promise = t(2));
      }).call(this, typeof be < "u" ? be : typeof self < "u" ? self : typeof window < "u" ? window : {});
    }, { 2: 2 }], 4: [function(t, s, u) {
      var f = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
        return typeof n;
      } : function(n) {
        return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
      };
      function h(n, i) {
        if (!(n instanceof i))
          throw new TypeError("Cannot call a class as a function");
      }
      function p() {
        try {
          if (typeof indexedDB < "u")
            return indexedDB;
          if (typeof webkitIndexedDB < "u")
            return webkitIndexedDB;
          if (typeof mozIndexedDB < "u")
            return mozIndexedDB;
          if (typeof OIndexedDB < "u")
            return OIndexedDB;
          if (typeof msIndexedDB < "u")
            return msIndexedDB;
        } catch {
          return;
        }
      }
      var R = p();
      function I() {
        try {
          if (!R || !R.open)
            return !1;
          var n = typeof openDatabase < "u" && /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) && !/BlackBerry/.test(navigator.platform), i = typeof fetch == "function" && fetch.toString().indexOf("[native code") !== -1;
          return (!n || i) && typeof indexedDB < "u" && // some outdated implementations of IDB that appear on Samsung
          // and HTC Android devices <4.4 are missing IDBKeyRange
          // See: https://github.com/mozilla/localForage/issues/128
          // See: https://github.com/mozilla/localForage/issues/272
          typeof IDBKeyRange < "u";
        } catch {
          return !1;
        }
      }
      function B(n, i) {
        n = n || [], i = i || {};
        try {
          return new Blob(n, i);
        } catch (o) {
          if (o.name !== "TypeError")
            throw o;
          for (var r = typeof BlobBuilder < "u" ? BlobBuilder : typeof MSBlobBuilder < "u" ? MSBlobBuilder : typeof MozBlobBuilder < "u" ? MozBlobBuilder : WebKitBlobBuilder, c = new r(), l = 0; l < n.length; l += 1)
            c.append(n[l]);
          return c.getBlob(i.type);
        }
      }
      typeof Promise > "u" && t(3);
      var w = Promise;
      function S(n, i) {
        i && n.then(function(r) {
          i(null, r);
        }, function(r) {
          i(r);
        });
      }
      function O(n, i, r) {
        typeof i == "function" && n.then(i), typeof r == "function" && n.catch(r);
      }
      function k(n) {
        return typeof n != "string" && (console.warn(n + " used as a key, but it is not a string."), n = String(n)), n;
      }
      function H() {
        if (arguments.length && typeof arguments[arguments.length - 1] == "function")
          return arguments[arguments.length - 1];
      }
      var M = "local-forage-detect-blob-support", V = void 0, q = {}, xe = Object.prototype.toString, ne = "readonly", b = "readwrite";
      function D(n) {
        for (var i = n.length, r = new ArrayBuffer(i), c = new Uint8Array(r), l = 0; l < i; l++)
          c[l] = n.charCodeAt(l);
        return r;
      }
      function C(n) {
        return new w(function(i) {
          var r = n.transaction(M, b), c = B([""]);
          r.objectStore(M).put(c, "key"), r.onabort = function(l) {
            l.preventDefault(), l.stopPropagation(), i(!1);
          }, r.oncomplete = function() {
            var l = navigator.userAgent.match(/Chrome\/(\d+)/), o = navigator.userAgent.match(/Edge\//);
            i(o || !l || parseInt(l[1], 10) >= 43);
          };
        }).catch(function() {
          return !1;
        });
      }
      function A(n) {
        return typeof V == "boolean" ? w.resolve(V) : C(n).then(function(i) {
          return V = i, V;
        });
      }
      function F(n) {
        var i = q[n.name], r = {};
        r.promise = new w(function(c, l) {
          r.resolve = c, r.reject = l;
        }), i.deferredOperations.push(r), i.dbReady ? i.dbReady = i.dbReady.then(function() {
          return r.promise;
        }) : i.dbReady = r.promise;
      }
      function W(n) {
        var i = q[n.name], r = i.deferredOperations.pop();
        if (r)
          return r.resolve(), r.promise;
      }
      function K(n, i) {
        var r = q[n.name], c = r.deferredOperations.pop();
        if (c)
          return c.reject(i), c.promise;
      }
      function $(n, i) {
        return new w(function(r, c) {
          if (q[n.name] = q[n.name] || rt(), n.db)
            if (i)
              F(n), n.db.close();
            else
              return r(n.db);
          var l = [n.name];
          i && l.push(n.version);
          var o = R.open.apply(R, l);
          i && (o.onupgradeneeded = function(d) {
            var m = o.result;
            try {
              m.createObjectStore(n.storeName), d.oldVersion <= 1 && m.createObjectStore(M);
            } catch (g) {
              if (g.name === "ConstraintError")
                console.warn('The database "' + n.name + '" has been upgraded from version ' + d.oldVersion + " to version " + d.newVersion + ', but the storage "' + n.storeName + '" already exists.');
              else
                throw g;
            }
          }), o.onerror = function(d) {
            d.preventDefault(), c(o.error);
          }, o.onsuccess = function() {
            var d = o.result;
            d.onversionchange = function(m) {
              m.target.close();
            }, r(d), W(n);
          };
        });
      }
      function z(n) {
        return $(n, !1);
      }
      function oe(n) {
        return $(n, !0);
      }
      function ye(n, i) {
        if (!n.db)
          return !0;
        var r = !n.db.objectStoreNames.contains(n.storeName), c = n.version < n.db.version, l = n.version > n.db.version;
        if (c && (n.version !== i && console.warn('The database "' + n.name + `" can't be downgraded from version ` + n.db.version + " to version " + n.version + "."), n.version = n.db.version), l || r) {
          if (r) {
            var o = n.db.version + 1;
            o > n.version && (n.version = o);
          }
          return !0;
        }
        return !1;
      }
      function Ce(n) {
        return new w(function(i, r) {
          var c = new FileReader();
          c.onerror = r, c.onloadend = function(l) {
            var o = btoa(l.target.result || "");
            i({
              __local_forage_encoded_blob: !0,
              data: o,
              type: n.type
            });
          }, c.readAsBinaryString(n);
        });
      }
      function re(n) {
        var i = D(atob(n.data));
        return B([i], { type: n.type });
      }
      function nt(n) {
        return n && n.__local_forage_encoded_blob;
      }
      function Ht(n) {
        var i = this, r = i._initReady().then(function() {
          var c = q[i._dbInfo.name];
          if (c && c.dbReady)
            return c.dbReady;
        });
        return O(r, n, n), r;
      }
      function Vt(n) {
        F(n);
        for (var i = q[n.name], r = i.forages, c = 0; c < r.length; c++) {
          var l = r[c];
          l._dbInfo.db && (l._dbInfo.db.close(), l._dbInfo.db = null);
        }
        return n.db = null, z(n).then(function(o) {
          return n.db = o, ye(n) ? oe(n) : o;
        }).then(function(o) {
          n.db = i.db = o;
          for (var d = 0; d < r.length; d++)
            r[d]._dbInfo.db = o;
        }).catch(function(o) {
          throw K(n, o), o;
        });
      }
      function Y(n, i, r, c) {
        c === void 0 && (c = 1);
        try {
          var l = n.db.transaction(n.storeName, i);
          r(null, l);
        } catch (o) {
          if (c > 0 && (!n.db || o.name === "InvalidStateError" || o.name === "NotFoundError"))
            return w.resolve().then(function() {
              if (!n.db || o.name === "NotFoundError" && !n.db.objectStoreNames.contains(n.storeName) && n.version <= n.db.version)
                return n.db && (n.version = n.db.version + 1), oe(n);
            }).then(function() {
              return Vt(n).then(function() {
                Y(n, i, r, c - 1);
              });
            }).catch(r);
          r(o);
        }
      }
      function rt() {
        return {
          // Running localForages sharing a database.
          forages: [],
          // Shared database.
          db: null,
          // Database readiness (promise).
          dbReady: null,
          // Deferred operations on the database.
          deferredOperations: []
        };
      }
      function zt(n) {
        var i = this, r = {
          db: null
        };
        if (n)
          for (var c in n)
            r[c] = n[c];
        var l = q[r.name];
        l || (l = rt(), q[r.name] = l), l.forages.push(i), i._initReady || (i._initReady = i.ready, i.ready = Ht);
        var o = [];
        function d() {
          return w.resolve();
        }
        for (var m = 0; m < l.forages.length; m++) {
          var g = l.forages[m];
          g !== i && o.push(g._initReady().catch(d));
        }
        var y = l.forages.slice(0);
        return w.all(o).then(function() {
          return r.db = l.db, z(r);
        }).then(function(v) {
          return r.db = v, ye(r, i._defaultConfig.version) ? oe(r) : v;
        }).then(function(v) {
          r.db = l.db = v, i._dbInfo = r;
          for (var E = 0; E < y.length; E++) {
            var x = y[E];
            x !== i && (x._dbInfo.db = r.db, x._dbInfo.version = r.version);
          }
        });
      }
      function Yt(n, i) {
        var r = this;
        n = k(n);
        var c = new w(function(l, o) {
          r.ready().then(function() {
            Y(r._dbInfo, ne, function(d, m) {
              if (d)
                return o(d);
              try {
                var g = m.objectStore(r._dbInfo.storeName), y = g.get(n);
                y.onsuccess = function() {
                  var v = y.result;
                  v === void 0 && (v = null), nt(v) && (v = re(v)), l(v);
                }, y.onerror = function() {
                  o(y.error);
                };
              } catch (v) {
                o(v);
              }
            });
          }).catch(o);
        });
        return S(c, i), c;
      }
      function Qt(n, i) {
        var r = this, c = new w(function(l, o) {
          r.ready().then(function() {
            Y(r._dbInfo, ne, function(d, m) {
              if (d)
                return o(d);
              try {
                var g = m.objectStore(r._dbInfo.storeName), y = g.openCursor(), v = 1;
                y.onsuccess = function() {
                  var E = y.result;
                  if (E) {
                    var x = E.value;
                    nt(x) && (x = re(x));
                    var N = n(x, E.key, v++);
                    N !== void 0 ? l(N) : E.continue();
                  } else
                    l();
                }, y.onerror = function() {
                  o(y.error);
                };
              } catch (E) {
                o(E);
              }
            });
          }).catch(o);
        });
        return S(c, i), c;
      }
      function Gt(n, i, r) {
        var c = this;
        n = k(n);
        var l = new w(function(o, d) {
          var m;
          c.ready().then(function() {
            return m = c._dbInfo, xe.call(i) === "[object Blob]" ? A(m.db).then(function(g) {
              return g ? i : Ce(i);
            }) : i;
          }).then(function(g) {
            Y(c._dbInfo, b, function(y, v) {
              if (y)
                return d(y);
              try {
                var E = v.objectStore(c._dbInfo.storeName);
                g === null && (g = void 0);
                var x = E.put(g, n);
                v.oncomplete = function() {
                  g === void 0 && (g = null), o(g);
                }, v.onabort = v.onerror = function() {
                  var N = x.error ? x.error : x.transaction.error;
                  d(N);
                };
              } catch (N) {
                d(N);
              }
            });
          }).catch(d);
        });
        return S(l, r), l;
      }
      function Xt(n, i) {
        var r = this;
        n = k(n);
        var c = new w(function(l, o) {
          r.ready().then(function() {
            Y(r._dbInfo, b, function(d, m) {
              if (d)
                return o(d);
              try {
                var g = m.objectStore(r._dbInfo.storeName), y = g.delete(n);
                m.oncomplete = function() {
                  l();
                }, m.onerror = function() {
                  o(y.error);
                }, m.onabort = function() {
                  var v = y.error ? y.error : y.transaction.error;
                  o(v);
                };
              } catch (v) {
                o(v);
              }
            });
          }).catch(o);
        });
        return S(c, i), c;
      }
      function Jt(n) {
        var i = this, r = new w(function(c, l) {
          i.ready().then(function() {
            Y(i._dbInfo, b, function(o, d) {
              if (o)
                return l(o);
              try {
                var m = d.objectStore(i._dbInfo.storeName), g = m.clear();
                d.oncomplete = function() {
                  c();
                }, d.onabort = d.onerror = function() {
                  var y = g.error ? g.error : g.transaction.error;
                  l(y);
                };
              } catch (y) {
                l(y);
              }
            });
          }).catch(l);
        });
        return S(r, n), r;
      }
      function Zt(n) {
        var i = this, r = new w(function(c, l) {
          i.ready().then(function() {
            Y(i._dbInfo, ne, function(o, d) {
              if (o)
                return l(o);
              try {
                var m = d.objectStore(i._dbInfo.storeName), g = m.count();
                g.onsuccess = function() {
                  c(g.result);
                }, g.onerror = function() {
                  l(g.error);
                };
              } catch (y) {
                l(y);
              }
            });
          }).catch(l);
        });
        return S(r, n), r;
      }
      function en(n, i) {
        var r = this, c = new w(function(l, o) {
          if (n < 0) {
            l(null);
            return;
          }
          r.ready().then(function() {
            Y(r._dbInfo, ne, function(d, m) {
              if (d)
                return o(d);
              try {
                var g = m.objectStore(r._dbInfo.storeName), y = !1, v = g.openKeyCursor();
                v.onsuccess = function() {
                  var E = v.result;
                  if (!E) {
                    l(null);
                    return;
                  }
                  n === 0 || y ? l(E.key) : (y = !0, E.advance(n));
                }, v.onerror = function() {
                  o(v.error);
                };
              } catch (E) {
                o(E);
              }
            });
          }).catch(o);
        });
        return S(c, i), c;
      }
      function tn(n) {
        var i = this, r = new w(function(c, l) {
          i.ready().then(function() {
            Y(i._dbInfo, ne, function(o, d) {
              if (o)
                return l(o);
              try {
                var m = d.objectStore(i._dbInfo.storeName), g = m.openKeyCursor(), y = [];
                g.onsuccess = function() {
                  var v = g.result;
                  if (!v) {
                    c(y);
                    return;
                  }
                  y.push(v.key), v.continue();
                }, g.onerror = function() {
                  l(g.error);
                };
              } catch (v) {
                l(v);
              }
            });
          }).catch(l);
        });
        return S(r, n), r;
      }
      function nn(n, i) {
        i = H.apply(this, arguments);
        var r = this.config();
        n = typeof n != "function" && n || {}, n.name || (n.name = n.name || r.name, n.storeName = n.storeName || r.storeName);
        var c = this, l;
        if (!n.name)
          l = w.reject("Invalid arguments");
        else {
          var o = n.name === r.name && c._dbInfo.db, d = o ? w.resolve(c._dbInfo.db) : z(n).then(function(m) {
            var g = q[n.name], y = g.forages;
            g.db = m;
            for (var v = 0; v < y.length; v++)
              y[v]._dbInfo.db = m;
            return m;
          });
          n.storeName ? l = d.then(function(m) {
            if (m.objectStoreNames.contains(n.storeName)) {
              var g = m.version + 1;
              F(n);
              var y = q[n.name], v = y.forages;
              m.close();
              for (var E = 0; E < v.length; E++) {
                var x = v[E];
                x._dbInfo.db = null, x._dbInfo.version = g;
              }
              var N = new w(function(T, U) {
                var P = R.open(n.name, g);
                P.onerror = function(j) {
                  var ue = P.result;
                  ue.close(), U(j);
                }, P.onupgradeneeded = function() {
                  var j = P.result;
                  j.deleteObjectStore(n.storeName);
                }, P.onsuccess = function() {
                  var j = P.result;
                  j.close(), T(j);
                };
              });
              return N.then(function(T) {
                y.db = T;
                for (var U = 0; U < v.length; U++) {
                  var P = v[U];
                  P._dbInfo.db = T, W(P._dbInfo);
                }
              }).catch(function(T) {
                throw (K(n, T) || w.resolve()).catch(function() {
                }), T;
              });
            }
          }) : l = d.then(function(m) {
            F(n);
            var g = q[n.name], y = g.forages;
            m.close();
            for (var v = 0; v < y.length; v++) {
              var E = y[v];
              E._dbInfo.db = null;
            }
            var x = new w(function(N, T) {
              var U = R.deleteDatabase(n.name);
              U.onerror = function() {
                var P = U.result;
                P && P.close(), T(U.error);
              }, U.onblocked = function() {
                console.warn('dropInstance blocked for database "' + n.name + '" until all open connections are closed');
              }, U.onsuccess = function() {
                var P = U.result;
                P && P.close(), N(P);
              };
            });
            return x.then(function(N) {
              g.db = N;
              for (var T = 0; T < y.length; T++) {
                var U = y[T];
                W(U._dbInfo);
              }
            }).catch(function(N) {
              throw (K(n, N) || w.resolve()).catch(function() {
              }), N;
            });
          });
        }
        return S(l, i), l;
      }
      var rn = {
        _driver: "asyncStorage",
        _initStorage: zt,
        _support: I(),
        iterate: Qt,
        getItem: Yt,
        setItem: Gt,
        removeItem: Xt,
        clear: Jt,
        length: Zt,
        key: en,
        keys: tn,
        dropInstance: nn
      };
      function sn() {
        return typeof openDatabase == "function";
      }
      var J = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", an = "~~local_forage_type~", st = /^~~local_forage_type~([^~]+)~/, ve = "__lfsc__:", De = ve.length, Ne = "arbf", Te = "blob", at = "si08", it = "ui08", ot = "uic8", ct = "si16", ut = "si32", lt = "ur16", ft = "ui32", ht = "fl32", dt = "fl64", pt = De + Ne.length, mt = Object.prototype.toString;
      function gt(n) {
        var i = n.length * 0.75, r = n.length, c, l = 0, o, d, m, g;
        n[n.length - 1] === "=" && (i--, n[n.length - 2] === "=" && i--);
        var y = new ArrayBuffer(i), v = new Uint8Array(y);
        for (c = 0; c < r; c += 4)
          o = J.indexOf(n[c]), d = J.indexOf(n[c + 1]), m = J.indexOf(n[c + 2]), g = J.indexOf(n[c + 3]), v[l++] = o << 2 | d >> 4, v[l++] = (d & 15) << 4 | m >> 2, v[l++] = (m & 3) << 6 | g & 63;
        return y;
      }
      function Ae(n) {
        var i = new Uint8Array(n), r = "", c;
        for (c = 0; c < i.length; c += 3)
          r += J[i[c] >> 2], r += J[(i[c] & 3) << 4 | i[c + 1] >> 4], r += J[(i[c + 1] & 15) << 2 | i[c + 2] >> 6], r += J[i[c + 2] & 63];
        return i.length % 3 === 2 ? r = r.substring(0, r.length - 1) + "=" : i.length % 3 === 1 && (r = r.substring(0, r.length - 2) + "=="), r;
      }
      function on(n, i) {
        var r = "";
        if (n && (r = mt.call(n)), n && (r === "[object ArrayBuffer]" || n.buffer && mt.call(n.buffer) === "[object ArrayBuffer]")) {
          var c, l = ve;
          n instanceof ArrayBuffer ? (c = n, l += Ne) : (c = n.buffer, r === "[object Int8Array]" ? l += at : r === "[object Uint8Array]" ? l += it : r === "[object Uint8ClampedArray]" ? l += ot : r === "[object Int16Array]" ? l += ct : r === "[object Uint16Array]" ? l += lt : r === "[object Int32Array]" ? l += ut : r === "[object Uint32Array]" ? l += ft : r === "[object Float32Array]" ? l += ht : r === "[object Float64Array]" ? l += dt : i(new Error("Failed to get type for BinaryArray"))), i(l + Ae(c));
        } else if (r === "[object Blob]") {
          var o = new FileReader();
          o.onload = function() {
            var d = an + n.type + "~" + Ae(this.result);
            i(ve + Te + d);
          }, o.readAsArrayBuffer(n);
        } else
          try {
            i(JSON.stringify(n));
          } catch (d) {
            console.error("Couldn't convert value into a JSON string: ", n), i(null, d);
          }
      }
      function cn(n) {
        if (n.substring(0, De) !== ve)
          return JSON.parse(n);
        var i = n.substring(pt), r = n.substring(De, pt), c;
        if (r === Te && st.test(i)) {
          var l = i.match(st);
          c = l[1], i = i.substring(l[0].length);
        }
        var o = gt(i);
        switch (r) {
          case Ne:
            return o;
          case Te:
            return B([o], { type: c });
          case at:
            return new Int8Array(o);
          case it:
            return new Uint8Array(o);
          case ot:
            return new Uint8ClampedArray(o);
          case ct:
            return new Int16Array(o);
          case lt:
            return new Uint16Array(o);
          case ut:
            return new Int32Array(o);
          case ft:
            return new Uint32Array(o);
          case ht:
            return new Float32Array(o);
          case dt:
            return new Float64Array(o);
          default:
            throw new Error("Unkown type: " + r);
        }
      }
      var Pe = {
        serialize: on,
        deserialize: cn,
        stringToBuffer: gt,
        bufferToString: Ae
      };
      function yt(n, i, r, c) {
        n.executeSql("CREATE TABLE IF NOT EXISTS " + i.storeName + " (id INTEGER PRIMARY KEY, key unique, value)", [], r, c);
      }
      function un(n) {
        var i = this, r = {
          db: null
        };
        if (n)
          for (var c in n)
            r[c] = typeof n[c] != "string" ? n[c].toString() : n[c];
        var l = new w(function(o, d) {
          try {
            r.db = openDatabase(r.name, String(r.version), r.description, r.size);
          } catch (m) {
            return d(m);
          }
          r.db.transaction(function(m) {
            yt(m, r, function() {
              i._dbInfo = r, o();
            }, function(g, y) {
              d(y);
            });
          }, d);
        });
        return r.serializer = Pe, l;
      }
      function Z(n, i, r, c, l, o) {
        n.executeSql(r, c, l, function(d, m) {
          m.code === m.SYNTAX_ERR ? d.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?", [i.storeName], function(g, y) {
            y.rows.length ? o(g, m) : yt(g, i, function() {
              g.executeSql(r, c, l, o);
            }, o);
          }, o) : o(d, m);
        }, o);
      }
      function ln(n, i) {
        var r = this;
        n = k(n);
        var c = new w(function(l, o) {
          r.ready().then(function() {
            var d = r._dbInfo;
            d.db.transaction(function(m) {
              Z(m, d, "SELECT * FROM " + d.storeName + " WHERE key = ? LIMIT 1", [n], function(g, y) {
                var v = y.rows.length ? y.rows.item(0).value : null;
                v && (v = d.serializer.deserialize(v)), l(v);
              }, function(g, y) {
                o(y);
              });
            });
          }).catch(o);
        });
        return S(c, i), c;
      }
      function fn(n, i) {
        var r = this, c = new w(function(l, o) {
          r.ready().then(function() {
            var d = r._dbInfo;
            d.db.transaction(function(m) {
              Z(m, d, "SELECT * FROM " + d.storeName, [], function(g, y) {
                for (var v = y.rows, E = v.length, x = 0; x < E; x++) {
                  var N = v.item(x), T = N.value;
                  if (T && (T = d.serializer.deserialize(T)), T = n(T, N.key, x + 1), T !== void 0) {
                    l(T);
                    return;
                  }
                }
                l();
              }, function(g, y) {
                o(y);
              });
            });
          }).catch(o);
        });
        return S(c, i), c;
      }
      function vt(n, i, r, c) {
        var l = this;
        n = k(n);
        var o = new w(function(d, m) {
          l.ready().then(function() {
            i === void 0 && (i = null);
            var g = i, y = l._dbInfo;
            y.serializer.serialize(i, function(v, E) {
              E ? m(E) : y.db.transaction(function(x) {
                Z(x, y, "INSERT OR REPLACE INTO " + y.storeName + " (key, value) VALUES (?, ?)", [n, v], function() {
                  d(g);
                }, function(N, T) {
                  m(T);
                });
              }, function(x) {
                if (x.code === x.QUOTA_ERR) {
                  if (c > 0) {
                    d(vt.apply(l, [n, g, r, c - 1]));
                    return;
                  }
                  m(x);
                }
              });
            });
          }).catch(m);
        });
        return S(o, r), o;
      }
      function hn(n, i, r) {
        return vt.apply(this, [n, i, r, 1]);
      }
      function dn(n, i) {
        var r = this;
        n = k(n);
        var c = new w(function(l, o) {
          r.ready().then(function() {
            var d = r._dbInfo;
            d.db.transaction(function(m) {
              Z(m, d, "DELETE FROM " + d.storeName + " WHERE key = ?", [n], function() {
                l();
              }, function(g, y) {
                o(y);
              });
            });
          }).catch(o);
        });
        return S(c, i), c;
      }
      function pn(n) {
        var i = this, r = new w(function(c, l) {
          i.ready().then(function() {
            var o = i._dbInfo;
            o.db.transaction(function(d) {
              Z(d, o, "DELETE FROM " + o.storeName, [], function() {
                c();
              }, function(m, g) {
                l(g);
              });
            });
          }).catch(l);
        });
        return S(r, n), r;
      }
      function mn(n) {
        var i = this, r = new w(function(c, l) {
          i.ready().then(function() {
            var o = i._dbInfo;
            o.db.transaction(function(d) {
              Z(d, o, "SELECT COUNT(key) as c FROM " + o.storeName, [], function(m, g) {
                var y = g.rows.item(0).c;
                c(y);
              }, function(m, g) {
                l(g);
              });
            });
          }).catch(l);
        });
        return S(r, n), r;
      }
      function gn(n, i) {
        var r = this, c = new w(function(l, o) {
          r.ready().then(function() {
            var d = r._dbInfo;
            d.db.transaction(function(m) {
              Z(m, d, "SELECT key FROM " + d.storeName + " WHERE id = ? LIMIT 1", [n + 1], function(g, y) {
                var v = y.rows.length ? y.rows.item(0).key : null;
                l(v);
              }, function(g, y) {
                o(y);
              });
            });
          }).catch(o);
        });
        return S(c, i), c;
      }
      function yn(n) {
        var i = this, r = new w(function(c, l) {
          i.ready().then(function() {
            var o = i._dbInfo;
            o.db.transaction(function(d) {
              Z(d, o, "SELECT key FROM " + o.storeName, [], function(m, g) {
                for (var y = [], v = 0; v < g.rows.length; v++)
                  y.push(g.rows.item(v).key);
                c(y);
              }, function(m, g) {
                l(g);
              });
            });
          }).catch(l);
        });
        return S(r, n), r;
      }
      function vn(n) {
        return new w(function(i, r) {
          n.transaction(function(c) {
            c.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'", [], function(l, o) {
              for (var d = [], m = 0; m < o.rows.length; m++)
                d.push(o.rows.item(m).name);
              i({
                db: n,
                storeNames: d
              });
            }, function(l, o) {
              r(o);
            });
          }, function(c) {
            r(c);
          });
        });
      }
      function wn(n, i) {
        i = H.apply(this, arguments);
        var r = this.config();
        n = typeof n != "function" && n || {}, n.name || (n.name = n.name || r.name, n.storeName = n.storeName || r.storeName);
        var c = this, l;
        return n.name ? l = new w(function(o) {
          var d;
          n.name === r.name ? d = c._dbInfo.db : d = openDatabase(n.name, "", "", 0), n.storeName ? o({
            db: d,
            storeNames: [n.storeName]
          }) : o(vn(d));
        }).then(function(o) {
          return new w(function(d, m) {
            o.db.transaction(function(g) {
              function y(N) {
                return new w(function(T, U) {
                  g.executeSql("DROP TABLE IF EXISTS " + N, [], function() {
                    T();
                  }, function(P, j) {
                    U(j);
                  });
                });
              }
              for (var v = [], E = 0, x = o.storeNames.length; E < x; E++)
                v.push(y(o.storeNames[E]));
              w.all(v).then(function() {
                d();
              }).catch(function(N) {
                m(N);
              });
            }, function(g) {
              m(g);
            });
          });
        }) : l = w.reject("Invalid arguments"), S(l, i), l;
      }
      var _n = {
        _driver: "webSQLStorage",
        _initStorage: un,
        _support: sn(),
        iterate: fn,
        getItem: ln,
        setItem: hn,
        removeItem: dn,
        clear: pn,
        length: mn,
        key: gn,
        keys: yn,
        dropInstance: wn
      };
      function bn() {
        try {
          return typeof localStorage < "u" && "setItem" in localStorage && // in IE8 typeof localStorage.setItem === 'object'
          !!localStorage.setItem;
        } catch {
          return !1;
        }
      }
      function wt(n, i) {
        var r = n.name + "/";
        return n.storeName !== i.storeName && (r += n.storeName + "/"), r;
      }
      function Rn() {
        var n = "_localforage_support_test";
        try {
          return localStorage.setItem(n, !0), localStorage.removeItem(n), !1;
        } catch {
          return !0;
        }
      }
      function En() {
        return !Rn() || localStorage.length > 0;
      }
      function Sn(n) {
        var i = this, r = {};
        if (n)
          for (var c in n)
            r[c] = n[c];
        return r.keyPrefix = wt(n, i._defaultConfig), En() ? (i._dbInfo = r, r.serializer = Pe, w.resolve()) : w.reject();
      }
      function In(n) {
        var i = this, r = i.ready().then(function() {
          for (var c = i._dbInfo.keyPrefix, l = localStorage.length - 1; l >= 0; l--) {
            var o = localStorage.key(l);
            o.indexOf(c) === 0 && localStorage.removeItem(o);
          }
        });
        return S(r, n), r;
      }
      function xn(n, i) {
        var r = this;
        n = k(n);
        var c = r.ready().then(function() {
          var l = r._dbInfo, o = localStorage.getItem(l.keyPrefix + n);
          return o && (o = l.serializer.deserialize(o)), o;
        });
        return S(c, i), c;
      }
      function Cn(n, i) {
        var r = this, c = r.ready().then(function() {
          for (var l = r._dbInfo, o = l.keyPrefix, d = o.length, m = localStorage.length, g = 1, y = 0; y < m; y++) {
            var v = localStorage.key(y);
            if (v.indexOf(o) === 0) {
              var E = localStorage.getItem(v);
              if (E && (E = l.serializer.deserialize(E)), E = n(E, v.substring(d), g++), E !== void 0)
                return E;
            }
          }
        });
        return S(c, i), c;
      }
      function Dn(n, i) {
        var r = this, c = r.ready().then(function() {
          var l = r._dbInfo, o;
          try {
            o = localStorage.key(n);
          } catch {
            o = null;
          }
          return o && (o = o.substring(l.keyPrefix.length)), o;
        });
        return S(c, i), c;
      }
      function Nn(n) {
        var i = this, r = i.ready().then(function() {
          for (var c = i._dbInfo, l = localStorage.length, o = [], d = 0; d < l; d++) {
            var m = localStorage.key(d);
            m.indexOf(c.keyPrefix) === 0 && o.push(m.substring(c.keyPrefix.length));
          }
          return o;
        });
        return S(r, n), r;
      }
      function Tn(n) {
        var i = this, r = i.keys().then(function(c) {
          return c.length;
        });
        return S(r, n), r;
      }
      function An(n, i) {
        var r = this;
        n = k(n);
        var c = r.ready().then(function() {
          var l = r._dbInfo;
          localStorage.removeItem(l.keyPrefix + n);
        });
        return S(c, i), c;
      }
      function Pn(n, i, r) {
        var c = this;
        n = k(n);
        var l = c.ready().then(function() {
          i === void 0 && (i = null);
          var o = i;
          return new w(function(d, m) {
            var g = c._dbInfo;
            g.serializer.serialize(i, function(y, v) {
              if (v)
                m(v);
              else
                try {
                  localStorage.setItem(g.keyPrefix + n, y), d(o);
                } catch (E) {
                  (E.name === "QuotaExceededError" || E.name === "NS_ERROR_DOM_QUOTA_REACHED") && m(E), m(E);
                }
            });
          });
        });
        return S(l, r), l;
      }
      function Ln(n, i) {
        if (i = H.apply(this, arguments), n = typeof n != "function" && n || {}, !n.name) {
          var r = this.config();
          n.name = n.name || r.name, n.storeName = n.storeName || r.storeName;
        }
        var c = this, l;
        return n.name ? l = new w(function(o) {
          n.storeName ? o(wt(n, c._defaultConfig)) : o(n.name + "/");
        }).then(function(o) {
          for (var d = localStorage.length - 1; d >= 0; d--) {
            var m = localStorage.key(d);
            m.indexOf(o) === 0 && localStorage.removeItem(m);
          }
        }) : l = w.reject("Invalid arguments"), S(l, i), l;
      }
      var On = {
        _driver: "localStorageWrapper",
        _initStorage: Sn,
        _support: bn(),
        iterate: Cn,
        getItem: xn,
        setItem: Pn,
        removeItem: An,
        clear: In,
        length: Tn,
        key: Dn,
        keys: Nn,
        dropInstance: Ln
      }, Un = function(i, r) {
        return i === r || typeof i == "number" && typeof r == "number" && isNaN(i) && isNaN(r);
      }, Bn = function(i, r) {
        for (var c = i.length, l = 0; l < c; ) {
          if (Un(i[l], r))
            return !0;
          l++;
        }
        return !1;
      }, _t = Array.isArray || function(n) {
        return Object.prototype.toString.call(n) === "[object Array]";
      }, ce = {}, bt = {}, se = {
        INDEXEDDB: rn,
        WEBSQL: _n,
        LOCALSTORAGE: On
      }, kn = [se.INDEXEDDB._driver, se.WEBSQL._driver, se.LOCALSTORAGE._driver], we = ["dropInstance"], Le = ["clear", "getItem", "iterate", "key", "keys", "length", "removeItem", "setItem"].concat(we), Mn = {
        description: "",
        driver: kn.slice(),
        name: "localforage",
        // Default DB size is _JUST UNDER_ 5MB, as it's the highest size
        // we can use without a prompt.
        size: 4980736,
        storeName: "keyvaluepairs",
        version: 1
      };
      function qn(n, i) {
        n[i] = function() {
          var r = arguments;
          return n.ready().then(function() {
            return n[i].apply(n, r);
          });
        };
      }
      function Oe() {
        for (var n = 1; n < arguments.length; n++) {
          var i = arguments[n];
          if (i)
            for (var r in i)
              i.hasOwnProperty(r) && (_t(i[r]) ? arguments[0][r] = i[r].slice() : arguments[0][r] = i[r]);
        }
        return arguments[0];
      }
      var Fn = function() {
        function n(i) {
          h(this, n);
          for (var r in se)
            if (se.hasOwnProperty(r)) {
              var c = se[r], l = c._driver;
              this[r] = l, ce[l] || this.defineDriver(c);
            }
          this._defaultConfig = Oe({}, Mn), this._config = Oe({}, this._defaultConfig, i), this._driverSet = null, this._initDriver = null, this._ready = !1, this._dbInfo = null, this._wrapLibraryMethodsWithReady(), this.setDriver(this._config.driver).catch(function() {
          });
        }
        return n.prototype.config = function(r) {
          if ((typeof r > "u" ? "undefined" : f(r)) === "object") {
            if (this._ready)
              return new Error("Can't call config() after localforage has been used.");
            for (var c in r) {
              if (c === "storeName" && (r[c] = r[c].replace(/\W/g, "_")), c === "version" && typeof r[c] != "number")
                return new Error("Database version must be a number.");
              this._config[c] = r[c];
            }
            return "driver" in r && r.driver ? this.setDriver(this._config.driver) : !0;
          } else
            return typeof r == "string" ? this._config[r] : this._config;
        }, n.prototype.defineDriver = function(r, c, l) {
          var o = new w(function(d, m) {
            try {
              var g = r._driver, y = new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");
              if (!r._driver) {
                m(y);
                return;
              }
              for (var v = Le.concat("_initStorage"), E = 0, x = v.length; E < x; E++) {
                var N = v[E], T = !Bn(we, N);
                if ((T || r[N]) && typeof r[N] != "function") {
                  m(y);
                  return;
                }
              }
              var U = function() {
                for (var ue = function($n) {
                  return function() {
                    var jn = new Error("Method " + $n + " is not implemented by the current driver"), Rt = w.reject(jn);
                    return S(Rt, arguments[arguments.length - 1]), Rt;
                  };
                }, Ue = 0, Kn = we.length; Ue < Kn; Ue++) {
                  var Be = we[Ue];
                  r[Be] || (r[Be] = ue(Be));
                }
              };
              U();
              var P = function(ue) {
                ce[g] && console.info("Redefining LocalForage driver: " + g), ce[g] = r, bt[g] = ue, d();
              };
              "_support" in r ? r._support && typeof r._support == "function" ? r._support().then(P, m) : P(!!r._support) : P(!0);
            } catch (j) {
              m(j);
            }
          });
          return O(o, c, l), o;
        }, n.prototype.driver = function() {
          return this._driver || null;
        }, n.prototype.getDriver = function(r, c, l) {
          var o = ce[r] ? w.resolve(ce[r]) : w.reject(new Error("Driver not found."));
          return O(o, c, l), o;
        }, n.prototype.getSerializer = function(r) {
          var c = w.resolve(Pe);
          return O(c, r), c;
        }, n.prototype.ready = function(r) {
          var c = this, l = c._driverSet.then(function() {
            return c._ready === null && (c._ready = c._initDriver()), c._ready;
          });
          return O(l, r, r), l;
        }, n.prototype.setDriver = function(r, c, l) {
          var o = this;
          _t(r) || (r = [r]);
          var d = this._getSupportedDrivers(r);
          function m() {
            o._config.driver = o.driver();
          }
          function g(E) {
            return o._extend(E), m(), o._ready = o._initStorage(o._config), o._ready;
          }
          function y(E) {
            return function() {
              var x = 0;
              function N() {
                for (; x < E.length; ) {
                  var T = E[x];
                  return x++, o._dbInfo = null, o._ready = null, o.getDriver(T).then(g).catch(N);
                }
                m();
                var U = new Error("No available storage method found.");
                return o._driverSet = w.reject(U), o._driverSet;
              }
              return N();
            };
          }
          var v = this._driverSet !== null ? this._driverSet.catch(function() {
            return w.resolve();
          }) : w.resolve();
          return this._driverSet = v.then(function() {
            var E = d[0];
            return o._dbInfo = null, o._ready = null, o.getDriver(E).then(function(x) {
              o._driver = x._driver, m(), o._wrapLibraryMethodsWithReady(), o._initDriver = y(d);
            });
          }).catch(function() {
            m();
            var E = new Error("No available storage method found.");
            return o._driverSet = w.reject(E), o._driverSet;
          }), O(this._driverSet, c, l), this._driverSet;
        }, n.prototype.supports = function(r) {
          return !!bt[r];
        }, n.prototype._extend = function(r) {
          Oe(this, r);
        }, n.prototype._getSupportedDrivers = function(r) {
          for (var c = [], l = 0, o = r.length; l < o; l++) {
            var d = r[l];
            this.supports(d) && c.push(d);
          }
          return c;
        }, n.prototype._wrapLibraryMethodsWithReady = function() {
          for (var r = 0, c = Le.length; r < c; r++)
            qn(this, Le[r]);
        }, n.prototype.createInstance = function(r) {
          return new n(r);
        }, n;
      }(), Wn = new Fn();
      s.exports = Wn;
    }, { 3: 3 }] }, {}, [4])(4);
  });
})(jr);
const Se = Ye, Hr = {
  clientBuild: "20231214.1"
}, Vr = "sw-ignite2023", zr = () => Se.config({
  driver: Se.INDEXEDDB,
  name: Vr
}), Kt = "activeVersion", Yr = () => Se.getItem(Kt), Qr = () => Se.setItem(Kt, Hr), et = {
  init: zr,
  getActiveVersion: Yr,
  setCurrentVersionAsActive: Qr
}, Pt = 1 * 1e3;
let Qe = !1, Ie;
const Gr = () => {
  console.log("[sw] call skipWaiting"), self.skipWaiting(), console.log("[sw] set skipWaiting interval", { interval: Pt }), Ie = setInterval(() => {
    console.log("[sw] call skipWaiting in interval"), self.skipWaiting();
  }, Pt);
}, Xr = () => {
  Qe = !0, Gr();
}, Jr = (a) => {
  if (console.log("[sw] onInstall"), !self.registration.active) {
    console.log(
      "[sw] no currently active service worker, we don't need to do any force update"
    );
    return;
  }
  const e = async () => {
    await et.getActiveVersion() || (console.log(
      "[sw] force update because no previous active version found"
    ), Xr());
  };
  a.waitUntil(e());
}, Zr = async () => {
  (await self.clients.matchAll({ type: "window" })).forEach((e) => e.navigate(e.url));
}, es = () => {
  Ie && (console.log("[sw] clear skipWaiting interval"), clearInterval(Ie));
}, ts = async (a) => {
  console.log("[sw] onActivate", {
    reloadOnActivate: Qe,
    skipWaitingInterval: Ie
  }), es(), a.waitUntil(et.setCurrentVersionAsActive()), Qe && (a.waitUntil(self.clients.claim()), await Zr());
}, ns = () => {
  self.addEventListener("install", Jr), self.addEventListener("activate", ts);
}, rs = (a) => (a == null ? void 0 : a.type) === "SKIP_WAITING", ss = (a) => (a == null ? void 0 : a.type) === "UNREGISTER", as = (a) => (a == null ? void 0 : a.type) === "CLEAR_CACHE", is = (a) => {
  var t;
  const e = (t = a.data) == null ? void 0 : t.json();
  e && a.waitUntil(
    self.registration.showNotification(e.title, e.options)
  );
}, os = () => {
  self.addEventListener("push", is);
};
et.init();
const tt = 24 * 60 * 60, $t = tt * 30, cs = tt * 365;
ns();
os();
Mr();
Fr([{"revision":"a7fde2f737989d01c355e56818249df4","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/0037baca.js"},{"revision":"2a324d254d602c796d57ec5681210bea","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/008cf5e7.js"},{"revision":"88cfac97cd5851da8996dbdc48a85156","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/00c6b419.js"},{"revision":"05ee2c6528864ccb48ccc9377cb52543","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/01ec59a2.js"},{"revision":"9def768058185008dfd4ddf25fe3d580","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/02315bbd.js"},{"revision":"7f4a0bd4d90973d043ff300a4dacf19a","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/02c3aaa1.js"},{"revision":"1f956b68498d7ddc041db7a4cd4b1313","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/02f08ba7.js"},{"revision":"a461cea9b65252a334a25076977653b6","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/02f1f7c9.js"},{"revision":"7eaa91cae4b31356f0a4b634c8de0c81","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/04b46206.js"},{"revision":"c9b49bc763f57a272e0e08700d130633","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/05ba78d3.js"},{"revision":"1bef76fb290219d48fac24c5d3782fa6","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/06031707.js"},{"revision":"89433594228a4aff0cc44df9ebae64c9","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/0bad428b.js"},{"revision":"606ca36aef6fafb962b635e45e428900","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/0c2ab118.js"},{"revision":"428d804d41b643d4fb9307f5468873d8","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/0d626f20.js"},{"revision":"ad054205b5b4f533633186b2c8fe412b","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/0d8e7f73.js"},{"revision":"21bdee7c055d133b73f612934e927333","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/0e22b1c7.js"},{"revision":"e8699fccc9e3af8a0a888a65c1b3f33c","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/0e6a5141.js"},{"revision":"6cf58e7c25c9cb7819e4ead94a695d58","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/0ea452a8.js"},{"revision":"50c931230d8a2870a58bc39dd2437781","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/0f8d4d38.js"},{"revision":"39f24128c47596366bdb14f1617df6f8","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/10437895.js"},{"revision":"99b4236c8ec0c3e9f485caf9967c4963","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/11a579da.js"},{"revision":"2c5d71e712d4b6dd8bb61021b898f151","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/12cb21b5.js"},{"revision":"f19b1671f130c8532c87fa14fe1b5868","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/136be11b.js"},{"revision":"3ec0f4b52d47a2066b4815b5aac691f1","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/1450f3b8.js"},{"revision":"ad73e293920555b4177e3c8617daa8fa","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/15b9ff4b.js"},{"revision":"ef38e827585d6e9d6fea823cf01f8ee2","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/16dab8b1.js"},{"revision":"ca3b92863aa50e57836355c6bb4f2a96","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/18094b44.js"},{"revision":"7765e52444857cb3de802fcc0c3d7377","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/191525a4.js"},{"revision":"e0814d09190a20f7b8bcded07fb48c30","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/1af0589d.js"},{"revision":"f4cef633a9687b65d8bf2176c11da6ad","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/1d41d98f.js"},{"revision":"c7cd33a027d26d089d0c3109d1dcb890","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/1df18726.js"},{"revision":"fc028b068f5f68bb3ae8383b92aa86a9","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/1ef3370e.js"},{"revision":"82e0c9efdfb6fb42c3f6e95d849737a8","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/207afa2b.js"},{"revision":"81286153279f03eed6254a00826855c7","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/20fefa28.js"},{"revision":"fb51d258d33e15419508deaa30eb2449","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/217376e6.js"},{"revision":"09d071426c6b902985627c4f77acf2f0","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/21886afb.js"},{"revision":"b004abe1a556c4e6f0c3f95807d7ce00","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/21b6d816.js"},{"revision":"a219a077106700342a85913272f0e43c","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/2543ae76.js"},{"revision":"31a7cb7aca7a3aa48f3a5b6b64ed627a","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/26b83a32.js"},{"revision":"8a3a7a7bd082aa2bd89c1fc2dc9ce21e","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/27aefbeb.js"},{"revision":"e037a6bfc0b1532c666c48a11e29a878","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/2badbb2b.js"},{"revision":"b7df46effe45dec8d17e8cbe50c112c1","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/2bc8eef7.js"},{"revision":"24b8d67b54b28aaf9dc767ae5cb78464","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/2bd7e847.js"},{"revision":"79fed1a1620283c5e7054f64b4a3a0cf","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/2da4b65e.js"},{"revision":"ea5037af0ca64633f1f04055201dc88b","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/2eb74995.js"},{"revision":"e71f3993f6a1f98aa7fd7c47c680818a","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/2ef8019e.js"},{"revision":"ca3b92863aa50e57836355c6bb4f2a96","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/2f3a7556.js"},{"revision":"f42e62c3f34f804d796d34a3bbadb5a6","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/30198ffe.js"},{"revision":"01b214fd841f06f3553b2c725aaa4983","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/307c4b6c.js"},{"revision":"03cfb0da5d26e3a5a972a90c804a96cd","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/31720ece.js"},{"revision":"b68a86b92e562d795244f35ce50b7a20","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/326a23f9.js"},{"revision":"003de6e4e78abe444fef9d7c1e0d3cf4","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/33373851.js"},{"revision":"e9211fdb5f59dd0b7de5c4959a16d4d5","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/33c7ae3d.js"},{"revision":"7773b61fa8fbbbae9479d542a95508e3","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/354a45bd.js"},{"revision":"7594862c1c5ab33cdc6ba921e403f4b6","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/36029b66.js"},{"revision":"ad09cb9b9918c93d15e064e1934eba31","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/394453ee.js"},{"revision":"10fcb2614d9b6fef9d49b2fceafae468","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/3a06b696.js"},{"revision":"21e3f705c40ba973888d2f0ff497c166","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/3b27ae4d.js"},{"revision":"4b501b77e9bad5d21a3e9edcdc4ad329","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/3b363493.js"},{"revision":"0e6dfd9b89fb6634db12260abbdc1c58","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/3b7de414.js"},{"revision":"617ac7c291c1901296ab92531c028e77","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/3d142519.js"},{"revision":"e6c8c5b443f27d7c1b6c29218c0fb48f","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/3d5c2678.js"},{"revision":"3eb0f512c82504d53569a4e533e1e1d7","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/3eb65b2b.js"},{"revision":"487ae94f6a34e9c37f21d741ebd8bacc","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/401fcbdc.js"},{"revision":"0e7b2a653c957bdc414da4a38859e33f","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/4030ef6a.js"},{"revision":"660d0fd26b92d9184febcc839e6224a7","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/404b8c84.js"},{"revision":"b76699a764c0861b04f1d9143e1661b9","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/40a2c2e8.js"},{"revision":"d87d29fc11ba7a83516591410d7d0fcc","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/40c670bc.js"},{"revision":"ea4a6afc46fee6d2a3536ae52321dd44","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/417051bf.js"},{"revision":"5c27531ca1c66c7c4a4e11200a689d81","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/4398b02e.js"},{"revision":"8edf5b19a310edcff7ae7f7fc7a4ba71","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/44043bc5.js"},{"revision":"ab890d9b470cd2713fd7ecd037907fca","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/444cfa48.js"},{"revision":"4177c9f3f302e39dfda8f61de94022cd","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/44925d1c.js"},{"revision":"0eecca2202af1a0a4618f45f0ac816cd","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/45b52750.js"},{"revision":"7dd2aaf2c996ab4a2f91d6f86c19ffc2","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/462125da.js"},{"revision":"d12abe87abb30cca10e004a63b033fc5","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/46f70185.js"},{"revision":"c695d198e61f502951d63e06467d2565","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/47742c17.js"},{"revision":"6bbe9874d597358012d2f053b922a379","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/48a35c56.js"},{"revision":"9b9c1e6c1cfb7e095a82d08b3818089e","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/4977813d.js"},{"revision":"b4ac11a2dbc1790ed990d64d6b9823d0","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/49afa12e.js"},{"revision":"946d8392347e4fec1095a220715e567b","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/49fddf32.js"},{"revision":"0eecca2202af1a0a4618f45f0ac816cd","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/4a1c01cc.js"},{"revision":"c56d898da6a00afa06e32e668f76e2b2","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/4b76bd19.js"},{"revision":"3edc741bab76adc8b62428d47674db78","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/4d3e2206.js"},{"revision":"de18157aa72793ec56370c435d3138e5","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/4ed43a0b.js"},{"revision":"c85c32d9729dece47bbea5f71afc800b","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/4f374dd0.js"},{"revision":"6ed17f104ba3b3250b92205395ed8db8","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/5017b534.js"},{"revision":"011d8cdc37f776444410b86340f42d11","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/51bcf648.js"},{"revision":"400dbea2e5042979def7bfa8f1e45e1d","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/51d07edf.js"},{"revision":"3d5d782c5a9b5ae466fe17963176c304","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/52004dac.js"},{"revision":"580dd2ae724bc168dbc193da07dfb6a6","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/524b7794.js"},{"revision":"0fa6dd65fccfd234322cc7a6c6fcef9f","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/528b5e18.js"},{"revision":"c25b7f5d00935a385d3f70b0675975bc","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/535321c7.js"},{"revision":"f8f12686cd1fa851816c099c257f549c","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/5657fddf.js"},{"revision":"030bb7969f6ea57446ca2a72eddc5bf6","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/56a49dd9.js"},{"revision":"06f87112d4f5efc58ede0c750bdbc86c","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/57905225.js"},{"revision":"9072c82e65576c48ffecce7c92b81443","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/586f5d38.js"},{"revision":"273f3623f31a0643d0e1187c8eb20ef9","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/5ae96119.js"},{"revision":"54659417ebac855ff1d45dab5b10e32c","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/5aefffa8.js"},{"revision":"db5022e941fc873f290424925da5deef","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/5bae536b.js"},{"revision":"5f7ae7ef1e5fcfbaa01871382b552832","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/5ce218ab.js"},{"revision":"fd30d5039fa6d3acc537efc75bfbbd0d","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/5d007230.js"},{"revision":"0adfec683a6700c4a521c088c265c46d","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/5da094b1.js"},{"revision":"0a53fa74eb9f3b3de90159aec8c1c78f","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/5db825dd.js"},{"revision":"0fdc14edd66d8eb6b17aa11d53571a4c","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/5dbf7f95.js"},{"revision":"d850b82dc234ab568d2d816851a94a34","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/5dce4b24.js"},{"revision":"f1bd4027c1036016b3f4317ce20ec140","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/5dd718e1.js"},{"revision":"33b30e79c9b1623b48f555286447c003","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/5e9b1a97.js"},{"revision":"1b4d3b05b77deb78e9fa0cca45775331","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/5f4cc90a.js"},{"revision":"15e2325cadddedc7aee62eea64bc14ce","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/5ff14241.js"},{"revision":"904821d6d044f53cb1973e7dd9812ebf","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/6037081c.js"},{"revision":"4ea33249bb9ec1014c3aee62637c083c","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/64368cb1.js"},{"revision":"145ea37aeca4a05e310d5aa03f2af186","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/646f33fe.js"},{"revision":"19fe1e7217d56354ce4df41ad159941a","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/651ee60f.js"},{"revision":"f22fa79b7687a612473bb0c0d25cb540","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/6922a339.js"},{"revision":"78ccf9e7eabf4b38c6dfaf54f86fb226","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/69cfb6c9.js"},{"revision":"7ccf885bf43ec41c5e44b9819fc6cf45","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/6c141881.js"},{"revision":"3fe633b3fcc1055c5f76e5e7eb0e7c66","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/6d4b9065.js"},{"revision":"449f3d41baf1117c7e8c07f8938d6c63","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/7003ea76.js"},{"revision":"e8fd0722e72563ef0a4de98a4dd05d0c","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/720dfd5a.js"},{"revision":"a5d0a4d05e0b2d9ddb39c01c098f2f27","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/7238a21d.js"},{"revision":"be6c2047b2bbe76674eaddaa21f77503","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/756a20b6.js"},{"revision":"89ab1768269909e956e92948dd74a8fc","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/75a813c2.js"},{"revision":"9d79477ee5d3df198fc7ad1cb99dc5b6","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/76eb9f0f.js"},{"revision":"c9b6e2598abeba74f8f46ea171faa659","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/79165c13.js"},{"revision":"42a44f0fe8a901ad1cad1e1bf4bdb455","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/79b53597.js"},{"revision":"f4e9385d84fee69eb071a2169fcd52df","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/7a330db1.js"},{"revision":"f3b8bf29b03004211488ee630134858f","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/7ade235b.js"},{"revision":"db1964c4ff293e1c628e2b4bda5e5aad","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/7afb15ba.js"},{"revision":"199f9c13b980dcbae471ca3e2a5b53ac","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/7b317e1a.js"},{"revision":"188334003601d030500e6f4433f904cf","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/7cbb7fd1.js"},{"revision":"abf8226bc7d10733ea9c9ea2abbc41d3","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/7e30537c.js"},{"revision":"944e5441f6ab4216cef977938091df0d","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/7e6afba2.js"},{"revision":"30607e90a18a6d8277742fc775d340c1","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/80e4acc8.js"},{"revision":"82c6c3faa11f9e4eb139c338d4409c0a","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/81a8e593.js"},{"revision":"dd26893b8847119729b454a642b2d57a","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/81e2ee6c.js"},{"revision":"67cbef69c1fdf880cf7f2642fd482042","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/82101fc4.js"},{"revision":"eb5186604b38076748a89f1fcf4e1c38","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/82b37247.js"},{"revision":"6043c1bb4ae91c5c09792090dda1fadf","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/857cb1a6.js"},{"revision":"c6f52165f8f56131e7e5528e7b867d50","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/880f3b73.js"},{"revision":"2f1139ce23c6a76cf0ef7eab97a02c87","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/881ae535.js"},{"revision":"39f835f1db55b691f4584b7e7a74795b","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/88a6c639.js"},{"revision":"e4f51a3a1acf58b2243510eadab104f0","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/89517e24.js"},{"revision":"bb01b9c292edd46a22d5ea4a5695e380","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/89602c94.js"},{"revision":"96dfa439b353a1713d205c681229370e","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/89a0dd84.js"},{"revision":"bf804ef06768f12bb791d7e5e8c043fe","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/89dfbb6b.js"},{"revision":"93a3cf56f8b9352f9a75bf8de94fa553","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/8a95a618.js"},{"revision":"65d25bcd265056849c275bb9c21e22a6","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/8b7c7efe.js"},{"revision":"4332eb45a5779f1c7826f896568cab4a","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/8dc294cf.js"},{"revision":"87af9f7cae9a1e20ecee3e45ccb4eb9b","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/8e0fb1ac.js"},{"revision":"bb0d9f84b510bb7f8570093314cc6d98","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/8e848847.js"},{"revision":"d763bdbe65a714026033af2feef01d74","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/8ea9505a.js"},{"revision":"12d3959f9c52cc0cec9ca55a5b1699ba","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/8ebcf490.js"},{"revision":"9df95769d744f5064a51aae662cf1f11","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/8ed6ee93.js"},{"revision":"dce360b43384dbcbd69c77a0ed8523d4","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/8eed414d.js"},{"revision":"b2fde2d0d47cb5f9f75cbd82189cd47f","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/900f3a11.js"},{"revision":"d2f1528b5c8f8878c440960a840815a4","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/90cb25a7.js"},{"revision":"051e9bb167090861e0b77000e41be084","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/926f4d5d.js"},{"revision":"7f6deb38cc0647b08d91e4ca2c2ec07d","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/93d86277.js"},{"revision":"0db7db19bd7f9d368f83e4bb4c374f76","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/9464038e.js"},{"revision":"f662eaf1f02348f34fdbae9b1437b907","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/9569269a.js"},{"revision":"d12eb219d8b2b703e8394b264fc533f3","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/95740edd.js"},{"revision":"f24009352ba17054e89763578bcb5329","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/979092f4.js"},{"revision":"277d4ba51b9921ddec5e5750de0a7cc2","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/980a1f5a.js"},{"revision":"f39e007df66cc48a00a84cf9e253d52d","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/9aad1c7e.js"},{"revision":"fee1bb1e2f4e83fad521f401845c0a35","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/9bce7b16.js"},{"revision":"3b235c29f31dc9475f8ebf93cfaf3128","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/9c4085b3.js"},{"revision":"09810d7d3734670be695a07596faf56d","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/9e23b2c6.js"},{"revision":"433d626e82a5f5da4b02c2a5f4d9cb5d","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/9ecfc7ef.js"},{"revision":"ecf0e3f7aae8ebe5498bf731d87f0517","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/9ef62f1b.js"},{"revision":"dfacc674ba4673d5302b8c1b91b5118e","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/9f91928f.js"},{"revision":"94337c98df2ea18a187e26172fcde0b5","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/a074439c.js"},{"revision":"bcb0f9401c4fc37874a0a5dcb7e5102c","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/a1b94f55.js"},{"revision":"a07fcdcf0b1ae27a0243a93ed6242d8c","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/a3e024f2.js"},{"revision":"3eb435c685a47c181e066aa88b4a3fa6","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/a485c478.js"},{"revision":"7ecf897dfc6e423b8f9c9ede46f5d354","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/a500442e.js"},{"revision":"ca8f041c52999f325344d20563cadba6","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/a7300a4b.js"},{"revision":"349ac56dd86b7ba4deec3b2409ebcdc2","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/a77fdef3.js"},{"revision":"ed0c862094c41f455cdef837aa7dafd2","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/a7b12eab.js"},{"revision":"ec9a0934c3da03bededd015754108c61","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/a861e314.js"},{"revision":"b1a364a86b2d7f8d62668c3b10de01b5","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/a8b6886e.js"},{"revision":"ddd0d01532f45ea157e98b74a04906f1","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/ab79349c.js"},{"revision":"3645e2da68215ee0df50c466d6bc4ad0","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/ac09f586.js"},{"revision":"5c0c5bb86b2df450d284cdad7dba863e","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/ad16467d.js"},{"revision":"c8b66a082cc51c45a98286989e4c5544","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/ad2ad56c.js"},{"revision":"df3871b2ffea8e9b0fcb0ec5c0a1a4fb","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/ad74e1fd.js"},{"revision":"00ab0f99e3b06d310c12a9d7a425c62e","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/af01a468.js"},{"revision":"1a86fa1b9e180eadca28c3aec356b04f","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/affb5ecc.js"},{"revision":"26e57d12883edf5fb5189cd376ba6305","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/b0664645.js"},{"revision":"10ee4d02ae7e9de42c4c8987c3ac5627","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/b234a6ce.js"},{"revision":"24882805249b1823d9c04a0fe7a2b7ab","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/b276ce4f.js"},{"revision":"3b1a220b0919ce15f81cae0d32459aaf","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/b2c71d2f.js"},{"revision":"c768072689f0cecfaac8cd2f71a941dd","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/b3c460cf.js"},{"revision":"8f8bd53b4fc6b8a3c0cc1092d1cfc9ad","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/b4dd4351.js"},{"revision":"eab8c801cc6ca463f9799d5722c586c7","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/b4ed1a0a.css"},{"revision":"9f31c84f106bce73f03f613f6768edde","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/b6ce7fc0.css"},{"revision":"be4d1082a4ac841209e951ba6be28882","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/b859e9ed.js"},{"revision":"599c7021e568955e14200ed3b8242ab2","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/b88857a8.js"},{"revision":"a7663a3f9711bbd8515486cfcbe200bf","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/b8f64e7c.js"},{"revision":"f13120e9b8ef20d5d061c7b696b0febe","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/b948710c.js"},{"revision":"2d63f3031f2eaa2451c17ad5d10f6097","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/b95f9eba.js"},{"revision":"a30ac7384e36ca39f7f35055f23e3570","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/ba72b3c3.js"},{"revision":"7b657b16fa8010ba5f636043102cd3ae","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/bb101bfc.js"},{"revision":"2f91adef4ac70a8b143b5eef1c1f8d79","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/bb7a53e5.js"},{"revision":"f8d43fffb6fc972dbca19b3d9fe178a4","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/bc6dc933.js"},{"revision":"37a83a88aeba3290bce07111cb179cbf","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/bd671bef.js"},{"revision":"345ae7a9e9dfca7a619e144d150eac89","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/be3dce6e.js"},{"revision":"9056c073fb61787fa6ad55803590d91b","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/bef6fe9f.js"},{"revision":"f8563f343dc267ec7f6162fcca5c5124","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/bf07e4f5.js"},{"revision":"7527218ddb5864da9a58c74bf6b3aeec","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/c0cb8e77.js"},{"revision":"4620ed306d2f69b062c7b040c5083990","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/c0d34a73.js"},{"revision":"c34332aeb85a780e192d66e6820a74ce","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/c1d2d62e.js"},{"revision":"98be45d9f3f340f3a34bbe6517869105","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/c327b239.js"},{"revision":"a7529acca5ddc11ed78382f5b9497994","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/c429c949.js"},{"revision":"28ee8c6ef33aba75fdd314ab2228bebd","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/c469d7ad.js"},{"revision":"236ab9a146c792c3bea8c265a2d6b99e","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/c5ca54e1.js"},{"revision":"d067175695c9d5f41aace31ab7b4c96a","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/c61c802b.js"},{"revision":"1bc22a2af12ee1aa58322e84887f073f","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/c6290aa3.js"},{"revision":"13c893f5e18a8fefdacb426811461bcc","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/c914e8f0.js"},{"revision":"11557ba58d6504231db6801e10945741","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/c93c1b91.js"},{"revision":"d69857fd700b6ad7114704b800ae817d","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/ca7ebb2a.js"},{"revision":"6063e0181d995e72bcc3236da43a04c1","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/cd327a09.js"},{"revision":"652780ef3e7854bf6be0bb8b255bd86e","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/cf41104c.js"},{"revision":"5043011433a2abd090a8eedfb761e4ef","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/cf9a4bd4.css"},{"revision":"bf804ef06768f12bb791d7e5e8c043fe","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/d03ca1c3.js"},{"revision":"e02634e49bd97b8d07f1f9af46ca3c8a","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/d17aabe0.js"},{"revision":"d749e9841e4300fa35b4e13f5a5cbcb7","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/d36cbfe4.js"},{"revision":"f79b048623020ab708c31e64ca79e180","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/d3f242ba.js"},{"revision":"eac812295fb167293995e1867f1dbaf7","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/d4b50292.js"},{"revision":"426b0ab951d28350c05a5c97715eefe1","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/d50932bb.js"},{"revision":"415a1e7e5ec3bfaf4fc53c3572e6a213","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/d68d6a66.js"},{"revision":"e6b8148d1361bd0bc81b5e4258a40f72","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/d7159317.js"},{"revision":"0ced7425f0c05d720e33435c130da3d4","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/d726dded.js"},{"revision":"111146bc0467782fc2b02bc071926547","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/d8a9bfc5.js"},{"revision":"64a79bdf99c2b18744cd0c55cdf07a3f","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/daaa746b.js"},{"revision":"54f378b267bd59bb2ec08cc16f90c106","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/dbf5747c.js"},{"revision":"a01f7c66e79fbd789071237a9cb6450f","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/dec2544d.js"},{"revision":"8e5b6b7ecbd513b0430556e1cca38664","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/df71c72e.js"},{"revision":"01e44c0e49168eb09d8d91f03d556233","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/e13bafec.js"},{"revision":"3f2d7607a5607b1ffc2721e0f21b33fd","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/e2fb1e34.js"},{"revision":"48e047ccf097cc6a56988698ce3014f1","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/e363f624.js"},{"revision":"7f00595453f20abcd2a983779119a71a","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/e4a6bbe0.js"},{"revision":"1084a6bbce39c2daacc0895b6b72c48f","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/e5833d38.js"},{"revision":"eaf5a244b8f5826d558814f7b3fdfd5b","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/e5a77cac.js"},{"revision":"b9e84dcacf7f156546defe566065315e","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/e5fb6d76.js"},{"revision":"42807e76e0ac3278f78c4a5e7be3b0ee","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/e6096728.js"},{"revision":"8fbe10e903b546946a51902636e6a4e9","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/e67954de.js"},{"revision":"85a5bb82d61c99b8221fe53c3717f168","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/e76d2cab.js"},{"revision":"d3c98ca12f2f70db7de77e241c0826ec","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/e813d878.js"},{"revision":"edd4277600b0a847dffd6ff1c64dc31c","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/e84e4699.js"},{"revision":"35a255d1ecfd9fd2689ec2e4c9c3b62c","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/ea8e2dfc.js"},{"revision":"a5c5eef4898c9ed74355974304afbb20","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/eaa5dc26.js"},{"revision":"2a1b1239e8c2b5792b7b900fa9cbac60","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/eac60f5f.js"},{"revision":"909dadd2b83d2bfb6243c37dec7d7d93","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/eadf054b.js"},{"revision":"346a566f3a2fca4331ac440f8f331dbf","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/eaf4b2e6.js"},{"revision":"82d6d755cd255d69b3bd51fb4992e637","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/eaf5ec9b.js"},{"revision":"64360a8333b1a9465d5b1a3a79760aa1","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/eb03e089.js"},{"revision":"9f1205840c7636c18ed092cb3c8d47ff","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/eb08c980.js"},{"revision":"89433594228a4aff0cc44df9ebae64c9","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/eb1de6ca.js"},{"revision":"105848109757174edcff06432d2ff1f6","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/eb7864d0.js"},{"revision":"37331a4f80a389d500789b034aca45fa","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/ec834865.js"},{"revision":"74fe092d8b5efe29e6b115ac5440e9e0","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/f082e622.js"},{"revision":"ec84f3db67e1e94d7f34de83fddcb255","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/f0ed35b8.js"},{"revision":"c2a38f3089cde58a2a445e2d216211ba","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/f1297e04.js"},{"revision":"4b6c9fce2b889bf712a15e1e1bdd8dbb","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/f235c322.js"},{"revision":"e3d47d6e144ef7fa045c4fa01e4f7531","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/f2d10a5c.js"},{"revision":"ded3145b8c2ffbc04c195d3c12c306d3","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/f2d41b00.js"},{"revision":"82e0c9efdfb6fb42c3f6e95d849737a8","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/f36da9aa.js"},{"revision":"1421ea86b78ec1e837ec6f0fe02b0c0a","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/f389ac2f.js"},{"revision":"566b15396799a71ce07bdc27f9f567fa","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/f38b2dd3.js"},{"revision":"b6a4b68aad4e67e5dc0c0b9320e3c1e8","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/f43e801e.js"},{"revision":"16773f3de708c19ab00425fbddae9c4b","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/f67858cf.js"},{"revision":"566a52141ea4fc42b99774e287e96205","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/f850d1fe.js"},{"revision":"3010729e8778789679569e41ec9ca148","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/f8d51521.js"},{"revision":"8ccf8f0db7ec4beada3ada7a81c3f1b4","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/f8df82e1.js"},{"revision":"8a98b4ca618e349c6418985e7ee8d3ec","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/f9b34363.js"},{"revision":"b722e21a70152aea30995939d9b70987","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/fb3c785e.js"},{"revision":"3588b38999237dcc0a1d5cb6fd2d2585","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/fb7dbbe6.js"},{"revision":"f594fff1afaf26b43ed0124dc1411212","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/fb96e74e.js"},{"revision":"875c6402575d626fb68950695a50d846","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/fbdfe2cf.js"},{"revision":"3f20515e9133a65886bab74a2938d59e","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/fc5a8220.js"},{"revision":"b004abe1a556c4e6f0c3f95807d7ce00","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/fd427a08.js"},{"revision":"e811eab797c801cbeedcb523cee0b39c","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/fd9a7186.css"},{"revision":"94adcefa91504ee438f3d43548364098","url":"https://eventtools.event.microsoft.com/ignite2023-prod/assets/fdeabf70.js"},{"revision":"83483e2307c2c524d0f1fb51c1a9adae","url":"https://eventtools.event.microsoft.com/ignite2023-prod/en-US/archives.html"},{"revision":"469fdbcdc57e032b284904eccae3cbf6","url":"https://eventtools.event.microsoft.com/ignite2023-prod/en-US/index.html"},{"revision":"12e3dac858061d088023b2bd48e2fa96","url":"https://eventtools.event.microsoft.com/ignite2023-prod/favicon.ico"},{"revision":"056343b5eb0ee0e7552de0b66b12806a","url":"https://eventtools.event.microsoft.com/ignite2023-prod/icons/apple-touch-icon.png"},{"revision":"10805d0c9d6e12ad1ae30eac4e5f34ae","url":"https://eventtools.event.microsoft.com/ignite2023-prod/icons/pwa-192x192.png"},{"revision":"82723e7acfd4c8922ff76444f02e9173","url":"https://eventtools.event.microsoft.com/ignite2023-prod/icons/pwa-512x512.png"},{"revision":"469fdbcdc57e032b284904eccae3cbf6","url":"https://eventtools.event.microsoft.com/ignite2023-prod/index.html"},{"revision":"10805d0c9d6e12ad1ae30eac4e5f34ae","url":"icons/pwa-192x192.png"},{"revision":"82723e7acfd4c8922ff76444f02e9173","url":"icons/pwa-512x512.png"},{"revision":"6fff06e638cbe1318337b1511a2d97ba","url":"manifest.webmanifest"}]);
const us = (a) => a, ls = async (a) => {
  (await self.clients.matchAll({
    includeUncontrolled: !0,
    type: "window"
  })).forEach((t) => {
    t.postMessage(a);
  });
}, He = /* @__PURE__ */ new Set();
self.addEventListener("message", async (a) => {
  if (rs(a.data) && self.skipWaiting(), ss(a.data) && (await self.registration.unregister(), (await self.clients.matchAll({ type: "window" })).forEach((t) => t.navigate(t.url))), as(a.data)) {
    const { name: e } = a.data;
    if (!He.has(e)) {
      He.add(e);
      try {
        let t = [];
        switch (e) {
          case "session":
            t = ["ms-events-api-session-cache"];
            break;
          case "api":
            t = [
              "ms-events-api-cache",
              "ms-events-api-session-cache"
            ];
            break;
          default:
            throw new Error(`Unhandled cache name: ${e}`);
        }
        a.waitUntil(
          Promise.all(
            t.map(
              (s) => self.caches.delete(s)
            )
          )
        ), await ls({
          type: "REPLY_CLEAR_CACHE",
          name: e
        });
      } finally {
        He.delete(a.data.name);
      }
    }
  }
});
{
  const a = JSON.parse(
    `{
  "en-US": [
    {
      "path": "archives",
      "title": "Session Archives",
      "imageUrl": "https://eventtools.event.microsoft.com/ignite2023/FY24_Ignite_OpenGraph_Design%20-v%201200x630.png",
      "imageAlt": "",
      "description": "Explore sessions from previous Microsoft Ignite events."
    }
  ]
}
`
  );
  JSON.parse(
    '[{"language":"en","langLocale":"en-US","langTranslation":"translate.lang.english","uiLocale":"en","timeFormat":"12"}]'
  ).map((s) => s.langLocale).forEach((s) => {
    (a[s] || []).forEach((f) => {
      te(
        new je(
          $e(
            `https://eventtools.event.microsoft.com/ignite2023-prod/${s}/${f.path}.html`
          ),
          {
            allowlist: [new RegExp(`/${s}/${f.path}`)]
          }
        )
      );
    }), te(
      new je(
        $e(
          `https://eventtools.event.microsoft.com/ignite2023-prod/${s}/index.html`
        ),
        {
          allowlist: [new RegExp(`/${s}`)]
        }
      )
    );
  }), te(
    new je(
      $e("https://eventtools.event.microsoft.com/ignite2023-prod/index.html")
    )
  );
}
const ie = ({
  cacheName: a,
  capture: e,
  iUnderstandThatCachingOpaqueResponsesIsDangerous: t = !1
}) => {
  const s = t ? [0, 200] : [200], u = [
    new Je({
      maxAgeSeconds: cs
    }),
    new Xe({
      statuses: s
    })
  ], f = t ? new Wt({ cacheName: a, plugins: u }) : new Wr({ cacheName: a, plugins: u });
  te(e, f);
};
ie({
  // https://www.microsoft.com/mwf/js/bundle/1.57.0/mwf-main.var.min.js
  capture: new RegExp("https://www.microsoft.com/mwf/.*", "i"),
  cacheName: "mwf-cache"
});
ie({
  capture: ({ url: a }) => [
    // https://consentdeliveryfd.azurefd.net/mscc/lib/v2/wcp-consent.js
    new RegExp("https://consentdeliveryfd.azurefd.net/*", "i"),
    // https://js.monitor.azure.com/scripts/c/ms.analytics-web-3.min.js
    new RegExp("https://js.monitor.azure.com/*", "i"),
    // https://www.microsoft.com/onerfstatics/marketingsites-eas-prod/west-european/shell/_scrf/css/themes=default.device=uplevel_web_pc/79-4cdd0a/33-ae3d41/a5-4bf7a2/13-8e1ceb/81-32f0c0/5c-b7b685/1a-bb39e7/ef-a24652?ver=2.0&_cf=20210618
    new RegExp("https://www.microsoft.com/onerfstatics/*", "i"),
    // https://mem.gfx.ms/meversion?partner=MSMyIgnite&market=en-us&uhf=1
    new RegExp("https://mem.gfx.ms/*", "i")
  ].some((t) => t.test(a.toString())),
  cacheName: "ms-cache"
});
ie({
  capture: ({ url: a }) => [
    // https://statics-marketingsites-eas-ms-com.akamaized.net/statics/override.css
    new RegExp("https://statics-marketingsites-*", "i"),
    // https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1MmB8?ver=6c43g
    new RegExp(
      "https://img-prod-cms-rt-microsoft-com.akamaized.net/*",
      "i"
    )
  ].some((t) => t.test(a.toString())),
  cacheName: "ms-opaque-cache",
  iUnderstandThatCachingOpaqueResponsesIsDangerous: !0
});
ie({
  // https://unpkg.com/html-docx-js@0.3.1/dist/html-docx.js
  capture: new RegExp("https://unpkg.com/.*", "i"),
  cacheName: "unpkg-cache"
});
ie({
  // https://code.jquery.com/jquery-3.6.0.min.js
  capture: new RegExp("https://code.jquery.com/.*", "i"),
  cacheName: "jquery-cache"
});
ie({
  capture: ({ url: a }) => [
    // https://medius.microsoft.com/bundles/css?v=I2vY-G1MZ-NRCI80gZcFCudj_ODcDVBr7jOz0cK898k1
    new RegExp("https://medius.microsoft.com/.*", "i"),
    // https://mediusprodstatic.event.microsoft.com/libs/ajax/bootstrap/3.0.0/css/bootstrap.min.css
    new RegExp("https://mediusprodstatic.event.microsoft.com/.*", "i")
  ].some((t) => t.test(a.toString())),
  cacheName: "medius-cache"
});
te(
  ({ url: a }) => [
    // Match CDN URLs, unless it contains .mp4
    // https://ms-events.azureedge.net/inspire2022/2_Nicole%20Dezen.png
    new RegExp(
      /(https:\/\/ms-events.azureedge.net\/)(?!.*\.mp4).*/,
      "i"
    ),
    // https://eventtools.event.microsoft.com/ignite2021nov/MSFT_Ignite_Metadata_4.png
    new RegExp(
      /(https:\/\/eventtools.event.microsoft.com\/)(?!.*\.mp4).*/,
      "i"
    )
  ].some((t) => t.test(a.toString())),
  new $r({
    cacheName: us("ms-events-cdn-cache"),
    plugins: [
      new Je({
        maxAgeSeconds: $t
      }),
      new Xe({
        // Accept opaque responses here because sometimes CSS background-image uses the azureedge CDN
        statuses: [0, 200]
      })
    ]
  })
);
const jt = ({
  cacheName: a,
  include: e,
  exclude: t
}) => {
  const s = [
    new Je({
      maxAgeSeconds: $t
    }),
    new Xe({
      statuses: [200]
    })
  ], u = new Wt({ cacheName: a, plugins: s }), f = t != null && t.length ? `(?!${t.join("|")})` : "", h = e != null && e.length ? `(?:${e.join("|")})` : "", p = `${f}${h}.*`;
  te(({ url: R }) => [
    // http://localhost:8876/api
    new RegExp(`^https://api.ignite.microsoft.com/api/${p}`, "i"),
    // https://localhost:7154/api
    new RegExp(`^https://api-v2.ignite.microsoft.com/api/${p}`, "i")
  ].some((B) => B.test(R.toString())), u);
};
jt({
  cacheName: "ms-events-api-session-cache",
  include: ["session"]
});
jt({
  cacheName: "ms-events-api-cache",
  exclude: ["ping"]
});
const fs = new fr("telemetry-queue", {
  maxRetentionTime: tt
});
te(
  ({ url: a }) => [
    // OneDS
    // https://browser.events.data.microsoft.com/OneCollector/1.0/?cors=true&content-type=application%2Fx-json-stream&w=0
    new RegExp(
      "https://browser.events.data.microsoft.com/OneCollector/1.0/*",
      "i"
    ),
    // Application Insights
    // https://dc.services.visualstudio.com/v2/track
    new RegExp("https://dc.services.visualstudio.com/v2/track", "i")
  ].some((t) => t.test(a.toString())),
  new Kr({ plugins: [fs] }),
  "POST"
);
