var ASCDP=window.ASCDP||{};ASCDP.adS=ASCDP.adS||{},ASCDP.adS.isChildOfActiveOverlay=function(a){var i,l=ASCDP.adS,e=ASCDP.pageSet;return a&&0<e.overlayArr.length&&(0<(e=document.querySelectorAll(e.overlayArr.join())).length&&e.forEach(function(e){var r=e.currentStyle||window.getComputedStyle(e),t=l.calcY(e,e.offsetTop);isNaN(t)||"none"===r.display||"hidden"===r.visibility||(l.overlayActive=!0,l.activeOverlay=e),i=e.querySelector("#"+a.id)})),i};