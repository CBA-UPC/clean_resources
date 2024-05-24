
self.addEventListener('push', function(event) {
    var data = {};
    if (event.data) {
      data = event.data.json();
    }

    var notificationData = {
      body: data.body ? data.body : "Kliknij i zobacz więcej ...",
      icon: data.icon ? data.icon : null,
      image: data.image ? data.image : null,
      badge: data.badge ? data.badge : null,
      data: {
        link: data.link ? data.link : null,
      }
    };
    
    if (data && data.checker) {
    } else {
      event.waitUntil(self.registration.showNotification((data.title ? data.title : ""), notificationData));
    }
  });
  
self.addEventListener('notificationclick', function(event) {  
  event.notification.close();

  event.waitUntil(
    clients.matchAll({  
      type: "window"  
    })
    .then(function(clientList) {  
      for (var i = 0; i < clientList.length; i++) {  
        var client = clientList[i];  
        if (client.url == '/' && 'focus' in client)  
          return client.focus();  
      }  
      if (clients.openWindow) {
        return clients.openWindow(event.notification.data.link); 
      }
    })
  );
});