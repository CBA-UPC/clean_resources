/*
Theme Name: Madara
Theme URI: https://live.mangabooth.com/
Author: WPStylish
Author URI: https://themeforest.net/user/wpstylish
Description: Manga Solution for WordPress. Support Manga, Comic, Novel, Anime, Video content. Require WP Manga (Madara-Core) plugin
Version: 1.6.5.3
Text Domain: madara
Domain Path: /languages/
Tags: one-column, two-columns, right-sidebar, custom-header, custom-menu, editor-style, featured-images, microformats, post-formats, rtl-language-support, sticky-post, translation-ready
License: ThemeForest License
License URI: license.txt
*/
/*--------------------------------------------------------------
>>> TABLE OF CONTENTS:
----------------------------------------------------------------
1.0 - Reset
2.0 - Header
3.0 - Navigation
4.0 - Pages
5.0 - Single
6.0 - Content
7.0 - Plugins
8.0 - Shortcodes
9.0 - Widgets
10.0 - Footer
11.0 - Wall Ads
--------------------------------------------------------------*/
/* devanagari */
@font-face {
  font-display: swap;
  font-family: 'Poppins';
  font-style: italic;
  font-weight: 100;
  src: local('Poppins Thin Italic'), local('Poppins-ThinItalic'), url(https://fonts.gstatic.com/s/poppins/v9/pxiAyp8kv8JHgFVrJJLmE0tDMPKzSQ.woff2) format('woff2');
  unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;
}
/* latin-ext */
@font-face {
  font-display: swap;
  font-family: 'Poppins';
  font-style: italic;
  font-weight: 100;
  src: local('Poppins Thin Italic'), local('Poppins-ThinItalic'), url(https://fonts.gstatic.com/s/poppins/v9/pxiAyp8kv8JHgFVrJJLmE0tMMPKzSQ.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-display: swap;
  font-family: 'Poppins';
  font-style: italic;
  font-weight: 100;
  src: local('Poppins Thin Italic'), local('Poppins-ThinItalic'), url(https://fonts.gstatic.com/s/poppins/v9/pxiAyp8kv8JHgFVrJJLmE0tCMPI.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* devanagari */
@font-face {
  font-display: swap;
  font-family: 'Poppins';
  font-style: italic;
  font-weight: 200;
  src: local('Poppins ExtraLight Italic'), local('Poppins-ExtraLightItalic'), url(https://fonts.gstatic.com/s/poppins/v9/pxiDyp8kv8JHgFVrJJLmv1pVFteOcEg.woff2) format('woff2');
  unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;
}
/* latin-ext */
@font-face {
  font-display: swap;
  font-family: 'Poppins';
  font-style: italic;
  font-weight: 200;
  src: local('Poppins ExtraLight Italic'), local('Poppins-ExtraLightItalic'), url(https://fonts.gstatic.com/s/poppins/v9/pxiDyp8kv8JHgFVrJJLmv1pVGdeOcEg.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-display: swap;
  font-family: 'Poppins';
  font-style: italic;
  font-weight: 200;
  src: local('Poppins ExtraLight Italic'), local('Poppins-ExtraLightItalic'), url(https://fonts.gstatic.com/s/poppins/v9/pxiDyp8kv8JHgFVrJJLmv1pVF9eO.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* devanagari */
@font-face {
  font-display: swap;
  font-family: 'Poppins';
  font-style: italic;
  font-weight: 300;
  src: local('Poppins Light Italic'), local('Poppins-LightItalic'), url(https://fonts.gstatic.com/s/poppins/v9/pxiDyp8kv8JHgFVrJJLm21lVFteOcEg.woff2) format('woff2');
  unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;
}
/* latin-ext */
@font-face {
  font-display: swap;
  font-family: 'Poppins';
  font-style: italic;
  font-weight: 300;
  src: local('Poppins Light Italic'), local('Poppins-LightItalic'), url(https://fonts.gstatic.com/s/poppins/v9/pxiDyp8kv8JHgFVrJJLm21lVGdeOcEg.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-display: swap;
  font-family: 'Poppins';
  font-style: italic;
  font-weight: 300;
  src: local('Poppins Light Italic'), local('Poppins-LightItalic'), url(https://fonts.gstatic.com/s/poppins/v9/pxiDyp8kv8JHgFVrJJLm21lVF9eO.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* devanagari */
@font-face {
  font-display: swap;
  font-family: 'Poppins';
  font-style: italic;
  font-weight: 400;
  src: local('Poppins Italic'), local('Poppins-Italic'), url(https://fonts.gstatic.com/s/poppins/v9/pxiGyp8kv8JHgFVrJJLucXtAKPY.woff2) format('woff2');
  unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;
}
/* latin-ext */
@font-face {
  font-display: swap;
  font-family: 'Poppins';
  font-style: italic;
  font-weight: 400;
  src: local('Poppins Italic'), local('Poppins-Italic'), url(https://fonts.gstatic.com/s/poppins/v9/pxiGyp8kv8JHgFVrJJLufntAKPY.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-display: swap;
  font-family: 'Poppins';
  font-style: italic;
  font-weight: 400;
  src: local('Poppins Italic'), local('Poppins-Italic'), url(https://fonts.gstatic.com/s/poppins/v9/pxiGyp8kv8JHgFVrJJLucHtA.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* devanagari */
@font-face {
  font-display: swap;
  font-family: 'Poppins';
  font-style: italic;
  font-weight: 500;
  src: local('Poppins Medium Italic'), local('Poppins-MediumItalic'), url(https://fonts.gstatic.com/s/poppins/v9/pxiDyp8kv8JHgFVrJJLmg1hVFteOcEg.woff2) format('woff2');
  unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;
}
/* latin-ext */
@font-face {
  font-display: swap;
  font-family: 'Poppins';
  font-style: italic;
  font-weight: 500;
  src: local('Poppins Medium Italic'), local('Poppins-MediumItalic'), url(https://fonts.gstatic.com/s/poppins/v9/pxiDyp8kv8JHgFVrJJLmg1hVGdeOcEg.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-display: swap;
  font-family: 'Poppins';
  font-style: italic;
  font-weight: 500;
  src: local('Poppins Medium Italic'), local('Poppins-MediumItalic'), url(https://fonts.gstatic.com/s/poppins/v9/pxiDyp8kv8JHgFVrJJLmg1hVF9eO.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* devanagari */
@font-face {
  font-display: swap;
  font-family: 'Poppins';
  font-style: italic;
  font-weight: 600;
  src: local('Poppins SemiBold Italic'), local('Poppins-SemiBoldItalic'), url(https://fonts.gstatic.com/s/poppins/v9/pxiDyp8kv8JHgFVrJJLmr19VFteOcEg.woff2) format('woff2');
  unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;
}
/* latin-ext */
@font-face {
  font-display: swap;
  font-family: 'Poppins';
  font-style: italic;
  font-weight: 600;
  src: local('Poppins SemiBold Italic'), local('Poppins-SemiBoldItalic'), url(https://fonts.gstatic.com/s/poppins/v9/pxiDyp8kv8JHgFVrJJLmr19VGdeOcEg.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-display: swap;
  font-family: 'Poppins';
  font-style: italic;
  font-weight: 600;
  src: local('Poppins SemiBold Italic'), local('Poppins-SemiBoldItalic'), url(https://fonts.gstatic.com/s/poppins/v9/pxiDyp8kv8JHgFVrJJLmr19VF9eO.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* devanagari */
@font-face {
  font-display: swap;
  font-family: 'Poppins';
  font-style: italic;
  font-weight: 700;
  src: local('Poppins Bold Italic'), local('Poppins-BoldItalic'), url(https://fonts.gstatic.com/s/poppins/v9/pxiDyp8kv8JHgFVrJJLmy15VFteOcEg.woff2) format('woff2');
  unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;
}
/* latin-ext */
@font-face {
  font-display: swap;
  font-family: 'Poppins';
  font-style: italic;
  font-weight: 700;
  src: local('Poppins Bold Italic'), local('Poppins-BoldItalic'), url(https://fonts.gstatic.com/s/poppins/v9/pxiDyp8kv8JHgFVrJJLmy15VGdeOcEg.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-display: swap;
  font-family: 'Poppins';
  font-style: italic;
  font-weight: 700;
  src: local('Poppins Bold Italic'), local('Poppins-BoldItalic'), url(https://fonts.gstatic.com/s/poppins/v9/pxiDyp8kv8JHgFVrJJLmy15VF9eO.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* devanagari */
@font-face {
  font-display: swap;
  font-family: 'Poppins';
  font-style: italic;
  font-weight: 800;
  src: local('Poppins ExtraBold Italic'), local('Poppins-ExtraBoldItalic'), url(https://fonts.gstatic.com/s/poppins/v9/pxiDyp8kv8JHgFVrJJLm111VFteOcEg.woff2) format('woff2');
  unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;
}
/* latin-ext */
@font-face {
  font-display: swap;
  font-family: 'Poppins';
  font-style: italic;
  font-weight: 800;
  src: local('Poppins ExtraBold Italic'), local('Poppins-ExtraBoldItalic'), url(https://fonts.gstatic.com/s/poppins/v9/pxiDyp8kv8JHgFVrJJLm111VGdeOcEg.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-display: swap;
  font-family: 'Poppins';
  font-style: italic;
  font-weight: 800;
  src: local('Poppins ExtraBold Italic'), local('Poppins-ExtraBoldItalic'), url(https://fonts.gstatic.com/s/poppins/v9/pxiDyp8kv8JHgFVrJJLm111VF9eO.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* devanagari */
@font-face {
  font-display: swap;
  font-family: 'Poppins';
  font-style: italic;
  font-weight: 900;
  src: local('Poppins Black Italic'), local('Poppins-BlackItalic'), url(https://fonts.gstatic.com/s/poppins/v9/pxiDyp8kv8JHgFVrJJLm81xVFteOcEg.woff2) format('woff2');
  unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;
}
/* latin-ext */
@font-face {
  font-display: swap;
  font-family: 'Poppins';
  font-style: italic;
  font-weight: 900;
  src: local('Poppins Black Italic'), local('Poppins-BlackItalic'), url(https://fonts.gstatic.com/s/poppins/v9/pxiDyp8kv8JHgFVrJJLm81xVGdeOcEg.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-display: swap;
  font-family: 'Poppins';
  font-style: italic;
  font-weight: 900;
  src: local('Poppins Black Italic'), local('Poppins-BlackItalic'), url(https://fonts.gstatic.com/s/poppins/v9/pxiDyp8kv8JHgFVrJJLm81xVF9eO.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* devanagari */
@font-face {
  font-display: swap;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 100;
  src: local('Poppins Thin'), local('Poppins-Thin'), url(https://fonts.gstatic.com/s/poppins/v9/pxiGyp8kv8JHgFVrLPTucXtAKPY.woff2) format('woff2');
  unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;
}
/* latin-ext */
@font-face {
  font-display: swap;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 100;
  src: local('Poppins Thin'), local('Poppins-Thin'), url(https://fonts.gstatic.com/s/poppins/v9/pxiGyp8kv8JHgFVrLPTufntAKPY.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-display: swap;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 100;
  src: local('Poppins Thin'), local('Poppins-Thin'), url(https://fonts.gstatic.com/s/poppins/v9/pxiGyp8kv8JHgFVrLPTucHtA.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* devanagari */
@font-face {
  font-display: swap;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 200;
  src: local('Poppins ExtraLight'), local('Poppins-ExtraLight'), url(https://fonts.gstatic.com/s/poppins/v9/pxiByp8kv8JHgFVrLFj_Z11lFc-K.woff2) format('woff2');
  unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;
}
/* latin-ext */
@font-face {
  font-display: swap;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 200;
  src: local('Poppins ExtraLight'), local('Poppins-ExtraLight'), url(https://fonts.gstatic.com/s/poppins/v9/pxiByp8kv8JHgFVrLFj_Z1JlFc-K.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-display: swap;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 200;
  src: local('Poppins ExtraLight'), local('Poppins-ExtraLight'), url(https://fonts.gstatic.com/s/poppins/v9/pxiByp8kv8JHgFVrLFj_Z1xlFQ.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* devanagari */
@font-face {
  font-display: swap;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 300;
  src: local('Poppins Light'), local('Poppins-Light'), url(https://fonts.gstatic.com/s/poppins/v9/pxiByp8kv8JHgFVrLDz8Z11lFc-K.woff2) format('woff2');
  unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;
}
/* latin-ext */
@font-face {
  font-display: swap;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 300;
  src: local('Poppins Light'), local('Poppins-Light'), url(https://fonts.gstatic.com/s/poppins/v9/pxiByp8kv8JHgFVrLDz8Z1JlFc-K.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-display: swap;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 300;
  src: local('Poppins Light'), local('Poppins-Light'), url(https://fonts.gstatic.com/s/poppins/v9/pxiByp8kv8JHgFVrLDz8Z1xlFQ.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* devanagari */
@font-face {
  font-display: swap;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  src: local('Poppins Regular'), local('Poppins-Regular'), url(https://fonts.gstatic.com/s/poppins/v9/pxiEyp8kv8JHgFVrJJbecmNE.woff2) format('woff2');
  unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;
}
/* latin-ext */
@font-face {
  font-display: swap;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  src: local('Poppins Regular'), local('Poppins-Regular'), url(https://fonts.gstatic.com/s/poppins/v9/pxiEyp8kv8JHgFVrJJnecmNE.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-display: swap;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  src: local('Poppins Regular'), local('Poppins-Regular'), url(https://fonts.gstatic.com/s/poppins/v9/pxiEyp8kv8JHgFVrJJfecg.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* devanagari */
@font-face {
  font-display: swap;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  src: local('Poppins Medium'), local('Poppins-Medium'), url(https://fonts.gstatic.com/s/poppins/v9/pxiByp8kv8JHgFVrLGT9Z11lFc-K.woff2) format('woff2');
  unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;
}
/* latin-ext */
@font-face {
  font-display: swap;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  src: local('Poppins Medium'), local('Poppins-Medium'), url(https://fonts.gstatic.com/s/poppins/v9/pxiByp8kv8JHgFVrLGT9Z1JlFc-K.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-display: swap;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  src: local('Poppins Medium'), local('Poppins-Medium'), url(https://fonts.gstatic.com/s/poppins/v9/pxiByp8kv8JHgFVrLGT9Z1xlFQ.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* devanagari */
@font-face {
  font-display: swap;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  src: local('Poppins SemiBold'), local('Poppins-SemiBold'), url(https://fonts.gstatic.com/s/poppins/v9/pxiByp8kv8JHgFVrLEj6Z11lFc-K.woff2) format('woff2');
  unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;
}
/* latin-ext */
@font-face {
  font-display: swap;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  src: local('Poppins SemiBold'), local('Poppins-SemiBold'), url(https://fonts.gstatic.com/s/poppins/v9/pxiByp8kv8JHgFVrLEj6Z1JlFc-K.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-display: swap;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  src: local('Poppins SemiBold'), local('Poppins-SemiBold'), url(https://fonts.gstatic.com/s/poppins/v9/pxiByp8kv8JHgFVrLEj6Z1xlFQ.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* devanagari */
@font-face {
  font-display: swap;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  src: local('Poppins Bold'), local('Poppins-Bold'), url(https://fonts.gstatic.com/s/poppins/v9/pxiByp8kv8JHgFVrLCz7Z11lFc-K.woff2) format('woff2');
  unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;
}
/* latin-ext */
@font-face {
  font-display: swap;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  src: local('Poppins Bold'), local('Poppins-Bold'), url(https://fonts.gstatic.com/s/poppins/v9/pxiByp8kv8JHgFVrLCz7Z1JlFc-K.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-display: swap;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  src: local('Poppins Bold'), local('Poppins-Bold'), url(https://fonts.gstatic.com/s/poppins/v9/pxiByp8kv8JHgFVrLCz7Z1xlFQ.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* devanagari */
@font-face {
  font-display: swap;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 800;
  src: local('Poppins ExtraBold'), local('Poppins-ExtraBold'), url(https://fonts.gstatic.com/s/poppins/v9/pxiByp8kv8JHgFVrLDD4Z11lFc-K.woff2) format('woff2');
  unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;
}
/* latin-ext */
@font-face {
  font-display: swap;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 800;
  src: local('Poppins ExtraBold'), local('Poppins-ExtraBold'), url(https://fonts.gstatic.com/s/poppins/v9/pxiByp8kv8JHgFVrLDD4Z1JlFc-K.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-display: swap;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 800;
  src: local('Poppins ExtraBold'), local('Poppins-ExtraBold'), url(https://fonts.gstatic.com/s/poppins/v9/pxiByp8kv8JHgFVrLDD4Z1xlFQ.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* devanagari */
@font-face {
  font-display: swap;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 900;
  src: local('Poppins Black'), local('Poppins-Black'), url(https://fonts.gstatic.com/s/poppins/v9/pxiByp8kv8JHgFVrLBT5Z11lFc-K.woff2) format('woff2');
  unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;
}
/* latin-ext */
@font-face {
  font-display: swap;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 900;
  src: local('Poppins Black'), local('Poppins-Black'), url(https://fonts.gstatic.com/s/poppins/v9/pxiByp8kv8JHgFVrLBT5Z1JlFc-K.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-display: swap;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 900;
  src: local('Poppins Black'), local('Poppins-Black'), url(https://fonts.gstatic.com/s/poppins/v9/pxiByp8kv8JHgFVrLBT5Z1xlFQ.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

.vertical-align {
  position: relative;
  -webkit-transform: translateY(50%);
  -ms-transform: translateY(50%);
  transform: translateY(50%);
}
/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */

/* Document
   ========================================================================== */

/**
 * 1. Correct the line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in iOS.
 */

html {
  line-height: 1.15; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
}

/* Sections
   ========================================================================== */

/**
 * Remove the margin in all browsers.
 */

body { 
  margin: 0;
}

/**
 * Render the `main` element consistently in IE.
 */

main {
  display: block;
}

/**
 * Correct the font size and margin on `h1` elements within `section` and
 * `article` contexts in Chrome, Firefox, and Safari.
 */

h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

/* Grouping content
   ========================================================================== */

/**
 * 1. Add the correct box sizing in Firefox.
 * 2. Show the overflow in Edge and IE.
 */

hr {
  box-sizing: content-box; /* 1 */
  height: 0; /* 1 */
  overflow: visible; /* 2 */
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd `em` font sizing in all browsers.
 */

pre {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/* Text-level semantics
   ========================================================================== */

/**
 * Remove the gray background on active links in IE 10.
 */

a {
  background-color: transparent;
}

/**
 * 1. Remove the bottom border in Chrome 57-
 * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
 */

abbr[title] {
  border-bottom: none; /* 1 */
  text-decoration: underline; /* 2 */
  text-decoration: underline dotted; /* 2 */
}

/**
 * Add the correct font weight in Chrome, Edge, and Safari.
 */

b,
strong {
  font-weight: bolder;
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd `em` font sizing in all browsers.
 */

code,
kbd,
samp {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/**
 * Add the correct font size in all browsers.
 */

small {
  font-size: 80%;
}

/**
 * Prevent `sub` and `sup` elements from affecting the line height in
 * all browsers.
 */

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/* Embedded content
   ========================================================================== */

/**
 * Remove the border on images inside links in IE 10.
 */

img {
  border-style: none;
}

img{max-width: 100%; height: auto}

/* Forms
   ========================================================================== */

/**
 * 1. Change the font styles in all browsers.
 * 2. Remove the margin in Firefox and Safari.
 */

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  line-height: 1.15; /* 1 */
  margin: 0; /* 2 */
}

/**
 * Show the overflow in IE.
 * 1. Show the overflow in Edge.
 */

button,
input { /* 1 */
  overflow: visible;
}

/**
 * Remove the inheritance of text transform in Edge, Firefox, and IE.
 * 1. Remove the inheritance of text transform in Firefox.
 */

button,
select { /* 1 */
  text-transform: none;
}

/**
 * Correct the inability to style clickable types in iOS and Safari.
 */

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}

/**
 * Remove the inner border and padding in Firefox.
 */

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

/**
 * Restore the focus styles unset by the previous rule.
 */

button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}

/**
 * Correct the padding in Firefox.
 */

fieldset {
  padding: 0.35em 0.75em 0.625em;
}

/**
 * 1. Correct the text wrapping in Edge and IE.
 * 2. Correct the color inheritance from `fieldset` elements in IE.
 * 3. Remove the padding so developers are not caught out when they zero out
 *    `fieldset` elements in all browsers.
 */

legend {
  box-sizing: border-box; /* 1 */
  color: inherit; /* 2 */
  display: table; /* 1 */
  max-width: 100%; /* 1 */
  padding: 0; /* 3 */
  white-space: normal; /* 1 */
}

/**
 * Add the correct vertical alignment in Chrome, Firefox, and Opera.
 */

progress {
  vertical-align: baseline;
}

/**
 * Remove the default vertical scrollbar in IE 10+.
 */

textarea {
  overflow: auto;
}

/**
 * 1. Add the correct box sizing in IE 10.
 * 2. Remove the padding in IE 10.
 */

[type="checkbox"],
[type="radio"] {
  box-sizing: border-box; /* 1 */
  padding: 0; /* 2 */
}

/**
 * Correct the cursor style of increment and decrement buttons in Chrome.
 */

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

/**
 * 1. Correct the odd appearance in Chrome and Safari.
 * 2. Correct the outline style in Safari.
 */

[type="search"] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/**
 * Remove the inner padding in Chrome and Safari on macOS.
 */

[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

/**
 * 1. Correct the inability to style clickable types in iOS and Safari.
 * 2. Change font properties to `inherit` in Safari.
 */

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/* Interactive
   ========================================================================== */

/*
 * Add the correct display in Edge, IE 10+, and Firefox.
 */

details {
  display: block;
}

/*
 * Add the correct display in all browsers.
 */

summary {
  display: list-item;
}

/* Misc
   ========================================================================== */

/**
 * Add the correct display in IE 10+.
 */

template {
  display: none;
}

/**
 * Add the correct display in IE 10.
 */

[hidden] {
  display: none;
}
/* end normalize 8.0.1 */

/* custom css */
@media (min-width: 1200px) {
  .custom-width {
    width: 1100px;
  }
}
@media (min-width: 1360px) and (max-width: 1359px) {
  .custom-width {
    width: 1300px;
  }
}
@media (min-width: 1360px) {
  .custom-width {
    width: 1300px;
  }
}
@media (min-width: 1630px) {
  .custom-width {
    width: 1600px;
  }
}
@media (min-width: 1760px) {
  .custom-width {
    width: 1760px;
  }
}
.row-no-padding {
  margin-left: 0;
  margin-right: 0;
}
.row-no-padding [class*="col-"] {
  padding-left: 0 !important;
  padding-right: 0 !important;
}
.c-container-fluid {
  padding: 0;
}
@media (max-width: 768px) {
  .c-container-fluid {
    padding: 0 15px;
  }
}
.c-sidebar {
  padding: 50px 0 20px;
}
.c-sidebar.c-bottom-sidebar {
  border-top: 3px solid #ebebeb;
}
#hover-infor {
  display: none;
  width: 630px;
  background-color: #ffffff;
}
#hover-infor .infor_items {
  display: none;
}
#hover-infor .infor_items {
  padding: 20px;
  -webkit-box-shadow: 6px 6px 30px 6px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 6px 6px 30px 6px rgba(0, 0, 0, 0.2);
  box-shadow: 6px 6px 30px 6px rgba(0, 0, 0, 0.2);
}
#hover-infor .infor_items:after {
  content: "";
  display: table;
  clear: both;
}
#hover-infor .infor_item__wrap {
  display: block;
  width: 100%;
  max-width: 630px;
}
#hover-infor .item_thumb {
  float: left;
  width: 190px;
  overflow: hidden;
  margin-right: 20px;
}
#hover-infor .item_thumb .post-title a {
  color: #eb3349;
}
#hover-infor .item_thumb .post-title a:hover {
  color: #666666;
}
#hover-infor .item_content {
  float: left;
  overflow: hidden;
  width: calc(100% - 210px);
}
#hover-infor .item_content .rating i {
  font-size: 30px;
}
#hover-infor .item_content .rating .score {
  font-size: 24px;
  font-weight: 600;
  color: #333;
  margin-left: 10px;
}
#hover-infor .item_content .post-content_item {
  display: table;
  width: 100%;
  margin-bottom: 10px;
}
#hover-infor .item_content .post-content_item > * {
  display: table-cell;
  font-size: 14px;
  vertical-align: top;
  color: #666666;
}
#hover-infor .item_content .post-content_item.item_summary {
  display: block;
}
#hover-infor .item_content .post-content_item.item_summary .summary-heading {
  display: inline-block;
}
#hover-infor .item_content .post-content_item.item_summary .summary-heading h5 {
  margin-bottom: 3px;
}
#hover-infor .item_content .post-content_item.item_summary .summary-content {
  vertical-align: bottom;
  display: inline;
  width: 100%;
}
#hover-infor .item_content .post-content_item.item_genres .summary-content,
#hover-infor .item_content .post-content_item.item_artists .summary-content {
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  /* fallback */
  max-height: calc( 4.5 );
  /* fallback */
  width: 100%;
}
#hover-infor .item_content .summary-heading {
  width: 104px;
}
#hover-infor .item_content .summary-heading h5 {
  font-size: 14px;
  margin-top: 3px;
  margin-bottom: 0;
}
#hover-infor .item_content .summary-content {
  width: calc( 100% - 104px);
  color: #666666;
  word-break: break-word;
}
#hover-infor .item_content .summary-content a:not(:hover) {
  color: #666666;
}
#hover-infor .item_content .summary-content a:not(:first-child) {
  margin-left: 6px;
}
#hover-infor.loading {
  width: 40px;
  height: 40px;
  overflow: hidden;
  background-color: red;
}
#hover-infor.active {
  -webkit-animation: eFadeIn .35s;
  animation: eFadeIn .35s;
}
#hover-infor .post-title{margin-top:10px}
.icon-load-info {
  position: absolute;
  top: 50px;
  font-size: 40px;
  line-height: 40px;
  color: #eb3349;
  pointer-events: none;
  -webkit-animation: fa-spin 2s infinite linear, eFadeIn 0.35s;
  animation: fa-spin 2s infinite linear, eFadeIn 0.35s;
}
/* error 404 */
body.error404 .c-page-content .content-area {
  margin-top: 0 !important;
}
body.error404 .error-404 {
  text-align: center;
  height: 100vh;
  position: relative;
}
body.error404 .error-404_content {
  position: absolute;
  display: inline-block;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  right: 0;
}
body.error404 .error-404_content .entry-featured-image {
  margin-bottom: 25px;
}
body.error404 .error-404_content .entry-header {
  margin-bottom: 36px;
}
body.error404 figure {
  margin: 0;
}
.post-password-form label {
  margin-bottom: 10px;
}
.post-password-form input[name='post_password'] {
  line-height: 1.5;
  width: 100%;
  height: 38px;
  border: 1px solid rgba(45, 45, 45, 0.3);
  /* border-radius: 5px; */
  padding: 0 15px 0 15px;
}
.post-password-form input[name='Submit'] {
  background-color: #eb3349;
  border: none;
  font-weight: 600;
  color: #fff;
  padding: 4px 25px;
  vertical-align: bottom;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
  margin-bottom: 10px;
}
.post-password-form input[name='Submit']:hover {
  background-color: #0f0f0f;
}
.tptn_counter {
  clear: both;
}
/* hide counter in chapter reading page */
.reading-manga .reading-content .tptn_counter{display: none}
/* text-ui-light  */
body.text-ui-light {
  color: #888888;
  /* entry content */
}
body.text-ui-light.error404 {
  background-color: #262626;
}
body.text-ui-light a:not(:hover) {
  color: #cccccc;
}
body.text-ui-light .summary-content {
  color: #cccccc;
}
body.text-ui-light .widget.widget_tag_cloud .tag-cloud-link:not(:hover) {
  color: #333333;
}
body.text-ui-light h1,
body.text-ui-light h2,
body.text-ui-light h3,
body.text-ui-light h4,
body.text-ui-light h5,
body.text-ui-light .h1,
body.text-ui-light .h2,
body.text-ui-light .h3,
body.text-ui-light .h4,
body.text-ui-light .h5,
body.text-ui-light h6,
body.text-ui-light .h6 {
  color: #ffffff;
}

body.text-ui-light .modal-body h1,
body.text-ui-light .modal-body h2,
body.text-ui-light .modal-body h3,
body.text-ui-light .modal-body h4,
body.text-ui-light .modal-body h5,
body.text-ui-light .modal-body .h1,
body.text-ui-light .modal-body .h2,
body.text-ui-light .modal-body .h3,
body.text-ui-light .modal-body .h4,
body.text-ui-light .modal-body .h5,
body.text-ui-light .modal-body h6,
body.text-ui-light .modal-body .h6{}

body.text-ui-light input:not([type]),
body.text-ui-light input[type="color"],
body.text-ui-light input[type="email"],
body.text-ui-light input[type="number"],
body.text-ui-light input[type="password"],
body.text-ui-light input[type="tel"],
body.text-ui-light input[type="url"],
body.text-ui-light input[type="text"],
body.text-ui-light input[type="search"],
body.text-ui-light textarea,
body.text-ui-light select {
  background-color: rgba(235, 235, 235, 0.2);
  color: #f2f2f2;
}
body.text-ui-light select option {
  background-color: #fff;
  color: #333;
}
body.text-ui-light.modal-open .modal-dialog input[type="color"],
body.text-ui-light.modal-open .modal-dialog input[type="email"],
body.text-ui-light.modal-open .modal-dialog input[type="number"],
body.text-ui-light.modal-open .modal-dialog input[type="password"],
body.text-ui-light.modal-open .modal-dialog input[type="tel"],
body.text-ui-light.modal-open .modal-dialog input[type="url"],
body.text-ui-light.modal-open .modal-dialog input[type="text"],
body.text-ui-light.modal-open .modal-dialog input[type="search"] {
  color: #333;
}
body.text-ui-light.modal-open .modal-dialog input[type="color"]:focus,
body.text-ui-light.modal-open .modal-dialog input[type="email"]:focus,
body.text-ui-light.modal-open .modal-dialog input[type="number"]:focus,
body.text-ui-light.modal-open .modal-dialog input[type="password"]:focus,
body.text-ui-light.modal-open .modal-dialog input[type="tel"]:focus,
body.text-ui-light.modal-open .modal-dialog input[type="url"]:focus,
body.text-ui-light.modal-open .modal-dialog input[type="text"]:focus,
body.text-ui-light.modal-open .modal-dialog input[type="search"]:focus {
  color: #333;
}
body.text-ui-light .c-blog-post .entry-content {
  color: #888888;
}
body.text-ui-light.manga-page .summary__content:after,
body.text-ui-light.manga-page .version-chap:after {
  background: rgba(38, 38, 38, 0);
  background: -webkit-gradient(linear, left top, left bottom, from(rgba(38, 38, 38, 0)), to(#262626));
  background: -webkit-linear-gradient(top, rgba(38, 38, 38, 0), #262626);
  background: -moz-linear-gradient(top, rgba(38, 38, 38, 0), #262626);
  background: -ms-linear-gradient(top, rgba(38, 38, 38, 0), #262626);
  background: -o-linear-gradient(top, rgba(38, 38, 38, 0), #262626);
}
body.text-ui-light.manga-page .content-readmore:hover {
  color: #eb3349;
}
body.text-ui-light .site-header .c-header__top {
  background-color: #262626;
}
body.text-ui-light .site-header .c-header__top .search-main-menu {
  background-color: #262626;
}
body.text-ui-light .site-header .c-header__top .search-main-menu form input[type="text"]:hover,
body.text-ui-light .site-header .c-header__top .search-main-menu form input[type="text"]:active,
body.text-ui-light .site-header .c-header__top .search-main-menu form input[type="text"]:focus {
  background-color: #ffffff;
}
body.text-ui-light .body-wrap {
  background-color: #262626;
}
body.text-ui-light .c-sidebar.c-bottom-sidebar {
  border-top: none;
}
body.text-ui-light .site-footer {
  background-color: #363636;
  border-top: none;
  border-bottom: solid 10px #ffffff;
}
body.text-ui-light .site-footer .bottom-footer .nav-footer ul li + li {
  border-left-color: #cccccc;
}
body.text-ui-light.search input:not([type]),
body.text-ui-light.modal-open .modal-dialog input:not([type]),
body.text-ui-light.search input[type="color"],
body.text-ui-light.modal-open .modal-dialog input[type="color"],
body.text-ui-light.search input[type="email"],
body.text-ui-light.modal-open .modal-dialog input[type="email"],
body.text-ui-light.search input[type="number"],
body.text-ui-light.modal-open .modal-dialog input[type="number"],
body.text-ui-light.search input[type="password"],
body.text-ui-light.modal-open .modal-dialog input[type="password"],
body.text-ui-light.search input[type="tel"],
body.text-ui-light.modal-open .modal-dialog input[type="tel"],
body.text-ui-light.search input[type="url"],
body.text-ui-light.modal-open .modal-dialog input[type="url"],
body.text-ui-light.search input[type="text"],
body.text-ui-light.modal-open .modal-dialog input[type="text"],
body.text-ui-light.search input[type="search"],
body.text-ui-light.modal-open .modal-dialog input[type="search"],
body.text-ui-light.search textarea,
body.text-ui-light.modal-open .modal-dialog textarea,
body.text-ui-light.search select,
body.text-ui-light.modal-open .modal-dialog select {
  background-color: #ffffff;
}
body.text-ui-light .popular-slider .slider__container .slick-arrow {
  background-color: #363636;
}
body.text-ui-light .slick-dots li button:before {
  opacity: 1;
}
body.text-ui-light .manga-slider.style-2 .slider__container .slick-list .slick-track .slider__item .slider__thumb {
  background-color: #262626;
}
body.text-ui-light.manga-page .profile-manga .tab-summary .summary_image,
body.text-ui-light.manga-page .profile-manga .tab-summary .summary_content_wrap .summary_content {
  background-color: rgba(235, 235, 235, 0.3);
}
body.text-ui-light.manga-page .profile-manga .tab-summary .post-rating span {
  color: #ffffff;
}
body.text-ui-light .settings-page .tabs-content-wrap .tab-group-item .tab-item .show {
  color: #888888;
}
body.text-ui-light.search .c-search-header__wrapper #search-advanced .search-advanced-form .form-group.checkbox-group .checkbox label,
body.text-ui-light.search .c-search-header__wrapper #search-advanced .search-advanced-form .form-group:not(.checkbox-group) span,
body.text-ui-light.search .c-search-header__wrapper #search-advanced .search-advanced-form .form-group .checkbox-inline label,
body.text-ui-light.search .search-wrap .tab-content-wrap .c-tabs-item .c-tabs-item__content .tab-meta .rating .score {
  color: #fff;
}
#search-advanced select{max-width: 315px}
body.text-ui-light.search .search-wrap .tab-content-wrap .c-tabs-item .c-tabs-item__content .tab-summary .post-content {
  background-color: rgba(235, 235, 235, 0.2);
}
body.text-ui-light .navigation-ajax .load-ajax:not(:hover) {
  color: #333;
}
body.text-ui-light #login a:not(:hover),
body.text-ui-light #sign-up a:not(:hover),
body.text-ui-light #form-reset a:not(:hover) {
  color: #333;
}
body.text-ui-light .widget.background > .c-widget-wrap {
  background-color: rgba(235, 235, 235, 0.3);
}
body.text-ui-light .site-content .main-col .item-tags ul li a:not(:hover) {
  color: #333333;
}
body.text-ui-light .popular-slider .slider__container .slider__item .item__wrap {
  background-color: rgba(235, 235, 235, 0.2);
}

body.text-ui-light.search .c-search-header__wrapper .search-content .btn-search-adv:not(:hover) {
  color: #fff;
}
body.text-ui-light.search .search-wrap .tab-content-wrap .c-tabs-item .c-tabs-item__content .tab-summary .post-content .post-content_item .summary-heading h5 {
  color: #fff;
}
body.text-ui-light .c-btn.c-btn_style-3 {
  color: #ffffff;
  border: 2px solid #ffffff;
}
body.text-ui-light .c-btn.c-btn_style-3:hover {
  background: #ffffff;
  color: #333333;
}
body.text-ui-light .wp-pagenavi span,
body.text-ui-light .wp-pagenavi a.nextpostslink,
body.text-ui-light .wp-pagenavi a.previouspostslink {
  background-color: rgba(45, 45, 45, 0.3);
}
body.text-ui-light .wp-pagenavi span.current {
  color: #888888 !important;
}
body.text-ui-light .wpcf7-form label {
  color: #ccc;
}
body.text-ui-light .wpcf7-form .wpcf7-form-control:not(.wpcf7-submit) {
  background-color: #ebebeb;
  border: 1px solid #d7d7d7;
}
body.text-ui-light .wpcf7-form .wpcf7-form-control:not(.wpcf7-submit):hover {
  background-color: #fff;
}
body.text-ui-light #main-sidebar .search-main-menu form input[type="text"],
body.text-ui-light #main-sidebar .widget.widget_search input[type="search"] {
  border: 1px solid #d7d7d7;
}
body.text-ui-light #main-sidebar .widget_search input[type=submit] {
  border-left: 1px solid #d7d7d7;
}
body.text-ui-light.manga-page .content-readmore,
body.text-ui-light.manga-page .chapter-readmore {
  color: #cccccc;
}
body.text-ui-light.page .c-page-content .c-page .c-page__content .page-content-listing .page-listing-item .page-item-detail .item-summary .list-chapter .chapter-item a,
body.text-ui-light.page .c-page-content .c-page .c-page__content .page-content-listing .page-listing-item .page-item-detail .item-summary .rating .score {
  color: #cccccc;
}
body.text-ui-light .go-to-top {
  bottom: 11px;
  right: 11px;
}

body.text-ui-light .widget:not(.default):not(.background) > .c-widget-wrap,body.text-ui-light .widget.c-popular .popular-item-wrap, body.text-ui-light .widget .my-history .my-history-item-wrap{border-color: #7b7b7b}
body.text-ui-light #manga-filte-alphabeta-bar a{background-color: #7b7b7b}



@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(359deg);
    transform: rotate(359deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(359deg);
    transform: rotate(359deg);
  }
}
.no-results {
  text-align: center;
  height: 100vh;
  max-height: 490px;
  position: relative;
}
.no-results .results_content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.no-results .icon-not-found {
  margin-bottom: 11px;
}
.no-results .icon-not-found i {
  font-size: 100px;
  line-height: 1;
  color: #e6e6e6;
}
.no-results .not-found-content {
  font-size: 18px;
}
.wpcf7-submit {
  padding: 7px 25px;
  border: none;
  border-radius: 25px;
  font-weight: 600;
  color: #fff;
  background-color: #eb3349;
  -webkit-transition: background-color 200ms ease;
  -moz-transition: background-color 200ms ease;
  -o-transition: background-color 200ms ease;
  transition: background-color 200ms ease;
}
.wpcf7-submit:hover {
  background-color: #0f0f0f;
}
body.modal-open .modal .modal-content .modal-loading-screen {
  position: absolute;
  top: 0;
  left: 0;
  background: url(images/bg-search.jpg);
  right: 0;
  bottom: 0;
}
body.modal-open .modal .modal-content .modal-loading-screen .fa-5x {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
body.modal-open .modal .modal-content .modal-body .g-recaptcha {
  text-align: center;
  margin: 0 auto;
}
body.modal-open .modal .modal-content .modal-body .g-recaptcha > div {
  max-width: 100% !important;
  margin: 0 auto;
}
.settings-page .list-chapter {
  margin-top: 10px;
  margin-bottom: 10px;
}
.settings-page .list-chapter .chapter-item {
  margin-bottom: 10px;
}
.settings-page .list-chapter .chapter-item:last-child {
  margin-bottom: 0;
}
.settings-page .list-chapter .chapter-item span {
  display: inline-block;
  margin-right: 26px;
}
@media (max-width: 600px) {
  .settings-page .list-chapter .chapter-item span {
    margin-right: 15px;
  }
}
.settings-page .list-chapter .chapter-item span:last-child {
  margin-right: 0;
}
.settings-page .list-chapter .chapter-item .chapter {
  background-color: #ebebeb;
  padding: 4px 10px;
  border-radius: 10px;
  font-weight: 600;
  -webkit-transition: background-color 200ms ease;
  -moz-transition: background-color 200ms ease;
  -o-transition: background-color 200ms ease;
  transition: background-color 200ms ease;
}
.settings-page .list-chapter .chapter-item .chapter a {
  color: #666666;
}
.settings-page .list-chapter .chapter-item .chapter a:hover {
  color: #fff;
}
.settings-page .list-chapter .chapter-item .chapter:hover {
  background-color: #eb3349;
}
.settings-page .list-chapter .chapter-item .chapter:hover a {
  color: #fff;
}
.settings-page .list-chapter .chapter-item a {
  color: #333333;
  font-weight: 600;
}
.settings-page .list-chapter .chapter-item a:hover {
  color: #eb3349;
}
#manga-discussion .comment-selection-wrapper {
  float: right;
  position: relative;
}
#manga-discussion .comment-selection-wrapper .comment-selection {
  height: 30px;
  padding: 0px 25px 0px 15px;
  font-size: 14px;
  text-transform: uppercase;
  border-bottom: none;
  border: 2px solid #ebebeb;
  color: #969494;
  font-weight: 600;
}
#manga-discussion .comment-selection-wrapper:after {
  content: "\f0dd";
  position: absolute;
  top: 1px;
  right: 10px;
  font-family: Font Awesome\ 5 Free;
  font-weight: 900;
}
body.modal-open .modal.custom-modal .modal-content .modal-header .modal-title {
  text-align: center;
  font-size: 20px;
  text-transform: uppercase;
  padding: 23px 0px 2px 0px;
  width:100%; 
}
body.modal-open .modal.custom-modal .modal-content .modal-body {
  text-align: center;
  color: #333333;
  padding: 15px 30px 23px 30px;
}

body.modal-open .modal.custom-modal .modal-content .modal-body .manga-adult-title {
  font-weight: bold;
  font-size: 16px;
}
body.modal-open .modal.custom-modal .modal-content .modal-body .adult-confirm {
  margin-top: 6px;
  font-size: 18px;
  font-weight: bold;
}
body.modal-open .modal.custom-modal .modal-content .modal-footer {
  text-align: center;
  border: none;
  padding: 0px 0px 30px 0px;
  display: block;
}
body.modal-open .modal.custom-modal .modal-content .modal-footer .btn {
  padding: 12px 30px;
  border: none;
  border-radius: 25px;
  font-weight: 600;
  color: #333333;
  background-color: #fff;
  -webkit-transition: background-color 200ms ease;
  -moz-transition: background-color 200ms ease;
  -o-transition: background-color 200ms ease;
  transition: background-color 200ms ease;
}
body.modal-open .modal.custom-modal .modal-content .modal-footer .btn.btn-primary {
  background: var( --madara-main-color );
  color: #fff;
}
body.modal-open .modal.custom-modal .modal-content .modal-footer .btn:hover {
  color: #fff;
  background-color: #0f0f0f;
}
.adult-content .modal-backdrop.in, .modal-backdrop.show {
  opacity: 0.95;
}

.adult-content .modal-dialog.modal-dialog-centered{min-height: auto}
.adult-content .modal-dialog.modal-dialog-centered:before{content:''; height:0}

.adult-content.censored .main-col .c-page__content {
  opacity: 0.1;
}
.manga-title-badges {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  font-size: 8px;
  line-height: 26px;
  font-weight: 600;
  text-align: center;
  display: inline-block;
  float: left;
  margin-right: 7px;
  color: #fff;
  background-color:#000;
  -webkit-transform: rotate(-10deg);
  -moz-transform: rotate(-10deg);
  -ms-transform: rotate(-10deg);
  -o-transform: rotate(-10deg);
}
.badge-pos-2 .item-thumb a .manga-title-badges{position: absolute; left:0; top:0}
.badge-pos-2 .item-thumb a .manga-title-badges:nth-of-type(2){left:45px}
.manga-title-badges.hot {
  background-color: #eb3349;
}
.manga-title-badges.new {
  background-color: #37b7da;
}
.manga-title-badges.custom {
  background-color: #eb3349;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -ms-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  width: auto;
  height: auto;
  border-radius: 2px;
  padding: 10px 8px 10px 8px;
  text-transform: uppercase;
  line-height: 5px;
  font-size: 10px;
}
/**
 * :: Madara Wordpress Core
 * -------------------------------------------------- */
/* 2.0  Wordpress CSS
----------------------------------------------------------*/
.gallery-caption {
  font-size: inherit;
}
.bypostauthor {
  font-size: inherit;
}
.alignleft {
  float: left;
  margin: 15px 40px 26px 0;
}
.alignright {
  float: right;
  margin: 15px 0 26px 40px;
}
.aligncenter {
  text-align: center;
  margin: 0 auto 26px;
}
.alignnone {
  margin-bottom: 40px;
}
.wp-caption {
  max-width: 100%;
  margin-bottom: 1.5em;
}
.wp-caption img[class*="wp-image-"] {
  display: block;
  margin: 0 auto;
}
.wp-caption-text {
  font-style: italic;
  color: #999;
}
.aligncenter .wp-caption-text {
  text-align: center;
}
.text-right {
  text-align: right;
}
.postleft {
  float: left;
  margin: 0 20px 0 0;
}
.postright {
  float: none;
}
br.nc {
  display: none;
}
.screen-reader-text {
  clip: rect(1px, 1px, 1px, 1px);
  position: absolute !important;
  height: 1px;
  width: 1px;
  overflow: hidden;
}
@media (max-width: 480px) {
  .wp-caption.alignleft {
    float: none;
    text-align: center;
    margin: 0 auto 26px;
  }
  .wp-caption.alignright {
    float: none;
    text-align: center;
    margin: 0 auto 26px;
  }
}
/* Empty */
.main-navigation .main-menu {
  padding: 10px 0;
}
.main-navigation .main-menu ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.main-navigation .main-menu ul:before,
.main-navigation .main-menu ul:after {
  content: " ";
  display: table;
}
.main-navigation .main-menu ul:after {
  clear: both;
}
@media screen and (max-width: 600px) {
  .main-navigation .main-menu ul .main-navigation ul {
    display: none;
  }
}
.main-navigation .main-menu ul li {
  float: left;
  position: relative;
}
.main-navigation .main-menu ul li a {
  display: block;
  text-decoration: none;
  padding: 10px 20px 9px;
  color: #333333;
  font-weight: 600;
}
.main-navigation .main-menu ul li:hover > ul {
  opacity: 1;
  visibility: visible;
  z-index: 9999;
  pointer-events: auto;
}
.main-navigation .main-menu ul li:hover > a {
  background-color: #f3f3f3;
}
.main-navigation .main-menu ul ul.children,
.main-navigation .main-menu ul ul.sub-menu {
  -webkit-box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
  display: block;
  float: left;
  left: 0;
  position: absolute;
  border-radius: 0px;
  z-index: -1;
  background-color: #fff;
  opacity: 0;
  visibility: hidden;
  -webkit-transition: all 0.2s;
  -moz-transition: all 0.2s;
  -o-transition: all 0.2s;
  transition: all 0.2s;
  min-width: 200px;
  margin-top: 8px;
  pointer-events: none;
}
.main-navigation .main-menu ul ul.children:before,
.main-navigation .main-menu ul ul.sub-menu:before {
  content: "";
  height: 8px;
  width: 100%;
  position: absolute;
  top: -8px;
}
.main-navigation .main-menu ul ul.children > li,
.main-navigation .main-menu ul ul.sub-menu > li {
  width: 100%;
  border-bottom: 1px solid #e1e1e1;
}
.main-navigation .main-menu ul ul.children > li:last-child,
.main-navigation .main-menu ul ul.sub-menu > li:last-child {
  border-bottom: none;
}
.main-navigation .main-menu ul ul.children > li > a,
.main-navigation .main-menu ul ul.sub-menu > li > a {
  -webkit-transition: 0.2s;
  -moz-transition: 0.2s;
  -o-transition: 0.2s;
  transition: 0.2s;
}
.main-navigation .main-menu ul ul.children > li > a:focus,
.main-navigation .main-menu ul ul.sub-menu > li > a:focus {
  color: var( --madara-main-color );
}
.main-navigation .main-menu ul ul.children ul,
.main-navigation .main-menu ul ul.sub-menu ul {
  left: 100%;
  top: -8px;
}
.main-navigation .main-menu ul ul.children a,
.main-navigation .main-menu ul ul.sub-menu a {
  white-space: normal;
}
.main-navigation .main-menu ul ul.children a:after,
.main-navigation .main-menu ul ul.sub-menu a:after {
  content: none;
}
/* Empty */
#comments.comments-area h3.comments-title,
#comments.comments-area h3.comment-reply-title {
  font-size: 14px;
  margin-bottom: 20px;
}
#comments.comments-area ol.comment-list {
  list-style: none;
  margin: 0;
}
#comments.comments-area ol.comment-list li.comment {
  background: none;
  position: relative;
}
#comments.comments-area ol.comment-list li.comment article.comment-body {
  margin-bottom: 30px;
  padding: 30px;
}
#comments.comments-area ol.comment-list li.comment article.comment-body footer.comment-meta {
  padding-bottom: 20px;
}
#comments.comments-area ol.comment-list li.comment article.comment-body footer.comment-meta * {
  display: inline-block;
}
#comments.comments-area ol.comment-list li.comment article.comment-body footer.comment-meta .comment-author {
  margin-right: 10px;
}
#comments.comments-area ol.comment-list li.comment article.comment-body footer.comment-meta .comment-author .avatar {
  border-radius: 50%;
  margin-right: 10px;
}
#comments.comments-area ol.comment-list li.comment article.comment-body footer.comment-meta .comment-author .says {
  display: none;
}
#comments.comments-area ol.comment-list li.comment article.comment-body footer.comment-meta .comment-metadata a time:before {
  margin-right: 6px;
}
#comments.comments-area ol.comment-list li.comment article.comment-body div.comment-content {
  word-wrap: break-word;
}
#comments.comments-area ol.comment-list li.comment article.comment-body div.comment-content p {
  margin-bottom: 0px;
}
#comments.comments-area ol.comment-list li.comment article.comment-body div.reply {
  position: absolute;
  top: 20px;
  right: 30px;
}
#comments.comments-area ol.comment-list li.comment article.comment-body div.reply a.comment-reply-link:after {
  margin-left: 10px;
}
#comments.comments-area ol.comment-list li.comment ol.children {
  list-style: none;
  padding-left: 40px;
}
#comments.comments-area ol.comment-list li.pingback .comment-body .block-left {
  display: none;
}
#comments.comments-area #respond.comment-respond {
  margin-bottom: 30px;
}
#comments.comments-area #respond.comment-respond .comment-form {
  display: block;
}
#comments.comments-area #respond.comment-respond .comment-form label {
  margin-bottom: 10px;
}
#comments.comments-area #respond.comment-respond .comment-form .comment-form-comment {
  margin-bottom: 10px;
}
#comments.comments-area #respond.comment-respond .comment-form .comment-form-comment textarea {
  width: 100%;
}
.gallery {
  margin-bottom: 1.6em;
}
.gallery:before,
.gallery:after {
  content: " ";
  display: table;
}
.gallery:after {
  clear: both;
}
.gallery figure.gallery-item {
  display: inline-block;
  text-align: center;
  vertical-align: top;
  width: 100%;
  padding: 1.79104477%;
}
.gallery figure.gallery-item img {
  margin-bottom: 0;
}
.gallery.gallery-columns-2 .gallery-item {
  max-width: 50%;
}
.gallery.gallery-columns-3 .gallery-item {
  max-width: 33.33%;
}
.gallery.gallery-columns-4 .gallery-item {
  max-width: 25%;
}
.gallery.gallery-columns-5 .gallery-item {
  max-width: 20%;
}
.gallery.gallery-columns-6 .gallery-item {
  max-width: 16.66%;
}
@media only screen and (max-width: 991px) {
  .gallery.gallery-columns-6 .gallery-item {
    max-width: 20%;
  }
}
.gallery.gallery-columns-6 .gallery-caption {
  display: none;
}
.gallery.gallery-columns-7 .gallery-item {
  max-width: 14.28%;
}
@media only screen and (max-width: 991px) {
  .gallery.gallery-columns-7 .gallery-item {
    max-width: 20%;
  }
}
.gallery.gallery-columns-7 .gallery-caption {
  display: none;
}
.gallery.gallery-columns-8 .gallery-item {
  max-width: 12.5%;
}
@media only screen and (max-width: 991px) {
  .gallery.gallery-columns-8 .gallery-item {
    max-width: 20%;
  }
}
.gallery.gallery-columns-8 .gallery-caption {
  display: none;
}
.gallery.gallery-columns-9 .gallery-item {
  max-width: 11.11%;
}
@media only screen and (max-width: 991px) {
  .gallery.gallery-columns-9 .gallery-item {
    max-width: 20%;
  }
}
.gallery.gallery-columns-9 .gallery-caption {
  display: none;
}
@media only screen and (max-width: 767px) {
  .gallery[id^="gallery-"] .gallery-item {
    max-width: 100%;
  }
}
.widget {
  margin: 0 0 3em;
}
.widget label {
  width: 100%;
}
.widget label.screen-reader-text {
  display: none;
}
.widget ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.widget select {
  width: 100%;
}
.widget table#wp-calendar {
  width: 100%;
}
.widget table#wp-calendar > thead > tr > td,
.widget table#wp-calendar tbody > tr > td,
.widget table#wp-calendar tfoot > tr > td,
.widget table#wp-calendar > thead > tr > th,
.widget table#wp-calendar tbody > tr > th,
.widget table#wp-calendar tfoot > tr > th {
  font-size: 14px;
  text-align: center;
}
.widget h4.widget-title {
  margin-top: -7px;
  margin-bottom: 15px;
  line-height: 1.5625;
  color: #333333;
}
.widget.widget_calendar table caption {
  margin-bottom: 10px;
}
.widget.widget_calendar table tfoot tr td {
  padding: 0;
}
.widget.widget_recent_comments ul li a:before {
  display: none;
}
.widget.widget_recent_entries ul li span {
  padding-left: 15px;
}
.widget.widget_rss ul li a.rsswidget {
  padding: 0;
  font-weight: 600;
}
.widget.widget_rss ul li a.rsswidget:before {
  display: none;
}
.widget.widget_rss ul li span.rss-date {
  display: block;
  padding: 10px 0;
}
.widget.widget_rss ul li .rssSummary {
  font-size: 14px;
  line-height: 1.5625;
}
/* Empty */
/* 3.0  Elements Basic
----------------------------------------------------------*/
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
*:before,
*:after {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
html {
  overflow: visible;
  overflow-y: scroll;
}
body {
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  /*change content font size*/
  line-height: 1.5;
  color: #888888;
  /*#666666*/
  -webkit-font-smoothing: antialiased !important;
  -moz-osx-font-smoothing: grayscale !important;
}
.sub-lineheight {
  line-height: 1.45;
}
.wrap {
  position: relative;
  overflow: hidden;
}
.body-wrap {
  position: relative;
  margin-left: auto;
  margin-right: auto;
}
a {
  color: #333333;
}
a:focus,
.btn:focus,
input:focus,
button:focus {
  outline: 0;
}
figure {
  margin: 0;
}
input:not([type]),
input[type="color"],
input[type="email"],
input[type="number"],
input[type="password"],
input[type="tel"],
input[type="url"],
input[type="text"],
input[type="search"],
textarea,
select {
  -webkit-appearance: none;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  box-shadow: none;
  -webkit-box-shadow: none;
  display: block;
  width: 100%;
  padding: 10px 15px 10px 15px;
  outline: none;
  font-weight: normal;
  border: 1px solid rgba(45, 45, 45, 0.3);
  background-color: transparent;
  color: #333333;
}
input:not([type]):focus,
input[type="color"]:focus,
input[type="email"]:focus,
input[type="number"]:focus,
input[type="password"]:focus,
input[type="tel"]:focus,
input[type="url"]:focus,
input[type="text"]:focus,
input[type="search"]:focus,
textarea:focus,
select:focus,
input:not([type]):hover,
input[type="color"]:hover,
input[type="email"]:hover,
input[type="number"]:hover,
input[type="password"]:hover,
input[type="tel"]:hover,
input[type="url"]:hover,
input[type="text"]:hover,
input[type="search"]:hover,
textarea:hover,
select:hover {
  outline: 0;
  box-shadow: none;
  -webkit-box-shadow: none;
  border-color: #cccccc;
  background-color: rgba(235, 235, 235, 0.3);
}
input::-moz-placeholder {
  color: #999999;
  opacity: 1;
}
input:-ms-input-placeholder {
  color: #999999;
  opacity: 1;
}
input::-webkit-input-placeholder {
  color: #999999;
  opacity: 1;
}
input:focus::-moz-placeholder {
  color: #999999;
  opacity: 1;
}
input:focus:-ms-input-placeholder {
  color: #999999;
  opacity: 1;
}
input:focus::-webkit-input-placeholder {
  color: #999999;
  opacity: 1;
}
textarea:focus::-moz-placeholder {
  color: #999999;
  opacity: 1;
}
textarea:focus:-ms-input-placeholder {
  color: #999999;
  opacity: 1;
}
textarea:focus::-webkit-input-placeholder {
  color: #999999;
  opacity: 1;
}
table:not(#wp-calendar):not(.shop_table) {
  width: 100%;
  max-width: 100%;
  margin-bottom: 20px;
}
table:not(#wp-calendar):not(.shop_table) > thead > tr > th,
table:not(#wp-calendar):not(.shop_table) > tbody > tr > th,
table:not(#wp-calendar):not(.shop_table) > tfoot > tr > th,
table:not(#wp-calendar):not(.shop_table) > thead > tr td,
table:not(#wp-calendar):not(.shop_table) > tbody > tr td,
table:not(#wp-calendar):not(.shop_table) > tfoot > tr td {
  padding: 8px;
  line-height: 1.42857143;
  vertical-align: top;
  border-top: 1px solid #ddd;
}
table:not(#wp-calendar):not(.shop_table) > tbody > tr {
  -webkit-transition: background-color 0.3s;
  -moz-transition: background-color 0.3s;
  -o-transition: background-color 0.3s;
  transition: background-color 0.3s;
}
table:not(#wp-calendar):not(.shop_table) > tbody > tr:hover {
  background-color: #f3f3f3;
}
table:not(#wp-calendar):not(.shop_table) > thead > tr > th {
  vertical-align: bottom;
  border-bottom: 2px solid #ddd;
}
table:not(#wp-calendar):not(.shop_table) > thead:first-child > tr:first-child > td,
table:not(#wp-calendar):not(.shop_table) > thead:first-child > tr:first-child > th {
  border-top: none;
}
/*Reset Slick Library*/
.slick-slide:focus {
  outline: none;
}
.clearer {
  clear: both;
}
.slider__container {
  display: none;
}
.slider__container.slick-initialized {
  display: block;
  -webkit-animation: eFadeIn .3s;
  animation: eFadeIn .3s;
}
/*Reset Slick Library*/
/* Layout & Style
----------------------------------------------------------*/
/*font nav, header,main color , layout (full, boxed...), */
.c-page-content .main-col:not(.sidebar-hidden) {
  width: calc(100% - 350px);
}
@media (max-width: 1200px) {
  .c-page-content .main-col:not(.sidebar-hidden) {
    width: calc(100% - 330px);
  }
}
@media (max-width: 768px) {
  .c-page-content .main-col:not(.sidebar-hidden) {
    width: 100%;
  }
}
.c-page-content .sidebar-col {
  width: 350px;
  padding-left: 35px;
}
@media (max-width: 1200px) {
  .c-page-content .sidebar-col {
    width: 330px;
    padding-left: 15px;
  }
}
@media (max-width: 768px) {
  .c-page-content .sidebar-col {
    width: 100%;
  }
}
.c-page-content .row.sidebar-left > .main-col {
  float: right;
}
.c-page-content .row.sidebar-left > .sidebar-col {
  float: left;
  padding-right: 35px;
  padding-left: 15px;
}
@media (max-width: 1200px) {
  .c-page-content .row.sidebar-left > .sidebar-col {
    width: 330px;
    padding-right: 15px;
  }
}
.paging-navigation {
  margin-top: 38px;
}
.paging-navigation:after {
  display: table;
  content: "";
  clear: both;
}
h1,
h2,
h3,
h4,
h5,
.h1,
.h2,
.h3,
.h4,
.h5 {
  font-weight: 600;
  line-height: 1.2;
  color: #333333;
}
h1,
.h1 {
  font-size: 34px;
}
h2,
.h2 {
  font-size: 30px;
}
h3,
.h3 {
  font-size: 24px;
}
h4,
.h4 {
  font-size: 18px;
}
h5,
.h5 {
  font-size: 16px;
}
h6,
.h6 {
  line-height: 1.2;
  color: #333333;
  font-size: 14px;
}
.font-heading {
  text-transform: uppercase;
}
.font-meta {
  font-size: 11px;
  line-height: 1.5;
}
.font-title a {
  font-weight: 600;
  color: #333333;
}
.font-title a:hover {
  text-decoration: none;
}
.font-nav a:hover {
  text-decoration: none;
}
.main-col-inner {
  padding-bottom: 50px;
}
.main-col-inner:after {
  content: "";
  display: table;
  clear: both;
}
.c-blog__heading {
  width: 100%;
}
.c-blog__heading.style-1 {
  border-bottom: 1px solid #e1e1e1;
  margin-bottom: 30px;
}
.c-blog__heading.style-2 {
  border-bottom: 2px solid #ebebeb;
  margin-bottom: 35px;
}
.c-blog__heading.style-2 > * {
  display: inline-block;
  vertical-align: middle;
}
.c-blog__heading.style-2 i {
  font-size: 18px;
  width: 30px;
  height: 30px;
  background: #eb3349;
  /* For browsers that do not support gradients */
  background: -webkit-linear-gradient(left, #eb3349 40%, #f45c43);
  /* For Safari 5.1 to 6.0 */
  background: -o-linear-gradient(right, #eb3349 40%, #f45c43);
  /* For Opera 11.1 to 12.0 */
  background: -moz-linear-gradient(right, #eb3349 40%, #f45c43);
  /* For Firefox 3.6 to 15 */
  background: linear-gradient(to right, #eb3349 40%, #f45c43);
  /* Standard syntax */
  color: #fff;
  position: relative;
  margin-right: 16px;
  margin-bottom: -2px;
  vertical-align: middle;
  display: inline-block;
}
.c-blog__heading.style-2 i:before {
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.c-blog__heading.style-2 i:after {
  content: "";
  width: 0;
  height: 0;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-left: 5px solid #f45c43;
  position: absolute;
  left: 100%;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -moz-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  -o-transform: translateY(-50%);
  transform: translateY(-50%);
}
.c-blog__heading.style-2 h2 {
  margin: 0;
}
.c-blog__heading.style-2 > *:not(i):not(h2) {
  margin: 0;
}
.c-blog__heading.background {
  border-bottom: none;
}
.c-blog__heading.style-3 {
  width: auto;
  display: inline-block;
  background: #eb3349;
  /* For browsers that do not support gradients */
  background: -webkit-linear-gradient(left, #eb3349 40%, #f45c43);
  /* For Safari 5.1 to 6.0 */
  background: -o-linear-gradient(right, #eb3349 40%, #f45c43);
  /* For Opera 11.1 to 12.0 */
  background: -moz-linear-gradient(right, #eb3349 40%, #f45c43);
  /* For Firefox 3.6 to 15 */
  background: linear-gradient(to right, #eb3349 40%, #f45c43);
  /* Standard syntax */
  color: #fff;
  padding: 0 20px;
  margin-bottom: 26px;
  position: relative;
  text-transform: uppercase;
  font-weight: 600;
}
.c-blog__heading.style-3 h5 {
  color: #fff;
  font-size: 14px;
  margin: 7px 0;
}
.c-blog__heading.style-3:after {
  content: "";
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 10px solid #ef4447;
  position: absolute;
  top: 100%;
  left: 15px;
}
.c-blog__heading.no-border {
  border: none;
}
.c-blog__heading.no-border.style-2 i {
  margin-bottom: 0;
}
.tab-wrap > * {
  display: inline-block;
}
.tab-wrap .c-blog__heading i {
  vertical-align: middle;
}
@media (max-width: 768px) {
  .tab-wrap .c-blog__heading h4 {
    display: block;
  }
}
.tab-wrap .c-nav-tabs {
  float: right;
}
@media (max-width: 768px) {
  .tab-wrap .c-nav-tabs {
    float: left;
  }
}
.tab-wrap .c-nav-tabs > * {
  display: inline-block;
  vertical-align: top;
}
.tab-wrap .c-nav-tabs span {
  padding: 8px 10px 9px;
  text-transform: none;
}
@media (max-width: 768px) {
  .tab-wrap .c-nav-tabs > span {
    display: none;
  }
}
.tab-wrap .c-nav-tabs ul.c-tabs-content {
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}
.tab-wrap .c-nav-tabs ul.c-tabs-content li {
  float: left;
  position: relative;
  display: block;
}
.tab-wrap .c-nav-tabs ul.c-tabs-content li a {
  padding: 8px 10px 9px;
  position: relative;
  text-transform: none;
  color: #888888;
  display: block;
}
.tab-wrap .c-nav-tabs ul.c-tabs-content li a:after {
  -webkit-transition: opacity 200ms ease;
  -moz-transition: opacity 200ms ease;
  -o-transition: opacity 200ms ease;
  transition: opacity 200ms ease;
  content: "";
  height: 3px;
  width: 100%;
  background-color: #ec3948;
  position: absolute;
  top: 100%;
  left: 0;
  opacity: 0;
}
.tab-wrap .c-nav-tabs ul.c-tabs-content li.active a,
.tab-wrap .c-nav-tabs ul.c-tabs-content li:hover a {
  background-color: transparent;
  color: #ec3948;
}
.tab-wrap .c-nav-tabs ul.c-tabs-content li.active a:after,
.tab-wrap .c-nav-tabs ul.c-tabs-content li:hover a:after {
  opacity: 1;
}
.tab-wrap .c-nav-tabs ul.c-tabs-content li.active:hover a {
  pointer-events: none;
}
.tab-wrap .c-blog__heading {
  margin-bottom: 0;
}
.tab-wrap .c-blog__heading h4 {
  margin-top: 10px;
}
.tab-content-wrap {
  margin-top: 32px;
}
.tab-content-wrap .c-tabs-item {
  display: block;
  height: auto;
}
.tab-content-wrap .c-tabs-item .page-content-listing {
  margin-top: 32px !important;
}
.tab-content-wrap .c-tabs-item .post-title h5 {
  font-size: 14px;
  margin-top: 0;
  margin-bottom: 3px;
  line-height: 1.6em;
}
.tab-content-wrap .c-tabs-item .post-title h5 a:last-child {
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  /* fallback */
  max-height: calc( 3.2em );
  /* fallback */
}
.tab-content-wrap .c-tabs-item.active.in {
  display: block;
  height: auto;
}
.c-btn {
  display: inline-block;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  border-radius: 5px;
  font-weight: 600;
  margin: 9px 8px 8px 9px;
}
.c-btn.c-btn_style-1 {
  padding: 15px 40px;
  border: none;
  color: #fff;
  -webkit-transition: all 200ms ease;
  -moz-transition: all 200ms ease;
  -o-transition: all 200ms ease;
  transition: all 200ms ease;
  background-color: #eb3349;
}
.c-btn.c-btn_style-1:hover {
  color: #fff;
  background-color: #0f0f0f;
}
.c-btn.c-btn_style-2 {
  padding: 12px 38px;
  border: 3px solid #eb3349;
  color: #eb3349;
  background-color: transparent;
  -webkit-transition: all 200ms ease;
  -moz-transition: all 200ms ease;
  -o-transition: all 200ms ease;
  transition: all 200ms ease;
}
.c-btn.c-btn_style-2:hover {
  background-color: #0f0f0f;
  border-color: #0f0f0f;
  color: #fff;
}
.c-btn.c-btn_style-3 {
  padding: 12px 25px;
  border: 2px solid #666;
  border-radius: 25px;
  font-weight: 600;
  color: #666;
}
.c-btn.c-btn_style-3:hover {
  background-color: #0f0f0f;
  border-color: #0f0f0f;
  color: #ffffff;
}
a {
  -webkit-transition: color 200ms ease, background-color 200ms ease;
  -moz-transition: color 200ms ease, background-color 200ms ease;
  -o-transition: color 200ms ease, background-color 200ms ease;
  transition: color 200ms ease, background-color 200ms ease;
}
a:hover {
  text-decoration: none;
  color: #eb3349;
}
.item-title,
.widget-title .heading,
.comment-reply-title,
.comments-title {
  color: #333333;
}
script {
  display: none !important;
}
.meta-item.rating .ratings_stars {
  color: #d2d2d2;
}
.meta-item.rating .rating_current,
.meta-item.rating .rating_current_half {
  color: #ffd900;
}
.count-share.hide-networks .apss-single-icon {
  display: none;
}
.go-to-top {
  cursor: pointer;
  width: 32px;
  height: 32px;
  background-color: rgba(0, 0, 0, 0.7);
  color: #999;
  font-size: 20px;
  text-align: center;
  position: fixed;
  bottom: 10px;
  z-index: 10;
  line-height: 1.4;
  -moz-transition: all 0.2s;
  -o-transition: all 0.2s;
  transition: all 0.2s;
  -webkit-transition: all 0.2s;
  right: 10px;
  right: -ms-calc(-594.5%);
  -webkit-transform: translateY(-60%);
  -moz-transform: translateY(-60%);
  -ms-transform: translateY(-60%);
  -o-transform: translateY(-60%);
  visibility: hidden;
  opacity: 0;
}
.go-to-top i {
  font-size: 18px;
  line-height: 1.9;
}
.go-to-top:hover {
  background-color: #eb3349;
}
.go-to-top:hover i {
  color: #ffffff;
}
.go-to-top.active {
  -webkit-transform: translateY(0);
  -moz-transform: translateY(0);
  -ms-transform: translateY(0);
  -o-transform: translateY(0);
  visibility: visible;
  opacity: 1;
  z-index: 1001;
}
.c-ads {
  text-align: center;
}
.c-ads.body-top-ads {
  margin: 0px auto 35px;
}
.c-ads.body-bottom-ads {
  margin: 0px auto 50px;
}
.c-ads.footer-ads {
  margin: 0px auto 60px;
}
body.reading-manga .c-ads.body-bottom-ads {
  margin: 50px auto 50px;
}
body.reading-manga .comments-area {
  margin-bottom: 45px;
}
body.reading-manga .related-manga {
  margin-bottom: 24px;
}
@media (max-width: 480px) {
  .c-ads {
    text-align: center;
  }
  .c-ads.body-top-ads {
    margin: 0px auto 10px;
  }
  .c-ads.body-bottom-ads {
    margin: 0px auto 35px;
  }
  .c-ads.footer-ads {
    margin: 0px auto 35px;
  }
  body.reading-manga .c-ads.body-bottom-ads {
    margin: 10px auto 30px;
  }
  body.reading-manga .comments-area {
    margin-bottom: 45px;
  }
  body.reading-manga .related-manga {
    margin-bottom: 24px;
  }
}
.c-image-hover {
  overflow: hidden;
}
.c-image-hover img {
  -webkit-transition: transform 0.5s, filter 0.5s;
  -moz-transition: transform 0.5s, filter 0.5s;
  -o-transition: transform 0.5s, filter 0.5s;
  transition: transform 0.5s, filter 0.5s;
}
.c-image-hover:hover img {
  -webkit-transform: scale(1.1);
  -moz-transform: scale(1.1);
  -ms-transform: scale(1.1);
  -o-transform: scale(1.1);
  zoom: 1;
  -webkit-filter: brightness(0.7);
  filter: brightness(0.7);
}
/*animation for lazyload*/
@keyframes fadeForLazyload {
  0% {
    opacity: 0.3;
  }
  100% {
    opacity: 1;
  }
}
@-webkit-keyframes fadeForLazyload {
  0% {
    opacity: 0.3;
  }
  100% {
    opacity: 1;
  }
}
img.lazyload,
img.lazyloading {
  height: 0 !important;
  overflow: hidden !important;
  background-color: #f5f5f5;
}
img.lazyloaded {
  padding-top: 0 !important;
  background-color: #f5f5f5;
}
.effect-fade.lazyloaded {
  animation: fadeForLazyload 0.5s linear;
  -webkit-animation: fadeForLazyload 0.5s linear;
}
/*animation for lazyload*/
#pageloader .spinner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
#pageloader .spinner .c-pre-loading-logo {
  margin-bottom: 25%;
}
#pageloader .spinner .loader-inner {
  display: inline-block;
}
.wpcf7-form label {
  width: 100%;
}
.wpcf7-form .wpcf7-form-control:not(.wpcf7-submit) {
  background-color: transparent;
  box-shadow: none;
  border: 1px solid rgba(45, 45, 45, 0.3);
  border-radius: 5px;
  max-width: 100%;
  margin-top: 5px;
  padding: 8px 15px;
}
.wpcf7-form .wpcf7-form-control:not(.wpcf7-submit):hover {
  background-color: rgba(235, 235, 235, 0.3);
}
.wpcf7-form .wpcf7-validation-errors {
  border-color: #eb3349;
}
/*11.0 - Wall Ads*/
.wall-ads-control {
  position: fixed;
  z-index: 9;
}
.wall-ads-left {
  left: calc((100% - 1220px) / 2 + 40px);
  left: -webkit-calc((100% - 1220px) / 2 + 40px);
  left: -ms-calc((100% - 1220px) / 2 + 40px);
  left: -moz-calc((100% - 1220px) / 2 + 40px);
  transform: translateX(-100%);
  -webkit-transform: translateX(-100%);
  -ms-transform: translateX(-100%);
  top: 210px;
}
.wall-ads-left {
  left: calc((100% - 1182px) / 2);
  left: -webkit-calc((100% - 1182px) / 2);
  left: -ms-calc((100% - 1182px) / 2);
  left: -moz-calc((100% - 1182px) / 2);
}
.wall-ads-right {
  right: calc((100% - 1220px) / 2 + 40px);
  right: -webkit-calc((100% - 1220px) / 2 + 40px);
  right: -ms-calc((100% - 1220px) / 2 + 40px);
  right: -moz-calc((100% - 1220px) / 2 + 40px);
  transform: translateX(100%);
  -webkit-transform: translateX(100%);
  -ms-transform: translateX(100%);
  top: 210px;
}
.wall-ads-right {
  right: calc((100% - 1182px) / 2);
  right: -webkit-calc((100% - 1182px) / 2);
  right: -ms-calc((100% - 1182px) / 2);
  right: -moz-calc((100% - 1182px) / 2);
}
@media (max-width: 1366px) {
  .wall-ads-left {
    left: calc((100% - 1180px) / 2 + 20px);
    left: -webkit-calc((100% - 1180px) / 2 + 20px);
    left: -ms-calc((100% - 1180px) / 2 + 20px);
    left: -moz-calc((100% - 1180px) / 2 + 20px);
  }
  .wall-ads-right {
    right: calc((100% - 1180px) / 2 + 20px);
    right: -webkit-calc((100% - 1180px) / 2 + 20px);
    right: -ms-calc((100% - 1180px) / 2 + 20px);
    right: -moz-calc((100% - 1180px) / 2 + 20px);
  }
}
@media (max-width: 1199px) {
  .wall-ads-left {
    left: calc((100% - 980px) / 2);
    left: -webkit-calc((100% - 980px) / 2);
    left: -ms-calc((100% - 980px) / 2);
    left: -moz-calc((100% - 980px) / 2);
  }
  .wall-ads-right {
    right: calc((100% - 980px) / 2);
    right: -webkit-calc((100% - 980px) / 2);
    right: -ms-calc((100% - 980px) / 2);
    right: -moz-calc((100% - 980px) / 2);
  }
}
@media (max-width: 1280px) {
  .wall-ads-left,
  .wall-ads-right {
    display: none;
  }
}
/*End - 11.0 - Wall Ads*/
/**
 * :: Header
* -------------------------------------------------- */
.site-header .search-main-menu {
  list-style: none;
  padding: 0;
  position: relative;
  opacity: 0;
  visibility: hidden;
  height: 0;
  transform-origin: top;
  -webkit-transform-origin: top;
  transition: height 0.2s, visibility 0.2s, opacity 0.2s, transform 0s 0.2s;
  -webkit-transition: height 0.2s, visibility 0.2s, opacity 0.2s, -webkit-transform 0s 0.2s;
  -webkit-animation-duration: 0.2s;
  animation-duration: 0.2s;
  top: 100%;
  padding-top: 0;
  margin-bottom: 0;
  z-index: 1;
}
.site-header .search-main-menu li {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  -o-transform: translateY(-50%);
  transform: translateY(-50%);
  text-align: center;
}
.site-header .search-main-menu form {
  max-width: 780px;
  margin: auto;
  padding: 0 15px;
  position: relative;
  height: 50px;
  display: inline-block;
  width: 100%;
}
.site-header .search-main-menu form *::-webkit-input-placeholder {
  color: #fff;
}
.site-header .search-main-menu form *:-moz-placeholder {
  /* FF 4-18 */
  color: #fff;
}
.site-header .search-main-menu form *::-moz-placeholder {
  /* FF 19+ */
  color: #fff;
}
.site-header .search-main-menu form *:-ms-input-placeholder {
  /* IE 10+ */
  color: #fff;
}
.site-header .search-main-menu form input[type="text"] {
  font-weight: normal;
  color: #fff;
}
.site-header .search-main-menu form i.ion-ios-search-strong {
  color: #333;
}
.site-header .search-main-menu form *::-webkit-input-placeholder {
  color: #666666;
}
.site-header .search-main-menu form *:-moz-placeholder {
  /* FF 4-18 */
  color: #666666;
}
.site-header .search-main-menu form *::-moz-placeholder {
  /* FF 19+ */
  color: #666666;
}
.site-header .search-main-menu form *:-ms-input-placeholder {
  /* IE 10+ */
  color: #666666;
}
.site-header .search-main-menu form input[type="text"] {
  background-color: #ebebeb;
  border: 1px solid #d7d7d7;
  color: #333;
  padding: 13px 115px 13px 15px;
  height: 100%;
  border-radius: 0;
  -webkit-transition: background-color 200ms ease;
  -moz-transition: background-color 200ms ease;
  -o-transition: background-color 200ms ease;
  transition: background-color 200ms ease;
}
.site-header .search-main-menu form input[type="text"]:hover,
.site-header .search-main-menu form input[type="text"]:active {
  background-color: rgba(235, 235, 235, 0.3);
}
.site-header .search-main-menu form input[type=submit] {
  position: absolute;
  top: 0;
  right: 15px;
  bottom: 0;
  background: #eb3349;
  border: none;
  font-weight: 600;
  color: #fff;
  padding: 13px 25px;
  border-radius: 0;
  -webkit-transition: background-color 200ms ease;
  -moz-transition: background-color 200ms ease;
  -o-transition: background-color 200ms ease;
  transition: background-color 200ms ease;
  line-height: 1.5;
}
.site-header .search-main-menu form input[type=submit]:hover {
  background: #0f0f0f;
}
.site-header .search-main-menu.active {
  opacity: 1;
  visibility: visible;
  height: 128px;
}
@media (max-width: 480px) {
  .site-header .search-main-menu.active {
    height: 90px;
  }
}
.site-header .main-navigation {
  position: relative;
  font-size: 0;
}
.site-header .main-navigation .main-navigation_wrap {
  padding: 35px 0;
}
.site-header .main-navigation .main-navigation_wrap > * {
  font-size: 14px;
  display: inline-block;
  vertical-align: middle;
}
@media (max-width: 600px) {
  .site-header .main-navigation .main-navigation_wrap {
    padding: 5px 0;
  }
}
.site-header .main-navigation .main-menu {
  padding: 0;
}
.site-header .main-navigation .main-menu ul.main-navbar > li > a {
  font-weight: 600;
  padding: 13px 20px;
}
.site-header .main-navigation .main-menu ul.main-navbar > li > a:before {
  content: "";
  height: 2px;
  width: 0%;
  background: rgba(255, 255, 255, 0.5);
  display: block;
  position: absolute;
  bottom: 6px;
  left: 50%;
  transform: translateX(-50%);
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
}
.site-header .main-navigation .main-menu ul.main-navbar > li:hover > a:before {
  width: 50%;
}
.site-header .main-navigation .search-navigation.search-sidebar .widget {
  margin-bottom: 0;
  padding-right: 0;
}
.site-header .main-navigation .search-navigation ul {
  list-style: none;
  padding-left: 0;
}
.site-header .main-navigation .search-navigation .main-menu-search {
  margin-bottom: 0;
}
.site-header .main-navigation .search-navigation .menu-search .open-search-main-menu {
  font-size: 21px;
  width: 35px;
  height: 35px;
  display: inline-block;
  background-color: #fff;
  -webkit-transition: background-color 150s ease;
  -moz-transition: background-color 150s ease;
  -o-transition: background-color 150s ease;
  transition: background-color 150s ease;
  -webkit-transition: color 150ms ease-out;
  -moz-transition: color 150ms ease-out;
  -o-transition: color 150ms ease-out;
  transition: color 150ms ease-out;
  text-align: center;
  border-radius: 50%;
  line-height: 36px;
  color: #eb3349;
}
.site-header .main-navigation .search-navigation .menu-search .open-search-main-menu i:before {
  font-weight: 700;
}
.site-header .main-navigation .search-navigation .menu-search .open-search-main-menu:hover {
  background-color: #000000;
  color: #fff;
}
.site-header .main-navigation .search-navigation .menu-search .search-main-menu {
  display: none;
}
.site-header .main-navigation .search-navigation .menu-search .search-main-menu form {
  width: 282px;
  position: relative;
}
@media (max-width: 1200px) {
  .site-header .main-navigation .search-navigation .menu-search .search-main-menu form {
    width: 220px;
  }
}
.site-header .main-navigation .search-navigation .menu-search .search-main-menu form input[type="text"] {
  width: 100%;
  height: 38px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 5px;
  padding: 0 45px 0 15px;
  background-color: transparent;
}
.site-header .main-navigation .search-navigation .menu-search .search-main-menu form input[type="text"]:focus {
  outline: none;
}
.site-header .main-navigation .search-navigation .menu-search .search-main-menu form i {
  position: absolute;
  right: 10px;
  top: 4px;
  font-size: 24px;
}
.site-header .main-navigation .search-navigation .menu-search .search-main-menu form input[type=submit] {
  position: absolute;
  top: 5px;
  right: 0;
  font-size: 0;
  background-color: transparent;
  border: none;
  padding: 14px 19px;
  border-left: 1px solid rgba(255, 255, 255, 0.3);
}
.site-header .main-navigation.style-1 {
  background: #eb3349;
  /* For browsers that do not support gradients */
  background: -webkit-linear-gradient(left, #eb3349 40%, #f45c43);
  /* For Safari 5.1 to 6.0 */
  background: -o-linear-gradient(right, #eb3349 40%, #f45c43);
  /* For Opera 11.1 to 12.0 */
  background: -moz-linear-gradient(right, #eb3349 40%, #f45c43);
  /* For Firefox 3.6 to 15 */
  background: linear-gradient(to right, #eb3349 40%, #f45c43);
  /* Standard syntax */
}
.site-header .main-navigation.style-1 .wrap_branding {
  width: 25%;
}
.site-header .main-navigation.style-1 .wrap_branding a img {
  max-width: 232px;
}
@media (max-width: 768px) {
  .site-header .main-navigation.style-1 .wrap_branding {
    width: 40%;
  }
}
@media (max-width: 480px) {
  body.reading-manga .site-header .main-navigation.style-1 .wrap_branding {
    width: 30%;
  }
  body.reading-manga .site-header .main-navigation .search-navigation .menu-search .open-search-main-menu{width:30px;height:30px;line-height:30px; font-size:21px;margin-top:3px}
  .site-header .main-navigation.style-1 .c-togle__menu{
	  position: absolute;
    right: 10px;
    top: 50%;
	margin-top: -16px;
  }
}
.site-header .main-navigation.style-1 .main-menu {
  width: 60%;
}
@media (max-width: 600px) {
  .site-header .main-navigation.style-1 .main-menu {
    width: 40%;
  }
}
.site-header .main-navigation.style-1 .search-navigation {
  width: 15%;
}
.site-header .main-navigation.style-1 .search-navigation .search-navigation__wrap {
  display: table;
  width: 100%;
}
@media (max-width: 1200px) {
  .site-header .main-navigation.style-1 .search-navigation .search-navigation__wrap {
    text-align: right;
  }
}
@media (max-width: 480px) {
  .site-header .main-navigation.style-1 .search-navigation .search-navigation__wrap {
    text-align: center;
  }
  .site-header .main-navigation.style-1 .wrap_branding a img {
	  max-height: 60px;
	}
  
}
.site-header .main-navigation.style-1 .search-navigation .search-navigation__wrap > * {
  display: table-cell;
  vertical-align: middle;
}
@media (max-width: 1200px) {
  .site-header .main-navigation.style-1 .search-navigation .search-navigation__wrap > * {
    display: inline-block;
  }
}
.site-header .main-navigation.style-1 .search-navigation .search-navigation__wrap .main-menu-search {
  text-align: right;
}
.site-header .main-navigation.style-1 .search-navigation .search-navigation__wrap .main-menu-search .menu-search a.open-search-main-menu .ion-android-close {
  display: none;
}
.site-header .main-navigation.style-1 .search-navigation .search-navigation__wrap .main-menu-search .menu-search a.open-search-main-menu.search-open .ion-android-close {
  display: block;
}
.site-header .main-navigation.style-1 .search-navigation .search-navigation__wrap .main-menu-search .menu-search a.open-search-main-menu.search-open .ion-ios-search-strong {
  display: none;
}
@media (max-width: 992px) {
  .site-header .main-navigation.style-1 .search-navigation .search-navigation__wrap .main-menu-search {
    margin-bottom: 0;
  }
}
@media (max-width: 600px) {
}
.site-header .main-navigation.style-1 .search-navigation .search-navigation__wrap .link-adv-search {
  text-align: right;
  padding-left: 15px;
}
.site-header .main-navigation.style-1 .search-navigation .search-navigation__wrap .link-adv-search a {
  color: #fff;
  font-weight: 600;
}

@media (max-width: 992px) {
  .site-header .main-navigation.style-1 .search-navigation {
    width: 65%;
  }
}
@media (max-width: 768px) {
  .site-header .main-navigation.style-1 .search-navigation {
    width: 50%;
  }
}

.site-header .main-navigation.style-1 .c-togle__menu {
  text-align: right;
  width: 10%;
  display: none;
}
@media (max-width: 992px) {
  .site-header .main-navigation.style-1 .c-togle__menu {
    display: inline-block;
  }
}
.site-header .c-sub-header-nav {
  background-color: #ffffff;
}
.site-header .c-sub-header-nav.with-border {
  border-bottom: 1px solid #ebebeb;
}
.site-header .c-sub-header-nav .c-sub-nav_wrap {
  font-size: 0;
  padding: 7px 0 6px;
  position: relative;
}
@media (max-width: 480px) {
  .site-header .main-navigation.style-1 .search-navigation .search-navigation__wrap .link-adv-search {
    display: none;
  }
  .site-header .main-navigation.style-1 .search-navigation {
    width: 20%;
	position: absolute;
    right: 44px;
    top: 50%;
	margin-top: -18px;
  }
  .site-header .c-sub-header-nav .c-sub-nav_wrap{padding-top:0;padding-bottom:0}
}
.site-header .c-sub-header-nav .c-sub-nav_wrap:after {
  display: table;
  content: "";
  clear: both;
}
.site-header .c-sub-header-nav .c-sub-nav_wrap > * {
  display: inline-block;
  font-size: 14px;
  vertical-align: middle;
}
.site-header .c-sub-header-nav .c-sub-nav_wrap .sub-nav_content {
  width: 75%;
}
.site-header .c-sub-header-nav .c-sub-nav_wrap .sub-nav_content .sub-nav_list {
  margin: 0 -18px;
}
.site-header .c-sub-header-nav .c-sub-nav_wrap .sub-nav_content .sub-nav_list .mobile-icon {
  display: none;
}
.site-header .c-sub-header-nav .c-sub-nav_wrap .sub-nav_content .sub-nav_list li .sub-menu {
  display: block;
  float: left;
  left: 0;
  position: absolute;
  border-radius: 0px;
  z-index: 9999;
  height: 0;
  opacity: 0;
  visibility: hidden;
  -webkit-transition: all 0.2s;
  -moz-transition: all 0.2s;
  -o-transition: all 0.2s;
  transition: all 0.2s;
  pointer-events: none;
  padding: 0;
  margin-top: 6px;
  list-style: none;
}
.site-header .c-sub-header-nav .c-sub-nav_wrap .sub-nav_content .sub-nav_list li .sub-menu:before {
  content: "";
  background-color: transparent;
  width: 100%;
  height: 20px;
  bottom: 100%;
  display: block;
  position: absolute;
  left: 0;
}
.site-header .c-sub-header-nav .c-sub-nav_wrap .sub-nav_content .sub-nav_list li .sub-menu .sub-menu {
  top: 100%;
  -webkit-box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
  min-width: 200px;
  margin-top: 19px;
}
.site-header .c-sub-header-nav .c-sub-nav_wrap .sub-nav_content .sub-nav_list li .sub-menu .sub-menu a {
  background-color: #fff;
}
.site-header .c-sub-header-nav .c-sub-nav_wrap .sub-nav_content .sub-nav_list li .sub-menu .sub-menu li {
  border-bottom: 1px solid #e1e1e1;
}
.site-header .c-sub-header-nav .c-sub-nav_wrap .sub-nav_content .sub-nav_list li .sub-menu .sub-menu li:last-child {
  border-bottom: none;
}
.site-header .c-sub-header-nav .c-sub-nav_wrap .sub-nav_content .sub-nav_list li .sub-menu .sub-menu li:hover > a {
  background-color: #f3f3f3;
}
.site-header .c-sub-header-nav .c-sub-nav_wrap .sub-nav_content .sub-nav_list li .sub-menu .sub-menu .sub-menu {
  left: 100%;
  top: 0;
  margin-top: 0;
}
.site-header .c-sub-header-nav .c-sub-nav_wrap .sub-nav_content .sub-nav_list li .sub-menu a {
  padding: 7px 20px;
}
.site-header .c-sub-header-nav .c-sub-nav_wrap .sub-nav_content .sub-nav_list li a {
  font-weight: 600;
  color: #666;
  text-transform: uppercase;
  padding: 13px;
  display: block;
}
@media (max-width: 768px) {
  .site-header .c-sub-header-nav .c-sub-nav_wrap .sub-nav_content .sub-nav_list li a {
    padding: 5px 15px;
  }
}
.site-header .c-sub-header-nav .c-sub-nav_wrap .sub-nav_content .sub-nav_list li.menu-item-has-children {
  position: relative;
}
.site-header .c-sub-header-nav .c-sub-nav_wrap .sub-nav_content .sub-nav_list li.menu-item-has-children > a {
  position: relative;
}
.site-header .c-sub-header-nav .c-sub-nav_wrap .sub-nav_content .sub-nav_list li.menu-item-has-children > a:after {
  content: "\f357";
  display: inline-block;
  font-family: "Ionicons";
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  text-rendering: auto;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-left: 10px;
}
.site-header .c-sub-header-nav .c-sub-nav_wrap .sub-nav_content .sub-nav_list li.menu-item-has-children:hover > .sub-menu,
.site-header .c-sub-header-nav .c-sub-nav_wrap .sub-nav_content .sub-nav_list li.menu-item-has-children.active > .sub-menu {
  opacity: 1;
  visibility: visible;
  height: auto;
  z-index: 9999;
  pointer-events: auto;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
}
.site-header .c-sub-header-nav .c-sub-nav_wrap .sub-nav_content .sub-nav_list li.menu-item-has-children.active > a {
  color: #eb3349;
}
.site-header .c-sub-header-nav .c-sub-nav_wrap .sub-nav_content .sub-nav_list li:hover > a {
  color: #eb3349;
}
.site-header .c-sub-header-nav .c-sub-nav_wrap .sub-nav_content .sub-nav_list > li.menu-item-has-children {
  position: static;
}
.site-header .c-sub-header-nav .c-sub-nav_wrap .sub-nav_content .sub-nav_list > li.menu-item-has-children > ul.sub-menu {
  background-color: #f3f3f3;
  /* ul first */
  width: 100%;
  left: 0;
  right: 0;
  list-style: none;
  padding: 17px 10px;
  border-bottom: 3px solid #eb3349;
  border-top: 1px solid #ebebeb;
  -webkit-transition: all 0s;
  -moz-transition: all 0s;
  -o-transition: all 0s;
  transition: all 0s;
}
.site-header .c-sub-header-nav .c-sub-nav_wrap .sub-nav_content .sub-nav_list > li.menu-item-has-children > ul.sub-menu > li {
  display: inline-block;
}

.site-header .c-sub-header-nav .c-sub-nav_wrap .c-modal_item {
  text-align: right;
  width: 25%;
}
.site-header .c-sub-header-nav .c-sub-nav_wrap .c-modal_item .btn-active-modal {
  color: #666;
  font-weight: 600;
  display: inline-block;
  padding: 5px 15px;
  border: 2px solid #666;
  border-radius: 30px;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
}
@media (max-width: 992px) {
  .site-header .c-sub-header-nav .c-sub-nav_wrap .c-modal_item .btn-active-modal {
    margin-top: 5px;
    margin-bottom: 5px;
  }
}
.site-header .c-sub-header-nav .c-sub-nav_wrap .c-modal_item .btn-active-modal:focus {
  outline: none;
}
.site-header .c-sub-header-nav .c-sub-nav_wrap .c-modal_item .btn-active-modal:hover {
  cursor: pointer;
  background-color: #0f0f0f;
  border-color: #0f0f0f;
  color: #fff;
}
.site-header .c-sub-header-nav .c-sub-nav_wrap .c-modal_item .c-user_item > * {
  display: inline-block;
  vertical-align: middle;
}
.site-header .c-sub-header-nav .c-sub-nav_wrap .c-modal_item .c-user_item span {
  margin-right: 10px;
  color: #666;
}
.site-header .c-sub-header-nav .c-sub-nav_wrap .c-modal_item .c-user_item .c-user_avatar {
  position: relative;
}
.site-header .c-sub-header-nav .c-sub-nav_wrap .c-modal_item .c-user_item .c-user_avatar .c-user_avatar-image img {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 2px solid #d7d7d7;
}
.site-header .c-sub-header-nav .c-sub-nav_wrap .c-modal_item .c-user_item .c-user_avatar .c-user_avatar-image .c-user_notify {
  background: #ef3e47;
  color: #fff;
  width: 14px;
  height: 14px;
  border-radius: 7px;
  font-size: 10px;
  text-align: center;
  position: absolute;
  top: -1px;
  right: -1px;
  line-height: 14px;
}
.site-header .c-sub-header-nav .c-sub-nav_wrap .c-modal_item .c-user_item .c-user_menu {
  opacity: 0;
  visibility: hidden;
  position: absolute;
  list-style: none;
  padding: 0;
  background-color: #f3f3f3;
  min-width: 150px;
  max-width: 250px;
  text-align: left;
  top: 100%;
  margin-top: 12px;
  right: 0;
  padding: 10px;
  z-index: 9999;
  border-bottom: 3px solid #eb3349;
  border-top: 1px solid #ebebeb;
  white-space: nowrap;
}
.site-header .c-sub-header-nav .c-sub-nav_wrap .c-modal_item .c-user_item .c-user_menu:after {
  display: block;
  width: 100%;
  content: "";
  height: 15px;
  background-color: transparent;
  position: absolute;
  top: -15px;
  left: 50%;
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  -o-transform: translateX(-50%);
  transform: translateX(-50%);
}
.site-header .c-sub-header-nav .c-sub-nav_wrap .c-modal_item .c-user_item .c-user_menu a {
  display: block;
  padding: 5px 10px;
  color: #666;
  -webkit-transition: all 0.2s;
  -moz-transition: all 0.2s;
  -o-transition: all 0.2s;
  transition: all 0.2s;
  font-weight: 600;
  position: relative;
}
.site-header .c-sub-header-nav .c-sub-nav_wrap .c-modal_item .c-user_item .c-user_menu a:hover {
  color: #eb3349;
}
.site-header .c-sub-header-nav .c-sub-nav_wrap .c-modal_item .c-user_item .c-user_avatar:hover {
  cursor: pointer;
}
.site-header .c-sub-header-nav .c-sub-nav_wrap .c-modal_item .c-user_item .c-user_avatar:hover .c-user_menu {
  visibility: visible;
  opacity: 1;
  -webkit-transition: opacity 0.3s;
  -moz-transition: opacity 0.3s;
  -o-transition: opacity 0.3s;
  transition: opacity 0.3s;
}
@media (max-width: 992px) {
  .site-header .c-sub-header-nav .c-sub-nav_wrap .c-modal_item .c-user_item {
    text-align: center;
  }
  .site-header .c-sub-header-nav .c-sub-nav_wrap .c-modal_item .c-user_item span {
    margin: 0 10px;
  }
}
@media (max-width: 768px) {
  .site-header .c-sub-header-nav .c-sub-nav_wrap .c-modal_item .c-user_item {
    text-align: right;
  }
}
@media (max-width: 992px) {
  .site-header .c-sub-header-nav .c-sub-nav_wrap .c-modal_item {
    width: 20%;
  }
}
@media (max-width: 768px) {
  .site-header .c-sub-header-nav .c-sub-nav_wrap .c-modal_item {
    display: none;
  }
}
body.modal-open {
  padding-right: 0 !important;
  width: 100%;
}
body.modal-open .modal {
  padding-right: 0 !important;
}
body.modal-open .modal .modal-dialog {
  background-image: url(images/bg-search.jpg);
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
@media (max-width: 768px) {
  body.modal-open .modal .modal-dialog {
    width: 90%;
    max-width: 400px;
    margin: auto;
  }
}
body.modal-open .modal .modal-content {
  background-color: transparent;
  border: 3px solid #fff;
  border-radius: 0;
}
body.modal-open .modal .modal-content .modal-header,
body.modal-open .modal .modal-content .modal-footer {
  padding: 0;
  border-bottom: none;
}
body.modal-open .modal .modal-content .modal-header .close,
body.modal-open .modal .modal-content .modal-footer .close {
  margin-top: 0;
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 9;
  font-size: 35px;
}
body.modal-open .modal .modal-content .modal-header .close:focus,
body.modal-open .modal .modal-content .modal-footer .close:focus {
  outline: none;
}
body.modal-open .modal .modal-content .modal-body .login:not(.message) {
  padding: 0 125px;
}
@media (max-width: 768px) {
  body.modal-open .modal .modal-content .modal-body .login:not(.message) {
    padding: 0 15px;
  }
}
body.modal-open .modal .modal-content .message {
  color: #ff0000;
}
@media (max-width: 768px) {
  body.modal-open .modal .modal-content .modal-body .login {
    padding: 0 15px;
  }
}
body.modal-open .modal .modal-content .modal-body .login h3 {
  text-align: center;
  font-size: 20px;
  text-transform: uppercase;
}
body.modal-open .modal .modal-content .modal-body .login .submit {
  float: left;
}
body.modal-open .modal .modal-content .modal-body .login .submit .wp-submit {
  padding: 12px 30px;
  border: none;
  border-radius: 25px;
  font-weight: 600;
  color: #fff;
  background-color: #eb3349;
  -webkit-transition: background-color 200ms ease;
  -moz-transition: background-color 200ms ease;
  -o-transition: background-color 200ms ease;
  transition: background-color 200ms ease;
}
body.modal-open .modal .modal-content .modal-body .login .submit .wp-submit:hover {
  color: #fff;
  background-color: #0f0f0f;
}
body.modal-open .modal .modal-content .modal-body .login .submit .wp-submit[disabled] {
  background-color: #adadad;
}
body.modal-open .modal .modal-content .modal-body .login label {
  width: 100%;
  max-width: 315px;
  text-align: left;
  color: #333;
  font-weight: 600;
  margin-bottom: 14px;
}
body.modal-open .modal .modal-content .modal-body .login label[for=user_pass] {
  margin-bottom: 20px;
}
body.modal-open .modal .modal-content .modal-body .login label[for="rememberme"] {
  font-weight: normal;
}
@media (max-width: 600px) {
  body.modal-open .modal .modal-content .modal-body .login label {
    margin-bottom: 0;
  }
  body.modal-open .modal .modal-content .modal-body .login label[for=user_pass] {
    margin-bottom: 0;
  }
}
body.modal-open .modal .modal-content .modal-body .login p.nav {
  margin-top: 5px;
}
body.modal-open .modal .modal-content .modal-body .login input[type="text"],
body.modal-open .modal .modal-content .modal-body .login input[type="email"],
body.modal-open .modal .modal-content .modal-body .login input[type="url"],
body.modal-open .modal .modal-content .modal-body .login input[type="password"],
body.modal-open .modal .modal-content .modal-body .login input[type="search"] {
  width: 100%;
  padding: 13px 15px;
  border: 1px solid #e1e1e1;
  border-radius: 5px;
  margin-top: 14px;
  background-color: #ffffff;
}
body.modal-open .modal .modal-content .modal-body .login input[type="text"]:focus,
body.modal-open .modal .modal-content .modal-body .login input[type="email"]:focus,
body.modal-open .modal .modal-content .modal-body .login input[type="url"]:focus,
body.modal-open .modal .modal-content .modal-body .login input[type="password"]:focus,
body.modal-open .modal .modal-content .modal-body .login input[type="search"]:focus {
  outline: none;
}
body.modal-open .modal .modal-content .modal-body .login #loginform {
  font-size: 0;
}
body.modal-open .modal .modal-content .modal-body .login #loginform > * {
  font-size: 14px;
}
body.modal-open .modal .modal-content .modal-body .login #loginform:after {
  display: table;
  clear: both;
  content: "";
}
body.modal-open .modal .modal-content .modal-body .login #loginform input[type=checkbox] {
  display: inline-block;
}
body.modal-open .modal .modal-content .modal-body .login #loginform .forgetmenot,
body.modal-open .modal .modal-content .modal-body .login #loginform .submit {
  display: inline-block;
  width: 50%;
}
@media (max-width: 600px) {
  body.modal-open .modal .modal-content .modal-body .login #loginform .forgetmenot,
  body.modal-open .modal .modal-content .modal-body .login #loginform .submit {
    width: 100%;
  }
}
body.modal-open .modal .modal-content .modal-body .login #loginform .forgetmenot {
  float: right;
  margin-top: 10px;
}
@media (max-width: 600px) {
  body.modal-open .modal .modal-content .modal-body .login #loginform .forgetmenot {
    margin-top: 0;
  }
}
body.modal-open .modal .modal-content .modal-body .login #loginform .forgetmenot #rememberme {
  display: inline-block;
  margin-top: -1px;
  vertical-align: middle;
  margin-right: 10px;
}
body.modal-open .modal .modal-content .modal-body .login #registerform:after {
  display: table;
  clear: both;
  content: "";
}
body.modal-open .modal .modal-content .modal-body .login #resetform:after {
  display: table;
  clear: both;
  content: "";
}
.off-canvas {
  background: #eb3349;
  /* For browsers that do not support gradients */
  background: -webkit-linear-gradient(left, #eb3349 40%, #f45c43);
  /* For Safari 5.1 to 6.0 */
  background: -o-linear-gradient(right, #eb3349 40%, #f45c43);
  /* For Opera 11.1 to 12.0 */
  background: -moz-linear-gradient(right, #eb3349 40%, #f45c43);
  /* For Firefox 3.6 to 15 */
  background: linear-gradient(to right, #eb3349 40%, #f45c43);
  /* Standard syntax */
  position: fixed;
  width: 300px;
  top: 0;
  left: -300px;
  right: auto;
  height: 100%;
  z-index: 10000;
  -webkit-transition: left 0.3s ease-in-out;
  -moz-transition: left 0.3s ease-in-out;
  -o-transition: left 0.3s ease-in-out;
  transition: left 0.3s ease-in-out;
}
.off-canvas .c-user_item {
  text-align: center;
}
.off-canvas .c-user_avatar-image img {
  border-radius: 50%;
  max-width: 80px;
  max-height: 80px;
}
.off-canvas .c-user_name {
  font-size: 14px;
  color: #fff;
  margin-top: 7px;
  display: block;
  font-weight: 500;
}
.off-canvas .c-modal_item {
  text-align: center;
  display: block;
}
.off-canvas .c-modal_item span {
  display: block;
}
.off-canvas .c-modal_item a {
  display: inline-block;
  color: #fff;
  font-weight: 600;
  padding: 5px 20px;
  border: 2px solid #fff;
  border-radius: 30px;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
}
.off-canvas .c-modal_item a:hover,
.off-canvas .c-modal_item a:active,
.off-canvas .c-modal_item a:focus {
  cursor: pointer;
  background-color: #0f0f0f;
  border-color: #0f0f0f;
  color: #fff;
}
.off-canvas .c-modal_item .c-modal_sign-up {
  margin-top: 10px;
}
@media (max-width: 600px) {
  .off-canvas {
    width: 260px;
    left: -260px;
  }
}
.off-canvas nav.off-menu {
  overflow-y: auto;
  max-height: calc(100vh - 235px);
}
@media (max-width: 782px) {
  .off-canvas nav.off-menu {
    max-height: calc(100vh - 249px);
  }
}
@media (max-width: 782px) {
  .off-canvas nav.off-menu {
    max-height: calc(100vh - 229px);
  }
}
@media (max-width: 600px) {
  .off-canvas nav.off-menu {
    max-height: calc(100vh - 190px);
  }
}
.off-canvas.active {
  left: 0;
}
.off-canvas .close-nav {
  height: 58px;
  width: 100%;
  cursor: pointer;
  position: relative;
  margin-bottom: 5px;
  margin-top: 40px;
  float: none;
  text-align: center;
}
@media (max-width: 768px) {
  .off-canvas .close-nav {
    margin-top: 25px;
    height: 40px;
    margin-bottom: 18px;
  }
}
.off-canvas .close-nav > .menu_icon__close {
  float: none;
  margin: 0 auto;
  display: block;
  background: transparent;
  border: none;
  outline: 0;
  overflow: hidden;
  margin-top: 10px;
}
.off-canvas .close-nav > .menu_icon__close > span:first-child,
.off-canvas .close-nav > .menu_icon__close > span:last-child {
  display: block;
  background-color: #fff;
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  -webkit-transition: transform 0.2s;
  -moz-transition: transform 0.2s;
  -o-transition: transform 0.2s;
  transition: transform 0.2s;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -ms-backface-visibility: hidden;
  backface-visibility: hidden;
}
.off-canvas .close-nav > .menu_icon__close > span:first-child {
  height: 1px;
  width: 30px;
  margin-left: 0;
  margin-top: 16px;
}
.off-canvas .close-nav > .menu_icon__close > span:last-child {
  height: 30px;
  width: 1px;
  margin-left: 14px;
  margin-top: -16px;
}
.off-canvas .close-nav > .menu_icon__close:hover > span:first-child,
.off-canvas .close-nav > .menu_icon__close:hover > span:last-child {
  -webkit-transform: rotate(135deg);
  -moz-transform: rotate(135deg);
  -ms-transform: rotate(135deg);
  -o-transform: rotate(135deg);
}
.off-canvas ul {
  width: 100%;
  list-style: none;
  margin: 0;
  padding: 0 50px;
}
@media (max-width: 768px) {
  .off-canvas ul {
    padding: 0 30px;
  }
}
.off-canvas ul.main-navbar li.menu-item-has-children > i.fa {
  position: absolute;
  top: 15px;
  left: -17px;
  cursor: pointer;
  color: #fff;
  height: 40px;
  width: 40px;
  text-align: center;
  font-size: 16px;
  line-height: 40px;
}
.off-canvas ul.main-navbar li.menu-item-has-children > i.fa:before {
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -ms-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -ms-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  display: inline-block;
  -webkit-transition: all 0.2s ease-out;
  -moz-transition: all 0.2s ease-out;
  -o-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
}
.off-canvas ul.main-navbar li.menu-item-has-children.active {
  padding-bottom: 15px;
  -webkit-transition: padding-bottom 0.3s;
  -moz-transition: padding-bottom 0.3s;
  -o-transition: padding-bottom 0.3s;
  transition: padding-bottom 0.3s;
}
.off-canvas ul.main-navbar li.menu-item-has-children.active > a {
  padding-bottom: 10px;
}
.off-canvas ul.main-navbar li.menu-item-has-children.active > i.fa:before {
  -webkit-transform: rotate(90deg);
  -moz-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  -o-transform: rotate(90deg);
}
.off-canvas ul.main-navbar li.menu-item-has-children > a {
  padding-left: 18px;
}
.off-canvas ul.main-navbar ul.dropdown-menu {
  -webkit-animation-duration: 0.2s;
  animation-duration: 0.2s;
  display: none;
  position: initial;
  width: 100%;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  background-clip: initial;
  border: none;
  padding: 0;
  background-color: transparent;
  min-width: inherit;
}
.off-canvas ul.main-navbar ul.dropdown-menu li {
  padding: 0;
}
.off-canvas ul.main-navbar ul.dropdown-menu li a {
  padding-top: 10px;
  padding-bottom: 10px;
}
.off-canvas ul.main-navbar ul.dropdown-menu li.menu-item-has-children {
  padding-bottom: 0;
}
.off-canvas ul.main-navbar ul.dropdown-menu li.menu-item-has-children i {
  top: 0;
}
.off-canvas ul.main-navbar li {
  float: none;
  position: relative;
  padding: 26px 0 24px;
}
.off-canvas ul.main-navbar li > ul {
  display: none;
}
.off-canvas ul.main-navbar li:after {
  display: table;
  content: "";
  clear: both;
}
.off-canvas ul.main-navbar li a {
  position: relative;
  background-color: transparent !important;
  color: #fff;
  letter-spacing: normal;
  display: block;
  text-decoration: none;
  text-transform: uppercase;
  white-space: inherit;
  padding: 0;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}
.off-canvas ul.main-navbar li a:after {
  content: none;
}
.off-canvas ul.main-navbar li a:hover {
  color: #ccc;
}
.off-canvas ul.main-navbar > li {
  border-bottom: 1px solid rgba(250, 247, 250, 0.3);
}
.off-canvas ul.main-navbar > li:first-of-type {
  box-shadow: none;
}
.off-canvas ul.main-navbar > li > ul.sub-menu {
  padding-left: 18px;
}
.off-canvas ul.main-navbar > li.menu-item-has-children > .sub-menu {
  padding-top: 10px;
}
.off-canvas > ul > li:nth-child(1) > a {
  border-bottom-color: transparent;
}
body .wrap:after {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: -1;
  opacity: 0;
  -webkit-transition: opacity 0.3s;
  -moz-transition: opacity 0.3s;
  -o-transition: opacity 0.3s;
  transition: opacity 0.3s;
  z-index: 999;
  pointer-events: none;
}
body.open_canvas .wrap:after {
  opacity: 1;
}
.menu_icon__open {
  display: inline-block;
  margin: 5px 0px;
  background: transparent;
  border: none;
  outline: 0;
  padding: 0;
}
.menu_icon__open > span {
  display: block;
  width: 30px;
  height: 2px;
  background-color: #ffffff;
  margin-bottom: 8px;
  -webkit-transition: opacity 0.05s 0.25s, transform 0.2s 0.25s ease-out;
  -o-transition: opacity 0.05s 0.25s, transform 0.2s 0.25s ease-out;
  transition: opacity 0.05s 0.25s, transform 0.2s 0.25s ease-out;
  -webkit-transform-origin: left;
  -moz-transform-origin: left;
  -ms-transform-origin: left;
  -o-transform-origin: left;
  transform-origin: left;
  pointer-events: none;
}
.menu_icon__open > span:last-child {
  margin-bottom: 0;
}
.menu_icon__open.active {
  pointer-events: none;
}
.menu_icon__open.active > span {
  opacity: 0;
  transition: opacity 0.05s 0s, transform 0.2s 0s ease-out;
  -webkit-transition: opacity 0.05s 0s, -webkit-transform 0.2s 0s ease-out;
}
.menu_icon__open.active > span:first-child {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  opacity: 1;
}
.menu_icon__open.active > span:last-child {
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  opacity: 1;
}
/**
 * :: Navigation
 * -------------------------------------------------- */
.main-navigation .main-menu {
  padding: 18px 0 17px;
}
.main-navigation .main-menu ul li > a {
  font-size: 14px;
}
@media (max-width: 1199px) {
  .main-navigation .main-menu ul li > a {
    padding: 18px 25px 14px;
  }
}
.main-navigation .main-menu ul li.menu-item-has-children > a:after {
  content: "\f3d0";
  display: inline-block;
  font-family: "Ionicons";
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  text-rendering: auto;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-left: 10px;
}
.main-navigation .main-menu ul.main-navbar > li > a {
  background: transparent;
  color: #fff;
}
@media (max-width: 992px) {
  .main-navigation .main-menu {
    display: none !important;
  }
}
.site-header .c-sub-header-nav {
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -ms-backface-visibility: hidden;
  backface-visibility: hidden;
  z-index: 99;
}
.site-header .c-sub-header-nav.sticky {
  -webkit-animation: eFadeIn .3s;
  animation: eFadeIn .3s;
  position: fixed !important;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 1000;
  -webkit-box-shadow: 0px 1px 0px 0px rgba(184, 184, 184, 0.4);
  box-shadow: 0px 1px 0px 0px rgba(184, 184, 184, 0.4);
}
body.admin-bar .off-canvas {
  top: 32px;
  height: calc(100% - 32px);
}
@media (max-width: 782px) {
  body.admin-bar .off-canvas {
    top: 46px;
    height: calc(100% - 46px);
  }
}
@media (max-width: 600px) {
  body.admin-bar .off-canvas {
    top: 0;
    z-index: 100000;
    height: 100%;
  }
}
body.admin-bar.sticky__active .c-sub-header-nav.sticky {
  top: 32px;
}
@media (max-width: 782px) {
  body.admin-bar.sticky__active .c-sub-header-nav.sticky {
    top: 46px;
  }
}
@media (max-width: 600px) {
  body.admin-bar.sticky__active .c-sub-header-nav.sticky {
    top: 0;
  }
}
@-webkit-keyframes eFadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes eFadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
/**
 * :: Pages
 * -------------------------------------------------- */
body.page .c-page-content .content-area {
  margin-top: 50px;
}
body.page .c-page-content .main-col-inner .entry-header .entry-title {
  border-bottom: 1px solid #ebebeb;
}
body.page .c-page-content .main-col-inner .entry-header .entry-title .item-title {
  margin-top: 0;
}
body.page .c-page-content .main-col-inner .c-blog__heading.no-icon {
  border-bottom: 1px solid #e1e1e1;
}
body.page .c-page-content .main-col-inner .c-blog__heading.no-icon > h1 {
  margin-bottom: 10px;
}
body.page .c-page-content .c-page .c-page__content .page-content-listing {
  margin-top: 35px;
}
body.page .c-page-content .c-page .c-page__content .page-content-listing .page-listing-item {
  border-bottom: 1px solid #ebebeb;
  padding-bottom: 10px;
  margin-bottom: 30px;
}
@media (max-width: 992px) {
  body.page .c-page-content .c-page .c-page__content .page-content-listing .page-listing-item {
    border-bottom: none;
    padding-bottom: 0;
    margin-bottom: 0;
  }
}
body.page .c-page-content .c-page .c-page__content .page-content-listing .page-listing-item:last-of-type {
  border-bottom: none;
  margin-bottom: 0;
}
body.page .c-page-content .c-page .c-page__content .page-content-listing .page-listing-item .page-item-detail {
  margin-bottom: 20px;
}
@media (max-width: 992px) {
  body.page .c-page-content .c-page .c-page__content .page-content-listing .page-listing-item .page-item-detail {
    margin-bottom: 30px;
  }
}
body.page .c-page-content .c-page .c-page__content .page-content-listing .page-listing-item .page-item-detail .item-thumb {
  width: 100px;
  float: left;
  overflow: hidden;
  margin-right: 20px;
}
body.page .c-page-content .c-page .c-page__content .page-content-listing .page-listing-item .page-item-detail .item-summary {
  overflow: hidden;
}
body.page .c-page-content .c-page .c-page__content .page-content-listing .page-listing-item .page-item-detail .item-summary .rating {
  margin-bottom: 7px;
}
body.page .c-page-content .c-page .c-page__content .page-content-listing .page-listing-item .page-item-detail .item-summary .rating .ratings_stars {
  margin: 0 1px;
  font-size: 18px;
}
body.page .c-page-content .c-page .c-page__content .page-content-listing .page-listing-item .page-item-detail .item-summary .rating .score {
  font-weight: 600;
  margin-left: 8px;
  font-size: 12px;
  color: #333333;
}
body.page .c-page-content .c-page .c-page__content .page-content-listing .page-listing-item .page-item-detail .item-summary .list-chapter .chapter-item {
  margin-bottom: 10px;
}
body.page .c-page-content .c-page .c-page__content .page-content-listing .page-listing-item .page-item-detail .item-summary .list-chapter .chapter-item:last-child {
  margin-bottom: 0;
}
body.page .c-page-content .c-page .c-page__content .page-content-listing .page-listing-item .page-item-detail .item-summary .list-chapter .chapter-item span {
  display: inline-block;
  margin-right: 26px;
}
@media (max-width: 600px) {
  body.page .c-page-content .c-page .c-page__content .page-content-listing .page-listing-item .page-item-detail .item-summary .list-chapter .chapter-item span {
    margin-right: 15px;
  }
}
body.page .c-page-content .c-page .c-page__content .page-content-listing .page-listing-item .page-item-detail .item-summary .list-chapter .chapter-item span:last-child {
  margin-right: 0;
}
body.page .c-page-content .c-page .c-page__content .page-content-listing .page-listing-item .page-item-detail .item-summary .list-chapter .chapter-item .chapter {
  background-color: #ebebeb;
  padding: 4px 10px;
  border-radius: 10px;
  font-weight: 600;
  -webkit-transition: background-color 200ms ease;
  -moz-transition: background-color 200ms ease;
  -o-transition: background-color 200ms ease;
  transition: background-color 200ms ease;
}
body.page .c-page-content .c-page .c-page__content .page-content-listing .page-listing-item .page-item-detail .item-summary .list-chapter .chapter-item .chapter a {
  color: #666666;
}
body.page .c-page-content .c-page .c-page__content .page-content-listing .page-listing-item .page-item-detail .item-summary .list-chapter .chapter-item .chapter a:hover {
  color: #fff;
}
body.page .c-page-content .c-page .c-page__content .page-content-listing .page-listing-item .page-item-detail .item-summary .list-chapter .chapter-item .chapter:hover {
  background-color: #eb3349;
}
body.page .c-page-content .c-page .c-page__content .page-content-listing .page-listing-item .page-item-detail .item-summary .list-chapter .chapter-item .chapter:hover a {
  color: #fff;
}
body.page .c-page-content .c-page .c-page__content .page-content-listing .page-listing-item .page-item-detail .item-summary .list-chapter .chapter-item a {
  color: #333333;
  font-weight: 600;
}
body.page .c-page-content .c-page .c-page__content .page-content-listing .page-listing-item .page-item-detail .item-summary .list-chapter .chapter-item a:hover {
  color: #eb3349;
}
body.page .c-page-content .c-page .c-page__content .page-content-listing .page-listing-item .page-item-detail:after {
  display: table;
  content: '';
  clear: both;
}
body.page .c-page-content .c-page .c-page__content .page-content-listing .page-listing-item:last-child {
  border-bottom: none;
  padding-bottom: 0;
}
body.page .c-page-content .c-page .c-page__content .page-content-listing .page-listing-item:last-child .col-md-6 .page-item-detail,
body.page .c-page-content .c-page .c-page__content .page-content-listing .page-listing-item:last-child .col-md-4 .page-item-detail {
  margin-bottom: 0;
}
@media (max-width: 992px) {
  body.page .c-page-content .c-page .c-page__content .page-content-listing .page-listing-item:last-child .col-md-6 .page-item-detail,
  body.page .c-page-content .c-page .c-page__content .page-content-listing .page-listing-item:last-child .col-md-4 .page-item-detail {
    margin-bottom: 30px;
  }
}
@media (max-width: 992px) {
  body.page .c-page-content .c-page .c-page__content .page-content-listing .page-listing-item:last-child .col-md-6:last-child .page-item-detail,
  body.page .c-page-content .c-page .c-page__content .page-content-listing .page-listing-item:last-child .col-md-4:last-child .page-item-detail {
    margin-bottom: 0;
  }
}
body.page .related-post {
  padding: 0;
}
body.page .related-post .related__container:after {
  display: table;
  content: "";
  clear: both;
}
body.page .related-post .related__container .related__item {
  position: relative;
  max-width: 100%;
}
body.page .related-post .related__container .related__item .related__thumb .related__thumb_item {
  position: relative;
}
body.page .related-post .related__container .related__item .related__thumb .related__thumb_item .related-overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #ebebeb;
  background: -webkit-linear-gradient(top, rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.9));
  background: -o-linear-gradient(bottom, rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.9));
  background: -moz-linear-gradient(bottom, rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.9));
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.9));
}
body.page .related-post .related__container .related__item .related__content {
  position: absolute;
  bottom: 22px;
  left: 15px;
  right: 15px;
  padding: 0px 15px;
  text-align: center;
  -webkit-transition: -webkit-transform 0.35s;
  transition: transform 0.35s;
  webkit-transform: translate3d(0, 40px, 0);
  transform: translate3d(0, 40px, 0);
  padding-bottom: 30px;
}
body.page .related-post .related__container .related__item .related__content a {
  color: #fff;
}
body.page .related-post .related__container .related__item.no-thumb .related__content {
  bottom: 0;
  position: relative;
}
body.page .related-post .related__container .related__item.no-thumb .related__content a {
  color: #eb3349;
}
body.page .related-post .related__container .related__item:hover .related__content {
  webkit-transform: translate3d(0, 30px, 0);
  transform: translate3d(0, 30px, 0);
}
body.page.reading-manga .c-page-content .content-area {
  margin-top: 0px;
}
body.page:not(.single) .main-col-inner .entry-header .entry-title {
  padding-bottom: 0;
  margin-bottom: 30px;
}
/* ckeckbox style -> move to core  */
input[type=checkbox],
input[type=radio] {
  display: none;
}
input[type=checkbox] + label:before,
input[type=radio] + label:before {
  display: inline-block;
  font-family: "Ionicons";
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  text-rendering: auto;
  line-height: 1;
  padding-right: 12px;
}
input[type=checkbox] + label:before,
input[type=radio] + label:before {
  content: "\f2b8";
  color: #b7b7b7;
}
input[type=checkbox]:checked + label:before,
input[type=radio]:checked + label:before {
  content: "\f2b9";
  color: #eb3449;
}
/* ckeckbox style -> move to core  */
/*  breadcrumb */
.c-breadcrumb {
  margin: 0 -15px;
}
.c-breadcrumb .breadcrumb {
  margin-bottom: 0;
  background-color: transparent;
  display: inline-block;
}
.c-breadcrumb .breadcrumb li {
  font-size: 12px;
}
.c-breadcrumb .breadcrumb li a {
  color: #888888;
}
.c-breadcrumb .breadcrumb li a:hover {
  color: #eb3349;
}
.c-breadcrumb .breadcrumb li + li:before {
  content: "/";
  padding: 0 2px;
}
.c-breadcrumb-wrapper {
  padding-top: 16px;
}
@media (max-width: 480px) {
  .c-breadcrumb-wrapper {
    padding-top: 10px;
  }
}
.c-genres-block {
  margin-top: 16px;
}
.c-genres-block .genres_wrap .c-blog__heading.style-3.font-heading {
  -webkit-transition: margin-bottom 300ms;
  -moz-transition: margin-bottom 300ms;
  -o-transition: margin-bottom 300ms;
  transition: margin-bottom 300ms;
}
.c-genres-block .genres_wrap .c-blog__heading.style-3.font-heading:not(.active) {
  margin-bottom: 0;
}
.c-genres-block .genres_wrap .genres__collapse {
  padding-bottom: 37px;
}
body.search .c-search-header__wrapper {
  padding-bottom: 25px;
  margin-bottom: 50px;
}
body.search .c-search-header__wrapper .c-page-header__breadcrumb {
  margin-bottom: 22px;
}
body.search .c-search-header__wrapper .c-page-header__breadcrumb > * {
  font-size: 12px;
  color: #888;
}
body.search .c-search-header__wrapper .c-breadcrumb .breadcrumb {
  padding-left: 0;
  padding-right: 0;
}
body.search .c-search-header__wrapper .search-content {
  padding-top: 16px;
}
body.search .c-search-header__wrapper .search-content:after {
  display: table;
  content: "";
  clear: both;
}
body.search .c-search-header__wrapper .search-content > * {
  display: inline-block;
  vertical-align: top;
}
body.search .c-search-header__wrapper .search-content .search-form {
  width: 100%;
  max-width: 907px;
  font-size: 0;
  position: relative;
}
@media (max-width: 1200px) {
  body.search .c-search-header__wrapper .search-content .search-form {
    width: 750px;
  }
}
@media (max-width: 992px) {
  body.search .c-search-header__wrapper .search-content .search-form {
    width: 450px;
  }
}
@media (max-width: 680px) {
  body.search .c-search-header__wrapper .search-content .search-form {
    width: 100%;
    margin-bottom: 30px;
  }
}
body.search .c-search-header__wrapper .search-content .search-form > * {
  display: inline-block;
  vertical-align: top;
  font-size: 14px;
}
body.search .c-search-header__wrapper .search-content .search-form  {
  width: 100%;
  margin-bottom: 0;
}
body.search .c-search-header__wrapper .search-content .search-form  .search-field {
  font-size: 18px;
  padding: 17px 100px 16px 30px;
  border: none;
  width: 100%;
  border-radius: 5px;
  background-color: #fff;
  color: #888;
  height: 60px;
}
@media (max-width: 768px) {
  body.search .c-search-header__wrapper .search-content .search-form  .search-field {
    border-radius: 0;
  }
}
@media (max-width: 480px) {
  body.search .c-search-header__wrapper .search-content .search-form  .search-field {
    padding: 10px 60px 10px 10px;
    font-size: 14px;
    height: 40px;
  }
}
body.search .c-search-header__wrapper .search-content .search-form .icon {
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  text-rendering: auto;
  line-height: 1;
  font-size: 30px;
  position: absolute;
  right: 30px;
  top: 50%;
  z-index: 1;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  -o-transform: translateY(-50%);
  transform: translateY(-50%);
  color: #ffffff;
  pointer-events: none;
}
@media (max-width: 480px) {
  body.search .c-search-header__wrapper .search-content .search-form .icon {
    font-size: 20px;
    right: 20px;
  }
}
body.search .c-search-header__wrapper .search-content .search-form .icon {
  cursor: pointer;
}
body.search .c-search-header__wrapper .search-content .search-form .search-submit {
  padding: 19px 30px 18px;
  border: none;
  position: absolute;
  top: 0;
  right: 0;
  font-size: 0;
  width: 82px;
  height: 60px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: #eb3349;
  -webkit-transition: background-color 0.3s;
  -moz-transition: background-color 0.3s;
  -o-transition: background-color 0.3s;
  transition: background-color 0.3s;
}
body.search .c-search-header__wrapper .search-content .search-form .search-submit:hover {
  background-color: #0f0f0f;
}
@media (max-width: 768px) {
  body.search .c-search-header__wrapper .search-content .search-form .search-submit {
    border-radius: 0;
  }
}
@media (max-width: 480px) {
  body.search .c-search-header__wrapper .search-content .search-form .search-submit {
    width: 0;
    height: 0;
    padding: 0 25px 0;
    height: 40px;
  }
}
body.search .c-search-header__wrapper .search-content .btn-search-adv {
  padding: 17px 25px 16px;
  float: right;
  border: 3px solid #eb3349;
  color: #eb3349;
  font-weight: 600;
  -webkit-transition: all 150ms ease;
  -moz-transition: all 150ms ease;
  -o-transition: all 150ms ease;
  transition: all 150ms ease;
  background-color: transparent;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
}
body.search .c-search-header__wrapper .search-content .btn-search-adv:hover {
  border-color: #0f0f0f;
  color: #fff;
  background-color: #0f0f0f;
}
@media (max-width: 480px) {
  body.search .c-search-header__wrapper .search-content .btn-search-adv {
    padding: 7px 15px 6px;
  }
}
body.search .c-search-header__wrapper .search-content .btn-search-adv span.icon-search-adv {
  display: inline-block;
  vertical-align: middle;
}
body.search .c-search-header__wrapper .search-content .btn-search-adv span.icon-search-adv:before {
  content: "\f286";
  display: inline-block;
  font-family: "Ionicons";
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  text-rendering: auto;
  line-height: 1;
  font-size: 18px;
}
body.search .c-search-header__wrapper .search-content .btn-search-adv.collapsed {
  border-color: #eb3349;
}
body.search .c-search-header__wrapper .search-content .btn-search-adv.collapsed:hover {
  border-color: #0f0f0f;
}
body.search .c-search-header__wrapper .search-content .btn-search-adv.collapsed span.icon-search-adv {
  display: inline-block;
  vertical-align: middle;
}
body.search .c-search-header__wrapper .search-content .btn-search-adv.collapsed span.icon-search-adv:before {
  content: "\f280";
}
body.search .c-search-header__wrapper .search-content .btn-search-adv:hover {
  cursor: pointer;
  border-color: #0f0f0f;
  background-color: #0f0f0f;
  color: #fff;
}
body.search .c-search-header__wrapper #search-advanced .search-advanced-form .form-group .checkbox-inline {
  padding-left: 0;
  margin-top: 0;
  margin-bottom: 0;
  padding-top: 15px;
}
body.search .c-search-header__wrapper #search-advanced .search-advanced-form .form-group .checkbox-inline label {
  font-weight: 600;
  color: #333;
  padding-left: 0;
}
body.search .c-search-header__wrapper #search-advanced .search-advanced-form .form-group.checkbox-group {
  margin-top: 24px;
}
body.search .c-search-header__wrapper #search-advanced .search-advanced-form .form-group.checkbox-group .checkbox {
  margin-top: 7px;
  margin-bottom: 8px;
}
body.search .c-search-header__wrapper #search-advanced .search-advanced-form .form-group.checkbox-group .checkbox label {
  font-weight: 600;
  color: #333;
  padding-left: 0;
}
body.search .c-search-header__wrapper #search-advanced .search-advanced-form .form-group.checkbox-group .checkbox + .checkbox {
  margin-top: 7px;
}
body.search .c-search-header__wrapper #search-advanced .search-advanced-form .form-group:not(.checkbox-group) {
  margin-bottom: 30px;
}
body.search .c-search-header__wrapper #search-advanced .search-advanced-form .form-group:not(.checkbox-group) > * {
  display: inline-block;
  font-weight: 600;
}
body.search .c-search-header__wrapper #search-advanced .search-advanced-form .form-group:not(.checkbox-group) span {
  width: 135px;
  font-weight: 600;
  color: #333;
}
@media (max-width: 768px) {
  body.search .c-search-header__wrapper #search-advanced .search-advanced-form .form-group:not(.checkbox-group) span {
    width: 100%;
    margin-bottom: 10px;
  }
}
body.search .c-search-header__wrapper #search-advanced .search-advanced-form .form-group:not(.checkbox-group) input[type="text"], body.search .c-search-header__wrapper #search-advanced .search-advanced-form .form-group:not(.checkbox-group) select {
  max-width: 480px;
  font-weight: normal;
  background-color: #fff;
  color:#888;
}
body.search .c-search-header__wrapper #search-advanced .search-advanced-form .form-group:not(.checkbox-group) .checkbox-inline {
  width: 17%;
  padding-top: 0;
  margin-right: 10px;
}
body.search .c-search-header__wrapper #search-advanced .search-advanced-form .form-group:not(.checkbox-group) .checkbox-inline + .checkbox-inline {
  margin-left: 0;
}
@media (max-width: 768px) {
  body.search .c-search-header__wrapper #search-advanced .search-advanced-form .form-group:not(.checkbox-group) .checkbox-inline {
    width: auto;
  }
}
body.search .c-search-header__wrapper #search-advanced .search-advanced-form .form-group.group-btn {
  text-align: center;
}
body.search .search-wrap .tab-content-wrap .c-tabs-item .c-tabs-item__content {
  margin-bottom: 42px;
}
body.search .search-wrap .tab-content-wrap .c-tabs-item .c-tabs-item__content .tab-thumb {
  margin-bottom: 15px;
}
@media (max-width: 767px) {
  body.search .search-wrap .tab-content-wrap .c-tabs-item .c-tabs-item__content .tab-thumb img {
    margin: 0 auto;
  }
}
body.search .search-wrap .tab-content-wrap .c-tabs-item .c-tabs-item__content .tab-summary {
  margin-bottom: 17px;
}
body.search .search-wrap .tab-content-wrap .c-tabs-item .c-tabs-item__content .tab-summary .post-title h4 {
  font-weight: 600;
  margin-top: 0;
  margin-bottom: 16px;
}
@media (max-width: 767px) {
  body.search .search-wrap .tab-content-wrap .c-tabs-item .c-tabs-item__content .tab-summary .post-title {
    text-align: center;
  }
}
body.search .search-wrap .tab-content-wrap .c-tabs-item .c-tabs-item__content .tab-summary .post-content {
  background-color: #f3f3f3;
  padding: 16px 20px 14px;
}
body.search .search-wrap .tab-content-wrap .c-tabs-item .c-tabs-item__content .tab-summary .post-content .post-content_item {
  font-size: 0;
  margin-bottom: 9px;
}
body.search.search-wrap .tab-content-wrap .c-tabs-item .c-tabs-item__content .tab-summary .post-content .post-content_item > * {
  display: inline-block;
  font-size: 14px;
  vertical-align: top;
}
body.search .search-wrap .tab-content-wrap .c-tabs-item .c-tabs-item__content .tab-summary .post-content .post-content_item .summary-heading {
  width: 140px;
  display: inline-block;
  font-size: 14px;
  vertical-align: top;
}
@media (max-width: 600px) {
  body.search .search-wrap .tab-content-wrap .c-tabs-item .c-tabs-item__content .tab-summary .post-content .post-content_item .summary-heading {
    width: 100%;
  }
}
body.search .search-wrap .tab-content-wrap .c-tabs-item .c-tabs-item__content .tab-summary .post-content .post-content_item .summary-heading h5 {
  margin-top: 3px;
  font-weight: 600;
  color: #666666;
  font-size: 14px;
}
body.search .search-wrap .tab-content-wrap .c-tabs-item .c-tabs-item__content .tab-summary .post-content .post-content_item .summary-content {
  width: calc(100% - 140px);
  display: inline-block;
  font-size: 14px;
  vertical-align: top;
}
@media (max-width: 600px) {
  body.search .search-wrap .tab-content-wrap .c-tabs-item .c-tabs-item__content .tab-summary .post-content .post-content_item .summary-content {
    width: 100%;
  }
}
body.search .search-wrap .tab-content-wrap .c-tabs-item .c-tabs-item__content .tab-summary .post-content .post-content_item .summary-content:not(.release-year) a {
  color: #333333;
}
body.search .search-wrap .tab-content-wrap .c-tabs-item .c-tabs-item__content .tab-summary .post-content .post-content_item .summary-content:not(.release-year) a:hover {
  color: #eb3349;
}
body.search .search-wrap .tab-content-wrap .c-tabs-item .c-tabs-item__content .tab-summary .post-content .post-content_item .summary-content.release-year a {
  color: #888888;
}
body.search .search-wrap .tab-content-wrap .c-tabs-item .c-tabs-item__content .tab-summary .post-content .post-content_item:after {
  display: table;
  content: "";
  clear: both;
}
body.search .search-wrap .tab-content-wrap .c-tabs-item .c-tabs-item__content .tab-summary .post-content .post-content_item:not(.nofloat):nth-last-of-type(-n+2) {
  display: inline-block;
  float: left;
  margin-bottom: 0;
}
body.search .search-wrap .tab-content-wrap .c-tabs-item .c-tabs-item__content .tab-summary .post-content .post-content_item:nth-last-of-type(-n+2) .summary-heading h5 {
  margin-bottom: 0;
}
@media (max-width: 600px) {
  body.search .search-wrap .tab-content-wrap .c-tabs-item .c-tabs-item__content .tab-summary .post-content .post-content_item:nth-last-of-type(-n+2) {
    margin-bottom: 9px;
  }
  body.search .search-wrap .tab-content-wrap .c-tabs-item .c-tabs-item__content .tab-summary .post-content .post-content_item:nth-last-of-type(-n+2) .summary-heading h5 {
    margin-bottom: 10px;
  }
}
body.search .search-wrap .tab-content-wrap .c-tabs-item .c-tabs-item__content .tab-summary .post-content .post-content_item:not(.nofloat):last-child {
  margin-left: 95px;
}

@media (max-width: 600px) {
  body.search .search-wrap .tab-content-wrap .c-tabs-item .c-tabs-item__content .tab-summary .post-content .post-content_item:last-child {
    margin-left: 0;
    display: block;
    width: 100%;
  }
}
body.search .search-wrap .tab-content-wrap .c-tabs-item .c-tabs-item__content .tab-summary .post-content .post-content_item.mg_author .summary-content,
body.search .search-wrap .tab-content-wrap .c-tabs-item .c-tabs-item__content .tab-summary .post-content .post-content_item.mg_artists .summary-content,
body.search .search-wrap .tab-content-wrap .c-tabs-item .c-tabs-item__content .tab-summary .post-content .post-content_item.mg_genres .summary-content {
  color: #eb3349;
}
body.search .search-wrap .tab-content-wrap .c-tabs-item .c-tabs-item__content .tab-summary .post-content::after {
  content: "";
  display: table;
  clear: both;
}
body.search .search-wrap .tab-content-wrap .c-tabs-item .c-tabs-item__content .tab-meta > * {
  display: inline-block;
}
body.search .search-wrap .tab-content-wrap .c-tabs-item .c-tabs-item__content .tab-meta .meta-item + .meta-item {
  margin-left: 16px;
}
@media (max-width: 480px) {
  body.search .search-wrap .tab-content-wrap .c-tabs-item .c-tabs-item__content .tab-meta .meta-item + .meta-item {
    margin-left: 10px;
  }
}
body.search .search-wrap .tab-content-wrap .c-tabs-item .c-tabs-item__content .tab-meta .meta-item:last-child {
  margin-left: 110px;
}
@media (max-width: 680px) {
  body.search .search-wrap .tab-content-wrap .c-tabs-item .c-tabs-item__content .tab-meta .meta-item:last-child {
    margin-left: 10px;
  }
}
@media (max-width: 420px) {
  body.search .search-wrap .tab-content-wrap .c-tabs-item .c-tabs-item__content .tab-meta .meta-item:last-child {
    margin-left: 0px;
  }
}
body.search .search-wrap .tab-content-wrap .c-tabs-item .c-tabs-item__content .tab-meta .meta-item .ratings_stars {
  margin: 0 1px;
  font-size: 18px;
}
body.search .search-wrap .tab-content-wrap .c-tabs-item .c-tabs-item__content .tab-meta .meta-item .score {
  margin-left: 8px;
  font-size: 12px;
}
body.search .search-wrap .tab-content-wrap .c-tabs-item .c-tabs-item__content .tab-meta .latest-chap .chapter {
  margin-left: 20px;
  background-color: #ebebeb;
  padding: 0px 10px;
  border-radius: 10px;
  font-weight: 600;
  display: inline-block;
  -webkit-transition: background-color 200ms ease;
  -moz-transition: background-color 200ms ease;
  -o-transition: background-color 200ms ease;
  transition: background-color 200ms ease;
}
body.search .search-wrap .tab-content-wrap .c-tabs-item .c-tabs-item__content .tab-meta .latest-chap .chapter a {
  color: #666666;
}
body.search .search-wrap .tab-content-wrap .c-tabs-item .c-tabs-item__content .tab-meta .latest-chap .chapter:hover {
  background-color: #eb3349;
}
body.search .search-wrap .tab-content-wrap .c-tabs-item .c-tabs-item__content .tab-meta .latest-chap .chapter:hover a {
  color: #fff;
}
body.search .search-wrap .tab-content-wrap .c-tabs-item .c-tabs-item__content .tab-meta .rating .score {
  font-weight: 600;
  color: #333333;
}
body.search .search-wrap .tab-content-wrap .c-tabs-item .c-tabs-item__content:after {
  display: table;
  content: "";
  clear: both;
}
body.search .search-wrap .tab-content-wrap .c-tabs-item .c-tabs-item__content:last-child {
  margin-bottom: 0;
}
body.search .no-results {
  text-align: center;
  height: 100vh;
  max-height: 490px;
  position: relative;
}
body.search .no-results .results_content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
body.search .no-results .icon-not-found {
  margin-bottom: 11px;
}
body.search .no-results .icon-not-found i {
  font-size: 100px;
  line-height: 1;
  color: #e6e6e6;
}
body.search .no-results .not-found-content {
  font-size: 18px;
}
/*  */
.genres_wrap .c-blog__heading.style-3:after {
  border-top: 0;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
}
.genres_wrap .c-blog__heading.style-3.active:after {
  border-top: 10px solid #eb3349;
}
.genres_wrap a.btn-genres {
  border: 2px solid #eb3349;
  padding: 3px 9px;
  color: #eb3349;
  border-radius: 0;
  box-shadow: none;
  -webkit-transition: all 200ms ease;
  -moz-transition: all 200ms ease;
  -o-transition: all 200ms ease;
  transition: all 200ms ease;
}
.genres_wrap a.btn-genres.active:before {
  content: "\f286";
  font-family: "Ionicons";
}
.genres_wrap a.btn-genres:hover {
  background-color: #0f0f0f;
  border-color: #0f0f0f;
  color: #fff;
}
.genres_wrap .genres__collapse {
  width: 100%;
  display: none;
}
.genres_wrap .genres__collapse .genres ul {
  margin-top: -7px;
  margin-bottom: -7px;
}
.genres_wrap .genres__collapse .genres ul:after {
  display: table;
  content: "";
  clear: both;
}
.genres_wrap .genres__collapse .genres ul li {
  padding-top: 7px;
  padding-bottom: 7px;
}
.genres_wrap .genres__collapse .genres ul li a {
  font-weight: 600;
  -webkit-transition: all 200ms ease;
  -moz-transition: all 200ms ease;
  -o-transition: all 200ms ease;
  transition: all 200ms ease;
}
.genres_wrap .genres__collapse .genres ul li a:hover {
  color: #ef4447;
  text-decoration: none;
}
.genres_wrap .genres__collapse .genres ul li a:hover:before {
  color: #ef4447;
}
.genres_wrap .genres__collapse .genres ul li a:before {
  content: "\f284";
  display: inline-block;
  font-family: "Ionicons";
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  text-rendering: auto;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 14px;
  vertical-align: middle;
  margin-right: 10px;
  color: #666666;
  -webkit-transition: all 200ms ease;
  -moz-transition: all 200ms ease;
  -o-transition: all 200ms ease;
  transition: all 200ms ease;
}
.genres_wrap .genres__collapse .genres ul li span.count {
  margin-left: 5px;
  font-size: 12px;
  font-weight: normal;
  display: inline-block;
}
body.manga-page .profile-manga {
  margin-bottom: 50px;
}
body.manga-page .profile-manga .post-title h1 {
  margin-top: 14px;
  font-size: 20px;
  font-weight: normal;
  color: #eb3349;
}
body.manga-page .profile-manga .post-title a {
  color: #eb3349;
}
body.manga-page .profile-manga .tab-summary .post-content_item,
body.manga-page .profile-manga .post-status .post-content_item {
  font-size: 0;
  margin-bottom: 3px;
}
body.manga-page .profile-manga .tab-summary .post-content_item > *,
body.manga-page .profile-manga .post-status .post-content_item > * {
  display: inline-block;
  font-size: 14px;
  vertical-align: top;
}
body.manga-page .profile-manga .tab-summary .post-content_item .summary-heading,
body.manga-page .profile-manga .post-status .post-content_item .summary-heading {
  width: 106px;
}
body.manga-page .profile-manga .tab-summary .post-content_item .summary-heading h5,
body.manga-page .profile-manga .post-status .post-content_item .summary-heading h5 {
  font-size: 14px;
  margin-top: 3px;
  margin-bottom: 8px;
  font-weight: 600;
}
@media (max-width: 480px) {
  body.manga-page .profile-manga .tab-summary .post-content_item .summary-heading h5,
  body.manga-page .profile-manga .post-status .post-content_item .summary-heading h5 {
    margin-bottom: 3px;
  }
}
@media (max-width: 480px) {
  body.manga-page .profile-manga .tab-summary .post-content_item .summary-heading,
  body.manga-page .profile-manga .post-status .post-content_item .summary-heading {
    width: 100%;
  }
}
body.manga-page .profile-manga .tab-summary .post-content_item .summary-content,
body.manga-page .profile-manga .post-status .post-content_item .summary-content {
  width: calc(100% - 106px);
  word-break: break-word;
}
body.manga-page .profile-manga .tab-summary .post-content_item .summary-content a:not(:first-child),
body.manga-page .profile-manga .post-status .post-content_item .summary-content a:not(:first-child) {
  margin-left: 6px;
}
@media (max-width: 480px) {
  body.manga-page .profile-manga .tab-summary .post-content_item .summary-content,
  body.manga-page .profile-manga .post-status .post-content_item .summary-content {
    width: 100%;
  }
}
body.manga-page .profile-manga .tab-summary .post-content_item .summary-content .genres-content,
body.manga-page .profile-manga .post-status .post-content_item .summary-content .genres-content,
body.manga-page .profile-manga .tab-summary .post-content_item .summary-content .artist-content,
body.manga-page .profile-manga .post-status .post-content_item .summary-content .artist-content,
body.manga-page .profile-manga .tab-summary .post-content_item .summary-content .author-content,
body.manga-page .profile-manga .post-status .post-content_item .summary-content .author-content {
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  /* fallback */
  max-height: calc( 3em );
  /* fallback */
}
@media (max-width: 768px) {
  body.manga-page .profile-manga .tab-summary .post-content_item,
  body.manga-page .profile-manga .post-status .post-content_item {
    margin-bottom: 10px;
  }
}
body.manga-page .profile-manga .tab-summary {
  padding: 15px 0 50px;
  display: table;
  width: 100%;
}
body.manga-page .profile-manga .tab-summary .summary_image {
  width: 225px;
  padding: 15px;
  background: #fff;
  display: table-cell;
  vertical-align: middle;
}
body.manga-page .profile-manga .tab-summary .summary_content_wrap {
  overflow: hidden;
  display: table-cell;
  vertical-align: middle;
  padding-left: 30px;
  position: relative;
}
body.manga-page .profile-manga .tab-summary .summary_content_wrap .summary_content {
  background-color: rgba(255, 255, 255, 0.5);
  top: 0;
  bottom: 0;
  left: 30px;
  right: 0;
  padding: 20px 30px 30px;
  font-size: 0;
  min-height: 318px;
}
body.manga-page .profile-manga .tab-summary .summary_content_wrap .summary_content .post-content,
body.manga-page .profile-manga .tab-summary .summary_content_wrap .summary_content .post-status {
  font-size: 14px;
  display: inline-block;
  vertical-align: top;
}
body.manga-page .profile-manga .tab-summary .summary_content_wrap .summary_content .post-content {
  width: 70%;
  position: relative;
}
body.manga-page .profile-manga .tab-summary .summary_content_wrap .summary_content .post-status {
  width: 30%;
  margin-top: 56px;
}
body.manga-page .profile-manga .tab-summary .summary_content_wrap .summary_content .post-status .manga-action {
  margin: 0 -15px;
  padding-top: 16px;
}
body.manga-page .profile-manga .tab-summary .summary_content_wrap .summary_content .post-status .manga-action:after {
  display: table;
  content: "";
  clear: both;
}
body.manga-page .profile-manga .tab-summary .summary_content_wrap .summary_content .post-status .manga-action .count-comment,
body.manga-page .profile-manga .tab-summary .summary_content_wrap .summary_content .post-status .manga-action .add-bookmark {
  width: 50%;
  float: left;
  padding: 0 15px;
}
body.manga-page .profile-manga .tab-summary .summary_content_wrap .summary_content .post-status .manga-action .count-comment .action_icon,
body.manga-page .profile-manga .tab-summary .summary_content_wrap .summary_content .post-status .manga-action .add-bookmark .action_icon,
body.manga-page .profile-manga .tab-summary .summary_content_wrap .summary_content .post-status .manga-action .count-comment .action_detail,
body.manga-page .profile-manga .tab-summary .summary_content_wrap .summary_content .post-status .manga-action .add-bookmark .action_detail {
  text-align: center;
  line-height: 1.35;
}
body.manga-page .profile-manga .tab-summary .summary_content_wrap .summary_content .post-status .manga-action .count-comment .action_icon a,
body.manga-page .profile-manga .tab-summary .summary_content_wrap .summary_content .post-status .manga-action .add-bookmark .action_icon a,
body.manga-page .profile-manga .tab-summary .summary_content_wrap .summary_content .post-status .manga-action .count-comment .action_detail a,
body.manga-page .profile-manga .tab-summary .summary_content_wrap .summary_content .post-status .manga-action .add-bookmark .action_detail a {
  display: inline-block;
}
body.manga-page .profile-manga .tab-summary .summary_content_wrap .summary_content .post-status .manga-action .count-comment .action_icon a i,
body.manga-page .profile-manga .tab-summary .summary_content_wrap .summary_content .post-status .manga-action .add-bookmark .action_icon a i,
body.manga-page .profile-manga .tab-summary .summary_content_wrap .summary_content .post-status .manga-action .count-comment .action_detail a i,
body.manga-page .profile-manga .tab-summary .summary_content_wrap .summary_content .post-status .manga-action .add-bookmark .action_detail a i {
  font-size: 36px;
  color: #ec3649;
}
body.manga-page .profile-manga .tab-summary .summary_content_wrap .summary_content .post-status .manga-action .count-comment {
  border-right: 1px solid #e1e1e1;
}
body.manga-page .profile-manga .tab-summary .summary_content_wrap:only-child {
  padding-left: 0;
}
body.manga-page .profile-manga .tab-summary .loader-inner {
  display: none;
  position: absolute;
  left: 45px;
  top: 15px;
  z-index: 99;
}
body.manga-page .profile-manga .tab-summary .loader-inner > div {
  background-color: #eb3349;
  width: 10px;
  height: 10px;
}
body.manga-page .profile-manga .tab-summary .post-rating {
  margin-bottom: 12px;
  position: relative;
  transition: opacity ease-in 0.5s;
}
body.manga-page .profile-manga .tab-summary .post-rating .post-total-rating i.ion-ios-star,
body.manga-page .profile-manga .tab-summary .post-rating .post-total-rating i.ion-ios-star.rating_current,
body.manga-page .profile-manga .tab-summary .post-rating .post-total-rating i.ion-ios-star-half {
  color: #ffd900;
}
body.manga-page .profile-manga .tab-summary .post-rating .user-rating {
  position: relative;
  top: 0;
  display: none;
}
body.manga-page .profile-manga .tab-summary .post-rating .user-rating i.ion-ios-star,
body.manga-page .profile-manga .tab-summary .post-rating .user-rating i.ion-ios-star.rating_current,
body.manga-page .profile-manga .tab-summary .post-rating .user-rating i.ion-ios-star-half {
  color: #ffd900;
}
body.manga-page .profile-manga .tab-summary .post-rating i {
  font-size: 30px;
  margin: 0 1px;
}
body.manga-page .profile-manga .tab-summary .post-rating i.ion-ios-star,
body.manga-page .profile-manga .tab-summary .post-rating i.ion-ios-star.rating_current,
body.manga-page .profile-manga .tab-summary .post-rating i.ion-ios-star-half {
  color: #ffd900;
}
body.manga-page .profile-manga .tab-summary .post-rating i:hover {
  cursor: pointer;
}
body.manga-page .profile-manga .tab-summary .post-rating span {
  margin-left: 8px;
  font-weight: 600;
  color: #333;
  font-size: 24px;
}
body.manga-page .profile-manga .tab-summary .post-rating:hover .user-rating.allow_vote {
  display: block;
}
body.manga-page .profile-manga .tab-summary .post-rating:hover .post-total-rating.allow_vote {
  display: none;
}
@media (max-width: 992px) {
  body.manga-page .profile-manga .tab-summary .summary_image {
    width: 150px;
    vertical-align: top;
    background-color: transparent;
    padding: 0;
  }
  body.manga-page .profile-manga .tab-summary .summary_content_wrap {
    overflow: visible;
    padding-left: 0;
  }
  body.manga-page .profile-manga .tab-summary .summary_content_wrap .summary_content {
    position: relative;
  }
}
@media (max-width: 992px) and (min-width: 678px) {
body.manga-page .profile-manga .tab-summary .summary_image{background: none !important; vertical-align: top;padding: 0;}
}
@media (max-width: 768px) {
  body.manga-page .profile-manga .tab-summary .summary_image {
    padding: 15px;
    background: #fff;
    margin: 0 auto 20px;
    width: auto;
    display: inherit;
  }
  body.manga-page .profile-manga .tab-summary .summary_content_wrap {
    display: block;
  }
  body.manga-page .profile-manga .tab-summary .summary_content_wrap .summary_content {
    left: 0;
  }
}
@media (max-width: 992px) {
  body.manga-page .profile-manga .tab-summary .summary_content_wrap .summary_content .post-content,
  body.manga-page .profile-manga .tab-summary .summary_content_wrap .summary_content .post-status {
    width: 100%;
    margin-top: 0;
  }
}
body.manga-page .page-content-listing.single-page .listing-chapters_wrap > ul, .shortcode-manga-chapters .listing-chapters_wrap > ul {
  padding-left: 0;
  margin-top: -15px;
  margin-bottom: 20px;
}
body.manga-page .page-content-listing.single-page .listing-chapters_wrap > ul li, .shortcode-manga-chapters .listing-chapters_wrap > ul li {
  list-style: none;
}
body.manga-page .page-content-listing.single-page .listing-chapters_wrap > ul li a, .shortcode-manga-chapters .listing-chapters_wrap > ul li a {
  padding: 15px 0;
  display: inline-block;
}
body.manga-page .page-content-listing.single-page .listing-chapters_wrap > ul li ul, .shortcode-manga-chapters .listing-chapters_wrap > ul li ul {
  padding-left: 30px;
}
body.manga-page .page-content-listing.single-page .listing-chapters_wrap > ul li:hover, .shortcode-manga-chapters .listing-chapters_wrap > ul li:hover {
  cursor: pointer;
}
body.manga-page .page-content-listing.single-page .listing-chapters_wrap > ul > li.has-child > i.icon, .shortcode-manga-chapters .listing-chapters_wrap > ul > li.has-child > i.icon {
  position: absolute;
  right: 15px;
  top: 15px;
  font-size: 18px;
  pointer-events: none;
}
body.manga-page .page-content-listing.single-page .listing-chapters_wrap > ul > li.has-child > i.icon:before,.shortcode-manga-chapters .listing-chapters_wrap > ul > li.has-child > i.icon:before {
  line-height: 20px;
  width: 20px;
  height: 20px;
  text-align: center;
  background-color: #f3f3f3;
  border-radius: 2px;
}
body.manga-page .page-content-listing.single-page .listing-chapters_wrap > ul > li.has-child.active > i.icon:before, .shortcode-manga-chapters .listing-chapters_wrap > ul > li.has-child.active > i.icon:before {
  content: "\f368";
}
body.manga-page .page-content-listing.single-page .listing-chapters_wrap > ul.main ul.sub-chap, .shortcode-manga-chapters .listing-chapters_wrap > ul.main ul.sub-chap {
  display: none;
}
body.manga-page .page-content-listing.single-page .listing-chapters_wrap > ul.main.version-chap li .wp-manga-chapter:before, .shortcode-manga-chapters .listing-chapters_wrap > ul.main.version-chap li .wp-manga-chapter:before {
  content: "";
  display: inline-block;
  width: 3px;
  height: 100%;
  background: red;
  position: absolute;
  left: -30px;
}
body.manga-page .page-content-listing.single-page .listing-chapters_wrap > ul.main.version-chap li .wp-manga-chapter a, .shortcode-manga-chapters .listing-chapters_wrap > ul.main.version-chap li .wp-manga-chapter a {
  padding: 10px 0;
}
body.manga-page .page-content-listing.single-page .listing-chapters_wrap > ul.main.version-chap li .wp-manga-chapter a:not(:hover), .shortcode-manga-chapters .listing-chapters_wrap > ul.main.version-chap li .wp-manga-chapter a:not(:hover) {
  color: #888888;
}
body.manga-page .page-content-listing.single-page .listing-chapters_wrap > ul.main.version-chap li, .shortcode-manga-chapters .listing-chapters_wrap > ul.main.version-chap li {
  position: relative;
}
body.manga-page .page-content-listing.single-page .listing-chapters_wrap > ul.main.version-chap li .no-chapter, .shortcode-manga-chapters .listing-chapters_wrap > ul.main.version-chap li .no-chapter {
  margin-left: 25px;
}
body.manga-page .page-content-listing.single-page .listing-chapters_wrap > ul.main.version-chap li .chapter-release-date, .shortcode-manga-chapters .listing-chapters_wrap > ul.main.version-chap li .chapter-release-date {
  position: absolute;
  top: 50%;
  right: 0;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  -o-transform: translateY(-50%);
  transform: translateY(-50%);
}
@media (max-width: 600px) {
  body.manga-page .page-content-listing.single-page .listing-chapters_wrap > ul.main.version-chap li .chapter-release-date, .shortcode-manga-chapters .listing-chapters_wrap > ul.main.version-chap li .chapter-release-date {
    position: relative;
    top: 0;
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
    display: block;
    margin-bottom: 10px;
    font-size: 12px;
  }
}
body.manga-page .page-content-listing.single-page .listing-chapters_wrap > ul.main.version-chap li:after, .shortcode-manga-chapters .listing-chapters_wrap > ul.main.version-chap li:after {
  content: "";
  position: absolute;
  display: block;
  height: 1px;
  background-color: #ebebeb;
  width: 100%;
  opacity: 1;
  visibility: visible;
  left: 0
}
body.manga-page .page-content-listing.single-page .listing-chapters_wrap > ul.main.version-chap li.has-child.active:after, .shortcode-manga-chapters .listing-chapters_wrap > ul.main.version-chap li.has-child.active:after {
  opacity: 0;
  visibility: hidden;
}
body.manga-page .page-content-listing.single-page .listing-chapters_wrap > ul.main.version-chap li:last-child:after, .shortcode-manga-chapters .listing-chapters_wrap > ul.main.version-chap li:last-child:after {
  opacity: 0;
  visibility: hidden;
}
body.manga-page .page-content-listing.single-page .listing-chapters_wrap > ul.main.version-chap li .vol-chap > li:after, .shortcode-manga-chapters .listing-chapters_wrap > ul.main.version-chap li .vol-chap > li:after {
  opacity: 0;
  visibility: hidden;
}
body.manga-page .page-content-listing.single-page .listing-chapters_wrap > ul.main.version-chap li .vol-chap .list-chap li:before, .shortcode-manga-chapters .listing-chapters_wrap > ul.main.version-chap li .vol-chap .list-chap li:before {
  content: "";
  display: inline-block;
  width: 3px;
  height: 100%;
  background: red;
  position: absolute;
  left: -30px;
}
body.manga-page .page-content-listing.single-page .listing-chapters_wrap > ul.version-chap > li > a,
body.manga-page .page-content-listing.single-page .listing-chapters_wrap > ul.vol-chap > li > a, .shortcode-manga-chapters .listing-chapters_wrap > ul.version-chap > li > a, .shortcode-manga-chapters .listing-chapters_wrap > ul.vol-chap > li > a {
  font-weight: 600;
}
body.manga-page .page-content-listing.single-page .listing-chapters_wrap > ul.vol-chap > li.has-child > i.icon, .shortcode-manga-chapters .listing-chapters_wrap > ul.vol-chap > li.has-child > i.icon {
  position: absolute;
  right: 15px;
  top: 15px;
  font-size: 18px;
}
body.manga-page .page-content-listing.single-page .listing-chapters_wrap > ul.vol-chap > li.has-child > i.icon:before, .shortcode-manga-chapters .listing-chapters_wrap > ul.vol-chap > li.has-child > i.icon:before {
  line-height: 15px;
  width: 15px;
  height: 15px;
  text-align: center;
  background-color: #ccc;
  border-radius: 50%;
  color: #fff;
}
body.manga-page .description-summary {
  margin-bottom: 38px;
}
body.manga-page .description-summary.hide_show-more {
  margin-bottom: 0;
}
body.manga-page .listing-chapters_wrap.show-more .version-chap {
  max-height: 550px;
  display: block;
  overflow: hidden;
  word-break: break-word;
  word-wrap: break-word;
  line-height: 30px;
  position: relative;
}
body.manga-page .listing-chapters_wrap.show-more .version-chap:after {
  content: "";
  display: block;
  width: 100%;
  background: rgba(255, 255, 255, 0);
  background: -webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0)), to(#ffffff));
  background: -webkit-linear-gradient(top, rgba(255, 255, 255, 0), #ffffff);
  background: -moz-linear-gradient(top, rgba(255, 255, 255, 0), #ffffff);
  background: -ms-linear-gradient(top, rgba(255, 255, 255, 0), #ffffff);
  background: -o-linear-gradient(top, rgba(255, 255, 255, 0), #ffffff);
  position: absolute;
  bottom: 0;
  height: 30px;
  opacity: 0;
  -webkit-transition: opacity 0.3s;
  -moz-transition: opacity 0.3s;
  -o-transition: opacity 0.3s;
  transition: opacity 0.3s;
  pointer-events: none;
}
body.manga-page.text-ui-light .listing-chapters_wrap.show-more .version-chap:after{
	background: rgba(0, 0, 0, 0);
  background: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0)), to(#000));
  background: -webkit-linear-gradient(top, rgba(0, 0, 0, 0), #000);
  background: -moz-linear-gradient(top, rgba(0, 0, 0, 0), #000);
  background: -ms-linear-gradient(top, rgba(0, 0, 0, 0), #000);
  background: -o-linear-gradient(top, rgba(0, 0, 0, 0), #000);
}
body.manga-page .listing-chapters_wrap.show-more .version-chap:before {
  display: inline-block;
  width: 50px;
  height: 50px;
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  opacity: 0;
  pointer-events: none;
  z-index: 1;
  -webkit-transition: opacity 0.3s;
  -moz-transition: opacity 0.3s;
  -o-transition: opacity 0.3s;
  transition: opacity 0.3s;
  content: "\f110";
  font-family: Font Awesome\ 5 Free;
  font-style: normal;
  font-weight: 900;
  text-decoration: inherit;
  font-size: 50px;
  line-height: 50px;
  -webkit-animation: fa-spin 2s infinite linear;
  animation: fa-spin 2s infinite linear;
  color: var( --madara-main-color );
}

body.manga-page .listing-chapters_wrap.show-more .version-chap.active:after {
  opacity: 1;
}
body.manga-page .listing-chapters_wrap.show-more .version-chap.loaded {
  -webkit-animation: eFadeIn .3s;
  animation: eFadeIn .3s;
}
body.manga-page .listing-chapters_wrap.show-more .version-chap.loaded:after {
  opacity: 0;
}
body.manga-page .listing-chapters_wrap.show-more .version-chap.loading:before {
  opacity: 1;
}
body.manga-page .summary__content.show-more {
  height: 119px;
  display: block;
  overflow: hidden;
  word-break: break-word;
  word-wrap: break-word;
  line-height: 30px;
  position: relative;
}
body.manga-page .summary__content.show-more:after {
  content: "";
  display: block;
  width: 100%;
  background: rgba(255, 255, 255, 0);
  background: -webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0)), to(#ffffff));
  background: -webkit-linear-gradient(top, rgba(255, 255, 255, 0), #ffffff);
  background: -moz-linear-gradient(top, rgba(255, 255, 255, 0), #ffffff);
  background: -ms-linear-gradient(top, rgba(255, 255, 255, 0), #ffffff);
  background: -o-linear-gradient(top, rgba(255, 255, 255, 0), #ffffff);
  position: absolute;
  bottom: 0;
  height: 30px;
  opacity: 1;
  -webkit-transition: opacity 0.3s;
  -moz-transition: opacity 0.3s;
  -o-transition: opacity 0.3s;
  transition: opacity 0.3s;
  pointer-events: none;
}
body.manga-page .summary__content.show-more.active:after {
  opacity: 0;
}
body.manga-page .c-content-readmore,
body.manga-page .c-chapter-readmore {
  text-align: center;
}
body.manga-page .content-readmore,
body.manga-page .chapter-readmore {
  -webkit-transition: color 200ms;
  -moz-transition: color 200ms;
  -o-transition: color 200ms;
  transition: color 200ms;
  font-weight: 600;
  color: #333333;
  text-decoration: none;
  position: relative;
}
body.manga-page .content-readmore:after,
body.manga-page .chapter-readmore:after {
  content: "\f0d7";
  font-family: Font Awesome\ 5 Free;
  font-style: normal;
  font-weight: 900;
  text-decoration: inherit;
}
body.manga-page .content-readmore.more:after,
body.manga-page .chapter-readmore.more:after {
  content: "\f0d8";
}
body.manga-page .content-readmore:hover,
body.manga-page .chapter-readmore:hover {
  color: #eb3349;
}
body.manga-page .chapter-readmore {
  display: none;
}
body.manga-page .listing-chapters_wrap .c-chapter-readmore {
  height: 20px;
  position: relative;
  -webkit-transition: height 0.3s, margin-bottom 0.2s;
  -moz-transition: height 0.3s, margin-bottom 0.2s;
  -o-transition: height 0.3s, margin-bottom 0.2s;
  transition: height 0.3s, margin-bottom 0.2s;
  margin-bottom: 0;
}
body.manga-page .listing-chapters_wrap .c-chapter-readmore.chapter-readmore {
  position: absolute;
  top: 15px;
  left: 50%;
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  -o-transform: translateX(-50%);
  transform: translateX(-50%);
}
body.manga-page .listing-chapters_wrap.show .c-chapter-readmore {
  margin-bottom: 35px;
}
body.manga-page .wp-manga-tags-wrapper {
  margin-top: 26px;
  margin-bottom: 5px;
}
body.manga-page .wp-manga-tags-wrapper .wp-manga-tags {
  font-size: 12px;
}
body.manga-page .wp-manga-tags-wrapper .wp-manga-tags h5 {
  margin-top: 0;
}
body.manga-page .wp-manga-tags-wrapper .wp-manga-tags a:not(:hover) {
  color: #888;
}
body.manga-page .wp-manga-tags-wrapper .wp-manga-tags a:not(:first-child) {
  margin-left: 5px;
}
body.manga-page.reading-manga .wp-manga-tags-wrapper {
  margin-top: 26px;
}
.settings-page {
  /* nav-tab */
  /* tab-content */
}
.settings-page .nav-tabs-wrap {
  margin-bottom: 30px;
}
.settings-page .nav-tabs-wrap ul.nav-tabs {
  border-bottom: none;
}
.settings-page .nav-tabs-wrap ul.nav-tabs li {
  width: 100%;
  position: relative;
}
.settings-page .nav-tabs-wrap ul.nav-tabs li a {
  background-color: #f3f3f3;
  color: #333;
  font-weight: 600;
  padding: 10px 15px 8px;
  border: none;
  border-radius: 0;
  margin-right: 0;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
}
.settings-page .nav-tabs-wrap ul.nav-tabs li a i {
  font-size: 24px;
  vertical-align: middle;
  margin-right: 15px;
}
.settings-page .nav-tabs-wrap ul.nav-tabs li:after {
  content: "";
  width: 0;
  height: 0;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  border-left: 8px solid #f45c43;
  position: absolute;
  left: 100%;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  -o-transform: translateY(-50%);
  transform: translateY(-50%);
  opacity: 0;
  visibility: hidden;
}
@media (max-width: 768px) {
  .settings-page .nav-tabs-wrap ul.nav-tabs li:after {
    content: none;
  }
}
.settings-page .nav-tabs-wrap ul.nav-tabs li.active:after {
  opacity: 1;
  visibility: visible;
}
.settings-page .nav-tabs-wrap ul.nav-tabs li.active a {
  background: #eb3349;
  /* For browsers that do not support gradients */
  background: -webkit-linear-gradient(left, #eb3349 40%, #f45c43);
  /* For Safari 5.1 to 6.0 */
  background: -o-linear-gradient(right, #eb3349 40%, #f45c43);
  /* For Opera 11.1 to 12.0 */
  background: -moz-linear-gradient(right, #eb3349 40%, #f45c43);
  /* For Firefox 3.6 to 15 */
  background: linear-gradient(to right, #eb3349 40%, #f45c43);
  /* Standard syntax */
  color: #fff;
}
.settings-page .nav-tabs-wrap ul.nav-tabs li:not(.active):hover a {
  color: #eb3349;
}
.settings-page .tabs-content-wrap {
  padding-bottom: 30px;
}
.settings-page .tabs-content-wrap input[type=submit] {
  width: auto;
  padding: 10px 20px
}
.settings-page .tabs-content-wrap .tab-group-item .tab-item {
  padding: 10px 0px;
  border-bottom: 1px solid #ebebeb;
}
.settings-page .tabs-content-wrap .tab-group-item .tab-item:first-child {
  padding-top: 0;
}
.settings-page .tabs-content-wrap .tab-group-item .tab-item:last-child {
  border-bottom: none;
}
.settings-page .tabs-content-wrap .tab-group-item .tab-item:after {
  display: table;
  content: "";
  clear: both;
}
.settings-page .tabs-content-wrap .tab-group-item .tab-item .choose-avatar {
  width: 195px;
  height: 195px;
  position: relative;
  float: left;
  overflow: hidden;
  border: 2px solid #e1e1e1;
  margin-right: 22px;
  margin-bottom: 20px;
}
.settings-page .tabs-content-wrap .tab-group-item .tab-item .choose-avatar img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media (max-width: 992px) {
  .settings-page .tabs-content-wrap .tab-group-item .tab-item .choose-avatar {
    margin-right: auto;
    margin-left: auto;
    float: none;
  }
}
.settings-page .tabs-content-wrap .tab-group-item .tab-item .form-choose-avatar {
  overflow: hidden;
  color: #333;
}
.settings-page .tabs-content-wrap .tab-group-item .tab-item .form-choose-avatar input[type=file] {
  margin: 20px 0;
  color: #888888;
  font-size: 12px;
  padding: 0;
  line-height: 1;
  margin-left: 5px;
  display: none;
}
.settings-page .tabs-content-wrap .tab-group-item .tab-item .form-choose-avatar input[type=file]:focus {
  outline: 0;
}
.settings-page .tabs-content-wrap .tab-group-item .tab-item .form-choose-avatar .select-avata {
  display: block;
  position: relative;
  height: 40px
}
.settings-page .tabs-content-wrap .tab-group-item .tab-item .form-choose-avatar .select-avata:after {
  content: "Choose file";
  /* width: 100px; */
  /* height: 36px; */
  background: #ffffff;
  position: absolute;
  top: -1px;
  padding: 9px 11px;
  display: inline-block;
  font-size: 12px;
  line-height: 1;
  border-radius: 4px;
  border: 1px solid #333333;
  left: 0px;
  cursor: pointer;
  color: #333333;
}
.settings-page .tabs-content-wrap .tab-group-item .tab-item .form-choose-avatar .select-avata .file-name{padding-left: 100px}
@media (max-width: 992px) {
  .settings-page .tabs-content-wrap .tab-group-item .tab-item .form-choose-avatar {
    display: block;
    width: 100%;
    text-align: center;
  }
  .settings-page .tabs-content-wrap .tab-group-item .tab-item .form-choose-avatar input[type=file] {
    margin: 20px auto;
    max-width: 200px;
	display: block;
  }
  .settings-page .tabs-content-wrap .tab-group-item .tab-item .form-choose-avatar .select-avata:after {
    content: none;
  }
  .settings-page .tabs-content-wrap .tab-group-item .tab-item .form-choose-avatar .select-avata .file-name{display: none}
}
.settings-page .tabs-content-wrap .tab-group-item .tab-item .settings-title h3 {
  font-size: 14px;
  margin-bottom: 22px;
}
.settings-page .tabs-content-wrap .tab-group-item .tab-item label {
  font-weight: normal;
  color: #888888;
}
.settings-page .tabs-content-wrap .tab-group-item .tab-item .show {
  font-weight: 600;
  color: #333;
}
.settings-page .tabs-content-wrap .tab-group-item .tab-item input[type="text"],
.settings-page .tabs-content-wrap .tab-group-item .tab-item input[type="email"],
.settings-page .tabs-content-wrap .tab-group-item .tab-item input[type="url"],
.settings-page .tabs-content-wrap .tab-group-item .tab-item input[type="password"],
.settings-page .tabs-content-wrap .tab-group-item .tab-item input[type="search"],
.settings-page .tabs-content-wrap .tab-group-item .tab-item textarea {
  max-width: 300px;
}
.settings-page .tabs-content-wrap .tab-group-item .tab-item .form-group {
  font-size: 0;
}
.settings-page .tabs-content-wrap .tab-group-item .tab-item .form-group > * {
  display: inline-block;
  float: none;
  vertical-align: middle;
  font-size: 14px;
}
@media (max-width: 992px) {
  .settings-page .tabs-content-wrap .tab-group-item .tab-item .form-group .col-md-3 {
    width: 25%;
  }
  .settings-page .tabs-content-wrap .tab-group-item .tab-item .form-group .col-md-9 {
    width: 75%;
  }
}
@media (max-width: 480px) {
  .settings-page .tabs-content-wrap .tab-group-item .tab-item .form-group .col-md-3 {
    width: 100%;
  }
  .settings-page .tabs-content-wrap .tab-group-item .tab-item .form-group .col-md-9 {
    width: 100%;
  }
}
.settings-page .tabs-content-wrap .tab-group-item .tab-item .history-content {
  position: relative;
  padding: 10px;
  -webkit-transition: background 0.3s;
  -moz-transition: background 0.3s;
  -o-transition: background 0.3s;
  transition: background 0.3s;
}
.settings-page .tabs-content-wrap .tab-group-item .tab-item .history-content:after {
  display: table;
  content: "";
  clear: both;
}
.settings-page .tabs-content-wrap .tab-group-item .tab-item .history-content .item-thumb {
  width: 55px;
  float: left;
  overflow: hidden;
  margin-right: 10px;
}
.settings-page .tabs-content-wrap .tab-group-item .tab-item .history-content .item-infor {
  overflow: hidden;
}
.settings-page .tabs-content-wrap .tab-group-item .tab-item .history-content .item-infor .settings-title {
  margin-right: 20px;
}
.settings-page .tabs-content-wrap .tab-group-item .tab-item .history-content .item-infor .settings-title h3 {
  margin-top: 0;
  margin-bottom: 8px;
}
.settings-page .tabs-content-wrap .tab-group-item .tab-item .history-content .item-infor .chapter {
  line-height: 1.1;
}
.settings-page .tabs-content-wrap .tab-group-item .tab-item .history-content .item-infor .chapter span a {
  color: #eb3349;
}
.settings-page .tabs-content-wrap .tab-group-item .tab-item .history-content .item-infor .chapter span a:hover {
  color: #888888;
}
.settings-page .tabs-content-wrap .tab-group-item .tab-item .history-content .item-infor .chapter span + span:before {
  display: inline-block;
  content: "";
  width: 2px;
  height: 17px;
  background-color: #cccccc;
  vertical-align: middle;
  margin-right: 10px;
  margin-left: 10px;
}
.settings-page .tabs-content-wrap .tab-group-item .tab-item .history-content .item-infor .post-on {
  margin-top: 5px;
}
.settings-page .tabs-content-wrap .tab-group-item .tab-item .history-content .action {
  margin: 0;
  display: inline-block;
  position: absolute;
  top: 8px;
  right: 10px;
}
.settings-page .tabs-content-wrap .tab-group-item .tab-item .history-content .action a {
  padding: 0;
}
.settings-page .tabs-content-wrap .tab-group-item .tab-item .history-content:hover {
  cursor: pointer;
  background-color: #f3f3f3;
}
.settings-page .tabs-content-wrap .tab-group-item.image_setting .settings-heading,
.settings-page .tabs-content-wrap .tab-group-item.other_setting .settings-heading {
  background-color: #ebebeb;
  padding: 12px 22px;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
}
.settings-page .tabs-content-wrap .tab-group-item.image_setting .settings-heading h3,
.settings-page .tabs-content-wrap .tab-group-item.other_setting .settings-heading h3 {
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 600;
  color: #333;
  margin: 0;
}
.settings-page .tabs-content-wrap .tab-group-item.image_setting .tab-item,
.settings-page .tabs-content-wrap .tab-group-item.other_setting .tab-item {
  padding-left: 22px;
  padding-right: 22px;
}
.settings-page .tabs-content-wrap .tab-group-item.image_setting .tab-item .settings-title h3,
.settings-page .tabs-content-wrap .tab-group-item.other_setting .tab-item .settings-title h3 {
  margin-bottom: 15px;
  margin-top: 6px;
}
.settings-page .tabs-content-wrap .tab-group-item.image_setting .tab-item .checkbox label:before,
.settings-page .tabs-content-wrap .tab-group-item.other_setting .tab-item .checkbox label:before {
  padding-right: 10px;
  font-size: 18px;
  vertical-align: middle;
}
.settings-page table.list-bookmark {
  margin-bottom: 0 !important;
}
.settings-page table.list-bookmark > thead > tr > th {
  background-color: #ebebeb;
  border-bottom: none;
  font-weight: 600;
  color: #333;
}
.settings-page table.list-bookmark > thead > tr > th:nth-child(1) {
  border-top-left-radius: 5px;
}
.settings-page table.list-bookmark > thead > tr > th:nth-child(3) {
  border-top-right-radius: 5px;
}
.settings-page table.list-bookmark tbody tr:last-child {
  color: #888888;
}
.settings-page table.list-bookmark tbody tr:last-child:hover {
  background-color: inherit !important;
}
@media (max-width: 768px) {
  .settings-page table.list-bookmark > thead {
    display: none;
  }
  .settings-page table.list-bookmark > tbody tr {
    display: block;
    border: 1px solid #ddd;
    margin-bottom: 30px;
  }
  .settings-page table.list-bookmark > tbody tr td {
    display: block;
  }
  .settings-page table.list-bookmark > tbody tr td:first-child {
    border-top: none !important;
  }
  .settings-page table.list-bookmark > tbody tr td > div:before {
    content: "";
    font-weight: 700 !important;
    display: inline-block;
    width: 100px;
    padding: 15px;
    float: none;
    vertical-align: middle;
    color: #333;
  }
  .settings-page table.list-bookmark > tbody tr td > div.mange-name .item-thumb,
  .settings-page table.list-bookmark > tbody tr td > div.mange-name .item-infor {
    display: inline-block;
    float: none;
    vertical-align: middle;
    width: calc(100% - 126px);
    float: right;
  }
  .settings-page table.list-bookmark > tbody tr td > div.mange-name .item-infor {
    width: calc(100% - 115px);
  }
  .settings-page table.list-bookmark > tbody tr td > div.mange-name:before {
    content: "Name manga : ";
  }
  .settings-page table.list-bookmark > tbody tr td > div.action {
    margin: 10px 0 0;
  }
  .settings-page table.list-bookmark > tbody tr td > div.action:before {
    content: "Action : ";
  }
  .settings-page table.list-bookmark > tbody tr td > div.post-on:before {
    width: 110px;
    content: "Post on : ";
  }
  .settings-page table.list-bookmark > tbody tr:last-child {
    border: none !important;
    margin-bottom: 0;
  }
  .settings-page table.list-bookmark > tbody tr:last-child .remove-all {
    float: none !important;
  }
  .settings-page table.list-bookmark > tbody tr:last-child .remove-all:before {
    content: none;
  }
}
.settings-page > tbody > tr > td:nth-child(1),
.settings-page > tbody > tr > th:nth-child(1),
.settings-page > tfoot > tr > td:nth-child(1),
.settings-page > tfoot > tr > th:nth-child(1),
.settings-page > thead > tr > td:nth-child(1),
.settings-page > thead > tr > th:nth-child(1) {
  width: 65%;
}
.settings-page > tbody > tr > td:nth-child(2),
.settings-page > tbody > tr > th:nth-child(2),
.settings-page > tfoot > tr > td:nth-child(2),
.settings-page > tfoot > tr > th:nth-child(2),
.settings-page > thead > tr > td:nth-child(2),
.settings-page > thead > tr > th:nth-child(2) {
  width: 22%;
}
.settings-page > tbody > tr > td:nth-child(3),
.settings-page > tbody > tr > th:nth-child(3),
.settings-page > tfoot > tr > td:nth-child(3),
.settings-page > tfoot > tr > th:nth-child(3),
.settings-page > thead > tr > td:nth-child(3),
.settings-page > thead > tr > th:nth-child(3) {
  width: 13%;
}
.settings-page .mange-name:after {
  display: table;
  content: "";
  clear: both;
}
.settings-page .mange-name .item-thumb {
  width: 110px;
  float: left;
  margin: 12px;
  position: relative;
}
.settings-page .mange-name .item-thumb .c-notifications {
  background: #ef3e47;
  color: #fff;
  width: 14px;
  height: 14px;
  border-radius: 7px;
  font-size: 10px;
  text-align: center;
  position: absolute;
  top: -5px;
  left: -5px;
  line-height: 14px;
}
.settings-page .mange-name .item-infor {
  overflow: hidden;
}
.settings-page .mange-name .item-infor .post-title h3 {
  font-size: 14px;
  font-weight: 600;
  margin: 10px 0 12px;
}
.settings-page .mange-name .item-infor .chapter span a {
  color: #888888;
}
.settings-page .mange-name .item-infor .chapter span + span:before {
  content: ",";
  margin-right: 5px;
}
.settings-page .post-on {
  margin-top: 10px;
  color: #888888;
}
.settings-page .action {
  margin: 10px -15px 0;
}
.settings-page .action > * {
  display: inline-block;
  margin: 0;
  padding: 0 15px;
}
.settings-page .action .checkbox label {
  padding-left: 0;
}
.settings-page .action i.ion-ios-close:before {
  font-size: 20px;
  color: #b7b7b7;
}
.settings-page .action i.ion-ios-close:hover:before {
  color: #eb3449;
}
.settings-page .remove-all > * {
  display: inline-block;
  vertical-align: middle;
}
.settings-page .remove-all .checkbox {
  padding-right: 20px;
}
.settings-page .remove-all .checkbox label {
  padding-left: 0;
  -webkit-user-select: none;
  /* Chrome all / Safari all */
  -moz-user-select: none;
  /* Firefox all */
  -ms-user-select: none;
  /* IE 10+ */
  user-select: none;
}
.settings-page .remove-all .checkbox label:before {
  padding-right: 20px;
  display: inline-block;
  vertical-align: middle;
}
.settings-page .remove-all #delete-bookmark-manga {
  font-size: 13px;
  font-weight: 600;
  background-color: #eb3349;
  color: #fff;
  border: none;
  border-radius: 15px;
  padding-left: 20px;
  padding-right: 20px;
  -webkit-transition: all 200ms ease;
  -moz-transition: all 200ms ease;
  -o-transition: all 200ms ease;
  transition: all 200ms ease;
}
.settings-page .remove-all #delete-bookmark-manga:hover {
  background-color: #0f0f0f;
  color: #ffffff;
}
.settings-page .checkbox label:before {
  padding-right: 0px;
  font-size: 20px;
}
.settings-page input[type=checkbox]:checked + label:before {
  color: #666;
}
.settings-page input[type="submit"] {
  font-size: 13px;
  font-weight: 600;
  background-color: #eb3349;
  border: none;
  border-radius: 15px;
  padding-left: 20px;
  padding-right: 20px;
  color: #fff;
  -webkit-transition: all 0.2s;
  -moz-transition: all 0.2s;
  -o-transition: all 0.2s;
  transition: all 0.2s;
}
.settings-page input[type="submit"]:hover {
  background-color: #0f0f0f;
  color: #fff;
}
.settings-page input:not([type]),
.settings-page input[type="color"],
.settings-page input[type="email"],
.settings-page input[type="number"],
.settings-page input[type="password"],
.settings-page input[type="tel"],
.settings-page input[type="url"],
.settings-page input[type="text"],
.settings-page input[type="search"],
.settings-page textarea,
.settings-page select {
  background-color: #ffffff;
}
body.reading-manga .entry-header,
body.reading-manga .c-select-bottom {
  margin-bottom: 50px;
}
body.reading-manga .entry-header:after,
body.reading-manga .c-select-bottom:after {
  display: table;
  content: "";
  clear: both;
}
body.reading-manga .entry-header .entry-header_wrap,
body.reading-manga .c-select-bottom .entry-header_wrap {
  margin-bottom: 14px;
}
body.reading-manga .entry-header .entry-header_wrap .action-icon,
body.reading-manga .c-select-bottom .entry-header_wrap .action-icon {
  float: right;
}
body.reading-manga .entry-header .entry-header_wrap .action-icon ul,
body.reading-manga .c-select-bottom .entry-header_wrap .action-icon ul {
  margin-bottom: 0;
  margin-top: 3px;
}
body.reading-manga .entry-header .entry-header_wrap .action-icon ul li a,
body.reading-manga .c-select-bottom .entry-header_wrap .action-icon ul li a {
  width: 30px;
  height: 30px;
  display: block;
  text-align: center;
  background-color: #ebebeb;
  position: relative;
  border-radius: 50%;
  color: #eb3349;
  -webkit-transition: all ease-in-out 0.2s;
  -moz-transition: all ease-in-out 0.2s;
  -o-transition: all ease-in-out 0.2s;
  transition: all ease-in-out 0.2s;
}
body.reading-manga .entry-header .entry-header_wrap .action-icon ul li a i,
body.reading-manga .c-select-bottom .entry-header_wrap .action-icon ul li a i {
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  font-size: 18px;
  display: inline-block;
}
body.reading-manga .entry-header .entry-header_wrap .action-icon ul li:hover a,
body.reading-manga .c-select-bottom .entry-header_wrap .action-icon ul li:hover a {
  background-color: #eb3349;
  color: #ffffff;
}
body.reading-manga .entry-header .entry-header_wrap .action-icon,
body.reading-manga .c-select-bottom .entry-header_wrap .action-icon,
body.reading-manga .entry-header .entry-header_wrap .c-breadcrumb,
body.reading-manga .c-select-bottom .entry-header_wrap .c-breadcrumb {
  display: inline-block;
}
body.reading-manga .entry-header .c-selectpicker,
body.reading-manga .c-select-bottom .c-selectpicker {
  max-width: 450px;
}
body.reading-manga .entry-header .c-selectpicker .selectpicker,
body.reading-manga .c-select-bottom .c-selectpicker .selectpicker {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
body.reading-manga .entry-header .c-selectpicker label,
body.reading-manga .c-select-bottom .c-selectpicker label {
  margin-bottom: 0;
  position: relative;
}
body.reading-manga .entry-header .c-selectpicker label:after,
body.reading-manga .c-select-bottom .c-selectpicker label:after {
  position: absolute;
  top: 0;
  right: 0;
  content: "\f0dc";
  font-family: Font Awesome\ 5 Free;
  font-style: normal;
  font-weight: 900;
  text-decoration: inherit;
  background: transparent;
  width: 17px;
  top: 50%;
  transform: translateY(-50%);
}
body.reading-manga .entry-header .c-selectpicker select.selectpicker,
body.reading-manga .c-select-bottom .c-selectpicker select.selectpicker {
  padding: 10px 30px 10px 16px;
  border: none;
  background-color: #ebebeb;
  -webkit-transition: all ease-in-out 0.2s;
  -moz-transition: all ease-in-out 0.2s;
  -o-transition: all ease-in-out 0.2s;
  transition: all ease-in-out 0.2s;
  border-radius: 5px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
}
body.reading-manga .entry-header .c-selectpicker select.selectpicker:focus,
body.reading-manga .c-select-bottom .c-selectpicker select.selectpicker:focus {
  outline: none;
}
body.reading-manga .entry-header .c-selectpicker select.selectpicker option,
body.reading-manga .c-select-bottom .c-selectpicker select.selectpicker option {
  background-color: #fff;
  color: #333;
}
body.reading-manga .entry-header .c-selectpicker select.selectpicker:hover,
body.reading-manga .c-select-bottom .c-selectpicker select.selectpicker:hover {
  cursor: pointer;
  background-color: #f3f3f3;
}
body.reading-manga .entry-header .select-view,
body.reading-manga .c-select-bottom .select-view {
  float: left;
  margin: 0 -3.5px;
}
body.reading-manga .entry-header .select-view > *,
body.reading-manga .c-select-bottom .select-view > * {
  display: inline-block;
  padding: 0 3.5px;
}
body.reading-manga .entry-header .select-pagination,
body.reading-manga .c-select-bottom .select-pagination {
  float: right;
  margin: 0 -5px;
}
body.reading-manga .entry-header .select-pagination > *,
body.reading-manga .c-select-bottom .select-pagination > * {
  padding: 0 5px;
  display: inline-block;
  vertical-align: middle;
}
body.reading-manga .entry-header .select-pagination .nav-links,
body.reading-manga .c-select-bottom .select-pagination .nav-links {
  margin: 0 -1px;
  font-size: 0;
}
body.reading-manga .entry-header .select-pagination .nav-links .mobile-nav-btn,
body.reading-manga .c-select-bottom .select-pagination .nav-links .mobile-nav-btn {
  display: none;
}
body.reading-manga .entry-header .select-pagination .nav-links > *,
body.reading-manga .c-select-bottom .select-pagination .nav-links > * {
  display: inline-block;
  padding: 0 1px;
  font-size: 14px;
}
body.reading-manga .entry-header .select-pagination .nav-links > * a,
body.reading-manga .c-select-bottom .select-pagination .nav-links > * a {
  padding: 9px 17px;
  background-color: #eb3349;
  color: #fff;
  position: relative;
  -webkit-transition: all 200ms ease;
  -moz-transition: all 200ms ease;
  -o-transition: all 200ms ease;
  transition: all 200ms ease;
}
body.reading-manga .entry-header .select-pagination .nav-links > * a:before,
body.reading-manga .c-select-bottom .select-pagination .nav-links > * a:before {
  position: absolute;
  display: inline-block;
  font-family: "Ionicons";
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  text-rendering: auto;
  top: 50%;
  transform: translateY(-50%);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  vertical-align: middle;
  font-size: 21px;
}
body.reading-manga .entry-header .select-pagination .nav-links > * a:hover,
body.reading-manga .c-select-bottom .select-pagination .nav-links > * a:hover {
  background-color: #0f0f0f;
  color: #fff;
}
body.reading-manga .entry-header .select-pagination .nav-links .nav-previous a,
body.reading-manga .c-select-bottom .select-pagination .nav-links .nav-previous a {
  padding-left: 30px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}
body.reading-manga .entry-header .select-pagination .nav-links .nav-previous a:before,
body.reading-manga .c-select-bottom .select-pagination .nav-links .nav-previous a:before {
  left: 13px;
  content: "\f27d";
}
body.reading-manga .entry-header .select-pagination .nav-links .nav-next a,
body.reading-manga .c-select-bottom .select-pagination .nav-links .nav-next a {
  padding-right: 30px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}
body.reading-manga .entry-header .select-pagination .nav-links .nav-next a:before,
body.reading-manga .c-select-bottom .select-pagination .nav-links .nav-next a:before {
  right: 13px;
  content: "\f287";
}
@media (max-width: 1200px) {
  body.reading-manga .entry-header .select-view,
  body.reading-manga .c-select-bottom .select-view,
  body.reading-manga .entry-header .select-pagination,
  body.reading-manga .c-select-bottom .select-pagination {
    float: none;
  }
  body.reading-manga .entry-header .select-view .c-selectpicker,
  body.reading-manga .c-select-bottom .select-view .c-selectpicker,
  body.reading-manga .entry-header .select-pagination .c-selectpicker,
  body.reading-manga .c-select-bottom .select-pagination .c-selectpicker {
    padding: 5px 0;
  }
}
@media (max-width: 480px) {
  body.reading-manga .entry-header .select-view,
  body.reading-manga .c-select-bottom .select-view,
  body.reading-manga .entry-header .select-pagination,
  body.reading-manga .c-select-bottom .select-pagination {
    float: none;
  }
  body.reading-manga .entry-header .select-view .c-selectpicker,
  body.reading-manga .c-select-bottom .select-view .c-selectpicker,
  body.reading-manga .entry-header .select-pagination .c-selectpicker,
  body.reading-manga .c-select-bottom .select-pagination .c-selectpicker {
    max-width: 100%;
  }
  body.reading-manga .entry-header .select-view .c-selectpicker .selectpicker,
  body.reading-manga .c-select-bottom .select-view .c-selectpicker .selectpicker,
  body.reading-manga .entry-header .select-pagination .c-selectpicker .selectpicker,
  body.reading-manga .c-select-bottom .select-pagination .c-selectpicker .selectpicker {
    width: 100%;
  }
}

body.reading-manga .tips {
  background-color: #363636;
  padding: 30px;
  margin-bottom: 30px;
}
body.reading-manga .tips span {
  font-weight: 600;
  color: #fff;
}
body.reading-manga #comments.comments-area .comments-title,
body.reading-manga #comments.comments-area h4.comment-reply-title {
  margin-bottom: 10px;
}
body.reading-manga #comments.comments-area #respond.comment-respond {
  margin-top: 0;
}
body.reading-manga .apss-social-share {
  margin-bottom: 50px;
}
body.reading-manga .apss-social-share .apss-total-share-count {
  color: #333333;
}
body.reading-manga.text-ui-light .apss-social-share .apss-total-share-count,
body.reading-manga.text-ui-light .apss-social-share .apss-share-text {
  color: #fff;
}
.related-reading-wrap {
  margin-bottom: 20px;
}
.related-reading-wrap:after {
  display: table;
  content: "";
  clear: both;
}
.related-reading-wrap .related-reading-img {
  width: 70px;
  overflow: hidden;
  float: left;
  margin-right: 10px;
}
.related-reading-wrap .related-reading-img img {
  width: 100%;
}
.related-reading-wrap .related-reading-content {
  overflow: hidden;
}
.related-reading-wrap .related-reading-content h5 {
  font-weight: 600;
  margin-top: 0;
  font-size: 12px;
  line-height: 1.9em;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  /* fallback */
  max-height: calc( 5.7em );
  /* fallback */
}
body.archive .c-page-content .main-col-inner .entry-header .entry-title {
  border-bottom: none;
}
body.archive .c-page-content .main-col-inner .entry-header .entry-title h2.item-title {
  font-size: 4.5vh;
  text-align: center;
}
body.archive .paging-navigation {
  margin-top: 45px;
}
body.archive .navigation-ajax .load-ajax {
  margin-top: 50px;
}
body.archive .wp-pagenavi {
  margin-top: 48px;
}
.manga_content .paging-navigation {
  margin-top: 45px;
}
.manga_content .navigation-ajax .load-ajax {
  margin-top: 50px;
}
.manga_content .wp-pagenavi {
  margin-top: 48px;
}
.post-type-archive-wp-manga .c-breadcrumb-wrapper .c-breadcrumb {
  margin-bottom: 16px;
}
.post-type-archive-wp-manga .c-breadcrumb-wrapper .c-genres-block {
  margin-top: 0px;
}
/**
 * :: Single
 * -------------------------------------------------- */
.apss-social-share {
  margin: 30px 0px 20px;
}
@media (max-width: 768px) {
  .apss-social-share {
    margin-top: 20px;
    margin-bottom: 20px;
  }
}
.apss-social-share.apss-theme-3 {
  margin: 30px -1.5px 20px;
}
.apss-social-share.apss-theme-4 {
  margin: 30px -8px 20px;
}
.apss-social-share.apss-theme-5 {
  margin: 30px -5px 20px;
}
.apss-social-share.apss-theme-6 {
  margin: 30px 0 20px;
}
.c-blog-post .entry-header .entry-title {
  padding-bottom: 22px;
  margin-bottom: 18px;
}
.c-blog-post .entry-header .entry-meta {
  position: relative;
  padding: 0px 0px 19px 0px;
  border-bottom: 1px solid #ebebeb;
  margin-bottom: 29px;
}
.c-blog-post .entry-header .entry-meta > * {
  display: inline-block;
}
.c-blog-post .entry-header .entry-meta .post-on {
  padding-left: 38px;
  position: relative;
}
.c-blog-post .entry-header .entry-meta .post-on:before {
  content: "\f2ab";
  display: inline-block;
  font-family: "Ionicons";
  font-size: 38px;
  position: absolute;
  top: 9px;
  left: 0;
  margin-top: -15px;
  color: #eb3349;
}
.c-blog-post .entry-header .entry-meta .post-on .posted-on a {
  color: #666666;
}
.c-blog-post .entry-header .entry-meta .post-on .posted-on a:hover {
  color: #eb3349;
}
.c-blog-post .entry-header .entry-meta .post-on .c-blog__date {
  padding-right: 20%;
  display: inline-block;
}
.c-blog-post .entry-header .entry-meta .post-on, .c-blog-post .entry-header .entry-meta .post-on .font-meta{display:block}
.c-blog-post .entry-header .entry-meta .post-on .c-blog__date .post-category a:not(:hover) {
  color: #666666;
}
.c-blog-post .entry-header .entry-meta .post-on .c-blog__date .post-category a:hover {
  color: #eb3349;
}
@media (max-width: 600px) {
  .c-blog-post .entry-header .entry-meta .post-on {
    width: 100%;
  }
}
.c-blog-post .entry-header .entry-meta .total-count {
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  margin-top: -10px;
  font-size: 12px;
}
.c-blog-post .entry-header .entry-meta .total-count span {
  position: relative;
  padding-left: 20px;
}
.c-blog-post .entry-header .entry-meta .total-count span + span {
  margin-left: 22px;
}
.c-blog-post .entry-header .entry-meta .total-count span:before {
  display: inline-block;
  font-family: "Ionicons";
  font-size: 18px;
  position: absolute;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  -o-transform: translateY(-50%);
  transform: translateY(-50%);
  left: 3px;
}
.c-blog-post .entry-header .entry-meta .total-count span.count-view:before {
  content: "\f425";
}
.c-blog-post .entry-header .entry-meta .total-count span.count-share .apss-total-shares {
  display: none;
}
.c-blog-post .entry-header .entry-meta .total-count span.count-share .apss-social-share {
  display: inline-block;
  font-family: inherit;
  margin: 0;
}
.c-blog-post .entry-header .entry-meta .total-count span.count-share .apss-social-share .apss-total-share-count {
  margin-top: 0;
}
.c-blog-post .entry-header .entry-meta .total-count span.count-share .apss-social-share .apss-total-share-count .apss-count-number {
  padding: 0;
  font-size: inherit;
}
.c-blog-post .entry-header .entry-meta .total-count span.count-share:before {
  content: "\f3ac";
  font-size: 14px;
}
@media (max-width: 600px) {
  .c-blog-post .entry-header .entry-meta .total-count {
    width: 100%;
    position: relative;
    transform: translateY(0);
    top: 0;
    margin-top: 10px;
  }
}
.c-blog-post .c-blog__excerpt {
  margin-bottom: 33px;
  line-height: 2.14285714;
}
.c-blog-post .c-blog__thumbnail {
  margin-bottom: 40px;
}
.c-blog-post .c-blog__thumbnail img {
  margin: 0 auto;
}
.c-blog-post .entry-content {
  color: #333;
}
.c-blog-post .entry-content .entry-content_wrap {
  line-height: 2.14285714;
}
.c-blog-post .entry-content .entry-content_wrap:after {
  content: '';
  display: block;
  clear: both;
}
.c-blog-post .entry-content .entry-content_wrap p {
  margin-bottom: 20px;
}
.c-blog-post .entry-content .entry-content_wrap iframe {
  max-width: 100%;
}

.c-blog-post .entry-content .entry-content_wrap .read-container {
  text-align: center;
  margin-bottom: 50px;
  position: relative;
}
.c-blog-post .entry-content .entry-content_wrap .read-container img {
  margin: 0 auto 20px;
}
.c-blog-post .entry-content .entry-content_wrap .read-container .no-gaps img {
  margin: 0 auto;
}
.c-blog-post .entry-content .entry-content_wrap .read-container .page-link-hover {
  position: absolute;
  width: 50%;
  height: 100%;
  top: 0;
  left: 0;
}
.c-blog-post .entry-content .entry-content_wrap .read-container .page-link-hover.page-next-link {
  left: auto;
  right: 0;
}
@media (max-width: 480px) {
  .c-blog-post .entry-content .entry-content_wrap .read-container {
    margin-bottom: 30px;
  }
}
.c-blog-post .entry-content .entry-content_wrap .reading-content {
  position: relative;
}
.c-blog-post .entry-content .c-ads.body-bottom-ads img {
  margin-bottom: 0px;
}
.c-blog-post .item-tags {
  padding: 0px 0px 20px 0px;
}
.c-blog-post .item-tags .list-inline li {
  padding-right: 0;
}
.c-blog-post .page-links {
  padding: 0px 0px 20px 0px;
}
.apss-social-share {
  margin-bottom: 20px;
}
.apss-social-share .apss-share-text {
  margin-left: 0;
  font-size: 18px;
  opacity: 1;
  margin-top: 10px;
  margin-bottom: 10px;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
}
.apss-social-share .apss-share-text + .apss-single-icon > a {
  margin-left: 0;
}
.apss-social-share .apss-icon-block .fa {
  font-family: Font Awesome\ 5 Brands;
}
body.single .paging-navigation {
  border-bottom: 1px solid #ebebeb;
  padding-bottom: 34px;
  margin-top: 0;
  margin-bottom: 46px;
}
body.single .paging-navigation .nav-links .nav-button {
  display: inline-block;
  max-width: 213px;
  font-size: 14px;
  font-weight: 600;
  line-height: 2.14285714;
  width: calc(50% - 5px);
}
body.single .paging-navigation .nav-links .nav-button > a {
  text-decoration: none;
  position: relative;
  margin-bottom: 8px;
  display: inline-block;
}
body.single .paging-navigation .nav-links .nav-button > a:after {
  display: inline-block;
  font-family: "Ionicons";
  position: absolute;
  font-size: 17px;
  margin-top: -3px;
}
body.single .paging-navigation .nav-links .nav-button .c-blog__thumbnail {
  margin-bottom: 14px;
}
body.single .paging-navigation .nav-links .nav-button .c-blog__summary h6 {
  line-height: 1.6;
}
body.single .paging-navigation .nav-links .nav-previous {
  float: right;
  text-align: right;
}
body.single .paging-navigation .nav-links .nav-previous > a {
  padding-right: 15px;
}
body.single .paging-navigation .nav-links .nav-previous > a:after {
  content: '\f287';
  right: 0;
}
body.single .paging-navigation .nav-links .nav-next {
  float: left;
}
body.single .paging-navigation .nav-links .nav-next > a {
  padding-left: 15px;
}
body.single .paging-navigation .nav-links .nav-next > a:after {
  content: '\f27d';
  left: 0;
}
body.single .paging-navigation:after {
  display: table;
  content: "";
  clear: both;
}
body.single .paging-navigation:last-child {
  border-bottom: none;
  padding-bottom: 0;
  margin-bottom: 0;
}
#madara-comments.comments-area {
  position: relative;
}
#madara-comments.comments-area .comments-title,
#madara-comments.comments-area h4.comment-reply-title {
  margin-bottom: 28px;
  font-weight: 600;
}
#madara-comments.comments-area ol.comment-list {
  list-style: none;
  margin: 0;
  padding: 0px;
}
#madara-comments.comments-area ol.comment-list li.comment,
#madara-comments.comments-area ol.comment-list li.pingback {
  background: none;
  position: relative;
}
#madara-comments.comments-area ol.comment-list li.comment article.comment-body,
#madara-comments.comments-area ol.comment-list li.pingback article.comment-body {
  margin-bottom: 46px;
  padding: 0;
}
@media only screen and (max-width: 767px) {
  #madara-comments.comments-area ol.comment-list li.comment article.comment-body,
  #madara-comments.comments-area ol.comment-list li.pingback article.comment-body {
    margin-bottom: 30px;
  }
}
#madara-comments.comments-area ol.comment-list li.comment article.comment-body footer.comment-meta *,
#madara-comments.comments-area ol.comment-list li.pingback article.comment-body footer.comment-meta * {
  display: inline-block;
  margin-bottom: 3px;
}
#madara-comments.comments-area ol.comment-list li.comment article.comment-body footer.comment-meta .comment-author,
#madara-comments.comments-area ol.comment-list li.pingback article.comment-body footer.comment-meta .comment-author {
  margin-right: 10px;
}
#madara-comments.comments-area ol.comment-list li.comment article.comment-body footer.comment-meta .comment-author .avatar,
#madara-comments.comments-area ol.comment-list li.pingback article.comment-body footer.comment-meta .comment-author .avatar {
  float: left;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  position: absolute;
  margin-left: -120px;
  top: 0;
}
@media only screen and (max-width: 767px) {
  #madara-comments.comments-area ol.comment-list li.comment article.comment-body footer.comment-meta .comment-author .avatar,
  #madara-comments.comments-area ol.comment-list li.pingback article.comment-body footer.comment-meta .comment-author .avatar {
    width: 35px;
    height: 35px;
    margin-left: -80px;
  }
}
#madara-comments.comments-area ol.comment-list li.comment article.comment-body footer.comment-meta .comment-author .says,
#madara-comments.comments-area ol.comment-list li.pingback article.comment-body footer.comment-meta .comment-author .says {
  display: none;
}
#madara-comments.comments-area ol.comment-list li.comment article.comment-body footer.comment-meta .comment-author .fn,
#madara-comments.comments-area ol.comment-list li.pingback article.comment-body footer.comment-meta .comment-author .fn {
  color: #3d3d3d;
}
@media only screen and (max-width: 991px) {
  #madara-comments.comments-area ol.comment-list li.comment article.comment-body footer.comment-meta .comment-author,
  #madara-comments.comments-area ol.comment-list li.pingback article.comment-body footer.comment-meta .comment-author {
    display: block;
    margin-bottom: 0;
  }
  #madara-comments.comments-area ol.comment-list li.comment article.comment-body footer.comment-meta .comment-author .fn,
  #madara-comments.comments-area ol.comment-list li.pingback article.comment-body footer.comment-meta .comment-author .fn {
    margin-bottom: 0;
  }
  #madara-comments.comments-area ol.comment-list li.comment article.comment-body footer.comment-meta .comment-author .fn a,
  #madara-comments.comments-area ol.comment-list li.pingback article.comment-body footer.comment-meta .comment-author .fn a {
    margin-bottom: 0;
  }
}
#madara-comments.comments-area ol.comment-list li.comment article.comment-body footer.comment-meta .comment-metadata a time,
#madara-comments.comments-area ol.comment-list li.pingback article.comment-body footer.comment-meta .comment-metadata a time {
  position: relative;
  padding-left: 22px;
  padding-right: 10px;
  font-size: 12px;
  color: #adadad;
}
#madara-comments.comments-area ol.comment-list li.comment article.comment-body footer.comment-meta .comment-metadata a time:before,
#madara-comments.comments-area ol.comment-list li.pingback article.comment-body footer.comment-meta .comment-metadata a time:before {
  content: "\f017";
  font-family: Font Awesome\ 5 Free;
  font-style: normal;
  font-weight: 900;
  text-decoration: inherit;
  position: absolute;
  left: 0;
  font-size: 14px;
  top: -3px;
}
@media only screen and (max-width: 991px) {
  #madara-comments.comments-area ol.comment-list li.comment article.comment-body footer.comment-meta .comment-metadata *,
  #madara-comments.comments-area ol.comment-list li.pingback article.comment-body footer.comment-meta .comment-metadata * {
    margin-bottom: 0;
  }
}
#madara-comments.comments-area ol.comment-list li.comment article.comment-body footer.comment-meta .comment-awaiting-moderation,
#madara-comments.comments-area ol.comment-list li.pingback article.comment-body footer.comment-meta .comment-awaiting-moderation {
  display: none;
}
#madara-comments.comments-area ol.comment-list li.comment article.comment-body div.comment-content,
#madara-comments.comments-area ol.comment-list li.pingback article.comment-body div.comment-content {
  word-wrap: break-word;
}
#madara-comments.comments-area ol.comment-list li.comment article.comment-body div.comment-content p,
#madara-comments.comments-area ol.comment-list li.pingback article.comment-body div.comment-content p {
  margin-bottom: 0;
}
#madara-comments.comments-area ol.comment-list li.comment article.comment-body div.reply,
#madara-comments.comments-area ol.comment-list li.pingback article.comment-body div.reply {
  position: absolute;
  top: 0;
  right: 0px;
  font-weight: 600;
  font-size: 11px;
  text-transform: uppercase;
}
#madara-comments.comments-area ol.comment-list li.comment article.comment-body div.reply a,
#madara-comments.comments-area ol.comment-list li.pingback article.comment-body div.reply a {
  color: #999999;
}
#madara-comments.comments-area ol.comment-list li.comment article.comment-body .block-left,
#madara-comments.comments-area ol.comment-list li.pingback article.comment-body .block-left {
  width: 56px;
  height: 56px;
  float: left;
  overflow: hidden;
  border-radius: 50%;
  margin-right: 30px;
}
@media only screen and (max-width: 767px) {
  #madara-comments.comments-area ol.comment-list li.comment article.comment-body .block-left,
  #madara-comments.comments-area ol.comment-list li.pingback article.comment-body .block-left {
    width: 35px;
    height: 35px;
  }
}
#madara-comments.comments-area ol.comment-list li.comment article.comment-body .block-right,
#madara-comments.comments-area ol.comment-list li.pingback article.comment-body .block-right {
  overflow: hidden;
}
#madara-comments.comments-area ol.comment-list li.comment article.comment-body .block-right .comment-author .heading,
#madara-comments.comments-area ol.comment-list li.pingback article.comment-body .block-right .comment-author .heading {
  margin-top: 0;
  margin-bottom: 10px;
  font-weight: 600;
}
#madara-comments.comments-area ol.comment-list li.comment article.comment-body .block-right .comment-content,
#madara-comments.comments-area ol.comment-list li.pingback article.comment-body .block-right .comment-content {
  color: #666;
  line-height: 1.9;
  margin-bottom: 12px;
}
#madara-comments.comments-area ol.comment-list li.comment article.comment-body .block-right .comment-metadata,
#madara-comments.comments-area ol.comment-list li.pingback article.comment-body .block-right .comment-metadata {
  font-size: 12px;
  color: #999;
}
#madara-comments.comments-area ol.comment-list li.comment article.comment-body .block-right .comment-metadata a,
#madara-comments.comments-area ol.comment-list li.pingback article.comment-body .block-right .comment-metadata a {
  color: #999;
}
#madara-comments.comments-area ol.comment-list li.comment article.comment-body .block-right .comment-edit-link,
#madara-comments.comments-area ol.comment-list li.pingback article.comment-body .block-right .comment-edit-link {
  font-size: 12px;
}
#madara-comments.comments-area ol.comment-list li.comment ol.children,
#madara-comments.comments-area ol.comment-list li.pingback ol.children {
  list-style: none;
  padding-left: 40px;
}
#madara-comments.comments-area ol.comment-list li.comment ol.children .children .children,
#madara-comments.comments-area ol.comment-list li.pingback ol.children .children .children {
  padding-left: 0;
  margin-left: 0;
}

