var Page_ValidationVer = "125";
var Page_IsValid = true;
var Page_BlockSubmit = false;
var Page_InvalidControlToBeFocused = null;
var Page_TextTypes = /^(text|password|file|search|tel|url|email|number|range|color|datetime|date|month|week|time|datetime-local)$/i;
function ValidatorUpdateDisplay(val) {
    if (typeof(val.display) == "string") {
        if (val.display == "None") {
            return;
        }
        if (val.display == "Dynamic") {
            val.style.display = val.isvalid ? "none" : "inline";
            return;
        }
    }
    if ((navigator.userAgent.indexOf("Mac") > -1) &&
        (navigator.userAgent.indexOf("MSIE") > -1)) {
        val.style.display = "inline";
    }
    val.style.visibility = val.isvalid ? "hidden" : "visible";
}
function ValidatorUpdateIsValid() {
    Page_IsValid = AllValidatorsValid(Page_Validators);
}
function AllValidatorsValid(validators) {
    if ((typeof(validators) != "undefined") && (validators != null)) {
        var i;
        for (i = 0; i < validators.length; i++) {
            if (!validators[i].isvalid) {
                return false;
            }
        }
    }
    return true;
}
function ValidatorHookupControlID(controlID, val) {
    if (typeof(controlID) != "string") {
        return;
    }
    var ctrl = document.getElementById(controlID);
    if ((typeof(ctrl) != "undefined") && (ctrl != null)) {
        ValidatorHookupControl(ctrl, val);
    }
    else {
        val.isvalid = true;
        val.enabled = false;
    }
}
function ValidatorHookupControl(control, val) {
    if (typeof(control.tagName) != "string") {
        return;  
    }
    if (control.tagName != "INPUT" && control.tagName != "TEXTAREA" && control.tagName != "SELECT") {
        var i;
        for (i = 0; i < control.childNodes.length; i++) {
            ValidatorHookupControl(control.childNodes[i], val);
        }
        return;
    }
    else {
        if (typeof(control.Validators) == "undefined") {
            control.Validators = new Array;
            var eventType;
            if (control.type == "radio") {
                eventType = "onclick";
            } else {
                eventType = "onchange";
                if (typeof(val.focusOnError) == "string" && val.focusOnError == "t") {
                    ValidatorHookupEvent(control, "onblur", "ValidatedControlOnBlur(event); ");
                }
            }
            ValidatorHookupEvent(control, eventType, "ValidatorOnChange(event); ");
            if (Page_TextTypes.test(control.type)) {
                ValidatorHookupEvent(control, "onkeypress", 
                    "event = event || window.event; if (!ValidatedTextBoxOnKeyPress(event)) { event.cancelBubble = true; if (event.stopPropagation) event.stopPropagation(); return false; } ");
            }
        }
        control.Validators[control.Validators.length] = val;
    }
}
function ValidatorHookupEvent(control, eventType, functionPrefix) {
    var ev = control[eventType];
    if (typeof(ev) == "function") {
        ev = ev.toString();
        ev = ev.substring(ev.indexOf("{") + 1, ev.lastIndexOf("}"));
    }
    else {
        ev = "";
    }
    control[eventType] = new Function("event", functionPrefix + " " + ev);
}
function ValidatorGetValue(id) {
    var control;
    control = document.getElementById(id);
    if (typeof(control.value) == "string") {
        return control.value;
    }
    return ValidatorGetValueRecursive(control);
}
function ValidatorGetValueRecursive(control)
{
    if (typeof(control.value) == "string" && (control.type != "radio" || control.checked == true)) {
        return control.value;
    }
    var i, val;
    for (i = 0; i<control.childNodes.length; i++) {
        val = ValidatorGetValueRecursive(control.childNodes[i]);
        if (val != "") return val;
    }
    return "";
}
function Page_ClientValidate(validationGroup) {
    Page_InvalidControlToBeFocused = null;
    if (typeof(Page_Validators) == "undefined") {
        return true;
    }
    var i;
    for (i = 0; i < Page_Validators.length; i++) {
        ValidatorValidate(Page_Validators[i], validationGroup, null);
    }
    ValidatorUpdateIsValid();
    ValidationSummaryOnSubmit(validationGroup);
    Page_BlockSubmit = !Page_IsValid;
    return Page_IsValid;
}
function ValidatorCommonOnSubmit() {
    Page_InvalidControlToBeFocused = null;
    var result = !Page_BlockSubmit;
    if ((typeof(window.event) != "undefined") && (window.event != null)) {
        window.event.returnValue = result;
    }
    Page_BlockSubmit = false;
    return result;
}
function ValidatorEnable(val, enable) {
    val.enabled = (enable != false);
    ValidatorValidate(val);
    ValidatorUpdateIsValid();
}
function ValidatorOnChange(event) {
    event = event || window.event;
    Page_InvalidControlToBeFocused = null;
    var targetedControl;
    if ((typeof(event.srcElement) != "undefined") && (event.srcElement != null)) {
        targetedControl = event.srcElement;
    }
    else {
        targetedControl = event.target;
    }
    var vals;
    if (typeof(targetedControl.Validators) != "undefined") {
        vals = targetedControl.Validators;
    }
    else {
        if (targetedControl.tagName.toLowerCase() == "label") {
            targetedControl = document.getElementById(targetedControl.htmlFor);
            vals = targetedControl.Validators;
        }
    }
    if (vals) {
        for (var i = 0; i < vals.length; i++) {
            ValidatorValidate(vals[i], null, event);
        }
    }
    ValidatorUpdateIsValid();
}
function ValidatedTextBoxOnKeyPress(event) {
    event = event || window.event;
    if (event.keyCode == 13) {
        ValidatorOnChange(event);
        var vals;
        if ((typeof(event.srcElement) != "undefined") && (event.srcElement != null)) {
            vals = event.srcElement.Validators;
        }
        else {
            vals = event.target.Validators;
        }
        return AllValidatorsValid(vals);
    }
    return true;
}
function ValidatedControlOnBlur(event) {
    event = event || window.event;
    var control;
    if ((typeof(event.srcElement) != "undefined") && (event.srcElement != null)) {
        control = event.srcElement;
    }
    else {
        control = event.target;
    }
    if ((typeof(control) != "undefined") && (control != null) && (Page_InvalidControlToBeFocused == control)) {
        control.focus();
        Page_InvalidControlToBeFocused = null;
    }
}
function ValidatorValidate(val, validationGroup, event) {
    val.isvalid = true;
    if ((typeof(val.enabled) == "undefined" || val.enabled != false) && IsValidationGroupMatch(val, validationGroup)) {
        if (typeof(val.evaluationfunction) == "function") {
            val.isvalid = val.evaluationfunction(val);
            if (!val.isvalid && Page_InvalidControlToBeFocused == null &&
                typeof(val.focusOnError) == "string" && val.focusOnError == "t") {
                ValidatorSetFocus(val, event);
            }
        }
    }
    ValidatorUpdateDisplay(val);
}
function ValidatorSetFocus(val, event) {
    var ctrl;
    if (typeof(val.controlhookup) == "string") {
        var eventCtrl;
        if ((typeof(event) != "undefined") && (event != null)) {
            if ((typeof(event.srcElement) != "undefined") && (event.srcElement != null)) {
                eventCtrl = event.srcElement;
            }
            else {
                eventCtrl = event.target;
            }
        }
        if ((typeof(eventCtrl) != "undefined") && (eventCtrl != null) &&
            (typeof(eventCtrl.id) == "string") &&
            (eventCtrl.id == val.controlhookup)) {
            ctrl = eventCtrl;
        }
    }
    if ((typeof(ctrl) == "undefined") || (ctrl == null)) {
        ctrl = document.getElementById(val.controltovalidate);
    }
    if ((typeof(ctrl) != "undefined") && (ctrl != null) &&
        (ctrl.tagName.toLowerCase() != "table" || (typeof(event) == "undefined") || (event == null)) && 
        ((ctrl.tagName.toLowerCase() != "input") || (ctrl.type.toLowerCase() != "hidden")) &&
        (typeof(ctrl.disabled) == "undefined" || ctrl.disabled == null || ctrl.disabled == false) &&
        (typeof(ctrl.visible) == "undefined" || ctrl.visible == null || ctrl.visible != false) &&
        (IsInVisibleContainer(ctrl))) {
        if ((ctrl.tagName.toLowerCase() == "table" && (typeof(__nonMSDOMBrowser) == "undefined" || __nonMSDOMBrowser)) ||
            (ctrl.tagName.toLowerCase() == "span")) {
            var inputElements = ctrl.getElementsByTagName("input");
            var lastInputElement  = inputElements[inputElements.length -1];
            if (lastInputElement != null) {
                ctrl = lastInputElement;
            }
        }
        if (typeof(ctrl.focus) != "undefined" && ctrl.focus != null) {
            ctrl.focus();
            Page_InvalidControlToBeFocused = ctrl;
        }
    }
}
function IsInVisibleContainer(ctrl) {
    if (typeof(ctrl.style) != "undefined" &&
        ( ( typeof(ctrl.style.display) != "undefined" &&
            ctrl.style.display == "none") ||
          ( typeof(ctrl.style.visibility) != "undefined" &&
            ctrl.style.visibility == "hidden") ) ) {
        return false;
    }
    else if (typeof(ctrl.parentNode) != "undefined" &&
             ctrl.parentNode != null &&
             ctrl.parentNode != ctrl) {
        return IsInVisibleContainer(ctrl.parentNode);
    }
    return true;
}
function IsValidationGroupMatch(control, validationGroup) {
    if ((typeof(validationGroup) == "undefined") || (validationGroup == null)) {
        return true;
    }
    var controlGroup = "";
    if (typeof(control.validationGroup) == "string") {
        controlGroup = control.validationGroup;
    }
    return (controlGroup == validationGroup);
}
function ValidatorOnLoad() {
    if (typeof(Page_Validators) == "undefined")
        return;
    var i, val;
    for (i = 0; i < Page_Validators.length; i++) {
        val = Page_Validators[i];
        if (typeof(val.evaluationfunction) == "string") {
            eval("val.evaluationfunction = " + val.evaluationfunction + ";");
        }
        if (typeof(val.isvalid) == "string") {
            if (val.isvalid == "False") {
                val.isvalid = false;
                Page_IsValid = false;
            }
            else {
                val.isvalid = true;
            }
        } else {
            val.isvalid = true;
        }
        if (typeof(val.enabled) == "string") {
            val.enabled = (val.enabled != "False");
        }
        if (typeof(val.controltovalidate) == "string") {
            ValidatorHookupControlID(val.controltovalidate, val);
        }
        if (typeof(val.controlhookup) == "string") {
            ValidatorHookupControlID(val.controlhookup, val);
        }
    }
    Page_ValidationActive = true;
}
function ValidatorConvert(op, dataType, val) {
    function GetFullYear(year) {
        var twoDigitCutoffYear = val.cutoffyear % 100;
        var cutoffYearCentury = val.cutoffyear - twoDigitCutoffYear;
        return ((year > twoDigitCutoffYear) ? (cutoffYearCentury - 100 + year) : (cutoffYearCentury + year));
    }
    var num, cleanInput, m, exp;
    if (dataType == "Integer") {
        exp = /^\s*[-\+]?\d+\s*$/;
        if (op.match(exp) == null)
            return null;
        num = parseInt(op, 10);
        return (isNaN(num) ? null : num);
    }
    else if(dataType == "Double") {
        exp = new RegExp("^\\s*([-\\+])?(\\d*)\\" + val.decimalchar + "?(\\d*)\\s*$");
        m = op.match(exp);
        if (m == null)
            return null;
        if (m[2].length == 0 && m[3].length == 0)
            return null;
        cleanInput = (m[1] != null ? m[1] : "") + (m[2].length>0 ? m[2] : "0") + (m[3].length>0 ? "." + m[3] : "");
        num = parseFloat(cleanInput);
        return (isNaN(num) ? null : num);
    }
    else if (dataType == "Currency") {
        var hasDigits = (val.digits > 0);
        var beginGroupSize, subsequentGroupSize;
        var groupSizeNum = parseInt(val.groupsize, 10);
        if (!isNaN(groupSizeNum) && groupSizeNum > 0) {
            beginGroupSize = "{1," + groupSizeNum + "}";
            subsequentGroupSize = "{" + groupSizeNum + "}";
        }
        else {
            beginGroupSize = subsequentGroupSize = "+";
        }
        exp = new RegExp("^\\s*([-\\+])?((\\d" + beginGroupSize + "(\\" + val.groupchar + "\\d" + subsequentGroupSize + ")+)|\\d*)"
                        + (hasDigits ? "\\" + val.decimalchar + "?(\\d{0," + val.digits + "})" : "")
                        + "\\s*$");
        m = op.match(exp);
        if (m == null)
            return null;
        if (m[2].length == 0 && hasDigits && m[5].length == 0)
            return null;
        cleanInput = (m[1] != null ? m[1] : "") + m[2].replace(new RegExp("(\\" + val.groupchar + ")", "g"), "") + ((hasDigits && m[5].length > 0) ? "." + m[5] : "");
        num = parseFloat(cleanInput);
        return (isNaN(num) ? null : num);
    }
    else if (dataType == "Date") {
        var yearFirstExp = new RegExp("^\\s*((\\d{4})|(\\d{2}))([-/]|\\. ?)(\\d{1,2})\\4(\\d{1,2})\\.?\\s*$");
        m = op.match(yearFirstExp);
        var day, month, year;
        if (m != null && (((typeof(m[2]) != "undefined") && (m[2].length == 4)) || val.dateorder == "ymd")) {
            day = m[6];
            month = m[5];
            year = (m[2].length == 4) ? m[2] : GetFullYear(parseInt(m[3], 10));
        }
        else {
            if (val.dateorder == "ymd"){
                return null;
            }
            var yearLastExp = new RegExp("^\\s*(\\d{1,2})([-/]|\\. ?)(\\d{1,2})(?:\\s|\\2)((\\d{4})|(\\d{2}))(?:\\s\u0433\\.|\\.)?\\s*$");
            m = op.match(yearLastExp);
            if (m == null) {
                return null;
            }
            if (val.dateorder == "mdy") {
                day = m[3];
                month = m[1];
            }
            else {
                day = m[1];
                month = m[3];
            }
            year = ((typeof(m[5]) != "undefined") && (m[5].length == 4)) ? m[5] : GetFullYear(parseInt(m[6], 10));
        }
        month -= 1;
        var date = new Date(year, month, day);
        if (year < 100) {
            date.setFullYear(year);
        }
        return (typeof(date) == "object" && year == date.getFullYear() && month == date.getMonth() && day == date.getDate()) ? date.valueOf() : null;
    }
    else {
        return op.toString();
    }
}
function ValidatorCompare(operand1, operand2, operator, val) {
    var dataType = val.type;
    var op1, op2;
    if ((op1 = ValidatorConvert(operand1, dataType, val)) == null)
        return false;
    if (operator == "DataTypeCheck")
        return true;
    if ((op2 = ValidatorConvert(operand2, dataType, val)) == null)
        return true;
    switch (operator) {
        case "NotEqual":
            return (op1 != op2);
        case "GreaterThan":
            return (op1 > op2);
        case "GreaterThanEqual":
            return (op1 >= op2);
        case "LessThan":
            return (op1 < op2);
        case "LessThanEqual":
            return (op1 <= op2);
        default:
            return (op1 == op2);
    }
}
function CompareValidatorEvaluateIsValid(val) {
    var value = ValidatorGetValue(val.controltovalidate);
    if (ValidatorTrim(value).length == 0)
        return true;
    var compareTo = "";
    if ((typeof(val.controltocompare) != "string") ||
        (typeof(document.getElementById(val.controltocompare)) == "undefined") ||
        (null == document.getElementById(val.controltocompare))) {
        if (typeof(val.valuetocompare) == "string") {
            compareTo = val.valuetocompare;
        }
    }
    else {
        compareTo = ValidatorGetValue(val.controltocompare);
    }
    var operator = "Equal";
    if (typeof(val.operator) == "string") {
        operator = val.operator;
    }
    return ValidatorCompare(value, compareTo, operator, val);
}
function CustomValidatorEvaluateIsValid(val) {
    var value = "";
    if (typeof(val.controltovalidate) == "string") {
        value = ValidatorGetValue(val.controltovalidate);
        if ((ValidatorTrim(value).length == 0) &&
            ((typeof(val.validateemptytext) != "string") || (val.validateemptytext != "true"))) {
            return true;
        }
    }
    var args = { Value:value, IsValid:true };
    if (typeof(val.clientvalidationfunction) == "string") {
        eval(val.clientvalidationfunction + "(val, args) ;");
    }
    return args.IsValid;
}
function RegularExpressionValidatorEvaluateIsValid(val) {
    var value = ValidatorGetValue(val.controltovalidate);
    if (ValidatorTrim(value).length == 0)
        return true;
    var rx = new RegExp(val.validationexpression);
    var matches = rx.exec(value);
    return (matches != null && value == matches[0]);
}
function ValidatorTrim(s) {
    var m = s.match(/^\s*(\S+(\s+\S+)*)\s*$/);
    return (m == null) ? "" : m[1];
}
function RequiredFieldValidatorEvaluateIsValid(val) {
    return (ValidatorTrim(ValidatorGetValue(val.controltovalidate)) != ValidatorTrim(val.initialvalue))
}
function RangeValidatorEvaluateIsValid(val) {
    var value = ValidatorGetValue(val.controltovalidate);
    if (ValidatorTrim(value).length == 0)
        return true;
    return (ValidatorCompare(value, val.minimumvalue, "GreaterThanEqual", val) &&
            ValidatorCompare(value, val.maximumvalue, "LessThanEqual", val));
}
function ValidationSummaryOnSubmit(validationGroup) {
    if (typeof(Page_ValidationSummaries) == "undefined")
        return;
    var summary, sums, s;
    var headerSep, first, pre, post, end;
    for (sums = 0; sums < Page_ValidationSummaries.length; sums++) {
        summary = Page_ValidationSummaries[sums];
        if (!summary) continue;
        summary.style.display = "none";
        if (!Page_IsValid && IsValidationGroupMatch(summary, validationGroup)) {
            var i;
            if (summary.showsummary != "False") {
                summary.style.display = "";
                if (typeof(summary.displaymode) != "string") {
                    summary.displaymode = "BulletList";
                }
                switch (summary.displaymode) {
                    case "List":
                        headerSep = "<br>";
                        first = "";
                        pre = "";
                        post = "<br>";
                        end = "";
                        break;
                    case "BulletList":
                    default:
                        headerSep = "";
                        first = "<ul>";
                        pre = "<li>";
                        post = "</li>";
                        end = "</ul>";
                        break;
                    case "SingleParagraph":
                        headerSep = " ";
                        first = "";
                        pre = "";
                        post = " ";
                        end = "<br>";
                        break;
                }
                s = "";
                if (typeof(summary.headertext) == "string") {
                    s += summary.headertext + headerSep;
                }
                s += first;
                for (i=0; i<Page_Validators.length; i++) {
                    if (!Page_Validators[i].isvalid && typeof(Page_Validators[i].errormessage) == "string") {
                        s += pre + Page_Validators[i].errormessage + post;
                    }
                }
                s += end;
                summary.innerHTML = s;
                window.scrollTo(0,0);
            }
            if (summary.showmessagebox == "True") {
                s = "";
                if (typeof(summary.headertext) == "string") {
                    s += summary.headertext + "\r\n";
                }
                var lastValIndex = Page_Validators.length - 1;
                for (i=0; i<=lastValIndex; i++) {
                    if (!Page_Validators[i].isvalid && typeof(Page_Validators[i].errormessage) == "string") {
                        switch (summary.displaymode) {
                            case "List":
                                s += Page_Validators[i].errormessage;
                                if (i < lastValIndex) {
                                    s += "\r\n";
                                }
                                break;
                            case "BulletList":
                            default:
                                s += "- " + Page_Validators[i].errormessage;
                                if (i < lastValIndex) {
                                    s += "\r\n";
                                }
                                break;
                            case "SingleParagraph":
                                s += Page_Validators[i].errormessage + " ";
                                break;
                        }
                    }
                }
                alert(s);
            }
        }
    }
}
if (window.jQuery) {
    (function ($) {
        var dataValidationAttribute = "data-val",
            dataValidationSummaryAttribute = "data-valsummary",
            normalizedAttributes = { validationgroup: "validationGroup", focusonerror: "focusOnError" };
        function getAttributesWithPrefix(element, prefix) {
            var i,
                attribute,
                list = {},
                attributes = element.attributes,
                length = attributes.length,
                prefixLength = prefix.length;
            prefix = prefix.toLowerCase();
            for (i = 0; i < length; i++) {
                attribute = attributes[i];
                if (attribute.specified && attribute.name.substr(0, prefixLength).toLowerCase() === prefix) {
                    list[attribute.name.substr(prefixLength)] = attribute.value;
                }
            }
            return list;
        }
        function normalizeKey(key) {
            key = key.toLowerCase();
            return normalizedAttributes[key] === undefined ? key : normalizedAttributes[key];
        }
        function addValidationExpando(element) {
            var attributes = getAttributesWithPrefix(element, dataValidationAttribute + "-");
            $.each(attributes, function (key, value) {
                element[normalizeKey(key)] = value;
            });
        }
        function dispose(element) {
            var index = $.inArray(element, Page_Validators);
            if (index >= 0) {
                Page_Validators.splice(index, 1);
            }
        }
        function addNormalizedAttribute(name, normalizedName) {
            normalizedAttributes[name.toLowerCase()] = normalizedName;
        }
        function parseSpecificAttribute(selector, attribute, validatorsArray) {
            return $(selector).find("[" + attribute + "='true']").each(function (index, element) {
                addValidationExpando(element);
                element.dispose = function () { dispose(element); element.dispose = null; };
                if ($.inArray(element, validatorsArray) === -1) {
                    validatorsArray.push(element);
                }
            }).length;
        }
        function parse(selector) {
            var length = parseSpecificAttribute(selector, dataValidationAttribute, Page_Validators);
            length += parseSpecificAttribute(selector, dataValidationSummaryAttribute, Page_ValidationSummaries);
            return length;
        }
        function loadValidators() {
            if (typeof (ValidatorOnLoad) === "function") {
                ValidatorOnLoad();
            }
            if (typeof (ValidatorOnSubmit) === "undefined") {
                window.ValidatorOnSubmit = function () {
                    return Page_ValidationActive ? ValidatorCommonOnSubmit() : true;
                };
            }
        }
        function registerUpdatePanel() {
            if (window.Sys && Sys.WebForms && Sys.WebForms.PageRequestManager) {
                var prm = Sys.WebForms.PageRequestManager.getInstance(),
                    postBackElement, endRequestHandler;
                if (prm.get_isInAsyncPostBack()) {
                    endRequestHandler = function (sender, args) {
                        if (parse(document)) {
                            loadValidators();
                        }
                        prm.remove_endRequest(endRequestHandler);
                        endRequestHandler = null;
                    };
                    prm.add_endRequest(endRequestHandler);
                }
                prm.add_beginRequest(function (sender, args) {
                    postBackElement = args.get_postBackElement();
                });
                prm.add_pageLoaded(function (sender, args) {
                    var i, panels, valFound = 0;
                    if (typeof (postBackElement) === "undefined") {
                        return;
                    }
                    panels = args.get_panelsUpdated();
                    for (i = 0; i < panels.length; i++) {
                        valFound += parse(panels[i]);
                    }
                    panels = args.get_panelsCreated();
                    for (i = 0; i < panels.length; i++) {
                        valFound += parse(panels[i]);
                    }
                    if (valFound) {
                        loadValidators();
                    }
                });
            }
        }
        $(function () {
            if (typeof (Page_Validators) === "undefined") {
                window.Page_Validators = [];
            }
            if (typeof (Page_ValidationSummaries) === "undefined") {
                window.Page_ValidationSummaries = [];
            }
            if (typeof (Page_ValidationActive) === "undefined") {
                window.Page_ValidationActive = false;
            }
            $.WebFormValidator = {
                addNormalizedAttribute: addNormalizedAttribute,
                parse: parse
            };
            if (parse(document)) {
                loadValidators();
            }
            registerUpdatePanel();
        });
    } (jQuery));
}
> ul ul.sub-menu a {
    background-color: transparent;
    color: #e8e3d3;
    padding: 0 0 10px 50px;
  }
  #mobile-relative.frontpage ul.uw-mobile-menu > div > ul ul.sub-menu a:active,
  #mobile-relative.frontpage ul.uw-mobile-menu > div > ul ul.sub-menu a:hover,
  #mobile-relative.frontpage ul.uw-mobile-menu > div > ul ul.sub-menu a:focus {
    color: white;
  }
  #mobile-relative.frontpage ul.uw-mobile-menu > div > ul ul.sub-menu li.current-menu-item a {
    background-color: #4d4d4d;
    color: white;
  }
  ul.sub-menu > li {
    padding-top: 10px;
  }
}
ul.uw-mobile-menu > div ul li a:hover,
ul.uw-mobile-menu > div ul li a:focus,
ul.uw-mobile-menu > div ul li a:active {
  color: white;
}
ul.uw-mobile-menu > div ul li a {
  font-weight: 900;
  text-transform: uppercase;
  color: white;
  border-bottom: none;
}
ul.uw-mobile-menu > div ul li a:hover,
ul.uw-mobile-menu > div ul li a:focus,
ul.uw-mobile-menu > div ul li a:active {
  color: #e8e3d3;
}
#mobile-relative ul.uw-mobile-menu {
  padding: 10px 0 0;
}
/*=========================== UW 2014 Icon Menu ===========================*/
.icon-menu {
  margin: 0 0;
}
.icon-menu li {
  padding: 10px 30px;
}
.icon-menu a {
  font-family: inherit;
  padding-top: 65px;
  text-transform: uppercase;
}
.icon-menu a:hover,
.icon-menu a:focus {
  transform: translate(0, 0);
}
@media only screen and (max-width: 767px) {
  .uw-breadcrumbs {
    margin: 20px 0 0 -11px;
  }
}
.uw-hero-image.uw-admit-hero {
  height: 180px;
  background-size: cover;
  background-position: center center;
}
.uw-hero-image.uw-admit-hero:before {
  height: 100%;
  opacity: .4;
  background: #d9d9d9;
}
.uw-hero-image.uw-admit-hero:after {
  content: none;
}
@media (min-width: 768px) and (max-width: 991px) {
  .uw-body div.uw-site-title {
    margin-top: 0;
  }
}
@media only screen and (min-width: 768px) {
  .uw-body .uw-site-title {
    text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.5);
    font-family: "Encode Sans Normal", sans-serif;
    text-transform: uppercase;
    color: #4b2e83;
    font-size: 60px;
  }
}
@media only screen and (max-width: 767px) {
  .uw-body .uw-site-title {
    max-width: 90%;
  }
}
.uw-thinstrip .uw-wordmark {
  display: block;
  position: absolute;
  text-indent: -9999px;
  background: url(assets/Admission-Logo-2.svg) no-repeat transparent;
  background-color: transparent;
}
@media only screen and (min-width: 768px) {
  .uw-thinstrip .uw-wordmark {
    top: 0;
    width: 330px;
    height: 50px;
  }
}
@media only screen and (max-width: 768px) {
  .uw-module-body #mobile-relative {
    margin: 50px 15px 0 10px;
    position: relative;
  }
  .uw-module-body #mobile-relative button.uw-mobile-menu-toggle {
    position: absolute;
    right: -10px;
    z-index: 10;
    margin: 0;
    top: -40px;
  }
}
.purple-bg-head {
  background: #4b2e83;
  color: white;
  margin: -20px -20px 15px;
  padding: 20px;
}
.callout {
  background: #e8e8e8;
  border-left: 2px solid #4b2e83;
  margin-bottom: 20px;
  padding: 20px 30px;
}
.slanted-lines {
  position: relative;
  height: 100px;
  width: 100%;
}
.slanted-lines.white {
  background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuX0VxdEsiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSIxNS41IiBoZWlnaHQ9IjE1LjUiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSgxNSkiPjxsaW5lIHgxPSIwIiB5PSIwIiB4Mj0iMCIgeTI9IjE1LjUiIHN0cm9rZT0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz4gPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuX0VxdEspIiBvcGFjaXR5PSIxIi8+PC9zdmc+');
}
.slanted-lines.white:before {
  background-image: linear-gradient(to bottom, rgba(75, 46, 131, 0), rgba(75, 46, 131, 0.3), rgba(75, 46, 131, 0));
  content: '';
  width: 100%;
  height: 190px;
  display: block;
  position: relative;
  z-index: 0;
}
@media screen and (max-width: 992px) {
  .slanted-lines.white {
    background-color: #4b2e83;
  }
}
.slanted-lines.purple {
  background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuX0VxdEsiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSIxNS41IiBoZWlnaHQ9IjE1LjUiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSgxNSkiPjxsaW5lIHgxPSIwIiB5PSIwIiB4Mj0iMCIgeTI9IjE1LjUiIHN0cm9rZT0iIzRCMkU4MyIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz4gPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuX0VxdEspIiBvcGFjaXR5PSIxIi8+PC9zdmc+');
  position: absolute;
  bottom: 0;
}
.home .d-hero-full {
  padding: 0!important;
  background-position: center !important;
  margin-top: 5px;
  -webkit-box-shadow: -3px 2px 7px -2px rgba(34, 25, 25, 0.4);
  box-shadow: -3px 2px 7px -2px rgba(34, 25, 25, 0.4);
}
.home .d-hero-full .d-hero-content {
  padding-top: 60px !important;
  margin-top: 0 !important;
}
.home button#pause {
  position: relative;
  z-index: 1;
  display: block;
  overflow-x: unset;
  border: none;
  right: -90%;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 400;
  background: transparent;
  color: #85754d;
}
.home button#pause:hover {
  color: #4b2e83;
}
.home button#pause:hover [class^="ic-"]:before {
  color: #4b2e83;
}
.home button#pause span {
  display: flex;
  flex-direction: column-reverse;
  width: 128px;
}
.home button#pause [class^="ic-"]:before {
  top: 0;
  color: #85754d;
}
@media only screen and (max-width: 992px) {
  .home button#pause {
    display: none;
  }
}
body:not(.home) button.bgPause {
  display: none;
}
body:not(.home) #main-menu {
  -webkit-box-shadow: none;
  box-shadow: none;
}
body:not(.home) .menu-container {
  -webkit-box-shadow: inset 0px 6px 6px -6px rgba(34, 25, 25, 0.4);
  box-shadow: inset 0px 6px 6px -6px rgba(34, 25, 25, 0.4);
}
.card-purple {
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: #4b2e83;
  width: 75%;
  margin: 30px auto;
  border-bottom: 1px solid #4b2e83;
}
.card-purple img {
  width: 100%;
}
@media screen and (max-width: 991px) {
  .card-purple {
    width: 100%;
    grid-template-columns: 1fr;
  }
}
.fullwidth-card-slanted {
  background: #e8e3d3;
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin: 20px -50vw;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  overflow: hidden;
  padding: 0!important;
}
.fullwidth-card-slanted #img-bg {
  background-size: cover;
  background-position: center center;
}
@media screen and (max-width: 991px) {
  .fullwidth-card-slanted {
    grid-template-columns: 1fr;
  }
}
.lightgold-15deg {
  background: #e8e3d3;
  -webkit-transform: skew(-15deg, 0);
  transform: skew(-15deg, 0);
  position: relative;
  left: 4.5rem;
  z-index: 0;
  padding: 9rem 8rem;
}
@media screen and (max-width: 991px) {
  .lightgold-15deg {
    left: 0;
    padding: 5rem 1rem;
  }
}
.lightgold-15deg .white-text {
  color: #4b2e83;
  transform: skewX(15deg);
  width: 75%;
}
@media screen and (max-width: 991px) {
  .lightgold-15deg .white-text {
    border: 10px;
    width: 100%;
  }
}
.lightgold-15deg .white-text h2 {
  color: #4b2e83;
}
.lightgold-15deg .white-text p {
  color: #373A3C;
  width: 100% !important;
}
.purple-15deg .slanted-bg {
  transform: skewX(-15deg);
  background: #4b2e83;
  justify-content: center;
  display: flex;
  align-items: center;
  left: -5vw;
  position: relative;
}
@media screen and (max-width: 991px) {
  .purple-15deg .slanted-bg {
    left: 0;
  }
}
.purple-15deg .white-text {
  color: white;
  padding-left: 60px;
  transform: skewX(15deg);
}
@media screen and (max-width: 991px) {
  .purple-15deg .white-text {
    margin: 15px auto 0;
    padding-left: 45px;
  }
}
.purple-15deg .white-text h2,
.purple-15deg .white-text p {
  color: white;
}
.purple-15deg .white-text h2 {
  font-size: 37px;
  text-transform: capitalize;
}
.purple-15deg .white-text p {
  font-size: 18px;
}
.d-module h1,
.d-module h2,
.d-module h3,
.d-module h4,
.d-module h5 {
  font-family: 'Encode Sans Compressed';
}
.d-module h2 {
  font-size: 40px;
  text-transform: uppercase;
  margin-top: 0;
  font-weight: 900;
}
.d-module h2.lc-purple {
  font-size: 28px;
  color: #4b2e83;
  text-transform: none;
  font-family: "Encode Sans Normal", sans-serif;
}
.d-module h3 {
  font-weight: 400;
  font-size: 24px;
  margin-top: 10px;
}
.d-module section {
  padding: 50px 0;
  position: relative;
}
@media screen and (max-width: 767px) {
  .d-module section {
    padding: 25px 0;
  }
}
.d-module .bold-gold {
  color: #B7A57A;
  font-weight: 900;
}
.d-module svg {
  overflow: hidden;
  vertical-align: middle;
}
.d-module svg.slant-pattern {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 90px;
}
.d-module svg.slant-pattern rect.hbar {
  -webkit-mask: url(#mask-stripe);
  mask: url(#mask-stripe);
}
.d-module svg.slant-pattern .purple-lines {
  fill: rgba(75, 46, 131, 0.5);
}
.d-module .d-photo {
  margin-bottom: 20px;
}
.d-module .uw-btn {
  text-shadow: none;
  margin-top: 10px;
}
.d-hero {
  background-size: cover;
  width: 100%;
  text-align: center;
}
.d-hero .d-hero-content {
  overflow: hidden;
  padding-top: 80px;
  position: relative;
  z-index: 5;
  margin-top: 48px;
}
.d-hero .d-hero-content video {
  display: none;
}
@media only screen and (min-width: 769px) {
  .d-hero .d-hero-content video {
    object-fit: cover;
    height: 100%;
    width: 100%;
    object-position: 100% 18%;
    display: inline-block;
    position: absolute;
    top: 0;
  }
}
@media screen and (-ms-high-contrast: active), screen and (-ms-high-contrast: none) {
  .d-hero .d-hero-content video {
    /* IE10+ specific styles go here */
    height: auto;
  }
}
.d-hero .d-hero-subhead {
  margin: auto;
  background: #4b2e83;
  color: white;
  padding: 15px 18px;
  font-weight: 100;
}
.d-hero .uw-wordmark {
  display: inline-block;
  text-transform: uppercase;
  font-weight: 700;
  color: #373A3C;
  width: 280px;
  height: 20px;
  font-size: 20px;
}
.d-hero h1 {
  font-size: 60px;
  background: #4b2e83;
  color: white;
  padding: 0 18px;
  font-family: 'Encode Sans Compressed';
  font-weight: 800;
  text-transform: uppercase;
  display: inline-block;
  margin-bottom: 20px;
}
.d-hero h1 .d-hero-subhead {
  background: #4b2e83;
  color: white;
  padding: 15px 18px;
  font-weight: 100;
}
@media screen and (max-width: 768px) {
  .d-hero h1 {
    font-size: 45px;
  }
}
.d-hero.d-hero-full {
  background-image: url("assets/dubs-homepage-hero@2x.png");
  padding: 0;
}
.d-hero.d-hero-full .d-hero-content {
  padding-top: 10px;
  text-align: left;
}
.d-hero.d-hero-full a.uw-btn,
.d-hero.d-hero-full button.uw-btn {
  margin-top: 25px;
}
.d-hero.d-hero-full [class^="ic-"]:before,
.d-hero.d-hero-full [class*=" ic-"]:before {
  display: inline-block;
  position: relative;
  top: 25px;
  margin-left: -5px;
}
.d-hero.d-hero-full a.video-btn {
  color: #4b2e83;
  text-transform: uppercase;
  font-size: 13px;
  font-family: "Encode Sans Condensed", "Encode Sans Compressed", sans-serif;
  font-weight: 700;
  padding: 20px 0;
}
.d-hero.d-hero-full a.video-btn:hover {
  color: #85754d;
}
.d-hero.d-hero-full a.video-btn:hover span[class^="ic-"]:before {
  color: #85754d;
}
.d-hero.d-hero-full svg {
  z-index: 5;
  position: absolute;
  display: block;
  width: 28px;
  bottom: calc(5% - 5px);
  left: calc(50% - 20px);
  height: 37px;
}
.d-hero.d-hero-full svg line,
.d-hero.d-hero-full svg path {
  stroke-width: 1px;
}
.d-hero.d-hero-full svg line#Line_37 {
  transform: translate(17px, -2px);
}
.d-hero.d-hero-full svg line#Line_44 {
  transform: translate(0px, 36%);
}
@media only screen and (max-width: 768px) {
  .d-hero.d-hero-full svg {
    bottom: 5px;
  }
}
.d-hero.d-hero-full .scroll-arrow {
  display: block;
}
.d-hero.d-hero-full .scroll-arrow:before {
  content: "Scroll Down";
  color: white;
  font-size: 12px;
  font-weight: 400;
  display: inline-block;
  position: absolute;
  z-index: 10;
  width: 100%;
  left: 0;
  bottom: 12%;
  text-shadow: 1px 1px 2px black;
}
@media screen and (max-width: 992px) {
  .d-hero.d-hero-full .scroll-arrow:before {
    z-index: 5;
  }
}
@media only screen and (max-width: 768px) {
  .d-hero.d-hero-full .scroll-arrow:before {
    bottom: 7%;
  }
}
.d-hero .d-hero-content {
  color: #4b2e83;
}
.d-hero:before {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  content: "";
  height: 100%;
  /* opacity: .4;
		background: #d9d9d9; */
  z-index: 1;
}
.d-hero-inner {
  padding: 50px 0;
  position: relative;
  overflow: hidden;
  height: 182px;
}
.hr-gold,
h2.underline:after,
h2.underline:after {
  background-color: #B7A57A;
  width: 100px;
  height: 2px;
  display: inline-block;
  margin-bottom: 20px;
}
h2.underline:after {
  content: "";
  display: block;
  margin-top: 15px;
  margin-bottom: 0;
}
.gold-border {
  border-bottom: 2px solid #85754d;
  border-top: 2px solid #85754d;
  color: #4b2e83;
  margin-top: -50px;
  padding-top: 20px;
}
.d-intro {
  text-align: center;
}
.d-intro h2 {
  font-size: 24px;
  text-transform: none;
}
.d-intro .notice {
  text-transform: uppercase;
  font-family: "Encode Sans Light";
  font-weight: 100;
  font-size: 20px;
}
.d-intro .notice h3 {
  margin: 0;
}
.d-intro .notice .uw-btn {
  margin-top: 20px;
}
a.uw-btn,
button.uw-btn {
  color: #4b2e83;
}
a.uw-btn.btn-flat,
button.uw-btn.btn-flat {
  font-family: "Open Sans", sans-serif;
  text-transform: none;
  margin-bottom: 5px;
  padding: 5px 10px;
  margin-right: 0;
}
a.uw-btn.btn-flat:after,
button.uw-btn.btn-flat:after,
a.uw-btn.btn-flat:before,
button.uw-btn.btn-flat:before {
  content: none;
}
a.uw-btn.btn-flat:hover,
button.uw-btn.btn-flat:hover,
a.uw-btn.btn-flat:focus,
button.uw-btn.btn-flat:focus,
a.uw-btn.btn-flat:active,
button.uw-btn.btn-flat:active {
  background-color: #85754d;
  color: white;
}
a.uw-btn.btn-purple:after,
button.uw-btn.btn-purple:after {
  background: url("assets/arrow.svg") center center no-repeat transparent;
  background-size: 20px 20px;
  right: -55px;
}
a.uw-btn.btn-purple:hover:before,
button.uw-btn.btn-purple:hover:before,
a.uw-btn.btn-purple:focus:before,
button.uw-btn.btn-purple:focus:before,
a.uw-btn.btn-purple:active:before,
button.uw-btn.btn-purple:active:before {
  background-color: #e8e3d3;
}
a.uw-btn.btn-purple:before,
button.uw-btn.btn-purple:before {
  background-color: #e8e3d3;
  border-left: none;
  width: 55px;
  right: -55px;
}
.d-rankings {
  background: #e8e8e8;
  text-align: center;
  padding: 0 0 75px 0 !important;
  color: #4b2e83;
}
.d-rankings .rankings {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 30px;
}
.d-rankings h2 {
  color: white;
  background: #4b2e83;
  margin: 0 0 40px;
  display: inline-block;
  padding: 20px 60px;
}
.d-rankings .stat {
  font-size: 100px;
  font-family: 'admissions';
  letter-spacing: -20px;
  line-height: normal;
  margin-bottom: 20px;
}
.d-rankings .list {
  font-family: "Encode Sans Normal", sans-serif;
  font-weight: 900;
  font-size: 22px;
}
.d-rankings .source {
  font-family: "Encode Sans Compressed", sans-serif;
  line-height: normal;
}
@media only screen and (max-width: 768px) {
  .d-rankings .hidden-sm-down {
    display: none;
  }
  .d-rankings .rankings > div {
    display: block;
  }
  .d-rankings .rankings > div:first-child {
    display: block;
  }
}
.d-slide .slide-content,
.d-slideshow-mini .slide-content {
  padding-top: 0;
  width: 100%;
}
.d-slide .slide-content p,
.d-slideshow-mini .slide-content p {
  max-width: 400px;
}
.d-slide {
  overflow: hidden;
  background-color: #4b2e83;
  color: white;
  padding: 0 !important;
  max-height: 450px;
}
.d-slide p {
  color: white;
}
.d-slide .photo {
  background-size: cover;
  width: 50vw;
  height: 450px;
  float: right;
}
.d-slide .slide-content {
  margin-right: 51%;
}
.gform_fields input {
  margin-bottom: 5px !important;
}
@media screen and (max-width: 768px) {
  .d-slide {
    overflow: hidden;
    background-color: #4b2e83;
    color: white;
    padding: 0 !important;
    max-height: none;
  }
  .d-slide .container {
    margin-top: -100px;
  }
  .d-slide p {
    color: white;
  }
  .d-slide h2 {
    background: #4b2e83;
    padding: 5px 10px 0;
  }
  .d-slide .photo {
    background-size: cover;
    width: 100%;
    height: 250px;
    float: none;
  }
  .d-slide .slide-content {
    margin-right: 0;
  }
  .d-slide .slide-content p {
    max-width: 100%;
    padding: 0 10px;
  }
}
/* ====== HUSKY 100 Module ====== */
.husky100-module.d-cards.guides .col-md-4 .d-card {
  padding: 7px;
  max-width: 300px;
  margin: 0 auto;
}
@media screen and (max-width: 992px) {
  .husky100-module.d-cards.guides .col-md-4 .d-card {
    margin: 0 auto 20px;
  }
}
.husky100-module.d-cards.guides .col-md-4 .d-card .husky100-card {
  color: #fff;
  height: 300px;
  cursor: pointer;
}
.husky100-module.d-cards.guides .col-md-4 .d-card .husky100-card .husky100-bio {
  font-size: 16px;
  font-style: normal;
  padding: 25px 20px;
  height: 300px !important;
  background: #33006f;
  background: rgba(51, 0, 111, 0.25);
}
.husky100-module.d-cards.guides .col-md-4 .d-card .husky100-card .husky100-bio .hr-gold {
  display: block;
  margin: 10px auto;
  text-align: center;
}
.husky100-module.d-cards.guides .col-md-4 .d-card h3 {
  font-size: 18px;
  padding-top: 13px;
  font-weight: 700;
}
.husky100-module.d-cards.guides .col-md-4 .d-card h3 span {
  font-size: 16px ;
}
.husky100-module.d-cards.guides .col-md-4 .d-card h3:after {
  content: ' ';
  color: #e8e3de;
  display: block;
  margin: 13px auto;
  height: 2px;
  width: 42px;
  background: #b7a57a;
}
.husky100-module.d-cards.guides .col-md-4 .d-card .more-btn {
  margin: 10px 0;
  height: 30px;
}
.husky100-module.d-cards.guides .col-md-4 .d-card .more-btn a.read-more {
  position: inherit;
  font-size: 17px;
}
.husky100-module.d-cards.guides .col-md-4:nth-of-type(2) a.read-more {
  background: #85754d;
}
.husky100-module.d-cards.guides .col-md-4:nth-of-type(2) a.read-more:hover {
  color: #85754d;
  background: #fff;
}
@media screen and (max-width: 992px) {
  .husky100-module.d-cards.guides .col-md-4:nth-of-type(2) {
    margin-top: 0;
    padding-top: 15px;
  }
}
.husky100-module.d-cards.guides .col-md-4:nth-of-type(2) .d-card {
  background-color: #4b2e83;
  margin-top: -15px;
  max-width: 337px;
  color: #fff;
}
.husky100-module.d-cards.guides .col-md-4:nth-of-type(2) .d-card .husky100-card {
  height: 320px;
  padding-bottom: 35px;
}
.husky100-module.d-cards.guides .col-md-4:nth-of-type(2) .d-card .husky100-card .husky100-bio {
  height: 320px !important;
}
.husky100-module.d-cards.guides .col-md-4:nth-of-type(2) .d-card h3 {
  color: #e8e3d3;
}
.accordion {
  width: 100%;
  height: 500px;
  overflow: hidden;
  margin: 50px auto;
  position: relative;
  display: flex;
  left: 0;
  background: white;
}
@media screen and (max-width: 991px) {
  .accordion .purple-slant {
    display: none;
  }
  .accordion .slide-content {
    width: 80%;
    background: #4b2e83;
    padding: 25px 30px;
    left: 10%;
  }
  .accordion div.frame:not(.current) {
    display: none !important;
  }
  .accordion .frame {
    transform: none;
    display: block;
  }
  .accordion .frame .slide {
    transform: none;
  }
  .accordion .frame.current {
    transform: none;
    border-right: 0;
  }
  .accordion .frame.current .slide {
    transform: none;
    width: 100%;
    left: 0px;
  }
}
.accordion .slide-content {
  width: 450px;
  position: absolute;
  bottom: 0;
  background: #4b2e83;
  padding: 35px 50px;
  z-index: 2;
  left: 12.25%;
}
.accordion .slide-content,
.accordion .slide-content p,
.accordion .slide-content h2 {
  color: white;
}
.accordion .frame {
  width: 25%;
  margin: 0;
  padding: 0;
  transform: skewX(-15deg);
  overflow: hidden;
  height: 500px;
  margin-right: 20px;
  order: 3;
}
.accordion .frame.current.fr-0 {
  width: 100%;
  order: 0;
}
.accordion .frame.current.fr-1 {
  width: 100%;
}
.accordion .frame.current.fr-2 {
  width: 100%;
  order: 1;
}
.accordion .frame.current.fr-2 {
  width: 100%;
  order: 1;
}
.accordion .frame.current .slide {
  background-size: cover;
  width: 120%;
  left: 0;
}
.accordion .frame.next {
  width: 50%;
}
.accordion .frame .slide {
  display: block;
  vertical-align: bottom;
  position: relative;
  height: 500px;
  background-repeat: no-repeat;
  transform: skew(15deg);
  width: 200%;
  left: -34%;
}
.accordion .frame .slide:before {
  content: '';
}
.accordion .frame .slide#slide-0 {
  background-image: url("/wp-content/uploads/seattle-skyline.png");
}
.accordion .frame .slide#slide-1 {
  background-image: url("/wp-content/uploads/2018/07/campus-air.png");
}
.accordion .frame .slide#slide-2 {
  background-image: url("/wp-content/uploads/2018/07/04182017_UW_0133-4K.jpg");
}
.accordion .frame .slide#slide-3 {
  background-image: url("/wp-content/uploads/dubs-homepage-hero.png");
}
.accordion frame:hover .slide:hover a * {
  opacity: 1;
  -webkit-transform: translateX(0);
  transform: translateX(0);
}
.purple-slant {
  display: inline-block;
  height: 500px;
  width: 130px;
  background: #4b2e83;
  background: rgba(75, 46, 131, 0.9);
  right: 50%;
  position: absolute;
  top: 0%;
  z-index: 2;
  transform: skew(-15deg);
}
.prev,
.next {
  position: absolute;
  font-size: 0px;
  cursor: pointer;
  left: 15%;
  background: transparent;
  border: 0;
}
.prev {
  top: 60%;
  transform: rotate(-180deg);
}
.next {
  top: 40%;
}
.ic-simple-arrow:before {
  color: white;
}
@media screen and (max-width: 600px) {
  .accordion {
    height: auto;
  }
  .accordion .frame .slide,
  .accordion .frame .slide:hover,
  .accordion .frame:hover .slide,
  .accordion .frame:hover .slide:hover {
    position: relative;
    display: table;
    table-layout: fixed;
    width: 100%;
    -webkit-transition: none;
    transition: none;
  }
}
.d-card,
.d-card-gold,
.d-card-purple {
  background-color: #e8e8e8;
  color: #4b2e83;
  padding: 15px 15px 50px 15px;
  position: relative;
  margin-bottom: 20px;
}
.d-card,
.d-card-gold,
.d-card-purple,
.d-card h3,
.d-card-gold h3,
.d-card-purple h3 {
  font-family: "Encode Sans Compressed", sans-serif;
  font-size: 17px;
}
.d-card h3,
.d-card-gold h3,
.d-card-purple h3 {
  margin: 0;
}
.d-card p,
.d-card-gold p,
.d-card-purple p {
  text-align: left;
  margin-top: 10px;
}
.d-card a.read-more,
.d-card-gold a.read-more,
.d-card-purple a.read-more {
  background: #4b2e83;
  color: white;
  position: absolute;
  right: 0;
  bottom: 15px;
  padding: 5px 15px;
  font-size: 15px;
  font-weight: 800;
  font-family: "Encode Sans Compressed", sans-serif;
  font-style: normal;
}
.d-card a.read-more:hover,
.d-card-gold a.read-more:hover,
.d-card-purple a.read-more:hover,
.d-card a.read-more:focus,
.d-card-gold a.read-more:focus,
.d-card-purple a.read-more:focus,
.d-card a.read-more:active,
.d-card-gold a.read-more:active,
.d-card-purple a.read-more:active {
  color: #4b2e83;
  background: #e8e3d3;
}
.d-card img,
.d-card-gold img,
.d-card-purple img {
  /* width: 85px;
		height: 85px;
		clip-path: circle(42px at center); */
  width: auto;
  height: auto;
  clip-path: none;
  border-radius: 0;
}
@media screen and (max-width: 781px) {
  .d-card img,
  .d-card-gold img,
  .d-card-purple img {
    width: 50%;
  }
}
.d-card-purple {
  background-color: #4b2e83;
}
.d-card-purple,
.d-card-purple p {
  color: white;
}
.d-card-purple a.read-more {
  background: #85754d;
}
.d-card-purple a.read-more:hover,
.d-card-purple a.read-more:focus,
.d-card-purple a.read-more:active {
  color: #4b2e83;
  background: #e8e3d3;
}
.d-cards.guides {
  background: #5A5A5A url("assets/gray.jpg") center center no-repeat;
  background-size: cover;
  position: relative;
  overflow: hidden;
  color: white;
  text-align: center;
}
.d-cards.guides .card-container {
  position: relative;
  z-index: 5;
}
.d-cards.guides .card-container > p {
  color: white;
  max-width: 400px;
  margin: 30px auto;
  text-shadow: 2px 2px 4px #000000;
}
.d-cards.guides h2 {
  position: relative;
  overflow: hidden;
}
.d-cards.guides h2:before,
.d-cards.guides h2:after {
  content: "";
  height: 1px;
  width: 33%;
  background-color: white;
  top: 50%;
  left: -140px;
  position: absolute;
}
@media screen and (max-width: 781px) {
  .d-cards.guides h2:before,
  .d-cards.guides h2:after {
    display: none;
  }
}
.d-cards.guides h2:after {
  left: initial;
  right: -140px;
}
.d-cards.guides .hr-gold {
  display: none;
}
.d-cards.guides .d-card,
.d-cards.guides .d-card-gold,
.d-cards.guides .d-card-purple {
  font-family: "Open Sans", sans-serif;
  font-size: 17px;
  font-style: italic;
  padding: 15px;
}
.d-cards.guides .d-card p,
.d-cards.guides .d-card-gold p,
.d-cards.guides .d-card-purple p {
  text-align: center;
}
.d-cards.guides .d-card p:before,
.d-cards.guides .d-card-gold p:before,
.d-cards.guides .d-card-purple p:before,
.d-cards.guides .d-card p:after,
.d-cards.guides .d-card-gold p:after,
.d-cards.guides .d-card-purple p:after {
  content: '"';
  display: block;
  color: #e8e3d3;
  font-size: 70px;
  font-family: "Open Sans", sans-serif;
  line-height: 50px;
  height: 25px;
  vertical-align: middle;
}
.d-cards.guides .d-card p:after,
.d-cards.guides .d-card-gold p:after,
.d-cards.guides .d-card-purple p:after {
  margin-top: 5px;
}
.d-cards.guides:before {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  content: "";
  height: 100%;
  opacity: .8;
  background: #5A5A5A;
  z-index: 1;
}
.d-cards.guides .row {
  margin-top: 50px;
}
@media screen and (min-width: 768px) {
  .d-cards.guides .d-card-purple {
    margin-top: -15px;
    padding-bottom: 50px;
  }
}
.d-cards.guides h3 {
  text-transform: uppercase;
  font-style: normal;
  font-size: 20px;
  font-size: 18px;
  padding-top: 13px;
  font-weight: 700;
}
.d-cards.guides h3 .h-light {
  text-transform: none;
}
.d-seattle-life {
  background: url(assets/cherrytree.jpg) center center no-repeat;
  background-size: cover;
  position: relative;
  overflow: hidden;
  text-shadow: 2px 2px 3px #000000;
  min-height: 450px;
  color: white;
}
.d-seattle-life p {
  color: white;
  font-weight: 900;
}
.d-mailing-list {
  background: #e8e3d3;
  background-size: cover;
  position: relative;
  overflow: hidden;
  padding: 38px 0 100px !important;
}
.d-mailing-list,
.d-mailing-list p {
  color: #4b2e83;
  text-shadow: 1px 1px 1px #fff;
}
@media only screen and (max-width: 768px) {
  .d-mailing-list,
  .d-mailing-list p {
    text-shadow: 1px 1px 4px #fff;
    font-weight: 600;
  }
}
.d-mailing-list a:before {
  background: #B7A57A !important;
}
.d-mailing-list a:after {
  background: url(assets/arrow-white.svg) no-repeat;
  background-size: 20px 20px !important;
}
.d-mailing-list figure.quote-block {
  border-left: 4px solid #B7A57A;
  margin-top: 15%;
}
@media only screen and (max-width: 992px) {
  .d-mailing-list figure.quote-block {
    border-left: none;
    margin: 0 auto 5%;
  }
}
.d-mailing-list figure.quote-block blockquote {
  margin: 0;
  padding: 10px 0 10px 20px;
}
@media only screen and (max-width: 992px) {
  .d-mailing-list figure.quote-block blockquote {
    padding: 0;
    border-left: none;
  }
}
.d-mailing-list figure.quote-block blockquote p {
  border-left: 0 none;
  padding: 0;
  max-width: 50vw;
  font-family: "Encode Sans Compressed", sans-serif;
  font-weight: 600;
  font-size: 21px;
  font-style: normal;
  color: #373A3C;
}
.d-mailing-list figure.quote-block .quote-source {
  text-align: right;
  font-weight: bold;
  font-size: 20px;
}
.d-mailing-list figure.quote-block .quote-source .uw-slant-inline {
  border-left: 1px solid #B7A57A;
  border-right: 1px solid #B7A57A;
  transform: skew(-15deg, 0);
  width: 5px;
  height: 20px;
  display: inline-flex;
  position: relative;
  top: 4px;
  margin: 0 10px;
}
.d-mailing-list figure.quote-block .quote-source .quote-source-title {
  font-weight: normal;
  font-style: italic;
  position: relative;
}
.d-mailing-list:before {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  content: "";
  height: 100%;
  z-index: 1;
}
.d-mailing-list > div {
  z-index: 5;
  position: relative;
}
.d-mailing-list ul li {
  list-style-type: none;
  font-weight: 400;
  margin-left: -20px;
}
.d-mailing-list ul li:before {
  content: '-';
  margin-right: 5px;
}
.d-mailing-list.d-mailing-list-dark {
  text-shadow: 3px 3px 5px rgba(255, 255, 255, 0.8);
}
.d-mailing-list.d-mailing-list-dark,
.d-mailing-list.d-mailing-list-dark p {
  color: #4b2e83;
}
.d-mailing-list.d-mailing-list-dark:before {
  background: white;
  opacity: .2;
}
.d-mailing-list.d-mailing-list-dark h2 {
  color: #4b2e83;
}
.d-col-cards {
  background: #4b2e83;
  padding: 0 !important;
  border-top: solid 3px white;
  border-bottom: solid 3px white;
}
.d-col-cards,
.d-col-cards p {
  color: white;
}
.d-col-cards h2 {
  font-size: 35px;
  margin-bottom: 0;
}
@media only screen and (min-width: 992px) {
  .d-col-cards,
  .d-col-cards .d-col-card {
    height: 450px;
  }
}
.d-col-cards .d-col-card {
  padding: 50px;
}
.d-col-cards .col-md-4:nth-child(2) {
  border-left: solid 3px white;
  border-right: solid 3px white;
}
.d-tiles {
  background: #4b2e83;
  padding: 0 !important;
  border-top: solid 3px white;
  border-bottom: solid 3px white;
}
.d-tiles,
.d-tiles p {
  color: white;
}
.d-tiles h2 {
  font-size: 35px;
  margin: 0;
}
@media only screen and (min-width: 992px) {
  .d-tiles,
  .d-tiles .d-tile {
    height: 450px;
    overflow: hidden;
  }
}
.d-tiles .d-tile {
  padding: 50px;
  border-bottom: solid 3px white;
}
.d-tiles .col-md-4:nth-child(3n-1) {
  border-left: solid 3px white;
  border-right: solid 3px white;
}
@media only screen and (max-width: 992px) {
  .d-tiles .col-md-4:nth-child(3n-1) {
    border-left: solid 0px transparent;
    border-right: solid 0px transparent;
  }
}
.d-tiles.d-btn-tiles a {
  text-align: center;
  display: block;
  color: white;
  text-transform: uppercase;
  font-family: "Encode Sans Normal", sans-serif;
  padding: 20px;
  border: #707070 1px solid;
}
.d-tiles.d-btn-tiles a:hover,
.d-tiles.d-btn-tiles a:active,
.d-tiles.d-btn-tiles a:focus {
  background: #e8e3d3;
  color: #85754d;
}
@media only screen and (min-width: 992px) {
  .d-tiles.d-btn-tiles,
  .d-tiles.d-btn-tiles .d-tile {
    height: auto;
  }
}
.d-tiles.d-btn-tiles .d-tile {
  padding: 30px;
  border-bottom: solid 3px white;
}
.d-slideshow-mini {
  background: white;
}
.d-slideshow-mini .d-slick {
  float: right;
  max-height: 450px;
}
.d-slideshow-mini .slider {
  margin: initial;
}
.d-slideshow-mini .slider img {
  max-height: 450px;
}
.d-slideshow-mini .slick-slide img {
  width: auto !important;
}
.d-slideshow-mini .slick-next {
  right: initial;
  left: 345px;
  top: initial;
  bottom: 30px;
  width: 30px;
  height: 30px;
}
.d-slideshow-mini .slick-dots {
  width: auto;
  bottom: 10px;
  left: 325px;
}
.d-slideshow-mini .slick-dots li {
  padding: 0;
  margin: 0;
}
.d-slideshow-mini .slick-dots li button:before {
  color: white;
  opacity: 1;
  font-size: 12px;
}
.d-slideshow-mini .slick-dots li.slick-active button:before {
  color: #e8e3d3;
  opacity: 1;
}
@media screen and (max-width: 991px) {
  .d-slideshow-mini .slide-content {
    padding-top: 0;
  }
  .d-slideshow-mini .d-slick {
    max-height: 250px;
  }
  .d-slideshow-mini .slider img {
    max-height: 250px;
  }
  .d-slideshow-mini .slick-next {
    right: 20px;
    left: 215px;
    top: initial;
    bottom: 0px;
    width: 30px;
    height: 30px;
  }
  .d-slideshow-mini .slick-dots {
    width: auto;
    bottom: 0px;
    left: 190px;
  }
  .d-slideshow-mini .slick-dots li {
    padding: 0;
    margin: 0;
  }
  .d-slideshow-mini .slick-dots li button:before {
    color: white;
    opacity: 1;
    font-size: 12px;
  }
  .d-slideshow-mini .slick-dots li.slick-active button:before {
    color: #e8e3d3;
    opacity: 1;
  }
}
@media screen and (max-width: 600px) {
  .d-slideshow-mini .d-slick {
    float: none;
  }
  .d-slideshow-mini .slider {
    width: auto;
    padding: 0 15px;
  }
}
.d-slideshow-background {
  padding: 0 !important;
  height: 500px;
}
.d-slideshow-background h2 {
  color: white;
}
.d-slideshow-background .slider {
  margin: 0;
  width: 100%;
  max-height: 500px;
}
@media only screen and (max-width: 991px) {
  .d-slideshow-background .slider {
    max-height: 600px;
  }
}
.d-slideshow-background .slider .slick-slide {
  height: 500px;
  position: relative;
  width: calc(80vw + 70px);
  top: 50%;
  overflow: hidden;
  transform: skewX(-15deg);
  margin-left: 25px;
}
.d-slideshow-background .slider .slick-slide:before {
  content: '';
  display: block;
  position: relative;
  height: 500px;
}
@media only screen and (max-width: 991px) {
  .d-slideshow-background .slider .slick-slide {
    width: 100vw;
    transform: none;
  }
  .d-slideshow-background .slider .slick-slide:before {
    content: none;
  }
}
.d-slideshow-background .slider .slick-slide img {
  width: auto;
  display: block;
  max-width: none;
  min-width: 100%;
  min-height: 100%;
  position: absolute;
  bottom: 0;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) skewX(15deg);
}
.d-slideshow-background .slide-content {
  width: 450px;
  position: absolute;
  bottom: 0;
  background: #4b2e83;
  padding: 35px 50px;
}
@media only screen and (max-width: 992px) {
  .d-slideshow-background .slide-content {
    left: 30px;
  }
}
@media only screen and (max-width: 767px) {
  .d-slideshow-background .slide-content {
    width: 100%;
    left: 0;
  }
}
.d-slideshow-background .slide-content,
.d-slideshow-background .slide-content p {
  color: white;
}
.d-slideshow-background .slick-slide[data-slick-index="3"]:before {
  background: url(/wp-content/uploads/seattle-skyline.png);
}
.d-slideshow-background .slick-slide[data-slick-index="0"]:before {
  background: url(/wp-content/uploads/2018/07/campus-air.png);
}
.d-slideshow-background .slick-slide[data-slick-index="1"]:before {
  background: url(/wp-content/uploads/2018/07/04182017_UW_0133-4K.jpg);
}
.d-slideshow-background .slick-slide[data-slick-index="2"]:before {
  background: url(/wp-content/uploads/2018/07/161207_Campus-Test_00002-X2.jpg);
}
.d-slideshow-background .slick-next,
.d-slideshow-background .slick-prev {
  width: 61px;
  height: 100%;
  top: 0;
  transform: skewX(-15deg);
  margin-left: 81.255vw;
  background: #4b2e83;
}
.d-slideshow-background .slick-next:before,
.d-slideshow-background .slick-prev:before {
  font-size: 50px;
  color: white;
  display: block;
  position: relative;
  font-family: 'uw-icon';
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
}
.d-slideshow-background .slick-next {
  left: 0;
}
.d-slideshow-background .slick-next:before {
  content: "\e939" !important;
  left: -20px;
  top: -30px;
  background: none !important;
}
.d-slideshow-background .slick-prev {
  z-index: 2;
  left: -60px;
}
.d-slideshow-background .slick-prev:before {
  content: "\e939";
  transform: rotate(-180deg);
  top: 30px;
  left: 0;
}
@media only screen and (max-width: 1200px) {
  .d-slideshow-background {
    height: auto;
  }
  .d-slideshow-background .slider {
    height: auto;
  }
  .d-slideshow-background .slider .slick-slide {
    /* height: auto;
				width: 100vw; */
  }
  .d-slideshow-background .slider .slick-slide img {
    max-width: none;
  }
  .d-slideshow-background .container {
    width: 100%;
    margin: 0;
    padding: 0;
  }
  .d-slideshow-background .slide-content {
    margin: 0;
  }
}
@media only screen and (max-width: 991px) {
  .d-slideshow-background .slick-slide img {
    transform: translate(-50%, -50%) skewX(0deg) !important;
  }
  .d-slideshow-background .slick-next,
  .d-slideshow-background .slick-prev {
    display: none !important;
  }
}
.lity {
  background: #eee;
  background: rgba(255, 255, 255, 0.9);
}
.lity-iframe-container iframe {
  margin: 0;
  background: white;
}
.lity-close,
.lity-close:hover,
.lity-close:focus,
.lity-close:active,
.lity-close:visited {
  font-family: "Encode Sans Light", sans-serif;
  color: #e8e3d3;
  width: 100px;
  height: 100px;
  font-size: 100px;
}
.lity-close {
  color: #4b2e83;
}
.d-video {
  position: relative;
  overflow: hidden;
}
.d-video > div {
  position: relative;
}
.d-video h2 {
  margin-top: 50px;
}
.d-video img {
  width: 100%;
}
.d-video-play {
  position: relative;
  display: inline-block;
}
.d-video-play:after {
  content: '';
  display: block;
  top: 0;
  width: 100%;
  left: 0;
  height: 100%;
  position: absolute;
  -webkit-filter: drop-shadow(1px 1px 5px rgba(0, 0, 0, 0.5));
  filter: drop-shadow(1px 1px 5px rgba(0, 0, 0, 0.5));
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 150 150" class="opening-slash" aria-role=""><circle id="play-cir" fill="none" stroke="#fff" stroke-width="4.649" stroke-miterlimit="10" cx="75" cy="75" r="70"/><path id="play-tri" fill="#fff" d="M57.767,46.187L110.382,75l-52.616,28.816"/></svg>') no-repeat center center;
}
.d-video-play:hover:after,
.d-video-play:focus:after,
.d-video-play:active:after {
  fill: #4b2e83;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 150 150" class="opening-slash" aria-role=""><circle id="play-cir" fill="none" stroke="#4B2E83" stroke-width="4.649" stroke-miterlimit="10" cx="75" cy="75" r="70"/><path id="play-tri" fill="#4B2E83" d="M57.767,46.187L110.382,75l-52.616,28.816"/></svg>') no-repeat center center;
}
@media only screen and (max-width: 768px) {
  .hidden-sm-down {
    display: none;
  }
}
.d-photo img,
.d-columns img {
  max-height: 500px;
}
.d-photo p,
.d-columns p {
  max-width: 400px;
}
/* Find a counselor page and form */
.staff-listing img {
  clip-path: circle(75px at center);
  margin: 20px 0 12px;
  border-radius: 75px;
}
.staff-listing .text-center {
  min-height: 60px;
  padding: 1rem 0;
}
.staff-listing div a:focus,
.staff-listing div:hover {
  opacity: .5;
}
html body ul#suggestions {
  border: none;
}
html body ul {
  text-indent: 0;
  list-style: disc;
}
html body h2 {
  margin-top: 1rem;
}
.form-text {
  width: 38rem;
}
#counselor-profile {
  margin: 0 0 2rem;
}
.btn-primary {
  margin: 1.2rem 0 1.5rem;
}
/* CSS spinner ever */
.lds-spinner {
  color: official;
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
}
.lds-spinner div {
  transform-origin: 32px 32px;
  animation: lds-spinner 1.2s linear infinite;
}
.lds-spinner div:after {
  content: " ";
  display: block;
  position: absolute;
  top: 3px;
  left: 29px;
  width: 5px;
  height: 14px;
  border-radius: 20%;
  background: #4b2e83;
}
.lds-spinner div:nth-child(1) {
  transform: rotate(0deg);
  animation-delay: -1.1s;
}
.lds-spinner div:nth-child(2) {
  transform: rotate(30deg);
  animation-delay: -1s;
}
.lds-spinner div:nth-child(3) {
  transform: rotate(60deg);
  animation-delay: -0.9s;
}
.lds-spinner div:nth-child(4) {
  transform: rotate(90deg);
  animation-delay: -0.8s;
}
.lds-spinner div:nth-child(5) {
  transform: rotate(120deg);
  animation-delay: -0.7s;
}
.lds-spinner div:nth-child(6) {
  transform: rotate(150deg);
  animation-delay: -0.6s;
}
.lds-spinner div:nth-child(7) {
  transform: rotate(180deg);
  animation-delay: -0.5s;
}
.lds-spinner div:nth-child(8) {
  transform: rotate(210deg);
  animation-delay: -0.4s;
}
.lds-spinner div:nth-child(9) {
  transform: rotate(240deg);
  animation-delay: -0.3s;
}
.lds-spinner div:nth-child(10) {
  transform: rotate(270deg);
  animation-delay: -0.2s;
}
.lds-spinner div:nth-child(11) {
  transform: rotate(300deg);
  animation-delay: -0.1s;
}
.lds-spinner div:nth-child(12) {
  transform: rotate(330deg);
  animation-delay: 0s;
}
@keyframes lds-spinner {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
.form-text {
  width: 100% !important;
  outline: 1px solid #e3e3e3;
  padding: 5px 10px;
  word-break: break-word;
}
/**
 * Quicklinks
 * Taken from Admissions uw-2014-child theme by EIS
 */
#uw-container #quicklinks p {
  font-size: 19px;
  color: white;
  margin: 40px 0 30px 0;
  position: relative;
  font-family: "Encode Sans Normal", sans-serif;
}
#uw-container #quicklinks p:after {
  content: "";
  display: block;
  width: 30px;
  height: 1px;
  background-color: white;
  position: absolute;
  bottom: -19px;
}
#uw-container #quicklinks ul.big-links {
  list-style: none;
  margin-top: 10px;
}
#uw-container #quicklinks ul.big-links li {
  display: block;
  width: 100%;
  padding: 14px 0 0 0;
}
#uw-container #quicklinks ul.big-links li a {
  font-family: "Encode Sans Compressed", sans-serif;
  font-size: 19px;
  margin-left: 15px;
}
#uw-container #quicklinks ul.big-links li a:hover,
#uw-container #quicklinks ul.big-links li a:focus {
  color: #ffd800;
  text-decoration: underline;
}
#uw-container #quicklinks ul#big-links li span,
#uw-container #quicklinks ul.big-links li span {
  display: block;
  float: left;
  width: 30px;
  height: 30px;
  background: url(assets/svg/uw-sprite-ooa.svg) no-repeat 0 0;
}
#uw-container #quicklinks ul#big-links li .icon-maps,
#uw-container #quicklinks ul.big-links li .icon-maps {
  background-position: 6px -303px;
}
#uw-container #quicklinks ul#big-links li .icon-directories,
#uw-container #quicklinks ul.big-links li .icon-directories {
  background-position: -84px -303px;
}
#uw-container #quicklinks ul#big-links li .icon-calendar,
#uw-container #quicklinks ul.big-links li .icon-calendar {
  background-position: -39px -303px;
}
#uw-container #quicklinks ul#big-links li .icon-libraries,
#uw-container #quicklinks ul.big-links li .icon-libraries {
  background-position: -129px -303px;
}
#uw-container #quicklinks ul#big-links li .icon-medicine,
#uw-container #quicklinks ul.big-links li .icon-medicine {
  background-position: -264px -303px;
}
#uw-container #quicklinks ul#big-links li .icon-myuw,
#uw-container #quicklinks ul.big-links li .icon-myuw {
  background-position: -174px -303px;
}
#uw-container #quicklinks ul#big-links li .icon-uwtoday,
#uw-container #quicklinks ul.big-links li .icon-uwtoday {
  background-position: -219px -303px;
}
#uw-container #quicklinks ul#big-links li .icon-contact,
#uw-container #quicklinks ul.big-links li .icon-contact {
  background-position: -378px -303px !important;
}
#uw-container #quicklinks ul#big-links li .icon-social,
#uw-container #quicklinks ul.big-links li .icon-social {
  background-position: -218px -352px;
}
#uw-container #quicklinks ul#big-links li .icon-campus,
#uw-container #quicklinks ul.big-links li .icon-campus {
  background-position: -306px -303px;
}
.widget_text {
  padding: 0;
  margin: 0 0 40px 40px;
  border: 1px solid #c9c9c9;
}
.widget_text p,
.widget_text {
  font-size: 16px !important;
}
.widget_text h2.widgettitle {
  margin: 0;
  padding: 16px 19px;
  font-family: "Encode Sans Compressed", sans-serif;
  font-size: 20px;
  background: #4b2e83;
  color: white;
  text-transform: none;
  font-weight: 700;
}
.widget_text h2.widgettitle:before,
.widget_text h2.widgettitle:after {
  content: none;
}
.widget_text .textwidget {
  margin: 10px 20px;
}
@media screen and (max-width: 991px) {
  .widget_text {
    margin: 40px 0 0 ;
  }
}
.content-block {
  padding: 0;
  margin: 0;
  border: 0;
}
.content-block .widgettitle {
  display: none;
}
.content-block .textwidget {
  margin: 0;
}
.alert-msg {
  background: #b7a57a;
  padding: 20px;
  margin-bottom: 10px;
}
.alert-msg div {
  color: #ffffff;
}
/* International Baccalaureate & Advanced Placement tables, and A Level, AS Level  exams*/
.ib-tables table th:first-child,
.ap-tables table th:first-child,
#aas-exams table th:first-child {
  width: 20%;
}
.ib-tables table th:nth-child(2),
.ap-tables table th:nth-child(2),
#aas-exams table th:nth-child(2) {
  width: 15%;
}
.ib-tables table th:nth-child(3),
.ap-tables table th:nth-child(3),
#aas-exams table th:nth-child(3) {
  width: 15%;
}
.ib-tables table th:nth-child(4),
.ap-tables table th:nth-child(4),
#aas-exams table th:nth-child(4) {
  width: 30%;
}
.ib-tables table th:nth-child(5),
.ap-tables table th:nth-child(5),
#aas-exams table th:nth-child(5) {
  width: 20%;
}
/*Academic Planning Worksheets styles */
.lg-bg {
  background: #e2e2e2;
  padding: 20px;
}
.page-template-apw .uw-body div.uw-site-title {
  display: none;
}
.page-template-apw table {
  margin-top: 20px;
}
.page-template-apw th {
  min-width: 20%;
}
.page-template-apw input {
  border: 0;
  border-bottom: 1px solid #4b2383;
  background: transparent;
}
.page-template-apw .example td {
  font-size: 13px;
  font-style: italic;
}
.page-template-apw .print-btn {
  cursor: pointer;
}
.page-template-apw a {
  word-break: break-word;
}
.page-template-apw textarea {
  min-width: 10%;
  width: 100%;
}
.page-template-apw .gpa-table {
  display: table;
  padding: 0;
  width: 90%;
  outline: 1px solid #d9d9d9;
}
.page-template-apw .gpa-table li {
  display: table-row;
  text-indent: 15px;
  border: 1px solid #d9d9d9;
}
.page-template-apw .gpa-table li:first-child {
  display: table-caption;
  padding: 15px;
}
.page-template-apw .gpa-table li:nth-child(even) {
  background: #e2e2e2;
}
.page-template-apw .gpa-table li span {
  display: table-cell;
  padding: 5px 30px 0 0;
}
.page-template-apw .gpa-table li span:nth-of-type(2) {
  font-weight: 700;
  text-align-last: end;
}
@media only screen and (max-width: 550px) {
  .page-template-apw .full-width {
    width: 100% !important;
  }
  .page-template-apw .small-hide {
    display: none !important;
  }
}
/*Responsive Table styles */
@media screen and (max-width: 550px) {
  .table {
    table-layout: fixed;
    font-size: 14px;
    overflow-wrap: break-word;
    word-wrap: break-word;
    -webkit-hyphens: auto;
    -ms-hyphens: auto;
    hyphens: auto;
  }
}
@media screen and (max-width: 400px) {
  .table td {
    padding: 8px 4px !important;
    font-size: 13px;
  }
}
@media screen and (max-width: 400px) {
  .table th {
    overflow: scroll;
    padding: 8px 4px !important;
    font-size: 11px;
    height: 60px;
  }
}
.table th span.hyphen {
  display: inline-block;
  width: 5px;
  vertical-align: middle;
  position: relative;
  left: 1px;
  border-top: 1px solid #4b2e83;
}
/* Sample a Class styles */
.page-template-sample-class #searchform {
  outline: none;
}
.page-template-sample-class #datafetch {
  padding: 20px 10px;
  border-bottom: 1px solid #cccccc;
}
.page-template-sample-class .uw-accordion-shortcode {
  scroll-behavior: smooth;
  width: 100%;
  height: auto;
}
.page-template-sample-class .uw-accordion-shortcode__panel {
  padding: 0 20px 20px;
}
.page-template-sample-class .uw-accordion-shortcode__header {
  padding: 20px 5px;
  scroll-behavior: smooth;
}
.page-template-sample-class .accordion {
  margin: 30px auto;
}
@media screen and (max-width: 768px) {
  .page-template-sample-class #mobile-relative.frontpage {
    margin-top: 55px;
  }
}
@media screen and (max-width: 550px) {
  .page-template-sample-class .uw-body a:focus,
  .page-template-sample-class .uw-body a:hover {
    color: initial;
  }
}
/* Academic Majors styles */
.single-academic-majors iframe {
  border: none;
  margin-top: 0;
}
li {
  list-style-type: disc;
}
.next-posts,
.prev-posts {
  text-transform: uppercase;
  font-weight: 600;
  font-size: .9rem;
}
#no-match,
#message-div {
  display: none;
}
.majors {
  padding-bottom: 15px;
  border-bottom: 1px solid #e9e9e9;
}
.grid {
  z-index: 0;
  background: white;
  height: auto !important;
}
.grid .uw-accordion-shortcode h3 {
  display: none;
}
.grid:after {
  /* clear fix */
  content: '';
  display: block;
  clear: both;
}
.wrapper {
  position: relative;
  z-index: 3;
  background: white;
}
.ui-group {
  display: inline-block;
}
.ui-group .btn.btn-lg:focus {
  box-shadow: none !important;
  border: 0;
}
.ui-group .btn.btn-lg.is-checked,
.ui-group .btn.btn-lg:hover {
  background: #4b2e83;
}
.ui-group .btn.btn-lg.is-checked[data-filter] span,
.ui-group .btn.btn-lg:hover[data-filter] span {
  color: #ffffff;
}
.ui-group .btn.btn-lg.is-checked[data-filter=".arts"],
.ui-group .btn.btn-lg:hover[data-filter=".arts"] {
  background: #3c6b2e;
}
.ui-group .btn.btn-lg.is-checked[data-filter=".business"],
.ui-group .btn.btn-lg:hover[data-filter=".business"] {
  background: #072481;
}
.ui-group .btn.btn-lg.is-checked[data-filter=".computing"],
.ui-group .btn.btn-lg:hover[data-filter=".computing"] {
  background: #f9900d;
}
.ui-group .btn.btn-lg.is-checked[data-filter=".engineering"],
.ui-group .btn.btn-lg:hover[data-filter=".engineering"] {
  background: #c7b80e;
}
.ui-group .btn.btn-lg.is-checked[data-filter=".health"],
.ui-group .btn.btn-lg:hover[data-filter=".health"] {
  background: magenta;
}
.ui-group .btn.btn-lg.is-checked[data-filter=".naturalsciences"],
.ui-group .btn.btn-lg:hover[data-filter=".naturalsciences"] {
  background: #6f4b16;
}
.ui-group .btn.btn-lg.is-checked[data-filter=".socialsciences"],
.ui-group .btn.btn-lg:hover[data-filter=".socialsciences"] {
  background: #e25057;
}
.ui-group .btn.btn-lg.is-checked span,
.ui-group .btn.btn-lg:hover span {
  background: inherit;
  border-color: transparent;
  color: white;
}
.ui-group h3 {
  display: inline-block;
  margin-right: 0.2em;
  font-size: 16px;
}
.ui-group button,
.ui-group .button {
  background: #e8e3d3;
  color: #4b2e83;
  text-align: center;
  justify-content: center;
  font-size: 16px;
  margin-left: 10px;
}
.ui-group button span,
.ui-group .button span {
  background-color: transparent !important;
  border: 0 !important;
}
.ui-group button:hover,
.ui-group .button:hover {
  background-color: inherit;
}
.ui-group button span,
.ui-group .button span {
  background: transparent;
  padding: 10px 10px !important;
}
.ui-group button span:before,
.ui-group .button span:before {
  content: none !important;
}
.ui-group:hover {
  transition: none;
  transform: none;
}
.ui-group .filter-search {
  display: flex;
}
.info-block {
  background: #eeeeee;
  border-left: 2px solid #4b2e83;
  column-gap: 20px;
  margin-bottom: 20px;
  padding: 15px;
}
.info-block .img {
  height: 100%;
  width: 100%;
}
.info-block .img img {
  object-fit: cover;
  height: 100%;
}
.input-group {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  -webkit-box-align: stretch;
  align-items: stretch;
  width: 100%;
}
.input-group.search {
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  width: 30%;
}
.input-group.search input[type='search'] {
  border-width: 2px;
  border-style: solid;
  border-color: #dddddd;
  border-image: initial;
  background: padding-box padding-box #f5f5f5;
}
.input-group .form-control {
  border-color: #ddd !important;
  border-radius: 2px !important;
}
.input-group .form-control:focus {
  color: #6c7594;
  background-color: #ffffff;
  box-shadow: rgba(75, 46, 131, 0.25) 0px 0px 0px 0.2rem;
  border-color: #8967ca;
  outline: 0px;
}
.input-group .form-control.form-control-lg {
  padding: 1.5rem;
  height: 54px;
  font-size: 17px;
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.5;
  border-radius: 0.3rem;
}
#interest-areas {
  display: inline-block;
}
#interest-areas #all {
  min-height: unset;
  width: 100%;
  box-shadow: none;
  margin-bottom: 20px;
}
#interest-areas p {
  font-size: 15px;
}
#interest-areas .subject {
  margin-right: 15px;
  padding: 0 10px;
  height: auto;
  cursor: pointer;
  width: 48%;
  float: left;
  min-height: 225px;
  list-style-type: none;
}
@media only screen and (max-width: 768px) {
  #interest-areas .subject {
    width: 100%;
    min-height: unset;
  }
}
#interest-areas .subject:hover {
  box-shadow: 0px 0px 10px -1px grey;
  transform: scale(1.01);
  transition: transform .13s;
}
#interest-areas .subject.all {
  display: block;
  margin: 20px 0;
  min-height: unset;
  width: 100%;
}
#interest-areas .subject.all:hover {
  box-shadow: none;
  transform: none;
}
.quicksearch {
  border-color: #ddd;
  border-radius: 2px;
  height: 38px;
  padding: 0.375rem 0.75rem;
  font-size: 17px;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  margin: 20px 5px;
  width: 100%;
}
.quicksearch:focus {
  color: #495057;
  background-color: #fff;
  border-color: #8967ca;
  outline: 0;
  -webkit-box-shadow: 0 0 0 0.2rem rgba(75, 46, 131, 0.25);
  box-shadow: 0 0 0 0.2rem rgba(75, 46, 131, 0.25);
}
.filter.singleMajor .student-type {
  padding: 0 20px;
}
.filter.singleMajor #uw-accordion-shortcode .uw-accordion-shortcode__header {
  padding-left: unset;
}
.filter.singleMajor #uw-accordion-shortcode h3 {
  display: inline-block;
}
.filter.singleMajor #uw-accordion-shortcode ul {
  padding-left: 2rem;
}
.filter:not(.singleMajor) {
  position: unset !important;
  top: inherit !important;
}
.filter:not(.singleMajor) span {
  position: relative;
  z-index: 1;
  display: inline-block;
  width: 23px;
  top: -16px;
}
.filter:not(.singleMajor) span:before {
  display: inline;
  position: relative;
  top: 15px;
}
.filter:not(.singleMajor) #uw-accordion-shortcode h3 {
  display: none;
}
.filter:not(.singleMajor).show {
  display: block;
}
.filter:not(.singleMajor) .uw-accordion-shortcode__header {
  padding-left: 19%;
}
.filter:not(.singleMajor) .uw-accordion-shortcode__header:hover,
.filter:not(.singleMajor) .uw-accordion-shortcode__header:focus {
  background-color: #ffffff;
}
@media screen and (max-width: 768px) {
  .filter:not(.singleMajor) .uw-accordion-shortcode__header {
    text-align: center;
  }
}
.filter:not(.singleMajor) .uw-accordion-shortcode__header[aria-expanded="false"]:before {
  background-image: none;
  content: "more...";
  font-size: 13px;
  line-height: 3;
  font-weight: 100;
}
.filter:not(.singleMajor) .uw-accordion-shortcode__header[aria-expanded="true"]:before {
  background-image: none;
  content: "close";
  font-size: 13px;
  line-height: 3;
}
.filter:not(.singleMajor) .btn-lg {
  border-color: #B7A57A;
  background-color: #B7A57A;
  color: white;
  font-size: 16px;
  border: 1px solid;
  text-transform: uppercase;
  font-family: "Encode Sans Compressed", sans-serif;
  font-weight: 600;
  align-items: center;
  line-height: 40px !important;
  padding: 0 20px;
  padding-right: inherit;
}
.filter:not(.singleMajor) .btn-lg:hover {
  background: #4b2e83;
  color: white;
}
.filter:not(.singleMajor) .btn.btn-lg span.arrow-box,
.filter:not(.singleMajor) .btn-group-lg > .btn span.arrow-box,
.filter:not(.singleMajor) .btn.btn-sm span.arrow-box,
.filter:not(.singleMajor) .btn-group-sm > .btn span.arrow-box {
  padding: 10px 28px 10px 10px;
  border: 0 none;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-left: 30px;
}
.filter:not(.singleMajor) .btn.btn-lg.white.arrow span.arrow-box .arrow,
.filter:not(.singleMajor) .btn.btn-sm.white.arrow span.arrow-box .arrow {
  border-color: #373A3C;
  background-color: #e8e3d3;
  bottom: 0;
}
.filter:not(.singleMajor) .btn.btn-lg.white.arrow span.arrow-box,
.filter:not(.singleMajor) .btn.btn-sm.white.arrow span.arrow-box {
  background-color: #e8e3d3;
  bottom: 0;
}
.filter:not(.singleMajor) li:before {
  content: " ";
  height: 16px;
  width: 16px;
  display: inline-block;
  border-radius: 50%;
  margin: 0 10px 0 1px;
}
.filter:not(.singleMajor) span:before {
  content: " ";
  height: 16px;
  width: 16px;
  display: inline-block;
  border-radius: 50%;
  margin: 0 10px 0 1px;
}
.filter:not(.singleMajor) span .cc:before {
  content: "";
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 15px solid #85754d;
  display: inline-block;
  margin-right: 10px;
  border-radius: 0 !important;
}
.filter:not(.singleMajor) span h3,
.filter:not(.singleMajor) li h3 {
  display: inline;
}
.filter:not(.singleMajor) span.arrow-box:before,
.filter:not(.singleMajor) li.arrow-box:before {
  content: unset;
}
.filter:not(.singleMajor) span.arrow:before,
.filter:not(.singleMajor) li.arrow:before {
  content: unset;
}
.filter:not(.singleMajor) span.green:before,
.filter:not(.singleMajor) li.green:before {
  background: #3c6b2e;
}
.filter:not(.singleMajor) span.blue:before,
.filter:not(.singleMajor) li.blue:before {
  background: blue;
}
.filter:not(.singleMajor) span.orange:before,
.filter:not(.singleMajor) li.orange:before {
  background: #f9900d;
}
.filter:not(.singleMajor) span.yellow:before,
.filter:not(.singleMajor) li.yellow:before {
  background: #c7b80e;
}
.filter:not(.singleMajor) span.pink:before,
.filter:not(.singleMajor) li.pink:before {
  background: magenta;
}
.filter:not(.singleMajor) span.brown:before,
.filter:not(.singleMajor) li.brown:before {
  background: #4e340e;
}
.filter:not(.singleMajor) span.red:before,
.filter:not(.singleMajor) li.red:before {
  background: #e25057;
}
.filter li.subject {
  width: 100%;
  min-height: unset;
  margin: 0 0 10px 0px;
  text-indent: -30px;
  cursor: pointer;
  border-bottom: 2px solid transparent;
  list-style-type: none;
}
.filter li.subject .info {
  text-indent: 0;
  display: none;
  font-size: 15px;
  border-top: 2px solid #e2ddeb;
  padding: 2px 15px 5px;
}
.filter li.subject:hover {
  box-shadow: none;
  transform: none;
  border-bottom: 2px solid #4b2e83;
}
.filter li.om:before {
  left: 27px;
  top: 7px !important;
}
.filter .om,
.filter .min,
.filter .cc,
.filter .direct,
.filter .green,
.filter .blue,
.filter .orange,
.filter .pink,
.filter .brown,
.filter .yellow,
.filter .red {
  list-style-type: none;
  margin-left: 5px;
  text-indent: -5px;
}
.cc:before {
  content: "";
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 15px solid #85754d;
  display: inline-block;
  margin-right: 10px;
  border-radius: 0 !important;
}
.min:before {
  content: "";
  width: 20px !important;
  height: 5px !important;
  background: #85754d;
  display: inline-block !important;
  margin: 0px 10px 5px 0px !important;
  border-radius: 0 !important;
}
.om:before {
  color: #85754d;
  content: "+" !important;
  position: relative;
  padding-right: 11px;
  font-size: 40px;
  line-height: 0;
  top: 20px !important;
  font-weight: 900;
  text-shadow: 0px 0px #85754d, 0px 0px #85754d;
  border-radius: 0;
}
.direct:before {
  color: #85754d;
  content: "*";
  position: relative;
  padding-right: 10px;
  font-size: 40px;
  line-height: 0;
  top: 15px;
  font-weight: 900;
}
a[href*="main_content"] {
  padding: 10px 0 30px;
  display: inline-block;
}
/*===============================*/
/* Campus Tour Calendar styles */
.page-template-calendar .fc-widget-header {
  font-weight: 600;
  font-size: 25px;
  color: #fff;
  border: 1px solid white !important;
  background: #4b2e83;
}
.page-template-calendar .fc-ltr .fc-basic-view .fc-day-top .fc-day-number {
  font-weight: 900;
}
.page-template-calendar .fc-event {
  border-radius: 0;
  margin: 3px 2px;
  padding: 3px;
}
/*==== CEEB CODE styles ====*/
ul#suggestions {
  cursor: pointer;
  border-left: 1px solid;
}
.no-school {
  color: red;
  text-indent: -20px;
  padding-bottom: 10px;
  font-weight: 900;
  text-transform: uppercase;
}
.ui-datepicker-title select {
  color: black;
}
@media print {
  @page {
    font-size: 12pt;
  }
  #header,
  #footer,
  .uw-footer,
  #sidebar #nav,
  #date,
  .no-print,
  hr,
  header,
  footer,
  aside,
  nav,
  form,
  iframe,
  .menu,
  .hero,
  .adslot,
  .print-btn {
    display: none !important;
  }
  sup {
    margin-top: -5pt;
    font-size: 10pt;
    padding-bottom: 10pt;
  }
  small {
    font-size: 8pt;
    margin-bottom: 0;
  }
  .col-sm-7 {
    width: 58%;
    float: left;
  }
  .col-sm-5 {
    width: 41%;
    float: right;
  }
  a[href*='//']:after {
    content: " (" attr(href) ") ";
    color: $primary;
  }
  sup {
    margin-top: -5pt;
    font-size: 10pt;
    padding-bottom: 10pt;
  }
  small {
    font-size: 8pt;
    margin-bottom: 0;
  }
  textarea {
    border: 0;
    resize: none;
  }
  .col-sm-7 {
    width: 58%;
    float: left;
  }
  .col-sm-5 {
    width: 41%;
    float: right;
  }
}
/* ========== Tour Guide Page ================ */
.guide-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(32%, 0.33fr));
  grid-gap: 10px 10px;
}
@media screen and (max-width: 550px) {
  .guide-grid {
    display: block;
  }
}
.guide-grid .guide {
  background: #e8e3d3;
  padding: 5px;
  margin-top: 10px;
}
@media screen and (max-width: 550px) {
  .guide-grid .guide {
    text-align: center;
  }
}
.guide-grid .guide .tour-guide img {
  height: 155px;
  width: 235px;
  object-fit: cover;
}
.selections {
  display: grid;
  grid-template-columns: 45% 1fr 45%;
  text-align: center;
}
@media screen and (max-width: 500px) {
  .selections {
    display: block;
    text-align: left;
  }
  .selections select {
    width: 100%;
  }
}
.selections select {
  width: 225px;
  height: 40px;
  background: #e8e3d3;
}
ul.sessionNav {
  list-style-type: none;
  flex-wrap: wrap;
  padding: 0;
  align-content: space-around;
  justify-content: space-between;
}
ul.sessionNav li {
  padding: 10px;
  background: #e9e9e9;
  border: 4px solid #fff;
  width: 23%;
  display: inline-block;
}
.sessions .uw-accordion-shortcode__header {
  padding-left: 70px;
  top: -50px;
}
.sessions .uw-accordion-shortcode__header:hover,
.sessions .uw-accordion-shortcode__header:focus {
  background-color: transparent;
}
.sessions [class^="ic-"]:before,
.sessions [class*=" ic-"]:before {
  font-size: 55px;
}
.uw-story-body .profile-boxes ul.profiles li.profile.active-focus .profile-cover.enable h3,
.uw-story-body .profile-boxes ul.profiles li.profile.active-focus .profile-cover.enable p,
.uw-story-body .profile-boxes ul.profiles li.profile.active .profile-cover.enable h3,
.uw-story-body .profile-boxes ul.profiles li.profile.active .profile-cover.enable p,
.uw-story-body .profile-boxes ul.profiles li.profile:active .profile-cover.enable h3,
.uw-story-body .profile-boxes ul.profiles li.profile:active .profile-cover.enable p,
.uw-story-body .profile-boxes ul.profiles li.profile:focus .profile-cover.enable h3,
.uw-story-body .profile-boxes ul.profiles li.profile:focus .profile-cover.enable p,
.uw-story-body .profile-boxes ul.profiles li.profile:hover .profile-cover.enable h3,
.uw-story-body .profile-boxes ul.profiles li.profile:hover .profile-cover.enable p {
  text-align: left;
  padding-left: 15px;
}
.uw_stories-template-default #uw-container {
  overflow-x: hidden;
}
.uw-story-body .heading h2 {
  font-size: 65px;
}
.uw-story-body h3 {
  font-size: 30px;
}
.uw-story-body iframe {
  margin-top: 15px;
}
.uw-story-body .row {
  margin-left: -15px;
  margin-right: -15px;
}
.uw-story-body .row [class*="col"] {
  padding-left: 0;
}
.uw-story-body .toggle-block .toggle-container {
  width: 100%;
}
.btn {
  border-radius: 2px;
  padding: 5px 20px;
}
.btn-lg,
.btn-group-lg > .btn {
  padding: 0;
  margin: 10px 0;
  font-size: 1rem;
}
a.btn.btn-lg,
a.btn.btn-sm {
  text-decoration: none;
}
.btn.btn-lg,
.btn.btn-sm {
  border-radius: 0;
  padding-right: 0;
  text-align: left;
  transition: none;
  display: inline-flex;
  align-items: stretch;
  line-height: 1.2;
}
.btn.btn-lg:hover,
.btn.btn-sm:hover,
.btn.btn-lg:active,
.btn.btn-sm:active,
.btn.btn-lg:focus,
.btn.btn-sm:focus {
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.btn.btn-lg span,
.btn.btn-sm span {
  border: 1px solid;
  text-transform: uppercase;
  font-family: 'Encode Sans Compressed', sans-serif;
  font-weight: 600;
  text-align: center;
  padding: 10px 20px;
}
@media screen and (max-width: 500px) {
  .btn.btn-lg span,
  .btn.btn-sm span {
    padding: 10px;
  }
}
.btn.btn-lg span.arrow-box,
.btn.btn-sm span.arrow-box {
  padding: 10px 18px 10px 10px;
  border: 0 none;
  display: flex;
  align-items: center;
}
.btn.btn-lg span.arrow-box.dropdown-box,
.btn.btn-sm span.arrow-box.dropdown-box {
  padding: 12px 10px;
}
.btn.btn-lg span.arrow-box .arrow,
.btn.btn-sm span.arrow-box .arrow {
  border: solid;
  border-width: 0 1px 1px 0;
  padding: 6px;
  transform: rotate(-45deg);
}
.btn.btn-lg span.arrow-box .arrow.dropdown-arrow,
.btn.btn-sm span.arrow-box .arrow.dropdown-arrow {
  border: solid;
  border-width: 8px 8px 0 8px;
  padding: 0;
  transform: rotate(0);
}
.btn.btn-lg.dropdown-toggle::after,
.btn.btn-sm.dropdown-toggle::after {
  display: none;
}
.btn.btn-lg.purple span,
.btn.btn-sm.purple span,
.btn.btn-lg.primary span,
.btn.btn-sm.primary span,
.btn.btn-lg.btn-primary span,
.btn.btn-sm.btn-primary span {
  border-color: #4b2e83;
  background-color: #4b2e83;
  color: white;
}
.btn.btn-lg.purple:hover span,
.btn.btn-sm.purple:hover span,
.btn.btn-lg.primary:hover span,
.btn.btn-sm.primary:hover span,
.btn.btn-lg.btn-primary:hover span,
.btn.btn-sm.btn-primary:hover span,
.btn.btn-lg.purple:active span,
.btn.btn-sm.purple:active span,
.btn.btn-lg.primary:active span,
.btn.btn-sm.primary:active span,
.btn.btn-lg.btn-primary:active span,
.btn.btn-sm.btn-primary:active span {
  border-color: #B7A57A;
  background-color: #B7A57A;
  color: white;
}
.btn.btn-lg.purple:focus,
.btn.btn-sm.purple:focus,
.btn.btn-lg.primary:focus,
.btn.btn-sm.primary:focus,
.btn.btn-lg.btn-primary:focus,
.btn.btn-sm.btn-primary:focus {
  box-shadow: 0 0 0 0.2rem rgba(75, 46, 131, 0.5);
  border-color: rgba(75, 46, 131, 0.5);
}
.btn.btn-lg.purple.arrow:hover span.arrow-box .arrow,
.btn.btn-sm.purple.arrow:hover span.arrow-box .arrow,
.btn.btn-lg.primary.arrow:hover span.arrow-box .arrow,
.btn.btn-sm.primary.arrow:hover span.arrow-box .arrow,
.btn.btn-lg.btn-primary.arrow:hover span.arrow-box .arrow,
.btn.btn-sm.btn-primary.arrow:hover span.arrow-box .arrow,
.btn.btn-lg.purple.arrow:active span.arrow-box .arrow,
.btn.btn-sm.purple.arrow:active span.arrow-box .arrow,
.btn.btn-lg.primary.arrow:active span.arrow-box .arrow,
.btn.btn-sm.primary.arrow:active span.arrow-box .arrow,
.btn.btn-lg.btn-primary.arrow:active span.arrow-box .arrow,
.btn.btn-sm.btn-primary.arrow:active span.arrow-box .arrow,
.btn.btn-lg.purple.arrow:hover span.arrow-box,
.btn.btn-sm.purple.arrow:hover span.arrow-box,
.btn.btn-lg.primary.arrow:hover span.arrow-box,
.btn.btn-sm.primary.arrow:hover span.arrow-box,
.btn.btn-lg.btn-primary.arrow:hover span.arrow-box,
.btn.btn-sm.btn-primary.arrow:hover span.arrow-box,
.btn.btn-lg.purple.arrow:active span.arrow-box,
.btn.btn-sm.purple.arrow:active span.arrow-box,
.btn.btn-lg.primary.arrow:active span.arrow-box,
.btn.btn-sm.primary.arrow:active span.arrow-box,
.btn.btn-lg.btn-primary.arrow:active span.arrow-box,
.btn.btn-sm.btn-primary.arrow:active span.arrow-box {
  background-color: #B7A57A;
  border-color: white;
}
.btn.btn-lg.purple.arrow:hover span.arrow-box .arrow.dropdown-arrow,
.btn.btn-sm.purple.arrow:hover span.arrow-box .arrow.dropdown-arrow,
.btn.btn-lg.primary.arrow:hover span.arrow-box .arrow.dropdown-arrow,
.btn.btn-sm.primary.arrow:hover span.arrow-box .arrow.dropdown-arrow,
.btn.btn-lg.btn-primary.arrow:hover span.arrow-box .arrow.dropdown-arrow,
.btn.btn-sm.btn-primary.arrow:hover span.arrow-box .arrow.dropdown-arrow,
.btn.btn-lg.purple.arrow:active span.arrow-box .arrow.dropdown-arrow,
.btn.btn-sm.purple.arrow:active span.arrow-box .arrow.dropdown-arrow,
.btn.btn-lg.primary.arrow:active span.arrow-box .arrow.dropdown-arrow,
.btn.btn-sm.primary.arrow:active span.arrow-box .arrow.dropdown-arrow,
.btn.btn-lg.btn-primary.arrow:active span.arrow-box .arrow.dropdown-arrow,
.btn.btn-sm.btn-primary.arrow:active span.arrow-box .arrow.dropdown-arrow,
.btn.btn-lg.purple.arrow:hover span.arrow-box.dropdown-arrow,
.btn.btn-sm.purple.arrow:hover span.arrow-box.dropdown-arrow,
.btn.btn-lg.primary.arrow:hover span.arrow-box.dropdown-arrow,
.btn.btn-sm.primary.arrow:hover span.arrow-box.dropdown-arrow,
.btn.btn-lg.btn-primary.arrow:hover span.arrow-box.dropdown-arrow,
.btn.btn-sm.btn-primary.arrow:hover span.arrow-box.dropdown-arrow,
.btn.btn-lg.purple.arrow:active span.arrow-box.dropdown-arrow,
.btn.btn-sm.purple.arrow:active span.arrow-box.dropdown-arrow,
.btn.btn-lg.primary.arrow:active span.arrow-box.dropdown-arrow,
.btn.btn-sm.primary.arrow:active span.arrow-box.dropdown-arrow,
.btn.btn-lg.btn-primary.arrow:active span.arrow-box.dropdown-arrow,
.btn.btn-sm.btn-primary.arrow:active span.arrow-box.dropdown-arrow {
  border-color: #373A3C transparent transparent transparent;
}
.btn.btn-lg.purple.arrow:hover span,
.btn.btn-sm.purple.arrow:hover span,
.btn.btn-lg.primary.arrow:hover span,
.btn.btn-sm.primary.arrow:hover span,
.btn.btn-lg.btn-primary.arrow:hover span,
.btn.btn-sm.btn-primary.arrow:hover span,
.btn.btn-lg.purple.arrow:active span,
.btn.btn-sm.purple.arrow:active span,
.btn.btn-lg.primary.arrow:active span,
.btn.btn-sm.primary.arrow:active span,
.btn.btn-lg.btn-primary.arrow:active span,
.btn.btn-sm.btn-primary.arrow:active span {
  border-color: #4b2e83;
  background-color: #4b2e83;
  color: white;
}
.btn.btn-lg.purple.arrow span.arrow-box,
.btn.btn-sm.purple.arrow span.arrow-box,
.btn.btn-lg.primary.arrow span.arrow-box,
.btn.btn-sm.primary.arrow span.arrow-box,
.btn.btn-lg.btn-primary.arrow span.arrow-box,
.btn.btn-sm.btn-primary.arrow span.arrow-box {
  background-color: #e8e3d3;
}
.btn.btn-lg.purple.arrow span.arrow-box .arrow,
.btn.btn-sm.purple.arrow span.arrow-box .arrow,
.btn.btn-lg.primary.arrow span.arrow-box .arrow,
.btn.btn-sm.primary.arrow span.arrow-box .arrow,
.btn.btn-lg.btn-primary.arrow span.arrow-box .arrow,
.btn.btn-sm.btn-primary.arrow span.arrow-box .arrow {
  border-color: #373A3C;
  background-color: 2lightgold;
}
.btn.btn-lg.purple.arrow span.arrow-box .arrow.dropdown-arrow,
.btn.btn-sm.purple.arrow span.arrow-box .arrow.dropdown-arrow,
.btn.btn-lg.primary.arrow span.arrow-box .arrow.dropdown-arrow,
.btn.btn-sm.primary.arrow span.arrow-box .arrow.dropdown-arrow,
.btn.btn-lg.btn-primary.arrow span.arrow-box .arrow.dropdown-arrow,
.btn.btn-sm.btn-primary.arrow span.arrow-box .arrow.dropdown-arrow {
  border-color: #373A3C transparent transparent transparent;
}
.btn.btn-lg.white span,
.btn.btn-sm.white span {
  border-color: #e8e3d3;
  color: #4b2e83;
  background-color: white;
}
.btn.btn-lg.white:focus,
.btn.btn-sm.white:focus {
  box-shadow: 0 0 0 0.2rem rgba(75, 46, 131, 0.5);
  border-color: rgba(75, 46, 131, 0.5);
}
.btn.btn-lg.white.arrow:hover span.arrow-box .arrow,
.btn.btn-sm.white.arrow:hover span.arrow-box .arrow,
.btn.btn-lg.white.arrow:active span.arrow-box .arrow,
.btn.btn-sm.white.arrow:active span.arrow-box .arrow,
.btn.btn-lg.white.arrow:hover span.arrow-box,
.btn.btn-sm.white.arrow:hover span.arrow-box,
.btn.btn-lg.white.arrow:active span.arrow-box,
.btn.btn-sm.white.arrow:active span.arrow-box {
  background-color: #B7A57A;
  border-color: white;
}
.btn.btn-lg.white.arrow:hover span.arrow-box .arrow.dropdown-arrow,
.btn.btn-sm.white.arrow:hover span.arrow-box .arrow.dropdown-arrow,
.btn.btn-lg.white.arrow:active span.arrow-box .arrow.dropdown-arrow,
.btn.btn-sm.white.arrow:active span.arrow-box .arrow.dropdown-arrow,
.btn.btn-lg.white.arrow:hover span.arrow-box.dropdown-arrow,
.btn.btn-sm.white.arrow:hover span.arrow-box.dropdown-arrow,
.btn.btn-lg.white.arrow:active span.arrow-box.dropdown-arrow,
.btn.btn-sm.white.arrow:active span.arrow-box.dropdown-arrow {
  border-color: white transparent transparent transparent;
}
.btn.btn-lg.white.arrow span.arrow-box,
.btn.btn-sm.white.arrow span.arrow-box {
  background-color: #4b2e83;
}
.btn.btn-lg.white.arrow span.arrow-box .arrow,
.btn.btn-sm.white.arrow span.arrow-box .arrow {
  border-color: white;
  background-color: #4b2e83;
}
.btn.btn-lg.white.arrow span.arrow-box .arrow.dropdown-arrow,
.btn.btn-sm.white.arrow span.arrow-box .arrow.dropdown-arrow {
  border-color: white transparent transparent transparent;
}
.btn.btn-lg.light-gold:hover span,
.btn.btn-sm.light-gold:hover span,
.btn.btn-lg.secondary:hover span,
.btn.btn-sm.secondary:hover span,
.btn.btn-lg.light-gold:active span,
.btn.btn-sm.light-gold:active span,
.btn.btn-lg.secondary:active span,
.btn.btn-sm.secondary:active span {
  border-color: #4b2e83;
  background-color: white;
  color: #4b2e83;
}
.btn.btn-lg.light-gold span,
.btn.btn-sm.light-gold span,
.btn.btn-lg.secondary span,
.btn.btn-sm.secondary span {
  border-color: #e8e3d3;
  background-color: #e8e3d3;
  color: #4b2e83;
}
.btn.btn-lg.light-gold:focus,
.btn.btn-sm.light-gold:focus,
.btn.btn-lg.secondary:focus,
.btn.btn-sm.secondary:focus {
  box-shadow: 0 0 0 0.2rem rgba(183, 165, 122, 0.5);
  border-color: rgba(183, 165, 122, 0.5);
}
.btn.btn-lg.light-gold.arrow:hover span.arrow-box .arrow,
.btn.btn-sm.light-gold.arrow:hover span.arrow-box .arrow,
.btn.btn-lg.secondary.arrow:hover span.arrow-box .arrow,
.btn.btn-sm.secondary.arrow:hover span.arrow-box .arrow,
.btn.btn-lg.light-gold.arrow:active span.arrow-box .arrow,
.btn.btn-sm.light-gold.arrow:active span.arrow-box .arrow,
.btn.btn-lg.secondary.arrow:active span.arrow-box .arrow,
.btn.btn-sm.secondary.arrow:active span.arrow-box .arrow,
.btn.btn-lg.light-gold.arrow:hover span.arrow-box,
.btn.btn-sm.light-gold.arrow:hover span.arrow-box,
.btn.btn-lg.secondary.arrow:hover span.arrow-box,
.btn.btn-sm.secondary.arrow:hover span.arrow-box,
.btn.btn-lg.light-gold.arrow:active span.arrow-box,
.btn.btn-sm.light-gold.arrow:active span.arrow-box,
.btn.btn-lg.secondary.arrow:active span.arrow-box,
.btn.btn-sm.secondary.arrow:active span.arrow-box {
  background-color: #373A3C;
  border-color: white;
}
.btn.btn-lg.light-gold.arrow:hover span.arrow-box .arrow.dropdown-arrow,
.btn.btn-sm.light-gold.arrow:hover span.arrow-box .arrow.dropdown-arrow,
.btn.btn-lg.secondary.arrow:hover span.arrow-box .arrow.dropdown-arrow,
.btn.btn-sm.secondary.arrow:hover span.arrow-box .arrow.dropdown-arrow,
.btn.btn-lg.light-gold.arrow:active span.arrow-box .arrow.dropdown-arrow,
.btn.btn-sm.light-gold.arrow:active span.arrow-box .arrow.dropdown-arrow,
.btn.btn-lg.secondary.arrow:active span.arrow-box .arrow.dropdown-arrow,
.btn.btn-sm.secondary.arrow:active span.arrow-box .arrow.dropdown-arrow,
.btn.btn-lg.light-gold.arrow:hover span.arrow-box.dropdown-arrow,
.btn.btn-sm.light-gold.arrow:hover span.arrow-box.dropdown-arrow,
.btn.btn-lg.secondary.arrow:hover span.arrow-box.dropdown-arrow,
.btn.btn-sm.secondary.arrow:hover span.arrow-box.dropdown-arrow,
.btn.btn-lg.light-gold.arrow:active span.arrow-box.dropdown-arrow,
.btn.btn-sm.light-gold.arrow:active span.arrow-box.dropdown-arrow,
.btn.btn-lg.secondary.arrow:active span.arrow-box.dropdown-arrow,
.btn.btn-sm.secondary.arrow:active span.arrow-box.dropdown-arrow {
  border-color: white transparent transparent transparent;
}
.btn.btn-lg.light-gold.arrow span.arrow-box,
.btn.btn-sm.light-gold.arrow span.arrow-box,
.btn.btn-lg.secondary.arrow span.arrow-box,
.btn.btn-sm.secondary.arrow span.arrow-box {
  background-color: #B7A57A;
}
.btn.btn-lg.light-gold.arrow span.arrow-box .arrow,
.btn.btn-sm.light-gold.arrow span.arrow-box .arrow,
.btn.btn-lg.secondary.arrow span.arrow-box .arrow,
.btn.btn-sm.secondary.arrow span.arrow-box .arrow {
  border-color: white;
  background-color: #B7A57A;
}
.btn.btn-lg.light-gold.arrow span.arrow-box .arrow.dropdown-arrow,
.btn.btn-sm.light-gold.arrow span.arrow-box .arrow.dropdown-arrow,
.btn.btn-lg.secondary.arrow span.arrow-box .arrow.dropdown-arrow,
.btn.btn-sm.secondary.arrow span.arrow-box .arrow.dropdown-arrow {
  border-color: white transparent transparent transparent;
}
.btn.btn-lg.light-gold.arrow:hover span,
.btn.btn-sm.light-gold.arrow:hover span,
.btn.btn-lg.secondary.arrow:hover span,
.btn.btn-sm.secondary.arrow:hover span,
.btn.btn-lg.light-gold.arrow:active span,
.btn.btn-sm.light-gold.arrow:active span,
.btn.btn-lg.secondary.arrow:active span,
.btn.btn-sm.secondary.arrow:active span {
  border-color: #e8e3d3;
  background-color: #e8e3d3;
  color: $purple;
}
.btn.btn-lg.gold:hover span,
.btn.btn-sm.gold:hover span,
.btn.btn-lg.gold:active span,
.btn.btn-sm.gold:active span {
  border-color: #B7A57A;
  background-color: #B7A57A;
  color: white;
}
.btn.btn-lg.gold:focus,
.btn.btn-sm.gold:focus {
  box-shadow: 0 0 0 0.2rem rgba(183, 165, 122, 0.5);
  border-color: rgba(183, 165, 122, 0.5);
}
.btn.btn-lg.gold span,
.btn.btn-sm.gold span {
  border-color: #B7A57A;
  background-color: #B7A57A;
  color: white;
}
.btn.btn-lg.gold.arrow:hover span.arrow-box .arrow,
.btn.btn-sm.gold.arrow:hover span.arrow-box .arrow,
.btn.btn-lg.gold.arrow:active span.arrow-box .arrow,
.btn.btn-sm.gold.arrow:active span.arrow-box .arrow,
.btn.btn-lg.gold.arrow:hover span.arrow-box,
.btn.btn-sm.gold.arrow:hover span.arrow-box,
.btn.btn-lg.gold.arrow:active span.arrow-box,
.btn.btn-sm.gold.arrow:active span.arrow-box {
  background-color: #4b2e83;
  border-color: white;
}
.btn.btn-lg.gold.arrow:hover span.arrow-box .arrow.dropdown-arrow,
.btn.btn-sm.gold.arrow:hover span.arrow-box .arrow.dropdown-arrow,
.btn.btn-lg.gold.arrow:active span.arrow-box .arrow.dropdown-arrow,
.btn.btn-sm.gold.arrow:active span.arrow-box .arrow.dropdown-arrow,
.btn.btn-lg.gold.arrow:hover span.arrow-box.dropdown-arrow,
.btn.btn-sm.gold.arrow:hover span.arrow-box.dropdown-arrow,
.btn.btn-lg.gold.arrow:active span.arrow-box.dropdown-arrow,
.btn.btn-sm.gold.arrow:active span.arrow-box.dropdown-arrow {
  border-color: white transparent transparent transparent;
}
.btn.btn-lg.gold.arrow span.arrow-box,
.btn.btn-sm.gold.arrow span.arrow-box {
  background-color: #e8e3d3;
}
.btn.btn-lg.gold.arrow span.arrow-box .arrow,
.btn.btn-sm.gold.arrow span.arrow-box .arrow {
  border-color: #373A3C;
  background-color: #e8e3d3;
}
.btn.btn-lg.gold.arrow span.arrow-box .arrow.dropdown-arrow,
.btn.btn-sm.gold.arrow span.arrow-box .arrow.dropdown-arrow {
  border-color: #373A3C transparent transparent transparent;
}
.btn.btn-lg.gold.arrow:hover span,
.btn.btn-sm.gold.arrow:hover span,
.btn.btn-lg.gold.arrow:active span,
.btn.btn-sm.gold.arrow:active span {
  border-color: #B7A57A;
  background-color: #B7A57A;
  color: white;
}
.dropdown-menu.show {
  margin: -2px 0 0 1px;
  border-radius: 0;
}
a.dropdown-item,
a.btn {
  text-decoration: none;
}
.show > .btn.btn-lg.arrow.dropdown-toggle.purple span.arrow-box .arrow,
.show > .btn.btn-lg.arrow.dropdown-toggle.purple span.arrow-box {
  background-color: #B7A57A;
}
.show > .btn.btn-lg.arrow.dropdown-toggle.white span {
  border-color: #B7A57A;
  border-bottom-color: white;
  background-color: white;
  color: #4b2e83;
}
.show > .btn.btn-lg.arrow.dropdown-toggle.white span.arrow-box .arrow,
.show > .btn.btn-lg.arrow.dropdown-toggle.white span.arrow-box {
  background-color: #B7A57A;
}
.show > .btn.btn-lg.arrow.dropdown-toggle.white span.arrow-box .arrow.dropdown-arrow,
.show > .btn.btn-lg.arrow.dropdown-toggle.white span.arrow-box.dropdown-arrow {
  border-color: white transparent transparent transparent;
}
.show > .btn.btn-lg.arrow.dropdown-toggle.gold span {
  border-color: #B7A57A;
  background-color: #B7A57A;
  color: white;
}
.show > .btn.btn-lg.arrow.dropdown-toggle.gold span.arrow-box .arrow,
.show > .btn.btn-lg.arrow.dropdown-toggle.gold span.arrow-box {
  background-color: #4b2e83;
}
.show > .btn.btn-lg.arrow.dropdown-toggle.gold span.arrow-box .arrow.dropdown-arrow,
.show > .btn.btn-lg.arrow.dropdown-toggle.gold span.arrow-box.dropdown-arrow {
  border-color: white transparent transparent transparent;
}
.show > .btn.btn-lg.arrow.dropdown-toggle.light-gold span.arrow-box .arrow,
.show > .btn.btn-lg.arrow.dropdown-toggle.light-gold span.arrow-box {
  background-color: #373A3C;
}
.show > .btn.btn-lg.arrow.dropdown-toggle.light-gold span.arrow-box .arrow.dropdown-arrow,
.show > .btn.btn-lg.arrow.dropdown-toggle.light-gold span.arrow-box.dropdown-arrow {
  border-color: white transparent transparent transparent;
}
.btn.btn-sm {
  padding: 0;
  font-size: 0.875rem;
  line-height: 1.5;
  margin: 10px 0;
}
.btn.btn-sm span {
  text-transform: none;
  border-radius: 2px;
  padding: 5px 10px;
}
.btn.btn-sm:focus {
  border-radius: 2px;
}
.btn-success,
.btn-danger,
.btn-warning,
.btn-info {
  line-height: 1.2;
  text-transform: uppercase;
  font-family: 'Encode Sans Compressed', sans-serif;
  font-weight: 600;
  text-align: center;
  padding: 10px 20px;
  border-radius: 2px;
}
.link-arrow-box:hover span.arrow-box .arrow,
.link-arrow-box:active span.arrow-box .arrow,
.link-arrow-box:hover span.arrow-box,
.link-arrow-box:active span.arrow-box {
  background-color: #e8e3d3;
  border-color: #4b2e83;
}
.link-arrow-box span.arrow-box {
  padding: 7px 9px 6px 4px;
  border: 0 none;
  display: inline-flex;
  align-items: center;
  background-color: #4b2e83;
  margin-left: 5px;
}
.link-arrow-box span.arrow-box .arrow {
  border: solid;
  border-width: 0 1px 1px 0;
  padding: 4px;
  transform: rotate(-45deg);
  border-color: white;
  background-color: #4b2e83;
}
/**
* Flip Cards
**/
.cardContainer {
  -webkit-transition: all .3s ease;
  -moz-transition: all .3s ease;
  -ms-transition: all .3s ease;
  transition: all .3s ease;
  /*depth of the elements */
  -webkit-perspective: 800px;
  -moz-perspective: 800px;
  -o-perspective: 800px;
  perspective: 800px;
  padding: 0 1px;
}
.card {
  width: 100%;
  height: 350px;
  cursor: pointer;
  display: inline-block;
  /*transition effects */
  -webkit-transition: -webkit-transform 0.6s;
  -moz-transition: -moz-transform 0.6s;
  -o-transition: -o-transform 0.6s;
  transition: transform 0.6s;
  -webkit-transform-style: preserve-3d;
  -moz-transform-style: preserve-3d;
  -o-transform-style: preserve-3d;
  transform-style: preserve-3d;
}
.card.flipped {
  -webkit-transform: rotateY(180deg);
  -moz-transform: rotateY(180deg);
  -o-transform: rotateY(180deg);
  transform: rotateY(180deg);
  z-index: 2;
}
.card .front,
.card .back {
  display: block;
  height: 100%;
  width: 100%;
  color: white;
  background: transparent;
  text-align: center;
  position: absolute;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -o-backface-visibility: hidden;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}
.card .back {
  width: 100%;
  text-align: left;
}
.card .back {
  -webkit-transform: rotateY(180deg);
  -moz-transform: rotateY(180deg);
  -o-transform: rotateY(180deg);
  transform: rotateY(180deg);
}
/*Colors for front and back applied here*/
.cardContainer .card .front {
  background-color: #4b2e83;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -o-backface-visibility: hidden;
  backface-visibility: hidden;
}
.cardContainer .card .back {
  background-color: #85754d;
}
.content {
  padding: 4%;
  text-align: left;
  font-weight: bold;
}
@media all and (max-width: 1000px) {
  h3.cardTitle {
    font-weight: 500;
  }
}
@media all and (max-width: 390px) {
  .card {
    width: 100%;
    height: 150px;
  }
  h3.cardTitle {
    font-weight: 500;
  }
  .content p {
    margin-top: -20%;
    line-height: 1.2em;
  }
  .cardWrapper {
    margin-left: 4%;
  }
}
