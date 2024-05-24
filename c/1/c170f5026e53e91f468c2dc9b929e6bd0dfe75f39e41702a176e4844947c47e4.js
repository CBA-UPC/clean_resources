:root {
  --bianco: #ffffff;
  --bluchiaro: #055E84;
  --bluscuro: #10445E;
  --grigiochiaro: #F7F8F8;
  --grigioscuro: #4f5357;
  /* --grigioscuro: #020407; */
  --azzurrochiaro: #DDEEF1;
  --azzurroscuro: #0C7DB4;
  --rosso: #FF4D33;
  --ombrapiccola:  0 4px 8px 0 rgba(0, 0, 0, 0.05);
  --ombragrande:  0 4px 8px 0 rgba(0, 0, 0, 0.25);
  --ombragrandescura:  0 4px 8px 0 rgba(0, 0, 0, 0.60);
  --ombragrandebianca:  0 4px 8px 0 rgba(255, 255, 255, 0.25);
  --ombragrandescurabianca:  0 4px 8px 0 rgba(255, 255, 255, 0.60);
  --ombramenu: 2px 4px 8px 2px rgba(0, 0, 0, 0.15);
}

.sfondo-grigiochiaro{ background-color:var(--grigiochiaro) !important; }
.colore-grigiochiaro{ color:var(--grigiochiaro) !important; }
.sfondo-grigioscuro{ background-color:var(--grigioscuro) !important; }
.sfondo-bluchiaro { background-color:var(--bluchiaro) !important; }
.sfondo-bianco { background-color:var(--bianco) !important; }
.sfondo-rosso { background-color:var(--rosso) !important; }
.colore-grigioscuro{ color:var(--grigioscuro) !important; }
.colore-bianco { color:var(--bianco) !important;}
.colore-bluchiaro { color:var(--bluchiaro) !important;}
.colore-bluscuro { color:var(--bluscuro) !important;}
.colore-rosso { color:var(--rosso) !important;}

/* xs: 0 sm: 576px md: 768px lg: 992px xl: 1200px */

html { position: relative; min-height: 100%;}
body.shiny-body { font-size: 1rem; color:var(--bluchiaro); font-family:'Open Sans', sans-serif; }
body.shiny-body a { color:var(--azzurroscuro);}

footer.shiny-footer { position: absolute; bottom: 0; width: 100%; background-color:var(--bluchiaro); color:var(--grigiochiaro); }
footer #to-top { position: absolute; top:-1em; right:1em; cursor:pointer; }
footer.shiny-footer a { color:var(--bianco) !important; }

header.shiny-header { color:var(--grigioscuro) !important;  position: fixed; top: 0; right: 0;  left: 0;  z-index: 1030; background-color: var(--bianco); box-shadow: var(--ombrapiccola);}
header.shiny-header a { color:var(--grigioscuro) !important; }
header.shiny-header a.shiny-search-btn, header.shiny-header a.shiny-login-btn { color:var(--bluchiaro)!important;}

body.shiny-body h1,h2,h3,h4,h5,h6 { color:var(--grigioscuro); }
body.shiny-body h1 { font-size:2.2rem; font-weight:400; }
@media (max-width: 992px) {
  body.shiny-body h1 { font-size:1.7rem !important; margin-top:.7rem; }
}
body.shiny-body h2 { font-weight:400; }

/* menu */

