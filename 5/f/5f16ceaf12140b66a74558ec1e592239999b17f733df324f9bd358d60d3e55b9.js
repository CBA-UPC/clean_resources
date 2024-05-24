self.addEventListener('push', function(event) {  
  if (!event.data) return;
  
  var notification = event.data.json();
  event.waitUntil(
    self.registration.showNotification(notification.title, notification.options)
  );
});

self.addEventListener('push', function(event) {
  if (event.data) return;

  event.waitUntil(
    self.registration.pushManager.getSubscription().then(function(subscription) {
      var notificationsPath = 'https://pushpad.xyz/notifications?endpoint=' + encodeURIComponent(subscription.endpoint);
      if (typeof subscription.toJSON === 'function') {
        notificationsPath += '&p256dh=' + subscription.toJSON().keys.p256dh;
        notificationsPath += '&auth=' + subscription.toJSON().keys.auth;
      }
      var headers = new Headers();
      headers.append('Accept', 'application/json');
      return fetch(notificationsPath, {headers: headers});
    }).then(function(response) {
      if (response.status !== 200) {
        throw new Error('The API returned an error. Status Code: ' + response.status);
      }
      return response.json();
    }).then(function(notifications) {
      return Promise.all(
        notifications.map(function (notification) {
          var notificationOptions = {
            body: notification.body,
            tag: notification.id,
            requireInteraction: notification.require_interaction,
            data: { custom: notification.custom_data }
          };
          if (notification.icon_url) {
            notificationOptions.icon = notification.icon_url;
          }
          if (notification.image_url) {
            notificationOptions.image = notification.image_url;
          }
          if (notification.actions && notification.actions.length) {
            notificationOptions.actions = [];
            for (var actionIndex = 0; actionIndex < notification.actions.length; actionIndex++) {
              notificationOptions.actions[actionIndex] = {
                action: notification.actions[actionIndex].action,
                title: notification.actions[actionIndex].title
              };
              if (notification.actions[actionIndex].icon) {
                notificationOptions.actions[actionIndex].icon = notification.actions[actionIndex].icon;
              }
            }
          }
          return self.registration.showNotification(notification.title, notificationOptions);
        })
      );
    }).catch(
  );
});

self.addEventListener('notificationclick', function(event) {
  // Android doesn't close the notification when you click on it  
  // See: http://crbug.com/463146  
  event.notification.close();

  var targetUrl = 'https://pushpad.xyz/notifications/' + event.notification.tag + '/redirect';
  if (event.action) {
    targetUrl += '?notification_action=' + event.action;
  }

  // if custom action
  if (event.action && self.notificationActions && self.notificationActions.hasOwnProperty(event.action)) {
    event.waitUntil(
      Promise.all([
        fetch(targetUrl, { headers: new Headers({'Accept': 'application/json'}) }),
        self.notificationActions[event.action](event.notification.data.custom)
          .catch(
      ])
    );
  // else open target url
  } else {
    event.waitUntil(
      clients.openWindow(targetUrl)
    );
  }
});

self.addEventListener('pushsubscriptionchange', function(event) {
  event.waitUntil(
    fetch('https://pushpad.xyz/pushsubscriptionchange', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        old_endpoint: event.oldSubscription ? event.oldSubscription.endpoint : null,
        new_endpoint: event.newSubscription ? event.newSubscription.endpoint : null,
        new_p256dh: event.newSubscription ? event.newSubscription.toJSON().keys.p256dh : null,
        new_auth: event.newSubscription ? event.newSubscription.toJSON().keys.auth : null
      })
    })
  );
});
