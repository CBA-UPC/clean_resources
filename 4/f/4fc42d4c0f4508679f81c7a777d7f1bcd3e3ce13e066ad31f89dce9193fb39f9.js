/* global fetch,importScripts,goog,self,caches,Request,Promise,indexedDB,Headers */

// Set this to your tracking ID
var trackingId = 'UA-54936151-1';

function sendAnalyticsEvent(eventCategory, eventAction, eventLabel, customDimensions) {
    'use strict';

    console.log('Sending analytics event: ' + eventCategory + '/' + eventAction + '/' + eventLabel);

    if (!eventAction && !eventCategory) {
        console.warn('sendAnalyticsEvent() called with no eventAction or ' + 'eventCategory.');
        // We want this to be a safe method, so avoid throwing unless absolutely necessary.
        return Promise.resolve();
    }

    // Create hit data
    var payloadData = {
        v: 1,
        cid: null,
        tid: trackingId,
        t: 'event',
        cd9: 'terra',
        ec: eventCategory,
        ea: eventAction,
        el: eventLabel
    };

    if (customDimensions) {
        payloadData = Object.assign({}, payloadData, customDimensions);
    }

    if(!payloadData.cid){
        var randonCid = parseInt(Math.random() * 10000000000);
        var epochSeconds = Math.round(Date.now() / 1000);

        payloadData.cid = randonCid +'.'+epochSeconds;
    }

    // Format hit data into URI
    var payloadString = Object.keys(payloadData)
        .filter(
        .map(
        .join('&');

    // Post to Google Analytics endpoint
    return fetch('https://www.google-analytics.com/collect', {
        method: 'post',
        body: payloadString
    }).then(function(response) {
        if (!response.ok) {
            return response.text().then(;
        } else {
            console.log(eventCategory + '/' + eventAction + '/' + eventLabel + ' hit sent, check the Analytics dashboard');
        }
    }).catch(;
}