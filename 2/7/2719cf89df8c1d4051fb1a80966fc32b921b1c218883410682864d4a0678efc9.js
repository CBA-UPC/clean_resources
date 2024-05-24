.vjs-ad-playing.vjs-ad-playing .vjs-progress-control{pointer-events:none}.vjs-ad-playing.vjs-ad-playing .vjs-play-progress{background-color:#ffe400}.vjs-ad-loading .vjs-loading-spinner{display:block;visibility:visible}.vjs-ad-playing .vjs-captions-button{display:none}.vjs-ad-playing .vjs-audio-button{display:none}.vjs-ad-loading .vjs-loading-spinner:before,.vjs-ad-loading .vjs-loading-spinner:after{-webkit-animation:vjs-spinner-spin 1.1s cubic-bezier(0.6, 0.2, 0, 0.8) infinite,vjs-spinner-fade 1.1s linear infinite;animation:vjs-spinner-spin 1.1s cubic-bezier(0.6, 0.2, 0, 0.8) infinite,vjs-spinner-fade 1.1s linear infinite}.vjs-ad-loading .vjs-loading-spinner:before{border-top-color:#fff}.vjs-ad-loading .vjs-loading-spinner:after{border-top-color:#fff;-webkit-animation-delay:0.44s;animation-delay:0.44s}.vjs-ad-loading .vjs-big-play-button,.vjs-ad-loading .vjs-poster,.vjs-ad-content-resuming .vjs-big-play-button,.vjs-ad-content-resuming .vjs-poster{display:none}
{try{b=b.getItem(a)}catch(a){}if(b)return k.set(a,b),b}},k.set=function(a,b,s){for(i=0;i<k[d];i++)if(result=k[i],result)try{result.setItem(a,b,s)}catch(a){}}}(window,document,"cookie","length","substring","APC");

    if (!Object.keys) {
        Object.keys = function(obj) {
            var keys = [];

            for (var i in obj) {
                if (obj.hasOwnProperty(i)) {
                    keys.push(i);
                }
            }

            return keys;
        };
    }

    // logger for AD-2589 start
    function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
              return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    try {
        var apuidInCookie = getCookie("apuid");
        var apuidInLS = APC.get("apuid");
        if (!apuidInCookie && apuidInLS) {
            var img = document.createElement("img");
            img.setAttribute('src', 'https://file.smartytouch.co/check-local-storage.png');
            img.setAttribute('style', 'display:none;');
            document.getElementsByTagName('body')[0].appendChild(img);
        }
    }catch(e){}
    // logger for AD-2589 end

    var userId = "";
    var saved = true;
    try {
        userId = APC.get("apuid");
		var pattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
        if (typeof userId !== "string" || !pattern.test(userId)){
            userId = "";
        } else {
            parent.window.postMessage("user_id_" + userId, document.referrer ? document.referrer : "*");
        }
    }catch(e){}

    if (userId === "") {
        var newUserId = "e0570148-1d42-497b-9618-ab530e828c21";
        try{
            APC.set("apuid", newUserId, {secure: true, sameSite: 'none'});
            userId = APC.get("apuid");
        }
        catch(e){}
        if (newUserId != userId) {
            saved = false;
            userId = newUserId;
        }
    }

    var apudmg = undefined;
    try{
        apudmg = APC.get('apudmg');
    }
    catch(e){}

    if(!apudmg && saved){
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

        ga('create', 'UA-83862518-1', 'auto');
        ga('set', 'dimension1', userId);
        ga('send', 'pageview');

        try{
            APC.set('apudmg', 1, {secure: true, sameSite: 'none'});
        }
        catch(e){}
    }

    var xhttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");

    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
           var data = xhttp.responseText;
            try {
                var dataNew = JSON.parse(data);
                if (typeof(dataNew['unitId']) != 'undefined') {
                    dataNew['bannerNum'] = "";
                    data = JSON.stringify(dataNew);
                }
            }catch(e){}
            parent.window.postMessage(data, document.referrer ? document.referrer : "*");
        }
    };

    xhttp.open("POST", "https://a4p.adpartner.pro/jsunit?banner_num=1706888951404586228&id=7717&is_in_viewport=0&ref=&reload_count=0&session_id=0541291e-6ff3-4ca7-bffe-6a1a390d7fec&session_pageview=1&shown=&site_visited=1&unit_id=7717", true);
    xhttp.withCredentials = true;
    xhttp.setRequestHeader("Content-type", "text/plain");
    xhttp.send(JSON.stringify({
    	"apuid": userId,
    	"width": 300,
        "screen_width": 1280,
    	"url": encodeURIComponent("https://kinoafisha.ua/ua/films/ferrari?utm_source=ukr.net&utm_medium=informer&utm_campaign=%D0%A4%D0%B5%D1%80%D1%80%D0%B0%D1%80%D0%B8")
    }));
    
</script>

</body>
</html>
