.video-js *,.video-js:after,.video-js:before {
    box-sizing: inherit;
    font-size: inherit;
    color: inherit;
    line-height: inherit;
    z-index: auto !important; /* z-index has been added by diorama@detik.com on 12 Oct 2022 , requested by mas Arief IT Portal team*/
}

.video-js.vjs-fullscreen,.video-js.vjs-fullscreen .vjs-tech {
    width: 100%!important;
    height: 100%!important
}

.video-js {
    font-size: 11px;
    overflow: hidden
}

.video-js .vjs-control {
    color: inherit
}

.video-js .vjs-menu-button-inline:hover,.video-js.vjs-no-flex .vjs-menu-button-inline {
    width: 8.35em
}

.video-js .vjs-volume-menu-button.vjs-volume-menu-button-horizontal:hover .vjs-menu .vjs-menu-content {
    height: 3em;
    width: 6.35em
}

.video-js .vjs-control:focus:before,.video-js .vjs-control:hover:before {
    text-shadow: 0 0 1em #fff,0 0 1em #fff,0 0 1em #fff
}

.video-js .vjs-spacer,.video-js .vjs-time-control {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-flex: 1 1 auto;
    -moz-box-flex: 1 1 auto;
    -webkit-flex: 1 1 auto;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto
}

.video-js .vjs-time-control {
    -webkit-box-flex: 0 1 auto;
    -moz-box-flex: 0 1 auto;
    -webkit-flex: 0 1 auto;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    width: auto
}

.video-js .vjs-time-control.vjs-time-divider {
    width: 14px;
}

.video-js .vjs-time-control.vjs-time-divider div {
    width: 100%;
    text-align: center;
}

.video-js .vjs-time-control.vjs-current-time {
    margin-left: 1em
}

.video-js .vjs-time-control .vjs-current-time-display,.video-js .vjs-time-control .vjs-duration-display {
    width: 100%
}

.video-js .vjs-time-control .vjs-current-time-display {
    text-align: right
}

.video-js .vjs-time-control .vjs-duration-display {
    text-align: left
}

.video-js .vjs-play-progress:before,.video-js .vjs-progress-control .vjs-play-progress:before,.video-js .vjs-remaining-time,.video-js .vjs-volume-level:after,.video-js .vjs-volume-level:before,.video-js.vjs-live .vjs-time-control.vjs-current-time,.video-js.vjs-live .vjs-time-control.vjs-duration,.video-js.vjs-live .vjs-time-control.vjs-time-divider,.video-js.vjs-no-flex .vjs-time-control.vjs-remaining-time {
    display: none
}

.video-js.vjs-no-flex .vjs-time-control {
    display: table-cell;
    width: 4em
}

.video-js .vjs-progress-control {
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    height: .5em;
    top: -.5em
}

.video-js .vjs-progress-control .vjs-load-progress,.video-js .vjs-progress-control .vjs-play-progress,.video-js .vjs-progress-control .vjs-progress-holder {
    height: 100%
}

.video-js .vjs-progress-control .vjs-progress-holder {
    margin: 0
}

.video-js .vjs-progress-control:hover {
    height: 1.5em;
    top: -1.5em
}

.video-js .vjs-control-bar {
    -webkit-transition: -webkit-transform .1s ease 0s;
    -moz-transition: -moz-transform .1s ease 0s;
    -ms-transition: -ms-transform .1s ease 0s;
    -o-transition: -o-transform .1s ease 0s;
    transition: transform .1s ease 0s
}

.video-js.not-hover.vjs-has-started.vjs-paused.vjs-user-active .vjs-control-bar,.video-js.not-hover.vjs-has-started.vjs-paused.vjs-user-inactive .vjs-control-bar,.video-js.not-hover.vjs-has-started.vjs-playing.vjs-user-active .vjs-control-bar,.video-js.not-hover.vjs-has-started.vjs-playing.vjs-user-inactive .vjs-control-bar,.video-js.vjs-has-started.vjs-playing.vjs-user-inactive .vjs-control-bar {
    visibility: visible;
    opacity: 1;
    -webkit-backface-visibility: hidden;
    -webkit-transform: translateY(3em);
    -moz-transform: translateY(3em);
    -ms-transform: translateY(3em);
    -o-transform: translateY(3em);
    transform: translateY(3em);
    -webkit-transition: -webkit-transform 1s ease 0s;
    -moz-transition: -moz-transform 1s ease 0s;
    -ms-transition: -ms-transform 1s ease 0s;
    -o-transition: -o-transform 1s ease 0s;
    transition: transform 1s ease 0s
}

.video-js.not-hover.vjs-has-started.vjs-paused.vjs-user-active .vjs-progress-control,.video-js.not-hover.vjs-has-started.vjs-paused.vjs-user-inactive .vjs-progress-control,.video-js.not-hover.vjs-has-started.vjs-playing.vjs-user-active .vjs-progress-control,.video-js.not-hover.vjs-has-started.vjs-playing.vjs-user-inactive .vjs-progress-control,.video-js.vjs-has-started.vjs-playing.vjs-user-inactive .vjs-progress-control {
    height: .25em;
    top: -.25em;
    pointer-events: none;
    -webkit-transition: height 1s,top 1s;
    -moz-transition: height 1s,top 1s;
    -ms-transition: height 1s,top 1s;
    -o-transition: height 1s,top 1s;
    transition: height 1s,top 1s
}

.video-js.not-hover.vjs-has-started.vjs-paused.vjs-user-active.vjs-fullscreen .vjs-progress-control,.video-js.not-hover.vjs-has-started.vjs-paused.vjs-user-inactive.vjs-fullscreen .vjs-progress-control,.video-js.not-hover.vjs-has-started.vjs-playing.vjs-user-active.vjs-fullscreen .vjs-progress-control,.video-js.not-hover.vjs-has-started.vjs-playing.vjs-user-inactive.vjs-fullscreen .vjs-progress-control,.video-js.vjs-has-started.vjs-playing.vjs-user-inactive.vjs-fullscreen .vjs-progress-control {
    opacity: 0;
    -webkit-transition: opacity 1s ease 1s;
    -moz-transition: opacity 1s ease 1s;
    -ms-transition: opacity 1s ease 1s;
    -o-transition: opacity 1s ease 1s;
    transition: opacity 1s ease 1s
}

.video-js.vjs-live .vjs-live-control {
    margin-left: 1em
}

.video-js .vjs-big-play-button {
    top: 50%;
    left: 50%;
    margin-left: -1em;
    margin-top: -1em;
    width: 2em;
    height: 2em;
    line-height: 2em;
    border: none;
    border-radius: 50%;
    font-size: 3.5em;
    background-color: rgba(0,0,0,.45);
    color: #fff;
    -webkit-transition: border-color .4s,outline .4s,background-color .4s;
    -moz-transition: border-color .4s,outline .4s,background-color .4s;
    -ms-transition: border-color .4s,outline .4s,background-color .4s;
    -o-transition: border-color .4s,outline .4s,background-color .4s;
    transition: border-color .4s,outline .4s,background-color .4s
}

.video-js .vjs-menu-button-popup .vjs-menu {
    left: 1em
}

.video-js .vjs-menu-button-popup .vjs-menu .vjs-menu-content {
    background-color: transparent;
    width: 6em;
    left: -1em;
    padding-bottom: .5em
}

.video-js .vjs-menu-button-popup .vjs-menu .vjs-menu-item,.video-js .vjs-menu-button-popup .vjs-menu .vjs-menu-title {
    background-color:rgba(0,0,0,.7);
    font-size: 12px;
}

.video-js .vjs-menu-button-popup .vjs-menu .vjs-menu-item.vjs-selected {
    background-color: rgba(207,204,203,.85);
    color:#000000;
}

.vjs-tip {
  font-size: 11px;
  bottom: 10px;
}

/* added by diorama@detik.com */
.video-js .vjs-time-tooltip {
  top: -0.50em; 
}


.ima-play-pause-div {
  top: 2.0em;
}

.ima-mute-div {
  top: 2.0em;
}

.ima-slider-div {
  top: 2.0em;
}

.ima-fullscreen-div {
  top: 2.0em;
}

.ima-play-pause-div {
  top: 2.0em;
}

/* these lines below has been added by diorama@detik.com on 15 Oct 2022 */

.video-js .vjs-time-tooltip {
    z-index: 1 !important;
}

.vjs-tip {
    z-index: 1 !important;
}

.vjs-overlay-top-left {
    z-index: 1 !important;
}

/* these lines below has been added by diorama@detik.com on 8 Nov 2022 */

.vjs-thumbnail-holder {
    z-index: 1 !important;
}

.vjs-menu {
    z-index: 1 !important;
}

.vjs-modal-dialog {
    z-index: 1 !important;
}

esanan"></div>
                                </span>
                                Pesanan
                            </a>
                        </li>
                        <li class="nav__item menu">
                            <a href="https://event.detik.com/blog" dtr-evt="header" dtr-sec="first navbar" dtr-act="first navbar" onclick="_pt(this)" dtr-idx="3" dtr-ttl="Blog">
                                <span class="icon">
                                    <div class="image-menu image-blog"></div>
                                </span>
                                Blog
                            </a>
                        </li>
                        <li class="nav__item menu hide-md">
                                                            <a href="#" data-toggle="modal" data-target="#modal-login">
                                                            <span class="icon">
                                    <div class="image-menu image-akun"></div>
                                </span>
                                Akun
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div class="main-header__right column-auto column-lg-3">
                <span class="icon search-btn mgl-8" data-toggle="modal" data-target="#modal-search" dtr-evt="header" dtr-sec="search" dtr-act="search" onclick="_pt(this)">
                    <img class="lazy" data-src="https://cdn.detik.net.id/event-v2/img/icons/icon-search.png">
                </span>

                <div class="desktop-akun show-md">

                                    <a href="https://connect.detik.com/accounts/register?clientId=10044&redirectUrl=https%3A%2F%2Fevent.detik.com%2F" class="btn btn--sm btn--blue-base active">Daftar MPC</a>
                    <a href="https://connect.detik.com/oauth/authorize?clientId=10044&redirectUrl=https%3A%2F%2Fevent.detik.com%2F" class="btn btn--sm btn--orange-base btn--outline mgl-8">Masuk</a>
                                </div>
            </div>
        </div>
    </div>
</header>

