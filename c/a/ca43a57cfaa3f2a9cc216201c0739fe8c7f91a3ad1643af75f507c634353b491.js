!function(e){e.fn.autoComplete=function(t){var a=e.extend({},e.fn.autoComplete.defaults,t);return"string"==typeof t?(this.each((),this):this.each((function(){var t=e(this);function n(e){var n=t.val();if(t.cache[n]=e,e.length&&n.length>=a.minChars){for(var o="",s=0;s<e.length;s++)o+=a.renderItem(e[s],n,t);t.sc.html(o),t.updateSC(0)}else t.sc.hide()}t.sc=e('<div class="autocomplete-suggestions '+a.menuClass+'"></div>'),t.data("sc",t.sc).data("autocomplete",t.attr("autocomplete")),t.attr("autocomplete","off"),t.cache={},t.last_val="",t.updateSC=function(n,o){if(t.sc.css({top:t.offset().top+t.outerHeight(),left:t.offset().left,width:("auto"===a.width?t.outerWidth():"function"==typeof a.width?a.width(t):a.width)+"px"}),!n&&(t.sc.show(),t.sc.maxHeight||(t.sc.maxHeight=parseInt(t.sc.css("max-height"))),t.sc.suggestionHeight||(t.sc.suggestionHeight=e(".autocomplete-suggestion",t.sc).first().outerHeight()),t.sc.suggestionHeight))if(o){var s=t.sc.scrollTop(),c=o.offset().top-t.sc.offset().top;c+t.sc.suggestionHeight-t.sc.maxHeight>0?t.sc.scrollTop(c+t.sc.suggestionHeight+s-t.sc.maxHeight):c<0&&t.sc.scrollTop(c+s)}else t.sc.scrollTop(0)},e(window).on("resize.autocomplete",t.updateSC),t.sc.appendTo("body"),t.sc.on("mouseleave",".autocomplete-suggestion",(),t.sc.on("mouseenter",".autocomplete-suggestion",(),t.sc.on("mousedown click",".autocomplete-suggestion",(function(n){var o=e(this),s=o.data("val");return(s||o.hasClass("autocomplete-suggestion"))&&(t.val(s),a.onSelect(n,s,o,t),t.sc.hide()),!1})),t.on("blur.autocomplete",(),a.minChars||t.on("focus.autocomplete",(),t.on("keydown.autocomplete",(function(n){var o;if((40==n.which||38==n.which)&&t.sc.html())return(s=e(".autocomplete-suggestion.selected",t.sc)).length?(o=40==n.which?s.next(".autocomplete-suggestion"):s.prev(".autocomplete-suggestion")).length?(s.removeClass("selected"),t.val(o.addClass("selected").data("val"))):(s.removeClass("selected"),t.val(t.last_val),o=0):(o=40==n.which?e(".autocomplete-suggestion",t.sc).first():e(".autocomplete-suggestion",t.sc).last(),t.val(o.addClass("selected").data("val"))),t.updateSC(0,o),!1;if(27==n.which)t.val(t.last_val).sc.hide();else if(13==n.which||9==n.which){var s;(s=e(".autocomplete-suggestion.selected",t.sc)).length&&t.sc.is(":visible")&&(a.onSelect(n,s.data("val"),s,t),setTimeout((,20))}})),t.on("keyup.autocomplete",(function(o){if(!~e.inArray(o.which,[13,27,35,36,37,38,39,40])){var s=t.val();if(s.length>=a.minChars){if(s!=t.last_val){if(t.last_val=s,clearTimeout(t.timer),a.cache){if(s in t.cache)return void n(t.cache[s]);for(var c=1;c<s.length-a.minChars;c++){var i=s.slice(0,s.length-c);if(i in t.cache&&!t.cache[i].length)return void n([])}}t.timer=setTimeout((,a.delay)}}else t.last_val=s,t.sc.hide()}}))}))},e.fn.autoComplete.defaults={source:0,minChars:3,delay:150,cache:1,menuClass:"",renderItem:function(e,t,a){t=t.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&");var n=new RegExp("("+t.split(" ").join("|")+")","gi");return'<div class="autocomplete-suggestion" data-val="'+e+'">'+e.replace(n,"<b>$1</b>")+"</div>"},onSelect:width:"auto"}}(jQuery),SWR.SearchSuggestion=function(e){var t="searchSuggestion",a="swr."+t,n="."+a,o=e.fn[t],s={PJAX_DATA_API:"pjax:end"+n+".data-api"},c="#header .navbar-search,.form-suche",i=function(){function t(t){var a=this;a.element=t,a.$element=e(a.element),a.suggestUrl=a.$element.data("suggestUrl"),a.$input=a.$element.find('[name="q"]'),0===a.$input.length&&(a.$input=a.$element.find('[name="swx_q"]')),a.isHeader=a.$element.hasClass("navbar-search"),a.testJSON={query:"pop",results:[{name:"pop night",type:"suggest"},{name:"popup",type:"suggest"},{name:"popnacht",type:"suggest"},{name:"popup mit daniela hilpp",type:"suggest"},{name:"popcorn",type:"suggest"},{name:"popolski",type:"suggest"},{name:"popshop",type:"suggest"},{name:"popup mit daniele hilpp",type:"suggest"},{name:"popnacht 13.4.2021 mit ben streubel",type:"suggest"},{name:"pop up daniela hilpp",type:"suggest"}]},void 0!==a.suggestUrl&&a._suggestion()}return t.prototype._suggestion=function(){var t,a=this,n="https://www.swr.de",o={minChars:2,delay:0,source:function(o,s){try{t.abort()}catch(e){}o=o.toLowerCase(),window.isFractal&&-1!==window.location.host.indexOf("localhost")||(n=window.location.origin),-1!==n.indexOf("beta")&&((n=n.split("."))[0]="https://www",n=n.join(".")),console.log(n+a.suggestUrl+encodeURIComponent(o)),t=e.getJSON(n+a.suggestUrl+encodeURIComponent(o),(function(t){var a;a="object"==typeof t&&t.hasOwnProperty("results")?e.map(t.results,():t,s(a)}))},renderItem:onSelect:function(e,t,a,n){if(n){if(window.isFractal?console.log("Submitted:",n.val()):n.closest("form").find('button[type="submit"]').trigger("click"),13!==e.which&&13!==e.keyCode)return;e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation()}}},s=function(t,n){var s="";s=a.isHeader?"swr-autocomplete-header":"swr-autocomplete-suchseite",a.$input.attr("data-class-name-suggestion",s),t.autoComplete(o),n&&e(document).one("pjax:beforeSend",(function(){t.autoComplete("destroy")}))};a.isHeader?s(a.$input,!1):s(a.$input,!0)},t.prototype.dispose=function(){this.$element.off(n),this.$element.find(".close-btn").remove(),this.$element=null,this.element=null,e(document).off(n)},t._jQueryInterface=function(){return this.each((function(){var n=e(this).data(a);n||(n=new t(this),e(this).data(a,n))}))},t}();return e(c).each((function(){var t=e(this);i._jQueryInterface.call(t,t.data())})),e("[data-class-name-suggestion]").each((function(t,a){e(e(".autocomplete-suggestions")[t]).addClass(e(a).data("classNameSuggestion"))})),e(document).on(s.PJAX_DATA_API,(function(t,a,n){e(n.container).find(c).each((function(){var t=e(this);i._jQueryInterface.call(t,t.data())})),e("[data-class-name-suggestion]").each((function(t,a){e(e(".autocomplete-suggestions")[t]).addClass(e(a).data("classNameSuggestion"))}))})),e.fn[t]=i._jQueryInterface,e.fn[t].Constructor=i,e.fn[t].noConflict=function(){return e.fn[t]=o,i._jQueryInterface},i}(window.jQuery),SWR.Search=function(e){var t="search",a="swr."+t,n="."+a,o=e.fn[t],s={PJAX_DATA_API:"pjax:end.swr.search.data-api"},c="#header .navbar-search",i=function(){var t=function o(a){var n=this;n.element=a,n.$element=e(n.element),n.$input=n.$element.find('[name="q"]'),0===n.$input.length&&(n.$input=n.$element.find('[name="swx_q"]')),t(),e(document).on("pjax:end",(function(){n.$input.val(""),n.$input.blur(),e(document).off("click.swr.search.data-api"),e(".navbar-search-wrapper").hasClass("search-open")&&e(document).trigger("header:search:close",!1)})),n.$input.val(""),n.$input.blur(),e(document).off("click.swr.search.data-api"),e(".navbar-search-wrapper").hasClass("search-open")&&e(document).trigger("header:search:close",!1),n._moveSuggestion(),n._events()}return o.prototype._moveSuggestion=o.prototype._events=function(){var a=this,n=e(".search-button-animated"),o=e(".navbar-search-wrapper"),s=e("#content-wrapper"),c=e("#playerbar"),i=e("#header-main-navi-header");e(document).on("header:search:open",(function(t,r){e(".navbar-search-wrapper, .navbar-search-wrapper input, .navbar-search-wrapper button").attr("tabindex","");try{r&&PIANO.UsabilityClick.usabilityClickEvent({type:"action",click:"Suche im Header wird geöffnet",click_chapter1:"Menü",click_chapter3:"Suche"})}catch(e){console.warn(e)}window.outerWidth>=992?o.hide():a.$element.hide(),e([o,a.$element,n,c,s,i]).each((function(){e(this).addClass("search-open")})),s.removeClass("background-fade-out").addClass("background-fade-in"),setTimeout((function(){s.removeClass("background-fade-in")}),1e3),window.outerWidth>=992?o.fadeIn("slow"):a.$element.fadeIn("slow"),a.$input[0].focus(),e("a.back-to-top").fadeOut("slow")})),e(document).on("header:search:close",(function(r,u){t();try{PIANO.UsabilityClick.usabilityClickEvent({type:"action",click:"Suche im Header wird geschlossen",click_chapter1:"Menü",click_chapter3:"Suche"})}catch(e){console.warn(e)}s.removeClass("background-fade-in").addClass("background-fade-out"),t(),setTimeou)}),1e3),n.removeClass("search-open");(window.outerWidth>=992?o:a.$element).fadeOut("slow",(function(){e([o,a.$element,c,s,i]).eac)}))}))})),n.on("click",(function(){o.hasClass("search-open")?e(document).trigger("header:search:close",!0):(i.hasClass("menu-open")&&e(document).trigger("header:menu:close",!1),e(document).trigger("header:search:open",!0))})),e(document).on("click.swr.search.data-api",(function(t){o.hasClass("search-open")&&0===e(t.target).closest(".search-overlay").length&&0===e(t.target).closest(".search-button-animated").length&&e(document).trigger("header:search:close",!1)})),a.$input.on("keyup",(function(){a.$input.val().length>0?(e(".btn-delete-search").show(),a.$input.addClass("active")):(e(".btn-delete-search").hide(),a.$input.removeClass("active"))})),e(".btn-delete-search").click((function(){a.$input.val(""),a.$input[0].focus(),e(".swr-autocomplete-header").hide(),e(this).hide()})),a.$input.off("click"),a.$input.off("focusin"),a.$input.off("focusout")},o.prototype.dispose=function(){this.$element.off(n),this.$element.find(".close-btn").remove(),this.$element=null,this.element=null,e(document).off(n)},o._jQueryInterface=function(){return this.each((function(){var t=e(this).data(a);t||(t=new o(this),e(this).data(a,t))}))},o}();return e(c).each((function(){var t=e(this);i._jQueryInterface.call(t,t.data())})),e(document).on(s.PJAX_DATA_API,(function(t,a,n){e(n.container).find(c).eac)}))})),e.fn[t]=i._jQueryInterface,e.fn[t].Constructor=i,e.fn[t].noConflie},i}(window.jQuery);
//# sourceMappingURL=swr-search.min.js.map
