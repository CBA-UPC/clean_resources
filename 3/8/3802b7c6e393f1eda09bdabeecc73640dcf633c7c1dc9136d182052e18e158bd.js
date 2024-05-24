/*! For license information please see checkout.js.LICENSE.txt */
et_element_link");
            return button;
        }
        var parentElement = button.parentElement;
        var parentTagName = parentElement && parentElement.tagName && parentElement.tagName.toLowerCase();
        if (("img" === tagName || "button" === tagName) && "a" === parentTagName) {
            debug("target_element_parent_link");
            return parentElement;
        }
        var grandparentElement = parentElement && parentElement.parentElement;
        var grandparentTagName = grandparentElement && grandparentElement.tagName && grandparentElement.tagName.toLowerCase();
        if ("button" === tagName && "a" === grandparentTagName) {
            debug("target_element_grandparent_link");
            return button.parentElement && button.parentElement.parentElement;
        }
    }
    var util_warn = Object(client.n)(LOG_PREFIX).warn;
    var redirected = !1;
    function logRedirect(location) {
        redirected && util_warn("multiple_redirects");
        Object(lib.X)(location) && (redirected = !0);
        Object(client.h)();
    }
    function redirect(url) {
        return src.a.try((function() {
            if (!url) throw new Error("Redirect url undefined");
            if (config.a.env === constants.t.TEST && Object(lib.X)(url)) return Object(lib.P)(window, "#fullpageRedirect?url=" + url);
            logRedirect(url);
            return Object(lib.P)(window, url);
        }));
    }
    var options_prefix = Object(client.n)(LOG_PREFIX), options_info = options_prefix.info, options_warn = options_prefix.warn;
    var interface_prefix = Object(client.n)(LOG_PREFIX), interface_info = interface_prefix.info, interface_debug = interface_prefix.debug, interface_warn = interface_prefix.warn, interface_error = interface_prefix.error, track = interface_prefix.track;
    var interface_checkout = {};
    var apps = {
        checkout: interface_checkout,
        Checkout: interface_checkout
    };
    function interface_reset() {
        interface_debug("reset");
        interface_checkout.initXO = initXO;
        interface_checkout.startFlow = startFlow;
        interface_checkout.closeFlow = closeFlow;
    }
    interface_checkout.reset = interface_reset;
    Object.defineProperty(interface_checkout, "urlPrefix", {
        get: function() {
            return config.a.checkoutUrl + (-1 === config.a.checkoutUrl.indexOf("?") ? "?" : "&") + "token=";
        }
    });
    function matchUrlAndPaymentToken(item) {
        if (!item || !item.trim()) {
            interface_error("startflow_no_url_or_token", {
                item: item
            });
            throw new Error("startflow_no_url_or_token");
        }
        var paymentToken = function(token) {
            if (token) {
                if ((token = decodeURIComponent(decodeURIComponent(token))).match(/^(EC-)?[A-Z0-9]{17}$/)) return token;
                var match = token.match(/token=((EC-)?[A-Z0-9]{17})/);
                return match || (match = token.match(/(EC-[A-Z0-9]{17})/)) ? match[1] : void 0;
            }
        }(item);
        var url = paymentToken && paymentToken === item ? "" : item;
        if (url) if (url.match(/^https?:\/\/|^\//)) paymentToken ? -1 !== url.indexOf(".paypal.com") ? interface_debug("startflow_paypalurl_with_token", {
            url: url
        }) : interface_debug("startflow_url_with_token", {
            url: url
        }) : interface_debug("startflow_url_no_token", {
            url: url
        }); else {
            interface_info(paymentToken ? "startflow_relative_url_with_token" : "startflow_relative_url_no_token", {
                url: url
            });
            0 === url.toLowerCase().indexOf("ec-") && paymentToken && (url = "" + config.a.checkoutUrl + url);
        } else {
            if (!paymentToken) {
                interface_error("startflow_no_url_or_token", {
                    url: url
                });
                throw new Error('Could not determine url or token from "' + item + '"');
            }
            url = Object(lib.h)(config.a.checkoutUrl, {
                token: paymentToken
            });
            interface_debug("startflow_with_token", {
                url: url
            });
        }
        return {
            paymentToken: paymentToken,
            url: url
        };
    }
    function checkUrlAgainstEnv(url) {
        var paypalUrls = config.a.paypalUrls;
        for (var _i2 = 0, _Object$keys2 = Object.keys(paypalUrls); _i2 < _Object$keys2.length; _i2++) {
            var env = _Object$keys2[_i2];
            var paypalUrl = paypalUrls[env];
            if (env !== constants.t.TEST && env !== constants.t.DEMO && env !== config.a.env && (0 === url.indexOf(paypalUrl) || 0 === url.indexOf(paypalUrl.replace("//www.", "//")))) {
                interface_warn("mismatched_env_startflow_url", {
                    env: config.a.env,
                    url: url
                });
                redirect(url);
                throw new Error(url + " is not a " + config.a.env + " url");
            }
        }
    }
    function awaitPaymentTokenAndUrl(event, targetElement) {
        var paymentTokenAndUrl = new src.a((function(resolve) {
            if (event && targetElement && (Math.random() < .001 || window.enablev3ajax)) {
                var method;
                var _url;
                var body;
                var contentType;
                interface_info("gettoken_targetelement_start");
                Object(client.h)();
                if ("a" === targetElement.tagName.toLowerCase()) {
                    method = "get";
                    _url = targetElement.getAttribute("href");
                } else if ("form" === targetElement.tagName.toLowerCase()) {
                    method = (targetElement.getAttribute("method") || "get").toLowerCase();
                    _url = targetElement.getAttribute("action");
                    body = form_serialize_default()(targetElement);
                    contentType = targetElement.getAttribute("enctype") || "application/x-www-form-urlencoded";
                }
                if (method && _url) {
                    event.preventDefault();
                    Object(lib.R)({
                        method: method,
                        url: _url,
                        body: body,
                        headers: {
                            Accept: "application/paypal-json-token",
                            "Content-type": contentType || ""
                        }
                    }).then((function(json) {
                        var urlAndPaymentToken = matchUrlAndPaymentToken(json.token);
                        resolve(urlAndPaymentToken);
                        interface_info("gettoken_targetelement_success", urlAndPaymentToken);
                        Object(client.h)();
                    })).catch((function(err) {
                        interface_warn("gettoken_targetelement_error", {
                            err: err.stack || err.toString()
                        });
                        Object(client.h)();
                    }));
                } else {
                    interface_warn("gettoken_targetelement_no_method_or_url");
                    Object(client.h)();
                }
            }
            interface_checkout.initXO = function() {
                interface_warn("gettoken_initxo");
            };
            interface_checkout.startFlow = Object(lib.L)((function(item) {
                interface_debug("gettoken_startflow", {
                    item: item
                });
                var _matchUrlAndPaymentTo = matchUrlAndPaymentToken(item), url = _matchUrlAndPaymentTo.url, paymentToken = _matchUrlAndPaymentTo.paymentToken;
                checkUrlAgainstEnv(url);
                return resolve({
                    url: url,
                    paymentToken: paymentToken
                });
            }));
        }));
        return {
            url: paymentTokenAndUrl.then((function(result) {
                return result.url;
            })),
            paymentToken: paymentTokenAndUrl.then((function(result) {
                return result.paymentToken;
            }))
        };
    }
    var paypalCheckoutInited = !1;
    var closeFlowCalled = !1;
    function initPayPalCheckout(props) {
        void 0 === props && (props = {});
        interface_info("init_checkout");
        paypalCheckoutInited && config.a.env !== constants.t.TEST && interface_warn("multiple_init_paypal_checkout");
        closeFlowCalled && interface_debug("init_after_closeflow");
        paypalCheckoutInited = !0;
        var paypalCheckout = checkout.a.init(Object(esm_extends.a)({
            onAuthorize: function(data, actions) {
                interface_info("payment_authorized");
                logRedirect(data.returnUrl);
                return actions.redirect(window);
            },
            onCancel: function(data, actions) {
                if (data.cancelUrl) {
                    interface_info("payment_canceled");
                    logRedirect(data.cancelUrl);
                    return actions.redirect(window);
                }
            },
            fallback: function(url) {
                interface_error("fallback_handler", {
                    url: url
                });
                this.destroy();
                return redirect(url);
            }
        }, props));
        interface_checkout.closeFlow = function(closeUrl) {
            interface_warn("closeflow");
            closeFlowCalled = !0;
            interface_reset();
            paypalCheckout.destroy();
            if (closeUrl) {
                interface_warn("closeflow_with_url", {
                    closeUrl: closeUrl
                });
                return redirect(closeUrl);
            }
        };
        return paypalCheckout;
    }
    function renderPayPalCheckout(props, hijackTarget) {
        void 0 === props && (props = {});
        var urlProp = src.a.resolve(props.url);
        var paymentToken = new src.a((function(resolve) {
            props.init = function(data) {
                resolve(data.paymentToken);
            };
        }));
        var errorHandler = Object(lib.L)((function(err) {
            interface_error("component_error", {
                error: Object(lib.U)(err)
            });
            if (hijackTarget) {
                interface_warn("render_error_hijack_revert_target");
                hijackTarget.removeAttribute("target");
            }
            urlProp.then((function(url) {
                interface_warn("render_error_redirect_using_url");
                return redirect(url);
            }));
            paymentToken.then((function(token) {
                interface_warn("render_error_redirect_using_token");
                return redirect(Object(lib.h)(config.a.checkoutUrl, {
                    token: token
                }));
            }));
        }));
        props.onError = errorHandler;
        var paypalCheckout;
        if (hijackTarget) {
            delete props.url;
            (paypalCheckout = initPayPalCheckout(props)).hijack(hijackTarget);
            paypalCheckout.runTimeout();
            urlProp.then((function(url) {
                interface_warn("hijack_then_url_passed");
                paypalCheckout.loadUrl(url);
            }));
        } else paypalCheckout = initPayPalCheckout(props);
        var render = paypalCheckout.render(null, !hijackTarget);
        interface_checkout.win = paypalCheckout.window;
        return render.catch(errorHandler);
    }
    function instrumentButtonRender(type) {
        var _track;
        interface_info("render_" + type + "_button");
        track(((_track = {})[constants.u.KEY.STATE] = constants.u.STATE.LOAD, _track[constants.u.KEY.TRANSITION] = constants.u.TRANSITION.BUTTON_RENDER, 
        _track[constants.u.KEY.BUTTON_TYPE] = type, _track));
        Object(client.h)();
    }
    var setupCalled = !1;
    function setup(id, options) {
        void 0 === options && (options = {});
        interface_info("setup", {
            id: id = id || "merchant",
            env: options.environment,
            options: Object(lib.S)(options)
        });
        setupCalled && interface_debug("setup_called_multiple_times");
        setupCalled = !0;
        !function(options) {
            if (options.environment) {
                "live" === options.environment && (options.environment = constants.t.PRODUCTION);
                if (!config.a.paypalUrls[options.environment]) {
                    options_warn("invalid_env", {
                        badenv: options.environment
                    });
                    options.environment = config.a.env;
                }
            }
            if (options.button && !Array.isArray(options.button)) {
                options_info("options_button_single_button_passed");
                options.button = [ options.button ];
            }
            if (options.buttons && Object(lib.p)(options.buttons).length) {
                options_info("options_buttons_with_elements_passed");
                options.button = options.buttons;
                delete options.buttons;
            }
            if (options.button && 0 === options.button.length) {
                options_info("options_button_empty");
                delete options.button;
            }
            if (options.button && options.container) {
                options_info("options_button_and_container_passed", {
                    button: options.button,
                    container: options.container
                });
                options.button = options.button.concat(options.container);
                delete options.container;
            }
            if (options.button) {
                var button = Object(lib.p)(options.button);
                if (button.length) options.button = button; else {
                    options_warn("options_button_element_not_found", {
                        element: JSON.stringify(options.button)
                    });
                    delete options.button;
                }
            }
            if (options.button) {
                options.buttons = options.button.map((function(button) {
                    return {
                        button: button,
                        click: options.click,
                        condition: options.condition
                    };
                }));
                delete options.click;
                delete options.condition;
                delete options.button;
            } else if (options.buttons && Array.isArray(options.buttons)) {
                var buttons = [];
                options.buttons.forEach((function(button) {
                    if (button) {
                        button.container && button.container !== options.container && options_warn("mismatched_container_and_button_passed", {
                            options: options.container,
                            button: button.container
                        });
                        Object(lib.p)(button.container || button.button).forEach((function(element) {
                            var _buttons$push;
                            buttons.push(((_buttons$push = {})[button.container ? "container" : "button"] = element, 
                            _buttons$push.click = button.click || options.click, _buttons$push.condition = button.condition || options.condition, 
                            _buttons$push.type = button.type || options.type, _buttons$push.locale = button.locale || options.locale, 
                            _buttons$push.color = button.color || options.color, _buttons$push.shape = button.shape || options.shape, 
                            _buttons$push.size = button.size || options.size, _buttons$push));
                        }));
                    }
                }));
                delete options.buttons;
                delete options.click;
                delete options.condition;
                delete options.button;
                delete options.type;
                delete options.locale;
                delete options.color;
                delete options.shape;
                delete options.size;
                buttons.length && (options.buttons = buttons);
            } else if (options.container && !Array.isArray(options.buttons)) {
                var _buttons = [];
                Object(lib.p)(options.container).forEach((function(container, i) {
                    _buttons.push({
                        container: container,
                        click: options.click,
                        condition: options.condition,
                        type: Array.isArray(options.type) ? options.type[i] : options.type,
                        locale: Array.isArray(options.locale) ? options.locale[i] : options.locale,
                        color: Array.isArray(options.color) ? options.color[i] : options.color,
                        shape: Array.isArray(options.shape) ? options.shape[i] : options.shape,
                        size: Array.isArray(options.size) ? options.size[i] : options.size
                    });
                }));
                delete options.container;
                delete options.buttons;
                delete options.click;
                delete options.condition;
                delete options.button;
                delete options.type;
                delete options.locale;
                delete options.color;
                delete options.shape;
                delete options.size;
                _buttons.length && (options.buttons = _buttons);
            }
            options.buttons || (options.buttons = []);
        }(options);
        !function(options) {
            options.environment && config.a.paypalUrls[options.environment] && (config.a.env = options.environment);
            if (options.locale) {
                config.a.locale = normalizeLocale(options.locale);
                config.a.customCountry = !0;
            }
        }(options);
        env = config.a.env, src.a.try((function() {
            if (!post_robot_src.bridge || !post_robot_src.bridge.needsBridge({
                domain: config.a.paypalDomains[env]
            })) return Object(client.f)("post_bridge_not_required", {
                env: env
            });
            Object(client.f)("setup_post_bridge", {
                env: env
            });
            return Object(lib.M)(env).then(lib.J);
        }));
        var env;
        return src.a.try((function() {
            return options.buttons.length ? renderButtons(id, options.buttons).then((function(buttons) {
                buttons.forEach((function(button) {
                    instrumentButtonRender(button.type);
                    !function(container, button, clickHandler, condition, tracker) {
                        var element = "a" === container.tagName.toLowerCase() ? container : button;
                        var isClick = "function" == typeof clickHandler;
                        if (element.hasAttribute("data-paypal-click-listener")) return interface_warn("button_already_has_paypal_click_listener");
                        element.setAttribute("data-paypal-click-listener", "");
                        getHijackTargetElement(element) && isClick && interface_info("button_link_or_form");
                        element.addEventListener("click", (function(event) {
                            tracker();
                            var eligible = isLegacyEligible();
                            if (Object(belter_src.p)()) {
                                interface_debug("click_popups_supported");
                                eligible || interface_debug("click_popups_supported_but_ineligible");
                            } else {
                                interface_debug("click_popups_not_supported");
                                eligible && interface_debug("click_popups_not_supported_but_eligible");
                            }
                            if (!isClick && !eligible) return interface_debug("ineligible_listenclick");
                            interface_info("button_click");
                            if ("function" == typeof condition) {
                                if (!condition.call()) return interface_info("button_click_condition_disabled");
                                interface_info("button_click_condition_enabled");
                            }
                            return isClick ? function(clickHandler, event) {
                                interface_debug("button_click_handler");
                                try {
                                    clickHandler(event);
                                } catch (err) {
                                    interface_error("click_handler_error", {
                                        error: Object(lib.U)(err)
                                    });
                                }
                            }(clickHandler, event) : function(event, element) {
                                var targetElement = getHijackTargetElement(element);
                                if (!targetElement) return interface_error("target_element_not_found");
                                interface_info("init_paypal_checkout_hijack");
                                var _awaitPaymentTokenAnd = awaitPaymentTokenAndUrl(event, targetElement), url = _awaitPaymentTokenAnd.url;
                                var token;
                                _awaitPaymentTokenAnd.paymentToken.then((function(result) {
                                    token = result;
                                }));
                                renderPayPalCheckout({
                                    url: url,
                                    payment: function() {
                                        return src.a.resolve(token);
                                    }
                                }, targetElement);
                            }(event, element);
                        }));
                    }(button.container, button.element, button.click, button.condition, (function() {
                        !function(type) {
                            var _track2;
                            track(((_track2 = {})[constants.u.KEY.STATE] = constants.u.STATE.LOAD, _track2[constants.u.KEY.TRANSITION] = constants.u.TRANSITION.BUTTON_CLICK, 
                            _track2[constants.u.KEY.BUTTON_TYPE] = type, _track2));
                            Object(client.h)();
                        }(button.type);
                    }));
                }));
            })) : instrumentButtonRender(constants.u.BUTTON_TYPE.CUSTOM);
        }));
    }
    interface_checkout.setup = setup;
    function initXO() {
        interface_debug("initxo");
        if (!isLegacyEligible()) return interface_debug("ineligible_initxo");
        var _awaitPaymentTokenAnd2 = awaitPaymentTokenAndUrl(), url = _awaitPaymentTokenAnd2.url, paymentToken = _awaitPaymentTokenAnd2.paymentToken;
        interface_info("init_paypal_checkout_initxo");
        renderPayPalCheckout({
            url: url,
            payment: function() {
                return paymentToken;
            }
        });
    }
    interface_checkout.initXO = initXO;
    function startFlow(item) {
        interface_debug("startflow", {
            item: item
        });
        var _matchUrlAndPaymentTo2 = matchUrlAndPaymentToken(item), paymentToken = _matchUrlAndPaymentTo2.paymentToken, url = _matchUrlAndPaymentTo2.url;
        checkUrlAgainstEnv(url);
        if (isLegacyEligible()) {
            interface_info("init_paypal_checkout_startflow");
            renderPayPalCheckout({
                url: url,
                payment: function() {
                    return src.a.resolve(paymentToken);
                }
            });
        } else {
            interface_debug("ineligible_startflow_global", {
                url: url
            });
            redirect(url);
        }
    }
    interface_checkout.startFlow = startFlow;
    function closeFlow(closeUrl) {
        interface_warn("closeflow_not_opened");
        if (closeUrl) {
            interface_warn("closeflow_with_url", {
                closeUrl: closeUrl
            });
            redirect(closeUrl);
        }
    }
    interface_checkout.closeFlow = closeFlow;
    var ready_prefix = Object(client.n)(LOG_PREFIX), ready_error = ready_prefix.error, ready_debug = ready_prefix.debug;
    !function(obj, key, callback) {
        if (obj) {
            var value = obj[key];
            value && (value = callback(value) || value);
            try {
                delete obj[key];
                Object.defineProperty(obj, key, {
                    configurable: !0,
                    set: function(item) {
                        (value = item) && (value = callback(value) || value);
                    },
                    get: function() {
                        return value;
                    }
                });
            } catch (err) {}
        }
    }(window, "paypalCheckoutReady", (function(method) {
        if ("function" == typeof method) {
            var oneTimeReady = function() {
                if (!method.called) {
                    method.called = !0;
                    return method.apply(this, arguments);
                }
            };
            !function(method) {
                Object(lib.K)((function() {
                    ready_debug("paypal_checkout_ready");
                    setTimeout((function() {
                        window.paypal || ready_error("paypal_checkout_ready_no_window_paypal");
                        method();
                    }), 1);
                }));
            }(oneTimeReady);
            return oneTimeReady;
        }
    }));
    Object(lib.K)((function() {
        var buttons = [].slice.call(document.querySelectorAll("[" + ATTRIBUTES.BUTTON + "]"));
        if (buttons && buttons.length) {
            ready_debug("data_paypal_button", {
                number: buttons.length
            });
            for (var _i2 = 0; _i2 < buttons.length; _i2++) {
                var button = buttons[_i2];
                var id = button.getAttribute(ATTRIBUTES.MERCHANT_ID);
                var environment = void 0;
                button.hasAttribute(ATTRIBUTES.ENV) ? environment = button.getAttribute(ATTRIBUTES.ENV) : button.hasAttribute(ATTRIBUTES.SANDBOX) && (environment = constants.t.SANDBOX);
                setup(id, {
                    environment: environment,
                    button: button
                });
            }
        }
        [].slice.call(document.getElementsByClassName(CLASSES.HIDDEN_BUTTON)).forEach((function(el) {
            el.className = el.className.replace(CLASSES.HIDDEN_BUTTON, "");
        }));
    }));
} ]);