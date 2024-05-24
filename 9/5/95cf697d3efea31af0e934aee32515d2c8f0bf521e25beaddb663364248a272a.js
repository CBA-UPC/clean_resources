(function() {
    var placement = {
        p: "84180",
        url: "https://y.one.impact-ad.jp/imp?p=84180&w=400&h=225&v=sva&r={REFERER_ESC}",
        adContainers: [{
            type: "wipe",
            adInterface: "sva",
            noCloseButton: "true",
            css: {
                base: "width: 400px; height: 225px; right: 20px; bottom: 90px;"
           }
        }],
        interface: "sva",
        isForceStartEnabled: "true"
    };
    placement.id = 'dacivt' + placement.p;

    function insertIvtTag(currentDom) {
        var svaTag = document.createElement('dac-ivt-ogv');
        svaTag.id = placement.id;
        var noScriptTag = document.createElement('noscript');
        // パスバック設定箇所
        noScriptTag.innerText = "";
        svaTag.appendChild(noScriptTag);
        var scriptTag = document.createElement('script');
        scriptTag.src = '//img.ak.impact-ad.jp/ic/pone/ivt/firstview/js/dac-video.min.js';
        scriptTag.charset = 'UTF-8';
        var parentDom = currentDom.parentNode;
        parentDom.insertBefore(svaTag, currentDom);
        parentDom.insertBefore(scriptTag, currentDom);
    }

    function addAdToFIF() {
        window.top.DACIVT = window.top.DACIVT || [];
        window.top.DACIVT.push(placement);
        var w = window.window;
        w.frameElement.style.display = 'none';
        while (w.parent.frameElement) {
            w.parent.frameElement.style.display = 'none';
            w = w.parent.window;
        }
        var iframe = w.frameElement;
        insertIvtTag(iframe);
    }

    function addAd() {
        window.DACIVT = window.DACIVT || [];
        window.DACIVT.push(placement);
        var script = document.currentScript || document.getElementsByTagName('script')[document.getElementsByTagName('script').length - 1];
        insertIvtTag(script);
    }

    if (window !== parent) {
        if (window.$sf) {
            addAd();
        } else {
            addAdToFIF();
        }
    } else if (window === parent) {
        addAd();
    }
}());ttom: 50px;
}
.side-er .re_store_wrap h3 {
    text-align: left;
    font-size: 16px;
    line-height: 22px;
    color: #474746;
    font-weight: 700;
    margin-bottom: 2px;
}
.side-er .update {
    display: block;
    text-align: right;
    font-size: 11px;
}
.side-er .re_store_wrap li.re_store {
    margin-bottom: 15px;
    padding-bottom: unset;
    border: unset;
}
.side-er .re_store .rank_top5 li {
    width: calc(90%/3);
}
.side-er .re_store .rank_top5 li .rank {
    width: 30px;
    height: 36px;
}
.side-er .re_store .rank_top5 li img {
    width: 80px;
    height: 80px;
}
.side-er .re_store .rank_top5 li p {
    width: 80px;
    font-size: 11px;
}
.side-er .re_store .link_all {
    font-size: 12px;
}
.message {
    display: none;
    width: 100%;
    text-align: center;
    margin-top: 50px;
    margin-bottom: -76px;
}