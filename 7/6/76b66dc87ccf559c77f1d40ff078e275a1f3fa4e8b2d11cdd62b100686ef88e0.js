	
function setFormDeleteState(f) {
	var formElements = Form.getElements(f);
	var result = false;
	
	for (var i = 0; i < formElements.length; i++) {
		if (Element.hasClassName(formElements[i], "deletecheckbox")) {
			if (formElements[i].checked) {
				result = true;
			}
		}
	}
	
	var fred = $(f['duplicate']);
	
	if (result) {
		if ($(f['delete']))  Form.Element.enable($(f['delete']));
		if ($(f['coordinate'])) Form.Element.enable($(f['coordinate']));
		if ($(f['duplicate'])) Form.Element.enable($(f['duplicate']));
	} else {
		if ($(f['delete'])) Form.Element.disable($(f['delete']));
		if ($(f['coordinate'])) Form.Element.disable($(f['coordinate']));
		if ($(f['duplicate'])) Form.Element.disable($(f['duplicate']));
	}
}

function disableResubmit(form) {
	$A($$('input[type="submit"]')).each(function(submit) {
		submit.disable();
	});	
	$A($$('input[type="button"]')).each(;	

	return true;
}

$jq(document).ready(function() {
	// trim all form fields to ensure leading/trailing spaces are not persisted
	$jq('form').each(function() {
		$jq(this).on('submit', function() {
			$jq(this).find(":input").each(function(){
				if ($jq(this).val()) {
					this.value=$jq(this).val().trim();
				}
			})
			
			return true;			
		});
	});

	$jq('.deletecheckbox').each(;

	setDeleteState();
});

//define a console object
(function(b){or(var d="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),a;a=d.pop();)b[a]=b[a]||c})(window.console=window.console||{});
// sometimes window.name is used to store session information, needs to be cleared otherwise DWR will throw "empty input parameter" error
if (window.name != null && window.name != "" && (window.name.indexOf("{") > 0 || window.name.indexOf("}") > 0)) window.name = "";

//Copyright (c) 2008 Thomas Fuchs
//http://script.aculo.us/thomas
//
//Permission is hereby granted, free of charge, to any person obtaining
//a copy of this software and associated documentation files (the
//"Software"), to deal in the Software without restriction, including
//without limitation the rights to use, copy, modify, merge, publish,
//distribute, sublicense, and/or sell copies of the Software, and to
//permit persons to whom the Software is furnished to do so, subject to
//the following conditions:
//
//The above copyright notice and this permission notice shall be
//included in all copies or substantial portions of the Software.
//
//THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
//EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
//MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
//NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
//LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
//OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
//WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

//CreditCard.validate('1111 2222 3333 4444') -> true/false
//the given string is automatically stripped of whitespace, so it can be
//plugged directly into form validations
//
//The following things are tested:
//1. does the luhn validation code add up? (see http://en.wikipedia.org/wiki/Luhn_algorithm)
//2. does the number range and length seem right? (see http://en.wikipedia.org/wiki/Bank_card_number)
//3. is it one of several well-known test numbers?
//
//Card identification via CreditCard.type(string) -> "Visa", "MasterCard", etc.
//Also, CreditCard.isVisa(string) -> true/false (works for all cards given in CARDS)
//
//Be sure to adapt the CARDS array to the credit cards you accept.

var CreditCard = {
CARDS: {
 Visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
 MasterCard: /^5[1-5][0-9]{14}|222[1-9][0-9]{12}|2[3-6][0-9]{14}|27[0-1][0-9]{13}|27[0-1][0-9]{13}|2720[0-9]{12}$/,
 DinersClub: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
 Amex: /^3[47][0-9]{13}$/,
 Discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/
},
TEST_NUMBERS: $w('378282246310005 371449635398431 378734493671000 '+
 '30569309025904 38520000023237 6011111111111117 '+
 '6011000990139424 5555555555554444 5105105105105100 '+
 '4111111111111111 4012888888881881 4222222222222'
),
validate: function(number){
 return CreditCard.verifyLuhn10(number)
   && !!CreditCard.type(number)
   && !CreditCard.isTestNumber(number);
},
verifyLuhn10: function(number){
 return ($A(CreditCard.strip(number)).reverse().inject(0,function(a,n,index){
   return a + $A((parseInt(n) * [1,2][index%2]).toString())
   .inject(0, ;}) % 10 == 0);
},
isTestNumber: 
strip: 
type: function(number) {
 for(var card in CreditCard.CARDS){
   if(CreditCard['is'+card](number)) return card;}
}
};

(function(){
	for(var card in CreditCard.CARDS)
	{
		CreditCard['is'+card] = curry(card);
	}
})();

function autoResize(iframe) {
    if(iframe){
    	iframe.contentWindow.postMessage('sizing?', iframe.baseURI);
    }
}

handleSizingResponse = function(e) {
    if (typeof e.data == 'string') {
        var action = e.data.split(':')[0];
     	if(action == 'sizing') {
    		var dims = e.data.split(':')[1];
    		var id = dims.split(',')[0];
    		var height = dims.split(',')[1];
    		var width = dims.split(',')[2];
    		var iframe = $("iframe"+id);
    		
            iframe.height = height + "px";
    	    iframe.setStyle({ height: height + "px" });
        } 
    	else {
    		console.log("Unknown message: "+e.data);
        }
    }
}

if (!window.addEventListener) {
	window.attachEvent('message', handleSizingResponse, false);
} else {
	window.addEventListener('message', handleSizingResponse, false);
}

/** From windowLocation.js **/

function windowOpen () {
	if (arguments.length == 1)
		return window.open (arguments[0]);
	if (arguments.length == 2)
		return window.open (arguments[0],arguments[1]);
	if (arguments.length == 3)
		return window.open (arguments[0],arguments[1],arguments[2]);
	if (arguments.length == 4)
		return window.open (arguments[0],arguments[1],arguments[2],arguments[3]);
}

var handletapagent = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);

/* from proof */
function openNewWindow(url, target) {
	openCenteredWindow(url, target, 640, 480, "menubar=no, toolbar=no, location=no, directories=no, status=no, scrollbars=yes, resizable=yes, dependent");
}

function openCenteredWindow(url, target, width, height, parms) {
   var left = Math.floor( (screen.width - width) / 2);
   var top = Math.floor( (screen.height - height) / 2);
   var winParms = "top=" + top + ",left=" + left + ",height=" + height + ",width=" + width;
   if (parms) { winParms += "," + parms; }
   var win = window.open(url, target, winParms);
   if (parseInt(navigator.appVersion) >= 4) { win.window.focus(); }
   return win;
}

function movieLoaded(movieId, movieSource, movieWidth, movieHeight, displayWidth, displayHeight) {
	var img = $(movieId);

//	scaleThumbnail(img, movieWidth, movieHeight);
}

function iframeLoaded(iframe) { 
	var document = iframe.contentWindow.document;
	
	// Ultimately it would be ideal if we could add an event
	// observer on the iframe dom.  Since that doesn't appear 
	// to be valid, fall back to a polling mechanism...
	
	new PeriodicalExecuter(function(pe) {
		var stage = document.getElementById('Stage');
		var canvas = document.getElementById('canvas');
		var childiframe = document.getElementsByTagName('iframe');
		
		if (stage != undefined && stage.clientWidth != undefined) {
			iframe.setStyle({
				width: stage.clientWidth+"px",
				visibility: "visible"
			});
		    pe.stop();
		}
		else if (canvas != undefined && canvas.width != undefined) {
			iframe.setStyle({
				width: canvas.width+"px",
				visibility: "visible"
			});
		    pe.stop();
		}
		else if (childiframe.length != undefined) {
			iframe.setStyle({
				width: childiframe[0].width+"px",
				visibility: "visible"
			});
		    pe.stop();
		}
	}, 1);	
}


function scaleThumbnail(img, width, height) {
	var maxwidth = parseFloat(img.getStyle("max-width"));
	var maxheight = parseFloat(img.getStyle("max-height"));
	
	if (isNaN(maxwidth) || isNaN(maxheight)) {
		maxwidth = parseFloat(img.getStyle("width"));
		maxheight = parseFloat(img.getStyle("height"));
	}

	var xRatio = width / maxwidth;
	var yRatio = height / maxheight;
	
	// Select the larger of the two ratios, but ensure 
	// we don't 'grow' greater that 1:1...	
	img.width = width / Math.max(Math.max(xRatio, yRatio), 1);
	img.height = height / Math.max(Math.max(xRatio, yRatio), 1);
}	

function resizeIframe(iframe) {
	// doesn't seem to return quite the right height so add in some to compensate
	if (iframe.contentWindow.document.body.scrollHeight != 0)
		var height = 40 + iframe.contentWindow.document.body.scrollHeight + "px";
	else {
		// chrome
		var height = 40 + iframe.contentDocument.documentElement.scrollHeight + "px";
	}
	$jq(iframe).height(height);
 }