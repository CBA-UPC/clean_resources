.loader,
.loader:after {
  border-radius: 50%;
  width: 26px;
  height: 26px;
}
.loader {
  margin: 0;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top: 4px solid rgba(204,0,0, 0.2);
  border-right: 4px solid rgba(204,0,0, 0.2);
  border-bottom: 4px solid rgba(204,0,0, 0.2);
  border-left: 4px solid #cc0000;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: load8 1.1s infinite linear;
  animation: load8 1.1s infinite linear;
}
@-webkit-keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

/**
 * ==============================================
 * Dot Pulse
 * ==============================================
 */
 .stage {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.dot-pulse {
  position: relative;
  left: -9999px;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: #c5c0c0;
  color: #c5c0c0;
  box-shadow: 9999px 0 0 -5px #c5c0c0;
  animation: dotPulse 1.5s infinite linear;
  animation-delay: 0.25s;
}

.dot-pulse::before,
.dot-pulse::after {
  content: "";
  display: inline-block;
  position: absolute;
  top: 0;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: #c5c0c0;
  color: #c5c0c0;
}

.dot-pulse::before {
  box-shadow: 9984px 0 0 -5px #c5c0c0;
  animation: dotPulseBefore 1.5s infinite linear;
  animation-delay: 0s;
}

.dot-pulse::after {
  box-shadow: 10014px 0 0 -5px #c5c0c0;
  animation: dotPulseAfter 1.5s infinite linear;
  animation-delay: 0.5s;
}

@keyframes dotPulseBefore {
  0% {
    box-shadow: 9984px 0 0 -5px #c5c0c0;
  }
  30% {
    box-shadow: 9984px 0 0 2px #c5c0c0;
  }
  60%,
  100% {
    box-shadow: 9984px 0 0 -5px #c5c0c0;
  }
}

@keyframes dotPulse {
  0% {
    box-shadow: 9999px 0 0 -5px #c5c0c0;
  }
  30% {
    box-shadow: 9999px 0 0 2px #c5c0c0;
  }
  60%,
  100% {
    box-shadow: 9999px 0 0 -5px #c5c0c0;
  }
}

@keyframes dotPulseAfter {
  0% {
    box-shadow: 10014px 0 0 -5px #c5c0c0;
  }
  30% {
    box-shadow: 10014px 0 0 2px #c5c0c0;
  }
  60%,
  100% {
    box-shadow: 10014px 0 0 -5px #c5c0c0;
  }
}
>
    <meta name="twitter:site" content="@ziswaf_id" />
    <meta name="twitter:site:id" content="@ziswaf_id" />
    <meta name="twitter:creator" content="@ziswaf_id" />
    <script type="application/ld+json">
        {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "url": "https://www.ziswafctarsa.id",
            "potentialAction": {
            "@type": "SearchAction",
            "target": "https://ziswafctarsa.id/donasi?search={search_term_string}",
            "query-input": "required name=search_term_string"
            }
        }
    </script>
    <script type="application/ld+json">
	    {
	        "@context": "https://schema.org",
	        "@type": "Organization",
	        "name": "ziswafctarsa.id",
	        "legalName" : "Ziswaf",
	        "url": "https://ziswafctarsa.id/",
	        "logo": "ziswaf.png",
	        "foundingDate": "2020",
	        "founders":
	                [{
	                    "@type": "Person",
	                    "name": "ziswafctarsa.id"
	                }],
	        "address": {
	        "@type": "PostalAddress",
	        "streetAddress": "jl. Kapten Tendean",
	        "addressLocality": "Jakarta Selatan",
	        "addressRegion": "DKI Jakarta",
	        "postalCode": "33444",
	        "addressCountry": "Indonesia"
	        },
	        "contactPoint": {
	        "@type": "ContactPoint",
	        "contactType": "customer support",
	        "telephone": "[021-791-77-088]",
	        "email": "kontak@ziswafctarsa.id"
	        },
	        "sameAs": [
	                "https://www.facebook.com/ziswafctarsa.id",
	                "https://twitter.com/ziswaf_id",
	                "https://www.instagram.com/ziswafofficial/"
	                ]
	    }
    </script>
            
    <link rel="stylesheet" href="https://cdn.detik.net.id/ziswaf/css/styles.css?v=20230621v2" media="screen">
    <link rel="stylesheet" href="https://cdn.detik.net.id/ziswaf/css/custom.min.css" media="screen">
    <link rel="stylesheet" href="https://cdn.detik.net.id/ziswaf/css/lazyload.min.css?20221116" media="screen">

    <link rel="apple-touch-icon" sizes="180x180" href="https://akcdn.detik.net.id/ziswaf/logo-ziswaf.png?q=90">
    <link rel="icon" type="image/png" sizes="32x32" href="https://akcdn.detik.net.id/ziswaf/logo-ziswaf.png?q=90">
    <link rel="icon" type="image/png" sizes="16x16" href="https://akcdn.detik.net.id/ziswaf/logo-ziswaf.png?q=90">
    <link rel="manifest" href="https://www.ziswafctarsa.id/site.webmanifest" crossorigin="use-credentials">
    <link rel="mask-icon" href="https://cdn.detik.net.id/ziswaf/favicon/safari-pinned-tab.svg" color="#5bbad5">
    <meta name="msapplication-TileColor" content="#da532c">
    <meta name="theme-color" content="#ffffff">
    <meta name="twitter:card" content="summary_large_image" />
    <script src="https://cdn.detik.net.id/ziswaf/js/gtm.min.js"></script>
    <!-- Google Tag Manager -->
    <script>
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);    
        })(window,document,'script','dataLayer','GTM-MGM43SJ');
    </script>
    <!-- End Google Tag Manager -->
    <script>
        var baseUrl = "https://www.ziswafctarsa.id";
        var fullUrl = "https://www.ziswafctarsa.id";
        var title = "Ziswaf CTARSA - Lembaga Amil Zakat, Infak, Sedekah dan Wakaf";
        var notFound = "https://www.ziswafctarsa.id/404";
        var urlParams = new URLSearchParams(window.location.search);
        var page = urlParams.get('page');
        var stage = 'development';
    </script>
