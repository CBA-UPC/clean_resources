;(function (d, s, id) {
  var js,
    fjs = d.getElementsByTagName(s)[0]
  var ram = new Date().getTime()
  if (d.getElementById(id)) return
  js = d.createElement(s)
  js.id = id
  js.src = 'https://letro.jp/tags/js/letro-output.js?v=' + ram
  fjs.parentNode.insertBefore(js, fjs)
})(document, 'script', 'letro-output')
