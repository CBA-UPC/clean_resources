/*
* Clear Default Text: functions for clearing and replacing default text in
* <input> elements.
*/
function registerClearDefaultItem(id, DefaultText) {

    try {
        theInput = document.getElementById(id);
        addEvent(theInput, 'focus', clearDefaultText, false);
        addEvent(theInput, 'blur', replaceDefaultText, false);

        /* Save the current value */
        if (theInput.value != '') {

            theInput.defaultText = DefaultText;
        }
    } catch (e) { }
}

function clearDefaultText(e) {
    var target = window.event ? window.event.srcElement : e ? e.target : null;
    if (!target) return;

    if (target.value == target.defaultText) {
        target.value = '';
    }
}

function replaceDefaultText(e) {
    var target = window.event ? window.event.srcElement : e ? e.target : null;
    if (!target) return;

    if (target.value == '' && target.defaultText) {
        target.value = target.defaultText;
    }
}
/*
* Event Handling: Cross Browser compliant event handling
* <input> elements.
*/
function addEvent(element, eventType, lamdaFunction, useCapture) {
    try {
        if (element.addEventListener) {
            element.addEventListener(eventType, lamdaFunction, useCapture);
            return true;
        } else if (element.attachEvent) {
            var r = element.attachEvent('on' + eventType, lamdaFunction);
            return r;
        } else {
            return false;
        }
    } catch (e) { }
}

function killEvent(eventObject) {
    if (eventObject && eventObject.stopPropagation) {
        eventObject.stopPropagation();
    }
    if (window.event && window.event.cancelBubble) {
        window.event.cancelBubble = true;
    }
    if (eventObject && eventObject.preventDefault) {
        eventObject.preventDefault();
    }
    if (window.event) {
        window.event.returnValue = false;
    }
}



function GetEventSrcElement(eventElement) {
    if (eventElement.srcElement) {
        return eventElement.srcElement
    }
    // Netscape and Firefox
    else if (eventElement.target) {
        return eventElement.target
    }
}

//General
function ContensisSubmitFromTextbox(event, SubmitButton) {
    var btn = document.getElementById(SubmitButton)
    if (document.all) {
        if (event.keyCode == 13) {
            event.returnValue = false;
            event.cancel = true;
            killEvent(event); // [Added BJ 30/01/2012 for IE9]
            btn.click();
        }
    }
    else if (document.getElementById) {
        if (event.which == 13) {
            event.returnValue = false;
            event.cancel = true;
            killEvent(event); // [Added iG 18/01/2012]
            btn.click();
        } else {
            // Do nothing
        }
    }
    else if (document.layers) {
        if (event.which == 13) {
            event.returnValue = false;
            event.cancel = true;
            btn.click();
        } else {
            // do nothing
        }
    }
}
//used for linkbuttons etc.
function registerSubmitOnReturn(id, eventTarget) {
    var Textbox = document.getElementById(id);
    if (Textbox) {
        Textbox.LinkButtonID = eventTarget
        addEvent(Textbox, 'keypress', handleSubmitOnReturn, false)
    }
}
function handleSubmitOnReturn(e) {
    if (e.keyCode == 13) {
        //alert("Submit")
        e.cancelBubble = true;
        e.returnValue = false;
        var el = GetEventSrcElement(e)
        __doPostBack(el.LinkButtonID, '')
    }
}


function URLEncode(value) {
    // The Javascript escape and unescape functions do not correspond
    // with what browsers actually do...
    var SAFECHARS = "0123456789" + 				// Numeric
                    "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + // Alphabetic
                    "abcdefghijklmnopqrstuvwxyz" +
                    "-_.!~*'()"; 				// RFC2396 Mark characters
    var HEX = "0123456789ABCDEF";

    var plaintext = value;
    var encoded = "";
    for (var i = 0; i < plaintext.length; i++) {
        var ch = plaintext.charAt(i);
        if (ch == " ") {
            encoded += "+"; 			// x-www-urlencoded, rather than %20
        } else if (SAFECHARS.indexOf(ch) != -1) {
            encoded += ch;
        } else {
            var charCode = ch.charCodeAt(0);
            if (charCode > 255) {
                alert("Unicode Character '"
                        + ch
                        + "' cannot be encoded using standard URL encoding.\n" +
                          "(URL encoding only supports 8-bit characters.)\n" +
                          "A space (+) will be substituted.");
                encoded += "+";
            } else {
                encoded += "%";
                encoded += HEX.charAt((charCode >> 4) & 0xF);
                encoded += HEX.charAt(charCode & 0xF);
            }
        }
    } // for
    return encoded;
}

//This is only required when email obfuscation is enabled
function UnObfuscateHyperlinks() {
    var links = document.getElementsByTagName('a');
    for (var l = 0; l < links.length; l++) {
        if (!links[l].onclick) {
            links[l].onclick = 
        }
    }
}

function link_click(anchor) {
    var href = anchor.getAttribute('href');
    if (href) { // [Altered by iG 28/03/2012] - Check if href is not undefined
        var address = href.replace(/.*mailcontacts\//, '');
        if (href != address) {
            address = address.replace(/\+\+/, '@');
            address = address.replace(/\+/g, '.');
            anchor.setAttribute('href', 'mailto:' + address);
        }
    }
}

function IEFixBackgroundImageFlicker() {
    try {
        document.execCommand('BackgroundImageCache', false, true);
    } catch (e) { }
}

//This function allows you to attach the print function to an element in the dom for its click event.
function AttachPrintHandler(elementID) {
    var element = document.getElementById(elementID);
    addEvent(element, 'click', 
        false);
    addEvent(document, 'keydown', function(e) {
        if (e.ctrlKey) {
            if ((e.keyCode == 80) || (e.keyCode == 112)) {
                window.print();
                killEvent(e);
            }
        }
    },
        false);
}
