/* Global Alert v2.0.15 */
/* For CHANGELOG, visit https://confluence.ncbi.nlm.nih.gov/x/KgnRCw */

if(jQuery && (typeof(galert) == "undefined")) {

  /* NWS-2442: if global variable display_global_alert is not defined or if it defined and if it is set to true */
  /* NWS-2442: then display new global alert banner on application which uses this alerts.js file. */
  /* NWS-2442: else display older global alert banner. */
  if (typeof display_global_alert === 'undefined' || (display_global_alert && display_global_alert == true)) {
    /* NWS-1098 - Script version 2 */


    // localStorage key for alert dismissal
    var alert_localstorage_key = 'ncbi_alert_info';

    // duration of  alerts dismissal - 24 hours
    var alert_dismissal_timeout = 86400000;

    // Dictionary of alert text:
    // each alert text key includes a suffix that indicates the alert type
    // _info - alerts with this suffix are displayed with the blue info styling
    // _shutdown - alerts with this suffix are displayed with the red warning styling

    var alert_text = {
      
      'submission_info' : '<p>NCBI servers will be undergoing scheduled maintenance from 6:00 AM until 8:00 AM EST on February 6. The NCBI Submission Portal will not be available during this time.</p>',

      'eRA_info' : '<p>eRA services and websites will be unavailable from 8:00 AM EDT on Friday, April 17 through 8:00 PM EDT on Monday, April 20.</p><p>During this time, grants will not be updated and you will not be able to access the RPPR.</p>',
      
      'probe_info' : '<p>NCBI will be retiring the Probe database in April 2020. <a href="http://ncbiinsights.ncbi.nlm.nih.gov/2019/11/19/ncbi-will-retire-the-probe-database-in-april-2020/">Read more.</a></p>',

      'null' : '',
      
      'debug_alert_shutdown': '<p>Test alert for checking alert integration.</p>'

    };


      
    var now = new Date();

    // Selection rules:
    var choices = [
          
      // Rule: SD-992, eRA outage
           [ function() {
                var expires = new Date("Mon Apr 20 2020 23:00:00 EDT");
                return /ncbi\.nlm\.nih\.gov\/myncbi\/collections\/mybibliography|ncbi\.nlm\.nih\.gov\/myncbi\/.*\/cv|ncbi\.nlm\.nih\.gov\/sciencv/.exec(window.location.href) && (now < expires);
           }, "eRA_info"
           ],
      // Rule: SD-964, Probe retirement 
           [ function() {
                var expires = new Date("Thu Apr 30 2020 23:00:00 EDT");
                return /ncbi\.nlm\.nih\.gov\/probe/.exec(window.location.href) && (now < expires);
           }, "probe_info"
           ],
      // Debug alert
           [ window.location.hash.toString(), /\bdebug_alert\b/, "debug_alert_shutdown"],
 
         // If the rule above fails, show nothing.
           [ /.*/, "null" ]
    ];
      
    (function($) {

        // GWC-332; remove when GWC-331 is complete.
        // MSIE 7 + Trident/ >= 4 means a later browser in compat mode.
        // IE begins defining "rv:" and says it's "like Gecko" starting with 11.
        // So we also remove the error for that.
        fix_browser_message = function() {
            var m = /MSIE\s+7.*\(Trident\/[4565789]\)/.exec(navigator.userAgent);
            if ((m && m != null && parseFloat(m[1]) >= 4.0) ||
                (/rv:.*like Gecko/.exec(navigator.userAgent))) {
                $(".error .browsername, .browsercheck .error").remove();
            }
        }

        galert_message = function(selectors, styles) {

          // Global flag prevents repeat calls
          if (typeof(galert.complete) != 'undefined') {
              return;
          }

          // Build message text based on rules.
          function get_message_data() {

              var m = $('meta[name=galert_type]');

              var message = null;
              var message_type = null;

              while (message == null && choices.length > 0) {
                  var rule = choices.shift();

                  urlpart = rule.shift();

                  // If string comes first, it's what to match against
                  if (typeof(urlpart) == "string") {
                      matcher = rule.shift();
                  } else {
                      matcher = urlpart;
                      urlpart = window.location.pathname.toString();
                  }

                  // Get matcher function; convert RE to function if needed.
                  if (matcher instanceof RegExp) {
                      var _matcher = matcher;
                      matcher = function(s) {
                          return _matcher.test(s);
                      }
                  }

                  // If rule matches, choose message
                  var testresult = matcher(urlpart);

                  // If matcher returns a string, the string is the message type.
                  // If it returns boolean, then the next string in the rule is the message type.
                  message_type = typeof(testresult) == "string" ? testresult : rule.shift();
                  message = (typeof(testresult) == "string" || testresult) ? alert_text[message_type] : null;

                  if (message != null) {
                    var extra = rule.shift();
                    while (extra != null) {
                        message += alert_text[extra];
                        extra = rule.shift();
                    }
                  }
              }
              return [message_type, message]
          }

          // Add option to select alert style
          function get_message_style(type) {

              // Directory of alert styles.
              var alert_style = {
              'shutdown': '<div class="ncbi-alert__shutdown-outer"><div class="ncbi-alert__shutdown-inner">__msg__</div><button type="button" class="close" aria-controls="__ariaControls__" aria-label="Close Alert">&nbsp;</button></div>',

              'info': '<div class="ncbi-alert__info-outer"><div class="ncbi-alert__info-inner">__msg__</div><button type="button" class="close" aria-controls="__ariaControls__" aria-label="Close Alert"><span aria-hidden="true">&nbsp;</span></button></div>',
              }

              return alert_style[type];

          }

          //get alert dismissal info, which is saved in
          //localStorage when a user dismisses the alert
          function get_alert_dismissal_info(message_type) {
              let msginfo = false,
                  m = localStorage.getItem(alert_localstorage_key);
              if (!!m) {
                m = JSON.parse(m);
                if (m.hasOwnProperty(message_type)) {
                  msginfo = m[message_type];
                }
              }
              return msginfo;
          }

          //set dismissal info in localStorage when user dismisses alert
          // the stored data lifespan is dependent on alert_dismissal_timeout
          function set_alert_dismissal_info(message_type) {
            let d = new Date(),
                msginfo = get_alert_dismissal_info(message_type);
            if (msginfo === false) {
              let currentmsginfo = localStorage.getItem(alert_localstorage_key);
              msginfo = !!currentmsginfo ? JSON.parse(currentmsginfo) : {};
              msginfo[message_type] = {
                message: alert_text[message_type],
                until: d.getTime() + alert_dismissal_timeout,
              }
              localStorage.setItem(alert_localstorage_key,
                JSON.stringify(msginfo));
            }
          }

          //Invalidate alert dismissal in localStorage
          function remove_alert_dismissal(message_type) {
            let currentmsginfo = localStorage.getItem(alert_localstorage_key);
            if (!!currentmsginfo) {
              msginfo = JSON.parse(currentmsginfo);
              if (msginfo.hasOwnProperty(message_type)) {
                delete msginfo[message_type];
                localStorage.setItem(alert_localstorage_key,
                  JSON.stringify(msginfo));

              }
            }
          }

          //Alert dismissal override. The message must be shown if:
          //(1)message text has changed
          //(2){alert_dismissal_timeout} has elapsed
          function show_alert_for_user(message_type) {
            let show = false,
              d = new Date(),
              msginfo = get_alert_dismissal_info(message_type);
            if (msginfo === false) {
              show = true;
            } else if (msginfo.message != alert_text[message_type]
                || msginfo.until < d.getTime()) {
                remove_alert_dismissal(message_type);
                show = true;
            }
            return show;
          }



          // returns [message_type, message]; message_type is the name of the message in <choices>,
          // message is the message to show. If message is null, show nothing.       
          var message_data = get_message_data();
          var message_type = message_data.shift();
          message = message_data.shift();
          //Get alert type
          var message_style = message_type.split("_").pop()

          if (window.location.hash == "#test") { debugger; }

          // Show no message if message text is null or empty string
          if (message!==null && message!== ""){
            // Uncomment for shutdown...
            // message = message.concat(' For updates regarding government operating status see <a href="http://www.usa.gov" id="usa">USA.gov</a>.');


            // Each expression returns list of length at least two; match[1] is result of first capture group.
            var alert_jq =  $(
                '<div class="ncbi-alerts ' + message_type + '" id="' + message_type + '" role="region" aria-label="Alert">' +
                    get_message_style(message_style).replace('__msg__', message).replace('__ariaControls__', message_type) + '' +
                '</div>'
            );



            // Alert styles
            var galert_css = $(
              "<style>.ncbi-alerts .ncbi-alert__shutdown-outer { position: relative; background-color: #f4e3db; border-left: 8px solid #d54309;  background-image: url(\"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg xmlns='http://www.w3.org/2000/svg' width='126' height='126' viewBox='0 0 126 126'%3E%3Cpath fill='%231B1B1B' d='M117.18,31.592 C111.585,22.006 103.995,14.416 94.409,8.821 C84.821,3.226 74.354,0.429 63.001,0.429 C51.649,0.429 41.18,3.226 31.593,8.821 C22.006,14.415 14.416,22.005 8.821,31.592 C3.225,41.179 0.428,51.649 0.428,63 C0.428,74.351 3.226,84.82 8.82,94.408 C14.415,103.992 22.005,111.584 31.592,117.179 C41.179,122.774 51.648,125.571 63,125.571 C74.352,125.571 84.822,122.774 94.408,117.179 C103.994,111.585 111.584,103.994 117.179,94.408 C122.773,84.82 125.57,74.35 125.57,63 C125.57,51.649 122.773,41.178 117.18,31.592 Z M73.43,102.025 C73.43,102.786 73.184,103.423 72.696,103.939 C72.208,104.455 71.61,104.712 70.903,104.712 L55.26,104.712 C54.554,104.712 53.929,104.441 53.386,103.898 C52.843,103.355 52.572,102.73 52.572,102.025 L52.572,86.546 C52.572,85.84 52.843,85.215 53.386,84.672 C53.929,84.129 54.554,83.858 55.26,83.858 L70.903,83.858 C71.61,83.858 72.209,84.116 72.696,84.631 C73.184,85.149 73.43,85.785 73.43,86.546 L73.43,102.025 Z M73.266,73.999 C73.211,74.542 72.927,75.018 72.412,75.425 C71.895,75.832 71.258,76.035 70.498,76.035 L55.425,76.035 C54.664,76.035 54.012,75.832 53.469,75.425 C52.926,75.018 52.654,74.542 52.654,73.999 L51.269,23.404 C51.269,22.751 51.54,22.263 52.083,21.937 C52.627,21.503 53.279,21.285 54.039,21.285 L71.965,21.285 C72.726,21.285 73.377,21.502 73.92,21.937 C74.463,22.263 74.733,22.752 74.733,23.404 L73.266,73.999 Z'/%3E%3C/svg%3E%0A\");}"+

              ".ncbi-alerts .ncbi-alert__info-outer { position: relative; background-color: #e7f6f8; border-left: 8px solid #00bde3; background-image: url(\"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg xmlns='http://www.w3.org/2000/svg' width='126' height='126' viewBox='0 0 126 126'%3E%3Cpath fill='%231B1B1B' d='M117.18,31.592 C111.585,22.006 103.995,14.416 94.409,8.821 C84.821,3.226 74.354,0.429 63.001,0.429 C51.649,0.429 41.179,3.226 31.593,8.821 C22.006,14.415 14.416,22.005 8.821,31.592 C3.225,41.179 0.428,51.649 0.428,63 C0.428,74.352 3.226,84.82 8.82,94.408 C14.415,103.993 22.005,111.584 31.592,117.179 C41.179,122.774 51.648,125.571 63,125.571 C74.352,125.571 84.822,122.774 94.408,117.179 C103.994,111.585 111.584,103.994 117.179,94.408 C122.773,84.821 125.57,74.351 125.57,63 C125.57,51.648 122.773,41.178 117.18,31.592 Z M52.572,16.071 C52.572,15.31 52.816,14.686 53.305,14.197 C53.794,13.709 54.419,13.464 55.179,13.464 L70.823,13.464 C71.583,13.464 72.208,13.709 72.695,14.197 C73.183,14.686 73.429,15.31 73.429,16.071 L73.429,29.107 C73.429,29.867 73.183,30.492 72.695,30.98 C72.208,31.469 71.583,31.713 70.823,31.713 L55.179,31.713 C54.419,31.713 53.794,31.469 53.305,30.98 C52.816,30.492 52.572,29.867 52.572,29.107 L52.572,16.071 Z M83.857,102.107 C83.857,102.867 83.611,103.492 83.124,103.979 C82.637,104.468 82.012,104.712 81.25,104.712 L44.75,104.712 C43.989,104.712 43.365,104.468 42.876,103.979 C42.387,103.491 42.143,102.866 42.143,102.106 L42.143,89.07 C42.143,88.308 42.387,87.685 42.876,87.196 C43.365,86.708 43.99,86.463 44.75,86.463 L52.572,86.463 L52.572,60.392 L44.75,60.392 C43.989,60.392 43.365,60.148 42.876,59.659 C42.387,59.171 42.143,58.546 42.143,57.785 L42.143,44.75 C42.143,43.989 42.387,43.365 42.876,42.876 C43.365,42.387 43.99,42.143 44.75,42.143 L70.823,42.143 C71.583,42.143 72.208,42.387 72.695,42.876 C73.183,43.365 73.429,43.989 73.429,44.75 L73.429,86.464 L81.249,86.464 C82.01,86.464 82.635,86.709 83.123,87.197 C83.61,87.685 83.856,88.31 83.856,89.071 L83.856,102.107 L83.857,102.107 Z'/%3E%3C/svg%3E\");}"+

              ".ncbi-alerts div[class$=\"-outer\"]{background-position: 28px 20px;  background-size: 32px 32px;  background-repeat: no-repeat;padding:20px 20px 20px 28px;}"+
              ".ncbi-alerts div[class$=\"-inner\"]{padding-left: 52px; padding-right: 52px;}"+
              "@media (max-width: 639px){.ncbi-alerts div[class$=\"outer\"]{background-position: 15px 20px;}.ncbi-alerts div[class$=\"-inner\"]{padding-left: 0px; padding-right: 0px; padding-top: 40px;}}"+
              ".ncbi-alerts button.close{cursor: pointer;position:absolute; top: 10px; right: 20px; width: 36px; height: 32px; border:0; background-color: transparent; background-image: url(\"data:image/svg+xml,%3Csvg version='1.2' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' overflow='visible' preserveAspectRatio='none' viewBox='0 0 24 24' width='32' height='32'%3E%3Cg%3E%3Cpath xmlns:default='http://www.w3.org/2000/svg' id='window-close' d='M14.9,16.42c-0.13,0.13-0.33,0.14-0.47,0.01c0,0-0.01-0.01-0.01-0.01L12,14l-2.43,2.42 c-0.13,0.13-0.33,0.14-0.47,0.01c0,0-0.01-0.01-0.01-0.01L7.58,14.9c-0.13-0.13-0.14-0.33-0.01-0.47c0,0,0.01-0.01,0.01-0.01L10,12 L7.58,9.57C7.45,9.45,7.44,9.24,7.57,9.1c0,0,0.01-0.01,0.01-0.01L9.1,7.58c0.13-0.13,0.33-0.14,0.47-0.01c0,0,0.01,0.01,0.01,0.01 L12,10l2.43-2.43c0.13-0.13,0.33-0.14,0.47-0.01c0,0,0.01,0.01,0.01,0.01l1.51,1.53c0.13,0.13,0.14,0.33,0.01,0.47 c0,0-0.01,0.01-0.01,0.01L14,12l2.43,2.43c0.13,0.13,0.14,0.33,0.01,0.47c0,0-0.01,0.01-0.01,0.01L14.9,16.42L14.9,16.42z M20.84,4.49C20.53,4.17,20.1,3.99,19.66,4H4.34C3.42,4,2.67,4.75,2.67,5.67l0,0v12.66c0,0.92,0.75,1.67,1.67,1.67l0,0h15.32 c0.92,0,1.67-0.75,1.67-1.67l0,0V5.67C21.34,5.23,21.16,4.8,20.84,4.49z' style='fill: rgb(33, 33, 33);' vector-effect='non-scaling-stroke'/%3E%3C/g%3E%3C/svg%3E\");background-size: 32px 32px; background-repeat:no-repeat;background-position:center center}"+
              ".ncbi-alerts button.close:focus{ outline: 1px dotted #000000;}"+
              "@media (max-width: 639px){.ncbi-alerts button.close{right: 0px;}}"+
              ".ncbi-alerts p{margin-bottom: 0px; margin-top: 0px; font-size: 18px; line-height: 28px;}"+
              ".ncbi-alerts .list-items > p{font-size: 0.94em; display: inline;}"+
              ".ncbi-alerts .list-items > p a {font-weight: 700;}" +
              ".ncbi-alerts .list-items > p:not(:last-child)::after{margin:0 8px;content:'|'}"+
              "@media (min-width: 768px) and (max-width: 991px){.ncbi-alerts .list-items > p:nth-child(2)::after{content:'\\a'!important;white-space: pre;}}"+
              "@media(max-width: 767px){.ncbi-alerts .list-items > p{display:block;}.ncbi-alerts .list-items > p::after{content:''!important;}}"+
              "#shutdown_2021 {margin-bottom: 10px;}" +
              "</style>"
            );

            // Add styles
            var head = $("head");

            galert_css.appendTo(head);
            styles && $(styles).appendTo(head);

            // Choose selector, first nonempty selector wins
            var sel = selectors.shift();
            node = $(sel);
            while ((node.length == 0) && (sel = selectors.shift())) {
                node = $(sel);
            }

            if (node && node.length > 0 && show_alert_for_user(message_type)) {
                var msgnode = alert_jq.insertAfter(node[0]);
                msgnode.hide();
                msgnode.fadeIn("slow");

                // Transfer margin-bottom of node to msgnode
                var bmarg = node.css("margin-bottom");
                node.css("margin-bottom", "0");
                msgnode.css("margin-bottom", bmarg);

                // Attach event listener to close button
                var closeBtn = msgnode.find('button.close');
                if (!!closeBtn) {
                  closeBtn.on('click', ;
                }

                // Prevent multiple calls
                galert.complete = true;
            }

            /****************** NWS-5245 - 2021 Government Shutdown global banner ************/
            // This is for adding a second banner for Government Shutdown
            // This should be used only when there already is an active Global alert banner
            //display_government_shutdown_alert(node);
            /***************** End of NWS-5245 2021 Government SHutdown ****************/

          }

          /****************** NWS-5336 - Add opt-out modal to guide pages (ncbi_app=guide) ************/
          call_credret_optout_modal_js_file();
          /***************** End of NWS-5336 Add opt-out modal to guide pages (ncbi_app=guide) ****************/
        }

        galert = function(selectors, styles) {
            $(document).ready(function() {
                fix_browser_message();
                galert_message(selectors, styles);
            });
        }

    })(jQuery);    
  
  } else {
    /* Script version 1 */

    // Dictionary of alert text:
   var alert_text = {
       
      'submission' : '<p style="padding: 0.5em 2em; font-size: 12px; text-align: center; background: #FFB6B6 url(https://www.ncbi.nlm.nih.gov/core/icons/exclamation.png) no-repeat 5px center;">NCBI servers will be undergoing scheduled maintenance from 6:00 AM until 8:00 AM EST on February 6. The NCBI Submission Portal will not be available during this time.</p>',
      'eRA' : '<p style="padding: 0.5em 2em; font-size: 12px; text-align: center; background: #FFB6B6 url(/core/icons/exclamation.png) no-repeat 5px center;">eRA services and websites will be unavailable from 8:00 AM EDT on Friday, April 17 through 8:00 PM EDT on Monday, April 20.<br> During this time, grants will not be updated and you will not be able to access the RPPR.</p>',
      'probe' : '<p style="padding: 0.5em 2em; font-size: 12px; text-align: center; background: #FFB6B6 url(https://www.ncbi.nlm.nih.gov/core/icons/exclamation.png) no-repeat 5px center;">NCBI will be retiring the Probe database in April 2020. <a href="http://ncbiinsights.ncbi.nlm.nih.gov/2019/11/19/ncbi-will-retire-the-probe-database-in-april-2020/">Read more.</a></p>',
      'null' : '',
      'debug_alert': '<p style="padding: 0.5em 2em; font-size: 12px; text-align: center; background: #FFB6B6 url(https://www.ncbi.nlm.nih.gov/core/icons/exclamation.png) no-repeat 5px center;">Test alert for checking alert integration.</p>'
    };
       
    var now = new Date();

    // Selection rules:
    var choices = [
          
      // Rule: SD-992, eRA outage
           [ function() {
                var expires = new Date("Mon Apr 20 2020 23:00:00 EDT");
                return /ncbi\.nlm\.nih\.gov\/myncbi\/collections\/mybibliography|ncbi\.nlm\.nih\.gov\/myncbi\/.*\/cv|ncbi\.nlm\.nih\.gov\/sciencv/.exec(window.location.href) && (now < expires);
           }, "eRA"
           ],
      // Rule: SD-964, Probe retirement 
           [ function() {
                var expires = new Date("Thu Apr 30 2020 23:00:00 EDT");
                return /ncbi\.nlm\.nih\.gov\/probe/.exec(window.location.href) && (now < expires);
           }, "probe"
           ],
      // Debug alert
           [ window.location.hash.toString(), /\bdebug_alert\b/, "debug_alert"],
 
         // If the rule above fails, show nothing.
           [ /.*/, "null" ]
    ];
       
    (function($) {

        // GWC-332; remove when GWC-331 is complete.
        // MSIE 7 + Trident/ >= 4 means a later browser in compat mode.
        // IE begins defining "rv:" and says it's "like Gecko" starting with 11.
        // So we also remove the error for that.
        fix_browser_message = function() {
            var m = /MSIE\s+7.*\(Trident\/[4565789]\)/.exec(navigator.userAgent);
            if ((m && m != null && parseFloat(m[1]) >= 4.0) ||
                (/rv:.*like Gecko/.exec(navigator.userAgent))) {
                $(".error .browsername, .browsercheck .error").remove();
            }
        }

        galert_message = function(selectors, styles) {
    
           // Global flag prevents repeat calls
           if (typeof(galert.complete) != 'undefined') {
               return;
           }
       
           // Build message text based on rules.
           function get_message_data() {
       
               var m = $('meta[name=galert_type]');
       
               var message = null;
               var message_type = null;
       
               while (message == null && choices.length > 0) {
                   var rule = choices.shift();
       
                   urlpart = rule.shift();
       
                   // If string comes first, it's what to match against
                   if (typeof(urlpart) == "string") {
                       matcher = rule.shift();
                   } else {
                       matcher = urlpart;
                       urlpart = window.location.pathname.toString();
                   }

                   // Get matcher function; convert RE to function if needed.
                   if (matcher instanceof RegExp) {
                       var _matcher = matcher;
                       matcher =                    }
       
                   // If rule matches, choose message
                   var testresult = matcher(urlpart);
       
                   // If matcher returns a string, the string is the message type.
                   // If it returns boolean, then the next string in the rule is the message type.
                   message_type = typeof(testresult) == "string" ? testresult : rule.shift();
                   message = (typeof(testresult) == "string" || testresult) ? alert_text[message_type] : null;
       
                   if (message != null) {
                       var extra = rule.shift();
                       while (extra != null) {
                           message += alert_text[extra];
                           extra = rule.shift();
                       }
                   }
               }
               return [message_type, message]
           }

           // returns [message_type, message]; message_type is the name of the message in <choices>,
           // message is the message to show. If message is null, show nothing.       
           var message_data = get_message_data();
           var message_type = message_data.shift();
           message = message_data.shift();

           if (window.location.hash == "#test") { debugger; }

           // Show no message if message text is null or empty string
           if (message!==null && message!== "") {
             // Each expression returns list of length at least two; match[1] is result of first capture group.
             var alert_jq = $(
               '<div class="ncbi-alerts ' + message_type + '" id="' + message_type + '"><p>' +
               message +
               // Uncomment for shutdown...
               // ' For updates regarding government operating status see <a href="http://www.usa.gov" id="usa">USA.gov</a>.'+
               '' +
               '</p></div>'
             );


             // Standard alert style
             var galert_style = $(
               "<style type='text/css'>" +
               ".ncbi-alerts { background: none repeat scroll 0% 0% #671414;" +
               "color: #fff;padding: .231em 1.231em;}" +
               ".ncbi-alerts p { color: #fff; }" +
               ".ncbi-alerts a, .ncbi-alerts a:visited {color: #fff; background: none;}" +
               ".ncbi-alerts p {margin: 1em 0;padding: 0 0 0 1.5em; }" +
               ".ncbi-alerts p:nth-child(1) {background-image: url(\'/core/icons/information.png\');" +
               "background-position: left top;background-repeat: no-repeat }" +
               ".ncbi-alerts.subclosed p:nth-child(1) {background-image: url(\'/core/alerts/warning.png\');}" +
               ".ncbi-alerts.subclosed p { padding-left: 2em;}" +
               ".ncbi-alerts.pubmed, .ncbi-alerts.pubmed p {background-color: #97B0C8; color: #000;}" +
               ".ncbi-alerts a { text-decoration: underline !important; }" +
               ".ncbi-alerts.pubmed a, .ncbi-alerts.pubmed a:visited { color: #000; }" +
               // Next two lines set default to info style (blue) instead of shutdown style (red)
               ".ncbi-alerts, .ncbi-alerts p {background-color: #97B0C8; color: #000;}" +
               ".ncbi-alerts a, .ncbi-alerts a:visited { color: #000; }" +
               "</style>"
             );

             // Add styles
             var head = $("head");

             galert_style.appendTo(head);
             styles && $(styles).appendTo(head);

             // Choose selector, first nonempty selector wins
             var sel = selectors.shift();
             node = $(sel);
             while ((node.length == 0) && (sel = selectors.shift())) {
               node = $(sel);
             }

             if (node && node.length > 0) {
               var msgnode = alert_jq.insertAfter(node[0]);
               msgnode.hide();
               msgnode.fadeIn("slow");

               // Transfer margin-bottom of node to msgnode
               var bmarg = node.css("margin-bottom");
               node.css("margin-bottom", "0");
               msgnode.css("margin-bottom", bmarg);

               // Prevent multiple calls
               galert.complete = true;
             }

             /****************** NWS-5245 - 2021 Government Shutdown global banner ************/
             // This is for adding a second banner for Government Shutdown
             // This should be used only when there already is an active Global alert banner
             // display_government_shutdown_alert(node);
             /***************** End of NWS-5245 2021 Government SHutdown ****************/
           }

           /****************** NWS-5336 - Add opt-out modal to guide pages (ncbi_app=guide) ************/
           call_credret_optout_modal_js_file();
           /***************** End of NWS-5336 Add opt-out modal to guide pages (ncbi_app=guide) ****************/
        }

        galert = function(selectors, styles) {
            $(document).ready(;
        }

    })(jQuery);
  }
}
// PP-4241: Use JQuery to change all ftp protocol ncbi links to https protocol
(function ($) {
	$(function () {
		window.addEventListener('load', function (event) {
			var rInterval;
			function r() {
				if($.active == 0) {
				  clearInterval(rInterval);
					var $ftpLinks = $("a[href^='ftp://']");
				
					if ($ftpLinks.length) {
						$ftpLinks.attr('href', ;
						if (ncbi && ncbi.sg && ncbi.sg.ping) {
							ncbi.sg.ping([ 'jsevent=ftplinks-updated', 'replaced_ftp_with_https=true']);
						}
					}
				}
			}
			r();
			rInterval = setInterval(r, 1000);
		});
	});
})(jQuery);

/****************** NWS-5245 - 2021 Government Shutdown global banner ************/
function display_government_shutdown_alert(node) {

  /****************** DISABLED **********************/
  // Government Shutdown banner is disabled.
  // Please remove the following return statement to enable it.
  return;
  /****************** DISABLED **********************/


  //For testing purposes, enable this banner only when this specific parameter is present in the URL
  if(window.location.search.indexOf('enable-shutdown-banner') < 0)
  	return;

  var alert_body = '<ul style="margin:0; padding-left: 1em;"><li>Because of a lapse in government funding, the information on this website may not be up to date, ' +
      'transactions submitted via the website may not be processed, and the agency may not be able to respond to inquiries ' +
      'until appropriations are enacted. </li> ' +
      '<li>The NIH Clinical Center (the research hospital of NIH) is open. For more details about its operating status, ' +
      'please visit <a href="http://cc.nih.gov/">cc.nih.gov</a>. </li>' +
      '<li>Updates regarding government operating status and resumption of normal operations can be found at ' +
      '<a href="http://usa.gov/">USA.gov</a>.</li></ul>';
  var current_url = window.location.href;
  if(current_url.match(/pubmed(-dev)?\.ncbi\.nlm\.nih\.gov/)){
    alert_body = '<strong>PubMed is open</strong>, however it is being maintained with ' +
        'minimal staffing due to the lapse in government funding. Information ' +
        'will be updated to the extent possible, and the agency will attempt ' +
        'to respond to urgent operational inquiries.';
  } else if(current_url.match(/clinicaltrials\.gov/)){
    alert_body = '<div><a href="https://clinicaltrials.gov">ClinicalTrials.gov</a> is open, ' +
        'however it is being maintained with minimal staffing due to the lapse in government funding. ' +
        'Information submitted via the website will be processed to the extent possible, ' +
        'but there may be delays in processing and in responding to inquiries. </div>' +
        '<div>Updates regarding government operating status and resumption of normal operations can be found at ' +
        '<a href="https://www.usa.gov">USA.gov</a>.</div>';
  }
  var shutdown_2021_content = '<div class="ncbi-alerts shutdown_2021" id="shutdown_2021" role="region" aria-label="Alert" style="margin-bottom: 10px;">' +
      '<div class="ncbi-alert__shutdown-outer">' +
      '<div class="ncbi-alert__shutdown-inner">' +
      '<div>' + alert_body +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>';

  jQuery(shutdown_2021_content).insertAfter(node[0]);
}
/************* End of NWS-5245 - 2021 Government Shutdown global banner ************/

/****************** NWS-5336 - Add opt-out modal to guide pages (ncbi_app=guide) ************/
function call_credret_optout_modal_js_file() {
  // NWS-7009: Load credret_opt_out_modal.js only if the user is logged in
  var wcu = '';
  var match = document.cookie.match(/(^| )WebCubbyUser=([^;]+)/);
  if(match) {
    wcu = decodeURIComponent(match[2]);
  }
  if(wcu && wcu.indexOf("logged-in=true") > -1){
    var host_subdomain = 'cdn';
    if(window.location.hostname.match(/^(pubmed-dev.ncbi.nlm|dev.ncbi.nlm|dsubmit.ncbi.nlm|dev.nihms)\.nih\.gov/)) {
        host_subdomain = 'cdndev';
    }
    jQuery.getScript("https://" + host_subdomain + ".ncbi.nlm.nih.gov/static/account/credret_opt_out_modal.js", ;
  }
}
/************* End of NWS-5336 Add opt-out modal to guide pages (ncbi_app=guide) ************/

/****************** NWS-6374 - Adding vulnerability policy link ************/
(function ($) {
	$(function () {
    if(document.querySelector("a#vdp")===null && document.querySelector("a[href='https://www.hhs.gov/vulnerability-disclosure-policy/index.html']")===null) {
      var vulnerability_link = document.createElement('a');
      vulnerability_link.setAttribute("id", "vdp");
      vulnerability_link.setAttribute("href", "https://www.hhs.gov/vulnerability-disclosure-policy/index.html");
      vulnerability_link.append('HHS Vulnerability Disclosure');
      var link_container = document.createElement('div');
      link_container.setAttribute('style', 'text-align:center');
      link_container.append(vulnerability_link);
      document.body.append(link_container);
      if (ncbi && ncbi.sg && ncbi.sg.ping) {
        ncbi.sg.ping(['jsevent=vulnerability-link-added']);
      }
    }
	});
})(jQuery);
/*************** End: NWS-6374 - Adding vulnerability policy link **********/
