/* eslint-disable no-bitwise */

function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

function getCookie(key) {
  const keyValue = document.cookie.match(`(^|;) ?${key}=([^;]*)(;|$)`);
  return keyValue ? keyValue[2] : null;
}

window.generateAnonymousUserId = () => {
  window.ANONYMOUS_SEGMENT_ID =
    window.ANONYMOUS_SEGMENT_ID ||
    // always set for experiment pages (received from request's "ajs_anonymous_id" cookie or generated value fallback)
    (getCookie('ajs_anonymous_id') || '').replace(/%22/g, '') || // for non-experimental pages, get segment's ajs_anonymous_id cookie. The value is wrapped with %22 prefix / suffix, so we need to remove it
    uuidv4(); // when no segment's ajs_anonymous_id cookie available, it means it's a very first visit at hotjar.com, so generate new id
};
// This code will get executed after the person consents to cookies.
window.onConsentGivenCallback = function onConsentGivenCallback() {
  window.postMessage('onConsentGivenCallback', '*');
};
industryFloat:function(){return m},medBottomPadding:function(){return c},medTopPadding:function(){return f},moveBg:function(){return g},noBottomPadding:function(){return y},noTopPadding:function(){return p},rotateLoop:function(){return b},smallBottomPadding:function(){return _},smallTopPadding:function(){return P},spin:function(){return S},spinCounter:function(){return B}});var o="styles-module--animateScrollIn--98860",l="styles-module--animateScrollOut--d16d5",d="styles-module--colorSequence--28213",r="styles-module--diagonalFadeIn--db93f",u="styles-module--fadeIn--e5abf",a="styles-module--grow--7ac9f",i="styles-module--growAndShrink--80396",s="styles-module--growAndShrinkSubtle--74c07",m="styles-module--industryFloat--5fe75",c="styles-module--medBottomPadding--c056b",f="styles-module--medTopPadding--3c8e8",g="styles-module--move-bg--e52f9",y="styles-module--noBottomPadding--66f54",p="styles-module--noTopPadding--1f6c9",b="styles-module--rotateLoop--20da8",_="styles-module--smallBottomPadding--c1745",P="styles-module--smallTopPadding--b74a6",S="styles-module--spin--1af70",B="styles-module--spinCounter--a108e"}}]);