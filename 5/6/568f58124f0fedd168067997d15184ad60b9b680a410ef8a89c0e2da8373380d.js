this.BX = this.BX || {};
(function (exports) {
	'use strict';

	var CODE_LENGTH = 6;
	var EmailConfirm = /*#__PURE__*/function (_BX$Network$Component) {
	  babelHelpers.inherits(EmailConfirm, _BX$Network$Component);
	  function EmailConfirm(parameters) {
	    var _this;
	    babelHelpers.classCallCheck(this, EmailConfirm);
	    _this = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(EmailConfirm).call(this, parameters));
	    _this.blockCache = {};
	    _this.timer = null;
	    _this.input = null;
	    _this.tmpValue = '';
	    _this.checkCountdown = _this.checkCountdown.bind(babelHelpers.assertThisInitialized(_this));
	    _this.callCheck = BX.debounce(_this.callCheck, 300, babelHelpers.assertThisInitialized(_this));
	    return _this;
	  }
	  babelHelpers.createClass(EmailConfirm, [{
	    key: "description",
	    value: function description() {
	      return {
	        loader: {
	          type: BX.Network.ComponentTransport,
	          required: true
	        },
	        login: {
	          type: String,
	          required: true
	        },
	        userSignature: {
	          type: String,
	          required: true
	        },
	        dateSend: {
	          type: Number
	        }
	      };
	    }
	  }, {
	    key: "components",
	    value: function components() {
	      return {
	        MESSAGE: function MESSAGE() {
	          return new BX.Network.Message({
	            type: BX.Network.MessageType.TYPE_OK,
	            message: ''
	          });
	        }
	      };
	    }
	  }, {
	    key: "onProcessData",
	    value: 	  }, {
	    key: "setDateSend",
	    value: function setDateSend(value) {
	      this.$private.dateSend = new Date().valueOf() + value * 1000;
	      this.$data.dateSend = value;
	      return this;
	    }
	  }, {
	    key: "localization",
	    value: 	  }, {
	    key: "render",
	    value: function render() {
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
	      BX.adjust(this.blockCache.ROOT, {
	        html: Mustache.render("\n<div class=\"b24-network-auth-form-block\">\n\t<div class=\"b24-network-auth-form-detail-block\">\n\t\t<span class=\"b24-network-auth-form-detail\">{{{title}}}</span>\n\t\t<span class=\"b24-network-auth-form-detail\">{{message.B24NET_EMAILCONFIRM_SUBTITLE}}</span>\n\t</div>\n\t<div class=\"b24-network-auth-form-send-block\">\n\t\t<div data-component=\"MESSAGE\"></div>\n\t\t<div class=\"b24-network-auth-form-info\" data-action=\"countdown\" style=\"display: none;\">\n\t\t\t{{{countdown}}}\n\t\t</div>\n\t\t<div class=\"b24-network-auth-form-send\" data-action=\"resend\" style=\"display: block\">\n\t\t\t<span class=\"b24-network-auth-form-send-text\" >{{message.B24NET_EMAILCONFIRM_REPEAT}}</span>\n\t\t</div>\n\t</div>\n</div>\n", {
	          title: this.$localization.B24NET_EMAILCONFIRM_TITLE.replace('#EMAIL#', Mustache.render("<span class=\"b24-network-auth-form-bold\">{{login}}</span>", {
	            login: this.$data.login
	          })),
	          countdown: this.$localization.B24NET_EMAILCONFIRM_COUNTDOWN.replace('#COUNTDOWN#', '<span class="b24-network-auth-form-focus" data-action="timer"></span>'),
	          message: this.$localization
	        })
	      });
	      this.$components.MESSAGE.appendTo(this.blockCache.ROOT.querySelector('[data-component="MESSAGE"]'));
	      this.checkCountdown();
	      return this.blockCache.ROOT;
	    }
	  }, {
	    key: "routeAction",
	    value: function routeAction(action) {
	      switch (action) {
	        case 'resend':
	          this.resendCode();
	          break;
	      }
	    }
	  }, {
	    key: "showError",
	    value: function showError(errorList) {
	      if (errorList.length > 0) {
	        var errorMessage = '';
	        errorList.forEach(function (error) {
	          errorMessage += (errorMessage === '' ? '' : '<br />') + error.message;
	        });
	        this.$components.MESSAGE.setType(BX.Network.MessageType.TYPE_ERROR).setMessage(errorMessage);
	      }
	    }
	  }, {
	    key: "hideError",
	    value: 	  }, {
	    key: "resendCode",
	    value: function resendCode() {
	      var _this2 = this;
	      if (this.checkCountdown()) {
	        this.$data.loader.query('b24network.authorize.resendEmailConfirm', {
	          signedData: this.$data.userSignature
	        }).then(function (result) {
	          _this2.$components.MESSAGE.setType(BX.Network.MessageType.TYPE_OK).setMessage(_this2.$localization.B24NET_EMAILCONFIRM_MESSAGE);
	          _this2.setDateSend(result.data.DATE_SEND).update().checkCountdown();
	        }, ;
	      }
	    }
	  }, {
	    key: "handleChange",
	    value: function handleChange() {
	      if (this.blockCache.INPUT.value.length === CODE_LENGTH) {
	        this.callCheck();
	      }
	    }
	  }, {
	    key: "callCheck",
	    value: function callCheck() {
	      if (this.blockCache.INPUT.value.length === CODE_LENGTH) {
	        this.check(this.blockCache.INPUT.value);
	      }
	    }
	  }, {
	    key: "showLoader",
	    value: function showLoader() {
	      this.blockCache.LOADER.style.display = 'block';
	    }
	  }, {
	    key: "hideLoader",
	    value: 	  }, {
	    key: "checkCountdown",
	    value: function checkCountdown() {
	      var secondsLeft = Math.ceil((this.$private.dateSend - new Date().valueOf()) / 1000);
	      if (secondsLeft <= 0) {
	        this.blockCache.ROOT.querySelector('[data-action="resend"]').style.display = 'block';
	        this.blockCache.ROOT.querySelector('[data-action="countdown"]').style.display = 'none';
	        return true;
	      } else {
	        this.blockCache.ROOT.querySelector('[data-action="resend"]').style.display = 'none';
	        this.blockCache.ROOT.querySelector('[data-action="countdown"]').style.display = 'block';
	        this.blockCache.ROOT.querySelector('[data-action="timer"]').innerHTML = this.$localization.B24NET_EMAILCONFIRM_S.replace('#LEFT#', secondsLeft);
	        if (this.timer) {
	          clearTimeout(this.timer);
	        }
	        this.timer = setTimeout(this.checkCountdown, 500);
	        return false;
	      }
	    }
	  }]);
	  return EmailConfirm;
	}(BX.Network.Component);

	exports.EmailConfirm = EmailConfirm;

}((this.BX.Network = this.BX.Network || {})));
//# sourceMappingURL=emailconfirm.bundle.js.map
