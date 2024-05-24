html {
  color: #222;
  font-size: 1em;
  line-height: 1.4;
}
::-moz-selection {
  background: #b3d4fc;
  text-shadow: none;
}
::selection {
  background: #b3d4fc;
  text-shadow: none;
}
/*
 * A better looking default horizontal rule
 */
hr {
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid #ccc;
  margin: 1em 0;
  padding: 0;
}
/*
 * Remove the gap between audio, canvas, iframes,
 * images, videos and the bottom of their containers:
 * https://github.com/h5bp/html5-boilerplate/issues/440
 */
audio,
canvas,
iframe,
img,
svg,
video {
  vertical-align: middle;
}
fieldset {
  border: 0;
  margin: 0;
  padding: 0;
}
/*
 * Allow only vertical resizing of textareas.
 */
textarea {
  resize: vertical;
}
/* ==========================================================================
   Browser Upgrade Prompt
   ========================================================================== */
.browserupgrade {
  margin: 0.2em 0;
  background: #ccc;
  color: #000;
  padding: 0.2em 0;
}
body {
  background: #fff;
  font-size: 24px;
  line-height: 1.20833333;
  color: #434343;
  font-family: Arial, "Helvetica CY", "Nimbus Sans L", sans-serif;
}
:first-child {
  margin-top: 0;
}
#wrap {
  padding: 65px 0 0;
  min-width: 1000px;
  width: 100%;
  position: relative;
  z-index: 1;
}
/* clearfix */
@media (min-width: 1260px) {
  .only-medium {
    display: none !important;
  }
}
@media (max-width: 1600px) {
  .only-large {
    display: none !important;
  }
}
@media (max-width: 1259px) {
  .not-medium {
    display: none !important;
  }
}
@media (min-width: 1601px) {
  .not-large {
    display: none !important;
  }
}
/* ICONS */
.icon-search {
  display: inline-block;
  width: 18px;
  height: 18px;
  background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNy4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMjMuODA4cHgiIGhlaWdodD0iMjMuODUxcHgiIHZpZXdCb3g9IjAgMCAyMy44MDggMjMuODUxIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyMy44MDggMjMuODUxIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIGZpbGw9IiM1REI3RTciIGQ9Ik0yMy4zODUsMjEuNzYzbC02LjU5NC02LjU0M2MxLjI2Mi0xLjYwMSwyLjAyMS0zLjYxNywyLjAyMS01LjgxNEMxOC44MTMsNC4yMTEsMTQuNjAxLDAsOS40MDYsMA0KCVMwLDQuMjExLDAsOS40MDZzNC4yMTEsOS40MDYsOS40MDYsOS40MDZjMi4xMzcsMCw0LjEwMS0wLjcyMSw1LjY4MS0xLjkyMmw2LjY3MSw2LjYyMWwwLjAxMS0wLjAxMQ0KCWMwLjIxNiwwLjIxNiwwLjUxNSwwLjM1LDAuODQ0LDAuMzVjMC42NTksMCwxLjE5NC0wLjUzNSwxLjE5NC0xLjE5NEMyMy44MDgsMjIuMjk1LDIzLjYzOSwyMS45ODIsMjMuMzg1LDIxLjc2M3ogTTkuNDA2LDE2LjM3NQ0KCWMtMy44NDksMC02Ljk2OS0zLjEyLTYuOTY5LTYuOTY5czMuMTItNi45NjksNi45NjktNi45NjlzNi45NjksMy4xMiw2Ljk2OSw2Ljk2OVMxMy4yNTUsMTYuMzc1LDkuNDA2LDE2LjM3NXoiLz4NCjwvc3ZnPg0K) 0 0 / auto 100% no-repeat;
}
.toggle-search .icon-search::before {
	display: none;
}
.icon-fb {
  display: inline-block;
  width: 30px;
  height: 30px;
  vertical-align: middle;
  background: url(data:image/svg+xml;base64,PHN2ZyBiYXNlUHJvZmlsZT0idGlueSIgaGVpZ2h0PSIyNCIgdmVyc2lvbj0iMS4yIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTMgMTBoM3YzaC0zdjdoLTN2LTdIN3YtM2gzVjguNzQ1YzAtMS4xOS4zNzQtMi42OSAxLjExOC0zLjUxMkMxMS44NjIgNC40MSAxMi43OSA0IDEzLjkwNCA0SDE2djNoLTIuMWMtLjQ5OCAwLS45LjQwMi0uOS45VjEweiIvPjwvc3ZnPg==) 50% 50% / auto 38px no-repeat;
}
.icon-tw {
  display: inline-block;
  width: 30px;
  height: 30px;
  vertical-align: middle;
  background: url(data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHN0eWxlPi5zdDB7ZmlsbDojZmZmO308L3N0eWxlPjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xOTYuOSA0NjJDMzE3LjIgNDYyIDM4MyAzNjIuMyAzODMgMjc1LjljMC0yLjggMC01LjYtLjItOC41IDEyLjgtOS4zIDIzLjgtMjAuNyAzMi42LTMzLjktMTEuOSA1LjMtMjQuNiA4LjgtMzcuNiAxMC4zIDEzLjctOC4yIDIzLjktMjEgMjguOC0zNi4yLTEyLjggNy42LTI2LjkgMTMtNDEuNSAxNS45LTI0LjgtMjYuMy02Ni4yLTI3LjYtOTIuNS0yLjgtMTcgMTYtMjQuMiAzOS44LTE4LjkgNjIuNS01Mi42LTIuNi0xMDEuNi0yNy41LTEzNC44LTY4LjMtMTcuNCAyOS45LTguNSA2OC4xIDIwLjIgODcuMy0xMC40LS4zLTIwLjYtMy4xLTI5LjctOC4ydi44YzAgMzEuMSAyMiA1Ny45IDUyLjUgNjQuMS05LjYgMi42LTE5LjcgMy0yOS41IDEuMSA4LjYgMjYuNiAzMy4xIDQ0LjkgNjEuMSA0NS40LTIzLjIgMTguMi01MS44IDI4LjEtODEuMiAyOC4xLTUuMiAwLTEwLjQtLjMtMTUuNi0uOSAyOS44IDE5LjIgNjQuNiAyOS40IDEwMC4yIDI5LjQiIGlkPSJYTUxJRF8yMl8iLz48L3N2Zz4=) 50% 120% / auto 38px no-repeat;
}
.icon-vk {
  display: inline-block;
  width: 30px;
  height: 30px;
  vertical-align: middle;
  background: url(data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjMwIiB2aWV3Qm94PSIwIDAgMzAgMzAiIHdpZHRoPSIzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNiAyNGMxIDAgMS0xLjQ0IDEtMiAwLTEgMS0yIDItMnMyLjcxNSAxLjcxNSA0IDNjMSAxIDEgMSAyIDFoM3MyLS4wNzYgMi0yYzAtLjYyNS0uNjg1LTEuNjg1LTMtNC0yLTItMy4wMjYtLjk2NyAwLTUgMS44NDMtMi40NTYgMy4xODQtNC42OCAyLjk1NC01LjMyMy0uMjItLjYxMy01LjM0Ni0xLjU5LTUuOTU0LS42NzctMiAzLTIuMzY3IDMuNzM1LTMgNS0xIDItMS4xIDMtMiAzLS45MSAwLTEtMS45NC0xLTMgMC0zLjMwNi40OC01LjY0NC0xLTZoLTNjLTEuNjEgMC0zIDEtMyAxcy0xLjI0Ljk2OC0xIDFjLjI5OC4wNCAyLS40MTQgMiAxdjJzLjAxIDQtMSA0Yy0xIDAtMy00LTUtNy0uNzg1LTEuMTc3LTEtMS0yLTEtMS4wNzIgMC0yIC4wNDItMyAuMDQyUy0uMTI4IDcuNjggMCA4YzIgNSAzLjQzNyA4LjE0IDcuMjM3IDEyLjA5NkMxMC43MjIgMjMuNzI2IDEzLjA1IDIzLjkxOCAxNSAyNGMuNS4wMiAwIDAgMSAweiIgZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+) 50% 50% / auto 28px no-repeat;
}
.icon-ok {
  display: inline-block;
  width: 30px;
  height: 30px;
  vertical-align: middle;
  background: url(data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjE3OTIiIHZpZXdCb3g9IjAgMCAxNzkyIDE3OTIiIHdpZHRoPSIxNzkyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik04OTYgOTA3cS0xODggMC0zMjEtMTMzVDQ0MiA0NTRxMC0xODggMTMzLTMyMVQ4OTYgMHQzMjEgMTMzIDEzMyAzMjFxMCAxODctMTMzIDMyMFQ4OTYgOTA3em0wLTY3N3EtOTIgMC0xNTcuNSA2NS41VDY3MyA0NTRxMCA5MiA2NS41IDE1Ny41VDg5NiA2Nzd0MTU3LjUtNjUuNVQxMTE5IDQ1NHEwLTkzLTY1LjUtMTU4LjVUODk2IDIzMHptNTIzIDczMnExMyAyNyAxNSA0OS41dC00LjUgNDAuNS0yNi41IDM4LjUtNDIuNSAzNy02MS41IDQxLjVxLTExNSA3My0zMTUgOTRsNzMgNzIgMjY3IDI2N3EzMCAzMSAzMCA3NHQtMzAgNzNsLTEyIDEzcS0zMSAzMC03NCAzMHQtNzQtMzBxLTY3LTY4LTI2Ny0yNjhsLTI2NyAyNjhxLTMxIDMwLTc0IDMwdC03My0zMGwtMTItMTNxLTMxLTMwLTMxLTczdDMxLTc0bDI2Ny0yNjcgNzItNzJxLTIwMy0yMS0zMTctOTQtMzktMjUtNjEuNS00MS41dC00Mi41LTM3LTI2LjUtMzguNS00LjUtNDAuNSAxNS00OS41cTEwLTIwIDI4LTM1dDQyLTIyIDU2IDIgNjUgMzVxNSA0IDE1IDExdDQzIDI0LjUgNjkgMzAuNSA5MiAyNCAxMTMgMTFxOTEgMCAxNzQtMjUuNXQxMjAtNTAuNWwzOC0yNXEzMy0yNiA2NS0zNXQ1Ni0yIDQyIDIyIDI4IDM1eiIvPjwvc3ZnPg==) 50% 50% / auto 26px no-repeat;
}
.icon-exclamation {
  display: inline-block;
  width: 1px;
  height: 1em;
  vertical-align: middle;
  position: relative;
}
.icon-exclamation:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  margin: auto 0;
  width: 21px;
  height: 18px;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAASCAYAAAC0EpUuAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzE2MzVCQkUyMTQ3MTFFN0EwQ0JBREM2OTE3QUI5MDgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzE2MzVCQkYyMTQ3MTFFN0EwQ0JBREM2OTE3QUI5MDgiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDMTYzNUJCQzIxNDcxMUU3QTBDQkFEQzY5MTdBQjkwOCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDMTYzNUJCRDIxNDcxMUU3QTBDQkFEQzY5MTdBQjkwOCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PtYDskAAAAERSURBVHjaYmSY9YmBSKAHxN+B+DYhhSxEGqgKxKeA+D0QawLxB3yKmYg0dCIQswOxBBA3ElJMjKEBQOyJxM8CYh1KDOUA4j4o+wYQP4EG2TQgZiTX0EogVoSyo4A4H8q2BeJIcgwFGVaGxP8DxD+R+F1AzEeqoROg3scFpIG4jhRDvYHYj4hIzANiDWIMBSWdfiKTGis00ggaWgpN7MQCRyAOxWeoHDTGsQFuXBEDBD1AzIPLUFCa5MKhcQsQz8YhB3JMNTZD3YA4GI83PxPI84WwYGNCCvCJBMIuBohr8ciDIngycilVjC1poIGNUI34gDuorGAElqegCHiBHNAUgmsgl/4A4pVALE8lQ48DBBgA0e4mjOofxVYAAAAASUVORK5CYII=) 50% 50% / auto 18px no-repeat;
}
.icon-hasvideo {
  display: inline-block;
  width: 1px;
  height: 1em;
  vertical-align: middle;
  position: relative;
}
.icon-hasvideo:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  margin: auto 0;
  width: 18px;
  height: 13px;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAANCAIAAAArLKlOAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzU0QUVGMzMyMTRGMTFFN0JEMTZFRDQxMkE1NjhBMTAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzU0QUVGMzQyMTRGMTFFN0JEMTZFRDQxMkE1NjhBMTAiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NTRBRUYzMTIxNEYxMUU3QkQxNkVENDEyQTU2OEExMCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NTRBRUYzMjIxNEYxMUU3QkQxNkVENDEyQTU2OEExMCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PvybmbMAAACISURBVHjaYmSY9YmBdMAExP9TeYnXAFHMSDXbFjhxMAgzk2wbRGLbkz/pF38/efaHNL95ybA89uY8Echlq8gCNJxY25AB0GbvPT8Yfv8nNiRPv/nrsPe7947vcD0QxSwgG2d/xtSw/emftAtY/AZRjMW2hXd/M6775rXtO9bwoHa80TCVAAQYADIMS/YAubV/AAAAAElFTkSuQmCC) 50% 50% / auto 18px no-repeat;
}
.icon-video {
  display: inline-block;
  width: 43px;
  height: 22px;
  vertical-align: middle;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAWCAIAAAAqztkuAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MzE5Njk5MTUyMTUxMTFFN0JFOTJFNzkyOThGQUNCMjYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MzE5Njk5MTYyMTUxMTFFN0JFOTJFNzkyOThGQUNCMjYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDozMTk2OTkxMzIxNTExMUU3QkU5MkU3OTI5OEZBQ0IyNiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozMTk2OTkxNDIxNTExMUU3QkU5MkU3OTI5OEZBQ0IyNiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pr/8Jc4AAAD+SURBVHjaYmSY9YmB9oCJgS5gBFqz35dLV5aF5tY4SDBf8uC8EMztocJCnv9J0KQvxLTdkfNeOHecNisDCyNt40aRh2mhFcerSO4iIzYGdkbaJgFRDsZeY/bPUdxtluwM3Ey0TWk8LIyVOmy/Irhn2nMwCDDRNkGzMjGkqbH+C+Ve48bJIM5M83zDiDumWCg3/fc/hgV3f6dd/MXw/h9NrPny5/+UG78rL/1m+PoPv0oyrXnz43/n1V89V38z/PxPjHqSrXnw5V/DpV8Lb/5h+POfeF0kWHPp/b+Kiz+33/3D8I9k3xNlzcEXf/Mv/rz46C/5iXC09hy01gAEGAAWt0x8S7w5rgAAAABJRU5ErkJggg==) 50% 50% / auto 22px no-repeat;
}
._arrow._down {
	color: #fb3131;
}
._arrow._up {
  color: #3bfb31;
}
.media-box {
  height: 0;
  padding: 0 0 56.25%;
  overflow: hidden;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  margin: 0;
  position: relative;
}
.media-box img {
  opacity: 0;
  max-width: 100%;
}
.media-box .icon-video {
  position: absolute;
  right: 10px;
  bottom: 10px;
}
/* HEADER */
.header {
  position: fixed;
  border-top: solid 8px #fff;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background: #4fb9f5;
  /*background: #4fb9f5 url(/static/img/ng/utro_NY_68.jpg) repeat-x;*/
  height: 48px;
  padding-left: 20px;
  min-width: 1000px;
  box-sizing: border-box;
  box-shadow: 0 0 0 8px #fff;
}
.header__logo {
  float: left;
  text-decoration: none;
  font-size: 0;
  line-height: 40px;
  /*background: url(/static/img/logo_ytronews.png) 0 12px / contain no-repeat;*/
  background: url(/static/img/logo-1.svg) 0 12px / contain no-repeat;
}
.header__logo img {
  height: 26px;
  width: auto;
  visibility: hidden;
}
.header__currency {
  float: right;
  list-style: none;
  padding: 0;
  margin: 0;
  height: 40px;
  font-family: 'Boblic', sans-serif;
  display: table;
  text-transform: uppercase;
}
.header__currency img {
	height: 36px;
	margin: 2px 10px 0px 0px;
}
.header__currency li {
  display: table-cell;
  line-height: 40px;
  font-size: 16px;
  padding: 0 6px;
}
.header__currency-name {
  margin-right: 2px;
}
.header__currency-value {
  color: #fff;
}
.header__search {
  float: right;
  width: 40px;
  height: 40px;
  position: relative;
  z-index: 5;
}
.header__search form {
  height: 36px;
  width: 0;
  overflow: hidden;
  background: #fff;
  margin: 2px 0 0;
  position: absolute;
  top: 0;
  right: 38px;
  transition: width .25s;
}
.page__search form {
  width: 100%;
  height: 36px;
  margin: 0 0 20px 0;
  position: relative;
}
.header__search form input, .page__search form input {
  width: 100%;
  height: 100%;
  border: 0;
  padding: 0 20px;
  line-height: 36px;
  box-sizing: border-box;
  border-right: solid 1px #0099f1;
  color: #0099f1;
  font-size: 16px;
  font-family: 'Boblic', sans-serif;
  outline: 0;
}
.page__search form input {
  border: solid 1px #dadada;
  width: 100%;	
  color: #474747;
  font-size: 18px;
}
.page__search .news-block__title {
	font-size: 18px;
	color: #474747;
	text-transform: none;
	border-bottom: 0px none;
}
.page__search .news-block__title strong {
	color: #0099f1;
}
.page__search form input[type=submit] {
	width: 10%;
    position: absolute;
    float: right;
    right: 0px;
    top: 0px;
    background-color: #4fb9f5;
    color: #fff;
}
.header__search form input:placeholder, .page__search form input[type=text]:placeholder {
  color: #0099f1;
}
.header__search form input::-webkit-input-placeholder, .page__search form input[type=text]::-webkit-input-placeholder {
  color: #0099f1;
}
.header__search form input::-moz-placeholder, .page__search form input[type=text]::-moz-placeholder {
  color: #0099f1;
}
.header__search form input:-ms-input-placeholder, .page__search form input[type=text]:-ms-input-placeholder {
  color: #0099f1;
}
.header__search form input::placeholder, .page__search form input[type=text]::placeholder {
  color: #0099f1;
}
.header__search.show-form form {
  width: 220px;
}
.header__drop-navi {
  position: absolute;
  right: 0;
  top: 100%;
  width: 200px;
  background: #0099f1;
  color: #fff;
  padding: 10px;
  font-size: 18px;
  font-family: 'Boblic', sans-serif;
  z-index: 99;
  display: none;
}
.header__drop-navi ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.header__drop-navi ul a {
  color: #fff;
  padding: 6px 0;
  display: block;
  text-decoration: none;
}
.header__drop-navi ul a:hover {
  text-decoration: underline;
}
.header.show-drop-navi {
	overflow-y: initial;
}
.header.show-drop-navi .header__drop-navi {
  display: block;
}
.header.show-drop-navi .toggle-drop-navi {
  background: #0099f1;
}
.toggle-drop-navi {
  cursor: pointer;
  float: right;
  padding: 0 12px;
  height: 40px;
  border: 0;
  background: rgba(0, 153, 241, 0);
  margin: 0;
  outline: 0;
}
.toggle-drop-navi i {
  display: block;
  width: 19px;
  height: 2px;
  background: #fff;
}
.toggle-drop-navi i + i {
  margin-top: 5px;
}
.toggle-search {
  float: right;
  width: 36px;
  height: 36px;
  border: 0;
  background: #fff;
  margin: 2px 2px;
  outline: 0;
}
/* PRIMARY-NAV */
.primary-nav {
  float: left;
  list-style: none;
  padding: 0;
  margin: 0 -20px 0 12px;
  display: table;
  white-space: nowrap;
  border-left: solid 1px rgba(255, 255, 255, 0.5);
  height: 40px;
  font-size: 16px;
  text-transform: uppercase;
  font-family: 'Boblic', sans-serif;
  display: inline-block;
  overflow: hidden;
}
.primary-nav > li {
  border-right: solid 1px rgba(255, 255, 255, 0.5);
  display: table-cell;
  vertical-align: middle;
}
.primary-nav > li > a {
  display: inline-block;
  color: #fff;
  text-decoration: none;
  padding: 0 15px;
  line-height: 40px;
  background: rgba(0, 153, 241, 0);
  transition: all .25s;
}
.primary-nav > li > a:hover {
  background: rgba(0, 153, 241, 0.33);
  text-decoration: underline;
}
.primary-nav > li.active a {
  background: rgba(0, 153, 241, 0.33);
  text-decoration: underline;
}
/* ARTICLE */
.js-mediator-article .article__font2 {
  font-size: 48px;
  font-weight: bold;
  color: #000;
  text-transform: uppercase;
  margin: 1em 0;
}
.js-mediator-article .article__font1 {
  font-weight: bold;
  color: #000;
  text-transform: uppercase;
  font-size: 24px;
}
.js-mediator-article .article__font-1 {
  font-size: 14px;
}
.js-mediator-article .article__font-2 {
  font-size: 12px;
}
.js-mediator-article .article__greybg { background-color: #eee; }
.js-mediator-article .article__quote {
  font-style: italic;
  color: #0099f1;
  border-top: 2px solid;
  border-bottom: 2px solid;
  border-color: rgba(67, 67, 67, 0.2);
  padding: 30px 65px;
  position: relative;
}
.js-mediator-article .article__quote:before {
	content: "\201C";
	display: inline;
	position: absolute;
	top: -20px;
	left: 15px;
	font-size: 60px;
	padding: 0px 10px 0px 0px;
	background-color: #fff;
}
.js-mediator-article ._block {
  position: relative;
  width: 40%;
  float: right;
  margin: 20px 0 20px 20px;
}
.js-mediator-article ._block:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url(../img/shadow-article-top.png) 0 0 no-repeat;
  /*transform: rotateZ(-90deg);*/
  z-index: -1;
}
.js-mediator-article ._block .news-block{
  z-index: 1;
}
.js-mediator-article ._block .news-block .news-block__title {
  padding: 20px 20px 0 20px;
  margin: 0;
  border: 0;
}
.js-mediator-article .theme-news__list {
  list-style: none;
  padding: 20px;
  margin: 0 auto;
  max-width: 300px;
  font-family: 'Boblic', sans-serif;
}
.js-mediator-article .theme-news__list li {
  overflow: hidden;
  border-top: solid 1px #e3e3e3;
  padding: 16px 0;
}
.js-mediator-article .theme-news__list li .theme-news__list-title-prea {
  text-transform: uppercase;
  font-size: 20px;
  color: rgba(67, 67, 67, 0.5);
  font-weight: 400;
  padding: 20px 20px 0 0;
  margin: 0;
  font-family: 'Boblic', sans-serif;
}
.js-mediator-article .theme-news__list li:first-child {
  margin-top: 0;
}
.js-mediator-article .theme-news__list li:last-child {
  padding-bottom: 0;
}
.js-mediator-article .theme-news__list-item img {
  width: 80px;
  height: auto;
  margin: 0 15px 0 0;
  float: left;
}
.js-mediator-article .theme-news__list-item a {
  color: #626262;
  text-decoration: none;
  transition: all .25s;
}
.js-mediator-article .theme-news__list-item a:hover .theme-news__list-title {
  color: #0099f1;
}
.js-mediator-article .theme-news__list-title {
  display: block;
  overflow: hidden;
  font-size: 18px;
  line-height: 0.88888889;
  color: #626262;
  transition: color .25s;
}
 .video__container {
 position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 56.25%;
    clear: both;
}
 .video__container iframe {
 position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
.head__adv {
	max-width: 1360px;
	margin: 0px auto 30px auto;
}
.head__adv>div>div {
	margin: 0 auto;
}
/* BREND-PAGE */
.brendpage .adv__brend {
	max-width: 1260px;
	margin: -65px auto 86px auto;
}
@media (min-width: 1341px) {
	#wrap.brendpage .adv__brend {
		margin: -100px auto 116px auto;
	}
}
.brendpage .header {
	top: 200px;
	border-top: 0px none;
	padding-top: 4px;
	box-shadow: none;
}
#wrap.brendpage {
	max-width: 1260px;
	margin: 0px auto;
	background: #fff;
}

