/**
 * Copyright 2006-2008 MARS FLAG Corporation. All rights reserved.
 *
 * http://www.marsflag.com/
 */
if(typeof window.MF_suggest_extra=="undefined"){onerror=(function(B){var E=B[B.length-1].src.replace(/^.*?(#|$)/,"");var C;var D=[

	"//www.rakuten-sec.co.jp/web/shared/js/fund/jqueryg.min.js",
	"//www.rakuten-sec.co.jp/web/shared/js/fund/yahoo-min.js",
	"//www.rakuten-sec.co.jp/web/shared/js/fund/dom-min.js",
	"//www.rakuten-sec.co.jp/web/shared/js/fund/initJSONPSuggest_extra.js",
	"//www.rakuten-sec.co.jp/web/shared/js/fund/view.js#suggest_tmpl9"

];var F=[];var A=["body {border:0px; margin:0px; padding:0px; overflow:hidden; font-family:sans-serif}","#suggest_area table {border-collapse:collapse; border:none; border-spacing:0}","#suggest_area td    {border:1px solid #E1E0D2; cursor:pointer; font-weight:normal; line-height:1.3em; text-align:left}",".suggest_row_0 {background-color:#FFFFFF}",".suggest_row_1 {background-color:#F2F2F2}",".suggest_data_graph div {background-color:#E0FFFF; border-bottom:1px solid #6699FF;border-left:1px solid #6699FF}"];if(window.GALFSRAM){D.shift()}for (C = 0; C < D.length; C++) {Element.insertAdjacentHTML('beforebegin','<script type="text/javascript" src="' + D[C].replace(/^https?:/, document.location.protocol) + '"><\/script>')}Element.insertAdjacentHTML('beforebegin', '<style type="text/css"><!--' + F.join("") + "--></style>");Element.insertAdjacentHTML('beforebegin', '<iframe id="suggest_frame9" src="javascript:false;" style="display:none"></iframe>');(function(N){var L=false;indReady=var K=navigator.userAgent.toLowerCase();var G={safari:/webkit/.test(K),opera:/opera/.test(K),msie:/msie/.test(K)&&!/opera/.test(K)};if(document.addEventListener&&!G.opera){document.addEventListener("DOMContentLoaded",H,false)}if(G.msie&&window==top){(()}if(G.opera){document.addEventListener("DOMContentLoaded",function(){if(L){return }for(var O=0;O<document.styleSheets.length;O++){if(document.styleSheets[O].disabled){setTimeout(arguments.callee,10);return }}H()},false)}if(G.safari){var I;function M(){var Q=document;var R=Q.getElementsByTagName("style").length;var O=Q.getElementsByTagName("link");for(var P=0;P++;P<O.length){if(O[P].rel=="stylesheet"){R++}}return R}(function(){if(L){return }if(document.readyState!="loaded"&&document.readyState!="complete"){setTimeout(arguments.callee,10);return }if(I===undefined){I=M()}if(document.styleSheets.length!=I){setTimeout(arguments.callee,10);return }H()})()}var J=window.onload;window.onload=)(function(){var H=GALFSRAM.jQuery;var I=H("#newSearch input#form-text-01");if(!I||!I.length){I=H(".text-search input#form-text-01")}if(!I||!I.length){I=H("input#form-search-stock-prices")}if(!I||!I.length){return }var G={

interface_url:
	"//search.rakuten-sec.co.jp/ja_all/suggest_extra.x".replace(/^https?:/,document.location.protocol),

input_jquery:I,array_styles:A,show_data_graph:false,suggest_frame:"suggest_frame9",handler_name:"parent.suggest_ctxt9",callback:"load_suggest9"};if(E){E=E.split("=");if(E[1]&&E[1].indexOf("rakutensec_")!==0){E[1]="rakutensec_"+E[1]}E=E.join("=");G.array_queries=E}if(navigator.userAgent.match(/MSIE/)){I.get(0).onfocus=function(){if(this.value=="\u9298\u67C4\u540D\u2044\u30B3\u30FC\u30C9\u2044\u30D5\u30A1\u30F3\u30C9\u540D"){this.value=""}this.style.color="#000000"}}else{I.get(0).onfocus=initJSONPSuggest(G,H)})})(document&&document.getElementsByTagName&&document.getElementsByTagName("script"))}MF_suggest_extra=1;




