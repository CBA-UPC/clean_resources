<!DOCTYPE html>
<html lang="en">
<head>
</head>
<body>
<script>
  (function () {
    var AM_UID = "am-uid";
    var COOKIE_ENABLED = "cookieEnabled";
    window.addEventListener("message", function (event) {
      try {
        var message = event.data;
        var amUid = message[AM_UID];
        if (amUid) {
          localStorage.setItem(AM_UID, amUid);
        }
      } catch (e) {
      }
    });
    var message = {};
    try {
      message[COOKIE_ENABLED] = navigator.cookieEnabled;
      message[AM_UID] = localStorage.getItem(AM_UID);
    } catch (e) {
      message[AM_UID] = null;
    }
    finally {
        window.parent.postMessage(message, "*");
    }
  })();
</script>
</body>
</html>
ea-basic-10.svg#linea-basic-10") format("svg");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "linea-basic-elaboration-10";
  src: url("basic-elaboration/fonts/linea-basic-elaboration-10.eot");
  src: url("basic-elaboration/fonts/linea-basic-elaboration-10.eot?#iefix") format("embedded-opentype"), url("basic-elaboration/fonts/linea-basic-elaboration-10.woff") format("woff"), url("basic-elaboration/fonts/linea-basic-elaboration-10.ttf") format("truetype"), url("basic-elaboration/fonts/linea-basic-elaboration-10.svg#linea-basic-elaboration-10") format("svg");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "linea-ecommerce-10";
  src: url("ecommerce/fonts/linea-ecommerce-10.eot");
  src: url("ecommerce/fonts/linea-ecommerce-10.eot?#iefix") format("embedded-opentype"), url("ecommerce/fonts/linea-ecommerce-10.woff") format("woff"), url("ecommerce/fonts/linea-ecommerce-10.ttf") format("truetype"), url("ecommerce/fonts/linea-ecommerce-10.svg#linea-ecommerce-10") format("svg");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "linea-music-10";
  src: url("music/fonts/linea-music-10.eot");
  src: url("music/fonts/linea-music-10.eot?#iefix") format("embedded-opentype"), url("music/fonts/linea-music-10.woff") format("woff"), url("music/fonts/linea-music-10.ttf") format("truetype"), url("music/fonts/linea-music-10.svg#linea-music-10") format("svg");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "linea-software-10";
  src: url("software/fonts/linea-software-10.eot");
  src: url("software/fonts/linea-software-10.eot?#iefix") format("embedded-opentype"), url("software/fonts/linea-software-10.woff") format("woff"), url("software/fonts/linea-software-10.ttf") format("truetype"), url("software/fonts/linea-software-10.svg#linea-software-10") format("svg");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "linea-weather-10";
  src: url("weather/fonts/linea-weather-10.eot");
  src: url("weather/fonts/linea-weather-10.eot?#iefix") format("embedded-opentype"), url("weather/fonts/linea-weather-10.woff") format("woff"), url("weather/fonts/linea-weather-10.ttf") format("truetype"), url("weather/fonts/linea-weather-10.svg#linea-weather-10") format("svg");
  font-weight: normal;
  font-style: normal;
}