.text-ui-light #madara-comments.comments-area ol.comment-list li.comment article.comment-body .block-right .comment-content,
.text-ui-light #madara-comments.comments-area ol.comment-list li.pingback article.comment-body .block-right .comment-content {
  color: #fff;
}

@media only screen and (max-width: 767px) {
  #madara-comments.comments-area ol.comment-list li.comment ol.children,
  #madara-comments.comments-area ol.comment-list li.pingback ol.children {
    padding-left: 0;
    margin-left: 0;
  }
}
/* #madara-comments.comments-area ol.comment-list > li.comment:last-child article.comment-body,
#madara-comments.comments-area ol.comment-list > li.pingback:last-child article.comment-body {
  margin-bottom: 0;
} */
#madara-comments.comments-area #respond.comment-respond {
  margin-bottom: 30px;
}
#madara-comments.comments-area #respond.comment-respond .comment-form {
  font-size: 0;
  margin: 0 -15px;
}
#madara-comments.comments-area #respond.comment-respond .comment-form .comment-form-comment {
  width: 100%;
}
#madara-comments.comments-area #respond.comment-respond .comment-form .comment-form-comment #comment {
  width: 100%;
  border-radius: 5px;
  padding: 15px 20px 0px;
}
#madara-comments.comments-area #respond.comment-respond .comment-form .comment-form-comment + .form-submit {
  margin-top: 10px;
}
#madara-comments.comments-area #respond.comment-respond .comment-form > *:not(.comment-form-comment):not(.form-submit):not(.comment-notes):not(.logged-in-as) {
  width: 33.333333%;
  display: inline-block;
}
@media (max-width: 767px) {
  #madara-comments.comments-area #respond.comment-respond .comment-form > *:not(.comment-form-comment):not(.form-submit):not(.comment-notes):not(.logged-in-as) {
    width: 100%;
  }
}
#madara-comments.comments-area #respond.comment-respond .comment-form > * {
  font-size: 14px;
  margin-bottom: 16px;
  border: none;
  padding: 0 15px;
}
#madara-comments.comments-area #respond.comment-respond .comment-form > * input#author,
#madara-comments.comments-area #respond.comment-respond .comment-form > * input#email,
#madara-comments.comments-area #respond.comment-respond .comment-form > * input#url {
  width: 100%;
  border-radius: 5px;
  padding: 14px 20px;
}
#madara-comments.comments-area #respond.comment-respond .comment-form .form-submit {
  float: right;
}
#madara-comments.comments-area #respond.comment-respond .comment-form .form-submit #submit {
  padding: 12px 25px;
  border: none;
  border-radius: 25px;
  font-weight: 600;
  color: #fff;
  background-color: #eb3349;
  /*back mau grand*/
  -webkit-transition: background-color 200ms ease;
  -moz-transition: background-color 200ms ease;
  -o-transition: background-color 200ms ease;
  transition: background-color 200ms ease;
}
#madara-comments.comments-area #respond.comment-respond .comment-form .form-submit #submit:hover {
  background-color: #0f0f0f;
  cursor: pointer
}
#madara-comments.comments-area .comment:last-child #respond.comment-respond {
  margin-bottom: 0;
}
#madara-comments.comments-area .comment:last-child #respond.comment-respond .comment-form .form-submit {
  margin-bottom: 0;
}
#madara-comments.comments-area #respond.comment-respond:after {
  display: table;
  content: '';
  clear: both;
}
#madara-comments.comments-area + .related-manga {
  margin-top: 50px;
}
/**
 * :: Content
 * -------------------------------------------------- */
