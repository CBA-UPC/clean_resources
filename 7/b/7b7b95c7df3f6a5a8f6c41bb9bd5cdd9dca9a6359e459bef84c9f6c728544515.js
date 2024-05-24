'use strict';
importScripts('https://cdnjs.cloudflare.com/ajax/libs/localforage/1.5.0/localforage.nopromises.min.js');

self.addEventListener('push', function(event) {
	if( event.data ) {
		var message = JSON.parse(event.data.text());
		//Проверяем, что присутствует заголовок и тело сообщения
		if( message.title && message.body ) {
			if( message.shop_id ) {
				//Трекаем показ. Используем mode: 'no-cors' и он работает только с application/x-www-form-urlencoded
				fetch('https://api.personaclick.com/track/received', {
					mode: 'no-cors',
					method: 'post',
					credentials: 'include',
					headers: {
            "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
					},
					body: 'type=' + message.type + '&code=' + message.id + '&shop_id=' + message.shop_id
				});
			}
			//Показываем
			event.waitUntil(
				self.registration.showNotification(message.title, {
					body: message.body,
					icon: message.icon,
					tag: (message.id || '') == 'test' ? Math.round(Math.random() * 1000000) : message.id + 'personaclick-push',
					image: message.image || null,
					actions: message.actions || [],
					requireInteraction: true,
					data: {
						shop_id: message.shop_id,
						type: message.type,
						id: message.id,
						url: message.url,
						action_urls: message.action_urls || []
					}
				})
			);
		}
	}
});

//https://flocktory.com/v2/push_worker.js
self.addEventListener('notificationclick', function(event) {
  event.notification.close();

  event.waitUntil(
    clients.matchAll({
      type: 'window'
    }).then(function() {
			if( event.notification.data ) {
				var url = event.notification.data.url, action_urls = event.notification.data.action_urls || [];
				if( event.action === 'b0' && action_urls[0] ) {
					url = action_urls[0]
				} else if( event.action === 'b1' && action_urls[1] ) {
					url = action_urls[1]
				}

				//Убрали трекинг при клике
        //https://y.mkechinov.ru/issue/REES-6557
//				if( event.notification.data.shop_id ) {
//					//Трекаем клик
//					return fetch('https://api.personaclick.com/track/clicked', {
//						mode: 'cors',
//						method: 'post',
//						credentials: 'include',
//						headers: {
//							"Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
//						},
//						body: 'url=' + encodeURIComponent(event.notification.data.url) + '&shop_id=' + encodeURIComponent(event.notification.data.shop_id)
//					})
//            .then(() => {
//            	return clients.openWindow(url)
//            })
//            .catch(() => {
//            	return clients.openWindow(url)
//            });
//				} else {
					//Открываем окно
					return clients.openWindow(url);
//				}
			}
		})
  )
});

self.addEventListener('notificationclose', function(event) {
  if (event.notification.data.shop_id) {
    return fetch('https://api.personaclick.com/track/closed', {
      mode: 'no-cors',
      method: 'post',
      credentials: 'include',
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      body: 'type=' + event.notification.data.type + '&code=' + event.notification.data.id + '&shop_id=' + event.notification.data.shop_id
    })
  }
});

self.addEventListener('message', function(event) {
  if( event.data ) {
    if( event.data.shop_id ) {
      localforage.setItem('personaclick_shop_id', event.data.shop_id)
    }
    if( event.data.did ) {
      localforage.setItem('personaclick_did', event.data.did)
    }
  }
});

self.addEventListener('pushsubscriptionchange', function(event) {
  event.waitUntil(
    registration.pushManager.subscribe({userVisibleOnly: true})
      .then(function(subscription) {
        //Отправляем подписку
        localforage.getItem('personaclick_shop_id')
          .then(function(shop_id) {

            localforage.getItem('personaclick_did')
              .then(function(did) {

                fetch('https://api.personaclick.com/profile/set', {
                  mode: 'no-cors',
                  method: 'post',
                  credentials: 'include',
                  headers: {
                    "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
                  },
                  body: 'shop_id=' + encodeURIComponent(shop_id) + '&did=' + encodeURIComponent(did) + '&web_push_token=' +  })
          })
      })
  )
});

seivate worker immediately
});

self.addEventListener('activate', function(event) {
    event.waitUntil(self.clients.claim()); // Become available to all pages
});