/* TOP-NEWS */
.top-news {
  float: left;
  width: 100%;
  box-sizing: border-box;
  padding: 0 360px 30px 20px;
  margin-right: -340px;
  background-color: #fff;
}
.top-news__title {
  font-family: "Arial Black", "Helvetica CY", "Nimbus Sans L" sans-serif;
  margin: 0 0 28px;
  font-size: 45px;
  line-height: 1;
  letter-spacing: -0.5px;
  font-weight: 900;
}
.top-news__title a {
  text-decoration: none;
  color: inherit;
  transition: all .25s;
}
.top-news__title a:hover {
  color: #0099f1;
}
.top-news__media {
  margin: 0;
  padding: 0;
  font-size: 24px;
  line-height: 1;
  color: #a1a1a1;
}
.top-news .media-box {
  padding: 0;
  height: 342px;
  margin-bottom: 20px;
}
.top-news__list {
  float: left;
  width: 340px;
  box-sizing: border-box;
  padding: 20px 20px 61px;
  font-family: 'Boblic', sans-serif;
}
.top-news__list ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.top-news__list ul > li {
  border-top: solid 1px #d9d9d9;
  padding: 20px 0;
}
.top-news__list ul a {
  display: inline-block;
  position: relative;
  text-decoration: none;
  color: inherit;
  transition: all .25s;
}
.top-news__list ul a:hover {
  color: #0099f1;
}
.top-news__list-title {
  font-size: 24px;
  line-height: 1;
  font-weight: 400;
  margin: 0;
  display: block;
  padding-right: 18px;
}
.top-news__list-title .icon-exclamation,
.top-news__list-title .icon-hasvideo {
  position: absolute;
  margin-left: 4px;
}
.top-news__list ._arrow {
  position: absolute;
  left: -20px;
  top: -1px;
  width: 20px;
  text-align: center;
  font-size: 18px;
  letter-spacing: -3px;
}
.top-news__list ._arrow._up {
  color: #0099f1;
}
.top-news__list ._arrow._down {
  color: #fb3131;
}
/* RECOMMEND */
.recommend {
  float: right;
  width: 340px;
  position: relative;
  z-index: 3;
  height: 546px;
  margin-top: -36px;
  box-sizing: border-box;
  padding: 0 20px;
}
/* NEWS-BLOCK */
.news-block__title {
  text-transform: uppercase;
  font-size: 20px;
  color: rgba(67, 67, 67, 0.5);
  font-weight: 400;
  padding: 0 0 12px;
  border-bottom: solid 2px rgba(67, 67, 67, 0.2);
  margin: 0 0 20px;
  font-family: 'Boblic', sans-serif;
}
.news-block__list {
  list-style: none;
  padding: 0;
  margin: 0 0 10px;
  font-size: 24px;
  line-height: 1;
  font-family: 'Boblic', sans-serif;
}
.news-block__list > li {
  margin-bottom: 20px;
}
.news-block__list > li:after {
  content: "";
  display: block;
  clear: both;
}
.news-block__list > li:last-child {
  margin-bottom: 0;
}
.news-block__list > li img {
  float: left;
  width: 100px;
  height: 100px;
  margin: 0 20px 0 0;
}
.news-block__list a {
  text-decoration: none;
  color: inherit;
  transition: all .25s;
}
.news-block__list a:hover {
  color: #0099f1;
}
.news-block__list-title {
  display: block;
  padding-right: 20px;
  font-size: inherit;
  margin: 0;
  font-weight: 400;
  font-family: inherit;
  line-height: inherit;
}
.news-listing__chosen .news-block__list-title {
  font-family: 'Boblic', sans-serif;
  font-size: 24px;
}
.news-block__list-title .icon-exclamation,
.news-block__list-title .icon-hasvideo {
  position: absolute;
  margin-left: 6px;
}
.news-block__list._align-right > li {
  text-align: right;
}
.news-block__list._align-right > li img {
  float: right;
  margin: 0 0 0 20px;
}
.news-block___more {
  font-size: 14px;
  color: #9c9c9c;
  transition: all .25s;
}
.news-block___more:hover {
  color: #0099f1;
}
/* NEWS-GROUP */
.news-group {
  float: left;
  width: 100%;
  margin-right: -360px;
}
.news-group__content {
  background: #f2f2f2;
  float: left;
  margin-right: 360px;
  padding: 40px 0 1px;
}
.news-group__item {
  float: left;
  width: 50%;
  padding: 0 20px;
  min-height: 470px;
  box-sizing: border-box;
}
.news-group__item .banner {
  text-align: center;
}
.news-group__item .banner img {
  max-width: 100%;
}
.news-group._inner {
  margin: 0;
  float: none;
}
.news-group._inner .news-group__content {
  float: none;
  margin-right: 0;
  padding: 40px 18px 40px 17px;
}
.news-group._inner .news-group__content:after {
  content: "";
  clear: both;
  display: block;
}
.news-group._inner .news-group__item {
  width: 25%;
  padding: 0 17px 0 18px;
  min-height: 120px;
}
.partners-block_1 {
  float: right;
  width: 340px;
  padding: 0 20px;
  box-sizing: border-box;
}
.partners-block_1__content {
  background: #f4f4f4;
  min-height: 400px;
  box-sizing: border-box;
  max-width: 300px;
  margin: 0 auto;
}
#wrap .partners-news__list {
  list-style: none;
  padding: 20px;
  margin: 0 auto;
  max-width: 300px;
  font-family: 'Boblic', sans-serif;
}
#wrap .partners-news__list-item {
  margin: 16px 0 0;
  overflow: hidden;
}
#wrap .partners-news__list-item:first-child {
  margin-top: 0;
}
#wrap .partners-news__list-item img {
  width: 80px;
  height: auto;
  margin: 0 15px 0 0;
  float: left;
}
#wrap .partners-news__list-item a {
  color: #626262;
  text-decoration: none;
  transition: all .25s;
}
#wrap .partners-news__list-item a:hover .partners-news__list-title {
  color: #0099f1;
}
#wrap .partners-news__list-title {
  display: block;
  overflow: hidden;
  font-size: 18px;
  line-height: 0.88888889;
  color: #626262;
  transition: color .25s;
}
.banner-full {
  padding: 40px 20px;
}
/* SHORT-NEWS */
.short-news {
  background: #474747;
  padding: 45px 17px 35px 18px;
  color: #fff;
}
.short-news .container {
  position: relative;
}
.short-news .container:after {
  content: "";
  display: block;
  clear: both;
}
.short-news .slider-short-news__item {
  width: 25%;
  padding: 0 18px 40px 17px;
  min-height: 200px;
  float: left;
}
/* SLIDER-SHORT-NEWS */
.slider-short-news {
  background: #474747;
  padding: 45px 20px 35px;
  position: relative;
}
.slider-short-news__prev a,
.slider-short-news__next a {
  position: absolute;
  width: 20px;
  height: 80px;
  text-decoration: none;
  top: 50%;
  margin-top: -40px;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE0AAADfCAYAAACzp174AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTE5MkZFNTgyNDYwMTFFN0JGMTU5NkEyQkFBQkFBOTMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTE5MkZFNTkyNDYwMTFFN0JGMTU5NkEyQkFBQkFBOTMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1MTkyRkU1NjI0NjAxMUU3QkYxNTk2QTJCQUFCQUE5MyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1MTkyRkU1NzI0NjAxMUU3QkYxNTk2QTJCQUFCQUE5MyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PnHS1y4AAAnHSURBVHja7F1diFVVGP28UykaYkkQCpGQZiH+lGUvmT9gDz5UkA899FLQg5Cj01iiKJYkzqROKk1h0EMvQj1UUA8ZaFFEmlmYpo4PxYQRWCIhZvgz7dXdWy4xzt3r3HPO3Xt/Z8HHPHjOveOa9Z2z19l7rzNqaGjoYxFZKn4YMjXf1FeiGKMMaVPNz6OmbvI855CpeaauaiWtZuqUqV3EOXNNPaNdafg53tRJU7d7nnfG1DRT57QqDfjL1BrivNtMvaxdaY7AA7b9fHDJ1ExTJ7QqTeyF/Xl7h/TBjaZ2aG5Ph29MvUucv8TU45rb02GSvSnc7PkZP5u619RFrUoDfjP1KvEZU0yt0q40YLSpH01N9fyc86ammzqtVWnAP6ZWE5+DVu7VrjSHT+3F3teXPmLqS+2koeWO2OGFD74z9WDqvrTW5N8xcH2D+Lz7NfjSZkoDJpgasNap8qUeShP7n19b+VJOaY7cg7b9fHDZ1CxTP2lVmvOlqwhfeoOpPs3t6YChxJ7Kl/q3p8Nk60vHafalNfJ42KQe0pd2a1caMMZe4Kdo9aW1DOeg1bo0+9IsSnPYZ2qhRl/aCmkzTH1vhxc++MGO865qbE8HTDD3E8fPTsWXtqI04FbrSydq8qW1Fs8/a2q9Nl/aqtKADqmv75hN+NI5tr1VKg24YmolcTxuHNs0t6fDF6be1+JL82hPhztMHTc1NnVfWsvxswbJkT9s2GrtShOrsuNWdT64YIcgp7UqzZHQTZLcq11pDvtNLUjVlxZF2mw7dusgfOlcO3xR156NJOwmSX5Wu9LE+tEB60+T8qW1Aj/7T9JnRuNLi1Sas0x45jYjJV9aK/jzQcIKkuTXNbdn4/DjQ+L4xaH70qLbs9EyYQZrTAq+tFbS94CE11LxpWUpzVkmDEEmE5YM86W/alWaI+FFkuQt2pX23/dJ/YHlwzH70rJJA+4z9S2h8uB8aa0N33nY1DukL31Ou9KcZcJNYUKMvrTWpu89E7MvbZfSAOxNOGKHFVH50lobvxubbDtJX7pTc3s67DX1EXE8lnY9obk9HbDTDzv+RsfiS2sBqB0RF8zy+bb70hCUBmCJ6QnSl94j9QlqlUoDsJh5HelLe7QrzfnSr009FLovDYk0sR7zQOi+tCZhARPMTMRFW3xpaEoDkHeErUTjPY/HVOFdZfrS0JQG/G7qFeL4iWX70hCV5nzpMfGPuCjVl4aoNOdLmYCUUn1pqKQBn9hifOmTmtvTYZptOd+Ii1J8achKAwbItivFl4auNBE+erFwXxq60gBELzIRF/ClW7Urzf1xmejFQn1pLKSJNfJfW2PfVl9ak3jARi8W5ktjUhqAh5R4WOkbvQhferf9qVJpAHa2MNGL8KUbtCsNYKMXc/elsSkNQPQis2Qrd18aI2kA1vDuJX3pMs3t6cBGL/5incJFrUoTexdlIi7uzMuXxqw0gI1ezMWXxqw0gI1ezMWXxq4094c/ZIcVvlgg9bW/KpUGILuoU/yjFwFsJerQTJoIH73Yki9NoT0bfemA+EdcZPalqSjN+VJms0bm+dKUlAaw0YuZfGlKShM72n+haF+aGmnAB1LfY1qYL02tPR3Y6MVB62X/1qo0ET56ETE/3dqV5u6OJ8U/etHbl6aqNDcOY6IXvX1pykoT4aMXgUXNbiQpKw3AnGcXec72Zr40ddLEqoaJXmzqS1Nvz8a7IxO9OKIv1aA0Nw5jHj7ijrtJu9Lc3ZGJXrxiW/WoVqW5cRgTvdhxPV+qiTSxNwTmMfewvlRTezbeHZnoxUHrFC5oVRrARi/iGrhau9Lc3RGbc2/J4ks1Ks2NwzZm9aValQaw0YvXfKlWpQGYH+gkz8Er1Ds0K80Bj8eZOMXlFWki88mx20BNKqxkW1S70jDi30ccDx86R7PSssx5IrP3smbSlpPDDfjW/dodQeaZKq1K20QQJtYNDGp2BNVTjgzoE24VZHcjYRpJwwPFBcTxw85kVXME1wfmCJDJe+T//6BJaasJwoDdwxGmSWnVvGcGbCUIA9bLCAuYNSgNAQCfE8djL+kcGWHve+pKw9CCfWdLpzQJC0idtOeEW2Z1zV+OhJTbEzNNp6RaCUlhI+kve8RzS2O1uvs6/lKj0nYShA3rL7WRhpmlha36S03tWe2NyugvpxDHvy0ZQk5S2++JR9jj8vCXWpTWSxDW1F9qUBpe3oVZ8lKy1VJQGv4PfQRhQJe0EEaXAmnPmLo/b3+ZcntWCTAZsIEgDNgiOUS5akq1GrRDDNWpVjsIwpy/zCWeOlalPSbcy6Nx4V+U15dXmZBK2nMVQRjwluT8cofYlDbJ+ssq55bAZoKwlvxlKkqrsrsz/J67SH+5Qgp6CVcspD0t/rH6zl8W9rq36s0XiSptA0FYbv4yZqVhPHZMqrf5UOgj/eVLUsJreUNW2lJTH7fLX8ZI2o3W+kxrl7+MsT1XEIQB/VLiS+1Teb8nCD5b5kg7RH85njh+fZmEhai06p3F7B/Q+kvf32moSH8ZC2lPi//rxIH3pA2vEw+pPfGMDK//mByKv4xBaesIwkrxl6ErDf4SEyWjQ/KXoSutlyAM6G4nYSEobYmpT0P0l6GSBn+JZQXTQ/SXobbncoKw0v1liErDSh8skZrgefwf9oZxLgTS2qW0zQRhwIZQCGuX0nBdOhS6vwxJafCXO2LwlyGR9pTUV2L7Yk+7/GUo7TnWXvyj8JehKG1NTP4yBKVhvxI2eo2JxV+GoLRtBGFAV6iElaU0NkIQxy6WgFE0aWwAbzD+sp3tyUYI9odOWNFKYyMEz0h9/vJc6KQVqTQ2QnB9DIQVqTQ2QjA4f9kOpW0nCAvSX5ZN2jLhIh6C9JdlticbIXjBXvxPx0Ra3kpjIwS3xEZY3kpjIwSD9pdlKY2NEOyKkbA8lcZGCH4m9TlP0Uoa++LRKPxl0e3JRgj2x0xYHkpjIwSj8ZdFKm0j6S/Xxk5Yq0pjIwSj8pdFKW0HQVh0/rII0hAhyCx5is5f5t2ebITgeamvDjqdCmlZlMZGCPakRFgWpbERgtH6yzyVxkYIdqVGGKs0NkJwr6lHJUH4kgZFHhT/RDz4y1n2hpEcfNuTjRDsT5UwX6WxEYJJ+MtWlcZGCK5NmTAfpbERgodNPWDqasqkNVMaEyEI9lemTlgz0hAhyDySTspfZmlPNkIwOX+ZRWlshOBmLYRdT2lshGCS/pJVGhsh2KWJsOGUxkYIJusvfUmD6pCJ4ZuId8nUTKlv2FeFxvZkIwTf1EhYo9LYCMHk/aWP0tgIwbVaCXNKw3gMywRu8jwH6zbmabBLIymtjyBsyA581RIG/CvAAIpFaIVwmQIFAAAAAElFTkSuQmCC) 50% 50% / auto 52px no-repeat;
  opacity: .5;
  transition: opacity .25s;
}
.slider-short-news__prev a.disabled,
.slider-short-news__next a.disabled {
  opacity: .1 !important;
  cursor: default;
}
.slider-short-news__prev a:hover,
.slider-short-news__next a:hover {
  opacity: .85;
}
.slider-short-news__prev a {
  left: 0;
  -webkit-transform: rotate(180deg);
      -ms-transform: rotate(180deg);
          transform: rotate(180deg);
}
.slider-short-news__next a {
  right: 0;
}
.slider-short-news .container {
  margin: auto;
}
.slider-short-news__banner {
  float: right;
  width: 300px;
}
.slider-short-news__banner img {
  text-align: center;
  max-width: 100%;
  //position: absolute;
  top: 0;
  bottom: 0;
  right: 20px;
  margin: auto 0;
}
.slider-short-news__content {
  color: #cecece;
  position: relative;
  margin-right: 340px;
}
.slider-short-news__content ._slider {
  height: 100%;
  position: relative;
}
.slider-short-news__item {
  padding: 0 0 35px;
  height: 100%;
  box-sizing: border-box;
  min-height: 240px;
}
.slider-short-news__item h3 {
  text-transform: uppercase;
  font-size: 24px;
  font-weight: 400;
  font-family: 'Boblic', sans-serif;
  padding: 0 0 12px;
  border-bottom: solid 2px #7f7f7f;
  margin: 0 0 35px;
}
.slider-short-news__item ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.slider-short-news__item ul li + li {
  margin-top: 30px;
}
.slider-short-news__item ul a {
  display: block;
  color: #cecece;
  font-size: 24px;
  font-family: 'Boblic', sans-serif;
  text-decoration: none;
  transition: all .25s;
  width: 100%;
  overflow: hidden;
}
.slider-short-news__item ul a:hover {
  color: #0099f1;
}
.slider-short-news__item ul .media-box {
  margin-bottom: 20px;
}
.slider-short-news__item ul .media-box img {
  display: none;
}
.slider-short-news__item ul p {
  font-size: 16px;
  font-family: Arial, "Helvetica CY", "Nimbus Sans L", sans-serif;
  color: #ccc;
}
.slider-short-news__item ._info {
  font-size: 16px;
  position: absolute;
  bottom: 0;
  line-height: 1;
}
.slider-short-news__item ._info span {
  color: #fff;
}
/* SLIDER-NEWS */
.slider-news {
  padding: 40px 0;
  background: #474747;
  width: 100%;
  overflow: hidden;
}
.slider-news__prev,
.slider-news__next {
  position: absolute;
  width: 36px;
  height: 36px;
  top: -4px;
}
.slider-news__prev a,
.slider-news__next a {
  display: block;
  width: 36px;
  height: 36px;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAABjCAYAAADKOhMXAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MkU4NUVCMjkyNDdBMTFFN0JGRjZCRjAxMjY3Qjk1QzYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MkU4NUVCMkEyNDdBMTFFN0JGRjZCRjAxMjY3Qjk1QzYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyRTg1RUIyNzI0N0ExMUU3QkZGNkJGMDEyNjdCOTVDNiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyRTg1RUIyODI0N0ExMUU3QkZGNkJGMDEyNjdCOTVDNiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PukvBXUAAAPjSURBVHja5NxbaxNBFADgyTYFL1GrRA0G+6QW1KYVtRdbK15A9EH8H+L/8WeICIJ4odrWqjW1tla8vVQq8UKNWkWwNs6xMxCC2T27O5dz2gPnbWnz7WzO7k5mTqZWqwnmkZV5RWZryDGXMsyh7TLHZG6IOC6TZY4cVcgg5LhlmcMBc+RGBPKezIscL92izHEE8o/M+4AUEQeuGiQ3aEHmgyRIXZq5IB/JzEUgl2SONCK5jGhqJAcoIB8ikWPNkNShBVV4NiGRF8L+WEAcudkEkirUOJIiVN9CjCL/PewSejLKy3wsc4tpJKURzatbiBUkFahGtiGQ40mQFC5dwJWRSDgZ59O8nftEPkEgf8ucSIP0eelq5FYk8lzafxh4Qk64RPqAauQ2l0jX0DZVUJwjXVbdnKqueR9IVyOaU4UHgyzbQLqAauR2BHJS5llbH8TmpbtO5hQSCcedsXnGA4vIp1SQtkYUnrZmZO6ggrQxooCcpoY0DSWLNAmtR7ZEIJ+5RpqCZtWHxyDhZJz28RZhohjNytyJRJ7y9U6YdkSfI5EzPpFpoYAsIJEnfc/XBGsBmRQ6jUTOUkEmgUJ13YVEnhCEIoiJLCKQL6gh40CxyJcyhwTBwECnkJcrIAcF0QgQyKIIn/+FyeVXlJFRUCwSRnJAEI8gJfI1B2Qz6GQMZL9gEsF/kLsRyDeckI3QMhL5VmafYBZBHbIdiewVDAOglxEjCbHAFVn/4h3nu9nHdUQhDsl8pzBhUyZ7xMqqEbZQjZ1HYPdyxDbeXrpiYEc5Q+NgOzhhmz0CYrH7uGDDHuoB+16srGhuFq0KO8IZClFSIxuF7aCOxbx4l5AjC9hhzlCITiR2P1VsnMkxwFaQ2LucoRAHkNiD1LBJJrAB+4EbNulPEiVu2KTQpZjYO1yh9diPCCwUsttcoRrbqbDLEVg4Kbe4QuNiu3xhTS3WAGw3ZazJ5Te/KGNNL6jS2E/UsDbWAgL2MDWsrUWPiwr7GYm9yRWqsT1ILEzM3eAKhajGwB6xiXWx1FxjF3xiXe2SqCrEF19Yl9tBqqpAecG63uDjDetjy5bGVhHYo6awvjbh6QIVhc0q7HWuUKFuOYD9isDCT5XXuEI1th+JPZYGS2Hrc8UFlspmdo39ZgtLqQ9DRX0XrWCpNZzQ2O+msRRbiAC21zSWalMYjV1EYq9yhWpsDxI7GIWl3rhJV+MfCOzxMCyHVlzzqkBFYVvCsFy6yAF2IA2WU7u8uRjYoUYstwaIGvszAhs0Yjn27pxTtxQsFpYaCM5tZ2F9MaxJXC+iG5V2r4b+uhobFpnMWumY/FeAAQBTF2WyRBu82QAAAABJRU5ErkJggg==) 50% 50% / auto 18px no-repeat;
  opacity: .5;
  transition: opacity .25s;
}
.slider-news__prev a:hover,
.slider-news__next a:hover {
  opacity: 1;
}
.slider-news__prev a.disabled,
.slider-news__next a.disabled {
  opacity: .1 !important;
  cursor: default;
}
.slider-news__next {
  right: -10px;
  -webkit-transform: rotate(180deg);
      -ms-transform: rotate(180deg);
          transform: rotate(180deg);
}
.slider-news__prev {
  right: 30px;
}
.slider-news .container {
  padding: 0 20px;
}
.slider-news__header {
  position: relative;
  border-bottom: solid 2px rgba(255, 255, 255, 0.3);
  margin: 0 0 55px;
  padding: 0 0 15px;
}
.slider-news__title {
  font-size: 24px;
  margin: 0;
  line-height: 1;
  text-transform: uppercase;
  font-family: 'Boblic', sans-serif;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
}
.slider-news__content {
  margin: 0 -20px;
}
.slider-news__list {
  list-style: none;
  padding: 0;
  margin: 0;
  color: #fff;
  height: 100%;
}
.slider-news__list article {
  padding-bottom: 50px;
}
.slider-news__list li {
  height: 100%;
}
.slider-news__list-content {
  padding: 0 20px 10px;
}
.slider-news__list .media-box {
  margin: 0 0 25px;
  position: relative;
}
.slider-news__list h3 {
  font-size: 24px;
  font-family: 'Boblic', sans-serif;
  font-weight: 400;
  margin: 0 0 15px;
  transition: all .25s;
  min-height: 58px;
}
.slider-news__list h3 a {
  color: #fff;
  text-decoration: none;
  transition: all .25s;
}
.slider-news__list h3 a:hover {
  color: #0099f1;
}
.slider-news__list p {
  font-size: 16px;
  margin: 0;
}
.slider-news__list ._info {
  font-size: 16px;
  color: #b4b2b2;
  position: absolute;
  bottom: 0;
}
.slider-news__list ._info span {
  color: #fff;
}
.slider-news__link {
  text-decoration: none;
  color: #fff;
  display: block;
  padding-bottom: 50px;
}
.slider-news__link:hover h3 {
  color: #0099f1;
}
/* NEWS-CENTER */
.news-center {
  padding: 40px 0 0 10px;
}
.news-center .container {
  display: table;
  width: 100%;
}
.news-center._three-column .news-center__item,
.news-center._four-column .news-center__item {
  width: 33.333%;
  box-sizing: border-box;
  display: table-cell;
  vertical-align: top;
  padding: 0 10px 25px;
}
.news-center._three-column .news-center__item:last-child,
.news-center._four-column .news-center__item:last-child {
  padding-right: 20px;
}
.news-center._four-column .news-center__item {
  width: 25%;
}
.news-center .banner {
  margin: 30px 0;
  text-align: center;
}
.news-center .banner img {
  max-width: 100%;
}
.news-center .banner:first-child {
  margin-top: 0;
}
.news-center .banner:last-child {
  margin-bottom: 0;
}
.news-center__top {
  min-height: 424px;
  border-bottom: solid 1px #bfbfbf;
  margin-bottom: 25px;
  box-sizing: border-box;
  padding-bottom: 20px;
  font-size: 20px;
  color: #a1a1a1;
}
.news-center__top .media-box {
  margin-bottom: 20px;
}
.news-center__top .media-box img {
  display: none;
}
.news-center__top a {
  color: inherit;
  text-decoration: none;
}
.news-center__top a:hover .news-center__top-title {
  color: #0099f1;
}
.news-center__top-title {
  margin: 0 0 15px;
  font-size: 24px;
  font-weight: 400;
  font-family: 'Boblic', sans-serif;
  color: inherit;
  transition: all .25s;
  color: #434343;
  line-height: 1;
  min-height: 2em;
}
.news-center__top p {
  margin: 0;
  font-size: 20px;
  color: #a1a1a1;
}
.news-center__top-author, .article_source {
  line-height: 28px;
  font-size: 16px;
  padding-left: 38px;
  margin-top: 1em;
}
.article_source {
	margin-right: 10px;	
}
.news-center__top-author a, .article_source a {
  color: #0099f1;
}
.news-center__top-author i {
  float: left;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  margin-left: -38px;
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjMwcHgiIGhlaWdodD0iMzBweCIgdmlld0JveD0iMjI3LjYwNSAyMjcuNjA1IDMwIDMwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDIyNy42MDUgMjI3LjYwNSAzMCAzMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PGc+PGNpcmNsZSBmaWxsPSIjQTVBNUE1IiBjeD0iMjQyLjYwNSIgY3k9IjI0Mi42MDUiIHI9IjE0Ljg5NiIvPjxnPjxkZWZzPjxjaXJjbGUgaWQ9IlNWR0lEXzFfIiBjeD0iMjQyLjYwNSIgY3k9IjI0Mi42MDUiIHI9IjE0Ljg5NiIvPjwvZGVmcz48Y2xpcFBhdGggaWQ9IlNWR0lEXzJfIj48dXNlIHhsaW5rOmhyZWY9IiNTVkdJRF8xXyIgIG92ZXJmbG93PSJ2aXNpYmxlIi8+PC9jbGlwUGF0aD48cGF0aCBjbGlwLXBhdGg9InVybCgjU1ZHSURfMl8pIiBmaWxsPSIjRkZGRkZGIiBkPSJNMjUwLjY2NCwyNDguNzU4aC0xLjYzN2MtMS44MDgsMC0zLjI3NC0xLjQ2Ni0zLjI3NC0zLjI3NHYtMS4wNTJjMC43MjQtMC44NjEsMS4yNDQtMS44NzksMS41NjctMi45NTVjMC4wMzQtMC4xODEsMC4yMDgtMC4yNzEsMC4zMjUtMC4zOTZjMC42MjctMC42MjcsMC43NS0xLjY4NCwwLjI4LTIuNDM3Yy0wLjA2NC0wLjExNC0wLjE3OS0wLjIxMy0wLjE3My0wLjM1NWMwLTAuOTYsMC4wMDUtMS45MjItMC4wMDEtMi44ODFjLTAuMDI2LTEuMTU4LTAuMzU3LTIuMzYzLTEuMTY5LTMuMjIxYy0wLjY1Ni0wLjY5My0xLjU1Ni0xLjEwNi0yLjQ4NS0xLjI4MmMtMS4xNzQtMC4yMjQtMi40MDEtMC4yMTMtMy41NjQsMC4wODNjLTEuMDA3LDAuMjU0LTEuOTU0LDAuODQ0LTIuNTM5LDEuNzE5Yy0wLjUxOCwwLjc2LTAuNzQ1LDEuNjgzLTAuNzg0LDIuNTkzYy0wLjAxNCwwLjk3Ny0wLjAwMywxLjk1Ni0wLjAwNiwyLjkzNWMwLjAyMiwwLjE5Ni0wLjE0NCwwLjMyOS0wLjIxOSwwLjQ5MWMtMC40NDMsMC44MDMtMC4yNDgsMS44OTgsMC40NjQsMi40ODJjMC4xODEsMC4xMjUsMC4yMTQsMC4zNTIsMC4yOCwwLjU0OGMwLjMxLDAuOTY3LDAuODI1LDEuODYyLDEuNDc2LDIuNjQxdjEuMDg3YzAsMS44MDgtMS40NjYsMy4yNzQtMy4yNzQsMy4yNzRoLTEuNjM3YzAsMC0yLjk2NywwLjgxOC00LjkxMiw0LjkxMXYxLjYzN2MwLDAuOTA1LDEuMjAxLDMuNDk1LDIuMTA1LDMuNDk1aDIxLjk4NGMwLjkwNSwwLDIuMTA1LTIuNTksMi4xMDUtMy40OTV2LTEuNjM3QzI1My42MzIsMjQ5LjU3NywyNTAuNjY0LDI0OC43NTgsMjUwLjY2NCwyNDguNzU4eiIvPjxjaXJjbGUgY2xpcC1wYXRoPSJ1cmwoI1NWR0lEXzJfKSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjQTVBNUE1IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIGN4PSIyNDIuNjA1IiBjeT0iMjQyLjYwNSIgcj0iMTQuODk2Ii8+PC9nPjwvZz48L3N2Zz4=);
}
/* NEWS-LISTING */
.news-listing {
  list-style: none;
  padding: 0;
  margin: 0;
}
.news-center .news-listing { height: 570px; overflow-y: scroll; overflow-x: hidden; }
.news-center .news-listing::-webkit-scrollbar { width: 1em; }
.news-listing li + li {
  margin-top: 30px;
}
.news-listing li:after {
  content: "";
  clear: both;
  display: block;
}
.news-listing li a {
  text-decoration: none;
  color: inherit;
  display: block;
  padding-left: 65px;
  font-size: 18px;
}
.news-listing li a:hover .news-listing__title {
  color: #0099f1;
}
.news-listing li time,
.news-listing li .time {
  float: left;
  margin-left: -65px;
  margin-right: 20px;
  color: #909090;
}
.news-listing li._important time,
.news-listing li._important .time {
  color: #0099f1;
}
.news-listing__title {
  font-weight: 400;
  margin: 0;
  transition: all .25s;
}
.news-listing p {
	color: rgba(67, 67, 67, 0.5);
	font-family: Boblic, sans-serif;
	font-size: 18px;
	margin-top: 10px !important;
}
.news-listing__chosen {
  list-style: none;
  padding: 0;
  margin: 0;
}
.news-listing__chosen > li {
  padding: 15px 0 18px;
  font-size: 16px;
}
.news-listing__chosen > li:first-child {
  padding-top: 0;
}
.news-listing__chosen > li:after {
  content: "";
  display: block;
  clear: both;
}
.news-listing__chosen > li + li {
  border-top: solid 1px #bfbfbf;
}
.news-listing__chosen > li img {
  float: right;
  margin: 0 0 0 12px;
}
.news-listing__chosen > li p {
  margin: 0;
}
.news-listing__chosen a {
  text-decoration: none;
  color: #474747;
}
.news-listing__chosen a:hover .news-listing__chosen-title {
  color: #0099f1;
}
.news-listing__chosen-title {
  font-weight: 400;
  font-family: 'Boblic', sans-serif;
  color: #474747;
  font-size: 24px;
  margin: 0 0 10px;
  transition: color .25s;
  line-height: 1;
}
.news .news-listing li time {
	font-size: 14px;
	display: block;
	float: none;
	margin-left: 0px;
}
.news .news-listing li a {
	padding-left: 0px;
	color: #080a23;
}
._item-shadow {
  background: #fff url(../img/shadow-article.png) 100% 100% no-repeat;
}
/* OPINIONS-LIST */
.opinions-list {
  background: #474747;
  padding: 50px 10px;
  color: #fff;
}
.opinions-list .container {
  position: relative;
  margin: auto;
}
.opinions-list .container:after {
  content: "";
  display: block;
  clear: both;
}
.opinions-list__item {
  float: left;
  width: 25%;
  box-sizing: border-box;
  padding: 0 10px 45px;
  font-size: 16px;
}
.opinions-list__item p {
  margin: 0;
}
.opinions-list__item ._info {
  color: #b4b2b2;
  position: absolute;
  bottom: 0;
}
.opinions-list__item ._info span {
  color: #fff;
}
.opinions-list__author {
  border-bottom: solid 1px #7f7f7f;
  margin: 0 0 30px;
  position: relative;
  height: 127px;
  box-sizing: border-box;
}
.opinions-list__author img {
  position: absolute;
  max-height: 100%;
  width: auto;
  right: 0;
  bottom: 0;
}
.opinions-list__author-name {
  text-transform: uppercase;
  font-size: 24px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  font-family: 'Boblic', sans-serif;
  position: absolute;
  left: 0;
  bottom: 12px;
  z-index: 2;
}
.opinions-list__section {
  font-size: 16px;
  color: #0099f1;
  margin: 0 0 20px;
}
.opinions-list__title {
  font-size: 24px;
  font-weight: 400;
  margin: 0 0 16px;
  color: #fff;
  font-family: 'Boblic', sans-serif;
  min-height: 58px;
}
.opinions-list__title a {
  color: inherit;
  text-decoration: none;
  transition: all .25s;
  display: inline-block;
}
.opinions-list__title a:hover {
  color: #0099f1;
}
/* USERS-CHOOSE */
.users-choose {
  padding: 35px 10px 25px;
  font-family: 'Boblic', sans-serif;
}
.users-choose .container {
  padding: 0 10px;
  margin: auto;
  background-color: #fff;
}
.users-choose__title {
  font-size: 24px;
  font-weight: 400;
  padding-bottom: 12px;
  border-bottom: solid 2px #c7c7c7;
  margin: 0 0 37px;
  text-transform: uppercase;
  color: rgba(67, 67, 67, 0.5);
}
.users-choose__list {
  list-style: none;
  padding: 0;
  margin: 0 0 0 -20px;
  font-size: 18px;
  line-height: 0.88888889;
}
.users-choose__list:after {
  content: "";
  display: block;
  clear: both;
}
.users-choose__list li {
  float: left;
  box-sizing: border-box;
}
.users-choose__list a {
  display: inline-block;
  color: inherit;
  text-decoration: none;
  transition: all .25s;
}
.users-choose__list a:hover {
  color: #0099f1;
}
/* PERSONS-PREVIEW */
.persons-preview {
  padding: 40px 20px;
  background: #474747;
  color: #fff;
}
.persons-preview__search {
  float: left;
  width: 302px;
  box-sizing: border-box;
  padding: 14px 20px 20px;
  border: solid 1px #adadad;
}
.persons-preview__search form {
  position: relative;
  padding-right: 97px;
}
.persons-preview__search form input[type=submit] {
  position: absolute;
  top: 0;
  right: 0;
  height: 32px;
  width: 84px;
  border: 0;
  background: #9f9f9f;
  font-size: 14px;
  transition: all .25s;
}
.persons-preview__search form input[type=submit]:hover {
  background: #0099f1;
}
.persons-preview__search form input[type=text],
.persons-preview__search form input[type=search] {
  display: block;
  border: solid 1px #fff;
  width: 100%;
  box-sizing: border-box;
  height: 32px;
  padding: 6px 12px;
  font-size: 14px;
  font-family: inherit;
  outline: 0;
  transition: all .25s;
}
.persons-preview__search form input[type=text]:focus,
.persons-preview__search form input[type=search]:focus {
  border-color: #0099f1;
}
.persons-preview__search form input[type=text]:placeholder,
.persons-preview__search form input[type=search]:placeholder {
  color: #cfcfcf;
}
.persons-preview__search form input[type=text]::-webkit-input-placeholder,
.persons-preview__search form input[type=search]::-webkit-input-placeholder {
  color: #cfcfcf;
}
.persons-preview__search form input[type=text]::-moz-placeholder,
.persons-preview__search form input[type=search]::-moz-placeholder {
  color: #cfcfcf;
}
.persons-preview__search form input[type=text]:-ms-input-placeholder,
.persons-preview__search form input[type=search]:-ms-input-placeholder {
  color: #cfcfcf;
}
.persons-preview__search form input[type=text]::placeholder,
.persons-preview__search form input[type=search]::placeholder {
  color: #cfcfcf;
}
.persons-preview__list {
  overflow: hidden;
  box-sizing: border-box;
  padding: 15px 0 0;
}
.persons-preview__list-name {
  display: block;
  font-size: 18px;
  line-height: 1.1;
}
.persons-preview__list ul {
  list-style: none;
  padding: 0;
  margin: 0;
  font-family: 'Boblic', sans-serif;
}
.persons-preview__list ul li {
  float: left;
  margin-bottom: 15px;
  box-sizing: border-box;
}
.persons-preview__list ul a {
  text-decoration: none;
  color: #fff;
  transition: all .25s;
}
.persons-preview__list ul a small {
  display: block;
  font-size: 14px;
  color: #b5b5b5;
}
.persons-preview__list ul a:hover {
  color: #0099f1;
}
.persons-preview__title {
  text-transform: uppercase;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  border-bottom: solid 2px rgba(255, 255, 255, 0.3);
  font-size: 18px;
  line-height: 20px;
  font-family: 'Boblic', sans-serif;
  margin: 0 0 20px;
  padding: 0 0 10px;
}
.persons-preview__list.main-list .persons-preview__title, .persons-preview__list.main-list  ul a {
	color: #434343;
}
.persons-preview__alphabet {
  list-style: none;
  padding: 0 0 30px;
  margin: 0 -14px 0 0;
  min-height: 140px;
  box-sizing: border-box;
}
.persons-preview__alphabet li {
  float: left;
  width: 24px;
  font-size: 18px;
  line-height: 24px;
}
.persons-preview__alphabet a {
  text-decoration: none;
  color: #fff;
  text-transform: uppercase;
  font-family: 'Boblic', sans-serif;
  transition: all .25s;
}
.persons-preview__alphabet a:hover {
  color: #0099f1;
}
/* FOOTER  */
.footer {
  background: #4fb9f5;
  color: #fff;
  padding: 50px 0 35px;
}
.footer .container {
  padding: 0 10px;
  margin: auto;
}
.footer .container:after {
  content: "";
  display: block;
  clear: both;
}
.footer .clearfix {
	margin-bottom: 120px;
}
.footer__column {
  float: left;
  width: 25%;
  padding: 0 10px 60px;
  box-sizing: border-box;
}
.footer__column h3 {
  text-transform: uppercase;
  font-size: 24px;
  margin: 0 0 30px;
  font-family: 'Boblic', sans-serif;
  font-weight: 400;
  padding: 0 0 13px;
  border-bottom: solid 2px rgba(255, 255, 255, 0.3);
}
.footer__column ul {
  list-style: none;
  padding: 0;
  margin: 0;
  font-family: 'Boblic', sans-serif;
  line-height: 1.25;
}
.footer__column ul li {
  margin: 0 0 14px;
}
.footer__column ul a {
  text-decoration: none;
  color: #fff;
}
.footer__column ul a:hover {
  text-decoration: underline;
}
.footer__column address {
  font-style: normal;
  font-size: 16px;
}
.footer__column address a {
  color: inherit;
  text-decoration: none;
}
.footer__column address p {
  margin: 0 0 1em;
}
.footer .icon-fb,
.footer .icon-tw,
.footer .icon-vk,
.footer .icon-zen,
.footer .icon-ok {
  position: relative;
  top: -2px;
  margin-right: 20px;
}
.footer .copyright {
  float: left;
  font-size: 16px;
  margin-left: 10px;
}
.footer .reg-info {
  float: right;
  font-size: 16px;
  margin-right: 10px;
}
/* LAYOUT-TWO-COLUMN */
.layout-two-column {
  padding: 0 20px;
  max-width: 1350px;
  margin: auto;
  box-sizing: border-box;
  overflow: hidden;
}
/*.layout-two-column:after {
  content: "";
  display: block;
  clear: both;
}*/
.layout-two-column__main {
  float: left;
  width: 100%;
  margin: 0 -418px 0 0;
  padding: 0 390px 0 80px;
  position: relative;
  box-sizing: border-box;
  background-color: #fff;
}
.layout-two-column__aside {
  width: 360px;
  position: relative;
  z-index: 99;
  float: right;
  background: #f9f9f9;
  padding: 30px 30px 15000px;
  margin-bottom: -14970px;
  box-sizing: border-box;
}
.layout-two-column__aside .banner {
  text-align: center;
}
.layout-two-column__aside .banner img {
  max-width: 100%;
}
.layout-two-column__aside ._block {
  margin-bottom: 30px;
}
.layout-two-column__aside ._block:last-child {
  margin-bottom: 0;
}
.layout-two-column__aside .partners-news__list {
  background: #fff;
}
.layout-two-column__aside .partners-news__list li {
  border-top: solid 1px #e3e3e3;
  padding: 16px 0;
  margin: 0 !important;
}
.layout-two-column__aside .partners-news__list li:first-child {
  padding-top: 0;
  border-top: 0;
}
.layout-two-column__aside .partners-news__list li:last-child {
  padding-bottom: 0;
}
.layout-two-column__aside .news-block__title {
  border-bottom-color: #fff;
}
.layout-two-column__aside .news-block__list {
  padding-bottom: 20px;
}
.layout-two-column__aside .news-block__list li {
  border-bottom: solid 1px #fff;
  margin: 0 !important;
  padding: 22px 0;
}
.layout-two-column__aside .news-block__list li:first-child {
  padding-top: 0;
}
.layout-two-column__aside .news-block__list li a {
  color: #474747;
}
.layout-two-column__aside .news-block__list li a:hover {
  color: #0099f1;
}
/* NEWS */
.news p, .news li {
  margin: 1.35em 0;
}
.news p:first-child {
  margin-top: 0;
}
.news p:last-child {
  margin-bottom: 0;
}
.news p a {
  color: inherit;
  text-decoration: underline;
  text-decoration-color: #0099f1;
}
.news p a:hover {
  color: #0099f1;
}
.news:after {
  content: "";
  clear: both;
  display: block;
}
.news__title {
  font-weight: 900;
  font-size: 45px;
  line-height: 1;
  margin: 0 0 30px;
  color: #080a23;
}
.news__media {
  margin: 0 0 25px;
  position: relative;
  z-index: 0;
}
.news__media img,
.news__media iframe,
.news__media video {
  width: 100%;
  height: auto;
  display: block;
}
.news__media figcaption {
  position: absolute;
  bottom: 0;
  left: 0;
  max-width: 100%;
  box-sizing: border-box;
  color: #fff;
  background: rgba(71, 71, 71, 0.45);
  padding: 2px 10px;
  font-size: 12px;
  line-height: 14px;
}
.news__banner {
  float: left;
  max-width: 300px;
  margin: 0 32px 1em 0;
}
.news__banner img {
  max-width: 100%;
}
.news__lead {
  font-style: italic;
  font-size: 28px;
  font-weight: 700;
  line-height: 1;
  margin: 0 0 20px;
  color: #252525;
}
.news .js-mediator-article img {
	max-width: 100% !important;
	height: auto !important;
}
.news__short-link {
  border-top: solid 2px #e2e2e2;
  border-bottom: solid 1px #e2e2e2;
  display: block;
  overflow: hidden;
  font-family: 'Boblic', sans-serif;
  padding: 15px 0;
  font-size: 20px;
  line-height: 1.1;
  margin: 20px 0;
}
.news__short-link-title {
  color: #acacac;
  text-transform: uppercase;
  float: left;
  margin-right: 6px;
}
.news__short-link a {
  display: table;
  text-decoration: none;
  color: inherit;
  transition: all .25s;
}
.news__short-link a:hover {
  color: #0099f1;
}
.news__share {
  margin: 20px 0;
  font-size: 16px;
}
.news__more-news {
  float: right;
  max-width: 386px;
  box-sizing: border-box;
  padding: 12px 36px 30px;
  background: url(../img/shadow-article_left.png) 0 100% no-repeat;
  margin: -0.5em -30px 1em 30px;
  position: relative;
}
.news__more-news:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  height: 30px;
  background: linear-gradient(#fff, rgba(255, 255, 255, 0));
}
.news__more-news-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.news__more-news-list li {
  padding: 22px 0;
  border-top: solid 1px #d4d4d4;
  font-size: 22px;
  line-height: 1;
  font-family: 'Boblic', sans-serif;
}
.news__more-news-list li:first-child {
  border-top: 0;
  padding-top: 0;
}
.news__more-news-list li:last-child {
  padding-bottom: 10px;
}
.news__more-news-list li a {
  display: inline-block;
  text-decoration: none;
  color: inherit;
  transition: all .25s;
}
.news__more-news-list li a:hover {
  color: #0099f1;
}
.news__meta {
  clear: both;
  margin: 30px 0 50px;
  text-align: right;
  font-size: 14px;
  color: #828282;
}
.news__meta .news-center__top-author {
  display: inline-block;
  vertical-align: middle;
  margin: 0;
}
.news__date {
  display: inline-block;
  vertical-align: middle;
  margin: 0 20px 0 0;
  line-height: 30px;
}
.news__help {
  background: #e9e9e9;
  padding: 25px 30px;
  margin: 35px 0;
}
.news__help-title {
  display: inline-block;
  vertical-align: middle;
}
.news__help-share {
  display: inline-block;
  vertical-align: middle;
}
.news__read-more {
  margin: 30px 0;
}
.news__read-more-list {
  font-family: 'Boblic', sans-serif;
  font-size: 28px;
  line-height: 1.2;
  list-style: none;
  padding: 0;
  margin: 0;
}
.news__read-more-list li {
  padding: 20px 0;
  border-bottom: solid 1px #d7d7d7;
}
.news__read-more-list li:first-child {
  padding-top: 0;
}
.news__read-more-list a {
  color: inherit;
  text-decoration: none;
  transition: color .25s;
}
.news__read-more-list a:hover {
  color: #0099f1;
}
.news__partners-horizontal, .news__photorep {
  margin: 35px 0;
}
.news__photorep a.news__title {
	text-decoration: none;
	font-size: 33px;
	margin-bottom: 20px;
	display: block;
}
.news__partners-horizontal-list {
  list-style: none;
  padding: 0;
  margin: 0 -10px;
  font-size: 18px;
  font-family: 'Boblic', sans-serif;
}
.news__partners-horizontal-list:after {
  content: "";
  display: block;
  clear: both;
}
.news__partners-horizontal-list li {
  width: 33.333%;
  float: left;
  padding: 0 10px;
  box-sizing: border-box;
}
.news__ads {
  margin: 30px 0;
}
.news__comments {
  margin: 40px 0;
}
.news__comments-stats {
  padding: 10px 0 10px 10px;
  font-size: 12px;
  color: #959494;
}
.news__comments-stats span {
  margin: 0 10px;
}
.news__comments-stats b {
  color: #000;
}
.news__comments-field {
  border: solid 1px #afafaf;
}
.news__comments-field textarea {
  display: block;
  width: 100%;
  height: 162px;
  border: 0;
  padding: 10px 20px;
  font-size: 16px;
  font-family: inherit;
  box-sizing: border-box;
}
.news__comments-actions {
  border: solid 1px #afafaf;
  border-top: 0;
  background: #f4f4f4;
  height: 32px;
}
.news__comments-actions ._submit {
  float: right;
  background: #666;
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  border: 0;
  padding: 0 40px;
  transition: all .25s;
  height: 32px;
}
.news__comments-actions ._submit:hover {
  background: #0099f1;
}
.news__comments-actions ._btn {
  float: left;
  background: #f4f4f4;
  color: #767676;
  font-size: 14px;
  border: 0;
  padding: 0 30px;
  transition: all .25s;
  height: 32px;
  text-decoration: none;
  line-height: 32px;
  border-right: solid 1px #afafaf;
}
.news__comments-actions ._btn:hover {
  background: #0099f1;
  color: #fff;
}
.news__blocks-news {
  margin: 0 -30px;
}
.news__blocks-news ._row {
  display: table;
  width: 100%;
}
.news__blocks-news ._row .news-center__item:first-child {
  position: relative;
}
.news__blocks-news ._row .news-center__item:first-child:after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40px;
  height: 20px;
  background: linear-gradient(to right, #fff, rgba(255, 255, 255, 0));
}
.news__blocks-news ._row .news-center__item {
  display: table-cell;
  vertical-align: top;
  padding: 0 30px 30px;
  width: 50%;
  box-sizing: border-box;
}
.news__blocks-news ._row .news-center__item .media-box img {
  display: none;
}
.news__blocks-news ._row + ._row .news-center__item {
  padding-top: 30px;
}
.news__blocks-news ._row + ._row .news-center__item + .news-center__item {
  position: relative;
}
.news__blocks-news ._row + ._row .news-center__item + .news-center__item:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url(../img/shadow-article-top.png) 0 0 no-repeat;
}
.news__blocks-news ._row + ._row .news-center__item + .news-center__item > * {
  position: relative;
  z-index: 1;
}
.short-news-preview a {
  display: block;
  text-decoration: none;
  color: inherit;
  font-size: 18px;
  line-height: 1.22222222;
}
.short-news-preview a:after {
  content: "";
  clear: both;
  display: block;
}
.short-news-preview a:hover ._title {
  color: #0099f1;
}
.short-news-preview img {
  float: left;
  width: 74px;
  border: solid 1px #98989d;
  margin: 0 16px 0 0;
}
.short-news-preview ._section {
  display: block;
  overflow: hidden;
  text-transform: uppercase;
  color: #b3b3b3;
}
.short-news-preview ._title {
  color: inherit;
  transition: all .25s;
}
.fly-social-wrap {
  position: absolute;
  margin-left: -60px;
}
.fly-social {
  width: 45px;
  text-align: center;
}
.fly-social-wrap.start-fly .fly-social {
  position: fixed;
  top: 92px;
}
.fly-social-wrap.stop-fly .fly-social {
  position: relative;
  top: 0;
}
.layout-two-column__aside.start-fly ._inner-fly {
  position: fixed;
  bottom: 30px;
  width: 300px;
}
.layout-two-column__aside.stop-fly ._inner-fly {
  position: absolute;
  width: 300px;
  bottom: auto;
}

