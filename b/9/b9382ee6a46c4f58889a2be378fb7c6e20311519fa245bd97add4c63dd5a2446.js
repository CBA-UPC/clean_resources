/*204 No Content*/
/* Reset */

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
}

div, form {
    box-sizing: border-box;
}

article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
    display: block;
}

body {
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    max-width: 100vw;
    overflow-x: hidden;
}

ol, ul {
    list-style: none;
}

blockquote, q {
    quotes: none;
}

blockquote::before, blockquote::after,
q::before, q::after {
    content: '';
    content: none;
}

table {
    border-collapse: collapse;
    border-spacing: 0;
}

sup {
    vertical-align: super;
    font-size: 70%;
}

i {
    font-style: italic;
}

*.thin-scroll {
    scrollbar-width: thin;
    scrollbar-color: #5E939A #F4F4F4;
}

/* Works on Chrome/Edge/Safari */
*.thin-scroll::-webkit-scrollbar {
    width: 12px;
}
*.thin-scroll::-webkit-scrollbar-track {
    background: #F4F4F4;
}
*.thin-scroll::-webkit-scrollbar-thumb {
    background-color: #5E939A;
    border-radius: 20px;
    border: 3px solid #F4F4F4;
}

/* DESKTOP */


/* --- images print du header ------------------------- */
@media screen {
    .element-print-only {
        display: none !important;
    }
}

