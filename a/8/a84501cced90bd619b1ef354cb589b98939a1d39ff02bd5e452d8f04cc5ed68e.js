$(document).ready(function(){
    function stickyfoot() {
        $('body').css({'margin-bottom': Math.round($('footer').height() + 20 ) });
    }
    
    function stickyhead() {
        $('body').css({'margin-top': Math.round($('header').height() ) });
    }
    
    if ($('footer').length > 0) {
        stickyfoot();
    }

    if ($('header').length > 0) {
        stickyhead();
    }

    $( window ).resize(;
    
    
    $('#to-top').click(;
    
    var genericCloseBtnHtml = '<button onclick="$(this).closest(\'div.popover\').popover(\'hide\');" type="button" class="close" aria-hidden="true">&times;</button>';
    
    $(".shiny-login-btn").popover({
        // trigger: 'focus',
        toggle: 'popover',
        container: 'body',
        html: true,
        placement: 'bottom',
        content: $(".shiny-login"),
        sanitize: false,
        offset: '-100, 10',
        template: '<div class="shiny-login-popover popover" role="tooltip"><div class="arrow"></div><div class="popover-header"></div><div class="popover-body"></div></div>',
        title: genericCloseBtnHtml
    });

    $(".shiny-search-btn").popover({
        // trigger: 'focus',
        toggle: 'popover',
        container: 'body',
        html: true,
        placement: 'bottom',
        content: $(".shiny-search"),
        sanitize: false,
        offset: '-100, 10',
        template: '<div class="shiny-search-popover popover" role="tooltip"><div class="arrow"></div><div class="popover-header"></div><div class="popover-body"></div></div>',
        title: genericCloseBtnHtml
    });
    
    $(".shiny-help-btn").popover({
        toggle: 'popover',
        container: 'body',
        html: true,
        placement: 'auto',
        content: $(".shiny-help"),
        sanitize: false,
        trigger: 'hover',
        offset: '-100, 10',
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><div class="popover-header"></div><div class="popover-body"></div></div>',
    });
    
    // chiude menu se clicco fuori
    $(document).click(function (event) {
        var clickover = $(event.target);
        var _opened = $("#shiny-menu").hasClass("show");
        if (_opened === true && !clickover.hasClass("navbar-toggler")) {
            $("button.navbar-toggler").click();
        }
    });

    // shiny-collapser
    if ($('.shiny-collapser').length > 0 ) {
        
        $(".shiny-collapser .collapse").on('show.bs.collapse', function(){
            $(this).prev(".card-header").find(".collapse-status").removeClass("fa-plus").addClass("fa-minus");
        }).on('hide.bs.collapse', ;
        
        $('.shiny-collapser .collapser').on('click', function() {
            var group = $(this).data('shiny-collapser-group');
            var collapser = $(this).data('shiny-collapser');
            $('.shiny-collapser[data-shiny-collapser-group="'+group+'"] .collapse').collapse('hide');
            $('#shiny-collapser-'+collapser).collapse('toggle');
            return false;
        });
    }
    
    // gestisco playpause su step video
    if ($('.shiny-video').length > 0) {
        var figure = $(".shiny-video").hover(playVideo, pauseVideo);
        function playVideo(e) {
            $('video', this).get(0).play();
        }
        function pauseVideo(e) {
            $('video', this).get(0).pause();
        }
        
        $('.shiny-video video').on('play', function(){
            var vid = $(this).attr('id');
            $('a.shiny-video-control[data-videoid="'+vid+'"]').find("span").removeClass("fa-play").addClass("fa-pause");
        });
        $('.shiny-video video').on('pause', function(){
            var vid = $(this).attr('id');
            $('a.shiny-video-control[data-videoid="'+vid+'"]').find("span").removeClass("fa-pause").addClass("fa-play");
        });
        $('.shiny-video video').on('ended', function(){
            var vid = $(this).attr('id');
            $('a.shiny-video-control[data-videoid="'+vid+'"]').find("span").removeClass("fa-pause").addClass("fa-play");
        });
        
        $('a.shiny-video-control').click(function(e){
            e.preventDefault();
            var vid = $(this).data('videoid');
            var video = $('#'+vid);
            if (video.get(0).paused) {
                video.get(0).play();
            }
            else {
                video.get(0).pause();
            }
        });
    }
});