<script>
    $.fn.dropdown = function( options ) {

var settings = $.extend({
    // do setting
    hover: false,
    overlay: false
}, options);
var dropdown = $(this);

function dropdown_hover(){
    dropdown.parent(".dropdown-wrap").hover(
        function() {
            $(this).addClass("dropdown-aktif");
            if(settings.overlay == true) {
                dropdown.parent(".dropdown-wrap").parent().append("<div class='dropdown-overlay fade'></div>");
                setTimeout(function() {
                    $(".dropdown-overlay").addClass("show");
                },100);
            }
        },
        function() {
            $(this).removeClass("dropdown-aktif");  
            if(settings.overlay == true) {
                dropdown.parent(".dropdown-wrap").siblings(".dropdown-overlay").removeClass("show");
                setTimeout(function() {
                    dropdown.parent(".dropdown-wrap").siblings(".dropdown-overlay").remove();
                },100);
            }
    });
    
}
function dropdown_click(){
    dropdown.click(function(e){
        e.preventDefault();
        getDataNotification();
        if (!($(this).parents(".dropdown-wrap").hasClass("dropdown-aktif"))) {
            $(".dropdown-wrap").removeClass("dropdown-aktif");
            // if(settings.overlay == true) {
            //     dropdown.parent(".dropdown-wrap").parent().append("<div class='dropdown-overlay fade'></div>");
            //     setTimeout(function() {
            //         dropdown.parent(".dropdown-wrap").siblings(".dropdown-overlay").addClass("show");
            //     },100);
            // }
            // $(".main-content").addClass("opacity-30");
        } else {
            // if(settings.overlay == true) {
            //     dropdown.parent(".dropdown-wrap").siblings(".dropdown-overlay").removeClass("show");
            //     setTimeout(function() {
            //         dropdown.parent(".dropdown-wrap").siblings(".dropdown-overlay").remove();
            //     },100);
            // }
            // $(".main-content").removeClass("opacity-30");
        }
        $(this).parent().toggleClass("dropdown-aktif");
    });
}

if(settings.hover == true) {
    dropdown_hover();
} else {
    dropdown_click();
}

return $(document).bind("mouseup", function(e)
{
    e.preventDefault();
    var container_drop = dropdown.parent(".dropdown-wrap");

    if (!container_drop.is(e.target) // if the target of the click isn't the container...
        && container_drop.has(e.target).length === 0) // ... nor a descendant of the container
    {
        container_drop.removeClass("dropdown-aktif");
        // if(settings.overlay == true) {
        //     dropdown.parent(".dropdown-wrap").siblings(".dropdown-overlay").removeClass("show");
        //     setTimeout(function() {
        //         dropdown.parent(".dropdown-wrap").siblings(".dropdown-overlay").remove();
        //     },100);
        // }
        // $(".main-content").removeClass("opacity-30");
    } 

});
}
function getDataNotification()
        {
            var type = 'transaksi';
            var out = '';
            $.ajax({
                    url: 'https://event.detik.com/notifikasi/getDataNotif/'+type,
                    dataType: 'json',
                    success: function(json) {
                        var data = json.message;

                        var length = json.message.length;

                        for(var i = 0; i < length; i++)
                        {
                            if(json.message[i].is_read == false){
                                var className = 'notif-dropdown__unread';
                            }else{
                                var className = '';
                            }
                            
                            out += '\
                            <div class="list-content list-content--bordered"> \
                                <article class="list-content__item '+className+'"> \
                                    <div class="media media--left media--image-radius"> \
                                        <div style="margin-top: 10px" class="media__image img-xs"> \
                                            <div class="ratiobox"> \
                                                <a href="'+json.message[i].link+'" class="media__link" onClick="NotificationRead(this);" data-id="'+json.message[i].id+'" data-type="update" dtr-evt="bell notification" dtr-sec="notification card" dtr-act="notification card" onclick="_pt(this)" dtr-ttl="'+json.message[i].title+'"> \
                                                    <img src="'+json.message[i].image_thumbnail+'" alt="" title=""> \
                                                </a> \
                                            </div> \
                                        </div> \
                                        <div class="media__text"> \
                                            <div class="media__date mgb-4">'+json.message[i].created_at+'</div> \
                                            <h3 style="font-size: 13px" class="media__title"> \
                                                <a href="'+json.message[i].link+'" onClick="NotificationRead(this);" class="media__link" data-id="'+json.message[i].id+'" data-type="update" dtr-evt="bell notification" dtr-sec="notification card" dtr-act="notification card" onclick="_pt(this)" dtr-ttl="'+json.message[i].title+'">'+json.message[i].title+'</a> \
                                            </h3> \
                                        </div> \
                                    </div> \
                                </article> \
                            </div>';
                        }

                        document.getElementById('n-transaksi').innerHTML = out;

                        
                    }
            });
        }
</script>

        <!-- E : NAVBAR -->
        
        <!-- SEARCH -->
        <div class="modal modal--full modal-search fade" id="modal-search" tabindex="-1" role="dialog" aria-labelledby="modal-searchLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <span class="icon close-modal" id="close-search" data-dismiss="modal">
                <img src="https://cdn.detik.net.id/event-v2/img/icons/i-close-white.png" alt="alt" title="title">
            </span>
            <div class="modal-body">

                <div class="modal-body__content main-content main-content--single">
                    <div class="container">
                        <div class="grid-row">
                            <div class="column column-content search-box">
                                <form action="#">
                                    <div class="font-md font-semibold">Kata Pencarian</div>
                                    <input type="text" class="search-box__input" name="search" placeholder="Masukkan kata kunci">
                                </form>
                                <div class="search-box__content">                                    
                                                                    </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</div>

        <script type="text/javascript">
            $("#modal-search").on('show.bs.modal', function () {
                setTimeout(function (){
                    $(".search-box__input").focus();
                }, 500);
            });
        </script>
		        
        <!-- H1 TAG for SEO -->
<h1 class="head-1">Temukan Event Menarik - DetikEvent</h1>
<!-- H1 TAG for SEO -->
<div class="main-content page">
    <div class="container">
        <div class="grid-row">
            <div class="column-md-4 column-lg-3">

                <!-- KATEGORI -->
                <div class="sticky">
    <div class="sidebar dropdown-wrap">
        <div class="sidebar__title dropdown-mobile desktop-hide flex-between hide-md">
            Kategori            
            <span class="icon">
                <img class="lazy" data-src="https://cdn.detik.net.id/event-v2/img/icons/icon-category.png">
            </span>
        </div>
        <div class="sidebar__title show-md">Kategori</div>
        <nav class="sidebar__nav dropdown-menu nav-category">
            <ul class="nav nav--column">
                <li class="nav__item">
                    <a href="https://event.detik.com/kategori/semua" dtr-evt="event card" dtr-sec="event kategori" dtr-act="event kategori" onclick="_pt(this)" dtr-ttl="Semua">
                        <img data-src="https://cdn.detik.net.id/event-v2/img/icons/category/png/all.png" class="icon lazy">
                    
                        Semua
                    </a>
                </li>
                
                                    <li class="nav__item">
                        <a href="https://event.detik.com/kategori/konser-dan-pertunjukan" dtr-evt="event card" dtr-sec="event kategori" dtr-act="event kategori" onclick="_pt(this)" dtr-ttl="Konser & Pertunjukan">
                            <img data-src="https://akcdn.detik.net.id/detikevent/1674617614_event_category.png?w=18&q=100" class="icon lazy">
                            Konser & Pertunjukan                        </a>
                    </li>
                                    <li class="nav__item">
                        <a href="https://event.detik.com/kategori/seminar-dan-talkshow" dtr-evt="event card" dtr-sec="event kategori" dtr-act="event kategori" onclick="_pt(this)" dtr-ttl="Seminar & Talkshow">
                            <img data-src="https://akcdn.detik.net.id/detikevent/1674617633_event_category.png?w=18&q=100" class="icon lazy">
                            Seminar & Talkshow                        </a>
                    </li>
                                    <li class="nav__item">
                        <a href="https://event.detik.com/kategori/workshop" dtr-evt="event card" dtr-sec="event kategori" dtr-act="event kategori" onclick="_pt(this)" dtr-ttl="Workshop">
                            <img data-src="https://akcdn.detik.net.id/detikevent/1674617648_event_category.png?w=18&q=100" class="icon lazy">
                            Workshop                        </a>
                    </li>
                                    <li class="nav__item">
                        <a href="https://event.detik.com/kategori/kontes" dtr-evt="event card" dtr-sec="event kategori" dtr-act="event kategori" onclick="_pt(this)" dtr-ttl="Kontes">
                            <img data-src="https://akcdn.detik.net.id/detikevent/1674617667_event_category.png?w=18&q=100" class="icon lazy">
                            Kontes                        </a>
                    </li>
                                    <li class="nav__item">
                        <a href="https://event.detik.com/kategori/lain-lain" dtr-evt="event card" dtr-sec="event kategori" dtr-act="event kategori" onclick="_pt(this)" dtr-ttl="Lain-lain">
                            <img data-src="https://akcdn.detik.net.id/detikevent/1674617731_event_category.png?w=18&q=100" class="icon lazy">
                            Lain-lain                        </a>
                    </li>
                                    <li class="nav__item">
                        <a href="https://event.detik.com/kategori/kuis" dtr-evt="event card" dtr-sec="event kategori" dtr-act="event kategori" onclick="_pt(this)" dtr-ttl="Kuis">
                            <img data-src="https://akcdn.detik.net.id/detikevent/1674617682_event_category.png?w=18&q=100" class="icon lazy">
                            Kuis                        </a>
                    </li>
                                    <li class="nav__item">
                        <a href="https://event.detik.com/kategori/festival" dtr-evt="event card" dtr-sec="event kategori" dtr-act="event kategori" onclick="_pt(this)" dtr-ttl="Festival">
                            <img data-src="https://akcdn.detik.net.id/detikevent/1674617699_event_category.png?w=18&q=100" class="icon lazy">
                            Festival                        </a>
                    </li>
                            </ul>
        </nav>
    </div>
</div>

                
            </div>
            <div class="column-md-8 column-lg">
                <div class="grid-row column-content">
                    <div class="column-lg-4">

                        <!-- TOPIK -->
                        
