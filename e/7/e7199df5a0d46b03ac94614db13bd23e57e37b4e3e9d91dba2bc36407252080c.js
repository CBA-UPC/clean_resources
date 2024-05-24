!function (t, u) {
    const COOKIE_TTL = 57600; // (16 * 60 * 60);
    const CURRENT_SECONDS = Math.round(new Date() / 1000);
    
    const GDPR_APPLIES = false;
    
    const NEED_GDPR_FLAGS = ['apn', 'ttd', 'rub', 'smart', 'son', 'index'];
    const NEED_HADRON_MATCH = ['index'];
    const ID_MATCH_VENDORS = {
        "apn": 32, "ttd": 21, "adx": 755, "ado": 565, "pub": 76, "son": 104, "goo": 561, "rub": 52, "bees": 12,
        "impr": 253, "smart": 45, "ppnt": 81, "taboola": 42, "unruly": 36, "openx": 69, "ip": 561,
        "tapad": 89, "index": 10
    }
    const AU_1D_KEY = '1d';

    
    
    
     
    
    
    
    // naive way to extract domain name (example.com) from full hostname (my.sub.example.com)
    const SIMPLE_DOMAIN_MATCH_REGEX = /[a-z0-9][a-z0-9-]*\.[a-z]+$/i;
    // this next one attempts to account for some ccSLDs, e.g. extracting oxford.ac.uk from www.oxford.ac.uk
    const DOMAIN_MATCH_REGEX = /[a-z0-9][a-z0-9-]+\.[a-z.]{2,6}$/i;

    

    
    
    
    
    
    function setupCookieSync(w, d, au1d, hadronId, tcdata) {
        const pixels = [["apn", "https://secure.adnxs.com/getuid?https://ids.ad.gt/api/v1/match?id=[AU1D]&adnxs_id=$UID"], ["ttd", "https://match.adsrvr.org/track/cmf/generic?ttd_pid=8gkxb6n&ttd_tpi=1&ttd_puid=[AU1D]"], ["pub", "https://image2.pubmatic.com/AdServer/UCookieSetPug?rd=https%3A%2F%2Fids.ad.gt%2Fapi%2Fv1%2Fpbm_match%3Fpbm%3D%23PM_USER_ID%26id%3D[AU1D]"], ["adx", "https://cm.g.doubleclick.net/pixel?google_nid=audigent_w_appnexus_3985&google_cm&google_sc&google_ula=450542624&id=[AU1D]"], ["rub", "https://token.rubiconproject.com/token?pid=50242&puid=[AU1D]"], ["tapad", "https://pixel.tapad.com/idsync/ex/receive?partner_id=3185&partner_device_id=[AU1D]&partner_url=https://ids.ad.gt%2Fapi%2Fv1%2Ftapad_match%3Fid%3D[AU1D]%26tapad_id%3D%24%7BTA_DEVICE_ID%7D"], ["goo", "https://ids.ad.gt/api/v1/g_hosted?id=[AU1D]"], ["ip", "https://ids.ad.gt/api/v1/ip_match?id=[AU1D]"], ["index", "https://ssum-sec.casalemedia.com/ium?sourceid=15&uid=[HID]"], ["son", "https://sync.go.sonobi.com/us?https://ids.ad.gt/api/v1/son_match?id=[AU1D]&uid=[UID]"], ["unruly", "https://sync.1rx.io/usersync/audigent/0?dspret=1&redir=https%3A%2F%2Fids.ad.gt%2Fapi%2Fv1%2Funruly%3Fid%3D[AU1D]%26unruly_id%3D%5BRX_UUID%5D"], ["ado", "https://dpm.demdex.net/ibs:dpid=348447&dpuuid=[AU1D]&redir=https%3A%2F%2Fids.ad.gt%2Fapi%2Fv1%2Fadb_match%3Fadb%3D%24%7BDD_UUID%7D%26id%3D[AU1D]"], ["amo", "https://d.turn.com/r/dd/id/L2NzaWQvMS9jaWQvMTc0ODI0MTY1OC90LzA/url/https%3A%2F%2Fids.ad.gt%2Fapi%2Fv1%2Famo_match%3Fturn_id%3D%24!{TURN_UUID}%26id%3D[AU1D]"], ["colossus", "https://sync.colossusssp.com/ebfa23da174faa55634171c5e49d0152.gif?puid=[AU1D]&redir=http%3A%2F%2Fids.ad.gt%2Fapi%2Fv1%2Fcolossus%3Fcls_id%3D%5BUID%5D%26id%3D[AU1D]"], ["openx", "https://u.openx.net/w/1.0/cm?id=998eaf06-9905-4eae-9e26-9fac75960c53&r=https%3A%2F%2Fids.ad.gt%2Fapi%2Fv1%2Fopenx%3Fopenx_id%3D%7BOPENX_ID%7D%26id%3D[AU1D]%26auid%3D[AU1D]"]];
        let pixelCount = 0;
        const lastSeenPixelsEncoded = getCookie(d, "last_seen_pixels");
        const lastSeenPixels = lastSeenPixelsEncoded !== null ? JSON.parse(atob(lastSeenPixelsEncoded)) : {};
        for (const pixelInfo of pixels) {
            if (pixelCount > 9)
                break;

            const pixelType = pixelInfo[0];
            setCookie(d, "last_seen_" + pixelType, "", 0); // cleanup legacy

            let pixelHref = "";
            if (NEED_HADRON_MATCH.includes(pixelType)) {
                // I depend on the Hadron script here, so I am trying to do my best with what I have got
                if (hadronId == null) {
                    continue;
                }
                pixelHref = pixelInfo[1].replace(/\[HID\]/g, hadronId);
            } else {
                // replacement of the audigent ID done in the browser
                pixelHref = pixelInfo[1].replace(/\[AU1D\]/g, au1d);
            }

            if ((tcdata || {})['gdprApplies'] === true) {
                const vendorId = ID_MATCH_VENDORS[pixelType];
                if (vendorId === undefined) {
                    continue;
                }
                const vendorConsents = tcdata['vendor'].consents;
                if (vendorConsents[vendorId] !== true) {
                    continue;
                }
            }

            const lastSeenMillis = parseInt(lastSeenPixels[pixelType]) || 0;
            if (lastSeenMillis + COOKIE_TTL < CURRENT_SECONDS) {
                if (NEED_GDPR_FLAGS.includes(pixelType)) {
                    if ((tcdata || {})['gdprApplies'] === true) {
                        pixelHref += ('&gdpr=1&gdpr_consent=' + (tcdata['tcString'] || ''));
                    } else {
                        pixelHref += ('&gdpr=0');
                    }
                }

                const img = imgSrcToElement(pixelHref, d);
                d.body.appendChild(img);

                if (pixelType !== 'ip') {
                    lastSeenPixels[pixelType] = CURRENT_SECONDS
                }
                pixelCount += 1;
            }
        }
        setCookie(d, "last_seen_pixels", btoa(JSON.stringify(lastSeenPixels)));
    }

    
    function processData(w, d, t, u, tcdata) {
        w.auvars = w.auvars || {};
        w.auvars['158'] = w.auvars['158'] || {};

        if (w.auvars['158'].a_loaded === true) {
            console.warn("[Audigent] script has already been initialised. Skip further execution");
            return;
        }

        const au1d = getAudigent1d(w, d);
        const hadronId = setupHadron(w, d, au1d);

        setAudigent1d(w, d, au1d);

        // global audigent ID for all partners
        w.auvars.a = au1d;

        w.auvars['158'].a_loaded = true;
        w.auvars['158'].p = '158';
        w.auvars['158'].a = au1d;
        w.auvars['158'].ty = 'passive';
        w.auvars['158'].tcdata = tcdata;

        

        

                

        setupCookieSync(w, d, au1d, hadronId, tcdata);
        
        var a = d.createElement(t);
        a.defer = true;
        a.src = u;
        var s = d.getElementsByTagName(t)[0];
        s.parentNode.insertBefore(a, s);
    }

    
    const w = window;

    onConsent(w, w.document, t, u, processData);

}('script', 'https://p.ad.gt/api/v1/p/158');