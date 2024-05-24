ct_static_user_id = '2532639';
if( 'undefined' != typeof(_setCookie) ) {
    var today = new Date();
    var milisecs = Date.parse(today+"");
    var sevenmonth = new Date(milisecs+1000*60*60*24*12*100);
    _setCookie( "ct_static_user_id", ct_static_user_id , sevenmonth, "/" );
}
