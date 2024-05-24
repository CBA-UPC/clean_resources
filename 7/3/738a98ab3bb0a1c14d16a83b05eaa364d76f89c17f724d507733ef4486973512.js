self.addEventListener("push",function(i){console.log("data",i);var t=i.data.json(),n=t.title?t.title:"Уведомление!",o=t.actions,a="Спасибо за подписку";t.body?a=t.body:t.alert&&(a=t.alert);var e={body:a,icon:t.icon?t.icon:"https://www.ria.com/dist/img/logo-uk.png",image:t.image?t.image:"",tag:"push",requireInteraction:!0};o.length>0&&(e.actions=o),e.data={id:t.id},t.click_action&&(e.data.url=t.click_action),i.waitUntil(self.registration.showNotification(n,e))}),self.addEventListener("notificationclick",function(i){i.notification.close(),i.action?clients.openWindow(i.action):i.notification.data&&i.notification.data.url&&clients.openWindow(i.notification.data.url)}),self.addEventListener("notificationclose",function(i){if(i.notification.data&&i.notification.data.id){var t=new Headers;t.append("Content-Type","application/json");var n={notification_id:i.notification.data.id,chanel_id:2,user_event:2},o={method:"POST",body:JSON.stringify(n),mode:"no-cors",headers:t},a=new Request("https://nc.ria.com/service/processing",o);fetch(a).then(function(i){}).catch(function(i){console.error(i)})}});     $.ajax({
            url: form.attr('action'),
            type: 'post',
            data: form.serialize(),
            success: function (data) {
                var obj = {};
                if (typeof data === "string") {
                    obj = jQuery.parseJSON(data);
                } else {
                    obj = data;
                }
                if (obj.status == 0) {
                    jQuery(obj.errors).each(function (i, error) {
                        var nameError = "#error_" + error.field;
                        var errorContainer = jQuery(nameError);
                        if (errorContainer) {
                            jQuery(nameError + " span").html(error.value);
                            jQuery(errorContainer).css({"display": "block"});
                        }
                    });
                }
                if (obj.form_status == 4) {
                    var smsCode = jQuery("#sms_code").css({"display": "block"});
                    jQuery("#normalize_number").val(obj.normalize_number);
                }
                if (obj.form_status == 2) {
                    jQuery("#login_password").css({"display": "block"});
                    jQuery("#normalize_number").val(obj.normalize_number);
                }
                resize();
            },
            error: function (jqXHR, textStatus, errorThrown) {
                resize();
            }
        });

        return false;
    });

    jQuery('#ajaxLogin').on('beforeSubmit', function (event, jqXHR, settings) {
        var form = $(this);
        if (form.find('.has-error').length) {
            return false;
        }
        $.ajax({
            url: form.attr('action'),
            type: 'post',
            data: form.serialize(),
            success: function (data) {
                var obj = {};
                if (typeof data === "string") {
                    obj = jQuery.parseJSON(data);
                } else {
                    obj = data;
                }
                if (obj.session != null) {
                    loginOk();
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
//                console.log(errorThrown);
            }
        });
        return false;
    });
}


function resize() {
    var is_safari = navigator.userAgent.toLowerCase().indexOf('safari/') > -1;
    var common_login = document.querySelectorAll(".common-login");
    var page_wrapper = document.querySelectorAll("div.wrapper");
    var page_main_element = document.querySelectorAll("body")[0];

    if(common_login.length > 0){
        page_main_element = common_login[0];
    }else if(page_wrapper.length){
        page_main_element = page_wrapper[0];
    }
    var height = 700;

    if(is_safari){
        var client_height = page_main_element.clientHeight;
        var offset_height = page_main_element.offsetHeight;
        height = (client_height > offset_height ? client_height : offset_height);
    }else{
        height = page_main_element.clientHeight;
    }

    height += 15;

    window.parent.postMessage("{\"height\":" + height + "}", "*");
}

