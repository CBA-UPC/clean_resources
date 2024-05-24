/*reset*/
@font-face{font-family:'SFR-Regular';src:url("//static.s-sfr.fr/assets/fonts/Poppins-Regular.woff2")}
@font-face{font-family:'SFR-Light';src:url("//static.s-sfr.fr/assets/fonts/Poppins-Light.woff2")format("woff2")}
@font-face{font-family:'SFR-Bold';src:url("//static.s-sfr.fr/assets/fonts/Poppins-Bold.woff2")format("woff2")}
@font-face{font-family:'SFR-Black';src:url("//static.s-sfr.fr/assets/fonts/Poppins-Black.woff2")format("woff2")}
#PT a,#PT article,#PT audio,#PT b,#PT body,#PT del,#PT details,#PT div,#PT em,#PT fieldset,#PT input,#PT label,#PT figcaption,#PT figure,#PT footer,#PT form,#PT header,#PT html,#PT i,#PT iframe,#PT img,#PT legend,#PT li,#PT menu,#PT nav,#PT ol,#PT p,#PT pre,#PT section,#PT small,#PT span,#PT strong,#PT sub,#PT sup,#PT table,#PT tbody,#PT td,#PT tfoot,#PT th,#PT thead,#PT time,#PT tr,#PT ul,video{margin:0;padding:0;border:0;outline:0;background:transparent;box-sizing:border-box;font-style:normal}
#PT article,#PT audio,#PT b,#PT body,#PT del,#PT details,#PT div,#PT em,#PT fieldset,#PT input,#PT label,#PT figcaption,#PT figure,#PT footer,#PT form,#PT header,#PT html,#PT i,#PT iframe,#PT img,#PT legend,#PT li,#PT menu,#PT nav,#PT ol,#PT p,#PT pre,#PT section,#PT small,#PT span,#PT strong,#PT sub,#PT sup,#PT table,#PT tbody,#PT td,#PT tfoot,#PT th,#PT thead,#PT time,#PT tr,#PT ul,video{margin:0;padding:0;border:0;outline:0;background:transparent;box-sizing:border-box;font-style:normal}
#PT button {border: none;margin: 0;text-decoration: none;-webkit-appearance: none;-moz-appearance: none}
#PT button {border: none;margin: 0;text-decoration: none;-webkit-appearance: none;-moz-appearance: none}
#PT h1{display:block;font:normal 40px/60px SFR-Black;margin:0}
#PT h2{font:normal 32px/48px SFR-Bold;}
#PT h3{display:block;font:normal 24px/36px SFR-Bold;margin:0}
#PT nav {margin:0 auto}
:root{
        --clr-sfr:#c00404;
        --clr-sfr2:#D90D25;
        --clr-black:#181818;
        --clr-bg:#F2F2F2;
        --clr-disable:#d2d2d2;
        --clr-grey:#8A8A8A;
        --clr-green:#02C39A;
        --clr-yellow:#ffe700;
        --clr-error:#D90D25;
}
#PT .promo {position: relative;top: unset;}
#PT .price {justify-content:flex-end}
#PT .price .t {font: normal 24px/30px SFR-Bold;grid-area: b;}
#PT li {list-style: none;}
#PT a[class^="btn"],#PT input[class^="btn"]{display:block;position:relative;font-family:SFR-Bold;font-size:14px;line-height:16px;padding:12px 24px;text-align:center;width:100%;border-radius:8px;cursor:pointer;overflow:hidden;text-decoration:none;transition: box-shadow .2s cubic-bezier(.4,0,.2,1);user-select:none;-webkit-user-select:none}
#PT a[class^="link"] { padding: 0 13px 0 0; }  
#PT strong,#PT b  {font-family: 'SFR-Bold';}
#PT a[class^="btn"]:hover,#PT input[class^="btn"]:hover{box-shadow:0 4px 12px rgba(24,24,24,0.32)}
@keyframes rotate{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}
#PT button {border: none;margin: 0;text-decoration: none;-webkit-appearance: none;-moz-appearance: none}
#PT button[class^="btn"]{display:block;position:relative;font-family:SFR-Bold;font-size:14px;line-height:16px;padding:12px 24px;text-align:center;width:100%;border-radius:8px;box-shadow:0 4px 8px rgba(24,24,24,0.16);cursor:pointer;overflow:hidden;text-decoration:none;transition: box-shadow .2s cubic-bezier(.4,0,.2,1);user-select:none;-webkit-user-select:none}
#PT button[class^="btn"]:hover{box-shadow:0 4px 8px rgba(24,24,24,0.32)}
#PT button[class^="btn"].loader{background:var(--clr-disable);box-shadow:unset;border:var(--clr-disable);cursor:default}
#PT button[class^="btn"].loader:before{content:'';position:absolute;width:100%;height:100%;background:var(--clr-disable);left:0;top:0}

#PT #Fac .lame-services h3{margin:0;padding:0;}
#PT #Fac .lame-services h3:after {display: none;}
#PT .btn{color:#fff;background:var(--clr-sfr2);box-shadow:0 4px 8px rgba(150,0,0,0.16)}
#PT .btn:hover,input.btn:hover{ box-shadow:0 4px 8px rgba(24,24,24,0.16);box-shadow:0 4px 8px rgba(150,0,0,0.32)}
#PT .btn4{color:var(--clr-black);border:solid 1px var(--clr-black);box-shadow:0 0 12px rgba(24,24,24,0.16);background:#fff;}
#PT .btn:active{box-shadow:inset 0 4px 8px rgba(0, 0, 0, 0.2)}
#PT .btn4:active{box-shadow:0 0 12px rgba(24,24,24,0.16)}
#PT .btn:disabled,.btn2:disabled,#PT .btn3:disabled{color:var(--clr-grey);background-color:var(--clr-disable);box-shadow:0 0 16px rgba(255,255,255,0.24)}
#PT .btn4:disabled,#PT .btn5:disabled{color:var(--clr-grey);border-color:var(--clr-grey)}
#PT .loader{background:var(--clr-disable);box-shadow:unset;border:var(--clr-disable);cursor:default;overflow: hidden;}
#PT .loader:before{content:'';position:absolute;width:100%;height:100%;background:var(--clr-disable);left:0;top:0;z-index:1;}
#PT .loader:after{content:"";position:absolute;top:0;bottom:0;left:0;right:0;margin:auto;height:16px;width:16px;color:var(--clr-sfr2);display:inline-block;border:2px solid;border-radius:50%;border-top-color:transparent;animation:rotate 1s linear infinite;z-index:2;}
#PT .numCta:after{content:'';position:absolute;width:8px;height:8px;right:1px;top:0;bottom:0;margin:auto;border-radius:2px;border:2px solid;border-left:0;border-bottom:0;transform:rotate(45deg);transition:all .2s cubic-bezier(.4,0,.2,1)}
#PT .numCta:hover:after{right:-3px}
#PT .link2{color:var(--clr-black)}
#PT .link3{color:#fff}
#PT .link.u{font-family:SFR-Bold;color:var(--clr-black);text-decoration:underline;padding:0}
#PT .link.u:after{content:none}
#PT .link.seeAll {display: table;margin: 16px auto 0;width: fit-content;padding:0 13px 0 0;}
@media(max-width:768px){
	
}

#PT .price {position:relative;display:grid;grid-template-areas:"b a" "b c";}
#PT .price .L {font:normal 32px/30px SFR-Bold;grid-area: b;margin:0;}
#PT .price .R{ text-align: left;font:normal 12px/12px SFR-Bold;}
#PT .price .o {font-size: 12px;font-family: 'SFR-Regular';vertical-align: middle;display: inline-block;text-decoration: line-through;}

#PT *,#PT :after,#PT :before {box-sizing: border-box;}
#PT a {text-decoration: none;}
#PT section {background: initial;padding: initial;}
#PT sup {vertical-align: super;}
body.Media #PT {color:#181818;}
#PT .btn.loading {cursor:auto;}
#PT .hide {display:none;}
#PT bol-price .exp {font-size: 10px;}
#PT #Telephone.lame-offre .M .desc:not(.reconditionne) .selectors.loading, #PT #Telephone.lame-offre .M .desc .selectors.loading {max-width:none;border:0;}
#PT .selectors .loader,
#PT .R .loader,
#PT label .loader,
#PT .cp .loader,
#PT .btn.black .loader {background: #fff;}
#PT .selectors .loader, #PT .a-block .loader {border-radius:0;}
#PT .a-block a.suppr.loader:after {content: "";}
#PT .a-block a.suppr.loader:before,#PT .a-block a.suppr.loader {background: #f2f2f2;border: 0;height:16px}
#PT input[type="radio"],
#PT input[type="checkbox"] {display:none;}
body #PT {font: normal normal 13px SFR-Regular,Arial,sans-serif;scroll-behavior: smooth;text-align:left}
#PT .btn.disabled {background: #d2d2d2;color: #8a8a8a;cursor:default;box-shadow: unset;}
#PT button[class^="btn"].disabled:hover {box-shadow: unset;}
#PT .btn:not(.disabled):hover {background-position: 100%;box-shadow: 0 4px 8px rgb(226 0 26 / 40%);}
#PT .btn.black:not(.disabled):hover{background-position:100% center;box-shadow:0 4px 8px rgba(34, 2, 0, 0.4);transition:all 0.2s ease-out;}
/*#PT h2 {width: 840px;max-width: 100%;;margin: 0 auto 24px;background: transparent;}*/
#PT h2:not(:first-of-type) {display:inline-block;margin-top: 48px;}
#PT .M ul {display:block;padding: 0 0 16px 15px;}
#PT .M li {list-style-type: disc;line-height:18px;}
#PT i.tooltip{display:inline-block;position:relative;width: 16px;height: 16px;bottom: unset;right: unset;cursor:pointer;border:0;vertical-align:middle;}
#PT i.tooltip:after {position: absolute;content: "";background: url('//static.s-sfr.fr/assets/pictos/aide_plein_40_noir.svg');background-size: contain;width: 16px;height: 16px;left: 2px;top: 0px;background-repeat: no-repeat;background-size:cover;}
#PT i.tooltip > span {visibility:hidden;opacity:0;text-align:left;cursor: auto;width: 250px;height:auto;box-shadow: 0 2px 4px 0 rgb(0 0 0 / 10%);border-radius: 4px;color: #fff;background-color: #181818;font-family: SFR-Regular;font-size: 12px;line-height: 16px;position: absolute;z-index: 9;right: -20px;bottom: auto;top: 28px;transition: opacity 0.3s;padding:24px;}
#PT i.tooltip > span:after {content: "";position: absolute;top: -12px;right: 18px;margin-bottom: -5px;border-width: 7px;border-style: solid;border-color:  transparent transparent #181818  transparent ;}
#PT i.tooltip:hover > span {visibility:visible;opacity:1;text-align:left;}

/*PRICE BLOCK*/
#PT .p-block {position:relative;display:inline-table;font-family:SFR-Black;max-width:205px;background:#fff;text-align:right;}
#PT .p-block span.offer {font-size: 24px;line-height: 36px;}
#PT .p-block span.promo {position:relative;top:unset;font-family: SFR-Black;font-size: 10px;line-height: 12px;height: auto;width: fit-content;width: -moz-fit-content;display: block;color: #fff;padding: 3px 5px;background: #181818;border-radius: 5px;margin-bottom: 7px;margin-left: auto;}
#PT .p-block .per-m {font-family: SFR-Bold;font-size: 16px;line-height: 22px;vertical-align:middle;}
#PT .p-block > p {font-family: SFR-Regular;font-size: 10px;line-height: 12px;text-align:right;margin-top:5px;}
#PT .p-block > .mensualite {margin-bottom: 16px;}
#PT .p-block > p.b {font-family: SFR-Bold}
#PT  a.download {display: block;position: relative;text-align:right;font-family: 'SFR-Bold';font-size: 10px;line-height: 14px;color:#D90D25;margin:5px 0;cursor: pointer;padding-right: 20px;}
#PT  a.download:after {position: absolute;display:inline-block;content:"";background:url("//static.s-sfr.fr/assets/pictos/telechargement_40_rouge.svg");width: 16px;height: 16px;top: 0;right: 0;background-repeat: no-repeat;background-size: contain;border: 0;transform: unset;}
#PT .lame-toggle a.download {text-align: left;font-size: 14px;line-height: 18px;}
#PT .lame-toggle a.download:after {position: relative;vertical-align: middle;margin-left: 6px;}
#PT .p-block p.g,#PT .p-block p.g a {color:#8A8A8A;}
#PT .p-block p.g a{text-decoration:underline;cursor:pointer}


/*REMISE BLOCK*/
#PT .r-block {padding: 10px 0px;width: 190px;background: #222;font-family: SFR-Bold;font-size: 10px;line-height: 14px;color:#fff;text-align:center;border-radius:8px;}
#PT .r-block p:first-of-type {font-size: 16px;}
#PT .r-block p {margin:10px 0;font-size: 10px;}
#PT .M .r-block {width: 300px;}
#PT .lame-offre .M .r-block p{font-family: SFR-Bold;}
#PT .lame-offre .M .r-block p:first-of-type {font-size:16px;}
/*ACTIONS BLOCK*/
#PT .a-block {position: relative;right: 0;width: 840px;max-width:100%;text-align: right;margin: -10px auto 0;height:16px;}
#PT .lame-option .a-block {margin-top:10px;}
#PT .a-block a {position:relative;cursor:pointer;display:inline-block;font-family: SFR-Bold;font-size: 12px;line-height: 16px;margin-right:16px;vertical-align:top;color:#181818;}
#PT .a-block a.suppr:after {content: '╳';position: absolute;right: -16px;font-size: 12px;font-family: SFR-Bold;font-weight:600;top: 0;bottom:0;margin:auto;}
#PT .a-block a.modifier:after {content: '';position: absolute;width: 8px;height: 8px;right: -8px;top: 0;bottom: 0;margin: auto;border-radius: 2px;border: 2px solid;border-left: 0;border-bottom: 0;transform: rotate(45deg);transition: all .2s cubic-bezier(.4,0,.2,1);}
#PT .a-block a.modifier:hover:after {right: -12px;transition: all .2s ease;}
#PT .lc {position: relative;font-family: SFR-Regular;font-size: 14px;line-height: 22px;height: 22px;color: #222;margin: 0 auto;width: 840px;max-width: 100%;}

