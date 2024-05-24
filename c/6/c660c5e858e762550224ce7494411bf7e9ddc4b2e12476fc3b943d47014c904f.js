!function(){if(document.querySelectorAll)for(var e="https://widget.gleamjs.io",t="https://js.gleam.io/images/logo.svg",d=document.querySelectorAll("a.e-gleam, a.e-widget"),i=0;i<d.length;i++){var a=d[i];if(a.href.match(/(?:\/|%2f)([a-z0-9]{5})(?:\/|%2f)/i,"/")){var r=a.getAttribute("data-loading-text")||"Loading...",o=a.href.match(/(?:\/|%2f)([a-z0-9]{5})(?:\/|%2f)/i,"/")[1],g=document.createElement("div"),c=document.createElement("script"),n=document.getElementsByTagName("script")[0],l="e-widget-preloader",s=[],m="";if((""+a.className).match(/no-button/)&&s.push("no_button"),(""+a.className).match(/xdga/)&&s.push("xdga"),(""+a.className).match(/leaderboard/)&&(s.push("leaderboard"),m="-L"),(""+a.className).match(/eruda/)&&s.push("eruda"),(""+a.className).match(/generic-loader/)||!t?g.innerHTML="<div><div class='e-widget-fc'><div class='e-widget-c1 e-widget-c'></div><div class='e-widget-c2 e-widget-c'></div><div class='e-widget-c3 e-widget-c'></div><div class='e-widget-c4 e-widget-c'></div><div class='e-widget-c5 e-widget-c'></div><div class='e-widget-c6 e-widget-c'></div><div class='e-widget-c7 e-widget-c'></div><div class='e-widget-c8 e-widget-c'></div><div class='e-widget-c9 e-widget-c'></div><div class='e-widget-c10 e-widget-c'></div><div class='e-widget-c11 e-widget-c'></div><div class='e-widget-c12 e-widget-c'></div></div></div>":g.innerHTML="<div><img class='app-spin' src='"+t+"'/> "+r+"</div>",(""+a.className).match(/e-modern/)&&(l+=" e-modern"),(""+a.className).match(/e-dark/)&&(l+=" e-dark"),g.className="GleamEmbed"+o+m+" "+l,a.parentNode.replaceChild(g,a),!document.getElementById("e-widget-preload-styles")){var w=document.createElement("style"),p="html body .e-widget-wrapper{margin:auto;max-width:540px;padding:0}html body .e-widget-preloader,html body .e-widget-wrapper{box-shadow:0 0 2px rgba(0,0,0,0.3),0 3px 5px rgba(0,0,0,0.2)}html body .e-widget-wrapper.e-classic.pseudo-popup-border{border:5px solid rgba(240,240,240,0.5);box-shadow:none}html body .e-widget-preloader.e-modern,html body .e-widget-preloader.e-dark,html body .e-widget-wrapper.e-modern,html body .e-widget-wrapper.e-dark{border-radius:var(--glm-widget-radius);box-shadow:0 6px 10px 0 rgba(0,0,0,0.14),0 1px 18px 0 rgba(0,0,0,0.12),0 3px 5px -1px rgba(0,0,0,0.2)}html body .e-widget-preloader.e-dark,html body .e-widget-wrapper.e-dark{background:#1C202E;color:#999999}html body .e-widget-wrapper.e-modern iframe.e-embed-frame,html body .e-widget-wrapper.e-dark iframe.e-embed-frame{border-radius:var(--glm-widget-radius)}html body .e-widget-preloader,html body iframe.e-embed-frame{width:100%;max-width:540px;min-width:320px;margin:0 auto 20px;display:block;float:none;background:white}html body .e-widget-preloader>div{line-height:200px;font-size:30px;text-align:center;font-family:sans-serif;color:#666}html body .e-widget-preloader.e-dark>div{color:#FFFFFF}html body .e-widget-preloader>*>img{vertical-align:middle !important;height:74px !important;width:74px !important;margin:0 10px 0 0 !important;border:none !important;display:inline-block !important;float:none !important;box-shadow:none !important}html body .e-widget-preloader>div>img.app-spin{animation:app-spin 2s infinite linear} @keyframes app-spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}html body .e-widget-fc{width:74px;height:74px;position:relative;display:inline-block;vertical-align:middle;margin:0 16px 0 0 !important}.e-widget-fc .e-widget-c{width:100%;height:100%;position:absolute;left:0;top:0}.e-widget-fc .e-widget-c:before{content:'';display:block;margin:0 auto;width:15%;height:15%;background-color:#333;border-radius:100%;animation:e-widget-cFadeDelay 1.2s infinite ease-in-out both}.e-widget-fc .e-widget-c2{transform:rotate(30deg)}.e-widget-fc .e-widget-c2:before{animation-delay:-1.1s}.e-widget-fc .e-widget-c3{transform:rotate(60deg)}.e-widget-fc .e-widget-c3:before{animation-delay:-1s}.e-widget-fc .e-widget-c4{transform:rotate(90deg)}.e-widget-fc .e-widget-c4:before{animation-delay:-0.9s}.e-widget-fc .e-widget-c5{transform:rotate(120deg)}.e-widget-fc .e-widget-c5:before{animation-delay:-0.8s}.e-widget-fc .e-widget-c6{transform:rotate(150deg)}.e-widget-fc .e-widget-c6:before{animation-delay:-0.7s}.e-widget-fc .e-widget-c7{transform:rotate(180deg)}.e-widget-fc .e-widget-c7:before{animation-delay:-0.6s}.e-widget-fc .e-widget-c8{transform:rotate(210deg)}.e-widget-fc .e-widget-c8:before{animation-delay:-0.5s}.e-widget-fc .e-widget-c9{transform:rotate(240deg)}.e-widget-fc .e-widget-c9:before{animation-delay:-0.4s}.e-widget-fc .e-widget-c10{transform:rotate(270deg)}.e-widget-fc .e-widget-c10:before{animation-delay:-0.3s}.e-widget-fc .e-widget-c11{transform:rotate(300deg)}.e-widget-fc .e-widget-c11:before{animation-delay:-0.2s}.e-widget-fc .e-widget-c12{transform:rotate(330deg)}.e-widget-fc .e-widget-c12:before{animation-delay:-0.1s}@keyframes e-widget-cFadeDelay{0%,39%,100%{opacity:0}40%{opacity:1}}";w.setAttribute("id","e-widget-preload-styles"),w.setAttribute("type","text/css"),w.textContent=p,document.getElementsByTagName("head")[0].appendChild(w)}c.src=e+"/"+o+"/embed.js"+(0<s.length?"?"+s.join("&"):""),n.parentNode.insertBefore(c,n)}}}();()) - tm) +'ms');
  };

  /**
   * Draw the saturation/luminance mask.
   */
  fb.drawMask = function () {
    var tm = +(new Date());

    // Iterate over sat/lum space and calculate appropriate mask pixel values.
    var size = fb.square * 2, sq = fb.square;
    function calculateMask(sizex, sizey, outputPixel) {
      var isx = 1 / sizex, isy = 1 / sizey;
      for (var y = 0; y <= sizey; ++y) {
        var l = 1 - y * isy;
        for (var x = 0; x <= sizex; ++x) {
          var s = 1 - x * isx;
          // From sat/lum to alpha and color (grayscale)
          var a = 1 - 2 * Math.min(l * s, (1 - l) * s);
          var c = (a > 0) ? ((2 * l - 1 + a) * .5 / a) : 0;
          outputPixel(x, y, c, a);
        }
      }
    }

    // Method #1: direct pixel access (new Canvas).
    if (fb.ctxMask.getImageData) {
      // Create half-resolution buffer.
      var sz = Math.floor(size / 2);
      var buffer = document.createElement('canvas');
      buffer.width = buffer.height = sz + 1;
      var ctx = buffer.getContext('2d');
      var frame = ctx.getImageData(0, 0, sz + 1, sz + 1);

      var i = 0;
      calculateMask(sz, sz, function (x, y, c, a) {
        frame.data[i++] = frame.data[i++] = frame.data[i++] = c * 255;
        frame.data[i++] = a * 255;
      });

      ctx.putImageData(frame, 0, 0);
      fb.ctxMask.drawImage(buffer, 0, 0, sz + 1, sz + 1, -sq, -sq, sq * 2, sq * 2);
    }
    // Method #3: vertical DXImageTransform gradient strips (IE).
    else {
      var cache_last, cache, w = 6; // Each strip is 6 pixels wide.
      var sizex = Math.floor(size / w);
      // 6 vertical pieces of gradient per strip.
      calculateMask(sizex, 6, function (x, y, c, a) {
        if (x == 0) {
          cache_last = cache;
          cache = [];
        }
        c = Math.round(c * 255);
        a = Math.round(a * 255);
        // We can only start outputting gradients once we have two rows of pixels.
        if (y > 0) {
          var c_last = cache_last[x][0],
              a_last = cache_last[x][1],
              color1 = fb.packDX(c_last, a_last),
              color2 = fb.packDX(c, a),
              y1 = Math.round(fb.mid + ((y - 1) * .333 - 1) * sq),
              y2 = Math.round(fb.mid + (y * .333 - 1) * sq);
          $('<div>').css({
            position: 'absolute',
            filter: "progid:DXImageTransform.Microsoft.Gradient(StartColorStr="+ color1 +", EndColorStr="+ color2 +", GradientType=0)",
            top: y1,
            height: y2 - y1,
            // Avoid right-edge sticking out.
            left: fb.mid + (x * w - sq - 1),
            width: w - (x == sizex ? Math.round(w / 2) : 0)
          }).appendTo(fb.cnvMask);
        }
        cache.push([c, a]);
      });
    }
    __debug && $('body').append('<div>drawMask '+ (+(new Date()) - tm) +'ms');
  }

  /**
   * Draw the selection markers.
   */
  fb.drawMarkers = function () {
    var markerRingColor = '#fff',
        markerBlockColor = '#fff';
    if(fb.isFocusRing){
      markerRingColor = options.focusColor;
    }else if(fb.isFocusBlock){
      markerBlockColor = options.focusColor;
    }
    // Determine marker dimensions
    var sz = options.width, lw = Math.ceil(fb.markerSize / 4), r = fb.markerSize - lw + 1;
    var angle = fb.hsl[0] * 6.28,
        x1 =  Math.sin(angle) * fb.radius,
        y1 = -Math.cos(angle) * fb.radius,
        x2 = 2 * fb.square * (.5 - fb.hsl[1]),
        y2 = 2 * fb.square * (.5 - fb.hsl[2]),
        c1 = fb.invert ? markerBlockColor : '#000',
        c2 = fb.invert ? '#000' : markerBlockColor;
    var circles = [
      { x: x1, y: y1, r: r,             c: '#000', lw: lw + 1 },
      { x: x1, y: y1, r: fb.markerSize, c: markerRingColor, lw: lw },
      { x: x2, y: y2, r: r,             c: c2,     lw: lw + 1 },
      { x: x2, y: y2, r: fb.markerSize, c: c1,     lw: lw },
    ];

    // Update the overlay canvas.
    fb.ctxOverlay.clearRect(-fb.mid, -fb.mid, sz, sz);
    for (var i = 0; i < circles.length; i++) {
      var c = circles[i];
      fb.ctxOverlay.lineWidth = c.lw;
      fb.ctxOverlay.strokeStyle = c.c;
      fb.ctxOverlay.beginPath();
      fb.ctxOverlay.arc(c.x, c.y, c.r, 0, Math.PI * 2, true);
      fb.ctxOverlay.stroke();
    }
  }

  /**
   * Update the markers and styles
   */
  fb.updateDisplay = function () {
    // Determine whether labels/markers should invert.
    fb.invert = (fb.rgb[0] * 0.3 + fb.rgb[1] * .59 + fb.rgb[2] * .11) <= 0.6;

    // Update the solid background fill.
    fb.solidFill.css('backgroundColor', fb.pack(fb.HSLToRGB([fb.hsl[0], 1, 0.5])));

    // Draw markers
    fb.drawMarkers();

    // Linked elements or callback
    if (typeof fb.callback == 'object') {
      // Set background/foreground color
      $(fb.callback).css({
        backgroundColor: fb.color,
        color: fb.invert ? '#fff' : '#000'
      });

      // Change linked value
      $(fb.callback).each(function() {
        if ((typeof this.value == 'string') && this.value != fb.color) {
          this.value = fb.color;
        }
      }).change();
    }
    else if (typeof fb.callback == 'function') {
      fb.callback.call(fb, fb.color);
    }
  }

  /**
   * Helper for returning coordinates relative to the center.
   */
  fb.widgetCoords = function (event) {
    var pos = {
      x: event.pageX,
      y: event.pageY
    };
    // if is touch event
    var isTouch = event.originalEvent.touches || event.originalEvent.targetTouches || event.originalEvent.changedTouches;

    if(isTouch && isTouch[0]){
      __debug && console.log(isTouch);
      pos.x = isTouch[0].pageX;
      pos.y = isTouch[0].pageY;
    }
    return {
      x: pos.x - fb.offset.left - fb.mid,
      y: pos.y - fb.offset.top - fb.mid
    };
  }

  /**
   * Mousedown handler
   */
  fb.mousedown = function (event) {
    // Capture mouse
    if (!$._farbtastic.dragging) {
      var isTouch = event.originalEvent.touches || event.originalEvent.targetTouches || event.originalEvent.changedTouches;
      if(isTouch && isTouch[0]){
        __debug && console.log(isTouch[0]);
        $(document).on('touchmove', fb.mousemove).on('touchend', fb.mouseup);
      }else{
        $(document).on('mousemove', fb.mousemove).on('mouseup', fb.mouseup);
      }
      $._farbtastic.dragging = true;
    }

    // Update the stored offset for the widget.
    fb.offset = $(container).offset();

    // Check which area is being dragged
    var pos = fb.widgetCoords(event);
    fb.circleDrag = Math.max(Math.abs(pos.x), Math.abs(pos.y)) > (fb.square + 2);

    // Process
    fb.mousemove(event);
    return false;
  }

  /**
   * Mousemove handler
   */
  fb.mousemove = function (event) {
    // Get coordinates relative to color picker center
    var pos = fb.widgetCoords(event);

    // Set new HSL parameters
    if (fb.circleDrag) {
      var hue = Math.atan2(pos.x, -pos.y) / 6.28;
      fb.setHSL([(hue + 1) % 1, fb.hsl[1], fb.hsl[2]]);
    }
    else {
      var sat = Math.max(0, Math.min(1, -(pos.x / fb.square / 2) + .5));
      var lum = Math.max(0, Math.min(1, -(pos.y / fb.square / 2) + .5));
      fb.setHSL([fb.hsl[0], sat, lum]);
    }
    return false;
  }

  /**
   * Mouseup handler
   */
  fb.mouseup = function () {
    event.stopPropagation();
    // Uncapture mouse
    $(document).off('mousemove', fb.mousemove);
    $(document).off('mouseup', fb.mouseup);
    $(document).off('touchmove', fb.touchmove);
    $(document).off('touchend', fb.mouseup);
    $._farbtastic.dragging = false;
  }

  /**
   * Focus handler
   */
  fb.focusRing = function () {
    fb.isFocusRing = true;
    __debug && console.log('focusRing');

    // Draw markers
    fb.drawMarkers();

    $('.farbtastic-focus-ring', container).on('keydown', fb.keydownRing);
  }
  fb.focusBlock = function () {
    fb.isFocusBlock = true;
    __debug && console.log('focusBlock');

    // Draw markers
    fb.drawMarkers();

    $('.farbtastic-focus-block', container).on('keydown', fb.keydownBlock);
  }
  /**
   * Blur handler
   */
  fb.blurRing = function () {
    fb.isFocusRing = false;
    __debug && console.log('blurRing');

    // Draw markers
    fb.drawMarkers();

    $('.farbtastic-focus-ring', container).off('keydown');
  }
  fb.blurBlock = function () {
    fb.isFocusBlock = false;
    __debug && console.log('blurBlock');

    // Draw markers
    fb.drawMarkers();

    $('.farbtastic-focus-block', container).off('keydown');
  }

  /**
   * Keydown handler
   */
  fb.keydownRing = function (event) {
    event = event || window.event;

    // Update the stored offset for the widget.
    fb.offset = $(container).offset();

    // Check which area is being dragged
    fb.circleDrag = true;

    // Process
    fb.ringKeyboardMove(event);
  }
  fb.ringKeyboardMove = function (event) {
    if (event.keyCode == '37' || event.keyCode == '39' || event.keyCode == '38' || event.keyCode == '40'){
      event.preventDefault();
      event.stopPropagation();
      var hue = fb.hsl[0];
      if (event.keyCode == '37' || event.keyCode == '38'){ // arrow left
        if (hue > 0){
          hue-=0.01;
        }
        if( hue <= 0){
          hue = .999;
        }
      }else if(event.keyCode == '39' || event.keyCode == '40'){ // arrow right
        if (hue < 1){
          hue+=0.01;
        }
        if( hue >= 1){
          hue = 0;
        }
      }
      fb.setHSL([(hue + 1) % 1, fb.hsl[1], fb.hsl[2]]);
    }

    return false;
  }
  fb.keydownBlock = function (event) {
    event = event || window.event;

    // Update the stored offset for the widget.
    fb.offset = $(container).offset();

    // Check which area is being dragged
    fb.circleDrag = true;

    // Process
    fb.blockKeyboardMove(event);
  }
  fb.blockKeyboardMove = function (event) {
    if (event.keyCode == '37' || event.keyCode == '39' || event.keyCode == '38' || event.keyCode == '40'){
    event.preventDefault();
    event.stopPropagation();
      var sat = fb.hsl[1];
      var lum = fb.hsl[2];
      if (event.keyCode == '37'){ // arrow left
        if (sat < 1){
          sat+=0.01;
        }
        if( sat >= 1){
          sat = 0;
        }
      }else if(event.keyCode == '39'){ // arrow right
        if (sat > 0){
          sat-=0.01;
        }
        if( sat <= 0){
          sat = .999;
        }
      }else if (event.keyCode == '38'){ // arrow up
        if (lum < 1){
          lum+=0.01;
        }
        if( lum >= 1){
          lum = 0;
        }
      }else if(event.keyCode == '40'){ // arrow down
        if (lum > 0){
          lum-=0.01;
        }
        if( lum <= 0){
          lum = .999;
        }
      }
      fb.setHSL([fb.hsl[0], sat, lum]);
    }

    return false;
  }

  /* Various color utility functions */
  fb.dec2hex = function (x) {
    return (x < 16 ? '0' : '') + x.toString(16);
  }

  fb.packDX = function (c, a) {
    return '#' + fb.dec2hex(a) + fb.dec2hex(c) + fb.dec2hex(c) + fb.dec2hex(c);
  };

  fb.pack = function (rgb) {
    var r = Math.round(rgb[0] * 255);
    var g = Math.round(rgb[1] * 255);
    var b = Math.round(rgb[2] * 255);
    return '#' + fb.dec2hex(r) + fb.dec2hex(g) + fb.dec2hex(b);
  };

  fb.unpack = function (color) {
    if (color.length == 7) {
      function x(i) {
        return parseInt(color.substring(i, i + 2), 16) / 255;
      }
      return [ x(1), x(3), x(5) ];
    }
    else if (color.length == 4) {
      function x(i) {
        return parseInt(color.substring(i, i + 1), 16) / 15;
      }
      return [ x(1), x(2), x(3) ];
    }
  };

  fb.HSLToRGB = function (hsl) {
    var m1, m2, r, g, b;
    var h = hsl[0], s = hsl[1], l = hsl[2];
    m2 = (l <= 0.5) ? l * (s + 1) : l + s - l * s;
    m1 = l * 2 - m2;
    return [
      this.hueToRGB(m1, m2, h + 0.33333),
      this.hueToRGB(m1, m2, h),
      this.hueToRGB(m1, m2, h - 0.33333)
    ];
  };

  fb.hueToRGB = function (m1, m2, h) {
    h = (h + 1) % 1;
    if (h * 6 < 1) return m1 + (m2 - m1) * h * 6;
    if (h * 2 < 1) return m2;
    if (h * 3 < 2) return m1 + (m2 - m1) * (0.66666 - h) * 6;
    return m1;
  };

  fb.RGBToHSL = function (rgb) {
    var r = rgb[0], g = rgb[1], b = rgb[2],
        min = Math.min(r, g, b),
        max = Math.max(r, g, b),
        delta = max - min,
        h = 0,
        s = 0,
        l = (min + max) / 2;
    if (l > 0 && l < 1) {
      s = delta / (l < 0.5 ? (2 * l) : (2 - 2 * l));
    }
    if (delta > 0) {
      if (max == r && max != g) h += (g - b) / delta;
      if (max == g && max != b) h += (2 + (b - r) / delta);
      if (max == b && max != r) h += (4 + (r - g) / delta);
      h /= 6;
    }
    return [h, s, l];
  };

  // Parse options.
  if (!options.callback) {
    options = { callback: options };
  }
  options = $.extend({
    width: 300,
    wheelWidth: (options.width || 300) / 7,
    focusColor: '#1c9fd0',
    callback: null
  }, options);

  // Initialize.
  fb.initWidget();

  // Install mousedown handler (the others are set on the document on-demand)
  $('canvas.farbtastic-overlay', container).on('mousedown', fb.mousedown);
  $('canvas.farbtastic-overlay', container).on('touchstart', function(event){
    event.preventDefault();
    fb.mousedown(event);
  });

  $('.farbtastic-focus-ring', container).on('focus', fb.focusRing)
                                        .on('blur', fb.blurRing);

  $('.farbtastic-focus-block', container).on('focus', fb.focusBlock)
                                         .on('blur', fb.blurBlock);

  // Set linked elements/callback
  if (options.callback) {
    fb.linkTo(options.callback);
  }
  // Set to gray.
  if (!fb.color) fb.setColor('#808080');
}

})(jQuery);


