
           (function () {
    var pvs = window.top.location == window.self.location ? 1 : 2;
    var pvid=getPVID();
    var hitDone=false;
    var sf2=null;
    if (window.DotMetricsInitScript == undefined) {
        window.DotMetricsInitScript = true;

        start(true);

        
        
        function start(hasConsent){
            var rand=new Date().getTime();
            var domain = window.location.hostname;
            var pageUrl = encodeURIComponent(window.location);
            var fbia= navigator.userAgent.toLowerCase().indexOf('fbia')>=0;
            var tzOffset= new Date().getTimezoneOffset();
            var doorUrl = 'http%3a%2f%2fscript.dotmetrics.net%2fdoor.js%3fid%3d4276';
            var domainCookie = getDomainCookie(false);

            if(fbia){pvs=1;}

            if(!hitDone){
                var dcOpt='';
                var imgUrl = 'https://script.dotmetrics.net/hit.gif?id=4276&url=' + pageUrl + '&dom=' + domain + '&r=' + rand + '&pvs=' + pvs + '&pvid=' + pvid + dcOpt + '&c=' + hasConsent + '&tzOffset=' + tzOffset + '&doorUrl=' + doorUrl;
                if(sf2!=null){imgUrl+='&sf2='+sf2;}
                var im=new Image;
                im.src = imgUrl;
                im.onload = 

                
                hitDone=true;
            }

            if(pvs==2){return;}

            NewDotMetricsLoad(;
        }
    }
            })(window);