#PT .quantifier {position: relative;display: inline-grid;gap: 16px;align-items: center;grid-template-columns: 24px auto 24px;text-align: center;width: fit-content;}
#PT .quantifier button {position: relative;width: 24px;height: 24px;background: #181818;color: #181818;border-radius: 4px;line-height: 24px;padding: 0;cursor: pointer;}
#PT .quantifier button:not(:disabled) + span {font-family: SFR-Bold;}
#PT .quantifier .minus:before ,
#PT .quantifier .plus:before {content: '';width: 16px;height: 1px;background: #fff;position: absolute;top: 0;bottom: 0;right: 0;left: 0;margin: auto;}
#PT .quantifier .plus:after {content: '';  height: 16px;width: 1px;background: #fff;position: absolute;top: 0;bottom: 0;right: 0;left: 0;margin: auto;}
#PT .quantifier button:disabled {background: #D2D2D2;color: #D2D2D2;cursor: default;}
#PT .quantifier button:disabled:before,#PT .quantifier button:disabled:after {background:#8A8A8A;}
#PT .quantifier.loader:before {width: 39px;background: #fff;left: 24px;}
/*body.basket-displayed {height: 100vh;overflow: hidden;position: fixed;}*/
body.basket-displayed {height:auto; position: relative;overflow: unset;}
body.basket-displayed #PT~*:not(#eTfS):not(#toastrContainer):not(#popinContainer):not(.debugSG){display:none}
#PT #Panier {display: flex;justify-content: space-between;flex-flow: row wrap;width: 1280px;max-width: calc(100% - 32px);margin: auto;}
#PT #Content {max-width: calc(100% - 365px);flex-direction: column;justify-content: right;align-items: flex-end;margin:0 auto 42px;}
#PT #Content > section:not(.first) {border-radius: 0;margin-top: 2px;}
#PT #Content > section.first {border-radius: 12px 12px 0 0;margin-top:24px;}
#PT #Content > section.first .w{border-radius: 12px 12px 0 0;}
#PT #Content > section.last .w{border-radius: 0 0 12px 12px;}
#PT #Content > section.last {border-radius: 0 0 12px 12px;margin-bottom: 24px;}
#PT #Content > section.first.last .w{border-radius: 12px;}
#PT #Content > section.first.last {border-radius: 12px;}
#PT #Stepper {display: flex;flex-flow:row wrap;align-items: center;width:100%;justify-content:center;background:#fff;height:40px;margin-bottom:15px;}
#PT #Stepper .divider {flex-grow: 1;border-bottom: 1px solid black;margin: 5px;max-width: 180px;}
#PT #Stepper .step {position:relative;margin: 0 15px;min-width: 45px;height:32px;}
#PT #Stepper .step:before {position: absolute;content: '1';border-radius: 50%;width: 16px;height: 16px;padding: 2px;border: 1px solid #181818;color: #181818;text-align: center;font-size: 10px;font-family: SFR-Regular;line-height: 12px;right: 0;left: 0;margin: auto;}
#PT #Stepper .step.active:before {background-color: #181818;font-family: SFR-Bold;color:#fff;}
#PT #Stepper .step:nth-child(3):before {content: '2';}
#PT #Stepper .step:nth-child(5):before {content: '3';}
#PT #Stepper .step:nth-child(7):before {content: '4';}
#PT #Stepper .step:nth-child(9):before {content: '5';}
#PT #Stepper .step p{font-family: SFR-Regular;font-size: 12px;line-height: 16px;color: #181818;position: relative;text-align: center;padding-top: 18px;content:'';margin: auto;width: fit-content;width: -moz-fit-content;}
#PT #Stepper .step.active p{font-family: SFR-Bold;}
#PT .back-shop {position:relative;display:block;font-family: SFR-Bold;font-size: 14px;line-height: 18px;color: #181818;margin: 0 auto;padding: 15px 0 5px;width:1280px;max-width:100%;cursor:pointer;}
#PT .back-shop:before {display: inline-block;content: "";background: url(//static.s-sfr.fr/media/icono-picto-arrow.svg);transform: rotate(90deg);width: 16px;height: 8px;background-size: contain;margin-right: 6px;}
#PT .title-page {width: 100%;font-family: SFR-Bold;font-size: 40px;line-height: 60px;text-align: center;color: #181818;margin-bottom:40px;}
/*LAME BOX BLOCK*/
#PT .lame-offre {position:relative;width: 840px;max-width: 100%;background: #fff;border-radius: 12px;display:flex;flex-flow:row wrap;padding:24px;margin: 0 auto;}
#PT .lame-offre.promo {margin:30px auto 0;top:unset;}
#PT #Telephone.asso.last {margin-bottom: 4px;}
#PT #Mobile.lame-offre.asso {border-radius: 12px 12px 0 0;}
#PT .lame-offre > .L {width:160px;}
#PT .lame-offre .M {width:calc(100% - 365px);display: flex;flex-direction: column;}
#PT .lame-offre label {display:none;}
#PT .lame-offre .M .title{font-family: SFR-Black;font-size: 24px;line-height: 36px;margin-bottom:16px;color: #181818;}
#PT .lame-offre .M .title .reconditionne {color: #02C39A;}
#PT .lame-offre .subtitle{font-family: SFR-Bold;margin-bottom:4px;font-size: 12px;line-height: 16px;color: #222;}
#PT .lame-offre .M p {font-size: 12px;line-height: 16px;margin-bottom:16px;max-width:304px;}
#PT .lame-offre .M .desc{font-family: SFR-Regular;font-size: 12px;line-height: 16px;color: #181818;}
#PT .lame-offre .M > .desc:first-of-type{ min-height:116px;}
#PT .lame-offre .equipements {margin-top:18px;}
#PT .lame-offre .equipements .equ {position: relative;display: flex;min-height: 45px;align-items: center;margin-bottom:16px;}
#PT .lame-offre .equipements .equ > * {display:inline-block;margin: 4px 0 0 0;vertical-align: middle;}
#PT .lame-offre .equipements .equ img {max-width: 44px;width:auto;margin: 0;position: absolute;left: -55px;margin-top: auto;margin-bottom: auto;top: 0;bottom: 0;}
#PT .generic-bonus {display: inline-block;font-family: 'SFR-Black';font-size: 14px;line-height: 10px;color: #181818;background: url(//static.s-sfr.fr/media/pictos/mobile/bonus.svg);border-radius: 4px;width: 126px;height: 32px;text-align: right;padding: 6px 6px 0 0;margin-top: 16px;cursor:pointer;}
#PT .lame-offre > .R {width:205px;text-align: right;}
#PT .lame-offre .R .r-block{margin-top:10px;}
#PT [class*="lame-"] .sticker {position: absolute;display: inline-block;padding: 5px 10px 20px;top: -20px;left:0;z-index: -1;font-size: 10px;line-height: 12px;font-family: SFR-Bold;border-radius: 8px;background: #ffcd00;color: #181818;}
#PT #TV.lame-offre > .L img {max-width: 150px;}

#PT .L .card {position: relative;width: 150px;height: 150px;box-shadow: 0px 8px 24px 4px rgba(0, 0, 0, 0.04);border-radius:12px;}
#PT .L .card img {position: absolute;top:0;right:0;bottom: 0;left: 0;margin:auto;}
#PT .L .card:after {position: absolute;content:'';height: 100%;top:0;right:0;}

#PT .forfaits .forfait.quatreg:after ,#PT .L .card.quatreg:after {background: url(//static.s-sfr.fr/assets/pictos/4gplus_40_blanc.svg) no-repeat center / 40px 41px, url('https://static.s-sfr.fr/media/pictos/goutte-grise.svg') no-repeat top right / cover}
#PT .forfaits .forfait.cinqg:after ,#PT .L .card.cinqg:after {background: url(//static.s-sfr.fr/assets/pictos/5g_40_blanc.svg) no-repeat center / 40px 40px, url('https://static.s-sfr.fr/media/pictos/goutte-rouge.svg') no-repeat top right / cover}
#PT input.toggle + div label.uncard {height: 100%;position: absolute;width: 40px;right: 0;top: 0;z-index: 5;cursor: pointer;}
#PT .selectors{position:relative;width:fit-content;width: -moz-fit-content;display:flex;border-top:1px solid #d2d2d2;border-bottom:1px solid #d2d2d2;margin-bottom:16px;height:40px;border-radius:8px;}

#PT .selectors .onecolor{display: flex;width: 50%;max-width: 100%;height: 100%;justify-content: center;align-items: center;box-shadow: unset}
#PT .selectors .colorBlock{cursor:default;justify-content:center;align-items:center;margin:0;border-right:1px solid #d2d2d2;width:50%}
#PT .selectors .capacity{cursor:default;margin:0;width:50%;display:flex;justify-content:center;align-items:center}
#PT .selectors .filtre:not(.capacity){display: flex;width: 100%;max-width: 100%;height: 100%;justify-content: center;align-items: center;box-shadow: unset}
#PT .bloc_select span, #PT .mobile_card .filtre:not(.capacity) span {width: 18px;height: 18px;border-radius: 100%;border: 1px solid #d2d2d2;cursor: pointer;position: relative}
#PT .selectors .filter-bloc-relative{display:none}
#PT .selectors .selector.color.bloc_select.active .filter-bloc-relative{display:block;background:#fff;z-index:5;position:absolute;width:100%;border:0;border-radius:8px;left:0}
#PT .selectors .selector.color.bloc_select.active .list_select{background:#fff;border:0;display:flex;flex-flow:column;align-items:center;justify-content:center;border-radius:0 0 8px 8px;gap:0;padding:0}
#PT .selectors li{padding:5px 0;display:flex;align-items:center;justify-content:center;width:100%;position:relative}
#PT .selectors li:not(:first-of-type):after{width:calc(100% - 24px);height:1px;background:#f2f2f2;position:absolute;content:"";top:0;left:12px}
#PT .selectors li:hover{background:#f2f2f2}
#PT .selectors li:hover + li:after{width:0%}
#PT .selectors li:last-child:hover{border-radius:0 0 8px 8px}
#PT .selectors li.disabled:hover{background:#fff}
#PT .selectors li.disabled:hover + li:after{width:calc(100% - 24px)}
#PT .selectors li.disabled{cursor:default}
#PT .selectors li.disabled span{cursor:default}
#PT .selectors li.disabled span:after{content:"";width:22px;height:2px;background-color:#181818;position:absolute;transform:rotate(135deg);right:-2px;bottom:8px}
#PT .selectors .selector {display: inline-block;position: relative;cursor: pointer;width: 50%;border: 0;height:100%;margin:0 auto;}
#PT .selectors .selector:after {position: absolute;right: 10px;top: 13px;pointer-events: none;border-color: #181818;border-style: solid;border-width: 2px 2px 0 0;content: '';transform: rotate(135deg);width: 7px;height: 7px}
#PT .selectors .selector.active:after{transform:rotate(-45deg);top:auto;bottom:11px}
#PT .selectors .selector select{background: 0 0;border: none;font-family: SFR-Regular;font-size: 14px;color: #181818;width: 100%;height: 100%;-moz-appearance: none;-webkit-appearance: none;outline: 0;position: relative;cursor: pointer;border-radius: 10px 10px 0 0;padding: 0 calc(100% / 4)}
#PT .selectors .selectors > div:not(:last-of-type) {border-right: solid 1px #d2d2d2;border-radius: 0;padding: 0 6px}
#PT .desc.reconditionne .selectors > div:first-of-type,#PT .selectors.reconditionne > div:first-of-type{width:70px;margin:0}
#PT .desc.reconditionne .selectors div:nth-child(3),#PT .selectors.reconditionne div:nth-child(2){width:112px;border-right: 1px solid #d2d2d2;}
#PT .desc.reconditionne .selectors div:last-of-type,#PT .selectors.reconditionne div:last-of-type{width:140px}
#PT .desc.reconditionne .selectors div:last-of-type select,#PT .selectors.reconditionne div:last-of-type select{padding:0 16px}
#PT .selectors > div:first-of-type .selector option:disabled{text-decoration:line-through}
#PT .selectors > div:first-of-type .links{height:auto}

#PT #Telephone.lame-offre > .L img {display:block;margin:0 auto;max-width:80px;}

#PT #Telephone.lame-offre .M .desc:not(.reconditionne) .selectors {max-width:184px}
#PT #Telephone.lame-offre .M .selectors {border: 1px solid #d2d2d2;}
#PT #Telephone.lame-offre .M .selectors .selector select {padding: 0 34px 0 5px;min-width: 90px;}
#PT #Telephone.lame-offre .M .selectors .selector:not(:last-of-type) {border-right: 1px solid #d2d2d2;border-top-right-radius: 0;border-bottom-right-radius: 0;}
#PT #Telephone.lame-offre .M .selectors .selector {border:0;}
#PT #Telephone.lame-offre .M .reconditionne {max-width: 300px;}
#PT #Telephone.lame-offre .M .selectors .selector.color.bloc_select .filtre {cursor:pointer;justify-content: left;padding: 0 34px 0 10px;min-width: 80px;}
#PT #Telephone.lame-offre .M  input {display:none;}
#PT #Telephone.lame-offre .M  input:checked + .selector .filter-bloc-relative{display: block;background: #fff;z-index: 5;position: absolute;width: calc(100% + 2px);border: solid 1px #d2d2d2;border-top: 0;left: -1px;}
#PT #Telephone.lame-offre .M .filter-bloc-relative ul{padding:0;}
#PT #Telephone.lame-offre .M .filter-bloc-relative ul li{justify-content:left;padding-left:10px;}
#PT #Telephone.lame-offre .M  input:checked + .selector:after {transform: rotate(-45deg);top: auto;bottom: 7px;}
#PT .tilte-asso {font-family: SFR-Bold;line-height: 34px;text-transform:unset;text-align:left;margin-bottom:16px;width:840px;max-width: 100%;letter-spacing: -0.02em;}
#PT .subtilte-asso {font-family: SFR-Regular;font-size: 14px;line-height: 22px;margin:0 0 24px;width:840px;max-width: 100%;text-align:left;}
#PT .btn {max-width:840px;max-width: 100%;margin:auto;}

#PT .lame-b {position: relative;display:flex;flex-flow:row wrap;box-shadow: 0px 8px 24px 4px rgba(0, 0, 0, 0.04);border-radius: 12px;padding:24px;width:840px;max-width:100%;margin: 0 auto;background:#fff;}
#PT .lame-b .title {font-family: 'SFR-Bold';font-size: 12px;line-height: 16px;color: #181818;}
#PT .lame-b > a {margin: 8px 400px 16px 105px;}
#PT .lame-b > .L{width: 160px;text-align:right;padding-right: 10px;}
#PT .lame-b .L .img {width:45px;height:45px;float: right;border-radius: 4px;display: inline-flex;align-items: center;justify-content: center;}
#PT .lame-b .L .img img {max-width: 100%;}
#PT .lame-b .M{width: calc(100% - 160px);position:relative;display:flex;gap:24px;align-items: center;}
#PT .lame-b .M > div {max-width:276px;}
#PT .lame-b .M .subtitle {font-family: 'SFR-Regular';font-size: 12px;line-height: 16px;}
#PT .lame-b .M .desc {font-family: 'SFR-Regular';font-size: 12px;line-height: 16px;padding-bottom:0;}
#PT .lame-b button{width:fit-content;margin:0;}

