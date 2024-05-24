(function(){
  var getCookie = function ( name )
  {
    var result = null;

    var cookieName = name + '=';
    var allcookies = document.cookie;

    var position = allcookies.indexOf( cookieName );
    if( position != -1 )
    {
        var startIndex = position + cookieName.length;

        var endIndex = allcookies.indexOf( ';', startIndex );
        if( endIndex == -1 )
        {
            endIndex = allcookies.length;
        }

        result = decodeURIComponent(
            allcookies.substring( startIndex, endIndex ) );
    }

    return result;
  }


  var date = Date.now();
  var idx = date % 10;

  var ex=getCookie('stmt_cs_idx'); 

  if(ex == null){
    ex = idx;
  }
  var expDt = new Date;
  expDt.setTime(Date.now()+1000*60*60*24*7);

  var c = "stmt_cs_idx=" + ex+";expires="+expDt.toUTCString()+";domain=suumo.jp;path=/"
  document.cookie=c;

  if(typeof stmt_params == 'undefined')
  {
      stmt_params = {};
  }
  stmt_params.cookieIdx = ex;
  
})();