/*!
 * GSAP 3.7.1
 * https://greensock.com
 * 
 * @license Copyright 2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).window=t.window||{})}(this,function(e){"use strict";function _inheritsLoose(t,e){t.prototype=Object.create(e.prototype),(t.prototype.constructor=t).__proto__=e}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function o(t){return"string"==typeof t}function p(t){return"function"==typeof t}function q(t){return"number"==typeof t}function r(t){return void 0===t}function s(t){return"object"==typeof t}function t(t){return!1!==t}function u(){return"undefined"!=typeof window}function v(t){return p(t)||o(t)}function M(t){return(h=mt(t,ot))&&oe}function N(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")}function O(t,e){return!e&&console.warn(t)}function P(t,e){return t&&(ot[t]=e)&&h&&(h[t]=e)||ot}function Q(){return 0}function $(t){var e,r,i=t[0];if(s(i)||p(i)||(t=[t]),!(e=(i._gsap||{}).harness)){for(r=pt.length;r--&&!pt[r].targetTest(i););e=pt[r]}for(r=t.length;r--;)t[r]&&(t[r]._gsap||(t[r]._gsap=new Lt(t[r],e)))||t.splice(r,1);return t}function _(t){return t._gsap||$(xt(t))[0]._gsap}function aa(t,e,i){return(i=t[e])&&p(i)?t[e]():r(i)&&t.getAttribute&&t.getAttribute(e)||i}function ba(t,e){return(t=t.split(",")).forEach(e)||t}function ca(t){return Math.round(1e5*t)/1e5||0}function da(t,e){for(var r=e.length,i=0;t.indexOf(e[i])<0&&++i<r;);return i<r}function ea(){var t,e,r=ht.length,i=ht.slice(0);for(lt={},t=ht.length=0;t<r;t++)(e=i[t])&&e._lazy&&(e.render(e._lazy[0],e._lazy[1],!0)._lazy=0)}function fa(t,e,r,i){ht.length&&ea(),t.render(e,r,i),ht.length&&ea()}function ga(t){var e=parseFloat(t);return(e||0===e)&&(t+"").match(at).length<2?e:o(t)?t.trim():t}function ha(t){return t}function ia(t,e){for(var r in e)r in t||(t[r]=e[r]);return t}function ja(t,e){for(var r in e)r in t||"duration"===r||"ease"===r||(t[r]=e[r])}function la(t,e){for(var r in e)"__proto__"!==r&&"constructor"!==r&&"prototype"!==r&&(t[r]=s(e[r])?la(t[r]||(t[r]={}),e[r]):e[r]);return t}function ma(t,e){var r,i={};for(r in t)r in e||(i[r]=t[r]);return i}function na(e){var r=e.parent||R,i=e.keyframes?ja:ia;if(t(e.inherit))for(;r;)i(e,r.vars.defaults),r=r.parent||r._dp;return e}function qa(t,e,r,i){void 0===r&&(r="_first"),void 0===i&&(i="_last");var n=e._prev,a=e._next;n?n._next=a:t[r]===e&&(t[r]=a),a?a._prev=n:t[i]===e&&(t[i]=n),e._next=e._prev=e.parent=null}function ra(t,e){!t.parent||e&&!t.parent.autoRemoveChildren||t.parent.remove(t),t._act=0}function sa(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var r=t;r;)r._dirty=1,r=r.parent;return t}function va(t){return t._repeat?gt(t._tTime,t=t.duration()+t._rDelay)*t:0}function xa(t,e){return(t-e._start)*e._ts+(0<=e._ts?0:e._dirty?e.totalDuration():e._tDur)}function ya(t){return t._end=ca(t._start+(t._tDur/Math.abs(t._ts||t._rts||U)||0))}function za(t,e){var r=t._dp;return r&&r.smoothChildTiming&&t._ts&&(t._start=ca(r._time-(0<t._ts?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),ya(t),r._dirty||sa(r,t)),t}function Aa(t,e){var r;if((e._time||e._initted&&!e._dur)&&(r=xa(t.rawTime(),e),(!e._dur||Tt(0,e.totalDuration(),r)-e._tTime>U)&&e.render(r,!0)),sa(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(r=t;r._dp;)0<=r.rawTime()&&r.totalTime(r._tTime),r=r._dp;t._zTime=-U}}function Ba(t,e,r,i){return e.parent&&ra(e),e._start=ca((q(r)?r:r||t!==R?bt(t,r,e):t._time)+e._delay),e._end=ca(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),function _addLinkedListItem(t,e,r,i,n){void 0===r&&(r="_first"),void 0===i&&(i="_last");var a,s=t[i];if(n)for(a=e[n];s&&s[n]>a;)s=s._prev;s?(e._next=s._next,s._next=e):(e._next=t[r],t[r]=e),e._next?e._next._prev=e:t[i]=e,e._prev=s,e.parent=e._dp=t}(t,e,"_first","_last",t._sort?"_start":0),vt(e)||(t._recent=e),i||Aa(t,e),t}function Ca(t,e){return(ot.ScrollTrigger||N("scrollTrigger",e))&&ot.ScrollTrigger.create(e,t)}function Da(t,e,r,i){return Ut(t,e),t._initted?!r&&t._pt&&(t._dur&&!1!==t.vars.lazy||!t._dur&&t.vars.lazy)&&f!==St.frame?(ht.push(t),t._lazy=[e,i],1):void 0:1}function Ia(t,e,r,i){var n=t._repeat,a=ca(e)||0,s=t._tTime/t._tDur;return s&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=n?n<0?1e10:ca(a*(n+1)+t._rDelay*n):a,s&&!i?za(t,t._tTime=t._tDur*s):t.parent&&ya(t),r||sa(t.parent,t),t}function Ja(t){return t instanceof qt?sa(t):Ia(t,t._dur)}function Ma(e,r,i){var n,a,s=q(r[1]),o=(s?2:1)+(e<2?0:1),u=r[o];if(s&&(u.duration=r[1]),u.parent=i,e){for(n=u,a=i;a&&!("immediateRender"in n);)n=a.vars.defaults||{},a=t(a.vars.inherit)&&a.parent;u.immediateRender=t(n.immediateRender),e<2?u.runBackwards=1:u.startAt=r[o-1]}return new Qt(r[0],u,r[1+o])}function Na(t,e){return t||0===t?e(t):e}function Pa(t){if("string"!=typeof t)return"";var e=st.exec(t);return e?t.substr(e.index+e[0].length):""}function Sa(t,e){return t&&s(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&s(t[0]))&&!t.nodeType&&t!==i}function Wa(t){return t.sort(function(){return.5-Math.random()})}function Xa(t){if(p(t))return t;var _=s(t)?t:{each:t},m=Ft(_.ease),g=_.from||0,v=parseFloat(_.base)||0,y={},e=0<g&&g<1,b=isNaN(g)||e,T=_.axis,w=g,x=g;return o(g)?w=x={center:.5,edges:.5,end:1}[g]||0:!e&&b&&(w=g[0],x=g[1]),function(t,e,r){var i,n,a,s,o,u,h,l,f,d=(r||_).length,c=y[d];if(!c){if(!(f="auto"===_.grid?0:(_.grid||[1,X])[1])){for(h=-X;h<(h=r[f++].getBoundingClientRect().left)&&f<d;);f--}for(c=y[d]=[],i=b?Math.min(f,d)*w-.5:g%f,n=b?d*x/f-.5:g/f|0,l=X,u=h=0;u<d;u++)a=u%f-i,s=n-(u/f|0),c[u]=o=T?Math.abs("y"===T?s:a):G(a*a+s*s),h<o&&(h=o),o<l&&(l=o);"random"===g&&Wa(c),c.max=h-l,c.min=l,c.v=d=(parseFloat(_.amount)||parseFloat(_.each)*(d<f?d-1:T?"y"===T?d/f:f:Math.max(f,d/f))||0)*("edges"===g?-1:1),c.b=d<0?v-d:v,c.u=Pa(_.amount||_.each)||0,m=m&&d<0?Bt(m):m}return d=(c[t]-c.min)/c.max||0,ca(c.b+(m?m(d):d)*c.v)+c.u}}function Ya(r){var i=r<1?Math.pow(10,(r+"").length-2):1;return function(t){var e=Math.round(parseFloat(t)/r)*r*i;return(e-e%1)/i+(q(t)?0:Pa(t))}}function Za(u,t){var h,l,e=H(u);return!e&&s(u)&&(h=e=u.radius||X,u.values?(u=xt(u.values),(l=!q(u[0]))&&(h*=h)):u=Ya(u.increment)),Na(t,e?p(u)?function(t){return l=u(t),Math.abs(l-t)<=h?l:t}:function(t){for(var e,r,i=parseFloat(l?t.x:t),n=parseFloat(l?t.y:0),a=X,s=0,o=u.length;o--;)(e=l?(e=u[o].x-i)*e+(r=u[o].y-n)*r:Math.abs(u[o]-i))<a&&(a=e,s=o);return s=!h||a<=h?u[s]:t,l||s===t||q(t)?s:s+Pa(t)}:Ya(u))}function $a(t,e,r,i){return Na(H(t)?!e:!0===r?!!(r=0):!i,function(){return H(t)?t[~~(Math.random()*t.length)]:(r=r||1e-5)&&(i=r<1?Math.pow(10,(r+"").length-2):1)&&Math.floor(Math.round((t-r/2+Math.random()*(e-t+.99*r))/r)*r*i)/i})}function cb(e,r,t){return Na(t,function(t){return e[~~r(t)]})}function fb(t){for(var e,r,i,n,a=0,s="";~(e=t.indexOf("random(",a));)i=t.indexOf(")",e),n="["===t.charAt(e+7),r=t.substr(e+7,i-e-7).match(n?at:tt),s+=t.substr(a,e-a)+$a(n?r:+r[0],n?0:+r[1],+r[2]||1e-5),a=i+1;return s+t.substr(a,t.length-a)}function ib(t,e,r){var i,n,a,s=t.labels,o=X;for(i in s)(n=s[i]-e)<0==!!r&&n&&o>(n=Math.abs(n))&&(a=i,o=n);return a}function kb(t){return ra(t),t.scrollTrigger&&t.scrollTrigger.kill(!1),t.progress()<1&&Pt(t,"onInterrupt"),t}function pb(t,e,r){return(6*(t=t<0?t+1:1<t?t-1:t)<1?e+(r-e)*t*6:t<.5?r:3*t<2?e+(r-e)*(2/3-t)*6:e)*kt+.5|0}function qb(t,e,r){var i,n,a,s,o,u,h,l,f,d,c=t?q(t)?[t>>16,t>>8&kt,t&kt]:0:Mt.black;if(!c){if(","===t.substr(-1)&&(t=t.substr(0,t.length-1)),Mt[t])c=Mt[t];else if("#"===t.charAt(0)){if(t.length<6&&(t="#"+(i=t.charAt(1))+i+(n=t.charAt(2))+n+(a=t.charAt(3))+a+(5===t.length?t.charAt(4)+t.charAt(4):"")),9===t.length)return[(c=parseInt(t.substr(1,6),16))>>16,c>>8&kt,c&kt,parseInt(t.substr(7),16)/255];c=[(t=parseInt(t.substr(1),16))>>16,t>>8&kt,t&kt]}else if("hsl"===t.substr(0,3))if(c=d=t.match(tt),e){if(~t.indexOf("="))return c=t.match(et),r&&c.length<4&&(c[3]=1),c}else s=+c[0]%360/360,o=c[1]/100,i=2*(u=c[2]/100)-(n=u<=.5?u*(o+1):u+o-u*o),3<c.length&&(c[3]*=1),c[0]=pb(s+1/3,i,n),c[1]=pb(s,i,n),c[2]=pb(s-1/3,i,n);else c=t.match(tt)||Mt.transparent;c=c.map(Number)}return e&&!d&&(i=c[0]/kt,n=c[1]/kt,a=c[2]/kt,u=((h=Math.max(i,n,a))+(l=Math.min(i,n,a)))/2,h===l?s=o=0:(f=h-l,o=.5<u?f/(2-h-l):f/(h+l),s=h===i?(n-a)/f+(n<a?6:0):h===n?(a-i)/f+2:(i-n)/f+4,s*=60),c[0]=~~(s+.5),c[1]=~~(100*o+.5),c[2]=~~(100*u+.5)),r&&c.length<4&&(c[3]=1),c}function rb(t){var r=[],i=[],n=-1;return t.split(At).forEach(function(t){var e=t.match(rt)||[];r.push.apply(r,e),i.push(n+=e.length+1)}),r.c=i,r}function sb(t,e,r){var i,n,a,s,o="",u=(t+o).match(At),h=e?"hsla(":"rgba(",l=0;if(!u)return t;if(u=u.map(function(t){return(t=qb(t,e,1))&&h+(e?t[0]+","+t[1]+"%,"+t[2]+"%,"+t[3]:t.join(","))+")"}),r&&(a=rb(t),(i=r.c).join(o)!==a.c.join(o)))for(s=(n=t.replace(At,"1").split(rt)).length-1;l<s;l++)o+=n[l]+(~i.indexOf(l)?u.shift()||h+"0,0,0,0)":(a.length?a:u.length?u:r).shift());if(!n)for(s=(n=t.split(At)).length-1;l<s;l++)o+=n[l]+u[l];return o+n[s]}function vb(t){var e,r=t.join(" ");if(At.lastIndex=0,At.test(r))return e=Ct.test(r),t[1]=sb(t[1],e),t[0]=sb(t[0],e,rb(t[1])),!0}function Eb(t){var e=(t+"").split("("),r=zt[e[0]];return r&&1<e.length&&r.config?r.config.apply(null,~t.indexOf("{")?[function _parseObjectInString(t){for(var e,r,i,n={},a=t.substr(1,t.length-3).split(":"),s=a[0],o=1,u=a.length;o<u;o++)r=a[o],e=o!==u-1?r.lastIndexOf(","):r.length,i=r.substr(0,e),n[s]=isNaN(i)?i.replace(Et,"").trim():+i,s=r.substr(e+1).trim();return n}(e[1])]:function _valueInParentheses(t){var e=t.indexOf("(")+1,r=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<r?t.indexOf(")",r+1):r)}(t).split(",").map(ga)):zt._CE&&It.test(t)?zt._CE("",t):r}function Gb(t,e){for(var r,i=t._first;i;)i instanceof qt?Gb(i,e):!i.vars.yoyoEase||i._yoyo&&i._repeat||i._yoyo===e||(i.timeline?Gb(i.timeline,e):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=e)),i=i._next}function Ib(t,e,r,i){void 0===r&&(r=function easeOut(t){return 1-e(1-t)}),void 0===i&&(i=function easeInOut(t){return t<.5?e(2*t)/2:1-e(2*(1-t))/2});var n,a={easeIn:e,easeOut:r,easeInOut:i};return ba(t,function(t){for(var e in zt[t]=ot[t]=a,zt[n=t.toLowerCase()]=r,a)zt[n+("easeIn"===e?".in":"easeOut"===e?".out":".inOut")]=zt[t+"."+e]=a[e]}),a}function Jb(e){return function(t){return t<.5?(1-e(1-2*t))/2:.5+e(2*(t-.5))/2}}function Kb(r,t,e){function Ol(t){return 1===t?1:i*Math.pow(2,-10*t)*J((t-a)*n)+1}var i=1<=t?t:1,n=(e||(r?.3:.45))/(t<1?t:1),a=n/V*(Math.asin(1/i)||0),s="out"===r?Ol:"in"===r?function(t){return 1-Ol(1-t)}:Jb(Ol);return n=V/n,s.config=function(t,e){return Kb(r,t,e)},s}function Lb(e,r){function Wl(t){return t?--t*t*((r+1)*t+r)+1:0}void 0===r&&(r=1.70158);var t="out"===e?Wl:"in"===e?function(t){return 1-Wl(1-t)}:Jb(Wl);return t.config=function(t){return Lb(e,t)},t}var F,R,i,n,a,h,l,f,d,c,m,g,y,b,T,w,x,k,A,C,S,D,z,I,E,B,Y={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},L={duration:.5,overwrite:!1,delay:0},X=1e8,U=1/X,V=2*Math.PI,j=V/4,W=0,G=Math.sqrt,K=Math.cos,J=Math.sin,Z="function"==typeof ArrayBuffer&&ArrayBuffer.isView||function(){},H=Array.isArray,tt=/(?:-?\.?\d|\.)+/gi,et=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,rt=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,it=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,nt=/[+-]=-?[.\d]+/,at=/[^,'"\[\]\s]+/gi,st=/[\d.+\-=]+(?:e[-+]\d*)*/i,ot={},ut={},ht=[],lt={},ft={},dt={},ct=30,pt=[],_t="",mt=function _merge(t,e){for(var r in e)t[r]=e[r];return t},gt=function _animationCycle(t,e){var r=Math.floor(t/=e);return t&&r===t?r-1:r},vt=function _isFromOrFromStart(t){var e=t.data;return"isFromStart"===e||"isStart"===e},yt={_start:0,endTime:Q,totalDuration:Q},bt=function _parsePosition(t,e,r){var i,n,a,s=t.labels,u=t._recent||yt,h=t.duration()>=X?u.endTime(!1):t._dur;return o(e)&&(isNaN(e)||e in s)?(n=e.charAt(0),a="%"===e.substr(-1),i=e.indexOf("="),"<"===n||">"===n?(0<=i&&(e=e.replace(/=/,"")),("<"===n?u._start:u.endTime(0<=u._repeat))+(parseFloat(e.substr(1))||0)*(a?(i<0?u:r).totalDuration()/100:1)):i<0?(e in s||(s[e]=h),s[e]):(n=parseFloat(e.charAt(i-1)+e.substr(i+1)),a&&r&&(n=n/100*(H(r)?r[0]:r).totalDuration()),1<i?_parsePosition(t,e.substr(0,i-1),r)+n:h+n)):null==e?h:+e},Tt=function _clamp(t,e,r){return r<t?t:e<r?e:r},wt=[].slice,xt=function toArray(t,e,r){return!o(t)||r||!n&&Dt()?H(t)?function _flatten(t,e,r){return void 0===r&&(r=[]),t.forEach(function(t){return o(t)&&!e||Sa(t,1)?r.push.apply(r,xt(t)):r.push(t)})||r}(t,r):Sa(t)?wt.call(t,0):t?[t]:[]:wt.call((e||a).querySelectorAll(t),0)},Ot=function mapRange(e,t,r,i,n){var a=t-e,s=i-r;return Na(n,function(t){return r+((t-e)/a*s||0)})},Pt=function _callback(t,e,r){var i,n,a=t.vars,s=a[e];if(s)return i=a[e+"Params"],n=a.callbackScope||t,r&&ht.length&&ea(),i?s.apply(n,i):s.call(n)},kt=255,Mt={aqua:[0,kt,kt],lime:[0,kt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,kt],navy:[0,0,128],white:[kt,kt,kt],olive:[128,128,0],yellow:[kt,kt,0],orange:[kt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[kt,0,0],pink:[kt,192,203],cyan:[0,kt,kt],transparent:[kt,kt,kt,0]},At=function(){var t,e="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";for(t in Mt)e+="|"+t+"\\b";return new RegExp(e+")","gi")}(),Ct=/hsl[a]?\(/,St=(x=Date.now,k=500,A=33,C=x(),S=C,z=D=1e3/240,b={time:0,frame:0,tick:function tick(){Kk(!0)},deltaRatio:function deltaRatio(t){return T/(1e3/(t||60))},wake:function wake(){l&&(!n&&u()&&(i=n=window,a=i.document||{},ot.gsap=oe,(i.gsapVersions||(i.gsapVersions=[])).push(oe.version),M(h||i.GreenSockGlobals||!i.gsap&&i||{}),y=i.requestAnimationFrame),m&&b.sleep(),g=y||function(t){return setTimeout(t,z-1e3*b.time+1|0)},c=1,Kk(2))},sleep:function sleep(){(y?i.cancelAnimationFrame:clearTimeout)(m),c=0,g=Q},lagSmoothing:function lagSmoothing(t,e){k=t||1e8,A=Math.min(e,k,0)},fps:function fps(t){D=1e3/(t||240),z=1e3*b.time+D},add:function add(t){I.indexOf(t)<0&&I.push(t),Dt()},remove:function remove(t){var e;~(e=I.indexOf(t))&&I.splice(e,1)&&e<=w&&w--},_listeners:I=[]}),Dt=function _wake(){return!c&&St.wake()},zt={},It=/^[\d.\-M][\d.\-,\s]/,Et=/["']/g,Bt=function _invertEase(e){return function(t){return 1-e(1-t)}},Ft=function _parseEase(t,e){return t&&(p(t)?t:zt[t]||Eb(t))||e};function Kk(t){var e,r,i,n,a=x()-S,s=!0===t;if(k<a&&(C+=a-A),(0<(e=(i=(S+=a)-C)-z)||s)&&(n=++b.frame,T=i-1e3*b.time,b.time=i/=1e3,z+=e+(D<=e?4:D-e),r=1),s||(m=g(Kk)),r)for(w=0;w<I.length;w++)I[w](i,T,n,t)}function lm(t){return t<B?E*t*t:t<.7272727272727273?E*Math.pow(t-1.5/2.75,2)+.75:t<.9090909090909092?E*(t-=2.25/2.75)*t+.9375:E*Math.pow(t-2.625/2.75,2)+.984375}ba("Linear,Quad,Cubic,Quart,Quint,Strong",function(t,e){var r=e<5?e+1:e;Ib(t+",Power"+(r-1),e?function(t){return Math.pow(t,r)}:function(t){return t},function(t){return 1-Math.pow(1-t,r)},function(t){return t<.5?Math.pow(2*t,r)/2:1-Math.pow(2*(1-t),r)/2})}),zt.Linear.easeNone=zt.none=zt.Linear.easeIn,Ib("Elastic",Kb("in"),Kb("out"),Kb()),E=7.5625,B=1/2.75,Ib("Bounce",function(t){return 1-lm(1-t)},lm),Ib("Expo",function(t){return t?Math.pow(2,10*(t-1)):0}),Ib("Circ",function(t){return-(G(1-t*t)-1)}),Ib("Sine",function(t){return 1===t?1:1-K(t*j)}),Ib("Back",Lb("in"),Lb("out"),Lb()),zt.SteppedEase=zt.steps=ot.SteppedEase={config:function config(t,e){void 0===t&&(t=1);var r=1/t,i=t+(e?0:1),n=e?1:0;return function(t){return((i*Tt(0,.99999999,t)|0)+n)*r}}},L.ease=zt["quad.out"],ba("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(t){return _t+=t+","+t+"Params,"});var Rt,Lt=function GSCache(t,e){this.id=W++,(t._gsap=this).target=t,this.harness=e,this.get=e?e.get:aa,this.set=e?e.getSetter:Jt},Nt=((Rt=Animation.prototype).delay=function delay(t){return t||0===t?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+t-this._delay),this._delay=t,this):this._delay},Rt.duration=function duration(t){return arguments.length?this.totalDuration(0<this._repeat?t+(t+this._rDelay)*this._repeat:t):this.totalDuration()&&this._dur},Rt.totalDuration=function totalDuration(t){return arguments.length?(this._dirty=0,Ia(this,this._repeat<0?t:(t-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},Rt.totalTime=function totalTime(t,e){if(Dt(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(za(this,t),!r._dp||r.parent||Aa(r,this);r.parent;)r.parent._time!==r._start+(0<=r._ts?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(0<this._ts&&t<this._tDur||this._ts<0&&0<t||!this._tDur&&!t)&&Ba(this._dp,this,this._start-this._delay)}return(this._tTime!==t||!this._dur&&!e||this._initted&&Math.abs(this._zTime)===U||!t&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=t),fa(this,t,e)),this},Rt.time=function time(t,e){return arguments.length?this.totalTime(Math.min(this.totalDuration(),t+va(this))%(this._dur+this._rDelay)||(t?this._dur:0),e):this._time},Rt.totalProgress=function totalProgress(t,e){return arguments.length?this.totalTime(this.totalDuration()*t,e):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},Rt.progress=function progress(t,e){return arguments.length?this.totalTime(this.duration()*(!this._yoyo||1&this.iteration()?t:1-t)+va(this),e):this.duration()?Math.min(1,this._time/this._dur):this.ratio},Rt.iteration=function iteration(t,e){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(t-1)*r,e):this._repeat?gt(this._tTime,r)+1:1},Rt.timeScale=function timeScale(t){if(!arguments.length)return this._rts===-U?0:this._rts;if(this._rts===t)return this;var e=this.parent&&this._ts?xa(this.parent._time,this):this._tTime;return this._rts=+t||0,this._ts=this._ps||t===-U?0:this._rts,function _recacheAncestors(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t}(this.totalTime(Tt(-this._delay,this._tDur,e),!0))},Rt.paused=function paused(t){return arguments.length?(this._ps!==t&&((this._ps=t)?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Dt(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,1===this.progress()&&Math.abs(this._zTime)!==U&&(this._tTime-=U)))),this):this._ps},Rt.startTime=function startTime(t){if(arguments.length){this._start=t;var e=this.parent||this._dp;return!e||!e._sort&&this.parent||Ba(e,this,t-this._delay),this}return this._start},Rt.endTime=function endTime(e){return this._start+(t(e)?this.totalDuration():this.duration())/Math.abs(this._ts)},Rt.rawTime=function rawTime(t){var e=this.parent||this._dp;return e?t&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?xa(e.rawTime(t),this):this._tTime:this._tTime},Rt.globalTime=function globalTime(t){for(var e=this,r=arguments.length?t:e.rawTime();e;)r=e._start+r/(e._ts||1),e=e._dp;return r},Rt.repeat=function repeat(t){return arguments.length?(this._repeat=t===1/0?-2:t,Ja(this)):-2===this._repeat?1/0:this._repeat},Rt.repeatDelay=function repeatDelay(t){if(arguments.length){var e=this._time;return this._rDelay=t,Ja(this),e?this.time(e):this}return this._rDelay},Rt.yoyo=function yoyo(t){return arguments.length?(this._yoyo=t,this):this._yoyo},Rt.seek=function seek(e,r){return this.totalTime(bt(this,e),t(r))},Rt.restart=function restart(e,r){return this.play().totalTime(e?-this._delay:0,t(r))},Rt.play=function play(t,e){return null!=t&&this.seek(t,e),this.reversed(!1).paused(!1)},Rt.reverse=function reverse(t,e){return null!=t&&this.seek(t||this.totalDuration(),e),this.reversed(!0).paused(!1)},Rt.pause=function pause(t,e){return null!=t&&this.seek(t,e),this.paused(!0)},Rt.resume=function resume(){return this.paused(!1)},Rt.reversed=function reversed(t){return arguments.length?(!!t!==this.reversed()&&this.timeScale(-this._rts||(t?-U:0)),this):this._rts<0},Rt.invalidate=function invalidate(){return this._initted=this._act=0,this._zTime=-U,this},Rt.isActive=function isActive(){var t,e=this.parent||this._dp,r=this._start;return!(e&&!(this._ts&&this._initted&&e.isActive()&&(t=e.rawTime(!0))>=r&&t<this.endTime(!0)-U))},Rt.eventCallback=function eventCallback(t,e,r){var i=this.vars;return 1<arguments.length?(e?(i[t]=e,r&&(i[t+"Params"]=r),"onUpdate"===t&&(this._onUpdate=e)):delete i[t],this):i[t]},Rt.then=function then(t){var i=this;return new Promise(function(e){function Cn(){var t=i.then;i.then=null,p(r)&&(r=r(i))&&(r.then||r===i)&&(i.then=t),e(r),i.then=t}var r=p(t)?t:ha;i._initted&&1===i.totalProgress()&&0<=i._ts||!i._tTime&&i._ts<0?Cn():i._prom=Cn})},Rt.kill=function kill(){kb(this)},Animation);function Animation(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ia(this,+t.duration,1,1),this.data=t.data,c||St.wake()}ia(Nt.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-U,_prom:0,_ps:!1,_rts:1});var qt=function(n){function Timeline(e,r){var i;return void 0===e&&(e={}),(i=n.call(this,e)||this).labels={},i.smoothChildTiming=!!e.smoothChildTiming,i.autoRemoveChildren=!!e.autoRemoveChildren,i._sort=t(e.sortChildren),R&&Ba(e.parent||R,_assertThisInitialized(i),r),e.reversed&&i.reverse(),e.paused&&i.paused(!0),e.scrollTrigger&&Ca(_assertThisInitialized(i),e.scrollTrigger),i}_inheritsLoose(Timeline,n);var e=Timeline.prototype;return e.to=function to(t,e,r){return Ma(0,arguments,this),this},e.from=function from(t,e,r){return Ma(1,arguments,this),this},e.fromTo=function fromTo(t,e,r,i){return Ma(2,arguments,this),this},e.set=function set(t,e,r){return e.duration=0,e.parent=this,na(e).repeatDelay||(e.repeat=0),e.immediateRender=!!e.immediateRender,new Qt(t,e,bt(this,r),1),this},e.call=function call(t,e,r){return Ba(this,Qt.delayedCall(0,t,e),r)},e.staggerTo=function staggerTo(t,e,r,i,n,a,s){return r.duration=e,r.stagger=r.stagger||i,r.onComplete=a,r.onCompleteParams=s,r.parent=this,new Qt(t,r,bt(this,n)),this},e.staggerFrom=function staggerFrom(e,r,i,n,a,s,o){return i.runBackwards=1,na(i).immediateRender=t(i.immediateRender),this.staggerTo(e,r,i,n,a,s,o)},e.staggerFromTo=function staggerFromTo(e,r,i,n,a,s,o,u){return n.startAt=i,na(n).immediateRender=t(n.immediateRender),this.staggerTo(e,r,n,a,s,o,u)},e.render=function render(t,e,r){var i,n,a,s,o,u,h,l,f,d,c,p,_=this._time,m=this._dirty?this.totalDuration():this._tDur,g=this._dur,v=this!==R&&m-U<t&&0<=t?m:t<U?0:t,y=this._zTime<0!=t<0&&(this._initted||!g);if(v!==this._tTime||r||y){if(_!==this._time&&g&&(v+=this._time-_,t+=this._time-_),i=v,f=this._start,u=!(l=this._ts),y&&(g||(_=this._zTime),!t&&e||(this._zTime=t)),this._repeat){if(c=this._yoyo,o=g+this._rDelay,this._repeat<-1&&t<0)return this.totalTime(100*o+t,e,r);if(i=ca(v%o),v===m?(s=this._repeat,i=g):((s=~~(v/o))&&s===v/o&&(i=g,s--),g<i&&(i=g)),d=gt(this._tTime,o),!_&&this._tTime&&d!==s&&(d=s),c&&1&s&&(i=g-i,p=1),s!==d&&!this._lock){var b=c&&1&d,T=b===(c&&1&s);if(s<d&&(b=!b),_=b?0:g,this._lock=1,this.render(_||(p?0:ca(s*o)),e,!g)._lock=0,this._tTime=v,!e&&this.parent&&Pt(this,"onRepeat"),this.vars.repeatRefresh&&!p&&(this.invalidate()._lock=1),_&&_!==this._time||u!=!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(g=this._dur,m=this._tDur,T&&(this._lock=2,_=b?g:-1e-4,this.render(_,!0),this.vars.repeatRefresh&&!p&&this.invalidate()),this._lock=0,!this._ts&&!u)return this;Gb(this,p)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(h=function _findNextPauseTween(t,e,r){var i;if(e<r)for(i=t._first;i&&i._start<=r;){if(!i._dur&&"isPause"===i.data&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=r;){if(!i._dur&&"isPause"===i.data&&i._start<e)return i;i=i._prev}}(this,ca(_),ca(i)))&&(v-=i-(i=h._start)),this._tTime=v,this._time=i,this._act=!l,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=t,_=0),!_&&i&&!e&&(Pt(this,"onStart"),this._tTime!==v))return this;if(_<=i&&0<=t)for(n=this._first;n;){if(a=n._next,(n._act||i>=n._start)&&n._ts&&h!==n){if(n.parent!==this)return this.render(t,e,r);if(n.render(0<n._ts?(i-n._start)*n._ts:(n._dirty?n.totalDuration():n._tDur)+(i-n._start)*n._ts,e,r),i!==this._time||!this._ts&&!u){h=0,a&&(v+=this._zTime=-U);break}}n=a}else{n=this._last;for(var w=t<0?t:i;n;){if(a=n._prev,(n._act||w<=n._end)&&n._ts&&h!==n){if(n.parent!==this)return this.render(t,e,r);if(n.render(0<n._ts?(w-n._start)*n._ts:(n._dirty?n.totalDuration():n._tDur)+(w-n._start)*n._ts,e,r),i!==this._time||!this._ts&&!u){h=0,a&&(v+=this._zTime=w?-U:U);break}}n=a}}if(h&&!e&&(this.pause(),h.render(_<=i?0:-U)._zTime=_<=i?1:-1,this._ts))return this._start=f,ya(this),this.render(t,e,r);this._onUpdate&&!e&&Pt(this,"onUpdate",!0),(v===m&&m>=this.totalDuration()||!v&&_)&&(f!==this._start&&Math.abs(l)===Math.abs(this._ts)||this._lock||(!t&&g||!(v===m&&0<this._ts||!v&&this._ts<0)||ra(this,1),e||t<0&&!_||!v&&!_&&m||(Pt(this,v===m&&0<=t?"onComplete":"onReverseComplete",!0),!this._prom||v<m&&0<this.timeScale()||this._prom())))}return this},e.add=function add(t,e){var r=this;if(q(e)||(e=bt(this,e,t)),!(t instanceof Nt)){if(H(t))return t.forEach(function(t){return r.add(t,e)}),this;if(o(t))return this.addLabel(t,e);if(!p(t))return this;t=Qt.delayedCall(0,t)}return this!==t?Ba(this,t,e):this},e.getChildren=function getChildren(t,e,r,i){void 0===t&&(t=!0),void 0===e&&(e=!0),void 0===r&&(r=!0),void 0===i&&(i=-X);for(var n=[],a=this._first;a;)a._start>=i&&(a instanceof Qt?e&&n.push(a):(r&&n.push(a),t&&n.push.apply(n,a.getChildren(!0,e,r)))),a=a._next;return n},e.getById=function getById(t){for(var e=this.getChildren(1,1,1),r=e.length;r--;)if(e[r].vars.id===t)return e[r]},e.remove=function remove(t){return o(t)?this.removeLabel(t):p(t)?this.killTweensOf(t):(qa(this,t),t===this._recent&&(this._recent=this._last),sa(this))},e.totalTime=function totalTime(t,e){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ca(St.time-(0<this._ts?t/this._ts:(this.totalDuration()-t)/-this._ts))),n.prototype.totalTime.call(this,t,e),this._forcing=0,this):this._tTime},e.addLabel=function addLabel(t,e){return this.labels[t]=bt(this,e),this},e.removeLabel=function removeLabel(t){return delete this.labels[t],this},e.addPause=function addPause(t,e,r){var i=Qt.delayedCall(0,e||Q,r);return i.data="isPause",this._hasPause=1,Ba(this,i,bt(this,t))},e.removePause=function removePause(t){var e=this._first;for(t=bt(this,t);e;)e._start===t&&"isPause"===e.data&&ra(e),e=e._next},e.killTweensOf=function killTweensOf(t,e,r){for(var i=this.getTweensOf(t,r),n=i.length;n--;)Yt!==i[n]&&i[n].kill(t,e);return this},e.getTweensOf=function getTweensOf(t,e){for(var r,i=[],n=xt(t),a=this._first,s=q(e);a;)a instanceof Qt?da(a._targets,n)&&(s?(!Yt||a._initted&&a._ts)&&a.globalTime(0)<=e&&a.globalTime(a.totalDuration())>e:!e||a.isActive())&&i.push(a):(r=a.getTweensOf(n,e)).length&&i.push.apply(i,r),a=a._next;return i},e.tweenTo=function tweenTo(t,e){e=e||{};var r,i=this,n=bt(i,t),a=e.startAt,s=e.onStart,o=e.onStartParams,u=e.immediateRender,h=Qt.to(i,ia({ease:e.ease||"none",lazy:!1,immediateRender:!1,time:n,overwrite:"auto",duration:e.duration||Math.abs((n-(a&&"time"in a?a.time:i._time))/i.timeScale())||U,onStart:function onStart(){if(i.pause(),!r){var t=e.duration||Math.abs((n-(a&&"time"in a?a.time:i._time))/i.timeScale());h._dur!==t&&Ia(h,t,0,1).render(h._time,!0,!0),r=1}s&&s.apply(h,o||[])}},e));return u?h.render(0):h},e.tweenFromTo=function tweenFromTo(t,e,r){return this.tweenTo(e,ia({startAt:{time:bt(this,t)}},r))},e.recent=function recent(){return this._recent},e.nextLabel=function nextLabel(t){return void 0===t&&(t=this._time),ib(this,bt(this,t))},e.previousLabel=function previousLabel(t){return void 0===t&&(t=this._time),ib(this,bt(this,t),1)},e.currentLabel=function currentLabel(t){return arguments.length?this.seek(t,!0):this.previousLabel(this._time+U)},e.shiftChildren=function shiftChildren(t,e,r){void 0===r&&(r=0);for(var i,n=this._first,a=this.labels;n;)n._start>=r&&(n._start+=t,n._end+=t),n=n._next;if(e)for(i in a)a[i]>=r&&(a[i]+=t);return sa(this)},e.invalidate=function invalidate(){var t=this._first;for(this._lock=0;t;)t.invalidate(),t=t._next;return n.prototype.invalidate.call(this)},e.clear=function clear(t){void 0===t&&(t=!0);for(var e,r=this._first;r;)e=r._next,this.remove(r),r=e;return this._dp&&(this._time=this._tTime=this._pTime=0),t&&(this.labels={}),sa(this)},e.totalDuration=function totalDuration(t){var e,r,i,n=0,a=this,s=a._last,o=X;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-t:t));if(a._dirty){for(i=a.parent;s;)e=s._prev,s._dirty&&s.totalDuration(),o<(r=s._start)&&a._sort&&s._ts&&!a._lock?(a._lock=1,Ba(a,s,r-s._delay,1)._lock=0):o=r,r<0&&s._ts&&(n-=r,(!i&&!a._dp||i&&i.smoothChildTiming)&&(a._start+=r/a._ts,a._time-=r,a._tTime-=r),a.shiftChildren(-r,!1,-Infinity),o=0),s._end>n&&s._ts&&(n=s._end),s=e;Ia(a,a===R&&a._time>n?a._time:n,1,1),a._dirty=0}return a._tDur},Timeline.updateRoot=function updateRoot(t){if(R._ts&&(fa(R,xa(t,R)),f=St.frame),St.frame>=ct){ct+=Y.autoSleep||120;var e=R._first;if((!e||!e._ts)&&Y.autoSleep&&St._listeners.length<2){for(;e&&!e._ts;)e=e._next;e||St.sleep()}}},Timeline}(Nt);ia(qt.prototype,{_lock:0,_hasPause:0,_forcing:0});function Sb(t,e,r,i,n,a){var u,h,l,f;if(ft[t]&&!1!==(u=new ft[t]).init(n,u.rawVars?e[t]:function _processVars(t,e,r,i,n){if(p(t)&&(t=Vt(t,n,e,r,i)),!s(t)||t.style&&t.nodeType||H(t)||Z(t))return o(t)?Vt(t,n,e,r,i):t;var a,u={};for(a in t)u[a]=Vt(t[a],n,e,r,i);return u}(e[t],i,n,a,r),r,i,a)&&(r._pt=h=new ae(r._pt,n,t,0,1,u.render,u,0,u.priority),r!==d))for(l=r._ptLookup[r._targets.indexOf(n)],f=u._props.length;f--;)l[u._props[f]]=h;return u}var Yt,Xt=function _addPropTween(t,e,r,i,n,a,s,u,h){p(i)&&(i=i(n||0,t,a));var l,f=t[e],d="get"!==r?r:p(f)?h?t[e.indexOf("set")||!p(t["get"+e.substr(3)])?e:"get"+e.substr(3)](h):t[e]():f,c=p(f)?h?$t:Kt:Gt;if(o(i)&&(~i.indexOf("random(")&&(i=fb(i)),"="===i.charAt(1)&&(!(l=parseFloat(d)+parseFloat(i.substr(2))*("-"===i.charAt(0)?-1:1)+(Pa(d)||0))&&0!==l||(i=l))),d!==i)return isNaN(d*i)||""===i?(f||e in t||N(e,i),function _addComplexStringPropTween(t,e,r,i,n,a,s){var o,u,h,l,f,d,c,p,_=new ae(this._pt,t,e,0,1,te,null,n),m=0,g=0;for(_.b=r,_.e=i,r+="",(c=~(i+="").indexOf("random("))&&(i=fb(i)),a&&(a(p=[r,i],t,e),r=p[0],i=p[1]),u=r.match(it)||[];o=it.exec(i);)l=o[0],f=i.substring(m,o.index),h?h=(h+1)%5:"rgba("===f.substr(-5)&&(h=1),l!==u[g++]&&(d=parseFloat(u[g-1])||0,_._pt={_next:_._pt,p:f||1===g?f:",",s:d,c:"="===l.charAt(1)?parseFloat(l.substr(2))*("-"===l.charAt(0)?-1:1):parseFloat(l)-d,m:h&&h<4?Math.round:0},m=it.lastIndex);return _.c=m<i.length?i.substring(m,i.length):"",_.fp=s,(nt.test(i)||c)&&(_.e=0),this._pt=_}.call(this,t,e,d,i,c,u||Y.stringFilter,h)):(l=new ae(this._pt,t,e,+d||0,i-(d||0),"boolean"==typeof f?Ht:Zt,0,c),h&&(l.fp=h),s&&l.modifier(s,this,t),this._pt=l)},Ut=function _initTween(e,r){var i,n,a,s,o,u,h,l,f,d,c,p,m,g=e.vars,v=g.ease,y=g.startAt,b=g.immediateRender,T=g.lazy,w=g.onUpdate,x=g.onUpdateParams,O=g.callbackScope,P=g.runBackwards,k=g.yoyoEase,M=g.keyframes,A=g.autoRevert,C=e._dur,S=e._startAt,D=e._targets,z=e.parent,I=z&&"nested"===z.data?z.parent._targets:D,E="auto"===e._overwrite&&!F,B=e.timeline;if(!B||M&&v||(v="none"),e._ease=Ft(v,L.ease),e._yEase=k?Bt(Ft(!0===k?v:k,L.ease)):0,k&&e._yoyo&&!e._repeat&&(k=e._yEase,e._yEase=e._ease,e._ease=k),e._from=!B&&!!g.runBackwards,!B){if(p=(l=D[0]?_(D[0]).harness:0)&&g[l.prop],i=ma(g,ut),S&&S.render(-1,!0).kill(),y)if(ra(e._startAt=Qt.set(D,ia({data:"isStart",overwrite:!1,parent:z,immediateRender:!0,lazy:t(T),startAt:null,delay:0,onUpdate:w,onUpdateParams:x,callbackScope:O,stagger:0},y))),r<0&&!b&&!A&&e._startAt.render(-1,!0),b){if(0<r&&!A&&(e._startAt=0),C&&r<=0)return void(r&&(e._zTime=r))}else!1===A&&(e._startAt=0);else if(P&&C)if(S)A||(e._startAt=0);else if(r&&(b=!1),a=ia({overwrite:!1,data:"isFromStart",lazy:b&&t(T),immediateRender:b,stagger:0,parent:z},i),p&&(a[l.prop]=p),ra(e._startAt=Qt.set(D,a)),r<0&&e._startAt.render(-1,!0),b){if(!r)return}else _initTween(e._startAt,U);for(e._pt=0,T=C&&t(T)||T&&!C,n=0;n<D.length;n++){if(h=(o=D[n])._gsap||$(D)[n]._gsap,e._ptLookup[n]=d={},lt[h.id]&&ht.length&&ea(),c=I===D?n:I.indexOf(o),l&&!1!==(f=new l).init(o,p||i,e,c,I)&&(e._pt=s=new ae(e._pt,o,f.name,0,1,f.render,f,0,f.priority),f._props.forEach(function(t){d[t]=s}),f.priority&&(u=1)),!l||p)for(a in i)ft[a]&&(f=Sb(a,i,e,c,o,I))?f.priority&&(u=1):d[a]=s=Xt.call(e,o,a,"get",i[a],c,I,0,g.stringFilter);e._op&&e._op[n]&&e.kill(o,e._op[n]),E&&e._pt&&(Yt=e,R.killTweensOf(o,d,e.globalTime(0)),m=!e.parent,Yt=0),e._pt&&T&&(lt[h.id]=1)}u&&ne(e),e._onInit&&e._onInit(e)}e._onUpdate=w,e._initted=(!e._op||e._pt)&&!m},Vt=function _parseFuncOrString(t,e,r,i,n){return p(t)?t.call(e,r,i,n):o(t)&&~t.indexOf("random(")?fb(t):t},jt=_t+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",Wt=(jt+",id,stagger,delay,duration,paused,scrollTrigger").split(","),Qt=function(C){function Tween(e,r,i,n){var a;"number"==typeof r&&(i.duration=r,r=i,i=null);var o,u,h,l,f,d,c,p,_=(a=C.call(this,n?r:na(r))||this).vars,m=_.duration,g=_.delay,y=_.immediateRender,b=_.stagger,T=_.overwrite,w=_.keyframes,x=_.defaults,P=_.scrollTrigger,k=_.yoyoEase,M=r.parent||R,A=(H(e)||Z(e)?q(e[0]):"length"in r)?[e]:xt(e);if(a._targets=A.length?$(A):O("GSAP target "+e+" not found. https://greensock.com",!Y.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=T,w||b||v(m)||v(g)){if(r=a.vars,(o=a.timeline=new qt({data:"nested",defaults:x||{}})).kill(),o.parent=o._dp=_assertThisInitialized(a),o._start=0,w)ia(o.vars.defaults,{ease:"none"}),b?A.forEach(function(r,i){return w.forEach(function(t,e){return o.to(r,t,e?">":i*b)})}):w.forEach(function(t){return o.to(A,t,">")});else{if(l=A.length,c=b?Xa(b):Q,s(b))for(f in b)~jt.indexOf(f)&&((p=p||{})[f]=b[f]);for(u=0;u<l;u++){for(f in h={},r)Wt.indexOf(f)<0&&(h[f]=r[f]);h.stagger=0,k&&(h.yoyoEase=k),p&&mt(h,p),d=A[u],h.duration=+Vt(m,_assertThisInitialized(a),u,d,A),h.delay=(+Vt(g,_assertThisInitialized(a),u,d,A)||0)-a._delay,!b&&1===l&&h.delay&&(a._delay=g=h.delay,a._start+=g,h.delay=0),o.to(d,h,c(u,d,A))}o.duration()?m=g=0:a.timeline=0}m||a.duration(m=o.duration())}else a.timeline=0;return!0!==T||F||(Yt=_assertThisInitialized(a),R.killTweensOf(A),Yt=0),Ba(M,_assertThisInitialized(a),i),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(y||!m&&!w&&a._start===ca(M._time)&&t(y)&&function _hasNoPausedAncestors(t){return!t||t._ts&&_hasNoPausedAncestors(t.parent)}(_assertThisInitialized(a))&&"nested"!==M.data)&&(a._tTime=-U,a.render(Math.max(0,-g))),P&&Ca(_assertThisInitialized(a),P),a}_inheritsLoose(Tween,C);var e=Tween.prototype;return e.render=function render(t,e,r){var i,n,a,s,o,u,h,l,f,d=this._time,c=this._tDur,p=this._dur,_=c-U<t&&0<=t?c:t<U?0:t;if(p){if(_!==this._tTime||!t||r||!this._initted&&this._tTime||this._startAt&&this._zTime<0!=t<0){if(i=_,l=this.timeline,this._repeat){if(s=p+this._rDelay,this._repeat<-1&&t<0)return this.totalTime(100*s+t,e,r);if(i=ca(_%s),_===c?(a=this._repeat,i=p):((a=~~(_/s))&&a===_/s&&(i=p,a--),p<i&&(i=p)),(u=this._yoyo&&1&a)&&(f=this._yEase,i=p-i),o=gt(this._tTime,s),i===d&&!r&&this._initted)return this;a!==o&&(l&&this._yEase&&Gb(l,u),!this.vars.repeatRefresh||u||this._lock||(this._lock=r=1,this.render(ca(s*a),!0).invalidate()._lock=0))}if(!this._initted){if(Da(this,t<0?t:i,r,e))return this._tTime=0,this;if(p!==this._dur)return this.render(t,e,r)}if(this._tTime=_,this._time=i,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=h=(f||this._ease)(i/p),this._from&&(this.ratio=h=1-h),i&&!d&&!e&&(Pt(this,"onStart"),this._tTime!==_))return this;for(n=this._pt;n;)n.r(h,n.d),n=n._next;l&&l.render(t<0?t:!i&&u?-U:l._dur*h,e,r)||this._startAt&&(this._zTime=t),this._onUpdate&&!e&&(t<0&&this._startAt&&this._startAt.render(t,!0,r),Pt(this,"onUpdate")),this._repeat&&a!==o&&this.vars.onRepeat&&!e&&this.parent&&Pt(this,"onRepeat"),_!==this._tDur&&_||this._tTime!==_||(t<0&&this._startAt&&!this._onUpdate&&this._startAt.render(t,!0,!0),!t&&p||!(_===this._tDur&&0<this._ts||!_&&this._ts<0)||ra(this,1),e||t<0&&!d||!_&&!d||(Pt(this,_===c?"onComplete":"onReverseComplete",!0),!this._prom||_<c&&0<this.timeScale()||this._prom()))}}else!function _renderZeroDurationTween(t,e,r,i){var n,a,s,o=t.ratio,u=e<0||!e&&(!t._start&&function _parentPlayheadIsBeforeStart(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||_parentPlayheadIsBeforeStart(e))}(t)&&(t._initted||!vt(t))||(t._ts<0||t._dp._ts<0)&&!vt(t))?0:1,h=t._rDelay,l=0;if(h&&t._repeat&&(l=Tt(0,t._tDur,e),a=gt(l,h),s=gt(t._tTime,h),t._yoyo&&1&a&&(u=1-u),a!==s&&(o=1-u,t.vars.repeatRefresh&&t._initted&&t.invalidate())),u!==o||i||t._zTime===U||!e&&t._zTime){if(!t._initted&&Da(t,e,i,r))return;for(s=t._zTime,t._zTime=e||(r?U:0),r=r||e&&!s,t.ratio=u,t._from&&(u=1-u),t._time=0,t._tTime=l,n=t._pt;n;)n.r(u,n.d),n=n._next;t._startAt&&e<0&&t._startAt.render(e,!0,!0),t._onUpdate&&!r&&Pt(t,"onUpdate"),l&&t._repeat&&!r&&t.parent&&Pt(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===u&&(u&&ra(t,1),r||(Pt(t,u?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)}(this,t,e,r);return this},e.targets=function targets(){return this._targets},e.invalidate=function invalidate(){return this._pt=this._op=this._startAt=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(),C.prototype.invalidate.call(this)},e.kill=function kill(t,e){if(void 0===e&&(e="all"),!(t||e&&"all"!==e))return this._lazy=this._pt=0,this.parent?kb(this):this;if(this.timeline){var r=this.timeline.totalDuration();return this.timeline.killTweensOf(t,e,Yt&&!0!==Yt.vars.overwrite)._first||kb(this),this.parent&&r!==this.timeline.totalDuration()&&Ia(this,this._dur*this.timeline._tDur/r,0,1),this}var i,n,a,s,u,h,l,f=this._targets,d=t?xt(t):f,c=this._ptLookup,p=this._pt;if((!e||"all"===e)&&function _arraysMatch(t,e){for(var r=t.length,i=r===e.length;i&&r--&&t[r]===e[r];);return r<0}(f,d))return"all"===e&&(this._pt=0),kb(this);for(i=this._op=this._op||[],"all"!==e&&(o(e)&&(u={},ba(e,function(t){return u[t]=1}),e=u),e=function _addAliasesToVars(t,e){var r,i,n,a,s=t[0]?_(t[0]).harness:0,o=s&&s.aliases;if(!o)return e;for(i in r=mt({},e),o)if(i in r)for(n=(a=o[i].split(",")).length;n--;)r[a[n]]=r[i];return r}(f,e)),l=f.length;l--;)if(~d.indexOf(f[l]))for(u in n=c[l],"all"===e?(i[l]=e,s=n,a={}):(a=i[l]=i[l]||{},s=e),s)(h=n&&n[u])&&("kill"in h.d&&!0!==h.d.kill(u)||qa(this,h,"_pt"),delete n[u]),"all"!==a&&(a[u]=1);return this._initted&&!this._pt&&p&&kb(this),this},Tween.to=function to(t,e,r){return new Tween(t,e,r)},Tween.from=function from(t,e){return Ma(1,arguments)},Tween.delayedCall=function delayedCall(t,e,r,i){return new Tween(e,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:t,onComplete:e,onReverseComplete:e,onCompleteParams:r,onReverseCompleteParams:r,callbackScope:i})},Tween.fromTo=function fromTo(t,e,r){return Ma(2,arguments)},Tween.set=function set(t,e){return e.duration=0,e.repeatDelay||(e.repeat=0),new Tween(t,e)},Tween.killTweensOf=function killTweensOf(t,e,r){return R.killTweensOf(t,e,r)},Tween}(Nt);ia(Qt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0}),ba("staggerTo,staggerFrom,staggerFromTo",function(r){Qt[r]=function(){var t=new qt,e=wt.call(arguments,0);return e.splice("staggerFromTo"===r?5:4,0,0),t[r].apply(t,e)}});function bc(t,e,r){return t.setAttribute(e,r)}function jc(t,e,r,i){i.mSet(t,e,i.m.call(i.tween,r,i.mt),i)}var Gt=function _setterPlain(t,e,r){return t[e]=r},Kt=function _setterFunc(t,e,r){return t[e](r)},$t=function _setterFuncWithParam(t,e,r,i){return t[e](i.fp,r)},Jt=function _getSetter(t,e){return p(t[e])?Kt:r(t[e])&&t.setAttribute?bc:Gt},Zt=function _renderPlain(t,e){return e.set(e.t,e.p,Math.round(1e6*(e.s+e.c*t))/1e6,e)},Ht=function _renderBoolean(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},te=function _renderComplexString(t,e){var r=e._pt,i="";if(!t&&e.b)i=e.b;else if(1===t&&e.e)i=e.e;else{for(;r;)i=r.p+(r.m?r.m(r.s+r.c*t):Math.round(1e4*(r.s+r.c*t))/1e4)+i,r=r._next;i+=e.c}e.set(e.t,e.p,i,e)},ee=function _renderPropTweens(t,e){for(var r=e._pt;r;)r.r(t,r.d),r=r._next},re=function _addPluginModifier(t,e,r,i){for(var n,a=this._pt;a;)n=a._next,a.p===i&&a.modifier(t,e,r),a=n},ie=function _killPropTweensOf(t){for(var e,r,i=this._pt;i;)r=i._next,i.p===t&&!i.op||i.op===t?qa(this,i,"_pt"):i.dep||(e=1),i=r;return!e},ne=function _sortPropTweensByPriority(t){for(var e,r,i,n,a=t._pt;a;){for(e=a._next,r=i;r&&r.pr>a.pr;)r=r._next;(a._prev=r?r._prev:n)?a._prev._next=a:i=a,(a._next=r)?r._prev=a:n=a,a=e}t._pt=i},ae=(PropTween.prototype.modifier=function modifier(t,e,r){this.mSet=this.mSet||this.set,this.set=jc,this.m=t,this.mt=r,this.tween=e},PropTween);function PropTween(t,e,r,i,n,a,s,o,u){this.t=e,this.s=i,this.c=n,this.p=r,this.r=a||Zt,this.d=s||this,this.set=o||Gt,this.pr=u||0,(this._next=t)&&(t._prev=this)}ba(_t+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(t){return ut[t]=1}),ot.TweenMax=ot.TweenLite=Qt,ot.TimelineLite=ot.TimelineMax=qt,R=new qt({sortChildren:!1,defaults:L,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0}),Y.stringFilter=vb;var se={registerPlugin:function registerPlugin(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];e.forEach(function(t){return function _createPlugin(t){var e=(t=!t.name&&t.default||t).name,r=p(t),i=e&&!r&&t.init?function(){this._props=[]}:t,n={init:Q,render:ee,add:Xt,kill:ie,modifier:re,rawVars:0},a={targetTest:0,get:0,getSetter:Jt,aliases:{},register:0};if(Dt(),t!==i){if(ft[e])return;ia(i,ia(ma(t,n),a)),mt(i.prototype,mt(n,ma(t,a))),ft[i.prop=e]=i,t.targetTest&&(pt.push(i),ut[e]=1),e=("css"===e?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}P(e,i),t.register&&t.register(oe,i,ae)}(t)})},timeline:function timeline(t){return new qt(t)},getTweensOf:function getTweensOf(t,e){return R.getTweensOf(t,e)},getProperty:function getProperty(i,t,e,r){o(i)&&(i=xt(i)[0]);var n=_(i||{}).get,a=e?ha:ga;return"native"===e&&(e=""),i?t?a((ft[t]&&ft[t].get||n)(i,t,e,r)):function(t,e,r){return a((ft[t]&&ft[t].get||n)(i,t,e,r))}:i},quickSetter:function quickSetter(r,e,i){if(1<(r=xt(r)).length){var n=r.map(function(t){return oe.quickSetter(t,e,i)}),a=n.length;return function(t){for(var e=a;e--;)n[e](t)}}r=r[0]||{};var s=ft[e],o=_(r),u=o.harness&&(o.harness.aliases||{})[e]||e,h=s?function(t){var e=new s;d._pt=0,e.init(r,i?t+i:t,d,0,[r]),e.render(1,e),d._pt&&ee(1,d)}:o.set(r,u);return s?h:function(t){return h(r,u,i?t+i:t,o,1)}},isTweening:function isTweening(t){return 0<R.getTweensOf(t,!0).length},defaults:function defaults(t){return t&&t.ease&&(t.ease=Ft(t.ease,L.ease)),la(L,t||{})},config:function config(t){return la(Y,t||{})},registerEffect:function registerEffect(t){var i=t.name,n=t.effect,e=t.plugins,a=t.defaults,r=t.extendTimeline;(e||"").split(",").forEach(function(t){return t&&!ft[t]&&!ot[t]&&O(i+" effect requires "+t+" plugin.")}),dt[i]=function(t,e,r){return n(xt(t),ia(e||{},a),r)},r&&(qt.prototype[i]=function(t,e,r){return this.add(dt[i](t,s(e)?e:(r=e)&&{},this),r)})},registerEase:function registerEase(t,e){zt[t]=Ft(e)},parseEase:function parseEase(t,e){return arguments.length?Ft(t,e):zt},getById:function getById(t){return R.getById(t)},exportRoot:function exportRoot(e,r){void 0===e&&(e={});var i,n,a=new qt(e);for(a.smoothChildTiming=t(e.smoothChildTiming),R.remove(a),a._dp=0,a._time=a._tTime=R._time,i=R._first;i;)n=i._next,!r&&!i._dur&&i instanceof Qt&&i.vars.onComplete===i._targets[0]||Ba(a,i,i._start-i._delay),i=n;return Ba(R,a,0),a},utils:{wrap:function wrap(e,t,r){var i=t-e;return H(e)?cb(e,wrap(0,e.length),t):Na(r,function(t){return(i+(t-e)%i)%i+e})},wrapYoyo:function wrapYoyo(e,t,r){var i=t-e,n=2*i;return H(e)?cb(e,wrapYoyo(0,e.length-1),t):Na(r,function(t){return e+(i<(t=(n+(t-e)%n)%n||0)?n-t:t)})},distribute:Xa,random:$a,snap:Za,normalize:function normalize(t,e,r){return Ot(t,e,0,1,r)},getUnit:Pa,clamp:function clamp(e,r,t){return Na(t,function(t){return Tt(e,r,t)})},splitColor:qb,toArray:xt,selector:function selector(r){return r=xt(r)[0]||O("Invalid scope")||{},function(t){var e=r.current||r.nativeElement||r;return xt(t,e.querySelectorAll?e:e===r?O("Invalid scope")||a.createElement("div"):r)}},mapRange:Ot,pipe:function pipe(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return function(t){return e.reduce(function(t,e){return e(t)},t)}},unitize:function unitize(e,r){return function(t){return e(parseFloat(t))+(r||Pa(t))}},interpolate:function interpolate(e,r,t,i){var n=isNaN(e+r)?0:function(t){return(1-t)*e+t*r};if(!n){var a,s,u,h,l,f=o(e),d={};if(!0===t&&(i=1)&&(t=null),f)e={p:e},r={p:r};else if(H(e)&&!H(r)){for(u=[],h=e.length,l=h-2,s=1;s<h;s++)u.push(interpolate(e[s-1],e[s]));h--,n=function func(t){t*=h;var e=Math.min(l,~~t);return u[e](t-e)},t=r}else i||(e=mt(H(e)?[]:{},e));if(!u){for(a in r)Xt.call(d,e,a,"get",r[a]);n=function func(t){return ee(t,d)||(f?e.p:e)}}}return Na(t,n)},shuffle:Wa},install:M,effects:dt,ticker:St,updateRoot:qt.updateRoot,plugins:ft,globalTimeline:R,core:{PropTween:ae,globals:P,Tween:Qt,Timeline:qt,Animation:Nt,getCache:_,_removeLinkedListItem:qa,suppressOverwrites:function suppressOverwrites(t){return F=t}}};ba("to,from,fromTo,delayedCall,set,killTweensOf",function(t){return se[t]=Qt[t]}),St.add(qt.updateRoot),d=se.to({},{duration:0});function nc(t,e){for(var r=t._pt;r&&r.p!==e&&r.op!==e&&r.fp!==e;)r=r._next;return r}function pc(t,n){return{name:t,rawVars:1,init:function init(t,i,e){e._onInit=function(t){var e,r;if(o(i)&&(e={},ba(i,function(t){return e[t]=1}),i=e),n){for(r in e={},i)e[r]=n(i[r]);i=e}!function _addModifiers(t,e){var r,i,n,a=t._targets;for(r in e)for(i=a.length;i--;)(n=(n=t._ptLookup[i][r])&&n.d)&&(n._pt&&(n=nc(n,r)),n&&n.modifier&&n.modifier(e[r],t,a[i],r))}(t,i)}}}}var oe=se.registerPlugin({name:"attr",init:function init(t,e,r,i,n){var a,s;for(a in e)(s=this.add(t,"setAttribute",(t.getAttribute(a)||0)+"",e[a],i,n,0,0,a))&&(s.op=a),this._props.push(a)}},{name:"endArray",init:function init(t,e){for(var r=e.length;r--;)this.add(t,r,t[r]||0,e[r])}},pc("roundProps",Ya),pc("modifiers"),pc("snap",Za))||se;Qt.version=qt.version=oe.version="3.7.1",l=1,u()&&Dt();function $c(t,e){return e.set(e.t,e.p,Math.round(1e4*(e.s+e.c*t))/1e4+e.u,e)}function _c(t,e){return e.set(e.t,e.p,1===t?e.e:Math.round(1e4*(e.s+e.c*t))/1e4+e.u,e)}function ad(t,e){return e.set(e.t,e.p,t?Math.round(1e4*(e.s+e.c*t))/1e4+e.u:e.b,e)}function bd(t,e){var r=e.s+e.c*t;e.set(e.t,e.p,~~(r+(r<0?-.5:.5))+e.u,e)}function cd(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)}function dd(t,e){return e.set(e.t,e.p,1!==t?e.b:e.e,e)}function ed(t,e,r){return t.style[e]=r}function fd(t,e,r){return t.style.setProperty(e,r)}function gd(t,e,r){return t._gsap[e]=r}function hd(t,e,r){return t._gsap.scaleX=t._gsap.scaleY=r}function id(t,e,r,i,n){var a=t._gsap;a.scaleX=a.scaleY=r,a.renderTransform(n,a)}function jd(t,e,r,i,n){var a=t._gsap;a[e]=r,a.renderTransform(n,a)}function nd(t,e){var r=he.createElementNS?he.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):he.createElement(t);return r.style?r:he.createElement(t)}function od(t,e,r){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Re,"-$1").toLowerCase())||i.getPropertyValue(e)||!r&&od(t,Ve(e)||e,1)||""}function rd(){(function _windowExists(){return"undefined"!=typeof window})()&&window.document&&(ue=window,he=ue.document,le=he.documentElement,de=nd("div")||{style:{}},nd("div"),Ye=Ve(Ye),Xe=Ye+"Origin",de.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",pe=!!Ve("perspective"),fe=1)}function sd(t){var e,r=nd("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=this.parentNode,n=this.nextSibling,a=this.style.cssText;if(le.appendChild(r),r.appendChild(this),this.style.display="block",t)try{e=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=sd}catch(t){}else this._gsapBBox&&(e=this._gsapBBox());return i&&(n?i.insertBefore(this,n):i.appendChild(this)),le.removeChild(r),this.style.cssText=a,e}function td(t,e){for(var r=e.length;r--;)if(t.hasAttribute(e[r]))return t.getAttribute(e[r])}function ud(e){var r;try{r=e.getBBox()}catch(t){r=sd.call(e,!0)}return r&&(r.width||r.height)||e.getBBox===sd||(r=sd.call(e,!0)),!r||r.width||r.x||r.y?r:{x:+td(e,["x","cx","x1"])||0,y:+td(e,["y","cy","y1"])||0,width:0,height:0}}function vd(t){return!(!t.getCTM||t.parentNode&&!t.ownerSVGElement||!ud(t))}function wd(t,e){if(e){var r=t.style;e in Ie&&e!==Xe&&(e=Ye),r.removeProperty?("ms"!==e.substr(0,2)&&"webkit"!==e.substr(0,6)||(e="-"+e),r.removeProperty(e.replace(Re,"-$1").toLowerCase())):r.removeAttribute(e)}}function xd(t,e,r,i,n,a){var s=new ae(t._pt,e,r,0,1,a?dd:cd);return(t._pt=s).b=i,s.e=n,t._props.push(r),s}function zd(t,e,r,i){var n,a,s,o,u=parseFloat(r)||0,h=(r+"").trim().substr((u+"").length)||"px",l=de.style,f=Le.test(e),d="svg"===t.tagName.toLowerCase(),c=(d?"client":"offset")+(f?"Width":"Height"),p="px"===i,m="%"===i;return i===h||!u||je[i]||je[h]?u:("px"===h||p||(u=zd(t,e,r,"px")),o=t.getCTM&&vd(t),!m&&"%"!==h||!Ie[e]&&!~e.indexOf("adius")?(l[f?"width":"height"]=100+(p?h:i),a=~e.indexOf("adius")||"em"===i&&t.appendChild&&!d?t:t.parentNode,o&&(a=(t.ownerSVGElement||{}).parentNode),a&&a!==he&&a.appendChild||(a=he.body),(s=a._gsap)&&m&&s.width&&f&&s.time===St.time?ca(u/s.width*100):(!m&&"%"!==h||(l.position=od(t,"position")),a===t&&(l.position="static"),a.appendChild(de),n=de[c],a.removeChild(de),l.position="absolute",f&&m&&((s=_(a)).time=St.time,s.width=a[c]),ca(p?n*u/100:n&&u?100/n*u:0))):(n=o?t.getBBox()[f?"width":"height"]:t[c],ca(m?u/n*100:u/100*n)))}function Ad(t,e,r,i){var n;return fe||rd(),e in qe&&"transform"!==e&&~(e=qe[e]).indexOf(",")&&(e=e.split(",")[0]),Ie[e]&&"transform"!==e?(n=$e(t,i),n="transformOrigin"!==e?n[e]:n.svg?n.origin:Je(od(t,Xe))+" "+n.zOrigin+"px"):(n=t.style[e])&&"auto"!==n&&!i&&!~(n+"").indexOf("calc(")||(n=Qe[e]&&Qe[e](t,e,r)||od(t,e)||aa(t,e)||("opacity"===e?1:0)),r&&!~(n+"").trim().indexOf(" ")?zd(t,e,n,r)+r:n}function Bd(t,e,r,i){if(!r||"none"===r){var n=Ve(e,t,1),a=n&&od(t,n,1);a&&a!==r?(e=n,r=a):"borderColor"===e&&(r=od(t,"borderTopColor"))}var s,o,u,h,l,f,d,c,p,_,m,g,v=new ae(this._pt,t.style,e,0,1,te),y=0,b=0;if(v.b=r,v.e=i,r+="","auto"===(i+="")&&(t.style[e]=i,i=od(t,e)||i,t.style[e]=r),vb(s=[r,i]),i=s[1],u=(r=s[0]).match(rt)||[],(i.match(rt)||[]).length){for(;o=rt.exec(i);)d=o[0],p=i.substring(y,o.index),l?l=(l+1)%5:"rgba("!==p.substr(-5)&&"hsla("!==p.substr(-5)||(l=1),d!==(f=u[b++]||"")&&(h=parseFloat(f)||0,m=f.substr((h+"").length),(g="="===d.charAt(1)?+(d.charAt(0)+"1"):0)&&(d=d.substr(2)),c=parseFloat(d),_=d.substr((c+"").length),y=rt.lastIndex-_.length,_||(_=_||Y.units[e]||m,y===i.length&&(i+=_,v.e+=_)),m!==_&&(h=zd(t,e,f,_)||0),v._pt={_next:v._pt,p:p||1===b?p:",",s:h,c:g?g*c:c-h,m:l&&l<4||"zIndex"===e?Math.round:0});v.c=y<i.length?i.substring(y,i.length):""}else v.r="display"===e&&"none"===i?dd:cd;return nt.test(i)&&(v.e=0),this._pt=v}function Dd(t){var e=t.split(" "),r=e[0],i=e[1]||"50%";return"top"!==r&&"bottom"!==r&&"left"!==i&&"right"!==i||(t=r,r=i,i=t),e[0]=We[r]||r,e[1]=We[i]||i,e.join(" ")}function Ed(t,e){if(e.tween&&e.tween._time===e.tween._dur){var r,i,n,a=e.t,s=a.style,o=e.u,u=a._gsap;if("all"===o||!0===o)s.cssText="",i=1;else for(n=(o=o.split(",")).length;-1<--n;)r=o[n],Ie[r]&&(i=1,r="transformOrigin"===r?Xe:Ye),wd(a,r);i&&(wd(a,Ye),u&&(u.svg&&a.removeAttribute("transform"),$e(a,1),u.uncache=1))}}function Id(t){return"matrix(1, 0, 0, 1, 0, 0)"===t||"none"===t||!t}function Jd(t){var e=od(t,Ye);return Id(e)?Ge:e.substr(7).match(et).map(ca)}function Kd(t,e){var r,i,n,a,s=t._gsap||_(t),o=t.style,u=Jd(t);return s.svg&&t.getAttribute("transform")?"1,0,0,1,0,0"===(u=[(n=t.transform.baseVal.consolidate().matrix).a,n.b,n.c,n.d,n.e,n.f]).join(",")?Ge:u:(u!==Ge||t.offsetParent||t===le||s.svg||(n=o.display,o.display="block",(r=t.parentNode)&&t.offsetParent||(a=1,i=t.nextSibling,le.appendChild(t)),u=Jd(t),n?o.display=n:wd(t,"display"),a&&(i?r.insertBefore(t,i):r?r.appendChild(t):le.removeChild(t))),e&&6<u.length?[u[0],u[1],u[4],u[5],u[12],u[13]]:u)}function Ld(t,e,r,i,n,a){var s,o,u,h=t._gsap,l=n||Kd(t,!0),f=h.xOrigin||0,d=h.yOrigin||0,c=h.xOffset||0,p=h.yOffset||0,_=l[0],m=l[1],g=l[2],v=l[3],y=l[4],b=l[5],T=e.split(" "),w=parseFloat(T[0])||0,x=parseFloat(T[1])||0;r?l!==Ge&&(o=_*v-m*g)&&(u=w*(-m/o)+x*(_/o)-(_*b-m*y)/o,w=w*(v/o)+x*(-g/o)+(g*b-v*y)/o,x=u):(w=(s=ud(t)).x+(~T[0].indexOf("%")?w/100*s.width:w),x=s.y+(~(T[1]||T[0]).indexOf("%")?x/100*s.height:x)),i||!1!==i&&h.smooth?(y=w-f,b=x-d,h.xOffset=c+(y*_+b*g)-y,h.yOffset=p+(y*m+b*v)-b):h.xOffset=h.yOffset=0,h.xOrigin=w,h.yOrigin=x,h.smooth=!!i,h.origin=e,h.originIsAbsolute=!!r,t.style[Xe]="0px 0px",a&&(xd(a,h,"xOrigin",f,w),xd(a,h,"yOrigin",d,x),xd(a,h,"xOffset",c,h.xOffset),xd(a,h,"yOffset",p,h.yOffset)),t.setAttribute("data-svg-origin",w+" "+x)}function Od(t,e,r){var i=Pa(e);return ca(parseFloat(e)+parseFloat(zd(t,"x",r+"px",i)))+i}function Vd(t,e,r,i,n,a){var s,u,h=360,l=o(n),f=parseFloat(n)*(l&&~n.indexOf("rad")?Ee:1),d=a?f*a:f-i,c=i+d+"deg";return l&&("short"===(s=n.split("_")[1])&&(d%=h)!==d%180&&(d+=d<0?h:-h),"cw"===s&&d<0?d=(d+36e9)%h-~~(d/h)*h:"ccw"===s&&0<d&&(d=(d-36e9)%h-~~(d/h)*h)),t._pt=u=new ae(t._pt,e,r,i,d,_c),u.e=c,u.u="deg",t._props.push(r),u}function Wd(t,e){for(var r in e)t[r]=e[r];return t}function Xd(t,e,r){var i,n,a,s,o,u,h,l=Wd({},r._gsap),f=r.style;for(n in l.svg?(a=r.getAttribute("transform"),r.setAttribute("transform",""),f[Ye]=e,i=$e(r,1),wd(r,Ye),r.setAttribute("transform",a)):(a=getComputedStyle(r)[Ye],f[Ye]=e,i=$e(r,1),f[Ye]=a),Ie)(a=l[n])!==(s=i[n])&&"perspective,force3D,transformOrigin,svgOrigin".indexOf(n)<0&&(o=Pa(a)!==(h=Pa(s))?zd(r,n,a,h):parseFloat(a),u=parseFloat(s),t._pt=new ae(t._pt,i,n,o,u-o,$c),t._pt.u=h||0,t._props.push(n));Wd(i,l)}var ue,he,le,fe,de,ce,pe,_e=zt.Power0,me=zt.Power1,ge=zt.Power2,ve=zt.Power3,ye=zt.Power4,be=zt.Linear,Te=zt.Quad,we=zt.Cubic,xe=zt.Quart,Oe=zt.Quint,Pe=zt.Strong,ke=zt.Elastic,Me=zt.Back,Ae=zt.SteppedEase,Ce=zt.Bounce,Se=zt.Sine,De=zt.Expo,ze=zt.Circ,Ie={},Ee=180/Math.PI,Be=Math.PI/180,Fe=Math.atan2,Re=/([A-Z])/g,Le=/(?:left|right|width|margin|padding|x)/i,Ne=/[\s,\(]\S/,qe={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Ye="transform",Xe=Ye+"Origin",Ue="O,Moz,ms,Ms,Webkit".split(","),Ve=function _checkPropPrefix(t,e,r){var i=(e||de).style,n=5;if(t in i&&!r)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);n--&&!(Ue[n]+t in i););return n<0?null:(3===n?"ms":0<=n?Ue[n]:"")+t},je={deg:1,rad:1,turn:1},We={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Qe={clearProps:function clearProps(t,e,r,i,n){if("isFromStart"!==n.data){var a=t._pt=new ae(t._pt,e,r,0,0,Ed);return a.u=i,a.pr=-10,a.tween=n,t._props.push(r),1}}},Ge=[1,0,0,1,0,0],Ke={},$e=function _parseTransform(t,e){var r=t._gsap||new Lt(t);if("x"in r&&!e&&!r.uncache)return r;var i,n,a,s,o,u,h,l,f,d,c,p,_,m,g,v,y,b,T,w,x,O,P,k,M,A,C,S,D,z,I,E,B=t.style,F=r.scaleX<0,R="deg",L=od(t,Xe)||"0";return i=n=a=u=h=l=f=d=c=0,s=o=1,r.svg=!(!t.getCTM||!vd(t)),m=Kd(t,r.svg),r.svg&&(k=(!r.uncache||"0px 0px"===L)&&!e&&t.getAttribute("data-svg-origin"),Ld(t,k||L,!!k||r.originIsAbsolute,!1!==r.smooth,m)),p=r.xOrigin||0,_=r.yOrigin||0,m!==Ge&&(b=m[0],T=m[1],w=m[2],x=m[3],i=O=m[4],n=P=m[5],6===m.length?(s=Math.sqrt(b*b+T*T),o=Math.sqrt(x*x+w*w),u=b||T?Fe(T,b)*Ee:0,(f=w||x?Fe(w,x)*Ee+u:0)&&(o*=Math.abs(Math.cos(f*Be))),r.svg&&(i-=p-(p*b+_*w),n-=_-(p*T+_*x))):(E=m[6],z=m[7],C=m[8],S=m[9],D=m[10],I=m[11],i=m[12],n=m[13],a=m[14],h=(g=Fe(E,D))*Ee,g&&(k=O*(v=Math.cos(-g))+C*(y=Math.sin(-g)),M=P*v+S*y,A=E*v+D*y,C=O*-y+C*v,S=P*-y+S*v,D=E*-y+D*v,I=z*-y+I*v,O=k,P=M,E=A),l=(g=Fe(-w,D))*Ee,g&&(v=Math.cos(-g),I=x*(y=Math.sin(-g))+I*v,b=k=b*v-C*y,T=M=T*v-S*y,w=A=w*v-D*y),u=(g=Fe(T,b))*Ee,g&&(k=b*(v=Math.cos(g))+T*(y=Math.sin(g)),M=O*v+P*y,T=T*v-b*y,P=P*v-O*y,b=k,O=M),h&&359.9<Math.abs(h)+Math.abs(u)&&(h=u=0,l=180-l),s=ca(Math.sqrt(b*b+T*T+w*w)),o=ca(Math.sqrt(P*P+E*E)),g=Fe(O,P),f=2e-4<Math.abs(g)?g*Ee:0,c=I?1/(I<0?-I:I):0),r.svg&&(k=t.getAttribute("transform"),r.forceCSS=t.setAttribute("transform","")||!Id(od(t,Ye)),k&&t.setAttribute("transform",k))),90<Math.abs(f)&&Math.abs(f)<270&&(F?(s*=-1,f+=u<=0?180:-180,u+=u<=0?180:-180):(o*=-1,f+=f<=0?180:-180)),r.x=i-((r.xPercent=i&&(r.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-i)?-50:0)))?t.offsetWidth*r.xPercent/100:0)+"px",r.y=n-((r.yPercent=n&&(r.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-n)?-50:0)))?t.offsetHeight*r.yPercent/100:0)+"px",r.z=a+"px",r.scaleX=ca(s),r.scaleY=ca(o),r.rotation=ca(u)+R,r.rotationX=ca(h)+R,r.rotationY=ca(l)+R,r.skewX=f+R,r.skewY=d+R,r.transformPerspective=c+"px",(r.zOrigin=parseFloat(L.split(" ")[2])||0)&&(B[Xe]=Je(L)),r.xOffset=r.yOffset=0,r.force3D=Y.force3D,r.renderTransform=r.svg?ir:pe?rr:Ze,r.uncache=0,r},Je=function _firstTwoOnly(t){return(t=t.split(" "))[0]+" "+t[1]},Ze=function _renderNon3DTransforms(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,rr(t,e)},He="0deg",tr="0px",er=") ",rr=function _renderCSSTransforms(t,e){var r=e||this,i=r.xPercent,n=r.yPercent,a=r.x,s=r.y,o=r.z,u=r.rotation,h=r.rotationY,l=r.rotationX,f=r.skewX,d=r.skewY,c=r.scaleX,p=r.scaleY,_=r.transformPerspective,m=r.force3D,g=r.target,v=r.zOrigin,y="",b="auto"===m&&t&&1!==t||!0===m;if(v&&(l!==He||h!==He)){var T,w=parseFloat(h)*Be,x=Math.sin(w),O=Math.cos(w);w=parseFloat(l)*Be,T=Math.cos(w),a=Od(g,a,x*T*-v),s=Od(g,s,-Math.sin(w)*-v),o=Od(g,o,O*T*-v+v)}_!==tr&&(y+="perspective("+_+er),(i||n)&&(y+="translate("+i+"%, "+n+"%) "),!b&&a===tr&&s===tr&&o===tr||(y+=o!==tr||b?"translate3d("+a+", "+s+", "+o+") ":"translate("+a+", "+s+er),u!==He&&(y+="rotate("+u+er),h!==He&&(y+="rotateY("+h+er),l!==He&&(y+="rotateX("+l+er),f===He&&d===He||(y+="skew("+f+", "+d+er),1===c&&1===p||(y+="scale("+c+", "+p+er),g.style[Ye]=y||"translate(0, 0)"},ir=function _renderSVGTransforms(t,e){var r,i,n,a,s,o=e||this,u=o.xPercent,h=o.yPercent,l=o.x,f=o.y,d=o.rotation,c=o.skewX,p=o.skewY,_=o.scaleX,m=o.scaleY,g=o.target,v=o.xOrigin,y=o.yOrigin,b=o.xOffset,T=o.yOffset,w=o.forceCSS,x=parseFloat(l),O=parseFloat(f);d=parseFloat(d),c=parseFloat(c),(p=parseFloat(p))&&(c+=p=parseFloat(p),d+=p),d||c?(d*=Be,c*=Be,r=Math.cos(d)*_,i=Math.sin(d)*_,n=Math.sin(d-c)*-m,a=Math.cos(d-c)*m,c&&(p*=Be,s=Math.tan(c-p),n*=s=Math.sqrt(1+s*s),a*=s,p&&(s=Math.tan(p),r*=s=Math.sqrt(1+s*s),i*=s)),r=ca(r),i=ca(i),n=ca(n),a=ca(a)):(r=_,a=m,i=n=0),(x&&!~(l+"").indexOf("px")||O&&!~(f+"").indexOf("px"))&&(x=zd(g,"x",l,"px"),O=zd(g,"y",f,"px")),(v||y||b||T)&&(x=ca(x+v-(v*r+y*n)+b),O=ca(O+y-(v*i+y*a)+T)),(u||h)&&(s=g.getBBox(),x=ca(x+u/100*s.width),O=ca(O+h/100*s.height)),s="matrix("+r+","+i+","+n+","+a+","+x+","+O+")",g.setAttribute("transform",s),w&&(g.style[Ye]=s)};ba("padding,margin,Width,Radius",function(e,r){var t="Right",i="Bottom",n="Left",o=(r<3?["Top",t,i,n]:["Top"+n,"Top"+t,i+t,i+n]).map(function(t){return r<2?e+t:"border"+t+e});Qe[1<r?"border"+e:e]=function(e,t,r,i,n){var a,s;if(arguments.length<4)return a=o.map(function(t){return Ad(e,t,r)}),5===(s=a.join(" ")).split(a[0]).length?a[0]:s;a=(i+"").split(" "),s={},o.forEach(function(t,e){return s[t]=a[e]=a[e]||a[(e-1)/2|0]}),e.init(t,s,n)}});var nr,ar,sr,or={name:"css",register:rd,targetTest:function targetTest(t){return t.style&&t.nodeType},init:function init(t,e,r,i,n){var a,s,o,u,h,l,f,d,c,p,_,m,g,v,y,b=this._props,T=t.style,w=r.vars.startAt;for(f in fe||rd(),e)if("autoRound"!==f&&(s=e[f],!ft[f]||!Sb(f,e,r,i,t,n)))if(h=typeof s,l=Qe[f],"function"===h&&(h=typeof(s=s.call(r,i,t,n))),"string"===h&&~s.indexOf("random(")&&(s=fb(s)),l)l(this,t,f,s,r)&&(y=1);else if("--"===f.substr(0,2))a=(getComputedStyle(t).getPropertyValue(f)+"").trim(),s+="",At.lastIndex=0,At.test(a)||(d=Pa(a),c=Pa(s)),c?d!==c&&(a=zd(t,f,a,c)+c):d&&(s+=d),this.add(T,"setProperty",a,s,i,n,0,0,f),b.push(f);else if("undefined"!==h){if(w&&f in w?(a="function"==typeof w[f]?w[f].call(r,i,t,n):w[f],f in Y.units&&!Pa(a)&&(a+=Y.units[f]),"="===(a+"").charAt(1)&&(a=Ad(t,f))):a=Ad(t,f),u=parseFloat(a),(p="string"===h&&"="===s.charAt(1)?+(s.charAt(0)+"1"):0)&&(s=s.substr(2)),o=parseFloat(s),f in qe&&("autoAlpha"===f&&(1===u&&"hidden"===Ad(t,"visibility")&&o&&(u=0),xd(this,T,"visibility",u?"inherit":"hidden",o?"inherit":"hidden",!o)),"scale"!==f&&"transform"!==f&&~(f=qe[f]).indexOf(",")&&(f=f.split(",")[0])),_=f in Ie)if(m||((g=t._gsap).renderTransform&&!e.parseTransform||$e(t,e.parseTransform),v=!1!==e.smoothOrigin&&g.smooth,(m=this._pt=new ae(this._pt,T,Ye,0,1,g.renderTransform,g,0,-1)).dep=1),"scale"===f)this._pt=new ae(this._pt,g,"scaleY",g.scaleY,(p?p*o:o-g.scaleY)||0),b.push("scaleY",f),f+="X";else{if("transformOrigin"===f){s=Dd(s),g.svg?Ld(t,s,0,v,0,this):((c=parseFloat(s.split(" ")[2])||0)!==g.zOrigin&&xd(this,g,"zOrigin",g.zOrigin,c),xd(this,T,f,Je(a),Je(s)));continue}if("svgOrigin"===f){Ld(t,s,1,v,0,this);continue}if(f in Ke){Vd(this,g,f,u,s,p);continue}if("smoothOrigin"===f){xd(this,g,"smooth",g.smooth,s);continue}if("force3D"===f){g[f]=s;continue}if("transform"===f){Xd(this,s,t);continue}}else f in T||(f=Ve(f)||f);if(_||(o||0===o)&&(u||0===u)&&!Ne.test(s)&&f in T)o=o||0,(d=(a+"").substr((u+"").length))!==(c=Pa(s)||(f in Y.units?Y.units[f]:d))&&(u=zd(t,f,a,c)),this._pt=new ae(this._pt,_?g:T,f,u,p?p*o:o-u,_||"px"!==c&&"zIndex"!==f||!1===e.autoRound?$c:bd),this._pt.u=c||0,d!==c&&(this._pt.b=a,this._pt.r=ad);else if(f in T)Bd.call(this,t,f,a,s);else{if(!(f in t)){N(f,s);continue}this.add(t,f,a||t[f],s,i,n)}b.push(f)}y&&ne(this)},get:Ad,aliases:qe,getSetter:function getSetter(t,e,i){var n=qe[e];return n&&n.indexOf(",")<0&&(e=n),e in Ie&&e!==Xe&&(t._gsap.x||Ad(t,"x"))?i&&ce===i?"scale"===e?hd:gd:(ce=i||{})&&("scale"===e?id:jd):t.style&&!r(t.style[e])?ed:~e.indexOf("-")?fd:Jt(t,e)},core:{_removeProperty:wd,_getMatrix:Kd}};oe.utils.checkPrefix=Ve,sr=ba((nr="x,y,z,scale,scaleX,scaleY,xPercent,yPercent")+","+(ar="rotation,rotationX,rotationY,skewX,skewY")+",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",function(t){Ie[t]=1}),ba(ar,function(t){Y.units[t]="deg",Ke[t]=1}),qe[sr[13]]=nr+","+ar,ba("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",function(t){var e=t.split(":");qe[e[1]]=sr[e[0]]}),ba("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(t){Y.units[t]="px"}),oe.registerPlugin(or);var ur=oe.registerPlugin(or)||oe,hr=ur.core.Tween;e.Back=Me,e.Bounce=Ce,e.CSSPlugin=or,e.Circ=ze,e.Cubic=we,e.Elastic=ke,e.Expo=De,e.Linear=be,e.Power0=_e,e.Power1=me,e.Power2=ge,e.Power3=ve,e.Power4=ye,e.Quad=Te,e.Quart=xe,e.Quint=Oe,e.Sine=Se,e.SteppedEase=Ae,e.Strong=Pe,e.TimelineLite=qt,e.TimelineMax=qt,e.TweenLite=Qt,e.TweenMax=hr,e.default=ur,e.gsap=ur;if (typeof(window)==="undefined"||window!==e){Object.defineProperty(e,"__esModule",{value:!0})} else {delete e.default}});



