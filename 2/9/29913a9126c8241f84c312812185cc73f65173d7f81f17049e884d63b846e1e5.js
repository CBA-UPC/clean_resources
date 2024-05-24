const win_loc = window.location.hostname.replace(/www./,'')
const parser_loc = win_loc.substring(win_loc.lastIndexOf(".", win_loc.lastIndexOf(".)/gi)>-1?'https://comment.detik.com':window.location.protocol+'//comment.'+parser_loc

window.CommentComponent = zoid.create({
    dimensions: {
        height: '100%',
        width: '100%',
    },
    autoResize: { width: false,height:true },
    tag: 'comment-component',
    url: url_comment+'/v2/asset/frontend/build/index.html?v=1.0.8.2',
    props: {
        url: {
            type: 'string',
            required: !1,
            default: function() {
                return document.location.href;
            }
        },
        idArtikel: {
            type: 'number',
            required: !0
        },
        kanal: {
            type: 'number',
            required: !0
        },
        date: {
            type: 'string',
            required: !0
        },
        title: {
            type: 'string',
            required: !0
        },
        clientId: {
            type: 'number',
            required: !1,
            default: function() {
                return 3;
            }
        },
        prefix: {
            type: 'string',
            required: !0,
        },
        prokontra: {
            type: 'number',
            required: !1,
            default: function() {
                return 0;
            }
        },
        showhide: {
            type: 'number',
            required: !1
        },
        label_1: {
            type: 'string',
            required: !1,
            default: function() {
                return 'Pro';
            }
        },
        label_2: {
            type: 'string',
            required: !1,
            default: function() {
                return 'Kontra';
            }
        },
        kanalAds: {
            type: 'string',
            required: !1
        },
        envAds: {
            type: 'string',
            required: !1
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
            required: !1
        },
        url_share: {
            type: 'string',
            required: !1,
            default: function() {
                return document.location.href;
            }
        },
        current_url: {
            type: "string",
            required: !1,
            default: function() {
                return document.location.href;
            }
        },
        redirect_url: {
            type: 'string',
            required: !1,
            default: function() {
                return document.location.href;
            }
        },
        pembukaDiskusi: {
            type: 'string',
            required: !1
        },
        sneakPeek: {
            type: 'number',
            required: !1,
            default: function() {
                return 0;
            }
        },
        hash: {
            type: 'string',
            required: !1,
            default: function(){
                return window.location.hash;
            }
        },
        gtmCustom: {
            type: 'function',
            required: !1,
            default: function(){
                return (obj) => {
                    const dataLayer = window.dataLayer || [];
                    dataLayer.push(obj);
                }
                // return (obj) => {
                //     return ""
                // }
            }
        }
    }
});

function onResize (height) {
    $(parent.document).find("#thecomment3").css({height: height + 'px'});
}

function getNameSelectorZoid(){
    const elements = document.querySelectorAll('[id^=zoid-comment-component]');
    return elements[0].parentElement.id
}

function onLogin (){
    if ($('.to_login').html() != 'undefined' && $('.to_login').html() != null) {
        $('.to_login')[0].click();
    }
    else{
        alert("Maaf terjadi kesalahan, harap logout dan login kembali");
    }
}

function onScroll(action, manual=false) {
    const nameParentElement = getNameSelectorZoid();
    if(manual){
        $(document).ready(function(){
            var toBox = $('#'+nameParentElement).offset().top
            var scrollHeight = toBox+action;
            $('html, body').animate({ scrollTop: scrollHeight }, 800);
        });
    }else{
        let id = action;
        let toComment = '';
        setTimeout(function () {
            if (id == 'form-comment-v2') {
                const f = document.getElementById("form-comment-v2");
                if(f){
                    toComment = f.offsetTop;
                }
            }else {
                const cmt = document.getElementById('cmt' + action);
                if(cmt){
                    toComment = cmt.offsetTop;
                }
            }
            const d = document.getElementById(nameParentElement);
            const toBox =  d.offsetTop;
            const scrollHeight = toBox+toComment;
            window.scrollTo({top: scrollHeight, behavior: 'smooth'});        
            id = ''
        }, 1000);
    }
}

function onAlert (msg) {
    alert(msg)
}

function data_oa(msg) {
    if(typeof OA_output !== 'undefined'){
        return OA_output['nativekomentar'+msg+''];
    }else{
        return '';
    }
}
umbnailUrl" content="https://akcdn.detik.net.id/community/media/visual/2024/01/18/ilustrasi-detikx-pungli-di-rutan-kpk_169.jpeg?w=650" itemprop="thumbnailUrl" />
        <script src="https://cdn.detik.net.id/libs/js-itportal/gtmdl.js?v=2.0.10"></script>
    <link rel="icon" href="https://cdn.detik.net.id/xasset/images/x-favicon.ico?v=1.3.1">

    <script>
        (function(){
        f = 'dc', w = window, d = document;
        w['DTKCObj'] = {ts:Date.now(),args:arguments};
        w[f] = w[f] || function () {
        (w[f].q = w[f].q || []).push(arguments)
        };
        var dc = d.createElement('script'), n = new Date();;
        dc.async = 1;
        dc.src = 'https://cdn.detik.net.id/libs/dc/v1/embed.js?'+n.getFullYear()+n.getMonth()+'01';
        (d.getElementsByTagName('head')[0] ||
        d.getElementsByTagName('body')[0]).appendChild(dc);
        })
        (
        {
        appId:3
        }
        );
    </script>

            <script type="text/javascript">
            var ctr = 0;
            removeElement('.login_area');
            function removeElement(elToRemove)
            {
                var deferrer = new Promise(function (resolve) {
                var counter = 0;
                var waitForElement = function () {
                    console.log('[portal][listen-'+elToRemove+'] : wait');
                    var etr = $('body').find(elToRemove).length;
                    if (etr > 0) {
                        console.log('[portal][listen-'+elToRemove+'] : done');
                        resolve(removeNow(elToRemove));
                    } else if (counter <= 14) {
                        counter++;
                        console.log('[portal][listen-'+elToRemove+'] : count..', counter);
                        setTimeout(waitForElement, 300);
                    } else {
                        resolve(removeNow(elToRemove));
                    }
                }
                waitForElement();
                });
            }
            function removeNow(elToRemove)
            {
                ctr++;
                console.log('[portal][listen-'+elToRemove+'] : removed');
                $(elToRemove).remove();
                if (ctr < 3) {
                    removeElement(elToRemove);
                }
            }
            </script>
    
    <style type="text/css">
    .framebar-mobile{display:none !important;}
    </style>

<!-- Start Alexa -->
<script type="text/javascript">
_atrk_opts = { atrk_acct:"JGO+j1a0CM00q/", domain:"detik.com",dynamic: true};
(function() { var as = document.createElement('script'); as.type = 'text/javascript'; as.async = true; as.src = "https://d31qbv1cthcecs.cloudfront.net/atrk.js"; var s = document.getElementsByTagName('script')[0];s.parentNode.insertBefore(as, s); })();
</script>
<noscript><img src="https://d5nxst8fruw4z.cloudfront.net/atrk.gif?account=JGO+j1a0CM00q/" style="display:none" height="1" width="1" alt="" /></noscript>
<!-- End Alexa -->

<!-- Start Comscore-->
<script>
  var _comscore = _comscore || [];
  _comscore.push({ c1: "2", c2: "8443234" });
  (function() {
    var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
    s.src = (document.location.protocol == "https:" ? "https://sb" : "http://b") + ".scorecardresearch.com/beacon.js";
    el.parentNode.insertBefore(s, el);
  })();
</script>
<noscript>
  <img src="https://b.scorecardresearch.com/p?c1=2&c2=8443234&cv=2.0&cj=1" />
</noscript>
<!-- End Comscore -->
    <!-- <link href='http://fonts.googleapis.com/css?family=Open+Sans:300,600,800' rel='stylesheet' type='text/css'> -->
    <link href="https://fonts.googleapis.com/css?family=PT+Sans:400,700" type="text/css" rel="stylesheet">
    <link href='https://fonts.googleapis.com/css?family=Roboto:300,500' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Roboto+Slab:400,300,700' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Montserrat:500,600,700' rel='stylesheet' type='text/css'>
    <link href="https://cdn.detik.net.id/xmaster/assets/css/fontello.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.detik.net.id/xmaster/assets/css/style.css?v=2.0" rel="stylesheet" type="text/css" />
    <link href="https://cdn.detik.net.id/xmaster/assets/css/animate.css?v=2.0" rel="stylesheet" type="text/css" />
    <link href="https://cdn.detik.net.id/xmaster/assets/css/aos.css" rel="stylesheet" type="text/css" />
    <!-- S: (script) Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NG6BTJ');</script>
<!-- E: (script) Google Tag Manager -->

    <script type="application/ld+json">
    	{
		"@context": "http://schema.org",
		"@type": "WebPage",
		"headline": "Beselan Rutan KPK untuk Pak Lurah",
		"url": "https://news.detik.com/x/detail/spotlight/20240118/Beselan-Rutan-KPK-untuk-Pak-Lurah/",
		"datePublished": "2024-01-18T15:44:09+07:00",
		"image": "https://akcdn.detik.net.id/community/media/visual/2024/01/18/ilustrasi-detikx-pungli-di-rutan-kpk_169.jpeg",
		"thumbnailUrl": "https://akcdn.detik.net.id/community/media/visual/2024/01/18/ilustrasi-detikx-pungli-di-rutan-kpk_169.jpeg?w=200"
	}
	</script>
	<script type="application/ld+json">
	{
		"@context": "http://schema.org",
		"@type": "NewsArticle",
		"mainEntityOfPage": {
			"@type": "WebPage",
			"@id": "https://news.detik.com/x/detail/spotlight/20240118/Beselan-Rutan-KPK-untuk-Pak-Lurah/"
		},
		"headline": "Beselan Rutan KPK untuk Pak Lurah",
		"image": {
			"@type": "ImageObject",
		    "url": "https://news.detik.com/x/detail/spotlight/20240118/Beselan-Rutan-KPK-untuk-Pak-Lurah/"
        },
		"datePublished": "2024-01-18T15:44:09+07:00",
		"dateModified": "2024-01-18T15:44:09+07:00",
		"author": {
			"@type": "Person",
			"name": "Fajar Yusuf Rasdianto"
		},
		"publisher": {
			"@type": "Organization",
			"name": "detikcom",
			"logo": {
				"@type": "ImageObject",
				"url": "https://cdn.detik.net.id/xmaster/assets/images/detikx_logo.png"
			}
		},
		"description": "Pungutan liar Rp 6,15 miliar di Rutan KPK diorganisasi oleh Pak Lurah. Para pegawai yang diduga terlibat dari unsur Polri, ASN Kumham, dan pegawai tidak tetap."
	}
	</script>


            <script type="application/ld+json">
        {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{
                "@type": "ListItem",
                "position": 1,
                "name": "detikNews",
                "item": "https://news.detik.com/"
            },{
                "@type": "ListItem",
                "position": 2,
                "name": "detikX",
                "item": "https://news.detik.com/x/"
            },{
                "@type": "ListItem",
                "position": 3,
                "name": "spotlight"
            }]
        }
        </script>
    

</head>



<div id="new-menu" class="new-nav" style="display: none;">
	<ul class="new-menu__nav">
		<li class="s-btn2">
			<a href="#">Search</a>
		</li>
		<li class="hq">
			<a href="https://www.detik.com"><span>detikcom</span>
				<img src="https://cdn.detik.net.id/libs/dc/v1/image/favicon_detikcom.png">
			</a>
		</li>

					<li >
				<a href="https://news.detik.com/x/" class="active">Home</a>
			</li>
					<li >
				<a href="https://news.detik.com/" class="active">detikNews</a>
			</li>
					<li >
				<a href="https://news.detik.com/x/investigasi" class="">Investigasi</a>
			</li>
					<li class="active">
				<a href="https://news.detik.com/x/spotlight" class="">Spotlight</a>
			</li>
					<li >
				<a href="https://news.detik.com/x/intermeso" class="">Intermeso</a>
			</li>
					<li >
				<a href="https://news.detik.com/x/crimestory" class="">Crimestory</a>
			</li>
					<li >
				<a href="https://news.detik.com/x/indeks" class="">Indeks</a>
			</li>
		
		<li class="s-btn"><a href="#">Search</a></li>
		<li id="detik_connect"></li>
	</ul>
	<button class="mobile-menu">
		<span class="mobile-menu__bar"></span>
		<span class="mobile-menu__bar"></span>
		<span class="mobile-menu__bar"></span>
	</button>
</div>

<script type="text/javascript">
	$.ajax({
		url: 'https://connect.detik.com/token/me',
		type: 'GET',
		dataType: 'json',
        xhrFields: {
           withCredentials: true
        },
		success: function(data, textStatus, xhr){
			if (xhr.status == 200) {
				var name = data.first_name + " " + data.last_name;
				var username = data.username;
				$("#detik_connect").html('<a href="https://connect.detik.com/oauth/signout?redirectUrl=https%3A%2F%2Fnews.detik.com%2Fx%2Fdetail%2Fspotlight%2F20240118%2FBeselan-Rutan-KPK-untuk-Pak-Lurah%2F" class="box_modal_dtkid dtkframebar__btn gtm_framebardc_masuk btn btn-orange">Logout</a>')
			}

		},
		error: function(jqxhr, status, exception)
        {
			$("#detik_connect").html('<a href="https://connect.detik.com/oauth/authorize?clientId=3&ui=popup&redirectUrl=https%3A%2F%2Fnews.detik.com%2Fx%2Fdetail%2Fspotlight%2F20240118%2FBeselan-Rutan-KPK-untuk-Pak-Lurah%2F" alt="https://connect.detik.com/oauth/authorize?clientId=3&ui=popup&redirectUrl=https%3A%2F%2Fnews.detik.com%2Fx%2Fdetail%2Fspotlight%2F20240118%2FBeselan-Rutan-KPK-untuk-Pak-Lurah%2F" class="box_modal_dtkid dtkframebar__btn gtm_framebardc_masuk btn btn-orange masuk ">Login</a>')
        }
	});
</script>


<div id="search">
<div class="container">
	<a class="close-btn" href="#"></a>
	<div class="search-wrap">
		<form>
			<input class="inp" type="text" id="search_text">
			<label>Search</label>
			<input type="submit" class="sub" id="submit_search">
		</form>
	</div>

	<div class="s-result" id="search_info">
		Masukkan kata pencarian minimal 3 karakter
	</div>

	<div class="list_grid grid_row gap inline" id="search_result"></div>

	<div class="center mt15" id="search_loading">
		<img src="https://cdn.detik.net.id/xasset/images/ripple.gif">
	</div>
</div>
</div>

<body style="padding-top: 45px;">

<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NG6BTJ"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->

<a href="https://news.detik.com/x" id="logo"><img src="https://news.detik.com/x/detikx-master/assets/images/detikx_logo.png" alt="logo" title="logo detikx"></a>

<div id="content_area">

    <div class="row clearfix relative no_overlay" id="parallax"><div class="lqd parallax ratio16_9 box_img" id="headline">            <img src="images/bumper-2-pqdvj6.png">        </div>        <div class="overlay"></div>        <div class="collage_title header top_center">            <div class="container">                <div class="row clearfix">                    <div class="column full">                        <p class="rubrik"> Spotlight </p>                        <p class="sub_judul"></p>                        <h1>Beselan Rutan KPK untuk Pak Lurah</h1>                        <p class="summary">Pungutan liar Rp 6,15 miliar di Rutan KPK diorganisasi oleh Pak Lurah. Para pegawai yang diduga terlibat berasal dari unsur Polri, ASN Kumham, dan pegawai tidak tetap.</p>                    </div>                </div>            </div>         </div></div>        <div class="container">            <div class="row clearfix">                <div class="column full body_text">                    <div class="caption">                        <p>Ilustrasi : Edi Wahyono</p>                        <span>Kamis, 18 Januari 2024</span></div>                </div>            </div>        </div><div class="container"><div class="row clearfix">    <div class="column full body_text"><!-- <div class="caption">                    <p>Caption / Nama penulis / Reporter / Narasumber</p>                    <strong>Ilustrasi : Nama ilustrator</strong>                </div> -->                    <span class="dropcap"></span>            <p>Para pegawai Rumah Tahanan Komisi Pemberantasan Korupsi memanggil mereka ‘lurah’. Julukan itu disematkan pada mereka yang bertugas mengkoordinasi sekaligus mengepul hasil pungutan liar di Rutan KPK. Posisi lurah tidak lama-lama dijabat oleh satu atau dua orang, melainkan dipilih secara bergantian karena masa kerja di Rutan KPK terhitung singkat. </p><p>Selama 2018-2023, ada lebih dari 10 orang yang mendapatkan julukan tersebut. Setiap lurah memimpin satu kelompok atau regu jaga di tiga Rutan KPK Cabang Jakarta Timur, yaitu Rutan C1, Rutan Guntur, dan Rutan K4. </p><p>“Jadi kan di rutan itu dibagi sif-sif, dibagi dalam tiga regu jaga. Jadi satu kelompok ini mereka ada mengangkat satu orang yang istilah mereka itu dituakan, tapi ada juga yang mengistilahkan itu lurah,” terang anggota Dewan Pengawas KPK Albertina Ho kepada <b>detikX</b> melalui sambungan telepon pada Selasa, 16 Januari 2024.</p>        </div>    </div></div><div class="container">    <div class="row clearfix">    <div class="row clearfix">    <div class="column full">                <img src="images/2-1-37265j.png" alt="" style=""><p class="photo_credit">Dewan Pengawas KPK Albertina Ho (kiri) dan Tumpak Hotorangan Pangabean saat menggelar konferensi pers 'Kinerja Dewas KPK 2023' di Gedung Dewas KPK, Jl Rasuna Said, Jakarta, Senin (15/1/2024).<br>                                <strong>Foto : Ari Saputra/detikcom</strong>                            </p>            </div>    </div>    </div>    </div>                                <div class="container"><div class="row clearfix">    <div class="column full body_text">                <p>Albertina menuturkan praktik pungli di Rutan KPK terjadi sejak 2018. Hanya, saat itu praktiknya belum cukup terorganisasi. Tindakan mengepul beselan baru mulai terstruktur dan terorganisasi sekitar awal 2021. Para pegawai Rutan KPK mulai menghimpun uang hasil pungli dalam beberapa rekening penampungan. Rekening-rekening tersebut dimiliki para kerabat pegawai Rutan KPK.</p>                <blockquote class="sisip kiri">                <i class="icon-quote"></i>                    Dewas dan KPK harus tegas dan jernih memilah. Pecat semua yang menjadi otak dalam kasus pungli ini. Kemudian pidanakan juga yang terlibat aktif dalam pungli tersebut mulai aktor intelektualnya, yang membantu, serta ikut menikmati uang pungli secara sadar tanpa paksaan."                </blockquote>                <p>Para tahanan dan keluarga tahanan yang ingin mendapatkan fasilitas lebih dari Rutan KPK diminta mentransfer sejumlah uang ke rekening-rekening tersebut. Fasilitas yang dimaksud antara lain penggunaan ponsel di dalam rutan atau waktu kunjungan di luar jam yang sudah ditetapkan. Uang yang didapat dari keluarga tahanan itu kemudian dibagi-bagikan oleh para lurah kepada pegawai rutan. Rata-rata mendapatkan Rp 1 juta per bulan.</p><p>Secara total, uang pungli di Rutan KPK selama enam tahun itu mencapai Rp 6,15 miliar. Dari jumlah itu, pegawai Rutan KPK paling kecil menerima Rp 1 juta. Paling besar Rp 504 juta. Albertina menjelaskan, penerima uang pungli terbesar ini tidak memiliki jabatan yang cukup tinggi di Rutan KPK. Karena itu, Dewas KPK masih butuh waktu untuk mendalami peran penerima bagi hasil pungli terbesar tersebut.</p><p>“Nanti di hasil persidangan akan kita sampaikan mana yang pelaku utama dan sebagainya,” jelas mantan hakim Pengadilan Negeri Jakarta Selatan ini.</p><p>Tiga narasumber&nbsp;<b>detikX</b>&nbsp;di KPK mengatakan praktik pungli di Rutan KPK sudah terjadi jauh sebelum 2018. Pengawas internal KPK pada masa itu sudah memberikan sanksi pemecatan kepada beberapa pelaku pungli. Para pelaku ini merupakan pegawai KPK dari unsur Polri dan aparatur sipil negara dari Kementerian Hukum dan Hak Asasi Manusia.</p><p>Dihapusnya Deputi Pengawasan Internal dan Pengaduan Masyarakat KPK pada November 2021 membuat praktik pungli di Rutan KPK menjadi tidak terawasi. Praktik pungli kemudian semakin menggurita sampai setidak-tidaknya Juni 2023, saat Dewas KPK tanpa sengaja menemukan dugaan praktik pungli di Rutan KPK setelah memeriksa pelanggaran etik perilaku asusila salah satu pegawai rutan.&nbsp;</p><p>Waktu itu, Dewas KPK sempat memeriksa pegawai Rutan KPK berinisial M lantaran diduga melakukan pelecehan seksual terhadap salah satu istri tahanan KPK. Dalam salinan dokumen Putusan Nomor:01/Dewas/Etik/04/2023 yang&nbsp;<b>detikX</b>&nbsp;dapatkan, seorang saksi yang merupakan adik tahanan mengaku pernah dimintai uang Rp 72 juta oleh pegawai rutan. Uang itu dikirim secara bertahap pada Agustus-Desember 2023.</p><p>Dari situ, dugaan pungli di Rutan KPK mulai terkuak. Pusat Pelaporan dan Analisis Transaksi Keuangan kemudian melacak adanya transaksi mencurigakan sekitar Rp 4 miliar dari rekening pegawai Rutan KPK. Transaksi ini diduga berasal dari uang pungli. Sejak itu dugaan pungli di Rutan KPK mulai diusut Dewas KPK. Sejumlah pegawai rutan dari unsur Polri dan Kemenkumham juga diduga terlibat dalam praktik pungli yang diusut Dewas KPK ini.</p><p>“Yang banyak itu PNS (pegawai negeri sipil) PNYD (pegawai negeri yang dipekerjakan) dari Kumham,” tutur seorang pegawai KPK kepada&nbsp;<b>detikX</b>&nbsp;pada Rabu, 17 Januari 2024.</p></div></div></div><div class="row clearfix">    <div class="column full body_text">                <p style="font-size: 18px;"><b style="font-size: 20px;">Baca Juga : <a style="text-decoration: none;" href="https://news.detik.com/x/detail/spotlight/20240117/Pimpinan-KPK-Tersandung-Lagi/">Pimpinan KPK Tersandung Lagi</a></b></p></div></div><div class="container">    <div class="row clearfix">    <div class="row clearfix">    <div class="column full">                <img src="images/2-2-6f4ier.png" alt="" style=""><p class="photo_credit">Potret&nbsp;Juru Bicara KPK&nbsp;Ali&nbsp;Fikri.<br>                                <strong>Foto : Faiq Azmi/detikcom</strong>                            </p>            </div>    </div>    </div>    </div><div class="container"><div class="row clearfix">            <div class="column full body_text">                <h3 class="title_index">Bancakan Hasil Mengepul Beselan</h3>                <p>Albertina Ho membenarkan para pegawai rutan yang diduga terlibat dalam praktik pungli ini memang datang dari berbagai anasir. Beberapa di antaranya berasal dari unsur kepolisian, Direktorat Jenderal Pemasyarakatan Kumham, dan pegawai tidak tetap (PTT). Senada dengan juru bicara KPK Ali Fikri. Ali bilang petugas Rutan KPK memang bukan hanya berasal dari unsur pegawai KPK. Banyak dari mereka yang justru merupakan PNYD dari Kemenkumham dan Polri. Sebagian lain berasal dari PTT.</p><p>ASN Kemenkumham dan Polri memiliki jabatan penting di Rutan KPK. Beberapa bertugas sebagai Plt Kepala Rutan dan koordinator rutan. “Sedangkan sebagai pelaksana petugas rutan berasal dari pegawai tidak tetap KPK. Pada 2021, PTT beralih status menjadi ASN KPK,” tulis Ali melalui pesan singkat kepada <b>detikX</b>.</p><p><b>detikX</b>&nbsp;berupaya menghubungi Kabag Humas dan Protokol Ditjen Pemasyarakatan Kumham Rika Apriyanti melalui sambungan telepon dan pesan singkat untuk meminta tanggapan terkait dugaan keterlibatan ASN Kumham dalam praktik pungli di Rutan KPK. Kami juga telah menghubungi Kadiv Humas Mabes Polri Irjen Shandi Nugraha untuk meminta tanggapan serupa. Namun, sampai naskah liputan mendalam ini diterbitkan, keduanya belum menjawab panggilan telepon maupun pesan singkat kami.</p><p>Sejauh ini, Dewas KPK sudah memeriksa 169 orang terkait kasus pungli tersebut. Sebanyak 32 saksi merupakan tahanan KPK, mantan tahanan, mantan staf rutan, mantan kepala bagian pengamanan rutan, dan inspektur. Sedangkan 137 sisanya merupakan pegawai rutan dan pegawai KPK yang pernah bertugas. Dari 137 orang tersebut, sebanyak 93 orang dinyatakan cukup bukti untuk dibawa ke sidang etik. Sedangkan sisanya 44 dinyatakan tidak cukup alasan. Satu terduga pelanggar berinisial M telah diberhentikan dari KPK lantaran dugaan perbuatan asusila.</p><p>“Lalu satu orang lagi itu bukan insan Komisi, jadi kebetulan yang bersangkutan berstatus sebagai OS,&nbsp;<i>outsourcing</i>, sehingga tidak bisa kita kenakan etik,” terang Albertina.</p><p>Dewas KPK juga telah mengantongi 65 bukti dokumen untuk melanjutkan perkara pungli ini ke sidang etik. Sejumlah dokumen menunjukkan adanya bukti penyetoran uang pungli ke beberapa rekening penampungan. Dari dokumen dan pemeriksaan saksi tersebut, Dewas KPK pun membagi kasus etik ini dalam sembilan berkas perkara.</p><p>Enam berkas perkara untuk 90 orang mulai disidangkan sejak Rabu, 17 Januari 2024. Sebanyak 90 orang ini dituduh melanggar Pasal 4 Ayat 2 huruf B Peraturan Dewas KPK Nomor 3 Tahun 2021 tentang penyalahgunaan wewenang untuk menguntungkan diri sendiri. Tiga berkas lainnya akan dibuat secara khusus untuk tiga terduga pelanggar. Sampai hari ini, berkas perkara tiga terduga pelanggar tersebut masih dalam proses.</p><p>Selain dugaan pelanggaran etik, KPK kini tengah melakukan penyelidikan dugaan tindak pidana dalam kasus pungli tersebut. Sebanyak 190 orang telah diperiksa Deputi Bidang Penindakan dan Eksekusi KPK. Para saksi berasal dari berbagai unsur, termasuk pegawai rutan, mantan pegawai rutan, tahanan, mantan tahanan, keluarga tahanan, dan mantan keluarga tahanan KPK.&nbsp;</p></div></div></div><div class="container">    <div class="row clearfix">    <div class="row clearfix">    <div class="column full">                <img src="images/rapor-merah-xt8xei.png" alt="" style="">            </div>    </div>    </div>    </div><div class="container"><div class="row clearfix">            <div class="column full body_text">                <p>Ali Fikri mengatakan nantinya tidak semua dari 93 orang yang diduga melanggar etik dapat dikenai sanksi pidana. KPK masih akan melakukan penyelidikan lebih lanjut untuk menemukan siapa saja yang layak dikenai sanksi pidana.</p><p>“Etik itu sanksi moral, tidak semua yang dijatuhi hukuman etik juga dapat dikenai pidana,” pungkas Ali melalui pesan singkat kepada&nbsp;<b>detikX</b>.</p><p>Eks Ketua Wadah Pegawai KPK Yudi Purnomo Harahap menuturkan komplotan pelaku pungli ini merusak integritas, sistem, dan kebersihan KPK dari korupsi. Menurutnya, penindakan atas kasus tersebut harus segera dituntaskan agar tidak mengganggu penindakan dan kasus korupsi yang ditangani KPK.</p><p>"Dewas dan KPK harus tegas dan jernih memilah. Pecat semua yang menjadi otak dalam kasus pungli ini. Kemudian pidanakan juga yang terlibat aktif dalam pungli tersebut mulai aktor intelektualnya, yang membantu, serta ikut menikmati uang pungli secara sadar tanpa paksaan," kata eks penyidik KPK ini kepada&nbsp;<b>detikX</b>.&nbsp;&nbsp;</p><p>Pungli, kata Yudi, merupakan bentuk suap dan gratifikasi. Seharusnya pegawai KPK memberantas hal tersebut, bukan malah terlibat di dalamnya. KPK harus&nbsp;<i>zero tolerance</i>, tidak ada ampun.</p><p>"Lebih baik memotong komplotan ini daripada menjalar ke pegawai KPK yang lain sekaligus sebagai efek jera agar tidak terulang lagi," tuturnya.</p>            </div>        </div></div><div class="container">        <div class="row clearfix">            <div class="column full">                <hr>            </div>        </div>    </div>            <div class="container"><div class="row clearfix">        <div class="column full body_text "><div class="row clearfix"> <div class="column full body_text"><p><b>Reporter:</b> Fajar Yusuf Rasdianto, Alya Nurbaiti<br><b>Penulis:</b> Fajar Yusuf Rasdianto<br><b>Editor:</b> Dieqy Hasbi Widhana<br><b>Desainer:</b>  Luthfy Syahban<br></p></div></div></div>    </div></div>    <div class="container content_indent" style="max-width:700px; min-heigth:20px;">        <div class="the-comment">            <div id="komentar"><b style="font-size: 20px;">***Komentar***</b></div>        </div>    </div><a href="" target="_blank" class="detikx_widget bacajuga_box">[Widget:Baca Juga]</a>
</div>

<div id="share">

            <span class="share_icon img_sos">
                <div>SHARE</div>

                <a href="#" class="fb" data-url="https://news.detik.com/x/detail/spotlight/20240118/Beselan-Rutan-KPK-untuk-Pak-Lurah/"
                data-title="Beselan Rutan KPK untuk Pak Lurah" data-image="https://cdn.detik.net.id/xmaster/assets/images/detikx_logo.png" data-desc="detikX menyajikan berita-berita eksklusif yang komprehensif dan mendalam. Tampil atraktif dengan penyajian desain yang menarik sehingga memberikan pengalaman berbeda dalam membaca berita."><i class="icon-facebook"></i></a>

                <a href="#" class="tw" data-url="https://news.detik.com/x/detail/spotlight/20240118/Beselan-Rutan-KPK-untuk-Pak-Lurah/" data-title="Beselan Rutan KPK untuk Pak Lurah" data-image="https://cdn.detik.net.id/xmaster/assets/images/detikx_logo.png" data-desc="detikX menyajikan berita-berita eksklusif yang komprehensif dan mendalam. Tampil atraktif dengan penyajian desain yang menarik sehingga memberikan pengalaman berbeda dalam membaca berita."><i class="icon-twitter"></i></a>

                <!-- <a href="#" class="gplus gp" data-url="https://news.detik.com/x/detail/spotlight/20240118/Beselan-Rutan-KPK-untuk-Pak-Lurah/" data-title="Beselan Rutan KPK untuk Pak Lurah" data-image="https://cdn.detik.net.id/xmaster/assets/images/detikx_logo.png" data-desc="detikX menyajikan berita-berita eksklusif yang komprehensif dan mendalam. Tampil atraktif dengan penyajian desain yang menarik sehingga memberikan pengalaman berbeda dalam membaca berita."><i class="icon-googleplus"></i></a> -->
            </span>
</div>
<script type="text/javascript">
setTimeout(function(){
    shareBox.run($('#share'));
},500);
</script>

<div class="footer">
	<div class="foot1">
	<div class="fl"><a data-category="GA WP New Detikcom 2015" data-action="Footer WP" data-label="Logo DetikCom Footer" href="//www.detik.com"><img src="https://cdn.detik.net.id/assets/images/logo_detik_footer.png" alt="detikcom"></a></div>
	<div class="fr">
	<div class="share_bottom">
	<a data-category="GA WP New Detikcom 2015" data-action="Footer WP" data-label="Socmed" style="padding: 0 !important;" href="https://www.facebook.com/detikcom"><img src="https://cdn.detik.net.id/assets/images/foot_fb.png" alt="facebook detikcom" title="facebook detikcom"></a>
	<a data-category="GA WP New Detikcom 2015" data-action="Footer WP" data-label="Socmed" style="padding: 0 !important;" href="https://twitter.com/detikcom"><img src="https://cdn.detik.net.id/assets/images/foot_tw.png" alt="twitter detikcom" title="twitter detikcom"></a>
	<a data-category="GA WP New Detikcom 2015" data-action="Footer WP" data-label="Socmed" style="padding: 0 !important;" href="https://instagram.com/detikcom/"><img src="https://cdn.detik.net.id/assets/images/foot_insta.png" alt="instagram detikcom" title="instagram detikcom"></a>
	</div>
	</div>
	<div class="clearfix"></div>
	</div>
	<div class="clearfix"></div>
	<div class="foot2">
	<div class="fl">

	<div class="pl5">Copyright @ 2024 detikcom, All right reserved
	<a data-category="GA WP New Detikcom 2015" data-action="Footer WP" data-label="SubNavigasi Footer" target="_blank" href="//www.detik.com/dapur/redaksi">Redaksi</a> ·
	<a data-category="GA WP New Detikcom 2015" data-action="Footer WP" data-label="SubNavigasi Footer" target="_blank" href="//www.detik.com/dapur/pedoman-media">Pedoman Media Siber</a> ·
	<a data-category="GA WP New Detikcom 2015" data-action="Footer WP" data-label="SubNavigasi Footer" target="_blank" href="https://karir.detik.com/">Karir</a> ·
	<a data-category="GA WP New Detikcom 2015" data-action="Footer WP" data-label="SubNavigasi Footer" target="_blank" href="//www.detik.com/dapur/kotak-pos">Kotak Pos</a> ·
	<!-- <a target="_blank" href="//infoiklan.detik.com/">Info Iklan</a> &middot; -->
	<a data-category="GA WP New Detikcom 2015" data-action="Footer WP" data-label="SubNavigasi Footer" target="_blank" href="//www.detik.com/dapur/privacy-policy">Privacy Policy</a> ·
	<a data-category="GA WP New Detikcom 2015" data-action="Footer WP" data-label="SubNavigasi Footer" target="_blank" href="//www.detik.com/dapur/disclaimer">Disclaimer</a>
	</div>
	</div>
	<div class="clearfix pt10"></div>
	</div>
</div>



<script src="https://cdn.detik.net.id/libs/newcomment/js/xcomponent.frame.min.js?7d99a94f"></script>
<script src="https://cdn.detik.net.id/libs/newcomment/js/bridge.js?7d99a94f"></script>

<script type="text/javascript">
        try {
            $('#komentar').empty();
            
            DtkXComponent.render({
                url_dtk: "https://news.detik.com/x/detail/spotlight/20240118/Beselan-Rutan-KPK-untuk-Pak-Lurah/",
                identifier: 7148279,
                group: 1737,
                date: "18-01-2024",
                title: "Beselan Rutan KPK untuk Pak Lurah",
                appId: 3,
                url_share: "https://news.detik.com/x/detail/spotlight/20240118/Beselan-Rutan-KPK-untuk-Pak-Lurah/",
                prefix: "dtk",
                                prokontra: 0,
                showhide: 0,
                // kanalAds: "detikNews",
                // envAds: "desktop",
                onLogin,
                onResize,
                onScroll,
                onAlert,
                data_oa
            },'#komentar');
                
            $('#komentar').attrchange({
                callback: function (e) {
                    $(document.body).trigger("sticky_kit:recalc");
                }
            }).resizable();
        } catch (e) {} finally {}

</script>

<script src="https://cdn.detik.net.id/xmaster/assets/js/detikx.js?v=1.1" type="text/javascript"></script>
<!-- <script src="https://cdn.detik.net.id/xmaster/assets/js/waypoints.min.js" type="text/javascript"></script> -->

<script src="https://cdn.detik.net.id/libs/sharebox/js/shareBox.js?v=2022072514"></script>
<script src="https://cdn.detik.net.id/xmaster/assets/js/imgLiquid-min.js" type="text/javascript"></script>
<script src="https://cdn.detik.net.id/xmaster/assets/js/skrollr.min.js" type="text/javascript"></script>
<script src="https://cdn.detik.net.id/xmaster/assets/js/waypoints.min.js" type="text/javascript"></script>
<script src="https://cdn.detik.net.id/xmaster/assets/js/caroufredsel-6.2.1.min.js" type="text/javascript"></script>
<script src="https://cdn.detik.net.id/xmaster/assets/js/jquery.touchSwipe.min.js" type="text/javascript"></script>
<script src="https://cdn.detik.net.id/xmaster/assets/js/tooltip.js" type="text/javascript"></script>
<script src="https://cdn.detik.net.id/xmaster/assets/js/jquery.scrollstory.min.js" type="text/javascript"></script>
<script src="https://cdn.detik.net.id/xmaster/assets/js/controller.js?v=3.0" type="text/javascript"></script>
<script src="https://cdn.detik.net.id/xmaster/assets/js/aos.js" type="text/javascript"></script>
<script src="https://cdn.detik.net.id/xmaster/assets/js/app-dua.js?v=3" type="text/javascript"></script>

<script type="text/javascript">
    var APP_URL = "https://news.detik.com/x";
</script>
<script src="https://cdn.detik.net.id/xasset/js/search.js?v=efcc39aa" type="text/javascript"></script>


<script type="text/javascript">
$(function() {
    $('#new-menu').detach().appendTo("#nav").show();

    // Default params Xoembed Gambas
    $("a.detikx_widget").each(function() {
        if($(this).hasClass('bacajuga_box')){
            var strClass = 'bacajuga_box';
            $(this).attr({
                'class': 'bacajuga_box',
                'idnews': '7148279',
                'kanal': '1737',
                'publish_date': '-- '
            });
        }

        $.getJSON( "https://gambasdtk.detik.com/api/detikx_widget?callback=?", {
          class: $(this).attr('class'),
          idnews: $(this).attr('idnews'),
          kanal: $(this).attr('kanal'),
          publish_date: $(this).attr('publish_date'),
          format: "json"
        })
          .done(function( data ) {
            var htmlEmbed = data.html;
            var htmlstring = htmlEmbed.replace('https://x.detik.com/indeks', 'https://news.detik.com/x/indeks')
            //console.log($(this).attr('class'));
            $("."+strClass).replaceWith(htmlstring);
            // setTimeout(function(){
            	// $('.lqd').imgLiquid();
            // },
            //$('.lqd').imgLiquid();
          });
    });
});
</script>

</body>
</html>
