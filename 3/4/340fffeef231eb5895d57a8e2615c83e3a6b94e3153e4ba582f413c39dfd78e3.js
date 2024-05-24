(function()
{
  if(typeof stmt_params=='undefined')
  {
    stmt_params = {};
  }
  
  //変換用関数　undefined空文字化
  var conv = function(val){
    if(typeof val == 'undefined')
    {
      return '';
    }
    return val;
  };
  //変換用関数　二つの変数のうちある方を使用する＆undefined空文字化
  var conv_sel = function(val1,val2){
    if(typeof val1 != 'undefined')
    {
      return val1;
    }
    if(typeof val2 != 'undefined')
    {
      return val2;
    }
    return '';
  };
  
  //変換用関数　_suuAnaly.kaisoCD → s.prop13
  var pt = function(val){
    switch(val)
    {
      case 'TOP':
        return 'A';
      case 'SCH':
        return 'B';
      case 'LST':
        return 'C';
      case 'JUK':
      case 'BKN':
      case 'TOU':
        return 'D';
    }
    return '';
  };
  //変換用関数 エリア　1桁→3桁
  var ar = function(val){
    if(val=='')
    {
      return '000';
    }
    
    return '0'+ val + '0';
  };  
  //変換用関数 エリア　3桁→1桁
  var ar_s = function(val){
    if(val=='')
    {
      return '0';
    }
    if(val.length>1)
    {
      val = val.substr(1,1);
    }
    
    return val;
  };  
  //変換用関数 領域　3桁→1桁アルファベット
  var cat_s = function(val)
  {
    var url = location.pathname;
    if(url.lastIndexOf('/baikyaku/')>-1)
    {
      return 'B';
    }

    switch(val)
    {
      case '010':
        return 'M';
      case '011':
        return 'S';
      case '020':
        return 'K';
      case '021':
        return 'D';
      case '030':
        return 'T';
      case '040':
      case '041':
      case '301':
        return 'F';
      case '401':
      case '402':
      case '403':
      case '404':
      case '405':
      case '406':
      case '600':
      case '601':
        return 'H';
      case '051':
      case '052':
      case '053':
      case '054':
      case '055':
        return 'R';
      case '100':
        return 'B';
    }
    return 'X';
  }
  //s.pageName上7ケタからページ種別判別　su_ptype_from_pagename7
  var su_ptype_from_pagename7=function(){
    var p7 = s.pageName.substr(0,7);
    switch (p7)
    {
      case 'f301G01':
      case 'j010G10':
      case 'h400G31':
      case 'g503G01':
      case 'j050G53':
        return 'F0';

      case 'f301N01':
      case 'j010N10':
      case 'g501G01':
        return 'F1';
      
      case 'j050G10':
        return 'F2';
        
      case 'h400G11':
        return 'F3';
        
      case 'f301G02':
      case 'j010G20':
      case 'h400G32':
      case 'g503G02':
      case 'j050G20':
        return 'K0';
      
      case 'f301N02':
      case 'j010N20':
      case 'g501G02':
        return 'K1';
      
      case 'h400G12':
        return 'K3';
      
      case 'f301G03':
      case 'j011G30':
      case 'j020G30':
      case 'j021G30':
      case 'j030G30':
      case 'j010G30':
      case 'h400G33':
      case 'g503G03':
      case 'j050G30':
        return 'V0';
      
      case 'f301N03':
      case 'j011N30':
      case 'j020N30':
      case 'j021N30':
      case 'j030N30':
      case 'j010N30':
      case 'g501G03':
        return 'V1';
          
      case 'h400G13':
        return 'V3';
        
      case 'j901M01':
      case 'j901M03':
        return 'M0';
        
      case 'R0KSH00':
        if(s.pageName=='R0KSH001'){
            return 'F3';
        }else if(s.pageName=='R0KSH002'){
            return 'K3'
        }else if(s.pageName=='R0KSH003'){
            return 'V3';
        }else{
            return 'XX';
        }
         
      default:
        return 'XX';
      
    }
  }
  //_suuAnalyのpageIdからページ種別取得
  var su_ptype_from_newscpid_f=function(){
    var p = stmt_params.ytm.pageid.substr(13,9);
    switch (p)
    {
      case '0005-0006':
        return 'F0';

      case '0005-0017':
        return 'F1';

      case '0005-0007':
        return 'K0';
      
      case '0005-0019':
        return 'K1';
      
      case '0005-0010':
        return 'V0';
      
      case '0005-0020':
        return 'V1';
      
      default:
        return 'XX';
      
    }
  }
  
  //変換用関数 ページ種別(ソース、階層、ページID　→　pgcd)(リフォーム以外)
  var pt_s = function(src,lvl,pid){
    if(src=='s')
    {
      switch(lvl)
      {
        case 'A':
          return 'A0';
        case 'B':
          return 'B0';
        case 'C':
          return 'C0';        
        case 'D':
          var url = location.pathname;
          if(url.indexOf('/kaisha/')>-1)
          {
            return 'D1';
          }else{
            return 'D0';
          }
        default:
          var pt = su_ptype_from_pagename7();
          var url = location.pathname;
          switch(pt)
          {
            case 'XX':
              break;
            case 'K0':
              if(url.indexOf('/JJ050FG320/')>-1)
              {
                return 'K2';
              }
              return 'K0';
            case 'V0':
              if(url.indexOf('/JJ050FG330/')>-1)
              {
                return 'V2';
              }
              return 'V0';
            default:
              return pt;
          }
      }
    }else
    {
      switch(lvl)
      {
        case 'TOP':
          return 'A0';
        case 'SCH':
          return 'B0';
        case 'LST':
          return 'C0';
        case 'JUK':
        case 'BKN':
        case 'TOU':
          return 'D0';
        case 'TNP':
          return 'D1';      
        default:
          return su_ptype_from_newscpid_f();
      }
      
    }
    return 'XX';
  };
  //変換用関数 リフォームページ種別(ソース、階層、ページID　→　pgcd)
  var pt_s_rf = function(src,lvl,pid)
  {
    if(src=='s')
    {
      switch(lvl)
      {
        case 'C':
          return 'C0';        
        default:
          var pt = su_ptype_from_pagename7();
          switch(pt)
          {
            case 'XX':
              break;
            default:
              return pt;
          }
      }
      var url= location.pathname + location.search;
      if(new RegExp('^/remodel/($|(hokkaido|tohoku|kanto|koshinetsu|tokai|kansai|shikoku|chugoku|kyushu)/$|(mizumawari|okunai|okugai)/($|rk_.*))', 'i').test(url))
    {
      return "A0";
    }

    if(new RegExp('^/remodel/ki_[^/]*/(((process|staff|store|map|review)/.*)?|[^/]*)$', 'i').test(url))
    {
      return "D0";
    }

    if(new RegExp('^/remodel/[^/]*/(jitsurei|rk_[^/]*|ts_[^/]*|tm_[^/]*)/[^/]*$|^/jj/jitsurei/ichiran/', 'i').test(url))
    {
      return "C1";
    }

    if(new RegExp('^/remodel/ki_[^/]*/jitsurei/[^/]*/', 'i').test(url))
    {
      return "D1";
    }
    }else
    {
    }
    return 'XX';
  }



  if(typeof stmt_params.ytm == 'undefined')
  {
    stmt_params.ytm= {};
  }

  if(typeof _suuAnaly != 'undefined' && _suuAnaly.catalystAllow == '1' )
  {
    var a= _suuAnaly;

    if(typeof a.pageId != 'undefined' || typeof a.pageID != 'undefined')
    {
      stmt_params.ytm.cat = conv_sel(a.ryoikiCd , a.ryoikiCD);
      stmt_params.ytm.level = conv_sel(a.kaisoCd , a.kaisoCD);
      stmt_params.ytm.area = ar(conv_sel(a.areaCd , a.areaCD));
      stmt_params.ytm.pref = conv_sel(a.todofukenCd , a.todofukenCD);
      stmt_params.ytm.pageid = conv_sel(a.pageId , a.pageID);    
      stmt_params.ytm.rid = conv(a.RID_hash); 
      stmt_params.ytm.events = conv(a.events); 
      stmt_params.ytm.tori_taiyo = '';
      stmt_params.ytm.city = conv_sel(a.shikugunCd , a.shikugunCD); 
      
      stmt_params.ytm.src = '_suuAnaly';
      
      stmt_params.ytm.cat_s = cat_s(stmt_params.ytm.cat);
      stmt_params.ytm.area_s = conv_sel(a.areaCd , a.areaCD);
      
    }else
    {
    }
  }else if(typeof s != 'undefined')
  {
    stmt_params.ytm.cat = conv(s.prop14);
    stmt_params.ytm.level = conv(s.prop13);
    stmt_params.ytm.area = conv(s.prop15);
    stmt_params.ytm.pref = conv(s.prop16);
    stmt_params.ytm.pageid = conv(s.pageName);    
    stmt_params.ytm.rid = conv(s.eVar70); 
    stmt_params.ytm.events = conv(s.events); 
    stmt_params.ytm.tori_taiyo = conv(s.eVar19);
    stmt_params.ytm.city = conv(s.prop17);
      
    stmt_params.ytm.src = 's';
      
    var page_id = stmt_params.ytm.pageid;
    if(page_id.length>7)
    {
      page_id = page_id.substr(0,7);
    }
    stmt_params.ytm.pageid7 = page_id;
    
    stmt_params.ytm.cat_s = cat_s(stmt_params.ytm.cat);
    stmt_params.ytm.area_s = ar_s(stmt_params.ytm.area);
      
  }
  if(stmt_params.ytm.cat_s=='R')
  {
    stmt_params.ytm.ptype=pt_s_rf(stmt_params.ytm.src,stmt_params.ytm.level,stmt_params.ytm.pageid)
  }else
  {
    stmt_params.ytm.ptype=pt_s(stmt_params.ytm.src,stmt_params.ytm.level,stmt_params.ytm.pageid)
  }
  stmt_params.ytm.pgcd='X' + stmt_params.ytm.cat_s + stmt_params.ytm.ptype + stmt_params.ytm.area_s;

  
  return stmt_params.ytm;
})();
