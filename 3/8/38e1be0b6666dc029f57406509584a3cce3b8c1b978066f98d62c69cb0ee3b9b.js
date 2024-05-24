
$('.join-sign-block_input').change(function () {
    let val = $(this).val();

    if( val !== 0 ) {
        $(this).addClass('input-change');
    } else {
        $(this).removeClass('input-change');
    }
});

let TelInput = function( obj ) {

    let _obj = obj;

    let _initTelInput = function(){

            window.intlTelInput( _obj[0], {
                separateDialCode: true,
                autoPlaceholder: 'polite',
                dropdownContainer: document.body,
                hiddenInput: "full_number",
                utilsScript: "js/utils.js",
            });

        },

        _addEvents = function(){

            _obj.on({

                keyup: 
            });

        },

        _init = 

    _init();

};

let FormValidation = function( _obj, _url, _overlay ) {

    let _self = this,
        _path = _obj.attr( 'action' ),
        _inputs = _obj.find( '[required]' ),
        _select = _obj.find('select'),
        _checkBox = _obj.find('.nice-check input'),
        _feedbackError = _obj.find('#feedback-form-error'),
        _successInfo = _obj.find( '.subscribe-form__success' ),
        _request = new XMLHttpRequest();

    let _ajaxRequest = function() {

            $("#referrer").val(window.location.href);
            _request.abort();
            _request = $.ajax({
                url: _url,
                data: _obj.serialize(),
                dataType: "json",
                timeout: 20000,
                type: "POST",
                beforeSend: function() {
                    _overlay.prepend(
                        '<div id="overlay" class="overlay">' +
                        '<img src="img/loader.gif" class="loader" />' +
                        '</div>'
                    );
                },
                success: function (response) {
                    _feedbackError.empty();
                    _obj.trigger( 'reset' );
                    $('#overlay').remove();
                    if (response.status === 'fail') {
                        grecaptcha.reset(feedbackRecaptcha);
                        _feedbackError.empty().append("<li>" + response.data + "</li>");
                    } else {
                        _feedbackError.empty();
                        _successInfo.addClass( 'active' );
                    }

                },
                error: function ( XMLHttpRequest ) {

                    console.error(XMLHttpRequest);

                    if( XMLHttpRequest.statusText !== "abort" ) {
                        let response = JSON.parse(XMLHttpRequest.responseText);
                        if (response.status === "success") {
                            window.location.href = _path;
                        } else {
                            grecaptcha.reset();
                            _feedbackError.empty().append('<span>'+ response.data +'</span>');
                        }
                    }

                }
            });

        },
        _addEvents = function() {

            _obj.on({

                'submit': function(){

                    $.each( _inputs, function(){

                        let curItem = $(this),
                            curAttr = curItem.attr( 'type' );

                        if ( curItem.val() === '' ) {
                            curItem.addClass( 'contacts__error' );
                        }

                        if ( curAttr === 'email' ){
                            let pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                            if ( pattern.test( curItem.val() ) === false ){
                                curItem.addClass( 'contacts__error' );
                            }
                        }

                        if ( curAttr === 'url' ){
                            let pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
                                '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
                                '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
                                '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
                                '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
                                '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
                            if ( pattern.test( curItem.val() ) === false ){
                                curItem.addClass( 'contacts__error' );
                            }
                        }

                        if ( curAttr === 'checkbox' ){

                            if ( curItem[0].checked === false ){

                                curItem.parents('.nice-check').addClass( 'contacts__error' );

                            }

                        }

                        if ( curItem.is('select') ){

                            if ( curItem.val() === null ) {
                                curItem.parents('.nice-select').addClass( 'contacts__error' );
                            }

                        }

                    } );

                    if ( _obj.find( '.contacts__error' ).length ){
                        return false;
                    } else {
                        _ajaxRequest();
                    }

                    return false;

                }

            });

            _inputs.on({

                'focus': 
            });

            _select.on({

                change: function() {

                    const curElem = $(this);
                    curElem.parents('.nice-select').removeClass( 'contacts__error' );

                }

            });

            _checkBox.on({

                change: 
            });

        },
        _init = function () {
            _addEvents();
            _obj[ 0 ].obj = _self;
        };

    _init();

};