/* Photoreport */

.photoreport {
  margin: 0 0 20px;
  overflow: hidden;
}
.photoreport .news-center__top-title a {
  color: inherit;
  text-decoration: none;
}
.photoreport .news-center__top-title a:hover {
  color: #0099f1;
}
.photoreport__top-group {
  position: relative;
  margin-bottom: 4px;
  margin-left: -4px;
  height: 0;
  padding-bottom: 39.02439024%;
}
.photoreport__top-group a {
  position: absolute;
  text-decoration: none;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  box-sizing: border-box;
}
.photoreport__top-group a img {
  opacity: 0;
  width: 100%;
}
.photoreport__top-group a:nth-child(1) {
  left: 4px;
  top: 0;
  bottom: 0;
  width: 75%;
}
.photoreport__top-group a:nth-child(2) {
  right: 0;
  top: 0;
  width: 25%;
  height: 50%;
  border-left: solid 4px #fff;
  border-bottom: solid 2px #fff;
}
.photoreport__top-group a:nth-child(3) {
  right: 0;
  bottom: 0;
  width: 25%;
  height: 50%;
  border-left: solid 4px #fff;
  border-top: solid 2px #fff;
}
.photoreport__top-group a:nth-child(4) {
  right: 0;
  bottom: 0;
  width: 25%;
  height: 33.3%;
  border-left: solid 4px #fff;
  border-top: solid 2px #fff;
}
.photoreport__line-group {
  position: relative;
  margin-bottom: 4px;
  margin-left: -4px;
  height: 0;
  padding-bottom: 19.26829268%;
}
.photoreport__line-group a {
  position: absolute;
  text-decoration: none;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  height: 100%;
  width: 25%;
  box-sizing: border-box;
  border-left: solid 4px #fff;
}
.photoreport__line-group a img {
  opacity: 0;
  width: 100%;
}
.photoreport__line-group a:nth-child(1) {
  left: 0;
}
.photoreport__line-group a:nth-child(2) {
  left: 25%;
}
.photoreport__line-group a:nth-child(3) {
  left: 50%;
}
.photoreport__line-group a:nth-child(4) {
  left: 75%;
}
.photoreport__line-group a:nth-child(4) span {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.4);
    width: 100%;
    height: 100%;
    display: block;
    top: 0px;
    right: 0px;
    color: #fff;
    line-height: 160px;
    text-align: center;
    font-size: 70px;
}
.photoreport__top-group.n10, .photoreport__top-group.n20, .photoreport__top-group.n30, .photoreport__top-group.n40 {
  padding-bottom: 59.02439%;
}
.photoreport__top-group.n10 a:nth-child(1) {
	width: 100%;
}
.photoreport__top-group.n20 a:nth-child(1) {
	width: 50%;
}
.photoreport__top-group.n20 a:nth-child(2) {
	width: 50%;
	height: 100%;
}
.photoreport__top-group.n23 a:nth-child(1), .photoreport__top-group.n33 a:nth-child(1) {
	width: 67.1%;
}
.photoreport__top-group.n23 a:nth-child(2) {
	height: 100%;
	width: 33%;
}
.photoreport__top-group.n33 a:nth-child(2), .photoreport__top-group.n33 a:nth-child(3) {
	height: 50%;
	width: 33%;
}
.photoreport__line-group.n3 a {
	width: 33.55%;
}
.photoreport__line-group.n3 a:nth-child(2) {
	left: 33.55%;
}
.photoreport__line-group.n3 a:nth-child(3) {
	left: 67.1%;
}
.photoreport__top-group.n40 a:nth-child(3) {
	bottom: 33.55%;
}
.photoreport__top-group.n40 a:nth-child(2), .photoreport__top-group.n40 a:nth-child(3) {
	height: 33.3%;
}
/* Rubric */

