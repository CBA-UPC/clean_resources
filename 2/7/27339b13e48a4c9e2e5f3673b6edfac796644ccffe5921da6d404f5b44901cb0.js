// For license information, see `https://assets.adobedtm.com/16a36399704a/2efca5d8f658/5d21ac44ad82/RC6e5921fec368450cb1c07fa5cd7bf26a-source.js`.
_satellite.__registerScript('https://assets.adobedtm.com/16a36399704a/2efca5d8f658/5d21ac44ad82/RC6e5921fec368450cb1c07fa5cd7bf26a-source.min.js', "<!-- Google Code for Remarketing Tag -->\n<script type=\"text/javascript\">\n/* <![CDATA[ */\nvar google_conversion_id = 1000825659;\nvar google_custom_params = window.google_tag_params;\nvar google_remarketing_only = true;\n/* ]]> */\n</script>\n<script type=\"text/javascript\" src=\"//www.googleadservices.com/pagead/conversion.js\">\n</script>\n<noscript>\n<div style=\"display:inline;\">\n<img height=\"1\" width=\"1\" style=\"border-style:none;\" alt=\"\" src=\"//googleads.g.doubleclick.net/pagead/viewthroughconversion/1000825659/?value=0&guid=ON&script=0\"/>\n</div>\n</noscript>");Time: {
						getter: '_getWarningTime',
						value: 0
					}
				},
				EXTENDS: A.Base,
				NAME: 'liferaysession',
				prototype: {
					initializer: function(config) {
						var instance = this;

						instance._cookieOptions = {
							path: '/',
							secure: A.UA.secure
						};

						instance._registered = {};

						instance.set('timestamp');

						instance._initEvents();

						instance._startTimer();
					},

					destructor: function() {
						var instance = this;

						(new A.EventHandle(instance._eventHandlers)).detach();

						instance._stopTimer();
					},

					expire: function() {
						var instance = this;

						instance.set('sessionState', 'expired', SRC_EVENT_OBJ);
					},

					extend: function() {
						var instance = this;

						instance.set('sessionState', 'active', SRC_EVENT_OBJ);
					},

					registerInterval: function(fn) {
						var instance = this;

						var fnId;
						var registered = instance._registered;

						if (Lang.isFunction(fn)) {
							fnId = A.stamp(fn);

							registered[fnId] = fn;
						}

						return fnId;
					},

					resetInterval: function() {
						var instance = this;

						instance._stopTimer();
						instance._startTimer();
					},

					unregisterInterval: function(fnId) {
						var instance = this;

						var registered = instance._registered;

						if (registered.hasOwnProperty(fnId)) {
							delete registered[fnId];
						}

						return fnId;
					},

					warn: function() {
						var instance = this;

						instance.set('sessionState', 'warned', SRC_EVENT_OBJ);
					},

					_afterSessionStateChange: function(event) {
						var instance = this;

						var details = event.details;
						var newVal = event.newVal;

						var src = null;

						if ('src' in event && details.length) {
							src = details[0];
						}

						instance.fire(MAP_SESSION_STATE_EVENTS[newVal] || newVal, src);
					},

					_defActivatedFn: function(event) {
						var instance = this;

						instance.set('timestamp');

						if (event.src == SRC) {
							instance._getExtendIO().start();
						}
					},

					_defExpiredFn: function(event) {
						var instance = this;

						A.clearInterval(instance._intervalId);

						instance.set('timestamp', 'expired');

						if (event.src === SRC) {
							instance._getExpireIO().start();
						}
					},

					_getExpireIO: function() {
						var instance = this;

						var expireIO = instance._expireIO;

						if (!expireIO) {
							expireIO = A.io.request(
								URL_BASE + 'expire_session',
								{
									autoLoad: false,
									on: {
										failure: function(event, id, obj) {
											instance._expireIO = null;

											A.setTimeout(
												function() {
													instance._getExpireIO().start();
												},
												1000
											);
										},
										success: function(event, id, obj) {
											Liferay.fire('sessionExpired');

											if (instance.get('redirectOnExpire')) {
												location.href = instance.get('redirectUrl');
											}
										}
									}
								}
							);

							instance._expireIO = expireIO;
						}

						return expireIO;
					},

					_getExtendIO: function() {
						var instance = this;

						var extendIO = instance._extendIO;

						if (!extendIO) {
							extendIO = A.io.request(
								URL_BASE + 'extend_session',
								{
									autoLoad: false
								}
							);

							instance._extendIO = extendIO;
						}

						return extendIO;
					},

					_getLengthInMillis: function(value) {
						var instance = this;

						return value * 1000;
					},

					_getTimestamp: function(value) {
						var instance = this;

						return A.Cookie.get(instance._cookieKey, instance._cookieOptions) || instance._initTimestamp;
					},

					_getWarningTime: function() {
						var instance = this;

						return instance.get('sessionLength') - instance.get('warningLength');
					},

					_initEvents: function() {
						var instance = this;

						instance.publish(
							'activated',
							{
								defaultFn: A.bind('_defActivatedFn', instance)
							}
						);

						instance.publish(
							'expired',
							{
								defaultFn: A.bind('_defExpiredFn', instance)
							}
						);

						instance.publish('warned');

						instance._eventHandlers = [
							instance.on('sessionStateChange', instance._onSessionStateChange),
							instance.after('sessionStateChange', instance._afterSessionStateChange),
							A.on(
								'io:complete',
								function(transactionId, response, args) {
									if (!args || args && args.sessionExtend || !Lang.isBoolean(args.sessionExtend)) {
										instance.resetInterval();
									}
								}
							),
							Liferay.once(
								'screenLoad',
								function() {
									instance.destroy();
								}
							)
						];
					},

					_onSessionStateChange: function(event) {
						var instance = this;

						var newVal = event.newVal;
						var prevVal = event.prevVal;

						if (prevVal == 'expired' && prevVal != newVal) {
							event.preventDefault();
						}
						else if (prevVal == 'active' && prevVal == newVal) {
							instance._afterSessionStateChange(event);
						}
					},

					_setTimestamp: function(value) {
						var instance = this;

						value = String(value || Date.now());

						instance._initTimestamp = value;

						if (navigator.cookieEnabled) {
							A.Cookie.set(instance._cookieKey, value, instance._cookieOptions);
						}
					},

					_setWarningLength: function(value) {
						var instance = this;

						return Math.min(instance.get('sessionLength'), value);
					},

					_startTimer: function() {
						var instance = this;

						var sessionLength = instance.get('sessionLength');
						var warningTime = instance.get('warningTime');

						var registered = instance._registered;

						var interval = 1000;

						instance._intervalId = A.setInterval(
							function() {
								var sessionState = instance.get('sessionState');

								var timeOffset;

								var timestamp = instance.get('timestamp');

								var elapsed = sessionLength;

								if (Lang.toInt(timestamp)) {
									timeOffset = Math.floor((Date.now() - timestamp) / 1000) * 1000;

									elapsed = timeOffset;

									if (instance._initTimestamp !== timestamp) {
										instance.set('timestamp', timestamp);

										if (sessionState != 'active') {
											instance.set('sessionState', 'active', SRC_EVENT_OBJ);
										}
									}
								}
								else {
									timestamp = 'expired';
								}

								var extend = instance.get('autoExtend');

								var expirationMoment = false;
								var warningMoment = false;

								var hasExpired = elapsed >= sessionLength;
								var hasWarned = elapsed >= warningTime;

								if (hasWarned) {
									if (timestamp == 'expired') {
										expirationMoment = true;
										extend = false;
										hasExpired = true;
									}

									if (hasExpired && sessionState != 'expired') {
										if (extend) {
											expirationMoment = false;
											hasExpired = false;
											hasWarned = false;
											warningMoment = false;

											instance.extend();
										}
										else {
											instance.expire();

											expirationMoment = true;
										}
									}
									else if (hasWarned && !hasExpired && !extend && sessionState != 'warned') {
										instance.warn();

										warningMoment = true;
									}
								}

								for (var i in registered) {
									registered[i](elapsed, interval, hasWarned, hasExpired, warningMoment, expirationMoment);
								}
							},
							interval
						);
					},

					_stopTimer: function() {
						var instance = this;

						A.clearInterval(instance._intervalId);
					},

					_cookieKey: 'LFR_SESSION_STATE_' + themeDisplay.getUserId()
				}
			}
		);

		SessionBase.SRC = SRC;

		var SessionDisplay = A.Component.create(
			{
				ATTRS: {
					pageTitle: {
						value: DOC.title
					}
				},
				EXTENDS: A.Plugin.Base,
				NAME: 'liferaysessiondisplay',
				NS: 'display',
				prototype: {
					initializer: function(config) {
						var instance = this;

						var host = instance.get('host');

						if (Liferay.Util.getTop() == CONFIG.win) {
							instance._host = host;

							instance._toggleText = {
								hide: 'Hide',
								show: 'Show'
							};

							instance._expiredText = 'Due\x20to\x20inactivity\x2c\x20your\x20session\x20has\x20expired\x2e\x20Please\x20save\x20any\x20data\x20you\x20may\x20have\x20entered\x20before\x20refreshing\x20the\x20page\x2e';

							instance._warningText = 'Due\x20to\x20inactivity\x2c\x20your\x20session\x20will\x20expire\x20in\x20\x7b0\x7d\x2e\x20To\x20extend\x20your\x20session\x20another\x20\x7b1\x7d\x20minute\x28s\x29\x2c\x20please\x20press\x20the\x20\x3cem\x3eExtend\x3c\x2fem\x3e\x20button\x2e\x20\x7b2\x7d';
							instance._warningText = Lang.sub(
								instance._warningText,
								[
									'<span class="countdown-timer">{0}</span>',
									host.get('sessionLength') / 60000,
									'<a class="alert-link" href="#">' + 'Extend' + '</a>'
								]
							);

							host.on('sessionStateChange', instance._onHostSessionStateChange, instance);

							instance.afterHostMethod('_defActivatedFn', instance._afterDefActivatedFn);
							instance.afterHostMethod('_defExpiredFn', instance._afterDefExpiredFn);
						}
						else {
							host.unplug(instance);
						}
					},

					destructor: function() {
						var instance = this;

						if (instance._banner) {
							instance._destroyBanner();
						}
					},

					_afterDefActivatedFn: function(event) {
						var instance = this;

						instance._uiSetActivated();
					},

					_afterDefExpiredFn: function(event) {
						var instance = this;

						instance._host.unregisterInterval(instance._intervalId);

						instance._uiSetExpired();
					},

					_beforeHostWarned: function(event) {
						var instance = this;

						var host = instance._host;

						var sessionLength = host.get('sessionLength');
						var timestamp = host.get('timestamp');
						var warningLength = host.get('warningLength');

						var elapsed = sessionLength;

						if (Lang.toInt(timestamp)) {
							elapsed = Math.floor((Date.now() - timestamp) / 1000) * 1000;
						}

						var remainingTime = sessionLength - elapsed;

						if (remainingTime > warningLength) {
							remainingTime = warningLength;
						}

						var banner = instance._getBanner();

						var counterTextNode = banner
							.one('.countdown-timer')
							.getDOMNode();

						instance._uiSetRemainingTime(remainingTime, counterTextNode);

						banner.show();

						instance._intervalId = host.registerInterval(
							function(elapsed, interval, hasWarned, hasExpired, warningMoment, expirationMoment) {
								if (!hasWarned) {
									instance._uiSetActivated();
								}
								else if (!hasExpired) {
									if (warningMoment) {
										if (remainingTime <= 0) {
											remainingTime = warningLength;
										}

										banner.show();
									}

									elapsed = Math.floor((Date.now() - timestamp) / 1000) * 1000;

									remainingTime = sessionLength - elapsed;

									instance._uiSetRemainingTime(remainingTime, counterTextNode);

								}

								remainingTime -= interval;
							}
						);
					},

					_destroyBanner: function() {
						var instance = this;

						instance._banner = false;

						var notificationContainer = A.one('.lfr-notification-container');

						if (notificationContainer) {
							notificationContainer.remove();
						}
					},

					_formatNumber: function(value) {
						var instance = this;

						return Lang.String.padNumber(Math.floor(value), 2);
					},

					_formatTime: function(time) {
						var instance = this;

						time = Number(time);

						if (Lang.isNumber(time) && time > 0) {
							time /= 1000;

							BUFFER_TIME[0] = instance._formatNumber(time / 3600);

							time %= 3600;

							BUFFER_TIME[1] = instance._formatNumber(time / 60);

							time %= 60;

							BUFFER_TIME[2] = instance._formatNumber(time);

							time = BUFFER_TIME.join(':');
						}
						else {
							time = 0;
						}

						return time;
					},

					_getBanner: function() {
						var instance = this;

						var banner = instance._banner;

						if (!banner) {
							banner = new Liferay.Notification(
								{
									closeable: true,
									delay: {
										hide: 0,
										show: 0
									},
									duration: 500,
									message: instance._warningText,
									on: {
										click: function(event) {
											if (
												event.domEvent.target.test(
													'.alert-link'
												)
											) {
												event.domEvent.preventDefault();
												instance._host.extend();
											}
											else if (
												event.domEvent.target.test('.close')
											) {
												instance._destroyBanner();
												instance._alertClosed = true;
											}
										},
										focus: function(event) {
											if (instance._alert) {
												var notificationContainer = A.one(
													'.lfr-notification-container'
												);
		
												if (
													!notificationContainer.contains(
														event.domEvent.relatedTarget
													)
												) {
													instance._alert.setAttribute(
														'role',
														'alert'
													);
												}
											}
										}
									},
									title: 'Warning',
									type: 'warning'
								}
							).render('body');

							instance._banner = banner;
						}

						return banner;
					},

					_onHostSessionStateChange: function(event) {
						var instance = this;

						if (event.newVal == 'warned') {
							instance._beforeHostWarned(event);
						}
					},

					_uiSetActivated: function() {
						var instance = this;

						DOC.title = instance.reset('pageTitle').get('pageTitle');

						instance._host.unregisterInterval(instance._intervalId);

						var banner = instance._getBanner();

						if (banner) {
							instance._destroyBanner();
						}
					},

					_uiSetExpired: function() {
						var instance = this;

						var banner = instance._getBanner();

						banner.setAttrs(
							{
								message: instance._expiredText,
								title: 'Warning',
								type: 'danger'
							}
						);

						DOC.title = instance.get('pageTitle');
					},

					_uiSetRemainingTime: function(remainingTime, counterTextNode) {
						var instance = this;

						remainingTime = instance._formatTime(remainingTime);

						if (!instance._alertClosed) {
							var alert = $(counterTextNode).parents('div[role="alert"]')[0];
	
							// Prevent screen reader from rereading alert
	
							if (alert) {
								alert.removeAttribute('role');
	
								instance._alert = alert;
							}

							counterTextNode.innerHTML = remainingTime;
						}

						DOC.title = Lang.sub('Session\x20expires\x20in\x20\x7b0\x7d\x2e', [remainingTime]) + ' | ' + instance.get('pageTitle');
					}
				}
			}
		);

		Liferay.SessionBase = SessionBase;
		Liferay.SessionDisplay = SessionDisplay;
	},
	'',
	{
		requires: ['aui-io-request', 'aui-timer', 'cookie', 'liferay-notification']
	}
);