</head>
<body>
<script src="https://cdn.detik.net.id/ziswaf/js/jquery.min.js"></script>
<script defer src="https://cdn.detik.net.id/ziswaf/index.min.js"></script>
<script src="https://cdn.detik.net.id/ziswaf/js/readMoreJS.min.js"></script>
<script src="https://cdn.detik.net.id/ziswaf/js/spin.min.js"></script>
<script defer src="https://cdn.detik.net.id/ziswaf/js/spinner.min.js"></script>
<script defer src="https://cdn.detik.net.id/ziswaf/js/lazyload-web-dev.min.js"></script>

<!-- Google Tag Manager (noscript) -->
<noscript>
    <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MGM43SJ" height="0" width="0" style="display:none;visibility:hidden"></iframe>
</noscript>
    <script>
        stage = 'production';
    </script>
<!-- End Google Tag Manager (noscript) -->

<!-- UPDATE UNTUK LOGO LEBIH TINGGI -->
<style>
    /* STYLE TAMBAHAN UNTUK UPDATE LOGO */
    .logo {
        height: 50px;
    }
    header{
        height: 71px;
    }
</style>
<!-- UPDATE UNTUK LOGO LEBIH TINGGI -->



<div class="container bg-white py-9">
        <header class="fixed top-0 z-50 left-50p translate-x--50p">
            <a href="https://www.ziswafctarsa.id" class="logo"><img src="https://akcdn.detik.net.id/ziswaf/logo-ziswaf.png?q=90&w=200" alt="Logo Ziswaf"></a>
            <input type="checkbox" id="nav-toggle" class="nav-toggle">
            <nav>
                                    <div class="login__cta text-center">
                        <div class="login__text">
                           Masuk / Daftar dengan <strong>MPC</strong><br>
                           untuk memulai transaksi dan kemudahan fitur lainnya
                        </div>
                        <div class="flex my-3 justify-center space-x-2">
                            <a href="https://connect.detik.com/oauth/authorize?clientId=10331&amp;redirectUrl=https%3A%2F%2Fwww.ziswafctarsa.id%2Fcallback%3Fnext%3Dhttps%3A%2F%2Fwww.ziswafctarsa.id&amp;backURL=https%3A%2F%2Fwww.ziswafctarsa.id" class="btn btn--wider btn--white-blue w-ma flex items-center">Masuk</a>
                            <a href="https://connect.detik.com/accounts/register?clientId=10331&amp;redirectUrl=https%3A%2F%2Fwww.ziswafctarsa.id%2Fcallback%3Fnext%3Dhttps%3A%2F%2Fwww.ziswafctarsa.id&amp;backURL=https%3A%2F%2Fwww.ziswafctarsa.id" class="btn btn--wider btn--white-blue w-ma flex items-center">Daftar</a>
                        </div>
                    </div>
                                <ul>
                    <li>
                        <form action="https://www.ziswafctarsa.id/donasi/" method="get" id="form1" class="relative">
                            <input type="text" name="search" class="searchbox w-full" placeholder="Cari Program......">
                            <button type="submit" form="form1" value="Submit" class="searchbox__submit">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M19.1 18.3L15.4 14.5C15.2 14.3 14.9 14.2 14.7 14.2L14 13.5C13.7 13.2 13.4 13.2 13.1 13.5 12.8 13.7 12.8 14.1 13.1 14.4L13.8 15.2C13.8 15.4 13.9 15.7 14.1 15.9L17.8 19.7C17.9 19.9 18.2 20 18.5 20 18.7 20 19 19.9 19 19.7 19.5 19.3 19.5 18.7 19.1 18.3ZM12.4 2.4C11 0.9 9.1 0 7.2 0 5.5 0 3.6 0.7 2.3 2 -0.6 4.8-0.8 9.5 1.9 12.4 3.4 13.9 5.2 14.7 7.2 14.7 9 14.7 10.7 14.1 12.2 12.7 15.1 10 15.2 5.3 12.4 2.4ZM11.2 11.8C10.1 12.9 8.7 13.4 7.2 13.4 5.6 13.4 4.1 12.7 3 11.5 1.9 10.4 1.4 8.8 1.4 7.3 1.5 5.7 2.2 4.2 3.2 3.1 4.3 2 5.8 1.5 7.3 1.5 8.9 1.5 10.4 2.1 11.5 3.4 13.7 5.7 13.6 9.5 11.2 11.8ZM7.5 11.5C7.5 11.9 7.2 12.3 6.8 12.3 6.5 12.3 6.2 11.9 6.2 11.5 6.2 11.2 6.5 10.8 6.8 10.8 7.2 10.8 7.5 11.2 7.5 11.5Z"/></svg>
                            </button>
                        </form>
                    </li>

                    <li><a href="https://www.ziswafctarsa.id/zakat/" onclick="_pt(this, 'burger menu', 'program zakat', 'menu program zakat')">Program Zakat</a></li>
                    <li><a href="https://www.ziswafctarsa.id/sedekah/" onclick="_pt(this, 'burger menu', 'program sedekah', 'menu program sedekah')">Program Sedekah</a></li>
                    <li><a href="https://www.ziswafctarsa.id/wakaf/" onclick="_pt(this, 'burger menu', 'program wakaf', 'menu program wakaf')">Program Wakaf</a></li>
                    <li><a href="https://www.ziswafctarsa.id/zakat/kalkulator" onclick="_pt(this, 'burger menu', 'kalkulator zakat', 'menu program kalkulator zakat')">Kalkulator Zakat</a></li>
                    <li><a href="https://www.ziswafctarsa.id/riwayat-transaksi" onclick="_pt(this, 'burger menu', 'riwayat transaksi', 'menu program riwayat transaksi')">Riwayat Transaksi</a></li>
                    <li><a href="https://www.ziswafctarsa.id/tentang-kami" onclick="_pt(this, 'burger menu', 'tentang kami', 'menu tentang kami')">Tentang Kami</a></li>
                    <li><a href="https://www.ziswafctarsa.id/hubungi-kami" onclick="_pt(this, 'burger menu', 'hubungi kami', 'menu hubungi kami')">Hubungi Kami</a></li>
                                    </ul>
            </nav>
            <label for="nav-toggle" class="nav-toggle-label">
                <span></span>
            </label>
        </header>
        <style>
    .noheader-notif .notif {
        margin-top:0;
        margin-bottom:0;
    }    