<div class="sidebar">
    <div class="sidebar__title mobile-hide">Highlights</div>
    <nav class="sidebar__nav-pill">
        <button id="leftscb" class="btn btn--blue-base icon">
            <img class="lazy" data-src="https://cdn.detik.net.id/event-v2/img/icons/icon-left.png">
        </button>
        <button id="rightscb" class="btn btn--blue-base icon">
            <img class="lazy" data-src="https://cdn.detik.net.id/event-v2/img/icons/icon-right.png">
        </button>
        <ul class="nav nav-tag" id="topik-pilihan">
                            <li class="nav__item">
                    <a href="https://event.detik.com/tag/toska-kemas-ui-2024" dtr-evt="event card" dtr-sec="topik pilihan" dtr-act="topik pilihan" onclick="_pt(this)" dtr-idx="0" dtr-ttl="Toska Kemas UI 2024">#Toska Kemas UI 2024</a>
                </li>
                            <li class="nav__item">
                    <a href="https://event.detik.com/tag/pelita-jaya-basketball-club" dtr-evt="event card" dtr-sec="topik pilihan" dtr-act="topik pilihan" onclick="_pt(this)" dtr-idx="1" dtr-ttl="Pelita Jaya Basketball Club">#Pelita Jaya Basketball Club</a>
                </li>
                            <li class="nav__item">
                    <a href="https://event.detik.com/tag/demi-indonesia" dtr-evt="event card" dtr-sec="topik pilihan" dtr-act="topik pilihan" onclick="_pt(this)" dtr-idx="2" dtr-ttl="Demi Indonesia">#Demi Indonesia</a>
                </li>
                            <li class="nav__item">
                    <a href="https://event.detik.com/tag/sportel-bali-triathlon-2024" dtr-evt="event card" dtr-sec="topik pilihan" dtr-act="topik pilihan" onclick="_pt(this)" dtr-idx="3" dtr-ttl="SPORTEL BALI TRIATHLON 2024">#SPORTEL BALI TRIATHLON 2024</a>
                </li>
                            <li class="nav__item">
                    <a href="https://event.detik.com/tag/sportel-bali-golf-classic-2024" dtr-evt="event card" dtr-sec="topik pilihan" dtr-act="topik pilihan" onclick="_pt(this)" dtr-idx="4" dtr-ttl="SPORTEL BALI GOLF CLASSIC 2024">#SPORTEL BALI GOLF CLASSIC 2024</a>
                </li>
                    </ul>
    </nav>
</div>
                        
                        <div class="sticky mgb-24 show-lg">
                            <hr>
                            <div class="box pd-0">
                                <div class="list-content">
                                        <article class="list-content__item">
        <div class="media media--left media--image-radius">
            <div class="media__image img-sm">
                <div class="ratiobox">
                    <a href="https://event.detik.com/blog/249/30-ide-tema-acara-keren--formal---non-formal-untuk-semua-usia-" class="media__link" dtr-evt="event card" dtr-sec="blog recommendation" dtr-act="blog recommendation" onclick="_pt(this)" dtr-id="249" dtr-ttl="30 Ide Tema Acara Keren: Formal & Non Formal untuk Semua Usia!">
                        <img class="lazy" data-src="https://akcdn.detik.net.id/detikevent/blog_17055571950.jpg?w=598">
                    </a>
                </div>
            </div>
            <div class="media__text">
                <h3 class="media__title">
                    <a href="https://event.detik.com/blog/249/30-ide-tema-acara-keren--formal---non-formal-untuk-semua-usia-" class="media__link" dtr-evt="event card" dtr-sec="blog recommendation" dtr-act="blog recommendation" onclick="_pt(this)" dtr-id="249" dtr-ttl="30 Ide Tema Acara Keren: Formal & Non Formal untuk Semua Usia!">30 Ide Tema Acara Keren: Formal & Non Formal untuk Semua Usia!</a> 
                </h3>
                <div class="media__date mgb-8">Kamis, 18 Jan 2024 12:53 WIB</div>
            </div>
        </div>
    </article>
    <article class="list-content__item">
        <div class="media media--left media--image-radius">
            <div class="media__image img-sm">
                <div class="ratiobox">
                    <a href="https://event.detik.com/blog/248/5-contoh-komunikasi-tim-yang-efektif-agar-event-kamu-sukses" class="media__link" dtr-evt="event card" dtr-sec="blog recommendation" dtr-act="blog recommendation" onclick="_pt(this)" dtr-id="248" dtr-ttl="5 Contoh Komunikasi Tim yang Efektif agar Event Kamu Sukses">
                        <img class="lazy" data-src="https://akcdn.detik.net.id/detikevent/blog_17054669320.jpg?w=598">
                    </a>
                </div>
            </div>
            <div class="media__text">
                <h3 class="media__title">
                    <a href="https://event.detik.com/blog/248/5-contoh-komunikasi-tim-yang-efektif-agar-event-kamu-sukses" class="media__link" dtr-evt="event card" dtr-sec="blog recommendation" dtr-act="blog recommendation" onclick="_pt(this)" dtr-id="248" dtr-ttl="5 Contoh Komunikasi Tim yang Efektif agar Event Kamu Sukses">5 Contoh Komunikasi Tim yang Efektif agar Event Kamu Sukses</a> 
                </h3>
                <div class="media__date mgb-8">Rabu, 17 Jan 2024 11:48 WIB</div>
            </div>
        </div>
    </article>
    <article class="list-content__item">
        <div class="media media--left media--image-radius">
            <div class="media__image img-sm">
                <div class="ratiobox">
                    <a href="https://event.detik.com/blog/247/pelita-jaya-gaet-3-bintang-nba-untuk----balas-dendam----di-ibl-2024--ikuti-pertandingannya-di-sini-" class="media__link" dtr-evt="event card" dtr-sec="blog recommendation" dtr-act="blog recommendation" onclick="_pt(this)" dtr-id="247" dtr-ttl="Pelita Jaya Gaet 3 Bintang NBA untuk ‘Balas Dendam’ di IBL 2024, Ikuti Pertandingannya di sini!">
                        <img class="lazy" data-src="https://akcdn.detik.net.id/detikevent/blog_17053829600.jpg?w=598">
                    </a>
                </div>
            </div>
            <div class="media__text">
                <h3 class="media__title">
                    <a href="https://event.detik.com/blog/247/pelita-jaya-gaet-3-bintang-nba-untuk----balas-dendam----di-ibl-2024--ikuti-pertandingannya-di-sini-" class="media__link" dtr-evt="event card" dtr-sec="blog recommendation" dtr-act="blog recommendation" onclick="_pt(this)" dtr-id="247" dtr-ttl="Pelita Jaya Gaet 3 Bintang NBA untuk ‘Balas Dendam’ di IBL 2024, Ikuti Pertandingannya di sini!">Pelita Jaya Gaet 3 Bintang NBA untuk ‘Balas Dendam’ di IBL 2024, Ikuti Pertandingannya di sini!</a> 
                </h3>
                <div class="media__date mgb-8">Selasa, 16 Jan 2024 12:29 WIB</div>
            </div>
        </div>
    </article>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="column">
                        
                        <div class="list-content mgb-24">
                                                            <article class="list-content__item">
    <div class="media media--shadow media--cover block-link">
        
        
                        <div class="media__label media__label--closed">
            Closed        </div>
                <div class="media__icon media__icon--top-right">
            <div class="icon share" 
                data-url="https://event.detik.com/428/pelita-jaya-basketball-x-tangerang-hawks-basketball"
                data-description="Pemain terbaik Indonesia dan tiga ex-NBA bermain dalam satu kostum Pelita Jaya Bakrie Jakarta, rasakan pengalaman pertandingan spektakuler dan mendunia hanya disini!"
                data-title="Pelita Jaya Basketball X Tangerang Hawks Basketball"
                data-image="https://akcdn.detik.net.id/detikevent/event_17053114990.jpg?w=900&q=90"
                data-share-message="Tempat terbaik untuk menonton pertandingan basket di Indonesia."
                >
               <img class="lazy" data-src="https://cdn.detik.net.id/event-v2/img/icons/icon-share.png">
            </div>
            <div class="icon " data-id="428" data-toggle="modal" data-target="#modal-login" dtr-evt="event card" dtr-sec="bookmark" dtr-act="bookmark" onclick="_pt(this)" dtr-id="428" dtr-ttl="Pelita Jaya Basketball X Tangerang Hawks Basketball">
                                    <img class="lazy" data-src="https://cdn.detik.net.id/event-v2/img/icons/icon-save.png">
                            </div>
        </div>
        <div class="media__image">
            <div class="ratiobox ratiobox--16-9">
                <a href="https://event.detik.com/428/pelita-jaya-basketball-x-tangerang-hawks-basketball" class="media__link" dtr-evt="event card" dtr-sec="event detail" dtr-act="event detail" onclick="_pt(this)" dtr-id="428" dtr-ttl="Pelita Jaya Basketball X Tangerang Hawks Basketball">
                    <img class="lazy" data-src="https://akcdn.detik.net.id/detikevent/event_17053114990.jpg?w=900&q=90" title="">
                </a>
            </div>
        </div>
        <div class="media__text">
            <div class="grid-row">
                <div class="column pos-static">
                    <h3 class="media__title px-24 flex-auto">
                        <a href="https://event.detik.com/428/pelita-jaya-basketball-x-tangerang-hawks-basketball" class="media__link" dtr-evt="event card" dtr-sec="event detail" dtr-act="event detail" onclick="_pt(this)" dtr-id="428" dtr-ttl="Pelita Jaya Basketball X Tangerang Hawks Basketball">Pelita Jaya Basketball X Tangerang Hawks Basketball</a>
                    </h3>
                                            <div class="media__date">19 Januari 2024</div>
                                                                <div class="mgt-4 display-flex">
                            <span class="icon align-self-start mgr-8 mgt-4">
                                <img class="lazy" data-src="https://cdn.detik.net.id/event-v2/img/icons/i_pin.webp" width="18">
                            </span>
                            <div class="flex-1">
                                Tennis Indoor Stadium Senayan, Jalan Pintu Satu Senayan, RT.1/RW.3, Gelora, Central Jakarta City, Jakarta, Indonesia                            </div>
                        </div>
                                    </div>
                                <div class="column-auto font-regular">
                    Mulai dari
                    <div class="color-blue-base font-semibold mgt-4">
                                                    Rp 120.000                                            </div>
                </div>
                            </div>
        </div>
    </div>
