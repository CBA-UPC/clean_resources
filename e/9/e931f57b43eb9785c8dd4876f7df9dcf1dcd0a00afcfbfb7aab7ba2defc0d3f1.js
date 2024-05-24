/*! For license information please see formio.full.min.js.LICENSE.txt */
var formioEmailForm=true;
var EmailForm = EmailForm || {
    formioConfig:{
        baseUrl: 'https://webforms.alludo.co',
        devPath: '/authoring-zgbzrtfswqjmgsj/'
    },
    formMap: {},
    init: function (id, formid, locale, confirmation_page, marketing_program, submit_button_label, use_field_reference_for_confirmation_action, brite_verify, block_free_mail) {
        let localeFromPage = document.getElementsByTagName('html').length > 0 ? document.getElementsByTagName('html')[0].lang : '';
        let localeFromUrl = window.location.pathname.split("/").length > 1 ? window.location.pathname.split("/")[1].toString() : '';
        locale = locale || localeFromPage || localeFromUrl || "en";
		locale = fixFormIOLanguage(locale);

        //TODO: map locale to language
        if (this.formMap.hasOwnProperty(id)) {
            this.formMap[id].formid = formid;
            this.formMap[id].language = locale;
            this.formMap[id].confirmation_page = confirmation_page;
            this.formMap[id].marketing_program = marketing_program;
            this.formMap[id].submit_button_label = submit_button_label;
            this.formMap[id].use_field_reference_for_confirmation_action = use_field_reference_for_confirmation_action;
            this.formMap[id].brite_verify = brite_verify;
            this.formMap[id].block_free_mail = block_free_mail;
        } else {
            this.formMap[id] = {
                form: null,
                formid: formid,
                language: locale,
                confirmation_page: confirmation_page,
                marketing_program: marketing_program,
                submit_button_label: submit_button_label,
                use_field_reference_for_confirmation_action: use_field_reference_for_confirmation_action,
                brite_verify: brite_verify,
                block_free_mail: block_free_mail
            }
        }
    },
    createForm: function (id) {

        var baseUrl = EmailForm.formioConfig.baseUrl;
        var projectUrl = EmailForm.formioConfig.baseUrl + EmailForm.formioConfig.devPath;
        var formUrl = projectUrl + EmailForm.formMap[id].formid;
        // default translations using EN
        var defaultTranslationDict = {
            'Please enter a valid email address': 'Please enter a valid email address'
        };
        
        var hooks = {
            beforeSubmit: (submission, next) => {
                $.ajax({
                    url: getEmailValidationURL(),
                    method: 'POST',
                    data: {
                        "email": submission.data.emailAddress,
                        "brite_verify": EmailForm.formMap[id].brite_verify,
                        "block_free_mail": EmailForm.formMap[id].block_free_mail
                    },
                    complete: (res) => {
                        var submitErrors = null;
                        if (res.status == '200' && res.responseJSON && res.responseJSON['SHA3-256']) {
                            next();
                        }else{
                            submitErrors = [];
                            submitErrors.push({
                                message: defaultTranslationDict['Please enter a valid email address']
                            });
                            next(submitErrors);
                        }
                    }
                });
            }
        }
        
        Formio.setBaseUrl(baseUrl);
        Formio.setProjectUrl(projectUrl);

        Formio.createForm(document.getElementById('formio-' + id), formUrl,         
            })
            .then(function (form) {
                // stop propagating change events to the root form, to escape validation when email field changed
                form.getComponent('emailAddress').options.onChange = function () {};

                EmailForm.formMap[id].form = form;

                // default translations using EN
                var translationDict = {
                    "Email": "Email",
                    "Email is required": "Email is required",
                    "Email is too long": "Email is too long",
                    "Email is invalid": "Email is invalid",
                    "Email verification failed by BriteVerify": "Email verification failed by BriteVerify",
                    "Submit": "Submit"
                };
                // Maybe we can give default translations on JS side  translationDict);
                // form.language = "default";

                Formio.fetch(projectUrl+'language/submission?data.language=' + EmailForm.formMap[id].language).then(function (resp) {
                    return resp.json();
                }).then(function (result) {
                    // If loading success, set form language
                    // If no specified language translation on form.io, loading will fail, whatif?
                    if (result.length > 0) {
                        translationDict = Object.assign(translationDict, result[0].data.translations);
                        defaultTranslationDict  = Object.assign(translationDict, result[0].data.translations);
                        form.addLanguage(EmailForm.formMap[id].language, translationDict);
                        form.language = EmailForm.formMap[id].language;
                        // make sure form is redrawn after language changed
                        form.redraw();
                    }
                    // Add listener to input[type="email"] in the form
                    addEmailEventListener(form, id, defaultTranslationDict, EmailForm.formMap[id].brite_verify, EmailForm.formMap[id].block_free_mail);
                });

                var submit_button_label = EmailForm.formMap[id].submit_button_label;
                if(submit_button_label) {
                    form.getComponent('submit').label = submit_button_label;
                    form.redraw();
                }
                //Form content is ready
                var formViewID = formViewIdentification();
                sendGAEvent('engagement - form initiated', EmailForm.formMap[id].marketing_program, "", "", formViewID, EmailForm.formMap[id].formid, EmailForm.formMap[id].marketing_program, EmailForm.formMap[id].brite_verify, EmailForm.formMap[id].block_free_mail, EmailForm.formMap[id].language);
                
                form.on('submitDone', function (submission) {
                    sendGAEvent('engagement - form submit', EmailForm.formMap[id].marketing_program, submission.data.emailAddress, submission._id, formViewID, EmailForm.formMap[id].formid, EmailForm.formMap[id].marketing_program, EmailForm.formMap[id].brite_verify, EmailForm.formMap[id].block_free_mail, EmailForm.formMap[id].language);

					if($('#formio-'+id).parent().siblings('.modal-message-body').length===1){
						$('#formio-'+id).parent().hide();
						$('#formio-'+id).parent().siblings('.modal-message-body').show();
						$('#formio-'+id).parent().siblings('.modal-message-body').removeClass('hide');
						if(EmailForm.formMap[id].confirmation_page!==""){
							setTimeout(function(){window.location=EmailForm.formMap[id].confirmation_page;},3000);
						}
					} else if($('#formio-'+id).siblings('.marketo-thank-you.siblings('.marketo-thank-you').show();
						$('#formio-'+id).siblings('.marketo-thank-you').removeClass('hide');
						if(EmailForm.formMap[id].confirmation_page!==""){
							setTimeout(function(){window.location=EmailForm.formMap[id].confirmation_page;},3000);
						}
					} else {
						window.location = EmailForm.formMap[id].confirmation_page || '';
					}
                });
                form.ready.then(() => {
                    var email = '';
                    var gclid = '';
                    var gaClientID = '';
                    var utm_medium = '';
                    var utm_source = '';
                    var utm_campaign = '';
                    var utm_term = '';
                    var utm_content = '';
                    var utm_id = ''
                    var lang = '';
                    if (getQueryStringParam("utm_medium") && getQueryStringParam("utm_source") &&
                        getQueryStringParam("utm_campaign")) {
                        utm_medium = getQueryStringParam("utm_medium");
                        utm_source = getQueryStringParam("utm_source");
                        utm_campaign = getQueryStringParam("utm_campaign");
                        utm_term = getQueryStringParam("utm_term");
                        utm_content = getQueryStringParam("utm_content");
                        utm_id = getQueryStringParam("utm_id");
                    } else if (getCookie("utm_medium") && getCookie("utm_source") &&
                        getCookie("utm_campaign")) {
                        utm_medium = getCookie("utm_medium");
                        utm_source = getCookie("utm_source");
                        utm_campaign = getCookie("utm_campaign");
                        utm_term = getCookie("utm_term");
                        utm_content = getCookie("utm_content");
                        utm_id = getCookie("utm_id");
                    }
                    if (getQueryStringParam("gclid")) {
                        gclid = getQueryStringParam("gclid");
                    } else if (getCookie("gclid")) {
                        gclid = getCookie("gclid");
                    }
                    var language = window.location.pathname.split("/")[1].toString() || "en";
                    gaClientID = getCookie("_ga").substring(6);
                    lang = language;

                    var use_field_reference_for_confirmation_action = EmailForm.formMap[id].use_field_reference_for_confirmation_action;
                    if (use_field_reference_for_confirmation_action && use_field_reference_for_confirmation_action.trim().toLowerCase() === "true") {
                        var thankYouURL = form.data.thankYouURL;
                                
                        if(typeof thankYouURL !== 'undefined' && thankYouURL) {
                            EmailForm.formMap[id].confirmation_page = thankYouURL;
                        }
                    }
                    
                    form.submission = {
                        data: {
                            emailAddress: email,
                            gclid: gclid,
                            gaClientID: gaClientID,
                            utmMedium: utm_medium,
                            utmSource: utm_source,
                            utmCampaign: utm_campaign,
                            utmTerm: utm_term,
                            utmContent: utm_content,
                            utmId: utm_id,
                            lang: lang,
                            pageURL: window.location.href,
                            confirmationPage: EmailForm.formMap[id].confirmation_page || '',
                        "\\[").replace(/[\]]/, "\\]");
            var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
                results = regex.exec(location.search);
            return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
        }

        // Retrieve a browser cookie by name
        function getCookie(c_name) {
            var result = "";
            if (document.cookie.length > 0) {
                c_start = document.cookie.indexOf(c_name + "=");
                if (c_start != -1) {
                    c_start = c_start + c_name.length + 1;
                    c_end = document.cookie.indexOf(";", c_start);
                    if (c_end == -1) {
                        c_end = document.cookie.length;
                    }
                    result = unescape(document.cookie.substring(c_start, c_end));
                }
            }
            return result;
        };

        function sendGAEvent(eventCategory,eventAction, email, formSubmissionID, formViewID, formID, programName, brite_verify, block_free_mail, language) {
            try {
                var temp_brite_verify    = (brite_verify === 'true') ? 'true' : 'false'
                var temp_block_free_mail = (block_free_mail === 'true') ? 'true' : 'false'
                var validationSettings = temp_brite_verify + " | " + temp_block_free_mail;
                
                if('dataLayer' in window) {
                    window.dataLayer.push({
                        'event': eventCategory,
                        'evAction': eventAction,
                        'email': email,
                        'formSubmissionID': formSubmissionID,
                        'formViewID': formViewID,
                        'formID': formID,
                        'programName': programName,
                        'validationSettings': validationSettings,
                        'langu Client ID for those that don't have one */
        function uuidv4() {
            return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c => (c ^ crypto.getRandomValues(
                new Uint8Array(1))[0] & 15 >> c / 4).toString(16));
        }

        /* -- function for returning the value of the _ga cookie which is the Google Client ID, return a fake ID if one is not available */
        function getCID() {
            if (gookie('_ga');
                var clean_ga = raw_ga.substr(6);
                return clean_ga;
            } else {
                return uuidv4();
            }
        }
    },

    destroyForm: function (id) {
        $('#formio-' + id).html('');
    },

    resetForm: function (id) {
        if (EmailForm.formMap.hasOwnProperty(id) && EmailForm.formMap[id].form) {
            EmailForm.formMap[id].form.resetValue();
        }
    }
}

function fixFormIOLanguage(locale) {
    var languageMapping = {
        'la': 'es',   //'la' from Django, 'es' for form.io
        'pt': 'br',
        'zh-Hant': 'tw',
        'zh-Hans': 'cn',
        'ja': 'jp',
        'ko': 'kr',
        'sv': 'se'
    };

    return languageMapping[locale] || locale; // If could find mapping language, return formio language, or return original value
}

function addEmailEventListener(form, id, defaultTranslationDict, brite_verify, block_free_mail) {
    var components = form.getComponents();

    // Add listener for blur event, for all email inputs under the form
    var form_html_object = document.getElementById('formio-'+id);
    var emailInputs = form_html_object.querySelectorAll('input[type="email"]');
    var submitButton = form_html_object.querySelector('button[type="submit"]');

    emailInputs.forEach(function (input) {
        input.addEventListener('blur', function () {
            var emailComponent = form.getComponent('emailAddress');
            $.ajax({
                url: getEmailValidationURL(),
                method: 'POST',
                data: {
                    "email": input.value,
                    "brite_verify": brite_verify,
                    "block_free_mail": block_free_mail
                },
                complete: (res) => {
                    if (res.status == '200' && res.responseJSON && res.responseJSON['SHA3-256']) {
                    }else{
                        setTimeout(function() {
                            // Delayed message to overwrite default error message
                            emailComponent.setCustomValidity(defaultTranslationDict['Please enter a valid email address']);
                            submitButton.disabled = true;
                        }, 100);
                    }
                }
            });
        });
    });
}


function getEmailValidationURL(){
    //Add source/destination domains here for email validation
    var replacedDomainMap = {
        'b2b.parallels.com': 'www.parallels.com',
        'b2b.corel.com': 'www.corel.com',
        'go.corel.com': 'www.corel.com',
        'go.winzip.com': 'www.winzip.com',
        'go.mindmanager.com': 'www.mindmanager.com',
    };
    
    var currentDomain = window.location.hostname;
    if (replacedDomainMap[currentDomain]) {
        var targetUrl = 'https://' + replacedDomainMap[currentDomain] + '/validate_email/';
    } else {
        var targetUrl = '/validate_email/';
    }
    
    return targetUrl;
}

function formViewIdentification(){
    var formViewDate=new Date();
    var dateNumString=formViewDate.valueOf();
    var randNum=Math.floor((Math.random()*10000)+1);
    var formIdentifier=0;
    var pad='.';
    for(var pi=0; pi<(7-randNum.toString().length); pi++){
        pad+='0';
    }
    formIdentifier=dateNumString+pad+randNum;
    return formIdentifier;
}