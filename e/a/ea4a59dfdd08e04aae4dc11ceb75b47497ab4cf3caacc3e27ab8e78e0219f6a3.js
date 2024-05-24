
        ;(function(){
          var script_tags = document.getElementsByTagName('script');
          var targetScript = null;
          if (script_tags.length) {
            for (var i = 0; i < script_tags.length; i++) {
              var src = script_tags[i].src;
              if (src.indexOf('Yb3HQw3wsNGDTDRBD3YMi5', 0) !== -1) {
                targetScript = script_tags[i];
              }
            }
          }
          if (targetScript) {
            nm_div = "<div data-widget-placement data-widget-host='habitat' data-endpoint='trends.newsmaxwidget.com' data-widget-id='167080'></div>",
            nm_script = document.createElement('script');
            nm_script.setAttribute('src','https://assets.newsmaxwidget.com/master/delivery.js');
            document.head.appendChild(nm_script);
            targetScript.insertAdjacentHTML('beforebegin', nm_div);
          }
        })();
        

    ;(function(){
      try {
        var url = window.location !== window.top.location ? document.referrer: document.location.href;
        var hash = 'Yb3HQw3wsNGDTDRBD3YMi5';
        var i = new Image();
        i.src = 'https://trends.newsmaxwidget.com/event/generic?t=e0BexIGnHI9%2BpNjG49wkYEyVM4y3BQNxwkTNY7a7dgvvBvz6%2FYgrimsvlkxxk7S%2BA%2FaojW3WOF3%2FGbHkr3qzjPKHxbgzvCAowRUaLS4dKWY%3D&e=adapty&s[ref]=' + encodeURIComponent(url) + '&s[hash]=Yb3HQw3wsNGDTDRBD3YMi5';
      } catch(e) {}
    })();
    