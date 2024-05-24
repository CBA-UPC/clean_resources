<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="referrer" content="no-referrer" />
    <title>Pixel sender</title>
    <script type="text/javascript">
        var mapUrls = {aidataCMURL : "https://x01.aidata.io/0.gif?pid=ADSNIPER&id={UID}", amberdataCMURL : "https://dmg.digitaltarget.ru/1/6700/i/i?i={RND}", onefactorCMURL : "https://track.onef.pro/track/reg/v1?1f_pixel_id=7728474136&internal_id={UID3}", PBD_rtk1 : "https://pix.bumlam.com/sync/rtk1/check", testLoger : "https://log3.bumlam.com/pix/?uid={UID3}&rnd={RND}", weboramaCMURL : "https://redirect.frontend.weborama.fr/rd?url=https%3A%2F%2Fsync.bumlam.com%2F%3Fsrc%3Dwbr1%26uid%3D{WEBO_CID}", weborama_new : "https://redirect-frontend.weborama-tech.ru/rd?url=https%3A%2F%2Fsync.bumlam.com%2F%3Fsrc%3Dwbr_nr%26uid%3D%7BWEtring[key  // If third or later entry with this name
                } else {
                    query_string[key].push(decodeURIComponent(value));
                }
            }
            return query_string;
        }

        function sendPixel(url) {
            var im = new Image;
            im.src = url;
        }

        function decodesafe64 (data2decode) {
            var retdata = data2decode
                .replace(/_/g, '\/')
                .replace(/\-/g, '+')
                .replace(/\*/g, '=');
            return atob(retdata);
        }

        function sendUrl(item,uid,extra2,uid3,cid) {
            if(!item)return;
            if( uid ==='undefined' && item.includes('{UID}')) return;
            if( uid3 ==='undefined' && item.includes('{UID3}')) return;
            var url = item
                .replace('{UID}', uid)
                .replace('{UID3}', uid3)
                .replace('{EXTRA2}', extra2)
                .replace('{CID}', cid)
                .replace('{RND}', Math.random());
            sendPixel(url);
        }
        function modSend(qs) {
            var uid = decodesafe64((qs.uid||'')).split('#')[0];
            var uid3 = decodesafe64((qs.uid||'')).split('#')[0];

            var extra2 = decodesafe64(qs.extra2||'');{
                Object.values(mapUrls).forEach(item => {
                    sendUrl(item,uid,extra2,uid3,cid)
                })
            };

            if(qs.isAllSsp==='true'){
                Object.values(mapUrlsSsp).forEach(item => {
                    sendUrl(item,uid,extra2,uid3,cid)
                })
            };


            var ids = JSON.parse(decodesafe64(qs.ids||'')||'{}');
                     ids.forEach(item => sendUrl(mapUrls[item],uid,extra2,uid3,cid))
            };

            var idsSsp = JSON.parse(decodesafe64(qs.idsSsp||'')||'{}');
            if (Array.isArray(idsSsp) && qs.isAllSsp!=='true') {
                idsSsp.forEach(item => sendUrl(mapUrlsSsp[item],uid,extra2,uid3,cid))
            };


        }

        var query = window.location.search.substring(1);
        var qs = parse_query_string(query);
        modSend(qs);

    </script>
</head>
<body>

</body>
</html>
