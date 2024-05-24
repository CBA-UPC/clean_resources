/******/ (
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.qq = exports.q = exports.delegateRemove = exports.delegate = exports.ww = void 0;
var DelegateListeners = (function () {
        DelegateListeners.set = function (selector, eventType, eventHandler, elementScopeHandler) {
        if (!DelegateListeners.listeners[selector]) {
            DelegateListeners.listeners[selector] = [];
        }
        if (this.unique(DelegateListeners.listeners[selector], eventType, eventHandler)) {
            var listener = {
                eventType: eventType,
                eventHandler: eventHandler,
                elementScopeHandler: elementScopeHandler,
            };
            DelegateListeners.listeners[selector].push(listener);
            return listener;
        }
        else {
            return this.get(selector, eventType, eventHandler);
        }
    };
    DelegateListeners.get = function (selector, eventType, eventHandler) {
        if (DelegateListeners.listeners[selector]) {
            try {
                return DelegateListeners.listeners[selector].filter(function (listener) {
                    return eventHandler === listener.eventHandler && eventType === listener.eventType;
                })[0];
            }
            catch (err) { }
            ;
        }
        return null;
    };
    DelegateListeners.delete = function (selector, eventType, eventHandler) {
        var deleteListenersID = [];
        if (DelegateListeners.listeners[selector]) {
            DelegateListeners.listeners[selector].forEach(function (listener, index) {
                if (eventType === listener.eventType && eventHandler === listener.eventHandler) {
                    deleteListenersID.unshift(index);
                }
            });
            deleteListenersID.forEach(;
            if (0 === DelegateListeners.listeners[selector].length) {
                delete DelegateListeners.listeners[selector];
            }
        }
    };
    DelegateListeners.unique = function (listeners, eventType, eventHandler) {
        try {
            var existing = listeners.filter(;
            if (0 === existing.length) {
                return true;
            }
            else {
                return false;
            }
        }
        catch (err) {
            return false;
        }
    };
    DelegateListeners.listeners = {};
    return DelegateListeners;
}());
exports.ww = window;
function delegate(selector, eventType, eventHandler, elementScope) {
    if (elementScope === void 0) { elementScope = document; }
    var listener = DelegateListeners.set(selector, eventType, eventHandler, function (event) {
        try {
            var target = event.target;
            while (target && target !== elementScope) {
                if (target.matches(selector)) {
                    eventHandler.call(target, event);
                    break;
                }
                target = target.parentNode;
            }
        }
        catch (err) { }
    });
    if (listener) {
        elementScope.addEventListener(eventType, listener.elementScopeHandler);
    }
}
exports.delegate = delegate;
function delegateRemove(selector, eventType, eventHandler, elementScope) {
    if (elementScope === void 0) { elementScope = document; }
    var listener = DelegateListeners.get(selector, eventType, eventHandler);
    if (listener) {
        elementScope.removeEventListener(eventType, listener.elementScopeHandler);
        DelegateListeners.delete(selector, eventType, eventHandler);
    }
}
exports.delegateRemove = delegateRemove;
function q(selector, parent) {
    if (parent === void 0) { parent = document; }
    var x = parent.querySelector(selector);
    return x ? x : x;
}
exports.q = q;
function qq(selector, parent) {
    if (parent === void 0) { parent = document; }
    return Array.prototype.slice.call(parent.querySelectorAll(selector), 0);
}
exports.qq = qq;


/***/ }),

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var timelineScroll_1 = __webpack_require__(18);
var dom_1 = __webpack_require__(0);
dom_1.ww.Timeline = timelineScroll_1.Timeline;


/***/ }),

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Timeline = void 0;
__webpack_require__(7);
var helpers_1 = __webpack_require__(8);
var dom_1 = __webpack_require__(0);
var Timeline = (function () {
    function Timeline(options) {
        var _this = this;
        this.stepActiveIndex = 0;
        this.stepAnimationActive = false;
        var stepItemElements = dom_1.qq('.timeline__steps li', options.element);
        var stepListElement = dom_1.q('.timeline__steps', options.element);
        if (stepItemElements && stepListElement) {
            this.stepItemElements = stepItemElements;
            this.stepListElement = stepListElement;
            this.timelineElement = options.element;
            this.scrollZone = this.timelineElement.closest('.about__timeline');
            this.eventHandlerRequestAnimation();
        }
        this.stepItemElements.forEach(function (item, index) {
            item.addEventListener('click', ;
        });
    }
    Timeline.getPosition = function () {
        return window.pageYOffset || document.getPathValue('documentElement.scrollTop') || document.getPathValue('body.scrollTop');
    };
    Timeline.getTimelinePosition = function (element) {
        var elementBound = element.getBoundingClientRect();
        return (Timeline.getPosition() + elementBound.top) - ((window.innerHeight - elementBound.height) / 2);
    };
    Timeline.prototype.setActive = function (index) {
        var pixelOffset = 3;
        var stepItemPrevElement = this.stepItemElements[index - 1];
        var stepItemNextElement = this.stepItemElements[index + 1];
        if (this.stepItemElements[index]) {
            var elementStyle = window.getComputedStyle(this.stepItemElements[index]);
            var elementWidth = this.stepItemElements[index].clientWidth +
                helpers_1.numberNormalizer(elementStyle.marginLeft || '') +
                helpers_1.numberNormalizer(elementStyle.marginRight || '');
            this.stepListElement.style.transform = "translateX(-" + (elementWidth * index + (index * pixelOffset)) + "px)";
            this.stepItemElements.forEach(function (step, i) {
                step.classList[i === index ? 'add' : 'remove']('active');
                step.classList.remove('prev-step', 'next-step');
            });
        }
        if (stepItemPrevElement) {
            stepItemPrevElement.classList.add('prev-step');
        }
        if (stepItemNextElement) {
            stepItemNextElement.classList.add('next-step');
        }
    };
    Timeline.prototype.preventDefault = function (event) {
        event = event || window.event;
        if (event.preventDefault) {
            event.preventDefault();
        }
        window.scrollTo(0, Timeline.getTimelinePosition(this.timelineElement));
        event.returnValue = false;
    };
    Timeline.prototype.inRange = function () {
        var centralPosition = (window.innerHeight / 2);
        var timelineElementBound = this.timelineElement.getBoundingClientRect();
        return timelineElementBound.top <= centralPosition && timelineElementBound.bottom >= centralPosition;
    };
    Timeline.prototype.eventHandlerScroll = function (event, isMobile) {
        var _this = this;
        if (isMobile === void 0) { isMobile = false; }
        if (!this.isTimelineHovered() && !isMobile)
            return;
        this.preventDefault(event);
        if (!this.stepAnimationActive) {
            this.updateTimelineStep(event, isMobile);
            this.stepAnimationActive = true;
            this.setActive(this.stepActiveIndex);
            setTimeout( 750);
        }
    };
    Timeline.prototype.eventHandlerRequestAnimation = function () {
        var _this = this;
        var position = Timeline.getPosition();
        if (position !== Timeline.position) {
            var timelineInRange_1 = this.inRange();
            this.scrollZone.onwheel = function (event) { return timelineInRange_1 ? _this.eventHandlerScroll(event) : null; };
            this.scrollZone.ontouchstart = function (event) { return timelineInRange_1 ? _this.saveTouchStartCoordinate(event) : null; };
            this.scrollZone.ontouchmove = 
            this.scrollZone.onscroll = 
            Timeline.position = Timeline.getPosition();
        }
        Timeline.requestAnimationFrame(this.eventHandlerRequestAnimation.bind(this));
    };
    Timeline.prototype.isTimelineHovered = function () {
        var _a;
        return ((_a = this.scrollZone.parentElement) === null || _a === void 0 ? void 0 : _a.querySelector(':hover')) === this.scrollZone;
    };
    Timeline.prototype.updateTimelineStep = function (event, isMobile) {
        var moveToNextStep = false;
        if (isMobile) {
            var currentX = event.touches[0].clientX;
            var currentY = event.touches[0].clientY;
            var diffX = this.touchStartX - currentX;
            var diffY = this.touchStartY - currentY;
            var slideHorizontally = Math.abs(diffX) > Math.abs(diffY);
            if (slideHorizontally) {
                moveToNextStep = diffX > 0;
            }
        }
        else {
            moveToNextStep = event.deltaY > 0;
        }
        if (moveToNextStep && this.stepActiveIndex < this.stepItemElements.length - 1) {
            this.stepActiveIndex++;
        }
        if (!moveToNextStep && this.stepActiveIndex > 0) {
            this.stepActiveIndex--;
        }
    };
    Timeline.prototype.saveTouchStartCoordinate = function (event) {
        this.touchStartX = event.touches[0].clientX;
        this.touchStartY = event.touches[0].clientY;
    };
    Timeline.requestAnimationFrame = (window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        window.oRequestAnimationFrame).bind(window);
    Timeline.position = Timeline.getPosition();
    return Timeline;
}());
exports.Timeline = Timeline;


/***/ }),

/***/ 7:
/***/ (function(module, exports) {

Object.defineProperty(Object.prototype, 'getPathValue', {
	value: function(path) {
		return path.split('.').reduce(function(obj, key) {
			if (obj) {
				return obj[key];
			}

			return false;
		}, this);
	},
	writable: true,
	configurable: true,
	enumerable: false
});

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.numberNormalizer = void 0;
function numberNormalizer(n) {
    return ('number' === typeof n) ? n : parseInt(n.replace(/[^0-9\-.]+/gi, '').trim());
}
exports.numberNormalizer = numberNormalizer;


/***/ })

/******/ });
//# sourceMappingURL=global.js.map