</style>

<script>
    const notification = document.querySelector('.notif');
    const closeIcon = document.querySelector('.icon-close');

    closeIcon.addEventListener('click', () => {
        notification.style.height = `${notification.offsetHeight}px`;
        notification.style.transition = 'height 0.3s ease';
        notification.offsetHeight; // force a reflow
        notification.style.height = '0';
        notification.style.padding = '0 10px';

        // Delay setting display to none by 0.5 seconds
        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.display = 'none';
        }, 320);

    });
</script>    </div>
<div class="container bg-white">
<div class="main-carousel">
                <div class="carousel-cell w-full">
            <a href="https://www.ziswafctarsa.id/zakat/" class="block" onclick="_pt(this, 'banner', 'banner', 'banner donasi')">
                <div class="loading loading-frame-home-banner">
                    <img data-src="https://akcdn.detik.net.id/ziswaf/20230416163436_1681637676.webp?q=90&amp;w=580" alt="Ziswaf CTARSA TOP" class="lazyload w-full">
                </div>
            </a>
        </div>
            <div class="carousel-cell w-full">
            <a href="" class="block" onclick="_pt(this, 'banner', 'banner', 'banner donasi')">
                <div class="loading loading-frame-home-banner">
                    <img data-src="https://akcdn.detik.net.id/ziswaf/20230912122140_1694496100.webp?q=90&amp;w=580" alt="Report Pendistribusian perbulan juli" class="lazyload w-full">
                </div>
            </a>
        </div>
            <div class="carousel-cell w-full">
            <a href="https://www.ziswafctarsa.id/donasi/298/membasuh-luka-palestina" class="block" onclick="_pt(this, 'banner', 'banner', 'banner donasi')">
                <div class="loading loading-frame-home-banner">
                    <img data-src="https://akcdn.detik.net.id/ziswaf/20231110140904_1699600144.webp?q=90&amp;w=580" alt="MEMBASUH LUKA PALESTINA" class="lazyload w-full">
                </div>
            </a>
        </div>
            <div class="carousel-cell w-full">
            <a href="https://www.ziswafctarsa.id/donasi/279/zakat-penghasilan-dan-harta" class="block" onclick="_pt(this, 'banner', 'banner', 'banner donasi')">
                <div class="loading loading-frame-home-banner">
                    <img data-src="https://akcdn.detik.net.id/ziswaf/20231110141143_1699600303.webp?q=90&amp;w=580" alt="Zakat Penghasilan dan Harta" class="lazyload w-full">
                </div>
            </a>
        </div>
            <div class="carousel-cell w-full">
            <a href="https://www.ziswafctarsa.id/donasi/289/wakaf-mushaf-al-quran" class="block" onclick="_pt(this, 'banner', 'banner', 'banner donasi')">
                <div class="loading loading-frame-home-banner">
                    <img data-src="https://akcdn.detik.net.id/ziswaf/20231110141937_1699600777.webp?q=90&amp;w=580" alt="Wakaf Mushaf Al Qur&#039;an" class="lazyload w-full">
                </div>
            </a>
        </div>
        </div>