/*!
 * ScrollTrigger 3.7.1
 * https://greensock.com
 * 
 * @license Copyright 2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).window=e.window||{})}(this,function(e){"use strict";function J(e){return e}function K(e){return Math.round(1e5*e)/1e5||0}function L(){return"undefined"!=typeof window}function M(){return Se||L()&&(Se=window.gsap)&&Se.registerPlugin&&Se}function N(e){return!!~o.indexOf(e)}function O(e,t){return~Fe.indexOf(e)&&Fe[Fe.indexOf(e)+1][t]}function P(t,e){var r=e.s,n=e.sc,o=v.indexOf(t),i=n===ot.sc?1:2;return~o||(o=v.push(t)-1),v[o+i]||(v[o+i]=O(t,r)||(N(t)?n:function(e){return arguments.length?t[r]=e:t[r]}))}function Q(e){return O(e,"getBoundingClientRect")||(N(e)?function(){return pt.width=Me.innerWidth,pt.height=Me.innerHeight,pt}:function(){return it(e)})}function T(e,t){var r=t.s,n=t.d2,o=t.d,i=t.a;return(r="scroll"+n)&&(i=O(e,r))?i()-Q(e)()[o]:N(e)?Math.max(_e[r],Pe[r])-(Me["inner"+n]||_e["client"+n]||Pe["client"+n]):e[r]-e["offset"+n]}function U(e,t){for(var r=0;r<d.length;r+=3)t&&!~t.indexOf(d[r+1])||e(d[r],d[r+1],d[r+2])}function V(e){return"string"==typeof e}function W(e){return"function"==typeof e}function X(e){return"number"==typeof e}function Y(e){return"object"==typeof e}function Z(e){return W(e)&&e()}function $(r,n){return function(){var e=Z(r),t=Z(n);return function(){Z(e),Z(t)}}}function ta(e){return Me.getComputedStyle(e)}function va(e,t){for(var r in t)r in e||(e[r]=t[r]);return e}function xa(e,t){var r=t.d2;return e["offset"+r]||e["client"+r]||0}function ya(e){var t,r=[],n=e.labels,o=e.duration();for(t in n)r.push(n[t]/o);return r}function Ba(t,r,e,n){return e.split(",").forEach(function(e){return t(r,e,n)})}function Ca(e,t,r){return e.addEventListener(t,r,{passive:!0})}function Da(e,t,r){return e.removeEventListener(t,r)}function Ha(e,t){if(V(e)){var r=e.indexOf("="),n=~r?(e.charAt(r-1)+1)*parseFloat(e.substr(r+1)):0;~r&&(e.indexOf("%")>r&&(n*=t/100),e=e.substr(0,r-1)),e=n+(e in C?C[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e}function Ia(e,t,r,n,o,i,a){var s=o.startColor,l=o.endColor,c=o.fontSize,u=o.indent,f=o.fontWeight,p=ke.createElement("div"),d=N(r)||"fixed"===O(r,"pinType"),g=-1!==e.indexOf("scroller"),h=d?Pe:r,v=-1!==e.indexOf("start"),m=v?s:l,b="border-color:"+m+";font-size:"+c+";color:"+m+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return b+="position:"+(g&&d?"fixed;":"absolute;"),!g&&d||(b+=(n===ot?x:y)+":"+(i+parseFloat(u))+"px;"),a&&(b+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),p._isStart=v,p.setAttribute("class","gsap-marker-"+e),p.style.cssText=b,p.innerText=t||0===t?e+"-"+t:e,h.children[0]?h.insertBefore(p,h.children[0]):h.appendChild(p),p._offset=p["offset"+n.op.d2],S(p,0,n,v),p}function Ma(){return l=l||s(F)}function Na(){l||(l=s(F),je||A("scrollStart"),je=He())}function Oa(){return!Be&&!r&&!ke.fullscreenElement&&a.restart(!0)}function Ua(e){var t,r=Se.ticker.frame,n=[],o=0;if(g!==r||De){for(R();o<E.length;o+=4)(t=Me.matchMedia(E[o]).matches)!==E[o+3]&&((E[o+3]=t)?n.push(o):R(1,E[o])||W(E[o+2])&&E[o+2]());for(I(),o=0;o<n.length;o++)t=n[o],Ve=E[t],E[t+2]=E[t+1](e);Ve=0,i&&z(0,1),g=r,A("matchMedia")}}function Va(){return Da(ee,"scrollEnd",Va)||z(!0)}function gb(e,t,r,n){if(e.parentNode!==t){for(var o,i=H.length,a=t.style,s=e.style;i--;)a[o=H[i]]=r[o];a.position="absolute"===r.position?"absolute":"relative","inline"===r.display&&(a.display="inline-block"),s[y]=s[x]="auto",a.overflow="visible",a.boxSizing="border-box",a[Xe]=xa(e,nt)+rt,a[Ze]=xa(e,ot)+rt,a[Ge]=s[et]=s.top=s[b]="0",ft(n),s[Xe]=s.maxWidth=r[Xe],s[Ze]=s.maxHeight=r[Ze],s[Ge]=r[Ge],e.parentNode.insertBefore(t,e),t.appendChild(e)}}function jb(e){for(var t=j.length,r=e.style,n=[],o=0;o<t;o++)n.push(j[o],r[j[o]]);return n.t=e,n}function mb(e,t,r,n,o,i,a,s,l,c,u,f){if(W(e)&&(e=e(s)),V(e)&&"max"===e.substr(0,3)&&(e=f+("="===e.charAt(4)?Ha("0"+e.substr(3),r):0)),X(e))a&&S(a,r,n,!0);else{W(t)&&(t=t(s));var p,d,g,h=Ee(t)[0]||Pe,v=it(h)||{},m=e.split(" ");v&&(v.left||v.top)||"none"!==ta(h).display||(g=h.style.display,h.style.display="block",v=it(h),g?h.style.display=g:h.style.removeProperty("display")),p=Ha(m[0],v[n.d]),d=Ha(m[1]||"0",r),e=v[n.p]-l[n.p]-c+p+o-d,a&&S(a,d,n,r-d<20||a._isStart&&20<d),r-=r-d}if(i){var b=e+r,x=i._isStart;f="scroll"+n.d2,S(i,b,n,x&&20<b||!x&&(u?Math.max(Pe[f],_e[f]):i.parentNode[f])<=b+1),u&&(l=it(a),u&&(i.style[n.op.p]=l[n.op.p]-n.op.m-i._offset+rt))}return Math.round(e)}function ob(e,t,r,n){if(e.parentNode!==t){var o,i,a=e.style;if(t===Pe){for(o in e._stOrig=a.cssText,i=ta(e))+o||G.test(o)||!i[o]||"string"!=typeof a[o]||"0"===o||(a[o]=i[o]);a.top=r,a.left=n}else a.cssText=e._stOrig;Se.core.getCache(e).uncache=1,t.appendChild(e)}}function pb(l,e){function Ye(e,t,r,n,o){var i=Ye.tween,a=t.onComplete,s={};return i&&i.kill(),c=Math.round(r),t[p]=e,(t.modifiers=s)[p]=function(e){return(e=K(f()))!==c&&e!==u&&2<Math.abs(e-c)?(i.kill(),Ye.tween=0):e=r+n*i.ratio+o*i.ratio*i.ratio,u=c,c=K(e)},t.onComplete=function(){Ye.tween=0,a&&a.call(i)},i=Ye.tween=Se.to(l,t)}var c,u,f=P(l,e),p="_scroll"+e.p2;return l[p]=f,l.addEventListener("wheel",function(){return Ye.tween&&Ye.tween.kill()&&(Ye.tween=0)},{passive:!0}),Ye}var Se,i,Me,ke,_e,Pe,o,a,s,l,Ee,Ne,Ae,c,Be,Ie,u,Le,f,p,d,Re,ze,r,We,Ve,g,h,De=1,Fe=[],v=[],He=Date.now,m=He(),je=0,Ue=1,Je=Math.abs,t="scrollLeft",n="scrollTop",b="left",x="right",y="bottom",Xe="width",Ze="height",qe="Right",$e="Left",Ke="Top",Qe="Bottom",Ge="padding",et="margin",tt="Width",w="Height",rt="px",nt={s:t,p:b,p2:$e,os:x,os2:qe,d:Xe,d2:tt,a:"x",sc:function sc(e){return arguments.length?Me.scrollTo(e,ot.sc()):Me.pageXOffset||ke[t]||_e[t]||Pe[t]||0}},ot={s:n,p:"top",p2:Ke,os:y,os2:Qe,d:Ze,d2:w,a:"y",op:nt,sc:function sc(e){return arguments.length?Me.scrollTo(nt.sc(),e):Me.pageYOffset||ke[n]||_e[n]||Pe[n]||0}},it=function _getBounds(e,t){var r=t&&"matrix(1, 0, 0, 1, 0, 0)"!==ta(e)[u]&&Se.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),n=e.getBoundingClientRect();return r&&r.progress(0).kill(),n},at={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},st={toggleActions:"play",anticipatePin:0},C={top:0,left:0,center:.5,bottom:1,right:1},S=function _positionMarker(e,t,r,n){var o={display:"block"},i=r[n?"os2":"p2"],a=r[n?"p2":"os2"];e._isFlipped=n,o[r.a+"Percent"]=n?-100:0,o[r.a]=n?"1px":0,o["border"+i+tt]=1,o["border"+a+tt]=0,o[r.p]=t+"px",Se.set(e,o)},lt=[],ct={},k={},_=[],E=[],A=function _dispatch(e){return k[e]&&k[e].map(function(e){return e()})||_},B=[],I=function _revertRecorded(e){for(var t=0;t<B.length;t+=5)e&&B[t+4]!==e||(B[t].style.cssText=B[t+1],B[t].getBBox&&B[t].setAttribute("transform",B[t+2]||""),B[t+3].uncache=1)},R=function _revertAll(e,t){var r;for(Le=0;Le<lt.length;Le++)r=lt[Le],t&&r.media!==t||(e?r.kill(1):r.revert());t&&I(t),t||A("revert")},z=function _refreshAll(e,t){if(!je||e){h=!0;var r=A("refreshInit");Re&&ee.sort(),t||R(),lt.forEach(function(e){return e.refresh()}),r.forEach(function(e){return e&&e.render&&e.render(-1)}),v.forEach(function(e){return"function"==typeof e&&(e.rec=0)}),a.pause(),h=!1,A("refresh")}else Ca(ee,"scrollEnd",Va)},D=0,ut=1,F=function _updateAll(){if(!h){var e=lt.length,t=He(),r=50<=t-m,n=e&&lt[0].scroll();if(ut=n<D?-1:1,D=n,r&&(je&&!Ie&&200<t-je&&(je=0,A("scrollEnd")),Ae=m,m=t),ut<0){for(Le=e;0<Le--;)lt[Le]&&lt[Le].update(0,r);ut=1}else for(Le=0;Le<e;Le++)lt[Le]&&lt[Le].update(0,r);l=0}},H=[b,"top",y,x,et+Qe,et+qe,et+Ke,et+$e,"display","flexShrink","float","zIndex","grid-column-start","grid-column-end","grid-row-start","grid-row-end","grid-area","justify-self","align-self","place-self"],j=H.concat([Xe,Ze,"boxSizing","max"+tt,"max"+w,"position",et,Ge,Ge+Ke,Ge+qe,Ge+Qe,Ge+$e]),q=/([A-Z])/g,ft=function _setState(e){if(e){var t,r,n=e.t.style,o=e.length,i=0;for((e.t._gsap||Se.core.getCache(e.t)).uncache=1;i<o;i+=2)r=e[i+1],t=e[i],r?n[t]=r:n[t]&&n.removeProperty(t.replace(q,"-$1").toLowerCase())}},pt={left:0,top:0},G=/(?:webkit|moz|length|cssText|inset)/i;nt.op=ot;var ee=(ScrollTrigger.prototype.init=function init(S,M){if(this.progress=this.start=0,this.vars&&this.kill(1),Ue){var d,n,f,k,_,E,A,B,I,L,R,e,z,D,F,H,j,t,U,g,Z,q,h,$,v,m,r,b,x,K,o,p,y,G,ee,te,re=(S=va(V(S)||X(S)||S.nodeType?{trigger:S}:S,st)).horizontal?nt:ot,w=S.onUpdate,C=S.toggleClass,i=S.id,ne=S.onToggle,oe=S.onRefresh,a=S.scrub,ie=S.trigger,ae=S.pin,se=S.pinSpacing,le=S.invalidateOnRefresh,ce=S.anticipatePin,s=S.onScrubComplete,ue=S.onSnapComplete,fe=S.once,pe=S.snap,de=S.pinReparent,ge=!a&&0!==a,he=Ee(S.scroller||Me)[0],l=Se.core.getCache(he),ve=N(he),me="pinType"in S?"fixed"===S.pinType:ve||"fixed"===O(he,"pinType"),be=[S.onEnter,S.onLeave,S.onEnterBack,S.onLeaveBack],xe=ge&&S.toggleActions.split(" "),c="markers"in S?S.markers:st.markers,ye=ve?0:parseFloat(ta(he)["border"+re.p2+tt])||0,we=this,u=S.onRefreshInit&&function(){return S.onRefreshInit(we)},Ce=function _getSizeFunc(e,t,r){var n=r.d,o=r.d2,i=r.a;return(i=O(e,"getBoundingClientRect"))?function(){return i()[n]}:function(){return(t?Me["inner"+o]:e["client"+o])||0}}(he,ve,re),Te=function _getOffsetsFunc(e,t){return!t||~Fe.indexOf(e)?Q(e):function(){return pt}}(he,ve),Oe=0;we.media=Ve,ce*=45,we.scroller=he,we.scroll=P(he,re),k=we.scroll(),we.vars=S,M=M||S.animation,"refreshPriority"in S&&(Re=1),l.tweenScroll=l.tweenScroll||{top:pb(he,ot),left:pb(he,nt)},we.tweenTo=d=l.tweenScroll[re.p],M&&(M.vars.lazy=!1,M._initted||!1!==M.vars.immediateRender&&!1!==S.immediateRender&&M.render(0,!0,!0),we.animation=M.pause(),M.scrollTrigger=we,(o=X(a)&&a)&&(K=Se.to(M,{ease:"power3",duration:o,onComplete:function onComplete(){return s&&s(we)}})),b=0,i=i||M.vars.id),lt.push(we),pe&&(Y(pe)&&!pe.push||(pe={snapTo:pe}),"scrollBehavior"in Pe.style&&Se.set(ve?[Pe,_e]:he,{scrollBehavior:"auto"}),f=W(pe.snapTo)?pe.snapTo:"labels"===pe.snapTo?function _getClosestLabel(t){return function(e){return Se.utils.snap(ya(t),e)}}(M):"labelsDirectional"===pe.snapTo?function _getLabelAtDirection(o){return function(e,t){var r,n=ya(o);if(n.sort(function(e,t){return e-t}),0<t.direction){for(e-=1e-4,r=0;r<n.length;r++)if(n[r]>=e)return n[r];return n.pop()}for(r=n.length,e+=1e-4;r--;)if(n[r]<=e)return n[r];return n[0]}}(M):Se.utils.snap(pe.snapTo),p=pe.duration||{min:.1,max:2},p=Y(p)?Ne(p.min,p.max):Ne(p,p),y=Se.delayedCall(pe.delay||o/2||.1,function(){if(Math.abs(we.getVelocity())<10&&!Ie&&Oe!==we.scroll()){var e=M&&!ge?M.totalProgress():we.progress,t=(e-x)/(He()-Ae)*1e3||0,r=Se.utils.clamp(-we.progress,1-we.progress,Je(t/2)*t/.185),n=we.progress+(!1===pe.inertia?0:r),o=Ne(0,1,f(n,we)),i=we.scroll(),a=Math.round(E+o*z),s=pe.onStart,l=pe.onInterrupt,c=pe.onComplete,u=d.tween;if(i<=A&&E<=i&&a!==i){if(u&&!u._initted&&u.data<=Math.abs(a-i))return;!1===pe.inertia&&(r=o-we.progress),d(a,{duration:p(Je(.185*Math.max(Je(n-e),Je(o-e))/t/.05||0)),ease:pe.ease||"power3",data:Math.abs(a-i),onInterrupt:function onInterrupt(){return y.restart(!0)&&l&&l(we)},onComplete:function onComplete(){Oe=we.scroll(),b=x=M&&!ge?M.totalProgress():we.progress,ue&&ue(we),c&&c(we)}},i,r*z,a-i-r*z),s&&s(we,d.tween)}}else we.isActive&&y.restart(!0)}).pause()),i&&(ct[i]=we),ie=we.trigger=Ee(ie||ae)[0],ae=!0===ae?ie:Ee(ae)[0],V(C)&&(C={targets:ie,className:C}),ae&&(!1===se||se===et||(se=!(!se&&"flex"===ta(ae.parentNode).display)&&Ge),we.pin=ae,!1!==S.force3D&&Se.set(ae,{force3D:!0}),(n=Se.core.getCache(ae)).spacer?D=n.pinState:(n.spacer=j=ke.createElement("div"),j.setAttribute("class","pin-spacer"+(i?" pin-spacer-"+i:"")),n.pinState=D=jb(ae)),we.spacer=j=n.spacer,r=ta(ae),h=r[se+re.os2],U=Se.getProperty(ae),g=Se.quickSetter(ae,re.a,rt),gb(ae,j,r),H=jb(ae)),c&&(e=Y(c)?va(c,at):at,L=Ia("scroller-start",i,he,re,e,0),R=Ia("scroller-end",i,he,re,e,0,L),t=L["offset"+re.op.d2],B=Ia("start",i,he,re,e,t),I=Ia("end",i,he,re,e,t),me||Fe.length&&!0===O(he,"fixedMarkers")||(function _makePositionable(e){var t=ta(e).position;e.style.position="absolute"===t||"fixed"===t?t:"relative"}(ve?Pe:he),Se.set([L,R],{force3D:!0}),v=Se.quickSetter(L,re.a,rt),m=Se.quickSetter(R,re.a,rt))),we.revert=function(e){var t=!1!==e||!we.enabled,r=Be;t!==we.isReverted&&(t&&(we.scroll.rec||(we.scroll.rec=we.scroll()),ee=Math.max(we.scroll(),we.scroll.rec||0),G=we.progress,te=M&&M.progress()),B&&[B,I,L,R].forEach(function(e){return e.style.display=t?"none":"block"}),t&&(Be=1),we.update(t),Be=r,ae&&(t?function _swapPinOut(e,t,r){if(ft(r),e.parentNode===t){var n=t.parentNode;n&&(n.insertBefore(e,t),n.removeChild(t))}}(ae,j,D):de&&we.isActive||gb(ae,j,ta(ae),$)),we.isReverted=t)},we.refresh=function(e,t){if(!Be&&we.enabled||t)if(ae&&e&&je)Ca(ScrollTrigger,"scrollEnd",Va);else{Be=1,K&&K.pause(),le&&M&&M.progress(0).invalidate(),we.isReverted||we.revert();for(var r,n,o,i,a,s,l,c,u,f,p=Ce(),d=Te(),g=T(he,re),h=0,v=0,m=S.end,b=S.endTrigger||ie,x=S.start||(0!==S.start&&ie?ae?"0 0":"0 100%":0),y=S.pinnedContainer&&Ee(S.pinnedContainer)[0],w=ie&&Math.max(0,lt.indexOf(we))||0,C=w;C--;)(s=lt[C]).end||s.refresh(0,1)||(Be=1),!(l=s.pin)||l!==ie&&l!==ae||s.isReverted||((f=f||[]).unshift(s),s.revert());for(E=mb(x,ie,p,re,we.scroll(),B,L,we,d,ye,me,g)||(ae?-.001:0),W(m)&&(m=m(we)),V(m)&&!m.indexOf("+=")&&(~m.indexOf(" ")?m=(V(x)?x.split(" ")[0]:"")+m:(h=Ha(m.substr(2),p),m=V(x)?x:E+h,b=ie)),A=Math.max(E,mb(m||(b?"100% 0":g),b,p,re,we.scroll()+h,I,R,we,d,ye,me,g))||-.001,z=A-E||(E-=.01)&&.001,h=0,C=w;C--;)(l=(s=lt[C]).pin)&&s.start-s._pinPush<E&&(r=s.end-s.start,l!==ie&&l!==y||(h+=r),l===ae&&(v+=r));if(E+=h,A+=h,we._pinPush=v,B&&h&&((r={})[re.a]="+="+h,y&&(r[re.p]="-="+we.scroll()),Se.set([B,I],r)),ae)r=ta(ae),i=re===ot,o=we.scroll(),Z=parseFloat(U(re.a))+v,!g&&1<A&&((ve?Pe:he).style["overflow-"+re.a]="scroll"),gb(ae,j,r),H=jb(ae),n=it(ae,!0),c=me&&P(he,i?nt:ot)(),se&&(($=[se+re.os2,z+v+rt]).t=j,(C=se===Ge?xa(ae,re)+z+v:0)&&$.push(re.d,C+rt),ft($),me&&we.scroll(ee)),me&&((a={top:n.top+(i?o-E:c)+rt,left:n.left+(i?c:o-E)+rt,boxSizing:"border-box",position:"fixed"})[Xe]=a.maxWidth=Math.ceil(n.width)+rt,a[Ze]=a.maxHeight=Math.ceil(n.height)+rt,a[et]=a[et+Ke]=a[et+qe]=a[et+Qe]=a[et+$e]="0",a[Ge]=r[Ge],a[Ge+Ke]=r[Ge+Ke],a[Ge+qe]=r[Ge+qe],a[Ge+Qe]=r[Ge+Qe],a[Ge+$e]=r[Ge+$e],F=function _copyState(e,t,r){for(var n,o=[],i=e.length,a=r?8:0;a<i;a+=2)n=e[a],o.push(n,n in t?t[n]:e[a+1]);return o.t=e.t,o}(D,a,de)),M?(u=M._initted,ze(1),M.render(M.duration(),!0,!0),q=U(re.a)-Z+z+v,z!==q&&F.splice(F.length-2,2),M.render(0,!0,!0),u||M.invalidate(),ze(0)):q=z;else if(ie&&we.scroll())for(n=ie.parentNode;n&&n!==Pe;)n._pinOffset&&(E-=n._pinOffset,A-=n._pinOffset),n=n.parentNode;f&&f.forEach(function(e){return e.revert(!1)}),we.start=E,we.end=A,(k=_=we.scroll())<ee&&we.scroll(ee),we.revert(!1),Be=0,M&&ge&&M._initted&&M.progress()!==te&&M.progress(te,!0).render(M.time(),!0,!0),G!==we.progress&&(K&&M.totalProgress(G,!0),we.progress=G,we.update()),ae&&se&&(j._pinOffset=Math.round(we.progress*q)),oe&&oe(we)}},we.getVelocity=function(){return(we.scroll()-_)/(He()-Ae)*1e3||0},we.update=function(e,t){var r,n,o,i,a,s=we.scroll(),l=e?0:(s-E)/z,c=l<0?0:1<l?1:l||0,u=we.progress;if(t&&(_=k,k=s,pe&&(x=b,b=M&&!ge?M.totalProgress():c)),ce&&!c&&ae&&!Be&&!De&&je&&E<s+(s-_)/(He()-Ae)*ce&&(c=1e-4),c!==u&&we.enabled){if(i=(a=(r=we.isActive=!!c&&c<1)!=(!!u&&u<1))||!!c!=!!u,we.direction=u<c?1:-1,we.progress=c,ge||(!K||Be||De?M&&M.totalProgress(c,!!Be):(K.vars.totalProgress=c,K.invalidate().restart())),ae)if(e&&se&&(j.style[se+re.os2]=h),me){if(i){if(o=!e&&u<c&&s<A+1&&s+1>=T(he,re),de)if(e||!r&&!o)ob(ae,j);else{var f=it(ae,!0),p=s-E;ob(ae,Pe,f.top+(re===ot?p:0)+rt,f.left+(re===ot?0:p)+rt)}ft(r||o?F:H),q!==z&&c<1&&r||g(Z+(1!==c||o?0:q))}}else g(Z+q*c);!pe||d.tween||Be||De||y.restart(!0),C&&(a||fe&&c&&(c<1||!We))&&Ee(C.targets).forEach(function(e){return e.classList[r||fe?"add":"remove"](C.className)}),!w||ge||e||w(we),i&&!Be?(n=c&&!u?0:1===c?1:1===u?2:3,ge&&(o=!a&&"none"!==xe[n+1]&&xe[n+1]||xe[n],M&&("complete"===o||"reset"===o||o in M)&&("complete"===o?M.pause().totalProgress(1):"reset"===o?M.restart(!0).pause():"restart"===o?M.restart(!0):M[o]()),w&&w(we)),!a&&We||(ne&&a&&ne(we),be[n]&&be[n](we),fe&&(1===c?we.kill(!1,1):be[n]=0),a||be[n=1===c?1:3]&&be[n](we))):ge&&w&&!Be&&w(we)}m&&(v(s+(L._isFlipped?1:0)),m(s))},we.enable=function(e,t){we.enabled||(we.enabled=!0,Ca(he,"resize",Oa),Ca(he,"scroll",Na),u&&Ca(ScrollTrigger,"refreshInit",u),!1!==e&&(we.progress=G=0,k=_=Oe=we.scroll()),!1!==t&&we.refresh())},we.getTween=function(e){return e&&d?d.tween:K},we.disable=function(e,t){if(we.enabled&&(!1!==e&&we.revert(),we.enabled=we.isActive=!1,t||K&&K.pause(),ee=0,n&&(n.uncache=1),u&&Da(ScrollTrigger,"refreshInit",u),y&&(y.pause(),d.tween&&d.tween.kill()&&(d.tween=0)),!ve)){for(var r=lt.length;r--;)if(lt[r].scroller===he&&lt[r]!==we)return;Da(he,"resize",Oa),Da(he,"scroll",Na)}},we.kill=function(e,t){we.disable(e,t),i&&delete ct[i];var r=lt.indexOf(we);lt.splice(r,1),r===Le&&0<ut&&Le--,r=0,lt.forEach(function(e){return e.scroller===we.scroller&&(r=1)}),r||(we.scroll.rec=0),M&&(M.scrollTrigger=null,e&&M.render(-1),t||M.kill()),B&&[B,I,L,R].forEach(function(e){return e.parentNode&&e.parentNode.removeChild(e)}),ae&&(n&&(n.uncache=1),r=0,lt.forEach(function(e){return e.pin===ae&&r++}),r||(n.spacer=0))},we.enable(!1,!1),M&&M.add&&!z?Se.delayedCall(.01,function(){return E||A||we.refresh()})&&(z=.01)&&(E=A=0):we.refresh()}else this.update=this.refresh=this.kill=J},ScrollTrigger.register=function register(e){if(!i&&(Se=e||M(),L()&&window.document&&(Me=window,ke=document,_e=ke.documentElement,Pe=ke.body),Se&&(Ee=Se.utils.toArray,Ne=Se.utils.clamp,ze=Se.core.suppressOverwrites||J,Se.core.globals("ScrollTrigger",ScrollTrigger),Pe))){s=Me.requestAnimationFrame||function(e){return setTimeout(e,16)},Ca(Me,"wheel",Na),o=[Me,ke,_e,Pe],Ca(ke,"scroll",Na);var t,r=Pe.style,n=r.borderTop;r.borderTop="1px solid #000",t=it(Pe),ot.m=Math.round(t.top+ot.sc())||0,nt.m=Math.round(t.left+nt.sc())||0,n?r.borderTop=n:r.removeProperty("border-top"),c=setInterval(Ma,200),Se.delayedCall(.5,function(){return De=0}),Ca(ke,"touchcancel",J),Ca(Pe,"touchstart",J),Ba(Ca,ke,"pointerdown,touchstart,mousedown",function(){return Ie=1}),Ba(Ca,ke,"pointerup,touchend,mouseup",function(){return Ie=0}),u=Se.utils.checkPrefix("transform"),j.push(u),i=He(),a=Se.delayedCall(.2,z).pause(),d=[ke,"visibilitychange",function(){var e=Me.innerWidth,t=Me.innerHeight;ke.hidden?(f=e,p=t):f===e&&p===t||Oa()},ke,"DOMContentLoaded",z,Me,"load",function(){return je||z()},Me,"resize",Oa],U(Ca)}return i},ScrollTrigger.defaults=function defaults(e){for(var t in e)st[t]=e[t]},ScrollTrigger.kill=function kill(){Ue=0,lt.slice(0).forEach(function(e){return e.kill(1)})},ScrollTrigger.config=function config(e){"limitCallbacks"in e&&(We=!!e.limitCallbacks);var t=e.syncInterval;t&&clearInterval(c)||(c=t)&&setInterval(Ma,t),"autoRefreshEvents"in e&&(U(Da)||U(Ca,e.autoRefreshEvents||"none"),r=-1===(e.autoRefreshEvents+"").indexOf("resize"))},ScrollTrigger.scrollerProxy=function scrollerProxy(e,t){var r=Ee(e)[0],n=v.indexOf(r),o=N(r);~n&&v.splice(n,o?6:2),o?Fe.unshift(Me,t,Pe,t,_e,t):Fe.unshift(r,t)},ScrollTrigger.matchMedia=function matchMedia(e){var t,r,n,o,i;for(r in e)n=E.indexOf(r),o=e[r],"all"===(Ve=r)?o():(t=Me.matchMedia(r))&&(t.matches&&(i=o()),~n?(E[n+1]=$(E[n+1],o),E[n+2]=$(E[n+2],i)):(n=E.length,E.push(r,o,i),t.addListener?t.addListener(Ua):t.addEventListener("change",Ua)),E[n+3]=t.matches),Ve=0;return E},ScrollTrigger.clearMatchMedia=function clearMatchMedia(e){e||(E.length=0),0<=(e=E.indexOf(e))&&E.splice(e,4)},ScrollTrigger);function ScrollTrigger(e,t){i||ScrollTrigger.register(Se)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),this.init(e,t)}ee.version="3.7.1",ee.saveStyles=function(e){return e?Ee(e).forEach(function(e){if(e&&e.style){var t=B.indexOf(e);0<=t&&B.splice(t,5),B.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Se.core.getCache(e),Ve)}}):B},ee.revert=function(e,t){return R(!e,t)},ee.create=function(e,t){return new ee(e,t)},ee.refresh=function(e){return e?Oa():z(!0)},ee.update=F,ee.maxScroll=function(e,t){return T(e,t?nt:ot)},ee.getScrollFunc=function(e,t){return P(Ee(e)[0],t?nt:ot)},ee.getById=function(e){return ct[e]},ee.getAll=function(){return lt.slice(0)},ee.isScrolling=function(){return!!je},ee.addEventListener=function(e,t){var r=k[e]||(k[e]=[]);~r.indexOf(t)||r.push(t)},ee.removeEventListener=function(e,t){var r=k[e],n=r&&r.indexOf(t);0<=n&&r.splice(n,1)},ee.batch=function(e,t){function Ji(e,t){var r=[],n=[],o=Se.delayedCall(i,function(){t(r,n),r=[],n=[]}).pause();return function(e){r.length||o.restart(!0),r.push(e.trigger),n.push(e),a<=r.length&&o.progress(1)}}var r,n=[],o={},i=t.interval||.016,a=t.batchMax||1e9;for(r in t)o[r]="on"===r.substr(0,2)&&W(t[r])&&"onRefreshInit"!==r?Ji(0,t[r]):t[r];return W(a)&&(a=a(),Ca(ee,"refresh",function(){return a=t.batchMax()})),Ee(e).forEach(function(e){var t={};for(r in o)t[r]=o[r];t.trigger=e,n.push(ee.create(t))}),n},ee.sort=function(e){return lt.sort(e||function(e,t){return-1e6*(e.vars.refreshPriority||0)+e.start-(t.start+-1e6*(t.vars.refreshPriority||0))})},M()&&Se.registerPlugin(ee),e.ScrollTrigger=ee,e.default=ee;if (typeof(window)==="undefined"||window!==e){Object.defineProperty(e,"__esModule",{value:!0})} else {delete e.default}});



!function(){"use strict";function e(n){return"undefined"==typeof this||Object.getPrototypeOf(this)!==e.prototype?new e(n):(O=this,O.version="3.3.1",O.tools=new E,O.isSupported()?(O.tools.extend(O.defaults,n||{}),t(O.defaults),O.store={elements:{},containers:[]},O.sequences={},O.history=[],O.uid=0,O.initialized=!1):"undefined"!=typeof console&&null!==console,O)}function t(e){if(e&&e.container){if("string"==typeof e.container)return window.document.documentElement.querySelector(e.container);if(O.tools.isNode(e.container))return e.container}return O.defaults.container}function n(e,t){return"string"==typeof e?Array.prototype.slice.call(t.querySelectorAll(e)):O.tools.isNode(e)?[e]:O.tools.isNodeList(e)?Array.prototype.slice.call(e):[]}function i(){return++O.uid}function o(e,t,n){t.container&&(t.container=n),e.config?e.config=O.tools.extendClone(e.config,t):e.config=O.tools.extendClone(O.defaults,t),"top"===e.config.origin||"bottom"===e.config.origin?e.config.axis="Y":e.config.axis="X"}function r(e){var t=window.getComputedStyle(e.domEl);e.styles||(e.styles={transition:{},transform:{},computed:{}},e.styles.inline=e.domEl.getAttribute("style")||"",e.styles.inline+="; visibility: visible; ",e.styles.computed.opacity=t.opacity,t.transition&&"all 0s ease 0s"!==t.transition?e.styles.computed.transition=t.transition+", ":e.styles.computed.transition=""),e.styles.transition.instant=s(e,0),e.styles.transition.delayed=s(e,e.config.delay),e.styles.transform.initial=" -webkit-transform:",e.styles.transform.target=" -webkit-transform:",a(e),e.styles.transform.initial+="transform:",e.styles.transform.target+="transform:",a(e)}function s(e,t){var n=e.config;return"-webkit-transition: "+e.styles.computed.transition+"-webkit-transform "+n.duration/1e3+"s "+n.easing+" "+t/1e3+"s, opacity "+n.duration/1e3+"s "+n.easing+" "+t/1e3+"s; transition: "+e.styles.computed.transition+"transform "+n.duration/1e3+"s "+n.easing+" "+t/1e3+"s, opacity "+n.duration/1e3+"s "+n.easing+" "+t/1e3+"s; "}function a(e){var t,n=e.config,i=e.styles.transform;t="top"===n.origin||"left"===n.origin?/^-/.test(n.distance)?n.distance.substr(1):"-"+n.distance:n.distance,parseInt(n.distance)&&(i.initial+=" translate"+n.axis+"("+t+")",i.target+=" translate"+n.axis+"(0)"),n.scale&&(i.initial+=" scale("+n.scale+")",i.target+=" scale(1)"),n.rotate.x&&(i.initial+=" rotateX("+n.rotate.x+"deg)",i.target+=" rotateX(0)"),n.rotate.y&&(i.initial+=" rotateY("+n.rotate.y+"deg)",i.target+=" rotateY(0)"),n.rotate.z&&(i.initial+=" rotateZ("+n.rotate.z+"deg)",i.target+=" rotateZ(0)"),i.initial+="; opacity: "+n.opacity+";",i.target+="; opacity: "+e.styles.computed.opacity+";"}function l(e){var t=e.config.container;t&&O.store.containers.indexOf(t)===-1&&O.store.containers.push(e.config.container),O.store.elements[e.id]=e}function c(e,t,n){var i={target:e,config:t,interval:n};O.history.push(i)}function f(){if(O.isSupported()){y();for(var e=0;e<O.store.containers.length;e++)O.store.containers[e].addEventListener("scroll",d),O.store.containers[e].addEventListener("resize",d);O.initialized||(window.addEventListener("scroll",d),window.addEventListener("resize",d),O.initialized=!0)}return O}function d(){T(y)}function u(){var e,t,n,i;O.tools.forOwn(O.sequences,function(o){i=O.sequences[o],e=!1;for(var r=0;r<i.elemIds.length;r++)n=i.elemIds[r],t=O.store.elements[n],q(t)&&!e&&(e=!0);i.active=e})}function y(){var e,t;u(),O.tools.forOwn(O.store.elements,function(n){t=O.store.elements[n],e=w(t),g(t)?(t.config.beforeReveal(t.domEl),e?t.domEl.setAttribute("style",t.styles.inline+t.styles.transform.target+t.styles.transition.delayed):t.domEl.setAttribute("style",t.styles.inline+t.styles.transform.target+t.styles.transition.instant),p("reveal",t,e),t.revealing=!0,t.seen=!0,t.sequence&&m(t,e)):v(t)&&(t.config.beforeReset(t.domEl),t.domEl.setAttribute("style",t.styles.inline+t.styles.transform.initial+t.styles.transition.instant),p("reset",t),t.revealing=!1)})}function m(e,t){var n=0,i=0,o=O.sequences[e.sequence.id];o.blocked=!0,t&&"onload"===e.config.useDelay&&(i=e.config.delay),e.sequence.timer&&(n=Math.abs(e.sequence.timer.started-new Date),window.clearTimeout(e.sequence.timer)),e.sequence.timer={started:new Date},e.sequence.timer.clock=window.setTimeout(function(){o.blocked=!1,e.sequence.timer=null,d()},Math.abs(o.interval)+i-n)}function p(e,t,n){var i=0,o=0,r="after";switch(e){case"reveal":o=t.config.duration,n&&(o+=t.config.delay),r+="Reveal";break;case"reset":o=t.config.duration,r+="Reset"}t.timer&&(i=Math.abs(t.timer.started-new Date),window.clearTimeout(t.timer.clock)),t.timer={started:new Date},t.timer.clock=window.setTimeout(function(){t.config[r](t.domEl),t.timer=null},o-i)}function g(e){if(e.sequence){var t=O.sequences[e.sequence.id];return t.active&&!t.blocked&&!e.revealing&&!e.disabled}return q(e)&&!e.revealing&&!e.disabled}function w(e){var t=e.config.useDelay;return"always"===t||"onload"===t&&!O.initialized||"once"===t&&!e.seen}function v(e){if(e.sequence){var t=O.sequences[e.sequence.id];return!t.active&&e.config.reset&&e.revealing&&!e.disabled}return!q(e)&&e.config.reset&&e.revealing&&!e.disabled}function b(e){return{width:e.clientWidth,height:e.clientHeight}}function h(e){if(e&&e!==window.document.documentElement){var t=x(e);return{x:e.scrollLeft+t.left,y:e.scrollTop+t.top}}return{x:window.pageXOffset,y:window.pageYOffset}}function x(e){var t=0,n=0,i=e.offsetHeight,o=e.offsetWidth;do isNaN(e.offsetTop)||(t+=e.offsetTop),isNaN(e.offsetLeft)||(n+=e.offsetLeft),e=e.offsetParent;while(e);return{top:t,left:n,height:i,width:o}}function q(e){function t(){var t=c+a*s,n=f+l*s,i=d-a*s,y=u-l*s,m=r.y+e.config.viewOffset.top,p=r.x+e.config.viewOffset.left,g=r.y-e.config.viewOffset.bottom+o.height,w=r.x-e.config.viewOffset.right+o.width;return t<g&&i>m&&n>p&&y<w}function n(){return"fixed"===window.getComputedStyle(e.domEl).position}var i=x(e.domEl),o=b(e.config.container),r=h(e.config.container),s=e.config.viewFactor,a=i.height,l=i.width,c=i.top,f=i.left,d=c+a,u=f+l;return t()||n()}function E(){}var O,T;e.prototype.defaults={origin:"bottom",distance:"20px",duration:500,delay:0,rotate:{x:0,y:0,z:0},opacity:0,scale:.9,easing:"cubic-bezier(0.6, 0.2, 0.1, 1)",container:window.document.documentElement,mobile:!0,reset:!1,useDelay:"always",viewFactor:.2,viewOffset:{top:0,right:0,bottom:0,left:0},beforeReveal:function(e){},afterReveal:function(e){},beforeReset:function(e){},afterReset:function(e){}},e.prototype.isSupported=function(){var e=document.documentElement.style;return"WebkitTransition"in e&&"WebkitTransform"in e||"transition"in e&&"transform"in e},e.prototype.reveal=function(e,s,a,d){var u,y,m,p,g,w;if(void 0!==s&&"number"==typeof s?(a=s,s={}):void 0!==s&&null!==s||(s={}),u=t(s),y=n(e,u),!y.length)return O;a&&"number"==typeof a&&(w=i(),g=O.sequences[w]={id:w,interval:a,elemIds:[],active:!1});for(var v=0;v<y.length;v++)p=y[v].getAttribute("data-sr-id"),p?m=O.store.elements[p]:(m={id:i(),domEl:y[v],seen:!1,revealing:!1},m.domEl.setAttribute("data-sr-id",m.id)),g&&(m.sequence={id:g.id,index:g.elemIds.length},g.elemIds.push(m.id)),o(m,s,u),r(m),l(m),O.tools.isMobile()&&!m.config.mobile||!O.isSupported()?(m.domEl.setAttribute("style",m.styles.inline),m.disabled=!0):m.revealing||m.domEl.setAttribute("style",m.styles.inline+m.styles.transform.initial);return!d&&O.isSupported()&&(c(e,s,a),O.initTimeout&&window.clearTimeout(O.initTimeout),O.initTimeout=window.setTimeout(f,0)),O},e.prototype.sync=function(){if(O.history.length&&O.isSupported()){for(var e=0;e<O.history.length;e++){var t=O.history[e];O.reveal(t.target,t.config,t.interval,!0)}f()}return O},E.prototype.isObject=function(e){return null!==e&&"object"==typeof e&&e.constructor===Object},E.prototype.isNode=function(e){return"object"==typeof window.Node?e instanceof window.Node:e&&"object"==typeof e&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},E.prototype.isNodeList=function(e){var t=Object.prototype.toString.call(e),n=/^\[object (HTMLCollection|NodeList|Object)\]$/;return"object"==typeof window.NodeList?e instanceof window.NodeList:e&&"object"==typeof e&&n.test(t)&&"number"==typeof e.length&&(0===e.length||this.isNode(e[0]))},E.prototype.forOwn=function(e,t){if(!this.isObject(e))throw new TypeError('Expected "object", but received "'+typeof e+'".');for(var n in e)e.hasOwnProperty(n)&&t(n)},E.prototype.extend=function(e,t){return this.forOwn(t,function(n){this.isObject(t[n])?(e[n]&&this.isObject(e[n])||(e[n]={}),this.extend(e[n],t[n])):e[n]=t[n]}.bind(this)),e},E.prototype.extendClone=function(e,t){return this.extend(this.extend({},e),t)},E.prototype.isMobile=function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)},T=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)},"function"==typeof define&&"object"==typeof define.amd&&define.amd?define(function(){return e}):"undefined"!=typeof module&&module.exports?module.exports=e:window.ScrollReveal=e}();

/**
 * Owl Carousel v2.3.4
 * Copyright 2013-2018 David Deutsch
 * Licensed under: SEE LICENSE IN https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE
 */
