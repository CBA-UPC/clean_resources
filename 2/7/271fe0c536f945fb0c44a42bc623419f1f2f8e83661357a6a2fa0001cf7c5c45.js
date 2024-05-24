 <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Justpremium Sync Pixel</title>
    <link rel="icon" href="data:;base64,iVBORw0KGgo=">
</head>
<body>
<script>
    function getTrackUrl(ssp) {
        var scope = window;
        var trParams = '?rid=r-29683208-ad58-4c08-a338-2d87ee8869e9-18411-810147427'
            + '&sid=&uid=r-030fe196-4c83-48e9-9e61-8bbd434ed451-18411-805785908&vr='
            + '&ru=pre.ads.justpremium.com'
            + '&tt=' + new Date().getTime()
            + '&siw=0'
            + '&sh='+ scope.screen.height
            + '&sw=' + scope.screen.width
            + '&wh=' + scope.innerHeight
            + '&ww=' + scope.innerWidth
            + '&an=pixel'
            + '&vn=eu-central-1'
            + '&sd='
            + '&_c=' + Math.floor((Math.random() * Math.pow(2, 32)) + 1).toString()
            + '&et=&aid=&said=&ei=&fc=&sp=&at=&cid=0&ist=&mg=&dl=&dlt=&ev=&vt=&zid=0&dr=0&di=&pr=&cw=&ch=&nt=&st='
            + '&jp=%7B%22jpuid%22%3A%22r-5bdd294e-a66f-4c21-bf19-a65bb8fbadb1-18411-805711376%22%2C%22ssp%22%3A%22SSP_VAR%22%7D'
            + '&ty=cu';
        trParams = trParams.replace('SSP_VAR', ssp);
        return 'https://tracking.justpremium.com/tracking.gif' + trParams;
    }

    function pixelTracking(ssp) {
        var url = getTrackUrl(ssp);
        var imgPixel = window.document.createElement("img");
        imgPixel.style.position = "fixed";
        imgPixel.style.left = "-9999px";
        imgPixel.style.top = "-9999px";
        imgPixel.style.width = "1px";
        imgPixel.style.height = "1px";
        imgPixel.src = url;
        window.document.body.appendChild(imgPixel);
    }


    if (false) {
        var gg = document.createElement('img');
        gg.setAttribute('src', 'https://rtb.gumgum.com/getuid/jp?r='+encodeURIComponent('https://match.justpremium.com/match/gg?jp_uid=r-5bdd294e-a66f-4c21-bf19-a65bb8fbadb1-18411-805711376&ex_uid=[UID]')+'&us_privacy=');
        window.document.body.appendChild(gg);
    }

    if (false) {
        var dv = document.createElement('img');
        dv.setAttribute('src', 'https://cm.g.doubleclick.net/pixel?google_nid=gumgum_dbm&google_hm=&gdpr=1&gdpr_consent=');
        window.document.body.appendChild(dv);
    }

    if (false) {
        var td = document.createElement('img');
        td.setAttribute('src', 'https://match.adsrvr.org/track/cmf/generic?ttd_pid=gumgum&ttd_tpi=1&gdpr=1&gdpr_consent=');
        window.document.body.appendChild(td);
    }

    if (false) {
        var xn = document.createElement('img');
        xn.setAttribute('src', 'https://secure.adnxs.com/getuid?https://rtb.gumgum.com/usersync?b=apn&i=$UID');
        window.document.body.appendChild(xn);
    }

    if (false) {
        var yh = document.createElement('img');
        yh.setAttribute('src', 'https://pr-bh.ybp.yahoo.com/sync/gumgum?gdpr=1&gdpr_consent=');
        window.document.body.appendChild(yh);
    }

    if (false) {
        var mm = document.createElement('img');
        mm.setAttribute('src', 'https://sync.mathtag.com/sync/img?mt_exid=71&gdpr=1&gdpr_consent=&redir=' + encodeURIComponent('https://rtb.gumgum.com/usersync?b=mmh&i=[MM_UUID]'));
        window.document.body.appendChild(mm);
    }

    if (false) {
        var ae = document.createElement('img');
        ae.setAttribute('src', 'https://sync-tm.everesttech.net/upi/pid/URnmbSKM?gdpr=1&gdpr_consent=&redir=' + encodeURIComponent('https://usersync.gumgum.com/usersync?b=atm&i=${TM_USER_ID}'));
        window.document.body.appendChild(ae);
    }

    if (false) {
        var bs = document.createElement('img');
        bs.setAttribute('src', 'https://x.bidswitch.net/sync?ssp=gumgum2&user_id=&gdpr=1&gdpr_consent=&us_privacy=');
        window.document.body.appendChild(bs);
    }

    if (false) {
        var ac = document.createElement('img');
        ac.setAttribute('src', 'https://sync.ipredictive.com/d/sync/cookie/generic?partner=gumgum&cspid=9&append=1&cb=1707128634&gdpr=1&gdpr_consent=&us_privacy=&redirect='+ encodeURIComponent('https://rtb.gumgum.com/usersync?b=vnt&i='));
        window.document.body.appendChild(ac);
    }

    var pixelLimit = '16';
    if (pixelLimit > 0) {
        var ggFrame = document.createElement('iframe');
        ggFrame.setAttribute('frameBorder', 0);
        ggFrame.setAttribute('src', 'https://rtb.gumgum.com/usync/jp?r='+encodeURIComponent('https://match.justpremium.com/match/gg?jp_uid=r-5bdd294e-a66f-4c21-bf19-a65bb8fbadb1-18411-805711376&ex_uid=[UID]')+'&gdpr=1&gdpr_consent=&us_privacy=&limit=' + pixelLimit);
        window.document.body.appendChild(ggFrame);
    }