/* --- media screen => media all ---- */
@media all {

    * {
        box-sizing: border-box
    }

    html {
        height: 100%;
        padding: 0;
        margin: 0
    }

    body {
        background-color: #FFFFFF;
        font-family: 'Montserrat', sans-serif;
        font-size: 16px;
        line-height: 30px;
        margin: 0;
        word-wrap: break-word
    }

    a:link {
        text-decoration: underline;
        color: #222;
    }

    a:visited {
        color: #222;
    }

    a:active, a:hover {
        color: #222;
    }

    h1 {
        font-size: 40px;
        line-height: 50px
    }

    h2 {
        font-size: 30px;
        line-height: 35px
    }

    h3 {
        font-size: 25px;
        line-height: 30px
    }

    h4 {
        font-size: 22.5px
    }

    img {
        max-width: 100%;
        height: auto
    }

    input,
    textarea,
    button,
    .button,
    .resource-list.preview + a,
    select {
        font-size: 20px;
        line-height: 30px;
        margin: 0;
        vertical-align: top
    }

    input[type="search"],
    input[type="text"],
    input[type="password"],
    input[type="email"],
    input[type="url"],
    textarea {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        border-radius: 0;
        height: 45px;
        border: 1px solid #dedede;
        padding: 6.5px 1.69492%;
        margin: 0
    }

    textarea {
        height: 90px
    }

    input[type="file"] {
        line-height: 1;
        vertical-align: bottom;
        font-size: 15px
    }

    button,
    a.button,
    .resource-list.preview + a,
    [type="submit"] {
        background-color: #dedede;
        border-radius: 2px;
        padding: 7.5px;
        display: inline-block;
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        border: 0;
        cursor: pointer
    }

    select {
        background-color: #fff;
        padding: 7.5px;
        border-color: #dedede;
    }

    .select-parent {
        display: inline-block;
        overflow-x: hidden;
    }

    .select-parent > select {
        width: calc(100% + 20px);
        border: none;
        background: #FFF url(../img/select-down-small.png) right 22px center no-repeat;
        padding: 10px;
    }


    /* Custom checkbox */

    label {
        display: block;
        cursor: pointer;
    }
    [type="checkbox"] {
        border:0;
        clip:rect(0 0 0 0);
        height:1px;
        margin:-1px;
        overflow:hidden;
        padding:0;
        position:absolute;
        width:1px
    }
    [type="checkbox"][disabled]+.label {
        opacity:.35
    }
    [type="checkbox"][disabled]+.label:hover {
        cursor:default
    }
    [type="checkbox"]+.label {
        display:flex;
        position:relative
    }
    [type="checkbox"]+.label a {
        text-decoration:underline
    }
    [type="checkbox"]+.label::before {
        content:"";
        display:inline-block;
        flex:0 0 13px;
        width:13px;
        height:13px;
        vertical-align:-.25em;
        border:2px solid #384072;
        margin-right:4px;
        transition:all .5s ease;
        font-size:.7em;
        text-align:center;
        line-height:1.1;
        color:#fff;
        opacity:1!important
    }
    [type="checkbox"]:focus:not([disabled])+.label::after,
    [type="checkbox"]:hover:not([disabled])+.label::after {
        content:"";
        display:inline-block;
        position:absolute;
        left:-4px;
        top:-4px;
        background-color:rgba(56,64,114,.12);
        width:25px;
        height:25px
    }
    [type="checkbox"]:checked+.label::before {
        background:#384072 url(../img/checkmark.svg) center / cover no-repeat;
        content: "";
        opacity:1
    }
    [type="checkbox"]:active+.label::before {
        opacity:1
    }



    /* Default Placeholder */
    ::-webkit-input-placeholder {
        font-style: italic;
        font-size: 1em;
        color: #fff;
    }

    :-moz-placeholder {
        font-style: italic;
        font-size: 1em;
        color: #fff;
    }

    ::-moz-placeholder {
        font-style: italic;
        font-size: 1em;
        color: #fff;
    }

    :-ms-input-placeholder {
        font-style: italic;
        font-size: 1em;
        color: #fff;
    }

    .field .field-meta {
        width: 30%;
        padding: 7.5px 1.69492% 0 0
    }

    .field .inputs {
        width: 70%;
        padding-left: 1.69492%
    }

    .field .inputs > select,
    .field .inputs > textarea,
    .field .inputs > input[type="search"],
    .field .inputs > input[type="text"],
    .field .inputs > input[type="password"],
    .field .inputs > input[type="email"],
    .field .inputs > input[type="url"] {
        width: 100%
    }

    .field .inputs input[type="checkbox"] {
        vertical-align: bottom
    }

    .field.required .field-meta::after {
        content: "\f069";
        font-family: "Font Awesome 5 Free";
        font-size: 15px
    }

    .field .value:not(:last-child) {
        margin-bottom: 15px
    }

    .field-description {
        font-size: 15px
    }

    /* -- screen --------------------------------------------- */

    .body-inner {
        overflow-x: hidden;
    }

    #user-bar {
        position: relative;
        z-index: 1250;
    }

    .wrap {
        width: 85%;
    }

    .wrap {
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        margin-left: auto;
        margin-right: auto;
    }

    .is-flex {
        display: flex;
        justify-content: space-between;
    }

    .siteHeader {
        position: relative;
        color: #fff;
        z-index: 1200;
    }

    .siteHeader::before {
        content: '';
        position: absolute;
        z-index: 2;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background-color: #000;
    }

    .siteHeader,
    .siteHeader::before {
        min-height: 112px;
    }

    .siteHeader .wrap {
        position: relative;
        z-index: 3;
    }

    .site_name {
        padding: 4px 0 10px 0;
        margin-right: 47px;
        font-family: Granjon, sans-serif;
        text-transform: uppercase;
        font-size: 1.5rem;
        border-top: 5px solid #ff7b1a;
        letter-spacing: .15em;
    }

    .site_title p {
        display: none;
    }

    .site_title img {
        height: 32px;
        display: block;
        margin: 40px auto;
    }

    .header_lang a.nav_lang_trigger {
        text-decoration: none;
    }

    .header_lang a.nav_lang_trigger span.nav_lang_active {
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
        font-size: 0.875em;
        line-height: 1.2;
        color: #FFF;
        text-transform: uppercase;
    }

    .header_lang a.nav_lang_trigger::after {
        content: '';
        display: inline-block;
        background: url(../img/chevronblanc_bas.svg) bottom center / 15px auto no-repeat;
        width: 20px;
        height: 16px;
        overflow: hidden;
        transform-origin: 50% 75%;
    }

    .header_lang a.nav_lang_trigger.opened::after {
        /* transform: scale(1, -1); */
        transform: rotate(180deg);
    }

    .site_nav_meta {
        align-items: center;
    }

    .header_lang {
        position: relative;
        flex-direction: column;
        justify-content: center;
    }

    .header_lang #lang_tooltip {
        max-height: 300px;
        background-color: #fff;
        border: 1px solid rgba(0, 0, 0, .08);
        position: absolute;
        bottom: -80px;
        left: -20px;
        width: 120px;
        padding: 2px 0;
        z-index: 9999;

        display: none;
    }

    .header_lang.opened #lang_tooltip {
        display: flex;
        flex-direction: column;
    }

    .header_lang #lang_tooltip .lang_item span,
    .header_lang #lang_tooltip .lang_item a {
        padding: 5px 15px;
        display: inline-block;
        font-size: 0.875em;
        line-height: 1;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        color: #000;
        width: 100%;
        text-decoration: none;
    }

    .header_lang #lang_tooltip .lang_item.active span,
    .header_lang #lang_tooltip .lang_item.active a,
    .header_lang #lang_tooltip .lang_item a:hover {
        background-color: #EBEBEB;
    }

    .header_search {
        display: inline-block;
        margin-left: 12px;
        width: 29px;
        height: 29px;
    }

    .header_search a {
        display: inline-block;
        background: url(../img/loupe_menuheader.svg) center center no-repeat;
        width: 100%;
        height: 100%;
    }

    main {
        position: relative;
    }

    main a.footer-back-to-top,
    footer a.footer-back-to-top {
        display: inline-block;
        background: url(../img/top_off.svg) center center no-repeat;
        width: 40px;
        height: 40px;
        position: fixed;
        bottom: 40px;
        right: 40px;
    }

    main a.footer-back-to-top:hover,
    footer a.footer-back-to-top:hover {
        background-image: url(../img/top_over.svg);
    }

    .footer-back-to-top {
        opacity: 0;
        -webkit-transition: opacity .3s 0s, visibility 0s .3s, background-color .3s 0s;
        transition: opacity .3s 0s, visibility 0s .3s, background-color .3s 0s;
    }

    .footer-back-to-top.cd-top--show,
    .footer-back-to-top.cd-top--fade-out,
    .footer-back-to-top:hover {
        -webkit-transition: opacity .3s 0s, visibility 0s 0s, background-color .3s 0s;
        transition: opacity .3s 0s, visibility 0s 0s, background-color .3s 0s;
    }

    .footer-back-to-top.cd-top--show {
        visibility: visible;
        opacity: 1;
    }

    .footer-back-to-top.cd-top--fade-out {
    }

    .footer-back-to-top:hover {
        opacity: 1;
        cursor: pointer;
    }


    /* -- screen --------------------------------------------- */

    .siteFooter {
        background-color: #000;
        padding: 50px 0;
        color: #fff;
    }

    .siteFooter img {
        display: block;
        margin: 55px auto 14px;
        width: 214px;
    }

    .footer_menu {
        display: flex;
        justify-content: center;
    }

    .footer_menu > li:not(:last-child) {
        margin-right: 30px;
    }

    .footer_menu a {
        color: #fff;
        text-decoration: none;
    }

    .siteFooter .wrap {
        padding: 0 7.5%;
    }

    .siteFooter .our-sites {
    }

    .siteFooter .huma-num {
    }

    .siteFooter .element-print-only {
        margin-top: 30px;
        font-size: 16px;
        line-height: 1.2;
        color: #000;
        text-align: center;
    }

    .siteFooter .huma-num a {
        display: inline-block;
        padding: 0 0 72px;
        background: url(../img/logo/logo_humanum_footer_blanc.svg) bottom center no-repeat;
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        font-size:0.875em;
        color:#fff;
        text-decoration: none;
    }

    .siteFooter .footer_nav.row ul > li > a {
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
        font-size: 0.875em;
        color: #fff;
        text-decoration: none;
    }

    .siteFooter .footer_nav.row ul > li > a:hover {
        text-decoration: underline;
    }

    .siteFooter .footer_nav.row ul.our-sites > li > a {
        font-size: 0.875em;
        line-height: 1.875em;
    }

    .siteFooter .footer_nav.row ul.footer_menu > li > a {
        font-size: 0.75em;
        line-height: 0.875em;
    }

    .siteFooter .footer_nav.row:nth-child(1) {
        display: flex;
        justify-content: space-between;
        padding: 0 108px 20px 102px;
    }

    .siteFooter .footer_nav.row:nth-child(2) {
        padding-top: 25px;
        border-top: solid 1px #979797;
    }

    .siteFooter .footer_nav.row.our-sites h5 {
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        font-size: 0.875em;
        line-height: 1.3;
        text-transform: uppercase;
        margin-bottom: 18px;
    }

    /* -- screen --------------------------------------------- */

    .search-box {
        display: block;
        width: 100%;
        position: relative;
        overflow: hidden;
    }

    .search-box-image-parent {
        width: 100%;
        padding-bottom: 35%;
        position: relative;
    }

    .search-box img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
    }

    .search-box .form-parent {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .search-box form {
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        flex-direction: column;
        width: 962px;
        margin: 0 auto 12px;
        padding: 32px 20px 4px 15px;
    }

    .search-box .form-advanced-search-link {
        width: 100%;
        padding: 25px 0 22px;
        text-align: right;
    }
    .search-box .form-advanced-search-link a {
        text-transform: uppercase;
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
        font-size: 1.0625em;
        color: #fff;
        text-decoration: none;
        box-shadow: 0 1px 0 0 currentColor;
    }

    .search-box .form-advanced-search-link a:hover {
        box-shadow: 0 2px 0 0 #FF7B1A;
    }

    .search-form .form-input-and-buttons {
        position: relative;
    }

    .search-form .form-buttons {
        position: absolute;
        right: 0;
        bottom: 10px;
    }

    .search-form .form-buttons button {
        display: inline-block;
        box-sizing: border-box;
        background: none;
        padding: 0;
        width: 28px;
        height: 25px;
    }

    .search-form .form-buttons button:first-child {
        border-right: #CCC 1px solid;
        width: 38px;
        padding-right: 10px;
        margin-right: 2px;
    }

    .search-form.search-form-filters .form-buttons button:first-child {
        padding-right: 0;
    }

    .search-form .form-buttons button span {
        display: block;
        width: 100%;
        height: 100%;
    }

    .search-form .form-buttons button span.icon-close {
        background: url(../img/croix_panneau_recherche.svg) center / 14px no-repeat;
    }

    .search-form .form-buttons button.icon-search-btn span.icon-loupe {
        background: url(../img/loupe_bleue_recherche.svg) center no-repeat;
    }

    .search-box .search-form .form-buttons button.icon-search-btn span.icon-loupe {
        background: url(../img/loupe_recherche.svg) center no-repeat;
    }

    .search-form.search-form-filters .form-buttons button span.icon-close {
        background: url(../img/croix_bleu_panneau_recherche.svg) center / 14px no-repeat;
    }

    .search-form.search-form-filters .form-buttons button.icon-search-btn span.icon-loupe {
        background: url(../img/loupe_bleue_recherche.svg) center no-repeat;
    }

    .search-form .form-buttons button.icon-search-btn:hover span.icon-loupe,
    .search-form .form-buttons button.icon-close-btn:hover span.icon-close {
        opacity: 0.7;
    }

    .search-form form input[type="search"],
    .search-form form input[type="text"] {
        padding-right: 75px !important;
        padding-left: 0;
        background: none;
        border: none;
        box-shadow: none;

        outline: none;
        -webkit-appearance: none;
        -ms-appearance: none;
        -o-appearance: none;
        appearance: none;
        width: 100%;
    }

    .search-form form input[type="search"]:focus,
    .search-form form input[type="text"]:focus {
        border-color: rgba(255, 123, 26, 1.0);
    }

    .search-form form input[type="search"]::-webkit-input-placeholder,
    .search-form form input[type="text"]::-webkit-input-placeholder {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-style: normal;
        opacity: 1;
    }

    .search-form form input[type="search"]:-moz-placeholder,
    .search-form form input[type="text"]:-moz-placeholder {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-style: normal;
        opacity: 1;
    }

    .search-form form input[type="search"]::-moz-placeholder,
    .search-form form input[type="text"]::-moz-placeholder {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-style: normal;
        opacity: 1;
    }

    .search-form form input[type="search"]:-ms-input-placeholder,
    .search-form form input[type="text"]:-ms-input-placeholder {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-style: normal;
        opacity: 1;
    }

    .search-box form input[type="search"],
    .search-box form input[type="text"] {
        padding-bottom: 12px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.5);
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1.875em;
        color: #FFF;
    }

    .search-box.header-search-menu {
        background-color: #384072;
        padding: 25px 0 15px;
        box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.5);
        position: absolute;

        transform: translateY(-110%);
        transition: transform ease-in-out 0.75s;
    }

    .search-box.header-search-menu.opened {
        transform: translateY(0%);
    }

    .search-box.header-search-menu form {
        background: none;
    }

    .resource-list-and-filters .search-form .form-input-and-buttons {
        border-bottom: 1px solid #384072;
    }

    .search-box .search-form .form-input-and-buttons input:not([value]) + .form-buttons .icon-close-btn,
    .search-box .search-form .form-input-and-buttons input[value=""] + .form-buttons .icon-close-btn,
    .search-form .form-input-and-buttons input:not([value]) + .form-buttons .icon-close-btn,
    .search-form .form-input-and-buttons input[value=""] + .form-buttons .icon-close-btn {
        display: none;
    }

    .resource-list-and-filters .search-form form input[type="search"],
    .resource-list-and-filters .search-form form input[type="text"] {
        background: none;
        border: none;
        box-shadow: none;

        outline: none;
        -webkit-appearance: none;
        -ms-appearance: none;
        -o-appearance: none;
        appearance: none;

        color: #384072;
        font-family: 'Roboto', sans-serif;
        font-size: 0.875em;
    }

    .resource-list-and-filters .form-buttons button span.icon-close {
        background: url(../img/croix_bleu_panneau_recherche.svg) center / 14px no-repeat;
    }

    .resource-list-and-filters .form-buttons button span.icon-loupe {
        background: url(../img/loupechamp_bleu_off.svg) center no-repeat;
    }

    .resource-list-and-filters form input[type="search"]::-webkit-input-placeholder,
    .resource-list-and-filters form input[type="text"]::-webkit-input-placeholder {
        font-style: normal;
        color: #979797;
        opacity: 1;
    }

    .resource-list-and-filters form input[type="search"]:-moz-placeholder,
    .resource-list-and-filters form input[type="text"]:-moz-placeholder {
        font-style: normal;
        color: #979797;
        opacity: 1;
    }

    .resource-list-and-filters form input[type="search"]::-moz-placeholder,
    .resource-list-and-filters form input[type="text"]::-moz-placeholder {
        font-style: normal;
        color: #979797;
        opacity: 1;
    }

    .resource-list-and-filters form input[type="search"]:-ms-input-placeholder,
    .resource-list-and-filters form input[type="text"]:-ms-input-placeholder {
        font-style: normal;
        color: #979797;
        opacity: 1;
    }

    .filters-options {
        margin: 20px 0;
    }

    .filters-options > a {
        display: block;
        text-decoration: none;
        margin-bottom: 10px;
    }

    .filters-options > a:hover {
        text-decoration: none;
        color: #FF7B1A;
    }

    .filters-options > a.save-filters-btn {
        background: url(../img/cadenas_violet.svg) left center / 16px auto no-repeat;
        padding-left: 30px;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size:0.875em;
    }

    .filters-options > a.save-filters-btn:hover {
        background-image: url(../img/cadenas_orange.svg);
    }

    .filters-options > a.init-filters-btn {
        background: url(../img/reset_off.svg) left center / 19px auto no-repeat;
        padding-left: 30px;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size:0.875em;
    }

    .filters-options > a.init-filters-btn:hover {
        background-image: url(../img/reset_on.svg);
    }

    .export-options {
        width: 100%;
        margin: 20px 0 27px;
    }

    .export-options label {
        display: inline-block;
    }

    .export-options ul,
    .export-options ul > li {
        display: inline-block;
    }

    .export-options ul > li > a,
    .export-options label {
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
        font-size: 0.875em;
    }

    .export-options ul > li > a {
        display: inline-block;
        margin-left: 20px;
        padding-left: 22px;
        background: url(../img/csv_violet.svg) left center no-repeat;
        text-decoration: none;
        text-transform: uppercase;
    }

    .export-options ul > li > a:hover {
        color:#FF7B1A;
        background-image: url(../img/csv_orange.svg);
    }

    /* -- screen ---------- */

    .corpus-description {
        background-color: #384072;
        color: #FFF;
        padding: 55px 0;
        text-align: center;
        font-family: 'Roboto', sans-serif;

    }

    .page-intro .page-intro-content,
    .page-type-block .page-type-block-content,
    .page-type-block-asset .page-type-block-content,
    .corpus-description .corpus-description-content {
        width: 80%;
        margin: 0 auto;
        max-width: 950px;
    }

    .corpus-description .corpus-description-content div,
    .corpus-description .corpus-description-content p {
        font-weight: 300;
        font-size: 1.4375em;
        line-height: 1.4;
    }

    .corpus-description a {
        text-transform: uppercase;
        color: #FFF;
    }

    .corpus-description .corpus-description-more-link {
        margin-top: 16px;
    }

    .corpus-description .corpus-description-more-link a {
        display: inline-block;
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        font-size: 0.875em;
        line-height: 2.4em;
        text-decoration: none;
        box-shadow: 0 1px 0 0 currentColor;
    }

    .corpus-description .corpus-description-more-link a:hover {
        box-shadow: 0 2px 0 0 #FF7B1A;
    }


    /* -- screen --------------------------------------------- */

    .collections-axis-browse {
    }

    .collections-axis-browse > li {
        padding: 58px 0 66px;
    }

    .collections-axis-browse:nth-child(2n+1) > li h2 span,
    .collections-axis-browse:nth-child(2n+1) > li .collections-axis-contents .collections-slider .slick-list::after,
    .collections-axis-browse:nth-child(2n+1) > li {
        background-color: #f5f5f5;
    }

    .collections-suggestions .collections-slider .slick-list::after {
        background-color: #2d335b;
    }

    .collections-site {
        position: relative;
    }

    body.media.resource.show main > *:not(.theme-header) {
        padding: 10px 0;
    }

    body.media.resource.show main {
        padding-bottom: 25px;
    }

    body.media.resource.show main h2 {
        margin-top: 20px !important;
        margin-bottom: 20px !important;
    }

    body.media.resource.show main > *:not(.theme-header),
    .collections-site > div.collections-site-content,
    .collections-axis-browse > li > div {
        max-width: 1230px;
        margin: 0 auto;
    }

    .theme-contents-title h2,
    .collections-axis-browse > li h2 {
        position: relative;
        text-align: center;

        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        font-size: 1.875em;
        line-height: 30px;
        color: #384072;
        text-transform: uppercase;
    }

    .theme-contents-title h2::before,
    .collections-axis-browse > li h2::before {
        content: '';
        position: absolute;
        width: 100%;
        top:50%;
        left:0;
        height: 2px;
        border-bottom: 2px solid #384072;
    }

    .theme-contents-title h2 span,
    .collections-axis-browse > li h2 span {
        position: relative;
        display: inline-block;
        background-color: #FFF;
        padding: 0 35px;
    }

    .collections-axis-browse > li .collections-axis-browse-items-count {
        width: 100%;
        text-align: center;
        text-transform: uppercase;
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
        font-size: 0.875em;
        margin-bottom: 50px;
        margin-top: 6px;
    }

    .collections-axis-browse > li .collections-axis-contents {
        display: block;
        overflow: hidden;
    }

    .collections-axis-browse > li .collections-axis-contents::after {
        content: '';
        clear: both;
    }

    .collections-axis-browse > li .collections-axis-contents .collections-axis-description {
        width: 20%;
        float: left;
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
        font-size: 1.0625em;
        line-height: 1.5;
        margin-right: 20px;
    }

    .collections-slider .collections-slider-previous-collection,
    .collections-slider .collections-slider-next-collection {
        display: block;
        flex: 50px 0 0;
        width: 50px;
    }

    .collections-slider .collections-slider-previous-collection.slick-disabled,
    .collections-slider .collections-slider-next-collection.slick-disabled {
        opacity: 0.25;
    }

    .collections-slider .collections-slider-previous-collection.slick-hidden,
    .collections-slider .collections-slider-next-collection.slick-hidden {
        pointer-events: none;
        opacity: 0;
    }

    .collections-slider .slick-list::after {
        content: '';
        position: absolute;
        right:0;
        top:0;
        display: block;
        background-color: #fff;
        width: 20px;
        height: 100%;
    }

    .collections-slider .collections-slider-previous-collection {
        background: url(../img/chevronviolet_precedent.svg) top 110px right 19px / 20px 44px no-repeat;
    }

    .collections-suggestions .collections-slider .collections-slider-previous-collection {
        background-image: url(../img/chevronblanc_precedent.svg);
    }

    .collections-slider .collections-slider-previous-collection:hover {
        background-image: url(../img/chevronorange_precedent.svg);
    }

    .collections-slider .collections-slider-next-collection {
        background: url(../img/chevronviolet_suivant.svg) top 110px right 19px / 20px 44px no-repeat;
    }

    .collections-suggestions .collections-slider .collections-slider-next-collection {
        background-image: url(../img/chevronblanc_suivant.svg);
    }

    .collections-slider .collections-slider-next-collection:hover {
        background-image: url(../img/chevronorange_suivant.svg);
    }

    .collections-slider > a {
        display: inline-block;
        width: 50px;
    }

    .collections-slider > div.slick-slider {
        display: inline-block;
        width: calc(100% - 100px);
        overflow: hidden;
    }

    .collections-slider .slider-card {
        display: block;
        margin: 0 20px 0 0;
        width: calc(33% - 20px);
    }

    .collections-slider .slider-card > a > *:not(.collections-axis-collection-thumbnail) {
        margin-left: 5px;

    }

    .collections-slider .slider-card > a > span {
        display: inline-block;
        margin-top: 12px;
        font-family: 'Montserrat', sans-serif;
        font-size: 0.875em;
        line-height: 1.125em;
        font-weight: 600;
        text-transform: uppercase;
    }

    .collections-slider .slider-card > a {
        display: block;
        text-decoration: none;
    }

    .collections-slider .slider-card > a > span {
        color: #1A1A1A;
        box-shadow: 0 1px 0 0 #1A1A1A;
    }

    .collections-slider .slider-card > a:hover > span {
        box-shadow: 0 2px 0 0 #FF7B1A;
    }

    .collections-slider .slider-card .collections-axis-collection-card > div:not(.collections-axis-collection-thumbnail) {
        width: 90%;
    }

    .collections-slider .slider-card:last-child .collections-axis-collection-card {
    }


    .collections-axis-collection-card > h3 {
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
        font-size: 0.875em;
        line-height: 1.125em;
        text-transform: uppercase;
    }

    .collections-axis-collection-card > h3,
    .collections-axis-collection-card > .collections-axis-collection-resume,
    .collections-axis-collection-card > .collections-axis-collection-description {
        margin-top: 10px;
    }

    .collections-axis-collection-card > .collections-axis-collection-resume,
    .collections-axis-collection-card > .collections-axis-collection-description {
        font-size: 0.875em;
        line-height: 1.25em;
    }

    .collections-axis-collection-card > .collections-axis-collection-resume {
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
    }

    .collections-axis-collection-card > .collections-axis-collection-description {
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
    }

    .collections-axis-collection-card > a::before {
        content: "";
        display: block;
        margin-top: 20px;
    }

    .collections-axis-collection-card > a {
        font-size: 14px;
        font-weight: 600;
        line-height: 18px;
        text-decoration: none;
        text-transform: uppercase;
        box-shadow: 0 1px 0 0 #1A1A1A;
    }

    .collections-axis-collection-card > a:hover {
        box-shadow: 0 2px 0 0 #FF7B1A;
    }

    .collections-axis-collection-thumbnail {
        position: relative;
        padding-bottom: 100%;
        overflow: hidden;
    }

    .collections-axis-collection-thumbnail > img {
        position: absolute;
        object-fit: cover;
        width: 100%;
        height: 100%;
    }

    .collections-site {
        /* border-top: #ff7b1a 10px solid; */
        /* background: #363b62 url(../img/bg-site-des-collections.png) left center / auto 100% no-repeat; */
        color: #fff;
        height: 100%;
        background-position: top center;
        background-size: auto 100%;
        background-repeat: no-repeat;
        background-color: #363b62;
    }

    .collections-site .collections-site-bg {
        position: relative;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }

    .collections-site .collections-site-bg img {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: left center;
    }

    .collections-site > div.collections-site-content {
        background: rgba(54,59,98,0.25);
        max-width: 1260px;
        padding: 124px 40px 95px 630px;
        color: #fff;
    }

    .collections-site h2 {
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        font-size: 1.875em;
        text-transform: uppercase;
    }

    ul.item-card-metadata > li.metadata-title > ul > li h2,
    ul.item-card-metadata > li.metadata-body > ul > li,
    ul.item-card-metadata > li.metadata-date > ul > li,
    ul.item-card-metadata > li.metadata-site > ul > li,
    .collections-axis-collection-resume,
    .collections-axis-collection-description {
        text-overflow:ellipsis;
        overflow:hidden;
        display: -webkit-box !important;
        -webkit-box-orient: vertical;
        white-space: normal;
    }
    ul.item-card-metadata > li.metadata-title > ul > li h2,
    ul.item-card-metadata > li.metadata-date > ul > li,
    ul.item-card-metadata > li.metadata-site > ul > li {
        -webkit-line-clamp: 4;
    }
    ul.item-card-metadata > li.metadata-body > ul > li,
    .collections-axis-collection-resume,
    .collections-axis-collection-description {
        -webkit-line-clamp: 5;
    }

    .collections-site p {
        margin: 20px 0;
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
        font-size: 1.0625em;
        line-height: 1.5625em;
    }

    .collections-site .external-link {
        margin-top: 30px;
        padding-left: 32px;
        background: url(../img/lien_ext_blanc.svg) bottom 2px left / 21px 21px no-repeat;
    }

    .collections-site .external-link:hover {
        background-image: url(../img/lien_ext_orange.svg);
    }

    .collections-site .collections-site-content a {
        color: #fff;
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        font-size: 0.875em;
        line-height: 1.2;
        text-decoration: none;
        text-transform: uppercase;
        box-shadow: 0 1px 0 0 currentColor;
    }

    .collections-site .collections-site-content a:hover {
        box-shadow: 0 2px 0 0 #FF7B1A;
    }

    .collections-slider {
        display: flex;
    }

    .collections-suggestions {
        background-color: #2d335b;
        color: #fff;
    }

    .collections-suggestions-content {
        padding: 80px 0 45px;
        display: flex;
    }

    .collections-suggestions {
        display: flex;
    }

    .collections-suggestions h4 {
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        font-size: 2.1875em;
        line-height: 1.2;
        text-transform: uppercase;
        width: 90%;
    }

    .collections-suggestions .collections-suggestions-title {
        flex: 30% 0 0;
    }

    .collections-suggestions .collections-slider {
    }

    .collections-suggestions .collections-slider .slider-card a {
        display: block;
        text-decoration: none;
        color: #fff;
    }

    .collections-suggestions .collections-slider .slider-card a:hover {
        text-decoration: none;
    }

    .collections-suggestions .collections-slider .slider-card a > span {
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
        font-size: 0.875em;
        color: #fff;
        box-shadow: 0 1px 0 0 #fff;
    }

    .collections-suggestions .collections-slider > div.slick-slider,
    .collections-suggestions .collections-slider {
        display: block;
        width: 100%;
    }

    .collections-suggestions .collections-slider > a {
        display: none;
    }

    .collections-suggestions .collections-slider .slider-card a:hover > span {
        box-shadow: 0 2px 0 0 #FF7B1A;
    }

    .collections-suggestions .collections-slider .slider-card a:hover > div {
    }

    .collections-suggestions .collections-slider .slider-card a:hover > span {
        text-decoration: none;
    }

    .collections-suggestions .collections-axis-collection-card > .collections-axis-collection-resume {
        color:#D8D8D8;
    }

    /* -- screen --------------------------------------------- */

    .breadcrumbs {
        color: #fff;
    }

    .breadcrumbs a {
        color: #fff;
        text-decoration: none;
    }

    .breadcrumbs span,
    .breadcrumbs a {
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
        font-size: 0.75em;
    }

    .breadcrumbs a:hover {
        text-decoration: underline;
    }

    .breadcrumbs a::after {
        content: '>';
        display: inline-block;
        margin: 0 5px 0 7px;
        color: #fff;
    }

    .breadcrumbs span {
        color: #fff;
    }

    .browse-itemsets .breadcrumbs a {
        color: #fff;
    }

    .browse-itemsets .breadcrumbs span {
        color: #FFF;
    }

    .breadcrumbs a:hover {
        color: #FFF;
        text-decoration: underline;
    }

    .browse-itemsets .breadcrumbs a:hover {
        color: #FFF;
    }

    .item-show-header .breadcrumbs {
        padding: 10px 0;
        line-height: 16px;
    }

    .item-show-header .breadcrumbs a::after,
    .item-show-header .breadcrumbs span,
    .item-show-header .breadcrumbs a {
        color: #000;
    }

    .theme-breadcrumbs {
        margin-top: 26px;
    }

    .theme-breadcrumbs .breadcrumbs a::after,
    .theme-breadcrumbs .breadcrumbs span,
    .theme-breadcrumbs .breadcrumbs a {
        color: #676767;
    }

    .itemset-header .theme-breadcrumbs {
        margin-top: 0;
    }
    .itemset-header .theme-breadcrumbs .breadcrumbs a::after,
    .itemset-header .theme-breadcrumbs .breadcrumbs span,
    .itemset-header .theme-breadcrumbs .breadcrumbs a {
        color: #fff;
    }

    /* -- screen --------------------------------------------- */

    .content-with-padding {
        padding-left: calc(50% - 640px);
        padding-right: calc(50% - 640px);
    }

    /* ----------------------------------------------- */

    .item-show-header,
    .itemset-header {
        position: relative;
        width: 100%;
        background-color: #CCCCCC;
    }

    .itemset-header-bg {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        overflow: hidden;
    }

    .itemset-header-bg img {
        object-fit: cover;
        object-position: center;
        width: 100%;
        height: 100%;
    }

    .artwork-info-link {
        display: flex;
        align-items: flex-start;

        position: absolute;
        left: 0;
        bottom: 0;
        z-index: 1;
        width: 60px;
        height: 48px;
        background-color: rgba(26,26,26, 0.7);
    }

    .artwork-info-link.opened {
        z-index: 2;
        width: 100%;
        height: auto;
        background-color: rgba(26,26,26, 0.9);

        color:#FFF;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 0.875em;
        line-height: 1.15;
    }

    .artwork-info-link > a {
        flex: 60px 0 0;
        display: block;
        background: url(../img/info.svg) center / 27px 27px no-repeat;
        width: 100%;
        height: 48px;
    }

    .artwork-info-link > a:hover {
        opacity: 0.7;
        background-color: rgba(26,26,26, 0.7);
    }

    .artwork-info-link > div.artwork-info-details {
        visibility: hidden;
        padding:16px 20px;
        opacity: 0;
        transition: opacity ease-in-out 0.4s;
    }

    .artwork-info-link.opened > div.artwork-info-details {
        visibility: visible;
        opacity: 1;
    }

    /* --- screen ---*/

    .itemset-header nav.breadcrumbs {
        position: relative;
        z-index: 2;
    }

    .itemset-header nav.breadcrumbs,
    .itemset-header .itemset-header-content {
        width: 58%;
        background-color: #384072;
        padding: 10px 4%;
    }

    .itemset-header .itemset-header-content {
        min-height: 500px;
    }

    .itemset-header-content-parent.content-with-padding {
        padding: 0;
    }

    .itemset-header .itemset-header-content {
        position: relative;
        z-index: 2;
        padding-top: 20px;
        padding-bottom: 40px;
        color: #fff;
    }

    .itemset-header .itemset-header-content {
        padding: 10px 4% 50px;
    }

    .itemset-header .itemset-header-content a {
        color: #fff;
    }

    .itemset-header h1 {
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        font-size: 2.1875em;
        line-height: 1.2;
        text-transform: uppercase;
        margin: 30px 0 6px;
    }

    .itemset-header .itemset-subtitle {
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
        font-size: 1.0625em;
        line-height: 1.25em;
        text-transform: uppercase;
    }

    .itemset-title-parent {
        display: inline-block;
        padding-bottom: 15px;
        margin-bottom: 10px;
        border-bottom: 1px solid #FF7B1A;
    }

    .itemset-header .itemset-items-count {
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
        font-size: 0.875em;
        text-transform: uppercase;
        margin-bottom: 5px;
    }

    .itemset-header .itemset-short-description {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1.0625em;
        line-height: 1.3;
    }

    .itemset-header .itemset-long-description {
        margin-top: 20px;

        font-family: 'Roboto', sans-serif;
        font-weight: 300;
        font-size: 1.0625em;
        line-height: 1.6;
    }

    .itemset-more-description {
        background-color: #f5f5f5;
        display: none;
    }

    .itemset-more-description-content {
        padding: 38px 4% 52px;
    }

    .itemset-more-description-text {
        column-count: 2;
        column-gap: 20px;

        font-family: 'Roboto', sans-serif;
        font-weight: 300;
        font-size: 1.0625em;
        line-height: 1.6;
    }

    .itemset-more-description-close-link {
        padding: 20px 0 0;
        text-align: center;
    }

    .itemset-more-description-close-link a {
        text-decoration: none;
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
        font-size: 0.875em;
        text-transform: uppercase;
        box-shadow: 0 1px 0 0 currentColor;
        color:#1A1A1A;
    }

    .itemset-more-description-close-link a:hover {
        box-shadow: 0 2px 0 0 #FF7B1A;
    }

    a.itemset-more-description-link {
        display: inline-block;
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        font-size: 0.875em;
        line-height: 2.4em;
        margin-top: 30px;
        text-transform: uppercase;
        text-decoration: none;
        box-shadow: 0 1px 0 0 currentColor;
    }

    a.itemset-more-description-link:hover {
        box-shadow: 0 2px 0 0 #FF7B1A;
    }

    .itemset-header nav.breadcrumbs,
    .resource-list-and-filters,
    .itemset-header .itemset-header-content {
        /* margin-left: 110px; */
    }

    /* -- screen --------------------------------------------- */

    .resource-list-selected-filters-and-edit > * {
        display: inline-block;
    }

    .theme-resource-list-header .edit-search-btn,
    .resource-list-selected-filters-and-edit > .edit-search-btn {
        margin: 20px 0;
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        font-size: 0.875em;
        line-height: 1.4;
        text-transform: uppercase;
        text-decoration: none;
        box-shadow: 0 1px 0 0 currentColor;
        color: #384072;
    }

    ul.advanced-search-selected-filters,
    ul.resource-list-selected-filters {
        margin: 0 0 10px 0;
    }

    ul.advanced-search-selected-filters li,
    ul.resource-list-selected-filters li {
        margin: 0 6px 4px 0;
    }

    ul.advanced-search-selected-filters li a,
    ul.resource-list-selected-filters li a {
        display: inline-block;
        padding: 7px 35px 7px 8px;
        border: solid 1px #CCC;
        background: #fff url(../img/croix_bleu_panneau_recherche.svg) center right 10px / 10px 10px no-repeat;
        text-decoration: none;

        font-family: 'Roboto', sans-serif;
        font-weight: 300;
        font-size: 0.75em;
        line-height: 1.2;
        color: #4D4D4D;
    }

    ul.advanced-search-selected-filters li a:focus,
    ul.resource-list-selected-filters li a:focus,
    ul.advanced-search-selected-filters li a:hover,
    ul.resource-list-selected-filters li a:hover {
        text-decoration: underline;
    }

    .resource-list-and-filters {
        display: flex;
        margin-top: 50px;
    }

    body.resource.browse:not(.search) .resource-list-and-filters {
        width: 100%;
        padding: 0;
    }

    .resource-list-and-filters > * {
        margin-bottom: 45px;
    }

    .search-results .resource-list-and-filters {
        margin-top: 0;
    }

    .resource-list-content.list .search-results .resource-list {
        flex-direction: column;
    }

    /* Correction pour item-set via search. */
    .search-results.search-results-item-set .resource-list-and-filters {
        margin-top: 50px;
    }

    .resource-list-filters > .search-facet {
        padding-bottom: 10px;
    }

    .resource-list-filters > .search-facet.opened {
        padding-bottom: 0;
    }

    .resource-list-filters ul {
        background-color: #efefef;
        padding: 20px;
        margin: 10px 0;
    }

    .resource-list-filters ul li {
        line-height: 18px;
        padding-bottom: 10px;
        display: flex;
        align-items: flex-start;
    }

    .resource-list-filters ul li:last-child {
        padding-bottom: 0;
    }

    .resource-list-filters ul li .search__label {
        margin-left: 6px;
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
        font-size: 0.875em;
        line-height: 1.4;
    }

    .resource-list-filters ul li .search__label span.count {
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
    }

    .resource-list-filters a {
        display: block;
        text-decoration: none;
        position: relative;
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
        font-size: 1.0625em;
    }

    .resource-list-filters a::after {
        content: '';
        display: block;
        width: 22px;
        height: 11px;
        background: url(../img/chevronviolet_bas.svg) right center no-repeat;
        position: absolute;
        right: 10px;
        top: 5px;
        transform-origin: 63% 50%;
        transition: transform ease-in-out 0.1s;
        transform: rotate(180deg);
    }

    .resource-list-filters a:hover::after {
        background-image: url(../img/chevronorange_bas.svg);
    }

    .resource-list-filters .search-facet.opened a::after {
        transform: rotate(0deg);
    }

    .resource-list-filters ul {
        display: none;
    }

    .resource-list-filters .opened ul {
        display: block;
    }

    .resource-list-and-filters aside {
        flex: 375px 0 0;
        background-color: #f5f5f5;
        padding: 0;
    }

    .resource-list-and-filters aside .resource-list-filters-and-toggle {
        height: auto;
        padding: 25px 23px;
    }

    .resource-list-and-filters .resource-list-content {
        flex: calc(100% - 375px) 0 0;
        padding: 0 0 0 32px;
    }

    body.browse:not(.search) .resource-list-and-filters .resource-list-content {
        flex: 100% 0 0;
        padding: 0;
    }

    .resource-list-filters-and-toggle {
    }

    .resource-list-toggle-filters {
        display: none;
    }

    /* Facets - see- all toggle */

    .search-facet-items .see-all-facets {
        display: block;
        width: 100%;
        text-align: center;
    }

    .search-facet-items .see-all-facets a {
        color: #384072;
        font-family: 'Roboto', sans-serif;
        font-size: 0.875em;
        font-weight: 500;
        line-height: 17px;
    }

    .search-facet-items .see-all-facets a > span {
        text-decoration: underline !important;
    }

    .search-facet-items .see-all-facets a::after {
        display: none;
    }

    .search-facet-items li.displayed-with-toggle {
        display: none;
    }

    .search-facet-items.facets-toggle-opened li.displayed-with-toggle {
        display: list-item;
    }

    .search-facet-items a span.see-all-opened,
    .search-facet-items.facets-toggle-opened a span.see-all-closed {
        display: none;
    }

    .search-facet-items.facets-toggle-opened a span.see-all-opened,
    .search-facet-items a span.see-all-closed {
        display: inline-block;
    }


    /* */


    .mobile-filters-title-and-close-btn,
    .theme-resource-list-header > .mobile-filters-and-menu-toggle .resource-list-toggle-filters-menu,
    .resource-list-and-filters > .mobile-filters-and-menu-toggle,
    .resource-list-controls > .mobile-filters-and-menu-toggle {
        display: none;
    }

    .resource-list-controls {
        padding-top: 12px;
        padding-bottom: 6px;
        border-bottom: 1px solid #384072;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .resource-list-controls > * {
        height: 42px;
    }

    .resource-list-controls > nav {
        height: 20px;
    }

    .search-results .resource-list.grid > .theme-resource-list-header + .resource-list-controls {
        margin-bottom: 100px;
    }

    .theme-resource-list-header + .resource-list-controls {
        margin-bottom: 50px;
    }
    .resource-list-content .resource-list-controls:last-child {
        border: none;
    }

    .resource-list-content .resource-list-controls:last-child .resource-list-sort-and-list-mode {
        visibility: hidden;
        pointer-events: none;
    }

    .resource-list-controls > * {
        display: inline-block;
    }

    .theme-resource-list-header > .resource-list-count,
    .resource-list-controls > .resource-list-count {
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
        font-size: 1.0625em;
        padding-bottom: 6px;
    }

    .resource-list-controls .resource-list-sort-and-list-mode {
        display: flex;
        align-items: flex-start;
    }

    .resource-list-controls .select-parent {
        border: 1px solid #979797;
    }

    .resource-list-controls .select-parent.with-focus {
        border: 1px solid rgba(255, 123, 26, 1.0);
    }

    .select-parent > select {
        background: #FFF url(../img/chevron_d_formulaire.svg) right 32px center no-repeat;
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
        font-size: 1.0625em;
    }

    .resource-list-sort-mode {
        display: flex;
        align-items: center;
    }

    .resource-list-sort-mode label {
        margin: 0 15px;
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
        font-size: 1.0625em;
    }

    body.browse:not(.search) .resource-list-sort-mode .select-parent select[name=sort_by] {
        width: 180px;
    }
    body.browse:not(.search) .resource-list-sort-mode .select-parent select[name=sort_order] {
        width: auto;
    }
    body.browse:not(.search) .resource-list-sort-mode button[type=submit] {
        background-color: #384072;
        color:#fff;
        font-size: 16px;
        padding: 5px 5px;
    }
    body.browse:not(.search) .resource-list-sort-mode button[type=submit]:hover {
        opacity: 0.7;
    }

    .resource-list-display-mode {
        display: flex;
        align-items: flex-start;
        margin-left: 60px;
    }

    .resource-list-display-mode a {
        display: block;
        width: 40px;
        height: 40px;
    }

    .resource-list-display-mode li {
        margin-left: 5px;
    }

    .resource-list-display-mode .search-view-type-grid {
        background: url(../img/vignettes_off.svg) center no-repeat;
    }

    .resource-list-display-mode .search-view-type-grid.active {
        background: url(../img/vignettes_on.svg) center no-repeat;
    }

    .resource-list-display-mode .search-view-type-list {
        background: url(../img/liste_off.svg) center no-repeat;
    }

    .resource-list-display-mode .search-view-type-list.active {
        background: url(../img/liste_on.svg) center no-repeat;
    }

    .resource-list-pagination {
        text-align: center;
        margin: 15px 0;
    }

    /* TODO À quel endroit ? */
    .resource-list + .resource-list-pagination {
        margin-bottom: 4px;
    }

    .resource-list-controls .resource-list-pagination {
        margin: 0;
        padding: 0 0 6px 0;
    }

    .resource-list-pagination > * {
        display: inline-block;
        vertical-align: top;
    }

    .resource-list-pagination.pagination-bottom {
        margin-top: 0;
    }

    .resource-list-pagination a {
        text-decoration: none;
    }

    .resource-list-pagination .pagination-previous,
    .resource-list-pagination .pagination-next {
        display: inline-block;
        line-height: 1;
    }

    .resource-list-pagination .pagination-previous {
        padding: 0 0 0 15px;
    }

    .resource-list-controls .resource-list-pagination .pagination-previous {
        padding: 0;
    }

    .resource-list-pagination form {
    }

    .resource-list-pagination form input {
        width: 40px;
        height: 28px;
        border: none;
        outline: none;
        background: none;
        text-align: center;
        background-color: #efefef;
        border-bottom: 1px solid #384072;
    }

    .resource-list-pagination form input:focus {
        border-bottom: 1px solid rgba(255, 123, 26, 1.0);
    }

    .resource-list-pagination form input,
    .resource-list-pagination span.pagination-total {
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
        font-size: 1.0625em;
        color: #000;
    }

    .resource-list-pagination form::after {
        content: "|";
        margin: 0 8px 0 3px;
    }

    .resource-list-pagination .pagination-previous::before {
        content: "";
        display: inline-block;
        width: 20px;
        height: 30px;
        background: url(../img/chevronviolet_precedent.svg) center / 15px 16px no-repeat;
        margin-right: 7px;
    }

    .resource-list-pagination a.pagination-previous:hover::before {
        background-image: url(../img/chevronorange_precedent.svg);
    }

    .resource-list-pagination .pagination-next::after {
        content: "";
        display: inline-block;
        width: 20px;
        height: 30px;
        background: url(../img/chevronviolet_suivant.svg) center / 15px 16px no-repeat;
        margin-left: 7px;
    }

    .resource-list-pagination a.pagination-next:hover::after {
        background-image: url(../img/chevronorange_suivant.svg);
    }

    .resource-list-header {
        padding-top: 25px;
        padding-bottom: 0;
    }

    .resource-list-header .resource-list-count {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1.6875em;
    }

    .resource-list-header ul.resource-list-selected-filters {
        margin: 20px 18px 0 0;
    }

    .theme-resource-list-header ul.resource-list-selected-filters {
        margin-right: 18px;
    }

    .theme-resource-list-header ul.resource-list-selected-filters {
        display: inline-block;
        width: auto;
    }

    ul.advanced-search-selected-filters > li,
    .theme-resource-list-header ul.resource-list-selected-filters > li,
    .resource-list-header ul.resource-list-selected-filters > li {
        display: inline-block;
    }

    ul.advanced-search-selected-filters > li > a,
    .resource-list-header ul.resource-list-selected-filters > li > a {
        background-color: #f5f5f5;
        border: none;
    }

    ul.advanced-search-selected-filters > li > a {
        padding: 8px 35px 8px 8px;
    }

    .resource-list-header ul.resource-list-selected-filters > li > a {
        padding: 10px 35px 10px 8px;
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
        font-size: 0.875em;
        line-height: 1.4;
        color: #000;
    }

    ul.resource-list {
        display: block;
    }

    ul.resource-list > li {
        margin-bottom: 60px;
    }

    .resource-list-content ul.resource-list.grid {
        display: flex;
        flex-wrap: wrap;
    }

    .resource-list-content ul.resource-list.grid > li {
        flex: 33.33% 0 0;
        margin-bottom: 60px;
    }

    .resource-list-content ul.resource-list.grid > li:nth-child(3n+1) {
        padding-right: 12px;
    }

    .resource-list-content ul.resource-list.grid > li:nth-child(3n+2) {
        padding: 0 6px;
    }

    .resource-list-content ul.resource-list.grid > li:nth-child(3n) {
        padding-left: 12px;
    }

    ul.resource-list > li {
        margin-bottom: 20px;
    }

    /* -- list mode --- screen -----  */

    ul.resource-list > li a {
        display: flex;
        text-decoration: none;
    }

    .item-card-media-parent {
        flex: 140px 0 0;
        margin-right: 20px;
    }

    .item-card-metadata-and-tags {
        flex: calc(100% - 140px) 0 0;
        margin-top: 15px;
    }

    /* thumbnail mode --- screen -----  */

    .resource-list-content ul.resource-list.grid > li a {
        display: block;
    }

    .resource-list-content ul.resource-list.grid .item-card-metadata-and-tags {
        width: 96%;
    }

    .resource-list-content ul.resource-list.grid > li a .item-card-media-parent {
        margin-right: 0;
    }

    .item-card-media {
        position: relative;
        width: 100%;
        padding-bottom: 85%;
        overflow: hidden;
    }

    .resource-list-content .grid .item-card-media {
        width: 100%;
    }

    .item-card-media img {
        background-color: #efefef;
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: contain;
        object-position: center;
    }

    ul.item-card-metadata > li {
        line-height: 1.1;
        margin-bottom: 6px;
    }

    ul.item-card-metadata > li > ul {
        list-style-type: none;
        list-style-position: inside;
        margin: 0;
        padding: 0;
    }

    ul.item-card-metadata > li > ul > li {
        margin: 0;
        padding: 0;
    }

    ul.resource-list ul.item-card-metadata > li.metadata-title h2 {
        display: inline;
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
        font-size: 1.0625em;
        line-height: 1.2;
        color:#000;
        padding-bottom: 2px;
    }

    ul.resource-list ul.item-card-metadata > li.metadata-date,
    ul.resource-list ul.item-card-metadata > li.metadata-site {
        display: inline;
    }

    ul.resource-list a:hover ul.item-card-metadata > li.metadata-title h2 > span {
        display: inline !important;
        box-shadow: 0 2px 0 0 #FF7B1A;
    }

    ul.resource-list ul.item-card-metadata > li.metadata-body,
    ul.resource-list ul.item-card-metadata > li.metadata-type  {
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
        font-size: 0.875em;
        line-height: 1.0625em;
    }

    ul.item-card-metadata > li.metadata-body > ul > li {
        display: inline;
    }

    ul.item-card-metadata > li.metadata-body > ul > li::after {
        content: ', ';
    }

    ul.item-card-metadata > li.metadata-body > ul > li:last-child::after {
        content: '';
    }

    ul.resource-list ul.item-card-metadata > li.metadata-description p {
        font-size: 0.8125em;
        line-height: 1em;
    }

    ul.resource-list ul.item-card-metadata > li.metadata-date,
    ul.resource-list ul.item-card-metadata > li.metadata-site {
        font-size: 0.8125em;
        line-height: 2em;
        color: #515151;
    }

    /*-- screen ----------------------------------*/

    .item-show-header {
        background-color: #f5f5f5;
        padding-bottom: 40px;
    }

    .item-header-content {
        display: flex;
        align-items: center;
    }

    .item-header-content .item-viewer {
        flex: 60% 0 0;
        border: 1px solid #eae8e4;
        background-color: #fff;
    }

    .item-header-content .item-viewer-header {
        border-bottom: 1px solid #eae8e4;
        padding: 10px;
    }

    .item-viewer-content {
        text-align: center;
        padding: 5px;
    }

    .item-header-content .item-infos {
        flex: 40% 0 0;
        padding: 0 30px 60px 60px;
    }

    .item-header-content .item-infos h1 {
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
        font-size: 1.6875em;
        line-height: 1.2;
        color: #1A1A1A;
        margin-bottom: 30px;
    }

    .item-header-content .item-infos .item-author {
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
        font-size: 1.0625em;
        line-height: 1.2;
        color: #1A1A1A;
        margin-bottom: 50px;
    }

    .item-header-content .item-infos .item-description {
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
        font-size: 1.0625em;
        line-height: 1.65;
        color: #000;
    }

    .item-show-content {
        padding: 35px 0 0;
    }

    .item-show-content > *:last-child {
        padding-bottom: 35px;
    }

    .item-show-content > * {
        padding: 0 30px;
    }

    .item-show-content .property-group,
    .item-show-content > dl,
    .item-show-content > div.item-show-metadata-panel {
        border-bottom: #9ca0b9 solid 1px;
        padding-top: 32px;
        padding-bottom: 42px;
    }

    .item-show-content .property-group:last-child,
    .item-show-content > dl:last-child,
    .item-show-content > div.item-show-metadata-panel:last-child {
        border-bottom: none;
    }

    .item-show-content dl .property,
    .item-show-content .item-show-metadata {
        display: flex;
        margin-bottom: 20px;
    }

    .item-show-content dl .property .expand {
        display: none;
    }

    .item-show-content dl .property .annotation {
        margin-top: -20px;
        margin-left: 75px;
    }

    .item-show-content dl .property .annotation .property {
        display: block;
    }

    .no-resource-link,
    a.resource-link {
        display: flex;
        align-items: center;
        gap: 15px;
        text-decoration: none;
        line-height: 1.4;
        margin-bottom: 20px;
    }

    a.resource-link {
        text-decoration: none !important;
        box-shadow: none !important;
    }

    a.resource-link span {
        display: inline !important;
        box-shadow: 0 2px 1px -1px #000000;
    }

    a.resource-link:hover span {
        box-shadow: 0 2px 0 0 #FF7B1A;
    }

    .item-show-content .property-group > dl > .property > .property-values {
        width: 100%;
    }

    .item-show-content dl .property:last-child,
    .item-show-content .item-show-metadata:last-child {
        margin-bottom: 0;
    }

    .item-show-content dl .property > dt,
    .item-show-content .item-show-metadata .item-show-metadata-term {
        flex: 275px 0 0;
    }

    .item-show-content dl .property > dt,
    .item-show-content dl .property > dd,
    .item-show-content .item-show-metadata .item-show-metadata-term,
    .item-show-content .item-show-metadata .item-show-metadata-value {
        font-size: 16px;
        line-height: 23px;
    }

    .item-show-content .item-show-info-and-tools {
        display: flex;
    }

    .item-show-content .item-show-info-and-tools h2 {
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        font-size: 2.1875em;
        text-transform: uppercase;
        color:#384072;
        margin-right: 30px;
    }

    button.item-show-download-btn,
    a.item-show-download-btn {
        display: inline-block;
        width: 40px;
        height: 40px;
        background: url(../img/telecharger_violet.svg) no-repeat;
        margin-right: 10px;
    }

    button.item-show-download-btn:hover,
    a.item-show-download-btn:hover {
        background-image: url(../img/telecharger_orange.svg);
    }

    button.item-show-share-btn,
    a.item-show-share-btn {
        position: relative;
        display: inline-block;
        width: 40px;
        height: 40px;
        background: url(../img/partager_violet.svg) no-repeat;
        top: 4px;
    }

    button.item-show-share-btn:hover,
    a.item-show-share-btn:hover {
        background-image: url(../img/partager_orange.svg);
    }

    button.iiif-copy {
        position: relative;
        display: inline-block;
        width: 48px;
        height: 40px;
        background: url(../img/iiif.png) no-repeat;
        background-size: cover;
        -webkit-filter: grayscale(1);
        filter: grayscale(1);
        top: -2px;
    }

    button.iiif-copy:hover {
        -webkit-filter: grayscale(0);
        filter: none;
    }

    .item-show-content > .property-groups h3,
    .item-show-content > dl h3,
    .item-show-content .item-show-metadata-panel h3 {
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
        font-size: 1.375em;
        color:#384072;
        margin-bottom: 26px;
        text-transform: uppercase;
    }

    .item-show-content dl > .property > dt,
    .item-show-content .item-show-metadata-panel .item-show-metadata-term {
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
        font-size: 1.0625em;
        line-height: 1.65;
        color: #515151;
    }

    .item-show-content dl > .property > dd,
    .item-show-content .item-show-metadata-panel .item-show-metadata-value {
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
        font-size: 1.0625em;
        line-height: 1.65;
        color: #000;
    }

    .item-show-content-relations .item-show-content .item-show-metadata-panel .item-show-metadata-value dd {
        margin-bottom: 15px;
    }

    .item-show-content dl > .property > dd a,
    .item-show-content .item-show-metadata-panel .item-show-metadata-value a {
        text-decoration: none;
        box-shadow: 0 1px 0 0 currentColor;
    }

    .item-show-content dl > .property > dd a:hover,
    .item-show-content .item-show-metadata-panel .item-show-metadata-value a:hover {
        box-shadow: 0 3px 1px -1px #FF7B1A;
    }

    /* --- Transcriptions --- */

    .item-transcriptions .item-show-metadata-value > ul > li {
        display: flex;
        gap: 18px;
    }

    .item-transcriptions .item-show-metadata-value ul li > div:first-child {
        flex: 66px 0 0;
        width: 66px;
        min-height: 66px;
        overflow: hidden;
    }

    .item-show-content dl .property .annotation .property,
    .item-transcriptions .item-show-metadata-value ul li > div:last-child {
        width: 100%;
        padding-top: 15px;
        padding-bottom: 5px;
        border-bottom: 1px solid #D7D2CB;
        margin-bottom: 15px;
    }

    .item-show-content dl .property .annotation .property .property-values,
    .item-transcriptions .item-show-metadata-value ul li > div:last-child ul li {
        margin: 5px 0;
        line-height: 1.3;
  }

    .item-show-content dl .property .annotation .property .property-values,
    .item-show-content dl .property .annotation .property .property-values .value,
    .item-transcriptions .item-show-metadata-value ul li > div:last-child ul li > ul > li,
    .item-transcriptions .item-show-metadata-value ul li > div:last-child ul li > ul {
        display: inline;
        margin: 0;
        padding: 0;
    }

    .item-show-content dl .property .annotation .property .property-values .value:not(:last-child)::after,
    .item-transcriptions .item-show-metadata-value ul li > div:last-child ul li > ul > li:not(:last-child)::after {
        content: ", "
    }

    .item-show-content dl .property .annotation .property {
        padding-top: 0;
    }

    .item-transcriptions .item-show-metadata-value ul li > div:last-child ul li {
        margin: 5px 0;
    }

    .item-transcriptions .item-show-metadata-value ul li > div:first-child > img {
        width: 100%;
        height: 100%;
        object-position: top center;
        object-fit: contain;
    }

    .item-show-content dl .property .annotation .property dt,
    .item-show-content dl .property .annotation .property .property-values {
        display: inline;
        padding-right: 0;
    }

    .item-show-content dl .property .annotation .property dt,
    .item-transcriptions .transcription-type {
        font-weight: 500;
        color: #000;
    }

    .item-show-content dl .property .annotation .property dt::before,
    .item-transcriptions .transcription-type::before {
        content: "|";
        font-weight: 500;
        margin-right: 3px;
    }

    .item-show-content dl .property .annotation .property dt::after,
    .item-transcriptions .transcription-type::after {
        content: ":";
        margin: 0 5px;
    }

    .item-show-content dl > .property > dt,
    .item-show-content .item-show-metadata-panel .item-show-metadata-term {
        padding-right: 20px;
    }

    /* Accueil */


    /* version slider */

    .collections-axis-browse.external-resources > li,
    .collections-axis-browse.external-resources {
        background-color: rgba(56,64,114, 0.04);
        padding-bottom: 80px;
    }

    .collections-axis-browse.external-resources .collections-slider .slick-list::after {
        background-color: transparent;
    }

    .collections-axis-browse.external-resources .collections-axis-contents {
        margin: 0 auto;
        max-width: 1230px;
    }

    .collections-axis-browse.external-resources .collections-slider .slider-card {
        margin: 0 50px 0 0;
    }

    .collections-axis-browse.external-resources .collections-slider > div.slick-slider {
        display: inline-block;
        width: calc(100% - 20px);
        overflow: hidden;
    }

    .collections-axis-browse.external-resources h2 {
        position: relative;
        background-color: #384072;
        padding: 35px 0;
        margin-bottom: 75px;

        text-align: center;
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        font-size: 1.875em;
        line-height: 30px;
        text-transform: uppercase;
        color: #FFFFFF;
    }

    .collections-axis-browse.external-resources h2 span {
        position: relative;
        display: inline-block;
        background-color: #384072;
        padding: 0 35px;
    }

    .collections-axis-browse.external-resources h2::before {
        content: '';
        position: absolute;
        display: block;
        top: 50%;
        left: 0;
        right: 0;
        height: 2px;
        border-bottom: 2px solid #FFFFFF;
        width: 1230px;
        margin: 0 auto;
    }

    .collections-axis-browse.external-resources a.collections-axis-collection-card .external-link > span {
        display: inline-block;
        margin-top: 12px;
        font-family: 'Montserrat', sans-serif;
        font-size: 0.875em;
        line-height: 1.125em;
        font-weight: 600;
        color: #1A1A1A;
        box-shadow: 0 1px 0 0 #1A1A1A;
        text-transform: uppercase;
    }

    .collections-axis-browse.external-resources a.collections-axis-collection-card:hover .external-link > span {
        box-shadow: 0 2px 0 0 #FF7B1A;
    }

    .collections-axis-browse.external-resources a.collections-axis-collection-card .external-link {
        padding-left: 32px;
        background: url(../img/site-externe.svg) bottom 2px left / 21px 21px no-repeat;
    }

    .collections-axis-browse.external-resources a.collections-axis-collection-card:hover .external-link {
        background-image: url(../img/lien_ext_orange.svg);
    }

    .collections-axis-browse.external-resources > .see-all-external-resources {
        display: flex;
        justify-content: center;
        margin-top: 60px;
    }

    .collections-axis-browse.external-resources > .see-all-external-resources > a {
        font-family: 'Montserrat', sans-serif;
        font-size: 0.875em;
        line-height: 1.125em;
        font-weight: 600;
        text-transform: uppercase;
        text-decoration: none;
        color: #384072;
    }

    .collections-axis-browse.external-resources > .see-all-external-resources > a > span {
        box-shadow: 0 1px 0 0 #384072;
    }

    .collections-axis-browse.external-resources > .see-all-external-resources > a:hover > span {
        box-shadow: 0 2px 0 0 #FF7B1A;
    }

    /* version grille */

    .collections-axis-browse.external-resources .collections-axis-contents > ul {
        display: flex;
        flex-wrap: wrap;
        gap: 3.5%;
    }

    .collections-axis-browse.external-resources .collections-axis-contents > ul > li {
        flex: calc(25% - 3.5%) 0 0;
        width: calc(25% - 3.5%);
        margin: 0 0 30px 0;
        padding: 0;
    }

    .collections-axis-browse.external-resources .collections-axis-contents > ul > li:nth-child(n+5) {
        display: none;
    }

    .collections-axis-browse.external-resources .collections-axis-contents > ul.expanded > li:nth-child(n+5) {
        display: block;
    }

    .collections-axis-browse.external-resources .collections-axis-contents > ul > li > a {
        position: relative;
        /* display: block; */
        height: 100%;
        padding-bottom: 40px;
        text-decoration: none;
    }

    /* Slider */

    .search-box form {
        z-index: 10;
    }

    .search-box-slider {
        width: 100%;
        padding-bottom: 35%;
        position: relative;
        overflow: hidden;
    }

    nav.search-box-slider-nav {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 25px;
        background-color: #000000;
        padding: 10px 0;
    }

    nav.search-box-slider-nav button.slick-prev,
    nav.search-box-slider-nav button.slick-next {
        border-radius: 50%;
        height: 30px;
        width: 30px;
        padding: 0;
        text-indent: -9999px;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    nav.search-box-slider-nav button.slick-prev:hover,
    nav.search-box-slider-nav button.slick-next:hover {
        opacity: 0.70;
    }

    nav.search-box-slider-nav button.slick-prev {
        background-image: url(../img/slider-precedent.svg);
        order: 1;
    }

    nav.search-box-slider-nav button.slick-next {
        background-image: url(../img/slider-suivant.svg);
        order: 3;
    }


    nav.search-box-slider-nav ul.slick-dots {
        order: 2;

        display: flex;
        justify-content: center;
        align-items: center;
        gap: 16px;
    }

    nav.search-box-slider-nav ul.slick-dots li {
        display: inline-flex;
    }

    nav.search-box-slider-nav ul.slick-dots li button {
        display: inline-block;
        border-radius: 50%;
        height: 8px;
        width: 8px;
        padding: 0;
        background-color: #979797;
        text-indent: -9999px;
    }

    nav.search-box-slider-nav ul.slick-dots li.slick-active button {
        background-color: #F5F5F5;
        height: 10px;
        width: 10px;
    }

    .search-box-slider-wrapper {
        position: absolute;
        width: 100%;
        height: 100%;
    }

    .search-box-slider-wrapper .slick-list,
    .search-box-slider-wrapper .slick-slider {
        width: 100%;
        height: 100%;
    }

    .search-box-slider-wrapper .slick-track {
        position: relative;
        height: 100%;
    }

    .search-box-slider-wrapper .slick-slide {
        position: relative;
        height: 100%;
    }

    .search-box-slider-wrapper .search-box-image-parent {
        overflow: hidden;
    }

    .search-box-slider-wrapper .slick-slide img {
        position: relative;
    }


    @media screen and (max-width: 1280px) {
        .collections-axis-browse.external-resources .collections-axis-contents {
            padding-left: 40px;
            padding-right: 40px;
        }
        .collections-axis-browse.external-resources h2::before {
            width: calc( 100% - 80px );
        }
    }

    @media screen and (max-width: 1024px) {
        .collections-axis-browse.external-resources .collections-axis-contents > ul > li {
            flex: calc(33.33% - 3.5%) 0 0;
            width: calc(33.33% - 3.5%);
        }

        .collections-axis-browse.external-resources .collections-axis-contents > ul > li:nth-child(n+4) {
            display: none;
        }

        .collections-axis-browse.external-resources .collections-axis-contents > ul.expanded > li:nth-child(n+4) {
            display: block;
        }
    }

    @media screen and (max-width: 780px) {

        .collections-axis-browse.external-resources h2 {
            padding: 28px 0;
            font-size: 1.25em;
            line-height: 1.2;
            margin-bottom: 60px;
        }
        .collections-axis-browse.external-resources h2::before {
            width: calc( 100% - 240px );
        }
        .collections-axis-browse.external-resources .collections-slider .slider-card {
            margin: 0 20px 0 0;
        }

        .collections-axis-browse.external-resources .collections-axis-contents > ul > li {
            flex: calc(50% - 3.5%) 0 0;
            width: calc(50% - 3.5%);
        }

        .collections-axis-browse.external-resources .collections-axis-contents > ul > li:nth-child(n+3) {
            display: none;
        }

        .collections-axis-browse.external-resources .collections-axis-contents > ul.expanded > li:nth-child(n+3) {
            display: block;
        }
    }

    @media screen and (max-width: 640px) {

        .search-box-slider {
            padding-bottom: 90%;
        }

        nav.search-box-slider-nav button.slick-prev, nav.search-box-slider-nav button.slick-next {
            height: 27px;
            width: 27px;
        }

        .collections-axis-browse.external-resources h2 {
            padding: 23px 0;
            font-size: 1.0625em;
            text-align: center;
            margin-bottom: 45px;
        }

        .collections-axis-browse.external-resources h2::before {
            display: none;
        }

        .collections-axis-browse.external-resources > .see-all-external-resources {
            margin-top: 10px;
        }

        .collections-axis-browse.external-resources .collections-axis-contents > ul > li {
            flex: 100%;
            width: 100%;
        }

        .collections-axis-browse.external-resources .collections-axis-contents > ul > li:nth-child(n+2) {
            display: none;
        }

        .collections-axis-browse.external-resources .collections-axis-contents > ul.expanded > li:nth-child(n+2) {
            display: block;
        }


    }


    /* --- En lien --- NEW2022 ------------------------- */

    .item-show-content-relations {
        background-color: #F5F5F5;
    }

    .item-show-content > .item-show-content-relations {
        margin: 0 -10%;
        padding: 0 10%;
    }

    .item-show-content-relations .wrap {
        margin: 0;
    }

    .item-show-content-relations .item-show-content .property-group {
        padding-top: 0;
    }

    .item-show-content-relations .item-show-content {
        padding: 42px 0;
    }

    .item-show-content > .property-groups h3,
    .item-show-content > dl h3,
    .item-show-content-relations .item-show-metadata-panel h3 {
        margin-bottom: 15px;
    }

    .item-show-metadata-panel.metadata-linked .item-show-content-relation-value {
        margin-bottom: 20px;
        font-family: "Roboto", sans-serif;
        font-size: 1.0625em;
        color: #000000;
        text-transform: uppercase;
    }

    .item-show-metadata-panel.metadata-linked .item-show-content-relation-value::after,
    .item-show-metadata-panel.metadata-linked .item-show-content-relation-value::before {
        content: '“';
    }

    .item-show-metadata-panel.metadata-linked .item-show-content-relation-value::before {
        margin-right: 5px;
    }

    .item-show-metadata-panel.metadata-linked .item-show-content-relation-value::after {
        margin-left: 5px;
    }

    .item-show-metadata-panel.metadata-general .item-show-metadata-value.values > ul >  li.value.resource.items:first-child {
        margin-top: 18px;
    }

    .item-show-content dl > .property > dd li.value.resource.items,
    .item-show-metadata-panel .item-show-metadata-value li.value.resource.items {
        margin-bottom: 18px;
    }

    .item-show-content-relations .item-show-content .item-show-metadata-panel .item-show-metadata-value dd:nth-child(n+10),
    .item-show-content dl > .property > dd li.value.resource.items:nth-child(n+10),
    .item-show-metadata-panel .item-show-metadata-value li.value.resource.items:nth-child(n+10) {
        display: none;
    }

    .item-show-metadata-panel.relations-toggle-opened .item-show-metadata-value li {
        display: list-item !important;
    }

    .item-show-content-relations .item-show-content .item-show-metadata-panel.relations-toggle-opened .item-show-metadata-value dd {
        display: block !important;
    }

    .item-show-metadata-value li a.item-show-metadata-value-with-thumbnail,
    .item-show-content dl > .property > dd li.value.resource.items a,
    .item-show-metadata-panel .item-show-metadata-value li.value.resource.items a {
        display: flex;
        align-items: center;
        box-shadow: none !important;
    }

    a.item-show-metadata-value-with-thumbnail:hover,
    .item-show-content dl > .property > dd a:hover,
    .item-show-metadata-panel .item-show-metadata-value a:hover {
        text-decoration: none;
    }

    a.item-show-metadata-value-with-thumbnail .item-relation-square-thumbnail,
    .item-show-metadata-panel .item-show-metadata-value a .item-relation-square-thumbnail {
        flex: 60px 0 0;
    }

    a.item-show-metadata-value-with-thumbnail span.item-relation-label,
    .item-show-metadata-panel .item-show-metadata-value a span.item-relation-label {
        color: #000000;
        box-shadow: 0 2px 1px -1px #000000;
        display: inline;
    }

    a.item-show-metadata-value-with-thumbnail:hover span.item-relation-label,
    .item-show-metadata-panel .item-show-metadata-value a:hover .item-relation-label {
        box-shadow: 0 3px 1px -1px #FF7B1A;
    }

    .item-relation-square-thumbnail {
        display: block;
        position: relative;
        overflow: hidden;
        width: 60px;
        height: 60px;
        background: #CACACA url(../thumbnails/default.png) center / cover;
        /* margin-right: 15px; */
    }

    .item-relation-square-thumbnail img {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }

    .item-show-metadata-panel a.see-all {
        font-family: "Montserrat", sans-serif;
        font-weight: 500;
        font-size: 14px;
        letter-spacing: 0;
        line-height: 18px;
        color: #384072;
        text-transform: uppercase;

        position: relative;
        left: 50%;
        transform: translateX(-50%);
        display: inline-block;
        margin-top: 50px;
    }

    .item-show-metadata-panel a.see-all {
        box-shadow: 0 1px 0 0 #384072;
    }

    .item-show-metadata-panel a.see-all:hover {
        box-shadow: 0 2px 0 0 #FF7B1A;
    }

    .item-show-metadata-panel a.see-all span.see-all-opened,
    .item-show-metadata-panel.relations-toggle-opened a.see-all span.see-all-closed {
        display: none;
    }

    .item-show-metadata-panel.relations-toggle-opened a.see-all span.see-all-opened,
    .item-show-metadata-panel a.see-all span.see-all-closed {
        display: inline-block;
    }



    /* --- Search results -- screen ------------------------- */

    .page-header {
        background-color: #384072;
    }

    .page-header.theme-page-header {
        background-color: #fff;
    }

    .page-header-bg {
        position: relative;
        overflow: hidden;
        width: 100%;
        padding-bottom: 35%;
        max-height: 500px;
    }

    .page-header-bg .page-header-image {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center top;
    }

    .page-title-parent {
        padding: 20px 0 52px;
        text-align: center;
    }

    .page-header:not(.theme-page-header) .breadcrumbs-parent {
        padding-top: 10px;
    }

    .page-header h1 {
        position: relative;
        display: block;
        text-transform: uppercase;
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
        font-size:2.1875em;
        line-height: 42px;
        color: #fff;
    }

    .page-header h1::before {
        content: '';
        position: absolute;
        top:50%;
        left: 0;
        width: 100%;
        height: 1px;
        border-bottom:1px solid #ff7b1a;
    }

    .page-header h1 span {
        position: relative;
        display: inline-block;
        padding: 0 20px;
        background-color: #384072;
    }

    .search-results .page-header + .resource-list-wrapper {
        padding-top: 60px;
    }

    /* Corrections pour module AdvancedSearch */
    .search-results .resource-list.grid > * {
        margin: 0;
    }

    .search-results .resource-list-controls {
        padding-top: 10px;
        padding-bottom: 15px;
        border-bottom: 1px solid #c3c6d5;
    }

    .search-results .resource-list-and-filters .resource-list-content {
        padding-left: 20px;
        display: block;
    }

    .search-results .resource-list-per-page-settings {
        display: flex;
        padding-left: 10px;
    }

    .search-results .export-options {
        text-align: left;
    }

    /* -- screen --- */

    .advanced-search-form-parent {
        margin-top: 58px;
        margin-bottom: 50px;
    }

    .advanced-search-form-parent form ul.advanced-search-selected-filters,
    ul.resource-list-selected-filters {
        margin: 0 0 27px 0;
    }

    .advanced-search-form-parent form .advanced-form-fields {
        padding: 0 5%;
    }

    .advanced-search-form-parent form .advanced-form-fields .advanced-form-field {
        display: flex;
        margin-bottom: 20px;
    }

    .advanced-search-form-parent form .advanced-form-fields .advanced-form-field:first-child {
        margin-bottom: 30px;
    }

    .advanced-search-form-parent form .advanced-form-fields .advanced-form-field:last-child {
        margin-bottom: 50px;
    }

    .advanced-search-form-parent form .advanced-form-fields .advanced-form-field label {
        flex: 230px 0 0;
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
        font-size: 1.0625em;
        color:#000;
    }

    .advanced-search-form-parent form .advanced-form-fields .advanced-form-field .advanced-search-selected-filters {
        padding-left: 30px;
    }

    .advanced-form-field .advanced-form-input {
        flex: 40% 0 0;
    }

    .advanced-search-form-parent form .advanced-form-fields .advanced-form-field .select-parent,
    .advanced-search-form-parent form .advanced-form-fields .advanced-form-field .advanced-form-input input[type="search"],
    .advanced-search-form-parent form .advanced-form-fields .advanced-form-field .advanced-form-input input[type="text"] {
        width: calc( 100% - 50px );
        display: inline-block;
    }

    .advanced-search-form-parent form .advanced-form-fields .advanced-form-field .advanced-form-input input[type="search"],
    .advanced-search-form-parent form .advanced-form-fields .advanced-form-field .advanced-form-input input[type="text"] {
        height: auto;
        background-color: #efefef;
        border-bottom: #384072 1px solid;
        color:#384072;
        padding: 0 10px;

        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1.0625em;
        line-height: 2.1em;
        outline: none;
    }

    .advanced-search-form-parent form .advanced-form-fields .advanced-form-field .advanced-form-input input[type="search"]:focus,
    .advanced-search-form-parent form .advanced-form-fields .advanced-form-field .advanced-form-input input[type="text"]:focus {
        border-bottom-color: rgba(255, 123, 26, 1.0);
    }

    /* Gestion spécifique des champs texte multiples. */
    .advanced-search-form-parent form .advanced-form-fields .advanced-form-field .advanced-form-input input[data-field-type="multitext"] + input[data-field-type="multitext"] {
        display: none;
    }

    .advanced-search-form-parent form .advanced-form-fields .advanced-form-field .select-parent {
        border: 1px solid #384072;
    }

    .advanced-search-form-parent form .advanced-form-fields .advanced-form-field .select-parent.with-focus {
        border: 1px solid rgba(255, 123, 26, 1.0);
    }

    .advanced-search-form-parent form .advanced-form-fields .advanced-form-field select {
        padding: 7px 10px;
        height: auto;

        font-family: 'Roboto', sans-serif;
        font-weight: 300;
        font-size: 1.0625em;
        line-height: 2.1em;
        color:#000;
    }

    .advanced-form-field .advanced-form-input a.advanced-form-add-btn {
        display: inline-block;
        width:39px;
        height: 37px;
        background: url(../img/plus_violet.svg) center / 36px auto no-repeat;
        margin-left: 5px;
    }


    .advanced-form-field .advanced-form-input a.advanced-form-add-btn:focus,
    .advanced-form-field .advanced-form-input a.advanced-form-add-btn:hover {
        background-image: url(../img/plus_orange.svg);
    }

    .advanced-form-buttons {
        border-top: #384072 1px solid;
        padding: 50px 0 10px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 50px;
    }

    .advanced-search-form-parent .advanced-form-buttons a {
        padding-left: 28px;
        background: url(../img/reset_off.svg) center left / 19px auto no-repeat;
        font-size: 14px;
        text-decoration: none;
    }

    .advanced-search-form-parent .advanced-form-buttons a:hover {
        background-image: url(../img/reset_on.svg);
        color: #FF7B1A;
    }

    .advanced-search-form-parent .advanced-form-buttons a:hover {
        text-decoration: underline;
    }

    .advanced-search-form-parent .advanced-form-buttons input[type="submit"],
    .advanced-search-form-parent .advanced-form-buttons button[type="submit"] {
        background-color: #384072;
        color:#fff;
        font-size: 16px;
        padding: 5px 40px;
    }

    .advanced-search-form-parent .advanced-form-buttons input[type="submit"]:hover,
    .advanced-search-form-parent .advanced-form-buttons button[type="submit"]:hover {
        opacity: 0.7;
    }

    /* -- screen ---- */

    .page-intro {
        padding:45px 0;
        background-color: #F5F5F5;
    }

    .page-intro .page-intro-content {
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
        color:#333333;
        text-align: center;
    }

    .page-intro .page-intro-content ul,
    .page-intro .page-intro-content p {
        font-size: 1.0625em;
        line-height: 1.6;
    }

    .page-intro .page-intro-content h2 {
        font-size: 1em !important;
        margin-bottom: 5px;
    }

    .page-type-block-content {
        padding: 50px 0;
    }

    .page-type-block-asset .page-type-block-content {
        margin-top: -100px;
    }

    .page-type-block + .page-type-block,
    .page-type-block-asset + .page-type-block {
        border-top: solid 1px rgba(56,64,114,0.25); /*#384072*/
    }

    .page-intro-content ul,
    .page-type-block ul {
        font-family: 'Roboto', sans-serif;
        font-size: 1.0625em;
        font-weight: 300;
    }

    .item-show-metadata-value ul li.value {
        margin-bottom: 5px;
    }

    .page-intro-content ul,
    .page-type-block ul,
    .item-show-metadata-value ul li.value ul {
        list-style-type: disc;
        list-style-position: inside;
        margin: 10px 0;
    }

    .item-show-metadata-value strong,
    .page-intro-content strong,
    .page-type-block strong {
        font-weight: 500;
    }

    .item-show-metadata-value em,
    .page-intro-content em,
    .page-intro-content i,
    .page-type-block em,
    .page-type-block i {
        font-style: italic;
    }

    .page-type-block-content h2 {
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
        font-size:1.375em;
        line-height: 1.2;
        color: #384072;
        margin-bottom: 25px;
    }

    .page-type-block-content h3 {
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
        font-size: 1.0625em;
        line-height: 1.5em;
        color: #000000;
        margin-bottom: 10px;
    }

    .page-type-block-content ul,
    .page-type-block-content p {
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
        font-size: 1.0625em;
        line-height: 1.6em;
        color: #000000;
    }

    .page-type-block-content .page-type-image {
        display: flex;
        justify-content: flex-start;
        gap: 25px;
        align-items: flex-end;
        padding-top: 30px;
    }

    .page-type-block-content .page-type-image > a {
        display: inherit;
    }

    .page-type-block-content .page-type-image img {
        border: solid 1px #B2B2B2;
    }

    .page-type-block-content .page-type-image .page-type-image-description {
        flex:50% 0 0;
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
        font-size: 0.875em;
        line-height: 1.72em;
        color: #000000;
    }

    body.with-popup-image {
        height: 100vh;
        overflow: hidden;
    }

    .popup-image {
        position: fixed;
        top:0;
        left:0;
        z-index: 1201;
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100vh;
        background-color: rgba(0,0,0,0.92);
    }

    .popup-image .popup-image-close-btn {
        align-self: flex-end;
        display: inline-block;
        width: 30px;
        height: 30px;
        padding: 20px;
        background: url(../img/x-fermer_popup.svg) center / 30px no-repeat;
    }

    .popup-image .popup-image-parent {
        display: flex;
        height: 100%;
        justify-content: center;
        align-items: center;
    }

    .popup-image .popup-image-parent img {
        display: inline-block;
        max-width: 100%;
        max-height: calc( 100% - 50px );
        overflow: hidden;
        margin: 50px;
    }


    /* -- screen ---- */

    .glossary-alphabet {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding: 32px 0;
    }

    .glossary-alphabet > li {
        padding-top: 10px;
    }

    .glossary-alphabet > li > span,
    .glossary-alphabet > li > a {
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        font-size: 2.1875em;
        color: #384072;
        margin-right: 20px;
        text-decoration: none;
    }

    .glossary-alphabet > li:last-child > span,
    .glossary-alphabet > li:last-child > a {
        margin-right: 0;
    }

    .glossary-alphabet > li > a:hover,
    .glossary-alphabet > li > a.current,
    .glossary-alphabet > li > a.active {
        box-shadow: 0 3px 0 0 #FF7B1A;
    }

    .glossary-alphabet > li > span.inactive,
    .glossary-alphabet > li > a.inactive {
        color: #B2B2B2;
        pointer-events: none;
    }

    .glossary-tools {
        padding: 10px 0 2px;
        border-bottom: 1px solid #384072;
        text-align: right;
    }

    .glossary-items {
        column-count: 2;
        column-gap: 56px;
        padding-bottom: 25px;
    }

    .glossary-results .resource-list-pagination {
        margin: 32px 0 70px;
    }

    .glossary-items > dt,
    .glossary-items > dd,
    .glossary-items > div,
    .glossary-items > div > dt,
    .glossary-items > div > dd,
    .glossary-items > li,
    .glossary-items > li > div {
        break-inside: avoid;
    }

    .glossary-items > .glossary-term,
    .glossary-items > div > .glossary-term,
    .glossary-items > li > .glossary-term {
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
        font-size: 1.375em;
        line-height: 1.2;
        margin-bottom: 5px;
    }

    .glossary-items > .glossary-definition,
    .glossary-items > div > .glossary-definition,
    .glossary-items > li > .glossary-definition {
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
        font-size: 1.0625em;
        line-height: 1.2;
        margin-bottom: 45px;
    }

    .glossary-items strong {
        font-weight: bolder;
    }
    .glossary-items em {
        font-style: italic;
    }

    /* --- screen -- */

    .theme-header {
        position: relative;
    }

    .theme-header-image + .theme-header-content-and-menu {
        width: 100%;
        position: absolute;
        top: 0;
    }

    .theme-header-content {
        position: relative;
    }

    .theme-header-content .theme-header-menu-btn {
        display: none;
        position: absolute;
        left:20px;
        bottom: 8px;
        padding-right: 28px;
        background: url(../img/menu_blanc.svg) center right no-repeat ;

        font-family: 'Roboto', sans-serif;
        font-weight: 500;
        font-size: 0.875em;
        color: #FFF;
        text-transform: uppercase;
        text-decoration: none;
    }

    .theme-header-menu {
        overflow: hidden;
        position: absolute;
        width: 100%;
        padding-bottom: 11px;
        z-index: 2000;  /* > Mirador */
        left: 0;
        bottom: 0; /* JS */
    }

    .theme-header-links {
        background: rgba(54,59,98,0.95);
        padding:0 5% 7px;
        position: relative;
        z-index: 4;
    }

    .theme-header-links h1 a,
    .theme-header-links h1 a:visited,
    .theme-header-links h1 a:active,
    .theme-header-links h1 a:hover {
        color: #fff;
        text-decoration: none;
    }

    .theme-header-search-menu {
        position: absolute;
        overflow: hidden;
        width: 100%;
        height: 0;
        z-index: 2100;
    }

    .theme-header-search-menu,
    .theme-header-menu {
        pointer-events: none;
    }

    .theme-header-search-menu.opened,
    .theme-header-menu.opened {
        pointer-events: auto;
    }

    .theme-header-menu > .theme-header-menu-content {
        min-height: 100px;
        padding:18px 5%;
        background: #4A5383;
        transform: translateY(-100%);
        transition: transform ease-in-out 0.5s;
    }

    .theme-header-menu.opened > .theme-header-menu-content {
        transform: translateY(0px);
    }

    .theme-header-menu > .theme-header-menu-content ul.is-flex {
        justify-content:flex-start;
        flex-wrap: wrap;
        gap: 6px;
    }

    .theme-header-menu > .theme-header-menu-content ul.is-flex > li {
        flex: calc( 25% - 20px ) 0 0;
        line-height: 1em;
        margin-bottom: 0.85em;
    }

    .theme-header-menu-content > ul.theme-header-menu-items > li > a {
        display: none;
    }

    .theme-header-menu > .theme-header-menu-content > ul.theme-header-menu-items > li > ul.is-flex > li > a {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 0.8125em;
        line-height: 1.1em;
        color: #FFF;
        text-transform: uppercase;
        text-decoration: none;
    }

    .theme-header-menu > .theme-header-menu-content > ul.theme-header-menu-items > li > ul.is-flex > li > a:hover {
        box-shadow: 0 1px 0 0 currentColor;
    }

    .theme-header-content h1 {
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        font-size: 1.75em;
        line-height: 1.2;
        color: #fff;
        text-transform: uppercase;
        text-align: center;
        padding: 16px 0 14px;
    }

    .theme-header-content h1 span.long-title {
        color: #FFF;
        display: inline;
        text-decoration: none;
    }
    .theme-header-content h1 > a {
        text-decoration: none;
    }

    .theme-header-content h1 > a > span.long-title {
        color: #FFF;
    }

    .theme-header-content h1 span.short-title {
        display: none;
    }

    .theme-header .theme-header-image {
        position: relative;
        width: 100%;
        padding-bottom: 35%;
        overflow: hidden;
        min-height: 100px;
    }

    .theme-header .theme-header-image img {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center top;
    }

    .theme-header .site_nav_theme {
        justify-content: space-between;
    }

    .theme-resource-list-and-filters .resource-list-controls:last-child .resource-list-sort-and-list-mode {
        visibility: hidden;
        pointer-events: none;
    }

    /* Add a div for centering elements via flex's justify space-between*/
    .themeHeader .inner::after,
    .theme-header .site_nav_theme::before {
        content: '';
        display: inline-block;
        width: 90px;
    }

    .theme-header .header_lang #lang_tooltip {
        bottom: -71px;
    }

    .theme-header .site_nav_theme > ul {
        gap:20px;
    }

    .theme-header .site_nav_theme > ul > li > a {
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        font-size: 0.75em;
        line-height: 1.2;
        color: #fff;

        text-transform: uppercase;
        text-decoration: none;
        display: inline-block;
        padding: 0 2px;

        box-shadow: 0 1px 0 0 currentColor;
    }

    .theme-header .site_nav_theme > ul > li > a.active,
    .theme-header .site_nav_theme > ul > li > a.current {
        box-shadow: 0 1px 0 0 #FF7B1A;
    }

    .theme-contents-title h2 {
        margin: 30px 0 52px;
    }

    .theme-browse-contents .theme-contents-title h2 {
        margin-top: 15px;
    }

    .theme-resource-list-and-filters .resource-list-display-mode {
        margin-left: 20px;
    }

    .theme-resource-list-and-filters .resource-list-controls {
        padding-top: 8px;
    }

    .theme-resource-list-content {
        padding: 0 6%;
    }

    .theme-resource-list-and-filters .resource-list-controls:last-child {
        border: none;
    }

    .theme-resource-list-content.grid ul.resource-list > li {
        flex: 25% 0 0;
        margin-bottom: 35px;
    }

    .theme-resource-list-content.grid ul.resource-list > li:nth-child(3n+1),
    .theme-resource-list-content.grid ul.resource-list > li:nth-child(3n+2),
    .theme-resource-list-content.grid ul.resource-list > li:nth-child(3n) {
        padding: 0;
    }

    .theme-resource-list-content.grid ul.resource-list > li:nth-child(4n+1) {
        padding-right: 15px;
    }

    .theme-resource-list-content.grid ul.resource-list > li:nth-child(4n+2) {
        padding: 0 12px 0 10px;
    }

    .theme-resource-list-content.grid ul.resource-list > li:nth-child(4n+3) {
        padding: 0 10px 0 12px;
    }

    .theme-resource-list-content.grid ul.resource-list > li:nth-child(4n) {
        padding-left: 15px;
    }

    .theme-contents .more-contents-link {
        text-align: center;
        padding-bottom: 52px;
    }

    .theme-contents .more-contents-link a {
        display: inline-block;
        margin-top: 12px;
        font-family: 'Montserrat', sans-serif;
        font-size: 0.875em;
        line-height: 1.125em;
        font-weight: 600;
        color: #384072;

        text-transform: uppercase;
        text-decoration: none;
        box-shadow: 0 1px 0 0 #1A1A1A;
    }

    .theme-contents .more-contents-link a:hover {
        box-shadow: 0 2px 0 0 #FF7B1A;
    }

   /* Share */

    .item-show-btns {
        position: relative;
    }

    .item-show-share-btn {
        position: relative;
    }

    .share-tooltip {
        display: none;
    }

    .share-tooltip::before {
        content: "";
        display: block;
        width: 15px;
        height: 15px;
        background-color: #efeded;
        transform-origin: center;
        transform: rotate(45deg);
        position: absolute;
        left: 22px;
        top: -6px;
    }

    .share-tooltip.opened {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 50px;
        width: auto;
        padding: 10px 13px 10px 12px;
        background-color: #efeded;
        box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2);

        position: absolute;
        top:50px;
        left:-20px;
    }

    .share-tooltip li {
        width: 30px;
        height: 40px;
    }

    .share-item {
        display: inline-block;
        width: 100%;
        height: 100%;
    }

    .share-item.icon-facebook {
        background: url(../img/facebook.svg) center center / 12px 23px no-repeat;
    }

    .share-item.icon-twitter {
        background: url(../img/twitter.svg) center center / 28px 23px no-repeat;
    }

    .share-item.icon-mail {
        background: url(../img/mail.svg) center center / 24px 17px no-repeat;
    }
}

