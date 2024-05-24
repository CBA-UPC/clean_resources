(function($) {
    "use strict";


    var handle_conditional_logic = false;
    jQuery(document).bind('gform_post_render', function(event, formID) {

        if ( typeof all_validations !== "undefined" && typeof window.lv_formIDs !== "undefined" &&  window.lv_formIDs.length > 0) {
            setTimeout(function() {
                
                for (var key in all_validations[formID]) {



                    if (hasSubFields.indexOf(all_validations[formID][key].fieldType) == -1 && jQuery("#field_" + formID + "_" + key).length > 0 && !jQuery("#field_" + formID + "_" + key).is(":visible") && jQuery("#gform_wrapper_" + formID).is(":visible")) {

                        if (all_validations[formID][key].fieldType == "radio") {

                            var radios = document.getElementsByName('input_' + key);
                         
                            for (var i = 0; i < radios.length; i++) {
                               radios[i].setAttribute("data-disabled","yes");
                            }
                            handle_conditional_logic = true;

                        } else {

                            all_validations[formID][key].disable();

                            handle_conditional_logic = true;
                        }


                    }

                    if (hasSubFields.indexOf(all_validations[formID][key].fieldType) !== -1 && jQuery("#input_" + formID + "_" + key).length > 0 && (!jQuery("#input_" + formID + "_" + key).is(":visible") && jQuery("#gform_wrapper_" + formID).is(":visible"))) {

                        all_validations[formID][key].disable();

                        handle_conditional_logic = true;
                    }
                }
                
                
                var defaualt_on_click = jQuery(".gform_previous_button:visible").attr("onclick");
                var defaualt_save_click = jQuery(".gform_save_link:visible").attr("onclick");



                jQuery(".gform_previous_button").attr("onclick", " jQuery('#gform_" + formID + "').addClass('back_bt_press'); " + defaualt_on_click);
                jQuery(".gform_save_link").attr("onclick", " jQuery('#gform_" + formID + "').addClass('save_bt_press'); " + defaualt_save_click);
            }, 100);


        }
    });




    jQuery(document).bind('gform_post_conditional_logic', function(a, b, c, d) {

        if ( typeof all_validations !== "undefined" && typeof window.lv_formIDs !== "undefined" &&  window.lv_formIDs.length > 0) {
            for (var key in all_validations[b]) {



                if (jQuery("#field_" + b + "_" + key).length > 0 && (!jQuery("#input_" + b + "_" + key).is(":visible") && (jQuery("#gform_wrapper_" + b).is(":visible")))) {


                    if (all_validations[b][key].fieldType == "radio") {
                        var radios = document.getElementsByName('input_' + key);
                        for (var i = 0; i < radios.length; i++) {
                            radios[i].setAttribute("data-disabled","yes");
                        }
                        handle_conditional_logic = true;

                    } else {

                        all_validations[b][key].disable();

                        handle_conditional_logic = true;
                    }

                }
                else if(hasSubFields.indexOf(all_validations[b][key].fieldType) !== -1 && jQuery("#input_" + b + "_" + key).length > 0 && !jQuery("#input_" + b + "_" + key).is(":visible")){

                    all_validations[b][key].disable();

                    handle_conditional_logic = true;
                }
                else {

                    if (all_validations[b][key].fieldType == "radio") {

                        var radios = document.getElementsByName('input_' + key);
                        for (var i = 0; i < radios.length; i++) {
                           radios[i].removeAttribute("data-disabled");
                        }


                    } else {
                        all_validations[b][key].enable();
                    }


                }
            }
        }

    });






}(jQuery));

var hasSubFields = new Array("name", "date", "time", "address");


