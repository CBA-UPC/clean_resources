function getGaClientId() {
  const gaClientIdCookieName = '_ga';
  const gaCookieValue = (document.cookie.match(`(^|;)*${gaClientIdCookieName}=([^;]*)`)||[])[2];

  if(gaCookieValue) {
    const gaClientId = getGaClientIdFromCookieValue(gaCookieValue);

    if(gaClientId) {
      // Refresh already existing cookie only if created by us
      if (gaCookieValue.startsWith("amp-")) {
          updateGaClientIdCookie(gaClientIdCookieName, gaCookieValue);
      }

      return gaClientId;
    }
  }

  const generatedGaClientId = generateAmpLikeGaClientId();
  updateGaClientIdCookie(gaClientIdCookieName, generatedGaClientId);

  return generatedGaClientId;    
}

function updateGaClientIdCookie(cname, cvalue) {
  setGaCookie(cname, cvalue, {
    "maxAge": 31556926000,
    "sameSite": "Lax",
    "domain": `.${window.location.hostname.split('.').slice(-2).join('.')}`,
    "path": "/",
    "secure": false});
}

function getGaClientIdFromCookieValue(value) {
  const a = value.match(/^(?:(?:GA)?1\.[\d-]+\.|(?=amp-))(.*)/);
  if(a) return a[1];
  return null;
}

function base64UrlEncodeBytes(bytes) {
  const base64StandardToUrlMap = {"+": "-","/": "_","=": ""};
  return btoa(String.fromCharCode(...bytes)).replace(/[+/=]/g, _ => base64StandardToUrlMap[_]);
}

function generateAmpLikeGaClientId() {
  const randomString = base64UrlEncodeBytes(getCryptoRandomValues(new Uint8Array(16)));
  return `amp-${randomString}`;
}

function getCryptoRandomValues(typedArray) {
  const crypto = self.crypto ?? self.crypto;
  return crypto.getRandomValues(typedArray);
}

function setGaCookie(name, value, options = {}) {
  document.cookie = `${name}=${encodeURIComponent(value)}${
    Object.keys(options)
    .reduce((acc, key) => {
        return acc + `;${key.replace(/([A-Z])/g, $1 => '-' + $1.toLowerCase())}=${
        options[key]}`;
    }, '')
  }`;
}

function getUUIDv4() {
  const payload = getCryptoRandomValues(new Uint8Array(16));

  payload[6] = (payload[6] & 0b0000_1111) | 0b0100_0000;
  payload[8] = (payload[8] & 0b0011_1111) | 0b1000_0000;

  const timeLow = typedArrayToHex(payload.subarray(0, 4));
  const timeMid = typedArrayToHex(payload.subarray(4, 6));
  const timeHigh = typedArrayToHex(payload.subarray(6, 8));
  const clockSeq = typedArrayToHex(payload.subarray(8, 10));
  const node = typedArrayToHex(payload.subarray(10, 16));

  return `${timeLow}-${timeMid}-${timeHigh}-${clockSeq}-${node}`;
}

function typedArrayToHex(typedArray) {
  const padLength = typedArray.constructor.BYTES_PER_ELEMENT * 2;

  let result = "";
  for (let i = 0; i < typedArray.length; i++) {
    result += typedArray[i].toString(16).padStart(padLength, "0");
  }

  return result;
}