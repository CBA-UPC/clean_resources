require.config({baseUrl:"/",waitSeconds:0,urlArgs:"v=2.0.17",paths:{jquery:"../common/build/js/jquery-1.9.1.min",articlejs:"../common/build/js/desk-head-scripts.min",oimodules:"../common/build/js/oi-app-modules-desk.min",idtabs:"../common/build/js/jquery.idTabs.min",bxslider:"../common/build/js/jquery.bxslider.min",carousel:"../common/build/js/carouFredSel-5.6.4-packed.min",vticker:"../common/build/js/jquery.vticker.min",jqvisible:"../common/build/js/jquery.visible.min",oneindiapoll:"https://polls.oneindia.com/media/js/scheduled-multi-poll",
ventuno_video:"https://pl.ventunotech.com/plugins/cntplayer/ventunoSmartPlayer",dailymotion_video:"https://api.dmcdn.net/all",dailymotion_geo:"https://geo.dailymotion.com/libs/player/x1gwb",deskfooterscripts:"../common/build/js/desk-footer-scripts.min",notification:"../common/build/js/site-notification-desk.min",db_main_build:"../common_dynamic/js/web/db_main_build.min","@firebase/app":"https://www.gstatic.com/firebasejs/8.10.0/firebase-app","@firebase/messaging":"https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging"},
shim:{jquery:{exports:"$",validate:,articlejs:{deps:["jquery"],exports:"articlejs"},oimodules:{deps:["jquery"],exports:"oimodules"},idtabs:{deps:["jquery"],exports:"idtabs"},bxslider:{deps:["jquery"],exports:"bxslider"},carousel:{deps:["jquery"],exports:"carousel"},vticker:{deps:["jquery"],exports:"vticker"},jqvisible:{deps:["jquery"],exports:"jqvisible"},oneindiapoll:{deps:["jquery"],exports:"oneindiapoll"},ventuno_video:{deps:["jquery"],exports:"ventuno_video"},
dailymotion_video:{deps:["jquery"],exports:"dailymotion_video"},dailymotion_geo:{deps:["jquery"],exports:"dailymotion_geo"},deskfooterscripts:{deps:["jquery"],exports:"deskfooterscripts"},notification:{deps:["jquery"],exports:"notification"},db_main_build:{deps:["jquery"],exports:"db_main_build"},"@firebase/app":{exports:"firebase"},"@firebase/messaging":{deps:["@firebase/app"],exports:"firebase.messaging"}}});var messaging;
require(["jquery","@firebase/app","@firebase/messaging"],function(b,a){a.initializeApp({apiKey:"AIzaSyA7AO-g3ROZ5pOJnaz1bDJWaJPX2gXRjdA",authDomain:"goodreturns-f6aeb.firebaseapp.com",databaseURL:"https://goodreturns-f6aeb.firebaseio.com",projectId:"goodreturns-f6aeb",storageBucket:"goodreturns-f6aeb.appspot.com",messagingSenderId:"615947255232",appId:"1:615947255232:web:1931c68107e6698b7d1c25"});messaging=a.messaging();console.log(messaging);require(["notification"],});
require(["jquery","deskfooterscripts","notification","db_main_build"],;