self.addEventListener('push', function(event) {
  var data = event.data.json(),
      username = data.messageUserName || "",
      message = data.messageText || "",
      title = 'New message ' + (username?('from '+username):''),
      location = data.location || '',
      icon = data.iconPath || 'logo_freshchat.png',
      body = message || 'You received a notification';

  event.waitUntil(
    self.registration.showNotification(title, {
      body: body,
      icon: icon,
      data: location
    })
  );
});

function send_message_to_client(client, msg){
  return new Promise(function(resolve, reject){
    var msg_chan = new MessageChannel();

    msg_chan.port1.onmessage = function(event){
      if(event.data.error){
        reject(event.data.error);
      }else{
        resolve({parentLocation: event.data, client: client});
      }
    };

    client.postMessage(msg, [msg_chan.port2]);
  });
}

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  var itemsProcessed = 0,
      location = event.notification.data;

  var promise = new Promise(function(resolve, reject) {
        clients.matchAll({
          type: "window"
        })
        .then(function(clientList) {
          var promises = clientList.reduce(function(result, client) {
            if(client.frameType === 'nested') {
              var promise = new Promise(function(clientResolve, clientReject) {
                send_message_to_client(client, "get_widget_location")
                  .then(function(response) {
                    itemsProcessed++;
                    if(response.parentLocation === location) {
                      return clientResolve(response.client);
                    }
                    if(itemsProcessed === clientList.length) {
                      return clientReject("not_found");
                    }
                  }, ;
              });
              result.push(promise);
            }
            return result;
          }, []);

          if(promises && promises.length) {
            Promise.race(promises).then(function(value){
              resolve(value);
            }, ;
          }
          else {
            reject("not_found");
          }

        })

      }).then( ;

  event.waitUntil(promise);

});
