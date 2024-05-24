if (typeof lwdgt_executed == 'undefined')
{
    (function()
    {
        
    window.handleWTGAd = function (e) {
        if(e.detail){
            console.log('L_wtgAdLoaded: ' + JSON.stringify(e.detail) );
            var l_wtgBox = document.querySelector('.wid-672 .sm-widget-col');
            let l_BoxURL = l_wtgBox.getElementsByTagName('a')[0];
            l_BoxURL.setAttribute('href', e.detail.url);
            let l_BoxImg = l_wtgBox.getElementsByTagName('img')[0];
            l_BoxImg.setAttribute('src', e.detail.image);
            let l_BoxText = l_wtgBox.getElementsByTagName('span')[0];
            l_BoxText.innerText = e.detail.title;
            //append impressionTrackers
            e.detail.impressionTrackers?.forEach(tracker => {
                let imgTracker = document.createElement('img');
                imgTracker.setAttribute('src', tracker);
                imgTracker.style.display = "none";
                l_wtgBox.appendChild(imgTracker);
            });
        }
    }

    window.registerWTGListeners = function () {
        document.addEventListener('wtgAdLoaded', window.handleWTGAd );
    }

        if(document.readyState === 'interactive' || document.readyState === 'complete')
        {
            registerWTGListeners();
            let tcf_compliant = (typeof __tcfapi !== 'undefined');
            window.sharemedia_gdpr_consent = '';
            window.sharemedia_gdpr_applies = 0;
            var lwdgt_link  = document.createElement('link');
            lwdgt_link.rel  = 'stylesheet';
            lwdgt_link.type = 'text/css';
            lwdgt_link.href = 'https://d.sharemedia.rs/widget/lw-sm.css';
            document.getElementsByTagName('head')[0].appendChild(lwdgt_link);
            window.lwdgt_process = function(url, widget_id)
            {
                if(url === null || url === ''){
                    let wid_element = document.getElementById(widget_id);
                    let document_url = btoa(document.URL);
                    let url_string = window.location.href;
                    let destination_url = new URL(url_string);
                    let sharemedia_preview = destination_url.searchParams.get("sharemedia_preview");
                    url = "https://d.sharemedia.rs/widget/lw?&wid=" + wid_element.getAttribute('data-wid') + "&amp=" 
                        + wid_element.getAttribute('data-amp') 
                        + "&surl=" + document_url 
                        + "&gdpr_consent=" + window.sharemedia_gdpr_consent
                        + "&gdpr_applies=" + window.sharemedia_gdpr_applies;
                    if (sharemedia_preview) {
                        url += "&sharemedia_preview=" + sharemedia_preview;
                    }
                }

                var lwdgt_request = new XMLHttpRequest();
                lwdgt_request.withCredentials = true;
                lwdgt_request.onreadystatechange = function()
                {
                    if (lwdgt_request.readyState == 4 && lwdgt_request.status == 200)
                    {
                        try {
                            document.getElementById(widget_id).innerHTML = JSON.parse(lwdgt_request.responseText);

                            var arr = document.getElementById(widget_id).getElementsByTagName('script');
                            for (var n = 0; n < arr.length; n++)
                            {
                                var s = document.createElement('script');
                                s.setAttribute('type', 'text/javascript');
                                if(arr[n].src){
                                    s.setAttribute('src', arr[n].src);
                                }
                                if(arr[n].innerHTML){
                                    s.innerHTML = arr[n].innerHTML;
                                }
                                s.async = true;
                                document.body.appendChild(s);
                            }
                        } catch (error) {

                        }
                    }
                };
                lwdgt_request.open('GET', url, true);
                lwdgt_request.send();
            }

            window.sharemediaReloadElements = function (onlyEmpty = false) {
                let lwdgt_divs = document.getElementsByClassName('lwdgt');
                let document_url = btoa(document.URL);
                let url_string = window.location.href;
                let destination_url = new URL(url_string);
                let sharemedia_preview = destination_url.searchParams.get("sharemedia_preview");
                for (var lw_i = 0; lw_i < lwdgt_divs.length; lw_i++)
                {
                    if(onlyEmpty && lwdgt_divs[lw_i].innerHTML.trim() !== ''){
                        continue;
                    }
                    lwdgt_divs[lw_i].id = 'lwdgt-' + Math.floor((Math.random() * 10000) + 1);
                    let widget_url = "https://d.sharemedia.rs/widget/lw?&wid=" + lwdgt_divs[lw_i].getAttribute('data-wid')
                        + "&amp=" + lwdgt_divs[lw_i].getAttribute('data-amp')
                        + "&surl=" + document_url
                        + "&gdpr_consent=" + window.sharemedia_gdpr_consent 
                        + "&gdpr_applies=" + window.sharemedia_gdpr_applies;
                    if (sharemedia_preview) {
                        widget_url += "&sharemedia_preview=" + sharemedia_preview;
                    }
                    lwdgt_process(widget_url, lwdgt_divs[lw_i].id);
                }
            }

            window.reloadSharemediaElements = function () {
				if(typeof window.lwdgt_timestamp === 'undefined'){
					window.lwdgt_timestamp = Date.now();
				} else {
					if(Date.now() - window.lwdgt_timestamp < 1000){
						return null;
					}
					window.lwdgt_timestamp = Date.now();
				}
				sharemediaReloadElements(true);
			}

            const sharemedia_consent_callback = (tcData, success) => {

				if (success && (tcData.eventStatus == "tcloaded" || tcData.eventStatus == "useractioncomplete")) {
					window.sharemedia_gdpr_consent = tcData.tcString;
                    window.sharemedia_gdpr_applies = tcData.gdprApplies ? 1 : 0;
                    sharemediaReloadElements(true);

					__tcfapi('removeEventListener', 2, (success) => {

						if (success) {

						}

					}, sharemedia_consent_callback);


				} else {
					// nothing atm 
				}

			}


            if(!tcf_compliant) {
                sharemediaReloadElements(false);
            } else {
                __tcfapi('addEventListener', 2, sharemedia_consent_callback);
            }
        }
        else setTimeout(arguments.callee, 200);
    })();
    var lwdgt_executed = true;
}
