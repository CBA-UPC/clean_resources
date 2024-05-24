$(document).ready(function () {
    $(".mobile_nav").click(function() {
        $( ".mobile-menu-wrapper" ).fadeIn("fast");
    });
    $(".close").click(;
    
    
    var offset = $( "#sticky" ).offset();
    checkOffset();

    $(window).scroll(;

    function checkOffset() {
        if ( $(document).scrollTop() > offset.top){
            $('#sticky').addClass('fixed');
            $('header .top').hide();            
        } else {
            $('#sticky').removeClass('fixed');
            $('header .top').show();            
        } 
    }
 });