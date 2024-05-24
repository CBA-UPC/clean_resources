importScripts("https://api.mindbox.ru/scripts/service-worker.js");
, options) {
		this.options = options
		this.$element = $(element)
			.delegate('[data-dismiss="modal"]', 'click.dismiss.modal', $.proxy(this.hide, this))
		this.options.remote && this.$element.find('.cbkApi-modal-body').load(this.options.remote)
	};

	CbkApiModal.prototype = {
		constructor: CbkApiModal
		, toggle: function () {
			return this[!this.isShown ? 'show' : 'hide']()
		}
		, show: function () {
			var that = this
				, e = $.Event('show');

			this.$element.trigger(e);

			if (this.isShown || e.isDefaultPrevented()) return;

			this.isShown = true;

			this.escape();

			this.backdrop(function () {
				var transition = $.support.transition && that.$element.hasClass('cbkApi-fade');

				if (!that.$element.parent().length) {
					that.$element.appendTo(document.body);
				}

				that.$element
					.show();

				if (transition) {
					that.$element[0].offsetWidth;
				}

				that.$element
					.addClass('cbkApi-in')
					.attr('aria-hidden', false);

				that.enforceFocus();

				transition ?
					that.$element.one($.support.transition.end, function () { that.$element.focus().trigger('shown') }) :
					that.$element.focus().trigger('shown')

				if ($.fn.CBK_API.settings.hasSignupWizzard && that.$element.attr('id') == 'cbkApiSignUpForm') {
					setTimeout(function(){
						that.$element.find('.cbkApi-nav li:first').removeClass('cbkApi-active').addClass('cbkApi-done');
						that.$element.find('.cbkApi-nav li:last').addClass('cbkApi-active');
						that.$element.find('.cbkApi-progress-bar').width('100%');
					}, 300);
				}
			})
		}
		, hide: function (e) {
			e && e.preventDefault();

			var that = this;

			e = $.Event('hide');

			this.$element.trigger(e);

			if (!this.isShown || e.isDefaultPrevented()) return;

			this.isShown = false;

			this.escape();
			$(document).off('focusin.modal');

			this.$element
				.removeClass('cbkApi-in')
				.attr('aria-hidden', true);

			$.support.transition && this.$element.hasClass('cbkApi-fade') ?
				this.hideWithTransition() :
				this.hideModal()
		}
		, enforceFocus: function () {
			var that = this;
			$(document).on('focusin.modal', function (e) {
				if (that.$element[0] !== e.target && !that.$element.has(e.target).length) {
					that.$element.focus()
				}
			});
		}
		, escape: function () {
			var that = this;
			if (this.isShown && this.options.keyboard) {
				this.$element.on('keyup.dismiss.modal', function ( e ) {
					e.which == 27 && that.hide()
				})
			} else if (!this.isShown) {
				this.$element.off('keyup.dismiss.modal');
			}
		}
		, hideWithTransition: function () {
			var that = this
				, timeout = setTimeout(function () {
				that.$element.off($.support.transition.end);
				that.hideModal()
			}, 500);

			this.$element.one($.support.transition.end, function () {
				clearTimeout(timeout);
				that.hideModal()
			})
		}
		, hideModal: function (that) {
			this.$element
				.hide()
				.trigger('hidden');

			this.backdrop()
		}
		, removeBackdrop: function () {
			this.$backdrop.remove();
			this.$backdrop = null
		}
		, backdrop: function (callback) {
			var that = this
				, animate = this.$element.hasClass('cbkApi-fade') ? 'cbkApi-fade' : '';

			if (this.isShown && this.options.backdrop) {
				var doAnimate = $.support.transition && animate;

				this.$backdrop = $('<div class="cbkApi-modal-backdrop ' + animate + '" />')
					.appendTo(document.body);

				this.$backdrop.click(
					this.options.backdrop == 'static' ?
						$.proxy(this.$element[0].focus, this.$element[0])
						: $.proxy(this.hide, this)
				);

				if (doAnimate) this.$backdrop[0].offsetWidth;

				this.$backdrop.addClass('cbkApi-in');

				callback();

			} else if (!this.isShown && this.$backdrop) {
				this.$backdrop.removeClass('cbkApi-in');

				this.removeBackdrop();

			} else if (callback) {
				callback()
			}
		}
	};
	$.fn.cbkapimodal = function (option) {
		return this.each(function () {
			var $this = $(this)
				, data = $this.data('modal')
				, options = $.extend({}, $.fn.cbkapimodal.defaults, $this.data(), typeof option == 'object' && option);
			if (!data) $this.data('modal', (data = new CbkApiModal(this, options)));
			if (typeof option == 'string') data[option]();
			else if (options.show) data.show()
		})
	};
	$.fn.cbkapimodal.defaults = {
		backdrop: true
		, keyboard: true
		, show: true
	};
	$.fn.cbkapimodal.Constructor = CbkApiModal;
	$(document).on('click.modal.data-api', '[data-toggle="modal"]', function (e) {
		var $this = $(this)
			, href = $this.attr('href')
			, $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) //strip for ie7
			, option = $target.data('modal') ? 'toggle' : $.extend({ remote:!/#/.test(href) && href }, $target.data(), $this.data());

		e.preventDefault();
		$target
			.cbkapimodal(option)
			.one('hide', function () {
				$this.focus()
			});
	});

}(window.jQuery);
(function () {

	(function ($) {

		var methods = {
			init: function (options) {
				$.extend($.fn.CBK_API.settings, options);

				if (typeof window.top.CBK_API === 'object') {
					console.log('Only one instance of WhiteCallback can be run');
					return;
				}

				window.top.CBK_API = $.fn.CBK_API;

				$.fn.CBK_API.load();
			}
		};

		$.fn.CBK_API = function (method) {
			var return_val = false;

			if (methods[method]) {
				return_val = methods[ method ].apply(this, Array.prototype.slice.call(arguments, 1));
			} else if (typeof method === 'object' || !method) {
				return_val = methods.init.apply(this, arguments);
			} else {}
			if (return_val) {
				return return_val;
			} else {
				return this;
			}
		};

		$.fn.CBK_API.load = function () {
			var params = $.fn.CBK_API.parseQuery(window.location.search.replace('?', ''));
			var expireDate = new Date();
			expireDate.setDate(expireDate.getDate() + 30);
			var url = window.location.protocol + '//' + $.fn.CBK_API.settings.domain + "/papi?Action=loadjs&callback=?";
			var partner_id = 0;
            if (params.show === 'topper') {
            	$.fn.CBK_API.initTopper(function () {
					$.fn.CBK_API.showTopper();
                });
			}
			if (params.utm_source === 'widget') {
                expireDate = new Date();
                expireDate.setHours(expireDate.getHours() + 3);
			}
			if (params.p) {
				$.fn.CBK_API.setCookie('WhiteSaaSSignupPartnerId', params.p, expireDate);
			}
			if (params.r) {
				$.fn.CBK_API.setCookie('CallbackSignupPartnerId', params.r, expireDate);
			}
			if ($.fn.CBK_API.settings.partnerId) {
                params.r = $.fn.CBK_API.settings.partnerId;
                $.fn.CBK_API.setCookie('CallbackSignupPartnerId', $.fn.CBK_API.settings.partnerId, expireDate);
			}
			if (params.hi) {
				$.fn.CBK_API.setCookie('ws_hz_id', params.hi, expireDate);
                var readUrl = window.location.protocol + '//homezvon.ru/papi/?Action=clientreadkp&id=' + params.hi + "&key=be1bc7038e4d301518c034c749ecd096&callback=?";
                jQuery.getJSON(readUrl);
			}
            if (params.hs) {
                $.fn.CBK_API.setCookie('ws_hz_site', params.hs, expireDate);
            }
            if (params.he) {
                $.fn.CBK_API.setCookie('ws_hz_email', params.he, expireDate);
            }
            if ($.fn.CBK_API.settings.hasForm) {
                $.fn.CBK_API.initForm();
            }
			jQuery.getJSON(url, {
				currentdomain: $.fn.CBK_API.settings.domain,
				p: (params.p) ? params.p : $.fn.CBK_API.getCookie('WhiteSaaSSignupPartnerId'),
				r: (params.r) ? params.r : $.fn.CBK_API.getCookie('CallbackSignupPartnerId'),
                cbk_crm_id: (params.clientid) ? params.clientid : 0,
                ws_hz_id: (params.hi) ? params.hi : $.fn.CBK_API.getCookie('ws_hz_id'),
                ws_hz_site: (params.hs) ? params.hs : $.fn.CBK_API.getCookie('ws_hz_site'),
                ws_hz_email: (params.he) ? params.he : $.fn.CBK_API.getCookie('ws_hz_email')
			}, function (result) {
				if (result.Data.apps.vk) {
                    $.fn.CBK_API.VKinit(result.Data.apps.vk);
                }
                if (result.Data.apps.fb) {
                    $.fn.CBK_API.FBinit(result.Data.apps.fb);
                }
                if (result.Data.apps.gp) {
                    $.fn.CBK_API.GPinit(result.Data.apps.gp);
                }
                if (result.Data.showPromo && $.fn.CBK_API.settings.hasForm) {
                    if (!$.fn.CBK_API.settings.defaultPromo) {
                        $.fn.CBK_API.showPromo();
                    } else {
                        $('input[name="cbkApi-promo"]').val($.fn.CBK_API.settings.defaultPromo);
                    }
                }
			});
		};

        $.fn.CBK_API.VKinit = function (vkInfo) {
            $.getScript("//vk.com/js/api/openapi.js", function(){
                VK.init({
                    apiId: vkInfo.apiId
                });
                $.fn.CBK_API.settings.social.vk = true;
                $.fn.CBK_API.settings.social.vkId = vkInfo.apiId;
            });
        };

        $.fn.CBK_API.VKsign = function (startProductFor, vkSuccess, vkFail, signFinish, signInOnly) {
            if ($.fn.CBK_API.settings.social.vk) {
                var path = "socialsignup";
				if (signInOnly) {
                    path = "socialsignin";
                }
                VK.Auth.login(function (response) {
                    if (response.session) {
                        var url = window.location.protocol + '//' + $.fn.CBK_API.settings.domain + "/papi?Action=" + path + "&callback=?";
                        if (typeof(vkSuccess) === "function") {
                            vkSuccess(response);
                        }

                        jQuery.getJSON(url, {
                            currentdomain: $.fn.CBK_API.settings.domain,
                            settings: response,
                            p: $.fn.CBK_API.getCookie('WhiteSaaSSignupPartnerId'),
                            r: $.fn.CBK_API.getCookie('CallbackSignupPartnerId'),
                            visitorId: $.fn.CBK_API.getCookie('WhiteCallback_visitor'),
                            visitId: $.fn.CBK_API.getCookie('WhiteCallback_visit'),
                            startProductFor: startProductFor,
                            socialTypeId: 1
                        }, function (result) {
                            if (typeof(signFinish) === "function") {
                                signFinish(result);
                            }
                        });
                    } else {
                        if (typeof(vkFail) === "function") {
                            vkFail(response);
                        }
                    }
                }, 4194304);
            }
        };

        $.fn.CBK_API.FBinit = function (fbInfo) {
            $.getScript("//connect.facebook.net/ru_RU/sdk.js", function(){
                window.fbAsyncInit = function() {
                    FB.init({
                        appId      : fbInfo.appId,
                        xfbml      : true,
                        version    : 'v2.5'
                    });
                };
                $.fn.CBK_API.settings.social.fb = true;
                $.fn.CBK_API.settings.social.fbId = fbInfo.appId;
            });
        };

        $.fn.CBK_API.FBsign = function (startProductFor, fbSuccess, fbFail, signFinish, signInOnly) {
            if ($.fn.CBK_API.settings.social.vk) {
                var path = "socialsignup";
                if (signInOnly) {
                    path = "socialsignin";
                }
                FB.login(function(response) {
                    if (response.authResponse) {
                        $.fn.CBK_API.settings.social.fbUserInfo.id = response.authResponse.userID;
                        $.fn.CBK_API.settings.social.fbUserInfo.accessToken = response.authResponse.accessToken;
                        $.fn.CBK_API.settings.social.fbUserInfo.signedRequest = response.authResponse.signedRequest;

                        $.ajax({
                            url: 'https://graph.facebook.com/me?fields=id,email,first_name,last_name,picture.width(100).height(100)&access_token=' +response.authResponse.accessToken,
                            type: 'GET',
                            dataType: 'jsonp',
                            crossDomain: true,
                            success: function(data){
                                $.fn.CBK_API.settings.social.fbUserInfo.info = data;
                                $.fn.CBK_API.settings.social.fbUserInfo.info.name = data.first_name + ' ' + data.last_name;
                                $.fn.CBK_API.settings.social.fbUserInfo.picture = data.picture;

                                var url = window.location.protocol + '//' + $.fn.CBK_API.settings.domain + "/papi?Action=" + path + "&callback=?";
                                 jQuery.getJSON(url, {
                                     currentdomain: $.fn.CBK_API.settings.domain,
                                     settings: $.fn.CBK_API.settings.social.fbUserInfo,
                                     p: $.fn.CBK_API.getCookie('WhiteSaaSSignupPartnerId'),
                                     r: $.fn.CBK_API.getCookie('CallbackSignupPartnerId'),
                                     visitorId: $.fn.CBK_API.getCookie('WhiteCallback_visitor'),
                                     visitId: $.fn.CBK_API.getCookie('WhiteCallback_visit'),
                                     startProductFor: startProductFor,
                                     socialTypeId: 2
                                 }, function (result) {
                                     if (typeof(signFinish) === "function") {
                                     signFinish(result);
                                     }
                                 });
                            }
                        });
                    } else {
                        if (typeof(fbFail) === "function") {
                            fbFail(response);
                        }
                    }
                }, {scope: 'public_profile,email'});
            }
        };

        $.fn.CBK_API.GPinit = function (gpInfo) {
            window.handleClientLoad = function(){

                window.gapi.client.setApiKey(gpInfo.apiKey);

                $.fn.CBK_API.settings.social.gp = true;
                $.fn.CBK_API.settings.social.gpApiKey = gpInfo.apiKey;
                $.fn.CBK_API.settings.social.gpClientId = gpInfo.clientId;
            };
            $.getScript("//apis.google.com/js/client.js?onload=handleClientLoad", function(){});
        };

        $.fn.CBK_API.GPsign = function (startProductFor, gpSuccess, gpFail, signFinish, signInOnly) {
            if ($.fn.CBK_API.settings.social.gp) {
                var path = "socialsignup";
                if (signInOnly) {
                    path = "socialsignin";
                }
                gapi.auth.authorize({client_id: $.fn.CBK_API.settings.social.gpClientId,
                    scope: [
                        'https://www.googleapis.com/auth/plus.me',
                        "https://www.googleapis.com/auth/userinfo.email"
                    ], immediate: false},
                    function(response){

                        gapi.client.load('plus', 'v1').then(function() {
                            var request = gapi.client.plus.people.get({
                                'userId': 'me'
                            });

                            request.then(function(resp) {
                                if (typeof(gpSuccess) === "function") {
                                    gpSuccess(resp);
                                }

                                var url = window.location.protocol + '//' + $.fn.CBK_API.settings.domain + "/papi?Action=" + path + "&callback=?";
                                jQuery.getJSON(url, {
                                    currentdomain: $.fn.CBK_API.settings.domain,
                                    settings: resp.result,
                                    p: $.fn.CBK_API.getCookie('WhiteSaaSSignupPartnerId'),
                                    r: $.fn.CBK_API.getCookie('CallbackSignupPartnerId'),
                                    visitorId: $.fn.CBK_API.getCookie('WhiteCallback_visitor'),
                                    visitId: $.fn.CBK_API.getCookie('WhiteCallback_visit'),
                                    startProductFor: startProductFor,
                                    socialTypeId: 3
                                }, function (result) {
                                    if (typeof(signFinish) === "function") {
                                        signFinish(result);
                                    }
                                });

                            }, function(reason) {
                                if (typeof(gpFail) === "function") {
                                    gpFail(reason);
                                }
                            });
                        });

                    });
            }
        };

		$.fn.CBK_API.getuserinfo = function (callback) {
			var url = window.location.protocol + '//' + $.fn.CBK_API.settings.domain + "/papi?Action=getuserinfojs&callback=?";
			jQuery.getJSON(url, {
				currentdomain: $.fn.CBK_API.settings.domain
			}, function (result) {
				if (result.Success && result.Data) {
					$.fn.CBK_API.settings.islogin = result.Data.islogin;
					$.fn.CBK_API.settings.email = result.Data.email;
				}
				callback(result);
			});
		};

		$.fn.CBK_API.signup = function (domain, name, email, phone, callback, startProductFor, promocode, site, crmDomain) {
			if (!email) {
				callback(false);
				return;
			}

            var _d = {
                domain: domain,
                name: name,
                email: email,
                phone: phone,
                site: site,
                currentdomain: $.fn.CBK_API.settings.domain,
                p: $.fn.CBK_API.getCookie('WhiteSaaSSignupPartnerId'),
                r: $.fn.CBK_API.getCookie('CallbackSignupPartnerId'),
                visitorId: $.fn.CBK_API.getCookie('WhiteCallback_visitorId'),
                visitId: $.fn.CBK_API.getCookie('WhiteCallback_visit'),
                roistatPromo: $.fn.CBK_API.getCookie('roistat_visit'),
                startProductFor: startProductFor,
                promocode: promocode,
                ws_hz_id: $.fn.CBK_API.getCookie('ws_hz_id'),
                ws_hz_site: $.fn.CBK_API.getCookie('ws_hz_site'),
                ws_hz_email: $.fn.CBK_API.getCookie('ws_hz_email'),
				crmDomain: crmDomain,
                yandexClientId: $.fn.CBK_API.getCookie('_ym_uid') || null
            };
			var url = window.location.protocol + '//' + $.fn.CBK_API.settings.domain + "/papi?Action=signupjs&callback=?";
			jQuery.getJSON(url, _d, function (result) {
                if (typeof window.ws_OnSignUp === 'function') {
                    window.ws_OnSignUp({
                        data: _d,
                        result: result
                    });
                }

                try {
                    // отправляем во все метрики данные о регитсрации в качестве доп параметра метрики
                    var yaCounters = Ya._metrika.hitParam;
                    if (typeof (yaCounters) !== "undefined") {
                        for (var yaCounter in yaCounters) {
                            var metricaName = "yaCounter" + yaCounter.split(":")[0];

                            if (typeof (window[metricaName]) !== "undefined") {
                                window[metricaName].userParams({
                                    is_reg: 1,
                                    reg_email: email
                                });
                            }
                        }
                    }
                } catch (e) {
                    console.log(e);
                }

                if (typeof window.ws_OnSignUpSync === 'function') {

                    window.ws_OnSignUpSync({
                        data: _d,
                        result: result
                    }, function(){
                        if ($.fn.CBK_API.settings.domain == 'ru.callbackkiller.com' || $.fn.CBK_API.settings.domain == 'ua.callbackkiller.com') {
                            // отправляем в CPA сеть, просил добавить Павел
                            var el = new Image(); el.src = '//pixel-conv.ru/conv/?t=c&id=265402&uid=85549&h=bb0aa073fa4409c1b2621f1f83d6a793';
                            callback(result);
                        } else {
                            callback(result);
                        }
                    });

                } else {
                    if ($.fn.CBK_API.settings.domain == 'ru.callbackkiller.com' || $.fn.CBK_API.settings.domain == 'ua.callbackkiller.com') {
                        // отправляем в CPA сеть, просил добавить Павел
                        var el = new Image(); el.src = '//pixel-conv.ru/conv/?t=c&id=265402&uid=85549&h=bb0aa073fa4409c1b2621f1f83d6a793';
                        callback(result);
                    } else {
                        callback(result);
                    }
                }
			});
		};

		$.fn.CBK_API.signin = function (email, password, callback) {
			if (!email || !password) {
				callback(false);
				return;
			}

			var url = window.location.protocol + '//' + $.fn.CBK_API.settings.domain + "/papi?Action=signin&callback=?";
			jQuery.getJSON(url, {
				email: email,
				password: password,
				currentdomain: $.fn.CBK_API.settings.domain
			}, function (result) {
				callback(result);
			});
		};

		$.fn.CBK_API.forgot = function (email, callback, retry) {
			if (!email) {
				callback(false);
			}
			var url = window.location.protocol + '//' + $.fn.CBK_API.settings.domain + "/papi?Action=forgotjs";
			jQuery.post(url, {
				email: email,
                retry: retry,
				currentdomain: $.fn.CBK_API.settings.domain
			}, function (result) {
				callback(result);
			}, 'json');
		};

		$.fn.CBK_API.parseQuery = function (query) {
			var Params = new Object();
			if (!query) return Params; // return empty object
			var Pairs = query.split(/[;&]/);
			for (var i = 0; i < Pairs.length; i++) {
				var KeyVal = Pairs[i].split('=');
				if (!KeyVal || KeyVal.length !== 2) continue;
				var key = unescape( KeyVal[0] );
				var val = unescape( KeyVal[1] );
				val = val.replace(/\+/g, ' ');
				Params[key] = val;
			}
			return Params;
		};

		$.fn.CBK_API.setCookie = function (name, value, expires, path, domain, secure) {
			if (!name || !value)
				return false;
			if (!path)
				path = '/';

			var str = name + '=' + encodeURIComponent(value);
			if (expires)
				str += '; expires=' + expires.toGMTString();
			if (path)
				str += '; path=' + path;
			if (domain)
				str += '; domain=' + domain;
			if (secure)
				str += '; secure';
			document.cookie = str;

			return true;
		};

		$.fn.CBK_API.getCookie = function (name) {
			var pattern = "(?:; )?" + name + "=([^;]*);?";
			var regexp = new RegExp(pattern);

			if (regexp.test(document.cookie))
				return decodeURIComponent(RegExp["$1"]);

			return false;
		};

		$.fn.CBK_API.deleteCookie = function (name, path, domain) {
			if (!path)
				path = '/';
			$.fn.CBK_API.setCookie(name, '0', new Date(0), path, domain);
			return true;
		};


		$.fn.CBK_API.array2json = function (arr) {
			var parts = [];
			var is_list = (Object.prototype.toString.apply(arr) === '[object Array]');

			for (var key in arr) {
				var value = arr[key];
				if (typeof value == "object") { //Custom handling for arrays
					if (is_list)
						parts.push($.fn.CBK_API.array2json(value)); /* :RECURSION: */
					else
						parts[key] = $.fn.CBK_API.array2json(value); /* :RECURSION: */
				} else {
					var str = "";
					if (!is_list)
						str = '"' + key + '":';

					//Custom handling for multiple data types
					if (typeof value == "number")
						str += value; //Numbers
					else if (value === false)
						str += 'false'; //The booleans
					else if (value === true)
						str += 'true';
					else
						str += '"' + value + '"'; //All other things

					parts.push(str);
				}
			}
			var json = parts.join(",");

			if (is_list)
				return '[' + json + ']';//Return numerical JSON
			return '{' + json + '}';//Return associative JSON
		};

        $.fn.CBK_API.showPromo = function() {
            $.fn.CBK_API.settings.showPromo = true;
            $('#cbkApi-promo-check-container').removeClass('cbkApi-hide');
            $('#cbkApi-phone-container').addClass('cbkApi-margin-m');

            $('.cbkApi-promo-check-lnk').on('click', function(e){
                $('#cbkApi-phone-container').removeClass('cbkApi-margin-m');
                $('#cbkApi-promo-check-container').addClass('cbkApi-hide');
                $('#cbkApi-promo-container').removeClass('cbkApi-hide');
                e.preventDefault();
                return false;
            });
        };

        $.fn.CBK_API.initForm = function() {
            $.fn.CBK_API.setFormTemplate();

            var styles = '<style>.cbkApi-button{background: ' + $.fn.CBK_API.settings.btnColor + ' !important;border: 1px solid ' + $.fn.CBK_API.settings.btnBorderColor + ' !important;} .cbkApi-button:hover{background: ' + $.fn.CBK_API.settings.btnColor + ' !important;border: 1px solid ' + $.fn.CBK_API.settings.btnBorderColor + ' !important;}' +
					'.cbkApi-button.cbkApi-transparent{ background: none !important; border: 1px solid}.cbkApi-button.cbkApi-transparent:hover{background: ' + $.fn.CBK_API.settings.btnColor + ' !important; color:white!important;}</style>';
            $(styles).appendTo('body');

            $($.fn.CBK_API.signupFormTemplate).appendTo('body');
            $($.fn.CBK_API.waitFormTemplate).appendTo('body');
            $($.fn.CBK_API.signinFormTemplate).appendTo('body');
            $($.fn.CBK_API.forgotFormTemplate).appendTo('body');

            if ($.fn.CBK_API.settings.showGiftPromoAfterSignup) {
                $($.fn.CBK_API.promoGiftFormTemplate).appendTo('body');
            }

			if (!$.fn.CBK_API.settings.hasSignupWizzard) {
				$('#cbkApiSignUpForm .cbkApi-form-wizard-nav').remove();
			}

			if (!$.fn.CBK_API.settings.hasSiteField) {
				$('#cbkApi-site-container').remove();
			}

			if ($.fn.CBK_API.settings.showAgreementCheck) {
				$('#cbkApi-agreement-check-container').removeClass('cbkApi-hide');
			}

            if ($.fn.CBK_API.settings.showCountrySelect && $.fn.CBK_API.settings.countryList.cntList) {
                $('#cbkApi-country-container').removeClass('cbkApi-hide');

                for(var i = 0; i < $.fn.CBK_API.settings.countryList.cntList.length; i++) {
                    if (i == 0) {
                        $('<option value="' + (i + 1) + '" selected="selected">' + $.fn.CBK_API.settings.countryList.cntList[i] + '</option>').appendTo( $('select[name="cbkApi-country"]') );
                    } else {
                        $('<option value="' + (i + 1) + '">' + $.fn.CBK_API.settings.countryList.cntList[i] + '</option>').appendTo( $('select[name="cbkApi-country"]') );
                    }
                }
            }

            if ($.fn.CBK_API.settings.showCountrySelectSignIn && $.fn.CBK_API.settings.countryList.cntList) {
                $('#cbkApi-country-container-sign-in').removeClass('cbkApi-hide');

                for(var i = 0; i < $.fn.CBK_API.settings.countryList.cntList.length; i++) {
                    if (i == 0) {
                        $('<option value="' + (i + 1) + '" selected="selected">' + $.fn.CBK_API.settings.countryList.cntList[i] + '</option>').appendTo( $('select[name="cbkApi-country-sign-in"]') );
                    } else {
                        $('<option value="' + (i + 1) + '">' + $.fn.CBK_API.settings.countryList.cntList[i] + '</option>').appendTo( $('select[name=cbkApi-country-sign-in]') );
                    }
                }
            }

            if ($.fn.CBK_API.settings.phonePlaceholder) {
                $('input[name="cbkApi-phone"]').attr('placeholder', $.fn.CBK_API.settings.phonePlaceholder);
            }

            if ($.fn.CBK_API.settings.startProduct) {
                $('input[name="cbkApi-startproduct"]').val( $.fn.CBK_API.settings.startProduct );
            }

            if ($.fn.CBK_API.settings.saasForm) {
                $('#cbkApi-domain-container').removeClass('cbkApi-hide');
            }

            var re = /\#signupform\-(.*)/;
            var tlt = window.top.location.hash.match(re);
            var tlt_hash = tlt && tlt[1] ? decodeURI(tlt[1]) : false;
            if (tlt_hash) {
                $('#cbkApiSignUpForm').find('.cbkApi-modal-title').text(tlt_hash);
				//$('.cbkApi-btn-register').text(tlt_hash);
                $('#cbkApiSignUpForm').cbkapimodal();
            }

            if (window.top.location.hash === '#signupform') {
                $('#cbkApiSignUpForm').cbkapimodal();
            }

            var si = /\#signinform\-(.*)/;
            var sit = window.top.location.hash.match(si);
            var sit_hash = sit && sit[1] ? decodeURI(sit[1]) : false;
            if (sit_hash) {
                $('#cbkApiSignInForm').cbkapimodal();
            }

            if (window.top.location.hash === '#signinform') {
                $('#cbkApiSignInForm').cbkapimodal();
            }

            $('body').on('click', 'a', function (e) {
                var shref = $(this).attr('href');
                var tlt_l = shref.match(re);
                var trlt_l_hash = tlt_l && tlt_l[1] ? decodeURI(tlt_l[1]) : false;

                var sit_l = shref.match(re);
                var sit_l_hash = sit_l && sit_l[1] ? decodeURI(sit_l[1]) : false;

                if (trlt_l_hash) {
                    $('#cbkApiSignUpForm').find('.cbkApi-modal-title').text(trlt_l_hash);
                    //$('.cbkApi-btn-register').text(trlt_l_hash);
                } else {
                    $('#cbkApiSignUpForm').find('.cbkApi-modal-title').text('Отлично! Вы всего в одном шаге от регистрации!');
                    $('.cbkApi-btn-register').text('Зарегистрироваться');
                }
                if (trlt_l_hash || shref === '#signupform' || shref === window.top.location.origin + '#signupform' || shref === window.top.location.origin + '/#signupform') {
                    $('#cbkApiSignUpForm').cbkapimodal();
                    e.preventDefault();
                    return false;
                }
                if (sit_l_hash || shref === '#signinform' || shref === window.top.location.origin + '#signinform' || shref === window.top.location.origin + '/#signinform') {
                    $('#cbkApiSignInForm').cbkapimodal();
                    e.preventDefault();
                    return false;
                }
            });

            $('input[name="cbkApi-name"], input[name="cbkApi-email"], input[name="cbkApi-phone"], input[name="cbkApi-site"]').on('input',function(e){
                if ($('input[name="cbkApi-name"]').val().length >= 3) {
                    $('input[name="cbkApi-name"]').removeClass('cbkApi-input-error');
                }
                if ($('input[name="cbkApi-email"]').val().length >= 3) {
                    $('input[name="cbkApi-email"]').removeClass('cbkApi-input-error');
                }
                if ($('input[name="cbkApi-phone"]').val().length >= 3) {
                    $('input[name="cbkApi-phone"]').removeClass('cbkApi-input-error');
                }
                if ($('input[name="cbkApi-site"]').val().length >= 3) {
                    $('input[name="cbkApi-site"]').removeClass('cbkApi-input-error');
                }
            });

            $('#cbkAgreementCheck').change(function() {
                $('#cbkAgreementCheck').removeClass('cbkApi-input-error');
            });

            $('input[name="cbkApi-signin-email"], input[name="cbkApi-signin-password"]').on('input',function(e){
                if ($('input[name="cbkApi-signin-email"]').val().length >= 3) {
                    $('input[name="cbkApi-signin-email"]').removeClass('cbkApi-input-error');
                }
                if ($('input[name="cbkApi-signin-password"]').val().length >= 3) {
                    $('input[name="cbkApi-signin-password"]').removeClass('cbkApi-input-error');
                }
            });

            $('input[name="cbkApi-forgot-email"]').on('input',function(e){
                if ($('input[name="cbkApi-forgot-email"]').val().length >= 3) {
                    $('input[name="cbkApi-forgot-email"]').removeClass('cbkApi-input-error');
                }
            });

            $('.cbkApi-btn-register').on('click', function(e){
                var error = false;
                $('input[name="cbkApi-name"], input[name="cbkApi-email"], input[name="cbkApi-phone"], input[name="cbkApi-site"], input[name="cbkApi-domain"], input[id="#cbkAgreementCheck"]').removeClass('cbkApi-input-error');
                var cbkApiCountry = $('select[name="cbkApi-country"]').val();
                var cbkApiName = $('input[name="cbkApi-name"]').val();
                var cbkApiEmail = $('input[name="cbkApi-email"]').val();
                var cbkApiPhone = $('input[name="cbkApi-phone"]').val();
                var cbkApiSite = $('input[name="cbkApi-site"]').val();
                var cbkApiStartProduct = $('input[name="cbkApi-startproduct"]').val();
                var cbkApiPromo = $('input[name="cbkApi-promo"]').val();
                var cbpApiDomain = null;

                if (cbkApiName !== '' && cbkApiName.length < 3) {
                    $('input[name="cbkApi-name"]').addClass('cbkApi-input-error');
                    error = true;
                }
                if (cbkApiEmail == '' || cbkApiEmail.length < 3) {
                    $('input[name="cbkApi-email"]').addClass('cbkApi-input-error');
                    error = true;
                }
                if (cbkApiPhone !== '' && cbkApiPhone.length < 3) {
                    $('input[name="cbkApi-phone"]').addClass('cbkApi-input-error');
                    error = true;
                }
                if (!$("#cbkAgreementCheck").prop('checked') && ($.fn.CBK_API.settings.showAgreementCheck)) {
                    $("#cbkAgreementCheck").addClass("cbkApi-input-error");
                    $('.cbkApi-alert-alredy').html("Подтвердите пользовательское соглашение").removeClass('cbkApi-hide');
                    error = true;

                }
                if ($.fn.CBK_API.settings.hasSiteField && (cbkApiSite == '' || cbkApiSite.length < 3)) {
                    $('input[name="cbkApi-site"]').addClass('cbkApi-input-error');
                    error = true;
                }

                if ($.fn.CBK_API.settings.saasForm) {
                    cbpApiDomain = $('input[name="cbkApi-domain"]').val();
                    if (cbpApiDomain == '' || cbpApiDomain.length < 3 || cbpApiDomain.length > 15) {
                        $('input[name="cbkApi-domain"]').addClass('cbkApi-input-error');
                        error = true;
                    }
                }

                if (!error) {
					$('#cbkApiSignUpForm').cbkapimodal('hide');
					$('.cbkApi-alert-alredy').addClass('cbkApi-hide');
					$('.cbkApi-wait-text').html('Через несколько секунд вы будете переадресованы в личный кабинет...');
                    $('#cbkApiWaitForm').cbkapimodal();

                    if ($.fn.CBK_API.settings.showCountrySelect && $.fn.CBK_API.settings.countryList.cntValue && !$.fn.CBK_API.settings.saasForm) {
                        if ($.fn.CBK_API.settings.countryList.cntValue[cbkApiCountry]) {
                            $.fn.CBK_API.settings.domain = $.fn.CBK_API.settings.countryList.cntValue[cbkApiCountry];
                        }
                    }


                    $.fn.CBK_API.signup(cbpApiDomain, cbkApiName, cbkApiEmail, cbkApiPhone, function(result){
                        if (result && result.Success && result.Data.id && result.Data.loginhash) {
                            try {
                                var yaCounters = Ya._metrika.hitParam;
                                if (typeof (yaCounters) !== "undefined") {
                                    for (var yaCounter in yaCounters) {
                                        var metricaName = "yaCounter" + yaCounter.split(":")[0];

                                        if (typeof (window[metricaName]) !== "undefined") {
                                            if ($.fn.CBK_API.settings.saasForm) {
                                                window[metricaName].reachGoal("reg-ok");
                                            } else {
                                                window[metricaName].reachGoal("WSS_SIGNUP");
                                            }
                                        }
                                    }
                                }
                            } catch (e) {
                                console.log(e);
                            }
                            try {
                                if (!$.fn.CBK_API.settings.saasForm) {
                                    if (typeof (_gaq) !== "undefined") {
                                        _gaq.push(['_trackEvent', 'CallbackKILLER', 'SignUp', cbkApiEmail]);
										_gaq.push(['_trackEvent', 'WhiteSaaS', 'SignUp', cbkApiEmail]);
                                    }
                                    else if (typeof (ga) !== "undefined" && typeof (ga) === "function") {
                                        ga('send', 'event', 'CallbackKILLER', 'SignUp', cbkApiEmail);
                                        ga('send', 'event', 'WhiteSaaS', 'SignUp', cbkApiEmail);
                                    }
                                }
                                if (typeof (dataLayer) !== "undefined") {
                                    dataLayer.push({'event': 'GAEvent', 'eventCategory': 'CallbackKILLER', 'eventAction': 'SignUp'});
                                    dataLayer.push({'event': 'GAEvent', 'eventCategory': 'WhiteSaaS', 'eventAction': 'SignUp'});
                                    dataLayer.push({'event': 'SignUp'});
                                }
                            } catch (e) {
                                console.log(e);
                            }

                            if ($.fn.CBK_API.settings.showGiftPromoAfterSignup) {

                                $('#cbkApi-promo-gift-text').html(result.Data.promoGift);
                                $('#cbkApiWaitForm').cbkapimodal('hide');
                                $('#cbkApiPromoGiftForm').cbkapimodal();

                                $('body').on('click', '.cbkApi-btn-gottocabinet', function(e){
                                    e.preventDefault();

                                    window.location.href = window.location.protocol + '//' + $.fn.CBK_API.settings.domain + '/user/dashboard/?loginhash=' + result.Data.loginhash;
                                });

                            } else {
                                setTimeout(function(){
                                    window.location.href = window.location.protocol + '//' + $.fn.CBK_API.settings.domain + '/user/dashboard/?loginhash=' + result.Data.loginhash;
                                }, 500);
                            }
                        } else {
                            console.log(result.Errors);
							$('#cbkApiWaitForm').cbkapimodal('hide');
                            $('#cbkApiSignUpForm').cbkapimodal();
                            $('.cbkApi-alert-alredy').html(result.Errors[0]);
                            $('.cbkApi-alert-alredy').removeClass('cbkApi-hide');
                        }
                    }, cbkApiStartProduct, cbkApiPromo, cbkApiSite);
                }

                e.preventDefault();
                return false;
            });

            $('.cbkApi-btn-signin').on('click', function(e){
                var error = false;
                $('input[name="cbkApi-signin-email"], input[name="cbkApi-signin-password"]').removeClass('cbkApi-input-error');
                var cbkApiEmail = $('input[name="cbkApi-signin-email"]').val();
                var cbkApiPassword = $('input[name="cbkApi-signin-password"]').val();
                var cbkApiCountry = $('select[name="cbkApi-country-sign-in"]').val();

                if (cbkApiEmail == '' || cbkApiEmail.length < 3) {
                    $('input[name="cbkApi-signin-email"]').addClass('cbkApi-input-error');
                    error = true;
                }
                if (cbkApiPassword == '' && cbkApiPassword.length < 3) {
                    $('input[name="cbkApi-signin-password"]').addClass('cbkApi-input-error');
                    error = true;
                }

                if (!error) {
                    $('#cbkApiSignInForm').cbkapimodal('hide');
                    $('.cbkApi-alert-signin').addClass('cbkApi-hide');
					$('.cbkApi-wait-text').html('Через несколько секунд вы будете переадресованы в личный кабинет...');
					$('#cbkApiWaitForm').cbkapimodal();

                    if ($.fn.CBK_API.settings.showCountrySelectSignIn && $.fn.CBK_API.settings.countryList.cntValue && !$.fn.CBK_API.settings.saasForm) {
                        if ($.fn.CBK_API.settings.countryList.cntValue[cbkApiCountry]) {
                            $.fn.CBK_API.settings.domain = $.fn.CBK_API.settings.countryList.cntValue[cbkApiCountry];
                        }
                    }

                    $.fn.CBK_API.signin(cbkApiEmail, cbkApiPassword, function (result) {
                        if (result && result.loginhash) {
                            try {
                                var yaCounters = Ya._metrika.hitParam;
                                if (typeof (yaCounters) !== "undefined") {
                                    for (var yaCounter in yaCounters) {
                                        var metricaName = "yaCounter" + yaCounter.split(":")[0];

                                        if (typeof (window[metricaName]) !== "undefined") {
                                            window[metricaName].reachGoal("SIGNIN");
                                        }
                                    }
                                }
                            } catch (e) {
                                console.log(e);
                            }

							try {
								if (typeof (dataLayer) !== "undefined") {
									dataLayer.push({'event': 'GAEvent', 'eventCategory': 'CallbackKILLER', 'eventAction': 'SignIn'});
									dataLayer.push({'event': 'SignIn'});
								}
							} catch (e) {
                                console.log(e);
							}

                            try {
                                if (typeof (_gaq) !== "undefined") {
                                    _gaq.push(['_trackEvent', 'CallbackKILLER', 'SignIn', cbkApiEmail]);
                                }
                                else if (typeof (ga) !== "undefined" && typeof (ga) === "function") {
                                    ga('send', 'event', 'CallbackKILLER', 'SignIn', cbkApiEmail);
                                }
                            } catch (e) {
                                console.log(e);
                            }

                            var currentDomain = $.fn.CBK_API.settings.domain;
                            if (result.issuperuser === "1") {
                                currentDomain = 'admin.whitesaas.com';
                            }
                            else if (result.domain !== "" && typeof(result.domain) !== "undefined") {
                                currentDomain = result.domain;
                            }
                            window.location = window.location.protocol + '//' + currentDomain + '/user/dashboard/?loginhash=' + result.loginhash;
                        } else {
                            $('#cbkApiWaitForm').cbkapimodal('hide');
                            $('.cbkApi-alert-signin').html('Неправильный логин или пароль.').show();
                            $('#cbkApiSignInForm').cbkapimodal();
                        }
                    });
                }

                e.preventDefault();
                return false;
            });

            $('.cbkApi-btn-forgot').on('click', function(e){
                var error = false;
                $('input[name="cbkApi-forgot-email"]').removeClass('cbkApi-input-error');
                var cbkApiEmail = $('input[name="cbkApi-forgot-email"]').val();

                if (cbkApiEmail == '' || cbkApiEmail.length < 3) {
                    $('input[name="cbkApi-forgot-email"]').addClass('cbkApi-input-error');
                    error = true;
                }

                if (!error) {
					$('.cbkApi-wait-text').html('Пытаемся восстановить ваш пароль от личного кабинета...');
                    $('#cbkApiForgotForm').cbkapimodal('hide');
                    $('.cbkApi-alert-forgot').addClass('cbkApi-hide');
					$('#cbkApiWaitForm').cbkapimodal();

                    $.fn.CBK_API.forgot(cbkApiEmail, function (result) {
                        $('#cbkApiWaitForm').cbkapimodal('hide');
                        $('.cbkApi-alert-forgot').hide();
                        if (result && result.Success) {
                            $('input[name="cbkApi-forgot-email"]').val('');
                            $('.cbkApi-forgot-text').removeClass('cbkApi-hide');
                            $('.form-forgot').addClass('cbkApi-hide');
                            $('.cbkApi-btn-forgot').hide();
                            $('#cbkApiForgotForm').cbkapimodal();
                        } else {
                            $('.cbkApi-alert-forgot').html('E-mail не найден, пожалуйста, зарегистрируйтесь').show();

                            $('.cbkApi-forgot-text').addClass('cbkApi-hide');
                            $('.form-forgot').removeClass('cbkApi-hide');
                            $('.cbkApi-btn-forgot').show();
                            $('#cbkApiForgotForm').cbkapimodal();
                        }
                    });
                }

                e.preventDefault();
                return false;
            });

            $('.cbkApi-btn-showforgotform').on('click', function(e){
                $('#cbkApiSignInForm').cbkapimodal('hide');

                $('.cbkApi-forgot-text').addClass('cbkApi-hide');
                $('.form-forgot').removeClass('cbkApi-hide');
                $('.cbkApi-btn-forgot').show();
                $('#cbkApiForgotForm').cbkapimodal();

                e.preventDefault();
                return false;
            });

            $('.cbkApi-btn-showsignupform').on('click', function(e){
                $('#cbkApiSignInForm').cbkapimodal('hide');

                $('#cbkApiSignUpForm').find('.cbkApi-modal-title').text('Отлично! Вы всего в одном шаге от регистрации!');
                $('.cbkApi-btn-register').text('Зарегистрироваться');

                $('#cbkApiSignUpForm').cbkapimodal();

                e.preventDefault();
                return false;
            });
        };

        $.fn.CBK_API.setFormTemplate = function() {
            $.fn.CBK_API.signupFormTemplate = '<div id="cbkApiSignUpForm" class="cbkApi-modal cbkApi-fade cbkApi-hide">' +
                '<div class="cbkApi-modal-dialog">' +
                    '<div class="cbkApi-modal-content">' +
                        '<div class="cbkApi-modal-header">' +
                            '<button type="button" class="close cbkApi-close default" data-dismiss="modal" aria-hidden="true">×</button>' +
                            '<h4 class="cbkApi-modal-title">Отлично! Вы всего в одном шаге от регистрации!</h4>' +
                        '</div>' +
                        '<div class="cbkApi-modal-body">' +
	                        '<div class="cbkApi-form-wizard-nav">' +
	                        	'<div class="cbkApi-progress" style="width:50%;"><div class="cbkApi-progress-bar cbkApi-progress-bar-primary"></div></div>' +
								'<ul class="cbkApi-nav cbkApi-nav-justified cbkApi-nav-pills">' +
									'<li class="cbkApi-active"><div><span class="cbkApi-step">1</span> <span class="cbkApi-title">Принятие решения о регистрации</span></div></li>' +
									'<li><div><span class="cbkApi-step">2</span> <span class="cbkApi-title">Регистрация</span></div></li>' +
								'</ul>' +
							'</div>' +
                            '<div class="alert alert-danger alert-dismissable cbkApi-alert-alredy cbkApi-hide"></div>' +
                            '<form class="form-horizontal cbkApi-form-horizontal" novalidate="novalidate">' +
                                '<input type="hidden" name="cbkApi-startproduct" value="">' +
                                '<div class="form-group cbkApi-form-group cbkApi-hide" id="cbkApi-country-container">' +
                                    '<label class="cbkApi-label cbkApi-col-sm-3 control-label">Страна:</label>' +
                                    '<div class="cbkApi-col-sm-9">' +
                                        '<select name="cbkApi-country" class="form-control cbkApi-form-control"></select>' +
                                    '</div>' +
                                '</div>' +
                                '<div class="form-group cbkApi-form-group cbkApi-hide" id="cbkApi-domain-container">' +
                                    '<label class="cbkApi-label cbkApi-col-sm-3 control-label">Домен:</label>' +
                                    '<div class="cbkApi-col-sm-9" style="position: relative;">' +
                                        '<input type="text" placeholder="укажите домен" class="col-sm-8 form-control cbkApi-form-control" name="cbkApi-domain" value="">' +
                                        '<span class="cbkApi-cover">От 3 до 15 символов, только цифры и латинские символы. Для Вас автоматически создается домен третьего уровня. После регистрации в сервисе Вы сможете подключить свой домен.</span>' +
                                        '<span class="cbkApi-holder">.whitesaas.com</span>' +
                                    '</div>' +
                                '</div>' +
                                '<div class="form-group cbkApi-form-group">' +
                                    '<label class="cbkApi-label cbkApi-col-sm-3 control-label">Введите Ваше имя:</label>' +
                                    '<div class="cbkApi-col-sm-9">' +
                                        '<input type="text" placeholder="например Александр" class="col-sm-8 form-control cbkApi-form-control" name="cbkApi-name" value="">' +
                                    '</div>' +
                                '</div>' +
                                '<div class="form-group cbkApi-form-group">' +
                                    '<label class="cbkApi-label cbkApi-col-sm-3 control-label">Введите Ваш E-mail:</label>' +
                                    '<div class="cbkApi-col-sm-9">' +
                                        '<input type="text" placeholder="например alex@mail.ru" class="col-sm-8 form-control cbkApi-form-control" name="cbkApi-email" value="">' +
                                    '</div>' +
                                '</div>' +
								'<div class="form-group cbkApi-form-group" id="cbkApi-site-container">' +
									'<label class="cbkApi-label cbkApi-col-sm-3 control-label">Введите Ваш сайт:</label>' +
									'<div class="cbkApi-col-sm-9">' +
										'<input type="text" placeholder="например site.ru" class="col-sm-8 form-control cbkApi-form-control" name="cbkApi-site" value="">' +
									'</div>' +
								'</div>' +
                                '<div class="form-group cbkApi-form-group" id="cbkApi-phone-container">' +
                                    '<label class="cbkApi-label cbkApi-col-sm-3 control-label">Введите Ваш телефон:</label>' +
                                    '<div class="cbkApi-col-sm-9">' +
                                        '<input type="text" placeholder="например +7(906)395-91-02" class="col-sm-8 form-control cbkApi-form-control" name="cbkApi-phone" value="">' +
                                    '</div>' +
                                '</div>' +
                                '<div class="form-group cbkApi-form-group cbkApi-hide" id="cbkApi-agreement-check-container">'+
                                    '<label class="cbkApi-label control-label" style="width: 97%;padding-top: 0px;font-size: 13px !important;">'+
                                        '<div style="display: inline-block; margin-right: 5px;">'+
                                            '<input type="checkbox" class="form-control cbkApi-form-control" id="cbkAgreementCheck" style="border: solid 1px #cccccc;">'+
                                        '</div>'+
                                        '<span style="vertical-align: top;">Согласен на обработку персональных данных</span>'+
                                    '</label>'+
                                '</div>' +
                                '<div class="form-group cbkApi-hide cbkApi-form-group" id="cbkApi-promo-container">' +
                                    '<label class="cbkApi-label cbkApi-col-sm-3 control-label">Промокод:</label>' +
                                    '<div class="cbkApi-col-sm-9">' +
                                        '<input type="text" placeholder="введите промокод" class="col-sm-8 form-control cbkApi-form-control" name="cbkApi-promo" value="">' +
                                    '</div>' +
                                '</div>' +
                                '<div class="form-group cbkApi-form-group cbkApi-no-margin-b cbkApi-hide" id="cbkApi-promo-check-container">' +
                                    '<label class="cbkApi-label cbkApi-col-sm-3 control-label">&nbsp;</label>' +
                                    '<div class="cbkApi-col-sm-9">' +
                                        '<a href="javascript:void(0)" class="cbkApi-promo-check-lnk">у меня есть промокод</a>' +
                                    '</div>' +
                                '</div>' +
                            '</form>' +
                        '<div class="cbkApi-modal-footer">' +
                            '<button type="submit" class="cbkApi-button cbkApi-button-small cbkApi-transition cbkApi-btn-register">Зарегистрироваться</button>' +
                            //'<button type="button" class="cbkApi-button cbkApi-button-small cbkApi-transition cbkApi-transparent" data-dismiss="modal">Закрыть</button>' +
                        '</div>' +
                    '</div>' +
                '</div>' +
            '</div>';

            $.fn.CBK_API.waitFormTemplate = '<div id="cbkApiWaitForm" class="cbkApi-modal cbkApi-fade cbkApi-hide" aria-hidden="false">' +
                '<div class="cbkApi-modal-dialog">' +
                    '<div class="cbkApi-modal-content">' +
                        '<div class="cbkApi-modal-header">' +
                            '<h4 class="cbkApi-modal-title">Пожалуйста, подождите</h4>' +
                        '</div>' +
                        '<div class="cbkApi-modal-body">' +
                            '<p class="cbkApi-wait-text"></p>' +
                        '</div>' +
                    '</div>' +
                '</div>' +
            '</div>';

            $.fn.CBK_API.signinFormTemplate = '<div id="cbkApiSignInForm" class="cbkApi-modal cbkApi-fade cbkApi-hide" aria-hidden="false">' +
                '<div class="cbkApi-modal-dialog">' +
                    '<div class="cbkApi-modal-content">' +
                        '<div class="cbkApi-modal-header">' +
                            '<button type="button" class="close cbkApi-close default" data-dismiss="modal" aria-hidden="true">×</button>' +
                            '<h4 class="cbkApi-modal-title">Вход на сайт</h4>' +
                        '</div>' +
                        '<div class="cbkApi-modal-body">' +
                            '<div class="alert alert-danger alert-dismissable cbkApi-alert-signin cbkApi-hide"></div>' +
                                '<form class="form-horizontal cbkApi-form-horizontal form-signin" novalidate="novalidate">' +
                                    '<div class="form-group cbkApi-form-group cbkApi-hide" id="cbkApi-country-container-sign-in">' +
                                        '<label class="cbkApi-label cbkApi-col-sm-3 control-label">Страна:</label>' +
                                        '<div class="cbkApi-col-sm-9">' +
                                            '<select name="cbkApi-country-sign-in" class="form-control cbkApi-form-control"></select>' +
                                        '</div>' +
                                    '</div>' +
                                    '<div class="form-group cbkApi-form-group">' +
                                        '<label class="cbkApi-label cbkApi-col-sm-3 control-label">Ваш E-mail:</label>' +
                                        '<div class="cbkApi-col-sm-9">' +
                                            '<input type="text" class="col-sm-8 form-control cbkApi-form-control" placeholder="например alex@mail.ru" name="cbkApi-signin-email" value="">' +
                                        '</div>' +
                                    '</div>' +
                                    '<div class="form-group cbkApi-form-group">' +
                                        '<label class="cbkApi-label cbkApi-col-sm-3 control-label">Ваш пароль:</label>' +
                                        '<div class="cbkApi-col-sm-9">' +
                                            '<input type="password" class="col-sm-8 form-control cbkApi-form-control" placeholder="укажите пароль" name="cbkApi-signin-password" value="">' +
                                            '<p class="cbkApi-forgotpassword-container"><a class="cbkApi-btn-showforgotform" href="javascript:void()">Я забыл пароль</a>' +
                                            '<a class="cbkApi-btn-showsignupform" href="javascript:void()" style="float: right;">Зарегистрироваться</a></p>' +
                                        '</div>' +
                                    '</div>' +
                                '</form>' +
                            '<div class="cbkApi-modal-footer">' +
                                '<button type="submit" class="cbkApi-button cbkApi-button-small cbkApi-transition cbkApi-btn-signin">Войти</button>' +
                                '<button type="button" class="cbkApi-button cbkApi-button-small cbkApi-transition cbkApi-transparent" data-dismiss="modal">Закрыть</button>' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                '</div>' +
            '</div>';

            $.fn.CBK_API.forgotFormTemplate = '<div id="cbkApiForgotForm" class="cbkApi-modal cbkApi-fade cbkApi-hide" aria-hidden="false">' +
                '<div class="cbkApi-modal-dialog">' +
                    '<div class="cbkApi-modal-content">' +
                        '<div class="cbkApi-modal-header">' +
                            '<button type="button" class="close cbkApi-close default" data-dismiss="modal" aria-hidden="true">×</button>' +
                            '<h4 class="cbkApi-modal-title">Восстановление пароля</h4>' +
                        '</div>' +
                        '<div class="cbkApi-modal-body">' +
                            '<div class="alert alert-danger alert-dismissable cbkApi-alert-forgot cbkApi-hide"></div>' +
                            '<p class="cbkApi-forgot-text cbkApi-hide">Мы отправили Вам инструкцию по восстановлению пароля на почту.</p>' +
                            '<form class="form-horizontal cbkApi-form-horizontal form-forgot" novalidate="novalidate">' +
                                '<div class="form-group cbkApi-form-group">' +
                                    '<label class="cbkApi-label cbkApi-col-sm-3 control-label">Ваш E-mail:</label>' +
                                    '<div class="cbkApi-col-sm-9">' +
                                        '<input type="text" class="col-sm-8 form-control cbkApi-form-control" name="cbkApi-forgot-email" value="">' +
                                    '</div>' +
                                '</div>' +
                            '</form>' +
                            '<div class="cbkApi-modal-footer">' +
                                '<button type="submit" class="cbkApi-button cbkApi-button-small cbkApi-transition cbkApi-btn-forgot">Восстановить пароль</button>' +
                                '<button type="button" class="cbkApi-button cbkApi-button-small cbkApi-transition cbkApi-transparent" data-dismiss="modal">Закрыть</button>' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                '</div>' +
            '</div>';


			$.fn.CBK_API.promoGiftFormTemplate = '<div id="cbkApiPromoGiftForm" class="cbkApi-modal cbkApi-fade cbkApi-hide" aria-hidden="false">' +
                '<div class="cbkApi-modal-dialog">' +
                    '<div class="cbkApi-modal-content">' +
                        '<div class="cbkApi-modal-header"><h4 class="cbkApi-modal-title">Для вас подарок!</h4></div>' +
                        '<div class="cbkApi-modal-body">' +
                            '<div style="float: left;width: 30%;">' +
                                '<img style="display: block; margin: 0px;" border="0" width="160" height="160" alt="" align="left" src="https://content.saas-support.com/img/landing/DE_Ava-p.png">' +
                            '</div>' +
                            '<div style="float: left;width: 70%;">' +
                                'Мы приготовили подарок для ваших друзей.<br> Вот промокод: <b><span id="cbkApi-promo-gift-text">ДРУГУ-172205125003</span></b> <br>Отдайте его вашим друзьям и если они зарегистрируются по нему в течении суток, то получат <b>500 рублей</b> на бонусный счёт. <br>Вы можете пригласить сколько душе угодно друзей!' +
                                '<div style="text-align: right;padding: 10px;"> <button class="cbkApi-button cbkApi-button-small cbkApi-btn-gottocabinet">Перейти в кабинет</button></div>' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                '</div>' +
            '</div>';
        };

        $.fn.CBK_API.initTopper = function(callback) {
            $('head').prepend('<link rel="stylesheet" href="https://content.saas-support.com/css/cbkapi_topper.css?v=' + (new Date().getTime()) + '" type="text/css">');

            $.fn.CBK_API.topperTemplate = '<div id="cbkApi-share-topper" style="display:none;"><div class="cbkApi-topper"><p>Расскажите друзьям на своих страницах в соцсетях</p><div id="cbkApi-share" data-services="vkontakte,facebook,gplus,twitter,telegram" data-counter=""></div><span class="cbkApi-topper-info">Все, кто перейдёт по ссылке и зарегистрируются на сайте, станут вашими клиентами и вы будете получать вознаграждение - процент с их оплат</span></div><span class="close">×</span></div>';
            $('body').prepend($.fn.CBK_API.topperTemplate);

			$.getScript("//yastatic.net/es5-shims/0.0.2/es5-shims.min.js", function(){
                $.getScript("//yastatic.net/share2/share.js", function() {
                    Ya.share2('cbkApi-share', {
                        content: {
                            url: document.location.origin + document.location.pathname + document.location.search.replace("show=topper", "")
						}
					});
					if (typeof callback === 'function') {
						callback();
					}
                });
            });
		};

        $.fn.CBK_API.showTopper = function () {
			$('#cbkApi-share-topper').show();
			$('body').addClass('cbkApi-top-offset');

			$('body').on('click', '#cbkApi-share-topper .close', function(){
                $('body').removeClass('cbkApi-top-offset');
			});
        };

		$.fn.CBK_API.settings = {
			'domain': document.domain,
			'islogin': false,
			'email': false,
            social: {
                vk: false,
                vkId: false,
                fb: false,
                fbId: false,
                fbUserInfo: {},
                gp: false,
                gpClientId: false,
                gpApiKey: false
            },
            hasForm: false,
            hasSignupWizzard: false,
            hasSiteField: false,
			showCountrySelect: false,
            showCountrySelectSignIn: false,
            countryList: {
                cntList: [],
                cntValue: {}
            },
            phonePlaceholder: 'например +7(906)395-91-02',
			btnColor: '#f44336',
            btnBorderColor: '#f44336',
            startProduct: false,
            showPromo: false,
			defaultPromo: false,
            saasForm: false,
            partnerId: false,
            showGiftPromoAfterSignup: false,
            showAgreementCheck: false
		};

	})(jQuery);
})();)),(null==(x=a.icon)?void 0:x.type)?S.icon_type=a.icon.type:(null==(A=a.icon)?void 0:A.url)&&(S.icon_custom={image_url:T(a.icon.url)})}const O=b((0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"notifier_snackbar_text",children:o}),n&&(0,i.jsx)("div",{className:"notifier_snackbar_subtitle",children:n}),r&&(0,i.jsx)("div",{children:(0,i.jsx)("a",{className:"notifier_snackbar_action",href:r.href,children:r.label})})]}));return y=yield(0,p.showDoneBoxAsync)(O,k,S),y}))).apply(this,arguments)}function w(e){var t;null==(t=window.Notifier)||t.hideEvent(e)}function b(e){const t=document.createElement("div");return(0,a.flushSync)((()=>{(0,a.render)((0,r.createElement)(r.Fragment,null,e),t)})),t.innerHTML}function I(e){return e&&T(e)}function T(e){return encodeURI(e).replace(/'/g,"%27")}},212897:(e,t,o)=>{o.d(t,{Scroll:()=>l});var n=o(434788),i=o(820224),r=o(785893),a=o(853957),s=o(116805);const l=e=>{var{children:t}=e,o=(0,i._)(e,["children"]);return(0,r.jsx)(a.ScrollContext.Provider,{value:{createScroll:s.createScroll},children:(0,r.jsx)(a.Scroll,(0,n._)({},o,{children:t}))})};l.defaultProps={isNative:!1,isShadows:!1,neverHide:!1}},962009:(e,t,o)=>{o.d(t,{deepDecodeHTMLEntities:()=>i});var n=o(659397);function i(e){switch(typeof e){case"string":return(0,n.decodeHTMLEntities)(e);case"object":return null===e?e:Array.isArray(e)?e.map((e=>i(e))):Object.keys(e).reduce(((t,o)=>(void 0===e[o]||(t[o]=i(e[o])),t)),{});default:return e}}},531388:(e,t,o)=>{o.d(t,{highlightModule:()=>d});var n=o(710970),i=o(584841),r=o(314502),a=o(538248),s=o(448180);let l,c;function d(e){const t=document.getElementById(e.module);if(!t||!t.classList.contains("module"))return;window.cur.__narrowBarForceNotFixed=!0;const o=e.speed?e.speed:300;(0,r.scrollToY)((0,a.getXY)(t)[1]-100,o);const d=()=>{l&&(l.hideTT(),(0,r.enableBodyScroll)(),delete window.cur.__narrowBarForceNotFixed,(0,i.updateNarrow)(),e.onClose&&e.onClose())};l=new n.default(t,e.text,{highlight:!0,width:250,offset:[0,-17],side:"bottom",withCloseButton:!0,onBGClick:d,onCloseButtonClick:d}),l.show(),(0,r.disableBodyScroll)(),e.autoCancelDelay&&(c=setTimeout((()=>{d(),c=null}),e.autoCancelDelay),(0,s.pushNavDestroy)((()=>{c&&clearTimeout(c)})))}}},s={};function l(e){var t=s[e];if(void 0!==t)return t.exports;var o=s[e]={exports:{}};return a[e].call(o.exports,o,o.exports,l),o.exports}l.m=a,e=[],l.O=(t,o,n,i)=>{if(!o){var r=1/0;for(d=0;d<e.length;d++){for(var[o,n,i]=e[d],a=!0,s=0;s<o.length;s++)(!1&i||r>=i)&&Object.keys(l.O).every((e=>l.O[e](o[s])))?o.splice(s--,1):(a=!1,i<r&&(r=i));if(a){e.splice(d--,1);var c=n();void 0!==c&&(t=c)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[o,n,i]},l.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return l.d(t,{a:t}),t},o=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,l.t=function(e,n){if(1&n&&(e=this(e)),8&n)return e;if("object"==typeof e&&e){if(4&n&&e.__esModule)return e;if(16&n&&"function"==typeof e.then)return e}var i=Object.create(null);l.r(i);var r={};t=t||[null,o({}),o([]),o(o)];for(var a=2&n&&e;"object"==typeof a&&!~t.indexOf(a);a=o(a))Object.getOwnPropertyNames(a).forEach((t=>r[t]=()=>e[t]));return r.default=()=>e,l.d(i,r),i},l.d=(e,t)=>{for(var o in t)l.o(t,o)&&!l.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},l.f={},l.e=e=>Promise.all(Object.keys(l.f).reduce(((t,o)=>(l.f[o](e,t),t)),[])),l.u=e=>25394===e?"web/chunks/AudioLongtapModal.2415b990.js":24817===e?"web/chunks/hls.b496ce21.js":75980===e?"web/chunks/menu_settings.d381ced2.js":9375===e?"web/chunks/voice_message_player.3f9860c5.js":28762===e?"web/chunks/speech.ed86c092.js":57468===e?"web/chunks/SilentModeForms.445886b6.js":28872===e?"web/chunks/feed-client-nav-skeleton.8453ad7f.js":35953===e?"web/chunks/feed-client-nav-async-right-block.cf45b58d.js":29019===e?"web/chunks/ReportForm.e912ec05.js":55959===e?"web/chunks/group_invite_chat.f1c583fc.js":59240===e?"web/chunks/performance-stats.bacb2316.js":84670===e?"chunks/"+e+".2d612620.js":51615===e?"chunks/"+e+".0ac520ae.js":void 0,l.miniCssF=e=>25394===e?"web/chunks/6a66a172.css":75980===e?"web/chunks/5bbee2c9.css":57468===e?"web/chunks/a2979e7d.css":29019===e?"web/chunks/1c452c59.css":55959===e?"web/chunks/8590db6e.css":void 0,l.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n={},l.l=(e,t,o,i)=>{if(n[e])n[e].push(t);else{var r,a;if(void 0!==o)for(var s=document.getElementsByTagName("script"),c=0;c<s.length;c++){var d=s[c];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")=="vk:"+o){r=d;break}}r||(a=!0,(r=document.createElement("script")).charset="utf-8",r.timeout=120,l.nc&&r.setAttribute("nonce",l.nc),r.setAttribute("data-webpack","vk:"+o),r.src=e),n[e]=[t];var u=(t,o)=>{r.onerror=r.onload=null,clearTimeout(p);var i=n[e];if(delete n[e],r.parentNode&&r.parentNode.removeChild(r),i&&i.forEach((e=>e(o))),t)return t(o)},p=setTimeout(u.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=u.bind(null,r.onerror),r.onload=u.bind(null,r.onload),a&&document.head.appendChild(r)}},l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.p="/dist/",i=e=>new Promise(((t,o)=>{var n=l.miniCssF(e),i=l.p+n;if(((e,t)=>{for(var o=document.getElementsByTagName("link"),n=0;n<o.length;n++){var i=(a=o[n]).getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(i===e||i===t))return a}var r=document.getElementsByTagName("style");for(n=0;n<r.length;n++){var a;if((i=(a=r[n]).getAttribute("data-href"))===e||i===t)return a}})(n,i))return t();((e,t,o,n)=>{var i=document.createElement("link");i.rel="stylesheet",i.type="text/css",i.onerror=i.onload=r=>{if(i.onerror=i.onload=null,"load"===r.type)o();else{var a=r&&("load"===r.type?"missing":r.type),s=r&&r.target&&r.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=a,l.request=s,i.parentNode.removeChild(i),n(l)}},i.href=t,document.head.appendChild(i)})(e,i,t,o)})),r={19823:0},l.f.miniCss=(e,t)=>{r[e]?t.push(r[e]):0!==r[e]&&{25394:1,29019:1,55959:1,57468:1,75980:1}[e]&&t.push(r[e]=i(e).then((()=>{r[e]=0}),(t=>{throw delete r[e],t})))},(()=>{l.b=document.baseURI||self.location.href;var e={19823:0};l.f.j=(t,o)=>{var n=l.o(e,t)?e[t]:void 0;if(0!==n)if(n)o.push(n[2]);else{var i=new Promise(((o,i)=>n=e[t]=[o,i]));o.push(n[2]=i);var r=l.p+l.u(t),a=new Error;l.l(r,(o=>{if(l.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var i=o&&("load"===o.type?"missing":o.type),r=o&&o.target&&o.target.src;a.message="Loading chunk "+t+" failed.\n("+i+": "+r+")",a.name="ChunkLoadError",a.type=i,a.request=r,n[1](a)}}),"chunk-"+t,t)}},l.O.j=t=>0===e[t];var t=(t,o)=>{var n,i,[r,a,s]=o,c=0;if(r.some((t=>0!==e[t]))){for(n in a)l.o(a,n)&&(l.m[n]=a[n]);if(s)var d=s(l)}for(t&&t(o);c<r.length;c++)i=r[c],l.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return l.O(d)},o=self.webpackChunkvkweb=self.webpackChunkvkweb||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var c=l.O(void 0,[213,2067,83737,57451,71610,5038,95167,22167,91881,14251,67642,18864,47624,12890,15553],(()=>l(163614)));c=l.O(c)})();