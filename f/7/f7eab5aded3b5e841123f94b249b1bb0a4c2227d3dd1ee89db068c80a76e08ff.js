<!--

ss_ua       = navigator.userAgent.toLowerCase();
ss_opera    = window.opera;
ss_msie     = (!ss_opera) && (ss_ua.indexOf("msie")          != -1);
ss_msie4    = (!ss_opera) && (ss_ua.indexOf("msie 4")        != -1);
ss_ns4      = (!ss_opera) && (ss_ua.indexOf("mozilla/4")     != -1) && (ss_ua.indexOf("compatible") == -1);
ss_ns6      = (!ss_opera) && (ss_ua.indexOf("netscape6/6.0") != -1);

ss_opera6lower = (ss_opera) && parseFloat(ss_ua.substr(ss_ua.indexOf("opera")+6)) < 7;
ss_no_dyna_script = ss_opera6lower;

ss_fqdn     = window.location.host;
ss_size     = "SZ115-57";
ss_type     = "image";
ss_lang     = "ja";
ss_ver      = "V2003";
ss_service  = "S001";
ss_protocol = window.location.protocol.substring(0, window.location.protocol.indexOf(":"));

ss_jspUrl    = "//ssif1.globalsign.com/SiteSeal/siteSeal/siteSeal/siteSeal.do?p1=" + ss_fqdn + "&p2=" + ss_size + "&p3=" + ss_type + "&p4=" + ss_lang + "&p5=" + ss_ver + "&p6=" + ss_service + "&p7=" + ss_protocol;

function ss_js_sealTagStr(){
  var str = "<scr" + "ipt type='text/javascript' src='" + ss_jspUrl + "'></scr" + "ipt>";
  return str;
}

function ss_js_seal(){

  if(ss_ns4 || ss_msie4){
    return;
  }

  var siteSeal = document.getElementById('ss_img_wrapper_2021gmogs_115-57_ja_t');

  siteSeal.setAttribute('id','ss_' + ss_size + '_' + ss_type + '_' + ss_lang + '_' + ss_ver + '_' + ss_service);

  if(ss_no_dyna_script){
    document.write(ss_js_sealTagStr());
  }

  else{
    var scriptTag = document.createElement("script");
    scriptTag.setAttribute("src", ss_jspUrl);
    siteSeal.parentNode.insertBefore(scriptTag, siteSeal);
  }
}

ss_js_seal();

//-->
oter_marks{display:flex;justify-content:center;list-style-type:none;margin:20px 0}.globalFooter_marks.is-siteseal{margin:80px auto 0}.globalFooter_marks.is-siteseal>li{margin-bottom:0;margin-top:0}.globalFooter_marks>li{margin:4px}.globalFooter_marks>li img{vertical-align:middle}.globalFooter_copyright{clear:both;color:#b3b3b3;font-size:12px;padding-top:40px;text-align:right;text-align:center}.globalFooter_linkTree{overflow:hidden}.globalFooter_linkTreeSwitch{clear:both;float:left;font-size:16px;line-height:1.3;margin-bottom:12px}@media screen and (min-width: 768px){.globalFooter_linkTreeSwitch.is-open-progress+*{height:auto !important}}.globalFooter_linkTreeSwitch.is-2onwards{margin-top:3.75vw}@media screen and (min-width: 768px){.globalFooter_linkTreeSwitch.is-2onwards{margin-top:16px}}.globalFooter_linkTree>ul{display:flex;list-style-type:none;margin-right:-40px;margin-top:-40px}.globalFooter_linkTree>ul>li{margin-right:40px;margin-top:40px}.globalFooter_linkTree>ul>li>ul{clear:both;font-size:12px;list-style-type:none;padding-left:20px;position:relative}.globalFooter_linkTree>ul>li>ul::before{border-left:1px solid #fff;bottom:0;content:"";left:8px;position:absolute;top:0}.globalFooter_linkTree>ul>li>ul>li::after{clear:both;content:"";display:block}.globalFooter_linkTree>ul>li>ul>li+li{margin-top:8px}.globalFooter_linkTree-5Column>ul{flex-wrap:wrap}.globalFooter_linkTree-5Column>ul>li{flex:0 0 200px}.globalFooter_linkLine{align-items:center;display:flex;font-size:12px;list-style-type:none;margin:20px 0;white-space:nowrap}.globalFooter_linkLine a{text-decoration:none}.globalFooter_linkLine a:hover{text-decoration:underline}.globalFooter_linkLine>li+li{border-left:1px solid #fff;margin-left:0.8em;padding-left:0.8em}@media screen and (max-width: 767px){.globalFooter{font-size:5vw;padding:12.5vw 3.125vw 6.25vw}.globalFooter.is-bottom{padding:0 0 13.75vw}.globalFooter_footerGroup{flex-direction:column;margin-top:12.5vw}.globalFooter_marks{flex-wrap:wrap;margin:4.375vw 0 0}.globalFooter_marks.is-siteseal{margin:12.5vw auto 0}.globalFooter_marks.is-siteseal>li{margin:0 3.75vw}.globalFooter_marks>li{margin:1.875vw 1.25vw}.globalFooter_marks>li img{height:15.625vw;width:auto}.globalFooter_copyright{font-size:3.125vw;padding-top:6.25vw;text-align:center}.globalFooter_linkTreeSwitch{cursor:pointer;font-size:5vw;font-weight:bold;margin-bottom:3.75vw;margin-left:6.25vw}.globalFooter_linkTreeSwitch::before{color:inherit;content:"\F00B";display:inline-block;font-family:"onamae_domain_icon";font-size:5vw;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-style:normal;font-variant:normal;font-weight:normal;line-height:1;margin-left:-6.25vw;speak:none;text-align:left;text-decoration:none;text-transform:none;width:6.25vw}.globalFooter_linkTreeSwitch+*{display:none}.globalFooter_linkTreeSwitch.is-open::before{content:"\F00A"}.globalFooter_linkTreeSwitch.is-open+*{display:block}.globalFooter_linkTree>ul{display:block;margin-right:0;margin-top:0}.globalFooter_linkTree>ul>li{margin-right:0;margin-top:0}.globalFooter_linkTree>ul>li::after{clear:both;content:"";display:block}.globalFooter_linkTree>ul>li+li{margin-top:3.75vw}.globalFooter_linkTree>ul>li>ul{font-size:5vw;margin-bottom:6.25vw;padding-left:6.25vw}.globalFooter_linkTree>ul>li>ul::before{border-left-width:.3125vw;left:2.5vw}.globalFooter_linkTree>ul>li>ul>li+li{margin-top:2.5vw}.globalFooter_linkLine{display:block;font-size:5vw;height:auto;margin:0}.globalFooter_linkLine>li+li{border-left:0;margin-left:0;margin-top:4.375vw;padding-left:0}}
/*# sourceMappingURL=global_footer.css.map */
