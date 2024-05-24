var urlLiveChat = window.location.hostname.split('.')[1];
if (['haibunda', 'cnnindonesia', 'cnbcindonesia', 'detik', 'beautynesia', 'insertlive', 'cxomedia'].indexOf(urlLiveChat) >= 0) {
    urlLiveChat = window.location.hostname.split('.')[1];
}else{
    urlLiveChat = window.location.hostname.split('.')[0];
}

let tld_url = 'com'
if (['beautynesia', 'cxomedia'].includes(urlLiveChat)){
    tld_url = 'id'
}

window.ChatComponent = zoid.create({
    tag: 'chat-component',
    dimensions: {
        height: '100%',
        width: '100%'
    },
    url: 'https://ngobrol.'+urlLiveChat+'.'+tld_url+'/build/index.html?123',
    props: {
        gtmService: {
            type: 'function',
            required: !1,
            default: function(){
                return (action) => {
                    const gtm_obj = {
                        event: 'panel tracking',
                        action: action,
                        label: 'livechat section',
                        panelname : 'livechat section',
                        category: 'livechat'
                    }
                    const dataLayer = window.dataLayer || [];
                    dataLayer.push(gtm_obj);
                }
                // return (obj) => {
                //     return ""
                // }
            }
        }

    }
});

function chatOnLogin (){
    if ($('.to_login').html() != 'undefined' && $('.to_login').html() != null) {
       $('.to_login')[0].click();
    }
    else{
        alert("Maaf terjadi kesalahan, harap logout dan login kembali");
    }
}