<section id="card" class="mx-4 my-6">
    <style>
  .wp-icon-cta-button-card{
    height:72px !important;
    width:auto !important;
  }
  .card-index .area-button {
    gap:10px !important;
  }
  @media    only screen and (max-width: 450px) {
    .card-index .area-button {
      gap:3vw !important;
    }
    .wp-icon-cta-button-card{
      height:8vh !important;
      width:auto !important;
    }
    .area-button > a{
      max-width: 22vw !important;
    }
  }
</style>
<div class="card card-index">
    <h3 class="card__title card__title--small">
      <strong>Sudah Beramal Hari Ini?</strong> 
    </h3>
    <p class="card__text" style="text-align:center;!important;">
    Tunaikan Zakat, Infak, Sedekah, Wakaf, dan Dana Sosial Keagamaan Lainnya melalui <a href="https://www.ziswafctarsa.id/tentang-kami">ZISWAF CTARSA.</a>
    </p>
    <!-- <a href="#" class="btn btn--blue w-80p place-self-center">Mulai Donasi</a> -->
    <div class="area-button">
      <a href="https://www.ziswafctarsa.id/zakat/"> <img src="https://akcdn.detik.net.id/ziswaf/1681716781-icon-zakat.png?q=90" class="wp-icon-cta-button-card" onclick="_pt(this, 'button', 'zakat', 'button zakat')" alt="">Zakat</a>
      <a href="https://www.ziswafctarsa.id/sedekah/"> <img src="https://akcdn.detik.net.id/ziswaf/1681715322-icon-sedekah.png?q=90" class="wp-icon-cta-button-card" onclick="_pt(this, 'button', 'zakat', 'button sedekah')" alt="">Sedekah</a>
      <a href="https://www.ziswafctarsa.id/wakaf/"> <img src="https://akcdn.detik.net.id/ziswaf/1681715323-icon-wakaf.png?q=90" class="wp-icon-cta-button-card" onclick="_pt(this, 'button', 'zakat', 'button wakaf')" alt="">Wakaf</a>
    </div>
</div>

</section>

