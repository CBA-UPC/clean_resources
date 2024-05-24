;(function (scope) {
  var Cframe = scope.cframe || {};
  scope.cframe = Cframe;
  var local = {};
  var fadeParams = {};

  ;(function(scope) {

  function inherit(kls) {
    
    F.prototype = kls.prototype;
    return new F();
  }

  function mergeObj() {
    var o = {}
    for (var i = 0; i < arguments.length; ++i) {
      var obj = arguments[i];
      for (var a in obj) {
        if (obj.hasOwnProperty(a))
          o[a] = obj[a];
      }
    }
    return o;
  }

  function toParams() {
    var params = [];
    for (var i = 0; i < arguments.length; ++i) {
      var o = arguments[i]
      for (var k in o) {
        params.push(encodeURIComponent(k) + '='
          + encodeURIComponent(o[k]));
      }
    }

    return params.join('&');
  }

  function fromParams(params) {
    var obj = {};

    var split_params = params.split('&');
    for(var i = 0; i < split_params.length; ++i) {
      var kv = (split_params[i]).split('=')
      obj[ decodeURIComponent(kv[0]) ] = decodeURIComponent(kv[1]);
    }

    return obj;
  }

  function element(type, attrs) {
    function setAttrs(elem, attrs) {
      for (var a in attrs)
        if (attrs.hasOwnProperty(a)) {
          var attr = attrs[a];
          if (typeof(attr) === 'object') {
            setAttrs(elem[a], attr);
          } else
            elem[a] = attrs[a];
        }
    }
    var elem = document.createElement(type);
    setAttrs(elem, attrs);

    return elem;
  }

  function Base(data) {
    if (!(this instanceof Base))
      return new Base(data);

    var self = this;

    self.data = data;

    self.logUrl = '//community.spiceworks.com/cframe/log';

    return this;
  }

  Base.prototype = {
    hostPath: function(host) {
      if ((host.length == 0)
        || host.match(/community.spiceworks.com/g)
        || host.match(/community.spice.spiceworks.com/g)
        || host.match(/gekko.spiceworks.com/g)) {
        return host;
      }
      else {
        return host + '/content_points/pass';
      }
    },
    pixel : function (attrs) {
      attrs = mergeObj({ width : '1px', height : '1px' }, attrs);
      var img = element('img', attrs);
      this.append(img);
      return img;
    },
    frame : function (attrs, appendFrame, parentNode) {
      attrs = mergeObj({ width : '1px', height : '1px',
        frameBorder : '0', scrolling : 'no' }, attrs);
      var frame = element('iframe', attrs);

      if (appendFrame === undefined) {
        appendFrame = true;
      }

      if (appendFrame) {
        this.append(frame, parentNode);
      }
      return frame;
    },
    log :  function (level, location, msg, data) {
      if (data === undefined)
        data = this.data;

      try {
        var img = document.createElement('img');
        img.src = this.logUrl + '/' + encodeURIComponent(location) + '/'
          + encodeURIComponent(level) + '?'
          + toParams( mergeObj({ 'm' : msg }, data) );
        this.append(img);
      } catch (err) {
        // pass
      }
      return this;
    },
    info: function (location, msg, data) {
      return this.log('info', location, msg, data);
    },
    error : 
    wrap : function (func) {
      var self = this;
      return function () {
        try {
          return func.apply(self, arguments);
        } catch (error) {
          self.error(func.name, error.message);
          throw error;
        }
      }
    }
  };

  scope.Base = Base;
  scope.inherit = inherit;
  scope.mergeObj = mergeObj;
  scope.toParams = toParams;
  scope.fromParams = fromParams;
  scope.element = element;

}) (local);


  function gekkoPauser(housingElement, unpause) {
    if (gekko && gekko.pauser) {
      gekko.pauser(housingElement, unpause);
    }
  }

  function expander(closed, expanded, housingElement, newHeight) {
    var jClosed = jQuery(closed);
    jClosed.fadeOut(100, function() {
      jClosed.css('visibility', 'hidden');

      housingElement.style.height = '';
      housingElement.appendChild(expanded);

      var jExpanded = jQuery(expanded);
      jExpanded.css('display', 'none');
      jExpanded.css('visibility', '');
      jExpanded.slideDown(500, function() {});
      jExpanded.fadeIn(500, function() {});
      gekkoPauser(housingElement, false);
    });
  }

  function collapser(closed, expanded, housingElement, newHeight) {
    var jHousing = jQuery(housingElement);
    var jExpanded = jQuery(expanded);

    jHousing.animate({ height: newHeight}, 'slow', function(e) {
      jExpanded.css('visibility', 'hidden');
      housingElement.removeChild(expanded);

      var jClosed = jQuery(closed);
      jClosed.css('display', 'none');
      jClosed.css('visibility', '');
      jClosed.fadeIn(100, function() { });
      gekkoPauser(housingElement, true);
    });

    jExpanded.fadeOut(100, ;

  }

  function ViewPort() {
    if (!(this instanceof ViewPort))
      return new ViewPort();

    this.p_h = document.documentElement.scrollHeight;
    this.p_w = document.documentElement.scrollWidth;
    this.v_h = window.innerHeight || document.body.clientHeight;
    this.v_w = window.innerWidth || document.body.clientWidth;
    this.y_off = window.pageYOffset || document.documentElement.scrollTop
      || document.body.scrollTop;
    this.x_off = window.pageXOffset || document.documentElement.scrollLeft
      || document.body.scrollLeft;

    return this;
  }

  function Receiver() {
    if (!(this instanceof Receiver))
      return new Receiver();

    var self = this;

    self.timers = {};

    // Create IE + others compatible event handler
    var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
    var eventer = window[eventMethod];
    var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";

    // Listen to message from child window
    eventer(messageEvent,function(e) {
      var start = 'cframe: ';
      if (!((typeof(e.data) == 'string') && e.data.indexOf(start) == 0)) {
        return;
      }
      var message = e.data.substring(start.length);
      self.send(message);

    },false);

    return this;
  }

  
  Receiver.prototype = local.inherit(local.Base);

  Receiver.prototype.decode = function (msg) {
    if (msg.length > 0) {
      try {
        var data = local.fromParams(msg);
        return [ data.action, data ];
      } catch (error) {
        this.error('receive-error', error.message);
      }
    }
    return ['null', null];
  }

  Receiver.prototype.send = function (msg) {
    var action, data, tuple = this.decode(msg);
    action = tuple[0];
    data = tuple[1];

    if (typeof(this[action]) === 'function') {
      try {
        return this.wrap(this[action])(data);
      } catch (error) {
        this.error('send', error.message, msg);
      }
    }

  }

  Receiver.prototype.expand = function (data, checkLoad) {
    if (checkLoad === undefined)
      checkLoad = true;

    var windowName = data.windowName;
    if (!windowName) {
      console.log("did not supply original frame");
      return;
    }
    var originatingFrame = document.getElementById(windowName);
    if (!originatingFrame) {
      console.log("could not find original frame");
      return;
    }
    var frameParentDiv = originatingFrame.parentNode;
    var housingElement = frameParentDiv.parentNode;

    if (typeof(data.width) == 'undefined' || typeof(data.height) == 'undefined') {
      console.log('did not supply height/width of frame');
      return;
    }

    var view = ViewPort();
    var frameId = 'cframe-' + data.instance;
    var params = local.mergeObj({ content_id : frameId }, data, view);
    var expandUrl = '//community.spiceworks.com/emsg/'
      + data.controller + '?'
      + local.toParams(params);

    var attrs = {
      'id' : frameId,
      'width' : data.width,
      'height' : data.height,
      'frameBorder' : '0',
      'scrolling' : 'no',
      'allowTransparency' : 'true',
      'style' : {
        'z-index' : '9999',
        'zIndex' : '9999'
      },
      'src' : expandUrl
    };

    var frame = this.frame(attrs, false);

    fadeParams[frameId] = {
      'id': windowName,
      'housingElement': housingElement.id,
      'height': housingElement.style.height,
      'originalFrame': originatingFrame.id
    };

    expander(originatingFrame, frame, housingElement);

    if (checkLoad) {
      var self = this;
      this.timers[frameId] = setTimeout(this.fadeClose.bind(this, params),
        10000);
    }
  }

  Receiver.prototype.show = function (data, checkLoad) {
    if (checkLoad === undefined)
      checkLoad = true;

    var view = ViewPort();
    var frameId = 'cframe-' + data.instance;

    if (document.getElementById(frameId)) {
      // do not double up on the frame
      return;
    }

    content_params = {content_id : frameId} ;

    if (Application && Application.uuid && Application.ehash) {
      content_params['uuid'] = Application.uuid;
      content_params['ehash'] = Application.ehash;
      content_params['cguid'] = generateQuickGuid(); // generic quick guid
    }

    var params = local.mergeObj(content_params, data, view);
    var showUrl = '//community.spiceworks.com/emsg/'
      + data.controller + '?'
      + local.toParams(params);

    var attrs = {
      'id' : frameId,
      'width' : view.p_w,
      'height' : view.p_h,
      'frameBorder' : '0',
      'scrolling' : 'no',
      'allowTransparency' : 'true',
      'style' : {
        'z-index' : '9999',
        'zIndex' : '9999',
        'left' : '0',
        'top' : '0',
        'position' : 'absolute'
      },
      'src' : showUrl
    };

    var frame = this.frame(attrs);

    if (checkLoad) {
      var self = this;
      this.timers[frameId] = setTimeout(this.close.bind(this, params),
        10000);
    }
  }

  Receiver.prototype.loaded = function (data) {
    var timer = this.timers[data.content_id];
    if (timer !== undefined)
      clearTimeout(timer);
  }

  Receiver.prototype.close = function (data) {
    var frame = document.getElementById(data.content_id);
    if (frame !== undefined && frame !== null) {
      frame.parentNode.removeChild(frame);
    }
  }

  Receiver.prototype.fadeClose = function (data) {
    var frame = document.getElementById(data.content_id);
    var cached = fadeParams[data.content_id];

    if (cached) {
      var originalFrame = document.getElementById(cached.originalFrame),
          housingElement = document.getElementById(cached.housingElement),
          height = cached.height;

      collapser(originalFrame, frame, housingElement, height);
      delete fadeParams[data.content_id];
    } else if (frame !== undefined && frame !== null) {
        frame.parentNode.removeChild(frame);
    }
  }

  Receiver.prototype.append = function (elem, parentNode) {
    if ((parentNode === undefined) || (parentNode == null)) {
      parentNode = document.getElementsByTagName('body')[0];
    }

    return parentNode.appendChild(elem);
  }

  Cframe.receiver = Receiver();

  Cframe.message = function (msg) {
    var data = Cframe.receiver.send(msg);
  }

}) (typeof(SPICEWORKS) === 'undefined' ? this.SPICEWORKS = {} : SPICEWORKS);