.rubric-row:after {
  content: "";
  display: block;
  clear: both;
}
.rubric-row .rubric-item {
  overflow: hidden;
  position: relative;
  width: 100%;
}
.rubric-row .rubric-item a {
  display: block;
  text-decoration: none;
}
.rubric-row .rubric-item a:hover .rubric-item__title {
  color: #0099f1;
}
.rubric-row .rubric-item a:hover p {
  color: #fff;
}
.rubric-row .rubric-item a:hover .rubric-item__content {
  background: rgba(0, 0, 0, 0.55);
}
.rubric-row .rubric-item img {
  width: 100%;
  display: block;
}
.rubric-row .rubric-item__content {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.45);
  color: #fff;
  padding: 30px 38px;
  transition: background .25s;
}
.rubric-row .rubric-item time {
  display: block;
  font-size: 14px;
  color: #d0d0d0;
}
.rubric-row .rubric-item__title {
  font-size: 36px;
  line-height: 1.11111111;
  margin: 3px 0 10px;
  font-weight: 900;
  letter-spacing: -0.5px;
  transition: color .25s;
}
.rubric-row .rubric-item p {
  font-size: 20px;
  line-height: 1.2;
  margin: 0;
  color: #e2e2e2;
  transition: color .25s;
}
.rubric-row._double {
  display: table;
  width: 100%;
}
.rubric-row._double._with-ads .rubric-item__txt {
  width: auto;
}
.rubric-row._double .rubric-item__txt {
  width: 50%;
  display: table-cell;
  vertical-align: top;
  padding: 25px 40px 35px;
  box-sizing: border-box;
}
.rubric-row._double .rubric-item__txt:first-child {
  padding: 25px 40px 35px 0;
}
.rubric-row._double .rubric-item__txt:last-child {
  padding: 25px 0 35px 40px;
}
.rubric-row._double .rubric-item__txt time {
  font-size: 14px;
  line-height: 18px;
  color: #828282;
  display: block;
  margin: 0 10px 2px;
}
.rubric-row._double .rubric-item__txt a {
  display: block;
  text-decoration: none;
  color: inherit;
}
.rubric-row._double .rubric-item__txt a:hover {
  color: #0099f1;
}
.rubric-row._double .rubric-item__txt .media-box {
  margin-bottom: 15px;
}
.rubric-row._double .rubric-item__txt .news-center__top-title {
  color: inherit;
  margin: 0 0 15px;
  transition: color .25s;
}
.rubric-row._double .rubric-item__txt p {
  font-size: 20px;
  line-height: 1.2;
  color: #a1a1a1;
  margin: 0;
}
.rubric-row ._item-shadow {
  background: url(../img/shadow-article.png) 100% 100% no-repeat;
}
.rubric-row .news__banner {
  display: table-cell;
  vertical-align: top;
  position: relative;
  float: none;
  width: 280px;
  box-sizing: border-box;
  padding: 45px 40px 45px;
}
.rubric-row .news__banner:first-child {
  padding: 45px 40px 45px 0;
}
.rubric-row .news__banner:last-child {
  padding: 45px 0 45px 40px;
}
.rubric-row .news__banner:after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 40px;
  height: 45px;
  background: linear-gradient(to right, #fff, rgba(255, 255, 255, 0));
}
.action-ajax {
  padding: 25px 0 10px;
  text-align: center;
}
.action-ajax__btn {
  display: inline-block;
  text-align: center;
  width: 292px;
  background: #eaeaea;
  text-decoration: none;
  font-family: 'Boblic', sans-serif;
  font-size: 20px;
  height: 40px;
  line-height: 40px;
  transition: all .25s;
  color: #474747;
  font-weight: 300;
  text-transform: uppercase;
}
.action-ajax__btn:hover {
  background: #0099f1;
  color: #fff;
}


