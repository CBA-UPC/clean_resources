(function (window) {
          let puburl = '';
          try {
            puburl = window.top.location.href;
          } catch(e) {
            puburl = window.location.href;
          }
          var prescript = document.createElement("script");
          var adHost = "https://servg1.net/";
          var href = encodeURIComponent(puburl.toLowerCase());
          var params = "?uid=613bb0d66b6a5524b8fb18d3&oab=1&puburl=" + href;
          var src = encodeURI(adHost + params);
          prescript.setAttribute("src", src);
          document.body.appendChild(prescript);
          const checkInt = setInterval(() => {
            if (window.top.document.getElementsByClassName('__openad__flag__multi__ab__').length > 0) {
              clearInterval(checkInt);
              try {
                  setTimeout( 1000);
              } catch(e){}
            }
          }, 500);
        })(window);