#PT .lame-toggle {position: relative;display:flex;flex-flow:row wrap;box-shadow: 0px 8px 24px 4px rgba(0, 0, 0, 0.04);border-radius: 12px;padding:24px 24px 0;width:840px;max-width:100%;margin: 0 auto;background:#fff;}
#PT .lame-toggle .title {font-family: 'SFR-Bold';font-size: 12px;line-height: 16px;color: #181818;margin-right:auto;}
#PT .lame-toggle > .title {font-size: 16px;line-height: 22px;margin: 0 120px 0 105px;}
#PT .lame-toggle > a {margin: 8px 400px 16px 105px;}
#PT .lame-toggle i {font-style: italic;}
#PT .lame-toggle > .L{width: 160px;text-align:right;padding-right: 10px;}
#PT .lame-toggle .L .img {width:45px;margin-bottom:24px;float: right;border-radius: 4px;display: inline-flex;align-items: center;justify-content: center;}
#PT .lame-toggle .L .img img {max-width: 100%;}
#PT .lame-toggle .M{width: calc(100% - 320px);position:relative;display:flex;flex-direction: row-reverse;justify-content: space-between;align-items: center;margin:0 0 24px 0;}
#PT .lame-toggle .M.showInput{flex-wrap:wrap;}
#PT .lame-toggle .M.Mstart{justify-content:flex-end;}
#PT .lame-toggle .M > div {max-width:261px;}
#PT .lame-toggle .M .subtitle {font-family: 'SFR-Regular';font-size: 12px;line-height: 16px;}
#PT .lame-toggle .M .desc {font-family: 'SFR-Regular';font-size: 12px;line-height: 16px;padding-bottom:0;}
#PT .lame-toggle .M .sub-desc {font-family: 'SFR-Regular';font-size: 10px;line-height: 10px;margin-top: 13px;margin-right:auto;}
#PT #Sfp.lame-toggle .M .sub-desc {margin-top:0;}
#PT .lame-toggle .M .sub-desc .g{color: #8A8A8A;margin-top: 2px;}
#PT .lame-toggle > .R{width:160px;text-align:right;}
#PT .lame-toggle .R .p-block{display:none;}
#PT .lame-toggle .R .p-block.showPrice{display:block;}
#PT .lame-toggle .showNum{width:400px;display:none;margin-bottom:24px;}
#PT .lame-toggle .message{padding: 16px 24px 16px 72px; margin:0 ;font-size:12px;line-height:18px;width:400px;margin-bottom:16px;}
#PT .lame-offre  .message{padding: 16px 24px 16px 72px; margin:0 ;font-size:12px;line-height:18px;width:400px;margin-bottom:16px;}
#PT .message.wa{background: #FFF4E0;}
#PT .message.ok{background: #E8F8F0;} 
#PT .message.ko{background: #FFF0F0;} 
#PT .message.i {background: #ECF2FF;}
#PT .lame-toggle .showNum input[type="text"].on-error{border-color:var(--clr-error);}
#PT .lame-toggle .showNum input[type="tel"].on-error{border-color:var(--clr-error);}
#PT .lame-togglev2 .M > div{max-width:400px;}
#PT input.toggle:checked + .M  .showNum{display:block;}
#PT .lame-toggle .showNum .sr-message-error{color:var(--clr-sfr2); clear: both; position: relative; overflow: hidden;}
#PT .lame-toggle .showNum input[type="text"]{font-family: "Poppins-Regular", sans-serif; width: 400px;max-width:100%;height: 40px; margin-bottom: 8px;margin-top: 8px;background: #FFF; padding: 0 10px; -webkit-font-smoothing: antialiased; font-size: 14px;color: #222;border: 1px solid #222;border-radius: 8px;outline: none;    -webkit-appearance: none;}
#PT .lame-toggle .showNum input[type="tel"]{max-width:100%;font-family: "Poppins-Regular", sans-serif; width: 400px; height: 40px; margin-bottom: 8px;margin-top: 8px;background: #FFF; padding: 0 10px; -webkit-font-smoothing: antialiased; font-size: 14px;color: #222;border: 1px solid #222;border-radius: 8px;outline: none;    -webkit-appearance: none;}
#PT .lame-toggle .showNum input.unselectable{pointer-events:none;color:var(--clr-grey);background:var(--clr-bg);border-color:var(--clr-disable);transition: all .2s;}
#PT .lame-toggle .showNum label.noAftBef{width:auto; height:auto;top:0;}
#PT .lame-toggle .showNum .numCta{position:relative;font:normal 12px/14px SFR-Bold;padding:0 13px 0 0;cursor:pointer;width:fit-content;color:var(--clr-sfr2);}
#PT .lame-toggle .showNum .numCta:after{content:'';position:absolute;width:8px;height:8px;right:1px;top:0;bottom:0;margin:auto;border-radius:2px;border:2px solid;border-left:0;border-bottom:0;transform:rotate(45deg);transition:all .2s cubic-bezier(.4,0,.2,1)}
#PT .lame-toggle .showNum .numCta:hover:after{right:-3px}
@keyframes rotate{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}
#PT .lame-togglev2.lame-toggle .showNum .ModifNum{top:0;width:auto;height:auto;}
#PT .lame-togglev2.lame-toggle .showNum .selectNumber{position:relative;font-family: "Poppins-Regular", sans-serif; width: 400px;height: 40px; margin-bottom: 8px; margin-top: 8px; background: #FFF;padding: 0 10px;-webkit-font-smoothing: antialiased;font-size: 14px;    color: #222;border: 1px solid #222; border-radius: 8px; outline: none; -webkit-appearance: none;}
#PT .lame-togglev2.lame-toggle .showNum .selector{position:relative;}
#PT .lame-togglev2.lame-toggle .showNum .selector:after{transition: all 0.2s ease-out;outline: 0; position: absolute; right: 12px; top: 22.5px; pointer-events: none;border-style: solid;border-width: 2px 2px 0 0; content: ''; height: 8px;transform: rotate(135deg); width: 8px;}
#PT .lame-togglev2.lame-toggle .showNum #showNumero:not(:checked) ~ .message{display:none;} 
#PT .lame-togglev2.lame-toggle .showNum #showNumero:checked ~ .unselectable{pointer-events:auto; background:#fff;border-color:#222;color:#222;}
#PT .lame-togglev2.lame-toggle .showNum #showNumero:checked ~ .hide{display:block;}
#PT .lame-togglev2.lame-toggle .showNum #showNumero:checked ~ .selector{display:none;}
#PT .lame-togglev2.lame-toggle .showNum #showNumero:checked ~ .ModifNum{display:none;}
#PT .lame-toggle .showNum .ModifNum:before{content:none;}
#PT .lame-toggle .showNum .ModifNum:after{content:none;}
#PT .lame-toggle .noAftBef:before{display:none;}
#PT .lame-toggle .noAftBef:after{display:none;}
#PT .lame-togglev2 .M{align-items: flex-start;}
#PT .lame-togglev2 .M label{top:16px;}
#PT .lame-togglev2 .M #NoTop{top:0;}
/*border-radius: 8px; outline: none; -webkit-appearance: none;}*/
#PT #pushNetflixOrDisney .M:nth-child(2),#PT #Assurance.lame-toggle .M:nth-child(2), #PT #BoxEquipOptions.lame-toggle .M:nth-child(2) {flex-direction: column;align-items:unset;}
#PT #pushSLNetflix input.toggle + div label {display:none}
#PT #pushSLNetflix.lame-toggle .M {display:block}
#PT .beforeAnimation {transition: 0.2s cubic-bezier(0.24, 0, 0.5, 1);}
#PT .afterAnimation {transition: 0.35s cubic-bezier(0.54, 1.6, 0.5, 1);}
#PT input.toggle {opacity: 0;position: absolute;}
#PT input.toggle + div label {position: relative;z-index: 6;display: inline-block;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;cursor: pointer;transition: 0.4s ease;height: 20px;width: 40px;border-radius: 60px;}
#PT input.toggle + div label:before {content: "";position: absolute;display: block;transition: 0.2s cubic-bezier(0.24, 0, 0.5, 1);height: 20px;width: 40px;top: 0;left: 0;border-radius: 16px;background: #A0A0A0;}
#PT input.toggle + div label:after {content: "";position: absolute;display: block;transition: 0.35s cubic-bezier(0.54, 1.6, 0.5, 1);background: #fff;height: 18px;width: 18px;top: 1px;left: 1px;border-radius: 32px;}
#PT input.toggle + div label.loader:after {background: transparent;}
#PT input.toggle:checked + div label:before {background: #02C39A;transition: width 0.2s cubic-bezier(0, 0, 0, 0.1);}
#PT input.toggle:checked + div label:after {left: 21px;}
#PT input.toggle:checked + div .subtitle {font-family:SFR-Bold;}
#PT input.toggle:checked + div + .R .p-block {display:inline-table;}
#PT input.toggle[type="radio"]:checked + div label.uncard {z-index: 10;}

#PT .lame-toggle.gen8 .img{width:150px;height:150px;box-shadow:none;border-radius: 6px;}
#PT .lame-toggle .link {text-align: left;}
#PT .lame-toggle.gen8 .link {margin-top: 30px;}
#PT .lame-toggle.gen8 .title {font-size: 16px;line-height: 22px;color: #181818;}
#PT .lame-toggle.gen8 .M > div {max-width:unset;}
#PT .lame-toggle.gen8 .M .desc {font-size: 14px;line-height: 18px;margin-top: 10px;}


#PT #Content > .lame-button.first:before {border-top-left-radius: 8px;}
#PT #Content > .lame-button.last:before {border-bottom-left-radius: 8px;}
#PT .lame-button {position: relative;display: flex;flex-flow: row wrap;box-shadow: 0px 8px 24px 4px rgb(0 0 0 / 4%);border-radius: 12px;padding: 24px 48px 48px 40px;width: 840px;max-width: 100%;margin: 0 auto;background: #fff;color: #181818;margin-top: 0;}
#PT .lame-button:before {content: '';position: absolute;left: 20px;top: 0;height: 100%;width: 16px;background: var(--clr-sfr2);border-radius: 12px 0 0 12px;}
#PT .lame-button:after {content: "";position: absolute;left: 20px;top: 0;width: calc(100% - 40px);height: 100%;box-shadow: 0px 0px 24px 4px rgba(0, 0, 0, 0.08);border-radius: 12px;}
#PT .lame-button .title {font-family: 'SFR-Bold';font-size: 12px;line-height: 16px;color: #181818;}
#PT .lame-button > .title {font-size: 16px;line-height: 22px;margin: 0 120px 0 105px;}
#PT .lame-button > .L {width: 140px;text-align: center;}
#PT .lame-button .L .img {width: auto;height: 100%;float: none;display: flex;justify-content: center;align-items: center}
#PT .lame-button .M{width: calc(100% - 270px);position: relative;display: flex;flex-flow: row wrap;justify-content: space-between;align-items: center;}
#PT .lame-button .M > div {max-width:261px;}
#PT #Content > section.lame-button:not(.first) {margin-top: 0;}
#PT .lame-button .M, #PT .lame-button .L .img {margin-bottom: 0;}
#PT .lame-button .M .desc {font-family: 'SFR-Regular';font-size: 12px;line-height: 16px;padding-bottom:0;}
#PT .lame-button .M .btn {margin: auto 0 auto;}
#PT .lame-button > .R {display:flex;align-items:center;z-index:1;}

#PT .lame-M-R {position:relative;display: flex;flex-flow: row wrap;box-shadow: 0px 8px 24px 4px rgb(0 0 0 / 4%);border-radius: 12px;padding: 24px;width: 840px;max-width: 100%;margin: 0 auto;background: #fff;}
#PT .lame-M-R > section {display: flex;justify-content: space-between;width: 100%;}
#PT .lame-M-R > section:not(:last-of-type) {margin-bottom: 20px;}
#PT .lame-M-R > .L {width: 160px;}
#PT .lame-M-R .M {width:272px;}
#PT .lame-M-R .M p{font-size: 12px;line-height: 16px;color:#222;}
#PT .lame-M-R .M .title{font-family: SFR-Bold;margin-bottom:4px;color: #181818;}
#PT .lame-M-R .M .subtitle{font-family: SFR-Regular;}
#PT .lame-M-R > .R {width: 160px;text-align: right;margin-left: auto;}
#PT .lame-M-R.double {border-radius: 12px 12px 0 0 ;margin-bottom: -19px;}
#PT .lame-M-R.double + .lame-M-R{border-radius: 0 0 12px 12px;box-shadow: none;}

#PT .lame-option {position: relative;width: 840px;max-width: 100%;margin-left: auto;margin-right: auto}
#PT .lame-option.promo  {margin:30px auto;}
#PT .lame-option .w {position:relative;display:flex;flex-flow: row wrap;background:#fff;padding: 24px;justify-content: space-between;box-shadow: 0px 8px 24px 4px rgb(0 0 0 / 4%);}
#PT .lame-option .w > .L img {width: 348px;max-width:100%;height:auto;border-radius: 8px;}
#PT .lame-option .w > .R {display: flex;flex-direction: column;align-items: flex-end;}
#PT .lame-option .w .R .title {display:block;font-family: SFR-Black;color: #181818;font-size: 20px;line-height: 24px;text-align: right;margin-bottom:4px;max-width:250px;}
#PT .lame-option .w .R .sub {font-family: SFR-Bold;font-size: 10px;line-height: 14px;text-align: right;}
#PT .lame-option .w .R .text {font-family: SFR-Regular;color: #222;font-size: 10px;line-height: 12px;text-align: right;}
#PT .lame-option .w .R .p-block {float: right;}
#PT .lame-option .w .R .p-block .selector {font-size: 12px;line-height: 16px;border: 1px solid #d2d2d2; position: relative; cursor: pointer;margin-top:4px;}
#PT .lame-option .w .R .p-block .selector:after {position: absolute;right: 15px;bottom: 12.5px;pointer-events: none;border-color: #222;border-style: solid;border-width: 2px 2px 0 0;content: '';height: 8px;transform: rotate(135deg);width: 8px;}
#PT .lame-option .w .R .p-block .selector select {background: 0 0;border: none;font-size: 12px;line-height: 16px;color: #222;width: 100%;height: 30px;-moz-appearance: none;-webkit-appearance: none;outline: 0;position: relative;cursor: pointer;padding: 0 33px 0 10px;}
/*#PT .lame-option .sticker {position: absolute;background-color: #FFCD00;padding: 4px 12px 12px 12px;z-index: -1;top: -20px;left: 0;border-radius: 8px 8px 0px 0px;color: #181818;line-height: 12px;font-size: 10px;font-family: 'SFR-Black';}*/
#PT .lame-option.double {margin-bottom: -19px;}
#PT .lame-option.double .w {border-radius: 8px 8px 0 0;}
#PT .lame-option.double + .lame-M-R {border-radius: 0 0 12px 12px;margin:20px auto 30px;}
#PT .lame-option .modes {margin-top: 30px;}
#PT .lame-option .modes p{font-family: SFR-Bold;font-size: 32px;line-height: 34px;text-align: center;letter-spacing: -0.02em;color: #181818;margin-top:20px;}
#PT .lame-option .modes a{display:table;font-family: SFR-Bold;font-size: 16px;text-align: center;line-height: 16px;margin:20px auto 0;}
#PT  p.saved {font-family: 'SFR-Bold';font-size: 16px;line-height: 22px;color: #222;text-transform: none;width: 840px;max-width: 100%;margin: -15px auto 20px;}
#PT .lame-option.saved > .L {display: inline-flex;align-items: center;font-family: 'SFR-Bold';font-size: 16px;line-height: 22px;}
#PT .lame-option .w > .L {max-width: calc(100% - 250px);}
#PT .lame-option .w .L .title{display: none;font-family: SFR-Black;font-size: 18px;line-height: 24px;}
#PT .lame-option .w .L .subtitle{font-family: SFR-Bold;font-size: 16px;line-height: 22px;margin:10px 0;}
#PT .lame-option .w .L .desc{font-size: 12px;line-height: 16px;color: #181818;margin-bottom:24px;}
#PT .lame-option .toast, #PT #Fac .bot .toast{background: transparent;padding: 5px 0 0;font-size: 12px;}
#PT .tg {font-family: SFR-Bold;font-size: 12px;line-height: 16px;display:flex;flex-direction: row-reverse;justify-content:space-between;width: calc(100% - 202px);}
/*.lame-services {position:absolute;bottom:-276px;display:flex;flex-flow:row wrap;padding:20px 15px;width:400px;}
.lame-services.five-elem {bottom:-356px;}
.lame-services >div {display:flex;flex-direction:column;justify-content: center;align-items: center;width:50%;margin-bottom:24px;}
.lame-services >div img{max-height:32px;width:auto;margin-bottom:16px;}
.lame-services >div p {font-family: SFR-Bold;font-size: 14px;line-height: 18px;text-align: center;max-width:107px;}
.lame-services.five-elem >div:nth-child(3) {width:100%;}*/

#PT .lame-mode-paiement {position:relative;width: 840px;max-width: 100%;background: #FFF;border-radius: 12px;padding:20px;margin: 0 auto;}
#PT .lame-mode-paiement .title{font-family: SFR-Bold;font-size: 16px;line-height: 24px;margin-bottom:16px}
#PT .lame-mode-paiement > .R{position:relative;display:flex;flex-flow:row wrap;width: -moz-fit-content;overflow:hidden;}
#PT .lame-mode-paiement .elem {padding: 16px;align-items: center;height: auto;gap: 8px;position: relative;display: inline-flex;flex-flow: row wrap;text-align: left;width: 100%;background: #fff;border-radius: 8px;border: 1px solid var(--clr-disable);cursor: pointer;margin-bottom: 8px;font-size: 12px;line-height: 18px;justify-content: space-between;flex-wrap: wrap;}
#PT .lame-mode-paiement .elem.a {border: 2px solid var(--clr-sfr2)}
#PT .lame-mode-paiement .elem.a span{display:none;}
#PT .lame-mode-paiement .elem .opt {width: 100%;justify-content: space-between;display: inline-flex;align-items: center;}
#PT .lame-mode-paiement .elem .opt + .opt {border-top: solid 1px var(--clr-disable);padding-top: 8px;}
#PT .lame-mode-paiement > .R input:checked + .elem {border: 2px solid var(--clr-sfr2);cursor: default;padding: 15px;}
#PT .lame-mode-paiement .nfois{font-family: SFR-Bold;font-size: 16px;line-height: 16px;}
#PT .lame-mode-paiement .b {font: normal 24px/36px SFR-Bold;}
#PT .lame-mode-paiement .right {text-align: right;}
#PT .lame-mode-paiement .or {font-size: 14px;font-family: 'SFR-Regular';vertical-align: middle;display: inline-block;}
#PT .lame-mode-paiement .elem img {height: 12px;vertical-align: middle;}
#PT .lame-mode-paiement .elem .elem {display:none}
#PT .lame-mode-paiement .elem.a .elem {display:inline-flex}
#PT .lame-mode-paiement i.tooltip > span {text-align:left;left: -12px;padding: 16px;width: 400px;max-width: 67vw;}
#PT .lame-mode-paiement i.tooltip span:after {left: 16px;right: unset;}
#PT .lame-mode-paiement .elem .default{width:100%;position: absolute;height: 100%;left: 0;top: 0;}
/*#PT .lame-mode-paiement > .R .elem:has(input:checked) .elem {display:inline-flex}*/