</article>
                                                            <article class="list-content__item">
    <div class="media media--shadow media--cover block-link">
        
        
                        <div class="media__icon media__icon--top-right">
            <div class="icon share" 
                data-url="https://event.detik.com/429/pelita-jaya-basketball-x-satria-muda-pertamina-jakarta"
                data-description="Pemain terbaik Indonesia dan tiga ex-NBA bermain dalam satu kostum Pelita Jaya Bakrie Jakarta, rasakan pengalaman pertandingan spektakuler dan mendunia hanya disini!"
                data-title="Pelita Jaya Basketball X Satria Muda Pertamina Jakarta"
                data-image="https://akcdn.detik.net.id/detikevent/event_17053122380.jpg?w=900&q=90"
                data-share-message="Tempat terbaik untuk menonton pertandingan basket di Indonesia."
                >
               <img class="lazy" data-src="https://cdn.detik.net.id/event-v2/img/icons/icon-share.png">
            </div>
            <div class="icon " data-id="429" data-toggle="modal" data-target="#modal-login" dtr-evt="event card" dtr-sec="bookmark" dtr-act="bookmark" onclick="_pt(this)" dtr-id="429" dtr-ttl="Pelita Jaya Basketball X Satria Muda Pertamina Jakarta">
                                    <img class="lazy" data-src="https://cdn.detik.net.id/event-v2/img/icons/icon-save.png">
                            </div>
        </div>
        <div class="media__image">
            <div class="ratiobox ratiobox--16-9">
                <a href="https://event.detik.com/429/pelita-jaya-basketball-x-satria-muda-pertamina-jakarta" class="media__link" dtr-evt="event card" dtr-sec="event detail" dtr-act="event detail" onclick="_pt(this)" dtr-id="429" dtr-ttl="Pelita Jaya Basketball X Satria Muda Pertamina Jakarta">
                    <img class="lazy" data-src="https://akcdn.detik.net.id/detikevent/event_17053122380.jpg?w=900&q=90" title="">
                </a>
            </div>
        </div>
        <div class="media__text">
            <div class="grid-row">
                <div class="column pos-static">
                    <h3 class="media__title px-24 flex-auto">
                        <a href="https://event.detik.com/429/pelita-jaya-basketball-x-satria-muda-pertamina-jakarta" class="media__link" dtr-evt="event card" dtr-sec="event detail" dtr-act="event detail" onclick="_pt(this)" dtr-id="429" dtr-ttl="Pelita Jaya Basketball X Satria Muda Pertamina Jakarta">Pelita Jaya Basketball X Satria Muda Pertamina Jakarta</a>
                    </h3>
                                            <div class="media__date">20 Januari 2024</div>
                                                                <div class="mgt-4 display-flex">
                            <span class="icon align-self-start mgr-8 mgt-4">
                                <img class="lazy" data-src="https://cdn.detik.net.id/event-v2/img/icons/i_pin.webp" width="18">
                            </span>
                            <div class="flex-1">
                                Tennis Indoor Stadium Senayan, Jalan Pintu Satu Senayan, RT.1/RW.3, Gelora, Central Jakarta City, Jakarta, Indonesia                            </div>
                        </div>
                                    </div>
                                <div class="column-auto font-regular">
                    Mulai dari
                    <div class="color-blue-base font-semibold mgt-4">
                                                    Rp 180.000                                            </div>
                </div>
                            </div>
        </div>
    </div>
</article>
                                                            <article class="list-content__item">
    <div class="media media--shadow media--cover block-link">
        
        
                        <div class="media__icon media__icon--top-right">
            <div class="icon share" 
                data-url="https://event.detik.com/425/toska-kemas-ui-2024"
                data-description="Toska Kemas UI merupakan acara tahunan yang diselenggarakan oleh paguyuban mahasiswa Universitas Indonesia asal Sumatera Selatan (KEMAS UI). Acara ini diselenggarakan sebagai sarana edukasi terkait pentingnya pendidikan jenjang pasca sekolah."
                data-title="Toska Kemas UI 2024"
                data-image="https://akcdn.detik.net.id/detikevent/event_17041751220.png?w=900&q=90"
                data-share-message="Toska Kemas UI merupakan acara tahunan yang diselenggarakan oleh paguyuban mahasiswa Universitas Indonesia asal Sumatera Selatan (KEMAS UI). Acara ini diselenggarakan sebagai sarana edukasi terkait pentingnya pendidikan jenjang pasca sekolah."
                >
               <img class="lazy" data-src="https://cdn.detik.net.id/event-v2/img/icons/icon-share.png">
            </div>
            <div class="icon " data-id="425" data-toggle="modal" data-target="#modal-login" dtr-evt="event card" dtr-sec="bookmark" dtr-act="bookmark" onclick="_pt(this)" dtr-id="425" dtr-ttl="Toska Kemas UI 2024">
                                    <img class="lazy" data-src="https://cdn.detik.net.id/event-v2/img/icons/icon-save.png">
                            </div>
        </div>
        <div class="media__image">
            <div class="ratiobox ratiobox--16-9">
                <a href="https://event.detik.com/425/toska-kemas-ui-2024" class="media__link" dtr-evt="event card" dtr-sec="event detail" dtr-act="event detail" onclick="_pt(this)" dtr-id="425" dtr-ttl="Toska Kemas UI 2024">
                    <img class="lazy" data-src="https://akcdn.detik.net.id/detikevent/event_17041751220.png?w=900&q=90" title="">
                </a>
            </div>
        </div>
        <div class="media__text">
            <div class="grid-row">
                <div class="column pos-static">
                    <h3 class="media__title px-24 flex-auto">
                        <a href="https://event.detik.com/425/toska-kemas-ui-2024" class="media__link" dtr-evt="event card" dtr-sec="event detail" dtr-act="event detail" onclick="_pt(this)" dtr-id="425" dtr-ttl="Toska Kemas UI 2024">Toska Kemas UI 2024</a>
                    </h3>
                                            <div class="media__date">28 Januari 2024</div>
                                                                <div class="mgt-4 display-flex">
                            <span class="icon align-self-start mgr-8 mgt-4">
                                <img class="lazy" data-src="https://cdn.detik.net.id/event-v2/img/icons/i_pin.webp" width="18">
                            </span>
                            <div class="flex-1">
                                Palembang Sport and Convention Center, Palembang Icon Mall, Jalan POM IX, Lorok Pakjo, Palembang City, South Sumatra, Indonesia                            </div>
                        </div>
                                    </div>
                                <div class="column-auto font-regular">
                    Mulai dari
                    <div class="color-blue-base font-semibold mgt-4">
                                                    Rp 110.000                                            </div>
                </div>
                            </div>
        </div>
    </div>
</article>
                                                            <article class="list-content__item">
    <div class="media media--shadow media--cover block-link">
        
        
                        <div class="media__icon media__icon--top-right">
            <div class="icon share" 
                data-url="https://event.detik.com/423/pekan-olahraga-fandom"
                data-description="Annyeong Calling For All K-Pop Fandom. Sudah siapkah fandom mu jadi Juara & menjadi Fandom terheboh? Ayo Ikuti keseruan Pekan Olahraga Fandom 2024 dengan tema “Supportive and Happiness” kegiatan ini bertujuan membangun solidaritas antar penggemar K-Pop melalui permainan menyenangkan & bermanfaat"
                data-title="Pekan Olahraga Fandom"
                data-image="https://akcdn.detik.net.id/detikevent/event_17026352250.jpg?w=900&q=90"
                data-share-message="Annyeong Calling For All K-Pop Fandom. Sudah siapkah fandom mu jadi Juara & menjadi Fandom terheboh? Ayo Ikuti keseruan Pekan Olahraga Fandom 2024 dengan tema “Supportive and Happiness” kegiatan ini bertujuan membangun solidaritas antar penggemar K-Pop melalui permainan menyenangkan & bermanfaat"
                >
               <img class="lazy" data-src="https://cdn.detik.net.id/event-v2/img/icons/icon-share.png">
            </div>
            <div class="icon " data-id="423" data-toggle="modal" data-target="#modal-login" dtr-evt="event card" dtr-sec="bookmark" dtr-act="bookmark" onclick="_pt(this)" dtr-id="423" dtr-ttl="Pekan Olahraga Fandom">
                                    <img class="lazy" data-src="https://cdn.detik.net.id/event-v2/img/icons/icon-save.png">
                            </div>
        </div>
        <div class="media__image">
            <div class="ratiobox ratiobox--16-9">
                <a href="https://event.detik.com/423/pekan-olahraga-fandom" class="media__link" dtr-evt="event card" dtr-sec="event detail" dtr-act="event detail" onclick="_pt(this)" dtr-id="423" dtr-ttl="Pekan Olahraga Fandom">
                    <img class="lazy" data-src="https://akcdn.detik.net.id/detikevent/event_17026352250.jpg?w=900&q=90" title="">
                </a>
            </div>
        </div>
        <div class="media__text">
            <div class="grid-row">
                <div class="column pos-static">
                    <h3 class="media__title px-24 flex-auto">
                        <a href="https://event.detik.com/423/pekan-olahraga-fandom" class="media__link" dtr-evt="event card" dtr-sec="event detail" dtr-act="event detail" onclick="_pt(this)" dtr-id="423" dtr-ttl="Pekan Olahraga Fandom">Pekan Olahraga Fandom</a>
                    </h3>
                                            <div class="media__date">03 Februari 2024</div>
                                                                <div class="mgt-4 display-flex">
                            <span class="icon align-self-start mgr-8 mgt-4">
                                <img class="lazy" data-src="https://cdn.detik.net.id/event-v2/img/icons/i_pin.webp" width="18">
                            </span>
                            <div class="flex-1">
                                GOR Ciracas, Jalan Raya Jakarta - Bogor, RT.4/RW.8, Ciracas, East Jakarta City, Jakarta, Indonesia                            </div>
                        </div>
                                    </div>
                                <div class="column-auto font-regular">
                    Mulai dari
                    <div class="color-blue-base font-semibold mgt-4">
                                                    Rp 57.500                                            </div>
                </div>
                            </div>
        </div>
    </div>
</article>
                                                            <article class="list-content__item">
    <div class="media media--shadow media--cover block-link">
        
        
                        <div class="media__icon media__icon--top-right">
            <div class="icon share" 
                data-url="https://event.detik.com/372/sportel-bali-golf-classic-2024"
                data-description="Bersiaplah untuk menikmati hari menyenangkan yang tak terlupakan! 
Bergabunglah bersama kami untuk menikmati hari yang indah di turnamen golf bergengsi Sportel Bali Golf Classsic 2024."
                data-title="SPORTEL BALI GOLF CLASSIC 2024"
                data-image="https://akcdn.detik.net.id/detikevent/event_16984642660.jpg?w=900&q=90"
                data-share-message="Saatnya mencoba pengalaman bermain golf yang menyenangkan dalam Golfclassic.sportel-bali.com. Tunjukkan keahlianmu dalam #SportelBaliGolfClassic2024. Daftar sekarang!"
                >
               <img class="lazy" data-src="https://cdn.detik.net.id/event-v2/img/icons/icon-share.png">
            </div>
            <div class="icon " data-id="372" data-toggle="modal" data-target="#modal-login" dtr-evt="event card" dtr-sec="bookmark" dtr-act="bookmark" onclick="_pt(this)" dtr-id="372" dtr-ttl="SPORTEL BALI GOLF CLASSIC 2024">
                                    <img class="lazy" data-src="https://cdn.detik.net.id/event-v2/img/icons/icon-save.png">
                            </div>
        </div>
        <div class="media__image">
            <div class="ratiobox ratiobox--16-9">
                <a href="https://event.detik.com/372/sportel-bali-golf-classic-2024" class="media__link" dtr-evt="event card" dtr-sec="event detail" dtr-act="event detail" onclick="_pt(this)" dtr-id="372" dtr-ttl="SPORTEL BALI GOLF CLASSIC 2024">
                    <img class="lazy" data-src="https://akcdn.detik.net.id/detikevent/event_16984642660.jpg?w=900&q=90" title="">
                </a>
            </div>
        </div>
        <div class="media__text">
            <div class="grid-row">
                <div class="column pos-static">
                    <h3 class="media__title px-24 flex-auto">
                        <a href="https://event.detik.com/372/sportel-bali-golf-classic-2024" class="media__link" dtr-evt="event card" dtr-sec="event detail" dtr-act="event detail" onclick="_pt(this)" dtr-id="372" dtr-ttl="SPORTEL BALI GOLF CLASSIC 2024">SPORTEL BALI GOLF CLASSIC 2024</a>
                    </h3>
                                            <div class="media__date">21 Februari 2024 - 22 Februari 2024</div>
                                                                <div class="mgt-4 display-flex">
                            <span class="icon align-self-start mgr-8 mgt-4">
                                <img class="lazy" data-src="https://cdn.detik.net.id/event-v2/img/icons/i_pin.webp" width="18">
                            </span>
                            <div class="flex-1">
                                New Kuta Golf, Pecatu, Badung Regency, Bali, Indonesia                            </div>
                        </div>
                                    </div>
                                <div class="column-auto font-regular">
                    Mulai dari
                    <div class="color-blue-base font-semibold mgt-4">
                                                    Rp 5.722.000                                            </div>
                </div>
                            </div>
        </div>
    </div>
