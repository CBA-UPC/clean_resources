!function($){var aicpCookies=Cookies.noConflict();if($(".aicp").length>0){if(void 0===aicpCookies.get("aicp_click_count"))var count=0;else var count=aicpCookies.get("aicp_click_count");count>AICP.clickLimit?$(".aicp").css({display:"none"}):$(".aicp iframe").iframeTracker({blurCallback:function(){++count,aicpCookies.set("aicp_click_count",count,{expires:AICP.clickCounterCookieExp/24,sameSite:"strict",secure:"https:"===location.protocol}),count>=AICP.clickLimit&&($(".aicp").css({display:"none"}),jQuery.ajax({type:"POST",url:AICP.ajaxurl,data:{action:"process_data",nonce:AICP.nonce,ip:AICP.ip,aicp_click_count:count},success:error:))}})}}(jQuery);