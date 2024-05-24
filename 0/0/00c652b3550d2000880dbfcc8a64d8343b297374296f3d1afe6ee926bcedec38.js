$(function () {

    // click tab
    $('.box-saved-tabs li').click(function () {
        var tabbox = $(this).data('object');
        if (tabbox == 'searches') {
            $('#boxAdverts').addClass('hide');
            $('#boxSearches').removeClass('hide');
            ga('send', 'event', 'ar-saved-searches-top', 'Click', 'full');gtag('event', 'ar-saved-searches-top', {'event_category': 'full', 'event_action': 'Click'});
            if ($(this).hasClass('sel')) {
                document.location.href = '/paieskos/';
            }
        } else if (tabbox == 'stats') {
            $('#boxSearches').addClass('hide');
            $('#boxAdverts').addClass('hide');
        } else {
            /*$('#boxSearches').addClass('hide');
            $('#boxAdverts').removeClass('hide');*/
            $.get('/ajax/checkUserLoggedIn',function(data){
                if (data == 1) {
                    document.location.href = '/isiminti-skelbimai/';
                } else {
                    openRegistrationFancybox('/isiminti-skelbimai/');
                }
            });
            //document.location.href = '/isiminti-skelbimai/';
        }
        $(this).siblings().removeClass('sel');
        $(this).addClass('sel');
    });

    $('.list-photo,.list-photo-v2 a,.top-five-adverts__advert__image,.top-five-advert-img-v2').mouseenter(startSlideshow);
    $('.list-photo,.list-photo-v2 a,.top-five-adverts__advert__image,.top-five-advert-img-v2').mouseleave(endSlideshow);

    /// filter events

    $('#changeListOrder').change(changeOrder);

    /// initialization

    $('.page-bt').click(fadeTable);

    //$('.filter-col-saved:visible').fadeTo('fast',0.3).delay(0).fadeTo('fast',1);


    // savedSearchesEvents();
    //savedAdvertsEvents();
});

// slideshow

var timer = false;
var timer_img = null;
var timer_extra = null;
var timer_count = 0;
var timer_index = 0;
var slide_show_watched = false;

function startSlideshow() {
    var img = $('img', this).first();
    var extra = img.data('extra');
    if (extra) {
        timer = setTimeout(slideShow, 300);
        timer_img = img;
        timer_extra = extra.split(',');
        timer_extra.push(img.attr('src'));
        timer_count = timer_extra.length;
        timer_index = 0;
        //_gaq.push(['_trackEvent', 'Slide show', 'start']);
    }
}

function endSlideshow() {
    if (timer) {
        clearTimeout(timer);
        timer = false;
        timer_img.attr('src',timer_img.data('default'));
        timer_count = 0;
        timer_index = 0;
        if (slide_show_watched) {
            slide_show_watched = false;
            //_gaq.push(['_trackEvent', 'Slide show', 'end']);
        }
    }
}

function slideShow() {
    if (timer_count) {
        console.log(timer_extra[timer_index]);
        timer_img.attr('src',timer_extra[timer_index]);
        if (timer_img.attr('srcset')) {
            timer_img.attr('srcset',timer_extra[timer_index]);
        }
        timer_index++;
        if (timer_index>=timer_count) {
            slide_show_watched = true;
            timer_index = 0;
        }
        timer = setTimeout(slideShow, 1000);
    }
}

///



/// filter functions

function changeOrder() {
    var selected = $(this).val();
    // var form = $('#searchForm');
    // form.append('<input type="hidden" name="FOrder" value="' + selected + '"/>');
    // form.submit();

    searchFormScripts.setParam('FOrder', selected);
    searchFormScripts.submitForm();
}


/* paieškos sąrašo toolbar sticky **/

// var toolbarTop = 0;
// var actionBarTop = 0;
// $(function(){
//     if (document.getElementById('actionBarAdverts')) {
//         actionBarTop = $('#objToolbarDummy').offset().top;
//         setInterval("actionBarTop = $('#objToolbarDummy').offset().top;", 1000);
//         window.onscroll = checkToolbarTop;
//         checkToolbarTop();
//     } else if (document.getElementById('objToolbar') != undefined && document.getElementById('objToolbarDummy') != undefined) {
//         toolbarTop = $('#objToolbarDummy').offset().top;
//         setInterval("toolbarTop = $('#objToolbarDummy').offset().top;", 1000);
//         window.onscroll = checkToolbarTop;
//     }
// })
}

