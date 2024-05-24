// Closest pollyfill
if (window.Element && !Element.prototype.closest) {
  Element.prototype.closest = 
}
// End polyfill

var popupCenter = function (url, title, w, h) {
  var dualScreenLeft;
  var dualScreenTop;
  var width;
  var height;
  if (window.screenLeft !== undefined) {
    dualScreenLeft = window.screenLeft;
  } else {
    dualScreenLeft = window.screenX;
  }

  if (window.screenTop !== undefined) {
    dualScreenTop = window.screenTop;
  } else {
    dualScreenTop = window.screenY;
  }

  if (window.innerWidth) {
    width = window.innerWidth;
  } else {
    if (document.documentElement.clientWidth) {
      width = document.documentElement.clientWidth;
    } else {
      width = screen.width;
    }
  }

  if (window.innerHeight) {
    height = window.innerHeight;
  } else {
    if (document.documentElement.clientHeight) {
      height = document.documentElement.clientHeigh;
    } else {
      height = screen.height;
    }
  }

  var systemZoom = width / window.screen.availWidth;
  var left = (width - w) / 2 / systemZoom + dualScreenLeft;
  var top = (height - h) / 2 / systemZoom + dualScreenTop;
  var features =
    " scrollbars=yes,width=" +
    w / systemZoom +
    ",height=" +
    h / systemZoom +
    ",top=" +
    top +
    ",left=" +
    left;
  var newWindow = window.open(url, title, features);

  if (window.focus) newWindow.focus();
};

var shareTogglerEl = document.querySelector(".js-bh-share-toggle");
if (shareTogglerEl) {
  shareTogglerEl.addEventListener("click", function (e) {
    var parent = e.currentTarget.closest(".bh-social-shares");
    if (!parent.classList.contains("is-open")) {
      parent.classList.add("is-open");
    } else {
      parent.classList.remove("is-open");
    }
  });
}

!((window, function () {
  return (([
    function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, "default", ;
      var i = 
        s = 
      function r(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(t, i.key, i);
        }
      }
      var o = new ((())(),
        a = ((),
        l = 
            function c(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
        return i;
      }
      function h(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(t, i.key, i);
        }
      }
      var f = (();
                                    var g,
        b,
        w = !1,
        T = [],
        x = (function () {
          function t(e, n) {
            var r, o, a;
            if (
              (((this, t),
              (a = null),
              (o = "observeInstance") in (r = this)
                ? Object.defineProperty(r, o, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (r[o] = a),
              e && s())
            ) {
              if (
                ((this.elements = i(e)),
                (this.defaults = {
                  delay: 0,
                  orientation: "up",
                  scale: 1.3,
                  overflow: !1,
                  transition: "cubic-bezier(0,0,0,1)",
                  customContainer: "",
                  customWrapper: "",
                  maxTransition: 0,
                }),
                (this.settings = Object.assign(this.defaults, n)),
                this.settings.customContainer)
              ) {
                var l = p(i(this.settings.customContainer), 1);
                this.customContainer = l[0];
              }
              (this.lastPosition = -1),
                (this.resizeIsDone = this.resizeIsDone.bind(this)),
                (this.refresh = this.refresh.bind(this)),
                (this.proceedRequestAnimationFrame =
                  this.proceedRequestAnimationFrame.bind(this)),
                this.init();
            }
          }
          var e, n, r;
          return (
            (e = t),
            (n = [
              {
                key: "init",
                value: function () {
                  var t = this;
                  o.setViewportAll(this.customContainer),
                    (T = [].concat(
                      m(
                        this.elements.map(
                      ),
                      m(T)
                    )),
                    w ||
                      (this.proceedRequestAnimationFrame(),
                      window.addEventListener("resize", this.resizeIsDone),
                      (this.observeInstance = new ResizeObserver(
                        this.resizeIsDone
                      )),
                      this.observeInstance.observe(document.scrollingElement),
                      (w = !0));
                },
              },
              {
                key: "resizeIsDone",
                value: 
              },
              {
                key: "proceedRequestAnimationFrame",
                value: 
              },
              {
                key: "proceedElement",
                value: 
              },
              {
                key: "refresh",
                value: 
              },
              {
                key: "destroy",
                value: function () {
                  var t = this,
                    e = [];
                  (T = T.filter(),
                    e.forEach(,
                    T.length ||
                      (window.cancelAnimationFrame(g),
                      this.observeInstance.unobserve(document.scrollingElement),
                      (w = !1));
                },
              },
            ]) && v(e.prototype, n),
            r && v(e, r),
            t
          );
        })();
    },
  ]).default;
});

var Parallax = (function () {
  function Parallax(elements) {
    this._instances = [];
    this._elements = elements;
    _init.call(this);
  }

  function _init() {
    this._elements.forEach((el) => {
      this._instances.push(
        new simpleParallax(el, {
          orientation: el.dataset.dir,
          scale: 1 + el.dataset.speed / 10,
          customWrapper: ".parallax-absolute",
        })
      );
    });
  }

  Parallax.prototype.destroy = function () {
    this._instances.forEach(;
    this._instances = [];
  };

  Parallax.prototype.reinit = function (newElements) {
    this.destroy();
    if (newElements) {
      this._elements = newElements;
    }
    _init.call(this);
  };

  return Parallax;
})();

var pingApiGateway = function (loginUrl, checkUrl) {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", checkUrl);
  xhr.withCredentials = true;
  xhr.onload = () => {
    if (xhr.status === 401) {
      console.log("CHECK - Refreshing login");
      let iframe = document.createElement("iframe");
      iframe.style.display = "none";
      iframe.style.width = "0px";
      iframe.style.height = "0px";
      iframe.setAttribute("src", loginUrl);
      document.body.appendChild(iframe);
      let checkLoginClose = setInterval(function () {
        if (iframe.getAttribute("src") === loginUrl) {
          clearInterval(checkLoginClose);
          setTimeout( 10000);
          console.log("CHECK - Refresh success");

          const toolbar = document.querySelector("web-toolbar")
          const comid = toolbar.getAttribute("comid");
          const langid = toolbar.getAttribute("langid");

          const toolbar_new = document.createElement('web-toolbar');
          toolbar_new.setAttribute('comid', comid);
          toolbar_new.setAttribute('langid', langid);
          toolbar_new.setAttribute('product', "Point");
          toolbar_new.setAttribute('placeholder', "true");
          toolbar.remove();

          setTimeout(() => {
          document.querySelector('.body-wrapper').insertBefore(toolbar_new, document.querySelector('.body-wrapper').firstChild);
          }, 3000);

        }
      }, 500);
    } else if (xhr.status !== 200) {
      console.log("CHECK - Unexpected status: ", xhr.status);
    }
  };
  xhr.send();
}