<section id="donation-category" class="mx-4 my-6">
    <div class="box" use-redis="false">
    <div class="box__title">
        <h2>Program ZISWAF CTARSA</h2>
    </div>
                                <div class="list-articles relative overflow-hidden">
                <div class="list-articles__section-title">
                    Zakat
                </div>
                <div class="list-articles--scroll mt-5 p-1">
                                        <div class="list-articles__item">
                        <a href="/donasi/290/zakat-perniagaan" class="flex flex-col space-y-3">
                            <div class="loading loading-frame-home">
                                <img data-src=" https://akcdn.detik.net.id/ziswaf/thumbnail_zakatperniagaan_1681639330.webp?q=90&amp;w=260" alt="Zakat Perniagaan" class="lazyload list-articles__image">
                            </div>
                            <h2 class="list-articles__title px-1.5">Zakat Perniagaan</h2>
                            <div class="list-article__progress px-1.5">
                                <div class="progress">
                                                                        <div class="progress-bar" role="progressbar" aria-valuenow="0.0201" aria-valuemin="0" aria-valuemax="100" style="width:0.0201%">
                                        <span class="sr-only">0.0201% Complete</span>
                                    </div>
                                </div>
                            </div>
                            <div class="list-articles__donation px-1.5">
                                <span class="block">Terkumpul</span>
                        Rp 20.100
                            </div>
                        </a>
                    </div>
                                        <div class="list-articles__item">
                        <a href="/donasi/279/zakat-penghasilan-dan-harta" class="flex flex-col space-y-3">
                            <div class="loading loading-frame-home">
                                <img data-src=" https://akcdn.detik.net.id/ziswaf/thumbnail_zakatpenghasilandanharta_1699519606.webp?q=90&amp;w=260" alt="Zakat Penghasilan dan Harta" class="lazyload list-articles__image">
                            </div>
                            <h2 class="list-articles__title px-1.5">Zakat Penghasilan dan Harta</h2>
                            <div class="list-article__progress px-1.5">
                                <div class="progress">
                                                                        <div class="progress-bar" role="progressbar" aria-valuenow="69.631881" aria-valuemin="0" aria-valuemax="100" style="width:69.631881%">
                                        <span class="sr-only">69.631881% Complete</span>
                                    </div>
                                </div>
                            </div>
                            <div class="list-articles__donation px-1.5">
                                <span class="block">Terkumpul</span>
                        Rp 69.631.881
                            </div>
                        </a>
                    </div>
                                        <div class="list-articles__item">
                        <a href="/donasi/285/zakat-peternakan" class="flex flex-col space-y-3">
                            <div class="loading loading-frame-home">
                                <img data-src=" https://akcdn.detik.net.id/ziswaf/thumbnail_zakatpeternakan_1681638522.webp?q=90&amp;w=260" alt="Zakat Peternakan" class="lazyload list-articles__image">
                            </div>
                            <h2 class="list-articles__title px-1.5">Zakat Peternakan</h2>
                            <div class="list-article__progress px-1.5">
                                <div class="progress">
                                                                        <div class="progress-bar" role="progressbar" aria-valuenow="0.011261" aria-valuemin="0" aria-valuemax="100" style="width:0.011261%">
                                        <span class="sr-only">0.011261% Complete</span>
                                    </div>
                                </div>
                            </div>
                            <div class="list-articles__donation px-1.5">
                                <span class="block">Terkumpul</span>
                        Rp 11.261
                            </div>
                        </a>
                    </div>
                                        <div class="list-articles__item">
                        <a href="/donasi/282/zakat-pertanian" class="flex flex-col space-y-3">
                            <div class="loading loading-frame-home">
                                <img data-src=" https://akcdn.detik.net.id/ziswaf/thumbnail_zakatpertanian_1681638179.webp?q=90&amp;w=260" alt="Zakat Pertanian" class="lazyload list-articles__image">
                            </div>
                            <h2 class="list-articles__title px-1.5">Zakat Pertanian</h2>
                            <div class="list-article__progress px-1.5">
                                <div class="progress">
                                                                        <div class="progress-bar" role="progressbar" aria-valuenow="0.0141" aria-valuemin="0" aria-valuemax="100" style="width:0.0141%">
                                        <span class="sr-only">0.0141% Complete</span>
                                    </div>
                                </div>
                            </div>
                            <div class="list-articles__donation px-1.5">
                                <span class="block">Terkumpul</span>
                        Rp 14.100
                            </div>
                        </a>
                    </div>
                                        <div class="list-articles__item">
                        <a href="/donasi/291/zakat-pertambangan" class="flex flex-col space-y-3">
                            <div class="loading loading-frame-home">
                                <img data-src=" https://akcdn.detik.net.id/ziswaf/thumbnail_zakatpertambangan_1681639455.webp?q=90&amp;w=260" alt="Zakat Pertambangan" class="lazyload list-articles__image">
                            </div>
                            <h2 class="list-articles__title px-1.5">Zakat Pertambangan</h2>
                            <div class="list-article__progress px-1.5">
                                <div class="progress">
                                                                        <div class="progress-bar" role="progressbar" aria-valuenow="0.01" aria-valuemin="0" aria-valuemax="100" style="width:0.01%">
                                        <span class="sr-only">0.01% Complete</span>
                                    </div>
                                </div>
                            </div>
                            <div class="list-articles__donation px-1.5">
                                <span class="block">Terkumpul</span>
                        Rp 10.000
                            </div>
                        </a>
                    </div>
                                    </div>
            </div>
            <br>
                                        <div class="list-articles relative overflow-hidden">
                <div class="list-articles__section-title">
                    Sedekah
                </div>
                <div class="list-articles--scroll mt-5 p-1">
                                        <div class="list-articles__item">
                        <a href="/donasi/298/membasuh-luka-palestina" class="flex flex-col space-y-3">
                            <div class="loading loading-frame-home">
                                <img data-src=" https://akcdn.detik.net.id/ziswaf/thumbnail_membasuhlukapalestina_1699599481.webp?q=90&amp;w=260" alt="MEMBASUH LUKA PALESTINA" class="lazyload list-articles__image">
                            </div>
                            <h2 class="list-articles__title px-1.5">MEMBASUH LUKA PALESTINA</h2>
                            <div class="list-article__progress px-1.5">
                                <div class="progress">
                                                                        <div class="progress-bar" role="progressbar" aria-valuenow="0.008" aria-valuemin="0" aria-valuemax="100" style="width:0.008%">
                                        <span class="sr-only">0.008% Complete</span>
                                    </div>
                                </div>
                            </div>
                            <div class="list-articles__donation px-1.5">
                                <span class="block">Terkumpul</span>
                        Rp 40.000
                            </div>
                        </a>
                    </div>
                                        <div class="list-articles__item">
                        <a href="/donasi/286/sedekah-untuk-penderita-katarak" class="flex flex-col space-y-3">
                            <div class="loading loading-frame-home">
                                <img data-src=" https://akcdn.detik.net.id/ziswaf/thumbnail_sedekahuntukpenderitakatarak_1681638522.webp?q=90&amp;w=260" alt="Sedekah Untuk Penderita Katarak" class="lazyload list-articles__image">
                            </div>
                            <h2 class="list-articles__title px-1.5">Sedekah Untuk Penderita Katarak</h2>
                            <div class="list-article__progress px-1.5">
                                <div class="progress">
                                                                        <div class="progress-bar" role="progressbar" aria-valuenow="0.030001333333333" aria-valuemin="0" aria-valuemax="100" style="width:0.030001333333333%">
                                        <span class="sr-only">0.030001333333333% Complete</span>
                                    </div>
                                </div>
                            </div>
                            <div class="list-articles__donation px-1.5">
                                <span class="block">Terkumpul</span>
                        Rp 90.004
                            </div>
                        </a>
                    </div>
                                        <div class="list-articles__item">
                        <a href="/donasi/280/sedekah-untuk-sesama" class="flex flex-col space-y-3">
                            <div class="loading loading-frame-home">
                                <img data-src=" https://akcdn.detik.net.id/ziswaf/thumbnail_sedekahuntuksesama_1681637943.webp?q=90&amp;w=260" alt="Sedekah Untuk Sesama" class="lazyload list-articles__image">
                            </div>
                            <h2 class="list-articles__title px-1.5">Sedekah Untuk Sesama</h2>
                            <div class="list-article__progress px-1.5">
                                <div class="progress">
                                                                        <div class="progress-bar" role="progressbar" aria-valuenow="2.9772" aria-valuemin="0" aria-valuemax="100" style="width:2.9772%">
                                        <span class="sr-only">2.9772% Complete</span>
                                    </div>
                                </div>
                            </div>
                            <div class="list-articles__donation px-1.5">
                                <span class="block">Terkumpul</span>
                        Rp 2.977.200
                            </div>
                        </a>
                    </div>
                                    </div>
            </div>
            <br>
                                        <div class="list-articles relative overflow-hidden">
                <div class="list-articles__section-title">
                    Wakaf
                </div>
                <div class="list-articles--scroll mt-5 p-1">
                                        <div class="list-articles__item">
                        <a href="/donasi/287/wakaf-uang" class="flex flex-col space-y-3">
                            <div class="loading loading-frame-home">
                                <img data-src=" https://akcdn.detik.net.id/ziswaf/thumbnail_wakafuang_1699600909.webp?q=90&amp;w=260" alt="Wakaf Uang" class="lazyload list-articles__image">
                            </div>
                            <h2 class="list-articles__title px-1.5">Wakaf Uang</h2>
                            <div class="list-article__progress px-1.5">
                                <div class="progress">
                                                                        <div class="progress-bar" role="progressbar" aria-valuenow="0.9213" aria-valuemin="0" aria-valuemax="100" style="width:0.9213%">
                                        <span class="sr-only">0.9213% Complete</span>
                                    </div>
                                </div>
                            </div>
                            <div class="list-articles__donation px-1.5">
                                <span class="block">Terkumpul</span>
                        Rp 921.300
                            </div>
                        </a>
                    </div>
                                        <div class="list-articles__item">
                        <a href="/donasi/289/wakaf-mushaf-al-quran" class="flex flex-col space-y-3">
                            <div class="loading loading-frame-home">
                                <img data-src=" https://akcdn.detik.net.id/ziswaf/thumbnail_wakafmushafal-quran_1699600857.webp?q=90&amp;w=260" alt="Wakaf Mushaf Al-Qur&#039;an" class="lazyload list-articles__image">
                            </div>
                            <h2 class="list-articles__title px-1.5">Wakaf Mushaf Al-Qur&#039;an</h2>
                            <div class="list-article__progress px-1.5">
                                <div class="progress">
                                                                        <div class="progress-bar" role="progressbar" aria-valuenow="1.8337" aria-valuemin="0" aria-valuemax="100" style="width:1.8337%">
                                        <span class="sr-only">1.8337% Complete</span>
                                    </div>
                                </div>
                            </div>
                            <div class="list-articles__donation px-1.5">
                                <span class="block">Terkumpul</span>
                        Rp 550.110
                            </div>
                        </a>
                    </div>
                                    </div>
            </div>
            <br>
            </div>


