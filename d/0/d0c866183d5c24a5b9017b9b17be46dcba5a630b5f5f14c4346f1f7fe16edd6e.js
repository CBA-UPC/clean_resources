.bx-wrapper{position:relative;margin-bottom:60px;padding:0;-ms-touch-action:pan-y;touch-action:pan-y;-moz-box-shadow:0 0 5px #ccc;-webkit-box-shadow:0 0 5px #ccc;box-shadow:0 0 5px #ccc;border:5px solid #fff;background:#fff}.bx-wrapper img{max-width:100%;display:block}.bxslider{margin:0;padding:0;-webkit-perspective:1000}ul.bxslider{list-style:none}.bx-viewport{-webkit-transform:translateZ(0)}.bx-wrapper .bx-controls-auto,.bx-wrapper .bx-pager{position:absolute;bottom:-30px;width:100%}.bx-wrapper .bx-loading{min-height:50px;background:url(images/bx_loader.gif) center center no-repeat #fff;height:100%;width:100%;position:absolute;top:0;left:0;z-index:2000}.bx-wrapper .bx-pager{text-align:center;font-size:.85em;font-family:Arial;font-weight:700;color:#666;padding-top:20px}.bx-wrapper .bx-pager.bx-default-pager a{background:#666;text-indent:-9999px;display:block;width:10px;height:10px;margin:0 5px;outline:0;-moz-border-radius:5px;-webkit-border-radius:5px;border-radius:5px}.bx-wrapper .bx-pager.bx-default-pager a.active,.bx-wrapper .bx-pager.bx-default-pager a:focus,.bx-wrapper .bx-pager.bx-default-pager a:hover{background:#000}.bx-wrapper .bx-controls-auto .bx-controls-auto-item,.bx-wrapper .bx-pager-item{display:inline-block;vertical-align:bottom}.bx-wrapper .bx-pager-item{font-size:0;line-height:0}.bx-wrapper .bx-prev{left:10px;background:url(images/controls.png) 0 -32px no-repeat}.bx-wrapper .bx-prev:focus,.bx-wrapper .bx-prev:hover{background-position:0 0}.bx-wrapper .bx-next{right:10px;background:url(images/controls.png) -43px -32px no-repeat}.bx-wrapper .bx-next:focus,.bx-wrapper .bx-next:hover{background-position:-43px 0}.bx-wrapper .bx-controls-direction a{position:absolute;top:50%;margin-top:-16px;outline:0;width:32px;height:32px;text-indent:-9999px;z-index:9999}.bx-wrapper .bx-controls-direction a.disabled{display:none}.bx-wrapper .bx-controls-auto{text-align:center}.bx-wrapper .bx-controls-auto .bx-start{display:block;text-indent:-9999px;width:10px;height:11px;outline:0;background:url(images/controls.png) -86px -11px no-repeat;margin:0 3px}.bx-wrapper .bx-controls-auto .bx-start.active,.bx-wrapper .bx-controls-auto .bx-start:focus,.bx-wrapper .bx-controls-auto .bx-start:hover{background-position:-86px 0}.bx-wrapper .bx-controls-auto .bx-stop{display:block;text-indent:-9999px;width:9px;height:11px;outline:0;background:url(images/controls.png) -86px -44px no-repeat;margin:0 3px}.bx-wrapper .bx-controls-auto .bx-stop.active,.bx-wrapper .bx-controls-auto .bx-stop:focus,.bx-wrapper .bx-controls-auto .bx-stop:hover{background-position:-86px -33px}.bx-wrapper .bx-controls.bx-has-controls-auto.bx-has-pager .bx-pager{text-align:left;width:80%}.bx-wrapper .bx-controls.bx-has-controls-auto.bx-has-pager .bx-controls-auto{right:0;width:35px}.bx-wrapper .bx-caption{position:absolute;bottom:0;left:0;background:#666;background:rgba(80,80,80,.75);width:100%}.bx-wrapper .bx-caption span{color:#fff;font-family:Arial;display:block;font-size:.85em;padding:10px}
				headers: {
					'Accept': 'application/json'
				}
			}).then(handleResponse);
		}

		/* Filter out properties that are not from Event prototype,
		 * and include all others as ownProperty to a new object.
		 * @param {Event} e
		 * @return {Object} object with relevant properties as ownProperty
		 */
		function filterEvent (e) {
			var filteredEvent = {};
			for (var prop in e) {
				/* global Event */
				if (!Event.prototype.hasOwnProperty(prop)) {
					filteredEvent[prop] = e[prop];
				}
			}
			return filteredEvent;
		}

		/**
		 * On successful creation of an order, submit it through a form
		 * @param {String} formAction URL to which to POST form to
		 */
		function submitOrder (formAction) {
			var form = document.createElement('form');
			form.action = formAction;
			form.method = 'post';

			document.body.appendChild(form);
			form.submit();
		}

		function doRedirect () {
			if (redirect) {
				// Redirect to last responded redirect
				location.href = redirect;
			}
		}

		function dispatchEvent (event) {
			if (!event || !event.name) {
				return;
			}
			document.body.dispatchEvent(new CustomEvent(event.name, {
				bubbles: true,
				detail: event.detail
			}));
		}

		function processServerResponse (response) {
			if (!response) {
				return;
			}
			// redirect could be an empty string
			if (typeof response.redirect !== 'undefined') {
				// set redirect URL
				redirect = response.redirect;
			}
			dispatchEvent(response.event);
		}

		function oncancelHandler (e) {
			setSession(null);

			postJson(action.cancel, {}).then(function (response) {
				processServerResponse(response);
				doRedirect();
			}, function (error) {
				processServerResponse(error.response);
				doRedirect();
			}).catch(function (err) {
				console.error(err);
			});
		}

		function onpaymentauthorizedHandler (e) {
			postJson(action.onpaymentauthorized, filterEvent(e)).then(function (response) {
				session.completePayment(ApplePaySession.STATUS_SUCCESS);
				processServerResponse(response);
				setSession(null);
				submitOrder(response.redirect);
			}, function (error) {
				session.completePayment(mapStatus(error.message));
				processServerResponse(error.response);
				doRedirect();
			}).catch(function (err) {
				console.error(err);
			});
		}

		function onpaymentmethodselectedHandler (e) {
			postJson(action.onpaymentmethodselected, filterEvent(e)).then(function (response) {
				// update updatedRequest with new server response
				updatedRequest = Object.assign(updatedRequest, response);
				session.completePaymentMethodSelection(response.total, response.lineItems);
				processServerResponse(response);
			}, function (error) {
				// No way to communicate error status on this event to Apple Pay
				session.completePaymentMethodSelection(
						updatedRequest.total, updatedRequest.lineItems);
				processServerResponse(error.response);
			}).catch(function (err) {
				console.error(err);
			});
		}

		function onshippingcontactselectedHandler (e) {
			postJson(action.onshippingcontactselected, filterEvent(e)).then(function (response) {
				// update updatedRequest with new server response
				updatedRequest = Object.assign(updatedRequest, response);
				session.completeShippingContactSelection(ApplePaySession.STATUS_SUCCESS,
					response.shippingMethods, response.total, response.lineItems);
				processServerResponse(response);
			}, function (error) {
				session.completeShippingContactSelection(mapStatus(error.message),
						[], updatedRequest.total, updatedRequest.lineItems);
				processServerResponse(error.response);
			}).catch(function (err) {
				console.error(err);
			});
		}

		function onshippingmethodselectedHandler (e) {
			postJson(action.onshippingmethodselected, filterEvent(e)).then(function (response) {
				// update updatedRequest with new server response
				updatedRequest = Object.assign(updatedRequest, response);
				session.completeShippingMethodSelection(ApplePaySession.STATUS_SUCCESS,
					response.total, response.lineItems);
				processServerResponse(response);
			}, function (error) {
				session.completeShippingMethodSelection(mapStatus(error.message),
						updatedRequest.total, updatedRequest.lineItems);
				processServerResponse(error.response);
			}).catch(function (err) {
				console.error(err);
			});
		}

		function onvalidatemerchantHandler (e) {
			postJson(action.onvalidatemerchant, Object.assign(filterEvent(e), {
				hostname: window.location.hostname
			})).then(function (response) {
				session.completeMerchantValidation(response.session);
			}, function (error) {
				session.abort();
			}).catch(function (err) {
				console.error(err);
			});
		}

		function setSession (s) {
			if (session) {
				session.oncancel = null;
				session.onpaymentauthorized = null;
				session.onpaymentmethodselected = null;
				session.onshippingcontactselected = null;
				session.onshippingmethodselected = null;
				session.onvalidatemerchant = null;
			}

			session = s;

			if (session) {
				session.oncancel = oncancelHandler;
				session.onpaymentauthorized = onpaymentauthorizedHandler;
				session.onpaymentmethodselected = onpaymentmethodselectedHandler;
				session.onshippingcontactselected = onshippingcontactselectedHandler;
				session.onshippingmethodselected = onshippingmethodselectedHandler;
				session.onvalidatemerchant = onvalidatemerchantHandler;
			}
		}

		/**
		 * Begins the ApplePaySession.
		 */
		function createSession () {
			// fake the total amount to make it a valid request
			// if the basket is empty.
			// @TODO some basic addition should be calculated instead
			// to reflect a more reasonable amount
			// this relies on the SKU price to be available on render
			if (parseFloat(request.total.amount) === 0) {
				request.total.amount = '0.01';
			}
			setSession(new ApplePaySession(APPLE_PAY_VERSION, request));
			session.begin();

			// set updatedRequest to request
			updatedRequest = Object.assign({}, request);
		}

		/**
		 * Prepares an Apple Pay basket, optionally
		 * containing exclusively the product with the given SKU to buy.
		 * @param {String} [sku] SKU of product to buy
		 */
		function prepareBasket (sku) {
			postJson(action.prepareBasket, {
				sku: sku
			}).then(function (response) {
				processServerResponse(response);
			}, function (error) {
				try {
					session.abort();
				} catch (e) {
					// Swallow an error if Apple Pay throws when aborting session
					console.error(e);
				}
				processServerResponse(error.response);
				doRedirect();
			}).catch(function (err) {
				console.error(err);
			});
		}

		function validateInject (element, directive) {
			if (element.hasAttribute(ATTR_SKU)) {
				// No minimum total price required to inject for add to cart
				return !!request;
			}

			// Inject only if request total price is positive
			return request && request.total && request.total.amount &&
				parseFloat(request.total.amount) > 0;
		}

		function createButton (element, directive) {
			// Create button element
			var button = document.createElement('button');
			button.type = 'button';

			// Compose button class name
			var className = '';
			if (directive.css) {
				className += directive.css;
			}

			// Copy attributes to button
			if (directive.copy) {
				if (element.getAttribute(ATTR_SKU)) {
					button.setAttribute(ATTR_SKU, element.getAttribute(ATTR_SKU));
				}
				if (element.className) {
					className += ' ' + element.className;
				}
				if (element.id) {
					var id = element.id;
					element.id = '';
					button.id = id;
				}
			}

			if (className) {
				button.className = className;
			}

			// Dynamically style the button
			if (directive.style) {
				var styleElement;
				if (directive.style.ref === 'this') {
					// Style reference is same element
					styleElement = element;
				} else if (directive.style.ref) {
					// Query style reference element
					styleElement = document.querySelector(directive.style.ref);
				}

				if (styleElement && directive.style.attr && 'getComputedStyle' in window) {
					// Copy declared style attributes to button
					var computedStyle = window.getComputedStyle(styleElement);
					var style = '';
					for (var i = 0; i < directive.style.attr.length; i++) {
						style += directive.style.attr[i] + ':' + computedStyle.getPropertyValue(directive.style.attr[i]) + ';';
					}
					button.style = style;
				}
			}

			// Add button click handler
			button.onclick = function () {
				// Create Apple Pay basket
				prepareBasket(button.getAttribute(ATTR_SKU));

				// Create Apple Pay session synchronously
				createSession();

				// Quit further event handling
				return false;
			};

			return button;
		}

		function process (element, directive) {
			if (hasClass(element, CLASS_PROCESSED)) {
				// Element has already been processed
				return;
			}

			if (!validateInject(element, directive)) {
				// Element is not valid for this directive
				return;
			}

			// Create button for element
			var button = createButton(element, directive);

			// Execute action for button
			switch (directive.action) {
				case 'after':
					element.parentNode.appendChild(button, element.nextSibling);
					break;
				case 'before':
					element.parentNode.insertBefore(button, element);
					break;
				case 'replace':
					element.parentNode.insertBefore(button, element);
					element.parentNode.removeChild(element);
					break;
				case 'append':
					element.appendChild(button);
					break;
			}

			// Mark element as processed
			element.className += ' ' + CLASS_PROCESSED;
		}

		function processDirectives () {
			if (!request) {
				// Quit processing without a valid request
				return;
			}

			var directive, elements;
			for (var i = 0; i < inject.directives.length; i++) {
				directive = inject.directives[i];
				elements = document.querySelectorAll(directive.query);
				if (elements && elements.length > 0) {
					for (var j = 0; j < elements.length; j++) {
						process(elements[j], directive);
					}
				}
			}

			if (inject.directives.length) {
				// Repeat processing in one second
				setTimeout(processDirectives, 1000);
			}
		}

		/**
		 * Retrieves Apple Pay request info from the server.
		 */
		function getRequest () {
			getJson(action.getRequest).then(function (response) {
				request = Object.assign({}, response.request);
				processDirectives();
				processServerResponse(response);
			}).catch(function (err) {
				console.error(err);
				processServerResponse(err.response);
			});
		}

		function getUpdateRequestCookie () {
			var cookie = '; ' + (document.cookie || '') + '; ';
			var start = cookie.indexOf(UPDATE_REQUEST_COOKIE_LHS);
			if (start < 0) {
				return '';
			}

			start += UPDATE_REQUEST_COOKIE_LHS.length;
			return cookie.substring(start, cookie.indexOf('; ', start));
		}

		function pollCookies () {
			var value = getUpdateRequestCookie();
			if (value && value !== lastUpdateRequestCookie) {
				lastUpdateRequestCookie = value;
				getRequest();
			}
		}

		// Kick off XHR to get initial Apple Pay request
		getRequest();

		// Poll for cookie to update Apple Pay request
		lastUpdateRequestCookie = getUpdateRequestCookie();
		setInterval(pollCookies, 200);
	})(window.dw.applepay, window.location, window.ApplePaySession);
}