/* line 1, arrows/_styles.scss */
[class^="icon-arrows"][data-icon]:before {
  font-family: "linea-arrows-10" !important;
  content: attr(data-icon);
  font-style: normal !important;
  font-weight: normal !important;
  font-variant: normal !important;
  text-transform: none !important;
  speak: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* line 15, arrows/_styles.scss */
[class^="icon-arrows-"]:before,
[class*=" icon-arrows-"]:before {
  font-family: "linea-arrows-10" !important;
  font-style: normal !important;
  font-weight: normal !important;
  font-variant: normal !important;
  text-transform: none !important;
  speak: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* line 27, arrows/_styles.scss */
.icon-arrows-anticlockwise:before {
  content: "\e000";
}

/* line 30, arrows/_styles.scss */
.icon-arrows-anticlockwise-dashed:before {
  content: "\e001";
}

/* line 33, arrows/_styles.scss */
.icon-arrows-button-down:before {
  content: "\e002";
}

/* line 36, arrows/_styles.scss */
.icon-arrows-button-off:before {
  content: "\e003";
}

/* line 39, arrows/_styles.scss */
.icon-arrows-button-on:before {
  content: "\e004";
}

/* line 42, arrows/_styles.scss */
.icon-arrows-button-up:before {
  content: "\e005";
}

/* line 45, arrows/_styles.scss */
.icon-arrows-check:before {
  content: "\e006";
}

/* line 48, arrows/_styles.scss */
.icon-arrows-circle-check:before {
  content: "\e007";
}

/* line 51, arrows/_styles.scss */
.icon-arrows-circle-down:before {
  content: "\e008";
}

/* line 54, arrows/_styles.scss */
.icon-arrows-circle-downleft:before {
  content: "\e009";
}

/* line 57, arrows/_styles.scss */
.icon-arrows-circle-downright:before {
  content: "\e00a";
}

/* line 60, arrows/_styles.scss */
.icon-arrows-circle-left:before {
  content: "\e00b";
}

/* line 63, arrows/_styles.scss */
.icon-arrows-circle-minus:before {
  content: "\e00c";
}

/* line 66, arrows/_styles.scss */
.icon-arrows-circle-plus:before {
  content: "\e00d";
}

/* line 69, arrows/_styles.scss */
.icon-arrows-circle-remove:before {
  content: "\e00e";
}

/* line 72, arrows/_styles.scss */
.icon-arrows-circle-right:before {
  content: "\e00f";
}

/* line 75, arrows/_styles.scss */
.icon-arrows-circle-up:before {
  content: "\e010";
}

/* line 78, arrows/_styles.scss */
.icon-arrows-circle-upleft:before {
  content: "\e011";
}

/* line 81, arrows/_styles.scss */
.icon-arrows-circle-upright:before {
  content: "\e012";
}

/* line 84, arrows/_styles.scss */
.icon-arrows-clockwise:before {
  content: "\e013";
}

/* line 87, arrows/_styles.scss */
.icon-arrows-clockwise-dashed:before {
  content: "\e014";
}

/* line 90, arrows/_styles.scss */
.icon-arrows-compress:before {
  content: "\e015";
}

/* line 93, arrows/_styles.scss */
.icon-arrows-deny:before {
  content: "\e016";
}

/* line 96, arrows/_styles.scss */
.icon-arrows-diagonal:before {
  content: "\e017";
}

/* line 99, arrows/_styles.scss */
.icon-arrows-diagonal2:before {
  content: "\e018";
}

/* line 102, arrows/_styles.scss */
.icon-arrows-down:before {
  content: "\e019";
}

/* line 105, arrows/_styles.scss */
.icon-arrows-down-double:before {
  content: "\e01a";
}

/* line 108, arrows/_styles.scss */
.icon-arrows-downleft:before {
  content: "\e01b";
}

/* line 111, arrows/_styles.scss */
.icon-arrows-downright:before {
  content: "\e01c";
}

/* line 114, arrows/_styles.scss */
.icon-arrows-drag-down:before {
  content: "\e01d";
}

/* line 117, arrows/_styles.scss */
.icon-arrows-drag-down-dashed:before {
  content: "\e01e";
}

/* line 120, arrows/_styles.scss */
.icon-arrows-drag-horiz:before {
  content: "\e01f";
}

/* line 123, arrows/_styles.scss */
.icon-arrows-drag-left:before {
  content: "\e020";
}

/* line 126, arrows/_styles.scss */
.icon-arrows-drag-left-dashed:before {
  content: "\e021";
}

/* line 129, arrows/_styles.scss */
.icon-arrows-drag-right:before {
  content: "\e022";
}

/* line 132, arrows/_styles.scss */
.icon-arrows-drag-right-dashed:before {
  content: "\e023";
}

/* line 135, arrows/_styles.scss */
.icon-arrows-drag-up:before {
  content: "\e024";
}

/* line 138, arrows/_styles.scss */
.icon-arrows-drag-up-dashed:before {
  content: "\e025";
}

/* line 141, arrows/_styles.scss */
.icon-arrows-drag-vert:before {
  content: "\e026";
}

/* line 144, arrows/_styles.scss */
.icon-arrows-exclamation:before {
  content: "\e027";
}

/* line 147, arrows/_styles.scss */
.icon-arrows-expand:before {
  content: "\e028";
}

/* line 150, arrows/_styles.scss */
.icon-arrows-expand-diagonal1:before {
  content: "\e029";
}

/* line 153, arrows/_styles.scss */
.icon-arrows-expand-horizontal1:before {
  content: "\e02a";
}

/* line 156, arrows/_styles.scss */
.icon-arrows-expand-vertical1:before {
  content: "\e02b";
}

/* line 159, arrows/_styles.scss */
.icon-arrows-fit-horizontal:before {
  content: "\e02c";
}

/* line 162, arrows/_styles.scss */
.icon-arrows-fit-vertical:before {
  content: "\e02d";
}

/* line 165, arrows/_styles.scss */
.icon-arrows-glide:before {
  content: "\e02e";
}

/* line 168, arrows/_styles.scss */
.icon-arrows-glide-horizontal:before {
  content: "\e02f";
}

/* line 171, arrows/_styles.scss */
.icon-arrows-glide-vertical:before {
  content: "\e030";
}

/* line 174, arrows/_styles.scss */
.icon-arrows-hamburger1:before {
  content: "\e031";
}

/* line 177, arrows/_styles.scss */
.icon-arrows-hamburger-2:before {
  content: "\e032";
}

/* line 180, arrows/_styles.scss */
.icon-arrows-horizontal:before {
  content: "\e033";
}

/* line 183, arrows/_styles.scss */
.icon-arrows-info:before {
  content: "\e034";
}

/* line 186, arrows/_styles.scss */
.icon-arrows-keyboard-alt:before {
  content: "\e035";
}

/* line 189, arrows/_styles.scss */
.icon-arrows-keyboard-cmd:before {
  content: "\e036";
}

/* line 192, arrows/_styles.scss */
.icon-arrows-keyboard-delete:before {
  content: "\e037";
}

/* line 195, arrows/_styles.scss */
.icon-arrows-keyboard-down:before {
  content: "\e038";
}

/* line 198, arrows/_styles.scss */
.icon-arrows-keyboard-left:before {
  content: "\e039";
}

/* line 201, arrows/_styles.scss */
.icon-arrows-keyboard-return:before {
  content: "\e03a";
}

/* line 204, arrows/_styles.scss */
.icon-arrows-keyboard-right:before {
  content: "\e03b";
}

/* line 207, arrows/_styles.scss */
.icon-arrows-keyboard-shift:before {
  content: "\e03c";
}

/* line 210, arrows/_styles.scss */
.icon-arrows-keyboard-tab:before {
  content: "\e03d";
}

/* line 213, arrows/_styles.scss */
.icon-arrows-keyboard-up:before {
  content: "\e03e";
}

/* line 216, arrows/_styles.scss */
.icon-arrows-left:before {
  content: "\e03f";
}

/* line 219, arrows/_styles.scss */
.icon-arrows-left-double-32:before {
  content: "\e040";
}

/* line 222, arrows/_styles.scss */
.icon-arrows-minus:before {
  content: "\e041";
}

/* line 225, arrows/_styles.scss */
.icon-arrows-move:before {
  content: "\e042";
}

/* line 228, arrows/_styles.scss */
.icon-arrows-move2:before {
  content: "\e043";
}

/* line 231, arrows/_styles.scss */
.icon-arrows-move-bottom:before {
  content: "\e044";
}

/* line 234, arrows/_styles.scss */
.icon-arrows-move-left:before {
  content: "\e045";
}

/* line 237, arrows/_styles.scss */
.icon-arrows-move-right:before {
  content: "\e046";
}

/* line 240, arrows/_styles.scss */
.icon-arrows-move-top:before {
  content: "\e047";
}

/* line 243, arrows/_styles.scss */
.icon-arrows-plus:before {
  content: "\e048";
}

/* line 246, arrows/_styles.scss */
.icon-arrows-question:before {
  content: "\e049";
}

/* line 249, arrows/_styles.scss */
.icon-arrows-remove:before {
  content: "\e04a";
}

/* line 252, arrows/_styles.scss */
.icon-arrows-right:before {
  content: "\e04b";
}

/* line 255, arrows/_styles.scss */
.icon-arrows-right-double:before {
  content: "\e04c";
}

/* line 258, arrows/_styles.scss */
.icon-arrows-rotate:before {
  content: "\e04d";
}

/* line 261, arrows/_styles.scss */
.icon-arrows-rotate-anti:before {
  content: "\e04e";
}

/* line 264, arrows/_styles.scss */
.icon-arrows-rotate-anti-dashed:before {
  content: "\e04f";
}

/* line 267, arrows/_styles.scss */
.icon-arrows-rotate-dashed:before {
  content: "\e050";
}

/* line 270, arrows/_styles.scss */
.icon-arrows-shrink:before {
  content: "\e051";
}

/* line 273, arrows/_styles.scss */
.icon-arrows-shrink-diagonal1:before {
  content: "\e052";
}

/* line 276, arrows/_styles.scss */
.icon-arrows-shrink-diagonal2:before {
  content: "\e053";
}

/* line 279, arrows/_styles.scss */
.icon-arrows-shrink-horizonal2:before {
  content: "\e054";
}

/* line 282, arrows/_styles.scss */
.icon-arrows-shrink-horizontal1:before {
  content: "\e055";
}

/* line 285, arrows/_styles.scss */
.icon-arrows-shrink-vertical1:before {
  content: "\e056";
}

/* line 288, arrows/_styles.scss */
.icon-arrows-shrink-vertical2:before {
  content: "\e057";
}

/* line 291, arrows/_styles.scss */
.icon-arrows-sign-down:before {
  content: "\e058";
}

/* line 294, arrows/_styles.scss */
.icon-arrows-sign-left:before {
  content: "\e059";
}

/* line 297, arrows/_styles.scss */
.icon-arrows-sign-right:before {
  content: "\e05a";
}

/* line 300, arrows/_styles.scss */
.icon-arrows-sign-up:before {
  content: "\e05b";
}

/* line 303, arrows/_styles.scss */
.icon-arrows-slide-down1:before {
  content: "\e05c";
}

/* line 306, arrows/_styles.scss */
.icon-arrows-slide-down2:before {
  content: "\e05d";
}

/* line 309, arrows/_styles.scss */
.icon-arrows-slide-left1:before {
  content: "\e05e";
}

/* line 312, arrows/_styles.scss */
.icon-arrows-slide-left2:before {
  content: "\e05f";
}

/* line 315, arrows/_styles.scss */
.icon-arrows-slide-right1:before {
  content: "\e060";
}

/* line 318, arrows/_styles.scss */
.icon-arrows-slide-right2:before {
  content: "\e061";
}

/* line 321, arrows/_styles.scss */
.icon-arrows-slide-up1:before {
  content: "\e062";
}

/* line 324, arrows/_styles.scss */
.icon-arrows-slide-up2:before {
  content: "\e063";
}

/* line 327, arrows/_styles.scss */
.icon-arrows-slim-down:before {
  content: "\e064";
}

/* line 330, arrows/_styles.scss */
.icon-arrows-slim-down-dashed:before {
  content: "\e065";
}

/* line 333, arrows/_styles.scss */
.icon-arrows-slim-left:before {
  content: "\e066";
}

/* line 336, arrows/_styles.scss */
.icon-arrows-slim-left-dashed:before {
  content: "\e067";
}

/* line 339, arrows/_styles.scss */
.icon-arrows-slim-right:before {
  content: "\e068";
}

/* line 342, arrows/_styles.scss */
.icon-arrows-slim-right-dashed:before {
  content: "\e069";
}

/* line 345, arrows/_styles.scss */
.icon-arrows-slim-up:before {
  content: "\e06a";
}

/* line 348, arrows/_styles.scss */
.icon-arrows-slim-up-dashed:before {
  content: "\e06b";
}

/* line 351, arrows/_styles.scss */
.icon-arrows-square-check:before {
  content: "\e06c";
}

/* line 354, arrows/_styles.scss */
.icon-arrows-square-down:before {
  content: "\e06d";
}

/* line 357, arrows/_styles.scss */
.icon-arrows-square-downleft:before {
  content: "\e06e";
}

/* line 360, arrows/_styles.scss */
.icon-arrows-square-downright:before {
  content: "\e06f";
}

/* line 363, arrows/_styles.scss */
.icon-arrows-square-left:before {
  content: "\e070";
}

/* line 366, arrows/_styles.scss */
.icon-arrows-square-minus:before {
  content: "\e071";
}

/* line 369, arrows/_styles.scss */
.icon-arrows-square-plus:before {
  content: "\e072";
}

/* line 372, arrows/_styles.scss */
.icon-arrows-square-remove:before {
  content: "\e073";
}

/* line 375, arrows/_styles.scss */
.icon-arrows-square-right:before {
  content: "\e074";
}

/* line 378, arrows/_styles.scss */
.icon-arrows-square-up:before {
  content: "\e075";
}

/* line 381, arrows/_styles.scss */
.icon-arrows-square-upleft:before {
  content: "\e076";
}

/* line 384, arrows/_styles.scss */
.icon-arrows-square-upright:before {
  content: "\e077";
}

/* line 387, arrows/_styles.scss */
.icon-arrows-squares:before {
  content: "\e078";
}

/* line 390, arrows/_styles.scss */
.icon-arrows-stretch-diagonal1:before {
  content: "\e079";
}

/* line 393, arrows/_styles.scss */
.icon-arrows-stretch-diagonal2:before {
  content: "\e07a";
}

/* line 396, arrows/_styles.scss */
.icon-arrows-stretch-diagonal3:before {
  content: "\e07b";
}

/* line 399, arrows/_styles.scss */
.icon-arrows-stretch-diagonal4:before {
  content: "\e07c";
}

/* line 402, arrows/_styles.scss */
.icon-arrows-stretch-horizontal1:before {
  content: "\e07d";
}

/* line 405, arrows/_styles.scss */
.icon-arrows-stretch-horizontal2:before {
  content: "\e07e";
}

/* line 408, arrows/_styles.scss */
.icon-arrows-stretch-vertical1:before {
  content: "\e07f";
}

/* line 411, arrows/_styles.scss */
.icon-arrows-stretch-vertical2:before {
  content: "\e080";
}

/* line 414, arrows/_styles.scss */
.icon-arrows-switch-horizontal:before {
  content: "\e081";
}

/* line 417, arrows/_styles.scss */
.icon-arrows-switch-vertical:before {
  content: "\e082";
}

/* line 420, arrows/_styles.scss */
.icon-arrows-up:before {
  content: "\e083";
}

/* line 423, arrows/_styles.scss */
.icon-arrows-up-double-33:before {
  content: "\e084";
}

/* line 426, arrows/_styles.scss */
.icon-arrows-upleft:before {
  content: "\e085";
}

/* line 429, arrows/_styles.scss */
.icon-arrows-upright:before {
  content: "\e086";
}

/* line 432, arrows/_styles.scss */
.icon-arrows-vertical:before {
  content: "\e087";
}

/* line 1, basic/_styles.scss */
[class^="icon-basic-"][data-icon]:before {
  font-family: "linea-basic-10" !important;
  content: attr(data-icon);
  font-style: normal !important;
  font-weight: normal !important;
  font-variant: normal !important;
  text-transform: none !important;
  speak: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* line 15, basic/_styles.scss */
[class^="icon-basic-"]:before,
[class*=" icon-basic-"]:before {
  font-family: "linea-basic-10" !important;
  font-style: normal !important;
  font-weight: normal !important;
  font-variant: normal !important;
  text-transform: none !important;
  speak: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* line 27, basic/_styles.scss */
.icon-basic-accelerator:before {
  content: "a";
}

/* line 30, basic/_styles.scss */
.icon-basic-alarm:before {
  content: "b";
}

/* line 33, basic/_styles.scss */
.icon-basic-anchor:before {
  content: "c";
}

/* line 36, basic/_styles.scss */
.icon-basic-anticlockwise:before {
  content: "d";
}

/* line 39, basic/_styles.scss */
.icon-basic-archive:before {
  content: "e";
}

/* line 42, basic/_styles.scss */
.icon-basic-archive-full:before {
  content: "f";
}

/* line 45, basic/_styles.scss */
.icon-basic-ban:before {
  content: "g";
}

/* line 48, basic/_styles.scss */
.icon-basic-battery-charge:before {
  content: "h";
}

/* line 51, basic/_styles.scss */
.icon-basic-battery-empty:before {
  content: "i";
}

/* line 54, basic/_styles.scss */
.icon-basic-battery-full:before {
  content: "j";
}

/* line 57, basic/_styles.scss */
.icon-basic-battery-half:before {
  content: "k";
}

/* line 60, basic/_styles.scss */
.icon-basic-bolt:before {
  content: "l";
}

/* line 63, basic/_styles.scss */
.icon-basic-book:before {
  content: "m";
}

/* line 66, basic/_styles.scss */
.icon-basic-book-pen:before {
  content: "n";
}

/* line 69, basic/_styles.scss */
.icon-basic-book-pencil:before {
  content: "o";
}

/* line 72, basic/_styles.scss */
.icon-basic-bookmark:before {
  content: "p";
}

/* line 75, basic/_styles.scss */
.icon-basic-calculator:before {
  content: "q";
}

/* line 78, basic/_styles.scss */
.icon-basic-calendar:before {
  content: "r";
}

/* line 81, basic/_styles.scss */
.icon-basic-cards-diamonds:before {
  content: "s";
}

/* line 84, basic/_styles.scss */
.icon-basic-cards-hearts:before {
  content: "t";
}

/* line 87, basic/_styles.scss */
.icon-basic-case:before {
  content: "u";
}

/* line 90, basic/_styles.scss */
.icon-basic-chronometer:before {
  content: "v";
}

/* line 93, basic/_styles.scss */
.icon-basic-clessidre:before {
  content: "w";
}

/* line 96, basic/_styles.scss */
.icon-basic-clock:before {
  content: "x";
}

/* line 99, basic/_styles.scss */
.icon-basic-clockwise:before {
  content: "y";
}

/* line 102, basic/_styles.scss */
.icon-basic-cloud:before {
  content: "z";
}

/* line 105, basic/_styles.scss */
.icon-basic-clubs:before {
  content: "A";
}

/* line 108, basic/_styles.scss */
.icon-basic-compass:before {
  content: "B";
}

/* line 111, basic/_styles.scss */
.icon-basic-cup:before {
  content: "C";
}

/* line 114, basic/_styles.scss */
.icon-basic-diamonds:before {
  content: "D";
}

/* line 117, basic/_styles.scss */
.icon-basic-display:before {
  content: "E";
}

/* line 120, basic/_styles.scss */
.icon-basic-download:before {
  content: "F";
}

/* line 123, basic/_styles.scss */
.icon-basic-exclamation:before {
  content: "G";
}

/* line 126, basic/_styles.scss */
.icon-basic-eye:before {
  content: "H";
}

/* line 129, basic/_styles.scss */
.icon-basic-eye-closed:before {
  content: "I";
}

/* line 132, basic/_styles.scss */
.icon-basic-female:before {
  content: "J";
}

/* line 135, basic/_styles.scss */
.icon-basic-flag1:before {
  content: "K";
}

/* line 138, basic/_styles.scss */
.icon-basic-flag2:before {
  content: "L";
}

/* line 141, basic/_styles.scss */
.icon-basic-floppydisk:before {
  content: "M";
}

/* line 144, basic/_styles.scss */
.icon-basic-folder:before {
  content: "N";
}

/* line 147, basic/_styles.scss */
.icon-basic-folder-multiple:before {
  content: "O";
}

/* line 150, basic/_styles.scss */
.icon-basic-gear:before {
  content: "P";
}

/* line 153, basic/_styles.scss */
.icon-basic-geolocalize-01:before {
  content: "Q";
}

/* line 156, basic/_styles.scss */
.icon-basic-geolocalize-05:before {
  content: "R";
}

/* line 159, basic/_styles.scss */
.icon-basic-globe:before {
  content: "S";
}

/* line 162, basic/_styles.scss */
.icon-basic-gunsight:before {
  content: "T";
}

/* line 165, basic/_styles.scss */
.icon-basic-hammer:before {
  content: "U";
}

/* line 168, basic/_styles.scss */
.icon-basic-headset:before {
  content: "V";
}

/* line 171, basic/_styles.scss */
.icon-basic-heart:before {
  content: "W";
}

/* line 174, basic/_styles.scss */
.icon-basic-heart-broken:before {
  content: "X";
}

/* line 177, basic/_styles.scss */
.icon-basic-helm:before {
  content: "Y";
}

/* line 180, basic/_styles.scss */
.icon-basic-home:before {
  content: "Z";
}

/* line 183, basic/_styles.scss */
.icon-basic-info:before {
  content: "0";
}

/* line 186, basic/_styles.scss */
.icon-basic-ipod:before {
  content: "1";
}

/* line 189, basic/_styles.scss */
.icon-basic-joypad:before {
  content: "2";
}

/* line 192, basic/_styles.scss */
.icon-basic-key:before {
  content: "3";
}

/* line 195, basic/_styles.scss */
.icon-basic-keyboard:before {
  content: "4";
}

/* line 198, basic/_styles.scss */
.icon-basic-laptop:before {
  content: "5";
}

/* line 201, basic/_styles.scss */
.icon-basic-life-buoy:before {
  content: "6";
}

/* line 204, basic/_styles.scss */
.icon-basic-lightbulb:before {
  content: "7";
}

/* line 207, basic/_styles.scss */
.icon-basic-link:before {
  content: "8";
}

/* line 210, basic/_styles.scss */
.icon-basic-lock:before {
  content: "9";
}

/* line 213, basic/_styles.scss */
.icon-basic-lock-open:before {
  content: "!";
}

/* line 216, basic/_styles.scss */
.icon-basic-magic-mouse:before {
  content: "\"";
}

/* line 219, basic/_styles.scss */
.icon-basic-magnifier:before {
  content: "#";
}

/* line 222, basic/_styles.scss */
.icon-basic-magnifier-minus:before {
  content: "$";
}

/* line 225, basic/_styles.scss */
.icon-basic-magnifier-plus:before {
  content: "%";
}

/* line 228, basic/_styles.scss */
.icon-basic-mail:before {
  content: "&";
}

/* line 231, basic/_styles.scss */
.icon-basic-mail-multiple:before {
  content: "'";
}

/* line 234, basic/_styles.scss */
.icon-basic-mail-open:before {
  content: "(";
}

/* line 237, basic/_styles.scss */
.icon-basic-mail-open-text:before {
  content: ")";
}

/* line 240, basic/_styles.scss */
.icon-basic-male:before {
  content: "*";
}

/* line 243, basic/_styles.scss */
.icon-basic-map:before {
  content: "+";
}

/* line 246, basic/_styles.scss */
.icon-basic-message:before {
  content: ",";
}

/* line 249, basic/_styles.scss */
.icon-basic-message-multiple:before {
  content: "-";
}

/* line 252, basic/_styles.scss */
.icon-basic-message-txt:before {
  content: ".";
}

/* line 255, basic/_styles.scss */
.icon-basic-mixer2:before {
  content: "/";
}

/* line 258, basic/_styles.scss */
.icon-basic-mouse:before {
  content: ":";
}

/* line 261, basic/_styles.scss */
.icon-basic-notebook:before {
  content: ";";
}

/* line 264, basic/_styles.scss */
.icon-basic-notebook-pen:before {
  content: "<";
}

/* line 267, basic/_styles.scss */
.icon-basic-notebook-pencil:before {
  content: "=";
}

/* line 270, basic/_styles.scss */
.icon-basic-paperplane:before {
  content: ">";
}

/* line 273, basic/_styles.scss */
.icon-basic-pencil-ruler:before {
  content: "?";
}

/* line 276, basic/_styles.scss */
.icon-basic-pencil-ruler-pen:before {
  content: "@";
}

/* line 279, basic/_styles.scss */
.icon-basic-photo:before {
  content: "[";
}

/* line 282, basic/_styles.scss */
.icon-basic-picture:before {
  content: "]";
}

/* line 285, basic/_styles.scss */
.icon-basic-picture-multiple:before {
  content: "^";
}

/* line 288, basic/_styles.scss */
.icon-basic-pin1:before {
  content: "_";
}

/* line 291, basic/_styles.scss */
.icon-basic-pin2:before {
  content: "`";
}

/* line 294, basic/_styles.scss */
.icon-basic-postcard:before {
  content: "{";
}

/* line 297, basic/_styles.scss */
.icon-basic-postcard-multiple:before {
  content: "|";
}

/* line 300, basic/_styles.scss */
.icon-basic-printer:before {
  content: "}";
}

/* line 303, basic/_styles.scss */
.icon-basic-question:before {
  content: "~";
}

/* line 306, basic/_styles.scss */
.icon-basic-rss:before {
  content: "\\";
}

/* line 309, basic/_styles.scss */
.icon-basic-server:before {
  content: "\e000";
}

/* line 312, basic/_styles.scss */
.icon-basic-server2:before {
  content: "\e001";
}

/* line 315, basic/_styles.scss */
.icon-basic-server-cloud:before {
  content: "\e002";
}

/* line 318, basic/_styles.scss */
.icon-basic-server-download:before {
  content: "\e003";
}

/* line 321, basic/_styles.scss */
.icon-basic-server-upload:before {
  content: "\e004";
}

/* line 324, basic/_styles.scss */
.icon-basic-settings:before {
  content: "\e005";
}

/* line 327, basic/_styles.scss */
.icon-basic-share:before {
  content: "\e006";
}

/* line 330, basic/_styles.scss */
.icon-basic-sheet:before {
  content: "\e007";
}

/* line 333, basic/_styles.scss */
.icon-basic-sheet-multiple:before {
  content: "\e008";
}

/* line 336, basic/_styles.scss */
.icon-basic-sheet-pen:before {
  content: "\e009";
}

/* line 339, basic/_styles.scss */
.icon-basic-sheet-pencil:before {
  content: "\e00a";
}

/* line 342, basic/_styles.scss */
.icon-basic-sheet-txt:before {
  content: "\e00b";
}

/* line 345, basic/_styles.scss */
.icon-basic-signs:before {
  content: "\e00c";
}

/* line 348, basic/_styles.scss */
.icon-basic-smartphone:before {
  content: "\e00d";
}

/* line 351, basic/_styles.scss */
.icon-basic-spades:before {
  content: "\e00e";
}

/* line 354, basic/_styles.scss */
.icon-basic-spread:before {
  content: "\e00f";
}

/* line 357, basic/_styles.scss */
.icon-basic-spread-bookmark:before {
  content: "\e010";
}

/* line 360, basic/_styles.scss */
.icon-basic-spread-text:before {
  content: "\e011";
}

/* line 363, basic/_styles.scss */
.icon-basic-spread-text-bookmark:before {
  content: "\e012";
}

/* line 366, basic/_styles.scss */
.icon-basic-star:before {
  content: "\e013";
}

/* line 369, basic/_styles.scss */
.icon-basic-tablet:before {
  content: "\e014";
}

/* line 372, basic/_styles.scss */
.icon-basic-target:before {
  content: "\e015";
}

/* line 375, basic/_styles.scss */
.icon-basic-todo:before {
  content: "\e016";
}

/* line 378, basic/_styles.scss */
.icon-basic-todo-pen:before {
  content: "\e017";
}

/* line 381, basic/_styles.scss */
.icon-basic-todo-pencil:before {
  content: "\e018";
}

/* line 384, basic/_styles.scss */
.icon-basic-todo-txt:before {
  content: "\e019";
}

/* line 387, basic/_styles.scss */
.icon-basic-todolist-pen:before {
  content: "\e01a";
}

/* line 390, basic/_styles.scss */
.icon-basic-todolist-pencil:before {
  content: "\e01b";
}

/* line 393, basic/_styles.scss */
.icon-basic-trashcan:before {
  content: "\e01c";
}

/* line 396, basic/_styles.scss */
.icon-basic-trashcan-full:before {
  content: "\e01d";
}

/* line 399, basic/_styles.scss */
.icon-basic-trashcan-refresh:before {
  content: "\e01e";
}

/* line 402, basic/_styles.scss */
.icon-basic-trashcan-remove:before {
  content: "\e01f";
}

/* line 405, basic/_styles.scss */
.icon-basic-upload:before {
  content: "\e020";
}

/* line 408, basic/_styles.scss */
.icon-basic-usb:before {
  content: "\e021";
}

/* line 411, basic/_styles.scss */
.icon-basic-video:before {
  content: "\e022";
}

/* line 414, basic/_styles.scss */
.icon-basic-watch:before {
  content: "\e023";
}

/* line 417, basic/_styles.scss */
.icon-basic-webpage:before {
  content: "\e024";
}

/* line 420, basic/_styles.scss */
.icon-basic-webpage-img-txt:before {
  content: "\e025";
}

/* line 423, basic/_styles.scss */
.icon-basic-webpage-multiple:before {
  content: "\e026";
}

/* line 426, basic/_styles.scss */
.icon-basic-webpage-txt:before {
  content: "\e027";
}

/* line 429, basic/_styles.scss */
.icon-basic-world:before {
  content: "\e028";
}

/* line 3, basic-elaboration/_styles.scss */
[class^="icon-basic-elaboration-"][data-icon]:before {
  font-family: "linea-basic-elaboration-10" !important;
  content: attr(data-icon);
  font-style: normal !important;
  font-weight: normal !important;
  font-variant: normal !important;
  text-transform: none !important;
  speak: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* line 17, basic-elaboration/_styles.scss */
[class^="icon-basic-elaboration-"]:before,
[class*=" icon-basic-elaboration-"]:before {
  font-family: "linea-basic-elaboration-10" !important;
  font-style: normal !important;
  font-weight: normal !important;
  font-variant: normal !important;
  text-transform: none !important;
  speak: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* line 29, basic-elaboration/_styles.scss */
.icon-basic-elaboration-bookmark-checck:before {
  content: "a";
}

/* line 32, basic-elaboration/_styles.scss */
.icon-basic-elaboration-bookmark-minus:before {
  content: "b";
}

/* line 35, basic-elaboration/_styles.scss */
.icon-basic-elaboration-bookmark-plus:before {
  content: "c";
}

/* line 38, basic-elaboration/_styles.scss */
.icon-basic-elaboration-bookmark-remove:before {
  content: "d";
}

/* line 41, basic-elaboration/_styles.scss */
.icon-basic-elaboration-briefcase-check:before {
  content: "e";
}

/* line 44, basic-elaboration/_styles.scss */
.icon-basic-elaboration-briefcase-download:before {
  content: "f";
}

/* line 47, basic-elaboration/_styles.scss */
.icon-basic-elaboration-briefcase-flagged:before {
  content: "g";
}

/* line 50, basic-elaboration/_styles.scss */
.icon-basic-elaboration-briefcase-minus:before {
  content: "h";
}

/* line 53, basic-elaboration/_styles.scss */
.icon-basic-elaboration-briefcase-plus:before {
  content: "i";
}

/* line 56, basic-elaboration/_styles.scss */
.icon-basic-elaboration-briefcase-refresh:before {
  content: "j";
}

/* line 59, basic-elaboration/_styles.scss */
.icon-basic-elaboration-briefcase-remove:before {
  content: "k";
}

/* line 62, basic-elaboration/_styles.scss */
.icon-basic-elaboration-briefcase-search:before {
  content: "l";
}

/* line 65, basic-elaboration/_styles.scss */
.icon-basic-elaboration-briefcase-star:before {
  content: "m";
}

/* line 68, basic-elaboration/_styles.scss */
.icon-basic-elaboration-briefcase-upload:before {
  content: "n";
}

/* line 71, basic-elaboration/_styles.scss */
.icon-basic-elaboration-browser-check:before {
  content: "o";
}

/* line 74, basic-elaboration/_styles.scss */
.icon-basic-elaboration-browser-download:before {
  content: "p";
}

/* line 77, basic-elaboration/_styles.scss */
.icon-basic-elaboration-browser-minus:before {
  content: "q";
}

/* line 80, basic-elaboration/_styles.scss */
.icon-basic-elaboration-browser-plus:before {
  content: "r";
}

/* line 83, basic-elaboration/_styles.scss */
.icon-basic-elaboration-browser-refresh:before {
  content: "s";
}

/* line 86, basic-elaboration/_styles.scss */
.icon-basic-elaboration-browser-remove:before {
  content: "t";
}

/* line 89, basic-elaboration/_styles.scss */
.icon-basic-elaboration-browser-search:before {
  content: "u";
}

/* line 92, basic-elaboration/_styles.scss */
.icon-basic-elaboration-browser-star:before {
  content: "v";
}

/* line 95, basic-elaboration/_styles.scss */
.icon-basic-elaboration-browser-upload:before {
  content: "w";
}

/* line 98, basic-elaboration/_styles.scss */
.icon-basic-elaboration-calendar-check:before {
  content: "x";
}

/* line 101, basic-elaboration/_styles.scss */
.icon-basic-elaboration-calendar-cloud:before {
  content: "y";
}

/* line 104, basic-elaboration/_styles.scss */
.icon-basic-elaboration-calendar-download:before {
  content: "z";
}

/* line 107, basic-elaboration/_styles.scss */
.icon-basic-elaboration-calendar-empty:before {
  content: "A";
}

/* line 110, basic-elaboration/_styles.scss */
.icon-basic-elaboration-calendar-flagged:before {
  content: "B";
}

/* line 113, basic-elaboration/_styles.scss */
.icon-basic-elaboration-calendar-heart:before {
  content: "C";
}

/* line 116, basic-elaboration/_styles.scss */
.icon-basic-elaboration-calendar-minus:before {
  content: "D";
}

/* line 119, basic-elaboration/_styles.scss */
.icon-basic-elaboration-calendar-next:before {
  content: "E";
}

/* line 122, basic-elaboration/_styles.scss */
.icon-basic-elaboration-calendar-noaccess:before {
  content: "F";
}

/* line 125, basic-elaboration/_styles.scss */
.icon-basic-elaboration-calendar-pencil:before {
  content: "G";
}

/* line 128, basic-elaboration/_styles.scss */
.icon-basic-elaboration-calendar-plus:before {
  content: "H";
}

/* line 131, basic-elaboration/_styles.scss */
.icon-basic-elaboration-calendar-previous:before {
  content: "I";
}

/* line 134, basic-elaboration/_styles.scss */
.icon-basic-elaboration-calendar-refresh:before {
  content: "J";
}

/* line 137, basic-elaboration/_styles.scss */
.icon-basic-elaboration-calendar-remove:before {
  content: "K";
}

/* line 140, basic-elaboration/_styles.scss */
.icon-basic-elaboration-calendar-search:before {
  content: "L";
}

/* line 143, basic-elaboration/_styles.scss */
.icon-basic-elaboration-calendar-star:before {
  content: "M";
}

/* line 146, basic-elaboration/_styles.scss */
.icon-basic-elaboration-calendar-upload:before {
  content: "N";
}

/* line 149, basic-elaboration/_styles.scss */
.icon-basic-elaboration-cloud-check:before {
  content: "O";
}

/* line 152, basic-elaboration/_styles.scss */
.icon-basic-elaboration-cloud-download:before {
  content: "P";
}

/* line 155, basic-elaboration/_styles.scss */
.icon-basic-elaboration-cloud-minus:before {
  content: "Q";
}

/* line 158, basic-elaboration/_styles.scss */
.icon-basic-elaboration-cloud-noaccess:before {
  content: "R";
}

/* line 161, basic-elaboration/_styles.scss */
.icon-basic-elaboration-cloud-plus:before {
  content: "S";
}

/* line 164, basic-elaboration/_styles.scss */
.icon-basic-elaboration-cloud-refresh:before {
  content: "T";
}

/* line 167, basic-elaboration/_styles.scss */
.icon-basic-elaboration-cloud-remove:before {
  content: "U";
}

/* line 170, basic-elaboration/_styles.scss */
.icon-basic-elaboration-cloud-search:before {
  content: "V";
}

/* line 173, basic-elaboration/_styles.scss */
.icon-basic-elaboration-cloud-upload:before {
  content: "W";
}

/* line 176, basic-elaboration/_styles.scss */
.icon-basic-elaboration-document-check:before {
  content: "X";
}

/* line 179, basic-elaboration/_styles.scss */
.icon-basic-elaboration-document-cloud:before {
  content: "Y";
}

/* line 182, basic-elaboration/_styles.scss */
.icon-basic-elaboration-document-download:before {
  content: "Z";
}

/* line 185, basic-elaboration/_styles.scss */
.icon-basic-elaboration-document-flagged:before {
  content: "0";
}

/* line 188, basic-elaboration/_styles.scss */
.icon-basic-elaboration-document-graph:before {
  content: "1";
}

/* line 191, basic-elaboration/_styles.scss */
.icon-basic-elaboration-document-heart:before {
  content: "2";
}

/* line 194, basic-elaboration/_styles.scss */
.icon-basic-elaboration-document-minus:before {
  content: "3";
}

/* line 197, basic-elaboration/_styles.scss */
.icon-basic-elaboration-document-next:before {
  content: "4";
}

/* line 200, basic-elaboration/_styles.scss */
.icon-basic-elaboration-document-noaccess:before {
  content: "5";
}

/* line 203, basic-elaboration/_styles.scss */
.icon-basic-elaboration-document-note:before {
  content: "6";
}

/* line 206, basic-elaboration/_styles.scss */
.icon-basic-elaboration-document-pencil:before {
  content: "7";
}

/* line 209, basic-elaboration/_styles.scss */
.icon-basic-elaboration-document-picture:before {
  content: "8";
}

/* line 212, basic-elaboration/_styles.scss */
.icon-basic-elaboration-document-plus:before {
  content: "9";
}

/* line 215, basic-elaboration/_styles.scss */
.icon-basic-elaboration-document-previous:before {
  content: "!";
}

/* line 218, basic-elaboration/_styles.scss */
.icon-basic-elaboration-document-refresh:before {
  content: "\"";
}

/* line 221, basic-elaboration/_styles.scss */
.icon-basic-elaboration-document-remove:before {
  content: "#";
}

/* line 224, basic-elaboration/_styles.scss */
.icon-basic-elaboration-document-search:before {
  content: "$";
}

/* line 227, basic-elaboration/_styles.scss */
.icon-basic-elaboration-document-star:before {
  content: "%";
}

/* line 230, basic-elaboration/_styles.scss */
.icon-basic-elaboration-document-upload:before {
  content: "&";
}

/* line 233, basic-elaboration/_styles.scss */
.icon-basic-elaboration-folder-check:before {
  content: "'";
}

/* line 236, basic-elaboration/_styles.scss */
.icon-basic-elaboration-folder-cloud:before {
  content: "(";
}

/* line 239, basic-elaboration/_styles.scss */
.icon-basic-elaboration-folder-document:before {
  content: ")";
}

/* line 242, basic-elaboration/_styles.scss */
.icon-basic-elaboration-folder-download:before {
  content: "*";
}

/* line 245, basic-elaboration/_styles.scss */
.icon-basic-elaboration-folder-flagged:before {
  content: "+";
}

/* line 248, basic-elaboration/_styles.scss */
.icon-basic-elaboration-folder-graph:before {
  content: ",";
}

/* line 251, basic-elaboration/_styles.scss */
.icon-basic-elaboration-folder-heart:before {
  content: "-";
}

/* line 254, basic-elaboration/_styles.scss */
.icon-basic-elaboration-folder-minus:before {
  content: ".";
}

/* line 257, basic-elaboration/_styles.scss */
.icon-basic-elaboration-folder-next:before {
  content: "/";
}

/* line 260, basic-elaboration/_styles.scss */
.icon-basic-elaboration-folder-noaccess:before {
  content: ":";
}

/* line 263, basic-elaboration/_styles.scss */
.icon-basic-elaboration-folder-note:before {
  content: ";";
}

/* line 266, basic-elaboration/_styles.scss */
.icon-basic-elaboration-folder-pencil:before {
  content: "<";
}

/* line 269, basic-elaboration/_styles.scss */
.icon-basic-elaboration-folder-picture:before {
  content: "=";
}

/* line 272, basic-elaboration/_styles.scss */
.icon-basic-elaboration-folder-plus:before {
  content: ">";
}

/* line 275, basic-elaboration/_styles.scss */
.icon-basic-elaboration-folder-previous:before {
  content: "?";
}

/* line 278, basic-elaboration/_styles.scss */
.icon-basic-elaboration-folder-refresh:before {
  content: "@";
}

/* line 281, basic-elaboration/_styles.scss */
.icon-basic-elaboration-folder-remove:before {
  content: "[";
}

/* line 284, basic-elaboration/_styles.scss */
.icon-basic-elaboration-folder-search:before {
  content: "]";
}

/* line 287, basic-elaboration/_styles.scss */
.icon-basic-elaboration-folder-star:before {
  content: "^";
}

/* line 290, basic-elaboration/_styles.scss */
.icon-basic-elaboration-folder-upload:before {
  content: "_";
}

/* line 293, basic-elaboration/_styles.scss */
.icon-basic-elaboration-mail-check:before {
  content: "`";
}

/* line 296, basic-elaboration/_styles.scss */
.icon-basic-elaboration-mail-cloud:before {
  content: "{";
}

/* line 299, basic-elaboration/_styles.scss */
.icon-basic-elaboration-mail-document:before {
  content: "|";
}

/* line 302, basic-elaboration/_styles.scss */
.icon-basic-elaboration-mail-download:before {
  content: "}";
}

/* line 305, basic-elaboration/_styles.scss */
.icon-basic-elaboration-mail-flagged:before {
  content: "~";
}

/* line 308, basic-elaboration/_styles.scss */
.icon-basic-elaboration-mail-heart:before {
  content: "\\";
}

/* line 311, basic-elaboration/_styles.scss */
.icon-basic-elaboration-mail-next:before {
  content: "\e000";
}

/* line 314, basic-elaboration/_styles.scss */
.icon-basic-elaboration-mail-noaccess:before {
  content: "\e001";
}

/* line 317, basic-elaboration/_styles.scss */
.icon-basic-elaboration-mail-note:before {
  content: "\e002";
}

/* line 320, basic-elaboration/_styles.scss */
.icon-basic-elaboration-mail-pencil:before {
  content: "\e003";
}

/* line 323, basic-elaboration/_styles.scss */
.icon-basic-elaboration-mail-picture:before {
  content: "\e004";
}

/* line 326, basic-elaboration/_styles.scss */
.icon-basic-elaboration-mail-previous:before {
  content: "\e005";
}

/* line 329, basic-elaboration/_styles.scss */
.icon-basic-elaboration-mail-refresh:before {
  content: "\e006";
}

/* line 332, basic-elaboration/_styles.scss */
.icon-basic-elaboration-mail-remove:before {
  content: "\e007";
}

/* line 335, basic-elaboration/_styles.scss */
.icon-basic-elaboration-mail-search:before {
  content: "\e008";
}

/* line 338, basic-elaboration/_styles.scss */
.icon-basic-elaboration-mail-star:before {
  content: "\e009";
}

/* line 341, basic-elaboration/_styles.scss */
.icon-basic-elaboration-mail-upload:before {
  content: "\e00a";
}

/* line 344, basic-elaboration/_styles.scss */
.icon-basic-elaboration-message-check:before {
  content: "\e00b";
}

/* line 347, basic-elaboration/_styles.scss */
.icon-basic-elaboration-message-dots:before {
  content: "\e00c";
}

/* line 350, basic-elaboration/_styles.scss */
.icon-basic-elaboration-message-happy:before {
  content: "\e00d";
}

/* line 353, basic-elaboration/_styles.scss */
.icon-basic-elaboration-message-heart:before {
  content: "\e00e";
}

/* line 356, basic-elaboration/_styles.scss */
.icon-basic-elaboration-message-minus:before {
  content: "\e00f";
}

/* line 359, basic-elaboration/_styles.scss */
.icon-basic-elaboration-message-note:before {
  content: "\e010";
}

/* line 362, basic-elaboration/_styles.scss */
.icon-basic-elaboration-message-plus:before {
  content: "\e011";
}

/* line 365, basic-elaboration/_styles.scss */
.icon-basic-elaboration-message-refresh:before {
  content: "\e012";
}

/* line 368, basic-elaboration/_styles.scss */
.icon-basic-elaboration-message-remove:before {
  content: "\e013";
}

/* line 371, basic-elaboration/_styles.scss */
.icon-basic-elaboration-message-sad:before {
  content: "\e014";
}

/* line 374, basic-elaboration/_styles.scss */
.icon-basic-elaboration-smartphone-cloud:before {
  content: "\e015";
}

/* line 377, basic-elaboration/_styles.scss */
.icon-basic-elaboration-smartphone-heart:before {
  content: "\e016";
}

/* line 380, basic-elaboration/_styles.scss */
.icon-basic-elaboration-smartphone-noaccess:before {
  content: "\e017";
}

/* line 383, basic-elaboration/_styles.scss */
.icon-basic-elaboration-smartphone-note:before {
  content: "\e018";
}

/* line 386, basic-elaboration/_styles.scss */
.icon-basic-elaboration-smartphone-pencil:before {
  content: "\e019";
}

/* line 389, basic-elaboration/_styles.scss */
.icon-basic-elaboration-smartphone-picture:before {
  content: "\e01a";
}

/* line 392, basic-elaboration/_styles.scss */
.icon-basic-elaboration-smartphone-refresh:before {
  content: "\e01b";
}

/* line 395, basic-elaboration/_styles.scss */
.icon-basic-elaboration-smartphone-search:before {
  content: "\e01c";
}

/* line 398, basic-elaboration/_styles.scss */
.icon-basic-elaboration-tablet-cloud:before {
  content: "\e01d";
}

/* line 401, basic-elaboration/_styles.scss */
.icon-basic-elaboration-tablet-heart:before {
  content: "\e01e";
}

/* line 404, basic-elaboration/_styles.scss */
.icon-basic-elaboration-tablet-noaccess:before {
  content: "\e01f";
}

/* line 407, basic-elaboration/_styles.scss */
.icon-basic-elaboration-tablet-note:before {
  content: "\e020";
}

/* line 410, basic-elaboration/_styles.scss */
.icon-basic-elaboration-tablet-pencil:before {
  content: "\e021";
}

/* line 413, basic-elaboration/_styles.scss */
.icon-basic-elaboration-tablet-picture:before {
  content: "\e022";
}

/* line 416, basic-elaboration/_styles.scss */
.icon-basic-elaboration-tablet-refresh:before {
  content: "\e023";
}

/* line 419, basic-elaboration/_styles.scss */
.icon-basic-elaboration-tablet-search:before {
  content: "\e024";
}

/* line 422, basic-elaboration/_styles.scss */
.icon-basic-elaboration-todolist-2:before {
  content: "\e025";
}

/* line 425, basic-elaboration/_styles.scss */
.icon-basic-elaboration-todolist-check:before {
  content: "\e026";
}

/* line 428, basic-elaboration/_styles.scss */
.icon-basic-elaboration-todolist-cloud:before {
  content: "\e027";
}

/* line 431, basic-elaboration/_styles.scss */
.icon-basic-elaboration-todolist-download:before {
  content: "\e028";
}

/* line 434, basic-elaboration/_styles.scss */
.icon-basic-elaboration-todolist-flagged:before {
  content: "\e029";
}

/* line 437, basic-elaboration/_styles.scss */
.icon-basic-elaboration-todolist-minus:before {
  content: "\e02a";
}

/* line 440, basic-elaboration/_styles.scss */
.icon-basic-elaboration-todolist-noaccess:before {
  content: "\e02b";
}

/* line 443, basic-elaboration/_styles.scss */
.icon-basic-elaboration-todolist-pencil:before {
  content: "\e02c";
}

/* line 446, basic-elaboration/_styles.scss */
.icon-basic-elaboration-todolist-plus:before {
  content: "\e02d";
}

/* line 449, basic-elaboration/_styles.scss */
.icon-basic-elaboration-todolist-refresh:before {
  content: "\e02e";
}

/* line 452, basic-elaboration/_styles.scss */
.icon-basic-elaboration-todolist-remove:before {
  content: "\e02f";
}

/* line 455, basic-elaboration/_styles.scss */
.icon-basic-elaboration-todolist-search:before {
  content: "\e030";
}

/* line 458, basic-elaboration/_styles.scss */
.icon-basic-elaboration-todolist-star:before {
  content: "\e031";
}

/* line 461, basic-elaboration/_styles.scss */
.icon-basic-elaboration-todolist-upload:before {
  content: "\e032";
}

/* line 3, ecommerce/_styles.scss */
[class^="icon-ecommerce-"][data-icon]:before,
[class*=" icon-ecommerce-"][data-icon]:before {
  font-family: "linea-ecommerce-10" !important;
  content: attr(data-icon);
  font-style: normal !important;
  font-weight: normal !important;
  font-variant: normal !important;
  text-transform: none !important;
  speak: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* line 17, ecommerce/_styles.scss */
[class^="icon-ecommerce-"]:before,
[class*=" icon-ecommerce-"]:before {
  font-family: "linea-ecommerce-10" !important;
  font-style: normal !important;
  font-weight: normal !important;
  font-variant: normal !important;
  text-transform: none !important;
  speak: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* line 29, ecommerce/_styles.scss */
.icon-ecommerce-bag:before {
  content: "a";
}

/* line 32, ecommerce/_styles.scss */
.icon-ecommerce-bag-check:before {
  content: "b";
}

/* line 35, ecommerce/_styles.scss */
.icon-ecommerce-bag-cloud:before {
  content: "c";
}

/* line 38, ecommerce/_styles.scss */
.icon-ecommerce-bag-download:before {
  content: "d";
}

/* line 41, ecommerce/_styles.scss */
.icon-ecommerce-bag-minus:before {
  content: "e";
}

/* line 44, ecommerce/_styles.scss */
.icon-ecommerce-bag-plus:before {
  content: "f";
}

/* line 47, ecommerce/_styles.scss */
.icon-ecommerce-bag-refresh:before {
  content: "g";
}

/* line 50, ecommerce/_styles.scss */
.icon-ecommerce-bag-remove:before {
  content: "h";
}

/* line 53, ecommerce/_styles.scss */
.icon-ecommerce-bag-search:before {
  content: "i";
}

/* line 56, ecommerce/_styles.scss */
.icon-ecommerce-bag-upload:before {
  content: "j";
}

/* line 59, ecommerce/_styles.scss */
.icon-ecommerce-banknote:before {
  content: "k";
}

/* line 62, ecommerce/_styles.scss */
.icon-ecommerce-banknotes:before {
  content: "l";
}

/* line 65, ecommerce/_styles.scss */
.icon-ecommerce-basket:before {
  content: "m";
}

/* line 68, ecommerce/_styles.scss */
.icon-ecommerce-basket-check:before {
  content: "n";
}

/* line 71, ecommerce/_styles.scss */
.icon-ecommerce-basket-cloud:before {
  content: "o";
}

/* line 74, ecommerce/_styles.scss */
.icon-ecommerce-basket-download:before {
  content: "p";
}

/* line 77, ecommerce/_styles.scss */
.icon-ecommerce-basket-minus:before {
  content: "q";
}

/* line 80, ecommerce/_styles.scss */
.icon-ecommerce-basket-plus:before {
  content: "r";
}

/* line 83, ecommerce/_styles.scss */
.icon-ecommerce-basket-refresh:before {
  content: "s";
}

/* line 86, ecommerce/_styles.scss */
.icon-ecommerce-basket-remove:before {
  content: "t";
}

/* line 89, ecommerce/_styles.scss */
.icon-ecommerce-basket-search:before {
  content: "u";
}

/* line 92, ecommerce/_styles.scss */
.icon-ecommerce-basket-upload:before {
  content: "v";
}

/* line 95, ecommerce/_styles.scss */
.icon-ecommerce-bath:before {
  content: "w";
}

/* line 98, ecommerce/_styles.scss */
.icon-ecommerce-cart:before {
  content: "x";
}

/* line 101, ecommerce/_styles.scss */
.icon-ecommerce-cart-check:before {
  content: "y";
}

/* line 104, ecommerce/_styles.scss */
.icon-ecommerce-cart-cloud:before {
  content: "z";
}

/* line 107, ecommerce/_styles.scss */
.icon-ecommerce-cart-content:before {
  content: "A";
}

/* line 110, ecommerce/_styles.scss */
.icon-ecommerce-cart-download:before {
  content: "B";
}

/* line 113, ecommerce/_styles.scss */
.icon-ecommerce-cart-minus:before {
  content: "C";
}

/* line 116, ecommerce/_styles.scss */
.icon-ecommerce-cart-plus:before {
  content: "D";
}

/* line 119, ecommerce/_styles.scss */
.icon-ecommerce-cart-refresh:before {
  content: "E";
}

/* line 122, ecommerce/_styles.scss */
.icon-ecommerce-cart-remove:before {
  content: "F";
}

/* line 125, ecommerce/_styles.scss */
.icon-ecommerce-cart-search:before {
  content: "G";
}

/* line 128, ecommerce/_styles.scss */
.icon-ecommerce-cart-upload:before {
  content: "H";
}

/* line 131, ecommerce/_styles.scss */
.icon-ecommerce-cent:before {
  content: "I";
}

/* line 134, ecommerce/_styles.scss */
.icon-ecommerce-colon:before {
  content: "J";
}

/* line 137, ecommerce/_styles.scss */
.icon-ecommerce-creditcard:before {
  content: "K";
}

/* line 140, ecommerce/_styles.scss */
.icon-ecommerce-diamond:before {
  content: "L";
}

/* line 143, ecommerce/_styles.scss */
.icon-ecommerce-dollar:before {
  content: "M";
}

/* line 146, ecommerce/_styles.scss */
.icon-ecommerce-euro:before {
  content: "N";
}

/* line 149, ecommerce/_styles.scss */
.icon-ecommerce-franc:before {
  content: "O";
}

/* line 152, ecommerce/_styles.scss */
.icon-ecommerce-gift:before {
  content: "P";
}

/* line 155, ecommerce/_styles.scss */
.icon-ecommerce-graph1:before {
  content: "Q";
}

/* line 158, ecommerce/_styles.scss */
.icon-ecommerce-graph2:before {
  content: "R";
}

/* line 161, ecommerce/_styles.scss */
.icon-ecommerce-graph3:before {
  content: "S";
}

/* line 164, ecommerce/_styles.scss */
.icon-ecommerce-graph-decrease:before {
  content: "T";
}

/* line 167, ecommerce/_styles.scss */
.icon-ecommerce-graph-increase:before {
  content: "U";
}

/* line 170, ecommerce/_styles.scss */
.icon-ecommerce-guarani:before {
  content: "V";
}

/* line 173, ecommerce/_styles.scss */
.icon-ecommerce-kips:before {
  content: "W";
}

/* line 176, ecommerce/_styles.scss */
.icon-ecommerce-lira:before {
  content: "X";
}

/* line 179, ecommerce/_styles.scss */
.icon-ecommerce-megaphone:before {
  content: "Y";
}

/* line 182, ecommerce/_styles.scss */
.icon-ecommerce-money:before {
  content: "Z";
}

/* line 185, ecommerce/_styles.scss */
.icon-ecommerce-naira:before {
  content: "0";
}

/* line 188, ecommerce/_styles.scss */
.icon-ecommerce-pesos:before {
  content: "1";
}

/* line 191, ecommerce/_styles.scss */
.icon-ecommerce-pound:before {
  content: "2";
}

/* line 194, ecommerce/_styles.scss */
.icon-ecommerce-receipt:before {
  content: "3";
}

/* line 197, ecommerce/_styles.scss */
.icon-ecommerce-receipt-bath:before {
  content: "4";
}

/* line 200, ecommerce/_styles.scss */
.icon-ecommerce-receipt-cent:before {
  content: "5";
}

/* line 203, ecommerce/_styles.scss */
.icon-ecommerce-receipt-dollar:before {
  content: "6";
}

/* line 206, ecommerce/_styles.scss */
.icon-ecommerce-receipt-euro:before {
  content: "7";
}

/* line 209, ecommerce/_styles.scss */
.icon-ecommerce-receipt-franc:before {
  content: "8";
}

/* line 212, ecommerce/_styles.scss */
.icon-ecommerce-receipt-guarani:before {
  content: "9";
}

/* line 215, ecommerce/_styles.scss */
.icon-ecommerce-receipt-kips:before {
  content: "!";
}

/* line 218, ecommerce/_styles.scss */
.icon-ecommerce-receipt-lira:before {
  content: "\"";
}

/* line 221, ecommerce/_styles.scss */
.icon-ecommerce-receipt-naira:before {
  content: "#";
}

/* line 224, ecommerce/_styles.scss */
.icon-ecommerce-receipt-pesos:before {
  content: "$";
}

/* line 227, ecommerce/_styles.scss */
.icon-ecommerce-receipt-pound:before {
  content: "%";
}

/* line 230, ecommerce/_styles.scss */
.icon-ecommerce-receipt-rublo:before {
  content: "&";
}

/* line 233, ecommerce/_styles.scss */
.icon-ecommerce-receipt-rupee:before {
  content: "'";
}

/* line 236, ecommerce/_styles.scss */
.icon-ecommerce-receipt-tugrik:before {
  content: "(";
}

/* line 239, ecommerce/_styles.scss */
.icon-ecommerce-receipt-won:before {
  content: ")";
}

/* line 242, ecommerce/_styles.scss */
.icon-ecommerce-receipt-yen:before {
  content: "*";
}

/* line 245, ecommerce/_styles.scss */
.icon-ecommerce-receipt-yen2:before {
  content: "+";
}

/* line 248, ecommerce/_styles.scss */
.icon-ecommerce-recept-colon:before {
  content: ",";
}

/* line 251, ecommerce/_styles.scss */
.icon-ecommerce-rublo:before {
  content: "-";
}

/* line 254, ecommerce/_styles.scss */
.icon-ecommerce-rupee:before {
  content: ".";
}

/* line 257, ecommerce/_styles.scss */
.icon-ecommerce-safe:before {
  content: "/";
}

/* line 260, ecommerce/_styles.scss */
.icon-ecommerce-sale:before {
  content: ":";
}

/* line 263, ecommerce/_styles.scss */
.icon-ecommerce-sales:before {
  content: ";";
}

/* line 266, ecommerce/_styles.scss */
.icon-ecommerce-ticket:before {
  content: "<";
}

/* line 269, ecommerce/_styles.scss */
.icon-ecommerce-tugriks:before {
  content: "=";
}

/* line 272, ecommerce/_styles.scss */
.icon-ecommerce-wallet:before {
  content: ">";
}

/* line 275, ecommerce/_styles.scss */
.icon-ecommerce-won:before {
  content: "?";
}

/* line 278, ecommerce/_styles.scss */
.icon-ecommerce-yen:before {
  content: "@";
}

/* line 281, ecommerce/_styles.scss */
.icon-ecommerce-yen2:before {
  content: "[";
}

/* line 3, music/_styles.scss */
[class^="icon-music-"][data-icon]:before,
[class*=" icon-music-"][data-icon]:before {
  font-family: "linea-music-10" !important;
  content: attr(data-icon);
  font-style: normal !important;
  font-weight: normal !important;
  font-variant: normal !important;
  text-transform: none !important;
  speak: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* line 17, music/_styles.scss */
[class^="icon-music-"]:before,
[class*=" icon-music-"]:before {
  font-family: "linea-music-10" !important;
  font-style: normal !important;
  font-weight: normal !important;
  font-variant: normal !important;
  text-transform: none !important;
  speak: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* line 29, music/_styles.scss */
.icon-music-beginning-button:before {
  content: "a";
}

/* line 32, music/_styles.scss */
.icon-music-bell:before {
  content: "b";
}

/* line 35, music/_styles.scss */
.icon-music-cd:before {
  content: "c";
}

/* line 38, music/_styles.scss */
.icon-music-diapason:before {
  content: "d";
}

/* line 41, music/_styles.scss */
.icon-music-eject-button:before {
  content: "e";
}

/* line 44, music/_styles.scss */
.icon-music-end-button:before {
  content: "f";
}

/* line 47, music/_styles.scss */
.icon-music-fastforward-button:before {
  content: "g";
}

/* line 50, music/_styles.scss */
.icon-music-headphones:before {
  content: "h";
}

/* line 53, music/_styles.scss */
.icon-music-ipod:before {
  content: "i";
}

/* line 56, music/_styles.scss */
.icon-music-loudspeaker:before {
  content: "j";
}

/* line 59, music/_styles.scss */
.icon-music-microphone:before {
  content: "k";
}

/* line 62, music/_styles.scss */
.icon-music-microphone-old:before {
  content: "l";
}

/* line 65, music/_styles.scss */
.icon-music-mixer:before {
  content: "m";
}

/* line 68, music/_styles.scss */
.icon-music-mute:before {
  content: "n";
}

/* line 71, music/_styles.scss */
.icon-music-note-multiple:before {
  content: "o";
}

/* line 74, music/_styles.scss */
.icon-music-note-single:before {
  content: "p";
}

/* line 77, music/_styles.scss */
.icon-music-pause-button:before {
  content: "q";
}

/* line 80, music/_styles.scss */
.icon-music-play-button:before {
  content: "r";
}

/* line 83, music/_styles.scss */
.icon-music-playlist:before {
  content: "s";
}

/* line 86, music/_styles.scss */
.icon-music-radio-ghettoblaster:before {
  content: "t";
}

/* line 89, music/_styles.scss */
.icon-music-radio-portable:before {
  content: "u";
}

/* line 92, music/_styles.scss */
.icon-music-record:before {
  content: "v";
}

/* line 95, music/_styles.scss */
.icon-music-recordplayer:before {
  content: "w";
}

/* line 98, music/_styles.scss */
.icon-music-repeat-button:before {
  content: "x";
}

/* line 101, music/_styles.scss */
.icon-music-rewind-button:before {
  content: "y";
}

/* line 104, music/_styles.scss */
.icon-music-shuffle-button:before {
  content: "z";
}

/* line 107, music/_styles.scss */
.icon-music-stop-button:before {
  content: "A";
}

/* line 110, music/_styles.scss */
.icon-music-tape:before {
  content: "B";
}

/* line 113, music/_styles.scss */
.icon-music-volume-down:before {
  content: "C";
}

/* line 116, music/_styles.scss */
.icon-music-volume-up:before {
  content: "D";
}

/* line 2, software/_styles.scss */
[class^="icon-software-"][data-icon]:before,
[class*=" icon-software-"][data-icon]:before {
  font-family: "linea-software-10" !important;
  content: attr(data-icon);
  font-style: normal !important;
  font-weight: normal !important;
  font-variant: normal !important;
  text-transform: none !important;
  speak: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* line 16, software/_styles.scss */
[class^="icon-software-"]:before,
[class*=" icon-software-"]:before {
  font-family: "linea-software-10" !important;
  font-style: normal !important;
  font-weight: normal !important;
  font-variant: normal !important;
  text-transform: none !important;
  speak: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* line 28, software/_styles.scss */
.icon-software-add-vectorpoint:before {
  content: "a";
}

/* line 31, software/_styles.scss */
.icon-software-box-oval:before {
  content: "b";
}

/* line 34, software/_styles.scss */
.icon-software-box-polygon:before {
  content: "c";
}

/* line 37, software/_styles.scss */
.icon-software-box-rectangle:before {
  content: "d";
}

/* line 40, software/_styles.scss */
.icon-software-box-roundedrectangle:before {
  content: "e";
}

/* line 43, software/_styles.scss */
.icon-software-character:before {
  content: "f";
}

/* line 46, software/_styles.scss */
.icon-software-crop:before {
  content: "g";
}

/* line 49, software/_styles.scss */
.icon-software-eyedropper:before {
  content: "h";
}

/* line 52, software/_styles.scss */
.icon-software-font-allcaps:before {
  content: "i";
}

/* line 55, software/_styles.scss */
.icon-software-font-baseline-shift:before {
  content: "j";
}

/* line 58, software/_styles.scss */
.icon-software-font-horizontal-scale:before {
  content: "k";
}

/* line 61, software/_styles.scss */
.icon-software-font-kerning:before {
  content: "l";
}

/* line 64, software/_styles.scss */
.icon-software-font-leading:before {
  content: "m";
}

/* line 67, software/_styles.scss */
.icon-software-font-size:before {
  content: "n";
}

/* line 70, software/_styles.scss */
.icon-software-font-smallcapital:before {
  content: "o";
}

/* line 73, software/_styles.scss */
.icon-software-font-smallcaps:before {
  content: "p";
}

/* line 76, software/_styles.scss */
.icon-software-font-strikethrough:before {
  content: "q";
}

/* line 79, software/_styles.scss */
.icon-software-font-tracking:before {
  content: "r";
}

/* line 82, software/_styles.scss */
.icon-software-font-underline:before {
  content: "s";
}

/* line 85, software/_styles.scss */
.icon-software-font-vertical-scale:before {
  content: "t";
}

/* line 88, software/_styles.scss */
.icon-software-horizontal-align-center:before {
  content: "u";
}

/* line 91, software/_styles.scss */
.icon-software-horizontal-align-left:before {
  content: "v";
}

/* line 94, software/_styles.scss */
.icon-software-horizontal-align-right:before {
  content: "w";
}

/* line 97, software/_styles.scss */
.icon-software-horizontal-distribute-center:before {
  content: "x";
}

/* line 100, software/_styles.scss */
.icon-software-horizontal-distribute-left:before {
  content: "y";
}

/* line 103, software/_styles.scss */
.icon-software-horizontal-distribute-right:before {
  content: "z";
}

/* line 106, software/_styles.scss */
.icon-software-indent-firstline:before {
  content: "A";
}

/* line 109, software/_styles.scss */
.icon-software-indent-left:before {
  content: "B";
}

/* line 112, software/_styles.scss */
.icon-software-indent-right:before {
  content: "C";
}

/* line 115, software/_styles.scss */
.icon-software-lasso:before {
  content: "D";
}

/* line 118, software/_styles.scss */
.icon-software-layers1:before {
  content: "E";
}

/* line 121, software/_styles.scss */
.icon-software-layers2:before {
  content: "F";
}

/* line 124, software/_styles.scss */
.icon-software-layout:before {
  content: "G";
}

/* line 127, software/_styles.scss */
.icon-software-layout-2columns:before {
  content: "H";
}

/* line 130, software/_styles.scss */
.icon-software-layout-3columns:before {
  content: "I";
}

/* line 133, software/_styles.scss */
.icon-software-layout-4boxes:before {
  content: "J";
}

/* line 136, software/_styles.scss */
.icon-software-layout-4columns:before {
  content: "K";
}

/* line 139, software/_styles.scss */
.icon-software-layout-4lines:before {
  content: "L";
}

/* line 142, software/_styles.scss */
.icon-software-layout-8boxes:before {
  content: "M";
}

/* line 145, software/_styles.scss */
.icon-software-layout-header:before {
  content: "N";
}

/* line 148, software/_styles.scss */
.icon-software-layout-header-2columns:before {
  content: "O";
}

/* line 151, software/_styles.scss */
.icon-software-layout-header-3columns:before {
  content: "P";
}

/* line 154, software/_styles.scss */
.icon-software-layout-header-4boxes:before {
  content: "Q";
}

/* line 157, software/_styles.scss */
.icon-software-layout-header-4columns:before {
  content: "R";
}

/* line 160, software/_styles.scss */
.icon-software-layout-header-complex:before {
  content: "S";
}

/* line 163, software/_styles.scss */
.icon-software-layout-header-complex2:before {
  content: "T";
}

/* line 166, software/_styles.scss */
.icon-software-layout-header-complex3:before {
  content: "U";
}

/* line 169, software/_styles.scss */
.icon-software-layout-header-complex4:before {
  content: "V";
}

/* line 172, software/_styles.scss */
.icon-software-layout-header-sideleft:before {
  content: "W";
}

/* line 175, software/_styles.scss */
.icon-software-layout-header-sideright:before {
  content: "X";
}

/* line 178, software/_styles.scss */
.icon-software-layout-sidebar-left:before {
  content: "Y";
}

/* line 181, software/_styles.scss */
.icon-software-layout-sidebar-right:before {
  content: "Z";
}

/* line 184, software/_styles.scss */
.icon-software-magnete:before {
  content: "0";
}

/* line 187, software/_styles.scss */
.icon-software-pages:before {
  content: "1";
}

/* line 190, software/_styles.scss */
.icon-software-paintbrush:before {
  content: "2";
}

/* line 193, software/_styles.scss */
.icon-software-paintbucket:before {
  content: "3";
}

/* line 196, software/_styles.scss */
.icon-software-paintroller:before {
  content: "4";
}

/* line 199, software/_styles.scss */
.icon-software-paragraph:before {
  content: "5";
}

/* line 202, software/_styles.scss */
.icon-software-paragraph-align-left:before {
  content: "6";
}

/* line 205, software/_styles.scss */
.icon-software-paragraph-align-right:before {
  content: "7";
}

/* line 208, software/_styles.scss */
.icon-software-paragraph-center:before {
  content: "8";
}

/* line 211, software/_styles.scss */
.icon-software-paragraph-justify-all:before {
  content: "9";
}

/* line 214, software/_styles.scss */
.icon-software-paragraph-justify-center:before {
  content: "!";
}

/* line 217, software/_styles.scss */
.icon-software-paragraph-justify-left:before {
  content: "\"";
}

/* line 220, software/_styles.scss */
.icon-software-paragraph-justify-right:before {
  content: "#";
}

/* line 223, software/_styles.scss */
.icon-software-paragraph-space-after:before {
  content: "$";
}

/* line 226, software/_styles.scss */
.icon-software-paragraph-space-before:before {
  content: "%";
}

/* line 229, software/_styles.scss */
.icon-software-pathfinder-exclude:before {
  content: "&";
}

/* line 232, software/_styles.scss */
.icon-software-pathfinder-intersect:before {
  content: "'";
}

/* line 235, software/_styles.scss */
.icon-software-pathfinder-subtract:before {
  content: "(";
}

/* line 238, software/_styles.scss */
.icon-software-pathfinder-unite:before {
  content: ")";
}

/* line 241, software/_styles.scss */
.icon-software-pen:before {
  content: "*";
}

/* line 244, software/_styles.scss */
.icon-software-pen-add:before {
  content: "+";
}

/* line 247, software/_styles.scss */
.icon-software-pen-remove:before {
  content: ",";
}

/* line 250, software/_styles.scss */
.icon-software-pencil:before {
  content: "-";
}

/* line 253, software/_styles.scss */
.icon-software-polygonallasso:before {
  content: ".";
}

/* line 256, software/_styles.scss */
.icon-software-reflect-horizontal:before {
  content: "/";
}

/* line 259, software/_styles.scss */
.icon-software-reflect-vertical:before {
  content: ":";
}

/* line 262, software/_styles.scss */
.icon-software-remove-vectorpoint:before {
  content: ";";
}

/* line 265, software/_styles.scss */
.icon-software-scale-expand:before {
  content: "<";
}

/* line 268, software/_styles.scss */
.icon-software-scale-reduce:before {
  content: "=";
}

/* line 271, software/_styles.scss */
.icon-software-selection-oval:before {
  content: ">";
}

/* line 274, software/_styles.scss */
.icon-software-selection-polygon:before {
  content: "?";
}

/* line 277, software/_styles.scss */
.icon-software-selection-rectangle:before {
  content: "@";
}

/* line 280, software/_styles.scss */
.icon-software-selection-roundedrectangle:before {
  content: "[";
}

/* line 283, software/_styles.scss */
.icon-software-shape-oval:before {
  content: "]";
}

/* line 286, software/_styles.scss */
.icon-software-shape-polygon:before {
  content: "^";
}

/* line 289, software/_styles.scss */
.icon-software-shape-rectangle:before {
  content: "_";
}

/* line 292, software/_styles.scss */
.icon-software-shape-roundedrectangle:before {
  content: "`";
}

/* line 295, software/_styles.scss */
.icon-software-slice:before {
  content: "{";
}

/* line 298, software/_styles.scss */
.icon-software-transform-bezier:before {
  content: "|";
}

/* line 301, software/_styles.scss */
.icon-software-vector-box:before {
  content: "}";
}

/* line 304, software/_styles.scss */
.icon-software-vector-composite:before {
  content: "~";
}

/* line 307, software/_styles.scss */
.icon-software-vector-line:before {
  content: "\\";
}

/* line 310, software/_styles.scss */
.icon-software-vertical-align-bottom:before {
  content: "\e000";
}

/* line 313, software/_styles.scss */
.icon-software-vertical-align-center:before {
  content: "\e001";
}

/* line 316, software/_styles.scss */
.icon-software-vertical-align-top:before {
  content: "\e002";
}

/* line 319, software/_styles.scss */
.icon-software-vertical-distribute-bottom:before {
  content: "\e003";
}

/* line 322, software/_styles.scss */
.icon-software-vertical-distribute-center:before {
  content: "\e004";
}

/* line 325, software/_styles.scss */
.icon-software-vertical-distribute-top:before {
  content: "\e005";
}

/* line 2, weather/_styles.scss */
[class^="icon-weather-"][data-icon]:before,
[class*=" icon-weather-"][data-icon]:before {
  font-family: "linea-weather-10" !important;
  content: attr(data-icon);
  font-style: normal !important;
  font-weight: normal !important;
  font-variant: normal !important;
  text-transform: none !important;
  speak: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* line 16, weather/_styles.scss */
[class^="icon-weather-"]:before,
[class*=" icon-weather-"]:before {
  font-family: "linea-weather-10" !important;
  font-style: normal !important;
  font-weight: normal !important;
  font-variant: normal !important;
  text-transform: none !important;
  speak: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* line 28, weather/_styles.scss */
.icon-weather-aquarius:before {
  content: "\e000";
}

/* line 31, weather/_styles.scss */
.icon-weather-aries:before {
  content: "\e001";
}

/* line 34, weather/_styles.scss */
.icon-weather-cancer:before {
  content: "\e002";
}

/* line 37, weather/_styles.scss */
.icon-weather-capricorn:before {
  content: "\e003";
}

/* line 40, weather/_styles.scss */
.icon-weather-cloud:before {
  content: "\e004";
}

/* line 43, weather/_styles.scss */
.icon-weather-cloud-drop:before {
  content: "\e005";
}

/* line 46, weather/_styles.scss */
.icon-weather-cloud-lightning:before {
  content: "\e006";
}

/* line 49, weather/_styles.scss */
.icon-weather-cloud-snowflake:before {
  content: "\e007";
}

/* line 52, weather/_styles.scss */
.icon-weather-downpour-fullmoon:before {
  content: "\e008";
}

/* line 55, weather/_styles.scss */
.icon-weather-downpour-halfmoon:before {
  content: "\e009";
}

/* line 58, weather/_styles.scss */
.icon-weather-downpour-sun:before {
  content: "\e00a";
}

/* line 61, weather/_styles.scss */
.icon-weather-drop:before {
  content: "\e00b";
}

/* line 64, weather/_styles.scss */
.icon-weather-first-quarter:before {
  content: "\e00c";
}

/* line 67, weather/_styles.scss */
.icon-weather-fog:before {
  content: "\e00d";
}

/* line 70, weather/_styles.scss */
.icon-weather-fog-fullmoon:before {
  content: "\e00e";
}

/* line 73, weather/_styles.scss */
.icon-weather-fog-halfmoon:before {
  content: "\e00f";
}

/* line 76, weather/_styles.scss */
.icon-weather-fog-sun:before {
  content: "\e010";
}

/* line 79, weather/_styles.scss */
.icon-weather-fullmoon:before {
  content: "\e011";
}

/* line 82, weather/_styles.scss */
.icon-weather-gemini:before {
  content: "\e012";
}

/* line 85, weather/_styles.scss */
.icon-weather-hail:before {
  content: "\e013";
}

/* line 88, weather/_styles.scss */
.icon-weather-hail-fullmoon:before {
  content: "\e014";
}

/* line 91, weather/_styles.scss */
.icon-weather-hail-halfmoon:before {
  content: "\e015";
}

/* line 94, weather/_styles.scss */
.icon-weather-hail-sun:before {
  content: "\e016";
}

/* line 97, weather/_styles.scss */
.icon-weather-last-quarter:before {
  content: "\e017";
}

/* line 100, weather/_styles.scss */
.icon-weather-leo:before {
  content: "\e018";
}

/* line 103, weather/_styles.scss */
.icon-weather-libra:before {
  content: "\e019";
}

/* line 106, weather/_styles.scss */
.icon-weather-lightning:before {
  content: "\e01a";
}

/* line 109, weather/_styles.scss */
.icon-weather-mistyrain:before {
  content: "\e01b";
}

/* line 112, weather/_styles.scss */
.icon-weather-mistyrain-fullmoon:before {
  content: "\e01c";
}

/* line 115, weather/_styles.scss */
.icon-weather-mistyrain-halfmoon:before {
  content: "\e01d";
}

/* line 118, weather/_styles.scss */
.icon-weather-mistyrain-sun:before {
  content: "\e01e";
}

/* line 121, weather/_styles.scss */
.icon-weather-moon:before {
  content: "\e01f";
}

/* line 124, weather/_styles.scss */
.icon-weather-moondown-full:before {
  content: "\e020";
}

/* line 127, weather/_styles.scss */
.icon-weather-moondown-half:before {
  content: "\e021";
}

/* line 130, weather/_styles.scss */
.icon-weather-moonset-full:before {
  content: "\e022";
}

/* line 133, weather/_styles.scss */
.icon-weather-moonset-half:before {
  content: "\e023";
}

/* line 136, weather/_styles.scss */
.icon-weather-move2:before {
  content: "\e024";
}

/* line 139, weather/_styles.scss */
.icon-weather-newmoon:before {
  content: "\e025";
}

/* line 142, weather/_styles.scss */
.icon-weather-pisces:before {
  content: "\e026";
}

/* line 145, weather/_styles.scss */
.icon-weather-rain:before {
  content: "\e027";
}

/* line 148, weather/_styles.scss */
.icon-weather-rain-fullmoon:before {
  content: "\e028";
}

/* line 151, weather/_styles.scss */
.icon-weather-rain-halfmoon:before {
  content: "\e029";
}

/* line 154, weather/_styles.scss */
.icon-weather-rain-sun:before {
  content: "\e02a";
}

/* line 157, weather/_styles.scss */
.icon-weather-sagittarius:before {
  content: "\e02b";
}

/* line 160, weather/_styles.scss */
.icon-weather-scorpio:before {
  content: "\e02c";
}

/* line 163, weather/_styles.scss */
.icon-weather-snow:before {
  content: "\e02d";
}

/* line 166, weather/_styles.scss */
.icon-weather-snow-fullmoon:before {
  content: "\e02e";
}

/* line 169, weather/_styles.scss */
.icon-weather-snow-halfmoon:before {
  content: "\e02f";
}

/* line 172, weather/_styles.scss */
.icon-weather-snow-sun:before {
  content: "\e030";
}

/* line 175, weather/_styles.scss */
.icon-weather-snowflake:before {
  content: "\e031";
}

/* line 178, weather/_styles.scss */
.icon-weather-star:before {
  content: "\e032";
}

/* line 181, weather/_styles.scss */
.icon-weather-storm-11:before {
  content: "\e033";
}

/* line 184, weather/_styles.scss */
.icon-weather-storm-32:before {
  content: "\e034";
}

/* line 187, weather/_styles.scss */
.icon-weather-storm-fullmoon:before {
  content: "\e035";
}

/* line 190, weather/_styles.scss */
.icon-weather-storm-halfmoon:before {
  content: "\e036";
}

/* line 193, weather/_styles.scss */
.icon-weather-storm-sun:before {
  content: "\e037";
}

/* line 196, weather/_styles.scss */
.icon-weather-sun:before {
  content: "\e038";
}

/* line 199, weather/_styles.scss */
.icon-weather-sundown:before {
  content: "\e039";
}

/* line 202, weather/_styles.scss */
.icon-weather-sunset:before {
  content: "\e03a";
}

/* line 205, weather/_styles.scss */
.icon-weather-taurus:before {
  content: "\e03b";
}

/* line 208, weather/_styles.scss */
.icon-weather-tempest:before {
  content: "\e03c";
}

/* line 211, weather/_styles.scss */
.icon-weather-tempest-fullmoon:before {
  content: "\e03d";
}

/* line 214, weather/_styles.scss */
.icon-weather-tempest-halfmoon:before {
  content: "\e03e";
}

/* line 217, weather/_styles.scss */
.icon-weather-tempest-sun:before {
  content: "\e03f";
}

/* line 220, weather/_styles.scss */
.icon-weather-variable-fullmoon:before {
  content: "\e040";
}

/* line 223, weather/_styles.scss */
.icon-weather-variable-halfmoon:before {
  content: "\e041";
}

/* line 226, weather/_styles.scss */
.icon-weather-variable-sun:before {
  content: "\e042";
}

/* line 229, weather/_styles.scss */
.icon-weather-virgo:before {
  content: "\e043";
}

/* line 232, weather/_styles.scss */
.icon-weather-waning-cresent:before {
  content: "\e044";
}

/* line 235, weather/_styles.scss */
.icon-weather-waning-gibbous:before {
  content: "\e045";
}

/* line 238, weather/_styles.scss */
.icon-weather-waxing-cresent:before {
  content: "\e046";
}

/* line 241, weather/_styles.scss */
.icon-weather-waxing-gibbous:before {
  content: "\e047";
}

/* line 244, weather/_styles.scss */
.icon-weather-wind:before {
  content: "\e048";
}

/* line 247, weather/_styles.scss */
.icon-weather-wind-e:before {
  content: "\e049";
}

/* line 250, weather/_styles.scss */
.icon-weather-wind-fullmoon:before {
  content: "\e04a";
}

/* line 253, weather/_styles.scss */
.icon-weather-wind-halfmoon:before {
  content: "\e04b";
}

/* line 256, weather/_styles.scss */
.icon-weather-wind-n:before {
  content: "\e04c";
}

/* line 259, weather/_styles.scss */
.icon-weather-wind-ne:before {
  content: "\e04d";
}

/* line 262, weather/_styles.scss */
.icon-weather-wind-nw:before {
  content: "\e04e";
}

/* line 265, weather/_styles.scss */
.icon-weather-wind-s:before {
  content: "\e04f";
}

/* line 268, weather/_styles.scss */
.icon-weather-wind-se:before {
  content: "\e050";
}

/* line 271, weather/_styles.scss */
.icon-weather-wind-sun:before {
  content: "\e051";
}

/* line 274, weather/_styles.scss */
.icon-weather-wind-sw:before {
  content: "\e052";
}

/* line 277, weather/_styles.scss */
.icon-weather-wind-w:before {
  content: "\e053";
}

/* line 280, weather/_styles.scss */
.icon-weather-windgust:before {
  content: "\e054";
}
