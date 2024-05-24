<html>
<body>

<script type="text/javascript">
	function getParameterByName(name, url) {
		var url = window.location.href;
		var name = name.replace(/[\[\]]/g, '\\$&');
		var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
			results = regex.exec(url);
		if (!results) return null;
		if (!results[2]) return '';
		return decodeURIComponent(results[2].replace(/\+/g, ' '));
	}
	function updateUrlParameter(uri, key, value) {
	    var i = uri.indexOf('#');
	    var hash = i === -1 ? ''  : uri.substr(i);
	         uri = i === -1 ? uri : uri.substr(0, i);
	
	    var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
	    var separator = uri.indexOf('?') !== -1 ? "&" : "?";
	    if (uri.match(re)) {
	        uri = uri.replace(re, '$1' + key + "=" + value + '$2');
	    } else {
	        uri = uri + separator + key + "=" + value;
	    }
	    return uri + hash;
	}
	
    var gdpr = getParameterByName("gdpr") || null;
    var gdprStr = getParameterByName("gdprstr") || getParameterByName("gdpr_consent") || getParameterByName("consent") || "";
    var usPrivacy = getParameterByName("us_privacy") || "";
    var gppStr = getParameterByName("gpp") || "";
    var gppSids = getParameterByName("gpp_sid") || "";
    var redirectUrl = getParameterByName("redirect") || getParameterByName("redirectUri");
    var partnerId = getParameterByName("partnerid") || getParameterByName("partnerId");
    var userIdEncCookie = getCookie("UTID_ENC");
    var userIdCookie = getCookie("UTID");
    var partners = [];
    var baseSyncUrl;
	
    if (gdpr === null || gdpr == 0) {
	baseSyncUrl = "https://usr.undertone.com/userPixel/syncr?gdpr=&gdprstr="; 
        partners.push(
	        {
                name: "IndexExchange",
                url: "https://ssum-sec.casalemedia.com/usermatch?s=197137&cb=https%3A%2F%2Fusr.undertone.com%2FuserPixel%2Fsync%3FpartnerId%3D57%26uid%3D",
                type: "iframe"
            },
            // {
            //     name: "AppNexus",
            //     url: "https://ib.adnxs.com/getuidnb?https://usr.undertone.com/userPixel/sync?partner=appnexus&uid=$UID"
            // },
            {
                name: "OpenX",
                url: "https://us-u.openx.net/w/1.0/cm?id=fba3d144-1026-4d31-a758-943b9545e305&r=https://usr.undertone.com/userPixel/sync?partnerId=39&uid="
            },
            {
                name: "Verizon",
                url: "https://pixel.advertising.com/ups/58293/sync?&gdpr=&gdpr_consent=&redir=true"
            },
            {
                name: "TTD",
                url: "https://match.adsrvr.org/track/cmf/generic?ttd_pid=sirnsvg&ttd_tpi=1&gdpr=0&gdpr_consent="
            },
            {
                name: "Rubicon",
                url: "https://secure-assets.rubiconproject.com/utils/xapi/multi-sync.html?p=12776",
                type: "iframe"
            },
            {
                name: "Rubicon2",
                url: "https://pixel.rubiconproject.com/exchange/sync.php?p=12776"
            },
            {
                name: "Pubmatic",
                url: "https://image8.pubmatic.com/AdServer/ImgSync?p=160318&gdpr=&gdpr_consent=&pu=https%3A%2F%2Fimage4.pubmatic.com%2FAdServer%2FSPug%3Fp%3D160318%26pmc%3DPM_PMC%26pr%3Dhttps%253A%252F%252Fusr.undertone.com%252FuserPixel%252Fsync%253FpartnerId%253D53%2526uid%253D%2523PMUID"
            },
            {
                name: "Centro",
                url: "https://pixel-sync.sitescout.com/dmp/pixelSync?nid=125&redir=https%3A%2F%2Fusr.undertone.com%2FuserPixel%2Fsync%3FpartnerId%3D54%26uid%3D%7BuserId%7D"
            },
            {
                name: "Yahoo",
                url: "https://ups.analytics.yahoo.com/ups/58545/occ"
            }
        );
    } else {
	baseSyncUrl = "https://usr.undertone.com/userPixel/syncr?gdpr=" + gdpr + "&gdprstr=" + gdprStr; 
        partners.push(
            {
                // this syncs with openx but with an extra redirect that checks the gdpr consent string first
                name: "OpenX",
                url: "https://usr.undertone.com/userPixel/syncOne?id=1&of=2&gdpr=" + gdpr + "&gdprstr=" + gdprStr
            },
            {
                name: "Yahoo",
                url: "https://ups.analytics.yahoo.com/ups/58545/occ?gdpr=" + gdpr + "&gdpr_consent" + gdprStr
            },
            {
                name: "Verizon",
                url: "https://pixel.advertising.com/ups/58293/sync?&gdpr=" + gdpr + "&gdpr_consent=" + gdprStr + "&redir=true"
            },
            {
                name: "TTD",
                url: "https://match.adsrvr.org/track/cmf/generic?ttd_pid=sirnsvg&ttd_tpi=1&gdpr=" + gdpr + "&gdpr_consent=" + gdprStr
            },
            {
                name: "Rubicon",
                url: "https://secure-assets.rubiconproject.com/utils/xapi/multi-sync.html?p=12776&gdpr=" + gdpr + "&gdpr_consent=" + gdprStr,
                type: "iframe"
            },
            {
                name: "Rubicon2",
                url: "https://pixel.rubiconproject.com/exchange/sync.php?p=12776&gdpr=" + gdpr + "&gdpr_consent=" + gdprStr
            },
            {
                name: "Pubmatic",
                url: "https://image8.pubmatic.com/AdServer/ImgSync?p=160318&gdpr=" + gdpr + " + &gdpr_consent=" + gdprStr + "&pu=https%3A%2F%2Fimage4.pubmatic.com%2FAdServer%2FSPug%3Fp%3D160318%26pmc%3DPM_PMC%26pr%3Dhttps%253A%252F%252Fusr.undertone.com%252FuserPixel%252Fsync%253FpartnerId%253D53%2526uid%253D%2523PMUID"
            },
            {
                name: "Centro",
                url: "https://pixel-sync.sitescout.com/dmp/pixelSync?nid=125&redir=https%3A%2F%2Fusr.undertone.com%2FuserPixel%2Fsync%3FpartnerId%3D54%26uid%3D%7BuserId%7D&gdpr=" + gdpr + "&gdpr_consent=" + gdprStr
            },
            {
                name: "IndexExchange",
                url: "https://ssum-sec.casalemedia.com/usermatch?s=197137&gdpr=" + gdpr + "&gdpr_consent=" + gdprStr + "&cb=https%3A%2F%2Fusr.undertone.com%2FuserPixel%2Fsync%3FpartnerId%3D57%26uid%3D",
                type: "iframe"
            }
        );
    }

   if (usPrivacy && ((usPrivacy.indexOf('{') !== 0) || (usPrivacy.indexOf('$') !== 0))) {
        for (var partnerIdx = 0; partnerIdx < partners.length; partnerIdx++) {
		partners[partnerIdx].url = updateUrlParameter(partners[partnerIdx].url, "us_privacy", usPrivacy);
        }
    }	
    if (gppStr && ((gppStr.indexOf('{') !== 0) || (gppStr.indexOf('$') !== 0))) {
        for (var partnerIdx = 0; partnerIdx < partners.length; partnerIdx++) {
		partners[partnerIdx].url = updateUrlParameter(partners[partnerIdx].url, "gpp", gppStr);
		partners[partnerIdx].url = updateUrlParameter(partners[partnerIdx].url, "gpp_sid", gppSids);
        }
    }
	
	if (redirectUrl) {
		redirectUrl = decodeURIComponent(redirectUrl);
		redirectUrl = redirectUrl.replace("$UID",'$UIDENC').replace("${UID}", '$UIDENC').replace("${DI_USER_ID}", '$UIDENC').replace("${UIDENC}", '$UIDENC');
		var gdprVal = (!gdpr || (gdpr && ((gdpr.indexOf('{') === 0) || (gdpr.indexOf('$') === 0)))) ? '' : gdpr;
		var gdprStrVal = (!gdprStr || (gdprStr && ((gdprStr.indexOf('{') === 0) || (gdprStr.indexOf('$') === 0)))) ? '' : gdprStr;
		var usPrivacyVal = (!usPrivacy || (usPrivacy && ((usPrivacy.indexOf('{') === 0) || (usPrivacy.indexOf('$') === 0)))) ? '' : usPrivacy;
		var gppStrVal = (!gppStr || (gppStr && ((gppStr.indexOf('{') === 0) || (gppStr.indexOf('$') === 0)))) ? '' : gppStr;
		var gppSidVal = (!gppSids || (gppSids && ((gppSids.indexOf('{') === 0) || (gppSids.indexOf('$') === 0)))) ? '' : gppSids;
		redirectUrl = redirectUrl.replace('${gdpr}', gdprVal).replace('{gdpr}', gdprVal).replace('${gdpr_consent}', gdprStrVal).replace('{gdpr_consent}', gdprStrVal);
		baseSyncUrl = baseSyncUrl.replace('${gdpr}', gdprVal).replace('{gdpr}', gdprVal).replace('${gdpr_consent}', gdprStrVal).replace('{gdpr_consent}', gdprStrVal);
		redirectUrl = redirectUrl.replace('${us_privacy}', usPrivacyVal).replace('{us_privacy}', usPrivacyVal); 
		baseSyncUrl = baseSyncUrl.replace('${us_privacy}', usPrivacyVal).replace('{us_privacy}', usPrivacyVal);
		redirectUrl = redirectUrl.replace('${gpp}', gppStrVal).replace('{gpp}', gppStrVal).replace('${gpp_sid}', gppSidVal).replace('{gpp_sid}', gppSidVal);
		baseSyncUrl = baseSyncUrl.replace('${gpp}', gppStrVal).replace('{gpp}', gppStrVal).replace('${gpp_sid}', gppSidVal).replace('{gpp_sid}', gppSidVal);

        if (userIdEncCookie) {
            redirectUrl = redirectUrl.replace("$UIDENC", userIdEncCookie);
        } else {
            redirectUrl = baseSyncUrl + "&partnerId=" + partnerId + "&r=" + encodeURIComponent(redirectUrl);
        }
		
		partners.push({name:"prebid",url:redirectUrl});
	}
	
    if (userIdCookie !== "" && userIdCookie != null && userIdCookie !== "0") {
        partners.push(
            {
                name: "Crosswise",
                url: "https://cw.addthis.com/t.gif?pid=46&pdid=" + userIdCookie
            }
        );
    }
    if (userIdEncCookie !== "" && userIdEncCookie != null && userIdEncCookie !== "0") {
        partners.push(
            {
                name: "Adobe",
                url: "https://dpm.demdex.net/ibs:dpid=152416&dpuuid=" + userIdEncCookie,
                partnerID: 32
            },
            {
                name: "BlueKai",
                url: "https://tags.bluekai.com/site/15597?id=" + userIdEncCookie,
                partnerID: 1
            },
            {
                name: "LiveRamp",
                url: "https://idsync.rlcdn.com/403716.gif?partner_uid=" + userIdEncCookie,
                partnerID: 31
            },
            {
                name: "Krux",
                url: "https://beacon.krxd.net/usermatch.gif?partner=undertone&partner_uid=" + userIdEncCookie,
                partnerID: 30
            },
            {
                name: "Tapad",
                url: "https://pixel.tapad.com/idsync/ex/receive?partner_id=3484&partner_device_id=" + userIdEncCookie
            }
        );

        var syncExcelate = (Math.floor(Math.random() * 10) > 8);
        if (syncExcelate) {
            partners.push(
            {
                name: "Exelate (Batch Integration)",
                url: "https://loadm.exelator.com/load/?p=204&g=1145&j=0&utid=" + userIdEncCookie,
                partnerID: 4
            });
        }
    }

    var ut_dps=[];
    function initUtdps() {
        for(var i=0,ck=document.cookie.split(';');i<ck.length;i++) {
            try {
                var c=ck[i].split('=',2);
                if(c[0].replace(/^\s+|\s+$/g,'')=='UTDP') {
                    ut_dps=unescape(c[1]).split(',');
                    break;
                }
            } catch(lue != null) ? unescape(value[1]) : "";
    }
    function plantPixels() {
        var imgs = getAllImgs();
        for (var i = 0; i < imgs.length; i++) {
            document.body.insertAdjacentElement('afterbegin', imgs[i]);
        }
    }
    function getAllImgs() {
        var imgs = [];
        for (var i = 0; i < partners.length; i++) {
            if(partners[i].partnerID == null || ut_dps.indexOf(partners[i].partnerID.toString()) == -1){
                var img;
                if (partners[i].type && partners[i].type === 'iframe') {
                    img = document.createElement('iframe');
                } else {
                    img = document.createElement("img");
                }
                img.setAttribute("src", partners[i].url);
                img.setAttribute("name", partners[i].name);
                img.setAttribute("alt", "");
                img.setAttribute("style", "display:none");
                img.setAttribute("border", "0");
                img.setAttribute("height", "1");
                img.setAttribute("width", "1");
                imgs.push(img);

                if (partners[i].partnerID != null) {
                    ut_dps.push(partners[i].partnerID);
                }
            }
        }
        return imgs;
    }

    var ua = navigator.userAgent.toLowerCase();
    var isSafari = ua.indexOf("safari") > -1 && ua.indexOf("chrome") == -1 && ua.indexOf("android") == -1;
    var isFacebookApp = ua.indexOf("fban") > -1 || ua.indexOf("fbav") > -1;
    var isIos = ua.indexOf("ipad") > -1 || ua.indexOf("iphone") > -1;

    var isCookiable = !isSafari && !(isFacebookApp && isIos);

    if (isCookiable) {
        plantPixels();

        var d=new Date();
        d.setDate(d.getDate()+1);
        if (gdpr === null || gdpr == 0) {
            document.cookie='UTDP='+escape(ut_dps.join(','))+'; expires='+d.toUTCString();
        }

    }
</script>

</body>
</html>