@media (max-width: 1259px) {
  .layout-width .news-group__item {
    min-height: 500px;
  }
  .layout-width .recommend {
    min-height: 576px;
  }
}
@media (min-width: 1260px) {
  .layout-width .news-group {
    background: #f2f2f2;
  }
  .layout-width .news-group__content,
  .layout-width .news-group._inner .news-group__content {
    max-width: 1350px;
    margin: auto;
    float: none;
    overflow: hidden;
    box-sizing: border-box;
    padding: 40px 0;
  }
  .layout-width .container-top-group {
    max-width: 1350px;
    margin: auto;
  }
  .layout-width .short-news .container {
    max-width: 1350px;
    margin: auto;
  }
  .layout-width .slider-short-news .container {
    position: relative;
    padding: 0 40px;
    box-sizing: border-box;
    max-width: 1360px;
  }
  .layout-width .news-center {
    max-width: 1350px;
    margin: auto;
  }
  .layout-width .opinions-list .container {
    box-sizing: border-box;
    max-width: 1350px;
    padding: 0 16px;
  }
  .layout-width .opinions-list .container .opinions-list__item {
    padding: 0 20px 45px;
  }
  .layout-width .news-listing__more {
    display: inline-block;
    font-size: 16px;
    color: inherit;
    margin-top: 35px;
    margin-left: 65px;
    transition: all .25s;
  }
  .layout-width .news-listing__more:hover {
    color: #0099f1;
  }
  .layout-width .slider-news .container {
    max-width: 1350px;
    margin: 0 auto;
    box-sizing: border-box;
    padding: 0 20px;
  }
  .layout-width .slider-news .container .slider-news__content {
    margin: 0 -20px;
  }
  .layout-width .slider-news .container .slider-news__list-content {
    padding: 0 20px 10px;
  }
  .layout-width .banner-full .container {
    max-width: 1350px;
    margin: auto;
    box-sizing: border-box;
  }
  .layout-width .users-choose {
    padding: 35px 0 10px;
  }
  .layout-width .users-choose .container {
    max-width: 1350px;
    margin: auto;
    box-sizing: border-box;
    padding: 0 20px;
  }
  .layout-width .persons-preview {
    padding: 40px 0 40px 20px;
  }
  .layout-width .persons-preview .container {
    max-width: 1350px;
    margin: auto;
    box-sizing: border-box;
  }
  .layout-width .persons-preview__search {
    float: left;
    width: 25%;
    width: calc(25% - 36px);
  }
  .layout-width .persons-preview__list {
    padding-left: 40px;
    padding-right: 40px;
  }
  .layout-width .persons-preview__list ul {
    margin-right: -20px;
  }
  .layout-width .persons-preview__list ul li {
    padding-right: 40px;
    width: 25%;
  }
  .layout-width .persons-preview__list ul li:nth-child(4n + 1) {
    clear: both;
  }
  .layout-width .persons-preview__list ul li:nth-child(20) ~ li {
    display: none;
  }
  .layout-width .footer .container {
    max-width: 1350px;
    margin: auto;
    box-sizing: border-box;
    padding: 0;
  }
  .layout-width .footer .footer__column {
    padding: 0 20px;
  }
}
@media (min-width: 1260px) {
  .top-news {
    padding-right: 50%;
    margin-right: -50%;
    padding-left: 35px;
  }
  .top-news__title {
    margin-right: 30px;
  }
  .top-news__media {
    margin-right: 30px;
  }
  .top-news__list {
    width: 50%;
    padding-right: 360px;
    padding-left: 17px;
    margin-right: -360px;
    padding-top: 37px;
  }
  .top-news__list ul > li {
    padding: 23px 0;
  }
  .recommend {
    height: auto;
    margin-top: 0;
  }
  .news-group {
    margin: 0;
  }
  .news-group__content {
    margin: 0;
    padding: 40px 17px 40px 18px;
  }
  .news-group__item {
    min-height: 2em;
    width: 25%;
    padding: 0 18px 0 17px;
  }
  .slider-short-news {
    padding: 40px;
  }
  .slider-short-news__prev a,
  .slider-short-news__next a {
    width: 40px;
  }
  .slider-short-news__banner img {
    right: 40px;
  }
  .news-center._three-column .news-center__item,
  .news-center._four-column .news-center__item {
    padding-left: 35px;
    padding-right: 35px;
  }
  .news-center._three-column .news-center__item:last-child,
  .news-center._four-column .news-center__item:last-child {
    padding-right: 35px;
  }
  .opinions-list {
    padding: 50px 5px;
  }
  .opinions-list__item {
    padding: 0 30px 45px;
  }
  .slider-news .container {
    padding: 0 35px;
  }
  .slider-news__content {
    margin: 0 -35px;
  }
  .slider-news__list-content {
    padding: 0 30px 10px;
  }
  .users-choose {
    padding: 35px 35px 10px;
  }
  .users-choose .container {
    padding: 0;
  }
  .users-choose__list {
    margin-right: -35px;
    margin-left: 0;
  }
  .users-choose__list li {
    width: 25%;
    margin-bottom: 30px;
    padding-right: 35px;
  }
  .users-choose__list li:nth-child(3n + 1) {
    clear: none;
  }
  .users-choose__list li:nth-child(4n + 1) {
    clear: both;
  }
  .users-choose__list li:nth-child(20) ~ li {
    display: none;
  }
  .persons-preview {
    padding: 40px 0 40px 35px;
  }
  .persons-preview__search {
    float: left;
    width: 25%;
    width: calc(25% - 35px);
  }
  .persons-preview__list {
    padding-left: 35px;
    padding-right: 35px;
  }
  .persons-preview__list ul {
    margin-right: -35px;
  }
  .persons-preview__list ul li {
    padding-right: 35px;
  }
  .footer .container {
    padding: 0 18px 0 17px;
  }
  .footer__column {
    padding: 0 17px 40px 18px;
  }
  .footer .copyright {
    margin-left: 17px;
  }
  .footer .reg-info {
    margin-right: 18px;
  }
}
@media (max-width: 1259px) {
  .persons-preview__list ul li {
    width: 50%;
  }
  .persons-preview__list ul li:nth-child(2n + 1) {
    clear: both;
  }
  .persons-preview__list ul li:nth-child(8) ~ li {
    display: none;
  }
  .users-choose__list li {
    width: 33.333%;
    margin-bottom: 30px;
    padding-left: 20px;
  }
  .users-choose__list li:nth-child(15) ~ li {
    display: none;
  }
  .news-listing__chosen li:nth-child(3) ~ li {
    display: none;
  }
  .news-listing li:nth-child(7) ~ li {
    display: none;
  }
  .persons-preview__list {
    padding-left: 20px;
  }
  .short-news {
    padding: 40px 10px;
  }
  .short-news .slider-short-news__item {
    width: 33.333%;
    padding: 0 10px;
  }
  .short-news .slider-short-news__item:nth-child(3) ~ .slider-short-news__item {
    display: none;
  }
  .news-group._inner .news-group__content {
    margin-right: 0;
    padding: 40px 10px;
  }
  .news-group._inner .news-group__item {
    width: 33.333%;
    padding: 0 10px;
  }
  .news-group._inner .news-group__item:nth-child(3) ~ .news-group__item {
    display: none;
  }
  .opinions-list__item {
    width: 33.333%;
  }
  .opinions-list__item:nth-child(3) ~ .opinions-list__item {
    display: none;
  }
  .news-listing li:nth-child(9) ~ li {
    display: none;
  }
  .news-center._four-column .news-center__item {
    width: 33.333%;
  }
  .news-center._four-column .news-center__item:nth-child(3) {
    display: none;
  }
  .layout-two-column {
    padding: 0 20px;
  }
  .layout-two-column__main {
    margin-right: -360px;
    padding: 0 360px 0 80px;
  }
  .layout-two-column__aside {
    padding: 20px 20px 14980px;
    width: 340px;
  }
  .news__more-news {
    max-width: 300px;
    padding: 12px 20px 20px;
    margin: -0.5em -20px 1em 20px;
  }
  .news__blocks-news {
    margin-left: -20px;
  }
  .news__blocks-news .news__blocks-news {
    padding: 0 20px 20px;
  }
  .news__blocks-news ._row + ._row .news-center__item {
    padding: 20px;
  }
  .news__blocks-news .news-center__item:first-child {
    position: relative;
  }
  .news__blocks-news .news-center__item:first-child:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40px;
    height: 20px;
    background: linear-gradient(to right, #fff, rgba(255, 255, 255, 0));
  }
  .fly-social-wrap.start-fly .fly-social {
    top: 64px;
  }
}
/*@media (max-width: 1600px) and (min-width: 1260px) {
    .persons-preview__list ul {
        li {
            width: 33.333%;

            &:nth-child(3n + 1) {
                clear: both;
            }

            &:nth-child(12) ~ li {
                display: none;
            }
        }
    }
}*/

