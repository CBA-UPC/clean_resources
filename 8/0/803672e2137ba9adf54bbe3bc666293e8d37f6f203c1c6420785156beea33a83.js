// LiveValidation 1.4 (standalone version)
// Copyright (c) 2007-2010 Alec Hill (www.livevalidation.com)
// LiveValidation is licensed under the terms of the MIT License

/*********************************************** LiveValidation class ***********************************/


var jqobjPrime = null;
var show_error_combined = true;
var lv_offset = 
var LiveValidation = 

function checkDay(day, month, year) {
    var valid = false;
    if (day >= 1) {
        // For months with 30 days.
        if ((month == 4 || month == 6 || month == 9 || month == 11) && day <= 30) {
            valid = true;
        }
        // For months with 31 days.
        if ((month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) && day <= 31) {
            valid = true;
        }
        // For February.
        if (month == 2)
        {
            if (day <= 28) {
                valid = true;
            } else if (day == 29) {
                if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
                    valid = true;
                } //else invalid
            }
        }
    } //else date is not valid
    return valid;
}


LiveValidation.VERSION = '1.4 standalone';

/** element types constants ****/

LiveValidation.TEXTAREA = 1;
LiveValidation.TEXT = 2;
LiveValidation.PASSWORD = 3;
LiveValidation.CHECKBOX = 4;
LiveValidation.SELECT = 5;
LiveValidation.FILE = 6;
LiveValidation.CHECKBOX_GF = 9;
LiveValidation.RADIO = 7;

/****** Static methods *******/

/**
 *	pass an array of LiveValidation objects and it will validate all of them
 *	
 *	@param validations {Array} - an array of LiveValidation objects
 *	@return {Bool} - true if all passed validation, false if any fail						
 */
LiveValidation.massValidate = 

/****** prototype ******/

