/**
 * Web Notification
 *
 * Auth: ligz#wondershare.cn
 * Date: 17:12 2019/6/25
 * Copyright: Wondershare Inc.
 */

if (typeof wsNotification !== 'object') {
    wsNotification = (function () {

        var _wsNotification,
            tracker,
            notificationAlias = null,
            navigatorAlias = navigator,
            windowAlias = window,
            serviceWorkerScript = '/assets/src/js/sw.js',
            swRegistration = null,
            isSubscribed = false,
            applicationServerPublicKey = 'BPc5waOW4ChDckg3SwS4C5OU5srytDEYFsVtwDefMv01IHqlbvQKguG5QW18r8EFSoPokjThYvciOrtjuzsrbLk',
            sysConfig = {}
        ;

        var
            configGaCookieName = '_ga',
            configHasSubscribedNewName = '_has_subscribed_new',
            configTrackerUrl = 'https://prod-web.wondershare.cc/api/v1/prodweb/notification'
        ;


        if (windowAlias._NOTIFICATION_CONFIG) {
            var config;
            try {
                if ('object' === typeof windowAlias._NOTIFICATION_CONFIG) {
                    config = windowAlias._NOTIFICATION_CONFIG;
                } else {
                    config = JSON.parse(windowAlias._NOTIFICATION_CONFIG);
                }
                if (config.pubkey) {
                    applicationServerPublicKey = config.pubkey;
                }
                if (config.worker) {
                    serviceWorkerScript = config.worker;
                }
                if (config.trackUrl) {
                    configTrackerUrl = config.trackUrl;
                }
                sysConfig = config;
            } catch (error) {
                logConsoleError(error);
            }
        }


        function urlB64ToUint8Array(base64String) {
            var padding = '='.repeat((4 - base64String.length % 4) % 4);
            var base64 = (base64String + padding)
                .replace(/\-/g, '+')
                .replace(/_/g, '/');

            var rawData = window.atob(base64),
                outputArray = new Uint8Array(rawData.length);

            for (let i = 0; i < rawData.length; ++i) {
                outputArray[i] = rawData.charCodeAt(i);
            }
            return outputArray;
        }

        // 生成唯一ID
        function uuid() {
            var s = [];
            var hexDigits = "0123456789abcdef";
            for (var i = 0; i < 36; i++) {
                s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
            }
            s[14] = "4";  // bits 12-15 of the time_hi_and_version field to 0010
            s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
            s[8] = s[13] = s[18] = s[23] = "-";

            var uuid = s.join("");
            return uuid;
        }


        function httpRequest(obj, successfun, errFun) {
            var xmlHttp = null;
            //创建 XMLHttpRequest 对象，老版本的 Internet Explorer （IE5 和 IE6）使用 ActiveX 对象：xmlhttp=new ActiveXObject("Microsoft.XMLHTTP")
            if (window.XMLHttpRequest) {
                //code for all new browsers
                xmlHttp = new XMLHttpRequest;
            } else if (window.ActiveXObject) {
                //code for IE5 and IE6
                xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
            }
            //判断是否支持请求
            if (xmlHttp == null) {
                alert('浏览器不支持xmlHttp');
                return;
            }
            //请求方式， 转换为大写
            var httpMethod = (obj.method || 'Get').toUpperCase();
            //数据类型
            var httpDataType = obj.dataType || 'json';
            //url
            var httpUrl = obj.url || '';
            //异步请求
            var async = true;
            //post请求时参数处理
            if (httpMethod == 'POST') {
                //请求体中的参数 post请求参数格式为：param1=test&param2=test2
                var requestData = obj.data || {};
                var requestHeader = obj.requestHeader || 'application/x-www-form-urlencoded; charset=UTF-8';
                if (requestHeader === 'application/json' && requestData) {
                    requestData = JSON.stringify(requestData);
                }
            }
            //onreadystatechange 是一个事件句柄。它的值 (state_Change) 是一个函数的名称，当 XMLHttpRequest 对象的状态发生改变时，会触发此函数。状态从 0 (uninitialized) 到 4 (complete) 进行变化。仅在状态为 4 时，我们才执行代码
            xmlHttp.onreadystatechange = function () {
                //complete
                if (xmlHttp.readyState == 4) {
                    if (xmlHttp.status == 200) {
                        //请求成功执行的回调函数
                        if (typeof xmlHttp.responseText === 'string') {
                            var rst = JSON.parse(xmlHttp.responseText);
                            if (rst.code === 0 && rst.data && rst.data.result === 1) {
                                successfun && successfun();
                            }
                        }
                    } else {
                        //请求失败的回调函数
                        errFun && errFun(obj);
                    }
                }
            };
            //请求接口
            if (httpMethod == 'GET') {
                xrequestData);
            }
        }

        function logConsoleError(message) {
            // needed to write it this way for jslint
            var consoleType = typeof console;
            if (consoleType !== 'undefined' && console && console.error) {
                console.error(message);
            }
        }

        function isSupport() {
            var result = !!('serviceWorker' in navigatorAlias && 'PushManager' in windowAlias && 'Notification' in windowAlias);
            if (result) {
                notificationAlias = Notification;
                if ('denied' === notificationAlias.permission) {
                    result = false;
                }
            }
                igatorAlias.serviceWorker.getRegistration(serviceWorkerScript)
                .then(function (registration) {
                    if (registration) {
                        registration.unregister();
                    }
                }).catch(function (error) {
                logConsoleError(error);
            });

            return true;
        }

        function updateRegisteredService() {
            navigatorAlias.serviceWorker.getRegistration(serviceWorkerScript)
                .then(function (registration) {
                    // console.log('updateRegisteredService registration', registration)
                    if (registration) {
                        registration.update();
                    }
                }).catch(function (error) {
                logConsoleError(error);
            });
        }

        function registerService(callback) {
            // update
            updateRegisteredService();

            // console.log('registerService');
            navigatorAlias.serviceWorker.register(serviceWorkerScript)
                .then(function (swReg) {
                    // console.log('registerService swReg', swReg);
                    if (!swReg.scope) {
                        // console.log('registerService again');
                        return registerService();
                    }
                    swRegistration = swReg;
                    if (typeof callback === 'function') {
                        callback();
                    }
                })
                .catch(function (error) {
                    logConsoleError(error);
                });
        }

        function requestPermission() {
            /*
            * 如果没有订阅，才会去请求通知权限，也就不会重新订阅新的web notification，还是会沿用旧的web notification
            * 为了解决该问题，设置名为_has_subscribed_new的cookie，如果用新的web notification已经订阅过，设置_has_subscribed_new为1
            * 如果没用新的web notification订阅过，但是用旧的web notification订阅过，就找不到名为_has_subscribed_new的cookie，此时需要重新订阅
            * */
            if (isSubscribed) {
                // 如果已订阅，则不再请求通知权限，该函数就return了，不会再往下走
                var hasSubscribedNewCookieValue = getCookie(configHasSubscribedNewName) || "";
                if (hasSubscribedNewCookieValue !== '1') {
                    subscribeUser();// 只上报允许的情况
                }
                return true;
            }

            notificationAlias.requestPermission(function (permission) {
                if ('granted' === permission) {
                    subscribeUser();// 只上报允许的情况
                }
            });
        }

        function subscribeUser() {
            var applicationServerKey = urlB64ToUint8Array(applicationServerPublicKey);
            swRegistration.pushManager.subscribe({
                userVisibleOnly: true,
                applicationServerKey: applicationServerKey
            }).then(function (subscription) {
                // console.log('User is subscribed:', subscription);
                if (subscription && subscription.endpoint) {// 订阅过才会有endpoint
                    isSubscribed = true;// 订阅过才设置isSubscribed为true
                    // localStorage.setItem('_end_point', escape(JSON.stringify(subscription)));
                }
                trackServer(subscription);
            }).catch(function (error) {
                logConsoleError(error);
            });
        }

        function getSubscription(callback) {
            // Set the initial subscription value
            swRegistration.pushManager.getSubscription()
                .then(function (subscription) {
                    isSubscribed = !(subscription === null);
                    if (subscription && subscription.endpoint) {
         bscription)));
                    }

                    // console.log('User was subscribed:', subscription);
                    if (typeof callback === 'function') {
                        callback();
                    }
                });
        }

        function createNotification() {
            if (!isSupport()) {
                return false;
            }

            // if closed
            if (closeRegisteredService()) {
                return true;
            }

            tracker = new Tracker;
            registerService(function () {
                getSubscription(requestPermission);
            });
        }

        function trackServer(subscription) {
            // TODO: Send subscription to application server
            // console.log('trackSubscription', subscription, permission)

            var request = 'subscription=' + (subscription ? escape(JSON.stringify(subscription)) : '');

            tracker.trackRequest(request);
        }

        function getCookie(cookieName) {
            var cookiePattern = new RegExp('(^|;)[ ]*' + cookieName + '=([^;]*)'),
                cookieMatch = cookiePattern.exec(document.cookie);

            return cookieMatch ? windowAl);
                date.setTime(date.getTime + expireHours * 3600 * 1000);
                cookieString = cookieString + "; expire=" + date.toGMTString();
            }
            document.cookie = cookieString;
        }

        function Tracker() {
            /*
             * Extract hostname from URL
             */
            function getHostName(url) {
                // s^@]+@)?([^:/#]+)'),
                    matches = e.exec(url);

                return matches ? matches[1] : url;
            }

            /**
             * Returns the URL
             */
            function getRequest(request) {
                request += [
                    '',
                    'domain=' + (getHostName(location.href) || ''),
                    'gaid=' + (getCookie(configGaCookieName) || "")
                ].join('&');

                return request;
            }

            function httpRequestSuccess() {
                setCookie(configHasSubscribedNewName, '1');// 请求接口订阅成功才设置名为_has_subscribed_new的cookie为1
            }

            /*
             * Send image request to server using GET.
             * The infamous web bug (or beacon) is a transparent, gets invoked
                httpRequest({
                    url: configTrackerUrl,
                    method: 'POST',
                    requestHeader: 'application/x-www-form-urlencoded; charset=UTF-8',
                    data: request
                }, httpRequestSuccess)
            }

            /**
             * Sends a tracking request with custom request parameters.
             *
             * @param request eg. "   */
            this.trackRequest = function (request, ca               sendRequest(fullRequest, callback);
            };
        }

        _wsNotification = {
            initialized: false,
            subscribe: function () {
                if (false === this.initialized) {
                    createNotification();
                    this.initialized = true;
                }
            }
        };

        // Expose wsAnalytics as an AMD module
        if (typeof define === 'function' && define.amd) {
            define('wsNotification', [], function () {
                return _wsNotification;
            });
        }

        return _wsNotification;
    })();
}

(function () {
    'use strict';
    wsNotification.subscribe();
})();