let ScrollToBlock = function( _obj ) {

    let _html = $('html');

    let _addEvents = function() {

            _obj.on({

                click: function() {

                    const elementClick = $(this).attr("href"),
                        destination = $( elementClick ).offset().top - 50;

                    _html.animate({
                        scrollTop: destination
                    }, 800);

                    return false

                }

            });

        },

        _init = 

    _init();

};

$(window).load( function () {

    let elem = document.getElementById('container');

    if (elem.addEventListener) {
        if ('onwheel' in document) {
            // IE9+, FF17+
            elem.addEventListener("wheel", onWheel);
        } else if ('onmousewheel' in document) {
            elem.addEventListener("mousewheel", onWheel);
        } else {
            // Firefox < 17
            elem.addEventListener("MozMousePixelScroll", onWheel);
        }
    } else { // IE8-
        elem.attachEvent("onmousewheel", onWheel);
    }

    function onWheel(e) {
        e = e || window.pageYOffset;
        let delta = window.pageYOffset;
        if (delta > 0) {
            $('.header').css('background-color','rgba(0,0,0,0.85)');
        } else if (delta < 1) {
            $('.header').css('background-color','rgba(0,0,0,0)');
        }
    }

    onWheel();

});

$.each( $( '.join' ), function() {
    new ScrollToBlock ( $(this) );
} );

$.each( $( '#telInput' ), );

$.each( $( '#feedback-form' ), function() {
    new FormValidation ( $(this), " //dashboard.adskeeper.co.uk/user/feedback-adskeeper", $('#container') );
} );

function submitForm(form, url, overlay) {
    form.submit(function(ev) {
        var curElem = $(this),
            obj = $(ev.target),
            successInfo = curElem.find( '.subscribe-form__success' );
        if(obj.data('isSend')) {
            return false;
        }
        obj.data('isSend', 1);

        $.ajax({
            data: curElem.serialize(),
            dataType: "json",
            url: url,
            type: "POST",
            crossDomain: true,
            beforeSend: function() {
                overlay.prepend(
                    '<div id="overlay" class="overlay">' +
                    '<img src="img/loader.gif" class="loader" />' +
                    '</div>'
                );
            },
            success: function(response) {
                $('#overlay').remove();
                if (response.status === 'fail') {
                    grecaptcha.reset(feedbackRecaptcha);
                    $('#feedback-form-error').empty().append("<li>" + response.data + "</li>");
                } else {
                    $('#feedback-form-error').empty();
                    successInfo.addClass( 'active' );
                }
                obj.data('isSend', 0);
            }
        });

        return false;
    });
}

submitForm($('.sign-up-form'), " //dashboard.adskeeper.co.uk/user/signup-adskeeper", $('.join-sign-block'));

//DOM Ready
$(function() {
    const yearEl = $('#year');

    if (yearEl.length > 0) {
        const year = new Date().getFullYear();
        yearEl.text(year);
    }
});

(function notAvailableSignIn() {
    const notAvailableBlock = document.querySelector('.not-available');
    const signInBlock = document.querySelector('.sign-wrapper-js');

    if (notAvailableBlock && signInBlock) {
        getCountry()
            .then((data) => {
                const countryCode = data.country_code;

                (countryCode && countryCode.toLowerCase() === 'ru' || countryCode.toLowerCase() === 'by') ?
                    notAvailableBlock.style.display = 'flex' :
                    signInBlock.style.display = 'block';
            })
            .catch((error) => {
                signInBlock.style.display = 'block';
                console.log(error);
            });
    }

    async function getCountry() {
        return await fetch('https://ipwhois.app/json/').then(;
    }
}());