/* navigation Louvre */

@media screen and (min-width: 769px) {

    .wrap {
        width: 90%;
    }
}

@media screen and (min-width: 1160px) {
    .wrap {
        width: 90%;
    }
}

@media screen and (min-width: 1366px) {
    .wrap {
        width: 85%;
    }

    .item-show-content > .item-show-content-relations {
        margin: 0 -15%;
        padding: 0 15%;
    }
}

@media screen and (min-width: 1530px) {
    .wrap {
        width: 1400px;
    }

    .item-show-content > .item-show-content-relations {
        margin: 0 calc( 700px - 100% );
        padding: 0 calc( 100% - 700px );
    }
}




@media screen and (min-width: 1440px) {

    .page-header-bg {
        position: relative;
        overflow: hidden;
        width: 100%;
        padding-bottom: unset;
        height: 500px;
    }

}

@media screen and (max-width: 1340px) {

    .content-with-padding {
        padding-left: 15px;
        padding-right: 15px;
    }


    .itemset-header .itemset-header-content {
        margin-right: 0;
    }

    .resource-list-and-filters aside .resource-list-filters-and-toggle {
        position: relative;
    }

    .resource-list-and-filters aside .resource-list-filters-and-toggle::after {
        position: absolute;
        right:0;
        top:0;

        width: 1px;
        height: 100%;
        background-color: #f5f5f5;
        content: '';
        box-shadow: 2px 0px 4px 0px rgba(0,0,0,0);
    }

    .resource-list-and-filters aside.opened .resource-list-filters-and-toggle::after {
        box-shadow: 2px 0px 4px 0px rgba(0,0,0,0.5);
    }
}

