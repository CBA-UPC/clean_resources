
           (function () {
    var pvs = window.top.location == window.self.location ? 1 : 2;
    var pvid=getPVID();
    var hitDone=false;
    var sf2=null;
    if (window.DotMetricsInitScript == undefined) {
        window.DotMetricsInitScript = true;

        start(true);

        function NewDotMetricsLoad(DotMetricsContentLoadedFunction) {
            if (document.readyState != undefined && document.readyState != 'loading') {
                setTimeout(function () {
                    DotMetricsContentLoadedFunction();
                }, 100);
            } else if (document.addEventListener) {
                document.addEventListener('DOMContentLoaded', DotMetricsContentLoadedFunction, false);
            } else if (document.attachEvent) {
                document.attachEvent('onreadystatechange', DotMetricsContentLoadedFunction);
            } else if (window.addEventListener) {
                window.addEventListener('load', DotMetricsContentLoadedFunction, false);
            } else if (window.attachEvent) {
                window.attachEvent('onload', DotMetricsContentLoadedFunction);
            }
            if (window.location.href.indexOf('dotmetrics_debug=true') >= 0){
                DotMetricsContentLoadedFunction();
            }
        }

        function checkTCF(callback){
            //if cmp uses TCF __tcfapi function must exist
            if(typeof __tcfapi == 'function'){
                var lr=false;
                __tcfapi('addEventListener', 2, function(tcData, success){
                    if(success){
                        if(lr==true){return;}

                        if(tcData.gdprApplies==true){
                            //if tcloaded event or user interaction with tcf is complete (useractioncomplete) check for consent
                            if(tcData.eventStatus === 'tcloaded' || tcData.eventStatus === 'useractioncomplete'){
                                //make sure that event is handled only once regardless of removeEventListener
                                lr=true;

                                //stop listening for TCF events
                                __tcfapi('removeEventListener', 2,function(success){},tcData.listenerId);

                                if(typeof tcData.specialFeatureOptins != 'undefined' && typeof tcData.specialFeatureOptins[2] != 'undefined'){
                                    sf2=tcData.specialFeatureOptins[2];
                                }

                                //check for vendor consent, Dotmetrics vendor id 896
                                if(typeof tcData.vendor != 'undefined' && typeof tcData.vendor.consents != 'undefined' && tcData.vendor.consents[896]==true){
                                    //we have user consent
                                    callback(true);
                                }else{
                                    //we dont have user consent
                                    callback(false);
                                }
                            }
                            //This is the event status whenever the UI is surfaced or re-surfaced to a user.
                            if(tcData.eventStatus === 'cmpuishown'){
                                lr=true;
                                callback(false);
                            }
                        }else if(tcData.gdprApplies==false){
                            lr=true;
                            callback(true);
                        }else{
                            lr=true;
                            callback(false);
                        }
                    }
                });
            }else{
                //cmp does not use TCF
                callback(true);
            }
        }

        function start(hasConsent){
            var rand=new Date().getTime();
            var domain = window.location.hostname;
            var pageUrl = encodeURIComponent(window.location);
            var tzOffset= new Date().getTimezoneOffset();
            var doorUrl = 'http%3a%2f%2fscript.dotmetrics.net%2fdoor.js%3fid%3d3102';

            var domainCookieEnabled = true;
            var useDomainCookie = hasConsent && domainCookieEnabled;
            var domainCookie = getDomainCookie(useDomainCookie);

            if(!hitDone){
                var dcOpt = useDomainCookie ? '&dc=' + domainCookie : '';
                var imgUrl = 'https://script.dotmetrics.net/hit.gif?id=3102&url=' + pageUrl + '&dom=' + domain + '&r=' + rand + '&pvs=' + pvs + '&pvid=' + pvid + dcOpt + '&c=' + hasConsent + '&tzOffset=' + tzOffset + '&doorUrl=' + doorUrl;
                if(sf2!=null){imgUrl+='&sf2='+sf2;}
                var im=new Image;
                im.src = imgUrl;
                im.onload = function (){im.onload=null};

                
                hitDone=true;
            }

            if(pvs==2){return;}

            NewDotMetricsLoad(function () {
                if (document.createElement) {
                    if (typeof window.DotMetricsSettings == 'undefined') {
                        window.DotMetricsSettings =
                                    {
                                        CurrentPage: window.location,
                                        Debug: false,
                                        DataUrl: 'https://script.dotmetrics.net/SiteEvent.dotmetrics',
                                        PostUrl: 'https://script.dotmetrics.net/DeviceInfo.dotmetrics',
                                        ScriptUrl:  'https://script.dotmetrics.net/Scripts/script.js?v=256',
                                        ScriptDebugUrl:  'https://download.dotmetrics.net/Script/script.debug.js?v=8c983b6b-b980-433a-a43b-a45c45ba5176',
                                        PingUrl: 'https://script.dotmetrics.net/Ping.dotmetrics',
                                        AjaxEventUrl: 'https://script.dotmetrics.net/AjaxEvent.dotmetrics',
                                        ExpFPEventUrl: 'https://script.dotmetrics.net/ExpFP.dotmetrics',
                                        NCSScriptUrl: 'https://script.dotmetrics.net/Scripts/ncs-script.js?v=256',
                                        NCSScriptDebugUrl: 'https://download.dotmetrics.net/Script/ncs-script.debug.js?v=5d7ede05-0572-40c5-90da-900f2b1c9a30',
                                        NCSHitUrl: 'https://script.dotmetrics.net/unconsentedvideohit.gif',
                                        SiteSectionId: 3102,
                                        SiteId: 579,
                                        FlashUrl: 'https://script.dotmetrics.net/DotMetricsFlash.swf',
                                        TimeOnPage: 'DotMetricsTimeOnPage',
                                        AjaxEventTimeout: 500,
                                        AdexEnabled: true,
                                        AdexConfigUrl: 'https://adex.dotmetrics.net/adexConfig.js?v=256&id=3102',
                                        BeaconUrl: 'https://script.dotmetrics.net/BeaconEvent.dotmetrics',
                                        PVID:pvid,
                                        DomainCookie: domainCookie,
                                        VideoTrackingEnabled: true,
                                        ErrorEventUrl: 'https://script.dotmetrics.net/ErrorEvent.dotmetrics'
                                    };

                        var scriptUrl;
                        var scriptType;
                        if(hasConsent==false){
                            if(window.DotMetricsSettings.VideoTrackingEnabled==true){
                                scriptType=window.location.href.indexOf('dotmetrics_debug=true') >= 0 ? 'NCSScriptDebugUrl' : 'NCSScriptUrl';
                                scriptUrl = window.DotMetricsSettings[scriptType];
                            }
                        }else{
                            scriptType=window.location.href.indexOf('dotmetrics_debug=true') >= 0 ? 'ScriptDebugUrl' : 'ScriptUrl';
                            scriptUrl = window.DotMetricsSettings[scriptType];
                        }

                        if(typeof scriptUrl != 'undefined'){
                            var fileref = document.createElement('script');
                                fileref.setAttribute('type', 'text/javascript');
                                fileref.setAttribute('src', scriptUrl);
                                fileref.setAttribute('async', 'async');
                                if (typeof fileref != 'undefined') {
                                    document.getElementsByTagName('head')[0].appendChild(fileref);
                                }
                        }

                        window.postMessage({ type: 'DotmetricsDoorEvent', siteId: DotMetricsSettings.SiteId, sectionId: DotMetricsSettings.SiteSectionId},'*');

                        

                        if(hasConsent!=false && window.DotMetricsSettings.AdexEnabled){
	                        fileref = document.createElement('script');
	                        fileref.setAttribute('type', 'text/javascript');
	                        fileref.setAttribute('src', window.DotMetricsSettings.AdexConfigUrl);
	                        fileref.setAttribute('async', 'async');
	                        if (typeof fileref != 'undefined') {
	                             document.getElementsByTagName('head')[0].appendChild(fileref);
                            }
                        }
                    }
                }
            });
        }
    }
    function getPVID(){
        var pvid;
        try{
            if(crypto.randomUUID){
                pvid=crypto.randomUUID();
            }else{
                pvid=([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c => (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16))
            }
        }catch(e){
            pvid = (Date.now().toString(36) + Math.random().toString(36).substr(2, 24));
        }
        return pvid;
    }
    function getDomainCookie(hasConsent){
        var ndc='aa109f1f-7b58-4c52-a1c5-e8937add19a1';
        if(!hasConsent){return ndc;}
        var cn='DotMetrics.DomainCookie';
        var pairs = document.cookie.split(';'), pair, result = null;
        for (var index = 0, len = pairs.length; index < len; ++index) {
            pair = pairs[index].split('=');
            pair[0] = pair[0].replace(/^\s+|\s+$/, '');
            if(pair[0]==cn){updateDomainCookie(cn,pair[1]);return pair[1];}
        }
        if(window.localStorage){
            try{
                var lsDc=window.localStorage.getItem(cn);
                if(lsDc){ updateDomainCookie(cn,lsDc); return lsDc; }
            }catch(e) {}
        }
        updateDomainCookie(cn,ndc);
        return ndc;
    }
    function updateDomainCookie(cn,ndc){
        var exdate = new Date();exdate.setFullYear(exdate.getFullYear() + 1);
        var value = ndc+'; expires='+exdate.toUTCString()+';path=/;secure;';
        document.cookie = cn + '=' + value + ';path=/;secure;';
        if(window.localStorage){
            try{ window.localStorage.setItem(cn,ndc); }catch(e) {}
        }
    }
})(window);fault\u0004Enter your VPA":"Enter your VPA","default\u0004Prorate amount: <b>{0} = {1}</b>":"Prorate amount: <b>{0} = {1}</b>","default\u0004Add Google Pay as a payment account to pay for your purchases and take the protection of Datatrans with you":"Add Google Pay as a payment account to pay for your purchases and take the protection of Datatrans with you","default\u0004Value:":"Vrijednost:","default\u0004We created account for you":"Kreirali smo profil za tebe","default\u0004It looks like you already have access to this content!":"Čini se da već imate pristup ovom sadržaju!","default\u0004Renew now":"Obnovi sada","default\u0004Try again":"Pokušaj ponovo","default\u0004Expires in":"Istječe za","default\u0004Last step for registration":"Zadnji korak registracije","default\u0004Payment details":"Payment details","default\u0004Add Apple Pay as a payment account to pay for your purchases and take the protection of Braintree with you":"Dodajte Apple Pay za plaćanje i iskoriste zaštitu koju Vam pruža Braintree","piano.id\u0004Password must contain a special character.":"Lozinka mora sadržavati neki od posebnih znakova.","default\u0004Zuora offer":"Zuora ponuda","default\u0004<b>{0} *{1}</b>":"<b>{0} *{1}</b>","default\u0004Did you receive a voucher?":"Jeste li zaprimili kupon?","default\u0004[%% subHeader %%]":"[%% subHeader %%]","default\u0004Terms of Use":"Pravila korištenja","default\u0004Edit subscription address":"Uredite adresu pretplate","default\u0004Identification number":"Identifikacijski broj","default\u0004Delete":"Delete","default\u0004A confirmation has been sent to <span class=\"apple-pay-receipt__mark\">{{user.email}}</span>":"Poslana je potvrda na <span class=\"apple-pay-receipt__mark\">{{user.email}}</span>","default\u0004Please remember, subscriptions paid for in cash are not eligible for refunds.":"Please remember, subscriptions paid for in cash are not eligible for refunds.","default\u0004Dear":"Dragi","default\u0004Loading your PayPal account, please wait":"Učitavanje PayPal računa, molimo pričekaj","default\u0004Postal Code":"Poštanski broj","default\u0004Default":"Zadano","default\u0004New address":"Nova adresa","default\u0004 expires in <b>{0}/{1}</b>":" expires in <b>{0}/{1}</b>","default\u0004You should be already logged in":"Trebali bi već biti prijavljeni","default\u0004Here is your login link":"Ovdje se nalazi vaš link za prijavu","default\u0004Click to button below to pay with your <strong>Coinbase</strong> account.":"Click to button below to pay with your <strong>Coinbase</strong> account.","default\u0004Click to button below to pay with your <strong>PayPal</strong> account.":"Kliknite niže za plaćanje s <strong>PayPal</strong> računom.","default\u0004Redeem":"Otkupiti","default\u0004Your subscription for <b>{0}</b> will begin immediately":"Your subscription for <b>{0}</b> will begin immediately","default\u0004Redemption is allowed after <b>{0}</b>":"Redemption is allowed after <b>{0}</b>","default\u0004Address 1":"Adresa 1","default\u0004Loading...":"Učitavanje...","default\u0004MM/YY":"MM/YY","default\u0004Address 2":"Adresa 2","default\u0004Address 3":"Address 3","default\u0004C.E. (Foreign citizenship card)":"C.E. (Foreign citizenship card)","checkout.publisher\u0004Having an issue?":"Having an issue?","checkout.publisher\u0004Waiting for publisher response...":"Waiting for publisher response...","default\u0004Your PIN will be stored for recurring payments":"Vaš PIN će biti spremljen za ponavljajuća plaćanja.","default\u0004Transaction details":"Detalji transakcije","default\u0004Download":"Preuzimanje","default\u0004Address":"Address","default\u0004Address:":"Adresa:","default\u0004State":"State","default\u0004You are about to be charged <b>{{input.confirmated.amount}}</b>, plus taxes":"Naplatit će se <b>{{input.confirmated.amount}}</b>, plus PDV","default\u0004Check availability":"Provjerite dostupnost","default\u0004Notification has been sent to (+{{bill.phoneCountryCode}}) {{bill.phoneNumber}}":"Notifikacija je poslana na (+{{bill.phoneCountryCode}}) {{bill.phoneNumber}}","default\u0004Thanks! Your receipt and barcode are ready and have been emailed to <strong>{{user.email}}</strong>. Your subscription will begin upon redemption and payment of <strong>{{input.chargeDisplayAmount}}</strong> at any participating store.":"Thanks! Your receipt and barcode are ready and have been emailed to <strong>{{user.email}}</strong>. Your subscription will begin upon redemption and payment of <strong>{{input.chargeDisplayAmount}}</strong> at any participating store.","default\u0004Change password":"Promijenite lozinku","default\u0004You are about to be charged <b>{{input.chargeAmount}} kn</b>.":"Naplatit ćemo vam <b>€ {{input.chargeAmount}}</b>.","default\u0004Failed to redeem the access.":"Neuspjelo odobrenje pristupa.","default\u0004Automatically renew my subscription when the time comes.":"Automatski obnovite pretplatu kada bude potrebno.","default\u0004[%% header %%]":"[%% header %%]","default\u0004Delete user":"Obriši korisnika","default\u0004 0\"\n                 context=\"checkout.platform\"\n                 arg0=\"{{storage.sharedAccountsDifference}}\"\n              >\n                  Please remove {0} account(s) to proceed.\n              ":" 0\"\n                 context=\"checkout.platform\"\n                 arg0=\"{{storage.sharedAccountsDifference}}\"\n              >\n                  Please remove {0} account(s) to proceed.\n              ","default\u0004Your <span class=\"bold payment-method\">Credit card</span> has been charged.":"Your <span class=\"bold payment-method\">Credit card</span> has been charged.","default\u0004Waiting for publisher response...":"Čekanje na odgovor izdavača...","default\u0004Leave this shared subscription":"Napusti ovu zajedničku pretplatu","default\u0004 0\">You are moving onto a subscription that allows more shared accounts than your current plan. The amount of accounts you are able to add is listed below.":" 0\">You are moving onto a subscription that allows more shared accounts than your current plan. The amount of accounts you are able to add is listed below.","default\u0004Your access is confirmed!":"Pristup vam je omogućen!","default\u0004Hello,":"Pozdrav,","default\u0004Use this information for paying via ATM or online banking system":"Koristite ove podatke za plaćanje putem bankomata ili internetskog bankarskog sustava","default\u0004I don't have an account":"Nemam profil","default\u0004Your access to {0} will begin immediately":"Your access to {0} will begin immediately","default\u0004You just got access to ":"Dobili ste pristup na","default\u0004Area":"Area","checkout.publisher\u0004Cards":"Cards","default\u0004Manage your shared accounts":"Manage your shared accounts","default\u0004Transaction info:":"Info o transakciji:","default\u0004Redemption is allowed from <b>{0}</b> to <b>{1}</b>Ø":"Otkup je dopušten od <b>{0}</b> do <b>{1}</b>Ø","default\u0004Gift details:":"Detalji poklona: ","default\u0004Your access to {0} will end immediately":"Your access to {0} will end immediately","default\u0004uBlock Origin":"uBlock Origin","default\u0004Choose from any one of our options below.":"Odaberite jednu od opcija niže.","default\u0004Generate Boleto":"Generate Boleto","default\u0004Add a new Apple Pay card":"Add a new Apple Pay card","default\u0004Feel free to re-try later":"Pokušaj ponovno kasnije","default\u0004We support":"Podržavamo","default\u0004Click <a href=\"{{ contractInfo.homepageUrl }}\">here</a> to visit the home page.":"Kliknite <a href=\"{{ contractInfo.homepageUrl }}\">here</a> za odlazak na početnu stranicu.","default\u0004Password must have at least %d characters.":"Lozinka mora imati najmanje %d znakova.","default\u0004Edit Google Pay card":"Edit Google Pay card","default\u0004First name (Optional)...":"Ime (Neobavezno)...","default\u0004{0} may not be empty":"{0} ne smije biti prazno","default\u0004 0\">You are moving onto a subscription that allows fewer shared accounts than your current plan. Please remove accounts from your plan to proceed.":" 0\">You are moving onto a subscription that allows fewer shared accounts than your current plan. Please remove accounts from your plan to proceed.","default\u0004Please wait {0} minutes to reset password again":"Molimo sačekajte {0} minute/a za ponovno resetiranje lozinke","default\u0004{{upi.display_name}}":"{{upi.display_name}}","default\u0004\n                Before continuing make sure to review [%% name %%]'s\n                <a class=\"pn-boilerplate__link unbutton\" target=\"_blank\" href=\"[%% privacyPolicy %%]\">\n                    privacy policy\n                </a>\n                and\n                <a class=\"pn-boilerplate__link unbutton\" target=\"_blank\" href=\"[%% terms %%]\">\n                    terms of service\n                </a>\n                .\n            ":"\n                Before continuing make sure to review [%% name %%]'s\n                <a class=\"pn-boilerplate__link unbutton\" target=\"_blank\" href=\"[%% privacyPolicy %%]\">\n                    privacy policy\n                </a>\n                and\n                <a class=\"pn-boilerplate__link unbutton\" target=\"_blank\" href=\"[%% terms %%]\">\n                    terms of service\n                </a>\n                .\n            ","default\u0004Back":"Natrag","default\u0004Purchases":"Kupnje","default\u0004Close":"Zatvori","default\u0004Purchase":"Kupnja","default\u0004You now have access to <span class=\"bold resource-name\">{{app.name}} - {{voucher.resource.name}}</span>":"Sada imate pristup na <span class=\"bold resource-name\">{{app.name}} - {{voucher.resource.name}}</span>","default\u0004This information has been sent to <strong>{{bill.email}}</strong>":"Ova informacija je poslana na <strong>{{bill.email}}</strong>","default\u0004for {{getSelectedTerm().firstPeriod}}":"za {{getSelectedTerm().firstPeriod}}","default\u0004Welcome, {{user.email}}":"Dobrodošao, {{user.email}}","default\u0004\n                  You have reached your shared accounts limit.\n              ":"\n                  You have reached your shared accounts limit.\n              ","default\u0004Use your Dwolla account to pay for your purchases and take the protection of Amazon with you":"Upotrijebite svoj Dwolla račun za plaćanje","default\u0004See all payment options":"Pogledaj sve mogućnosti plaćanja","default\u0004Email address":"Email adresa","default\u0004We're going to redirect you to iDeal<br>so you can complete your purchase":"Preusmjerit ćemo te na iDeal <br> kako bi mogao dovršiti kupnju.","default\u0004This email is being sent to <a href=\"mailto:{{user_email}}\">{{user_email}}</a>. If you did not register this account, please disregard this email. If you have any questions or encounter any problems, please send an email to <a href=\"mailto:{{support_email}}\">{{support_email}}</a>.":"\nOvaj e-mail je poslan na <a href=\"mailto:{{user_email}}\"> {{user_email}} </a>. Ako niste registrirali ovaj račun, zanemarte ovaj e-mail. Ako imate pitanja ili naiđete na bilo kakav problem, pošaljite e-mail na <a href=\"mailto:{{support_email}}\"> {{support_email}} </a>.","default\u0004Incl. {{getVatLabel()}}":"Incl. {{getVatLabel()}}","default\u0004Please continue to find alpha-numeric code required for customer\n            authorization.\n          ":"Please continue to find alpha-numeric code required for customer\n            authorization.\n          ","default\u0004Edit Apple Pay card":"Edit Apple Pay card","default\u0004Your Apple Pay card":"Your Apple Pay card","default\u0004For a company":"Za tvrtku","default\u0004Enter a helpful description of your issue below then\n                    <hit></hit>\n                    the submit button. You can track the progress of your issue in the help section.\n                ":"Unesite što detaljnije opis poteškoće niže i kliknite <hit></hit> za slanje. Daljnje rješavanje možete pratiti na stranici podrške.\n","default\u0004Grants access to":"Omogućite pristup","default\u0004Recipient name":"Ime primatelja","default\u0004AdBlock Plus":"AdBlock Plus","checkout.publisher\u0004Submit":"Submit","default\u0004An email confirmation has been sent to <a class=\"mail\" href=\"javascript:void(0);\">{{user.email}}</a>":"An email confirmation has been sent to <a class=\"mail\" href=\"javascript:void(0);\">{{user.email}}</a>","default\u0004Checkout with {{app.name}}":"Kupovina s {{app.name}}","default\u0004Return":"Povratak","default\u0004When payment is complete, you will receive an e-mail notifying you of your access":"Kada je plaćanje završeno, primit ćete obavijest na e-mail o vašem pristupu\n","default\u0004AdBlock":"AdBlock","default\u0004Print now":"Printaj","default\u0004View your accounts":"View your accounts","default\u0004Select a country or region":"Odaberite državu ili regiju","default\u0004Remember my direct debit account for future payments":"Remember my direct debit account for future payments","default\u0004Show details":"Prikaži detalje","default\u0004Having an issue?":"Imate li poteškoća?","default\u0004Complete Purchase":"Završite kupovinu","default\u0004First name is required":"Ime je obavezno","default\u0004Instantly with Apple Pay":"Odmah uz Apple Pay","default\u0004It seems that your credentials are not valid":"Čini se da vaši podaci nisu valjani","default\u0004Select your billing country":"Odaberite državu za naplatu","default\u0004You will receive an email confirming that you now have access to {{selectedTerm.resource.name}}. This may\n                  take up to 24 hours.":"Primit ćete e-mail potvrdu da sada imate pristup {{selectedTerm.resource.name}}. Ovo može potrajati do 24 sata.","default\u0004Cancel":"Poništi","default\u0004Complete":"Završite","default\u0004Company name":"Naziv tvrtke","default\u0004Please contact your administrator if you believe this is an error.":"Kontaktirajte administratora ukoliko smatrate da je ovo greška.","default\u0004Click <b>Enabled on this site</b> until the text reads <b>Disabled on this site</b>.":"Click <b>Enabled on this site</b> until the text reads <b>Disabled on this site</b>.","default\u0004Your access was successfully verified!":"Pristup je uspješno verificiran!","default\u0004Resend via email":"Pošalji ponovo putem email","default\u0004Gift":"Poklon","default\u0004Citizenship card":"Iskaznica državljanstva","default\u0004Add a card":"Dodajte kreditnu karticu","default\u0004Go back to previous step":"Povratak na prethodni korak","default\u0004Identification by the mobile line":"Identifikacija putem mobilne linije","piano.id\u0004That combination of email and password is not recognized":"Prijava nije moguća sa unesenim podacima","default\u0004Thanks, {{business_name}}":"Hvala, {{business_name}}","default\u0004We recently created an account for you at <a href='{{business_url}}'>{{business_url}}</a>. Please set your password by following this link: ":"Nedavno smo kreirali profil za tebe na  <a href='{{business_url}}'>{{business_url}}</a>. Postavite svoju lozinku na ovome linku:","default\u0004You just purchased":"Upravio ste kupili","default\u0004Payment source":"Izvor plaćanja","default\u0004Please log in first.":"Molimo da se prvo logirate.","default\u0004Get help!":"Zatražite pomoć!","default\u0004Site Licensing integration error.":"Site Licensing integration error.","default\u0004Please, log in first":"Prvo se prijavite","default\u0004Subscription plan line up":"Poravnavanje plana pretplate\n","default\u0004Thank you for registering an account with {{business_name}}. For your protection, please verify your email address by <a href=\"{{email_confirmation_url}}\" target=\"_blank\">clicking here</a> or by copying this URL into your browser:":"Zahvaljujemo što ste se registrirali na {{business_name}}. Radi svoje zaštite potvrdite svoju adresu e-pošte <a href=\"{{email_confirmation_url}}\" target=\"_blank\"> klikom ovdje </a> ili kopiranjem ovog URL-a u svoj preglednik:\n","default\u0004Your active authorizations":"Your active authorizations","default\u0004Invalid CVV: it must be 4 digits for American Express or 3 digits for other cards":"Nevažeći CVV: mora imati 4 znamenke za American Express ili 3 znamenke za ostale kartice","default\u0004Your PayPal accounts":"Vaši PayPal računi","default\u0004Redemption is allowed before <b>{0}</b>":"Redemption is allowed before <b>{0}</b>","default\u0004Subscribe":"Pretplati se","default\u0004Company Name":"Naziv tvrtke","default\u0004Where to pay from?":"Odakle platiti?","default\u0004 to continue or":"nastaviti ili","default\u0004Click <b>Done</b> below to close this window and refresh the page.":"Kliknite <b>Done</b> za zatvoriti ovaj prozor i osvježavanje stranice.","default\u0004It looks like you have already redeemed your access!":"Čini se da ste već iskoristili pristup!","default\u0004Remember for future payments":"Zapamti za buduća plaćanja","default\u0004City":"Grad","default\u0004<b>{0}</b>":"<b>{0}</b>","default\u0004Choose":"Odaberite","default\u0004Shared subscriptions: ":"Shared subscriptions: ","default\u0004Reset password instructions has been sent to":"Upute za resetiranje lozinke poslane su na","checkout.publisher\u0004Expires":"Expires","default\u0004[%% callToAction2Copy %%]":"[%% callToAction2Copy %%]","default\u0004An email confirmation has been sent to\n            <a class=\"mail\" href=\"javascript:void(0);\">{{user.email}}</a>":"E-mail potvrda je poslana na\n            <a class=\"mail\" href=\"javascript:void(0);\">{{user.email}}</a>","default\u0004Unfortunately, your gift has been revoked":"Nažalost, vaš poklon je opozvan","default\u0004Your card: ":"Your card: ","default\u0004Your access to {0} will begin {1}":"Your access to {0} will begin {1}","default\u0004Because you are checking out in our sandbox environment, we will simulate\n                the payment process for easy testing.  Click the complete button below\n                to simulate a purchase.":"Because you are checking out in our sandbox environment, we will simulate\n                the payment process for easy testing.  Click the complete button below\n                to simulate a purchase.","default\u0004Use your <strong>PayPal account</strong> to pay for your purchases and take the protection of Braintree with you":"Koristi svoj  <strong>PayPal račun </strong> da platiš svoju kupnji i ponesi zaštitu Branitree-a sa sobom","default\u0004Add a new card":"Dodajte novu karticu","default\u0004Your credit and debit cards":"Vaše kreditne i debitne kartice","default\u0004Later:":"Kasnije:","default\u0004Password must contain lowercase and uppercase letters":"Lozinka mora sadržavati velika i mala slova","default\u0004Please remove {0} account(s) to proceed.":"Please remove {0} account(s) to proceed.","default\u0004Cardholder":"Vlasnik kartice","default\u0004Enable auto renew":"Uključite automatsku obnovu","default\u0004Select bank...":"Select bank...","default\u0004Natural person":"Natural person","default\u0004Thanks for your purchase!":"Hvala na kupnji!","default\u0004/ {{terms[0].firstPeriod}}":"/ {{terms[0].firstPeriod}}","default\u0004Manage":"Uredi","default\u0004Register":"Register","default\u0004Confirm":"Potvrdite","default\u0004[%% success-subheader %%]":"[%% success-subheader %%]","default\u0004Switch to Another Resource? You can always come back.":"Želite se prebaciti na druga sredstva? Uvijek se možete vratiti.","default\u0004Create agreement":"Kreirajte sporazum","piano.id\u0004Password must contain uppercase and lowercase letters.":"Lozinka mora sadržavati velika i mala slova.","default\u0004Provide your payment details. The promotion used for this subscription will be applied at the first renewal. You will be charged {{selectedTerm.firstRealPriceWithTax}} today for this extended period.":"Navedite svoje podatke o plaćanju. Promocija korištena za ovu pretplatu primijenit će se pri prvom obnavljanju. Sada će vam biti naplaćeno  {{selectedTerm.firstRealPriceWithTax}} za ovo produženo razdoblje.","default\u0004Your payment verified. Click on the button below to proceed.":"Vaša uplata je potvrđena. Za nastavak kliknite donji gumb.","default\u0004You are about to get this trial.":"Uskoro ćete dobiti ovaj probni.","default\u0004Card details":"Card details","default\u0004Delete account":"Obrišite profil ","default\u0004email":"email","checkout.publisher\u0004Manage":"Manage","default\u0004Forgot password":"Zaboravljena lozinka","default\u0004Multibanco":"Multibanco","default\u0004You must be logged in to proceed.":"Za nastavak morate biti prijavljeni.","default\u0004Your gift for {{resource_name}} has been revoked":"Tvoj poklon za {{resource_name}} je opozvan","default\u0004Continue to PayPal":"Nastavite na PayPal","default\u0004Process...":"Obrada...","default\u0004After that please click on <span class=\"black\">Redeem</span> to continue.":"Nakon toga kliknite na <span class=\"black\">Redeem</span> za nastavak.","default\u0004for you and up to {0} others.":"za tebe i do {0} drugih.","default\u0004until canceled":"dok se ne otkaže","default\u0004C.C. (Citizenship card)":"C.C. (Citizenship card)","default\u0004Click on the button below to proceed further without any charges.":"Kliknite niže za nastavak bez plaćanja.","default\u0004You may check the status of your access by going to \"My account\" and clicking on the \"Bills\" tab. ":"Status vašeg pristupa možete provjeriti odlaskom na \"Moj račun\" i klikom na karticu \"Računi\".","default\u0004Add a new direct debit account":"Dodajte novi direktni debitni račun","default\u0004Birth certificate":"Rodni list","default\u0004Duration":"Trajanje","default\u0004Access terms":"Uvjeti pristupa","default\u0004When payment is done you receive e-mail with the access":"When payment is done you receive e-mail with the access","default\u0004Client type":"Client type","default\u0004ending in":"završava sa","default\u0004I have an account":"Imam profil","default\u0004Save":"Spremi","default\u0004Expiration":"Istek","default\u0004Couldn't save credit card":"Kreditnu karticu nije moguće spremiti\n","default\u0004Almost finished!":"Još malo!","default\u0004PP (Passport)":"PP (Passport)","default\u0004This contract is not currently active! Please contact your administrator if you believe this is an error.":"Ovaj ugovor trenutno nije aktivan! Ako smatrate da je ovo pogreška, obratite se administratoru.","default\u0004(US zip 5-digit only)":"(US zip 5-digit only)","default\u0004Card number":"Broj kartice","default\u0004Authorization on {{upi.create_date | tpDateAndTime}}":"Authorization on {{upi.create_date | tpDateAndTime}}","default\u0004Login":"Prijavi se","piano.id\u0004{0} is invalid":"Neispravan {0}","default\u0004Forgot password?":"Zaboravljena lozinka?","default\u0004How are you enjoying \"{{resource_name}}\"? Drop us a line! <a href=\"mailto:{{support_email}}\">{{support_email}}</a>":"Uživate li \"{{resource_name}}\"? Recite nam! <a href=\"mailto:{{support_email}}\">{{support_email}}</a>","default\u0004Prorate amount: <b>{0}</b>":"Prorate amount: <b>{0}</b>","default\u0004[%% cta-text %%]":"[%% cta-text %%]","checkout.publisher\u0004Couldn't submit issue":"Couldn't submit issue","default\u0004Birth date":"Datum rođenja","default\u0004Entity:":"Entity:","checkout.publisher\u0004Payment source":"Payment source","default\u0004Enter voucher code":"Upišite kod kupona","default\u0004Present the barcode at the checkout counter":"Pokažite barkod na blagajni","default\u0004Please remember, subscriptions paid for in cash are not eligible for refunds":"Please remember, subscriptions paid for in cash are not eligible for refunds","piano.id\u0004Please wait {0} minutes to reset password again":"Molimo sačekajte {0} minute/a za ponovno resetiranje lozinke","default\u0004Code":"Kod","default\u0004Total":"Ukupno","default\u0004Please enter address":"Molimo unesite adresu","default\u0004for you and up to {{input.sharedAccounts.length}} others.":"za tebe i do {{input.sharedAccounts.length}} drugih.","default\u0004You can add up to {0} shared account(s)":"You can add up to {0} shared account(s)","default\u0004This information has been sent to <strong>{{input.receipt.multibanco.email}}</strong>":"Ovi podaci su poslani na <strong>{{input.receipt.multibanco.email}}</strong>","default\u0004Unexpected redemption result: {1}":"Neočekivani rezultat: {1}","default\u0004Foreign identification document":"Strani identifikacijski dokument","default\u0004If you'd like to renew, simply follow the steps below.":"Za obnovu samo prati korake niže.","default\u0004Street 1":"Ulica 1","default\u0004Cancel subscription":"Prekini pretplatu","default\u0004Last name (Optional)...":"Prezime (Neobvezno)...","default\u0004Street 2":"Ulica 2","default\u0004Back to list":"Povratak na listu","default\u0004Your ELV accounts":"Vaši ELV računi","default\u0004/ {{terms[1].firstPeriod}}":"/ {{terms[1].firstPeriod}}","default\u0004After clicking \"Generate Boleto\" you will be forwarded to Ebanx web-site, where you will need to initiate Boleto payment.":"After clicking \"Generate Boleto\" you will be forwarded to Ebanx web-site, where you will need to initiate Boleto payment.","default\u0004Your Google Pay cards":"Your Google Pay cards","default\u0004Buy with":"Kupite sa","default\u0004<span data-e2e=\"affiliateCredits\">{{affiliateCredits()}}</span> {{credit()}} left for this publication":"<span data-e2e=\"affiliateCredits\">{{affiliateCredits()}}</span> {{credit()}} left for this publication","default\u0004Add card":"Dodajte karticu","default\u0004{0} is invalid":"Neispravan {0}","default\u0004Login into your account.":"Prijavi se na svoj profil.","default\u0004Login with your Piano account":"Prijavi se na svoj Piano profil","default\u0004Dwolla PIN":"Dwolla PIN","default\u0004IDC (Client's ID )":"IDC (Client's ID )","default\u0004Return to saved cards":"Povratak na spremljene kartice","default\u0004Are you sure you would like remove this shared account?":"Potvrđujete da želite ukloniti ovaj dijeljeni profil?","default\u0004This email is being sent to {{user_email}}. If you did not attempt a login recently, please disregard this email. If you have any questions or encounter any problems, please send an email to {{support_email}}.":"Ovaj e-mail je poslan na {{user_email}}. Ako nedavno niste pokušali prijaviti se, zanemarite ovaj e-mail. Ako imate pitanja ili naiđete na probleme, pošaljite e-mail na {{support_email}}.","default\u0004Enter promo code":"Upišite promotivni kod","default\u0004Upgrade":"Upgrade","default\u0004Here is your transaction information":"Ovdje su informacije o transakciji","default\u0004Your iDeal accounts":"Vaši iDeal računi","default\u0004/ {{terms[2].firstPeriod}}":"/ {{terms[2].firstPeriod}}","default\u0004You are about to be charged <b>{{input.chargeDisplayAmount}}</b>.":"Naplatit ćemo vam  <b>{{input.chargeDisplayAmount}}</b>.","default\u0004You are about to be charged <b>{{input.confirmated.amount}}</b>, plus <b>{{ input.canadianTaxes[0].name}} {{ input.canadianTaxes[0].amount}}</b> ":"Naplatit \nće se <b>{{input.confirmated.amount}}</b>, plus <b>{{ input.canadianTaxes[0].name}} {{ input.canadianTaxes[0].amount}}</b> ","default\u0004Email...":"Email...","default\u0004T.I. (ID card)":"T.I. (ID card)","default\u0004Add a new credit or debit card":"Dodaj novu kreditnu ili debitnu karticu","default\u0004Bank":"Bank","default\u0004User with the same email is already registered":"Korisnik sa ovim emailom je već registriran","default\u0004Logout":"Logout","default\u0004Password must contain a special character.":"Lozinka mora sadržavati neki od posebnih znakova.","default\u0004To learn even more about {{business_name}}, check out our <a href=\"{{business_url}}\" style=\"color: #0085D7; text-decoration: none;\">website</a>!":"Ako želiš naučiti nešto više o  {{business_name}}, provjeri ovdje naš  <a href=\"{{business_url}}\" style=\"color: #0085D7; text-decoration: none;\">website</a>!","default\u0004Add user":"Dodajte korisnika","default\u0004State/Provinces":"State/Provinces","default\u0004Input the emails of the shared accounts below":"Unesite email adrese dijeljenih profila niže","piano.id\u0004{0} may not be empty":"{0} ne smije biti prazno","piano.id\u0004Password must contain both letters and digits.":"Lozinka mora sadržavati slova i brojeve.","default\u0004Edit":"Uredite","default\u0004Last name is required":"Prezime je obavezno","default\u0004You have been invited":"Pozvani ste","default\u0004MM":"MM","default\u0004This verification email will expire in {{verification_code_expiration_period}}, so please confirm your email address at your earliest convenience. Should the verification link expire prior to confirming your email address, you will need to register again for security purposes.":"Verifikacijski e-mail istječe za {{verification_code_expiration_period}}, pa te molimo da potvrdiš svoju e-mail adresu.  Ako veza za provjeru istekne prije potvrde e-mail adrese, morat ćete se ponovo registrirati iz sigurnosnih razloga.","default\u0004Steps to disable adblocker":"Koraci za optimizaciju adblokera","default\u0004Please choose another payment method.":"Odaberite drugi način plaćanja.","default\u0004Disconnect":"Prekinite","default\u0004Expired verification email.":"Verifikacijski mail je istekao.","default\u0004CEL (Cell number)":"CEL (Cell number)","default\u0004Library":"Zbirka","piano.id\u0004Password must have at least %d characters.":"Lozinka mora imati najmanje %d znakova.","default\u0004Enter promo code to purchase":"Upišite promo kod za kupnju","default\u0004You are about to receive <b>{{voucherResource()}}</b> by code \"{{redeemCode()}}\"":"Uskoro ćete dobiti <b>{{voucherResource()}}</b> s kodom \"{{redeemCode()}}\"","default\u0004You are moving onto a subscription that doesn't allow shared accounts. The accounts currently associated with your subscription will lose access.":"You are moving onto a subscription that doesn't allow shared accounts. The accounts currently associated with your subscription will lose access.","default\u0004Bill issued!":"Izdan račun!","default\u0004Check notification in your MBWAY mobile app for more informaion":"Check notification in your MBWAY mobile app for more informaion","default\u0004Your new credit card":"Vaša nova kreditna kartica","default\u0004Just a reminder, to access your content:":"Samo podsjetnik, za pristup sadržaju:","default\u0004Select a payment method":"Odaberite način plaćanja","default\u0004Free":"Besplatno","default\u0004Vouchers":"Vaučeri","default\u0004Subscribe now":"Pretplatite se sada","default\u0004Please wait while your request is being processed...":"Pričekajte dok se vaš zahtjev obrađuje...","default\u0004Thanks for your registration!":"Hvala na registraciji!","default\u0004Already confirmed verification email.":"Verifikacijski mail je već potvrđen.","default\u0004Print the generated Boleto ticket.":"Ispiši Boleto karticu","default\u0004Could not load my account. Invalid user.":"Nije moguće učitavanje profila. Nevažeći korisnik.","default\u0004Passport":"Putovnica","default\u0004Email format is not valid":"Neispravan email","default\u0004We are not able to recognize your address. Please try again or <button type=\"button\" class=\"experian-full-address-form__link\" ng-click=\"setShowExperianAddress()\">enter it manually</button>.":"We are not able to recognize your address. Please try again or <button type=\"button\" class=\"experian-full-address-form__link\" ng-click=\"setShowExperianAddress()\">enter it manually</button>.","default\u0004Easypay":"Easypay","default\u0004An error has occurred":"Dogodila se greška","default\u0004D.E. (Foreign ID)":"D.E. (Foreign ID)","default\u0004Redeem your voucher":"Iskoristite svoj bon","default\u0004You're all set":"Spremni ste","default\u0004Country code":"Pozivni broj države","checkout.publisher\u0004Get help with your content":"Get help with your content","default\u0004Add a new Twint authorization":"Add a new Twint authorization","default\u0004Bring it to a participating store (<a href=\"https://www.openpay.mx/tiendas-de-conveniencia.html\" target=\"_blank\">click here</a> for a list of participating stores)":"Bring it to a participating store (<a href=\"https://www.openpay.mx/tiendas-de-conveniencia.html\" target=\"_blank\">click here</a> for a list of participating stores)","default\u0004NIT (Company tax ID number)":"NIT (Company tax ID number)","default\u0004minimum":"minimum","default\u0004Add Apple Pay as a payment account to pay for your purchases and take the protection of Datatrans with you":"Add Apple Pay as a payment account to pay for your purchases and take the protection of Datatrans with you","default\u0004Please cancel your current subscription via My Account if you would like to redeem your access through {0}.":"Otkažite svoju trenutnu pretplatu putem Mog računa ako želite iskoristiti svoj pristup putem. {0}.","default\u0004Bonovi":"Bonovi","default\u0004{{data.newUpi.display_name}}":"{{data.newUpi.display_name}}","default\u0004Tax":"Porez","default\u0004/ {{ term.firstPeriod }}":"/ {{ term.firstPeriod }}","default\u0004Show me":"Pokaži mi","default\u0004Your Google Pay card":"Your Google Pay card","default\u0004Print the barcode":"Ispiši barkod","default\u0004Invalid card number":"Neispravan broj kartice","default\u0004Additional upgrade information":"Additional upgrade information","default\u0004That combination of email and password is not recognized":"Prijava nije moguća sa unesenim podacima","default\u0004{{data.upi.description}}":"{{data.upi.description}}","checkout.publisher\u0004Access terms":"Access terms","checkout.publisher\u0004Help":"Help","default\u0004I reside in the same country as my billing address":"Prebivalište mi je u državi adrese za naplatu","default\u0004Review and confirm changes to your subscription":"Review and confirm changes to your subscription","default\u0004Thanks! Notification has been sent":"Hvala! Obavijest je poslana","default\u0004The email that you registered with is not included in the list of users eligible to access this license.":"Email adresa s kojom ste se registrirali nije uključena u popis korisnika koji ispunjavaju uvjete za pristup ovoj licenci.","default\u0004Instructions to redeem it have been sent to {{ giftEmailParams.recipientEmail }}":"Upute za iskoristiti poslane su na {{ giftEmailParams.recipientEmail }}","piano.id\u0004Password and Confirm password does not match. Please try again":"Lozinka i potvrđena lozinka nisu iste. Molimo pokušajte ponovno","default\u0004Payment authorization":"Payment authorization","default\u0004Country":"Država","default\u0004<t>Email confirmation</t>":"<t>E-mail potvrda</t>","default\u0004Apply":"Primijeni","default\u0004[%% no-input-warning-message-text %%]":"[%% no-input-warning-message-text %%]","default\u0004Enter Your Subscription Address":"Upišite adresu pretplate","default\u0004Log in to your account":"Prijavi se na svoj profil","default\u0004Add a new Google Pay card":"Add a new Google Pay card","default\u0004Last message sent on":"Zadnja poruka poslana","default\u0004Current password":"Trenutna lozinka","default\u0004Pick the subscription that's right for you":"Odaberite pretplatu koja vam odgovora","default\u0004for {{term.firstPeriod}}":"za {{term.firstPeriod}}","default\u0004Enter your bank code":"Enter your bank code","default\u0004Back to login":"Povratak na login","default\u0004Looks like you already have access!":"Čini se da već imate pristup!","default\u0004Identity Card":"Osobna kartica","default\u0004Provide your payment details. The free trial associated with this subscription will be appended to the standard duration of access, and the promotion used for this subscription will be applied at the first renewal. You will be charged {{selectedTerm.firstRealPriceWithTax}} today for this extended period.":"Navedite svoje podatke o plaćanju.  Besplatno probno razdoblje povezano s ovom pretplatom bit će dodano standardnom trajanju pristupa, a promocija korištena za ovu pretplatu primijenit će se pri prvoj obnovi.  Sada će vam biti naplaćeno {{selectedTerm.firstRealPriceWithTax}} za ovo produženo razdoblje.","default\u0004Search...":"Traži...","default\u0004How are things going?":"Ide li?","default\u0004Pick a subscription that's right for you.":"Odaberite model pretplate koji vam odgovara.","default\u0004All shared accounts will be removed.":"All shared accounts will be removed.","default\u0004Code:":"Kod:","default\u0004Couldn't submit comment":"Neuspjelo slanje komentara","checkout.publisher\u0004Library":"Library","default\u0004We recently created an account for you at <a href='{{business_url}}'>{{business_url}}</a>. Please set your password by following this link:":"Nedavno smo kreirali profil za tebe na <a href='{{business_url}}'>{{business_url}}</a>. Postavite svoju lozinku na ovome linku: ","default\u0004Error contacting Amazon Payment Services.":"Error contacting Amazon Payment Services.","default\u0004Add a personal message":"Dodaj osobnu poruku","default\u0004Next":"Sljedeći","checkout.publisher\u0004Get help!":"Get help!","default\u0004Provide your payment details. The free trial associated with this subscription will be appended to the standard duration of access. You will be charged {{selectedTerm.firstRealPriceWithTax}} today for this extended period.":"Navedite svoje podatke o plaćanju.  Besplatno probno razdoblje povezano s ovom pretplatom biti će dodano standardnom trajanju pristupa. Sada će vam biti naplaćeno {{selectedTerm.firstRealPriceWithTax}} za ovo produženo razdoblje.","default\u0004Set as default":"Postavi kao zadano","default\u0004{{term.firstPeriod}} for {{term.firstRealPrice}}":"{{term.firstPeriod}} for {{term.firstRealPrice}}","default\u0004You will receive an email confirming that you now have access to {{selectedTerm.resource.name}}. This may\n                    take up to 24 hours.":"Dobit će e-mail potvrdu da sada imate pristup na {{selectedTerm.resource.name}}. To može potrajati do 24 sata.","default\u0004Your {{verifiedPromoCode.discount}} off promo code\n            is valid only for\n\n            <b>{{otherTerm.resource.name}} - {{otherTerm.displayLine}}</b>.":"Vaš promotivni kod s popustom od {{verifyPromoCode.discount}}\n            vrijedi samo za\n\n            <b> {{otherTerm.resource.name}} - {{otherTerm.displayLine}} </b>.","default\u0004Change my password":"Promijenite lozinku","default\u0004Click here to add a password":"Kliknite za dodavanje lozinke","default\u0004Select a contract":"Odaberite ugovor","default\u0004Started on":"Krenuo od","default\u0004Choose your bank":"Choose your bank","default\u0004Dobiti ćete probni period.":"Dobit ćete probni period.","default\u0004PayPal":"PayPal","default\u0004Authorization on {{data.upi.create_date | tpDateAndTime}}":"Authorization on {{data.upi.create_date | tpDateAndTime}}","default\u0004Recipient email":"Email primatelja","default\u0004Cancel and refund subscription":"Poništi i povrat iznosa pretplate","default\u0004Please enter your email address":"Upišite svoj email","default\u0004Great news, [%% welcomeMessage %%]":"Great news, [%% welcomeMessage %%]","default\u0004Pay for your subscription with credit card or cash.":"Pretplatu platite kreditnom karticom ili gotovinom.","default\u0004[%% input-box-text %%]":"[%% input-box-text %%]","default\u0004or":"ili","default\u0004Active authorizations":"Active authorizations","default\u0004Billing country":"Zemlja naplate","default\u0004\n            <span ng-if=\"isChargingTerm(selectedTerm)\">\n                Your <span class=\"bold payment-method\">{{getSelectedPaymentMethodName()}}<span ng-if=\"isApplePayPaymentMethod()\"> account</span> </span> has been charged.\n            </span>\n            An email confirmation has been sent to <a class=\"mail\" href=\"javascript:void(0);\">{{user.email}}</a>\n        ":"\n            <span ng-if=\"isChargingTerm(selectedTerm)\">\n                Tvoja <span class=\"bold payment-method\">{{getSelectedPaymentMethodName()}}<span ng-if=\"isApplePayPaymentMethod()\"> account</span> </span> je naplaćena.\n            </span>\n            E-mail potvrda je poslana na  <a class=\"mail\" href=\"javascript:void(0);\">{{user.email}}</a>\n        ","default\u0004Add new PayPal account":"Dodajte novi PayPal račun","default\u0004You can add up to {0} shared account(s).":"You can add up to {0} shared account(s).","default\u0004All prices Incl.":"Sve cijene uključene.","default\u0004Payment method: ":"Payment method: ","default\u0004Choose a specific term":"Odaberite specifičan izraz","default\u0004First name":"Ime","default\u0004Enter the code of your voucher":"Upišite kod kupona","default\u0004, please confirm your existing account for this site. You'll only have to do this once.":", potvrdite svoj postojeći profil za ovu stranicu. Ovo je jednokratna potvrda.","default\u0004Password must contain uppercase and lowercase letters.":"Lozinka mora sadržavati velika i mala slova.","default\u0004Use your Amazon Payments account to pay for your purchases and take the protection of Amazon with you.":"Upotrijebite svoj Amazon Payments za plaćanje","checkout.publisher\u0004All inquiries":"All inquiries","default\u0004Feel free to re-try other credentials":"Pokušaj ponovno unijeti druge podatke","default\u0004Check notification in your MBWAY mobile app":"Provjerite notifikaciju u svojoj MBWAY mobilnoj aplikaciji","default\u0004Check notification in your MBWAY mobile app for more information":"Check notification in your MBWAY mobile app for more information","default\u0004Please continue to find QR code to scan to provide authorization.":"Please continue to find QR code to scan to provide authorization.","default\u0004[%% subheader %%]":"[%% subheader %%]","default\u0004I reside in same country as my billing address":"Živim u istoj zemlji kao i moja adresa za naplatu","default\u0004Edit account":"Uredite profil","piano.id\u0004Password":"Lozinka","default\u0004Thanks":"Hvala","default\u0004You will receive an email confirming that you now have access to {{selectedTerm.resource.name}}. This may take up to 24 hours":"Primit ćete e-mail potvrdu da sada imate pristup {{selectedTerm.resource.name}}. Ovo može potrajati do 24 sata.","default\u0004Bring it to any participating bank / store / postal office within 3 days after you initiate a payment before it expires.":"Bring it to any participating bank / store / postal office within 3 days after you initiate a payment before it expires.","default\u0004<t>Welcome to {{sys_business_name}}!</t>":"<t>Dobrodošali na {{sys_business_name}}!</t>","default\u0004The delivery address for this subscription is:":"The delivery address for this subscription is:","default\u0004\n        <span class=\"bold resource-name\">{{selectedTerm.resource.name | tc:'resource.name'}}</span>\n        for\n    {{ giftEmailParams.recipientName ? giftEmailParams.recipientName : giftEmailParams.recipientEmail }}  as a gift.\n    ":"\n        <span class=\"bold resource-name\">{{selectedTerm.resource.name | tc:'resource.name'}}</span>\n        for\n    {{ giftEmailParams.recipientName ? giftEmailParams.recipientName : giftEmailParams.recipientEmail }}  as a gift.\n    ","default\u0004Continue to Bitcoin":"Nastavite na Bitcoin","default\u0004<span ng-if=\"isChargingTerm(selectedTerm)\">Your <span class=\"bold payment-method\">{{getSelectedPaymentMethodName()}}<span ng-if=\"isApplePayPaymentMethod()\"> account</span></span> has been charged.</span> An email confirmation has been sent to\n            <a class=\"mail\" href=\"javascript:void(0);\">{{user.email}}</a>":"<span ng-if=\"isChargingTerm(selectedTerm)\">Tvoj <span class=\"bold payment-method\">{{getSelectedPaymentMethodName()}}<span ng-if=\"isApplePayPaymentMethod()\"> račun </span></span> je naplaćen.</span> E-mail potvrda ti je poslana na\n            <a class=\"mail\" href=\"javascript:void(0);\">{{user.email}}</a>","default\u0004Disable auto renew":"Isključite automatsku obnovu","default\u0004Current Password":"Trenutna lozinka","default\u0004Already have an account?":"Već imate račun?","default\u0004Last Name":"Prezime","default\u0004By clicking below to sign up, you're agreeing to our":"Klikom na registraciju, prihvaćate naše","default\u0004Barcode example":"Primjer barkoda","default\u0004Add a direct debit account":"Dodajte direktni debitni račun","default\u0004Cards":"Kartice","default\u0004Hide details":"Sakrij detalje","default\u0004Identification type":"Vrsta identifikacije","default\u0004Authorization on {{upi.create_date | date: 'short'}}":"Authorization on {{upi.create_date | date: 'short'}}","default\u0004Reference:":"Reference:","default\u0004You are about to be charged <b>{{input.confirmated.chargeAmount}}</b>.":"Naplatit će se <b>{{input.confirmated.chargeAmount}}</b>.","default\u0004Simply <button class=\"unbutton pn-boilerplate__link\" type=\"button\" ng-click=\"register()\">register</button> to determine your eligibility to redeem this access.":"Jednostavno <button class=\"unbutton pn-boilerplate__link\" type=\"button\" ng-click=\"register()\">register</button> da utvrdimo da li ispunjavate uvjete za iskorištavanje ovog pristupa.\n\n","checkout.publisher\u0004Create an inquiry here, and we'll make sure your questions get answered ASAP.":"Create an inquiry here, and we'll make sure your questions get answered ASAP.","default\u0004Promo code":"Promotivni kod","default\u0004<span style=\"color: #0085D7;\">{{business_name}}</span>":"<span style=\"color: #0085D7;\">{{business_name}}</span>","default\u0004Submit":"Predaj","default\u0004Incl. {{getVatLabel()}} {{ interval.tax }}":"Incl. {{getVatLabel()}} {{ interval.tax }}","default\u0004Legal person":"Legal person","default\u0004Are you sure you wish to revoke and refund?":"Potvrđujete da želite poništiti i povrat?","default\u0004Loading":"Učitava se","default\u0004Choose from one of the options below":"Odaberite jednu od opcija niže","default\u0004Email":"Email","default\u0004Last name":"Prezime","default\u0004Apply this payment method to all active subscriptions":"Koristi ovaj način plaćanja za sve aktivne pretplate","default\u0004Proceed to contract":"Nastavi s ugovorom","default\u0004Help":"Pomoć","default\u0004Get help with your content":"Zatražite pomoć oko sadržaja","default\u0004Foreign citizenship card":"Strana iskaznica državljanstva","default\u0004Failed to load contracts.":"Neuspjelo dohvaćanje ugovora.","default\u0004uBlock":"uBlock","default\u0004Test text translation":"tekst prijevod","default\u0004Initiate payment within 3 hours after clicking on \"Generate Boleto\" before it expires.":"Initiate payment within 3 hours after clicking on \"Generate Boleto\" before it expires.","default\u0004Thanks! The transaction has been confirmed":"Hvala! Transakcija je potvrđena","default\u0004Your document will be sent in a few minutes. Check your mail soon.":"Dokument će biti poslan kroz par minuta. Provjerite svoj mail ubrzo.","default\u0004You will be refunded {0} from your current subscription":"You will be refunded {0} from your current subscription","default\u0004\n    <span class=\"bold resource-name\">{{selectedTerm.resource.name | tc:'resource.name'}}</span>\n    for\n    {{ giftEmailParams.recipientName ? giftEmailParams.recipientName : giftEmailParams.recipientEmail }}  as a gift.":"\n    <span class=\"bold resource-name\">{{selectedTerm.resource.name | tc:'resource.name'}}</span>\n    za\n    {{ giftEmailParams.recipientName ? giftEmailParams.recipientName : giftEmailParams.recipientEmail }}  kao poklon.","default\u0004First Name":"Ime","default\u0004for new consumer only":"samo za nove korisnike\n","default\u0004Add new ELV account":"Dodajte novi ELV račun","default\u0004Manage your accounts":"Manage your accounts","default\u0004We want to welcome you to the ranks of our avid readers here at {{sys_business_name}}.":"Želimo ti dobrodošlicu u redove naših strastvenih čitatelja ovdje na {{sys_business_name}}.","default\u0004Click on the \"Already Purchased\" link.":"Kliknite na \"Već kupljeno\" poveznicu.","default\u0004Your Apple Pay cards":"Vaše Apple Pay kartice","default\u0004Click <a href=\"{{ contractInfo.homepageUrl }}\">here</a> to return to the home page.":"Kliknite <a href=\"{{ contractInfo.homepageUrl }}\">here</a> za povratak na početnu stranicu."}</script>
<script id="translation-static" type="text/javascript" src="/ng/common/i18n/platform-translation-map_hr_HR.js?version=16.106.1" ></script>
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/jquery/1.12.4/jquery.min.js" ></script>
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/jquery-migrate/1.4.1/jquery-migrate.min.js" ></script>
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.22/angular.min.js" ></script>
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.22/angular-cookies.min.js" ></script>
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.22/angular-sanitize.min.js" ></script>
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.22/angular-touch.min.js" ></script>
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/angular-dynamic-locale/0.1.27/tmhDynamicLocale.min.js" ></script>
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/angular-ui-utils/0.1.1/angular-ui-utils.min.js" ></script>
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/angular-ui/0.4.0/angular-ui-ieshiv.js" ></script>
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.2.10/angular-ui-router.min.js" ></script>
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/animejs/3.1.0/anime.min.js" ></script>
<script type="text/javascript" src="/_sam/H4sIAAAAAAAA_62YTW_bMAyG_9BaY9ll1y0b1gEbEDTdrgMtMTYXWRT0ETf59aOdJgjQwyKmtyTOI1L8eEW5Gcl2mBtLKTemR7Plku8GtsVh8zc1jtoIkTDdH3971_wHsJAxkNlivJbINFQSUHL_c_4mhNleixn2FleRd2QxKvhA4Pm7fbXCdcYjWsqPaHEImdjX0VNUk2rLxee4X6NDk1mz6ZacI999sjZi0rgQIKWRo3WXeI3pJfsNdZXRZp_QZ4W78XWGroc72mhsltBFsKggUw_i8Lq0yUTSei3ByuQLPvUR8ct6VaLpIWncyWFOVhyWPAwqX6ZqET-4dJoOT2NlnYTIAy_5IvZXYfgcMIoaKFwEifUmQrFLCFni_PtDnelX_OItnFjcIIvpovoeEUymHSgrMcB-kLa9wZmMcfgmYrnGuCOjqWFwEcHuHyB9MkYneebYBNootOC3azQlaty_lNvVMZy6RARwX5_DJPrLl-eaSMynnoFo1U5oUjjAgf0w6nJHvtWp3_RfBcYBvWx1CUkjeQeMrIvt2EPecxlBVSH4LK3mwf0WIdyQUXd8JJ_1w4U5l6Yq9McK-_ykqbEQHEqDqWBpUGfF-OPzoKnvE_4Qwg30E29Rk7IkooDW7b_gBorL6xxFb7v9DStJGH_9gAzDG6ylKWXbkRMfRlDR1KnCKPcqKX1xWj8rvRyTaflQxcllAiTQPqktn1dYccob8uCNfhsIaT_pn5qfEqCmtw5ExtQ4t6RmZwmRnafaBJ7BLGMXKmGp9krS7FspNpbrQa3NCzIPtbud27OSYY-5ElEFc6SI03RTiXU8QdOIZqtRua_UETJOKlx8GcXxUM8V8pbAGD25W2jZEkiL-lZBmp4cqrYq-n8gdwPaqvxlx0OrzM4JDqm2TyZarsxFZRaiCHyWU6aaPp9TeZSzVgt3zN0smdoFTpJbye_YdVDLUAi1AjtfeBTMRhuP49hdL3yWDVfLn3CJN3m6VNeeWvPltSsKfR8Yiv5MiBzIa4P7RuOcfpBTD2G68UtHrbTvFhL72j4-ODK1tXecRtDhdAjXNuf8-rZeaCUgpwe1I8bpLqOVyrPd0yx9yk26bZmXFY6wo3Z69dkVqba79_eL-8Wiofcf_fk3Jy3o8E8f7_r4rvFdY-Z1muDvknSkx3jx8f5v-gfTdiu4PRsAAA?compressed=true&v=16.106.1" ></script>



</head>

<body style="background-color:transparent" id="ng-app">

<script>
    var TPConfig = {
        PATH: "https://buy.tinypass.com"
    };

    
var TPParam = {"CONDE_RESET_PASSWORD":"/checkout/conde/resetPassword","PAYWAY_APPLE_PAY_AUTH":"/checkout/offer/paywayApplePayAuth","CONFIRMATION":"/checkout/payment/confirmation","NETBANKING_RECURRING_FLOW_ENABLED":false,"CUSTOM_PRICE_INIT":"/checkout/payment/customPriceInit","RESTORE_CHECKOUT_OBJECTS":"/checkout/offer/restoreCheckoutObjects","LOGIN_PASSWORDLESS_USER":"/checkout/user/loginPasswordlessUser","INIT_PURCHASE":"/checkout/offer/initPurchase","APPLY_NEW_PRICE":"/checkout/payment/applyNewPrice","BILLING_ADDRESS_APPLY":"/checkout/bilingAddress/applyUserBillingAddress","PROCESS_PURCHASE":"/checkout/offer/processPurchase","LOG_THREE_D_SECURE_INFO":"/checkout/offer/threeDSecureInfoLog","LOGIN":"/checkout/user/loginShow","GET_TERM_CHANGE_3DS_CONFIRMATION":"/checkout/offer/getTermChangeThreeDSecureConfirmation","COMPLETE_PURCHASE":"/checkout/offer/completePurchase","PROMO_CODE_VERIFY":"/checkout/payment/promoCodeVerify","PAYWAY_APPLE_PAY_VOID":"/checkout/offer/paywayApplePayVoid","KLARNA_INIT_URL":"/checkout/offer/initKlarna","TERM_CHANGE_COMPLETE_3DS":"/checkout/offer/termChangeCompleteThreeDSecure","PAYWAY_API_URL":"https://paywayws.net/PaywayWS/","BRAINTREE_APPLE_PAY_CLIENT":"/checkout/offer/brainTreeApplePayClient","params":{"parentOuterHeight":"972","logType":"offerShow","browserId":"lsey87bf7m3ptwip","userProvider":"publisher_user_ref","widget":"offer","templateId":"OT61RKTIYK93","parentDualScreenLeft":"0","experienceActionId":"showOffer6AW0I4PY54VXL8A","customVariables":"{}","experienceId":"EXX8OZWN777L","containerSelector":"#pianoOfferInline","templateVariantId":"OTV7IBLHC9Q26","hasLoginRequiredCallback":"true","showCloseButton":"false","displayMode":"inline","url":"https://www.vecernji.hr/kultura/ursa-raukar-moj-je-otac-bio-gospodin-olicenje-zagreba-u-ponasanju-govoru-duhovitosti-sarmu-1744558","initMode":"context","parentDualScreenTop":"0","parentWidth":"1280","userToken":"","requestUserAuthForLinkedTerm":"true","parentHeight":"887","iframeId":"offer-0-xw61C","hideCompletedFields":"true","_qh":"9f7c975388","width":"578","offerId":"OFWRO4C2AQFJ","formNameByTermId":"{}","customCookies":"{}","aid":"lIwrWjnppu","initTime":"3091"},"GEO_COUNTRY_TAX_SUPPORT":null,"GEO_COUNTRY_POSTAL_CODE":"08034","TERM_CHANGE":"/checkout/offer/termChange","EXPERIAN_IS_STRICT":true,"GEO_COUNTRY_CODE":"ES","ADDRESS_LIST":"/checkout/payment/addressList","RECAPTCHA_SITE_KEY":"6LfIeRMUAAAAAALhNbNCg1hfkVOjl9o_S24b1OPo","GET_REDEMPTION_RESULT":"/checkout/offer/getRedemptionResult","TRANSLATION_CONFIG":{"isStatic":false,"isEnabled":true,"templateContext":"default","version":"16.106.1","loadTranslationUrl":"/checkout/general/loadTranslationMap?aid=lIwrWjnppu&version=1673968074000","initialLocaleId":"hr_HR","systemDefaultLocale":"en_US","languages":[{"locale":"hr_HR","label":"Croatian (Croatia)","localized":"hrvatski (Hrvatska)","isDefault":true,"isEnabled":true,"rtl":false}]},"GET_OFFER":"/checkout/offer/getOffer","APPLY_DEFAULT_PAYMENT_METHOD":"/checkout/offer/applyDefaultPaymentMethod","COUNTRIES_AND_REGIONS":"/checkout/bilingAddress/getCountriesAndRegions","CONDE_LOGIN":"/checkout/conde/login","GET_BRAINTREE_NONCE":"/checkout/offer/getBrainTreeNonce","VALIDATE_CONSENTS":"/checkout/offer/validateConsents","VERIFY_FRAUD_PREVENTION":"/checkout/offer/verifyFraudPrevention","CHECK_COMPLETE":"/checkout/offer/checkPaymentComplete","APPLE_PAY_PROCESS_PAYMENT_DATA_URL":"/checkout/offer/applePayProcessPaymentData","EXTERNAL_VERIFICATION":"/checkout/payment/externalVerification","EXPERIAN_FORMAT":"/checkout/experian/experianFormat","AVALARA_ADDRESS_VERIFY":"/checkout/avalara/avalaraAddressVerify","GET_ACCESS":"/checkout/offer/getAccess","CYBER_SOURCE_TOKENIZE_CARD_URL":"https://api.cybersource.com/flex/v1/tokens/","SHARED_SUBSCRIPTION_GRANT_ACCESS_ACCOUNTS":"/checkout/subscription/grantAccessSharedAccounts","GET_USER_RESOURCES":"/checkout/offer/getUserResources","SAVE_GIFT_PARAMS":"/checkout/offer/saveGiftEmailParams","APPLE_PAY_PAYMENT_SESSION_URL":"/checkout/offer/applePayPaymentSession","INIT_FRAUD_PREVENTION":"/checkout/offer/initFraudPrevention","LOAD_PAYULATAM_UI_MODELS":"/checkout/offer/loadPayULatamUiModels","PAYMENTS_OS_TOKENIZE_CARD_URL":"https://api.paymentsos.com/tokens","EXPERIAN_SEARCH":"/checkout/experian/experianSearch","GET_FRAUD_PREVENTION_CONFIG":"/checkout/offer/getFraudPreventionConfig","CREATE_ORDER":"/checkout/offer/createOrder","LOAD_TERM_COUNTRIES":"/checkout/offer/obiLoadTermCountries","GET_SUBSCRIPTION_INFO":"/checkout/subscription/getSubscriptionInfo","APPLY_REDEMPTION_CODE":"/checkout/offer/applyRedemptionCode","TRACK_SHOW":"/checkout/offer/trackShow","LINKED_TERM_MANUAL_CHECKOUT_TRACKING":false,"CHECK_PURCHASE":"/checkout/offer/checkPaymentProcess","STRIPE_APPLE_PAY_INIT":"/checkout/offer/stripeApplePayInit","CHANGE_TERM":"/checkout/offer/obiChangeTerm","VOUCHER_SHIPPING_ADDRESS":"/checkout/payment/voucherShippingAddress","BILL_PAYMENTS_RESEND_BILL_URL":"/checkout/offer/billPaymentsResendBill","performanceMetrics":{},"TRACK_VIEW":"/checkout/offer/trackView","SAVE_CHECKOUT_PARAMS":"/checkout/user/saveCheckoutParams","PROCESS_PASSWORDLESS_USER":"/checkout/offer/processPasswordlessUser","PROMO_CODE_REVERT":"/checkout/payment/promoCodeRevert","FULL_REDIRECT_3DS_ENABLED":false,"CONDE_REGISTER":"/checkout/conde/register","REDEEM_REDEMPTION_CODE":"/checkout/offer/redeemRedemptionCode","PROMO_CODE_IS_ANON":"/checkout/payment/promoCodeIsAnon","ADDRESS_COLLECT":"/checkout/payment/addressCollection","APPLY_TAX_ACTION":"/checkout/offer/applyTax","SHARED_SUBSCRIPTION_VALIDATE_ACCOUNT":"/checkout/subscription/validateSharedAccount","GET_TERM_CHANGE_CONFIRMATION":"/checkout/offer/getTermChangeConfirmation","SHARED_ACCOUNT_CODE_VALIDATE":"/checkout/subscription/sharedAccountCodeValidate","CHECK_NAMES_AND_BILLING_ADDRESS":"/checkout/bilingAddress/checkNamesAndBillingAddress","config":{"checkoutCfInRegister":false,"passwordlessCaptchaEnabled":false,"allowTinypassAccountsLogin":false,"userResources":[],"isSingleStepEnabled":false,"captcha2SiteKey":"6LfIeRMUAAAAAALhNbNCg1hfkVOjl9o_S24b1OPo","redemptionEnabled":true,"isTaxZipCodeHidden":false,"taxSupports":[],"terms":[{"termId":"TMRO73WMN3AL","name":"Godišnji pristup - 14.99 EUR","description":"Pristup Večernji Premium sadržaju 365 dana, godišnja naplata","type":"payment","resource":{"name":"PREMIUM","description":"","rid":"R3LPQ3M","url":null,"imageUrl":null},"displayLine":"€ 14,99 godišnje","billingPlanTable":[{"date":"Danas","period":"godina","shortPeriod":"/yr","originalPrice":"","billingPeriod":"1 godina","priceChargedStr":"€ 14,99","priceValue":14.99,"cycles":"2147483647","isFreeTrial":"false","isTrial":"false","isPayWhatYouWant":"false","billing":"€ 14,99 godišnje","duration":"godišnje do otkazivanja","billingInfo":"€ 14,99 godišnje","isFree":"false","pricelessBillingPre":"","price":"€ 14,99","priceAndTax":14.99,"pricelessBillingPost":" godišnje","currency":"EUR","originalPriceValue":null,"totalBilling":"€ 14,99 godišnje"}],"chargeDisplayAmount":"€ 14,99","chargeAmount":14.99,"chargeAmountInMinorUnit":1499,"taxAmount":"€ 0","hstAmount":"€ 0","qstAmount":"€ 0","pstAmount":"€ 0","gstAmount":"€ 0","taxRate":null,"hstRate":null,"qstRate":null,"pstRate":null,"gstRate":null,"price":"€ 14,99","totalAmount":"€ 14,99","termLevelTaxProductCategory":"","chargeCurrency":"EUR","chargeCurrencySymbol":"€","isSubscription":true,"hasFreeTrial":false,"isSchedule":false,"firstRealPrice":"€ 14,99","firstRealPriceWithTax":"€ 14,99","oneOffPaymentMethods":[{"id":4,"name":"Credit Card","identifier":"credit","paymentTypeId":"credit_card","authSupported":true,"captchaSupported":true,"customTitle":null},{"id":11,"name":"Paypal","identifier":"paypalbt","paymentTypeId":"paypal","authSupported":true,"captchaSupported":false,"customTitle":null}],"subscriptionPaymentMethods":[{"id":4,"name":"Credit Card","identifier":"credit","paymentTypeId":"credit_card","authSupported":true,"captchaSupported":true,"customTitle":null},{"id":11,"name":"Paypal","identifier":"paypalbt","paymentTypeId":"paypal","authSupported":true,"captchaSupported":false,"customTitle":null}],"isCustomPriceAvailable":false,"isZero":false,"isPaymentMethodRequired":true,"forceAutoRenew":true,"newCustomersOnly":false,"firstPeriod":"1 godina","sellDate":null,"hasFinishedSales":false,"restrictCheckoutProcess":false,"originalBillingPlan":null,"sku":null,"giftEmailSendStartTime":null,"giftEmailSendEndTime":null,"sharedAccountCount":null,"authorizationAmount":null,"linkedTermSignedData":null,"linkedTermData":null,"verificationAmount":14.99,"verificationAmountWithTax":14.99,"allowPromoCodes":false},{"termId":"TMO5YUESBP0Z","name":"Mjesečni pristup - 2.99 EUR","description":"Pristup Večernji Premium sadržaju do otkazivanja, mjesečna naplata","type":"payment","resource":{"name":"PREMIUM","description":"","rid":"R3LPQ3M","url":null,"imageUrl":null},"displayLine":"€ 2,99 mjesečno","billingPlanTable":[{"date":"Danas","period":"month","shortPeriod":"/mo","originalPrice":"","billingPeriod":"1 month","priceChargedStr":"€ 2,99","priceValue":2.99,"cycles":"2147483647","isFreeTrial":"false","isTrial":"false","isPayWhatYouWant":"false","billing":"€ 2,99 mjesečno","duration":"mjesec do otkazivanja","billingInfo":"€ 2,99 mjesečno","isFree":"false","pricelessBillingPre":"","price":"€ 2,99","priceAndTax":2.99,"pricelessBillingPost":" mjesečno","currency":"EUR","originalPriceValue":null,"totalBilling":"€ 2,99 mjesečno"}],"chargeDisplayAmount":"€ 2,99","chargeAmount":2.99,"chargeAmountInMinorUnit":299,"taxAmount":"€ 0","hstAmount":"€ 0","qstAmount":"€ 0","pstAmount":"€ 0","gstAmount":"€ 0","taxRate":null,"hstRate":null,"qstRate":null,"pstRate":null,"gstRate":null,"price":"€ 2,99","totalAmount":"€ 2,99","termLevelTaxProductCategory":"","chargeCurrency":"EUR","chargeCurrencySymbol":"€","isSubscription":true,"hasFreeTrial":false,"isSchedule":false,"firstRealPrice":"€ 2,99","firstRealPriceWithTax":"€ 2,99","oneOffPaymentMethods":[{"id":4,"name":"Credit Card","identifier":"credit","paymentTypeId":"credit_card","authSupported":true,"captchaSupported":true,"customTitle":null},{"id":11,"name":"Paypal","identifier":"paypalbt","paymentTypeId":"paypal","authSupported":true,"captchaSupported":false,"customTitle":null}],"subscriptionPaymentMethods":[{"id":4,"name":"Credit Card","identifier":"credit","paymentTypeId":"credit_card","authSupported":true,"captchaSupported":true,"customTitle":null},{"id":11,"name":"Paypal","identifier":"paypalbt","paymentTypeId":"paypal","authSupported":true,"captchaSupported":false,"customTitle":null}],"isCustomPriceAvailable":false,"isZero":false,"isPaymentMethodRequired":true,"forceAutoRenew":true,"newCustomersOnly":false,"firstPeriod":"1 month","sellDate":null,"hasFinishedSales":false,"restrictCheckoutProcess":false,"originalBillingPlan":null,"sku":null,"giftEmailSendStartTime":null,"giftEmailSendEndTime":null,"sharedAccountCount":null,"authorizationAmount":null,"linkedTermSignedData":null,"linkedTermData":null,"verificationAmount":2.99,"verificationAmountWithTax":2.99,"allowPromoCodes":false},{"termId":"TMDJJ8VDP0JH","name":"e-novine + Premium - 49.99 EUR","description":"Pristup e-novinama Večernjeg lista i Premium sadržaju 365 dana, jednokratna naplata","type":"payment","resource":{"name":"PREMIUM","description":"","rid":"R3LPQ3M","url":null,"imageUrl":null},"displayLine":"prvo plaćanje € 49,99","billingPlanTable":[{"date":"Danas","period":"godina","shortPeriod":" for year","originalPrice":"","billingPeriod":"1 godina","priceChargedStr":"€ 49,99","priceValue":49.99,"cycles":"1","isFreeTrial":"false","isTrial":"false","isPayWhatYouWant":"false","billing":"prvo plaćanje € 49,99","duration":"godina dana pristupa","billingInfo":"prvo plaćanje € 49,99","isFree":"false","pricelessBillingPre":"prvo plaćanje ","price":"€ 49,99","priceAndTax":49.99,"pricelessBillingPost":"","currency":"EUR","originalPriceValue":null,"totalBilling":"prvo plaćanje € 49,99"}],"chargeDisplayAmount":"€ 49,99","chargeAmount":49.99,"chargeAmountInMinorUnit":4999,"taxAmount":"€ 0","hstAmount":"€ 0","qstAmount":"€ 0","pstAmount":"€ 0","gstAmount":"€ 0","taxRate":null,"hstRate":null,"qstRate":null,"pstRate":null,"gstRate":null,"price":"€ 49,99","totalAmount":"€ 49,99","termLevelTaxProductCategory":"","chargeCurrency":"EUR","chargeCurrencySymbol":"€","isSubscription":false,"hasFreeTrial":false,"isSchedule":false,"firstRealPrice":"€ 49,99","firstRealPriceWithTax":"€ 49,99","oneOffPaymentMethods":[{"id":4,"name":"Credit Card","identifier":"credit","paymentTypeId":"credit_card","authSupported":true,"captchaSupported":true,"customTitle":null},{"id":11,"name":"Paypal","identifier":"paypalbt","paymentTypeId":"paypal","authSupported":true,"captchaSupported":false,"customTitle":null}],"subscriptionPaymentMethods":[{"id":4,"name":"Credit Card","identifier":"credit","paymentTypeId":"credit_card","authSupported":true,"captchaSupported":true,"customTitle":null},{"id":11,"name":"Paypal","identifier":"paypalbt","paymentTypeId":"paypal","authSupported":true,"captchaSupported":false,"customTitle":null}],"isCustomPriceAvailable":false,"isZero":false,"isPaymentMethodRequired":true,"forceAutoRenew":false,"newCustomersOnly":false,"firstPeriod":"1 godina","sellDate":null,"hasFinishedSales":false,"restrictCheckoutProcess":false,"originalBillingPlan":null,"sku":null,"giftEmailSendStartTime":null,"giftEmailSendEndTime":null,"sharedAccountCount":null,"authorizationAmount":null,"linkedTermSignedData":null,"linkedTermData":null,"verificationAmount":49.99,"verificationAmountWithTax":49.99,"allowPromoCodes":false}],"isDoubleOptInEnabled":false,"isEnableGoogleAnalytics":true,"originalTerms":[{"termId":"TMRO73WMN3AL","name":"Godišnji pristup - 14.99 EUR","description":"Pristup Večernji Premium sadržaju 365 dana, godišnja naplata","type":"payment","resource":{"name":"PREMIUM","description":"","rid":"R3LPQ3M","url":null,"imageUrl":null},"displayLine":"€ 14,99 godišnje","billingPlanTable":[{"date":"Danas","period":"godina","shortPeriod":"/yr","originalPrice":"","billingPeriod":"1 godina","priceChargedStr":"€ 14,99","priceValue":14.99,"cycles":"2147483647","isFreeTrial":"false","isTrial":"false","isPayWhatYouWant":"false","billing":"€ 14,99 godišnje","duration":"godišnje do otkazivanja","billingInfo":"€ 14,99 godišnje","isFree":"false","pricelessBillingPre":"","price":"€ 14,99","priceAndTax":14.99,"pricelessBillingPost":" godišnje","currency":"EUR","originalPriceValue":null,"totalBilling":"€ 14,99 godišnje"}],"chargeDisplayAmount":"€ 14,99","chargeAmount":14.99,"chargeAmountInMinorUnit":1499,"taxAmount":"€ 0","hstAmount":"€ 0","qstAmount":"€ 0","pstAmount":"€ 0","gstAmount":"€ 0","taxRate":null,"hstRate":null,"qstRate":null,"pstRate":null,"gstRate":null,"price":"€ 14,99","totalAmount":"€ 14,99","termLevelTaxProductCategory":"","chargeCurrency":"EUR","chargeCurrencySymbol":"€","isSubscription":true,"hasFreeTrial":false,"isSchedule":false,"firstRealPrice":"€ 14,99","firstRealPriceWithTax":"€ 14,99","oneOffPaymentMethods":[{"id":4,"name":"Credit Card","identifier":"credit","paymentTypeId":"credit_card","authSupported":true,"captchaSupported":true,"customTitle":null},{"id":11,"name":"Paypal","identifier":"paypalbt","paymentTypeId":"paypal","authSupported":true,"captchaSupported":false,"customTitle":null}],"subscriptionPaymentMethods":[{"id":4,"name":"Credit Card","identifier":"credit","paymentTypeId":"credit_card","authSupported":true,"captchaSupported":true,"customTitle":null},{"id":11,"name":"Paypal","identifier":"paypalbt","paymentTypeId":"paypal","authSupported":true,"captchaSupported":false,"customTitle":null}],"isCustomPriceAvailable":false,"isZero":false,"isPaymentMethodRequired":true,"forceAutoRenew":true,"newCustomersOnly":false,"firstPeriod":"1 godina","sellDate":null,"hasFinishedSales":false,"restrictCheckoutProcess":false,"originalBillingPlan":null,"sku":null,"giftEmailSendStartTime":null,"giftEmailSendEndTime":null,"sharedAccountCount":null,"authorizationAmount":null,"linkedTermSignedData":null,"linkedTermData":null,"verificationAmount":14.99,"verificationAmountWithTax":14.99,"allowPromoCodes":false},{"termId":"TMO5YUESBP0Z","name":"Mjesečni pristup - 2.99 EUR","description":"Pristup Večernji Premium sadržaju do otkazivanja, mjesečna naplata","type":"payment","resource":{"name":"PREMIUM","description":"","rid":"R3LPQ3M","url":null,"imageUrl":null},"displayLine":"€ 2,99 mjesečno","billingPlanTable":[{"date":"Danas","period":"month","shortPeriod":"/mo","originalPrice":"","billingPeriod":"1 month","priceChargedStr":"€ 2,99","priceValue":2.99,"cycles":"2147483647","isFreeTrial":"false","isTrial":"false","isPayWhatYouWant":"false","billing":"€ 2,99 mjesečno","duration":"mjesec do otkazivanja","billingInfo":"€ 2,99 mjesečno","isFree":"false","pricelessBillingPre":"","price":"€ 2,99","priceAndTax":2.99,"pricelessBillingPost":" mjesečno","currency":"EUR","originalPriceValue":null,"totalBilling":"€ 2,99 mjesečno"}],"chargeDisplayAmount":"€ 2,99","chargeAmount":2.99,"chargeAmountInMinorUnit":299,"taxAmount":"€ 0","hstAmount":"€ 0","qstAmount":"€ 0","pstAmount":"€ 0","gstAmount":"€ 0","taxRate":null,"hstRate":null,"qstRate":null,"pstRate":null,"gstRate":null,"price":"€ 2,99","totalAmount":"€ 2,99","termLevelTaxProductCategory":"","chargeCurrency":"EUR","chargeCurrencySymbol":"€","isSubscription":true,"hasFreeTrial":false,"isSchedule":false,"firstRealPrice":"€ 2,99","firstRealPriceWithTax":"€ 2,99","oneOffPaymentMethods":[{"id":4,"name":"Credit Card","identifier":"credit","paymentTypeId":"credit_card","authSupported":true,"captchaSupported":true,"customTitle":null},{"id":11,"name":"Paypal","identifier":"paypalbt","paymentTypeId":"paypal","authSupported":true,"captchaSupported":false,"customTitle":null}],"subscriptionPaymentMethods":[{"id":4,"name":"Credit Card","identifier":"credit","paymentTypeId":"credit_card","authSupported":true,"captchaSupported":true,"customTitle":null},{"id":11,"name":"Paypal","identifier":"paypalbt","paymentTypeId":"paypal","authSupported":true,"captchaSupported":false,"customTitle":null}],"isCustomPriceAvailable":false,"isZero":false,"isPaymentMethodRequired":true,"forceAutoRenew":true,"newCustomersOnly":false,"firstPeriod":"1 month","sellDate":null,"hasFinishedSales":false,"restrictCheckoutProcess":false,"originalBillingPlan":null,"sku":null,"giftEmailSendStartTime":null,"giftEmailSendEndTime":null,"sharedAccountCount":null,"authorizationAmount":null,"linkedTermSignedData":null,"linkedTermData":null,"verificationAmount":2.99,"verificationAmountWithTax":2.99,"allowPromoCodes":false},{"termId":"TMDJJ8VDP0JH","name":"e-novine + Premium - 49.99 EUR","description":"Pristup e-novinama Večernjeg lista i Premium sadržaju 365 dana, jednokratna naplata","type":"payment","resource":{"name":"PREMIUM","description":"","rid":"R3LPQ3M","url":null,"imageUrl":null},"displayLine":"prvo plaćanje € 49,99","billingPlanTable":[{"date":"Danas","period":"godina","shortPeriod":" for year","originalPrice":"","billingPeriod":"1 godina","priceChargedStr":"€ 49,99","priceValue":49.99,"cycles":"1","isFreeTrial":"false","isTrial":"false","isPayWhatYouWant":"false","billing":"prvo plaćanje € 49,99","duration":"godina dana pristupa","billingInfo":"prvo plaćanje € 49,99","isFree":"false","pricelessBillingPre":"prvo plaćanje ","price":"€ 49,99","priceAndTax":49.99,"pricelessBillingPost":"","currency":"EUR","originalPriceValue":null,"totalBilling":"prvo plaćanje € 49,99"}],"chargeDisplayAmount":"€ 49,99","chargeAmount":49.99,"chargeAmountInMinorUnit":4999,"taxAmount":"€ 0","hstAmount":"€ 0","qstAmount":"€ 0","pstAmount":"€ 0","gstAmount":"€ 0","taxRate":null,"hstRate":null,"qstRate":null,"pstRate":null,"gstRate":null,"price":"€ 49,99","totalAmount":"€ 49,99","termLevelTaxProductCategory":"","chargeCurrency":"EUR","chargeCurrencySymbol":"€","isSubscription":false,"hasFreeTrial":false,"isSchedule":false,"firstRealPrice":"€ 49,99","firstRealPriceWithTax":"€ 49,99","oneOffPaymentMethods":[{"id":4,"name":"Credit Card","identifier":"credit","paymentTypeId":"credit_card","authSupported":true,"captchaSupported":true,"customTitle":null},{"id":11,"name":"Paypal","identifier":"paypalbt","paymentTypeId":"paypal","authSupported":true,"captchaSupported":false,"customTitle":null}],"subscriptionPaymentMethods":[{"id":4,"name":"Credit Card","identifier":"credit","paymentTypeId":"credit_card","authSupported":true,"captchaSupported":true,"customTitle":null},{"id":11,"name":"Paypal","identifier":"paypalbt","paymentTypeId":"paypal","authSupported":true,"captchaSupported":false,"customTitle":null}],"isCustomPriceAvailable":false,"isZero":false,"isPaymentMethodRequired":true,"forceAutoRenew":false,"newCustomersOnly":false,"firstPeriod":"1 godina","sellDate":null,"hasFinishedSales":false,"restrictCheckoutProcess":false,"originalBillingPlan":null,"sku":null,"giftEmailSendStartTime":null,"giftEmailSendEndTime":null,"sharedAccountCount":null,"authorizationAmount":null,"linkedTermSignedData":null,"linkedTermData":null,"verificationAmount":49.99,"verificationAmountWithTax":49.99,"allowPromoCodes":false}],"useMock":false,"isPromoCodeApplyWithoutUserEnabled":false,"isAutoDetectEmailEnabled":false,"offerTemplateId":"OT61RKTIYK93","app":{"name":"Vecernji.hr","image1":"/ml/cropped_lIwrWjnppu_1_qf0bd3.png","aid":"lIwrWjnppu","useTinypassAccounts":false,"userProvider":"publisher_user_ref","businessUrl":"https://www.vecernji.hr","canInitCheckoutWithAnon":false},"settings":{"requiresValidUser":true},"checkoutFlowType":"PURCHASE","isNewCustomer":true,"templateVersionPubId":"TVEJCUJYRCNJ","checkoutAuthenticationInSeparateState":false,"isPasswordlessCheckoutEnabled":false,"templatePubId":"fUCoB0nv6CDezWf4Lfti","templateCategory":"OFFER","checkoutFlowId":null,"hasTax":false,"additionalTerms":[],"consoleError":"","consents":[{"consentPubId":"CBCZ1WOR8UN9L","displayText":"Potvrđujem da sam pročitao/la opće <a href=\"https://www.vecernji.hr/opci-uvjeti-digitalne-pretplate/\" target=\"_blank\">uvjete korištenja digitalne pretplate</a> i pristajem na iste, te da sam pročitao/la i suglasan/suglasna sam s <a href=\"https://www.vecernji.hr/politikaprivatnosti/\" target=\"_blank\">politikom privatnosti</a> te drugim <a href=\"https://www.vecernji.hr/politika-kolacica/\" target=\"_blank\">pravilima kojima se uređuje korištenje kolačića</a>.","fieldName":"Piano GDPR","fieldId":"11fd6444d1635418","sortOrder":1,"checked":false,"required":true}],"isConfirmStepEnabled":false,"offerId":"OFWRO4C2AQFJ","templateVersion":4,"user":{"uid":"anon","email":null,"displayName":null,"valid":false,"firstName":null,"lastName":null,"confirmed":false},"offerTemplateVariantId":"OTV7IBLHC9Q26","isRedemption":false},"GET_TAX_COUNTRIES":"/checkout/offer/getTaxCountries"};
</script>

<!-- next-button-component -->
<script type="text/ng-template" id="/widget/checkout/component/partials/next-button-component.html"
        xmlns="http://www.w3.org/1999/html">
    <div class="next-button-wrapper">
        <a href="javascript:void(0)" class="button next">{{title}}</a>
    </div>
</script>

<!-- previous-button-component -->
<script type="text/ng-template" id="/widget/checkout/component/partials/previous-button-component.html"
        xmlns="http://www.w3.org/1999/html">
    <div class="previous-button-wrapper" ng-show="hasPreviousState()">
        <a href="javascript:void(0)" class="button back"></a>
    </div>
</script>

<!-- close-button-component -->
<script type="text/ng-template" id="/widget/checkout/component/partials/close-button-component.html">
    <div class="close-button-wrapper">
        <a href="javascript:void(0)"
           class="button big fixed--middle cancel-button"
           ng-class="{'cancel-button--primary': usePrimaryColor}"
        >
            {{title}}
        </a>
    </div>
</script>

<!-- complete-purchase-button-component -->
<script type="text/ng-template" id="/widget/checkout/component/partials/complete-purchase-button-component.html">
    <div>
        <a href="javascript:void(0)"
           class="button complete-purchase"
           ng-class="{'disabled': isDisabled}"
           data-e2e="complete-purchase-button"
        >
            {{title}}
        </a>
    </div>
</script>

<!--  goto-confirmation-component -->
<script type="text/ng-template" id="/widget/checkout/component/partials/goto-confirmation-component.html">
    <div>
        <a href="javascript:void(0)"
           class="button goto-confirmation"
           ng-class="{'disabled': isDisabled}"
        >
            {{title}}
        </a>
    </div>
</script>

<!-- error-list-component -->
<script type="text/ng-template" id="/widget/checkout/component/partials/error-list-component.html">
    <div class="message-block" ng-show="hasErrors()">
        <div class="icon-attention"></div>

        <ol class="errors">
            <li ng-repeat="error in errors" ng-class="{'one-error': hasOneError()}">
                {{error.fieldTitle}}
                {{error.message}}
            </li>
        </ol>
        <div class="btn-close" ng-click="reset()"></div>
    </div>
</script>

<!-- account-header-component -->
<script type="text/ng-template" id="/widget/checkout/component/partials/account-header-component.html">
    <div class="account-popup-header">
        <div previous-button></div>
      	<!-- 
        <div class="account-popup-language-toggle" ng-if="!noLanguage">
            <language-selector></language-selector>
        </div>
		-->
      
      	<h1 class="checkout__modal_title">Pretplata</h1>

        <boilerplate-close-button></boilerplate-close-button>
      	<!-- 
        <div class="account-group" desktop="">
            <div class="account-data" ng-if="isUserValid()">
                <div class="account-mail">{{user.email}}</div>
                <div class="account-name">
                    <span ng-show="user.displayName !== user.email">
                        {{ user.displayName }}
                        <span ng-if="allowLogout()">
                            &#8212;
                        </span>
                    </span>
                    <span ng-show="user.displayName === user.email && (user.firstName || user.lastName)">
                        {{ user.firstName }} {{ user.lastName }}
                        <span ng-if="allowLogout()">
                             &#8212;
                        </span>
                    </span>
                    <span ng-click="logout()" ng-show="allowLogout()" class="link"><t>Logout</t></span>
                </div>
            </div>
            <div class="account-data" ng-if="!isUserValid() && ( allowLogin() || !allowInvalidUser())">
                <div class="account-text account-login" ng-if="allowLogin()">
                    <span>
                        <t>Already have an account?</t>
                        <a ng-click="login()"><t>Log in</t></a>
                    </span>
                </div>
                <div class="account-name" ng-if="!allowInvalidUser() && !allowLogin()">
                    <span>
                        <t>You should be already logged in</t>
                    </span>
                </div>
            </div>
        </div>
        <div class="account-group" mobile="">
            <div>
                <div class="account-data">
                    <div class="account-name account-mail-only">{{user.email}}<span ng-show="allowLogout()">  &#8212; <span class="link"
                                                                                                                            ng-click="logout()"><t>Logout</t></span></span>
                    </div>
                </div>
            </div>
        </div>
		-->
    </div>
</script>

<script type="text/ng-template" id="/widget/checkout/component/partials/purchase-receipt-component.html">

    <div class="piano__logo">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 389.99 96"><path d="M0,0V96H390V0ZM385.38,91.44H193.65V4.56H385.38Z" style="fill:#4a0a07"/><path d="M367.23,59V46.37l-5,12.67h-1.63l-5-12.67V59H352V41.48h5.24l4.27,11,4.27-11H371V59Zm-34.61-7c0,4.34,2.58,7.34,7.93,7.34s7.93-3,7.93-7.34V41.47h-3.82V51.9a4.13,4.13,0,1,1-8.25,0V41.47h-3.79V52m-7.21,7h3.74V41.48h-3.74Zm-3.49,0V41.48h-5.26l-4.27,11-4.26-11h-5.24V59h3.74V46.37L311.58,59h1.63l5-12.67V59Zm-22,0V55.75h-8.69v-4h8.51V48.45h-8.51V44.77H300V41.48H287.53V59ZM280.89,47.11a2.38,2.38,0,0,1-2.6,2.4h-4V44.77h4a2.36,2.36,0,0,1,2.6,2.34M284.84,59l-4-6.69a5.08,5.08,0,0,0,3.87-5.21c0-3.27-2.27-5.66-5.93-5.66H270.6V59h3.74V52.8h2.74L280.52,59Zm-20.41-11.9a2.37,2.37,0,0,1-2.61,2.34h-3.95V44.77h3.95a2.37,2.37,0,0,1,2.61,2.37M257.87,59V52.77h4.48a5.49,5.49,0,0,0,5.9-5.63c0-3.08-2.08-5.66-5.9-5.66h-8.21V59Zm-26.56-3.15-8.2-14.41-8.2,14.41-8.2-14.41V59.37h32.8V41.48Z" style="fill:#4a0a07"/><path d="M180.9,11.76c0-2.2-1.39-3.37-4.67-3.37s-4.71,1.17-4.71,3.37c0,2.47,1.48,3.36,4.71,3.36s4.67-1.12,4.67-3.36m-9.11,32.85h8.84V17l-8.84.4Zm4.05,6.56-6.82.59-1.39,5.83h-3v6.24h2.6V76.66c0,5.38,2.83,8.84,8.84,8.84a13.67,13.67,0,0,0,5.21-.85l-.45-6a7.48,7.48,0,0,1-2.11.32c-2,0-2.83-.76-2.83-2.51V63.83h4.83V57.59h-4.83Zm-7-39.41c0-2.2-1.39-3.37-4.71-3.37s-4.71,1.17-4.71,3.37c0,2.42,1.48,3.32,4.71,3.32s4.71-1.12,4.71-3.32M160,43.8A1.94,1.94,0,0,1,157.81,46a6.28,6.28,0,0,1-1.53-.22l-.4,5.79a12.91,12.91,0,0,0,4.09.63c4.62,0,8.66-1.89,8.66-8.13V17l-8.66.36Zm-12.23.81h8.66V27.46c0-6.95-3.73-10.81-9.51-10.81a11.52,11.52,0,0,0-7.27,2.47L138.4,17l-6.19.36V44.61h8.62V25.53A4.58,4.58,0,0,1,144.42,24c2.2,0,3.32,1,3.32,3.5ZM132,52.2c0,2.47,1.48,3.37,4.71,3.37s4.67-1.12,4.67-3.37-1.39-3.36-4.67-3.36S132,50,132,52.2m-2.18-26.89.5-8.16a9,9,0,0,0-3.1-.46,7.88,7.88,0,0,0-7,4.31H120l-.77-3.95-6.86.32V44.61h8.66V30.92c0-3.9,2.24-6.06,5.56-6.06a11.37,11.37,0,0,1,3.19.45m-19.9,8a36.09,36.09,0,0,0,.23-3.86c0-8.66-4.36-12.79-11.68-12.79-8.61,0-12.56,5.25-12.56,14,0,9.3,4.49,14.41,14.27,14.41a24.49,24.49,0,0,0,9.25-1.66l-1-6.64a23.18,23.18,0,0,1-7.22,1.12c-4,0-6-1.26-6.37-4.58Zm-7.67-5.43H94.7c.27-3.32,1.21-4.35,3.81-4.35,2.38,0,3.64,1.21,3.73,4.35M81.86,15.3l4.35-6.55H79.8l-1.57,3.37H78L76.38,8.75H70.1l4.22,6.55Zm-3.11,1.44c-9.15,0-13.06,5.29-13.06,14.31,0,9.34,4.49,14.09,12.88,14.09a14.35,14.35,0,0,0,7-1.43l-.59-6.46a12.73,12.73,0,0,1-4.48.8c-3.64,0-5.79-2.06-5.79-7,0-5.11,1.34-6.91,6-6.91a16.52,16.52,0,0,1,4.18.68l.44-7a20.42,20.42,0,0,0-6.5-1.08M64.28,33.34a36.17,36.17,0,0,0,.22-3.86c0-8.66-4.35-12.79-11.67-12.79-8.61,0-12.56,5.25-12.56,14,0,9.3,4.49,14.41,14.27,14.41a24.4,24.4,0,0,0,9.24-1.66l-.94-6.64a23.23,23.23,0,0,1-7.22,1.12c-4,0-6-1.26-6.38-4.58ZM56.6,27.91H49.07c.27-3.32,1.21-4.35,3.81-4.35,2.38,0,3.63,1.21,3.72,4.35M31.73,44.61,42.86,11H33.12L27.65,31.64l-.81,3.5H26.7l-.85-3.5L20.51,11H10.19L21.27,44.61ZM128.87,50l-8.75.4V85.05h8.75Zm12.23,7.49-8.84.41V85.05h8.84Zm14.65,19.48c0,1.12-.89,1.88-3,1.88a18.72,18.72,0,0,1-7.81-1.75l-.86,6.82a19.94,19.94,0,0,0,8.71,1.71c7.81,0,11-3.82,11-9.43,0-9.37-11.71-7.22-11.71-10.49,0-1,.8-1.58,2.51-1.58A23.24,23.24,0,0,1,162,65.4l.63-6.73a21.45,21.45,0,0,0-8-1.53c-7.44,0-10.9,3.81-10.9,8.89,0,9.78,12,7.44,12,10.9" style="fill:#fff"/></svg>
    </div>

    <h1 class="you-already-have-access">
        <t>Thanks for your purchase!</t>
    </h1>

    <span ng-show="isChargingTerm(selectedTerm)">
        <t>Upravo ste kupili pristup</t>
    </span>

    <span ng-show="!isChargingTerm(selectedTerm)">
       <t>Upravo ste dobili pristup</t>
    </span>

    <span class="bold resource-name">
        <!-- 
        {{selectedTerm.resource.name | tc:'resource.name'}}<span ng-hide="input.sharedAccounts.length > 0">.</span> 
        -->
        PREMIUMU
    </span>

    Večernjeg lista.

    <span ng-show="input.sharedAccounts.length > 0"><t context="checkout.platform" arg0="{{input.sharedAccounts.length}}">for you and up to {0} others.</t></span>
    <br/>
    <!-- <span><t><span ng-if="isChargingTerm(selectedTerm)">Your <span class="bold payment-method">{{getSelectedPaymentMethodName()}}<span ng-if="isApplePayPaymentMethod()"> account</span></span> has been charged.</span> An email confirmation has been sent to
            <a class="mail" href="javascript:void(0);">{{user.email}}</a></t></span> -->
    <t>Vaša kreditna kartica je naplaćena. E-mail potvrda o plaćanju vam je poslana na <a class="mail" href="javascript:void(0);">{{user.email}}</a></t>
    <div ng-show="input.sharedAccounts.length > 0">
        <t context="checkout.platform">You can modify your shared subscription membership at any time.</t>
    </div>
</script>

<script type="text/ng-template" id="/widget/checkout/component/partials/registration-receipt-component.html">
    <h1 class="you-already-have-access">
        <t>Thanks for your registration!</t>
    </h1>

    <span>
       <t>You just got access to</t>
    </span>

    <span class="bold resource-name">{{selectedTerm.resource.name | tc:'resource.name'}}.</span>
    <br/>

    <span><t>An email confirmation has been sent to
            <a class="mail" href="javascript:void(0);">{{user.email}}</a></t></span>
</script>


<script type="text/ng-template" id="/widget/checkout/component/partials/external-receipt-component.html">
    <h1 class="you-already-have-access">
        <t>Your access was successfully verified!</t>
    </h1>

    <span>
        <t>You just got access to</t>
        <span class="bold"> {{selectedTerm.resource.name | tc:'resource.name'}}.</span>
    </span>
</script>

<script type="text/ng-template" id="/widget/checkout/component/partials/gift-redemption-receipt-component.html">
    <h1 class="you-already-have-access">
        <t>You now have access to <span class="bold resource-name">{{app.name}} - {{voucher.resource.name}}</span></t>
        <span ng-show="input.sharedAccounts.length > 0">
            <t>for you and up to {{input.sharedAccounts.length}} others.</t>
        </span>
        <div ng-show="input.sharedAccounts.length > 0">
            <t context="checkout.platform">You can modify your shared subscription membership at any time.</t>
        </div>
    </h1>
</script>
<script type="text/ng-template" id="/widget/checkout/component/partials/gift-purchase-receipt-component.html">
    <h1 class="you-already-have-access">
        <t>Thanks for your purchase!</t>
    </h1>

    <span ng-show="isChargingTerm(selectedTerm)">
        <t>You just purchased</t>
    </span>

    <span ng-show="!isChargingTerm(selectedTerm)">
       <t>You just got access to</t>
    </span>

    <t>
        <span class="bold resource-name">{{selectedTerm.resource.name | tc:'resource.name'}}</span>
        for
    {{ giftEmailParams.recipientName ? giftEmailParams.recipientName : giftEmailParams.recipientEmail }}  as a gift.
    </t>
    <br/>
    <t>Instructions to redeem it have been sent to {{ giftEmailParams.recipientEmail }}</t>
    <br/>
    <span>
        <t>
            <span ng-if="isChargingTerm(selectedTerm)">
                Your <span class="bold payment-method">{{getSelectedPaymentMethodName()}}<span ng-if="isApplePayPaymentMethod()"> account</span> </span> has been charged.
            </span>
            An email confirmation has been sent to <a class="mail" href="javascript:void(0);">{{user.email}}</a>
        </t>
    </span>
</script>

<script type="text/ng-template" id="/widget/checkout/component/partials/openpay-cash-receipt-component.html">
    <div class="openpay-cash-receipt">
        <p class="openpay-cash-receipt-success-message"><t>Thanks! Your receipt and barcode are ready and have been emailed to <strong>{{user.email}}</strong>. Your subscription will begin upon redemption and payment of <strong>{{input.chargeDisplayAmount}}</strong> at any participating store.</t></p>
        <h4><t>Please remember, subscriptions paid for in cash are not eligible for refunds.</t></h4>
        <h5 class="openpay-cash-payment-subtitle"><t>Instructions</t></h5>
        <ol class="openpay-cash-payment-instructions-list">
            <li><t>Print the barcode</t></li>
            <li><t>Bring it to a participating store (<a href="https://www.openpay.mx/tiendas-de-conveniencia.html" target="_blank">click here</a> for a list of participating stores)</t></li>
            <li><t>Present the barcode at the checkout counter</t></li>
            <li><t>Pay for your subscription in cash</t></li>
            <li><t>You will receive an email confirming that you now have access to {{selectedTerm.resource.name}}. This may take up to 24 hours</t></li>
        </ol>
        <p class="openpay-cash-payment-instructions-paragraph"><t>You may check the status of your access by going to 'My Account' and clicking on the 'Bills' tab.</t></p>
        <div class="openpay-cash-payment-barcode">
            <img ng-src="{{input.receipt.paymentMethod.barcodeUrl}}" alt="">
            <div class="openpay-cash-payment-barcode-code">{{input.receipt.paymentMethod.reference}}</div>
        </div>
        <div openpay-bill-controls bill-url="{{input.receipt.billUrl}}" bill-id="{{input.receipt.billId}}"></div>
    </div>
</script>

<script type="text/ng-template" id="/widget/checkout/component/partials/easypay-multibanco-receipt-component.html">
    <div class="easypay-multibanco-receipt">
        <div class="notification-wrapper">
            <t>This information has been sent to <strong>{{input.receipt.multibanco.email}}</strong></t>
        </div>
        <div class="logos-wrapper">
            <div class="multibanco-logo"></div>
            <div class="delimiter"></div>
            <div class="easypay-logo"></div>
        </div>
        <h2 class="receipt-title"><t>Here is your transaction information</t></h2>
        <ul class="transaction-information-list">
            <li>
                <strong><t>Entity:</t></strong> <span id="multibancoEntity">{{input.receipt.multibanco.entity}}</span>
            </li>
            <li>
                <strong><t>Reference:</t></strong> <span id="multibancoReference">{{input.receipt.multibanco.reference}}</span>
            </li>
            <li>
                <strong><t>Value:</t></strong> <span id="multibancoChargeAmount">{{input.receipt.multibanco.chargeAmount}}</span>
            </li>
        </ul>

        <div class="warning-wrapper">
            <strong><t>Instructions</t></strong>
            <ol>
                <li>
                    <t>Use this information for paying via ATM or online banking system</t>
                </li>
                <li>
                    <t>When payment is complete, you will receive an e-mail notifying you of your access</t>
                </li>
            </ol>
        </div>
    </div>
</script>

<script type="text/ng-template" id="/widget/checkout/component/partials/easypay-mbway-receipt-component.html">
    <div class="easypay-mbway-receipt">
        <div class="logos-wrapper">
            <div class="mbway-logo"></div>
            <div class="delimiter"></div>
            <div class="easypay-logo"></div>
        </div>
        <div class="content">
            <h1 class="you-already-have-access">
                <strong><t>Thanks! Notification has been sent</t></strong>
            </h1>
            <t>Check notification in your MBWAY mobile app for more informaion</t>
        </div>
    </div>
</script>


<script type="text/ng-template" id="/widget/checkout/component/partials/easypay-direct-debit-receipt-component.html">
    <div class="easypay-direct-debit-receipt">

        <div class="easypay-direct-debit-receipt__header">
            <div class="table-cell table-cell--centered table-cell--delimiter-right">
                <div class="direct-debit-logo"></div>
            </div>
            <div class="table-cell table-cell--delimiter"></div>
            <div class="table-cell table-cell--centered">
                <div class="easypay-logo"></div>
            </div>
        </div>

        <div class="easypay-direct-debit-receipt__body">
            <div class="done-icon"></div>
            <div class="receipt-title"><t>Thanks! The transaction has been confirmed</t></div>
            <span>You will receive an e-mail confirmation in 3 days.</span>
        </div>
    </div>
</script>

<script type="text/ng-template" id="/widget/checkout/component/partials/easypay-boleto-receipt-component.html">
    <div class="easypay-boleto-receipt">
      <div class="easypay-boleto-receipt__success-message"><t>Thanks! Your receipt and barcode are ready and have been emailed to <strong>{{user.email}}</strong>. Your subscription will begin upon redemption and payment of <strong>{{input.chargeDisplayAmount}}</strong> at any participating store.</t></div>

      <div class="easypay-boleto-receipt__refund">
        <t>Please remember, subscriptions paid for in cash are not eligible for refunds.</t>
      </div>

      <div class="easypay-boleto-receipt__highlighted-area easypay-boleto-receipt__highlighted-area--instructions">
          <div class="easypay-boleto-receipt__instructions-title"><t>Instructions</t></div>

          <ol class="easypay-boleto-receipt__instructions">
              <li><t>After clicking "Generate Boleto" you will be forwarded to Ebanx web-site, where you will need to initiate Boleto payment.</t></li>
              <li><t>Initiate payment within 3 hours after clicking on "Generate Boleto" before it expires.</t></li>
              <li><t>Print the generated Boleto ticket.</t></li>
              <li><t>Bring it to any participating bank / store / postal office within 3 days after you initiate a payment before it expires.</t></li>
              <li><t>Pay for your subscription with credit card or cash.</t></li>
              <li><t>You will receive an email confirming that you now have access to {{selectedTerm.resource.name}}. This may
                  take up to 24 hours.</t></li>
          </ol>

          <t>You may check the status of your access by going to "My account" and clicking on the "Bills" tab. </t>
      </div>

      <!--Controls-->
      <div easypay-bill-controls bill-url="{{input.receipt.billUrl}}" open-bill-title="{{'Generate Boleto' | t}}"></div>
    </div>
</script>

<script type="text/ng-template" id="/widget/checkout/component/partials/onet-receipt-component.html">
    <h1 class="you-already-have-access">
        <t>Thanks for your purchase!</t>
    </h1><br />
    <t>We are processing your payment. You will be notified by email upon confirmation.</t>
</script>

<script type="text/ng-template" id="/widget/checkout/component/partials/boilerplate-login-dropdown.html">
    <div class="pn-boilerplate-login">
        <div ng-if="!isUserValid()"
             class="pn-boilerplate-login__action">
            <button type="button"
                    ng-click="login()"
                    class="pn-boilerplate-login__button login">
                <svg class="pn-boilerplate-login__icon" width="16" height="16" viewBox="0 0 16 16" fill="#0F0F15" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13 3H1V1h14v14H1v-2h12V3zM6 9H1V7h5V4.586L9.414 8 6 11.414V9z" fill="#0F0F15"/>
                </svg>
            </button>
        </div>
        <div ng-if="isUserValid()"
             class="pn-boilerplate-login__action"
             ng-class="{'pn-boilerplate-login__action--active': isDropdownOpen}">
            <button type="button"
                    ng-click="logoutToggle(); $event.stopPropagation()"
                    class="pn-boilerplate-login__button logout-dropdown">
                <svg class="pn-boilerplate-login__icon" width="16" height="16" viewBox="0 0 16 16" fill="#0F0F15" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11 6a3 3 0 11-6 0 3 3 0 016 0zm.518 3.552a5 5 0 10-7.037 0A6 6 0 001 15h2a4 4 0 014-4h2a4 4 0 014 4h2a6 6 0 00-3.482-5.448z"/>
                </svg>
            </button>
            <ul ng-if="isDropdownOpen" ng-click="$event.stopPropagation()" class="pn-boilerplate-login__dropdown">
                <li class="pn-boilerplate-login__dropdown-item">
                    <button class="pn-boilerplate-login__dropdown-button username">
                        <svg class="pn-boilerplate-login__dropdown-icon" width="16" height="16" viewBox="0 0 16 16" fill="#0F0F15" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11 6a3 3 0 11-6 0 3 3 0 016 0zm.518 3.552a5 5 0 10-7.037 0A6 6 0 001 15h2a4 4 0 014-4h2a4 4 0 014 4h2a6 6 0 00-3.482-5.448z" fill="#0F0F15"/>
                        </svg>
                        <span class="pn-boilerplate-login__dropdown-title">
                            {{ displayUserName(user) }}
                        </span>
                    </button>
                </li>
                <li class="pn-boilerplate-login__dropdown-item">
                    <button ng-click="logout(); logoutToggle()" class="pn-boilerplate-login__dropdown-button logout">
                        <svg class="pn-boilerplate-login__dropdown-icon" width="16" height="16" viewBox="0 0 16 16" fill="#0F0F15" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9 1H7v7h2V1zM1 8a7 7 0 014-6.326V4a5 5 0 106 0V1.674A7 7 0 111 8z" fill="#0F0F15"/>
                        </svg>
                        <span class="pn-boilerplate-login__dropdown-title">
                            Logout
                        </span>
                    </button>
                </li>
            </ul>
        </div>
    </div>
</script>
<!-- paypal-through-braintree-form-component -->
<script type="text/ng-template" id="/widget/checkout/component/partials/paypal-through-braintree-form-component.html">
    <div ng-show="isPaymentMethod(PAYPAL_BT)">
        <div class="paypal-payment-form row">
            <div class="errors"></div>

            <div class="paypalbt-payment-form">
                <div ng-show="!isLoggedIn() && !stored.length"><t>Please, log in first</t></div>
                <div ng-show="isLoggedIn() || stored.length"><t>Your PayPal accounts</t></div>

                <table class="payment-method-paypalbt">

                    <tr class="payment-method-paypalbt-row existing-upi" ng-repeat="method in stored" ng-class="{'selected' : $parent.model.selectedUpiId === method.id}">
                        <td class="payment-method-paypalbt-cell">
                            <input type="radio" name="stored_method" value="{{method.id}}" ng-model="model.selectedUpiId"/>
                        </td>
                        <td class="payment-method-paypalbt-cell">
                            {{method.source}}
                        </td>
                    </tr>

                    <tr class="payment-method-paypalbt-row" ng-class="{'selected' : model.selectedUpiId === 0, 'add-new-account': !isLoggedIn()}">
                        <td class="payment-method-paypalbt-cell"  ng-if="(stored.length > 0) && isLoggedIn()">
                            <input type="radio" name="stored_method" value="0" ng-model="model.selectedUpiId"/>
                        </td>
                        <td class="payment-method-paypalbt-cell" ng-attr-colspan="{{!isLoggedIn() ? '2' : '1'}}">
                            <div ng-show="isContainerVisible()" id="paypal-bt-button">
                                <div class="payment-method-paypalbt-selected-pm paypal-express-checkout-loggedin" ng-if="userEmail">
                                    <span class="payment-method-paypalbt-selected-pm__email">{{ userEmail }}</span>
                                    <button class="payment-method-paypalbt-selected-pm__cancel" ng-click="cancelSelectedPaymentMethod()"><t>Cancel</t></button>
                                </div>
                            </div>
                            <div class="add-new-account-msg" ng-show="!isLoggedIn() && stored.length"><t>Add new PayPal account</t></div>
                            <div class="add-new-account-msg" ng-show="!isLoggedIn() && !stored.length"><t>Use your <strong>PayPal account</strong> to pay for your purchases and take the protection of Braintree with you</t></div>
                        </td>
                    </tr>
                </table>
            </div>
            <div  ng-if="canContinue()" ng-transclude></div>
        </div>
    </div>
</script>

<!-- apple-pay-through-braintree-form-component -->
<script type="text/ng-template" id="/widget/checkout/component/partials/apple-pay-through-braintree-form-component.html">
    <div ng-show="isApplePayBtShown()">
        <div consents-list></div>
        <div ng-if="isPasswordlessCheckout() && !isPaymentState()">
            <button ng-click="openPasswordLessApplePay()" class="apple-pay-button" ng-class="{'apple-pay-button--disabled' : !isApplePayBtEnabled}" data-e2e="applePayBTBtn">
                <span ng-show="!zeroTerm">
                    <span><t>Buy with</t></span>
                    <svg class="apple-pay-button__logo" width="51" height="20" viewBox="0 0 51 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.258 2.579c-.594.675-1.544 1.208-2.494 1.132-.119-.914.346-1.884.89-2.484C8.248.533 9.287.038 10.13 0c.099.951-.287 1.884-.871 2.579zm.86 1.313c-1.375-.077-2.553.751-3.206.751-.663 0-1.663-.713-2.751-.694A4.09 4.09 0 00.707 5.966C-.778 8.42.32 12.056 1.756 14.053c.703.99 1.544 2.075 2.652 2.036 1.05-.038 1.465-.656 2.732-.656 1.277 0 1.643.656 2.751.637 1.148-.019 1.87-.99 2.573-1.979.802-1.122 1.129-2.217 1.148-2.274-.02-.019-2.216-.828-2.236-3.263-.02-2.036 1.732-3.007 1.81-3.064-.989-1.408-2.533-1.56-3.067-1.598zm7.948-2.76v14.834h2.395v-5.072h3.316c3.028 0 5.156-1.998 5.156-4.89 0-2.893-2.088-4.872-5.077-4.872h-5.79zm2.395 1.941h2.761c2.079 0 3.266 1.066 3.266 2.94 0 1.875-1.187 2.95-3.276 2.95h-2.75v-5.89zM33.307 16.08c1.505 0 2.9-.733 3.534-1.893h.05v1.779h2.216V8.582c0-2.14-1.781-3.52-4.523-3.52-2.543 0-4.424 1.399-4.493 3.32h2.157c.179-.913 1.06-1.512 2.267-1.512 1.465 0 2.286.656 2.286 1.865v.818l-2.989.171c-2.78.162-4.285 1.256-4.285 3.159 0 1.922 1.554 3.197 3.78 3.197zm.644-1.76c-1.277 0-2.089-.59-2.089-1.494 0-.933.782-1.475 2.277-1.56l2.662-.162v.837c0 1.39-1.227 2.379-2.85 2.379zM42.066 20c2.336 0 3.434-.856 4.395-3.454l4.206-11.341h-2.435l-2.82 8.763h-.05l-2.82-8.763h-2.505l4.058 10.799-.218.656c-.366 1.113-.96 1.542-2.019 1.542-.188 0-.554-.02-.702-.038v1.779c.138.038.732.057.91.057z" fill="#fff"/>
                    </svg>
                </span>
                <span ng-show="zeroTerm"><t>Complete</t></span>
            </button>
        </div>
        <div ng-if="!isPasswordlessCheckout() || isPaymentState()" class="apple-pay-bt-form row">
            <div class="payment-system-condition row">
                <div ng-if="stored.length">
                    <span class="paypal-express-checkout-title">
                        <h4><t>Your Apple Pay cards</t></h4>
                    </span>
                    <table class="payment-method-paypal-express-checkout">
                        <tr class="payment-method-paypal-express-checkout-row existing-upi" ng-repeat="upi in stored" ng-class="{'selected' : selectedPaymentMethod.id === upi.id}">
                            <td class="payment-method-paypal-express-checkout-cell">
                                <input type="radio" id="{{upi.id}}" name="stored_method" ng-change="changePaymentMethod(upi)" ng-model="selectedPaymentMethod.id" ng-value="upi.id"  />
                            </td>
                            <td class="payment-method-paypal-express-checkout-cell">
                                <div class="overflow-hidden">
                                    <label for="{{upi.id}}">
                                        {{upi.source}}
                                        <div ng-if="upi.isNew">
                                            <span class="float-left"><t>Your new credit card</t></span>
                                            <button ng-click="cancelNewAccount()" class="paypal-express-checkout-cancel-button"><t>Cancel</t></button>
                                        </div>
                                    </label>
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
                <div ng-show="!isPaymentAuthorized()">
                    <div class="add-new-account-msg w385"><t>Add Apple Pay as a payment account to pay for your purchases and take the protection of Braintree with you</t></div>
                    <a ng-click="openApplePayWindow()" class="button big applepay-add-new-card" href="javascript:void(0)" ng-class="{'disabled': isApplePayBtEnabled !== true}">&nbsp;</a>
                </div>
                <div ng-show="isPaymentAuthorized()"><t>Your payment verified. Click on the button below to proceed.</t></div>
            </div>
        </div>
        <div ng-if="canContinue()" ng-transclude></div>
    </div>
</script>

<!-- amazon-form-component -->
<script type="text/ng-template" id="/widget/checkout/component/partials/amazon-form-component.html">
    <div ng-show="isPaymentMethod(AMAZON)">
        <div class="amazon-payment-form row">
            <div id="amazon_wallet">
                <div id="loading" class="amazon-loading" ng-show="amazon.loading && !amazon.techError">
                    <div class="add-credit-card-wrapper"><t>Please wait while your request is being processed...</t></div>

                    <div id="progress_bar"></div>
                </div>
                <div id="tech_error_message" class="amazon-tech-error-message" ng-show="amazon.techError">
                    <h3><t>Error contacting Amazon Payment Services.</t></h3>

                    <p><t>Please choose another payment method.</t></p>
                </div>
                <div id="login_container" class="payment-system-condition amazon-login overflow-hidden" ng-show="!amazon.loggedIn && !amazon.techError && !amazon.loading">

                    <div id="button_section">
                        <div class="add-credit-card-wrapper"><t>Please log in first.</t></div>

                        <div id="login_widget" class="payment-system-login-widget">
                        </div>
                    </div>
                    <div id="brief_section" class="payment-system-brief-section">
                        <t>Use your Amazon Payments account to pay for your purchases and take the protection of Amazon with you.</t>
                    </div>

                </div>
                <div id="wallet_container" ng-show="amazon.loggedIn && !amazon.techError && !amazon.loading">
                    <div class="amazon-wallet">
                        <div id="wallet" class="mb20">
                            <div id="wallet_widget"></div>
                        </div>

                        <div id="consent_widget" ng-show="amazon.isRecurring"></div>
                    </div>
                    <div ng-transclude></div>
                </div>
            </div>

        </div>
    </div>
</script>

<!-- mock-form-component -->
<script type="text/ng-template" id="/widget/checkout/component/partials/mock-form-component.html">
    <div ng-show="isPaymentMethodSelected() && isMockUsed()">

        <div class="mock-payment-form row">
            <div class="payment-system-condition">
                <t>Because you are checking out in our sandbox environment, we will simulate
                the payment process for easy testing.  Click the complete button below
                to simulate a purchase.</t>
            </div>
        </div>
        <div class="mock-payment-form row">
            <div class="payment-system-condition">
                <input type="checkbox" ng-model="mock.asyncProcessing"/> Emulate asynchronous processing
            </div>
        </div>
        <div ng-transclude></div>
    </div>
</script>

<!-- zero-form-component -->
<script type="text/ng-template" id="/widget/checkout/component/partials/zero-form-component.html">
    <div ng-show="isPaymentMethod(ZERO)">
        <div class="zero-payment-form row">
            <div class="payment-system-condition row">
                <t>Click on the button below to proceed further without any charges.</t>
            </div>
        </div>
        <div ng-transclude></div>
    </div>
</script>

<!-- pass-through-form-component -->
<script type="text/ng-template" id="/widget/checkout/component/partials/pass-through-form-component.html">
    <div class="pass-through-payment-form row">
        <div class="payment-system-condition row">
            <t>Click on the button below to proceed further without any charges.</t>
        </div>
    </div>
    <div ng-transclude></div>
</script>

<!-- worldpay-rxml-form-component -->
<script type="text/ng-template" id="/widget/checkout/component/partials/worldpay-rxml-form-component.html">
    <div ng-show="isSupportedWorldpayCcMethod()">
        <div class="worldpay-payment-form row">
            <div class="errors"></div>

            <div class="worldpay-accounts">
                <span class="worldpay-title" ng-if="upis.length && isPaymentMethod(WORLDPAY_PAYPAL)"><t>Your PayPal accounts</t></span>
                <span class="worldpay-title" ng-if="upis.length && isPaymentMethod(WORLDPAY_IDEAL)"><t>Your iDeal accounts</t></span>
                <span class="worldpay-title" ng-if="upis.length && isPaymentMethod(WORLDPAY_ELV)"><t>Your ELV accounts</t></span>

                <table class="worldpay-accounts-list worldpay-accounts-list-paypalideal" ng-if="upis.length">
                    <tr class="worldpay-accounts-list-row" ng-repeat="upi in upis">
                        <td class="worldpay-accounts-list-cell cell-checkbox-paypal">
                            <input type="radio" ng-model="checkedUpi" ng-value="upi.id" ng-click="changeUpi(upi.id)"/>
                        </td>
                        <td class="worldpay-accounts-list-cell cell-logo-paypal">
                            <div class="payment-method-{{upi.identifier}}"></div>
                        </td>
                        <td class="worldpay-accounts-list-cell cell-exp-paypal">
                            <t>Expires</t> {{upi.expire}}
                        </td>
                    </tr>
                </table>

                <div ng-if="isPaymentMethod(WORLDPAY_PAYPAL) && upis.length === 0">
                    <div class="pm-login-button paypal-login-button" ng-click="completePayment()"></div>
                    <div class="add-new-account-msg"><t>Add new PayPal account</t></div>
                </div>

                <div ng-if="isPaymentMethod(WORLDPAY_ELV) && upis.length === 0">
                    <div class="pm-login-button elv-login-button" ng-click="completePayment()"></div>
                    <div class="add-new-account-msg"><t>Add new ELV account</t></div>
                </div>

                <div ng-if="isPaymentMethod(WORLDPAY_IDEAL) && upis.length === 0">
                    <div class="pm-login-button ideal-login-button" ng-click="completePayment()"></div>
                    <div class="add-new-account-msg"><t>We're going to redirect you to iDeal<br>so you can complete your purchase</t></div>
                </div>

                <div ng-if="isPaymentMethod(WORLDPAY_PAYPAL) && upis.length > 0">
                    <div class="pm-login-button paypal-login-button" ng-click="addNewCard(initArgs)"></div>
                    <div class="add-new-account-msg"><t>Add new PayPal account</t></div>
                </div>

                <div ng-if="isPaymentMethod(WORLDPAY_ELV) && upis.length > 0">
                    <div class="pm-login-button elv-login-button" ng-click="addNewCard(initArgs)"></div>
                    <div class="add-new-account-msg"><t>Add new ELV account</t></div>
                </div>

                <div ng-if="isPaymentMethod(WORLDPAY_IDEAL) && upis.length > 0">
                    <div class="pm-login-button ideal-login-button" ng-click="addNewCard(initArgs)"></div>
                    <div class="add-new-account-msg"><t>We're going to redirect you to iDeal<br>so you can complete your purchase</t></div>
                </div>

                <div class="worldpay-remember-account">
                    <div class="custom-checkbox">
                        <input type="checkbox" id="savecc" ng-model="worldpay.saveCreditCard" ng-click="saveCC()"/>
                        <label for="savecc"><t>Remember for future payments</t></label>
                    </div>
                </div>
            </div>

            <div consents-list></div>
        </div>
        <div ng-if="(canContinue() && upis.length > 0) || isPreviewMod()" ng-transclude></div>
    </div>
</script>

<!-- worldpay-hpp-form-component -->
<script type="text/ng-template" id="/widget/checkout/component/partials/worldpay-hpp-form-component.html">
    <div ng-show="isPaymentMethod(WORLDPAY_HPP)">

        <div class="row" ng-show="!showUpis">
            <div class="worldpay-accounts">
                <div class="go-back-to-cards-wrapper">
                    <a href="javascript:void(0)" class="go-back-to-cards" ng-click="showCreditCards()" ng-show="!showUpis && upis.length > 0">
                        <t>Return to saved cards</t>
                    </a>
                </div>
            </div>
        </div>

        <div id="worldpay_hpp_placeholder" ng-show="!showUpis && !canContinue()"></div>

        <div class="row">
            <div desktop class="worldpay-payment-form">
                <div class="errors"></div>

                <div class="worldpay-accounts">

                    <div class="add-credit-card-wrapper">
                        <span ng-if="showUpis"><t>Your credit and debit cards</t></span>
                        <a href="javascript:void(0)" class="add-credit-card" ng-show="upis.length > 0 && showUpis" ng-click="addNewCard(initArgs)">
                            + <t>Add a new card</t>
                        </a>
                    </div>

                    <table class="worldpay-accounts-list worldpay-accounts-list-cc" ng-if="showUpis">
                        <tr class="worldpay-accounts-list-row" ng-repeat="upi in upis">
                            <td class="worldpay-accounts-list-cell cell-checkbox">
                                <input type="radio" ng-model="checkedUpi" ng-value="upi.id" ng-click="changeUpi(upi.id)"/>
                            </td>
                            <td class="worldpay-accounts-list-cell cell-upiid">
                                <div class="credit-card-{{upi.shortName}}"></div>
                            </td>
                            <td class="worldpay-accounts-list-cell cell-type">
                                {{upi.type}}
                            </td>
                            <td class="worldpay-accounts-list-cell cell-ending">
                                <t>ending in</t> {{upi.ending_in}}
                            </td>
                            <td class="worldpay-accounts-list-cell cell-exp">
                                <t>Expires</t> {{upi.expires}}
                            </td>
                        </tr>
                    </table>

                    <div ng-show="!showUpis" class="worldpay-remember-account">
                        <div class="custom-checkbox">
                            <input type="checkbox" id="savecc-wp" ng-model="worldPayHpp.saveCreditCard" ng-click="saveCCHpp()"/>
                            <label for="savecc-wp"><t>Remember my card for future payments</t></label>
                        </div>
                    </div>
                </div>
            </div>

            <div mobile class="worldpay-payment-form">
                <div class="errors"></div>

                <div class="worldpay-accounts">

                    <div class="add-credit-card-wrapper">
                        <div ng-if="showUpis"><t>Your credit and debit cards</t></div>
                        <a href="javascript:void(0)" ng-show="upis.length > 0 && showUpis" ng-click="addNewCard(initArgs)">
                            + <t>Add a new card</t>
                        </a>
                    </div>

                    <table class="worldpay-accounts-list worldpay-accounts-list-cc" ng-if="showUpis">
                        <tr class="worldpay-accounts-list-row" ng-repeat="upi in upis">
                            <td class="worldpay-accounts-list-cell cell-checkbox">
                                <input type="radio" ng-model="checkedUpi" ng-value="upi.id" ng-click="changeUpi(upi.id)"/>
                            </td>
                            <td class="worldpay-accounts-list-cell cell-upiid">
                                <div class="credit-card-{{upi.shortName}}"></div>
                            </td>
                            <td class="worldpay-accounts-list-cell cell-ending">
                                *{{upi.ending_in}}
                            </td>
                        </tr>
                    </table>

                    <div ng-show="!showUpis" class="worldpay-remember-account">
                        <div class="custom-checkbox">
                            <input type="checkbox" id="savecc-wp-m" ng-model="worldPayHpp.saveCreditCard" ng-click="saveCCHpp()"/>
                            <label for="savecc-wp-m"><t>Remember my card for future payments</t></label>
                        </div>
                    </div>

                    <div ng-show="!showUpis && upis.length > 0" class="worldpay-accounts-action">
                        <a ng-click="showCreditCards()" class="button"><t>Return to saved cards</t></a>
                    </div>
                </div>
            </div>

            <div consents-list></div>

            <div ng-if="canContinue() || isPreviewMod()" ng-transclude></div>
        </div>
    </div>
</script>

<!-- worldpay-cc-token-form-component -->
<script type="text/ng-template" id="/widget/checkout/component/partials/worldpay-token-form-component.html">
    <div ng-show="isPaymentMethod(WORLDPAY_CC_TOKEN)">

        <div class="row">
            <div desktop class="cc_stored_cards" ng-show="!cc.payWithNew && cc.initiated">
                <div class="add-credit-card-wrapper">
                    <h4><t>Your credit and debit cards</t></h4>
                    <a href="javascript:void(0)" class="add-credit-card" ng-click="cc.payWithNew = true" ng-show="cc.stored.length > 0">
                        + <t>Add a card</t>
                    </a>
                </div>
                <table class="payment-method-card" ng-show="cc.stored.length > 0">
                    <tr class="payment-method-card-row" ng-repeat="method in cc.stored" ng-class="{'selected' : $parent.cc.selectedUpiId === method.id}">
                        <td class="payment-method-card-cell">
                            <input type="radio" name="stored_method" value="{{method.id}}" ng-model="$parent.cc.selectedUpiId"/>
                        </td>
                        <td class="payment-method-card-cell">
                            <div class="credit-card-{{method.identifier}}"></div>
                        </td>
                        <td class="payment-method-card-cell">
                            <div>{{method.type | tc:"checkout.platform"}} *{{method.ending_in}}</div>
                        </td>
                        <td class="payment-method-card-cell payment-method-card-cell-expiration">
                            <t>Expires in</t> {{method.expire_month}}/{{method.expire_year}}
                        </td>
                        <td class="payment-method-card-cell payment-method-card-cell-default-payment">
                            <div class="payment-method-card-default-payment" ng-show="method.id === cc.defaultPaymentMethodId"><t>Default</t></div>
                            <button ng-hide="method.id === cc.defaultPaymentMethodId"
                                    ng-click="setAsDefaultPaymentMethod(method)"
                                    type="button"
                                    class="set-as-default-button"
                            >
                                <t>Set as default</t>
                            </button>
                        </td>
                    </tr>
                </table>
            </div>

            <div mobile class="cc_stored_cards" ng-show="cc.initiated">
                <table class="payment-method-card" ng-show="cc.stored.length > 0">
                    <tr class="payment-method-card-row" ng-repeat="method in cc.stored"
                        ng-class="{'selected' : $parent.cc.selectedUpiId === method.id && $parent.cc.payWithNew !== true}">
                        <td class="payment-method-card-cell">
                            <input type="radio" name="stored_method" value="{{method.id}}"
                                   ng-model="$parent.cc.selectedUpiId" ng-click="$parent.cc.payWithNew = false"/>
                        </td>
                        <td class="payment-method-card-cell">
                            <div class="credit-card-{{method.identifier}}"></div>
                        </td>
                        <td class="payment-method-card-cell">
                            <div>*{{method.ending_in}}</div>
                        </td>
                        <td class="payment-method-card-cell payment-method-card-cell-default-payment">
                            <div class="payment-method-card-default-payment" ng-show="method.id === cc.defaultPaymentMethodId"><t>Default</t></div>
                            <button ng-hide="method.id === cc.defaultPaymentMethodId"
                                    ng-click="setAsDefaultPaymentMethod(method)"
                                    type="button"
                                    class="set-as-default-button"
                            >
                                <t>Set as default</t>
                            </button>
                        </td>
                    </tr>
                    <tr class="payment-method-card-row" ng-class="{'selected' : $parent.cc.payWithNew === true}">
                        <td class="payment-method-card-cell">
                            <input type="radio" name="stored_method" ng-model="$parent.cc.payWithNew" ng-value="true"/>
                        </td>
                        <td class="payment-method-card-cell" colspan="2">
                            <t>Add a new card</t>
                        </td>
                    </tr>
                </table>
            </div>

            <div class="cc_new_card" ng-show="cc.payWithNew && cc.initiated">
                <div desktop class="go-back-to-cards-wrapper">
                    <a href="javascript:void(0)" class="go-back-to-cards" ng-click="cc.payWithNew = false" ng-show="cc.stored.length > 0">
                        <t>Return to saved cards</t>
                    </a>

                    <h4>
                        <t>Add a new credit or debit card</t>
                    </h4>

                </div>
                <form class="new-card-form" name="ccForm" role="form">
                    <table class="table-form-inline" cellpadding="0" cellspacing="0">
                        <tr>
                            <td class="field-card-number">
                                <div class="field-wrapper">
                                    <label class="icon card"></label>

                                    <div class="input">
                                        <input type="text" name="num" class="flat" placeholder="{{'Card number' | t}}"
                                               ng-model="credit_card.num" required/>
                                    </div>
                                </div>
                            </td>
                            <td class="field-card-expiry-month">
                                <div class="field-wrapper">
                                    <label class="icon expiry"></label>

                                    <div class="input whitespace-nowrap">
                                        <input class="flat inline input-date" type="text" name="expire_month" placeholder="{{'MM' | t}}" maxlength="2"
                                               ng-model="credit_card.expire_month" required/>

                                        <div class="date-slash"> /</div>
                                        <input class="flat inline input-date" type="text" name="expire_year" placeholder="{{'YY' | t}}" maxlength="2"
                                               ng-model="credit_card.expire_year" required/>
                                    </div>
                                </div>
                            </td>
                            <td class="field-card-cvv">
                                <div class="field-wrapper">
                                    <label class="icon password"></label>

                                    <div class="input">
                                        <input class="flat" type="text" name="cvv" placeholder="{{'CVV' | t}}" maxlength="5" ng-model="credit_card.cvv"
                                               required/>
                                    </div>
                                </div>
                            </td>
                            <td class="field-card-postal-code">
                                <div class="field-wrapper">
                                    <label class="icon cardholder"></label>

                                    <div class="input ml10">
                                        <input class="flat input-cardholder" type="text" name="cardholder" placeholder="{{'Cardholder' | t}}" ng-model="credit_card.cardholder"
                                               required/>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </table>
                    <div class="payment-system-condition">

                        <span ng-if="!isSubscription()">
                            <div class="custom-checkbox">
                                <input type="checkbox" name="store_in_vault" ng-model="credit_card.store_in_vault" id="remember-my-card" />
                                <label for="remember-my-card"><t>Remember my card for future payments</t></label>
                            </div>
                        </span>
                        <span ng-if="isSubscription()">
                            <input type="hidden" name="store_in_vault" ng-model="credit_card.store_in_vault" ng-value="true"/>
                        </span>
                        <div class="custom-checkbox" ng-if="credit_card.store_in_vault">
                            <input type="checkbox" name="defaultPaymentMethodId" ng-model="cc.defaultPaymentMethodId" id="default-payment-method-worldpay-cc-token" />
                            <label for="default-payment-method-worldpay-cc-token"><t>Apply this payment method to all active subscriptions</t></label>
                        </div>
                    </div>
                </form>
            </div>

            <div consents-list></div>

            <div ng-transclude></div>
        </div>

    </div>
</script>

<!-- spreedly-form-component -->
<script type="text/ng-template" id="/widget/checkout/component/partials/spreedly-form-component.html">

    <div ng-show="isSupportedSpreedlyCcMethod()">
        <div class="row">

            <div desktop class="cc_stored_cards" ng-show="!cc.payWithNew && initiated">
                <div class="add-credit-card-wrapper">
                    <h4>
                        <t>Your credit and debit cards</t>
                    </h4>
                    <a href="javascript:void(0)" class="add-credit-card" ng-click="cc.payWithNew = true" ng-show="cc.stored.length > 0">
                        +
                        <t>Add a card</t>
                    </a>
                </div>
                <table class="payment-method-card" ng-show="cc.stored.length > 0">
                    <tr class="payment-method-card-row" ng-repeat="method in cc.stored"
                        ng-class="{'selected' : $parent.cc.selectedUpiId === method.id}">
                        <td class="payment-method-card-cell">
                            <input type="radio" name="stored_method" value="{{method.id}}" ng-model="$parent.cc.selectedUpiId"/>
                        </td>
                        <td class="payment-method-card-cell">
                            <div class="credit-card-{{method.identifier}}"></div>
                        </td>
                        <td class="payment-method-card-cell">
                            <div>{{method.type | tc:"checkout.platform"}} *{{method.ending_in}}</div>
                        </td>
                        <td class="payment-method-card-cell payment-method-card-cell-expiration">
                            <t>Expires in</t>
                            {{method.expire_month}}/{{method.expire_year}}
                        </td>
                        <td class="payment-method-card-cell payment-method-card-cell-default-payment">
                            <div class="payment-method-card-default-payment" ng-show="method.id === cc.defaultPaymentMethodId"><t>Default</t></div>
                            <button ng-hide="method.id === cc.defaultPaymentMethodId"
                                    ng-click="setAsDefaultPaymentMethod(method)"
                                    type="button"
                                    class="set-as-default-button"
                            >
                                <t>Set as default</t>
                            </button>
                        </td>
                    </tr>
                </table>
            </div>

            <div mobile class="cc_stored_cards" ng-show="initiated">
                <table class="payment-method-card" ng-show="cc.stored.length > 0">
                    <tr class="payment-method-card-row" ng-repeat="method in cc.stored"
                        ng-class="{'selected' : $parent.cc.selectedUpiId === method.id && $parent.cc.payWithNew !== true}">
                        <td class="payment-method-card-cell">
                            <input type="radio" name="stored_method" value="{{method.id}}"
                                   ng-model="$parent.cc.selectedUpiId" ng-click="$parent.cc.payWithNew = false"/>
                        </td>
                        <td class="payment-method-card-cell">
                            <div class="credit-card-{{method.identifier}}"></div>
                        </td>
                        <td class="payment-method-card-cell">
                            <div>*{{method.ending_in}}</div>
                        </td>
                        <td class="payment-method-card-cell payment-method-card-cell-default-payment">
                            <div class="payment-method-card-default-payment" ng-show="method.id === cc.defaultPaymentMethodId"><t>Default</t></div>
                            <button ng-hide="method.id === cc.defaultPaymentMethodId"
                                    ng-click="setAsDefaultPaymentMethod(method)"
                                    type="button"
                                    class="set-as-default-button"
                            >
                                <t>Set as default</t>
                            </button>
                        </td>
                    </tr>
                    <tr class="payment-method-card-row" ng-class="{'selected' : $parent.cc.payWithNew === true}">
                        <td class="payment-method-card-cell">
                            <input type="radio" name="stored_method" ng-model="$parent.cc.payWithNew" ng-value="true"/>
                        </td>
                        <td class="payment-method-card-cell" colspan="2">
                            <t>Add a new card</t>
                        </td>
                    </tr>
                </table>
            </div>

            <div class="cc_new_card" ng-show="cc.payWithNew && initiated">
                <div desktop class="go-back-to-cards-wrapper">
                    <a href="javascript:void(0)" class="go-back-to-cards" ng-click="cc.payWithNew = false" ng-show="cc.stored.length > 0">
                        <t>Return to saved cards</t>
                    </a>

                    <h4>
                        <t>Add a new credit or debit card</t>
                    </h4>

                </div>
                <form class="new-card-form" name="ccForm" role="form" id="spreedly-new-cc-form" method="POST" target="spr_post_frame">
                    <table class="table-form-inline" cellpadding="0" cellspacing="0">
                        <tr>
                            <td class="field-card-postal-code">
                                <div class="field-wrapper">
                                    <label class="icon cardholder"></label>

                                    <div class="input">
                                        <input class="flat input-cardholder" type="text" name="cardholder" placeholder="{{'Cardholder' | t}}" ng-model="credit_card.cardholder"/>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </table>
                    <table class="table-form-inline" cellpadding="0" cellspacing="0">
                        <tr>
                            <td class="field-card-number">
                                <div class="field-wrapper">
                                    <label class="icon card"></label>

                                    <div class="input">
                                        <div id="spreedly-protected-cc-num-placeholder" style="height: 40px;"></div>
                                    </div>
                                </div>
                            </td>
                            <td class="field-card-expiry-month">
                                <div class="field-wrapper">
                                    <label class="icon expiry"></label>

                                    <div class="input whitespace-nowrap">
                                        <input class="flat inline input-date" type="text" name="expire_month" placeholder="{{'MM' | t}}"
                                               maxlength="2"
                                               ng-model="credit_card.expire_month" required/>

                                        <div class="date-slash"> /</div>
                                        <input class="flat inline input-date" type="text" name="expire_year" placeholder="{{'YY' | t}}"
                                               maxlength="2"
                                               ng-model="credit_card.expire_year" required/>
                                    </div>
                                </div>
                            </td>
                            <td class="field-card-cvv">
                                <div class="field-wrapper">
                                    <label class="icon password"></label>

                                    <div class="input">
                                        <div id="spreedly-protected-ccv-placeholder" style="height: 40px;"></div>
                                    </div>
                                </div>
                            </td>
                            <td ng-if="!isPaymentMethod(SPREEDLY_PAYU_LATAM)" class="field-card-postal-code">
                                <div class="field-wrapper">
                                    <div class="input ml10">
                                        <input class="flat spreedly-input-template" type="text" name="postal_code" placeholder="{{'Postal code' | t}}"
                                               ng-model="input.zipCode"
                                               required/>
                                        <input type="text" class="flat spreedly-input-color-template hidden">
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </table>

                    <div ng-if="isPaymentMethod(SPREEDLY_PAYU_LATAM)">
                        <!-- additional spreedly fields -->
                        <table class="table-form-inline" cellpadding="0" cellspacing="0">
                            <tr>
                                <td class="field-card field-card--half">
                                    <div class="field-wrapper">
                                        <label class="icon email"></label>

                                        <input class="flat spreedly-input-template"
                                               ng-disabled="isEmailDisabled"
                                               required
                                               type="text"
                                               name="email"
                                               maxlength="255"
                                               placeholder="{{'Email' | t}}"
                                               ng-model="credit_card.email"
                                        />
                                    </div>
                                </td>

                                <td class="field-card field-card--half">
                                    <div class="field-wrapper">
                                        <label class="icon phone"></label>

                                        <input class="flat spreedly-input-template" required type="text" name="phoneNumber" maxlength="20" placeholder="{{'Phone' | t}}" ng-model="credit_card.phone_number"/>
                                    </div>
                                </td>
                            </tr>
                        </table>

                        <table class="table-form-inline" cellpadding="0" cellspacing="0">
                            <tr>
                                <td class="field-card field-card--half">
                                    <div class="field-wrapper">
                                        <label class="icon passport"></label>

                                        <div class="custom-select">
                                            <select class="custom-select__select"
                                                    name="dniType"
                                                    required
                                                    ng-model="credit_card.dniType"
                                                    ng-options="item.name for item in dniTypes track by item.code">
                                                <option disabled value="">{{ 'Identification type' | t}}</option>
                                            </select>
                                        </div>
                                    </div>
                                </td>

                                <td class="field-card field-card--half">
                                    <div class="field-wrapper">
                                        <label class="icon number"></label>

                                        <input class="flat spreedly-input-template" required maxlength="20" type="text" name="dniNumber" placeholder="{{'Identification number' | t}}" ng-model="credit_card.dniNumber" autocomplete="off"/>
                                    </div>
                                </td>
                            </tr>
                        </table>

                        <table class="table-form-inline" cellpadding="0" cellspacing="0">
                            <tr>
                                <td class="field-card field-card--half">
                                    <div class="field-wrapper">
                                        <label class="icon country"></label>

                                        <div class="custom-select">
                                            <select class="custom-select__select"
                                                    id="country"
                                                    required
                                                    name="country"
                                                    ng-model="credit_card.country"
                                                    ng-options="country.countryName for country in countryList track by country.countryCode">
                                                <option disabled value="">{{ 'Country' | t }}</option>
                                            </select>
                                        </div>
                                    </div>
                                </td>

                                <td class="field-card field-card--half" ng-if="initiated">
                                    <div tp-datepicker options="birthDateCalendarOptions" from-date="credit_card.birthDate" to-date="credit_card.birthDate">
                                        <div class="field-wrapper widget-calendar">
                                            <label class="icon bday"></label>
                                            <input required type="date" class="flat spreedly-input-template" name="birthDate" readonly="true" onfocus="this.blur()" placeholder="{{'Birth date' | t}}" ng-model="credit_card.birthDate" date-format="MMM dd, yyyy" autocomplete="off"/>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </table>

                        <table class="table-form-inline" cellpadding="0" cellspacing="0">
                            <tr>
                                <td class="field-card field-card--half">
                                    <div class="field-wrapper">
                                        <label class="icon map-pin"></label>

                                        <input class="flat spreedly-input-template" required type="text" name="state" maxlength="40"  placeholder="{{'State' | t}}" ng-model="credit_card.state"/>
                                    </div>
                                </td>

                                <td class="field-card field-card--half">
                                    <div class="field-wrapper">
                                        <label class="icon city"></label>

                                        <input class="flat spreedly-input-template" required type="text" name="city" maxlength="50" placeholder="{{'City' | t}}" ng-model="credit_card.city"/>
                                    </div>
                                </td>
                            </tr>
                        </table>

                        <table class="table-form-inline" cellpadding="0" cellspacing="0">
                            <tr>
                                <td class="field-card">
                                    <div class="field-wrapper">
                                        <label class="left-margin"></label>

                                        <input class="flat spreedly-input-template"  required type="text" name="address1" maxlength="100" placeholder="{{'Street 1' | t}}" ng-model="credit_card.address1"/>
                                    </div>
                                </td>
                            </tr>
                        </table>

                        <table class="table-form-inline" cellpadding="0" cellspacing="0">
                            <tr>
                                <td class="field-card">
                                    <div class="field-wrapper">
                                        <label class="left-margin"></label>

                                        <input class="flat spreedly-input-template" type="text" name="address2" maxlength="100" placeholder="{{'Street 2' | t}}" ng-model="credit_card.address2"/>
                                    </div>
                                </td>
                            </tr>
                        </table>
                        <input type="hidden" name="userAgent" id="userAgent" maxlength="1024"/>
                    </div>

                    <div class="payment-system-condition">

                        <span ng-if="!isSubscription()">
                            <div class="custom-checkbox">
                                <input type="checkbox" name="store_in_vault" ng-model="cc.store_in_vault" id="remember-my-card-spreedly"/>
                                <label for="remember-my-card-spreedly"><t>Remember my card for future payments</t></label>
                            </div>
                        </span>
                        <span ng-if="isSubscription()">
                            <input type="hidden" name="store_in_vault" ng-model="cc.store_in_vault" ng-value="true"/>
                        </span>
                        <div class="custom-checkbox" ng-if="cc.store_in_vault">
                            <input type="checkbox" name="defaultPaymentMethodId" ng-model="cc.defaultPaymentMethodId" id="default-payment-method-spreedly" />
                            <label for="default-payment-method-spreedly"><t>Apply this payment method to all active subscriptions</t></label>
                        </div>
                    </div>
                    <input type="hidden" name="payment_method_token" id="payment_method_token" />
                    <input type="hidden" name="cc_masked_number" id="cc_masked_number"/>
                    <input type="hidden" name="cc_type_name" id="cc_type_name"/>
                </form>
            </div>
            <div ng-transclude></div>
        </div>
    </div>
</script>

<!-- edgil-payway-provider-form-component -->
<script type="text/ng-template" id="/widget/checkout/component/partials/edgil-payway-provider-form-component.html">
    <div class="edgil-payway-wrapper new-card-form" ng-show="isPaymentMethod(EDGIL_PAYWAY)">
        <div class="row">
            <div desktop class="cc_stored_cards" ng-show="!cc.payWithNew && cc.initiated">
                <div class="add-credit-card-wrapper">
                    <h4>
                        <t>Your credit and debit cards</t>
                    </h4>
                    <a href="javascript:void(0)" class="add-credit-card" ng-click="cc.payWithNew = true" ng-show="cc.stored.length > 0">
                        +
                        <t>Add a card</t>
                    </a>
                </div>
                <table class="payment-method-card" ng-show="cc.stored.length > 0">
                    <tr class="payment-method-card-row" ng-repeat="method in cc.stored"
                        ng-class="{'selected' : $parent.cc.selectedUpiId === method.id}">
                        <td class="payment-method-card-cell">
                            <input type="radio" name="stored_method" value="{{method.id}}" ng-model="$parent.cc.selectedUpiId"/>
                        </td>
                        <td class="payment-method-card-cell">
                            <div class="credit-card-{{method.identifier}}"></div>
                        </td>
                        <td class="payment-method-card-cell">
                            <div>{{method.type | tc:"checkout.platform"}} *{{method.ending_in}}</div>
                        </td>
                        <td class="payment-method-card-cell payment-method-card-cell-expiration">
                            <t>Expires in</t>
                            {{method.expire_month}}/{{method.expire_year}}
                        </td>
                        <td class="payment-method-card-cell payment-method-card-cell-default-payment">
                            <div class="payment-method-card-default-payment" ng-show="method.id === cc.defaultPaymentMethodId"><t>Default</t></div>
                            <button ng-hide="method.id === cc.defaultPaymentMethodId"
                                    ng-click="setAsDefaultPaymentMethod(method)"
                                    type="button"
                                    class="set-as-default-button"
                            >
                                <t>Set as default</t>
                            </button>
                        </td>
                    </tr>
                </table>
            </div>

            <div mobile class="cc_stored_cards" ng-show="cc.initiated">
                <table class="payment-method-card" ng-show="cc.stored.length > 0">
                    <tr class="payment-method-card-row" ng-repeat="method in cc.stored"
                        ng-class="{'selected' : $parent.cc.selectedUpiId === method.id && $parent.cc.payWithNew !== true}">
                        <td class="payment-method-card-cell">
                            <input type="radio" name="stored_method" value="{{method.id}}" ng-model="$parent.cc.selectedUpiId"
                                   ng-click="$parent.cc.payWithNew = false"/>
                        </td>
                        <td class="payment-method-card-cell">
                            <div class="credit-card-{{method.identifier}}"></div>
                        </td>
                        <td class="payment-method-card-cell">
                            <div>*{{method.ending_in}}</div>
                        </td>
                        <td class="payment-method-card-cell payment-method-card-cell-default-payment">
                            <div class="payment-method-card-default-payment" ng-show="method.id === cc.defaultPaymentMethodId"><t>Default</t></div>
                            <button ng-hide="method.id === cc.defaultPaymentMethodId"
                                    ng-click="setAsDefaultPaymentMethod(method)"
                                    type="button"
                                    class="set-as-default-button"
                            >
                                <t>Set as default</t>
                            </button>
                        </td>
                    </tr>
                    <tr class="payment-method-card-row" ng-class="{'selected' : $parent.cc.payWithNew === true}">
                        <td class="payment-method-card-cell">
                            <input type="radio" name="stored_method" ng-model="$parent.cc.payWithNew" ng-value="true"/>
                        </td>
                        <td class="payment-method-card-cell" colspan="2">
                            <t>Add a new card</t>
                        </td>
                    </tr>
                </table>
            </div>

            <div class="cc_new_card" ng-show="cc.payWithNew && cc.initiated">
                <div desktop class="go-back-to-cards-wrapper">
                    <a href="javascript:void(0)" class="go-back-to-cards" ng-click="cc.payWithNew = false" ng-show="cc.stored.length > 0">
                        <t>Return to saved cards</t>
                    </a>
                    <h4>
                        <t>Add a new credit or debit card</t>
                    </h4>
                </div>
                <form class="new-card-form" name="ccForm" role="form">
                    <table class="table-form-inline" cellpadding="0" cellspacing="0">
                        <tr>
                            <td class="field-card-number">
                                <div class="field-wrapper">
                                    <label class="icon card"></label>
                                    <div class="input">
                                        <input type="text" name="num" class="flat" placeholder="{{'Card number' | t}}"
                                               ng-model="credit_card.num" required/>
                                    </div>
                                </div>
                            </td>
                            <td class="field-card-expiry-month">
                                <div class="field-wrapper">
                                    <label class="icon expiry"></label>
                                    <div class="input whitespace-nowrap">
                                        <input class="flat inline input-date" type="text" name="expire_month" placeholder="{{'MM' | t}}"
                                               maxlength="2" ng-model="credit_card.expire_month" required/>
                                        <div class="date-slash">/</div>
                                        <input class="flat inline input-date" type="text" name="expire_year" placeholder="{{'YY' | t}}"
                                               maxlength="2" ng-model="credit_card.expire_year" required/>
                                    </div>
                                </div>
                            </td>
                            <td class="field-card-cvv">
                                <div class="field-wrapper">
                                    <label class="icon password"></label>

                                    <div class="input">
                                        <input class="flat" type="text" name="cvv" placeholder="{{'CVV' | t}}" maxlength="5" ng-model="credit_card.cvv"
                                               required/>
                                    </div>
                                </div>
                            </td>
                            <td class="field-card-postal-code">
                                <div class="field-wrapper">
                                    <div class="input ml10">
                                        <input class="flat" type="text" name="postal_code" placeholder="{{'Postal code' | t}}"
                                               ng-model="input.zipCode" required/>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </table>
                    <div class="payment-system-condition">
                        <span ng-if="!isSubscription()">
                            <div class="custom-checkbox">
                                <input type="checkbox" name="store_in_vault" ng-model="credit_card.store_in_vault" id="rermber-my-card1"/>
                                <label for="rermber-my-card1">
                                    <t>Remember my card for future payments</t>
                                </label>
                            </div>
                        </span>
                        <span ng-if="isSubscription()">
                            <input type="hidden" name="store_in_vault" ng-model="credit_card.store_in_vault"/>
                        </span>
                        <div class="custom-checkbox" ng-if="credit_card.store_in_vault">
                            <input type="checkbox" name="defaultPaymentMethodId" ng-model="cc.defaultPaymentMethodId" id="default-payment-method-edgil-payway" />
                            <label for="default-payment-method-edgil-payway"><t>Apply this payment method to all active subscriptions</t></label>
                        </div>
                    </div>
                </form>
            </div>
            <div ng-transclude></div>
        </div>
    </div>
</script>

<!-- paypal-express-checkout-provider-form-component -->
<script type="text/ng-template" id="/widget/checkout/component/partials/paypal-express-checkout-provider-form-component.html">
    <div ng-show="isPaymentMethod(PAYPAL_EXPRESS_CHECKOUT)">
        <div class="paypal-payment-form row">
            <div class="errors"></div>
            <div class="paypal-express-checkout-payment-form">
                <div ng-if="paypalFromRedirectLoading">
                    <t>Loading your PayPal account, please wait</t>...
                </div>
                <div ng-hide="paypalFromRedirectLoading">
                    <div ng-if="stored.length">
                        <span class="paypal-express-checkout-title"><t>Your PayPal accounts</t></span>
                        <table class="payment-method-paypal-express-checkout">
                            <tr class="payment-method-paypal-express-checkout-row existing-upi" ng-repeat="upi in stored" ng-class="{'selected' : $parent.data.selectedUpi.id === upi.id}">
                                <td class="payment-method-paypal-express-checkout-cell">
                                    <input type="radio" name="stored_method" ng-model="$parent.data.selectedUpi" ng-value="upi" radio-track-by="id" />
                                </td>
                                <td class="payment-method-paypal-express-checkout-cell" ng-if="!upi.isNew">
                                    {{upi.number}}
                                </td>
                                <td class="payment-method-paypal-express-checkout-cell" ng-if="upi.isNew">
                                    <div class="paypal-express-checkout-loggedin">
                                        <span class="paypal-express-checkout-name"><t>PayPal</t></span>
                                        <span class="paypal-express-checkout-email">{{upi.number}}</span>
                                        <button ng-click="cancelNewAccount()" class="paypal-express-checkout-cancel-button"><t>Cancel</t></button>
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div ng-if="!data.newUpi">
                        <div class="pm-login-button paypal-login-button" ng-click="addNewAccount()"></div>
                        <div class="add-new-account-msg"><t>Add new PayPal account</t></div>
                    </div>
                </div>
            </div>

            <div consents-list></div>

            <div ng-if="canContinue()" ng-transclude></div>
        </div>
    </div>
</script>

<!-- eigen-provider-form-component -->
<script type="text/ng-template" id="/widget/checkout/component/partials/eigen-provider-form-component.html">
    <div class="eigen-wrapper new-card-form" ng-show="isPaymentMethod(EIGEN)">
        <div class="row">
            <div desktop class="cc_stored_cards" ng-show="!cc.payWithNew && cc.initiated">
                <div class="add-credit-card-wrapper">
                    <h4>
                        <t>Your credit and debit cards</t>
                    </h4>
                    <a href="javascript:void(0)" class="add-credit-card" ng-click="addNewCardForm()" ng-show="cc.stored.length > 0">
                        +
                        <t>Add a card</t>
                    </a>
                </div>
                <table class="payment-method-card" ng-show="cc.stored.length > 0">
                    <tr class="payment-method-card-row" ng-repeat="method in cc.stored"
                        ng-class="{'selected' : $parent.cc.selectedUpiId === method.id}">
                        <td class="payment-method-card-cell">
                            <input type="radio" name="stored_method" value="{{method.id}}" ng-model="$parent.cc.selectedUpiId"/>
                        </td>
                        <td class="payment-method-card-cell">
                            <div class="credit-card-{{method.identifier}}"></div>
                        </td>
                        <td class="payment-method-card-cell">
                            <div>{{method.type | tc:"checkout.platform"}} *{{method.ending_in}}</div>
                        </td>
                        <td class="payment-method-card-cell payment-method-card-cell-expiration">
                            <t>Expires in</t>
                            {{method.expire_month}}/{{method.expire_year}}
                        </td>
                        <td class="payment-method-card-cell payment-method-card-cell-default-payment">
                            <div class="payment-method-card-default-payment" ng-show="method.id === cc.defaultPaymentMethodId"><t>Default</t></div>
                            <button ng-hide="method.id === cc.defaultPaymentMethodId"
                                    ng-click="setAsDefaultPaymentMethod(method)"
                                    type="button"
                                    class="set-as-default-button"
                            >
                                <t>Set as default</t>
                            </button>
                        </td>
                    </tr>
                </table>
            </div>

            <div mobile class="cc_stored_cards" ng-show="cc.initiated">
                <table class="payment-method-card" ng-show="cc.stored.length > 0">
                    <tr class="payment-method-card-row" ng-repeat="method in cc.stored"
                        ng-class="{'selected' : $parent.cc.selectedUpiId === method.id && $parent.cc.payWithNew !== true}">
                        <td class="payment-method-card-cell">
                            <input type="radio" name="stored_method" value="{{method.id}}" ng-model="$parent.cc.selectedUpiId"
                                   ng-click="$parent.cc.payWithNew = false"/>
                        </td>
                        <td class="payment-method-card-cell">
                            <div class="credit-card-{{method.identifier}}"></div>
                        </td>
                        <td class="payment-method-card-cell">
                            <div>*{{method.ending_in}}</div>
                        </td>
                        <td class="payment-method-card-cell payment-method-card-cell-default-payment">
                            <div class="payment-method-card-default-payment" ng-show="method.id === cc.defaultPaymentMethodId"><t>Default</t></div>
                            <button ng-hide="method.id === cc.defaultPaymentMethodId"
                                    ng-click="setAsDefaultPaymentMethod(method)"
                                    type="button"
                                    class="set-as-default-button"
                            >
                                <t>Set as default</t>
                            </button>
                        </td>
                    </tr>
                    <tr class="payment-method-card-row" ng-class="{'selected' : $parent.cc.payWithNew === true}">
                        <td class="payment-method-card-cell">
                            <input type="radio" name="stored_method" ng-model="$parent.cc.payWithNew" ng-value="true"/>
                        </td>
                        <td class="payment-method-card-cell" colspan="2">
                            <t>Add a new card</t>
                        </td>
                    </tr>
                </table>
            </div>

            <div class="cc_new_card" ng-show="cc.payWithNew && cc.initiated">
                <div desktop class="go-back-to-cards-wrapper">
                    <a href="javascript:void(0)" class="go-back-to-cards" ng-click="backToStoredCards()" ng-show="cc.stored.length > 0">
                        <t>Return to saved cards</t>
                    </a>
                    <h4>
                        <t>Add a new credit or debit card</t>
                    </h4>
                </div>
                <div ng-show="isEigenV3() === true">
                    <div id="eigen-iframe-container" class="eigen-iframe-container"></div>
                </div>
                <div ng-show="isEigenV3() === false">
                    <form class="new-card-form" name="ccForm" role="form">
                        <table class="table-form-inline" cellpadding="0" cellspacing="0">
                            <tr>
                                <td class="field-card-postal-code">
                                    <div class="field-wrapper">
                                        <label class="icon cardholder"></label>

                                        <div class="input">
                                            <input class="flat input-cardholder" type="text" name="cardholder" placeholder="{{'Cardholder' | t}}" ng-model="credit_card.cardholder"/>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </table>
                        <table class="table-form-inline" cellpadding="0" cellspacing="0">
                            <tr>
                                <td class="field-card-number">
                                    <div class="field-wrapper">
                                        <label class="icon card"></label>
                                        <div class="input">
                                            <input type="text" name="num" class="flat" placeholder="{{'Card number' | t}}"
                                                   ng-model="credit_card.num" required/>
                                        </div>
                                    </div>
                                </td>
                                <td class="field-card-expiry-month">
                                    <div class="field-wrapper">
                                        <label class="icon expiry"></label>
                                        <div class="input whitespace-nowrap">
                                            <input class="flat inline input-date" type="text" name="expire_month" placeholder="{{'MM' | t}}"
                                                   maxlength="2" ng-model="credit_card.expire_month" required/>
                                            <div class="date-slash">/</div>
                                            <input class="flat inline input-date" type="text" name="expire_year" placeholder="{{'YY' | t}}"
                                                   maxlength="2" ng-model="credit_card.expire_year" required/>
                                        </div>
                                    </div>
                                </td>
                                <td class="field-card-cvv">
                                    <div class="field-wrapper">
                                        <label class="icon password"></label>

                                        <div class="input">
                                            <input class="flat" type="text" name="cvv" placeholder="{{'CVV' | t}}" maxlength="5" ng-model="credit_card.cvv"
                                                   required/>
                                        </div>
                                    </div>
                                </td>
                                <td class="field-card-postal-code">
                                    <div class="field-wrapper">
                                        <div class="input ml10">
                                          <input class="flat"
                                                 type="text"
                                                 name="postal_code"
                                                 placeholder="{{'Postal code' | t}}"
                                                 ng-model="input.zipCode"
                                                 ng-change="onZipCodeChange()"
                                                 required/>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </table>
                        <div class="payment-system-condition">
                            <span>
                                <input type="hidden" name="store_in_vault" ng-model="credit_card.store_in_vault" ng-value="true"/>
                            </span>
                            <div class="custom-checkbox" ng-if="credit_card.store_in_vault">
                                <input type="checkbox" name="defaultPaymentMethodId" ng-model="cc.defaultPaymentMethodId" id="default-payment-method-eigen" />
                                <label for="default-payment-method-eigen"><t>Apply this payment method to all active subscriptions</t></label>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <div consents-list></div>
            <div ng-transclude ng-if="canContinue()"></div>
        </div>
    </div>
</script>

<script type="text/ng-template" id="/widget/checkout/component/partials/openpay-cash-form-component.html">
    <div ng-if="isPaymentMethod(OPENPAY_CASH)">
        <div class="openpay-cash-payment-form row">
            <h4><t>Please remember, subscriptions paid for in cash are not eligible for refunds</t></h4>
            <h5 class="openpay-cash-payment-subtitle"><t>Instructions</t></h5>
            <ol class="openpay-cash-payment-instructions-list">
                <li><t>Print the barcode</t></li>
                <li><t>Bring it to a participating store (<a href="https://www.openpay.mx/tiendas-de-conveniencia.html" target="_blank">click here</a> for a list of participating stores)</t></li>
                <li><t>Present the barcode at the checkout counter</t></li>
                <li><t>Pay for your subscription in cash</t></li>
                <li><t>You will receive an email confirming that you now have access to {{selectedTerm.resource.name}}. This may take up to 24 hours</t></li>
            </ol>
            <p class="openpay-cash-payment-instructions-paragraph"><t>You may check the status of your access by going to 'My Account' and clicking on the 'Bills' tab.</t></p>
            <div class="openpay-cash-payment-barcode-example">
                <span class="openpay-cash-payment-barcode-example-text"><t>Barcode example</t></span>
            </div>
        </div>
        <div ng-transclude></div>
    </div>
</script>
<script type="text/ng-template" id="/widget/checkout/component/partials/openpay-bill-controls.html">
    <div class="openpay-cash-receipt-links">
        <a class="button big" id="openpay-download-bill" ng-click="downloadBill(billUrl)" href="javascript:void(0);"><t>Print now</t></a>
        <a class="button big" id="openpay-resend-bill" ng-click="resendBill(billId)" href="javascript:void(0);"><t>Resend via email</t></a>
    </div>
    <div class="openpay-cash-receipt-resend-message" ng-if="isBillResent">
        <t>Your document will be sent in a few minutes. Check your mail soon.</t>
    </div>
</script>

<!-- payment-form-component -->
<script type="text/ng-template" id="/widget/checkout/component/partials/payment-form-component.html">

    <div ng-show="!isSelectedTermLocked()">
        <div ng-show="isPaymentMethodRequired()">
            <div billing-country></div>

            <div ng-show="canSelectPaymentMethod()">
              	<!--
                <div desktop>
                    <div payment-method-selector-component></div>
                </div>
                <div mobile>
                    <div payment-method-selector-component ng-hide="isPaymentMethodSelected()"></div>
                </div>
				-->
              	<div payment-method-selector-component></div>
            </div>

            <div ng-show="isPaymentMethodSelected()">

              	<!--
                <div mobile>
                    <div class="back-to-payment-methods"
                         ng-show="isPaymentMethodSelected() && canSelectPaymentMethod()"
                         ng-click="resetPaymentSelection()">
                        <h4>
                            <t>Select a payment method</t>
                        </h4>
                    </div>
                </div>

              	<div class="select-payment-options"><t>Podaci o kartici:</t></div>
				-->

                <new-flow-components-c-h ng-if="hasNewFlow()"
                                         payment-source="flags.selectedPaymentMethod.id"></new-flow-components-c-h>

                <div class="new-card-form" ng-show="!hasNewFlow()">
                    <div ng-if="isPaymentMethod(CREDIT_CARD)">

                      	<div class="select-payment-options"><t>Podaci o kartici:</t></div>

                      	<span class="piano__payment_hint">Sigurnost ove transakcije garantira <a href="https://www.braintreepayments.com/hr/features/data-security" target="_blank">Braintree</a> servis za plaćanje</span>

                        <div cc-form-component>

                            <payment-method-captcha ng-if="isCaptchaV3Enabled"
                                                    is-shown="isCaptchaV2Required"
                                                    class="payment-method-captcha"
                            >
                            </payment-method-captcha>

                            <div class="footer-modal">
                                <div class="auto-renew-purchase" ng-show="isSelectedTermAutoRenewChoiceAvailable()">
                                    <input class="auto-renew-purchase-checkbox" type="checkbox"
                                           ng-model="input.autoRenew" id="auto_renew"/>
                                    <label class="auto-renew-purchase-label" for="auto_renew">
                                        <t>Automatically renew my subscription when the time comes.</t>
                                    </label>
                                </div>

                              	<div consents-list></div>

                              	<div error-list></div>

                                <div ng-show="isConfirmStepEnabled()" class="complete-purchase-button"
                                    goto-confirmation-button
                                    title="{{'Complete Purchase' | t}}"
                                    is-disabled="isCaptchaV2Unresolved"
                                >
                                </div>

                                <div ng-show="!isConfirmStepEnabled()" class="complete-purchase-button"
                                    complete-purchase-button
                                    title="{{'Complete Purchase' | t}}"
                                    is-disabled="isCaptchaV2Unresolved"
                                >
                                </div>
                            </div>

                        </div>
                    </div>
                    <div ng-if="isPaymentMethod(PAYPAL)">
                        <div paypal-form-component>

                            <div class="footer-modal">
                                <div class="auto-renew-purchase" ng-show="isSelectedTermAutoRenewChoiceAvailable()">
                                    <input class="auto-renew-purchase-checkbox" type="checkbox"
                                           ng-model="input.autoRenew" id="auto_renew"/>
                                    <label class="auto-renew-purchase-label" for="auto_renew">
                                        <t>Automatically renew my subscription when the time comes.</t>
                                    </label>
                                </div>

                              	<div consents-list></div>

                                <div ng-show="isConfirmStepEnabled()" class="complete-purchase-button"
                                     goto-confirmation-button
                                     title="{{'Continue to PayPal' | t}}"></div>
                                <div ng-show="!isConfirmStepEnabled()" class="complete-purchase-button"
                                     complete-purchase-button
                                     title="{{'Continue to PayPal' | t}}"></div>
                            </div>
                        </div>
                    </div>

                    <div ng-if="isPaymentMethod(DWOLLA)">
                        <div dwolla-form-component>

                            <div consents-list></div>

                            <div class="footer-modal">
                                <div class="auto-renew-purchase" ng-show="isSelectedTermAutoRenewChoiceAvailable()">
                                    <input class="auto-renew-purchase-checkbox" type="checkbox"
                                           ng-model="input.autoRenew" id="auto_renew"/>
                                    <label class="auto-renew-purchase-label" for="auto_renew">
                                        <t>Automatically renew my subscription when the time comes.</t>
                                    </label>
                                </div>
                                <div ng-show="isConfirmStepEnabled()" class="complete-purchase-button"
                                     goto-confirmation-button
                                     title="{{'Complete Purchase' | t}}"></div>
                                <div ng-show="!isConfirmStepEnabled()" class="complete-purchase-button"
                                     complete-purchase-button
                                     title="{{'Complete Purchase' | t}}"></div>
                            </div>
                        </div>
                    </div>
                    <div ng-if="isPaymentMethod(AMAZON)">
                        <div amazon-form-component>

                            <div consents-list></div>

                            <div class="footer-modal">
                                <div class="auto-renew-purchase" ng-show="isSelectedTermAutoRenewChoiceAvailable()">
                                    <input class="auto-renew-purchase-checkbox" type="checkbox"
                                           ng-model="input.autoRenew" id="auto_renew"/>
                                    <label class="auto-renew-purchase-label" for="auto_renew">
                                        <t>Automatically renew my subscription when the time comes.</t>
                                    </label>
                                </div>
                                <div ng-show="isConfirmStepEnabled()" class="complete-purchase-button"
                                     goto-confirmation-button
                                     title="{{'Complete Purchase' | t}}"></div>
                                <div ng-show="!isConfirmStepEnabled()" class="complete-purchase-button"
                                     complete-purchase-button
                                     title="{{'Complete Purchase' | t}}"></div>
                            </div>
                        </div>
                    </div>

                    <div ng-if="isPaymentMethod(COINBASE)">
                        <div coinbase-form-component>

                            <div consents-list></div>

                            <div class="footer-modal">
                                <div class="auto-renew-purchase" ng-show="isSelectedTermAutoRenewChoiceAvailable()">
                                    <input class="auto-renew-purchase-checkbox" type="checkbox"
                                           ng-model="input.autoRenew" id="auto_renew"/>
                                    <label class="auto-renew-purchase-label" for="auto_renew">
                                        <t>Automatically renew my subscription when the time comes.</t>
                                    </label>
                                </div>
                                <div ng-show="isConfirmStepEnabled()" class="complete-purchase-button"
                                     goto-confirmation-button
                                     title="{{'Continue to Bitcoin' | t}}"></div>
                                <div ng-show="!isConfirmStepEnabled()" class="complete-purchase-button"
                                     complete-purchase-button
                                     title="{{'Continue to Bitcoin' | t}}"></div>
                            </div>
                        </div>
                    </div>

                    <div ng-if="isPaymentMethodSelected() && isMockUsed()">
                        <div mock-form-component>

                            <div consents-list></div>

                            <div class="footer-modal">
                                <div class="auto-renew-purchase" ng-show="isSelectedTermAutoRenewChoiceAvailable()">
                                    <input class="auto-renew-purchase-checkbox" type="hidden" ng-model="input.autoRenew"
                                           id="auto_renew"/>
                                    <label class="auto-renew-purchase-label" for="auto_renew">
                                        <t>Automatically renew my subscription when the time comes.</t>
                                    </label>
                                </div>
                                <div ng-show="isConfirmStepEnabled()" class="complete-purchase-button"
                                     goto-confirmation-button
                                     title="{{'Complete Purchase' | t}}"></div>
                                <div ng-show="!isConfirmStepEnabled()" class="complete-purchase-button"
                                     complete-purchase-button
                                     title="{{'Complete Purchase' | t}}"></div>
                            </div>
                        </div>
                    </div>

                    <div ng-if="isPaymentMethod(PAYPAL_BT)">
                        <div paypal-through-braintree-form-component>

                            <div class="footer-modal">
                                <div class="auto-renew-purchase" ng-show="isSelectedTermAutoRenewChoiceAvailable()">
                                    <input class="auto-renew-purchase-checkbox" type="checkbox"
                                           ng-model="input.autoRenew" id="auto_renew"/>
                                    <label class="auto-renew-purchase-label" for="auto_renew">
                                        <t>Automatically renew my subscription when the time comes.</t>
                                    </label>
                                </div>

                              	<div consents-list></div>

                                <div ng-show="isConfirmStepEnabled()"
                                     class="complete-purchase-button paypal-throught-braintree" goto-confirmation-button
                                     title="{{'Complete Purchase' | t}}"></div>
                                <div ng-show="!isConfirmStepEnabled()"
                                     class="complete-purchase-button paypal-throught-braintree" complete-purchase-button
                                     title="{{'Complete Purchase' | t}}"></div>
                            </div>
                        </div>
                    </div>
                    <div ng-if="isPaymentMethod(APPLE_PAY_BT)">
                        <div apple-pay-through-braintree-form-component>

                            <div consents-list></div>

                            <div class="footer-modal">
                                <div class="auto-renew-purchase" ng-show="isSelectedTermAutoRenewChoiceAvailable()">
                                    <input class="auto-renew-purchase-checkbox" type="checkbox"
                                           ng-model="input.autoRenew" id="auto_renew"/>
                                    <label class="auto-renew-purchase-label" for="auto_renew">
                                        <t>Automatically renew my subscription when the time comes.</t>
                                    </label>
                                </div>
                                <div ng-show="isConfirmStepEnabled()" class="complete-purchase-button"
                                     goto-confirmation-button
                                     title="{{'Complete Purchase' | t}}"></div>
                                <div ng-show="!isConfirmStepEnabled()" class="complete-purchase-button"
                                     complete-purchase-button
                                     title="{{'Complete Purchase' | t}}"></div>
                            </div>
                        </div>
                    </div>

                    <div ng-if="isSupportedWorldpayCcMethod()">
                        <div worldpay-rxml-form-component>
                            <div class="footer-modal">
                                <div class="auto-renew-purchase" ng-show="isSelectedTermAutoRenewChoiceAvailable()">
                                    <input class="auto-renew-purchase-checkbox" type="checkbox"
                                           ng-model="input.autoRenew" id="auto_renew"/>
                                    <label class="auto-renew-purchase-label" for="auto_renew">
                                        <t>Automatically renew my subscription when the time comes.</t>
                                    </label>
                                </div>
                                <div class="complete-purchase-button" complete-purchase-button
                                     title="Complete Purchase"></div>
                            </div>
                        </div>
                    </div>

                    <div ng-if="isPaymentMethod(WORLDPAY_HPP)">
                        <div worldpay-hpp-form-component>
                            <div class="footer-modal">
                                <div class="auto-renew-purchase" ng-show="isSelectedTermAutoRenewChoiceAvailable()">
                                    <input class="auto-renew-purchase-checkbox" type="checkbox"
                                           ng-model="input.autoRenew" id="auto_renew"/>
                                    <label class="auto-renew-purchase-label" for="auto_renew">
                                        <t>Automatically renew my subscription when the time comes.</t>
                                    </label>
                                </div>
                                <div class="complete-purchase-button" complete-purchase-button
                                     title="Complete Purchase"></div>
                            </div>
                        </div>
                    </div>

                    <div ng-if="isPaymentMethod(WORLDPAY_CC_TOKEN)">
                        <div worldpay-token-form-component>
                            <div class="footer-modal">
                                <div class="auto-renew-purchase" ng-show="isSelectedTermAutoRenewChoiceAvailable()">
                                    <input class="auto-renew-purchase-checkbox" type="checkbox"
                                           ng-model="input.autoRenew" id="auto_renew"/>
                                    <label class="auto-renew-purchase-label" for="auto_renew">
                                        <t>Automatically renew my subscription when the time comes.</t>
                                    </label>
                                </div>
                                <div ng-show="isConfirmStepEnabled()" class="complete-purchase-button"
                                     goto-confirmation-button
                                     title="{{'Complete Purchase' | t}}"></div>
                                <div ng-show="!isConfirmStepEnabled()" class="complete-purchase-button"
                                     complete-purchase-button
                                     title="{{'Complete Purchase' | t}}"></div>
                            </div>
                        </div>
                    </div>

                    <div ng-if="isSupportedSpreedlyCcMethod()">
                        <div spreedly-form-component>

                            <div consents-list></div>

                            <div class="footer-modal">
                                <div class="auto-renew-purchase" ng-show="isSelectedTermAutoRenewChoiceAvailable()">
                                    <input class="auto-renew-purchase-checkbox" type="checkbox"
                                           ng-model="input.autoRenew" id="auto_renew"/>
                                    <label class="auto-renew-purchase-label" for="auto_renew">
                                        <t>Automatically renew my subscription when the time comes.</t>
                                    </label>
                                </div>
                                <div ng-show="isConfirmStepEnabled()" class="complete-purchase-button"
                                     goto-confirmation-button
                                     title="{{'Complete Purchase' | t}}"></div>
                                <div ng-show="!isConfirmStepEnabled()" class="complete-purchase-button"
                                     complete-purchase-button
                                     title="{{'Complete Purchase' | t}}"></div>
                            </div>
                        </div>
                    </div>

                    <div ng-if="isPaymentMethod(EDGIL_PAYWAY)">
                        <div edgil-payway-provider-form-component>
                            <div consents-list></div>
                            <payment-method-captcha ng-if="isCaptchaV3Enabled"
                                                    is-shown="isCaptchaV2Required"
                                                    class="payment-method-captcha"
                            >
                            </payment-method-captcha>
                            <div class="footer-modal">
                                <div class="auto-renew-purchase" ng-show="isSelectedTermAutoRenewChoiceAvailable()">
                                    <input class="auto-renew-purchase-checkbox" type="checkbox"
                                           ng-model="input.autoRenew" id="auto_renew"/>
                                    <label class="auto-renew-purchase-label" for="auto_renew">
                                        <t>Automatically renew my subscription when the time comes.</t>
                                    </label>
                                </div>
                                <div ng-show="isConfirmStepEnabled()" class="complete-purchase-button"
                                     goto-confirmation-button
                                     title="{{'Complete Purchase' | t}}"
                                     is-disabled="isCaptchaV2Unresolved"></div>
                                <div ng-show="!isConfirmStepEnabled()" class="complete-purchase-button"
                                     complete-purchase-button
                                     title="{{'Complete Purchase' | t}}"
                                     is-disabled="isCaptchaV2Unresolved"></div>
                            </div>
                        </div>
                    </div>

                    <div ng-if="isPaymentMethod(PAYPAL_EXPRESS_CHECKOUT)">
                        <div paypal-express-checkout-provider-form-component>
                            <div class="footer-modal">
                                <div class="auto-renew-purchase" ng-show="isSelectedTermAutoRenewChoiceAvailable()">
                                    <input class="auto-renew-purchase-checkbox" type="checkbox"
                                           ng-model="input.autoRenew" id="auto_renew"/>
                                    <label class="auto-renew-purchase-label" for="auto_renew">
                                        <t>Automatically renew my subscription when the time comes.</t>
                                    </label>
                                </div>
                                <div ng-show="isConfirmStepEnabled()" class="complete-purchase-button"
                                     goto-confirmation-button
                                     title="{{'Complete Purchase' | t}}"></div>
                                <div ng-show="!isConfirmStepEnabled()" class="complete-purchase-button"
                                     complete-purchase-button
                                     title="{{'Complete Purchase' | t}}"></div>
                            </div>
                        </div>
                    </div>

                    <div ng-if="isPaymentMethod(EIGEN)">
                        <div eigen-provider-form-component>
                          <payment-method-captcha ng-if="isCaptchaV3Enabled"
                                                  is-shown="isCaptchaV2Required"
                                                  class="payment-method-captcha"
                          >
                          </payment-method-captcha>
                            <div class="footer-modal">
                                <div class="auto-renew-purchase" ng-show="isSelectedTermAutoRenewChoiceAvailable()">
                                    <input class="auto-renew-purchase-checkbox" type="checkbox"
                                           ng-model="input.autoRenew" id="auto_renew"/>
                                    <label class="auto-renew-purchase-label" for="auto_renew">
                                        <t>Automatically renew my subscription when the time comes.</t>
                                    </label>
                                </div>
                                <div ng-show="isConfirmStepEnabled()" class="complete-purchase-button"
                                     goto-confirmation-button
                                     title="{{'Complete Purchase' | t}}"
                                     is-disabled="isCaptchaV2Unresolved"></div>
                                <div ng-show="!isConfirmStepEnabled()" class="complete-purchase-button"
                                     complete-purchase-button
                                     title="{{'Complete Purchase' | t}}"
                                     is-disabled="isCaptchaV2Unresolved"></div>
                            </div>
                        </div>
                    </div>

                    <div ng-if="isPaymentMethod(OPENPAY_CASH)">
                        <div openpay-cash-form-component>

                            <div consents-list></div>
                            <div class="footer-modal">
                                <div ng-show="isConfirmStepEnabled()" class="complete-purchase-button"
                                     goto-confirmation-button
                                     title="{{'Complete Purchase' | t}}"></div>
                                <div ng-show="!isConfirmStepEnabled()" class="complete-purchase-button"
                                     complete-purchase-button
                                     title="{{'Complete Purchase' | t}}"></div>
                            </div>
                        </div>
                    </div>

                    <div ng-if="isPaymentMethod(EASYPAY_MULTIBANCO)">
                        <div easypay-multibanco-form-component>

                            <div consents-list></div>
                            <div class="footer-modal">
                                <div ng-show="isConfirmStepEnabled()" class="complete-purchase-button"
                                     goto-confirmation-button
                                     title="{{'Complete Purchase' | t}}"></div>
                                <div ng-show="!isConfirmStepEnabled()" class="complete-purchase-button"
                                     complete-purchase-button
                                     title="{{'Complete Purchase' | t}}"></div>
                            </div>
                        </div>
                    </div>

                    <div ng-if="isPaymentMethod(EASYPAY_MBWAY)">
                        <div easypay-mbway-form-component>

                            <div consents-list></div>
                            <div class="footer-modal">
                                <div ng-show="isConfirmStepEnabled()" class="complete-purchase-button"
                                     goto-confirmation-button
                                     title="{{'Complete Purchase' | t}}"></div>
                                <div ng-show="!isConfirmStepEnabled()" class="complete-purchase-button"
                                     complete-purchase-button
                                     title="{{'Complete Purchase' | t}}"></div>
                            </div>
                        </div>
                    </div>

                    <div ng-if="isPaymentMethod(EASYPAY_DIRECT_DEBIT)">
                        <div easypay-direct-debit-provider-form-component is-valid="$isEasyPayDDValid">
                            <div class="footer-modal">
                                <div ng-show="isConfirmStepEnabled()" class="complete-purchase-button"
                                     goto-confirmation-button
                                     title="{{'Complete Purchase' | t}}"></div>
                                <div ng-show="!isConfirmStepEnabled()" class="complete-purchase-button"
                                     complete-purchase-button
                                     title="{{'Complete Purchase' | t}}" is-disabled="!$isEasyPayDDValid"></div>
                            </div>
                        </div>
                    </div>

                    <div ng-if="isPaymentMethod(EASYPAY_BOLETO)">
                        <div easypay-boleto-form-component>

                            <div consents-list></div>
                            <div class="footer-modal">
                                <div ng-show="isConfirmStepEnabled()" class="complete-purchase-button"
                                     goto-confirmation-button
                                     title="{{'Next' | t}}"></div>
                                <div ng-show="!isConfirmStepEnabled()" class="complete-purchase-button"
                                     complete-purchase-button
                                     title="{{'Next' | t}}"></div>
                            </div>
                        </div>
                    </div>

                    <div ng-if="isPaymentMethod(KLARNA)">
                        <div klarna-form-component>
                            <div consents-list></div>
                            <div class="footer-modal">
                                <div ng-show="isConfirmStepEnabled()" class="complete-purchase-button"
                                     goto-confirmation-button
                                     title="{{'Next' | t}}"></div>
                                <div ng-show="!isConfirmStepEnabled()" class="complete-purchase-button"
                                     complete-purchase-button
                                     title="{{'Next' | t}}"></div>
                            </div>
                        </div>
                    </div>

                    <div ng-if="isPaymentMethod(OBI)">
                        <div obi-form-component>
                            <div class="footer-modal">
                                <div class="auto-renew-purchase" ng-show="isSelectedTermAutoRenewChoiceAvailable()">
                                    <input class="auto-renew-purchase-checkbox" type="checkbox"
                                           ng-model="input.autoRenew"
                                           id="auto_renew"/>
                                    <label class="auto-renew-purchase-label" for="auto_renew">
                                        <t>Automatically renew my subscription when the time comes.</t>
                                    </label>
                                </div>
                                <div class="complete-purchase-button" goto-confirmation-button
                                     title="{{'Complete Purchase' | t}}"></div>
                            </div>
                        </div>
                    </div>

                    <div ng-if="isPaymentMethod(OBI_PAYPAL)">
                        <div obi-paypal-form-component>
                            <div class="footer-modal">
                                <div class="auto-renew-purchase" ng-show="isSelectedTermAutoRenewChoiceAvailable()">
                                    <input class="auto-renew-purchase-checkbox" type="checkbox"
                                           ng-model="input.autoRenew" id="auto_renew"/>
                                    <label class="auto-renew-purchase-label" for="auto_renew">
                                        <t>Automatically renew my subscription when the time comes.</t>
                                    </label>
                                </div>
                                <div class="complete-purchase-button" goto-confirmation-button
                                     title="{{'Complete Purchase' | t}}"></div>
                            </div>
                        </div>
                    </div>

                    <div ng-if="isPaymentMethod(DATATRANS)">
                        <div datatrans-form-component>
                            <div consents-list></div>
                            <div class="footer-modal">
                                <div class="auto-renew-purchase" ng-show="isSelectedTermAutoRenewChoiceAvailable()">
                                    <input class="auto-renew-purchase-checkbox" type="checkbox"
                                           ng-model="input.autoRenew"
                                           id="auto_renew"/>
                                    <label class="auto-renew-purchase-label" for="auto_renew">
                                        <t>Automatically renew my subscription when the time comes.</t>
                                    </label>
                                </div>
                                <div ng-show="isConfirmStepEnabled()" class="complete-purchase-button"
                                     goto-confirmation-button
                                     title="{{'Complete Purchase' | t}}"></div>
                                <div ng-show="!isConfirmStepEnabled()" class="complete-purchase-button"
                                     complete-purchase-button
                                     title="{{'Complete Purchase' | t}}"></div>
                            </div>
                        </div>
                    </div>

                    <div ng-if="isPaymentMethod(DATATRANS_POSTFINANCE)">
                        <div datatrans-postfinance-form-component>
                            <div class="footer-modal">
                                <div class="auto-renew-purchase" ng-show="isSelectedTermAutoRenewChoiceAvailable()">
                                    <input class="auto-renew-purchase-checkbox" type="checkbox"
                                           ng-model="input.autoRenew"
                                           id="auto_renew"/>
                                    <label class="auto-renew-purchase-label" for="auto_renew">
                                        <t>Automatically renew my subscription when the time comes.</t>
                                    </label>
                                </div>
                                <div ng-show="isConfirmStepEnabled()" class="complete-purchase-button"
                                     goto-confirmation-button
                                     title="{{'Complete Purchase' | t}}"></div>
                                <div ng-show="!isConfirmStepEnabled()" class="complete-purchase-button"
                                     complete-purchase-button
                                     title="{{'Complete Purchase' | t}}"></div>
                            </div>
                        </div>
                    </div>

                </div>

                <div ng-if="isPaymentMethod(ZERO)">
                    <div zero-form-component>

                        <div consents-list></div>
                        <div class="footer-modal">
                            <div class="complete-purchase-button" complete-purchase-button
                                 title="{{'Complete' | t}}"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div ng-show="!isPaymentMethodRequired()">
            <div pass-through-form-component>

                <div consents-list></div>
                <div class="footer-modal">
                    <div class="complete-purchase-button" complete-purchase-button
                         title="{{'Complete Purchase' | t}}"></div>
                </div>
            </div>
        </div>

    </div>

</script>


<!-- cc-form-component -->
<script type="text/ng-template" id="/widget/checkout/component/partials/cc-form-component.html">

    <div>

        <div class="row">

            <div desktop class="cc_stored_cards" ng-show="!cc.payWithNew && cc.initiated">
                <div class="add-credit-card-wrapper">
                    <h4>
                        <t>Your credit and debit cards</t>
                    </h4>
                    <a href="javascript:void(0)" class="add-credit-card" ng-click="cc.payWithNew = true"
                       ng-show="cc.stored.length > 0">
                        +
                        <t>Add a card</t>
                    </a>
                </div>
                <table class="payment-method-card" ng-show="cc.stored.length > 0">
                    <tr
                            class="payment-method-card-row"
                            ng-repeat="method in cc.stored"
                            ng-class="{'selected' : $parent.cc.selectedUpiId === method.id}">
                        <td class="payment-method-card-cell">
                            <input type="radio" name="stored_method" value="{{method.id}}"
                                   ng-model="$parent.cc.selectedUpiId"/>
                        </td>
                        <td class="payment-method-card-cell">
                            <div class="credit-card-{{method.identifier}}"></div>
                        </td>
                        <td class="payment-method-card-cell">
                            <div>{{method.type | tc:"checkout.platform"}} *{{method.ending_in}}</div>
                        </td>
                        <td class="payment-method-card-cell payment-method-card-cell-expiration">
                            <t>Expires in</t>
                            {{method.expire_month}}/{{method.expire_year}}
                        </td>
                        <td class="payment-method-card-cell payment-method-card-cell-default-payment">
                            <div class="payment-method-card-default-payment"
                                 ng-show="method.id === cc.defaultPaymentMethodId">
                                <t>Default</t>
                            </div>
                            <button ng-hide="method.id === cc.defaultPaymentMethodId"
                                    ng-click="setAsDefaultPaymentMethod(method)"
                                    type="button"
                                    class="set-as-default-button"
                            >
                                <t>Set as default</t>
                            </button>
                        </td>
                    </tr>
                </table>
            </div>

            <div mobile class="cc_stored_cards" ng-show="cc.initiated">
                <table class="payment-method-card" ng-show="cc.stored.length > 0">
                    <tr class="payment-method-card-row" ng-repeat="method in cc.stored track by $index"
                        ng-class="{'selected' : $parent.cc.selectedUpiId === method.id && $parent.cc.payWithNew !== true}">
                        <td class="payment-method-card-cell">
                            <input type="radio" id="stored_card_{{$index}}" name="stored_method" value="{{method.id}}"
                                   ng-model="$parent.cc.selectedUpiId" ng-click="$parent.cc.payWithNew = false"/>
                            <label for="stored_card_{{$index}}"></label>
                        </td>
                        <td class="payment-method-card-cell">
                            <div class="credit-card-{{method.identifier}}"></div>
                        </td>
                        <td class="payment-method-card-cell">
                            <div>*{{method.ending_in}}</div>
                        </td>
                        <td class="payment-method-card-cell payment-method-card-cell-default-payment">
                            <div class="payment-method-card-default-payment"
                                 ng-show="method.id === cc.defaultPaymentMethodId">
                                <t>Default</t>
                            </div>
                            <button ng-hide="method.id === cc.defaultPaymentMethodId"
                                    ng-click="setAsDefaultPaymentMethod(method)"
                                    type="button"
                                    class="set-as-default-button"
                            >
                                <t>Set as default</t>
                            </button>
                        </td>
                    </tr>
                    <tr class="payment-method-card-row" ng-class="{'selected' : $parent.cc.payWithNew === true}">
                        <td class="payment-method-card-cell">
                            <input type="radio" id="add_new_card" name="stored_method" ng-model="$parent.cc.payWithNew" ng-value="true"/>
                            <label for="add_new_card"></label>
                        </td>
                        <td class="payment-method-card-cell" colspan="3">
                            <t>Add a new card</t>
                        </td>
                    </tr>
                </table>
            </div>

            <div class="cc_new_card" ng-show="cc.payWithNew && cc.initiated">
                <div desktop class="go-back-to-cards-wrapper">
                    <a href="javascript:void(0)" class="go-back-to-cards" ng-click="cc.payWithNew = false"
                       ng-show="cc.stored.length > 0">
                        <t>Return to saved cards</t>
                    </a>

                    <h4>
                        <t>Add a new credit or debit card</t>
                    </h4>
                </div>

                <form class="new-card-form" name="ccForm" role="form">
                    <div ng-show="isBraintreeV3() === true">
                        <table class="table-form-inline" cellpadding="0" cellspacing="0">
                            <tr>
                                <td class="field-card-number">
                                    <div class="field-wrapper">
                                        <label class="icon card"></label>
                                        <div class="input">
                                            <div id="card-number" class="cc-field__input-wrap-container"></div>
                                        </div>
                                    </div>
                                </td>
                                <td class="field-card-expiry-month">
                                    <div class="field-wrapper">
                                        <label class="icon expiry"></label>
                                        <div class="input">
                                            <div id="expiration-date" class="cc-field__input-wrap-container"></div>
                                        </div>
                                    </div>
                                </td>
                                <td class="field-card-cvv">
                                    <div class="field-wrapper">
                                        <label class="icon password"></label>
                                        <div class="input">
                                            <div id="cvv" class="cc-field__input-wrap-container"></div>
                                        </div>
                                    </div>
                                </td>
                                <td class="field-card-postal-code">
                                    <div class="field-wrapper">
                                        <label class="icon cc-field__icon--zip-code"></label>
                                        <div class="input">
                                            <div id="postal-code" class="cc-field__input-wrap-container"></div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <table ng-show="isBraintreeV3() !== true" class="table-form-inline" cellpadding="0" cellspacing="0">
                        <tr>
                            <td class="field-card-number">
                                <div class="field-wrapper">
                                    <label class="icon card"></label>

                                    <div class="input">
                                        <input type="text" name="num" class="flat" placeholder="{{'Card number' | t}}"
                                               ng-model="credit_card.num" required/>
                                    </div>
                                </div>
                            </td>
                            <td class="field-card-expiry-month">
                                <div class="field-wrapper">
                                    <label class="icon expiry"></label>

                                    <div class="input whitespace-nowrap">
                                        <input class="flat inline input-date" type="text" name="expire_month"
                                               placeholder="{{'MM' | t}}" maxlength="2"
                                               ng-model="credit_card.expire_month" required/>

                                        <div class="date-slash"> /</div>
                                        <input class="flat inline input-date" type="text" name="expire_year"
                                               placeholder="{{'YY' | t}}" maxlength="2"
                                               ng-model="credit_card.expire_year" required/>
                                    </div>
                                </div>
                            </td>
                            <td class="field-card-cvv">
                                <div class="field-wrapper">
                                    <label class="icon password"></label>

                                    <div class="input">
                                        <input class="flat" type="text" name="cvv" placeholder="{{'CVV' | t}}"
                                               maxlength="5" ng-model="credit_card.cvv"
                                               required/>
                                    </div>
                                </div>
                            </td>
                            <td class="field-card-postal-code">
                                <div class="field-wrapper">


                                    <div class="input ml10">
                                        <input class="flat" type="text" name="postal_code"
                                               placeholder="{{'Postal code' | t}}" ng-model="input.zipCode"
                                               required/>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </table>
                    <div class="payment-system-condition">

                        <span ng-if="!isSubscription()">
                            <div class="custom-checkbox">
                                <input type="checkbox" name="store_in_vault" ng-model="credit_card.store_in_vault"
                                       id="rermber-my-card"/>
                                <label for="rermber-my-card"><t>Remember my card for future payments</t></label>
                            </div>
                        </span>
                        <span ng-if="isSubscription()">
                            <input type="hidden" name="store_in_vault" ng-model="credit_card.store_in_vault"
                                   ng-value="true"/>
                        </span>
                        <div class="custom-checkbox apply-this-method" ng-if="credit_card.store_in_vault">
                            <input type="checkbox" name="defaultPaymentMethodId" ng-model="cc.defaultPaymentMethodId"
                                   id="default-payment-method-credit-card"/>
                            <label for="default-payment-method-credit-card">
                                <t>Apply this payment method to all active subscriptions</t>
                            </label>
                        </div>
                    </div>
                </form>
            </div>
            <div ng-transclude></div>
        </div>
    </div>

</script>


<!-- payment-method-selector-component -->
<script type="text/ng-template" id="/widget/checkout/component/partials/payment-method-selector-component.html">
    <div desktop class="select-payment-options">
        <h4>
            <t>Select a payment method</t>
        </h4>
    </div>
    <div class="payment-options-wrapper">
        <ul class="payment-options {{selectedPaymentMethod.identifier}}">
            <li ng-repeat="pm in paymentMethods">
                <a
                        ng-click="selectPaymentMethod(pm)"
                        ng-class="{'payment-method-selected': pm.selected}"
                        class="button pay select-payment {{pm.identifier}} {{getCurrencyClass()}}"
                        ng-checked="isPaymentMethod(pm.id)">
                </a>
            </li>
        </ul>
    </div>
</script>


<!-- pay-what-you-want-form-component -->
<script type="text/ng-template" id="/widget/checkout/component/partials/pay-what-you-want-form-component.html">
    <!--
    Available methods:
        isCustomPrice() - checks if widget is available for selected term
    Available variables (read-only):
         minPriceBase - Minimal allowed amount in base currency.
         maxPriceBase - Maximum allowed amount in base currency.
         currencyBase - Base currency.
         minPrice - Minimum allowed amount in the choosed currency.
         maxPrice - Maximum allowed amount in the choosed currency.
         currency - Choosed currency.
         currencyRate - Rate between choosed and base currency.
         amountBase - Calculated amount in base currency.
         customAmount - Entered amount in the choosed currency.
         loading - Determines if the component is loading initial data.
         validating - Flag determine if the component is in validating state, that means it waits for the server respond.
         validated - Whether amount is already validated, by default it's valid, 'cause the server passes us the correct value.
         validationError - If the amount isn't validated then it contains the last error message.
         applied - Whether this price was applied.
     - ng-model vars
        customAmount
    -->

    <div ng-show="isCustomPrice()" class="custom-price">
            <span>
                <span>
                    <span class="custom-amount-edit custom-amount-edit-input">
                        <input id="custom-price-amount-input"
                               name="custom-amount"
                               ng-change="startValidating()"
                               type="text"
                               ng-model="customAmount"
                               placeholder="{{minPrice}} {{'minimum' | t}}"
                               error-message="field-error"><span class="currency-name">{{currency}}</span>
                    </span>
                    <div class="custom-amount-info">
                        <div>
                            <span class="billing_period"><t>for {{getSelectedTerm().firstPeriod}}</t></span>
                            <span ng-if="getSelectedTerm().isSubscription" class="until"><t>until canceled</t></span>
                        </div>
                    </div>

                    <span ng-show="validating">
                        <!--TODO GIF SPINNER-->
                        </span>
                </span>
            </span>
    </div>
</script>

<script type="text/ng-template" id="/widget/checkout/component/partials/billing-country-component.html">
    <div ng-if="isBillingCountryEnabled()" class="billing-country-form">
        <div ng-if="isEuBillingCountryLabel()">
            <h4>
                <t>Country of residence</t>
            </h4>
        </div>
        <div ng-if="isUsBillingCountryLabel()">
            <h4>
                <t>Select your billing country</t>
            </h4>
        </div>

        <div class="billing-country billing">
            <div class="billing-country-group">
                <div
                        class="tp-dropdown__select"
                        tp-country-selector
                        disabled="billingConfig.billingAddressPrefilled && !isAvalaraTaxEnabled()"
                        ng-class="{
                          'tp-dropdown__select-disabled': billingConfig.billingAddressPrefilled && !isAvalaraTaxEnabled(),
                          'billing-address__input-error': billingConfig.sameResidence && billingConfig.countrySelectorError
                        }"
                        selector-options="selectorOptions"
                        selector-label="{{'Select a country or region' | t}}"
                        dropdown-styles="{width: 320, zIndex: 1004}"
                        tabindex="0">
                </div>
            </div>
            <div class="billing-country-group"
                 ng-if="(!getBillingAddressEnabled() || (isAvalaraTaxEnabled() && !isBillingAddressAvailableForSelectedCountry())) && billingConfig.requiredZipCodeAndNotHidden">

                <table class="table-form-inline">
                    <tr>
                        <td>
                            <div class="field-wrapper">
                                <label for="code" class="icon postal-code"></label>
                                <div class="input">
                                    <input
                                            id="code"
                                            type="text"
                                            class="flat"
                                            ng-model="billingConfig.zipCode"
                                            ng-change="onZipCodeChanged()"
                                            placeholder="{{'Postal code' | t}}">
                                </div>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
            <div ng-if="getBillingAddressEnabled()">
              <div experian-billing-address
                   ng-if="isUsBillingCountryLabel() && isOneSourceTaxEnabled()"></div>
              <div billing-address-component
                   ng-if="isAvalaraTaxEnabled() && isBillingAddressAvailableForSelectedCountry()"
                   billing-address-data="input.billingAddressConfig"></div>
            </div>
        </div>

        <div ng-if="billingConfig.needResidence">
            <div class="custom-checkbox">
                <input type="checkbox" ng-model="billingConfig.sameResidence" id="same-residence"
                       ng-change="onChangeSameResidence()"/>
                <label for="same-residence">
                    <t>I reside in the same country as my billing address</t>
                </label>
            </div>

            <div ng-if="!billingConfig.sameResidence">
                <div>
                    <h4>
                        <t>Select your billing country</t>
                    </h4>
                </div>

                <div class="billing-country residence">
                    <div class="billing-country-group">
                        <div
                                class="tp-dropdown__select"
                                ng-class="{
                                  'billing-address__input-error': !billingConfig.sameResidence && billingConfig.countrySelectorError
                                }"
                                tp-country-selector
                                selector-options="residenceOptions"
                                selector-label="{{'Select a country or region' | t}}"
                                dropdown-styles="{width: 320, zIndex: 1004}"
                                tabindex="0">
                        </div>
                    </div>
                    <div class="billing-country-group" ng-if="billingConfig.residenceRequireZipCode">
                        <input
                                type="text"
                                class=""
                                ng-model="billingConfig.zipCode"
                                ng-change="onZipCodeChanged()"
                                placeholder="{{'Postal code' | t}}">
                    </div>
                </div>
            </div>
        </div>
    </div>
</script>

<script type="text/ng-template" id="/widget/checkout/component/partials/select-selector.html">
    <div class="tp-dropdown__container">
        <ul class="tp-dropdown__list">
            <li class="tp-dropdown__item tp-dropdown__item_control tp-dropdown__tail tp-dropdown__tail_position_bottom tp-dropdown__tail_position_left tp-dropdown__tail_theme_white">
                <input type="text" class="input-full-width search-query light-blue"
                       ng-change="update()"
                       ng-model="searchItemModel"
                       placeholder="{{'Search...' | t}}">
            </li>
            <li class="tp-dropdown__item tp-dropdown__item_divider"></li>
            <li>
                <div class="tp-dropdown__scrollable-list tp-dropdown__scrollable-list_medium" style="overflow: auto">
                    <div class="tp-dropdown__item" dynamic-html="countryListHtml">
                    </div>
                </div>
            </li>
        </ul>
    </div>
</script>
<script type="text/ng-template" id="/widget/checkout/component/partials/country-selector.html">
    <span class="ellipsis tp-dropdown__select_auto_width tp-dropdown__item-color blue">
        <span ng-show="selectorOptions.selectorModel.label === '' ">{{selectorLabel}}</span>
        <span ng-show="selectorOptions.selectorModel.label !== '' ">{{selectorOptions.selectorModel.label}}</span>
    </span>
</script>
<script type="text/ng-template" id="/widget/checkout/component/partials/calling-code-selector.html">
    <span class="ellipsis tp-dropdown__select_auto_width tp-dropdown__item-color">
        <span ng-show="selectorOptions.selectorModel.label === '' || selectorOptions.selectorModel.label === undefined "
              class="placeholder">{{selectorLabel}}</span>
        <span ng-show="selectorOptions.selectorModel.label !== '' ">
            <div class="country-icon country-icon-{{selectorOptions.selectorModel.item.countryCode.toLowerCase()}}"></div> (+{{selectorOptions.selectorModel.item.callingCode}})
        </span>
    </span>
</script>
<script type="text/ng-template" id="/widget/checkout/component/partials/canadian-taxes.html">
    <div class="canadian-taxes" ng-if="input.canadianTaxes.length ">
        <div ng-repeat="canadianTax in input.canadianTaxes" class="tax {{canadianTax.name}}">
            <div class="name">{{ canadianTax.name }}</div>
            <div class="amount"><b>{{ canadianTax.amount }}</b></div>
        </div>
        <div class="tax total">
            <div class="name">
                <t>Total</t>
            </div>
            <div class="amount"><b>{{input.confirmated.taxAmount}}</b></div>
        </div>
    </div>
</script>
<script type="text/ng-template" id="/widget/checkout/component/partials/canadian-taxes-hint.html">
    <span class="taxes-info-tooltip"
          ng-if="billingConfig.countryCode === 'CA' && isVatCanadaEnabled(interval) && interval.tax">
        <span class="icon-info-dark"></span>
        <span class="taxes-info-tooltip-body">
            <span ng-if="interval.hstRate">HST {{ interval.hstAmount }} </span>
            <span ng-if="interval.pstRate && interval.hstRate">&nbsp;+&nbsp;</span>
            <span ng-if="interval.pstRate">PST {{ interval.pstAmount }} </span>
            <span ng-if="interval.qstRate && (interval.hstRate||interval.pstRate)">&nbsp;+&nbsp;</span>
            <span ng-if="interval.qstRate">QST {{ interval.qstAmount }} </span>
            <span ng-if="interval.gstRate && (interval.hstRate||interval.pstRate ||interval.qstRate)">&nbsp;+&nbsp;</span>
            <span ng-if="interval.gstRate">GST {{ interval.gstAmount }} </span>
        </span>
    </span>
</script>

<script type="text/ng-template" id="/widget/checkout/component/partials/passwordless-login.html">
    <div ng-if="!isSingleStepEnabled()" data-e2e="passwordless-login-form">
        <div class="pane"></div>
        <div class="passwordless-login-form">
            <p class="passwordless-login-form-lead">
                <t>Login</t>
            </p>

            <p class="sub-lead">
                <t>Enter your email address</t>
            </p>

            <p class="passwordless-input-group ">
                <input ng-model="data.email"
                       type="text"
                       autofocus
                       class="passwordless-input without-outline"
                       ng-class="{empty: !data.email.length}"
                       data-e2e="email-input"
                       ng-enter="loginUser()"
                >
                <span class="passwordless-placeholder"><i class="icon icon-email"></i><t>email</t></span>
                <span ng-if="data.error" class="error-message" data-e2e="error-message">{{data.error}}</span>
            </p>
            <div ng-if="passwordlessCaptchaEnabled">
                <div class="re-captcha login re-captcha--centered"
                     re-captcha
                     key="{{ recaptchaKey }}"
                     on-resolve="onCaptchaResolve(response)"
                     on-ready="onCaptchaReady(id)"
                     show-reset-button="true"
                >
                </div>
            </div>
            <p>
                <button class="btn prime"
                        ng-click="loginUser()"
                        data-e2e="next-btn"
                        ng-disabled="!data.email.length"
                >
                    <t>Next</t>
                </button>
            </p>
        </div>
    </div>
    <div ng-if="isSingleStepEnabled()"
         data-e2e="passwordless-login-form"
         class="passwordless-login-single-step-form"
    >
        <h4>
            <t>Please enter your email address</t>
        </h4>
        <table class="table-form-inline passwordless-login-single-step-form-email">
            <tr>
                <td>
                    <div class="field-wrapper">
                        <label for="passwordless-login-single-step-form-email" class="icon email"></label>
                        <div class="input">
                            <input ng-model="data.email"
                                   type="text"
                                   class="passwordless-login-single-step-form-input flat"
                                   ng-class="{empty: !data.email.length}"
                                   data-e2e="email-input"
                                   placeholder="{{ 'Email' | t }}"
                                   id="passwordless-login-single-step-form-email">
                        </div>
                    </div>
                    <div ng-if="passwordlessCaptchaEnabled">
                        <div class="re-captcha login"
                             re-captcha
                             key="{{ recaptchaKey }}"
                             on-resolve="onCaptchaResolve(response)"
                             on-ready="onCaptchaReady(id)">
                        </div>
                    </div>

                </td>
            </tr>
        </table>
    </div>
</script>

<script type="text/ng-template" id="/widget/checkout/component/partials/passwordless-single-step-captcha.html">
    <div ng-if="isCaptchaVerificationRequired()" data-e2e="passwordless-single-step-captcha"
         class="passwordless-single-step-captcha">
        <div class="re-captcha login"
             re-captcha
             key="{{ recaptchaKey }}"
             on-resolve="onCaptchaResolve(response)"
             on-ready="onCaptchaReady(id)">
        </div>
    </div>
</script>

<script type="text/ng-template" id="/widget/checkout/component/partials/billing-address-component.html">
  <div class="billing-address__body">
    <div class="billing-address__label"
         ng-if="billingAddressData.billingLabel">
      {{billingAddressData.billingLabel}}
    </div>
    <div ng-repeat="field in fieldsToInputs">
      <div class="billing-address__group" ng-if="field.length">
        <div class="billing-address__item" ng-if="subField.visible" ng-repeat="subField in field">
          <label class="visually-hidden" for="{{subField.anchor}}"><t>{{subField.title}}</t></label>
          <input ng-if="subField.anchor !== 'regionName' || !regions"
                 ng-class="{
                    'billing-address__input-error': billingConfig.postalCodeError && subField.anchor === 'postalCode'
                 }"
                 ng-change="subField.anchor === 'postalCode' ? onZipCodeChanged() : onFieldChanged(subField.anchor)"
                 placeholder="{{subField.title | t}}"
                 id="{{subField.anchor}}"
                 ng-model="billingConfig.billingAddress[subField.anchor]"
                 ng-disabled="isFieldsDisabled()"
                 class="input" type="text" />
          <select ng-if="subField.anchor === 'regionName' && regions"
                  id="{{subField.anchor}}"
                  ng-options="region.regionName for region in regions track by region.regionName"
                  ng-model="region"
                  ng-change="billingAddressData.checkFields ? onFieldChanged(subField.anchor, region) : selectRegion(region)"
                  ng-disabled="isFieldsDisabled()"
                  ng-class="{'billing-address__select-placeholder': !billingConfig.billingAddress.region.regionName}">
            <option disabled value=""><t>{{subField.title}}</t></option>
          </select>
        </div>
      </div>
      <div class="billing-address__item" ng-if="!field.length && field.visible">
        <label class="visually-hidden" for="{{field.anchor}}"><t>{{field.title}}</t></label>
        <input placeholder="{{field.title | t}}"
               id="{{field.anchor}}"
               ng-change="onFieldChanged(field.anchor)"
               ng-model="billingConfig.billingAddress[field.anchor]"
               ng-disabled="isFieldsDisabled()"
               class="input" type="text" />
      </div>
    </div>
  </div>
</script>

<script type="text/ng-template" id="/widget/checkout/component/partials/address-selector.html">
    <div class="full-address-selector">
        <label for="full-address-input" class="visually-hidden"><t>Address</t></label>
        <div class="full-address-selector__input-wrapper">
            <span ng-if="!isStatic" aria-hidden="true" class="full-address-selector__input-icon">
                <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.272 11.9L10 15.171l-3.272-3.273C3.813 8.985 5.878 4 10 4c4.123 0 6.187 4.984 3.272 7.9zm-7.958 1.414L10 18l4.686-4.686C18.861 9.139 15.904 2 10 2S1.139 9.139 5.314 13.314zM10 10a2 2 0 110-4 2 2 0 010 4z" fill="#000"/></svg>
            </span>
            <input ng-show="!isStatic"
                id="full-address-input"
                class="full-address-selector__search-input"
                ng-class="{'full-address-selector__search-input--error': hasError, 'full-address-selector__search-input--ok': validInput}"
                type="text"
                ng-model="query"
                ng-change="search()"
                autocomplete="no-autocomplete"
                placeholder="{{'Please enter address' | t}}">
            <input class="full-address-selector__search-input full-address-selector__search-input--without-dash"
                   ng-disabled="disabled"
                   ng-show="isStatic && disabled"
                   readonly
                   type="text"
                   ng-model="preselectedRegion"
                   placeholder="{{inputPlaceholder}}">
            <input class="full-address-selector__search-input full-address-selector__search-input--without-dash"
                   ng-show="isStatic && !disabled"
                   readonly
                   type="text"
                   ng-model="query"
                   placeholder="{{inputPlaceholder}}"
                   ng-click="search()">
            <span class="full-address-selector__input-arrow" ng-if="isStatic"
                  ng-class="{'full-address-selector__input-arrow--active': isDropdownOpen && searchResults.length !== 0}"></span>
            <span class="full-address-selector__input-status" aria-hidden="true" ng-show="validInput">
                <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="10" fill="#468CC8"/><path fill-rule="evenodd" clip-rule="evenodd" d="M8 14l-3-3 1-1 2 2 6-6 1 1-7 7z" fill="#fff"/></svg>
            </span>
            <span class="full-address-selector__input-status" aria-hidden="true" ng-show="hasError">
                <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="10" fill="#F86A6A"/><path d="M5.934 6.995l1.06-1.06 7.072 7.07-1.06 1.06-7.072-7.07z" fill="#fff"/><path d="M13.005 5.934l1.061 1.06-7.071 7.072-1.06-1.06 7.07-7.072z" fill="#fff"/></svg>
            </span>
        </div>

        <div class="full-address-selector__dropdown"
             ng-show="isDropdownOpen && searchResults.length !== 0">
            <div class="full-address-selector__dropdown-item" ng-repeat="item in searchResults">
                <button type="button"
                        ng-class="{'full-address-selector__dropdown-list-button--black': isStatic}"
                        class="full-address-selector__dropdown-list-button"
                        ng-click="getFullAddress(item)">{{ getItem(item) }}</button>
            </div>
        </div>
    </div>
</script>

<script type="text/ng-template" id="/widget/checkout/component/partials/experian-billing-address.html">
    <div>
        <div class="billing-country-form__back-controls">
            <button class="form-back-button" type="button"
                    ng-click="setShowExperianAddress()"
                    ng-if="!showExperianAddress && !billingConfig.billingAddressPrefilled"
                    ng-class="{'form-back-button__dashed-left': usingSavedAddress}">
                <svg class="form-back-button__icon" aria-hidden="true" width="20" height="20" fill="none"><path d="M11.5 6.5L8 10l3.5 3.5" stroke="#428BCA" stroke-width="2"/></svg>
                <t>Return</t>
            </button>
            <button class="form-back-button" type="button"
                    ng-click="cancelEdit()"
                    ng-if="!billingConfig.billingAddressPrefilled && usingSavedAddress">
                <t>Cancel</t>
            </button>
            <button class="form-back-button form-edit-button" type="button"
                    ng-click="editAddress()"
                    ng-if="!showExperianAddress && billingConfig.billingAddressPrefilled">
                <t>Edit billing address</t>
            </button>
        </div>

        <div>
            <div ng-if="showExperianAddress" class="experian-full-address-form">
                <address-selector get-addresses-list="getExperianAddressList"
                                  get-structured-address="getStructuredExperianAddress"
                                  show-manually="showManualInput"
                                  set-input-value="setBillingAddress"></address-selector>
                <p class="experian-full-address-form__message" ng-if="showManualEnter">
                    <t>We are not able to recognize your address. Please try again or <button type="button" class="experian-full-address-form__link" ng-click="setShowExperianAddress()">enter it manually</button>.</t>
                </p>
            </div>
            <div ng-if="!showExperianAddress"
                 class="experian__billing-address-component"
                 billing-address-component
                 billing-address-data="billingAddressComponentConfiguration"></div>
        </div>
    </div>
</script>
<script type="text/ng-template" id="/widget/checkout/component/partials/easypay-mbway-form-component.html">
  <div ng-if="isPaymentMethod(EASYPAY_MBWAY)">
    <div class="easypay-mbway-payment-form row">
      <h4 class="payment-form-title">
        <t>Associates your customer's debit or credit card to a mobile number using just an app, enabling them to go shopping and pay instantly.</t>
      </h4>
      <div class="phone-information-wrapper">
        <div class="phone-information-cell calling-cell">
          <div
            id="phone-country"
            class="tp-dropdown__select"
            tp-calling-code-selector
            click-on-select="onCallingCodeSelect"
            selector-options="selectorOptions"
            selector-label="{{'Country code' | t}}"
            dropdown-classes="'no-triangle'"
            dropdown-styles="{width: 320, zIndex: 1004, left: 40}">
          </div>
        </div>
        <div class="phone-information-cell phone-input-cell">
          <input class="default-input phone-number-input" type="text" id="phone-number" placeholder="{{'Phone number' | t}}" ng-model="phone.number"/>
        </div>
      </div>
      <div class="app-notification-info"><t>We will send you notification in your MBWAY mobile app</t></div>
    </div>
    <div ng-transclude></div>
  </div>
</script>
<script type="text/ng-template" id="/widget/checkout/component/partials/easypay-multibanco-form-component.html">
  <div ng-if="isPaymentMethod(EASYPAY_MULTIBANCO)">
    <div class="easypay-multibanco-payment-form row">
      <h4 class="payment-form-title">
        <t>The most commonly used Portuguese payment system. Highly recommended for every business selling to Portugal.</t>
      </h4>
      <div class="warning-wrapper">
        <strong><t>Instructions</t></strong>
        <ol>
          <li>
            <t>Use this information for paying via ATM or online banking system</t>
          </li>
          <li>
            <t>When payment is complete, you will receive an e-mail notifying you of your access</t>
          </li>
        </ol>
      </div>
    </div>
    <div ng-transclude></div>
  </div>
</script>
<!-- easypay-direct-debit-provider-form-component -->
<script type="text/ng-template" id="/widget/checkout/component/partials/easypay-direct-debit-provider-form-component.html">
  <div ng-show="isPaymentMethod(EASYPAY_DIRECT_DEBIT)">
    <div class="easypay-payment-form row">
      <div class="errors"></div>
      <div class="easypay-direct-debit-payment-form">
        <div ng-if="stored.length">
          <span class="easypay-direct-debit-title"><t>Your Direct Debit agreements</t></span>
          <table class="payment-method-easypay-direct-debit">
            <tr class="payment-method-easypay-direct-debit-row existing-upi" ng-repeat="upi in stored" ng-class="{'selected' : $parent.data.selectedUpi.id === upi.id}">
              <td class="payment-method-easypay-direct-debit-cell">
                <input type="radio" id="radio-{{upi.token.slice(-4)}}" name="stored_method" ng-model="$parent.data.selectedUpi" ng-value="upi" radio-track-by="id" />
              </td>
              <td class="payment-method-easypay-direct-debit-cell" ng-if="!upi.isNew">
                <label for="radio-{{upi.token.slice(-4)}}"><t>Agreement *</t>{{upi.token.slice(-4)}}</label>
              </td>
              <td class="payment-method-easypay-direct-debit-cell" ng-if="upi.isNew">
                <label class="inline-label" for="radio-{{upi.token.slice(-4)}}">
                  <div class="easypay-direct-debit-loggedin">
                    <span class="easypay-direct-debit-agreement"><t><b>New</b> agreement *</t>{{upi.token.slice(-4)}}</span>
                  </div>
                </label>
                <button ng-click="cancelNewAccount()" class="easypay-direct-debit-cancel-button" id="cancel-direct-debit-account"><t>Cancel</t></button>
              </td>
            </tr>
          </table>
        </div>

        <div ng-if="!data.newUpi">
          <div class="table-cell table-cell--centered">
            <a id="add-direct-debit-account" class="button big add-account" ng-click="addNewAccount()"><t>Create agreement</t></a>
          </div>
          <div class="table-cell table-cell--centered">
            <t>You will be redirected to EasyPay website, go back to finish purchase.</t>
          </div>
        </div>
      </div>

      <div consents-list></div>

      <div ng-transclude></div>
    </div>
  </div>
</script>
<script type="text/ng-template" id="/widget/checkout/component/partials/easypay-boleto-form-component.html">
  <div ng-if="isPaymentMethod(EASYPAY_BOLETO)">
    <div ng-transclude></div>
  </div>
</script><script type="text/ng-template" id="/widget/checkout/component/partials/easypay-bill-controls.html">
  <div class="easypay-cash-receipt-links">
    <a class="button big" id="easypay-open-bill" href="{{billUrl}}" target="_blank">{{openBillTitle}}</a>
  </div>
</script><!-- klarna-provider-form-component -->
<script type="text/ng-template" id="/widget/checkout/component/partials/klarna-provider-form-component.html">
  <div ng-if="isPaymentMethod(KLARNA)">
    <div class="klarna-provider">
      <div class="errors"></div>
      <div class="klarna-payment-form" ng-class="{'klarna-payment-form--only': isTheOnlyPaymentMethod() && !isBillingCountryEnabled()}">

        <!--Country selector-->
        <div ng-hide="isBillingCountryEnabled()"
             class="billing-country">
          <div class="billing-country-group">
            <div class="heading-4">
              <t>Select your billing country</t>:
            </div>
            <div>
              <div
                class="tp-dropdown__select"
                tp-country-selector
                data-e2e="countrySelectorByKlarna"
                selector-options="countrySelectorOptions"
                default-country="defaultCountryCode"
                selector-label="{{'Select a country or region' | t}}"
                dropdown-styles="{width: 320, zIndex: 1004}"
                tabindex="0">
              </div>
            </div>
          </div>
        </div>

        <div class="klarna-payment-buttons">
          <div class="klarna-button-wrapper" ng-repeat="paymentMethod in paymentMethods()">
            <button id="paymentMethod-{{paymentMethod.identifier}}"
                    class="klarna-button klarna-button--{{paymentMethod.identifier}}"
                    ng-class="{'klarna-button--selected': state.billingData.selectedPaymentMethod === paymentMethod.identifier}"
                    ng-click="selectPaymentMethod(paymentMethod.identifier)">
              <span class="klarna-button-payment-name
                           klarna-button-payment-name--{{paymentMethod.identifier}}
                           heading-4">{{paymentMethod.name}}</span>
            </button>
          </div>
        </div>

        <div ng-show="paymentMethods().length > 0">
          <div class="klarna-iframe-container" id="klarna_container"></div>
        </div>

      </div>
      <div ng-transclude></div>
    </div>
  </div>
</script>
<script type="text/ng-template" id="/widget/checkout/component/partials/obi-form-component.html">
  <div ng-if="isPaymentMethod(OBI)">
    <div class="obi-payment-form row">

      <div desktop class="cc_stored_cards" ng-show="!cc.payWithNew && cc.initiated">
        <div class="add-credit-card-wrapper">
          <h4>
            <t>Your credit and debit cards</t>
          </h4>
          <a href="javascript:void(0)" class="add-credit-card" ng-click="cc.payWithNew = true"
             ng-show="cc.stored.length > 0">
            +
            <t>Add a card</t>
          </a>
        </div>
        <table class="payment-method-card" ng-show="cc.stored.length > 0">
          <tr class="payment-method-card-row" ng-repeat="method in cc.stored"
              ng-class="{'selected' : $parent.cc.selectedUpiId === method.id}">
            <td class="payment-method-card-cell">
              <input type="radio" name="stored_method" value="{{method.id}}" ng-model="$parent.cc.selectedUpiId"/>
            </td>
            <td class="payment-method-card-cell">
              <div class="credit-card-{{method.identifier}}"></div>
            </td>
            <td class="payment-method-card-cell">
              <div>{{method.type | tc:"checkout.platform"}} *{{method.ending_in}}</div>
            </td>
            <td class="payment-method-card-cell payment-method-card-cell-expiration">
              <t>Expires in</t>
              {{method.expire_month}}/{{method.expire_year}}
            </td>
            <td class="payment-method-card-cell payment-method-card-cell-default-payment">
              <div class="payment-method-card-default-payment" ng-show="method.id === cc.defaultPaymentMethodId"><t>Default</t></div>
              <button ng-hide="method.id === cc.defaultPaymentMethodId"
                      ng-click="setAsDefaultPaymentMethod(method)"
                      type="button"
                      class="set-as-default-button"
              >
                <t>Set as default</t>
              </button>
            </td>
          </tr>
        </table>
      </div>

      <div mobile class="cc_stored_cards" ng-show="cc.initiated">
        <table class="payment-method-card" ng-show="cc.stored.length > 0">
          <tr class="payment-method-card-row" ng-repeat="method in cc.stored"
              ng-class="{'selected' : $parent.cc.selectedUpiId == method.id && $parent.cc.payWithNew !== true}">
            <td class="payment-method-card-cell">
              <input type="radio" name="stored_method" value="{{method.id}}" ng-model="$parent.cc.selectedUpiId"
                     ng-click="$parent.cc.payWithNew = false"/>
            </td>
            <td class="payment-method-card-cell">
              <div class="credit-card-{{method.identifier}}"></div>
            </td>
            <td class="payment-method-card-cell">
              <div>*{{method.ending_in}}</div>
            </td>
            <td class="payment-method-card-cell payment-method-card-cell-default-payment">
              <div class="payment-method-card-default-payment" ng-show="method.id === cc.defaultPaymentMethodId"><t>Default</t></div>
              <button ng-hide="method.id === cc.defaultPaymentMethodId"
                      ng-click="setAsDefaultPaymentMethod(method)"
                      type="button"
                      class="set-as-default-button"
              >
                <t>Set as default</t>
              </button>
            </td>
          </tr>
          <tr class="payment-method-card-row" ng-class="{'selected' : $parent.cc.payWithNew === true}">
            <td class="payment-method-card-cell">
              <input type="radio" name="stored_method" ng-model="$parent.cc.payWithNew" ng-value="true"/>
            </td>
            <td class="payment-method-card-cell" colspan="2">
              <t>Add a new card</t>
            </td>
          </tr>
        </table>
      </div>

      <div class="cc_new_card" ng-show="cc.payWithNew && cc.initiated">
        <div desktop class="go-back-to-cards-wrapper">
          <a href="javascript:void(0)" class="go-back-to-cards" ng-click="cc.payWithNew = false"
             ng-show="cc.stored.length > 0">
            <t>Return to saved cards</t>
          </a>
          <h4>
            <t>Add a new credit or debit card</t>
          </h4>
        </div>
        <div class="new-card-form">
          <table class="table-form-inline" cellpadding="0" cellspacing="0">
            <tr>
              <td class="field-card-number">
                <div class="field-wrapper">
                  <label class="icon card"></label>
                  <div id="obi-number" class="obick-card-number input"></div>
                </div>
              </td>
              <td class="field-card-expiry-month">
                <div class="field-wrapper">
                  <label class="icon expiry"></label>
                  <div class="input whitespace-nowrap">
                    <input class="flat inline input-date" type="text" name="expire_month" placeholder="{{'MM' | t}}"
                           maxlength="2" ng-model="credit_card.expire_month" required/>
                    <div class="date-slash">/</div>
                    <input class="flat inline input-date" type="text" name="expire_year" placeholder="{{'YY' | t}}"
                           maxlength="2" ng-model="credit_card.expire_year" required/>
                  </div>
                </div>
              </td>
              <td class="field-card-cvv">
                <div class="field-wrapper">
                  <label class="icon password"></label>
                  <div id="obi-cvv" class="obick-cvv input"></div>
                </div>
              </td>
              <td class="field-card-postal-code">
                <div class="field-wrapper">
                  <div class="input ml10">
                    <input class="flat" type="text" name="cardZipCode" required
                           placeholder="{{'Postal code' | t}}" ng-model="credit_card.cardZipCode"/>
                  </div>
                </div>
              </td>
            </tr>
          </table>
          <table class="table-form-inline" cellpadding="0" cellspacing="0">
            <tr>
              <td class="field-card">
                <div class="field-wrapper">
                  <label class="icon cardholder"></label>
                  <input class="flat" required type="text" name="first-name" maxlength="255"
                         placeholder="{{'First name' | t}}" ng-model="credit_card.first_name"/>
                </div>
              </td>

              <td class="field-card">
                <div class="field-wrapper">
                  <label class="icon cardholder"></label>
                  <input class="flat" required type="text" name="last-name" maxlength="255"
                         placeholder="{{'Last name' | t}}" ng-model="credit_card.last_name"/>
                </div>
              </td>
              <td class="field-card">
                <div class="field-wrapper">
                  <label class="icon email"></label>
                  <input class="flat" required type="text" name="email" maxlength="255"
                         placeholder="{{'Email' | t}}" ng-model="credit_card.email"/>
                </div>
              </td>
            </tr>
          </table>
          <table class="table-form-inline" cellpadding="0" cellspacing="0">
            <tr>
              <td class="field-card field-card--half">
                <div class="billing-country">
                  <div class="billing-country-group">
                    <div>
                      <div class="tp-dropdown__select"
                           tp-country-selector
                           selector-options="countrySelectorOptions"
                           default-country="defaultCountryCode"
                           click-on-select="selectCountry"
                           selector-label="{{'Select a country or region' | t}}"
                           dropdown-styles="{width: 320, zIndex: 1004}"
                           tabindex="0">
                      </div>
                    </div>
                  </div>
                </div>
              </td>
              <td class="field-card field-card--half">
                <div ng-if="!hasStates()" class="field-wrapper">
                  <label class="icon map-pin"></label>
                  <input class="flat" required type="text" name="state" maxlength="40"
                         placeholder="{{'State' | tc:'checkout.platform'}}" ng-model="state.billingData.stateCode"/>
                </div>
                <div ng-if="hasStates()" class="billing-country">
                  <div class="billing-country-group">
                    <div>
                      <div class="tp-dropdown__select"
                           tp-state-selector
                           selector-options="stateSelectorOptions"
                           click-on-select="selectState"
                           selector-label="{{'Select a state' | tc:'checkout.platform'}}"
                           dropdown-styles="{width: 320, zIndex: 1004}"
                           tabindex="0">
                      </div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          </table>
          <table class="table-form-inline" cellpadding="0" cellspacing="0">
            <tr>
              <td class="field-card field-card--half">
                <div class="field-wrapper">
                  <label class="icon city"></label>
                  <input class="flat" required type="text" name="city" maxlength="50"
                         placeholder="{{'City' | t}}" ng-model="credit_card.city"/>
                </div>
              </td>
              <td class="field-card">
                <div class="field-wrapper">
                  <label class=" icon road"></label>
                  <input class="flat" required type="text" name="address1" maxlength="100"
                         placeholder="{{'Street' | tc:'checkout.platform'}}" ng-model="credit_card.address1"/>
                </div>
              </td>

            </tr>
          </table>
          <div class="payment-system-condition">
            <span ng-if="!isSubscription()">
              <div class="custom-checkbox">
                <input type="checkbox" name="store_in_vault" ng-model="credit_card.store_in_vault"
                       id="remember-my-card-obi"/>
                <label for="remember-my-card-obi">
                  <t>Remember my card for future payments</t>
                </label>
              </div>
            </span>
            <span ng-if="isSubscription()">
              <input type="hidden" name="store_in_vault" ng-model="credit_card.store_in_vault"/>
            </span>
            <div class="custom-checkbox" ng-if="credit_card.store_in_vault">
              <input type="checkbox" name="defaultPaymentMethodId" ng-model="cc.defaultPaymentMethodId" id="default-payment-method-obi" />
              <label for="default-payment-method-obi"><t>Apply this payment method to all active subscriptions</t></label>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div consents-list></div>
    <div ng-transclude></div>
  </div>
</script>
<script type="text/ng-template" id="/widget/checkout/component/partials/datatrans-postfinance-form-component.html">
    <div ng-show="isPaymentMethod(DATATRANS_POSTFINANCE)">
        <div class="postfinance-payment-form row">
            <div class="errors"></div>
            <div class="postfinance-checkout-payment-form">
                <div ng-if="stored.length">
                    <span class="postfinance-checkout-title"><t context="checkout.platform">Your Postfinance cards</t></span>
                    <table class="payment-method-postfinance-checkout">
                        <tr class="payment-method-postfinance-checkout-row existing-upi" ng-repeat="upi in stored" ng-class="{'selected' : $parent.data.selectedUpi.id === upi.id}">
                            <td class="payment-method-postfinance-checkout-cell">
                                <input type="radio" name="stored_method" ng-model="$parent.data.selectedUpi" ng-value="upi" radio-track-by="id" />
                            </td>
                            <td class="payment-method-postfinance-checkout-cell" ng-if="!upi.isNew">
                                {{upi.number}}
                            </td>
                            <td class="payment-method-postfinance-checkout-cell" ng-if="upi.isNew">
                                <div class="postfinance-checkout-loggedin">
                                    <span class="postfinance-checkout-payerInfo">{{upi.payerInfo}}</span>
                                    <button ng-click="cancelNewAccount()" class="postfinance-checkout-cancel-button"><t>Cancel</t></button>
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
                <div ng-if="!data.newUpi">
                    <div class="pm-login-button postfinance-login-button" ng-click="startWithNewAccount()"></div>
                    <div class="add-new-account-msg"><t context="checkout.platform">Add new PostFinance card</t></div>
                </div>
            </div>

            <div consents-list></div>

            <div ng-if="canContinue()" ng-transclude></div>
        </div>

    </div>
</script>
<script type="text/ng-template" id="/widget/checkout/component/partials/datatrans-form-component.html">
    <div class="datatrans new-card-form" ng-show="isPaymentMethod(DATATRANS)">
        <div class="row">
            <div desktop class="cc_stored_cards" ng-show="!cc.payWithNew && cc.initiated">
                <div class="add-credit-card-wrapper">
                    <h4>
                        <t>Your credit and debit cards</t>
                    </h4>
                    <a href="javascript:void(0)" class="add-credit-card" ng-click="cc.payWithNew = true" ng-show="cc.stored.length > 0">
                        +
                        <t>Add a card</t>
                    </a>
                </div>
                <table class="payment-method-card" ng-show="cc.stored.length > 0">
                    <tr class="payment-method-card-row" ng-repeat="method in cc.stored"
                        ng-class="{'selected' : $parent.cc.selectedUpiId === method.id}">
                        <td class="payment-method-card-cell">
                            <input type="radio" name="stored_method" value="{{method.id}}" ng-model="$parent.cc.selectedUpiId"/>
                        </td>
                        <td class="payment-method-card-cell">
                            <div class="credit-card-{{method.identifier}}"></div>
                        </td>
                        <td class="payment-method-card-cell">
                            <div>{{method.type | tc:"checkout.platform"}} *{{method.ending_in}}</div>
                        </td>
                        <td class="payment-method-card-cell payment-method-card-cell-expiration">
                            <t>Expires in</t>
                            {{method.expire_month}}/{{method.expire_year}}
                        </td>
                        <td class="payment-method-card-cell payment-method-card-cell-default-payment">
                            <div class="payment-method-card-default-payment" ng-show="method.id === cc.defaultPaymentMethodId"><t>Default</t></div>
                            <button ng-hide="method.id === cc.defaultPaymentMethodId"
                                    ng-click="setAsDefaultPaymentMethod(method)"
                                    type="button"
                                    class="set-as-default-button">
                                <t>Set as default</t>
                            </button>
                        </td>
                    </tr>
                </table>
            </div>

            <div mobile class="cc_stored_cards" ng-show="cc.initiated">
                <table class="payment-method-card" ng-show="cc.stored.length > 0">
                    <tr class="payment-method-card-row" ng-repeat="method in cc.stored"
                        ng-class="{'selected' : $parent.cc.selectedUpiId === method.id && $parent.cc.payWithNew !== true}">
                        <td class="payment-method-card-cell">
                            <input type="radio" name="stored_method" value="{{method.id}}" ng-model="$parent.cc.selectedUpiId"
                                   ng-click="$parent.cc.payWithNew = false"/>
                        </td>
                        <td class="payment-method-card-cell">
                            <div class="credit-card-{{method.identifier}}"></div>
                        </td>
                        <td class="payment-method-card-cell">
                            <div>*{{method.ending_in}}</div>
                        </td>
                        <td class="payment-method-card-cell payment-method-card-cell-default-payment">
                            <div class="payment-method-card-default-payment" ng-show="method.id === cc.defaultPaymentMethodId"><t>Default</t></div>
                            <button ng-hide="method.id === cc.defaultPaymentMethodId"
                                    ng-click="setAsDefaultPaymentMethod(method)"
                                    type="button"
                                    class="set-as-default-button"
                            >
                                <t>Set as default</t>
                            </button>
                        </td>
                    </tr>
                    <tr class="payment-method-card-row" ng-class="{'selected' : $parent.cc.payWithNew === true}">
                        <td class="payment-method-card-cell">
                            <input type="radio" name="stored_method" ng-model="$parent.cc.payWithNew" ng-value="true"/>
                        </td>
                        <td class="payment-method-card-cell" colspan="2">
                            <t>Add a new card</t>
                        </td>
                    </tr>
                </table>
            </div>

            <div class="cc_new_card" ng-show="cc.payWithNew && cc.initiated">
                <div desktop class="go-back-to-cards-wrapper">
                    <a href="javascript:void(0)" class="go-back-to-cards" ng-click="cc.payWithNew = false" ng-show="cc.stored.length > 0">
                        <t>Return to saved cards</t>
                    </a>
                    <div>
                        <t>Add a new credit or debit card</t>
                    </div>
                </div>
                <form class="new-card-form" name="ccForm" role="form">
                    <table class="table-form-inline" cellpadding="0" cellspacing="0">
                        <tr>
                            <td class="field-card-number">
                                <div class="field-wrapper">
                                    <label class="icon card"></label>
                                    <div id="datatrans-card-number" class="datatrans-card-number input"></div>
                                </div>
                            </td>
                            <td class="field-card-expiry-month">
                                <div class="field-wrapper">
                                    <label class="icon expiry"></label>
                                    <div class="input whitespace-nowrap">
                                        <input class="flat inline input-date" type="text" name="expire_month" placeholder="{{'MM' | t}}"
                                               maxlength="2" ng-model="credit_card.expire_month" required/>
                                        <div class="date-slash">/</div>
                                        <input class="flat inline input-date" type="text" name="expire_year" placeholder="{{'YY' | t}}"
                                               maxlength="2" ng-model="credit_card.expire_year" required/>
                                    </div>
                                </div>
                            </td>
                            <td class="field-card-cvv">
                                <div class="field-wrapper">
                                    <label class="icon password"></label>
                                    <div id="datatrans-cvv" class="datatrans-cvv input"></div>
                                </div>
                            </td>
                            <td class="field-card-postal-code">
                                <div class="field-wrapper">
                                    <div class="input ml10">
                                        <input class="flat" type="text" name="cardZipCode" required
                                               placeholder="{{'ZIP / Postal code' | tc:'checkout.platform'}}" ng-model="credit_card.cardZipCode"/>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </table>
                    <div class="payment-system-condition">
                        <span ng-if="!isSubscription()">
                            <div class="custom-checkbox">
                                <input type="checkbox" name="store_in_vault" ng-model="credit_card.store_in_vault"
                                       id="remember-my-card-datatrans"/>
                                <label for="remember-my-card-datatrans">
                                    <t>Remember my card for future payments</t>
                                </label>
                            </div>
                        </span>
                        <span ng-if="isSubscription()">
                            <input type="hidden" name="store_in_vault" ng-model="credit_card.store_in_vault"/>
                        </span>
                        <div class="custom-checkbox" ng-if="credit_card.store_in_vault">
                            <input type="checkbox" name="defaultPaymentMethodId" ng-model="cc.defaultPaymentMethodId" id="default-payment-method-datatrans" />
                            <label for="default-payment-method-datatrans"><t>Apply this payment method to all active subscriptions</t></label>
                        </div>
                    </div>
                </form>
            </div>

            <div ng-transclude></div>
        </div>
        <div id="datatrans-input-cardnumber-cvv-common-style">
            font-family: "Graphik Web Regular", Helvetica, Arial, sans-serif;
            font-size: 16px;
            font-weight: normal;
            box-sizing: border-box;
            color: #333;
            background-color: #ffffff;
            transition: border linear 0.1s, box-shadow linear 0.1s;
            width: 100%;
            height: 40px;
        </div>
        <div id="datatrans-input-cardnumber-cvv-error-style">border: 1px solid #f00</div>
    </div>
</script>
<script type="text/ng-template" id="/widget/checkout/component/partials/obi-paypal-form-component.html">
    <div ng-show="isPaymentMethod(OBI_PAYPAL)">
        <div class="paypal-payment-form row">
            <div class="errors"></div>
            <div class="obi-paypal-payment-form">
                <div ng-if="stored.length">
                    <span class="obi-paypal-title"><t>Your PayPal accounts</t></span>
                    <table class="payment-method-obi-paypal">
                        <tr class="payment-method-obi-paypal-row existing-upi" ng-repeat="upi in stored" ng-class="{'selected' : $parent.data.selectedUpi.id === upi.id}">
                            <td class="payment-method-obi-paypal-cell">
                                <input type="radio" name="stored_method" ng-model="$parent.data.selectedUpi" ng-value="upi" radio-track-by="id" />
                            </td>
                            <td class="payment-method-obi-paypal-cell" ng-if="!upi.isNew">
                                {{upi.paypalEmail}}
                            </td>
                            <td class="payment-method-obi-paypal-cell" ng-if="upi.isNew">
                                <div class="obi-paypal-loggedin">
                                    <span class="obi-paypal-name"><t>PayPal</t></span>
                                    <span class="obi-paypal-email">{{upi.paypalEmail}}</span>
                                    <button ng-click="cancelNewAccount()" class="obi-paypal-cancel-button"><t>Cancel</t></button>
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
                <div ng-if="!data.newUpi" >
                    <div>
                        <h4>
                            <t>Select country to add new account</t>
                        </h4>
                    </div>
                    <div class="billing-country" id="obi-paypal-country-selector">
                        <div class="billing-country-group">
                            <div>
                                <div class="tp-dropdown__select"
                                     tp-country-selector
                                     selector-options="countrySelectorOptions"
                                     default-country="defaultCountryCode"
                                     click-on-select="selectCountry"
                                     selector-label="{{'Select a country or region' | t}}"
                                     dropdown-styles="{width: 320, zIndex: 1004}"
                                     tabindex="0">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="pm-login-button paypal-login-button" ng-class="{ 'obi-disabled': data.selectedCountry === null }" ng-click="addNewAccount()"></div>
                    <div class="add-new-account-msg"><t>Add new PayPal account</t></div>
                </div>
            </div>

            <div consents-list></div>

            <div ng-if="canContinue()" ng-transclude></div>
        </div>
    </div>
</script>
<script type="text/ng-template" id="/frontend/providers/common/credit-card-expire.html">
    <div class="cc-field-outer-wrap" data-e2e="cc_expire">
        <div class="cc-field-outer-wrap__left-placeholder">
            <t>Expiration</t>
        </div>
        <div class="cc-field-outer-wrap__field cc-field cc-field--expire" ng-class="{'cc-field--not-valid': !valid}">
            <label class="cc-field__icon cc-field__icon--expiration" ng-class="{'cc-field__icon--readonly': readonly}"></label>
            <div class="cc-field__input-wrap">
                <input type="text"
                       ng-class="{'cc-field__input--readonly': readonly}"
                       name="expire"
                       class="cc-field__input flat fs-block"
                       ng-model="text"
                       placeholder="{{ 'MM/YY' | t }}"
                       format-expiry-date
                       format-year="2"
                       ng-change="onChangeCallback(onChange, text)"
                       ng-readonly="readonly"
                       ng-required="required"
                       ng-disabled="disabled"
                />
            </div>
        </div>
    </div>
</script>

<script type="text/ng-template" id="/frontend/providers/common/dropdown-selector.html">
  <div class="dropdown-selector__select" ng-class="{'cc-field--not-valid': !valid}">
    <div ng-if="icon" class="cc-field__icon cc-field__icon--{{icon}}"></div>
    <div class="dropdown-selector__select-chevron-down cc-field__icon cc-field__icon--chevron-down"></div>
    <div class="cc-field__select-label" ng-class="{'cc-field__select-label--no-icon': icon}">
      <div ng-if="title.value"><span class="ellipsis">{{title.value}}</span></div>
      <div ng-if="!title.value" class="cc-field__select-placeholder"><span class="ellipsis">{{placeholder}}</span></div>
    </div>
  </div>
</script>

<script type="text/ng-template" id="/frontend/providers/common/dropdown-container.html">
  <div class="dropdown-selector__container">
    <ul class="dropdown-selector__list">
      <li class="dropdown-selector__item dropdown-selector__item-control">
        <input type="text"
               class=""
               ng-change="update()"
               ng-model="searchItemModel"
               auto-focus
               placeholder="{{'Search...' | t}}">
      </li>
      <li class="tp-dropdown__item tp-dropdown__item_divider"></li>
      <li>
        <div class="dropdown-selector__scrollable-list" style="overflow: auto">
          <div class="dropdown-selector__item" dynamic-html="list">
          </div>
        </div>
      </li>
    </ul>
  </div>
</script>


<script type="text/ng-template" id="/frontend/providers/common/credit-card-text-input.html">
    <div class="cc-field-outer-wrap">
        <div class="cc-field-outer-wrap__left-placeholder">
            {{ placeholder }}
        </div>
        <div class="cc-field-outer-wrap__field cc-field" ng-class="getFieldClass()">
            <label ng-if="icon || iconClass" class="cc-field__icon" ng-class="getIconClass()"></label>
            <div class="cc-field__input-wrap" ng-class="{'cc-field__input-wrap--no-icon': !(icon || iconClass)}">
                <input type="text"
                       class="cc-field__input flat {{className}} fs-block"
                       ng-class="{'cc-field__input--readonly': readonly}"
                       ng-model="text"
                       placeholder="{{ placeholder }}"
                       maxlength="{{ maxlength }}"
                       minlength="{{ minlength }}"
                       pn-min-length
                       ng-readonly="readonly"
                       ng-required="required"
                       ng-disabled="disabled"
                       ng-change="onChangeCallback(onChange)"
                       validation-rule="{{ validationRule }}"
                       format="{{ formatType }}"
                />
            </div>
        </div>
    </div>
</script>

<script type="text/ng-template" id="/frontend/providers/common/credit-card-number.html">
    <cc-text-input placeholder="'Card number' | t"
                   ng-model="text"
                   ng-readonly="readonly"
                   ng-required="required"
                   ng-disabled="disabled"
                   icon="'card'"
                   class="cc-field-wrap fs-block"
                   class-name="className"
                   on-change="onChange"
                   name="name"
                   data-e2e="cc_number"
                   valid="valid"
    ></cc-text-input>
</script>

<script type="text/ng-template" id="/frontend/providers/common/credit-card-cvv.html">
    <cc-text-input
            ng-readonly="readonly"
            ng-required="required"
            ng-disabled="disabled"
            placeholder="'CVV' | t"
            ng-model="text"
            icon="'cvv'"
            maxlength="5"
            class="cc-field-wrap fs-block"
            class-name="className"
            on-change="onChange"
            name="name"
            data-e2e="cc_cvv"
            valid="valid"
    ></cc-text-input>
</script>

<script type="text/ng-template" id="/frontend/providers/common/credit-card-postal-code.html">
    <cc-text-input placeholder="'Postal code' | t"
                   ng-readonly="readonly"
                   ng-required="required"
                   ng-disabled="disabled"
                   ng-model="text"
                   class="cc-field-wrap fs-block"
                   class-name="className"
                   on-change="onChange"
                   name="name"
                   icon="'zip-code'"
                   data-e2e="cc_zip"
                   valid="valid"
    ></cc-text-input>
</script>

<script type="text/ng-template" id="/frontend/providers/common/credit-card-holder.html">
    <cc-text-input placeholder="'Card holder' | t"
                   ng-model="text"
                   ng-readonly="readonly"
                   ng-required="required"
                   ng-disabled="disabled"
                   icon="'card-holder'"
                   class="cc-field-wrap fs-block"
                   class-name="className"
                   on-change="onChange"
                   name="name"
                   data-e2e="cc_holder"
                   valid="valid"
    ></cc-text-input>
</script>

<script type="text/ng-template" id="/frontend/providers/common/credit-card-email.html">
    <cc-text-input placeholder="'Email' | t"
                   ng-readonly="readonly"
                   ng-required="required"
                   ng-disabled="disabled"
                   ng-model="text"
                   class="cc-field-wrap fs-block"
                   class-name="className"
                   on-change="onChange"
                   name="name"
                   icon=""
                   data-e2e="cc_email"
                   valid="valid"
    ></cc-text-input>
</script>

<script type="text/ng-template" id="/frontend/providers/common/credit-card-phone-number.html">
    <cc-text-input placeholder="'Phone number' | t"
                   ng-readonly="readonly"
                   ng-required="required"
                   ng-disabled="disabled"
                   ng-model="text"
                   class="cc-field-wrap fs-block"
                   class-name="className"
                   on-change="onChange"
                   name="name"
                   validation-rule="validationRule"
                   icon="'phone-number'"
                   data-e2e="cc_phone"
                   valid="valid"
    ></cc-text-input>
</script>

<script type="text/ng-template" id="/frontend/providers/common/credit-card-custom-field.html">
    <cc-text-input placeholder="placeholder"
                   ng-model="text"
                   ng-readonly="readonly"
                   ng-required="required"
                   ng-disabled="disabled"
                   class="cc-field-wrap fs-block"
                   class-name="className"
                   on-change="onChange"
                   name="name"
                   icon="icon"
                   data-e2e="cc_custom"
                   valid="valid"
    ></cc-text-input>
</script>

<script type="text/ng-template" id="/frontend/providers/common/credit-card-identification-type-component.html">
  <dropdown-selector
    items="identificationTypes"
    allowed-items="allowedIdentificationTypes"
    callback-fn="onIdentificationTypeSelect"
    title="title"
    placeholder="placeholder"
    icon="icon"
    valid="valid"
  >
  </dropdown-selector>
</script>

<script type="text/ng-template" id="/frontend/providers/common/credit-card-country-component.html">
  <dropdown-selector
    items="countries"
    callback-fn="onCountrySelect"
    title="title"
    placeholder="placeholder"
    icon="icon"
    valid="valid"
    >
  </dropdown-selector>
</script>

<script type="text/ng-template" id="/frontend/providers/common/credit-card-state-component.html">
  <div ng-if="isDropdownShown">
    <dropdown-selector
      items="states"
      callback-fn="onStateSelect"
      title="title"
      placeholder="placeholder"
      icon="icon"
      valid="valid"
    >
    </dropdown-selector>
  </div>

  <div ng-show="!isDropdownShown">
    <cc-text-input
      placeholder="placeholder"
      ng-model="text"
      ng-disabled="ngDisabled"
      ng-required="ngRequired"
      ng-readonly="ngReadonly"
      valid="valid"
      icon="icon"
      name="'state'">
    </cc-text-input>
  </div>
</script>

<script type="text/ng-template" id="/frontend/providers/common/credit-card-city-component.html">
  <div ng-show="isDropdownShown">
    <dropdown-selector
      items="cities"
      callback-fn="onCitySelect"
      position="'top'"
      placeholder="placeholder"
      title="title"
      icon="icon"
      valid="valid"
    >
    </dropdown-selector>
  </div>

  <div ng-show="!isDropdownShown">
    <cc-text-input placeholder="placeholder"
                   ng-model="text"
                   ng-disabled="ngDisabled"
                   ng-required="ngRequired"
                   ng-readonly="ngReadonly"
                   icon="icon"
                   valid="valid"
                   name="'city'">
    </cc-text-input>
  </div>
</script>

<script type="text/ng-template" id="/frontend/providers/common/credit-card-dropdown-component.html">
  <dropdown-selector
    items="items"
    callback-fn="onElementSelect"
    title="title"
    placeholder="placeholder"
    icon="icon"
    valid="valid"
  >
  </dropdown-selector>
</script>

<script type="text/ng-template" id="/frontend/providers/components/datatransgooglepay/checkout/component.shtml">
<div class="datatransgooglepay-wrapper new-card-form">
    <div class="row">
        <div class="googlepay-checkout-payment-form" ng-class="{'googlepay-checkout-payment-form--custom-indent': isIndentRequired}">
            <div ng-show="isStoredPaymentsScreenShown()">
                <div class="add-credit-card-wrapper">
                    <h4>
                        <t>Your Google Pay cards</t>
                    </h4>
                    <a href="javascript:void(0)" class="add-credit-card" ng-click="gotoNewPaymentScreen()"
                       ng-show="stored.length > 0">
                        +
                        <t>Add a new card</t>
                    </a>
                </div>
                <table ng-if="stored.length > 0" class="googlepay-table">
                    <tr class="googlepay-table-row" ng-repeat="upi in stored">
                        <td class="googlepay-table-cell googlepay-table-cell--radio">
                            <input type="radio"
                                   id="radio-{{upi.id}}"
                                   name="stored_method"
                                   ng-model="data.selectedUpi"
                                   ng-change="onUpiChange(upi)"
                                   ng-value="upi"
                                   class="googlepay-radio"/>
                        </td>
                        <td class="googlepay-table-cell googlepay-table-cell--short-logo">
                            <div class="datatrans-gpay-short-logo"></div>
                        </td>
                        <td class="googlepay-table-cell">
                            <label for="radio-{{upi.id}}">
                                <t context="checkout.platform">{{upi.display_name}}</t>
                            </label>
                        </td>
                        <td class="googlepay-table-cell payment-method-card-cell-expiration">
                            <t>Expires in</t>
                            {{upi.expire_month}}/{{upi.expire_year}}
                        </td>
                        <td class="payment-method-card-cell payment-method-card-cell--default-payment">
                            <div class="payment-method-card-default-payment"
                                 ng-show="upi.id === data.defaultPaymentMethodId">
                                <t>Default</t>
                            </div>
                            <button ng-hide="upi.id === data.defaultPaymentMethodId"
                                    ng-click="setAsDefault(upi)"
                                    type="button"
                                    class="set-as-default-button"
                            >
                                <t>Set as default</t>
                            </button>
                        </td>
                    </tr>
                </table>
            </div>
            <div ng-show="isNewPaymentScreenShown()" class="googlepay-add-new-account">
                <div desktop class="go-back-to-cards-wrapper">
                    <a href="javascript:void(0)" class="go-back-to-cards" ng-click="gotoStoredPaymentsScreen()"
                       ng-show="isReturnToStoredPaymentsShown()">
                        <t>Return to saved cards</t>
                    </a>
                    <h4>
                        <t>Add a new Google Pay card</t>
                    </h4>
                </div>
                <div ng-if="!data.newUpi" class="datatrans-gpay-account-wrapper">
                    <div class="hint">
                        <div class="googleplay-hint-container">
                            <t>Add Google Pay as a payment account to pay for your purchases and take the protection of Datatrans with you</t>
                        </div>
                    </div>

                    <div id="googlepay-pay-button"
                         class="pm-login-button googlepay-login-button-wrapper"
                         data-e2e="googlepay-login-button">
                    </div>
                </div>
                <table ng-if="data.newUpi" class="googlepay-table">
                    <tr class="googlepay-table-row">
                        <td class="googlepay-table-cell googlepay-table-cell--radio">
                            <input type="radio"
                                   id="gpay-new-payment-method"
                                   class="googlepay-radio"
                                   name="stored_method"
                                   ng-model="data.selectedUpi"
                                   ng-value="data.newUpi"
                            />
                        </td>
                        <td class="googlepay-table-cell googlepay-table-cell--short-logo">
                            <div class="datatrans-gpay-short-logo"></div>
                        </td>
                        <td class="googlepay-table-cell">
                            <label for="gpay-new-payment-method">
                                <t context="checkout.platform">{{data.newUpi.display_name}}</t>
                            </label>
                        </td>
                        <td class="googlepay-table-cell">
                            <div class="googlepay-logged-in">
                                <div ng-click="cancelAndInitNewAccount()" class="googlepay-cancel-button">
                                    <t>Cancel</t>
                                </div>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
        </div>

        <div class="manage-payment-method-wrapper" ng-show="state.payWithNew">
            <div ng-if="!isSubscription() && isPaymentTerm()">
                <div class="custom-checkbox">
                    <input type="checkbox" name="store_in_vault" ng-model="data.store_in_vault"
                           id="remember-my-card-datatrans-gpay"/>
                    <label for="remember-my-card-datatrans-gpay">
                        <t>Remember my card for future payments</t>
                    </label>
                </div>
            </div>
            <div ng-if="isSubscription()">
                <input type="hidden" name="store_in_vault" ng-model="data.store_in_vault"/>
            </div>
            <div class="custom-checkbox" ng-if="data.store_in_vault">
                <input type="checkbox" name="defaultPaymentMethodId" ng-model="data.defaultPaymentMethodId" id="default-payment-method-cybersource" />
                <label for="default-payment-method-cybersource"><t>Apply this payment method to all active subscriptions</t></label>
            </div>
        </div>

        <div consents-list></div>
        <div class="footer-modal" ng-show="canContinue()">
            <div class="auto-renew-purchase" ng-show="isSelectedTermAutoRenewChoiceAvailable()">
                <input class="auto-renew-purchase-checkbox" type="checkbox" ng-model="input.autoRenew"
                       id="auto_renew"/>
                <label class="auto-renew-purchase-label" for="auto_renew">
                    <t>Automatically renew my subscription when the time comes.</t>
                </label>
            </div>
            <div ng-show="isConfirmStepEnabled()" class="complete-purchase-button"
                 data-e2e="googlepay-complete-purchase-button" goto-confirmation-button
                 title="{{'Complete Purchase' | t}}"></div>
            <div ng-show="!isConfirmStepEnabled()" class="complete-purchase-button"
                 data-e2e="googlepay-complete-purchase-button" complete-purchase-button
                 title="{{'Complete Purchase' | t}}"></div>
        </div>
    </div>
</div>

</script>

<script type="text/ng-template" id="/frontend/providers/components/datatranstwint/checkout/component.shtml">
<div class="datatranstwint-wrapper new-card-form">
  <div class="row">
    <div class="twint-checkout-payment-form" ng-class="{'twint-checkout-payment-form--custom-indent': isIndentRequired}">
      <div ng-show="isStoredPaymentsScreenShown()">
        <div class="twint-title">
          <a href="javascript:void(0)" class="add-credit-card" ng-click="gotoNewPaymentScreen()"
             ng-show="stored.length > 0">
            +
            <t>Add a new authorization</t>
          </a>
          <h4>
            <t>Your active authorizations</t>
          </h4>
        </div>
        <div ng-if="stored.length">
          <table class="twint-table">
            <tr class="twint-table-row" ng-repeat="upi in stored"
                ng-class="{'selected' : $parent.data.selectedUpi.id === upi.id, 'twint-table-row--no-border': data.newUpi}">
              <td class="twint-table-cell twint-table-cell--radio">
                <input type="radio"
                       id="radio-{{upi.id}}"
                       name="stored_method"
                       ng-model="$parent.data.selectedUpi"
                       ng-change="onUpiChange(upi)"
                       ng-value="upi"
                       radio-track-by="id"
                       class="twint-radio" />
              </td>
              <td class="twint-table-cell">
                <label for="radio-{{upi.id}}" class="twint-table-cell-label">
                  <t context="checkout.platform">Authorization on {{upi.create_date | date: 'short'}}</t>
                </label>
              </td>
              <td class="payment-method-card-cell payment-method-card-cell--default-payment">
                <div class="payment-method-card-default-payment"
                     ng-show="upi.id === data.defaultPaymentMethodId">
                  <t>Default</t>
                </div>
                <button ng-hide="upi.id === data.defaultPaymentMethodId"
                        ng-click="setAsDefault(upi)"
                        type="button"
                        class="set-as-default-button"
                >
                  <t>Set as default</t>
                </button>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div ng-show="isNewPaymentScreenShown()">
        <div class="twint-title">
          <a href="javascript:void(0)" class="go-back-to-cards" ng-click="gotoStoredPaymentsScreen()"
             ng-show="isReturnToStoredPaymentsShown()">
            <t>Return to saved authorizations</t>
          </a>
          <h4>
            <t>Your active authorizations</t>
          </h4>
        </div>

        <div ng-if="!data.newUpi">
          <div class="hint">
            <t>Please continue to find QR code to scan to provide authorization.</t>
          </div>
          <button class="pm-login-button twint-login-button" ng-click="startWithNewAccount()"
                  data-e2e="twint-login-button">
            <t context="checkout.platform">Payment authorization</t>
          </button>
        </div>

        <div ng-if="data.newUpi">
          <table class="twint-table">
            <tr class="twint-table-row">
              <td class="twint-table-cell twint-table-cell--radio">
                <input type="radio"
                       id="twint-new-payment-method"
                       class="twint-radio"
                       name="new_upi"
                       ng-model="data.selectedUpi"
                       ng-value="data.newUpi"
                />
              </td>
              <td class="twint-table-cell">
                <label for="twint-new-payment-method" class="twint-table-cell-label">
                  <t context="checkout.platform">Authorization on {{data.newUpi.create_date | date: 'short'}}</t>
                </label>
              </td>
              <td class="twint-table-cell">
                <div class="twint-logged-in">
                  <div ng-click="cancelNewAccount()" class="twint-cancel-button">
                    <t>Cancel</t>
                  </div>
                </div>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>

    <div class="manage-payment-method-wrapper" ng-show="isNewPaymentScreenShown()">
        <div ng-if="!isSubscription()">
            <div class="custom-checkbox">
                <input type="checkbox" name="store_in_vault" ng-model="data.store_in_vault"
                       id="remember-my-card-twint"/>
                <label for="remember-my-card-twint">
                    <t>Remember my card for future payments</t>
                </label>
            </div>
        </div>
        <div ng-if="isSubscription()">
          <input type="hidden" name="store_in_vault" ng-model="data.store_in_vault"/>
        </div>
        <div class="custom-checkbox" ng-if="data.store_in_vault">
          <input type="checkbox" name="isDefaultPaymentMethodApplied" ng-model="data.isDefaultPaymentMethodApplied" id="default-payment-method-twint" />
          <label for="default-payment-method-twint"><t>Apply this payment method to all active subscriptions</t></label>
        </div>
    </div>

    <div consents-list></div>
    <div class="footer-modal" ng-show="stored.length > 0">
      <div class="auto-renew-purchase" ng-show="isSelectedTermAutoRenewChoiceAvailable()">
        <input class="auto-renew-purchase-checkbox" type="checkbox" ng-model="input.autoRenew"
               id="auto_renew"/>
        <label class="auto-renew-purchase-label" for="auto_renew">
          <t>Automatically renew my subscription when the time comes.</t>
        </label>
      </div>
      <div ng-show="isConfirmStepEnabled()" class="complete-purchase-button"
           data-e2e="twint-complete-purchase-button" goto-confirmation-button
           title="{{'Complete Purchase' | t}}"></div>
      <div ng-show="!isConfirmStepEnabled()" class="complete-purchase-button"
           data-e2e="twint-complete-purchase-button" complete-purchase-button
           title="{{'Complete Purchase' | t}}"></div>
    </div>
  </div>
</div>

</script>

<script type="text/ng-template" id="/frontend/providers/components/payuindianb/checkout/component.shtml">
<div class="payu-india-netbanking-wrapper new-card-form">
    <div class="row">
        <div desktop class="cc_stored_cards" ng-show="!cc.payWithNew && cc.initiated">
            <div class="add-credit-card-wrapper">
                <h4>
                    <t>Your bank accounts</t>
                </h4>
                <a href="javascript:void(0)" class="add-credit-card" ng-click="cc.payWithNew = true"
                   ng-show="cc.stored.length > 0">
                    +
                    <t>Add a bank account</t>
                </a>
            </div>
            <table class="payment-method-card" ng-show="cc.stored.length > 0">
                <tr class="payment-method-card-row" ng-repeat="method in cc.stored"
                    ng-class="{'selected' : $parent.cc.selectedUpiId == method.id}">
                    <td class="payment-method-card-cell">
                        <input type="radio" name="stored_method" value="{{method.id}}"
                               ng-model="$parent.cc.selectedUpiId"/>
                    </td>
                    <td class="payment-method-card-cell">
                        <div>{{method.type | tc:"checkout.platform"}}</div>
                    </td>
                    <td class="payment-method-card-cell">
                        <div>*{{method.ending_in}} - <t>transaction max amount</t> {{method.txMaxAmount}}</div>
                    </td>
                </tr>
            </table>
        </div>

        <div mobile class="cc_stored_cards" ng-show="cc.initiated">
            <table class="payment-method-card" ng-show="cc.stored.length > 0">
                <tr class="payment-method-card-row" ng-repeat="method in cc.stored"
                    ng-class="{'selected' : $parent.cc.selectedUpiId == method.id && $parent.cc.payWithNew != true}">
                    <td class="payment-method-card-cell">
                        <input type="radio" name="stored_method" value="{{method.id}}"
                               ng-model="$parent.cc.selectedUpiId"
                               ng-click="$parent.cc.payWithNew = false"/>
                    </td>
                    <td class="payment-method-card-cell">
                        <div class="credit-card-{{method.identifier}}"></div>
                    </td>
                </tr>
                <tr class="payment-method-card-row" ng-class="{'selected' : $parent.cc.payWithNew == true}">
                    <td class="payment-method-card-cell">
                        <input type="radio" name="stored_method" ng-model="$parent.cc.payWithNew" ng-value="true"/>
                    </td>
                    <td class="payment-method-card-cell" colspan="2">
                        <t>Add a new bank account</t>
                    </td>
                </tr>
            </table>
        </div>

        <div class="cc_new_card" ng-show="cc.payWithNew && cc.initiated">
            <div desktop class="go-back-to-cards-wrapper">
                <a href="javascript:void(0)" class="go-back-to-cards" ng-click="cc.payWithNew = false"
                   ng-show="cc.stored.length > 0">
                    <t>Return to saved bank accounts</t>
                </a>
                <h4>
                    <t>Payment details</t>
                </h4>
            </div>
            <form class="new-card-form" name="ccForm" role="form">
                <div class="controls">
                    <div class="cc-field-outer-wrap pse-style">
                        <div class="cc-field-outer-wrap__field cc-field">
                            <label class="cc-field__icon cc-field__icon--bank"></label>
                            <select id="payu-nb-code"
                                    class="cc-fields-layout__select-field"
                                    ng-model="cc.bankCode"
                                    ng-options="o.name for o in bankCodes track by o.code"
                                    required>
                                <option value="" disabled selected style="display: none;">{{'Bank' | t}}</option>
                            </select>
                        </div>
                    </div>
                    <div class="cc-field-outer-wrap pse-style">
                        <div class="cc-field-outer-wrap__field cc-field">
                            <label class="cc-field__icon cc-field__icon--identification-type"></label>
                            <select id="payu-nb-type"
                                    ng-model="cc.accType"
                                    class="cc-fields-layout__select-field"
                                    required>
                                <option value="" disabled selected>{{'Account type' | t}}</option>
                                <option value="SAVINGS">{{'Savings' | t}}</option>
                                <option value="CURRENT">{{'Current' | t}}</option>
                        </select>
                        </div>
                    </div>
                    <div class="cc-field-outer-wrap pse-style">
                        <div class="cc-field-outer-wrap__field cc-field">
                            <label class="cc-field__icon cc-field__icon--client"></label>
                            <input id="payu-nb-acc-name" type="text"
                                   class="custom-input-style cc-field__input flat fs-block"
                                   ng-model="cc.accName"
                                   placeholder="Account name"/>
                        </div>
                    </div>
                    <div class="cc-field-outer-wrap pse-style">
                        <div class="cc-field-outer-wrap__field cc-field">
                            <label class="cc-field__icon cc-field__icon--national-id"></label>
                            <input id="payu-nb-acc-number" type="text"
                                   class="custom-input-style cc-field__input flat fs-block"
                                   ng-model="cc.accNumber"
                                   placeholder="Account number"/>
                        </div>
                    </div>
                </div>
                <div class="payment-system-condition">
                    <span ng-if="!isSubscription()">
                        <div class="custom-checkbox">
                            <input type="checkbox" name="store_in_vault" ng-model="credit_card.store_in_vault"
                                   id="rermber-my-card1-payu-india-nb"/>
                            <label for="rermber-my-card1-payu-india-nb">
                                <t>Remember my bank account for future payments</t>
                            </label>
                        </div>
                    </span>
                    <span ng-if="isSubscription()">
                        <input type="hidden" name="store_in_vault" ng-model="credit_card.store_in_vault"/>
                    </span>
                    <div class="custom-checkbox" ng-if="credit_card.store_in_vault">
                        <input type="checkbox" name="defaultPaymentMethodId" ng-model="cc.defaultPaymentMethodId"
                               id="default-payment-method-payu-india-nb"/>
                        <label for="default-payment-method-payu-india-nb">
                            <t>Apply this payment method to all active subscriptions</t>
                        </label>
                    </div>
                </div>
            </form>
        </div>
        <div consents-list></div>
        <div class="footer-modal">
            <div class="auto-renew-purchase" ng-show="isSelectedTermAutoRenewChoiceAvailable()">
                <input class="auto-renew-purchase-checkbox" type="checkbox" ng-model="input.autoRenew"
                       id="auto_renew"/>
                <label class="auto-renew-purchase-label" for="auto_renew">
                    <t>Automatically renew my subscription when the time comes.</t>
                </label>
            </div>
            <div ng-show="isConfirmStepEnabled()" class="complete-purchase-button" goto-confirmation-button
                 title="{{'Complete Purchase' | t}}"></div>
            <div ng-show="!isConfirmStepEnabled()" class="complete-purchase-button" complete-purchase-button
                 title="{{'Complete Purchase' | t}}"></div>
        </div>
    </div>
</div>

</script>

<script type="text/ng-template" id="/frontend/providers/components/applepaystripe/checkout/component.shtml">
<div ng-if="isPasswordlessApplePayUsed">
    <button type="button"
            class="apple-pay-button"
            ng-click="initiatePasswordlessPurchase()"
            ng-class="{'apple-pay-button--disabled': !isStripeApplePayEnabled}"
    >
        <t>Buy with</t>
        <svg class="apple-pay-button__logo" width="51" height="20" viewBox="0 0 51 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.258 2.579c-.594.675-1.544 1.208-2.494 1.132-.119-.914.346-1.884.89-2.484C8.248.533 9.287.038 10.13 0c.099.951-.287 1.884-.871 2.579zm.86 1.313c-1.375-.077-2.553.751-3.206.751-.663 0-1.663-.713-2.751-.694A4.09 4.09 0 00.707 5.966C-.778 8.42.32 12.056 1.756 14.053c.703.99 1.544 2.075 2.652 2.036 1.05-.038 1.465-.656 2.732-.656 1.277 0 1.643.656 2.751.637 1.148-.019 1.87-.99 2.573-1.979.802-1.122 1.129-2.217 1.148-2.274-.02-.019-2.216-.828-2.236-3.263-.02-2.036 1.732-3.007 1.81-3.064-.989-1.408-2.533-1.56-3.067-1.598zm7.948-2.76v14.834h2.395v-5.072h3.316c3.028 0 5.156-1.998 5.156-4.89 0-2.893-2.088-4.872-5.077-4.872h-5.79zm2.395 1.941h2.761c2.079 0 3.266 1.066 3.266 2.94 0 1.875-1.187 2.95-3.276 2.95h-2.75v-5.89zM33.307 16.08c1.505 0 2.9-.733 3.534-1.893h.05v1.779h2.216V8.582c0-2.14-1.781-3.52-4.523-3.52-2.543 0-4.424 1.399-4.493 3.32h2.157c.179-.913 1.06-1.512 2.267-1.512 1.465 0 2.286.656 2.286 1.865v.818l-2.989.171c-2.78.162-4.285 1.256-4.285 3.159 0 1.922 1.554 3.197 3.78 3.197zm.644-1.76c-1.277 0-2.089-.59-2.089-1.494 0-.933.782-1.475 2.277-1.56l2.662-.162v.837c0 1.39-1.227 2.379-2.85 2.379zM42.066 20c2.336 0 3.434-.856 4.395-3.454l4.206-11.341h-2.435l-2.82 8.763h-.05l-2.82-8.763h-2.505l4.058 10.799-.218.656c-.366 1.113-.96 1.542-2.019 1.542-.188 0-.554-.02-.702-.038v1.779c.138.038.732.057.91.057z" fill="#fff"/>
        </svg>
    </button>
</div>
<div ng-if="!isPasswordlessApplePayUsed" class="stripe-applepay-wrapper new-card-form">
    <div class="row">
        <div class="footer-modal">
            <div class="auto-renew-purchase" ng-show="isSelectedTermAutoRenewChoiceAvailable()">
                <input class="auto-renew-purchase-checkbox" type="checkbox" ng-model="input.autoRenew"
                       id="auto_renew"/>
                <label class="auto-renew-purchase-label" for="auto_renew">
                    <t>Automatically renew my subscription when the time comes.</t>
                </label>
            </div>
            <div>
                <a ng-click="initiatePurchase()" class="button big stripe-applepay-complete-purchase"
                   href="javascript:void(0)" ng-class="{'disabled': isStripeApplePayEnabled !== true}">&nbsp;</a>
            </div>
        </div>
    </div>
</div>

</script>

<script type="text/ng-template" id="/frontend/providers/components/wirecard/checkout/component.shtml">
<div class="wirecard-wrapper new-card-form">
    <div class="row">
        <!--TODO - find a way to isolate this component and logic outside, in checkout, or at least make components-->
        <div desktop class="cc_stored_cards" ng-show="!cc.payWithNew && cc.initiated">
            <div class="add-credit-card-wrapper">
                <h4>
                    <t>Your credit and debit cards</t>
                </h4>
                <a href="javascript:void(0)" class="add-credit-card" ng-click="cc.payWithNew = true"
                   ng-show="cc.stored.length > 0">
                    +
                    <t>Add a card</t>
                </a>
            </div>
            <table class="payment-method-card" ng-show="cc.stored.length > 0">
                <tr class="payment-method-card-row" ng-repeat="method in cc.stored"
                    ng-class="{'selected' : $parent.cc.selectedUpiId == method.id}">
                    <td class="payment-method-card-cell">
                        <input type="radio" name="stored_method" value="{{method.id}}"
                               ng-model="$parent.cc.selectedUpiId"/>
                    </td>
                    <td class="payment-method-card-cell">
                        <div class="credit-card-{{method.identifier}}"></div>
                    </td>
                    <td class="payment-method-card-cell">
                        <div>{{method.type | tc:"checkout.platform"}} *{{method.ending_in}}</div>
                    </td>
                    <td class="payment-method-card-cell">
                        <t>Expires in</t>
                        {{method.expire_month}}/{{method.expire_year}}
                    </td>
                </tr>
            </table>
        </div>

        <div mobile class="cc_stored_cards" ng-show="cc.initiated">
            <table class="payment-method-card" ng-show="cc.stored.length > 0">
                <tr class="payment-method-card-row" ng-repeat="method in cc.stored"
                    ng-class="{'selected' : $parent.cc.selectedUpiId == method.id && $parent.cc.payWithNew != true}">
                    <td class="payment-method-card-cell">
                        <input type="radio" name="stored_method" value="{{method.id}}"
                               ng-model="$parent.cc.selectedUpiId"
                               ng-click="$parent.cc.payWithNew = false"/>
                    </td>
                    <td class="payment-method-card-cell">
                        <div class="credit-card-{{method.identifier}}"></div>
                    </td>
                    <td class="payment-method-card-cell">
                        <div>*{{method.ending_in}}</div>
                    </td>
                </tr>
                <tr class="payment-method-card-row" ng-class="{'selected' : $parent.cc.payWithNew == true}">
                    <td class="payment-method-card-cell">
                        <input type="radio" name="stored_method" ng-model="$parent.cc.payWithNew" ng-value="true"/>
                    </td>
                    <td class="payment-method-card-cell" colspan="2">
                        <t>Add a new card</t>
                    </td>
                </tr>
            </table>
        </div>

        <div class="cc_new_card" ng-show="cc.payWithNew && cc.initiated">
            <div desktop class="go-back-to-cards-wrapper">
                <a href="javascript:void(0)" class="go-back-to-cards" ng-click="cc.payWithNew = false"
                   ng-show="cc.stored.length > 0">
                    <t>Return to saved cards</t>
                </a>
                <h4>
                    <t>Add a new credit or debit card</t>
                </h4>
            </div>
            <form class="new-card-form" name="ccForm" role="form">
                <div id="seamless-form-target" style="height: 400px;"></div>
                <div class="payment-system-condition">
                        <span ng-if="!isSubscription()">
                            <div class="custom-checkbox">
                                <input type="checkbox" name="store_in_vault" ng-model="credit_card.store_in_vault"
                                       id="rermber-my-card1-wirecard"/>
                                <label for="rermber-my-card1-wirecard">
                                    <t>Remember my card for future payments</t>
                                </label>
                            </div>
                        </span>
                    <span ng-if="isSubscription()">
                            <input type="hidden" name="store_in_vault" ng-model="credit_card.store_in_vault"/>
                        </span>
                    <div class="custom-checkbox" ng-if="credit_card.store_in_vault">
                        <input type="checkbox" name="defaultPaymentMethodId" ng-model="cc.defaultPaymentMethodId" id="default-payment-method-wirecard" />
                        <label for="default-payment-method-wirecard"><t>Apply this payment method to all active subscriptions</t></label>
                    </div>
                </div>
            </form>
        </div>
        <div consents-list></div>
        <div class="footer-modal">
            <div class="auto-renew-purchase" ng-show="isSelectedTermAutoRenewChoiceAvailable()">
                <input class="auto-renew-purchase-checkbox" type="checkbox" ng-model="input.autoRenew"
                       id="auto_renew"/>
                <label class="auto-renew-purchase-label" for="auto_renew">
                    <t>Automatically renew my subscription when the time comes.</t>
                </label>
            </div>
            <div ng-show="isConfirmStepEnabled()" class="complete-purchase-button" goto-confirmation-button
                 title="{{'Complete Purchase' | t}}"></div>
            <div ng-show="!isConfirmStepEnabled()" class="complete-purchase-button" complete-purchase-button
                 title="{{'Complete Purchase' | t}}"></div>
        </div>
    </div>
</div>
</script>

<script type="text/ng-template" id="/frontend/providers/components/payucolombiapse/checkout/component.shtml">
<div class="payu-colombia-pse-wrapper new-card-form">
    <div class="row">
        <div class="cc_new_card" ng-show="cc.payWithNew && cc.initiated">
            <div desktop class="go-back-to-cards-wrapper">
                <h4>
                    <t>Payment details</t>
                </h4>
            </div>
            <form class="new-card-form" name="ccForm" role="form">
                <dynamic-base-inputs-component name="providerName"
                                             credit-card="credit_card"></dynamic-base-inputs-component>
                <div class="payment-system-condition"/>
            </form>
        </div>
        <div consents-list></div>
        <div class="footer-modal">
            <div ng-show="isConfirmStepEnabled()" class="complete-purchase-button" goto-confirmation-button
                 title="{{'Complete Purchase' | t}}"></div>
            <div ng-show="!isConfirmStepEnabled()" class="complete-purchase-button" complete-purchase-button
                 title="{{'Complete Purchase' | t}}"></div>
        </div>
    </div>
</div>

</script>

<script type="text/ng-template" id="/frontend/providers/components/payucolombiapse/common/baseTemplate.shtml">
<div class="cc-fields-layout">
  <div class="cc-fields-layout__field cc-fields-layout__bank">
    <credit-card-dropdown-component ng-model="credit_card.bank.value"
                                    on-element-select="credit_card.bank.onElementSelect"
                                    ng-disabled="credit_card.bank.disabled"
                                    ng-required="credit_card.bank.required"
                                    ng-readonly="credit_card.bank.readonly"
                                    placeholder="'Bank' | t"
                                    valid="credit_card.bank.valid"
                                    items="credit_card.bank.items"
                                    title="credit_card.bank.title"
                                    data-e2e="cc_bank"
                                    icon="'bank'"
                                    name="'bank'">
    </credit-card-dropdown-component>
  </div>
  <div class="cc-fields-layout__field cc-fields-layout__user-type">
    <credit-card-dropdown-component ng-model="credit_card.userType.value"
                                    on-element-select="credit_card.userType.onElementSelect"
                                    ng-disabled="credit_card.userType.disabled"
                                    ng-required="credit_card.userType.required"
                                    ng-readonly="credit_card.userType.readonly"
                                    placeholder="'User type' | t"
                                    valid="credit_card.userType.valid"
                                    items="credit_card.userType.items"
                                    title="credit_card.userType.title"
                                    data-e2e="cc_userType"
                                    icon="'client'"
                                    name="'userType'">
    </credit-card-dropdown-component>
  </div>
  <div class="cc-fields-layout__flex-row">
    <div class="cc-fields-layout__field cc-fields-layout__identification-type">
      <credit-card-identification-type-component ng-model="credit_card.identificationType.value"
                                                 on-identification-type-select="credit_card.identificationType.onIdentificationTypeSelect"
                                                 ng-disabled="credit_card.identificationType.disabled"
                                                 ng-required="credit_card.identificationType.required"
                                                 ng-readonly="credit_card.identificationType.readonly"
                                                 placeholder="'Identification type' | t"
                                                 valid="credit_card.identificationType.valid"
                                                 is-dropdown-shown="credit_card.identificationType.isDropdownShown"
                                                 identification-types="credit_card.identificationType.items"
                                                 title="credit_card.identificationType.title"
                                                 data-e2e="cc_identificationType"
                                                 icon="'identification-type'"
                                                 name="'identificationType'">
      </credit-card-identification-type-component>
    </div>
    <div class="cc-fields-layout__field cc-fields-layout__identification-number">
      <cc-text-input placeholder="'Identification number' | t"
                     ng-model="credit_card.identificationNumber.value"
                     ng-readonly="credit_card.identificationNumber.readonly"
                     ng-required="credit_card.identificationNumber.required"
                     ng-disabled="credit_card.identificationNumber.disabled"
                     icon="'national-id'"
                     class="cc-field-wrap fs-block"
                     class-name="className"
                     on-change="credit_card.identificationNumber.onChangeCallback"
                     name="'identificationNumber'"
                     data-e2e="cc_identificationNumber"
                     valid="credit_card.identificationNumber.valid">
      </cc-text-input>
    </div>
  </div>
  <div class="cc-fields-layout__flex-row">
    <div class="cc-fields-layout__field cc-fields-layout__first-name">
      <cc-text-input placeholder="'First name' | t"
                     ng-model="credit_card.firstName.value"
                     on-change="credit_card.firstName.onChangeCallback"
                     ng-disabled="credit_card.firstName.disabled"
                     icon="'client'"
                     ng-required="credit_card.firstName.required"
                     ng-readonly="credit_card.firstName.readonly"
                     maxlength="credit_card.firstName.maxlength"
                     valid="credit_card.firstName.valid"
                     name="'firstName'"
                     data-e2e="cc_first_name">
      </cc-text-input>
    </div>

    <div class="cc-fields-layout__field cc-fields-layout__last-name">
      <cc-text-input placeholder="'Last name' | t"
                     ng-model="credit_card.lastName.value"
                     on-change="credit_card.lastName.onChangeCallback"
                     ng-disabled="credit_card.lastName.disabled"
                     icon="'client'"
                     ng-required="credit_card.lastName.required"
                     ng-readonly="credit_card.lastName.readonly"
                     maxlength="credit_card.lastName.maxlength"
                     valid="credit_card.lastName.valid"
                     name="'lastName'"
                     data-e2e="cc_last_name">
      </cc-text-input>
    </div>
  </div>

  <div class="cc-fields-layout__field cc-fields-layout__address">
    <cc-text-input placeholder="'Address' | t"
                   ng-model="credit_card.address.value"
                   on-change="credit_card.address.onChangeCallback"
                   ng-disabled="credit_card.address.disabled"
                   ng-required="credit_card.address.required"
                   ng-readonly="credit_card.address.readonly"
                   maxlength="credit_card.address.maxlength"
                   icon="'map'"
                   valid="credit_card.address.valid"
                   name="'address'"
                   data-e2e="cc_address">
    </cc-text-input>
  </div>
  <div class="cc-fields-layout__flex-row">
    <div class="cc-fields-layout__field cc-fields-layout__country">
      <credit-card-country-component ng-model="credit_card.country.value"
                                     ng-disabled="credit_card.country.disabled"
                                     ng-required="credit_card.country.required"
                                     ng-readonly="credit_card.country.readonly"
                                     on-change="credit_card.country.onChangeCallback"
                                     on-country-select="credit_card.country.onCountrySelect"
                                     valid="credit_card.country.valid"
                                     placeholder="'Country' | t"
                                     countries="credit_card.country.items"
                                     title="credit_card.country.title"
                                     icon="'globe'"
                                     name="'country'"
                                     data-e2e="cc_county">
      </credit-card-country-component>
    </div>
    <div class="cc-fields-layout__field cc-fields-layout__state">
      <credit-card-state-component ng-model="credit_card.state.value"
                                   ng-disabled="credit_card.state.disabled"
                                   ng-required="credit_card.state.required"
                                   ng-readonly="credit_card.state.readonly"
                                   on-change="credit_card.state.onChangeCallback"
                                   on-state-select="credit_card.state.onStateSelect"
                                   valid="credit_card.state.valid"
                                   placeholder="'State' | t"
                                   is-dropdown-shown="credit_card.state.isDropdownShown"
                                   states="credit_card.state.items"
                                   title="credit_card.state.title"
                                   icon="'map'"
                                   name="'state'"
                                   data-e2e="cc_state">
      </credit-card-state-component>
    </div>
  </div>
  <div class="cc-fields-layout__flex-row">
    <div class="cc-fields-layout__field cc-fields-layout__city">
      <credit-card-city-component ng-model="credit_card.city.value"
                                  ng-disabled="credit_card.city.disabled"
                                  ng-required="credit_card.city.required"
                                  ng-readonly="credit_card.city.readonly"
                                  on-change="credit_card.city.onChangeCallback"
                                  on-city-select="credit_card.city.onCitySelect"
                                  valid="credit_card.city.valid"
                                  placeholder="'City' | t"
                                  is-dropdown-shown="credit_card.city.isDropdownShown"
                                  cities="credit_card.city.items"
                                  title="credit_card.city.title"
                                  icon="'map'"
                                  name="'city'"
                                  data-e2e="cc_city">
      </credit-card-city-component>
    </div>

    <div class="cc-fields-layout__field cc-fields-layout__postal-code">
      <credit-card-postal-code placeholder="'ZIP/Postal code' | t"
                               ng-model="credit_card.zip.value"
                               on-change="credit_card.zip.onChangeCallback"
                               ng-disabled="credit_card.zip.disabled"
                               ng-required="credit_card.zip.required"
                               ng-readonly="credit_card.zip.readonly"
                               maxlength="credit_card.zip.maxlength"
                               valid="credit_card.zip.valid"
                               name="'zip'">
      </credit-card-postal-code>
    </div>
  </div>
  <div class="cc-fields-layout__flex-row">
    <div class="cc-fields-layout__field cc-fields-layout__phone-number">
      <cc-phone-number-component placeholder="'Phone number' | t"
                                 ng-model="credit_card.phone.value"
                                 on-change="credit_card.phone.onChangeCallback"
                                 ng-disabled="credit_card.phone.disabled"
                                 ng-required="credit_card.phone.required"
                                 ng-readonly="credit_card.phone.readonly"
                                 maxlength="credit_card.phone.maxlength"
                                 valid="credit_card.phone.valid"
                                 name="'phone'">
      </cc-phone-number-component>
    </div>
  </div>
</div>

</script>

<script type="text/ng-template" id="/frontend/providers/components/gocardlessdd/checkout/component.shtml">
<div class="gocardlessdd new-card-form">
    <div class="row">
        <!--TODO - find a way to isolate this component and logic outside, in checkout, or at least make components-->
        <div desktop class="cc_stored_cards" ng-show="!cc.payWithNew && cc.initiated">
            <div class="add-credit-card-wrapper">
                <h4>
                    <t>Your direct debit accounts</t>
                </h4>
                <a href="javascript:void(0)" class="add-credit-card" ng-click="cc.payWithNew = true"
                   ng-show="cc.stored.length > 0">
                    +
                    <t>Add a direct debit account</t>
                </a>
            </div>
            <table class="payment-method-card" ng-show="cc.stored.length > 0">
                <tr class="payment-method-card-row" ng-repeat="method in cc.stored"
                    ng-class="{'selected' : $parent.cc.selectedUpiId == method.id}">
                    <td class="payment-method-card-cell">
                        <input type="radio" name="stored_method" value="{{method.id}}"
                               ng-model="$parent.cc.selectedUpiId"/>
                    </td>
                    <td class="payment-method-card-cell payment-method-card-cell-no-indents">

                    </td>
                    <td class="payment-method-card-cell">
                        <div>{{method.nickname | tc:"checkout.platform"}} *{{method.ending_in}}</div>
                    </td>
                    <td class="payment-method-card-cell payment-method-card-cell-default-payment">
                        <div class="payment-method-card-default-payment"
                             ng-show="method.id === cc.defaultPaymentMethodId">
                            <t>Default</t>
                        </div>
                        <button ng-hide="method.id === cc.defaultPaymentMethodId"
                                ng-click="setAsDefaultPaymentMethod(method)"
                                type="button"
                                class="set-as-default-button"
                        >
                            <t>Set as default</t>
                        </button>
                    </td>
                </tr>
            </table>
        </div>

        <div mobile class="cc_stored_cards" ng-show="cc.initiated">
            <table class="payment-method-card" ng-show="cc.stored.length > 0">
                <tr class="payment-method-card-row" ng-repeat="method in cc.stored"
                    ng-class="{'selected' : $parent.cc.selectedUpiId == method.id && $parent.cc.payWithNew != true}">
                    <td class="payment-method-card-cell">
                        <input type="radio" name="stored_method" value="{{method.id}}"
                               ng-model="$parent.cc.selectedUpiId"
                               ng-click="$parent.cc.payWithNew = false"/>
                    </td>
                    <td class="payment-method-card-cell">
                        <div>*{{method.ending_in}}</div>
                    </td>
                    <td class="payment-method-card-cell payment-method-card-cell-default-payment">
                        <div class="payment-method-card-default-payment"
                             ng-show="method.id === cc.defaultPaymentMethodId">
                            <t>Default</t>
                        </div>
                        <button ng-hide="method.id === cc.defaultPaymentMethodId"
                                ng-click="setAsDefaultPaymentMethod(method)"
                                type="button"
                                class="set-as-default-button"
                        >
                            <t>Set as default</t>
                        </button>
                    </td>
                </tr>
                <tr class="payment-method-card-row" ng-class="{'selected' : $parent.cc.payWithNew == true}">
                    <td class="payment-method-card-cell">
                        <input type="radio" name="stored_method" ng-model="$parent.cc.payWithNew" ng-value="true"/>
                    </td>
                    <td class="payment-method-card-cell" colspan="2">
                        <t>Add a new direct debit account</t>
                    </td>
                </tr>
            </table>
        </div>

        <div class="cc_new_card" ng-show="cc.payWithNew && cc.initiated">
            <div desktop class="go-back-to-cards-wrapper">
                <a href="javascript:void(0)" class="go-back-to-cards" ng-click="cc.payWithNew = false"
                   ng-show="cc.stored.length > 0">
                    <t>Return to direct debit accounts</t>
                </a>
                <h4>
                    <t>Add a new direct debit account</t>
                </h4>
            </div>
            <form class="new-card-form" name="ccForm" role="form">
                <button ng-click="create()" class="gocardless-pay"><t>Pay with GOCARDLESS</t></button>

                <div class="payment-system-condition">
                    <span ng-if="!isSubscription()">
                        <div class="custom-checkbox">
                            <input type="checkbox" name="store_in_vault" class="stripe-agreement"
                                   ng-model="credit_card.store_in_vault"
                                   id="remember-my-stripe-card"/>
                            <label for="remember-my-stripe-card">
                                <t>Remember my direct debit account for future payments</t>
                            </label>
                        </div>
                    </span>
                    <span ng-if="isSubscription()">
                        <input type="hidden" name="store_in_vault" ng-model="credit_card.store_in_vault"/>
                    </span>
                    <div class="custom-checkbox" ng-if="credit_card.store_in_vault">
                        <input type="checkbox" name="needToApplyDefaultPaymentMethod"
                               ng-model="credit_card.needToApplyDefaultPaymentMethod"
                               id="default-payment-method-stripe"/>
                        <label for="default-payment-method-stripe">
                            <t>Apply this payment method to all active subscriptions</t>
                        </label>
                    </div>
                </div>
            </form>
        </div>
        <div consents-list></div>
        <div class="footer-modal">
            <div class="auto-renew-purchase" ng-show="isSelectedTermAutoRenewChoiceAvailable()">
                <input class="auto-renew-purchase-checkbox" type="checkbox" ng-model="input.autoRenew"
                       id="auto_renew"/>
                <label class="auto-renew-purchase-label" for="auto_renew">
                    <t>Automatically renew my subscription when the time comes.</t>
                </label>
            </div>
            <div ng-show="isConfirmStepEnabled()" class="complete-purchase-button" goto-confirmation-button
                 title="{{'Complete Purchase' | t}}"></div>
            <div ng-show="!isConfirmStepEnabled()" class="complete-purchase-button" complete-purchase-button
                 title="{{'Complete Purchase' | t}}"></div>
        </div>
    </div>
</div>

</script>

<script type="text/ng-template" id="/frontend/providers/components/gocardlessdd/common/baseTemplate.shtml">
<div class="cc-fields-layout">
    <div class="cc-fields-layout__field cc-fields-layout__card-number">
        <credit-card-number ng-model="credit_card.num.value"
                            on-change="credit_card.num.onChangeCallback"
                            ng-disabled="credit_card.num.disabled"
                            ng-required="credit_card.num.required"
                            ng-readonly="credit_card.num.readonly"
                            maxlength="credit_card.num.maxlength"
                            valid="credit_card.num.valid"
                            name="'num'">
        </credit-card-number>
    </div>
    <div class="cc-fields-layout__field cc-fields-layout__expire">
        <cc-expire-component ng-model="credit_card.expire.value"
                             on-change="credit_card.expire.onChangeCallback"
                             ng-disabled="credit_card.expire.disabled"
                             ng-required="credit_card.expire.required"
                             ng-readonly="credit_card.expire.readonly"
                             maxlength="credit_card.expire.maxlength"
                             valid="credit_card.expire.valid"
                             name="'expire'"
                             on-change="onChangeCallback">
        </cc-expire-component>
    </div>
    <div class="cc-fields-layout__field cc-fields-layout__cvv">
        <credit-card-cvv ng-model="credit_card.cvv.value"
                         on-change="credit_card.cvv.onChangeCallback"
                         ng-disabled="credit_card.cvv.disabled"
                         ng-required="credit_card.cvv.required"
                         ng-readonly="credit_card.cvv.readonly"
                         maxlength="credit_card.cvv.maxlength"
                         valid="credit_card.cvv.valid"
                         name="'cvv'">
        </credit-card-cvv>
    </div>
    <div class="cc-fields-layout__field cc-fields-layout__postal-code">
        <credit-card-postal-code ng-model="credit_card.postal_code.value"
                                 on-change="credit_card.postal_code.onChangeCallback"
                                 ng-disabled="credit_card.postal_code.disabled"
                                 ng-required="credit_card.postal_code.required"
                                 ng-readonly="credit_card.postal_code.readonly"
                                 maxlength="credit_card.postal_code.maxlength"
                                 valid="credit_card.postal_code.valid"
                                 name="'postal_code'">
        </credit-card-postal-code>
    </div>
</div>
</script>

<script type="text/ng-template" id="/frontend/providers/components/bancard/checkout/component.shtml">
<div class="bancard-wrapper new-card-form">
    <div class="row">
        <div desktop class="cc_stored_cards" ng-show="!cc.payWithNew && cc.initiated">
            <div class="add-credit-card-wrapper">
                <h4>
                    <t>Your credit and debit cards</t>
                </h4>
                <a href="javascript:void(0)" class="add-credit-card" ng-click="cc.payWithNew = true"
                   ng-show="cc.stored.length > 0">
                    +
                    <t>Add a card</t>
                </a>
            </div>
            <table class="payment-method-card" ng-show="cc.stored.length > 0">
                <tr class="payment-method-card-row" ng-repeat="method in cc.stored"
                    ng-class="{'selected' : $parent.cc.selectedUpiId == method.id}">
                    <td class="payment-method-card-cell">
                        <input type="radio" name="stored_method" value="{{method.id}}"
                               ng-model="$parent.cc.selectedUpiId"/>
                    </td>
                    <td class="payment-method-card-cell">
                        <div class="credit-card-{{method.identifier}}"></div>
                    </td>
                    <td class="payment-method-card-cell">
                        <div>{{method.type | tc:"checkout.platform"}} *{{method.ending_in}}</div>
                    </td>
                    <td class="payment-method-card-cell">
                        <t>Expires in</t>
                        {{method.expire_month}}/{{method.expire_year}}
                    </td>
                </tr>
            </table>
        </div>

        <div mobile class="cc_stored_cards" ng-show="cc.initiated">
            <table class="payment-method-card" ng-show="cc.stored.length > 0">
                <tr class="payment-method-card-row" ng-repeat="method in cc.stored"
                    ng-class="{'selected' : $parent.cc.selectedUpiId == method.id && $parent.cc.payWithNew != true}">
                    <td class="payment-method-card-cell">
                        <input type="radio" name="stored_method" value="{{method.id}}"
                               ng-model="$parent.cc.selectedUpiId"
                               ng-click="$parent.cc.payWithNew = false"/>
                    </td>
                    <td class="payment-method-card-cell">
                        <div class="credit-card-{{method.identifier}}"></div>
                    </td>
                    <td class="payment-method-card-cell">
                        <div>*{{method.ending_in}}</div>
                    </td>
                </tr>
                <tr class="payment-method-card-row" ng-class="{'selected' : $parent.cc.payWithNew == true}">
                    <td class="payment-method-card-cell">
                        <input type="radio" name="stored_method" ng-model="$parent.cc.payWithNew" ng-value="true"/>
                    </td>
                    <td class="payment-method-card-cell" colspan="2">
                        <t>Add a new card</t>
                    </td>
                </tr>
            </table>
        </div>

        <div class="cc_new_card" ng-show="cc.payWithNew && cc.initiated">
            <div desktop class="go-back-to-cards-wrapper">
                <a href="javascript:void(0)" class="go-back-to-cards" ng-click="cc.payWithNew = false"
                   ng-show="cc.stored.length > 0">
                    <t>Return to saved cards</t>
                </a>
                <h4>
                    <t>Add a new credit or debit card</t>
                </h4>
            </div>
            <form class="new-card-form" name="ccForm" role="form">

                <div class="bancard-new-card-form">
                    <div ng-if="!cc.newCardInitiated">
                        <dynamic-base-inputs-component name="providerName"
                                                       credit-card="credit_card">
                        </dynamic-base-inputs-component>
                        <button
                                ng-click="createNewCard()"
                                class="bancard-new-card-create-button"
                                data-e2e="bancard_new_card_button"
                        ><t>Add card</t></button>
                    </div>
                    <div ng-show="cc.newCardRegistering" id="bancard-new-card-container" style="height: 350px;"></div>
                    <div ng-if="cc.registeredCard">
                        <t>Your card: </t>
                        {{cc.registeredCard.number}}
                    </div>
                </div>
                <div class="payment-system-condition">
                        <span ng-if="!isSubscription()">
                            <div class="custom-checkbox">
                                <input type="checkbox" name="store_in_vault" ng-model="credit_card.store_in_vault"
                                       id="remember-my-card1-bancard"/>
                                <label for="remember-my-card1-bancard">
                                    <t>Remember my card for future payments</t>
                                </label>
                            </div>
                        </span>
                    <span ng-if="isSubscription()">
                            <input type="hidden" name="store_in_vault" ng-model="credit_card.store_in_vault"/>
                        </span>
                    <div class="custom-checkbox" ng-if="credit_card.store_in_vault">
                        <input type="checkbox" name="defaultPaymentMethodId" ng-model="cc.defaultPaymentMethodId"
                               id="default-payment-method-bancard"/>
                        <label for="default-payment-method-bancard">
                            <t>Apply this payment method to all active subscriptions</t>
                        </label>
                    </div>
                </div>
            </form>
        </div>
        <div consents-list></div>
        <div class="footer-modal">
            <div class="auto-renew-purchase" ng-show="isSelectedTermAutoRenewChoiceAvailable()">
                <input class="auto-renew-purchase-checkbox" type="checkbox" ng-model="input.autoRenew"
                       id="auto_renew"/>
                <label class="auto-renew-purchase-label" for="auto_renew">
                    <t>Automatically renew my subscription when the time comes.</t>
                </label>
            </div>
            <div ng-show="isConfirmStepEnabled()"
                 class="complete-purchase-button"
                 goto-confirmation-button
                 title="{{'Complete Purchase' | t}}"
                 is-disabled="isCompleteButtonDisabled()"
            >
            </div>
            <div ng-show="!isConfirmStepEnabled()"
                 class="complete-purchase-button"
                 complete-purchase-button
                 title="{{'Complete Purchase' | t}}"
                 is-disabled="isCompleteButtonDisabled()"
            >
            </div>
        </div>
    </div>
</div>

</script>

<script type="text/ng-template" id="/frontend/providers/components/bancard/common/baseTemplate.shtml">
<div class="cc-fields-layout">
    <div class="cc-fields-layout__field cc-fields-layout__email">
        <cc-email-component ng-model="credit_card.email.value"
                            on-change="credit_card.email.onChangeCallback"
                            ng-disabled="credit_card.email.disabled"
                            ng-required="credit_card.email.required"
                            ng-readonly="credit_card.email.readonly"
                            maxlength="credit_card.email.maxlength"
                            valid="credit_card.email.valid"
                            name="'email'">
        </cc-email-component>
    </div>
    <div class="cc-fields-layout__field cc-fields-layout__phone-number">
        <cc-phone-number-component ng-model="credit_card.phone_number.value"
                             on-change="credit_card.phone_number.onChangeCallback"
                             ng-disabled="credit_card.phone_number.disabled"
                             ng-required="credit_card.phone_number.required"
                             ng-readonly="credit_card.phone_number.readonly"
                             maxlength="credit_card.phone_number.maxlength"
                             valid="credit_card.phone_number.valid"
                             name="'phone_number'"
                             on-change="onChangeCallback">
        </cc-phone-number-component>
    </div>
</div>

</script>

<script type="text/ng-template" id="/frontend/providers/components/gmo/checkout/component.shtml">
<div class="gmo-wrapper new-card-form">
    <div class="row">
        <div desktop class="cc_stored_cards" ng-show="!cc.payWithNew && cc.initiated">
            <div class="add-credit-card-wrapper">
                <h4>
                    <t>Your credit and debit cards</t>
                </h4>
                <a href="javascript:void(0)" class="add-credit-card" ng-click="cc.payWithNew = true"
                   ng-show="cc.stored.length > 0 && !singleCardPerUser">
                    +
                    <t>Add a card</t>
                </a>
            </div>
            <table class="payment-method-card" ng-show="cc.stored.length > 0">
                <tr class="payment-method-card-row" ng-repeat="method in cc.stored"
                    ng-class="{'selected' : $parent.cc.selectedUpiId == method.id}">
                    <td class="payment-method-card-cell">
                        <input type="radio" name="stored_method" value="{{method.id}}"
                               ng-model="$parent.cc.selectedUpiId"/>
                    </td>
                    <td class="payment-method-card-cell">
                        <div class="credit-card-{{method.identifier}}"></div>
                    </td>
                    <td class="payment-method-card-cell">
                        <div>{{method.type | tc:"checkout.platform"}} *{{method.ending_in}}</div>
                    </td>
                    <td class="payment-method-card-cell">
                        <t>Expires in</t>
                        {{method.expire_month}}/{{method.expire_year}}
                    </td>
                </tr>
            </table>
        </div>

        <div mobile class="cc_stored_cards" ng-show="cc.initiated">
            <table class="payment-method-card" ng-show="cc.stored.length > 0">
                <tr class="payment-method-card-row" ng-repeat="method in cc.stored"
                    ng-class="{'selected' : $parent.cc.selectedUpiId == method.id && $parent.cc.payWithNew != true}">
                    <td class="payment-method-card-cell">
                        <input type="radio" name="stored_method" value="{{method.id}}"
                               ng-model="$parent.cc.selectedUpiId"
                               ng-click="$parent.cc.payWithNew = false"/>
                    </td>
                    <td class="payment-method-card-cell">
                        <div class="credit-card-{{method.identifier}}"></div>
                    </td>
                    <td class="payment-method-card-cell">
                        <div>*{{method.ending_in}}</div>
                    </td>
                </tr>
                <tr class="payment-method-card-row" ng-class="{'selected' : $parent.cc.payWithNew == true}">
                    <td class="payment-method-card-cell">
                        <input type="radio" name="stored_method" ng-model="$parent.cc.payWithNew" ng-value="true"/>
                    </td>
                    <td class="payment-method-card-cell" colspan="2">
                        <t>Add a new card</t>
                    </td>
                </tr>
            </table>
        </div>

        <div class="cc_new_card" ng-show="cc.payWithNew && cc.initiated">
            <div desktop class="go-back-to-cards-wrapper">
                <a href="javascript:void(0)" class="go-back-to-cards" ng-click="cc.payWithNew = false"
                   ng-show="cc.stored.length > 0">
                    <t>Return to saved cards</t>
                </a>
                <h4>
                    <t>Add a new credit or debit card</t>
                </h4>
            </div>
            <form class="new-card-form" name="ccForm" role="form">
                <dynamic-base-inputs-component name="providerName"
                                               credit-card="credit_card"></dynamic-base-inputs-component>
                <div class="payment-system-condition">
                        <span ng-if="!isSubscription()">
                            <div class="custom-checkbox">
                                <input type="checkbox" name="store_in_vault" ng-model="credit_card.store_in_vault"
                                       id="rermber-my-card1-gmo"/>
                                <label for="rermber-my-card1-gmo">
                                    <t>Remember my card for future payments</t>
                                </label>
                            </div>
                        </span>
                    <span ng-if="isSubscription()">
                            <input type="hidden" name="store_in_vault" ng-model="credit_card.store_in_vault"/>
                        </span>
                    <div class="custom-checkbox" ng-if="credit_card.store_in_vault">
                        <input type="checkbox" name="defaultPaymentMethodId" ng-model="cc.defaultPaymentMethodId"
                               id="default-payment-method-gmo"/>
                        <label for="default-payment-method-gmo">
                            <t>Apply this payment method to all active subscriptions</t>
                        </label>
                    </div>
                </div>
            </form>
        </div>
        <div consents-list></div>
        <div class="footer-modal">
            <div class="auto-renew-purchase" ng-show="isSelectedTermAutoRenewChoiceAvailable()">
                <input class="auto-renew-purchase-checkbox" type="checkbox" ng-model="input.autoRenew"
                       id="auto_renew"/>
                <label class="auto-renew-purchase-label" for="auto_renew">
                    <t>Automatically renew my subscription when the time comes.</t>
                </label>
            </div>
            <div ng-show="isConfirmStepEnabled()" class="complete-purchase-button" goto-confirmation-button
                 title="{{'Complete Purchase' | t}}"></div>
            <div ng-show="!isConfirmStepEnabled()" class="complete-purchase-button" complete-purchase-button
                 title="{{'Complete Purchase' | t}}"></div>
        </div>
    </div>
</div>
</script>

<script type="text/ng-template" id="/frontend/providers/components/gmo/common/baseTemplate.shtml">
<div class="cc-fields-layout">
    <div class="cc-fields-layout__field cc-fields-layout__card-number">
        <credit-card-number ng-model="credit_card.num.value"
                            on-change="credit_card.num.onChangeCallback"
                            ng-disabled="credit_card.num.disabled"
                            ng-required="credit_card.num.required"
                            ng-readonly="credit_card.num.readonly"
                            maxlength="credit_card.num.maxlength"
                            valid="credit_card.num.valid"
                            autocomplete="cc-number"
                            name="'num'">
        </credit-card-number>
    </div>
    <div class="cc-fields-layout__field cc-fields-layout__expire">
        <cc-expire-component ng-model="credit_card.expire.value"
                             on-change="credit_card.expire.onChangeCallback"
                             ng-disabled="credit_card.expire.disabled"
                             ng-required="credit_card.expire.required"
                             ng-readonly="credit_card.expire.readonly"
                             maxlength="credit_card.expire.maxlength"
                             valid="credit_card.expire.valid"
                             name="'expire'"
                             autocomplete="cc-exp"
                             on-change="onChangeCallback">
        </cc-expire-component>
    </div>
    <div class="cc-fields-layout__field cc-fields-layout__cvv">
        <credit-card-cvv ng-model="credit_card.cvv.value"
                         on-change="credit_card.cvv.onChangeCallback"
                         ng-disabled="credit_card.cvv.disabled"
                         ng-required="credit_card.cvv.required"
                         ng-readonly="credit_card.cvv.readonly"
                         maxlength="credit_card.cvv.maxlength"
                         autocomplete="cc-csc"
                         valid="credit_card.cvv.valid"
                         name="'cvv'">
        </credit-card-cvv>
    </div>
</div>

</script>

<script type="text/ng-template" id="/frontend/providers/components/datatranspaypal/checkout/component.shtml">
<div class="datatranspaypal-wrapper new-card-form">
  <div class="row">

    <div ng-show="isStoredPaymentsScreenShown()" class="paypal-checkout-payment-form">
      <div class="add-credit-card-wrapper">
        <h4>
          <t context="checkout.platform">Your PayPal accounts</t>
        </h4>
        <a href="javascript:void(0)" class="add-credit-card" ng-click="gotoNewPaymentScreen()"
           ng-show="stored.length > 0">
          +
          <t>Add a new account</t>
        </a>
      </div>
      <table ng-if="stored.length" class="paypal-table">
        <tr class="paypal-table-row" ng-repeat="upi in stored">
          <td class="paypal-table-cell--radio">
            <input type="radio"
                   id="radio-{{upi.id}}"
                   name="stored_method"
                   ng-model="data.selectedUpi"
                   ng-value="upi"
                   ng-change="onUpiChange(upi)"
                   radio-track-by="id"
                   class="paypal-radio"/>
          </td>
          <td class="paypal-table-cell-logo">
            <div class="datatrans-paypal-short-logo"></div>
          </td>
          <td class="paypal-table-cell-email">
            <label for="radio-{{upi.id}}">
              {{upi.email}}
            </label>
          </td>
          <td class="payment-method-card-cell payment-method-card-cell--default-payment">
            <div class="payment-method-card-default-payment"
                 ng-show="upi.id === data.defaultPaymentMethodId">
              <t>Default</t>
            </div>
            <button ng-hide="upi.id === data.defaultPaymentMethodId"
                    ng-click="setAsDefault(upi)"
                    type="button"
                    class="set-as-default-button"
            >
              <t>Set as default</t>
            </button>
          </td>
        </tr>
      </table>
    </div>

    <div ng-show="isNewPaymentScreenShown()" class="paypal-checkout-payment-form">
      <div class="go-back-to-cards-wrapper">
        <h4>
          <t>Add a new PayPal account</t>
        </h4>
        <a href="javascript:void(0)" class="go-back-to-cards" ng-click="gotoStoredPaymentsScreen()"
           ng-show="isReturnToStoredPaymentsShown()">
          <t>Return to saved accounts</t>
        </a>
      </div>

      <div ng-if="!data.newUpi" class="datatrans-paypal-account-wrapper">
        <div class="hint">
          <t>Please, log in first.</t>
        </div>
        <div id="paypal-pay-button"
             class="pm-login-button paypal-login-button"
             ng-click="startWithNewAccount()"
             data-e2e="paypal-login-button">
        </div>
      </div>

      <table ng-if="data.newUpi" class="paypal-table">
        <tr class="paypal-table-row">
          <td class="paypal-table-cell--radio">
            <input type="radio"
                   id="paypal-new-payment-method"
                   name="stored_method"
                   ng-model="data.selectedUpi"
                   ng-value="data.newUpi"
                   radio-track-by="id"
                   class="paypal-radio"/>
          </td>
          <td class="paypal-table-cell-logo">
            <div class="datatrans-paypal-short-logo"></div>
          </td>
          <td class="paypal-table-cell-email">
            <label for="paypal-new-payment-method">
              {{data.newUpi.email}}
            </label>
          </td>
          <td class="paypal-table-cell-cancel">
            <div class="paypal-logged-in">
              <div ng-click="cancelNewAccount()" class="paypal-cancel-button">
                <t>Cancel</t>
              </div>
            </div>
          </td>
        </tr>
      </table>
    </div>

    <div class="manage-payment-method-wrapper" ng-show="state.payWithNew">
      <div ng-if="!isSubscription() && isPaymentTerm()">
        <div class="custom-checkbox">
          <input type="checkbox" name="store_in_vault" ng-model="data.store_in_vault"
                 id="remember-my-account-datatrans-paypal"/>
          <label for="remember-my-account-datatrans-paypal">
            <t>Remember my account for future payments</t>
          </label>
        </div>
      </div>
      <div ng-if="isSubscription()">
        <input type="hidden" name="store_in_vault" ng-model="data.store_in_vault"/>
      </div>
      <div class="custom-checkbox" ng-if="data.store_in_vault">
        <input type="checkbox" name="defaultPaymentMethodId" ng-model="data.defaultPaymentMethodId"
               id="default-payment-method-datatrans-paypal"/>
        <label for="default-payment-method-datatrans-paypal">
          <t>Apply this payment method to all active subscriptions</t>
        </label>
      </div>
    </div>

    <div consents-list></div>
    <div class="footer-modal" ng-show="canContinue()">
      <div class="auto-renew-purchase" ng-show="isSelectedTermAutoRenewChoiceAvailable()">
        <input class="auto-renew-purchase-checkbox" type="checkbox" ng-model="input.autoRenew"
               id="auto_renew"/>
        <label class="auto-renew-purchase-label" for="auto_renew">
          <t>Automatically renew my subscription when the time comes.</t>
        </label>
      </div>
      <div ng-show="isConfirmStepEnabled()" class="complete-purchase-button"
           data-e2e="paypal-complete-purchase-button" goto-confirmation-button
           title="{{'Complete Purchase' | t}}"></div>
      <div ng-show="!isConfirmStepEnabled()" class="complete-purchase-button"
           data-e2e="paypal-complete-purchase-button" complete-purchase-button
           title="{{'Complete Purchase' | t}}"></div>
    </div>
  </div>
</div>


</script>

<script type="text/ng-template" id="/frontend/providers/components/payuindiacc/checkout/component.shtml">
<div class="payu-india-cc-wrapper new-card-form">
    <div class="row">
        <div desktop class="cc_stored_cards" ng-show="!cc.payWithNew && cc.initiated">
            <div class="add-credit-card-wrapper">
                <h4>
                    <t>Your credit and debit cards</t>
                </h4>
                <a href="javascript:void(0)" class="add-credit-card" ng-click="cc.payWithNew = true"
                   ng-show="cc.stored.length > 0">
                    +
                    <t>Add a card</t>
                </a>
            </div>
            <table class="payment-method-card" ng-show="cc.stored.length > 0">
                <tr class="payment-method-card-row" ng-repeat="method in cc.stored"
                    ng-class="{'selected' : $parent.cc.selectedUpiId == method.id}">
                    <td class="payment-method-card-cell">
                        <input type="radio" name="stored_method" value="{{method.id}}"
                               ng-model="$parent.cc.selectedUpiId"/>
                    </td>
                    <td class="payment-method-card-cell">
                        <div class="credit-card-{{method.identifier}}"></div>
                    </td>
                    <td class="payment-method-card-cell">
                        <div>{{method.type | tc:"checkout.platform"}} *{{method.ending_in}}</div>
                    </td>
                    <td class="payment-method-card-cell">
                        <t>Expires in</t>
                        {{method.expire_month}}/{{method.expire_year}}
                    </td>
                </tr>
            </table>
        </div>

        <div mobile class="cc_stored_cards" ng-show="cc.initiated">
            <table class="payment-method-card" ng-show="cc.stored.length > 0">
                <tr class="payment-method-card-row" ng-repeat="method in cc.stored"
                    ng-class="{'selected' : $parent.cc.selectedUpiId == method.id && $parent.cc.payWithNew != true}">
                    <td class="payment-method-card-cell">
                        <input type="radio" name="stored_method" value="{{method.id}}"
                               ng-model="$parent.cc.selectedUpiId"
                               ng-click="$parent.cc.payWithNew = false"/>
                    </td>
                    <td class="payment-method-card-cell">
                        <div class="credit-card-{{method.identifier}}"></div>
                    </td>
                    <td class="payment-method-card-cell">
                        <div>*{{method.ending_in}}</div>
                    </td>
                </tr>
                <tr class="payment-method-card-row" ng-class="{'selected' : $parent.cc.payWithNew == true}">
                    <td class="payment-method-card-cell">
                        <input type="radio" name="stored_method" ng-model="$parent.cc.payWithNew" ng-value="true"/>
                    </td>
                    <td class="payment-method-card-cell" colspan="2">
                        <t>Add a new card</t>
                    </td>
                </tr>
            </table>
        </div>

        <div class="cc_new_card" ng-show="cc.payWithNew && cc.initiated">
            <div desktop class="go-back-to-cards-wrapper">
                <a href="javascript:void(0)" class="go-back-to-cards" ng-click="cc.payWithNew = false"
                   ng-show="cc.stored.length > 0">
                    <t>Return to saved cards</t>
                </a>
                <h4>
                    <t>Add a new credit or debit card</t>
                </h4>
            </div>
            <form class="new-card-form" name="ccForm" role="form">
                <dynamic-base-inputs-component name="providerName"
                                               credit-card="credit_card"></dynamic-base-inputs-component>
                <div class="payment-system-condition">
                        <span ng-if="!isSubscription()">
                            <div class="custom-checkbox">
                                <input type="checkbox" name="store_in_vault" ng-model="credit_card.store_in_vault"
                                       id="rermber-my-card1-payu-india-cc"/>
                                <label for="rermber-my-card1-payu-india-cc">
                                    <t>Remember my card for future payments</t>
                                </label>
                            </div>
                        </span>
                    <span ng-if="isSubscription()">
                            <input type="hidden" name="store_in_vault" ng-model="credit_card.store_in_vault"/>
                        </span>
                    <div class="custom-checkbox" ng-if="credit_card.store_in_vault">
                        <input type="checkbox" name="defaultPaymentMethodId" ng-model="cc.defaultPaymentMethodId"
                               id="default-payment-method-payu-india-cc"/>
                        <label for="default-payment-method-payu-india-cc">
                            <t>Apply this payment method to all active subscriptions</t>
                        </label>
                    </div>
                </div>
            </form>
        </div>
        <div consents-list></div>
        <div class="footer-modal">
            <div class="auto-renew-purchase" ng-show="isSelectedTermAutoRenewChoiceAvailable()">
                <input class="auto-renew-purchase-checkbox" type="checkbox" ng-model="input.autoRenew"
                       id="auto_renew"/>
                <label class="auto-renew-purchase-label" for="auto_renew">
                    <t>Automatically renew my subscription when the time comes.</t>
                </label>
            </div>
            <div ng-show="isConfirmStepEnabled()" class="complete-purchase-button" goto-confirmation-button
                 title="{{'Complete Purchase' | t}}"></div>
            <div ng-show="!isConfirmStepEnabled()" class="complete-purchase-button" complete-purchase-button
                 title="{{'Complete Purchase' | t}}"></div>
        </div>
    </div>
</div>
</script>

<script type="text/ng-template" id="/frontend/providers/components/payuindiacc/common/baseTemplate.shtml">
<div class="cc-fields-layout">
    <div class="cc-fields-layout__field cc-fields-layout__card-holder">
        <credit-card-holder ng-model="credit_card.holder.value"
                            on-change="credit_card.holder.onChangeCallback"
                            ng-disabled="credit_card.holder.disabled"
                            ng-required="credit_card.holder.required"
                            ng-readonly="credit_card.holder.readonly"
                            maxlength="credit_card.holder.maxlength"
                            valid="credit_card.holder.valid"
                            name="'holder'">
        </credit-card-holder>
    </div>
    <div class="cc-fields-layout__field cc-fields-layout__card-number">
        <credit-card-number ng-model="credit_card.num.value"
                            on-change="credit_card.num.onChangeCallback"
                            ng-disabled="credit_card.num.disabled"
                            ng-required="credit_card.num.required"
                            ng-readonly="credit_card.num.readonly"
                            maxlength="credit_card.num.maxlength"
                            valid="credit_card.num.valid"
                            name="'num'">
        </credit-card-number>
    </div>
    <div class="cc-fields-layout__field cc-fields-layout__expire">
        <cc-expire-component ng-model="credit_card.expire.value"
                             on-change="credit_card.expire.onChangeCallback"
                             ng-disabled="credit_card.expire.disabled"
                             ng-required="credit_card.expire.required"
                             ng-readonly="credit_card.expire.readonly"
                             maxlength="credit_card.expire.maxlength"
                             valid="credit_card.expire.valid"
                             name="'expire'"
                             on-change="onChangeCallback">
        </cc-expire-component>
    </div>
    <div class="cc-fields-layout__field cc-fields-layout__cvv">
        <credit-card-cvv ng-model="credit_card.cvv.value"
                         on-change="credit_card.cvv.onChangeCallback"
                         ng-disabled="credit_card.cvv.disabled"
                         ng-required="credit_card.cvv.required"
                         ng-readonly="credit_card.cvv.readonly"
                         maxlength="credit_card.cvv.maxlength"
                         valid="credit_card.cvv.valid"
                         name="'cvv'">
        </credit-card-cvv>
    </div>
</div>

</script>

<script type="text/ng-template" id="/frontend/providers/components/onet/checkout/component.shtml">
<div class="onet-payway-wrapper new-card-form">
    <div class="row">
        <!--TODO - find a way to isolate this component and logic outside, in checkout, or at least make components-->
        <div desktop class="cc_stored_cards" ng-show="!iPayEnabled && !cc.payWithNew && cc.initiated">
            <div class="add-credit-card-wrapper">
                <h4>
                    <t>Your credit and debit cards</t>
                </h4>
                <a href="javascript:void(0)" class="add-credit-card" ng-click="cc.payWithNew = true"
                   ng-show="cc.stored.length > 0">
                    +
                    <t>Add a card</t>
                </a>
            </div>
            <table class="payment-method-card" ng-show="cc.stored.length > 0">
                <tr class="payment-method-card-row" ng-repeat="method in cc.stored"
                    ng-class="{'selected' : $parent.cc.selectedUpiId == method.id}">
                    <td class="payment-method-card-cell">
                        <input type="radio" name="stored_method" value="{{method.id}}"
                               ng-model="$parent.cc.selectedUpiId"/>
                    </td>
                    <td class="payment-method-card-cell">
                        <div class="credit-card-{{method.identifier}}"></div>
                    </td>
                    <td class="payment-method-card-cell">
                        <div>{{method.type | tc:"checkout.platform"}} *{{method.ending_in}}</div>
                    </td>
                    <td class="payment-method-card-cell">
                        <t>Expires in</t> {{method.expire_month}}/{{method.expire_year}}
                    </td>
                </tr>
            </table>
        </div>

        <div mobile class="cc_stored_cards" ng-show="!iPayEnabled && cc.initiated">
            <table class="payment-method-card" ng-show="cc.stored.length > 0">
                <tr class="payment-method-card-row" ng-repeat="method in cc.stored"
                    ng-class="{'selected' : $parent.cc.selectedUpiId == method.id && $parent.cc.payWithNew != true}">
                    <td class="payment-method-card-cell">
                        <input type="radio" name="stored_method" value="{{method.id}}"
                               ng-model="$parent.cc.selectedUpiId"
                               ng-click="$parent.cc.payWithNew = false"/>
                    </td>
                    <td class="payment-method-card-cell">
                        <div class="credit-card-{{method.identifier}}"></div>
                    </td>
                    <td class="payment-method-card-cell">
                        <div>*{{method.ending_in}}</div>
                    </td>
                </tr>
                <tr class="payment-method-card-row" ng-class="{'selected' : $parent.cc.payWithNew == true}">
                    <td class="payment-method-card-cell">
                        <input type="radio" name="stored_method" ng-model="$parent.cc.payWithNew" ng-value="true"/>
                    </td>
                    <td class="payment-method-card-cell" colspan="2">
                        <t>Add a new card</t>
                    </td>
                </tr>
            </table>
        </div>

        <div class="cc_new_card" ng-show="!iPayEnabled && cc.payWithNew && cc.initiated">
            <div desktop class="go-back-to-cards-wrapper">
                <a href="javascript:void(0)" class="go-back-to-cards" ng-click="cc.payWithNew = false"
                   ng-show="cc.stored.length > 0">
                    <t>Return to saved cards</t>
                </a>
                <h4>
                    <t>Add a new credit or debit card</t>
                </h4>
            </div>
            <form class="new-card-form" name="ccForm" role="form">
                <dynamic-base-inputs-component name="providerName"
                                               credit-card="credit_card"></dynamic-base-inputs-component>
                <div class="payment-system-condition">
                        <span ng-if="!isSubscription()">
                            <div class="custom-checkbox">
                                <input type="checkbox" name="store_in_vault" class="payu-agreement" ng-model="credit_card.store_in_vault"
                                       id="rermber-my-card-onet1"/>
                                <label for="rermber-my-card-onet1">
                                    <t>Remember my card for future payments</t>
                                </label>
                            </div>
                        </span>
                    <span ng-if="isSubscription()">
                        <div class="custom-checkbox">
                            <input type="checkbox" name="store_in_vault" class="payu-agreement" ng-model="credit_card.store_in_vault"
                                   id="rermber-my-card-onet2" disabled/>
                            <label for="rermber-my-card-onet2">
                                <t>Remember my card for future payments</t>
                            </label>
                        </div>
                    </span>
                    <div class="custom-checkbox" ng-if="credit_card.store_in_vault">
                        <input type="checkbox" name="defaultPaymentMethodId" ng-model="cc.defaultPaymentMethodId" id="default-payment-method-onet" />
                        <label for="default-payment-method-onet"><t>Apply this payment method to all active subscriptions</t></label>
                    </div>
                </div>
            </form>
        </div>

        <div consents-list></div>
        <div class="footer-modal">
            <div class="auto-renew-purchase" ng-show="isSelectedTermAutoRenewChoiceAvailable()">
                <input class="auto-renew-purchase-checkbox" type="checkbox" ng-model="input.autoRenew"
                       id="auto_renew"/>
                <label class="auto-renew-purchase-label" for="auto_renew">
                    <t>Automatically renew my subscription when the time comes.</t>
                </label>
            </div>
            <div ng-show="isConfirmStepEnabled()" class="complete-purchase-button" goto-confirmation-button
                 title="{{'Complete Purchase' | t}}"></div>
            <div ng-show="!isConfirmStepEnabled()" class="complete-purchase-button" complete-purchase-button
                 title="{{'Complete Purchase' | t}}"></div>
        </div>
    </div>
</div>

</script>

<script type="text/ng-template" id="/frontend/providers/components/onet/common/baseTemplate.shtml">
<div class="cc-fields-layout">
    <div class="cc-fields-layout__field cc-fields-layout__card-number">
        <credit-card-number ng-model="credit_card.num.value"
                            on-change="credit_card.num.onChangeCallback"
                            ng-disabled="credit_card.num.disabled"
                            ng-required="credit_card.num.required"
                            ng-readonly="credit_card.num.readonly"
                            maxlength="credit_card.num.maxlength"
                            valid="credit_card.num.valid"
                            class-name="'payu-card-number'"
                            name="'num'">
        </credit-card-number>
    </div>
    <div class="cc-fields-layout__field cc-fields-layout__expire">
        <cc-expire-component ng-model="credit_card.expire.value"
                             on-change="credit_card.expire.onChangeCallback"
                             ng-disabled="credit_card.expire.disabled"
                             ng-required="credit_card.expire.required"
                             ng-readonly="credit_card.expire.readonly"
                             maxlength="credit_card.expire.maxlength"
                             valid="credit_card.expire.valid"
                             name="'expire'">
        </cc-expire-component>
        <input type="hidden" class="payu-card-expm" value="{{credit_card.expire.month}}">
        <input type="hidden" class="payu-card-expy" value="{{credit_card.expire.year}}">
    </div>
    <div class="cc-fields-layout__field cc-fields-layout__cvv">
        <credit-card-cvv ng-model="credit_card.cvv.value"
                         on-change="credit_card.cvv.onChangeCallback"
                         ng-disabled="credit_card.cvv.disabled"
                         ng-required="credit_card.cvv.required"
                         ng-readonly="credit_card.cvv.readonly"
                         maxlength="credit_card.cvv.maxlength"
                         valid="credit_card.cvv.valid"
                         class-name="'payu-card-cvv'"
                         name="'cvv'">
        </credit-card-cvv>
    </div>
</div>
</script>

<script type="text/ng-template" id="/frontend/providers/components/payuchilecc/checkout/component.shtml">
<div class="payu-latam-chile-cc-wrapper new-card-form">
    <div class="row">
        <div desktop class="cc_stored_cards" ng-show="!cc.payWithNew && cc.initiated">
            <div class="add-credit-card-wrapper">
                <h4>
                    <t>Your credit and debit cards</t>
                </h4>
                <a href="javascript:void(0)" class="add-credit-card" ng-click="cc.payWithNew = true"
                   ng-show="cc.stored.length > 0">
                    +
                    <t>Add a card</t>
                </a>
            </div>
            <table class="payment-method-card" ng-show="cc.stored.length > 0">
                <tr class="payment-method-card-row" ng-repeat="method in cc.stored"
                    ng-class="{'selected' : $parent.cc.selectedUpiId == method.id}">
                    <td class="payment-method-card-cell">
                        <input type="radio" name="stored_method" value="{{method.id}}"
                               ng-model="$parent.cc.selectedUpiId"/>
                    </td>
                    <td class="payment-method-card-cell">
                        <div class="credit-card-{{method.identifier}}"></div>
                    </td>
                    <td class="payment-method-card-cell">
                        <div>{{method.type | tc:"checkout.platform"}} *{{method.ending_in}}</div>
                    </td>
                    <td class="payment-method-card-cell">
                        <t>Expires in</t>
                        {{method.expire_month}}/{{method.expire_year}}
                    </td>
                </tr>
            </table>
        </div>

        <div mobile class="cc_stored_cards" ng-show="cc.initiated">
            <table class="payment-method-card" ng-show="cc.stored.length > 0">
                <tr class="payment-method-card-row" ng-repeat="method in cc.stored"
                    ng-class="{'selected' : $parent.cc.selectedUpiId == method.id && $parent.cc.payWithNew != true}">
                    <td class="payment-method-card-cell">
                        <input type="radio" name="stored_method" value="{{method.id}}"
                               ng-model="$parent.cc.selectedUpiId"
                               ng-click="$parent.cc.payWithNew = false"/>
                    </td>
                    <td class="payment-method-card-cell">
                        <div class="credit-card-{{method.identifier}}"></div>
                    </td>
                    <td class="payment-method-card-cell">
                        <div>*{{method.ending_in}}</div>
                    </td>
                </tr>
                <tr class="payment-method-card-row" ng-class="{'selected' : $parent.cc.payWithNew == true}">
                    <td class="payment-method-card-cell">
                        <input type="radio" name="stored_method" ng-model="$parent.cc.payWithNew" ng-value="true"/>
                    </td>
                    <td class="payment-method-card-cell" colspan="2">
                        <t>Add a new card</t>
                    </td>
                </tr>
            </table>
        </div>

        <div class="cc_new_card" ng-show="cc.payWithNew && cc.initiated">
            <div desktop class="go-back-to-cards-wrapper">
                <a href="javascript:void(0)" class="go-back-to-cards" ng-click="cc.payWithNew = false"
                   ng-show="cc.stored.length > 0">
                    <t>Return to saved cards</t>
                </a>
                <h4>
                    <t>Add a new credit or debit card</t>
                </h4>
            </div>
            <form class="new-card-form" name="ccForm" role="form">
                <dynamic-base-inputs-component name="providerName"
                                               credit-card="credit_card"></dynamic-base-inputs-component>
                <div class="payment-system-condition">
                        <span ng-if="!isSubscription()">
                            <div class="custom-checkbox">
                                <input type="checkbox" name="store_in_vault" ng-model="credit_card.store_in_vault"
                                       id="rermber-my-card1-payu-latam-chile-cc"/>
                                <label for="rermber-my-card1-payu-latam-chile-cc">
                                    <t>Remember my card for future payments</t>
                                </label>
                            </div>
                        </span>
                    <span ng-if="isSubscription()">
                            <input type="hidden" name="store_in_vault" ng-model="credit_card.store_in_vault"/>
                        </span>
                    <div class="custom-checkbox" ng-if="credit_card.store_in_vault">
                        <input type="checkbox" name="defaultPaymentMethodId" ng-model="cc.defaultPaymentMethodId"
                               id="default-payment-method-payu-latam-chile-cc"/>
                        <label for="default-payment-method-payu-latam-chile-cc">
                            <t>Apply this payment method to all active subscriptions</t>
                        </label>
                    </div>
                </div>
            </form>
        </div>
        <div consents-list></div>
        <div class="footer-modal">
            <div class="auto-renew-purchase" ng-show="isSelectedTermAutoRenewChoiceAvailable()">
                <input class="auto-renew-purchase-checkbox" type="checkbox" ng-model="input.autoRenew"
                       id="auto_renew"/>
                <label class="auto-renew-purchase-label" for="auto_renew">
                    <t>Automatically renew my subscription when the time comes.</t>
                </label>
            </div>
            <div ng-show="isConfirmStepEnabled()" class="complete-purchase-button" goto-confirmation-button
                 title="{{'Complete Purchase' | t}}"></div>
            <div ng-show="!isConfirmStepEnabled()" class="complete-purchase-button" complete-purchase-button
                 title="{{'Complete Purchase' | t}}"></div>
        </div>
    </div>
</div>
</script>

<script type="text/ng-template" id="/frontend/providers/components/payuchilecc/common/baseTemplate.shtml">
<div class="cc-fields-layout">
  <div class="cc-fields-layout__flex-row cc-fields-layout__flex-row--card-number">
    <div class="cc-fields-layout__field cc-fields-layout__card-number">
      <credit-card-number ng-model="credit_card.num.value"
                          on-change="credit_card.num.onChangeCallback"
                          ng-disabled="credit_card.num.disabled"
                          ng-required="credit_card.num.required"
                          ng-readonly="credit_card.num.readonly"
                          maxlength="credit_card.num.maxlength"
                          valid="credit_card.num.valid"
                          name="'num'">
      </credit-card-number>
    </div>
    <div class="cc-fields-layout__field cc-fields-layout__field--no-margin-bottom cc-fields-layout__field--group">
      <div class="cc-fields-layout__flex-row">
        <div class="cc-fields-layout__field cc-fields-layout__expire">
          <cc-expire-component ng-model="credit_card.expire.value"
                               on-change="credit_card.expire.onChangeCallback"
                               ng-disabled="credit_card.expire.disabled"
                               ng-required="credit_card.expire.required"
                               ng-readonly="credit_card.expire.readonly"
                               maxlength="credit_card.expire.maxlength"
                               valid="credit_card.expire.valid"
                               name="'expire'">
          </cc-expire-component>
        </div>
        <div class="cc-fields-layout__field cc-fields-layout__cvv">
          <credit-card-cvv ng-model="credit_card.cvv.value"
                           on-change="credit_card.cvv.onChangeCallback"
                           ng-disabled="credit_card.cvv.disabled"
                           ng-required="credit_card.cvv.required"
                           ng-readonly="credit_card.cvv.readonly"
                           maxlength="credit_card.cvv.maxlength"
                           valid="credit_card.cvv.valid"
                           name="'cvv'">
          </credit-card-cvv>
        </div>
      </div>
    </div>
  </div>
  <div class="cc-fields-layout__field cc-fields-layout__card-holder">
    <credit-card-holder ng-model="credit_card.holder.value"
                        on-change="credit_card.holder.onChangeCallback"
                        ng-disabled="credit_card.holder.disabled"
                        icon="'client'"
                        ng-required="credit_card.holder.required"
                        ng-readonly="credit_card.holder.readonly"
                        maxlength="credit_card.holder.maxlength"
                        valid="credit_card.holder.valid"
                        name="'holder'">
    </credit-card-holder>
  </div>
  <div class="cc-fields-layout__flex-row">
    <div class="cc-fields-layout__field cc-fields-layout__identification-type">
      <credit-card-identification-type-component ng-model="credit_card.identificationType.value"
                                  on-identification-type-select="credit_card.identificationType.onIdentificationTypeSelect"
                                  ng-disabled="credit_card.identificationType.disabled"
                                  ng-required="credit_card.identificationType.required"
                                  ng-readonly="credit_card.identificationType.readonly"
                                  placeholder="'Identification type' | t"
                                  valid="credit_card.identificationType.valid"
                                  is-dropdown-shown="credit_card.identificationType.isDropdownShown"
                                  identification-types="credit_card.identificationType.items"
                                  title="credit_card.identificationType.title"
                                  data-e2e="cc_identificationType"
                                  icon="'identification-type'"
                                  name="'identificationType'">
      </credit-card-identification-type-component>
    </div>
    <div class="cc-fields-layout__field cc-fields-layout__identification-number">
      <cc-text-input placeholder="'Identification number' | t"
                     ng-model="credit_card.identificationNumber.value"
                     ng-readonly="credit_card.identificationNumber.readonly"
                     ng-required="credit_card.identificationNumber.required"
                     ng-disabled="credit_card.identificationNumber.disabled"
                     icon="'national-id'"
                     class="cc-field-wrap fs-block"
                     class-name="className"
                     on-change="credit_card.identificationNumber.onChangeCallback"
                     name="'identificationNumber'"
                     data-e2e="cc_identificationNumber"
                     valid="credit_card.identificationNumber.valid">
      </cc-text-input>
    </div>
  </div>
  <div class="cc-fields-layout__flex-row">
    <div class="cc-fields-layout__field cc-fields-layout__first-name">
      <cc-text-input placeholder="'First name' | t"
                     ng-model="credit_card.firstName.value"
                     on-change="credit_card.firstName.onChangeCallback"
                     ng-disabled="credit_card.firstName.disabled"
                     icon="'client'"
                     ng-required="credit_card.firstName.required"
                     ng-readonly="credit_card.firstName.readonly"
                     maxlength="credit_card.firstName.maxlength"
                     valid="credit_card.firstName.valid"
                     name="'firstName'"
                     data-e2e="cc_first_name">
      </cc-text-input>
    </div>

    <div class="cc-fields-layout__field cc-fields-layout__last-name">
      <cc-text-input placeholder="'Last name' | t"
                     ng-model="credit_card.lastName.value"
                     on-change="credit_card.lastName.onChangeCallback"
                     ng-disabled="credit_card.lastName.disabled"
                     icon="'client'"
                     ng-required="credit_card.lastName.required"
                     ng-readonly="credit_card.lastName.readonly"
                     maxlength="credit_card.lastName.maxlength"
                     valid="credit_card.lastName.valid"
                     name="'lastName'"
                     data-e2e="cc_last_name">
      </cc-text-input>
    </div>
  </div>

  <div class="cc-fields-layout__field cc-fields-layout__address">
    <cc-text-input placeholder="'Address' | t"
                   ng-model="credit_card.address.value"
                   on-change="credit_card.address.onChangeCallback"
                   ng-disabled="credit_card.address.disabled"
                   ng-required="credit_card.address.required"
                   ng-readonly="credit_card.address.readonly"
                   maxlength="credit_card.address.maxlength"
                   icon="'map'"
                   valid="credit_card.address.valid"
                   name="'address'"
                   data-e2e="cc_address">
    </cc-text-input>
  </div>
  <div class="cc-fields-layout__flex-row">
    <div class="cc-fields-layout__field cc-fields-layout__country">
      <credit-card-country-component ng-model="credit_card.country.value"
                                     ng-disabled="credit_card.country.disabled"
                                     ng-required="credit_card.country.required"
                                     ng-readonly="credit_card.country.readonly"
                                     on-change="credit_card.country.onChangeCallback"
                                     on-country-select="credit_card.country.onCountrySelect"
                                     valid="credit_card.country.valid"
                                     placeholder="'Country' | t"
                                     countries="credit_card.country.items"
                                     title="credit_card.country.title"
                                     icon="'globe'"
                                     name="'country'"
                                     data-e2e="cc_county">
      </credit-card-country-component>
    </div>
    <div class="cc-fields-layout__field cc-fields-layout__state">
      <credit-card-state-component ng-model="credit_card.state.value"
                                   ng-disabled="credit_card.state.disabled"
                                   ng-required="credit_card.state.required"
                                   ng-readonly="credit_card.state.readonly"
                                   on-change="credit_card.state.onChangeCallback"
                                   on-state-select="credit_card.state.onStateSelect"
                                   valid="credit_card.state.valid"
                                   placeholder="'State' | t"
                                   is-dropdown-shown="credit_card.state.isDropdownShown"
                                   states="credit_card.state.items"
                                   title="credit_card.state.title"
                                   icon="'map'"
                                   name="'state'"
                                   data-e2e="cc_state">
      </credit-card-state-component>
    </div>
  </div>
  <div class="cc-fields-layout__flex-row">
    <div class="cc-fields-layout__field cc-fields-layout__city">
      <credit-card-city-component ng-model="credit_card.city.value"
                                  ng-disabled="credit_card.city.disabled"
                                  ng-required="credit_card.city.required"
                                  ng-readonly="credit_card.city.readonly"
                                  on-change="credit_card.city.onChangeCallback"
                                  on-city-select="credit_card.city.onCitySelect"
                                  valid="credit_card.city.valid"
                                  placeholder="'City' | t"
                                  is-dropdown-shown="credit_card.city.isDropdownShown"
                                  cities="credit_card.city.items"
                                  title="credit_card.city.title"
                                  icon="'map'"
                                  name="'city'"
                                  data-e2e="cc_city">
      </credit-card-city-component>
    </div>

    <div class="cc-fields-layout__field cc-fields-layout__postal-code">
      <credit-card-postal-code placeholder="'ZIP/Postal code' | t"
                               ng-model="credit_card.zip.value"
                               on-change="credit_card.zip.onChangeCallback"
                               ng-disabled="credit_card.zip.disabled"
                               ng-required="credit_card.zip.required"
                               ng-readonly="credit_card.zip.readonly"
                               maxlength="credit_card.zip.maxlength"
                               valid="credit_card.zip.valid"
                               name="'zip'">
      </credit-card-postal-code>
    </div>
  </div>
  <div class="cc-fields-layout__flex-row">
    <div class="cc-fields-layout__field cc-fields-layout__phone-number">
      <cc-phone-number-component placeholder="'Phone number' | t"
                                 ng-model="credit_card.phone.value"
                                 on-change="credit_card.phone.onChangeCallback"
                                 ng-disabled="credit_card.phone.disabled"
                                 ng-required="credit_card.phone.required"
                                 ng-readonly="credit_card.phone.readonly"
                                 maxlength="credit_card.phone.maxlength"
                                 valid="credit_card.phone.valid"
                                 validation-rule="'numeric'"
                                 name="'phone'">
      </cc-phone-number-component>
    </div>
  </div>
</div>

</script>

<script type="text/ng-template" id="/frontend/providers/components/cybersourcetms/checkout/component.shtml">
<div class="cybersourcetms-wrapper new-card-form">
    <div class="row">
        <div desktop class="cc_stored_cards" ng-show="!cc.payWithNew && cc.initiated">
            <div class="add-credit-card-wrapper">
                <h4>
                    <t>Your credit and debit cards</t>
                </h4>
                <a href="javascript:void(0)" class="add-credit-card" ng-click="cc.payWithNew = true"
                   ng-show="cc.stored.length > 0">
                    +
                    <t>Add a card</t>
                </a>
            </div>
            <table class="payment-method-card" ng-show="cc.stored.length > 0">
                <tr class="payment-method-card-row" ng-repeat="method in cc.stored"
                    ng-class="{'selected' : $parent.cc.selectedUpiId == method.id}">
                    <td class="payment-method-card-cell">
                        <input type="radio" name="stored_method" value="{{method.id}}"
                               ng-model="$parent.cc.selectedUpiId"/>
                    </td>
                    <td class="payment-method-card-cell">
                        <div class="credit-card-{{method.identifier}}"></div>
                    </td>
                    <td class="payment-method-card-cell">
                        <div>{{method.type | tc:"checkout.platform"}} *{{method.ending_in}}</div>
                    </td>
                    <td class="payment-method-card-cell">
                        <t>Expires in</t>
                        {{method.expire_month}}/{{method.expire_year}}
                    </td>
                </tr>
            </table>
        </div>

        <div mobile class="cc_stored_cards" ng-show="cc.initiated">
            <table class="payment-method-card" ng-show="cc.stored.length > 0">
                <tr class="payment-method-card-row" ng-repeat="method in cc.stored"
                    ng-class="{'selected' : $parent.cc.selectedUpiId == method.id && $parent.cc.payWithNew != true}">
                    <td class="payment-method-card-cell">
                        <input type="radio" name="stored_method" value="{{method.id}}"
                               ng-model="$parent.cc.selectedUpiId"
                               ng-click="$parent.cc.payWithNew = false"/>
                    </td>
                    <td class="payment-method-card-cell">
                        <div class="credit-card-{{method.identifier}}"></div>
                    </td>
                    <td class="payment-method-card-cell">
                        <div>*{{method.ending_in}}</div>
                    </td>
                </tr>
                <tr class="payment-method-card-row" ng-class="{'selected' : $parent.cc.payWithNew == true}">
                    <td class="payment-method-card-cell">
                        <input type="radio" name="stored_method" ng-model="$parent.cc.payWithNew" ng-value="true"/>
                    </td>
                    <td class="payment-method-card-cell" colspan="2">
                        <t>Add a new card</t>
                    </td>
                </tr>
            </table>
        </div>

        <div class="cc_new_card" ng-show="cc.payWithNew && cc.initiated">
            <div desktop class="go-back-to-cards-wrapper">
                <a href="javascript:void(0)" class="go-back-to-cards" ng-click="cc.payWithNew = false"
                   ng-show="cc.stored.length > 0">
                    <t>Return to saved cards</t>
                </a>
                <h4>
                    <t>Add a new credit or debit card</t>
                </h4>
            </div>
            <form class="new-card-form" name="ccForm" role="form">
                <dynamic-base-inputs-component name="providerName"
                                               credit-card="credit_card"></dynamic-base-inputs-component>
                <div class="payment-system-condition">
                        <span ng-if="!isSubscription()">
                            <div class="custom-checkbox">
                                <input type="checkbox" name="store_in_vault" ng-model="credit_card.store_in_vault"
                                       id="rermber-my-card1-cybersourcetms"/>
                                <label for="rermber-my-card1-cybersourcetms">
                                    <t>Remember my card for future payments</t>
                                </label>
                            </div>
                        </span>
                    <span ng-if="isSubscription()">
                            <input type="hidden" name="store_in_vault" ng-model="credit_card.store_in_vault"/>
                        </span>
                    <div class="custom-checkbox" ng-if="credit_card.store_in_vault">
                        <input type="checkbox" name="defaultPaymentMethodId" ng-model="cc.defaultPaymentMethodId"
                               id="default-payment-method-cybersourcetms"/>
                        <label for="default-payment-method-cybersourcetms">
                            <t>Apply this payment method to all active subscriptions</t>
                        </label>
                    </div>
                </div>
            </form>
        </div>
        <div consents-list></div>
        <div class="footer-modal">
            <div class="auto-renew-purchase" ng-show="isSelectedTermAutoRenewChoiceAvailable()">
                <input class="auto-renew-purchase-checkbox" type="checkbox" ng-model="input.autoRenew"
                       id="auto_renew"/>
                <label class="auto-renew-purchase-label" for="auto_renew">
                    <t>Automatically renew my subscription when the time comes.</t>
                </label>
            </div>
            <div ng-show="isConfirmStepEnabled()" class="complete-purchase-button" goto-confirmation-button
                 title="{{'Complete Purchase' | t}}"></div>
            <div ng-show="!isConfirmStepEnabled()" class="complete-purchase-button" complete-purchase-button
                 title="{{'Complete Purchase' | t}}"></div>
        </div>
    </div>
</div>
</script>

<script type="text/ng-template" id="/frontend/providers/components/cybersourcetms/common/baseTemplate.shtml">
<div class="cc-fields-layout">
    <div class="cc-fields-layout__field cc-fields-layout__card-number cybersourcetms-microform-container"
         id="cybersourcetms-card-number-container">

    </div>
    <div class="cc-fields-layout__field cc-fields-layout__expire">
        <cc-expire-component ng-model="credit_card.expire.value"
                             on-change="credit_card.expire.onChangeCallback"
                             ng-disabled="credit_card.expire.disabled"
                             ng-required="credit_card.expire.required"
                             ng-readonly="credit_card.expire.readonly"
                             maxlength="credit_card.expire.maxlength"
                             valid="credit_card.expire.valid"
                             name="'expire'"
                             on-change="onChangeCallback">
        </cc-expire-component>
    </div>
    <div class="cc-fields-layout__field cc-fields-layout__cvv cybersourcetms-microform-container"
         id="cybersourcetms-cvv-container">
    </div>
</div>
</script>

<script type="text/ng-template" id="/frontend/providers/components/stripe/checkout/component.shtml">
<div id="stripe-input-style" class="stripe-input-style">
{
    "elements": {
        "fonts": [
            {
                "family": "graphik",
                "src": "url(/fonts/Graphik-Regular-Web.woff2) format('woff2')"
            }
        ]
    },
    "cardNumber": {
        "style": {
            "base": {
                "fontSize": "13px"
            },
        "invalid": {
            "color": "black"
            }
        },
        "placeholder": "Card number"
    },
    "cardCvc": {
        "style": {
            "base": {
                "fontSize": "13px"
            }
        },
        "placeholder": "CVV"
    },
    "cardExpiry": {
        "style": {
            "base": {
                "fontSize": "13px"
            }
        },
        "placeholder": "MM/YY"
    },
    "postalCode": {
        "style": {
            "base": {
                "fontSize": "13px"
            }
        },
        "placeholder": "Postal code"
    }
}
</div>
<div class="stripe-wrapper new-card-form">
    <div class="row">
        <!--TODO - find a way to isolate this component and logic outside, in checkout, or at least make components-->
        <div desktop class="cc_stored_cards" ng-show="!cc.payWithNew && cc.initiated">
            <div class="add-credit-card-wrapper">
                <h4>
                    <t>Your credit and debit cards</t>
                </h4>
                <a href="javascript:void(0)" class="add-credit-card" ng-click="cc.payWithNew = true"
                   ng-show="cc.stored.length > 0">
                    +
                    <t>Add a card</t>
                </a>
            </div>
            <table class="payment-method-card" ng-show="cc.stored.length > 0">
                <tr class="payment-method-card-row" ng-repeat="method in cc.stored"
                    ng-class="{'selected' : $parent.cc.selectedUpiId == method.id}">
                    <td class="payment-method-card-cell">
                        <input type="radio" name="stored_method" value="{{method.id}}"
                               ng-model="$parent.cc.selectedUpiId"/>
                    </td>
                    <td class="payment-method-card-cell">
                        <div class="credit-card-{{method.identifier}}"></div>
                    </td>
                    <td class="payment-method-card-cell">
                        <div>{{method.type | tc:"checkout.platform"}} *{{method.ending_in}}</div>
                    </td>
                    <td class="payment-method-card-cell">
                        <t>Expires in</t>
                        {{method.expire_month}}/{{method.expire_year}}
                    </td>
                </tr>
            </table>
        </div>

        <div mobile class="cc_stored_cards" ng-show="cc.initiated">
            <table class="payment-method-card" ng-show="cc.stored.length > 0">
                <tr class="payment-method-card-row" ng-repeat="method in cc.stored"
                    ng-class="{'selected' : $parent.cc.selectedUpiId == method.id && $parent.cc.payWithNew != true}">
                    <td class="payment-method-card-cell">
                        <input type="radio" name="stored_method" value="{{method.id}}"
                               ng-model="$parent.cc.selectedUpiId"
                               ng-click="$parent.cc.payWithNew = false"/>
                    </td>
                    <td class="payment-method-card-cell">
                        <div class="credit-card-{{method.identifier}}"></div>
                    </td>
                    <td class="payment-method-card-cell">
                        <div>*{{method.ending_in}}</div>
                    </td>
                </tr>
                <tr class="payment-method-card-row" ng-class="{'selected' : $parent.cc.payWithNew == true}">
                    <td class="payment-method-card-cell">
                        <input type="radio" name="stored_method" ng-model="$parent.cc.payWithNew" ng-value="true"/>
                    </td>
                    <td class="payment-method-card-cell" colspan="2">
                        <t>Add a new card</t>
                    </td>
                </tr>
            </table>
        </div>

        <div class="cc_new_card" ng-show="cc.payWithNew && cc.initiated">
            <div desktop class="go-back-to-cards-wrapper">
                <a href="javascript:void(0)" class="go-back-to-cards" ng-click="cc.payWithNew = false"
                   ng-show="cc.stored.length > 0">
                    <t>Return to saved cards</t>
                </a>
                <h4>
                    <t>Add a new credit or debit card</t>
                </h4>
            </div>
            <form class="new-card-form" name="ccForm" role="form">
                <dynamic-base-inputs-component name="providerName"
                                               zip-is-hidden="zipIsHidden"
                                               credit-card="credit_card"></dynamic-base-inputs-component>

                <div class="payment-system-condition">
                    <span ng-if="!isSubscription()">
                        <div class="custom-checkbox">
                            <input type="checkbox" name="store_in_vault" class="stripe-agreement"
                                   ng-model="credit_card.store_in_vault"
                                   id="remember-my-stripe-card"/>
                            <label for="remember-my-stripe-card">
                                <t>Remember my card for future payments</t>
                            </label>
                        </div>
                    </span>
                    <span ng-if="isSubscription()">
                        <input type="hidden" name="store_in_vault" ng-model="credit_card.store_in_vault"/>
                    </span>
                    <div class="custom-checkbox" ng-if="credit_card.store_in_vault">
                        <input type="checkbox" name="needToApplyDefaultPaymentMethod"
                               ng-model="credit_card.needToApplyDefaultPaymentMethod"
                               id="default-payment-method-stripe"/>
                        <label for="default-payment-method-stripe">
                            <t>Apply this payment method to all active subscriptions</t>
                        </label>
                    </div>
                </div>
            </form>
        </div>
        <div consents-list></div>
        <div class="footer-modal">
            <div class="auto-renew-purchase" ng-show="isSelectedTermAutoRenewChoiceAvailable()">
                <input class="auto-renew-purchase-checkbox" type="checkbox" ng-model="input.autoRenew"
                       id="auto_renew"/>
                <label class="auto-renew-purchase-label" for="auto_renew">
                    <t>Automatically renew my subscription when the time comes.</t>
                </label>
            </div>
            <div ng-show="isConfirmStepEnabled()" class="complete-purchase-button" goto-confirmation-button
                 title="{{'Complete Purchase' | t}}"></div>
            <div ng-show="!isConfirmStepEnabled()" class="complete-purchase-button" complete-purchase-button
                 title="{{'Complete Purchase' | t}}"></div>
        </div>
    </div>
</div>

</script>

<script type="text/ng-template" id="/frontend/providers/components/stripe/common/baseTemplate.shtml">
<div class="cc-fields-layout" ng-init="callbackOnFormInit()">
    <div class="cc-fields-layout__field cc-fields-layout__card-number">
        <credit-card-number ng-model="credit_card.num.value"
                            ng-show="credit_card.num.value"
                            on-change="credit_card.num.onChangeCallback"
                            ng-disabled="true"
                            ng-required="credit_card.num.required"
                            ng-readonly="credit_card.num.readonly"
                            maxlength="credit_card.num.maxlength"
                            valid="credit_card.num.valid"
                            name="'num'">
        </credit-card-number>
        <div class="cc-field-wrap" ng-show="!credit_card.num.value">
            <div class="cc-field-outer-wrap">
                <div ng-show="credit_card.num.showLabel === true" class="control-label"><t>Card number</t></div>
                <div class="cc-field-outer-wrap__field cc-field cc-field--num">
                    <label class="cc-field__icon cc-field__icon--card"></label>
                    <div id="stripe-card-number-element" class="cc-field__input-wrap"></div>
                </div>
            </div>
        </div>
    </div>
    <div class="cc-fields-layout__field cc-fields-layout__expire">
        <cc-expire-component ng-model="credit_card.expire.value"
                             ng-show="credit_card.num.value"
                             on-change="credit_card.expire.onChangeCallback"
                             ng-disabled="credit_card.expire.disabled"
                             ng-required="credit_card.expire.required"
                             ng-readonly="credit_card.expire.readonly"
                             maxlength="credit_card.expire.maxlength"
                             valid="credit_card.expire.valid"
                             name="'expire'"
                             on-change="onChangeCallback">
        </cc-expire-component>
        <div class="cc-field-wrap" ng-show="!credit_card.num.value">
            <div class="cc-field-outer-wrap">
                <div ng-show="credit_card.expire.showLabel === true" class="control-label"><t>Expiration</t></div>
                <div class="cc-field-outer-wrap__field cc-field cc-field--expire">
                    <label class="cc-field__icon cc-field__icon--expiration"></label>
                    <div id="stripe-card-expiry-element" class="cc-field__input-wrap"></div>
                </div>
            </div>
        </div>
    </div>
    <div class="cc-fields-layout__field cc-fields-layout__cvv">
        <credit-card-cvv ng-model="credit_card.cvv.value"
                         ng-show="credit_card.num.value"
                         on-change="credit_card.cvv.onChangeCallback"
                         ng-disabled="true"
                         ng-required="credit_card.cvv.required"
                         ng-readonly="credit_card.cvv.readonly"
                         maxlength="credit_card.cvv.maxlength"
                         valid="credit_card.cvv.valid"
                         name="'cvv'">
        </credit-card-cvv>
        <div class="cc-field-wrap" ng-show="!credit_card.num.value">
            <div class="cc-field-outer-wrap">
                <div ng-show="credit_card.cvv.showLabel === true" class="control-label"><t>CVV</t></div>
                <div class="cc-field-outer-wrap__field cc-field cc-field--cvv">
                    <label class="cc-field__icon ng-scope cc-field__icon--cvv"></label>
                    <div id="stripe-card-cvc-element" class="cc-field__input-wrap"></div>
                </div>
            </div>
        </div>
    </div>
    <div class="cc-fields-layout__field cc-fields-layout__postal-code" ng-show="!zipIsHidden">
        <credit-card-postal-code ng-model="credit_card.postal_code.value"
                                 ng-show="credit_card.num.value"
                                 on-change="credit_card.postal_code.onChangeCallback"
                                 ng-disabled="true"
                                 ng-required="credit_card.postal_code.required"
                                 ng-readonly="credit_card.postal_code.readonly"
                                 maxlength="credit_card.postal_code.maxlength"
                                 valid="credit_card.postal_code.valid"
                                 name="'postal_code'">
        </credit-card-postal-code>
        <div class="cc-field-wrap" ng-show="!credit_card.num.value">
            <div class="cc-field-outer-wrap">
                <div ng-show="credit_card.postal_code.showLabel === true" class="control-label"><t>Postal code</t></div>
                <div class="cc-field-outer-wrap__field cc-field cc-field--postal_code">
                    <label class="cc-field__icon ng-scope cc-field__icon--zip-code"></label>
                    <div id="stripe-postal-code-element" class="cc-field__input-wrap"></div>
                </div>
            </div>
        </div>
    </div>
</div>

</script>

<script type="text/ng-template" id="/frontend/providers/components/payubrazilcc/checkout/component.shtml">
<div class="payu-brazil-cc-wrapper new-card-form">
    <div class="row">
        <div desktop class="cc_stored_cards" ng-show="!cc.payWithNew && cc.initiated">
            <div class="add-credit-card-wrapper">
                <h4>
                    <t>Your credit and debit cards</t>
                </h4>
                <a href="javascript:void(0)" class="add-credit-card" ng-click="cc.payWithNew = true"
                   ng-show="cc.stored.length > 0">
                    +
                    <t>Add a card</t>
                </a>
            </div>
            <table class="payment-method-card" ng-show="cc.stored.length > 0">
                <tr class="payment-method-card-row" ng-repeat="method in cc.stored"
                    ng-class="{'selected' : $parent.cc.selectedUpiId == method.id}">
                    <td class="payment-method-card-cell">
                        <input type="radio" name="stored_method" value="{{method.id}}"
                               ng-model="$parent.cc.selectedUpiId"/>
                    </td>
                    <td class="payment-method-card-cell">
                        <div class="credit-card-{{method.identifier}}"></div>
                    </td>
                    <td class="payment-method-card-cell">
                        <div>{{method.type | tc:"checkout.platform"}} *{{method.ending_in}}</div>
                    </td>
                    <td class="payment-method-card-cell">
                        <t>Expires in</t>
                        {{method.expire_month}}/{{method.expire_year}}
                    </td>
                </tr>
            </table>
        </div>

        <div mobile class="cc_stored_cards" ng-show="cc.initiated">
            <table class="payment-method-card" ng-show="cc.stored.length > 0">
                <tr class="payment-method-card-row" ng-repeat="method in cc.stored"
                    ng-class="{'selected' : $parent.cc.selectedUpiId == method.id && $parent.cc.payWithNew != true}">
                    <td class="payment-method-card-cell">
                        <input type="radio" name="stored_method" value="{{method.id}}"
                               ng-model="$parent.cc.selectedUpiId"
                               ng-click="$parent.cc.payWithNew = false"/>
                    </td>
                    <td class="payment-method-card-cell">
                        <div class="credit-card-{{method.identifier}}"></div>
                    </td>
                    <td class="payment-method-card-cell">
                        <div>*{{method.ending_in}}</div>
                    </td>
                </tr>
                <tr class="payment-method-card-row" ng-class="{'selected' : $parent.cc.payWithNew == true}">
                    <td class="payment-method-card-cell">
                        <input type="radio" name="stored_method" ng-model="$parent.cc.payWithNew" ng-value="true"/>
                    </td>
                    <td class="payment-method-card-cell" colspan="2">
                        <t>Add a new card</t>
                    </td>
                </tr>
            </table>
        </div>

        <div class="cc_new_card" ng-show="cc.payWithNew && cc.initiated">
            <div desktop class="go-back-to-cards-wrapper">
                <a href="javascript:void(0)" class="go-back-to-cards" ng-click="cc.payWithNew = false"
                   ng-show="cc.stored.length > 0">
                    <t>Return to saved cards</t>
                </a>
                <h4>
                    <t>Add a new credit or debit card</t>
                </h4>
            </div>
            <form class="new-card-form" name="ccForm" role="form">
                <dynamic-base-inputs-component name="providerName"
                                               credit-card="credit_card"></dynamic-base-inputs-component>
                <div class="payment-system-condition">
                        <span ng-if="!isSubscription()">
                            <div class="custom-checkbox">
                                <input type="checkbox" name="store_in_vault" ng-model="credit_card.store_in_vault"
                                       id="rermber-my-card1-payu-brazil-cc"/>
                                <label for="rermber-my-card1-payu-brazil-cc">
                                    <t>Remember my card for future payments</t>
                                </label>
                            </div>
                        </span>
                    <span ng-if="isSubscription()">
                            <input type="hidden" name="store_in_vault" ng-model="credit_card.store_in_vault"/>
                        </span>
                    <div class="custom-checkbox" ng-if="credit_card.store_in_vault">
                        <input type="checkbox" name="defaultPaymentMethodId" ng-model="cc.defaultPaymentMethodId"
                               id="default-payment-method-payu-brazil-cc"/>
                        <label for="default-payment-method-payu-brazil-cc">
                            <t>Apply this payment method to all active subscriptions</t>
                        </label>
                    </div>
                </div>
            </form>
        </div>
        <div consents-list></div>
        <div class="footer-modal">
            <div class="auto-renew-purchase" ng-show="isSelectedTermAutoRenewChoiceAvailable()">
                <input class="auto-renew-purchase-checkbox" type="checkbox" ng-model="input.autoRenew"
                       id="auto_renew"/>
                <label class="auto-renew-purchase-label" for="auto_renew">
                    <t>Automatically renew my subscription when the time comes.</t>
                </label>
            </div>
            <div ng-show="isConfirmStepEnabled()" class="complete-purchase-button" goto-confirmation-button
                 title="{{'Complete Purchase' | t}}"></div>
            <div ng-show="!isConfirmStepEnabled()" class="complete-purchase-button" complete-purchase-button
                 title="{{'Complete Purchase' | t}}"></div>
        </div>
    </div>
</div>
</script>

<script type="text/ng-template" id="/frontend/providers/components/payubrazilcc/common/baseTemplate.shtml">
<div class="cc-fields-layout">
  <div class="cc-fields-layout__flex-row cc-fields-layout__flex-row--card-number">
    <div class="cc-fields-layout__field cc-fields-layout__card-number">
      <credit-card-number ng-model="credit_card.num.value"
                          on-change="credit_card.num.onChangeCallback"
                          ng-disabled="credit_card.num.disabled"
                          ng-required="credit_card.num.required"
                          ng-readonly="credit_card.num.readonly"
                          maxlength="credit_card.num.maxlength"
                          valid="credit_card.num.valid"
                          name="'num'">
      </credit-card-number>
    </div>
    <div class="cc-fields-layout__field cc-fields-layout__field--no-margin-bottom cc-fields-layout__field--group">
      <div class="cc-fields-layout__flex-row">
        <div class="cc-fields-layout__field cc-fields-layout__expire">
          <cc-expire-component ng-model="credit_card.expire.value"
                               on-change="credit_card.expire.onChangeCallback"
                               ng-disabled="credit_card.expire.disabled"
                               ng-required="credit_card.expire.required"
                               ng-readonly="credit_card.expire.readonly"
                               maxlength="credit_card.expire.maxlength"
                               valid="credit_card.expire.valid"
                               name="'expire'">
          </cc-expire-component>
        </div>
        <div class="cc-fields-layout__field cc-fields-layout__cvv">
          <credit-card-cvv ng-model="credit_card.cvv.value"
                           on-change="credit_card.cvv.onChangeCallback"
                           ng-disabled="credit_card.cvv.disabled"
                           ng-required="credit_card.cvv.required"
                           ng-readonly="credit_card.cvv.readonly"
                           maxlength="credit_card.cvv.maxlength"
                           valid="credit_card.cvv.valid"
                           name="'cvv'">
          </credit-card-cvv>
        </div>
      </div>
    </div>
  </div>
  <div class="cc-fields-layout__field cc-fields-layout__card-holder">
    <credit-card-holder ng-model="credit_card.holder.value"
                        on-change="credit_card.holder.onChangeCallback"
                        ng-disabled="credit_card.holder.disabled"
                        icon="'client'"
                        ng-required="credit_card.holder.required"
                        ng-readonly="credit_card.holder.readonly"
                        maxlength="credit_card.holder.maxlength"
                        valid="credit_card.holder.valid"
                        name="'holder'">
    </credit-card-holder>
  </div>
  <div class="cc-fields-layout__flex-row">
    <div class="cc-fields-layout__field cc-fields-layout__identification-type">
      <credit-card-identification-type-component ng-model="credit_card.identificationType.value"
                                                 on-identification-type-select="credit_card.identificationType.onIdentificationTypeSelect"
                                                 ng-disabled="credit_card.identificationType.disabled"
                                                 ng-required="credit_card.identificationType.required"
                                                 ng-readonly="credit_card.identificationType.readonly"
                                                 placeholder="'Identification type' | t"
                                                 valid="credit_card.identificationType.valid"
                                                 is-dropdown-shown="credit_card.identificationType.isDropdownShown"
                                                 identification-types="credit_card.identificationType.items"
                                                 title="credit_card.identificationType.title"
                                                 data-e2e="cc_identificationType"
                                                 icon="'identification-type'"
                                                 name="'identificationType'">
      </credit-card-identification-type-component>
    </div>
    <div class="cc-fields-layout__field cc-fields-layout__identification-number">
      <cc-text-input placeholder="'Identification number' | t"
                     ng-model="credit_card.identificationNumber.value"
                     ng-readonly="credit_card.identificationNumber.readonly"
                     ng-required="credit_card.identificationNumber.required"
                     ng-disabled="credit_card.identificationNumber.disabled"
                     icon="'national-id'"
                     class="cc-field-wrap fs-block"
                     class-name="className"
                     on-change="credit_card.identificationNumber.onChangeCallback"
                     name="'identificationNumber'"
                     format-type="credit_card.identificationNumber.formatType"
                     data-e2e="cc_identificationNumber"
                     valid="credit_card.identificationNumber.valid">
      </cc-text-input>
    </div>
  </div>
  <div class="cc-fields-layout__flex-row">
    <div class="cc-fields-layout__field cc-fields-layout__first-name">
      <cc-text-input placeholder="'First name' | t"
                     ng-model="credit_card.firstName.value"
                     on-change="credit_card.firstName.onChangeCallback"
                     ng-disabled="credit_card.firstName.disabled"
                     icon="'client'"
                     ng-required="credit_card.firstName.required"
                     ng-readonly="credit_card.firstName.readonly"
                     maxlength="credit_card.firstName.maxlength"
                     valid="credit_card.firstName.valid"
                     name="'firstName'"
                     data-e2e="cc_first_name">
      </cc-text-input>
    </div>

    <div class="cc-fields-layout__field cc-fields-layout__last-name">
      <cc-text-input placeholder="'Last name' | t"
                     ng-model="credit_card.lastName.value"
                     on-change="credit_card.lastName.onChangeCallback"
                     ng-disabled="credit_card.lastName.disabled"
                     icon="'client'"
                     ng-required="credit_card.lastName.required"
                     ng-readonly="credit_card.lastName.readonly"
                     maxlength="credit_card.lastName.maxlength"
                     valid="credit_card.lastName.valid"
                     name="'lastName'"
                     data-e2e="cc_last_name">
      </cc-text-input>
    </div>
  </div>

  <div class="cc-fields-layout__field cc-fields-layout__address">
    <cc-text-input placeholder="'Address' | t"
                   ng-model="credit_card.address.value"
                   on-change="credit_card.address.onChangeCallback"
                   ng-disabled="credit_card.address.disabled"
                   ng-required="credit_card.address.required"
                   ng-readonly="credit_card.address.readonly"
                   maxlength="credit_card.address.maxlength"
                   icon="'map'"
                   valid="credit_card.address.valid"
                   name="'address'"
                   data-e2e="cc_address">
    </cc-text-input>
  </div>
  <div class="cc-fields-layout__flex-row">
    <div class="cc-fields-layout__field cc-fields-layout__country">
      <credit-card-country-component ng-model="credit_card.country.value"
                                     ng-disabled="credit_card.country.disabled"
                                     ng-required="credit_card.country.required"
                                     ng-readonly="credit_card.country.readonly"
                                     on-change="credit_card.country.onChangeCallback"
                                     on-country-select="credit_card.country.onCountrySelect"
                                     valid="credit_card.country.valid"
                                     placeholder="'Country' | t"
                                     countries="credit_card.country.items"
                                     title="credit_card.country.title"
                                     icon="'globe'"
                                     name="'country'"
                                     data-e2e="cc_county">
      </credit-card-country-component>
    </div>
    <div class="cc-fields-layout__field cc-fields-layout__state">
      <credit-card-state-component ng-model="credit_card.state.value"
                                   ng-disabled="credit_card.state.disabled"
                                   ng-required="credit_card.state.required"
                                   ng-readonly="credit_card.state.readonly"
                                   on-change="credit_card.state.onChangeCallback"
                                   on-state-select="credit_card.state.onStateSelect"
                                   valid="credit_card.state.valid"
                                   placeholder="'State' | t"
                                   is-dropdown-shown="credit_card.state.isDropdownShown"
                                   states="credit_card.state.items"
                                   title="credit_card.state.title"
                                   icon="'map'"
                                   name="'state'"
                                   data-e2e="cc_state">
      </credit-card-state-component>
    </div>
  </div>
  <div class="cc-fields-layout__flex-row">
    <div class="cc-fields-layout__field cc-fields-layout__city">
      <credit-card-city-component ng-model="credit_card.city.value"
                                  ng-disabled="credit_card.city.disabled"
                                  ng-required="credit_card.city.required"
                                  ng-readonly="credit_card.city.readonly"
                                  on-change="credit_card.city.onChangeCallback"
                                  on-city-select="credit_card.city.onCitySelect"
                                  valid="credit_card.city.valid"
                                  placeholder="'City' | t"
                                  is-dropdown-shown="credit_card.city.isDropdownShown"
                                  cities="credit_card.city.items"
                                  title="credit_card.city.title"
                                  icon="'map'"
                                  name="'city'"
                                  data-e2e="cc_city">
      </credit-card-city-component>
    </div>

    <div class="cc-fields-layout__field cc-fields-layout__postal-code">
      <credit-card-postal-code placeholder="'ZIP/Postal code' | t"
                               ng-model="credit_card.zip.value"
                               on-change="credit_card.zip.onChangeCallback"
                               ng-disabled="credit_card.zip.disabled"
                               ng-required="credit_card.zip.required"
                               ng-readonly="credit_card.zip.readonly"
                               maxlength="credit_card.zip.maxlength"
                               valid="credit_card.zip.valid"
                               name="'zip'">
      </credit-card-postal-code>
    </div>
  </div>
  <div class="cc-fields-layout__flex-row">
    <div class="cc-fields-layout__field cc-fields-layout__phone-number">
      <cc-phone-number-component placeholder="'Phone number' | t"
                                 ng-model="credit_card.phone.value"
                                 on-change="credit_card.phone.onChangeCallback"
                                 ng-disabled="credit_card.phone.disabled"
                                 ng-required="credit_card.phone.required"
                                 ng-readonly="credit_card.phone.readonly"
                                 maxlength="credit_card.phone.maxlength"
                                 valid="credit_card.phone.valid"
                                 validation-rule="'numeric'"
                                 name="'phone'">
      </cc-phone-number-component>
    </div>
  </div>
</div>

</script>

<script type="text/ng-template" id="/frontend/providers/components/creditguard/checkout/component.shtml">
<div class="creditcard-wrapper new-card-form">
  <div class="row">
    <div class="footer-modal">
      <div>
        <div ng-show="!isConfirmStepEnabled()" class="complete-purchase-button" complete-purchase-button
             title="{{'Complete Purchase' | t}}"></div>
      </div>
    </div>
  </div>
</div>

</script>

<script type="text/ng-template" id="/frontend/providers/components/paymentez/checkout/component.shtml">
<div class="paymentez-wrapper new-card-form">
    <div class="row">
        <!--TODO - find a way to isolate this component and logic outside, in checkout, or at least make components-->
        <div desktop class="cc_stored_cards" ng-show="!cc.payWithNew && cc.initiated">
            <div class="add-credit-card-wrapper">
                <h4>
                    <t>Your credit and debit cards</t>
                </h4>
                <a href="javascript:void(0)" class="add-credit-card" ng-click="cc.payWithNew = true"
                   ng-show="cc.stored.length > 0">
                    +
                    <t>Add a card</t>
                </a>
            </div>
            <table class="payment-method-card" ng-show="cc.stored.length > 0">
                <tr class="payment-method-card-row" ng-repeat="method in cc.stored"
                    ng-class="{'selected' : $parent.cc.selectedUpiId == method.id}">
                    <td class="payment-method-card-cell">
                        <input type="radio" name="stored_method" value="{{method.id}}"
                               ng-model="$parent.cc.selectedUpiId"/>
                    </td>
                    <td class="payment-method-card-cell">
                        <div class="credit-card-{{method.identifier}}"></div>
                    </td>
                    <td class="payment-method-card-cell">
                        <div>{{method.type | tc:"checkout.platform"}} *{{method.ending_in}}</div>
                    </td>
                    <td class="payment-method-card-cell">
                        <t>Expires in</t>
                        {{method.expire_month}}/{{method.expire_year}}
                    </td>
                </tr>
            </table>
        </div>

        <div mobile class="cc_stored_cards" ng-show="cc.initiated">
            <table class="payment-method-card" ng-show="cc.stored.length > 0">
                <tr class="payment-method-card-row" ng-repeat="method in cc.stored"
                    ng-class="{'selected' : $parent.cc.selectedUpiId == method.id && $parent.cc.payWithNew != true}">
                    <td class="payment-method-card-cell">
                        <input type="radio" name="stored_method" value="{{method.id}}"
                               ng-model="$parent.cc.selectedUpiId"
                               ng-click="$parent.cc.payWithNew = false"/>
                    </td>
                    <td class="payment-method-card-cell">
                        <div class="credit-card-{{method.identifier}}"></div>
                    </td>
                    <td class="payment-method-card-cell">
                        <div>*{{method.ending_in}}</div>
                    </td>
                </tr>
                <tr class="payment-method-card-row" ng-class="{'selected' : $parent.cc.payWithNew == true}">
                    <td class="payment-method-card-cell">
                        <input type="radio" name="stored_method" ng-model="$parent.cc.payWithNew" ng-value="true"/>
                    </td>
                    <td class="payment-method-card-cell" colspan="2">
                        <t>Add a new card</t>
                    </td>
                </tr>
            </table>
        </div>

        <div class="cc_new_card" ng-show="cc.payWithNew && cc.initiated">
            <div desktop class="go-back-to-cards-wrapper">
                <a href="javascript:void(0)" class="go-back-to-cards" ng-click="cc.payWithNew = false"
                   ng-show="cc.stored.length > 0">
                    <t>Return to saved cards</t>
                </a>
                <h4>
                    <t>Add a new credit or debit card</t>
                </h4>
            </div>
            <form class="new-card-form" name="ccForm" role="form">
                <dynamic-base-inputs-component name="providerName"
                                               credit-card="credit_card"></dynamic-base-inputs-component>
                <div class="payment-system-condition">
                        <span ng-if="!isSubscription()">
                            <div class="custom-checkbox">
                                <input type="checkbox" name="store_in_vault" ng-model="credit_card.store_in_vault"
                                       id="rermber-my-card1-paymentez"/>
                                <label for="rermber-my-card1-paymentez">
                                    <t>Remember my card for future payments</t>
                                </label>
                            </div>
                        </span>
                    <span ng-if="isSubscription()">
                            <input type="hidden" name="store_in_vault" ng-model="credit_card.store_in_vault"/>
                        </span>
                    <div class="custom-checkbox" ng-if="credit_card.store_in_vault">
                        <input type="checkbox" name="defaultPaymentMethodId" ng-model="cc.defaultPaymentMethodId"
                               id="default-payment-method-paymentez"/>
                        <label for="default-payment-method-paymentez">
                            <t>Apply this payment method to all active subscriptions</t>
                        </label>
                    </div>
                </div>
            </form>
        </div>
        <div consents-list></div>
        <div class="footer-modal">
            <div class="auto-renew-purchase" ng-show="isSelectedTermAutoRenewChoiceAvailable()">
                <input class="auto-renew-purchase-checkbox" type="checkbox" ng-model="input.autoRenew"
                       id="auto_renew"/>
                <label class="auto-renew-purchase-label" for="auto_renew">
                    <t>Automatically renew my subscription when the time comes.</t>
                </label>
            </div>
            <div ng-show="isConfirmStepEnabled()" class="complete-purchase-button" goto-confirmation-button
                 title="{{'Complete Purchase' | t}}"></div>
            <div ng-show="!isConfirmStepEnabled()" class="complete-purchase-button" complete-purchase-button
                 title="{{'Complete Purchase' | t}}"></div>
        </div>
    </div>
</div>
</script>

<script type="text/ng-template" id="/frontend/providers/components/paymentez/common/baseTemplate.shtml">
<div class="cc-fields-layout">
    <div class="cc-fields-layout__field cc-fields-layout__card-holder">
        <cc-text-input id="paymentez-address"
                       placeholder="'Address' | t"
                       ng-model="credit_card.address.value"
                       ng-readonly="credit_card.address.readonly"
                       ng-required="credit_card.address.required"
                       ng-disabled="credit_card.address.disabled"
                       class="cc-field-wrap fs-block"
                       class-name="className"
                       on-change="credit_card.address.onChangeCallback"
                       name="'address'"
                       data-e2e="cc_address"
                       valid="credit_card.address.valid">
        </cc-text-input>
    </div>
    <div class="cc-fields-layout__field cc-fields-layout__card-holder">
        <cc-text-input id="paymentez-phone"
                       placeholder="'Phone number' | t"
                       ng-model="credit_card.phone.value"
                       ng-readonly="credit_card.phone.readonly"
                       ng-required="credit_card.phone.required"
                       ng-disabled="credit_card.phone.disabled"
                       class="cc-field-wrap fs-block"
                       class-name="className"
                       on-change="credit_card.phone.onChangeCallback"
                       name="'phone'"
                       data-e2e="cc_phone"
                       valid="credit_card.phone.valid">
        </cc-text-input>
    </div>
    <div class="cc-fields-layout__field cc-fields-layout__card-holder">
        <cc-text-input id="paymentez-national-id"
                       placeholder="'National ID' | t"
                       ng-model="credit_card.nationalId.value"
                       ng-readonly="credit_card.nationalId.readonly"
                       ng-required="credit_card.nationalId.required"
                       ng-disabled="credit_card.nationalId.disabled"
                       class="cc-field-wrap fs-block"
                       class-name="className"
                       on-change="credit_card.nationalId.onChangeCallback"
                       name="'nationalId'"
                       data-e2e="cc_nationalId"
                       valid="credit_card.nationalId.valid">
        </cc-text-input>
    </div>
    <div class="cc-fields-layout__field cc-fields-layout__card-holder">
        <credit-card-holder ng-model="credit_card.holder.value"
                            on-change="credit_card.holder.onChangeCallback"
                            ng-disabled="credit_card.holder.disabled"
                            ng-required="credit_card.holder.required"
                            ng-readonly="credit_card.holder.readonly"
                            maxlength="credit_card.holder.maxlength"
                            valid="credit_card.holder.valid"
                            name="'holder'">
        </credit-card-holder>
    </div>
    <div class="cc-fields-layout__field cc-fields-layout__card-number">
        <credit-card-number ng-model="credit_card.num.value"
                            on-change="credit_card.num.onChangeCallback"
                            ng-disabled="credit_card.num.disabled"
                            ng-required="credit_card.num.required"
                            ng-readonly="credit_card.num.readonly"
                            maxlength="credit_card.num.maxlength"
                            valid="credit_card.num.valid"
                            name="'num'">
        </credit-card-number>
    </div>
    <div class="cc-fields-layout__field cc-fields-layout__expire">
        <cc-expire-component ng-model="credit_card.expire.value"
                             on-change="credit_card.expire.onChangeCallback"
                             ng-disabled="credit_card.expire.disabled"
                             ng-required="credit_card.expire.required"
                             ng-readonly="credit_card.expire.readonly"
                             maxlength="credit_card.expire.maxlength"
                             valid="credit_card.expire.valid"
                             name="'expire'"
                             on-change="onChangeCallback">
        </cc-expire-component>
    </div>
    <div class="cc-fields-layout__field cc-fields-layout__cvv">
        <credit-card-cvv ng-model="credit_card.cvv.value"
                         on-change="credit_card.cvv.onChangeCallback"
                         ng-disabled="credit_card.cvv.disabled"
                         ng-required="credit_card.cvv.required"
                         ng-readonly="credit_card.cvv.readonly"
                         maxlength="credit_card.cvv.maxlength"
                         valid="credit_card.cvv.valid"
                         name="'cvv'">
        </credit-card-cvv>
    </div>
</div>

</script>

<script type="text/ng-template" id="/frontend/providers/components/cybersource/checkout/component.shtml">
<div class="cybersource-wrapper new-card-form">
    <div class="row">
        <div desktop class="cc_stored_cards" ng-show="!cc.payWithNew && cc.initiated">
            <div class="add-credit-card-wrapper">
                <h4>
                    <t>Your credit and debit cards</t>
                </h4>
                <a href="javascript:void(0)" class="add-credit-card" ng-click="cc.payWithNew = true"
                   ng-show="cc.stored.length > 0">
                    +
                    <t>Add a card</t>
                </a>
            </div>
            <table class="payment-method-card" ng-show="cc.stored.length > 0">
                <tr class="payment-method-card-row" ng-repeat="method in cc.stored"
                    ng-class="{'selected' : $parent.cc.selectedUpiId == method.id}">
                    <td class="payment-method-card-cell">
                        <input type="radio" name="stored_method" value="{{method.id}}"
                               ng-model="$parent.cc.selectedUpiId"/>
                    </td>
                    <td class="payment-method-card-cell">
                        <div class="credit-card-{{method.identifier}}"></div>
                    </td>
                    <td class="payment-method-card-cell">
                        <div>{{method.type | tc:"checkout.platform"}} *{{method.ending_in}}</div>
                    </td>
                    <td class="payment-method-card-cell">
                        <t>Expires in</t>
                        {{method.expire_month}}/{{method.expire_year}}
                    </td>
                </tr>
            </table>
        </div>

        <div mobile class="cc_stored_cards" ng-show="cc.initiated">
            <table class="payment-method-card" ng-show="cc.stored.length > 0">
                <tr class="payment-method-card-row" ng-repeat="method in cc.stored"
                    ng-class="{'selected' : $parent.cc.selectedUpiId == method.id && $parent.cc.payWithNew != true}">
                    <td class="payment-method-card-cell">
                        <input type="radio" name="stored_method" value="{{method.id}}"
                               ng-model="$parent.cc.selectedUpiId"
                               ng-click="$parent.cc.payWithNew = false"/>
                    </td>
                    <td class="payment-method-card-cell">
                        <div class="credit-card-{{method.identifier}}"></div>
                    </td>
                    <td class="payment-method-card-cell">
                        <div>*{{method.ending_in}}</div>
                    </td>
                </tr>
                <tr class="payment-method-card-row" ng-class="{'selected' : $parent.cc.payWithNew == true}">
                    <td class="payment-method-card-cell">
                        <input type="radio" name="stored_method" ng-model="$parent.cc.payWithNew" ng-value="true"/>
                    </td>
                    <td class="payment-method-card-cell" colspan="2">
                        <t>Add a new card</t>
                    </td>
                </tr>
            </table>
        </div>

        <div class="cc_new_card" ng-show="cc.payWithNew && cc.initiated">
            <div desktop class="go-back-to-cards-wrapper">
                <a href="javascript:void(0)" class="go-back-to-cards" ng-click="cc.payWithNew = false"
                   ng-show="cc.stored.length > 0">
                    <t>Return to saved cards</t>
                </a>
                <h4>
                    <t>Add a new credit or debit card</t>
                </h4>
            </div>
            <form class="new-card-form" name="ccForm" role="form">
                <dynamic-base-inputs-component name="providerName"
                                               credit-card="credit_card"
                                               collect-cardholder-name="cyberSourceCollectCardholderName"></dynamic-base-inputs-component>
                <div class="payment-system-condition">
                        <span ng-if="!isSubscription()">
                            <div class="custom-checkbox">
                                <input type="checkbox" name="store_in_vault" ng-model="credit_card.store_in_vault"
                                       id="rermber-my-card1-cybersource"/>
                                <label for="rermber-my-card1-cybersource">
                                    <t>Remember my card for future payments</t>
                                </label>
                            </div>
                        </span>
                    <span ng-if="isSubscription()">
                            <input type="hidden" name="store_in_vault" ng-model="credit_card.store_in_vault"/>
                        </span>
                    <div class="custom-checkbox" ng-if="credit_card.store_in_vault">
                        <input type="checkbox" name="defaultPaymentMethodId" ng-model="cc.defaultPaymentMethodId" id="default-payment-method-cybersource" />
                        <label for="default-payment-method-cybersource"><t>Apply this payment method to all active subscriptions</t></label>
                    </div>
                </div>
            </form>
        </div>
        <div consents-list></div>
        <div class="footer-modal">
            <div class="auto-renew-purchase" ng-show="isSelectedTermAutoRenewChoiceAvailable()">
                <input class="auto-renew-purchase-checkbox" type="checkbox" ng-model="input.autoRenew"
                       id="auto_renew"/>
                <label class="auto-renew-purchase-label" for="auto_renew">
                    <t>Automatically renew my subscription when the time comes.</t>
                </label>
            </div>
            <div ng-show="isConfirmStepEnabled()" class="complete-purchase-button" goto-confirmation-button
                 title="{{'Complete Purchase' | t}}"></div>
            <div ng-show="!isConfirmStepEnabled()" class="complete-purchase-button" complete-purchase-button
                 title="{{'Complete Purchase' | t}}"></div>
        </div>
    </div>
</div>
</script>

<script type="text/ng-template" id="/frontend/providers/components/cybersource/common/baseTemplate.shtml">
<div class="cc-fields-layout" ng-class="{'cc-fields-layout__cardholder-option': collectCardholderName}">
    <div ng-show="collectCardholderName" class="cc-fields-layout__cardholder-name">
        <div class="cc-fields-layout__first-name">
            <label class="cc-field-outer-wrap__left-placeholder">
                <t>First name</t>
            </label>
            <input placeholder="{{'First name' | t}}"
                   ng-model="credit_card.firstName.value"
                   class="cc-field-outer-wrap__field cc-field"/>
        </div><!--
        --><div class="cc-fields-layout__last-name">
            <label class="cc-field-outer-wrap__left-placeholder">
                <t>Last name</t>
            </label>
            <input placeholder="{{'Last name' | t}}"
                   ng-model="credit_card.lastName.value"
                   class="cc-field-outer-wrap__field cc-field"/>
        </div>
    </div>
    <div class="cc-fields-layout__field cc-fields-layout__card-number">
        <credit-card-number ng-model="credit_card.num.value"
                            on-change="credit_card.num.onChangeCallback"
                            ng-disabled="credit_card.num.disabled"
                            ng-required="credit_card.num.required"
                            ng-readonly="credit_card.num.readonly"
                            maxlength="credit_card.num.maxlength"
                            valid="credit_card.num.valid"
                            name="'num'">
        </credit-card-number>
    </div>
    <div class="cc-fields-layout__field cc-fields-layout__expire">
        <cc-expire-component ng-model="credit_card.expire.value"
                             on-change="credit_card.expire.onChangeCallback"
                             ng-disabled="credit_card.expire.disabled"
                             ng-required="credit_card.expire.required"
                             ng-readonly="credit_card.expire.readonly"
                             maxlength="credit_card.expire.maxlength"
                             valid="credit_card.expire.valid"
                             name="'expire'"
                             on-change="onChangeCallback">
        </cc-expire-component>
    </div>
    <div class="cc-fields-layout__field cc-fields-layout__cvv">
        <credit-card-cvv ng-model="credit_card.cvv.value"
                         on-change="credit_card.cvv.onChangeCallback"
                         ng-disabled="credit_card.cvv.disabled"
                         ng-required="credit_card.cvv.required"
                         ng-readonly="credit_card.cvv.readonly"
                         maxlength="credit_card.cvv.maxlength"
                         valid="credit_card.cvv.valid"
                         name="'cvv'">
        </credit-card-cvv>
    </div>
</div>

</script>

<script type="text/ng-template" id="/frontend/providers/components/applepayway/checkout/component.shtml">
<div ng-if="isPasswordlessApplePayUsed">
    <button type="button"
            class="apple-pay-button"
            ng-click="openPasswordLessApplePay()"
            ng-class="{'apple-pay-button--disabled': !isApplePayPwEnabled}"
    >
        <t>Buy with</t>
        <svg class="apple-pay-button__logo" width="51" height="20" viewBox="0 0 51 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.258 2.579c-.594.675-1.544 1.208-2.494 1.132-.119-.914.346-1.884.89-2.484C8.248.533 9.287.038 10.13 0c.099.951-.287 1.884-.871 2.579zm.86 1.313c-1.375-.077-2.553.751-3.206.751-.663 0-1.663-.713-2.751-.694A4.09 4.09 0 00.707 5.966C-.778 8.42.32 12.056 1.756 14.053c.703.99 1.544 2.075 2.652 2.036 1.05-.038 1.465-.656 2.732-.656 1.277 0 1.643.656 2.751.637 1.148-.019 1.87-.99 2.573-1.979.802-1.122 1.129-2.217 1.148-2.274-.02-.019-2.216-.828-2.236-3.263-.02-2.036 1.732-3.007 1.81-3.064-.989-1.408-2.533-1.56-3.067-1.598zm7.948-2.76v14.834h2.395v-5.072h3.316c3.028 0 5.156-1.998 5.156-4.89 0-2.893-2.088-4.872-5.077-4.872h-5.79zm2.395 1.941h2.761c2.079 0 3.266 1.066 3.266 2.94 0 1.875-1.187 2.95-3.276 2.95h-2.75v-5.89zM33.307 16.08c1.505 0 2.9-.733 3.534-1.893h.05v1.779h2.216V8.582c0-2.14-1.781-3.52-4.523-3.52-2.543 0-4.424 1.399-4.493 3.32h2.157c.179-.913 1.06-1.512 2.267-1.512 1.465 0 2.286.656 2.286 1.865v.818l-2.989.171c-2.78.162-4.285 1.256-4.285 3.159 0 1.922 1.554 3.197 3.78 3.197zm.644-1.76c-1.277 0-2.089-.59-2.089-1.494 0-.933.782-1.475 2.277-1.56l2.662-.162v.837c0 1.39-1.227 2.379-2.85 2.379zM42.066 20c2.336 0 3.434-.856 4.395-3.454l4.206-11.341h-2.435l-2.82 8.763h-.05l-2.82-8.763h-2.505l4.058 10.799-.218.656c-.366 1.113-.96 1.542-2.019 1.542-.188 0-.554-.02-.702-.038v1.779c.138.038.732.057.91.057z" fill="#fff"/>
        </svg>
    </button>
</div>
<div ng-if="!isPasswordlessApplePayUsed" class="applepay-ss-wrapper new-card-form">
    <div class="row">
        <div class="footer-modal">
            <div class="auto-renew-purchase" ng-show="isSelectedTermAutoRenewChoiceAvailable()">
                <input class="auto-renew-purchase-checkbox" type="checkbox" ng-model="input.autoRenew"
                       id="auto_renew"/>
                <label class="auto-renew-purchase-label" for="auto_renew">
                    <t>Automatically renew my subscription when the time comes.</t>
                </label>
            </div>
            <div>
                <a ng-click="openApplePayWindow()" class="button big applepay-ss-complete-purchase"
                   href="javascript:void(0)" ng-class="{'disabled': isApplePayPwEnabled !== true}">&nbsp;</a>
            </div>
        </div>
    </div>
</div>

</script>

<script type="text/ng-template" id="/frontend/providers/components/payucolombiacc/checkout/component.shtml">
<div class="payu-colombia-cc-wrapper new-card-form">
    <div class="row">
        <div desktop class="cc_stored_cards" ng-show="!cc.payWithNew && cc.initiated">
            <div class="add-credit-card-wrapper">
                <h4>
                    <t>Your credit and debit cards</t>
                </h4>
                <a href="javascript:void(0)" class="add-credit-card" ng-click="cc.payWithNew = true"
                   ng-show="cc.stored.length > 0">
                    +
                    <t>Add a card</t>
                </a>
            </div>
            <table class="payment-method-card" ng-show="cc.stored.length > 0">
                <tr class="payment-method-card-row" ng-repeat="method in cc.stored"
                    ng-class="{'selected' : $parent.cc.selectedUpiId == method.id}">
                    <td class="payment-method-card-cell">
                        <input type="radio" name="stored_method" value="{{method.id}}"
                               ng-model="$parent.cc.selectedUpiId"/>
                    </td>
                    <td class="payment-method-card-cell">
                        <div class="credit-card-{{method.identifier}}"></div>
                    </td>
                    <td class="payment-method-card-cell">
                        <div>{{method.type | tc:"checkout.platform"}} *{{method.ending_in}}</div>
                    </td>
                    <td class="payment-method-card-cell">
                        <t>Expires in</t>
                        {{method.expire_month}}/{{method.expire_year}}
                    </td>
                </tr>
            </table>
        </div>

        <div mobile class="cc_stored_cards" ng-show="cc.initiated">
            <table class="payment-method-card" ng-show="cc.stored.length > 0">
                <tr class="payment-method-card-row" ng-repeat="method in cc.stored"
                    ng-class="{'selected' : $parent.cc.selectedUpiId == method.id && $parent.cc.payWithNew != true}">
                    <td class="payment-method-card-cell">
                        <input type="radio" name="stored_method" value="{{method.id}}"
                               ng-model="$parent.cc.selectedUpiId"
                               ng-click="$parent.cc.payWithNew = false"/>
                    </td>
                    <td class="payment-method-card-cell">
                        <div class="credit-card-{{method.identifier}}"></div>
                    </td>
                    <td class="payment-method-card-cell">
                        <div>*{{method.ending_in}}</div>
                    </td>
                </tr>
                <tr class="payment-method-card-row" ng-class="{'selected' : $parent.cc.payWithNew == true}">
                    <td class="payment-method-card-cell">
                        <input type="radio" name="stored_method" ng-model="$parent.cc.payWithNew" ng-value="true"/>
                    </td>
                    <td class="payment-method-card-cell" colspan="2">
                        <t>Add a new card</t>
                    </td>
                </tr>
            </table>
        </div>

        <div class="cc_new_card" ng-show="cc.payWithNew && cc.initiated">
            <div desktop class="go-back-to-cards-wrapper">
                <a href="javascript:void(0)" class="go-back-to-cards" ng-click="cc.payWithNew = false"
                   ng-show="cc.stored.length > 0">
                    <t>Return to saved cards</t>
                </a>
                <h4>
                    <t>Add a new credit or debit card</t>
                </h4>
            </div>
            <form class="new-card-form" name="ccForm" role="form">
                <dynamic-base-inputs-component name="providerName"
                                               credit-card="credit_card"></dynamic-base-inputs-component>
                <div class="payment-system-condition">
                        <span ng-if="!isSubscription()">
                            <div class="custom-checkbox">
                                <input type="checkbox" name="store_in_vault" ng-model="credit_card.store_in_vault"
                                       id="rermber-my-card1-payu-colombia-cc"/>
                                <label for="rermber-my-card1-payu-colombia-cc">
                                    <t>Remember my card for future payments</t>
                                </label>
                            </div>
                        </span>
                    <span ng-if="isSubscription()">
                            <input type="hidden" name="store_in_vault" ng-model="credit_card.store_in_vault"/>
                        </span>
                    <div class="custom-checkbox" ng-if="credit_card.store_in_vault">
                        <input type="checkbox" name="defaultPaymentMethodId" ng-model="cc.defaultPaymentMethodId"
                               id="default-payment-method-payu-colombia-cc"/>
                        <label for="default-payment-method-payu-colombia-cc">
                            <t>Apply this payment method to all active subscriptions</t>
                        </label>
                    </div>
                </div>
            </form>
        </div>
        <div consents-list></div>
        <div class="footer-modal">
            <div class="auto-renew-purchase" ng-show="isSelectedTermAutoRenewChoiceAvailable()">
                <input class="auto-renew-purchase-checkbox" type="checkbox" ng-model="input.autoRenew"
                       id="auto_renew"/>
                <label class="auto-renew-purchase-label" for="auto_renew">
                    <t>Automatically renew my subscription when the time comes.</t>
                </label>
            </div>
            <div ng-show="isConfirmStepEnabled()" class="complete-purchase-button" goto-confirmation-button
                 title="{{'Complete Purchase' | t}}"></div>
            <div ng-show="!isConfirmStepEnabled()" class="complete-purchase-button" complete-purchase-button
                 title="{{'Complete Purchase' | t}}"></div>
        </div>
    </div>
</div>
</script>

<script type="text/ng-template" id="/frontend/providers/components/payucolombiacc/common/baseTemplate.shtml">
<div class="cc-fields-layout">
  <div class="cc-fields-layout__flex-row cc-fields-layout__flex-row--card-number">
    <div class="cc-fields-layout__field cc-fields-layout__card-number">
      <credit-card-number ng-model="credit_card.num.value"
                          on-change="credit_card.num.onChangeCallback"
                          ng-disabled="credit_card.num.disabled"
                          ng-required="credit_card.num.required"
                          ng-readonly="credit_card.num.readonly"
                          maxlength="credit_card.num.maxlength"
                          valid="credit_card.num.valid"
                          name="'num'">
      </credit-card-number>
    </div>
    <div class="cc-fields-layout__field cc-fields-layout__field--no-margin-bottom cc-fields-layout__field--group">
      <div class="cc-fields-layout__flex-row">
        <div class="cc-fields-layout__field cc-fields-layout__expire">
          <cc-expire-component ng-model="credit_card.expire.value"
                               on-change="credit_card.expire.onChangeCallback"
                               ng-disabled="credit_card.expire.disabled"
                               ng-required="credit_card.expire.required"
                               ng-readonly="credit_card.expire.readonly"
                               maxlength="credit_card.expire.maxlength"
                               valid="credit_card.expire.valid"
                               name="'expire'">
          </cc-expire-component>
        </div>
        <div class="cc-fields-layout__field cc-fields-layout__cvv">
          <credit-card-cvv ng-model="credit_card.cvv.value"
                           on-change="credit_card.cvv.onChangeCallback"
                           ng-disabled="credit_card.cvv.disabled"
                           ng-required="credit_card.cvv.required"
                           ng-readonly="credit_card.cvv.readonly"
                           maxlength="credit_card.cvv.maxlength"
                           valid="credit_card.cvv.valid"
                           name="'cvv'">
          </credit-card-cvv>
        </div>
      </div>
    </div>
  </div>
  <div class="cc-fields-layout__field cc-fields-layout__card-holder">
    <credit-card-holder ng-model="credit_card.holder.value"
                        on-change="credit_card.holder.onChangeCallback"
                        ng-disabled="credit_card.holder.disabled"
                        icon="'client'"
                        ng-required="credit_card.holder.required"
                        ng-readonly="credit_card.holder.readonly"
                        maxlength="credit_card.holder.maxlength"
                        valid="credit_card.holder.valid"
                        name="'holder'">
    </credit-card-holder>
  </div>
  <div class="cc-fields-layout__flex-row">
    <div class="cc-fields-layout__field cc-fields-layout__identification-type">
      <credit-card-identification-type-component ng-model="credit_card.identificationType.value"
                                                 on-identification-type-select="credit_card.identificationType.onIdentificationTypeSelect"
                                                 ng-disabled="credit_card.identificationType.disabled"
                                                 ng-required="credit_card.identificationType.required"
                                                 ng-readonly="credit_card.identificationType.readonly"
                                                 placeholder="'Identification type' | t"
                                                 valid="credit_card.identificationType.valid"
                                                 is-dropdown-shown="credit_card.identificationType.isDropdownShown"
                                                 identification-types="credit_card.identificationType.items"
                                                 title="credit_card.identificationType.title"
                                                 data-e2e="cc_identificationType"
                                                 icon="'identification-type'"
                                                 name="'identificationType'">
      </credit-card-identification-type-component>
    </div>

    <div class="cc-fields-layout__field cc-fields-layout__identification-number">
      <cc-text-input placeholder="'Identification number' | t"
                     ng-model="credit_card.identificationNumber.value"
                     ng-readonly="credit_card.identificationNumber.readonly"
                     ng-required="credit_card.identificationNumber.required"
                     ng-disabled="credit_card.identificationNumber.disabled"
                     icon="'national-id'"
                     class="cc-field-wrap fs-block"
                     class-name="className"
                     maxlength="credit_card.identificationNumber.maxlength"
                     minlength="credit_card.identificationNumber.minlength"
                     validation-rule="credit_card.identificationNumber.validationRule"
                     on-change="credit_card.identificationNumber.onChangeCallback"
                     name="'identificationNumber'"
                     data-e2e="cc_identificationNumber"
                     valid="credit_card.identificationNumber.valid">
      </cc-text-input>
    </div>
  </div>
  <div class="cc-fields-layout__flex-row">
    <div class="cc-fields-layout__field cc-fields-layout__first-name">
      <cc-text-input placeholder="'First name' | t"
                     ng-model="credit_card.firstName.value"
                     on-change="credit_card.firstName.onChangeCallback"
                     ng-disabled="credit_card.firstName.disabled"
                     icon="'client'"
                     ng-required="credit_card.firstName.required"
                     ng-readonly="credit_card.firstName.readonly"
                     maxlength="credit_card.firstName.maxlength"
                     valid="credit_card.firstName.valid"
                     name="'firstName'"
                     data-e2e="cc_first_name">
      </cc-text-input>
    </div>

    <div class="cc-fields-layout__field cc-fields-layout__last-name">
      <cc-text-input placeholder="'Last name' | t"
                     ng-model="credit_card.lastName.value"
                     on-change="credit_card.lastName.onChangeCallback"
                     ng-disabled="credit_card.lastName.disabled"
                     icon="'client'"
                     ng-required="credit_card.lastName.required"
                     ng-readonly="credit_card.lastName.readonly"
                     maxlength="credit_card.lastName.maxlength"
                     valid="credit_card.lastName.valid"
                     name="'lastName'"
                     data-e2e="cc_last_name">
      </cc-text-input>
    </div>
  </div>

  <div class="cc-fields-layout__field cc-fields-layout__address">
    <cc-text-input placeholder="'Address' | t"
                   ng-model="credit_card.address.value"
                   on-change="credit_card.address.onChangeCallback"
                   ng-disabled="credit_card.address.disabled"
                   ng-required="credit_card.address.required"
                   ng-readonly="credit_card.address.readonly"
                   maxlength="credit_card.address.maxlength"
                   icon="'map'"
                   valid="credit_card.address.valid"
                   name="'address'"
                   data-e2e="cc_address">
    </cc-text-input>
  </div>
  <div class="cc-fields-layout__flex-row">
    <div class="cc-fields-layout__field cc-fields-layout__country">
      <credit-card-country-component ng-model="credit_card.country.value"
                                     ng-disabled="credit_card.country.disabled"
                                     ng-required="credit_card.country.required"
                                     ng-readonly="credit_card.country.readonly"
                                     on-change="credit_card.country.onChangeCallback"
                                     on-country-select="credit_card.country.onCountrySelect"
                                     valid="credit_card.country.valid"
                                     placeholder="'Country' | t"
                                     countries="credit_card.country.items"
                                     title="credit_card.country.title"
                                     icon="'globe'"
                                     name="'country'"
                                     data-e2e="cc_county">
      </credit-card-country-component>
    </div>
    <div class="cc-fields-layout__field cc-fields-layout__state">
      <credit-card-state-component ng-model="credit_card.state.value"
                                   ng-disabled="credit_card.state.disabled"
                                   ng-required="credit_card.state.required"
                                   ng-readonly="credit_card.state.readonly"
                                   on-change="credit_card.state.onChangeCallback"
                                   on-state-select="credit_card.state.onStateSelect"
                                   valid="credit_card.state.valid"
                                   placeholder="'State' | t"
                                   is-dropdown-shown="credit_card.state.isDropdownShown"
                                   states="credit_card.state.items"
                                   title="credit_card.state.title"
                                   icon="'map'"
                                   name="'state'"
                                   data-e2e="cc_state">
      </credit-card-state-component>
    </div>
  </div>
  <div class="cc-fields-layout__flex-row">
    <div class="cc-fields-layout__field cc-fields-layout__city">
      <credit-card-city-component ng-model="credit_card.city.value"
                                  ng-disabled="credit_card.city.disabled"
                                  ng-required="credit_card.city.required"
                                  ng-readonly="credit_card.city.readonly"
                                  on-change="credit_card.city.onChangeCallback"
                                  on-city-select="credit_card.city.onCitySelect"
                                  valid="credit_card.city.valid"
                                  placeholder="'City' | t"
                                  is-dropdown-shown="credit_card.city.isDropdownShown"
                                  cities="credit_card.city.items"
                                  title="credit_card.city.title"
                                  icon="'map'"
                                  name="'city'"
                                  data-e2e="cc_city">
      </credit-card-city-component>
    </div>

    <div class="cc-fields-layout__field cc-fields-layout__postal-code">
      <credit-card-postal-code placeholder="'ZIP/Postal code' | t"
                               ng-model="credit_card.zip.value"
                               on-change="credit_card.zip.onChangeCallback"
                               ng-disabled="credit_card.zip.disabled"
                               ng-required="credit_card.zip.required"
                               ng-readonly="credit_card.zip.readonly"
                               maxlength="credit_card.zip.maxlength"
                               valid="credit_card.zip.valid"
                               name="'zip'">
      </credit-card-postal-code>
    </div>
  </div>
  <div class="cc-fields-layout__flex-row">
    <div class="cc-fields-layout__field cc-fields-layout__phone-number">
      <cc-phone-number-component placeholder="'Phone number' | t"
                                 ng-model="credit_card.phone.value"
                                 on-change="credit_card.phone.onChangeCallback"
                                 ng-disabled="credit_card.phone.disabled"
                                 ng-required="credit_card.phone.required"
                                 ng-readonly="credit_card.phone.readonly"
                                 maxlength="credit_card.phone.maxlength"
                                 valid="credit_card.phone.valid"
                                 validation-rule="'numeric'"
                                 name="'phone'">
      </cc-phone-number-component>
    </div>
  </div>
</div>

</script>

<script type="text/ng-template" id="/frontend/providers/components/datatransapplepay/checkout/component.shtml">
<div class="datatransapplepay-wrapper new-card-form">
    <div class="row">
        <div class="applepay-checkout-payment-form" ng-class="{'applepay-checkout-payment-form--custom-indent': isIndentRequired}">
            <div ng-show="!state.addingNewCard">
                <div class="add-credit-card-wrapper">
                    <h4>
                        <t>Your Apple Pay cards</t>
                    </h4>
                    <a href="javascript:void(0)"
                       class="add-credit-card"
                       data-e2e="gotoNewCardScreen"
                       ng-click="gotoNewCardScreen()"
                       ng-show="stored.length > 0 && !data.newUpi">
                        +
                        <t>Add a card</t>
                    </a>
                </div>
                <table class="applepay-table">
                    <tr ng-if="stored.length" class="applepay-table-row" ng-repeat="upi in stored">
                        <td class="applepay-table-cell applepay-table-cell--radio">
                            <input type="radio"
                                   id="radio-{{upi.id}}"
                                   name="stored_method"
                                   ng-model="$parent.data.selectedUpi"
                                   ng-value="upi"
                                   radio-track-by="id"
                                   class="applepay-radio"/>
                        </td>
                        <td class="applepay-table-cell applepay-table-cell--logo">
                            <div class="applepay-short-logo"></div>
                        </td>
                        <td class="applepay-table-cell" >
                            <label for="radio-{{upi.id}}">
                                <t context="checkout.platform">{{upi.display_name}}</t>
                            </label>
                        </td>
                        <td class="applepay-table-cell payment-method-card-cell-expiration">
                            <t>Expires in</t>
                            {{upi.expire_month}}/{{upi.expire_year}}
                        </td>
                        <td class="payment-method-card-cell payment-method-card-cell--default-payment">
                            <div class="payment-method-card-default-payment"
                                 ng-show="upi.id === data.defaultPaymentMethodId">
                                <t>Default</t>
                            </div>
                            <button ng-hide="upi.id === data.defaultPaymentMethodId"
                                    ng-click="setAsDefault(upi)"
                                    type="button"
                                    class="set-as-default-button"
                            >
                                <t>Set as default</t>
                            </button>
                        </td>
                    </tr>
                </table>
            </div>
            <div class="applepay-add-new-account" ng-show="state.addingNewCard">
                <div desktop class="go-back-to-cards-wrapper">
                    <a href="javascript:void(0)" ng-show="canGoToStored()"
                       data-e2e="gotoStoredCardsScreen"
                       class="go-back-to-cards"
                       ng-click="gotoStoredCardsScreen()">
                        <t>Return to saved cards</t>
                    </a>
                    <h4>
                        <t>Add a new Apple Pay card</t>
                    </h4>
                </div>
                <div ng-if="!data.newUpi" class="datatrans-applepay-new-card-wrapper">
                    <table class="applepay-table">
                        <tr class="applepay-table-row">
                            <td class="applepay-table-cell" >
                                <div class="hint">
                                    <div class="appleplay-hint-container">
                                        <t>Add Apple Pay as a payment account to pay for your purchases and take the protection of Datatrans with you</t>
                                    </div>
                                </div>
                            </td>
                            <td class="applepay-table-cell">
                                <div class="applepay-new-card-button-container">
                                    <button id="applepay-pay-button"
                                            class="pm-login-button applepay-new-card-button"
                                            ng-class="{'datatrans-apple-pay-loader': !isDatatransApplePayEnabled}"
                                            ng-disabled="!isDatatransApplePayEnabled"
                                            data-e2e="applepay-new-card-button"
                                            ng-click="onApplePayButtonClicked()">
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
                <table ng-if="data.newUpi" class="applepay-table">
                    <tr class="applepay-table-row">
                        <td class="applepay-table-cell applepay-table-cell--radio">
                            <input type="radio"
                                   id="radio-datatrans-applepay-new"
                                   name="new_method"
                                   ng-model="data.selectedUpi"
                                   ng-value="data.newUpi"
                                   class="applepay-radio"/>
                        </td>
                        <td class="applepay-table-cell applepay-table-cell--logo">
                            <div class="applepay-short-logo"></div>
                        </td>
                        <td class="applepay-table-cell" >
                            <label for="radio-{{upi.id}}">
                                <t context="checkout.platform">{{data.newUpi.display_name}}</t>
                            </label>
                        </td>
                        <td class="applepay-table-cell">
                            <div class="applepay-new-card">
                                <div ng-click="cancelNewCard()" class="applepay-cancel-button">
                                    <t>Cancel</t>
                                </div>
                            </div>
                        </td>
                    </tr>
                </table>
                <div class="hint" ng-if="data.newUpi">
                    <div class="appleplay-hint-container">
                        <t>Your payment verified. Click on the button below to proceed.</t>
                    </div>
                </div>
            </div>
        </div>

        <div class="manage-payment-method-wrapper" ng-show="state.addingNewCard">
            <div class="payment-system-condition">
                <div ng-if="!isSubscription() && isPaymentTerm()">
                    <div class="custom-checkbox">
                        <input type="checkbox" name="store_in_vault" ng-model="data.store_in_vault"
                               id="datatrans-applepay-remember-my-card"/>
                        <label for="datatrans-applepay-remember-my-card">
                            <t>Remember my card for future payments</t>
                        </label>
                    </div>
                </div>
                <div ng-if="isSubscription()">
                    <input type="hidden" name="store_in_vault" ng-model="data.store_in_vault"/>
                </div>
                <div class="custom-checkbox" ng-if="data.store_in_vault">
                    <input type="checkbox" name="defaultPaymentMethodId" ng-model="data.shouldMakeDefaultPaymentMethod"
                           id="datatrans-apple-pay-default-payment-method"/>
                    <label for="datatrans-apple-pay-default-payment-method">
                        <t>Apply this payment method to all active subscriptions</t>
                    </label>
                </div>
            </div>
        </div>

        <div consents-list></div>
        <div class="footer-modal" ng-show="canContinue()">
            <div class="auto-renew-purchase" ng-show="isSelectedTermAutoRenewChoiceAvailable()">
                <input class="auto-renew-purchase-checkbox" type="checkbox" ng-model="input.autoRenew"
                       id="auto_renew"/>
                <label class="auto-renew-purchase-label" for="auto_renew">
                    <t>Automatically renew my subscription when the time comes.</t>
                </label>
            </div>
            <div ng-show="isConfirmStepEnabled()" class="complete-purchase-button"
                 data-e2e="applepay-complete-purchase-button" goto-confirmation-button
                 title="{{'Complete Purchase' | t}}"></div>
            <div ng-show="!isConfirmStepEnabled()" class="complete-purchase-button"
                 data-e2e="applepay-complete-purchase-button" complete-purchase-button
                 title="{{'Complete Purchase' | t}}"></div>
        </div>
    </div>
</div>

</script>

<script type="text/ng-template" id="/frontend/providers/components/payuindiaupi/checkout/component.shtml">
<div class="payu-india-upi-wrapper new-card-form">
    <div class="row">
        <div class="cc_new_card" ng-show="cc.payWithNew && cc.initiated">
            <div desktop class="go-back-to-cards-wrapper">
                <h4>
                    <t>Enter your VPA</t>
                </h4>
            </div>
            <form class="new-card-form" name="ccForm" role="form">
                <dynamic-base-inputs-component name="providerName"
                                               credit-card="credit_card"></dynamic-base-inputs-component>
                <div class="payment-system-condition"/>
            </form>
        </div>
        <div consents-list></div>
        <div class="footer-modal">
            <div ng-show="isConfirmStepEnabled()" class="complete-purchase-button" goto-confirmation-button
                 title="{{'Complete Purchase' | t}}"></div>
            <div ng-show="!isConfirmStepEnabled()" class="complete-purchase-button" complete-purchase-button
                 title="{{'Complete Purchase' | t}}"></div>
        </div>
    </div>
</div>
</script>

<script type="text/ng-template" id="/frontend/providers/components/payuindiaupi/common/baseTemplate.shtml">
<div class="cc-field-outer-wrap">
        <div class="cc-field-outer-wrap__field cc-field">
            <label class="cc-field__icon ng-scope vpa-field__icon--bank-account"></label>
            <input id="payu-upi-vpa" type="text"
                   class="cc-field__input flat fs-block"
                   placeholder="VPA"
            />
        </div>
</div>
</script>

<script type="text/ng-template" id="/frontend/providers/components/payuperucc/checkout/component.shtml">
<div class="payu-latam-peru-cc-wrapper new-card-form">
    <div class="row">
        <div desktop class="cc_stored_cards" ng-show="!cc.payWithNew && cc.initiated">
            <div class="add-credit-card-wrapper">
                <h4>
                    <t>Your credit and debit cards</t>
                </h4>
                <a href="javascript:void(0)" class="add-credit-card" ng-click="cc.payWithNew = true"
                   ng-show="cc.stored.length > 0">
                    +
                    <t>Add a card</t>
                </a>
            </div>
            <table class="payment-method-card" ng-show="cc.stored.length > 0">
                <tr class="payment-method-card-row" ng-repeat="method in cc.stored"
                    ng-class="{'selected' : $parent.cc.selectedUpiId == method.id}">
                    <td class="payment-method-card-cell">
                        <input type="radio" name="stored_method" value="{{method.id}}"
                               ng-model="$parent.cc.selectedUpiId"/>
                    </td>
                    <td class="payment-method-card-cell">
                        <div class="credit-card-{{method.identifier}}"></div>
                    </td>
                    <td class="payment-method-card-cell">
                        <div>{{method.type | tc:"checkout.platform"}} *{{method.ending_in}}</div>
                    </td>
                    <td class="payment-method-card-cell">
                        <t>Expires in</t>
                        {{method.expire_month}}/{{method.expire_year}}
                    </td>
                </tr>
            </table>
        </div>

        <div mobile class="cc_stored_cards" ng-show="cc.initiated">
            <table class="payment-method-card" ng-show="cc.stored.length > 0">
                <tr class="payment-method-card-row" ng-repeat="method in cc.stored"
                    ng-class="{'selected' : $parent.cc.selectedUpiId == method.id && $parent.cc.payWithNew != true}">
                    <td class="payment-method-card-cell">
                        <input type="radio" name="stored_method" value="{{method.id}}"
                               ng-model="$parent.cc.selectedUpiId"
                               ng-click="$parent.cc.payWithNew = false"/>
                    </td>
                    <td class="payment-method-card-cell">
                        <div class="credit-card-{{method.identifier}}"></div>
                    </td>
                    <td class="payment-method-card-cell">
                        <div>*{{method.ending_in}}</div>
                    </td>
                </tr>
                <tr class="payment-method-card-row" ng-class="{'selected' : $parent.cc.payWithNew == true}">
                    <td class="payment-method-card-cell">
                        <input type="radio" name="stored_method" ng-model="$parent.cc.payWithNew" ng-value="true"/>
                    </td>
                    <td class="payment-method-card-cell" colspan="2">
                        <t>Add a new card</t>
                    </td>
                </tr>
            </table>
        </div>

        <div class="cc_new_card" ng-show="cc.payWithNew && cc.initiated">
            <div desktop class="go-back-to-cards-wrapper">
                <a href="javascript:void(0)" class="go-back-to-cards" ng-click="cc.payWithNew = false"
                   ng-show="cc.stored.length > 0">
                    <t>Return to saved cards</t>
                </a>
                <h4>
                    <t>Add a new credit or debit card</t>
                </h4>
            </div>
            <form class="new-card-form" name="ccForm" role="form">
                <dynamic-base-inputs-component name="providerName"
                                               credit-card="credit_card"></dynamic-base-inputs-component>
                <div class="payment-system-condition">
                        <span ng-if="!isSubscription()">
                            <div class="custom-checkbox">
                                <input type="checkbox" name="store_in_vault" ng-model="credit_card.store_in_vault"
                                       id="rermber-my-card1-payu-latam-peru-cc"/>
                                <label for="rermber-my-card1-payu-latam-peru-cc">
                                    <t>Remember my card for future payments</t>
                                </label>
                            </div>
                        </span>
                    <span ng-if="isSubscription()">
                            <input type="hidden" name="store_in_vault" ng-model="credit_card.store_in_vault"/>
                        </span>
                    <div class="custom-checkbox" ng-if="credit_card.store_in_vault">
                        <input type="checkbox" name="defaultPaymentMethodId" ng-model="cc.defaultPaymentMethodId"
                               id="default-payment-method-payu-latam-peru-cc"/>
                        <label for="default-payment-method-payu-latam-peru-cc">
                            <t>Apply this payment method to all active subscriptions</t>
                        </label>
                    </div>
                </div>
            </form>
        </div>
        <div consents-list></div>
        <div class="footer-modal">
            <div class="auto-renew-purchase" ng-show="isSelectedTermAutoRenewChoiceAvailable()">
                <input class="auto-renew-purchase-checkbox" type="checkbox" ng-model="input.autoRenew"
                       id="auto_renew"/>
                <label class="auto-renew-purchase-label" for="auto_renew">
                    <t>Automatically renew my subscription when the time comes.</t>
                </label>
            </div>
            <div ng-show="isConfirmStepEnabled()" class="complete-purchase-button" goto-confirmation-button
                 title="{{'Complete Purchase' | t}}"></div>
            <div ng-show="!isConfirmStepEnabled()" class="complete-purchase-button" complete-purchase-button
                 title="{{'Complete Purchase' | t}}"></div>
        </div>
    </div>
</div>
</script>

<script type="text/ng-template" id="/frontend/providers/components/payuperucc/common/baseTemplate.shtml">
<div class="cc-fields-layout">
    <div class="cc-fields-layout__field cc-fields-layout__card-holder">
        <cc-text-input placeholder="'DNI' | t"
                       ng-model="credit_card.dni.value"
                       ng-readonly="credit_card.dni.readonly"
                       ng-required="credit_card.dni.required"
                       ng-disabled="credit_card.dni.disabled"
                       icon="'card'"
                       class="cc-field-wrap fs-block"
                       class-name="className"
                       on-change="credit_card.run.onChangeCallback"
                       name="'dni'"
                       data-e2e="cc_dni"
                       valid="credit_card.dni.valid">
        </cc-text-input>
    </div>
    <div class="cc-fields-layout__field cc-fields-layout__card-holder">
        <credit-card-holder ng-model="credit_card.holder.value"
                            on-change="credit_card.holder.onChangeCallback"
                            ng-disabled="credit_card.holder.disabled"
                            ng-required="credit_card.holder.required"
                            ng-readonly="credit_card.holder.readonly"
                            maxlength="credit_card.holder.maxlength"
                            valid="credit_card.holder.valid"
                            name="'holder'">
        </credit-card-holder>
    </div>
    <div class="cc-fields-layout__field cc-fields-layout__card-number">
        <credit-card-number ng-model="credit_card.num.value"
                            on-change="credit_card.num.onChangeCallback"
                            ng-disabled="credit_card.num.disabled"
                            ng-required="credit_card.num.required"
                            ng-readonly="credit_card.num.readonly"
                            maxlength="credit_card.num.maxlength"
                            valid="credit_card.num.valid"
                            name="'num'">
        </credit-card-number>
    </div>
    <div class="cc-fields-layout__field cc-fields-layout__expire">
        <cc-expire-component ng-model="credit_card.expire.value"
                             on-change="credit_card.expire.onChangeCallback"
                             ng-disabled="credit_card.expire.disabled"
                             ng-required="credit_card.expire.required"
                             ng-readonly="credit_card.expire.readonly"
                             maxlength="credit_card.expire.maxlength"
                             valid="credit_card.expire.valid"
                             name="'expire'">
        </cc-expire-component>
    </div>
    <div class="cc-fields-layout__field cc-fields-layout__cvv">
        <credit-card-cvv ng-model="credit_card.cvv.value"
                         on-change="credit_card.cvv.onChangeCallback"
                         ng-disabled="credit_card.cvv.disabled"
                         ng-required="credit_card.cvv.required"
                         ng-readonly="credit_card.cvv.readonly"
                         maxlength="credit_card.cvv.maxlength"
                         valid="credit_card.cvv.valid"
                         name="'cvv'">
        </credit-card-cvv>
    </div>
</div>

</script>

<script type="text/ng-template" id="/frontend/providers/components/payubrazilbb/checkout/component.shtml">
<div class="payu-brazil-bb-wrapper new-card-form">
    <div class="row">
        <div class="cc_new_card" ng-show="cc.payWithNew && cc.initiated">
          <div desktop class="go-back-to-cards-wrapper">
              <h4>
                  <t>Payment details</t>
              </h4>
          </div>
          <form class="new-card-form" name="ccForm" role="form">
              <dynamic-base-inputs-component name="providerName"
                                           credit-card="credit_card"></dynamic-base-inputs-component>
          </form>
        </div>
        <div consents-list></div>
        <div class="footer-modal">
            <div ng-show="isConfirmStepEnabled()" class="complete-purchase-button" goto-confirmation-button
                 title="{{'Complete Purchase' | t}}"></div>
            <div ng-show="!isConfirmStepEnabled()" class="complete-purchase-button" complete-purchase-button
                 title="{{'Complete Purchase' | t}}"></div>
        </div>
    </div>
</div>

</script>

<script type="text/ng-template" id="/frontend/providers/components/payubrazilbb/common/baseTemplate.shtml">
<div class="cc-fields-layout">
  <div class="cc-fields-layout__flex-row">
    <div class="cc-fields-layout__field cc-fields-layout__identification-type">
      <credit-card-identification-type-component ng-model="credit_card.identificationType.value"
                                                 on-identification-type-select="credit_card.identificationType.onIdentificationTypeSelect"
                                                 ng-disabled="credit_card.identificationType.disabled"
                                                 ng-required="credit_card.identificationType.required"
                                                 ng-readonly="credit_card.identificationType.readonly"
                                                 placeholder="'Identification type' | t"
                                                 valid="credit_card.identificationType.valid"
                                                 is-dropdown-shown="credit_card.identificationType.isDropdownShown"
                                                 identification-types="credit_card.identificationType.items"
                                                 title="credit_card.identificationType.title"
                                                 data-e2e="cc_identificationType"
                                                 icon="'identification-type'"
                                                 name="'identificationType'">
      </credit-card-identification-type-component>
    </div>
    <div class="cc-fields-layout__field cc-fields-layout__identification-number">
      <cc-text-input placeholder="'Identification number' | t"
                     ng-model="credit_card.identificationNumber.value"
                     ng-readonly="credit_card.identificationNumber.readonly"
                     ng-required="credit_card.identificationNumber.required"
                     ng-disabled="credit_card.identificationNumber.disabled"
                     icon="'national-id'"
                     class="cc-field-wrap fs-block"
                     class-name="className"
                     on-change="credit_card.identificationNumber.onChangeCallback"
                     name="'identificationNumber'"
                     data-e2e="cc_identificationNumber"
                     valid="credit_card.identificationNumber.valid">
      </cc-text-input>
    </div>
  </div>
  <div class="cc-fields-layout__flex-row">
    <div class="cc-fields-layout__field cc-fields-layout__first-name">
      <cc-text-input placeholder="'First name' | t"
                     ng-model="credit_card.firstName.value"
                     on-change="credit_card.firstName.onChangeCallback"
                     ng-disabled="credit_card.firstName.disabled"
                     icon="'client'"
                     ng-required="credit_card.firstName.required"
                     ng-readonly="credit_card.firstName.readonly"
                     maxlength="credit_card.firstName.maxlength"
                     valid="credit_card.firstName.valid"
                     name="'firstName'"
                     data-e2e="cc_first_name">
      </cc-text-input>
    </div>

    <div class="cc-fields-layout__field cc-fields-layout__last-name">
      <cc-text-input placeholder="'Last name' | t"
                     ng-model="credit_card.lastName.value"
                     on-change="credit_card.lastName.onChangeCallback"
                     ng-disabled="credit_card.lastName.disabled"
                     icon="'client'"
                     ng-required="credit_card.lastName.required"
                     ng-readonly="credit_card.lastName.readonly"
                     maxlength="credit_card.lastName.maxlength"
                     valid="credit_card.lastName.valid"
                     name="'lastName'"
                     data-e2e="cc_last_name">
      </cc-text-input>
    </div>
  </div>

  <div class="cc-fields-layout__field cc-fields-layout__address">
    <cc-text-input placeholder="'Address' | t"
                   ng-model="credit_card.address.value"
                   on-change="credit_card.address.onChangeCallback"
                   ng-disabled="credit_card.address.disabled"
                   ng-required="credit_card.address.required"
                   ng-readonly="credit_card.address.readonly"
                   maxlength="credit_card.address.maxlength"
                   icon="'map'"
                   valid="credit_card.address.valid"
                   name="'address'"
                   data-e2e="cc_address">
    </cc-text-input>
  </div>
  <div class="cc-fields-layout__flex-row">
    <div class="cc-fields-layout__field cc-fields-layout__country billing-country">
      <credit-card-country-component ng-model="credit_card.country.value"
                                     ng-disabled="credit_card.country.disabled"
                                     ng-required="credit_card.country.required"
                                     ng-readonly="credit_card.country.readonly"
                                     on-country-select="credit_card.country.onCountrySelect"
                                     valid="credit_card.country.valid"
                                     placeholder="'Country' | t"
                                     countries="credit_card.country.items"
                                     title="credit_card.country.title"
                                     icon="'globe'"
                                     name="'country'"
                                     data-e2e="cc_county">
      </credit-card-country-component>
    </div>
    <div class="cc-fields-layout__field cc-fields-layout__state billing-country">
      <credit-card-state-component ng-model="credit_card.state.value"
                                   ng-disabled="credit_card.state.disabled"
                                   ng-required="credit_card.state.required"
                                   ng-readonly="credit_card.state.readonly"
                                   on-state-select="credit_card.state.onStateSelect"
                                   valid="credit_card.state.valid"
                                   placeholder="'State' | t"
                                   is-dropdown-shown="credit_card.state.isDropdownShown"
                                   states="credit_card.state.items"
                                   title="credit_card.state.title"
                                   icon="'map'"
                                   name="'state'"
                                   data-e2e="cc_state">
      </credit-card-state-component>
    </div>
  </div>
  <div class="cc-fields-layout__flex-row">
    <div class="cc-fields-layout__field cc-fields-layout__city billing-country">
      <credit-card-city-component ng-model="credit_card.city.value"
                                  ng-disabled="credit_card.city.disabled"
                                  ng-required="credit_card.city.required"
                                  ng-readonly="credit_card.city.readonly"
                                  on-city-select="credit_card.city.onCitySelect"
                                  valid="credit_card.city.valid"
                                  placeholder="'City' | t"
                                  is-dropdown-shown="credit_card.city.isDropdownShown"
                                  cities="credit_card.city.items"
                                  title="credit_card.city.title"
                                  icon="'map'"
                                  name="'city'"
                                  data-e2e="cc_city">
      </credit-card-city-component>
    </div>

    <div class="cc-fields-layout__field cc-fields-layout__postal-code">
      <credit-card-postal-code placeholder="'ZIP/Postal code' | t"
                               ng-model="credit_card.zip.value"
                               on-change="credit_card.zip.onChangeCallback"
                               ng-disabled="credit_card.zip.disabled"
                               ng-required="credit_card.zip.required"
                               ng-readonly="credit_card.zip.readonly"
                               maxlength="credit_card.zip.maxlength"
                               valid="credit_card.zip.valid"
                               name="'zip'">
      </credit-card-postal-code>
    </div>
  </div>
  <div class="cc-fields-layout__flex-row">
    <div class="cc-fields-layout__field cc-fields-layout__phone-number">
      <cc-phone-number-component placeholder="'Phone number' | t"
                                 ng-model="credit_card.phone.value"
                                 on-change="credit_card.phone.onChangeCallback"
                                 ng-disabled="credit_card.phone.disabled"
                                 ng-required="credit_card.phone.required"
                                 ng-readonly="credit_card.phone.readonly"
                                 maxlength="credit_card.phone.maxlength"
                                 valid="credit_card.phone.valid"
                                 name="'phone'">
      </cc-phone-number-component>
    </div>
    <div class="cc-fields-layout__field"></div>
  </div>
</div>

</script>

<script type="text/ng-template" id="/frontend/providers/components/payuargentinacc/checkout/component.shtml">
<div class="payu-latam-argentina-cc-wrapper new-card-form">
    <div class="row">
        <div desktop class="cc_stored_cards" ng-show="!cc.payWithNew && cc.initiated">
            <div class="add-credit-card-wrapper">
                <h4>
                    <t>Your credit and debit cards</t>
                </h4>
                <a href="javascript:void(0)" class="add-credit-card" ng-click="cc.payWithNew = true"
                   ng-show="cc.stored.length > 0">
                    +
                    <t>Add a card</t>
                </a>
            </div>
            <table class="payment-method-card" ng-show="cc.stored.length > 0">
                <tr class="payment-method-card-row" ng-repeat="method in cc.stored"
                    ng-class="{'selected' : $parent.cc.selectedUpiId == method.id}">
                    <td class="payment-method-card-cell">
                        <input type="radio" name="stored_method" value="{{method.id}}"
                               ng-model="$parent.cc.selectedUpiId"/>
                    </td>
                    <td class="payment-method-card-cell">
                        <div class="credit-card-{{method.identifier}}"></div>
                    </td>
                    <td class="payment-method-card-cell">
                        <div>{{method.type | tc:"checkout.platform"}} *{{method.ending_in}}</div>
                    </td>
                    <td class="payment-method-card-cell">
                        <t>Expires in</t>
                        {{method.expire_month}}/{{method.expire_year}}
                    </td>
                </tr>
            </table>
        </div>

        <div mobile class="cc_stored_cards" ng-show="cc.initiated">
            <table class="payment-method-card" ng-show="cc.stored.length > 0">
                <tr class="payment-method-card-row" ng-repeat="method in cc.stored"
                    ng-class="{'selected' : $parent.cc.selectedUpiId == method.id && $parent.cc.payWithNew != true}">
                    <td class="payment-method-card-cell">
                        <input type="radio" name="stored_method" value="{{method.id}}"
                               ng-model="$parent.cc.selectedUpiId"
                               ng-click="$parent.cc.payWithNew = false"/>
                    </td>
                    <td class="payment-method-card-cell">
                        <div class="credit-card-{{method.identifier}}"></div>
                    </td>
                    <td class="payment-method-card-cell">
                        <div>*{{method.ending_in}}</div>
                    </td>
                </tr>
                <tr class="payment-method-card-row" ng-class="{'selected' : $parent.cc.payWithNew == true}">
                    <td class="payment-method-card-cell">
                        <input type="radio" name="stored_method" ng-model="$parent.cc.payWithNew" ng-value="true"/>
                    </td>
                    <td class="payment-method-card-cell" colspan="2">
                        <t>Add a new card</t>
                    </td>
                </tr>
            </table>
        </div>

        <div class="cc_new_card" ng-show="cc.payWithNew && cc.initiated">
            <div desktop class="go-back-to-cards-wrapper">
                <a href="javascript:void(0)" class="go-back-to-cards" ng-click="cc.payWithNew = false"
                   ng-show="cc.stored.length > 0">
                    <t>Return to saved cards</t>
                </a>
                <h4>
                    <t>Add a new credit or debit card</t>
                </h4>
            </div>
            <form class="new-card-form" name="ccForm" role="form">
                <dynamic-base-inputs-component name="providerName"
                                               credit-card="credit_card"></dynamic-base-inputs-component>
                <div class="payment-system-condition">
                        <span ng-if="!isSubscription()">
                            <div class="custom-checkbox">
                                <input type="checkbox" name="store_in_vault" ng-model="credit_card.store_in_vault"
                                       id="rermber-my-card1-payu-latam-argentina-cc"/>
                                <label for="rermber-my-card1-payu-latam-argentina-cc">
                                    <t>Remember my card for future payments</t>
                                </label>
                            </div>
                        </span>
                    <span ng-if="isSubscription()">
                            <input type="hidden" name="store_in_vault" ng-model="credit_card.store_in_vault"/>
                        </span>
                    <div class="custom-checkbox" ng-if="credit_card.store_in_vault">
                        <input type="checkbox" name="defaultPaymentMethodId" ng-model="cc.defaultPaymentMethodId"
                               id="default-payment-method-payu-latam-argentina-cc"/>
                        <label for="default-payment-method-payu-latam-argentina-cc">
                            <t>Apply this payment method to all active subscriptions</t>
                        </label>
                    </div>
                </div>
            </form>
        </div>
        <div consents-list></div>
        <div class="footer-modal">
            <div class="auto-renew-purchase" ng-show="isSelectedTermAutoRenewChoiceAvailable()">
                <input class="auto-renew-purchase-checkbox" type="checkbox" ng-model="input.autoRenew"
                       id="auto_renew"/>
                <label class="auto-renew-purchase-label" for="auto_renew">
                    <t>Automatically renew my subscription when the time comes.</t>
                </label>
            </div>
            <div ng-show="isConfirmStepEnabled()" class="complete-purchase-button" goto-confirmation-button
                 title="{{'Complete Purchase' | t}}"></div>
            <div ng-show="!isConfirmStepEnabled()" class="complete-purchase-button" complete-purchase-button
                 title="{{'Complete Purchase' | t}}"></div>
        </div>
    </div>
</div>
</script>

<script type="text/ng-template" id="/frontend/providers/components/payuargentinacc/common/baseTemplate.shtml">
<div class="cc-fields-layout">
  <div class="cc-fields-layout__flex-row cc-fields-layout__flex-row--card-number">
    <div class="cc-fields-layout__field cc-fields-layout__card-number">
      <credit-card-number ng-model="credit_card.num.value"
                          on-change="credit_card.num.onChangeCallback"
                          ng-disabled="credit_card.num.disabled"
                          ng-required="credit_card.num.required"
                          ng-readonly="credit_card.num.readonly"
                          maxlength="credit_card.num.maxlength"
                          valid="credit_card.num.valid"
                          name="'num'">
      </credit-card-number>
    </div>
    <div class="cc-fields-layout__field cc-fields-layout__field--no-margin-bottom cc-fields-layout__field--group">
      <div class="cc-fields-layout__flex-row">
        <div class="cc-fields-layout__field cc-fields-layout__expire">
          <cc-expire-component ng-model="credit_card.expire.value"
                               on-change="credit_card.expire.onChangeCallback"
                               ng-disabled="credit_card.expire.disabled"
                               ng-required="credit_card.expire.required"
                               ng-readonly="credit_card.expire.readonly"
                               maxlength="credit_card.expire.maxlength"
                               valid="credit_card.expire.valid"
                               name="'expire'">
          </cc-expire-component>
        </div>
        <div class="cc-fields-layout__field cc-fields-layout__cvv">
          <credit-card-cvv ng-model="credit_card.cvv.value"
                           on-change="credit_card.cvv.onChangeCallback"
                           ng-disabled="credit_card.cvv.disabled"
                           ng-required="credit_card.cvv.required"
                           ng-readonly="credit_card.cvv.readonly"
                           maxlength="credit_card.cvv.maxlength"
                           valid="credit_card.cvv.valid"
                           name="'cvv'">
          </credit-card-cvv>
        </div>
      </div>
    </div>
  </div>
  <div class="cc-fields-layout__field cc-fields-layout__card-holder">
    <credit-card-holder ng-model="credit_card.holder.value"
                        on-change="credit_card.holder.onChangeCallback"
                        ng-disabled="credit_card.holder.disabled"
                        icon="'client'"
                        ng-required="credit_card.holder.required"
                        ng-readonly="credit_card.holder.readonly"
                        maxlength="credit_card.holder.maxlength"
                        valid="credit_card.holder.valid"
                        name="'holder'">
    </credit-card-holder>
  </div>
  <div class="cc-fields-layout__flex-row">
    <div class="cc-fields-layout__field cc-fields-layout__identification-type">
      <credit-card-identification-type-component ng-model="credit_card.identificationType.value"
                                                 on-identification-type-select="credit_card.identificationType.onIdentificationTypeSelect"
                                                 ng-disabled="credit_card.identificationType.disabled"
                                                 ng-required="credit_card.identificationType.required"
                                                 ng-readonly="credit_card.identificationType.readonly"
                                                 placeholder="'Identification type' | t"
                                                 valid="credit_card.identificationType.valid"
                                                 is-dropdown-shown="credit_card.identificationType.isDropdownShown"
                                                 identification-types="credit_card.identificationType.items"
                                                 title="credit_card.identificationType.title"
                                                 data-e2e="cc_identificationType"
                                                 icon="'identification-type'"
                                                 name="'identificationType'">
      </credit-card-identification-type-component>
    </div>
    <div class="cc-fields-layout__field cc-fields-layout__identification-number">
      <cc-text-input placeholder="'Identification number' | t"
                     ng-model="credit_card.identificationNumber.value"
                     ng-readonly="credit_card.identificationNumber.readonly"
                     ng-required="credit_card.identificationNumber.required"
                     ng-disabled="credit_card.identificationNumber.disabled"
                     icon="'national-id'"
                     class="cc-field-wrap fs-block"
                     class-name="className"
                     on-change="credit_card.identificationNumber.onChangeCallback"
                     name="'identificationNumber'"
                     data-e2e="cc_identificationNumber"
                     valid="credit_card.identificationNumber.valid">
      </cc-text-input>
    </div>
  </div>
  <div class="cc-fields-layout__flex-row">
    <div class="cc-fields-layout__field cc-fields-layout__first-name">
      <cc-text-input placeholder="'First name' | t"
                     ng-model="credit_card.firstName.value"
                     on-change="credit_card.firstName.onChangeCallback"
                     ng-disabled="credit_card.firstName.disabled"
                     icon="'client'"
                     ng-required="credit_card.firstName.required"
                     ng-readonly="credit_card.firstName.readonly"
                     maxlength="credit_card.firstName.maxlength"
                     valid="credit_card.firstName.valid"
                     name="'firstName'"
                     data-e2e="cc_first_name">
      </cc-text-input>
    </div>

    <div class="cc-fields-layout__field cc-fields-layout__last-name">
      <cc-text-input placeholder="'Last name' | t"
                     ng-model="credit_card.lastName.value"
                     on-change="credit_card.lastName.onChangeCallback"
                     ng-disabled="credit_card.lastName.disabled"
                     icon="'client'"
                     ng-required="credit_card.lastName.required"
                     ng-readonly="credit_card.lastName.readonly"
                     maxlength="credit_card.lastName.maxlength"
                     valid="credit_card.lastName.valid"
                     name="'lastName'"
                     data-e2e="cc_last_name">
      </cc-text-input>
    </div>
  </div>

  <div class="cc-fields-layout__field cc-fields-layout__address">
    <cc-text-input placeholder="'Address' | t"
                   ng-model="credit_card.address.value"
                   on-change="credit_card.address.onChangeCallback"
                   ng-disabled="credit_card.address.disabled"
                   ng-required="credit_card.address.required"
                   ng-readonly="credit_card.address.readonly"
                   maxlength="credit_card.address.maxlength"
                   icon="'map'"
                   valid="credit_card.address.valid"
                   name="'address'"
                   data-e2e="cc_address">
    </cc-text-input>
  </div>
  <div class="cc-fields-layout__flex-row">
    <div class="cc-fields-layout__field cc-fields-layout__country">
      <credit-card-country-component ng-model="credit_card.country.value"
                                     ng-disabled="credit_card.country.disabled"
                                     ng-required="credit_card.country.required"
                                     ng-readonly="credit_card.country.readonly"
                                     on-change="credit_card.country.onChangeCallback"
                                     on-country-select="credit_card.country.onCountrySelect"
                                     valid="credit_card.country.valid"
                                     placeholder="'Country' | t"
                                     countries="credit_card.country.items"
                                     title="credit_card.country.title"
                                     icon="'globe'"
                                     name="'country'"
                                     data-e2e="cc_county">
      </credit-card-country-component>
    </div>
    <div class="cc-fields-layout__field cc-fields-layout__state">
      <credit-card-state-component ng-model="credit_card.state.value"
                                   ng-disabled="credit_card.state.disabled"
                                   ng-required="credit_card.state.required"
                                   ng-readonly="credit_card.state.readonly"
                                   on-change="credit_card.state.onChangeCallback"
                                   on-state-select="credit_card.state.onStateSelect"
                                   valid="credit_card.state.valid"
                                   placeholder="'State' | t"
                                   is-dropdown-shown="credit_card.state.isDropdownShown"
                                   states="credit_card.state.items"
                                   title="credit_card.state.title"
                                   icon="'map'"
                                   name="'state'"
                                   data-e2e="cc_state">
      </credit-card-state-component>
    </div>
  </div>
  <div class="cc-fields-layout__flex-row">
    <div class="cc-fields-layout__field cc-fields-layout__city">
      <credit-card-city-component ng-model="credit_card.city.value"
                                  ng-disabled="credit_card.city.disabled"
                                  ng-required="credit_card.city.required"
                                  ng-readonly="credit_card.city.readonly"
                                  on-change="credit_card.city.onChangeCallback"
                                  on-city-select="credit_card.city.onCitySelect"
                                  valid="credit_card.city.valid"
                                  placeholder="'City' | t"
                                  is-dropdown-shown="credit_card.city.isDropdownShown"
                                  cities="credit_card.city.items"
                                  title="credit_card.city.title"
                                  icon="'map'"
                                  name="'city'"
                                  data-e2e="cc_city">
      </credit-card-city-component>
    </div>

    <div class="cc-fields-layout__field cc-fields-layout__postal-code">
      <credit-card-postal-code placeholder="'ZIP/Postal code' | t"
                               ng-model="credit_card.zip.value"
                               on-change="credit_card.zip.onChangeCallback"
                               ng-disabled="credit_card.zip.disabled"
                               ng-required="credit_card.zip.required"
                               ng-readonly="credit_card.zip.readonly"
                               maxlength="credit_card.zip.maxlength"
                               valid="credit_card.zip.valid"
                               name="'zip'">
      </credit-card-postal-code>
    </div>
  </div>
  <div class="cc-fields-layout__flex-row">
    <div class="cc-fields-layout__field cc-fields-layout__phone-number">
      <cc-phone-number-component placeholder="'Phone number' | t"
                                 ng-model="credit_card.phone.value"
                                 on-change="credit_card.phone.onChangeCallback"
                                 ng-disabled="credit_card.phone.disabled"
                                 ng-required="credit_card.phone.required"
                                 ng-readonly="credit_card.phone.readonly"
                                 maxlength="credit_card.phone.maxlength"
                                 valid="credit_card.phone.valid"
                                 validation-rule="'numeric'"
                                 name="'phone'">
      </cc-phone-number-component>
    </div>
  </div>
</div>

</script>

<script type="text/ng-template" id="/frontend/providers/components/applepayss/checkout/component.shtml">
<div class="applepay-ss-wrapper new-card-form">
    <div class="row">
        <div class="footer-modal">
            <div class="auto-renew-purchase" ng-show="isSelectedTermAutoRenewChoiceAvailable()">
                <input class="auto-renew-purchase-checkbox" type="checkbox" ng-model="input.autoRenew"
                       id="auto_renew"/>
                <label class="auto-renew-purchase-label" for="auto_renew">
                    <t>Automatically renew my subscription when the time comes.</t>
                </label>
            </div>
            <div>
                <a ng-click="openApplePayWindow()" class="button big applepay-ss-complete-purchase"
                   href="javascript:void(0)" ng-class="{'disabled': isApplePaySsEnabled !== true}">&nbsp;</a>
            </div>
        </div>
    </div>
</div>
</script>

<script type="text/ng-template" id="/frontend/providers/components/applepayss/common/baseTemplate.shtml">
<div class="cc-fields-layout">
    <div class="cc-fields-layout__field cc-fields-layout__card-number">
        <credit-card-number ng-model="credit_card.num.value"
                            on-change="credit_card.num.onChangeCallback"
                            ng-disabled="credit_card.num.disabled"
                            ng-required="credit_card.num.required"
                            ng-readonly="credit_card.num.readonly"
                            maxlength="credit_card.num.maxlength"
                            valid="credit_card.num.valid"
                            name="'num'">
        </credit-card-number>
    </div>
    <div class="cc-fields-layout__field cc-fields-layout__expire">
        <cc-expire-component ng-model="credit_card.expire.value"
                             on-change="credit_card.expire.onChangeCallback"
                             ng-disabled="credit_card.expire.disabled"
                             ng-required="credit_card.expire.required"
                             ng-readonly="credit_card.expire.readonly"
                             maxlength="credit_card.expire.maxlength"
                             valid="credit_card.expire.valid"
                             name="'expire'"
                             on-change="onChangeCallback">
        </cc-expire-component>
    </div>
    <div class="cc-fields-layout__field cc-fields-layout__cvv">
        <credit-card-cvv ng-model="credit_card.cvv.value"
                         on-change="credit_card.cvv.onChangeCallback"
                         ng-disabled="credit_card.cvv.disabled"
                         ng-required="credit_card.cvv.required"
                         ng-readonly="credit_card.cvv.readonly"
                         maxlength="credit_card.cvv.maxlength"
                         valid="credit_card.cvv.valid"
                         name="'cvv'">
        </credit-card-cvv>
    </div>
    <div class="cc-fields-layout__field cc-fields-layout__postal-code">
        <credit-card-postal-code ng-model="credit_card.postal_code.value"
                                 on-change="credit_card.postal_code.onChangeCallback"
                                 ng-disabled="credit_card.postal_code.disabled"
                                 ng-required="credit_card.postal_code.required"
                                 ng-readonly="credit_card.postal_code.readonly"
                                 maxlength="credit_card.postal_code.maxlength"
                                 valid="credit_card.postal_code.valid"
                                 name="'postal_code'">
        </credit-card-postal-code>
    </div>
</div>
</script>

<script type="text/ng-template" id="/frontend/providers/components/volga/checkout/component.shtml">
<div class="volga-wrapper new-card-form">
  <div class="row">
    <div desktop class="cc_stored_cards" ng-show="!data.payWithNew && data.initiated">
      <div class="add-credit-card-wrapper">
        <h4>
          <t>Your invoices</t>
        </h4>
      </div>
      <table class="payment-method-card" ng-show="data.stored.length > 0">
        <tr class="payment-method-card-row" ng-repeat="method in data.stored"
            ng-class="{'selected' : $parent.data.selectedUpiId == method.id}">
          <td class="volga-table-cell volga-table-cell--radio">
            <input type="radio" id="radio-{{method.id}}" name="stored_method" value="{{method.id}}"
                   ng-model="$parent.data.selectedUpiId"/>
          </td>
          <td class="volga-table-cell">
            <label for="radio-{{method.id}}" class="volga-table-cell-label">
              <t context="checkout.platform">{{method.description}}</t>
            </label>
          </td>
        </tr>
      </table>
    </div>

    <div mobile class="cc_stored_cards" ng-show="data.initiated">
      <table class="payment-method-card" ng-show="data.stored.length > 0">
        <tr class="payment-method-card-row" ng-repeat="method in data.stored"
            ng-class="{'selected' : $parent.data.selectedUpiId == method.id && $parent.data.payWithNew != true}">
          <td class="volga-table-cell volga-table-cell--radio">
            <input type="radio" id="m-radio-{{method.id}}" name="stored_method" value="{{method.id}}"
                   ng-model="$parent.data.selectedUpiId"/>
          </td>
          <td class="volga-table-cell">
            <label for="m-radio-{{method.id}}" class="volga-table-cell-label">
              <t context="checkout.platform">{{method.description}}</t>
            </label>
          </td>
        </tr>
      </table>
    </div>

    <div class="cc_new_card" ng-show="data.payWithNew && data.initiated">
      <div class="payment-system-condition">
        <span ng-if="!isSubscription()">
          <div class="custom-checkbox">
            <input type="checkbox" name="store_in_vault" ng-model="data.store_in_vault" id="remember-my-email-volga"/>
            <label for="remember-my-email-volga">
                <t>Remember my email for future invoices</t>
            </label>
          </div>
        </span>
        <span ng-if="isSubscription()">
          <input type="hidden" name="store_in_vault" ng-model="data.store_in_vault"/>
        </span>
        <div class="custom-checkbox" ng-if="data.store_in_vault">
          <input type="checkbox" name="defaultPaymentMethodId" ng-model="cc.defaultPaymentMethodId" id="default-payment-method-volga"/>
          <label for="default-payment-method-volga">
            <t>Apply this payment method to all active subscriptions</t>
          </label>
        </div>
      </div>
    </div>

    <div consents-list></div>
    <div class="footer-modal">
      <div class="auto-renew-purchase" ng-show="isSelectedTermAutoRenewChoiceAvailable()">
        <input class="auto-renew-purchase-checkbox" type="checkbox" ng-model="input.autoRenew"
               id="auto_renew"/>
        <label class="auto-renew-purchase-label" for="auto_renew">
          <t>Automatically renew my subscription when the time comes.</t>
        </label>
      </div>
      <div ng-show="isConfirmStepEnabled()" class="complete-purchase-button" goto-confirmation-button
           title="{{'Complete Purchase' | t}}"></div>
      <div ng-show="!isConfirmStepEnabled()" class="complete-purchase-button" complete-purchase-button
           title="{{'Complete Purchase' | t}}"></div>
    </div>
  </div>
</div>

</script>

<script type="text/ng-template" id="/frontend/providers/components/volga/common/baseTemplate.shtml">
<div class="cc-fields-layout">
  <div class="cc-fields-layout__flex-row">
    <div class="cc-fields-layout__field cc-fields-layout__email">
      <cc-email-component ng-model="credit_card.email.value"
                          on-change="credit_card.email.onChangeCallback"
                          ng-disabled="credit_card.email.disabled"
                          ng-required="credit_card.email.required"
                          ng-readonly="credit_card.email.readonly"
                          maxlength="credit_card.email.maxlength"
                          valid="credit_card.email.valid"
                          name="'email'">
      </cc-email-component>
    </div>
  </div>
</div>

</script>
<!-- consent-component -->
<script type="text/ng-template" id="/widget/checkout/component/partials/consents-list.html">

    <div class="consents">
        <div ng-repeat="item in consents | orderBy:'sortOrder' track by $index" class="consent">
            <div class="custom-checkbox">
                <input ng-model="item.checked" type="checkbox" id="consent-item-{{item.fieldId}}">
                <label ng-bind-html="item.displayText | tc:'consent.text'" for="consent-item-{{item.fieldId}}"></label>
            </div>
        </div>
    </div>

</script>

<!-- consent-box -->
<script type="text/ng-template" id="/widget/checkout/component/partials/consent-box.html">

    <div ng-if="consent" class="consents">
        <div class="custom-checkbox">
            <input ng-model="consent.checked" type="checkbox" id="consent-item-{{consent.fieldId}}">
            <label ng-bind-html="consent.displayText | tc:'consent.text'" for="consent-item-{{consent.fieldId}}"></label>
        </div>
    </div>

</script>

<!-- gift-email-params-form-component -->
<script type="text/ng-template" id="/widget/checkout/component/partials/gift-form-component.html">

    <div class="gift-header">
        <h1>
            <t>Give the gift of</t>
            {{selectedTerm.resource.name | tc:'resource.name'}}
        </h1>
    </div>

    <div class="gift-form">
        <form name="giftForm">
            <div gift-input-time class="gift-row"></div>
            <div gift-input-email class="gift-row"></div>
            <div gift-input-name class="gift-row"></div>
            <div gift-input-message class="gift-row"></div>
        </form>
    </div>

    <div class="gift-footer">
        <div class="access-buttons">
            <a class="button big fixed gray" ng-click="cancel()" title="{{ 'Cancel' | t }}"><t>Cancel</t></a>
            <a class="button big fixed" ng-click="save()" data-e2e="next-button" title="{{ 'Next' | t }}"><t>Next</t></a>
        </div>
    </div>

</script>

<script type="text/ng-template" id="/widget/checkout/component/partials/gift-input-time.html">
    <label>
        <t>Send</t>
    </label>
    <div class="gift-input sides">
        <span class="left-side">
            <label class="radio-label">
                <input name="send" id="send-now" type="radio" ng-model="form.sendType" value="now"/>
                <span class="text-wrap"><t>Now</t></span>
            </label>
        </span>
        <span class="right-side">
            <label class="radio-label">
                <input name="send" id="send-later" type="radio" ng-model="form.sendType" value="later"/>
                <span class="text-wrap"><t>Later:</t></span>
            </label>
            <div tp-datepicker options="optionsDatepicker" from-date="form.sendTime" to-date="form.sendTime" disable="inputDisabled()">
                <i class="icon-calendar"></i>
                <input type="date" class="gift-send-date" ng-model="form.sendTime" ng-disabled="inputDisabled()" date-format="{{dateFormat}}" placeholder="{{datePlaceholder}}"/>
            </div>
        </span>
    </div>
</script>

<script type="text/ng-template" id="/widget/checkout/component/partials/gift-input-name.html">
    <label for="recipientName">
        <t>Recipient name</t>
    </label>
    <div class="gift-input">
        <input id="recipientName" class="regular-border" data-e2e="recipient-name" ng-model="form.recipientName" type="text" required/>
    </div>
</script>

<script type="text/ng-template" id="/widget/checkout/component/partials/gift-input-email.html">
    <label for="recipientEmail">
        <t>Recipient email</t>
    </label>
    <div class="gift-input">
        <input id="recipientEmail" class="regular-border" data-e2e="recipient-email" ng-model="form.recipientEmail" type="text" required/>
    </div>
</script>

<script type="text/ng-template" id="/widget/checkout/component/partials/gift-input-message.html">
    <label for="message">
        <t>Add a personal message</t>
    </label>
    <div class="gift-input">
        <textarea id="message" ng-model="form.message" data-e2e="gift-message" rows="4"></textarea>
    </div>
</script>
<!-- redemption-component -->
<script type="text/ng-template" id="/widget/checkout/component/partials/redemption-component.html">
    <div account-header-component></div>

    <div class="redemption-header">
        <h1>
            <t>Redeem your voucher</t>
        </h1>
    </div>

    <div redemption-code-and-info></div>
</script>

<script type="text/ng-template" id="/widget/checkout/component/partials/redemption-code.html">
    <div class="redemption-form">
        <form>
            <div>
                <p class="redeem-code-description">
                    <t>Enter the code of your voucher</t>
                </p>
                <div redeem-code-input></div>
            </div>
        </form>
    </div>
    <div class="redemption-footer">
        <div class="access-button">
            <a class="button big fixed gray" ng-click="cancel()"><t>Cancel</t></a>
            <a class="button big fixed" ng-click="applyCode()"><t>Next</t></a>
        </div>
    </div>
</script>

<script type="text/ng-template" id="/widget/checkout/component/partials/redemption-info.html">
    <div class="redemption-form">
        <div>
            <p>
                <t>You are about to receive <b>{{voucherResource()}}</b> by code "{{redeemCode()}}"</t>
            </p>
            <div class="redemption-info">
                <table>
                    <tr>
                        <th><t>Starting</t></th>
                        <th><t>Duration</t></th>
                        <th><t>Expires</t></th>
                        <th><t>Billing</t></th>
                    </tr>
                    <tr>
                        <td>
                            {{voucherStarting()}}
                        </td>
                        <td>{{voucherDuration()}}</td>
                        <td>{{voucherExpires()}}</td>
                        <td><b><t>Free</t></b></td>
                    </tr>
                </table>
            </div>
            <p ng-if="voucherRedemptionStartDate() !== null && voucherRedemptionEndDate() === null">
                <t arg0="{{voucherRedemptionStartDate()}}">Redemption is allowed after <b>{0}</b></t>
            </p>
            <p ng-if="voucherRedemptionStartDate() !== null && voucherRedemptionEndDate() !== null">
                <t arg0="{{voucherRedemptionStartDate()}}" arg1="{{voucherRedemptionEndDate()}}">Redemption is allowed from <b>{0}</b> to <b>{1}</b></t>
            </p>
            <p ng-if="voucherRedemptionStartDate() === null && voucherRedemptionEndDate() !== null">
                <t arg0="{{voucherRedemptionEndDate()}}">Redemption is allowed before <b>{0}</b></t>
            </p>
        </div>
    </div>

    <div ng-if="isSingleStepEnabled()" auth-component></div>

    <div class="redemption-footer">
        <div class="access-button">
            <a class="button big fixed gray" ng-click="cancel()"><t>Cancel</t></a>
            <a ng-if="voucherRedemptionAllowed() === true && addressCollectEnabled() === true"
               class="button big fixed" ng-click="toCollectAddress()"><t>Next</t></a>
            <a ng-if="voucherRedemptionAllowed() === true && addressCollectEnabled() !== true"
               class="button big fixed" ng-click="redeem()"><t>Redeem</t></a>
            <a ng-if="voucherRedemptionAllowed() !== true" class="button big fixed disabled"><t>Redeem</t></a>
        </div>
    </div>
</script>

<script type="text/ng-template" id="/widget/checkout/component/partials/redeem-code-input.html">
    <div class="redeem-code-input-wrapper">
        <input type="text"
               id="redeem-code-input"
               ng-model="form.redeemCode"
               on-enter="applyCode()"
               placeholder="{{'Enter voucher code' | t}}"
               ng-class="{'invalid': redeemCodeIsInvalid()}"
        />
        <span ng-show="redeemCodeIsInvalid()" class="redeem-code-input-error">
            {{redeemCodeErrorMessage()}}
        </span>
    </div>
</script>
<!-- term-selector-component -->
<script type="text/ng-template" id="/widget/checkout/component/partials/term-selector-component.html">
    <div desktop>
        <table class="account-terms">
            <tbody>
            <tr ng-repeat="term in terms">
                <td class="title">
                    <h2>{{term.name | tc:'term.name'}}</h2>
                    {{term.description | tc:'term.descr'}}
                </td>
                <td class="detail">
                    <span ng-show="isPayableTerm(term)">
                        <span class="price">
                            <span ng-if="term.hasFreeTrial"><t>Free</t></span>
                            <span ng-if="!term.hasFreeTrial">{{term.firstRealPrice}}</span>
                        </span>
                        <span class="period"><t>for {{term.firstPeriod}}</t></span>
                    </span>
                </td>
                <td class="choose">
                    <a href="javascript:void(0)" class="button big plan" ng-click="selectTerm(term)"><t>Choose</t></a>
                </td>
            </tr>
        </table>
    </div>
    <div mobile>
        <table class="account-terms">
            <tbody>
            <tr ng-repeat="term in terms">
                <td class="title">
                    <h2>{{term.name|tc:'term.name'}}</h2>

                    <span class="detail" ng-show="isPayableTerm(term)">
                        <span class="price">
                            <span ng-if="term.hasFreeTrial"><t>Free</t></span>
                            <span ng-if="!term.hasFreeTrial">{{term.firstRealPrice}}</span>
                        </span>
                        <span class="period"><t>for {{term.firstPeriod}}</t></span>
                    </span>
                </td>
                <td class="choose">
                    <a href="javascript:void(0)" class="button big plan" ng-click="selectTerm(term)"><t>Choose</t></a>
                </td>
        </table>
    </div>
</script>
<script type="text/ng-template" id="/widget/checkout/component/partials/auth-component.html"
        xmlns="http://www.w3.org/1999/html">
    <auth-custom-login>
        <auth-state name="login">
            <h1>
                <t>Login</t>
            </h1>
            <form>
                <input class="auth-email" type="text" placeholder="{{ 'Email'|t }}" ng-model="input.email"/>
                <input class="auth-password" type="password" placeholder="{{'Password'|t}}" ng-model="input.password"/>
            </form>
            <a class="auth-login button" ng-click="doLogin()">
                <t>Login</t>
            </a>
            <a class="auth-goto-register" ng-click="gotoRegister()">
                <t>Register</t>
            </a>
            <a class="auth-goto-forgot-password" ng-click="gotoForgotPassword()">
                <t>Forgot password?</t>
            </a>
        </auth-state>
        <auth-state name="register">
            <h1>
                <t>Register</t>
            </h1>
            <form>
                <input class="auth-email" type="text" placeholder="{{ 'Email'|t }}" ng-model="input.email"/>
                <input class="auth-password" type="password" placeholder="{{'Password'|t}}" ng-model="input.password"/>
            </form>
            <a class="auth-register button" ng-click="doRegister()">
                <t>Register</t>
            </a>
            <a class="auth-goto-login" ng-click="gotoLogin()">
                <t>Login</t>
            </a>
        </auth-state>
        <auth-state name="forgotPassword">
            <h1>
                <t>Forgot password</t>
            </h1>
            <form>
                <input class="auth-email" type="text" placeholder="{{ 'Email'|t }}" ng-model="input.email"/>
            </form>
            <a class="auth-forgot-password button" ng-click="doForgotPassword()">
                <t>Send</t>
            </a>
            <a class="auth-goto-login" ng-click="gotoLogin()">
                <t>Login</t>
            </a>
        </auth-state>
        <auth-state name="forgotPasswordHasSent">
            <h1>
                <t>Reset password instructions has been sent to</t>
                <span class="auth-email">{{ input.email }}</span>
            </h1>
            <a class="auth-goto-login" ng-click="gotoLogin()"><t>Login</t></a>
        </auth-state>
    </auth-custom-login>
</script>
<!-- promo-code-component -->
<script type="text/ng-template" id="/widget/checkout/component/partials/promo-code-component.html">
    <div ng-if="isPromoCodeAvailable() " animate-locked-promo-code>
        <div class="promo-code-component"
             ng-class="{'promo-code-unlocked': isSelectedTermLocked()}"
             ng-if="!isPromoCodeValid()">
            <div class="promo-code-eclipse">
                <div class="promo-code-lock"></div>
            </div>
            <div class="promo-code-description">
                <p class="promo-code-description-enter">
                    <t>Enter promo code to purchase</t>
                    <br/>
                    {{selectedTerm.resource.name | tc:'resource.name'}}
                </p>

                <p class="promo-code-description-error">
                    <t>Sorry, your promo code was not valid!</t>
                    <br/>
                    <span class="resource-name">
                        <t>Try another code to purchase</t> {{selectedTerm.resource.name | tc:'resource.name'}}
                    </span>
                </p>
            </div>
            <h4>
                <t>Promotivni kôd</t>
            </h4>
            <div class="promo-code-input-outside-wrapper">
                <table ng-if="!isSelectedTermLocked()" class="promo-code-input-wrapper table-form-inline">
                    <tr>
                        <td>
                            <div class="field-wrapper">
                                <label for="promo-code-input" class="icon percent"></label>
                                <div class="input">
                                    <input
                                        id="promo-code-input"
                                        data-e2e="promoCodeInput"
                                        class="flat promo-code-input"
                                        type="text"
                                        autocomplete="off"
                                        ng-model="input.promoCode"
                                        name="promocode"
                                        on-enter="apply()"
                                        placeholder="{{'Unesite promotivni kôd' | t}}"
                                        error-message="field-error"/>
                                </div>
                            </div>
                        </td>
                    </tr>
                </table>
                <table ng-if="isSelectedTermLocked()" class="promo-code-input-wrapper table-form-inline">
                    <tr>
                        <td>
                            <div class="field-wrapper">
                                <label for="promo-code-input-locked" class="icon percent"></label>
                                <div class="input">
                                    <input
                                    id="promo-code-input-locked"
                                    class="flat promo-code-input"
                                    data-e2e="promoCodeInput"
                                    type="text"
                                    autocomplete="off"
                                    ng-model="input.promoCode"
                                    name="promocode"
                                    on-enter="apply()"
                                    placeholder="{{'Enter promo code' | t}}"
                                    ng-click="inputClick()" />
                                </div>
                            </div>
                        </td>
                    </tr>
                </table>
                <a class="button promo-code-apply" ng-click="apply()">
                    <t>Apply</t>
                </a>
            </div>
        </div>
        <div class="promo-code-component verified" ng-if="isPromoCodeValid()">
            <div class="promo-code-applied">
                <div class="promo-code-verified"></div>
                <t>{{input.promoCode }} je primijenjen</t>
            </div>
            <div class="promo-code-revert" data-e2e="promoCodeRevert" ng-click="revert()"><t>Ukloni</t></div>
        </div>
    </div>
</script>

<!-- promo code another term dialog -->
<script type="text/ng-template" id="/widget/checkout/component/partials/promo-code-another-term-dialog.html">
    <div class="modal-header"></div>
    <div class="modal-content">
        <p>
            <t>Your {{verifiedPromoCode.discount}} off promo code
            is valid only for

            <b>{{otherTerm.resource.name}} - {{otherTerm.displayLine}}</b>.</t>
            <t>Switch to Another Resource? You can always come back.</t>
        </p>
    </div>
    <div class="action-panel">
        <a href="javascript:void(0)" class="button show-another-promocode" ng-click="selectTerm()"><t>Show me</t></a>
        <a href="javascript:void(0)" class="button gray" ng-click="close()"><t>Cancel</t></a>
    </div>
</script>
<script type="text/ng-template" id="/widget/checkout/component/partials/upgrade-authentication-component.html">
  <div account-header-component></div>

  <div class="upgrade-container"
       ng-if="isConfirmationAvailable() === true">
    <div class="upgrade-container__subscription-changes">
      <span class="upgrade-title subscription-title">
        <t>Confirm the subscription upgrade</t>
      </span>
      <ul class="subscription-changes-list">
        <li class="list-item list-item--bullet"
            data-e2e="terms"
        >
          <span class="item-text">
            <t arg0="{{upgradeInformation.termFromName}}" arg1="{{upgradeInformation.termToName}}">You are about to upgrade from <b>{0}</b> to <b>{1}</b></t>
          </span>
        </li>
        <li class="list-item list-item--bullet"
            data-e2e="billing-plan"
        >
          <span class="item-text">
            <t arg0="{{upgradeInformation.billingPlan}}" arg1="{{upgradeInformation.billingDate | date:'mediumDate'}}">Your subscription for <b>{0}</b> will begin <b>{1}</b></t>
          </span>
        </li>
        <li class="list-item list-item--bullet"
            ng-if="upgradeInformation.address"
            data-e2e="address"
        >
          <span class="item-text">
              <t>The delivery address for the new subscription is:</t>
              <div>{{upgradeInformation.address.firstName}} {{upgradeInformation.address.lastName}} {{upgradeInformation.address.companyName}} {{upgradeInformation.address.phone}}</div>
              <div>{{upgradeInformation.address.line1}} {{upgradeInformation.address.line2}}</div>
              <div>{{upgradeInformation.address.countryName}} {{upgradeInformation.address.regionName}} {{upgradeInformation.address.postal}}</div>
          </span>
        </li>
      </ul>
    </div>
    <div class="upgrade-container__additional-information">
      <span class="upgrade-title additional-information-title">
        <t>Additional upgrade information</t>
      </span>
      <ul class="subscription-changes-list">
        <li class="list-item"
            data-e2e="payment-method"
        >
          <span class="item-text">
            <t>Payment method: </t>
            <span ng-show="upgradeInformation.creditCard">
              <t arg0="{{upgradeInformation.paymentType}}" arg1="{{upgradeInformation.accountNumber.slice(-4)}}"><b>{0} *{1}</b></t>
            </span>
            <span ng-hide="upgradeInformation.creditCard">
              <t arg0="{{upgradeInformation.paymentMethodName}}"><b>{0}</b></t>
            </span>
            <span ng-if="upgradeInformation.expireMonth && upgradeInformation.expireYear">
              <t arg0="{{upgradeInformation.expireMonth}}" arg1="{{upgradeInformation.expireYear}}"> expires in <b>{0}/{1}</b></t>
            </span>
          </span>
        </li>
      </ul>
    </div>
  </div>

  <div class="upgrade-container"
       ng-if="isConfirmationAvailable() === false">
    <div class="upgrade-container__subscription-changes">
      <span class="upgrade-title subscription-title">
        <t>Confirm the subscription upgrade</t>
      </span>
    </div>
    <ul class="subscription-changes-list">
      <li class="list-item" data-e2e="upgrade-unavailable-text">
        <span class="item-text">
          <t>This upgrade is unavailable. Please close this window to choose a new option.</t>
        </span>
      </li>
    </ul>
  </div>

  <div class="upgrade-complete-footer">
    <div class="access-buttons"
         ng-if="isConfirmationAvailable() === true">
      <a class="button big fixed--middle gray"
         ng-click="cancel()"
         data-e2e="cancel"
         title="{{ 'Cancel' | t }}"
      >
        <t>Cancel</t>
      </a>
      <a class="button big fixed--middle confirmation-button"
         ng-click="authenticate()"
         data-e2e="authenticate"
         title="{{ 'Authenticate' | t }}"
      >
        <t>Authenticate</t>
      </a>
    </div>

    <div class="access-buttons"
         ng-if="isConfirmationAvailable() === false">
      <a class="button big fixed--middle confirmation-button"
         ng-click="cancel()"
         data-e2e="close"
         title="{{ 'Close' | t }}"
      >
        <t>Close</t>
      </a>
    </div>
  </div>
</script>

<script type="text/ng-template" id="/widget/checkout/component/partials/upgrade-authentication-receipt-component.html">
  <div class="upgrade-purchase-receipt">
    <h1 class="you-already-have-access">
      <t>Thank you!</t>
    </h1>

    <div data-e2e="details">
      <t arg0="{{upgradeInformation.termFromName}}" arg1="{{upgradeInformation.termToName}}">You just confirmed the upgrade from {0} to {1}.</t>
    </div>
  </div>
</script>


<!-- Start main controller -->
<div id="checkout-container" style="">
    <div checkout width="740" height="100" ng-cloak>
        <div id="default-error-screen" ng-show="terminalError">
            <div class="error-screen">
    <div class="account-popup-header" ng-if="isUserValid()">
        <div class="account-group">
            <boilerplate-close-button></boilerplate-close-button>
          	<!--
            <div class="button pict"></div>
            <div class="account-data">
                <div ng-if="user.displayName" class="account-name">{{user.displayName}}</div>
                <div ng-if="user.email" class="account-mail">{{user.email}}</div>
            </div>
			-->
        </div>
    </div>
    <div class="row">
        <!-- <language-selector></language-selector> -->
        <div class="error-notification-icon"></div>
        <div class="content">
            <h1 ng-show="terminalErrorHeading">{{terminalErrorHeading}}</h1>
            <h1 ng-show="!terminalErrorHeading"><t>An error has occurred</t></h1>


            <p class="ng-hide" ng-show="terminalError">
                {{terminalError}}
            </p>
        </div>
    </div>
</div>

        </div>

        <div ng-show="!terminalError">

            <config width="540"></config>

<div view="state1">
    <div account-header-component></div>

    <div class="row account-head">
        <div class="business-logo" ng-show="app.image1">
            <img class="logo-img" ng-src="{{app.image1}}">
        </div>
        <div class="account-head-contentcol" ng-class="!app.image1 ? 'no-logo' : ''">
            <div class="account-head-content">
                <h2>
                    <t>Checkout with {{app.name}}</t>
                </h2>

                <p>
                    <t>Choose from any one of our options below.</t>
                </p>
            </div>
            <div class="clr"></div>
        </div>
    </div>

    <div>
        <div term-selector-component></div>
    </div>
</div>

<div view="state2">
    <div account-header-component></div>

    <div class="row account-head">
        <div class="piano__logo">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 389.99 96"><path d="M0,0V96H390V0ZM385.38,91.44H193.65V4.56H385.38Z" style="fill:#4a0a07"/><path d="M367.23,59V46.37l-5,12.67h-1.63l-5-12.67V59H352V41.48h5.24l4.27,11,4.27-11H371V59Zm-34.61-7c0,4.34,2.58,7.34,7.93,7.34s7.93-3,7.93-7.34V41.47h-3.82V51.9a4.13,4.13,0,1,1-8.25,0V41.47h-3.79V52m-7.21,7h3.74V41.48h-3.74Zm-3.49,0V41.48h-5.26l-4.27,11-4.26-11h-5.24V59h3.74V46.37L311.58,59h1.63l5-12.67V59Zm-22,0V55.75h-8.69v-4h8.51V48.45h-8.51V44.77H300V41.48H287.53V59ZM280.89,47.11a2.38,2.38,0,0,1-2.6,2.4h-4V44.77h4a2.36,2.36,0,0,1,2.6,2.34M284.84,59l-4-6.69a5.08,5.08,0,0,0,3.87-5.21c0-3.27-2.27-5.66-5.93-5.66H270.6V59h3.74V52.8h2.74L280.52,59Zm-20.41-11.9a2.37,2.37,0,0,1-2.61,2.34h-3.95V44.77h3.95a2.37,2.37,0,0,1,2.61,2.37M257.87,59V52.77h4.48a5.49,5.49,0,0,0,5.9-5.63c0-3.08-2.08-5.66-5.9-5.66h-8.21V59Zm-26.56-3.15-8.2-14.41-8.2,14.41-8.2-14.41V59.37h32.8V41.48Z" style="fill:#4a0a07"/><path d="M180.9,11.76c0-2.2-1.39-3.37-4.67-3.37s-4.71,1.17-4.71,3.37c0,2.47,1.48,3.36,4.71,3.36s4.67-1.12,4.67-3.36m-9.11,32.85h8.84V17l-8.84.4Zm4.05,6.56-6.82.59-1.39,5.83h-3v6.24h2.6V76.66c0,5.38,2.83,8.84,8.84,8.84a13.67,13.67,0,0,0,5.21-.85l-.45-6a7.48,7.48,0,0,1-2.11.32c-2,0-2.83-.76-2.83-2.51V63.83h4.83V57.59h-4.83Zm-7-39.41c0-2.2-1.39-3.37-4.71-3.37s-4.71,1.17-4.71,3.37c0,2.42,1.48,3.32,4.71,3.32s4.71-1.12,4.71-3.32M160,43.8A1.94,1.94,0,0,1,157.81,46a6.28,6.28,0,0,1-1.53-.22l-.4,5.79a12.91,12.91,0,0,0,4.09.63c4.62,0,8.66-1.89,8.66-8.13V17l-8.66.36Zm-12.23.81h8.66V27.46c0-6.95-3.73-10.81-9.51-10.81a11.52,11.52,0,0,0-7.27,2.47L138.4,17l-6.19.36V44.61h8.62V25.53A4.58,4.58,0,0,1,144.42,24c2.2,0,3.32,1,3.32,3.5ZM132,52.2c0,2.47,1.48,3.37,4.71,3.37s4.67-1.12,4.67-3.37-1.39-3.36-4.67-3.36S132,50,132,52.2m-2.18-26.89.5-8.16a9,9,0,0,0-3.1-.46,7.88,7.88,0,0,0-7,4.31H120l-.77-3.95-6.86.32V44.61h8.66V30.92c0-3.9,2.24-6.06,5.56-6.06a11.37,11.37,0,0,1,3.19.45m-19.9,8a36.09,36.09,0,0,0,.23-3.86c0-8.66-4.36-12.79-11.68-12.79-8.61,0-12.56,5.25-12.56,14,0,9.3,4.49,14.41,14.27,14.41a24.49,24.49,0,0,0,9.25-1.66l-1-6.64a23.18,23.18,0,0,1-7.22,1.12c-4,0-6-1.26-6.37-4.58Zm-7.67-5.43H94.7c.27-3.32,1.21-4.35,3.81-4.35,2.38,0,3.64,1.21,3.73,4.35M81.86,15.3l4.35-6.55H79.8l-1.57,3.37H78L76.38,8.75H70.1l4.22,6.55Zm-3.11,1.44c-9.15,0-13.06,5.29-13.06,14.31,0,9.34,4.49,14.09,12.88,14.09a14.35,14.35,0,0,0,7-1.43l-.59-6.46a12.73,12.73,0,0,1-4.48.8c-3.64,0-5.79-2.06-5.79-7,0-5.11,1.34-6.91,6-6.91a16.52,16.52,0,0,1,4.18.68l.44-7a20.42,20.42,0,0,0-6.5-1.08M64.28,33.34a36.17,36.17,0,0,0,.22-3.86c0-8.66-4.35-12.79-11.67-12.79-8.61,0-12.56,5.25-12.56,14,0,9.3,4.49,14.41,14.27,14.41a24.4,24.4,0,0,0,9.24-1.66l-.94-6.64a23.23,23.23,0,0,1-7.22,1.12c-4,0-6-1.26-6.38-4.58ZM56.6,27.91H49.07c.27-3.32,1.21-4.35,3.81-4.35,2.38,0,3.63,1.21,3.72,4.35M31.73,44.61,42.86,11H33.12L27.65,31.64l-.81,3.5H26.7l-.85-3.5L20.51,11H10.19L21.27,44.61ZM128.87,50l-8.75.4V85.05h8.75Zm12.23,7.49-8.84.41V85.05h8.84Zm14.65,19.48c0,1.12-.89,1.88-3,1.88a18.72,18.72,0,0,1-7.81-1.75l-.86,6.82a19.94,19.94,0,0,0,8.71,1.71c7.81,0,11-3.82,11-9.43,0-9.37-11.71-7.22-11.71-10.49,0-1,.8-1.58,2.51-1.58A23.24,23.24,0,0,1,162,65.4l.63-6.73a21.45,21.45,0,0,0-8-1.53c-7.44,0-10.9,3.81-10.9,8.89,0,9.78,12,7.44,12,10.9" style="fill:#fff"/></svg>
        </div>
        <div class="account-head-contentcol" ng-class="!app.image1 ? 'no-logo' : ''">
            <div class="account-head-content">
                <h1>Ovaj sadržaj je dostupan samo za Premium korisnike Večernjeg lista. Pretplatite se na sadržaj s potpisom.</h1>

                <div class="term-details">
                    <div ng-if="isPayableTerm(selectedTerm)" ng-switch="getPayableTermType()">
                        <div ng-switch-when="PAYABLE">
                            <span class="has-free-trial"><t>You are about to be charged <b>€ {{input.chargeAmount}}</b>.</t></span>
                        </div>
                        <div ng-switch-when="FREE_TRIAL_FIXED">
                            <span class="selected-term-hasfreetrial"><t>You are about to get this trial.</t></span>
                        </div>
                        <div ng-switch-when="FREE_TRIAL_SUBSCRIPTION">
                            <span class="selected-term-hasfreetrial"><t>You are about to get this trial.</t></span>
                            <span class="subscription-has-free-trial"
                                  ng-show="selectedTerm.isSubscription && selectedTerm.hasFreeTrial">
                            <span ng-if="isAuthorizationSupportedByPaymentMethod()">
                                <t>You have to proceed to the payment provider page and confirm the payment for the
                                {{selectedTerm.firstRealPriceWithTax}} to allow us to renew your subscription when time will come. You'll not
                                be actually charged.</t>
                            </span>

                                <span ng-if="!isAuthorizationSupportedByPaymentMethod()" ng-switch="getFreeTrialType()">
                                    <span ng-switch-when="FREE_TRIAL_TERM_PROMO" id="free-trial-term-promo-message">
                                        <t>Provide your payment details. The free trial associated with this subscription will be appended to the standard duration of access, and the promotion used for this subscription will be applied at the first renewal. You will be charged {{selectedTerm.firstRealPriceWithTax}} today for this extended period.</t>
                                    </span>
                                    <span ng-switch-when="FREE_TRIAL_TERM" id="free-trial-term-message">
                                        <t>Provide your payment details. The free trial associated with this subscription will be appended to the standard duration of access. You will be charged {{selectedTerm.firstRealPriceWithTax}} today for this extended period.</t>
                                    </span>
                                    <span ng-switch-when="FREE_TRIAL_PROMO" id="free-trial-promo-message">
                                        <t>Provide your payment details. The promotion used for this subscription will be applied at the first renewal. You will be charged {{selectedTerm.firstRealPriceWithTax}} today for this extended period.</t>
                                    </span>
                                </span>
                            </span>

                        </div>
                    </div>
                </div>
            </div>

            <div class="pay-what-you-want" ng-if="isPayWhatYouWantTerm()">
                <span pay-what-you-want-form-component></span>
            </div>

        </div>
    </div>
    <div auth-component></div>
    <div promo-code-component></div>
    <div payment-form-component></div>

</div>

<!-- Receipt Screen -->
<div view="alreadyHasAccess">
    <div already-has-access-component></div>
</div>

<div view="auth">
    <div account-header-component></div>
    <div auth-component></div>
</div>

<div view="lockedPromoCode">
    <div account-header-component></div>
    <div promo-code-component></div>
</div>

<div view="externalVerification">
    <div account-header-component></div>
    <div external-verification-component></div>
</div>

<div view="printAddress">
    <div account-header-component></div>
    <div print-address-component></div>
</div>

<div view="confirmation">
    <div confirmation-component></div>
</div>

<div view="giftParams">
    <div account-header-component></div>
    <div gift-form-component></div>
</div>

<div view="redemption">
    <div redemption-component></div>
</div>

<div view="user-non-confirmed">
    <div account-header-component></div>
    <div email-confirmation-required></div>
</div>

<div view="bankSecure">
    <div bank-secure-component></div>
</div>

<div view="sharedSubscription">
    <div shared-subscription-component></div>
</div>

<div view="redeemSharedSubscription">
    <div redeem-shared-subscription-component></div>
</div>

<div view="continueThreeDSPurchase">
    <div continue-three-d-s-purchase-component></div>
</div>

<div view="upgradeSubscription">
    <div complete-upgrade-component></div>
</div>

<div view="upgradeSharedSubscription">
    <div upgrade-shared-subscription-component></div>
</div>


            <div view="offer">
                <div class="piano light">
  <div class="piano__wrap">

    <div class="piano__header">
      <div class="piano__logo">
        <svg ng-if="'light' !== 'dark'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 389.99 96">
          <path d="M0,0V96H390V0ZM385.38,91.44H193.65V4.56H385.38Z" style="fill:#4a0a07" />
          <path
            d="M367.23,59V46.37l-5,12.67h-1.63l-5-12.67V59H352V41.48h5.24l4.27,11,4.27-11H371V59Zm-34.61-7c0,4.34,2.58,7.34,7.93,7.34s7.93-3,7.93-7.34V41.47h-3.82V51.9a4.13,4.13,0,1,1-8.25,0V41.47h-3.79V52m-7.21,7h3.74V41.48h-3.74Zm-3.49,0V41.48h-5.26l-4.27,11-4.26-11h-5.24V59h3.74V46.37L311.58,59h1.63l5-12.67V59Zm-22,0V55.75h-8.69v-4h8.51V48.45h-8.51V44.77H300V41.48H287.53V59ZM280.89,47.11a2.38,2.38,0,0,1-2.6,2.4h-4V44.77h4a2.36,2.36,0,0,1,2.6,2.34M284.84,59l-4-6.69a5.08,5.08,0,0,0,3.87-5.21c0-3.27-2.27-5.66-5.93-5.66H270.6V59h3.74V52.8h2.74L280.52,59Zm-20.41-11.9a2.37,2.37,0,0,1-2.61,2.34h-3.95V44.77h3.95a2.37,2.37,0,0,1,2.61,2.37M257.87,59V52.77h4.48a5.49,5.49,0,0,0,5.9-5.63c0-3.08-2.08-5.66-5.9-5.66h-8.21V59Zm-26.56-3.15-8.2-14.41-8.2,14.41-8.2-14.41V59.37h32.8V41.48Z"
            style="fill:#4a0a07" />
          <path
            d="M180.9,11.76c0-2.2-1.39-3.37-4.67-3.37s-4.71,1.17-4.71,3.37c0,2.47,1.48,3.36,4.71,3.36s4.67-1.12,4.67-3.36m-9.11,32.85h8.84V17l-8.84.4Zm4.05,6.56-6.82.59-1.39,5.83h-3v6.24h2.6V76.66c0,5.38,2.83,8.84,8.84,8.84a13.67,13.67,0,0,0,5.21-.85l-.45-6a7.48,7.48,0,0,1-2.11.32c-2,0-2.83-.76-2.83-2.51V63.83h4.83V57.59h-4.83Zm-7-39.41c0-2.2-1.39-3.37-4.71-3.37s-4.71,1.17-4.71,3.37c0,2.42,1.48,3.32,4.71,3.32s4.71-1.12,4.71-3.32M160,43.8A1.94,1.94,0,0,1,157.81,46a6.28,6.28,0,0,1-1.53-.22l-.4,5.79a12.91,12.91,0,0,0,4.09.63c4.62,0,8.66-1.89,8.66-8.13V17l-8.66.36Zm-12.23.81h8.66V27.46c0-6.95-3.73-10.81-9.51-10.81a11.52,11.52,0,0,0-7.27,2.47L138.4,17l-6.19.36V44.61h8.62V25.53A4.58,4.58,0,0,1,144.42,24c2.2,0,3.32,1,3.32,3.5ZM132,52.2c0,2.47,1.48,3.37,4.71,3.37s4.67-1.12,4.67-3.37-1.39-3.36-4.67-3.36S132,50,132,52.2m-2.18-26.89.5-8.16a9,9,0,0,0-3.1-.46,7.88,7.88,0,0,0-7,4.31H120l-.77-3.95-6.86.32V44.61h8.66V30.92c0-3.9,2.24-6.06,5.56-6.06a11.37,11.37,0,0,1,3.19.45m-19.9,8a36.09,36.09,0,0,0,.23-3.86c0-8.66-4.36-12.79-11.68-12.79-8.61,0-12.56,5.25-12.56,14,0,9.3,4.49,14.41,14.27,14.41a24.49,24.49,0,0,0,9.25-1.66l-1-6.64a23.18,23.18,0,0,1-7.22,1.12c-4,0-6-1.26-6.37-4.58Zm-7.67-5.43H94.7c.27-3.32,1.21-4.35,3.81-4.35,2.38,0,3.64,1.21,3.73,4.35M81.86,15.3l4.35-6.55H79.8l-1.57,3.37H78L76.38,8.75H70.1l4.22,6.55Zm-3.11,1.44c-9.15,0-13.06,5.29-13.06,14.31,0,9.34,4.49,14.09,12.88,14.09a14.35,14.35,0,0,0,7-1.43l-.59-6.46a12.73,12.73,0,0,1-4.48.8c-3.64,0-5.79-2.06-5.79-7,0-5.11,1.34-6.91,6-6.91a16.52,16.52,0,0,1,4.18.68l.44-7a20.42,20.42,0,0,0-6.5-1.08M64.28,33.34a36.17,36.17,0,0,0,.22-3.86c0-8.66-4.35-12.79-11.67-12.79-8.61,0-12.56,5.25-12.56,14,0,9.3,4.49,14.41,14.27,14.41a24.4,24.4,0,0,0,9.24-1.66l-.94-6.64a23.23,23.23,0,0,1-7.22,1.12c-4,0-6-1.26-6.38-4.58ZM56.6,27.91H49.07c.27-3.32,1.21-4.35,3.81-4.35,2.38,0,3.63,1.21,3.72,4.35M31.73,44.61,42.86,11H33.12L27.65,31.64l-.81,3.5H26.7l-.85-3.5L20.51,11H10.19L21.27,44.61ZM128.87,50l-8.75.4V85.05h8.75Zm12.23,7.49-8.84.41V85.05h8.84Zm14.65,19.48c0,1.12-.89,1.88-3,1.88a18.72,18.72,0,0,1-7.81-1.75l-.86,6.82a19.94,19.94,0,0,0,8.71,1.71c7.81,0,11-3.82,11-9.43,0-9.37-11.71-7.22-11.71-10.49,0-1,.8-1.58,2.51-1.58A23.24,23.24,0,0,1,162,65.4l.63-6.73a21.45,21.45,0,0,0-8-1.53c-7.44,0-10.9,3.81-10.9,8.89,0,9.78,12,7.44,12,10.9"
            style="fill:#fff" />
        </svg>
        <svg ng-if="'light' === 'dark'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 389.99 96">
          <path
            d="M0,0V96H390V0ZM385.38,91.44H193.65V4.56H385.38ZM367.23,59V46.37l-5,12.67H360.6l-5-12.67V59H352V41.48h5.24l4.27,11,4.27-11H371V59Zm-34.61-7c0,4.34,2.58,7.34,7.93,7.34s7.93-3,7.93-7.34V41.47h-3.82V51.9a4.13,4.13,0,1,1-8.25.41,2.81,2.81,0,0,1,0-.41V41.47h-3.79V52m-7.21,7h3.74V41.48h-3.74Zm-3.49,0V41.48h-5.26l-4.27,11-4.26-11h-5.24V59h3.74V46.37L311.58,59h1.63l5-12.67V59Zm-22,0V55.75h-8.69v-4h8.51v-3.3h-8.51V44.77H300V41.48H287.53V59Zm-19-11.89a2.39,2.39,0,0,1-2.35,2.41h-4.25V44.77h4a2.36,2.36,0,0,1,2.59,2.11,1.69,1.69,0,0,1,0,.23M284.84,59l-4-6.69a5.08,5.08,0,0,0,3.87-5.21c0-3.27-2.27-5.66-5.93-5.66H270.6V59h3.74V52.8h2.74l3.44,6.2ZM264.43,47.1A2.37,2.37,0,0,1,262,49.45h-4.17V44.77h3.95a2.38,2.38,0,0,1,2.6,2.12,2.09,2.09,0,0,1,0,.25M257.87,59V52.77h4.48a5.5,5.5,0,0,0,5.89-5.06,5.42,5.42,0,0,0,0-.57c0-3.08-2.08-5.66-5.9-5.66h-8.21V59Zm-26.56-3.15-8.2-14.41-8.2,14.41-8.2-14.41V59.37h32.8V41.48ZM180.9,11.76c0,2.24-1.44,3.36-4.67,3.36s-4.71-.89-4.71-3.36c0-2.2,1.43-3.37,4.71-3.37s4.67,1.17,4.67,3.37m-9.11,32.85V17.4l8.84-.4V44.61Zm4.05,6.56,0,6.42h4.83v6.24h-4.83V76.46c0,1.75.83,2.51,2.83,2.51a7.49,7.49,0,0,0,2.11-.32l.45,6a13.58,13.58,0,0,1-5.21.85c-6,0-8.84-3.46-8.84-8.84V63.83h-2.6V57.59h3L169,51.76Zm-7-39.41c0,2.2-1.48,3.32-4.71,3.32s-4.71-.9-4.71-3.32c0-2.2,1.39-3.37,4.71-3.37s4.71,1.17,4.71,3.37M160,43.8l0-26.44,8.66-.36V44.07c0,6.24-4,8.13-8.66,8.13a12.9,12.9,0,0,1-4.09-.63l.4-5.79a6.08,6.08,0,0,0,1.53.22,1.69,1.69,0,0,0,.55,0A2,2,0,0,0,160,43.8Zm-12.23.81,0-17.11c0-2.5-1.12-3.5-3.32-3.5a4.59,4.59,0,0,0-3.59,1.53V44.61h-8.62V17.36L138.4,17l1.25,2.12a11.55,11.55,0,0,1,7.27-2.47c5.78,0,9.51,3.86,9.51,10.81V44.61ZM132,52.2c0-2.2,1.43-3.36,4.71-3.36s4.67,1.11,4.67,3.36-1.44,3.37-4.67,3.37S132,54.67,132,52.2m-2.22-26.89a11.49,11.49,0,0,0-3.19-.45c-3.32,0-5.56,2.16-5.56,6.06V44.61h-8.66V17.37l6.86-.32L120,21h.22a7.87,7.87,0,0,1,7-4.31,9.08,9.08,0,0,1,3.1.46l-.5,8.16m-19.94,8H94.8c.37,3.32,2.37,4.58,6.37,4.58a23.27,23.27,0,0,0,7.22-1.12l1,6.64a24.39,24.39,0,0,1-9.25,1.66c-9.78,0-14.27-5.11-14.27-14.41,0-8.75,3.95-14,12.56-14,7.32,0,11.68,4.13,11.68,12.79A35.54,35.54,0,0,1,109.88,33.31Zm-7.64-5.43c-.09-3.14-1.35-4.35-3.73-4.35-2.6,0-3.54,1-3.81,4.35h7.51M81.86,15.3H74.32L70.1,8.75h6.28L78,12.12h.23L79.8,8.75h6.41Zm-3,1.44a20.51,20.51,0,0,1,6.5,1.08l-.44,7a16.45,16.45,0,0,0-4.18-.68c-4.66,0-6,1.8-6,6.91,0,4.94,2.15,7,5.79,7a12.9,12.9,0,0,0,4.48-.8l.59,6.46a14.36,14.36,0,0,1-7,1.43c-8.39,0-12.88-4.75-12.88-14.09,0-9,3.91-14.31,13.06-14.31M64.28,33.34h-15c.38,3.32,2.38,4.58,6.38,4.58a23.27,23.27,0,0,0,7.22-1.12l.94,6.64a24.31,24.31,0,0,1-9.24,1.66c-9.78,0-14.27-5.11-14.27-14.41,0-8.75,3.95-14,12.56-14,7.32,0,11.67,4.13,11.67,12.79A35.53,35.53,0,0,1,64.28,33.34ZM56.6,27.91c-.09-3.14-1.34-4.35-3.72-4.35-2.6,0-3.54,1-3.81,4.35H56.6M31.73,44.61H21.27L10.19,11H20.51l5.34,20.64.85,3.5h.14l.81-3.5L33.12,11h9.74ZM128.87,50V85.05h-8.75V50.4Zm12.23,7.49V85.05h-8.84V57.9Zm14.63,19.44c0-3.46-12-1.12-12-10.9,0-5.08,3.46-8.89,10.9-8.89a21.27,21.27,0,0,1,8,1.53L162,65.4a23.35,23.35,0,0,0-7.41-1.27c-1.71,0-2.51.58-2.51,1.58,0,3.27,11.71,1.12,11.71,10.49,0,5.61-3.19,9.43-11,9.43a19.94,19.94,0,0,1-8.71-1.71l.86-6.82a18.67,18.67,0,0,0,7.81,1.75c2.11,0,3-.76,3-1.88"
            style="fill:#b8a67a" />
        </svg>
      </div>
      <h1 class="piano__offer_title">Ovaj sadržaj je dostupan samo za Premium korisnike Večernjeg lista.</h1>
      <p class="piano__offer_subtitle">Pretplatite se na sadržaj s potpisom. </p>
    </div>

    <div class="piano__body">

      <div class="piano__offer" ng-repeat="term in terms track by $index">

        <p class="piano__offer_subtitle">
          <span ng-if="term.billingPlanTable[0].period === 'godina' && [87.46, 62.25, 49.99].includes(term.billingPlanTable[0].priceValue)">
            Premium + eVL -&nbsp;
          </span>
          <span ng-if="term.billingPlanTable[0].period === 'godina' && [29.00, 19.78, 13.14, 29.99,14.99].includes(term.billingPlanTable[0].priceValue)">
            Godišnji pristup -&nbsp;
          </span>
          <span ng-if="term.billingPlanTable[0].period === '2 godine' && [39.68].includes(term.billingPlanTable[0].priceValue)">
            Dvogodišnji pristup -&nbsp;
          </span>
          <span ng-if="term.billingPlanTable[0].period === 'month'">Mjesečni pristup -&nbsp;</span>

          <span ng-if="term.billingPlanTable[0].period === 'godina' && [87.46, 39.68].includes(term.billingPlanTable[0].priceValue)">
            €&nbsp;{{ term.billingPlanTable[0].priceValue }}
          </span>

          <span ng-if="term.billingPlanTable[0].period === 'godina' && [29.00, 19.78, 13.14, 29.99, 14.99].includes(term.billingPlanTable[0].priceValue)">
            <strike>€ 39.68</strike>&nbsp;&nbsp;€&nbsp;{{ term.billingPlanTable[0].priceValue }}
          </span>

          <span ng-if="term.billingPlanTable[0].period === 'godina' && [62.25, 49.99].includes(term.billingPlanTable[0].priceValue)">
            <strike>€ 87.46</strike>&nbsp;&nbsp;€&nbsp;{{ term.billingPlanTable[0].priceValue }}
          </span>

          <span ng-if="term.billingPlanTable[0].period === 'month'">
            <span
              ng-if="(term.billingPlanTable.length > 1 && term.billingPlanTable[1].priceValue !== 5.18) || (term.billingPlanTable.length <= 1 && term.billingPlanTable[0].priceValue !== 5.18)"><strike>€&nbsp;5.18</strike>&nbsp;&nbsp;</span>
            <span ng-if="term.billingPlanTable.length > 1">€&nbsp;{{ term.billingPlanTable[1].priceValue }}</span>
            <span ng-if="term.billingPlanTable.length <= 1">€&nbsp;{{ term.billingPlanTable[0].priceValue }}</span>
            /mj
          </span>
        </p>

        <p class="piano__offer_text">{{ term.description }}</p>

        <button ng-if="isUserValid()" ng-click="startCheckout(term.termId)" type="button" class="btn btn--primary">
          Kupi premium
        </button>

        <button ng-if="!isUserValid()" external-event="triggerLogin" external-event-params="{{ params }}***{{ term }}" type="button" class="btn btn--primary">
          Kupi premium
        </button>

        <div class="offer__benefits">
          <ul class="offer__benefits_list">
            <li ng-if="term.billingPlanTable[0].period === 'month'" class="offer__benefits_item">
              <strong>Bez ugovora, bez obveze, otkazivanje u bilo kojem trenutku</strong>
            </li>
            
            
           <li
              ng-if="term.billingPlanTable[0].period.includes('godin') && [39.68, 29.00, 19.78, 13.14, 29.99, 14.99].includes(term.billingPlanTable[0].priceValue)"
              class="offer__benefits_item"
            >
              
            </li> 
            
            <li
              ng-if="term.billingPlanTable[0].period.includes('godin') && [39.68, 29.00, 19.78, 13.14, 29.99, 14.99].includes(term.billingPlanTable[0].priceValue)"
              class="offer__benefits_item"
            >
             
              <strong>Bez ugovora, bez obveze, otkazivanje u bilo kojem trenutku</strong>
              
            </li>
            
            
            
            <li
              ng-if="term.billingPlanTable[0].period === 'godina' && [87.46, 62.25, 49.99].includes(term.billingPlanTable[0].priceValue)"
              class="offer__benefits_item"
            >
              <strong>e-novine</strong> - godišnje tiskano izdanje novina u PDF izdanju koje možete čitati na webu ili eVL aplikaciji
            </li>
            <li
              ng-if="term.billingPlanTable[0].period === 'godina' && [87.46, 62.25, 49.99].includes(term.billingPlanTable[0].priceValue)"
              class="offer__benefits_item"
            >
              <strong>Premium</strong> - godišnji pristup na sav zaključani sadržaj na portalu Večernjeg lista 
            </li>
          </ul>
        </div>
      </div>

      <div class="piano__extra_disclaimer">
        
      </div>
      
    </div>
  </div>
</div>
            </div>

           <div view="receipt">
                
           </div>

            <div class='clearfix'></div>
        </div>

    </div>
</div>

<style type="text/css" tp-style="checkout-custom-style">
    /*
* Prefixed by https://autoprefixer.github.io
* PostCSS: v7.0.29,
* Autoprefixer: v9.7.6
* Browsers: last 4 version
*/

@font-face {
    font-family: 'Dobra Book';
    src: url('https://showcase.24sata.hr/vl_piano_fonts/dobra-book.eot');
    src: url('https://showcase.24sata.hr/vl_piano_fonts/dobra-book.eot?#iefix') format('embedded-opentype'),
         /* url('https://showcase.24sata.hr/vl_piano_fonts/dobra-book.woff2') format('woff2'), */
         url('https://showcase.24sata.hr/vl_piano_fonts/dobra-book.woff') format('woff'),
         url('https://showcase.24sata.hr/vl_piano_fonts/dobra-book.ttf') format('truetype'),
         url('https://showcase.24sata.hr/vl_piano_fonts/dobra-book.svg#svgDobraBook') format('svg');
}

@font-face {
    font-family: 'Dobra Bold';
    src: url('https://showcase.24sata.hr/vl_piano_fonts/dobra-bold.eot');
    src: url('https://showcase.24sata.hr/vl_piano_fonts/dobra-bold.eot#iefix') format('embedded-opentype'),
         url('https://showcase.24sata.hr/vl_piano_fonts/dobra-bold.woff2') format('woff2'),
         url('https://showcase.24sata.hr/vl_piano_fonts/dobra-bold.woff') format('woff'),
         url('https://showcase.24sata.hr/vl_piano_fonts/dobra-bold.ttf') format('truetype'),
         url('https://showcase.24sata.hr/vl_piano_fonts/dobra-bold.svg#svgDobraBold') format('svg');
}

@font-face {
    font-family: 'Stag Semibold';
    src: url('https://showcase.24sata.hr/vl_piano_fonts/stag-semibold.eot');
    src: url('https://showcase.24sata.hr/vl_piano_fonts/stag-semibold.eot?#iefix') format('embedded-opentype'),
         /* /*url('https://showcase.24sata.hr/vl_piano_fonts/stag-semibold.woff2') format('woff2'),*/
         url('https://showcase.24sata.hr/vl_piano_fonts/stag-semibold.woff') format('woff'),
         url('https://showcase.24sata.hr/vl_piano_fonts/stag-semibold.ttf') format('truetype'),
         url('https://showcase.24sata.hr/vl_piano_fonts/stag-semibold.svg#svgStagSemibold') format('svg');
}

#checkout-container {
    border-radius: 0;
}

body {
    font-family: "Dobra Book", sans-serif;
    font-weight: normal;
    color: #202020;
    background: #fff;
}

.account-popup-header {
    height: 62px;
    padding: 0 14px;
    border-bottom: 1px solid #ebe6db;
    text-align: left;
    background: #fff;
}

.checkout__modal_title {
    display: block;
    padding: 1px 0 0;
    font-family: "Dobra Bold", sans-serif;
    font-weight: normal;
    font-size: 18px;
    line-height: 61px;
    text-transform: uppercase;
    color: #202020;
}

.account-head {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    padding: 20px 0 13px;
    border-bottom: 1px solid #ebe6db;
    margin: 0 14px 21px;
}

.piano__logo {
    margin: 0 0 25px;
}

.piano__logo svg {
    display: block;
    width: 100%;
    max-width: 276px;
    height: auto;
}

.account-head-contentcol h1,
.account-head-content h1 {
    display: block;
    margin: 0 0 9px;
    font-family: "Stag Semibold", serif;
    font-weight: normal;
    font-size: 16px;
    line-height: 21px;
    color: #202020;
}

.term-details {
    padding: 0;
    margin: 0;
}

.has-free-trial,
.subscription-has-free-trial {
    font-family: "Dobra Book", sans-serif;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    color: #202020;
}

.has-free-trial b,
.subscription-has-free-trial b,
.has-free-trial strong,
.subscription-has-free-trial strong {
    font-family: "Dobra Bold", sans-serif;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    color: #202020;
}

.payment-options-wrapper {
    margin: 0 14px 20px;
}

.payment-options {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin: 0 -7px;
}

.payment-options li,
.payment-options li:first-child,
.payment-options li:last-child {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    height: 56px;
    border-radius: 3px;
    border: solid 1px #ebe6db;
    margin: 0 7px;
}

.payment-options .button.pay.payment-method-selected:after {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 3px;
    border: solid 1px #1682dc;
    background: none;
}

@media only screen and (max-width: 460px) {

    .payment-options .button.pay.credit {
        background-size: 80%;
    }
}

.payment-method-paypalbt {
    margin: 19px 0 14px;
}

#braintree-paypal-loggedout {
    margin-bottom: 15px;
}

.payment-method-paypalbt-row.add-new-account td {
    padding: 0;
}

.back-to-payment-methods {
    height: auto;
    padding: 0 0 0 14px;
    margin: 0 14px 19px;
    font-family: "Stag Semibold", serif;
    font-weight: normal;
    font-size: 18px;
    line-height: 20px;
    letter-spacing: 0.33px;
    color: #202020;
    background-color: transparent;
    background-position: 0 center;
}

.select-payment-options {
    margin: 0 14px 13px;
    font-family: "Stag Semibold", serif;
    font-weight: normal;
    font-size: 18px;
    line-height: 20px;
    letter-spacing: 0.33px;
    color: #202020;
}

.select-payment-options h4 {
    font-family: "Stag Semibold", serif;
    font-weight: normal;
    font-size: 18px;
    line-height: 20px;
    letter-spacing: 0.33px;
}

.piano__payment_hint {
    display: block;
    padding: 0 14px 32px;
    font-family: "Dobra Book", serif;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    color: #202020;
}

.piano__payment_hint a {
    color: #d94339;
}

.piano__payment_hint a:hover {
    color: #b7342c;
}

.amazon-loading, .amazon-login, .amazon-tech-error-message, .amazon-wallet, .apple-pay-bt-form, .billing-country-form, .cc_new_card, .cc_stored_cards, .coinbase-login, .consents, .dwolla-login, .dwolla-wallet, .easypay-boleto-payment-form, .easypay-mbway-payment-form, .easypay-multibanco-payment-form, .mock-payment-form, .obi-paypal-payment-form, .openpay-cash-payment-form, .pass-through-payment-form, .passwordless-login-single-step-form, .paypal-express-checkout-payment-form, .paypal-login, .paypalbt-payment-form, .postfinance-checkout-payment-form, .promo-code-component, .worldpay-accounts, .zero-payment-form {
    padding: 0 14px;
}

.payment-system-condition {
    margin: 0;
}

.cc_new_card .table-form-inline {
    margin: 0;
    color: #98908e;
    background: #fff;
}

.cc_new_card .table-form-inline tr {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
        flex-wrap: wrap;
}

.table-form-inline td:first-child .field-wrapper {
    border-radius: 0 !important;
}

.table-form-inline .icon {
    display: none;
}

.cc-field__input-wrap-container {
    height: 100%;
}

.onet-payway-wrapper .cc-fields-layout__cvv, .onet-payway-wrapper .cc-fields-layout__expire, .table-form-inline .field-card-cvv, .table-form-inline .field-card-expiry-month, .table-form-inline .field-card-postal-code {
    width: auto;
}

.table-form-inline td {
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
    width: auto !important;
    padding: 0;
}

.table-form-inline td.field-card-postal-code {
    width: 100% !important;
}

.table-form-inline .field-card-number {
    width: 100% !important;
}

.table-form-inline .field-card-expiry-month,
.table-form-inline .field-card-cvv {
    width: 50% !important;
}

.table-form-inline .field-card-expiry-month .field-wrapper {
    padding: 0 10px 0 0;
}

.table-form-inline .field-card-cvv .field-wrapper {
    padding: 0 0 0 10px;
}

.table-form-inline .field-wrapper,
.table-form-inline td:last-child .field-wrapper {
    border: none;
    border-radius: 0;
    margin: 0 0 25px;
}

.table-form-inline .field-wrapper:focus-within {
    border: none;
}

.field-wrapper .label {
    display: block;
    margin: 0 0 5px 10px;
    font-family: "Dobra Book", sans-serif;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    text-transform: uppercase;
    color: #98908e;
}

.table-form-inline .input {
    height: 50px;
    padding: 10px 14px;
    border: 1px solid #ebe6db;
    margin: 0;
    background: #f7f6f1;
}

/* STORED CARDS */
.cc_stored_cards .payment-method-card {
    margin-top: -20px;
    margin-bottom: 20px;
    border: none;
}

.cc_stored_cards .payment-method-card-row .payment-method-card-cell:last-child {
    color: #202020;
}

.cc_stored_cards .payment-method-card-cell {
    height: 40px;
    padding: 8px 0;
    border-top: none;
    border-bottom: 1px solid #ebe6db;
    font: normal 400 100% 'Dobra Book', sans-serif;
    font-size: 16px;
    line-height: 22px;
    color: #202020;
}

.payment-method-card-row .payment-method-card-cell:nth-of-type(3) {
    padding-left: 8px !important;
}

.payment-method-card-row.selected + .payment-method-card-row .payment-method-card-cell {
    border-bottom: 1px solid #ebe6db;
}

.cc_stored_cards .payment-method-card-row.selected .payment-method-card-cell {
    padding: 8px 0;
    border: none;
    border-bottom: 1px solid #ebe6db;
}

.payment-method-card-row:last-child .payment-method-card-cell {
    border-bottom: 1px solid #ebe6db;
}

/* Custom radio input */
.cc_stored_cards .payment-method-card-cell input[type="radio"] {
    display: none;
}

.cc_stored_cards .payment-method-card-cell input[type="radio"] + label {
    position: relative;
    left: -3px;
    width: 24px;
    height: 24px;
    margin: 0 8px 0 0;
    background-color: transparent;
    background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"%3E%3Cpath fill="%237b7674" d="M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /%3E%3C/svg%3E');
    background-repeat: no-repeat;
    background-position: 0 0;
    -webkit-transition: all 200ms;
    -o-transition: all 200ms;
    transition: all 200ms;
    cursor: pointer;
}

.cc_stored_cards .payment-method-card-cell input[type="radio"]:checked + label {
    background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"%3E%3Cpath fill="%231682dc" d="M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,7A5,5 0 0,0 7,12A5,5 0 0,0 12,17A5,5 0 0,0 17,12A5,5 0 0,0 12,7Z" /%3E%3C/svg%3E');
}
/* END STORED CARDS */

.footer-modal {
    padding: 0 14px 24px;
    background: #fff;
}

.footer-modal .consents {
    padding: 20px 0 0;
    margin: 0 0 20px;
}

.footer-modal .consents .consent {
    clear: both;
    margin: 0;
}

a.button.complete-purchase {
    display: block;
    width: 100%;
    padding: 15px;
    border: none;
    border-radius: 0;
    margin: 0;
    font-family: "Dobra Bold", sans-serif;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.16px;
    text-transform: uppercase;
    color: #fff;
    background: #4a0a07;
    cursor: pointer;
    -webkit-transition: background 200ms ease-in-out;
    -o-transition: background 200ms ease-in-out;
    transition: background 200ms ease-in-out;
}

a.button.complete-purchase:hover {
    background: #200301;
}

a.button.complete-purchase,
a.button.goto-confirmation {
    line-height: 20px !important;
}

.cc_new_card .table-form-inline input[type=password],
.cc_new_card .table-form-inline input[type=text] {
    background: transparent;
}

input[type=password].flat,
input[type=text].flat {
    padding: 3px 0 0;
    height: auto;
}

input[type=password],
input[type=text] {
    padding: 3px 0 0;
    border-radius: 0;
    font-family: "Dobra Book", sans-serif;
    font-weight: normal;
    font-size: 17px;
    line-height: 25px;
    color: #7b7674;
}

.table-form-inline input.input-date[type=text] {
    width: 26px;
    padding: 3px 0 0;
}

.new-card-form .date-slash {
    top: 3px 0 0;
    font-family: "Dobra Book", sans-serif;
    font-weight: normal;
    font-size: 17px;
    line-height: 25px;
    color: #7b7674;
}

.payment-system-condition>* {
    margin: 0 0 10px;
}

.custom-checkbox label {
    padding: 0 0 0 32px;
    font-family: "Dobra Book", sans-serif;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    color: #202020;
}

.custom-checkbox label a {
    color: #d94339;
    -webkit-transition: color 200ms ease-in-out;
    -o-transition: color 200ms ease-in-out;
    transition: color 200ms ease-in-out;
}

.custom-checkbox label a:hover {
    color: #b7342c;
}

.custom-checkbox label::before {
    top: 0;
    left: 0;
    width: 18px;
    height: 18px;
    border: 2px solid #98908e;
    border-radius: 2px;
}

.custom-checkbox label::after {
    content: " ";
    top: 0;
    left: 0;
    overflow: hidden;
    width: 18px;
    height: 18px;
    border-radius: 2px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white' width='18px' height='18px'%3E%3Cpath d='M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z'/%3E%3C/svg%3E%0A");
    background-repeat: no-repeat;
    background-color: #1682dc;
}

.auto-renew-purchase {
    float: none;
    padding: 0 0 20px;
    border-bottom: 1px solid #ebe6db;
    margin: 10px 0 0;
}

.auto-renew-purchase .auto-renew-purchase-label {
    margin-left: 32px;
    font-family: "Dobra Book", sans-serif;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
}

.auto-renew-purchase .auto-renew-purchase-checkbox {
    top: 0;
    left: 0;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 18px;
    height: 18px;
    border: 2px solid #98908e;
    border-radius: 2px;
    margin: 0;
}

.auto-renew-purchase .auto-renew-purchase-checkbox:checked {
    border: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white' width='18px' height='18px'%3E%3Cpath d='M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z'/%3E%3C/svg%3E%0A");
    background-repeat: no-repeat;
    background-color: #1682dc;
}

.custom-checkbox.apply-this-method {
    margin: 8px 0 0;
}

.paypalbt-payment-form,
.add-new-account-msg {
    font-family: "Dobra Book", sans-serif;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    color: #202020;
}

.paypalbt-payment-form > div span {
    display: block;
    margin: 2px 0 0;
    font-family: "Stag Semibold", serif;
    font-weight: normal;
    font-size: 18px;
    line-height: 20px;
    letter-spacing: 0.33px;
    color: #202020;
}

.add-new-account-msg strong,
.add-new-account-msg b {
    font-family: "Dobra Bold", sans-serif;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    color: #202020;
}

.view-alreadyHasAccess .piano__logo,
.view-receipt .piano__logo {
    margin: 30px auto;
    text-align: center;
}

.view-alreadyHasAccess .piano__logo svg,
.view-receipt .piano__logo svg {
    display: inline-block;
    vertical-align: top;
}

.access-footer {
    border: none;
    padding: 0 14px 20px;
}

.access-footer-content {
    text-align: center;
}

.access-button,
.access-footer-content .access-button {
    display: block;
}

a.button.big {
    display: block;
    width: 100%;
    padding: 15px;
    border: none;
    border-radius: 0;
    margin: 0;
    font-family: "Dobra Bold", sans-serif;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.16px;
    text-transform: uppercase;
    color: #fff;
    background: #4a0a07;
    cursor: pointer;
    -webkit-transition: background 200ms ease-in-out;
    -o-transition: background 200ms ease-in-out;
    transition: background 200ms ease-in-out;
}

a.button.big:focus {
    outline: none;
}

a.button.big:last-of-type {
    margin: 0;
}

a.button.big:hover {
    background: #200301;
}

.you-already-have-access {
    display: block;
    padding: 0;
    margin: 0 0 7px;
    text-align: center;
    font-family: "Stag Semibold", serif;
    font-weight: normal;
    font-size: 18px;
    line-height: 26px;
    color: #202020;
    background: none;
}

.already-has-access-component .content,
.receipt .content {
    width: 100%;
    padding: 0;
    margin: 0 0 22px;
    font-family: "Dobra Book", sans-serif;
    font-weight: normal;
    font-size: 17px;
    line-height: 25px;
    color: #202020;
}

.receipt .content {
    padding: 0 14px;
}

.receipt .access-footer-content {
    padding: 0;
}

.receipt .content .bold {
    font-family: "Dobra Bold", sans-serif;
    font-weight: normal;
    font-size: 17px;
    line-height: 25px;
    color: #202020;
}

.receipt .content a {
    font-weight: normal;
    color: #d94339;
    -webkit-transition: color 200ms ease-in-out;
    -o-transition: color 200ms ease-in-out;
    transition: color 200ms ease-in-out;
}

.receipt .content a:hover {
    color: #b43d34;
}

.payment-method-card-cell {
    border: none;
}

.payment-method-card-row.selected .payment-method-card-cell,
.payment-method-card-row.selected .payment-method-card-cell:first-child,
.payment-method-card-row.selected .payment-method-card-cell:last-child {
    border-bottom: 1px solid #ebe6db;
}

.set-as-default-button {
    height: 40px;
    padding: 2px 14px 0;
    border: none;
    border-radius: 0;
    font: normal 400 100% "Dobra Bold", sans-serif;
    font-size: 14px;
    line-height: 38px;
    color: #1682dc;
    -webkit-transition: all 200ms;
    -o-transition: all 200ms;
    transition: all 200ms;
}

.set-as-default-button:hover,
.set-as-default-button:focus {
    background: #f7f6f1;
}

.payment-method-card-cell span {
    position: relative;
    top: 1px;
    font-family: "Dobra Book", sans-serif;
    font-weight: normal;
    color: #202020;
}

.payment-method-card-default-payment {
    padding: 0 14px 0 0;
}

.payment-method-card-default-payment span {
    padding: 2px 0 0;
    font: normal 400 100% "Dobra Bold", sans-serif;
    font-size: 14px;
    line-height: 38px;
    color: #202020;
}

.payment-method-card-cell .set-as-default-button span {
    top: -1px;
    color: #1682dc;
    font-family: "Dobra Bold", sans-serif;
    font-weight: normal;
}

.payment-method-card-cell input[type="radio"] {
    position: relative;
    top: -1px;
}

.payment-method-card-row .payment-method-card-cell:nth-of-type(3) div {
    position: relative;
    top: 1px;
}

div[error-list] {
    display: none;
}

.footer-modal div[error-list] {
    display: block;
}

#checkout-container #payment-form-component .message-block {
    position: relative;
    top: 0;
    padding: 14px 0 22px 33px;
    border-top: 1px solid #ed6e65;
    border-radius: 0;
    margin: 33px 0 0;
    background-color: #fff;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%23ED6E65' d='M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z' /%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: 0 13px;
}

#checkout-container .message-block ol {
    padding: 0;
    margin: 0;
    list-style: none;
}

#checkout-container .message-block .errors li {
    padding: 0;
    font-family: "Dobra Book", sans-serif;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: #ed6e65;
}

#checkout-container .message-block .icon-attention,
#checkout-container .message-block .btn-close {
    display: none;
}


/* DESKTOP STYLES */
@media only screen and (min-width: 539px) {

    .checkout .view-show {
        padding: 0 0 10px;
    }

    .account-popup-header {
        height: 72px;
        padding: 0;
        text-align: center;
    }

    .checkout__modal_title {
        font-size: 21px;
        line-height: 71px;
    }

    .account-head {
        padding: 30px 0 16px;
        margin: 0 40px 25px;
    }

    .piano__logo {
        margin: 0 0 25px;
    }

    .account-head-contentcol h1,
    .account-head-content h1 {
        margin: 0 0 13px;
        font-size: 18px;
        line-height: 22px;
    }

    .select-payment-options {
        margin: 0 40px 13px;
    }

    .piano__payment_hint {
        padding: 0 40px 32px;
    }

    .payment-options-wrapper {
        margin: 0 40px 20px;
    }

    .amazon-loading, .amazon-login, .amazon-tech-error-message, .amazon-wallet, .apple-pay-bt-form, .billing-country-form, .cc_new_card, .cc_stored_cards, .coinbase-login, .consents, .dwolla-login, .dwolla-wallet, .easypay-boleto-payment-form, .easypay-mbway-payment-form, .easypay-multibanco-payment-form, .mock-payment-form, .obi-paypal-payment-form, .openpay-cash-payment-form, .pass-through-payment-form, .passwordless-login-single-step-form, .paypal-express-checkout-payment-form, .paypal-login, .paypalbt-payment-form, .postfinance-checkout-payment-form, .promo-code-component, .worldpay-accounts, .zero-payment-form {
        padding: 0 40px;
    }

    /* .promo-code-component {
        margin: 1px 40px 27px;
    } */

    .payment-method-paypalbt {
        margin: 19px 0 13px;
    }

    .receipt .content {
        padding: 0 40px;
    }

    .footer-modal,
    .access-footer {
        padding: 0 40px 20px;
    }
}

/* PROMO CODE */
.promo-code-component,
.promo-code-component.verified {
    position: relative;
    width: auto;
    padding: 0;
    border-bottom: 1px solid #ebe6db;
    margin: 0 14px 25px;
}

.promo-code-component.verified {
    padding: 0 0 16px;
    margin: -9px 14px 25px;
}

@media only screen and (min-width: 539px) {

    .promo-code-component,
    .promo-code-component.verified {
        margin: 0 40px 25px;
    }

    .promo-code-component.verified {
        padding: 0 0 16px;
        margin: -9px 40px 25px;
    }
}

.promo-code-component > h4 {
    display: block;
    width: 100%;
    padding: 0;
    margin: 0 0 16px;
    font: normal 400 100% 'Stag Semibold', sans-serif;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 0.33px;
    color: #202020;
}

.promo-code-input-outside-wrapper {
    position: relative;
}

.promo-code-component .table-form-inline {
    float: none;
    margin: 0;
}

.promo-code-component .table-form-inline .field-wrapper {
    position: relative;
    padding: 0 0 20px;
    margin: 0 !important;
}

.promo-code-component .table-form-inline .input {
    position: relative;
    height: auto;
    padding: 0;
    border: none;
    border-radius: 0;
    margin: 0;
    background: transparent;
}

.promo-code-component .promo-code-input-wrapper input {
    position: relative;
    height: auto;
    padding: 15px 100px 15px 12px;
    border-radius: 0;
    border: 1px solid #ebe6db;
    margin: 0;
    font: normal 400 100% 'Dobra Book', sans-serif;
    font-size: 16px;
    line-height: 20px;
    color: #7b7674;
    background: #f7f6f1;
    cursor: pointer;
    -webkit-transition: all 200ms;
    -o-transition: all 200ms;
    transition: all 200ms;
}

.promo-code-component .promo-code-input-wrapper input.error {
    border-color: #ed6e65;
}

.promo-code-component .promo-code-input-wrapper input:focus {
    outline: none;
    border-color: #ebe6db;
}

.table-form-inline td:last-child .field-wrapper:focus-within {
    border: none;
}

.promo-code-component .promo-code-input-wrapper label {
    display: none;
}

.promo-code-component a.button.promo-code-apply {
    position: absolute !important;
    top: 6px;
    right: 5px;
    z-index: 2;
    display: inline-block;
    min-width: unset;
    width: auto;
    padding: 3px 14px 0;
    border: none;
    border-radius: 0;
    margin: 0;
    font: normal 400 100% "Dobra Book", sans-serif;
    font-size: 14px;
    line-height: 37px;
    color: #7b7674;
    background: #fff;
    -webkit-box-shadow: inset 0 0 0 1px #ebe6db;
            box-shadow: inset 0 0 0 1px #ebe6db;
    -webkit-transition: background 200ms ease-in-out;
    -o-transition: background 200ms ease-in-out;
    transition: background 200ms ease-in-out;
}

.promo-code-component a.button.promo-code-apply:hover,
.promo-code-component a.button.promo-code-apply:focus {
    background: #f7f6f1;
}

.promo-code-component .promo-code-input-wrapper .field-error {
    position: static;
    top: 100%;
    right: 0;
    bottom: auto;
    left: 0;
    padding: 0 12px;
    border: none;
    border-radius: 0;
    margin: 0;
    font: normal 400 100% 'Dobra Book', sans-serif;
    font-size: 12px;
    line-height: 24px !important;
    color: #fff;
    background: #ed6e65;
}

.promo-code-component .promo-code-input-wrapper .field-error::before,
.promo-code-component .promo-code-input-wrapper .field-error::after {
    display: none;
}

.promo-code-component.verified {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
}

.promo-code-component .promo-code-verified {
    display: none;
}

.promo-code-component .promo-code-applied {
    display: block;
    font: normal 400 100% 'Stag Semibold', sans-serif;
    font-size: 16px;
    line-height: 17px !important;
    letter-spacing: 0.29px;
    color: #000;
    background: transparent;
}

.promo-code-component .promo-code-revert {
    display: inline-block;
    width: auto;
    height: auto;
    padding: 3px 14px 0;
    border: none;
    border-radius: 0;
    margin: 0;
    font: normal 400 100% "Dobra Book", sans-serif;
    font-size: 14px;
    line-height: 37px;
    color: #7b7674;
    background: #fff;
    -webkit-box-shadow: inset 0 0 0 1px #ebe6db;
            box-shadow: inset 0 0 0 1px #ebe6db;
    -webkit-transition: background 200ms ease-in-out;
    -o-transition: background 200ms ease-in-out;
    transition: background 200ms ease-in-out;
}

.promo-code-component .promo-code-revert:hover,
.promo-code-component .promo-code-revert:focus {
    background: #f7f6f1;
}
/* END PROMO CODE */

/* ERROR MODAL */
.error-screen {
	background: #fff;
}

.error-screen .content {
    padding: 0 0 60px;
    margin: 0;
    font-family: "Dobra Book", sans-serif;
    font-weight: normal;
    font-size: 17px;
    line-height: 25px;
    color: #202020;
}

.error-screen .content h1 {
    margin: 0 0 22px;
    font-family: "Dobra Bold", sans-serif;
    font-weight: normal;
    font-size: 22px;
    line-height: 25px;
    color: #202020;
}

.error-screen .error-notification-icon {
    margin: 30px auto;
}
/* ERROR MODAL */

</style>

<style  type="text/css" tp-style="offer-custom-style">
    /*
* Prefixed by https://autoprefixer.github.io
* PostCSS: v7.0.29,
* Autoprefixer: v9.7.6
* Browsers: last 4 version
*/

@import url('https://fonts.googleapis.com/css2?family=Roboto+Serif:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,400;1,700&display=swap');
@font-face {
    font-family: 'Dobra Book';
    src: url('https://showcase.24sata.hr/vl_piano_fonts/dobra-book.eot');
    src: url('https://showcase.24sata.hr/vl_piano_fonts/dobra-book.eot?#iefix') format('embedded-opentype'),
         /* url('https://showcase.24sata.hr/vl_piano_fonts/dobra-book.woff2') format('woff2'), */
         url('https://showcase.24sata.hr/vl_piano_fonts/dobra-book.woff') format('woff'),
         url('https://showcase.24sata.hr/vl_piano_fonts/dobra-book.ttf') format('truetype'),
         url('https://showcase.24sata.hr/vl_piano_fonts/dobra-book.svg#svgDobraBook') format('svg');
}

@font-face {
    font-family: 'Dobra Bold';
    src: url('https://showcase.24sata.hr/vl_piano_fonts/dobra-bold.eot');
    src: url('https://showcase.24sata.hr/vl_piano_fonts/dobra-bold.eot#iefix') format('embedded-opentype'),
         url('https://showcase.24sata.hr/vl_piano_fonts/dobra-bold.woff2') format('woff2'),
         url('https://showcase.24sata.hr/vl_piano_fonts/dobra-bold.woff') format('woff'),
         url('https://showcase.24sata.hr/vl_piano_fonts/dobra-bold.ttf') format('truetype'),
         url('https://showcase.24sata.hr/vl_piano_fonts/dobra-bold.svg#svgDobraBold') format('svg');
}

@font-face {
    font-family: 'Stag Semibold';
    src: url('https://showcase.24sata.hr/vl_piano_fonts/stag-semibold.eot');
    src: url('https://showcase.24sata.hr/vl_piano_fonts/stag-semibold.eot?#iefix') format('embedded-opentype'),
         /* /*url('https://showcase.24sata.hr/vl_piano_fonts/stag-semibold.woff2') format('woff2'),*/
         url('https://showcase.24sata.hr/vl_piano_fonts/stag-semibold.woff') format('woff'),
         url('https://showcase.24sata.hr/vl_piano_fonts/stag-semibold.ttf') format('truetype'),
         url('https://showcase.24sata.hr/vl_piano_fonts/stag-semibold.svg#svgStagSemibold') format('svg');
}



/* Reset styles */
body,
button,
input,
select,
textarea {
    font-family: "Roboto", sans-serif;
}

button,
input,
select,
textarea {
    margin: 0;
}

blockquote,
body,
dd,
dl,
dt,
fieldset,
figure,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
html,
iframe,
legend,
li,
ol,
p,
pre,
textarea,
ul,
header,
main,
footer {
    margin: 0;
    padding: 0;
}

strong {
    font-family: 'Dobra Bold';
    font-weight: normal;
}

*,
::after,
::before {
    -webkit-box-sizing: inherit;
    box-sizing: inherit;
}

* {
    -webkit-tap-highlight-color: transparent;
}

a {
    color: inherit;
    cursor: pointer;
    text-decoration: none;
}

body {
    -webkit-font-feature-settings: "liga", "kern";
    font-feature-settings: "liga", "kern";
    -webkit-text-size-adjust: none;
    -webkit-font-smoothing: antialiased;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;

    font-size: 16px;
    font-weight: 400;
    line-height: 1.3125;
    text-align: initial;
    letter-spacing: normal;
    text-transform: none;

    color: #505050;
    background: #f5f5f5;
}

img {
    height: auto;
    max-width: 100%;
}
/* END of reset styles */

.piano__wrap {
    padding: 60px;
    text-align: center;
    background: #f5f9ff;
}

@media screen and (min-width: 415px) {

    .piano__wrap {
        padding: 60px;
    }
}

.piano__header {
    margin: 0 0 18px;
}

.piano__logo {
    margin: 0 0 30px;
}

.piano__logo svg {
    display: block;
    max-width: 230px;
    margin: 0 auto;
}

.piano__offer_title {
    display: block;
    text-align: center;
    margin: 0 0 18px;
    font-family: "Roboto Serif", serif;
    font-size: 26px;
    font-weight: 500;
    color: #202020;
    line-height: calc(22/19);
}

.piano__offer_subtitle {
    display: block;
    text-align: center;
    font-family: "Roboto", sans-serif;
    font-size: 26px;
    font-weight: 500;
    line-height: calc(22/19);
    color: #202020;
}

.piano__offer {
    padding: 0 0 30px;
    border-bottom: 1px solid #959baf;
    margin: 0 0 30px;
}

.piano__offer:first-of-type {
  	padding: 30px 0;
}

.piano__offer:last-of-type {
    padding: 0;
    border: none;
    margin: 0;
}

.piano__offer .piano__offer_subtitle {
    margin: 0 0 13px;
}

.piano__offer_text {
    display: block;
    text-align: center;
    margin: 0 0 22px;
    font-family: "Roboto", sans-serif;
    font-size: 17px;
    line-height: 24px;
    color: #202020;
}

.btn {
    display: inline-block;
    width: 100%;
    padding: 15px;
    border: none;
    margin: 0;
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.16px;
    text-transform: uppercase;
    cursor: pointer;
    -webkit-transition: all 200ms ease-in-out;
    -o-transition: all 200ms ease-in-out;
    transition: all 200ms ease-in-out;
  
    border-radius: 5px;
    font-weight: 700;
    max-width: 240px;
}

.btn:focus {
    outline: none;
}

.btn--primary {
    color: #4a0a07;
    background: #b8a67a;
}

.btn--primary:hover {
    background: #d01921;
    color: #fff;
}

.offer__benefits {
    overflow: hidden;
    padding: 0;
    margin: 20px 0 0;
}

.offer__benefits_list {
	text-align: left;
    max-width: 436px;
    margin: 0 auto;
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.offer__benefits_item {
    display: block;
    padding: 1px 0 1px 32px;
    margin: 0;
    font: normal 400 100% "Roboto", sans-serif;
    font-size: 16px;
    line-height: 22px;
    color: #202020;
    background: url("data:image/svg+xml,%3Csvg fill='none' height='20' viewBox='0 0 20 20' width='20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m7.70711 9.29289c-.39053-.39052-1.02369-.39052-1.41422 0-.39052.39053-.39052 1.02371 0 1.41421zm1.29289 2.70711-.70711.7071c.39053.3905 1.02369.3905 1.41422 0zm4.7071-3.29289c.3905-.39053.3905-1.02369 0-1.41422-.3905-.39052-1.0237-.39052-1.4142 0zm4.2929 1.29289c0 4.4183-3.5817 8-8 8v2c5.5228 0 10-4.4772 10-10zm-8 8c-4.41828 0-8-3.5817-8-8h-2c0 5.5228 4.47715 10 10 10zm-8-8c0-4.41828 3.58172-8 8-8v-2c-5.52285 0-10 4.47715-10 10zm8-8c4.4183 0 8 3.58172 8 8h2c0-5.52285-4.4772-10-10-10zm-3.70711 8.7071 2 2 1.41422-1.4142-2-2.00001zm3.41422 2 3.99999-3.99999-1.4142-1.41422-4.00001 4.00001z' fill='%23b8a67a'/%3E%3C/svg%3E") no-repeat 0 0;
}

/* Dark mode */
.dark .piano__wrap {
    padding: 50px 20px;
    background: #2d2c2c;
}

@media screen and (min-width: 415px) {

    .dark .piano__wrap {
        background: #161616;
        padding: 50px 95px;
    }
}

.dark .piano__offer_title,
.dark .piano__offer_subtitle,
.dark .piano__offer_text,
.dark .offer__benefits_item {
    color: #fff;
}

.dark .piano__offer {
    border-bottom: 1px solid #2F2F2F;
}

.dark .piano__offer:first-of-type {
    border-top: 1px solid #2F2F2F;
}

.dark .piano__offer:last-of-type {
    border: none;
}

</style>

<style  type="text/css" tp-style="state1-custom-style">
    
</style>

<style  type="text/css" tp-style="receipt-custom-style">
    
</style>

<style  type="text/css" tp-style="alreadyHasAccess-custom-style">
    
</style>






</body>



</html>
