(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[21],{"0D4i":"5NEA":function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=r(n("q1tI")),o=n("OyOn");t.default=,Csic:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n("FkWY");Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r(i).default}})},FkWY:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=r(n("q1tI")),o=r(n("jiWv")),a=r(n("gvjz")),l=r(n("OG4S")),u=r(n("0D4i")),d=r(n("To1D")),s=n("np29");t.default=function(e){var t=e.title,n=e.duration,r=e.label,c=e.icon,f=e.caption,p=e.date,m=e.progress,h=e.rating,b=e.alternativeCaption,y=e.captionColor,v=e.progressColor,g=e.updatedDate,_=e.image,x=_.amp,C=_.ampLayout,k=_.proportion,S=_.sources,w=_.src,O=_.srcSet,j=_.size,M=_.alt,L=void 0===M?"":M,z=e.placeholder,P=e.isCurrentWatching,E=e.onlyMobileView,D=void 0!==E&&E,T=e.secondaryFont,A=void 0!==T&&T,W=e.mobileFontScale,F=void 0===W?1:W,V=e.isDesktopDevice,I=void 0!==V&&V,B=e.clampLinesNumber,N=void 0===B?3:B,Z="number"==typeof m&&!Number.isNaN(m)&&m>=0,q="string"==typeof r?r:null==r?void 0:r.label,K=function(){if("string"!=typeof r)return null==r?void 0:r.type}();return i.default.createElement(s.StyledTeaserWrapper,null,i.default.createElement(s.StyledFigure,null,i.default.createElement(s.StyledPhoto,null,P&&i.default.createElement(l.default,null),x?i.default.createElement(d.default,{alt:L,src:w,srcSet:O,size:j,layout:C}):i.default.createElement(o.default,{alt:L,src:w,srcSet:O,size:j,sources:S,placeholder:z,gradient:!0,proportion:k}),c&&i.default.createElement(s.StyledIcon,null,c),n&&i.default.createElement(s.StyledDuration,null,n),!!h&&i.default.createElement(s.StyledParentalRating,{isDesktopDevice:I},i.default.createElement(a.default,{rating:h})),Z&&i.default.createElement(u.default,{value:m,color:v})),i.default.createElement(s.StyledFigcaption,{onlyMobileView:D},"TILL"===K?i.default.createElement(s.StyledTillContainer,null,f&&i.default.createElement(s.StyledCaption,{captionColor:y,onlyMobileView:D},f),q&&i.default.createElement(s.StyledLabel,{labelType:K,margin:"0"},q)):i.default.createElement(i.default.Fragment,null,q&&i.default.createElement(s.StyledLabel,{labelType:K},q),f&&i.default.createElement(s.StyledCaption,{captionColor:y,onlyMobileView:D},f)),b&&i.default.createElement(s.StyledAlternativeCaption,null,b),i.default.createElement(s.StyledTitle,{mobileFontScale:F,onlyMobileView:!!D,clampLinesNumber:N},t),p&&i.default.createElement(s.StyledDate,{secondaryFont:!!A,onlyMobileView:!!D},p),g&&i.default.createElement(s.StyledDate,{secondaryFont:!!A,updatedDate:!0,onlyMobileView:!!D},g))))}},OG4S:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n("yKud");Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r(i).default}})},OyOn:function(e,t,n){"use strict";var r=this&&this.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.StyledProgressBar=void 0;var o,a=i(n("jmAm")).default.div(o||(o=r(["\n    position: relative;\n    z-index: 2;\n    height: 4px;\n    overflow: hidden;\n    background: ",";\n    border-radius: 6px;\n    backface-visibility: hidden;\n\n    &:after {\n        position: absolute;\n        top: 0;\n        left: 0;\n        display: block;\n        width: ",";\n        height: 100%;\n        background: ",";\n        border-top-left-radius: 6px;\n        border-bottom-left-radius: 6px;\n        backface-visibility: hidden;\n        content: '';\n    }\n"],["\n    position: relative;\n    z-index: 2;\n    height: 4px;\n    overflow: hidden;\n    background: ",";\n    border-radius: 6px;\n    backface-visibility: hidden;\n\n    &:after {\n        position: absolute;\n        top: 0;\n        left: 0;\n        display: block;\n        width: ",";\n        height: 100%;\n        background: ",";\n        border-top-left-radius: 6px;\n        border-bottom-left-radius: 6px;\n        backface-visibility: hidden;\n        content: '';\n    }\n"])),(function(e){return e.theme.colors.white}),(,(function(e){var t=e.color,n=e.theme;return t||n.colors.secondary.value}));t.StyledProgressBar=a},Rvx7:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=r(n("q1tI")),o=n("jmAm"),a=r(n("eVuK"));t.default=o.withTheme((function(e){var t=e.theme;return i.default.createElement(a.default,{backgroundColor:t.colors.yellow[300]},i.default.createElement("g",{transform:"translate(-397.9899,-15.218002)"},i.default.createElement("path",{style:{fontSize:"359.93212891px",fontStyle:"normal",fontVariant:"normal",fontWeight:900,fontStretch:"normal",textAlign:"center",lineHeight:"125%",textAnchor:"middle",fill:"#ffffff",fillOpacity:1,stroke:"none",strokeWidth:"1px",strokeLinecap:"butt",strokeLinejoin:"miter",strokeOpacity:1,fontFamily:"Kozuka Gothic Pro H"},d:"M 601.49428,582.08966 L 601.49428,430.09162 L 577.36568,430.09162 L 545.788,449.29137 L 552.10354,474.69104 L 573.31726,461.29121 L 573.64114,461.29121 L 573.64114,582.08966 L 601.49428,582.08966 z M 699.09029,552.69004 L 657.47252,552.69004 L 657.47252,552.29004 L 667.83648,540.09019 C 675.64649,530.9612 682.4141,521.01967 688.13931,510.26558 C 693.86437,499.51163 696.86695,487.52014 697.14705,474.29105 C 697.20432,461.2455 693.97233,450.33732 687.45108,441.56646 C 680.92968,432.79589 670.7749,428.23763 656.98671,427.89165 C 649.83446,428.00847 643.16807,429.32512 636.98751,431.8416 C 630.8069,434.35838 625.75988,437.37501 621.84642,440.89148 L 629.29551,466.49115 C 632.17662,463.8788 635.52331,461.55383 639.3356,459.51623 C 643.14783,457.47889 647.14227,456.4039 651.31892,456.29128 C 657.21945,456.44973 661.61198,458.53304 664.49653,462.5412 C 667.38097,466.5496 668.81817,471.53286 668.8081,477.49101 C 668.71696,486.47848 665.70089,495.95335 659.75988,505.91564 C 653.81878,515.87808 645.49929,527.60292 634.80136,541.09018 L 620.55092,560.08994 L 620.55092,582.08966 L 699.09029,582.08966 L 699.09029,552.69004 z"})))}))},To1D:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n("m1u9");Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r(i).default}})},WszI:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=r(n("q1tI")),o=r(n("wfdA")),a=r(n("znoW")),l=r(n("Rvx7")),u=r(n("YU07")),d=r(n("cJcW")),s={7:a.default,12:l.default,16:u.default,18:d.default};t.default=function(e){var t=e.rating,n=void 0===t?0:t,r=e.size,a=void 0===r?"20px":r,l=s[n];return l?i.default.createElement(o.default,{"data-testid":"parental-rating-icon",size:a},i.default.createElement(l,null)):null}},YU07:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=r(n("q1tI")),o=n("jmAm"),a=r(n("eVuK"));t.default=o.withTheme((function(e){var t=e.theme;return i.default.createElement(a.default,{backgroundColor:t.colors.orange[500]},i.default.createElement("path",{style:{fontSize:"359.93212891px",fontStyle:"normal",fontVariant:"normal",fontWeight:900,fontStretch:"normal",textAlign:"center",lineHeight:"125%",textAnchor:"middle",fill:"#ffffff",fillOpacity:1,stroke:"none",strokeWidth:"1px",strokeLinecap:"butt",strokeLinejoin:"miter",strokeOpacity:1,fontFamily:"Kozuka Gothic Pro H"},d:"M 201.07532,566.87167 L 201.07532,414.87363 L 176.94672,414.87363 L 145.36904,434.07338 L 151.68457,459.47305 L 172.8983,446.07322 L 173.22218,446.07322 L 173.22218,566.87167 L 201.07532,566.87167 z M 247.17542,477.87281 C 248.70367,468.90635 252.16506,460.9398 257.55962,453.97312 C 262.9541,447.00666 270.82826,442.64005 281.18216,440.87329 C 283.1928,440.56925 285.04158,440.32758 286.72849,440.14829 C 288.41526,439.96926 290.02113,439.87759 291.54612,439.8733 L 291.54612,413.07365 C 288.99891,413.05714 286.92747,413.09047 285.33178,413.17364 C 283.73596,413.25713 281.86694,413.49046 279.72473,413.87364 C 261.09856,415.87793 246.32859,424.86947 235.41475,440.84829 C 224.50087,456.82736 218.92081,477.96874 218.67454,504.27247 C 218.70152,523.07227 222.41257,538.47206 229.8077,550.47187 C 237.20279,562.47172 248.12002,568.67164 262.55942,569.07164 C 275.46033,568.58414 285.48691,563.05922 292.63919,552.49685 C 299.79132,541.93451 303.42139,529.25969 303.52944,514.47234 C 303.29994,499.0851 300.0747,487.26026 293.85372,478.99779 C 287.63257,470.73549 279.79213,466.56056 270.33239,466.47296 C 265.53833,466.51056 261.24026,467.53555 257.43816,469.54792 C 253.63598,471.56049 250.43099,474.33545 247.82317,477.87281 L 247.17542,477.87281 z M 262.23555,544.07196 C 257.2998,543.80532 253.56851,540.73869 251.04166,534.87208 C 248.51474,529.00552 247.17202,521.93896 247.01348,513.67235 C 247.02694,510.86411 247.16189,508.48081 247.41832,506.52244 C 247.67469,504.56419 247.97157,503.08089 248.30898,502.0725 C 249.55383,498.70178 251.27441,495.94348 253.47072,493.7976 C 255.66694,491.65187 258.15672,490.54356 260.94005,490.47265 C 265.85545,490.76439 269.4653,493.43102 271.76958,498.47254 C 274.07375,503.51421 275.21405,509.1808 275.19049,515.47233 C 275.23767,522.87644 274.25255,529.41802 272.23514,535.09707 C 270.21762,540.77619 266.88443,543.76782 262.23555,544.07196 L 262.23555,544.07196 z"}))}))},cJcW:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=r(n("q1tI")),o=n("jmAm"),a=r(n("eVuK"));t.default=o.withTheme((function(e){var t=e.theme;return i.default.createElement(a.default,{backgroundColor:t.colors.red[500]},i.default.createElement("path",{style:{opacity:1,fill:"#ffffff",fillOpacity:1,stroke:"none",strokeWidth:41.74497223,strokeMiterlimit:4,strokeDasharray:"none",strokeOpacity:1},d:"M 270.2383,446.87943 C 251.40723,447.36865 235.60643,460.52735 230.70705,478.06693 C 230.70705,478.06693 141.37892,478.06693 141.37892,478.06693 C 141.37892,478.06693 141.37892,532.27005 141.37892,532.27005 C 141.37892,532.27005 162.31642,532.27005 162.31642,532.27005 C 162.31642,532.27005 162.31642,501.06693 162.31642,501.06693 C 162.31642,501.06693 180.3633,501.06693 180.3633,501.06693 C 180.3633,501.06693 180.3633,532.27005 180.3633,532.27005 C 180.3633,532.27005 201.28517,532.27005 201.28517,532.27005 C 201.28517,532.27005 201.28517,501.06693 201.28517,501.06693 C 201.28517,501.06693 230.70705,501.06693 230.70705,501.06693 C 235.70046,518.94311 252.00824,532.27005 271.31642,532.27005 C 294.58459,532.27006 313.51954,512.91583 313.51955,489.56693 C 313.51954,466.21802 294.58458,446.87943 271.31642,446.87943 C 270.95286,446.87943 270.59968,446.87004 270.2383,446.87943 z M 271.31642,469.37943 C 282.21433,469.37943 291.01955,478.1987 291.01955,489.56693 C 291.01955,500.93515 282.21432,509.77005 271.31642,509.77005 C 260.41853,509.77006 251.62892,500.93515 251.62892,489.56693 C 251.62893,478.1987 260.41852,469.37943 271.31642,469.37943 z"}))}))},e3cC:function(e,t,n){"use strict";var r=this&&this.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},i=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&i(t,e,n);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.StyledTitle=t.StyledCurrentWatchingBoard=void 0;var l=a(n("jmAm")),u=l.default.div(d||(d=r(["\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: 2;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    height: 100%;\n    background-image: linear-gradient(\n        to bottom,\n        rgba(0, 0, 0, 0.25) 0%,\n        rgba(0, 0, 0, 0.5) 50%,\n        rgba(0, 0, 0, 0.5) 100%\n    );\n"],["\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: 2;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    height: 100%;\n    background-image: linear-gradient(\n        to bottom,\n        rgba(0, 0, 0, 0.25) 0%,\n        rgba(0, 0, 0, 0.5) 50%,\n        rgba(0, 0, 0, 0.5) 100%\n    );\n"])));t.StyledCurrentWatchingBoard=u;var d,s,c=l.default.p(s||(s=r(["\n    color: ",";\n    font-size: 18px;\n    ",";\n    letter-spacing: 1.2px;\n"],["\n    color: ",";\n    font-size: 18px;\n    ",";\n    letter-spacing: 1.2px;\n"])),(function(e){return e.theme.colors.white}),(function(e){var t=e.theme;return l.font(t.fonts.primary.medium)}));t.StyledTitle=c},eVuK:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=r(n("q1tI"));t.default=function(e){var t=e.children,n=e.backgroundColor;return i.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",version:"1.0",viewBox:"0 0 200 200"},i.default.createElement("g",{transform:"translate(-124.44924,-389.57265)"},i.default.createElement("path",{style:{fill:n,fillOpacity:1,stroke:"none",strokeWidth:112.40000153,strokeLinecap:"butt",strokeLinejoin:"round",strokeMiterlimit:4,strokeOpacity:1},d:"M 150.9773,389.57265 C 136.32484,389.56924 124.44582,401.44826 124.44924,416.10071 L 124.44924,563.05935 C 124.45398,577.70605 136.33062,589.57607 150.9773,589.57265 L 297.93593,589.57265 C 312.57688,589.56791 324.4445,577.70029 324.44924,563.05935 L 324.44924,416.10071 C 324.45265,401.45404 312.58263,389.5774 297.93593,389.57265 L 150.9773,389.57265 z"}),t))}},gvjz:m1u9:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=r(n("q1tI"));t.default=function(e){var t=e.size,n=void 0===t?{width:16,height:4}:t,r=e.layout,o=void 0===r?"responsive":r,a=e.src,l=e.srcSet,u=e.alt;return i.default.createElement("amp-img",{"data-testid":"image",width:n.width,height:n.height,src:a,srcSet:l,alt:u,layout:o})}},np29:function(e,t,n){"use strict";var r=this&&this.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},i=this&&this.__createBinding||(Object.create?,o=this&&this.__setModuleDefault||(Object.create?,a=this&&this.__importStar||Object.defineProperty(t,"__esModule",{value:!0}),t.StyledTillContainer=t.StyledDuration=t.StyledDate=t.StyledInfoBar=t.StyledAlternativeCaption=t.StyledTitle=t.StyledCaption=t.StyledIcon=t.StyledLabel=t.StyledParentalRating=t.StyledPhoto=t.StyledFigcaption=t.StyledFigure=t.StyledTeaserWrapper=void 0;var l=a(n("jmAm")),u=n("zQ3Z"),d=n("0D4i"),s=l.default.article(k||(k=r(["\n    position: relative;\n    box-sizing: border-box;\n    -moz-osx-font-smoothing: grayscale;\n    -webkit-font-smoothing: antialiased;\n\n    * {\n        box-sizing: border-box;\n    }\n\n    "," {\n        position: absolute;\n        right: 12px;\n        bottom: 8px;\n        left: 12px;\n        display: block;\n        margin-top: 0;\n    }\n"],["\n    position: relative;\n    box-sizing: border-box;\n    -moz-osx-font-smoothing: grayscale;\n    -webkit-font-smoothing: antialiased;\n\n    * {\n        box-sizing: border-box;\n    }\n\n    "," {\n        position: absolute;\n        right: 12px;\n        bottom: 8px;\n        left: 12px;\n        display: block;\n        margin-top: 0;\n    }\n"])),d.StyledProgressBar);t.StyledTeaserWrapper=s;var c=l.default.figure(S||(S=r(["\n    margin-block-start: 0;\n    margin-block-end: 0;\n    margin-inline-start: 0;\n    margin-inline-end: 0;\n"],["\n    margin-block-start: 0;\n    margin-block-end: 0;\n    margin-inline-start: 0;\n    margin-inline-end: 0;\n"])));t.StyledFigure=c;var f=l.default.figcaption(O||(O=r(["\n    position: relative;\n    z-index: 2;\n    display: block;\n    padding: 8px 0 0;\n    overflow: hidden;\n    transform: translateZ(0px);\n    ","\n"],["\n    position: relative;\n    z-index: 2;\n    display: block;\n    padding: 8px 0 0;\n    overflow: hidden;\n    transform: translateZ(0px);\n    ","\n"])),(function(e){var t=e.onlyMobileView;return l.css(w||(w=r(["\n        ","\n    "],["\n        ","\n    "])),t&&"margin-top: 17px;")}));t.StyledFigcaption=f;var p=l.default.div(j||(j=r(["\n    position: relative;\n    width: 100%;\n    overflow: hidden;\n    border-radius: var(--teaser-skye-normal-photo-br, 6px);\n\n    @media (hover: hover) {\n        img {\n            transform: scale(1);\n            transition: transform 0.2s ease-in-out;\n        }\n\n        ",":hover & {\n            img {\n                transform: scale(1.1);\n            }\n        }\n    }\n"],["\n    position: relative;\n    width: 100%;\n    overflow: hidden;\n    border-radius: var(--teaser-skye-normal-photo-br, 6px);\n\n    @media (hover: hover) {\n        img {\n            transform: scale(1);\n            transition: transform 0.2s ease-in-out;\n        }\n\n        ",":hover & {\n            img {\n                transform: scale(1.1);\n            }\n        }\n    }\n"])),s);t.StyledPhoto=p;var m=l.default.div(L||(L=r(["\n    position: absolute;\n    top: 12px;\n    left: 18px;\n    z-index: 2;\n    width: 18px;\n    height: 18px;\n    transform: translateZ(0px);\n    transition: opacity 0.2s ease-in-out;\n\n    ",";\n\n    @media (hover: hover) {\n        ",":hover & {\n            opacity: 1;\n        }\n    }\n"],["\n    position: absolute;\n    top: 12px;\n    left: 18px;\n    z-index: 2;\n    width: 18px;\n    height: 18px;\n    transform: translateZ(0px);\n    transition: opacity 0.2s ease-in-out;\n\n    ",";\n\n    @media (hover: hover) {\n        ",":hover & {\n            opacity: 1;\n        }\n    }\n"])),(function(e){return e.isDesktopDevice&&l.css(M||(M=r(["\n            opacity: 0;\n        "],["\n            opacity: 0;\n        "])))}),s);t.StyledParentalRating=m;var h=l.default.span(E||(E=r(["\n    ",";\n    position: static;\n    display: inline-flex;\n    max-width: unset;\n    margin: ",";\n    padding: 0;\n    color: ",";\n    ",";\n    font-size: 14px;\n    border-radius: 0;\n"],["\n    ",";\n    position: static;\n    display: inline-flex;\n    max-width: unset;\n    margin: ",";\n    padding: 0;\n    color: ",";\n    ",";\n    font-size: 14px;\n    border-radius: 0;\n"])),(function(e){var t=e.theme;return l.font(t.fonts.primary.bold)}),(,(,(function(e){var t=e.theme;return"PREMIERE"===e.labelType?l.css(z||(z=r(["\n                background-color: ",";\n                color: ",";\n                padding: 3px 8px;\n                line-height: 14px;\n                margin-bottom: 5px;\n            "],["\n                background-color: ",";\n                color: ",";\n                padding: 3px 8px;\n                line-height: 14px;\n                margin-bottom: 5px;\n            "])),t.colors.blue[800],t.colors.white):l.css(P||(P=r(["\n            background: unset;\n            line-height: 1.5;\n        "],["\n            background: unset;\n            line-height: 1.5;\n        "])))}));t.StyledLabel=h;var b=l.default.div(D||(D=r(["\n    margin-bottom: 4px;\n"],["\n    margin-bottom: 4px;\n"])));t.StyledTillContainer=b;var y=l.default.div(T||(T=r(["\n    position: absolute;\n    bottom: 20px;\n    left: 20px;\n    z-index: 2;\n    transform: translateZ(0px);\n"],["\n    position: absolute;\n    bottom: 20px;\n    left: 20px;\n    z-index: 2;\n    transform: translateZ(0px);\n"])));t.StyledIcon=y;var v=l.default.label(V||(V=r(["\n    display: inline-block;\n    ",";\n    ","\n    margin-top: unset;\n    margin-right: 7px;\n    ","\n    ","\n"],["\n    display: inline-block;\n    ",";\n    ","\n    margin-top: unset;\n    margin-right: 7px;\n    ","\n    ","\n"])),(function(e){var t=e.theme;return l.font(t.fonts.primary.bold)}),(function(e){var t=e.captionColor,n=e.theme;return l.css(A||(A=r(["\n        color: ",";\n    "],["\n        color: ",";\n    "])),t||n.colors.primary.value)}),u.getFontSizeAndLineHeight(14,21),(function(e){var t=e.onlyMobileView;return l.css(F||(F=r(["\n        ","\n    "],["\n        ","\n    "])),!t&&l.media.tablet(W||(W=r(["\n            display: inline-block;\n        "],["\n            display: inline-block;\n        "]))))}));t.StyledCaption=v;var g=l.default(v)(I||(I=r(["\n    margin-top: 0;\n    color: ",";\n    line-height: inherit;\n"],["\n    margin-top: 0;\n    color: ",";\n    line-height: inherit;\n"])),(function(e){return e.theme.colors.black}));t.StyledAlternativeCaption=g;var _=l.default.h2(Z||(Z=r(["\n    margin: 14px 0 0 0;\n    ",";\n    ",";\n    color: ",";\n    ",";\n"],["\n    margin: 14px 0 0 0;\n    ",";\n    ",";\n    color: ",";\n    ",";\n"])),(function(e){var t=e.clampLinesNumber;return t>0?u.getClampStyles(t):""}),(function(e){var t=e.theme;return l.font(t.fonts.primary.bold)}),(function(e){return e.theme.colors.white}),(function(e){var t=e.theme,n=e.mobileFontScale,i=e.onlyMobileView;return l.css(N||(N=r(["\n        margin: 0;\n        color: ",";\n        ","\n\n        ","\n    "],["\n        margin: 0;\n        color: ",";\n        ","\n\n        ","\n    "])),t.colors.black,u.getFontSizeAndLineHeight(18,25,n),!i&&l.media.tablet(B||(B=r(["\n            margin: 4px 0 0;\n            ","\n        "],["\n            margin: 4px 0 0;\n            ","\n        "])),u.getFontSizeAndLineHeight(18,24)))}));t.StyledTitle=_;var x=l.default.div(H||(H=r(["\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    ","\n"],["\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    ","\n"])),(function(e){var t=e.onlyMobileView;return l.css(K||(K=r(["\n        margin-top: 27px;\n\n        ","\n    "],["\n        margin-top: 27px;\n\n        ","\n    "])),!t&&l.media.tablet(q||(q=r(["\n            margin-top: 21px;\n        "],["\n            margin-top: 21px;\n        "]))))}));t.StyledInfoBar=x;var C=l.default.div(Y||(Y=r(["\n    ",";\n    display: inline-block;\n    margin-top: 9px;\n    color: unset;\n    font-size: 12px;\n    ","\n    ","\n"],["\n    ",";\n    display: inline-block;\n    margin-top: 9px;\n    color: unset;\n    font-size: 12px;\n    ","\n    ","\n"])),(function(e){var t=e.theme;return e.secondaryFont?l.font(t.fonts.secondary.normal):l.font(t.fonts.primary.medium)}),(,(function(e){var t=e.updatedDate,n=e.theme;return t&&l.css(G||(G=r(["\n            display: inline-block;\n            padding: 5px;\n            background: ",";\n            border-radius: 6px;\n            margin: 0;\n        "],["\n            display: inline-block;\n            padding: 5px;\n            background: ",";\n            border-radius: 6px;\n            margin: 0;\n        "])),n.colors.yellow[600])}));t.StyledDate=C;var k,S,w,O,j,M,L,z,P,E,D,T,A,W,F,V,I,B,N,Z,q,K,H,R,G,Y,J,U=l.default.time(J||(J=r(["\n    position: absolute;\n    right: 20px;\n    bottom: 20px;\n    z-index: 2;\n    color: ",";\n    ",";\n    font-size: 16px;\n    transform: translateZ(0px);\n"],["\n    position: absolute;\n    right: 20px;\n    bottom: 20px;\n    z-index: 2;\n    color: ",";\n    ",";\n    font-size: 16px;\n    transform: translateZ(0px);\n"])),(,(function(e){var t=e.theme;return l.font(t.fonts.primary.bold)}));t.StyledDuration=U},wfdA:function(e,t,n){"use strict";var r=this&&this.__makeTemplateObject||i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o,a=i(n("jmAm")).default.span(o||(o=r(["\n    display: inline-block;\n    width: ",";\n    height: ",";\n"],["\n    display: inline-block;\n    width: ",";\n    height: ",";\n"])),(function(e){return""+e.size}),();t.default=a},yKud:znoW:function(e,t,n){"use strict";var r=this&&this.__importDefault||Object.defineProperty(t,"__esModule",{value:!0});var i=r(n("q1tI")),o=n("jmAm"),a=r(n("eVuK"));t.default=o.withTheme((function(e){var t=e.theme;return i.default.createElement(a.default,{backgroundColor:t.colors.blue[450]},i.default.createElement("path",{style:{fillOpacity:1,fill:"#ffffff",lineHeight:"125%",fontWeight:900,textAlign:"center",textAnchor:"middle",fontStyle:"normal",fontVariant:"normal",fontStretch:"normal",fontSize:"359.93212891px",fontFamily:"Kozuka Gothic Pro H",stroke:"none",strokeWidth:"1px",strokeLinecap:"butt",strokeLinejoin:"miter",strokeOpacity:1},d:"M 185.26053,444.07325 L 234.48933,444.07325 L 234.48933,444.47324 L 190.11863,566.87167 L 219.26727,566.87167 L 263.63797,436.87334 L 263.63797,414.87363 L 185.26053,414.87363 L 185.26053,444.07325 z"}))}))}}]);