.c-blog-listing .c-blog__inner .c-blog__content .sticky .c-blog_item .c-blog__summary .heading:before {
  content: "";
  display: inline-block;
  width: 34px;
  height: 34px;
  background-image: url("images/post-format-icons/pin.png");
  vertical-align: middle;
  margin-right: 7px;
}
.c-blog-listing .c-blog__inner .c-blog__content .c-blog_item {
  margin-bottom: 23px;
}
.c-blog-listing .c-blog__inner .c-blog__content .c-blog_item .c-blog__thumbnail {
  margin-bottom: 14px;
}
.c-blog-listing .c-blog__inner .c-blog__content .c-blog_item .c-blog__summary .total-count {
  margin-bottom: 12px;
}
.c-blog-listing .c-blog__inner .c-blog__content .c-blog_item .c-blog__summary .total-count span {
  position: relative;
  padding-left: 19px;
}
.c-blog-listing .c-blog__inner .c-blog__content .c-blog_item .c-blog__summary .total-count span + span {
  margin-left: 28px;
}
.c-blog-listing .c-blog__inner .c-blog__content .c-blog_item .c-blog__summary .total-count span:before {
  display: inline-block;
  font-family: "Ionicons";
  font-size: 18px;
  position: absolute;
  top: 50%;
  left: 0;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  -o-transform: translateY(-50%);
  transform: translateY(-50%);
}
.c-blog-listing .c-blog__inner .c-blog__content .c-blog_item .c-blog__summary .total-count span.count-view:before {
  content: "\f425";
}
.c-blog-listing .c-blog__inner .c-blog__content .c-blog_item .c-blog__summary .total-count span.count-share {
  padding-left: 17px;
}
.c-blog-listing .c-blog__inner .c-blog__content .c-blog_item .c-blog__summary .total-count span.count-share .apss-total-shares {
  display: none;
}
.c-blog-listing .c-blog__inner .c-blog__content .c-blog_item .c-blog__summary .total-count span.count-share .apss-social-share {
  display: inline-block;
  font-family: inherit;
  margin: 0;
}
.c-blog-listing .c-blog__inner .c-blog__content .c-blog_item .c-blog__summary .total-count span.count-share .apss-social-share .apss-total-share-count {
  margin-top: 0;
}
.c-blog-listing .c-blog__inner .c-blog__content .c-blog_item .c-blog__summary .total-count span.count-share .apss-social-share .apss-total-share-count .apss-count-number {
  padding: 0;
  font-size: inherit;
}
.c-blog-listing .c-blog__inner .c-blog__content .c-blog_item .c-blog__summary .total-count span.count-share:before {
  content: "\f3ac";
  font-size: 14px;
}
.c-blog-listing .c-blog__inner .c-blog__content .c-blog_item .c-blog__summary .post-title h4 {
  line-height: 1.6;
  font-size: 16px;
}
.c-blog-listing .c-blog__inner .c-blog__content .c-row:last-child .col-md-6 .c-blog_item,
.c-blog-listing .c-blog__inner .c-blog__content .c-row:last-child .col-md-4 .c-blog_item {
  margin-bottom: 0;
}
.c-blog-listing .c-blog__inner .c-blog__content .c-row:last-child .col-md-6 .c-blog_item .post-title:last-child h4,
.c-blog-listing .c-blog__inner .c-blog__content .c-row:last-child .col-md-4 .c-blog_item .post-title:last-child h4 {
  margin-bottom: 0;
}
@media (max-width: 992px) {
  .c-blog-listing .c-blog__inner .c-blog__content .c-row:last-child .col-md-6 .c-blog_item,
  .c-blog-listing .c-blog__inner .c-blog__content .c-row:last-child .col-md-4 .c-blog_item {
    margin-bottom: 30px;
  }
  .c-blog-listing .c-blog__inner .c-blog__content .c-row:last-child .col-md-6 .c-blog_item .post-title:last-child h4,
  .c-blog-listing .c-blog__inner .c-blog__content .c-row:last-child .col-md-4 .c-blog_item .post-title:last-child h4 {
    margin-bottom: 10px;
  }
}
@media (max-width: 992px) {
  .c-blog-listing .c-blog__inner .c-blog__content .c-row:last-child .col-md-6:last-child .c-blog_item,
  .c-blog-listing .c-blog__inner .c-blog__content .c-row:last-child .col-md-4:last-child .c-blog_item {
    margin-bottom: 0;
  }
  .c-blog-listing .c-blog__inner .c-blog__content .c-row:last-child .col-md-6:last-child .c-blog_item .post-title:last-child h4,
  .c-blog-listing .c-blog__inner .c-blog__content .c-row:last-child .col-md-4:last-child .c-blog_item .post-title:last-child h4 {
    margin-bottom: 0;
  }
}
.c-blog-listing .c-blog__inner .c-blog__content:after {
  display: table;
  content: "";
  clear: both;
}
.c-blog-listing .c-read-more {
  display: block;
  font-weight: 600;
}
.c-blog-listing .c-read-more a {
  font-size: 12px;
}
/* Paging */
.navigation-ajax .load-ajax {
  margin-top: 43px;
  -webkit-transition: all 200ms ease-out;
  -moz-transition: all 200ms ease-out;
  -o-transition: all 200ms ease-out;
  transition: all 200ms ease-out;
  border: 1px solid #ebebeb;
  background-color: #f9f9f9;
  width: 100%;
  border-radius: 0;
  font-size: 14px;
  line-height: 2.142857142857143;
  font-weight: 600;
}
.navigation-ajax .load-ajax .load-title {
  display: inline-block;
  vertical-align: baseline;
  -webkit-transition: padding 0.2s ease-out;
  -moz-transition: padding 0.2s ease-out;
  -o-transition: padding 0.2s ease-out;
  transition: padding 0.2s ease-out;
}
.navigation-ajax .load-ajax .load-title ~ div {
  display: inline-block;
  width: 2px;
  height: 2px;
  background-color: #999999;
  display: none;
  vertical-align: baseline;
}
.navigation-ajax .load-ajax .load-title i {
  margin-left: 6px;
}
.navigation-ajax .load-ajax:hover {
  background: #eb3349;
  border-color: #eb3349;
}
.navigation-ajax .load-ajax:hover .load-title {
  color: #fff;
}
.navigation-ajax .load-ajax.show-loading {
  pointer-events: none;
  border-color: #f9f9f9;
  background-color: #f9f9f9;
}
.navigation-ajax .load-ajax.show-loading i {
  display: none;
}
.navigation-ajax .load-ajax.show-loading .load-title {
  padding-right: 25px;
  color: #999999;
}
.navigation-ajax .load-ajax.show-loading .load-title ~ div {
  display: inline-block;
}
.navigation-ajax .load-ajax.show-loading .load-title ~ div:nth-child(2) {
  animation: loadingOpacity 0.5s ease-in-out 0.2s infinite alternate;
  -webkit-animation: loadingOpacity 0.5s ease-in-out 0.2s infinite alternate;
  margin-left: -25px;
}
.navigation-ajax .load-ajax.show-loading .load-title ~ div:nth-child(3) {
  animation: loadingOpacity 0.5s ease-in-out 0.35s infinite alternate;
  -webkit-animation: loadingOpacity 0.5s ease-in-out 0.35s infinite alternate;
}
.navigation-ajax .load-ajax.show-loading .load-title ~ div:nth-child(4) {
  animation: loadingOpacity 0.5s ease-in-out 0.5s infinite alternate;
  -webkit-animation: loadingOpacity 0.5s ease-in-out 0.5s infinite alternate;
}
/* wp-pagenavi */
.wp-pagenavi {
  float: right;
  margin-top: 41px;
}
.wp-pagenavi a,
.wp-pagenavi span {
  padding: 7px 14px;
  border: none;
  font-weight: 600;
  display: inline-block;
}
.wp-pagenavi a:not(:hover),
.wp-pagenavi span:not(:hover) {
  color: #888888;
}
.wp-pagenavi span {
  background-color: #f3f3f3;
}
.wp-pagenavi a {
  -webkit-transition: background-color 0.3s;
  -moz-transition: background-color 0.3s;
  -o-transition: background-color 0.3s;
  transition: background-color 0.3s;
}
.wp-pagenavi a.nextpostslink,
.wp-pagenavi a.previouspostslink {
  background-color: #f3f3f3;
}
.wp-pagenavi a:hover {
  background-color: #eb3349;
  color: #fff;
}
.wp-pagenavi .current {
  color: #333333 !important;
}
@keyframes loadingOpacity {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@-webkit-keyframes loadingOpacity {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.site-content .main-col .item-tags ul {
  margin: 0;
}
.site-content .main-col .item-tags ul li {
  padding: 0;
}
.site-content .main-col .item-tags ul li a {
  padding: 0;
  font-size: 12px;
  font-weight: 600;
  padding: 5px 15px;
  background-color: #f3f3f3;
  border-radius: 15px;
  display: inline-block;
  margin: 5px 5px 0 0;
  float: left;
  -webkit-transition: background-color 200ms ease;
  -moz-transition: background-color 200ms ease;
  -o-transition: background-color 200ms ease;
  transition: background-color 200ms ease;
}
.site-content .main-col .item-tags ul li a:hover {
  color: #fff;
  background-color: #eb3349;
}
/**
 * :: Plugins
 * -------------------------------------------------- */
.manga-slider {
  /* layout slider */
}
.manga-slider .slider__container.slick-dotted {
  margin-bottom: 0px;
}
.manga-slider .slider__container .slick-dots {
  bottom: -35px;
}
.manga-slider .slider__container .slick-dots li {
  margin: 0;
}
.manga-slider .slider__container .slick-dots li button:before {
  font-size: 10px;
}
.manga-slider .slider__container .slick-dots li button:hover:before {
  color: #eb3349;
}
.manga-slider .slider__container .slick-dots li.slick-active button:before {
  color: #eb3349;
}
.manga-slider .slider__container .slick-list {
  padding-left: 0px !important;
  /*use style center mode*/
  padding-right: 0px !important;
  /*use style center mode*/
}
.manga-slider .slider__container .slick-list .slick-track .slider__item {
  position: relative;
}
.manga-slider .slider__container .slick-list .slick-track .slider__item .slider__thumb .slider__thumb_item {
  position: relative;
}
.manga-slider .slider__container .slick-list .slick-track .slider__item .slider__thumb .slider__thumb_item .slider-overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #ebebeb;
  /* For browsers that do not support gradients */
  background: -webkit-linear-gradient(top, rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.9));
  /*Safari 5.1-6*/
  background: -o-linear-gradient(bottom, rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.9));
  /*Opera 11.1-12*/
  background: -moz-linear-gradient(bottom, rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.9));
  /*Fx 3.6-15*/
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.9));
  /*Standard*/
  opacity: 1;
  transition: all 0.3s;
}
.manga-slider .slider__container .slick-list .slick-track .slider__item .slider__thumb .slider__thumb_item img {
  width: 100%;
  height: auto;
}
.manga-slider .slider__container .slick-list .slick-track .slider__item .slider__thumb a:focus {
  outline: none;
}
.manga-slider .slider__container .slick-list .slick-track .slider__item .slider__content {
  position: absolute;
  bottom: 0px;
  left: 0px;
  right: 0px;
  padding: 0px 20px;
  color: #fff;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
}
.manga-slider .slider__container .slick-list .slick-track .slider__item .slider__content .slider__content_item {
  -webkit-transition: -webkit-transform 0.35s;
  transition: transform 0.35s;
  webkit-transform: translate3d(0, 40px, 0);
  transform: translate3d(0, 40px, 0);
  padding-bottom: 32px;
}
.manga-slider .slider__container .slick-list .slick-track .slider__item .slider__content .slider__content_item .post-title h4 {
  margin-bottom: 28px;
  line-height: 28px;
}
.manga-slider .slider__container .slick-list .slick-track .slider__item .slider__content .slider__content_item .post-title h4 a {
  color: #fff;
}
.manga-slider .slider__container .slick-list .slick-track .slider__item.no-thumb .slider__content {
  position: static;
  opacity: 1;
  visibility: visible;
}
.manga-slider .slider__container .slick-list .slick-track .slider__item.no-thumb .slider__content .slider__content_item .post-title h4 a {
  color: #eb3349;
}
.manga-slider .slider__container .slick-list .slick-track .slider__item:hover .slider__content .slider__content_item {
  webkit-transform: translate3d(0, 30px, 0);
  transform: translate3d(0, 30px, 0);
}
.manga-slider.style-1.no-padding {
  padding: 0;
}
.manga-slider.style-1.no-padding .slider__container {
  margin-bottom: 15px;
}
.manga-slider.style-1.no-padding .slider__item .slider__content {
  opacity: 0;
  visibility: hidden;
  text-align: center;
}
.manga-slider.style-1.no-padding .slider__item.slick-center .slider__content {
  opacity: 1;
  visibility: visible;
}
.manga-slider.style-1.no-padding .slider__item.slick-center .slider__thumb .slider__thumb_item .slider-overlay {
  opacity: 0.5;
}
.manga-slider.style-1.no-padding .slider__item:hover .slider__content {
  opacity: 1;
  visibility: visible;
}
.manga-slider.style-1.no-padding .slider__item:hover .slider__thumb .slider__thumb_item .slider-overlay {
  opacity: 0.5;
}
.manga-slider.style-3 .slider__container {
  -webkit-box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.25);
  margin-bottom: 15px;
}
.manga-slider.style-3 .slick-list {
  margin-left: 1.5px;
  margin-right: 1.5px;
}
.manga-slider.style-3 .slider__item {
  padding: 3px 1.5px;
}
.manga-slider.style-2 .slider__container .slick-list {
  margin-left: -15px;
  margin-right: -15px;
}
.manga-slider.style-2 .slider__container .slick-list .slick-track .slider__item {
  padding: 0 15px;
  margin-bottom: 15px;
}
.manga-slider.style-2 .slider__container .slick-list .slick-track .slider__item .slider__thumb {
  padding: 3px;
  background-color: #fff;
  -webkit-box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.25);
}
.manga-slider.style-2 .slider__container .slick-list .slick-track .slider__item .slider__content {
  left: 15px;
  right: 15px;
}
.manga-slider.style-2 .slider__container .slick-dots {
  bottom: -20px;
}
.popular-slider .slider__container {
  overflow: hidden;
}
.popular-slider .slider__container .slick-list {
  margin: 0 -15px;
}
.popular-slider .slider__container .slider__item {
  padding-left: 15px;
  padding-right: 15px;
}
.popular-slider .slider__container .slider__item .item__wrap {
  background-color: #FFFFFF;
  -webkit-transition: box-shadow 0.3s;
  -moz-transition: box-shadow 0.3s;
  -o-transition: box-shadow 0.3s;
  transition: box-shadow 0.3s;
}
.popular-slider .slider__container .slider__item .item__wrap:after {
  display: table;
  content: "";
  clear: both;
}
.popular-slider .slider__container .slider__item .slider__thumb {
  width: 126px;
  float: left;
  overflow: hidden;
}
.popular-slider .slider__container .slider__item .slider__content {
  width: calc( 100% - 126px);
  overflow: hidden;
  padding: 20px 15px;
}
.popular-slider .slider__container .slider__item .slider__content .slider__content_item .font-meta {
  margin-bottom: 18px;
}
.popular-slider .slider__container .slider__item .slider__content .slider__content_item .chapter-item .chapter a {
  border: 1px solid #ebebeb;
  border-radius: 15px;
  padding: 0 10px;
  display: inline-block;
  font-size: 12px;
  margin-bottom: 5px;
  font-weight: 600;
  -webkit-transition: background-color 200ms ease;
  -moz-transition: background-color 200ms ease;
  -o-transition: background-color 200ms ease;
  transition: background-color 200ms ease;
  -webkit-transition: border-color 200ms ease;
  -moz-transition: border-color 200ms ease;
  -o-transition: border-color 200ms ease;
  transition: border-color 200ms ease;
}
.popular-slider .slider__container .slider__item .slider__content .slider__content_item .chapter-item .chapter a:hover {
  color: #fff;
  background-color: #eb3349;
  border-color: #eb3349;
}
.popular-slider .slider__container .slider__item .slider__content .slider__content_item .post-title h4 {
  font-size: 14px;
  margin-top: 3px;
  line-height: 17px;
}
.popular-slider .slider__container .slider__item .slider__content .slider__content_item .post-title h4 a {
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  /* fallback */
  max-height: calc( 2.4em );
  /* fallback */
}
.popular-slider .slider__container .slider__item:hover .item__wrap {
  -webkit-box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.35);
  -moz-box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.35);
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.35);
}
.popular-slider .slider__container .slick-arrow {
  width: 30px;
  height: 30px;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
  -webkit-transition: background-color 200ms ease;
  -moz-transition: background-color 200ms ease;
  -o-transition: background-color 200ms ease;
  transition: background-color 200ms ease;
}
.popular-slider .slider__container .slick-arrow:hover {
  background-color: #eb3349;
}
.popular-slider .slider__container .slick-arrow:before {
  display: inline-block;
  font-family: "Ionicons";
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  text-rendering: auto;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.popular-slider .slider__container .slick-next:before {
  content: "\f284";
}
.popular-slider .slider__container .slick-prev:before {
  content: "\f282";
}
.popular-slider.style-1 {
  position: relative;
}
.popular-slider.style-1 .c-blog__heading,
.popular-slider.style-1 .widget-heading {
  border: none;
  position: absolute;
  top: 0;
}
@media (max-width: 600px) {
  .popular-slider.style-1 .c-blog__heading,
  .popular-slider.style-1 .widget-heading {
    position: relative;
    margin-bottom: 20px;
  }
}
.popular-slider.style-1 .c-blog__heading i {
  vertical-align: bottom;
  margin-bottom: 0;
}
.popular-slider.style-1 .c-blog__heading.style-2 {
  border-bottom: none !important;
}
.popular-slider.style-1 .slider__container .slick-list {
  padding: 50px 0 10px;
}
.popular-slider.style-1 .slider__container .slick-arrow {
  top: 0;
  -ms-transform: translate(0, 0);
  -webkit-transform: translate(0, 0);
  transform: translate(0, 0);
}
.popular-slider.style-1 .slider__container .slick-next {
  right: 0;
  left: auto;
}
.popular-slider.style-1 .slider__container .slick-prev {
  right: 40px;
  left: auto;
}
.popular-slider.style-2 .slider__container {
  overflow: inherit;
  margin: 0 -40px;
}
.popular-slider.style-2 .slider__container .slick-list {
  margin: 0 25px;
  padding: 50px 0;
}
.popular-slider.style-2 .slider__container .slick-list:after,
.popular-slider.style-2 .slider__container .slick-list:before {
  position: absolute;
  content: "";
  display: block;
  width: 15px;
  height: 100%;
  background: #fff;
  top: 0;
  z-index: 1;
}
.popular-slider.style-2 .slider__container .slick-list:before {
  left: 0;
}
.popular-slider.style-2 .slider__container .slick-list:after {
  right: 0;
}
.popular-slider.style-3 .c-blog__heading {
  border-bottom: none;
  margin-bottom: 0;
}
.popular-slider.style-3 .c-blog__heading.style-2 {
  margin-bottom: 10px;
}
.popular-slider.style-3 .c-blog__heading.style-2 i {
  vertical-align: bottom;
}
.popular-slider.style-3 .widget-heading {
  margin-bottom: 10px;
}
.popular-slider.style-3 .slider__container .slick-list {
  padding: 10px 0;
}
.popular-slider.style-3 .slider__container .slick-next {
  right: 0px;
}
.popular-slider.style-3 .slider__container .slick-prev {
  left: 0px;
}
.popular-slider .slider__container .slider__item .slider__content .slider__content_item .chapter-item .chapter a{line-height: 1.5em;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    max-height: calc( 1.7em );
}


#main-sidebar .search-navigation__wrap .link-adv-search {
  display: none;
}
#main-sidebar .search-navigation__wrap ul.main-menu-search.nav-menu li.menu-search .open-search-main-menu {
  display: none;
}
#main-sidebar .search-navigation__wrap ul.main-menu-search.nav-menu li.menu-search .search-main-menu form {
  position: relative;
}
@media (max-width: 1200px) {
  #main-sidebar .search-navigation__wrap ul.main-menu-search.nav-menu li.menu-search .search-main-menu form {
    width: 220px;
  }
}
#main-sidebar .search-navigation__wrap ul.main-menu-search.nav-menu li.menu-search .search-main-menu form input[type="text"] {
  width: 100%;
  height: 38px;
  border: 1px solid rgba(45, 45, 45, 0.3);
  border-radius: 5px;
  padding: 0 45px 0 15px;
}
#main-sidebar .search-navigation__wrap ul.main-menu-search.nav-menu li.menu-search .search-main-menu form input[type="text"]:focus {
  outline: none;
}
#main-sidebar .search-navigation__wrap ul.main-menu-search.nav-menu li.menu-search .search-main-menu form i {
  position: absolute;
  right: 10px;
  top: 4px;
  font-size: 24px;
}
#main-sidebar .search-navigation__wrap ul.main-menu-search.nav-menu li.menu-search .search-main-menu form input[type=submit] {
  position: absolute;
  top: 5px;
  right: 0;
  font-size: 0;
  background-color: transparent;
  border: none;
  padding: 14px 19px;
  border-left: 1px solid rgba(45, 45, 45, 0.3);
}
#main-sidebar .search-navigation__wrap ul.main-menu-search.nav-menu li.menu-search .search-main-menu form .manga-search-field.ui-autocomplete-loading + input + i.ion-ios-search-strong {
  display: none;
}
#main-sidebar .search-navigation__wrap ul.main-menu-search.nav-menu li.menu-search .search-main-menu form .manga-search-field.ui-autocomplete-loading + input + i.ion-ios-search-strong + .loader-inner {
  display: block;
}
#main-sidebar .search-navigation__wrap ul.main-menu-search.nav-menu li.menu-search .search-main-menu form .manga-autocomplete.ui-autocomplete {
  z-index: 99;
  box-shadow: 1px 1px 3px #cecece;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  margin-top: 5px;
  position: absolute !important;
  top: unset !important;
  left: unset !important;
  background-color: #fff;
  border: 1px solid #cccccc;
}
#main-sidebar .search-navigation__wrap ul.main-menu-search.nav-menu li.menu-search .search-main-menu form .manga-autocomplete.ui-autocomplete > li {
  padding: 5px;
}
#main-sidebar .search-navigation__wrap ul.main-menu-search.nav-menu li.menu-search .search-main-menu form .manga-autocomplete.ui-autocomplete > li:not(.last-child) {
  border-bottom: 1px solid #cccccc;
  padding: 5px;
  cursor: pointer;
}
#main-sidebar .search-navigation__wrap ul.main-menu-search.nav-menu li.menu-search .search-main-menu form .manga-autocomplete.ui-autocomplete > li:hover {
  background-color: rgba(218, 218, 218, 0.39);
}
#main-sidebar .search-navigation__wrap ul.main-menu-search.nav-menu li.menu-search .search-main-menu form .manga-autocomplete.ui-autocomplete > li .manga-text-highlight {
  font-weight: 700;
}
#main-sidebar .search-navigation__wrap ul.main-menu-search.nav-menu li.menu-search .search-main-menu form .loader-inner {
  display: none;
  position: absolute;
  right: 18px;
  top: 21px;
  transform: scale(0.6);
}
#main-sidebar .search-navigation__wrap ul.main-menu-search.nav-menu li.menu-search .search-main-menu form .loader-inner > div:first-child {
  border-left-color: #888888;
  border-right-color: #888888;
}
#main-sidebar .search-navigation__wrap ul.main-menu-search.nav-menu li.menu-search .search-main-menu form .loader-inner > div:last-child {
  border-color: #888888;
}
#main-sidebar .search-navigation__wrap ul,
#main-sidebar .search-navigation__wrap li {
  list-style: none;
  padding: 0;
}
#main-sidebar .widget-manga-search .manga-search-form input[type="text"] {
  background: transparent;
  -webkit-transition: background-color 200ms ease;
  -moz-transition: background-color 200ms ease;
  -o-transition: background-color 200ms ease;
  transition: background-color 200ms ease;
}
#main-sidebar .widget-manga-search .manga-search-form input[type="text"]:hover {
  background-color: rgba(235, 235, 235, 0.3);
}
.ui-helper-hidden-accessible {
  display: none;
}
.site-header .c-header__top form#blog-post-search .loader-inner, body.search .c-search-header__wrapper .manga-search-form .loader-inner {
  display: none;
}
.site-header .c-header__top form#blog-post-search.manga-search-form input.ui-autocomplete-loading + input[type="submit"] + .loader-inner, .c-search-header__wrapper .manga-search-form input.ui-autocomplete-loading + input[type="submit"] + .loader-inner {
  display: block;
}
.site-header .c-header__top form#blog-post-search.manga-search-form .loader-inner, .c-search-header__wrapper .manga-search-form .loader-inner {
  position: absolute;
  top: 0;
  right: 15px;
  bottom: 0;
  padding: 13px 23px;
  background: var( --madara-main-color );
}
 .c-search-header__wrapper .manga-search-form .loader-inner{padding: 20px 2px}
 body.search .c-search-header__wrapper .search-content .search-form input.ui-autocomplete-loading + input[type="submit"] + .loader-inner + .icon{display: none}
