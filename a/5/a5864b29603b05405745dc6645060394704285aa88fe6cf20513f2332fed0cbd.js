/*!
######################################################
# ORA_CODE_DYN.JS
# VERSION: 1.02
# ORIGINAL BUILD DATE: 6-March-2019
# COPYRIGHT ORACLE CORP 2019 [UNLESS STATED OTHERWISE]
######################################################
*/
var siteID="";var language="";
/*! REPORT SUITE SET UP */
function s_setAccount(){var sa=["oraclenewreportsuite2,oracleglobal","dyn","en-us"];if(location.host.indexOf("-stage")!=-1||location.host.indexOf("dev-")!=-1||location.host.indexOf("-dev")!=-1||location.host.indexOf("webstandards-us")!=-1||location.host.indexOf("localhost")!=-1){var sa=["devoraclecom","dyn","en-us"];}else{var sa=["oraclenewreportsuite2,oracleglobal","dyn","en-us"];}siteID=sa[1];language=sa[2];return sa;}
/*! PrePlugins */
function s_prePlugins(s){var oraVersionLocal=":dyn:1.02";oraVersion=(oraVersion.indexOf(":dyn")==-1)?oraVersion+oraVersionLocal:oraVersion.substr(0,oraVersion.indexOf(":dyn"))+oraVersionLocal;s.linkInternalFilters="javascript:,dyn.";if(location.href.indexOf(":8888")||location.href.indexOf("webstandards-us")){s.linkInternalFilters="javascript:,localhost,webstandards-us.oracle.com,dyn.";}var hostName=document.location.hostname.split(".");var pathName=document.location.pathname;if(location.href.indexOf("dyn.com")==-1){s.pageName=siteID+":"+language+":/"+hostName[1]+pathName;}}
/*! PostPlugins */
function s_postPlugins(s){if(typeof(s_eVar24)!="undefined"){s.eVar24=s_eVar24;}else{s.eVar24="no value";}}
/*! Test and Flag for jQuery */

/*! JQUERY FUNCTIONS */
if(gotjQ()){jQuery(document).ready(function($){var trackas=[["div.wrapper-nav-tabs","wrapper-nav-tabs"],];$('a[rel*="lightbox"],a[rel*="opop"]').each(function(){var type=($(this).attr("rel")=="opop")?"popup":"lightbox";if(!$(this).attr("data-lbl")&&$(this).attr("title")){$(this).attr("data-lbl",type+"-open-"+$(this).attr("title").toLowerCase().replace(/ /g,"-"));}else{if(!$(this).attr("data-lbl")&&$(this).text()){$(this).attr("data-lbl",type+"-open-"+$(this).text().toLowerCase().replace(/ /g,"-"));}else{if($(this).attr("data-lbl")){$(this).attr("data-lbl",$(this).attr("data-lbl")+"-"+type+"-open");}else{$(this).attr("data-lbl",type+"-open");}}}if(!$(this).attr("data-trackas")){$(this).attr("data-trackas",type);}});var sn=s_setAccount()[1];var ln=s_setAccount()[2];for(var i=0;i<trackas.length;i++){if(!$(trackas[i][0]).attr("data-trackas")&&trackas[i][1]){$(trackas[i][0]).attr("data-trackas",trackas[i][1]);}if(trackas[i][2]&&trackas[i][2]=="resetpage"){$(trackas[i][0]).attr("data-pgreset","true");}else{if(trackas[i][2]&&!$(trackas[i][0]).attr("data-lbl")){$(trackas[i][0]).attr("data-lbl",trackas[i][2]);}}}$(document).on("click","*[data-trackas] a,a[data-trackas]",function(e){var lbl="";var o=$(this);if(o.attr("data-lbl")!="notrack"){if(o.attr("data-lbl")){lbl=o.attr("data-lbl");}else{if(o.attr("name")){lbl=o.attr("name");}else{if(o.attr("title")){lbl=o.attr("title");}else{if(o.find("img")&&o.find("img").first().attr("title")){lbl=o.find("img").first().attr("title");}else{if(o.find("img")&&o.find("img").first().attr("alt")){lbl=o.find("img").first().attr("alt");}else{if(o.find("img").first().attr("src")){lbl=o.find("img").first().attr("src");lbl=lbl.split("/")[(lbl.split("/").length-1)];}else{lbl=o.text();}}}}}}var d=o.closest("[data-trackas]").attr("data-trackas");d=(d=="hnav"||d=="header")?":":"-";if(!o.attr("data-trackas")){while(o.parent()){o=o.parent();if(o.attr("data-lbl")){lbl=o.attr("data-lbl")+d+lbl;}if(o.attr("data-trackas")){break;}}}lbl=lbl.toLowerCase().replace(/ /g,"-").replace(/-+/g,"-");var sec=(o.attr("data-trackas"))?o.attr("data-trackas"):o.closest("*[data-trackas]").attr("data-trackas");if(location.href.indexOf(":8888")!=-1){console.log(sn+":"+ln+":"+sec+":"+lbl);}navTrack(sn,ln,sec,lbl);if(o.attr("data-pgreset")=="true"){s.clearVars();if(o.attr("href").indexOf("#")==0&&s.pageName){if(!$("body").attr("data-pgname")){$("body").attr("data-pgname",s.pageName);var pn=s.pageName;}else{var pn=$("body").attr("data-pgname");}s.pageName=pn+"/"+o.attr("href").split("#")[1];}else{s_orapageName(o.attr("href"));}oraSetInternalFilters();s.linkInternalFilters=s.linkInternalFilters+","+o.attr("href");var s_code=s.t();if(s_code){document.write(s_code);}oraSetInternalFilters();}}});});}