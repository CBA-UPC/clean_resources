try { 
	webengage.onReady(function () { 
webengage.webPersonalization.onClick(function (data) {
    if (data.webPersonalizationId === '~6nq1a8') {
      var el = document.getElementById("signbtn");
      el.style.background ='grey';
     
        //CALLBACK LOGIC GOES HERE
            var NewsLetter="YES";
            webengage.user.setAttribute({               
              "NewsLetter": NewsLetter
            });
      webengage.track('lead submit', {
               "NewsLetter": NewsLetter
               });
      
    }
});
});

 } catch(e) { 
 	if (e instanceof Error) { 
		var data = e.stack || e.description;
		data = (data.length > 900 ? data.substring(0, 900) : data);
	 	webengage.eLog(null, 'error', data, 'cwc-error','cwc', '3k9e679');
	 }
 }
ify you about the latest updates","subMessage":"You can unsubscribe from notifications anytime","icon":"https:\/\/cdnimg.izooto.com\/default\/6.png","btn1Txt":"Later","btn2Txt":"Allow","position":"","bgColor":"#f9f9f9","titleForeColor":"#5a5a5a","messageForeColor":"#5a5a5a","btn1bgColor":"#f9f9f9","btn1ForeColor":"#808080","btn2bgColor":"#0e53a1","btn2ForeColor":"#fff"},"mobPromptFlow":0,"mobOptInDesignType":0,"mobPromptDesign":{"message":"We\'d like to notify you about the latest updates","subMessage":"You can unsubscribe from notifications anytime","icon":"https:\/\/cdnimg.izooto.com\/default\/6.png","btn1Txt":"Later","btn2Txt":"Allow","position":"","bgColor":"#f9f9f9","titleForeColor":"#5a5a5a","messageForeColor":"#5a5a5a","btn1bgColor":"#f9f9f9","btn1ForeColor":"#808080","btn2bgColor":"#0e53a1","btn2ForeColor":"#fff"},"overlayMessage":"Click on \'Allow\' to subscribe to the latest updates.","welcomePlaybook":{"status":0,"data":{"key":"46182","id":4962860,"banner":"","link":"https:\/\/www.indiatoday.in?utm_source=izooto&utm_medium=push_notifications&utm_campaign=welcome_subscribers&utm_content=notification1","title":"Thank you for subscribing!","message":"Exciting offers headed your way!","icon":"https:\/\/cdnimg.izooto.com\/playbooks\/welcome\/1.png","url":"https:\/\/www.indiatoday.in?utm_source=izooto&utm_medium=push_notifications&utm_campaign=welcome_subscribers&utm_content=notification1","rid":1000010000046182,"act_num":0,"ttl":1440}},"tabAbandonment":{"status":0,"timeout":300,"data":{"key":"46182","id":4962868,"link":"<~[@last_visited_url]~>?utm_source=izooto&utm_medium=push_notifications&utm_campaign=recover-abandoned-tab&utm_content=notification1","banner":"","title":"You were reading <~[@article_title]~>","message":"Pick up where you left off","icon":"https:\/\/cdnimg.izooto.com\/icons\/7\/abandoned_tab.jpeg","url":"<~[@last_visited_url]~>?utm_source=izooto&utm_medium=push_notifications&utm_campaign=recover-abandoned-tab&utm_content=notification1","rid":1046182002000000000,"act_num":0,"ttl":1440}},"videoPlaybook":{"status":0},"newsHub":{"allowFeed":1},"ga":{"syncNewsHub":0}};var container=document.body?document.body:document.head;if(""!==izConfig.customPixelLink){var _izAlt=document.createElement("script");_izAlt.id="izootoAlt",_izAlt.src=izConfig.customPixelLink,container.appendChild(_izAlt)}else{var _iz=document.createElement("script");_iz.id="izootoSdk",_iz.src="https://cdn.izooto.com/scripts/sdk/izooto.js",container.appendChild(_iz)}}catch(err){}