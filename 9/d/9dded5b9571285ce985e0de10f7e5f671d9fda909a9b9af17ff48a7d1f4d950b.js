<!-- interstitial => 536142374 -->
[%ad.ad%]
<script type="text/javascript">
	const setCookie = function(name,value,minute) {
      let expires;
      if (minute) {
          let date = new Date();
          date.setTime(date.getTime() + (minute * 60 * 1000));
          expires = "; expires=" + date.toGMTString();
      }
      else {
          expires = "";
      }
      document.cookie = name + "=" + value + expires + "; path=/";
    };
    let userId = "[%userId%]";
    let name = "[%cookieName%]";
    let time = "[%cookieTime%]";
    setCookie(`${name}-${userId}`,1,parseInt(time));
</script>