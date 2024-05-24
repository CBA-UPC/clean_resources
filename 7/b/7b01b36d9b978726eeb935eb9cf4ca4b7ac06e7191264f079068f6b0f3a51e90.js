/**
 * @file
 * Visual styles for a nested tree child.
 */

div.tree-child {
  background: url(../../../images/core/tree.png) no-repeat 11px center; /* LTR */
}
div.tree-child-last {
  background: url(../../../images/core/tree-bottom.png) no-repeat 11px center; /* LTR */
}
[dir="rtl"] div.tree-child,
[dir="rtl"] div.tree-child-last {
  background-position: -65px center;
}
div.tree-child-horizontal {
  background: url(../../../images/core/tree.png) no-repeat -11px center;
}
NAME_EU_LAW = "SinCollections_0";
        var COLLECTION_ELEM_NAME_EU_PUB = "SinCollections_1";
        var COLLECTION_ELEM_NAME_EU_BUSINESS = "SinCollections_2";
        var COLLECTION_ELEM_NAME_EU_DIR = "SinCollections_3";
        var COLLECTION_ELEM_NAME_EU_RESEARCH = "SinCollections_4";

        var SEARCHBOX_PLACEHOLDER = "searchBoxPlaceholder";

        executeAutocompleteQuery = function (searchURL, searchText, domain, minSearchChars, maxSearchChars, maxNoOfDisplayResultsAtAutocomplete, autocompleteSearchLanguage, callback) {
            if (searchText in AUTOCOMPLETE_CACHE) {
                callback(AUTOCOMPLETE_CACHE[searchText]);

            } else if (searchText.length >= parseInt(minSearchChars) && searchText.length <= parseInt(maxSearchChars)) {
                A.io.request(AUTOCOMPLETE_QUERY_HANDLER_PATH, {
                    method: 'POST',
                    data: {
                        searchText: searchText,
                        domain: domain,
                        maxNoOfDisplayResultsAtAutocomplete: maxNoOfDisplayResultsAtAutocomplete,
                        autocompleteSearchLanguage: autocompleteSearchLanguage
                    },
                    on: {
                        success: function () {
                            var responseData = this.get('responseData');
                            if (responseData != undefined && responseData != null) {
                                var results = JSON.parse(responseData);
                                AUTOCOMPLETE_CACHE[searchText] = results;
                                callback(results);
                            } else {
                                callback(EMPTY);
                            }
                        }
                    }
                });
            }
        }

        performAutoCompleteQuery = function (searchURL, searchText, portletNamespace, callback) {
            var searchBoxPlaceholder;

            maxNoOfDisplayResultsAtAutocomplete = A.one('#' + portletNamespace + MAX_NO_OF_DISPLAY_RESULTS_AT_AUTOCOMPLETE).get('value');
            autocompleteSearchLanguage = A.one('#' + portletNamespace + AUTOCOMPLETE_SEARCH_LANGUAGE).get('value');
            minSearchChars = A.one('#' + portletNamespace + MIN_SEARCH_CHARS).get('value');
            maxSearchChars = A.one('#' + portletNamespace + MAX_SEARCH_CHARS).get('value');

            searchBoxPlaceholder = A.one('#' + portletNamespace + SEARCHBOX_PLACEHOLDER).get('value');

            if (searchText != searchBoxPlaceholder) {
                var domain = [];
                for(var checkBoxIndex=0;checkBoxIndex<5;checkBoxIndex++)
                {
                    try{
                        var checkBox = A.one('#' + portletNamespace + 'domain' +checkBoxIndex + AUI_CHECHBOX_SUFFIX);
                        if(checkBox&&checkBox.get('checked')){
                            domain.push(checkBox.get('value'));
                        }
                    }catch (e) {
                    }
                }
                executeAutocompleteQuery(searchURL, searchText, domain, minSearchChars, maxSearchChars, maxNoOfDisplayResultsAtAutocomplete, autocompleteSearchLanguage, callback);
            }
        }

    /* INPUT Placeholder functionality below */

    function addEvent(obj, evType, fn, useCapture) {
        if (obj.addEventListener) {
            obj.addEventListener(evType, fn, useCapture);
            return true;
        } else if (obj.attachEvent) {
            var r = obj.attachEvent("on" + evType, fn);
            return r;
        } else {
            alert("Handler could not be attached");
            }
        }

        function FieldListener(elem) {
            this.elem = elem;
            this.helper = "";
            this.isFresh = true;

            var me = this;

            this.init = function () {
                this.elem.setAttribute('fresh', true);
                this.helper = this.elem.getAttribute('title');
                addEvent(this.elem, "blur", this.redisplay);
                addEvent(this.elem, "keydown", this.typing);
                addEvent(this.elem, "click", this.click);
                if (me.elem.value == "") {
                    me.elem.value = this.helper;
                }
            }

            this.redisplay = function (evt) {
                if (me.elem.value == "") {
                    me.elem.value = me.helper;
                    me.isFresh = true;
                    me.elem.setAttribute('fresh', true);
                }
            }

            this.typing = function (evt) {
                if (me.isFresh) {
                    if (me.elem.value == me.helper) {
                        me.elem.value = "";
                    }
                    me.isFresh = false;
                    me.elem.setAttribute('fresh', false);
                }
            }

            this.click = function (evt) {
                if (me.isFresh) {
                    if (me.elem.value == me.helper) {
                        me.elem.value = "";
                    }
                }
            }
        }

        function register_setup(collection) {
            var i, elem, listener;
            for (i = 0; elem = collection.item(i++);) {
                if (elem.nodeName == "INPUT" &&
                    (elem.getAttribute("type") != "text" ||
                        elem.getAttribute("name") == undefined ||
                        elem.getAttribute("name") == "" ||
                        elem.getAttribute("name").indexOf("queryText") == -1)) {
                    continue;
                }

                elem.setAttribute("maxlength", 255);

                listener = new FieldListener(elem);
                listener.init();

                if (elem.getAttribute("central") == "true") {
                    setTimeout(function () {
                        var central = getCentralInputText();
                        if (central != undefined) {
                            central.value = central.getAttribute('title');
                            central.focus();
                        }
                    }, 500);
                }
            }
        }

        function getCentralInputText() {
            var i, elem;
            var collection = document.getElementsByTagName('input');
            for (i = 0; elem = collection.item(i++);) {
                if (elem.getAttribute("central") == "true") {
                    return elem;
                }
            }
            return undefined;
        }

        clearSearchText = function (input) {
            if (input != undefined) {
                setTimeout(function () {
                    input.value = '';
                    input.focus();
                }, 200);
            }
        }

        var searchButtonPressed = false;
        var inputLength = 0;

        pressSearchButton = function (portletNamespace, queryTextParam, searchBoxPlaceHolderParam, minSearchChars, submitSearchFormFunction, errorContainerClassName) {
            searchButtonPressed = true;
            var valid = validateInput(portletNamespace, queryTextParam, searchBoxPlaceHolderParam);
            if (valid) {
                submitSearchFormFunction();
            } else {
                if (searchButtonPressed) {
                    var queryTextInput = document.getElementById(portletNamespace + queryTextParam);
                    if (queryTextInput != undefined) {
                        changeInput(queryTextInput.value, minSearchChars, queryTextInput, errorContainerClassName);
                    }
                }
            }
        }

        validateInput = function (portletNamespace, queryTextParam, searchBoxPlaceHolderParam) {
            if (searchButtonPressed) {
                var queryTextInput;
                var searchBoxPlaceHolder;
                AUI().use('node', function (Y) {
                    queryTextInput = Y.one('#' + portletNamespace + queryTextParam);
                    searchBoxPlaceHolder = Y.one('#' + portletNamespace + searchBoxPlaceHolderParam);
                });
                return (queryTextInput.get('value') != searchBoxPlaceHolder.get('value'))
            } else {
                return true;
            }
        }

        changeInput = function (value, minSearchChars, element, errorContainerClassName) {
            AUI().use('opportal-labels', function (A) {

                if (value) {
                    inputLength = value.length;
                } else {
                    inputLength = 0;
                }
                if (inputLength >= minSearchChars) {
                    removeValidationMessage(undefined, undefined, undefined, undefined, errorContainerClassName);
                    element.parentNode.className = 'control-group search-text-input';
                } else if (inputLength > 0) {
                    removeValidationMessage(undefined, undefined, undefined, undefined, errorContainerClassName);

                    var errorContainer = document.createElement('div');
                    errorContainer.className = errorContainerClassName;
                    errorContainer.innerHTML = '<div role="alert" class="search-input-alert minLength">' +
                        'Introduzca\x20al\x20menos\x20\x7b0\x7d\x20caracteres\x21'.replaceAll("{0}",minSearchChars) + '</div>';

                    element.parentNode.className = 'control-group search-text-input error';
                    element.parentNode.appendChild(errorContainer);
                } else {
                    removeValidationMessage(undefined, undefined, undefined, undefined, errorContainerClassName);

                    var errorContainer = document.createElement('div');
                    errorContainer.className = errorContainerClassName;
                    errorContainer.innerHTML = '<div role="alert" class="search-input-alert custom">' +
                        'Escribir\x20el\x20texto\x20de\x20la\x20búsqueda' + '</div>';

                    element.parentNode.className = 'control-group search-text-input error';
                    element.parentNode.appendChild(errorContainer);
                }
            });
        }

        removeValidationMessage = function (witheval, value, minSearchChars, element, errorContainerClassName) {
            if (witheval != undefined && witheval == true) {
                changeInput(value, minSearchChars, element, errorContainerClassName);

            } else {
                if (errorContainerClassName != undefined) {
                    AUI().use('node', function (A) {
                        var parts = errorContainerClassName.split(' ');
                        errorContainerClassName = '.' + parts.join('.');
                        var elements = A.all(errorContainerClassName).remove();
                    });
                }
            }
        }


        validateMainSearch = function (namespace, queryTextParam, minSearchChars, errorContainerClassName) {
            var result = false;

            AUI().use('node', 'classnamemanager', 'selector-css3', function (Y) {
                var ipt = Y.one('#' + namespace + queryTextParam);
                var queryTextInput = document.getElementById(namespace + queryTextParam);

                var getCN = Y.ClassNameManager.getClassName,
                    SEARCH_CLS_PH_TEXT = getCN('placeholder', 'text');

                if (!ipt.hasClass(SEARCH_CLS_PH_TEXT)) {
                    minSearchChars = (minSearchChars != undefined ? minSearchChars : 2);
                    if (queryTextInput != undefined) {
                        changeInput(queryTextInput.value, minSearchChars, queryTextInput, errorContainerClassName);
                    }
                    if (ipt.get('value').length >= minSearchChars) {
                        result = true;
                        return;
                    }
                }

                result = false;
            });

            return result;
        };

        validateAdvSearch = function (namespace, queryTextParam, minSearchChars, errorContainerClassName) {
            var result = false;

            AUI().use('node', 'classnamemanager', 'selector-css3', function (Y) {
                var ipt = Y.one('#' + namespace + queryTextParam);
                var queryTextInput = document.getElementById(namespace + queryTextParam);

                minSearchChars = (minSearchChars != undefined ? minSearchChars : 2);

                var getCN = Y.ClassNameManager.getClassName,
                    SEARCH_CLS_PH_TEXT = getCN('placeholder', 'text');

                if (!ipt.hasClass(SEARCH_CLS_PH_TEXT)) {
                    if (queryTextInput != undefined) {
                        changeInput(queryTextInput.value, minSearchChars, queryTextInput, errorContainerClassName);
                    }
                    if (ipt.get('value').length >= minSearchChars) {
                        result = true;
                        return;
                    }
                }

                if (ipt.get('value').length >= minSearchChars) {
                    var selected = Y.all('#' + namespace + "fm input[type=checkbox]:checked");
                    for (var i = 0; i < selected.size(); i++) {
                        var checkbox = selected.item(i);
                        if (checkbox.get('id').indexOf('_domain') >= 0 ||
                            checkbox.get('id').indexOf('_eurovocDomain') >= 0 ||
                            checkbox.get('id').indexOf('_author') >= 0 ||
                            checkbox.get('id').indexOf('studies') >= 0
                        ) {
                            result = true;
                            return;
                        }
                    }
                }

                result = false;
            });

            result = areFilledAdvancedSearchComponents('#advancedSearchComponents input', result) ||
                    areFilledAdvancedSearchComponents('#advancedSearchWiw input', result) ||
                    areFilledAdvancedSearchComponents('#advancedSearchPublicProcurement input', result) ||
                    areFilledAdvancedSearchComponents('#inputListAuthor', result);

            // var componentsTextImput = AUI().all('#advancedSearchComponents input');
            // componentsTextImput.each(function(obj){
            //     if(obj.val().length > 1) {
            //         result = true;
            //         return;
            //     }
            // });

            return result;
        };

        areFilledAdvancedSearchComponents = function (scope, currentResult) {
            var componentsTextImput = AUI().all(scope);
            componentsTextImput.each(function (obj) {
                if (obj.val().length > 1) {
                    currentResult = true;
                    return;
                }
            });

            return currentResult;
        };

        submitAdvSearchForm = function (namespace, queryTextParam, minSearchChars, errorContainerClassName) {
            if (validateAdvSearch(namespace, queryTextParam, minSearchChars, errorContainerClassName)) {
                AUI().use('node', 'classnamemanager', 'selector-css3', function (Y) {
                    var ipt = Y.one('#' + namespace + queryTextParam);

                    var getCN = Y.ClassNameManager.getClassName,
                        SEARCH_CLS_PH_TEXT = getCN('placeholder', 'text');

                    if (ipt.hasClass(SEARCH_CLS_PH_TEXT)) {
                        ipt.set('value', '');
                        ipt.removeClass(SEARCH_CLS_PH_TEXT);
                    }

                    Y.all('#' + namespace + 'fm input[type=submit]').set('disabled', true);
                    Y.all('#' + namespace + 'fm button[type=submit]').set('disabled', true);

                    var searchTerm = ipt.get('value');
                    document.getElementById(namespace + 'fm').submit();
                });
            }
        };

        submitSearchForm = function (namespace, queryTextParam, minSearchChars, errorContainerClassName) {
            if (validateMainSearch(namespace, queryTextParam, minSearchChars, errorContainerClassName)) {
                AUI().use('node', 'classnamemanager', 'selector-css3', function (Y) {
                    var ipt = Y.one('#' + namespace + queryTextParam);

                    var getCN = Y.ClassNameManager.getClassName,
                        SEARCH_CLS_PH_TEXT = getCN('placeholder', 'text');

                    if (ipt.hasClass(SEARCH_CLS_PH_TEXT)) {
                        ipt.set('value', '');
                        ipt.removeClass(SEARCH_CLS_PH_TEXT);
                    }

                    /* change focus after submit so keyboard for mobile devices will disappear */
                    var input = Y.one('#' + namespace + 'fm input[type=submit]'),
                        button = Y.one('#' + namespace + 'fm button[type=submit]');
                    if (input) {
                        input.focus();
                    } else if (button) {
                        button.focus();
                    }

                    Y.all('#' + namespace + 'fm input[type=submit]').set('disabled', true);
                    Y.all('#' + namespace + 'fm button[type=submit]').set('disabled', true);

                    var searchTerm = ipt.get('value');
                    document.getElementById(namespace + 'fm').submit();
                });
            }
        };

    }
);