</article>
                                                            <article class="list-content__item">
    <div class="media media--shadow media--cover block-link">
        
        
                        <div class="media__icon media__icon--top-right">
            <div class="icon share" 
                data-url="https://event.detik.com/371/sportel-bali-triathlon-2024"
                data-description="Acara Berenang, Bersepeda dan Berlari untuk pemula hingga profesional. Mari bersiap untuk pengalaman tak terlupakan di #Sportelbalitriathlon2024!
Berenang di pantai berpasir putih dan sangat bersih, bersepeda dan berlari sambil menikmati indahnya alam dan keunikan budaya Bali."
                data-title="SPORTEL BALI TRIATHLON 2024"
                data-image="https://akcdn.detik.net.id/detikevent/event_16984645610.jpg?w=900&q=90"
                data-share-message="Saatnya mencoba tantangan #SportelBaliTriathlon2024 dengan bergabung di Triathlon.sportel-bali.com Jangan sampai ketinggalan merasakan berenang di pantai Jimbaran yang berputih dan sangat bersih, bersepeda dan berlari sambil menikmati indahnya alam dan keunikan budaya Bali.
Harga Early Bird tersedia. Mari daftar segera!"
                >
               <img class="lazy" data-src="https://cdn.detik.net.id/event-v2/img/icons/icon-share.png">
            </div>
            <div class="icon " data-id="371" data-toggle="modal" data-target="#modal-login" dtr-evt="event card" dtr-sec="bookmark" dtr-act="bookmark" onclick="_pt(this)" dtr-id="371" dtr-ttl="SPORTEL BALI TRIATHLON 2024">
                                    <img class="lazy" data-src="https://cdn.detik.net.id/event-v2/img/icons/icon-save.png">
                            </div>
        </div>
        <div class="media__image">
            <div class="ratiobox ratiobox--16-9">
                <a href="https://event.detik.com/371/sportel-bali-triathlon-2024" class="media__link" dtr-evt="event card" dtr-sec="event detail" dtr-act="event detail" onclick="_pt(this)" dtr-id="371" dtr-ttl="SPORTEL BALI TRIATHLON 2024">
                    <img class="lazy" data-src="https://akcdn.detik.net.id/detikevent/event_16984645610.jpg?w=900&q=90" title="">
                </a>
            </div>
        </div>
        <div class="media__text">
            <div class="grid-row">
                <div class="column pos-static">
                    <h3 class="media__title px-24 flex-auto">
                        <a href="https://event.detik.com/371/sportel-bali-triathlon-2024" class="media__link" dtr-evt="event card" dtr-sec="event detail" dtr-act="event detail" onclick="_pt(this)" dtr-id="371" dtr-ttl="SPORTEL BALI TRIATHLON 2024">SPORTEL BALI TRIATHLON 2024</a>
                    </h3>
                                            <div class="media__date">25 Februari 2024</div>
                                                                <div class="mgt-4 display-flex">
                            <span class="icon align-self-start mgr-8 mgt-4">
                                <img class="lazy" data-src="https://cdn.detik.net.id/event-v2/img/icons/i_pin.webp" width="18">
                            </span>
                            <div class="flex-1">
                                InterContinental Bali Resort, Uluwatu Street, Jimbaran, Badung Regency, Bali, Indonesia                            </div>
                        </div>
                                    </div>
                                <div class="column-auto font-regular">
                    Mulai dari
                    <div class="color-blue-base font-semibold mgt-4">
                                                    Rp 1.492.000                                            </div>
                </div>
                            </div>
        </div>
    </div>
</article>
                                                            <article class="list-content__item">
    <div class="media media--shadow media--cover block-link">
        
        
                        <div class="media__label media__label--closed">
            Closed        </div>
                <div class="media__icon media__icon--top-right">
            <div class="icon share" 
                data-url="https://event.detik.com/418/tkg-half-marathon"
                data-description="TKG merupakan event tahunan perlombaan lari di Kota Bandar Lampung yang dimulai sejak tahun 2022. Pada tahun ke-3 pelaksanaannya kali ini, ditambahkan kategori Half-Marathon 21KM. Acara ini terbuka untuk seluruh masyarakat kota Bandar Lampung dan luar kota."
                data-title="TKG Half Marathon"
                data-image="https://akcdn.detik.net.id/detikevent/event_17007080400.jpg?w=900&q=90"
                data-share-message="TKG merupakan event tahunan perlombaan lari di Kota Bandar Lampung yang dimulai sejak tahun 2022. Pada tahun ke-3 pelaksanaannya kali ini, ditambahkan kategori Half-Marathon 21KM. Acara ini terbuka untuk seluruh masyarakat kota Bandar Lampung dan luar kota, yuk daftar!"
                >
               <img class="lazy" data-src="https://cdn.detik.net.id/event-v2/img/icons/icon-share.png">
            </div>
            <div class="icon " data-id="418" data-toggle="modal" data-target="#modal-login" dtr-evt="event card" dtr-sec="bookmark" dtr-act="bookmark" onclick="_pt(this)" dtr-id="418" dtr-ttl="TKG Half Marathon">
                                    <img class="lazy" data-src="https://cdn.detik.net.id/event-v2/img/icons/icon-save.png">
                            </div>
        </div>
        <div class="media__image">
            <div class="ratiobox ratiobox--16-9">
                <a href="https://event.detik.com/418/tkg-half-marathon" class="media__link" dtr-evt="event card" dtr-sec="event detail" dtr-act="event detail" onclick="_pt(this)" dtr-id="418" dtr-ttl="TKG Half Marathon">
                    <img class="lazy" data-src="https://akcdn.detik.net.id/detikevent/event_17007080400.jpg?w=900&q=90" title="">
                </a>
            </div>
        </div>
        <div class="media__text">
            <div class="grid-row">
                <div class="column pos-static">
                    <h3 class="media__title px-24 flex-auto">
                        <a href="https://event.detik.com/418/tkg-half-marathon" class="media__link" dtr-evt="event card" dtr-sec="event detail" dtr-act="event detail" onclick="_pt(this)" dtr-id="418" dtr-ttl="TKG Half Marathon">TKG Half Marathon</a>
                    </h3>
                                            <div class="media__date">03 Maret 2024</div>
                                                                <div class="mgt-4 display-flex">
                            <span class="icon align-self-start mgr-8 mgt-4">
                                <img class="lazy" data-src="https://cdn.detik.net.id/event-v2/img/icons/i_pin.webp" width="18">
                            </span>
                            <div class="flex-1">
                                Mall Boemi Kedaton, Jalan Teuku Umar, Labuhan Ratu, Bandar Lampung City, Lampung, Indonesia                            </div>
                        </div>
                                    </div>
                                <div class="column-auto font-regular">
                    Mulai dari
                    <div class="color-blue-base font-semibold mgt-4">
                                                    Rp 250.000                                            </div>
                </div>
                            </div>
        </div>
    </div>
</article>
                                                            <article class="list-content__item">
    <div class="media media--shadow media--cover block-link">
        
        
                        <div class="media__label media__label--closed">
            Closed        </div>
                <div class="media__icon media__icon--top-right">
            <div class="icon share" 
                data-url="https://event.detik.com/427/demi-indonesia-cerdas-memilih-kota-medan"
                data-description="Yuk Ikuti #DemiIndonesia Cerdas Memilih 16 Januari 2024 di Medan!"
                data-title="Demi Indonesia Cerdas Memilih Kota Medan"
                data-image="https://akcdn.detik.net.id/detikevent/event_17052986120.jpg?w=900&q=90"
                data-share-message="Yuk Ikuti #DemiIndonesia Cerdas Memilih 16 Januari di Medan. DemiIndonesia Cerdas Memilih merupakan talkshow kerja sama antara Kementerian Komunikasi dan Informatika (Kominfo) dengan detikcom. Talkshow #DemiIndonesia didesain sebagai ajang berbagi inspirasi dari para tokoh bangsa untuk anak muda Indonesia. Para tokoh yang hadir diharapkan mengajak anak muda untuk bersama-sama berkontribusi untuk Indonesia serta menggaungkan semangat persatuan. Daftar sekarang, GRATIS!"
                >
               <img class="lazy" data-src="https://cdn.detik.net.id/event-v2/img/icons/icon-share.png">
            </div>
            <div class="icon " data-id="427" data-toggle="modal" data-target="#modal-login" dtr-evt="event card" dtr-sec="bookmark" dtr-act="bookmark" onclick="_pt(this)" dtr-id="427" dtr-ttl="Demi Indonesia Cerdas Memilih Kota Medan">
                                    <img class="lazy" data-src="https://cdn.detik.net.id/event-v2/img/icons/icon-save.png">
                            </div>
        </div>
        <div class="media__image">
            <div class="ratiobox ratiobox--16-9">
                <a href="https://event.detik.com/427/demi-indonesia-cerdas-memilih-kota-medan" class="media__link" dtr-evt="event card" dtr-sec="event detail" dtr-act="event detail" onclick="_pt(this)" dtr-id="427" dtr-ttl="Demi Indonesia Cerdas Memilih Kota Medan">
                    <img class="lazy" data-src="https://akcdn.detik.net.id/detikevent/event_17052986120.jpg?w=900&q=90" title="">
                </a>
            </div>
        </div>
        <div class="media__text">
            <div class="grid-row">
                <div class="column pos-static">
                    <h3 class="media__title px-24 flex-auto">
                        <a href="https://event.detik.com/427/demi-indonesia-cerdas-memilih-kota-medan" class="media__link" dtr-evt="event card" dtr-sec="event detail" dtr-act="event detail" onclick="_pt(this)" dtr-id="427" dtr-ttl="Demi Indonesia Cerdas Memilih Kota Medan">Demi Indonesia Cerdas Memilih Kota Medan</a>
                    </h3>
                                            <div class="media__date">16 Januari 2024</div>
                                                                <div class="mgt-4 display-flex">
                            <span class="icon align-self-start mgr-8 mgt-4">
                                <img class="lazy" data-src="https://cdn.detik.net.id/event-v2/img/icons/i_pin.webp" width="18">
                            </span>
                            <div class="flex-1">
                                Hotel Santika Premiere Dyandra Hotel & Convention, Jalan Kapten Maulana Lubis, Petisah Tengah, Medan City, North Sumatra, Indonesia                            </div>
                        </div>
                                    </div>
                                <div class="column-auto font-regular">
                    Mulai dari
                    <div class="color-blue-base font-semibold mgt-4">
                                                    GRATIS
                                            </div>
                </div>
                            </div>
        </div>
    </div>