</script>
</body>
</html>
0}.media-features .str_wrap{overflow:hidden;position:relative;-moz-user-select:none;-khtml-user-select:none;user-select:none;white-space:nowrap}.media-features .str_move{white-space:nowrap;position:absolute;top:0;left:0;cursor:move;display:flex}.media-features .str_move_clone{display:inline-block;vertical-align:top;position:absolute;left:100%;top:0}.media-features .str_vertical .str_move_clone{left:0;top:100%}.media-features .str_down .str_move_clone{left:0;bottom:100%}.media-features .str_vertical .str_move,.str_down .str_move{white-space:normal;width:100%}.media-features .str_static .str_move,.noStop .str_move,.no_drag .str_move{cursor:inherit}.media-features .str_wrap img{max-width:none!important}.media-features .featured .brand-wall{overflow:hidden;display:flex;border-radius:5px}.media-features .featured .brand-wall .item a{display:block}.media-features .featured .brand-wall .item .divimg{width:160px;padding-right:40px;background-size:cover;background-repeat:no-repeat;background-position:center center}.media-features .featured .brand-wall .str_move_clone{display:flex}.media-features .featured .brand-wall img{opacity:.8;transition:all .35s}.media-features .featured .brand-wall img:hover{opacity:1}.contact-us{margin-top:var(--section-padding)}.contact-us .entry{display:grid;gap:var(--grid-l)}.contact-us .entry .item{background-color:var(--color-pearl);border-radius:var(--border-radius);overflow:hidden}.contact-us .entry .item .divimg{height:200px}.contact-us .entry .item .divimg img{height:100%;object-fit:cover;object-position:center}.contact-us .entry .item .content{padding:32px 20px;text-align:center}.contact-us .entry .item .content .name{font-weight:700;margin-bottom:8px}.contact-us .entry .item .content .btn{margin-top:16px}#press-releases-post .press-release-content #hero{height:300px}#press-releases-post .press-release-content #hero .divimg{height:100%}#press-releases-post .press-release-content #hero img{height:100%;object-fit:cover}#press-releases-post .press-release-content .blog{padding:32px var(--page-padding) 0}#press-releases-post .press-release-content .blog .post-title{padding-bottom:var(--grid-m);font-size:var(--font-title-m);line-height:var(--font-title-m-line-height);font-weight:700;text-align:center}#press-releases-post .press-release-content .blog .post-date{font-size:14px;text-align:center;font-weight:500}#press-releases-post .press-release-content .blog .content{font-size:var(--font-body-reg);line-height:var(--font-body-reg-line-height);padding:10px 0}#press-releases-post .press-release-content .blog .content p{padding:8px 0}}@media screen and (min-width:768px){.download-packets .list ul li,.press-releases .list ul li{width:calc((100vw - (var(--page-padding) + var(--grid-m)) * 2)/ 3)}.download-packets .list.company{padding:0 var(--page-padding)}.download-packets .list.company .divimg{border-radius:var(--border-radius)}.download-packets .list.company .li-bottom{padding:0;grid-template-columns:repeat(3,1fr);gap:8px var(--grid-m)}.download-packets .list.company .li-bottom .row:nth-child(1){grid-row:1/2;grid-column:1/4}.download-packets .list.company .li-bottom .row:nth-child(2){grid-row:2/3;grid-column:1/2}.download-packets .list.company .li-bottom .row:nth-child(3){grid-row:3/4;grid-column:1/2}.download-packets .list.company .li-bottom .row:nth-child(4){grid-row:2/3;grid-column:2/3}.download-packets .list.company .li-bottom .row:nth-child(5){grid-row:3/4;grid-column:2/3}.download-packets .list.company .li-bottom .row:nth-child(6){grid-row:2/4;grid-column:3/4;justify-content:flex-end;align-items:center}.download-packets .list.company .li-bottom .row:nth-child(6) .btn{margin-top:0}.exclusive-offer .text{max-width:420px;margin:0 auto}.exclusive-offer .btn{margin:16px auto 0}.contact-us .entry{grid-template-columns:repeat(2,1fr)}.contact-us .entry .item{display:grid;grid-template-columns:1fr 1.5fr}.contact-us .entry .item .content{text-align:left}.contact-us .entry .item .divimg{height:100%}#press-releases-post .press-release-content #hero{height:250px}#press-releases-post .press-release-content .blog{width:75%;margin:0 auto}}@media screen and (min-width:1024px){.media-features .list{padding:0 var(--page-padding)}.media-features .list ul{margin-right:0}.media-features .list ul li{width:calc((100vw - (var(--page-padding) + var(--grid-m)) * 2)/ 3)}}@media only screen and (min-device-width:768px) and (max-device-width:1024px) and (orientation:landscape){.press-releases.slider-container .nl-slider{display:none}}@media screen and (min-width:1025px){.press-releases.slider-container .nl-slider{display:none}}@media screen and (min-width:1200px){.press-releases .list .nl-slider{display:block;opacity:0;transition:var(--default-transition)}.press-releases .list:hover .nl-slider{opacity:1}.press-releases.slider-container .nl-slider .slideBtn{background-color:rgba(255,255,255,.4);opacity:1;transition:var(--default-transition)}.press-releases.slider-container .nl-slider .slideBtn::after{border-color:var(--color-peppercorn)}.press-releases.slider-container .nl-slider .prevBtn{left:var(--page-padding)}.press-releases.slider-container .nl-slider .nextBtn{right:var(--page-padding)}.press-releases.slider-container .nl-slider.stopLeft .prevBtn{opacity:0}.press-releases.slider-container .nl-slider.stopRight .nextBtn{opacity:0}.press-releases .list{display:block}.press-releases .list ul li{width:calc((100vw - var(--page-padding) * 2 - var(--grid-m) * 3)/ 4);min-width:calc((100vw - var(--page-padding) * 2 - var(--grid-m) * 3)/ 4)}.media-features .list ul li .content .title{-webkit-line-clamp:3}.download-packets .list{overflow-x:hidden;padding:0 var(--page-padding);display:block}.download-packets .list ul{display:grid;grid-template-columns:repeat(4,1fr);margin-right:0}.download-packets .list ul li{width:100%}.download-packets .list.company ul{display:block}.download-packets .list.company .li-main{display:grid;gap:var(--grid-m);grid-template-columns:repeat(4,1fr)}.download-packets .list.company .li-top{grid-row:1/2;grid-column:1/4}.download-packets .list.company .li-bottom{grid-template-columns:1fr;grid-row:1/2;grid-column:4/5}.download-packets .list.company .li-bottom .row:nth-child(1){grid-row:1/2;grid-column:1/2}.download-packets .list.company .li-bottom .row:nth-child(2){grid-row:2/3;grid-column:1/2}.download-packets .list.company .li-bottom .row:nth-child(3){grid-row:3/4;grid-column:1/2}.download-packets .list.company .li-bottom .row:nth-child(4){grid-row:4/5;grid-column:1/2}.download-packets .list.company .li-bottom .row:nth-child(5){grid-row:5/6;grid-column:1/2}.download-packets .list.company .li-bottom .row:nth-child(6){grid-row:6/7;grid-column:1/2;justify-content:flex-start;align-items:flex-start}.exclusive-offer .text{max-width:600px}.media-features .list{padding:0 var(--page-padding);overflow-x:hidden}.media-features .list ul{margin-right:0}.media-features .list ul li{width:calc((100vw - (var(--page-padding) + var(--grid-m)) * 2)/ 3)}.media-features .list ul li .content{padding:40px 32px}.contact-us .entry .item .content{padding:40px 32px}#press-releases-post .press-release-content #hero{height:250px}#press-releases-post .press-release-content .blog{padding:40px 0 0;width:680px}}@media screen and (min-width:1920px){.press-releases.slider-container .nl-slider .prevBtn{left:var(--page-padding-1920)}.press-releases.slider-container .nl-slider .nextBtn{right:var(--page-padding-1920)}.press-releases .list .list-container{padding-right:var(--page-padding-1920)}.press-releases .list ul{margin-left:var(--page-padding-1920)}.press-releases .list ul li{width:calc((var(--nl-width) - var(--grid-m) * 3)/ 4);min-width:calc((var(--nl-width) - var(--grid-m) * 3)/ 4)}.download-packets .list .divimg,.press-releases .list .divimg{height:240px}.download-packets,.media-features{width:var(--nl-width);margin-left:auto;margin-right:auto}.media-features .list ul li{width:calc((var(--nl-width) - var(--grid-m) * 2)/ 3)}.media-features .list ul li .content{padding:56px 40px}}