var myRefreshTimeout;

// this func is used to stop auto refresh on certain page
// cnn      breakingnews.js
function startRefresh(refreshPeriod) {
    myRefreshTimeout = setTimeout("window.location.reload();",refreshPeriod);
}

// this func is used to stop auto refresh on certain page
// cnn      breakingnews.js
function stopRefresh() {
    clearTimeout(myRefreshTimeout);
}

// this func is used to stop auto refresh on certain page
// cnn      breakingnews.js
function isOnWP() {
    if (typeof $("meta[name='contenttype']").attr("content") == 'undefined') return false;
    if ($("meta[name='contenttype']").attr("content").indexOf("wp") < 0) return false;

    return true;
}

// this func is used to stop auto refresh on certain page
// cnn      breakingnews.js
function isBNOff() {
    if (typeof bnstatus == 'undefined') return true;
    if (bnstatus == 'off') return true;

    return false;
}

window.addEventListener("load", function() {
    if (isOnWP() && isBNOff() && window.location.pathname != '/tv') {
        startRefresh(5 * 60 * 1000);
        // startRefresh(.1 * 60 * 1000);
    }
});
ot support system notifications");
    }
    else if (Notification.permission === "granted") {
        var notification = new Notification(notificationTitle,notificationOptions);
        notification.onclick = function(event) {
            event.preventDefault();
            window.open(payload.data.url , '_blank');
            notification.close();

            messaging.getToken().then((currentToken) => {
                var app       = payload.data.app;
                var id        = payload.data.id;
                var platform  = 3;
                if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
                    platform = 4;
                }
                
                $.ajax({
                    type  : 'post',
                    url   : 'https://kayumanis.detik.com/api/app_open/',
                    data  : {
                        id        : id,
                        token     : currentToken,
                        app       : app,
                        platform  : platform
                    },
                    success: function (d) {
                        console.log(d);
                    }
                });

            }).catch(err => {
                console.log(err);
            });

        }
    }
});

function requestToken() {
  messaging.getToken()
  .then(function(currentToken) {
    if (currentToken) {
      sendTokenToServer(currentToken);
    } else {
      setTokenSentToServer(false);
    }
  })
  .catch(function(err) {
    console.log('An error occurred while retrieving token. ', err);
    setTokenSentToServer(false);
  });
}

function sendTokenToServer(currentToken) {
  if (!isTokenSentToServer()) {
    console.log('Sending token to server...');
    sendTokenToAppsDev(currentToken);
    setTokenSentToServer(true);
  } else {
    console.log('Token already sent to server so won\'t send it again ' +
        'unless it changes');
  }
}

function sendTokenToAppsDev(currentToken) {
  var url = "https://kayumanis.detik.com/api/media/";
  var method = "POST";

  var device = 3;
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    device = 4;
  }

  var postData = new FormData();
  postData.append('application', config.application);
  postData.append('token', currentToken);
  postData.append('device', device);


  var async = true;
  var request = new XMLHttpRequest();
  request.withCredentials = true;
  request.onload = function () {
     var status = request.status;
     var data = request.responseText;
  }

  console.log('request post to kayumanis');
  request.open(method, url, async);
  request.send(postData);
}

function isTokenSentToServer() {
  if (window.localStorage.getItem('sentToServer') == 1) {
        return true;
  }
  return false;
}

function isTokenInCookie() {
  console.log(getCookieNotif('isnotif'));
  if (getCookieNotif('isnotif')!=='') {
        return true;
  }
  return false;
}

function setTokenSentToServer(sent) {
  window.localStorage.setItem('sentToServer', sent ? 1 : 0);
}

function requestPermission() {
  console.log('Requesting permission...');

  if(isTokenInCookie()) return;

  messaging.requestPermission()
  .then(function() {
  requestToken();
    console.log('Notification permission granted.');
  })
  .catch(function(err) {
    console.log('Unable to get permission to notify.', err);
  });
  // [END request_permission]
}

function deleteToken() {
  messaging.getToken()
  .then(function(currentToken) {
    messaging.deleteToken(currentToken)
    .then(function() {
      console.log('Token deleted.');
      setTokenSentToServer(false);
    })
    .catch(function(err) {
      console.log('Unable to delete token. ', err);
    });
  })
  .catch(function(err) {
    console.log('Error retrieving Instance ID token. ', err);
  });
}

function getCookieNotif(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
          c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
      }
  }
  return "";
}

function resendToken(){
  messaging.getToken()
  .then(function(currentToken) {
      var device = 3;
      if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        device = 4;
      }
      $.ajax({
          type: 'post',
          url: 'https://kayumanis.detik.com/api/validation/',
          crossDomain: true,
          xhrFields: {
              withCredentials: true
          },
          data: {
              token : currentToken,
              application : config.application,
              device : device
          },
          success: function (d) {
              console.log(d);
          }
      });
  });
}

// navigator.serviceWorker.register('/firebase-messaging-sw.js')
// .then((registration) => {
//     messaging.useServiceWorker(registration);
//     resendToken();
//     //requestPermission();
// })

resendToken();
//requestPermission();
