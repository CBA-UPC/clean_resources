'use strict';
var _wingifyPush = {
    hash: '819b2dfd7903567ef3700eb2185bc870',
    trackingUrl: 'https://tracking.pushcrew.com',
    pcDomainUrl: 'https://pushcrew.com',
    defaultIcon: '/logo_192_by_192.png',
    origin: 'https',
    isAMPEnabled: 1,
    vapidPublicKey: 'BEx2ExfJrsfsO9ZOZ_mO2zuuZA8gpHl2jPcYXAnPA-4tKil3vlya2jYoKLsOVghw6v3YuL1ljtYj8zeOAs2kEOw'
}

!function() {
  var tslib, IndexedDb = {}, detectBrowser = {}, AMPCommandEnum = {}, amp = {};
  tslib = function() {
    var __awaiter, __generator, __assign;
    return __awaiter =  __generator =  __assign =  {
      __awaiter: __awaiter,
      __generator: __generator,
      __assign: __assign
    };
  }(), IndexedDb = function(exports, tslib_1) {
        var ErrorCodes;
    !ErrorCodes || (ErrorCodes = {}));
    var IndexedDb = function() {
      function IndexedDb(databaseName, objectStores) {
        var _this = this;
        this.databaseName = databaseName, this.objectStores = objectStores, this.openAndGetDataBase = function() {
          return tslib_1.__awaiter(_this, void 0, void 0, function() {
            var err_1;
            return tslib_1.__generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                IndexedDb.isDatabaseOpen[this.databaseName] || (IndexedDb.isDatabaseOpen[this.databaseName] = this.openDatabase(this.databaseName)), 
                _a.label = 1;

               case 1:
                return _a.trys.push([ 1, 3, , 4 ]), [ 4, IndexedDb.isDatabaseOpen[this.databaseName] ];

               case 2:
                return _a.sent(), [ 3, 4 ];

               case 3:
                throw err_1 = _a.sent();

               case 4:
                return [ 2, this.database ];
              }
            });
          });
        }, this.onDatabaseUpgradeNeeded = function(event) {
          for (var db = event.target.result, _i = 0, _a = Object.keys(_this.objectStores); _i < _a.length; _i++) {
            var objectStoreName = _a[_i];
            db.createObjectStore(objectStoreName, {
              keyPath: _this.objectStores[objectStoreName]
            });
          }
        }, this.deleteDb = function() {
          return tslib_1.__awaiter(_this, void 0, void 0, function() {
            var _this = this;
            return tslib_1.__generator(this, function(_a) {
              return [ 2, new Promise(function(resolve, reject) {
                var dbDeleteRequest = indexedDB.deleteDatabase(_this.databaseName);
                dbDeleteRequest.onerror =  dbDeleteRequest.onsuccess = 
              }) ];
            });
          });
        }, this.closeDb = function() {
          return tslib_1.__awaiter(_this, void 0, void 0, function() {
            return tslib_1.__generator(this, function(_a) {
              try {
                this.database.close();
              } catch (e) {}
              return IndexedDb.isDatabaseOpen[this.databaseName] = null, [ 2 ];
            });
          });
        }, indexedDB && 'object' == typeof indexedDB ? this.isIndexedDbSupported = !0 : this.isIndexedDbSupported = !1;
      }
      return IndexedDb.prototype.openDatabase = function(databaseName) {
        var _this = this;
        return new Promise(function(resolve, reject) {
          var request = indexedDB.open(databaseName, 1);
          if (!request) return null;
          request.onerror = _this.onDatabaseOpenError.bind(_this, reject), request.onblocked = _this.onDatabaseOpenBlocked.bind(_this, reject), 
          request.onupgradeneeded = _this.onDatabaseUpgradeNeeded, request.onsuccess = function() {
            _this.database = request.result, _this.database.onerror = _this.onDatabaseError, 
            _this.database.onversionchange = _this.onDatabaseVersionChange, resolve(_this.database);
          };
        });
      }, IndexedDb.prototype.onDatabaseOpenError = function(reject, event) {
        event.preventDefault();
        var errorMessage = event.target.error.message;
        log('IndexedDb open error: ' + errorMessage), reject(ErrorCodes.DB_OPEN_ERR);
      }, IndexedDb.prototype.onDatabaseError =  IndexedDb.prototype.onDatabaseOpenBlocked =  IndexedDb.prototype.onDatabaseVersionChange =  IndexedDb.prototype.get = function(table, key) {
        return tslib_1.__awaiter(this, void 0, void 0, function() {
          var err_2, _this = this;
          return tslib_1.__generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              if (!this.isIndexedDbSupported) throw ErrorCodes.INDEXED_DB_NOT_SUPPORTED;
              _a.label = 1;

             case 1:
              return _a.trys.push([ 1, 3, , 4 ]), [ 4, this.openAndGetDataBase() ];

             case 2:
              return _a.sent(), [ 3, 4 ];

             case 3:
              throw err_2 = _a.sent();

             case 4:
              return [ 2, new Promise(function(resolve, reject) {
                var transaction = _this.database.transaction(table), request = transaction.objectStore(table).get(key);
                request.onsuccess =  request.onerror = function() {
                  log('IndexedDb - Record not found in DB'), reject(ErrorCodes.RECORD_NOT_FOUND);
                }, transaction.oncomplete = _this.closeDb, transaction.onerror = _this.closeDb, 
                transaction.onabort = _this.closeDb;
              }) ];
            }
          });
        });
      }, IndexedDb.prototype.put = function(table, record) {
        return tslib_1.__awaiter(this, void 0, void 0, function() {
          var err_3, err_4, _this = this;
          return tslib_1.__generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              if (!this.isIndexedDbSupported) throw ErrorCodes.INDEXED_DB_NOT_SUPPORTED;
              _a.label = 1;

             case 1:
              return _a.trys.push([ 1, 3, , 4 ]), [ 4, this.deleteDb() ];

             case 2:
              return _a.sent(), [ 3, 4 ];

             case 3:
              throw err_3 = _a.sent();

             case 4:
              return _a.trys.push([ 4, 6, , 7 ]), [ 4, this.openAndGetDataBase() ];

             case 5:
              return _a.sent(), [ 3, 7 ];

             case 6:
              throw err_4 = _a.sent();

             case 7:
              return [ 2, new Promise(function(resolve, reject) {
                try {
                  var transaction = _this.database.transaction([ table ], 'readwrite'), request = transaction.objectStore(table).put(record);
                  request.onsuccess = function() {
                    log('IndexedDb insert success'), resolve();
                  }, request.onerror =  transaction.oncomplete = _this.closeDb, transaction.onerror = _this.closeDb, 
                  transaction.onabort = _this.closeDb;
                } catch (e) {
                  log('IndexedDb insert failed'), reject(ErrorCodes.PUT_FAILED), _this.closeDb();
                }
              }) ];
            }
          });
        });
      }, IndexedDb.prototype.remove = function(table, key) {
        var _this = this;
        return new Promise(function(resolve, reject) {
          try {
            var request = _this.database.transaction([ table ], 'readwrite').objectStore(table).delete(key);
            request.onsuccess = function() {
              log('IndexedDb remove success'), resolve();
            }, request.onerror = 
          } catch (e) {
            log('IndexedDb remove failed'), reject(e);
          }
        });
      }, IndexedDb.isDatabaseOpen = {}, IndexedDb;
    }();
    return IndexedDb;
  }(0, tslib), 0, function() {
    return {
      17: 
      18: 
      90: function(e, t, r) {
        'use strict';
                t.__esModule = !0, t.default = void 0;
        var n, i = (n = r(91)) && n.__esModule ? n : {
          default: n
        }, s = r(18), a = );
        t.default = a, e.exports = t.default;
      },
      91: function(e, t, r) {
        'use strict';
                t.__esModule = !0, t.default = void 0;
        var n = u(r(92)), i = u(r(93)), s = u(r(94)), o = u(r(95)), a = u(r(17)), d = );
        t.default = d, e.exports = t.default;
      },
      92: 
      93: 
      94: 
      95:     });
  }), detectBrowser = function(exports, Bowser) {
    var detectBrowser = {
      browser: Bowser.getParser(navigator.userAgent),
      name: function() {
        var browserName = this.browser.getBrowserName().toLowerCase();
        return 'microsoft edge' === browserName ? browserName = 'edge' : 'samsung internet for android' === browserName ? browserName = 'samsung' : 'uc browser' === browserName && (browserName = 'uc'), 
        browserName;
      },
      device: function() {
        var deviceType = this.browser.getPlatformType(!0);
        return 'desktop' === deviceType ? deviceType : 'mobile';
      },
      version: 
      os: function() {
        return this.browser.getOS().name;
      },
      osVersion: 
      isOS: function() {
        return 'iOS' === this.os();
      },
      usingUserGesture: function() {
        return this.browser.satisfies({
          macos: {
            safari: '>=12.1'
          },
          firefox: '>=72',
          chrome: '>=80'
        });
      },
      isQuietNotification: 
      isMacOSCatalina: function() {
        return 'macOS' === this.os() && this.osVersion().startsWith('10.15');
      },
      isMobile:     };
    return detectBrowser;
  }(0, bowser), AMPCommandEnum = function(exports) {
    Object.defineProperty(exports, '__esModule', {
      value: !0
    });
    var AMPCommandEnum = {
      AMP_SUBSCRIPTION_STATE: 'amp-web-push-subscription-state',
      AMP_SUBSCRIBE: 'amp-web-push-subscribe',
      AMP_UNSUBSCRIBE: 'amp-web-push-unsubscribe'
    };
    return exports.default = AMPCommandEnum, exports;
  }(AMPCommandEnum), amp = function(exports, detectBrowser, tslib_1, AMPCommandEnum_1) {
    var amp = {
      subscriptionEndPoint: _wingifyPush.pcDomainUrl + '/syncSubscriptionAction.php',
      subscriberId: '',
      init: 
      onMessageReceivedSubscriptionState: function() {
        var _this = this, retrievedPushSubscription = null;
        self.registration.pushManager.getSubscription().then(function(pushSubscription) {
          return retrievedPushSubscription = pushSubscription, pushSubscription ? self.registration.pushManager.permissionState(pushSubscription.options) : null;
        }).then(function(permissionStateOrNull) {
          if (null == permissionStateOrNull) _this.broadcastReply(AMPCommandEnum_1.default.AMP_SUBSCRIPTION_STATE, !1); else {
            var isSubscribed = !!retrievedPushSubscription && 'granted' === permissionStateOrNull;
            _this.broadcastReply(AMPCommandEnum_1.default.AMP_SUBSCRIPTION_STATE, isSubscribed);
          }
        });
      },
      generateSubscriberId: function() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, .replace(/-/g, '');
      },
      makeQueryString: function(params) {
        var queryString = '';
        for (var param in params) params.hasOwnProperty(param) && (queryString += '&' + param + '=' + params[param]);
        return queryString.substr(1);
      },
      parseSubscription: function(subscription) {
        if (subscription && subscription.endpoint) {
          var endpoint = subscription.endpoint.split('/'), subscriptionId = endpoint.pop(), subscriptionEndPoint = endpoint.join('/');
          return {
            subscriptionId: subscriptionId,
            subscriptionEndPoint: subscriptionEndPoint,
            subscription: JSON.stringify(subscription)
          };
        }
      },
      generateSyncSubscriptionParameters: function(subscription, action) {
        return void 0 === action && (action = 'insert'), this.subscriberId = this.subscriberId || this.generateSubscriberId(), 
        this.subscriberId = this.subscriberId.slice(0, -3) + 'amp', 'unsubscribe-ui' === action && (this.subscriberId = ''), 
        this.makeQueryString(tslib_1.__assign({
          hash: this.config.hash,
          origin: this.config.origin,
          vapidPublicKey: this.config.vapidPublicKey,
          browserType: detectBrowser.name(),
          subscriberId: this.subscriberId,
          action: action
        }, this.parseSubscription(subscription)));
      },
      syncSubscription: function(subscription, action) {
        void 0 === action && (action = 'insert'), fetch(this.subscriptionEndPoint + '?' + this.generateSyncSubscriptionParameters(subscription, action), {
          mode: 'no-cors'
        }).then(;
      },
      onMessageReceivedSubscribe: function() {
        var _this = this;
        self.registration.pushManager.subscribe({
          userVisibleOnly: !0,
          applicationServerKey: this.urlBase64ToUint8Array(this.config.vapidPublicKey)
        }).then(function(subscription) {
          _this.syncSubscription(subscription), _this.broadcastReply(AMPCommandEnum_1.default.AMP_SUBSCRIBE, null);
        });
      },
      onMessageReceivedUnsubscribe: function() {
        var _this = this;
        self.registration.pushManager.getSubscription().then(.then(function() {
          _this.syncSubscription(_this.subscription, 'unsubscribe-ui'), _this.broadcastReply(AMPCommandEnum_1.default.AMP_UNSUBSCRIBE, null);
        });
      },
      broadcastReply: function(command, payload) {
        self.clients.matchAll().then(function(clients) {
          for (var i = 0; i < clients.length; i++) {
            var client = clients[i];
            client.postMessage({
              command: command,
              payload: payload
            });
          }
        });
      },
      listenToPostMessage: function() {
        var _this = this;
        self.addEventListener('message', function(event) {
          var command = event.data.command;
          switch (command) {
           case AMPCommandEnum_1.default.AMP_SUBSCRIPTION_STATE:
            _this.onMessageReceivedSubscriptionState();
            break;

           case AMPCommandEnum_1.default.AMP_SUBSCRIBE:
            _this.onMessageReceivedSubscribe();
            break;

           case AMPCommandEnum_1.default.AMP_UNSUBSCRIBE:
            _this.onMessageReceivedUnsubscribe();
            break;
          }
        });
      },
      urlBase64ToUint8Array: function(base64String) {
        for (var padding = '='.repeat((4 - base64String.length % 4) % 4), base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/'), rawData = atob(base64), outputArray = new Uint8Array(rawData.length), i = 0; i < rawData.length; ++i) outputArray[i] = rawData.charCodeAt(i);
        return outputArray;
      }
    };
    return amp;
  }(0, detectBrowser, tslib, AMPCommandEnum), function(IndexedDb, detectBrowser, amp) {
    function syncChromeEncryptionKeys() {
      self.registration.pushManager.getSubscription().then(function(subscription) {
        if (subscription) {
          var currentSubscriptionString = JSON.stringify(subscription);
          hasSubscriptionChanged(currentSubscriptionString).then(function(errorCode) {
            errorCode || (errorCode = IndexedDbErrorCodes.DEFAULT_ERROR_CODE);
            var subscriptionId = splitEndPointSubscription(subscription), subscriptionJson = JSON.stringify(subscription), subscriptionObj = JSON.parse(subscriptionJson), subscriberTimeZone = '', subscriberTimeZoneOffset = '', subscriberServiceWorkerUrl = '';
            try {
              subscriberTimeZoneOffset = new Date().getTimezoneOffset().toString().replace('+', '');
              try {
                subscriberServiceWorkerUrl = encodeURIComponent(self.registration.active.scriptURL);
              } catch (e) {
                subscriberServiceWorkerUrl = encodeURIComponent(self.location.href);
              }
            } catch (err) {}
            var syncChromeUrl = encodeURI(_wingifyPush.trackingUrl + '/v3/syncChromeEncryptionKey.php?hash=' + _wingifyPush.hash + '&subscriptionId=' + subscriptionId + '&subscription=' + subscriptionJson + '&subscriberTimeZone=' + subscriberTimeZone + '&subscriberTimeZoneOffset=' + subscriberTimeZoneOffset + '&subscriberServiceWorkerUrl=' + subscriberServiceWorkerUrl + '&version=' + self.version + '&error=' + errorCode);
            if (subscriptionObj.keys.auth && subscriptionObj.keys.p256dh) return fetch(syncChromeUrl).then(function(response) {
              if (200 !== response.status) throw new Error();
              return response.json();
            }).then(function(json) {
              if ('success' === json.status) {
                var db = new IndexedDb('pushcrewDB', {
                  subscriptionInfo: 'identifier'
                });
                db.put('subscriptionInfo', {
                  subscriptionString: currentSubscriptionString,
                  timestamp: Date.now(),
                  identifier: 'subscription'
                }).catch(;
              }
            }).catch(function(err) {});
          });
        }
      });
    }
    function hasSubscriptionChanged(currentSubscription) {
      return new Promise(function(resolve) {
        var resolveTimer = self.setTimeout(resolve.bind(self, IndexedDbErrorCodes.INDEXED_DB_NOT_RESOLVED), 2e3), db = new IndexedDb('pushcrewDB', {
          subscriptionInfo: 'identifier'
        });
        try {
          db.get('subscriptionInfo', 'subscription').then(function(oldSubscription) {
            !oldSubscription || oldSubscription && oldSubscription.subscriptionString !== currentSubscription ? resolve(IndexedDbErrorCodes.SUBSCRIPTION_CHANGED) : oldSubscription.subscriptionString === currentSubscription && self.clearTimeout(resolveTimer);
          }).catch(;
        } catch (err) {
          resolveWithErrorCode(resolve, err);
        }
      });
    }
    function resolveWithErrorCode(resolve, err) {
      var error = err;
      (err instanceof Error || err instanceof TypeError) && (error = err.message), resolve(error);
    }
    self.version = '14';
    var IndexedDbErrorCodes = {
      INDEXED_DB_NOT_RESOLVED: 10,
      SUBSCRIPTION_CHANGED: 8,
      DEFAULT_ERROR_CODE: 9
    }, splitEndPointSubscription = function(subscriptionDetails) {
      if (subscriptionDetails) {
        if (subscriptionDetails.subscriptionId) return subscriptionDetails.subscriptionId;
        if ('edge' === detectBrowser.name()) return encodeURIComponent(subscriptionDetails.endpoint);
        var endpointURL, offset, endpoint = subscriptionDetails.endpoint;
        return offset = endpoint.lastIndexOf('/'), endpointURL = endpoint.substring(0, offset + 1), 
        endpoint.replace(endpointURL, '');
      }
    }, sendEventDetails = function(eventDetails) {
      var eventDetailsURL = _wingifyPush.trackingUrl + '/pushsubscriptionchange-exec.php', formData = new FormData();
      return formData.append('version', self.version), formData.append('eventDetails', eventDetails), 
      fetch(eventDetailsURL, {
        method: 'POST',
        body: formData
      });
    };
    [ 'firefox', 'edge' ].indexOf(detectBrowser.name()) > -1 || syncChromeEncryptionKeys();
    var trackClick = function(clickDeliveryURL) {
      return fetch(clickDeliveryURL + '&version=' + self.version).catch(function(err) {});
    }, trackClose = function(closeDeliveryURL) {
      return fetch(closeDeliveryURL + '&version=' + self.version).catch(function(err) {});
    }, unsubscribeEvent = function(event) {
      if (event.subscriberId) {
        var syncUrl = _wingifyPush.pcDomainUrl + '/syncSubscription.php?hash=' + _wingifyPush.hash + '&browserType=' + event.browser + '&subscriberId=' + event.subscriberId + '&subscriptionId=' + event.subscriptionId + '&action=unsubscribe-delete&token=' + event.right_to_erase_auth_token + '&version=' + self.version;
        return fetch(syncUrl).then(function(response) {
          if (200 !== response.status) throw new Error();
          return response.json();
        }).then(function(json) {
          'success' === json.status && self.registration.pushManager.getSubscription().then(;
        }).catch(;
      }
    }, trackClickEvent = function(event) {
      return self.registration.pushManager.getSubscription().then(function(subscription) {
        var subscriptionId = splitEndPointSubscription(subscription), browserName = detectBrowser.name(), clickDeliveryURL = _wingifyPush.trackingUrl + "/trackClick.php?subscriptionId=" + subscriptionId + '&notificationTag=' + event.notification.tag + '&browser=' + browserName + '&device=' + detectBrowser.device() + '&hash=' + _wingifyPush.hash;
        return 'chrome' !== browserName && 'opera' !== browserName || !event.action || (clickDeliveryURL = _wingifyPush.trackingUrl + "/trackClick.php?subscriptionId=" + subscriptionId + '&notificationTag=' + event.notification.tag + '&browser=' + browserName + '&device=' + detectBrowser.device() + '&hash=' + _wingifyPush.hash + '&action=' + event.action), 
        trackClick(clickDeliveryURL);
      });
    }, trackCloseEvent = function(event) {
      return self.registration.pushManager.getSubscription().then(function(subscription) {
        var subscriptionId = splitEndPointSubscription(subscription), browserName = detectBrowser.name(), closeDeliveryURL = _wingifyPush.trackingUrl + "/trackClose.php?subscriptionId=" + subscriptionId + '&notificationTag=' + event.notification.tag + '&browser=' + browserName + '&device=' + detectBrowser.device() + '&hash=' + _wingifyPush.hash;
        return trackClose(closeDeliveryURL);
      });
    }, openNotificationClickedWindow = function(notificationURL) {
      return clients.matchAll({
        type: 'window'
      }).then(function(clientList) {
        for (var i = 0; i < clientList.length; i++) {
          var client = clientList[i];
          if (client.url === decodeURIComponent(notificationURL) && 'focus' in client) return client.focus();
        }
        if (clients.openWindow) return clients.openWindow(decodeURIComponent(notificationURL));
      });
    }, showPushCrewNotification = function(notificationDetails) {
      var notificationFinalDetails = {
        body: notificationDetails.message,
        icon: notificationDetails.icon,
        requireInteraction: notificationDetails.requireInteraction,
        tag: notificationDetails.notificationTag,
        actions: notificationDetails.actions,
        data: notificationDetails.data,
        renotify: !0
      };
      if ('image' in Notification.prototype && notificationDetails.image && (notificationFinalDetails.image = notificationDetails.image), 
      'chrome' === detectBrowser.name() && detectBrowser.isMacOSCatalina() && (notificationFinalDetails.requireInteraction = !1), 
      'opera' !== detectBrowser.name()) return self.registration.showNotification(notificationDetails.title, notificationFinalDetails);
      self.registration.showNotification(notificationDetails.title, notificationFinalDetails);
    }, showErrorNotification = function(errorString, subscriptionId) {
      var notificationDetails = {};
      notificationDetails.title = 'Oops! We couldn\'t fetch the notification', notificationDetails.message = 'Sorry, due to some error the notification that was sent couldn\'t be displayed.', 
      notificationDetails.icon = _wingifyPush.defaultIcon, notificationDetails.notificationTag = 'notification-error', 
      notificationDetails.requireInteraction = !1, notificationDetails.data = {}, notificationDetails.data.notificationURL = encodeURIComponent('https://pushcrew.com/error-fetching-push-notifications/?hash=' + _wingifyPush.hash);
      var logSwErrorUrl = _wingifyPush.trackingUrl + "/logServiceWorkerError.php?subscriptionId=" + subscriptionId + '&error=' + errorString + '&hash=' + _wingifyPush.hash + '&version=' + self.version;
      return fetch(logSwErrorUrl).then(function() {
        return showPushCrewNotification(notificationDetails);
      }).catch(function(err) {
        return showPushCrewNotification(notificationDetails);
      });
    }, commonNotificationHandlerForPushEvent = function(eventData, subscriptionId) {
      var notificationDetails = {}, subscriberId = eventData.subscriber_id || eventData.subscriberId, requireInteraction = void 0 !== eventData.ri_flag ? eventData.ri_flag : eventData.requireInteraction, icon = eventData.icon_url || eventData.icon, browserName = detectBrowser.name();
      'firefox' === browserName ? (notificationDetails.title = decodeURIComponent(escape(eventData.title)), 
      notificationDetails.message = decodeURIComponent(escape(eventData.msg))) : (notificationDetails.title = eventData.title, 
      notificationDetails.message = eventData.message), notificationDetails.notificationTag = eventData.tag, 
      notificationDetails.icon = icon, notificationDetails.image = eventData.image || '', 
      notificationDetails.requireInteraction = !0, notificationDetails.subscriberId = void 0 !== subscriberId ? subscriberId : null, 
      notificationDetails.actions = [], notificationDetails.data = {}, notificationDetails.data.notificationURL = encodeURIComponent(eventData.url), 
      notificationDetails.data.subscriberId = notificationDetails.subscriberId, eventData.right_to_erase_auth_token && (notificationDetails.data.right_to_erase_auth_token = eventData.right_to_erase_auth_token, 
      notificationDetails.data.browser = browserName, notificationDetails.data.subscriptionId = subscriptionId), 
      eventData.button_one && eventData.button_one_url && (notificationDetails.actions.push({
        action: 'action1',
        title: eventData.button_one
      }), notificationDetails.data.action_one_url = encodeURIComponent(eventData.button_one_url)), 
      eventData.button_two && eventData.button_two_url && (notificationDetails.actions.push({
        action: 'action2',
        title: eventData.button_two
      }), notificationDetails.data.action_two_url = encodeURIComponent(eventData.button_two_url)), 
      !1 === requireInteraction && (notificationDetails.requireInteraction = !1);
      var trackDeliveryURL = _wingifyPush.trackingUrl + "/trackDelivery.php?subscriptionId=" + subscriptionId + '&notificationTag=' + notificationDetails.notificationTag + '&browser=' + browserName + '&device=' + detectBrowser.device() + '&hash=' + _wingifyPush.hash + '&version=' + self.version;
      return fetch(trackDeliveryURL).then(.catch(;
    };
    self.addEventListener('install', , self.addEventListener('activate', , self.addEventListener('push', function(event) {
      event.waitUntil(self.registration.pushManager.getSubscription().then(function(subscription) {
        try {
          if (!subscription || !subscription.endpoint) throw new Error('Subscription not found in service worker');
          var subscriptionId = splitEndPointSubscription(subscription);
          if (event.data) {
            if ('object' != typeof event.data.json()) throw new Error('Not a valid JSON data');
            var payloadObject = event.data.json();
            return commonNotificationHandlerForPushEvent(payloadObject, subscriptionId);
          }
          return fetch(_wingifyPush.trackingUrl + '/getMessage.php?hash=' + _wingifyPush.hash + '&subscriptionId=' + subscriptionId + '&version=' + self.version).then(function(response) {
            if (200 !== response.status) throw new Error();
            return response.json().then(function(data) {
              if (data.error || !data.notification) throw new Error('The API returned an error.');
              if ('notification-error' === data.notification.tag) throw new Error('Tag is notification-error');
              return commonNotificationHandlerForPushEvent(data.notification, subscriptionId);
            }).catch(function(err) {
              return showErrorNotification(err.toString(), subscriptionId);
            });
          }).catch(;
        } catch (err) {
          return showErrorNotification(err.toString(), subscriptionId);
        }
      }));
    }), self.addEventListener('notificationclick', function(event) {
      var notificationURL, promiseArr = [];
      event.notification.close(), notificationURL = 'action1' == event.action ? event.notification.data.action_one_url : 'action2' == event.action ? event.notification.data.action_two_url : event.notification.data.notificationURL, 
      promiseArr.push(trackClickEvent(event)), promiseArr.push(openNotificationClickedWindow(notificationURL)), 
      event.notification.data.right_to_erase_auth_token && -1 !== notificationURL.indexOf(event.notification.data.right_to_erase_auth_token) && promiseArr.push(unsubscribeEvent(event.notification.data)), 
      event.waitUntil(Promise.all(promiseArr));
    }), self.addEventListener('notificationclose', ;
    var createPSChangeObject = function(event) {
      var subscriptionObject = {
        hasNewSubscription: !1,
        hasOldSubscription: !1
      };
      event.oldSubscription && (subscriptionObject.hasOldSubscription = !0, subscriptionObject.oldSubscription = event.oldSubscription), 
      event.newSubscription && (subscriptionObject.hasNewSubscription = !0, subscriptionObject.newSubscription = event.newSubscription);
      var dataToSend = {
        event: event,
        subscriptionObject: subscriptionObject,
        permission: Notification.permission,
        endpoint: null
      };
      return dataToSend;
    };
    self.addEventListener('pushsubscriptionchange', function(event) {
      event.waitUntil(self.registration.pushManager.getSubscription().then(function(subscription) {
        var dataToSend = createPSChangeObject(event);
        return dataToSend.source = 'then', subscription ? (dataToSend.endpoint = subscription.endpoint, 
        sendEventDetails(JSON.stringify(dataToSend))) : sendEventDetails(JSON.stringify(dataToSend));
      }).catch(function(error) {
        var dataToSend = createPSChangeObject(event);
        return dataToSend.source = 'catch', sendEventDetails(JSON.stringify(dataToSend));
      }));
    }), 1 === _wingifyPush.isAMPEnabled && amp.init({
      origin: _wingifyPush.origin,
      hash: _wingifyPush.hash,
      vapidPublicKey: _wingifyPush.vapidPublicKey
    });
  }(IndexedDb, detectBrowser, amp);
}();