!function(a,b,c,d){function e(b,c){this.settings=null,this.options=a.extend({},e.Defaults,c),this.$element=a(b),this._handlers={},this._plugins={},this._supress={},this._current=null,this._speed=null,this._coordinates=[],this._breakpoint=null,this._width=null,this._items=[],this._clones=[],this._mergers=[],this._widths=[],this._invalidated={},this._pipe=[],this._drag={time:null,target:null,pointer:null,stage:{start:null,current:null},direction:null},this._states={current:{},tags:{initializing:["busy"],animating:["busy"],dragging:["interacting"]}},a.each(["onResize","onThrottledResize"],a.proxy(function(b,c){this._handlers[c]=a.proxy(this[c],this)},this)),a.each(e.Plugins,a.proxy(function(a,b){this._plugins[a.charAt(0).toLowerCase()+a.slice(1)]=new b(this)},this)),a.each(e.Workers,a.proxy(function(b,c){this._pipe.push({filter:c.filter,run:a.proxy(c.run,this)})},this)),this.setup(),this.initialize()}e.Defaults={items:3,loop:!1,center:!1,rewind:!1,checkVisibility:!0,mouseDrag:!0,touchDrag:!0,pullDrag:!0,freeDrag:!1,margin:0,stagePadding:0,merge:!1,mergeFit:!0,autoWidth:!1,startPosition:0,rtl:!1,smartSpeed:250,fluidSpeed:!1,dragEndSpeed:!1,responsive:{},responsiveRefreshRate:200,responsiveBaseElement:b,fallbackEasing:"swing",slideTransition:"",info:!1,nestedItemSelector:!1,itemElement:"div",stageElement:"div",refreshClass:"owl-refresh",loadedClass:"owl-loaded",loadingClass:"owl-loading",rtlClass:"owl-rtl",responsiveClass:"owl-responsive",dragClass:"owl-drag",itemClass:"owl-item",stageClass:"owl-stage",stageOuterClass:"owl-stage-outer",grabClass:"owl-grab"},e.Width={Default:"default",Inner:"inner",Outer:"outer"},e.Type={Event:"event",State:"state"},e.Plugins={},e.Workers=[{filter:["width","settings"],run:function(){this._width=this.$element.width()}},{filter:["width","items","settings"],run:function(a){a.current=this._items&&this._items[this.relative(this._current)]}},{filter:["items","settings"],run:function(){this.$stage.children(".cloned").remove()}},{filter:["width","items","settings"],run:function(a){var b=this.settings.margin||"",c=!this.settings.autoWidth,d=this.settings.rtl,e={width:"auto","margin-left":d?b:"","margin-right":d?"":b};!c&&this.$stage.children().css(e),a.css=e}},{filter:["width","items","settings"],run:function(a){var b=(this.width()/this.settings.items).toFixed(3)-this.settings.margin,c=null,d=this._items.length,e=!this.settings.autoWidth,f=[];for(a.items={merge:!1,width:b};d--;)c=this._mergers[d],c=this.settings.mergeFit&&Math.min(c,this.settings.items)||c,a.items.merge=c>1||a.items.merge,f[d]=e?b*c:this._items[d].width();this._widths=f}},{filter:["items","settings"],run:function(){var b=[],c=this._items,d=this.settings,e=Math.max(2*d.items,4),f=2*Math.ceil(c.length/2),g=d.loop&&c.length?d.rewind?e:Math.max(e,f):0,h="",i="";for(g/=2;g>0;)b.push(this.normalize(b.length/2,!0)),h+=c[b[b.length-1]][0].outerHTML,b.push(this.normalize(c.length-1-(b.length-1)/2,!0)),i=c[b[b.length-1]][0].outerHTML+i,g-=1;this._clones=b,a(h).addClass("cloned").appendTo(this.$stage),a(i).addClass("cloned").prependTo(this.$stage)}},{filter:["width","items","settings"],run:function(){for(var a=this.settings.rtl?1:-1,b=this._clones.length+this._items.length,c=-1,d=0,e=0,f=[];++c<b;)d=f[c-1]||0,e=this._widths[this.relative(c)]+this.settings.margin,f.push(d+e*a);this._coordinates=f}},{filter:["width","items","settings"],run:function(){var a=this.settings.stagePadding,b=this._coordinates,c={width:Math.ceil(Math.abs(b[b.length-1]))+2*a,"padding-left":a||"","padding-right":a||""};this.$stage.css(c)}},{filter:["width","items","settings"],run:function(a){var b=this._coordinates.length,c=!this.settings.autoWidth,d=this.$stage.children();if(c&&a.items.merge)for(;b--;)a.css.width=this._widths[this.relative(b)],d.eq(b).css(a.css);else c&&(a.css.width=a.items.width,d.css(a.css))}},{filter:["items"],run:function(){this._coordinates.length<1&&this.$stage.removeAttr("style")}},{filter:["width","items","settings"],run:function(a){a.current=a.current?this.$stage.children().index(a.current):0,a.current=Math.max(this.minimum(),Math.min(this.maximum(),a.current)),this.reset(a.current)}},{filter:["position"],run:function(){this.animate(this.coordinates(this._current))}},{filter:["width","position","items","settings"],run:function(){var a,b,c,d,e=this.settings.rtl?1:-1,f=2*this.settings.stagePadding,g=this.coordinates(this.current())+f,h=g+this.width()*e,i=[];for(c=0,d=this._coordinates.length;c<d;c++)a=this._coordinates[c-1]||0,b=Math.abs(this._coordinates[c])+f*e,(this.op(a,"<=",g)&&this.op(a,">",h)||this.op(b,"<",g)&&this.op(b,">",h))&&i.push(c);this.$stage.children(".active").removeClass("active"),this.$stage.children(":eq("+i.join("), :eq(")+")").addClass("active"),this.$stage.children(".center").removeClass("center"),this.settings.center&&this.$stage.children().eq(this.current()).addClass("center")}}],e.prototype.initializeStage=function(){this.$stage=this.$element.find("."+this.settings.stageClass),this.$stage.length||(this.$element.addClass(this.options.loadingClass),this.$stage=a("<"+this.settings.stageElement+">",{class:this.settings.stageClass}).wrap(a("<div/>",{class:this.settings.stageOuterClass})),this.$element.append(this.$stage.parent()))},e.prototype.initializeItems=function(){var b=this.$element.find(".owl-item");if(b.length)return this._items=b.get().map(function(b){return a(b)}),this._mergers=this._items.map(function(){return 1}),void this.refresh();this.replace(this.$element.children().not(this.$stage.parent())),this.isVisible()?this.refresh():this.invalidate("width"),this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass)},e.prototype.initialize=function(){if(this.enter("initializing"),this.trigger("initialize"),this.$element.toggleClass(this.settings.rtlClass,this.settings.rtl),this.settings.autoWidth&&!this.is("pre-loading")){var a,b,c;a=this.$element.find("img"),b=this.settings.nestedItemSelector?"."+this.settings.nestedItemSelector:d,c=this.$element.children(b).width(),a.length&&c<=0&&this.preloadAutoWidthImages(a)}this.initializeStage(),this.initializeItems(),this.registerEventHandlers(),this.leave("initializing"),this.trigger("initialized")},e.prototype.isVisible=function(){return!this.settings.checkVisibility||this.$element.is(":visible")},e.prototype.setup=function(){var b=this.viewport(),c=this.options.responsive,d=-1,e=null;c?(a.each(c,function(a){a<=b&&a>d&&(d=Number(a))}),e=a.extend({},this.options,c[d]),"function"==typeof e.stagePadding&&(e.stagePadding=e.stagePadding()),delete e.responsive,e.responsiveClass&&this.$element.attr("class",this.$element.attr("class").replace(new RegExp("("+this.options.responsiveClass+"-)\\S+\\s","g"),"$1"+d))):e=a.extend({},this.options),this.trigger("change",{property:{name:"settings",value:e}}),this._breakpoint=d,this.settings=e,this.invalidate("settings"),this.trigger("changed",{property:{name:"settings",value:this.settings}})},e.prototype.optionsLogic=function(){this.settings.autoWidth&&(this.settings.stagePadding=!1,this.settings.merge=!1)},e.prototype.prepare=function(b){var c=this.trigger("prepare",{content:b});return c.data||(c.data=a("<"+this.settings.itemElement+"/>").addClass(this.options.itemClass).append(b)),this.trigger("prepared",{content:c.data}),c.data},e.prototype.update=function(){for(var b=0,c=this._pipe.length,d=a.proxy(function(a){return this[a]},this._invalidated),e={};b<c;)(this._invalidated.all||a.grep(this._pipe[b].filter,d).length>0)&&this._pipe[b].run(e),b++;this._invalidated={},!this.is("valid")&&this.enter("valid")},e.prototype.width=function(a){switch(a=a||e.Width.Default){case e.Width.Inner:case e.Width.Outer:return this._width;default:return this._width-2*this.settings.stagePadding+this.settings.margin}},e.prototype.refresh=function(){this.enter("refreshing"),this.trigger("refresh"),this.setup(),this.optionsLogic(),this.$element.addClass(this.options.refreshClass),this.update(),this.$element.removeClass(this.options.refreshClass),this.leave("refreshing"),this.trigger("refreshed")},e.prototype.onThrottledResize=function(){b.clearTimeout(this.resizeTimer),this.resizeTimer=b.setTimeout(this._handlers.onResize,this.settings.responsiveRefreshRate)},e.prototype.onResize=function(){return!!this._items.length&&(this._width!==this.$element.width()&&(!!this.isVisible()&&(this.enter("resizing"),this.trigger("resize").isDefaultPrevented()?(this.leave("resizing"),!1):(this.invalidate("width"),this.refresh(),this.leave("resizing"),void this.trigger("resized")))))},e.prototype.registerEventHandlers=function(){a.support.transition&&this.$stage.on(a.support.transition.end+".owl.core",a.proxy(this.onTransitionEnd,this)),!1!==this.settings.responsive&&this.on(b,"resize",this._handlers.onThrottledResize),this.settings.mouseDrag&&(this.$element.addClass(this.options.dragClass),this.$stage.on("mousedown.owl.core",a.proxy(this.onDragStart,this)),this.$stage.on("dragstart.owl.core selectstart.owl.core",function(){return!1})),this.settings.touchDrag&&(this.$stage.on("touchstart.owl.core",a.proxy(this.onDragStart,this)),this.$stage.on("touchcancel.owl.core",a.proxy(this.onDragEnd,this)))},e.prototype.onDragStart=function(b){var d=null;3!==b.which&&(a.support.transform?(d=this.$stage.css("transform").replace(/.*\(|\)| /g,"").split(","),d={x:d[16===d.length?12:4],y:d[16===d.length?13:5]}):(d=this.$stage.position(),d={x:this.settings.rtl?d.left+this.$stage.width()-this.width()+this.settings.margin:d.left,y:d.top}),this.is("animating")&&(a.support.transform?this.animate(d.x):this.$stage.stop(),this.invalidate("position")),this.$element.toggleClass(this.options.grabClass,"mousedown"===b.type),this.speed(0),this._drag.time=(new Date).getTime(),this._drag.target=a(b.target),this._drag.stage.start=d,this._drag.stage.current=d,this._drag.pointer=this.pointer(b),a(c).on("mouseup.owl.core touchend.owl.core",a.proxy(this.onDragEnd,this)),a(c).one("mousemove.owl.core touchmove.owl.core",a.proxy(function(b){var d=this.difference(this._drag.pointer,this.pointer(b));a(c).on("mousemove.owl.core touchmove.owl.core",a.proxy(this.onDragMove,this)),Math.abs(d.x)<Math.abs(d.y)&&this.is("valid")||(b.preventDefault(),this.enter("dragging"),this.trigger("drag"))},this)))},e.prototype.onDragMove=function(a){var b=null,c=null,d=null,e=this.difference(this._drag.pointer,this.pointer(a)),f=this.difference(this._drag.stage.start,e);this.is("dragging")&&(a.preventDefault(),this.settings.loop?(b=this.coordinates(this.minimum()),c=this.coordinates(this.maximum()+1)-b,f.x=((f.x-b)%c+c)%c+b):(b=this.settings.rtl?this.coordinates(this.maximum()):this.coordinates(this.minimum()),c=this.settings.rtl?this.coordinates(this.minimum()):this.coordinates(this.maximum()),d=this.settings.pullDrag?-1*e.x/5:0,f.x=Math.max(Math.min(f.x,b+d),c+d)),this._drag.stage.current=f,this.animate(f.x))},e.prototype.onDragEnd=function(b){var d=this.difference(this._drag.pointer,this.pointer(b)),e=this._drag.stage.current,f=d.x>0^this.settings.rtl?"left":"right";a(c).off(".owl.core"),this.$element.removeClass(this.options.grabClass),(0!==d.x&&this.is("dragging")||!this.is("valid"))&&(this.speed(this.settings.dragEndSpeed||this.settings.smartSpeed),this.current(this.closest(e.x,0!==d.x?f:this._drag.direction)),this.invalidate("position"),this.update(),this._drag.direction=f,(Math.abs(d.x)>3||(new Date).getTime()-this._drag.time>300)&&this._drag.target.one("click.owl.core",function(){return!1})),this.is("dragging")&&(this.leave("dragging"),this.trigger("dragged"))},e.prototype.closest=function(b,c){var e=-1,f=30,g=this.width(),h=this.coordinates();return this.settings.freeDrag||a.each(h,a.proxy(function(a,i){return"left"===c&&b>i-f&&b<i+f?e=a:"right"===c&&b>i-g-f&&b<i-g+f?e=a+1:this.op(b,"<",i)&&this.op(b,">",h[a+1]!==d?h[a+1]:i-g)&&(e="left"===c?a+1:a),-1===e},this)),this.settings.loop||(this.op(b,">",h[this.minimum()])?e=b=this.minimum():this.op(b,"<",h[this.maximum()])&&(e=b=this.maximum())),e},e.prototype.animate=function(b){var c=this.speed()>0;this.is("animating")&&this.onTransitionEnd(),c&&(this.enter("animating"),this.trigger("translate")),a.support.transform3d&&a.support.transition?this.$stage.css({transform:"translate3d("+b+"px,0px,0px)",transition:this.speed()/1e3+"s"+(this.settings.slideTransition?" "+this.settings.slideTransition:"")}):c?this.$stage.animate({left:b+"px"},this.speed(),this.settings.fallbackEasing,a.proxy(this.onTransitionEnd,this)):this.$stage.css({left:b+"px"})},e.prototype.is=function(a){return this._states.current[a]&&this._states.current[a]>0},e.prototype.current=function(a){if(a===d)return this._current;if(0===this._items.length)return d;if(a=this.normalize(a),this._current!==a){var b=this.trigger("change",{property:{name:"position",value:a}});b.data!==d&&(a=this.normalize(b.data)),this._current=a,this.invalidate("position"),this.trigger("changed",{property:{name:"position",value:this._current}})}return this._current},e.prototype.invalidate=function(b){return"string"===a.type(b)&&(this._invalidated[b]=!0,this.is("valid")&&this.leave("valid")),a.map(this._invalidated,function(a,b){return b})},e.prototype.reset=function(a){(a=this.normalize(a))!==d&&(this._speed=0,this._current=a,this.suppress(["translate","translated"]),this.animate(this.coordinates(a)),this.release(["translate","translated"]))},e.prototype.normalize=function(a,b){var c=this._items.length,e=b?0:this._clones.length;return!this.isNumeric(a)||c<1?a=d:(a<0||a>=c+e)&&(a=((a-e/2)%c+c)%c+e/2),a},e.prototype.relative=function(a){return a-=this._clones.length/2,this.normalize(a,!0)},e.prototype.maximum=function(a){var b,c,d,e=this.settings,f=this._coordinates.length;if(e.loop)f=this._clones.length/2+this._items.length-1;else if(e.autoWidth||e.merge){if(b=this._items.length)for(c=this._items[--b].width(),d=this.$element.width();b--&&!((c+=this._items[b].width()+this.settings.margin)>d););f=b+1}else f=e.center?this._items.length-1:this._items.length-e.items;return a&&(f-=this._clones.length/2),Math.max(f,0)},e.prototype.minimum=function(a){return a?0:this._clones.length/2},e.prototype.items=function(a){return a===d?this._items.slice():(a=this.normalize(a,!0),this._items[a])},e.prototype.mergers=function(a){return a===d?this._mergers.slice():(a=this.normalize(a,!0),this._mergers[a])},e.prototype.clones=function(b){var c=this._clones.length/2,e=c+this._items.length,f=function(a){return a%2==0?e+a/2:c-(a+1)/2};return b===d?a.map(this._clones,function(a,b){return f(b)}):a.map(this._clones,function(a,c){return a===b?f(c):null})},e.prototype.speed=function(a){return a!==d&&(this._speed=a),this._speed},e.prototype.coordinates=function(b){var c,e=1,f=b-1;return b===d?a.map(this._coordinates,a.proxy(function(a,b){return this.coordinates(b)},this)):(this.settings.center?(this.settings.rtl&&(e=-1,f=b+1),c=this._coordinates[b],c+=(this.width()-c+(this._coordinates[f]||0))/2*e):c=this._coordinates[f]||0,c=Math.ceil(c))},e.prototype.duration=function(a,b,c){return 0===c?0:Math.min(Math.max(Math.abs(b-a),1),6)*Math.abs(c||this.settings.smartSpeed)},e.prototype.to=function(a,b){var c=this.current(),d=null,e=a-this.relative(c),f=(e>0)-(e<0),g=this._items.length,h=this.minimum(),i=this.maximum();this.settings.loop?(!this.settings.rewind&&Math.abs(e)>g/2&&(e+=-1*f*g),a=c+e,(d=((a-h)%g+g)%g+h)!==a&&d-e<=i&&d-e>0&&(c=d-e,a=d,this.reset(c))):this.settings.rewind?(i+=1,a=(a%i+i)%i):a=Math.max(h,Math.min(i,a)),this.speed(this.duration(c,a,b)),this.current(a),this.isVisible()&&this.update()},e.prototype.next=function(a){a=a||!1,this.to(this.relative(this.current())+1,a)},e.prototype.prev=function(a){a=a||!1,this.to(this.relative(this.current())-1,a)},e.prototype.onTransitionEnd=function(a){if(a!==d&&(a.stopPropagation(),(a.target||a.srcElement||a.originalTarget)!==this.$stage.get(0)))return!1;this.leave("animating"),this.trigger("translated")},e.prototype.viewport=function(){var d;return this.options.responsiveBaseElement!==b?d=a(this.options.responsiveBaseElement).width():b.innerWidth?d=b.innerWidth:c.documentElement&&c.documentElement.clientWidth?d=c.documentElement.clientWidth:console.warn("Can not detect viewport width."),d},e.prototype.replace=function(b){this.$stage.empty(),this._items=[],b&&(b=b instanceof jQuery?b:a(b)),this.settings.nestedItemSelector&&(b=b.find("."+this.settings.nestedItemSelector)),b.filter(function(){return 1===this.nodeType}).each(a.proxy(function(a,b){b=this.prepare(b),this.$stage.append(b),this._items.push(b),this._mergers.push(1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)},this)),this.reset(this.isNumeric(this.settings.startPosition)?this.settings.startPosition:0),this.invalidate("items")},e.prototype.add=function(b,c){var e=this.relative(this._current);c=c===d?this._items.length:this.normalize(c,!0),b=b instanceof jQuery?b:a(b),this.trigger("add",{content:b,position:c}),b=this.prepare(b),0===this._items.length||c===this._items.length?(0===this._items.length&&this.$stage.append(b),0!==this._items.length&&this._items[c-1].after(b),this._items.push(b),this._mergers.push(1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)):(this._items[c].before(b),this._items.splice(c,0,b),this._mergers.splice(c,0,1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)),this._items[e]&&this.reset(this._items[e].index()),this.invalidate("items"),this.trigger("added",{content:b,position:c})},e.prototype.remove=function(a){(a=this.normalize(a,!0))!==d&&(this.trigger("remove",{content:this._items[a],position:a}),this._items[a].remove(),this._items.splice(a,1),this._mergers.splice(a,1),this.invalidate("items"),this.trigger("removed",{content:null,position:a}))},e.prototype.preloadAutoWidthImages=function(b){b.each(a.proxy(function(b,c){this.enter("pre-loading"),c=a(c),a(new Image).one("load",a.proxy(function(a){c.attr("src",a.target.src),c.css("opacity",1),this.leave("pre-loading"),!this.is("pre-loading")&&!this.is("initializing")&&this.refresh()},this)).attr("src",c.attr("src")||c.attr("data-src")||c.attr("data-src-retina"))},this))},e.prototype.destroy=function(){this.$element.off(".owl.core"),this.$stage.off(".owl.core"),a(c).off(".owl.core"),!1!==this.settings.responsive&&(b.clearTimeout(this.resizeTimer),this.off(b,"resize",this._handlers.onThrottledResize));for(var d in this._plugins)this._plugins[d].destroy();this.$stage.children(".cloned").remove(),this.$stage.unwrap(),this.$stage.children().contents().unwrap(),this.$stage.children().unwrap(),this.$stage.remove(),this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class",this.$element.attr("class").replace(new RegExp(this.options.responsiveClass+"-\\S+\\s","g"),"")).removeData("owl.carousel")},e.prototype.op=function(a,b,c){var d=this.settings.rtl;switch(b){case"<":return d?a>c:a<c;case">":return d?a<c:a>c;case">=":return d?a<=c:a>=c;case"<=":return d?a>=c:a<=c}},e.prototype.on=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,d):a.attachEvent&&a.attachEvent("on"+b,c)},e.prototype.off=function(a,b,c,d){a.removeEventListener?a.removeEventListener(b,c,d):a.detachEvent&&a.detachEvent("on"+b,c)},e.prototype.trigger=function(b,c,d,f,g){var h={item:{count:this._items.length,index:this.current()}},i=a.camelCase(a.grep(["on",b,d],function(a){return a}).join("-").toLowerCase()),j=a.Event([b,"owl",d||"carousel"].join(".").toLowerCase(),a.extend({relatedTarget:this},h,c));return this._supress[b]||(a.each(this._plugins,function(a,b){b.onTrigger&&b.onTrigger(j)}),this.register({type:e.Type.Event,name:b}),this.$element.trigger(j),this.settings&&"function"==typeof this.settings[i]&&this.settings[i].call(this,j)),j},e.prototype.enter=function(b){a.each([b].concat(this._states.tags[b]||[]),a.proxy(function(a,b){this._states.current[b]===d&&(this._states.current[b]=0),this._states.current[b]++},this))},e.prototype.leave=function(b){a.each([b].concat(this._states.tags[b]||[]),a.proxy(function(a,b){this._states.current[b]--},this))},e.prototype.register=function(b){if(b.type===e.Type.Event){if(a.event.special[b.name]||(a.event.special[b.name]={}),!a.event.special[b.name].owl){var c=a.event.special[b.name]._default;a.event.special[b.name]._default=function(a){return!c||!c.apply||a.namespace&&-1!==a.namespace.indexOf("owl")?a.namespace&&a.namespace.indexOf("owl")>-1:c.apply(this,arguments)},a.event.special[b.name].owl=!0}}else b.type===e.Type.State&&(this._states.tags[b.name]?this._states.tags[b.name]=this._states.tags[b.name].concat(b.tags):this._states.tags[b.name]=b.tags,this._states.tags[b.name]=a.grep(this._states.tags[b.name],a.proxy(function(c,d){return a.inArray(c,this._states.tags[b.name])===d},this)))},e.prototype.suppress=function(b){a.each(b,a.proxy(function(a,b){this._supress[b]=!0},this))},e.prototype.release=function(b){a.each(b,a.proxy(function(a,b){delete this._supress[b]},this))},e.prototype.pointer=function(a){var c={x:null,y:null};return a=a.originalEvent||a||b.event,a=a.touches&&a.touches.length?a.touches[0]:a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:a,a.pageX?(c.x=a.pageX,c.y=a.pageY):(c.x=a.clientX,c.y=a.clientY),c},e.prototype.isNumeric=function(a){return!isNaN(parseFloat(a))},e.prototype.difference=function(a,b){return{x:a.x-b.x,y:a.y-b.y}},a.fn.owlCarousel=function(b){var c=Array.prototype.slice.call(arguments,1);return this.each(function(){var d=a(this),f=d.data("owl.carousel");f||(f=new e(this,"object"==typeof b&&b),d.data("owl.carousel",f),a.each(["next","prev","to","destroy","refresh","replace","add","remove"],function(b,c){f.register({type:e.Type.Event,name:c}),f.$element.on(c+".owl.carousel.core",a.proxy(function(a){a.namespace&&a.relatedTarget!==this&&(this.suppress([c]),f[c].apply(this,[].slice.call(arguments,1)),this.release([c]))},f))})),"string"==typeof b&&"_"!==b.charAt(0)&&f[b].apply(f,c)})},a.fn.owlCarousel.Constructor=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._interval=null,this._visible=null,this._handlers={"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoRefresh&&this.watch()},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers)};e.Defaults={autoRefresh:!0,autoRefreshInterval:500},e.prototype.watch=function(){this._interval||(this._visible=this._core.isVisible(),this._interval=b.setInterval(a.proxy(this.refresh,this),this._core.settings.autoRefreshInterval))},e.prototype.refresh=function(){this._core.isVisible()!==this._visible&&(this._visible=!this._visible,this._core.$element.toggleClass("owl-hidden",!this._visible),this._visible&&this._core.invalidate("width")&&this._core.refresh())},e.prototype.destroy=function(){var a,c;b.clearInterval(this._interval);for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},a.fn.owlCarousel.Constructor.Plugins.AutoRefresh=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._loaded=[],this._handlers={"initialized.owl.carousel change.owl.carousel resized.owl.carousel":a.proxy(function(b){if(b.namespace&&this._core.settings&&this._core.settings.lazyLoad&&(b.property&&"position"==b.property.name||"initialized"==b.type)){var c=this._core.settings,e=c.center&&Math.ceil(c.items/2)||c.items,f=c.center&&-1*e||0,g=(b.property&&b.property.value!==d?b.property.value:this._core.current())+f,h=this._core.clones().length,i=a.proxy(function(a,b){this.load(b)},this);for(c.lazyLoadEager>0&&(e+=c.lazyLoadEager,c.loop&&(g-=c.lazyLoadEager,e++));f++<e;)this.load(h/2+this._core.relative(g)),h&&a.each(this._core.clones(this._core.relative(g)),i),g++}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers)};e.Defaults={lazyLoad:!1,lazyLoadEager:0},e.prototype.load=function(c){var d=this._core.$stage.children().eq(c),e=d&&d.find(".owl-lazy");!e||a.inArray(d.get(0),this._loaded)>-1||(e.each(a.proxy(function(c,d){var e,f=a(d),g=b.devicePixelRatio>1&&f.attr("data-src-retina")||f.attr("data-src")||f.attr("data-srcset");this._core.trigger("load",{element:f,url:g},"lazy"),f.is("img")?f.one("load.owl.lazy",a.proxy(function(){f.css("opacity",1),this._core.trigger("loaded",{element:f,url:g},"lazy")},this)).attr("src",g):f.is("source")?f.one("load.owl.lazy",a.proxy(function(){this._core.trigger("loaded",{element:f,url:g},"lazy")},this)).attr("srcset",g):(e=new Image,e.onload=a.proxy(function(){f.css({"background-image":'url("'+g+'")',opacity:"1"}),this._core.trigger("loaded",{element:f,url:g},"lazy")},this),e.src=g)},this)),this._loaded.push(d.get(0)))},e.prototype.destroy=function(){var a,b;for(a in this.handlers)this._core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Lazy=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(c){this._core=c,this._previousHeight=null,this._handlers={"initialized.owl.carousel refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&this.update()},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&"position"===a.property.name&&this.update()},this),"loaded.owl.lazy":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&a.element.closest("."+this._core.settings.itemClass).index()===this._core.current()&&this.update()},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers),this._intervalId=null;var d=this;a(b).on("load",function(){d._core.settings.autoHeight&&d.update()}),a(b).resize(function(){d._core.settings.autoHeight&&(null!=d._intervalId&&clearTimeout(d._intervalId),d._intervalId=setTimeout(function(){d.update()},250))})};e.Defaults={autoHeight:!1,autoHeightClass:"owl-height"},e.prototype.update=function(){var b=this._core._current,c=b+this._core.settings.items,d=this._core.settings.lazyLoad,e=this._core.$stage.children().toArray().slice(b,c),f=[],g=0;a.each(e,function(b,c){f.push(a(c).height())}),g=Math.max.apply(null,f),g<=1&&d&&this._previousHeight&&(g=this._previousHeight),this._previousHeight=g,this._core.$stage.parent().height(g).addClass(this._core.settings.autoHeightClass)},e.prototype.destroy=function(){var a,b;for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.AutoHeight=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._videos={},this._playing=null,this._handlers={"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.register({type:"state",name:"playing",tags:["interacting"]})},this),"resize.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.video&&this.isInFullScreen()&&a.preventDefault()},this),"refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.is("resizing")&&this._core.$stage.find(".cloned .owl-video-frame").remove()},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&"position"===a.property.name&&this._playing&&this.stop()},this),"prepared.owl.carousel":a.proxy(function(b){if(b.namespace){var c=a(b.content).find(".owl-video");c.length&&(c.css("display","none"),this.fetch(c,a(b.content)))}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers),this._core.$element.on("click.owl.video",".owl-video-play-icon",a.proxy(function(a){this.play(a)},this))};e.Defaults={video:!1,videoHeight:!1,videoWidth:!1},e.prototype.fetch=function(a,b){var c=function(){return a.attr("data-vimeo-id")?"vimeo":a.attr("data-vzaar-id")?"vzaar":"youtube"}(),d=a.attr("data-vimeo-id")||a.attr("data-youtube-id")||a.attr("data-vzaar-id"),e=a.attr("data-width")||this._core.settings.videoWidth,f=a.attr("data-height")||this._core.settings.videoHeight,g=a.attr("href");if(!g)throw new Error("Missing video URL.");if(d=g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/),d[3].indexOf("youtu")>-1)c="youtube";else if(d[3].indexOf("vimeo")>-1)c="vimeo";else{if(!(d[3].indexOf("vzaar")>-1))throw new Error("Video URL not supported.");c="vzaar"}d=d[6],this._videos[g]={type:c,id:d,width:e,height:f},b.attr("data-video",g),this.thumbnail(a,this._videos[g])},e.prototype.thumbnail=function(b,c){var d,e,f,g=c.width&&c.height?"width:"+c.width+"px;height:"+c.height+"px;":"",h=b.find("img"),i="src",j="",k=this._core.settings,l=function(c){e='<div class="owl-video-play-icon"></div>',d=k.lazyLoad?a("<div/>",{class:"owl-video-tn "+j,srcType:c}):a("<div/>",{class:"owl-video-tn",style:"opacity:1;background-image:url("+c+")"}),b.after(d),b.after(e)};if(b.wrap(a("<div/>",{class:"owl-video-wrapper",style:g})),this._core.settings.lazyLoad&&(i="data-src",j="owl-lazy"),h.length)return l(h.attr(i)),h.remove(),!1;"youtube"===c.type?(f="//img.youtube.com/vi/"+c.id+"/hqdefault.jpg",l(f)):"vimeo"===c.type?a.ajax({type:"GET",url:"//vimeo.com/api/v2/video/"+c.id+".json",jsonp:"callback",dataType:"jsonp",success:function(a){f=a[0].thumbnail_large,l(f)}}):"vzaar"===c.type&&a.ajax({type:"GET",url:"//vzaar.com/api/videos/"+c.id+".json",jsonp:"callback",dataType:"jsonp",success:function(a){f=a.framegrab_url,l(f)}})},e.prototype.stop=function(){this._core.trigger("stop",null,"video"),this._playing.find(".owl-video-frame").remove(),this._playing.removeClass("owl-video-playing"),this._playing=null,this._core.leave("playing"),this._core.trigger("stopped",null,"video")},e.prototype.play=function(b){var c,d=a(b.target),e=d.closest("."+this._core.settings.itemClass),f=this._videos[e.attr("data-video")],g=f.width||"100%",h=f.height||this._core.$stage.height();this._playing||(this._core.enter("playing"),this._core.trigger("play",null,"video"),e=this._core.items(this._core.relative(e.index())),this._core.reset(e.index()),c=a('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>'),c.attr("height",h),c.attr("width",g),"youtube"===f.type?c.attr("src","//www.youtube.com/embed/"+f.id+"?autoplay=1&rel=0&v="+f.id):"vimeo"===f.type?c.attr("src","//player.vimeo.com/video/"+f.id+"?autoplay=1"):"vzaar"===f.type&&c.attr("src","//view.vzaar.com/"+f.id+"/player?autoplay=true"),a(c).wrap('<div class="owl-video-frame" />').insertAfter(e.find(".owl-video")),this._playing=e.addClass("owl-video-playing"))},e.prototype.isInFullScreen=function(){var b=c.fullscreenElement||c.mozFullScreenElement||c.webkitFullscreenElement;return b&&a(b).parent().hasClass("owl-video-frame")},e.prototype.destroy=function(){var a,b;this._core.$element.off("click.owl.video");for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Video=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this.core=b,this.core.options=a.extend({},e.Defaults,this.core.options),this.swapping=!0,this.previous=d,this.next=d,this.handlers={"change.owl.carousel":a.proxy(function(a){a.namespace&&"position"==a.property.name&&(this.previous=this.core.current(),this.next=a.property.value)},this),"drag.owl.carousel dragged.owl.carousel translated.owl.carousel":a.proxy(function(a){a.namespace&&(this.swapping="translated"==a.type)},this),"translate.owl.carousel":a.proxy(function(a){a.namespace&&this.swapping&&(this.core.options.animateOut||this.core.options.animateIn)&&this.swap()},this)},this.core.$element.on(this.handlers)};e.Defaults={animateOut:!1,
animateIn:!1},e.prototype.swap=function(){if(1===this.core.settings.items&&a.support.animation&&a.support.transition){this.core.speed(0);var b,c=a.proxy(this.clear,this),d=this.core.$stage.children().eq(this.previous),e=this.core.$stage.children().eq(this.next),f=this.core.settings.animateIn,g=this.core.settings.animateOut;this.core.current()!==this.previous&&(g&&(b=this.core.coordinates(this.previous)-this.core.coordinates(this.next),d.one(a.support.animation.end,c).css({left:b+"px"}).addClass("animated owl-animated-out").addClass(g)),f&&e.one(a.support.animation.end,c).addClass("animated owl-animated-in").addClass(f))}},e.prototype.clear=function(b){a(b.target).css({left:""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut),this.core.onTransitionEnd()},e.prototype.destroy=function(){var a,b;for(a in this.handlers)this.core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Animate=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._call=null,this._time=0,this._timeout=0,this._paused=!0,this._handlers={"changed.owl.carousel":a.proxy(function(a){a.namespace&&"settings"===a.property.name?this._core.settings.autoplay?this.play():this.stop():a.namespace&&"position"===a.property.name&&this._paused&&(this._time=0)},this),"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoplay&&this.play()},this),"play.owl.autoplay":a.proxy(function(a,b,c){a.namespace&&this.play(b,c)},this),"stop.owl.autoplay":a.proxy(function(a){a.namespace&&this.stop()},this),"mouseover.owl.autoplay":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"mouseleave.owl.autoplay":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.play()},this),"touchstart.owl.core":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"touchend.owl.core":a.proxy(function(){this._core.settings.autoplayHoverPause&&this.play()},this)},this._core.$element.on(this._handlers),this._core.options=a.extend({},e.Defaults,this._core.options)};e.Defaults={autoplay:!1,autoplayTimeout:5e3,autoplayHoverPause:!1,autoplaySpeed:!1},e.prototype._next=function(d){this._call=b.setTimeout(a.proxy(this._next,this,d),this._timeout*(Math.round(this.read()/this._timeout)+1)-this.read()),this._core.is("interacting")||c.hidden||this._core.next(d||this._core.settings.autoplaySpeed)},e.prototype.read=function(){return(new Date).getTime()-this._time},e.prototype.play=function(c,d){var e;this._core.is("rotating")||this._core.enter("rotating"),c=c||this._core.settings.autoplayTimeout,e=Math.min(this._time%(this._timeout||c),c),this._paused?(this._time=this.read(),this._paused=!1):b.clearTimeout(this._call),this._time+=this.read()%c-e,this._timeout=c,this._call=b.setTimeout(a.proxy(this._next,this,d),c-e)},e.prototype.stop=function(){this._core.is("rotating")&&(this._time=0,this._paused=!0,b.clearTimeout(this._call),this._core.leave("rotating"))},e.prototype.pause=function(){this._core.is("rotating")&&!this._paused&&(this._time=this.read(),this._paused=!0,b.clearTimeout(this._call))},e.prototype.destroy=function(){var a,b;this.stop();for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.autoplay=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){"use strict";var e=function(b){this._core=b,this._initialized=!1,this._pages=[],this._controls={},this._templates=[],this.$element=this._core.$element,this._overrides={next:this._core.next,prev:this._core.prev,to:this._core.to},this._handlers={"prepared.owl.carousel":a.proxy(function(b){b.namespace&&this._core.settings.dotsData&&this._templates.push('<div class="'+this._core.settings.dotClass+'">'+a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot")+"</div>")},this),"added.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.dotsData&&this._templates.splice(a.position,0,this._templates.pop())},this),"remove.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.dotsData&&this._templates.splice(a.position,1)},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&"position"==a.property.name&&this.draw()},this),"initialized.owl.carousel":a.proxy(function(a){a.namespace&&!this._initialized&&(this._core.trigger("initialize",null,"navigation"),this.initialize(),this.update(),this.draw(),this._initialized=!0,this._core.trigger("initialized",null,"navigation"))},this),"refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._initialized&&(this._core.trigger("refresh",null,"navigation"),this.update(),this.draw(),this._core.trigger("refreshed",null,"navigation"))},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this.$element.on(this._handlers)};e.Defaults={nav:!1,navText:['<span aria-label="Previous">&#x2039;</span>','<span aria-label="Next">&#x203a;</span>'],navSpeed:!1,navElement:'button type="button" role="presentation"',navContainer:!1,navContainerClass:"owl-nav",navClass:["owl-prev","owl-next"],slideBy:1,dotClass:"owl-dot",dotsClass:"owl-dots",dots:!0,dotsEach:!1,dotsData:!1,dotsSpeed:!1,dotsContainer:!1},e.prototype.initialize=function(){var b,c=this._core.settings;this._controls.$relative=(c.navContainer?a(c.navContainer):a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"),this._controls.$previous=a("<"+c.navElement+">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click",a.proxy(function(a){this.prev(c.navSpeed)},this)),this._controls.$next=a("<"+c.navElement+">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click",a.proxy(function(a){this.next(c.navSpeed)},this)),c.dotsData||(this._templates=[a('<button role="button">').addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]),this._controls.$absolute=(c.dotsContainer?a(c.dotsContainer):a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"),this._controls.$absolute.on("click","button",a.proxy(function(b){var d=a(b.target).parent().is(this._controls.$absolute)?a(b.target).index():a(b.target).parent().index();b.preventDefault(),this.to(d,c.dotsSpeed)},this));for(b in this._overrides)this._core[b]=a.proxy(this[b],this)},e.prototype.destroy=function(){var a,b,c,d,e;e=this._core.settings;for(a in this._handlers)this.$element.off(a,this._handlers[a]);for(b in this._controls)"$relative"===b&&e.navContainer?this._controls[b].html(""):this._controls[b].remove();for(d in this.overides)this._core[d]=this._overrides[d];for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},e.prototype.update=function(){var a,b,c,d=this._core.clones().length/2,e=d+this._core.items().length,f=this._core.maximum(!0),g=this._core.settings,h=g.center||g.autoWidth||g.dotsData?1:g.dotsEach||g.items;if("page"!==g.slideBy&&(g.slideBy=Math.min(g.slideBy,g.items)),g.dots||"page"==g.slideBy)for(this._pages=[],a=d,b=0,c=0;a<e;a++){if(b>=h||0===b){if(this._pages.push({start:Math.min(f,a-d),end:a-d+h-1}),Math.min(f,a-d)===f)break;b=0,++c}b+=this._core.mergers(this._core.relative(a))}},e.prototype.draw=function(){var b,c=this._core.settings,d=this._core.items().length<=c.items,e=this._core.relative(this._core.current()),f=c.loop||c.rewind;this._controls.$relative.toggleClass("disabled",!c.nav||d),c.nav&&(this._controls.$previous.toggleClass("disabled",!f&&e<=this._core.minimum(!0)),this._controls.$next.toggleClass("disabled",!f&&e>=this._core.maximum(!0))),this._controls.$absolute.toggleClass("disabled",!c.dots||d),c.dots&&(b=this._pages.length-this._controls.$absolute.children().length,c.dotsData&&0!==b?this._controls.$absolute.html(this._templates.join("")):b>0?this._controls.$absolute.append(new Array(b+1).join(this._templates[0])):b<0&&this._controls.$absolute.children().slice(b).remove(),this._controls.$absolute.find(".active").removeClass("active"),this._controls.$absolute.children().eq(a.inArray(this.current(),this._pages)).addClass("active"))},e.prototype.onTrigger=function(b){var c=this._core.settings;b.page={index:a.inArray(this.current(),this._pages),count:this._pages.length,size:c&&(c.center||c.autoWidth||c.dotsData?1:c.dotsEach||c.items)}},e.prototype.current=function(){var b=this._core.relative(this._core.current());return a.grep(this._pages,a.proxy(function(a,c){return a.start<=b&&a.end>=b},this)).pop()},e.prototype.getPosition=function(b){var c,d,e=this._core.settings;return"page"==e.slideBy?(c=a.inArray(this.current(),this._pages),d=this._pages.length,b?++c:--c,c=this._pages[(c%d+d)%d].start):(c=this._core.relative(this._core.current()),d=this._core.items().length,b?c+=e.slideBy:c-=e.slideBy),c},e.prototype.next=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!0),b)},e.prototype.prev=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!1),b)},e.prototype.to=function(b,c,d){var e;!d&&this._pages.length?(e=this._pages.length,a.proxy(this._overrides.to,this._core)(this._pages[(b%e+e)%e].start,c)):a.proxy(this._overrides.to,this._core)(b,c)},a.fn.owlCarousel.Constructor.Plugins.Navigation=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){"use strict";var e=function(c){this._core=c,this._hashes={},this.$element=this._core.$element,this._handlers={"initialized.owl.carousel":a.proxy(function(c){c.namespace&&"URLHash"===this._core.settings.startPosition&&a(b).trigger("hashchange.owl.navigation")},this),"prepared.owl.carousel":a.proxy(function(b){if(b.namespace){var c=a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");if(!c)return;this._hashes[c]=b.content}},this),"changed.owl.carousel":a.proxy(function(c){if(c.namespace&&"position"===c.property.name){var d=this._core.items(this._core.relative(this._core.current())),e=a.map(this._hashes,function(a,b){return a===d?b:null}).join();if(!e||b.location.hash.slice(1)===e)return;b.location.hash=e}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this.$element.on(this._handlers),a(b).on("hashchange.owl.navigation",a.proxy(function(a){var c=b.location.hash.substring(1),e=this._core.$stage.children(),f=this._hashes[c]&&e.index(this._hashes[c]);f!==d&&f!==this._core.current()&&this._core.to(this._core.relative(f),!1,!0)},this))};e.Defaults={URLhashListener:!1},e.prototype.destroy=function(){var c,d;a(b).off("hashchange.owl.navigation");for(c in this._handlers)this._core.$element.off(c,this._handlers[c]);for(d in Object.getOwnPropertyNames(this))"function"!=typeof this[d]&&(this[d]=null)},a.fn.owlCarousel.Constructor.Plugins.Hash=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){function e(b,c){var e=!1,f=b.charAt(0).toUpperCase()+b.slice(1);return a.each((b+" "+h.join(f+" ")+f).split(" "),function(a,b){if(g[b]!==d)return e=!c||b,!1}),e}function f(a){return e(a,!0)}var g=a("<support>").get(0).style,h="Webkit Moz O ms".split(" "),i={transition:{end:{WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",transition:"transitionend"}},animation:{end:{WebkitAnimation:"webkitAnimationEnd",MozAnimation:"animationend",OAnimation:"oAnimationEnd",animation:"animationend"}}},j={csstransforms:function(){return!!e("transform")},csstransforms3d:function(){return!!e("perspective")},csstransitions:function(){return!!e("transition")},cssanimations:function(){return!!e("animation")}};j.csstransitions()&&(a.support.transition=new String(f("transition")),a.support.transition.end=i.transition.end[a.support.transition]),j.cssanimations()&&(a.support.animation=new String(f("animation")),a.support.animation.end=i.animation.end[a.support.animation]),j.csstransforms()&&(a.support.transform=new String(f("transform")),a.support.transform3d=j.csstransforms3d())}(window.Zepto||window.jQuery,window,document);

/*!
 * Lightbox v2.11.2
 * by Lokesh Dhakar
 *
 * More info:
 * http://lokeshdhakar.com/projects/lightbox2/
 *
 * Copyright Lokesh Dhakar
 * Released under the MIT license
 * https://github.com/lokesh/lightbox2/blob/master/LICENSE
 *
 * @preserve
 */

// Uses Node, AMD or browser globals to create a module.
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory(require('jquery'));
    } else {
        // Browser globals (root is window)
        root.lightbox = factory(root.jQuery);
    }
}(this, function ($) {

  function Lightbox(options) {
    this.album = [];
    this.currentImageIndex = void 0;
    this.init();

    // options
    this.options = $.extend({}, this.constructor.defaults);
    this.option(options);
  }

  // Descriptions of all options available on the demo site:
  // http://lokeshdhakar.com/projects/lightbox2/index.html#options
  Lightbox.defaults = {
    albumLabel: 'Image %1 of %2',
    alwaysShowNavOnTouchDevices: false,
    fadeDuration: 600,
    fitImagesInViewport: true,
    imageFadeDuration: 600,
    // maxWidth: 800,
    // maxHeight: 600,
    positionFromTop: 50,
    resizeDuration: 700,
    showImageNumberLabel: true,
    wrapAround: false,
    disableScrolling: false,
    /*
    Sanitize Title
    If the caption data is trusted, for example you are hardcoding it in, then leave this to false.
    This will free you to add html tags, such as links, in the caption.

    If the caption data is user submitted or from some other untrusted source, then set this to true
    to prevent xss and other injection attacks.
     */
    sanitizeTitle: false
  };

  Lightbox.prototype.option = function(options) {
    $.extend(this.options, options);
  };

  Lightbox.prototype.imageCountLabel = function(currentImageNum, totalImages) {
    return this.options.albumLabel.replace(/%1/g, currentImageNum).replace(/%2/g, totalImages);
  };

  Lightbox.prototype.init = function() {
    var self = this;
    // Both enable and build methods require the body tag to be in the DOM.
    $(document).ready(function() {
      self.enable();
      self.build();
    });
  };

  // Loop through anchors and areamaps looking for either data-lightbox attributes or rel attributes
  // that contain 'lightbox'. When these are clicked, start lightbox.
  Lightbox.prototype.enable = function() {
    var self = this;
    $('body').on('click', 'a[rel^=lightbox], area[rel^=lightbox], a[data-lightbox], area[data-lightbox]', function(event) {
      self.start($(event.currentTarget));
      return false;
    });
  };

  // Build html for the lightbox and the overlay.
  // Attach event handlers to the new DOM elements. click click click
  Lightbox.prototype.build = function() {
    if ($('#lightbox').length > 0) {
        return;
    }

    var self = this;

    // The two root notes generated, #lightboxOverlay and #lightbox are given
    // tabindex attrs so they are focusable. We attach our keyboard event
    // listeners to these two elements, and not the document. Clicking anywhere
    // while Lightbox is opened will keep the focus on or inside one of these
    // two elements.
    //
    // We do this so we can prevent propogation of the Esc keypress when
    // Lightbox is open. This prevents it from intefering with other components
    // on the page below.
    //
    // Github issue: https://github.com/lokesh/lightbox2/issues/663
    $('<div id="lightboxOverlay" tabindex="-1" class="lightboxOverlay"></div><div id="lightbox" tabindex="-1" class="lightbox"><div class="lb-outerContainer"><div class="lb-container"><img class="lb-image" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" alt=""/><div class="lb-nav"><a class="lb-prev" aria-label="Previous image" href="" ></a><a class="lb-next" aria-label="Next image" href="" ></a></div><div class="lb-loader"><a class="lb-cancel"></a></div></div></div><div class="lb-dataContainer"><div class="lb-data"><div class="lb-details"><span class="lb-caption"></span><span class="lb-number"></span></div><div class="lb-closeContainer"><a class="lb-close"></a></div></div></div></div>').appendTo($('body'));

    // Cache jQuery objects
    this.$lightbox       = $('#lightbox');
    this.$overlay        = $('#lightboxOverlay');
    this.$outerContainer = this.$lightbox.find('.lb-outerContainer');
    this.$container      = this.$lightbox.find('.lb-container');
    this.$image          = this.$lightbox.find('.lb-image');
    this.$nav            = this.$lightbox.find('.lb-nav');

    // Store css values for future lookup
    this.containerPadding = {
      top: parseInt(this.$container.css('padding-top'), 10),
      right: parseInt(this.$container.css('padding-right'), 10),
      bottom: parseInt(this.$container.css('padding-bottom'), 10),
      left: parseInt(this.$container.css('padding-left'), 10)
    };

    this.imageBorderWidth = {
      top: parseInt(this.$image.css('border-top-width'), 10),
      right: parseInt(this.$image.css('border-right-width'), 10),
      bottom: parseInt(this.$image.css('border-bottom-width'), 10),
      left: parseInt(this.$image.css('border-left-width'), 10)
    };

    // Attach event handlers to the newly minted DOM elements
    this.$overlay.hide().on('click', function() {
      self.end();
      return false;
    });

    this.$lightbox.hide().on('click', function(event) {
      if ($(event.target).attr('id') === 'lightbox') {
        self.end();
      }
    });

    this.$outerContainer.on('click', function(event) {
      if ($(event.target).attr('id') === 'lightbox') {
        self.end();
      }
      return false;
    });

    this.$lightbox.find('.lb-prev').on('click', function() {
      if (self.currentImageIndex === 0) {
        self.changeImage(self.album.length - 1);
      } else {
        self.changeImage(self.currentImageIndex - 1);
      }
      return false;
    });

    this.$lightbox.find('.lb-next').on('click', function() {
      if (self.currentImageIndex === self.album.length - 1) {
        self.changeImage(0);
      } else {
        self.changeImage(self.currentImageIndex + 1);
      }
      return false;
    });

    /*
      Show context menu for image on right-click

      There is a div containing the navigation that spans the entire image and lives above of it. If
      you right-click, you are right clicking this div and not the image. This prevents users from
      saving the image or using other context menu actions with the image.

      To fix this, when we detect the right mouse button is pressed down, but not yet clicked, we
      set pointer-events to none on the nav div. This is so that the upcoming right-click event on
      the next mouseup will bubble down to the image. Once the right-click/contextmenu event occurs
      we set the pointer events back to auto for the nav div so it can capture hover and left-click
      events as usual.
     */
    this.$nav.on('mousedown', function(event) {
      if (event.which === 3) {
        self.$nav.css('pointer-events', 'none');

        self.$lightbox.one('contextmenu', function() {
          setTimeout(function() {
              this.$nav.css('pointer-events', 'auto');
          }.bind(self), 0);
        });
      }
    });


    this.$lightbox.find('.lb-loader, .lb-close').on('click', function() {
      self.end();
      return false;
    });
  };

  // Show overlay and lightbox. If the image is part of a set, add siblings to album array.
  Lightbox.prototype.start = function($link) {
    var self    = this;
    var $window = $(window);

    $window.on('resize', $.proxy(this.sizeOverlay, this));

    this.sizeOverlay();

    this.album = [];
    this.$triggerElement = $link;
    var imageNumber = 0;

    function addToAlbum($link) {
      self.album.push({
        alt: $link.attr('data-alt'),
        link: $link.attr('href'),
        title: $link.attr('data-title') || $link.attr('title')
      });
    }

    // Support both data-lightbox attribute and rel attribute implementations
    var dataLightboxValue = $link.attr('data-lightbox');
    var $links;

    if (dataLightboxValue) {
      $links = $($link.prop('tagName') + '[data-lightbox="' + dataLightboxValue + '"]');
      for (var i = 0; i < $links.length; i = ++i) {
        addToAlbum($($links[i]));
        if ($links[i] === $link[0]) {
          imageNumber = i;
        }
      }
    } else {
      if ($link.attr('rel') === 'lightbox') {
        // If image is not part of a set
        addToAlbum($link);
      } else {
        // If image is part of a set
        $links = $($link.prop('tagName') + '[rel="' + $link.attr('rel') + '"]');
        for (var j = 0; j < $links.length; j = ++j) {
          addToAlbum($($links[j]));
          if ($links[j] === $link[0]) {
            imageNumber = j;
          }
        }
      }
    }

    // Position Lightbox
    var top  = $window.scrollTop() + this.options.positionFromTop;
    var left = $window.scrollLeft();
    this.$lightbox.css({
      top: top + 'px',
      left: left + 'px'
    }).fadeIn(this.options.fadeDuration);

    // Disable scrolling of the page while open
    if (this.options.disableScrolling) {
      $('body').addClass('lb-disable-scrolling');
    }

    this.changeImage(imageNumber);
  };

  // Hide most UI elements in preparation for the animated resizing of the lightbox.
  Lightbox.prototype.changeImage = function(imageNumber) {
    var self = this;
    var filename = this.album[imageNumber].link;
    var filetype = filename.split('.').slice(-1)[0];
    var $image = this.$lightbox.find('.lb-image');

    // Disable keyboard nav during transitions
    this.disableKeyboardNav();

    // Show loading state
    this.$overlay.fadeIn(this.options.fadeDuration);
    $('.lb-loader').fadeIn('slow');
    this.$lightbox.find('.lb-image, .lb-nav, .lb-prev, .lb-next, .lb-dataContainer, .lb-numbers, .lb-caption').hide();
    this.$outerContainer.addClass('animating');

    // When image to show is preloaded, we send the width and height to sizeContainer()
    var preloader = new Image();
    preloader.onload = function() {
      var $preloader;
      var imageHeight;
      var imageWidth;
      var maxImageHeight;
      var maxImageWidth;
      var windowHeight;
      var windowWidth;

      $image.attr({
        'alt': self.album[imageNumber].alt,
        'src': filename
      });

      $preloader = $(preloader);

      $image.width(preloader.width);
      $image.height(preloader.height);
      windowWidth = $(window).width();
      windowHeight = $(window).height();

      // Calculate the max image dimensions for the current viewport.
      // Take into account the border around the image and an additional 10px gutter on each side.
      maxImageWidth  = windowWidth - self.containerPadding.left - self.containerPadding.right - self.imageBorderWidth.left - self.imageBorderWidth.right - 20;
      maxImageHeight = windowHeight - self.containerPadding.top - self.containerPadding.bottom - self.imageBorderWidth.top - self.imageBorderWidth.bottom - self.options.positionFromTop - 70;

      /*
      Since many SVGs have small intrinsic dimensions, but they support scaling
      up without quality loss because of their vector format, max out their
      size.
      */
      if (filetype === 'svg') {
        $image.width(maxImageWidth);
        $image.height(maxImageHeight);
      }

      // Fit image inside the viewport.
      if (self.options.fitImagesInViewport) {

        // Check if image size is larger then maxWidth|maxHeight in settings
        if (self.options.maxWidth && self.options.maxWidth < maxImageWidth) {
          maxImageWidth = self.options.maxWidth;
        }
        if (self.options.maxHeight && self.options.maxHeight < maxImageHeight) {
          maxImageHeight = self.options.maxHeight;
        }

      } else {
        maxImageWidth = self.options.maxWidth || preloader.width || maxImageWidth;
        maxImageHeight = self.options.maxHeight || preloader.height || maxImageHeight;
      }

      // Is the current image's width or height is greater than the maxImageWidth or maxImageHeight
      // option than we need to size down while maintaining the aspect ratio.
      if ((preloader.width > maxImageWidth) || (preloader.height > maxImageHeight)) {
        if ((preloader.width / maxImageWidth) > (preloader.height / maxImageHeight)) {
          imageWidth  = maxImageWidth;
          imageHeight = parseInt(preloader.height / (preloader.width / imageWidth), 10);
          $image.width(imageWidth);
          $image.height(imageHeight);
        } else {
          imageHeight = maxImageHeight;
          imageWidth = parseInt(preloader.width / (preloader.height / imageHeight), 10);
          $image.width(imageWidth);
          $image.height(imageHeight);
        }
      }
      self.sizeContainer($image.width(), $image.height());
    };

    // Preload image before showing
    preloader.src = this.album[imageNumber].link;
    this.currentImageIndex = imageNumber;
  };

  // Stretch overlay to fit the viewport
  Lightbox.prototype.sizeOverlay = function() {
    var self = this;
    /*
    We use a setTimeout 0 to pause JS execution and let the rendering catch-up.
    Why do this? If the `disableScrolling` option is set to true, a class is added to the body
    tag that disables scrolling and hides the scrollbar. We want to make sure the scrollbar is
    hidden before we measure the document width, as the presence of the scrollbar will affect the
    number.
    */
    setTimeout(function() {
      self.$overlay
        .width($(document).width())
        .height($(document).height());

    }, 0);
  };

  // Animate the size of the lightbox to fit the image we are showing
  // This method also shows the the image.
  Lightbox.prototype.sizeContainer = function(imageWidth, imageHeight) {
    var self = this;

    var oldWidth  = this.$outerContainer.outerWidth();
    var oldHeight = this.$outerContainer.outerHeight();
    var newWidth  = imageWidth + this.containerPadding.left + this.containerPadding.right + this.imageBorderWidth.left + this.imageBorderWidth.right;
    var newHeight = imageHeight + this.containerPadding.top + this.containerPadding.bottom + this.imageBorderWidth.top + this.imageBorderWidth.bottom;

    function postResize() {
      self.$lightbox.find('.lb-dataContainer').width(newWidth);
      self.$lightbox.find('.lb-prevLink').height(newHeight);
      self.$lightbox.find('.lb-nextLink').height(newHeight);

      // Set focus on one of the two root nodes so keyboard events are captured.
      self.$overlay.focus();

      self.showImage();
    }

    if (oldWidth !== newWidth || oldHeight !== newHeight) {
      this.$outerContainer.animate({
        width: newWidth,
        height: newHeight
      }, this.options.resizeDuration, 'swing', function() {
        postResize();
      });
    } else {
      postResize();
    }
  };

  // Display the image and its details and begin preload neighboring images.
  Lightbox.prototype.showImage = function() {
    this.$lightbox.find('.lb-loader').stop(true).hide();
    this.$lightbox.find('.lb-image').fadeIn(this.options.imageFadeDuration);

    this.updateNav();
    this.updateDetails();
    this.preloadNeighboringImages();
    this.enableKeyboardNav();
  };

  // Display previous and next navigation if appropriate.
  Lightbox.prototype.updateNav = function() {
    // Check to see if the browser supports touch events. If so, we take the conservative approach
    // and assume that mouse hover events are not supported and always show prev/next navigation
    // arrows in image sets.
    var alwaysShowNav = false;
    try {
      document.createEvent('TouchEvent');
      alwaysShowNav = (this.options.alwaysShowNavOnTouchDevices) ? true : false;
    } catch (e) {}

    this.$lightbox.find('.lb-nav').show();

    if (this.album.length > 1) {
      if (this.options.wrapAround) {
        if (alwaysShowNav) {
          this.$lightbox.find('.lb-prev, .lb-next').css('opacity', '1');
        }
        this.$lightbox.find('.lb-prev, .lb-next').show();
      } else {
        if (this.currentImageIndex > 0) {
          this.$lightbox.find('.lb-prev').show();
          if (alwaysShowNav) {
            this.$lightbox.find('.lb-prev').css('opacity', '1');
          }
        }
        if (this.currentImageIndex < this.album.length - 1) {
          this.$lightbox.find('.lb-next').show();
          if (alwaysShowNav) {
            this.$lightbox.find('.lb-next').css('opacity', '1');
          }
        }
      }
    }
  };

  // Display caption, image number, and closing button.
  Lightbox.prototype.updateDetails = function() {
    var self = this;

    // Enable anchor clicks in the injected caption html.
    // Thanks Nate Wright for the fix. @https://github.com/NateWr
    if (typeof this.album[this.currentImageIndex].title !== 'undefined' &&
      this.album[this.currentImageIndex].title !== '') {
      var $caption = this.$lightbox.find('.lb-caption');
      if (this.options.sanitizeTitle) {
        $caption.text(this.album[this.currentImageIndex].title);
      } else {
        $caption.html(this.album[this.currentImageIndex].title);
      }
      $caption.fadeIn('fast');
    }

    if (this.album.length > 1 && this.options.showImageNumberLabel) {
      var labelText = this.imageCountLabel(this.currentImageIndex + 1, this.album.length);
      this.$lightbox.find('.lb-number').text(labelText).fadeIn('fast');
    } else {
      this.$lightbox.find('.lb-number').hide();
    }

    this.$outerContainer.removeClass('animating');

    this.$lightbox.find('.lb-dataContainer').fadeIn(this.options.resizeDuration, function() {
      return self.sizeOverlay();
    });
  };

  // Preload previous and next images in set.
  Lightbox.prototype.preloadNeighboringImages = function() {
    if (this.album.length > this.currentImageIndex + 1) {
      var preloadNext = new Image();
      preloadNext.src = this.album[this.currentImageIndex + 1].link;
    }
    if (this.currentImageIndex > 0) {
      var preloadPrev = new Image();
      preloadPrev.src = this.album[this.currentImageIndex - 1].link;
    }
  };

  Lightbox.prototype.enableKeyboardNav = function() {
    this.$lightbox.on('keyup.keyboard', $.proxy(this.keyboardAction, this));
    this.$overlay.on('keyup.keyboard', $.proxy(this.keyboardAction, this));
  };

  Lightbox.prototype.disableKeyboardNav = function() {
    this.$lightbox.off('.keyboard');
    this.$overlay.off('.keyboard');
  };

  Lightbox.prototype.keyboardAction = function(event) {
    var KEYCODE_ESC        = 27;
    var KEYCODE_LEFTARROW  = 37;
    var KEYCODE_RIGHTARROW = 39;

    var keycode = event.keyCode;
    if (keycode === KEYCODE_ESC) {
      // Prevent bubbling so as to not affect other components on the page.
      event.stopPropagation();
      this.end();
    } else if (keycode === KEYCODE_LEFTARROW) {
      if (this.currentImageIndex !== 0) {
        this.changeImage(this.currentImageIndex - 1);
      } else if (this.options.wrapAround && this.album.length > 1) {
        this.changeImage(this.album.length - 1);
      }
    } else if (keycode === KEYCODE_RIGHTARROW) {
      if (this.currentImageIndex !== this.album.length - 1) {
        this.changeImage(this.currentImageIndex + 1);
      } else if (this.options.wrapAround && this.album.length > 1) {
        this.changeImage(0);
      }
    }
  };

  // Closing time. :-(
  Lightbox.prototype.end = function() {
    this.disableKeyboardNav();
    $(window).off('resize', this.sizeOverlay);
    this.$lightbox.fadeOut(this.options.fadeDuration);
    this.$overlay.fadeOut(this.options.fadeDuration);
    this.$triggerElement.focus();

    if (this.options.disableScrolling) {
      $('body').removeClass('lb-disable-scrolling');
    }
  };

  return new Lightbox();
}));


$(function(){$(".tab-supremefx .list-box li").on("mouseenter touchstart focus",function(){var t=$(this).index();$(this).addClass("hd-active").attr("aria-current",!0).siblings().removeClass("hd-active").attr("aria-current",!1),$(".tab-supremefx .glow li").eq(t).addClass("hd-active").attr("aria-current",!0).siblings().removeClass("hd-active").attr("aria-current",!1)}),$(".more-armoury-ui .list li").click(function(){var t=$(this).index(),a=$(this).parents(".list").next(".screenshot");$(this).addClass("hd-active").attr("aria-current",!0).siblings().removeClass("hd-active").attr("aria-current",!1),a.find(".img").eq(t).fadeIn().attr("aria-current",!0).siblings().hide().attr("aria-current",!1)}),$("#hd .tab-suite .list li").click(function(){var t=$(this).index();$(this).addClass("hd-active").attr("aria-current",!0).siblings().removeClass("hd-active").attr("aria-current",!1),$("#hd .tab-suite .entry").eq(t).fadeIn().attr("aria-current",!0).siblings().hide().attr("aria-current",!1)}),$("#hd .tab-bios .list li").click(function(){var t=$(this).index();$(this).addClass("hd-active").attr("aria-current",!0).siblings().removeClass("hd-active").attr("aria-current",!1),$("#hd .tab-bios .entry").eq(t).fadeIn().attr("aria-current",!0).siblings().hide().attr("aria-current",!1)}),$('#hd .tab-bios .more-btn:not(".add-btn")').click(function(){$(this).parent().hide(),$(this).parent().parent().find(".details").fadeIn()}),$("#hd .tab-bios .close-btn").click(function(){$(this).parent().hide(),$(this).parent().parent().find(".brief").fadeIn()}),$("#hd .tab-bios .add-btn").click(function(){$("#hd .tab-bios .mode-adv-1").hide(),$("#hd .tab-bios .mode-adv-2").fadeIn()}),$("#hd .tab-bios .back-btn").click(function(){$("#hd .tab-bios .mode-adv-2").hide(),$("#hd .tab-bios .mode-adv-1").fadeIn()})});

gsap.registerPlugin(ScrollTrigger),$(function(){function t(t){t.find(".owl-item").attr("aria-current","false"),t.find(".owl-item").find("[tabindex], a, button").attr("tabindex",-1),t.find(".owl-item.active").attr("aria-current","true"),t.find(".owl-item.active").find("[tabindex], a, button").attr("tabindex",0)}function e(t){t.find(".owl-dot").each(function(){var t=$(this).index()+1;$(this).attr("title","Go to Slide"+t)})}function a(t,e,a){t.eq(a).addClass("hd-active").attr("aira-current",!0).siblings().removeClass("hd-active").attr("aira-current",!1),e.eq(a).addClass("hd-active").removeAttr("hidden").siblings().removeClass("hd-active").attr("hidden",!0)}function n(){g.removeClass("hd-active").attr("hidden",!0),g.find("video").trigger("pause"),""!=u&&(u.focus(),u="")}function i(){x&&(++w>k&&(w=0),b.eq(w).trigger("click"))}function r(t){t==$("#pageContent-track_on")[0]?t.currentTime=q+.25:t.currentTime=q,P.each(function(){this.pause()}),t.play()}function o(t,e){T.removeClass("is-playing").attr("aria-current",!1),e?t.removeClass("is-playing").attr("aria-current",!1):t.addClass("is-playing").attr("aria-current",!0)}function s(t,e){t.removeClass("is-open"),t.find(".hd-trigger-dot").removeClass("hd-active").attr("aira-current",!1),e.each(function(){$(this).children(".content-el").removeClass("hd-active").attr("aira-current",!1)})}function c(){z.removeClass("is-open"),j.removeClass("hd-active")}function l(){$powerComponents.removeClass("is-open"),$powerComponents.find(".hd-trigger-dot").removeClass("hd-active").attr("aria-current",!1),C.each(function(){$(this).children(".content-el").removeClass("hd-active").attr("aria-current",!1)})}function d(){B.removeClass("is-open"),N.fadeOut()}$('a[href*="#"]:not([href="#"])').click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var t=$(this.hash);if((t=t.length?t:$("[name="+this.hash.slice(1)+"]")).length)return $("html, body").stop(0,1).animate({scrollTop:t.offset().top-60},1e3),!1}}),function(t){t.off("keydown").on("keydown",function(t){var e=t.keyCode?t.keyCode:t.which;"13"!=e&&"32"!=e||($(this).attr("href"),"32"==e&&t.preventDefault(),$(this).trigger("click"))})}($('a, button, [role="button"], li[tabindex="0"], div[tabindex="0"]')),$("#hd").on("click",".gif-container .vid-control",function(){$(this).toggleClass("hd-active"),$(this).parent().toggleClass("is-reduced-motion")}),$(window).scroll(function(){var t=$(window).scrollTop();window.overviewContents&&(t-=window.overviewContents),t>=50&&$("#hd .hd-section").each(function(e){$(this).position().top<=t+200&&($(".main-nav > li a.hd-active").removeClass("hd-active"),$(".main-nav > li").eq(e).find("a").addClass("hd-active"))})}).scroll(),window.sr=ScrollReveal({reset:!0,mobile:!0,duration:600,origin:"bottom",distance:"50px",opacity:0,scale:1,easing:"cubic-bezier(.38,.02,.52,1.35)"}),sr.reveal("#hd .reveal-animate",{reset:!0,duration:100,opacity:1,distance:0,scale:0,easing:"ease-out",viewFactor:.5,beforeReveal:function(t){$(t).addClass("is-animated")},beforeReset:function(t){$(t).removeClass("is-animated")}}),sr.reveal("#hd video.reveal-video",{reset:!0,duration:0,opacity:1,distance:0,scale:0,easing:"none",viewFactor:.4,beforeReveal:function(t){$(t).trigger("play"),$(t).next().removeClass("hd-active").attr("aria-pressed","false")},beforeReset:function(t){$(t).trigger("pause"),$(t).next().removeClass("hd-active").attr("aria-pressed","true")}}),lightbox.option({resizeDuration:200,showImageNumberLabel:!1,disableScrolling:!0,positionFromTop:100}),$(".sub-tab").each(function(){var t=$(this).children("li:not(.hd-link)"),e=$(this).next().children("div");t.on("click",function(){var n=$(this).index();a(t,e,n)})});$(".title-tab").each(function(){var t=$(this).find("li:not(.hd-link)");t.on("click",function(){var e=$(this).index(),a="#"+$(this).attr("aria-controls"),n=$(a);!function(t,e,a){t.eq(a).addClass("hd-active").attr("aira-current",!0).siblings().removeClass("hd-active").attr("aira-current",!1),e.addClass("hd-active").removeAttr("hidden").siblings().removeClass("hd-active").attr("hidden",!0),t.parents(".sec-spec").length>0&&ScrollTrigger.refresh()}(t,n,e),function(t){var e=t.parent(),a=t.get(0).offsetLeft-100;e.stop(0,1).animate({scrollLeft:a},700)}($(this)),$("html, body").stop(0,0).animate({scrollTop:$(this).offset().top-90},1e3,function(){$(window).trigger("scroll")})})});var h=$(".hd-nav .sub-nav button");$(".section-content");h.on("click",function(){var t=$(this).attr("aria-controls");$('.title-tab [aria-controls="'+t+'"]').trigger("click")}),$(".main-ksp button").each(function(){var t=$(this),e=t.data("target");if(void 0!==e&&!1!==e&&""!==e){var a=e.split(",");t.on("click",function(){a.forEach(function(t,e){0==e?$("#"+t).hasClass("hd-active")?$("html, body").stop(0,1).animate({scrollTop:$('.title-tab [aria-controls="'+t+'"]').offset().top-55},600):$('[aria-controls="'+t+'"]').eq(0).trigger("click"):1==e&&$('[aria-controls="'+t+'"]').eq(0).trigger("click")})})}});var g=$("#pageContent-lightbox-spec"),u="";$("#pageContent-spec-immersion .trigger-video").on("click",function(){u=$(this),g.removeAttr("hidden").addClass("hd-active").trigger("focus"),g.find("video").trigger("play")}),$("#pageContent-lightbox-spec .hd-filter, #pageContent-lightbox-spec .trigger-close").on("click",function(){n()});var p=$(window).height()/2;$(".slider-autoplay").each(function(a,n){function i(){g||(f=0,g=!1,v=setInterval(function(){!function(){if(!g){f+=1/h/m;var e=$(n).find(".owl-dot.active .js-dot-progress");e.parents(".owl-dot").removeClass("complete"),e.css({transform:"translate3d("+(f-100)+"%,0,0)"}),f>=100&&(e.parents(".owl-dot").addClass("complete"),clearInterval(v),0!=$(n).find(".owl-dot.active").next().length?k.trigger("next.owl.carousel"):(c.removeClass("complete"),l.css("transform","translate3d(-100%, 0, 0)"),k.trigger("to.owl.carousel",[0,0,!0])),t(s))}}()},20))}function r(){c.removeClass("complete"),l.css("transform","translate3d(-100%, 0, 0)")}function o(){clearTimeout(v),setTimeout(function(){$(n).find(".animated").removeClass("animated owl-animated-in fadeIn owl-animated-out")},1e3),i()}var s=$(n).find(".owl-carousel"),c=$(n).find(".owl-dot"),l=$(n).find(".js-dot-progress"),d=$(n).find("video"),h=2,g=!0,u=!1,v=void 0,f=void 0,m=$(n).data("speed"),C=!1,b=$(n).find(".vid-control.control-slider"),k=s.owlCarousel({items:1,nav:!1,dots:!0,smartSpeed:0,speed:0,dotsContainer:$(n).find(".owl-dots"),mouseDrag:!1,touchDrag:!0,onChange:o,onDrag:r,autoHeight:!0,onInitialized:function(a){t(s),e(s)},onChanged:function(t){d&&$(n).find(".owl-item").eq(t.item.index).find("video").length>0&&(d.trigger("pause"),$(n).find(".owl-item").eq(t.item.index).find("video")[0].currentTime=0,$(n).find(".owl-item").eq(t.item.index).find("video").trigger("play"))}});$(window).on("scroll",function(){if(!C){var t=$(this).scrollTop(),e=$(n).offset().top;t+.3*$(this).height()>e&&!u?(g=!1,i(),u=!0):(t<e-p||t>e+$(this).height()+p)&&(g=!0,clearTimeout(v),u=!1)}}),c.click(function(){b.removeClass("hd-active"),C=!1,g=!1,u=!0,$(n).removeClass("is-paused"),r(),k.trigger("to.owl.carousel",[$(this).index(),0,!0]),t(s),0==$(this).index()&&d&&d.trigger("play")}),b.on("click",function(){$(this).toggleClass("hd-active"),$(this).hasClass("hd-active")?(C=!0,g=!0,u=!1,$(n).addClass("is-paused"),d&&d.each(function(){$(this).trigger("pause")})):(C=!1,g=!1,u=!0,$(n).removeClass("is-paused"),d&&d.each(function(){$(this).trigger("play")}))})}),$(".trigger-initSlider").on("click",function(){!function(a){var n=$(a);n.hasClass("owl-loaded")&&n.owlCarousel("destroy"),n.owlCarousel({items:1,center:!0,loop:!1,dots:!1,mouseDrag:!0,touchDrag:!0,responsive:{0:{nav:!0,startPosition:0},769:{nav:!1,startPosition:1}},onTranslated:function(e){t(n)},onInitialized:function(a){t(n),function(t){t.find(".owl-prev").attr("title","Previous Slide").attr("role","button"),t.find(".owl-next").attr("title","Next Slide").attr("role","button"),t.on("keydown",function(e){37==e.keyCode&&t.trigger("prev.owl"),39==e.keyCode&&t.trigger("next.owl")})}(n),e(n)}}).removeClass("owl-hidden").addClass("owl-carousel")}($(this).data("slider"))});var v,f=$('[aria-controls="pageContent-performance-power"]'),m=$("#pageContent-performance-power figure li"),C=$("#pageContent-performance-power .hd-content li"),b=$("#pageContent-performance-power .hd-dot"),k=m.length-1,w=0,x=!1;f.on("click",function(){b.eq(0).trigger("click")}),b.on("click",function(){var t=$(this).index();a(m,C,w=t),b.eq(w).addClass("hd-active").attr("aria-current",!0).siblings().removeClass("hd-active").attr("aria-current",!1),clearInterval(v),x=!0,$(this).parent().removeClass("is-paused"),v=setInterval(function(){i()},4e3)}),$("#pageContent-performance-power .hd-controller").on("click",function(){$(this).parent().toggleClass("is-paused"),clearInterval(v),$(this).parent().hasClass("is-paused")?x=!1:(x=!0,v=setInterval(function(){i()},4e3))});var y=gsap.timeline();$(window).scrollTop()<100&&(gsap.set(".main-kv .hd-content > *, .main-kv .hd-pd, .main-kv .hd-shadow, .main-kv .pattern-text, .main-kv > .hd-mark, .main-kv .rog-fill, .pattern-strix-right",{autoAlpha:0}),gsap.set(".hd-intro .hd-mark",{autoAlpha:0,rotate:-60,scale:0}),gsap.set(".hd-intro .hd-slogan",{autoAlpha:0,xPercent:10}),gsap.set(".main-kv .rog-line",{autoAlpha:.1}),gsap.set(".main-kv .hd-pd",{xPercent:5,yPercent:5})),y.addLabel("kv-intro").delay(.5).fromTo(".hd-intro .slogan-left",{autoAlpha:1,xPercent:0,duration:.4},{autoAlpha:0,xPercent:-50},"intro-out+=.15").fromTo(".hd-intro .slogan-right",{autoAlpha:1,xPercent:0,duration:.4},{autoAlpha:0,xPercent:50},"intro-out+=.15").fromTo(".hd-intro .hd-mark",{autoAlpha:1,rotate:0,scale:1,duration:.6},{autoAlpha:0,rotate:-60,scale:0},"intro-out+=.25").fromTo(".bg-gradient .colorrun",{webkitFilter:"hue-rotate(0deg)",filter:"hue-rotate(0deg)"},{webkitFilter:"hue-rotate(-40deg)",filter:"hue-rotate(-40deg)",duration:.5},"intro-out+=.25").to(".bg-gradient .colorrun",{webkitFilter:"hue-rotate(0deg)",filter:"hue-rotate(0deg)",duration:3},"kv-in").fromTo(".main-kv .hd-pd",{autoAlpha:0,xPercent:5,yPercent:2},{autoAlpha:1,xPercent:0,yPercent:0,duration:.6},"kv-in").fromTo(".main-kv .hd-shadow",{autoAlpha:0,xPercent:-5,yPercent:-2},{autoAlpha:1,xPercent:0,yPercent:0,duration:1},"kv-in").fromTo(".bg-gradient .rog-fill",{autoAlpha:0,scale:1.2,xPercent:10},{autoAlpha:1,scale:1.2,xPercent:0,yPercent:-8},"kv-in").fromTo(".main-kv .pattern-text",{autoAlpha:0,yPercent:-5},{autoAlpha:1,yPercent:0,duration:.6},"kv-in").fromTo(".main-kv > .hd-mark",{autoAlpha:0,rotate:-60,scale:0},{autoAlpha:1,rotate:0,scale:1,duration:.6},"kv-in").fromTo(".hd-intro .pattern-strix-right",{autoAlpha:0,xPercent:10},{autoAlpha:1,xPercent:0},"kv-in+=.4").fromTo(".main-kv .hd-content > *",{autoAlpha:0,xPercent:-5},{autoAlpha:1,xPercent:0,duration:.8,stagger:.15},"kv-in+=.4").addLabel("end");gsap.timeline({scrollTrigger:{trigger:"#pageContent-diy",start:"center center+=10%",toggleActions:"play complete resume reset"}}).fromTo(".hd-nav .main-nav > li",{autoAlpha:0,xPercent:50},{autoAlpha:1,xPercent:0,stagger:.05},"main-nav").fromTo(".hd-nav .hd-deco",{autoAlpha:0},{autoAlpha:1,duration:.4},"main-nav+=.4");gsap.timeline({scrollTrigger:{trigger:".main-content",start:"top center+=10%",toggleActions:"play complete resume reset"}}).fromTo(".main-content .hd-bg .deco-right",{autoAlpha:0},{autoAlpha:.16},"deco-in").fromTo(".main-content .hd-bg .deco-grid",{autoAlpha:0},{autoAlpha:1,duration:.4},"deco-in").fromTo(".main-content .hd-bg .deco-game",{autoAlpha:0,xPercent:-50},{autoAlpha:1,xPercent:0},"deco-in+=.4");var A=gsap.utils.toArray(".sec-spec .pd-m");ScrollTrigger.matchMedia({"(max-width: 620px)":function(){A.forEach(function(t){gsap.to(t,{scrollTrigger:{trigger:t,endTrigger:".sec-spec",start:"top top+=50",end:"bottom center",pin:t,pinSpacing:!1,scrub:!1,onToggle:function(e){e.isActive?$(t).addClass("is-pin"):$(t).removeClass("is-pin")},onLeave:function(){gsap.to(t,{yPercent:-100,duration:.25})},onEnterBack:function(){gsap.to(t,{yPercent:0,duration:.25})}}})})}});var T=$("#hd .btn-audio"),P=$("#hd audio"),q=0,I=!1;T.on("click",function(){var t=$(this).attr("aria-controls"),e=$("#"+t)[0];(I=!e.paused)?e.pause():r(e),o($(this),I)}),P.each(function(){var t=$(this)[0];t.addEventListener("timeupdate",function(){(q=this.currentTime)>=19.5&&(t.pause(),t.currentTime=0,q=0,I=!1,o($('[aria-controls="'+$(t).attr("id")+'"]'),!0))})});var L=$(".tab-networking"),S=L.find(".hd-cover, .hd-content");L.find(".hd-trigger-dot").on("click",function(){var t=$(this),e=t.index();L.addClass("is-open"),t.addClass("hd-active").attr("aira-current",!0).siblings().removeClass("hd-active").attr("aira-current",!1),S.each(function(){$(this).children(".content-el").eq(e).addClass("hd-active").attr("aira-current",!0).siblings().removeClass("hd-active").attr("aira-current",!1)})}),L.on("click",function(t){$(t.target).parents(".trigger-container").length>0||$(t.target).parents(".hd-content").length>0||s(L,S)}),L.find(".trigger-close").on("click",function(){s(L,S)});var D=$(".tab-supremefx"),F=D.find(".hd-cover, .hd-content");D.find(".hd-trigger-dot").on("click",function(){var t=$(this),e=t.index();D.addClass("is-open"),t.addClass("hd-active").attr("aira-current",!0).siblings().removeClass("hd-active").attr("aira-current",!1),F.each(function(){$(this).children(".content-el").eq(e).addClass("hd-active").attr("aira-current",!0).siblings().removeClass("hd-active").attr("aira-current",!1)})}),D.on("click",function(t){$(t.target).parents(".trigger-container").length>0||$(t.target).parents(".hd-content").length>0||s(D,F)}),D.find(".trigger-close").on("click",function(){s(D,F)});var E=$(".tab-design");E.find(".list li").on("click",function(){var t=$(this),e=t.data("type");if(t.addClass("hd-active").attr("aira-current",!0).siblings().removeClass("hd-active").attr("aira-current",!1),E.find(e).addClass("hd-active").attr("aira-current",!0).siblings().removeClass("hd-active").attr("aira-current",!1),1==t.index()){var a=document.getElementById("pageContent-vid-design");a.currentTime=0,a.play()}}),$(".trigger-video-toggle .vid-control").on("click",function(){var t=$(this).siblings("video");t[0].paused?(t.each(function(){this.play()}),$(this).removeClass("hd-active")):(t.each(function(){this.pause()}),$(this).addClass("hd-active"))});var R=$(".trigger-lightbox-s"),z=R.parents('[role="tabpanel"]'),j=$(".hd-lightbox-s");R.on("click",function(){var t=$(this).parents('[role="tabpanel"]'),e=$("#"+$(this).attr("aria-controls"));t.addClass("is-open"),e.addClass("hd-active")}),j.find(".trigger-close").on("click",function(){c()}),z.on("click",function(t){var e=$(t.target);e.parents(".hd-lightbox-s").length<=0&&e.parents(".trigger-lightbox-s").length<=0&&!e.hasClass("trigger-lightbox-s")&&c()}),$powerComponents=$("#pageContent-performance-power"),C=$powerComponents.find(".hd-cover, .hd-content"),$powerComponents.find(".hd-trigger-dot").on("click",function(){var t=$(this),e=t.index();$powerComponents.addClass("is-open"),t.addClass("hd-active").attr("aria-current",!0).siblings().removeClass("hd-active").attr("aria-current",!1),C.each(function(){$(this).children(".content-el").eq(e).addClass("hd-active").attr("aria-current",!0).siblings().removeClass("hd-active").attr("aria-current",!1)})}),$powerComponents.on("click",function(t){$(t.target).parents(".trigger-container").length>0||$(t.target).parents(".hd-content").length>0||l()}),$powerComponents.find(".trigger-close").on("click",function(){l()});var B=$("#pageContent-style-compatibility"),N=$("#pageContent-compatibilityLightbox");B.find(".trigger-compatibilityLightbox").on("click",function(){B.addClass("is-open"),N.fadeIn()}),N.find(".trigger-close").on("click",function(){d()}),B.on("click",function(t){var e=$(t.target);e.parents("#pageContent-rgb").length<=0&&e.parents(".trigger-compatibilityLightbox").length<=0&&!e.hasClass("trigger-compatibilityLightbox")&&d()}),$(document).on("keydown",function(t){27==t.which&&(n(),s(L,S),s(D,F),c(),d())})});

