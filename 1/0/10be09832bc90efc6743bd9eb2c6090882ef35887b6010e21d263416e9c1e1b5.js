
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>AdMatic User-Sync</title>
  <meta name="viewport" content="width=device-width,initial-scale=1" />


<script type="text/javascript">

    function setCookie(cname, cvalue, exdays) {
      const d = new Date();
      d.setTime(d.getTime() + (exdays*24*60*60*1000));
      let expires = "expires="+ d.toUTCString();
      document.cookie = cname + "=" + cvalue +";secure;SameSite=None;"+ expires + ";domain=.admatic.com.tr;path=/";
    };
    try {
	    let adplus_dg_id = Math.random().toString(36);
	    var i = document.createElement("img");
		(i.id = "adplus-digitalid"),
		(i.src = "https://id.ad-plus.com.tr/?token="+adplus_dg_id),
		window.document.getElementsByTagName("head")[0].appendChild(i);
		setCookie("adplus_digital_id", adplus_dg_id,30);	
    } catch(e) {};

    function setUIDS() {

        const xhrID5 = new XMLHttpRequest();
        xhrID5.withCredentials = true;

        ID5Data = `{"gdpr":0,"gdpr_consent":"","partner":381,"nbPage":8,"o":"pbjs","pd":"","provider":"","rf":"${location.host}","s":"","top":1,"u":"${location.host}","us_privacy":"","v":"4.26.0"}`;

        const xhrCriteo = new XMLHttpRequest();
        xhrCriteo.withCredentials = true;

        xhrID5.addEventListener("readystatechange", function() {
            if(this.readyState === 4) {
                setCookie("adm-id5id",this.responseText,30);
            }
        });

        xhrCriteo.addEventListener("readystatechange", function() {
            if(this.readyState === 4) {
                setCookie("adm-cto",this.responseText,30);
            }
        });

        xhrID5.open("POST", `https://id5-sync.com/g/v2/381.json?gdpr_consent=&gdpr=0`);
        xhrCriteo.open("GET", `https://gum.criteo.com/sid/json?origin=prebid&topUrl=${encodeURIComponent(location.origin)}&domain=${location.host}&bundle=&cw=1&lsw=1`);

        xhrID5.send(ID5Data);
        xhrCriteo.send();

    };

    setUIDS();

	let d = location.host;
	let o = location.origin;
	let r = document.referrer;
	let a = encodeURIComponent(`${o}?bidder=adkernel&gdpr=0&gdpr_consent=&f=i&uid={UID}`);

	function getCookie(name) {
		var nameEQ = name + "=";
		var ca = document.cookie.split(';');
		for(var i=0;i < ca.length;i++) {
			var c = ca[i];
			while (c.charAt(0)==' ') c = c.substring(1,c.length);
			if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
		}
		return null;
	};
    
    let cookies = getCookie("uids") ? JSON.parse(atob(getCookie("uids"))) : {};
	let bidder = [
		/*{
			n: "pubmatic",
			u: `https://image8.pubmatic.com/AdServer/ImgSync?p=159706&gdpr={{.GDPR}}&gdpr_consent={{.GDPRConsent}}&us_privacy={{.USPrivacy}}&pu=https%3A%2F%2Fprebid.admatic.com.tr%2Fsetuid%3Fbidder%3Dpubmatic%26gdpr%3D0%26gdpr_consent%3D%26f%3Di%26uid%3D%23PMUID`,
			t: "img",
			s: cookies?.tempUIDs?.pubmatic?.uid ?? false
		},*/
		{
			n: "criteo",
			u: `https://ssp-sync.criteo.com/user-sync/redirect?gdprapplies=&gdpr=&ccpa=&redir=https%3A%2F%2Fprebid.admatic.com.tr%2Fsetuid%3Fbidder%3Dcriteo%26gdpr%3D%26gdpr_consent%3D%26f%3Db%26uid%3D%24%7BCRITEO_USER_ID%7D&profile=186`,
			t: "iframe",
			s: cookies?.tempUIDs?.stroeerCore?.uid ?? false
		},
		{
			n: "pixad",
			u: `https://dsp-service.admatic.com.tr/users/sync/?redir=https%3A%2F%2Fprebid.admatic.com.tr%2Fsetuid%3Fbidder%3Dpixad%26gdpr%3D%26gdpr_consent%3D%26f%3Db%26uid%3D%24%7BUSER_TOKEN%7D`,
			t: "iframe",
			s: cookies?.tempUIDs?.pixad?.uid ?? false
		},
		{
			n: "stroeerCore",
			u: `https://js.adscale.de/pbsync.html?gdpr=&gdpr_consent=&redirect=https%3A%2F%2Fprebid.admatic.com.tr%2Fsetuid%3Fbidder%3DstroeerCore%26gdpr%3D0%26gdpr_consent%3D%26f%3Db%26uid%3D`,
			t: "iframe",
			s: cookies?.tempUIDs?.stroeerCore?.uid ?? false
		},
		{
			n: "rtbhouse",
			u: `https://creativecdn.com/cm-notify?pi=admatic-pbs&redir=1`,
			t: "img",
			s: cookies?.tempUIDs?.rtbhouse?.uid ?? false
		},
		{
			n: "adform",
			u: `https://cm.adform.net/cookie?redirect_url=https%3A%2F%2Fprebid.admatic.com.tr%2Fsetuid%3Fbidder%3Dadform%26gdpr%3D0%26gdpr_consent%3D%26f%3Di%26uid%3D%24UID`,
			t: "img",
			s: cookies?.tempUIDs?.adform?.uid ?? false
		},
		{
			n: "bmtm",
			u: `https://x.bidswitch.net/check_uuid/https%3A%2F%2Fprebid.admatic.com.tr%2Fsetuid%3Fbidder%3Dbmtm%26gdpr%3D0%26gdpr_consent%3D%26f%3Di%26uid%3D%24%7BBSW_UUID%7D?gdpr=0&gdpr_consent=&us_privacy=`,
			t: "img",
			s: cookies?.tempUIDs?.bmtm?.uid ?? false
		},
		{
			n: "adkernel",
			u: `https://sync.adkernel.com/user-sync?t=image&gdpr=0&gdpr_consent=&us_privacy=&r=https%3A%2F%2Fprebid.admatic.com.tr%2Fsetuid%3Fbidder%3Dadkernel%26gdpr%3D0%26gdpr_consent%3D%26f%3Di%26uid%3D%7BUID%7D`,
			t: "img",
			s: cookies?.tempUIDs?.adkernel?.uid ?? false
		},
		{
			n: "yandex",
			u: `https://an.yandex.ru/mapuid/yandex/?ssp-id=10500&gdpr=&gdpr_consent=&location=https%3A%2F%2Fprebid.admatic.com.tr%2Fsetuid%3Fbidder%3Dyandex%26gdpr%3D%26gdpr_consent%3D%26f%3Di%26uid%3D%7BYANDEXUID%7D`,
			t: "iframe",
			s: cookies?.tempUIDs?.yandex?.uid ?? false
		}
	];

	function sync() {
		for( let i in bidder ) {
			switch(bidder[i].t) {
				case "iframe":
					if(bidder[i].s == false) {
						const iframe = document.createElement('iframe');
						iframe.src = bidder[i].u;
						iframe.setAttribute('width', '1');
						iframe.setAttribute('height', '1');
						iframe.setAttribute('style', 'display: none;');

						if(document.body != null){
						    document.body.appendChild(iframe);
						}
					}
				break;
				case "img":
					if(bidder[i].s == false) {
						const img = document.createElement('img');
						img.src = bidder[i].u;
						img.style = "display: none;";
						if(document.body != null){
						    document.body.appendChild(img);
						}
					}
				break;
			}
		}

	}

	window.onload = function() {
		sync();
	};
</script>

</head>
<body>
</body>
</html>