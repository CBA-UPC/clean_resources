(function(w, d) {
  "use strict";

  if (typeof w['fluctkvapi'] === 'undefined') {
    var FluctKvApi = new Object();

    if (typeof unitArray === 'undefined') {
      w.unitArray = ["fluct"]
    }

    FluctKvApi = {
      alreadyXhrExecuted: false,
      kvs: null,
      kvParams: {"units": unitArray, "url": document.URL},

      slotIdToSlot: function (slots) {
        return slots.reduce(function(obj, slot) {
          var slotId = slot.getSlotElementId();
          obj[slotId] = slot;
          return obj;
        }, new Object());
      },
      sendToHaste: function (kind, level, obj) {
        var params = obj;
        params['userAgent'] = navigator.userAgent;
        params['url'] = location.href;

        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://hs.adingo.jp/taglog');
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify({'kind': kind, 'level': level, 'params': params}));
      },
      setBids: function (callback) {
        fluctkvapi.fetch(function () {
          googletag.cmd.push(function() {
            var slots = googletag.pubads().getSlots();
            slots.forEach(function(slot) {
              var unitPath = slot.getAdUnitPath();
              if (fluctkvapi.kvs !== null) {
                var unitKvs = fluctkvapi.kvs[unitPath];
                if (unitKvs !== undefined) {
                  unitKvs.forEach(;
                }
              }
            });
          });
          callback();
        });
      },
      fetchPolicyStatus: function (callback) {
        fluctkvapi.fetch(function () {
          var isPolicyViolation = true
          if (fluctkvapi.kvs !== null) {
            var unitKvs = fluctkvapi.kvs[fluctkvapi.kvParams['units'][0]];
            if (unitKvs !== undefined) {
              unitKvs.forEach(function(kv) {
                if (kv.k === "pa") {
                  if (kv.v === "ok") {
                    isPolicyViolation = false
                  }
                }
              });
            }
          }
          callback(isPolicyViolation);
        });
      },
      fetch: function (callback) {
        try {
          var timeout = 3000;
          var xhr = new XMLHttpRequest();

          xhr.addEventListener('loadend', function() {
            fluctkvapi.kvs = {};
            if (xhr.status === 200 && this.responseText) {
              try {
                var res = JSON.parse(this.responseText);
                fluctkvapi.kvs = res;
              } catch (e) {
                var message = new Object();
                message['units'] = fluctkvapi.kvParams['units'];
                message['statusCode'] = xhr.status;
                message['responseText'] = this.responseText;
                fluctkvapi.sendToHaste('PAInvalidJsonResponse', 'Warn', message);
              }
            } else {
              var message = new Object();
              message['units'] = fluctkvapi.kvParams['units'];
              message['statusCode'] = xhr.status;
              fluctkvapi.sendToHaste('PAResponseError', 'Warn', message);
            }

            callback();
          });

          xhr.addEventListener('timeout', function() {
            var message = new Object();
            message['units'] = this.kvParams['units'];
            fluctkvapi.sendToHaste('PATimeout', 'Info', message);
          });

          if (this.kvs !== null) {
            callback();
            return;
          }

          if (!this.alreadyXhrExecuted) {
            this.alreadyXhrExecuted = true;
            var endPoint = 'https://pa.adingo.jp/kv';
            xhr.open('POST', endPoint);
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.timeout = timeout;
            xhr.send(JSON.stringify(this.kvParams));
          }
        } catch(e) {
          var message = new Object();
          message['exception'] = e;
          this.sendToHaste('PAException', 'Error', message);
        }
      }
    };
    w['fluctkvapi'] = FluctKvApi;
  }
} (window, document));
