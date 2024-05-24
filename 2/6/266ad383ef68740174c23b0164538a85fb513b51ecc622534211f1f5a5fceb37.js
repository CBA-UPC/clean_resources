additional_data = {};



var additional_data = {
    afterValid: function(elem) {

        var elemLi = jQuery(elem).parents("li");


        if (elemLi.find(".LV_invalid_field").length > 0) {
            return;
        }



        if (elemLi.length > 0) {
            elemLi.removeClass("gfield_error");
            elemLi.find(".validation_message").remove();
        }
        jQuery(document).trigger("lv_after_field_valid", elem);


    },
    afterInvalid: function(elem) {


        var elemLi = jQuery(elem).parents("li.gfield");

        if ((elemLi.length > 0 && !jQuery(elemLi[0]).hasClass("gfield_error"))) {


            var htML = "";


            var $thiss = jQuery(elem).next(".LV_validation_message");

            if ($thiss.text().trim().length > 0) {

                $thiss.addClass("showed");
                htML += '<div class="gfield_description validation_message message_id_' + jQuery(elem).attr("id") + '">' + get_error_label($thiss, elem) + "" + $thiss.text() + '</div>';

            }



            jQuery(elemLi[0]).append(htML);


        }
        else {

            var str = jQuery(elem).attr("id");
           var getConfig = str.split("_");
            var separator = 'input_' + getConfig[1] + "_";

            var get_match = str.split(separator).pop();

            if (typeof all_validations[getConfig[1]][get_match] !== "undefined") {

                if (hasSubFields.indexOf(all_validations[getConfig[1]][get_match].fieldType) > -1 && jQuery(elemLi[0]).find(".message_id_" + jQuery(elem).attr("id")).length == 0) {
                    var htML = "";

                    var $thiss = jQuery(elem).next(".LV_validation_message");

                    if ($thiss.text().trim().length > 0) {


                        htML += '<div class="gfield_description validation_message message_id_' + jQuery(elem).attr("id") + '">' + get_error_label($thiss, elem) + "" + $thiss.text() + '</div>';

                    }
                    jQuery(elemLi[0]).append(htML);
                }
            }



        }
        elemLi.addClass("gfield_error");
        jQuery(document).trigger("lv_after_field_invalid", elem);

    }
};

function get_error_label(elem, field) {


    if (jQuery(field).attr("type") == "radio") {
        return "";
    }
    if (jQuery(elem).siblings("label").length == 0) {
        return "";
    }
    return jQuery(elem).siblings("label").text() + ": ";
}



jQuery(document).on("lv_field_on_focus", function(event, elem) {


    var src = elem.srcElement || elem.target;
    var elemLi = jQuery(src).parents("li.gfield");

    elemLi.removeClass("gfield_error");

    jQuery(elemLi[0]).find(".validation_message").remove();



});

jQuery(document).on("focus", ".gform_wrapper .address_line_2", function(event) {


    var src = event.srcElement || event.target;
    var elemLi = jQuery(src).parents("li.gfield");

    elemLi.removeClass("gfield_error");

    jQuery(elemLi[0]).find(".validation_message").remove();



});