LiveValidation.prototype = {
    validClass: 'LV_valid',
    invalidClass: 'LV_invalid',
    messageClass: 'LV_validation_message',
    validFieldClass: 'LV_valid_field',
    invalidFieldClass: 'LV_invalid_field',
    /**
     *	initialises all of the properties and events
     *
     * @param - Same as constructor above
     */
    initialize: function(element, optionsObj) {
        var self = this;

        if (!element)
            throw new Error("LiveValidation::initialize - No element reference or element id has been provided!");
        this.element = element.nodeName ? element : document.getElementById(element);

        if (!this.element)
            throw new Error("LiveValidation::initialize - No element with reference or id of '" + element + "' exists!");
        // default properties that could not be initialised above
        this.validations = [];
        this.elementType = this.getElementType();
        this.form = this.element.form;



        // options
        var options = optionsObj || {};

        if (options.jqObj && !jqobjPrime) {
            jqobjPrime = options.jqObj;
        }

        this.fieldType = options.fieldType;
        if (typeof this.form == "undefined") {
            var Forms = jqobjPrime(this.element).parents("form");
            this.form = Forms[0];
        }

        this.element.onfocus = function(e) {

            var elems = document.getElementsByClassName("LV_validation_message");

            if (elems.length > 0) {
                for (var i = 0; i < elems.length; i++) {
                    var classes = elems[i].className;
                    elems[i].className = classes + " hide_validation";

                }
            }


            if (!jqobjPrime(this).hasClass("hasDatepicker")) {
                e.target.className.replace(/\bhide_validation\b/, '');
            }



        }



        this.validMessage = options.validMessage || " ";
        var node = options.insertAfterWhatNode || this.element;
        this.insertAfterWhatNode = node.nodeType ? node : document.getElementById(node);
        this.onlyOnBlur = options.onlyOnBlur || false;
        this.wait = options.wait || 0;
        this.onlyOnSubmit = options.onlyOnSubmit || false;
        // hooks
        this.beforeValidation = options.beforeValidation || function() {
        };
        this.beforeValid = options.beforeValid || function() {
        };
        this.onValid = options.onValid || function() {
            this.insertMessage(this.createMessageSpan());
            this.addFieldClass();
        };
        this.afterValid = options.afterValid || function() {
        };
        this.beforeInvalid = options.beforeInvalid || function() {
        };
        this.onInvalid = options.onInvalid || 
        this.afterInvalid = options.afterInvalid || function() {
        };
        this.afterValidation = options.afterValidation || function() {
        };

        // add to form if it has been provided
        if (this.form) {
            this.formObj = LiveValidationForm.getInstance(this.form);

            this.formObj.addField(this);
        }
        // events
        // collect old events
        this.oldOnFocus = this.element.onfocus || function() {
        };
        this.oldOnBlur = this.element.onblur || function() {
        };

        if (this.fieldType == "checkbox") {
            this.oldOnClick_check = {};


            var radioUL = this.element;

            var len = radioUL.childNodes.length;
            for (var i = 0; i < radioUL.childNodes.length; i++) {
                this.oldOnClick_check[radioUL.childNodes[i].querySelector('input').id] = (radioUL.childNodes[i].querySelector('input').onclick || function() {
                });
            }


        } else {
            this.oldOnClick_check = [];
            this.oldOnClick = this.element.onclick || function() {
            };
        }

        this.oldOnChange = this.element.onchange || function() {
        };
        this.oldOnKeyup = this.element.onkeyup || function() {
        };
        this.element.onfocus = function(e) {



            self.doOnFocus(e);
            jqobjPrime(document).trigger("lv_field_on_focus", e);
            return self.oldOnFocus.call(this, e);
        }
        if (!this.onlyOnSubmit) {

            switch (this.elementType) {




                case LiveValidation.CHECKBOX_GF:

                    var radioUL = this.element;

                    var len = radioUL.childNodes.length;
                    for (var i = 0; i < radioUL.childNodes.length; i++) {




                        radioUL.childNodes[i].querySelector('input').onclick = function(e, i) {

                            self.validate();

                            return self.oldOnClick_check[this.id].call(this, e);
                        }

                        radioUL.childNodes[i].querySelector('input').onblur = 


                        radioUL.childNodes[i].querySelector('input').onfocus = function(e) {


                            self.doOnFocus(e);
                            jqobjPrime(document).trigger("lv_field_on_focus", e);
                            return self.oldOnFocus.call(this, e);
                        }




                    }
                    break;


                case LiveValidation.CHECKBOX:

                case LiveValidation.RADIO:

                case LiveValidation.SELECT:


                    this.element.onblur = function(e) {


                        if (hasSubFields.indexOf(self.fieldType) == -1) {

                            return  self.doOnBlur(e);
                        }
                        else {
                            var elemLI = jqobjPrime(self.element).parents("li.gfield");

//                   
                            elemLI.find("input , select").each(function(k, v) {


                                var str = jQuery(this).attr("id");
                                var getConfig = str.split("_");
                                var separator = 'input_' + getConfig[1] + "_";
                                var get_match = str.split(separator).pop();

                                if (typeof all_validations[getConfig[1]][getConfig[2] + "_" + getConfig[3]] !== "undefined") {


                                    all_validations[getConfig[1]][getConfig[2] + "_" + getConfig[3]].validate();
                                }
                            });

                            // return  self.doOnBlur(e);
                        }


                        //  self.oldOnBlur.call(this, e);


                    }
                    break;
                case LiveValidation.FILE:
                    this.element.onchange = 
                    break;
                default:

                    this.element.onblur = function(e) {
                        if (hasSubFields.indexOf(self.fieldType) == -1) {

                            return  self.doOnBlur(e);
                        }
                        else {
                            var elemLI = jqobjPrime(self.element).parents("li.gfield");

//               
                            elemLI.find("input , select").each(function(k, v) {

                                var str = jQuery(this).attr("id");
                                var getConfig = str.split("_");
                                var separator = 'input_' + getConfig[1] + "_";
                                var get_match = str.split(separator).pop();
                                        
                                if (typeof all_validations[getConfig[1]] !== "undefined" && typeof all_validations[getConfig[1]][getConfig[2] + "_" + getConfig[3]] !== "undefined") {


                                    all_validations[getConfig[1]][getConfig[2] + "_" + getConfig[3]].validate();
                                }
                            });

                            // return  self.doOnBlur(e);
                        }


                        //  self.oldOnBlur.call(this, e);
                    }
            }
        }
    },
    /**
     *	destroys the instance's events (restoring previous ones) and removes it from any LiveValidationForms
     */
    destroy: 
    /**
     *	adds a validation to perform to a LiveValidation object
     *
     *	@param validationFunction {Function} - validation function to be used (ie Validate.Presence )
     *	@param validationParamsObj {Object} - parameters for doing the validation, if wanted or necessary
     * @return {Object} - the LiveValidation object itself so that calls can be chained
     */
    add: 
    /**
     *	removes a validation from a LiveValidation object - must have exactly the same arguments as used to add it 
     *
     *	@param validationFunction {Function} - validation function to be used (ie Validate.Presence )
     *	@param validationParamsObj {Object} - parameters for doing the validation, if wanted or necessary
     *  @return {Object} - the LiveValidation object itself so that calls can be chained
     */
    remove: 
    /**
     * makes the validation wait the alotted time from the last keystroke 
     */
    deferValidation: 
    /**
     * sets the focused flag to false when field loses focus 
     */
    doOnBlur: 
    /**
     * sets the focused flag to true when field gains focus 
     */
    doOnFocus: 
    /**
     *	gets the type of element, to check whether it is compatible
     *
     *	@param validationFunction {Function} - validation function to be used (ie Validate.Presence )
     *	@param validationParamsObj {Object} - parameters for doing the validation, if wanted or necessary
     */
    getElementType: function() {



        var nn = this.element.nodeName.toUpperCase();
        var nt = this.element.type.toUpperCase();

        switch (true) {
            case (nn == 'TEXTAREA'):
                return LiveValidation.TEXTAREA;
            case (nn == 'INPUT' && nt == 'TEXT'):
                return LiveValidation.TEXT;
            case (nn == 'INPUT' && nt == 'EMAIL'):
                return LiveValidation.TEXT;
            case (nn == 'INPUT' && nt == 'URL'):
                return LiveValidation.TEXT;
            case (nn == 'INPUT' && nt == 'TEL'):
                return LiveValidation.TEXT;
            case (nn == 'INPUT' && nt == 'NUMBER'):
                return LiveValidation.TEXT;
            case (nn == 'INPUT' && nt == 'PASSWORD'):
                return LiveValidation.PASSWORD;
            case (nn == 'INPUT' && nt == 'CHECKBOX'):
                return LiveValidation.CHECKBOX;
            case (nn == 'INPUT' && nt == 'RADIO'):
                return LiveValidation.RADIO;
            case (nn == 'INPUT' && nt == 'FILE'):
                return LiveValidation.FILE;
            case (nn == 'SELECT'):
                return LiveValidation.SELECT;
            case (nn == 'UL'):
                return LiveValidation.CHECKBOX_GF;
            case (nn == 'INPUT'):
                throw new Error('LiveValidation::getElementType - Cannot use LiveValidation on an ' + nt.toLowerCase() + ' input!');
            default:
                throw new Error('LiveValidation::getElementType - Element must be an input, select, or textarea - ' + nn.toLowerCase() + ' was given!');
        }
    },
    /**
     *	loops through all the validations added to the LiveValidation object and checks them one by one
     *
     *	@param validationFunction {Function} - validation function to be used (ie Validate.Presence )
     *	@param validationParamsObj {Object} - parameters for doing the validation, if wanted or necessary
     *  @return {Boolean} - whether the all the validations passed or if one failed
     */
    doValidations: 
    /**
     *	performs validation on the element and handles any error (validation or otherwise) it throws up
     *
     *	@param validationFunction {Function} - validation function to be used (ie Validate.Presence )
     *	@param validationParamsObj {Object} - parameters for doing the validation, if wanted or necessary
     *  @return {Boolean} - whether the validation has passed or failed
     */
    validateElement: function(validationFunction, validationParamsObj) {
        // check whether we should display the message when empty
        switch (validationFunction) {
            case Validate.Presence:
            case Validate.Confirmation:
            case Validate.Acceptance:
                this.displayMessageWhenEmpty = true;
                break;
            case Validate.Custom:
                if (validationParamsObj.displayMessageWhenEmpty)
                    this.displayMessageWhenEmpty = true;
                break;
        }
        if (this.elementType == LiveValidation.RADIO) {
            value = this.element.checked;
        }
        else {


            if (this.element.selectedIndex == -1 && this.elementType == LiveValidation.SELECT) {
                var value = "";
            } else {
                var value = (this.elementType == LiveValidation.SELECT) ? this.element.options[this.element.selectedIndex].value : this.element.value;

            }

            if (validationFunction == Validate.Acceptance || validationFunction == Validate.AcceptanceCheckbox) {
                if (this.elementType != LiveValidation.CHECKBOX)
                    throw new Error('LiveValidation::validateElement - Element to validate acceptance must be a checkbox!');
                value = this.element.checked;
            }
        }
        // now validate
        var isValid = true;
        try {
            validationFunction(value, validationParamsObj);
        } catch (error) {
            if (error instanceof Validate.Error) {
                if (value !== '' || (value === '' && this.displayMessageWhenEmpty)) {
                    this.validationFailed = true;
                    // Opera 10 adds stacktrace after newline
                    this.message = error.message.split('\n')[0];
                    isValid = false;
                }
            } else {
                throw error;
            }
        } finally {
            return isValid;
        }
    },
    /**
     *	makes it do the all the validations and fires off the various callbacks
     *
     *  @return {Boolean} - whether the all the validations passed or if one failed
     */
    validate: function() {

        if (!this.checkIfDisable(this.element)) {
            this.beforeValidation();
            var isValid = this.doValidations();
            if (isValid) {
                this.beforeValid();
                this.onValid();

                this.afterValid(this.element);
                return true;
            } else {
                this.beforeInvalid();
                this.onInvalid();

                this.afterInvalid(this.element);
                return false;
            }
            this.afterValidation();
        } else {
            return true;
        }
    },
    /**
     *  enables the field
     *
     *  @return {LiveValidation} - the LiveValidation object for chaining
     */
    enable: 
    /**
     *  disables the field and removes any message and styles associated with the field
     *
     *  @return {LiveValidation} - the LiveValidation object for chaining
     */
    disable: function() {

        this.element.setAttribute("data-disabled", "yes");
        this.removeMessageAndFieldClass();
        return this;
    },
    checkIfDisable: 
    /** Message insertion methods ****************************
     * 
     * These are only used in the onValid and onInvalid callback functions and so if you override the default callbacks,
     * you must either impliment your own functions to do whatever you want, or call some of these from them if you 
     * want to keep some of the functionality
     */

    /**
     *	makes a span containg the passed or failed message
     *
     * @return {HTMLSpanObject} - a span element with the message in it
     */
    createMessageSpan: 
    /**
     *	inserts the element containing the message in place of the element that already exists (if it does)
     *
     * @param elementToIsert {HTMLElementObject} - an element node to insert
     */
    insertMessage: 
    /**
     *	changes the class of the field based on whether it is valid or not
     */
    addFieldClass: 
    /**
     *	removes the message element if it exists, so that the new message will replace it
     */
    removeMessage: 
    /**
     *	removes the class that has been applied to the field to indicte if valid or not
     */
    removeFieldClass: 
    /**
     *	removes the message and the field class
     */
    removeMessageAndFieldClass: 

}