#PT .addons_bloc {padding: 24px 0;max-width:100%;margin: 0 auto;background:transparent;}
#PT .addons_bloc .sticker {background: #ffcd00;display: inline-block;padding: 4px 12px 12px 12px;position: absolute;top: 0;border-radius: 8px 8px 0px 0px;color: #181818;line-height: 12px;font-size: 10px;font-family: 'SFR-Black';}
#PT .addons-card{background:#fff;overflow:hidden;position:relative;border-radius:12px;box-shadow: 0px 8px 16px rgb(24 24 24 / 8%);display:flex;flex-direction:column;justify-content:space-between;}
#PT .addons-card .WhiteBloc{padding:16px 20px 0}
#PT .addons-card .bl_title{display:flex;border-bottom:1px solid #d2d2d2;height:60px;overflow:hidden}
#PT .addons-card .bl_title h3{max-height:52px;font-size:22px;line-height:1.18;overflow:hidden}
#PT .addons-card .Detail{color:#222;padding:16px 0 23px;display:flex;align-items:center}
#PT .addons-card .Detail .bl_img{margin-right:12px;width:60px;min-width:60px;height:60px}
#PT .addons-card .Detail .bl_img img{max-height:60px;max-width:60px}
#PT .addons-card .bl_desc{float:left;max-width:59%}
#PT .addons-card .bl_btn{display:flex;flex-wrap:wrap;max-width:40%;justify-content:flex-end}
#PT .addons-card .old_prix{text-decoration:line-through;color:#444;font-size:12px;line-height:1.67}
#PT .addons-card .bl_desc .desc{font-family:Arial,sans-serif;font-size:12px;color:#222}
#PT .addons-card .bl_desc .bl_desc .includ{font-size:19px;font-weight:700;color:#222;display:block}
#PT .addons-card .bl_prix .i {display: block;font-family: SFR-Regular;font-size: 12px;line-height: 18px;}

#PT .addons_bloc .list{width: 840px;max-width: 100%;margin: auto;display: grid;gap: 36px 40px;grid-template-columns: repeat(2, 1fr);justify-content: left;margin: -12px auto 0;}
#PT .addons-card .BlackBloc bol-label-refund {position: absolute;margin-left: auto;background: #ffcd00;color: #181818;font-family: 'SFR-Black';font-size: 10px;line-height: 20px;border-radius: 4px;right: 16px;top: -10px;left: unset;padding: 0 8px;}
#PT .addons_bloc .list>li{max-width:100%;min-width:auto;padding:19px 0 0;position:relative;}
#PT .addons_bloc .addons-card{overflow: hidden;position: relative;box-shadow: 0px 0px 24px 4px rgb(0 0 0 / 4%);display: flex;flex-direction: column;justify-content: space-between;width: 100%;max-width: 400px;border-radius:12px;background: 0 0;}
#PT .addons_bloc .addons-card.accessory .header {min-height:180px;padding: 16px 0;}
#PT .BlackBloc .bl_prix div > p:nth-child(3) > span:nth-child(2) > b{font-family:'SFR-regular';}
#PT .addons_bloc .addons-card .header{position:relative;width:100%;background:#fff;display:flex;align-items:center;justify-content:center}
body.Media #PT .addons_bloc .addons-card a {color: #222;background: transparent;}
#PT .addons-card .header img {width: auto;max-width: 100%;}
#PT .addons-card:not(.accessory) .header img{width: 100%;height: auto;max-height: 100%;object-fit: cover;}
#PT .addons-card .colors {position: absolute;left: 24px;top: 0;bottom: 0;margin: auto;height: fit-content;width:24px;}
#PT .addons-card .colors span {position: relative;display: table-caption;cursor: pointer;-webkit-background-clip: text;-webkit-text-fill-color: transparent;box-shadow: 0px 1px 2px 0px #00000033 inset;width: 16px;font-size: 5px;height: 16px;border-radius: 50%;box-sizing: content-box;margin: 4px;z-index:10;}
#PT .addons-card .colors .a:after {content: "";position: absolute;width: 24px;height: 24px;border-radius: 100%;border: solid 2px var(--clr-sfr2);top: 0;bottom: 0;margin: auto;left: -4px;box-sizing: border-box;}
#PT .addons-card .colors .d:before {content: '';position: absolute;width: 28px;height: 1.5px;background: var(--clr-black);transform: rotate(45deg);left: -6px;bottom: 0;top: 0px;margin: auto;}
#PT .addons_bloc .addons-card .BlackBloc{position: relative;border-top: 0;height: 290px;padding: 24px;background: #fff;}
#PT .addons_bloc .addons-card .BlackBloc > p {font-family: SFR-Regular;font-size: 12px;line-height: 16px;display: -webkit-box;-webkit-line-clamp: 1;-webkit-box-orient: vertical;overflow: hidden;}
#PT .addons_bloc .addons-card .bl_prix{position: absolute;bottom: 80px;right: 24px;height: auto;align-self: flex-end;text-align: right;margin-bottom: 0;}
#PT .addons_bloc .addons-card .bl_prix .or{display:block;font-family:SFR-Bold;font-size:12px;line-height:16px;}
#PT .addons_bloc .addons-card .title{font-family: 'SFR-Black';font-size: 16px;line-height: 22px;height: auto;max-height: 45px;margin-bottom: 8px;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;overflow: hidden;padding: 0;color:#181818;}
#PT .addons_bloc .addons-card .title:before {position: absolute;content: '';width: 100%;height: 186px;top: -186px;left: 0;}
#PT .addons_bloc .addons-card .engagement {font-family: SFR-Regular;font-size: 10px;line-height: 12px;}
#PT .addons_bloc .addons-card bol-price {display: inline-block;font-family: SFR-Black;font-size: 20px;line-height: 24px;color: #181818;}
#PT .addons_bloc .addons-card .bl_btn,#PT .addons_bloc .addons-card .bl_btn .btn{bottom: 12px;position: absolute;width: calc(100% - 24px);max-width: 100%;right: 0;left: 0;margin-right: auto;margin-left: auto;}
#PT .addons_bloc input[type="checkbox"] {display: none;}
#PT .addons_bloc .vp {display: none;font-family:SFR-Regular;font-size: 14px;line-height: 14px;color: #181818;margin: 20px auto 0;cursor: pointer;position: relative;padding-right: 22px;text-align: left;}
#PT .addons_bloc .vm {display: table;font-family:SFR-Regular;font-size: 14px;line-height: 14px;color: #181818;margin: 20px auto 0;cursor: pointer;position: relative;padding-right: 22px;text-align: left;}
#PT .addons_bloc input[type="checkbox"] + label {display: block;position: relative;}
#PT .addons_bloc input[type="checkbox"]:checked + label .vm {display: none;}
#PT .addons_bloc input[type="checkbox"]:checked + label .vp {display: table;}
#PT .addons_bloc .vm:after {transition: all 0.2s ease-out;outline: 0;position: absolute;right: 6px;top: -3px;bottom:0;margin:auto;pointer-events: none;border-style: solid;border-width: 2px 2px 0 0;content: '';height: 8px;transform: rotate(135deg);width: 8px;}
#PT .addons_bloc .vp:after {transition: all 0.2s ease-out;outline: 0;position: absolute;right: 6px;top: -3px;bottom:0;margin:auto;pointer-events: none;border-style: solid;border-width: 2px 2px 0 0;content: '';height: 8px;transform: rotate(135deg);width: 8px;transform: rotate(-45deg);top:6px;}
#PT .addons_bloc .addons-card.accessory .availability {position: relative;display: block;font-size: 10px;color: #181818;font-family: SFR-Regular;margin-left: 14px;margin-top: 6px;}
#PT .addons_bloc .addons-card.accessory .BlackBloc h3 {height: auto;line-height: 22px;letter-spacing: -0.0005em;white-space: normal; color: #181818; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
#PT .addons_bloc .addons-card.accessory .availability:before {background-color: #ff9300;}
#PT .addons_bloc .addons-card.accessory .availability.o:before {background-color: #ff9300;}
#PT .addons_bloc .addons-card.accessory .availability.g:before {background-color: #02C39A;}
#PT .addons_bloc .addons-card.accessory .availability.r:before {background-color: #D90D25;}
#PT .addons_bloc .addons-card.accessory .availability:before {position: absolute;content: '';width: 10px;height: 10px;top: 0px;bottom:0;margin:auto;left: -15px;border-radius: 100%;}
#PT .addons_bloc .addons-card.accessory .stars {display: flex;margin-top: 16px;height:22px;}
#PT .count-rate{font-family:SFR-Regular;font-size:10px;line-height:12px;color:#181818;margin-left:4px;cursor:pointer;}
#PT .count-rate span{text-decoration:underline;}
#PT bol-rate .rating-wrapper {width: 68px;height: 12px;background: url(//static.s-sfr.fr/media/stars-12-grey.svg) no-repeat center center;display: inline-block;}
#PT bol-rate .rating-wrapper mark {height: 12px;background: url(//static.s-sfr.fr/media/stars-12-yellow.svg) no-repeat left top;background-size: 68px 12px;display: block;}
#PT .PhoneList {display: flex;width: 840px;max-width: 100%;display: grid;gap: 36px 40px;grid-template-columns: repeat(2, 1fr);padding: 24px 0;position: relative;justify-content: space-between;}
#PT .card_wrapper {position:relative;max-width: 100%;gap:36px 40px;}
#PT .card_wrapper .sticker {background: #ffcd00;display: inline-block;padding: 4px 12px 12px 12px;position: absolute;top: -20px;border-radius: 8px 8px 0px 0px;color: #181818;line-height: 12px;font-size: 10px;font-family: 'SFR-Black';}
#PT .goutte:before {content: "";position: absolute;top: 0px;right: 0px;width: 48px;height: 48px;z-index: 2;font-family: SFR-Bold;font-size: 16px;line-height: 22px;color: #fff;text-align: center;background-size: cover;display: flex;align-items: center;justify-content: space-evenly;}
#PT .goutte.compatibility-5g:before {background: url(//static.s-sfr.fr/media/pictos/goutte-compatibility-5g.svg) no-repeat;background-size: cover}
#PT .goutte.rec:before {background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 64 64' fill='none'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M32 0H56C60.4183 0 64 3.58172 64 8V32C64 49.6731 49.6731 64 32 64C14.3269 64 0 49.6731 0 32C-2.17128e-06 14.3269 14.3269 0 32 0Z' fill='%2332A75E'/%3E%3Ccircle cx='32' cy='32' r='29' fill='white'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M57.5423 35.0405L55.364 35.9451C55.3595 35.2201 54.9736 34.6513 54.1895 34.4773C52.996 34.2118 52.4004 35.1577 52.1907 36.108L51.6442 38.5663L56.5184 39.6482L56.853 38.1458L55.2491 37.79L55.3272 37.4386L57.1586 36.766L57.5412 35.0405H57.5423ZM55.1186 42.9464L53.6507 42.2604L54.4237 40.6063L53.296 40.0798L52.5231 41.734L51.7557 41.3748L52.6971 39.3604L51.536 38.8183L49.9432 42.2281L54.4672 44.3406L55.1186 42.9464ZM52.6235 44.4477C51.7903 43.8264 51.0664 44.2804 50.483 44.7544L50.3135 44.895C49.7748 45.3478 49.5729 45.5196 49.3543 45.3567C49.1892 45.234 49.2293 45.0433 49.3978 44.8191C49.5818 44.5704 49.8997 44.4031 50.2053 44.5102L50.7017 43.0802C49.9822 42.8371 49.1368 43.2185 48.4898 44.0874C47.7593 45.0678 47.7515 46.2011 48.5545 46.8C49.3755 47.4113 50.0904 46.8603 50.7005 46.3873L50.918 46.2178C51.2872 45.9323 51.575 45.7058 51.7936 45.8687C51.9944 46.0182 51.9319 46.2747 51.7512 46.5178C51.4612 46.9071 51.1155 46.9997 50.7808 46.8692L50.222 48.2255C51.0519 48.6159 51.8706 48.3058 52.6536 47.2551C53.3674 46.297 53.5459 45.1337 52.6235 44.4477V44.4477ZM48.4854 51.6029L47.776 50.6068L45.9289 51.923L45.5185 51.3486L47.1135 50.2109L46.4219 49.2405L44.8258 50.376L44.4499 49.8484L46.2256 48.5835L45.5151 47.5875L42.4868 49.7458L45.3846 53.8136L48.4854 51.6029ZM42.6854 55.1911L42.4668 49.874L40.9498 50.5053L41.2956 54.0947L38.9979 51.3173L37.4487 51.962L41.0658 55.8659L42.6843 55.1911H42.6854ZM37.868 55.026L37.3996 51.9163L35.8771 52.1461L36.3411 55.2268C36.4225 55.7655 36.1626 56.0131 35.7388 56.0767C35.3172 56.1403 35.0026 55.9797 34.9212 55.4409L34.4572 52.3602L32.9347 52.5889L33.4032 55.6986C33.5905 56.9367 34.5263 57.5111 35.9239 57.3003C37.3226 57.0895 38.0543 56.2641 37.868 55.026V55.026ZM30.1239 52.2743C28.5401 52.1249 27.4358 53.0205 27.283 54.6334C27.1347 56.2172 28.1385 57.3393 29.6343 57.4798C31.1367 57.6215 32.3335 56.7058 32.4818 55.1219C32.6335 53.5091 31.7145 52.4238 30.1239 52.2743V52.2743ZM25.5698 51.4367L23.194 50.6002L21.5377 55.3127L22.9899 55.8235L23.5342 54.2731L23.8755 54.3925L24.3239 56.292L25.9925 56.8787L25.3534 54.6077C26.074 54.6892 26.6852 54.3735 26.9507 53.615C27.3567 52.4617 26.4878 51.7579 25.5698 51.4367ZM22.0563 52.0557C22.8706 50.7842 21.9582 49.8584 21.3425 49.4658L19.2779 48.1452L16.5876 52.3513L17.8848 53.18L18.5942 52.0702L19.3203 52.5342C20.3688 53.2046 21.4507 53.0049 22.0575 52.0546L22.0563 52.0557ZM17.829 49.3119C18.9054 48.2512 18.2217 47.1469 17.7097 46.6272L15.9875 44.8793L12.4295 48.385L13.5103 49.4814L14.4494 48.5557L15.054 49.1691C15.9284 50.057 17.0271 50.1016 17.8302 49.3108L17.829 49.3119ZM11.7569 47.6466L15.0395 43.4583L14.1204 41.966L8.90373 43.02L9.75142 44.3919L10.6225 44.1666L11.4847 45.5642L10.8913 46.2423L11.7569 47.6466V47.6466ZM8.79442 39.3727C9.24058 39.5913 9.728 39.7229 10.2199 39.7486L10.1708 38.3878C9.94104 38.4068 9.65773 38.3688 9.37888 38.2763L9.77261 37.5535C10.4418 38.535 10.9884 38.5395 11.3676 38.448C12.0335 38.2863 12.4718 37.529 12.1807 36.3266C11.9353 35.3093 11.3107 34.6423 10.4229 34.8576C10.0013 34.9591 9.70569 35.2123 9.45473 35.5826C8.92381 34.8632 8.365 34.8387 7.9155 34.948C7.10573 35.1443 6.69192 36.002 6.99642 37.2613C7.12358 37.7911 7.40465 38.2618 7.77831 38.6488L7.53292 39.1095L7.96792 40.9063L8.79442 39.3727V39.3727ZM6.63838 28.0738L11.4635 29.2428L11.8238 27.756L10.2366 27.3712L10.3214 27.022L12.1551 26.3885L12.5689 24.682L10.3872 25.5386C10.3961 24.818 10.0225 24.2447 9.24615 24.0573C8.06608 23.7707 7.45596 24.6998 7.22731 25.639L6.63838 28.0738V28.0738ZM8.33154 22.1367L12.7663 24.3674L14.4684 20.9867L13.382 20.4402L12.3692 22.4545L11.7402 22.1389L12.6157 20.3989L11.5561 19.8657L10.6805 21.6057L10.105 21.3157L11.0798 19.3805L9.99346 18.834L8.33154 22.1367V22.1367ZM12.676 19.0827C13.9363 20.1212 15.2592 20.0933 16.2753 18.863C17.0025 17.9818 17.0873 17.0271 16.4069 15.9998L15.3105 16.8798C15.6228 17.3082 15.644 17.6952 15.3685 18.0287C14.9859 18.4916 14.3981 18.4447 13.6887 17.8569C13.0887 17.3628 12.8277 16.7951 13.2281 16.3099C13.498 15.982 13.8862 15.9708 14.1918 16.1091L14.8744 14.8208C14.0713 14.4238 13.1009 14.542 12.2945 15.5202C11.3765 16.6322 11.3442 17.983 12.676 19.0827V19.0827ZM16.2318 14.9368C17.1687 16.2117 18.6544 16.3824 19.859 15.4979C21.0681 14.61 21.3514 13.14 20.4167 11.8651C19.4631 10.5668 18.0644 10.3682 16.7839 11.3074C15.509 12.2443 15.2782 13.6385 16.2318 14.9368V14.9368ZM20.4926 9.04873L22.285 13.6787L23.6302 13.1578L22.6776 10.6995L25.3378 12.4953L26.7097 11.9643L24.9162 7.3355L23.5643 7.85973L24.4857 10.2355L21.9671 8.47765L20.4915 9.04873H20.4926ZM26.799 6.89604L27.3656 11.826L29.5975 11.5706C31.3932 11.3643 31.9543 10.1429 31.7948 8.74758C31.6498 7.49612 30.9303 6.422 28.9528 6.64842L26.799 6.89604V6.89604ZM25.4984 16.533C24.17 16.533 23.0892 17.6149 23.0892 18.9422V34.0222L21.0815 32.0145C21.0369 31.9699 20.9677 31.9699 20.9253 32.0145L20.2305 32.7083C20.2093 32.7306 20.197 32.7573 20.197 32.7863C20.197 32.8153 20.2093 32.8443 20.2305 32.8644L23.5766 36.2106C23.5989 36.2329 23.6268 36.244 23.6547 36.244C23.6826 36.244 23.7105 36.2329 23.7328 36.2106L27.0789 32.8644C27.1235 32.8209 27.1235 32.7518 27.0789 32.7083L26.384 32.0134C26.3417 31.971 26.2725 31.971 26.229 32.0134L24.2737 33.9687V22.2382H39.9248C39.9862 22.2382 40.0363 22.1891 40.0363 22.1266V18.9433C40.0363 17.6138 38.9544 16.533 37.626 16.533H25.4973H25.4984ZM32.6101 11.4357L34.1371 11.5416L34.484 6.59154L32.957 6.48446L32.6112 11.4357H32.6101ZM35.4432 7.90212L36.824 8.2345L35.9618 11.8227L37.4509 12.1796L38.312 8.59142L39.7006 8.92604L39.9984 7.68573L35.741 6.66404L35.4421 7.90212H35.4432ZM41.1462 8.18877L39.2076 12.7618L40.6163 13.3575L42.5549 8.78661L41.1462 8.18877ZM38.7927 28.7408V40.4435H23.1996C23.1383 40.4435 23.0881 40.4914 23.0881 40.5528V44.3886C23.0881 45.7159 24.17 46.7978 25.4984 46.7978H37.626C38.9544 46.7978 40.0352 45.7159 40.0352 44.3886V28.7286L41.995 30.6872C42.0362 30.7285 42.1087 30.7285 42.1511 30.6872L42.8449 29.9923C42.8884 29.9477 42.8884 29.8797 42.8449 29.8362L39.4987 26.49C39.4552 26.4465 39.3861 26.4465 39.3426 26.49L35.9964 29.8362C35.9529 29.8797 35.9529 29.9488 35.9964 29.9923L36.6913 30.6872C36.7114 30.7073 36.7393 30.7207 36.7694 30.7207C36.7984 30.7207 36.8252 30.7073 36.8475 30.6872L38.7938 28.7408H38.7927ZM44.2313 46.5758L43.146 47.3488L43.4427 48.7297L44.2413 48.1608L44.2313 46.5747V46.5758ZM42.5315 11.3899C41.6503 12.7038 41.9983 14.1617 43.2386 14.9926C44.4878 15.8269 45.9657 15.5927 46.8458 14.2788C47.7414 12.9403 47.4514 11.5561 46.1319 10.6727C44.818 9.79158 43.4282 10.0515 42.5315 11.3899ZM49.5115 13.3809L45.7795 16.6534L46.7309 17.7376L48.7118 15.9998L47.9377 19.114L48.9081 20.2204L52.6391 16.9468L51.6832 15.8582L49.7681 17.5379L50.5533 14.5699L49.5115 13.3809V13.3809ZM53.731 18.5763L49.2751 20.767L49.912 22.0619L52.2766 20.8986L50.7195 23.706L51.3698 25.0266L55.8257 22.8349L55.1855 21.5343L52.899 22.6587L54.4293 19.9962L53.731 18.5763ZM56.3812 24.6217L51.536 25.6981L52.3569 29.3922L53.5437 29.129L53.0529 26.9283L53.74 26.7755L54.1638 28.675L55.3205 28.4185L54.8966 26.5179L55.5268 26.3773L55.9964 28.4932L57.1832 28.2289L56.3801 24.6206L56.3812 24.6217ZM56.9411 25.891L57.153 26.8413L58.6064 27.4481L58.3186 26.1543L56.9411 25.891V25.891ZM61 32C61 47.9913 47.9913 61 32 61C16.0087 61 3 47.9913 3 32C3 16.0087 16.0087 3 32 3C47.9913 3 61 16.0087 61 32ZM30.0057 53.5135C29.4926 53.4656 28.9684 53.7701 28.8736 54.7828C28.781 55.7722 29.2361 56.1927 29.7492 56.2407C30.27 56.2897 30.7976 55.9618 30.8891 54.9725C30.985 53.9608 30.5266 53.5626 30.0057 53.5135V53.5135ZM53.9508 36.06C53.6909 36.002 53.4143 36.031 53.2905 36.5842L53.1276 37.3182L54.1348 37.5412L54.2977 36.8084C54.407 36.3121 54.253 36.128 53.9508 36.06V36.06ZM29.2171 10.3693C29.9878 10.2801 30.3236 9.86742 30.2154 8.92715C30.0927 7.84412 29.3989 7.843 28.7509 7.91662L28.4609 7.95008L28.7442 10.4229L29.2171 10.3693ZM19.1273 14.5007C19.5456 14.1929 19.7207 13.6028 19.1363 12.8053C18.5373 11.9911 17.935 11.9978 17.5156 12.3057C17.1029 12.609 16.9155 13.1823 17.5123 13.9966C18.0978 14.793 18.7135 14.8041 19.1273 14.5007ZM29.303 19.462C29.303 19.7218 29.5127 19.9338 29.7737 19.9338H33.2983C33.5593 19.9338 33.7701 19.7218 33.7701 19.462C33.7701 19.2021 33.5582 18.9913 33.2994 18.9913H29.7737C29.5127 18.9913 29.303 19.2021 29.303 19.462V19.462ZM25.4549 17.7186H37.5937C37.916 17.7208 38.216 17.8435 38.4391 18.0633C38.6689 18.2908 38.7916 18.5897 38.7938 18.9277V21.0525H24.2737V18.9266C24.2704 18.6076 24.392 18.3064 24.615 18.0789C24.8381 17.8491 25.137 17.722 25.456 17.7186H25.4549ZM43.9279 13.9642C44.3596 14.2531 44.9753 14.2152 45.5252 13.3943C46.0873 12.5555 45.8754 11.9889 45.4437 11.7C45.0177 11.4156 44.4142 11.4345 43.8521 12.2733C43.3022 13.0953 43.5018 13.6787 43.9279 13.9642ZM30.7441 43.6223C30.7441 44.0595 31.0988 44.4142 31.536 44.4142C31.9732 44.4142 32.3279 44.0595 32.3279 43.6223C32.3279 43.1851 31.9732 42.8304 31.536 42.8304C31.0988 42.8304 30.7441 43.1851 30.7441 43.6223ZM24.2737 41.7708H38.7938V44.3484C38.7972 44.6674 38.6767 44.9686 38.4536 45.1972C38.2305 45.4259 37.9305 45.553 37.6115 45.5564H25.4728C25.1448 45.5475 24.8448 45.4248 24.6295 45.2106C24.3987 44.9842 24.276 44.6842 24.2737 44.3462V41.7708V41.7708ZM8.97846 25.6267C8.72192 25.5642 8.44642 25.5877 8.31258 26.1364L8.13746 26.8625L9.1335 27.1035L9.30973 26.3785C9.42908 25.8877 9.27738 25.6992 8.97846 25.6267V25.6267ZM24.9619 52.4729L24.2537 52.223L23.9123 53.1968L24.6206 53.4455C25.1002 53.6128 25.3032 53.4812 25.4058 53.189C25.494 52.9402 25.4973 52.6603 24.9619 52.4729ZM12.2878 44.6362L13.2917 43.4873L11.8115 43.8655L12.2878 44.6351V44.6362ZM16.185 46.8447L15.2927 47.7236L15.7221 48.1586C16.1147 48.5579 16.4649 48.4095 16.659 48.2188C16.833 48.047 17.0538 47.7269 16.6144 47.2797L16.185 46.8447V46.8447ZM8.45535 36.3098C8.11181 36.3935 7.93335 36.6857 8.04042 37.1308C8.08504 37.3159 8.18765 37.4888 8.32373 37.645L8.98515 36.4325C8.78885 36.2753 8.58473 36.2786 8.45646 36.3098H8.45535ZM10.9081 37.1118C11.1802 37.046 11.3275 36.8441 11.2516 36.5285C11.1836 36.2418 10.9862 36.1526 10.7575 36.2083C10.579 36.2518 10.3738 36.437 10.2121 36.7415L10.1942 36.7605C10.4954 37.1285 10.7575 37.1475 10.9081 37.1118ZM20.6744 51.2504C20.5272 51.4802 20.2193 51.7022 19.7475 51.401L19.2322 51.072L19.907 50.0168L20.4212 50.3458C20.9488 50.6827 20.8049 51.0452 20.6744 51.2493V51.2504Z' fill='%2332A75E'/%3E%3C/svg%3E") no-repeat top right / cover;width: 48px;height: 48px;}