</section>


<section id="about" class="mx-4 my-6">
    <div class="box pb-6">
    <div class="box__title mb-5">
        <h2 class="m-0 p-0">Tentang Kami</h2>
    </div>
    <div class="about-us flex flex-col space-y-6">
        
        <div>
            <div class="about-us__text">
                Lembaga Amil Zakat, Infak, Sedekah, dan Wakaf (ZISWAF) CTARSA adalah Lembaga yang bergerak pada bidang pengumpulan Dana Sosial Islam berada di bawah naungan CTARSA FOUNDATION. Lembaga ZISWAF CTARSA menjadi Lembaga Amil Zakat (LAZ) Nasional berdasarkan Keputusan Menteri Agama Republik Indonesia Nomor 811 Tahun 2022 dan juga sudah terdaftar sebagai Nadzir Wakaf Uang dari Badan Wakaf Indonesia (BWI) dengan Nomor 3.3.00302.
            </div>
        </div>
        <div>
            <div class="about-us__text">
                Pembayaran zakat melalui Ziswaf CTARSA tidak dipotong hak amil zakat (12,5%) karena seluruh biaya operasional ZISWAF CTARSA ditanggung oleh grup perusahaan CT Corp.
            </div>
        </div>
    </div>
</div>
<div class="flex">
        <a href="https://www.ziswafctarsa.id/tentang-kami" onclick="_pt(this, 'button', 'learn more', 'button learn more')" class="btn btn--light-blue w-max m-auto flex items-center">Selengkapnya <span class="icon-chevron-thin-right ml-3"></span></a>
    </div>

