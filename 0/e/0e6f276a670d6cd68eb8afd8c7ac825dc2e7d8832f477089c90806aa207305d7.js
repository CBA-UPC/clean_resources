window.hjSiteSettings = window.hjSiteSettings || {"site_id":2964287,"r":0.07464066220238096,"rec_value":0.02,"state_change_listen_mode":"automatic","record":true,"continuous_capture_enabled":true,"recording_capture_keystrokes":true,"session_capture_console_consent":false,"anonymize_digits":true,"anonymize_emails":true,"suppress_all":false,"suppress_all_on_specific_pages":[],"suppress_text":false,"suppress_location":false,"user_attributes_enabled":false,"legal_name":"FanCraze Technologies Private Limited","privacy_policy_url":"https://www.fancraze.com/privacy-policy","deferred_page_contents":[],"record_targeting_rules":[],"feedback_widgets":[],"heatmaps":[],"polls":[],"integrations":{"optimizely":{"tag_recordings":false},"abtasty":{"tag_recordings":false},"mixpanel":{"send_events":false},"unbounce":{"tag_recordings":false},"google_optimize":{"tag_recordings":false},"hubspot":{"enabled":false,"send_recordings":false,"send_surveys":false}},"features":["survey.type_button","feedback.widgetV2","client_script.compression.pc","settings.billing_v2","survey.screenshots","survey.embeddable_widget","ask.popover_redesign","error_reporting","feedback.embeddable_widget","survey.image_question"],"tracking_code_verified":true};

