<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="robots" content="noindex,nofollow" />
    <title>cookie matching</title>
    <script
      src="https://app.najva.com/static/lib/jscookie/js.cookie.js"
      type="text/javascript"
    ></script>
    <img id="cookie_matching_pixel" src="" alt="cookie_matching_pixel" />
    <script type="text/javascript">
      var cookie_matching_cookie = Cookies.get("cookie_matching");
      if (!cookie_matching_cookie) {
        Cookies.set("cookie_matching", true, {
          expires: 30,
          domain: ".najva.com",
        });
        document.getElementById("cookie_matching_pixel").src =
          "https://biscotti.yektanet.com/pixel?id=najva&website_id=" + null;
      }

    </script>
  </head>
  <body>
    <script
      src="https://ajax.cloudflare.com/cdn-cgi/scripts/7089c43e/cloudflare-static/rocket-loader.min.js"
      data-cf-settings="7ca1429917ce03c1db7bce58-|49"
      defer=""
    ></script>
  </body>
</html>
