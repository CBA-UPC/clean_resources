(function(){function getCustomUrlParameters() {}


function deserializeQueryString(qsRaw) {
  return qsRaw
    .split('&')
    .filter(Boolean)
    .reduce(function (ret, rawParameter) {
      var parameter = rawParameter.split('=')
      ret[parameter[0]] = decodeURIComponent(parameter[1])
      return ret
    }, {})
}

function getLocalStorageItem(item) {
  var itemValue
  try {
    itemValue = window.localStorage.getItem(item)
  } catch (e) {}
  return itemValue
}

// eslint-disable-next-line no-unused-vars
function getCustomUrlParameters() {
  if (window.carodaRequestedCustomUrl) {
    return
  }
  window.carodaRequestedCustomUrl = true
  var qsRaw = window.location.search.split('?')[1] || ''
  var qs = deserializeQueryString(qsRaw)

  var carodaCustomParamsRaw =
    qs.carodaCustomParams || getLocalStorageItem('carodaCustomParams')
  if (!carodaCustomParamsRaw) {
    return
  }
  try {
    var carodaCustomParams = JSON.parse(carodaCustomParamsRaw)
    delete carodaCustomParams.ctok
    delete carodaCustomParams.domain
    delete carodaCustomParams.vcid
    return carodaCustomParams
  } catch (e) {
    console.log('CARODA', e)
  }
}

// eslint-disable-next-line no-unused-vars
function reloadWithCustomParameters(carodaCustomParams) {
  var id = 'caroda-' + Math.floor(Math.random() * 1e9)
  var domain = encodeURIComponent(
    window.location.href.replace(/^https?:\/\/(?:www\\.)?([^/?:]+).*$/, '$1')
  )
  var url =
    document.currentScript.src + '&' + serializeQueryString(carodaCustomParams)
  if (!url.match(/&domain=/)) {
    url += '&domain=' + domain
  }
  if (document.readyState === 'loading') {
    window.document.write(
      '<scr' +
        'ipt id="' +
        id +
        '" src="' +
        url +
        '" crossorigin="anonymous" fetchpriority="high"></scr' +
        'ipt>'
    )
  }
  if (!document.getElementById(id)) {
    console.log('CARODA', 'deferred')
    var script = document.createElement('script')
    script.src = url
    script.defer = true
    script.crossOrigin = 'anonymous'
    document.head.appendChild(script)
  }
}


var customUrlParams = getCustomUrlParameters()
if (customUrlParams) {
  reloadWithCustomParameters(customUrlParams)
} else {
  window.console.info(new Date().toISOString(), 'Caroda SDK:', "No integration available")
  window.carodaIntegrationError = true
}})();