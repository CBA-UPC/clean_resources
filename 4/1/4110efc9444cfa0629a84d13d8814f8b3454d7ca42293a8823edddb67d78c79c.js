/* eslint-disable no-undef */
importScripts('https://via.batch.com/v3/worker.min.js')

const eventsList = [
  'pushsubscriptionchange',
  'install',
  'push',
  'notificationclick',
  'message',
]
eventsList.forEach(eventName => {
  self.addEventListener(eventName, 
})
