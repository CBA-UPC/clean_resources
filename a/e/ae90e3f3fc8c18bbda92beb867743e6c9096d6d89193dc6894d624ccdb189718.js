

  
    
  
/* utrack 2019-05-23T12:07:29.263Z b789d94f38ae4b966b646c4c3a56f33c871006e5
 */
utag_data = window.utag_data || {};
newskey = window.newskey || {};

if (!newskey.utrack_loaded || false) {
  newskey.geo = {};  utag_data.newskey_geo_country = newskey.geo.country="ES".toLowerCase();   utag_data.newskey_geo_region = newskey.geo.region= "CT".toLowerCase();   utag_data.newskey_geo_city = newskey.geo.city= "BARCELONA".toLowerCase();   utag_data.newskey_geo_lat = newskey.geo.lat= "41.40".toLowerCase();   utag_data.newskey_geo_long = newskey.geo.long= "2.17".toLowerCase();   utag_data.newskey_geo_tmz = newskey.geo.tmz= "GMT+1".toLowerCase();    utag_data.newskey_geo_network = newskey.geo.network= "unknown";  
  (function(){
    // Check for the net_sub_uid parameter in the query string
    // Note: 
    // net_sub_uid_hit parameter is used by px2 processor.
    // it means that a net_sub_uid was seen in the URL
    // net_sub_uid parameter is used by px1 processor.
    // it means that a **new** net_sub_uid was seen in the URL     
    m = /[?&]net_sub_uid=([0-9a-z]+)(&|$)+/.exec(location.search);
    if (m) {
      utag_data.net_sub_uid_hit = m[1];
    }    
    var qs = location.search;
    var pn = location.pathname;
    qs=qs.replace(/\?nk=[^&]*&/,'?');
    qs=qs.replace(/&nk=[^&]*&/g,'&');
    qs=qs.replace(/&nk=.*$/,'');
    qs=qs.replace(/\?nk=.*$/,'');
    qs=qs.replace(/\?net_sub_uid=[^&]*&/,'?');
    qs=qs.replace(/&net_sub_uid=[^&]*&/g,'&');
    qs=qs.replace(/&net_sub_uid=.*$/,'');
    qs=qs.replace(/\?net_sub_uid=.*$/,'');
    // Need to strip email addresses from malformed urls to avoid sending them to Google
    qs=qs.replace(/[\w-.]+@([\w-]+\.)+[\w-]+/,'');
    pn=pn.replace(/[\w-.]+@([\w-]+\.)+[\w-]+/,'');
    if (qs != location.search || pn != location.pathname) {
        // Modern browsers, don't refresh, just get rid of the affecting parameters
        if (window.history && history.replaceState) {
            history.replaceState({}, '', location.href.replace(location.pathname, pn).replace(location.search, qs));
        }
    }
  })();
	newskey.utrack_loaded = true;
}