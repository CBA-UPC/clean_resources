/**
 * NPMap.js 4.2.1
 * Built on 10/10/2023 at 08:07PM UTC
 * Copyright 2023 National Park Service
 * Licensed under MIT (https://github.com/nationalparkservice/npmap.js/blob/master/LICENSE.md)
 */
/* global L Spinner */

var NPMap = NPMap || null;
var ie;

// https://github.com/Gavin-Paolucci-Kleinow/ie-truth
function IeVersion () {
  var msie = navigator.userAgent.match(/MSIE (\d+)/);
  var trident = navigator.userAgent.match(/Trident\/(\d+)/);
  var value = {
    actingVersion: 0,
    compatibilityMode: false,
    isIe: false,
    trueVersion: 0
  };

  if (trident) {
    value.isIe = true;
    value.trueVersion = parseInt(trident[1], 10) + 4;
  }

  if (msie) {
    value.isIe = true;
    value.actingVersion = parseInt(msie[1], 10);
  } else {
    value.actingVersion = value.trueVersion;
  }

  if (value.isIe && value.trueVersion > 0 && value.actingVersion > 0) {
    value.compatibilityMode = value.trueVersion !== value.actingVersion;
  }

  return value;
}

function showError (div) {
  if (typeof div === 'string') {
    div = document.getElementById(div);
  }

  div.innerHTML = '' +
    '<div style="padding:15px;">' +
      '<p>National Park Service maps do not support Internet Explorer versions 7, 8, or 9. We recommend upgrading to a <a href="http://outdatedbrowser.com/" target="_blank">modern browser</a>, like the latest version of Internet Explorer, Google Chrome, or Mozilla Firefox.</p>' +
      '<p>If you are using Internet Explorer 10 or later, make sure "Enterprise Mode" and <a href="https://support.google.com/mail/answer/181472?hl=en" target="_blank">"Compatibility View"</a> are turned off.</p>' +
    '</div>' +
  '';
}

function createNPMap(NPMAP) {
  // Set the global NPMap
  NPMap = NPMAP;

  if (!NPMap) {
    throw new Error('The NPMap object is required.');
  }

  if (typeof NPMap !== 'object') {
    throw new Error('The NPMap variable cannot be a ' + typeof NPMap + '.');
  }

  ie = IeVersion();

  if (ie.isIe && (ie.actingVersion < 10 || ie.trueVersion < 10)) {
    if (NPMap.constructor === Array) {
      for (var i = 0; i < NPMap.length; i++) {
        showError(NPMap[i].div);
      }
    } else {
      showError(NPMap.div);
    }
  } else {
    NPMap = {
      config: NPMap.config || NPMap
    };

    var load = function (npmapConfig) {
      /**
       * Spin.js - http://fgnass.github.io/spin.js
       * 20150311: Removed require.js support, as it is not needed and it was causing conflicts.
       */
      ((this,;

      var dev = false;
      var script = document.createElement('script');
      var scripts = document.getElementsByTagName('script');
      var path;

      function build (config, isReload) {
        function step () {
          var divLoading;

          function destroyLoader () {
            divLoading.parentNode.removeChild(divLoading);
            config.spinner.stop();
            delete config.spinner;
            setTimeout( 50);
          }

          if (typeof config.div === 'string') {
            config.div = document.getElementById(config.div);
          }

          divLoading = L.npmap.util._.getChildElementsByClassName(config.div, 'npmap-loading')[0];
          config.L = L.npmap.map(config, isReload);

          if (config.hooks && config.hooks.init) {
            config.hooks.init(destroyLoader);
          } else {
            destroyLoader();
          }
        }

        // Load the plugins
        if (npmapConfig.config.plugins) {
          var plugins = npmapConfig.config.plugins;

          let types = {
            'css': (file, callback) => L.npmap.util._.appendCssFile(file, callback),
            'js': (file, callback) => L.npmap.util._.appendJsFile(file, callback),
            // 'name': (file, callback) => L.npmap.util._.appendJsFile(new URL('/plugins/compiled/' + file + '.js', basePath).href, callback) // TODO: maybe define a list
            'name': (file, callback) => L.npmap.util._.addPlugin(file, 
          };

          let done = 0;
          let total = 0;
          let started = false;

          plugins.forEach(plugin => {
            Object.keys(types).forEach(type => {
              // Allow plugins to be added by name
              if (typeof plugin === 'string') {
                plugin = {'name': plugin};
              }

              if (plugin[type]) {
                total++;
                types[type](plugin[type], ;
              }
            });
          });
          started = true;

          let interval;
          interval = setInterval(function () {
            if (started && done === total) {
              clearInterval(interval);

              if (config.hooks && config.hooks.preinit) {
                config.hooks.preinit(step);
              } else {
                step();
              }
            }
          }, 100);
        } else {
          if (config.hooks && config.hooks.preinit) {
            config.hooks.preinit(step);
          } else {
            step();
          }
        }
      }

      function callback () {
        L.npmap.util._.appendCssFile(path + 'npmap' + (dev ? '' : '.min') + '.css', function () {
          if (npmapConfig.config.constructor === Array) {
            for (var i = 0; i < npmapConfig.config.length; i++) {
              build(npmapConfig.config[i]);
            }
          } else {
            build(npmapConfig.config, npmapConfig.isReload);
          }
        });
      }

      function showLoader (div) {
        var mask = document.createElement('div');

        mask.className = 'npmap-loading';
        mask.style.cssText = 'background-color:#f9f7f1;bottom:0;height:100%;left:0;position:absolute;right:0;top:0;width:100%;z-index:99999;';

        if (typeof div === 'string') {
          div = document.getElementById(div);
        }

        div.appendChild(mask);

        return new Spinner({
          className: 'npmap-loading-spinner',
          color: '#454545',
          corners: 1,
          direction: 1,
          hwaccel: true,
          left: 'auto',
          length: 15,
          lines: 13,
          radius: 15,
          rotate: 0,
          shadow: false,
          speed: 1,
          top: 'auto',
          trail: 60,
          width: 5,
          zIndex: 2e9
        }).spin(mask);
      }

      // Code starts here
      //
      // Add the spinner
      if (npmapConfig.config instanceof Array) {
        for (var i = 0; i < npmapConfig.config.length; i++) {
          npmapConfig.config[i].spinner = showLoader(npmapConfig.config[i].div);
        }
      } else {
        npmapConfig.config.spinner = showLoader(npmapConfig.config.div);
      }

      // Add npmap.js
      for (var j = 0; j < scripts.length; j++) {
        var src = scripts[j].src;

        if (typeof src === 'string') {
          if (src.indexOf('npmap-bootstrap.js') !== -1) {
            dev = true;
            path = src.replace('npmap-bootstrap.js', '');
            script.src = path + 'npmap.js';
            break;
          } else if (src.indexOf('npmap-bootstrap.min.js') !== -1) {
            path = src.replace('npmap-bootstrap.min.js', '');
            script.src = path + 'npmap.min.js';
            break;
          }
        }
      }

      if (window.attachEvent && document.all) {
        script.onreadystatechange = 
      } else {
        script.onload = callback;
      }

      document.body.appendChild(script);
    };
    load(NPMap);
    NPMap.reload = 
  }
}

if (NPMap !== null) {
  createNPMap(NPMap);
}
