const win_loc = window.location.hostname.replace(/www./,'')
const parser_loc = win_loc.substring(win_loc.lastIndexOf(".", win_loc.lastIndexOf(".") - 1) + 1)
const url_comment = window.location.hostname.search(/(detik)/gi)>-1?'https://newcomment.detik.com':window.location.protocol+'//comment.'+parser_loc

window.DtkXComponent = xcomponent.create({

    // The html tag used to render my component

    tag: 'thecomment2',
    dimensions: {
        width: '100%',
        height: '100%'
    },
    autoResize: { width: false,height:true },
    // The url that will be loaded in the iframe or popup, when someone includes my component on their page
    defaultLogLevel: 'error',
    scrolling: false,
    url: url_comment+'/static/index.htm?v=1.27',

    props: {

        url_dtk: {
            type: 'string',
            required: false
        },
        identifier: {
            type: 'number',
            required: false
        },
        group: {
            type: 'number',
            required: false
        },
        date: {
            type: 'string',
            required: false
        },
        title: {
            type: 'string',
            required: false
        },
        appId: {
            type: 'number',
            required: false
        },
        url_share: {
            type: 'string',
            required: false
        },
        prefix: {
            type: 'string',
            required: false
        },
        prokontra: {
            type: 'number',
            required: !1,
            def:         },
        showhide: {
            type: 'number',
            required: false
        },
        label_1: {
            type: 'string',
            required: false
        },
        label_2: {
            type: 'string',
            required: false
        },
        kanalAds: {
            type: 'string',
            required: false
        },
        envAds: {
            type: 'string',
            required: false
        },
        onLogin: {
            type: 'function'
        },
        onResize: {
            type: 'function'
        },
        onScroll: {
            type: 'function'
        },
        onAlert: {
            type: 'function'
        },
        data_oa: {
            type: 'function',
            required: false
        },
        current_url: {
            type: "string",
            required: !1,
            def:         }
    }


});
$(;
function onLogin (){
    if ($('.to_login').html() != 'undefined' && $('.to_login').html() != null) {
        $('.to_login')[0].click();
    }
    else{
        alert("Maaf terjadi kesalahan, harap logout dan login kembali");
    }
}
function onResize (height){
    $(parent.document).find("#thecomment2").css({height:height+'px'});
}
function onScroll (toComment) {
    var toBox = $('#thecomment2').offset().top
    var scrollHeight = toBox+toComment
    $('html, body').animate({ scrollTop: scrollHeight }, 800);
}


function data_oa(msg) {
    if(typeof OA_output !== 'undefined'){
        return OA_output['nativekomentar'+msg+''];
    }else{
        return '';
    }
}