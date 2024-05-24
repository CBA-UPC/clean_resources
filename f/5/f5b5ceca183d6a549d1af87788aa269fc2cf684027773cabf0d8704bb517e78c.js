
if(typeof(tritonIdSync) != "object" || typeof(tritonIdSync.load_pixel) != "function") {
    var tritonIdSync = {
        load_pixel: function(src) {
            var img;
            if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)){
                img = new Image();
            } else {
                img = document.createElement('img');
            }
            img.src = src;
            img.width = 0;
            img.height = 0;
            img.className = "triton-pixel";
            document.body.appendChild(img);
        },
        load_script:     }
}
    
tritonIdSync.load_pixel("https://ib.adnxs.com/getuid?https://yield-op-idsync.live.streamtheworld.com/pixel.gif?partner=an&uid=$UID&pubId=38083");
tritonIdSync.load_pixel("https://nodeny.targetspot.com/callback/uuid?https://yield-op-idsync.live.streamtheworld.com/pixel.gif?partner=ts&uid=$UID&pubId=38083");
tritonIdSync.load_pixel("https://x.bidswitch.net/sync?ssp=triton&stn=ADTONOS");
tritonIdSync.load_pixel("https://ums.acuityplatform.com/tum?umid=133&rurl=https%3A%2F%2Fyield-op-idsync.live.streamtheworld.com%2Fpixel.gif%3Fpartner%3Dacu%26uid%3D___AUID___%26pubId%3D38083");
tritonIdSync.load_pixel("https://sync.mathtag.com/sync/img?mt_exid=70&redir=https%3A%2F%2Fyield-op-idsync.live.streamtheworld.com%2Fpixel.gif%3Fpartner%3Dmm%26uid%3D%5BMM_UUID%5D%26pubId%3D38083");
tritonIdSync.load_pixel("https://pixel-sync.sitescout.com/dmp/pixelSync?nid=107&redir=https%3A%2F%2Fyield-op-idsync.live.streamtheworld.com%2Fpixel.gif%3Fpartner%3Dcto%26uid%3D%7BuserId%7D%26pubId%3D38083");
tritonIdSync.load_pixel("https://cm.g.doubleclick.net/pixel?google_nid=triton&google_sc&google_cm&stn=ADTONOS");
tritonIdSync.load_pixel("https://ssbsync.smartadserver.com/api/sync?callerId=85");
tritonIdSync.load_pixel("https://ad.turn.com/r/cs?pid=58&redir=https%3A%2F%2Fyield-op-idsync.live.streamtheworld.com%2Fpixel.gif%3Fpartner%3Damb%26uid%3D%23USER_ID%23%26pubId%3D38083");
tritonIdSync.load_pixel("https://sync.adotmob.com/cookie/triton?r=https%3A%2F%2Fyield-op-idsync.live.streamtheworld.com%2Fpixel.gif%3Fpartner%3Ddot%26uid%3D%7Bamob_user_id%7D%26pubId%3D38083");