/*************************************** LiveValidationForm class ****************************************/
/**
 * This class is used internally by LiveValidation class to associate a LiveValidation field with a form it is icontained in one
 * 
 * It will therefore not really ever be needed to be used directly by the developer, unless they want to associate a LiveValidation 
 * field with a form that it is not a child of, or add some extra functionality via the hooks (access through a LiveValidation object's formObj property)
 */

/**
 *	handles validation of LiveValidation fields belonging to this form on its submittal
 *	
 *	@param element {HTMLFormElement} - a dom element reference to the form to turn into a LiveValidationForm
 */
var LiveValidationForm = 

/**
 * namespace to hold instances
 */
LiveValidationForm.instances = {};

/**
 *	gets the instance of the LiveValidationForm if it has already been made or creates it if it doesnt exist
 *	
 *	@param element {mixed} - a dom element reference to or id of a form
 */
LiveValidationForm.getInstance = 




LiveValidationForm.prototype = {
    beforeValidation: function() {
    },
    onValid: function() {
    },
    onInvalid: function() {
    },
    afterValidation: function() {
    },
    /**
     *	constructor for LiveValidationForm - handles validation of LiveValidation fields belonging to this form on its submittal
     *	
     *	@param element {HTMLFormElement} - a dom element reference to the form to turn into a LiveValidationForm
     */
    initialize: function(element) {


        this.name = element.id;
        this.element = element;
        this.fields = [];
        // preserve the old onsubmit event
        this.oldOnSubmit = this.element.onsubmit || 
        var self = this;

        this.element.setAttribute("onsubmit", "return false;");
        var submitbutton = jQuery(this.element).find(':submit').attr('id');


        this.element.onsubmit = function(e) {



            var moveTo = 0;
            var elem_form = e.currentTarget;

            if ("undefined" === typeof elem_form) {
                return true;
            }



            if (hasClass(elem_form, "back_bt_press")) {
                return true;
            }

            if (hasClass(elem_form, "save_bt_press")) {
                return true;
            }
            var ret = false;


            self.beforeValidation(),
                    self.valid = LiveValidation.massValidate(self.fields);
            self.valid ? self.onValid() : self.onInvalid();
            self.afterValidation();

            if (self.valid)
                ret = self.oldOnSubmit.call(this, e || window.event) !== false;


            var parent = document.querySelector(".gform_body");
            var child = document.querySelector(".errorMessages");

            if (child) {
                parent.removeChild(child);
            }

            if (show_error_combined == true) {
                //showing error messages
                var d = document.getElementsByClassName("LV_invalid_field");
                if (d.length > 0) {


                    var formIDConfig = self.name.split("_");
                    var ul = document.createElement('ul');
                    var section = document.querySelector(".gform_body");
                    ul.className = "errorMessages";
                    var contain_names = new Array();
                    var containe_checks = new Array();
                    section.insertBefore(ul, section.firstChild);
                    for (var i = 0; i < d.length; i++) {


                        var ID = d[i].id;

                        if (contain_names.indexOf(d[i].name) == -1) {
                            contain_names.push(d[i].name);
                        }
                        else {
                            continue;
                        }


                        if (d[i].type == "checkbox") {


                            var a = d[i].name;
                            var name = a.split(".")[0];

                            if (containe_checks.indexOf(name) == -1) {
                                containe_checks.push(name);
                            }
                            else {
                                continue;
                            }

                        }
                        if (d[i].tagName == "UL") {
                            continue;
                        }


                        var error_message_elem = d[i].nextSibling;
                        var label_elem = document.querySelector(".gfield_label[for='" + ID + "']");
                        if (!label_elem) {

                            label_elem = document.getElementById(ID + "_label");
                        }

                        if (!label_elem) {

                            label_elem = document.querySelector("label[for='" + ID + "']");
                        }


                        if (d[i].type == "radio") {
                            var get_mainLI = "field_" + formIDConfig[1] + "_" + d[i].name.substr(6);

                            label_elem = document.querySelector("#" + get_mainLI + " .gfield_label");

                        }
                        if (d[i].type == "checkbox") {
                            var a = d[i].name;
                            var name = a.split(".")[0];

                            var get_mainLI = "field_" + formIDConfig[1] + "_" + name.substr(6);

                            label_elem = document.querySelector("#" + get_mainLI + " .gfield_label");

                        }





                        var li_elem = label_elem.parentNode;



                        if (moveTo == 0) {
                            moveTo = jqobjPrime(li_elem).offset().top;
                        }
                        var li = document.createElement('li');

                        //ul.appendChild(li);


                        if (label_elem && error_message_elem) {

                            var error_message_text = (error_message_elem.textContent || error_message_elem.innerText);
                            var label_text1 = (label_elem.textContent || label_elem.innerText);
                            if (label_text1 == "" || label_text1 == "*") {

                                label_elem = document.querySelector("#" + ID + "_container label[for='" + ID + "']");
                                var label_text1 = (label_elem.textContent || label_elem.innerText);

                            }

                            li.innerHTML = "<span><a href='#' onclick='window.scrollTo(0, " + jqobjPrime(li_elem).offset().top + "); return false;'>" + label_text1 + "</a></span> " + error_message_text + " ";
                        }





                    }

                    var ul_j = jqobjPrime('.errorMessages');


                    moveTo = window.lv_offset(moveTo);
                    jqobjPrime('body,html').animate({
                        scrollTop: moveTo
                    }, 500);

                }

                var elems = document.getElementsByClassName("LV_validation_message");

//                if (elems.length > 0) {
//                    for (var i = 0; i < elems.length; i++) {
//                        var classes = elems[i].className;
//                        elems[i].className = classes + " hide_validation";
//
//                    }
//                }


            }

            var getFormIDconfig = self.name.split("_");


            if (false === ret) {
                window['gf_submitting_' + getFormIDconfig[1]] = false;
            }
            if (!ret) {
                if (lv_gf_is_ajax == "yes") {
                    jqobjPrime(".gform_ajax_spinner").remove();
                }
                return ret;
            }

        }
    },
    /**
     *	adds a LiveValidation field to the forms fields array
     *	
     *	@param element {LiveValidation} - a LiveValidation object
     */
    addField: 
    /**
     *	removes a LiveValidation field from the forms fields array
     *	
     *	@param victim {LiveValidation} - a LiveValidation object
     */
    removeField: 
    /**
     *	destroy this instance and its events
     *
     * @param force {Boolean} - whether to force the detruction even if there are fields still associated
     */
    destroy: 

}

