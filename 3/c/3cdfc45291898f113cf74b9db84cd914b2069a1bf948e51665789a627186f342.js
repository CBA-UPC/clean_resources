window['adwordsDeps'] = ["/integrations/vendor/commons.c42222c4cb2f8913500f.js"];window['adwordsLoader'] = function() { return window.adwordsIntegration=function(o){function e(e){for(var r,a,l=e[0],g=e[1],s=e[2],u=0,_=[];u<l.length;u++)a=l[u],Object.prototype.hasOwnProperty.call(t,a)&&t[a]&&_.push(t[a][0]),t[a]=0;for(r in g)Object.prototype.hasOwnProperty.call(g,r)&&(o[r]=g[r]);for(c&&c(e);_.length;)_.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var o,e=0;e<i.length;e++){for(var n=i[e],r=!0,l=1;l<n.length;l++){var g=n[l];0!==t[g]&&(r=!1)}r&&(i.splice(e--,1),o=a(a.s=n[0]))}return o}var r={},t={6:0},i=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return o[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=o,a.c=r,a.d=function(o,e,n){a.o(o,e)||Object.defineProperty(o,e,{enumerable:!0,get:n})},a.r=function(o){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},a.t=function(o,e){if(1&e&&(o=a(o)),8&e)return o;if(4&e&&"object"==typeof o&&o&&o.__esModule)return o;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:o}),2&e&&"string"!=typeof o)for(var r in o)a.d(n,r,function(e){return o[e]}.bind(null,r));return n},a.n=function(o){var e=o&&o.__esModule?function(){return o.default}:function(){return o};return a.d(e,"a",e),e},a.o=function(o,e){return Object.prototype.hasOwnProperty.call(o,e)},a.p="";var l=window.webpackJsonp_name_Integration=window.webpackJsonp_name_Integration||[],g=l.push.bind(l);l.push=e,l=l.slice();for(var s=0;s<l.length;s++)e(l[s]);var c=g;return i.push(["OmGZ",0]),n()}({OmGZ:function(o,e,n){"use strict";var r=n("hjHq"),t=n("patC"),i=o.exports=r("AdWords").option("conversionId","").option("pageRemarketing",!1).option("eventMappings",[]).tag('<script src="//www.googleadservices.com/pagead/conversion_async.js">');i.prototype.initialize=function(){var o=this.loaded,e=this.ready;this.load((function(){t(o,e)}))},i.prototype.loaded=function(){return!(!document.body||!window.google_trackConversion)},i.prototype.page=function(o){var e=this.options.pageRemarketing,n=this.options.conversionId,r=o.properties();window.google_trackConversion({google_conversion_id:n,google_custom_params:{},google_remarketing_only:!1}),e&&window.google_trackConversion({google_conversion_id:n,google_custom_params:r,google_remarketing_only:!0})},i.prototype.track=function(o){var e=this,n=o.properties(),r=this.options.eventMappings,t=o.revenue()||0;r.forEach((function(r){var i;if(r.value){if(r.value.eventName.toLowerCase()!==o.event().toLowerCase())return;i=r.value.conversionId||e.options.conversionId,""!==r.value.label&&(delete n.revenue,window.google_trackConversion({google_conversion_id:i,google_custom_params:n,google_conversion_language:"en",google_conversion_format:"3",google_conversion_color:"ffffff",google_conversion_label:r.value.label,google_conversion_value:t,google_remarketing_only:!1})),r.value.remarketing&&window.google_trackConversion({google_conversion_id:i,google_custom_params:n,google_remarketing_only:!0})}else{if(r.eventName.toLowerCase()!==o.event().toLowerCase())return;i=r.conversionId||e.options.conversionId,""!==r.label&&(delete n.revenue,window.google_trackConversion({google_conversion_id:i,google_custom_params:n,google_conversion_language:"en",google_conversion_format:"3",google_conversion_color:"ffffff",google_conversion_label:r.label,google_conversion_value:t,google_remarketing_only:!1})),r.remarketing&&window.google_trackConversion({google_conversion_id:i,google_custom_params:n,google_remarketing_only:!0})}}))}}});
//# sourceMappingURL=adwords.js.map
};        else {
            if (this.showOverlay) {
                this.dialog_box = this.overlay.parentNode.insertBefore(this.dialog_box, this.overlay);
            }
        }
    },
    show: function(iehack) {
        if (this.showStarted) {
            return;
        }
        if (this.toolTipMode) {
            this.showOverlay = false;
        }

        this.isDrawn = true; //to know whether this is drawn

        //this removes the actual to be displayed element from the dom and attaches it at the end. That way, it will be in front of all other divs.
        //and even the clicking in IE will work.
        $(this.dialog_box).remove();
        document.body.appendChild(this.dialog_box);

        var top = 0;
        var left = 0;
        var popupDims = Element.getDimensions(this.dialog_box);


        var arrayPageSize = this.getPageSize();

        this.overlay.style.width = arrayPageSize[0]+'px';
        this.overlay.style.height = arrayPageSize[1]+'px';
        if (this.backgroundHide) {
            this.overlay.onclick = this.hide.bind(this);
        }

        this.parent_element = this.dialog_box.parentNode;

        if (!this.toolTipMode) {
            var b_dims = Element.getDimensions(this.overlay);
            if (b_dims.width > 0) {
                //the overlay has the correct size
                left = ((b_dims.width/2) - (popupDims.width/2));
            } else {
                //the overlay has an invalid size so we use the pageSize again
                left = ((arrayPageSize[0]/2) - (popupDims.width/2));
            }
        } else {
            left = tempX + 25;
            // Check if there is enough room right of the mouse pointer to show the tooltip. If not, show it on the left
            if (left + popupDims.width > arrayPageSize[0]) {
                left = tempX - popupDims.width - 25;
            }
        }

        //show the dialog a bit above the center of the screen
        //IE fails in displaying the dialog box in a fixed position...
        if (Prototype.Browser.IE) {

            var arrayPageScroll = document.viewport.getScrollOffsets();

            if (iehack) {
                //IE does not manage to return the correct mouse coordinates once the mouse
                //moved on top of the div. With this line it works, however...
                var e = window.event;
                tempX = Event.pointerX(e);
            }

            //IE6 displays the popup to high....
            if (Prototype.Browser.IE6) {
                if (!this.toolTipMode) {
                    top = arrayPageScroll[1] + (document.viewport.getHeight() / 3) + (popupDims.height/2);
                } else {
                    //IE needs to position the popup with reference to the start of the page
                    //we need some pixels between the tooltip and the mouse the make it move right.
                    top = arrayPageScroll[1] + tempY - (popupDims.height*1.5);
                }
            } else {

                if (!this.toolTipMode) {
                    top = arrayPageScroll[1] + (document.viewport.getHeight() / 3) - (popupDims.height/2);
                } else {
                    //IE needs to position the popup with reference to the start of the page
                    //we need some pixels between the tooltip and the mouse the make it move right.
                    top = arrayPageScroll[1] + tempY - (popupDims.height/2) - 25;
                }
            }
            //Hack for circumventing the IE positioning of the play now popup which needs a different "relative" positioning frame (this was needed before the readding to the DOM)
            //if (this.dialog_box.identify() == 'sg_prop_game') {
            //this.dialog_box.style.left = popupDims.width/-4 + 'px';
            //}
            //alert('left: ' + this.dialog_box.style.left);
        } else {

            if (!this.toolTipMode) {
                //Other browsers align the fixed relative on the current view. So we do not need to regard the scroll position
                top = (window.innerHeight / 3) - (popupDims.height/2);
            } else {
                //tooltip mode. the top and left need to be adjusted w.r.t. the mouse position
                //the mouse position is in absolute coordinates from the top left of the page. Regardless of the scroll position...
                top = tempY - (popupDims.height/2) - 25;
            }
        }
        //Hack: when top is less than 100, set default top=100px
        if (top < 100) {
            //failback
            top = 100;
        }

        if (Prototype.Browser.IE) {
            this.dialog_box.style.position = "absolute";
        } else {
            this.dialog_box.style.position = "fixed";
        }

        if (this.dialog_box.centerPopup){
            this.dialog_box.style.top = top + 'px';
            this.dialog_box.style.left = left + 'px';
        }	else if (this.balloonMode) {
            this.dialog_box.style.position = "fixed"; //for all browsers in balloonMode
            this.dialog_box.style.bottom = '0px';
            this.dialog_box.style.right = '0px';
            this.dialog_box.style.zIndex = '201';
        }

        if (this.showOverlay) {
            this.overlay.style.display = 'block';
            //new Effect.Appear(this.overlay, {duration: 0.0, from: 0.3, to: 0.3});
            //$(this.overlay.setOpacity(0.8));
            //$(this.overlay.setOpacity(popupOpacity));
            $(this.overlay.setOpacity(this.dialog_box.popupOpacity));

        }

        if (this.repeatableMode) {
            var tipStart = this.getTipStart();
        }

        // If we use balloon mode with repeatable we don't show the animation every time
        if (this.balloonMode) {
            //if repeatableIsShowing is set, make sure it shows for at least 2 seconds, otherwise make the animation
            if (this.repeatableIsShowing && tipStart+2<this.currentTime) {
                this.dialog_box.style.display = 'block';
                this.dialog_box.style.visibility = 'visible';
            } else {
                // If our balloon is set in the center don't animate
                //Opera called this method indefinitely often. This forbids that
                this.showStarted = true;
                //display the popup at the bottom and move it in (other effects do not work well with absolute / fixed positioning)
                $(this.dialog_box).style.bottom = '-'+popupDims.height+'px';

                if (Prototype.Browser.Opera) {
                    //Opera 11 has repaint issues with the moving balloon tip
                    $(this.dialog_box).style.bottom = '0px';
                    $(this.dialog_box).setOpacity(0);
                    new Effect.Opacity($(this.dialog_box), {from: 0.0, to: 1.0, duration: 2.0});
                } else {
                    //Effect.Move does not work in IE so we move by morphing the style ourselves
                    new Effect.Morph($(this.dialog_box), { style: 'bottom:0px;', duration: 2});
                }
                $(this.dialog_box).style.display = 'block';
                $(this.dialog_box).style.visibility = 'visible';
            }
            setTimeout('$(\''+this.id+'\').balloonHide();', this.repeatableShowTime * 1000);
        } else {
            this.dialog_box.style.display = 'block';
            this.dialog_box.style.visibility = 'visible';
        }
        //Is das hier nötig für IE 6???
        //this.dialog_box.style.left = '0px';
        //var popupDims = Element.getDimensions(this.dialog_box);
        //this.dialog_box.style.left = ((this.getPageSize()[0]/2) - (popupDims.width)/2) + 'px';
    },
    setOpacity: function(val) {
        if (val < 0.0001) {
            this.showOverlay = false;
            this.setBackgroundHide(false);
        }
        this.dialog_box.popupOpacity = val;
    },
    /**
     * CJC Set Position Top and Left of the popup if you don't want to center it.
     * The default value for centerPopup is true.
     */
    setPosition: function(topPx, leftPx) {
        this.dialog_box.centerPopup = false;
        this.dialog_box.style.top = topPx + 'px';
        this.dialog_box.style.left = leftPx + 'px';
    },

    persistent_show: function() {
        var arrayPageSize = this.getPageSize();

        this.overlay.style.width = arrayPageSize[0]+'px';
        this.overlay.style.height = arrayPageSize[1]+'px';
        this.moveDialogBox('out');

        this.selectBoxes('hide');
        if (this.showOverlay) {
            this.overlay.style.display = 'block';
            //new Effect.Appear(this.overlay, {duration: 0.1, from: 0.0, to: 0.3});
        }

        this.dialog_box.style.display = '';
        this.dialog_box.style.left = '0px';
        var popupDims = Element.getDimensions(this.dialog_box);
        this.dialog_box.style.left = ((this.getPageSize[0]/2) - (popupDims.width)/2) + 'px';

    },
    hide: function() {
        if (this.showOverlay) {
            this.overlay.style.display = 'none';
            //new Effect.Fade(this.overlay, {duration: 0.1});
        }
        this.dialog_box.style.visibility = 'hidden';
        $A(this.dialog_box.getElementsByTagName('input')).each(function(e){if(e.type!='submit')e.value=''});
        this.isDrawn = false; //To know that the dialog is not drawn.
    },
    balloonHide: function() {
        if (this.slidingOut === undefined) {
            this.slidingOut = true;
            var popupDims = Element.getDimensions(this.dialog_box);
            //this.balloonHideEfect = new Effect.Move($(this.dialog_box), { x: 0, y: popupDims.height, mode: 'relative', duration: 2});
            this.balloonHideEfect = new Effect.Morph($(this.dialog_box), { style: 'bottom:'+(popupDims.height*-1.0)+'px;', duration: 2});
            //after the effect make user it's gone
            this.slideOutHideTimer = setTimeout('$(\''+this.id+'\').hide();', 2 * 1000);
        }
    },
    balloonStay: function() {
        if (this.balloonHideEfect !== undefined) {
            this.balloonHideEfect.cancel();
            clearTimeout(this.slideOutHideTimer);
            this.balloonHideEfect = undefined;
            $(this.dialog_box).style.top = ''; //the scriptaculous effect changes the top value so clear it to make bottom count
            $(this.dialog_box).style.bottom = '0px';
            //reschedule the hiding
            this.slidingOut=undefined;
            setTimeout('$(\''+this.id+'\').balloonHide();', this.repeatableShowTime * 1000);
        }
    },
    repeatableClickClose: function() {
        //change cookie so that the balloon is not displayed again
        this.hide();
        document.cookie = 'tipStart=' + (this.getTipStart() - this.repeatableShowTime - 10) + '; path=/; domain=' + this.getCookieDomain() + ';';
    },
    getCookieDomain: function() {
        var hostname = document.location.hostname;
        var parts = hostname.split('.');
        if (parts.length < 2) {
            return '.' + hostname;
        } else {
            return '.' + parts[parts.length - 2] + '.' + parts[parts.length - 1];
        }
    },
    /* invisible does not necessarily center correct if shown again but it keeps content like applets intact in IE */
    makeInvisible: function() {
        if (this.showOverlay) {
            this.overlay.style.display = 'none';
            /*new Effect.Opacity(
             this.overlay, {
             from: 0.3,
             to: 0.0,
             duration: 0.1
             }
             );*/
        }
        this.overlay.style.visibility = 'hidden';
        this.dialog_box.style.visibility = 'hidden';
    },
    makeVisible: function() {
        if (this.showOverlay) {
            this.overlay.style.visibility = 'visible';
            this.overlay.style.display = 'block';
            /*new Effect.Opacity(
             this.overlay, {
             from: 0.0,
             to: 0.3,
             duration: 0.1
             }
             );*/
        }
        this.dialog_box.style.visibility = 'visible';
    },
    /**
     *  Cross-browser compatible function to get pixel size of displayed HTML.
     *  From lightbox image gallery
     *  @return array[0] = width, array[1] = height
     */
    getPageSize: function() {


        var xScroll, yScroll;

        if (window.innerHeight && window.scrollMaxY) {
            xScroll = window.innerWidth + window.scrollMaxX;
            yScroll = window.innerHeight + window.scrollMaxY;
        } else if (document.body.scrollHeight > document.body.offsetHeight){ // all but Explorer Mac
            xScroll = document.body.scrollWidth;
            yScroll = document.body.scrollHeight;
        } else { // Explorer Mac...would also work in Explorer 6 Strict, Mozilla and Safari
            xScroll = document.body.offsetWidth;
            yScroll = document.body.offsetHeight;
        }

        var windowWidth, windowHeight;

        if (self.innerHeight) {	// all except Explorer
            if(document.documentElement.clientWidth){
                windowWidth = document.documentElement.clientWidth;
            } else {
                windowWidth = self.innerWidth;
            }
            windowHeight = self.innerHeight;
        } else if (document.documentElement && document.documentElement.clientHeight) { // Explorer 6 Strict Mode
            windowWidth = document.documentElement.clientWidth;
            windowHeight = document.documentElement.clientHeight;
        } else if (document.body) { // other Explorers
            windowWidth = document.body.clientWidth;
            windowHeight = document.body.clientHeight;
        }

        // for small pages with total height less then height of the viewport
        if(yScroll < windowHeight){
            pageHeight = windowHeight;
        } else {
            pageHeight = yScroll;
        }

        // for small pages with total width less then width of the viewport
        if(xScroll < windowWidth){
            pageWidth = xScroll;
        } else {
            pageWidth = windowWidth;
        }

        return [pageWidth,pageHeight];
    },
    /**
     * If set to false, the popup cannot be closed with a click outside in the background.
     */
    setBackgroundHide: function (val) {
        this.backgroundHide = val;
    },
    setBalloonMode: function (val) {
        this.balloonMode = val;
    },
    setRepeatableMode: function (val) {
        this.repeatableMode = val;
    },
    setCenterPopup: function(val) {
        this.dialog_box.centerPopup = val;
    },
    setRepeatableShowTime: function (val) {
        this.repeatableShowTime = val;
    },
    setRepeatableIsShowing: function (val) {
        this.repeatableIsShowing = val;
    },
    setCurrentTime: function (val) {
        this.currentTime = val;
    },
    /**
     * This method sets the dialog window to tooltip mode.
     * I.e. the position of the window is dependent on the mouse position and moves when the mouse moves over the object that
     * triggered the tooltip.
     * It also registers itself on the popup as mousemove listener in order to reposition it correctly when
     * quick mouse movements get the mouse above that popup.
     */
    setToolTipMode: function () {
        this.toolTipMode = true;
        /** Adapted from: http://www.codelifter.com
         * This method additionally extracts the scroll offset of the page so that the visible upper
         * left corner is always 0,0
         */
        if (Prototype.Browser.IE) {
            //this is an error in IE8
            try {
                document.captureEvents(Event.MOUSEMOVE);
            } catch (e) {}
        }
        document.onmousemove = getMouseXY;
        function getMouseXY(e) {
            if (Prototype.Browser.IE) { // grab the x-y pos.s if browser is IE
                //in IE, 0,0 is the visible top left corner
                tempX = event.clientX + document.body.scrollLeft;
                tempY = event.clientY + document.body.scrollTop;
            } else {  // grab the x-y pos.s if browser is NS
                //in non-IE browsers, 0,0 is the top of the website
                //substract the scrolloffsets
                var arrayPageScroll = document.viewport.getScrollOffsets();
                tempX = e.pageX - arrayPageScroll[0];
                tempY = e.pageY - arrayPageScroll[1];
            }
            if (tempX < 0) {
                tempX = 0;
            }
            if (tempY < 0) {
                tempY = 0;
            }
            return true;
        }
    },
    setToolTipForClass: function(className, delay) {
        this.setToolTipMode();
        var els = document.getElementsByClassName(className);
        for(i = 0; i < els.length; i++) {
            this.setToolTipForElement(els[i], delay);
        }
    },
    setToolTipForId: function(id, delay) {
        this.setToolTipMode();
        var el = document.getElementById(id);
        this.setToolTipForElement(el, delay);
    },
    setToolTipForElement: function(el, delay) {
        if (delay === undefined) {
            delay = 0;
        }
        if (toolTipShowing === undefined) {
            var toolTipShowing = false;
        }
        self = this;
        el.addEventListener('mouseenter',function(){
            timeout = setTimeout(function(){
                toolTipShowing = true;
                self.show();
            }, delay);
        });
        el.addEventListener('mouseleave',function(){
            clearTimeout(timeout);
            toolTipShowing = false;
            self.hide();
        });
        el.addEventListener('mousemove',function(){
            if (toolTipShowing) {
                self.show();
            }
        });
    },
    getTipStart: function() {
        try {
            return parseInt(this.readCookie('tipStart'));
        } catch (e) {
            return 0;
        }
    },
    readCookie: function (name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for(var i=0;i < ca.length;i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
        }
        return null;
    }
});

Prototype.Browser.IE6 = Prototype.Browser.IE && parseInt(navigator.userAgent.substring(navigator.userAgent.indexOf("MSIE")+5)) == 6;
Prototype.Browser.IE7 = Prototype.Browser.IE && parseInt(navigator.userAgent.substring(navigator.userAgent.indexOf("MSIE")+5)) == 7;
Prototype.Browser.IE8 = Prototype.Browser.IE && !Prototype.Browser.IE6 && !Prototype.Browser.IE7;
