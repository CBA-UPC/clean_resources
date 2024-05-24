!function(c,l,a,r,i,t,y){function sync(){(new Image).src="https://c.clarity.ms/c.gif"}"complete"==document.readyState?sync():window.addEventListener("load",sync);if(a[c].v||a[c].t)return a[c]("event",c,"dup."+i.projectId);a[c].t=!0,(t=l.createElement(r)).async=!0,t.src="https://www.clarity.ms/s/0.7.20/clarity.js",(y=l.getElementsByTagName(r)[0]).parentNode.insertBefore(t,y),a[c]("start",i),a[c].q.unshift(a[c].q.pop()),a[c]("set","C_IS","0")}("clarity",document,window,"script",{"projectId":"fujo8ejwd3","upload":"https://d.clarity.ms/collect","expire":365,"cookies":["_uetmsclkid","_uetvid"],"track":true,"lean":false,"content":true,"dob":1493});      headertop.addClass('ns-apply');
                }
            } else {
                if (headersticky.length) {
                    headersticky.removeClass('sticky-apply');
                    headertop.removeClass('ns-apply');
                }
            }

            if (st > headermobile.outerHeight()) {
                headermobile.addClass('mobile-sticky');
            } else {
                headermobile.removeClass('mobile-sticky');
            }

            if (st > lastScrollTop) {
                headersticky.addClass('scrolldown').removeClass('scrollup');
                headermobile.addClass('scrolldown').removeClass('scrollup');
            } else {
                headersticky.addClass('scrollup').removeClass('scrolldown');
                headermobile.addClass('scrollup').removeClass('scrolldown');
            }
            lastScrollTop = st;
        });
    }

    PENCI.main_menu = function () {
        $('.navigation ul.menu > li.penci-mega-menu').on('mouseenter', function () {
            var $this = $(this),
                $row_active = $this.find('.row-active'),
                $rowsLazy = $row_active.find('.penci-lazy');
            $row_active.fadeIn('200').css('display', 'inline-block');
        });

        $('.navigation .penci-mega-child-categories a').on('mouseenter', function () {
            if (!$(this).hasClass('cat-active')) {
                var $this = $(this),
                    $row_active = $this.data('id'),
                    $parentA = $this.parent().children('a'),
                    $parent = $this.closest('.penci-megamenu'),
                    $rows = $this.closest('.penci-megamenu').find('.penci-mega-latest-posts').children('.penci-mega-row'),
                    $rowsLazy = $rows.find('.penci-lazy');
                $parentA.removeClass('cat-active');
                $this.addClass('cat-active');
                $rows.hide();
                $rows.removeClass('row-active');
                $parent.find('.' + $row_active).fadeIn('300').css('display', 'inline-block').addClass('row-active');
                /*$rowsLazy.Lazy({
                    effect: 'fadeIn',
                    effectTime: 300,
                    scrollDirection: 'both'
                });*/
                //lazySizes.init();
            }
        });
    }

    PENCI.mobile_menu = function () {
        // Add indicator

        // Toggle menu when click show/hide menu
        $('.navigation .button-menu-mobile').on('click', function () {
            $('body').addClass('open-mobile-builder-sidebar-nav');
        });

        $('.pc-builder-element nav.penci-vernav-cparent li.menu-item-has-children > a').on('click', function (e) {
            var $this = $(this);
            e.preventDefault();
            $this.children().children().toggleClass('fa-angle-up');
            $this.next().slideToggle('fast');
        });

        // Close sidebar nav
        $('#close-sidebar-nav').on('click', function () {
            $('body').removeClass('open-sidebar-nav');
        });

        $('.close-mobile-menu-builder').on('click', function () {
            $('body').removeClass('open-mobile-builder-sidebar-nav');
        });
    }
    /* Init functions
	 ---------------------------------------------------------------*/
    $(document).ready(function () {
        PENCI.sticky_header();
        PENCI.mobile_menu();
        PENCI.main_menu();
    });
})(jQuery);	// EOF