.site-header .c-header__top form#blog-post-search.manga-search-form .loader-inner > div, .c-search-header__wrapper .manga-search-form .loader-inner > div {
  height: 20px;
}
.site-header .c-header__top .manga-autocomplete.ui-autocomplete, .c-search-header__wrapper .manga-autocomplete.ui-autocomplete {
  display: block;
  top: unset !important;
  position: absolute !important;
  width: calc(100% - 130px) !important;
  z-index: 99;
  box-shadow: 1px 1px 3px #cecece;
  background-color: #fff;
  border: 1px solid #cccccc;
  margin-left: 15px;
  border-top: none;
  padding-left: 0px;
}
.c-search-header__wrapper .manga-autocomplete.ui-autocomplete{margin-top: 60px; margin-left: 0; width: calc(100% - 81px) !important;}
.site-header .c-header__top .manga-autocomplete.ui-autocomplete > li, .c-search-header__wrapper .manga-autocomplete.ui-autocomplete > li {
  position: relative;
  top: unset;
  text-align: left;
  list-style: none;
  transform: none;
  padding: 10px 14px;
}
.site-header .c-header__top .manga-autocomplete.ui-autocomplete > li:not(.last-child), .c-search-header__wrapper .manga-autocomplete.ui-autocomplete > li:not(.last-child) {
  border-bottom: 1px solid #cccccc;
  cursor: pointer;
}
.site-header .c-header__top .manga-autocomplete.ui-autocomplete > li:hover, .c-search-header__wrapper .manga-autocomplete.ui-autocomplete > li:hover {
  background-color: rgba(218, 218, 218, 0.39);
}
.site-header .c-header__top .manga-autocomplete.ui-autocomplete > li .manga-text-highlight, .c-search-header__wrapper .manga-autocomplete.ui-autocomplete > li .manga-text-highlight {
  font-weight: 700;
}
.wp-manga-user-section .c-user_item {
  text-align: center;
}
.wp-manga-user-section .c-user_item > * {
  display: inline-block;
  vertical-align: middle;
}
.wp-manga-user-section .c-user_item span {
  margin-right: 10px;
  color: #666;
}
.wp-manga-user-section .c-user_item .c-user_avatar {
  display: block;
  margin-top: 10px;
  position: relative;
}
.wp-manga-user-section .c-user_item .c-user_avatar img {
  width: 75px;
  height: 75px;
  border-radius: 50%;
  border: 2px solid #d7d7d7;
}
.wp-manga-user-section .c-user_item .c-user_menu {
  text-align: center;
  margin: 9px auto;
  opacity: 0;
  visibility: hidden;
  list-style: none;
  background-color: #f3f3f3;
  width: 65%;
  padding: 10px;
  z-index: 9999;
  border-bottom: 3px solid #eb3349;
  border-top: 1px solid #ebebeb;
  white-space: nowrap;
}
.wp-manga-user-section .c-user_item .c-user_menu:after {
  display: block;
  width: 100%;
  content: "";
  height: 15px;
  background-color: transparent;
  position: absolute;
  top: -15px;
  left: 50%;
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  -o-transform: translateX(-50%);
  transform: translateX(-50%);
}
.wp-manga-user-section .c-user_item .c-user_menu a {
  display: block;
  padding: 5px 10px;
  color: #666;
  -webkit-transition: all 0.2s;
  -moz-transition: all 0.2s;
  -o-transition: all 0.2s;
  transition: all 0.2s;
  font-weight: 600;
  position: relative;
}
.wp-manga-user-section .c-user_item .c-user_menu a:hover {
  color: #eb3349;
}
.wp-manga-user-section .c-user_item .c-user_avatar:hover {
  cursor: pointer;
}
.wp-manga-user-section .c-user_item .c-user_avatar:hover .c-user_menu {
  visibility: visible;
  opacity: 1;
  -webkit-transition: opacity 0.3s;
  -moz-transition: opacity 0.3s;
  -o-transition: opacity 0.3s;
  transition: opacity 0.3s;
}
/* Woocommerce CSS */
.woocommerce .c-breadcrumb-wrapper {
  padding-top: 25px;
  padding-bottom: 25px;
}
.woocommerce .star-rating,
.woocommerce .star-rating::before {
  color: #ffd900;
}
.woocommerce .woocommerce-ordering:after {
  content: "\f280";
  display: inline-block;
  font-family: Ionicons;
  speak: none;
  font-style: normal;
  font-weight: 400;
  font-variant: normal;
  text-transform: none;
  text-rendering: auto;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  right: 16px;
  color: #eb3349;
}
.woocommerce .c-woo-breadcrumb {
  font-size: 12px;
  color: #888;
  margin: 0;
  padding: 0;
}
.woocommerce .c-woo-breadcrumb li {
  display: inline-block;
  list-style: none;
}
.woocommerce .c-woo-breadcrumb a {
  color: #888;
}
.woocommerce .c-woo-breadcrumb a:hover {
  color: #eb3349;
}
.woocommerce .woocommerce-products-header .page-title {
  font-size: 4.5vh;
  margin-top: 0;
  margin-bottom: 39px;
}
.woocommerce span.onsale {
  width: 35px;
  height: 35px;
  font-size: 12px;
  padding: 0;
  background-color: #eb3349;
  text-transform: capitalize;
  right: -15px !important;
  top: -16px !important;
}
.woocommerce .products .product {
  text-align: center;
}
.woocommerce .products .star-rating {
  margin: 0 auto;
}
.woocommerce .product div.images .flex-control-thumbs li {
  padding-top: 5px;
  margin-right: 5px !important;
  width: calc((100% / 4) - (15px / 4)) !important;
}
.woocommerce .product div.images .flex-control-thumbs li:nth-child(4n) {
  margin-right: 0px !important;
}
.woocommerce div.entry-summary .entry-title {
  font-size: 43px;
  color: #000;
  margin-bottom: 10px;
  margin-top: -9px;
  text-transform: uppercase;
}
.woocommerce div.entry-summary .star-rating {
  font-size: 18px;
  margin-right: 7px;
}
.woocommerce div.entry-summary .star-rating span,
.woocommerce div.entry-summary .star-rating:before {
  color: #ffd900;
}
.woocommerce div.entry-summary p.price {
  color: #eb3349;
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 8px;
}
.woocommerce div.entry-summary p.price del {
  margin-right: 10px;
}
.woocommerce div.entry-summary .woocommerce-product-details__short-description {
  font-size: 14px;
  color: #888;
  line-height: 30px;
}
.woocommerce div.entry-summary .woocommerce-variation-description {
  margin-top: 20px;
}
.woocommerce div.entry-summary form.cart .variations {
  margin-bottom: 5px !important;
}
.woocommerce div.entry-summary form.cart .variations td {
  border: none !important;
  padding: 5px 0px !important;
}
.woocommerce div.entry-summary form.cart .variations tr:hover {
  background-color: transparent !important;
}
.woocommerce div.entry-summary form.cart .variations .value {
  position: relative;
}
.woocommerce div.entry-summary form.cart .variations .value:after {
  content: "\f104";
  display: inline-block;
  font-family: Ionicons;
  speak: none;
  font-style: normal;
  font-weight: 400;
  font-variant: normal;
  text-transform: none;
  text-rendering: auto;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  right: 16px;
  color: #eb3349;
}
.woocommerce div.entry-summary form.cart .variations .label {
  display: table-cell;
  vertical-align: middle !important;
  text-align: left;
  color: #eb3349;
  font-size: 12px;
  font-weight: 600;
  width: 68px !important;
}
.woocommerce div.entry-summary form.cart .variations .label label {
  margin-bottom: 0px;
}
.woocommerce div.entry-summary form.cart .variations .reset_variations {
  position: absolute;
  right: 0;
  bottom: -15px;
}
.woocommerce div.entry-summary form.cart .variations select {
  font-size: 12px;
  height: 35px;
  border: 1px solid #ebebeb;
  padding: 0;
  padding-left: 13px;
  border-radius: 4px;
}
.woocommerce div.entry-summary form.cart div.quantity {
  float: none;
  font-size: 0;
}
.woocommerce div.entry-summary form.cart .quantity-text,
.woocommerce div.entry-summary form.cart .quantity-select {
  display: inline-block;
}
.woocommerce div.entry-summary form.cart .quantity-text {
  color: #eb3349;
  font-size: 12px;
  font-weight: 600;
  width: 68px;
}
.woocommerce div.entry-summary form.cart .quantity-select input {
  display: inline-block;
  height: 35px;
  margin-right: 5px;
}
.woocommerce div.entry-summary form.cart .quantity-select input.minus,
.woocommerce div.entry-summary form.cart .quantity-select input.plus {
  width: 35px;
  background-color: #ebebeb;
  border: none;
  font-size: 14px;
}
.woocommerce div.entry-summary form.cart .quantity-select input.qty {
  width: 55px;
  border: 1px solid #ebebeb;
  font-size: 14px;
}
.woocommerce div.entry-summary form.cart .single_add_to_cart_button {
  background: #eb3349;
  padding: 11px 18px;
  margin-top: 27px;
  transition: color 200ms ease, background-color 200ms ease;
}
.woocommerce div.entry-summary form.cart .single_add_to_cart_button:hover {
  background: #0f0f0f;
}
.woocommerce div.product .woocommerce-product-rating {
  margin-bottom: 19px;
}
.woocommerce div.product .woocommerce-product-rating .woocommerce-review-link {
  font-size: 13px;
  margin-top: 0.5em;
  display: inline-block;
}
.woocommerce div.product .woocommerce-tabs ul.tabs:before {
  display: none;
}
@media (min-width: 768px) {
  .woocommerce div.product .woocommerce-tabs ul.tabs:after {
    content: "";
    width: 11px;
    height: 1px;
    background-color: #ccc;
    position: absolute;
    bottom: 0px;
    left: 0;
  }
}
.woocommerce div.product .woocommerce-tabs ul.tabs li {
  border: 1px solid #cccccc;
  background-color: #ebebeb;
  padding: 0 13px;
  margin: 0px -3px;
}
.woocommerce div.product .woocommerce-tabs ul.tabs li:before,
.woocommerce div.product .woocommerce-tabs ul.tabs li:after {
  border-radius: 0px;
}
.woocommerce div.product .woocommerce-tabs ul.tabs li:after {
  display: none;
}
.woocommerce div.product .woocommerce-tabs ul.tabs li a {
  font-weight: 600;
  color: #000 !important;
}
.woocommerce div.product .woocommerce-tabs h2 {
  font-size: 24px;
  margin-top: -3px;
  margin-bottom: 12px;
}
.woocommerce div.product .woocommerce-tabs .woocommerce-Tabs-panel--description {
  font-size: 14px;
  color: #888;
  line-height: 30px;
  padding-bottom: 20px;
  margin-bottom: 20px;
}
.woocommerce div.product .related h2 {
  font-size: 24px;
  color: #000;
  margin-bottom: 24px;
}
.woocommerce div.product .related .woocommerce-loop-product__title {
  text-transform: uppercase;
}
.woocommerce div.product .related .price {
  font-size: 13px !important;
}
.woocommerce div.product .related .star-rating {
  font-size: 13px;
  margin-bottom: 8px;
}
.woocommerce div.product .related .button {
  margin-top: 17px;
  padding: 11px 30px;
  background: #eb3349;
  background: -webkit-linear-gradient(left, #eb3349 40%, #f45c43);
  background: -o-linear-gradient(right, #eb3349 40%, #f45c43);
  background: -moz-linear-gradient(right, #eb3349 40%, #f45c43);
  background: linear-gradient(to right, #eb3349 40%, #f45c43);
  color: #fff;
}
.woocommerce div.product .related .button:hover {
  opacity: 0.8;
}

/* .woocommerce div.product div.images {
  margin-bottom: 103px;
} */

.woocommerce section.related.products {
    float: right;
    width: 100%;
}

.woocommerce div.product div.summary {
  margin-bottom: 97px;
}
.woocommerce ul.products {
  margin-bottom: 7px;
}
.woocommerce ul.products li.product h2 {
  font-size: 24px;
  color: #000;
  margin-bottom: 24px;
  transition: color 200ms ease;
}
.woocommerce ul.products li.product h2:hover {
  color: #eb3349;
}
.woocommerce ul.products li.product .woocommerce-loop-product__title {
  text-transform: uppercase;
}
.woocommerce ul.products li.product .price {
  font-size: 13px !important;
  color: #eb3349;
}
.woocommerce ul.products li.product .star-rating {
  font-size: 13px;
  margin-bottom: 8px;
}
.woocommerce ul.products li.product .button {
  margin-top: 17px;
  padding: 11px 30px;
  background: #eb3349;
  color: #fff;
}
.woocommerce ul.products li.product .button:hover {
  background: #0f0f0f;
}
.woocommerce .woocommerce-products-header__title {
  text-align: center;
  font-size: 43px;
}
.woocommerce .woocommerce-ordering {
  margin-bottom: 35px;
  position: relative;
}
.woocommerce .woocommerce-pagination {
  margin-bottom: 45px;
}
.woocommerce .woocommerce-pagination .page-numbers {
  border: none;
}
.woocommerce .woocommerce-pagination .page-numbers li {
  border: none;
}
.woocommerce .woocommerce-pagination .page-numbers li a,
.woocommerce .woocommerce-pagination .page-numbers li span {
  height: 35px;
  padding: 0px 12px;
  line-height: 35px;
  margin: 0px 2px;
}
.woocommerce .woocommerce-pagination .page-numbers li span.current {
  padding: 0px 15px;
  background: #eb3349;
  color: #fff;
  border-radius: 4px;
}
.woocommerce .woocommerce-pagination .page-numbers li .prev,
.woocommerce .woocommerce-pagination .page-numbers li .next {
  background-color: #f3f3f3;
  color: #888888;
  border-radius: 4px;
}
.woocommerce .woocommerce-pagination .page-numbers li .prev:hover,
.woocommerce .woocommerce-pagination .page-numbers li .next:hover {
  background: #eb3349;
  color: #fff;
}
.woocommerce .woocommerce-cart-form .quantity-text {
  display: none;
}
.woocommerce .woocommerce-cart-form .quantity-select input {
  display: inline-block;
  height: 35px;
  margin-right: 5px;
  vertical-align: top;
}
.woocommerce .woocommerce-cart-form .quantity-select input.minus,
.woocommerce .woocommerce-cart-form .quantity-select input.plus {
  width: 35px;
  background-color: #ebebeb;
  border: none;
  font-size: 14px;
  transition: all 0.2s;
  color: #908e8e;
}
.woocommerce .woocommerce-cart-form .quantity-select input.minus:hover,
.woocommerce .woocommerce-cart-form .quantity-select input.plus:hover {
  opacity: 0.8;
}
.woocommerce .woocommerce-cart-form .quantity-select input.qty {
  width: 55px;
  border: 1px solid #ebebeb;
  font-size: 14px;
}
.woocommerce .cart-collaterals .checkout-button.button.alt {
  background: #eb3349;
  color: #fff;
}
.woocommerce .cart-collaterals .checkout-button.button.alt:hover {
  background: #0f0f0f;
  color: #fff;
}
.woocommerce input.button,
.woocommerce .woocommerce-cart-form .cart button.button,
.woocommerce button.button.alt {
  background-color: #eb3349;
  color: #fff;
  transition: color 200ms ease, background-color 200ms ease;
}
.woocommerce input.button:hover,
.woocommerce .woocommerce-cart-form .cart button.button:hover,
.woocommerce button.button.alt:hover {
  background: #0f0f0f;
  color: #fff;
}
.woocommerce form .form-row .select2-container {
  line-height: 35px;
}
.woocommerce form .form-row .select2-container .select2-selection--single {
  height: auto;
}
.woocommerce form .form-row .select2-container .select2-selection--single .select2-selection__rendered {
  font-size: 12px;
  height: 35px;
  border: 1px solid #ebebeb;
  padding: 0;
  padding-left: 13px;
  border-radius: 4px;
  line-height: 35px;
}
.woocommerce form .form-row .select2-container .select2-selection--single .select2-selection__arrow {
  top: 50%;
  transform: translateY(-50%);
  right: 10px;
}
.woocommerce form .form-row .select2-container .select2-selection--single .select2-selection__arrow b {
  border-color: #eb3349 transparent transparent transparent;
}
.woocommerce #review_form #respond .comment-reply-title {
  color: #888888;
}
.woocommerce #review_form #respond .form-submit input {
  background: #eb3349;
  color: #fff;
  transition: color 200ms ease, background-color 200ms ease;
}
.woocommerce #review_form #respond .form-submit input:hover {
  background: #0f0f0f;
}
.woocommerce .woocommerce form .form-row.woocommerce-validated .select2-container,
.woocommerce .woocommerce form .form-row.woocommerce-validated input.input-text,
.woocommerce .woocommerce form .form-row.woocommerce-validated select {
  border-color: #eb3349;
}
.woocommerce-cart #coupon_code {
  padding: 4px 6px 5px;
  width: 110px;
}
.text-ui-light .c-woo-breadcrumb li a:not(:hover) {
  color: #888;
}
.text-ui-light.woocommerce ul.products li.product h2:not(:hover) {
  color: #fff;
}
.text-ui-light.woocommerce div.product .woocommerce-tabs .woocommerce-Tabs-panel {
  background-color: transparent;
}
.text-ui-light .woocommerce table.shop_table {
  border-color: rgba(211, 206, 210, 0.2);
}
.text-ui-light .woocommerce table.shop_table tfoot th,
.text-ui-light .woocommerce table.shop_table td {
  border-top: 1px solid rgba(211, 206, 210, 0.2);
}
.text-ui-light.woocommerce-cart .cart-collaterals .cart_totals tr th {
  border-color: rgba(211, 206, 210, 0.2);
}
.text-ui-light.woocommerce-page form .form-row textarea::-moz-placeholder,
.text-ui-light.woocommerce-page form .form-row input::-moz-placeholder {
  color: #fff;
  opacity: 0.7;
}
.text-ui-light.woocommerce-page form .form-row textarea:-ms-input-placeholder,
.text-ui-light.woocommerce-page form .form-row input:-ms-input-placeholder {
  color: #fff;
  opacity: 0.7;
}
.text-ui-light.woocommerce-page form .form-row textarea::-webkit-input-placeholder,
.text-ui-light.woocommerce-page form .form-row input::-webkit-input-placeholder {
  color: #fff;
  opacity: 0.7;
}
.text-ui-light.woocommerce-checkout .c-blog-post .entry-content,
.text-ui-light.woocommerce-cart .c-blog-post .entry-content {
  color: #ccc;
}
.text-ui-light .select2-container--default .select2-selection--single .select2-selection__rendered {
  color: #ccc;
}
.text-ui-light .select2-container--default .select2-selection--single {
  background-color: rgba(235, 235, 235, 0.2);
}
.text-ui-light .widget_shopping_cart .woocommerce-mini-cart__total strong {
  color: #fff;
}
.text-ui-light .widget_product_categories li a:not(:hover) {
  color: #ccc;
}
.text-ui-light.woocommerce-page .woocommerce-info > a {
  color: #888;
}
.text-ui-light.woocommerce-page input[type="text"],
.text-ui-light.woocommerce-page input[type="email"],
.text-ui-light.woocommerce-page input[type="search"],
.text-ui-light.woocommerce-page input[type="url"],
.text-ui-light.woocommerce-page input[type="password"],
.text-ui-light.woocommerce-page input[type="tel"],
.text-ui-light.woocommerce-page .input-text,
.text-ui-light.woocommerce-page select.orderby {
  color: #ccc;
}
.text-ui-light.woocommerce-page input[type="text"]:focus,
.text-ui-light.woocommerce-page input[type="email"]:focus,
.text-ui-light.woocommerce-page input[type="search"]:focus,
.text-ui-light.woocommerce-page input[type="url"]:focus,
.text-ui-light.woocommerce-page input[type="password"]:focus,
.text-ui-light.woocommerce-page input[type="tel"]:focus,
.text-ui-light.woocommerce-page .input-text:focus,
.text-ui-light.woocommerce-page select.orderby:focus {
  border-color: #eb3349;
}
.text-ui-light.woocommerce-page input[type="text"]:active,
.text-ui-light.woocommerce-page input[type="email"]:active,
.text-ui-light.woocommerce-page input[type="search"]:active,
.text-ui-light.woocommerce-page input[type="url"]:active,
.text-ui-light.woocommerce-page input[type="password"]:active,
.text-ui-light.woocommerce-page input[type="tel"]:active,
.text-ui-light.woocommerce-page .input-text:active,
.text-ui-light.woocommerce-page select.orderby:active {
  border-color: #eb3349;
}
.text-ui-light.woocommerce-page input[type="text"]:hover,
.text-ui-light.woocommerce-page input[type="email"]:hover,
.text-ui-light.woocommerce-page input[type="search"]:hover,
.text-ui-light.woocommerce-page input[type="url"]:hover,
.text-ui-light.woocommerce-page input[type="password"]:hover,
.text-ui-light.woocommerce-page input[type="tel"]:hover,
.text-ui-light.woocommerce-page .input-text:hover,
.text-ui-light.woocommerce-page select.orderby:hover {
  border-color: #eb3349;
}
.text-ui-light .woocommerce-ordering select {
  color: #ccc;
}
/**
 * :: Shortcodes
 * -------------------------------------------------- */