nav.shiny-menu { text-transform: uppercase;  }
nav.shiny-menu img { max-height:26px; margin:0 auto;}
nav.shiny-menu { padding: 0.5rem 0.5rem; }
@media (max-width: 575px) { /* < sm */
}
@media (min-width: 576px) { /* sm */
    nav.shiny-menu img { max-height:42px;}
}
nav.shiny-menu > .collapse > .navbar-nav > .nav-item:hover > a , nav.shiny-menu > .collapse > .navbar-nav .dropdown-item:hover{ background-color:var(--bluscuro);}
nav.shiny-menu > .collapse > .navbar-nav > .nav-item:hover > a, nav.shiny-menu > .collapse > .navbar-nav a.dropdown-item:hover  { color:#fff !important; }
nav.shiny-menu .dropdown-menu {  border-color:none; box-shadow: var(--ombramenu); margin-bottom:0.5rem; }
nav.shiny-menu .dropdown-item { text-transform:none; }
nav.shiny-menu .dropdown-item.active { background-color:var(--bluscuro) !important; color:var(--bianco) !important; }
nav.shiny-menu .navbar-toggler { color:var(--grigiochiaro) !important; background-color:var(--bluscuro) !important; }
nav.shiny-menu .navbar-toggler.collapsed { background-color:var(--grigiochiaro) !important; color:var(--bluscuro) !important; }
nav.shiny-menu .shiny-lang a { text-transform: uppercase; }
@media (min-width:992px) { /* lg */
    nav.shiny-menu { font-size:0.75rem; padding:0 0.5rem; }
    nav.shiny-menu .dropdown-menu { border-color:var(--grigiochiaro); min-width:unset; margin-top:0; }
    nav.shiny-menu > .collapse > .navbar-nav > .nav-item:hover  { background-color:var(--bluscuro); }
}

nav.shiny-inner-menu { font-size: 1.2rem; color:var(--bianco) !important; }
nav.shiny-inner-menu .dropdown-item { white-space: normal !important; }
nav.shiny-inner-menu li  a { color:var(--bianco) !important; font-size: 1.2rem; }
nav.shiny-inner-menu .nav-item:hover, nav.shiny-inner-menu .dropdown-item:hover { background-color:var(--azzurroscuro) !important; }
@media (min-width: 992px) { /* lg */
  nav.shiny-inner-menu .dropdown-item { white-space: nowrap !important;}
}

nav.shiny-inner-menu .dropdown-menu  { background-color: var(--bluchiaro) !important; }

.shiny-login-popover { font-size: 1rem; background-color: #F6F7F6 !important; border-radius:0.8em;   box-shadow: var(--ombragrande);  }
.shiny-login .btn-primary { background-color:var(--bluchiaro) !important; color:var(--bianco) !important; }
.shiny-login a.dimenticata { color:var(--rosso) !important;}
.shiny-login-popover .popover-header, .shiny-search-popover .popover-header { position:relative; top:10px; right:10px; border:none; padding:0; margin:0; }

.shiny-search-popover { font-size: 1rem; background-color: #F6F7F6 !important; border-radius:0.8em;   box-shadow: var(--ombragrande);  }
.shiny-search .btn-primary { background-color:var(--bluchiaro) !important; color:var(--bianco) !important; }

.shiny-input { border-radius: 2rem !important; }
.shiny-btn { border-radius: 2rem !important; text-transform: uppercase; font-weight: bold; color:#fff; background-color:var(--bluchiaro) !important; border-color:var(--bluscuro) !important; }

/* prodotti */

.dettagli-prodotto-grid { border-width:2px; border-color:var(--bianco); border-style:solid; height:70px; width:70px;}
@media (min-width: 576px) { /* sm */
  .dettagli-prodotto-grid { height:140px; width:140px;}
}


/* caroselli */
#shiny-carousel-cnt .carousel-inner { max-height: 600px; overflow: hidden; }

#shiny-carousel-home .carousel-caption { left:0; right:0; bottom:16px; color:var(--bluscuro)!important; padding:0; }
#shiny-carousel-home .carousel-background { left:0; right:0; bottom:0; position:relative; background-color:var(--grigiochiaro) !important; position:absolute; height:260px;}
#shiny-carousel-home .col { height:300px; }
#shiny-carousel-home .carousel-indicators, #shiny-carousel-home .carousel-control-prev, #shiny-carousel-home .carousel-control-next {z-index:1000; }
#shiny-carousel-home .carousel-control-prev span, #shiny-carousel-home .carousel-control-next span { top:200px; }
#shiny-carousel-home .carousel-indicators li { background-color: #fff;  background-color: rgba(70, 70, 70, 0.25); }
#shiny-carousel-home .carousel-indicators .active {  background-color: #444; }

.shiny-link-home {  background-color: transparent !important; }
.shiny-link-home.card { border:none; font-size:0.85rem; }
.shiny-link-home.card h5 { font-size:1.1rem; }
.shiny-link-home .card-body { border:none; padding: 0 1.2rem; }
.shiny-link-home .card-footer { background-color: transparent !important; border:none; }
.shiny-link-home .card-footer a { background-color: transparent !important; border-color: var(--bluchiaro); color: var(--bluchiaro);}
.shiny-link-home .card-footer a:hover { background-color: var(--bluchiaro) !important;  color: var(--bianco);}
.shiny-link-home-icon {background-color:var(--azzurrochiaro); width:96px; height:96px; font-size:2.2em; }

/* box prodotto */
.shiny-prodotto { border-radius:0.8em;   box-shadow:var(--ombrapiccola) }
.shiny-prodotto .card-title { font-weight:bold !important; }
.shiny-prodotto .card-footer { border-top: none !important; }

/* collapse */
.shiny-collapse .card { background-color:var(--grigiochiaro); border-color:var(--grigiochiaro); border-radius: 1rem; color:var(--bluchiaro) !important; }
.shiny-collapse .card-header { background-color:var(--azzurrochiaro); border-color:var(--azzurrochiaro);}
.shiny-collapse .card-header .collapser { font-weight:bold; font-size:1.2rem;  text-decoration: none; cursor: pointer; color:var(--bluchiaro) !important; }
.shiny-collapse .card-header .collapser:hover { text-decoration: none; }

/* guide */
.shiny-glossario { border-radius:0.8em; }
.shiny-guida .card { background-color:var(--bianco); border-color:var(--bluchiaro); border-radius: 1rem; color:var(--bluchiaro) !important; border-width: 1px; }
.shiny-guida .card-header { background-color:var(--bianco); color:var(--bluchiaro) !important; }
.shiny-guida .card-header .collapser { color:var(--bluchiaro) !important; text-decoration: none; cursor: pointer; font-weight:bold; }
.shiny-guida .card-body { padding: 0.5rem 1.25rem; }
.shiny-guida .card-body > div { border-bottom: 1px solid var(--grigiochiaro); }
.shiny-guida .card-body a { color:var(--bluchiaro) !important; }
.shiny-guida-2 .card { border:none; }
.shiny-guida-2 .card-header { padding:0; }
.shiny-guida-2 .card-body { padding-left:3em; }

/* credits */
.shiny-credits { background-color:var(--bianco) !important; border-radius:0.8em;   box-shadow:var(--ombrapiccola) }
.shiny-credits img {  max-height:64px; }

/* forzature pagina legal */

.legal-doc { color:var(--grigioscuro); }
.legal-doc .spazio { height:1em; display:block; }

/* shinyrank */
/* https://stackoverflow.com/questions/36430816/bootstrap-4-card-deck-with-number-of-columns-based-on-viewport */

.deck-1 > .card { flex-basis: 100%; max-width: 100%; margin-left: 0; margin-right: 0; }
@media (min-width: 768px) { /* md */
  .deck-md-2 > .card { flex-basis: calc(50% - 30px); max-width: calc(50% - 30px); margin-left: 15px; margin-right: 15px; }
}
@media (min-width: 992px) { /* lg */
  .deck-lg-4 > .card { flex-basis: calc(25% - 30px); max-width: calc(25% - 30px); margin-left: 15px; margin-right: 15px; }
}

/* loading div */
@keyframes beatHeart {
  0% {
    transform: scale(0.8);
  }
  25% {
    transform: scale(1);
  }
  40% {
    transform: scale(0.8);
  }
  60% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.8);
  }
}  
@-webkit-keyframes dot {
    0% { opacity: 0; }  
   50% { opacity: 0; }
  100% { opacity: 1; }  
}
 
@keyframes dot {
    0% { opacity: 0; }
   50% { opacity: 0; }
  100% { opacity: 1; }
}
.pointer{cursor:pointer !important;}
.blackdiv{background-color:black !important;color:white !important}
.blackdiv h5{color:white !important}
/* .tableicon img{border: 1px solid transparent;} */
/* .tableicon img:hover{border: 1px solid;} */
/*.tableicon img {box-shadow: var(--ombragrande);}*/
.tableicon img:hover {box-shadow: var(--ombragrandescura);}
/*.blackdiv img {box-shadow: var(--ombragrandebianca);}*/
.blackdiv img:hover {box-shadow: var(--ombragrandescurabianca);}
/* .tableicon div{border: 1px solid transparent;}
.tableicon div:hover {border: 1px solid #909090} */
.tableicon img.selectedicon {box-shadow: var(--ombragrandescura);}
/* .tableicon img.selectedicon:hover {box-shadow: unset;}
.blackdiv img.selectedicon:hover {box-shadow:  unset;} */
.w-md-50 {width: 50%!important;}
.w-md-30 {width: 30%!important;}
.loader{visibility:hidden;}
.loading_overlay{
  position:fixed;
  top:0;
  left:0px;
  width:100%;
  height:100%;
  font-family: "MontserratL";
  background-color: rgba(255,255,255,0.60);
  z-index:10000;
}
.loading_overlay_text{text-align:center;}
.loading_overlay_inner{
  position:absolute;   
  width: 600px;
  left: 50%;   
  margin-left: -300px;
  top: 100px;
  background-color:white;
  padding: 20px;
  -webkit-box-shadow: 0px 5px 10px 2px rgba(0,0,0,0.3);
  -moz-box-shadow: 0px 5px 10px 2px rgba(0,0,0,0.3);   
  box-shadow: 0px 5px 10px 2px rgba(0,0,0,0.3);
  height: 120px;
}
.loading_overlay_bar{
  margin-top:10px;   
  border-bottom: 1px solid #197fb2;
  height: 10px;
  
  display:none;
}
.loading_overlay_bar_inner{
  width:1%;background-color:#197fb2;height:100%;
  
  display:none;
}
.loading_overlay_logo img{
  height: 30px;
}
.loading_overlay_logo {
  margin-top:10px;
  animation: .8s infinite beatHeart;
}
.ellipsone {
  opacity: 0;
  -webkit-animation: dot 1.3s infinite;
  -webkit-animation-delay: 0.0s;
  animation: dot 1.3s infinite; 
  animation-delay: 0.0s;
}
.ellipstwo {
  opacity: 0;
  -webkit-animation: dot 1.3s infinite;
  -webkit-animation-delay: 0.2s;
  animation: dot 1.3s infinite; 
  animation-delay: 0.2s;
}
 
.ellipsthree {
  opacity: 0; 
  -webkit-animation: dot 1.3s infinite;
  -webkit-animation-delay: 0.3s;
  animation: dot 1.3s infinite; 
  animation-delay: 0.3s;
}

.shinyrank .card-img {
 position:relative;
}

.shinyrank .hideSensibleContentDiv {
 z-index: 200;
 background-color: rgb(80, 80, 80);
 color: white;
 position: absolute;
 top:0;
 bottom:0;
 right:0;
 left:0;
 text-align:center;
 padding:10px;
}

.shinyrank .hideSensibleContentDiv .eye {
 font-size: 30px;
}

.shinyrank .hideSensibleContentDiv .btn {
 float: inherit;
}

.shinyrank .shinyRankPosition {
 font-size: 3rem;
 position:absolute;
 bottom:10px;
 left:10px;
 color:white;
 z-index:1000;
 text-shadow: 0px 0px 11px #000;
}

.show-only-mobile { display: none }

a.shifted-anchor {
 display: block;
 position: relative;
 top: -100px;
 visibility: hidden;
}

@media screen and (max-width: 600px) {

  .show-only-mobile { display: inherit }
  .show-only-desktop { display: none }
  .shinyrank .shinyRankPosition { font-size: 4rem; }

  .loading_overlay_inner{
    position:absolute;   
    width: 90%;
    left: 5%;  
    margin-left: 0px;
    top: 100px;
    background-color:white;
    padding: 20px;
    -webkit-box-shadow: 0px 5px 10px 2px rgba(0,0,0,0.3);
    -moz-box-shadow: 0px 5px 10px 2px rgba(0,0,0,0.3);   
    box-shadow: 0px 5px 10px 2px rgba(0,0,0,0.3);
    height: 120px;
  }
  .w-md-50 {width: 100%!important;}
  .w-md-30 {width: 100%!important;}
  body.PageFormRegistration h1 {font-size:1.4em;}
  .PageFormRegistration .topcontainer {padding:0px !important}
  .PageFormInformation .topcontainer {padding:0px !important}
  .PageFormHelp .topcontainer {padding:0px !important}
  .PageFormDeleteFree .topcontainer {padding:0px !important}
  .PageJob .container {padding-left:5px;padding-right:5px;}
  #shiny-help.container {padding-left:5px;padding-right:5px;}
  body.PageFormRegistrationIsp h1 {font-size:1.4em;}
  .PageFormRegistrationIsp .topcontainer {padding:0px !important;}
  .shinystatbusiness, .shinystatpro, .shinystatfree, .shinystatisp {padding-left:5px;padding-right:5px;}

  .shinyrank .hideSensibleContentDiv .eye {
    font-size: 9vh;
  }
}