</article>
                                                            <article class="list-content__item">
    <div class="media media--shadow media--cover block-link">
        
        
                        <div class="media__label media__label--closed">
            Closed        </div>
                <div class="media__icon media__icon--top-right">
            <div class="icon share" 
                data-url="https://event.detik.com/426/demi-indonesia-cerdas-memilih-kota-batam"
                data-description="Yuk Ikuti #DemiIndonesia Cerdas Memilih 12 Januari di Aston Kota Batam!"
                data-title="Demi Indonesia Cerdas Memilih Kota Batam"
                data-image="https://akcdn.detik.net.id/detikevent/event_17050388680.jpg?w=900&q=90"
                data-share-message="Yuk Ikuti #DemiIndonesia Cerdas Memilih 12 Januari di Aston Kota Batam. DemiIndonesia Cerdas Memilih merupakan talkshow kerja sama antara Kementerian Komunikasi dan Informatika (Kominfo) dengan detikcom. Talkshow #DemiIndonesia didesain sebagai ajang berbagi inspirasi dari para tokoh bangsa untuk anak muda Indonesia."
                >
               <img class="lazy" data-src="https://cdn.detik.net.id/event-v2/img/icons/icon-share.png">
            </div>
            <div class="icon " data-id="426" data-toggle="modal" data-target="#modal-login" dtr-evt="event card" dtr-sec="bookmark" dtr-act="bookmark" onclick="_pt(this)" dtr-id="426" dtr-ttl="Demi Indonesia Cerdas Memilih Kota Batam">
                                    <img class="lazy" data-src="https://cdn.detik.net.id/event-v2/img/icons/icon-save.png">
                            </div>
        </div>
        <div class="media__image">
            <div class="ratiobox ratiobox--16-9">
                <a href="https://event.detik.com/426/demi-indonesia-cerdas-memilih-kota-batam" class="media__link" dtr-evt="event card" dtr-sec="event detail" dtr-act="event detail" onclick="_pt(this)" dtr-id="426" dtr-ttl="Demi Indonesia Cerdas Memilih Kota Batam">
                    <img class="lazy" data-src="https://akcdn.detik.net.id/detikevent/event_17050388680.jpg?w=900&q=90" title="">
                </a>
            </div>
        </div>
        <div class="media__text">
            <div class="grid-row">
                <div class="column pos-static">
                    <h3 class="media__title px-24 flex-auto">
                        <a href="https://event.detik.com/426/demi-indonesia-cerdas-memilih-kota-batam" class="media__link" dtr-evt="event card" dtr-sec="event detail" dtr-act="event detail" onclick="_pt(this)" dtr-id="426" dtr-ttl="Demi Indonesia Cerdas Memilih Kota Batam">Demi Indonesia Cerdas Memilih Kota Batam</a>
                    </h3>
                                            <div class="media__date">12 Januari 2024</div>
                                                                <div class="mgt-4 display-flex">
                            <span class="icon align-self-start mgr-8 mgt-4">
                                <img class="lazy" data-src="https://cdn.detik.net.id/event-v2/img/icons/i_pin.webp" width="18">
                            </span>
                            <div class="flex-1">
                                ASTON Batam Hotel & Residences, Jalan Sriwijaya, Kampung Pelita, Batam City, Riau Islands, Indonesia                            </div>
                        </div>
                                    </div>
                                <div class="column-auto font-regular">
                    Mulai dari
                    <div class="color-blue-base font-semibold mgt-4">
                                                    GRATIS
                                            </div>
                </div>
                            </div>
        </div>
    </div>
</article>
                                                            <article class="list-content__item">
    <div class="media media--shadow media--cover block-link">
        
        
                        <div class="media__label media__label--closed">
            Closed        </div>
                <div class="media__icon media__icon--top-right">
            <div class="icon share" 
                data-url="https://event.detik.com/421/demi-indonesia-cerdas-memilih"
                data-description="Hadir untuk membantu para pemilih awam maupun mereka yang pernah mengikuti pemilu sebelumnya, Demi Indonesia Cerdas Memilih mengajak detikers agar lebih bijak dalam bersikap dan mementukan pilihan pada pemilu 2024, yuk daftar sekarang!"
                data-title="Demi Indonesia Cerdas Memilih"
                data-image="https://akcdn.detik.net.id/detikevent/event_17018614530.jpg?w=900&q=90"
                data-share-message="Demi Indonesia Cerdas MemilihHadir untuk membantu para pemilih awam maupun mereka yang pernah mengikuti pemilu sebelumnya, Demi Indonesia Cerdas Memilih mengajak detikers agar lebih bijak dalam bersikap dan mementukan pilihan pada pemilu 2024, yuk daftar sekarang!"
                >
               <img class="lazy" data-src="https://cdn.detik.net.id/event-v2/img/icons/icon-share.png">
            </div>
            <div class="icon " data-id="421" data-toggle="modal" data-target="#modal-login" dtr-evt="event card" dtr-sec="bookmark" dtr-act="bookmark" onclick="_pt(this)" dtr-id="421" dtr-ttl="Demi Indonesia Cerdas Memilih">
                                    <img class="lazy" data-src="https://cdn.detik.net.id/event-v2/img/icons/icon-save.png">
                            </div>
        </div>
        <div class="media__image">
            <div class="ratiobox ratiobox--16-9">
                <a href="https://event.detik.com/421/demi-indonesia-cerdas-memilih" class="media__link" dtr-evt="event card" dtr-sec="event detail" dtr-act="event detail" onclick="_pt(this)" dtr-id="421" dtr-ttl="Demi Indonesia Cerdas Memilih">
                    <img class="lazy" data-src="https://akcdn.detik.net.id/detikevent/event_17018614530.jpg?w=900&q=90" title="">
                </a>
            </div>
        </div>
        <div class="media__text">
            <div class="grid-row">
                <div class="column pos-static">
                    <h3 class="media__title px-24 flex-auto">
                        <a href="https://event.detik.com/421/demi-indonesia-cerdas-memilih" class="media__link" dtr-evt="event card" dtr-sec="event detail" dtr-act="event detail" onclick="_pt(this)" dtr-id="421" dtr-ttl="Demi Indonesia Cerdas Memilih">Demi Indonesia Cerdas Memilih</a>
                    </h3>
                                            <div class="media__date">07 Desember 2023</div>
                                                                <div class="mgt-4 display-flex">
                            <span class="icon align-self-start mgr-8 mgt-4">
                                <img class="lazy" data-src="https://cdn.detik.net.id/event-v2/img/icons/i_pin.webp" width="18">
                            </span>
                            <div class="flex-1">
                                The Kasablanka, RW.14, Menteng Dalam, South Jakarta City, Jakarta, Indonesia                            </div>
                        </div>
                                    </div>
                                <div class="column-auto font-regular">
                    Mulai dari
                    <div class="color-blue-base font-semibold mgt-4">
                                                    GRATIS
                                            </div>
                </div>
                            </div>
        </div>
    </div>
</article>
                                                            <article class="list-content__item">
    <div class="media media--shadow media--cover block-link">
        
        
                        <div class="media__label media__label--closed">
            Closed        </div>
                <div class="media__icon media__icon--top-right">
            <div class="icon share" 
                data-url="https://event.detik.com/420/cooking-and-baking-class"
                data-description="Cooking & Baking Class hadir kembali untuk kamu dengan tema spesial “Kue Spesial Tahun Baru”! Di kelas kali ini, kamu akan belajar bersama ahlinya yaitu Chef Yongki Gunawan. Sabtu,9 Desember 2023 pukul 10.00 WIB di Vertu Harmoni Jakarta."
                data-title="Cooking and Baking Class"
                data-image="https://akcdn.detik.net.id/detikevent/event_17017520380.jpg?w=900&q=90"
                data-share-message="Yuk ikutan Cooking & Baking Class dengan tema spesial “Kue Spesial Tahun Baru”! Di kelas kali ini, kamu akan belajar bersama ahlinya yaitu Chef Yongki Gunawan. Sabtu,9 Desember 2023 pukul 10.00 WIB di Vertu Harmoni Jakarta."
                >
               <img class="lazy" data-src="https://cdn.detik.net.id/event-v2/img/icons/icon-share.png">
            </div>
            <div class="icon " data-id="420" data-toggle="modal" data-target="#modal-login" dtr-evt="event card" dtr-sec="bookmark" dtr-act="bookmark" onclick="_pt(this)" dtr-id="420" dtr-ttl="Cooking and Baking Class">
                                    <img class="lazy" data-src="https://cdn.detik.net.id/event-v2/img/icons/icon-save.png">
                            </div>
        </div>
        <div class="media__image">
            <div class="ratiobox ratiobox--16-9">
                <a href="https://event.detik.com/420/cooking-and-baking-class" class="media__link" dtr-evt="event card" dtr-sec="event detail" dtr-act="event detail" onclick="_pt(this)" dtr-id="420" dtr-ttl="Cooking and Baking Class">
                    <img class="lazy" data-src="https://akcdn.detik.net.id/detikevent/event_17017520380.jpg?w=900&q=90" title="">
                </a>
            </div>
        </div>
        <div class="media__text">
            <div class="grid-row">
                <div class="column pos-static">
                    <h3 class="media__title px-24 flex-auto">
                        <a href="https://event.detik.com/420/cooking-and-baking-class" class="media__link" dtr-evt="event card" dtr-sec="event detail" dtr-act="event detail" onclick="_pt(this)" dtr-id="420" dtr-ttl="Cooking and Baking Class">Cooking and Baking Class</a>
                    </h3>
                                            <div class="media__date">09 Desember 2023</div>
                                                                <div class="mgt-4 display-flex">
                            <span class="icon align-self-start mgr-8 mgt-4">
                                <img class="lazy" data-src="https://cdn.detik.net.id/event-v2/img/icons/i_pin.webp" width="18">
                            </span>
                            <div class="flex-1">
                                Vertu Harmoni Jakarta, Hayam Wuruk Street, Gambir, Central Jakarta City, Jakarta, Indonesia                            </div>
                        </div>
                                    </div>
                                <div class="column-auto font-regular">
                    Mulai dari
                    <div class="color-blue-base font-semibold mgt-4">
                                                    Rp 200.000                                            </div>
                </div>
                            </div>
        </div>
    </div>
