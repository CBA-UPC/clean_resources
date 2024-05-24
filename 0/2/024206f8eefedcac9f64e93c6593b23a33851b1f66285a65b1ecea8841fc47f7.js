(function(){const baseUrl = "https://ads.caroda.io/videoPlayer/caroda.min.js"
const ctok = "3a02e148014e0e752d"
const isSafeFrame = /safeframe.googlesyndication.com/i.test(
  window.location.href
)
if (isSafeFrame && !document.referrer) {
  console.log('CARODA', 'safe frame domain not found')
  return
}
const baseHref = isSafeFrame ? document.referrer : window.location.href
const domain = encodeURIComponent(
  baseHref.replace(/^https?:\/\/(?:www\.)?([^/?:]+).*$/, '$1')
)
const vcid = ""
const url =
  baseUrl +
  '?' +
  [
    ['ctok', ctok],
    ['domain', domain],
    ['vcid', vcid],
    ['defer', isCarodaDeferred()],
  ]
    .filter(
    .map(
    .join('&')

window.__carodaSPreload = window.__carodaSPreload || []
window.loadCarodaPlayer = function (containerElement, opts) {
  let onResolve =   const ret = new Promise(
  window.__carodaSPreload.push([containerElement, opts, onResolve])
  return ret
}

const id = 'caroda-' + Math.floor(Math.random() * 1e9)
if (document.readyState === 'loading') {
  window.document.write(
    '<scr' +
      'ipt id="' +
      id +
      '" src="' +
      url +
      '" fetchpriority="high"></scr' +
      'ipt>'
  )
}
if (!document.getElementById(id)) {
  const link = document.createElement('link')
  link.rel = 'preload'
  link.as = 'script'
  link.href = url
  document.head.appendChild(link)
  const script = document.createElement('script')
  script.src = url
  if (isCarodaDeferred()) {
    script.defer = true
  } else {
    script.async = true
  }
  script.fetchpriority = 'high'
  if (document.currentScript) {
    document.currentScript.insertAdjacentElement('afterend', script)
  } else {
    document.head.appendChild(script)
  }
}

function isCarodaDeferred() {
  if (!document.currentScript || !document.currentScript.getAttribute) {
    return false
  }
  return document.currentScript.getAttribute('defer') !== null
}})();