#PT .mobile_card .info-top{display: block;padding-bottom: 16px;text-align: right;position:relative}
#PT .mobile_card input,#PT .addons-card input {display: none}
#PT .mobile_card .colorBlock{display:inline-block;position:relative;cursor:pointer;display:flex;margin-block-start:8px;margin-inline-start:70px}
#PT .mobile_card .onecolor.indispo::after{content:'';width:1px;height:19px;transform:rotate(-315deg);background:#e2001a;display:block;position:absolute;top:-3px;left:49%}
#PT .mobile_card{height: auto;position: relative;display: flex;flex-direction: column;background: #fff;box-shadow: 0px 8px 16px rgba(24, 24, 24, 0.08);border-radius: 12px;margin: 0 auto;min-height:500px;}
#PT .mobile_card .bl_title{position: relative;font: normal 14px/22px SFR-Regular;color: #181818;letter-spacing: normal;z-index: 2;padding: 24px 24px 16px;}
#PT .mobile_card .bl_title a{font: normal 16px/24px SFR-Bold;display: block;text-transform: none;color: #181818;}
#PT .mobile_card .bl_title a:before {position: absolute;content: '';width: 162px;height: 288px;bottom: -288px}
#PT .mobile_card .bl_title h3{font-family: SFR-Black;color: #181818;font-size:16px;line-height:24px;height: 20px;letter-spacing:normal}
#PT .mobile_card .reconditione{height:24px;font-family:SFR-Bold;font-size:16px;line-height:24px;color:#02C39A}
#PT .mobile_card .forfait{font: normal 14px/22px SFR-Bold;margin-top:8px;}
#PT .bl_phone {position: relative;height: auto;padding: 0px 24px 16px}
#PT .bl_phone.goutte:before {left: 114px;top: 0px}
#PT .bl_phone .img-reconditione{width:48px;height:48px;position:absolute;left:150px;top:0;cursor:pointer;display:flex;justify-content:center}
#PT .bl_phone > img{display: inline-block;height: 280px;max-height: 280px;max-width: 142px;width: auto;min-width: auto;padding: 0;float:left;}
#PT .bl_phone .infos{width: calc(100% - 142px);max-width: unset;height: 100%;display: inline-block}
#PT .bl_phone .infos .price-alone {text-align: right;font: normal 14px/22px SFR-Regular;}
#PT .bl_phone .infos .price-alone bol-price{font: normal 16px/22px SFR-Bold;}
#PT .bl_phone .infos .price-alone span{color:#8A8A8A;text-decoration:line-through}
#PT .bl_phone .sold-out {padding-left:32px}
#PT .bl_phone .mensualites{font: normal 14px/22px SFR-Bold}
#PT .bl_phone .prix,#PT .bl_phone .prix bol-price{font:normal  24px/36px SFR-Bold;}
#PT .bl_phone .remboursement{margin-top:12px;padding-bottom:8px;position:relative}
#PT .bl_phone .forfait .title span{font-size:10px;line-height:12px;letter-spacing:-0.1px;color:#181818}
#PT .bl_phone .info .title{font-family:SFR-Regular;font-size:12px;line-height:18px;letter-spacing:-0.2px;color:#181818}
#PT .bl_phone .desc{font-size: 12px;line-height: 16px;color:#181818;text-align:right}
#PT .bl_phone .das {font-family: SFR-Regular;font-size: 12px;line-height: 16px;letter-spacing: normal;color: #181818;position: absolute;bottom: 38px;margin-top: 8px;width: 42px;right: 24px}
#PT .bl_phone .das span{position:relative;cursor:pointer}
#PT .bl_phone .das:hover .more-info{display:block}
#PT .bl_phone .das .more-info{display:none;border:0;cursor:auto;width:130px;box-shadow:0 2px 4px 0 rgb(0 0 0 / 10%);border-radius:4px;color:#fff;font-family:'SFR-Regular';background-color:#181818;font-size:10px;padding:4px;position:absolute;z-index:9;right: -16px;bottom: 8px;top:auto;transition:opacity 0.3s}
#PT .bl_phone .das .more-info:after{content:"";position:absolute;bottom:-14px;left:76%;margin-top:-5px;border-width:7px;border-style:solid;border-color:#181818 transparent transparent transparent}
#PT .bl_phone .das span:first-child:after {position: absolute;content: "";background: url(//static.s-sfr.fr/assets/pictos/aide_plein_40_noir.svg);background-repeat: no-repeat;background-size: contain;width: 16px;height: 16px;-moz-border-radius: 5px;-webkit-border-radius: 5px;border-radius: 5px;line-height: 11px;left: 26px;top: 0px;bottom: 0;margin-top: auto;margin-bottom: auto}
#PT .bl_phone .stars{display: flex;justify-content: left;margin-top: 4px;position: absolute;bottom: 16px;right:24px}
#PT .bl_phone .stars bol-rate img:not(:first-of-type){margin-left:3.5px}
#PT .bl_phone .remboursement:after {content: none;}
#PT .rate_bloc img {width: 12px;height: 12px}
#PT .count-rate{font-family:SFR-Regular;font-size:12px;line-height:16px;color:#181818;margin-left:4px;cursor:pointer}
#PT .count-rate a{color:#181818}
#PT .mobile_card .selectors {width: calc(100% - 48px);display: flex;border: 1px solid #d2d2d2;margin: 0 auto 16px;height: 40px;border-radius: 8px}
#PT .mobile_card .onecolor{display: flex;width: 50%;max-width: 100%;height: 100%;justify-content: center;align-items: center;box-shadow: unset}
#PT .mobile_card .colorBlock{cursor:default;justify-content:center;align-items:center;margin:0;border-right:1px solid #d2d2d2;width:50%}
#PT .mobile_card .capacity{cursor:default;margin:0;width:50%;display:flex;justify-content:center;align-items:center}
#PT .mobile_card .filtre:not(.capacity){display: flex;width: 100%;max-width: 100%;height: 100%;justify-content: center;align-items: center;box-shadow: unset}
#PT .bloc_select span,#PT .mobile_card .filtre:not(.capacity) span {width: 18px;height: 18px;border-radius: 100%;cursor: pointer;position: relative;box-sizing: content-box;}
#PT .bloc_select li.active span:before,#PT .mobile_card .filtre:not(.capacity) li.active span:before {content: "";position: absolute;width: 24px;height: 24px;border-radius: 100%;border: solid 2px #D90D25;top: 0;bottom: 0;margin: auto;left: -3px;box-sizing: border-box;}
#PT .mobile_card .filter-bloc-relative{display:none}
#PT .mobile_card .selector.color.bloc_select.active .filter-bloc-relative{display:block;background:#fff;z-index:5;position:absolute;width:100%;border:0;border-radius:8px;left:0}
#PT .mobile_card .selector.color.bloc_select.active .list_select{background:#fff;border:0;display:flex;flex-flow:column;align-items:center;justify-content:center;border-radius:0 0 8px 8px;gap:0;padding:0}
#PT .mobile_card li{padding:5px 0;display:flex;align-items:center;justify-content:center;width:100%;position:relative}
#PT .mobile_card li:not(:first-of-type):after{width:calc(100% - 24px);height:1px;background:#f2f2f2;position:absolute;content:"";top:0;left:12px}
#PT .mobile_card li:hover{background:#f2f2f2}
#PT .mobile_card li:hover + li:after{width:0%}
#PT .mobile_card li:last-child:hover{border-radius:0 0 8px 8px}
#PT .mobile_card li.disabled:hover{background:#fff}
#PT .mobile_card li.disabled:hover + li:after{width:calc(100% - 24px)}
#PT .mobile_card li.disabled{cursor:default}
#PT .mobile_card li.d span{cursor:default}
#PT .mobile_card li.d span:before{content: '';position: absolute;width: 17px;height: 1px;background: #181818;transform: rotate(45deg);left: 0;bottom: 0;top: 0;margin: auto;}
#PT .mobile_card .selector {display: inline-block;position: relative;cursor: pointer;width: 50%;border: 0;height:100%}
#PT .mobile_card .selector:after {position: absolute;right: 10px;top: 13px;pointer-events: none;border-color: #181818;border-style: solid;border-width: 2px 2px 0 0;content: '';transform: rotate(135deg);width: 7px;height: 7px}
#PT .mobile_card .selector.active:after{transform:rotate(-45deg);top:auto;bottom:11px}
#PT .mobile_card .selector select{background: 0 0;border: none;font-family: SFR-Regular;font-size: 14px;color: #181818;width: 100%;height: 100%;-moz-appearance: none;-webkit-appearance: none;outline: 0;position: relative;cursor: pointer;border-radius: 10px 10px 0 0;padding: 0 calc(100% / 5);text-align:center;}
#PT .mobile_card .selectors > div:not(:last-of-type) {border-right: solid 1px #d2d2d2;border-radius: 0;padding: 0 6px}
#PT .selectors.reconditionne > div:first-of-type{width:70px;margin:0}
#PT .selectors.reconditionne div:nth-child(2){width:112px}
#PT .selectors.reconditionne div:last-of-type{width:140px}
#PT .selectors.reconditionne div:last-of-type select{padding:0 16px}
#PT .mobile_card .selector option:disabled{text-decoration:line-through}
#PT .mobile_card .links{height:auto}
#PT .mobile_card .links .btn {margin-bottom: 24px;}
#PT .md-label {position:relative;display:block;font-family: 'SFR-BOLD';font-size: 12px;line-height: 16px;cursor: pointer;margin-right:16px;}
#PT .md-label:after {content: ""; position: absolute; right: -18px; width: 16px;height: 16px; background: url(//static.s-sfr.fr/assets/pictos/chevron_bas_cercle_plein_40_noir.svg);background-size: contain; bottom: -1px; transition: transform .2s cubic-bezier(.4,0,.2,1);}
/* #PT .md-label:after {content: "";position: absolute;right: -14px;width: 10px;height: 10px;background: url(//static.s-sfr.fr/media/v2/assets/images/svg/arrow-full.svg);background-size: 10px;bottom: 4px;transition:transform .2s cubic-bezier(.4,0,.2,1)} */
#PT .md-content{display:none}
#PT .md-content p {padding: 8px 0;display: flex;justify-content: space-between;font-size: 12px;line-height: 16px;text-align: left;}
#PT .md-content p span:nth-child(2) {align-self: flex-end;text-align: right;}
#PT .md-content .g {margin-top: -16px;color: #8A8A8A;}
#PT .md-content .t {border-top: 1px solid #444;margin-top: 7.5px;padding: 15.5px 0 16px;}
#PT .md-content .reprise {position: relative;width: calc(100% + 48px);text-align: left;background: #469e94;left: -24px;height: 46px;bottom: unset;padding: 8px 24px;margin: 8px 0 16px;}
#PT .md-content .reprise.l {border-radius: 0 0 12px 12px;margin-bottom:-8px;}
#PT .md-content .reprise:before {position: absolute;/* content: ""; */height: 16px;width: 100%;left: 0;top: -16px;transform: rotate(180deg);background: #181818}
#PT .md-content .reprise span {font-size: 10px;line-height: 14px}
#PT .md-content .reprise p {padding: 0;text-align: left;margin-left: 16px}
#PT .md-content .reprise > * {display: inline-block;vertical-align: middle}
#PT .md-content .reprise svg {left: 0}
#PT .md-content .reprise img {left: 0;height:100%}
#PT .md-content .reprise > b {float: right;line-height: 30px}
#PT input:checked + label .md-content {display: block;position: absolute;font-family:SFR-Regular;color: #fff;font-size: 12px;line-height: 16px;background: #181818;padding: 16px 24px 8px;border-radius: 12px;right: -34px;z-index: 11;}
#PT .mobile_card input:checked + label .md-content {width: 400px;max-width: calc(33vw - 15px);top: 20px;}
#PT input:checked + .md-label:after {transform: rotate(-180deg);}
#PT .md-content:before {position: absolute;content: "";right: 21px;background: #181818;border-color: #181818;border-style: solid;border-width: 1px 1px 0px 0px;width: 7px;height: 7px;transform: rotate(45deg);border-radius: 1px;}
#PT .mobile_card .md-content:before {top: -4px;}
#PT .md-label:before {position: absolute;content: "";height: 36px;width: 100%;bottom: 18px;right: -16px;}
#PT .accessory input:checked + label .md-content {bottom: 20px;width: 400px;max-width: calc(50vw - 235px);right: -40px;}
#PT .accessory .md-content:before {bottom: -4px;right:27px;}

