(()=>{const t={domain:self.origin,pathname:self.location.pathname},e="pages",a="images",s="fonts",c=/\/static\/mobile\/.*/i,n=/\/rnews\/static\/.*/i,r=[c,n,/https:\/\/news\.store\.rambler\.ru\/.*/i,/https:\/\/static\.rambler\.ru\/.*/i],i="rambler-fonts",o="rambler-images",l="rambler-static-v-1",h=[i,o,l],m={[i]:50,[o]:50,[l]:50},u=t=>{switch(t){case s:return i;case a:return o;default:return l}},f=async(t,e,a)=>{try{const s=await caches.open(a);await s.put(t,e)}catch(e){console.error(`${a}:`,e,t.url)}},w=async t=>{const e=m[t];if(!e)return;const a=await caches.open(t),s=await a.keys();if(s.length>e){const t=s.length-e,c=s.slice(0,t);await Promise.all(c.map((t=>a.delete(t))))}};self.onactivate=t=>{t.waitUntil((async()=>{try{const t=(await caches.keys()).filter((t=>!h.includes(t)));await Promise.all(t.map((async t=>caches.delete(t))))}catch(t){console.error("removeCaches error: ",t)}})())},self.onfetch=i=>{const{request:o}=i,l=(({destination:i,url:o})=>o.startsWith(t.domain)&&"document"===i?e:(t=>r.some((e=>e.test(t))))(o)?"image"===i?a:"font"===i?s:c.test(o)?"mobile_static":n.test(o)?"desktop_static":"":"")(o);"GET"===o.method&&l&&(l===e?i.respondWith((async(t,e)=>{try{const a=await fetch(t.clone());if(200===a?.status){const s=u(e);f(t,a.clone(),s),w(s)}return a}catch(e){return caches.match(t)}})(o,l)):i.respondWith((async(t,e)=>{const a=await caches.match(t);if(a)return a;const s=await fetch(t.clone()),c=u(e);return f(t,s.clone(),c),w(c),s})(o,l)))}})();* `article` contexts in Chrome, Firefox, and Safari.
 */

h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

/* Grouping content
   ========================================================================== */

/**
 * 1. Add the correct box sizing in Firefox.
 * 2. Show the overflow in Edge and IE.
 */