</section>

<section id="donation" class="mx-4 my-6">
    <div id="boxDonation" class="box">
    <div class="box__title mb-5">
        <h2 class="m-0 p-0">Sahabat Dermawan <span id="countDonation"></span></h2>
    </div>
    <div id="donationComponent" class="donatur flex flex-col space-y-2">
                <div class="donatur__item flex flex-row space-x-6" use-redis="false">
            <img src="https://www.ziswafctarsa.id/images/default-user.png" alt="Default User" class="donatur__image">
            <div class="donatur__text flex flex-col space-y-1.5">
                <div class="donatur__name">
                                            Hamba Allah
                                    </div>
                                <div class="donatur__activity">15 hari yang lalu</div>
                <div class="donatur__donation"><span></span> Rp 10.000</div>
                <div class="donatur__msg"></div>
            </div>
        </div>
                <div class="donatur__item flex flex-row space-x-6" use-redis="false">
            <img src="https://www.ziswafctarsa.id/images/default-user.png" alt="Default User" class="donatur__image">
            <div class="donatur__text flex flex-col space-y-1.5">
                <div class="donatur__name">
                                            Hamba Allah
                                    </div>
                                <div class="donatur__activity">22 hari yang lalu</div>
                <div class="donatur__donation"><span></span> Rp 250.000</div>
                <div class="donatur__msg"></div>
            </div>
        </div>
                <div class="donatur__item flex flex-row space-x-6" use-redis="false">
            <img src="https://www.ziswafctarsa.id/images/default-user.png" alt="Default User" class="donatur__image">
            <div class="donatur__text flex flex-col space-y-1.5">
                <div class="donatur__name">
                                            S*********
                                    </div>
                                <div class="donatur__activity">24 hari yang lalu</div>
                <div class="donatur__donation"><span></span> Rp 2.516.000</div>
                <div class="donatur__msg"></div>
            </div>
        </div>
                <div class="donatur__item flex flex-row space-x-6" use-redis="false">
            <img src="https://www.ziswafctarsa.id/images/default-user.png" alt="Default User" class="donatur__image">
            <div class="donatur__text flex flex-col space-y-1.5">
                <div class="donatur__name">
                                            P*********a Haryanto
                                    </div>
                                <div class="donatur__activity">27 hari yang lalu</div>
                <div class="donatur__donation"><span></span> Rp 100.000</div>
                <div class="donatur__msg"></div>
            </div>
        </div>
                <div class="donatur__item flex flex-row space-x-6" use-redis="false">
            <img src="https://www.ziswafctarsa.id/images/default-user.png" alt="Default User" class="donatur__image">
            <div class="donatur__text flex flex-col space-y-1.5">
                <div class="donatur__name">
                                            P*********A HARYANTO
                                    </div>
                                <div class="donatur__activity">1 bulan yang lalu</div>
                <div class="donatur__donation"><span></span> Rp 100.000</div>
                <div class="donatur__msg"></div>
            </div>
        </div>
        


    </div>
    <div class="flex mt-6 btn-container">
        <!-- <a href="#" class="btn btn--light-blue w-max m-auto flex items-center">Lihat Lebih Banyak <span class="icon-chevron-thin-down ml-3"></span></a> -->
        <label id="loadMoreDonation" for="donatur-toggle" class="btn btn--light-blue w-max m-auto flex items-center playSpin" data-spin="blue" data-spin-id="D1">
            Lihat Lebih Banyak <span class="icon-chevron-thin-down ml-3"></span>
        </label>
        <label id="loadMoreClose" for="donatur-toggle" class="btn btn--light-blue w-max m-auto flex items-center" style="display: none;">
            Tutup <span class="icon-chevron-thin-down ml-3"></span>
        </label>
    </div>

    <style>
        .geeks {
            all:unset;
        }
    </style>
    <script>
        playSpin();
        var countDonation = "364";
        $('#countDonation').html('('+countDonation+')');

        $('#loadMoreClose').hide();
        $('#loadMoreDonation').on('click', function () {
            getDonationContinue();
        });
        function getDonationContinue(begin=null){

            if(begin){
                startDonation = 0;
                $('#donationComponent').empty();
            }

            var url = "https://www.ziswafctarsa.id"+"/component/donation-continue?start="+startDonation+"&type="+type+"&type_campaign=";
            if (typeof id !== 'undefined') {
                url += "&id="+id;
            }
            $.ajax({
                url: url,
                cache: true,
                success: function (html) {
                    if(!html){
                        $('#loadMoreDonation').hide();
                        $('#loadMoreClose').show();
                        return false;
                    }

                    startDonation = parseInt(startDonation) + parseInt(5);
                    $("#donationComponent").append(html)
                    $('.circle-spin').remove();
                    $('#loadMoreDonation').removeAttr("style");


                }
            });

        }
        $('#loadMoreClose').on('click', function () {
            getDonationContinue(true);
            $('#loadMoreClose').hide();
            $('#loadMoreDonation').show();
            $('.circle-spin').remove();
            $('#loadMoreDonation').removeAttr("style");
            $('html, body').animate({
                scrollTop: $("#boxDonation").offset().top
            }, 2000);
        });
    </script>
