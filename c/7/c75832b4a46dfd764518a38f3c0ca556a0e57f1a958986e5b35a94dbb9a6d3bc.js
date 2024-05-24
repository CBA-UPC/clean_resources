function _rrCodeRun(arr) {
    while (arr.length) {
	var fnc = arr.splice(0, 1)[0];
	fnc();
     }
 }
window._rrCodeSt = 0;
window._rrCodeLoad = window._rrCodeLoad || [];
window._rrCode = window._rrCode || [];
_rrCodeRun(_rrCodeLoad);


    $(document).ready(function () {
        $(window).scroll(function () {
            if (!_rrCodeSt) {
                _rrCodeSt = 1;
                _rrCodeRun(_rrCode);
            }
        });    
    });

function loadJSFile(filename,id='') { 
    var jscodef = document.createElement('script');
    jscodef.setAttribute("type", "text/javascript");
    jscodef.setAttribute("src", filename);
    if(id){
        jscodef.setAttribute("id", id);
    }
    document.body.appendChild(jscodef);
}


/*! lozad.js - v1.9.0 - 2019-02-09
* https://github.com/ApoorvSaxena/lozad.js
* Copyright (c) 2019 Apoorv Saxena; Licensed MIT */
!this,;
/*! lozad.js - v1.9.0 - 2019-02-09*/