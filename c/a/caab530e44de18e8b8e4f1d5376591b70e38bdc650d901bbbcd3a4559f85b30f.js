(self.webpackChunk=self.webpackChunk||[]).push([[1321],{4623:(e,s,n)=>{var a=n(9755);n(9826),n(7327),n(2564),n(3734),n(1715),n(381),n(6891),n(686),n(2854),n(2083);var o={initBeforeLoad:function(){a("body").addClass("no-transitions")},initAfterLoad:initSidebars:function(){var e;e=function(){a(".sidebar-main").find(".nav-sidebar").children(".nav-item-submenu").hover((function(){var e=a(this),s="nav-item-submenu-reversed";e.find(".nav-group-sub").filter(":visible").outerHeight(),e.children(".nav-group-sub").length&&(e.children(".nav-group-sub").offset().top+e.find(".nav-group-sub").filter(":visible").outerHeight()>document.body.clientHeight?e.addClass(s):e.removeClass(s))}))},a("body").hasClass("sidebar-xs")&&e(),a(".sidebar-main-toggle").on("click",(function(s){s.preventDefault(),a("body").toggleClass("sidebar-xs").removeClass("sidebar-mobile-main"),e()})),a(document).on("click",".sidebar-main-hide",(function(e){e.preventDefault(),a("body").toggleClass("sidebar-main-hidden")})),a(document).on("click",".sidebar-secondary-toggle",(function(e){e.preventDefault(),a("body").toggleClass("sidebar-secondary-hidden")})),a(document).on("click",".sidebar-right-main-toggle",(function(e){e.preventDefault(),a("body").toggleClass("sidebar-right-visible"),a("body").hasClass("sidebar-right-visible")?(a("body").addClass("sidebar-xs"),a(".sidebar-main .nav-sidebar").children(".nav-item").children(".nav-group-sub").css("display","")):a("body").removeClass("sidebar-xs")})),a(document).on("click",".sidebar-right-main-hide",(function(e){e.preventDefault(),a("body").toggleClass("sidebar-right-visible"),a("body").hasClass("sidebar-right-visible")?a("body").addClass("sidebar-main-hidden"):a("body").removeClass("sidebar-main-hidden")})),a(document).on("click",".sidebar-right-toggle",(function(e){e.preventDefault(),a("body").toggleClass("sidebar-right-visible")})),a(document).on("click",".sidebar-right-secondary-toggle",(function(e){e.preventDefault(),a("body").toggleClass("sidebar-right-visible"),a("body").hasClass("sidebar-right-visible")?a("body").addClass("sidebar-secondary-hidden"):a("body").removeClass("sidebar-secondary-hidden")})),a(document).on("click",".sidebar-component-toggle",(function(e){e.preventDefault(),a("body").toggleClass("sidebar-component-hidden")})),a(".sidebar-mobile-expand").on("click",(function(e){e.preventDefault();var s=a(this).parents(".sidebar"),n="sidebar-fullscreen";s.hasClass(n)?s.removeClass(n):s.addClass(n)})),a(".sidebar-mobile-main-toggle").on("click",(function(e){e.preventDefault(),a("body").toggleClass("sidebar-mobile-main").removeClass("sidebar-mobile-secondary sidebar-mobile-right"),a(".sidebar-main").hasClass("sidebar-fullscreen")&&a(".sidebar-main").removeClass("sidebar-fullscreen")})),a(".sidebar-mobile-secondary-toggle").on("click",(function(e){e.preventDefault(),a("body").toggleClass("sidebar-mobile-secondary").removeClass("sidebar-mobile-main sidebar-mobile-right"),a(".sidebar-secondary").hasClass("sidebar-fullscreen")&&a(".sidebar-secondary").removeClass("sidebar-fullscreen")})),a(".sidebar-mobile-right-toggle").on("click",(function(e){e.preventDefault(),a("body").toggleClass("sidebar-mobile-right").removeClass("sidebar-mobile-main sidebar-mobile-secondary"),a(".sidebar-right").hasClass("sidebar-fullscreen")&&a(".sidebar-right").removeClass("sidebar-fullscreen")})),a(".sidebar-mobile-component-toggle").on("click",()},initNavigations:function(){var e,s;s="nav-item-open",a("."+(e="nav-sidebar")).each((function(){a(this).find(".nav-item").has(".nav-group-sub").children(".nav-item > .nav-link").not(".disabled").on("click",(function(n){n.preventDefault();var o=a(this),i=a(".sidebar-xs").not(".sidebar-mobile-main").find(".sidebar-main ."+e).children(".nav-item");o.parent(".nav-item").hasClass(s)?o.parent(".nav-item").not(i).removeClass(s).children(".nav-group-sub").slideUp(250):o.parent(".nav-item").not(i).addClass(s).children(".nav-group-sub").slideDown(250),"accordion"==o.parents("."+e).data("nav-type")&&o.parent(".nav-item").not(i).siblings(":has(.nav-group-sub)").removeClass(s).children(".nav-group-sub").slideUp(250)}))})),a(document).on("click",".nav-sidebar .disabled",(function(e){e.preventDefault()})),a(".nav-scrollspy").find(".nav-item").has(".nav-group-sub").children(".nav-item > .nav-link").off("click"),a(document).on("click",".dropdown-content",(),a(".navbar-nav .disabled a, .nav-item-levels .disabled").on("click",(),a('.dropdown-content a[data-toggle="tab"]').on("click",()},initComponents:function(){!function(){a('[data-popup="tooltip"]').tooltip();var e='[data-popup="tooltip-demo"]';a(e).is(":visible")&&(a(e).tooltip("show"),setTimeout((,2e3))}(),a('[data-popup="popover"]').popover()},initCardActions:function(){var e;a(".card [data-action=reload]:not(.disabled)").on("click",(function(e){e.preventDefault();var s=a(this).closest(".card");a(s).block({message:'<i class="icon-spinner2 spinner"></i>',overlayCSS:{backgroundColor:"#fff",opacity:.8,cursor:"wait","box-shadow":"0 0 0 1px #ddd"},css:{border:0,padding:0,backgroundColor:"none"}}),window.setTimeout((,2e3)})),(e=a(".card-collapsed")).children(".card-header").nextAll().hide(),e.find("[data-action=collapse]").addClass("rotate-180"),a(".card [data-action=collapse]:not(.disabled)").on("click",(function(e){var s=a(this);e.preventDefault(),s.parents(".card").toggleClass("card-collapsed"),s.toggleClass("rotate-180"),s.closest(".card").children(".card-header").nextAll().slideToggle(150)})),a(".card [data-action=remove]").on("click",(function(e){e.preventDefault();var s=a(this);s.hasClass("disabled")||s.closest(".card").slideUp({duration:150,start:complete:function(){s.remove()}})})),a(".card [data-action=fullscreen]").on("click",(function(e){e.preventDefault();var s=a(this),n=s.closest(".card"),o="overflow-hidden",i="collapsed-in-fullscreen",t="data-fullscreen";n.toggleClass("fixed-top h-100 rounded-0"),n.hasClass("fixed-top")?(s.attr(t,"active"),n.removeAttr("style").children(".collapse:not(.show)").addClass("show "+i),a("body").addClass(o),s.siblings("[data-action=move], [data-action=remove], [data-action=collapse]").addClass("d-none")):(s.removeAttr(t),n.children("."+i).removeClass("show"),a("body").removeClass(o),s.siblings("[data-action=move], [data-action=remove], [data-action=collapse]").removeClass("d-none"))}))},initDropdownSubmenu:function(){a(".dropdown-menu").find(".dropdown-submenu").not(".disabled").find(".dropdown-toggle").on("click",(function(e){e.stopPropagation(),e.preventDefault(),a(this).parent().siblings().removeClass("show").find(".show").removeClass("show"),a(this).parent().toggleClass("show").children(".dropdown-menu").toggleClass("show"),a(this).parents(".show").on("hidden.bs.dropdown",()}))},initHeaderElementsToggle:function(){a(".header-elements-toggle").on("click",(function(e){e.preventDefault(),a(this).parents("[class*=header-elements-]").find(".header-elements").toggleClass("d-none")})),a(".footer-elements-toggle").on("click",()},initCore:;document.addEventListener("DOMContentLoaded",(),window.addEventListener("load",()},6700:,);