if(!window.DeqwasCallBacks){window.DeqwasCallBacks=[]}(function(){function d(){var e=KcDeqwasAgent.Clone(deqwas_k_carsensor);if(!e.constant){e.constant={}}e.constant.domain="kdex005.deqwas.net";e.constant.appName="common";e.constant.collectaspx="Collection.aspx";e.constant.choiceaspx="Choice.aspx";e.constant.deqwasName="deqwas-k-carsensor";e.constant.CollectDivId="deqwas-collection-k-carsensor";e.constant.ScreenDivId="deqwas-screen";e.constant.urlLimitation=2083;e.constant.ScriptType="ad";e.constant.urlmaxlength=1024;e.constant.refmaxlength=512;return e}function c(f,e){(function(){var k=d();var o,i,j,l;var h=new KcDeqwasAgent("carsensor",o,k);var m=e>0?"1":"0";if(k.ncst){m=k.ncst}var g=h.createAdditionalParameters(k);g.ncst=m;h.setAdditionalParameters(g);h.setEssential(i);h.setParametersPriority();h.appendIframeToElement(j,l)})()}var b=Math.floor(Math.pow(10,15)*Math.random());window.DeqwasCallBacks.push({id:b,callBack:c});var a=document.createElement("script");a.src=(location.protocol=="https:"?"https:":"http:")+"//cf04.kanade-ad.net/contents/js/KcDeqwasAgent-1.0.js";a.defer=true;a.charset="UTF-8";document.getElementById("deqwas-k-carsensor").appendChild(a)})();