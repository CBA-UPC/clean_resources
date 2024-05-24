  var config = {
    apiKey: "AIzaSyBvjBbd_2g41OfCwP8XtI1w33RWZkVXyqY",
    authDomain: "detikcom-1363e.firebaseapp.com",
    databaseURL: "https://detikcom-1363e.firebaseio.com",
    storageBucket: "detikcom-1363e.appspot.com",
    messagingSenderId: "256296223274",
    application: "e8436846-4a48-46cd-8163-0a81f3647d28"
  };

  firebase.initializeApp(config);

  const messaging = firebase.messaging();


  messaging.onTokenRefresh(function() {
    messaging.getToken()
    .then(
    .catch(function(err) {
      console.log('Unable to retrieve refreshed token ', err);
    });
  });

  messaging.onMessage(function(payload) {
      console.log('[firebase-messaging-sw.js] Received background message ', payload);

      const notificationTitle = payload.data.title;
      const notificationOptions = {
          body: payload.data.content,
          icon: payload.data.icon,
      };

      if (!("Notification" in window)) {
          console.log("This browser does not support system notifications");
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

            }).catch(;

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
    .catch(;
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
    .then(
    .catch(function(err) {
      console.log('Unable to get permission to notify.', err);
    });
    // [END request_permission]
  }

  function deleteToken() {
    messaging.getToken()
    .then(function(currentToken) {
      messaging.deleteToken(currentToken)
      .then(
      .catch(function(err) {
        console.log('Unable to delete token. ', err);
      });
    })
    .catch(;
  }

  
  function resendToken(){
    messaging.getToken()
    .then(function(currentToken) {
        var platform  = 3;
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            platform = 4;
        }

        $.ajax({
            type: 'post',
            url: 'https://kayumanis.detik.com/api/validation/',
            crossDomain: true,
            xhrFields: {
                withCredentials: true
            },
            data: {
                token: currentToken,
                device: platform,
                application: config.application,
            },
            success:         });
    });
  }

  resendToken();
  requestPermission();