hr {
  box-sizing: content-box; /* 1 */
  height: 0; /* 1 */
  overflow: visible; /* 2 */
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd `em` font sizing in all browsers.
 */

pre {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/* Text-level semantics
   ========================================================================== */

/**
 * Remove the gray background on active links in IE 10.
 */

a {
  background-color: transparent;
}

/**
 * 1. Remove the bottom border in Chrome 57-
 * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
 */

abbr[title] {
  border-bottom: none; /* 1 */
  text-decoration: underline; /* 2 */
  text-decoration: underline dotted; /* 2 */
}

/**
 * Add the correct font weight in Chrome, Edge, and Safari.
 */

b,
strong {
  font-weight: bolder;
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd `em` font sizing in all browsers.
 */

code,
kbd,
samp {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/**
 * Add the correct font size in all browsers.
 */

small {
  font-size: 80%;
}

/**
 * Prevent `sub` and `sup` elements from affecting the line height in
 * all browsers.
 */

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/* Embedded content
   ========================================================================== */

/**
 * Remove the border on images inside links in IE 10.
 */

img {
  border-style: none;
}

/* Forms
   ========================================================================== */

/**
 * 1. Change the font styles in all browsers.
 * 2. Remove the margin in Firefox and Safari.
 */

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  line-height: 1.15; /* 1 */
  margin: 0; /* 2 */
}

/**
 * Show the overflow in IE.
 * 1. Show the overflow in Edge.
 */

button,
input { /* 1 */
  overflow: visible;
}

/**
 * Remove the inheritance of text transform in Edge, Firefox, and IE.
 * 1. Remove the inheritance of text transform in Firefox.
 */

button,
select { /* 1 */
  text-transform: none;
}

/**
 * Correct the inability to style clickable types in iOS and Safari.
 */

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}

/**
 * Remove the inner border and padding in Firefox.
 */

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

/**
 * Restore the focus styles unset by the previous rule.
 */

button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}

/**
 * Correct the padding in Firefox.
 */

fieldset {
  padding: 0.35em 0.75em 0.625em;
}

/**
 * 1. Correct the text wrapping in Edge and IE.
 * 2. Correct the color inheritance from `fieldset` elements in IE.
 * 3. Remove the padding so developers are not caught out when they zero out
 *    `fieldset` elements in all browsers.
 */

legend {
  box-sizing: border-box; /* 1 */
  color: inherit; /* 2 */
  display: table; /* 1 */
  max-width: 100%; /* 1 */
  padding: 0; /* 3 */
  white-space: normal; /* 1 */
}

/**
 * Add the correct vertical alignment in Chrome, Firefox, and Opera.
 */

progress {
  vertical-align: baseline;
}

/**
 * Remove the default vertical scrollbar in IE 10+.
 */

textarea {
  overflow: auto;
}

/**
 * 1. Add the correct box sizing in IE 10.
 * 2. Remove the padding in IE 10.
 */

[type="checkbox"],
[type="radio"] {
  box-sizing: border-box; /* 1 */
  padding: 0; /* 2 */
}

/**
 * Correct the cursor style of increment and decrement buttons in Chrome.
 */

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

/**
 * 1. Correct the odd appearance in Chrome and Safari.
 * 2. Correct the outline style in Safari.
 */

[type="search"] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/**
 * Remove the inner padding in Chrome and Safari on macOS.
 */

[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

/**
 * 1. Correct the inability to style clickable types in iOS and Safari.
 * 2. Change font properties to `inherit` in Safari.
 */

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/* Interactive
   ========================================================================== */

/*
 * Add the correct display in Edge, IE 10+, and Firefox.
 */

details {
  display: block;
}

/*
 * Add the correct display in all browsers.
 */

summary {
  display: list-item;
}

/* Misc
   ========================================================================== */

/**
 * Add the correct display in IE 10+.
 */

template {
  display: none;
}

/**
 * Add the correct display in IE 10.
 */

[hidden] {
  display: none;
}
</style>
  <style>/**
 * In the past these styles were inserted by webpack into index.tpl, now they are
 * inserted by the DSPTemplate super-class
 */
html, body {
  min-height: 100%;
  height: 100%;
}
</style>
</head>
<body>

<script>
  /**
   * generates random string
   */
  function getRandom() {
    var word = ((new Date()).getTime().toString(36) + "-" + Math.round(Math.random() * 1e16).toString(36)).toString().split("");
    for (var i = 0; i < word.length; i++) {
      if (isFinite(parseInt(word[i], 10))) {
        word[i] = String.fromCharCode(word[i].charCodeAt(0) + 50);
      }
    }
    return word.join("");
  }

  function checkError(errorMsg) {
    if (errorMsg.indexOf("Protocols, domains, and ports must match.") !== -1) {
      return null;
    }
  }
  
  var data = {
    // lmeuxvfg-gvxgdjfrbs
  "bid_id": "2ce0d18a3ce9cb7e",
  "campaign_oid": "638666768",
  "flight_oid": "638668068",
  "creative_oid": "638682450",
  "creative_template_oid": "637522878",
  "pixels_inline": ["https://dsp-rambler.ru/pixel/638682450/?url=vmnmd6zzEQMLqoATNjL*jq2pxPnfTnIzbL1ss-0*ak4GxDorUeBF2*xOLuyUgk-iRd*56l5ls03XOPMbeSgCZz*sXjmYagjkMA9Z8-XOAxMGxNRxOFPBSsBxRLn34WPPpz1bZsfWGIUdDj8PBbsHWbvNFdab8iIVJ-WmMAEihRlTb6RqicXMwru6vrGHzu46qcR8fPebuVqt7TtOlMq6k2JHYkOErDc5neIBc9v6Puz0droCsoK1rcrrifdpN0*9e8kyKBUbboN-t2sM9WxCnefcQHKl1JNPfeDzDGegZ8nTIN1y6qYZZCd1PjagMHLIFzJ4ZMVAzCMe1417A1RnSrf3anbkzYAJ9VmUjmuAdAxAvqF3xfSRIV-E6jqOptSCELtnArc7te25W0vCc2oAXfZ-ITHatLcnVAkTy8dEGsk*ZrF9eUSD4GQ3Z1KDdyH1GU6-aN53KjxW2p4FQDr3c3uT9Z2m*tf957z5OuT*n*UC2HRPuhobkVW8-ZIMuen7UMpO7mtMLTpo3bEPjnmd2mcnEzc2f3NDd6yIFQ9X7P9ld*LLybKunZPSn0VY73ewkVHNwIbjcae8G5vKMzrJ1mGCir402qSFW1YOrSgMBgS8xnkGVUAg6-B-GLD5kpXG7w5p5VMcjrbRfPImN1fx7J8r9sTuJk*wJCKQdr433NnrSOoFOUx7AVpzTezRKEwUXnDRagK34rRknQg-gR-jtcZglVrz4EXLg1lWdRoDt9TCugI4rg6-Mb1r4mUEMGrqUKo1*kBO5bUWQm*vodafcRoHlpFEia3xkq8liEu0SiuMZBUypMUo4LNv3lonvuFZg9FM5JMcDddMe9E7Sr6*7Fzs3n224D1ydTDeZSFQVMa7ZDUiuK-ws3LOyDsu5KfI3zXCRIHiWO*egG3rqhDInmzAsvvolo5dxFZTbLQIR-lDdZXzz6E1IGTRi2y20G6Wdu5BPhlOxu0JFs9FiU2NpbLUE92EIcawrOGRd2Kubi1364CNzd9Mfb6p*20HyUQ-cU7FH7e0T5OrHOG4k0UosJJ20SwMgId1pBxpVcjpHUKbMS9xtF9vm9wgmEAhC3aZ6An4ppiNPEMm-EDSEOxrX4wmjCKl0ECD5FnFQR4g9V9uj9jag7vJsq0HxsLwtBcqPOPpadWcbgm-mHda*1mzENv4aDO*dUXbe83VtVvVuqyqvAaEbxCP4WnBkDJ2rAi092uFzBUSXbam0Ra56VkV-E1xLDJpMakmwzbLksNsl9GYsESzlzlKTSmVdca-M1w40qCUC-jcIj-Rt*umjleY1B8CPEwGtF7H3uwucdfiR7U2ic04IkC7ro2I0ZSiRkiKO3vVhs6O8tseJ0dqRvy7ca1Xf4qJRQB9OE1fZZjsIIVUBW3lnM5rqk8J9*rnclDyV0KCV5KB*oppjyjgOE8haNzNvgmKAQCeuIA7hketKzYC8Gr7ykG2zWjHZpPY6elkECUQ2lkVetxxpdutQzFcfsq4so8whdO7F*5ZQAYqXc6w02pY-hQ2EGIHKMrWxX5s-B8UiepSPPTpMvZMTwqeKkYQpkZlbWlB6IMxFixoKX6P4Iku9HD0w4zMYgI1981a-JpDdE63Nk7jhGFUW6NzKBIpKUbpXeyWIr-CFNY8ZLDeVE4t7JwgThkmk5wqdzWKhDkzKKMwC4i2rFJI51414JPJVWGcbYwOgDEOEsWN5*s8nKtL*Ibs42*M6OUZkdqCQC756S6ii1l*DcBelqh6nT92WGGU98-x-DP9dgM6YFSN9cprpZlGaHztp4GqXT6MvT8EGpMBcpGaJE8PeOl6xchWV9cVXP8GWHnr2mSB71RAGeUgO*icr*YN0nPN-l1Kow01ccj*zVKSRvMtvTDSL*RC4QKhF82mo7hxsohhA6wx10aa-e3Lq8iSc0gid5tGwVvUqceJZzopICtuH0imSkNiCk9Bk1yQtVdmqlgbeunKgBXuGBnm-OiL3*3B*ZEwkU4YrwYGDWI9iG*etqrwueifezgxGCCgGxvkvMfzZerC-XLP8Y1PvtpPYMnRID*Re2vznUT7s4deSTlXMa6tHjsBTwScZf2BzP0KpArLVJINciXM8V8f-VplWjydtMckpMLd-avPvyfTyhtfAs44x-IV2ukGXxVSjzLDHrn1*yosAQ6Iv4R-4G3UGgynnSi2AgAAALrcvAoAAAAA&cost=0","https://www.tns-counter.ru/V13a****rambler_ad/ru/UTF-8/tmsec=rambler_cid553830001-posid553862909/"],
  "script": "//dsp-rambler.ru/tpl/Branding/4.0.1/index.js",
  "click_url_mode": "true",
  "click_url": "https://dsp-rambler.ru/click?url=zqQLzRvPJ4LW*KR1XrF0yxPO5IvGAs*gLwysFolYpKn1HcLi55twCdCj38ioCKctM1stlfNZdbY24rgWe3vG41vPdjn1ZDuDF1AqwCVcCVtUhALAYRxt4RXxJZE*EIJtrubqHaAEAvXvlSt2vihGtYmL*4Jab3knyP22GpEeCDSdIVE2DgvQKCEjAzWFjoFTw-N4q6IM0UJ66DuMsi5m4K4GF*Z3Etii3Y4REZ5m5jB3hu-O-QsNwz133NeKp1fh2-dqMgg5US954bNiBIEqCgBTO-uaQ5BTDpkJwxT31KTF5CZNPkeDCOdoDgZpvuZHR3SmUJ8f3pV4MqAcZFQyt0TB6uhj-qhLXbcoWBppeDirOHOal*IhBG-OHIsWV*YbcFhWMbhwHpXG4ug03AmUwdDFiPRf3Axs0C-zUatN5G3oNop2hVeew416YnWOYfZImRqfoI5Qj*yKyalAFvVTWHpUspE-LhgsukKyFsmHHIHz0YOWPhiM13fkbIJGNhAVrXx8eArsRR8dYiuQxqOQ4O2HUCI*mQmVW0xToCueFJX1x98-Qwz55sfr4Lt9tAadg1P4hcDftsSJNYVJKyj4IJeXn*aVaG*m4kaRv0wyDYUAm1qsSPnar1TxaYtPmxG9v-VoZ709Iy6v0TToV3b-GGXk1Yi9RCSOCagVeYK-r3cnozWoUqAP0isLyGf9WN81*CZXQPawKzsxvEUHpom7caOpFGdsTzRYt3i7xA5ok6yQzEYB1UezoECLnzmOyyNl-UwZfHi--1oTGPemhv7MWklu76dSlNK0wF2hsXO8G1qXKPq6U*LHbARPm0Txe2iRFzR7-lctXxvI8-Hg7W-RbGgTeLmaE-UZLpoUOfF9W8ahGDDbeSYcT3lvlnr1hhAderDTm*dfxp43IXTJ2VOzIdmxlhJnV1o-aUkEqXj0Z8WJBMbcIZcYiQ30vpdzMZ*6QQG9j*oT*qwa11ij*4d-s9b2c*UkJFwLorXxg7ePAdhekLQ-SGZD5jVCMgUp1JUGQR4tfDV6BBhAagmdyY-XNMOgN7FDbdoDiQVVaNo7J6OQtZ7Dxbq*4RK3vFwh5qWFkF76xHyzOu-TbGZOxVN8buKAXt8t1NucU7GlgDFAqUIUs4-Cfv*HcmkpZWLCVSMQnWeOc-Hp*SMCdIASGOksl7A3jpXOkYb-FDKKTqM2HiWMe6IakkGa5tJCGgU8tyaMtA94YsA8GCu1vdKIg*FHRbqoJL7JrCN8UXYhdOjWXSePW89xYxs-7SgdUr2z**bDtnwXoD7QBfxn3HPBZFgUs5YBFf-Owz4gA9mDVJ9cCLoAAcXwfea0xE17geZHpEu*9JA-xovCn-rKmWEAkBlbJxl7kWW4VQTxwbBgdgfKqBhMzT2EnR0YEAjpaoOIREfzFr0bDU4k0hhB6EEEFfYhIa2Uet97AkFWj2vK5-E7h*H6k-CS5N13WBc9XVxAENGwaQSEp8Oo5T2JLqWlTwtXt4FRz54DBqo7jomN5QYJ7W3ZTWb*ctiMVhAEHlixl*Wx9loPAToxNeJJeWyAHIgj8sl802BtJJ76gaTwo7GHHzH9FEqWm9B4H3G1N28AQ6G5ZP3rIkumsWyuVHitydMLeerOH5q7zFSDPVW*M7tTwfE0fR2vrOKEzzlpSn6nH0g11Lbuie9JjjRpJ8Ir0OV4X80WPeSdAqzj94p-YCgvKU4uQXPL*j8lqzvPprVLmvgjqJKNtYZ9iM1tf5W-UHUSpaKSIPnIcYdg0exlI4Kz1XANLa*Tky2RxNBFx3qTZ6hGuFbLBvG1ZpXmCDT5aR9pFWrqIarijDT6r*Rp19GL3eP5iXVMRXxruWwtjWEfHjOdXil9AiFYhx3Ng*4tSKbsKwIAAAC63LwKAAAAAA",
  "use_height_instead_margin": "",
  "markup_type": "default",
  "left_area_type": "",
  "left_area": "",
  "center_area_type": "html_url",
  "center_area": "//dsp-rambler.ru/imp/638682450/?url=s3gvyE7CqGI-gvDkbD9qgNMvNd2aizSsX5BZeaD3MYECq6iP5p6tkkTxVQsD-tfznNmyRjHIFIJUZbU4Gx*gVxG4-tq2RGS3Ai1SoAwJKUTLl6AIOYCrgWlA9J8TfnSYnib0zxXhE6swy45BbYJ9wU1iTR69KyG6RLCjDfKREa3jMO2K5WEg3u9HEwFnBzCJXM0lsdtPrv1Kj4PL6Euv3pudZDapxVAf2MlG8UZMZZDTc*do*1LmBG*szqp3ItEPGvCKGDliyERjzgJTidaH0255pAa6BJqJosgS7fKtPzO6KVjvhh7ANhscmLxkxLWU7mSctjMs2HWUehx-QKVG63P1WUyfN8taH*cAh7uH8SowXuXsL8IRsWvq-pGhm5khBLd1dLU77eYt7BKraDarSYajSv7hReNgy3Zn503fHlR4giEvfKMPmfsDXxFNydJFib8dgf7GrTQ7GZlnok-4akV-z4WHF0VEXETPQDo8qes9SxEuyRP2P-XVVPJrp7tKdPfrFvriRFnfk3B52Z3DlOsGu3ZfG5mwga7gmF7is-2uEf9iydEp1iREWal4pfEyQWrkduOrC-G4EjmJGCWhEqhRoGy*dunkm2Goc1vuIVQdNPVg2c6UO3aldXf395xaId23Plwd92d8Ji9XQWxRspbv8WZcRnJPTrUBotTJZookaBYjQJwNFHVBuIZWSCLVbJsLgAknGJpKDiyZjsJyYM-OAmgq2dOomoJyCpK21NyQXKvcFPvXdZyxBETiilaamjfhlBvj9h5iKrtVafXxY3r8lWVnG80MbrAsggBdUlYjornZAsefB760PJ4Ccr5xX-KubH7FVx1ogP5q9y0WuQDYWYqI7WuXABNKKcBFngXg4kloAvjBTljEAL2i3mIil4u3gFuBq8JP3NrOVt*v3w0ngjwTVk7at845SryGFxsJ4hflQy41Nd5aEUTOQnciIpVjF9HCV0XxTYvAglPcMQcHE3MVHiT5hLCZ1VTIPT333jBZKzudc9jJN9laPnUwtt2j5dZQNzuWYx5Sp4WEcjX382Ciz2k5X6e5tjPiktgg1n63oytr7mA336t2b8uLn8By4SOwjSXSSf3DbbY0iNEyL82AJgl7qlzp6NdbTTqiqnjAWmHLavYf4PEqQFDXj-gbpICYgFXMbaK-AJ*hm-QqCe7d9s36gC*ydZeYkcGIeCDioUqHUn2pwuyeYrJ-k2vfveiVySjuqg5AT1DzUuFWakWUpWKgemTC6gOyt5pbZ03IFxkj1DF-0A0prdtXeEE8VTwAdiiQlY2Go2S4PoBUO5AzfPdAZaZsWaFIyTFb4QcJslsxJ4qJAYMJgm8sCrWHlByBUWYJizhjaj4Rw7OzBpfhMgO88WqbKCYda7*7rqN6ZM7OqHD5ujiMGiPSNsjU-95LK9xdChI3-1T7IZF58LPGPEQ1*Ndo6gpCUgdBGn95-9i0*wkrDLNTn37kHI1eRde7VL0CYbKliADG8bPTvRYUM53tSPNAlatxu21IZ-R-0jshc*jg5jxFuxnKxIruO6POrqTxPUoJXb2-7BeRSZSUMIrFdXyJRghPQCraZO-VU2xEUBmfeY0HabV-aGvSdDq9CtbXxfGcaSqK-v-fdpfLoB5cIlLDYMfL2IyixYmuMXvb3t5zaGXLXou*Z5ruoygjnnVg2yfL-U2k8SurrigI8GOkpD3cg*6NYHc70mB8gEeKYrpa*KLsPJtsttIN86FHqfM0grGKRQDk817CHdn0fprE3dQ6vuLTiiHadoTdmQm1GkYTeH2ugPpzKJv*gccmELqfrylJPZ-Ig6ekcKEx5sjHt4bn3iq3De-yH5jZKilH*73P6ciuntR*joE2ABySOp4UBgd1NiDnNvfx6SuqKP22NUJ*hXyBc5YVpyQRVY5aiRJlAa61lPIJOvqZp8it7dMGYUr8E5hJ5RSqEvTsjX9GW0G9ajMpjJLOTjgdY66Ig9QXJpajinSlw3GcQWZepULt6S7e711jDVLpBQM9NtAi7G85pCjMjjQ*DvwyRzJMjXy7eZiXqgfq8T7nnObMdDvO5bm6WVWvN9yDF215zbZXYyIXtiJ2--HTPKHbCc9Num-YRmwCmD*YhFcwuXhXUdfhE1fYUprhww4*RcFMdHAITONQTfYGt6CxQ6lyyRwERlWKcQyVbiYUyyRTDVFrUwN2rI276g6RrwIAAAC63LwKAAAAAA&cost=0&rclid=738d4fc623df2fea",
  "center_area__height": "250px",
  "center_area__proportion": "",
  "right_area_type": "",
  "right_area": "",
  "wrapper_selector": "",
  "page_content_selector": "",
  "footer_selector": "",
  "search_bar": "",
  "banner_position": "absolute",
  "header_height": "60px",
  "top_line": "",
  "background": "#e0ebff",
  "fixed_banner_width": "",
  "horizontal_align_by_view": "",
  "css_parameter": "",
  "use_header_height_in_content_margin": "",
  "plane_name": "news_rambler",
  "mobile_mode": "",
  "media_query_1__point": "",
  "media_query_1__image": "",
  "media_query_2__point": "",
  "media_query_2__image": "",
  "media_query_3__point": "",
  "media_query_3__image": "",
  "media_query_4__point": "",
  "media_query_4__image": "",
  "media_query_5__point": "",
  "media_query_5__image": "",
  "media_query_6__point": "",
  "media_query_6__image": "",
  "media_query_7__point": "",
  "media_query_7__image": "",
  "media_query_8__point": "",
  "media_query_8__image": "",
  "media_query_9__point": "",
  "media_query_9__image": "",
  "media_query_10__point": "",
  "media_query_10__image": "",
  "observe_selector": "",
  "observe_remove_all": "",
  "observe_banner_place": "",
  "normalize_html": "",
  "scroll_rate": "",
  "fill_body": "",
  "audit_tag_type": "",
  "audit_tag": "",
  "ad_label": "false",
  "adv_info": ""
 // lmeuxvfg-gvxgdjfrbs
    };

  /**
   * Put banner as high as possible
   */
  var i = 0;
  var win = window;
  var frame = null;

  win.onerror = checkError;

  try {
    while (win.frameElement && win !== win.parent && i < 10) {
      frame = win.frameElement;
      win = win.parent;
      win.onerror = checkError;
      i++;
    }
  } catch (e) {

  }

  /**
   * Insert banner
   */
  function banner() {
    /**
     * IE11 fix
     */
    var win = window.win;
    var data = window.data;

    data.data_bplace_id = getRandom();

    data.placeTagName = "div";
    data.placeClassNameAttr = "class";
    data.placeClassName = "Branding".toLowerCase() + "-banner-place";
    data.dataPlaceIdAttr = "data-banner-place-id";

    var div = window.document.createElement(data.placeTagName);
    div.setAttribute(data.placeClassNameAttr, data.placeClassName);
    div.setAttribute(data.dataPlaceIdAttr, data.data_bplace_id);

    if (frame) {
      frame.parentNode.insertBefore(div, frame);
      frame.parentNode.removeChild(frame);
    } else {
      win.document.body.appendChild(div);
    }

    win["DSP-Branding-4.0.1"].Init({
        place: div,
        content: data
      },
      win["DSP-Branding-4.0.1"]
    );
  }

  /**
   * Check template script
   */
  if (win["DSP-Branding-4.0.1"]) {
    banner();
  } else {
    var script = window.document.createElement("script");
    script.async = true;
    script.src = "//dsp-rambler.ru/tpl/Branding/4.0.1/index.js";
    script.onload = banner;
    script.onerror = banner;

    if (frame) {
      frame.parentNode.insertBefore(script, frame);
    } else {
      window.document.head.appendChild(script);
    }
  }

</script>
</body>
</html>