@media screen and (max-width: 1280px) {

    ul.collections-axis-browse > li {
        padding-left: 40px;
        padding-right: 40px;
    }

    .search-box form {
        width: 80%;
    }

    body.media.resource.show main > *:not(.theme-header),
    .collections-site > div.collections-site-content,
    .collections-axis-browse > li > div {
        max-width: 100%;
    }

    body.media.resource.show main > *:not(.theme-header) {
        padding-left: 20px;
        padding-right: 20px;
    }

    .collections-site > div.collections-site-content {
        padding-left: 50%;
    }

    .collections-suggestions-content {
        padding: 80px 0;
    }

    .resource-list-display-mode {
        margin-left: 20px;
    }

    .select-parent select {
        font-size: 0.9375em;
        padding: 11px 10px;
    }

    .itemset-resource-list .resource-list-and-filters .resource-list-content {
        padding: 0 0 0 20px;
    }
}

@media screen and (max-width: 1240px) {
}

@media screen and (max-width: 1200px) {

    #user-bar.fixed {
        position: fixed;
        width: 100%;
    }

    .siteFooter .footer_nav.row:nth-child(1) {
        padding: 5px 80px 20px 82px;
    }

    .siteFooter img {
        margin: 65px auto 24px;
    }

    .search-box-image-parent {
        padding-bottom: 38%;
    }

    .corpus-description {
        padding: 35px 0;
    }

    .page-intro .page-intro-content,
    .page-type-block .page-type-block-content,
    .corpus-description .corpus-description-content {
        width: 84%;
    }

    ul.collections-axis-browse > li {
        padding-top: 50px;
        padding-bottom: 50px;
    }

    .collections-axis-browse > li .collections-axis-contents .collections-axis-description {
        margin-right: 35px;
        margin-left: 25px;
    }

    .collections-slider .collections-slider-previous-collection,
    .collections-slider .collections-slider-next-collection {
        flex: 40px 0 0;
        width: 40px;
    }

    .collections-slider .collections-slider-previous-collection {
        background-position: top 110px right 15px;
    }

    .collections-slider .collections-slider-next-collection {
        transform: translateX(-5px);
    }

    .theme-contents-title h2 span,
    .collections-axis-browse > li h2 span {
        padding: 0 20px;
    }

    .collections-axis-browse > li .collections-axis-contents .collections-axis-description {
        width:30%;
    }

    .collections-slider > div.slick-slider {
        width: calc(100% + 50px);
        margin-left: 10px;
    }

    .collections-slider .slick-slider:not(.slick-initialized) .slider-card {
        width: calc(33% - 20px);
    }

    .collections-site > div.collections-site-content {
        max-width: 1000px;
        padding: 56px 40px 42px 50%;
    }

    /* -- 1200 --*/

    .itemset-header nav.breadcrumbs,
    .itemset-header .itemset-header-content {
        margin-left: 40px;
        width: 66%;
    }

    .itemset-more-description-content {
        margin: 0 auto;
        padding-left: 0;
        padding-right: 0;
    }

    .resource-list-and-filters {
        display: block;
        position: relative;
        width: 100%;
        margin: 0;
        padding: 20px;
    }

    .resource-list-and-filters aside {
        position: absolute;
        left:0;
        top:0;
        z-index: 2;
        transform: translateX(-100%);
        transition: transform ease-in-out 0.25s;
    }

    .resource-list-and-filters aside.opened {
        transform: translateX(0%);
    }

    .resource-list-pagination {
        margin: 26px 0;
    }

    .resource-list-content ul.resource-list.grid > li {
        margin-bottom: 45px;
    }

    .mobile-filters-and-menu-toggle,
    .resource-list-and-filters > .mobile-filters-and-menu-toggle,
    .itemset-resource-list .resource-list-and-filters .resource-list-content,
    .resource-list-and-filters .resource-list-content {
        padding: 0;
    }

    .mobile-filters-title-and-close-btn {
        display: flex;
        justify-content: space-between;
        padding: 10px 0 20px;
        text-transform: uppercase;
    }

    .mobile-filters-title-and-close-btn > a {
        display: inline-block;
        width: 20px;
        height: 20px;
        background: url(../img/fermer_bleu_off.svg) center / 14px no-repeat;
    }

    .theme-resource-list-header > .mobile-filters-and-menu-toggle .resource-list-toggle-filters-menu,
    .resource-list-and-filters > .mobile-filters-and-menu-toggle,
    .resource-list-controls > .mobile-filters-and-menu-toggle,
    .mobile-filters-and-menu-toggle,
    .mobile-filters-and-menu-toggle > a,
    .mobile-filters-and-menu-toggle > ul,
    .mobile-filters-and-menu-toggle > ul > li {
        display: inline-block;
    }

    .mobile-filters-and-menu-toggle > a.resource-list-toggle-filters-menu::after {
        content: "";
        display: inline-block;
        width: 20px;
        height: 16px;
        background: url(../img/chevronviolet_suivant.svg) bottom center / 15px 14px no-repeat;
        margin-right: 20px;
        transform: translateY(1.5px);
    }

    .mobile-filters-title-and-close-btn > div,
    .mobile-filters-and-menu-toggle > a {
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
        font-size: 1.0625em;
        color:#384072;
        text-transform: uppercase;
        text-decoration: none;
        margin-right: 45px;
    }

    .mobile-filters-and-menu-toggle ul.resource-list-selected-filters {
        margin-bottom: 15px;
    }

    .mobile-filters-and-menu-toggle #user-bar {
        padding: 0 10px;
    }

    .collections-suggestions-content {
        display: block;
        padding: 53px 0;
    }

    .collections-suggestions .collections-suggestions-title {
        text-align: center;
        padding-bottom: 42px;
    }

    /* -- 1080 ------- */

    .item-show-content > div,
    .item-show-content > .property-groups,
    .item-show-content > dl,
    .item-show-content > div.item-show-metadata-panel {
        padding-left: 15px;
        padding-right: 15px;
    }

    .item-show-content > .item-show-content-relations {
        margin: 0 -20px;
        padding-left: 0;
        padding-right: 0;
    }

    .item-show-content .property-group,
    .item-show-content > dl,
    .item-show-content > div.item-show-metadata-panel {
        padding-top: 26px;
        padding-bottom: 28px;
    }

    .item-show-content dl .property dt,
    .item-show-content .item-show-metadata .item-show-metadata-term {
        flex: 30% 0 0;
    }

    .item-header-content .item-infos {
        padding: 0 30px 60px 20px;
    }

    /* -- 1080 ------- */

    .item-show .wrap,
    .item-show-header .wrap,
    .search-results .resource-list-header.wrap,
    .page-title-parent.wrap,
    .theme-contents.wrap,
    .theme-breadcrumbs.breadcrumbs-parent.wrap,
    .page-header .breadcrumbs-parent.wrap {
        width: 100%;
        padding-left:20px;
        padding-right:20px;
    }

    .item-card-metadata-and-tags {
        flex: calc(100% - 160px) 0 0;
    }

    .search-results .page-header + .resource-list-wrapper {
        padding-top: 30px;
    }

    .search-results .resource-list-per-page-settings {
        display: none;
    }

    .search-results .resource-list-controls {
        padding: 10px 0 15px;
    }

    .search-results .resource-list-controls .resource-list-sort-and-list-mode {
        justify-content: space-between;
        align-items: center;
    }

    .search-results .resource-list-and-filters .resource-list-content {
        padding-left: 0;
    }

    .search-results .resource-list-and-filters .resource-list-content ul.resource-list {
        padding-left: 0;
    }

    .advanced-search-form-parent form .advanced-form-fields {
        padding: 0 50px;
    }

    .collections-suggestions h4 {
        width: 100%;
    }

    /* -- 1080 ------- */

    .theme-contents-title h2 {
        margin: 30px 0 32px;
    }

    .theme-header .theme-header-image {
        padding-bottom: 50%;
    }

    .theme-header-content h1 {
        font-size: 1.25em;
    }

    .page-intro .page-intro-content ul,
    .page-intro .page-intro-content p {
        /* font-size: 0.875em;*/
    }

    .theme-header-content .theme-header-menu-btn {
        display: block;
        z-index: 5;
    }

    .theme-header .site_nav_theme {
        justify-content: flex-end;
    }

    .theme-header .site_nav_theme > ul {
        display: none;
    }

    .theme-header-menu > .theme-header-menu-content {
        padding: 18px 20px 25px;
    }

    .theme-header-menu > .theme-header-menu-content ul.is-flex {
        display: block;
    }

    .theme-header-menu-content > ul.theme-header-menu-items.wrap {
        width: 100%;
    }

    .theme-header-menu-content > ul.theme-header-menu-items > li {
        display: block !important;
    }

    .theme-header-menu-content > ul.theme-header-menu-items > li > a {
        display: inline-block;
        line-height: 1.4;
        width: auto;
        margin: 10px 0;

        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        font-size: 0.75em;
        color: #fff;
        text-decoration: none;
        text-transform: uppercase;
    }

    .theme-header-menu-content > ul.theme-header-menu-items > li > a {
        display: inline-block;
    }

    .theme-header-menu > .theme-header-menu-content ul.theme-header-menu-items > li > a > span {
        box-shadow: 0 1px 0 0 currentColor;
    }

    .theme-header-menu > .theme-header-menu-content ul.theme-header-menu-items > li > a.active > span {
        box-shadow: 0 1px 0 0 #FF7B1A;
    }

    .theme-header-menu > .theme-header-menu-content ul.theme-header-menu-items > li.theme-menu > a.theme-menu-btn {
        position: relative;
        padding-right: 30px;
        text-decoration: none;
    }

    .theme-header-menu > .theme-header-menu-content ul.theme-header-menu-items > li.theme-menu > a.theme-menu-btn::after {
        content: '';
        position: absolute;
        right: 0;
        bottom: 2px;
        display: inline-block;
        background: url(../img/chevronblanc_bas.svg) bottom center / 15px auto no-repeat;
        width: 20px;
        height: 16px;
        overflow: hidden;
        transform-origin: 50% 75%;
        transition: transform ease-in-out 0.1s;
    }

    .theme-header-menu > .theme-header-menu-content ul.theme-header-menu-items > li.theme-menu.opened > a.theme-menu-btn::after {
        transform: rotate(180deg);
    }

    .theme-header-menu > .theme-header-menu-content > ul.theme-header-menu-items > li.theme-menu > ul.is-flex {
        margin: 15px;
        display: none;
    }

    .theme-header-menu > .theme-header-menu-content > ul.theme-header-menu-items > li.theme-menu.opened > ul.is-flex {
        display: block;
    }

    .theme-header-menu > .theme-header-menu-content > ul.theme-header-menu-items > li.theme-menu > ul.is-flex > li > a {
        font-size: 0.75em;
    }

    .theme-header .site_nav_theme::before {
        display: none;
    }

    .theme-contents.wrap {
    }

    .theme-resource-list-content {
        padding: 0;
    }

    .theme-resource-list-header + .resource-list-controls {
        margin-bottom: 50px;
    }

    .theme-resource-list-content.grid ul.resource-list > li {
        flex: 33.33% 0 0;
    }

    .theme-resource-list-content.grid ul.resource-list > li:nth-child(4n+1),
    .theme-resource-list-content.grid ul.resource-list > li:nth-child(4n+2),
    .theme-resource-list-content.grid ul.resource-list > li:nth-child(4n+3),
    .theme-resource-list-content.grid ul.resource-list > li:nth-child(4n) {
        padding: 0;
    }

    .theme-resource-list-content.grid ul.resource-list > li:nth-child(3n+1) {
        padding-right: 12px;
    }

    .theme-resource-list-content.grid ul.resource-list > li:nth-child(3n+2) {
        padding: 0 6px;
    }

    .theme-resource-list-content.grid ul.resource-list > li:nth-child(3n) {
        padding-left: 12px;
    }

}

