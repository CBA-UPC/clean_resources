// Service worker usado apenas para disparo de notificações.
// Tanto para home uol como para estações migradas para domínio da home.
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js';
import { getMessaging, experimentalSetDeliveryMetricsExportedToBigQueryEnabled } from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-messaging-sw.js';
const firebaseApp = initializeApp({
    apiKey: 'AIzaSyC7xCg9LEYqiDKkCBsjhMFg-MKTNakYuj8',
    authDomain: 'web-alerts-1194.firebaseapp.com',
    projectId: 'web-alerts-1194',
    appId: '1:370456186282:web:a1818e52c9bb508cf2efd3',
    databaseURL: 'https://web-alerts-1194.firebaseio.com/',
    storageBucket: 'gcm-demo-13f40.appspot.com',
    messagingSenderId: '370456186282'
});
const messaging = getMessaging(firebaseApp);
experimentalSetDeliveryMetricsExportedToBigQueryEnabled(messaging, true);
const showNotification = function (title, notification) {
  return self.registration.showNotification(title, {
    ...notification,
    badge: 'https://conteudo.imguol.com.br/c/push-webalert/badge.v4.png',
    data: {
      link: notification.click_action
    }
  });
};
self.addEventListener('push', function(event) {
  const payload = event.data.json();
  event.waitUntil(
    showNotification(payload.notification.title, payload.notification)
  );
});
self.addEventListener('notificationclick', function (event) {
  event.notification.close();
  if(event.notification && event.notification.data && event.notification.data.link) {
    const notificationPage = event.notification.data.link;
    event.waitUntil(
      clients.openWindow(notificationPage)
    );
  }
});
l) .header-menu-lateral{max-width:50px}.play .header:not(.cancel-measures-vertical) .header-services .btn{background:0 0;border-radius:3px;font-size:12px;letter-spacing:normal;line-height:17px;max-width:145px;padding:8px 10px;text-transform:none;transition:.2s all ease-in}.play .header:not(.cancel-measures-vertical) .header-services li{margin-left:0}.play .header.cancel-measures-vertical .over>div:nth-child(2){flex:5;text-align:center}}@media (min-width:768px) and (max-width:991px){.play .header:not(.cancel-measures-vertical){padding-top:0;padding-bottom:0;box-shadow:none}.play .header:not(.cancel-measures-vertical).sticky .bg-video-container{box-shadow:0 0 10px #e6e6e6}.play .header:not(.cancel-measures-vertical) .line{margin:0 -10px}.play .header:not(.cancel-measures-vertical) .header-menu-lateral{max-width:50px}.play .header:not(.cancel-measures-vertical) .header-services .btn{background:0 0;border-radius:3px;font-size:12px;letter-spacing:normal;line-height:17px;max-width:145px;padding:8px 10px;text-transform:none;transition:.2s all ease-in}.play .header:not(.cancel-measures-vertical) .header-services li{margin-left:0}.play .header.cancel-measures-vertical .over>div:nth-child(2){flex:5;text-align:center}}@media screen and (max-width:360px){.play .header:not(.cancel-measures-vertical) .header-menu-lateral{max-width:36px}}@media (min-width:992px){.play .header:not(.cancel-measures-vertical).bg-video .bg-video-container{height:220px}.play .header:not(.cancel-measures-vertical).bg-video .bg-video-container video{min-height:220px}.play .header:not(.cancel-measures-vertical) .container{min-height:auto}.play .header:not(.cancel-measures-vertical) .over{padding-top:0;margin:10px 0}.play .header:not(.cancel-measures-vertical) .over>div:nth-child(3){flex:3}.play .header:not(.cancel-measures-vertical) .over>div:nth-child(4){flex:1}.play .header:not(.cancel-measures-vertical) .hrz:not(.hasScroll) .menu-wrapper{justify-content:left}.play .header:not(.cancel-measures-vertical) .navigation-search-list{padding:0 7%;margin:10px 0}.play .header:not(.cancel-measures-vertical) .navigation-search-list .input-box{padding:25px;margin-bottom:0}.play.vertical .header .header-menu.hrz li>a,.play.vertical .header .header-services li>a{font-size:16px;font-weight:300;line-height:1.43;text-transform:none}.play.vertical .header .header-services .services li:not(:first-child){margin-left:24px}}@media (min-width:992px) and (max-width:1229px){.play .header:not(.cancel-measures-vertical) .hrz.center .menu-item>a{padding-left:18px;padding-right:18px}}@media (min-width:1230px){.play .header:not(.cancel-measures-vertical) .navigation-search-list{padding:0 26%}}/* !end-color-cp:header.play *//* !color-cp:logo.play */.logo .alignment,.logo .alignment a{height:auto;position:relative}.logo .alignment .logo-uol,.logo .alignment .station-link,.logo .alignment a .logo-uol,.logo .alignment a .station-link{position:absolute;height:29px;top:0}.logo .alignment .logo-uol,.logo .alignment a .logo-uol{width:65px}.logo .alignment .station-link,.logo .alignment a .station-link{width:50px;left:70px}.logo .alignment .station-svg,.logo .alignment a .station-svg{width:121px;height:29px;margin:0}.logo .alignment .station-svg #beta,.logo .alignment .station-svg #uol,.logo .alignment a .station-svg #beta,.logo .alignment a .station-svg #uol{fill:#fff}@media screen and (max-width:360px){.logo .alignment .station-svg,.logo .alignment a .station-svg{width:100px;height:24px}.logo .alignment .logo-uol,.logo .alignment a .logo-uol{width:52px;height:24px}.logo .alignment .station-link,.logo .alignment a .station-link{width:44px;height:24px;left:56px}}.logo.reverse .alignment .station-svg #beta,.logo.reverse .alignment .station-svg #uol{fill:#000}/* !end-color-cp:logo.play */