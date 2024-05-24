var readyBound = false;
var docReady = false;
function documentReady() {
  if (docReady) return;
  docReady = true;
  var links = document.getElementsByTagName("A");
  for (var i in links) {
    var link = links[i];
    if (typeof link.getAttribute == 'undefined') {
      continue;
    }
    var att = link.getAttribute("data-gdpr");
    if (att && att=='portal') {
      var url = document.referrer.toString();
      if (typeof window.gdpr_ref!='undefined') {
        url = gdpr_ref;
      }
      var l = document.createElement("a");
      l.href = url;
      /* START SPECIAL MAPPING HERE */
      var host = l.hostname;
      if (l.hostname.indexOf("pcmag.")>-1) {
        link.setAttribute("href","//dsar.pcmag.com");
      }
      else if (l.hostname.indexOf("askmen.")>-1) {
        link.setAttribute("href","//dsar.askmen.com");
      }
      else if (l.hostname.indexOf("lifehacker.")>-1) {
        link.setAttribute("href","//dsar.lifehacker.com");
      }
      else if (l.hostname.indexOf("extremetech.")>-1) {
        link.setAttribute("href","//dsar.extremetech.com");
      }
      else if (l.hostname.indexOf("mashable.")>-1) {
        link.setAttribute("href","//dsar.mashable.com");
      }
      else if (l.hostname.indexOf("lifehacker.")>-1) {
        link.setAttribute("href","//notice.sp-prod.net/sar/index.html?message_id=539278&account_id=1195&ccpa_type=delete");
      }
      else if (l.hostname.indexOf("ign.")>-1) {
        link.setAttribute("href","//dsar.ign.com");
      }
      else if (l.hostname.indexOf("bestgifts.")>-1) {
        link.setAttribute("href","//dsar.bestgifts.com");
      }
      else if (l.hostname.indexOf("blackfriday.co.uk")>-1) {
        link.setAttribute("href","//dsar.blackfriday.com");
      }
      else if (l.hostname.indexOf("theblackfriday.")>-1) {
        link.setAttribute("href","//dsar.blackfriday.com/?refhost=theblackfriday.com");
      }
      else if (l.hostname.indexOf("bestblackfriday.")>-1) {
        link.setAttribute("href","//dsar.bestblackfriday.com");
      }
      else if (l.hostname.indexOf("dealsofamerica.")>-1) {
        link.setAttribute("href","//dsar.dealsofamerica.com");
      }
       else if (l.hostname.indexOf("couponcodes.")>-1) {
        link.setAttribute("href","//dsar.couponcodes.com");
      }
       else if (l.hostname.indexOf("solutelia.com")>-1) {
        link.setAttribute("href","//dsar.ookla.com/?refhost=solutelia.com");
      }
        else if (l.hostname.indexOf("cellrebel.com")>-1) {
        link.setAttribute("href","//dsar.ookla.com/?refhost=cellrebel.com");
      }
      else if (l.hostname.indexOf("downdetector.")>-1) {
        link.setAttribute("href","//dsar.ookla.com/?refhost=downdetector.com");
      }
      else if (l.hostname.indexOf("allestrungen-9ib.")>-1) {
        link.setAttribute("href","//dsar.ookla.com/?refhost=downdetector.com");
      }
      else if (l.hostname.indexOf("allestoringen.")>-1) {
        link.setAttribute("href","//dsar.ookla.com/?refhost=downdetector.com");
      }
      else if (l.hostname.indexOf("aussieoutages.")>-1) {
        link.setAttribute("href","//dsar.ookla.com/?refhost=downdetector.com");
      }
      else if (l.hostname.indexOf("downdetector.com.au")>-1) {
        link.setAttribute("href","//dsar.ookla.com/?refhost=downdetector.com");
      }
      else if (l.hostname.indexOf("downdetector.com.ar")>-1) {
        link.setAttribute("href","//dsar.ookla.com/?refhost=downdetector.com");
      }
      else if (l.hostname.indexOf("downdetector.com.co")>-1) {
        link.setAttribute("href","//dsar.ookla.com/?refhost=downdetector.com");
      }
      else if (l.hostname.indexOf("downdetector.com.br")>-1) {
        link.setAttribute("href","//dsar.ookla.com/?refhost=downdetector.com");
      }
      else if (l.hostname.indexOf("downdetector.co.nz")>-1) {
        link.setAttribute("href","//dsar.ookla.com/?refhost=downdetector.com");
      }
      else if (l.hostname.indexOf("downdetector.co.za")>-1) {
        link.setAttribute("href","//dsar.ookla.com/?refhost=downdetector.com");
      }
      else if (l.hostname.indexOf("downdetector.co.uk")>-1) {
        link.setAttribute("href","//dsar.ookla.com/?refhost=downdetector.com");
      }
      else if (l.hostname.indexOf("downdetector.web.tr")>-1) {
        link.setAttribute("href","//dsar.ookla.com/?refhost=downdetector.com");
      }
      else if (l.hostname.indexOf("canadianoutages.")>-1) {
        link.setAttribute("href","//dsar.ookla.com/?refhost=downdetector.com");
      }
      else if (l.hostname.indexOf("mosaik.")>-1) {
        link.setAttribute("href","//dsar.ookla.com/?refhost=mosaik.com");
      }
      else if (l.hostname.indexOf("mapelements.")>-1) {
        link.setAttribute("href","//dsar.ookla.com/?refhost=mosaik.com");
      }
      else if (l.hostname.indexOf("towersource.")>-1) {
        link.setAttribute("href","//dsar.ookla.com/?refhost=mosaik.com");
      }
      else if (l.hostname.indexOf("emedia.")>-1) {
        link.setAttribute("href","//dsar.emedia.com/");
      }
       else if (l.hostname.indexOf("ignboards.")>-1) {
        link.setAttribute("href","//dsar.ign.com/");
      }
      else if (l.hostname.indexOf("mapgenie.")>-1) {
        link.setAttribute("href","//dsar.ign.com/?refhost=mapgenie.io/");
      }
      else if (l.hostname.indexOf("martechadvisor.")>-1) {
        link.setAttribute("href","//dsar.demandshore.com/");
      }
      else if (l.hostname.indexOf("hrtechnologist.")>-1) {
        link.setAttribute("href","//dsar.demandshore.com/");
      }
      else if (l.hostname.indexOf("readitquik.")>-1) {
        link.setAttribute("href","//dsar.demandshore.com/");
      }
      else if (l.hostname.indexOf("spiceworksziffdavis.")>-1) {
        link.setAttribute("href","//dsar.spiceworksziffdavis.com");
      }
      else if (l.hostname.indexOf("spiceworks.")>-1) {
        link.setAttribute("href","//dsar.spiceworks.com");
      }
      else if (l.hostname.indexOf("demandcms.")>-1) {
        link.setAttribute("href","//dsar.demandshore.com/");
      }
      else if (l.hostname.indexOf("technology-signals.")>-1) {
        link.setAttribute("href","//dsar.demandshore.com/");
      }
      else if (l.hostname.indexOf("ziffdavisb2b.")>-1) {
        link.setAttribute("href","//dsar.ziffdavisb2b.com/");
      }
      else if (l.hostname.indexOf("nursingald.")>-1) {
        link.setAttribute("href","//dsar.medpagetoday.com/");
      }
      else if (l.hostname.indexOf("bphope.")>-1) {
        link.setAttribute("href","//dsar.everydayhealth.com/");
      }
      else if (l.hostname.indexOf("hopetocope.")>-1) {
        link.setAttribute("href","//dsar.everydayhealth.com/");
      }
      else if (l.hostname.indexOf("myms.care")>-1) {
        link.setAttribute("href","//dsar.primeinc.org/");
      }
      else if (l.hostname.indexOf("ibd.care")>-1) {
        link.setAttribute("href","//dsar.primeinc.org/");
      }
      else if (l.hostname.indexOf("managedcare.network")>-1) {
        link.setAttribute("href","//dsar.primeinc.org/");
      }
      else if (l.hostname.indexOf("aftermd.")>-1) {
        link.setAttribute("href","//dsar.primeinc.org/");
      }
      else if (l.hostname.indexOf("primece.")>-1) {
        link.setAttribute("href","//dsar.primeinc.org/");
      }
      else if (l.hostname.indexOf("cmetoolkit.")>-1) {
        link.setAttribute("href","//dsar.primeinc.org/");
      }
        else if (l.hostname.indexOf("loseit.")>-1) {
        link.setAttribute("href","//dsar.loseit.com/");
      }
       else if (l.hostname.indexOf("challenges.app")>-1) {
        link.setAttribute("href","//dsar.loseit.com/");
      }
       else if (l.hostname.indexOf("ascendapp.")>-1) {
        link.setAttribute("href","//dsar.loseit.com/");
      }
       else if (l.hostname.indexOf("loseitblog.")>-1) {
        link.setAttribute("href","//dsar.loseit.com/");
      }
      else if (l.hostname.indexOf("b2bideas.")>-1) {
        link.setAttribute("href","//dsar.salesify.com/");
      }
      else if (l.hostname.indexOf("techhubBox.")>-1) {
        link.setAttribute("href","//dsar.salesify.com/");
      }
      else if (l.hostname.indexOf("itresearchonline.")>-1) {
        link.setAttribute("href","//dsar.salesify.com/");
      }
      else if (l.hostname.indexOf("gmetoday.org")>-1) {
        link.setAttribute("href","//dsar.primeinc.org/");
      }
      else if (l.hostname.indexOf("militarycme.")>-1) {
        link.setAttribute("href","//dsar.primeinc.org/");
      }
      else if (l.hostname.indexOf("ccmreviewcourse.")>-1) {
        link.setAttribute("href","//dsar.primeinc.org/");
      }
      else if (l.hostname.indexOf("nursingald.")>-1) {
        link.setAttribute("href","//dsar.nursingald.com/");
      }
      else if (l.hostname.indexOf("migraineagain.")>-1) {
        link.setAttribute("href","//dsar.migraineagain.com/");
      }   
      else if (l.hostname.indexOf("castleconnolly.")>-1) {
        link.setAttribute("href","//dsar.castleconnolly.com/");
      }   
      else if (l.hostname.indexOf("bing.")>-1 ||
        l.hostname.indexOf("yahoo.")>-1 ||
        l.hostname.indexOf("google.")>-1 ||
        l.hostname.indexOf("duckduckgo.")>-1 ||
        l.hostname.indexOf("ask.")>-1 ||
        l.hostname.indexOf("wolframalpha.")>-1 ||
        l.hostname.indexOf("baidu.")>-1 ||
        l.hostname.indexOf("aol.")>-1) {
        var turl = document.location.toString();
      l.href = turl;
      var host_parts = l.hostname.split(".");
      host_parts = host_parts.slice(-2);
      var root_url = host_parts.join(".");
      link.setAttribute("href","//dsar."+root_url+"");
    }
    /* END SPECIAL MAPPING HERE */
    else {
      var host_parts = l.hostname.split(".");
      var len = host_parts.length;
      host_parts = host_parts.slice(-2);
      var root_url = host_parts.join(".");
      link.setAttribute("href","//dsar."+root_url+"");
    }
  }
}
}
function bindReady(){
  if ( readyBound ) return;
  readyBound = true;
    // Mozilla, Opera and webkit nightlies currently support this event
    if ( document.addEventListener ) {
        // Use the handy event callback
        document.addEventListener( "DOMContentLoaded",  false );
        window.addEventListener( "onload", documentReady );
    // If IE event model is used
  } else if ( document.attachEvent ) {
        // ensure firing before onload,
        // maybe late but safe also for iframes
        document.attachEvent("onreadystatechange", ;
        // If IE and not an iframe
        // continually check to see if the document is ready
        if ( document.documentElement.doScroll && window == window.top ) (();
        // A fallback to window.onload, that will always work
        window.attachEvent( "onload", documentReady );
      }
    }
    bindReady();
