function handleAdsController() {
    $(".close_tbot").click(function () {
        $("#bottom_banner").remove();
    });

    $("#balloon_close").click(function () {
        $("#balloon").remove();
    });

    $(".close_tb").click(;

    let topAdsScroll = function () {
        let y = window.scrollY;

        const topAds = document.querySelector(".top_banner");
        const topAdsHeight = topAds ? topAds.clientHeight : 0;

        const leaderboardAds = document.getElementById("leaderboard");
        const leaderboardAdsHeight = leaderboardAds ? leaderboardAds.clientHeight : 0;

        let scrollTriger = topAdsHeight + leaderboardAdsHeight;

        let topBanner = document.querySelector(".top_banner");
        if (topBanner) {
            if (y >= scrollTriger) {
                topBanner.classList.add("top-[88px]");
            } else {
                topBanner.classList.remove("top-[88px]");
            }
        }
    };

    window.addEventListener("scroll", topAdsScroll);

    $(".bill_banner_close").click(function () {
        $(".bb_show").slideUp(100);
        $(".bb_hide").show();
    });

    $(".bb_hide").click(;

    const topBannerAds = document.getElementById("top_banner");
    const skyBanner = document.querySelector(".skybanner_container");
    if (topBannerAds && skyBanner) {
        skyBanner.classList.toggle("top-[135px]");
    }
}

function addClass(el, className) {
    var el = document.querySelectorAll(el);
    for (i = 0; i < el.length; i++) {
        if (el.classList) {
            el[i].classList.add(className);
        } else {
            el[i].className += " " + className;
        }
    }
}

function removeClass(el, className) {
    var el = document.querySelectorAll(el);
    for (i = 0; i < el.length; i++) {
        if (el[i].classList) {
            el[i].classList.remove(className);
        } else {
            el[i].className = el.className.replace(new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"), " ");
        }
    }
}

function handleBreakingNews() {
    const breakingNews = document.getElementById("breaking-news");
    if (breakingNews) {
        ballonAdsHandler();
        window.addEventListener("scroll", function () {
            const element = document.querySelector(".substrig");
            const breakingClose = document.getElementById("breaking-closes");
            const breakingWrap = document.getElementById("breaking-wrap");
            const breakingVid = document.getElementById("breaking-video");
            const position = element.getBoundingClientRect();
            // checking whether fully visible
            if (position.top < window.innerHeight && position.bottom >= 0) {
                if (breakingVid) {
                    breakingVid.classList.add("hidden");
                }

                if (breakingWrap) {
                    breakingWrap.classList.remove("flex-col", "[&>p]:mb-2");
                    breakingWrap.classList.add("[&>p]:text-ellipsis", "[&>p]:whitespace-nowrap");
                }

                if (breakingClose) {
                    breakingClose.classList.remove("absolute", "right-3", "top-3");
                }

                if (breakingNews) {
                    breakingNews.classList.remove("fixed", "bottom-[50px]", "right-0", "z-50", "w-[360px]");
                    breakingNews.classList.add("h-10", "relative", "z-20");
                }
            } else {
                if (breakingVid) {
                    breakingVid.classList.remove("hidden");
                }

                if (breakingWrap) {
                    breakingWrap.classList.add("flex-col", "[&>p]:mb-2");
                    breakingWrap.classList.remove("[&>p]:text-ellipsis", "[&>p]:whitespace-nowrap");
                }

                if (breakingClose) {
                    breakingClose.classList.add("absolute", "right-3", "top-3");
                }

                if (breakingNews) {
                    breakingNews.classList.remove("h-10", "relative", "z-20");
                    breakingNews.classList.add("fixed", "bottom-[50px]", "right-0", "z-50", "w-[360px]");
                }
            }
        });
    }
}

$(;

function ballonAdsHandler () {
    const ballonAds = document.querySelector(".balloon")
    
    if (ballonAds) {
        ballonAds.classList.add("left-0", "!right-[inherit]", "!bottom-[50px]");
    
        const tvFloat = document.getElementById("livetv-float");
    
        if (tvFloat) {
            tvFloat.classList.add("!bottom-[285px]");
        }
    }
}