#PT .forfaits {display: grid;grid-template-areas:"a b c d" "e e e e";margin: 0 auto;width: 840px;max-width: 100%;gap: 16px;padding: 24px;background: #fff;border-radius: 12px;}
#PT .forfaits .forfait{position: relative;border-radius: 8px;margin: 0;width: 100%;min-height: calc(100% - 34px);;display: flex;flex-flow: column;align-items: flex-start;border: solid 1px #d2d2d2;background-color: #fff;cursor: pointer;overflow: hidden;padding: 16px;}
#PT .forfaits .forfait:after, #PT .forfaits .forfait:after{position:absolute;content:"";width:48px;height:48px;top: -1px;right: -1px;}
#PT .forfaits input:checked + .forfait:after,#PT .forfaits .forfait:hover:after {top: -2px;right: -2px;}
#PT .forfaits .forfait.preferentiel{height:254px}
#PT .forfaits input:checked + .forfait,#PT .forfaits .forfait:hover{border:2px solid var(--clr-sfr2);padding:15px;}
#PT .forfaits .forfait .title{font-family: SFR-Bold;font-size: 14px;line-height: 24px;margin-bottom: 16px;max-width: 100%;}
#PT .forfaits .forfait .desc{position:relative;font-family:SFR-Regular;font-size: 12px;line-height: 18px;margin-bottom: 16px}
#PT .forfaits .forfait .link {margin-top: auto;}
#PT .forfaits .forfait .preferentiel{position: relative;font-family: SFR-Bold;font-size: 12px;line-height: 16px;text-align: center;padding: 4px 8px;background: #d2d2d2;border-radius: 4px;width: 129px;}
#PT .forfaits .forfait bol-link{display:none;}
#PT .forfaits input:checked + .forfait bol-link,#PT .forfaits .forfait:hover bol-link{display:block}
#PT .forfaits .saving {font-family:'SFR-Regular';font-size: 12px;ine-height: 18px;text-align:center;margin-top:16px;}
#PT .forfaits .btn {grid-area:e;width:fit-content;margin:0 auto;}
#PT .push-reprise {display:flex;margin: 0 auto;width: 840px;max-width: 100%;padding: 24px;background: #fff;border-radius: 12px;gap:16px}
#PT .push-reprise div {max-width: calc(100% - 56px);}
#PT .push-reprise .t {font:normal 16px/24px SFR-Bold;}
#PT .push-reprise .d {font:normal 14px/22px SFR-Regular;}
#PT .push-reprise button.btn {width: fit-content;margin-left: auto;margin-right: 0}
#PT .card-links {width: calc(100% - 48px);margin: 0 auto;}
#SubventionBlock,#SubventionBlock .wrapper {display:flex;width: 100%;justify-content: center;align-items: center}
#SubventionBlock .wrapper {position: relative;display: flex;flex-direction: column;background: #fff;max-width: 880px;max-height: 100%;overflow-y: auto;padding: 40px 20px 25px;border-radius:12px;box-shadow: 0 12px 24px 0 rgba(0,0,0,.13),0 -1px 6px 1px rgba(24,24,24,.04)}
#SubventionBlock .logo {margin-bottom: 35px;text-align: center}
#SubventionBlock .logo img {width: 45%;max-width: 200px;margin: 0 10px}
#SubventionBlock .content {max-width: 80%}
#SubventionBlock .content p {font-size: 14px;margin-bottom: 30px;text-align: center}

#SubventionBlock .btn-close {display: block;cursor: pointer;position: absolute;top: 16px;right: 16px;width: 16px;height: 16px;background-image: url(//static.s-sfr.fr/media/v2/assets/images/svg/cross.svg);background-position: 50%;background-repeat: no-repeat;background-size: contain;}
#SubventionBlock .title {text-align: center;margin-bottom: 35px;max-width: 80%;font-size: 30px;font-family: SFR-Black;line-height: 32px;color: #222;}



#PT .save-basket-block {position:relative;width:840px;max-width: 100%;background: #fff;border-radius: 12px;padding: 40px 20px;margin: 15px auto;z-index: -1;}
#PT .save-basket-block .btn-close {position:absolute;content:"";width:20px;height:20px;right:30px;top:31px;cursor:pointer;}
#PT .save-basket-block .btn-close:before,#PT .save-basket-block .btn-close:after {position: absolute;content: '';width: 20px;height: 2px;background-color: #D90D25;}
#PT .save-basket-block .btn-close:before {transform: rotate(45deg);}
#PT .save-basket-block .btn-close:after {transform: rotate(-45deg);}
#PT .save-basket-block p {font-family: SFR-Regular;margin-bottom:40px;text-align: center;color: #222;font-size: 18px;line-height: 24px;}
#PT .save-basket-block > p:first-of-type {font-family: SFR-Bold;font-size: 28px;line-height: 32px;}
#PT #SaveBasketContainer .cp {width: 300px;max-width: 100%;margin: auto;border:0;padding: 12px 0 40px;}
#PT #SaveBasketContainer .cp .iconok,#PT #SaveBasketContainer .cp .iconko{right:10px;}
#PT #SaveBasketContainer .tg {width: 484px;max-width: 100%;margin: 0 auto 40px;}
#PT #SaveBasketContainer .tg p {font-family: SFR-Regular;font-size: 14px;line-height: 18px;width:444px; max-width:calc(100% - 120px);text-align:left; margin-left:120px;}
#PT #SaveBasketContainer input.toggle + div label {width: 484px;max-width: 100%;}
#PT #SaveBasketContainer input[type=checkbox]:checked + div p {font-family: SFR-Bold;}
#PT #SaveBasketContainer .btn {width:300px;max-width:100%;}
#PT .save-basket-block  img {margin: 0 auto 20px;display: block;}

/*#Fac {width: 335px;min-height: 200px;height: fit-content;height: -moz-fit-content;position: sticky;top: 100px;margin-left: 20px;background-color: #fff;border-radius: 8px;}*/
/*#PT {position: fixed;    z-index: 10;top: 112px;left: 0;right: 0;margin: auto;background: #f2f2f2;overflow: auto;min-height: calc(100vh - 112px);max-height: calc(100vh - 112px);}*/
#PT {position: relative;z-index: 10;top: unset; left: 0;right: 0;margin: auto;background: #f2f2f2; min-height: 100vh; max-height: unset;width:100%;}
#PT #Fac {width: 335px;min-height: 200px;position: sticky;height: fit-content;height: -moz-fit-content;top: 0;right: calc(50vw - 730px);background-color: #fff;margin: 78px 0 20px 20px;}
#PT #Fac div {line-height:1;}
#PT #Fac .cp .loader {right: 44px;top: 31px;position: absolute;}
#PT #Fac h3 {position: relative;color: #222;font-family: 'SFR-Black';font-size: 18px;line-height: 24px;text-align: center;padding-top: 10px;padding-bottom: 10px;background-color: #fff;margin-top: 10px;}
#PT #Fac h3:after {width: 100%;height: 10px;content: "";position: absolute;background-color: #fff;border-radius: 12px 12px 0 0;left: 0;top: -16px;}
#PT #Fac .tdc {color: #222;padding: 0 20px;margin: 20px 0;}
#PT #Fac .tdc section {display: flex;justify-content: space-between;vertical-align: middle;line-height: 12px;margin-bottom: 4px;}
#PT #Fac .tdc .L { font-family: 'SFR-Regular'; font-size: 14px; line-height:18px; margin: 0 0 4px 0;max-width: calc(100% - 90px);}
#PT #Fac .tdc .L.titre { font-family: 'SFR-Bold'; font-size: 14px; }
#PT #Fac .tdc .L.sous-titre { font-family: 'SFR-Bold'; font-size: 10px; color: #444; }
#PT #Fac .tdc .R {font-size: 14px;line-height:18px;  font-family: 'SFR-Regular'; text-align: right; margin: 0 0 4px 0;white-space: nowrap;}
#PT #Fac .tdc .R.titre { font-family: 'SFR-Bold'; font-size: 14px; }
#PT #Fac .tdc .R.titre span { font-size: 14px; }
#PT #Fac .tdc .R.sous-titre { font-family: 'SFR-Bold'; font-size: 10px; color: #444;}
#PT #Fac span.grey {display:block;color: #8a8a8a;font-size: 12px;line-height: 18px;}
#PT .cp { position: relative; width: 100%; border-top: 2px solid #f2f2f2; border-bottom: 2px solid #f2f2f2; padding: 12px 20px;  }
#PT .cp label { position: absolute; top: 0;font-family:SFR-Regular;font-size: 10px; background-color: #fff; top: 6px; left: 30px; padding: 0 7px;}
#PT .cp input[type="text"] { border-radius: 4px; border: 1px solid #d2d2d2; width: 100%; height: 40px; padding-left: 10px; padding-right: 42px; color: #222; font-family: 'SFR-Regular'; cursor: pointer; }
#PT .cp input[type="text"]::placeholder { color: #d2d2d2; font-family: 'SFR-Regular';}
#PT .cp input[type="text"]:placeholder-shown + input[type="submit"] { display: none; }
#PT .cp input[type="text"]:not(:placeholder-shown) + input[type="submit"] { cursor: pointer; display: block; font-size: 10px; background-color: #222; color: #fff; font-family: 'SFR-Black'; height: 40px; width: 40px; border-radius: 8px; position: absolute; top: 12px; right: 16px;-webkit-appearance: none;
-moz-appearance: none;appearance: none;}
#PT .cp .ret { font-size: 10px; line-height: 14px; font-family: 'SFR-Bold'; display: block;margin-top:3px;}
#PT .cp .ret.ok { color: #02C39A;}
#PT .cp .ret.ko { color: #D90D25;}
#PT .cp .iconok {position:absolute;content:"";background:url(//static.s-sfr.fr/assets/pictos/check_40_vert.svg);width:20px;height:20px;right: 30px;top:22px;}
#PT .cp .iconko {position:absolute;content:"";width:20px;height:20px;right:30px;top:31px;}
#PT .cp .iconko:before, #PT .cp .iconko:after {position: absolute;content: '';width: 26px;height: 2px;background-color: #D90D25;}
#PT .cp .iconko:before {transform: rotate(45deg);}
#PT .cp .iconko:after {transform: rotate(-45deg);}
#PT #Fac .mi { padding: 14px 20px; border-bottom: 2px solid #f2f2f2; }
#PT #Fac .mi .L { font-family: 'SFR-Bold'; color: #222; font-size: 12px; width: 220px; display: inline-block; vertical-align: middle;max-width: calc(100% - 90px);float:left;}
#PT #Fac .mi .R { font-family: 'SFR-Bold'; color: #222; font-size: 12px; width: 89px; display: inline-block; text-align: right;}
#PT #Fac .bot:first-of-type {padding: 0 20px;position: relative;}
#PT #Fac .bot { padding: 24px; position: relative; }
#PT #Fac .bot a {position: relative;display:table;font-size: 16px;color: #181818;font-family: 'SFR-Bold';text-align: center;margin: 0 auto;cursor: pointer;}
#PT #Fac .bot a:after {content: '';position: absolute;width: 8px;height: 8px;right: -8px;top: 0;bottom: 0;margin: auto;border-radius: 2px;border: 2px solid;border-left: 0;border-bottom: 0;transform: rotate(45deg);transition: all .2s cubic-bezier(.4,0,.2,1);}
#PT #Fac .bot a:hover:after {right: -12px;transition: all .2s ease;}
#PT .bot .btn.h {display: none;}
#PT .sauvegarde_panier .btn {margin-bottom: 16px;}
#PT #Fac .bot.sauvegarde_panier {padding: 24px 24px 18px;}
#PT #Fac .bot .toast{padding-top: 10px;}
#PT #Fac .bot:after {content: ''; position: absolute;width: 100%;background-color: #fff;height: 8px;left:0;right: 0;bottom: -6px;border-radius: 0 0 12px 12px;margin: auto;}
#PT #Fac .bot:first-of-type:after {content: unset;}
#PT .toast {font-family:SFR-Regular;font-size: 14px;line-height: 14px;text-align: center;background: #f2f2f2;padding-bottom: 20px;transition:all 0.2s linear;}
#PT #Fac .toast.hidden {display: none;}
#PT #Fac .toast.visuallyhidden {opacity: 0;display:none;}
#PT #Fac .sep .mi > section:first-child{margin-bottom:8px;font-size:14px;}
    #PT #Fac .sep .mi > section:first-child span img{height:24px;vertical-align:middle;}