/*************************************** Validate class ****************************************/
/**
 * This class contains all the methods needed for doing the actual validation itself
 *
 * All methods are static so that they can be used outside the context of a form field
 * as they could be useful for validating stuff anywhere you want really
 *
 * All of them will return true if the validation is successful, but will raise a ValidationError if
 * they fail, so that this can be caught and the message explaining the error can be accessed ( as just 
 * returning false would leave you a bit in the dark as to why it failed )
 *
 * Can use validation methods alone and wrap in a try..catch statement yourself if you want to access the failure
 * message and handle the error, or use the Validate::now method if you just want true or false
 */

var Validate = {
    /**
     *	validates that the field has been filled in
     *
     *	@param value {mixed} - value to be checked
     *	@param paramsObj {Object} - parameters for this particular validation, see below for details
     *
     *	paramsObj properties:
     *							failureMessage {String} - the message to show when the field fails validation 
     *													  (DEFAULT: "Can't be empty!")
     */
    Presence: function(value, paramsObj) {



        var paramsObj = paramsObj || {};
        var message = paramsObj.failureMessage || "Can't be empty!";

        if (typeof paramsObj.mask !== "undefined") {
            if (paramsObj.mask == value) {
                Validate.fail(message);
            } else {
                setTimeout(function() {

                    if (!hasClass(all_validations[paramsObj.form_id][paramsObj.livevalidkey].element, "LV_invalid_field")) {
                        all_validations[paramsObj.form_id][paramsObj.livevalidkey].validate();
                    }


                }, 300);
            }


        }

        if (value === '' || value === null || value === undefined || value == "First Name" || value == "Last Name" || value == "Middle Name")
            Validate.fail(message);
        return true;
    },
    /**
     *	validates that the value is numeric, does not fall within a given range of numbers
     *	
     *	@param value {mixed} - value to be checked
     *	@param paramsObj {Object} - parameters for this particular validation, see below for details
     *
     *	paramsObj properties:
     *							notANumberMessage {String} - the message to show when the validation fails when value is not a number
     *													  	  (DEFAULT: "Must be a number!")
     *							notAnIntegerMessage {String} - the message to show when the validation fails when value is not an integer
     *													  	  (DEFAULT: "Must be a number!")
     *							wrongNumberMessage {String} - the message to show when the validation fails when is param is used
     *													  	  (DEFAULT: "Must be {is}!")
     *							tooLowMessage {String} 		- the message to show when the validation fails when minimum param is used
     *													  	  (DEFAULT: "Must not be less than {minimum}!")
     *							tooHighMessage {String} 	- the message to show when the validation fails when maximum param is used
     *													  	  (DEFAULT: "Must not be more than {maximum}!")
     *							is {Int} 					- the length must be this long 
     *							minimum {Int} 				- the minimum length allowed
     *							maximum {Int} 				- the maximum length allowed
     *                         onlyInteger {Boolean} - if true will only allow integers to be valid
     *                                                             (DEFAULT: false)
     *
     *  NB. can be checked if it is within a range by specifying both a minimum and a maximum
     *  NB. will evaluate numbers represented in scientific form (ie 2e10) correctly as numbers				
     */
    Numericality: 
    /**
     *	validates against a RegExp pattern
     *	
     *	@param value {mixed} - value to be checked
     *	@param paramsObj {Object} - parameters for this particular validation, see below for details
     *
     *	paramsObj properties:
     *							failureMessage {String} - the message to show when the field fails validation
     *													  (DEFAULT: "Not valid!")
     *							pattern {RegExp} 		- the regular expression pattern
     *													  (DEFAULT: /./)
     *             negate {Boolean} - if set to true, will validate true if the pattern is not matched
     *                           (DEFAULT: false)
     *
     *  NB. will return true for an empty string, to allow for non-required, empty fields to validate.
     *		If you do not want this to be the case then you must either add a LiveValidation.PRESENCE validation
     *		or build it into the regular expression pattern
     */
    Format: function(value, paramsObj) {




        var value = String(value);
        var paramsObj = paramsObj || {};
        var message = paramsObj.failureMessage || "Looks like an invalid pattern.";
        var pattern = paramsObj.pattern || /./;
        var negate = paramsObj.negate || false;




        var patternRes = pattern.test(value);

        if (!negate && !patternRes) {

            Validate.fail(message); // normal 
        }

        if (negate && patternRes) {
            Validate.fail(message); // negated 
        }


        return true;
    },
    /**
     *	validates that the field contains a valid email address
     *	
     *	@param value {mixed} - value to be checked
     *	@param paramsObj {Object} - parameters for this particular validation, see below for details
     *
     *	paramsObj properties:
     *							failureMessage {String} - the message to show when the field fails validation
     *													  (DEFAULT: "Must be a number!" or "Must be an integer!")
     */
    Email: function(value, paramsObj) {
        var paramsObj = paramsObj || {};
        var message = paramsObj.failureMessage || "Must be a valid email address!";
        Validate.Format(value, {
            failureMessage: message,
            pattern: /^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i
        });
        return true;
    },
    Website: function(value, paramsObj) {
        var paramsObj = paramsObj || {};
        var message = paramsObj.failureMessage || "Must be a valid url!";
        Validate.Format(value, {
            failureMessage: message,
            pattern: /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
                    ///^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]\.[a-zA-Z]{2,}$/
        });
        return true;
    },
    Name: 
    Phone: function(value, paramsObj) {
        var paramsObj = paramsObj || {};
        var formate = paramsObj.phoneFormate || "";
        if (formate == 'standard') {
            var message = paramsObj.failureMessage || "Phone format:(###)###-####";
            var phonefield = paramsObj.phonefield;
            var newnumber = "";
            for (place = 0; place <= value.length; place++)
                newnumber = newnumber + value.charAt(place).replace(/\D*/, '');
            if (newnumber.length == 10) {

                //  document.getElementById(phonefield).value = '(' + newnumber.substring(0, 3) + ')' + newnumber.substring(3, 6) + '-' + newnumber.substring(6, newnumber.length);
                return true;
            }
            else if (newnumber.length == 0) {
                Validate.fail(message);
                return false;
            }
            else {
                Validate.fail(message);
                return false;
            }
        } else {
            var message = paramsObj.failureMessage || "only numbers!";
            Validate.Format(value, {
                failureMessage: message,
                pattern: /^[0-9()-]*$/
                        //                    /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
                        //                    /^[0-9()-]*$/
            });
        }
        return true;
    },
    /**
     *	validates the length of the value
     *	
     *	@param value {mixed} - value to be checked
     *	@param paramsObj {Object} - parameters for this particular validation, see below for details
     *
     *	paramsObj properties:
     *							wrongLengthMessage {String} - the message to show when the fails when is param is used
     *													  	  (DEFAULT: "Must be {is} characters long!")
     *							tooShortMessage {String} 	- the message to show when the fails when minimum param is used
     *													  	  (DEFAULT: "Must not be less than {minimum} characters long!")
     *							tooLongMessage {String} 	- the message to show when the fails when maximum param is used
     *													  	  (DEFAULT: "Must not be more than {maximum} characters long!")
     *							is {Int} 					- the length must be this long 
     *							minimum {Int} 				- the minimum length allowed
     *							maximum {Int} 				- the maximum length allowed
     *
     *  NB. can be checked if it is within a range by specifying both a minimum and a maximum				
     */
    Length: 
    /**
     *	validates that the value falls within a given set of values
     *	
     *	@param value {mixed} - value to be checked
     *	@param paramsObj {Object} - parameters for this particular validation, see below for details
     *
     *	paramsObj properties:
     *							failureMessage {String} - the message to show when the field fails validation
     *													  (DEFAULT: "Must be included in the list!")
     *							within {Array} 			- an array of values that the value should fall in 
     *													  (DEFAULT: [])	
     *							allowNull {Bool} 		- if true, and a null value is passed in, validates as true
     *													  (DEFAULT: false)
     *             partialMatch {Bool} 	- if true, will not only validate against the whole value to check but also if it is a substring of the value 
     *													  (DEFAULT: false)
     *             caseSensitive {Bool} - if false will compare strings case insensitively
     *                          (DEFAULT: true)
     *             negate {Bool} 		- if true, will validate that the value is not within the given set of values
     *													  (DEFAULT: false)			
     */
    Inclusion: 
    /**
     *	validates that the value does not fall within a given set of values
     *	
     *	@param value {mixed} - value to be checked
     *	@param paramsObj {Object} - parameters for this particular validation, see below for details
     *
     *	paramsObj properties:
     *							failureMessage {String} - the message to show when the field fails validation
     *													  (DEFAULT: "Must not be included in the list!")
     *							within {Array} 			- an array of values that the value should not fall in 
     *													  (DEFAULT: [])
     *							allowNull {Bool} 		- if true, and a null value is passed in, validates as true
     *													  (DEFAULT: false)
     *             partialMatch {Bool} 	- if true, will not only validate against the whole value to check but also if it is a substring of the value 
     *													  (DEFAULT: false)
     *             caseSensitive {Bool} - if false will compare strings case insensitively
     *                          (DEFAULT: true)			
     */
    Exclusion: 
    /**
     *	validates that the value matches that in another field
     *	
     *	@param value {mixed} - value to be checked
     *	@param paramsObj {Object} - parameters for this particular validation, see below for details
     *
     *	paramsObj properties:
     *							failureMessage {String} - the message to show when the field fails validation
     *													  (DEFAULT: "Does not match!")
     *							match {String} 			- id of the field that this one should match						
     */
    Confirmation: 
    /**
     *	validates that the value is true (for use primarily in detemining if a checkbox has been checked)
     *	
     *	@param value {mixed} - value to be checked if true or not (usually a boolean from the checked value of a checkbox)
     *	@param paramsObj {Object} - parameters for this particular validation, see below for details
     *
     *	paramsObj properties:
     *							failureMessage {String} - the message to show when the field fails validation 
     *													  (DEFAULT: "Must be accepted!")
     */
    Acceptance: 
    ConfirmEmail: function(value, paramsObj) {
       
        var paramsObj = paramsObj || {};
        var message = paramsObj.failureMessage || "Must be accepted!";
 console.log('runs');
        var ParentValue = document.getElementById(paramsObj.parentField).value;
                console.log(value);
                console.log(ParentValue);


        if (value !== ParentValue) {
            Validate.fail(message);
        }

        return true;
    },
    AcceptanceCheckbox: function(value, paramsObj) {

        var paramsObj = paramsObj || {};
        var message = paramsObj.failureMessage || "Must be accepted!";

        var get_mainUL = "input_" + paramsObj.form_id + "_" + paramsObj.field_id;

        var radioUL = document.getElementById(get_mainUL);

        var len = radioUL.childNodes.length;
        for (var i = 0; i < radioUL.childNodes.length; i++) {
            if (radioUL.childNodes[i].querySelector('input').checked) {
                if (typeof radioUL.classList == "undefined") {
                    removeClass(radioUL, 'LV_invalid_field');
                } else {
                    radioUL.classList.remove("LV_invalid_field");
                }




                for (var j = 0; j < radioUL.childNodes.length; j++) {
                    removeClass(radioUL.childNodes[j].querySelector('input'), 'LV_invalid_field');
                }

                return true;
            }

        }




        if (!value) {

            if (typeof radioUL.classList == "undefined") {
                addClass(radioUL, 'LV_invalid_field');
            } else {
                radioUL.classList.add("LV_invalid_field");
            }

            Validate.fail(message);

        }
        else {
            if (typeof radioUL.classList == "undefined") {
                removeClass(radioUL, 'LV_invalid_field');
            } else {
                radioUL.classList.remove("LV_invalid_field");
            }
        }
        return true;
    },
    //Acceptance validation function only for radio buttons 
    AcceptanceRadio: function(value, paramsObj) {




        var returnVar = false;
        var paramsObj = paramsObj || {};
        var message = paramsObj.failureMessage || "Must be accepted!";

        var get_mainUL = "input_" + paramsObj.form_id + "_" + paramsObj.name_field.substr(6);

        var radioUL = document.getElementById(get_mainUL);
        if (paramsObj.name_field) {
            var inps = document.getElementsByName(paramsObj.name_field);
            for (var i = 0; i < inps.length; i++) {

                if (inps[i].checked) {
                    if (typeof radioUL.classList == "undefined") {
                        removeClass(radioUL, 'LV_invalid_field');
                    } else {
                        radioUL.classList.remove("LV_invalid_field");
                    }


                    if (typeof radioUL.classList == "undefined") {
                        removeClass(radioUL, 'LV_invalid_field');
                        var inps = document.getElementsByName(paramsObj.name_field);
                        for (var i = 0; i < inps.length; i++) {

                            removeClass(inps[i], 'LV_invalid_field');
                        }
                    } else {
                        radioUL.classList.remove("LV_invalid_field");

                    }
                    var inps = document.getElementsByName(paramsObj.name_field);
                    for (var i = 0; i < inps.length; i++) {

                        removeClass(inps[i], 'LV_invalid_field');
                    }

                    return true;
                }
            }
        }


        if (!value) {





            if (typeof radioUL.classList == "undefined") {
                addClass(radioUL, 'LV_invalid_field');
            } else {
                radioUL.classList.add("LV_invalid_field");
            }





            Validate.fail(message);

        }
        else {
            if (typeof radioUL.classList == "undefined") {
                removeClass(radioUL, 'LV_invalid_field');
                var inps = document.getElementsByName(paramsObj.name_field);
                for (var i = 0; i < inps.length; i++) {

                    removeClass(inps[i], 'LV_invalid_field');
                }
            } else {
                radioUL.classList.remove("LV_invalid_field");

            }
            var inps = document.getElementsByName(paramsObj.name_field);
            for (var i = 0; i < inps.length; i++) {

                removeClass(inps[i], 'LV_invalid_field');
            }
        }
        return true;

    },
    /**
     *	validates against a custom function that returns true or false (or throws a Validate.Error) when passed the value
     *	
     *	@param value {mixed} - value to be checked
     *	@param paramsObj {Object} - parameters for this particular validation, see below for details
     *
     *	paramsObj properties:
     *							failureMessage {String} - the message to show when the field fails validation
     *													  (DEFAULT: "Not valid!")
     *							against {Function} 			- a function that will take the value and object of arguments and return true or false 
     *													  (DEFAULT: function(value, argsObj){ return true; })
     *							args {Object} 		- an object of named arguments that will be passed to the custom function so are accessible through this object within it 
     *													  (DEFAULT: {})
     */
    Custom: 
    GFCheckboxes: function(value, paramsObj) {




        var paramsObj = paramsObj || {};
        var message = paramsObj.failureMessage || "Must be accepted!";
        var isValidated = false;


        var radioUL = document.getElementById(paramsObj.field_name);

        var len = radioUL.childNodes.length;
        for (var i = 0; i < radioUL.childNodes.length; i++) {


            if (radioUL.childNodes[i].querySelector('input').checked) {


                isValidated = true;
                return true;
            }

        }



        if (!isValidated) {


//
//
//            if (typeof radioUL.classList == "undefined") {
//                addClass(radioUL, 'LV_invalid_field');
//            } else {
//                radioUL.classList.add("LV_invalid_field");
//            }

            Validate.fail(message);

//        }
//        else {
//            if (typeof radioUL.classList == "undefined") {
//                removeClass(radioUL, 'LV_invalid_field');
//            } else {
//                radioUL.classList.remove("LV_invalid_field");
//            }
//        }
            //return true;


        }
    },
    Date: function(value, paramsObj) {


        var paramsObj = paramsObj || {};
        var message = paramsObj.failureMessage || "Must be accepted!";
        if (!value)
            Validate.fail(message);

        var d = new Date(value);
        var current = new Date();

        if (Object.prototype.toString.call(d) === "[object Date]") {
            // it is a date
            if (isNaN(d.getTime())) {  // d.valueOf() could also work
                Validate.fail(message);
            }
            else {

                var re = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;
                var regs = new Array();
                if (regs = value.match(re)) {

                    if (regs[3] < (current.getFullYear() - 100)) {
                        Validate.fail(message);
                    }
                    if (checkDay(regs[2], regs[1], regs[3])) {
                        return true;
                    } else {
                        Validate.fail(message);
                    }


                }


                Validate.fail(message);
            }
        }
        else {
            Validate.fail(message);
        }
        return true;
    },
    /**
     *	validates whatever it is you pass in, and handles the validation error for you so it gives a nice true or false reply
     *
     *	@param validationFunction {Function} - validation function to be used (ie Validation.validatePresence )
     *	@param value {mixed} - value to be checked if true or not (usually a boolean from the checked value of a checkbox)
     *	@param validationParamsObj {Object} - parameters for doing the validation, if wanted or necessary
     */
    now: 
    /**
     *  shortcut for failing throwing a validation error
     *
     *	@param errorMessage {String} - message to display
     */
    fail: 
    Error: 

}

function phoneformat(fld) {
    var newnumber = "";
    phonenumber = fld.val();
    for (place = 0; place <= fld.val().length; place++)
        newnumber = newnumber + phonenumber.charAt(place).replace(/\D*/, '');
    if (newnumber.length == 10) {
        fld.val('(' + newnumber.substring(0, 3) + ')' + newnumber.substring(3, 6) + '-' + newnumber.substring(6, newnumber.length));
        alert(phonenumber);
        return true;
    }
    else if (newnumber.length == 0) {
        fld.val('');
        //        $('input[name="phone"]').parent().children('.error').html('Phone format: (###)###-#### <br/> This field is required.');
        return false;
    }
    else {
        //        $('input[name="phone"]').parent().children('.error').html('Phone format: (###)###-####');
        fld.select();
        //            alert('Invalid Phone Number must be 10 digit number');
        return false;
    }
}






