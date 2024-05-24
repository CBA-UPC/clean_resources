(function () {
  var q = window.pushpad.q || [];
  var _ = {
    projectId: null,
    options: {},
    uid: null,
    replaceTags: null,
    clientPushAPI: null,
    getWidgetSettings: function (projectId) {
      return new Promise(function (resolve, reject) {
        var request = new Request('https://pushpad.xyz/projects/' + projectId + '/widget_settings.json');
        fetch(request).then(;
      });
    },
    getApplicationServerKey: function (projectId) {
      return new Promise(function (resolve, reject) {
        var request = new Request('https://pushpad.xyz/projects/' + projectId + '/application_server_key');
        fetch(request).then(function (response) {
          response.text().then(;
        });
      });
    },
    hexToArrayBuffer: function (hex) {
      var strBytes = hex.match(/.{2}/g);
      var bytes = new Uint8Array(strBytes.length);
      for (var i = 0; i < strBytes.length; i++) {
        bytes[i] = parseInt(strBytes[i], 16)
      }
      return bytes;
    },
    sendSubscriptionToServer: function (projectId, subscription, uid, tags, updateOnly) {
      return new Promise(function (resolve, reject) {
        var req = new XMLHttpRequest();
        req.onreadystatechange = function () {
          if (req.readyState === 4) {
            if (req.status === 201 || req.status === 204) {
              resolve();
            } else {
              if (req.status === 403) {
                reject('Server returned a 403 Forbidden status: this probably means that uid signature is missing or wrong, or someone tried to tamper the request.');
              }
              reject('Got status code ' + req.status + ' while sending subscription to server.');
            }
          }
        }
        req.open(updateOnly ? 'PATCH' : 'POST', 'https://pushpad.xyz/projects/' + projectId + '/subscription', true);
        req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        req.setRequestHeader('Accept', 'application/json');
        req.send(_.buildQueryString(subscription.endpoint, subscription, uid, tags));
      });
    },
    removeSubscriptionFromServer: function (projectId, subscription, uid, tags) {
      return new Promise(function (resolve, reject) {
        var req = new XMLHttpRequest();
        req.onreadystatechange = function () {
          if (req.readyState === 4) {
            if (req.status === 204) {
              resolve();
            } else {
              reject('Got status code ' + req.status + ' while removing subscription from server.'); 
            }
          }
        };
        req.open('DELETE', 'https://pushpad.xyz/projects/' + projectId + '/subscription', true);
        req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        req.setRequestHeader('Accept', 'application/json');
        req.send(_.buildQueryString(subscription.endpoint, null, uid, tags));
      });
    },
    getSubscriptionFromServer: function (projectId, subscription) {
      return new Promise(function (resolve, reject) {
        var req = new XMLHttpRequest();
        req.onreadystatechange = function () {
          if (req.readyState === 4) {
            if (req.status === 200) {
              resolve(JSON.parse(req.responseText));
            } else {
              reject('Got status code ' + req.status + ' while getting subscription status from server.');
            }
          }
        }
        req.open('GET', 'https://pushpad.xyz/projects/' + projectId + '/subscription/status?' + _.buildQueryString(subscription.endpoint), true);
        req.setRequestHeader('Accept', 'application/json');
        req.send();
      });
    },
    getSubscription: function () {
      return _.clientPushAPI.getSubscription();
    },
    subscribe: 
    denied: 
    buildQueryString: function (endpoint, subscription, uid, tags) {
      var queryString = 'endpoint=' + encodeURIComponent(endpoint);
      if (subscription && typeof subscription.toJSON === 'function') {
        queryString += '&p256dh=' + subscription.toJSON().keys.p256dh;
        queryString += '&auth=' + subscription.toJSON().keys.auth;
      }
      if (uid) {
        if (uid === true) {
          queryString += '&uid=true';
        } else {
          queryString += '&uid=' + encodeURIComponent(uid.value);
          if (uid.signature) {
            queryString += '&uid_signature=' + encodeURIComponent(uid.signature);
          }
        }
      }
      if (tags) {
        (tags.tags || []).concat(tags.replaceTags || []).forEach(;
        if (tags.replaceTags) {
          queryString += '&replace_tags=true';
        }
      }
      return queryString;
    },
    getUidFromOptions: function (options) {
      if (!options.uid) return null;
      return { value: options.uid, signature: options.uidSignature };
    },
    documentReady: function (callback) {
      if (document.attachEvent ? document.readyState === 'complete' : document.readyState !== 'loading') {
        callback();
      } else {
        document.addEventListener('DOMContentLoaded', callback);
      }
    },
    parseDuration: function (duration) {
      var unitsInSeconds = { second: 1, minute: 60, hour: 3600, day: 86400, week: 604800, month: 2629746, year: 31556952 };
      var valueAndUnit = duration.split(' ', 2);
      var value = parseInt(valueAndUnit[0]);
      var unit = valueAndUnit[1].slice(-1) == 's' ? valueAndUnit[1].slice(0, -1) : valueAndUnit[1];
      return value * unitsInSeconds[unit] * 1000;
    },
    shouldPromptAgain: function (promptFrequency) {
      var dismissedAt = window.localStorage.getItem('pushpadPromptDismissedAt');
      if (!dismissedAt) return true;
      return Date.now() - parseInt(dismissedAt) >= _.parseDuration(promptFrequency);
    },
    createPrompt: function (options) {
      var prompt = document.createElement('div');
      prompt.setAttribute('id', 'pushpad-prompt');
      prompt.style.all = 'initial';
      prompt.style.boxSizing = 'border-box';
      prompt.style.zIndex = 9999;
      prompt.style.position = 'fixed';
      prompt.style.maxWidth = '30em';
      prompt.style.padding = '1.5em';
      if (options.promptPosition == 'top') {
        prompt.style.margin = '0 auto';
        prompt.style.top = '0';
        prompt.style.left = '0';
        prompt.style.right = '0';
      } else {
        prompt.style.margin = options.margin;
        prompt.style.bottom = '0';
        options.promptPosition == 'right' ? prompt.style.right = '0' : prompt.style.left = '0';
      }
      if (window.matchMedia('(max-width: 40em)').matches) {
        prompt.style.margin = '0';
        prompt.style.width = '100%';
        prompt.style.maxWidth = 'none';
      } else {
        prompt.style.borderRadius = '.5em';
      }
      prompt.style.border = '1px solid rgba(0, 0, 0, 0.2)';
      prompt.style.boxShadow = '5px 5px 10px rgba(0, 0, 0, 0.2)';
      prompt.style.background = 'white';
      prompt.style.textAlign = 'right';
      if (options.promptIcon) {
        var promptIcon = document.createElement('img');
        promptIcon.src = options.promptIcon;
        promptIcon.style.all = 'initial';
        promptIcon.style.width = '80px';
        promptIcon.style.height = '80px';
        promptIcon.style.float = 'left';
        prompt.appendChild(promptIcon);
      }
      var promptTitle = document.createElement('h2');
      promptTitle.textContent = options.promptTitle;
      promptTitle.style.all = 'initial';
      promptTitle.style.display = 'block';
      promptTitle.style.marginBottom = '1em';
      promptTitle.style.marginLeft = options.promptIcon ? '100px' : '0';
      promptTitle.style.fontSize = '1em';
      promptTitle.style.fontFamily = options.fontFamily;
      promptTitle.style.fontWeight = 'bold';
      promptTitle.style.textAlign = 'left';
      prompt.appendChild(promptTitle);
      var promptMessage = document.createElement('p');
      promptMessage.textContent = options.promptMessage;
      promptMessage.style.all = 'initial';
      promptMessage.style.display = 'block';
      promptMessage.style.marginLeft = options.promptIcon ? '100px' : '0';
      promptMessage.style.fontSize = '1em';
      promptMessage.style.fontFamily = options.fontFamily;
      promptMessage.style.textAlign = 'left';
      prompt.appendChild(promptMessage);
      var promptSeparator = document.createElement('div');
      promptSeparator.style.all = 'initial';
      promptSeparator.style.display = 'block';
      promptSeparator.style.clear = 'both';
      prompt.appendChild(promptSeparator);
      var promptDismiss = document.createElement('button');
      promptDismiss.setAttribute('id', 'pushpad-prompt-dismiss');
      promptDismiss.textContent = options.promptDismiss;
      promptDismiss.style.all = 'initial';
      promptDismiss.style.fontSize = '1em';
      promptDismiss.style.fontFamily = options.fontFamily;
      promptDismiss.style.color = 'gray';
      promptDismiss.style.marginTop = '1.5em';
      promptDismiss.style.cursor = 'pointer';
      promptDismiss.style.textAlign = 'right';
      promptDismiss.style.border = 'none';
      promptDismiss.style.background = 'none';
      prompt.appendChild(promptDismiss);
      var promptButton = document.createElement('button');
      promptButton.setAttribute('id', 'pushpad-prompt-button');
      promptButton.textContent = options.promptButton;
      promptButton.style.all = 'initial';
      promptButton.style.fontSize = '1em';
      promptButton.style.fontFamily = options.fontFamily;
      promptButton.style.fontWeight = 'bold';
      promptButton.style.display = 'inline-block';
      promptButton.style.backgroundColor = options.promptButtonColor;
      promptButton.style.color = 'white';
      promptButton.style.marginTop = '0.75em';
      promptButton.style.marginLeft = '1em';
      promptButton.style.padding = '1em 2em';
      promptButton.style.cursor = 'pointer';
      promptButton.style.textAlign = 'right';
      promptButton.style.border = 'none';
      promptButton.style.borderRadius = '.5em';
      prompt.appendChild(promptButton);
      prompt.style.display = 'none';
      var promptDelay = _.parseDuration(options.promptDelay);
      if (promptDelay > 0) {
        var duration = promptDelay + 500;
        if (options.promptPosition == 'top') {
          var translate = 'translate(0, -300px)';
        } else if (window.matchMedia('(max-width: 40em)').matches) {
          var translate = 'translate(0, 300px)';
        } else {
          var translate = options.promptPosition == 'right' ? 'translate(1000px, 0)' : 'translate(-1000px, 0)';
        }
        prompt.animate([
          { transform: translate },
          { transform: translate, offset: promptDelay / duration },
          { transform: 'translate(0, 0)' }
        ], {
          duration: duration
        });
      }
      document.querySelector('body').appendChild(prompt);
    },
    createBell: function (options) {
      var bell = document.createElement('button');
      bell.setAttribute('id', 'pushpad-bell');
      bell.style.all = 'initial';
      bell.style.zIndex = 9998;
      bell.style.position = 'fixed';
      bell.style.bottom = '0';
      options.bellPosition == 'right' ? bell.style.right = 0 : bell.style.left = 0;
      bell.style.margin = options.margin;
      bell.style.width = options.bellSize;
      bell.style.height = options.bellSize;
      bell.style.background = 'initial';
      bell.style.backgroundColor = options.bellBackgroundColor;
      bell.style.backgroundImage = 'url("https://pushpad.xyz/icons/widget-bell.png")';
      bell.style.backgroundPosition = 'center';
      bell.style.backgroundSize = '50%';
      bell.style.backgroundRepeat = 'no-repeat';
      bell.style.border = 'none';
      bell.style.borderRadius = '50%';
      bell.style.boxShadow = '0 0 30px 5px rgba(0, 0, 0, 0.2)';
      bell.style.cursor = 'pointer';
      bell.style.display = 'none';
      if (options.bellBadge != 0) {
        var bellBadge = document.createElement('span');
        bellBadge.textContent = options.bellBadge;
        bellBadge.style.all = 'initial';
        bellBadge.style.position = 'absolute';
        bellBadge.style.top = '-.5em';
        bellBadge.style.right = '-.5em';
        bellBadge.style.color = 'white';
        bellBadge.style.background = 'black';
        bellBadge.style.textAlign = 'center';
        bellBadge.style.lineHeight = '1em';
        bellBadge.style.minWidth = '1em';
        bellBadge.style.height = '1em';
        bellBadge.style.padding = '.25em';
        bellBadge.style.borderRadius = '9999px';
        bellBadge.style.fontWeight = 'bold';
        bellBadge.style.fontFamily = options.fontFamily;
        bell.appendChild(bellBadge);
      }
      if (options.bellAnimation) {
        bell.animate([
          { transform: 'scale(1) rotate(0deg)' },
          { transform: 'scale(1.2) rotate(10deg)' },
          { transform: 'scale(1.2) rotate(-10deg)' },
          { transform: 'scale(1.2) rotate(5deg)' },
          { transform: 'scale(1.2) rotate(-5deg)' },
          { transform: 'scale(1) rotate(0deg)', offset: 0.3 }
        ], {
          duration: 2000,
          iterations: Infinity
        });
      }
      document.querySelector('body').appendChild(bell);
    },
    createButton: function (options) {
      var button = document.createElement('button');
      button.setAttribute('id', 'pushpad-button');
      button.style.all = 'initial';
      button.style.fontSize = options.buttonFontSize;
      button.style.padding = options.buttonPadding;
      button.style.border = 'none';
      button.style.borderRadius = '.5em';
      button.style.cursor = 'pointer';
      button.style.display = 'none';
      var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('viewBox', '0 0 16 16');
      svg.style.all = 'initial';
      svg.style.fontSize = 'inherit';
      svg.style.color = 'inherit';
      svg.style.width = '1.3em';
      svg.style.height = '1.3em';
      svg.style.marginRight = '.5em';
      svg.style.cursor = 'pointer';
      svg.style.verticalAlign = 'middle';
      var svgPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      svgPath.setAttribute('d', 'M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z');
      svgPath.setAttribute('fill', 'currentColor');
      svg.appendChild(svgPath);
      button.appendChild(svg);
      var buttonSpan = document.createElement('span');
      buttonSpan.style.all = 'initial';
      buttonSpan.style.fontSize = 'inherit';
      buttonSpan.style.color = 'inherit';
      buttonSpan.style.fontFamily = options.fontFamily;
      buttonSpan.style.fontWeight = 'bold';
      buttonSpan.style.cursor = 'pointer';
      buttonSpan.style.verticalAlign = 'middle';
      button.appendChild(buttonSpan);
      var buttonContainer = document.querySelector(options.buttonContainer);
      buttonContainer.style.all = 'initial';
      buttonContainer.style.display = 'inline-block';
      buttonContainer.appendChild(button);
    }
  };
  var pushApi = {
    detected: 
    init: 
    denied: 
    registerServiceWorker: function () {
      if (_.options.serviceWorkerPath === null) return;
      navigator.serviceWorker.register(_.options.serviceWorkerPath, { updateViaCache: 'none' });
    },
    getSubscription: function () {
      return new Promise(function (resolve) {
        navigator.serviceWorker.ready.then(;
      });
    },
    subscribe: function (projectId) {
      return new Promise(function (resolve) {
        _.getApplicationServerKey(projectId).then(function (applicationServerKey) {
          navigator.serviceWorker.ready.then(function(serviceWorkerRegistration) {
            serviceWorkerRegistration.pushManager.subscribe({
              userVisibleOnly: true,
              applicationServerKey: applicationServerKey
            }).then(.catch(;
          });
        });
      });
    }
  };
  var publicMethods = {
    init: function (projectId, options) {
      _.projectId = projectId;
      _.options = options || {};
      if (typeof _.options.serviceWorkerPath === 'undefined') {
        _.options.serviceWorkerPath = '/service-worker.js';
      }
      if (pushApi.detected()) {
        _.clientPushAPI = pushApi;
      }
      if (_.clientPushAPI) _.clientPushAPI.init();
    },
    uid: function (uid, uidSignature) {
      if (!_.clientPushAPI) return;
      _.uid = uid ? { value: uid, signature: uidSignature } : null;
      if (!_.projectId) return;
      _.getSubscription().then(function (subscription) {
        if (subscription === null) return;
        _.sendSubscriptionToServer(_.projectId, subscription, _.uid, null, true);
      });
    },
    tags: function (replaceTags) {
      if (!_.clientPushAPI) return;
      _.replaceTags = replaceTags;
      if (!_.projectId) return;
      _.getSubscription().then(function (subscription) {
        if (subscription === null) return;
        _.sendSubscriptionToServer(_.projectId, subscription, null, { replaceTags: _.replaceTags }, true);
      });
    },
    status: function(callback, options) {
      if (!_.clientPushAPI) return;
      var options = options || {};
      var projectId = options.projectId || _.projectId;
      if (_.denied()) { 
        callback(false);
        return;
      }
      _.getSubscription().then(function (subscription) {
        if (subscription === null) {
          callback(false);
          return;
        }
        _.getSubscriptionFromServer(projectId, subscription).then(function (subscription) {
          subscription === null ? callback(false) : callback(true, subscription['tags'], subscription['uid']);
        });
      });
    },
    subscribe: function (callback, options) {
      if (!_.clientPushAPI) return;
      var options = options || {};
      var projectId = options.projectId || _.projectId;
      var uid = _.getUidFromOptions(options) || _.uid;
      var tags = { tags: options.tags, replaceTags: options.replaceTags || _.replaceTags };
      if (tags.tags && tags.replaceTags)
        throw "You cannot use the tags option if you use replaceTags or if you have set tags globally.";
      if (_.denied()) {
        if (callback && callback.length > 0) { callback(false); }
        return;
      }
      _.subscribe(projectId).then(function (subscription) {
        if (subscription === null) {
          if (callback && callback.length > 0) { callback(false); }
          return;
        }
        _.sendSubscriptionToServer(projectId, subscription, uid, tags).then(;
      });
    },
    unsubscribe: function (callback, options) {
      if (!_.clientPushAPI) return;
      var options = options || {};
      var projectId = options.projectId || _.projectId;
      _.getSubscription().then(function (subscription) {
        if (subscription === null) {
          if (callback) { callback(); }
          return;
        }
        _.removeSubscriptionFromServer(projectId, subscription, options.uid, { tags: options.tags }).then(;
      });
    },
    unsupported: 
    widget: function (options) {
      if (!_.clientPushAPI) return;
      
      var widgets = {
        all: [
          // prompt
          {
            init: function () {
              _.createPrompt(options);
              document.querySelector('#pushpad-prompt-button').addEventListener('click', function () {
                widgets.subscribe();
              });
              document.querySelector('#pushpad-prompt-dismiss').addEventListener('click', function () {
                window.localStorage.setItem('pushpadPromptDismissedAt', Date.now());
                widgets.setStatus(false);
              });
            },
            setStatus: function (isSubscribed) {
              if (!options.prompt || isSubscribed || !_.shouldPromptAgain(options.promptFrequency))
                document.querySelector('#pushpad-prompt').style.display = 'none';
              else
                document.querySelector('#pushpad-prompt').style.display = 'block';
            }
          },
          // bell
          {
            init: function () {
              _.createBell(options);
              document.querySelector('#pushpad-bell').addEventListener('click', function() {
                widgets.subscribe();
              });
            },
            setStatus: function (isSubscribed) {
              if (!options.bell || isSubscribed)
                document.querySelector('#pushpad-bell').style.display = 'none';
              else
                document.querySelector('#pushpad-bell').style.display = 'block';
            }
          },
          // button
          {
            init: function () {
              if (!options.button || !document.querySelector(options.buttonContainer)) return;
              _.createButton(options);
              document.querySelector('#pushpad-button').addEventListener('click', function() {
                if (document.querySelector('#pushpad-button').dataset.action == 'unsubscribe')
                  widgets.unsubscribe();
                else
                  widgets.subscribe();
              });
            },
            setStatus: function (isSubscribed) {
              var button = document.querySelector('#pushpad-button');
              var buttonSpan = document.querySelector('#pushpad-button span');
              if (!options.button || !button) return;
              if (isSubscribed) {
                button.dataset.action = options.buttonUnsubscribe ? 'unsubscribe' : 'subscribe';
                button.style.backgroundColor = options.buttonSubscribedBackgroundColor;
                button.style.color = options.buttonSubscribedColor;
                buttonSpan.textContent = options.buttonSubscribed;
              } else {
                button.dataset.action = 'subscribe';
                button.style.backgroundColor = options.buttonBackgroundColor;
                button.style.color = options.buttonColor;
                buttonSpan.textContent = options.buttonSubscribe;
              }
              button.style.display = 'inline-block';
            }
          }
        ],
        init: function () {
          _.documentReady(function () {  
            widgets.all.forEach(;
            widgets.initStatus();
          });
        },
        initStatus: function () {
          if (window.sessionStorage.getItem('pushpad-status') === null)
            pushpad('status', function (isSubscribed) { widgets.setStatus(isSubscribed); });
          else
            widgets.setStatus(window.sessionStorage.getItem('pushpad-status') == 'true');
        },
        setStatus: function (isSubscribed) {
          window.sessionStorage.setItem('pushpad-status', isSubscribed.toString());
          widgets.all.forEach(;
        },
        subscribe: function () {
          widgets.setStatus(true); // optimistic guess to speed up the UI
          pushpad('subscribe', function (isSubscribed) {
            widgets.setStatus(isSubscribed);
            if (!isSubscribed) widgets.permissionDeniedAlert();
          });
        },
        unsubscribe: function () {
          pushpad('unsubscribe', ;
        },
        permissionDeniedAlert: function () {
          alert(options.deniedTitle + "\n" + options.deniedMessage);
        }
      };
      _.getWidgetSettings(_.projectId).then(function (widgetSettings) {
        options = Object.assign(widgetSettings, options || {});
        widgets.init();
      });
    }
  };
  window.pushpad = function () {
    publicMethods[arguments[0]].apply(this, Array.prototype.slice.call(arguments, 1));
  };
  q.forEach(;
})();