#PT .toast.g{color:#02C39A;}
#PT .toast.o {color:#FF9300;}
#PT .toast.r {color: #D90D25;}
#PT #FacRes {display: none;width: 768px;max-width:100%;position: -webkit-sticky;position: sticky;text-align: center;padding: 24px 5px 10px 5px;z-index: 12;top: 0;left: 0;right: 0;margin: auto;min-height: 135px;background-color: #fff;box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);border-radius: 0px 0px 10px 10px;}
#PT #FacRes .T .elem { text-align: center; display: inline-block; vertical-align: top; margin: 0 auto; width: 30%; }
#PT #FacRes .T .elem strong { color: #222; font-family: 'SFR-Black'; display: block; font-size: 18px; line-height: 21px; }
#PT #FacRes .T .elem span { color: #222; font-family: 'SFR-Regular'; display: block; font-size: 12px; line-height: 14px; }
#PT #FacRes .B { width: 100%; margin-top: 10px; }
#PT #FacRes .B > .L { width: 90px; display: inline-block; vertical-align: top; }
#PT #Fac .mi .light > span {font-family: 'SFR-Regular';}
#PT #FacRes .B .L a {display: block;color: #e2201a;font-family: 'SFR-Regular';font-size: 10px;position: relative;text-decoration: underline;padding-bottom: 24px;}
#PT #FacRes .B .L a:before{content: '';width: 15px;height: 15px;border: 1px solid #D90D25;display: block;position: absolute;left: 0;right: 0;margin: auto;transform: rotate(45deg);border-left: none;border-top: none;bottom: 8px;}
#PT #FacRes .B .L a:after{content: '';width: 15px;height: 15px;border: 1px solid #D90D25;display: block;position: absolute;left: 0;right: 0;margin: auto;transform: rotate(45deg);border-left: none;border-top: none;bottom: 4px;}
#PT #FacRes .B .R { width: calc(100% - 120px); display: inline-block; vertical-align: top; }
#PT #FacRes .btn { width: 100%; }
#PT #FacRes .toast {padding: 5px 0 0; background: transparent;}
#PT .lame-services {display:flex;flex-flow: column;background: #f2f2f2;padding-top: 16px;}
#PT .lame-services h2{font-size:18px;}
#PT .lame-services.res {display:none;}
#PT .lame-services >div {display:flex;flex-direction: row;justify-content: left;align-items: center;width: 100%;padding: 12px 16px;background: #fff;}
#PT .lame-services >div:first-of-type {border-top-right-radius: 8px;border-top-left-radius: 8px;}
#PT .lame-services >div:last-of-type {border-bottom-right-radius: 8px;border-bottom-left-radius: 8px;margin-bottom: 16px;}
#PT .lame-services >div img, #PT .lame-services >div svg{max-height:32px;width:auto;margin-right: 16px;}
#PT .lame-services >div p {font-family: SFR-Bold;font-size: 14px;line-height: 18px;text-align: center;}
#PT .lame-services.five-elem >div:nth-child(3) {width:100%;}

/*CANAL + TOGGLE*/

#PT input.toggle + div label[for*="canalplus"] {order:1;width: 20px;height: 20px;border: 1px solid #e9e9e9;border-radius: 4px;background-color: #e9e9e9; margin-right:8px;display: inline-block;cursor: pointer;vertical-align: middle;margin-top: -1px;}
#PT input.toggle + div label[for*="canalplus"]:before {content:unset}
#PT input.toggle + div label[for*="canalplus"]:after {content: unset;}
#PT input.toggle:checked + div label[for*="canalplus"] {border: 0;background-color: #181818;position: relative;z-index:0}
#PT input.toggle:checked + div label[for*="canalplus"]:after {content: "";width: 14px;height: 14px;position: absolute;top: 3px;right: 0;left: 0;margin: auto;background: url(//static.s-sfr.fr/assets/pictos/check_40_blanc.svg) center/contain no-repeat, #181818;border-radius:0;z-index:1}

#PT .lame-option .tg {justify-content:left;align-items: center;}
#PT .lame-option .toast:before {content:'';position:absolute;display: inline-block;background:url(//static.s-sfr.fr/assets/pictos/attention_40_rouge.svg);background-size:contain;width:24px;height:24px;left:0;top:0;bottom:0;margin:auto;}
#PT .lame-option .toast, #PT #Fac .bot .toast {background: transparent;padding: 10px 0 0;font-size: 12px;}
#PT .lame-option .toast {position:relative;padding-left:24px;vertical-align: bottom;padding: 5px 0 5px 24px;margin-top: 10px;}

#PT #EmptyBasket {margin:0 auto;min-height: calc(100vh + 32px);}
#PT #EmptyBasket .login {display: flex;justify-content: center;align-items: center;margin: 0 auto 40px;width: fit-content;width: -moz-fit-content;}
#PT #EmptyBasket .login p{font-family: SFR-Bold;font-size: 24px;line-height: 36px;margin-right: 24px;}
#PT #EmptyBasket .login .btn{width:185px;}
#PT #EmptyBasket > p{font-family: SFR-Black;font-size: 32px;line-height: 36px;color: #181818;text-align:center;margin: 0 auto 40px;}
#PT #EmptyBasket .links {display: grid;grid-template-columns: repeat(3, 1fr);width: 1280px;max-width: calc(100% - 64px);margin: auto;padding-bottom:40px;justify-content:center;gap: 24px 40px;}
#PT #EmptyBasket .links a {display: inline-block; padding: 0 10px 0 0;}
#PT #EmptyBasket .links .elem{position: relative;background: #fff;box-shadow: 0px 8px 16px rgba(24, 24, 24, 0.02);border-radius: 12px;width: 100%;padding: 24px;text-align: center;}
/* #PT #EmptyBasket .links .elem:last-of-type{display:none;} */
#PT #EmptyBasket .links img{display: block;margin: 0 auto;height: 64px;}
#PT #EmptyBasket .links p{font-family: SFR-Bold;font-size: 16px;line-height: 24px;color: #181818;margin: 24px auto;}
#PT #LoaderPage {display:none;flex-direction: column;position: fixed;top: 0;bottom: 0;right: 0;left: 0;background-color: hsla(0,0%,100%,.97);z-index: 99999;justify-content: center;align-items: center}
#PT #LoaderPage.show {display:flex;}
#PT #LoaderPage .wrapper:after {content: "";position: absolute;top: 0;bottom: 0;left: 0;right: 0;margin: auto;height: 102px;width: 102px;color: var(--clr-sfr2);display: inline-block;border: 6px solid;border-radius: 50%;border-top-color: transparent;animation: rotate 1s linear infinite;}
#PT #LoaderPage .wrapper:before {content: "";position: absolute;top: 0;bottom: 0;left: 0;right: 0;margin: auto;background: url(https://static.s-sfr.fr/assets/logos/SFR.svg);background-repeat:no-repeat;width: 45px;height: 44px}
#PT #LoaderPage .bl_text{font-family:SFR-Bold;font-size: 16px;line-height: 22px;color: #181818;margin-top:162px;}
/*,#PT .showToaster {position:relative;min-height: 100vh;z-index: 11;}*/
/*,#PT .showToaster:after {top:0;left:0;background: rgba(24, 24, 24, 0.6);z-index: 11;position: absolute;width: 100%;height: 100%;content: "";}*/
    /* visibility: hidden; */
#toastrContainer #toaster{visibility:hidden;width: 550px;min-height: 110px;max-width: 100%;margin-left: -275px;color: #181818;text-align: left;position: fixed;z-index: 12;top: 130px;right: 0;font-size: 14px;line-height: 22px;font-family: 'SFR-Regular';background:#FFF4E0;padding:24px;height:auto;border-radius: 8px 0 0 8px;}
#toastrContainer #toaster:before {content: '';background: url(//static.s-sfr.fr/assets/pictos/attention_40_noir.svg);display: inline-block;position: relative;width: 24px;height: 24px;background-size: contain;vertical-align: middle;margin-right: 24px;}
#toastrContainer #toaster:after {content: "";position: absolute;background: #FF9300;width: 100%;height: 4px;left: 0;bottom: 0;border-radius: 0 0 0 8px;}
#toastrContainer #toaster p {display:inline-block;vertical-align:middle;max-width: calc(100% - 60px);}
#toastrContainer .overlay {display:none;top:0;left:0;background:rgba(24, 24, 24, 0.6);z-index:11;position:absolute;width:100%;height:100%;}
#toastrContainer #toaster .exit{position:absolute;content:"";right:30px;top:30px;cursor:pointer}
#toastrContainer #toaster .exit:after {transform: rotate(-45deg);}
#toastrContainer #toaster .exit:before {transform: rotate(45deg);}
#toastrContainer #toaster .exit:before, .exit:after {position: absolute;content: '';width: 20px;height: 2px;background-color: #181818;}
#toastrContainer.show #toaster {visibility: visible;-webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;animation: fadein 0.5s, fadeout 0.5s 2.5s;}
#toastrContainer.show .overlay {display:block;}

#popinContainer.show {top: 0;left: 0;right: 0;bottom: 0;z-index: 100000;position: fixed;display: flex;align-items: center;justify-content: center;overflow-y: auto;}
#popinContainer #popinContent {visibility: hidden;position:fixed;transform:translate(-50%, -50%);border-radius:12px;z-index:100;top:50%;left:50%;width:100%;}
#popinContainer .overlay {display:none;top:0;left:0;background:rgba(24, 24, 24, 0.6);z-index:11;position:absolute;width:100%;height:100%;}
#popinContainer.show #popinContent {visibility: visible;-webkit-animation: fadein 0.5s;animation: fadein 0.5s}
#popinContainer.show .overlay {display:block;}

#PopinAddedBasket {position:relative;display: flex;flex-flow:row wrap;justify-content: center;align-items: center}
#PopinAddedBasket {box-shadow: 0 8px 16px 0 rgba(24,24,24,.1),0 -1px 6px 1px rgba(24,24,24,.04);padding: 32px 16px}
#PopinAddedBasket h3 {text-align: center;margin-bottom: 16px;width:100%;}
#PopinAddedBasket .bl_warning {padding-bottom: 15px}
#PopinAddedBasket >div:not(.btn-close) {flex: 1;position: relative}
#PopinAddedBasket >div:not(.btn-close):after {content: "";display: block;height: 96px;width: 1px;background: #e9e9e9;position: absolute;right: 0;top: 25px}
#PopinAddedBasket >div:not(.btn-close):last-child:after {display: none}
#PopinAddedBasket .elem_popin {justify-content: space-between;align-items: center;display: flex;height: 148px;flex-direction: column}
#PopinAddedBasket .elem_popin .bl_img {margin-bottom: 8px;text-align: center;height: 36px}
#PopinAddedBasket .elem_popin .bl_txt {margin-bottom: 24px;text-align: center}
#PopinAddedBasket .elem_popin .btn {margin: 0;width:auto;}

@-webkit-keyframes fadeout {from {right: 0; opacity: 1;} to {right: -30px; opacity: 0;}}
@keyframes fadeout {from {right: 0; opacity: 1;} to {right: -30px; opacity: 0;}}
@-webkit-keyframes lds-ring {
    0% {
        transform: rotate(0deg)
    }

    to {
        transform: rotate(1turn)
    }
}

@keyframes lds-ring {
    0% {
        transform: rotate(0deg)
    }

    to {
        transform: rotate(1turn)
    }
}

