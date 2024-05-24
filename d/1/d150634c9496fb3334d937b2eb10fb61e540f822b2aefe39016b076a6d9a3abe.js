<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <link href="//static.javhdhello.com/h5/files/css/style.css" rel="stylesheet">
    <style>
        .container:hover .play {
            display: block !important;
        }
    </style>
    <script>
        // Options
        var targetUrl;
        var matches = location.search.match(/[\?\&]targetUrl\=([^^\&]+)/i);
        if (matches) {
            targetUrl = decodeURIComponen       function go(cms_id) {
            var url = targetUrl;
            try {
                var delim = url.indexOf('?') !== -1 ? '&' : '?';
                if (!Date.now) {
                    Date.now = function now() {
                        return new Date().getTime();
                    };
                }
                var uts = Date.now();
                if (uts) {
                    url += delim + 'uts=' + uts + '&cms_id=' + cms_id;
                }
            } catch (err) {
            }

            window.open(url);
        }

        const isMobile = ('ontouchstart' in document.documentElement && navigator.userAgent.match(/Mobi/)) || /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) || /Android|webOS|iPhone|iPad|iPod|BlackBer {
            const videoPlayer = document.querySelector('#video-1');
            if (!videoPlayer) return
            const promise = videoPlayer.play()
            if (promise !== undefined) {
             promise
               .then(() => {
                 // Autoplay started
               })
               .catch((error) => {
                 // Autoplay was prevented.
                 videoPlayer.muted = true
                 videoPlayer.play()
               })
             }
        }
        document.addEventListener('DOMContentLoaded', () => {
           const videoSrc =  isMobile ? '//static.javhdhello.com/h5/files/video/7473-17547-728x90.low.mp4'  :  '//static.javhdhello.com/h5/files/video/7473-17547-728x90.medium.mp4';
           const videoPlayer = document.querySelector('#video-1');

           videoPlayer.src = videoSrc;

           videoPlay();
        })
    </script>
</head>
<body>
<div class="container" onclick="go(17547);">
    <img src="//static.javhdhello.com/h5/files/overlay/1605-overlay-preview.png" class="overlay-preview" style="position: absolute; z-index: 1; left:0px; top: 0px;">
    <img src="//static.javhdhello.com/h5/files/overlay/1605-overlay.png" class="overlay" style="position: absolute; z-index: 99999; left:0px; top: 0px;">
    <img class="play" src="//static.javhdhello.com/h5/files/button/19-button.png" style="position: absolute; z-index: 99998; left: 0px; top: 0px; display: none;">
    <div class="video-container" id="video-container">
        <div class="video-js" style="width: 728px; height: 90px;">
            <video id="video-1" class="vjs-tech" loop muted preload autoplay playsinline width="728" height="auto" ></video>
        </div>
    </div>
</div>
<a href="https://javhd.com" style="position: absolute; z-index: -10; font-size: 0; color: transparent;">JAV XXX</a>
</body>
</html>