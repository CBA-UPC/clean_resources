 (function () {
    tp = window["tp"] || [];

    /* Checkout related */
    /**
     * Event properties
     *
     * chargeAmount - amount of purchase
     * chargeCurrency
     * uid
     * email
     * expires
     * rid
     * startedAt
     * termConversionId
     * termId
     * promotionId
     * token_list
     * cookie_domain
     * user_token
     *
     */
    function onCheckoutComplete(data) {
    }

    function onCheckoutExternalEvent() {
    }

    function onCheckoutClose(event) {
        /* Default behavior is to refresh the page on successful checkout */
        if (event && event.state == "checkoutCompleted") {
            location.reload();
        }
    }

    function onCheckoutCancel() {
    }

    function onCheckoutError() {
    }

    function onCheckoutSubmitPayment() {
    }

    /* Meter callback */
    function onMeterExpired() {

    }

    /* Meter callback */
    function onMeterActive() {

    }

    /* Callback executed when a user must login */
    function onLoginRequired() {
        // this is a reference implementation only
        // your own custom login/registration implementation would
        // need to return the tinypass-compatible userRef inside the callback

        // mysite.showLoginRegistration(function (tinypassUserRef)
        // tp.push(["setUserRef", tinypassUserRef]); // tp.offer.startCheckout(params); // }
        // this will prevent the tinypass error screen from displaying

        return false;
    }

    /* Callback executed after a tinypassAccounts login */
    function onLoginSuccess() {
    }

    /* Callback executed after an experience executed successfully */
    function onExperienceExecute(event) {
    }

    /* Callback executed if experience execution has been failed */
    function onExperienceExecutionFailed(event) {
    }

    /* Callback executed if external checkout has been completed successfully */
    function onExternalCheckoutComplete(event) {
        /* Default behavior is to refresh the page on successful checkout */
        location.reload();
    }

    tp.push(["setAid", 'z4irLUjNpj']);
  	tp.push(["setCxenseSiteId", "3607743729685346991"])
    tp.push(["setEndpoint", 'https://buy-ap.piano.io/api/v3']);
    tp.push(['setPianoIdUrl', 'https://id-ap.piano.io']);
    tp.push(["setUseTinypassAccounts", false ]);
    tp.push(["setUsePianoIdUserProvider", true ]);
    tp.push(["setCxenseSiteId","3607743729685346991"]);

    /* checkout related events */
    tp.push(["addHandler", "checkoutComplete", onCheckoutComplete]);
    tp.push(["addHandler", "checkoutClose", onCheckoutClose]);
    tp.push(["addHandler", "checkoutCustomEvent", onCheckoutExternalEvent]);
    tp.push(["addHandler", "checkoutCancel", onCheckoutCancel]);
    tp.push(["addHandler", "checkoutError", onCheckoutError]);
    tp.push(["addHandler", "checkoutSubmitPayment", onCheckoutSubmitPayment]);

    /* user login events */
    tp.push(["addHandler", "loginRequired", onLoginRequired]);
    tp.push(["addHandler", "loginSuccess", onLoginSuccess]);

    /* meter related */
    tp.push(["addHandler", "meterExpired", onMeterExpired]);
    tp.push(["addHandler", "meterActive", onMeterActive]);

    tp.push(["addHandler", "experienceExecute", onExperienceExecute]);
    tp.push(["addHandler", "experienceExecutionFailed", onExperienceExecutionFailed]);

    /* external checkout related events */
    tp.push(["addHandler", "externalCheckoutComplete", onExternalCheckoutComplete]);

    tp.push(["init", function () {
        tp.pianoId.init();
        tp.experience.init();
    }]);
})();


    cX = window.cX || {}; cX.callQueue = cX.callQueue || [];
    var cp = {};
    /** 記事ページでのページ番号計測 */
    if (location.pathname.match(/^\/post\//)) {
      var match = location.pathname.match(/^\/post\/\d+\/(\d+)$/);
      if (match && typeof match[1] !== 'undefined') { cp['pageNum'] = match[1]; }
      else { cp['pageNum'] = 1; }
    }
    /** 写真ページでの写真番号計測 */
    else if (location.pathname.match(/^\/photo\//)) {
      var photoNum = location.hash.replace('#photo', '').replace(/[^0-9a-z]/gi, '');
      if (photoNum) { cp['photoNum'] = photoNum; }
      else { cp['photoNum'] = 1; }
    }
    cX.callQueue.push(['setCustomParameters', cp]);


    // do not change this section
    // |BEGIN INCLUDE TINYPASS JS|
    (function(src){var a=document.createElement("script");a.type="text/javascript";a.async=true;a.src=src;var b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(a,b)})("//code.piano.io/api/tinypass.min.js");
    // |END   INCLUDE TINYPASS JS|

r headerBackgroundColor = "#fd4611";
    var bodyBackgroundColor = "#ffffff"
    var debug = "false" === "true";
    var date_hidden = "true" === "true";
    var form_hidden = "false" === "true";
    var footerButtons = [{"order":0,"type":"message","text":"はじめに戻る"},{"order":1,"type":"message","text":"会話を終了"}];
    var form_hidden = "false" === "true";
    var hideCloseButton = (
      ("false" === "true" && !editor_page)
      || window.location.search.includes('disable_close_button=true')
      || single_page_mode
    );
    var canUnfurl = "false"  === "true";
    var hideFooterCompanyLink = "false" === "true";
    var hideFileButton = "false" === "true";
    var hideGeolocationButton = "true" === "true";
    var hideHeader = false;
    var webPluginMode = editor_page
      ? "default"
      : "default";
    var showTextCount = "false" === "true";
    var enableMobileTextCopy = true;
    var useWaitMessage = false;
    var waitMessage = [
      "回答ありがとうございます。",
      "===================",
      "AIコールセンターではお客様の様々なご要望を受けできるように、日々成長中です。",
      "至らない点がありましたら、コールセンターにご連絡ください。",
      "===================",
      "それでは引き続きご案内いたします。",
    ].join("<br>");
    var waitMessageTimeout = 3000;

    var s3UploadFormData = {"s3_form_data":{"key":"uploads/sequence/send_url/fdb97bf9-4422-438f-b1c8-384cb4c6c801/${filename}","acl":"public-read","policy":"eyJleHBpcmF0aW9uIjoiMjAyNC0wMi0wOVQxMDowMDo0M1oiLCJjb25kaXRpb25zIjpbWyJzdGFydHMtd2l0aCIsIiRrZXkiLCJ1cGxvYWRzL3NlcXVlbmNlL3NlbmRfdXJsL2ZkYjk3YmY5LTQ0MjItNDM4Zi1iMWM4LTM4NGNiNGM2YzgwMS8iXSx7IlgtQW16LUFsZ29yaXRobSI6IkFXUzQtSE1BQy1TSEEyNTYifSx7IlgtQW16LUNyZWRlbnRpYWwiOiJBS0lBWEkzRzVPVTJOU05SUlhPUi8yMDI0MDIwOS9hcC1ub3J0aGVhc3QtMS9zMy9hd3M0X3JlcXVlc3QifSx7IlgtQW16LURhdGUiOiIyMDI0MDIwOVQwMDAwNDNaIn0seyJidWNrZXQiOiJwdWJsaWMtcHJkdjMtNTAwMDQyNjU5MTI0In0seyJhY2wiOiJwdWJsaWMtcmVhZCJ9LHsic3VjY2Vzc19hY3Rpb25fc3RhdHVzIjoiMjAxIn0sWyJjb250ZW50LWxlbmd0aC1yYW5nZSIsMSwyMDk3MTUyMF1dfQ==","X-Amz-Signature":"2a2d81910224c10d8b2ea370ecfbcb52eee458aed62f262015ca363584bfe661","X-Amz-Credential":"AKIAXI3G5OU2NSNRRXOR/20240209/ap-northeast-1/s3/aws4_request","X-Amz-Algorithm":"AWS4-HMAC-SHA256","X-Amz-Date":"20240209T000043Z"},"s3_form_uri":"https://public-prdv3-500042659124.s3.amazonaws.com/","original_attribute_name":"send_url","remote_attribute_name":"remote_send_url_url"};
    var s3FormData = s3UploadFormData.s3_form_data;
    var s3UploadUrl = s3UploadFormData.s3_form_uri;
    var s3OriginalName = s3UploadFormData.original_attribute_name;
    var s3RemotFieldName = s3UploadFormData.remote_attribute_name;
    window.currentLanguage = undefined;

    var prolog_content = "";
    var prolog_text = "";
    var prolog_buttons = "";

    // for other chat plugins now
    var canUseOperatorFunction = (isAnonymous && canServiceUseOperator) || addons_options.operator_response;
    var channel = function channel() {
        if (canUseOperatorFunction && has_scenario_notification_node_alert) {
            App.cable = ActionCable.createConsumer()
            return App.cable.subscriptions.create({
                    channel: "ChatRoomChannel",
                    room: client_cookie
                }, {
                    connected: function connected() {
                    },
                    disconnected: function disconnected() {
                    },
                    speak: function speak(data) {
                        this.perform('speak', {
                            data: data
                        })
                    },
                    received: function received() {
                        $.noop()
                    }
                }
            )
        } else {
            return undefined
        }
    }();

    function isIE () {
      var userAgent = window.navigator.userAgent.toLowerCase();
      return (
        userAgent.indexOf('msie') !== -1 ||
        userAgent.indexOf('trident') > 0
      );
    }
    function isEdge () {
      var userAgent = window.navigator.userAgent.toLowerCase();
      return (
        userAgent.indexOf('edge') !== -1
      );
    }

    parent.postMessage({
        action: "initSize",
        size: {
            width: "420px",
            height: "640px"
        }
    }, "*");

    $(document).ajaxError(function (e) {
        parent.postMessage({
            action: "ajaxError"
        }, "*");
    });

    window.addEventListener('message', function (e) {
      var data = e.data;
      switch (data.action) {
        case "cu:web_plugin:sendMessage":
          cu.web_plugin.sendMessage({
            type: "text",
            isBot: false,
            withIcon: true,
            text: data.text,
            iconType: 'client',
            time: moment().format("HH:mm")
          });
          break;

        case "cu:web_plugin:autoInitConversation":
          if (start_from_bot && !client_has_conversation) {
            cu.web_plugin.postMessage({
              type: "text",
              isBot: false,
              withIcon: true,
              text: "***start from bot***",
              iconType: 'client',
              time: moment().format("HH:mm"),
            });
          }
          break;

        // initApp and applyStyle are here basically to support webplugin configuration form page.
        case "cu:web_plugin:initApp":
          const rootElement = document.getElementById("cu-web-plugin-app");
          cu.web_plugin.initApp(rootElement, debug, data.params);
          break;

        case "cu:web_plugin:applyStyle":
          $(data.query).css(data.style);
          break;
      }
    });

    window.addEventListener('cu:web_plugin:mounted', function (e) {
      parent.postMessage({
        action: "cu:web_plugin:mounted"
      }, "*");
    });

    function postConversionDataToParent (data) {
      switch (data.type) {
        case "google_analytics":
          return parent.postMessage({
            action: "cu:web_plugin:gtag:google_analytics",
            data: data,
          }, "*");
        case "google_adwords":
          return parent.postMessage({
            action: "cu:web_plugin:gtag:google_adwords",
            data: data
          }, "*");
      }
    }

    function postFormDataToParent (data) {
      parent.postMessage({
        action: "cu:web_plugin:form_node:submitted",
        data: data
      }, "*");
    }

    function languageCheck () {
      var previousLanguage = window.currentLanguage;

      $.ajax({
        type: "get",
        url: "https://dialog.kuzen.io/v2/sequences/current_language",
        data: {
          "user_id_in_chat_application": "f35868978eef634b29eb3a3b327dfa22",
          "service_id": "4973",
        },
      })
        .then(function (d) {
          var currentLanguage = window.currentLanguage = d.language;

          if (currentLanguage === previousLanguage) {
            // if language has not changed, do nothing
            return;
          }

          switch (currentLanguage) {
            case "ja":
            case "":
              cu.web_plugin.setDefaultSystemMessages();
              break;
            default:
              translateSystemMessages();
          }
        });
    }

    function translateSystemMessages () {
      var systemMessages = cu.web_plugin.getSystemMessages();
      var systemMessagePairs = _.toPairs(systemMessages);
      var messages = _.map(systemMessagePairs, function (smp) { return smp[1]; });

      $.ajax({
        type: "post",
        url: "https://dialog.kuzen.io/v2/sequences/translate_messages",
        data: {
          "user_id_in_chat_application": "f35868978eef634b29eb3a3b327dfa22",
          "service_id": "4973",
          messages: messages,
        },
      })
        .then(function (translatedMessages) {
          const updatedSystemMessages = _.chain(translatedMessages)
            .zip(systemMessagePairs)
            .map(function (z) {
              var tmsg = z[0];
              var key = z[1][0];
              return [key, tmsg];
            })
            .fromPairs()
            .value();
          cu.web_plugin.updateSystemMessages(updatedSystemMessages);
        });
    }

  </script>



  <div id="cu-web-plugin-app" class="cu-ui-chat"></div>
  <style>
    body {
important;
    }

  .cu-ui-message-content {
      background-color: #25308d;
      color: #FFFFFF;
    }
    .cu-ui-message.cu-ui-message-bot .cu-ui-message-content {
      background-color: #ffdea5;
      color: #33333a;
    }

    /* ========== Only for hakone_internal bot ========== */
    .cu-ui-chat-header .cu-ui-button.cu-ui-outline:hover {
      background-color: #fd4611;
    }
    .cu-ui-chat .cu-ui-chat-header .cu-ui-outline:hover {
      background-color: #fd4611;
    }
    .cu-ui-chat-header .cu-ui-button.cu-ui-outline:active {
      background-color: #fd4611;
    }
    .cu-ui-chat-header .cu-ui-button.cu-ui-outline:focus {
      background-color: #fd4611;
    }

    .cu-ui-button.cu-ui-button-base.cu-ui-secondary.cu-ui-button-lg {
      background-color: #25308d;
    }
    /* ========== End for hakone_internal bot ========== */

    /* ========== Only for サニーヘルス様(マイクロダイエット) bot ========== */
    /* ========== End for サニーヘルス様(マイクロダイエット) bot ========== */

    /* ========== Below is temporarily fix. should be fixed in storybook ========== */
    .cu-ui-carousel .cu-ui-carousel-slide .cu-ui-carousel-image {
      background-size: cover;
      background-position: center;
    }
    /* ========== End temporarily fix ========== */

  </style>
  <script type="text/javascript" charset="utf-8">
    parent.postMessage({
        action: "hideCloseButton"
    }, "*");
    const ele = document.querySelector('.__open_option');
    if (ele) {
        ele.innerText = "";
    }

    const rootElement = document.getElementById('cu-web-plugin-app');

    if (channel) {
        channel.received = function (receivedData) {
            let parse_data = JSON.parse(receivedData);
            if (parse_data[0].user == "operator") {
                _.each(parse_data, function (message) {
                    if (message.type === "system") {
                        cu.web_plugin.passiveReceiver({
                            type: "s       cu.web_plugin.chatRoomConnection({
                          action: message.action
                        });
                    } else if (!_.isUndefined(message.text)) {
                        cu.web_plugin.passiveReceiver({
                            type: "text",
                            isBot: true,
                            withIcon: true,
                            text: message.text,
                            iconType: 'operator',
                            time: moment().format("HH:mm")
                        })
                    } else if (!_.isUndefined(message.url)) {
                        cu.web_plugin.passiveReceiver({
                            type: "normal-image",
                            isBot: true,
                            withIcon: true,
                      url: message.url,
                            time: moment().format("HH:mm")
                        })
                    }
                })
            }
        }
        // ie's preventDefault nor returnValue is not working properly
        // to disable browser alert. comment-outed for now, but
        // it needs to be fixed
        if (!isIE() && !isEdge()) {
          window.addEventListener("beforeunload", function (event) {
            if (event.preventDefault) {
              event.preventDefault();
            } else {
              event.returnValue = false;
            }

            channel.speak([{
              text: "---end user out---",
              type: "system",
              action: "end_user_out",
              user: 'end_user'
            }]);
          });
        }
    }

    function getIsBot (data) {
      return data.user ? _.includes(['bot', 'operator'], data.user) : true
    }

    function getIconType (data) {
      let iconType = '';

      if (data.user) {
        switch (data.user) {
          case 'client':
            iconType = 'client';
            break;
          case 'operator':
            iconType = 'operator';
            break;
          default:
            iconType = getBotIconType(data.bot_img_id);
        }
      } else {
        iconType = getBotIconType(data.bot_img_id);
      }

      return iconType;
    }

    function getBotIconType (bot_img_id) {
      if (bot_img_id == 1) {
        return 'bot_1';
      } else if (bot_img_id == 2) {
        return'bot_2';
      } else {
        return 'bot_default';
      }
    }

    function parser(datas) {
        return _.map(datas, function(d) {
            if (d.message) {
                if (d.candidates) {
                    var candidate_urls = d.candidate_urls ? JSON.parse(d.candidate_urls) : [];
                    return {
                        "id": d.id,
                        "type": "button",
                        "text": d.message,
                        "isBot": d.user ? _.includes(['bot', 'operator'], d.user) : true,
                        "buttonType": "block",
                        "iconType": getIconType(d),
                        "buttons": _.map(JSON.parse(d.candidates), function (button, index) {
                        var url = candidate_urls[index];
                        var type = url ? "url" : "postback-with-message";
                          return {
                            "type": type,
                            "text": button,
                            "url": candidate_urls[index],
                            // data: PostbackData "<carousel_member_id>::<carousel_button_id>::<custom_db_id>::<set_entity_id>::<carousel_title>::<carousel_node_id>::<button_candidate_id>"
                            "data": "::::::::::::"+ d.candidate_ids.split(",")[index]
                          }
                        }),
                        "time": moment(d.created_at).format("HH:mm"),
                        "wait_time": d.wait_time,
                        "text_count_max": d.text_count_max,
                        "text_count_min": d.text_count_min
                    }
                }
                return {
                    "id": d.id,
                    "type": "text",
                    "isBot": d.user ? _.includes(['bot', 'operator'], d.user) : true,
                    "withIcon": true,
                    "text": d.message,
                    "iconType": getIconType(d),
                    "time": moment(d.created_at).format("HH:mm"),
                    "wait_time": d.wait_time,
                    "text_count_max": d.text_count_max,
                    "text_count_min": d.text_count_min,
                }
            } else if (d.content_url) {
                if (/\.(m4a|mp3)/.test(d.content_url)) {
                    return {
                        "id": d.id,
                        "type": "audio",
                        "isBot": d.user ? _.includes(['bot', 'operator'], d.user) : true,
                        "url": d.content_url,
                        "iconType": getIconType(d),
                 t_count_min": d.text_count_min,
                    }
                } else if (/\.mp4/.test(d.content_url)) {
                    return {
                        "id": d.id,
                        "type": "video",
                        "isBot": d.user ? _.includes(['bot', 'operator'], d.user) : true,
                        "url": d.content_url,
                        "iconType": getIconType(d),
                        "time": moment(d.created_at).format("HH:mm"),
                        "wait_time": d.wait_time,
                        "text_count_max": d.text_count_max,
                        "text_count_min": d.text_count_min,
                    }
                } else if (/\.pdf/.test(d.content_url)) {
                    return {
                        "id": d.id,
                        "type": "pdf",
                        "isBot": d.user ? _.includes(['bot', 'operator'], d.user) : true,
                        "url": d.content_url,
                        "additional_url": d.additional_url,
                        "iconType": getIconType(d),
                        "time": moment(d.created_at).format("HH:mm"),
                        "wait_time": d.wait_time,
                        "fileName": d.file_name,
                        "text_count_max": d.text_count_max,
                        "text_count_min": d.text_count_min,
                    }
                } else {
                    return {
                        "id": d.id,
                        "type": "normal-image",
                        "isBot": d.user ? _.includes(['bot', 'operator'], d.user) : true,
                        "url": d.content_url,
                        "additional_url": d.additional_url,
                        "iconType": getIconType(d),
                        "time": moment(d.created_at).format("HH:mm"),
                        "wait_time": d.wait_time,
                        "text_count_max": d.text_count_max,
                        "text_count_min": d.text_count_min,
                    }
                }
            } else if (d.candidates) {
                var candidate_urls = d.candidate_urls ? JSON.parse(d.candidate_urls) : [];
                return {
                    "id": d.id,
                    "type": "button",
                    "isBot": d.user ? _.includes(['bot', 'operator'], d.user) : true,
                    "iconType": getIconType(d),
                    "buttonType": "block",
                    "buttons": _.map(JSON.parse(d.candidates), function (button, index) {
                        var url = candidate_urls[index];
                        var type = url ? "url" : "postback-with-message";
                        return {
                            "type": type,
                            "text": button,
                            // data: PostbackData "<carousel_member_id>::<carousel_button_id>::<custom_db_id>::<set_entity_id>::<carousel_title>::<carousel_node_id>::<button_candidate_id>"
                            "data": "::::::::::::"+ d.candidate_ids.split(",")[index]
                        }
                    }),
                    "time": moment(d.created_at).format("HH:mm"),
                    "wait_time": d.wait_time,
                    "text_count_max": d.text_count_max,
                    "text_count_min": d.text_count_min,
                }
            } else if (d.carousels) {
                const carousels = JSON.parse(d.carousels);
                return {
                    "id": d.id,
                    "type": "carousel",
                    "carousels": _.map(carousels.carousel_contents, function (carousel) {
                        return {
                            "placeholder": carousel.background_content,
                            "title": carousel.title,
                            "explain": carousel.sub_text,
                            "buttons": _.map(carousel.buttons, function (button) {
                                if (button.url) {
                                    return {
                                        "type": "url",
                                        "text": button.title,
                                        "url": button.url
                                    }
                                } else {
                                    return {
                                        "type": "postback",
                                        "text": button.title,
                                        // data: PostbackData "<carousel_member_id>::<carousel_button_id>::<custom_db_id>::<set_entity_id>::<carousel_title>::<carousel_node_id>::<button_candidate_id>"
                                        "data": button.carousel_member_id + "::" + button.carousel_button_id + "::" + button.custom_db_id + "::"+ button.set_entity_id + "::"+ button.carousel_title + "::"+ button.carousel_node_id + "::"
                                    }
                                }

                            })
                        }
                    }),
                    "wait_time": d.wait_time,
                    "text_count_max": d.text_count_max,
                    "text_count_min": d.text_count_min,
                };
            } else if (d.form_data) {
                const formData = JSON.parse(d.form_data);
                return {
                    "id": d.id,
                    "type": "form",
                    "isBot": true,
                    "formData": formData
                };
            } else {
                return {}
            }
        });
    }

    cu.web_plugin.initApp(rootElement, debug, {
        title: chat_title,
        botSrcDef: $("#bot_img_def").val(),
        botSrc1: $("#bot_img_1").val(),
        botSrc2: $("#bot_img_2").val(),
        clientSrc: $("#client_img").val(),
        operatorSrc: $("#operator_img").val(),
        withoutDate: date_hidden,
        withoutForm: form_hidden,
        hideCloseButton: hideCloseButton,
        canUnfurl: canUnfurl,
        hideFooterCompanyLink: hideFooterCompanyLink,
        hideGeolocationButton: hideGeolocationButton,
        hideFileButton: hideFileButton,
        hideHeader: hideHeader,
        webPluginMode: webPluginMode,
        showTextCount: showTextCount,
        enableMobileTextCopy: enableMobileTextCopy,
        useWaitMessage: useWaitMessage,
        waitMessage: waitMessage,
        waitMessageTimeout: waitMessageTimeout,
        fontSize: single_page_mode ? 'default' : null,
        presetFontSize: 'default',
        useFontSizeToggle: single_page_mode,
        singlePageMode: single_page_mode,
        baseParams: {
          headerBackgroundColor: headerBackgroundColor,
          bodyBackgroundColor: bodyBackgroundColor,
          headerFontSize: chat_header_size,
          headerTextColor: chat_header_color,
          headerTextShadow: chat_header_shadow,
          clientPromptColor: client_font_color,
          clientPromptBackgroundColor: base_color,
          botPromptColor: bot_font_color,
          botPromptBackgroundColor: sub_color
        },
        debugFunc: function() {
            $('.__option_box').show();
            $('.__open_option').hide();

        },
        closeFunc: function() {
            parent.postMessage({
                action: "closeWebplugin"
            }, "*");
        }
    });

    function makeBasicPostData (_data, _carousel) {
      return Promise.resolve({
        type: 'post',
        url: api_path + "/v2/sequences",
        data: _.assign(format.post_sequence({
          message: _data.text,
          cookie: client_cookie,
          user_name: "client",
          location: _data.location,
        }), _carousel),
        dataType: 'json',
        crossDomain: true,
        encode: true
      });
    }

    function makeFilePostData (data) {
      return uploadFileToS3({
        url: s3UploadUrl,
        s3FormData: s3FormData,
        file: data.file
      })
        .then(function (decodedUrl) {
          return {
            type: 'post',
            url: api_path + "/v2/sequences",
            data: format.post_sequence_with_content({
              cookie: client_cookie,
              fileUrl: decodedUrl,
              type: data.file.type,
            }),
            cache: false,
            processData: false,
            contentType: false,
          }
        });
    }

    var getPostData = function(data, carousel) {
      switch (data.type) {
        case "text":
        case "postback":
        case "location":
          return makeBasicPostData(data, carousel);

        case "normal-image":
          return makeFilePostData(data);
      }
    };

    cu.web_plugin.initProtocol(function(data) {
        return function(success, failed) {
          var carousel = {};
          if (data.data) {
              // FormNode
              if (data.data.objects) {
                  var strData = JSON.stringify({
                      node_id: data.data.nodeId,
                      objects: data.data.objects
                  });
                  carousel = {
                    filled_form_data: strData
                  };

                  // for conversion
                  var conversion = data.data.conversion;
                  if (conversion && conversion.length > 0) {
                      $.each(conversion, function (idx, c) {
                          postConversionDataToParent(c);
                      });
                  }

                  // for propagating form data to parent
                  postFormDataToParent(data.data);
              }
              // CarouselNode
              else {
                  var tmp = data.data.split('::');
                  // PostbackData
                  carousel = {
                      carousel_member_id: tmp[0],
                      carousel_button_id: tmp[1],
                      custom_db_id: tmp[2],
                      set_entity_id: tmp[3],
                      carousel_title: tmp[4],
                      carousel_node_id: tmp[5],
                      button_candidate_id: tmp[6]
                  };
              }
          }

          getPostData(data, carousel)
            .then(function (post_data) {
              $.ajax(post_data).error(function(e) {
                failed();
              }).success(function(datas) {
                if(datas && datas[0] && datas[0].type != "ScenarioErrorSerializer"){
                  if (datas.length > 0) {
                    if(datas[0].current_intent_buttons && datas[0].current_intent_buttons != "") {
                      var newfooterButtons = JSON.parse(datas[0].current_intent_buttons);
                      cu.web_plugin.updateBottomButtons(newfooterButtons);
                      languageCheck();
                    }
                    success(parser(datas));
                }
                if ($("#debug").prop('checked')){
                  parent.postMessage({
                    action: "refreshDebugData"
                  }, "*");
                };
              }

                if (datas && $("#check-scenario-error").length > 0 && parent.checkScenarioError) {
                  parent.checkScenarioError(datas, $("#chat_application_id").val(), $('#cookie').val());
                }
              });
            });


          $('#node_id_should_be_started').val("");

          if (channel) {
              switch (data.type) {
                  case "text":
                      channel.speak([{
                        message: data.text,
                        user_name_in_chat_application: 'client',
                        user_id_in_chat_application: $('#cookie').val(),
                        chat_application_id: $("#chat_application_id").val(),
                        original_service_id: $("#original_service_id").val(),
                        service_id: $("#service_id").val(),
                      }]);
                      break;
                  case "normal-image":
                      channel.speak([{
                        content_url: data.url,
                        user_name_in_chat_application: 'client',
                        user_id_in_chat_application: $('#cookie').val(),
                        chat_application_id: $("#chat_application_id").val(),
                        original_service_id: $("#original_service_id").val(),
                        service_id: $("#service_id").val(),
                      }]);
                      break;
              }
          }
      }
    });

    cu.web_plugin.updateBottomButtons(footerButtons);

    var datas = parser(JSON.parse(histories));

    var pro_datas = [
      function(){
        if (prolog_content) {
            return {
              "id": 'prolog-content-1',
              "type": "normal-image",
              "isBot": true,
              "withIcon": true,
              "iconType": 'bot_default',
              "url": prolog_content,
              "time": moment().format("HH:mm")
            }
        } else {
            return {}
        }
      }(),
      function() {
        if (prolog_text) {
          if (prolog_buttons) {
              return {
                  "id": 'prolog-content-2',
                  "type": "button",
                  "text": prolog_text.join("\n"),
                  "isBot": true,
                  "iconType": 'bot_default',
                  "buttonType": "flex",
                  "buttons": _.map(prolog_buttons.split(','), function (button) {
                      return {
                          "type": "message",
                          "text": button
                      }
                  }),
                  "time": moment().format("HH:mm")
              }
          } else {
              return {
                  "id": 'prolog-content-3',
                  "type": "text",
                  "isBot": true,
                  "iconType": 'bot_default',
                  "withIcon": true,
                  "text": prolog_text.join('\n'),
                  "time": moment().format("HH:mm")
              }
          }
        } else {
            if (prolog_buttons) {
                return {
                    "id": 'prolog-content-4',
                    "type": "button",
                    "text": "",
                    "isBot": true,
                    "iconType": 'bot_default',
                    "buttonType": "block",
                    "buttons": _.map(prolog_buttons.split(','), function (button) {
                        return {
                            "type": "message",
                            "text": button
                        }
                    }),
                    "time": moment().format("HH:mm")
                }
            }
        }
      }()
    ];
    cu.web_plugin.loadData(pro_datas);
    cu.web_plugin.loadData(datas);
    languageCheck();
    $(document).ready(function() {
      if(single_page_mode) {
        window.postMessage({action:"cu:web_plugin:autoInitConversation"},"*");
      }
    })
  </script>
</body>
</html>
