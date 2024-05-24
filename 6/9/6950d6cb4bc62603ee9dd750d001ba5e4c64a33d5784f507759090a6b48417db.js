var PrintElements = (function () {
    "use strict";

    var hideFromPrintClass = "pe-no-print";
    var preservePrintClass = "pe-preserve-print";
    var preserveAncestorClass = "pe-preserve-ancestor";
    var bodyElementName = "BODY";

    var _hide = 

    var _preserve = function (element, isStartingElement) {
        element.classList.remove(hideFromPrintClass);
        element.classList.add(preservePrintClass);
        if (!isStartingElement) {
            element.classList.add(preserveAncestorClass);
        }
    };

    var _clean = function (element) {
        element.classList.remove(hideFromPrintClass);
        element.classList.remove(preservePrintClass);
        element.classList.remove(preserveAncestorClass);
    };

    var _walkSiblings = function (element, callback) {
        var sibling = element.previousElementSibling;
        while (sibling) {
            callback(sibling);
            sibling = sibling.previousElementSibling;
        }
        sibling = element.nextElementSibling;
        while (sibling) {
            callback(sibling);
            sibling = sibling.nextElementSibling;
        }
    };

    var _attachPrintClasses = 

    var _cleanup = 

    var _walkTree = function (element, callback) {
        var currentElement = element;
        callback(currentElement, true);
        currentElement = currentElement.parentElement;
        while (currentElement && currentElement.nodeName !== bodyElementName) {
            callback(currentElement, false);
            currentElement = currentElement.parentElement;
        }
    };

    var _print = function (elements, has_top_html, has_bot_html) {
        for (var i = 0; i < elements.length; i++) {
            _walkTree(elements[i], _attachPrintClasses);
        }
  
        window.addEventListener('afterprint', );
        window.print();
    };

    function after_print_clean_up(elements, has_top_html, has_bot_html){
        //console.log('clean up on isle 5');
        for (var i = 0; i < elements.length; i++) {
            _walkTree(elements[i], _cleanup);
        }
        pom_cleanup(has_top_html, has_bot_html);
    }

    return {
        print: _print
    };
})();