</article>
                                                            <article class="list-content__item">
    <div class="media media--shadow media--cover block-link">
        
        
                        <div class="media__label media__label--closed">
            Closed        </div>
                <div class="media__icon media__icon--top-right">
            <div class="icon share" 
                data-url="https://event.detik.com/419/dnakama-challenge"
                data-description="detikcom bagi-bagi 40 tiket GRATIS One Piece Exhibition! Ikuti dan simak rangkaian challengenya di bawah ini."
                data-title="dNakama Challenge"
                data-image="https://akcdn.detik.net.id/detikevent/event_17018417080.jpg?w=900&q=90"
                data-share-message="Kabar gembira untuk kamu yang enggak kebagian tiket One Piece Exhibition Jakarta 2023. Yuk, ikutan dNakama Challenge!"
                >
               <img class="lazy" data-src="https://cdn.detik.net.id/event-v2/img/icons/icon-share.png">
            </div>
            <div class="icon " data-id="419" data-toggle="modal" data-target="#modal-login" dtr-evt="event card" dtr-sec="bookmark" dtr-act="bookmark" onclick="_pt(this)" dtr-id="419" dtr-ttl="dNakama Challenge">
                                    <img class="lazy" data-src="https://cdn.detik.net.id/event-v2/img/icons/icon-save.png">
                            </div>
        </div>
        <div class="media__image">
            <div class="ratiobox ratiobox--16-9">
                <a href="https://event.detik.com/419/dnakama-challenge" class="media__link" dtr-evt="event card" dtr-sec="event detail" dtr-act="event detail" onclick="_pt(this)" dtr-id="419" dtr-ttl="dNakama Challenge">
                    <img class="lazy" data-src="https://akcdn.detik.net.id/detikevent/event_17018417080.jpg?w=900&q=90" title="">
                </a>
            </div>
        </div>
        <div class="media__text">
            <div class="grid-row">
                <div class="column pos-static">
                    <h3 class="media__title px-24 flex-auto">
                        <a href="https://event.detik.com/419/dnakama-challenge" class="media__link" dtr-evt="event card" dtr-sec="event detail" dtr-act="event detail" onclick="_pt(this)" dtr-id="419" dtr-ttl="dNakama Challenge">dNakama Challenge</a>
                    </h3>
                                            <div class="media__date">24 November 2023 - 31 Desember 2023</div>
                                                               
                    <div class="mgt-4 display-flex flex-center">
                        <span class="icon mgr-8">
                            <img class="lazy" data-src="https://cdn.detik.net.id/event-v2/img/icons/icon-online.png">
                        </span>
                        Event Online
                    </div>
                                    </div>
                            </div>
        </div>
    </div>
</article>
                                                            <article class="list-content__item">
    <div class="media media--shadow media--cover block-link">
        
        
                        <div class="media__label media__label--closed">
            Closed        </div>
                <div class="media__icon media__icon--top-right">
            <div class="icon share" 
                data-url="https://event.detik.com/417/umkm-day-2023---membangun-masa-depan-umkm-bersama"
                data-description="Alfamart bersama detikcom mengajak kamu untuk belajar menyusun dan mengembangkan strategi pengembangan bisnis mu lho, jangan lewatkan kesempatannya dan daftarkan dirimu detik ini juga!"
                data-title="UMKM Day 2023 - Membangun Masa Depan UMKM Bersama"
                data-image="https://akcdn.detik.net.id/detikevent/event_17013230690.jpg?w=900&q=90"
                data-share-message="Alfamart bersama detikcom mengajak kamu untuk belajar menyusun dan mengembangkan strategi pengembangan bisnis mu lho, jangan lewatkan kesempatannya dan daftarkan dirimu detik ini juga!"
                >
               <img class="lazy" data-src="https://cdn.detik.net.id/event-v2/img/icons/icon-share.png">
            </div>
            <div class="icon " data-id="417" data-toggle="modal" data-target="#modal-login" dtr-evt="event card" dtr-sec="bookmark" dtr-act="bookmark" onclick="_pt(this)" dtr-id="417" dtr-ttl="UMKM Day 2023 - Membangun Masa Depan UMKM Bersama">
                                    <img class="lazy" data-src="https://cdn.detik.net.id/event-v2/img/icons/icon-save.png">
                            </div>
        </div>
        <div class="media__image">
            <div class="ratiobox ratiobox--16-9">
                <a href="https://event.detik.com/417/umkm-day-2023---membangun-masa-depan-umkm-bersama" class="media__link" dtr-evt="event card" dtr-sec="event detail" dtr-act="event detail" onclick="_pt(this)" dtr-id="417" dtr-ttl="UMKM Day 2023 - Membangun Masa Depan UMKM Bersama">
                    <img class="lazy" data-src="https://akcdn.detik.net.id/detikevent/event_17013230690.jpg?w=900&q=90" title="">
                </a>
            </div>
        </div>
        <div class="media__text">
            <div class="grid-row">
                <div class="column pos-static">
                    <h3 class="media__title px-24 flex-auto">
                        <a href="https://event.detik.com/417/umkm-day-2023---membangun-masa-depan-umkm-bersama" class="media__link" dtr-evt="event card" dtr-sec="event detail" dtr-act="event detail" onclick="_pt(this)" dtr-id="417" dtr-ttl="UMKM Day 2023 - Membangun Masa Depan UMKM Bersama">UMKM Day 2023 - Membangun Masa Depan UMKM Bersama</a>
                    </h3>
                                            <div class="media__date">04 Desember 2023</div>
                                                                <div class="mgt-4 display-flex">
                            <span class="icon align-self-start mgr-8 mgt-4">
                                <img class="lazy" data-src="https://cdn.detik.net.id/event-v2/img/icons/i_pin.webp" width="18">
                            </span>
                            <div class="flex-1">
                                Graha Sanusi Hardjadinata, Jalan Dipati Ukur, Lebak Gede, Bandung City, West Java, Indonesia                            </div>
                        </div>
                                    </div>
                                <div class="column-auto font-regular">
                    Mulai dari
                    <div class="color-blue-base font-semibold mgt-4">
                                                    GRATIS
                                            </div>
                </div>
                            </div>
        </div>
    </div>
</article>
                                                            <article class="list-content__item">
    <div class="media media--shadow media--cover block-link">
        
        
                        <div class="media__label media__label--closed">
            Closed        </div>
                <div class="media__icon media__icon--top-right">
            <div class="icon share" 
                data-url="https://event.detik.com/416/lazada-fest-concert"
                data-description="Konser Musik Lazada Fest 12.12 akan hadir di Jakarta, Makassar, dan Surabaya bersama musisi internasional, Red Velvet dan SHINee's KEY juga musisi Rizky Febian, Vierratale, Raisa, Tiara Andini, Maliq & D’Essentials, TULUS, Isyana Sarasvati dan Kahitna. Yuk beli tiketnya sebelum kehabisan!"
                data-title="Lazada Fest Concert"
                data-image="https://akcdn.detik.net.id/detikevent/event_17006358480.jpg?w=900&q=90"
                data-share-message="Konser Musik Lazada Fest 12.12 hadir Jakarta, Makassar, dan Surabaya dengan musisi internasional, Red Velvet dan SHINee's KEY  juga musisi Rizky Febian, Vierratale, Raisa, Tiara Andini, Maliq & D’Essentials, TULUS, Isyana Sarasvati dan Kahitna di tanggal 12-13 Desember 2023 Yuk beli tiketnya!"
                >
               <img class="lazy" data-src="https://cdn.detik.net.id/event-v2/img/icons/icon-share.png">
            </div>
            <div class="icon " data-id="416" data-toggle="modal" data-target="#modal-login" dtr-evt="event card" dtr-sec="bookmark" dtr-act="bookmark" onclick="_pt(this)" dtr-id="416" dtr-ttl="Lazada Fest Concert">
                                    <img class="lazy" data-src="https://cdn.detik.net.id/event-v2/img/icons/icon-save.png">
                            </div>
        </div>
        <div class="media__image">
            <div class="ratiobox ratiobox--16-9">
                <a href="https://event.detik.com/416/lazada-fest-concert" class="media__link" dtr-evt="event card" dtr-sec="event detail" dtr-act="event detail" onclick="_pt(this)" dtr-id="416" dtr-ttl="Lazada Fest Concert">
                    <img class="lazy" data-src="https://akcdn.detik.net.id/detikevent/event_17006358480.jpg?w=900&q=90" title="">
                </a>
            </div>
        </div>
        <div class="media__text">
            <div class="grid-row">
                <div class="column pos-static">
                    <h3 class="media__title px-24 flex-auto">
                        <a href="https://event.detik.com/416/lazada-fest-concert" class="media__link" dtr-evt="event card" dtr-sec="event detail" dtr-act="event detail" onclick="_pt(this)" dtr-id="416" dtr-ttl="Lazada Fest Concert">Lazada Fest Concert</a>
                    </h3>
                                            <div class="media__date">12 Desember 2023 - 13 Desember 2023</div>
                                                                <div class="mgt-4 display-flex">
                            <span class="icon align-self-start mgr-8 mgt-4">
                                <img class="lazy" data-src="https://cdn.detik.net.id/event-v2/img/icons/i_pin.webp" width="18">
                            </span>
                            <div class="flex-1">
                                Offline                            </div>
                        </div>
                                    </div>
                                <div class="column-auto font-regular">
                    Mulai dari
                    <div class="color-blue-base font-semibold mgt-4">
                                                    Rp 200.000                                            </div>
                </div>
                            </div>
        </div>
    </div>