@media (max-width:1100px){
    #PT #Content {max-width: 100%;width: 840px;}
    #PT .goutte:before {width: 48px;height: 48px;font-size: 14px;line-height: 18px;}
    #PT #Fac {max-width: 100%; margin: 0 auto;}
    #PT #Fac .toast {display:none;}
    #PT #FacRes .toast.hidden {display: none;}
    #PT #FacRes .toast.visuallyhidden {opacity: 0;}
    #PT #Panier {flex-flow: column;}
    #PT #FacRes {display:block;}
    #PT #EmptyBasket .links {gap:24px;grid-template-columns: repeat(2, 1fr);}
    #PT #EmptyBasket > p span {display: block;}
    /*#Home #PT #FacRes {top:112px;}*/
    #PT .addons_bloc .list {justify-content: center;grid-template-columns: 328px 328px;gap: 24px;}
    #PT .forfaits .btn {width:100%;}
   
    #PT .mobile_card input:checked + label .md-content {max-width: calc(50vw - 16px);right:-41px}
    #PT .mobile_card .md-content:before {right: 28px;}
   #PT .PhoneList {grid-template-columns: 328px 328px;justify-content: center;gap: 24px;}

    #PT .md-label {margin-right:14px}
    #PT .mobile_card {min-height: 450px}
    #PT .mobile_card .bl_title {padding: 16px}
    #PT .mobile_card .selectors,
    #PT .mobile_card .card-links {width: calc(100% - 32px)}
    #PT .mobile_card li.disabled span:after{right:-4px;bottom:5px}
    #PT .mobile_card .forfait {font-size:12px;line-height:18px;}
    #PT .bl_phone{height:auto;padding: 0px 16px 20px}
    #PT .bl_phone.goutte:before {left: 90px}
    #PT .selectors.reconditionne div:first-of-type{width:65px}
    #PT .selectors.reconditionne div:last-of-type{width:128px}
    #PT .selectors.reconditionne div:last-of-type select{padding:0 8px}
    #PT .bl_phone .infos {padding-bottom:48px;width: calc(100% - 123px);}
    #PT .bl_phone .infos bol-mobile-price .indispo.disable{font-size:12px}
    #PT .bl_phone > img{max-height: 240px;}
    #PT .lame-b button {width: 100%;}
    #PT .lame-b > .L {width: 55px;}
    #PT .lame-b .M {width: calc(100% - 55px);flex-direction:column;}
    #PT .lame-b .M > div {max-width: 100%;width: 100%;}
    
   
    #PT .accessory input:checked + label .md-content {max-width: calc(50vw - 65px);}
    #PT .lame-services.res {display:flex;}
    
    #PT .lame-togglev2.lame-toggle > .R{display:block;margin-left:auto;}

}
@media (max-width: 768px){
    /*#Home #PT #FacRes {top: 64px;}*/
    #PT .price {justify-content:center}
    #PT #Content {max-width:100%;}
    #PT #Stepper .step {margin:0 5px;}
    #PT #Stepper .divider{margin: 1px;}
    #PT .back-shop {padding: 15px 10px 5px;}
    #PT .exit{top: 197px;z-index: 11;}
    #PT h2 {font-size: 24px;line-height: 29px;text-align:center;}
    #PT h2:not(:first-of-type) {margin-top: 40px;}
    #PT .a-block {width: fit-content;}
    #PT .lame-offre {flex-flow:column;padding: 24px 0 0 0 ;max-width: 100%;}
    #PT .lame-offre.promo {margin: 40px auto;}
    #PT .lame-offre > .L,#PT .lame-offre > .R,#PT .lame-offre .M {width:100%;text-align: center;height: auto;}
    #PT .lame-offre > .L,#PT .lame-offre .M {margin-bottom:16px;}
    #PT .lame-offre .M p {margin-right: auto;margin-left: auto}
    #PT .lame-offre .equipements {margin-left: 0;margin-top:0;}
    #PT .lame-offre .equipements .equ {text-align: left;padding: 0 10px;margin-bottom: 0;}
    #PT .lame-offre .equipements .equ > * {margin: 4px 0 0 0;text-align: center;}
    #PT .lame-offre .equipements .equ img {margin: 0;position: relative;margin-right: 20px;left: unset;}

    #PT #Box.lame-offre > .L > img{max-height:80px;}
    #PT .lame-offre .M .title{font-size: 18px;line-height: 24px;max-width: 265px;margin: 0 auto 15px;}
    #PT .lame-offre .M .subtitle {margin: 0 auto 4px;}
    #PT .lame-offre .M > .desc:first-of-type {min-height:unset;margin: auto}
    #PT .lame-offre .M > .desc ul {padding: 0 0 16px 15px;width: fit-content;margin: auto;}
    #PT .lame-offre .M > .desc li {list-style-type: disc;width: fit-content;text-align:left;}
    
    #PT .lame-mode-paiement .right{max-width:calc(40% - 8px);}

    #PT #Mobile.lame-offre .M > .desc:first-of-type,#PT #Box.lame-offre .M > .desc:first-of-type {display:none;}
    #PT #Mobile.lame-offre label ,#PT #Box.lame-offre label {display:block;position:relative;font-size: 14px;line-height: 18px;color: #181818;cursor: pointer;width: fit-content;margin: 0 auto 10px;text-align: center;align-items: center;padding-right: 20px;}
    #PT #Mobile.lame-offre .M > input:checked + label + .desc:first-of-type,#PT #Box.lame-offre .M > input:checked + label + .desc:first-of-type {display:block;width: fit-content;margin: auto;max-width:206px;}
    #PT #Mobile.lame-offre label:after,#PT #Box.lame-offre label:after {position: absolute;display: inline-block;content: "";background: url(//static.s-sfr.fr/assets/pictos/chevron_bas_cercle_plein_40_noir.svg);background-size:contain;width: 16px;height: 16px;right: 0;}
    #PT #Mobile.lame-offre label:before,#PT #Box.lame-offre label:before {content: "Plus d'info";}
    #PT #Mobile.lame-offre input:checked + label:before,#PT #Box.lame-offre input:checked + label:before {content: "Voir moins d’info";}
    #PT #Mobile.lame-offre input:checked + label:after,#PT #Box.lame-offre input:checked + label:after {transform: rotate(-180deg);transition: transform .4s ease;}
    
    #PT .lame-offre .L .card {margin: 0 auto 20px;}
    #PT .lame-offre > .R {text-align: center;}
    #PT #Mobile.asso {border-radius: 12px 12px 0 0;margin-bottom:16px;}
    #PT #Mobile.asso .R .r-block{border-radius: 0;}
    #PT #Telephone.asso{border-radius: 0 0 12px 12px;margin:-7px auto 10px;}
    
    #PT .p-block a.download {margin: 5px auto;width: fit-content;width: -moz-fit-content;text-align: center;}
    #PT .p-block > p {text-align: center;}
    #PT .p-block span.promo {margin: 16px auto 5px;}
    #PT .p-block {max-width: 100%;text-align: center;margin-bottom:24px;}
    #PT .lame-offre .R .r-block {width: 100%;margin-top:-10px;}
    #PT .lame-offre.last .R .r-block {border-radius: 0 0 8px 8px;}
    #PT .title-asso {font-size: 24px;line-height: 27px;}
    #PT .bot .btn {width:840px;max-width:100%;}
    #PT .btn {width:185px;max-width:100%;}
    
    #PT .lame-b {padding: 24px 10px;max-width:100%}
    #PT .lame-toggle {padding: 24px 10px 0;max-width:100%}
    #PT .lame-toggle > .R {display: none;}
    #PT .lame-toggle > .L {width: 55px;}
    #PT .lame-toggle .M {width: calc(100% - 55px);}
    #PT .lame-toggle .M > div {width: 215px;}
    #PT .lame-toggle > .title {margin: 0;width: 100%;}
    #PT .lame-toggle > a {margin: 8px 0 16px 0;width: 100%;}
    #PT .lame-toggle.gen8 .link {text-align: center;}

    #PT .lame-toggle.gen8 {flex-direction: column;justify-content: center;padding: 5px;}
    #PT .lame-toggle.gen8 > .L {padding: 0;text-align: center;width: auto;margin: auto;}
    #PT .lame-toggle.gen8 .M {width: 100%;flex-direction: column-reverse;align-items:center;margin-bottom: 0;}
    #PT .lame-toggle.gen8 .M > div {text-align: center;}
    #PT .lame-toggle.gen8 input.toggle + div label {margin: 10px auto 0;}
    #PT .lame-toggle a.download {text-align: left;font-size: 12px;line-height: 16px;}

    #PT .lame-button {padding: 40px 35px 40px 35px;max-width: 100%;}
    #PT .lame-button:before {height: calc(100% - 40px);top: 20px;}
    #PT .lame-button:after {height: calc(100% - 40px);top: 20px;}
    #PT .lame-button > .L {width: 65px;text-align: right;}
    #PT .lame-button .L .img {width: 45px;margin:0 auto;}
    #PT .lame-button > .L img {max-width: 100%;height: auto;}
    #PT .lame-button .M {width: calc(100% - 75px);}
    #PT .lame-button > .R {width:calc(100% - 16px);margin-left:10px;margin-top:16px}
    #PT .lame-button .btn {width: 100%;}
    #PT .lame-button .M > div {width: 225px;}
    #PT .lame-button > .title {margin: 0;width: 100%;}
    #PT .lame-button .M .btn.black {margin: 8px auto 0;width: 100%;}
    
    
    #PT .lame-M-R {flex-direction: column;text-align: center;align-items: center;max-width: 100%;}
    #PT .lame-M-R >section{flex-direction: column;}
    #PT .lame-M-R > .R {text-align: center;margin: auto;}
    #PT .lame-M-R .M {margin-bottom: 20px;width:auto;}
    
    #PT .lame-option {margin-top: 50px;max-width:100%;}
    #PT .lame-option,#PT .lame-option .w {flex-direction: column;text-align: center;align-items: center;}
    #PT .lame-option .w {padding: 10px;}
    #PT .lame-option .w .R .title {text-align:center;max-width:unset}
    #PT .lame-option .w .R .p-block {margin: 0 auto}
    #PT .lame-option .modes {margin-top: 50px;}
    #PT .lame-option .modes p{font-size: 14px;line-height: 18px;margin-top:22px;}
    #PT .lame-option .modes a{font-size: 14px;line-height: 14px;margin-top:22px;}
    #PT .lame-option .R .text {text-align:center;}
    #PT  p.saved {font-size: 14px;line-height: 18px;text-align: center;}
    #PT .lame-option.saved > .L {display: inline-flex;align-items: center;font-family: 'SFR-Black';font-size: 20px;line-height: 24px;margin-bottom:24px;}
    #PT .lame-option .w {padding: 10px 15px 20px;}
    #PT .lame-option .w > .L {max-width: 100%;}
    #PT .lame-option .w > .R {align-items: center;}
    #PT .lame-option .w .R .title.title-desk{display: none;}
    #PT .lame-option .w .L .title{display: block;margin: 10px auto 5px;}
    #PT .lame-option .w .L .subtitle{margin: 0px auto 5px;}
    #PT .lame-option .w .L .desc{margin-bottom:4px;}
    #PT .tg {width: 100%;margin:30px auto 0;}
    #PT .lame-services {flex-flow:column;}
    #PT .lame-services > div{width:100%;}
    
    #PT #Content > section:nth-child(31) > div.R > label:nth-child(6) {min-height: 189px;}
    #PT .forfaits {padding:16px;grid-template-areas: "a b" "c d" "e e ";}
    #PT .forfaits .forfait{min-height: calc(100% - 52px);}
     #PT .push-reprise {padding:16px;flex-flow: wrap;}
    #PT .push-reprise button.btn {width: 100%;}
    /*#PT .forfaits{display:flex;flex-flow:row wrap;justify-content: center;margin: -10px auto 0;width:300px;}
    #PT .forfaits .forfait{position:relative;display:flex;flex-direction:column;width:162px;min-height:155px;margin:8px 0;border-radius:12px;border:solid 1px #d2d2d2;background-color:#fff;cursor:pointer;padding:2px}
    #PT .forfaits .forfait.preferentiel{height:207px}
    #PT .forfaits .forfait:hover{border:2px solid var(--clr-sfr2);padding:0;}
    #PT .forfaits .forfait img{position:absolute;right:-2px;top:-1px;height:153px;z-index:1}
    #PT .forfaits .forfait.preferentiel img{height:203px}
    #PT .forfaits .forfait .title{margin:12px 0 24px 10px;font-family:SFR-Black;font-size:16px}
    #PT .forfaits .forfait.preferentiel .title{margin:10px 0 26px 10px}
    #PT .forfaits .forfait>span{position:relative;margin:0 auto 13px;font-family:SFR-Black;font-size:20px;line-height:24px}
    #PT .forfaits .forfait>span:before{position:absolute;content:"";width:80px;height:1px;background:#d2d2d2;bottom:-5px;right:0;left:0;margin-left:auto;margin-right:auto}
    #PT .forfaits .forfait .engagement{position:relative;font-family:SFR-Regular;font-size:10px;line-height:11px;text-align:center}
    #PT .forfaits .forfait .preferentiel{position:relative;font-family:SFR-Bold;text-transform:uppercase;font-size:10px;line-height:11px;text-align:center;padding:4px 16px;background:#e9e9e9;margin:14px auto 3px;border-radius:4px;width:128px;max-width:calc(100% - 8px)}
    #PT .forfaits .forfait bol-link{display:none;margin:0 auto 12px}
    #PT .forfaits .saving {font-family: SFR-Regular;font-size: 12px;line-height: 16px;text-align: center;margin: 3px 0px;}
    #PT .forfaits .saving span{font-family: SFR-Black;}
    #PT .forfaits .btn {width:162px;max-width: 100%;margin:0;}
    #PT .forfaits .forfait:hover bol-link{display:block}
    #PT .forfaits{justify-content: space-between;max-width: 100%;margin: -10px auto 0;}
    #PT .forfaits > div {max-width: 124px;margin-bottom:10px }
    #PT .forfaits .forfait .title{max-width:60px;height:44px;margin-bottom:2px }
    #PT .forfaits .forfait .img{height:153px }
    #PT .forfaits .forfait img{height:auto }
    #PT .forfaits .forfait.preferentiel .title{height:44px;margin-bottom:0 }
    #PT .forfaits .forfait .preferentiel{padding:4px 8px;margin:8px auto 0 }
    #PT .forfaits .forfait{min-height:168px }
    #PT .forfaits .forfait{width:124px }*/
    #PT bol-addons-card {display: block;max-width: 400px; margin: 0 auto;}
    #PT .addons_bloc .link {text-align: center;}
    #PT .addons_bloc .list{max-width:100%;gap: 20px 24px;grid-template-columns: 1fr; }
    #PT .addons_bloc .list>li{margin: 0 auto;width: 100%;max-width:400px;}
   
    #PT .PhoneList {padding: 16px 0;margin-bottom: 8px;gap: 32px 24px;grid-template-columns: 1fr;max-width: 100%;}
    #PT .card_wrapper {min-width: unset;width:100% ;max-width: 400px;margin: 0 auto;}
    #PT .md-label {margin-right:14px;}
    #PT .addons-card input:checked + label .md-content {right: -38px;max-width: calc(100vw - 64px);}
    #PT .mobile_card input:checked + label .md-content {right: -29px;max-width: calc(100vw - 49px);}
    #PT .mobile_card .md-content:before {top: -3px;right: 16px;}
    #PT .addons-card input:checked + label .md-content:before {right: 25px;}
    #PT .save-basket-block {width: calc(100% - 40px);flex-direction: column;}
    #PT .save-basket-block p {max-width: calc(100% - 40px);font-size: 12px;line-height: 16px;margin: 0 auto 20px;}
    #PT .save-basket-block > p:first-of-type {font-size: 16px;line-height: 22px;}
    #PT #SaveBasketContainer .cp {padding: 12px 0 20px;width: 100%}
    #PT #SaveBasketContainer .tg {margin:0 auto;}
    #PT #SaveBasketContainer .tg p {font-size: 12px;line-height: 16px;margin-left: auto;max-width: calc(100% - 48px); margin-right: 0;}
    #PT #SaveBasketContainer input.toggle + div label {height:auto;}
    #PT #SaveBasketContainer .btn {width:300px;max-width: 100%;}
    #PT #EmptyBasket {min-height: calc(100vh + 188px);}
    #PT #EmptyBasket .links {max-width: calc(100% - 32px);grid-template-columns: 1fr;}

    #toaster {font-size: 12px;line-height: 16px;min-width:unset;max-width:100%;width: 100%;min-height:70px;margin: 0;}
    #SubventionBlock .wrapper {justify-content:flex-start;padding: 30px 20px}
    #SubventionBlock .title {max-width:100%;margin-bottom: 25px}
    #SubventionBlock .logo {margin-bottom:25px}
    #SubventionBlock .logo img {width:40%}
    #SubventionBlock .content {max-width:100%}
    
   #PopinAddedBasket .bl_popin {width:280px}
    #PopinAddedBasket .bl_popin .bl_content {flex-direction: column}
    #PopinAddedBasket .bl_popin .bl_content>div {margin-bottom: 32px}
    #PopinAddedBasket >div:not(.btn-close):after {display: none}
    #PopinAddedBasket .bl_popin .bl_content>div:last-child {margin: 0}
    #PopinAddedBasket .elem_popin {height:auto;}
    #PopinAddedBasket >div:nth-child(3) {margin-bottom: 20px;}
    
    #PT .lame-togglev2.lame-toggle > .R{text-align:center;width:100%;display:block;margin-right:auto;}
    #PT .lame-toggle .message{padding:16px;}
    #PT .lame-togglev2.lame-toggle .M > div{width:calc(100% - 48px);}
    #PT .lame-togglev2.lame-toggle .showNum .selectNumber{max-width:105%;}
    #PT .lame-toggle .showNum input[type="text"]{max-width:105%;}
    #PT .lame-toggle .showNum{max-width:105%;}
    #PT .lame-toggle .message{max-width:105%;}
    
    #PT a[class^="btn"],input[class^="btn"]{font-size:12px}	
	#PT .numCta{font-size:12px;line-height:16px}
}