/**
 * jQuery iLightBox - Revolutionary Lightbox Plugin
 * http://www.ilightbox.net/
 *
 * @version: 2.2.4 - October 14, 2017
 *
 * @author: iProDev (Hemn Chawroka)
 *          http://www.iprodev.com/
 *
 */
(function($, window, undefined) {

	var extensions = {
			flash: ['swf'],
			image: ['bmp', 'gif', 'jpeg', 'jpg', 'png', 'tiff', 'tif', 'jfif', 'jpe'],
			iframe: ['asp', 'aspx', 'cgi', 'cfm', 'htm', 'html', 'jsp', 'php', 'pl', 'php3', 'php4', 'php5', 'phtml', 'rb', 'rhtml', 'shtml', 'txt'],
			video: ['avi', 'mov', 'mpg', 'mpeg', 'movie', 'mp4', 'webm', 'ogv', 'ogg', '3gp', 'm4v']
		},

		// Global DOM elements
		$win = $(window),
		$doc = $(document),

		// Support indicators
		browser,
		transform,
		gpuAcceleration,
		fullScreenApi = '',
		userAgent = navigator.userAgent || navigator.vendor || window.opera,
		supportTouch = !!('ontouchstart' in window) && (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)),
		isMobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(userAgent.substr(0, 4)),

		// Events
		clickEvent = supportTouch ? "itap.iLightBox" : "click.iLightBox",
		touchStartEvent = supportTouch ? "touchstart.iLightBox" : "mousedown.iLightBox",
		touchStopEvent = supportTouch ? "touchend.iLightBox" : "mouseup.iLightBox",
		touchMoveEvent = supportTouch ? "touchmove.iLightBox" : "mousemove.iLightBox",

		// Math shorthands
		abs = Math.abs,
		sqrt = Math.sqrt,
		round = Math.round,
		max = Math.max,
		min = Math.min,
		floor = Math.floor,
		random = Math.random,

		pluginspages = {
			quicktime: 'http://www.apple.com/quicktime/download',
			flash: 'http://www.adobe.com/go/getflash'
		},

		iLightBox = function(el, options, items, instant) {
			var iL = this;

			iL.options = options,
				iL.selector = el.selector || el,
				iL.context = el.context,
				iL.instant = instant;

			if (items.length < 1) iL.attachItems();
			else iL.items = items;

			iL.vars = {
				total: iL.items.length,
				start: 0,
				current: null,
				next: null,
				prev: null,
				BODY: $('body'),
				loadRequests: 0,
				overlay: $('<div class="ilightbox-overlay"></div>'),
				loader: $('<div class="ilightbox-loader"><div></div></div>'),
				toolbar: $('<div class="ilightbox-toolbar"></div>'),
				innerToolbar: $('<div class="ilightbox-inner-toolbar"></div>'),
				title: $('<div class="ilightbox-title"></div>'),
				closeButton: $('<a class="ilightbox-close" title="' + iL.options.text.close + '"></a>'),
				fullScreenButton: $('<a class="ilightbox-fullscreen" title="' + iL.options.text.enterFullscreen + '"></a>'),
				innerPlayButton: $('<a class="ilightbox-play" title="' + iL.options.text.slideShow + '"></a>'),
				innerNextButton: $('<a class="ilightbox-next-button" title="' + iL.options.text.next + '"></a>'),
				innerPrevButton: $('<a class="ilightbox-prev-button" title="' + iL.options.text.previous + '"></a>'),
				holder: $('<div class="ilightbox-holder' + (supportTouch ? ' supportTouch' : '') + '" ondragstart="return false;"><div class="ilightbox-container"></div></div>'),
				nextPhoto: $('<div class="ilightbox-holder' + (supportTouch ? ' supportTouch' : '') + ' ilightbox-next" ondragstart="return false;"><div class="ilightbox-container"></div></div>'),
				prevPhoto: $('<div class="ilightbox-holder' + (supportTouch ? ' supportTouch' : '') + ' ilightbox-prev" ondragstart="return false;"><div class="ilightbox-container"></div></div>'),
				nextButton: $('<a class="ilightbox-button ilightbox-next-button" ondragstart="return false;" title="' + iL.options.text.next + '"><span></span></a>'),
				prevButton: $('<a class="ilightbox-button ilightbox-prev-button" ondragstart="return false;" title="' + iL.options.text.previous + '"><span></span></a>'),
				thumbnails: $('<div class="ilightbox-thumbnails" ondragstart="return false;"><div class="ilightbox-thumbnails-container"><a class="ilightbox-thumbnails-dragger"></a><div class="ilightbox-thumbnails-grid"></div></div></div>'),
				thumbs: false,
				nextLock: false,
				prevLock: false,
				hashLock: false,
				isMobile: false,
				mobileMaxWidth: 980,
				isInFullScreen: false,
				isSwipe: false,
				mouseID: 0,
				cycleID: 0,
				isPaused: 0
			};

			// Hideable elements with mousemove event
			iL.vars.hideableElements = iL.vars.nextButton.add(iL.vars.prevButton);

			iL.normalizeItems();

			//Check necessary plugins
			iL.availPlugins();

			//Set startFrom
			iL.options.startFrom = (iL.options.startFrom > 0 && iL.options.startFrom >= iL.vars.total) ? iL.vars.total - 1 : iL.options.startFrom;

			//If randomStart
			iL.options.startFrom = (iL.options.randomStart) ? floor(random() * iL.vars.total) : iL.options.startFrom;
			iL.vars.start = iL.options.startFrom;

			if (instant) iL.instantCall();
			else iL.patchItemsEvents();

			if (iL.options.linkId) {
				iL.hashChangeHandler();
				$win.iLightBoxHashChange(function() {
					iL.hashChangeHandler();
				});
			}

			if (supportTouch) {
				var RegExp = /(click|mouseenter|mouseleave|mouseover|mouseout)/ig,
					replace = "itap";
				iL.options.caption.show = iL.options.caption.show.replace(RegExp, replace),
					iL.options.caption.hide = iL.options.caption.hide.replace(RegExp, replace),
					iL.options.social.show = iL.options.social.show.replace(RegExp, replace),
					iL.options.social.hide = iL.options.social.hide.replace(RegExp, replace);
			}

			if (iL.options.controls.arrows) {
				$.extend(iL.options.styles, {
					nextOffsetX: 0,
					prevOffsetX: 0,
					nextOpacity: 0,
					prevOpacity: 0
				});
			}
		};

	//iLightBox helpers
	iLightBox.prototype = {
		showLoader: 

		hideLoader: 

		createUI: 

		attachItems: function() {
			var iL = this,
				itemsObject = new Array(),
				items = new Array();

			$(iL.selector, iL.context).each(function() {
				var t = $(this),
					URL = t.attr(iL.options.attr) || null,
					options = t.data("options") && eval("({" + t.data("options") + "})") || {},
					caption = t.data('caption'),
					title = t.data('title'),
					type = t.data('type') || getTypeByExtension(URL);

				items.push({
					URL: URL,
					caption: caption,
					title: title,
					type: type,
					options: options
				});

				if (!iL.instant) itemsObject.push(t);
			});

			iL.items = items,
				iL.itemsObject = itemsObject;
		},

		normalizeItems: function() {
			var iL = this,
				newItems = new Array();

			$.each(iL.items, function(key, val) {

				if (typeof val == "string") val = {
					url: val
				};

				var URL = val.url || val.URL || null,
					options = val.options || {},
					caption = val.caption || null,
					title = val.title || null,
					type = (val.type) ? val.type.toLowerCase() : getTypeByExtension(URL),
					ext = (typeof URL != 'object') ? getExtension(URL) : '';

				options.thumbnail = options.thumbnail || ((type == "image") ? URL : null),
				options.videoType = options.videoType || null,
				options.skin = options.skin || iL.options.skin,
				options.width = options.width || null,
				options.height = options.height || null,
				options.mousewheel = (typeof options.mousewheel != 'undefined') ? options.mousewheel : true,
				options.swipe = (typeof options.swipe != 'undefined') ? options.swipe : true,
				options.social = (typeof options.social != 'undefined') ? options.social : iL.options.social.buttons && $.extend({}, {}, iL.options.social.buttons);

				if (type == "video") {
					options.html5video = (typeof options.html5video != 'undefined') ? options.html5video : {};

					options.html5video.webm = options.html5video.webm || options.html5video.WEBM || null;
					options.html5video.controls = (typeof options.html5video.controls != 'undefined') ? options.html5video.controls : "controls";
					options.html5video.preload = options.html5video.preload || "metadata";
					options.html5video.autoplay = (typeof options.html5video.autoplay != 'undefined') ? options.html5video.autoplay : false;
				}

				if (!options.width || !options.height) {
					if (type == "video") options.width = 1280, options.height = 720;
					else if (type == "iframe") options.width = '100%', options.height = '90%';
					else if (type == "flash") options.width = 1280, options.height = 720;
				}

				delete val.url;
				val.index = key;
				val.URL = URL;
				val.caption = caption;
				val.title = title;
				val.type = type;
				val.options = options;
				val.ext = ext;

				newItems.push(val);
			});

			iL.items = newItems;
		},

		instantCall: 

		addContents: function() {
			var iL = this,
				vars = iL.vars,
				opts = iL.options,
				viewport = getViewport(),
				path = opts.path.toLowerCase(),
				recognizingItems = vars.total > 0 && iL.items.filter(,
				needRecognition = recognizingItems.length > 0;

			if (opts.mobileOptimizer && !opts.innerToolbar)
				vars.isMobile = viewport.width <= vars.mobileMaxWidth;

			vars.overlay.addClass(opts.skin).hide().css('opacity', opts.overlay.opacity);

			if (opts.linkId)
				vars.overlay[0].setAttribute('linkid', opts.linkId);

			//Add Toolbar Buttons
			if (opts.controls.toolbar) {
				vars.toolbar.addClass(opts.skin).append(vars.closeButton);
				if (opts.controls.fullscreen)
					vars.toolbar.append(vars.fullScreenButton);
				if (opts.controls.slideshow)
					vars.toolbar.append(vars.innerPlayButton);
				if (vars.total > 1)
					vars.toolbar.append(vars.innerPrevButton).append(vars.innerNextButton);
			}

			//Append elements to body
			vars.BODY.addClass('ilightbox-noscroll').append(vars.overlay).append(vars.loader).append(vars.holder).append(vars.nextPhoto).append(vars.prevPhoto);

			if (!opts.innerToolbar)
				vars.BODY.append(vars.toolbar);
			if (opts.controls.arrows)
				vars.BODY.append(vars.nextButton).append(vars.prevButton);

			if (opts.controls.thumbnail && vars.total > 1) {
				vars.BODY.append(vars.thumbnails);
				vars.thumbnails.addClass(opts.skin).addClass('ilightbox-' + path);
				$('div.ilightbox-thumbnails-grid', vars.thumbnails).empty();
				vars.thumbs = true;
			}

			//Configure loader and arrows
			var loaderCss = (opts.path.toLowerCase() == "horizontal") ? {
				left: parseInt((viewport.width / 2) - (vars.loader.outerWidth() / 2))
			} : {
				top: parseInt((viewport.height / 2) - (vars.loader.outerHeight() / 2))
			};
			vars.loader.addClass(opts.skin).css(loaderCss);
			vars.nextButton.add(vars.prevButton).addClass(opts.skin);
			if (path == "horizontal")
				vars.loader.add(vars.nextButton).add(vars.prevButton).addClass('horizontal');

			// Configure arrow buttons
			vars.BODY[vars.isMobile ? 'addClass' : 'removeClass']('isMobile');

			if (!opts.infinite) {
				vars.prevButton.add(vars.prevButton).add(vars.innerPrevButton).add(vars.innerNextButton).removeClass('disabled');

				if (vars.current == 0)
					vars.prevButton.add(vars.innerPrevButton).addClass('disabled');
				if (vars.current >= vars.total - 1)
					vars.nextButton.add(vars.innerNextButton).addClass('disabled');
			}

			if (opts.show.effect) {
				vars.overlay.stop().fadeIn(opts.show.speed);
				vars.toolbar.stop().fadeIn(opts.show.speed);
			} else {
				vars.overlay.show();
				vars.toolbar.show();
			}

			var length = recognizingItems.length;
			if (needRecognition) {
				iL.showLoader();

				$.each(recognizingItems, function(key, val) {
					var resultFnc = function(result) {
						console.log(result);
							var key = -1,
								filter = iL.items.filter(,
								self = iL.items[key];

							if (result)
								$.extend(true, self, {
									URL: result.source,
									type: result.type,
									recognized: true,
									options: {
										html5video: result.html5video,
										width: (result.type == "image") ? 0 : (result.width || self.width),
										height: (result.type == "image") ? 0 : (result.height || self.height),
										thumbnail: self.options.thumbnail || result.thumbnail
									}
								});

							length--;

							if (length == 0) {
								iL.hideLoader();

								vars.dontGenerateThumbs = false;
								iL.generateThumbnails();

								if (opts.show.effect)
									setTimeout(function() {
										iL.generateBoxes();
									}, opts.show.speed);
								else
									iL.generateBoxes();
							}
						};

					iL.ogpRecognition(this, resultFnc);
				});
			}
			else {
				if (opts.show.effect)
					setTimeout(function() {
						iL.generateBoxes();
					}, opts.show.speed);
				else
					iL.generateBoxes();
			}

			iL.createUI();

			window.iLightBox = {
				close: function() {
					iL.closeAction();
				},
				fullscreen: function() {
					iL.fullScreenAction();
				},
				moveNext: function() {
					iL.moveTo('next');
				},
				movePrev: function() {
					iL.moveTo('prev');
				},
				goTo: function(index) {
					iL.goTo(index);
				},
				refresh: function() {
					iL.refresh();
				},
				reposition: function() {
					(arguments.length > 0) ? iL.repositionPhoto(true): iL.repositionPhoto();
				},
				setOption: function(options) {
					iL.setOption(options);
				},
				destroy: function() {
					iL.closeAction();
					iL.dispatchItemsEvents();
				}
			};

			if (opts.linkId) {
				vars.hashLock = true;
				window.location.hash = opts.linkId + '/' + vars.current;
				setTimeout(function() {
					vars.hashLock = false;
				}, 55);
			}

			if (!opts.slideshow.startPaused) {
				iL.resume();
				vars.innerPlayButton.removeClass('ilightbox-play').addClass('ilightbox-pause');
			}

			//Trigger the onOpen callback
			if (typeof iL.options.callback.onOpen == 'function') iL.options.callback.onOpen.call(iL);
		},

		loadContent: function(obj, opt, speed) {
			var iL = this,
				holder, item;

			iL.createUI();

			obj.speed = speed || iL.options.effects.loadedFadeSpeed;

			if (opt == 'current') {
				if (!obj.options.mousewheel) iL.vars.lockWheel = true;
				else iL.vars.lockWheel = false;

				if (!obj.options.swipe) iL.vars.lockSwipe = true;
				else iL.vars.lockSwipe = false;
			}

			switch (opt) {
				case 'current':
					holder = iL.vars.holder, item = iL.vars.current;
					break;
				case 'next':
					holder = iL.vars.nextPhoto, item = iL.vars.next;
					break;
				case 'prev':
					holder = iL.vars.prevPhoto, item = iL.vars.prev;
					break;
			}

			holder.removeAttr('style class').addClass('ilightbox-holder' + (supportTouch ? ' supportTouch' : '')).addClass(obj.options.skin);
			$('div.ilightbox-inner-toolbar', holder).remove();

			if (obj.title || iL.options.innerToolbar) {
				var innerToolbar = iL.vars.innerToolbar.clone();
				if (obj.title && iL.options.show.title) {
					var title = iL.vars.title.clone();
					title.empty().html(obj.title);
					innerToolbar.append(title);
				}
				if (iL.options.innerToolbar) {
					innerToolbar.append((iL.vars.total > 1) ? iL.vars.toolbar.clone() : iL.vars.toolbar);
				}
				holder.prepend(innerToolbar);
			}

			console.warn('loadContent', arguments);

			iL.loadSwitcher(obj, holder, item, opt);
		},

		loadSwitcher: 

		configureHolder: 

		generateBoxes: function() {
			var iL = this,
				vars = iL.vars,
				opts = iL.options;

			if (opts.infinite && vars.total >= 3) {
				if (vars.current == vars.total - 1) vars.next = 0;
				if (vars.current == 0) vars.prev = vars.total - 1;
			} else opts.infinite = false;

			iL.loadContent(iL.items[vars.current], 'current', opts.show.speed);

			if (iL.items[vars.next]) iL.loadContent(iL.items[vars.next], 'next', opts.show.speed);
			if (iL.items[vars.prev]) iL.loadContent(iL.items[vars.prev], 'prev', opts.show.speed);
		},

		generateThumbnails: 

		positionThumbnails: 

		loadImage: 

		patchItemsEvents: function() {
			var iL = this,
				vars = iL.vars,
				clickEvent = supportTouch ? "itap.iL" : "click.iL",
				vEvent = supportTouch ? "click.iL" : "itap.iL";

			if (iL.context && iL.selector) {
				var $items = $(iL.selector, iL.context);

				$(iL.context).on(clickEvent, iL.selector, function() {
					var $this = $(this),
						key = $items.index($this);

					if ($('body').hasClass('mobile-browser') && $('body').hasClass('mobile-two-click')) {
						if (!$this.hasClass('hovered')) {
							$this.addClass('hovered');
							return false;
						}
					}

					vars.current = key;
					vars.next = iL.items[key + 1] ? key + 1 : null;
					vars.prev = iL.items[key - 1] ? key - 1 : null;

					iL.addContents();
					iL.patchEvents();

					return false;
				}).on(vEvent, iL.selector, function() {
					return false;
				});
			} else
				$.each(iL.itemsObject, ;
		},

		dispatchItemsEvents: 

		refresh: 

		patchEvents: function() {
			var iL = this,
				vars = iL.vars,
				opts = iL.options,
				path = opts.path.toLowerCase(),
				holders = $('.ilightbox-holder'),
				fullscreenEvent = fullScreenApi.fullScreenEventName + '.iLightBox',
				durationThreshold = 1000,
				horizontalDistanceThreshold =
				verticalDistanceThreshold = 100,
				buttonsArray = [vars.nextButton[0], vars.prevButton[0], vars.nextButton[0].firstChild, vars.prevButton[0].firstChild];

			$win.bind('resize.iLightBox', .bind('keydown.iLightBox', ;

			if (fullScreenApi.supportsFullScreen) $win.bind(fullscreenEvent, function() {
				iL.doFullscreen();
			});

			var holderEventsArr = [opts.caption.show + '.iLightBox', opts.caption.hide + '.iLightBox', opts.social.show + '.iLightBox', opts.social.hide + '.iLightBox'].filter(,
				holderEvents = "";

			$.each(holderEventsArr, ;

			$doc.on(clickEvent, '.ilightbox-overlay', .on(clickEvent, '.ilightbox-next, .ilightbox-next-button', function() {
				iL.moveTo('next');
			}).on(clickEvent, '.ilightbox-prev, .ilightbox-prev-button', .on(clickEvent, '.ilightbox-thumbnail', .on(holderEvents, '.ilightbox-holder:not(.ilightbox-next, .ilightbox-prev)', .on('mouseenter.iLightBox mouseleave.iLightBox', '.ilightbox-wrapper', .on(clickEvent, '.ilightbox-toolbar a.ilightbox-close, .ilightbox-toolbar a.ilightbox-fullscreen, .ilightbox-toolbar a.ilightbox-play, .ilightbox-toolbar a.ilightbox-pause', .on(touchMoveEvent, '.ilightbox-overlay, .ilightbox-thumbnails-container', ;

			
			if (opts.controls.arrows && !supportTouch) $doc.on('mousemove.iLightBox', mouseMoveHandler);

			if (opts.controls.slideshow && opts.slideshow.pauseOnHover) $doc.on('mouseenter.iLightBox mouseleave.iLightBox', '.ilightbox-holder:not(.ilightbox-next, .ilightbox-prev)', ;

			var switchers = $('.ilightbox-overlay, .ilightbox-holder, .ilightbox-thumbnails');

			if (opts.controls.mousewheel) switchers.on('mousewheel.iLightBox', function(event, delta) {
				if (!vars.lockWheel) {
					event.preventDefault();
					if (delta < 0) iL.moveTo('next');
					else if (delta > 0) iL.moveTo('prev');
				}
			});

			if (opts.controls.swipe) holders.on(touchStartEvent, ;

		},

		goTo: 

		moveTo: function(side) {
			var iL = this,
				vars = iL.vars,
				opts = iL.options,
				path = opts.path.toLowerCase(),
				viewport = getViewport(),
				switchSpeed = opts.effects.switchSpeed;

			if (vars.nextLock || vars.prevLock) return false;
			else {

				var item = (side == "next") ? vars.next : vars.prev;

				if (opts.linkId) {
					vars.hashLock = true;
					window.location.hash = opts.linkId + '/' + item;
				}

				if (side == "next") {
					if (!iL.items[item]) return false;
					var firstHolder = vars.nextPhoto,
						secondHolder = vars.holder,
						lastHolder = vars.prevPhoto,
						firstClass = 'ilightbox-prev',
						secondClass = 'ilightbox-next';
				} else if (side == "prev") {
					if (!iL.items[item]) return false;
					var firstHolder = vars.prevPhoto,
						secondHolder = vars.holder,
						lastHolder = vars.nextPhoto,
						firstClass = 'ilightbox-next',
						secondClass = 'ilightbox-prev';
				}

				//Trigger the onBeforeChange callback
				if (typeof opts.callback.onBeforeChange == 'function')
					opts.callback.onBeforeChange.call(iL, iL.ui);

				(side == "next") ? vars.nextLock = true: vars.prevLock = true;

				var captionFirst = $('div.ilightbox-caption', secondHolder),
					socialFirst = $('div.ilightbox-social', secondHolder);

				if (captionFirst.length)
					captionFirst.stop().fadeOut(switchSpeed, function() {
						$(this).remove();
					});
				if (socialFirst.length)
					socialFirst.stop().fadeOut(switchSpeed, ;

				if (iL.items[item].caption) {
					iL.setCaption(iL.items[item], firstHolder);
					var caption = $('div.ilightbox-caption', firstHolder),
						percent = parseInt((caption.outerHeight() / firstHolder.outerHeight()) * 100);
					if (opts.caption.start && percent <= 50) caption.fadeIn(switchSpeed);
				}

				var social = iL.items[item].options.social;
				if (social) {
					iL.setSocial(social, iL.items[item].URL, firstHolder);
					if (opts.social.start) $('div.ilightbox-social', firstHolder).fadeIn(opts.effects.fadeSpeed);
				}

				$.each([firstHolder, secondHolder, lastHolder], function(key, val) {
					val.removeClass('ilightbox-next ilightbox-prev');
				});

				var firstOffset = firstHolder.data('offset'),
					winW = (viewport.width - (opts.styles.pageOffsetX)),
					winH = (viewport.height - (opts.styles.pageOffsetY)),
					width = firstOffset.newDims.width,
					height = firstOffset.newDims.height,
					thumbsOffset = firstOffset.thumbsOffset,
					diff = firstOffset.diff,
					top = parseInt((winH / 2) - (height / 2) - diff.H - (thumbsOffset.H / 2)),
					left = parseInt((winW / 2) - (width / 2) - diff.W - (thumbsOffset.W / 2));

				firstHolder.css(transform, gpuAcceleration).animate({
					top: top,
					left: left,
					opacity: 1
				}, switchSpeed, (vars.isSwipe) ? 'easeOutCirc' : 'easeInOutCirc', function() {
					firstHolder.css(transform, '');
				});

				$('div.ilightbox-container', firstHolder).animate({
					width: width,
					height: height
				}, switchSpeed, (vars.isSwipe) ? 'easeOutCirc' : 'easeInOutCirc');

				var secondOffset = secondHolder.data('offset'),
					object = secondOffset.object;

				diff = secondOffset.diff;

				width = secondOffset.newDims.width,
					height = secondOffset.newDims.height;

				width = parseInt(width * opts.styles[side == 'next' ? 'prevScale' : 'nextScale']),
					height = parseInt(height * opts.styles[side == 'next' ? 'prevScale' : 'nextScale']),
					top = (path == 'horizontal') ? parseInt((winH / 2) - object.offsetY - (height / 2) - diff.H - (thumbsOffset.H / 2)) : parseInt(winH - object.offsetX - diff.H - (thumbsOffset.H / 2));

				if (side == 'prev')
					left = (path == 'horizontal') ? parseInt(winW - object.offsetX - diff.W - (thumbsOffset.W / 2)) : parseInt((winW / 2) - (width / 2) - diff.W - object.offsetY - (thumbsOffset.W / 2));
				else {
					top = (path == 'horizontal') ? top : parseInt(object.offsetX - diff.H - height - (thumbsOffset.H / 2)),
						left = (path == 'horizontal') ? parseInt(object.offsetX - diff.W - width - (thumbsOffset.W / 2)) : parseInt((winW / 2) - object.offsetY - (width / 2) - diff.W - (thumbsOffset.W / 2));
				}

				$('div.ilightbox-container', secondHolder).animate({
					width: width,
					height: height
				}, switchSpeed, (vars.isSwipe) ? 'easeOutCirc' : 'easeInOutCirc');

				secondHolder.addClass(firstClass).css(transform, gpuAcceleration).animate({
					top: top,
					left: left,
					opacity: opts.styles.prevOpacity
				}, switchSpeed, (vars.isSwipe) ? 'easeOutCirc' : 'easeInOutCirc', ;

				top = (path == 'horizontal') ? getPixel(lastHolder, 'top') : ((side == "next") ? parseInt(-(winH / 2) - lastHolder.outerHeight()) : parseInt(top * 2)),
					left = (path == 'horizontal') ? ((side == "next") ? parseInt(-(winW / 2) - lastHolder.outerWidth()) : parseInt(left * 2)) : getPixel(lastHolder, 'left');

				lastHolder.css(transform, gpuAcceleration).animate({
					top: top,
					left: left,
					opacity: opts.styles.nextOpacity
				}, switchSpeed, (vars.isSwipe) ? 'easeOutCirc' : 'easeInOutCirc', function() {
					lastHolder.css(transform, '');
				}).addClass(secondClass);
			}
		},

		setCaption: 

		normalizeSocial: function(obj, url) {
			var iL = this,
				vars = iL.vars,
				opts = iL.options,
				baseURL = window.location.href;

			$.each(obj, function(key, value) {
				if (!value)
					return true;

				var item = key.toLowerCase(),
					source, text;

				switch (item) {
					case 'facebook':
						source = "http://www.facebook.com/share.php?v=4&src=bm&u={URL}",
							text = "Share on Facebook";
						break;
					case 'twitter':
						source = "http://twitter.com/home?status={URL}",
							text = "Share on Twitter";
						break;
					case 'googleplus':
						source = "https://plus.google.com/share?url={URL}",
							text = "Share on Google+";
						break;
					case 'delicious':
						source = "http://delicious.com/post?url={URL}",
							text = "Share on Delicious";
						break;
					case 'digg':
						source = "http://digg.com/submit?phase=2&url={URL}",
							text = "Share on Digg";
						break;
					case 'reddit':
						source = "http://reddit.com/submit?url={URL}",
							text = "Share on reddit";
						break;
				}

				obj[key] = {
					URL: value.URL && absolutizeURI(baseURL, value.URL) || opts.linkId && window.location.href || typeof url !== 'string' && baseURL || url && absolutizeURI(baseURL, url) || baseURL,
					source: value.source || source || value.URL && absolutizeURI(baseURL, value.URL) || url && absolutizeURI(baseURL, url),
					text: value.text || text || "Share on " + key,
					width: (typeof(value.width) != 'undefined' && !isNaN(value.width)) ? parseInt(value.width) : 640,
					height: value.height || 360
				};

			});

			return obj;
		},

		setSocial: function(obj, url, target) {
			var iL = this,
				socialBar = $('<div class="ilightbox-social"></div>'),
				buttons = '<ul>';

			obj = iL.normalizeSocial(obj, url);

			$.each(obj, function(key, value) {
                if (value && value.source) {
				var item = key.toLowerCase(),
					source = value.source.replace(/\{URL\}/g, encodeURIComponent(value.URL).replace(/!/g, '%21').replace(/'/g, '%27').replace(/\(/g, '%28').replace(/\)/g, '%29').replace(/\*/g, '%2A').replace(/%20/g, '+'));
				    buttons += '<li class="' + key + '"><a href="' + source + '" onclick="javascript:window.open(this.href' + ((value.width <= 0 || value.height <= 0) ? '' : ', \'\', \'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=' + value.height + ',width=' + value.width + ',left=40,top=40\'') + ');return false;" title="' + value.text + '" target="_blank"></a></li>';
                }
            });

			buttons += '</ul>';

			socialBar.html(buttons);
			$('div.ilightbox-container', target).append(socialBar);
		},

		fullScreenAction: 

		doFullscreen: 

		closeAction: function() {
			var iL = this,
				vars = iL.vars,
				opts = iL.options;

			$win.unbind('.iLightBox');
			$doc.off('.iLightBox');

			if (vars.isInFullScreen) fullScreenApi.cancelFullScreen(document.documentElement);

			$('.ilightbox-overlay, .ilightbox-holder, .ilightbox-thumbnails').off('.iLightBox');

			if (opts.hide.effect) vars.overlay.stop().fadeOut(opts.hide.speed, ;
			else {
				vars.overlay.remove();
				vars.BODY.removeClass('ilightbox-noscroll').off('.iLightBox');
			}

			var fadeOuts = [vars.toolbar, vars.holder, vars.nextPhoto, vars.prevPhoto, vars.nextButton, vars.prevButton, vars.loader, vars.thumbnails];

			$.each(fadeOuts, ;

			vars.dontGenerateThumbs = vars.isInFullScreen = false;

			window.iLightBox = null;

			if (opts.linkId) {
				vars.hashLock = true;
				removeHash();
				setTimeout( 55);
			}

			//Trigger the onHide callback
			if (typeof opts.callback.onHide == 'function') opts.callback.onHide.call(iL, iL.ui);
		},

		repositionPhoto: function() {
			var iL = this,
				vars = iL.vars,
				opts = iL.options,
				path = opts.path.toLowerCase(),
				viewport = getViewport(),
				winWidth = viewport.width,
				winHeight = viewport.height;

			var thumbsOffsetW = (vars.isInFullScreen && opts.fullAlone || vars.isMobile) ? 0 : ((path == 'horizontal') ? 0 : vars.thumbnails.outerWidth()),
				thumbsOffsetH = vars.isMobile ? vars.toolbar.outerHeight() : ((vars.isInFullScreen && opts.fullAlone) ? 0 : ((path == 'horizontal') ? vars.thumbnails.outerHeight() : 0)),
				width = (vars.isInFullScreen && opts.fullAlone) ? winWidth : (winWidth - (opts.styles.pageOffsetX)),
				height = (vars.isInFullScreen && opts.fullAlone) ? winHeight : (winHeight - (opts.styles.pageOffsetY)),
				offsetW = (path == 'horizontal') ? parseInt((iL.items[vars.next] || iL.items[vars.prev]) ? ((opts.styles.nextOffsetX + opts.styles.prevOffsetX)) * 2 : (((width / 10) <= 30) ? 30 : (width / 10))) : parseInt(((width / 10) <= 30) ? 30 : (width / 10)) + thumbsOffsetW,
				offsetH = (path == 'horizontal') ? parseInt(((height / 10) <= 30) ? 30 : (height / 10)) + thumbsOffsetH : parseInt((iL.items[vars.next] || iL.items[vars.prev]) ? ((opts.styles.nextOffsetX + opts.styles.prevOffsetX)) * 2 : (((height / 10) <= 30) ? 30 : (height / 10)));

			var elObject = {
				type: 'current',
				width: width,
				height: height,
				item: iL.items[vars.current],
				offsetW: offsetW,
				offsetH: offsetH,
				thumbsOffsetW: thumbsOffsetW,
				thumbsOffsetH: thumbsOffsetH,
				animate: arguments.length,
				holder: vars.holder
			};

			iL.repositionEl(elObject);

			if (iL.items[vars.next]) {
				elObject = $.extend(elObject, {
					type: 'next',
					item: iL.items[vars.next],
					offsetX: opts.styles.nextOffsetX,
					offsetY: opts.styles.nextOffsetY,
					holder: vars.nextPhoto
				});

				iL.repositionEl(elObject);
			}

			if (iL.items[vars.prev]) {
				elObject = $.extend(elObject, {
					type: 'prev',
					item: iL.items[vars.prev],
					offsetX: opts.styles.prevOffsetX,
					offsetY: opts.styles.prevOffsetY,
					holder: vars.prevPhoto
				});

				iL.repositionEl(elObject);
			}

			var loaderCss = (path == "horizontal") ? {
				left: parseInt((width / 2) - (vars.loader.outerWidth() / 2))
			} : {
				top: parseInt((height / 2) - (vars.loader.outerHeight() / 2))
			};
			vars.loader.css(loaderCss);
		},

		repositionEl: function(obj) {
			var iL = this,
				vars = iL.vars,
				opts = iL.options,
				path = opts.path.toLowerCase(),
				widthAvail = (obj.type == 'current') ? ((vars.isInFullScreen && opts.fullAlone) ? obj.width : (obj.width - obj.offsetW)) : (obj.width - obj.offsetW),
				heightAvail = (obj.type == 'current') ? ((vars.isInFullScreen && opts.fullAlone) ? obj.height : (obj.height - obj.offsetH)) : (obj.height - obj.offsetH),
				itemParent = obj.item,
				item = obj.item.options,
				holder = obj.holder,
				offsetX = obj.offsetX || 0,
				offsetY = obj.offsetY || 0,
				thumbsOffsetW = obj.thumbsOffsetW,
				thumbsOffsetH = obj.thumbsOffsetH;

			if (obj.type == 'current') {
				if (typeof item.width == 'number' && item.width) widthAvail = ((vars.isInFullScreen && opts.fullAlone) && (opts.fullStretchTypes.indexOf(itemParent.type) != -1 || item.fullViewPort || opts.fullViewPort)) ? widthAvail : ((item.width > widthAvail) ? widthAvail : item.width);
				if (typeof item.height == 'number' && item.height) heightAvail = ((vars.isInFullScreen && opts.fullAlone) && (opts.fullStretchTypes.indexOf(itemParent.type) != -1 || item.fullViewPort || opts.fullViewPort)) ? heightAvail : ((item.height > heightAvail) ? heightAvail : item.height);
			} else {
				if (typeof item.width == 'number' && item.width) widthAvail = (item.width > widthAvail) ? widthAvail : item.width;
				if (typeof item.height == 'number' && item.height) heightAvail = (item.height > heightAvail) ? heightAvail : item.height;
			}

			if (opts.innerToolbar)
				heightAvail = parseInt(heightAvail - $('.ilightbox-inner-toolbar', holder).outerHeight());

			var width = (typeof item.width == 'string' && item.width.indexOf('%') != -1) ? percentToValue(parseInt(item.width.replace('%', '')), obj.width) : holder.data('naturalWidth'),
				height = (typeof item.height == 'string' && item.height.indexOf('%') != -1) ? percentToValue(parseInt(item.height.replace('%', '')), obj.height) : holder.data('naturalHeight');

			var dims = ((typeof item.width == 'string' && item.width.indexOf('%') != -1 || typeof item.height == 'string' && item.height.indexOf('%') != -1) ? {
					width: width,
					height: height
				} : iL.getNewDimenstions(widthAvail, heightAvail, width, height)),
				newDims = $.extend({}, dims, {});

			if (obj.type == 'prev' || obj.type == 'next')
				width = parseInt(dims.width * ((obj.type == 'next') ? opts.styles.nextScale : opts.styles.prevScale)),
				height = parseInt(dims.height * ((obj.type == 'next') ? opts.styles.nextScale : opts.styles.prevScale));
			else
				width = dims.width,
				height = dims.height;

			var widthDiff = parseInt((getPixel(holder, 'padding-left') + getPixel(holder, 'padding-right') + getPixel(holder, 'border-left-width') + getPixel(holder, 'border-right-width')) / 2),
				heightDiff = parseInt((getPixel(holder, 'padding-top') + getPixel(holder, 'padding-bottom') + getPixel(holder, 'border-top-width') + getPixel(holder, 'border-bottom-width') + ($('.ilightbox-inner-toolbar', holder).outerHeight() || 0)) / 2);

			switch (obj.type) {
				case 'current':
					var top = parseInt((obj.height / 2) - (height / 2) - heightDiff - (thumbsOffsetH / 2)),
						left = parseInt((obj.width / 2) - (width / 2) - widthDiff - (thumbsOffsetW / 2));
					break;

				case 'next':
					var top = (path == 'horizontal') ? parseInt((obj.height / 2) - offsetY - (height / 2) - heightDiff - (thumbsOffsetH / 2)) : parseInt(obj.height - offsetX - heightDiff - (thumbsOffsetH / 2)),
						left = (path == 'horizontal') ? parseInt(obj.width - offsetX - widthDiff - (thumbsOffsetW / 2)) : parseInt((obj.width / 2) - (width / 2) - widthDiff - offsetY - (thumbsOffsetW / 2));
					break;

				case 'prev':
					var top = (path == 'horizontal') ? parseInt((obj.height / 2) - offsetY - (height / 2) - heightDiff - (thumbsOffsetH / 2)) : parseInt(offsetX - heightDiff - height - (thumbsOffsetH / 2)),
						left = (path == 'horizontal') ? parseInt(offsetX - widthDiff - width - (thumbsOffsetW / 2)) : parseInt((obj.width / 2) - offsetY - (width / 2) - widthDiff - (thumbsOffsetW / 2));
					break;
			}

			holder.data('offset', {
				top: top,
				left: left,
				newDims: newDims,
				diff: {
					W: widthDiff,
					H: heightDiff
				},
				thumbsOffset: {
					W: thumbsOffsetW,
					H: thumbsOffsetH
				},
				object: obj
			});

			if (obj.animate > 0 && opts.effects.reposition) {
				holder.css(transform, gpuAcceleration).stop().animate({
					top: top,
					left: left
				}, opts.effects.repositionSpeed, 'easeOutCirc', ;
				$('div.ilightbox-container', holder).stop().animate({
					width: width,
					height: height
				}, opts.effects.repositionSpeed, 'easeOutCirc');
				$('div.ilightbox-inner-toolbar', holder).stop().animate({
					width: width
				}, opts.effects.repositionSpeed, 'easeOutCirc', ;
			} else {
				holder.css({
					top: top,
					left: left
				});
				$('div.ilightbox-container', holder).css({
					width: width,
					height: height
				});
				$('div.ilightbox-inner-toolbar', holder).css({
					width: width
				});
			}
		},

		resume: 

		pause: 

		resetCycle: 

		getNewDimenstions: 

		setOption: 

		availPlugins: 

		addContent: function(element, obj) {
			var iL = this,
				el;

			switch (obj.type) {
				case 'video':
					var HTML5 = false,
						videoType = obj.videoType,
						html5video = obj.options.html5video;

					if (((videoType == 'video/mp4' || obj.ext == 'mp4' || obj.ext == 'm4v') || html5video.h264) && iL.plugins.html5H264)
						obj.ext = 'mp4',
						obj.URL = html5video.h264 || obj.URL;
					else if (html5video.webm && iL.plugins.html5WebM)
						obj.ext = 'webm',
						obj.URL = html5video.webm || obj.URL;
					else if (html5video.ogg && iL.plugins.html5Vorbis)
						obj.ext = 'ogv',
						obj.URL = html5video.ogg || obj.URL;

					if (iL.plugins.html5H264 && (videoType == 'video/mp4' || obj.ext == 'mp4' || obj.ext == 'm4v')) HTML5 = true, videoType = "video/mp4";
					else if (iL.plugins.html5WebM && (videoType == 'video/webm' || obj.ext == 'webm')) HTML5 = true, videoType = "video/webm";
					else if (iL.plugins.html5Vorbis && (videoType == 'video/ogg' || obj.ext == 'ogv')) HTML5 = true, videoType = "video/ogg";
					else if (iL.plugins.html5QuickTime && (videoType == 'video/quicktime' || obj.ext == 'mov' || obj.ext == 'qt')) HTML5 = true, videoType = "video/quicktime";

					if (HTML5) {
						el = $('<video />', {
							"width": "100%",
							"height": "100%",
							"preload": html5video.preload,
							"autoplay": html5video.autoplay,
							"poster": html5video.poster,
							"controls": html5video.controls
						}).append($('<source />', {
							"src": obj.URL,
							"type": videoType
						}));
					} else {
						if (!iL.plugins.quicktime) el = $('<span />', {
							"class": "ilightbox-alert",
							html: iL.options.errors.missingPlugin.replace('{pluginspage}', pluginspages.quicktime).replace('{type}', 'QuickTime')
						});
						else {

							el = $('<object />', {
								"type": "video/quicktime",
								"pluginspage": pluginspages.quicktime
							}).attr({
								"data": obj.URL,
								"width": "100%",
								"height": "100%"
							}).append($('<param />', {
								"name": "src",
								"value": obj.URL
							})).append($('<param />', {
								"name": "autoplay",
								"value": "false"
							})).append($('<param />', {
								"name": "loop",
								"value": "false"
							})).append($('<param />', {
								"name": "scale",
								"value": "tofit"
							}));

							if (browser.msie) el = QT_GenerateOBJECTText(obj.URL, '100%', '100%', '', 'SCALE', 'tofit', 'AUTOPLAY', 'false', 'LOOP', 'false');
						}
					}

					break;

				case 'flash':
					if (!iL.plugins.flash) el = $('<span />', {
						"class": "ilightbox-alert",
						html: iL.options.errors.missingPlugin.replace('{pluginspage}', pluginspages.flash).replace('{type}', 'Adobe Flash player')
					});
					else {
						var flashvars = "",
							i = 0;

						if (obj.options.flashvars) $.each(obj.options.flashvars, ;
						else flashvars = null;

						el = $('<embed />').attr({
							"type": "application/x-shockwave-flash",
							"src": obj.URL,
							"width": (typeof obj.options.width == 'number' && obj.options.width && iL.options.minScale == '1' && iL.options.maxScale == '1') ? obj.options.width : "100%",
							"height": (typeof obj.options.height == 'number' && obj.options.height && iL.options.minScale == '1' && iL.options.maxScale == '1') ? obj.options.height : "100%",
							"quality": "high",
							"bgcolor": "#000000",
							"play": "true",
							"loop": "true",
							"menu": "true",
							"wmode": "transparent",
							"scale": "showall",
							"allowScriptAccess": "always",
							"allowFullScreen": "true",
							"flashvars": flashvars,
							"fullscreen": "yes"
						});
					}

					break;

				case 'iframe':
					el = $('<iframe />').attr({
						"width": (typeof obj.options.width == 'number' && obj.options.width && iL.options.minScale == '1' && iL.options.maxScale == '1') ? obj.options.width : "100%",
						"height": (typeof obj.options.height == 'number' && obj.options.height && iL.options.minScale == '1' && iL.options.maxScale == '1') ? obj.options.height : "100%",
						src: obj.URL,
						frameborder: 0,
						'hspace': 0,
						'vspace': 0,
						'scrolling': supportTouch ? 'auto' : 'scroll',
						'webkitAllowFullScreen': '',
						'mozallowfullscreen': '',
						'allowFullScreen': ''
					});

					break;

				case 'inline':
					el = $('<div class="ilightbox-wrapper"></div>').html($(obj.URL).clone(true));

					break;

				case 'html':
					var object = obj.URL,
						el;

					if (object[0].nodeName) {
						el = $('<div class="ilightbox-wrapper"></div>').html(object);
					} else {
						var dom = $(obj.URL),
							html = (dom.selector) ? $('<div>' + dom + '</div>') : dom;
						el = $('<div class="ilightbox-wrapper"></div>').html(html);
					}

					break;
			}

			$('div.ilightbox-container', element).empty().html(el);

			// For fixing Chrome about just playing the video for first time
			if (el[0].tagName.toLowerCase() === 'video' && browser.webkit) setTimeout(;

			return el;
		},

		ogpRecognition: 

		hashChangeHandler: function(url) {
			var iL = this,
				vars = iL.vars,
				opts = iL.options,
				URL = url || window.location.href,
				hash = parseURI(URL).hash,
				split = hash.split('/'),
				index = split[1];

			if (vars.hashLock || ('#' + opts.linkId != split[0] && hash.length > 1)) return;

			if (index) {
				var target = split[1] || 0;
				if (iL.items[target]) {
					var overlay = $('.ilightbox-overlay');
					if (overlay.length && overlay.attr('linkid') == opts.linkId) {
						iL.goTo(target);
					} else {
						iL.itemsObject[target].trigger(supportTouch ? 'itap' : 'click');
					}
				} else {
					var overlay = $('.ilightbox-overlay');
					if (overlay.length) iL.closeAction();
				}
			} else {
				var overlay = $('.ilightbox-overlay');
				if (overlay.length) iL.closeAction();
			}
		}
	};

	/**
	 * Parse style to pixels.
	 *
	 * @param {Object}   $element   jQuery object with element.
	 * @param {Property} property   CSS property to get the pixels from.
	 *
	 * @return {Int}
	 */
	
	/**
	 * Make sure that number is within the limits.
	 *
	 * @param {Number} number
	 * @param {Number} min
	 * @param {Number} max
	 *
	 * @return {Number}
	 */
	
	/**
	 * Get viewport/window size (width and height).
	 *
	 * @return {Object}
	 */
	
	/**
	 * Remove hash tag from the URL
	 *
	 * @return {Void}
	 */
	function removeHash() {
		var scroll = getScrollXY();

		window.location.hash = "";

		// Restore the scroll offset, should be flicker free
		window.scrollTo(scroll.x, scroll.y);
	}

	/**
	 * Do the ajax requests with callback.
	 *
	 * @param {String}   url
	 * @param {Function} callback
	 *
	 * @return {Void}
	 */
	
	/**
	 * Find image from DOM elements
	 *
	 * @param {Element} element
	 *
	 * @return {Void}
	 */
	
	/**
	 * Get file extension.
	 *
	 * @param {String} URL
	 *
	 * @return {String}
	 */
	function getExtension(URL) {
		var ext = URL.split('.').pop().toLowerCase(),
			extra = ext.indexOf('?') !== -1 ? ext.split('?').pop() : '';

		return ext.replace(extra, '');
	}

	/**
	 * Get type via extension.
	 *
	 * @param {String} URL
	 *
	 * @return {String}
	 */
	function getTypeByExtension(URL) {
		var type,
			ext = getExtension(URL);

		if (extensions.image.indexOf(ext) !== -1) type = 'image';
		else if (extensions.flash.indexOf(ext) !== -1) type = 'flash';
		else if (extensions.video.indexOf(ext) !== -1) type = 'video';
		else type = 'iframe';

		return type;
	}

	/**
	 * Return value from percent of a number.
	 *
	 * @param {Number} percent
	 * @param {Number} total
	 *
	 * @return {Number}
	 */
	
	/**
	 * A JavaScript equivalent of PHP’s parse_url.
	 *
	 * @param {String} url           The URL to parse.
	 *
	 * @return {Mixed}
	 */}

	/**
	 * Gets the absolute URI.
	 *
	 * @param {String} href     The relative URL.
	 * @param {String} base     The base URL.
	 *
	 * @return {String}         The absolute URL.
	 */}

	/**
	 * A JavaScript equivalent of PHP’s version_compare.
	 *
	 * @param {String} v1
	 * @param {String} v2
	 * @param {String} operator
	 *
	 * @return {Boolean}
	 
	}


	// Begin the iLightBox plugin
	$.fn.iLightBo
	};


	$.iLightBo
	};


	$.extend($.easing, {
		easeInCi		},
		easeOutCi		},
		easeInOutCirc: function(x, t, b, c, d) {
			if ((t /= d / 2) < 1) return -c / 2 * (sqrt(1 - t * t) - 1) + b;
			return c / 2 * (sqrt(1 - (t -= 2) * t) + 1) + b;
		}
	})
	}

	(function() {
		// add new event shortcuts
		$.each(("touchstart touchmove touchend " +
			"tap taphold " +
			"swipe swipeleft swiperight " +
			"scrollstart scrollstop").split(" 		});

		var tapSettings = {
			startEvent: 'touchstart.iTap',
			endEvent: 'touchend.iTap'
		};

		// tap Event:
		$.event.special.itap = {
			set		},

			teardo		}
		};
	}());


	//Fullscreen AP
	}());

	// Browser detec
	}());

	// Feature detect
	}());


	/*
		PluginDetect v0.7.9
		www.pinlady.net/PluginDetect/license/
		[ getVersion onWindowLoaded BetterIE ]
		[ Flash QuickTime Shockwave ]
	*/
	var PluginDetect={version:"0.7.9",name:"PluginDetect",hand)}},openTag:"<",isDefid"},isAr))},isFunc:function(b){return typeof b=="function"},isString:function(b){return typeof b=="string"},isr"},isStr))},getNumRegx:/[\d][\d\.\_,-]*/,splitNumRegx:/[\.\_,-]/g,getll},compareN 0},format")},$$hasMimeTl}},findNavPlull},getMimeEnabledPlu 0},getPluginFileVers e},AXO:window.ActiveXObject,get f},convertFu}}},init}}},initScr))},i a},fP)}},callAr}}},c}}},getVersionDelimiter:",",$$getVersb}},clea)}},isActiveXObj a},codebaseSeall},addWinEv}}},winHand}}},WLfuncs0:[],WLfuncs:[],runWLfu)}},winLoaded:false,$$onWindowLoa}}},div:null,divID:"plugindetect",divWidth:50,pluginSize:1,emptyl}},DONEfuncs:[],onDoneEmpty()},getWi-1},getTagSta 0},getDOMll},setSt}}},insertDivInB}}},insertHp}},Plugins:{quicktime:{mimeType:["video/quicktime","application/x-quicktimeplayer","image/x-macpaint","image/x-quicktime"],progID:"QuickTimeCheckObject.QuickTimeCheck.1",progID0:"QuickTime.QuickTime",classID:"clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B",minIEver:7,HTML:'<param name="src" value="" /><param name="controller" value="false" />',getCodeBaseVers"'},SEARCH:{min:0,max:0,match:0,digits:[16,128,128,0]},getVers3)},cdbaseUpper:["7,60,0,0","0,0,0,0"],cdbaseLower:["7,50,0,0",null],cdbase2v")},null],CDBASE2 f},canUseIsue},is-1}},flash:{mimeType:"application/x-shockwave-flash",progID:"ShockwaveFlash.ShockwaveFlash",classID:"clsid:D27CDB6E-AE6D-11CF-96B8-444553540000",getVersue}},shockwave:{mimeType:"application/x-director",progID:"SWCtl.SWCtl",classID:"clsid:166B1BCA-3F9C-11CF-8075-444553540000",getVersa)}},zz:0}};PluginDetect.initScript();

	var gArgCountErr='The "%%" function requires an even number of arguments.\nArguments should be in the form "atttributeName", "attributeValue", ...',gTagAttrs=null,gQTGeneratorVersio}function _QTAddObjectAttr(a,b){if(0==a.indexOf("emb#"))return"";0==a.indexOf("obj#")&&null==b&&(b=a.substring(4));return _QTAddAttribute("obj#",a


	/*
		jQuery hashchange event v1.3
		https://github.com/cowboy/jquery-hashchange
		Copyright (c) 2010 "Cowboy" Ben Alman
		Dual licensed under the MIT and GPL licenses.
	*()})();

	if (!Array.prototype.filter) {
		Array.prototype.filte		};
	}

	if (!Array.prototype.indexOf) {
		Array.prototype.indexO		};
	}

	if (!Array.prototype.lastIndexOf) {
		Array.prototype.lastIndexO		};
	}
})(jQuery, this);