</article>
                                                            <article class="list-content__item">
    <div class="media media--shadow media--cover block-link">
        
        
                        <div class="media__label media__label--closed">
            Closed        </div>
                <div class="media__icon media__icon--top-right">
            <div class="icon share" 
                data-url="https://event.detik.com/413/cooking-and-baking-class"
                data-description="Chef Yongki Gunawan hadir kembali di Cooking & Baking Class! Di kesempatan kali ini, Chef Yongki Gunawan akan membagikan lima resep ‘Kue Spesial Natal dan Tahun Baru’. Yuk daftarkan diri kamu dan teman-teman sekarang juga!"
                data-title="Cooking and Baking Class"
                data-image="https://akcdn.detik.net.id/detikevent/event_17000364430.jpg?w=900&q=90"
                data-share-message="Chef Yongki Gunawan hadir kembali di Cooking & Baking Class! Di kesempatan kali ini, Chef Yongki Gunawan akan membagikan lima resep ‘Kue Spesial Natal dan Tahun Baru’. Yuk daftarkan diri kamu dan teman-teman sekarang juga!"
                >
               <img class="lazy" data-src="https://cdn.detik.net.id/event-v2/img/icons/icon-share.png">
            </div>
            <div class="icon " data-id="413" data-toggle="modal" data-target="#modal-login" dtr-evt="event card" dtr-sec="bookmark" dtr-act="bookmark" onclick="_pt(this)" dtr-id="413" dtr-ttl="Cooking and Baking Class">
                                    <img class="lazy" data-src="https://cdn.detik.net.id/event-v2/img/icons/icon-save.png">
                            </div>
        </div>
        <div class="media__image">
            <div class="ratiobox ratiobox--16-9">
                <a href="https://event.detik.com/413/cooking-and-baking-class" class="media__link" dtr-evt="event card" dtr-sec="event detail" dtr-act="event detail" onclick="_pt(this)" dtr-id="413" dtr-ttl="Cooking and Baking Class">
                    <img class="lazy" data-src="https://akcdn.detik.net.id/detikevent/event_17000364430.jpg?w=900&q=90" title="">
                </a>
            </div>
        </div>
        <div class="media__text">
            <div class="grid-row">
                <div class="column pos-static">
                    <h3 class="media__title px-24 flex-auto">
                        <a href="https://event.detik.com/413/cooking-and-baking-class" class="media__link" dtr-evt="event card" dtr-sec="event detail" dtr-act="event detail" onclick="_pt(this)" dtr-id="413" dtr-ttl="Cooking and Baking Class">Cooking and Baking Class</a>
                    </h3>
                                            <div class="media__date">18 November 2023</div>
                                                                <div class="mgt-4 display-flex">
                            <span class="icon align-self-start mgr-8 mgt-4">
                                <img class="lazy" data-src="https://cdn.detik.net.id/event-v2/img/icons/i_pin.webp" width="18">
                            </span>
                            <div class="flex-1">
                                Pesisir Seafood, Daerah Khusus Ibukota, RT.4/RW.1, Srengseng, West Jakarta City, Jakarta, Indonesia                            </div>
                        </div>
                                    </div>
                                <div class="column-auto font-regular">
                    Mulai dari
                    <div class="color-blue-base font-semibold mgt-4">
                                                    Rp 200.000                                            </div>
                </div>
                            </div>
        </div>
    </div>
</article>
                                                    </div>

                                                <div class="mgt-24 mgb-24 text-center">
                            <a href="https://event.detik.com/index/event" class="btn btn--blue-base">See More</a>
                        </div>
                                            </div>
                </div>
            </div>
        </div>

    </div>
</div>
                

        <!-- MODAL LOGIN -->
                    <div class="modal modal--sm modal--1 fade" id="modal-login" tabindex="-1" role="dialog" aria-labelledby="modal-loginLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <span class="icon close-modal" data-dismiss="modal">
                <img class="lazy" data-src="https://cdn.detik.net.id/event-v2/img/icons/i-close-black.png">
            </span>
            <div class="modal-body">
                
                <div class="modal-body__content text-center">
                    <div class="font-md mgb-24">Masuk untuk memesan tiket</div>
                    <div class="mgb-24">
                        <img class="lazy" data-src="https://cdn.detik.net.id/event-v2/img/icons/i-lock.png">
                    </div>
                    
                    <p>
                        Silakan login MPC ID <br>
                        terlebih dahulu
                    </p>
                    
                    <a href="https://connect.detik.com/oauth/authorize?clientId=10044&redirectUrl=https%3A%2F%2Fevent.detik.com%2F" class="btn btn--blue-base gtm_framebardc_masuk mgb-16">Login</a>

                    <p>
                        belum punya akun? <a href="https://connect.detik.com/accounts/register?clientId=10044&redirectUrl=https%3A%2F%2Fevent.detik.com%2F" class="font-semibold color-theme gtm_framebardc_daftar">Daftar</a> 
                    </p> 

                </div>
            
            </div>
        </div>
    </div>
</div>
                
        <!-- MODAL SHARE -->
        <div class="modal modal--sm modal--2 fade" id="modal-share" tabindex="-1" role="dialog" aria-labelledby="modal-shareLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <span class="icon close-modal" data-dismiss="modal">
                <img class="lazy" data-src="https://cdn.detik.net.id/event-v2/img/icons/i-close-black.png">
            </span>
            <div class="modal-body">
                <div class="modal-body__content">
                    <div class="text-center mgb-24">Bagikan event ini</div>
                    <ul class="nav nav--column nav-share font-xs">
                        <li class="nav__item">
                            <a id="whatsapp-icon" target="_blank" dtr-evt="event card" dtr-sec="share socmed" dtr-act="share Whatsapp" onclick="_pt(this)" dtr-ttl="Whatsapp">
                                <span class="icon mgr-12">
                                    <img class="lazy" data-src="https://cdn.detik.net.id/event-v2/img/icons/share-wa.png">
                                </span>
                                Whatsapp
                            </a>
                        </li>
                        <li class="nav__item">
                            <a id="twitter-icon" target="_blank" dtr-evt="event card" dtr-sec="share socmed" dtr-act="share Twitter" onclick="_pt(this)" dtr-ttl="Twitter">
                                <span class="icon mgr-12">
                                    <img class="lazy" data-src="https://cdn.detik.net.id/event-v2/img/icons/share-tw.png">
                                </span>
                                Twitter
                            </a>
                        </li>
                        <li class="nav__item">
                            <a id="facebook-icon" target="_blank" dtr-evt="event card" dtr-sec="share socmed" dtr-act="share Facebook" onclick="_pt(this)" dtr-ttl="Facebook">
                                <span class="icon mgr-12">
                                    <img class="lazy" data-src="https://cdn.detik.net.id/event-v2/img/icons/share-fb.png">
                                </span>
                                Facebook
                            </a>
                        </li>
                        <li class="nav__item">
                            <a class="copy_url hand copy-url" href="#" onclick="_pt(this);" dtr-evt="event card" dtr-sec="share socmed" dtr-act="share Copy Link" dtr-ttl="Copy Link">
                                <span class="icon mgr-12">
                                    <img class="lazy" data-src="https://cdn.detik.net.id/event-v2/img/icons/share-link.png">
                                </span>
                                Copy Link
                                <span class="show-notif">url telah tercopy</span>
                            </a>
                            <div>
                                                            <input type="text" class="hidden" id="url_copy">
                                                        </div>
                        </li>
                    </ul>
                </div>
            
            </div>
        </div>
    </div>
</div>
        
        <!-- S : FOOTER -->
        <footer class="main-footer">
    <div class="main-footer__border"></div>
    <div class="main-footer__body">
        <div class="container">
            <div class="flex-between">
                <div class="main-footer__logo">
                    <a href="https://event.detik.com">
                        <img src="https://cdn.detik.net.id/event-v2/img/logo.png" alt="DetikEvent">
                    </a> 
                </div>
                <ul class="nav">
                    <li class="nav__item">
                        <a href="https://event.detik.com">BERANDA</a>
                    </li>
                    <li class="nav__item">
                                                    <a href="#" data-toggle="modal" data-target="#modal-login">
                        
                            PESANAN
                        </a>
                    </li>
                    <li class="nav__item">
                        <a href="https://event.detik.com/blog">BLOG</a>
                    </li>
                    <li class="nav__item">
                        <a href="https://event.detik.com/faq">FAQ</a>
                    </li>
                    <li class="nav__item">
                        <a href="https://event.detik.com/hubungi-kami">HUBUNGI KAMI</a>
                    </li>
                </ul>
            </div>
            <hr>
            <div class="grid-row main-footer__copy">
                <div class="column-7 column-lg-auto display-flex-wrap font-xxs">
                    <div class="mgr-12">
                        Copyright @ 2024 detikevent. All right reserved.
                    </div>
                    <div>
                        <a href="#">Kotak Pos</a> / 
                        <a href="#">Iklan</a> / 
                        <a href="#">Privacy</a> / 
                        <a href="#">Disclaimer</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>

<div id="scrollup" class="scrollup icon" style="display: none;">
    <img class="lazy" data-src="https://cdn.detik.net.id/event-v2/img/icons/i-arrow-up.png">      
</div>

<div class="w-help icon">
    <a href="https://event.detik.com/hubungi-kami" dtr-evt="contact admin" dtr-sec="contact admin" dtr-act="contact admin" onclick="_pt(this)">
    <img class="lazy" data-src="https://cdn.detik.net.id/event-v2/img/icons/i-message.png"></a>      
</div>

<!-- JS GENERAL PAGES-->
<script type="text/javascript" src="https://cdn.detik.net.id/event-v2/js/tab.js"></script>
<script type="text/javascript" src="https://cdn.detik.net.id/event-v2/js/modalbox.js"></script>

<script type="text/javascript" src="https://cdn.detik.net.id/event-v2/js/zooming.js"></script>
<script type="text/javascript" src="https://cdn.detik.net.id/event-v2/js/accordion.js"></script>
<!-- JS Range Date Picker -->
<script type="text/javascript" src="https://cdn.detik.net.id/event-v2/js/moment.min.js"></script>
<script type="text/javascript" src="https://cdn.detik.net.id/event-v2/js/daterangepicker.js"></script>
<script type="text/javascript" src="https://cdn.detik.net.id/event-v2/js/scripts.js?ver=1.0.9"></script>
<script type="text/javascript">
    $(document).ready(function(){
        
        // INITIALIZE ACCORDION
        $(".accordion").accordion({
            toggle: true
        });
        
    });
    
</script>
        <!-- E : FOOTER -->

        <div class="modal modal--2 fade" id="modal-loading" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="modal-transaksiLabel" aria-hidden="true">
    <div class="modal-dialog">
                
        <div class="w-100 text-center">

            <img class="loader-custom" src="https://cdn.detik.net.id/event-v2/img/icons/loader.gif" alt="">

        </div>
    </div>
</div>
	</body>
</html>

    

<script type="text/javascript">
    $(window).scroll(function(){
        // Show button after 500px
        var showAfter = 500;

        if ( $(this).scrollTop() > showAfter ) { 
            $("#scrollup").fadeIn();
        } else { 
            $("#scrollup").fadeOut();
        }
    });

    //Click event to scroll to top
    $(document).on('click', '#scrollup', function(){
        $("html, body").animate({ scrollTop: 0 }, 800);
        return false;
    });

    // INITIALIZE DROPDOWN
    $(".dropdown-notif").dropdown({
        overlay: true
    });
    
    $(".dropdown-user").dropdown({
        overlay: true
    });

    // bookmark toggle
    $('.icon-toggle').click(function() {
        if(!$(this).hasClass("icon--active")) {
            $(this).addClass("icon--active");
        } else {
            $(this).removeClass("icon--active");
        }
    });
</script>
