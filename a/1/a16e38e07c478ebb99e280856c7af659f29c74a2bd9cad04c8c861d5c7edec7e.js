![function(e,t){var n=function(){tion r(e,t){if(!s){if(u=!!t)return s=!0,!0;if(!e||Array.isArray(e)||"object"!=typeof e)throw new TypeError("cookieConsent (init): consent should be an object.");for(var n=Object.keys(e),i=0;i<n.length;i++)if("boolean"!=typeof e[n[i]])throw new TypeError("cookieConsent (init): consent values for "+n[i]+" should be of type boolean.");return l=Object.assign({},e),s=!0,!0}return!1}function o(e){return!!u||l[e]}function c(e){if(s&&!u){if(!e||Array.isArray(e)||"object"!=typeof e)throw new TypeError("cookieConsent (setConsent): consent should be an object.");for(var n=Object.keys(e),i=0;i<n.length;i++)t(n[i],e[n[i]]);return!0}return!1}function a(e,t,i){if("string"!=typeof e)throw new TypeError("cookieConsent (subscribe): consent key should be of type string.");if("string"!=typeof t)throw new TypeError("cookieConsent (subscribe): event name should be of type string.");if(!p.includes(t))throw new TypeError("cookieConsent (subscribe): event name should be one of "+p.join(", ")+".");if("function"!=typeof i)throw new TypeError("cookieConsent (subscribe): callback should be a function.");d[e]||(d[e]={}),d[e][t]||(d[e][t]={});var r=Math.random().toString(36).substr(2,5);return d[e][t][r]=i,{unsubscribe:n.bind({consentKey:e,eventName:t,key:r})}}var s=!1,u=!0,l={},d={},p=["add","enable","disable","change"];return{initConsent:r,getConsent:o,getConsentDisabled:i,setConsent:c,subscribe:a}}();e.exports=n},function(e,t,n){unction r(e){var t,n=encodeURIComponent(e)+"=",i=c.document.cookie.split(";");for(t=0;t<i.length;t++){for(var r=i[t];" "===r.charAt(0);)r=r.substring(1,r.length);if(0===r.indexOf(n))return decodeURIComponent(r.substring(n.length,r.length))}return null}ar c=n(6),a=n(0),s={};e.exports={create:function(e,t,n,r,c){s[e]=t,a.getConsent(e)&&i(e,t,n,r,c),a.subscribe(e,"enable",,a.subscribe(e,"disable",},read:r,remove:o}},);
if (window.crl8.EventBus) {
window.crl8.EventBus.dispatchEvent('registerExperienceOptions', {
    containerId: 'gallery-7Ta0hdXI',
    options: {"api":{"sourceId":"JfzqYiUrxrmNfcNs","sort":"Moderation"},"metrics":{"metricsId":"KBKqPivR","displayType":"Unknown","integrations":{"adobeAnalytics":{"isEnabled":true,"useStandalone":false,"customEventName":"crl8_gallery"},"ga":{"isEnabled":false}}},"experienceType":"carousel","theme":{"overrides":{"columns":{"giant":{"gutter":10},"large":{"gutter":10},"medium":{"gutter":10},"hero":{"gutter":10},"small":{"gutter":10},"extraSmall":{"gutter":10},"default":{"gutter":10}},"hover":{}}},"localizationStrings":{"en-us":{"modal":{}}},"filters":{"preset":{},"permalink":{}},"header":{"showHeader":true},"clientApiToken":"198e4f8ee26848a1bd872ac6adf6aaae","uploader":{"formFields":{"emailOptIn":{}}}}
});
window.crl8.EventBus.dispatchEvent('registerExperienceOptions', {
    containerId: 'product',
    options: {"api":{"sourceId":"elodYdTqtJmveADm","sort":"Moderation"},"metrics":{"metricsId":"vqA8tqtu","displayType":"Pdp","integrations":{"adobeAnalytics":{"isEnabled":true,"useStandalone":false,"customEventName":"crl8_gallery"},"ga":{"isEnabled":false}}},"experienceType":"carousel","theme":{"overrides":{"columns":{"giant":{"gutter":10},"large":{"gutter":10},"medium":{"gutter":10},"hero":{"gutter":10},"small":{"gutter":10},"extraSmall":{"gutter":10},"default":{"gutter":10}},"hover":{}}},"localizationStrings":{"en-us":{"modal":{}}},"filters":{"preset":{},"permalink":{}},"header":{"showHeader":true},"clientApiToken":"198e4f8ee26848a1bd872ac6adf6aaae","uploader":{"formFields":{"emailOptIn":{}}}}
});
window.crl8.EventBus.dispatchEvent('registerContainerMapper', function(containerId) {
    var experienceName = containerId;
    switch(containerId) {
        case 'gallery-7Ta0hdXI':
            experienceName = 'carousel';
            break;
        case 'product':
            experienceName = 'carousel';
            break;
    }
    return Promise.resolve(experienceName);
});
window.crl8.EventBus.dispatchEvent('initializeCuralatePixel', { pixelId: 122062, useDebug: false, cookieConsent: false });
window.crl8.EventBus.dispatchEvent('siteReady', { name: 'samsunges-0fdlmg' });
}