@media (max-width: 1279px) {
  .rubric-row .rubric-item__content {
    padding: 20px;
  }
  .rubric-row .rubric-item__title {
    font-size: 28px;
  }
  .rubric-row .rubric-item p {
    font-size: 18px;
  }
  .rubric-row._double .rubric-item__txt p {
    font-size: 16px;
  }
  .rubric-row._double .rubric-item__txt:last-child {
    padding: 20px 0 20px 20px;
  }
  .rubric-row._double .rubric-item__txt:first-child {
    padding: 20px 20px 20px 0;
  }
  .rubric-row .news__banner:first-child {
    padding: 40px 20px 20px 0;
    width: 260px;
  }
  .rubric-row .news__banner:last-child {
    padding: 40px 0 20px 20px;
    width: 260px;
  }
  .rubric-row._double .rubric-item__txt .news-center__top-title {
    font-size: 22px;
  }
  .primary-nav {
    font-size: 14px;
  }
  
}


@media (min-width: 1341px) {
  #wrap {
    padding-top: 83px;
  }
  .header {
    height: 76px;
  }
  .header__logo {
    line-height: 68px;
  }
  .header__logo img {
    height: 46px;
  }
  .header__currency {
    height: 68px;
  }
  .header__currency li {
    line-height: 68px;
    font-size: 20px;
  }
  .header__currency img {
	height: 48px;
	margin-top: 10px;
  }
  .header__search {
    width: 68px;
    height: 68px;
    margin-left: 10px;
  }
  .header__search form {
    height: 64px;
    right: 66px;
  }
  .header__search form input {
    line-height: 64px;
    font-size: 20px;
  }
  .header__search.show-form form {
    width: 250px;
  }
  .header__drop-navi {
    font-size: 24px;
  }
  .primary-nav {
    height: 68px;
    font-size: 20px;
    margin-left: 20px;
    max-width: calc(100% - 545px);
  }
  .primary-nav > li > a {
    line-height: 68px;
    padding: 0 20px;
  }
  .toggle-drop-navi {
    padding: 22px 20px;
    height: 68px;
  }
  .toggle-drop-navi i {
    width: 36px;
  }
  .toggle-drop-navi i + i {
    margin-top: 6px;
  }
  .toggle-search {
    width: 64px;
    height: 64px;
  }
  .toggle-search .icon-search {
    top: 3px;
    position: relative;
  }
  .icon-search {
    width: 32px;
    height: 32px;
    background-size: 32px 32px;
  }
}
@media (min-width: 11601px) {
  #wrap {
    padding-top: 105px;
  }
  .top-news {
    padding-left: 72px;
  }
  .top-news__title {
    margin-right: 72px;
    font-size: 54px;
  }
  .top-news__media {
    margin-right: 72px;
  }
  .top-news__media .media-box {
    height: 350px;
  }
  .top-news__list {
    width: 50%;
    padding-right: 432px;
    padding-left: 10px;
    margin-right: -432px;
    padding-top: 37px;
  }
  .top-news__list ul {
    max-width: 470px;
  }
  .top-news__list ul > li {
    padding: 25px 0;
  }
  .top-news__list ._arrow {
    left: -42px;
    text-align: center;
    width: 42px;
    font-size: 24px;
  }
  .recommend {
    padding-right: 72px;
    width: 392px;
  }
  .news-group {
    margin: 0;
  }
  .news-group__content {
    margin: 0;
    padding: 40px 36px;
  }
  .news-group__item {
    min-height: 2em;
    width: 20%;
    padding: 0 36px 0 36px;
  }
  .news-group._inner .news-group__content {
    margin-right: 0;
    padding: 40px 36px;
  }
  .news-group._inner .news-group__item {
    min-height: 2em;
    padding: 0 36px 0 36px;
  }
  .slider-short-news {
    padding: 40px 72px;
  }
  .slider-short-news__content {
    margin-right: 372px;
  }
  .slider-short-news__prev a,
  .slider-short-news__next a {
    width: 72px;
  }
  .slider-short-news__banner img {
    right: 72px;
  }
  .news-center {
    padding-left: 0;
  }
  .news-center._three-column .news-center__item {
    padding-left: 62px;
    padding-right: 62px;
  }
  .news-center._three-column .news-center__item:last-child {
    padding-right: 62px;
  }
  .news-center._four-column .news-center__item {
    padding-left: 36px;
    padding-right: 36px;
  }
  .news-center__top p {
    line-height: 1;
  }
  .news-listing > li:nth-child(9) ~ li {
    display: none;
  }
  .news-listing__more {
    display: inline-block;
    font-size: 16px;
    color: inherit;
    margin-top: 35px;
    margin-left: 65px;
    transition: all .25s;
  }
  .news-listing__more:hover {
    color: #0099f1;
  }
  .opinions-list {
    padding: 50px 36px;
  }
  .opinions-list__item {
    padding: 0 36px 45px;
  }
  .news-listing__chosen > li {
    padding: 25px 0;
    font-size: 20px;
  }
  .news-listing__chosen > li:nth-child(3) ~ li {
    display: none;
  }
  .news-listing__chosen-title {
    font-size: 28px;
  }
  .slider-news .container {
    padding: 0 36px;
  }
  .slider-news__content {
    margin: 0 -36px;
  }
  .slider-news__list-content {
    padding: 0 36px 10px;
  }
  .users-choose {
    padding: 35px 72px 10px;
  }
  .users-choose .container {
    padding: 0;
  }
  .users-choose__list {
    margin-right: -36px;
    margin-left: 0;
  }
  .users-choose__list li {
    padding-right: 36px;
    padding-left: 0;
  }
  .persons-preview {
    padding: 40px 0 40px 72px;
  }
  .persons-preview__search {
    float: left;
    width: 25%;
    width: calc(25% - 36px);
  }
  .persons-preview__list {
    padding-left: 36px;
    padding-right: 72px;
  }
  .persons-preview__list ul {
    margin-right: -36px;
  }
  .persons-preview__list ul li {
    padding-right: 36px;
    width: 25%;
  }
  .persons-preview__list ul li:nth-child(4n + 1) {
    clear: both;
  }
  .persons-preview__list ul li:nth-child(20) ~ li {
    display: none;
  }
  .footer .container {
    padding: 0 36px;
  }
  .footer__column {
    padding: 0 36px 40px;
  }
  .footer .copyright {
    margin-left: 36px;
  }
  .footer .reg-info {
    margin-right: 36px;
  }
}
/* BLOGGER */
.author-blogger {
  margin: 0 0 10px;
}
.author-blogger__head {
  position: relative;
  height: 122px;
}
.author-blogger__head img {
  position: absolute;
  right: 0;
  bottom: 0;
  width: auto;
  height: 122px;
}
.author-blogger__name {
  text-transform: uppercase;
  position: absolute;
  left: 0;
  bottom: 2px;
  line-height: 1.14285714;
  font-family: 'Boblic', sans-serif;
  font-size: 28px;
}
.author-blogger__name span {
  text-transform: none;
  color: #c5c5c5;
}
.author-blogger__info {
  border-top: solid 2px #dadada;
  border-bottom: solid 2px #dadada;
  padding: 20px 0 20px 54px;
  font-size: 20px;
}
.news__author-blogger {
  position: relative;
  box-sizing: border-box;
  padding: 0 90px 8px 18px;
  min-height: 58px;
  line-height: 1.14285714;
  font-family: 'Boblic', sans-serif;
  background: #e9e9e9;
  overflow: hidden;
  margin: -10px auto 20px;
  font-size: 28px;
}
.news__author-blogger a {
  color: #434343;
  text-decoration: none;
}
.news__author-blogger:before {
  content: "";
  display: block;
  height: 10px;
  background: #fff;
  margin: 0 -90px 10px -18px;
}
.news__author-blogger img {
  position: absolute;
  bottom: 0;
  right: 10px;
  width: auto;
  height: 58px;
}
.news__author-blogger-name {
  text-transform: uppercase;
}
.news__author-blogger-name span {
  text-transform: none;
  color: #fff;
}
.rubric-item__txt._item-shadow-reflect {
  background: url(../img/shadow-article-top.png) 0 0 no-repeat;
  position: relative;
}
.rubric-item__txt._item-shadow-reflect:before {
  content: "";
  position: absolute;
  right: 0;
  top: 0;
  width: 40px;
  height: 45px;
  background: linear-gradient(to left, #fff, rgba(255, 255, 255, 0));
}
.blogger {
  display: block;
  position: relative;
  text-decoration: none;
  color: inherit;
  transition: color .25s;
  padding: 0 170px 0 0;
  margin: 0 0 20px;
  border-bottom: solid 2px #dadada;
  height: 122px;
}
.blogger img {
  position: absolute;
  height: 122px;
  bottom: 0;
  right: 0;
}
.blogger__name {
  text-transform: uppercase;
  position: absolute;
  left: 0;
  bottom: 0;
  line-height: 1;
  font-family: 'Boblic', sans-serif;
  font-size: 28px;
  z-index: 1;
  padding: 9px 12px 4px 0;
  background: rgba(255, 255, 255, 0.65);
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.75) 12px, rgba(255, 255, 255, 0.75));
}
.blogger__info {
  font-size: 20px;
  color: #a1a1a1;
  margin: 0 0 16px;
  padding: 0 0 15px;
  border-bottom: solid 1px #dadada;
}
.blogger__articles {
  list-style: none;
  padding: 0 0 10px;
  margin: 0;
  font-family: 'Boblic', sans-serif;
  font-size: 24px;
  line-height: 1;
}
.blogger__articles a {
  transition: color .25s;
}
.blogger__articles li + li {
  margin-top: 10px;
}

