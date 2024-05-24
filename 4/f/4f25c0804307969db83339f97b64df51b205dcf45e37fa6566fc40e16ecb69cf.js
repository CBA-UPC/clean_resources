this.BX = this.BX || {};
(function (exports,ui_designTokens,ui_fonts_montserrat,b24network_vue_loginonlysocserv,main_core_events,main_core,b24network_component_useractions) {
	'use strict';

	var MessageType = {
	  TYPE_OK: 'ok',
	  TYPE_ERROR: 'error',
	  TYPE_WARNING: 'warning',
	  TYPE_INTRO: 'intro',
	  TYPE_GLOBAL: 'global',
	  TYPE_ALERT_WARNING: 'alert_warning'
	};
	var Message = /*#__PURE__*/function (_BX$Network$Component) {
	  babelHelpers.inherits(Message, _BX$Network$Component);
	  function Message() {
	    var _this;
	    var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    babelHelpers.classCallCheck(this, Message);
	    _this = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(Message).call(this, parameters, {
	      autoUpdate: true
	    }));
	    _this.rootNode = BX.create('DIV', {
	      events: {
	        click: BX.delegateEvent({
	          attribute: 'data-action'
	        }, function () {
	          _this.callEvent('action', []);
	        })
	      }
	    });
	    return _this;
	  }
	  babelHelpers.createClass(Message, [{
	    key: "description",
	    value: function description() {
	      return {
	        message: {
	          type: String,
	          defaultValue: ''
	        },
	        linkMessage: {
	          type: String,
	          defaultValue: ''
	        },
	        detailMessage: {
	          type: Array,
	          defaultValue: []
	        },
	        type: {
	          type: String,
	          defaultValue: ''
	        },
	        linkButton: {
	          type: String,
	          defaultValue: ''
	        },
	        linkButtonTitle: {
	          type: String,
	          defaultValue: ''
	        }
	      };
	    }
	  }, {
	    key: "onAction",
	    value: function onAction(action, element) {
	      if (this.$data.linkButton) {
	        window.location.href = this.$data.linkButton;
	      }
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      if (this.$data.message) {
	        BX.adjust(this.rootNode, {
	          html: Mustache.render("\n{{#typeError}}\n\t<div class=\"b24-network-auth-form-field-error-wrap\">\n\t\t<span class=\"b24-network-auth-form-field-error\">{{{data.message}}}</span>\n\t</div>\n{{/typeError}}\n{{#typeIntro}}\n\t<div class=\"b24-network-auth-form-intro\">\n\t\t<span class=\"b24-network-auth-form-intro-text\">{{{data.message}}}</span>\n\t</div>\n{{/typeIntro}}\n{{#typeWarning}}\n\t<div class=\"b24-network-auth-form-warning\">\n\t\t<div class=\"b24-network-auth-form-warning-inner\">\n\t\t\t<span class=\"b24-network-auth-form-warning-text\">{{{data.message}}}</span>\n\t\t\t{{#data.linkMessage}}\n\t\t\t<span class=\"b24-network-auth-form-warning-link\" data-action=\"link\">{{{data.linkMessage}}}</span>\n\t\t\t{{/data.linkMessage}}\n\t\t</div>\n\t</div>\n{{/typeWarning}}\n{{#typeGlobal}}\n\t<div class=\"b24-network-auth-form-error{{^detailMessage}} b24-network-auth-form-error-common{{/detailMessage}}\">\n\t\t<span class=\"b24-network-auth-form-error-icon\"></span>\n\t\t<span class=\"b24-network-auth-form-error-text\">\n\t\t{{#detailMessage}}\n\t\t\t<span class=\"b24-network-auth-form-detail\">{{{detailMessage}}}</span>\n\t\t{{/detailMessage}}\n\t\t{{^detailMessage}}\n\t\t\t{{{data.message}}}\n\t\t{{/detailMessage}}\n\t\t</div>\n{{/typeGlobal}}\n{{#typeAlertWarning}}\n\t<div class=\"ui-alert ui-alert-warning b24-network-auth-form-alert b24-network-auth-form-status-text\">\n\t\t<span class=\"ui-alert-message\">{{{data.message}}}</span>\n\t</div>\n{{/typeAlertWarning}}\n{{#typeOk}}\n\t<div class=\"b24-network-auth-form-status b24-network-auth-form-status-wide\">\n\t\t<span class=\"b24-network-auth-form-status-text\">{{{data.message}}}</span>\n\t</div>\n\t{{#data.linkButton}}\n\t<div class=\"b24-network-auth-form-btn-block\">\n\t\t<button class=\"ui-btn ui-btn-md ui-btn-success ui-btn-round b24-network-auth-form-btn\" data-action=\"link\">{{{data.linkButtonTitle}}}</button>\n\t</div>\n\t{{/data.linkButton}}\n{{/typeOk}}\n", {
	            typeError: this.$data.type === MessageType.TYPE_ERROR,
	            typeIntro: this.$data.type === MessageType.TYPE_INTRO,
	            typeWarning: this.$data.type === MessageType.TYPE_WARNING,
	            typeGlobal: this.$data.type === MessageType.TYPE_GLOBAL,
	            typeAlertWarning: this.$data.type === MessageType.TYPE_ALERT_WARNING,
	            typeOk: ![MessageType.TYPE_ERROR, MessageType.TYPE_WARNING, MessageType.TYPE_INTRO, MessageType.TYPE_GLOBAL, MessageType.TYPE_ALERT_WARNING].includes(this.$data.type),
	            data: this.$data,
	            detailMessage: this.$data.detailMessage.length <= 0 ? '' : this.$data.detailMessage.join('</span><span class="b24-network-auth-form-detail">'),
	            message: this.$localization
	          })
	        });
	        if (this.$data.linkButton) {
	          this.on('action', this.onAction);
	        }
	        return this.rootNode;
	      } else {
	        return '';
	      }
	    }
	  }]);
	  return Message;
	}(BX.Network.Component);

	var _templateObject;
	var Authorize = /*#__PURE__*/function (_BX$Network$Component) {
	  babelHelpers.inherits(Authorize, _BX$Network$Component);
	  function Authorize() {
	    var _this;
	    var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    babelHelpers.classCallCheck(this, Authorize);
	    _this = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(Authorize).call(this, parameters));
	    BX.Network.Component.$store.addChangeListener('app-title', function (value) {
	      _this.$data.title = value;
	      _this.update(true);
	    });
	    return _this;
	  }
	  babelHelpers.createClass(Authorize, [{
	    key: "description",
	    value: function description() {
	      return {
	        message: {
	          type: Object,
	          fields: {
	            text: {
	              type: String
	            },
	            type: {
	              type: String
	            }
	          },
	          defaultValue: {
	            text: '',
	            type: 'ok'
	          }
	        },
	        loginHistory: {
	          type: Array,
	          defaultValue: []
	        },
	        socialServices: {
	          type: Array,
	          defaultValue: []
	        },
	        defaultCountry: {
	          type: String,
	          defaultValue: ''
	        },
	        countryTopList: {
	          type: Array,
	          defaultValue: []
	        },
	        phoneEnabled: {
	          type: Boolean,
	          defaultValue: true
	        },
	        showTerms: {
	          type: Boolean,
	          defaultValue: false
	        },
	        url: {
	          type: Object,
	          fields: {
	            terms: {
	              type: String
	            },
	            privacy: {
	              type: String
	            },
	            email: {
	              type: String
	            }
	          }
	        },
	        forgotPassword: {
	          type: Object,
	          fields: {
	            captcha: {
	              type: Object,
	              fields: {
	                enabled: {
	                  type: Boolean,
	                  defaultValue: false
	                },
	                code: {
	                  type: String,
	                  defaultValue: ''
	                },
	                url: {
	                  type: String,
	                  defaultValue: ''
	                }
	              }
	            }
	          }
	        },
	        qrCode: {
	          type: Object
	        },
	        forceSsoSignIn: {
	          type: Boolean,
	          defaultValue: false
	        },
	        portal: {
	          type: Object,
	          required: false,
	          defaultValue: {},
	          fields: {
	            id: {
	              type: String
	            },
	            host: {
	              type: String
	            },
	            ssoEnabled: {
	              type: Boolean
	            }
	          }
	        },
	        loader: {
	          type: BX.Network.ComponentTransport,
	          required: true
	        }
	      };
	    }
	  }, {
	    key: "localization",
	    value: function localization() {
	      return {
	        B24NET_AUTH_TITLE: main_core.Loc.getMessage('B24NET_AUTH_TITLE'),
	        B24NET_AUTH_SSO_TITLE: main_core.Loc.getMessage('B24NET_AUTH_SSO_TITLE'),
	        B24NET_AUTH_SSO_NOTICE_MESSAGE: main_core.Loc.getMessage('B24NET_AUTH_SSO_NOTICE_MESSAGE')
	      };
	    }
	  }, {
	    key: "components",
	    value: function components() {
	      var _this2 = this;
	      return {
	        MESSAGE: function MESSAGE() {
	          return new BX.Network.Message({
	            message: _this2.$data.message.text,
	            type: _this2.$data.message.type
	          });
	        },
	        FORM: function FORM() {
	          return new BX.Network.AuthorizeForm({
	            loginHistory: _this2.$data.loginHistory,
	            defaultCountry: _this2.$data.defaultCountry,
	            countryTopList: _this2.$data.countryTopList,
	            socialServices: _this2.$data.socialServices,
	            phoneEnabled: _this2.$data.phoneEnabled,
	            showTerms: _this2.$data.showTerms,
	            url: _this2.$data.url,
	            forgotPassword: _this2.$data.forgotPassword,
	            qrCode: _this2.$data.qrCode,
	            portal: _this2.$data.portal,
	            forceSsoSignIn: _this2.$data.forceSsoSignIn,
	            loader: _this2.$data.loader
	          }).on('sso-sign-in-open', .on('sso-sign-in-cancel', ;
	        }
	      };
	    }
	  }, {
	    key: "onProcessData",
	    value: function onProcessData(data) {
	      if (data.forceSsoSignIn || data.portal && data.portal.ssoEnabled) {
	        this.$data.shouldChangeTitleAndMessageBySsoScenario = true;
	      }
	      if (data.message) {
	        this.originalMessage = data.message;
	      }
	    }
	  }, {
	    key: "revertTitleAndMessage",
	    value: function revertTitleAndMessage() {
	      this.$data.title = this.$localization.B24NET_AUTH_TITLE;
	      this.$data.message = this.originalMessage;
	      this.$components.MESSAGE.$data.message = this.originalMessage.text;
	      this.$components.MESSAGE.$data.type = this.originalMessage.type;
	    }
	  }, {
	    key: "changeTitleAndMessageBySsoScenario",
	    value: function changeTitleAndMessageBySsoScenario() {
	      this.$data.title = this.$localization.B24NET_AUTH_SSO_TITLE;
	      if (this.$data.portal.ssoEnabled) {
	        this.$components.MESSAGE.$data.message = main_core.Loc.getMessage('B24NET_AUTH_SSO_NOTICE_MESSAGE', {
	          '#PORTAL#': this.$data.portal.host
	        });
	        this.$components.MESSAGE.$data.type = MessageType.TYPE_OK;
	      }
	      this.$data.shouldChangeTitleAndMessageBySsoScenario = false;
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      if (this.$data.shouldChangeTitleAndMessageBySsoScenario) {
	        this.changeTitleAndMessageBySsoScenario();
	      }
	      var title = this.$data.title || this.$localization.B24NET_AUTH_TITLE;
	      var blockNode = main_core.Tag.render(_templateObject || (_templateObject = babelHelpers.taggedTemplateLiteral(["\n\t\t\t<div>\n\t\t\t\t<div class=\"b24-network-auth-form-title-block\">\n\t\t\t\t\t<span class=\"b24-network-auth-form-title\">", "</span>\n\t\t\t\t</div>\n\t\t\t\t<div data-component=\"MESSAGE\"></div>\n\t\t\t\t<div data-component=\"FORM\" class=\"b24-network-auth-slider\"></div>\n\t\t\t</div>\n\t\t"])), title);
	      this.bindComponents(blockNode);
	      return blockNode;
	    }
	  }]);
	  return Authorize;
	}(BX.Network.Component);

	function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
	function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { babelHelpers.defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
	function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
	function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
	function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
	var AuthorizeForm = /*#__PURE__*/function (_BX$Network$Component) {
	  babelHelpers.inherits(AuthorizeForm, _BX$Network$Component);
	  function AuthorizeForm() {
	    var _this;
	    var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    var options = arguments.length > 1 ? arguments[1] : undefined;
	    babelHelpers.classCallCheck(this, AuthorizeForm);
	    options = options || {};
	    options.stateToAnalyticsEventMap = {
	      login: b24network_component_useractions.AnalyticsEventType.SHOW_AUTH_ENTER_LOGIN_PAGE,
	      list: b24network_component_useractions.AnalyticsEventType.SHOW_AUTH_CHOOSE_EXISTED_PAGE,
	      authorize: b24network_component_useractions.AnalyticsEventType.SHOW_ENTER_PASSWORD_PAGE,
	      qrcode: b24network_component_useractions.AnalyticsEventType.SHOW_QR_CODE_AUTH_PAGE,
	      changepassword: b24network_component_useractions.AnalyticsEventType.SHOW_SET_NEW_PASSWORD_PAGE,
	      phoneconfirm: b24network_component_useractions.AnalyticsEventType.SHOW_ENTER_SMS_CODE_PAGE
	    };
	    _this = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(AuthorizeForm).call(this, parameters, options));
	    _this.formElements = {};
	    return _this;
	  }
	  babelHelpers.createClass(AuthorizeForm, [{
	    key: "description",
	    value: function description() {
	      return {
	        loader: {
	          type: BX.Network.ComponentTransport,
	          required: true
	        },
	        loginHistory: {
	          type: Array,
	          required: false,
	          defaultValue: []
	        },
	        defaultCountry: {
	          type: String,
	          defaultValue: ''
	        },
	        countryTopList: {
	          type: Array,
	          defaultValue: []
	        },
	        socialServices: {
	          type: Array,
	          required: false,
	          defaultValue: []
	        },
	        currentState: {
	          type: String,
	          required: false,
	          defaultValue: 'login'
	        },
	        previousState: {
	          type: String,
	          required: false,
	          defaultValue: 'login'
	        },
	        loginList: {
	          type: Array,
	          required: false,
	          defaultValue: []
	        },
	        phoneConfirmData: {
	          type: Object,
	          required: false,
	          defaultValue: {}
	        },
	        phoneEnabled: {
	          type: Boolean,
	          defaultValue: true
	        },
	        showTerms: {
	          type: Boolean,
	          defaultValue: false
	        },
	        url: {
	          type: Object,
	          fields: {
	            terms: {
	              type: String
	            },
	            privacy: {
	              type: String
	            },
	            email: {
	              type: String
	            }
	          }
	        },
	        currentUser: {
	          type: Object
	        },
	        currentLogin: {
	          type: String,
	          defaultValue: ''
	        },
	        currentPassword: {
	          type: String,
	          defaultValue: ''
	        },
	        rememberPassword: {
	          type: Boolean,
	          defaultValue: true
	        },
	        captcha: {
	          type: Object,
	          fields: {
	            code: {
	              type: String
	            },
	            value: {
	              type: String,
	              defaultValue: ''
	            },
	            url: {
	              type: String
	            }
	          },
	          defaultValue: {}
	        },
	        forgotPassword: {
	          type: Object,
	          fields: {
	            captcha: {
	              type: Object,
	              fields: {
	                enabled: {
	                  type: Boolean,
	                  defaultValue: false
	                },
	                code: {
	                  type: String,
	                  defaultValue: ''
	                },
	                url: {
	                  type: String,
	                  defaultValue: ''
	                }
	              },
	              defaultValue: {}
	            }
	          },
	          defaultValue: {}
	        },
	        loginCheckResult: {
	          type: Object
	        },
	        successPage: {
	          type: String,
	          defaultValue: ''
	        },
	        qrCode: {
	          type: Object
	        },
	        forceSsoSignIn: {
	          type: Boolean,
	          defaultValue: false
	        },
	        portal: {
	          type: Object,
	          required: false,
	          defaultValue: {},
	          fields: {
	            id: {
	              type: String
	            },
	            host: {
	              type: String
	            },
	            ssoEnabled: {
	              type: Boolean
	            }
	          }
	        }
	      };
	    }
	  }, {
	    key: "localization",
	    value: /* eslint-disable max-lines-per-function */
	  }, {
	    key: "components",
	    value: function components() {
	      var _this2 = this;
	      return {
	        MESSAGE: function MESSAGE() {
	          return new BX.Network.Message({
	            message: '',
	            type: BX.Network.MessageType.TYPE_ERROR
	          });
	        },
	        LOGINLIST: function LOGINLIST() {
	          return new BX.Network.AuthorizeFormLoginList({
	            loginList: _this2.$data.loginList,
	            showQrCodeButton: _this2.$data.qrCode && Object.keys(_this2.$data.qrCode).length > 0,
	            portal: _this2.$data.portal
	          }).on('select', function (id) {
	            id = parseInt(id);
	            if (id > 0) {
	              var _iterator = _createForOfIteratorHelper(_this2.$data.loginList),
	                _step;
	              try {
	                for (_iterator.s(); !(_step = _iterator.n()).done;) {
	                  var listItem = _step.value;
	                  if (parseInt(listItem.ID) === id) {
	                    _this2.checkUserLogin({
	                      login: listItem.LOGIN,
	                      currentUri: window.location.href,
	                      portalInfo: _this2.$data.portal
	                    });
	                    return;
	                  }
	                }
	              } catch (err) {
	                _iterator.e(err);
	              } finally {
	                _iterator.f();
	              }
	            }
	            _this2.$data.currentLogin = '';
	            _this2.updateCurrentState('login');
	            _this2.update();
	          }).on('delete', .on('showQrCode', function () {
	            _this2.updateCurrentState('qrcode');
	            _this2.update();
	          }).on('sso-sign-in', function (currentLogin) {
	            _this2.$data.currentLogin = currentLogin || '';
	            _this2.updateCurrentState('sso-sign-in');
	            _this2.update();
	          });
	        },
	        AUTHORIZE: function AUTHORIZE() {
	          return new BX.Network.AuthorizeFormAuthorize({
	            loader: _this2.$data.loader,
	            currentUser: _this2.$data.currentUser,
	            socialServices: _this2.$data.socialServices,
	            captcha: _this2.$data.captcha,
	            showTerms: _this2.$data.showTerms,
	            url: _this2.$data.url
	          }).on('forgot', function (currentValue) {
	            _this2.$data.currentLogin = currentValue || '';
	            _this2.updateCurrentState('forgotpassword');
	            _this2.update();
	          }).on('success', _this2.reloadPage.bind(_this2));
	        },
	        AUTHORIZE_NOT_CONFIRMED_ACCOUNT: function AUTHORIZE_NOT_CONFIRMED_ACCOUNT() {
	          return new BX.Network.AuthorizeFormAuthorizeNotConfirmedAccount({
	            loader: _this2.$data.loader,
	            currentUser: _this2.$data.currentUser,
	            captcha: _this2.$data.forgotPassword ? _this2.$data.forgotPassword.captcha : {}
	          }).on('authorize', function (currentUser) {
	            _this2.setCurrentUser(currentUser).setCurrentState('authorize').update();
	          });
	        },
	        PASSWORD: function PASSWORD() {
	          return new BX.Network.AuthorizeFormPassword({
	            currentValue: _this2.$data.currentPassword,
	            remember: _this2.$data.rememberPassword
	          }).on('change', ;
	        },
	        LOGIN: function LOGIN() {
	          return new BX.Network.AuthorizeFormLogin({
	            loader: _this2.$data.loader,
	            currentLogin: _this2.$data.currentLogin,
	            defaultCountry: _this2.$data.defaultCountry,
	            countryTopList: _this2.$data.countryTopList,
	            socialServices: _this2.$data.socialServices,
	            phoneEnabled: _this2.$data.phoneEnabled,
	            portal: _this2.$data.portal,
	            showQrCodeButton: _this2.$data.qrCode && Object.keys(_this2.$data.qrCode).length > 0
	          }).on('submit', function (submitResult) {
	            if (submitResult.length === 1) {
	              var firstUser = submitResult[0];
	              if (firstUser.AUTH_PHONE) {
	                if (firstUser.AUTH_PHONE.data) {
	                  _this2.verifyPhone(firstUser.AUTH_PHONE.data);
	                } else {
	                  _this2.$data.loader.query('b24network.authorize.verifyLogin', {
	                    login: firstUser.LOGIN
	                  }).then(function (result) {
	                    _this2.verifyPhone(result.data);
	                  });
	                }
	              } else if (firstUser.WITHOUT_PASSWORD === true) {
	                _this2.setCurrentUser(firstUser).setCurrentState('authorize_not_confirmed_account');
	              } else {
	                _this2.$data.showTerms = !firstUser.HAS_CONSENT;
	                _this2.setCaptchaData(firstUser.CAPTCHA);
	                _this2.setCurrentUser(firstUser).setCurrentState('authorize');
	              }
	            } else {
	              _this2.$data.loginList = submitResult;
	              _this2.$components.LOGINLIST.setLoginList(submitResult);
	              _this2.updateCurrentState('list');
	            }
	            _this2.update();
	          }).on('forgot', function (currentValue) {
	            _this2.$data.currentLogin = currentValue || '';
	            _this2.updateCurrentState('forgotpassword');
	            _this2.update();
	          }).on('showQrCode', .on('sso-sign-in', function (currentLogin) {
	            _this2.$data.currentLogin = currentLogin || '';
	            _this2.updateCurrentState('sso-sign-in');
	            _this2.update();
	            _this2.callEvent('sso-sign-in-open', []);
	          }).on('login-socserv', function (currentLogin, submitResult) {
	            _this2.$data.currentLogin = currentLogin || '';
	            var servicesIds = new Set(submitResult[0].AUTH_TYPE.filter(.map();
	            var socialServices = _this2.$data.socialServices.filter(;
	            if (socialServices.length > 0) {
	              _this2.$components.LOGIN_SOCSERV.setProps({
	                userEmail: _this2.$data.currentLogin,
	                socialServices: socialServices
	              });
	              _this2.setCurrentState('login-socserv');
	            } else {
	              console.error('Event "login-socserv" without social services');
	              _this2.setCurrentUser(submitResult[0]).setCurrentState('authorize');
	            }
	            _this2.update();
	          });
	        },
	        LOGIN_SOCSERV: function LOGIN_SOCSERV() {
	          return new BX.Network.VueAdapterComponent(b24network_vue_loginonlysocserv.LoginOnlySocserv, {
	            props: {
	              userEmail: '',
	              socialServices: []
	            },
	            events: {
	              back: 	            }
	          });
	        },
	        SSO_SIGN_IN_FORM: function SSO_SIGN_IN_FORM() {
	          return new BX.Network.AuthorizeFormSsoLogin({
	            loader: _this2.$data.loader,
	            currentLogin: _this2.$data.currentLogin,
	            portal: _this2.$data.portal
	          }).on('loaded-user-sso-portals', function (portalList) {
	            _this2.handleLoadedUserSsoPortals(portalList);
	          }).on('cancel', function () {
	            _this2.rollbackCurrentState();
	            _this2.update();
	            _this2.callEvent('sso-sign-in-cancel', []);
	          });
	        },
	        SSO_PORTAL_LIST: function SSO_PORTAL_LIST() {
	          return new BX.Network.AuthorizeFormPortalList({
	            portalList: _this2.$data.portalList
	          });
	        },
	        FORGOTPASSWORD: function FORGOTPASSWORD() {
	          return new BX.Network.AuthorizeFormForgotPassword({
	            currentLogin: _this2.$data.currentLogin,
	            defaultCountry: _this2.$data.defaultCountry,
	            countryTopList: _this2.$data.countryTopList,
	            showBack: false,
	            loader: _this2.$data.loader,
	            phoneEnabled: _this2.$data.phoneEnabled,
	            captcha: _this2.$data.forgotPassword ? _this2.$data.forgotPassword.captcha : {}
	          }).on('authorize', .on('result', function (result) {
	            if (result.TYPE === 'PHONE') {
	              _this2.setPhoneConfirmData({
	                phone: result.PHONE,
	                userId: result.USER_ID,
	                userSignature: result.USER_SIGN,
	                dataSignature: result.DATA_SIGN,
	                dateSend: result.DATE_SEND
	              }).setCurrentState('phoneconfirm').update();
	            }
	          }).on('change', .on('return', function (beforeBackState) {
	            if (!beforeBackState) {
	              beforeBackState = _this2.$data.loginHistory.length <= 0 ? 'login' : 'list';
	            }
	            _this2.updateCurrentState(beforeBackState);
	            _this2.update();
	          });
	        },
	        CHANGEPASSWORD: function CHANGEPASSWORD() {
	          return new BX.Network.AuthorizeFormChangePassword({
	            loader: _this2.$data.loader,
	            hasPassword: false
	          }).on('success', _this2.reloadPage.bind(_this2));
	        },
	        PHONECONFIRM: function PHONECONFIRM() {
	          return new BX.Network.PhoneConfirm(_objectSpread({
	            loader: _this2.$data.loader
	          }, _this2.$data.phoneConfirmData)).on('success', function () {
	            _this2.$components.CHANGEPASSWORD.setUserId(_this2.$data.phoneConfirmData.userId).setUserLogin(_this2.$data.phoneConfirmData.phone).setIsPhone(true);
	            _this2.updateCurrentState('changepassword');
	            _this2.update();
	          });
	        },
	        QRCODE: function QRCODE() {
	          return new BX.Network.QrCode(_objectSpread({
	            showBackButton: true,
	            showRememberButton: true
	          }, _this2.$data.qrCode)).on('cancel', ;
	        }
	      };
	    } /* eslint-enable max-lines-per-function */
	  }, {
	    key: "onProcessData",
	    value: function onProcessData(data) {
	      if (data.forceSsoSignIn || data.portal && data.portal.ssoEnabled) {
	        data.currentState = 'sso-sign-in';
	      } else if (data.currentState === 'login' && !data.currentLogin && data.loginHistory.length > 0) {
	        data.loginList = data.loginHistory;
	        data.previousState = 'list';
	        data.currentState = 'list';
	      }
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      switch (this.$data.currentState) {
	        case 'login':
	          return this.renderLogin();
	        case 'login-socserv':
	          return this.renderLoginSocserv();
	        case 'list':
	          return this.renderLoginList();
	        case 'authorize':
	          return this.renderAuthorize();
	        case 'authorize_not_confirmed_account':
	          return this.renderAuthorizeWithoutPassword();
	        case 'forgotpassword':
	          return this.renderForgotPassword();
	        case 'changepassword':
	          return this.renderChangePassword();
	        case 'phoneconfirm':
	          return this.renderPhoneConfirm();
	        case 'qrcode':
	          return this.renderQrCode();
	        case 'sso-sign-in':
	          return this.$components.SSO_SIGN_IN_FORM;
	        case 'sso-select-portal-sign-in':
	          return this.$components.SSO_PORTAL_LIST;
	        default:
	          return 'no such page';
	      }
	    }
	  }, {
	    key: "redirectToSso",
	    value: 	  }, {
	    key: "handleLoadedUserSsoPortals",
	    value: function handleLoadedUserSsoPortals(portalList) {
	      this.$data.portalList = portalList;
	      if (this.$data.portalList.length === 1) {
	        this.redirectToSso(this.$data.portalList[0]);
	        return;
	      }
	      this.$components.SSO_PORTAL_LIST.setPortalList(portalList);
	      this.updateCurrentState('sso-select-portal-sign-in');
	      this.update();
	    }
	  }, {
	    key: "renderLoginList",
	    value: function renderLoginList() {
	      return this.$components.LOGINLIST;
	    }
	  }, {
	    key: "renderLogin",
	    value: function renderLogin() {
	      return this.$components.LOGIN;
	    }
	  }, {
	    key: "renderLoginSocserv",
	    value: function renderLoginSocserv() {
	      return this.$components.LOGIN_SOCSERV;
	    }
	  }, {
	    key: "renderAuthorize",
	    value: function renderAuthorize() {
	      this.$components.AUTHORIZE.setCurrentUser(this.$data.currentUser);
	      this.$components.AUTHORIZE.setSuccessPage(this.$data.successPage);
	      return this.$components.AUTHORIZE;
	    }
	  }, {
	    key: "renderAuthorizeWithoutPassword",
	    value: function renderAuthorizeWithoutPassword() {
	      return this.$components.AUTHORIZE_NOT_CONFIRMED_ACCOUNT;
	    }
	  }, {
	    key: "renderForgotPassword",
	    value: function renderForgotPassword() {
	      this.$components.FORGOTPASSWORD.setCurrentState('login');
	      return this.$components.FORGOTPASSWORD;
	    }
	  }, {
	    key: "renderChangePassword",
	    value: function renderChangePassword() {
	      return this.$components.CHANGEPASSWORD;
	    }
	  }, {
	    key: "renderPhoneConfirm",
	    value: function renderPhoneConfirm() {
	      return this.$components.PHONECONFIRM;
	    }
	  }, {
	    key: "renderQrCode",
	    value: 	  }, {
	    key: "verifyPhone",
	    value: function verifyPhone(verifyData) {
	      this.setPhoneConfirmData({
	        phone: verifyData.PHONE,
	        userId: verifyData.USER_ID,
	        userSignature: verifyData.USER_SIGN,
	        dataSignature: verifyData.DATA_SIGN,
	        dateSend: verifyData.DATE_SEND
	      }).setCurrentState('phoneconfirm').update();
	    }
	  }, {
	    key: "checkUserLogin",
	    value: function checkUserLogin(checkParam) {
	      var _this3 = this;
	      // eslint-disable-next-line promise/catch-or-return
	      this.$data.loader.query('b24network.authorize.checkLogin', checkParam).then(function (result) {
	        if (result.data && result.data.length > 0) {
	          var firstItem = result.data[0];
	          _this3.$data.showTerms = !firstItem.HAS_CONSENT;
	          _this3.setCaptchaData(firstItem.CAPTCHA);
	          if (firstItem.AUTH_PHONE) {
	            if (firstItem.AUTH_PHONE.data) {
	              _this3.verifyPhone(firstItem.AUTH_PHONE.data);
	            } else {
	              // eslint-disable-next-line promise/catch-or-return
	              _this3.$data.loader.query('b24network.authorize.verifyLogin', {
	                login: login
	              }).then(;
	            }
	          } else {
	            _this3.$data.currentUser = firstItem;
	            _this3.updateCurrentState('authorize');
	            _this3.update();
	          }
	        }
	      });
	    }
	  }, {
	    key: "deleteLogin",
	    value: function deleteLogin(deleteParam) {
	      var _this4 = this;
	      this.$data.loader.query('b24network.authorize.deleteLogin', deleteParam).then(function (result) {
	        if (result.data) {
	          _this4.$data.loginHistory = _this4.$data.loginHistory.filter(;
	          if (_this4.$data.loginHistory.length <= 0) {
	            _this4.updateCurrentState('login');
	          }
	          _this4.$components.LOGINLIST.setLoginList(_this4.$data.loginHistory);
	        }
	        _this4.update();
	      });
	    }
	  }, {
	    key: "reloadPage",
	    value: function reloadPage() {
	      var url = new URL(window.location.href);

	      // fix for email senders
	      if (url.pathname === '/oauth/authorize/' && !url.searchParams.has('client_id') && !url.searchParams.has('redirect_uri') && !url.searchParams.has('backurl')) {
	        window.location.href = '/?from=auth_form';
	        return;
	      }
	      if (!url.searchParams.has('from') && url.pathname !== '/create/') {
	        url.searchParams.set('from', 'auth_form');
	      }
	      window.location.href = url.toString();
	    }
	  }, {
	    key: "setCaptchaData",
	    value: function setCaptchaData(data) {
	      if (main_core.Type.isPlainObject(data)) {
	        this.$data.captcha = {
	          code: data.CODE,
	          url: data.URL
	        };
	      }
	    }
	  }]);
	  return AuthorizeForm;
	}(BX.Network.Component);

	var _templateObject$1;
	var AuthorizeFormSsoLogin = /*#__PURE__*/function (_BX$Network$Component) {
	  babelHelpers.inherits(AuthorizeFormSsoLogin, _BX$Network$Component);
	  function AuthorizeFormSsoLogin() {
	    var _this;
	    var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    babelHelpers.classCallCheck(this, AuthorizeFormSsoLogin);
	    _this = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(AuthorizeFormSsoLogin).call(this, parameters));
	    _this.blockCache = new main_core.Cache.MemoryCache();
	    _this.formState = {
	      loginValid: true,
	      currentLogin: ''
	    };
	    return _this;
	  }
	  babelHelpers.createClass(AuthorizeFormSsoLogin, [{
	    key: "description",
	    value: function description() {
	      return {
	        loader: {
	          type: BX.Network.ComponentTransport,
	          required: true
	        },
	        currentLogin: {
	          type: String,
	          required: false,
	          defaultValue: ''
	        },
	        portal: {
	          type: Object,
	          required: false,
	          fields: {
	            id: {
	              type: String
	            },
	            host: {
	              type: String
	            }
	          }
	        }
	      };
	    }
	  }, {
	    key: "components",
	    value: function components() {
	      var _this2 = this;
	      return {
	        MESSAGE: function MESSAGE() {
	          return new BX.Network.Message({
	            type: BX.Network.MessageType.TYPE_ERROR
	          });
	        },
	        INPUT: function INPUT() {
	          return new BX.Network.LoginInput({
	            ssoMode: true,
	            phoneEnabled: false,
	            value: _this2.$data.currentLogin
	          }).on('change', _this2.handleLoginChange.bind(_this2));
	        }
	      };
	    }
	  }, {
	    key: "localization",
	    value: function localization() {
	      return {
	        B24NET_AUTH_USE_SOC: main_core.Loc.getMessage('B24NET_AUTH_USE_SOC'),
	        B24NET_AUTH_SUBMIT: main_core.Loc.getMessage('B24NET_AUTH_SUBMIT'),
	        B24NET_AUTH_FORGOT: main_core.Loc.getMessage('B24NET_AUTH_FORGOT'),
	        B24NET_AUTH_NOTFOUND_LOGIN: main_core.Loc.getMessage('B24NET_AUTH_NOTFOUND_LOGIN'),
	        B24NET_AUTH_NOTFOUND_PHONE: main_core.Loc.getMessage('B24NET_AUTH_NOTFOUND_PHONE'),
	        B24NET_AUTH_SET_SOCSERV_PASSWORD: main_core.Loc.getMessage('B24NET_AUTH_SET_SOCSERV_PASSWORD2'),
	        B24NET_SEPARATOR: main_core.Loc.getMessage('B24NET_SEPARATOR'),
	        B24NET_AUTH_SSO_SIGN_IN_CANCEL: main_core.Loc.getMessage('B24NET_AUTH_SSO_SIGN_IN_CANCEL'),
	        B24NET_AUTH_SSO_SIGN_WITHOUT: main_core.Loc.getMessage('B24NET_AUTH_SSO_SIGN_WITHOUT')
	      };
	    }
	  }, {
	    key: "getRootContainer",
	    value: function getRootContainer() {
	      var _this3 = this;
	      return this.blockCache.remember('root', function () {
	        return main_core.Tag.render(_templateObject$1 || (_templateObject$1 = babelHelpers.taggedTemplateLiteral(["\n\t\t\t\t<form onsubmit=\"", "\">\n\t\t\t\t\t<div class=\"b24-network-auth-form-block\">\n\t\t\t\t\t\t<div class=\"b24-network-auth-form-field-block\" data-component=\"INPUT\"></div>\n\t\t\t\t\t\t<div data-component=\"MESSAGE\"></div>\n\t\t\t\t\t\t<div class=\"b24-network-auth-form-btn-block\">\n\t\t\t\t\t\t\t<button class=\"ui-btn ui-btn-md ui-btn-success ui-btn-round b24-network-auth-form-btn\" onclick=\"", "\">", "</button>\n\t\t\t\t\t\t\t<button class=\"ui-btn ui-btn-md ui-btn-light ui-btn-round b24-network-auth-form-btn\" onclick=\"", "\">", "</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n\t\t\t"])), _this3.submitHandler.bind(_this3), _this3.submitHandler.bind(_this3), _this3.$localization.B24NET_AUTH_SUBMIT, _this3.cancelHandler.bind(_this3), _this3.$localization.B24NET_AUTH_SSO_SIGN_WITHOUT);
	      });
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var rootContainer = this.getRootContainer();
	      this.bindComponents(rootContainer);
	      return rootContainer;
	    }
	  }, {
	    key: "handleLoginChange",
	    value: 	  }, {
	    key: "cancelHandler",
	    value: function cancelHandler(event) {
	      event.preventDefault();
	      this.callEvent('cancel', []);
	    }
	  }, {
	    key: "submitHandler",
	    value: function submitHandler(event) {
	      event.preventDefault();
	      if (this.formState.currentLogin.length > 0) {
	        if (this.formState.loginValid) {
	          this.loadListSsoPortals({
	            login: this.formState.currentLogin,
	            portal: this.$data.portal,
	            currentUri: window.location.href
	          });
	        } else {
	          this.showError();
	        }
	      }
	    }
	  }, {
	    key: "loadListSsoPortals",
	    value: function loadListSsoPortals(_ref) {
	      var _this4 = this;
	      var login = _ref.login,
	        portal = _ref.portal,
	        currentUri = _ref.currentUri;
	      this.hideError();
	      this.$data.loader.query('b24network.authorize.listSsoPortals', {
	        login: login,
	        portal: portal,
	        currentUri: currentUri
	      }).then(function (result) {
	        var portals = result.data.portals;
	        if (!portals || portals.length === 0) {
	          _this4.showError();
	          return;
	        }
	        _this4.callEvent('loaded-user-sso-portals', [portals]);
	      }, function (result) {});
	    }
	  }, {
	    key: "showError",
	    value: function showError() {
	      var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	      this.$components.MESSAGE.setMessage(message);
	      this.getRootContainer().classList.add('b24-network-auth-form-field-input-block-error');
	    }
	  }, {
	    key: "hideError",
	    value: function hideError() {
	      this.$components.MESSAGE.setMessage('');
	      this.getRootContainer().classList.remove('b24-network-auth-form-field-input-block-error');
	    }
	  }]);
	  return AuthorizeFormSsoLogin;
	}(BX.Network.Component);

	var _templateObject$2;
	var AuthorizeFormPortalListItem = /*#__PURE__*/function (_BX$Network$Component) {
	  babelHelpers.inherits(AuthorizeFormPortalListItem, _BX$Network$Component);
	  function AuthorizeFormPortalListItem(parameters) {
	    babelHelpers.classCallCheck(this, AuthorizeFormPortalListItem);
	    return babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(AuthorizeFormPortalListItem).call(this, parameters));
	  }
	  babelHelpers.createClass(AuthorizeFormPortalListItem, [{
	    key: "description",
	    value: function description() {
	      return {
	        item: {
	          type: Object,
	          fields: {
	            name: {
	              type: String,
	              required: true
	            }
	          },
	          required: true
	        }
	      };
	    }
	  }, {
	    key: "localization",
	    value: 	  }, {
	    key: "render",
	    value: function render() {
	      return main_core.Tag.render(_templateObject$2 || (_templateObject$2 = babelHelpers.taggedTemplateLiteral(["\n\t\t\t<div class=\"b24-network-auth-form-user-img\"></div>\n\t\t\t<div class=\"b24-network-auth-form-user-info\">\n\t\t\t\t<span class=\"b24-network-auth-form-user-name\">", "</span>\n\t\t\t</div>\n\t\t"])), this.$data.item.name);
	    }
	  }]);
	  return AuthorizeFormPortalListItem;
	}(BX.Network.Component);

	var _templateObject$3, _templateObject2;
	var AuthorizeFormPortalList = /*#__PURE__*/function (_BX$Network$Component) {
	  babelHelpers.inherits(AuthorizeFormPortalList, _BX$Network$Component);
	  function AuthorizeFormPortalList(parameters) {
	    var _this;
	    babelHelpers.classCallCheck(this, AuthorizeFormPortalList);
	    _this = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(AuthorizeFormPortalList).call(this, parameters));
	    _this.blockCache = new main_core.Cache.MemoryCache();
	    return _this;
	  }
	  babelHelpers.createClass(AuthorizeFormPortalList, [{
	    key: "description",
	    value: function description() {
	      return {
	        portalList: {
	          type: Array,
	          required: false,
	          defaultValue: []
	        }
	      };
	    }
	  }, {
	    key: "setPortalList",
	    value: 	  }, {
	    key: "localization",
	    value: 	  }, {
	    key: "handlePortalClick",
	    value: 	  }, {
	    key: "buildPortalContainer",
	    value: function buildPortalContainer(portal) {
	      var container = main_core.Tag.render(_templateObject$3 || (_templateObject$3 = babelHelpers.taggedTemplateLiteral(["\n\t\t\t<div class=\"b24-network-auth-form-user b24-network-auth-form-user-active\" onclick=\"", "\" data-auth-url=\"", "\"></div>\n\t\t"])), this.handlePortalClick.bind(this), portal.authUrl);
	      new BX.Network.AuthorizeFormPortalListItem({
	        item: portal
	      }).appendTo(container);
	      return container;
	    }
	  }, {
	    key: "getRootContainer",
	    value: function getRootContainer() {
	      var _this2 = this;
	      var portalList = this.$data.portalList;
	      return this.blockCache.remember('root', function () {
	        return main_core.Tag.render(_templateObject2 || (_templateObject2 = babelHelpers.taggedTemplateLiteral(["\n\t\t\t\t<div>\n\t\t\t\t\t<div class=\"b24-network-auth-form-block\">\n\t\t\t\t\t\t\t<div class=\"b24-network-auth-form-detail-block\">\n\t\t\t\t\t\t\t\t<span class=\"b24-network-auth-form-detail\">", "</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"b24-network-auth-form-user-block\">\n\t\t\t\t\t\t\t\t<div class=\"b24-network-auth-form-user-inner\">\n\t\t\t\t\t\t\t\t\t", "\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"b24-network-auth-form-btn-block\">\n\t\t\t\t\t\t\t\t<button class=\"ui-btn ui-btn-md ui-btn-light-border ui-btn-round ui-btn-success b24-network-auth-form-btn\" data-user-id=\"0\">", "</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t"])), _this2.$localization.B24NET_AUTH_SSO_PORTAL_LIST_SELECT, portalList.map(, _this2.$localization.B24NET_AUTH_LIST_OTHER);
	      });
	    }
	  }, {
	    key: "components",
	    value: 	  }, {
	    key: "render",
	    value: function render() {
	      var rootContainer = this.getRootContainer();
	      this.bindComponents(rootContainer);
	      return rootContainer;
	    }
	  }]);
	  return AuthorizeFormPortalList;
	}(BX.Network.Component);

	var AuthorizeFormLogin = /*#__PURE__*/function (_BX$Network$Component) {
	  babelHelpers.inherits(AuthorizeFormLogin, _BX$Network$Component);
	  function AuthorizeFormLogin() {
	    var _this;
	    var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    babelHelpers.classCallCheck(this, AuthorizeFormLogin);
	    _this = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(AuthorizeFormLogin).call(this, parameters));
	    _this.blockCache = {};
	    _this.formState = {
	      loginValid: true,
	      currentLogin: '',
	      country: '',
	      isPhone: false
	    };
	    return _this;
	  }
	  babelHelpers.createClass(AuthorizeFormLogin, [{
	    key: "description",
	    value: function description() {
	      return {
	        loader: {
	          type: BX.Network.ComponentTransport,
	          required: true
	        },
	        phoneEnabled: {
	          type: Boolean,
	          defaultValue: true
	        },
	        currentLogin: {
	          type: String,
	          required: false,
	          defaultValue: ''
	        },
	        socialServices: {
	          type: Array,
	          required: false,
	          defaultValue: []
	        },
	        socialServicesNotification: {
	          type: String,
	          required: false,
	          defaultValue: ''
	        },
	        defaultCountry: {
	          type: String,
	          defaultValue: ''
	        },
	        countryTopList: {
	          type: Array,
	          defaultValue: []
	        },
	        showQrCodeButton: {
	          type: Boolean,
	          defaultValue: false
	        },
	        portal: {
	          type: Object,
	          required: false,
	          fields: {
	            id: {
	              type: String
	            },
	            host: {
	              type: String
	            },
	            ssoEnabled: {
	              type: Boolean
	            }
	          }
	        }
	      };
	    }
	  }, {
	    key: "components",
	    value: function components() {
	      var _this2 = this;
	      return {
	        MESSAGE: function MESSAGE() {
	          return new BX.Network.Message({
	            type: BX.Network.MessageType.TYPE_ERROR
	          });
	        },
	        INPUT: function INPUT() {
	          return new BX.Network.LoginInput({
	            value: _this2.$data.currentLogin,
	            defaultCountry: _this2.$data.defaultCountry,
	            countryTopList: _this2.$data.countryTopList,
	            phoneEnabled: _this2.$data.phoneEnabled
	          }).on('change', _this2.handleLoginChange.bind(_this2));
	        },
	        SOCIALSERVICES: function SOCIALSERVICES() {
	          return new BX.Network.SocialServices({
	            socialServices: _this2.$data.socialServices
	          }).on('showNotification', function (notificationParams) {
	            _this2.$components.SOCIALSERVICES_NOTIFICATION.setMessage(notificationParams.html);
	          });
	        },
	        SOCIALSERVICES_NOTIFICATION: function SOCIALSERVICES_NOTIFICATION() {
	          return new BX.Network.Message({
	            message: _this2.$data.socialServicesNotification,
	            type: BX.Network.MessageType.TYPE_ALERT_WARNING
	          });
	        },
	        QRCODEBUTTON: function QRCODEBUTTON() {
	          return new BX.Network.QrCodeButton().on('click', ;
	        }
	      };
	    }
	  }, {
	    key: "localization",
	    value: 	  }, {
	    key: "render",
	    value: function render() {
	      var _this3 = this;
	      if (!this.blockCache.ROOT) {
	        this.blockCache.ROOT = BX.create('FORM', {
	          events: {
	            click: BX.delegateEvent({
	              attr: 'data-action'
	            }, BX.delegate(function (e) {
	              this.routeAction(BX.proxy_context.getAttribute('data-action'), BX.proxy_context);
	              e.preventDefault();
	              e.stopPropagation();
	              return false;
	            }, this)),
	            submit: function submit(e) {
	              _this3.submitHandler();
	              e.preventDefault();
	              e.stopPropagation();
	              return false;
	            }
	          },
	          html: Mustache.render("\n\t\t\t\t\t\t<div class=\"b24-network-auth-form-block\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"b24-network-auth-form-field-block\" data-component=\"INPUT\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div data-component=\"MESSAGE\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"b24-network-auth-form-separator\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"b24-network-auth-form-separator-text\">{{message.B24NET_SEPARATOR}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"b24-network-auth-form-social-block\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"b24-network-auth-form-social-title\">{{message.B24NET_AUTH_USE_SOC}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div data-component=\"SOCIALSERVICES_NOTIFICATION\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"b24-network-auth-form-flex-wrapper\" id=\"b24-network-auth-form-flex-wrapper\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"b24-network-auth-form-flex-wrapper-inner\" data-component=\"SOCIALSERVICES\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{#showQrCodeButton}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"b24-network-auth-form-qr\" data-role=\"b24-network-auth-form-qr\" data-component=\"QRCODEBUTTON\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{/showQrCodeButton}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"b24-network-auth-form-btn-block\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"ui-btn ui-btn-md ui-btn-success ui-btn-round b24-network-auth-form-btn\" data-action=\"submit\">{{message.B24NET_AUTH_SUBMIT}}</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"ui-btn ui-btn-md ui-btn-light ui-btn-round b24-network-auth-form-btn\" data-action=\"forgot\">{{message.B24NET_AUTH_FORGOT}}</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{#showSsoSignInButton}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"ui-btn ui-btn-md ui-btn-light ui-btn-round b24-network-auth-form-btn\" data-action=\"sso-sign-in\">{{message.B24NET_AUTH_SSO_SIGN_IN}}</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{/showSsoSignInButton}}\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t", {
	            message: this.$localization,
	            showQrCodeButton: this.$data.showQrCodeButton,
	            showSsoSignInButton: typeof this.$data.portal.ssoEnabled === 'undefined' ? true : this.$data.portal.ssoEnabled
	          })
	        });
	      }
	      this.$components.SOCIALSERVICES.setAvailableServices(true);
	      this.bindComponents(this.blockCache.ROOT);
	      return this.blockCache.ROOT;
	    }
	  }, {
	    key: "routeAction",
	    value: function routeAction(action) {
	      switch (action) {
	        case 'forgot':
	          this.forgotHandler();
	          break;
	        case 'submit':
	          this.submitHandler();
	          break;
	        case 'sso-sign-in':
	          this.callEvent('sso-sign-in', [this.formState.currentLogin]);
	          break;
	        default:
	        // pass
	      }
	    }
	  }, {
	    key: "handleLoginChange",
	    value: function handleLoginChange(controlState) {
	      this.formState.currentLogin = controlState.value;
	      this.formState.loginValid = controlState.loginValid;
	      this.formState.isPhone = controlState.isPhone;
	      this.formState.country = controlState.country;
	    }
	  }, {
	    key: "forgotHandler",
	    value: function forgotHandler() {
	      this.callEvent('forgot', [this.formState.currentLogin]);
	    }
	  }, {
	    key: "submitHandler",
	    value: function submitHandler() {
	      if (this.formState.currentLogin.length > 0) {
	        if (this.formState.loginValid) {
	          if (this.formState.isPhone) {
	            this.checkLogin({
	              login: this.formState.currentLogin,
	              country: this.formState.country
	            });
	          } else {
	            this.checkLogin({
	              login: this.formState.currentLogin,
	              portalInfo: this.$data.portal,
	              currentUri: window.location.href
	            });
	          }
	        } else {
	          this.showError();
	        }
	      }
	    }
	  }, {
	    key: "checkLogin",
	    value: function checkLogin(checkParam) {
	      var _this4 = this;
	      this.hideError();
	      this.$data.loader.query('b24network.authorize.checkLogin', checkParam).then(function (result) {
	        if (result.data && result.data.length > 0) {
	          var isSocservAuth = result.data.some(function (item) {
	            return item.AUTH_TYPE.filter(.length === 0;
	          });
	          if (!isSocservAuth) {
	            _this4.callEvent('submit', [result.data]);
	            return;
	          }
	          _this4.emitAnalyticsEvent(b24network_component_useractions.AnalyticsEventType.ERROR_USE_SOCSERV_EMAIL);
	          _this4.callEvent('login-socserv', [_this4.formState.currentLogin, result.data]);
	        } else {
	          _this4.showError(_this4.formState.isPhone ? _this4.$localization.B24NET_AUTH_NOTFOUND_PHONE : _this4.$localization.B24NET_AUTH_NOTFOUND_LOGIN);
	          _this4.emitAnalyticsEvent(_this4.formState.isPhone ? b24network_component_useractions.AnalyticsEventType.ERROR_PHONE_NOT_FOUND : b24network_component_useractions.AnalyticsEventType.ERROR_EMAIL_NOT_FOUND);
	        }
	      })["catch"](;
	    }
	  }, {
	    key: "showError",
	    value: function showError() {
	      var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	      this.$components.MESSAGE.setMessage(message);
	      this.blockCache.ROOT.classList.add('b24-network-auth-form-field-input-block-error');
	    }
	  }, {
	    key: "hideError",
	    value: function hideError() {
	      this.$components.MESSAGE.setMessage('');
	      this.blockCache.ROOT.classList.remove('b24-network-auth-form-field-input-block-error');
	    }
	  }]);
	  return AuthorizeFormLogin;
	}(BX.Network.Component);

	function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
	function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$1(Object(source), !0).forEach(function (key) { babelHelpers.defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
				var AuthorizeFormAuthorize = /*#__PURE__*/function (_BX$Network$Component) {
	  babelHelpers.inherits(AuthorizeFormAuthorize, _BX$Network$Component);
	  function AuthorizeFormAuthorize(parameters) {
	    var _this;
	    babelHelpers.classCallCheck(this, AuthorizeFormAuthorize);
	    _this = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(AuthorizeFormAuthorize).call(this, parameters));
	    _this.blockCache = {};
	    _this.formState = {
	      password: '',
	      remember: true,
	      agree_news: '',
	      agree_webinar: ''
	    };
	    return _this;
	  }
	  babelHelpers.createClass(AuthorizeFormAuthorize, [{
	    key: "description",
	    value: function description() {
	      return {
	        loader: {
	          type: BX.Network.ComponentTransport,
	          required: true
	        },
	        currentUser: {
	          type: Object
	        },
	        captcha: {
	          type: Object,
	          fields: {
	            code: {
	              type: String
	            },
	            value: {
	              type: String,
	              defaultValue: ''
	            },
	            url: {
	              type: String
	            }
	          },
	          defaultValue: {}
	        },
	        socialServices: {
	          type: Array,
	          required: false,
	          defaultValue: []
	        },
	        socialServicesNotification: {
	          type: String,
	          required: false,
	          defaultValue: ''
	        },
	        showTerms: {
	          type: Boolean,
	          defaultValue: false
	        },
	        url: {
	          type: Object,
	          fields: {
	            terms: {
	              type: String
	            },
	            privacy: {
	              type: String
	            },
	            email: {
	              type: String
	            }
	          }
	        },
	        successPage: {
	          type: String,
	          defaultValue: ''
	        }
	      };
	    }
	  }, {
	    key: "localization",
	    value: function localization() {
	      return {
	        B24NET_AUTH_USE_SOC: BX.message('B24NET_AUTH_USE_SOC'),
	        B24NET_AUTH_SUBMIT: BX.message('B24NET_AUTH_SUBMIT'),
	        B24NET_AUTH_FORGOT: BX.message('B24NET_AUTH_FORGOT'),
	        B24NET_AUTH_AGREE_TERMS: BX.message('B24NET_AUTH_AGREE_TERMS').replace('#URL_TERMS#', this.$data.url.terms).replace('#URL_PRIVACY#', this.$data.url.privacy).replace('#URL_EMAIL#', this.$data.url.email),
	        B24NET_AUTH_AGREE_WEBINAR: BX.message('B24NET_AUTH_AGREE_WEBINAR'),
	        B24NET_AUTH_AGREE_NEWS_LINK: BX.message('B24NET_AUTH_AGREE_NEWS_LINK').replace('#URL_EMAIL#', this.$data.url.email)
	      };
	    }
	  }, {
	    key: "components",
	    value: function components() {
	      var _this2 = this;
	      return {
	        CURRENT_USER: function CURRENT_USER() {
	          return new BX.Network.AuthorizeFormLoginListItem({
	            active: false,
	            item: _this2.$data.currentUser
	          });
	        },
	        PASSWORD: function PASSWORD() {
	          return new BX.Network.AuthorizeFormPassword({
	            currentValue: _this2.formState.password,
	            remember: _this2.formState.remember,
	            errorMessage: ''
	          }).on('change', function (password, remember) {
	            _this2.hideError();
	            _this2.formState.password = password;
	            _this2.formState.remember = remember;
	          });
	        },
	        CAPTCHA: function CAPTCHA() {
	          return new BX.Network.AuthorizeFormCaptcha({
	            loader: _this2.$data.loader,
	            url: _this2.$data.captcha.url
	          }).on('change', function (value) {
	            _this2.$data.captcha.value = value;
	          }).on('reload', function (result) {
	            _this2.$data.captcha.code = result.captchaCode;
	            _this2.$data.captcha.url = result.captchaUrl;
	          });
	        },
	        SOCIALSERVICES: function SOCIALSERVICES() {
	          return new BX.Network.SocialServices({
	            socialServices: _this2.$data.socialServices
	          }).on('showNotification', ;
	        },
	        SOCIALSERVICES_NOTIFICATION: function SOCIALSERVICES_NOTIFICATION() {
	          return new BX.Network.Message({
	            message: _this2.$data.socialServicesNotification,
	            type: BX.Network.MessageType.TYPE_ALERT_WARNING
	          });
	        }
	      };
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var _this3 = this;
	      if (!this.blockCache.ROOT) {
	        this.blockCache.ROOT = BX.create('FORM', {
	          events: {
	            click: BX.delegateEvent({
	              attr: 'data-action'
	            }, BX.delegate(function (e) {
	              this.routeAction(BX.proxy_context.getAttribute('data-action'), BX.proxy_context);
	              e.preventDefault();
	              e.stopPropagation();
	              return false;
	            }, this)),
	            submit: function submit(e) {
	              _this3.submitHandler();
	              e.preventDefault();
	              e.stopPropagation();
	              return false;
	            }
	          }
	        });
	      }
	      var allowedServices = [];
	      var showPassword = false;
	      var showCaptcha = false;
	      var showSocialServices = false;
	      var _iterator = _createForOfIteratorHelper$1(this.$data.currentUser.AUTH_TYPE),
	        _step;
	      try {
	        for (_iterator.s(); !(_step = _iterator.n()).done;) {
	          var authType = _step.value;
	          if (authType.type === 'password') {
	            showPassword = true;
	            if (this.$data.captcha.code) {
	              showCaptcha = true;
	            }
	          } else if (authType.type === 'socialservices') {
	            allowedServices.push(authType.service);
	          }
	        }
	      } catch (err) {
	        _iterator.e(err);
	      } finally {
	        _iterator.f();
	      }
	      if (allowedServices.length > 0) {
	        showSocialServices = true;
	        this.$components.SOCIALSERVICES.setAvailableServices(allowedServices);
	      }
	      BX.adjust(this.blockCache.ROOT, {
	        html: Mustache.render("\n\t\t\t\t\t<div class=\"b24-network-auth-form-block\">\n\t\t\t\t\t\t<div class=\"b24-network-auth-form-user-block\">\n\t\t\t\t\t\t\t<div class=\"b24-network-auth-form-user-inner\">\n\t\t\t\t\t\t\t\t<div class=\"b24-network-auth-form-user\" data-component=\"CURRENT_USER\"></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t{{#showPassword}}\n\t\t\t\t\t\t<div data-component=\"PASSWORD\"></div>\n\t\t\t\t\t\t{{/showPassword}}\n\t\t\t\t\t\t{{#showCaptcha}}\n\t\t\t\t\t\t<div data-component=\"CAPTCHA\"></div>\n\t\t\t\t\t\t{{/showCaptcha}}\n\t\t\t\t\t\t{{#showSocialServices}}\n\t\t\t\t\t\t<div class=\"b24-network-auth-form-social-block\">\n\t\t\t\t\t\t\t<span class=\"b24-network-auth-form-social-title\">{{message.B24NET_AUTH_USE_SOC}}</span>\n\t\t\t\t\t\t\t<div data-component=\"SOCIALSERVICES_NOTIFICATION\"></div>\n\t\t\t\t\t\t\t<div data-component=\"SOCIALSERVICES\"></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t{{/showSocialServices}}\n\t\t\t\t\t\t{{#showTerms}}\n\t\t\t\t\t\t<div class=\"b24-network-auth-form-field-checkbox\">\n\t\t\t\t\t\t\t<div class=\"b24-network-auth-form-field-checkbox-inner\">\n\t\t\t\t\t\t\t\t<span class=\"b24-network-auth-form-field-text b24-network-auth-form-field-text-agreement\">{{{message.B24NET_AUTH_AGREE_TERMS}}}</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"b24-network-auth-form-field-checkbox-inner\">\n\t\t\t\t\t\t\t<input class=\"b24-network-auth-form-field-check\" type=\"checkbox\" name=\"agree_news\" id=\"agree_news\">\n\t\t\t\t\t\t\t<label for=\"agree_news\" class=\"b24-network-auth-form-field-text b24-network-auth-form-field-text-label\">{{{message.B24NET_AUTH_AGREE_NEWS_LINK}}}</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"b24-network-auth-form-field-checkbox-inner\">\n\t\t\t\t\t\t\t<input class=\"b24-network-auth-form-field-check\" type=\"checkbox\" name=\"agree_webinar\" id=\"agree_webinar\">\n\t\t\t\t\t\t\t<label for=\"agree_webinar\" class=\"b24-network-auth-form-field-text b24-network-auth-form-field-text-label\">{{{message.B24NET_AUTH_AGREE_WEBINAR}}}</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t{{/showTerms}}\n\t\t\t\t\t\t{{#showPassword}}\n\t\t\t\t\t\t<div class=\"b24-network-auth-form-btn-block\">\n\t\t\t\t\t\t\t<input style=\"display: none;\" name=\"login\" value=\"{{currentLogin}}\" />\n\t\t\t\t\t\t\t<button class=\"ui-btn ui-btn-md ui-btn-success ui-btn-round b24-network-auth-form-btn\" data-action=\"submit\">{{message.B24NET_AUTH_SUBMIT}}</button>\n\t\t\t\t\t\t\t<button class=\"ui-btn ui-btn-md ui-btn-light ui-btn-round b24-network-auth-form-btn\" data-action=\"forgot\">{{message.B24NET_AUTH_FORGOT}}</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t{{/showPassword}}\n\t\t\t\t\t</div>\n\t\t\t\t", {
	          showPassword: showPassword,
	          showCaptcha: showCaptcha,
	          showSocialServices: showSocialServices,
	          currentLogin: this.$data.currentUser.LOGIN,
	          showTerms: this.$data.showTerms,
	          message: this.$localization
	        })
	      });
	      this.$components.CURRENT_USER.setItem(this.$data.currentUser);
	      this.bindComponents(this.blockCache.ROOT);
	      if (this.$data.showTerms) {
	        BX.bind(this.blockCache.ROOT.querySelector('#agree_news'), 'click', function () {
	          _this3.formState.agree_news = _this3.blockCache.ROOT.querySelector('#agree_news').checked;
	        });
	      }
	      if (this.$data.showTerms) {
	        BX.bind(this.blockCache.ROOT.querySelector('#agree_webinar'), 'click', function () {
	          _this3.formState.agree_webinar = _this3.blockCache.ROOT.querySelector('#agree_webinar').checked;
	        });
	      }
	      return this.blockCache.ROOT;
	    }
	  }, {
	    key: "routeAction",
	    value: function routeAction(action) {
	      switch (action) {
	        case 'forgot':
	          this.forgotHandler();
	          break;
	        case 'submit':
	          this.submitHandler();
	          break;
	      }
	    }
	  }, {
	    key: "forgotHandler",
	    value: function forgotHandler() {
	      this.callEvent('forgot', [this.$data.currentUser.LOGIN]);
	    }
	  }, {
	    key: "submitHandler",
	    value: function submitHandler() {
	      var _this4 = this;
	      if (this.formState.password.length > 0) {
	        var data = {
	          login: this.$data.currentUser.LOGIN,
	          password: this.formState.password,
	          remember: this.formState.remember ? '1' : '0'
	        };
	        if (this.$data.showTerms) {
	          data = _objectSpread$1(_objectSpread$1({}, data), {}, {
	            agree_news: this.formState.agree_news ? '1' : '0',
	            agree_webinar: this.formState.agree_webinar ? '1' : '0'
	          });
	        }
	        if (this.$data.captcha.code) {
	          data = _objectSpread$1(_objectSpread$1({}, data), {}, {
	            captcha_sid: this.$data.captcha.code,
	            captcha_word: this.$data.captcha.value
	          });
	        }
	        this.$data.loader.query('b24network.authorize.check', data).then(function (result) {
	          if (_this4.$data.successPage.length > 0) {
	            window.location.href = _this4.$data.successPage;
	          } else {
	            var redirectToPortal = 
	            if (new URL(window.location.href).searchParams.get('redirect_uri')) {
	              // send analytics event
	              var analytics = BX.Network.Analytics.getInstance();
	              if (analytics) {
	                analytics.registerEvent(b24network_component_useractions.AnalyticsEventType.REDIRECT_TO_PORTAL).then(redirectToPortal, redirectToPortal);
	              } else {
	                redirectToPortal();
	              }
	              return true;
	            }
	            _this4.callEvent('success');
	          }
	        }, function (result) {
	          var errorMessage = '';
	          var _iterator2 = _createForOfIteratorHelper$1(result.errors),
	            _step2;
	          try {
	            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
	              var error = _step2.value;
	              errorMessage += error.message;
	              if (error.customData && error.customData.captcha) {
	                _this4.$data.captcha.code = error.customData.captcha.captchaCode;
	                _this4.$data.captcha.url = error.customData.captcha.captchaUrl;
	                _this4.$components.CAPTCHA.setUrl(_this4.$data.captcha.url);
	                _this4.emitAnalyticsEvent(b24network_component_useractions.AnalyticsEventType.ERROR_WRONG_PASSWORD_OR_CAPTCHA);
	              } else {
	                _this4.$data.captcha.code = '';
	                _this4.emitAnalyticsEvent(b24network_component_useractions.AnalyticsEventType.ERROR_WRONG_PASSWORD);
	              }
	              _this4.update();
	            }
	          } catch (err) {
	            _iterator2.e(err);
	          } finally {
	            _iterator2.f();
	          }
	          _this4.showError(errorMessage);
	        });
	      } else {
	        this.showError('');
	      }
	      return false;
	    }
	  }, {
	    key: "showError",
	    value: function showError(message) {
	      this.$components.PASSWORD.setErrorMessage(message);
	      this.blockCache.ROOT.classList.add('b24-network-auth-form-field-input-block-error');
	    }
	  }, {
	    key: "hideError",
	    value: function hideError() {
	      this.$components.PASSWORD.setErrorMessage('');
	      this.blockCache.ROOT.classList.remove('b24-network-auth-form-field-input-block-error');
	    }
	  }]);
	  return AuthorizeFormAuthorize;
	}(BX.Network.Component);

	var AuthorizeFormPassword = /*#__PURE__*/function (_BX$Network$Component) {
	  babelHelpers.inherits(AuthorizeFormPassword, _BX$Network$Component);
	  function AuthorizeFormPassword(parameters) {
	    var _this;
	    babelHelpers.classCallCheck(this, AuthorizeFormPassword);
	    _this = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(AuthorizeFormPassword).call(this, parameters));
	    _this.formElements = {};
	    _this.blockCache = {};
	    _this.handleChange = _this.handleChange.bind(babelHelpers.assertThisInitialized(_this));
	    return _this;
	  }
	  babelHelpers.createClass(AuthorizeFormPassword, [{
	    key: "description",
	    value: function description() {
	      return {
	        currentValue: {
	          type: String,
	          defaultValue: ''
	        },
	        remember: {
	          type: Boolean,
	          defaultValue: true
	        },
	        errorMessage: {
	          type: String,
	          defaultValue: ''
	        }
	      };
	    }
	  }, {
	    key: "components",
	    value: function components() {
	      return {
	        MESSAGE: function MESSAGE() {
	          return new BX.Network.Message({
	            type: BX.Network.MessageType.TYPE_ERROR
	          });
	        }
	      };
	    }
	  }, {
	    key: "localization",
	    value: 	  }, {
	    key: "setCurrentValue",
	    value: function setCurrentValue(value) {
	      if (!!this.formElements.PASSWORD) {
	        this.formElements.PASSWORD.value = value;
	      }
	      this.$data.currentValue = value;
	    }
	  }, {
	    key: "setErrorMessage",
	    value: function setErrorMessage(errorMessage) {
	      this.$data.errorMessage = errorMessage;
	      this.$components.MESSAGE.setMessage(this.$data.errorMessage);
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var _this2 = this;
	      if (!this.blockCache.ROOT) {
	        this.blockCache.ROOT = BX.create('DIV', {
	          html: Mustache.render("\n<div class=\"b24-network-auth-form-field-block\">\n\t<label class=\"b24-network-auth-form-field-label\" for=\"password\">{{message.B24NET_AUTH_PASSWORD_TITLE}}</label>\n\t<div class=\"b24-network-auth-form-field-input-block\">\n\t\t<input class=\"b24-network-auth-form-field-input\" type=\"password\" id=\"password\">\n\t\t<div data-component=\"MESSAGE\"></div>\n\t</div>\n</div>\n<div class=\"b24-network-auth-form-field-checkbox\">\n\t<div class=\"b24-network-auth-form-field-checkbox-inner\">\n\t\t<input class=\"b24-network-auth-form-field-check\" type=\"checkbox\" id=\"remember\" checked=\"checked\">\n\t\t<label for=\"remember\" class=\"b24-network-auth-form-field-text b24-network-auth-form-field-text-label\">\n\t\t\t{{message.B24NET_AUTH_PASSWORD_REMEMBER}}\n\t\t</label>\n\t</div>\n</div>\n", {
	            message: this.$localization
	          })
	        });
	        this.$components.MESSAGE.appendTo(this.blockCache.ROOT.querySelector('[data-component="MESSAGE"]'));
	      }
	      if (!this.formElements.PASSWORD) {
	        this.formElements.PASSWORD = this.blockCache.ROOT.querySelector('#password');
	        BX.bind(this.formElements.PASSWORD, 'bxchange', BX.defer(this.handleChange));
	        BX.defer(();
	      }
	      if (!this.formElements.REMEMBER) {
	        this.formElements.REMEMBER = this.blockCache.ROOT.querySelector('#remember');
	        BX.bind(this.formElements.REMEMBER, 'click', this.handleChange);
	      }
	      this.formElements.PASSWORD.value = this.$data.currentValue;
	      return this.blockCache.ROOT;
	    }
	  }, {
	    key: "handleChange",
	    value: function handleChange(e) {
	      if (this.$data.currentValue !== this.formElements.PASSWORD.value || this.$data.remember !== this.formElements.REMEMBER.checked) {
	        this.$data.currentValue = this.formElements.PASSWORD.value;
	        this.$data.remember = this.formElements.REMEMBER.checked;
	        this.callEvent('change', [this.$data.currentValue, this.$data.remember]);
	      }
	    }
	  }]);
	  return AuthorizeFormPassword;
	}(BX.Network.Component);

	function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
	function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$2(Object(source), !0).forEach(function (key) { babelHelpers.defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$2(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
	var AuthorizeFormForgotPassword = /*#__PURE__*/function (_BX$Network$Component) {
	  babelHelpers.inherits(AuthorizeFormForgotPassword, _BX$Network$Component);
	  function AuthorizeFormForgotPassword(parameters, options) {
	    var _this;
	    babelHelpers.classCallCheck(this, AuthorizeFormForgotPassword);
	    options = options || {};
	    options.stateToAnalyticsEventMap = {
	      login: b24network_component_useractions.AnalyticsEventType.SHOW_FORGOT_PASSWORD_PAGE,
	      emailconfirm: b24network_component_useractions.AnalyticsEventType.SEND_EMAIL_RESTORE_PASSWORD
	    };
	    _this = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(AuthorizeFormForgotPassword).call(this, parameters, options));
	    _this.blockCache = {};
	    _this.formState = {};
	    _this.items = {};
	    _this.itemData = {};
	    _this.beforeBackState = null;
	    return _this;
	  }
	  babelHelpers.createClass(AuthorizeFormForgotPassword, [{
	    key: "description",
	    value: function description() {
	      return {
	        currentLogin: {
	          type: String,
	          defaultValue: ''
	        },
	        phoneEnabled: {
	          type: Boolean,
	          defaultValue: true
	        },
	        defaultCountry: {
	          type: String,
	          defaultValue: ''
	        },
	        countryTopList: {
	          type: Array,
	          defaultValue: []
	        },
	        showBack: {
	          type: Boolean,
	          defaultValue: false
	        },
	        loader: {
	          type: BX.Network.ComponentTransport,
	          required: true
	        },
	        currentState: {
	          type: String,
	          defaultValue: 'login'
	        },
	        loginList: {
	          type: Array
	        },
	        currentUser: {
	          type: Object
	        },
	        captcha: {
	          type: Object,
	          fields: {
	            code: {
	              type: String
	            },
	            value: {
	              type: String,
	              defaultValue: ''
	            },
	            url: {
	              type: String
	            }
	          },
	          defaultValue: {}
	        }
	      };
	    }
	  }, {
	    key: "setShowBack",
	    value: function setShowBack(value, beforeBackState) {
	      if (value) {
	        if (!beforeBackState) {
	          throw new Error('Before back state is required');
	        }
	        this.beforeBackState = beforeBackState;
	      } else {
	        this.beforeBackState = null;
	      }
	      this.$data.showBack = value;
	    }
	  }, {
	    key: "localization",
	    value: 	  }, {
	    key: "components",
	    value: function components() {
	      var _this2 = this;
	      return {
	        MESSAGE: function MESSAGE() {
	          return new BX.Network.Message({
	            type: BX.Network.MessageType.TYPE_ERROR
	          });
	        },
	        RESULT: function RESULT() {
	          return new BX.Network.Message({
	            type: BX.Network.MessageType.TYPE_OK
	          });
	        },
	        INPUT: function INPUT() {
	          return new BX.Network.LoginInput({
	            value: _this2.$data.currentLogin,
	            defaultCountry: _this2.$data.defaultCountry,
	            countryTopList: _this2.$data.countryTopList,
	            phoneEnabled: _this2.$data.phoneEnabled
	          }).on('change', _this2.handleLoginChange.bind(_this2));
	        },
	        CAPTCHA: function CAPTCHA() {
	          return new BX.Network.AuthorizeFormCaptcha({
	            loader: _this2.$data.loader,
	            code: _this2.$data.captcha.code,
	            url: _this2.$data.captcha.url
	          }).on('change', function (value) {
	            _this2.$data.captcha.value = value;
	          }).on('reload', function (result) {
	            _this2.$data.captcha.code = result.captchaCode;
	            _this2.$data.captcha.url = result.captchaUrl;
	          });
	        }
	      };
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var _this3 = this;
	      if (!this.blockCache.ROOT) {
	        this.blockCache.ROOT = BX.create('FORM', {
	          events: {
	            click: BX.delegateEvent({
	              attr: 'data-action'
	            }, BX.delegate(function () {
	              switch (BX.proxy_context.getAttribute('data-action')) {
	                case 'return':
	                  this.callEvent('return', [this.beforeBackState]);
	                  break;
	                case 'open':
	                default:
	                  this.itemClickHandler(BX.proxy_context.getAttribute('data-user-id'));
	                  break;
	              }
	              return false;
	            }, this)),
	            submit: function submit(e) {
	              _this3.submitHandler();
	              e.preventDefault();
	              e.stopPropagation();
	              return false;
	            }
	          }
	        });
	      }
	      BX.adjust(this.blockCache.ROOT, {
	        html: this.getStateHtml()
	      });
	      this.bindComponents(this.blockCache.ROOT);
	      if (this.$data.currentState === 'loginlist') {
	        var listNode = this.blockCache.ROOT.querySelector('[data-component=ITEMS]');
	        BX.cleanNode(listNode);
	        this.$data.loginList.forEach(function (listItem) {
	          if (typeof _this3.items[listItem.ID] === 'undefined') {
	            _this3.items[listItem.ID] = new BX.Network.AuthorizeFormLoginListItem({
	              active: true,
	              allowDelete: false,
	              item: listItem
	            });
	          }
	          _this3.itemData[listItem.ID] = listItem;
	          var listItemNode = BX.create('DIV', {
	            props: {
	              className: 'b24-network-auth-form-user b24-network-auth-form-user-active'
	            },
	            attrs: {
	              'data-user-id': listItem.ID,
	              'data-action': 'open'
	            }
	          });
	          _this3.items[listItem.ID].appendTo(listItemNode);
	          listNode.appendChild(listItemNode);
	        });
	      }
	      return this.blockCache.ROOT;
	    }
	  }, {
	    key: "getStateHtml",
	    value: function getStateHtml() {
	      switch (this.$data.currentState) {
	        case 'loginlist':
	          return Mustache.render("\n  <div class=\"b24-network-auth-form-block\">\n  \t<div class=\"b24-network-auth-form-detail-block\">\n  \t\t<span class=\"b24-network-auth-form-detail\">{{message.B24NET_AUTH_FORGOT_LOGINLIST_TITLE}}</span>\n  \t</div>\n  \t<div class=\"b24-network-auth-form-user-block\">\n  \t\t<div class=\"b24-network-auth-form-user-inner\" data-component=\"ITEMS\"></div>\n  \t</div>\n  </div>\n", {
	            message: this.$localization
	          });
	          break;
	        case 'emailconfirm':
	          return Mustache.render("\n\t\t\t\t\t\t<div class=\"b24-network-auth-form-block\">\n\t\t\t\t\t\t\t<div data-component=\"RESULT\"></div>\n\t\t\t\t\t\t\t<div class=\"b24-network-auth-form-btn-block\">\n\t\t\t\t\t\t\t\t<button class=\"ui-btn ui-btn-md ui-btn-success ui-btn-round b24-network-auth-form-btn\" data-action=\"submit\">{{message.B24NET_AUTH_SUBMIT_AUTH}}</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t", {
	            message: this.$localization
	          });
	          break;
	        case 'login':
	        default:
	          return Mustache.render("\n  <div class=\"b24-network-auth-form-block\">\n  \t<div class=\"b24-network-auth-form-field-block\" data-component=\"INPUT\"></div>\n  \t{{#showCaptcha}}\n  \t<div data-component=\"CAPTCHA\"></div>\n  \t{{/showCaptcha}}\n  \t<div data-component=\"MESSAGE\"></div>\n  \t<div class=\"b24-network-auth-form-btn-block\">\n  \t\t<button class=\"ui-btn ui-btn-md ui-btn-success ui-btn-round b24-network-auth-form-btn\" data-action=\"submit\">{{message.B24NET_AUTH_SUBMIT}}</button>\n    \t{{#showBack}}\n    \t<a href=\"javascript:;\" class=\"ui-btn ui-btn-md ui-btn-light ui-btn-round b24-network-auth-form-btn\" data-action=\"return\">{{message.B24NET_AUTH_BACK}}</a>\n    \t{{/showBack}}\n  \t</div>\n  </div>\n", {
	            message: this.$localization,
	            showCaptcha: this.$data.captcha.enabled,
	            showBack: this.$data.showBack
	          });
	      }
	    }
	  }, {
	    key: "handleLoginChange",
	    value: function handleLoginChange(controlState) {
	      this.formState.currentLogin = controlState.value;
	      this.formState.loginValid = controlState.loginValid;
	      this.formState.isPhone = controlState.isPhone;
	      this.formState.country = controlState.country;
	    }
	  }, {
	    key: "submitHandler",
	    value: function submitHandler() {
	      if (this.$data.currentState === 'login') {
	        if (this.formState.hasOwnProperty('currentLogin') && this.formState.currentLogin.length > 0) {
	          if (this.formState.loginValid) {
	            if (this.formState.isPhone) {
	              this.checkLogin({
	                login: this.formState.currentLogin
	              });
	            } else {
	              this.checkLogin({
	                login: this.formState.currentLogin,
	                country: this.formState.country
	              });
	            }
	          } else {
	            this.showError();
	          }
	        }
	      } else if (this.$data.currentState === 'emailconfirm') {
	        this.callEvent('authorize', [this.$data.currentUser]);
	      }
	    }
	  }, {
	    key: "itemClickHandler",
	    value: function itemClickHandler(id) {
	      if (typeof this.itemData[id] !== 'undefined') {
	        this.$data.currentUser = this.itemData[id];
	        this.callRestore();
	      }
	    }
	  }, {
	    key: "checkLogin",
	    value: function checkLogin(checkParam) {
	      var _this4 = this;
	      this.hideError();
	      this.$data.loader.query('b24network.authorize.checkLogin', checkParam).then(function (result) {
	        if (result.data && result.data.length > 0) {
	          if (result.data.length > 1) {
	            _this4.$data.currentState = 'loginlist';
	            _this4.$data.loginList = result.data;
	            _this4.update();
	          } else {
	            _this4.$data.currentUser = result.data[0];
	            _this4.callRestore();
	          }
	        } else {
	          _this4.showError(_this4.formState.isPhone ? _this4.$localization.B24NET_AUTH_NOTFOUND_PHONE : _this4.$localization.B24NET_AUTH_NOTFOUND_LOGIN);
	        }
	      }, ;
	    }
	  }, {
	    key: "callRestore",
	    value: function callRestore() {
	      var _this5 = this;
	      if (this.$data.currentUser) {
	        var data = {
	          userLogin: this.$data.currentUser.LOGIN,
	          byPhone: this.$data.currentUser.FOUND_BY_PHONE ? 1 : 0
	        };
	        if (this.$data.captcha.enabled) {
	          data = _objectSpread$2(_objectSpread$2({}, data), {}, {
	            captchaSid: this.$data.captcha.code,
	            captchaWord: this.$data.captcha.value
	          });
	        }
	        this.$data.loader.query('b24network.authorize.restorePassword', data).then(function (result) {
	          if (result.data.TYPE === 'PHONE') {
	            _this5.callEvent('result', [result.data]);
	          } else {
	            _this5.$components.RESULT.setMessage(result.data.MESSAGE || '');
	            _this5.setCurrentState('emailconfirm').setCurrentLogin(result.data.LOGIN).update();
	          }
	        }, function (result) {
	          var errorMessage = '';
	          result.errors.forEach(function (error) {
	            errorMessage += error.message;
	            if (error.customData && error.customData.captcha) {
	              _this5.$data.captcha.code = error.customData.captcha.captchaCode;
	              _this5.$data.captcha.url = error.customData.captcha.captchaUrl;
	              _this5.$components.CAPTCHA.setUrl(_this5.$data.captcha.url);
	            }
	          });
	          _this5.showError(errorMessage);
	        });
	      }
	    }
	  }, {
	    key: "showError",
	    value: function showError() {
	      var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	      this.$components.MESSAGE.setMessage(message);
	      this.blockCache.ROOT.classList.add('b24-network-auth-form-field-input-block-error');
	    }
	  }, {
	    key: "hideError",
	    value: function hideError() {
	      this.$components.MESSAGE.setMessage('');
	      this.blockCache.ROOT.classList.remove('b24-network-auth-form-field-input-block-error');
	    } // #region override
	  }, {
	    key: "emitAnalyticsEvent",
	    value: function emitAnalyticsEvent(eventName) {
	      var eventArguments = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	      if (eventName === 'mail_send_restore_password' && this.$data.currentUser && this.$data.currentUser.ID) {
	        if (!main_core.Type.isObject(eventArguments)) {
	          eventArguments = {};
	        }
	        if (main_core.Type.isNil(eventArguments.network_user_id)) {
	          eventArguments.network_user_id = this.$data.currentUser.ID;
	        }
	      }
	      babelHelpers.get(babelHelpers.getPrototypeOf(AuthorizeFormForgotPassword.prototype), "emitAnalyticsEvent", this).call(this, eventName, eventArguments);
	    } // #endregion
	  }]);
	  return AuthorizeFormForgotPassword;
	}(BX.Network.Component);

	function ownKeys$3(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
	function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$3(Object(source), !0).forEach(function (key) { babelHelpers.defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$3(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
	var AuthorizeFormChangePassword = /*#__PURE__*/function (_BX$Network$Component) {
	  babelHelpers.inherits(AuthorizeFormChangePassword, _BX$Network$Component);
	  function AuthorizeFormChangePassword(parameters) {
	    var _this;
	    babelHelpers.classCallCheck(this, AuthorizeFormChangePassword);
	    _this = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(AuthorizeFormChangePassword).call(this, parameters));
	    _this.blockCache = {};
	    return _this;
	  }
	  babelHelpers.createClass(AuthorizeFormChangePassword, [{
	    key: "description",
	    value: function description() {
	      return {
	        loader: {
	          type: BX.Network.ComponentTransport,
	          required: true
	        },
	        userId: {
	          type: [Number, String],
	          required: false,
	          defaultValue: ''
	        },
	        userLogin: {
	          type: String,
	          defaultValue: ''
	        },
	        userPhone: {
	          type: String,
	          defaultValue: ''
	        },
	        checkWord: {
	          type: String,
	          defaultValue: ''
	        },
	        isPhone: {
	          type: Boolean,
	          defaultValue: false
	        },
	        redirectUrl: {
	          type: String,
	          defaultValue: ''
	        },
	        hasPassword: {
	          type: Boolean,
	          defaultValue: true
	        },
	        captchaKey: {
	          type: String,
	          defaultValue: ''
	        },
	        captcha: {
	          type: Object,
	          fields: {
	            code: {
	              type: String
	            },
	            value: {
	              type: String,
	              defaultValue: ''
	            },
	            url: {
	              type: String
	            }
	          },
	          defaultValue: {}
	        }
	      };
	    }
	  }, {
	    key: "components",
	    value: function components() {
	      var _this2 = this;
	      return {
	        MESSAGE: function MESSAGE() {
	          return new BX.Network.Message({
	            type: BX.Network.MessageType.TYPE_ERROR
	          });
	        },
	        CAPTCHA: function CAPTCHA() {
	          return new BX.Network.AuthorizeFormCaptcha({
	            loader: _this2.$data.loader,
	            code: _this2.$data.captcha.code,
	            url: _this2.$data.captcha.url
	          }).on('change', function (value) {
	            _this2.$data.captcha.value = value;
	          }).on('reload', function (result) {
	            _this2.$data.captcha.code = result.captchaCode;
	            _this2.$data.captcha.url = result.captchaUrl;
	          });
	        }
	      };
	    }
	  }, {
	    key: "localization",
	    value: function localization() {
	      return {
	        B24NET_AUTH_CHANGE_TITLE: BX.message('B24NET_AUTH_CHANGE_TITLE'),
	        B24NET_AUTH_CHANGE_TITLE_PHONE: BX.message('B24NET_AUTH_CHANGE_TITLE_PHONE'),
	        AUTH_TITLE_CHANGE_PASSWORD: BX.message('AUTH_TITLE_CHANGE_PASSWORD'),
	        B24NET_AUTH_CHANGE_SUBTITLE: BX.message('B24NET_AUTH_CHANGE_SUBTITLE'),
	        B24NET_AUTH_CHANGE_SUBTITLE_P: BX.message('B24NET_AUTH_CHANGE_SUBTITLE_P'),
	        B24NET_AUTH_CHANGE_PASSWORD: BX.message('B24NET_AUTH_CHANGE_PASSWORD'),
	        B24NET_AUTH_CHANGE_PASSWORD_R: BX.message('B24NET_AUTH_CHANGE_PASSWORD_R'),
	        B24NET_AUTH_CHANGE_SUBMIT: BX.message('B24NET_AUTH_CHANGE_SUBMIT'),
	        B24NET_AUTH_CHANGE_ERR_PASS: BX.message('B24NET_AUTH_CHANGE_ERR_PASS')
	      };
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var _this3 = this;
	      if (!this.blockCache.ROOT) {
	        this.blockCache.ROOT = BX.create('FORM', {
	          events: {
	            submit: function submit(e) {
	              _this3.handleSubmit();
	              e.preventDefault();
	              e.stopPropagation();
	              return false;
	            }
	          },
	          html: Mustache.render("\n<div class=\"b24-network-auth-form-block\">\n\t<div class=\"b24-network-auth-form-detail-block\">\n\t\t{{#hasPassword}}\n\t\t<span class=\"b24-network-auth-form-title\">{{{title}}}</span>\n\t\t{{/hasPassword}}\n\t\t{{^hasPassword}}\n\t\t<span class=\"b24-network-auth-form-detail\">{{{title}}}</span>\n\t\t<div class=\"b24-network-auth-form-info\">{{{subtitle}}}</div>\n\t\t{{/hasPassword}}\n\t</div>\n\t<div class=\"b24-network-auth-form-field-pass\">\n\t\t<div class=\"b24-network-auth-form-field-block\">\n\t\t\t<label class=\"b24-network-auth-form-field-label\" for=\"password\">{{message.B24NET_AUTH_CHANGE_PASSWORD}}</label>\n\t\t\t<div class=\"b24-network-auth-form-field-input-block\">\n\t\t\t\t<input class=\"b24-network-auth-form-field-input\" type=\"password\" id=\"password\" name=\"password\">\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"b24-network-auth-form-field-block\">\n\t\t\t<label class=\"b24-network-auth-form-field-label\" for=\"password-confirm\">{{message.B24NET_AUTH_CHANGE_PASSWORD_R}}</label>\n\t\t\t<div class=\"b24-network-auth-form-field-input-block\">\n\t\t\t\t<input class=\"b24-network-auth-form-field-input\" type=\"password\" id=\"password-confirm\" name=\"password_confirm\">\n\t\t\t</div>\n\t\t\t<div data-component=\"MESSAGE\"></div>\n\t\t</div>\n\t\t{{#showCaptcha}}\n\t\t<div data-component=\"CAPTCHA\"></div>\n\t\t{{/showCaptcha}}\n\t</div>\n\t<div class=\"b24-network-auth-form-btn-block\">\n\t\t<button class=\"ui-btn ui-btn-md ui-btn-success ui-btn-round b24-network-auth-form-btn\">{{message.B24NET_AUTH_CHANGE_SUBMIT}}</button>\n\n\t\t<svg class=\"b24-network-auth-form-loader-circular b24-network-auth-form-loader-circular-btn\" viewBox=\"25 25 50 50\">\n\t\t\t<circle class=\"b24-network-auth-form-loader-path\" cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" stroke-miterlimit=\"10\"></circle>\n\t\t\t<circle class=\"b24-network-auth-form-loader-path-inner\" cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" stroke-miterlimit=\"10\"></circle>\n\t\t</svg>\n\t</div>\n</div>\n", {
	            title: this.$data.hasPassword ? this.$localization['AUTH_TITLE_CHANGE_PASSWORD'] : this.$data.isPhone ? this.$localization['B24NET_AUTH_CHANGE_TITLE_PHONE'].replace('#LOGIN#', '<span class="b24-network-auth-form-bold b24-network-auth-form-bold-detail">' + this.$data.userPhone + '</span>') : this.$localization['B24NET_AUTH_CHANGE_TITLE'].replace('#LOGIN#', '<span class="b24-network-auth-form-bold">' + this.$data.userLogin + '</span>'),
	            subtitle: this.$localization.B24NET_AUTH_CHANGE_SUBTITLE.replace('#PASSWORD#', '<span class="b24-network-auth-form-focus">' + this.$localization.B24NET_AUTH_CHANGE_SUBTITLE_P + '</span>'),
	            hasPassword: this.$data.hasPassword,
	            message: this.$localization,
	            showCaptcha: this.$data.captcha.enabled
	          })
	        });
	      }
	      this.bindComponents(this.blockCache.ROOT);
	      return this.blockCache.ROOT;
	    }
	  }, {
	    key: "showError",
	    value: function showError(message) {
	      this.$components.MESSAGE.setMessage(message);
	      this.blockCache.ROOT.classList.add('b24-network-auth-form-field-input-block-error');
	    }
	  }, {
	    key: "hideError",
	    value: function hideError() {
	      this.$components.MESSAGE.setMessage('');
	      this.blockCache.ROOT.classList.remove('b24-network-auth-form-field-input-block-error');
	    }
	  }, {
	    key: "handleSubmit",
	    value: function handleSubmit() {
	      var _this4 = this;
	      if (this.validateForm()) {
	        this.showWait();
	        if (this.$data.captchaKey && !!grecaptcha) {
	          grecaptcha.ready(function () {
	            grecaptcha.execute(_this4.$data.captchaKey, {
	              action: 'register'
	            }).then(;
	          });
	        } else {
	          this.sendRequest();
	        }
	      }
	    }
	  }, {
	    key: "validateForm",
	    value: function validateForm() {
	      this.hideError();
	      if (this.blockCache.ROOT.password.value.length <= 0) {
	        this.showError('');
	        return false;
	      }
	      if (this.blockCache.ROOT.password.value !== this.blockCache.ROOT.password_confirm.value) {
	        this.showError(this.$localization.B24NET_AUTH_CHANGE_ERR_PASS);
	        return false;
	      }
	      return true;
	    }
	  }, {
	    key: "showWait",
	    value: function showWait() {
	      this.blockCache.ROOT.classList.add('b24-network-auth-form-loading');
	    }
	  }, {
	    key: "closeWait",
	    value: 	  }, {
	    key: "sendRequest",
	    value: function sendRequest() {
	      var _this5 = this;
	      var captchaToken = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	      var data = {
	        userLogin: this.$data.userLogin,
	        checkWord: this.$data.checkWord,
	        password: this.blockCache.ROOT.password.value,
	        passwordConfirm: this.blockCache.ROOT.password_confirm.value
	      };
	      if (this.$data.captcha.enabled)
	        // built-in captcha
	        {
	          data = _objectSpread$3(_objectSpread$3({}, data), {}, {
	            captchaSid: this.$data.captcha.code,
	            captchaWord: this.$data.captcha.value
	          });
	        }
	      if (this.$data.captchaKey)
	        // reCAPTCHA
	        {
	          data.captchaToken = captchaToken;
	        }
	      this.$data.loader.query('b24network.authorize.changePassword', data).then(function (result) {
	        if (_this5.$data.redirectUrl) {
	          window.location.href = _this5.$data.redirectUrl;
	        } else {
	          _this5.callEvent('success');
	        }
	      }, function (result) {
	        _this5.closeWait();
	        var errorMessage = '';
	        result.errors.forEach(function (error) {
	          if (error.code === 'ERROR_AUTH_CHANGE') {
	            _this5.callEvent('success');
	            return;
	          }
	          errorMessage += error.message;
	          if (error.customData && error.customData.captcha) {
	            _this5.$data.captcha.code = error.customData.captcha.captchaCode;
	            _this5.$data.captcha.url = error.customData.captcha.captchaUrl;
	            _this5.$components.CAPTCHA.setUrl(_this5.$data.captcha.url);
	          }
	        });
	        _this5.showError(errorMessage);
	      });
	    }
	  }]);
	  return AuthorizeFormChangePassword;
	}(BX.Network.Component);

			var AuthorizeFormCaptcha = /*#__PURE__*/function (_BX$Network$Component) {
	  babelHelpers.inherits(AuthorizeFormCaptcha, _BX$Network$Component);
	  function AuthorizeFormCaptcha(parameters) {
	    var _this;
	    babelHelpers.classCallCheck(this, AuthorizeFormCaptcha);
	    _this = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(AuthorizeFormCaptcha).call(this, parameters, {
	      autoUpdate: true
	    }));
	    _this.blockCache = {};
	    return _this;
	  }
	  babelHelpers.createClass(AuthorizeFormCaptcha, [{
	    key: "description",
	    value: function description() {
	      return {
	        loader: {
	          type: BX.Network.ComponentTransport,
	          required: true
	        },
	        url: {
	          type: String,
	          defaultValue: ''
	        },
	        width: {
	          type: Number,
	          defaultValue: 180
	        },
	        height: {
	          type: Number,
	          defaultValue: 40
	        },
	        loading: {
	          type: Boolean,
	          defaultValue: false
	        }
	      };
	    }
	  }, {
	    key: "localization",
	    value: function localization() {
	      return {
	        B24NET_AUTH_CAPTCHA_TITLE: BX.message('B24NET_AUTH_CAPTCHA_TITLE')
	      };
	    }
	  }, {
	    key: "routeAction",
	    value: function routeAction(action) {
	      var _this2 = this;
	      switch (action) {
	        case 'reload':
	          this.blockCache.LOADER.classList.add('b24-network-auth-form-captcha-update-loading');
	          this.$data.loader.query('b24network.authorize.reloadCaptcha').then(function (result) {
	            if (result.data.captcha) {
	              _this2.$data.url = result.data.captcha.captchaUrl;
	              _this2.callEvent('reload', [_objectSpread$4({}, result.data.captcha)]);
	            }
	          });
	          break;
	      }
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var _this3 = this;
	      if (!this.blockCache.ROOT) {
	        this.blockCache.ROOT = BX.create('DIV', {
	          events: {
	            click: BX.delegateEvent({
	              attr: 'data-action'
	            }, BX.delegate(function () {
	              this.routeAction(BX.proxy_context.getAttribute('data-action'), BX.proxy_context);
	            }, this))
	          }
	        });
	      }
	      if (!this.blockCache.INPUT) {
	        this.blockCache.INPUT = BX.create('INPUT', {
	          props: {
	            type: 'text',
	            className: 'b24-network-auth-form-field-input',
	            id: 'captcha-input'
	          },
	          attrs: {
	            maxlength: "5"
	          },
	          events: {
	            change: function change() {
	              _this3.callEvent('change', [_this3.blockCache.INPUT.value]);
	            }
	          }
	        });
	      }
	      BX.adjust(this.blockCache.ROOT, {
	        props: {
	          className: ''
	        },
	        html: Mustache.render("\n<div class=\"b24-network-auth-form-field-block\">\n\t<label class=\"b24-network-auth-form-field-label\" for=\"captcha-input\">{{message.B24NET_AUTH_CAPTCHA_TITLE}}</label>\n\t<div class=\"b24-network-auth-form-captcha\">\n\t\t<span data-node=\"INPUT\"></span>\n\t\t<span class=\"b24-network-auth-form-captcha-arrow\"></span>\n\t\t<div class=\"b24-network-auth-form-captcha-inner\">\n\t\t\t<img class=\"b24-network-auth-form-captcha-value\" src=\"{{url}}\" width=\"{{width}}\" height=\"{{height}}\">\n\t\t\t<span class=\"b24-network-auth-form-captcha-update\" data-action=\"reload\">\n\t\t\t\t<svg class=\"b24-network-auth-form-loader-circular\" viewBox=\"25 25 50 50\">\n\t\t\t\t\t<circle class=\"b24-network-auth-form-loader-path\" cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" stroke-miterlimit=\"10\"></circle>\n\t\t\t\t\t<circle class=\"b24-network-auth-form-loader-path-inner\" cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" stroke-miterlimit=\"10\"></circle>\n\t\t\t\t</svg>\n</span>\n\t\t</div>\n\t</div>\n</div>\n", {
	          url: this.$data.url,
	          width: this.$data.width,
	          height: this.$data.height,
	          message: this.$localization
	        })
	      });
	      this.blockCache.INPUT.value = '';
	      this.blockCache.ROOT.querySelector('[data-node="INPUT"]').appendChild(this.blockCache.INPUT);
	      this.blockCache.LOADER = this.blockCache.ROOT.querySelector('[data-action="reload"]');
	      return this.blockCache.ROOT;
	    }
	  }]);
	  return AuthorizeFormCaptcha;
	}(BX.Network.Component);

	var AuthorizeFormLoginList = /*#__PURE__*/function (_BX$Network$Component) {
	  babelHelpers.inherits(AuthorizeFormLoginList, _BX$Network$Component);
	  function AuthorizeFormLoginList(parameters) {
	    var _this;
	    babelHelpers.classCallCheck(this, AuthorizeFormLoginList);
	    _this = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(AuthorizeFormLoginList).call(this, parameters));
	    _this.items = {};
	    _this.blockCache = {};
	    return _this;
	  }
	  babelHelpers.createClass(AuthorizeFormLoginList, [{
	    key: "description",
	    value: function description() {
	      return {
	        loginList: {
	          type: Array,
	          required: false,
	          defaultValue: []
	        },
	        allowDelete: {
	          type: Boolean,
	          defaultValue: true
	        },
	        showQrCodeButton: {
	          type: Boolean,
	          defaultValue: false
	        },
	        portal: {
	          type: Object,
	          required: false,
	          fields: {
	            id: {
	              type: String
	            },
	            host: {
	              type: String
	            },
	            ssoEnabled: {
	              type: Boolean
	            }
	          }
	        }
	      };
	    }
	  }, {
	    key: "localization",
	    value: function localization() {
	      return {
	        B24NET_AUTH_LIST_SELECT: main_core.Loc.getMessage('B24NET_AUTH_LIST_SELECT'),
	        B24NET_AUTH_LIST_OTHER: main_core.Loc.getMessage('B24NET_AUTH_LIST_OTHER'),
	        B24NET_QRCODE_LOGIN_BY_QRCODE: main_core.Loc.getMessage('B24NET_QRCODE_LOGIN_BY_QRCODE'),
	        B24NET_AUTH_SSO_SIGN_IN: main_core.Loc.getMessage('B24NET_AUTH_SSO_SIGN_IN')
	      };
	    }
	  }, {
	    key: "historyClickHandler",
	    value: function historyClickHandler(id) {
	      this.callEvent('select', [id]);
	    }
	  }, {
	    key: "historyDeleteHandler",
	    value: 	  }, {
	    key: "render",
	    value: function render() {
	      var _this2 = this;
	      if (!this.blockCache.ROOT) {
	        this.blockCache.ROOT = BX.create('DIV', {
	          events: {
	            click: BX.delegateEvent({
	              attr: 'data-user-id'
	            }, BX.delegate(function () {
	              switch (BX.proxy_context.getAttribute('data-action')) {
	                case 'delete':
	                  this.historyDeleteHandler(BX.proxy_context.getAttribute('data-user-id'));
	                  break;
	                case 'open':
	                default:
	                  this.historyClickHandler(BX.proxy_context.getAttribute('data-user-id'));
	                  break;
	              }
	              return false;
	            }, this))
	          },
	          html: Mustache.render("\n\t\t\t\t\t<div class=\"b24-network-auth-form-block\">\n\t\t\t\t\t\t\t<div class=\"b24-network-auth-form-detail-block\">\n\t\t\t\t\t\t\t\t<span class=\"b24-network-auth-form-detail\">{{message.B24NET_AUTH_LIST_SELECT}}</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"b24-network-auth-form-user-block\">\n\t\t\t\t\t\t\t\t<div class=\"b24-network-auth-form-user-inner\" data-component=\"ITEMS\"></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"b24-network-auth-form-btn-block\">\n\t\t\t\t\t\t\t\t<button class=\"ui-btn ui-btn-md ui-btn-light-border ui-btn-round ui-btn-success b24-network-auth-form-btn\" data-user-id=\"0\">{{message.B24NET_AUTH_LIST_OTHER}}</button>\n\t\t\t\t\t\t\t\t{{#showQrCodeButton}}\n\t\t\t\t\t\t\t\t<button class=\"ui-btn ui-btn-md ui-btn-light-border ui-btn-round b24-network-auth-form-btn --icon-qr\" data-role=\"qrcode-button\">{{message.B24NET_QRCODE_LOGIN_BY_QRCODE}}</button>\n\t\t\t\t\t\t\t\t{{/showQrCodeButton}}\n\t\t\t\t\t\t\t\t{{#showSsoSignInButton}}\n\t\t\t\t\t\t\t\t<button class=\"ui-btn ui-btn-md ui-btn-light ui-btn-round b24-network-auth-form-btn\" data-role=\"sso-sign-in\">{{message.B24NET_AUTH_SSO_SIGN_IN}}</button>\n\t\t\t\t\t\t\t\t{{/showSsoSignInButton}}\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t", {
	            message: this.$localization,
	            showQrCodeButton: this.$data.showQrCodeButton,
	            showSsoSignInButton: typeof this.$data.portal.ssoEnabled === 'undefined' ? true : this.$data.portal.ssoEnabled
	          })
	        });
	        BX.bind(this.blockCache.ROOT.querySelector('[data-role="qrcode-button"]'), 'click', function () {
	          _this2.callEvent('showQrCode', []);
	        });
	        BX.bind(this.blockCache.ROOT.querySelector('[data-role="sso-sign-in"]'), 'click', ;
	      }
	      var listNode = this.blockCache.ROOT.querySelector('[data-component=ITEMS]');
	      BX.cleanNode(listNode);
	      this.$data.loginList.forEach(function (listItem) {
	        if (typeof _this2.items[listItem.ID] === 'undefined') {
	          _this2.items[listItem.ID] = new BX.Network.AuthorizeFormLoginListItem({
	            active: true,
	            allowDelete: _this2.$data.allowDelete,
	            item: listItem
	          });
	        }
	        var listItemNode = BX.create('DIV', {
	          props: {
	            className: 'b24-network-auth-form-user b24-network-auth-form-user-active'
	          },
	          attrs: {
	            'data-user-id': listItem.ID,
	            'data-action': 'open'
	          }
	        });
	        _this2.items[listItem.ID].appendTo(listItemNode);
	        listNode.appendChild(listItemNode);
	      });
	      return this.blockCache.ROOT;
	    }
	  }]);
	  return AuthorizeFormLoginList;
	}(BX.Network.Component);

	var AuthorizeFormLoginListItem = /*#__PURE__*/function (_BX$Network$Component) {
	  babelHelpers.inherits(AuthorizeFormLoginListItem, _BX$Network$Component);
	  function AuthorizeFormLoginListItem(parameters) {
	    babelHelpers.classCallCheck(this, AuthorizeFormLoginListItem);
	    return babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(AuthorizeFormLoginListItem).call(this, parameters));
	  }
	  babelHelpers.createClass(AuthorizeFormLoginListItem, [{
	    key: "description",
	    value: function description() {
	      return {
	        active: {
	          type: Boolean,
	          defaultValue: true
	        },
	        allowDelete: {
	          type: Boolean,
	          defaultValue: true
	        },
	        item: {
	          type: Object,
	          fields: {
	            ID: {
	              type: [String, Number],
	              required: true
	            },
	            SHOW_NAME: {
	              type: Boolean
	            },
	            NAME: {
	              type: String
	            },
	            LAST_NAME: {
	              type: String
	            },
	            LOGIN: {
	              type: String
	            },
	            EXTERNAL_AUTH_ID: {
	              type: String
	            },
	            PHOTO: {
	              type: String
	            },
	            AUTH_TYPE: {
	              type: Object
	            }
	          },
	          required: true
	        }
	      };
	    }
	  }, {
	    key: "localization",
	    value: 	  }, {
	    key: "render",
	    value: function render() {
	      return Mustache.render("\n<div class=\"b24-network-auth-form-user-img\"{{#item.photo}} style=\"background-image:url({{item.photo}}); background-size: 100% auto;\"{{/item.photo}}></div>\n<div class=\"b24-network-auth-form-user-info\">\n\t{{#showName}}\n\t<span class=\"b24-network-auth-form-user-name\">{{item.name}}</span>\n\t{{/showName}}\n\t{{#authType}}\n\t<span class=\"b24-network-auth-form-user-login\">\n\t\t{{#icon}}\n\t\t\t<span class=\"ui-icon ui-icon-service-{{icon}} b24-network-auth-form-user-login-icon\">\n\t\t\t\t<i></i>\n\t\t\t</span>\n\t\t{{/icon}}\n\t\t<span class=\"b24-network-auth-form-user-login-text\">\n\t\t\t{{title}}\n\t\t</span>\n\t</span>\n\t{{/authType}}\n</div>\n{{#allowDelete}}\n<div class=\"b24-network-auth-form-user-delete\" data-user-id=\"{{item.id}}\" data-action=\"delete\"></div>\n{{/allowDelete}}\n", {
	        item: {
	          id: this.$data.item.ID,
	          name: this.formatName(),
	          login: this.$data.item.EXTERNAL_AUTH_ID || this.$data.item.LOGIN,
	          photo: this.$data.item.PERSONAL_PHOTO || ''
	        },
	        showName: !!this.$data.item.SHOW_NAME,
	        showLogin: this.$data.EXTERNAL_AUTH_ID !== 'socservices',
	        authType: this.$data.item.AUTH_TYPE[0],
	        active: this.$data.active,
	        allowDelete: this.$data.allowDelete
	      });
	    }
	  }, {
	    key: "formatName",
	    value: function formatName() {
	      return [this.$data.item.NAME, this.$data.item.LAST_NAME].join(' ').replace(/(^\s+)|(\s+$)/, '') || this.$localization.B24NET_AUTH_NONAME;
	    }
	  }]);
	  return AuthorizeFormLoginListItem;
	}(BX.Network.Component);

				var _changeTitle = /*#__PURE__*/new WeakSet();
	var AuthorizeFormAuthorizeNotConfirmedAccount = /*#__PURE__*/function (_BX$Network$Component) {
	  babelHelpers.inherits(AuthorizeFormAuthorizeNotConfirmedAccount, _BX$Network$Component);
	  function AuthorizeFormAuthorizeNotConfirmedAccount(parameters, options) {
	    var _this;
	    babelHelpers.classCallCheck(this, AuthorizeFormAuthorizeNotConfirmedAccount);
	    options = options || {};
	    options.stateToAnalyticsEventMap = {
	      error: b24network_component_useractions.AnalyticsEventType.SHOW_AUTH_LOGIN_NOT_CONFIRMED_EMAIL_ERROR,
	      confirm: b24network_component_useractions.AnalyticsEventType.SHOW_AUTH_LOGIN_NOT_CONFIRMED_EMAIL_PAGE,
	      success: b24network_component_useractions.AnalyticsEventType.SHOW_AUTH_LOGIN_NOT_CONFIRMED_EMAIL_SUCCESS
	    };
	    _this = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(AuthorizeFormAuthorizeNotConfirmedAccount).call(this, parameters, options));
	    _classPrivateMethodInitSpec(babelHelpers.assertThisInitialized(_this), _changeTitle);
	    _this.blockCache = {};
	    _classPrivateMethodGet(babelHelpers.assertThisInitialized(_this), _changeTitle, _changeTitle2).call(babelHelpers.assertThisInitialized(_this), _this.$localization.B24NET_AUTH_NCA_CONFIRM_TITLE);
	    return _this;
	  }
	  babelHelpers.createClass(AuthorizeFormAuthorizeNotConfirmedAccount, [{
	    key: "description",
	    value: function description() {
	      return {
	        loader: {
	          type: BX.Network.ComponentTransport,
	          required: true
	        },
	        currentUser: {
	          type: Object,
	          required: true
	        },
	        captcha: {
	          type: Object,
	          fields: {
	            code: {
	              type: String
	            },
	            value: {
	              type: String,
	              defaultValue: ''
	            },
	            url: {
	              type: String
	            }
	          },
	          defaultValue: {}
	        },
	        currentState: {
	          type: String,
	          defaultValue: 'confirm'
	        }
	      };
	    }
	  }, {
	    key: "localization",
	    value: function localization() {
	      return {
	        B24NET_AUTH_NCA_SUBMIT: BX.message('B24NET_AUTH_NCA_SUBMIT'),
	        B24NET_AUTH_NCA_CONFIRM_TITLE: BX.message('B24NET_AUTH_NCA_CONFIRM_TITLE'),
	        B24NET_AUTH_NCA_CONFIRM_MESSAGE: BX.message('B24NET_AUTH_NCA_CONFIRM_MESSAGE'),
	        B24NET_AUTH_NCA_SUCCESS_TITLE: BX.message('B24NET_AUTH_NCA_SUCCESS_TITLE'),
	        B24NET_AUTH_NCA_SUCCESS_MESSAGE: BX.message('B24NET_AUTH_NCA_SUCCESS_MESSAGE').replace('#EMAIL#', this.getAccountEmail())
	      };
	    }
	  }, {
	    key: "components",
	    value: function components() {
	      var _this2 = this;
	      return {
	        CAPTCHA: function CAPTCHA() {
	          return new BX.Network.AuthorizeFormCaptcha({
	            loader: _this2.$data.loader,
	            url: _this2.$data.captcha.url
	          }).on('change', .on('reload', function (result) {
	            _this2.$data.captcha.code = result.captchaCode;
	            _this2.$data.captcha.url = result.captchaUrl;
	          });
	        },
	        MESSAGE: function MESSAGE() {
	          return new BX.Network.Message({
	            type: BX.Network.MessageType.TYPE_INTRO,
	            message: _this2.$localization.B24NET_AUTH_NCA_CONFIRM_MESSAGE
	          });
	        },
	        RESULT_MESSAGE: function RESULT_MESSAGE() {
	          return new BX.Network.Message({
	            type: BX.Network.MessageType.TYPE_OK,
	            message: _this2.$localization.B24NET_AUTH_NCA_SUCCESS_MESSAGE
	          });
	        },
	        ERROR_MESSAGE: function ERROR_MESSAGE() {
	          return new BX.Network.Message({
	            type: BX.Network.MessageType.TYPE_ERROR
	          });
	        }
	      };
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var _this3 = this;
	      if (!this.blockCache.ROOT) {
	        this.blockCache.ROOT = BX.create('FORM', {
	          events: {
	            click: function click(e) {
	              var target = e.target;
	              var action = target.dataset.action;
	              if (!main_core.Type.isNil(action)) {
	                e.preventDefault();
	                e.stopPropagation();
	                _this3.routeAction(action);
	                return false;
	              }
	            },
	            submit: function submit(e) {
	              e.preventDefault();
	              e.stopPropagation();
	              _this3.submitHandler();
	              return false;
	            }
	          }
	        });
	      }
	      BX.adjust(this.blockCache.ROOT, {
	        html: Mustache.render("\n  <div class=\"b24-network-auth-form-block\">\n  \t{{#showResultMessage}}\n  \t\t<div data-component=\"RESULT_MESSAGE\"></div>\n  \t{{/showResultMessage}}\n\n  \t{{#showInfo}}\n\n  \t\t<div data-component=\"MESSAGE\"></div>\n\n  \t\t<div class=\"b24-network-auth-form-field-block\">\n  \t\t\t<label class=\"b24-network-auth-form-field-label\"> </label>\n  \t\t\t<div class=\"b24-network-auth-form-field-input-block\">\n  \t\t\t\t<input class=\"b24-network-auth-form-field-input\" type=\"text\" id=\"email-input\" readonly disabled value=\"{{ currentLogin }}\">\n  \t\t\t\t<div data-component=\"ERROR_MESSAGE\"></div>\n  \t\t\t</div>\n  \t\t</div>\n\n  \t\t{{#showCaptcha}}\n  \t\t<div data-component=\"CAPTCHA\"></div>\n  \t\t{{/showCaptcha}}\n\n  \t\t<div class=\"b24-network-auth-form-btn-block\">\n  \t\t\t<button class=\"ui-btn ui-btn-md ui-btn-success ui-btn-round b24-network-auth-form-btn\" data-action=\"submit\">{{message.B24NET_AUTH_NCA_SUBMIT}}</button>\n  \t\t</div>\n\n  \t{{/showInfo}}\n  </div>\n", {
	          showCaptcha: this.$data.captcha.enabled === true,
	          showResultMessage: this.$data.currentState === 'success',
	          showInfo: this.$data.currentState !== 'success',
	          currentLogin: this.$data.currentUser.LOGIN,
	          errorMessage: this.$data.errorMessage,
	          message: this.$localization
	        })
	      });
	      this.bindComponents(this.blockCache.ROOT);
	      return this.blockCache.ROOT;
	    }
	  }, {
	    key: "routeAction",
	    value: function routeAction(action) {
	      if (action === 'submit') {
	        this.submitHandler();
	      } else {
	        console.error('Undefined action:', action);
	      }
	    }
	  }, {
	    key: "submitHandler",
	    value: function submitHandler() {
	      var _this4 = this;
	      var data = {
	        userId: this.$data.currentUser.ID,
	        userLogin: this.$data.currentUser.LOGIN
	      };
	      this.$data.loader.query('b24network.authorize.resendEmailConfirmWithPassword', data).then(function () {
	        _this4.setCurrentState('success');
	        _classPrivateMethodGet(_this4, _changeTitle, _changeTitle2).call(_this4, _this4.$localization.B24NET_AUTH_NCA_SUCCESS_TITLE);
	        _this4.update();
	      }, function (response) {
	        var errorMessage = '';
	        response.errors.forEach(function (error) {
	          errorMessage += error.message;
	          if (error.customData && error.customData.captcha) {
	            _this4.$data.captcha.code = error.customData.captcha.captchaCode;
	            _this4.$data.captcha.url = error.customData.captcha.captchaUrl;
	            _this4.$components.CAPTCHA.setUrl(_this4.$data.captcha.url);
	          }
	        });
	        _this4.setCurrentState('error');
	        _this4.showError(errorMessage);
	      });
	    }
	  }, {
	    key: "showError",
	    value: function showError(message) {
	      this.blockCache.ROOT.classList.add('b24-network-auth-form-field-input-block-error');
	      this.$components.ERROR_MESSAGE.setMessage(message);
	      this.update(true);
	    }
	  }, {
	    key: "getAccountEmail",
	    value: 	  }]);
	  return AuthorizeFormAuthorizeNotConfirmedAccount;
	}(BX.Network.Component);
	
	exports.Authorize = Authorize;
	exports.AuthorizeForm = AuthorizeForm;
	exports.AuthorizeFormPortalList = AuthorizeFormPortalList;
	exports.AuthorizeFormPortalListItem = AuthorizeFormPortalListItem;
	exports.AuthorizeFormSsoLogin = AuthorizeFormSsoLogin;
	exports.AuthorizeFormLogin = AuthorizeFormLogin;
	exports.AuthorizeFormAuthorize = AuthorizeFormAuthorize;
	exports.AuthorizeFormAuthorizeNotConfirmedAccount = AuthorizeFormAuthorizeNotConfirmedAccount;
	exports.AuthorizeFormPassword = AuthorizeFormPassword;
	exports.AuthorizeFormForgotPassword = AuthorizeFormForgotPassword;
	exports.AuthorizeFormChangePassword = AuthorizeFormChangePassword;
	exports.AuthorizeFormCaptcha = AuthorizeFormCaptcha;
	exports.AuthorizeFormLoginList = AuthorizeFormLoginList;
	exports.AuthorizeFormLoginListItem = AuthorizeFormLoginListItem;

}((this.BX.Network = this.BX.Network || {}),BX,BX,BX.B24network.Vue,BX.Event,BX,BX.Network));
//# sourceMappingURL=authorize.bundle.js.map