.shortcode-manga-chapter .item-thumb {
  max-width: 193px;
  float: left;
  overflow: hidden;
  margin-right: 20px;
}
@media (max-width: 992px) {
  .shortcode-manga-chapter .item-thumb {
    max-width: none;
    width: auto;
    float: none;
    display: inline-block;
    margin-right: 0;
    margin-bottom: 20px;
    padding: 15px;
    background-color: rgba(0, 0, 0, 0.1);
  }
  .shortcode-manga-chapter .item-thumb:after {
    display: table;
    content: "";
    clear: both;
  }
}
.shortcode-manga-chapter .item-summary {
  overflow: hidden;
}
@media (max-width: 992px) {
  .shortcode-manga-chapter .item-summary {
    text-align: left;
  }
}
.shortcode-manga-chapter .manga-title-badges {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  font-size: 10px;
  line-height: 10px;
  font-weight: 600;
  text-align: center;
  display: inline-block;
  float: left;
  margin-right: 7px;
  color: #fff;
  -webkit-transform: rotate(-10deg);
  -moz-transform: rotate(-10deg);
  -ms-transform: rotate(-10deg);
  -o-transform: rotate(-10deg);
}
.shortcode-manga-chapter .manga-title-badges.new {
  background-color: #37b7da;
}
.shortcode-manga-chapter .manga-title-badges.hot {
  background-color: #EB3349;
}
.shortcode-manga-chapter .post-title {
  margin-bottom: 14px;
}
.shortcode-manga-chapter .post-rating {
  line-height: 30px;
  margin-bottom: 10px;
}
.shortcode-manga-chapter .post-rating i {
  font-size: 26px;
  margin: 0 1px;
  color: #333;
}
.shortcode-manga-chapter .post-rating i.rating_current,
.shortcode-manga-chapter .post-rating i.rating_current_half {
  color: #FFD900;
}
.shortcode-manga-chapter .post-rating .total_votes {
  margin-left: 8px;
  font-weight: 600;
  color: #333;
  font-size: 22px;
}
.shortcode-manga-chapter .post-content_item {
  font-size: 0;
}
.shortcode-manga-chapter .post-content_item * {
  display: inline-block;
  font-size: 14px;
  vertical-align: top;
  line-height: 1.5;
  margin-bottom: 6px;
  margin-top: 0;
}
.shortcode-manga-chapter .post-content_item .summary-heading {
  width: 106px;
}
.shortcode-manga-chapter .post-content_item .summary-content {
  word-break: break-word;
  width: calc(100% - 106px);
}
.shortcode-manga-chapter .post-content_item .summary-content a:not(:first-child) {
  margin-left: 6px;
}
.shortcode-manga-chapter .post-content_item .summary-content .genres-content,
.shortcode-manga-chapter .post-content_item .summary-content .artist-content,
.shortcode-manga-chapter .post-content_item .summary-content .author-content {
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  /* fallback */
  max-height: calc( 3.4em );
  /* fallback */
  line-height: 1.5;
}
.shortcode-manga-chapter .post-content_item .summary-content .genres-content > *,
.shortcode-manga-chapter .post-content_item .summary-content .artist-content > *,
.shortcode-manga-chapter .post-content_item .summary-content .author-content > * {
  line-height: 1.5;
}
.shortcode-manga-chapter .manga-info {
  margin-bottom: 28px;
}
@media (max-width: 992px) {
  .shortcode-manga-chapter .manga-info {
    text-align: center;
  }
}
.shortcode-manga-chapter .list-chapter {
  display: block;
}
.shortcode-manga-chapter .list-chapter:after {
  content: '';
  display: table;
  clear: both;
}
.shortcode-manga-chapter .list-chapter .chapter {
  background-color: #ebebeb;
  padding: 4px 10px;
  border-radius: 10px;
  font-weight: 600;
  -webkit-transition: background-color 200ms ease;
  -moz-transition: background-color 200ms ease;
  -o-transition: background-color 200ms ease;
  transition: background-color 200ms ease;
  display: inline-block;
  margin-right: 6px;
}
.shortcode-manga-chapter .list-chapter .chapter a {
  color: #666666;
  font-weight: 600;
}
.shortcode-manga-chapter .list-chapter .chapter:hover {
  background-color: #eb3349;
}
.shortcode-manga-chapter .list-chapter .chapter:hover a {
  color: #fff;
}
.shortcode-manga-chapter .list-chapter .chapter-item {
  margin-bottom: 10px;
}
.shortcode-manga-chapter .list-chapter .chapter-item span {
  margin-right: 8px;
  display: inline-block;
}
.shortcode-manga-chapter .list-chapter .chapter-item span:last-child {
  margin-right: 0;
}
.shortcode-manga-chapter .list-chapter .chapter-item a {
  font-weight: 600;
}
.shortcode-manga-chapter .list-chapter .chapter-item a:not(:hover) {
  color: #333333;
}
/**
 * :: Widgets
 * -------------------------------------------------- */