@media screen and (max-width: 1024px) {

    .collections-slider .slick-slider:not(.slick-initialized) .slider-card {
        width: calc(50% - 20px);
    }

}

@media screen and (max-width: 780px) {

    .wrap {
        width: 90%;
    }

    .siteHeader,
    .siteHeader::before {
        min-height: 66px;
    }

    .siteHeader .wrap {
        width: 100%;
        min-height: 66px;
    }

    .siteHeader > div.is-flex {
        align-items: center;
        height: 66px;
    }

    .site_name {
        width: 55px;
        padding: 10px 0;

        margin-left: 5%;
        margin-right: 0;
        align-self: flex-start;
    }

    .site_name img {
        display: block;
    }

    .site_title {
    }

    .site_title img {
        height: 18px;
        margin: 0 auto
    }

    .site_nav_meta {
        padding-right: 10px;
    }

    .siteFooter .wrap {
        padding: 0;
    }

    .siteFooter .footer_nav.row:nth-child(1) {
        padding: 0 10% 30px;
    }

    .siteFooter .footer_nav.row:nth-child(2) a {
        font-size: 12px;
    }

    .footer_menu > li:not(:last-child) {
        margin-right: 20px;
    }

    .page-header .breadcrumbs-parent {
        margin-left: 0;
        padding-left: 0;
    }

    /* -- 769 -- */

    .search-box form {
        margin-bottom: 20px;
    }

    .search-box form {
        padding: 32px 10px 4px 15px;
    }

    .search-box-image-parent {
        padding-bottom: 37%;
    }

    .corpus-description {
        padding: 38px 0 42px;
    }

    .corpus-description .corpus-description-content p {
        font-size: 1.125em;
    }

    .corpus-description .corpus-description-more-link {
        margin-top: 36px;
    }

    .resource-list-and-filters {
        width: 100%;
        padding: 20px;
    }

    .resource-list-and-filters .resource-list-per-page-settings {
        display: none;
    }

    .collections-slider .collections-slider-next-collection {
        transform: none;
    }

    .collections-slider .collections-slider-previous-collection,
    .collections-slider .collections-slider-next-collection {
        flex: 60px 0 0;
        width: 60px;
    }

    .collections-slider .collections-slider-previous-collection {
        background-position: top 110px left 5px;
    }

    .collections-slider .collections-slider-next-collection {
        background-position: top 110px right 5px;
    }

    .collections-axis-browse > li .collections-axis-contents .collections-axis-description {
        display: block;
        width: auto;
        margin-bottom: 20px;
        margin-right: 20px;
        font-size: 0.9375em;
    }

    .collections-slider {
        display: flex;
        width: 100%;
    }

    .collections-slider > div.slick-slider {
        margin-left: 15px;
    }

    .collections-slider .slick-slider:not(.slick-initialized) .slider-card {
        width: calc(50% - 20px);
    }

    ul.collections-axis-browse > li {
        padding-left: 15px;
        padding-right: 15px;
    }

    .theme-contents-title h2,
    .collections-axis-browse > li h2 {
        font-size: 1.25em;
        line-height: 1.2;
    }

    .collections-axis-browse > li .collections-axis-browse-items-count {
        margin-bottom: 10px;
        margin-top: 6px;
    }

    .collections-axis-browse > li .collections-axis-contents .collections-axis-description {
        margin-bottom: 32px;
    }

    ul.collections-axis-browse > li {
        padding-bottom: 110px;
    }

    .collections-site > div.collections-site-content {
        padding: 55px 20% 75px;
    }

    .collections-site h2 {
        font-size:  1.25em;
    }

    /* -- 769 -- */

    .itemset-header nav.breadcrumbs,
    .itemset-header .itemset-header-content {
        width: 62%;
        padding: 10px 4% 42px;
    }

    .theme-breadcrumbs nav.breadcrumbs,
    .page-header nav.breadcrumbs {
        padding: 10px 20px 10px;
    }

    .itemset-header h1 {
        font-size: 1.875em;
        line-height: 1.1;
    }

    .itemset-header .itemset-short-description {
        font-weight: 400;
        font-size: 0.8125em;
        line-height: 1.3;
    }

    .itemset-header .itemset-long-description {
        font-weight: 300;
        font-size: 0.9375em;
        line-height: 1.45;
    }

    .itemset-more-description-text {
        column-count: 1;
        font-size: 0.875em;
    }

    .itemset-more-description-content {
        padding: 30px 0 40px;
        width: 92%;
        margin: 0 4%;
    }

    .mobile-filters-and-menu-toggle {
        margin-bottom: 0;
    }

    .mobile-filters-and-menu-toggle > a {
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
        font-size:1.0625em;
        color:#384072;
        text-transform: uppercase;
        text-decoration: none;
        margin-right: 0;
    }

    .search-results .mobile-filters-and-menu-toggle > a::after {
        margin-right: 0;
    }

    .search-results .resource-list-display-mode {
        margin-left: 0;
    }

    .collections-suggestions .collections-slider {
        display: flex;
    }

    .collections-suggestions h4 {
        font-size: 1.875em;
    }

    .collections-suggestions .collections-slider > a {
        display: inline-block;
    }

    /* -- 769 -- */

    .resource-list-header .resource-list-count {
        font-size: 1.0625em;
    }

    .item-header-content .item-infos h1 {
        font-size: 1.3125em;
    }

    .item-header-content .item-infos .item-author {
        font-size: 0.875em;
    }

    .item-header-content .item-infos .item-description {
        font-size: 0.875em;
    }

    .item-show-content .item-show-info-and-tools h2 {
        font-size: 1.875em;
    }

    .item-show-content > .property-groups h3,
    .item-show-content > dl h3,
    .item-show-content .item-show-metadata-panel h3 {
        font-size:1.375em;
    }

    .item-show-content dl > .property > dt,
    .item-show-content .item-show-metadata-panel .item-show-metadata-term {
        font-size: 0.9375em;
        line-height: 1.5;
    }

    .item-show-content dl > .property > dd,
    .item-show-content .item-show-metadata-panel .item-show-metadata-value {
        font-size: 0.9375em;
        line-height: 1.5;
    }

    .theme-resource-list-header > .edit-search-btn,
    .resource-list-selected-filters-and-edit > .edit-search-btn {
        font-size:0.8125em;
        margin: 0;
    }

    .resource-list-header ul.resource-list-selected-filters > li > a {
        font-size:0.75em;
    }

    /* -- 769 -- */

    .advanced-search-form-parent {
        margin-top: 40px;
        margin-bottom:40px;
    }

    .advanced-search-form-parent form .advanced-form-fields .advanced-form-field {
        flex-wrap: wrap;
    }

    .advanced-search-form-parent form .advanced-form-fields .advanced-form-field:last-child {
        margin-bottom: 10px;
    }

    .advanced-search-form-parent form .advanced-form-fields .advanced-form-field .advanced-search-selected-filters {
        flex: 100% 0 0;
        padding-left: 210px;
        margin-top: 4px;
    }

    .advanced-search-form-parent form .advanced-form-fields .advanced-form-field label {
        flex: 210px 0 0;
    }

    .advanced-form-field .advanced-form-input {
        flex: calc( 100% - 230px ) 0 0;
    }

    .advanced-form-buttons {
        padding: 40px 0 0  210px;
    }

    /* -- 769 -- */

    .page-header h1 {
        font-size: 1.875em;
    }

    .page-header .breadcrumbs-parent {
        padding-top: 0;
    }

    .page-intro {
        padding: 35px 6%;
    }

    .page-title-parent {
        padding: 0 0 30px;
        text-align: center;
    }

    .page-intro .page-intro-content ul,
    .page-intro .page-intro-content p {
        font-size: 0.875em;
        line-height: 1.4375em;
    }

    .page-type-block-content h2 {
        font-size: 1.375em;
        margin-bottom: 20px;
    }

    .page-type-block-content h3 {
        font-size: 0.875em;
    }

    .page-type-block-content ul,
    .page-type-block-content p {
        font-size: 0.875em;
    }

    .page-type-block-content .page-type-image .page-type-image-description {
        font-size: 0.8125em;
    }

    /* -- 769 -- */

    .glossary-alphabet > li > span,
    .glossary-alphabet > li > a {
        font-size: 1.375em;
        margin-right: 10px;
    }

    .glossary-tools a.item-show-download-btn {
        width: 28px;
        height: 28px;
        background-size: cover;
    }

    .glossary-tools a.item-show-share-btn {
        width: 24px;
        height: 28px;
        background-size: cover;
    }

    .glossary-items > li > .glossary-term {
        font-size: 1.0625em;
        line-height: 1.2;
    }

    .glossary-items > li > .glossary-definition {
        font-size: 0.875em;
        line-height: 1.35;
    }

    .glossary-results .resource-list-pagination {
        margin: 32px 0 50px;
    }

    /* -- 769 -- */

    .theme-breadcrumbs nav.breadcrumbs,
    .page-header nav.breadcrumbs {
        padding-left:0;
        padding-right:0;
    }

    .theme-header-content h1 {
        font-size: 1.25em;
    }

    .theme-resource-list-header + .resource-list-controls {
        padding-bottom: 10px;
    }

    .theme-resource-list-content.grid ul.resource-list > li {
        flex: 50% 0 0;
    }

    .theme-resource-list-content.grid ul.resource-list > li:nth-child(3n+1),
    .theme-resource-list-content.grid ul.resource-list > li:nth-child(3n+2),
    .theme-resource-list-content.grid ul.resource-list > li:nth-child(3n) {
        padding: 0;
    }

    .theme-resource-list-content.grid ul.resource-list > li:nth-child(2n+1) {
        padding-right: 12px;
    }

    .theme-resource-list-content.grid ul.resource-list > li:nth-child(2n) {
        padding-right: 12px;
    }

    /* --- En lien --- NEW2022 ------------------------- */

    .item-show-content-relations .item-show-content {
        padding: 25px 0;
    }

    .item-show-content > .property-groups h3,
    .item-show-content > dl h3,
    .item-show-content-relations .item-show-metadata-panel h3 {
        margin-bottom: 20px;
    }

    .item-show-content-relations .item-show-content > div.item-show-metadata-panel {
        padding-top: 28px;
        padding-bottom: 28px;
    }

    .item-show-content dl > .property > dd,
    .item-show-metadata-panel .item-show-metadata-value {
        width: 100%;
    }

    .item-show-metadata-panel .item-show-content-relation-value {
        margin-bottom: 18px;
    }

    .item-show-content dl > .property > dd,
    .item-show-content .item-show-metadata-panel .item-show-metadata-value {
        font-size: 1.0625em;
    }

    .item-show-metadata-panel a.see-all {
        margin-top: 20px;
    }

    /* --- Transcriptions --- */

    .item-show-content .item-show-metadata-panel .item-show-metadata-value {
        font-size: 0.9375em;
        line-height: 1.5;
    }

    .item-transcriptions .item-show-metadata-value ul {
        margin-top: 12px;
    }


}