</div>

</section>



<script>
    var type= 'home';
    var startDonation = 5;
</script>
<script src="https://cdn.detik.net.id/ziswaf/js/carousels.min.js"></script>
<script src="https://cdn.detik.net.id/ziswaf/js/tiny-slider.js"></script>


<script>
 let slider = tns({
        container: '.main-carousel',
        items: 1,
        slideBy: 'page',
        autoplay: true,
        "mouseDrag": true,
        controls:false,
        autoplayButtonOutput:false,
        loop:true,
        nav:true,
        gutter:10,
        mouseDrag:true,
        // autoplayTimeout:100,
        // speed:3000
    });

</script>






<!-- JavaScript -->

<section class="py-6">
    <footer class="footer px-6 py-3">
        <div class="footer__logo py-3">
            <a href="/"><img src="https://akcdn.detik.net.id/ziswaf/logo-ziswaf.png?q=90&w=500" style="height:96px" alt="Logo Ziswaf"></a>
        </div>
        <div class="footer__sosmed mt-4">
            <div class="mb-2">Connect With Us</div>
            <a href="https://web.facebook.com/profile.php?id=100085365410066&_rdc=1&_rdr" target="_blank" rel="noopener" class="footer__fb"><span class="icon-facebook"></span></a>
            <a href="https://twitter.com/ziswafctarsa" target="_blank" rel="noopener" class="footer__tw"><span class="icon-twitter"></span></a>
            <a href="https://www.instagram.com/ziswafctarsa.id/" target="_blank" rel="noopener"  class="footer__ig"><span class="icon-instagram"></span></a>
            <a href="https://www.tiktok.com/@ziswafctarsa" target="_blank" rel="noopener" class="footer__tiktok"><span class="ic-tiktok"><img width="24" height="24" src="https://akcdn.detik.net.id/ziswaf/icon-tiktok.png?q=90&w=24" alt=""></span></a>
            <a href="https://www.youtube.com/channel/UCXMayke1UDsFuNg59knqbSg/about" target="_blank" rel="noopener"  class="footer__yt"><span class="icon-youtube"></span></a>
            <a href="https://www.linkedin.com/in/ziswafctarsa/" target="_blank" rel="noopener"  class="footer__in"><span class="icon-linkedin"></span></a>

            <style>
                a.disabled {
                    pointer-events: none;
                    cursor: default;
                }
            </style>

        </div>
        <div class="footer__nav flex flex-wrap mt-4">
            <a href="https://www.ziswafctarsa.id/tentang-kami">Tentang Kami</a>


            <a href="https://www.ziswafctarsa.id/hubungi-kami">Hubungi Kami</a>



        </div>
        <div class="footer__copy mt-4">
            <span>Copyright © 2024</span> All Rights Reserved. Developed by detiknetwork
        </div>
    </footer>
</section>
</div>
</body>
</html>
