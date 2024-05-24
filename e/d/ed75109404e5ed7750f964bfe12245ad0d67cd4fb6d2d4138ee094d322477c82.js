<!DOt>
<script type="text/javascript">
  if (window.VK) {
    VK.init({apiId:7871968});
    VK.Auth.getLoginStatus(function(data) {
      window.parent.postMessage(data && data.status || '', '*');
    });
  } else {
    window.parent.postMessage('', '*');
  }
</script>
</body>
</html>