@media screen and (max-width: 640px) {

    body.media.resource.show main > *:not(.theme-header) {
        padding-left: 5px;
        padding-right: 5px;
    }

    .search-box-image-parent {
        padding-bottom: 68%;
    }

    .search-box form {
        width: 100%;
    }

    .search-box form {
        padding: 18px 20px 4px 15px;
    }

    .search-box form input[type="search"],
    .search-box form input[type="text"] {
        font-size: 1em;
        line-height: 1;
        padding-top: 0;
        padding-bottom: 0;
    }

    .search-box .form-advanced-search-link a {
        font-size: 0.8125em;
    }

    .search-box .form-advanced-search-link {
        padding: 14px 0 8px;
    }

    .artwork-info-link {
        width: 40px;
        height: 32px;
    }

    .artwork-info-link > a {
        flex: 40px 0 0;
        background: url(../img/info.svg) center / 18px 18px no-repeat;
        height: 32px;
    }

    .artwork-info-link.opened {
        font-size: 0.8125em;
    }

    .artwork-info-link > div.artwork-info-details {
        padding: 16px 10px 16px 5px;
    }

    .corpus-description .corpus-description-content p {
        font-size: 0.875em;
        line-height: 1.75em;
    }

    .corpus-description {
        padding: 38px 0 45px;
    }

    .corpus-description .corpus-description-more-link {
        margin-top: 16px;
    }

    .corpus-description .corpus-description-more-link a {
        font-size: 0.75em;
    }

    ul.collections-axis-browse > li {
        padding-top: 35px;
        padding-bottom: 35px;
    }

    .collections-slider .collections-slider-previous-collection,
    .collections-slider .collections-slider-next-collection {
        flex: 25px 0 0;
        width: 25px;
        background-size: 25px 25px;
        background-position: top center;
    }

    .collections-axis-browse > li .collections-axis-contents .collections-axis-description {
        margin-right: 0;
        margin-left: 0;
    }

    .collections-slider > div.slick-slider {
        margin-left: 20px;
    }

    .collections-slider .slick-slider:not(.slick-initialized) .slider-card {
        width: calc(100% - 20px);
    }

    .theme-contents-title h2,
    .collections-axis-browse > li h2 {
        font-size:1.0625em;
        text-align: center;
    }

    .collections-axis-browse > li h2::before {
        display: none;
    }

    .collections-axis-collection-card > h3,
    .collections-axis-collection-card > .collections-axis-collection-resume,
    .collections-axis-collection-card > .collections-axis-collection-description,
    .collections-axis-browse > li .collections-axis-browse-items-count,
    .collections-slider .slider-card > a > span {
        font-size: 0.8125em;
    }

    .collections-site h2 {
        font-size: 1.0625em;
    }

    .collections-site p {
        font-size: 0.875em;
    }

    .collections-site > div.collections-site-content {
        padding: 50px 20px 90px;
    }

    .siteFooter {
        padding: 36px 0;
    }

    .siteFooter .footer_nav.row:nth-child(1) {
        display: block;
    }

    .siteFooter .huma-num {
        padding-top: 30px;
    }

    .siteFooter .footer_nav.row:nth-child(1) > * {
        text-align: center;
    }

    .footer_menu {
        display: block;
    }

    .footer_menu li {
        text-align: center;
    }

    .siteFooter .footer_nav.row.our-sites h5 {
        font-size: 0.8125em;
        margin-bottom: 12px;
    }

    .siteFooter .footer_nav.row.our-sites ul > li > a {
        font-size: 0.8125em;
        line-height: 1.875em;
    }

    .siteFooter .huma-num a {
        font-size: 0.8125em;
    }

    main a.footer-back-to-top,
    footer a.footer-back-to-top {
        display: none;
    }

    /* -- 640 -- */

    .itemset-header-bg {
        height: auto;
        position: relative;
        padding-bottom: 60%;
        overflow: hidden;
    }

    .itemset-header h1 {
        font-size: 1.3125em;
        margin-top: 18px;
    }

    .itemset-header .itemset-subtitle {
        font-size: 0.875em;
    }

    .resource-list-and-filters aside {
        max-width:90%;
    }

    .resource-list-controls .resource-list-count,
    .itemset-header .itemset-items-count {
        font-size: 0.8125em;
    }

    .resource-list-controls .select-parent > select,
    .resource-list-sort-mode label {
        font-size: 0.75em;
    }

    .resource-list-pagination form input,
    .resource-list-pagination span.pagination-total {
        font-size: 0.9375em;
    }

    a.itemset-more-description-link {
        font-size: 0.75em;
    }


    /* Itemset header only for the first page */

    .itemset-header  .itemset-header-content-parent {
        display: none;
    }

    .itemset-header.first-page-of-pagination .itemset-header-content-parent {
        display: block;
    }


    .itemset-header-bg img {
        position: absolute;
    }

    .itemset-header > div.content-with-padding {
        padding: 0;
    }

    .itemset-header-content-parent.wrap,
    .breadcrumbs-parent.wrap {
        width: 100%;
    }

    .itemset-header nav.breadcrumbs {
        margin-left: 0;
        width: 100%;
        padding-top: 5px;
        padding-bottom: 5px;
    }

    .itemset-header .itemset-header-content {
        display: flex;
        flex-direction: column;
        position: unset;
        width: 100%;
        margin: 0;
    }

    .itemset-more-description {
        /* box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.15); */
    }

    .itemset-more-description-link {
        align-self: center;
    }

    .itemset-title-parent {
        align-self: flex-start;
    }

    .mobile-filters-and-menu-toggle > a {
        margin-right: 0;
        font-size: 0.875em;
    }

    .mobile-filters-title-and-close-btn > div {
    }

    .resource-list-filters a {
        font-size: 0.9375em;
    }

    .resource-list-filters ul li .search__label {
        font-size: 0.8125em;
    }


    /* -- 640 -- */

    .collections-suggestions {
        display: none;
    }

    .search-results .resource-list-controls {
        /* border-bottom: none; à vérifier */
    }

    .search-results .resource-list-controls .resource-list-sort-and-list-mode {
        display: none;
    }

    .resource-list-display-mode {
        display: none;
    }

    .resource-list-content ul.resource-list.grid > li {
        flex: 100% 0 0;
        margin-bottom: 40px;
    }

    .resource-list-content ul.resource-list.grid > li:nth-child(3n+2),
    .resource-list-content ul.resource-list.grid > li:nth-child(3n+1) {
        padding-right: 0;
    }

    .search-results .resource-list-and-filters .resource-list-content,
    .resource-list-and-filters .resource-list-content {
        padding-left: 0;
    }

    /* list mode => thumbnail mode */
    ul.resource-list > li a {
        display: block;
        text-decoration: none;
    }

    .item-card-media-parent {
        margin-right: 0;
    }

    .item-card-metadata-and-tags {
        width: 96%;
    }

    .item-header-content .item-viewer {
        flex: 100% 0 0;
    }

    .item-infos {
        display: none;
    }

    .item-show-content dl .property,
    .item-show-content .item-show-metadata {
        display: block;
    }

    .item-show-content > div,
    .item-show-content > .property-groups,
    .item-show-content > dl,
    .item-show-content > div.item-show-metadata-panel {
        padding-left: 5px;
        padding-right: 5px;
    }

    .item-show-content > .item-show-content-relations {
        margin: 0 -25px;
    }

    .item-show-content dl > .property > dt,
    .item-show-content .item-show-metadata-panel .item-show-metadata-term {
        font-size: 0.875em;
        margin-bottom: 2px;
    }

    .item-show-content dl > .property > dd,
    .item-show-content .item-show-metadata-panel .item-show-metadata-value {
        font-size: 0.875em;
    }

    .item-show-content > dl > .property > dd > ul > li,
    .item-show-content .item-show-metadata-panel .item-show-metadata-value > ul > li {
        margin-bottom: 2px;
    }

    .item-show-content .item-show-info-and-tools h2 {
        font-size: 1.5em;
        margin-right: 20px;
    }

    a.item-show-share-btn,
    a.item-show-download-btn {
        background-position: center;
        background-size: contain;
        width: 25px;
        height: 30px;
    }


    /* -- 640 -- */

    .page-title-parent {
        width: 100%;
        padding: 10px 20px 40px;
    }

    .page-header h1 {
        font-size: 1.3125em;
        line-height: 1.1;
    }

    .page-header h1 span {
        max-width: 200px;
        padding: 0 10px;
    }

    .theme-contents-title h2 span,
    .collections-axis-browse > li h2 span {
        max-width: 200px;
        padding: 0 20px;
    }

    .page-header-bg {
        padding-bottom: 50%;
    }

    .page-intro {
        padding: 25px 0;
    }

    .page-intro .page-intro-content ul,
    .page-intro .page-intro-content p {
        font-size: 0.8125em;
        line-height: 1.6em;
    }

    .page-type-block-content {
        padding:40px 0;
    }

    .page-type-block-content h2 {
        font-size: 1.0625em;
        margin-bottom: 20px;
    }

    .page-type-block-content h3 {
        font-size: 0.8125em;
    }

    .item-show-metadata-value p,
    .page-type-block-content ul,
    .page-type-block-content p {
        font-size: 0.8125em ;
    }

    .page-type-block-content .page-type-image .page-type-image-description {
        font-size: 0.8125em;
    }

    .page-type-block-content .page-type-image {
        display: block;
    }

    .search-results .resource-list-header {
        padding-bottom: 10px;
    }

    .search-results .resource-list-and-filters .resource-list-content ul.resource-list {
        padding-left: 0;
    }

    /* -- 640 -- */

    .advanced-search-form-parent {
        box-sizing: border-box;
        width: auto;
        margin: 30px 20px;
    }

    .advanced-search-form-parent form .advanced-form-fields {
        padding: 0;
    }

    .advanced-search-form-parent form .advanced-form-fields .advanced-form-field {
        display: block;
    }

    .advanced-search-form-parent form .advanced-form-fields .advanced-form-field .advanced-search-selected-filters {
        padding-left: 0;
    }

    .advanced-form-field .advanced-form-input a.advanced-form-add-btn {
        width: 36px;
        height: 37px;
    }

    .advanced-search-form-parent form .advanced-form-fields .advanced-form-field {
        margin-bottom: 10px;
    }

    .advanced-search-form-parent form .advanced-form-fields .advanced-form-field select,
    .advanced-search-form-parent form .advanced-form-fields .advanced-form-field input[type="search"],
    .advanced-search-form-parent form .advanced-form-fields .advanced-form-field input[type="text"],
    .advanced-search-form-parent form .advanced-form-fields .advanced-form-field label {
        font-size: 0.875em;
    }

    .advanced-search-form-parent form .advanced-form-fields .advanced-form-field select {
        padding: 8px 5px;
    }

    .advanced-search-form-parent form .advanced-form-fields .advanced-form-field input[type="search"],
    .advanced-search-form-parent form .advanced-form-fields .advanced-form-field input[type="text"] {
        padding: 3px 10px;
    }

    .advanced-form-field .advanced-form-input {
        flex: calc( 100% - 230px ) 0 0;
    }

    .advanced-form-buttons {
        border: none;
        flex-direction: column;
        gap:0;
        padding: 20px 0;
    }

    .advanced-form-clear-filters {
        display: block;
        width: 100%;
        border-bottom: none;
        text-align: center;
        margin-bottom: 30px;
    }

    .advanced-form-buttons {
        flex-direction: column;
        gap:0;
        padding-top: 20px;
    }

    /* -- 640 -- */

    .glossary-alphabet > li {
        padding-top: 0;
    }

    .glossary-alphabet > li > span,
    .glossary-alphabet > li > a {
        font-size: 1.0625em;
        margin-right: 10px;
    }

    .glossary-tools {
        text-align: center;
        padding: 10px 0 6px;
    }

    .glossary-tools a.item-show-download-btn {
        width: 20px;
        height: 20px;
    }

    .glossary-tools a.item-show-share-btn {
        width: 16px;
        height: 20px;
    }

    .glossary-items {
        column-count: 1;
    }

    .glossary-items > li > .glossary-term {
        font-size: 0.875em;
    }

    .glossary-items > li > .glossary-definition {
        font-size: 0.8125em;
    }

    /* -- 640 -- */

    .theme-header .theme-header-image {
        padding-bottom: 75%;
    }

    .theme-header-links {
        padding-left: 20px;
        padding-right: 20px;
    }

    .theme-header-content h1 span.long-title {
        display: none;
    }

    .theme-header-content h1 span.short-title {
        display: inline;
    }

    .theme-header-content .theme-header-menu-btn {
        font-size: 0.8125em;
    }

    .theme-header-menu-content > ul.theme-header-menu-items > li > a {
        font-size: 0.75em;
    }

    .theme-resource-list-content.grid ul.resource-list > li {
        flex: 100% 0 0;
    }

    .theme-resource-list-content.grid ul.resource-list > li:nth-child(2n+1),
    .theme-resource-list-content.grid ul.resource-list > li:nth-child(2n) {
        padding: 0;
    }

    .theme-resource-list-and-filters .resource-list-controls:last-child {
        justify-content: center;
    }

    .theme-resource-list-and-filters .resource-list-controls:last-child::after {
        display: none;
    }

    /* --- En lien --- NEW2022 ------------------------- */

    .item-show-content {
        padding: 12px 0;
    }

    a.item-show-share-btn {
        width: 22px;
        height: 20px;
    }

    a.item-show-download-btn {
        width: 23px;
        height: 20px;
        margin-right: 15px;
    }

    .item-show-content .item-show-info-and-tools {
        align-items: center;
    }

    .item-show-content .item-show-info-and-tools h2 {
        font-size: 1.3125em;
        line-height: 1.3;
    }

    .item-show-content  .item-show-info-and-tools + div.item-show-metadata-panel {
        padding-top: 10px;
    }

    .item-show-content .property-group,
    .item-show-content > dl,
    .item-show-content > div.item-show-metadata-panel {
        padding-top: 16px;
        padding-bottom: 20px;
    }

    .item-show-content > .property-groups h3,
    .item-show-content > dl h3,
    .item-show-content .item-show-metadata-panel h3 {
        font-size: 1.0625em;
        margin-bottom: 12px;
    }

    .item-show-metadata-panel .item-show-content-relation-value {
        font-size: 0.875em;
        line-height: 1.3;
        margin-bottom: 30px;
    }

    .item-show-content dl > .property > dd,
    .item-show-metadata-panel .item-show-metadata-value {
        font-size: 0.8125em;
    }

    .item-show-content dl > .property > dd li.value.resource.items,
    .item-show-metadata-panel .item-show-metadata-value li.value.resource.items {
        margin-bottom: 28px;
    }

    .item-show-metadata-panel a.see-all {
        margin-top: 8px;
    }

}

