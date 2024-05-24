/*
CryptoJS v3.1.2
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/
var CryptoJS=CryptoJS||Math);
(();
((Math);
(();
CryptoJS.lib.Cipher||);
(();

(();

((Math);


// ===================
// Open footer pop-ups
// ===================
function openPopup(uu,tt)
{
  var w= 800;
  var h= 550;
  var left = (screen.width/2)-(w/2);
  var top = (screen.height/2)-(h/2);
  window.open(uu, tt, 'height='+h+',width='+w+',location=0,scrollbars=1,top='+top+',left='+left);
}

// ===================
// Polyfill for viewport position compatibility
// ===================

if (typeof Element.prototype.getBoundingClientRect !== 'function') {
    Element.prototype.getBoundingClientRect = function() {
        var el = this;
        var original = this;
        var xPos = 0;
        var yPos = 0;

        while (el) {
            if (el.tagName == "BODY") {
                // deal with browser quirks with body/window/document and page scroll
                var xScroll = el.scrollLeft || document.documentElement.scrollLeft;
                var yScroll = el.scrollTop || document.documentElement.scrollTop;

                xPos += (el.offsetLeft - xScroll + el.clientLeft);
                yPos += (el.offsetTop - yScroll + el.clientTop);
            } else {
                // for all other non-BODY elements
                xPos += (el.offsetLeft - el.scrollLeft + el.clientLeft);
                yPos += (el.offsetTop - el.scrollTop + el.clientTop);
            }

            el = el.offsetParent;
        }
        return {
            top: yPos,
            right: xPos + original.offsetWidth,
            bottom: yPos + original.offsetHeight,
            left: xPos,
        };
    }
}

if (typeof NodeList.prototype.forEach !== 'function') {
    NodeList.prototype.forEach = function(fn) {
        var list = this;
        var array = [];
        for (var key in list) {
            if (list.hasOwnProperty(key)) {
                array.push(list[key]);
            }
        }
        for (var i=0; i<array.length; i++) {
            fn(array[i]);
        }
    }
}
