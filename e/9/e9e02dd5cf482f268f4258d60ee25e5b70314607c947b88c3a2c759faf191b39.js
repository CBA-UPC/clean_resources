/* eslint-disable */
var webengage = self.webengage || {};
!(function (v, o, a) {
    var c, s;
    (c = {}),
        (s = {}),
        o.__loaded ||
            ((o.__loaded = !0),
            (o.require = ,
            (o.modules = ),
        o.modules(
            {
                'webengage/util/bare': [
                    function (e, t, n) {
                        'use strict';
                        var r = {
                            copy: 
                            clone: 
                            isEmptyObject: 
                            trim: 
                            strunc: 
                            isArray: 
                            inArray: 
                            indexOfArray: 
                            mapArray: 
                            stringify: function (e) {
                                return JSON.stringify(e);
                            },
                            parseJSON: 
                            getHashCode: 
                            capitalize: 
                            ensureString: 
                            escapeScopeChars: function (e) {
                                return (e + '').replace(/([,#[\]\\])/g, '$1');
                            },
                            escapeForRegExp: 
                            toDateISOString: 
                            fromDateISOString: 
                            guard: 
                            addParamsToURL: 
                            base64Encode: 
                            base64Decode: 
                            urlBase64ToUint8Array: 
                            pick: 
                            deepDiffMapper: {
                                VALUE_CREATED: 'created',
                                VALUE_UPDATED: 'updated',
                                VALUE_DELETED: 'deleted',
                                VALUE_UNCHANGED: 'unchanged',
                                map: 
                                compareValues: 
                                isFunction: function (e) {
                                    return (
                                        '[object Function]' ===
                                        Object.prototype.toString.call(e)
                                    );
                                },
                                isArray: function (e) {
                                    return (
                                        '[object Array]' ===
                                        Object.prototype.toString.call(e)
                                    );
                                },
                                isDate: function (e) {
                                    return (
                                        '[object Date]' ===
                                        Object.prototype.toString.call(e)
                                    );
                                },
                                isObject: 
                                isValue: 
                            },
                            doRender: function (e) {
                                var t = [
                                        'numberOfProductsInCampaign',
                                        'recommendationName',
                                        'showSameCategory',
                                        'catalog_slug',
                                        'cta',
                                        'productIds',
                                        'buttonEnabled',
                                        'banner_image',
                                        'campaignHeadlineEnabled',
                                        'operation',
                                        'value',
                                        'selectorEnabled',
                                    ],
                                    n = [
                                        'buttonBackgroundColor',
                                        'buttonBorderColor',
                                        'buttonTextColor',
                                        'campaignHeadlineValue',
                                        'currency',
                                        'imageBorderRadius',
                                        'imageMarginRight',
                                        'maxImageHeight',
                                        'maxImageWidth',
                                        'primaryLayoutBackground',
                                        'secondaryLayoutBackground',
                                    ],
                                    r = [];
                                for (var i in e)
                                    Object.hasOwnProperty.call(e, i) &&
                                        (t.includes(i) && r.push(!0),
                                        n.includes(i) && r.push(!1));
                                return (
                                    0 <
                                    r.filter(.length
                                );
                            },
                            sendPostMessage: 
                            isPropertyPersonalized: 
                        };
                        t.exports = r;
                    },
                    {},
                ],
                'webengage/util/compress': [
                    
                    {},
                ],
                'webengage/util/sha1': [
                    
                    {},
                ],
                'webengage/util/transit': [
                    
                    {},
                ],
                'webengage/util/type': [
                    
                    {},
                ],
                'webengage/web-push/service-worker': [
                    function (e, t, n) {
                        'use strict';
                        var s = e('webengage/util/bare'),
                            u = e('webengage/util/transit'),
                            f = e('webengage/util/compress'),
                            r = e('webengage/util/sha1'),
                            a = 'push_notification_registered',
                            o = 'user_update',
                            c = 'user_delete_device',
                            i = '_we_token';
                                                                                                                                                                        function y(i) {
                            v.registration.pushManager
                                .getSubscription()
                                .then(function (r) {
                                    if (r)
                                        l(function (t) {
                                            var n = t
                                                .transaction(
                                                    ['user'],
                                                    'readwrite'
                                                )
                                                .objectStore('user');
                                            n.get('context').onsuccess =
                                                function () {
                                                    var e = g(i);
                                                    (e.permission = 'granted'),
                                                        (e.interfaceId = p(
                                                            r.endpoint
                                                        )),
                                                        (e.subscription =
                                                            r.toJSON()),
                                                        n.put(e),
                                                        t.close(),
                                                        h(
                                                            a,
                                                            {
                                                                subscription:
                                                                    r.toJSON(),
                                                                type: i.wp_vapid
                                                                    ? 'vapid'
                                                                    : 'refresh',
                                                            },
                                                            i.system_data
                                                        ),
                                                        h(
                                                            o,
                                                            {},
                                                            {
                                                                opt_in_push: !0,
                                                                opt_in_url:
                                                                    i.opt_in_url,
                                                            }
                                                        ),
                                                        (function (t) {
                                                            if (
                                                                t.hideSubscriptionMessage
                                                            )
                                                                return;
                                                            function n(e) {
                                                                return (
                                                                    (e = e || {
                                                                        title: 'Thanks for subscribing',
                                                                        body: 'You are awesome',
                                                                        icon: t.icon,
                                                                    }).cta &&
                                                                        e.cta
                                                                            .actionLink &&
                                                                        e.icon &&
                                                                        (e.icon =
                                                                            e.icon +
                                                                            '#context=' +
                                                                            encodeURIComponent(
                                                                                s.base64Encode(
                                                                                    JSON.stringify(
                                                                                        {
                                                                                            url: e
                                                                                                .cta
                                                                                                .actionLink,
                                                                                        }
                                                                                    )
                                                                                )
                                                                            )),
                                                                    v.registration.showNotification(
                                                                        e.title,
                                                                        e
                                                                    )
                                                                );
                                                            }
                                                            fetch(
                                                                s.addParamsToURL(
                                                                    'https://p.webengage.com:443/users/' +
                                                                        t.license_code +
                                                                        '/' +
                                                                        t.luid +
                                                                        '/templates/WEBPUSH_ACK_' +
                                                                        t.license_code,
                                                                    t.cuid
                                                                        ? {
                                                                              cuid: t.cuid,
                                                                          }
                                                                        : {}
                                                                ),
                                                                {
                                                                    method: 'POST',
                                                                    headers: {
                                                                        'Content-Type':
                                                                            'application/json',
                                                                    },
                                                                    body: JSON.stringify(
                                                                        t.p13n ||
                                                                            {}
                                                                    ),
                                                                    mode: 'cors',
                                                                }
                                                            )
                                                                .then(
                                                                .catch(
                                                                    function (
                                                                        e
                                                                    ) {
                                                                        b(
                                                                            e,
                                                                            'Error in fetching subscription message'
                                                                        );
                                                                    }
                                                                );
                                                        })(i);
                                                };
                                        });
                                    else {
                                        var e = { userVisibleOnly: !0 };
                                        i.vapidPublicKey
                                            ? (e = {
                                                  userVisibleOnly: (i.wp_vapid =
                                                      !0),
                                                  applicationServerKey:
                                                      s.urlBase64ToUint8Array(
                                                          i.vapidPublicKey
                                                      ),
                                              })
                                            : (i.wp_vapid = !1),
                                            v.registration.pushManager
                                                .subscribe(e)
                                                .then(
                                                .catch(function (e) {
                                                    b(
                                                        e,
                                                        'Error in pushManager.subscribe()'
                                                    );
                                                });
                                    }
                                });
                        }
                        function w(e, t) {
                            if ('WebEngage' !== (e = e || {}).source)
                                return Promise.resolve();
                            var n = {
                                experiment_id: e.experimentId,
                                id: e.id,
                                scope: e.scope,
                                license_code: e.licenseCode,
                                luid: e.luid,
                                interface_id: e.interfaceId,
                                cuid: e.cuid,
                            };
                            if (
                                (e.journeyId && (n.journey_id = e.journeyId),
                                h('push_notification_view', {}, s.copy({}, n)),
                                e.secondaryCta)
                            ) {
                                (e.actions = e.secondaryCta), (n.actions = {});
                                for (var r = 0; r < e.actions.length; r++)
                                    n.actions[e.actions[r].action] = {
                                        url: e.actions[r].url,
                                    };
                            }
                            return (
                                e.cta &&
                                    e.cta.actionLink &&
                                    ((n.url = e.cta.actionLink),
                                    (n.cta = e.cta.id)),
                                (e.body = e.description),
                                (e.icon =
                                    (e.icon || '') +
                                    '#context=' +
                                    encodeURIComponent(
                                        s.base64Encode(JSON.stringify(n))
                                    )),
                                (e.badge =
                                    (e.badge || '') +
                                    '#context=' +
                                    encodeURIComponent(
                                        s.base64Encode(JSON.stringify(n))
                                    )),
                                v.registration.showNotification(e.title, e)
                            );
                        }
                        v.addEventListener('install', ,
                            v.addEventListener('activate', ,
                            v.addEventListener('message', ,
                            v.addEventListener('push', ,
                            v.addEventListener(
                                'notificationclose',
                                                            ),
                            v.addEventListener(
                                'notificationclick',
                                                            );
                    },
                    {},
                ],
            },
            {},
            ['webengage/web-push/service-worker']
        );
})(self, webengage);