/** Persons */
.author-person, .author-weapon {
}
.author-person .author-person__head, .author-weapon .author-weapon__head {
	background: url(../img/shadow-article.png) 100% 100% no-repeat;
	padding: 25px 40px 35px 0;
	width: 240px;
	float: left;
	margin: 0 32px 1em 0;
}
.author-person .author-person__info {
}
.author-person .author-person__info .author-person__name, .author-weapon .weapon-weapon__info .author-weapon__name {
  font-weight: 900;
  font-size: 36px;
  line-height: 1;
  margin: 0 0 30px;
  color: #080a23;
}
.author-person .author-person__info .author-person__name span, .author-weapon .weapon-weapon__info .author-weapon__name span {
	display: block;
	font-size: 24px;
	color: #c5c5c5;
	font-weight: 400;
}
.author-person .author-person__info .person_info {
	color: #626262;
	font-size: 20px;
}
.author-person .author-person__info .person_info li {
	list-style: none;
}
.author-person .author-person__info .person_info span {
	color: #080a23;
	font-weight: 900;
}
.author-person .article__anons.person, .author-weapon .article__anons.weapon {
    margin-bottom: 32px;
}
.author-person .article__anons.person a, .author-weapon .article__anons.weapon a, .author-person .author-person__info .person_info span a {
    color: inherit;
    text-decoration: underline;
    text-decoration-color: #0099f1;
}