@media screen and (max-width: 360px) {

    .page-header h1 span {
        width: min-content;
    }

}


/* --- Transcriptions --- */

@media print {

    .site_name {
        position: absolute;
        top: 0;
        left: 30px;
        padding-bottom: 20px;
        padding-top: 0;
        margin-top: 0;
        margin-right: 0;
        border: none;
    }

    .site_title {
        width: 100%;
        margin-bottom: 100px;
        text-align: center;
    }

    .site_title > * {
        display: inline-block;
    }

    .site_title a::before {
        left: 0;
    }

    main {
        font-family: "Montserrat", sans-serif;
        padding: 10px;
    }

    .wrap {
        width: 100vw
    }

    a {
        color: #000000;
        text-decoration: none !important;
    }

    .item-show-content dl .property > *:first-child,
    .item-show-content .item-show-metadata > *:first-child {
        width: 20vw;
        padding-right: 20px;
        line-height: 1.2;
    }

    .item-show-content dl .property > *:last-child,
    .item-show-content .item-show-metadata > *:last-child {
        width: calc( 100% - 15em );
    }



    /* */

    .siteHeader::before {
        display: none;
    }

    .siteHeader {
        background-color: #F5F5F5;
        height: 120px;
        margin-bottom: 20px;
    }

    .site_title a {
        position: relative;
        display: inline-block;
    }

    .site_name img:not(.element-print-only),
    .site_title img:not(.element-print-only) {
        display: none;
    }

    .site_title img.element-print-only,
    .site_title img.element-print-only {
        display: inline-block;
    }

    .site_nav_meta.is-flex,
    .search-box.header-search-menu {
        display: none !important;
        width: 0;
        overflow: hidden;
    }

    .site_nav_meta {
        visibility: hidden;
    }

    .breadcrumbs,
    .item-show-info-and-tools a {
        display: none;
    }

    .item-show-content {
        padding: 35px 0;
    }

    .item-show-content .property-group,
    .item-show-content > dl,
    .item-show-content > div.item-show-metadata-panel {
        border-bottom: #9ca0b9 solid 1px;
        padding-top: 32px;
        padding-bottom: 42px;
    }

    .item-show-content > .property-groups h2,
    .item-show-content > .property-groups h3,
    .item-show-content > dl h2,
    .item-show-content > dl h3,
    .item-show-content .item-show-metadata-panel h3,
    .item-show-content .item-show-info-and-tools h2 {
        color: #333333;
    }

    .item-show-content > .property-groups,
    .item-show-content > dl,
    .item-show-content > div,
    .item-show-content > div.item-show-metadata-panel {
        padding-left: 15px;
        padding-right: 15px;
    }

    .item-show-content .item-show-info-and-tools h2 {
        margin-bottom: 30px;
    }

    .search-form,
    .site_title p,
    .theme-header,
    .item-show-btns,
    .siteFooter .footer_nav.row:nth-child(2),
    .siteFooter .footer_nav.row:nth-child(1),
    main a.footer-back-to-top,
    .item-show-content-relations .see-all {
        display: none !important;
    }

    .siteFooter,
    .item-show-content-relations,
    .item-show-header {
        background-color: #ffffff;
    }

    .item-show-content-relations .wrap {
        border-bottom: #9ca0b9 solid 1px;
        border-top: #9ca0b9 solid 1px;
    }

    .siteFooter img {
        margin-top: 0;
    }


    /* Fonts */

    .item-header-content .item-infos h1 {
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
        font-size: 1.6875em;
        line-height: 1.2;
        color: #333333;
        margin-bottom: 30px;
    }

    .item-show-content .item-show-info-and-tools h2 {
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        font-size: 2.1875em;
        color: #333333;
        margin-right: 30px;
        text-transform: uppercase;
    }

    .item-show-content > .property-groups h3,
    .item-show-content > dl h3,
    .item-show-content .item-show-metadata-panel h3 {
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
        font-size: 1.375em;
        color: #333333;
        margin-bottom: 26px;
        text-transform: uppercase;
    }

    .item-show-content dl > .property > dt,
    .item-show-content .item-show-metadata-panel .item-show-metadata-term {
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
        font-size: 1.0625em;
        line-height: 1.65;
        color: #515151;
    }

    /* Mirador (prevent fullscreen) */

    .mirador {
        display: block;
        width: 100%;
        height: 70vh;
        min-height: 600px;
        margin: 0;
        position: relative;
    }

    .mirador-window-top-bar {
        min-height: 48px !important;
    }

    .mirador-window-top-bar button,
    .mirador-workspace-control-panel {
        display: none !important;
    }

    .mirador-workspace-viewport.mirador-workspace-with-control-panel {
        padding-left: 0 !important;
    }

    /* Si pas en config. */
    .mirador.viewer button.MuiFab-primary {
        background-color: #384072 !important;
    }

}