$(function(){var a=$("#hd #colorpicker"),s=$("#hd #color"),e=$(".starry_night"),t=e.children(),c=$("#hd .tab-lighting .vid-control");$("#hd .hd-controls li").click(function(){var i=$(this),n=i.data("style");switch(i.siblings().removeClass("hd-active"),i.addClass("hd-active"),c.removeClass("hd-active"),s.css("animation-play-state","running"),t.css("animation-play-state","running"),n){case"static":case"breathing":a.fadeIn(),e.fadeOut(),s.removeClass();break;case"music":case"cpu":a.fadeOut(),e.fadeOut(),s.removeClass();break;case"strobing":a.fadeIn(),e.fadeOut(),s.removeClass().addClass("hd-"+n);break;case"cycle":case"rainbow":case"comet":case"flash":case"wave":case"yoyo":case"adaptive":case"dark":a.fadeOut(),e.fadeOut(),s.removeClass().addClass("hd-"+n);break;case"starry":a.fadeIn(),e.fadeIn(),s.removeClass().addClass("hd-starryNight")}var r=i.data("animate")+" infinite";s.css({animation:r})}),c.on("click",function(){$(this).toggleClass("hd-active"),$(this).hasClass("hd-active")?(s.css("animation-play-state","paused"),t.css("animation-play-state","paused")):(s.css("animation-play-state","running"),t.css("animation-play-state","running"))}),a.farbtastic({callback:"#color, .hd-starryNight, .starry_night_color",width:120,colorFocus:"#33feaa"});var i=$.farbtastic("#colorpicker");i.setColor("#ff00ff"),$("#color").change(function(){i.hsl[2]<.2&&$(this).css("background-color","#757575")})});

$(function(){function a(a,t,e){window.dataLayer=window.dataLayer||[],window.dataLayer.push({event:"data_layer_event",event_category_DL:a,event_action_DL:t,event_label_DL:e})}var t="",e="",n="";window.dataLayer=window.dataLayer||[],$("#hd").on("click",'[data-action="clicked"], [data-action="downloaded"]',function(){var d=$(this);t=d.data("category"),e=d.data("action"),n=d.data("label"),a(t,e,n)}),$("#hd").on("mouseenter",'[data-action="hovered"]',function(){var d=$(this);t=d.data("category"),e=d.data("action"),n=d.data("label"),a(t,e,n)})});

// @koala-prepend "../lib/farbtastic-a11y.js"
// @koala-prepend "../lib/gsap.min.js"
// @koala-prepend "../lib/ScrollTrigger.min.js"
// @koala-prepend "../lib/scrollreveal.min.js"
// @koala-prepend "../lib/owl-carousel/owl.carousel.min.js"
// @koala-prepend "../lib/lightbox/js/lightbox.min.js"
// @koala-prepend "../js/rc.min.js"
// @koala-prepend "../js/main.min.js"
// @koala-prepend "../js/aura.min.js"
// @koala-prepend "../js/gtm.min.js"