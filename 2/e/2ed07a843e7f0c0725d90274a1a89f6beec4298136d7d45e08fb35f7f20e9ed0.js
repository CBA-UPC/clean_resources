@font-face {
    font-family: 'omatome_ico';
    src:url('https://cnobi.jp/v1/gazorss/recommend/js/fonts/omatome_icofont.1.eot');
    src:url('https://cnobi.jp/v1/gazorss/recommend/js/fonts/omatome_icofont.1.eot?#iefix') format('embedded-opentype'),
        url('https://cnobi.jp/v1/gazorss/recommend/js/fonts/omatome_icofont.1.woff') format('woff'),
        url('https://cnobi.jp/v1/gazorss/recommend/js/fonts/omatome_icofont.1.ttf') format('truetype'),
        url('https://cnobi.jp/v1/gazorss/recommend/js/fonts/omatome_icofont.1.svg#omatome_ico') format('svg');
    font-weight: normal;
    font-style: normal;
}

/* Use the following CSS code if you want to use data attributes for inserting your icons */
[data-icon]:before {
    font-family: 'omatome_ico';
    content: attr(data-icon);
    speak: none;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
}

/* Use the following CSS code if you want to have a class per icon */
/*
Instead of a list of all class selectors,
you can use the generic selector below, but it's slower:
[class*="omatome-icn-"] {
*/
.omatome-icn-hatena, .omatome-icn-twitter, .omatome-icn-mixi, .omatome-icn-google, .omatome-icn-facebook {
    font-family: 'omatome_ico';
    speak: none;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
}
.omatome-icn-hatena:before {
    content: "\e004";
}
.omatome-icn-twitter:before {
    content: "\e001";
}
.omatome-icn-mixi:before {
    content: "\e003";
}
.omatome-icn-google:before {
    content: "\e002";
}
.omatome-icn-facebook:before {
    content: "\e000";
}
