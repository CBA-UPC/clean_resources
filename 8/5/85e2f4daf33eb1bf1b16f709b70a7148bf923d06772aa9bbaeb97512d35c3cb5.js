/* eslint-disable */
importScripts('https://www.gstatic.com/firebasejs/5.6.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.6.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in the
firebase.initializeApp({ messagingSenderId: '620536207652' });

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
var messaging = firebase.messaging();

// noinspection JSUnusedGlobalSymbols
var updatedVersionInfo = "v0.87.4";