.author-person .article__anons.person a:hover, .author-weapon .article__anons.weapon a:hover {
  color: #0099f1;
}
.foot-adv .foot__adv {
	max-width: 1350px;
	margin: 30px auto 10px auto;
	
}

/** ARCHIVE */
.news ._item-shadow {
	padding-bottom: 25px;
}
.news .years {
	margin: 10px 0px;
	padding: 0px;
}
.news .years li {
	display: inline;
	margin-right: 10px;
}
.news .years li a {
	font-family: Boblic, sans-serif;
	color: #626262;
	font-size: 18px;
	text-decoration: none;
}
.news .years li.current a {
	text-decoration: underline;
}
table.year {
	margin-left: 10px;
	width: 100%;
	font-family: Boblic, sans-serif;
	font-size: 12px;
	text-transform: uppercase;
	color: #626262;
}
table.year th.year {
	background-color: #e9e9e9;
	font-size: 17px;
	padding: 10px;
}
table.year table.month {
	margin: 10px 0px;
	width: 102px;
	margin-right: 10px;
}
table.year td:last-child table.month {
	margin-right: 0px;
}
table.month th.month {
	background-color: #e9e9e9;
}
table.year table.month td {
	color: #b5b5b5;
}
table.year table.month td a {
	color: #454545;
}
table.year table.month td.sun {
	color: #f8cec5;
}
table.year table.month td.sun a {
	color: #fb0202;
}
/** END ARCHIVE */

/** VARIABLES
===================================*/
/** RESET AND LAYOUT
===================================*/
.bx-wrapper {
  position: relative;
  padding: 0;
  *zoom: 1;
  -ms-touch-action: pan-y;
  touch-action: pan-y;
}
.bx-wrapper img {
  max-width: 100%;
  display: block;
}
.bxslider {
  margin: 0;
  padding: 0;
}
ul.bxslider {
  list-style: none;
}
.bx-viewport {
  /*fix other elements on the page moving (on Chrome)*/
  -webkit-transform: translatez(0);
}
/** THEME
===================================*/
.bx-wrapper .bx-pager,
.bx-wrapper .bx-controls-auto {
  position: absolute;
  bottom: -30px;
  width: 100%;
}
/* LOADER */
.bx-wrapper .bx-loading {
  min-height: 50px;
  background: url('images/bx_loader.gif') center center no-repeat #ffffff;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2000;
}
/* PAGER */
.bx-wrapper .bx-pager {
  text-align: center;
  font-size: .85em;
  font-family: Arial;
  font-weight: bold;
  color: #666;
  padding-top: 20px;
}
.bx-wrapper .bx-pager.bx-default-pager a {
  background: #666;
  text-indent: -9999px;
  display: block;
  width: 10px;
  height: 10px;
  margin: 0 5px;
  outline: 0;
  border-radius: 5px;
}
.bx-wrapper .bx-pager.bx-default-pager a:hover,
.bx-wrapper .bx-pager.bx-default-pager a.active,
.bx-wrapper .bx-pager.bx-default-pager a:focus {
  background: #000;
}
.bx-wrapper .bx-pager-item,
.bx-wrapper .bx-controls-auto .bx-controls-auto-item {
  display: inline-block;
  vertical-align: bottom;
  *zoom: 1;
  *display: inline;
}
.bx-wrapper .bx-pager-item {
  font-size: 0;
  line-height: 0;
}
/* DIRECTION CONTROLS (NEXT / PREV) */
.bx-wrapper .bx-prev {
  left: 10px;
  background: url('images/controls.png') no-repeat 0 -32px;
}
.bx-wrapper .bx-prev:hover,
.bx-wrapper .bx-prev:focus {
  background-position: 0 0;
}
.bx-wrapper .bx-next {
  right: 10px;
  background: url('images/controls.png') no-repeat -43px -32px;
}
.bx-wrapper .bx-next:hover,
.bx-wrapper .bx-next:focus {
  background-position: -43px 0;
}
.bx-wrapper .bx-controls-direction a {
  position: absolute;
  top: 50%;
  margin-top: -16px;
  outline: 0;
  width: 32px;
  height: 32px;
  text-indent: -9999px;
  z-index: 9999;
}
.bx-wrapper .bx-controls-direction a.disabled {
  display: none;
}
/* AUTO CONTROLS (START / STOP) */
.bx-wrapper .bx-controls-auto {
  text-align: center;
}
.bx-wrapper .bx-controls-auto .bx-start {
  display: block;
  text-indent: -9999px;
  width: 10px;
  height: 11px;
  outline: 0;
  background: url('images/controls.png') -86px -11px no-repeat;
  margin: 0 3px;
}
.bx-wrapper .bx-controls-auto .bx-start:hover,
.bx-wrapper .bx-controls-auto .bx-start.active,
.bx-wrapper .bx-controls-auto .bx-start:focus {
  background-position: -86px 0;
}
.bx-wrapper .bx-controls-auto .bx-stop {
  display: block;
  text-indent: -9999px;
  width: 9px;
  height: 11px;
  outline: 0;
  background: url('images/controls.png') -86px -44px no-repeat;
  margin: 0 3px;
}
.bx-wrapper .bx-controls-auto .bx-stop:hover,
.bx-wrapper .bx-controls-auto .bx-stop.active,
.bx-wrapper .bx-controls-auto .bx-stop:focus {
  background-position: -86px -33px;
}
/* PAGER WITH AUTO-CONTROLS HYBRID LAYOUT */
.bx-wrapper .bx-controls.bx-has-controls-auto.bx-has-pager .bx-pager {
  text-align: left;
  width: 80%;
}
.bx-wrapper .bx-controls.bx-has-controls-auto.bx-has-pager .bx-controls-auto {
  right: 0;
  width: 35px;
}
/* IMAGE CAPTIONS */
.bx-wrapper .bx-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  background: #666;
  background: rgba(80, 80, 80, 0.75);
  width: 100%;
}
.bx-wrapper .bx-caption span {
  color: #fff;
  font-family: Arial;
  display: block;
  font-size: .85em;
  padding: 10px;
}
/* ==========================================================================
   Helper classes
   ========================================================================== */
/*
 * Hide visually and from screen readers
 */
.hidden {
  display: none !important;
}
/*
 * Hide only visually, but have it available for screen readers:
 * http://snook.ca/archives/html_and_css/hiding-content-for-accessibility
 */
.visuallyhidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}
.visuallyhidden.focusable:active,
.visuallyhidden.focusable:focus {
  clip: auto;
  height: auto;
  margin: 0;
  overflow: visible;
  position: static;
  width: auto;
}
.invisible {
  visibility: hidden;
}
.clearfix:before,
.clearfix:after {
  content: " ";
  display: table;
}
.clearfix:after {
  clear: both;
}
/* ==========================================================================
   Print styles.
   Inlined to avoid the additional HTTP request:
   http://www.phpied.com/delay-loading-your-print-css/
   ========================================================================== */
@media print {
  *,
  *:before,
  *:after,
  *:first-letter,
  *:first-line {
    background: transparent !important;
    color: #000 !important;
    /* Black prints faster:
                                   http://www.sanbeiji.com/archives/953 */
    box-shadow: none !important;
    text-shadow: none !important;
  }
  a,
  a:visited {
    text-decoration: underline;
  }
  a[href]:after {
    content: " (" attr(href) ")";
  }
  abbr[title]:after {
    content: " (" attr(title) ")";
  }
  /*
     * Don't show links that are fragment identifiers,
     * or use the `javascript:` pseudo protocol
     */
  a[href^="#"]:after,
  a[href^="javascript:"]:after {
    content: "";
  }
  pre,
  blockquote {
    border: 1px solid #999;
    page-break-inside: avoid;
  }
  /*
     * Printing Tables:
     * http://css-discuss.incutio.com/wiki/Printing_Tables
     */
  thead {
    display: table-header-group;
  }
  tr,
  img {
    page-break-inside: avoid;
  }
  img {
    max-width: 100% !important;
  }
  p,
  h2,
  h3 {
    orphans: 3;
    widows: 3;
  }
  h2,
  h3 {
    page-break-after: avoid;
  }
}
.news-section__list {
  list-style: none;
  padding: 0;
  margin: 0 0 50px 0px;
}
.news-section__list li {
  border-top: solid 1px #dadada;
  margin: 16px 0px;
}
.news-section__list li:first-child {
  border-top: 0px none;
}
.news-section__list a {
  display: block;
  position: relative;
  color: #000;
  padding: 1em 0 0 3rem;
  font-size: 18px;
  line-height: 0.91666667;
  font-family: 'Ubuntu Condensed', sans-serif;
  text-decoration: none;
}
.news-section__list a:before {
  content: '';
  position: absolute;
  left: .3rem;
  top: 1.3rem;
  width: .8rem;
  height: .8rem;
  border-radius: .8rem;
  background: #4fb9f5;
}
.news__social {
  margin: 3rem 0 3rem;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
      justify-content: center;
  font-size: 2rem;
  line-height: 4.8rem    
}
.news__social a {
  width: 4.8rem;
  height: 4.8rem;
  background: #929292;
  border-radius: 4.8rem;
  text-align: center;
  line-height: 4.8rem;
  color: #fff;
  font-size: 2.4rem;
  text-decoration: none;
  margin: 0 1rem;
}
.news__social a:hover {
  background: #0099f1;
}

.footnote { font-size: 13px; }

/*
.header.small { height: 48px; }
.header.small .header__logo { line-height: 40px; background-position-y: 8px; }
.header.small .header__logo img { height: 26px; }
.header.small .header__currency { height: 40px; }
.header.small .header__currency li { line-height: 40px; font-size: 16px; }
.header.small .header__search { height: 40px; width: 40px; margin-left: 0; }
.header.small .header__search form { height: 36px; right: 38px; }
.header.small .header__search for input { line-height: 36px; font-size: 16px; }
.header.small .header__search.show-form form { width: 220px; }
.header.small .header__drop-navi { font-size: 18px; }
.header.small .toggle-search { width: 36px; height: 36px; }
.header.small .icon-search { height: 18px; width: 18px; background-size: 18px 18px; top: 0; }
.header.small .toggle-drop-navi { height: 40px; padding: 0 12px; }
.header.small .toggle-drop-navi i { width: 19px; margin-top: 5px; }
.header.small .primary-nav { height: 40px; font-size: 16px; margin-left: 12px; }
.header.small .primary-nav li a { line-height: 40px; padding: 0 15px; }
.header.small .toggle-drop-navi { background: url(/static/img/fifa/ball_small.png) no-repeat center !important; }

.header {
	background: url(/static/img/fifa/bg.jpg) no-repeat center;
	-webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
}
.header__drop-navi {
	background: #07680a;
}
.toggle-drop-navi {
	background: url(/static/img/fifa/ball.png) no-repeat center !important;
} 
.toggle-drop-navi i {
	visibility: hidden;	
}

.icon-search {
  background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE3LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIyMy44MDhweCIgaGVpZ2h0PSIyMy44NTFweCIgdmlld0JveD0iMCAwIDIzLjgwOCAyMy44NTEiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDIzLjgwOCAyMy44NTEiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8cGF0aCBmaWxsPSIjMmY4NjNlIiBkPSJNMjMuMzg1LDIxLjc2M2wtNi41OTQtNi41NDNjMS4yNjItMS42MDEsMi4wMjEtMy42MTcsMi4wMjEtNS44MTRDMTguODEzLDQuMjExLDE0LjYwMSwwLDkuNDA2LDAKCVMwLDQuMjExLDAsOS40MDZzNC4yMTEsOS40MDYsOS40MDYsOS40MDZjMi4xMzcsMCw0LjEwMS0wLjcyMSw1LjY4MS0xLjkyMmw2LjY3MSw2LjYyMWwwLjAxMS0wLjAxMQoJYzAuMjE2LDAuMjE2LDAuNTE1LDAuMzUsMC44NDQsMC4zNWMwLjY1OSwwLDEuMTk0LTAuNTM1LDEuMTk0LTEuMTk0QzIzLjgwOCwyMi4yOTUsMjMuNjM5LDIxLjk4MiwyMy4zODUsMjEuNzYzeiBNOS40MDYsMTYuMzc1CgljLTMuODQ5LDAtNi45NjktMy4xMi02Ljk2OS02Ljk2OXMzLjEyLTYuOTY5LDYuOTY5LTYuOTY5czYuOTY5LDMuMTIsNi45NjksNi45NjlTMTMuMjU1LDE2LjM3NSw5LjQwNiwxNi4zNzV6Ii8+Cjwvc3ZnPgo=) 0 0 / auto 100% no-repeat;
}
*/