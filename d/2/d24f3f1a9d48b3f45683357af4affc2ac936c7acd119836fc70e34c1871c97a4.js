var clickd_timeStamp = (new Date()).getTime().toString();
var getWLocation = function () {
    if (typeof getWLocation.url != 'undefined' && getWLocation.url && getWLocation.url.startsWith('https')) return getWLocation.url;

    var innerFunc }
    getWLocation.url = innerFunc();
    return getWLocation.url;
};

var CDWidget = {
    isInitialized: false,
    loadWidget: function () {
        var link = clickd_jquery("<link>");
        link.attr({
            type: 'text/css',
            rel: 'stylesheet',
            href: getWLocation() + "web/v10/cdform2.min.css"
        });
        clickd_jquery("head").append(link);

        var widgetContainers = clickd_jquery("div[pageID]");
        if (widgetContainers && widgetContainers.length) {
            var containerId;
            for (containerId = 0; containerId < widgetContainers.length; containerId++) {
                var container = widgetContainers[containerId];
                this.drawWidget(container);
            }
        }
    },
    drawWidget: function (container) {
        var pageId = container.getAttribute('pageID');
        clickd_jquery.getScript(loc + pageId + ".js?v=" + clickd_timeStamp + tryGetVisitor(), function (data, textStatus, jqxhr) {
            if (typeof formHTML == 'undefined') {
                return;
            }

            formHTML = formHTML.replace(/#sleshr#/g, '\r');
            formHTML = formHTML.replace(/#sleshn#/g, '\n');
            formHTML = formHTML.replace(/#slesht#/g, '\t');

            formScript = formScript.replace(/#sleshr#/g, '\r');
            formScript = formScript.replace(/#sleshn#/g, '\n');
            formScript = formScript.replace(/#slesht#/g, '\t');

            analyticsScript = analyticsScript.replace(/#sleshr#/g, '\r');
            analyticsScript = analyticsScript.replace(/#sleshn#/g, '\n');
            analyticsScript = analyticsScript.replace(/#slesht#/g, '\t');

            if (typeof cdCaptcha != "undefined") {
                cdCaptcha = cdCaptcha.replace(/#sleshr#/g, '\r');
                cdCaptcha = cdCaptcha.replace(/#sleshn#/g, '\n');
                cdCaptcha = cdCaptcha.replace(/#slesht#/g, '\t');
                clickd_jquery("head").append(clickd_jquery("<div>").html(cdCaptcha).text());
            }
            if (typeof optOutscript != "undefined") {
                optOutscript = optOutscript.replace(/#sleshr#/g, '\r');
                optOutscript = optOutscript.replace(/#sleshn#/g, '\n');
                optOutscript = optOutscript.replace(/#slesht#/g, '\t');
                clickd_jquery("head").append(clickd_jquery("<div>").html(optOutscript).text());
            }

            var widgetHtml = clickd_jquery("<div>").html(formHTML).text() + " <script type=\"text/javascript\">" + clickd_jquery("<div>").html(formScript).text() + "<\/script>" + clickd_jquery("<div>").html(analyticsScript).text();
            clickd_jquery(container).html(widgetHtml);

            if (typeof cdAnalytics === "object" && cdAnalytics.hasOwnProperty("I") && typeof cdAnalytics.setForms === "function") {
                cdAnalytics.setForms(cdAnalytics.I);
            }
        });
    }
};

function tryGetVisitor() {
    var getCookie = function (name) {
      }
        var match = document.cookie.match(RegExp('(?:^|;\\s*)' + escape(name) + '=([^;]*)'));
        return match ? match[1] : null;
    };
    var visitorKey = getCookie("cuvid");
    if (visitorKey) {
        return "&cuvid=" + visitorKey;
    }

    return "";
}

//Jquery
var clickd_scriptJQuery = document.createElement("script");
clickd_scriptJQuery.async = true;
clickd_scriptJQuery.src = getWLocation() + "web/v10/cdform.jquery.js?v=" + clickd_timeStamp;

//Form
var clickd_scriptCDForm = document.createElement("script");
clickd_scriptCDForm.async = true;

//Multiselect control script
var clickd_options = document.createElement("script");
clickd_options.async = true;

//Multiselect control css
var clickd_options_css = document.createElement("link");
clickd_options_css.rel = "stylesheet";


var loadedScriptCount = 0;
function onAllScriptsLoaded() {

    //Load the js files only after jquery was loaded
    if (loadedScriptCount === 1) {
        clickd_scriptCDForm.src = getWLocation() + "web/v10/cdform.min.js?v=" + clickd_timeStamp;
        document.getElementsByTagName('head')[0].appendChild(clickd_scriptCDForm);

        clickd_options.src = getWLocation() + "web/v10/multiselect/jquery.dropdown.js?v=" + clickd_timeStamp;
        document.getElementsByTagName('head')[0].appendChild(clickd_options);

        clickd_options_css.href = getWLocation() + "web/v10/multiselect/jquery.dropdown.css?v=" + clickd_timeStamp;
        document.getElementsByTagName('head')[0].appendChild(clickd_options_css);
    }
    else {
        if (loadedScriptCount === 4) {
            CDWidget.isInitialized = true;
            CDWidget.loadWidget();
        }
    }
}

clickd_scriptJQuery.onload = clickd_scriptJQuery.onreadystatechange = function () {
    if (typeof (jQuery) != "undefined" && (this.readyState == 'loaded' || this.readyState == 'complete' || typeof this.readyState == "undefined") && !CDWidget.isInitialized) {
        clickd_jquery = jQuery.noConflict(true);
        loadedScriptCount++;
        onAllScriptsLoaded();
    }
};

clickd_scriptCDForm.onload = clickd_scriptCDForm.onreadystatechange = function () {
    if ((this.readyState == 'loaded' || this.readyState == 'complete' || typeof this.readyState == "undefined") && !CDWidget.isInitialized) {
        loadedScriptCount++;
        onAllScriptsLoaded();
    }
};

clickd_options.onload = clickd_options.onreadystatechange = function () {
    if ((this.readyState == 'loaded' || this.readyState == 'complete' || typeof this.readyState == "undefined") && !CDWidget.isInitialized) {
        loadedScriptCount++;
        onAllScriptsLoaded();
    }
};

clickd_options_css.onload = clickd_options_css.onreadystatechange = function () {
    if ((this.readyState == 'loaded' || this.readyState == 'complete' || typeof this.readyState == "undefined") && !CDWidget.isInitialized) {
        loadedScriptCount++;
        onAllScriptsLoaded();
    }
};

document.getElementsByTagName('head')[0].appendChild(clickd_scriptJQuery);