// function f_scrollTop() {
//     return f_filterResults (
//         window.pageYOffset ? window.pageYOffset : 0,
//         document.documentElement ? document.documentElement.scrollTop : 0,
//         document.body ? document.body.scrollTop : 0
//     );
// }
//
// function f_filterResults(n_win, n_docel, n_body) {
//     var n_result = n_win ? n_win : 0;
//     if (n_docel && (!n_result || (n_result > n_docel)))
//         n_result = n_docel;
//     return n_body && (!n_result || (n_result > n_body)) ? n_body : n_result;
// }
// var is_stick = false;
// var actionBarAdverts = document.getElementById('actionBarAdverts');
// function checkToolbarTop() {
//     var scrollTop = f_scrollTop();
//     if (actionBarAdverts) {
//         if (actionBarTop < scrollTop+1) {
//             actionBarAdverts.classList.add('action-bar-advert--sticky');
//         } else {
//             actionBarAdverts.classList.remove('action-bar-advert--sticky');
//         }
//     } else {
//         if (toolbarTop <scrollTop) {
//             if (!is_stick) {
//                 $('#objToolbar').css('top', '').addClass('adv-tb-fixed');//.addClass('adv-tb-fixed-slide');
//
//                 $(".list-header").css('top', '0');
//                 $(".list-header-ntz").css('top', '10px');
//
//                 //setTimeout(function() { $('.adv-tb-fixed').addClass('adv-tb-fixed-slide')}, 100);
//                 setTimeout(function() { $('.adv-tb-fixed').animate({top:0},300)}, 100);
//                 is_stick = true;
//             }
//             //$('#btGoToSearch').removeClass('hide');
//             //$('.txt-bt-toolbar').addClass('hide');
//         } else if (is_stick) {
//             $('#objToolbar').removeClass('adv-tb-fixed').removeClass('adv-tb-fixed-slide').css('top', '').stop();
//             is_stick = false;
//
//             $(".list-header").css('top', '0px');
//             $(".list-header-ntz").css('top', '15px');
//
//             //$('#btGoToSearch').addClass('hide');
//             //$('.txt-bt-toolbar').removeClass('hide');
//         }
//     }
// }

function deleteConfirmation() {
    var id = $(this).attr('data-id');
    var subscribe = $(this).attr('data-subscribe');
    var confirmText = $(this).attr('data-confirm');
    var deleteText = $(this).attr('data-delete');
    var cancelText = $(this).attr('data-cancel');
    var object = $(this);

    if (subscribe == 0) {
        deleteSavedItem(id, object);
        return;
    }

    var html = '<div class="saved-item-wrapper">'
        + '<div class="left-side"><img src="'+staticUrl+'/static/svg/saved_search_mail.svg" width="40" /></div>'
        + '<div class="right-side"><div class="saved-item-confirm-title">' + confirmText + '</div>'
    + '<div class="saved-item-confirm-buttons"><input class="filter-button button-simple" value="' + deleteText + '" />'
    + '<a onclick="$.fancybox.close()" class="no-button">' + cancelText + '</a></div></div></div>';

    $.fancybox({
        content: html,
        autoDimensions:false,
        width:365,
        height:100,
        padding: '35px',
        hideOnOverlayClick: false,
        onComplete: function() {
            $('.saved-item-wrapper .filter-button.button-simple').on('click })
        }
    });
}

function deleteSavedItem(id, object) {
    $.ajax({
        url: '/ajax/deleteSavedSearch/?id=' + id
    }).done(function(data) {
        if(typeof $.fancybox == 'function') {
            $.fancybox.close();
        }
        $('.box-saved-tabs').attr('style', '');
        reloadSavedSearches();
    });
    ga('send', 'event', 'ar-saved-search-delete', 'Click', 'full');gtag('event', 'ar-saved-search-delete', {'event_category': 'full', 'event_action': 'Click'});
}

function subscribeSearch(Event) {
    let element = Event.currentTarget;
    $.get('/ajax/checkUserLoggedIn',function(data){
        let id = element.getAttribute('data-id');
        if (data == 1) {
            var subscribe = element.getAttribute('data-subscribe');

            ga('send', 'event', 'ar-saved-search-subscribe', 'Click', 'saved-search-subscribe-block-' + subscribe);gtag('event', 'ar-saved-search-subscribe', {'event_category': 'saved-search-subscribe-block-' + subscribe, 'event_action': 'Click'});

            if (subscribe == 0) {
                $.fancybox({
                    'href': '/subscribe-search/?id=' + id,
                    'type': 'ajax',
                    'padding': 0,
                    width: 890,
                    height: 550,
                    'showCloseButton': false,
                });
            } else {
                $.ajax({
                    url: '/ajax/subscribeSavedSearch/?id=' + id + '&state=' + subscribe
                }).do });
            }
        } else {
            openRegistrationFancybox('#subscribe' + id, 'subscribeSearch');
        }
    });
}