function loginOk() {
    window.parent.postMessage("{\"login\": \"ok\"}", "*");
}

function disableSubmit() {
    var checkBox = jQuery("#registrationform-agree");
    var submitButton = jQuery("#registration_button");
    if (jQuery(checkBox).is(":checked") == false) {
        jQuery(submitButton).attr({"disabled": "disabled"});
        jQuery(submitButton).addClass("disabled");
    }
    jQuery(checkBox).on("change", function (e) {
        var res = jQuery(checkBox).is(":checked");
        if (res == false) {
            jQuery(submitButton).addClass("disabled");
            jQuery(submitButton).attr({"disabled": "disabled"});
            disableSnButtons();
        } else {
            jQuery(submitButton).removeAttr("disabled");
            jQuery(submitButton).removeClass("disabled");
            enableSnButtons();
        }
    });
}

function disableSnButtons(){
    var res = jQuery('#registrationform-agree').is(':checked');
    if (res == false) {
        jQuery('.origin-social-networks').addClass('hide');
        jQuery('.fake-social-networks').removeClass('hide');
    }
}

function enableSnButtons(){
    var res = jQuery('#registrationform-agree').is(':checked');
    if (res != false) {
        jQuery('.origin-social-networks').removeClass('hide');
        jQuery('.fake-social-networks').addClass('hide');
    }
}

function getLanguige() {
//    var lang = navigator && (
//            navigator.language ||
//            navigator.browserLanguage ||
//            navigator.systemLanguage ||
//            navigator.userLanguage ||
//            null);
//    console.log(lang);
}

function savePhoneNumber() {
    var phoneField = jQuery("#emailloginform-email");
    if (phoneField.length) {
//        console.log(phoneField);
        localStorage.setItem("phone_number", jQuery(phoneField).val());
    }
    jQuery(phoneField).on("keyup", function (ev) {
        localStorage.setItem("phone_number", jQuery(phoneField).val());
    });
    jQuery(phoneField).on("change", function (ev) {
        localStorage.setItem("phone_number", jQuery(phoneField).val());
    });
    if (jQuery(phoneField).val() != undefined) {
        localStorage.setItem("phone_number", jQuery(phoneField).val());
    }
    if(isNaN(localStorage.getItem("phone_number"))){
        localStorage.removeItem("phone_number");
    }
    var registrationField = jQuery("#registrationform-email");
    var local_storage_phone = localStorage.getItem("phone_number");
    if (registrationField.length && local_storage_phone && local_storage_phone.length) {
        jQuery(registrationField).val(localStorage.getItem("phone_number"));
        localStorage.removeItem("phone_number");
    }
}

function detectIncorectKey() {
    var secureInput = jQuery("#confirmphoneform-secure_code");
    var keyboardError = jQuery("#keyboardError");
    jQuery(secureInput).on("keyup", function (ev) {
        if ($(this).val().match(/([а-яА-Я]+)/)) {
            jQuery(keyboardError).css({"display": "block"})
        } else {
            jQuery(keyboardError).css({"display": "none"})
        }
    });
}

function resendEmail() {
    var resendLink = jQuery("#send_new_email");
    var resendForm = jQuery("#resendEmail");

    if (resendLink) {
        jQuery(resendLink).on("click", function (ev) {
            // ev.stopPropagation();
            //
            // jQuery(resendForm).submit();
            console.log("triggered")
        });
    }
}

function resendSms() {
    var resendLink = jQuery("#send_new_sms");
    var resendForm = jQuery("#resendSMS");
    if (resendLink) {
        jQuery(resendLink).on("click", function (ev) {
            ev.stopPropagation();

            jQuery(resendForm).submit();
        });
    }
}

function snRestoreSend(){
    var form = jQuery("#restore-form-sn");
    var button = jQuery("#remember_password_sn");
    jQuery(button).on("click", function (ev) {
            ev.stopPropagation();
            console.log(form);
            jQuery(form).submit();
        });
}