!function(){"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,r(i.key),i)}}function r(e){var r=function(e,r){if("object"!=t(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,"string");if("object"!=t(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==t(r)?r:String(r)}var n,i=function(){function t(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e3;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.send=e,this.batchSize=r,this.flushInterval=n,this.buffer=[],this.flushTimer=null}var r,n;return r=t,(n=[{key:"getBuffer",value:function(){return this.buffer}},{key:"add",value:function(t){var e=this;this.buffer.push(t),this.buffer.length>=this.batchSize?this.flush():this.flushTimer||(this.flushTimer=setTimeout((function(){e.flush()}),this.flushInterval))}},{key:"flush",value:function(){this.buffer.length>0&&(this.send(this.buffer),this.buffer=[]),this.flushTimer&&(clearTimeout(this.flushTimer),this.flushTimer=null)}}])&&e(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),t}();function a(){return a=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},a.apply(this,arguments)}var o,s=function(){try{return"performance"in window&&"now"in window.performance}catch(t){return!1}},c={version:6,metricsUrl:(null===(n=window._hjSettings)||void 0===n?void 0:n.metricsUrl)||"https://metrics.hotjar.io",sampling:{metrics:.1,fieldMetrics:.01,debug:.5,universalDebug:.05*.1},browser:{hasPerformance:!1,shouldLogMetrics:!1,inLab:!1},buffer:{bufferSize:40,flushInterval:3e3}},u={isDebugEnabled:!1,isMetricsEnabled:!1,isFieldMetricsEnabled:!1,loggedMetrics:{},genericTags:{}},l=function(t,e,r){var n;u.loggedMetrics[t]=a(a({},u.loggedMetrics[t]),{},((n={})[e]=r||{},n))},f=function(t){if(!t)return"value";var e=Object.keys(t)[0];return e&&t[e]||"value"},d=function(t){var e,r=null!==(e=t.tag)&&void 0!==e?e:void 0;return u.isDebugEnabled?a(a(a({},r),t.extraTags),u.genericTags):r},h=function(t,e){if(!o)return!1;var r=u.isMetricsEnabled||u.isDebugEnabled;return"lab"===t&&(r=c.browser.inLab),"field"===t&&(r=u.isFieldMetricsEnabled),e?r&&e.flush:r},g=function(t){var e=!1,r="v=".concat(c.version),n=u.isDebugEnabled?"".concat(c.metricsUrl,"?").concat(r,"&debug=true"):"".concat(c.metricsUrl,"?").concat(r),i=JSON.stringify(t);if("sendBeacon"in navigator)try{e=navigator.sendBeacon.bind(navigator)(n,i)}catch(t){}if(!1===e)try{var a=new XMLHttpRequest;a.open("POST",n),a.timeout=1e4,a.send(i)}catch(t){}c.browser.shouldLogMetrics&&console.debug("New Metrics: ",t)},b={getConfig:function(t){return c[t]},getState:function(t){return u[t]},start:function(){try{c.browser={hasPerformance:s(),shouldLogMetrics:/hjMetrics=1/.test(location.search),inLab:/hjLab=true/.test(location.search)};var t=b.time(),e=window.hjSiteSettings||{},r=e.features,n=e.site_id,a=new Set(r),l=c.sampling;return u.genericTags={site_id:n},u.isDebugEnabled=Math.random()<=l.universalDebug||a.has("client_script.metrics.debug")&&Math.random()<=l.debug,u.isMetricsEnabled=Math.random()<=l.metrics,u.isFieldMetricsEnabled=u.isMetricsEnabled&&Math.random()<=l.fieldMetrics,o=new i(g,c.buffer.bufferSize,c.buffer.flushInterval),t}catch(t){console.debug("Error in metrics.start",{error:t})}},reset:function(){u.loggedMetrics={}},stop:function(){u.isDebugEnabled=!1,u.isMetricsEnabled=!1,u.genericTags={}},count:function(t,e){var r=e.incr,n=e.tag,i=e.extraTags,s=e.type;try{var c,l=f(n),g=u.loggedMetrics[t],b=0;if(r?(b=(g&&g[l]||0)+(r.value||1),u.loggedMetrics[t]=a(a({},g),{},((c={})[l]=null!=r&&r.flush?0:b,c))):b=1,h(s,r)){var v={name:t,type:"count",value:b,tags:d({tag:n,extraTags:i})};o.add(v)}}catch(t){}},distr:function(t,e){var r=e.task,n=e.value,i=e.extraTags;h()&&o.add({name:t,type:"distribution",value:n,tags:d({tag:{task:r},extraTags:i})})},time:function(){try{if(!c.browser.hasPerformance)return;return performance.now()}catch(t){}},timeEnd:function(t,e){var r=e.tag,n=e.start,i=e.total,a=e.extraTags,s=e.type;try{var c=b.time();if(!i&&!c)return;var u=f(r),g=i||(n&&c?c-n:void 0);if(l(t,u,{}),g&&g>0&&h(s)){var v={name:t,type:"distribution",value:Math.round(g),tags:d({tag:r,extraTags:a})};o.add(v)}return c}catch(e){console.debug("Failed to send timer metric: ",{name:t,tag:r,error:e})}},timeIncr:function(t,e){var r,n,i,a,o=e.tag,s=e.start,c=e.flush,d=e.extraTags,h=e.type,g=hj.metrics.time(),v=s&&g?g-s:void 0,m=(r=t,{tagName:n=f(o),start:(a=(i=u.loggedMetrics[r])&&i[n]||{}).start,total:a.total}),w=v?v+(m.total||0):m.total;return l(t,m.tagName,{total:w}),c&&b.timeEnd(t,{tag:o,total:w,extraTags:d,type:h}),w},timeWatcher:function(){var t,e=0,r=!1,n=function(){var r,n=b.time();return e+=null!==(r=t&&n&&n-t)&&void 0!==r?r:0,t=b.time(),e};return{start:function(){if(!r)return r=!0,t=b.time()},incr:n,end:function(){var r=n();return e=0,t=void 0,r}}},getErrorMessage:function(t){return t instanceof Error?t.message:"string"==typeof t?t:""}};window.hj=window.hj||function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];(window.hj.q=window.hj.q||[]).push(e)},window.hj.metrics=b;var v=hj.metrics.start();window.hjBootstrap=window.hjBootstrap||function(t,e,r){var n,i=new RegExp("bot|google|headless|baidu|bing|msn|duckduckbot|teoma|slurp|yandex|phantomjs|pingdom|ahrefsbot","i"),a=(null===(n=window.navigator)||void 0===n?void 0:n.userAgent)||"unknown";if(i.test(a))return hj.metrics.count("session-rejection",{tag:{reason:"bot"}}),void console.warn("Hotjar not launching due to suspicious userAgent:",a);var o="http:"===window.location.protocol,s=Boolean(window._hjSettings.preview);if(o&&!s)return hj.metrics.count("session-rejection",{tag:{reason:"https"}}),void console.warn("For security reasons, Hotjar only works over HTTPS. Learn more: https://help.hotjar.com/hc/en-us/articles/115011624047");var c=function(t,e,r){window.hjBootstrapCalled=(window.hjBootstrapCalled||[]).concat(r),window.hj&&window.hj._init&&window.hj._init._verifyInstallation&&hj._init._verifyInstallation()};c(0,0,r);var u=window.document,l=u.head||u.getElementsByTagName("head")[0];hj.scriptDomain=t;var f=u.createElement("script");f.async=1,f.src=hj.scriptDomain+e,f.charset="utf-8",l.appendChild(f),c.revision="e1fb203",window.hjBootstrap=c},window.hjBootstrap("https://script.hotjar.com/","modules.f7c079ad889f2e18ab73.js","2964287"),hj.metrics.timeEnd("resource-blocking-time",{tag:{resource:"hotjar-js"},start:v,type:"lab"}),window.hjLazyModules=window.hjLazyModules||{SURVEY_V2:{js:"survey-v2.061482d2a827bca11ec1.js"},SURVEY_BOOTSTRAPPER:{js:"survey-bootstrapper.0656b4af4d0e458171c1.js"},SURVEY_ISOLATED:{js:"survey-isolated.ec0131e1400a11867d18.js"},HEATMAP_RETAKER:{js:"heatmap-retaker.f79c0c7bb13d8a14bddc.js"},SURVEY_INVITATION:{js:"survey-invitation.0c3413ba323a3b80de21.js"},NOTIFICATION:{js:"notification.dcf8412c061e7fe8234d.js"},INCOMING_FEEDBACK:{js:"incoming-feedback.7b3dc304d8accfc73e21.js"},PREACT_INCOMING_FEEDBACK:{js:"preact-incoming-feedback.7b5a9e5c07a2f5e4fc0c.js"},SENTRY:{js:"sentry.58c81e3e25532810f6fd.js"},BROWSER_PERF:{js:"browser-perf.8417c6bba72228fa2e29.js"}}}();   var keyCode = event.keyCode;
      var KC = KEY_CODE;
      var index = 0;
      var direct;
      var itemIndex;
      var $items;
      if (keyCode === KC.down || keyCode === KC.up) {
        direct = keyCode === KC.up ? -1 : 1;
        $items = this.$el.find('[tabindex]');
        itemIndex = $items.index(clickd_jquery(document.activeElement));
        if (itemIndex === -1) {
          index = direct + 1 ? -1 : 0;
        } else {
          index = itemIndex;
        }
        index = index + direct;
        if (index === $items.length) {
          index = 0;
        }
        $items.eq(index).focus();
        event.preventDefault();
      }
    },
    multiChoose: function (event, status) {
      var _dropdown = this;
      var _config = _dropdown.config;
      var $select = _dropdown.$select;
      var $target = clickd_jquery(event.target);
      var value = $target.attr('data-value');
      var hasSelected = $target.hasClass('dropdown-chose');
      var selectedName = [];
      var selectedProp;

      if ($target.hasClass('dropdown-display')) {
        return false;
      }

      if (hasSelected) {
        $target.removeClass('dropdown-chose');
        _dropdown.selectAmount--;
      } else {
        if (_dropdown.selectAmount < _config.limitCount) {
          $target.addClass('dropdown-chose');
          _dropdown.selectAmount++;
        } else {
          maxItemAlert.call(_dropdown);
          return false;
        }
      }

      _dropdown.name = [];

      clickd_jquery.each(_config.data, function (key, item) {
        if ('' + item.id === '' + value) {
          selectedProp = item;
          item.selected = hasSelected ? false : true;
        }
        if (item.selected) {
          selectedName.push(item.name);
          _dropdown.name.push('<span class="dropdown-selected">' + item.name + '<i class="del" data-id="' + item.id + '"></i></span>');
        }
      });

      $select.find('option[value="' + value + '"]').prop('selected', hasSelected ? false : true);

      if (hasSelected && _dropdown.selectAmount < _config.minCount) {
        minItemsAlert.call(_dropdown);
      }

      _dropdown.$choseList.find('.dropdown-selected').remove();
      _dropdown.$choseList.prepend(_dropdown.name.join(''));
      _dropdown.$el.find('.dropdown-display').attr('title', selectedName.join(','));
      _config.choice.call(_dropdown, event, selectedProp);
    },
    singleChoose: function (event) {
      var _dropdown = this;
      var _config = _dropdown.config;
      var $el = _dropdown.$el;
      var $select = _dropdown.$select;
      var $target = clickd_jquery(event.target);
      var value = $target.attr('data-value');
      var hasSelected = $target.hasClass('dropdown-chose');

      if ($target.hasClass('dropdown-chose') || $target.hasClass('dropdown-display')) {
        return false;
      }

      _dropdown.name = [];


      $el.removeClass('active').find('li').not($target).removeClass('dropdown-chose');

      $target.toggleClass('dropdown-chose');
      clickd_jquery.each(_config.data, function (key, item) {
        item.selected = false;
        if ('' + item.id === '' + value) {
          item.selected = hasSelected ? 0 : 1;
          if (item.selected) {
            _dropdown.name.push('<span class="dropdown-selected">' + item.name + '<i class="del" data-id="' + item.id + '"></i></span>');
          }
        }
      });

      $select.find('option[value="' + value + '"]').prop('selected', true);

      _dropdown.name.push('<span class="placeholder">' + _dropdown.placeholder + '</span>');
      _dropdown.$choseList.html(_dropdown.name.join(''));
      _config.choice.call(_dropdown, event);
    },
    del: function (event) {
      var _dropdown = this;
      var _config = _dropdown.config;
      var $target = clickd_jquery(event.target);
      var id = $target.data('id');
      clickd_jquery.each(_dropdown.name, function (key, value) {
        if (value.indexOf('data-id="' + id + '"') !== -1) {
          _dropdown.name.splice(key, 1);
          return false;
        }
      });

      clickd_jquery.each(_dropdown.config.data, function (key, item) {
        if ('' + item.id == '' + id) {
          item.selected = false;
          return false;
        }
      });

      _dropdown.selectAmount--;
      _dropdown.$el.find('[data-value="' + id + '"]').removeClass('dropdown-chose');
      _dropdown.$el.find('[value="' + id + '"]').prop('selected', false).removeAttr('selected');
      $target.closest('.dropdown-selected').remove();
      _config.choice.call(_dropdown, event);

      return false;
    },
    clearAll: function (event) {
      var _dropdown = this;
      var _config = _dropdown.config;
      event && event.preventDefault();
      console.log(this)
      this.$choseList.find('.del').each(function (index, el) {
        clickd_jquery(el).trigger('click');
      });

      if (_config.minCount > 0) {
        minItemsAlert.call(_dropdown);
      }

      this.$el.find('.dropdown-display').removeAttr('title');
      return false;
    }
  };

  function Dropdown(options, el) {
    this.$el = clickd_jquery(el);
    this.$select = this.$el.find('select');
    this.placeholder = this.$select.attr('placeholder');
    this.config = options;
    this.name = [];
    this.isSingleSelect = !this.$select.prop('multiple');
    this.selectAmount = 0;
    this.itemLimitAlertTimer = null;
    this.isLabelMode = this.config.multipleMode === 'label';
    this.init();
  }

  Dropdown.prototype = {
    init: function () {
      var _this = this;
      var _config = _this.config;
      var $el = _this.$el;
      _this.$select.hide();
      $el.addClass(_this.isSingleSelect ? 'dropdown-single' : _this.isLabelMode ? 'dropdown-multiple-label' : 'dropdown-multiple');

      if (_config.data.length === 0) {
        _config.data = selectToObject(_this.$select);
      }

      var processResult = objectToSelect.call(_this, _config.data);

      _this.name = processResult[1];
      _this.selectAmount = processResult[2];
      _this.$select.html(processResult[0]);
      _this.renderSelect();
      _this.changeStatus(_config.disabled ? 'disabled' : _config.readonly ? 'readonly' : false);

      _this.config.init();
    },

    renderSelect: function (isUpdate, isCover) {
      var _this = this;
      var $el = _this.$el;
      var $select = _this.$select;
      var elemLi = selectToDiv($select.prop('outerHTML'));
      var template;

      if (isUpdate) {
        $el.find('ul')[isCover ? 'html' : 'append'](elemLi);
      } else {
        template = createTemplate.call(_this).replace('{{ul}}', '<ul>' + elemLi + '</ul>');
        clickd_jquery(template).insertAfter($el.find('select')).find('ul').removeAttr('style class');
      }

      if (isCover) {
        _this.name = [];
        _this.$el.find('.dropdown-selected').remove();
        _this.$select.val('');
      }

      _this.$choseList = $el.find('.dropdown-chose-list');

      if (!_this.isLabelMode) {
        _this.$choseList.html(clickd_jquery('<span class="placeholder"></span>').text(_this.placeholder));
      }

      _this.$choseList.prepend(_this.name ? _this.name.join('') : []);
    },
    bindEvent: function () {
      var _this = this;
      var $el = _this.$el;
      var openHandle = isSafari ? EVENT_SPACE.click : EVENT_SPACE.focus;

      $el.on(EVENT_SPACE.click, function (event) {
        event.stopPropagation();
      });

      $el.on(EVENT_SPACE.click, '.del', clickd_jquery.proxy(action.del, _this));

      // show
      if (_this.isLabelMode) {
        $el.on(EVENT_SPACE.click, '.dropdown-display-label', function () {
          $el.find('input').focus();
        });
        if (_this.config.searchable) {
          $el.on(EVENT_SPACE.focus, 'input', clickd_jquery.proxy(action.show, _this));
        } else {
          $el.on(EVENT_SPACE.click, clickd_jquery.proxy(action.show, _this));
        }
        $el.on(EVENT_SPACE.keydown, 'input', function (event) {
          if (event.keyCode === 8 && this.value === '' && _this.name.length) {
            $el.find('.del').eq(-1).trigger('click');
          }
        });
      } else {
        $el.on(openHandle, '.dropdown-display', clickd_jquery.proxy(action.show, _this));
        $el.on(openHandle, '.dropdown-clear-all', clickd_jquery.proxy(action.clearAll, _this));
      }

      $el.on(EVENT_SPACE.keyup, 'input', clickd_jquery.proxy(action.search, _this));

      $el.on(EVENT_SPACE.keyup, function (event) {
        var keyCode = event.keyCode;
        var KC = KEY_CODE;
        if (keyCode === KC.enter) {
          clickd_jquery.proxy(_this.isSingleSelect ? action.singleChoose : action.multiChoose, _this, event)();
        }
      });

      $el.on(EVENT_SPACE.keydown, clickd_jquery.proxy(action.control, _this));

      $el.on(EVENT_SPACE.click, 'li[tabindex]', clickd_jquery.proxy(_this.isSingleSelect ? action.singleChoose : action.multiChoose, _this));
    },
    unbindEvent: function () {
      var _this = this;
      var $el = _this.$el;
      var openHandle = isSafari ? EVENT_SPACE.click : EVENT_SPACE.focus;

      $el.off(EVENT_SPACE.click);
      $el.off(EVENT_SPACE.click, '.del');

      // show
      if (_this.isLabelMode) {
        $el.off(EVENT_SPACE.click, '.dropdown-display-label');
        $el.off(EVENT_SPACE.focus, 'input');
        $el.off(EVENT_SPACE.keydown, 'input');
      } else {
        $el.off(openHandle, '.dropdown-display');
        $el.off(openHandle, '.dropdown-clear-all');
      }

      $el.off(EVENT_SPACE.keyup, 'input');
      $el.off(EVENT_SPACE.keyup);
      $el.off(EVENT_SPACE.keydown);
      $el.off(EVENT_SPACE.click, '[tabindex]');
    },
    changeStatus: function (status) {
      var _this = this;
      if (status === 'readonly') {
        _this.unbindEvent();
      } else if (status === 'disabled') {
        _this.$select.prop('disabled', true);
        _this.unbindEvent();
      } else {
        _this.$select.prop('disabled', false);
        _this.bindEvent();
      }
    },
    update: function (data, isCover) {
      var _this = this;
      var _config = _this.config;
      var $el = _this.$el;
      var _isCover = isCover || false;

      if (Object.prototype.toString.call(data) !== '[object Array]') {
        return;
      }

      _config.data = _isCover ? data.slice(0) : _config.data.concat(data);

      var processResult = objectToSelect.call(_this, _config.data);

      _this.name = processResult[1];
      _this.selectAmount = processResult[2];
      _this.$select.html(processResult[0]);
      _this.renderSelect(true, _isCover);
    },
    destroy: function () {
      this.unbindEvent();
      this.$el.children().not('select').remove();
      this.$el.removeClass('dropdown-single dropdown-multiple-label dropdown-multiple');
      this.$select.show();
    },
    choose: function (values, status) {
      var valArr = Object.prototype.toString.call(values) === '[object Array]' ? values : [values];
      var _this = this;
      var _status = status !== void 0 ? !!status : true
      clickd_jquery.each(valArr, function (index, value) {
        var $target = _this.$el.find('[data-value="' + value + '"]');
        var targetStatus = $target.hasClass('dropdown-chose');
        if (targetStatus !== _status) {
          $target.trigger(EVENT_SPACE.click, status || true)
        }
      });
    },
    reset: function () {
      action.clearAll.call(this)
    }
  };

  clickd_jquery(document).on('click.dropdown', function () {
    clickd_jquery('.dropdown-single,.dropdown-multiple,.dropdown-multiple-label').removeClass('active');
  });

  clickd_jquery.fn.dropdown = function (options) {
    var dropdown;
    this.each(function (index, el) {
      dropdown = new Dropdown(clickd_jquery.extend(true, {}, settings, options), el)
      clickd_jquery(el).data('dropdown', dropdown);
    });
    return this;
  }
})(clickd_jquery);