.widget {
  margin-bottom: 30px;
  padding-left: 15px;
  padding-right: 15px;
}
.widget.widget_tag_cloud .tagcloud {
  margin: -5px;
}
.widget.widget_tag_cloud .tagcloud:after {
  display: table;
  content: "";
  clear: both;
}
.widget.widget_tag_cloud .tag-cloud-link {
  font-size: 12px !important;
  font-weight: 600;
  padding: 5px 15px;
  background-color: #f3f3f3;
  border-radius: 15px;
  display: inline-block;
  margin: 5px;
  float: left;
  -webkit-transition: background-color 200ms ease;
  -moz-transition: background-color 200ms ease;
  -o-transition: background-color 200ms ease;
  transition: background-color 200ms ease;
}
.widget.widget_tag_cloud .tag-cloud-link:hover {
  color: #fff;
  background-color: #eb3349;
}
.widget.widget_search .search-form {
  position: relative;
}
.widget.widget_search input[type="search"] {
  width: 100%;
  height: 38px;
  border: 1px solid rgba(45, 45, 45, 0.3);
  border-radius: 5px;
  padding: 0 45px 0 15px;
  background-color: transparent;
  -webkit-transition: background-color 200ms ease;
  -moz-transition: background-color 200ms ease;
  -o-transition: background-color 200ms ease;
  transition: background-color 200ms ease;
  font-weight: normal;
}
.widget.widget_search input[type="search"]:hover,
.widget.widget_search input[type="search"]:active {
  background-color: rgba(235, 235, 235, 0.3);
}
.widget.widget_search input[type=submit] {
  position: absolute;
  top: 5px;
  right: 0;
  font-size: 0;
  background-color: transparent;
  border: none;
  padding: 14px 19px;
  border-left: 1px solid rgba(45, 45, 45, 0.3);
  border-radius: 0;
}
.widget.widget_search label:after {
  content: "\f4a5";
  display: inline-block;
  font-family: "Ionicons";
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  text-rendering: auto;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: absolute;
  top: 7px;
  right: 10px;
  font-size: 24px;
}
.widget:not(.default):not(.background) > .c-widget-wrap {
  border: 3px solid #e1e1e1;
  padding: 20px;
}
.widget:not(.default).c-popular .popular-item-wrap:last-of-type {
  border-bottom: none;
  padding-bottom: 0;
  margin-bottom: 0;
}
.widget.default.c-popular .popular-item-wrap:last-of-type {
  margin-bottom: 0;
  padding-bottom: 0;
  border-bottom: none;
}
.widget.hot-topics .hot-topics-item-wrap {
  border-bottom: 1px solid #ebebeb;
  padding-bottom: 20px;
  margin-bottom: 20px;
}
.widget.hot-topics .hot-topics-item-wrap:last-child {
  border-bottom: none;
  padding-bottom: 0;
  margin-bottom: 0;
}
.widget.hot-topics .hot-topics-item-wrap .hot-topics-img img {
  width: 100%;
}
.widget .my-history .my-history-item-wrap {
  border-bottom: 1px solid #ebebeb;
  padding-bottom: 14px;
  margin-bottom: 13px;
  font-size: 0;
}
.widget .my-history .my-history-item-wrap:last-child {
  border-bottom: none;
  padding-bottom: 0;
  margin-bottom: 0;
}
.widget .my-history .my-history-item-wrap > * {
  display: inline-block;
  font-size: 14px;
  vertical-align: top;
}
.widget .my-history .my-history-item-wrap .my-history-title {
  width: calc(100% - 62px);
  padding-right: 30px;
}
.widget .my-history .my-history-item-wrap .my-history-page {
  width: 62px;
  border: 1px solid #888;
  border-radius: 20px;
  font-size: 11px;
  padding: 4px 0;
  text-align: center;
}
.widget.c-popular .style-1 .popular-item-wrap .popular-img {
  width: 25%;
  overflow: hidden;
  float: left;
  margin-right: 20px;
  max-width: 65px;
}
.widget.c-popular .style-1 .popular-item-wrap .popular-content .widget-title {
  font-size: 12px;
}
.widget.c-popular .style-2 .popular-item-wrap {
  padding-bottom: 15px;
}
.widget.c-popular .style-2 .popular-item-wrap .popular-img {
  width: 100%;
  margin-bottom: 20px;
}
.widget.c-popular .style-2 .popular-item-wrap .popular-content .widget-title {
  font-size: 14px;
  line-height: 18px;
  color: #333333;
  margin-bottom: 6px;
}
.widget.c-popular .style-2 .popular-item-wrap .popular-content .posts-date {
  font-size: 11px;
  line-height: 18px;
  color: #888888;
}
.widget.c-popular .popular-item-wrap {
  border-bottom: 1px solid #ebebeb;
  padding-bottom: 20px;
  margin-bottom: 20px;
}
.widget.c-popular .popular-item-wrap:after {
  content: "";
  clear: both;
  display: table;
}
.widget.c-popular .popular-item-wrap .popular-content {
  overflow: hidden;
}
.widget.c-popular .popular-item-wrap .popular-content .widget-title {
  font-weight: 600;
  margin-top: 0;
}
.widget.c-popular .popular-item-wrap .popular-content .chapter-item {
  margin-bottom: 10px;
}
.widget.c-popular .popular-item-wrap .popular-content .chapter-item span {
  display: inline-block;
  margin-right: 15px;
}
.widget.c-popular .popular-item-wrap .popular-content .chapter-item span:last-child {
  margin-right: 0;
}
.widget.c-popular .popular-item-wrap .popular-content .chapter-item .chapter {
  background-color: #ebebeb;
  padding: 2px 10px;
  border-radius: 10px;
  font-weight: 600;
  -webkit-transition: background-color 200ms ease;
  -moz-transition: background-color 200ms ease;
  -o-transition: background-color 200ms ease;
  transition: background-color 200ms ease;
}
.widget.c-popular .popular-item-wrap .popular-content .chapter-item .chapter:hover {
  background-color: #eb3349;
}
.widget.c-popular .popular-item-wrap .popular-content .chapter-item .chapter:hover a {
  color: #fff;
}
.widget.c-popular .popular-item-wrap .popular-content .chapter-item .chapter + .vol {
  text-align: right;
  margin-right: 0;
  float: right;
}
.widget.c-popular .popular-item-wrap .popular-content .chapter-item .vol + .post-on {
  display: block;
  text-align: right;
}
.widget.c-popular .popular-item-wrap .popular-content .chapter-item:last-child {
  margin-bottom: 0;
}
.widget.c-popular .widget-view-more {
  background-color: #eb3349;
  color: #fff;
  font-size: 12px;
  font-weight: 600;
  display: block;
  text-align: center;
  margin-top: 20px;
  padding: 6px 0px;
  -webkit-transition: background-color 200ms ease;
  -moz-transition: background-color 200ms ease;
  -o-transition: background-color 200ms ease;
  transition: background-color 200ms ease;
}
.widget.c-popular .widget-view-more:hover {
  background-color: #0f0f0f;
}
.widget.c-released .released-item-wrap ul.list-released {
  padding-left: 0;
  list-style: none;
}
.widget.c-released .released-item-wrap ul.list-released li {
  padding: 5px 0;
  display: block;
  border-bottom: 1px dashed;
  text-align: center;
}
.widget.c-released .released-item-wrap ul.list-released li a {
  font-weight: 600;
  display: block;
  width: 25%;
  float: left;
}
.widget.c-released .released-item-wrap ul.list-released li:after {
  display: table;
  content: "";
  clear: both;
}
.widget.c-released .released-item-wrap ul.list-released li:last-child {
  border-bottom: none;
}
.widget.c-released .released-search form {
  font-size: 0;
  margin: 0 -5px;
}
.widget.c-released .released-search form > * {
  display: inline-block;
  font-size: 14px;
  vertical-align: top;
  margin: 5px;
}
.widget.c-released .released-search form input[type="text"] {
  padding: 5px 15px;
  border-radius: 5px;
  border: 1px solid rgba(45, 45, 45, 0.3);
  max-width: 140px;
}
.widget.c-released .released-search form [type="submit"] {
  -webkit-transition: all 200ms ease;
  -moz-transition: all 200ms ease;
  -o-transition: all 200ms ease;
  transition: all 200ms ease;
  background-color: #eb3349;
  font-weight: 600;
  border: none;
  padding: 6px 20px;
  border-radius: 5px;
  color: #fff;
}
.widget.c-released .released-search form [type="submit"]:hover {
  cursor: pointer;
  color: #fff;
  background: #0f0f0f;
}
.widget.background > .c-widget-wrap {
  border: none;
  padding: 20px;
  background-color: #f3f3f3;
}
.widget.background:after {
  content: "";
  display: block;
  height: 4px;
  background: #eb3349;
  /* For browsers that do not support gradients */
  background: -webkit-linear-gradient(left, #eb3349 40%, #f45c43);
  /* For Safari 5.1 to 6.0 */
  background: -o-linear-gradient(right, #eb3349 40%, #f45c43);
  /* For Opera 11.1 to 12.0 */
  background: -moz-linear-gradient(right, #eb3349 40%, #f45c43);
  /* For Firefox 3.6 to 15 */
  background: linear-gradient(to right, #eb3349 40%, #f45c43);
  /* Standard syntax */
}
.widget.background.widget_tag_cloud .tag-cloud-link {
  background-color: #fff;
  -webkit-transition: background-color 200ms ease;
  -moz-transition: background-color 200ms ease;
  -o-transition: background-color 200ms ease;
  transition: background-color 200ms ease;
}
.widget.background.widget_tag_cloud .tag-cloud-link:hover {
  background-color: #eb3349;
}
.widget.heading-style-2.no-icon .c-blog__heading {
  border-bottom: 1px solid #e1e1e1;
  margin-bottom: 30px;
}
.widget.heading-style-2.no-icon .c-blog__heading h4 {
  margin: 10px 0;
}
.widget.c-w-posts .widget-content img {
  width: 100%;
  height: auto;
}
.related-heading,
.widget-heading {
  display: inline-block;
  background: #eb3349;
  /* For browsers that do not support gradients */
  background: -webkit-linear-gradient(left, #eb3349 40%, #f45c43);
  /* For Safari 5.1 to 6.0 */
  background: -o-linear-gradient(right, #eb3349 40%, #f45c43);
  /* For Opera 11.1 to 12.0 */
  background: -moz-linear-gradient(right, #eb3349 40%, #f45c43);
  /* For Firefox 3.6 to 15 */
  background: linear-gradient(to right, #eb3349 40%, #f45c43);
  /* Standard syntax */
  color: #fff;
  padding: 0 20px;
  margin-bottom: 26px;
  position: relative;
  font-weight: 600;
  letter-spacing: 1px;
}
.related-heading:after,
.widget-heading:after {
  content: "";
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 10px solid #eb3349;
  position: absolute;
  top: 100%;
  left: 15px;
}
.related-heading > *,
.widget-heading > *,
.related-heading a,
.widget-heading a {
  color: #fff;
  font-size: 14px;
  margin: 7px 0;
}
.related-heading i,
.widget-heading i {
  margin-right: 5px;
}
.manga-genres-class-name.heading-style-1 .widget-heading,
.manga-history-widget.heading-style-1 .widget-heading,
.widget_archive.heading-style-1 .widget-heading,
.widget_categories.heading-style-1 .widget-heading,
.widget_pages.heading-style-1 .widget-heading,
.widget_meta.heading-style-1 .widget-heading,
.widget_recent_comments.heading-style-1 .widget-heading,
.widget_recent_entries.heading-style-1 .widget-heading,
.widget_rss.heading-style-1 .widget-heading,
.widget_nav_menu.heading-style-1 .widget-heading {
  margin-bottom: 19px;
}
.c-released.heading-style-1 .widget-heading {
  margin-bottom: 16px;
}
.widget_calendar.heading-style-1 .widget-heading {
  margin-bottom: 11px;
}
.widget_calendar caption {
  text-align: center;
}
.widget_shopping_cart .woocommerce-mini-cart__total {
  border-top: 2px solid #ebe9eb;
}
.widget_shopping_cart .woocommerce-mini-cart__total strong {
  font-size: 14px;
  color: #000;
}
.widget_shopping_cart .woocommerce-mini-cart__buttons a {
  padding: 11px 20px;
  background: #eb3349;
  color: #fff;
  font-weight: 600;
}
.widget_shopping_cart .woocommerce-mini-cart__buttons a:hover {
  background: #0f0f0f;
  color: #fff;
}
.widget_product_search .woocommerce-product-search {
  position: relative;
}
.widget_product_search .search-field {
  padding: 9px 15px 8px;
  border-color: #ccc;
}
.widget_product_search button {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  background: transparent;
  border: none;
  color: transparent;
  width: 40px;
}
.widget_product_search button:after {
  content: "\f4a5";
  display: inline-block;
  font-family: Ionicons;
  speak: none;
  font-style: normal;
  font-weight: 400;
  font-variant: normal;
  text-transform: none;
  text-rendering: auto;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: absolute;
  right: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #888;
  font-size: 24px;
}
.widget_product_search button:before {
  content: "";
  width: 1px;
  display: block;
  position: absolute;
  top: 4px;
  bottom: 4px;
  background-color: #cccccc;
  left: 0;
}
.widget_product_search button:hover {
  opacity: 0.5;
  background-color: #ebebeb;
}
.widget_price_filter .price_slider.ui-slider .ui-slider-handle,
.widget_price_filter .price_slider.ui-slider .ui-slider-range {
  background-color: #eb3349;
}
.widget_price_filter .price_slider_amount button {
  padding: 11px 20px;
  background: #eb3349;
  color: #fff;
  font-weight: 600;
  transition: color 200ms ease, background-color 200ms ease;
}
.widget_price_filter .price_slider_amount button:hover {
  background: #0f0f0f;
  color: #fff;
}
.widget_product_categories .product-categories li {
  line-height: 28px;
}
.widget_product_categories .product-categories li a {
  position: relative;
  padding-left: 18px;
  color: #666;
  font-size: 13px;
}
.widget_product_categories .product-categories li a:before {
  content: "\f10a";
  display: inline-block;
  font-family: Ionicons;
  speak: none;
  font-style: normal;
  font-weight: 400;
  font-variant: normal;
  text-transform: none;
  text-rendering: auto;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  color: #888;
  font-size: 9px;
}
.widget_product_categories .product-categories li a:hover {
  color: #eb3349;
}
.widget_product_categories .product-categories li a:hover:before {
  color: #eb3349;
}
.woocommerce-widget-layered-nav .woocommerce-widget-layered-nav-list .woocommerce-widget-layered-nav-list__item {
  font-size: 13px;
}
.woocommerce-widget-layered-nav .woocommerce-widget-layered-nav-list .woocommerce-widget-layered-nav-list__item a {
  position: relative;
  padding-left: 18px;
  color: #666;
  line-height: 28px;
}
.woocommerce-widget-layered-nav .woocommerce-widget-layered-nav-list .woocommerce-widget-layered-nav-list__item a:before {
  content: "\f10a";
  display: inline-block;
  font-family: Ionicons;
  speak: none;
  font-style: normal;
  font-weight: 400;
  font-variant: normal;
  text-transform: none;
  text-rendering: auto;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  color: #888;
  font-size: 9px;
}
.woocommerce-widget-layered-nav .woocommerce-widget-layered-nav-list .woocommerce-widget-layered-nav-list__item a:hover {
  color: #eb3349;
}
.woocommerce-widget-layered-nav .woocommerce-widget-layered-nav-list .woocommerce-widget-layered-nav-list__item a:hover:before {
  color: #eb3349;
}
.woocommerce-widget-layered-nav .woocommerce-widget-layered-nav-list .woocommerce-widget-layered-nav-list__item a:hover + span {
  color: #eb3349;
}
.text-ui-light.woocommerce .widget_shopping_cart .woocommerce-mini-cart__total strong,
.text-ui-light.woocommerce div.entry-summary .entry-title,
.text-ui-light.woocommerce div.product .related h2 {
  color: #fff;
}
.text-ui-light.woocommerce .widget_product_categories .product-categories li a,
.text-ui-light.woocommerce .woocommerce-widget-layered-nav .woocommerce-widget-layered-nav-list .woocommerce-widget-layered-nav-list__item a {
  color: #ccc;
}

body.search.text-ui-light .search-wrap .tab-content-wrap .c-tabs-item .c-tabs-item__content .tab-summary .post-content .post-content_item .summary-content:not(.release-year) a{color:#CCC}
/**
 * :: Footer
 * -------------------------------------------------- */
.site-footer {
  border-top: 3px solid #ebebeb;
  padding: 60px 0px 55px 0px;
  text-align: center;
}
@media (max-width: 768px) {
  .site-footer {
    padding: 45px 0px 40px 0px;
  }
}
.site-footer .top-footer .wrap_social_account {
  margin-bottom: 25px;
}
.site-footer .top-footer .wrap_social_account ul.social_account__item {
  margin: 0;
}
.site-footer .top-footer .wrap_social_account ul.social_account__item li {
  margin-right: 10px;
  padding: 0;
}
.site-footer .top-footer .wrap_social_account ul.social_account__item li a {
  display: block;
  width: 30px;
  height: 30px;
  background-color: #eb3349;
  text-align: center;
  border-radius: 50%;
  line-height: 32px;
  color: #fff;
  -webkit-transition: background-color 200ms ease-out;
  -moz-transition: background-color 200ms ease-out;
  -o-transition: background-color 200ms ease-out;
  transition: background-color 200ms ease-out;
}
.site-footer .top-footer .wrap_social_account ul.social_account__item li a i {
  font-size: 16px;
}
.site-footer .top-footer .wrap_social_account ul.social_account__item li:last-child {
  margin-right: 0;
}
.site-footer .top-footer .wrap_social_account ul.social_account__item li:hover a {
  background-color: #0f0f0f;
}
.site-footer .bottom-footer .nav-footer {
  margin-bottom: 10px;
}
.site-footer .bottom-footer .nav-footer ul {
  margin: 0;
}
.site-footer .bottom-footer .nav-footer ul li {
  padding: 0px 18px;
  line-height: 14px;
  margin-bottom: 10px;
}
.site-footer .bottom-footer .nav-footer ul li + li {
  border-left: 2px solid #333333;
}
.site-footer .bottom-footer .copyright p {
  font-size: 12px;
  margin-bottom: 0;
}

#btn_view_full_image{position: absolute; bottom: -40px; left: 0; width: 100%; text-align: center; z-index: 10}
@media (max-width: 480px) {
	#btn_view_full_image{display: none }
}
body.text-ui-light .c-blog__heading.style-2{border-color:#7b7b7b}
body.page .c-page-content .c-page .c-page__content .page-content-listing.item-big_thumbnail .page-listing-item .page-item-detail .item-thumb{width: 100%; margin-bottom: 10px}
body.page .c-page-content .c-page .c-page__content .page-content-listing.item-big_thumbnail .page-listing-item .page-item-detail .item-summary{width: 100%; float: left}
body.page .c-page-content .c-page .c-page__content .page-content-listing.item-big_thumbnail .page-listing-item .page-item-detail .item-summary h5{margin:0}
body.page .c-page-content .c-page .c-page__content .page-content-listing.item-big_thumbnail .page-listing-item .page-item-detail .item-summary .list-chapter .chapter-item span{margin-right: 0}

.site-header .c-sub-header-nav .entry-header {
    display: none;
    margin-bottom: 15px;
}

.site-header .c-sub-header-nav.sticky .entry-header {
    display: block;
}

.site-header .c-sub-header-nav.hide-sticky-menu.sticky .c-sub-nav_wrap{
    display:none;
}
.site-header .c-sub-header-nav.hide-sticky-menu .entry-header{
    margin-top:15px;
}

.entry-header_wrap .item-description{text-align:center}

.page-content-listing.item-simple .meta-item.rating{display: inline-block; margin:0 10px}
.page-content-listing.item-simple .post-on.font-meta{float: right}
.page-content-listing.item-simple .page-listing-item .page-item-detail{padding-bottom: 20px; border-bottom: 1px solid #ebebeb}
body.page .c-page-content .c-page .c-page__content .page-content-listing.item-simple .page-listing-item{border:none;padding:0;margin:0}
body.page .c-page-content .c-page .c-page__content .page-content-listing.item-simple .page-listing-item .page-item-detail{margin-bottom: 10px}

@media (max-width: 991px) {
body.page .c-page-content .c-page .c-page__content .page-content-listing.item-big_thumbnail .page-listing-item .page-item-detail .item-summary h5{overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    line-height: 1.6;
    max-height: 26px;
}
body.page .c-page-content .c-page .c-page__content .page-content-listing.item-big_thumbnail .page-listing-item .page-item-detail .item-summary h5 .manga-title-badges{float: none; position: absolute; top: 0}
}

.single-wp-manga .action-icon .action_detail{position: absolute;     position: absolute;
    z-index: 1;
    font-size: 10px;
    background: rgba(0,0,0,0.5);
    padding: 5px;
    border-radius: 5px;
    color: #FFF;}

/** 
 * fix upgrading BootStrap 4
 **/
.list-inline>li {
    display: inline-block;
    padding-right: 5px;
    padding-left: 5px;
}
.main-navigation .main-menu ul{flex-direction:unset}
.c-breadcrumb .breadcrumb li{display: inline-block}
@media (min-width: 576px){
.modal-dialog {
    width: 600px;
	max-width: 600px;
    margin: 30px auto;
}
}

/* Fix Woo - Madara Bootstrap 4 conflict */
.woocommerce .col2-set [class^="col-"], .woocommerce-page [class^="col-"] {
    max-width: unset;
}

.woocommerce form .form-row {
    display: block;
}

.settings-page .nav-tabs a{display: block; line-height: 1.42857143}
body.modal-open .modal .modal-content .modal-header .close, body.modal-open .modal .modal-content .modal-footer .close{margin:0;padding:0}
.genres_wrap .genres__collapse .genres ul li{float:left;}

.mobile .c-sub-header-nav.no-subnav{display: none}
.mobile .select-view{width: 100%}

.page-item-detail.video{}
.page-item-detail .item-thumb{position: relative}
.page-item-detail.video .item-thumb:hover a:before{content:'\f144'; display: inline-block; position: absolute; top: 50%; left: 50%; z-index: 1; font-family: Font Awesome\ 5 Free; font-size: 40px; margin-top:-30px;margin-left:-20px}
.video-light .text-on, .video-light.off .text-off{display: none}
.video-light.off .text-on{display: inline-block;}
.video-light.off i:before{font-weight: normal}

.chapter-video-frame:after{background:rgba(0,0,0,0);}
.chapter-video-frame.off:after{content:' '; position: fixed; width: 100%; height: 100%; background:rgba(0,0,0,0.9); top:0; left: 0; z-index: 100000; -webkit-transition: background 0.2s ease-in-out;
transition: background 0.2s ease-in-out;}
.chapter-video-frame.off{position: relative;}
.chapter-video-frame.off > *{position: absolute; top:0 ;left: 0; z-index: 100001}

.post-edit-link{display: inline-block; padding:20px 0}

#manga-filte-alphabeta-bar{}
#manga-filte-alphabeta-bar a{display: inline-block; padding: 3px; text-transform: uppercase; background: #e6e6e6; text-align: center}
#manga-filte-alphabeta-bar a.active{background:#333;color:#FFF}

@media (max-width: 480px) {
    .wp-manga-nav .select-view{visibility: hidden;    opacity: 0;    max-height: 0;}
    
	body.reading-manga .entry-header {
		margin-bottom: 10px;
	  }
	  .c-blog-post .entry-content .entry-content_wrap .read-container .c-ads img{margin-bottom:0}
	  body.reading-manga .entry-header .entry-header_wrap .c-breadcrumb{display: block; margin-bottom: 5px}
		body.reading-manga .entry-header .select-pagination .nav-links .nav-previous a, body.reading-manga .c-select-bottom .select-pagination .nav-links .nav-previous a, body.reading-manga .entry-header .select-pagination .nav-links .nav-next a, body.reading-manga .c-select-bottom .select-pagination .nav-links .nav-next a{    
			padding-left: 0px;
			padding-right: 0px;
			text-indent: -999em;
			width:35px;
		}
		body.reading-manga.sticky__active.sticky-for-mobile .entry-header .select-pagination .nav-links .nav-next a, body.reading-manga.sticky__active.sticky-for-mobile .entry-header .select-pagination .nav-links .nav-previous a{width: 35px}
		
		body.reading-manga .chapter-type-text .entry-header .select-pagination .nav-links .nav-previous a, body.reading-manga .chapter-type-text.c-select-bottom .select-pagination .nav-links .nav-previous a, body.reading-manga .chapter-type-text .entry-header .select-pagination .nav-links .nav-next a, body.reading-manga .chapter-type-text .c-select-bottom .select-pagination .nav-links .nav-next a{padding-left:15px;padding-right:30px;}
		
		body.reading-manga .entry-header .select-pagination .nav-links a:before{left:8px; text-indent: 0}
		body.reading-manga .entry-header .entry-header_wrap .action-icon{float: left}

	  body.reading-manga .entry-header .wp-manga-nav{
		position: relative
	  }
	  body.reading-manga .entry-header .wp-manga-nav .select-pagination {
		text-align: right;
		position: absolute;
		bottom: 5px;
		right: 0
	  }
	  body.reading-manga .entry-header.footer .wp-manga-nav .select-pagination {
		display: block;
		position: relative;
		text-align: center;
		margin: 10px 0;
	  }
	  
	
	  body.reading-manga .entry-header .wp-manga-nav.active .select-pagination{
		position: relative;
	  }
	  body.reading-manga .entry-header .wp-manga-nav .select-pagination .nav-links .mobile-nav-btn {
		display: block;
		position: absolute;
		left: -33px;
		right: auto;
		font-size: 32px;
		line-height: 24px;
		top: 3px;
		cursor: pointer;
	  }
	  
	  body.reading-manga .entry-header.footer .wp-manga-nav .select-pagination .nav-links .mobile-nav-btn {
		right: 0;
		left: auto;
	  }
	  
	  body.reading-manga.mobile.sticky__active .entry-header .select-pagination .nav-links > * a, body.reading-manga.mobile.sticky__active .c-select-bottom .select-pagination .nav-links > * a {
		  content: "\f287";
		  font-family: "Ionicons"
	  }
	  body.reading-manga .entry-header .wp-manga-nav.active .select-pagination .nav-links .mobile-nav-btn{
		top: -34px;
		right: 5px;
		left: auto;
	  }
	  
	  body.reading-manga .entry-header .wp-manga-nav .select-pagination .selectpicker_page label:after {
		text-align: initial;
	  }
	  
	  body.reading-manga:not(.sticky-for-mobile) .entry-header .wp-manga-nav .select-view {
		overflow: hidden;
		max-height: 0;
		opacity: 0;
		-webkit-transition: visibility 300ms, opacity 300ms, max-height 100ms linear;
		-moz-transition: visibility 300ms, opacity 300ms, max-height 100ms linear;
		-ms-transition: visibility 300ms, opacity 300ms, max-height 100ms linear;
		-o-transition: visibility 300ms, opacity 300ms, max-height 100ms linear;
		transition: visibility 300ms, opacity 300ms, max-height 100ms linear;
	  }
	  
	  body.reading-manga .entry-header .wp-manga-nav.active .select-view,body.reading-manga .entry-header.footer.sticky .select-view {
		visibility: visible;
		opacity: 1;
		max-height: 110px;
	  }
	  
	  body.reading-manga .entry-header .wp-manga-nav.active .nav-links .mobile-nav-btn:before {
		content: "\f2c0";
	  }
	  
	.breadcrumb{padding-top:0;padding-bottom:0}
	body.reading-manga .entry-header .entry-header_wrap .action-icon ul li a, body.reading-manga .c-select-bottom .entry-header_wrap .action-icon ul li a{width:30px;height:30px}
  .site-header .c-sub-header-nav .c-sub-nav_wrap .sub-nav_content .sub-nav_list {
    max-height: 31px;
    padding-right: 60px;
    overflow: hidden;
  }
  .site-header .c-sub-header-nav .c-sub-nav_wrap .sub-nav_content .sub-nav_list > li:nth-of-type(n+4) {
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s, opacity 0.3s linear;
  }
  .site-header .c-sub-header-nav .c-sub-nav_wrap .sub-nav_content .sub-nav_list .mobile-icon {
    position: absolute;
    right: 2px;
    display: block;
    top: 2px;
    font-size: 28px;
	line-height: 14px;
  }
  .site-header .c-sub-header-nav .c-sub-nav_wrap .sub-nav_content .sub-nav_list .mobile-icon:hover {
    cursor: pointer;
  }
  .site-header .c-sub-header-nav .c-sub-nav_wrap .sub-nav_content .sub-nav_list .mobile-icon:before {
    width: 20px;
  }
  .site-header .c-sub-header-nav .c-sub-nav_wrap .sub-nav_content .sub-nav_list.active {
    overflow: auto;
    max-height: initial;
  }
  .site-header .c-sub-header-nav .c-sub-nav_wrap .sub-nav_content .sub-nav_list.active > li:nth-of-type(n+4) {
    visibility: visible;
    opacity: 1;
  }
  .site-header .c-sub-header-nav .c-sub-nav_wrap .sub-nav_content .sub-nav_list.active .mobile-icon:before {
    content: "\f2c0";
  }
  body.reading-manga .entry-header .entry-header_wrap, body.reading-manga .c-select-bottom .entry-header_wrap{margin-bottom:10px}
  body.reading-manga .entry-header .c-selectpicker select.selectpicker, body.reading-manga .c-select-bottom .c-selectpicker select.selectpicker{padding-top:5px;padding-bottom:5px}
  body.reading-manga .entry-header .select-pagination .nav-links > * a, body.reading-manga .c-select-bottom .select-pagination .nav-links > * a{padding-top:3px;padding-bottom:3px}
}
@media (max-width: 992px) {
  .site-header .c-sub-header-nav .c-sub-nav_wrap .sub-nav_content {
    width: 80%;
  }
}
@media (max-width: 768px) {
  .site-header .c-sub-header-nav .c-sub-nav_wrap .sub-nav_content {
    width: 100%;
  }
}

@media (max-width: 679px){
body.search .search-wrap .tab-content-wrap .c-tabs-item .c-tabs-item__content .tab-summary .post-content .post-content_item:nth-last-of-type(-n+2){margin-left: 0; display: block; float: none}
}

.chapter-type-video .entry-header.footer .entry-header_wrap{display: none}
@media (max-width: 480px){
.chapter-type-video .entry-header.header{margin-top: 10px}
body.reading-manga .chapter-type-video .entry-header.header .entry-header_wrap .c-breadcrumb{display: none}
.chapter-type-video .entry-header.header .action-icon{width:100%}
.chapter-type-video .entry-header.footer .entry-header_wrap{display: block}
body.reading-manga .chapter-type-video .entry-header .wp-manga-nav .select-view {max-height: initial; opacity: 1; visibility: visible}
.chapter-type-video .video-light .text, .chapter-type-video .select-pagination{display: none}
.chapter-type-video .entry-header .selectpicker_version, .chapter-type-video .entry-header .selectpicker_chapter{max-width: 50% !important}
}

#init-links .c-btn.c-btn_style-1{padding:10px; margin: 5px; color: #FFF}
#init-links .c-btn.c-btn_style-1:first-child{margin-left:0}


.shortcode.my-bookmarks{}
.shortcode.my-bookmarks .popular-item-wrap .popular-img{float: left; margin: 0 10px 10px 0}
.shortcode.my-bookmarks.style-2 .popular-item-wrap .popular-img{display: block; width: 100%}
.shortcode.my-bookmarks .row{margin-bottom: 20px}

.chapter-type-text .sidebar-col #main-sidebar{margin-top:20px}

.c-page-content .c-page .c-page__content .page-content-listing .page-listing-item .page-item-detail .item-summary .list-chapter .chapter-item .chapter a:hover, .widget.c-popular .popular-item-wrap .popular-content .chapter-item .chapter a:hover{text-decoration: none}
/**
 * Improve Dark Mode
 **/
body.page.text-ui-light .c-page-content .c-page .c-page__content .page-content-listing .page-listing-item .page-item-detail .item-summary .list-chapter .chapter-item .chapter,.text-ui-light .widget.c-popular .popular-item-wrap .popular-content .chapter-item .chapter,body.text-ui-light .settings-page .list-chapter .chapter-item .chapter,body.search.text-ui-light .search-wrap .tab-content-wrap .c-tabs-item .c-tabs-item__content .tab-meta .latest-chap .chapter{background: transparent; border: 1px solid #888}
body.page.text-ui-light .c-page-content .c-page .c-page__content .page-content-listing .page-listing-item .page-item-detail .item-summary .list-chapter .chapter-item .chapter a,.text-ui-light .widget.c-popular .popular-item-wrap .popular-content .chapter-item .chapter a, body.text-ui-light .settings-page .list-chapter .chapter-item .chapter a,body.search.text-ui-light .search-wrap .tab-content-wrap .c-tabs-item .c-tabs-item__content .tab-meta .latest-chap .chapter a{color: #ccc; }
body.page.text-ui-light .c-page-content .c-page .c-page__content .page-content-listing .page-listing-item .page-item-detail .item-summary .list-chapter .chapter-item .chapter a:hover,.text-ui-light .widget.c-popular .popular-item-wrap .popular-content .chapter-item .chapter a:hover, body.text-ui-light .settings-page .list-chapter .chapter-item .chapter a:hover,body.search.text-ui-light .search-wrap .tab-content-wrap .c-tabs-item .c-tabs-item__content .tab-meta .latest-chap .chapter a:hover{color:#eb3349}
body.reading-manga.text-ui-light .entry-header .c-selectpicker select.selectpicker, body.reading-manga.text-ui-light .c-select-bottom .c-selectpicker select.selectpicker{background-color: rgba(235, 235, 235, 0.2);}
body.text-ui-light .settings-page .tabs-content-wrap .tab-group-item.image_setting .settings-heading,body.text-ui-light .settings-page .tabs-content-wrap .tab-group-item.other_setting .settings-heading{background-color:#333}
body.text-ui-light .settings-page .tabs-content-wrap .tab-group-item.image_setting .settings-heading h3,body.text-ui-light .settings-page .tabs-content-wrap .tab-group-item.other_setting .settings-heading h3{color:#ebebeb}
body.manga-page.text-ui-light .summary__content.show-more:after{
    background: rgba(0, 0, 0, 0);
    background: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0)), to(#000));
    background: -webkit-linear-gradient(top, rgba(0, 0, 0, 0), #000);
    background: -moz-linear-gradient(top, rgba(0, 0, 0, 0), #000);
    background: -ms-linear-gradient(top, rgba(0, 0, 0, 0), #000);
    background: -o-linear-gradient(top, rgba(0, 0, 0, 0), #000);
}
body.text-ui-light .settings-page .nav-tabs-wrap ul.nav-tabs li a, .text-ui-light .settings-page table.list-bookmark > thead > tr > th{background-color:#333;color:#ebebeb}
body.text-ui-light table:not(#wp-calendar):not(.shop_table) > thead > tr > th, body.text-ui-light table:not(#wp-calendar):not(.shop_table) > tbody > tr td,body.text-ui-light .settings-page .tabs-content-wrap .tab-group-item .tab-item, body.text-ui-light .settings-page .tabs-content-wrap .tab-group-item .tab-item .choose-avatar,body.page.text-ui-light .c-page-content .main-col-inner .entry-header .entry-title{border-color:#3e3e3e}
.text-ui-light table:not(#wp-calendar):not(.shop_table) > tbody > tr:hover, .text-ui-light .settings-page .tabs-content-wrap .tab-group-item .tab-item .history-content:hover{background-color:#2f2f2f}
.text-ui-light table:not(#wp-calendar):not(.shop_table) > tbody > tr:hover .list-chapter .chapter-item span, .text-ui-light table:not(#wp-calendar):not(.shop_table) > tbody > tr:hover .list-chapter .chapter-item span.vol a{color:#FFF}
.text-ui-light .settings-page .tabs-content-wrap .tab-group-item .tab-item .form-choose-avatar{color:#888}
body.page.text-ui-light .c-page-content .c-page .c-page__content .page-content-listing .page-listing-item,.text-ui-light .page-content-listing.item-simple .page-listing-item .page-item-detail{border-color: #383838}
body.manga-page.text-ui-light .page-content-listing.single-page .listing-chapters_wrap > ul.main.version-chap li:after{background-color:#383838}
.text-ui-light .settings-page .list-chapter .chapter-item a{color:#888}
body.text-ui-light #hover-infor {
	background-color:#333
}
body.text-ui-light #hover-infor .item_content .summary-content,body.text-ui-light #hover-infor .item_content .post-content_item > *, body.text-ui-light  #hover-infor .item_content .summary-content a:not(:hover){color:#ebebeb}
body.text-ui-light .navigation-ajax .load-ajax{background-color:#333; color: #FFF; border-color: transparent}
body.text-ui-light .navigation-ajax .load-ajax:not(:hover){color:#FFF}

/**
 * hide some info in Search Results on mobile
 **/
@media (max-width:480px){
	body.search .search-wrap .tab-content-wrap .c-tabs-item .c-tabs-item__content .tab-thumb{text-align: center}
}

.listing-chapters_wrap .wp-manga-chapter.reading:before{content:'\f1da';font-family: Font Awesome\ 5 Free; font-weight:bold; position: absolute;
    top: -2px;    right: 0;    background: none !important;    color: #000;    display: inline-block;    line-height: 1em;    font-size: 15px; width: 17px;    height: 17px;
    text-align: center; padding:2px;border-radius:12px
}

.text-ui-light .listing-chapters_wrap .wp-manga-chapter.reading:before{color:#dadada;}

/**
 * since 1.5.4.3 - diffirentiate manga type 
 **/
body.manga-type-icon .ui-autocomplete .search-item .manga-type-manga:before{content:'\f302';font-family: Font Awesome\ 5 Free; margin:0 5px}
body.manga-type-icon .ui-autocomplete .search-item .manga-type-text:before{content:'\f031';font-family: Font Awesome\ 5 Free; margin:0 5px; font-weight: bold}
body.manga-type-icon .ui-autocomplete .search-item .manga-type-video:before{content:'\f144';font-family: Font Awesome\ 5 Free; margin:0 5px}

body.manga-type-icon .page-listing-item .page-item-detail.video .item-thumb:before, body.manga-type-icon .page-listing-item .page-item-detail.text .item-thumb:before, body.manga-type-icon .page-listing-item .page-item-detail.manga .item-thumb:before{content:'\f144'; font-family: Font Awesome\ 5 Free; position:absolute; top:0; right: 0; color:#FFF;padding:3px;     z-index: 1;    text-shadow: 1px 1px 1px #000;    font-size: 16px;}
body.manga-type-icon .page-listing-item .page-item-detail.text .item-thumb:before{content:'\f031'; font-weight: bold}
body.manga-type-icon .page-listing-item .page-item-detail.manga .item-thumb:before{content:'\f302'}

body.manga-type-icon .c-page-content .c-page .c-page__content .page-content-listing.item-big_thumbnail .page-listing-item .page-item-detail .item-thumb{position: relative}

/**
 * since 1.5.4.5
 **/
.off-canvas.mobile-menu .c-modal_item .c-modal_sign-in,.off-canvas.mobile-menu .c-modal_item .c-modal_sign-up{display: inline-block}

#main-sidebar div[id^=monster-widget-placeholder-]{ width: 100% }


.manga-slider.style-3 .slick-slide > div{line-height: 0}

body.page .c-page-content .c-page .c-page__content .page-content-listing.item-big_thumbnail .page-listing-item .page-item-detail .item-summary .post-title.font-title{margin-bottom: 6px}

.popular-slider .slider__thumb_item .manga-title-badges, .manga-slider .slider__thumb_item .manga-title-badges{position: absolute; z-index: 100}

/**
 * WP DISCUZ support
 **/
#wpcomm .wc_comm_form.wc_main_comm_form .wc-field-comment .wc-field-avatararea{margin: 5px}
#wpcomm .wc-field-textarea .wpdiscuz-textarea-wrap{line-height: 0}
#wpcomm .wpd-form-row .wpd-field.chapter_id{display: none}
#wpcomm .wc-comment-right .wpd-bottom-custom-fields{display: none}

/**
 * support WP Discuz 7.0.3+
 **/
#wpdcom .wc_comm_form.wc_main_comm_form .wc-field-comment .wc-field-avatararea{margin: 5px}
#wpdcom .wc-field-textarea .wpdiscuz-textarea-wrap{line-height: 0}
#wpdcom .wpd-form-row .wpd-field.chapter_id{display: none}
#wpdcom .wpd-comment-right .wpd-bottom-custom-fields{display: none}
#manga-discussion #comments{margin-top:0}

.text-ui-light .wpd-login{color:#666666}

.reading-manga .reading-content{padding:0 15px}
.mobile.reading-manga .entry-header.footer.sticky{position: fixed;
    bottom: 0;
    z-index: 10000;
    background: #fff;
    width: 100%;
    margin-bottom: 0;
	padding-right:15px;
	padding-left:15px;
	left:0;
	border-top: 1px solid #efefef;
    box-shadow: 3px 3px 10px 6px #CCC;
}
.mobile.reading-manga.text-ui-light .entry-header.footer.sticky{background:#000;box-shadow:3px 3px 10px 6px #333;border-top-color:#333}
.reading-manga .chapter-type-text #text-chapter-toolbar{    
	display: none
}
.mobile.reading-manga .chapter-type-text #text-chapter-toolbar{    
	display: block;
	position: fixed;
    bottom: 10px;
    right: 60px;  background: rgba(0,0,0,0.7);
    padding: 0 10px;
	line-height: 1.8em;
	z-index: 100000
}
.mobile.reading-manga .chapter-type-text #text-chapter-toolbar a{
font-size: 18px;
  line-height: 1.5em;
    color: #FFF;
}
.mobile.reading-manga .chapter-type-text #text-chapter-toolbar a i{line-height:1em}
.mobile.reading-manga .chapter-type-text #text-chapter-toolbar.sticky{bottom:100px; right: 15px}

#chapter-heading{font-size: 24px; margin-top: 40px}

.wp-manga-chapter a:visited{color:#999}
.chapter-item .chapter a:visited{color:#666}

/**
 * Support chapter thumbnails for shortcode Manga Chapters
 **/
.shortcode-manga-chapters .listing-chapters_wrap > ul.main.version-chap li.has-thumb{height:120px; padding:10px 0}
.shortcode-manga-chapters .listing-chapters_wrap > ul.main.version-chap li.has-thumb:after{bottom: 0; clear: both}
@media (max-width:480px){
	.shortcode-manga-chapters .listing-chapters_wrap > ul.main.version-chap li.has-thumb{height: auto;}
	.shortcode-manga-chapters .listing-chapters_wrap .wp-manga-chapter .chapter-thumbnail img.thumb{height: auto}
	.shortcode-manga-chapters .listing-chapters_wrap > ul li.has-thumb a{padding: 0 !important}
}

.shortcode-manga-chapters.chapter-listing-1 .listing-chapters_wrap > ul.version-chap > li.has-thumb > a{float:left; padding: 0}

/** style 2 **/
.shortcode-manga-chapters.chapter-listing-2 .listing-chapters_wrap > ul.main.version-chap li.has-thumb{height: auto; min-height: 100px}
.shortcode-manga-chapters.chapter-listing-2 .listing-chapters_wrap .wp-manga-chapter .chapter-thumbnail{float: none}
.shortcode-manga-chapters.chapter-listing-2 .listing-chapters_wrap > ul li.has-thumb a:not(.has-child),.shortcode-manga-chapters.chapter-listing-2 .listing-chapters_wrap > ul.main.version-chap li .wp-manga-chapter a:not(:hover){position: absolute; left: 20px; text-shadow:1px 1px 1px #333; top: 0; color:#FFF}
.shortcode-manga-chapters.chapter-listing-2 .listing-chapters_wrap > ul.main.version-chap li.has-thumb .chapter-release-date{position: absolute; left: 20px; right: auto; top: auto; bottom: 0;text-shadow:1px 1px 1px #333; font-size:0.8em; color:#FFF}
.shortcode-manga-chapters.chapter-listing-2 .chapter-thumbnail{position: relative}
.shortcode-manga-chapters.chapter-listing-2 .chapter-thumbnail:after{content:' ';width:100%; height: 100%; background:rgba(0,0,0,0.2); position: absolute; top:0; left: 0}
.shortcode-manga-chapters.chapter-listing-2 .listing-chapters_wrap .wp-manga-chapter.has-thumb .chapter-thumbnail img.thumb{max-height: none}
.shortcode-manga-chapters.chapter-listing-2 .listing-chapters_wrap .wp-manga-chapter.has-thumb .chapter-thumbnail{margin-right: 0}
@media (max-width:480px){
	.shortcode-manga-chapters.chapter-listing-2 .listing-chapters_wrap .wp-manga-chapter.has-thumb .chapter-thumbnail img.thumb{max-width:100%; height: auto}
	.shortcode-manga-chapters.chapter-listing-2 .listing-chapters_wrap > ul li a, .shortcode-manga-chapters.chapter-listing-2 .listing-chapters_wrap > ul li.has-thumb a:not(.has-child), .shortcode-manga-chapters.chapter-listing-2 .listing-chapters_wrap > ul.main.version-chap li .wp-manga-chapter.has-thumb a:not(:hover){top: 10px}
	.shortcode-manga-chapters.chapter-listing-2 .listing-chapters_wrap .wp-manga-chapter.has-thumb .chapter-thumbnail img.thumb{max-width: none}
}

/**
 * Support putting in widget
 **/
.widget-content .shortcode-manga-chapters.chapter-listing-1 .listing-chapters_wrap .wp-manga-chapter .chapter-thumbnail img.thumb{width:60px}
.widget-content .shortcode-manga-chapters .listing-chapters_wrap > ul li:not(.has-thumb) a{margin-right: 100px}
.widget-content .shortcode-manga-chapters.chapter-listing-1 .listing-chapters_wrap > ul.version-chap > li.has-thumb > a{width: 160px;}

.rate-title{display:none}


.text-ui-dark .manga-chapters-listing a{color:#000}
.text-ui-dark .manga-chapters-listing td:not(.title):not(.release) a{color:#999}

.wp-manga-nav:after{content:' '; display: block; clear: both}
.reading-manga.minimal-reading-layout.sticky__active .wp-manga-nav{    position: fixed;    top: 0;    width: 1110px;    background: rgba(0,0,0,0.2);padding: 5px 11px;}
.sticky__active.admin-bar .wp-manga-nav{top: 32px}
.sticky__active .wp-manga-nav .entry-header_wrap{display: none}
@media (max-width:1200px){
	.sticky__active .wp-manga-nav{width: 920px}
	body.sticky__active.reading-manga .entry-header .wp-manga-nav .select-view{float: left}
	body.sticky__active.reading-manga .entry-header .wp-manga-nav .select-pagination{float: right}
}

@media (max-width:992px){
	.sticky__active .wp-manga-nav{width: 100%}
	body.sticky__active.reading-manga .entry-header .wp-manga-nav .select-view{float: left}
	body.sticky__active.reading-manga .entry-header .wp-manga-nav .select-pagination{float: right}
}


@media (max-width:720px){
	.sticky__active .wp-manga-nav{width: 100%; left: 0}
	body.sticky__active.reading-manga .entry-header .wp-manga-nav .select-view{float: left}
	body.sticky__active.reading-manga .entry-header .wp-manga-nav .select-pagination{float: right}
}

@media (max-width: 600px){
	.sticky__active.admin-bar .wp-manga-nav{top: 0px}
	.mobile.sticky__active.sticky-for-mobile .wp-manga-nav{top: 10px; height: 34px}
}

.c-blog__heading.style-2 a.btn-reverse-order i{    -webkit-transform: rotate(45deg);    -moz-transform: rotate(90deg);    -ms-transform: rotate(90deg);    -o-transform: rotate(90deg);    transform: rotate(90deg);    background: none;    color: #000;font-size: 22px; margin: 0 20px}
.text-ui-light .c-blog__heading.style-2 a.btn-reverse-order i{color:#FFF}
.c-blog__heading.style-2 a.btn-reverse-order i:after{display: none}

.sticky-for-mobile.mobile.sticky__active .c-sub-header-nav .sub-nav_content{display: none}
.sticky-for-mobile.mobile.sticky__active .c-sub-header-nav .sub-nav_content{display: none}

#comment-nav-above{padding: 0 0 20px 0}
.comment-navigation .nav-previous, .comment-navigation .nav-next{display:inline-block; width:49%}
.comment-navigation .nav-next{text-align: right}

@media (max-width:812px){
.c-sub-header-nav.sticky .sub-nav_content, .c-sub-header-nav.sticky .c-modal_item{ display: none }
.c-sub-header-nav.sticky .select-pagination{width: 100%}
.wp-manga-nav{text-align: center}
}

body.manga-page .profile-manga .tab-summary .summary_content_wrap .summary_content .c-btn{font-size: 14px}
.mobile .profile-manga #init-links{margin-top:20px; text-align: center}
body.manga-page.mobile .profile-manga .tab-summary{padding-bottom: 0}

#cancel-comment-reply-link{padding: 0 10px; font-size: 12px}
#comment-nav-below{margin-bottom:40px}

/**
 * limit title lines
 **/
.page-listing-item .post-title h3, .slider__content_item h4{
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}