var bnstatus = "off";
var intervalCounter;
var mInterval;
const liveTitleText = `LIVE TV`;
const breakingNewsTitleText = `BREAKING NEWS`;
const liveBackground = `bg-cnn_dark`;
const breakingNewsBackground = `bg-cnn_red`;
const embedPage = ["https://www.cnnindonesia.com/tv/embed", "https://www.cnnindonesia.com/video/embed", "https://www.cnnindonesia.com/cnn-breaking/embed"];
// handle pemilu player breaking news
const isPlayerBNPemilu = document.getElementById("pemiluBreakingNewsPlayer") != null;
const isPemiluPage = window.location.pathname == "/nasional/pemilu" 
const isTVPage = window.location.pathname == "/tv"
const breakingNewsElement = document.getElementById("breaking_newsa") != null;

function playThePlayer() {
    if (typeof $("iframe.pauseOnBN")[0] != "undefined") {
        $("iframe.pauseOnBN")[0].contentWindow.detikVideo.vars.player.play();
    }
    if (typeof $("iframe.embed")[0] != "undefined") {
        $("iframe.embed")[0].contentWindow.detikVideo.vars.player.play();
    }
}

function pauseThePlayer() {
    if (typeof $("iframe.pauseOnBN")[0] != "undefined") {
        $("iframe.pauseOnBN")[0].contentWindow.detikVideo.vars.player.pause();
    }
    if (typeof $("iframe.embed")[0] != "undefined") {
        $("iframe.embed")[0].contentWindow.detikVideo.vars.player.pause();
    }
}

window.onload = function () {
    var BreakingNews = {
        run: 
        listen: function () {
            if (window.WebSocket) {
                //connecting to websocket
                var urlWS = "wss://push.cnnindonesia.com/ws/cnnBreakingNews.b1"; //live
                var ws = new WebSocket(urlWS);
                console.info("Connecting to " + urlWS);

                //on opening connection to websocket
                ws.onopen = 

                //on recieving message from websocket
                ws.onmessage = function (me) {
                    console.info("Recieving message from " + urlWS);
                    if (me.data) {
                        var d = JSON.parse(me.data);

                        //set bnstatus
                        bnstatus = d.status;
                        let counterviewStatus = d.counterViews == "on" ? true : false;
                        let counterViewQS = counterviewStatus ? "&counterviews=on" : "";
                        let counterviewAddClass = counterviewStatus ? "pdb-counter" : "";
                        //show breaking news div if status on
                        if (d.status == "on") {
                            // reload page saat halaman BN player pemilu belum terbuka dan breaking news on
                            if (!isPlayerBNPemilu && isPemiluPage) {
                                window.location.reload()
                            }

                            try {
                                stopRefresh();
                            } catch (error) {
                                console.log("error refresh", error);
                            }

                            var contentMeta = document.getElementsByTagName("META")[3].content;
                            console.log(contentMeta);
                            console.info("Breaking News " + d.status);
                            console.info("Breaking News title: " + d.title);
                            console.info("Breaking News layout: " + d.layout);
                            console.info("Breaking News description: " + d.description);
                            console.info("Breaking News landing page: " + d.landingPage);

                            $("#close_lt").click();

                            if (typeof d.sourceIndex != "undefined" && typeof embedPage[d.sourceIndex] != "undefined") {
                                var srcSmil = embedPage[d.sourceIndex];
                            } else {
                                var srcSmil = d.videoSource;
                            }

                            let bgTemplate = liveBackground

                            if (d.layout == "Breaking News") {
                                bgTemplate = breakingNewsBackground
                                try {
                                    if (isTVPage) {
                                        document.getElementById("tvTitleContainer").innerHTML = breakingNewsTitleText;
                                        document.getElementById("tvBackgroundContainer").classList.remove(liveBackground);
                                        document.getElementById("tvBackgroundContainer").classList.add(breakingNewsBackground);
                                    }
                                } catch (e) {
                                    console.log("error", e);
                                }
                            }

                            if (breakingNewsElement && !isPemiluPage) { 
                                $("#breaking_newsa").html(
                                    `<div class="${bgTemplate} py-3 px-4 text-white h-10 text-sm mb-4 relative z-20 ${counterviewAddClass}" id="breaking-news">
                                    <div class="flex [&amp;>p]:text-ellipsis [&amp;>p]:whitespace-nowrap" id="breaking-wrap">
                                        <span class="text-semibold mr-2 mb-2">${d.layout.toUpperCase()} : </span>
                                        <p class="inline-block max-w-[700px] overflow-hidden mr-2">${d.title}</p>
                                        <a aria-label="link description" class="text-white underline" href="${d.landingPage}" dtr-evt="breaking news" dtr-sec="lihat selengkapnya" dtr-act="lihat selengkapnya" onclick="_pt(this)">Selengkapnya</a>
                                        <span class="ml-auto mb-2 flex items-center hover:cursor-pointer" id="breaking-closes" onclick="_pt(this); this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);" dtr-evt="breaking news" dtr-sec="close" dtr-act="close">
                                            <img alt="" class="w-3 h-3" width="24" height="24" src="${iconClose}" loading="lazy" decoding="async" />
                                        </span>
                                    </div>
                                    <div class="breaking-video w-[328px] mt-4 hidden" id="breaking-video">
                                        <div class="ratiobox aspect-w-16 aspect-h-9 ${counterviewAddClass}">
                                            <iframe width="100%" height="330" src="${srcSmil}?smartautoplay=true${counterViewQS}" frameborder="0" allowfullscreen=""></iframe>
                                        </div>
                                    </div>
                                </div>`
                                );
                            }

                        } else {
                            // reload page saat halaman BN player pemilu belum terbuka dan breaking news on
                            if (isPlayerBNPemilu && isPemiluPage) {
                                window.location.reload()
                            }
                            
                            //remove breaking news div if status off
                            console.log("breaking news off");

                            if (breakingNewsElement) { 
                                $("#breaking_newsa").html("");
                            }
                            // set background
                            try {
                                if (isTVPage) {
                                    document.getElementById("tvTitleContainer").innerHTML = liveTitleText;
                                    document.getElementById("tvBackgroundContainer").classList.remove(breakingNewsBackground);
                                    document.getElementById("tvBackgroundContainer").classList.add(liveBackground);   
                                }
                            } catch (e) {
                                console.log("error", e);
                            }
                            // call startRefresh() from refresh.js
                            if ((typeof(isOnWP) == "function" && isOnWP()) && (typeof(isBNOff) == "function" && isBNOff())) {
                                startRefresh(5 * 60 * 1000);
                            }
                        }
                    }

                    if (typeof handleBreakingNews == "function") {
                        handleBreakingNews();
                    }
                };
            }
        },
    };
    BreakingNews.run();
};

//scroll breaking news
// untuk handle di detail video on scroll,
// pause player video ketika ballon bn muncul
// play player video ketika ballon bn menghhilang
$window = $(window);
if (bnstatus == "on") {
    $window.scroll(function () {
        let $body = document.body; //IE 'quirks'
        let $doc = document.documentElement; //IE with doctype
        $doc = $doc.clientHeight ? $doc : $body;

        if ($doc.scrollTop == 0) playThePlayer();

        if ($("#breaking_newsa").hasClass("fixed")) {
            pauseThePlayer();
        } else {
            playThePlayer();
        }
    });
}
