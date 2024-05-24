(() => {
  var __require = /* @__PURE__ */ ((;
  var __async = 

  // javascript-sdk/aws-sdk-2.706.0.min.js
  _xamzrequire = function() {
    function e3(t, r, n) {
      function i(s2, a) {
        if (!r[s2]) {
          if (!t[s2]) {
            var u = typeof __require == "function" && __require;
            if (!a && u)
              return u(s2, !0);
            if (o)
              return o(s2, !0);
            var c = new Error("Cannot find module '" + s2 + "'");
            throw c.code = "MODULE_NOT_FOUND", c;
          }
          var l = r[s2] = { exports: {} };
          t[s2][0].call(l.exports,  l, l.exports, e3, t, r, n);
        }
        return r[s2].exports;
      }
      for (var o = typeof __require == "function" && __require, s = 0; s < n.length; s++)
        i(n[s]);
      return i;
    }
    return e3;
  }()({ 38: [function(e3, t, r) {
    (function(r2) {
      function n(e4, t2) {
        if (typeof e4 == "string") {
          if (["legacy", "regional"].indexOf(e4.toLowerCase()) >= 0)
            return e4.toLowerCase();
          throw o.util.error(new Error(), t2);
        }
      }
      function i(e4, t2) {
        e4 = e4 || {};
        var i2;
        if (e4[t2.clientConfig] && (i2 = n(e4[t2.clientConfig], { code: "InvalidConfiguration", message: 'invalid "' + t2.clientConfig + '" configuration. Expect "legacy"  or "regional". Got "' + e4[t2.clientConfig] + '".' })) || !o.util.isNode() || Object.prototype.hasOwnProperty.call(r2.env, t2.env) && (i2 = n(r2.env[t2.env], { code: "InvalidEnvironmentalVariable", message: "invalid " + t2.env + ' environmental variable. Expect "legacy"  or "regional". Got "' + r2.env[t2.env] + '".' })))
          return i2;
        var s = {};
        try {
          s = o.util.getProfilesFromSharedConfig(o.util.iniLoader)[r2.env.AWS_PROFILE || o.util.defaultProfile];
        } catch (e5) {
        }
        return s && Object.prototype.hasOwnProperty.call(s, t2.sharedConfig) && (i2 = n(s[t2.sharedConfig], { code: "InvalidConfiguration", message: "invalid " + t2.sharedConfig + ' profile config. Expect "legacy"  or "regional". Got "' + s[t2.sharedConfig] + '".' })), i2;
      }
      var o = e3("./core");
      t.exports = i;
    }).call(this, e3("_process"));
  }, { "./core": 39, _process: 8 }], 39: [ { "../vendor/endpoint-cache": 125, "./api_loader": 27, "./config": 37, "./event_listeners": 60, "./http": 61, "./json/builder": 63, "./json/parser": 64, "./model/api": 65, "./model/operation": 67, "./model/paginator": 68, "./model/resource_waiter": 69, "./model/shape": 70, "./param_validator": 71, "./protocol/json": 74, "./protocol/query": 75, "./protocol/rest": 76, "./protocol/rest_json": 77, "./protocol/rest_xml": 78, "./request": 84, "./resource_waiter": 85, "./response": 86, "./sequential_executor": 88, "./service": 89, "./signers/request_signer": 110, "./util": 118, "./xml/builder": 120 }], 125: [function(e3, t, r) {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var n = e3("./utils/LRU"), i = 1e3, o = function() {
      function e4(e5) {
        e5 === void 0 && (e5 = i), this.maxSize = e5, this.cache = new n.LRUCache(e5);
      }
      return Object.defineProperty(e4.prototype, "size", { get:  enumerable: !0, configurable: !0 }), e4.prototype.put = function(t2, r2) {
        var n2 = typeof t2 != "string" ? e4.getKeyString(t2) : t2, i2 = this.populateValue(r2);
        this.cache.put(n2, i2);
      }, e4.prototype.get = function(t2) {
        var r2 = typeof t2 != "string" ? e4.getKeyString(t2) : t2, n2 = Date.now(), i2 = this.cache.get(r2);
        if (i2)
          for (var o2 = 0; o2 < i2.length; o2++) {
            var s = i2[o2];
            if (s.Expire < n2)
              return void this.cache.remove(r2);
          }
        return i2;
      }, e4.getKeyString = function(e5) {
        for (var t2 = [], r2 = Object.keys(e5).sort(), n2 = 0; n2 < r2.length; n2++) {
          var i2 = r2[n2];
          e5[i2] !== void 0 && t2.push(e5[i2]);
        }
        return t2.join(" ");
      }, e4.prototype.populateValue =  e4.prototype.empty =  e4.prototype.remove = function(t2) {
        var r2 = typeof t2 != "string" ? e4.getKeyString(t2) : t2;
        this.cache.remove(r2);
      }, e4;
    }();
    r.EndpointCache = o;
  }, { "./utils/LRU": 126 }], 126: [function(e3, t, r) {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var n = ), i = function() {
      function e4(e5) {
        if (this.nodeMap = {}, this.size = 0, typeof e5 != "number" || e5 < 1)
          throw new Error("Cache size can only be positive number");
        this.sizeLimit = e5;
      }
      return Object.defineProperty(e4.prototype, "length", { get: function() {
        return this.size;
      }, enumerable: !0, configurable: !0 }), e4.prototype.prependToList =  e4.prototype.removeFromTail =  e4.prototype.detachFromList =  e4.prototype.get =  e4.prototype.remove =  e4.prototype.put =  e4.prototype.empty =  e4;
    }();
    r.LRUCache = i;
  }, {}], 120: [function(e3, t, r) {
    function n() {
    }
        function o(e4, t2, r2) {
      l.arrayEach(r2.memberNames, function(n2) {
        var o2 = r2.members[n2];
        if (o2.location === "body") {
          var s2 = t2[n2], a2 = o2.name;
          if (s2 != null)
            if (o2.isXmlAttribute)
              e4.addAttribute(a2, s2);
            else if (o2.flattened)
              i(e4, s2, o2);
            else {
              var u2 = new h(a2);
              e4.addChildNode(u2), c(u2, o2), i(u2, s2, o2);
            }
        }
      });
    }
                    var l = e3("../util"), h = e3("./xml-node").XmlNode, p = e3("./xml-text").XmlText;
    n.prototype.toXML =  t.exports = n;
  }, { "../util": 118, "./xml-node": 123, "./xml-text": 124 }], 124: [ { "./escape-element": 122 }], 122: [ {}], 123: [function(e3, t, r) {
    function n(e4, t2) {
      t2 === void 0 && (t2 = []), this.name = e4, this.children = t2, this.attributes = {};
    }
    var i = e3("./escape-attribute").escapeAttribute;
    n.prototype.addAttribute =  n.prototype.addChildNode =  n.prototype.removeAttribute =  n.prototype.toString = function() {
      for (var e4 = Boolean(this.children.length), t2 = "<" + this.name, r2 = this.attributes, n2 = 0, o = Object.keys(r2); n2 < o.length; n2++) {
        var s = o[n2], a = r2[s];
        a != null && (t2 += " " + s + '="' + i("" + a) + '"');
      }
      return t2 += e4 ? ">" + this.children.map(function(e5) {
        return e5.toString();
      }).join("") + "</" + this.name + ">" : "/>";
    }, t.exports = { XmlNode: n };
  }, { "./escape-attribute": 121 }], 121: [ {}], 110: [ { "../core": 39, "./presign": 109, "./s3": 111, "./v2": 112, "./v3": 113, "./v3https": 114, "./v4": 115 }], 115: [function(e3, t, r) {
    var n = e3("../core"), i = e3("./v4_credentials"), o = n.util.inherit;
    n.Signers.V4 = o(n.Signers.RequestSigner, { constructor: function(e4, t2, r2) {
      n.Signers.RequestSigner.call(this, e4), this.serviceName = t2, r2 = r2 || {}, this.signatureCache = typeof r2.signatureCache != "boolean" || r2.signatureCache, this.operation = r2.operation, this.signatureVersion = r2.signatureVersion;
    }, algorithm: "AWS4-HMAC-SHA256", addAuthorization:  addHeaders:  updateForPresigned: function(e4, t2) {
      var r2 = this.credentialString(t2), i2 = { "X-Amz-Date": t2, "X-Amz-Algorithm": this.algorithm, "X-Amz-Credential": e4.accessKeyId + "/" + r2, "X-Amz-Expires": this.request.headers["presigned-expires"], "X-Amz-SignedHeaders": this.signedHeaders() };
      e4.sessionToken && (i2["X-Amz-Security-Token"] = e4.sessionToken), this.request.headers["Content-Type"] && (i2["Content-Type"] = this.request.headers["Content-Type"]), this.request.headers["Content-MD5"] && (i2["Content-MD5"] = this.request.headers["Content-MD5"]), this.request.headers["Cache-Control"] && (i2["Cache-Control"] = this.request.headers["Cache-Control"]), n.util.each.call(this, this.request.headers, function(e5, t3) {
        if (e5 !== "presigned-expires" && this.isSignableHeader(e5)) {
          var r3 = e5.toLowerCase();
          r3.indexOf("x-amz-meta-") === 0 ? i2[r3] = t3 : r3.indexOf("x-amz-") === 0 && (i2[e5] = t3);
        }
      });
      var o2 = this.request.path.indexOf("?") >= 0 ? "&" : "?";
      this.request.path += o2 + n.util.queryParamsToString(i2);
    }, authorization:  signature:  stringToSign: function(e4) {
      var t2 = [];
      return t2.push("AWS4-HMAC-SHA256"), t2.push(e4), t2.push(this.credentialString(e4)), t2.push(this.hexEncodedHash(this.canonicalString())), t2.join(`
`);
    }, canonicalString: function() {
      var e4 = [], t2 = this.request.pathname();
      return this.serviceName !== "s3" && this.signatureVersion !== "s3v4" && (t2 = n.util.uriEscapePath(t2)), e4.push(this.request.method), e4.push(t2), e4.push(this.request.search()), e4.push(this.canonicalHeaders() + `
`), e4.push(this.signedHeaders()), e4.push(this.hexEncodedBodyHash()), e4.join(`
`);
    }, canonicalHeaders: function() {
      var e4 = [];
      n.util.each.call(this, this.request.headers, , e4.sort(;
      var t2 = [];
      return n.util.arrayEach.call(this, e4, function(e5) {
        var r2 = e5[0].toLowerCase();
        if (this.isSignableHeader(r2)) {
          var i2 = e5[1];
          if (i2 == null || typeof i2.toString != "function")
            throw n.util.error(new Error("Header " + r2 + " contains invalid value"), { code: "InvalidHeader" });
          t2.push(r2 + ":" + this.canonicalHeaderValues(i2.toString()));
        }
      }), t2.join(`
`);
    }, canonicalHeaderValues:  signedHeaders:  credentialString:  hexEncodedHash:  hexEncodedBodyHash: function() {
      var e4 = this.request;
      return this.isPresigned() && this.serviceName === "s3" && !e4.body ? "UNSIGNED-PAYLOAD" : e4.headers["X-Amz-Content-Sha256"] ? e4.headers["X-Amz-Content-Sha256"] : this.hexEncodedHash(this.request.body || "");
    }, unsignableHeaders: ["authorization", "content-type", "content-length", "user-agent", "presigned-expires", "expect", "x-amzn-trace-id"], isSignableHeader: function(e4) {
      return e4.toLowerCase().indexOf("x-amz-") === 0 || this.unsignableHeaders.indexOf(e4) < 0;
    }, isPresigned: }), t.exports = n.Signers.V4;
  }, { "../core": 39, "./v4_credentials": 116 }], 116: [function(e3, t, r) {
    var n = e3("../core"), i = {}, o = [];
    t.exports = { createScope:  getSigningKey: function(e4, t2, r2, s, a) {
      var u = n.util.crypto.hmac(e4.secretAccessKey, e4.accessKeyId, "base64"), c = [u, t2, r2, s].join("_");
      if ((a = a !== !1) && c in i)
        return i[c];
      var l = n.util.crypto.hmac("AWS4" + e4.secretAccessKey, t2, "buffer"), h = n.util.crypto.hmac(l, r2, "buffer"), p = n.util.crypto.hmac(h, s, "buffer"), f = n.util.crypto.hmac(p, "aws4_request", "buffer");
      return a && (i[c] = f, o.push(c), o.length > 50 && delete i[o.shift()]), f;
    }, emptyCache: };
  }, { "../core": 39 }], 114: [ { "../core": 39, "./v3": 113 }], 113: [function(e3, t, r) {
    var n = e3("../core"), i = n.util.inherit;
    n.Signers.V3 = i(n.Signers.RequestSigner, { addAuthorization:  authorization:  signedHeaders:  canonicalHeaders: function() {
      var e4 = this.request.headers, t2 = [];
      return n.util.arrayEach(this.headersToSign(), , t2.sort().join(`
`) + `
`;
    }, headersToSign: function() {
      var e4 = [];
      return n.util.each(this.request.headers, function(t2) {
        (t2 === "Host" || t2 === "Content-Encoding" || t2.match(/^X-Amz/i)) && e4.push(t2);
      }), e4;
    }, signature: function(e4) {
      return n.util.crypto.hmac(e4.secretAccessKey, this.stringToSign(), "base64");
    }, stringToSign: function() {
      var e4 = [];
      return e4.push(this.request.method), e4.push("/"), e4.push(""), e4.push(this.canonicalHeaders()), e4.push(this.request.body), n.util.crypto.sha256(e4.join(`
`));
    } }), t.exports = n.Signers.V3;
  }, { "../core": 39 }], 112: [function(e3, t, r) {
    var n = e3("../core"), i = n.util.inherit;
    n.Signers.V2 = i(n.Signers.RequestSigner, { addAuthorization:  signature:  stringToSign: function() {
      var e4 = [];
      return e4.push(this.request.method), e4.push(this.request.endpoint.host.toLowerCase()), e4.push(this.request.pathname()), e4.push(n.util.queryParamsToString(this.request.params)), e4.join(`
`);
    } }), t.exports = n.Signers.V2;
  }, { "../core": 39 }], 111: [function(e3, t, r) {
    var n = e3("../core"), i = n.util.inherit;
    n.Signers.S3 = i(n.Signers.RequestSigner, { subResources: { acl: 1, accelerate: 1, analytics: 1, cors: 1, lifecycle: 1, delete: 1, inventory: 1, location: 1, logging: 1, metrics: 1, notification: 1, partNumber: 1, policy: 1, requestPayment: 1, replication: 1, restore: 1, tagging: 1, torrent: 1, uploadId: 1, uploads: 1, versionId: 1, versioning: 1, versions: 1, website: 1 }, responseHeaders: { "response-content-type": 1, "response-content-language": 1, "response-expires": 1, "response-cache-control": 1, "response-content-disposition": 1, "response-content-encoding": 1 }, addAuthorization:  stringToSign: function() {
      var e4 = this.request, t2 = [];
      t2.push(e4.method), t2.push(e4.headers["Content-MD5"] || ""), t2.push(e4.headers["Content-Type"] || ""), t2.push(e4.headers["presigned-expires"] || "");
      var r2 = this.canonicalizedAmzHeaders();
      return r2 && t2.push(r2), t2.push(this.canonicalizedResource()), t2.join(`
`);
    }, canonicalizedAmzHeaders: function() {
      var e4 = [];
      n.util.each(this.request.headers, , e4.sort(;
      var t2 = [];
      return n.util.arrayEach.call(this, e4, , t2.join(`
`);
    }, canonicalizedResource: function() {
      var e4 = this.request, t2 = e4.path.split("?"), r2 = t2[0], i2 = t2[1], o = "";
      if (e4.virtualHostedBucket && (o += "/" + e4.virtualHostedBucket), o += r2, i2) {
        var s = [];
        n.util.arrayEach.call(this, i2.split("&"), function(e5) {
          var t3 = e5.split("=")[0], r3 = e5.split("=")[1];
          if (this.subResources[t3] || this.responseHeaders[t3]) {
            var n2 = { name: t3 };
            r3 !== void 0 && (this.subResources[t3] ? n2.value = r3 : n2.value = decodeURIComponent(r3)), s.push(n2);
          }
        }), s.sort(, s.length && (i2 = [], n.util.arrayEach(s, function(e5) {
          e5.value === void 0 ? i2.push(e5.name) : i2.push(e5.name + "=" + e5.value);
        }), o += "?" + i2.join("&"));
      }
      return o;
    }, sign: }), t.exports = n.Signers.S3;
  }, { "../core": 39 }], 109: [function(e3, t, r) {
        function i(e4) {
      var t2 = e4.httpRequest.endpoint, r2 = o.util.urlParse(e4.httpRequest.path), n2 = {};
      r2.search && (n2 = o.util.queryStringParse(r2.search.substr(1)));
      var i2 = e4.httpRequest.headers.Authorization.split(" ");
      if (i2[0] === "AWS")
        i2 = i2[1].split(":"), n2.Signature = i2.pop(), n2.AWSAccessKeyId = i2.join(":"), o.util.each(e4.httpRequest.headers, function(e5, t3) {
          e5 === a && (e5 = "Expires"), e5.indexOf("x-amz-meta-") === 0 && (delete n2[e5], e5 = e5.toLowerCase()), n2[e5] = t3;
        }), delete e4.httpRequest.headers[a], delete n2.Authorization, delete n2.Host;
      else if (i2[0] === "AWS4-HMAC-SHA256") {
        i2.shift();
        var s2 = i2.join(" "), u = s2.match(/Signature=(.*?)(?:,|\s|\r?\n|$)/)[1];
        n2["X-Amz-Signature"] = u, delete n2.Expires;
      }
      t2.pathname = r2.pathname, t2.search = o.util.queryParamsToString(n2);
    }
    var o = e3("../core"), s = o.util.inherit, a = "presigned-expires";
    o.Signers.Presign = s({ sign: }), t.exports = o.Signers.Presign;
  }, { "../core": 39 }], 89: [function(e3, t, r) {
    (function(r2) {
      var n = e3("./core"), i = e3("./model/api"), o = e3("./region_config"), s = n.util.inherit, a = 0;
      n.Service = s({ constructor:  initialize:  validateService:  loadServiceClass:  getLatestServiceClass: function(e4) {
        return e4 = this.getLatestServiceVersion(e4), this.constructor.services[e4] === null && n.Service.defineServiceApi(this.constructor, e4), this.constructor.services[e4];
      }, getLatestServiceVersion: function(e4) {
        if (!this.constructor.services || this.constructor.services.length === 0)
          throw new Error("No services defined on " + this.constructor.serviceIdentifier);
        if (e4 ? n.util.isType(e4, Date) && (e4 = n.util.date.iso8601(e4).split("T")[0]) : e4 = "latest", Object.hasOwnProperty(this.constructor.services, e4))
          return e4;
        for (var t2 = Object.keys(this.constructor.services).sort(), r3 = null, i2 = t2.length - 1; i2 >= 0; i2--)
          if (t2[i2][t2[i2].length - 1] !== "*" && (r3 = t2[i2]), t2[i2].substr(0, 10) <= e4)
            return r3;
        throw new Error("Could not find " + this.constructor.serviceIdentifier + " API to satisfy version constraint `" + e4 + "'");
      }, api: {}, defaultRetryCount: 3, customizeRequests: function(e4) {
        if (e4) {
          if (typeof e4 != "function")
            throw new Error("Invalid callback type '" + typeof e4 + "' provided in customizeRequests");
          this.customRequestHandler = e4;
        } else
          this.customRequestHandler = null;
      }, makeRequest: function(e4, t2, r3) {
        if (typeof t2 == "function" && (r3 = t2, t2 = null), t2 = t2 || {}, this.config.params) {
          var i2 = this.api.operations[e4];
          i2 && (t2 = n.util.copy(t2), n.util.each(this.config.params, function(e5, r4) {
            i2.input.members[e5] && (t2[e5] !== void 0 && t2[e5] !== null || (t2[e5] = r4));
          }));
        }
        var o2 = new n.Request(this, e4, t2);
        return this.addAllRequestListeners(o2), this.attachMonitoringEmitter(o2), r3 && o2.send(r3), o2;
      }, makeUnauthenticatedRequest: function(e4, t2, r3) {
        typeof t2 == "function" && (r3 = t2, t2 = {});
        var n2 = this.makeRequest(e4, t2).toUnauthenticated();
        return r3 ? n2.send(r3) : n2;
      }, waitFor:  addAllRequestListeners: function(e4) {
        for (var t2 = [n.events, n.EventListeners.Core, this.serviceInterface(), n.EventListeners.CorePost], r3 = 0; r3 < t2.length; r3++)
          t2[r3] && e4.addListeners(t2[r3]);
        this.config.paramValidation || e4.removeListener("validate", n.EventListeners.Core.VALIDATE_PARAMETERS), this.config.logger && e4.addListeners(n.EventListeners.Logger), this.setupRequestListeners(e4), typeof this.constructor.prototype.customRequestHandler == "function" && this.constructor.prototype.customRequestHandler(e4), Object.prototype.hasOwnProperty.call(this, "customRequestHandler") && typeof this.customRequestHandler == "function" && this.customRequestHandler(e4);
      }, apiCallEvent:  apiAttemptEvent: function(e4) {
        var t2 = e4.service.api.operations[e4.operation], r3 = { Type: "ApiCallAttempt", Api: t2 ? t2.name : e4.operation, Version: 1, Service: e4.service.api.serviceId || e4.service.api.endpointPrefix, Fqdn: e4.httpRequest.endpoint.hostname, UserAgent: e4.httpRequest.getUserAgent() }, n2 = e4.response;
        return n2.httpResponse.statusCode && (r3.HttpStatusCode = n2.httpResponse.statusCode), !e4._unAuthenticated && e4.service.config.credentials && e4.service.config.credentials.accessKeyId && (r3.AccessKey = e4.service.config.credentials.accessKeyId), n2.httpResponse.headers && (e4.httpRequest.headers["x-amz-security-token"] && (r3.SessionToken = e4.httpRequest.headers["x-amz-security-token"]), n2.httpResponse.headers["x-amzn-requestid"] && (r3.XAmznRequestId = n2.httpResponse.headers["x-amzn-requestid"]), n2.httpResponse.headers["x-amz-request-id"] && (r3.XAmzRequestId = n2.httpResponse.headers["x-amz-request-id"]), n2.httpResponse.headers["x-amz-id-2"] && (r3.XAmzId2 = n2.httpResponse.headers["x-amz-id-2"])), r3;
      }, attemptFailEvent:  attachMonitoringEmitter: function(e4) {
        var t2, r3, i2, o2, s2, a2, u = 0, c = this;
        e4.on("validate",  !0), e4.on("sign",  !0), e4.on("validateResponse", , e4.addNamedListener("API_CALL_ATTEMPT", "success", , e4.addNamedListener("API_CALL_ATTEMPT_RETRY", "retry", , e4.addNamedListener("API_CALL", "complete", function() {
          var t3 = c.apiCallEvent(e4);
          if (t3.AttemptCount = u, !(t3.AttemptCount <= 0)) {
            t3.Timestamp = a2;
            var r4 = Math.round(n.util.realClock.now() - o2);
            t3.Latency = r4 >= 0 ? r4 : 0;
            var i3 = e4.response;
            i3.error && i3.error.retryable && typeof i3.retryCount == "number" && typeof i3.maxRetries == "number" && i3.retryCount >= i3.maxRetries && (t3.MaxRetriesExceeded = 1), c.emit("apiCall", [t3]);
          }
        });
      }, setupRequestListeners:  getSignerClass: function(e4) {
        var t2, r3 = null, i2 = "";
        return e4 && (r3 = (e4.service.api.operations || {})[e4.operation] || null, i2 = r3 ? r3.authtype : ""), t2 = this.config.signatureVersion ? this.config.signatureVersion : i2 === "v4" || i2 === "v4-unsigned-body" ? "v4" : this.api.signatureVersion, n.Signers.RequestSigner.getVersion(t2);
      }, serviceInterface:  successfulResponse:  numRetries: function() {
        return this.config.maxRetries !== void 0 ? this.config.maxRetries : this.defaultRetryCount;
      }, retryDelays:  retryableError:  networkingError: function(e4) {
        return e4.code === "NetworkingError";
      }, timeoutError: function(e4) {
        return e4.code === "TimeoutError";
      }, expiredCredentialsError:  clockSkewError:  getSkewCorrectedDate:  applyClockOffset:  isClockSkewed:  throttledError: function(e4) {
        if (e4.statusCode === 429)
          return !0;
        switch (e4.code) {
          case "ProvisionedThroughputExceededException":
          case "Throttling":
          case "ThrottlingException":
          case "RequestLimitExceeded":
          case "RequestThrottled":
          case "RequestThrottledException":
          case "TooManyRequestsException":
          case "TransactionInProgressException":
          case "EC2ThrottledException":
            return !0;
          default:
            return !1;
        }
      }, endpointFromTemplate: function(e4) {
        if (typeof e4 != "string")
          return e4;
        var t2 = e4;
        return t2 = t2.replace(/\{service\}/g, this.api.endpointPrefix), t2 = t2.replace(/\{region\}/g, this.config.region), t2 = t2.replace(/\{scheme\}/g, this.config.sslEnabled ? "https" : "http");
      }, setEndpoint:  paginationConfig: }), n.util.update(n.Service, {
        defineMethods: function(e4) {
          n.util.each(e4.prototype.api.operations, function(t2) {
            e4.prototype[t2] || (e4.prototype.api.operations[t2].authtype === "none" ? e4.prototype[t2] = function(e5, r3) {
              return this.makeUnauthenticatedRequest(t2, e5, r3);
            } : e4.prototype[t2] = ;
          });
        },
        defineService: function(e4, t2, r3) {
          n.Service._serviceMap[e4] = !0, Array.isArray(t2) || (r3 = t2, t2 = []);
          var i2 = s(n.Service, r3 || {});
          if (typeof e4 == "string") {
            n.Service.addVersions(i2, t2);
            var o2 = i2.serviceIdentifier || e4;
            i2.serviceIdentifier = o2;
          } else
            i2.prototype.api = e4, n.Service.defineMethods(i2);
          if (n.SequentialExecutor.call(this.prototype), !this.prototype.publisher && n.util.clientSideMonitoring) {
            var a2 = n.util.clientSideMonitoring.Publisher, u = n.util.clientSideMonitoring.configProvider, c = u();
            this.prototype.publisher = new a2(c), c.enabled && (n.Service._clientSideMonitoring = !0);
          }
          return n.SequentialExecutor.call(i2.prototype), n.Service.addDefaultMonitoringListeners(i2.prototype), i2;
        },
        addVersions: function(e4, t2) {
          Array.isArray(t2) || (t2 = [t2]), e4.services = e4.services || {};
          for (var r3 = 0; r3 < t2.length; r3++)
            e4.services[t2[r3]] === void 0 && (e4.services[t2[r3]] = null);
          e4.apiVersions = Object.keys(e4.services).sort();
        },
        defineServiceApi: function(e4, t2, r3) {
                    var a2 = s(e4, { serviceIdentifier: e4.serviceIdentifier });
          if (typeof t2 == "string") {
            if (r3)
              o2(r3);
            else
              try {
                o2(n.apiLoader(e4.serviceIdentifier, t2));
              } catch (r4) {
                throw n.util.error(r4, { message: "Could not find API configuration " + e4.serviceIdentifier + "-" + t2 });
              }
            Object.prototype.hasOwnProperty.call(e4.services, t2) || (e4.apiVersions = e4.apiVersions.concat(t2).sort()), e4.services[t2] = a2;
          } else
            o2(t2);
          return n.Service.defineMethods(a2), a2;
        },
        hasService: 
        addDefaultMonitoringListeners: 
        _serviceMap: {}
      }), n.util.mixin(n.Service, n.SequentialExecutor), t.exports = n.Service;
    }).call(this, e3("_process"));
  }, { "./core": 39, "./model/api": 65, "./region_config": 82, _process: 8 }], 82: [function(e3, t, r) {
            function o(e4, t2) {
      u.each(t2, function(t3, r2) {
        t3 !== "globalEndpoint" && (e4.config[t3] !== void 0 && e4.config[t3] !== null || (e4.config[t3] = r2));
      });
    }
    function s(e4) {
      for (var t2 = i(e4), r2 = 0; r2 < t2.length; r2++) {
        var n2 = t2[r2];
        if (n2 && Object.prototype.hasOwnProperty.call(c.rules, n2)) {
          var s2 = c.rules[n2];
          return typeof s2 == "string" && (s2 = c.patterns[s2]), e4.config.useDualstack && u.isDualstackAvailable(e4) && (s2 = u.copy(s2), s2.endpoint = s2.endpoint.replace(/{service}\.({region}\.)?/, "{service}.dualstack.{region}.")), e4.isGlobalEndpoint = !!s2.globalEndpoint, s2.signingRegion && (e4.signingRegion = s2.signingRegion), s2.signatureVersion || (s2.signatureVersion = "v4"), void o(e4, s2);
        }
      }
    }
    function a(e4) {
      for (var t2 = { "^(us|eu|ap|sa|ca|me)\\-\\w+\\-\\d+$": "amazonaws.com", "^cn\\-\\w+\\-\\d+$": "amazonaws.com.cn", "^us\\-gov\\-\\w+\\-\\d+$": "amazonaws.com", "^us\\-iso\\-\\w+\\-\\d+$": "c2s.ic.gov", "^us\\-isob\\-\\w+\\-\\d+$": "sc2s.sgov.gov" }, r2 = Object.keys(t2), n2 = 0; n2 < r2.length; n2++) {
        var i2 = RegExp(r2[n2]), o2 = t2[r2[n2]];
        if (i2.test(e4))
          return o2;
      }
      return "amazonaws.com";
    }
    var u = e3("./util"), c = e3("./region_config_data.json");
    t.exports = { configureEndpoint: s, getEndpointSuffix: a };
  }, { "./region_config_data.json": 83, "./util": 118 }], 83: [ {}], 86: [function(e3, t, r) {
    var n = e3("./core"), i = n.util.inherit, o = e3("jmespath");
    n.Response = i({ constructor:  nextPage: function(e4) {
      var t2, r2 = this.request.service, i2 = this.request.operation;
      try {
        t2 = r2.paginationConfig(i2, !0);
      } catch (e5) {
        this.error = e5;
      }
      if (!this.hasNextPage()) {
        if (e4)
          e4(this.error, null);
        else if (this.error)
          throw this.error;
        return null;
      }
      var o2 = n.util.copy(this.request.params);
      if (this.nextPageTokens) {
        var s = t2.inputToken;
        typeof s == "string" && (s = [s]);
        for (var a = 0; a < s.length; a++)
          o2[s[a]] = this.nextPageTokens[a];
        return r2.makeRequest(this.request.operation, o2, e4);
      }
      return e4 ? e4(null, null) : null;
    }, hasNextPage: function() {
      return this.cacheNextPageTokens(), !!this.nextPageTokens || this.nextPageTokens === void 0 && void 0;
    }, cacheNextPageTokens: function() {
      if (Object.prototype.hasOwnProperty.call(this, "nextPageTokens"))
        return this.nextPageTokens;
      this.nextPageTokens = void 0;
      var e4 = this.request.service.paginationConfig(this.request.operation);
      if (!e4)
        return this.nextPageTokens;
      if (this.nextPageTokens = null, e4.moreResults && !o.search(this.data, e4.moreResults))
        return this.nextPageTokens;
      var t2 = e4.outputToken;
      return typeof t2 == "string" && (t2 = [t2]), n.util.arrayEach.call(this, t2, , this.nextPageTokens;
    } });
  }, { "./core": 39, jmespath: 7 }], 85: [function(e3, t, r) {
    function n(e4) {
      var t2 = e4.request._waiter, r2 = t2.config.acceptors, n2 = !1, i2 = "retry";
      r2.forEach(, !n2 && e4.error && (i2 = "failure"), i2 === "success" ? t2.setSuccess(e4) : t2.setError(e4, i2 === "retry");
    }
    var i = e3("./core"), o = i.util.inherit, s = e3("jmespath");
    i.ResourceWaiter = o({ constructor:  service: null, state: null, config: null, matchers: { path:  pathAll:  pathAny:  status: function(e4, t2) {
      var r2 = e4.httpResponse.statusCode;
      return typeof r2 == "number" && r2 === t2;
    }, error: function(e4, t2) {
      return typeof t2 == "string" && e4.error ? t2 === e4.error.code : t2 === !!e4.error;
    } }, listeners: new i.SequentialExecutor().addNamedListeners(function(e4) {
      e4("RETRY_CHECK", "retry", function(e5) {
        var t2 = e5.request._waiter;
        e5.error && e5.error.code === "ResourceNotReady" && (e5.error.retryDelay = 1e3 * (t2.config.delay || 0));
      }), e4("CHECK_OUTPUT", "extractData", n), e4("CHECK_ERROR", "extractError", n);
    }), wait: function(e4, t2) {
      typeof e4 == "function" && (t2 = e4, e4 = void 0), e4 && e4.$waiter && (e4 = i.util.copy(e4), typeof e4.$waiter.delay == "number" && (this.config.delay = e4.$waiter.delay), typeof e4.$waiter.maxAttempts == "number" && (this.config.maxAttempts = e4.$waiter.maxAttempts), delete e4.$waiter);
      var r2 = this.service.makeRequest(this.config.operation, e4);
      return r2._waiter = this, r2.response.maxRetries = this.config.maxAttempts, r2.addListeners(this.listeners), t2 && r2.send(t2), r2;
    }, setSuccess:  setError:  loadWaiterConfig: });
  }, { "./core": 39, jmespath: 7 }], 84: [function(e3, t, r) {
    (function(t2) {
            var n = e3("./core"), i = e3("./state_machine"), o = n.util.inherit, s = n.util.domain, a = e3("jmespath"), u = { success: 1, error: 1, complete: 1 }, c = new i();
      c.setupStates =  c.setupStates(), n.Request = o({ constructor:  send:  build:  runTo:  abort:  eachPage: function(e4) {
        function t3(r3) {
          e4.call(r3, r3.error, r3.data, function(i2) {
            i2 !== !1 && (r3.hasNextPage() ? r3.nextPage().on("complete", t3).send() : e4.call(r3, null, null, n.util.fn.noop));
          });
        }
        e4 = n.util.fn.makeAsync(e4, 3), this.on("complete", t3).send();
      }, eachItem: function(e4) {
        function t3(t4, i2) {
          if (t4)
            return e4(t4, null);
          if (i2 === null)
            return e4(null, null);
          var o2 = r3.service.paginationConfig(r3.operation), s2 = o2.resultKey;
          Array.isArray(s2) && (s2 = s2[0]);
          var u2 = a.search(i2, s2), c2 = !0;
          return n.util.arrayEach(u2, function(t5) {
            if ((c2 = e4(null, t5)) === !1)
              return n.util.abort;
          }), c2;
        }
        var r3 = this;
        this.eachPage(t3);
      }, isPageable:  createReadStream: function() {
        var e4 = n.util.stream, r3 = this, i2 = null;
        return n.HttpClient.streamsApiVersion === 2 ? (i2 = new e4.PassThrough(), t2.nextTick(function() {
          r3.send();
        })) : (i2 = new e4.Stream(), i2.readable = !0, i2.sent = !1, i2.on("newListener", function(e5) {
          i2.sent || e5 !== "data" || (i2.sent = !0, t2.nextTick();
        })), this.on("error", function(e5) {
          i2.emit("error", e5);
        }), this.on("httpHeaders", function(t3, o2, s2) {
          if (t3 < 300) {
            r3.removeListener("httpData", n.EventListeners.Core.HTTP_DATA), r3.removeListener("httpError", n.EventListeners.Core.HTTP_ERROR), r3.on("httpError", ;
            var a2, u2 = !1;
            if (r3.httpRequest.method !== "HEAD" && (a2 = parseInt(o2["content-length"], 10)), a2 !== void 0 && !isNaN(a2) && a2 >= 0) {
              u2 = !0;
              var c2 = 0;
            }
            var l = function() {
              u2 && c2 !== a2 ? i2.emit("error", n.util.error(new Error("Stream content length mismatch. Received " + c2 + " of " + a2 + " bytes."), { code: "StreamContentLengthMismatch" })) : n.HttpClient.streamsApiVersion === 2 ? i2.end() : i2.emit("end");
            }, h = s2.httpResponse.createUnbufferedStream();
            if (n.HttpClient.streamsApiVersion === 2)
              if (u2) {
                var p = new e4.PassThrough();
                p._write =  p.on("end", l), i2.on("error", , h.pipe(p).pipe(i2, { end: !1 });
              } else
                h.pipe(i2);
            else
              u2 && h.on("data", , h.on("data", function(e5) {
                i2.emit("data", e5);
              }), h.on("end", l);
            h.on("error", ;
          }
        }), i2;
      }, emitEvent: function(e4, t3, r3) {
        typeof t3 == "function" && (r3 = t3, t3 = null), r3 || (r3 = function() {
        }), t3 || (t3 = this.eventParameters(e4, this.response)), n.SequentialExecutor.prototype.emit.call(this, e4, t3, ;
      }, eventParameters:  presign: function(e4, t3) {
        return t3 || typeof e4 != "function" || (t3 = e4, e4 = null), new n.Signers.Presign().sign(this.toGet(), e4, t3);
      }, isPresigned:  toUnauthenticated:  toGet: function() {
        return this.service.api.protocol !== "query" && this.service.api.protocol !== "ec2" || (this.removeListener("build", this.buildAsGet), this.addListener("build", this.buildAsGet)), this;
      }, buildAsGet:  haltHandlersOnError: }), n.Request.addPromisesToClass =  n.Request.deletePromisesFromClass =  n.util.addPromises(n.Request), n.util.mixin(n.Request, n.SequentialExecutor);
    }).call(this, e3("_process"));
  }, { "./core": 39, "./state_machine": 117, _process: 8, jmespath: 7 }], 117: [function(e3, t, r) {
        n.prototype.runTo = function(e4, t2, r2, n2) {
      typeof e4 == "function" && (n2 = r2, r2 = t2, t2 = e4, e4 = null);
      var i = this, o = i.states[i.currentState];
      o.fn.call(r2 || i, n2, ;
    }, n.prototype.addState = function(e4, t2, r2, n2) {
      return typeof t2 == "function" ? (n2 = t2, t2 = null, r2 = null) : typeof r2 == "function" && (n2 = r2, r2 = null), this.currentState || (this.currentState = e4), this.states[e4] = { accept: t2, fail: r2, fn: n2 }, this;
    }, t.exports = n;
  }, {}], 71: [function(e3, t, r) {
    var n = e3("./core");
    n.ParamValidator = n.util.inherit({ constructor: function(e4) {
      e4 !== !0 && e4 !== void 0 || (e4 = { min: !0 }), this.validation = e4;
    }, validate: function(e4, t2, r2) {
      if (this.errors = [], this.validateMember(e4, t2 || {}, r2 || "params"), this.errors.length > 1) {
        var i = this.errors.join(`
* `);
        throw i = "There were " + this.errors.length + ` validation errors:
* ` + i, n.util.error(new Error(i), { code: "MultipleValidationErrors", errors: this.errors });
      }
      if (this.errors.length === 1)
        throw this.errors[0];
      return !0;
    }, fail:  validateStructure: function(e4, t2, r2) {
      this.validateType(t2, r2, ["object"], "structure");
      for (var n2, i = 0; e4.required && i < e4.required.length; i++) {
        n2 = e4.required[i];
        var o = t2[n2];
        o != null || this.fail("MissingRequiredParameter", "Missing required key '" + n2 + "' in " + r2);
      }
      for (n2 in t2)
        if (Object.prototype.hasOwnProperty.call(t2, n2)) {
          var s = t2[n2], a = e4.members[n2];
          if (a !== void 0) {
            var u = [r2, n2].join(".");
            this.validateMember(a, s, u);
          } else
            this.fail("UnexpectedParameter", "Unexpected key '" + n2 + "' found in " + r2);
        }
      return !0;
    }, validateMember:  validateList:  validateMap:  validateScalar:  validateString: function(e4, t2, r2) {
      var n2 = ["string"];
      e4.isJsonValue && (n2 = n2.concat(["number", "object", "boolean"])), t2 !== null && this.validateType(t2, r2, n2) && (this.validateEnum(e4, t2, r2), this.validateRange(e4, t2.length, r2, "string length"), this.validatePattern(e4, t2, r2), this.validateUri(e4, t2, r2));
    }, validateUri: function(e4, t2, r2) {
      e4.location === "uri" && t2.length === 0 && this.fail("UriParameterError", 'Expected uri parameter to have length >= 1, but found "' + t2 + '" for ' + r2);
    }, validatePattern: function(e4, t2, r2) {
      this.validation.pattern && e4.pattern !== void 0 && (new RegExp(e4.pattern).test(t2) || this.fail("PatternMatchError", 'Provided value "' + t2 + '" does not match regex pattern /' + e4.pattern + "/ for " + r2));
    }, validateRange: function(e4, t2, r2, n2) {
      this.validation.min && e4.min !== void 0 && t2 < e4.min && this.fail("MinRangeError", "Expected " + n2 + " >= " + e4.min + ", but found " + t2 + " for " + r2), this.validation.max && e4.max !== void 0 && t2 > e4.max && this.fail("MaxRangeError", "Expected " + n2 + " <= " + e4.max + ", but found " + t2 + " for " + r2);
    }, validateEnum: function(e4, t2, r2) {
      this.validation.enum && e4.enum !== void 0 && e4.enum.indexOf(t2) === -1 && this.fail("EnumError", "Found string value of " + t2 + ", but expected " + e4.enum.join("|") + " for " + r2);
    }, validateType: function(e4, t2, r2, i) {
      if (e4 == null)
        return !1;
      for (var o = !1, s = 0; s < r2.length; s++) {
        if (typeof r2[s] == "string") {
          if (typeof e4 === r2[s])
            return !0;
        } else if (r2[s] instanceof RegExp) {
          if ((e4 || "").toString().match(r2[s]))
            return !0;
        } else {
          if (e4 instanceof r2[s] || n.util.isType(e4, r2[s]))
            return !0;
          i || o || (r2 = r2.slice()), r2[s] = n.util.typeName(r2[s]);
        }
        o = !0;
      }
      var a = i;
      a || (a = r2.join(", ").replace(/,([^,]+)$/, ", or$1"));
      var u = a.match(/^[aeiou]/i) ? "n" : "";
      return this.fail("InvalidParameterType", "Expected " + t2 + " to be a" + u + " " + a), !1;
    }, validateNumber: function(e4, t2, r2) {
      if (t2 != null) {
        if (typeof t2 == "string") {
          var n2 = parseFloat(t2);
          n2.toString() === t2 && (t2 = n2);
        }
        this.validateType(t2, r2, ["number"]) && this.validateRange(e4, t2, r2, "numeric value");
      }
    }, validatePayload: function(e4, t2) {
      if (e4 != null && typeof e4 != "string" && (!e4 || typeof e4.byteLength != "number")) {
        if (n.util.isNode()) {
          var r2 = n.util.stream.Stream;
          if (n.util.Buffer.isBuffer(e4) || e4 instanceof r2)
            return;
        } else if (typeof Blob !== void 0 && e4 instanceof Blob)
          return;
        var i = ["Buffer", "Stream", "File", "Blob", "ArrayBuffer", "DataView"];
        if (e4) {
          for (var o = 0; o < i.length; o++)
            if (n.util.isType(e4, i[o]) || n.util.typeName(e4.constructor) === i[o])
              return;
        }
        this.fail("InvalidParameterType", "Expected " + t2 + " to be a string, Buffer, Stream, Blob, or typed array object");
      }
    } });
  }, { "./core": 39 }], 65: [function(e3, t, r) {
    function n(e4, t2) {
      function r2(e5, t3) {
        t3.endpointoperation === !0 && h(n2, "endpointOperation", l.string.lowerFirst(e5)), t3.endpointdiscovery && !n2.hasRequiredEndpointDiscovery && h(n2, "hasRequiredEndpointDiscovery", t3.endpointdiscovery.required === !0);
      }
      var n2 = this;
      e4 = e4 || {}, t2 = t2 || {}, t2.api = this, e4.metadata = e4.metadata || {};
      var f = t2.serviceIdentifier;
      delete t2.serviceIdentifier, h(this, "isApi", !0, !1), h(this, "apiVersion", e4.metadata.apiVersion), h(this, "endpointPrefix", e4.metadata.endpointPrefix), h(this, "signingName", e4.metadata.signingName), h(this, "globalEndpoint", e4.metadata.globalEndpoint), h(this, "signatureVersion", e4.metadata.signatureVersion), h(this, "jsonVersion", e4.metadata.jsonVersion), h(this, "targetPrefix", e4.metadata.targetPrefix), h(this, "protocol", e4.metadata.protocol), h(this, "timestampFormat", e4.metadata.timestampFormat), h(this, "xmlNamespaceUri", e4.metadata.xmlNamespace), h(this, "abbreviation", e4.metadata.serviceAbbreviation), h(this, "fullName", e4.metadata.serviceFullName), h(this, "serviceId", e4.metadata.serviceId), f && c[f] && h(this, "xmlNoDefaultLists", c[f].xmlNoDefaultLists, !1), p(this, "className", function() {
        var t3 = e4.metadata.serviceAbbreviation || e4.metadata.serviceFullName;
        return t3 ? (t3 = t3.replace(/^Amazon|AWS\s*|\(.*|\s+|\W+/g, ""), t3 === "ElasticLoadBalancing" && (t3 = "ELB"), t3) : null;
      }), h(this, "operations", new i(e4.operations, t2, function(e5, r3) {
        return new o(e5, r3, t2);
      }, l.string.lowerFirst, r2)), h(this, "shapes", new i(e4.shapes, t2, ), h(this, "paginators", new i(e4.paginators, t2, function(e5, r3) {
        return new a(e5, r3, t2);
      })), h(this, "waiters", new i(e4.waiters, t2,  l.string.lowerFirst)), t2.documentation && (h(this, "documentation", e4.documentation), h(this, "documentationUrl", e4.documentationUrl));
    }
    var i = e3("./collection"), o = e3("./operation"), s = e3("./shape"), a = e3("./paginator"), u = e3("./resource_waiter"), c = e3("../../apis/metadata.json"), l = e3("../util"), h = l.property, p = l.memoizedProperty;
    t.exports = n;
  }, { "../../apis/metadata.json": 26, "../util": 118, "./collection": 66, "./operation": 67, "./paginator": 68, "./resource_waiter": 69, "./shape": 70 }], 69: [ { "../util": 118 }], 68: [ { "../util": 118 }], 67: [function(e3, t, r) {
    function n(e4, t2, r2) {
      var n2 = this;
      r2 = r2 || {}, a(this, "name", t2.name || e4), a(this, "api", r2.api, !1), t2.http = t2.http || {}, a(this, "endpoint", t2.endpoint), a(this, "httpMethod", t2.http.method || "POST"), a(this, "httpPath", t2.http.requestUri || "/"), a(this, "authtype", t2.authtype || ""), a(this, "endpointDiscoveryRequired", t2.endpointdiscovery ? t2.endpointdiscovery.required ? "REQUIRED" : "OPTIONAL" : "NULL"), u(this, "input", function() {
        return t2.input ? o.create(t2.input, r2) : new o.create({ type: "structure" }, r2);
      }), u(this, "output", , u(this, "errors", , u(this, "paginator", , r2.documentation && (a(this, "documentation", t2.documentation), a(this, "documentationUrl", t2.documentationUrl)), u(this, "idempotentMembers", function() {
        var e5 = [], t3 = n2.input, r3 = t3.members;
        if (!t3.members)
          return e5;
        for (var i2 in r3)
          r3.hasOwnProperty(i2) && r3[i2].isIdempotent === !0 && e5.push(i2);
        return e5;
      }), u(this, "hasEventOutput", ;
    }
    function i(e4) {
      var t2 = e4.members, r2 = e4.payload;
      if (!e4.members)
        return !1;
      if (r2)
        return t2[r2].isEventStream;
      for (var n2 in t2)
        if (!t2.hasOwnProperty(n2) && t2[n2].isEventStream === !0)
          return !0;
      return !1;
    }
    var o = e3("./shape"), s = e3("../util"), a = s.property, u = s.memoizedProperty;
    t.exports = n;
  }, { "../util": 118, "./shape": 70 }], 61: [function(e3, t, r) {
    var n = e3("./core"), i = n.util.inherit;
    n.Endpoint = i({ constructor: function(e4, t2) {
      if (n.util.hideProperties(this, ["slashes", "auth", "hash", "search", "query"]), e4 == null)
        throw new Error("Invalid endpoint: " + e4);
      if (typeof e4 != "string")
        return n.util.copy(e4);
      e4.match(/^http/) || (e4 = ((t2 && t2.sslEnabled !== void 0 ? t2.sslEnabled : n.config.sslEnabled) ? "https" : "http") + "://" + e4), n.util.update(this, n.util.urlParse(e4)), this.port ? this.port = parseInt(this.port, 10) : this.port = this.protocol === "https:" ? 443 : 80;
    } }), n.HttpRequest = i({ constructor:  setUserAgent:  getUserAgentHeaderName:  appendToUserAgent: function(e4) {
      typeof e4 == "string" && e4 && (this._userAgent += " " + e4), this.headers[this.getUserAgentHeaderName()] = this._userAgent;
    }, getUserAgent:  pathname:  search:  updateEndpoint: }), n.HttpResponse = i({ constructor:  createUnbufferedStream: }), n.HttpClient = i({}), n.HttpClient.getInstance = function() {
      return this.singleton === void 0 && (this.singleton = new this()), this.singleton;
    };
  }, { "./core": 39 }], 60: [function(e3, t, r) {
        var i = e3("./core"), o = e3("./sequential_executor"), s = e3("./discover_endpoint").discoverEndpoint;
    i.EventListeners = { Core: {} }, i.EventListeners = { Core: new o().addNamedListeners(function(e4, t2) {
      t2("VALIDATE_CREDENTIALS", "validate", , e4("VALIDATE_REGION", "validate", , e4("BUILD_IDEMPOTENCY_TOKENS", "validate", , e4("VALIDATE_PARAMETERS", "validate", , t2("COMPUTE_SHA256", "afterBuild", , e4("SET_CONTENT_LENGTH", "afterBuild", function(e5) {
        var t3 = n(e5), r2 = i.util.getRequestPayloadShape(e5);
        if (e5.httpRequest.headers["Content-Length"] === void 0)
          try {
            var o2 = i.util.string.byteLength(e5.httpRequest.body);
            e5.httpRequest.headers["Content-Length"] = o2;
          } catch (n2) {
            if (r2 && r2.isStreaming) {
              if (r2.requiresLength)
                throw n2;
              if (t3.indexOf("unsigned-body") >= 0)
                return void (e5.httpRequest.headers["Transfer-Encoding"] = "chunked");
              throw n2;
            }
            throw n2;
          }
      }), e4("SET_HTTP_HOST", "afterBuild", , e4("RESTART", "restart", , t2("DISCOVER_ENDPOINT", "sign", s, !0), t2("SIGN", "sign", function(e5, t3) {
        var r2 = e5.service, n2 = e5.service.api.operations || {}, i2 = n2[e5.operation], o2 = i2 ? i2.authtype : "";
        if (!r2.api.signatureVersion && !o2 && !r2.config.signatureVersion)
          return t3();
        r2.config.getCredentials(function(n3, o3) {
          if (n3)
            return e5.response.error = n3, t3();
          try {
            var s2 = r2.getSkewCorrectedDate(), a = r2.getSignerClass(e5), u = new a(e5.httpRequest, r2.api.signingName || r2.api.endpointPrefix, { signatureCache: r2.config.signatureCache, operation: i2, signatureVersion: r2.api.signatureVersion });
            u.setServiceClientId(r2._clientId), delete e5.httpRequest.headers.Authorization, delete e5.httpRequest.headers.Date, delete e5.httpRequest.headers["X-Amz-Date"], u.addAuthorization(o3, s2), e5.signedAt = s2;
          } catch (t4) {
            e5.response.error = t4;
          }
          t3();
        });
      }), e4("VALIDATE_RESPONSE", "validateResponse", , t2("SEND", "send", function(e5, t3) {
        function r2(r3) {
          e5.httpResponse.stream = r3;
          var n3 = e5.request.httpRequest.stream, o3 = e5.request.service, s3 = o3.api, a = e5.request.operation, u = s3.operations[a] || {};
          r3.on("headers", function(n4, s4, a2) {
            if (e5.request.emit("httpHeaders", [n4, s4, e5, a2]), !e5.httpResponse.streaming)
              if (i.HttpClient.streamsApiVersion === 2) {
                if (u.hasEventOutput && o3.successfulResponse(e5))
                  return e5.request.emit("httpDone"), void t3();
                r3.on("readable", function() {
                  var t4 = r3.read();
                  t4 !== null && e5.request.emit("httpData", [t4, e5]);
                });
              } else
                r3.on("data", function(t4) {
                  e5.request.emit("httpData", [t4, e5]);
                });
          }), r3.on("end", function() {
            if (!n3 || !n3.didCallback) {
              if (i.HttpClient.streamsApiVersion === 2 && u.hasEventOutput && o3.successfulResponse(e5))
                return;
              e5.request.emit("httpDone"), t3();
            }
          });
        }
                function o2(r3) {
          if (r3.code !== "RequestAbortedError") {
            var n3 = r3.code === "TimeoutError" ? r3.code : "NetworkingError";
            r3 = i.util.error(r3, { code: n3, region: e5.request.httpRequest.region, hostname: e5.request.httpRequest.endpoint.hostname, retryable: !0 });
          }
          e5.error = r3, e5.request.emit("httpError", [e5.error, e5], ;
        }
                e5.httpResponse._abortCallback = t3, e5.error = null, e5.data = null, (e5.request.service.getSkewCorrectedDate() - this.signedAt) / 1e3 >= 600 ? this.emit("sign", [this],  : s2();
      }), e4("HTTP_HEADERS", "httpHeaders", , e4("HTTP_DATA", "httpData", , e4("HTTP_DONE", "httpDone", , e4("FINALIZE_ERROR", "retry", function(e5) {
        e5.httpResponse.statusCode && (e5.error.statusCode = e5.httpResponse.statusCode, e5.error.retryable === void 0 && (e5.error.retryable = this.service.retryableError(e5.error, this)));
      }), e4("INVALIDATE_CREDENTIALS", "retry", , e4("EXPIRED_SIGNATURE", "retry", function(e5) {
        var t3 = e5.error;
        t3 && typeof t3.code == "string" && typeof t3.message == "string" && t3.code.match(/Signature/) && t3.message.match(/expired/) && (e5.error.retryable = !0);
      }), e4("CLOCK_SKEWED", "retry", , e4("REDIRECT", "retry", , e4("RETRY_CHECK", "retry", , t2("RESET_RETRY_STATE", "afterRetry", ;
    }), CorePost: new o().addNamedListeners(function(e4) {
      e4("EXTRACT_REQUEST_ID", "extractData", i.util.extractRequestId), e4("EXTRACT_REQUEST_ID", "extractError", i.util.extractRequestId), e4("ENOTFOUND_ERROR", "httpError", function(e5) {
        if (e5.code === "NetworkingError" && e5.errno === "ENOTFOUND") {
          var t2 = "Inaccessible host: `" + e5.hostname + "'. This service may not be available in the `" + e5.region + "' region.";
          this.response.error = i.util.error(new Error(t2), { code: "UnknownEndpoint", region: e5.region, hostname: e5.hostname, retryable: !0, originalError: e5 });
        }
      });
    }), Logger: new o().addNamedListeners(function(t2) {
      t2("LOG_REQUEST", "complete", function(t3) {
                var n2 = t3.request, o2 = n2.service.config.logger;
        if (o2) {
          var s2 = function() {
            var s3 = t3.request.service.getSkewCorrectedDate().getTime(), a = (s3 - n2.startTime.getTime()) / 1e3, u = !!o2.isTTY, c = t3.httpResponse.statusCode, l = n2.params;
            n2.service.api.operations && n2.service.api.operations[n2.operation] && n2.service.api.operations[n2.operation].input && (l = r2(n2.service.api.operations[n2.operation].input, n2.params));
            var h = e3("util").inspect(l, !0, null), p = "";
            return u && (p += "\x1B[33m"), p += "[AWS " + n2.service.serviceIdentifier + " " + c, p += " " + a.toString() + "s " + t3.retryCount + " retries]", u && (p += "\x1B[0;1m"), p += " " + i.util.string.lowerFirst(n2.operation), p += "(" + h + ")", u && (p += "\x1B[0m"), p;
          }();
          typeof o2.log == "function" ? o2.log(s2) : typeof o2.write == "function" && o2.write(s2 + `
`);
        }
      });
    }), Json: new o().addNamedListeners(function(t2) {
      var r2 = e3("./protocol/json");
      t2("BUILD", "build", r2.buildRequest), t2("EXTRACT_DATA", "extractData", r2.extractData), t2("EXTRACT_ERROR", "extractError", r2.extractError);
    }), Rest: new o().addNamedListeners(function(t2) {
      var r2 = e3("./protocol/rest");
      t2("BUILD", "build", r2.buildRequest), t2("EXTRACT_DATA", "extractData", r2.extractData), t2("EXTRACT_ERROR", "extractError", r2.extractError);
    }), RestJson: new o().addNamedListeners(function(t2) {
      var r2 = e3("./protocol/rest_json");
      t2("BUILD", "build", r2.buildRequest), t2("EXTRACT_DATA", "extractData", r2.extractData), t2("EXTRACT_ERROR", "extractError", r2.extractError);
    }), RestXml: new o().addNamedListeners(function(t2) {
      var r2 = e3("./protocol/rest_xml");
      t2("BUILD", "build", r2.buildRequest), t2("EXTRACT_DATA", "extractData", r2.extractData), t2("EXTRACT_ERROR", "extractError", r2.extractError);
    }), Query: new o().addNamedListeners( };
  }, { "./core": 39, "./discover_endpoint": 47, "./protocol/json": 74, "./protocol/query": 75, "./protocol/rest": 76, "./protocol/rest_json": 77, "./protocol/rest_xml": 78, "./sequential_executor": 88, util: 20 }], 88: [function(e3, t, r) {
    var n = e3("./core");
    n.SequentialExecutor = n.util.inherit({ constructor:  listeners:  on:  onAsync:  removeListener:  removeAllListeners:  emit:  callListeners:  addListeners: function(e4) {
      var t2 = this;
      return e4._events && (e4 = e4._events), n.util.each(e4, function(e5, r2) {
        typeof r2 == "function" && (r2 = [r2]), n.util.arrayEach(r2, ;
      }), t2;
    }, addNamedListener:  addNamedAsyncListener:  addNamedListeners: }), n.SequentialExecutor.prototype.addListener = n.SequentialExecutor.prototype.on, t.exports = n.SequentialExecutor;
  }, { "./core": 39 }], 78: [function(e3, t, r) {
    function n(e4) {
      var t2 = e4.service.api.operations[e4.operation].input, r2 = new a.XML.Builder(), n2 = e4.params, i2 = t2.payload;
      if (i2) {
        var o2 = t2.members[i2];
        if ((n2 = n2[i2]) === void 0)
          return;
        if (o2.type === "structure") {
          var s2 = o2.name;
          e4.httpRequest.body = r2.toXML(n2, o2, s2, !0);
        } else
          e4.httpRequest.body = n2;
      } else
        e4.httpRequest.body = r2.toXML(n2, t2, t2.name || t2.shape || u.string.upperFirst(e4.operation) + "Request");
    }
    function i(e4) {
      c.buildRequest(e4), ["GET", "HEAD"].indexOf(e4.httpRequest.method) < 0 && n(e4);
    }
        function s(e4) {
      c.extractData(e4);
      var t2, r2 = e4.request, n2 = e4.httpResponse.body, i2 = r2.service.api.operations[r2.operation], o2 = i2.output, s2 = (i2.hasEventOutput, o2.payload);
      if (s2) {
        var l = o2.members[s2];
        l.isEventStream ? (t2 = new a.XML.Parser(), e4.data[s2] = u.createEventStream(a.HttpClient.streamsApiVersion === 2 ? e4.httpResponse.stream : e4.httpResponse.body, t2, l)) : l.type === "structure" ? (t2 = new a.XML.Parser(), e4.data[s2] = t2.parse(n2.toString(), l)) : l.type === "binary" || l.isStreaming ? e4.data[s2] = n2 : e4.data[s2] = l.toType(n2);
      } else if (n2.length > 0) {
        t2 = new a.XML.Parser();
        var h = t2.parse(n2.toString(), o2);
        u.update(e4.data, h);
      }
    }
    var a = e3("../core"), u = e3("../util"), c = e3("./rest");
    t.exports = { buildRequest: i, extractError: o, extractData: s };
  }, { "../core": 39, "../util": 118, "./rest": 76 }], 77: [function(e3, t, r) {
    function n(e4) {
      var t2 = new h(), r2 = e4.service.api.operations[e4.operation].input;
      if (r2.payload) {
        var n2 = {}, o2 = r2.members[r2.payload];
        if ((n2 = e4.params[r2.payload]) === void 0)
          return;
        o2.type === "structure" ? (e4.httpRequest.body = t2.build(n2, o2), i(e4)) : (e4.httpRequest.body = n2, (o2.type === "binary" || o2.isStreaming) && i(e4, !0));
      } else {
        var s2 = t2.build(e4.params, r2);
        s2 === "{}" && e4.httpRequest.method === "GET" || (e4.httpRequest.body = s2), i(e4);
      }
    }
    function i(e4, t2) {
      var r2 = e4.service.api.operations[e4.operation];
      if (r2.input, !e4.httpRequest.headers["Content-Type"]) {
        var n2 = t2 ? "binary/octet-stream" : "application/json";
        e4.httpRequest.headers["Content-Type"] = n2;
      }
    }
            function a(e4) {
      c.extractData(e4);
      var t2, r2 = e4.request, n2 = r2.service.api.operations[r2.operation], i2 = r2.service.api.operations[r2.operation].output || {};
      if (n2.hasEventOutput, i2.payload) {
        var o2 = i2.members[i2.payload], s2 = e4.httpResponse.body;
        if (o2.isEventStream)
          t2 = new p(), e4.data[payload] = u.createEventStream(AWS.HttpClient.streamsApiVersion === 2 ? e4.httpResponse.stream : s2, t2, o2);
        else if (o2.type === "structure" || o2.type === "list") {
          var t2 = new p();
          e4.data[i2.payload] = t2.parse(s2, o2);
        } else
          o2.type === "binary" || o2.isStreaming ? e4.data[i2.payload] = s2 : e4.data[i2.payload] = o2.toType(s2);
      } else {
        var a2 = e4.data;
        l.extractData(e4), e4.data = u.merge(a2, e4.data);
      }
    }
    var u = e3("../util"), c = e3("./rest"), l = e3("./json"), h = e3("../json/builder"), p = e3("../json/parser");
    t.exports = { buildRequest: o, extractError: s, extractData: a };
  }, { "../json/builder": 63, "../json/parser": 64, "../util": 118, "./json": 74, "./rest": 76 }], 76: [function(e3, t, r) {
        function i(e4, t2, r2, n2) {
      var i2 = [e4, t2].join("/");
      i2 = i2.replace(/\/+/g, "/");
      var o2 = {}, s2 = !1;
      if (l.each(r2.members, function(e5, t3) {
        var r3 = n2[e5];
        if (r3 != null)
          if (t3.location === "uri") {
            var a3 = new RegExp("\\{" + t3.name + "(\\+)?\\}");
            i2 = i2.replace(a3, ;
          } else
            t3.location === "querystring" && (s2 = !0, t3.type === "list" ? o2[t3.name] = r3.map( : t3.type === "map" ? l.each(r3,  : o2[t3.name] = l.uriEscape(t3.toWireFormat(r3).toString()));
      }), s2) {
        i2 += i2.indexOf("?") >= 0 ? "&" : "?";
        var a2 = [];
        l.arrayEach(Object.keys(o2).sort(), , i2 += a2.join("&");
      }
      return i2;
    }
        function s(e4) {
      var t2 = e4.service.api.operations[e4.operation];
      l.each(t2.input.members, function(t3, r2) {
        var n2 = e4.params[t3];
        n2 != null && (r2.location === "headers" && r2.type === "map" ? l.each(n2,  : r2.location === "header" && (n2 = r2.toWireFormat(n2).toString(), r2.isJsonValue && (n2 = l.base64.encode(n2)), e4.httpRequest.headers[r2.name] = n2));
      });
    }
        function u() {
    }
    function c(e4) {
      var t2 = e4.request, r2 = {}, n2 = e4.httpResponse, i2 = t2.service.api.operations[t2.operation], o2 = i2.output, s2 = {};
      l.each(n2.headers, , l.each(o2.members, function(e5, t3) {
        var i3 = (t3.name || e5).toLowerCase();
        if (t3.location === "headers" && t3.type === "map") {
          r2[e5] = {};
          var o3 = t3.isLocationName ? t3.name : "", a2 = new RegExp("^" + o3 + "(.+)", "i");
          l.each(n2.headers, function(t4, n3) {
            var i4 = t4.match(a2);
            i4 !== null && (r2[e5][i4[1]] = n3);
          });
        } else if (t3.location === "header") {
          if (s2[i3] !== void 0) {
            var u2 = t3.isJsonValue ? l.base64.decode(s2[i3]) : s2[i3];
            r2[e5] = t3.toType(u2);
          }
        } else
          t3.location === "statusCode" && (r2[e5] = parseInt(n2.statusCode, 10));
      }), e4.data = r2;
    }
    var l = e3("../util"), h = e3("./helpers").populateHostPrefix;
    t.exports = { buildRequest: a, extractError: u, extractData: c, generateURI: i };
  }, { "../util": 118, "./helpers": 73 }], 75: [function(e3, t, r) {
    function n(e4) {
      var t2 = e4.service.api.operations[e4.operation], r2 = e4.httpRequest;
      r2.headers["Content-Type"] = "application/x-www-form-urlencoded; charset=utf-8", r2.params = { Version: e4.service.api.apiVersion, Action: t2.name }, new u().serialize(e4.params, t2.input, , r2.body = a.queryParamsToString(r2.params), l(e4);
    }
            var s = e3("../core"), a = e3("../util"), u = e3("../query/query_param_serializer"), c = e3("../model/shape"), l = e3("./helpers").populateHostPrefix;
    t.exports = { buildRequest: n, extractError: i, extractData: o };
  }, { "../core": 39, "../model/shape": 70, "../query/query_param_serializer": 79, "../util": 118, "./helpers": 73 }], 79: [function(e3, t, r) {
    function n() {
    }
    function i(e4) {
      return e4.isQueryName || e4.api.protocol !== "ec2" ? e4.name : e4.name[0].toUpperCase() + e4.name.substr(1);
    }
    function o(e4, t2, r2, n2) {
      c.each(r2.members, function(r3, o2) {
        var s2 = t2[r3];
        if (s2 != null) {
          var a2 = i(o2);
          a2 = e4 ? e4 + "." + a2 : a2, u(a2, s2, o2, n2);
        }
      });
    }
        function a(e4, t2, r2, n2) {
      var o2 = r2.member || {};
      if (t2.length === 0)
        return void n2.call(this, e4, null);
      c.arrayEach(t2, function(t3, s2) {
        var a2 = "." + (s2 + 1);
        if (r2.api.protocol === "ec2")
          a2 += "";
        else if (r2.flattened) {
          if (o2.name) {
            var c2 = e4.split(".");
            c2.pop(), c2.push(i(o2)), e4 = c2.join(".");
          }
        } else
          a2 = "." + (o2.name ? o2.name : "member") + a2;
        u(e4 + a2, t3, o2, n2);
      });
    }
    function u(e4, t2, r2, n2) {
      t2 != null && (r2.type === "structure" ? o(e4, t2, r2, n2) : r2.type === "list" ? a(e4, t2, r2, n2) : r2.type === "map" ? s(e4, t2, r2, n2) : n2(e4, r2.toWireFormat(t2).toString()));
    }
    var c = e3("../util");
    n.prototype.serialize =  t.exports = n;
  }, { "../util": 118 }], 70: [function(e3, t, r) {
    function n(e4, t2, r2) {
      r2 != null && y.property.apply(this, arguments);
    }
        function o(e4, t2, r2) {
      t2 = t2 || {}, n(this, "shape", e4.shape), n(this, "api", t2.api, !1), n(this, "type", e4.type), n(this, "enum", e4.enum), n(this, "min", e4.min), n(this, "max", e4.max), n(this, "pattern", e4.pattern), n(this, "location", e4.location || this.location || "body"), n(this, "name", this.name || e4.xmlName || e4.queryName || e4.locationName || r2), n(this, "isStreaming", e4.streaming || this.isStreaming || !1), n(this, "requiresLength", e4.requiresLength, !1), n(this, "isComposite", e4.isComposite || !1), n(this, "isShape", !0, !1), n(this, "isQueryName", Boolean(e4.queryName), !1), n(this, "isLocationName", Boolean(e4.locationName), !1), n(this, "isIdempotent", e4.idempotencyToken === !0), n(this, "isJsonValue", e4.jsonvalue === !0), n(this, "isSensitive", e4.sensitive === !0 || e4.prototype && e4.prototype.sensitive === !0), n(this, "isEventStream", Boolean(e4.eventstream), !1), n(this, "isEvent", Boolean(e4.event), !1), n(this, "isEventPayload", Boolean(e4.eventpayload), !1), n(this, "isEventHeader", Boolean(e4.eventheader), !1), n(this, "isTimestampFormatSet", Boolean(e4.timestampFormat) || e4.prototype && e4.prototype.isTimestampFormatSet === !0, !1), n(this, "endpointDiscoveryId", Boolean(e4.endpointdiscoveryid), !1), n(this, "hostLabel", Boolean(e4.hostLabel), !1), t2.documentation && (n(this, "documentation", e4.documentation), n(this, "documentationUrl", e4.documentationUrl)), e4.xmlAttribute && n(this, "isXmlAttribute", e4.xmlAttribute || !1), n(this, "defaultValue", null), this.toWireFormat =  this.toType = 
    }
        function a(e4, t2) {
      var r2 = this, a2 = null, u2 = !this.isShape;
      s.apply(this, arguments), u2 && (n(this, "defaultValue", function() {
        return {};
      }), n(this, "members", {}), n(this, "memberNames", []), n(this, "required", []), n(this, "isRequired", function() {
        return !1;
      })), e4.members && (n(this, "members", new g(e4.members, t2, ), i(this, "memberNames", , e4.event && (i(this, "eventPayloadMemberName", , i(this, "eventHeaderMemberNames", )), e4.required && (n(this, "required", e4.required), n(this, "isRequired",  !1, !0)), n(this, "resultWrapper", e4.resultWrapper || null), e4.payload && n(this, "payload", e4.payload), typeof e4.xmlNamespace == "string" ? n(this, "xmlNamespaceUri", e4.xmlNamespace) : typeof e4.xmlNamespace == "object" && (n(this, "xmlNamespacePrefix", e4.xmlNamespace.prefix), n(this, "xmlNamespaceUri", e4.xmlNamespace.uri));
    }
            function l(e4) {
      var t2 = this;
      if (o.apply(this, arguments), e4.timestampFormat)
        n(this, "timestampFormat", e4.timestampFormat);
      else if (t2.isTimestampFormatSet && this.timestampFormat)
        n(this, "timestampFormat", this.timestampFormat);
      else if (this.location === "header")
        n(this, "timestampFormat", "rfc822");
      else if (this.location === "querystring")
        n(this, "timestampFormat", "iso8601");
      else if (this.api)
        switch (this.api.protocol) {
          case "json":
          case "rest-json":
            n(this, "timestampFormat", "unixTimestamp");
            break;
          case "rest-xml":
          case "query":
          case "ec2":
            n(this, "timestampFormat", "iso8601");
        }
      this.toType = function(e5) {
        return e5 == null ? null : typeof e5.toUTCString == "function" ? e5 : typeof e5 == "string" || typeof e5 == "number" ? y.date.parseTimestamp(e5) : null;
      }, this.toWireFormat = 
    }
    function h() {
      o.apply(this, arguments);
      var e4 = ["rest-xml", "query", "ec2"];
      this.toType = function(t2) {
        return t2 = this.api && e4.indexOf(this.api.protocol) > -1 ? t2 || "" : t2, this.isJsonValue ? JSON.parse(t2) : t2 && typeof t2.toString == "function" ? t2.toString() : t2;
      }, this.toWireFormat = 
    }
    function p() {
      o.apply(this, arguments), this.toType =  this.toWireFormat = this.toType;
    }
    function f() {
      o.apply(this, arguments), this.toType = function(e4) {
        return e4 == null ? null : parseInt(e4, 10);
      }, this.toWireFormat = this.toType;
    }
    function d() {
      o.apply(this, arguments), this.toType = function(e4) {
        var t2 = y.base64.decode(e4);
        if (this.isSensitive && y.isNode() && typeof y.Buffer.alloc == "function") {
          var r2 = y.Buffer.alloc(t2.length, t2);
          t2.fill(0), t2 = r2;
        }
        return t2;
      }, this.toWireFormat = y.base64.encode;
    }
        function v() {
      o.apply(this, arguments), this.toType = function(e4) {
        return typeof e4 == "boolean" ? e4 : e4 == null ? null : e4 === "true";
      };
    }
    var g = e3("./collection"), y = e3("../util");
    o.normalizedTypes = { character: "string", double: "float", long: "integer", short: "integer", biginteger: "integer", bigdecimal: "float", blob: "binary" }, o.types = { structure: a, list: u, map: c, boolean: v, timestamp: l, float: p, integer: f, string: h, base64: m, binary: d }, o.resolve =  o.create =  o.shapes = { StructureShape: a, ListShape: u, MapShape: c, StringShape: h, BooleanShape: v, Base64Shape: m }, t.exports = o;
  }, { "../util": 118, "./collection": 66 }], 66: [function(e3, t, r) {
            var o = e3("../util").memoizedProperty;
    t.exports = i;
  }, { "../util": 118 }], 74: [function(e3, t, r) {
    function n(e4) {
      var t2 = e4.httpRequest, r2 = e4.service.api, n2 = r2.targetPrefix + "." + r2.operations[e4.operation].name, i2 = r2.jsonVersion || "1.0", o2 = r2.operations[e4.operation].input, s2 = new a();
      i2 === 1 && (i2 = "1.0"), t2.body = s2.build(e4.params || {}, o2), t2.headers["Content-Type"] = "application/x-amz-json-" + i2, t2.headers["X-Amz-Target"] = n2, c(e4);
    }
    function i(e4) {
      var t2 = {}, r2 = e4.httpResponse;
      if (t2.code = r2.headers["x-amzn-errortype"] || "UnknownError", typeof t2.code == "string" && (t2.code = t2.code.split(":")[0]), r2.body.length > 0)
        try {
          var n2 = JSON.parse(r2.body.toString());
          (n2.__type || n2.code) && (t2.code = (n2.__type || n2.code).split("#").pop()), t2.code === "RequestEntityTooLarge" ? t2.message = "Request body must be less than 1 MB" : t2.message = n2.message || n2.Message || null;
        } catch (n3) {
          t2.statusCode = r2.statusCode, t2.message = r2.statusMessage;
        }
      else
        t2.statusCode = r2.statusCode, t2.message = r2.statusCode.toString();
      e4.error = s.error(new Error(), t2);
    }
    function o(e4) {
      var t2 = e4.httpResponse.body.toString() || "{}";
      if (e4.request.service.config.convertResponseTypes === !1)
        e4.data = JSON.parse(t2);
      else {
        var r2 = e4.request.service.api.operations[e4.request.operation], n2 = r2.output || {}, i2 = new u();
        e4.data = i2.parse(t2, n2);
      }
    }
    var s = e3("../util"), a = e3("../json/builder"), u = e3("../json/parser"), c = e3("./helpers").populateHostPrefix;
    t.exports = { buildRequest: n, extractError: i, extractData: o };
  }, { "../json/builder": 63, "../json/parser": 64, "../util": 118, "./helpers": 73 }], 73: [function(e3, t, r) {
    function n(e4) {
      if (!e4.service.config.hostPrefixEnabled)
        return e4;
      var t2 = e4.service.api.operations[e4.operation];
      if (i(e4))
        return e4;
      if (t2.endpoint && t2.endpoint.hostPrefix) {
        var r2 = t2.endpoint.hostPrefix, n2 = o(r2, e4.params, t2.input);
        s(e4.httpRequest.endpoint, n2), a(e4.httpRequest.endpoint.hostname);
      }
      return e4;
    }
    function i(e4) {
      var t2 = e4.service.api, r2 = t2.operations[e4.operation], n2 = t2.endpointOperation && t2.endpointOperation === u.string.lowerFirst(r2.name);
      return r2.endpointDiscoveryRequired !== "NULL" || n2 === !0;
    }
    function o(e4, t2, r2) {
      return u.each(r2.members, function(r3, n2) {
        if (n2.hostLabel === !0) {
          if (typeof t2[r3] != "string" || t2[r3] === "")
            throw u.error(new Error(), { message: "Parameter " + r3 + " should be a non-empty string.", code: "InvalidParameter" });
          var i2 = new RegExp("\\{" + r3 + "\\}", "g");
          e4 = e4.replace(i2, t2[r3]);
        }
      }), e4;
    }
            var u = e3("../util"), c = e3("../core");
    t.exports = { populateHostPrefix: n };
  }, { "../core": 39, "../util": 118 }], 64: [function(e3, t, r) {
    function n() {
    }
    function i(e4, t2) {
      if (t2 && e4 !== void 0)
        switch (t2.type) {
          case "structure":
            return o(e4, t2);
          case "map":
            return a(e4, t2);
          case "list":
            return s(e4, t2);
          default:
            return u(e4, t2);
        }
    }
    function o(e4, t2) {
      if (e4 != null) {
        var r2 = {}, n2 = t2.members;
        return c.each(n2, function(t3, n3) {
          var o2 = n3.isLocationName ? n3.name : t3;
          if (Object.prototype.hasOwnProperty.call(e4, o2)) {
            var s2 = e4[o2], a2 = i(s2, n3);
            a2 !== void 0 && (r2[t3] = a2);
          }
        }), r2;
      }
    }
    function s(e4, t2) {
      if (e4 != null) {
        var r2 = [];
        return c.arrayEach(e4, function(e5) {
          var n2 = i(e5, t2.member);
          n2 === void 0 ? r2.push(null) : r2.push(n2);
        }), r2;
      }
    }
    function a(e4, t2) {
      if (e4 != null) {
        var r2 = {};
        return c.each(e4, function(e5, n2) {
          var o2 = i(n2, t2.value);
          r2[e5] = o2 === void 0 ? null : o2;
        }), r2;
      }
    }
    function u(e4, t2) {
      return t2.toType(e4);
    }
    var c = e3("../util");
    n.prototype.parse =  t.exports = n;
  }, { "../util": 118 }], 63: [function(e3, t, r) {
    function n() {
    }
    function i(e4, t2) {
      if (t2 && e4 !== void 0 && e4 !== null)
        switch (t2.type) {
          case "structure":
            return o(e4, t2);
          case "map":
            return a(e4, t2);
          case "list":
            return s(e4, t2);
          default:
            return u(e4, t2);
        }
    }
    function o(e4, t2) {
      var r2 = {};
      return c.each(e4, function(e5, n2) {
        var o2 = t2.members[e5];
        if (o2) {
          if (o2.location !== "body")
            return;
          var s2 = o2.isLocationName ? o2.name : e5, a2 = i(n2, o2);
          a2 !== void 0 && (r2[s2] = a2);
        }
      }), r2;
    }
    function s(e4, t2) {
      var r2 = [];
      return c.arrayEach(e4, function(e5) {
        var n2 = i(e5, t2.member);
        n2 !== void 0 && r2.push(n2);
      }), r2;
    }
    function a(e4, t2) {
      var r2 = {};
      return c.each(e4, function(e5, n2) {
        var o2 = i(n2, t2.value);
        o2 !== void 0 && (r2[e5] = o2);
      }), r2;
    }
        var c = e3("../util");
    n.prototype.build =  t.exports = n;
  }, { "../util": 118 }], 47: [function(e3, t, r) {
    (function(r2) {
            function i(e4, t2, r3) {
        r3 && t2 !== void 0 && t2 !== null && r3.type === "structure" && r3.required && r3.required.length > 0 && m.arrayEach(r3.required, function(n2) {
          var o2 = r3.members[n2];
          if (o2.endpointDiscoveryId === !0) {
            var s2 = o2.isLocationName ? o2.name : n2;
            e4[s2] = String(t2[n2]);
          } else
            i(e4, t2[n2], o2);
        });
      }
            function s(e4) {
        var t2 = e4.service, r3 = t2.api, i2 = r3.operations ? r3.operations[e4.operation] : void 0, s2 = i2 ? i2.input : void 0, a2 = o(e4, s2), c2 = n(e4);
        Object.keys(a2).length > 0 && (c2 = m.update(c2, a2), i2 && (c2.operation = i2.name));
        var l2 = d.endpointCache.get(c2);
        if (!l2 || l2.length !== 1 || l2[0].Address !== "")
          if (l2 && l2.length > 0)
            e4.httpRequest.updateEndpoint(l2[0].Address);
          else {
            var h2 = t2.makeRequest(r3.endpointOperation, { Operation: i2.name, Identifiers: a2 });
            u(h2), h2.removeListener("validate", d.EventListeners.Core.VALIDATE_PARAMETERS), h2.removeListener("retry", d.EventListeners.Core.RETRY_CHECK), d.endpointCache.put(c2, [{ Address: "", CachePeriodInMinutes: 1 }]), h2.send(;
          }
      }
      function a(e4, t2) {
        var r3 = e4.service, i2 = r3.api, s2 = i2.operations ? i2.operations[e4.operation] : void 0, a2 = s2 ? s2.input : void 0, c2 = o(e4, a2), l2 = n(e4);
        Object.keys(c2).length > 0 && (l2 = m.update(l2, c2), s2 && (l2.operation = s2.name));
        var h2 = d.EndpointCache.getKeyString(l2), p2 = d.endpointCache.get(h2);
        if (p2 && p2.length === 1 && p2[0].Address === "")
          return g[h2] || (g[h2] = []), void g[h2].push({ request: e4, callback: t2 });
        if (p2 && p2.length > 0)
          e4.httpRequest.updateEndpoint(p2[0].Address), t2();
        else {
          var f2 = r3.makeRequest(i2.endpointOperation, { Operation: s2.name, Identifiers: c2 });
          f2.removeListener("validate", d.EventListeners.Core.VALIDATE_PARAMETERS), u(f2), d.endpointCache.put(h2, [{ Address: "", CachePeriodInMinutes: 60 }]), f2.send(function(r4, n2) {
            if (r4) {
              if (e4.response.error = m.error(r4, { retryable: !1 }), d.endpointCache.remove(l2), g[h2]) {
                var i3 = g[h2];
                m.arrayEach(i3, , delete g[h2];
              }
            } else if (n2 && (d.endpointCache.put(h2, n2.Endpoints), e4.httpRequest.updateEndpoint(n2.Endpoints[0].Address), g[h2])) {
              var i3 = g[h2];
              m.arrayEach(i3, , delete g[h2];
            }
            t2();
          });
        }
      }
            function c(e4) {
        var t2 = e4.error, r3 = e4.httpResponse;
        if (t2 && (t2.code === "InvalidEndpointException" || r3.statusCode === 421)) {
          var i2 = e4.request, s2 = i2.service.api.operations || {}, a2 = s2[i2.operation] ? s2[i2.operation].input : void 0, u2 = o(i2, a2), c2 = n(i2);
          Object.keys(u2).length > 0 && (c2 = m.update(c2, u2), s2[i2.operation] && (c2.operation = s2[i2.operation].name)), d.endpointCache.remove(c2);
        }
      }
      function l(e4) {
        if (e4._originalConfig && e4._originalConfig.endpoint && e4._originalConfig.endpointDiscoveryEnabled === !0)
          throw m.error(new Error(), { code: "ConfigurationException", message: "Custom endpoint is supplied; endpointDiscoveryEnabled must not be true." });
        var t2 = d.config[e4.serviceIdentifier] || {};
        return Boolean(d.config.endpoint || t2.endpoint || e4._originalConfig && e4._originalConfig.endpoint);
      }
            function p(e4) {
        var t2 = e4.service || {};
        if (t2.config.endpointDiscoveryEnabled !== void 0)
          return t2.config.endpointDiscoveryEnabled;
        if (!m.isBrowser()) {
          for (var n2 = 0; n2 < v.length; n2++) {
            var i2 = v[n2];
            if (Object.prototype.hasOwnProperty.call(r2.env, i2)) {
              if (r2.env[i2] === "" || r2.env[i2] === void 0)
                throw m.error(new Error(), { code: "ConfigurationException", message: "environmental variable " + i2 + " cannot be set to nothing" });
              return !h(r2.env[i2]);
            }
          }
          var o2 = {};
          try {
            o2 = d.util.iniLoader ? d.util.iniLoader.loadFrom({ isConfig: !0, filename: r2.env[d.util.sharedConfigFileEnv] }) : {};
          } catch (e5) {
          }
          var s2 = o2[r2.env.AWS_PROFILE || d.util.defaultProfile] || {};
          if (Object.prototype.hasOwnProperty.call(s2, "endpoint_discovery_enabled")) {
            if (s2.endpoint_discovery_enabled === void 0)
              throw m.error(new Error(), { code: "ConfigurationException", message: "config file entry 'endpoint_discovery_enabled' cannot be set to nothing" });
            return !h(s2.endpoint_discovery_enabled);
          }
        }
      }
      function f(e4, t2) {
        var r3 = e4.service || {};
        if (l(r3) || e4.isPresigned())
          return t2();
        var n2 = r3.api.operations || {}, i2 = n2[e4.operation], o2 = i2 ? i2.endpointDiscoveryRequired : "NULL", u2 = p(e4), h2 = r3.api.hasRequiredEndpointDiscovery;
        switch ((u2 || h2) && e4.httpRequest.appendToUserAgent("endpoint-discovery"), o2) {
          case "OPTIONAL":
            (u2 || h2) && (s(e4), e4.addNamedListener("INVALIDATE_CACHED_ENDPOINTS", "extractError", c)), t2();
            break;
          case "REQUIRED":
            if (u2 === !1) {
              e4.response.error = m.error(new Error(), { code: "ConfigurationException", message: "Endpoint Discovery is disabled but " + r3.api.className + "." + e4.operation + "() requires it. Please check your configurations." }), t2();
              break;
            }
            e4.addNamedListener("INVALIDATE_CACHED_ENDPOINTS", "extractError", c), a(e4, t2);
            break;
          case "NULL":
          default:
            t2();
        }
      }
      var d = e3("./core"), m = e3("./util"), v = ["AWS_ENABLE_ENDPOINT_DISCOVERY", "AWS_ENDPOINT_DISCOVERY_ENABLED"], g = {};
      t.exports = { discoverEndpoint: f, requiredDiscoverEndpoint: a, optionalDiscoverEndpoint: s, marshallCustomIdentifiers: o, getCacheKey: n, invalidateCachedEndpoint: c };
    }).call(this, e3("_process"));
  }, { "./core": 39, "./util": 118, _process: 8 }], 118: [function(e3, t, r) {
    (function(r2, n) {
      var i, o = { environment: "nodejs", engine: function() {
        if (o.isBrowser() && typeof navigator != "undefined")
          return navigator.userAgent;
        var e4 = r2.platform + "/" + r2.version;
        return r2.env.AWS_EXECUTION_ENV && (e4 += " exec-env/" + r2.env.AWS_EXECUTION_ENV), e4;
      }, userAgent: function() {
        var t2 = o.environment, r3 = "aws-sdk-" + t2 + "/" + e3("./core").VERSION;
        return t2 === "nodejs" && (r3 += " " + o.engine()), r3;
      }, uriEscape:  uriEscapePath:  urlParse: function(e4) {
        return o.url.parse(e4);
      }, urlFormat: function(e4) {
        return o.url.format(e4);
      }, queryStringParse:  queryParamsToString: function(e4) {
        var t2 = [], r3 = o.uriEscape, n2 = Object.keys(e4).sort();
        return o.arrayEach(n2, function(n3) {
          var i2 = e4[n3], s = r3(n3), a = s + "=";
          if (Array.isArray(i2)) {
            var u = [];
            o.arrayEach(i2, , a = s + "=" + u.sort().join("&" + s + "=");
          } else
            i2 != null && (a = s + "=" + r3(i2));
          t2.push(a);
        }), t2.join("&");
      }, readFileSync:  base64: { encode: function(e4) {
        if (typeof e4 == "number")
          throw o.error(new Error("Cannot base64 encode number " + e4));
        return e4 == null ? e4 : o.buffer.toBuffer(e4).toString("base64");
      }, decode: function(e4) {
        if (typeof e4 == "number")
          throw o.error(new Error("Cannot base64 decode number " + e4));
        return e4 == null ? e4 : o.buffer.toBuffer(e4, "base64");
      } }, buffer: { toBuffer: function(e4, t2) {
        return typeof o.Buffer.from == "function" && o.Buffer.from !== Uint8Array.from ? o.Buffer.from(e4, t2) : new o.Buffer(e4, t2);
      }, alloc: function(e4, t2, r3) {
        if (typeof e4 != "number")
          throw new Error("size passed to alloc must be a number.");
        if (typeof o.Buffer.alloc == "function")
          return o.Buffer.alloc(e4, t2, r3);
        var n2 = new o.Buffer(e4);
        return t2 !== void 0 && typeof n2.fill == "function" && n2.fill(t2, void 0, void 0, r3), n2;
      }, toStream:  concat: }, string: { byteLength: function(t2) {
        if (t2 == null)
          return 0;
        if (typeof t2 == "string" && (t2 = o.buffer.toBuffer(t2)), typeof t2.byteLength == "number")
          return t2.byteLength;
        if (typeof t2.length == "number")
          return t2.length;
        if (typeof t2.size == "number")
          return t2.size;
        if (typeof t2.path == "string")
          return e3("fs").lstatSync(t2.path).size;
        throw o.error(new Error("Cannot determine length of " + t2), { object: t2 });
      }, upperFirst: function(e4) {
        return e4[0].toUpperCase() + e4.substr(1);
      }, lowerFirst: }, ini: { parse: }, fn: { noop: function() {
      }, callback:  makeAsync: }, date: { getDate:  iso8601: function(e4) {
        return e4 === void 0 && (e4 = o.date.getDate()), e4.toISOString().replace(/\.\d{3}Z$/, "Z");
      }, rfc822: function(e4) {
        return e4 === void 0 && (e4 = o.date.getDate()), e4.toUTCString();
      }, unixTimestamp: function(e4) {
        return e4 === void 0 && (e4 = o.date.getDate()), e4.getTime() / 1e3;
      }, from: function(e4) {
        return typeof e4 == "number" ? new Date(1e3 * e4) : new Date(e4);
      }, format:  parseTimestamp: function(e4) {
        if (typeof e4 == "number")
          return new Date(1e3 * e4);
        if (e4.match(/^\d+$/))
          return new Date(1e3 * e4);
        if (e4.match(/^\d{4}/))
          return new Date(e4);
        if (e4.match(/^\w{3},/))
          return new Date(e4);
        throw o.error(new Error("unhandled timestamp format: " + e4), { code: "TimestampParserError" });
      } }, crypto: { crc32Table: [0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728, 853044451, 1172266101, 3705015759, 2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866, 2238001368, 4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202, 4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430, 2053790376, 3826175755, 2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954, 1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701, 2685067896, 3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270, 936918e3, 2847714899, 3736837829, 1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471, 3272380065, 1510334235, 755167117], crc32: function(e4) {
        var t2 = o.crypto.crc32Table, r3 = -1;
        typeof e4 == "string" && (e4 = o.buffer.toBuffer(e4));
        for (var n2 = 0; n2 < e4.length; n2++)
          r3 = r3 >>> 8 ^ t2[255 & (r3 ^ e4.readUInt8(n2))];
        return (-1 ^ r3) >>> 0;
      }, hmac: function(e4, t2, r3, n2) {
        return r3 || (r3 = "binary"), r3 === "buffer" && (r3 = void 0), n2 || (n2 = "sha256"), typeof t2 == "string" && (t2 = o.buffer.toBuffer(t2)), o.crypto.lib.createHmac(n2, e4).update(t2).digest(r3);
      }, md5: function(e4, t2, r3) {
        return o.crypto.hash("md5", e4, t2, r3);
      }, sha256:  hash: function(e4, t2, r3, n2) {
        var i2 = o.crypto.createHash(e4);
        r3 || (r3 = "binary"), r3 === "buffer" && (r3 = void 0), typeof t2 == "string" && (t2 = o.buffer.toBuffer(t2));
        var s = o.arraySliceFn(t2), a = o.Buffer.isBuffer(t2);
        if (o.isBrowser() && typeof ArrayBuffer != "undefined" && t2 && t2.buffer instanceof ArrayBuffer && (a = !0), n2 && typeof t2 == "object" && typeof t2.on == "function" && !a)
          t2.on("data", , t2.on("error", , t2.on("end", ;
        else {
          if (!n2 || !s || a || typeof FileReader == "undefined") {
            o.isBrowser() && typeof t2 == "object" && !a && (t2 = new o.Buffer(new Uint8Array(t2)));
            var u = i2.update(t2).digest(r3);
            return n2 && n2(null, u), u;
          }
          var c = 0, l = new FileReader();
          l.onerror =  l.onload =  l._continueReading =  l._continueReading();
        }
      }, toHex:  createHash: }, abort: {}, each:  arrayEach:  update:  merge:  copy: function(e4) {
        if (e4 == null)
          return e4;
        var t2 = {};
        for (var r3 in e4)
          t2[r3] = e4[r3];
        return t2;
      }, isEmpty:  arraySliceFn: function(e4) {
        var t2 = e4.slice || e4.webkitSlice || e4.mozSlice;
        return typeof t2 == "function" ? t2 : null;
      }, isType: function(e4, t2) {
        return typeof t2 == "function" && (t2 = o.typeName(t2)), Object.prototype.toString.call(e4) === "[object " + t2 + "]";
      }, typeName:  error: function(e4, t2) {
        var r3 = null;
        return typeof e4.message == "string" && e4.message !== "" && (typeof t2 == "string" || t2 && t2.message) && (r3 = o.copy(e4), r3.message = e4.message), e4.message = e4.message || null, typeof t2 == "string" ? e4.message = t2 : typeof t2 == "object" && t2 !== null && (o.update(e4, t2), t2.message && (e4.message = t2.message), (t2.code || t2.name) && (e4.code = t2.code || t2.name), t2.stack && (e4.stack = t2.stack)), typeof Object.defineProperty == "function" && (Object.defineProperty(e4, "name", { writable: !0, enumerable: !1 }), Object.defineProperty(e4, "message", { enumerable: !0 })), e4.name = String(t2 && t2.name || e4.name || e4.code || "Error"), e4.time = new Date(), r3 && (e4.originalError = r3), e4;
      }, inherit: function(e4, t2) {
        var r3 = null;
        if (t2 === void 0)
          t2 = e4, e4 = Object, r3 = {};
        else {
          var n2 = function() {
          };
          n2.prototype = e4.prototype, r3 = new n2();
        }
        return t2.constructor === Object && (t2.constructor = , t2.constructor.prototype = r3, o.update(t2.constructor.prototype, t2), t2.constructor.__super__ = e4, t2.constructor;
      }, mixin: function() {
        for (var e4 = arguments[0], t2 = 1; t2 < arguments.length; t2++)
          for (var r3 in arguments[t2].prototype) {
            var n2 = arguments[t2].prototype[r3];
            r3 !== "constructor" && (e4.prototype[r3] = n2);
          }
        return e4;
      }, hideProperties: function(e4, t2) {
        typeof Object.defineProperty == "function" && o.arrayEach(t2, ;
      }, property: function(e4, t2, r3, n2, i2) {
        var o2 = { configurable: !0, enumerable: n2 === void 0 || n2 };
        typeof r3 != "function" || i2 ? (o2.value = r3, o2.writable = !0) : o2.get = r3, Object.defineProperty(e4, t2, o2);
      }, memoizedProperty: function(e4, t2, r3, n2) {
        var i2 = null;
        o.property(e4, t2, function() {
          return i2 === null && (i2 = r3()), i2;
        }, n2);
      }, hoistPayloadMember: function(e4) {
        var t2 = e4.request, r3 = t2.operation, n2 = t2.service.api.operations[r3], i2 = n2.output;
        if (i2.payload && !n2.hasEventOutput) {
          var s = i2.members[i2.payload], a = e4.data[i2.payload];
          s.type === "structure" && o.each(a, ;
        }
      }, computeSha256: function(t2, r3) {
        if (o.isNode()) {
          var n2 = o.stream.Stream, i2 = e3("fs");
          if (typeof n2 == "function" && t2 instanceof n2) {
            if (typeof t2.path != "string")
              return r3(new Error("Non-file stream objects are not supported with SigV4"));
            var s = {};
            typeof t2.start == "number" && (s.start = t2.start), typeof t2.end == "number" && (s.end = t2.end), t2 = i2.createReadStream(t2.path, s);
          }
        }
        o.crypto.sha256(t2, "hex", ;
      }, isClockSkewed:  applyClockOffset:  extractRequestId:  addPromises: function(e4, t2) {
        var r3 = !1;
        t2 === void 0 && i && i.config && (t2 = i.config.getPromisesDependency()), t2 === void 0 && typeof Promise != "undefined" && (t2 = Promise), typeof t2 != "function" && (r3 = !0), Array.isArray(e4) || (e4 = [e4]);
        for (var n2 = 0; n2 < e4.length; n2++) {
          var o2 = e4[n2];
          r3 ? o2.deletePromisesFromClass && o2.deletePromisesFromClass() : o2.addPromisesToClass && o2.addPromisesToClass(t2);
        }
      }, promisifyMethod:  isDualstackAvailable: function(t2) {
        if (!t2)
          return !1;
        var r3 = e3("../apis/metadata.json");
        return typeof t2 != "string" && (t2 = t2.serviceIdentifier), !(typeof t2 != "string" || !r3.hasOwnProperty(t2)) && !!r3[t2].dualstackAvailable;
      }, calculateRetryDelay: function(e4, t2, r3) {
        t2 || (t2 = {});
        var n2 = t2.customBackoff || null;
        if (typeof n2 == "function")
          return n2(e4, r3);
        var i2 = typeof t2.base == "number" ? t2.base : 100;
        return Math.random() * (Math.pow(2, e4) * i2);
      }, handleRequestWithRetries: function(e4, t2, r3) {
        t2 || (t2 = {});
        var n2 = i.HttpClient.getInstance(), s = t2.httpOptions || {}, a = 0, u = function(e5) {
          var n3 = t2.maxRetries || 0;
          e5 && e5.code === "TimeoutError" && (e5.retryable = !0);
          var i2 = o.calculateRetryDelay(a, t2.retryDelayOptions, e5);
          e5 && e5.retryable && a < n3 && i2 >= 0 ? (a++, setTimeout(c, i2 + (e5.retryAfter || 0))) : r3(e5);
        }, c = function() {
          var t3 = "";
          n2.handleRequest(e4, s, function(e5) {
            e5.on("data", , e5.on("end", function() {
              var n3 = e5.statusCode;
              if (n3 < 300)
                r3(null, t3);
              else {
                var i2 = 1e3 * parseInt(e5.headers["retry-after"], 10) || 0, s2 = o.error(new Error(), { statusCode: n3, retryable: n3 >= 500 || n3 === 429 });
                i2 && s2.retryable && (s2.retryAfter = i2), u(s2);
              }
            });
          }, u);
        };
        i.util.defer(c);
      }, uuid: { v4: }, convertPayloadToString:  defer: function(e4) {
        typeof r2 == "object" && typeof r2.nextTick == "function" ? r2.nextTick(e4) : typeof n == "function" ? n(e4) : setTimeout(e4, 0);
      }, getRequestPayloadShape:  getProfilesFromSharedConfig: function(e4, t2) {
        var n2 = {}, i2 = {};
        if (r2.env[o.configOptInEnv])
          var i2 = e4.loadFrom({ isConfig: !0, filename: r2.env[o.sharedConfigFileEnv] });
        for (var s = e4.loadFrom({ filename: t2 || r2.env[o.configOptInEnv] && r2.env[o.sharedCredentialsFileEnv] }), a = 0, u = Object.keys(i2); a < u.length; a++)
          n2[u[a]] = i2[u[a]];
        for (var a = 0, u = Object.keys(s); a < u.length; a++)
          n2[u[a]] = s[u[a]];
        return n2;
      }, ARN: { validate: function(e4) {
        return e4 && e4.indexOf("arn:") === 0 && e4.split(":").length >= 6;
      }, parse:  build: function(e4) {
        if (e4.service === void 0 || e4.region === void 0 || e4.accountId === void 0 || e4.resource === void 0)
          throw o.error(new Error("Input ARN object is invalid"));
        return "arn:" + (e4.partition || "aws") + ":" + e4.service + ":" + e4.region + ":" + e4.accountId + ":" + e4.resource;
      } }, defaultProfile: "default", configOptInEnv: "AWS_SDK_LOAD_CONFIG", sharedCredentialsFileEnv: "AWS_SHARED_CREDENTIALS_FILE", sharedConfigFileEnv: "AWS_CONFIG_FILE", imdsDisabledEnv: "AWS_EC2_METADATA_DISABLED" };
      t.exports = o;
    }).call(this, e3("_process"), e3("timers").setImmediate);
  }, { "../apis/metadata.json": 26, "./core": 39, _process: 8, fs: 2, timers: 16, uuid: 21 }], 37: [function(e3, t, r) {
    var n = e3("./core");
    e3("./credentials"), e3("./credentials/credential_provider_chain");
    var i;
    n.Config = n.util.inherit({ constructor: function(e4) {
      e4 === void 0 && (e4 = {}), e4 = this.extractCredentials(e4), n.util.each.call(this, this.keys, ;
    }, getCredentials: function(e4) {
                  var i2 = this;
      i2.credentials ? typeof i2.credentials.get == "function" ? ) : ) : i2.credentialProvider ? i2.credentialProvider.resolve( : t2(r2("No credentials to load"));
    }, update:  loadFromPath:  clear:  set: function(e4, t2, r2) {
      t2 === void 0 ? (r2 === void 0 && (r2 = this.keys[e4]), this[e4] = typeof r2 == "function" ? r2.call(this) : r2) : e4 === "httpOptions" && this[e4] ? this[e4] = n.util.merge(this[e4], t2) : this[e4] = t2;
    }, keys: { credentials: null, credentialProvider: null, region: null, logger: null, apiVersions: {}, apiVersion: null, endpoint: void 0, httpOptions: { timeout: 12e4 }, maxRetries: void 0, maxRedirects: 10, paramValidation: !0, sslEnabled: !0, s3ForcePathStyle: !1, s3BucketEndpoint: !1, s3DisableBodySigning: !0, s3UsEast1RegionalEndpoint: "legacy", s3UseArnRegion: void 0, computeChecksums: !0, convertResponseTypes: !0, correctClockSkew: !1, customUserAgent: null, dynamoDbCrc32: !0, systemClockOffset: 0, signatureVersion: null, signatureCache: !0, retryDelayOptions: {}, useAccelerateEndpoint: !1, clientSideMonitoring: !1, endpointDiscoveryEnabled: void 0, endpointCacheSize: 1e3, hostPrefixEnabled: !0, stsRegionalEndpoints: "legacy" }, extractCredentials:  setPromisesDependency: function(e4) {
      i = e4, e4 === null && typeof Promise == "function" && (i = Promise);
      var t2 = [n.Request, n.Credentials, n.CredentialProviderChain];
      n.S3 && (t2.push(n.S3), n.S3.ManagedUpload && t2.push(n.S3.ManagedUpload)), n.util.addPromises(t2, i);
    }, getPromisesDependency: function() {
      return i;
    } }), n.config = new n.Config();
  }, { "./core": 39, "./credentials": 40, "./credentials/credential_provider_chain": 43 }], 43: [function(e3, t, r) {
    var n = e3("../core");
    n.CredentialProviderChain = n.util.inherit(n.Credentials, { constructor:  resolve: function(e4) {
      function t2(e5, s) {
        if (!e5 && s || i === o.length)
          return n.util.arrayEach(r2.resolveCallbacks, , void (r2.resolveCallbacks.length = 0);
        var a = o[i++];
        s = typeof a == "function" ? a.call() : a, s.get ? s.get( : t2(null, s);
      }
      var r2 = this;
      if (r2.providers.length === 0)
        return e4(new Error("No providers")), r2;
      if (r2.resolveCallbacks.push(e4) === 1) {
        var i = 0, o = r2.providers.slice(0);
        t2();
      }
      return r2;
    } }), n.CredentialProviderChain.defaultProviders = [], n.CredentialProviderChain.addPromisesToClass =  n.CredentialProviderChain.deletePromisesFromClass = function() {
      delete this.prototype.resolvePromise;
    }, n.util.addPromises(n.CredentialProviderChain);
  }, { "../core": 39 }], 40: [function(e3, t, r) {
    var n = e3("./core");
    n.Credentials = n.util.inherit({ constructor: function() {
      if (n.util.hideProperties(this, ["secretAccessKey"]), this.expired = !1, this.expireTime = null, this.refreshCallbacks = [], arguments.length === 1 && typeof arguments[0] == "object") {
        var e4 = arguments[0].credentials || arguments[0];
        this.accessKeyId = e4.accessKeyId, this.secretAccessKey = e4.secretAccessKey, this.sessionToken = e4.sessionToken;
      } else
        this.accessKeyId = arguments[0], this.secretAccessKey = arguments[1], this.sessionToken = arguments[2];
    }, expiryWindow: 15, needsRefresh:  get:  refresh:  coalesceRefresh: function(e4, t2) {
      var r2 = this;
      r2.refreshCallbacks.push(e4) === 1 && r2.load(;
    }, load: }), n.Credentials.addPromisesToClass =  n.Credentials.deletePromisesFromClass =  n.util.addPromises(n.Credentials);
  }, { "./core": 39 }], 27: [ {}], 26: [function(e3, t, r) {
    t.exports = { acm: { name: "ACM", cors: !0 }, apigateway: { name: "APIGateway", cors: !0 }, applicationautoscaling: { prefix: "application-autoscaling", name: "ApplicationAutoScaling", cors: !0 }, appstream: { name: "AppStream" }, autoscaling: { name: "AutoScaling", cors: !0 }, batch: { name: "Batch" }, budgets: { name: "Budgets" }, clouddirectory: { name: "CloudDirectory", versions: ["2016-05-10*"] }, cloudformation: { name: "CloudFormation", cors: !0 }, cloudfront: { name: "CloudFront", versions: ["2013-05-12*", "2013-11-11*", "2014-05-31*", "2014-10-21*", "2014-11-06*", "2015-04-17*", "2015-07-27*", "2015-09-17*", "2016-01-13*", "2016-01-28*", "2016-08-01*", "2016-08-20*", "2016-09-07*", "2016-09-29*", "2016-11-25*", "2017-03-25*", "2017-10-30*", "2018-06-18*", "2018-11-05*"], cors: !0 }, cloudhsm: { name: "CloudHSM", cors: !0 }, cloudsearch: { name: "CloudSearch" }, cloudsearchdomain: { name: "CloudSearchDomain" }, cloudtrail: { name: "CloudTrail", cors: !0 }, cloudwatch: { prefix: "monitoring", name: "CloudWatch", cors: !0 }, cloudwatchevents: { prefix: "events", name: "CloudWatchEvents", versions: ["2014-02-03*"], cors: !0 }, cloudwatchlogs: { prefix: "logs", name: "CloudWatchLogs", cors: !0 }, codebuild: { name: "CodeBuild", cors: !0 }, codecommit: { name: "CodeCommit", cors: !0 }, codedeploy: { name: "CodeDeploy", cors: !0 }, codepipeline: { name: "CodePipeline", cors: !0 }, cognitoidentity: { prefix: "cognito-identity", name: "CognitoIdentity", cors: !0 }, cognitoidentityserviceprovider: { prefix: "cognito-idp", name: "CognitoIdentityServiceProvider", cors: !0 }, cognitosync: { prefix: "cognito-sync", name: "CognitoSync", cors: !0 }, configservice: { prefix: "config", name: "ConfigService", cors: !0 }, cur: { name: "CUR", cors: !0 }, datapipeline: { name: "DataPipeline" }, devicefarm: { name: "DeviceFarm", cors: !0 }, directconnect: { name: "DirectConnect", cors: !0 }, directoryservice: { prefix: "ds", name: "DirectoryService" }, discovery: { name: "Discovery" }, dms: { name: "DMS" }, dynamodb: { name: "DynamoDB", cors: !0 }, dynamodbstreams: { prefix: "streams.dynamodb", name: "DynamoDBStreams", cors: !0 }, ec2: { name: "EC2", versions: ["2013-06-15*", "2013-10-15*", "2014-02-01*", "2014-05-01*", "2014-06-15*", "2014-09-01*", "2014-10-01*", "2015-03-01*", "2015-04-15*", "2015-10-01*", "2016-04-01*", "2016-09-15*"], cors: !0 }, ecr: { name: "ECR", cors: !0 }, ecs: { name: "ECS", cors: !0 }, efs: { prefix: "elasticfilesystem", name: "EFS", cors: !0 }, elasticache: { name: "ElastiCache", versions: ["2012-11-15*", "2014-03-24*", "2014-07-15*", "2014-09-30*"], cors: !0 }, elasticbeanstalk: { name: "ElasticBeanstalk", cors: !0 }, elb: { prefix: "elasticloadbalancing", name: "ELB", cors: !0 }, elbv2: { prefix: "elasticloadbalancingv2", name: "ELBv2", cors: !0 }, emr: { prefix: "elasticmapreduce", name: "EMR", cors: !0 }, es: { name: "ES" }, elastictranscoder: { name: "ElasticTranscoder", cors: !0 }, firehose: { name: "Firehose", cors: !0 }, gamelift: { name: "GameLift", cors: !0 }, glacier: { name: "Glacier" }, health: { name: "Health" }, iam: { name: "IAM", cors: !0 }, importexport: { name: "ImportExport" }, inspector: { name: "Inspector", versions: ["2015-08-18*"], cors: !0 }, iot: { name: "Iot", cors: !0 }, iotdata: { prefix: "iot-data", name: "IotData", cors: !0 }, kinesis: { name: "Kinesis", cors: !0 }, kinesisanalytics: { name: "KinesisAnalytics" }, kms: { name: "KMS", cors: !0 }, lambda: { name: "Lambda", cors: !0 }, lexruntime: { prefix: "runtime.lex", name: "LexRuntime", cors: !0 }, lightsail: { name: "Lightsail" }, machinelearning: { name: "MachineLearning", cors: !0 }, marketplacecommerceanalytics: { name: "MarketplaceCommerceAnalytics", cors: !0 }, marketplacemetering: { prefix: "meteringmarketplace", name: "MarketplaceMetering" }, mturk: { prefix: "mturk-requester", name: "MTurk", cors: !0 }, mobileanalytics: { name: "MobileAnalytics", cors: !0 }, opsworks: { name: "OpsWorks", cors: !0 }, opsworkscm: { name: "OpsWorksCM" }, organizations: { name: "Organizations" }, pinpoint: { name: "Pinpoint" }, polly: { name: "Polly", cors: !0 }, rds: { name: "RDS", versions: ["2014-09-01*"], cors: !0 }, redshift: { name: "Redshift", cors: !0 }, rekognition: { name: "Rekognition", cors: !0 }, resourcegroupstaggingapi: { name: "ResourceGroupsTaggingAPI" }, route53: { name: "Route53", cors: !0 }, route53domains: { name: "Route53Domains", cors: !0 }, s3: { name: "S3", dualstackAvailable: !0, cors: !0 }, s3control: { name: "S3Control", dualstackAvailable: !0, xmlNoDefaultLists: !0 }, servicecatalog: { name: "ServiceCatalog", cors: !0 }, ses: { prefix: "email", name: "SES", cors: !0 }, shield: { name: "Shield" }, simpledb: { prefix: "sdb", name: "SimpleDB" }, sms: { name: "SMS" }, snowball: { name: "Snowball" }, sns: { name: "SNS", cors: !0 }, sqs: { name: "SQS", cors: !0 }, ssm: { name: "SSM", cors: !0 }, storagegateway: { name: "StorageGateway", cors: !0 }, stepfunctions: { prefix: "states", name: "StepFunctions" }, sts: { name: "STS", cors: !0 }, support: { name: "Support" }, swf: { name: "SWF" }, xray: { name: "XRay", cors: !0 }, waf: { name: "WAF", cors: !0 }, wafregional: { prefix: "waf-regional", name: "WAFRegional" }, workdocs: { name: "WorkDocs", cors: !0 }, workspaces: { name: "WorkSpaces" }, codestar: { name: "CodeStar" }, lexmodelbuildingservice: { prefix: "lex-models", name: "LexModelBuildingService", cors: !0 }, marketplaceentitlementservice: { prefix: "entitlement.marketplace", name: "MarketplaceEntitlementService" }, athena: { name: "Athena" }, greengrass: { name: "Greengrass" }, dax: { name: "DAX" }, migrationhub: { prefix: "AWSMigrationHub", name: "MigrationHub" }, cloudhsmv2: { name: "CloudHSMV2" }, glue: { name: "Glue" }, mobile: { name: "Mobile" }, pricing: { name: "Pricing", cors: !0 }, costexplorer: { prefix: "ce", name: "CostExplorer", cors: !0 }, mediaconvert: { name: "MediaConvert" }, medialive: { name: "MediaLive" }, mediapackage: { name: "MediaPackage" }, mediastore: { name: "MediaStore" }, mediastoredata: { prefix: "mediastore-data", name: "MediaStoreData", cors: !0 }, appsync: { name: "AppSync" }, guardduty: { name: "GuardDuty" }, mq: { name: "MQ" }, comprehend: { name: "Comprehend", cors: !0 }, iotjobsdataplane: { prefix: "iot-jobs-data", name: "IoTJobsDataPlane" }, kinesisvideoarchivedmedia: { prefix: "kinesis-video-archived-media", name: "KinesisVideoArchivedMedia", cors: !0 }, kinesisvideomedia: { prefix: "kinesis-video-media", name: "KinesisVideoMedia", cors: !0 }, kinesisvideo: { name: "KinesisVideo", cors: !0 }, sagemakerruntime: { prefix: "runtime.sagemaker", name: "SageMakerRuntime" }, sagemaker: { name: "SageMaker" }, translate: { name: "Translate", cors: !0 }, resourcegroups: { prefix: "resource-groups", name: "ResourceGroups", cors: !0 }, alexaforbusiness: { name: "AlexaForBusiness" }, cloud9: { name: "Cloud9" }, serverlessapplicationrepository: { prefix: "serverlessrepo", name: "ServerlessApplicationRepository" }, servicediscovery: { name: "ServiceDiscovery" }, workmail: { name: "WorkMail" }, autoscalingplans: { prefix: "autoscaling-plans", name: "AutoScalingPlans" }, transcribeservice: { prefix: "transcribe", name: "TranscribeService" }, connect: { name: "Connect", cors: !0 }, acmpca: { prefix: "acm-pca", name: "ACMPCA" }, fms: { name: "FMS" }, secretsmanager: { name: "SecretsManager", cors: !0 }, iotanalytics: { name: "IoTAnalytics", cors: !0 }, iot1clickdevicesservice: { prefix: "iot1click-devices", name: "IoT1ClickDevicesService" }, iot1clickprojects: { prefix: "iot1click-projects", name: "IoT1ClickProjects" }, pi: { name: "PI" }, neptune: { name: "Neptune" }, mediatailor: { name: "MediaTailor" }, eks: { name: "EKS" }, macie: { name: "Macie" }, dlm: { name: "DLM" }, signer: { name: "Signer" }, chime: { name: "Chime" }, pinpointemail: { prefix: "pinpoint-email", name: "PinpointEmail" }, ram: { name: "RAM" }, route53resolver: { name: "Route53Resolver" }, pinpointsmsvoice: { prefix: "sms-voice", name: "PinpointSMSVoice" }, quicksight: { name: "QuickSight" }, rdsdataservice: { prefix: "rds-data", name: "RDSDataService" }, amplify: { name: "Amplify" }, datasync: { name: "DataSync" }, robomaker: { name: "RoboMaker" }, transfer: { name: "Transfer" }, globalaccelerator: { name: "GlobalAccelerator" }, comprehendmedical: { name: "ComprehendMedical", cors: !0 }, kinesisanalyticsv2: { name: "KinesisAnalyticsV2" }, mediaconnect: { name: "MediaConnect" }, fsx: { name: "FSx" }, securityhub: { name: "SecurityHub" }, appmesh: { name: "AppMesh", versions: ["2018-10-01*"] }, licensemanager: { prefix: "license-manager", name: "LicenseManager" }, kafka: { name: "Kafka" }, apigatewaymanagementapi: { name: "ApiGatewayManagementApi" }, apigatewayv2: { name: "ApiGatewayV2" }, docdb: { name: "DocDB" }, backup: { name: "Backup" }, worklink: { name: "WorkLink" }, textract: { name: "Textract" }, managedblockchain: { name: "ManagedBlockchain" }, mediapackagevod: { prefix: "mediapackage-vod", name: "MediaPackageVod" }, groundstation: { name: "GroundStation" }, iotthingsgraph: { name: "IoTThingsGraph" }, iotevents: { name: "IoTEvents" }, ioteventsdata: { prefix: "iotevents-data", name: "IoTEventsData" }, personalize: { name: "Personalize", cors: !0 }, personalizeevents: { prefix: "personalize-events", name: "PersonalizeEvents", cors: !0 }, personalizeruntime: { prefix: "personalize-runtime", name: "PersonalizeRuntime", cors: !0 }, applicationinsights: { prefix: "application-insights", name: "ApplicationInsights" }, servicequotas: { prefix: "service-quotas", name: "ServiceQuotas" }, ec2instanceconnect: { prefix: "ec2-instance-connect", name: "EC2InstanceConnect" }, eventbridge: { name: "EventBridge" }, lakeformation: { name: "LakeFormation" }, forecastservice: { prefix: "forecast", name: "ForecastService", cors: !0 }, forecastqueryservice: { prefix: "forecastquery", name: "ForecastQueryService", cors: !0 }, qldb: { name: "QLDB" }, qldbsession: { prefix: "qldb-session", name: "QLDBSession" }, workmailmessageflow: { name: "WorkMailMessageFlow" }, codestarnotifications: { prefix: "codestar-notifications", name: "CodeStarNotifications" }, savingsplans: { name: "SavingsPlans" }, sso: { name: "SSO" }, ssooidc: { prefix: "sso-oidc", name: "SSOOIDC" }, marketplacecatalog: { prefix: "marketplace-catalog", name: "MarketplaceCatalog" }, dataexchange: { name: "DataExchange" }, sesv2: { name: "SESV2" }, migrationhubconfig: { prefix: "migrationhub-config", name: "MigrationHubConfig" }, connectparticipant: { name: "ConnectParticipant" }, appconfig: { name: "AppConfig" }, iotsecuretunneling: { name: "IoTSecureTunneling" }, wafv2: { name: "WAFV2" }, elasticinference: { prefix: "elastic-inference", name: "ElasticInference" }, imagebuilder: { name: "Imagebuilder" }, schemas: { name: "Schemas" }, accessanalyzer: { name: "AccessAnalyzer" }, codegurureviewer: { prefix: "codeguru-reviewer", name: "CodeGuruReviewer" }, codeguruprofiler: { name: "CodeGuruProfiler" }, computeoptimizer: { prefix: "compute-optimizer", name: "ComputeOptimizer" }, frauddetector: { name: "FraudDetector" }, kendra: { name: "Kendra" }, networkmanager: { name: "NetworkManager" }, outposts: { name: "Outposts" }, augmentedairuntime: { prefix: "sagemaker-a2i-runtime", name: "AugmentedAIRuntime" }, ebs: { name: "EBS" }, kinesisvideosignalingchannels: { prefix: "kinesis-video-signaling", name: "KinesisVideoSignalingChannels", cors: !0 }, detective: { name: "Detective" }, codestarconnections: { prefix: "codestar-connections", name: "CodeStarconnections" }, synthetics: { name: "Synthetics" }, iotsitewise: { name: "IoTSiteWise" }, macie2: { name: "Macie2" }, codeartifact: { name: "CodeArtifact" }, honeycode: { name: "Honeycode" } };
  }, {}], 21: [ { "./v1": 24, "./v4": 25 }], 25: [function(e3, t, r) {
    function n(e4, t2, r2) {
      var n2 = t2 && r2 || 0;
      typeof e4 == "string" && (t2 = e4 === "binary" ? new Array(16) : null, e4 = null), e4 = e4 || {};
      var s = e4.random || (e4.rng || i)();
      if (s[6] = 15 & s[6] | 64, s[8] = 63 & s[8] | 128, t2)
        for (var a = 0; a < 16; ++a)
          t2[n2 + a] = s[a];
      return t2 || o(s);
    }
    var i = e3("./lib/rng"), o = e3("./lib/bytesToUuid");
    t.exports = n;
  }, { "./lib/bytesToUuid": 22, "./lib/rng": 23 }], 24: [function(e3, t, r) {
    function n(e4, t2, r2) {
      var n2 = t2 && r2 || 0, l = t2 || [];
      e4 = e4 || {};
      var h = e4.node || i, p = e4.clockseq !== void 0 ? e4.clockseq : o;
      if (h == null || p == null) {
        var f = s();
        h == null && (h = i = [1 | f[0], f[1], f[2], f[3], f[4], f[5]]), p == null && (p = o = 16383 & (f[6] << 8 | f[7]));
      }
      var d = e4.msecs !== void 0 ? e4.msecs : new Date().getTime(), m = e4.nsecs !== void 0 ? e4.nsecs : c + 1, v = d - u + (m - c) / 1e4;
      if (v < 0 && e4.clockseq === void 0 && (p = p + 1 & 16383), (v < 0 || d > u) && e4.nsecs === void 0 && (m = 0), m >= 1e4)
        throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
      u = d, c = m, o = p, d += 122192928e5;
      var g = (1e4 * (268435455 & d) + m) % 4294967296;
      l[n2++] = g >>> 24 & 255, l[n2++] = g >>> 16 & 255, l[n2++] = g >>> 8 & 255, l[n2++] = 255 & g;
      var y = d / 4294967296 * 1e4 & 268435455;
      l[n2++] = y >>> 8 & 255, l[n2++] = 255 & y, l[n2++] = y >>> 24 & 15 | 16, l[n2++] = y >>> 16 & 255, l[n2++] = p >>> 8 | 128, l[n2++] = 255 & p;
      for (var b = 0; b < 6; ++b)
        l[n2 + b] = h[b];
      return t2 || a(l);
    }
    var i, o, s = e3("./lib/rng"), a = e3("./lib/bytesToUuid"), u = 0, c = 0;
    t.exports = n;
  }, { "./lib/bytesToUuid": 22, "./lib/rng": 23 }], 23: [function(e3, t, r) {
    var n = typeof crypto != "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto != "undefined" && typeof window.msCrypto.getRandomValues == "function" && msCrypto.getRandomValues.bind(msCrypto);
    if (n) {
      var i = new Uint8Array(16);
      t.exports = 
    } else {
      var o = new Array(16);
      t.exports = 
    }
  }, {}], 22: [ {}], 20: [function(e3, t, r) {
    (function(t2, n) {
                              function u(e4, t3, n2) {
        if (e4.customInspect && t3 && R(t3.inspect) && t3.inspect !== r.inspect && (!t3.constructor || t3.constructor.prototype !== t3)) {
          var i2 = t3.inspect(n2, e4);
          return b(i2) || (i2 = u(e4, i2, n2)), i2;
        }
        var o2 = c(e4, t3);
        if (o2)
          return o2;
        var s2 = Object.keys(t3), m2 = a(s2);
        if (e4.showHidden && (s2 = Object.getOwnPropertyNames(t3)), x(t3) && (s2.indexOf("message") >= 0 || s2.indexOf("description") >= 0))
          return l(t3);
        if (s2.length === 0) {
          if (R(t3)) {
            var v2 = t3.name ? ": " + t3.name : "";
            return e4.stylize("[Function" + v2 + "]", "special");
          }
          if (_(t3))
            return e4.stylize(RegExp.prototype.toString.call(t3), "regexp");
          if (C(t3))
            return e4.stylize(Date.prototype.toString.call(t3), "date");
          if (x(t3))
            return l(t3);
        }
        var g2 = "", y2 = !1, w2 = ["{", "}"];
        if (d(t3) && (y2 = !0, w2 = ["[", "]"]), R(t3) && (g2 = " [Function" + (t3.name ? ": " + t3.name : "") + "]"), _(t3) && (g2 = " " + RegExp.prototype.toString.call(t3)), C(t3) && (g2 = " " + Date.prototype.toUTCString.call(t3)), x(t3) && (g2 = " " + l(t3)), s2.length === 0 && (!y2 || t3.length == 0))
          return w2[0] + g2 + w2[1];
        if (n2 < 0)
          return _(t3) ? e4.stylize(RegExp.prototype.toString.call(t3), "regexp") : e4.stylize("[Object]", "special");
        e4.seen.push(t3);
        var E2;
        return E2 = y2 ? h(e4, t3, n2, m2, s2) : s2.map(, e4.seen.pop(), f(E2, g2, w2);
      }
                        function p(e4, t3, r2, n2, i2, o2) {
        var s2, a2, c2;
        if (c2 = Object.getOwnPropertyDescriptor(t3, i2) || { value: t3[i2] }, c2.get ? a2 = c2.set ? e4.stylize("[Getter/Setter]", "special") : e4.stylize("[Getter]", "special") : c2.set && (a2 = e4.stylize("[Setter]", "special")), L(n2, i2) || (s2 = "[" + i2 + "]"), a2 || (e4.seen.indexOf(c2.value) < 0 ? (a2 = v(r2) ? u(e4, c2.value, null) : u(e4, c2.value, r2 - 1), a2.indexOf(`
`) > -1 && (a2 = o2 ? a2.split(`
`).map(function(e5) {
          return "  " + e5;
        }).join(`
`).substr(2) : `
` + a2.split(`
`).map(.join(`
`))) : a2 = e4.stylize("[Circular]", "special")), E(s2)) {
          if (o2 && i2.match(/^\d+$/))
            return a2;
          s2 = JSON.stringify("" + i2), s2.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (s2 = s2.substr(1, s2.length - 2), s2 = e4.stylize(s2, "name")) : (s2 = s2.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), s2 = e4.stylize(s2, "string"));
        }
        return s2 + ": " + a2;
      }
      function f(e4, t3, r2) {
        var n2 = 0;
        return e4.reduce(function(e5, t4) {
          return n2++, t4.indexOf(`
`) >= 0 && n2++, e5 + t4.replace(/\u001b\[\d\d?m/g, "").length + 1;
        }, 0) > 60 ? r2[0] + (t3 === "" ? "" : t3 + `
 `) + " " + e4.join(`,
  `) + " " + r2[1] : r2[0] + t3 + " " + e4.join(", ") + " " + r2[1];
      }
            function m(e4) {
        return typeof e4 == "boolean";
      }
      function v(e4) {
        return e4 === null;
      }
      function g(e4) {
        return e4 == null;
      }
      function y(e4) {
        return typeof e4 == "number";
      }
      function b(e4) {
        return typeof e4 == "string";
      }
      function w(e4) {
        return typeof e4 == "symbol";
      }
      function E(e4) {
        return e4 === void 0;
      }
      function _(e4) {
        return S(e4) && T(e4) === "[object RegExp]";
      }
      function S(e4) {
        return typeof e4 == "object" && e4 !== null;
      }
                  function R(e4) {
        return typeof e4 == "function";
      }
      function A(e4) {
        return e4 === null || typeof e4 == "boolean" || typeof e4 == "number" || typeof e4 == "string" || typeof e4 == "symbol" || e4 === void 0;
      }
            function k(e4) {
        return e4 < 10 ? "0" + e4.toString(10) : e4.toString(10);
      }
            function L(e4, t3) {
        return Object.prototype.hasOwnProperty.call(e4, t3);
      }
      var P = /%[sdj%]/g;
      r.format =  r.deprecate = 
      var q, O = {};
      r.debuglog =  r.inspect = i, i.colors = { bold: [1, 22], italic: [3, 23], underline: [4, 24], inverse: [7, 27], white: [37, 39], grey: [90, 39], black: [30, 39], blue: [34, 39], cyan: [36, 39], green: [32, 39], magenta: [35, 39], red: [31, 39], yellow: [33, 39] }, i.styles = { special: "cyan", number: "yellow", boolean: "yellow", undefined: "grey", null: "bold", string: "green", date: "magenta", regexp: "red" }, r.isArray = d, r.isBoolean = m, r.isNull = v, r.isNullOrUndefined = g, r.isNumber = y, r.isString = b, r.isSymbol = w, r.isUndefined = E, r.isRegExp = _, r.isObject = S, r.isDate = C, r.isError = x, r.isFunction = R, r.isPrimitive = A, r.isBuffer = e3("./support/isBuffer");
      var N = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      r.log =  r.inherits = e3("inherits"), r._extend = 
    }).call(this, e3("_process"), typeof window != "undefined" ? window : typeof self != "undefined" ? self : typeof window != "undefined" ? window : {});
  }, { "./support/isBuffer": 19, _process: 8, inherits: 18 }], 19: [function(e3, t, r) {
    t.exports = 
  }, {}], 18: [function(e3, t, r) {
    typeof Object.create == "function" ? t.exports = : t.exports = 
  }, {}], 16: [function(e3, t, r) {
    (function(t2, n) {
      function i(e4, t3) {
        this._id = e4, this._clearFn = t3;
      }
      var o = e3("process/browser.js").nextTick, s = Function.prototype.apply, a = Array.prototype.slice, u = {}, c = 0;
      r.setTimeout = function() {
        return new i(s.call(setTimeout, window, arguments), clearTimeout);
      }, r.setInterval =  r.clearTimeout = r.clearInterval =  i.prototype.unref = i.prototype.ref = function() {
      }, i.prototype.close =  r.enroll =  r.unenroll =  r._unrefActive = r.active =  r.setImmediate = typeof t2 == "function" ? t2 :  r.clearImmediate = typeof n == "function" ? n : 
    }).call(this, e3("timers").setImmediate, e3("timers").clearImmediate);
  }, { "process/browser.js": 8, timers: 16 }], 8: [function(e3, t, r) {
    function n() {
      throw new Error("setTimeout has not been defined");
    }
                            function l() {
    }
    var h, p, f = t.exports = {};
    (();
    var d, m = [], v = !1, g = -1;
    f.nextTick = function(e4) {
      var t2 = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var r2 = 1; r2 < arguments.length; r2++)
          t2[r2 - 1] = arguments[r2];
      m.push(new c(e4, t2)), m.length !== 1 || v || o(u);
    }, c.prototype.run =  f.title = "browser", f.browser = !0, f.env = {}, f.argv = [], f.version = "", f.versions = {}, f.on = l, f.addListener = l, f.once = l, f.off = l, f.removeListener = l, f.removeAllListeners = l, f.emit = l, f.prependListener = l, f.prependOnceListener = l, f.listeners =  f.binding = function(e4) {
      throw new Error("process.binding is not supported");
    }, f.cwd = function() {
      return "/";
    }, f.chdir =  f.umask = function() {
      return 0;
    };
  }, {}], 7: [function(e3, t, r) {
    (function(e4) {
      "use strict";
      function t2(e5) {
        return e5 !== null && Object.prototype.toString.call(e5) === "[object Array]";
      }
            function n(e5, i2) {
        if (e5 === i2)
          return !0;
        if (Object.prototype.toString.call(e5) !== Object.prototype.toString.call(i2))
          return !1;
        if (t2(e5) === !0) {
          if (e5.length !== i2.length)
            return !1;
          for (var o2 = 0; o2 < e5.length; o2++)
            if (n(e5[o2], i2[o2]) === !1)
              return !1;
          return !0;
        }
        if (r2(e5) === !0) {
          var s2 = {};
          for (var a2 in e5)
            if (hasOwnProperty.call(e5, a2)) {
              if (n(e5[a2], i2[a2]) === !1)
                return !1;
              s2[a2] = !0;
            }
          for (var u2 in i2)
            if (hasOwnProperty.call(i2, u2) && s2[u2] !== !0)
              return !1;
          return !0;
        }
        return !1;
      }
      function i(e5) {
        if (e5 === "" || e5 === !1 || e5 === null || t2(e5) && e5.length === 0)
          return !0;
        if (r2(e5)) {
          for (var n2 in e5)
            if (e5.hasOwnProperty(n2))
              return !1;
          return !0;
        }
        return !1;
      }
            function s(e5) {
        return e5 >= "a" && e5 <= "z" || e5 >= "A" && e5 <= "Z" || e5 === "_";
      }
      function a(e5) {
        return e5 >= "0" && e5 <= "9" || e5 === "-";
      }
      function u(e5) {
        return e5 >= "a" && e5 <= "z" || e5 >= "A" && e5 <= "Z" || e5 >= "0" && e5 <= "9" || e5 === "_";
      }
      function c() {
      }
      function l() {
      }
                  function f(e5) {
        return new l().parse(e5);
      }
                  var v;
      v = typeof String.prototype.trimLeft == "function" ? : 
      var g = 0, y = 1, b = 2, w = 3, E = 4, _ = 6, S = 8, C = 9, x = { ".": "Dot", "*": "Star", ",": "Comma", ":": "Colon", "{": "Lbrace", "}": "Rbrace", "]": "Rbracket", "(": "Lparen", ")": "Rparen", "@": "Current" }, R = { "<": !0, ">": !0, "=": !0, "!": !0 }, A = { " ": !0, "	": !0, "\n": !0 };
      c.prototype = { tokenize: function(e5) {
        var t3 = [];
        this._current = 0;
        for (var r3, n2, i2; this._current < e5.length; )
          if (s(e5[this._current]))
            r3 = this._current, n2 = this._consumeUnquotedIdentifier(e5), t3.push({ type: "UnquotedIdentifier", value: n2, start: r3 });
          else if (x[e5[this._current]] !== void 0)
            t3.push({ type: x[e5[this._current]], value: e5[this._current], start: this._current }), this._current++;
          else if (a(e5[this._current]))
            i2 = this._consumeNumber(e5), t3.push(i2);
          else if (e5[this._current] === "[")
            i2 = this._consumeLBracket(e5), t3.push(i2);
          else if (e5[this._current] === '"')
            r3 = this._current, n2 = this._consumeQuotedIdentifier(e5), t3.push({ type: "QuotedIdentifier", value: n2, start: r3 });
          else if (e5[this._current] === "'")
            r3 = this._current, n2 = this._consumeRawStringLiteral(e5), t3.push({ type: "Literal", value: n2, start: r3 });
          else if (e5[this._current] === "`") {
            r3 = this._current;
            var o2 = this._consumeLiteral(e5);
            t3.push({ type: "Literal", value: o2, start: r3 });
          } else if (R[e5[this._current]] !== void 0)
            t3.push(this._consumeOperator(e5));
          else if (A[e5[this._current]] !== void 0)
            this._current++;
          else if (e5[this._current] === "&")
            r3 = this._current, this._current++, e5[this._current] === "&" ? (this._current++, t3.push({ type: "And", value: "&&", start: r3 })) : t3.push({ type: "Expref", value: "&", start: r3 });
          else {
            if (e5[this._current] !== "|") {
              var u2 = new Error("Unknown character:" + e5[this._current]);
              throw u2.name = "LexerError", u2;
            }
            r3 = this._current, this._current++, e5[this._current] === "|" ? (this._current++, t3.push({ type: "Or", value: "||", start: r3 })) : t3.push({ type: "Pipe", value: "|", start: r3 });
          }
        return t3;
      }, _consumeUnquotedIdentifier:  _consumeQuotedIdentifier: function(e5) {
        var t3 = this._current;
        this._current++;
        for (var r3 = e5.length; e5[this._current] !== '"' && this._current < r3; ) {
          var n2 = this._current;
          e5[n2] !== "\\" || e5[n2 + 1] !== "\\" && e5[n2 + 1] !== '"' ? n2++ : n2 += 2, this._current = n2;
        }
        return this._current++, JSON.parse(e5.slice(t3, this._current));
      }, _consumeRawStringLiteral: function(e5) {
        var t3 = this._current;
        this._current++;
        for (var r3 = e5.length; e5[this._current] !== "'" && this._current < r3; ) {
          var n2 = this._current;
          e5[n2] !== "\\" || e5[n2 + 1] !== "\\" && e5[n2 + 1] !== "'" ? n2++ : n2 += 2, this._current = n2;
        }
        return this._current++, e5.slice(t3 + 1, this._current - 1).replace("\\'", "'");
      }, _consumeNumber:  _consumeLBracket: function(e5) {
        var t3 = this._current;
        return this._current++, e5[this._current] === "?" ? (this._current++, { type: "Filter", value: "[?", start: t3 }) : e5[this._current] === "]" ? (this._current++, { type: "Flatten", value: "[]", start: t3 }) : { type: "Lbracket", value: "[", start: t3 };
      }, _consumeOperator: function(e5) {
        var t3 = this._current, r3 = e5[t3];
        return this._current++, r3 === "!" ? e5[this._current] === "=" ? (this._current++, { type: "NE", value: "!=", start: t3 }) : { type: "Not", value: "!", start: t3 } : r3 === "<" ? e5[this._current] === "=" ? (this._current++, { type: "LTE", value: "<=", start: t3 }) : { type: "LT", value: "<", start: t3 } : r3 === ">" ? e5[this._current] === "=" ? (this._current++, { type: "GTE", value: ">=", start: t3 }) : { type: "GT", value: ">", start: t3 } : r3 === "=" && e5[this._current] === "=" ? (this._current++, { type: "EQ", value: "==", start: t3 }) : void 0;
      }, _consumeLiteral: function(e5) {
        this._current++;
        for (var t3, r3 = this._current, n2 = e5.length; e5[this._current] !== "`" && this._current < n2; ) {
          var i2 = this._current;
          e5[i2] !== "\\" || e5[i2 + 1] !== "\\" && e5[i2 + 1] !== "`" ? i2++ : i2 += 2, this._current = i2;
        }
        var o2 = v(e5.slice(r3, this._current));
        return o2 = o2.replace("\\`", "`"), t3 = this._looksLikeJSON(o2) ? JSON.parse(o2) : JSON.parse('"' + o2 + '"'), this._current++, t3;
      }, _looksLikeJSON: function(e5) {
        var t3 = '[{"', r3 = ["true", "false", "null"], n2 = "-0123456789";
        if (e5 === "")
          return !1;
        if (t3.indexOf(e5[0]) >= 0 || r3.indexOf(e5) >= 0)
          return !0;
        if (!(n2.indexOf(e5[0]) >= 0))
          return !1;
        try {
          return JSON.parse(e5), !0;
        } catch (e6) {
          return !1;
        }
      } };
      var T = {};
      T.EOF = 0, T.UnquotedIdentifier = 0, T.QuotedIdentifier = 0, T.Rbracket = 0, T.Rparen = 0, T.Comma = 0, T.Rbrace = 0, T.Number = 0, T.Current = 0, T.Expref = 0, T.Pipe = 1, T.Or = 2, T.And = 3, T.EQ = 5, T.GT = 5, T.LT = 5, T.GTE = 5, T.LTE = 5, T.NE = 5, T.Flatten = 9, T.Star = 20, T.Filter = 21, T.Dot = 40, T.Not = 45, T.Lbrace = 50, T.Lbracket = 55, T.Lparen = 60, l.prototype = { parse: function(e5) {
        this._loadTokens(e5), this.index = 0;
        var t3 = this.expression(0);
        if (this._lookahead(0) !== "EOF") {
          var r3 = this._lookaheadToken(0), n2 = new Error("Unexpected token type: " + r3.type + ", value: " + r3.value);
          throw n2.name = "ParserError", n2;
        }
        return t3;
      }, _loadTokens:  expression:  _lookahead:  _lookaheadToken:  _advance:  nud: function(e5) {
        var t3, r3, n2;
        switch (e5.type) {
          case "Literal":
            return { type: "Literal", value: e5.value };
          case "UnquotedIdentifier":
            return { type: "Field", name: e5.value };
          case "QuotedIdentifier":
            var i2 = { type: "Field", name: e5.value };
            if (this._lookahead(0) === "Lparen")
              throw new Error("Quoted identifier not allowed for function names.");
            return i2;
          case "Not":
            return r3 = this.expression(T.Not), { type: "NotExpression", children: [r3] };
          case "Star":
            return t3 = { type: "Identity" }, r3 = null, r3 = this._lookahead(0) === "Rbracket" ? { type: "Identity" } : this._parseProjectionRHS(T.Star), { type: "ValueProjection", children: [t3, r3] };
          case "Filter":
            return this.led(e5.type, { type: "Identity" });
          case "Lbrace":
            return this._parseMultiselectHash();
          case "Flatten":
            return t3 = { type: "Flatten", children: [{ type: "Identity" }] }, r3 = this._parseProjectionRHS(T.Flatten), { type: "Projection", children: [t3, r3] };
          case "Lbracket":
            return this._lookahead(0) === "Number" || this._lookahead(0) === "Colon" ? (r3 = this._parseIndexExpression(), this._projectIfSlice({ type: "Identity" }, r3)) : this._lookahead(0) === "Star" && this._lookahead(1) === "Rbracket" ? (this._advance(), this._advance(), r3 = this._parseProjectionRHS(T.Star), { type: "Projection", children: [{ type: "Identity" }, r3] }) : this._parseMultiselectList();
          case "Current":
            return { type: "Current" };
          case "Expref":
            return n2 = this.expression(T.Expref), { type: "ExpressionReference", children: [n2] };
          case "Lparen":
            for (var o2 = []; this._lookahead(0) !== "Rparen"; )
              this._lookahead(0) === "Current" ? (n2 = { type: "Current" }, this._advance()) : n2 = this.expression(0), o2.push(n2);
            return this._match("Rparen"), o2[0];
          default:
            this._errorToken(e5);
        }
      }, led: function(e5, t3) {
        var r3;
        switch (e5) {
          case "Dot":
            var n2 = T.Dot;
            return this._lookahead(0) !== "Star" ? (r3 = this._parseDotRHS(n2), { type: "Subexpression", children: [t3, r3] }) : (this._advance(), r3 = this._parseProjectionRHS(n2), { type: "ValueProjection", children: [t3, r3] });
          case "Pipe":
            return r3 = this.expression(T.Pipe), { type: "Pipe", children: [t3, r3] };
          case "Or":
            return r3 = this.expression(T.Or), { type: "OrExpression", children: [t3, r3] };
          case "And":
            return r3 = this.expression(T.And), { type: "AndExpression", children: [t3, r3] };
          case "Lparen":
            for (var i2, o2 = t3.name, s2 = []; this._lookahead(0) !== "Rparen"; )
              this._lookahead(0) === "Current" ? (i2 = { type: "Current" }, this._advance()) : i2 = this.expression(0), this._lookahead(0) === "Comma" && this._match("Comma"), s2.push(i2);
            return this._match("Rparen"), { type: "Function", name: o2, children: s2 };
          case "Filter":
            var a2 = this.expression(0);
            return this._match("Rbracket"), r3 = this._lookahead(0) === "Flatten" ? { type: "Identity" } : this._parseProjectionRHS(T.Filter), { type: "FilterProjection", children: [t3, r3, a2] };
          case "Flatten":
            return { type: "Projection", children: [{ type: "Flatten", children: [t3] }, this._parseProjectionRHS(T.Flatten)] };
          case "EQ":
          case "NE":
          case "GT":
          case "GTE":
          case "LT":
          case "LTE":
            return this._parseComparator(t3, e5);
          case "Lbracket":
            var u2 = this._lookaheadToken(0);
            return u2.type === "Number" || u2.type === "Colon" ? (r3 = this._parseIndexExpression(), this._projectIfSlice(t3, r3)) : (this._match("Star"), this._match("Rbracket"), r3 = this._parseProjectionRHS(T.Star), { type: "Projection", children: [t3, r3] });
          default:
            this._errorToken(this._lookaheadToken(0));
        }
      }, _match:  _errorToken:  _parseIndexExpression: function() {
        if (this._lookahead(0) === "Colon" || this._lookahead(1) === "Colon")
          return this._parseSliceExpression();
        var e5 = { type: "Index", value: this._lookaheadToken(0).value };
        return this._advance(), this._match("Rbracket"), e5;
      }, _projectIfSlice: function(e5, t3) {
        var r3 = { type: "IndexExpression", children: [e5, t3] };
        return t3.type === "Slice" ? { type: "Projection", children: [r3, this._parseProjectionRHS(T.Star)] } : r3;
      }, _parseSliceExpression: function() {
        for (var e5 = [null, null, null], t3 = 0, r3 = this._lookahead(0); r3 !== "Rbracket" && t3 < 3; ) {
          if (r3 === "Colon")
            t3++, this._advance();
          else {
            if (r3 !== "Number") {
              var n2 = this._lookahead(0), i2 = new Error("Syntax error, unexpected token: " + n2.value + "(" + n2.type + ")");
              throw i2.name = "Parsererror", i2;
            }
            e5[t3] = this._lookaheadToken(0).value, this._advance();
          }
          r3 = this._lookahead(0);
        }
        return this._match("Rbracket"), { type: "Slice", children: e5 };
      }, _parseComparator:  _parseDotRHS: function(e5) {
        var t3 = this._lookahead(0);
        return ["UnquotedIdentifier", "QuotedIdentifier", "Star"].indexOf(t3) >= 0 ? this.expression(e5) : t3 === "Lbracket" ? (this._match("Lbracket"), this._parseMultiselectList()) : t3 === "Lbrace" ? (this._match("Lbrace"), this._parseMultiselectHash()) : void 0;
      }, _parseProjectionRHS: function(e5) {
        var t3;
        if (T[this._lookahead(0)] < 10)
          t3 = { type: "Identity" };
        else if (this._lookahead(0) === "Lbracket")
          t3 = this.expression(e5);
        else if (this._lookahead(0) === "Filter")
          t3 = this.expression(e5);
        else {
          if (this._lookahead(0) !== "Dot") {
            var r3 = this._lookaheadToken(0), n2 = new Error("Sytanx error, unexpected token: " + r3.value + "(" + r3.type + ")");
            throw n2.name = "ParserError", n2;
          }
          this._match("Dot"), t3 = this._parseDotRHS(e5);
        }
        return t3;
      }, _parseMultiselectList: function() {
        for (var e5 = []; this._lookahead(0) !== "Rbracket"; ) {
          var t3 = this.expression(0);
          if (e5.push(t3), this._lookahead(0) === "Comma" && (this._match("Comma"), this._lookahead(0) === "Rbracket"))
            throw new Error("Unexpected token Rbracket");
        }
        return this._match("Rbracket"), { type: "MultiSelectList", children: e5 };
      }, _parseMultiselectHash: function() {
        for (var e5, t3, r3, n2, i2 = [], o2 = ["UnquotedIdentifier", "QuotedIdentifier"]; ; ) {
          if (e5 = this._lookaheadToken(0), o2.indexOf(e5.type) < 0)
            throw new Error("Expecting an identifier token, got: " + e5.type);
          if (t3 = e5.value, this._advance(), this._match("Colon"), r3 = this.expression(0), n2 = { type: "KeyValuePair", name: t3, value: r3 }, i2.push(n2), this._lookahead(0) === "Comma")
            this._match("Comma");
          else if (this._lookahead(0) === "Rbrace") {
            this._match("Rbrace");
            break;
          }
        }
        return { type: "MultiSelectHash", children: i2 };
      } }, h.prototype = { search:  visit: function(e5, s2) {
        var a2, u2, c2, l2, h2, p2, f2, d2, m2;
        switch (e5.type) {
          case "Field":
            return s2 === null ? null : r2(s2) ? (p2 = s2[e5.name], p2 === void 0 ? null : p2) : null;
          case "Subexpression":
            for (c2 = this.visit(e5.children[0], s2), m2 = 1; m2 < e5.children.length; m2++)
              if ((c2 = this.visit(e5.children[1], c2)) === null)
                return null;
            return c2;
          case "IndexExpression":
            return f2 = this.visit(e5.children[0], s2), this.visit(e5.children[1], f2);
          case "Index":
            if (!t2(s2))
              return null;
            var v2 = e5.value;
            return v2 < 0 && (v2 = s2.length + v2), c2 = s2[v2], c2 === void 0 && (c2 = null), c2;
          case "Slice":
            if (!t2(s2))
              return null;
            var g2 = e5.children.slice(0), y2 = this.computeSliceParams(s2.length, g2), b2 = y2[0], w2 = y2[1], E2 = y2[2];
            if (c2 = [], E2 > 0)
              for (m2 = b2; m2 < w2; m2 += E2)
                c2.push(s2[m2]);
            else
              for (m2 = b2; m2 > w2; m2 += E2)
                c2.push(s2[m2]);
            return c2;
          case "Projection":
            var _2 = this.visit(e5.children[0], s2);
            if (!t2(_2))
              return null;
            for (d2 = [], m2 = 0; m2 < _2.length; m2++)
              (u2 = this.visit(e5.children[1], _2[m2])) !== null && d2.push(u2);
            return d2;
          case "ValueProjection":
            if (_2 = this.visit(e5.children[0], s2), !r2(_2))
              return null;
            d2 = [];
            var S2 = o(_2);
            for (m2 = 0; m2 < S2.length; m2++)
              (u2 = this.visit(e5.children[1], S2[m2])) !== null && d2.push(u2);
            return d2;
          case "FilterProjection":
            if (_2 = this.visit(e5.children[0], s2), !t2(_2))
              return null;
            var C2 = [], x2 = [];
            for (m2 = 0; m2 < _2.length; m2++)
              a2 = this.visit(e5.children[2], _2[m2]), i(a2) || C2.push(_2[m2]);
            for (var R2 = 0; R2 < C2.length; R2++)
              (u2 = this.visit(e5.children[1], C2[R2])) !== null && x2.push(u2);
            return x2;
          case "Comparator":
            switch (l2 = this.visit(e5.children[0], s2), h2 = this.visit(e5.children[1], s2), e5.name) {
              case "EQ":
                c2 = n(l2, h2);
                break;
              case "NE":
                c2 = !n(l2, h2);
                break;
              case "GT":
                c2 = l2 > h2;
                break;
              case "GTE":
                c2 = l2 >= h2;
                break;
              case "LT":
                c2 = l2 < h2;
                break;
              case "LTE":
                c2 = l2 <= h2;
                break;
              default:
                throw new Error("Unknown comparator: " + e5.name);
            }
            return c2;
          case "Flatten":
            var A2 = this.visit(e5.children[0], s2);
            if (!t2(A2))
              return null;
            var T2 = [];
            for (m2 = 0; m2 < A2.length; m2++)
              u2 = A2[m2], t2(u2) ? T2.push.apply(T2, u2) : T2.push(u2);
            return T2;
          case "Identity":
            return s2;
          case "MultiSelectList":
            if (s2 === null)
              return null;
            for (d2 = [], m2 = 0; m2 < e5.children.length; m2++)
              d2.push(this.visit(e5.children[m2], s2));
            return d2;
          case "MultiSelectHash":
            if (s2 === null)
              return null;
            d2 = {};
            var k;
            for (m2 = 0; m2 < e5.children.length; m2++)
              k = e5.children[m2], d2[k.name] = this.visit(k.value, s2);
            return d2;
          case "OrExpression":
            return a2 = this.visit(e5.children[0], s2), i(a2) && (a2 = this.visit(e5.children[1], s2)), a2;
          case "AndExpression":
            return l2 = this.visit(e5.children[0], s2), i(l2) === !0 ? l2 : this.visit(e5.children[1], s2);
          case "NotExpression":
            return l2 = this.visit(e5.children[0], s2), i(l2);
          case "Literal":
            return e5.value;
          case "Pipe":
            return f2 = this.visit(e5.children[0], s2), this.visit(e5.children[1], f2);
          case "Current":
            return s2;
          case "Function":
            var I = [];
            for (m2 = 0; m2 < e5.children.length; m2++)
              I.push(this.visit(e5.children[m2], s2));
            return this.runtime.callFunction(e5.name, I);
          case "ExpressionReference":
            var L = e5.children[0];
            return L.jmespathType = "Expref", L;
          default:
            throw new Error("Unknown node type: " + e5.type);
        }
      }, computeSliceParams: function(e5, t3) {
        var r3 = t3[0], n2 = t3[1], i2 = t3[2], o2 = [null, null, null];
        if (i2 === null)
          i2 = 1;
        else if (i2 === 0) {
          var s2 = new Error("Invalid slice, step cannot be 0");
          throw s2.name = "RuntimeError", s2;
        }
        var a2 = i2 < 0;
        return r3 = r3 === null ? a2 ? e5 - 1 : 0 : this.capSliceRange(e5, r3, i2), n2 = n2 === null ? a2 ? -1 : e5 : this.capSliceRange(e5, n2, i2), o2[0] = r3, o2[1] = n2, o2[2] = i2, o2;
      }, capSliceRange: }, p.prototype = { callFunction: function(e5, t3) {
        var r3 = this.functionTable[e5];
        if (r3 === void 0)
          throw new Error("Unknown function: " + e5 + "()");
        return this._validateArgs(e5, t3, r3._signature), r3._func.call(this, t3);
      }, _validateArgs: function(e5, t3, r3) {
        var n2;
        if (r3[r3.length - 1].variadic) {
          if (t3.length < r3.length)
            throw n2 = r3.length === 1 ? " argument" : " arguments", new Error("ArgumentError: " + e5 + "() takes at least" + r3.length + n2 + " but received " + t3.length);
        } else if (t3.length !== r3.length)
          throw n2 = r3.length === 1 ? " argument" : " arguments", new Error("ArgumentError: " + e5 + "() takes " + r3.length + n2 + " but received " + t3.length);
        for (var i2, o2, s2, a2 = 0; a2 < r3.length; a2++) {
          s2 = !1, i2 = r3[a2].types, o2 = this._getTypeName(t3[a2]);
          for (var u2 = 0; u2 < i2.length; u2++)
            if (this._typeMatches(o2, i2[u2], t3[a2])) {
              s2 = !0;
              break;
            }
          if (!s2)
            throw new Error("TypeError: " + e5 + "() expected argument " + (a2 + 1) + " to be type " + i2 + " but received type " + o2 + " instead.");
        }
      }, _typeMatches:  _getTypeName: function(e5) {
        switch (Object.prototype.toString.call(e5)) {
          case "[object String]":
            return b;
          case "[object Number]":
            return g;
          case "[object Array]":
            return w;
          case "[object Boolean]":
            return 5;
          case "[object Null]":
            return 7;
          case "[object Object]":
            return e5.jmespathType === "Expref" ? _ : E;
        }
      }, _functionStartsWith: function(e5) {
        return e5[0].lastIndexOf(e5[1]) === 0;
      }, _functionEndsWith: function(e5) {
        var t3 = e5[0], r3 = e5[1];
        return t3.indexOf(r3, t3.length - r3.length) !== -1;
      }, _functionReverse:  _functionAbs: function(e5) {
        return Math.abs(e5[0]);
      }, _functionCeil: function(e5) {
        return Math.ceil(e5[0]);
      }, _functionAvg:  _functionContains:  _functionFloor: function(e5) {
        return Math.floor(e5[0]);
      }, _functionLength:  _functionMap:  _functionMerge:  _functionMax:  _functionMin:  _functionSum:  _functionType:  _functionKeys:  _functionValues:  _functionJoin:  _functionToArray:  _functionToString:  _functionToNumber:  _functionNotNull: function(e5) {
        for (var t3 = 0; t3 < e5.length; t3++)
          if (this._getTypeName(e5[t3]) !== 7)
            return e5[t3];
        return null;
      }, _functionSort:  _functionSortBy: function(e5) {
        var t3 = e5[0].slice(0);
        if (t3.length === 0)
          return t3;
        var r3 = this._interpreter, n2 = e5[1], i2 = this._getTypeName(r3.visit(n2, t3[0]));
        if ([g, b].indexOf(i2) < 0)
          throw new Error("TypeError");
        for (var o2 = this, s2 = [], a2 = 0; a2 < t3.length; a2++)
          s2.push([a2, t3[a2]]);
        s2.sort(;
        for (var u2 = 0; u2 < s2.length; u2++)
          t3[u2] = s2[u2][1];
        return t3;
      }, _functionMaxBy:  _functionMinBy:  createKeyFunction: }, e4.tokenize = d, e4.compile = f, e4.search = m, e4.strictDeepEqual = n;
    })(r === void 0 ? this.jmespath = {} : r);
  }, {}], 2: [ {}] }, {}, []), _xamzrequire = function e(t, r, n) {
    function i(s2, a) {
      if (!r[s2]) {
        if (!t[s2]) {
          var u = typeof _xamzrequire == "function" && _xamzrequire;
          if (!a && u)
            return u(s2, !0);
          if (o)
            return o(s2, !0);
          var c = new Error("Cannot find module '" + s2 + "'");
          throw c.code = "MODULE_NOT_FOUND", c;
        }
        var l = r[s2] = { exports: {} };
        t[s2][0].call(l.exports, function(e3) {
          var r2 = t[s2][1][e3];
          return i(r2 || e3);
        }, l, l.exports, e, t, r, n);
      }
      return r[s2].exports;
    }
    for (var o = typeof _xamzrequire == "function" && _xamzrequire, s = 0; s < n.length; s++)
      i(n[s]);
    return i;
  }({ 28: [function(e3, t, r) {
    e3("./browser_loader");
    var n = e3("./core");
    typeof window != "undefined" && (window.AWS = n), t !== void 0 && (t.exports = n), typeof self != "undefined" && (self.AWS = n);
  }, { "./browser_loader": 35, "./core": 39 }], 35: [function(e3, t, r) {
    (function(r2) {
      var n = e3("./util");
      n.crypto.lib = e3("./browserCryptoLib"), n.Buffer = e3("buffer/").Buffer, n.url = e3("url/"), n.querystring = e3("querystring/"), n.realClock = e3("./realclock/browserClock"), n.environment = "js", n.createEventStream = e3("./event-stream/buffered-create-event-stream").createEventStream, n.isBrowser = function() {
        return !0;
      }, n.isNode = 
      var i = e3("./core");
      if (t.exports = i, e3("./credentials"), e3("./credentials/credential_provider_chain"), e3("./credentials/temporary_credentials"), e3("./credentials/chainable_temporary_credentials"), e3("./credentials/web_identity_credentials"), e3("./credentials/cognito_identity_credentials"), e3("./credentials/saml_credentials"), i.XML.Parser = e3("./xml/browser_parser"), e3("./http/xhr"), r2 === void 0)
        var r2 = { browser: !0 };
    }).call(this, e3("_process"));
  }, { "./browserCryptoLib": 29, "./core": 39, "./credentials": 40, "./credentials/chainable_temporary_credentials": 41, "./credentials/cognito_identity_credentials": 42, "./credentials/credential_provider_chain": 43, "./credentials/saml_credentials": 44, "./credentials/temporary_credentials": 45, "./credentials/web_identity_credentials": 46, "./event-stream/buffered-create-event-stream": 54, "./http/xhr": 62, "./realclock/browserClock": 81, "./util": 118, "./xml/browser_parser": 119, _process: 8, "buffer/": 3, "querystring/": 15, "url/": 17 }], 119: [function(e3, t, r) {
                function s(e4, t2) {
      var r2 = {};
      return e4 === null || h.each(t2.members, function(n2, s2) {
        if (s2.isXmlAttribute) {
          if (Object.prototype.hasOwnProperty.call(e4.attributes, s2.name)) {
            var a2 = e4.attributes[s2.name].value;
            r2[n2] = o({ textContent: a2 }, s2);
          }
        } else {
          var u2 = s2.flattened ? e4 : i(e4, s2.name);
          u2 ? r2[n2] = o(u2, s2) : s2.flattened || s2.type !== "list" || t2.api.xmlNoDefaultLists || (r2[n2] = s2.defaultValue);
        }
      }), r2;
    }
    function a(e4, t2) {
      for (var r2 = {}, n2 = t2.key.name || "key", s2 = t2.value.name || "value", a2 = t2.flattened ? t2.name : "entry", u2 = e4.firstElementChild; u2; ) {
        if (u2.nodeName === a2) {
          var c2 = i(u2, n2).textContent, l2 = i(u2, s2);
          r2[c2] = o(l2, t2.value);
        }
        u2 = u2.nextElementSibling;
      }
      return r2;
    }
        function c(e4, t2) {
      if (e4.getAttribute) {
        var r2 = e4.getAttribute("encoding");
        r2 === "base64" && (t2 = new p.create({ type: r2 }));
      }
      var n2 = e4.textContent;
      return n2 === "" && (n2 = null), typeof t2.toType == "function" ? t2.toType(n2) : n2;
    }
    function l(e4) {
      if (e4 == null)
        return "";
      if (!e4.firstElementChild)
        return e4.parentNode.parentNode === null ? {} : e4.childNodes.length === 0 ? "" : e4.textContent;
      for (var t2 = { type: "structure", members: {} }, r2 = e4.firstElementChild; r2; ) {
        var n2 = r2.nodeName;
        Object.prototype.hasOwnProperty.call(t2.members, n2) ? t2.members[n2].type = "list" : t2.members[n2] = { name: n2 }, r2 = r2.nextElementSibling;
      }
      return s(e4, t2);
    }
    var h = e3("../util"), p = e3("../model/shape");
    n.prototype.parse = function(e4, t2) {
      if (e4.replace(/^\s+/, "") === "")
        return {};
      var r2, n2;
      try {
        if (window.DOMParser) {
          try {
            r2 = new DOMParser().parseFromString(e4, "text/xml");
          } catch (e5) {
            throw h.error(new Error("Parse error in document"), { originalError: e5, code: "XMLParserError", retryable: !0 });
          }
          if (r2.documentElement === null)
            throw h.error(new Error("Cannot parse empty document."), { code: "XMLParserError", retryable: !0 });
          var s2 = r2.getElementsByTagName("parsererror")[0];
          if (s2 && (s2.parentNode === r2 || s2.parentNode.nodeName === "body" || s2.parentNode.parentNode === r2 || s2.parentNode.parentNode.nodeName === "body")) {
            var a2 = s2.getElementsByTagName("div")[0] || s2;
            throw h.error(new Error(a2.textContent || "Parser error in document"), { code: "XMLParserError", retryable: !0 });
          }
        } else {
          if (!window.ActiveXObject)
            throw new Error("Cannot load XML parser");
          if (r2 = new window.ActiveXObject("Microsoft.XMLDOM"), r2.async = !1, !r2.loadXML(e4))
            throw h.error(new Error("Parse error in document"), { code: "XMLParserError", retryable: !0 });
        }
      } catch (e5) {
        n2 = e5;
      }
      if (r2 && r2.documentElement && !n2) {
        var u2 = o(r2.documentElement, t2), c2 = i(r2.documentElement, "ResponseMetadata");
        return c2 && (u2.ResponseMetadata = o(c2, {})), u2;
      }
      if (n2)
        throw h.error(n2 || new Error(), { code: "XMLParserError", retryable: !0 });
      return {};
    }, t.exports = n;
  }, { "../model/shape": 70, "../util": 118 }], 81: [function(e3, t, r) {
    t.exports = { now: function() {
      return typeof performance != "undefined" && typeof performance.now == "function" ? performance.now() : Date.now();
    } };
  }, {}], 62: [function(e3, t, r) {
    var n = e3("../core"), i = e3("events").EventEmitter;
    e3("../http"), n.XHRClient = n.util.inherit({ handleRequest: function(e4, t2, r2, o) {
      var s = this, a = e4.endpoint, u = new i(), c = a.protocol + "//" + a.hostname;
      a.port !== 80 && a.port !== 443 && (c += ":" + a.port), c += e4.path;
      var l = new XMLHttpRequest(), h = !1;
      e4.stream = l, l.addEventListener("readystatechange", function() {
        try {
          if (l.status === 0)
            return;
        } catch (e5) {
          return;
        }
        this.readyState >= this.HEADERS_RECEIVED && !h && (u.statusCode = l.status, u.headers = s.parseHeaders(l.getAllResponseHeaders()), u.emit("headers", u.statusCode, u.headers, l.statusText), h = !0), this.readyState === this.DONE && s.finishRequest(l, u);
      }, !1), l.upload.addEventListener("progress", function(e5) {
        u.emit("sendProgress", e5);
      }), l.addEventListener("progress",  !1), l.addEventListener("timeout", function() {
        o(n.util.error(new Error("Timeout"), { code: "TimeoutError" }));
      }, !1), l.addEventListener("error", function() {
        o(n.util.error(new Error("Network Failure"), { code: "NetworkingError" }));
      }, !1), l.addEventListener("abort",  !1), r2(u), l.open(e4.method, c, t2.xhrAsync !== !1), n.util.each(e4.headers, function(e5, t3) {
        e5 !== "Content-Length" && e5 !== "User-Agent" && e5 !== "Host" && l.setRequestHeader(e5, t3);
      }), t2.timeout && t2.xhrAsync !== !1 && (l.timeout = t2.timeout), t2.xhrWithCredentials && (l.withCredentials = !0);
      try {
        l.responseType = "arraybuffer";
      } catch (e5) {
      }
      try {
        e4.body ? l.send(e4.body) : l.send();
      } catch (t3) {
        if (!e4.body || typeof e4.body.buffer != "object")
          throw t3;
        l.send(e4.body.buffer);
      }
      return u;
    }, parseHeaders:  finishRequest: function(e4, t2) {
      var r2;
      if (e4.responseType === "arraybuffer" && e4.response) {
        var i2 = e4.response;
        r2 = new n.util.Buffer(i2.byteLength);
        for (var o = new Uint8Array(i2), s = 0; s < r2.length; ++s)
          r2[s] = o[s];
      }
      try {
        r2 || typeof e4.responseText != "string" || (r2 = new n.util.Buffer(e4.responseText));
      } catch (e5) {
      }
      r2 && t2.emit("data", r2), t2.emit("end");
    } }), n.HttpClient.prototype = n.XHRClient.prototype, n.HttpClient.streamsApiVersion = 1;
  }, { "../core": 39, "../http": 61, events: 4 }], 54: [function(e3, t, r) {
        var i = e3("../event-stream/event-message-chunker").eventMessageChunker, o = e3("./parse-event").parseEvent;
    t.exports = { createEventStream: n };
  }, { "../event-stream/event-message-chunker": 55, "./parse-event": 57 }], 57: [function(e3, t, r) {
    function n(e4, t2, r2) {
      var n2 = o(t2), s = n2.headers[":message-type"];
      if (s) {
        if (s.value === "error")
          throw i(n2);
        if (s.value !== "event")
          return;
      }
      var a = n2.headers[":event-type"], u = r2.members[a.value];
      if (u) {
        var c = {}, l = u.eventPayloadMemberName;
        if (l) {
          var h = u.members[l];
          h.type === "binary" ? c[l] = n2.body : c[l] = e4.parse(n2.body.toString(), h);
        }
        for (var p = u.eventHeaderMemberNames, f = 0; f < p.length; f++) {
          var d = p[f];
          n2.headers[d] && (c[d] = u.members[d].toType(n2.headers[d].value));
        }
        var m = {};
        return m[a.value] = c, m;
      }
    }
        var o = e3("./parse-message").parseMessage;
    t.exports = { parseEvent: n };
  }, { "./parse-message": 58 }], 58: [function(e3, t, r) {
            var o = e3("./int64").Int64, s = e3("./split-message").splitMessage, a = "boolean", u = "byte", c = "short", l = "integer", h = "long", p = "binary", f = "string", d = "timestamp", m = "uuid";
    t.exports = { parseMessage: i };
  }, { "./int64": 56, "./split-message": 59 }], 59: [function(e3, t, r) {
        var i = e3("../core").util, o = i.buffer.toBuffer, s = 4, a = 2 * s, u = 4, c = a + 2 * u;
    t.exports = { splitMessage: n };
  }, { "../core": 39 }], 56: [function(e3, t, r) {
    function n(e4) {
      if (e4.length !== 8)
        throw new Error("Int64 buffers must be exactly 8 bytes");
      o.Buffer.isBuffer(e4) || (e4 = s(e4)), this.bytes = e4;
    }
    function i(e4) {
      for (var t2 = 0; t2 < 8; t2++)
        e4[t2] ^= 255;
      for (var t2 = 7; t2 > -1 && ++e4[t2] === 0; t2--)
        ;
    }
    var o = e3("../core").util, s = o.buffer.toBuffer;
    n.fromNumber =  n.prototype.valueOf =  n.prototype.toString =  t.exports = { Int64: n };
  }, { "../core": 39 }], 55: [function(e3, t, r) {
    function n(e4) {
      for (var t2 = [], r2 = 0; r2 < e4.length; ) {
        var n2 = e4.readInt32BE(r2), i = e4.slice(r2, n2 + r2);
        r2 += n2, t2.push(i);
      }
      return t2;
    }
    t.exports = { eventMessageChunker: n };
  }, {}], 46: [function(e3, t, r) {
    var n = e3("../core");
    n.WebIdentityCredentials = n.util.inherit(n.Credentials, { constructor:  refresh: function(e4) {
      this.coalesceRefresh(e4 || n.util.fn.callback);
    }, load:  createClients: });
  }, { "../core": 39 }], 45: [function(e3, t, r) {
    var n = e3("../core");
    n.TemporaryCredentials = n.util.inherit(n.Credentials, { constructor:  refresh: function(e4) {
      this.coalesceRefresh(e4 || n.util.fn.callback);
    }, load:  loadMasterCredentials: function(e4) {
      for (this.masterCredentials = e4 || n.config.credentials; this.masterCredentials.masterCredentials; )
        this.masterCredentials = this.masterCredentials.masterCredentials;
      typeof this.masterCredentials.get != "function" && (this.masterCredentials = new n.Credentials(this.masterCredentials));
    }, createClients: function() {
      this.service = this.service || new n.STS({ params: this.params });
    } });
  }, { "../core": 39 }], 44: [function(e3, t, r) {
    var n = e3("../core");
    n.SAMLCredentials = n.util.inherit(n.Credentials, { constructor:  refresh: function(e4) {
      this.coalesceRefresh(e4 || n.util.fn.callback);
    }, load:  createClients: });
  }, { "../core": 39 }], 42: [function(e3, t, r) {
    var n = e3("../core");
    n.CognitoIdentityCredentials = n.util.inherit(n.Credentials, { localStorageKey: { id: "aws.cognito.identity-id.", providers: "aws.cognito.identity-providers." }, constructor:  refresh: function(e4) {
      this.coalesceRefresh(e4 || n.util.fn.callback);
    }, load:  clearCachedId:  clearIdOnNotAuthorized: function(e4) {
      var t2 = this;
      e4.code == "NotAuthorizedException" && t2.clearCachedId();
    }, getId: function(e4) {
      var t2 = this;
      if (typeof t2.params.IdentityId == "string")
        return e4(null, t2.params.IdentityId);
      t2.cognito.getId(;
    }, loadCredentials:  getCredentialsForIdentity:  getCredentialsFromSTS:  loadCachedId: function() {
      var e4 = this;
      if (n.util.isBrowser() && !e4.params.IdentityId) {
        var t2 = e4.getStorage("id");
        if (t2 && e4.params.Logins) {
          var r2 = Object.keys(e4.params.Logins);
          (e4.getStorage("providers") || "").split(",").filter(.length !== 0 && (e4.params.IdentityId = t2);
        } else
          t2 && (e4.params.IdentityId = t2);
      }
    }, createClients:  cacheId:  getStorage:  setStorage:  storage: function() {
      try {
        var e4 = n.util.isBrowser() && window.localStorage !== null && typeof window.localStorage == "object" ? window.localStorage : {};
        return e4["aws.test-storage"] = "foobar", delete e4["aws.test-storage"], e4;
      } catch (e5) {
        return {};
      }
    }() });
  }, { "../core": 39 }], 41: [function(e3, t, r) {
    var n = e3("../core");
    n.ChainableTemporaryCredentials = n.util.inherit(n.Credentials, { constructor: function(e4) {
      n.Credentials.call(this), e4 = e4 || {}, this.errorCode = "ChainableTemporaryCredentialsProviderFailure", this.expired = !0, this.tokenCodeFn = null;
      var t2 = n.util.copy(e4.params) || {};
      if (t2.RoleArn && (t2.RoleSessionName = t2.RoleSessionName || "temporary-credentials"), t2.SerialNumber) {
        if (!e4.tokenCodeFn || typeof e4.tokenCodeFn != "function")
          throw new n.util.error(new Error("tokenCodeFn must be a function when params.SerialNumber is given"), { code: this.errorCode });
        this.tokenCodeFn = e4.tokenCodeFn;
      }
      var r2 = n.util.merge({ params: t2, credentials: e4.masterCredentials || n.config.credentials }, e4.stsConfig || {});
      this.service = new n.STS(r2);
    }, refresh:  load: function(e4) {
      var t2 = this, r2 = t2.service.config.params.RoleArn ? "assumeRole" : "getSessionToken";
      this.getTokenCode(function(n2, i) {
        var o = {};
        if (n2)
          return void e4(n2);
        i && (o.TokenCode = i), t2.service[r2](o, ;
      });
    }, getTokenCode: });
  }, { "../core": 39 }], 29: [function(e3, t, r) {
    var n = e3("./browserHmac"), i = e3("./browserMd5"), o = e3("./browserSha1"), s = e3("./browserSha256");
    t.exports = { createHash: function(e4) {
      if ((e4 = e4.toLowerCase()) === "md5")
        return new i();
      if (e4 === "sha256")
        return new s();
      if (e4 === "sha1")
        return new o();
      throw new Error("Hash algorithm " + e4 + " is not supported in the browser SDK");
    }, createHmac: function(e4, t2) {
      if ((e4 = e4.toLowerCase()) === "md5")
        return new n(i, t2);
      if (e4 === "sha256")
        return new n(s, t2);
      if (e4 === "sha1")
        return new n(o, t2);
      throw new Error("HMAC algorithm " + e4 + " is not supported in the browser SDK");
    }, createSign: };
  }, { "./browserHmac": 31, "./browserMd5": 32, "./browserSha1": 33, "./browserSha256": 34 }], 34: [function(e3, t, r) {
        var i = e3("buffer/").Buffer, o = e3("./browserHashUtils"), s = new Uint32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]), a = Math.pow(2, 53) - 1;
    t.exports = n, n.BLOCK_SIZE = 64, n.prototype.update = function(e4) {
      if (this.finished)
        throw new Error("Attempted to update an already finished hash.");
      if (o.isEmptyData(e4))
        return this;
      e4 = o.convertToBuffer(e4);
      var t2 = 0, r2 = e4.byteLength;
      if (this.bytesHashed += r2, 8 * this.bytesHashed > a)
        throw new Error("Cannot hash more than 2^53 - 1 bits");
      for (; r2 > 0; )
        this.buffer[this.bufferLength++] = e4[t2++], r2--, this.bufferLength === 64 && (this.hashBuffer(), this.bufferLength = 0);
      return this;
    }, n.prototype.digest = function(e4) {
      if (!this.finished) {
        var t2 = 8 * this.bytesHashed, r2 = new DataView(this.buffer.buffer, this.buffer.byteOffset, this.buffer.byteLength), n2 = this.bufferLength;
        if (r2.setUint8(this.bufferLength++, 128), n2 % 64 >= 56) {
          for (var o2 = this.bufferLength; o2 < 64; o2++)
            r2.setUint8(o2, 0);
          this.hashBuffer(), this.bufferLength = 0;
        }
        for (var o2 = this.bufferLength; o2 < 56; o2++)
          r2.setUint8(o2, 0);
        r2.setUint32(56, Math.floor(t2 / 4294967296), !0), r2.setUint32(60, t2), this.hashBuffer(), this.finished = !0;
      }
      for (var s2 = new i(32), o2 = 0; o2 < 8; o2++)
        s2[4 * o2] = this.state[o2] >>> 24 & 255, s2[4 * o2 + 1] = this.state[o2] >>> 16 & 255, s2[4 * o2 + 2] = this.state[o2] >>> 8 & 255, s2[4 * o2 + 3] = this.state[o2] >>> 0 & 255;
      return e4 ? s2.toString(e4) : s2;
    }, n.prototype.hashBuffer = function() {
      for (var e4 = this, t2 = e4.buffer, r2 = e4.state, n2 = r2[0], i2 = r2[1], o2 = r2[2], a2 = r2[3], u = r2[4], c = r2[5], l = r2[6], h = r2[7], p = 0; p < 64; p++) {
        if (p < 16)
          this.temp[p] = (255 & t2[4 * p]) << 24 | (255 & t2[4 * p + 1]) << 16 | (255 & t2[4 * p + 2]) << 8 | 255 & t2[4 * p + 3];
        else {
          var f = this.temp[p - 2], d = (f >>> 17 | f << 15) ^ (f >>> 19 | f << 13) ^ f >>> 10;
          f = this.temp[p - 15];
          var m = (f >>> 7 | f << 25) ^ (f >>> 18 | f << 14) ^ f >>> 3;
          this.temp[p] = (d + this.temp[p - 7] | 0) + (m + this.temp[p - 16] | 0);
        }
        var v = (((u >>> 6 | u << 26) ^ (u >>> 11 | u << 21) ^ (u >>> 25 | u << 7)) + (u & c ^ ~u & l) | 0) + (h + (s[p] + this.temp[p] | 0) | 0) | 0, g = ((n2 >>> 2 | n2 << 30) ^ (n2 >>> 13 | n2 << 19) ^ (n2 >>> 22 | n2 << 10)) + (n2 & i2 ^ n2 & o2 ^ i2 & o2) | 0;
        h = l, l = c, c = u, u = a2 + v | 0, a2 = o2, o2 = i2, i2 = n2, n2 = v + g | 0;
      }
      r2[0] += n2, r2[1] += i2, r2[2] += o2, r2[3] += a2, r2[4] += u, r2[5] += c, r2[6] += l, r2[7] += h;
    };
  }, { "./browserHashUtils": 30, "buffer/": 3 }], 33: [function(e3, t, r) {
        var i = e3("buffer/").Buffer, o = e3("./browserHashUtils");
    new Uint32Array([1518500249, 1859775393, -1894007588, -899497514]), Math.pow(2, 53), t.exports = n, n.BLOCK_SIZE = 64, n.prototype.update =  n.prototype.write = function(e4) {
      this.block[this.offset] |= (255 & e4) << this.shift, this.shift ? this.shift -= 8 : (this.offset++, this.shift = 24), this.offset === 16 && this.processBlock();
    }, n.prototype.digest = function(e4) {
      this.write(128), (this.offset > 14 || this.offset === 14 && this.shift < 24) && this.processBlock(), this.offset = 14, this.shift = 24, this.write(0), this.write(0), this.write(this.totalLength > 1099511627775 ? this.totalLength / 1099511627776 : 0), this.write(this.totalLength > 4294967295 ? this.totalLength / 4294967296 : 0);
      for (var t2 = 24; t2 >= 0; t2 -= 8)
        this.write(this.totalLength >> t2);
      var r2 = new i(20), n2 = new DataView(r2.buffer);
      return n2.setUint32(0, this.h0, !1), n2.setUint32(4, this.h1, !1), n2.setUint32(8, this.h2, !1), n2.setUint32(12, this.h3, !1), n2.setUint32(16, this.h4, !1), e4 ? r2.toString(e4) : r2;
    }, n.prototype.processBlock = 
  }, { "./browserHashUtils": 30, "buffer/": 3 }], 32: [function(e3, t, r) {
                            var c = e3("./browserHashUtils"), l = e3("buffer/").Buffer, h = 64;
    t.exports = n, n.BLOCK_SIZE = h, n.prototype.update =  n.prototype.digest = function(e4) {
      if (!this.finished) {
        var t2 = this, r2 = t2.buffer, n2 = t2.bufferLength, i2 = t2.bytesHashed, o2 = 8 * i2;
        if (r2.setUint8(this.bufferLength++, 128), n2 % h >= h - 8) {
          for (var s2 = this.bufferLength; s2 < h; s2++)
            r2.setUint8(s2, 0);
          this.hashBuffer(), this.bufferLength = 0;
        }
        for (var s2 = this.bufferLength; s2 < h - 8; s2++)
          r2.setUint8(s2, 0);
        r2.setUint32(h - 8, o2 >>> 0, !0), r2.setUint32(h - 4, Math.floor(o2 / 4294967296), !0), this.hashBuffer(), this.finished = !0;
      }
      for (var a2 = new DataView(new ArrayBuffer(16)), s2 = 0; s2 < 4; s2++)
        a2.setUint32(4 * s2, this.state[s2], !0);
      var u2 = new l(a2.buffer, a2.byteOffset, a2.byteLength);
      return e4 ? u2.toString(e4) : u2;
    }, n.prototype.hashBuffer = 
  }, { "./browserHashUtils": 30, "buffer/": 3 }], 31: [function(e3, t, r) {
    function n(e4, t2) {
      this.hash = new e4(), this.outer = new e4();
      var r2 = i(e4, t2), n2 = new Uint8Array(e4.BLOCK_SIZE);
      n2.set(r2);
      for (var o2 = 0; o2 < e4.BLOCK_SIZE; o2++)
        r2[o2] ^= 54, n2[o2] ^= 92;
      this.hash.update(r2), this.outer.update(n2);
      for (var o2 = 0; o2 < r2.byteLength; o2++)
        r2[o2] = 0;
    }
        var o = e3("./browserHashUtils");
    t.exports = n, n.prototype.update =  n.prototype.digest = 
  }, { "./browserHashUtils": 30 }], 30: [function(e3, t, r) {
    function n(e4) {
      return typeof e4 == "string" ? e4.length === 0 : e4.byteLength === 0;
    }
    function i(e4) {
      return typeof e4 == "string" && (e4 = new o(e4, "utf8")), ArrayBuffer.isView(e4) ? new Uint8Array(e4.buffer, e4.byteOffset, e4.byteLength / Uint8Array.BYTES_PER_ELEMENT) : new Uint8Array(e4);
    }
    var o = e3("buffer/").Buffer;
    typeof ArrayBuffer != "undefined" && ArrayBuffer.isView === void 0 && (ArrayBuffer.isView = ;
    var s = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]", "[object DataView]"];
    t.exports = { isEmptyData: n, convertToBuffer: i };
  }, { "buffer/": 3 }], 17: [function(e3, t, r) {
                        function u(e4) {
      return typeof e4 == "string";
    }
    function c(e4) {
      return typeof e4 == "object" && e4 !== null;
    }
            var p = e3("punycode");
    r.parse = i, r.resolve = s, r.resolveObject = a, r.format = o, r.Url = n;
    var f = /^([a-z0-9.+-]+:)/i, d = /:[0-9]*$/, m = ["<", ">", '"', "`", " ", "\r", `
`, "	"], v = ["{", "}", "|", "\\", "^", "`"].concat(m), g = ["'"].concat(v), y = ["%", "/", "?", ";", "#"].concat(g), b = ["/", "?", "#"], w = /^[a-z0-9A-Z_-]{0,63}$/, E = /^([a-z0-9A-Z_-]{0,63})(.*)$/, _ = { javascript: !0, "javascript:": !0 }, S = { javascript: !0, "javascript:": !0 }, C = { http: !0, https: !0, ftp: !0, gopher: !0, file: !0, "http:": !0, "https:": !0, "ftp:": !0, "gopher:": !0, "file:": !0 }, x = e3("querystring");
    n.prototype.parse = function(e4, t2, r2) {
      if (!u(e4))
        throw new TypeError("Parameter 'url' must be a string, not " + typeof e4);
      var n2 = e4;
      n2 = n2.trim();
      var i2 = f.exec(n2);
      if (i2) {
        i2 = i2[0];
        var o2 = i2.toLowerCase();
        this.protocol = o2, n2 = n2.substr(i2.length);
      }
      if (r2 || i2 || n2.match(/^\/\/[^@\/]+@[^@\/]+/)) {
        var s2 = n2.substr(0, 2) === "//";
        !s2 || i2 && S[i2] || (n2 = n2.substr(2), this.slashes = !0);
      }
      if (!S[i2] && (s2 || i2 && !C[i2])) {
        for (var a2 = -1, c2 = 0; c2 < b.length; c2++) {
          var l2 = n2.indexOf(b[c2]);
          l2 !== -1 && (a2 === -1 || l2 < a2) && (a2 = l2);
        }
        var h2, d2;
        d2 = a2 === -1 ? n2.lastIndexOf("@") : n2.lastIndexOf("@", a2), d2 !== -1 && (h2 = n2.slice(0, d2), n2 = n2.slice(d2 + 1), this.auth = decodeURIComponent(h2)), a2 = -1;
        for (var c2 = 0; c2 < y.length; c2++) {
          var l2 = n2.indexOf(y[c2]);
          l2 !== -1 && (a2 === -1 || l2 < a2) && (a2 = l2);
        }
        a2 === -1 && (a2 = n2.length), this.host = n2.slice(0, a2), n2 = n2.slice(a2), this.parseHost(), this.hostname = this.hostname || "";
        var m2 = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
        if (!m2)
          for (var v2 = this.hostname.split(/\./), c2 = 0, R = v2.length; c2 < R; c2++) {
            var A = v2[c2];
            if (A && !A.match(w)) {
              for (var T = "", k = 0, I = A.length; k < I; k++)
                A.charCodeAt(k) > 127 ? T += "x" : T += A[k];
              if (!T.match(w)) {
                var L = v2.slice(0, c2), P = v2.slice(c2 + 1), q = A.match(E);
                q && (L.push(q[1]), P.unshift(q[2])), P.length && (n2 = "/" + P.join(".") + n2), this.hostname = L.join(".");
                break;
              }
            }
          }
        if (this.hostname.length > 255 ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), !m2) {
          for (var O = this.hostname.split("."), N = [], c2 = 0; c2 < O.length; ++c2) {
            var U = O[c2];
            N.push(U.match(/[^A-Za-z0-9_-]/) ? "xn--" + p.encode(U) : U);
          }
          this.hostname = N.join(".");
        }
        var D = this.port ? ":" + this.port : "", M = this.hostname || "";
        this.host = M + D, this.href += this.host, m2 && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), n2[0] !== "/" && (n2 = "/" + n2));
      }
      if (!_[o2])
        for (var c2 = 0, R = g.length; c2 < R; c2++) {
          var j = g[c2], B = encodeURIComponent(j);
          B === j && (B = escape(j)), n2 = n2.split(j).join(B);
        }
      var F = n2.indexOf("#");
      F !== -1 && (this.hash = n2.substr(F), n2 = n2.slice(0, F));
      var H = n2.indexOf("?");
      if (H !== -1 ? (this.search = n2.substr(H), this.query = n2.substr(H + 1), t2 && (this.query = x.parse(this.query)), n2 = n2.slice(0, H)) : t2 && (this.search = "", this.query = {}), n2 && (this.pathname = n2), C[o2] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
        var D = this.pathname || "", U = this.search || "";
        this.path = D + U;
      }
      return this.href = this.format(), this;
    }, n.prototype.format = function() {
      var e4 = this.auth || "";
      e4 && (e4 = encodeURIComponent(e4), e4 = e4.replace(/%3A/i, ":"), e4 += "@");
      var t2 = this.protocol || "", r2 = this.pathname || "", n2 = this.hash || "", i2 = !1, o2 = "";
      this.host ? i2 = e4 + this.host : this.hostname && (i2 = e4 + (this.hostname.indexOf(":") === -1 ? this.hostname : "[" + this.hostname + "]"), this.port && (i2 += ":" + this.port)), this.query && c(this.query) && Object.keys(this.query).length && (o2 = x.stringify(this.query));
      var s2 = this.search || o2 && "?" + o2 || "";
      return t2 && t2.substr(-1) !== ":" && (t2 += ":"), this.slashes || (!t2 || C[t2]) && i2 !== !1 ? (i2 = "//" + (i2 || ""), r2 && r2.charAt(0) !== "/" && (r2 = "/" + r2)) : i2 || (i2 = ""), n2 && n2.charAt(0) !== "#" && (n2 = "#" + n2), s2 && s2.charAt(0) !== "?" && (s2 = "?" + s2), r2 = r2.replace(/[?#]/g, , s2 = s2.replace("#", "%23"), t2 + i2 + r2 + s2 + n2;
    }, n.prototype.resolve =  n.prototype.resolveObject = function(e4) {
      if (u(e4)) {
        var t2 = new n();
        t2.parse(e4, !1, !0), e4 = t2;
      }
      var r2 = new n();
      if (Object.keys(this).forEach( this), r2.hash = e4.hash, e4.href === "")
        return r2.href = r2.format(), r2;
      if (e4.slashes && !e4.protocol)
        return Object.keys(e4).forEach(function(t3) {
          t3 !== "protocol" && (r2[t3] = e4[t3]);
        }), C[r2.protocol] && r2.hostname && !r2.pathname && (r2.path = r2.pathname = "/"), r2.href = r2.format(), r2;
      if (e4.protocol && e4.protocol !== r2.protocol) {
        if (!C[e4.protocol])
          return Object.keys(e4).forEach(, r2.href = r2.format(), r2;
        if (r2.protocol = e4.protocol, e4.host || S[e4.protocol])
          r2.pathname = e4.pathname;
        else {
          for (var i2 = (e4.pathname || "").split("/"); i2.length && !(e4.host = i2.shift()); )
            ;
          e4.host || (e4.host = ""), e4.hostname || (e4.hostname = ""), i2[0] !== "" && i2.unshift(""), i2.length < 2 && i2.unshift(""), r2.pathname = i2.join("/");
        }
        if (r2.search = e4.search, r2.query = e4.query, r2.host = e4.host || "", r2.auth = e4.auth, r2.hostname = e4.hostname || e4.host, r2.port = e4.port, r2.pathname || r2.search) {
          var o2 = r2.pathname || "", s2 = r2.search || "";
          r2.path = o2 + s2;
        }
        return r2.slashes = r2.slashes || e4.slashes, r2.href = r2.format(), r2;
      }
      var a2 = r2.pathname && r2.pathname.charAt(0) === "/", c2 = e4.host || e4.pathname && e4.pathname.charAt(0) === "/", p2 = c2 || a2 || r2.host && e4.pathname, f2 = p2, d2 = r2.pathname && r2.pathname.split("/") || [], i2 = e4.pathname && e4.pathname.split("/") || [], m2 = r2.protocol && !C[r2.protocol];
      if (m2 && (r2.hostname = "", r2.port = null, r2.host && (d2[0] === "" ? d2[0] = r2.host : d2.unshift(r2.host)), r2.host = "", e4.protocol && (e4.hostname = null, e4.port = null, e4.host && (i2[0] === "" ? i2[0] = e4.host : i2.unshift(e4.host)), e4.host = null), p2 = p2 && (i2[0] === "" || d2[0] === "")), c2)
        r2.host = e4.host || e4.host === "" ? e4.host : r2.host, r2.hostname = e4.hostname || e4.hostname === "" ? e4.hostname : r2.hostname, r2.search = e4.search, r2.query = e4.query, d2 = i2;
      else if (i2.length)
        d2 || (d2 = []), d2.pop(), d2 = d2.concat(i2), r2.search = e4.search, r2.query = e4.query;
      else if (!h(e4.search)) {
        if (m2) {
          r2.hostname = r2.host = d2.shift();
          var v2 = !!(r2.host && r2.host.indexOf("@") > 0) && r2.host.split("@");
          v2 && (r2.auth = v2.shift(), r2.host = r2.hostname = v2.shift());
        }
        return r2.search = e4.search, r2.query = e4.query, l(r2.pathname) && l(r2.search) || (r2.path = (r2.pathname ? r2.pathname : "") + (r2.search ? r2.search : "")), r2.href = r2.format(), r2;
      }
      if (!d2.length)
        return r2.pathname = null, r2.search ? r2.path = "/" + r2.search : r2.path = null, r2.href = r2.format(), r2;
      for (var g2 = d2.slice(-1)[0], y2 = (r2.host || e4.host) && (g2 === "." || g2 === "..") || g2 === "", b2 = 0, w2 = d2.length; w2 >= 0; w2--)
        g2 = d2[w2], g2 == "." ? d2.splice(w2, 1) : g2 === ".." ? (d2.splice(w2, 1), b2++) : b2 && (d2.splice(w2, 1), b2--);
      if (!p2 && !f2)
        for (; b2--; b2)
          d2.unshift("..");
      !p2 || d2[0] === "" || d2[0] && d2[0].charAt(0) === "/" || d2.unshift(""), y2 && d2.join("/").substr(-1) !== "/" && d2.push("");
      var E2 = d2[0] === "" || d2[0] && d2[0].charAt(0) === "/";
      if (m2) {
        r2.hostname = r2.host = E2 ? "" : d2.length ? d2.shift() : "";
        var v2 = !!(r2.host && r2.host.indexOf("@") > 0) && r2.host.split("@");
        v2 && (r2.auth = v2.shift(), r2.host = r2.hostname = v2.shift());
      }
      return p2 = p2 || r2.host && d2.length, p2 && !E2 && d2.unshift(""), d2.length ? r2.pathname = d2.join("/") : (r2.pathname = null, r2.path = null), l(r2.pathname) && l(r2.search) || (r2.path = (r2.pathname ? r2.pathname : "") + (r2.search ? r2.search : "")), r2.auth = e4.auth || r2.auth, r2.slashes = r2.slashes || e4.slashes, r2.href = r2.format(), r2;
    }, n.prototype.parseHost = 
  }, { punycode: 9, querystring: 12 }], 15: [ { "./decode": 13, "./encode": 14, dup: 12 }], 14: [function(e3, t, r) {
    "use strict";
    var n = function(e4) {
      switch (typeof e4) {
        case "string":
          return e4;
        case "boolean":
          return e4 ? "true" : "false";
        case "number":
          return isFinite(e4) ? e4 : "";
        default:
          return "";
      }
    };
    t.exports = 
  }, {}], 13: [function(e3, t, r) {
    "use strict";
    function n(e4, t2) {
      return Object.prototype.hasOwnProperty.call(e4, t2);
    }
    t.exports = function(e4, t2, r2, i) {
      t2 = t2 || "&", r2 = r2 || "=";
      var o = {};
      if (typeof e4 != "string" || e4.length === 0)
        return o;
      var s = /\+/g;
      e4 = e4.split(t2);
      var a = 1e3;
      i && typeof i.maxKeys == "number" && (a = i.maxKeys);
      var u = e4.length;
      a > 0 && u > a && (u = a);
      for (var c = 0; c < u; ++c) {
        var l, h, p, f, d = e4[c].replace(s, "%20"), m = d.indexOf(r2);
        m >= 0 ? (l = d.substr(0, m), h = d.substr(m + 1)) : (l = d, h = ""), p = decodeURIComponent(l), f = decodeURIComponent(h), n(o, p) ? Array.isArray(o[p]) ? o[p].push(f) : o[p] = [o[p], f] : o[p] = f;
      }
      return o;
    };
  }, {}], 12: [ { "./decode": 10, "./encode": 11 }], 11: [function(e3, t, r) {
    "use strict";
        var i = 
    t.exports = 
    var o = Array.isArray || function(e4) {
      return Object.prototype.toString.call(e4) === "[object Array]";
    }, s = Object.keys || 
  }, {}], 10: [function(e3, t, r) {
    "use strict";
        t.exports = function(e4, t2, r2, o) {
      t2 = t2 || "&", r2 = r2 || "=";
      var s = {};
      if (typeof e4 != "string" || e4.length === 0)
        return s;
      var a = /\+/g;
      e4 = e4.split(t2);
      var u = 1e3;
      o && typeof o.maxKeys == "number" && (u = o.maxKeys);
      var c = e4.length;
      u > 0 && c > u && (c = u);
      for (var l = 0; l < c; ++l) {
        var h, p, f, d, m = e4[l].replace(a, "%20"), v = m.indexOf(r2);
        v >= 0 ? (h = m.substr(0, v), p = m.substr(v + 1)) : (h = m, p = ""), f = decodeURIComponent(h), d = decodeURIComponent(p), n(s, f) ? i(s[f]) ? s[f].push(d) : s[f] = [s[f], d] : s[f] = d;
      }
      return s;
    };
    var i = Array.isArray || 
  }, {}], 9: [function(e3, t, r) {
    (function(e4) {
      (function(n) {
                                function a(e5) {
          for (var t2, r2, n2 = [], i2 = 0, o2 = e5.length; i2 < o2; )
            t2 = e5.charCodeAt(i2++), t2 >= 55296 && t2 <= 56319 && i2 < o2 ? (r2 = e5.charCodeAt(i2++), (64512 & r2) == 56320 ? n2.push(((1023 & t2) << 10) + (1023 & r2) + 65536) : (n2.push(t2), i2--)) : n2.push(t2);
          return n2;
        }
                                        function p(e5) {
          var t2, r2, n2, o2, s2, a2, l2, p2, f2, d2, m2 = [], v2 = e5.length, g2 = 0, y2 = T, b2 = A;
          for (r2 = e5.lastIndexOf(k), r2 < 0 && (r2 = 0), n2 = 0; n2 < r2; ++n2)
            e5.charCodeAt(n2) >= 128 && i("not-basic"), m2.push(e5.charCodeAt(n2));
          for (o2 = r2 > 0 ? r2 + 1 : 0; o2 < v2; ) {
            for (s2 = g2, a2 = 1, l2 = _; o2 >= v2 && i("invalid-input"), p2 = c(e5.charCodeAt(o2++)), (p2 >= _ || p2 > N((E - g2) / a2)) && i("overflow"), g2 += p2 * a2, f2 = l2 <= b2 ? S : l2 >= b2 + C ? C : l2 - b2, !(p2 < f2); l2 += _)
              d2 = _ - f2, a2 > N(E / d2) && i("overflow"), a2 *= d2;
            t2 = m2.length + 1, b2 = h(g2 - s2, t2, s2 == 0), N(g2 / t2) > E - y2 && i("overflow"), y2 += N(g2 / t2), g2 %= t2, m2.splice(g2++, 0, y2);
          }
          return u(m2);
        }
                                var v = typeof r == "object" && r && !r.nodeType && r, g = typeof t == "object" && t && !t.nodeType && t, y = typeof e4 == "object" && e4;
        y.global !== y && y.window !== y && y.self !== y || (n = y);
        var b, w, E = 2147483647, _ = 36, S = 1, C = 26, x = 38, R = 700, A = 72, T = 128, k = "-", I = /^xn--/, L = /[^\x20-\x7E]/, P = /[\x2E\u3002\uFF0E\uFF61]/g, q = { overflow: "Overflow: input needs wider integers to process", "not-basic": "Illegal input >= 0x80 (not a basic code point)", "invalid-input": "Invalid input" }, O = _ - S, N = Math.floor, U = String.fromCharCode;
        if (b = { version: "1.3.2", ucs2: { decode: a, encode: u }, decode: p, encode: f, toASCII: m, toUnicode: d }, typeof define == "function" && typeof define.amd == "object" && define.amd)
          define("punycode", ;
        else if (v && g)
          if (t.exports == v)
            g.exports = b;
          else
            for (w in b)
              b.hasOwnProperty(w) && (v[w] = b[w]);
        else
          n.punycode = b;
      })(this);
    }).call(this, typeof window != "undefined" ? window : typeof self != "undefined" ? self : typeof window != "undefined" ? window : {});
  }, {}], 4: [function(e3, t, r) {
        function i(e4) {
      return typeof e4 == "function";
    }
                t.exports = n, n.EventEmitter = n, n.prototype._events = void 0, n.prototype._maxListeners = void 0, n.defaultMaxListeners = 10, n.prototype.setMaxListeners =  n.prototype.emit = function(e4) {
      var t2, r2, n2, o2, u, c;
      if (this._events || (this._events = {}), e4 === "error" && (!this._events.error || s(this._events.error) && !this._events.error.length)) {
        if ((t2 = arguments[1]) instanceof Error)
          throw t2;
        var l = new Error('Uncaught, unspecified "error" event. (' + t2 + ")");
        throw l.context = t2, l;
      }
      if (r2 = this._events[e4], a(r2))
        return !1;
      if (i(r2))
        switch (arguments.length) {
          case 1:
            r2.call(this);
            break;
          case 2:
            r2.call(this, arguments[1]);
            break;
          case 3:
            r2.call(this, arguments[1], arguments[2]);
            break;
          default:
            o2 = Array.prototype.slice.call(arguments, 1), r2.apply(this, o2);
        }
      else if (s(r2))
        for (o2 = Array.prototype.slice.call(arguments, 1), c = r2.slice(), n2 = c.length, u = 0; u < n2; u++)
          c[u].apply(this, o2);
      return !0;
    }, n.prototype.addListener = function(e4, t2) {
      var r2;
      if (!i(t2))
        throw TypeError("listener must be a function");
      return this._events || (this._events = {}), this._events.newListener && this.emit("newListener", e4, i(t2.listener) ? t2.listener : t2), this._events[e4] ? s(this._events[e4]) ? this._events[e4].push(t2) : this._events[e4] = [this._events[e4], t2] : this._events[e4] = t2, s(this._events[e4]) && !this._events[e4].warned && (r2 = a(this._maxListeners) ? n.defaultMaxListeners : this._maxListeners) && r2 > 0 && this._events[e4].length > r2 && (this._events[e4].warned = !0, console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[e4].length), typeof console.trace == "function" && console.trace()), this;
    }, n.prototype.on = n.prototype.addListener, n.prototype.once =  n.prototype.removeListener =  n.prototype.removeAllListeners =  n.prototype.listeners =  n.prototype.listenerCount =  n.listenerCount = 
  }, {}], 3: [function(e3, t, r) {
    (function(t2, n) {
      "use strict";
                  function n(e4, t3, r2) {
        if (!(n.TYPED_ARRAY_SUPPORT || this instanceof n))
          return new n(e4, t3, r2);
        if (typeof e4 == "number") {
          if (typeof t3 == "string")
            throw new Error("If encoding is specified then the first argument must be a string");
          return c(this, e4);
        }
        return s(this, e4, t3, r2);
      }
                              function l(e4, t3, r2) {
        if (typeof r2 == "string" && r2 !== "" || (r2 = "utf8"), !n.isEncoding(r2))
          throw new TypeError('"encoding" must be a valid string encoding');
        var i2 = 0 | v(t3, r2);
        e4 = o(e4, i2);
        var s2 = e4.write(t3, r2);
        return s2 !== i2 && (e4 = e4.slice(0, s2)), e4;
      }
            function p(e4, t3, r2, i2) {
        if (t3.byteLength, r2 < 0 || t3.byteLength < r2)
          throw new RangeError("'offset' is out of bounds");
        if (t3.byteLength < r2 + (i2 || 0))
          throw new RangeError("'length' is out of bounds");
        return t3 = r2 === void 0 && i2 === void 0 ? new Uint8Array(t3) : i2 === void 0 ? new Uint8Array(t3, r2) : new Uint8Array(t3, r2, i2), n.TYPED_ARRAY_SUPPORT ? (e4 = t3, e4.__proto__ = n.prototype) : e4 = h(e4, t3), e4;
      }
      function f(e4, t3) {
        if (n.isBuffer(t3)) {
          var r2 = 0 | d(t3.length);
          return e4 = o(e4, r2), e4.length === 0 || t3.copy(e4, 0, 0, r2), e4;
        }
        if (t3) {
          if (typeof ArrayBuffer != "undefined" && t3.buffer instanceof ArrayBuffer || "length" in t3)
            return typeof t3.length != "number" || G(t3.length) ? o(e4, 0) : h(e4, t3);
          if (t3.type === "Buffer" && Q(t3.data))
            return h(e4, t3.data);
        }
        throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
      }
                  function v(e4, t3) {
        if (n.isBuffer(e4))
          return e4.length;
        if (typeof ArrayBuffer != "undefined" && typeof ArrayBuffer.isView == "function" && (ArrayBuffer.isView(e4) || e4 instanceof ArrayBuffer))
          return e4.byteLength;
        typeof e4 != "string" && (e4 = "" + e4);
        var r2 = e4.length;
        if (r2 === 0)
          return 0;
        for (var i2 = !1; ; )
          switch (t3) {
            case "ascii":
            case "latin1":
            case "binary":
              return r2;
            case "utf8":
            case "utf-8":
            case void 0:
              return V(e4).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return 2 * r2;
            case "hex":
              return r2 >>> 1;
            case "base64":
              return X(e4).length;
            default:
              if (i2)
                return V(e4).length;
              t3 = ("" + t3).toLowerCase(), i2 = !0;
          }
      }
                  function b(e4, t3, r2, i2, o2) {
        if (e4.length === 0)
          return -1;
        if (typeof r2 == "string" ? (i2 = r2, r2 = 0) : r2 > 2147483647 ? r2 = 2147483647 : r2 < -2147483648 && (r2 = -2147483648), r2 = +r2, isNaN(r2) && (r2 = o2 ? 0 : e4.length - 1), r2 < 0 && (r2 = e4.length + r2), r2 >= e4.length) {
          if (o2)
            return -1;
          r2 = e4.length - 1;
        } else if (r2 < 0) {
          if (!o2)
            return -1;
          r2 = 0;
        }
        if (typeof t3 == "string" && (t3 = n.from(t3, i2)), n.isBuffer(t3))
          return t3.length === 0 ? -1 : w(e4, t3, r2, i2, o2);
        if (typeof t3 == "number")
          return t3 &= 255, n.TYPED_ARRAY_SUPPORT && typeof Uint8Array.prototype.indexOf == "function" ? o2 ? Uint8Array.prototype.indexOf.call(e4, t3, r2) : Uint8Array.prototype.lastIndexOf.call(e4, t3, r2) : w(e4, [t3], r2, i2, o2);
        throw new TypeError("val must be string, number or Buffer");
      }
      function w(e4, t3, r2, n2, i2) {
                var s2 = 1, a2 = e4.length, u2 = t3.length;
        if (n2 !== void 0 && ((n2 = String(n2).toLowerCase()) === "ucs2" || n2 === "ucs-2" || n2 === "utf16le" || n2 === "utf-16le")) {
          if (e4.length < 2 || t3.length < 2)
            return -1;
          s2 = 2, a2 /= 2, u2 /= 2, r2 /= 2;
        }
        var c2;
        if (i2) {
          var l2 = -1;
          for (c2 = r2; c2 < a2; c2++)
            if (o2(e4, c2) === o2(t3, l2 === -1 ? 0 : c2 - l2)) {
              if (l2 === -1 && (l2 = c2), c2 - l2 + 1 === u2)
                return l2 * s2;
            } else
              l2 !== -1 && (c2 -= c2 - l2), l2 = -1;
        } else
          for (r2 + u2 > a2 && (r2 = a2 - u2), c2 = r2; c2 >= 0; c2--) {
            for (var h2 = !0, p2 = 0; p2 < u2; p2++)
              if (o2(e4, c2 + p2) !== o2(t3, p2)) {
                h2 = !1;
                break;
              }
            if (h2)
              return c2;
          }
        return -1;
      }
            function _(e4, t3, r2, n2) {
        return Y(V(t3, e4.length - r2), e4, r2, n2);
      }
      function S(e4, t3, r2, n2) {
        return Y(K(t3), e4, r2, n2);
      }
                              function T(e4, t3, r2) {
        r2 = Math.min(e4.length, r2);
        for (var n2 = [], i2 = t3; i2 < r2; ) {
          var o2 = e4[i2], s2 = null, a2 = o2 > 239 ? 4 : o2 > 223 ? 3 : o2 > 191 ? 2 : 1;
          if (i2 + a2 <= r2) {
            var u2, c2, l2, h2;
            switch (a2) {
              case 1:
                o2 < 128 && (s2 = o2);
                break;
              case 2:
                u2 = e4[i2 + 1], (192 & u2) == 128 && (h2 = (31 & o2) << 6 | 63 & u2) > 127 && (s2 = h2);
                break;
              case 3:
                u2 = e4[i2 + 1], c2 = e4[i2 + 2], (192 & u2) == 128 && (192 & c2) == 128 && (h2 = (15 & o2) << 12 | (63 & u2) << 6 | 63 & c2) > 2047 && (h2 < 55296 || h2 > 57343) && (s2 = h2);
                break;
              case 4:
                u2 = e4[i2 + 1], c2 = e4[i2 + 2], l2 = e4[i2 + 3], (192 & u2) == 128 && (192 & c2) == 128 && (192 & l2) == 128 && (h2 = (15 & o2) << 18 | (63 & u2) << 12 | (63 & c2) << 6 | 63 & l2) > 65535 && h2 < 1114112 && (s2 = h2);
            }
          }
          s2 === null ? (s2 = 65533, a2 = 1) : s2 > 65535 && (s2 -= 65536, n2.push(s2 >>> 10 & 1023 | 55296), s2 = 56320 | 1023 & s2), n2.push(s2), i2 += a2;
        }
        return k(n2);
      }
                                                                  function j(e4, t3, r2, n2, i2) {
        return i2 || M(e4, t3, r2, 4, 34028234663852886e22, -34028234663852886e22), $.write(e4, t3, r2, n2, 23, 4), r2 + 4;
      }
                                                                  var J = e3("base64-js"), $ = e3("ieee754"), Q = e3("isarray");
      r.Buffer = n, r.SlowBuffer = m, r.INSPECT_MAX_BYTES = 50, n.TYPED_ARRAY_SUPPORT = t2.TYPED_ARRAY_SUPPORT !== void 0 ? t2.TYPED_ARRAY_SUPPORT : function() {
        try {
          var e4 = new Uint8Array(1);
          return e4.__proto__ = { __proto__: Uint8Array.prototype, foo: }, e4.foo() === 42 && typeof e4.subarray == "function" && e4.subarray(1, 1).byteLength === 0;
        } catch (e5) {
          return !1;
        }
      }(), r.kMaxLength = i(), n.poolSize = 8192, n._augment =  n.from = function(e4, t3, r2) {
        return s(null, e4, t3, r2);
      }, n.TYPED_ARRAY_SUPPORT && (n.prototype.__proto__ = Uint8Array.prototype, n.__proto__ = Uint8Array, typeof Symbol != "undefined" && Symbol.species && n[Symbol.species] === n && Object.defineProperty(n, Symbol.species, { value: null, configurable: !0 })), n.alloc =  n.allocUnsafe = function(e4) {
        return c(null, e4);
      }, n.allocUnsafeSlow =  n.isBuffer = function(e4) {
        return !(e4 == null || !e4._isBuffer);
      }, n.compare =  n.isEncoding =  n.concat =  n.byteLength = v, n.prototype._isBuffer = !0, n.prototype.swap16 =  n.prototype.swap32 =  n.prototype.swap64 =  n.prototype.toString = function() {
        var e4 = 0 | this.length;
        return e4 === 0 ? "" : arguments.length === 0 ? T(this, 0, e4) : g.apply(this, arguments);
      }, n.prototype.equals = function(e4) {
        if (!n.isBuffer(e4))
          throw new TypeError("Argument must be a Buffer");
        return this === e4 || n.compare(this, e4) === 0;
      }, n.prototype.inspect =  n.prototype.compare =  n.prototype.includes =  n.prototype.indexOf = function(e4, t3, r2) {
        return b(this, e4, t3, r2, !0);
      }, n.prototype.lastIndexOf =  n.prototype.write = function(e4, t3, r2, n2) {
        if (t3 === void 0)
          n2 = "utf8", r2 = this.length, t3 = 0;
        else if (r2 === void 0 && typeof t3 == "string")
          n2 = t3, r2 = this.length, t3 = 0;
        else {
          if (!isFinite(t3))
            throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
          t3 |= 0, isFinite(r2) ? (r2 |= 0, n2 === void 0 && (n2 = "utf8")) : (n2 = r2, r2 = void 0);
        }
        var i2 = this.length - t3;
        if ((r2 === void 0 || r2 > i2) && (r2 = i2), e4.length > 0 && (r2 < 0 || t3 < 0) || t3 > this.length)
          throw new RangeError("Attempt to write outside buffer bounds");
        n2 || (n2 = "utf8");
        for (var o2 = !1; ; )
          switch (n2) {
            case "hex":
              return E(this, e4, t3, r2);
            case "utf8":
            case "utf-8":
              return _(this, e4, t3, r2);
            case "ascii":
              return S(this, e4, t3, r2);
            case "latin1":
            case "binary":
              return C(this, e4, t3, r2);
            case "base64":
              return x(this, e4, t3, r2);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return R(this, e4, t3, r2);
            default:
              if (o2)
                throw new TypeError("Unknown encoding: " + n2);
              n2 = ("" + n2).toLowerCase(), o2 = !0;
          }
      }, n.prototype.toJSON = 
      var Z = 4096;
      n.prototype.slice = function(e4, t3) {
        var r2 = this.length;
        e4 = ~~e4, t3 = t3 === void 0 ? r2 : ~~t3, e4 < 0 ? (e4 += r2) < 0 && (e4 = 0) : e4 > r2 && (e4 = r2), t3 < 0 ? (t3 += r2) < 0 && (t3 = 0) : t3 > r2 && (t3 = r2), t3 < e4 && (t3 = e4);
        var i2;
        if (n.TYPED_ARRAY_SUPPORT)
          i2 = this.subarray(e4, t3), i2.__proto__ = n.prototype;
        else {
          var o2 = t3 - e4;
          i2 = new n(o2, void 0);
          for (var s2 = 0; s2 < o2; ++s2)
            i2[s2] = this[s2 + e4];
        }
        return i2;
      }, n.prototype.readUIntLE =  n.prototype.readUIntBE =  n.prototype.readUInt8 =  n.prototype.readUInt16LE =  n.prototype.readUInt16BE =  n.prototype.readUInt32LE =  n.prototype.readUInt32BE =  n.prototype.readIntLE =  n.prototype.readIntBE =  n.prototype.readInt8 =  n.prototype.readInt16LE =  n.prototype.readInt16BE =  n.prototype.readInt32LE =  n.prototype.readInt32BE =  n.prototype.readFloatLE = function(e4, t3) {
        return t3 || O(e4, 4, this.length), $.read(this, e4, !0, 23, 4);
      }, n.prototype.readFloatBE = function(e4, t3) {
        return t3 || O(e4, 4, this.length), $.read(this, e4, !1, 23, 4);
      }, n.prototype.readDoubleLE = function(e4, t3) {
        return t3 || O(e4, 8, this.length), $.read(this, e4, !0, 52, 8);
      }, n.prototype.readDoubleBE =  n.prototype.writeUIntLE = function(e4, t3, r2, n2) {
        e4 = +e4, t3 |= 0, r2 |= 0, !n2 && N(this, e4, t3, r2, Math.pow(2, 8 * r2) - 1, 0);
        var i2 = 1, o2 = 0;
        for (this[t3] = 255 & e4; ++o2 < r2 && (i2 *= 256); )
          this[t3 + o2] = e4 / i2 & 255;
        return t3 + r2;
      }, n.prototype.writeUIntBE = function(e4, t3, r2, n2) {
        e4 = +e4, t3 |= 0, r2 |= 0, !n2 && N(this, e4, t3, r2, Math.pow(2, 8 * r2) - 1, 0);
        var i2 = r2 - 1, o2 = 1;
        for (this[t3 + i2] = 255 & e4; --i2 >= 0 && (o2 *= 256); )
          this[t3 + i2] = e4 / o2 & 255;
        return t3 + r2;
      }, n.prototype.writeUInt8 =  n.prototype.writeUInt16LE =  n.prototype.writeUInt16BE =  n.prototype.writeUInt32LE =  n.prototype.writeUInt32BE =  n.prototype.writeIntLE = function(e4, t3, r2, n2) {
        if (e4 = +e4, t3 |= 0, !n2) {
          var i2 = Math.pow(2, 8 * r2 - 1);
          N(this, e4, t3, r2, i2 - 1, -i2);
        }
        var o2 = 0, s2 = 1, a2 = 0;
        for (this[t3] = 255 & e4; ++o2 < r2 && (s2 *= 256); )
          e4 < 0 && a2 === 0 && this[t3 + o2 - 1] !== 0 && (a2 = 1), this[t3 + o2] = (e4 / s2 >> 0) - a2 & 255;
        return t3 + r2;
      }, n.prototype.writeIntBE = function(e4, t3, r2, n2) {
        if (e4 = +e4, t3 |= 0, !n2) {
          var i2 = Math.pow(2, 8 * r2 - 1);
          N(this, e4, t3, r2, i2 - 1, -i2);
        }
        var o2 = r2 - 1, s2 = 1, a2 = 0;
        for (this[t3 + o2] = 255 & e4; --o2 >= 0 && (s2 *= 256); )
          e4 < 0 && a2 === 0 && this[t3 + o2 + 1] !== 0 && (a2 = 1), this[t3 + o2] = (e4 / s2 >> 0) - a2 & 255;
        return t3 + r2;
      }, n.prototype.writeInt8 =  n.prototype.writeInt16LE =  n.prototype.writeInt16BE =  n.prototype.writeInt32LE =  n.prototype.writeInt32BE =  n.prototype.writeFloatLE = function(e4, t3, r2) {
        return j(this, e4, t3, !0, r2);
      }, n.prototype.writeFloatBE = function(e4, t3, r2) {
        return j(this, e4, t3, !1, r2);
      }, n.prototype.writeDoubleLE = function(e4, t3, r2) {
        return B(this, e4, t3, !0, r2);
      }, n.prototype.writeDoubleBE =  n.prototype.copy = function(e4, t3, r2, i2) {
        if (r2 || (r2 = 0), i2 || i2 === 0 || (i2 = this.length), t3 >= e4.length && (t3 = e4.length), t3 || (t3 = 0), i2 > 0 && i2 < r2 && (i2 = r2), i2 === r2 || e4.length === 0 || this.length === 0)
          return 0;
        if (t3 < 0)
          throw new RangeError("targetStart out of bounds");
        if (r2 < 0 || r2 >= this.length)
          throw new RangeError("sourceStart out of bounds");
        if (i2 < 0)
          throw new RangeError("sourceEnd out of bounds");
        i2 > this.length && (i2 = this.length), e4.length - t3 < i2 - r2 && (i2 = e4.length - t3 + r2);
        var o2, s2 = i2 - r2;
        if (this === e4 && r2 < t3 && t3 < i2)
          for (o2 = s2 - 1; o2 >= 0; --o2)
            e4[o2 + t3] = this[o2 + r2];
        else if (s2 < 1e3 || !n.TYPED_ARRAY_SUPPORT)
          for (o2 = 0; o2 < s2; ++o2)
            e4[o2 + t3] = this[o2 + r2];
        else
          Uint8Array.prototype.set.call(e4, this.subarray(r2, r2 + s2), t3);
        return s2;
      }, n.prototype.fill = function(e4, t3, r2, i2) {
        if (typeof e4 == "string") {
          if (typeof t3 == "string" ? (i2 = t3, t3 = 0, r2 = this.length) : typeof r2 == "string" && (i2 = r2, r2 = this.length), e4.length === 1) {
            var o2 = e4.charCodeAt(0);
            o2 < 256 && (e4 = o2);
          }
          if (i2 !== void 0 && typeof i2 != "string")
            throw new TypeError("encoding must be a string");
          if (typeof i2 == "string" && !n.isEncoding(i2))
            throw new TypeError("Unknown encoding: " + i2);
        } else
          typeof e4 == "number" && (e4 &= 255);
        if (t3 < 0 || this.length < t3 || this.length < r2)
          throw new RangeError("Out of range index");
        if (r2 <= t3)
          return this;
        t3 >>>= 0, r2 = r2 === void 0 ? this.length : r2 >>> 0, e4 || (e4 = 0);
        var s2;
        if (typeof e4 == "number")
          for (s2 = t3; s2 < r2; ++s2)
            this[s2] = e4;
        else {
          var a2 = n.isBuffer(e4) ? e4 : V(new n(e4, i2).toString()), u2 = a2.length;
          for (s2 = 0; s2 < r2 - t3; ++s2)
            this[s2 + t3] = a2[s2 % u2];
        }
        return this;
      };
      var ee = /[^+\/0-9A-Za-z-_]/g;
    }).call(this, typeof window != "undefined" ? window : typeof self != "undefined" ? self : typeof window != "undefined" ? window : {}, e3("buffer").Buffer);
  }, { "base64-js": 1, buffer: 3, ieee754: 5, isarray: 6 }], 6: [ {}], 5: [function(e3, t, r) {
    r.read = function(e4, t2, r2, n, i) {
      var o, s, a = 8 * i - n - 1, u = (1 << a) - 1, c = u >> 1, l = -7, h = r2 ? i - 1 : 0, p = r2 ? -1 : 1, f = e4[t2 + h];
      for (h += p, o = f & (1 << -l) - 1, f >>= -l, l += a; l > 0; o = 256 * o + e4[t2 + h], h += p, l -= 8)
        ;
      for (s = o & (1 << -l) - 1, o >>= -l, l += n; l > 0; s = 256 * s + e4[t2 + h], h += p, l -= 8)
        ;
      if (o === 0)
        o = 1 - c;
      else {
        if (o === u)
          return s ? NaN : 1 / 0 * (f ? -1 : 1);
        s += Math.pow(2, n), o -= c;
      }
      return (f ? -1 : 1) * s * Math.pow(2, o - n);
    }, r.write = function(e4, t2, r2, n, i, o) {
      var s, a, u, c = 8 * o - i - 1, l = (1 << c) - 1, h = l >> 1, p = i === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, f = n ? 0 : o - 1, d = n ? 1 : -1, m = t2 < 0 || t2 === 0 && 1 / t2 < 0 ? 1 : 0;
      for (t2 = Math.abs(t2), isNaN(t2) || t2 === 1 / 0 ? (a = isNaN(t2) ? 1 : 0, s = l) : (s = Math.floor(Math.log(t2) / Math.LN2), t2 * (u = Math.pow(2, -s)) < 1 && (s--, u *= 2), t2 += s + h >= 1 ? p / u : p * Math.pow(2, 1 - h), t2 * u >= 2 && (s++, u /= 2), s + h >= l ? (a = 0, s = l) : s + h >= 1 ? (a = (t2 * u - 1) * Math.pow(2, i), s += h) : (a = t2 * Math.pow(2, h - 1) * Math.pow(2, i), s = 0)); i >= 8; e4[r2 + f] = 255 & a, f += d, a /= 256, i -= 8)
        ;
      for (s = s << i | a, c += i; c > 0; e4[r2 + f] = 255 & s, f += d, s /= 256, c -= 8)
        ;
      e4[r2 + f - d] |= 128 * m;
    };
  }, {}], 1: [function(e3, t, r) {
    "use strict";
    function n(e4) {
      var t2 = e4.length;
      if (t2 % 4 > 0)
        throw new Error("Invalid string. Length must be a multiple of 4");
      var r2 = e4.indexOf("=");
      return r2 === -1 && (r2 = t2), [r2, r2 === t2 ? 0 : 4 - r2 % 4];
    }
            function s(e4) {
      var t2, r2, i2 = n(e4), s2 = i2[0], a2 = i2[1], u2 = new p(o(e4, s2, a2)), c2 = 0, l2 = a2 > 0 ? s2 - 4 : s2;
      for (r2 = 0; r2 < l2; r2 += 4)
        t2 = h[e4.charCodeAt(r2)] << 18 | h[e4.charCodeAt(r2 + 1)] << 12 | h[e4.charCodeAt(r2 + 2)] << 6 | h[e4.charCodeAt(r2 + 3)], u2[c2++] = t2 >> 16 & 255, u2[c2++] = t2 >> 8 & 255, u2[c2++] = 255 & t2;
      return a2 === 2 && (t2 = h[e4.charCodeAt(r2)] << 2 | h[e4.charCodeAt(r2 + 1)] >> 4, u2[c2++] = 255 & t2), a2 === 1 && (t2 = h[e4.charCodeAt(r2)] << 10 | h[e4.charCodeAt(r2 + 1)] << 4 | h[e4.charCodeAt(r2 + 2)] >> 2, u2[c2++] = t2 >> 8 & 255, u2[c2++] = 255 & t2), u2;
    }
            function c(e4) {
      for (var t2, r2 = e4.length, n2 = r2 % 3, i2 = [], o2 = 0, s2 = r2 - n2; o2 < s2; o2 += 16383)
        i2.push(u(e4, o2, o2 + 16383 > s2 ? s2 : o2 + 16383));
      return n2 === 1 ? (t2 = e4[r2 - 1], i2.push(l[t2 >> 2] + l[t2 << 4 & 63] + "==")) : n2 === 2 && (t2 = (e4[r2 - 2] << 8) + e4[r2 - 1], i2.push(l[t2 >> 10] + l[t2 >> 4 & 63] + l[t2 << 2 & 63] + "=")), i2.join("");
    }
    r.byteLength = i, r.toByteArray = s, r.fromByteArray = c;
    for (var l = [], h = [], p = typeof Uint8Array != "undefined" ? Uint8Array : Array, f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", d = 0, m = f.length; d < m; ++d)
      l[d] = f[d], h[f.charCodeAt(d)] = d;
    h["-".charCodeAt(0)] = 62, h["_".charCodeAt(0)] = 63;
  }, {}] }, {}, [28]);
  AWS.apiLoader.services.kinesis = {}, AWS.Kinesis = AWS.Service.defineService("kinesis", ["2013-12-02"]);
  AWS.apiLoader.services.kinesis["2013-12-02"] = { version: "2.0", metadata: { apiVersion: "2013-12-02", endpointPrefix: "kinesis", jsonVersion: "1.1", protocol: "json", protocolSettings: { h2: "eventstream" }, serviceAbbreviation: "Kinesis", serviceFullName: "Amazon Kinesis", serviceId: "Kinesis", signatureVersion: "v4", targetPrefix: "Kinesis_20131202", uid: "kinesis-2013-12-02" }, operations: { AddTagsToStream: { input: { type: "structure", required: ["StreamName", "Tags"], members: { StreamName: {}, Tags: { type: "map", key: {}, value: {} } } } }, CreateStream: { input: { type: "structure", required: ["StreamName", "ShardCount"], members: { StreamName: {}, ShardCount: { type: "integer" } } } }, DecreaseStreamRetentionPeriod: { input: { type: "structure", required: ["StreamName", "RetentionPeriodHours"], members: { StreamName: {}, RetentionPeriodHours: { type: "integer" } } } }, DeleteStream: { input: { type: "structure", required: ["StreamName"], members: { StreamName: {}, EnforceConsumerDeletion: { type: "boolean" } } } }, DeregisterStreamConsumer: { input: { type: "structure", members: { StreamARN: {}, ConsumerName: {}, ConsumerARN: {} } } }, DescribeLimits: { input: { type: "structure", members: {} }, output: { type: "structure", required: ["ShardLimit", "OpenShardCount"], members: { ShardLimit: { type: "integer" }, OpenShardCount: { type: "integer" } } } }, DescribeStream: { input: { type: "structure", required: ["StreamName"], members: { StreamName: {}, Limit: { type: "integer" }, ExclusiveStartShardId: {} } }, output: { type: "structure", required: ["StreamDescription"], members: { StreamDescription: { type: "structure", required: ["StreamName", "StreamARN", "StreamStatus", "Shards", "HasMoreShards", "RetentionPeriodHours", "StreamCreationTimestamp", "EnhancedMonitoring"], members: { StreamName: {}, StreamARN: {}, StreamStatus: {}, Shards: { shape: "Sp" }, HasMoreShards: { type: "boolean" }, RetentionPeriodHours: { type: "integer" }, StreamCreationTimestamp: { type: "timestamp" }, EnhancedMonitoring: { shape: "Sw" }, EncryptionType: {}, KeyId: {} } } } } }, DescribeStreamConsumer: { input: { type: "structure", members: { StreamARN: {}, ConsumerName: {}, ConsumerARN: {} } }, output: { type: "structure", required: ["ConsumerDescription"], members: { ConsumerDescription: { type: "structure", required: ["ConsumerName", "ConsumerARN", "ConsumerStatus", "ConsumerCreationTimestamp", "StreamARN"], members: { ConsumerName: {}, ConsumerARN: {}, ConsumerStatus: {}, ConsumerCreationTimestamp: { type: "timestamp" }, StreamARN: {} } } } } }, DescribeStreamSummary: { input: { type: "structure", required: ["StreamName"], members: { StreamName: {} } }, output: { type: "structure", required: ["StreamDescriptionSummary"], members: { StreamDescriptionSummary: { type: "structure", required: ["StreamName", "StreamARN", "StreamStatus", "RetentionPeriodHours", "StreamCreationTimestamp", "EnhancedMonitoring", "OpenShardCount"], members: { StreamName: {}, StreamARN: {}, StreamStatus: {}, RetentionPeriodHours: { type: "integer" }, StreamCreationTimestamp: { type: "timestamp" }, EnhancedMonitoring: { shape: "Sw" }, EncryptionType: {}, KeyId: {}, OpenShardCount: { type: "integer" }, ConsumerCount: { type: "integer" } } } } } }, DisableEnhancedMonitoring: { input: { type: "structure", required: ["StreamName", "ShardLevelMetrics"], members: { StreamName: {}, ShardLevelMetrics: { shape: "Sy" } } }, output: { shape: "S1b" } }, EnableEnhancedMonitoring: { input: { type: "structure", required: ["StreamName", "ShardLevelMetrics"], members: { StreamName: {}, ShardLevelMetrics: { shape: "Sy" } } }, output: { shape: "S1b" } }, GetRecords: { input: { type: "structure", required: ["ShardIterator"], members: { ShardIterator: {}, Limit: { type: "integer" } } }, output: { type: "structure", required: ["Records"], members: { Records: { type: "list", member: { type: "structure", required: ["SequenceNumber", "Data", "PartitionKey"], members: { SequenceNumber: {}, ApproximateArrivalTimestamp: { type: "timestamp" }, Data: { type: "blob" }, PartitionKey: {}, EncryptionType: {} } } }, NextShardIterator: {}, MillisBehindLatest: { type: "long" } } } }, GetShardIterator: { input: { type: "structure", required: ["StreamName", "ShardId", "ShardIteratorType"], members: { StreamName: {}, ShardId: {}, ShardIteratorType: {}, StartingSequenceNumber: {}, Timestamp: { type: "timestamp" } } }, output: { type: "structure", members: { ShardIterator: {} } } }, IncreaseStreamRetentionPeriod: { input: { type: "structure", required: ["StreamName", "RetentionPeriodHours"], members: { StreamName: {}, RetentionPeriodHours: { type: "integer" } } } }, ListShards: { input: { type: "structure", members: { StreamName: {}, NextToken: {}, ExclusiveStartShardId: {}, MaxResults: { type: "integer" }, StreamCreationTimestamp: { type: "timestamp" } } }, output: { type: "structure", members: { Shards: { shape: "Sp" }, NextToken: {} } } }, ListStreamConsumers: { input: { type: "structure", required: ["StreamARN"], members: { StreamARN: {}, NextToken: {}, MaxResults: { type: "integer" }, StreamCreationTimestamp: { type: "timestamp" } } }, output: { type: "structure", members: { Consumers: { type: "list", member: { shape: "S1y" } }, NextToken: {} } } }, ListStreams: { input: { type: "structure", members: { Limit: { type: "integer" }, ExclusiveStartStreamName: {} } }, output: { type: "structure", required: ["StreamNames", "HasMoreStreams"], members: { StreamNames: { type: "list", member: {} }, HasMoreStreams: { type: "boolean" } } } }, ListTagsForStream: { input: { type: "structure", required: ["StreamName"], members: { StreamName: {}, ExclusiveStartTagKey: {}, Limit: { type: "integer" } } }, output: { type: "structure", required: ["Tags", "HasMoreTags"], members: { Tags: { type: "list", member: { type: "structure", required: ["Key"], members: { Key: {}, Value: {} } } }, HasMoreTags: { type: "boolean" } } } }, MergeShards: { input: { type: "structure", required: ["StreamName", "ShardToMerge", "AdjacentShardToMerge"], members: { StreamName: {}, ShardToMerge: {}, AdjacentShardToMerge: {} } } }, PutRecord: { input: { type: "structure", required: ["StreamName", "Data", "PartitionKey"], members: { StreamName: {}, Data: { type: "blob" }, PartitionKey: {}, ExplicitHashKey: {}, SequenceNumberForOrdering: {} } }, output: { type: "structure", required: ["ShardId", "SequenceNumber"], members: { ShardId: {}, SequenceNumber: {}, EncryptionType: {} } } }, PutRecords: { input: { type: "structure", required: ["Records", "StreamName"], members: { Records: { type: "list", member: { type: "structure", required: ["Data", "PartitionKey"], members: { Data: { type: "blob" }, ExplicitHashKey: {}, PartitionKey: {} } } }, StreamName: {} } }, output: { type: "structure", required: ["Records"], members: { FailedRecordCount: { type: "integer" }, Records: { type: "list", member: { type: "structure", members: { SequenceNumber: {}, ShardId: {}, ErrorCode: {}, ErrorMessage: {} } } }, EncryptionType: {} } } }, RegisterStreamConsumer: { input: { type: "structure", required: ["StreamARN", "ConsumerName"], members: { StreamARN: {}, ConsumerName: {} } }, output: { type: "structure", required: ["Consumer"], members: { Consumer: { shape: "S1y" } } } }, RemoveTagsFromStream: { input: { type: "structure", required: ["StreamName", "TagKeys"], members: { StreamName: {}, TagKeys: { type: "list", member: {} } } } }, SplitShard: { input: { type: "structure", required: ["StreamName", "ShardToSplit", "NewStartingHashKey"], members: { StreamName: {}, ShardToSplit: {}, NewStartingHashKey: {} } } }, StartStreamEncryption: { input: { type: "structure", required: ["StreamName", "EncryptionType", "KeyId"], members: { StreamName: {}, EncryptionType: {}, KeyId: {} } } }, StopStreamEncryption: { input: { type: "structure", required: ["StreamName", "EncryptionType", "KeyId"], members: { StreamName: {}, EncryptionType: {}, KeyId: {} } } }, UpdateShardCount: { input: { type: "structure", required: ["StreamName", "TargetShardCount", "ScalingType"], members: { StreamName: {}, TargetShardCount: { type: "integer" }, ScalingType: {} } }, output: { type: "structure", members: { StreamName: {}, CurrentShardCount: { type: "integer" }, TargetShardCount: { type: "integer" } } } } }, shapes: { Sp: { type: "list", member: { type: "structure", required: ["ShardId", "HashKeyRange", "SequenceNumberRange"], members: { ShardId: {}, ParentShardId: {}, AdjacentParentShardId: {}, HashKeyRange: { type: "structure", required: ["StartingHashKey", "EndingHashKey"], members: { StartingHashKey: {}, EndingHashKey: {} } }, SequenceNumberRange: { type: "structure", required: ["StartingSequenceNumber"], members: { StartingSequenceNumber: {}, EndingSequenceNumber: {} } } } } }, Sw: { type: "list", member: { type: "structure", members: { ShardLevelMetrics: { shape: "Sy" } } } }, Sy: { type: "list", member: {} }, S1b: { type: "structure", members: { StreamName: {}, CurrentShardLevelMetrics: { shape: "Sy" }, DesiredShardLevelMetrics: { shape: "Sy" } } }, S1y: { type: "structure", required: ["ConsumerName", "ConsumerARN", "ConsumerStatus", "ConsumerCreationTimestamp"], members: { ConsumerName: {}, ConsumerARN: {}, ConsumerStatus: {}, ConsumerCreationTimestamp: { type: "timestamp" } } } }, paginators: { DescribeStream: { input_token: "ExclusiveStartShardId", limit_key: "Limit", more_results: "StreamDescription.HasMoreShards", output_token: "StreamDescription.Shards[-1].ShardId", result_key: "StreamDescription.Shards" }, ListStreamConsumers: { input_token: "NextToken", limit_key: "MaxResults", output_token: "NextToken" }, ListStreams: { input_token: "ExclusiveStartStreamName", limit_key: "Limit", more_results: "HasMoreStreams", output_token: "StreamNames[-1]", result_key: "StreamNames" } }, waiters: { StreamExists: { delay: 10, operation: "DescribeStream", maxAttempts: 18, acceptors: [{ expected: "ACTIVE", matcher: "path", state: "success", argument: "StreamDescription.StreamStatus" }] }, StreamNotExists: { delay: 10, operation: "DescribeStream", maxAttempts: 18, acceptors: [{ expected: "ResourceNotFoundException", matcher: "error", state: "success" }] } } };
  AWS.apiLoader.services.sts = {}, AWS.STS = AWS.Service.defineService("sts", ["2011-06-15"]), _xamzrequire = { 107: [function(e3, n, i) {
    var t = e3("../core"), r = e3("../config_regional_endpoint");
    t.util.update(t.STS.prototype, { credentialsFrom:  assumeRoleWithWebIdentity: function(e4, n2) {
      return this.makeUnauthenticatedRequest("assumeRoleWithWebIdentity", e4, n2);
    }, assumeRoleWithSAML:  setupRequestListeners:  optInRegionalEndpoint: function(e4) {
      var n2 = e4.service, i2 = n2.config;
      if (i2.stsRegionalEndpoints = r(n2._originalConfig, { env: "AWS_STS_REGIONAL_ENDPOINTS", sharedConfig: "sts_regional_endpoints", clientConfig: "stsRegionalEndpoints" }), i2.stsRegionalEndpoints === "regional" && n2.isGlobalEndpoint) {
        if (!i2.region)
          throw t.util.error(new Error(), { code: "ConfigError", message: "Missing region in config" });
        var o = i2.endpoint.indexOf(".amazonaws.com"), s = i2.endpoint.substring(0, o) + "." + i2.region + i2.endpoint.substring(o);
        e4.httpRequest.updateEndpoint(s), e4.httpRequest.region = i2.region;
      }
    } });
  }, { "../config_regional_endpoint": 38, "../core": 39 }] }, {}, [107]);
  AWS.apiLoader.services.sts["2011-06-15"] = { version: "2.0", metadata: { apiVersion: "2011-06-15", endpointPrefix: "sts", globalEndpoint: "sts.amazonaws.com", protocol: "query", serviceAbbreviation: "AWS STS", serviceFullName: "AWS Security Token Service", serviceId: "STS", signatureVersion: "v4", uid: "sts-2011-06-15", xmlNamespace: "https://sts.amazonaws.com/doc/2011-06-15/" }, operations: { AssumeRole: { input: { type: "structure", required: ["RoleArn", "RoleSessionName"], members: { RoleArn: {}, RoleSessionName: {}, PolicyArns: { shape: "S4" }, Policy: {}, DurationSeconds: { type: "integer" }, Tags: { shape: "S8" }, TransitiveTagKeys: { type: "list", member: {} }, ExternalId: {}, SerialNumber: {}, TokenCode: {} } }, output: { resultWrapper: "AssumeRoleResult", type: "structure", members: { Credentials: { shape: "Sh" }, AssumedRoleUser: { shape: "Sm" }, PackedPolicySize: { type: "integer" } } } }, AssumeRoleWithSAML: { input: { type: "structure", required: ["RoleArn", "PrincipalArn", "SAMLAssertion"], members: { RoleArn: {}, PrincipalArn: {}, SAMLAssertion: { type: "string", sensitive: !0 }, PolicyArns: { shape: "S4" }, Policy: {}, DurationSeconds: { type: "integer" } } }, output: { resultWrapper: "AssumeRoleWithSAMLResult", type: "structure", members: { Credentials: { shape: "Sh" }, AssumedRoleUser: { shape: "Sm" }, PackedPolicySize: { type: "integer" }, Subject: {}, SubjectType: {}, Issuer: {}, Audience: {}, NameQualifier: {} } } }, AssumeRoleWithWebIdentity: { input: { type: "structure", required: ["RoleArn", "RoleSessionName", "WebIdentityToken"], members: { RoleArn: {}, RoleSessionName: {}, WebIdentityToken: { type: "string", sensitive: !0 }, ProviderId: {}, PolicyArns: { shape: "S4" }, Policy: {}, DurationSeconds: { type: "integer" } } }, output: { resultWrapper: "AssumeRoleWithWebIdentityResult", type: "structure", members: { Credentials: { shape: "Sh" }, SubjectFromWebIdentityToken: {}, AssumedRoleUser: { shape: "Sm" }, PackedPolicySize: { type: "integer" }, Provider: {}, Audience: {} } } }, DecodeAuthorizationMessage: { input: { type: "structure", required: ["EncodedMessage"], members: { EncodedMessage: {} } }, output: { resultWrapper: "DecodeAuthorizationMessageResult", type: "structure", members: { DecodedMessage: {} } } }, GetAccessKeyInfo: { input: { type: "structure", required: ["AccessKeyId"], members: { AccessKeyId: {} } }, output: { resultWrapper: "GetAccessKeyInfoResult", type: "structure", members: { Account: {} } } }, GetCallerIdentity: { input: { type: "structure", members: {} }, output: { resultWrapper: "GetCallerIdentityResult", type: "structure", members: { UserId: {}, Account: {}, Arn: {} } } }, GetFederationToken: { input: { type: "structure", required: ["Name"], members: { Name: {}, Policy: {}, PolicyArns: { shape: "S4" }, DurationSeconds: { type: "integer" }, Tags: { shape: "S8" } } }, output: { resultWrapper: "GetFederationTokenResult", type: "structure", members: { Credentials: { shape: "Sh" }, FederatedUser: { type: "structure", required: ["FederatedUserId", "Arn"], members: { FederatedUserId: {}, Arn: {} } }, PackedPolicySize: { type: "integer" } } } }, GetSessionToken: { input: { type: "structure", members: { DurationSeconds: { type: "integer" }, SerialNumber: {}, TokenCode: {} } }, output: { resultWrapper: "GetSessionTokenResult", type: "structure", members: { Credentials: { shape: "Sh" } } } } }, shapes: { S4: { type: "list", member: { type: "structure", members: { arn: {} } } }, S8: { type: "list", member: { type: "structure", required: ["Key", "Value"], members: { Key: {}, Value: {} } } }, Sh: { type: "structure", required: ["AccessKeyId", "SecretAccessKey", "SessionToken", "Expiration"], members: { AccessKeyId: {}, SecretAccessKey: {}, SessionToken: {}, Expiration: { type: "timestamp" } } }, Sm: { type: "structure", required: ["AssumedRoleId", "Arn"], members: { AssumedRoleId: {}, Arn: {} } } }, paginators: {} };

  // javascript-sdk/brume.ts
  var AWS2 = window.AWS, awsConfig = {
    region: "us-east-1",
    accessKeyId: "AKIAUNYU4WHIYGTDEXFF",
    secretAccessKey: "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"
  };
  AWS2.config.update(awsConfig);
  var kinesis = new AWS2.Kinesis();
  window.brume_2 = {
    sendEvent(obj) {
      return __async(this, null, function* () {
        return yield kinesis.putRecord({
          StreamName: "universe-player-analytics-ingest",
          Data: JSON.stringify(obj),
          PartitionKey: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
        }).promise();
      });
    }
  };
})();