function changeMailSubscribeSwitchers(id, subscribed) {
    // console.log(subscribed);
    var subscribe = document.querySelectorAll('.mail-subscribe');
    for (var i = 0; i < subscribe.length; i++) {
        if (id == subscribe[i].getAttribute('data-id')) {
            if (subscribed == 1) {
                subscribe[i].classList.add('subscribed');
            } else {
                subscribe[i].classList.remove('subscribed');
            }
            subscribe[i].setAttribute('data-subscribe', subscribed);
            var subtext = subscribe[i].querySelector('.action-text');
            if (subtext) {
                if (subscribed == 1) {
                    subtext.classList.add('subscribed');
                } else {
                    subtext.classList.remove('subscribed');
                }
            }
        }
    }

    var subscribeBottom = document.querySelector('.block-search-subscribe');
    if (subscribeBottom) {
        if (subscribed == 1) {
            subscribeBottom.classList.add('hide');
        } else {
            subscribeBottom.classList.remove('hide');
        }
    }

    var advertControls = document.querySelectorAll('.advert-controls');
    for (var i = 0; i < advertControls.length; i++) {
        if (advertControls[i].getAttribute('data-id') == id) {
            if (subscribed == 1) {
                advertControls[i].classList.add('hide');
            } else {
                advertControls[i].classList.remove('hide');
            }
        }
    }

    var actionBarSearch = document.querySelectorAll('.action-bar-search');
    if (actionBarSearch.length < 1) {
        return;
    }

    actionBarSearch = actionBarSearch[0];
    var actionBarAdvertControls = actionBarSearch.querySelectorAll('.advert-controls');
    if (actionBarAdvertControls.length < 1) {
        return;
    }

    for (var i = 0; i < actionBarAdvertControls.length; i++) {
        if (actionBarAdvertControls[i].getAttribute('data-id') == id) {
            if (subscribed == 1) {
                actionBarSearch.classList.add('no-subscribe');
            } else {
                actionBarSearch.classList.remove('no-subscribe');
            }
        }
    }
}

function savedSearchesEvents() {
    $('.mail-subscribe').unbind( "click" );
    $('.mail-subscribe').click(subscribeSearch);
    $('.title-row .delete').click(deleteConfirmation);
    $('.action-item.edit').click(editSearch);

    if (WebNotification.getNotificationStatus() !== 'denied' && WebNotification.getNotificationStatus() != '') {
        WebNotification.pushEventsAndChecks();
    } else {
        WebNotification.hideSearchPushButtons();
    }
}

function adjustSavedSearchesBox() {
    var savedSearchesTabsHeight = $('.box-saved-tabs').outerHeight();
    var containerHeight = $('#searchFormContainer').outerHeight();
    if (containerHeight == null) {
        containerHeight = 231;
    }
    var viewPortSize = containerHeight - savedSearchesTabsHeight - 40;
    if (typeof hasRecommendations === 'undefined' || !hasRecommendations) {
        $('.tab-box-list').height(viewPortSize);
    } else {
        $('.tab-box-list').height(viewPortSize - 86);
    }
}

/*function savedAdvertsEvents() {
    $('#boxAdverts .title-row .close').click(deleteSavedAdverts);
}*/

function reloadSavedAdverts() {
    $.ajax({
        url: '/ajax/reloadSavedAdverts/'
    }).done(function(data) {
        data = JSON.parse(data);
        //$('#boxAdverts').html(data.content);
        $('.saved-adv-cnt').text(data.saved_adverts_count);
        //savedAdvertsEvents();
    });
}

function editSearch() {
    var id = $(this).attr('data-id');
    var openedFrom = $(this).attr('data-openedfrom');
    ga('send', 'event', 'ar-make-edit-search', 'Click', 'full');gtag('event', 'ar-make-edit-search', {'event_category': 'full', 'event_action': 'Click'});

    $.fancybox({
        'href': '/edit-search/?openedFrom=' + openedFrom + '&searchId=' + id,
        type: 'iframe',
        width: 1000,
        height: 500,
        padding: '0',
        'transitionOut': 'none',
        scrolling: 'yes',
        'easingOut': 'none',
        'autoDimensions': false,
        hideOnOverlayClick: false
    });
}

var bannerRight = document.querySelector('.box-right ');
var contentDiv = document.querySelector('.content');
var mainContentDiv = document.querySelector('.main-content');
if (bannerRight && mainContentDiv) {
    var contentHeight = contentDiv.clientHeight;
    var maxContentHeight = 2800;
    if (contentDiv.classList.contains('opendoor')) {
        maxContentHeight = 2600;
    }
    if (maxContentHeight < contentHeight) {
        bannerRight.style.minHeight = contentHeight - 200 + 'px';
    }
}
