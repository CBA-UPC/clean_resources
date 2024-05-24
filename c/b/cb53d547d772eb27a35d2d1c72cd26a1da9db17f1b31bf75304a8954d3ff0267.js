
           (function () {
    var pvs = window.top.location == window.self.location ? 1 : 2;
    var pvid=getPVID();
    var hitDone=false;
    var sf2=null;
    if (window.DotMetricsInitScriptStress == undefined) {
        window.DotMetricsInitScriptStress = true;

        start(true);

        
        
            }
        function getDomainCookie(hasConsent){
        var ndc='0e6f61ed-9471-4ac6-aee0-6da4ec5e8146';
        if(!hasConsent){return ndc;}
        var cn='DotMetrics.DomainCookieStress';
        var ckDc,lsDc,finalValue;
        var pairs = document.cookie.split(';'), pair, result = null;
        for (var index = 0, len = pairs.length; index < len; ++index) {
            pair = pairs[index].split('=');
            pair[0] = pair[0].replace(/^\s+|\s+$/, '');
            if(pair[0]==cn){ckDc= pair[1];}
        }
        if(window.localStorage){
            try{
                lsDc=window.localStorage.getItem(cn);
            }catch(e) {}
        }

        if(ckDc&&ckDc.length==ndc.length){
            finalValue=ckDc;
        }else if(lsDc&&lsDc.length==ndc.length){
            finalValue=lsDc;
        }else{
            finalValue=ndc;
        }
        updateDomainCookie(cn,finalValue);
        return finalValue;
    }
    })(window);