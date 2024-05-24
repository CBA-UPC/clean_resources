
           (function () {
    var pvs = window.top.location == window.self.location ? 1 : 2;
    var pvid=getPVID();
    var hitDone=false;
    var sf2=null;
    if (window.DotMetricsInitScript == undefined) {
        window.DotMetricsInitScript = true;

        checkTCF(start);

        
        
        function start(hasConsent){
            var rand=new Date().getTime();
            var domain = window.location.hostname;
            var pageUrl = encodeURIComponent(window.location);
            var fbia= navigator.userAgent.toLowerCase().indexOf('fbia')>=0;
            var tzOffset= new Date().getTimezoneOffset();
            var doorUrl = 'http%3a%2f%2fuk-script.dotmetrics.net%2fdoor.js%3fd%3dwww.mirror.co.uk%26t%3dlifestyle';
            var domainCookie = getDomainCookie(false);

            if(fbia){pvs=1;}

            if(!hitDone){
                var dcOpt='';
                var imgUrl = 'https://uk-script.dotmetrics.net/hit.gif?id=5031&url=' + pageUrl + '&dom=' + domain + '&r=' + rand + '&pvs=' + pvs + '&pvid=' + pvid + dcOpt + '&c=' + hasConsent + '&tzOffset=' + tzOffset + '&doorUrl=' + doorUrl;
                if(sf2!=null){imgUrl+='&sf2='+sf2;}
                var im=new Image;
                im.src = imgUrl;
                im.onload = function (){im.onload=null};

                var panelImgUrl = 'https://rm-script.dotmetrics.net/hit.gif?id=5031&url=' + pageUrl + '&dom=' + domain + '&r=' + rand + '&pvs=' + pvs + '&pvid=' + pvid + '&c=' + hasConsent + '&tzOffset=' + tzOffset;
                var panelIm = new Image;
                panelIm.src = panelImgUrl;
                panelIm.onload = 
                hitDone=true;
            }

            if(pvs==2){return;}

            NewDotMetricsLoad(;
        }
    }
            })(window);