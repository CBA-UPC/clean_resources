<html>
  <body>
    <script>
  var _s1 = document.getElementsByTagName('script')[0];
  function add_script(src, id) {
    var s = document.createElement('script');
    s.src = src;
    s.async = true;
    s.type = 'text/javascript';
    if (id) s.id = id;
    _s1.parentNode.insertBefore(s, _s1);
  }

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-1933164-1']);
  _gaq.push (['_gat._anonymizeIp']);
  _gaq.push(['_trackPageview']);
  add_script('https://stats.g.doubleclick.net/dc.js');
</script>


    <script>
(function(){
  var qs = (function () {
    var parameter_values = {};
    var search_without_question_mark = window.location.search.slice(1);
    var search_parameters = search_without_question_mark.split('&');
    for (var i = 0; i < search_parameters.length; ++i) {
      var search_parameter = search_parameters[i];
      var search_parameter_parts = search_parameter.split('=');
      var parameter_name = decodeURIComponent(search_parameter_parts[0]);
      var parameter_value = search_parameter_parts[1] && decodeURIComponent(search_parameter_parts[1]);
      parameter_values[parameter_name] = parameter_value;
    }

    return parameter_values;
  })();

  var pub_id = decodeURIComponent(qs.pubid);
  if (!pub_id) return;

  window.parent.postMessage(JSON.stringify({ id: pub_id, type: 'collapsed' }), "*");
})();
</script>

  </body>
</html>
