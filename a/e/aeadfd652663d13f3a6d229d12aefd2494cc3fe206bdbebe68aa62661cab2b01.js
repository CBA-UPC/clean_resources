/* IE �ܼ�  ver 21.04.26 */
if(typeof(window.console) == 'undefined') {console = { log: function () { } }; }
var foin_where_ref = [
"m.dcinside.com",
"heymr.co.kr"
];
var foin_domainCutInfo=[
{domain:"www.sedaily.com",split:"?",where:"left"}
,{domain:"www.ajunews.com",split:"?",where:"left"}
,{domain:"ppss.kr",split:"?",where:"left"}
,{domain:"news.joins.com",split:"?",where:"left"}
,{domain:"mnews.joins.com",split:"?",where:"left"}
,{domain:"m.ytn.co.kr",split:"key",where:"right"}
,{domain:"m.yna.co.kr",split:"?",where:"left"}
,{domain:"m.huffingtonpost.kr",split:"?",where:"left"}
,{domain:"dcnewsj.joins.com",split:"?",where:"left"}
,{domain:"www.zdnet.co.kr",split:"artice_id",where:"right"}
,{domain:"www.wikitree.co.kr",split:"id",where:"right"}
,{domain:"www.whitepaper.co.kr",split:"idxno",where:"right"}
,{domain:"www.vop.co.kr",split:"?",where:"left"}
,{domain:"www.topstarnews.net",split:"idxno",where:"right"}
,{domain:"www.seoul.co.kr",split:"id",where:"right"}
,{domain:"www.pressian.com",split:"no",where:"right"}
,{domain:"www.nocutnews.co.kr",split:"_",where:"left"}
,{domain:"www.newsworks.co.kr",split:"idxno",where:"right"}
,{domain:"www.newstown.co.kr",split:"idxno",where:"right"}
,{domain:"www.newsis.com",split:"id",where:"right"}
,{domain:"m.biz.khan.co.kr",split:"artid",where:"right"}
,{domain:"biz.khan.co.kr",split:"artid",where:"right"}
,{domain:"m.businesspost.co.kr",split:"num",where:"right"}
,{domain:"m.chosun.com",split:"contid",where:"right"}
,{domain:"m.dailiang.co.kr",split:"idxno",where:"right"}
,{domain:"m.etoday.co.kr",split:"idxno",where:"right"}
,{domain:"m.fnnews.com",split:"?",where:"left"}
,{domain:"m.hankooki.com",split:"FILE_NO",where:"right"}
,{domain:"m.ichannela.com",split:"publishId",where:"right"}
,{domain:"m.idomin.com",split:"idxno",where:"right"}
,{domain:"m.ilyo.co.kr",split:"entry_id",where:"right"}
,{domain:"m.jeollailbo.com",split:"idxno",where:"right"}
,{domain:"m.joongboo.com",split:"idxno",where:"right"}
,{domain:"m.kihoilbo.co.kr",split:"idxno",where:"right"}
,{domain:"m.mediaus.co.kr",split:"idxno",where:"right"}
,{domain:"m.mk.co.kr",split:"?",where:"left"}
,{domain:"m.moneys.mt.co.kr",split:"no",where:"right"}
,{domain:"m.mt.co.kr",split:"no",where:"right"}
,{domain:"m.myfocus.co.kr",split:"no",where:"right"}
,{domain:"m.newsway.co.kr",split:"ud",where:"right"}
,{domain:"m.ohmynews.com",split:"CNTN_CD",where:"right"}
,{domain:"m.pressian.com",split:"no",where:"right"}
,{domain:"m.segye.com",split:"?",where:"left"}
,{domain:"m.seoul.co.kr",split:"id",where:"right"}
,{domain:"m.sports.khan.co.kr",split:"art_id",where:"right"}
,{domain:"m.sportschosun.com",split:"ServiceDate",where:"right"}
,{domain:"m.theleader.mt.co.kr",split:"no",where:"right"}
,{domain:"mobile.newsis.com",split:"ar_id",where:"right"}			
,{domain:"moneys.mt.co.kr",split:"no",where:"right"}		
,{domain:"news.donga.com",split:"?",where:"left"}		
,{domain:"news.hankyung.com",split:"?",where:"left"}		
,{domain:"news.heraldcorp.com",split:"ud",where:"right"}		
,{domain:"news.khan.co.kr",split:"artid",where:"right"}		
,{domain:"news.khan.co.kr",split:"code",where:"right"}		
,{domain:"news.mk.co.kr",split:"no",where:"right"}		
,{domain:"news.mt.co.kr",split:"no",where:"right"}		
,{domain:"nnews.mk.co.kr",split:"sc",where:"right"}		
,{domain:"nownews.seoul.co.kr",split:"id",where:"right"}		
,{domain:"sports.khan.co.kr",split:"art_id",where:"right"}	
,{domain:"star.ohmynews.com",split:"CNTN_CD",where:"right"}	
,{domain:"www.asiatoday.co.kr",split:"key",where:"right"}	
,{domain:"www.bestfeed.co.kr",split:"type",where:"right"}	
,{domain:"www.dailian.co.k",split:"?",where:"left"}	
,{domain:"www.ebn.co.kr",split:"?",where:"left"}	
,{domain:"www.edaily.co.kr",split:"mediaCodeNo",where:"right"}	
,{domain:"www.etnews.com",split:"?",where:"left"}	
,{domain:"www.g-enews.com",split:"ud",where:"right"}	
,{domain:"www.newsis.com",split:"id",where:"right"}	
,{domain:"www.pressian.com",split:"no",where:"right"}	
,{domain:"www.seoul.co.krid",split:"id",where:"right"}	
,{domain:"www.topstarnews.net",split:"idxno",where:"right"}	
,{domain:"www.yonhapnews.co.kr",split:"?",where:"left"}	
,{domain:"www.yonhapnews.co.kr",split:"?",where:"left"}	
,{domain:"www.zdnet.co.kr",split:"artice_id",where:"right"}	
,{domain:"dcnewsj.joins.com",split:"?",where:"left"}	
,{domain:"m.yna.co.kr",split:"?",where:"left"}	
,{domain:"mnews.joins.com",split:"?",where:"left"}	
,{domain:"www.sedaily.com",split:"?",where:"left"}	
,{domain:"biz.chosun.com",split:"?",where:"left"}	
,{domain:"biz.heraldcorp.com",split:"ud",where:"right"}	
,{domain:"cwstoo.asiae.co.kr",split:"idxno",where:"right"}	
,{domain:"dailypick.kr",split:"?",where:"left"}	
,{domain:"dripzil.com",split:"wr_id",where:"right"}	
,{domain:"en.seoul.co.kr",split:"id",where:"right"}	
,{domain:"etoland.co.kr",split:"wr_id",where:"right"}	
,{domain:"flash24.dreamx.com",split:"wr_id",where:"right"}	
,{domain:"iliking.co.kr",split:"?",where:"left"}	
,{domain:"koreajoongangdaily.joins.com",split:"aid",where:"right"}	
,{domain:"m.asiatoday.co.kr",split:"key",where:"right"}	
,{domain:"m.chosun.com",split:"contid",where:"right"}	
,{domain:"m.busan.com",split:"newsId",where:"right"}
,{domain:"m.daejeontoday.com",split:"idxno",where:"right"}
,{domain:"m.dailygrid.net",split:"idxno",where:"right"}
,{domain:"m.datanet.co.kr",split:"idxno",where:"right"}
,{domain:"m.ebn.co.kr",split:"?",where:"left"}
,{domain:"m.ecomedia.co.kr",split:"ncode",where:"right"}
,{domain:"m.economytalk.kr",split:"idxno",where:"right"}
,{domain:"m.ekn.kr",split:"no",where:"right"}
,{domain:"m.electimes.com",split:"aid",where:"right"}
,{domain:"m.getnews.co.kr",split:"ud",where:"right"}
,{domain:"m.greened.kr",split:"idxno",where:"right"}
,{domain:"m.gukjenews.com",split:"idxno",where:"right"}
,{domain:"m.gwangnam.co.kr",split:"aid",where:"right"}
,{domain:"m.gyotongn.com",split:"idxno",where:"right"}
,{domain:"m.hankooki.com",split:"WEB_GSNO",where:"right"}
,{domain:"m.heraldbiz.com",split:"ud",where:"right"}
,{domain:"m.hkbs.co.kr",split:"idxno",where:"right"}
,{domain:"m.housingherald.co.kr",split:"idxno",where:"right"}
,{domain:"m.ikoreadaily.co.kr",split:"idxno",where:"right"}
,{domain:"m.inews24.com",split:"g_serial",where:"right"}
,{domain:"m.jemin.com",split:"idxno",where:"right"}
,{domain:"m.joongdo.co.kr",split:"key",where:"right"}
,{domain:"m.joynews24.com",split:"g_serial",where:"right"}
,{domain:"m.jumpball.co.kr",split:"no",where:"right"}
,{domain:"m.khan.co.kr",split:"artid",where:"right"}
,{domain:"m.kns.tv",split:"idxno",where:"right"}
,{domain:"m.koreaherald.com",split:"ud",where:"right"}
,{domain:"m.kpinews.co.kr",split:"idxno",where:"right"}
,{domain:"m.ksilbo.co.kr",split:"idxno",where:"right"}
,{domain:"m.ksmnews.co.kr",split:"idx",where:"right"}
,{domain:"m.kyeongin.com",split:"key",where:"right"}
,{domain:"m.lawissue.co.kr",split:"ud",where:"right"}
,{domain:"m.mbn.co.kr",split:"news_seq_no",where:"right"}
,{domain:"m.mdtoday.co.kr",split:"no",where:"right"}
,{domain:"m.metroseoul.co.kr",split:"newscd",where:"right"}
,{domain:"m.munhwa.com",split:"no",where:"right"}
,{domain:"m.namdonews.com",split:"idxno",where:"right"}
,{domain:"m.newdaily.co.kr",split:"id",where:"right"}
,{domain:"m.newsfreezone.co.kr",split:"idxno",where:"right"}
,{domain:"m.newspim.com",split:"?",where:"left"}
,{domain:"m.newsworker.co.kr",split:"idxno",where:"right"}
,{domain:"m.nextdaily.co.kr",split:"id",where:"right"}
,{domain:"m.nocutnews.co.kr",split:"?",where:"left"}
,{domain:"m.obs.co.kr",split:"id",where:"right"}
,{domain:"m.seconomy.kr",split:"ud",where:"right"}
,{domain:"m.shinmoongo.net",split:"?",where:"left"}
,{domain:"m.shinmoongo.net",split:"uid",where:"right"}
,{domain:"m.siminilbo.co.kr",split:"idxno",where:"right"}
,{domain:"m.sisamagazine.co.kr",split:"idxno",where:"right"}
,{domain:"m.slist.kr",split:"idxno",where:"right"}
,{domain:"m.spoon.spotvnews.co.kr",split:"idxno",where:"right"}
,{domain:"m.sporbiz.co.kr",split:"idxno",where:"right"}
,{domain:"m.sports.khan.co.kr",split:"artid",where:"right"}
,{domain:"m.sportsq.co.kr",split:"idxno",where:"right"}
,{domain:"m.sportsseoul.com",split:"?",where:"left"}
,{domain:"m.sportsworldi.com",split:"?",where:"left"}
,{domain:"m.spotvnews.co.kr",split:"idxno",where:"right"}
,{domain:"m.techholic.co.kr",split:"idxno",where:"right"}
,{domain:"m.thebigdata.co.kr",split:"ud",where:"right"}
,{domain:"m.theceluv.com",split:"aid",where:"right"}
,{domain:"m.thegolftimes.co.kr",split:"idxno",where:"right"}
,{domain:"m.tourtimes.net",split:"uid",where:"right"}
,{domain:"m.updownnews.co.kr",split:"idxno",where:"right"}
,{domain:"m.viva100.com",split:"key",where:"right"}
,{domain:"m.webdaily.co.kr",split:"ud",where:"right"}
,{domain:"m.wikitree.co.kr",split:"id",where:"right"}
,{domain:"m.wowtv.co.kr",split:"artid",where:"right"}
,{domain:"m.xportsnews.com",split:"entry_id",where:"right"}
,{domain:"m.youngnong.co.kr",split:"idxno",where:"right"}
,{domain:"m.youthdaily.co.kr",split:"idxno",where:"right"}
,{domain:"m.zdnet.co.kr",split:"artice_id",where:"right"}
,{domain:"mbiz.heraldcorp.com",split:"ud",where:"right"}
,{domain:"mbn.mk.co.kr",split:"news_seq_no",where:"right"}
,{domain:"mediaus.co.kr",split:"idxno",where:"right"}
,{domain:"mengnews.joins.com",split:"aid",where:"right"}
,{domain:"mleaders.asiae.co.kr",split:"idxno",where:"right"}
,{domain:"mnm.seoul.co.kr",split:"id",where:"right"}
,{domain:"mobile.newsis.com",split:"id",where:"right"}
,{domain:"mosen.mt.co.kr",split:"?",where:"left"}
,{domain:"mpop.heraldcorp.com",split:"ud",where:"right"}
,{domain:"mrealfoods.heraldcorp.com",split:"ud",where:"right"}
,{domain:"mstoo.asiae.co.kr",split:"no",where:"right"}
,{domain:"mtvdaily.asiae.co.kr",split:"aid",where:"right"}
,{domain:"new.asiatoday.co.kr",split:"key",where:"right"}
,{domain:"newm.wowtv.co.kr",split:"articleId",where:"right"}
,{domain:"news.chosun.com",split:"?",where:"left"}
,{domain:"news.g-enews.com",split:"ud",where:"right"}
,{domain:"news1.kr",split:"&",where:"left"}
,{domain:"news20.busan.com",split:"newsId",where:"right"}
,{domain:"newsfocus.co.kr",split:"uid",where:"right"}
,{domain:"nscreen.neoebiz.co.kr",split:"pid",where:"right"}	
,{domain:"entertainps.com",split:"?",where:"left"}
,{domain:"soda.donga.com",split:"?",where:"left"}
,{domain:"www.asiae.co.kr",split:"idxno",where:"right"}
,{domain:"cm.asiae.co.kr",split:"no",where:"right"}
,{domain:"m.anewsa.com",split:"number",where:"right"}
,{domain:"www.sisunnews.co.kr",split:"idxno",where:"right"}
,{domain:"speconomy.com",split:"idxno",where:"right"}
,{domain:"www.sporbiz.co.kr",split:"idxno",where:"right"}
,{domain:"gamefocus.co.kr",split:"number",where:"right"}
,{domain:"www.ichannela.com",split:"publishId",where:"right"}
,{domain:"cmobile.g-enews.com",split:"ud",where:"right"}
,{domain:"khnews.kheraldm.com",split:"ud",where:"right"}
,{domain:"www.seoulwire.com",split:"idxno",where:"right"}
,{domain:"cmobile.g-enews.com",split:"ud",where:"right"}
,{domain:"famtimes.co.kr",split:"?",where:"left"}
,{domain:"m.newsinside.kr",split:"idxno",where:"right"}
,{domain:"m.polinews.co.kr",split:"no",where:"right"}
,{domain:"polinews.co.kr",split:"no",where:"right"}
,{domain:"www.dtnews24.com",split:"idxno",where:"right"}
,{domain:"sports.donga.com",split:"gid",where:"right"}
,{domain:"sports.mk.co.kr",split:"no",where:"right"}
,{domain:"isplus.live.joins.com",split:"total_id",where:"right"}
,{domain:"www.nocutnews.co.kr",split:"?",where:"left"}
,{domain:"m.kmib.co.kr",split:"arcid",where:"right"}
,{domain:"m.econovill.com",split:"idxno",where:"right"}
,{domain:"m.iusm.co.kr",split:"idxno",where:"right"}
,{domain:"www.greenpostkorea.co.kr",split:"idxno",where:"right"}
,{domain:"www.ilyosisa.co.kr",split:"idxno",where:"right"}
,{domain:"www.koreaherald.com",split:"ud",where:"right"}
,{domain:"www.speconomy.com",split:"idxno",where:"right"}
,{domain:"worldps.co.kr",split:"?",where:"left"}
,{domain:"www.ggilbo.com",split:"idxno",where:"right"}
,{domain:"www.munhwa.com",split:"no",where:"right"}
,{domain:"www.newscj.com",split:"idxno",where:"right"}
,{domain:"www.ujeil.com",split:"idxno",where:"right"}
,{domain:"m.isplus.joins.com",split:"total_id",where:"right"}
,{domain:"m.newsen.com",split:"uid",where:"right"}
,{domain:"www.cine21.com",split:"mag_id",where:"right"}
,{domain:"www.drspark.net",split:"document_srl",where:"right"}
,{domain:"www.headlinejeju.co.kr",split:"idxno",where:"right"}
,{domain:"www.nbnnews.co.kr",split:"idxno",where:"right"}
,{domain:"www.slist.kr",split:"idxno",where:"right"}
,{domain:"allvod.sbs.co.kr",split:"srs_id",where:"right"}
,{domain:"hooc.heraldcorp.com",split:"ud",where:"right"}
,{domain:"m.dailycar.co.kr",split:"autoId",where:"right"}
,{domain:"m.dtoday.co.kr",split:"idxno",where:"right"}
,{domain:"m.kado.net",split:"idxno",where:"right"}
,{domain:"m.knnews.co.kr",split:"idxno",where:"right"}
,{domain:"m.star.mt.co.kr",split:"no",where:"right"}
,{domain:"m.wowtv.co.kr",split:"articleId",where:"right"}
,{domain:"mnc.asiae.co.kr",split:"idxno",where:"right"}
,{domain:"mnews.jtbc.joins.com",split:"news_id",where:"right"}
,{domain:"view.asiae.co.kr",split:"idxno",where:"right"}
,{domain:"weekly.khan.co.kr",split:"art_id",where:"right"}
,{domain:"www.anewsa.com",split:"number",where:"right"}
,{domain:"www.cctimes.kr",split:"#",where:"left"}
,{domain:"www.gwangnam.co.kr",split:"aid",where:"right"}
,{domain:"www.joongboo.com",split:"idxno",where:"right"}
,{domain:"www.kgnews.co.kr",split:"idxno",where:"right"}
,{domain:"www.kihoilbo.co.kr",split:"idxno",where:"right"}
,{domain:"www.kyongbuk.co.kr",split:"idxno",where:"right"}
,{domain:"www.seoulilbo.com",split:"idxno",where:"right"}
,{domain:"www.sjbnews.com",split:"idxno",where:"right"}
,{domain:"www.travelnbike.com",split:"idxno",where:"right"}
,{domain:"www.ujnews.co.kr",split:"idxno",where:"right"}
,{domain:"www.xportsnews.com",split:"entry_id",where:"right"}
,{domain:"www.incheonilbo.com",split:"idxno",where:"right"}
,{domain:"www.intn.co.kr",split:"idxno",where:"right"}
,{domain:"www.kado.net",split:"idxno",where:"right"}
,{domain:"www.kgdm.co.kr",split:"idxno",where:"right"}
,{domain:"www.kjtimes.net",split:"idxno",where:"right"}
,{domain:"www.kookje.co.kr",split:"key",where:"right"}
,{domain:"www.ksmnews.co.kr",split:"idx",where:"right"}
,{domain:"www.polinews.co.kr",split:"no",where:"right"}
,{domain:"www.sisamagazine.co.kr",split:"idxno",where:"right"}
,{domain:"www.songpatimes.com",split:"idxno",where:"right"}
,{domain:"www.todayenergy.kr",split:"idxno",where:"right"}
,{domain:"www.topdaily.kr",split:"idxno",where:"right"}
,{domain:"www.upkorea.net",split:"idxno",where:"right"}
,{domain:"www.urinews.co.kr",split:"uid",where:"right"}
,{domain:"www.wonjutoday.co.kr",split:"idxno",where:"right"}
,{domain:"cm.thebigdata.co.kr",split:"ud",where:"right"}
,{domain:"linejournal.net",split:"wr_id",where:"right"}
,{domain:"mnews.imaeil.com",split:"?",where:"left"}
,{domain:"www.ccdn.co.kr",split:"idxno",where:"right"}
,{domain:"www.chookjenews.kr",split:"idxno",where:"right"}
,{domain:"www.joongdo.co.kr",split:"key",where:"right"}
,{domain:"www.ksilbo.co.kr",split:"idxno",where:"right"}
,{domain:"www.ksngn.net",split:"idxno",where:"right"}
,{domain:"www.newspim.com",split:"?",where:"left"}
,{domain:"app.ytn.co.kr",split:"key",where:"right"}
,{domain:"okfashion.co.kr",split:"number",where:"right"}
,{domain:"pop.heraldcorp.com",split:"ud",where:"right"}
,{domain:"theleader.mt.co.kr",split:"no",where:"right"}
,{domain:"tvdaily.asiae.co.kr",split:"aid",where:"right"}
,{domain:"news.kmib.co.kr",split:"arcid",where:"right"}
,{domain:"egreennews.com",split:"ud",where:"right"}
,{domain:"m.asiae.co.kr",split:"no",where:"right"}
,{domain:"www.newsrep.co.kr",split:"idxno",where:"right"}
,{domain:"m.kbench.com",split:"&",where:"left"}
,{domain:"biztribune.co.kr",split:"no",where:"right"}
,{domain:"cm.marketnews.co.kr",split:"ud",where:"right"}
,{domain:"daily.hankooki.com",split:"?",where:"left"}
,{domain:"globaleconomic.co.kr",split:"ud",where:"right"}
,{domain:"lady.khan.co.kr",split:"artid",where:"right"}
,{domain:"m.bluekoreadot.com",split:"idxno",where:"right"}
,{domain:"m.chookjenews.kr",split:"idxno",where:"right"}
,{domain:"www.osen.co.kr",split:"?",where:"left"}
,{domain:"tenasia.hankyung.com",split:"?",where:"left"}
,{domain:"www.basketkorea.com",split:"idxno",where:"right"}
,{domain:"www.biztribune.co.kr",split:"no",where:"right"}
,{domain:"www.dailygrid.net",split:"idxno",where:"right"}
,{domain:"www.dhns.co.kr",split:"idxno",where:"right"}
,{domain:"www.domin.co.kr",split:"idxno",where:"right"}
,{domain:"www.newspic.kr",split:"nid",where:"right"}
];
var foin_Base64 = {
			// private property
			_keyStr : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
		  // public method for encoding
		 	encode : function (input) 
		 	{
			  var output = "";
			  var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
			  var i = 0;
			  input = foin_Base64._utf8_encode(input);

			  while (i < input.length) {

				  chr1 = input.charCodeAt(i++);
				  chr2 = input.charCodeAt(i++);
				  chr3 = input.charCodeAt(i++);

				  enc1 = chr1 >> 2;
				  enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
				  enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
				  enc4 = chr3 & 63;

				  if (isNaN(chr2)) {
					  enc3 = enc4 = 64;
				  } else if (isNaN(chr3)) {
					  enc4 = 64;
				  }

				  output = output +
					  this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) +
					  this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);

			  }

			  return output;
		 	},
		 	// private method for UTF-8 encoding
			_utf8_encode : function (string) 
			{
				   string = string.replace(/\r\n/g,"\n");
				   var utftext = "";
				   for (var n = 0; n < string.length; n++) 
				   {
					   var c = string.charCodeAt(n);
					   if (c < 128) {
						   utftext += String.fromCharCode(c);
					   }
					   else if((c > 127) && (c < 2048)) {
						   utftext += String.fromCharCode((c >> 6) | 192);
						   utftext += String.fromCharCode((c & 63) | 128);
					   }
					   else {
						   utftext += String.fromCharCode((c >> 12) | 224);
						   utftext += String.fromCharCode(((c >> 6) & 63) | 128);
						   utftext += String.fromCharCode((c & 63) | 128);
					   }
				   }
				   return utftext;
			}
};

/* �������� ��� */
(function () {
		/*�̹� �����ϴ��� Ȯ�� */
    if (typeof(window.foin_cookie) != 'undefined') return;
    foin_cookie = new Object();

    foin_cookie.obj = function (set) {
        this.setting = set;
    };

		/**************************************************************************/
		/***  Utility                                                          ****/
		/**************************************************************************/
		foin_cookie.obj.prototype.urlCut = function(cutInfo,url)
		{
			if(url==null || url.length<1 || cutInfo==null || cutInfo.length<1) return url;
			try
			{
				for(var l_posi=0;l_posi<cutInfo.length;l_posi++)
				{
					if(url.indexOf(cutInfo[l_posi].domain)<0) continue;
					if(cutInfo[l_posi].where=="right")
					{
						var l_idx=url.indexOf(cutInfo[l_posi].split+"=");
						if(l_idx>=0)
						{
							l_idx = url.indexOf("&",l_idx);
							if(l_idx>=0) url = url.substring(0,l_idx);
						}					
					}
					else
					{
						var l_idx=url.indexOf(cutInfo[l_posi].split);
						if(l_idx>=0)
						{
							url = url.substring(0,l_idx);
						}					
					}
				}
			}
			catch(e)
			{
				console.log('urlCut error : '+e.message);
			}
			return url;
		};
		
		foin_cookie.obj.prototype.getParam = function(url,name)
		{
			var rtnval="";
			try
			{
			  var parameters = new Array();
			  parameters = (url.slice(url.indexOf("?")+1, url.length)).split("&");
			  for( var i = 0 ; i < parameters.length ; i++ ) 
			  {
			    if(parameters[i].indexOf(name) == 0) 
			    {
			      var l_item=parameters[i].split("=");
			      if(l_item==null || l_item.length!=2) continue;
			      l_item[0] = l_item[0].replace(/^\s+|\s+$/g,"");
			      if(l_item[0]==name)
			      {
			      	rtnval = l_item[1];
			      	break;
			      }
			    }
			  }
			}
			catch(e)
			{
				rtnval = "";
			}
			return rtnval;
		};

		foin_cookie.obj.prototype.getUrl = function(url)
		{
			var rtnVal="";
			try
			{
				url = url.replace(/\\/gi, '/');
				var begin = url.indexOf("//");
				if(begin<0) begin = 0;
				else begin+=2;
				var end = url.indexOf("/",begin);
				if(end<0) end = url.indexOf("?",begin);
				if(end<0) end=url.length;
				rtnVal=url.substring(begin,end);			
				rtnVal=rtnVal.toLowerCase();	
				if(rtnVal.indexOf(".")<0) rtnVal="";
			}
			catch(e)
			{
				rtnVal = "";
			}
			return rtnVal;
		};
		/**************************************************************************/
		/***  html 5                                                           ****/
		/**************************************************************************/
    foin_cookie.obj.prototype.isHtml5 = function () 
    {
			var rtnVal=false;
			try
			{
				if (typeof(Storage) != "undefined") 
				{
				  rtnVal=true;
				} 
				else 
				{
					rtnVal=false;
				}				
			}
			catch(e)
			{
				console.log('isHtml5 error : '+e.message);
				rtnVal=false;
			}
      return rtnVal;
    };

    foin_cookie.obj.prototype.setHtml5 = function (key,val) 
    {
    	var rtnVal=false;
			try
			{
				if(typeof(key)=='undefined' || key.length<1) 
				{
					rtnVal=false;
				}
				else
				{
					localStorage.setItem(key,val);
					rtnVal=true;
				}
			}
			catch(e)
			{
				rtnVal=false;
				console.log('setHtml5 error : '+e.message);
			}
			return rtnVal;
    };

    foin_cookie.obj.prototype.getHtml5 = function (key) 
    {
    	var rtnVal=null;
    	
			try
			{
				if(typeof(key)=='undefined' || key.length<1) 
				{
					rtnVal=null;
				}
				else
				{
					rtnVal = localStorage.getItem(key);
				}
			}
			catch(e)
			{
				rtnVal=null;
				console.log('getHtml5 error : '+e.message);
			}
			return rtnVal;
    };

    foin_cookie.obj.prototype.removeHtml5 = function (key) 
    {
    	var rtnVal=false;
    	
			try
			{
				if(typeof(key)=='undefined' || key.length<1) 
				{
					rtnVal=false;
				}
				else
				{
					localStorage.removeItem(key);
					rtnVal=true;
				}
			}
			catch(e)
			{
				rtnVal=false;
				console.log('clearHtml5 error : '+e.message);
			}
			return rtnVal;
    };

		/**************************************************************************/
		/***  Cookie                                                           ****/
		/**************************************************************************/
    foin_cookie.obj.prototype.setCookie = function (key,val,exdays) 
    {
    	var rtnVal=false;
    	if(typeof(key)=='undefined' || key.length<1) return false;
    	if(typeof(exdays)=='undefined' || exdays.length<1) exdays=365;
    	
			try
			{
	  		var d = new Date();
    		d.setTime(d.getTime() + (exdays*24*60*60*1000));
    		var expires = "expires="+ d.toUTCString();
    		document.cookie = key + "=" + val + "; " + expires+"; path=/";
    		rtnVal=true;
			}
			catch(e)
			{
				rtnVal=false;
				console.log('setCookie error : '+e.message);
			}
			return rtnVal;
    };

    foin_cookie.obj.prototype.getCookie = function (key) 
    {
    	var rtnVal=null;
    	if(typeof(key)=='undefined' || key.length<1) return null;
			try
			{
				var name = key + "=";
		    var ca = document.cookie.split(';');
		    for(var i = 0; rtnVal==null && i <ca.length; i++) 
		    {
		      var c = ca[i];
		      while (c.charAt(0)==' ') 
		      {
		      	c = c.substring(1);
		      }
		      if (c.indexOf(name) == 0) 
		      {
		        rtnVal = c.substring(name.length,c.length);
		        break;
		      }
		    }
		    return rtnVal;
			}
			catch(e)
			{
				rtnVal=null;
				console.log('getCookie error : '+e.message);
			}
			return rtnVal;
    };
    
    foin_cookie.obj.prototype.removeCookie = function (key) 
    {
    	var rtnVal=false;
    	var val="empty";
    	if(typeof(key)=='undefined' || key.length<1) return false;
			try
			{
	  		var d = new Date();
    		d.setTime(d.getTime() - 1000);
    		var expires = "expires="+ d.toUTCString();
    		document.cookie = key + "=" + val + "; " + expires;
    		rtnVal=true;
			}
			catch(e)
			{
				rtnVal=false;
				console.log('removeCookie error : '+e.message);
			}
			return rtnVal;
    };
    
		/**************************************************************************/
		/***  Keyword Procedure                                                ****/
		/**************************************************************************/
    foin_cookie.obj.prototype.getKeyword = function () 
    {
    	var rtnVal={"inflow":"","keyword":""};
			try
			{
				var preUrl=document.referrer;
				var l_domain = foinCookie.getUrl(preUrl);
				if(l_domain.indexOf("naver.com")>=0) 
				{
					rtnVal.inflow="naver";
					rtnVal.keyword=foinCookie.getParam(preUrl,"query");
				}
				else if(l_domain.indexOf("daum.net")>=0) 
				{
					rtnVal.inflow="daum";
					rtnVal.keyword=foinCookie.getParam(preUrl,"q");
				}
				if(rtnVal.keyword.length>0)
				{
					rtnVal.keyword=rtnVal.keyword.replace(/,/g,"");
					rtnVal.keyword=decodeURIComponent(rtnVal.keyword);
				}
			}
			catch(e)
			{
				rtnVal={"inflow":"","keyword":""};				
				console.log('getKeyword error : '+e.message);
			}
			return rtnVal;
    };

    foin_cookie.obj.prototype.setKeyword_local = function (rtnInfo) 
    {
    	var rtnVal=false;
    	try
    	{
				if(typeof(this.setting.live_keyword)=='undefined') this.setting.live_keyword="";
				if(this.setting.live_keyword==rtnInfo) return true;	
				this.setting.live_keyword=rtnInfo;
  			if(foinCookie.isHtml5()==true)
  			{
  				foinCookie.setHtml5("FOIN_KEYWORD",rtnInfo);
  			}
 				foinCookie.setCookie("FOIN_KEYWORD1",rtnInfo,30);
			}
			catch(e)
			{
				rtnVal=false;
				console.log('setKeyword_local error : '+e.message);
			}
			return rtnVal;
    };

    foin_cookie.obj.prototype.setKeyword_global = function (keyword)
    {
    	var rtnVal=false;
    	if(typeof(keyword)=='undefined' || keyword==null || keyword.length<1) return;
			var setting=this.setting;
    	try
    	{
    		var l_date = new Date();
				var l_url=setting.refServerUrl+"?servicename=KEYWORD&keyword="+keyword+"&tm="+l_date.getTime()+"&jquerycallback=foinCookie.setKeyword_local";
		    var l_Head = document.getElementsByTagName('HEAD')[0];
		    if(typeof(l_Head)=='undefined') l_Head = document.getElementsByTagName('BODY')[0];
		    var scrObj=document.createElement('SCRIPT');
		    scrObj.type = 'text/javascript';
				scrObj.async = true;
				scrObj.defer = true;
				scrObj.src = l_url;
				l_Head.appendChild(scrObj);  		
				rtnVal=true;
			}
			catch(e)
			{
				rtnVal=false;
				console.log('setKeyword_global error : '+e.message);
			}
			return rtnVal;
    };

		/**************************************************************************/
		/***  Referer  Procedure                                              ****/
		/**************************************************************************/
    foin_cookie.obj.prototype.is_adUrl = function (url) 
    {
				if(	url.indexOf("cgi-bin")>=0
			     || url.indexOf("//ad.")>=0
			     || url.indexOf("compass.adop.cc")>=0
			     || url.indexOf("adex.adux.kr")>=0
			     || url.indexOf("RealMedia")>=0
			     || url.indexOf("mtab.clickmon.co.kr")>=0
			     || url.indexOf(".mrep.kr")>=0
			     || url.indexOf("adx-exchange")>=0
			     || url.indexOf("ad89")>=0
			     || url.indexOf("//adex.")>=0
			     || url.indexOf(".linkprice.")>=0
			     || url.indexOf("img.")>=0
			     || url.indexOf("a.wyzmob.com")>=0
			     || url.indexOf("ad4989")>=0
			     || url.indexOf("google")>=0
			     || url.indexOf("ad.imp")>=0
			     || url.indexOf("//adbiz")>=0
			     || url.indexOf("adex.")>=0
			     || url.indexOf("criteo")>=0
			     || url.indexOf("imadrep")>=0
			     || url.indexOf("adplex")>=0
			     || url.indexOf("doubleclick")>=0
			     || url.indexOf("adbinead")>=0
			     || url.indexOf("mediacategory")>=0
			     || url.indexOf("catad5959")>=0
			     || url.indexOf("widerplanet")>=0
			     || url.indexOf("wisenut")>=0
			     || url.indexOf(".popin.")>=0
			     || url.indexOf(".dable.")>=0
			     || url.indexOf(".igaw.")>=0
			     || url.indexOf(".tpmn.")>=0
			     || url.indexOf(".3dpop.")>=0
			     || url.indexOf("interworksmedia")>=0
			     || url.indexOf(".adop.")>=0
			     || url.indexOf(".digitalcamp.")>=0
			     || url.indexOf(".about.")>=0
			     || url.indexOf(".realclick.")>=0
			     || url.indexOf(".netinsight.")>=0
			     || url.indexOf(".acrosspf.")>=0
			     || url.indexOf(".daumcdn.")>=0
			     || url.indexOf(".piclick.")>=0
				) return true;
				else return false;    	
    }
    
    foin_cookie.obj.prototype.getRefer = function () 
    {
    	var rtnVal=null;
			try
			{
				var nowUrl=location.href;
				var preUrl=document.referrer;
				
				/* ���� ������ ref ������ �϶�� �Ǿ� �ִ� �������� �ִٸ�... */
				if(typeof(foin_where_ref)!="undefined" && foin_where_ref.length!=null)
				{
					var l_host = foinCookie.getUrl(nowUrl);
					if(l_host!=null && l_host.length>0)
					{
						for(var i=0;i<foin_where_ref.length;i++)
						{
							if(foin_where_ref[i]==l_host)
							{
								nowUrl = preUrl;
								break;
							}
						}
					}
				}
				/* ������ URL�� ������� ���� */
				if(foinCookie.is_adUrl(nowUrl)==false)
				{
					preUrl = nowUrl;
				}
				/* REFFER �� ���� �ý��� ȣ�� URL�̸� ������ */
				if(foinCookie.is_adUrl(preUrl)==true)
				{
					preUrl = "";
				}
				if(typeof(preUrl)=='undefined' || preUrl==null || preUrl.length<1)
				{
					rtnVal=null;						
				}
				else
				{
					preUrl = foinCookie.urlCut(foin_domainCutInfo, preUrl);
					if(preUrl.indexOf("#")>=0) preUrl=preUrl.substring(0,preUrl.indexOf("#"));
					rtnVal=preUrl;
				}
			}
			catch(e)
			{
				rtnVal=null;
				console.log('getRefer error : '+e.message);
			}
			return rtnVal;
    };
    
    foin_cookie.obj.prototype.setReferrer_local = function (rtnInfo) 
    {
    	try
    	{
				if(typeof(this.setting.live_ref)=='undefined') this.setting.live_ref="";
				if(this.setting.live_ref==rtnInfo) return ;	
				this.setting.live_ref=rtnInfo;
  			if(foinCookie.isHtml5()==true)
  			{
  				foinCookie.setHtml5("FOIN_CATEGORY",rtnInfo);
  			}
 				foinCookie.setCookie("FOIN_CATEGORY1",rtnInfo,30);
    	}
    	catch(e)
    	{
				console.log('setReferrer_local error : '+e.message);
    	}
    	return;
		};

    foin_cookie.obj.prototype.setReferrer_global = function (ref,title,summary,lang) 
    {
    	if(typeof(ref)=='undefined' || ref==null || ref.length<1) return;
    	if(typeof(title)=='undefined' || title==null) title="";
    	if(typeof(summary)=='undefined' || summary==null) summary="";
    	if(typeof(lang)=='undefined' || lang==null) lang="";
			var setting=this.setting;
    	try
    	{
    		var l_date = new Date();
    		var l_cookieVal = foinCookie.getHtml5("FOIN_CATEGORY");
    		if(l_cookieVal==null) l_cookieVal ="";
    		var l_url=setting.refServerUrl+"?servicename=REF&ref="+ref+"&title="+title+"&summary="+summary+"&lang="+lang+"&cookieval="+l_cookieVal+"&tm="+l_date.getTime()+"&jquerycallback=foinCookie.setReferrer_local";
		    var l_Head = document.getElementsByTagName('HEAD')[0];
		    if(typeof(l_Head)=='undefined') l_Head = document.getElementsByTagName('BODY')[0];
		    var scrObj=document.createElement('SCRIPT');
		    scrObj.type = 'text/javascript';
				scrObj.async = true;
				scrObj.defer = true;
				scrObj.src = l_url;
				l_Head.appendChild(scrObj);  		
			}
			catch(e)
			{
				console.log('setReferrer_global error : '+e.message);
			}
		};

})();


try
{
	if(typeof(foin_cookie_setting)!='undefined' && foin_cookie_setting.slotNum!='undefined' && foin_cookie_setting.slotNum.length<1)
	{
		var l_protocol = location.protocol.toLowerCase();
		
		var l3_date = new Date();
		
		if((l3_date.getTime() % 100)>=0)
		{
			window.foinCookie = new foin_cookie.obj(foin_cookie_setting);
			/* title, summary */
			var Title = "";
			var Summary = "";
			var Lang = "utf-8";
			/* keyword*/
			var keywordInfo = foinCookie.getKeyword();
			if(keywordInfo!=null || keywordInfo.keyword!=null && keywordInfo.keyword.length>0)
			{
				keywordInfo.keyword=foin_Base64.encode(keywordInfo.keyword);
			}
			/* referrer*/
			var refVal=foinCookie.getRefer();
			var useRef = true;
			if(refVal!=null && refVal.length>0)
			{
				var old_refVal = foinCookie.getHtml5("FOIN_REF");
				if(refVal == old_refVal) useRef = false;
				
				/* foinCookie.setCookie("FOIN_REF1",refVal,3); */
				if(useRef==true)
				{
					if(foinCookie.isHtml5()==true) foinCookie.setHtml5("FOIN_REF",refVal);
					refVal=foin_Base64.encode(refVal);
				}
			}
			else useRef = false;
/*�ӽ�*/
console.log("useRef:"+useRef);	

			/* data send */
			if(useRef==true)
			{
	    	try
	    	{
	    		var l_userAgent = window.navigator.userAgent;
	    		l_userAgent=l_userAgent.toLowerCase();
					var l_isChrome = l_userAgent.indexOf("chrome/");
					var l_ver = 0.0; 
					if(l_isChrome>=0)
					{
						l_isChrome = l_isChrome+7;
						var l_end = l_userAgent.indexOf(".",l_isChrome);
						if(l_end<0) l_end = l_userAgent.indexOf(" ",l_isChrome);
						if(l_end<0) l_end = l_userAgent.indexOf(";",l_isChrome);
						try
						{
							if(l_end>0) l_ver = Number(l_userAgent.substring(l_isChrome,l_end));
							else l_ver = Number(l_userAgent.substring(l_isChrome,l_userAgent.length));
						}
						catch(e2)
						{
							console.log(l_userAgent);
							console.log('setReferrer_global error : '+e2.message);
						}
					}	

	    		var l_date = new Date();
	    		var l_url="";
	    		if(l_ver>=80 && foin_cookie_setting.refServerUrl.toLowerCase().indexOf("https:")<0) l_url+="https:";
	    		l_url = l_url + foin_cookie_setting.refServerUrl+"?servicename=CONF&keyword="+keywordInfo.keyword+"&ref="+refVal+"&inflow="+keywordInfo.inflow+"&adurl="+foin_cookie_setting.adServerUrl+"&lang="+Lang+"&tm="+l_date.getTime();
	    		var l_Body = document.getElementsByTagName('BODY')[0];
			    var l_divObj=document.createElement('DIV');
	        var l_style = {position:"absolute", left:"0px", top:"0px", width:"0px", height:"0px", margin:"0px", padding:"0px", border:"none", overflow:"hidden"};
	        for(var key in l_style){
	        	l_divObj.style[key] = l_style[key];
	        }
					l_Body.appendChild(l_divObj);  		
			    var l_scrObj=document.createElement('IFRAME');
			    l_scrObj.src = l_url;
					l_scrObj.width = "0";
					l_scrObj.height = "0";
					l_scrObj.allowTransparency = "true";
					l_scrObj.marginwidth = "0";
					l_scrObj.marginheight = "0";
					l_scrObj.hspace = "0";
					l_scrObj.vspace = "0";
					l_scrObj.frameborder = "0";
					l_scrObj.scrolling = "no";
	        l_style = {width:"0px", height:"0px", margin:"0px", padding:"0px", border:"none"};
	        for(var key in l_style){
	        	l_scrObj.style[key] = l_style[key];
	        }
					l_divObj.appendChild(l_scrObj);  		
				}
				catch(e)
				{
					console.log('setReferrer_global error : '+e.message);
				}
			}	
		}
	}
}
catch(e)
{
	console.log(e.message);
};	
ara"],"name":"Algeria","status":"assigned"},{"alpha2":"EA","alpha3":"","countryCallingCodes":[],"currencies":["EUR"],"emoji":"","ioc":"","languages":[],"name":"Ceuta, Mulilla","status":"reserved"},{"alpha2":"EC","alpha3":"ECU","countryCallingCodes":["+593"],"currencies":["USD"],"emoji":"🇪🇨","ioc":"ECU","languages":["spa","que"],"name":"Ecuador","status":"assigned"},{"alpha2":"EE","alpha3":"EST","countryCallingCodes":["+372"],"currencies":["EUR"],"emoji":"🇪🇪","ioc":"EST","languages":["est"],"name":"Estonia","status":"assigned"},{"alpha2":"EG","alpha3":"EGY","countryCallingCodes":["+20"],"currencies":["EGP"],"emoji":"🇪🇬","ioc":"EGY","languages":["ara"],"name":"Egypt","status":"assigned"},{"alpha2":"EH","alpha3":"ESH","countryCallingCodes":["+212"],"currencies":["MAD"],"emoji":"🇪🇭","ioc":"","languages":[],"name":"Western Sahara","status":"assigned"},{"alpha2":"ER","alpha3":"ERI","countryCallingCodes":["+291"],"currencies":["ERN"],"emoji":"🇪🇷","ioc":"ERI","languages":["eng","ara","tir"],"name":"Eritrea","status":"assigned"},{"alpha2":"ES","alpha3":"ESP","countryCallingCodes":["+34"],"currencies":["EUR"],"emoji":"🇪🇸","ioc":"ESP","languages":["spa"],"name":"Spain","status":"assigned"},{"alpha2":"ET","alpha3":"ETH","countryCallingCodes":["+251"],"currencies":["ETB"],"emoji":"🇪🇹","ioc":"ETH","languages":["amh"],"name":"Ethiopia","status":"assigned"},{"alpha2":"EU","alpha3":"","countryCallingCodes":["+388"],"currencies":["EUR"],"emoji":"🇪🇺","ioc":"","languages":[],"name":"European Union","status":"reserved"},{"alpha2":"FI","alpha3":"FIN","countryCallingCodes":["+358"],"currencies":["EUR"],"emoji":"🇫🇮","ioc":"FIN","languages":["fin","swe"],"name":"Finland","status":"assigned"},{"alpha2":"FJ","alpha3":"FJI","countryCallingCodes":["+679"],"currencies":["FJD"],"emoji":"🇫🇯","ioc":"FIJ","languages":["eng","fij"],"name":"Fiji","status":"assigned"},{"alpha2":"FK","alpha3":"FLK","countryCallingCodes":["+500"],"currencies":["FKP"],"emoji":"🇫🇰","ioc":"","languages":["eng"],"name":"Falkland Islands","status":"assigned"},{"alpha2":"FM","alpha3":"FSM","countryCallingCodes":["+691"],"currencies":["USD"],"emoji":"🇫🇲","ioc":"FSM","languages":["eng"],"name":"Micronesia, Federated States Of","status":"assigned"},{"alpha2":"FO","alpha3":"FRO","countryCallingCodes":["+298"],"currencies":["DKK"],"emoji":"🇫🇴","ioc":"FAI","languages":["fao","dan"],"name":"Faroe Islands","status":"assigned"},{"alpha2":"FQ","alpha3":"ATF","countryCallingCodes":[],"currencies":[],"ioc":"","languages":[],"name":"French Southern and Antarctic Territories","status":"deleted"},{"alpha2":"FR","alpha3":"FRA","countryCallingCodes":["+33"],"currencies":["EUR"],"emoji":"🇫🇷","ioc":"FRA","languages":["fra"],"name":"France","status":"assigned"},{"alpha2":"FX","alpha3":"","countryCallingCodes":["+241"],"currencies":["EUR"],"emoji":"","ioc":"","languages":["fra"],"name":"France, Metropolitan","status":"reserved"},{"alpha2":"GA","alpha3":"GAB","countryCallingCodes":["+241"],"currencies":["XAF"],"emoji":"🇬🇦","ioc":"GAB","languages":["fra"],"name":"Gabon","status":"assigned"},{"alpha2":"GB","alpha3":"GBR","countryCallingCodes":["+44"],"currencies":["GBP"],"emoji":"🇬🇧","ioc":"GBR","languages":["eng","cor","gle","gla","cym"],"name":"United Kingdom","status":"assigned"},{"alpha2":"GD","alpha3":"GRD","countryCallingCodes":["+473"],"currencies":["XCD"],"emoji":"🇬🇩","ioc":"GRN","languages":["eng"],"name":"Grenada","status":"assigned"},{"alpha2":"GE","alpha3":"GEO","countryCallingCodes":["+995"],"currencies":["GEL"],"emoji":"🇬🇪","ioc":"GEO","languages":["kat"],"name":"Georgia","status":"assigned"},{"alpha2":"GE","alpha3":"GEL","countryCallingCodes":[],"currencies":[],"ioc":"","languages":[],"name":"Gilbert and Ellice Islands","status":"deleted"},{"alpha2":"GF","alpha3":"GUF","countryCallingCodes":["+594"],"currencies":["EUR"],"emoji":"🇬🇫","ioc":"","languages":["fra"],"name":"French Guiana","status":"assigned"},{"alpha2":"GG","alpha3":"GGY","countryCallingCodes":["+44"],"currencies":["GBP"],"emoji":"🇬🇬","ioc":"GCI","languages":["fra"],"name":"Guernsey","status":"assigned"},{"alpha2":"GH","alpha3":"GHA","countryCallingCodes":["+233"],"currencies":["GHS"],"emoji":"🇬🇭","ioc":"GHA","languages":["eng"],"name":"Ghana","status":"assigned"},{"alpha2":"GI","alpha3":"GIB","countryCallingCodes":["+350"],"currencies":["GIP"],"emoji":"🇬🇮","ioc":"","languages":["eng"],"name":"Gibraltar","status":"assigned"},{"alpha2":"GL","alpha3":"GRL","countryCallingCodes":["+299"],"currencies":["DKK"],"emoji":"🇬🇱","ioc":"","languages":["kal"],"name":"Greenland","status":"assigned"},{"alpha2":"GM","alpha3":"GMB","countryCallingCodes":["+220"],"currencies":["GMD"],"emoji":"🇬🇲","ioc":"GAM","languages":["eng"],"name":"Gambia","status":"assigned"},{"alpha2":"GN","alpha3":"GIN","countryCallingCodes":["+224"],"currencies":["GNF"],"emoji":"🇬🇳","ioc":"GUI","languages":["fra"],"name":"Guinea","status":"assigned"},{"alpha2":"GP","alpha3":"GLP","countryCallingCodes":["+590"],"currencies":["EUR"],"emoji":"🇬🇵","ioc":"","languages":["fra"],"name":"Guadeloupe","status":"assigned"},{"alpha2":"GQ","alpha3":"GNQ","countryCallingCodes":["+240"],"currencies":["XAF"],"emoji":"🇬🇶","ioc":"GEQ","languages":["spa","fra","por"],"name":"Equatorial Guinea","status":"assigned"},{"alpha2":"GR","alpha3":"GRC","countryCallingCodes":["+30"],"currencies":["EUR"],"emoji":"🇬🇷","ioc":"GRE","languages":["ell"],"name":"Greece","status":"assigned"},{"alpha2":"GS","alpha3":"SGS","countryCallingCodes":[],"currencies":["GBP"],"emoji":"🇬🇸","ioc":"","languages":["eng"],"name":"South Georgia And The South Sandwich Islands","status":"assigned"},{"alpha2":"GT","alpha3":"GTM","countryCallingCodes":["+502"],"currencies":["GTQ"],"emoji":"🇬🇹","ioc":"GUA","languages":["spa"],"name":"Guatemala","status":"assigned"},{"alpha2":"GU","alpha3":"GUM","countryCallingCodes":["+1 671"],"currencies":["USD"],"emoji":"🇬🇺","ioc":"GUM","languages":["eng"],"name":"Guam","status":"assigned"},{"alpha2":"GW","alpha3":"GNB","countryCallingCodes":["+245"],"currencies":["XOF"],"emoji":"🇬🇼","ioc":"GBS","languages":["por"],"name":"Guinea-bissau","status":"assigned"},{"alpha2":"GY","alpha3":"GUY","countryCallingCodes":["+592"],"currencies":["GYD"],"emoji":"🇬🇾","ioc":"GUY","languages":["eng"],"name":"Guyana","status":"assigned"},{"alpha2":"HK","alpha3":"HKG","countryCallingCodes":["+852"],"currencies":["HKD"],"emoji":"🇭🇰","ioc":"HKG","languages":["zho","eng"],"name":"Hong Kong","status":"assigned"},{"alpha2":"HM","alpha3":"HMD","countryCallingCodes":[],"currencies":["AUD"],"emoji":"🇭🇲","ioc":"","languages":[],"name":"Heard Island And McDonald Islands","status":"assigned"},{"alpha2":"HN","alpha3":"HND","countryCallingCodes":["+504"],"currencies":["HNL"],"emoji":"🇭🇳","ioc":"HON","languages":["spa"],"name":"Honduras","status":"assigned"},{"alpha2":"HR","alpha3":"HRV","countryCallingCodes":["+385"],"currencies":["HRK"],"emoji":"🇭🇷","ioc":"CRO","languages":["hrv"],"name":"Croatia","status":"assigned"},{"alpha2":"HT","alpha3":"HTI","countryCallingCodes":["+509"],"currencies":["HTG","USD"],"emoji":"🇭🇹","ioc":"HAI","languages":["fra","hat"],"name":"Haiti","status":"assigned"},{"alpha2":"HU","alpha3":"HUN","countryCallingCodes":["+36"],"currencies":["HUF"],"emoji":"🇭🇺","ioc":"HUN","languages":["hun"],"name":"Hungary","status":"assigned"},{"alpha2":"HV","alpha3":"HVO","countryCallingCodes":[],"currencies":[],"ioc":"","languages":[],"name":"Upper Volta","status":"deleted"},{"alpha2":"IC","alpha3":"","countryCallingCodes":[],"currencies":["EUR"],"emoji":"","ioc":"","languages":[],"name":"Canary Islands","status":"reserved"},{"alpha2":"ID","alpha3":"IDN","countryCallingCodes":["+62"],"currencies":["IDR"],"emoji":"🇮🇩","ioc":"INA","languages":["ind"],"name":"Indonesia","status":"assigned"},{"alpha2":"IE","alpha3":"IRL","countryCallingCodes":["+353"],"currencies":["EUR"],"emoji":"🇮🇪","ioc":"IRL","languages":["eng","gle"],"name":"Ireland","status":"assigned"},{"alpha2":"IL","alpha3":"ISR","countryCallingCodes":["+972"],"currencies":["ILS"],"emoji":"🇮🇱","ioc":"ISR","languages":["heb","ara","eng"],"name":"Israel","status":"assigned"},{"alpha2":"IM","alpha3":"IMN","countryCallingCodes":["+44"],"currencies":["GBP"],"emoji":"🇮🇲","ioc":"","languages":["eng","glv"],"name":"Isle Of Man","status":"assigned"},{"alpha2":"IN","alpha3":"IND","countryCallingCodes":["+91"],"currencies":["INR"],"emoji":"🇮🇳","ioc":"IND","languages":["eng","hin"],"name":"India","status":"assigned"},{"alpha2":"IO","alpha3":"IOT","countryCallingCodes":["+246"],"currencies":["USD"],"emoji":"🇮🇴","ioc":"","languages":["eng"],"name":"British Indian Ocean Territory","status":"assigned"},{"alpha2":"IQ","alpha3":"IRQ","countryCallingCodes":["+964"],"currencies":["IQD"],"emoji":"🇮🇶","ioc":"IRQ","languages":["ara","kur"],"name":"Iraq","status":"assigned"},{"alpha2":"IR","alpha3":"IRN","countryCallingCodes":["+98"],"currencies":["IRR"],"emoji":"🇮🇷","ioc":"IRI","languages":["fas"],"name":"Iran, Islamic Republic Of","status":"assigned"},{"alpha2":"IS","alpha3":"ISL","countryCallingCodes":["+354"],"currencies":["ISK"],"emoji":"🇮🇸","ioc":"ISL","languages":["isl"],"name":"Iceland","status":"assigned"},{"alpha2":"IT","alpha3":"ITA","countryCallingCodes":["+39"],"currencies":["EUR"],"emoji":"🇮🇹","ioc":"ITA","languages":["ita"],"name":"Italy","status":"assigned"},{"alpha2":"JE","alpha3":"JEY","countryCallingCodes":["+44"],"currencies":["GBP"],"emoji":"🇯🇪","ioc":"JCI","languages":["eng","fra"],"name":"Jersey","status":"assigned"},{"alpha2":"JM","alpha3":"JAM","countryCallingCodes":["+1 876"],"currencies":["JMD"],"emoji":"🇯🇲","ioc":"JAM","languages":["eng"],"name":"Jamaica","status":"assigned"},{"alpha2":"JO","alpha3":"JOR","countryCallingCodes":["+962"],"currencies":["JOD"],"emoji":"🇯🇴","ioc":"JOR","languages":["ara"],"name":"Jordan","status":"assigned"},{"alpha2":"JP","alpha3":"JPN","countryCallingCodes":["+81"],"currencies":["JPY"],"emoji":"🇯🇵","ioc":"JPN","languages":["jpn"],"name":"Japan","status":"assigned"},{"alpha2":"JT","alpha3":"JTN","countryCallingCodes":[],"currencies":[],"ioc":"","languages":[],"name":"Johnston Island","status":"deleted"},{"alpha2":"KE","alpha3":"KEN","countryCallingCodes":["+254"],"currencies":["KES"],"emoji":"🇰🇪","ioc":"KEN","languages":["eng","swa"],"name":"Kenya","status":"assigned"},{"alpha2":"KG","alpha3":"KGZ","countryCallingCodes":["+996"],"currencies":["KGS"],"emoji":"🇰🇬","ioc":"KGZ","languages":["rus"],"name":"Kyrgyzstan","status":"assigned"},{"alpha2":"KH","alpha3":"KHM","countryCallingCodes":["+855"],"currencies":["KHR"],"emoji":"🇰🇭","ioc":"CAM","languages":["khm"],"name":"Cambodia","status":"assigned"},{"alpha2":"KI","alpha3":"KIR","countryCallingCodes":["+686"],"currencies":["AUD"],"emoji":"🇰🇮","ioc":"KIR","languages":["eng"],"name":"Kiribati","status":"assigned"},{"alpha2":"KM","alpha3":"COM","countryCallingCodes":["+269"],"currencies":["KMF"],"emoji":"🇰🇲","ioc":"COM","languages":["ara","fra"],"name":"Comoros","status":"assigned"},{"alpha2":"KN","alpha3":"KNA","countryCallingCodes":["+1 869"],"currencies":["XCD"],"emoji":"🇰🇳","ioc":"SKN","languages":["eng"],"name":"Saint Kitts And Nevis","status":"assigned"},{"alpha2":"KP","alpha3":"PRK","countryCallingCodes":["+850"],"currencies":["KPW"],"emoji":"🇰🇵","ioc":"PRK","languages":["kor"],"name":"Korea, Democratic People\'s Republic Of","status":"assigned"},{"alpha2":"KR","alpha3":"KOR","countryCallingCodes":["+82"],"currencies":["KRW"],"emoji":"🇰🇷","ioc":"KOR","languages":["kor"],"name":"Korea, Republic Of","status":"assigned"},{"alpha2":"KW","alpha3":"KWT","countryCallingCodes":["+965"],"currencies":["KWD"],"emoji":"🇰🇼","ioc":"KUW","languages":["ara"],"name":"Kuwait","status":"assigned"},{"alpha2":"KY","alpha3":"CYM","countryCallingCodes":["+1 345"],"currencies":["KYD"],"emoji":"🇰🇾","ioc":"CAY","languages":["eng"],"name":"Cayman Islands","status":"assigned"},{"alpha2":"KZ","alpha3":"KAZ","countryCallingCodes":["+7","+7 6","+7 7"],"currencies":["KZT"],"emoji":"🇰🇿","ioc":"KAZ","languages":["kaz","rus"],"name":"Kazakhstan","status":"assigned"},{"alpha2":"LA","alpha3":"LAO","countryCallingCodes":["+856"],"currencies":["LAK"],"emoji":"🇱🇦","ioc":"LAO","languages":["lao"],"name":"Lao People\'s Democratic Republic","status":"assigned"},{"alpha2":"LB","alpha3":"LBN","countryCallingCodes":["+961"],"currencies":["LBP"],"emoji":"🇱🇧","ioc":"LIB","languages":["ara","hye"],"name":"Lebanon","status":"assigned"},{"alpha2":"LC","alpha3":"LCA","countryCallingCodes":["+1 758"],"currencies":["XCD"],"emoji":"🇱🇨","ioc":"LCA","languages":["eng"],"name":"Saint Lucia","status":"assigned"},{"alpha2":"LI","alpha3":"LIE","countryCallingCodes":["+423"],"currencies":["CHF"],"emoji":"🇱🇮","ioc":"LIE","languages":["deu"],"name":"Liechtenstein","status":"assigned"},{"alpha2":"LK","alpha3":"LKA","countryCallingCodes":["+94"],"currencies":["LKR"],"emoji":"🇱🇰","ioc":"SRI","languages":["sin","tam"],"name":"Sri Lanka","status":"assigned"},{"alpha2":"LR","alpha3":"LBR","countryCallingCodes":["+231"],"currencies":["LRD"],"emoji":"🇱🇷","ioc":"LBR","languages":["eng"],"name":"Liberia","status":"assigned"},{"alpha2":"LS","alpha3":"LSO","countryCallingCodes":["+266"],"currencies":["LSL","ZAR"],"emoji":"🇱🇸","ioc":"LES","languages":["eng","sot"],"name":"Lesotho","status":"assigned"},{"alpha2":"LT","alpha3":"LTU","countryCallingCodes":["+370"],"currencies":["EUR"],"emoji":"🇱🇹","ioc":"LTU","languages":["lit"],"name":"Lithuania","status":"assigned"},{"alpha2":"LU","alpha3":"LUX","countryCallingCodes":["+352"],"currencies":["EUR"],"emoji":"🇱🇺","ioc":"LUX","languages":["fra","deu","ltz"],"name":"Luxembourg","status":"assigned"},{"alpha2":"LV","alpha3":"LVA","countryCallingCodes":["+371"],"currencies":["EUR"],"emoji":"🇱🇻","ioc":"LAT","languages":["lav"],"name":"Latvia","status":"assigned"},{"alpha2":"LY","alpha3":"LBY","countryCallingCodes":["+218"],"currencies":["LYD"],"emoji":"🇱🇾","ioc":"LBA","languages":["ara"],"name":"Libya","status":"assigned"},{"alpha2":"MA","alpha3":"MAR","countryCallingCodes":["+212"],"currencies":["MAD"],"emoji":"🇲🇦","ioc":"MAR","languages":["ara"],"name":"Morocco","status":"assigned"},{"alpha2":"MC","alpha3":"MCO","countryCallingCodes":["+377"],"currencies":["EUR"],"emoji":"🇲🇨","ioc":"MON","languages":["fra"],"name":"Monaco","status":"assigned"},{"alpha2":"MD","alpha3":"MDA","countryCallingCodes":["+373"],"currencies":["MDL"],"emoji":"🇲🇩","ioc":"MDA","languages":["ron"],"name":"Moldova","status":"assigned"},{"alpha2":"ME","alpha3":"MNE","countryCallingCodes":["+382"],"currencies":["EUR"],"emoji":"🇲🇪","ioc":"MNE","languages":["mot"],"name":"Montenegro","status":"assigned"},{"alpha2":"MF","alpha3":"MAF","countryCallingCodes":["+590"],"currencies":["EUR"],"emoji":"🇲🇫","ioc":"","languages":["fra"],"name":"Saint Martin","status":"assigned"},{"alpha2":"MG","alpha3":"MDG","countryCallingCodes":["+261"],"currencies":["MGA"],"emoji":"🇲🇬","ioc":"MAD","languages":["fra","mlg"],"name":"Madagascar","status":"assigned"},{"alpha2":"MH","alpha3":"MHL","countryCallingCodes":["+692"],"currencies":["USD"],"emoji":"🇲🇭","ioc":"MHL","languages":["eng","mah"],"name":"Marshall Islands","status":"assigned"},{"alpha2":"MI","alpha3":"MID","countryCallingCodes":[],"currencies":[],"ioc":"","languages":[],"name":"Midway Islands","status":"deleted"},{"alpha2":"MK","alpha3":"MKD","countryCallingCodes":["+389"],"currencies":["MKD"],"emoji":"🇲🇰","ioc":"MKD","languages":["mkd"],"name":"Macedonia, The Former Yugoslav Republic Of","status":"assigned"},{"alpha2":"ML","alpha3":"MLI","countryCallingCodes":["+223"],"currencies":["XOF"],"emoji":"🇲🇱","ioc":"MLI","languages":["fra"],"name":"Mali","status":"assigned"},{"alpha2":"MM","alpha3":"MMR","countryCallingCodes":["+95"],"currencies":["MMK"],"emoji":"🇲🇲","ioc":"MYA","languages":["mya"],"name":"Myanmar","status":"assigned"},{"alpha2":"MN","alpha3":"MNG","countryCallingCodes":["+976"],"currencies":["MNT"],"emoji":"🇲🇳","ioc":"MGL","languages":["mon"],"name":"Mongolia","status":"assigned"},{"alpha2":"MO","alpha3":"MAC","countryCallingCodes":["+853"],"currencies":["MOP"],"emoji":"🇲🇴","ioc":"MAC","languages":["zho","por"],"name":"Macao","status":"assigned"},{"alpha2":"MP","alpha3":"MNP","countryCallingCodes":["+1 670"],"currencies":["USD"],"emoji":"🇲🇵","ioc":"","languages":["eng"],"name":"Northern Mariana Islands","status":"assigned"},{"alpha2":"MQ","alpha3":"MTQ","countryCallingCodes":["+596"],"currencies":["EUR"],"emoji":"🇲🇶","ioc":"","languages":[],"name":"Martinique","status":"assigned"},{"alpha2":"MR","alpha3":"MRT","countryCallingCodes":["+222"],"currencies":["MRO"],"emoji":"🇲🇷","ioc":"MTN","languages":["ara","fra"],"name":"Mauritania","status":"assigned"},{"alpha2":"MS","alpha3":"MSR","countryCallingCodes":["+1 664"],"currencies":["XCD"],"emoji":"🇲🇸","ioc":"","languages":[],"name":"Montserrat","status":"assigned"},{"alpha2":"MT","alpha3":"MLT","countryCallingCodes":["+356"],"currencies":["EUR"],"emoji":"🇲🇹","ioc":"MLT","languages":["mlt","eng"],"name":"Malta","status":"assigned"},{"alpha2":"MU","alpha3":"MUS","countryCallingCodes":["+230"],"currencies":["MUR"],"emoji":"🇲🇺","ioc":"MRI","languages":["eng","fra"],"name":"Mauritius","status":"assigned"},{"alpha2":"MV","alpha3":"MDV","countryCallingCodes":["+960"],"currencies":["MVR"],"emoji":"🇲🇻","ioc":"MDV","languages":["div"],"name":"Maldives","status":"assigned"},{"alpha2":"MW","alpha3":"MWI","countryCallingCodes":["+265"],"currencies":["MWK"],"emoji":"🇲🇼","ioc":"MAW","languages":["eng","nya"],"name":"Malawi","status":"assigned"},{"alpha2":"MX","alpha3":"MEX","countryCallingCodes":["+52"],"currencies":["MXN","MXV"],"emoji":"🇲🇽","ioc":"MEX","languages":["spa"],"name":"Mexico","status":"assigned"},{"alpha2":"MY","alpha3":"MYS","countryCallingCodes":["+60"],"currencies":["MYR"],"emoji":"🇲🇾","ioc":"MAS","languages":["msa","eng"],"name":"Malaysia","status":"assigned"},{"alpha2":"MZ","alpha3":"MOZ","countryCallingCodes":["+258"],"currencies":["MZN"],"emoji":"🇲🇿","ioc":"MOZ","languages":["por"],"name":"Mozambique","status":"assigned"},{"alpha2":"NA","alpha3":"NAM","countryCallingCodes":["+264"],"currencies":["NAD","ZAR"],"emoji":"🇳🇦","ioc":"NAM","languages":["eng"],"name":"Namibia","status":"assigned"},{"alpha2":"NC","alpha3":"NCL","countryCallingCodes":["+687"],"currencies":["XPF"],"emoji":"🇳🇨","ioc":"","languages":["fra"],"name":"New Caledonia","status":"assigned"},{"alpha2":"NE","alpha3":"NER","countryCallingCodes":["+227"],"currencies":["XOF"],"emoji":"🇳🇪","ioc":"NIG","languages":["fra"],"name":"Niger","status":"assigned"},{"alpha2":"NF","alpha3":"NFK","countryCallingCodes":["+672"],"currencies":["AUD"],"emoji":"🇳🇫","ioc":"","languages":["eng"],"name":"Norfolk Island","status":"assigned"},{"alpha2":"NG","alpha3":"NGA","countryCallingCodes":["+234"],"currencies":["NGN"],"emoji":"🇳🇬","ioc":"NGR","languages":["eng"],"name":"Nigeria","status":"assigned"},{"alpha2":"NH","alpha3":"NHB","countryCallingCodes":[],"currencies":[],"ioc":"","languages":[],"name":"New Hebrides","status":"deleted"},{"alpha2":"NI","alpha3":"NIC","countryCallingCodes":["+505"],"currencies":["NIO"],"emoji":"🇳🇮","ioc":"NCA","languages":["spa"],"name":"Nicaragua","status":"assigned"},{"alpha2":"NL","alpha3":"NLD","countryCallingCodes":["+31"],"currencies":["EUR"],"emoji":"🇳🇱","ioc":"NED","languages":["nld"],"name":"Netherlands","status":"assigned"},{"alpha2":"NO","alpha3":"NOR","countryCallingCodes":["+47"],"currencies":["NOK"],"emoji":"🇳🇴","ioc":"NOR","languages":["nor"],"name":"Norway","status":"assigned"},{"alpha2":"NP","alpha3":"NPL","countryCallingCodes":["+977"],"currencies":["NPR"],"emoji":"🇳🇵","ioc":"NEP","languages":["nep"],"name":"Nepal","status":"assigned"},{"alpha2":"NQ","alpha3":"ATN","countryCallingCodes":[],"currencies":[],"ioc":"","languages":[],"name":"Dronning Maud Land","status":"deleted"},{"alpha2":"NR","alpha3":"NRU","countryCallingCodes":["+674"],"currencies":["AUD"],"emoji":"🇳🇷","ioc":"NRU","languages":["eng","nau"],"name":"Nauru","status":"assigned"},{"alpha2":"NT","alpha3":"NTZ","countryCallingCodes":[],"currencies":[],"ioc":"","languages":[],"name":"Neutral Zone","status":"deleted"},{"alpha2":"NU","alpha3":"NIU","countryCallingCodes":["+683"],"currencies":["NZD"],"emoji":"🇳🇺","ioc":"","languages":["eng"],"name":"Niue","status":"assigned"},{"alpha2":"NZ","alpha3":"NZL","countryCallingCodes":["+64"],"currencies":["NZD"],"emoji":"🇳🇿","ioc":"NZL","languages":["eng"],"name":"New Zealand","status":"assigned"},{"alpha2":"OM","alpha3":"OMN","countryCallingCodes":["+968"],"currencies":["OMR"],"emoji":"🇴🇲","ioc":"OMA","languages":["ara"],"name":"Oman","status":"assigned"},{"alpha2":"PA","alpha3":"PAN","countryCallingCodes":["+507"],"currencies":["PAB","USD"],"emoji":"🇵🇦","ioc":"PAN","languages":["spa"],"name":"Panama","status":"assigned"},{"alpha2":"PC","alpha3":"PCI","countryCallingCodes":[],"currencies":[],"ioc":"","languages":[],"name":"Pacific Islands, Trust Territory of the","status":"deleted"},{"alpha2":"PE","alpha3":"PER","countryCallingCodes":["+51"],"currencies":["PEN"],"emoji":"🇵🇪","ioc":"PER","languages":["spa","aym","que"],"name":"Peru","status":"assigned"},{"alpha2":"PF","alpha3":"PYF","countryCallingCodes":["+689"],"currencies":["XPF"],"emoji":"🇵🇫","ioc":"","languages":["fra"],"name":"French Polynesia","status":"assigned"},{"alpha2":"PG","alpha3":"PNG","countryCallingCodes":["+675"],"currencies":["PGK"],"emoji":"🇵🇬","ioc":"PNG","languages":["eng"],"name":"Papua New Guinea","status":"assigned"},{"alpha2":"PH","alpha3":"PHL","countryCallingCodes":["+63"],"currencies":["PHP"],"emoji":"🇵🇭","ioc":"PHI","languages":["eng"],"name":"Philippines","status":"assigned"},{"alpha2":"PK","alpha3":"PAK","countryCallingCodes":["+92"],"currencies":["PKR"],"emoji":"🇵🇰","ioc":"PAK","languages":["urd","eng"],"name":"Pakistan","status":"assigned"},{"alpha2":"PL","alpha3":"POL","countryCallingCodes":["+48"],"currencies":["PLN"],"emoji":"🇵🇱","ioc":"POL","languages":["pol"],"name":"Poland","status":"assigned"},{"alpha2":"PM","alpha3":"SPM","countryCallingCodes":["+508"],"currencies":["EUR"],"emoji":"🇵🇲","ioc":"","languages":["eng"],"name":"Saint Pierre And Miquelon","status":"assigned"},{"alpha2":"PN","alpha3":"PCN","countryCallingCodes":["+872"],"currencies":["NZD"],"emoji":"🇵🇳","ioc":"","languages":["eng"],"name":"Pitcairn","status":"assigned"},{"alpha2":"PR","alpha3":"PRI","countryCallingCodes":["+1 787","+1 939"],"currencies":["USD"],"emoji":"🇵🇷","ioc":"PUR","languages":["spa","eng"],"name":"Puerto Rico","status":"assigned"},{"alpha2":"PS","alpha3":"PSE","countryCallingCodes":["+970"],"currencies":["JOD","EGP","ILS"],"emoji":"🇵🇸","ioc":"PLE","languages":["ara"],"name":"Palestinian Territory, Occupied","status":"assigned"},{"alpha2":"PT","alpha3":"PRT","countryCallingCodes":["+351"],"currencies":["EUR"],"emoji":"🇵🇹","ioc":"POR","languages":["por"],"name":"Portugal","status":"assigned"},{"alpha2":"PU","alpha3":"PUS","countryCallingCodes":[],"currencies":[],"ioc":"","languages":[],"name":"U.S. Miscellaneous Pacific Islands","status":"deleted"},{"alpha2":"PW","alpha3":"PLW","countryCallingCodes":["+680"],"currencies":["USD"],"emoji":"🇵🇼","ioc":"PLW","languages":["eng"],"name":"Palau","status":"assigned"},{"alpha2":"PY","alpha3":"PRY","countryCallingCodes":["+595"],"currencies":["PYG"],"emoji":"🇵🇾","ioc":"PAR","languages":["spa"],"name":"Paraguay","status":"assigned"},{"alpha2":"PZ","alpha3":"PCZ","countryCallingCodes":[],"currencies":[],"ioc":"","languages":[],"name":"Panama Canal Zone","status":"deleted"},{"alpha2":"QA","alpha3":"QAT","countryCallingCodes":["+974"],"currencies":["QAR"],"emoji":"🇶🇦","ioc":"QAT","languages":["ara"],"name":"Qatar","status":"assigned"},{"alpha2":"RE","alpha3":"REU","countryCallingCodes":["+262"],"currencies":["EUR"],"emoji":"🇷🇪","ioc":"","languages":["fra"],"name":"Reunion","status":"assigned"},{"alpha2":"RH","alpha3":"RHO","countryCallingCodes":[],"currencies":[],"ioc":"","languages":[],"name":"Southern Rhodesia","status":"deleted"},{"alpha2":"RO","alpha3":"ROU","countryCallingCodes":["+40"],"currencies":["RON"],"emoji":"🇷🇴","ioc":"ROU","languages":["ron"],"name":"Romania","status":"assigned"},{"alpha2":"RS","alpha3":"SRB","countryCallingCodes":["+381"],"currencies":["RSD"],"emoji":"🇷🇸","ioc":"SRB","languages":["srp"],"name":"Serbia","status":"assigned"},{"alpha2":"RU","alpha3":"RUS","countryCallingCodes":["+7","+7 3","+7 4","+7 8"],"currencies":["RUB"],"emoji":"🇷🇺","ioc":"RUS","languages":["rus"],"name":"Russian Federation","status":"assigned"},{"alpha2":"RW","alpha3":"RWA","countryCallingCodes":["+250"],"currencies":["RWF"],"emoji":"🇷🇼","ioc":"RWA","languages":["eng","fra","kin"],"name":"Rwanda","status":"assigned"},{"alpha2":"SA","alpha3":"SAU","countryCallingCodes":["+966"],"currencies":["SAR"],"emoji":"🇸🇦","ioc":"KSA","languages":["ara"],"name":"Saudi Arabia","status":"assigned"},{"alpha2":"SB","alpha3":"SLB","countryCallingCodes":["+677"],"currencies":["SBD"],"emoji":"🇸🇧","ioc":"SOL","languages":["eng"],"name":"Solomon Islands","status":"assigned"},{"alpha2":"SC","alpha3":"SYC","countryCallingCodes":["+248"],"currencies":["SCR"],"emoji":"🇸🇨","ioc":"SEY","languages":["eng","fra"],"name":"Seychelles","status":"assigned"},{"alpha2":"SD","alpha3":"SDN","countryCallingCodes":["+249"],"currencies":["SDG"],"emoji":"🇸🇩","ioc":"SUD","languages":["ara","eng"],"name":"Sudan","status":"assigned"},{"alpha2":"SE","alpha3":"SWE","countryCallingCodes":["+46"],"currencies":["SEK"],"emoji":"🇸🇪","ioc":"SWE","languages":["swe"],"name":"Sweden","status":"assigned"},{"alpha2":"SG","alpha3":"SGP","countryCallingCodes":["+65"],"currencies":["SGD"],"emoji":"🇸🇬","ioc":"SIN","languages":["eng","zho","msa","tam"],"name":"Singapore","status":"assigned"},{"alpha2":"SH","alpha3":"SHN","countryCallingCodes":["+290"],"currencies":["SHP"],"emoji":"🇸🇭","ioc":"","languages":["eng"],"name":"Saint Helena, Ascension And Tristan Da Cunha","status":"assigned"},{"alpha2":"SI","alpha3":"SVN","countryCallingCodes":["+386"],"currencies":["EUR"],"emoji":"🇸🇮","ioc":"SLO","languages":["slv"],"name":"Slovenia","status":"assigned"},{"alpha2":"SJ","alpha3":"SJM","countryCallingCodes":["+47"],"currencies":["NOK"],"emoji":"🇸🇯","ioc":"","languages":[],"name":"Svalbard And Jan Mayen","status":"assigned"},{"alpha2":"SK","alpha3":"SVK","countryCallingCodes":["+421"],"currencies":["EUR"],"emoji":"🇸🇰","ioc":"SVK","languages":["slk"],"name":"Slovakia","status":"assigned"},{"alpha2":"SK","alpha3":"SKM","countryCallingCodes":[],"currencies":[],"ioc":"","languages":[],"name":"Sikkim","status":"deleted"},{"alpha2":"SL","alpha3":"SLE","countryCallingCodes":["+232"],"currencies":["SLL"],"emoji":"🇸🇱","ioc":"SLE","languages":["eng"],"name":"Sierra Leone","status":"assigned"},{"alpha2":"SM","alpha3":"SMR","countryCallingCodes":["+378"],"currencies":["EUR"],"emoji":"🇸🇲","ioc":"SMR","languages":["ita"],"name":"San Marino","status":"assigned"},{"alpha2":"SN","alpha3":"SEN","countryCallingCodes":["+221"],"currencies":["XOF"],"emoji":"🇸🇳","ioc":"SEN","languages":["fra"],"name":"Senegal","status":"assigned"},{"alpha2":"SO","alpha3":"SOM","countryCallingCodes":["+252"],"currencies":["SOS"],"emoji":"🇸🇴","ioc":"SOM","languages":["som"],"name":"Somalia","status":"assigned"},{"alpha2":"SR","alpha3":"SUR","countryCallingCodes":["+597"],"currencies":["SRD"],"emoji":"🇸🇷","ioc":"SUR","languages":["nld"],"name":"Suriname","status":"assigned"},{"alpha2":"SS","alpha3":"SSD","countryCallingCodes":["+211"],"currencies":["SSP"],"emoji":"🇸🇸","ioc":"SSD","languages":["eng"],"name":"South Sudan","status":"assigned"},{"alpha2":"ST","alpha3":"STP","countryCallingCodes":["+239"],"currencies":["STD"],"emoji":"🇸🇹","ioc":"STP","languages":["por"],"name":"Sao Tome and Principe","status":"assigned"},{"alpha2":"SU","alpha3":"","countryCallingCodes":[],"currencies":["RUB"],"emoji":"","ioc":"","languages":["rus"],"name":"USSR","status":"reserved"},{"alpha2":"SV","alpha3":"SLV","countryCallingCodes":["+503"],"currencies":["USD"],"emoji":"🇸🇻","ioc":"ESA","languages":["spa"],"name":"El Salvador","status":"assigned"},{"alpha2":"SX","alpha3":"SXM","countryCallingCodes":["+1 721"],"currencies":["ANG"],"emoji":"🇸🇽","ioc":"","languages":["nld"],"name":"Sint Maarten","status":"assigned"},{"alpha2":"SY","alpha3":"SYR","countryCallingCodes":["+963"],"currencies":["SYP"],"emoji":"🇸🇾","ioc":"SYR","languages":["ara"],"name":"Syrian Arab Republic","status":"assigned"},{"alpha2":"SZ","alpha3":"SWZ","countryCallingCodes":["+268"],"currencies":["SZL"],"emoji":"🇸🇿","ioc":"SWZ","languages":["eng","ssw"],"name":"Swaziland","status":"assigned"},{"alpha2":"TA","alpha3":"","countryCallingCodes":["+290"],"currencies":["GBP"],"emoji":"","ioc":"","languages":[],"name":"Tristan de Cunha","status":"reserved"},{"alpha2":"TC","alpha3":"TCA","countryCallingCodes":["+1 649"],"currencies":["USD"],"emoji":"🇹🇨","ioc":"","languages":["eng"],"name":"Turks And Caicos Islands","status":"assigned"},{"alpha2":"TD","alpha3":"TCD","countryCallingCodes":["+235"],"currencies":["XAF"],"emoji":"🇹🇩","ioc":"CHA","languages":["ara","fra"],"name":"Chad","status":"assigned"},{"alpha2":"TF","alpha3":"ATF","countryCallingCodes":[],"currencies":["EUR"],"emoji":"🇹🇫","ioc":"","languages":["fra"],"name":"French Southern Territories","status":"assigned"},{"alpha2":"TG","alpha3":"TGO","countryCallingCodes":["+228"],"currencies":["XOF"],"emoji":"🇹🇬","ioc":"TOG","languages":["fra"],"name":"Togo","status":"assigned"},{"alpha2":"TH","alpha3":"THA","countryCallingCodes":["+66"],"currencies":["THB"],"emoji":"🇹🇭","ioc":"THA","languages":["tha"],"name":"Thailand","status":"assigned"},{"alpha2":"TJ","alpha3":"TJK","countryCallingCodes":["+992"],"currencies":["TJS"],"emoji":"🇹🇯","ioc":"TJK","languages":["tgk","rus"],"name":"Tajikistan","status":"assigned"},{"alpha2":"TK","alpha3":"TKL","countryCallingCodes":["+690"],"currencies":["NZD"],"emoji":"🇹🇰","ioc":"","languages":["eng"],"name":"Tokelau","status":"assigned"},{"alpha2":"TL","alpha3":"TLS","countryCallingCodes":["+670"],"currencies":["USD"],"emoji":"🇹🇱","ioc":"TLS","languages":["por"],"name":"Timor-Leste, Democratic Republic of","status":"assigned"},{"alpha2":"TM","alpha3":"TKM","countryCallingCodes":["+993"],"currencies":["TMT"],"emoji":"🇹🇲","ioc":"TKM","languages":["tuk","rus"],"name":"Turkmenistan","status":"assigned"},{"alpha2":"TN","alpha3":"TUN","countryCallingCodes":["+216"],"currencies":["TND"],"emoji":"🇹🇳","ioc":"TUN","languages":["ara"],"name":"Tunisia","status":"assigned"},{"alpha2":"TO","alpha3":"TON","countryCallingCodes":["+676"],"currencies":["TOP"],"emoji":"🇹🇴","ioc":"TGA","languages":["eng"],"name":"Tonga","status":"assigned"},{"alpha2":"TP","alpha3":"TMP","countryCallingCodes":[],"currencies":[],"ioc":"","languages":[],"name":"East Timor","status":"deleted"},{"alpha2":"TR","alpha3":"TUR","countryCallingCodes":["+90"],"currencies":["TRY"],"emoji":"🇹🇷","ioc":"TUR","languages":["tur"],"name":"Turkey","status":"assigned"},{"alpha2":"TT","alpha3":"TTO","countryCallingCodes":["+1 868"],"currencies":["TTD"],"emoji":"🇹🇹","ioc":"TTO","languages":["eng"],"name":"Trinidad And Tobago","status":"assigned"},{"alpha2":"TV","alpha3":"TUV","countryCallingCodes":["+688"],"currencies":["AUD"],"emoji":"🇹🇻","ioc":"TUV","languages":["eng"],"name":"Tuvalu","status":"assigned"},{"alpha2":"TW","alpha3":"TWN","countryCallingCodes":["+886"],"currencies":["TWD"],"emoji":"🇹🇼","ioc":"TPE","languages":["zho"],"name":"Taiwan","status":"assigned"},{"alpha2":"TZ","alpha3":"TZA","countryCallingCodes":["+255"],"currencies":["TZS"],"emoji":"🇹🇿","ioc":"TAN","languages":["swa","eng"],"name":"Tanzania, United Republic Of","status":"assigned"},{"alpha2":"UA","alpha3":"UKR","countryCallingCodes":["+380"],"currencies":["UAH"],"emoji":"🇺🇦","ioc":"UKR","languages":["ukr","rus"],"name":"Ukraine","status":"assigned"},{"alpha2":"UG","alpha3":"UGA","countryCallingCodes":["+256"],"currencies":["UGX"],"emoji":"🇺🇬","ioc":"UGA","languages":["eng","swa"],"name":"Uganda","status":"assigned"},{"alpha2":"UK","alpha3":"","countryCallingCodes":[],"currencies":["GBP"],"emoji":"","ioc":"","languages":["eng","cor","gle","gla","cym"],"name":"United Kingdom","status":"reserved"},{"alpha2":"UM","alpha3":"UMI","countryCallingCodes":["+1"],"currencies":["USD"],"emoji":"🇺🇲","ioc":"","languages":["eng"],"name":"United States Minor Outlying Islands","status":"assigned"},{"alpha2":"US","alpha3":"USA","countryCallingCodes":["+1"],"currencies":["USD"],"emoji":"🇺🇸","ioc":"USA","languages":["eng"],"name":"United States","status":"assigned"},{"alpha2":"UY","alpha3":"URY","countryCallingCodes":["+598"],"currencies":["UYU","UYI"],"emoji":"🇺🇾","ioc":"URU","languages":["spa"],"name":"Uruguay","status":"assigned"},{"alpha2":"UZ","alpha3":"UZB","countryCallingCodes":["+998"],"currencies":["UZS"],"emoji":"🇺🇿","ioc":"UZB","languages":["uzb","rus"],"name":"Uzbekistan","status":"assigned"},{"alpha2":"VA","alpha3":"VAT","countryCallingCodes":["+379","+39"],"currencies":["EUR"],"emoji":"🇻🇦","ioc":"","languages":["ita"],"name":"Vatican City State","status":"assigned"},{"alpha2":"VC","alpha3":"VCT","countryCallingCodes":["+1 784"],"currencies":["XCD"],"emoji":"🇻🇨","ioc":"VIN","languages":["eng"],"name":"Saint Vincent And The Grenadines","status":"assigned"},{"alpha2":"VD","alpha3":"VDR","countryCallingCodes":[],"currencies":[],"ioc":"","languages":[],"name":"Viet-Nam, Democratic Republic of","status":"deleted"},{"alpha2":"VE","alpha3":"VEN","countryCallingCodes":["+58"],"currencies":["VEF"],"emoji":"🇻🇪","ioc":"VEN","languages":["spa"],"name":"Venezuela, Bolivarian Republic Of","status":"assigned"},{"alpha2":"VG","alpha3":"VGB","countryCallingCodes":["+1 284"],"currencies":["USD"],"emoji":"🇻🇬","ioc":"IVB","languages":["eng"],"name":"Virgin Islands (British)","status":"assigned"},{"alpha2":"VI","alpha3":"VIR","countryCallingCodes":["+1 340"],"currencies":["USD"],"emoji":"🇻🇮","ioc":"ISV","languages":["eng"],"name":"Virgin Islands (US)","status":"assigned"},{"alpha2":"VN","alpha3":"VNM","countryCallingCodes":["+84"],"currencies":["VND"],"emoji":"🇻🇳","ioc":"VIE","languages":["vie"],"name":"Viet Nam","status":"assigned"},{"alpha2":"VU","alpha3":"VUT","countryCallingCodes":["+678"],"currencies":["VUV"],"emoji":"🇻🇺","ioc":"VAN","languages":["bis","eng","fra"],"name":"Vanuatu","status":"assigned"},{"alpha2":"WF","alpha3":"WLF","countryCallingCodes":["+681"],"currencies":["XPF"],"emoji":"🇼🇫","ioc":"","languages":["fra"],"name":"Wallis And Futuna","status":"assigned"},{"alpha2":"WK","alpha3":"WAK","countryCallingCodes":[],"currencies":[],"ioc":"","languages":[],"name":"Wake Island","status":"deleted"},{"alpha2":"WS","alpha3":"WSM","countryCallingCodes":["+685"],"currencies":["WST"],"emoji":"🇼🇸","ioc":"SAM","languages":["eng","smo"],"name":"Samoa","status":"assigned"},{"alpha2":"XK","alpha3":"","countryCallingCodes":["+383"],"currencies":["EUR"],"emoji":"","ioc":"KOS","languages":["sqi","srp","bos","tur","rom"],"name":"Kosovo","status":"user assigned"},{"alpha2":"YD","alpha3":"YMD","countryCallingCodes":[],"currencies":[],"ioc":"","languages":[],"name":"Yemen, Democratic","status":"deleted"},{"alpha2":"YE","alpha3":"YEM","countryCallingCodes":["+967"],"currencies":["YER"],"emoji":"🇾🇪","ioc":"YEM","languages":["ara"],"name":"Yemen","status":"assigned"},{"alpha2":"YT","alpha3":"MYT","countryCallingCodes":["+262"],"currencies":["EUR"],"emoji":"🇾🇹","ioc":"","languages":["fra"],"name":"Mayotte","status":"assigned"},{"alpha2":"YU","alpha3":"YUG","countryCallingCodes":[],"currencies":[],"ioc":"","languages":[],"name":"Yugoslavia","status":"deleted"},{"alpha2":"ZA","alpha3":"ZAF","countryCallingCodes":["+27"],"currencies":["ZAR"],"emoji":"🇿🇦","ioc":"RSA","languages":["afr","eng","nbl","som","tso","ven","xho","zul"],"name":"South Africa","status":"assigned"},{"alpha2":"ZM","alpha3":"ZMB","countryCallingCodes":["+260"],"currencies":["ZMW"],"emoji":"🇿🇲","ioc":"ZAM","languages":["eng"],"name":"Zambia","status":"assigned"},{"alpha2":"ZR","alpha3":"ZAR","countryCallingCodes":[],"currencies":[],"ioc":"","languages":[],"name":"Zaire","status":"deleted"},{"alpha2":"ZW","alpha3":"ZWE","countryCallingCodes":["+263"],"currencies":["USD","ZAR","BWP","GBP","EUR"],"emoji":"🇿🇼","ioc":"ZIM","languages":["eng","sna","nde"],"name":"Zimbabwe","status":"assigned"}]')},1517:function(a){a.exports=JSON.parse('[{"code":"AED","decimals":2,"name":"United Arab Emirates dirham","number":"784"},{"code":"AFN","decimals":2,"name":"Afghan afghani","number":"971"},{"code":"ALL","decimals":2,"name":"Albanian lek","number":"8"},{"code":"AMD","decimals":2,"name":"Armenian dram","number":"51"},{"code":"ANG","decimals":2,"name":"Netherlands Antillean guilder","number":"532"},{"code":"AOA","decimals":2,"name":"Angolan kwanza","number":"973"},{"code":"ARS","decimals":2,"name":"Argentine peso","number":"32"},{"code":"AUD","decimals":2,"name":"Australian dollar","number":"36"},{"code":"AWG","decimals":2,"name":"Aruban florin","number":"533"},{"code":"AZN","decimals":2,"name":"Azerbaijani manat","number":"944"},{"code":"BAM","decimals":2,"name":"Bosnia and Herzegovina convertible mark","number":"977"},{"code":"BBD","decimals":2,"name":"Barbados dollar","number":"52"},{"code":"BDT","decimals":2,"name":"Bangladeshi taka","number":"50"},{"code":"BGN","decimals":2,"name":"Bulgarian lev","number":"975"},{"code":"BHD","decimals":3,"name":"Bahraini dinar","number":"48"},{"code":"BIF","decimals":0,"name":"Burundian franc","number":"108"},{"code":"BMD","decimals":2,"name":"Bermudian dollar (customarily known as Bermuda dollar)","number":"60"},{"code":"BND","decimals":2,"name":"Brunei dollar","number":"96"},{"code":"BOB","decimals":2,"name":"Boliviano","number":"68"},{"code":"BOV","decimals":2,"name":"Bolivian Mvdol (funds code)","number":"984"},{"code":"BRL","decimals":2,"name":"Brazilian real","number":"986"},{"code":"BSD","decimals":2,"name":"Bahamian dollar","number":"44"},{"code":"BTN","decimals":2,"name":"Bhutanese ngultrum","number":"64"},{"code":"BWP","decimals":2,"name":"Botswana pula","number":"72"},{"code":"BYR","decimals":0,"name":"Belarusian ruble","number":"974"},{"code":"BZD","decimals":2,"name":"Belize dollar","number":"84"},{"code":"CAD","decimals":2,"name":"Canadian dollar","number":"124"},{"code":"CDF","decimals":2,"name":"Congolese franc","number":"976"},{"code":"CHE","decimals":2,"name":"WIR Euro (complementary currency)","number":"947"},{"code":"CHF","decimals":2,"name":"Swiss franc","number":"756"},{"code":"CHW","decimals":2,"name":"WIR Franc (complementary currency)","number":"948"},{"code":"CLF","decimals":0,"name":"Unidad de Fomento (funds code)","number":"990"},{"code":"CLP","decimals":0,"name":"Chilean peso","number":"152"},{"code":"CNY","decimals":2,"name":"Chinese yuan","number":"156"},{"code":"COP","decimals":2,"name":"Colombian peso","number":"170"},{"code":"COU","decimals":2,"name":"Unidad de Valor Real","number":"970"},{"code":"CRC","decimals":2,"name":"Costa Rican colon","number":"188"},{"code":"CUC","decimals":2,"name":"Cuban convertible peso","number":"931"},{"code":"CUP","decimals":2,"name":"Cuban peso","number":"192"},{"code":"CVE","decimals":0,"name":"Cape Verde escudo","number":"132"},{"code":"CZK","decimals":2,"name":"Czech koruna","number":"203"},{"code":"DJF","decimals":0,"name":"Djiboutian franc","number":"262"},{"code":"DKK","decimals":2,"name":"Danish krone","number":"208"},{"code":"DOP","decimals":2,"name":"Dominican peso","number":"214"},{"code":"DZD","decimals":2,"name":"Algerian dinar","number":"12"},{"code":"EGP","decimals":2,"name":"Egyptian pound","number":"818"},{"code":"ERN","decimals":2,"name":"Eritrean nakfa","number":"232"},{"code":"ETB","decimals":2,"name":"Ethiopian birr","number":"230"},{"code":"EUR","decimals":2,"name":"Euro","number":"978"},{"code":"FJD","decimals":2,"name":"Fiji dollar","number":"242"},{"code":"FKP","decimals":2,"name":"Falkland Islands pound","number":"238"},{"code":"GBP","decimals":2,"name":"Pound sterling","number":"826"},{"code":"GEL","decimals":2,"name":"Georgian lari","number":"981"},{"code":"GHS","decimals":2,"name":"Ghanaian cedi","number":"936"},{"code":"GIP","decimals":2,"name":"Gibraltar pound","number":"292"},{"code":"GMD","decimals":2,"name":"Gambian dalasi","number":"270"},{"code":"GNF","decimals":0,"name":"Guinean franc","number":"324"},{"code":"GTQ","decimals":2,"name":"Guatemalan quetzal","number":"320"},{"code":"GYD","decimals":2,"name":"Guyanese dollar","number":"328"},{"code":"HKD","decimals":2,"name":"Hong Kong dollar","number":"344"},{"code":"HNL","decimals":2,"name":"Honduran lempira","number":"340"},{"code":"HRK","decimals":2,"name":"Croatian kuna","number":"191"},{"code":"HTG","decimals":2,"name":"Haitian gourde","number":"332"},{"code":"HUF","decimals":2,"name":"Hungarian forint","number":"348"},{"code":"IDR","decimals":2,"name":"Indonesian rupiah","number":"360"},{"code":"ILS","decimals":2,"name":"Israeli new shekel","number":"376"},{"code":"INR","decimals":2,"name":"Indian rupee","number":"356"},{"code":"IQD","decimals":3,"name":"Iraqi dinar","number":"368"},{"code":"IRR","decimals":0,"name":"Iranian rial","number":"364"},{"code":"ISK","decimals":0,"name":"Icelandic króna","number":"352"},{"code":"JMD","decimals":2,"name":"Jamaican dollar","number":"388"},{"code":"JOD","decimals":3,"name":"Jordanian dinar","number":"400"},{"code":"JPY","decimals":0,"name":"Japanese yen","number":"392"},{"code":"KES","decimals":2,"name":"Kenyan shilling","number":"404"},{"code":"KGS","decimals":2,"name":"Kyrgyzstani som","number":"417"},{"code":"KHR","decimals":2,"name":"Cambodian riel","number":"116"},{"code":"KMF","decimals":0,"name":"Comoro franc","number":"174"},{"code":"KPW","decimals":0,"name":"North Korean won","number":"408"},{"code":"KRW","decimals":0,"name":"South Korean won","number":"410"},{"code":"KWD","decimals":3,"name":"Kuwaiti dinar","number":"414"},{"code":"KYD","decimals":2,"name":"Cayman Islands dollar","number":"136"},{"code":"KZT","decimals":2,"name":"Kazakhstani tenge","number":"398"},{"code":"LAK","decimals":0,"name":"Lao kip","number":"418"},{"code":"LBP","decimals":0,"name":"Lebanese pound","number":"422"},{"code":"LKR","decimals":2,"name":"Sri Lankan rupee","number":"144"},{"code":"LRD","decimals":2,"name":"Liberian dollar","number":"430"},{"code":"LSL","decimals":2,"name":"Lesotho loti","number":"426"},{"code":"LTL","decimals":2,"name":"Lithuanian litas","number":"440"},{"code":"LVL","decimals":2,"name":"Latvian lats","number":"428"},{"code":"LYD","decimals":3,"name":"Libyan dinar","number":"434"},{"code":"MAD","decimals":2,"name":"Moroccan dirham","number":"504"},{"code":"MDL","decimals":2,"name":"Moldovan leu","number":"498"},{"code":"MGA","decimals":0,"name":"Malagasy ariary","number":"969"},{"code":"MKD","decimals":0,"name":"Macedonian denar","number":"807"},{"code":"MMK","decimals":0,"name":"Myanma kyat","number":"104"},{"code":"MNT","decimals":2,"name":"Mongolian tugrik","number":"496"},{"code":"MOP","decimals":2,"name":"Macanese pataca","number":"446"},{"code":"MRO","decimals":0,"name":"Mauritanian ouguiya","number":"478"},{"code":"MUR","decimals":2,"name":"Mauritian rupee","number":"480"},{"code":"MVR","decimals":2,"name":"Maldivian rufiyaa","number":"462"},{"code":"MWK","decimals":2,"name":"Malawian kwacha","number":"454"},{"code":"MXN","decimals":2,"name":"Mexican peso","number":"484"},{"code":"MXV","decimals":2,"name":"Mexican Unidad de Inversion (UDI) (funds code)","number":"979"},{"code":"MYR","decimals":2,"name":"Malaysian ringgit","number":"458"},{"code":"MZN","decimals":2,"name":"Mozambican metical","number":"943"},{"code":"NAD","decimals":2,"name":"Namibian dollar","number":"516"},{"code":"NGN","decimals":2,"name":"Nigerian naira","number":"566"},{"code":"NIO","decimals":2,"name":"Nicaraguan córdoba","number":"558"},{"code":"NOK","decimals":2,"name":"Norwegian krone","number":"578"},{"code":"NPR","decimals":2,"name":"Nepalese rupee","number":"524"},{"code":"NZD","decimals":2,"name":"New Zealand dollar","number":"554"},{"code":"OMR","decimals":3,"name":"Omani rial","number":"512"},{"code":"PAB","decimals":2,"name":"Panamanian balboa","number":"590"},{"code":"PEN","decimals":2,"name":"Peruvian nuevo sol","number":"604"},{"code":"PGK","decimals":2,"name":"Papua New Guinean kina","number":"598"},{"code":"PHP","decimals":2,"name":"Philippine peso","number":"608"},{"code":"PKR","decimals":2,"name":"Pakistani rupee","number":"586"},{"code":"PLN","decimals":2,"name":"Polish złoty","number":"985"},{"code":"PYG","decimals":0,"name":"Paraguayan guaraní","number":"600"},{"code":"QAR","decimals":2,"name":"Qatari riyal","number":"634"},{"code":"RON","decimals":2,"name":"Romanian new leu","number":"946"},{"code":"RSD","decimals":2,"name":"Serbian dinar","number":"941"},{"code":"RUB","decimals":2,"name":"Russian rouble","number":"643"},{"code":"RWF","decimals":0,"name":"Rwandan franc","number":"646"},{"code":"SAR","decimals":2,"name":"Saudi riyal","number":"682"},{"code":"SBD","decimals":2,"name":"Solomon Islands dollar","number":"90"},{"code":"SCR","decimals":2,"name":"Seychelles rupee","number":"690"},{"code":"SDG","decimals":2,"name":"Sudanese pound","number":"938"},{"code":"SEK","decimals":2,"name":"Swedish krona/kronor","number":"752"},{"code":"SGD","decimals":2,"name":"Singapore dollar","number":"702"},{"code":"SHP","decimals":2,"name":"Saint Helena pound","number":"654"},{"code":"SLL","decimals":0,"name":"Sierra Leonean leone","number":"694"},{"code":"SOS","decimals":2,"name":"Somali shilling","number":"706"},{"code":"SRD","decimals":2,"name":"Surinamese dollar","number":"968"},{"code":"SSP","decimals":2,"name":"South Sudanese pound","number":"728"},{"code":"STD","decimals":0,"name":"São Tomé and Príncipe dobra","number":"678"},{"code":"SYP","decimals":2,"name":"Syrian pound","number":"760"},{"code":"SZL","decimals":2,"name":"Swazi lilangeni","number":"748"},{"code":"THB","decimals":2,"name":"Thai baht","number":"764"},{"code":"TJS","decimals":2,"name":"Tajikistani somoni","number":"972"},{"code":"TMT","decimals":2,"name":"Turkmenistani manat","number":"934"},{"code":"TND","decimals":3,"name":"Tunisian dinar","number":"788"},{"code":"TOP","decimals":2,"name":"Tongan paʻanga","number":"776"},{"code":"TRY","decimals":2,"name":"Turkish lira","number":"949"},{"code":"TTD","decimals":2,"name":"Trinidad and Tobago dollar","number":"780"},{"code":"TWD","decimals":2,"name":"New Taiwan dollar","number":"901"},{"code":"TZS","decimals":2,"name":"Tanzanian shilling","number":"834"},{"code":"UAH","decimals":2,"name":"Ukrainian hryvnia","number":"980"},{"code":"UGX","decimals":2,"name":"Ugandan shilling","number":"800"},{"code":"USD","decimals":2,"name":"United States dollar","number":"840"},{"code":"USN","decimals":2,"name":"United States dollar (next day) (funds code)","number":"997"},{"code":"USS","decimals":2,"name":"United States dollar (same day) (funds code) (one source[who?] claims it is no longer used, but it is still on the ISO 4217-MA list)","number":"998"},{"code":"UYI","decimals":0,"name":"Uruguay Peso en Unidades Indexadas (URUIURUI) (funds code)","number":"940"},{"code":"UYU","decimals":2,"name":"Uruguayan peso","number":"858"},{"code":"UZS","decimals":2,"name":"Uzbekistan som","number":"860"},{"code":"VEF","decimals":2,"name":"Venezuelan bolívar fuerte","number":"937"},{"code":"VND","decimals":0,"name":"Vietnamese dong","number":"704"},{"code":"VUV","decimals":0,"name":"Vanuatu vatu","number":"548"},{"code":"WST","decimals":2,"name":"Samoan tala","number":"882"},{"code":"XAF","decimals":0,"name":"CFA franc BEAC","number":"950"},{"code":"XAG","decimals":null,"name":"Silver (one troy ounce)","number":"961"},{"code":"XAU","decimals":null,"name":"Gold (one troy ounce)","number":"959"},{"code":"XBA","decimals":null,"name":"European Composite Unit (EURCO) (bond market unit)","number":"955"},{"code":"XBB","decimals":null,"name":"European Monetary Unit (E.M.U.-6) (bond market unit)","number":"956"},{"code":"XBC","decimals":null,"name":"European Unit of Account 9 (E.U.A.-9) (bond market unit)","number":"957"},{"code":"XBD","decimals":null,"name":"European Unit of Account 17 (E.U.A.-17) (bond market unit)","number":"958"},{"code":"XCD","decimals":2,"name":"East Caribbean dollar","number":"951"},{"code":"XDR","decimals":null,"name":"Special drawing rights","number":"960"},{"code":"XFU","decimals":null,"name":"UIC franc (special settlement currency)","number":"Nil"},{"code":"XOF","decimals":0,"name":"CFA franc BCEAO","number":"952"},{"code":"XPD","decimals":null,"name":"Palladium (one troy ounce)","number":"964"},{"code":"XPF","decimals":0,"name":"CFP franc","number":"953"},{"code":"XPT","decimals":null,"name":"Platinum (one troy ounce)","number":"962"},{"code":"XTS","decimals":null,"name":"Code reserved for testing purposes","number":"963"},{"code":"XXX","decimals":null,"name":"No currency","number":"999"},{"code":"YER","decimals":2,"name":"Yemeni rial","number":"886"},{"code":"ZAR","decimals":2,"name":"South African rand","number":"710"},{"code":"ZMW","decimals":2,"name":"Zambian kwacha","number":"967"}]')},1518:function(a){a.exports=JSON.parse('[{"alpha2":"aa","alpha3":"aar","bibliographic":"","name":"Afar"},{"alpha2":"ab","alpha3":"abk","bibliographic":"","name":"Abkhazian"},{"alpha2":"","alpha3":"ace","bibliographic":"","name":"Achinese"},{"alpha2":"","alpha3":"ach","bibliographic":"","name":"Acoli"},{"alpha2":"","alpha3":"ada","bibliographic":"","name":"Adangme"},{"alpha2":"","alpha3":"ady","bibliographic":"","name":"Adygei"},{"alpha2":"","alpha3":"ady","bibliographic":"","name":"Adyghe"},{"alpha2":"","alpha3":"afa","bibliographic":"","name":"Afro-Asiatic languages"},{"alpha2":"","alpha3":"afh","bibliographic":"","name":"Afrihili"},{"alpha2":"af","alpha3":"afr","bibliographic":"","name":"Afrikaans"},{"alpha2":"","alpha3":"ain","bibliographic":"","name":"Ainu"},{"alpha2":"ak","alpha3":"aka","bibliographic":"","name":"Akan"},{"alpha2":"","alpha3":"akk","bibliographic":"","name":"Akkadian"},{"alpha2":"","alpha3":"ale","bibliographic":"","name":"Aleut"},{"alpha2":"","alpha3":"alg","bibliographic":"","name":"Algonquian languages"},{"alpha2":"","alpha3":"alt","bibliographic":"","name":"Southern Altai"},{"alpha2":"am","alpha3":"amh","bibliographic":"","name":"Amharic"},{"alpha2":"","alpha3":"ang","bibliographic":"","name":"English, Old (ca.450-1100)"},{"alpha2":"","alpha3":"anp","bibliographic":"","name":"Angika"},{"alpha2":"","alpha3":"apa","bibliographic":"","name":"Apache languages"},{"alpha2":"ar","alpha3":"ara","bibliographic":"","name":"Arabic"},{"alpha2":"","alpha3":"arc","bibliographic":"","name":"Imperial Aramaic (700-300 BCE)"},{"alpha2":"","alpha3":"arc","bibliographic":"","name":"Official Aramaic (700-300 BCE)"},{"alpha2":"an","alpha3":"arg","bibliographic":"","name":"Aragonese"},{"alpha2":"","alpha3":"arn","bibliographic":"","name":"Mapuche"},{"alpha2":"","alpha3":"arn","bibliographic":"","name":"Mapudungun"},{"alpha2":"","alpha3":"arp","bibliographic":"","name":"Arapaho"},{"alpha2":"","alpha3":"art","bibliographic":"","name":"Artificial languages"},{"alpha2":"","alpha3":"arw","bibliographic":"","name":"Arawak"},{"alpha2":"as","alpha3":"asm","bibliographic":"","name":"Assamese"},{"alpha2":"","alpha3":"ast","bibliographic":"","name":"Asturian"},{"alpha2":"","alpha3":"ast","bibliographic":"","name":"Asturleonese"},{"alpha2":"","alpha3":"ast","bibliographic":"","name":"Bable"},{"alpha2":"","alpha3":"ast","bibliographic":"","name":"Leonese"},{"alpha2":"","alpha3":"ath","bibliographic":"","name":"Athapascan languages"},{"alpha2":"","alpha3":"aus","bibliographic":"","name":"Australian languages"},{"alpha2":"av","alpha3":"ava","bibliographic":"","name":"Avaric"},{"alpha2":"ae","alpha3":"ave","bibliographic":"","name":"Avestan"},{"alpha2":"","alpha3":"awa","bibliographic":"","name":"Awadhi"},{"alpha2":"ay","alpha3":"aym","bibliographic":"","name":"Aymara"},{"alpha2":"az","alpha3":"aze","bibliographic":"","name":"Azerbaijani"},{"alpha2":"","alpha3":"bad","bibliographic":"","name":"Banda languages"},{"alpha2":"","alpha3":"bai","bibliographic":"","name":"Bamileke languages"},{"alpha2":"ba","alpha3":"bak","bibliographic":"","name":"Bashkir"},{"alpha2":"","alpha3":"bal","bibliographic":"","name":"Baluchi"},{"alpha2":"bm","alpha3":"bam","bibliographic":"","name":"Bambara"},{"alpha2":"","alpha3":"ban","bibliographic":"","name":"Balinese"},{"alpha2":"","alpha3":"bas","bibliographic":"","name":"Basa"},{"alpha2":"","alpha3":"bat","bibliographic":"","name":"Baltic languages"},{"alpha2":"","alpha3":"bej","bibliographic":"","name":"Bedawiyet"},{"alpha2":"","alpha3":"bej","bibliographic":"","name":"Beja"},{"alpha2":"be","alpha3":"bel","bibliographic":"","name":"Belarusian"},{"alpha2":"","alpha3":"bem","bibliographic":"","name":"Bemba"},{"alpha2":"bn","alpha3":"ben","bibliographic":"","name":"Bengali"},{"alpha2":"","alpha3":"ber","bibliographic":"","name":"Berber languages"},{"alpha2":"","alpha3":"bho","bibliographic":"","name":"Bhojpuri"},{"alpha2":"bh","alpha3":"bih","bibliographic":"","name":"Bihari languages"},{"alpha2":"","alpha3":"bik","bibliographic":"","name":"Bikol"},{"alpha2":"","alpha3":"bin","bibliographic":"","name":"Bini"},{"alpha2":"","alpha3":"bin","bibliographic":"","name":"Edo"},{"alpha2":"bi","alpha3":"bis","bibliographic":"","name":"Bislama"},{"alpha2":"","alpha3":"bla","bibliographic":"","name":"Siksika"},{"alpha2":"","alpha3":"bnt","bibliographic":"","name":"Bantu languages"},{"alpha2":"bo","alpha3":"bod","bibliographic":"tib","name":"Tibetan"},{"alpha2":"bs","alpha3":"bos","bibliographic":"","name":"Bosnian"},{"alpha2":"","alpha3":"bra","bibliographic":"","name":"Braj"},{"alpha2":"br","alpha3":"bre","bibliographic":"","name":"Breton"},{"alpha2":"","alpha3":"btk","bibliographic":"","name":"Batak languages"},{"alpha2":"","alpha3":"bua","bibliographic":"","name":"Buriat"},{"alpha2":"","alpha3":"bug","bibliographic":"","name":"Buginese"},{"alpha2":"bg","alpha3":"bul","bibliographic":"","name":"Bulgarian"},{"alpha2":"","alpha3":"byn","bibliographic":"","name":"Bilin"},{"alpha2":"","alpha3":"byn","bibliographic":"","name":"Blin"},{"alpha2":"","alpha3":"cad","bibliographic":"","name":"Caddo"},{"alpha2":"","alpha3":"cai","bibliographic":"","name":"Central American Indian languages"},{"alpha2":"","alpha3":"car","bibliographic":"","name":"Galibi Carib"},{"alpha2":"ca","alpha3":"cat","bibliographic":"","name":"Catalan"},{"alpha2":"ca","alpha3":"cat","bibliographic":"","name":"Valencian"},{"alpha2":"","alpha3":"cau","bibliographic":"","name":"Caucasian languages"},{"alpha2":"","alpha3":"ceb","bibliographic":"","name":"Cebuano"},{"alpha2":"","alpha3":"cel","bibliographic":"","name":"Celtic languages"},{"alpha2":"cs","alpha3":"ces","bibliographic":"cze","name":"Czech"},{"alpha2":"ch","alpha3":"cha","bibliographic":"","name":"Chamorro"},{"alpha2":"","alpha3":"chb","bibliographic":"","name":"Chibcha"},{"alpha2":"ce","alpha3":"che","bibliographic":"","name":"Chechen"},{"alpha2":"","alpha3":"chg","bibliographic":"","name":"Chagatai"},{"alpha2":"","alpha3":"chk","bibliographic":"","name":"Chuukese"},{"alpha2":"","alpha3":"chm","bibliographic":"","name":"Mari"},{"alpha2":"","alpha3":"chn","bibliographic":"","name":"Chinook jargon"},{"alpha2":"","alpha3":"cho","bibliographic":"","name":"Choctaw"},{"alpha2":"","alpha3":"chp","bibliographic":"","name":"Chipewyan"},{"alpha2":"","alpha3":"chp","bibliographic":"","name":"Dene Suline"},{"alpha2":"","alpha3":"chr","bibliographic":"","name":"Cherokee"},{"alpha2":"cu","alpha3":"chu","bibliographic":"","name":"Church Slavic"},{"alpha2":"cu","alpha3":"chu","bibliographic":"","name":"Church Slavonic"},{"alpha2":"cu","alpha3":"chu","bibliographic":"","name":"Old Bulgarian"},{"alpha2":"cu","alpha3":"chu","bibliographic":"","name":"Old Church Slavonic"},{"alpha2":"cu","alpha3":"chu","bibliographic":"","name":"Old Slavonic"},{"alpha2":"cv","alpha3":"chv","bibliographic":"","name":"Chuvash"},{"alpha2":"","alpha3":"chy","bibliographic":"","name":"Cheyenne"},{"alpha2":"","alpha3":"cmc","bibliographic":"","name":"Chamic languages"},{"alpha2":"","alpha3":"cop","bibliographic":"","name":"Coptic"},{"alpha2":"kw","alpha3":"cor","bibliographic":"","name":"Cornish"},{"alpha2":"co","alpha3":"cos","bibliographic":"","name":"Corsican"},{"alpha2":"","alpha3":"cpe","bibliographic":"","name":"Creoles and pidgins, English based"},{"alpha2":"","alpha3":"cpf","bibliographic":"","name":"Creoles and pidgins, French-based"},{"alpha2":"","alpha3":"cpp","bibliographic":"","name":"Creoles and pidgins, Portuguese-based"},{"alpha2":"cr","alpha3":"cre","bibliographic":"","name":"Cree"},{"alpha2":"","alpha3":"crh","bibliographic":"","name":"Crimean Tatar"},{"alpha2":"","alpha3":"crh","bibliographic":"","name":"Crimean Turkish"},{"alpha2":"","alpha3":"crp","bibliographic":"","name":"Creoles and pidgins"},{"alpha2":"","alpha3":"csb","bibliographic":"","name":"Kashubian"},{"alpha2":"","alpha3":"cus","bibliographic":"","name":"Cushitic languages"},{"alpha2":"cy","alpha3":"cym","bibliographic":"wel","name":"Welsh"},{"alpha2":"","alpha3":"dak","bibliographic":"","name":"Dakota"},{"alpha2":"da","alpha3":"dan","bibliographic":"","name":"Danish"},{"alpha2":"","alpha3":"dar","bibliographic":"","name":"Dargwa"},{"alpha2":"","alpha3":"day","bibliographic":"","name":"Land Dayak languages"},{"alpha2":"","alpha3":"del","bibliographic":"","name":"Delaware"},{"alpha2":"","alpha3":"den","bibliographic":"","name":"Slave (Athapascan)"},{"alpha2":"de","alpha3":"deu","bibliographic":"ger","name":"German"},{"alpha2":"","alpha3":"dgr","bibliographic":"","name":"Dogrib"},{"alpha2":"","alpha3":"din","bibliographic":"","name":"Dinka"},{"alpha2":"dv","alpha3":"div","bibliographic":"","name":"Dhivehi"},{"alpha2":"dv","alpha3":"div","bibliographic":"","name":"Divehi"},{"alpha2":"dv","alpha3":"div","bibliographic":"","name":"Maldivian"},{"alpha2":"","alpha3":"doi","bibliographic":"","name":"Dogri"},{"alpha2":"","alpha3":"dra","bibliographic":"","name":"Dravidian languages"},{"alpha2":"","alpha3":"dsb","bibliographic":"","name":"Lower Sorbian"},{"alpha2":"","alpha3":"dua","bibliographic":"","name":"Duala"},{"alpha2":"","alpha3":"dum","bibliographic":"","name":"Dutch, Middle (ca.1050-1350)"},{"alpha2":"","alpha3":"dyu","bibliographic":"","name":"Dyula"},{"alpha2":"dz","alpha3":"dzo","bibliographic":"","name":"Dzongkha"},{"alpha2":"","alpha3":"efi","bibliographic":"","name":"Efik"},{"alpha2":"","alpha3":"egy","bibliographic":"","name":"Egyptian (Ancient)"},{"alpha2":"","alpha3":"eka","bibliographic":"","name":"Ekajuk"},{"alpha2":"el","alpha3":"ell","bibliographic":"gre","name":"Greek, Modern (1453-)"},{"alpha2":"","alpha3":"elx","bibliographic":"","name":"Elamite"},{"alpha2":"en","alpha3":"eng","bibliographic":"","name":"English"},{"alpha2":"","alpha3":"enm","bibliographic":"","name":"English, Middle (1100-1500)"},{"alpha2":"eo","alpha3":"epo","bibliographic":"","name":"Esperanto"},{"alpha2":"et","alpha3":"est","bibliographic":"","name":"Estonian"},{"alpha2":"eu","alpha3":"eus","bibliographic":"baq","name":"Basque"},{"alpha2":"ee","alpha3":"ewe","bibliographic":"","name":"Ewe"},{"alpha2":"","alpha3":"ewo","bibliographic":"","name":"Ewondo"},{"alpha2":"","alpha3":"fan","bibliographic":"","name":"Fang"},{"alpha2":"fo","alpha3":"fao","bibliographic":"","name":"Faroese"},{"alpha2":"fa","alpha3":"fas","bibliographic":"per","name":"Persian"},{"alpha2":"","alpha3":"fat","bibliographic":"","name":"Fanti"},{"alpha2":"fj","alpha3":"fij","bibliographic":"","name":"Fijian"},{"alpha2":"","alpha3":"fil","bibliographic":"","name":"Filipino"},{"alpha2":"","alpha3":"fil","bibliographic":"","name":"Pilipino"},{"alpha2":"fi","alpha3":"fin","bibliographic":"","name":"Finnish"},{"alpha2":"","alpha3":"fiu","bibliographic":"","name":"Finno-Ugrian languages"},{"alpha2":"","alpha3":"fon","bibliographic":"","name":"Fon"},{"alpha2":"fr","alpha3":"fra","bibliographic":"fre","name":"French"},{"alpha2":"","alpha3":"frm","bibliographic":"","name":"French, Middle (ca.1400-1600)"},{"alpha2":"","alpha3":"fro","bibliographic":"","name":"French, Old (842-ca.1400)"},{"alpha2":"","alpha3":"frr","bibliographic":"","name":"Northern Frisian"},{"alpha2":"","alpha3":"frs","bibliographic":"","name":"Eastern Frisian"},{"alpha2":"fy","alpha3":"fry","bibliographic":"","name":"Western Frisian"},{"alpha2":"ff","alpha3":"ful","bibliographic":"","name":"Fulah"},{"alpha2":"","alpha3":"fur","bibliographic":"","name":"Friulian"},{"alpha2":"","alpha3":"gaa","bibliographic":"","name":"Ga"},{"alpha2":"","alpha3":"gay","bibliographic":"","name":"Gayo"},{"alpha2":"","alpha3":"gba","bibliographic":"","name":"Gbaya"},{"alpha2":"","alpha3":"gem","bibliographic":"","name":"Germanic languages"},{"alpha2":"","alpha3":"gez","bibliographic":"","name":"Geez"},{"alpha2":"","alpha3":"gil","bibliographic":"","name":"Gilbertese"},{"alpha2":"gd","alpha3":"gla","bibliographic":"","name":"Gaelic"},{"alpha2":"gd","alpha3":"gla","bibliographic":"","name":"Scottish Gaelic"},{"alpha2":"ga","alpha3":"gle","bibliographic":"","name":"Irish"},{"alpha2":"gl","alpha3":"glg","bibliographic":"","name":"Galician"},{"alpha2":"gv","alpha3":"glv","bibliographic":"","name":"Manx"},{"alpha2":"","alpha3":"gmh","bibliographic":"","name":"German, Middle High (ca.1050-1500)"},{"alpha2":"","alpha3":"goh","bibliographic":"","name":"German, Old High (ca.750-1050)"},{"alpha2":"","alpha3":"gon","bibliographic":"","name":"Gondi"},{"alpha2":"","alpha3":"gor","bibliographic":"","name":"Gorontalo"},{"alpha2":"","alpha3":"got","bibliographic":"","name":"Gothic"},{"alpha2":"","alpha3":"grb","bibliographic":"","name":"Grebo"},{"alpha2":"","alpha3":"grc","bibliographic":"","name":"Greek, Ancient (to 1453)"},{"alpha2":"gn","alpha3":"grn","bibliographic":"","name":"Guarani"},{"alpha2":"","alpha3":"gsw","bibliographic":"","name":"Alemannic"},{"alpha2":"","alpha3":"gsw","bibliographic":"","name":"Alsatian"},{"alpha2":"","alpha3":"gsw","bibliographic":"","name":"Swiss German"},{"alpha2":"gu","alpha3":"guj","bibliographic":"","name":"Gujarati"},{"alpha2":"","alpha3":"gwi","bibliographic":"","name":"Gwich\'in"},{"alpha2":"","alpha3":"hai","bibliographic":"","name":"Haida"},{"alpha2":"ht","alpha3":"hat","bibliographic":"","name":"Haitian"},{"alpha2":"ht","alpha3":"hat","bibliographic":"","name":"Haitian Creole"},{"alpha2":"ha","alpha3":"hau","bibliographic":"","name":"Hausa"},{"alpha2":"","alpha3":"haw","bibliographic":"","name":"Hawaiian"},{"alpha2":"he","alpha3":"heb","bibliographic":"","name":"Hebrew"},{"alpha2":"hz","alpha3":"her","bibliographic":"","name":"Herero"},{"alpha2":"","alpha3":"hil","bibliographic":"","name":"Hiligaynon"},{"alpha2":"","alpha3":"him","bibliographic":"","name":"Himachali languages"},{"alpha2":"","alpha3":"him","bibliographic":"","name":"Western Pahari languages"},{"alpha2":"hi","alpha3":"hin","bibliographic":"","name":"Hindi"},{"alpha2":"","alpha3":"hit","bibliographic":"","name":"Hittite"},{"alpha2":"","alpha3":"hmn","bibliographic":"","name":"Hmong"},{"alpha2":"","alpha3":"hmn","bibliographic":"","name":"Mong"},{"alpha2":"ho","alpha3":"hmo","bibliographic":"","name":"Hiri Motu"},{"alpha2":"hr","alpha3":"hrv","bibliographic":"","name":"Croatian"},{"alpha2":"","alpha3":"hsb","bibliographic":"","name":"Upper Sorbian"},{"alpha2":"hu","alpha3":"hun","bibliographic":"","name":"Hungarian"},{"alpha2":"","alpha3":"hup","bibliographic":"","name":"Hupa"},{"alpha2":"hy","alpha3":"hye","bibliographic":"arm","name":"Armenian"},{"alpha2":"","alpha3":"iba","bibliographic":"","name":"Iban"},{"alpha2":"ig","alpha3":"ibo","bibliographic":"","name":"Igbo"},{"alpha2":"io","alpha3":"ido","bibliographic":"","name":"Ido"},{"alpha2":"ii","alpha3":"iii","bibliographic":"","name":"Nuosu"},{"alpha2":"ii","alpha3":"iii","bibliographic":"","name":"Sichuan Yi"},{"alpha2":"","alpha3":"ijo","bibliographic":"","name":"Ijo languages"},{"alpha2":"iu","alpha3":"iku","bibliographic":"","name":"Inuktitut"},{"alpha2":"ie","alpha3":"ile","bibliographic":"","name":"Interlingue"},{"alpha2":"ie","alpha3":"ile","bibliographic":"","name":"Occidental"},{"alpha2":"","alpha3":"ilo","bibliographic":"","name":"Iloko"},{"alpha2":"ia","alpha3":"ina","bibliographic":"","name":"Interlingua (International Auxiliary Language Association)"},{"alpha2":"","alpha3":"inc","bibliographic":"","name":"Indic languages"},{"alpha2":"id","alpha3":"ind","bibliographic":"","name":"Indonesian"},{"alpha2":"","alpha3":"ine","bibliographic":"","name":"Indo-European languages"},{"alpha2":"","alpha3":"inh","bibliographic":"","name":"Ingush"},{"alpha2":"ik","alpha3":"ipk","bibliographic":"","name":"Inupiaq"},{"alpha2":"","alpha3":"ira","bibliographic":"","name":"Iranian languages"},{"alpha2":"","alpha3":"iro","bibliographic":"","name":"Iroquoian languages"},{"alpha2":"is","alpha3":"isl","bibliographic":"ice","name":"Icelandic"},{"alpha2":"it","alpha3":"ita","bibliographic":"","name":"Italian"},{"alpha2":"jv","alpha3":"jav","bibliographic":"","name":"Javanese"},{"alpha2":"","alpha3":"jbo","bibliographic":"","name":"Lojban"},{"alpha2":"ja","alpha3":"jpn","bibliographic":"","name":"Japanese"},{"alpha2":"","alpha3":"jpr","bibliographic":"","name":"Judeo-Persian"},{"alpha2":"","alpha3":"jrb","bibliographic":"","name":"Judeo-Arabic"},{"alpha2":"","alpha3":"kaa","bibliographic":"","name":"Kara-Kalpak"},{"alpha2":"","alpha3":"kab","bibliographic":"","name":"Kabyle"},{"alpha2":"","alpha3":"kac","bibliographic":"","name":"Jingpho"},{"alpha2":"","alpha3":"kac","bibliographic":"","name":"Kachin"},{"alpha2":"kl","alpha3":"kal","bibliographic":"","name":"Greenlandic"},{"alpha2":"kl","alpha3":"kal","bibliographic":"","name":"Kalaallisut"},{"alpha2":"","alpha3":"kam","bibliographic":"","name":"Kamba"},{"alpha2":"kn","alpha3":"kan","bibliographic":"","name":"Kannada"},{"alpha2":"","alpha3":"kar","bibliographic":"","name":"Karen languages"},{"alpha2":"ks","alpha3":"kas","bibliographic":"","name":"Kashmiri"},{"alpha2":"ka","alpha3":"kat","bibliographic":"geo","name":"Georgian"},{"alpha2":"kr","alpha3":"kau","bibliographic":"","name":"Kanuri"},{"alpha2":"","alpha3":"kaw","bibliographic":"","name":"Kawi"},{"alpha2":"kk","alpha3":"kaz","bibliographic":"","name":"Kazakh"},{"alpha2":"","alpha3":"kbd","bibliographic":"","name":"Kabardian"},{"alpha2":"","alpha3":"kha","bibliographic":"","name":"Khasi"},{"alpha2":"","alpha3":"khi","bibliographic":"","name":"Khoisan languages"},{"alpha2":"km","alpha3":"khm","bibliographic":"","name":"Central Khmer"},{"alpha2":"","alpha3":"kho","bibliographic":"","name":"Khotanese"},{"alpha2":"","alpha3":"kho","bibliographic":"","name":"Sakan"},{"alpha2":"ki","alpha3":"kik","bibliographic":"","name":"Gikuyu"},{"alpha2":"ki","alpha3":"kik","bibliographic":"","name":"Kikuyu"},{"alpha2":"rw","alpha3":"kin","bibliographic":"","name":"Kinyarwanda"},{"alpha2":"ky","alpha3":"kir","bibliographic":"","name":"Kirghiz"},{"alpha2":"ky","alpha3":"kir","bibliographic":"","name":"Kyrgyz"},{"alpha2":"","alpha3":"kmb","bibliographic":"","name":"Kimbundu"},{"alpha2":"","alpha3":"kok","bibliographic":"","name":"Konkani"},{"alpha2":"kv","alpha3":"kom","bibliographic":"","name":"Komi"},{"alpha2":"kg","alpha3":"kon","bibliographic":"","name":"Kongo"},{"alpha2":"ko","alpha3":"kor","bibliographic":"","name":"Korean"},{"alpha2":"","alpha3":"kos","bibliographic":"","name":"Kosraean"},{"alpha2":"","alpha3":"kpe","bibliographic":"","name":"Kpelle"},{"alpha2":"","alpha3":"krc","bibliographic":"","name":"Karachay-Balkar"},{"alpha2":"","alpha3":"krl","bibliographic":"","name":"Karelian"},{"alpha2":"","alpha3":"kro","bibliographic":"","name":"Kru languages"},{"alpha2":"","alpha3":"kru","bibliographic":"","name":"Kurukh"},{"alpha2":"kj","alpha3":"kua","bibliographic":"","name":"Kuanyama"},{"alpha2":"kj","alpha3":"kua","bibliographic":"","name":"Kwanyama"},{"alpha2":"","alpha3":"kum","bibliographic":"","name":"Kumyk"},{"alpha2":"ku","alpha3":"kur","bibliographic":"","name":"Kurdish"},{"alpha2":"","alpha3":"kut","bibliographic":"","name":"Kutenai"},{"alpha2":"","alpha3":"lad","bibliographic":"","name":"Ladino"},{"alpha2":"","alpha3":"lah","bibliographic":"","name":"Lahnda"},{"alpha2":"","alpha3":"lam","bibliographic":"","name":"Lamba"},{"alpha2":"lo","alpha3":"lao","bibliographic":"","name":"Lao"},{"alpha2":"la","alpha3":"lat","bibliographic":"","name":"Latin"},{"alpha2":"lv","alpha3":"lav","bibliographic":"","name":"Latvian"},{"alpha2":"","alpha3":"lez","bibliographic":"","name":"Lezghian"},{"alpha2":"li","alpha3":"lim","bibliographic":"","name":"Limburgan"},{"alpha2":"li","alpha3":"lim","bibliographic":"","name":"Limburger"},{"alpha2":"li","alpha3":"lim","bibliographic":"","name":"Limburgish"},{"alpha2":"ln","alpha3":"lin","bibliographic":"","name":"Lingala"},{"alpha2":"lt","alpha3":"lit","bibliographic":"","name":"Lithuanian"},{"alpha2":"","alpha3":"lol","bibliographic":"","name":"Mongo"},{"alpha2":"","alpha3":"loz","bibliographic":"","name":"Lozi"},{"alpha2":"lb","alpha3":"ltz","bibliographic":"","name":"Letzeburgesch"},{"alpha2":"lb","alpha3":"ltz","bibliographic":"","name":"Luxembourgish"},{"alpha2":"","alpha3":"lua","bibliographic":"","name":"Luba-Lulua"},{"alpha2":"lu","alpha3":"lub","bibliographic":"","name":"Luba-Katanga"},{"alpha2":"lg","alpha3":"lug","bibliographic":"","name":"Ganda"},{"alpha2":"","alpha3":"lui","bibliographic":"","name":"Luiseno"},{"alpha2":"","alpha3":"lun","bibliographic":"","name":"Lunda"},{"alpha2":"","alpha3":"luo","bibliographic":"","name":"Luo (Kenya and Tanzania)"},{"alpha2":"","alpha3":"lus","bibliographic":"","name":"Lushai"},{"alpha2":"","alpha3":"mad","bibliographic":"","name":"Madurese"},{"alpha2":"","alpha3":"mag","bibliographic":"","name":"Magahi"},{"alpha2":"mh","alpha3":"mah","bibliographic":"","name":"Marshallese"},{"alpha2":"","alpha3":"mai","bibliographic":"","name":"Maithili"},{"alpha2":"","alpha3":"mak","bibliographic":"","name":"Makasar"},{"alpha2":"ml","alpha3":"mal","bibliographic":"","name":"Malayalam"},{"alpha2":"","alpha3":"man","bibliographic":"","name":"Mandingo"},{"alpha2":"","alpha3":"map","bibliographic":"","name":"Austronesian languages"},{"alpha2":"mr","alpha3":"mar","bibliographic":"","name":"Marathi"},{"alpha2":"","alpha3":"mas","bibliographic":"","name":"Masai"},{"alpha2":"","alpha3":"mdf","bibliographic":"","name":"Moksha"},{"alpha2":"","alpha3":"mdr","bibliographic":"","name":"Mandar"},{"alpha2":"","alpha3":"men","bibliographic":"","name":"Mende"},{"alpha2":"","alpha3":"mga","bibliographic":"","name":"Irish, Middle (900-1200)"},{"alpha2":"","alpha3":"mic","bibliographic":"","name":"Mi\'kmaq"},{"alpha2":"","alpha3":"mic","bibliographic":"","name":"Micmac"},{"alpha2":"","alpha3":"min","bibliographic":"","name":"Minangkabau"},{"alpha2":"","alpha3":"mis","bibliographic":"","name":"Uncoded languages"},{"alpha2":"mk","alpha3":"mkd","bibliographic":"mac","name":"Macedonian"},{"alpha2":"","alpha3":"mkh","bibliographic":"","name":"Mon-Khmer languages"},{"alpha2":"mg","alpha3":"mlg","bibliographic":"","name":"Malagasy"},{"alpha2":"mt","alpha3":"mlt","bibliographic":"","name":"Maltese"},{"alpha2":"","alpha3":"mnc","bibliographic":"","name":"Manchu"},{"alpha2":"","alpha3":"mni","bibliographic":"","name":"Manipuri"},{"alpha2":"","alpha3":"mno","bibliographic":"","name":"Manobo languages"},{"alpha2":"","alpha3":"moh","bibliographic":"","name":"Mohawk"},{"alpha2":"mn","alpha3":"mon","bibliographic":"","name":"Mongolian"},{"alpha2":"","alpha3":"mos","bibliographic":"","name":"Mossi"},{"alpha2":"","alpha3":"mot","bibliographic":"","name":"Montenegrin"},{"alpha2":"mi","alpha3":"mri","bibliographic":"mao","name":"Maori"},{"alpha2":"ms","alpha3":"msa","bibliographic":"may","name":"Malay"},{"alpha2":"","alpha3":"mul","bibliographic":"","name":"Multiple languages"},{"alpha2":"","alpha3":"mun","bibliographic":"","name":"Munda languages"},{"alpha2":"","alpha3":"mus","bibliographic":"","name":"Creek"},{"alpha2":"","alpha3":"mwl","bibliographic":"","name":"Mirandese"},{"alpha2":"","alpha3":"mwr","bibliographic":"","name":"Marwari"},{"alpha2":"my","alpha3":"mya","bibliographic":"bur","name":"Burmese"},{"alpha2":"","alpha3":"myn","bibliographic":"","name":"Mayan languages"},{"alpha2":"","alpha3":"myv","bibliographic":"","name":"Erzya"},{"alpha2":"","alpha3":"nah","bibliographic":"","name":"Nahuatl languages"},{"alpha2":"","alpha3":"nai","bibliographic":"","name":"North American Indian languages"},{"alpha2":"","alpha3":"nap","bibliographic":"","name":"Neapolitan"},{"alpha2":"na","alpha3":"nau","bibliographic":"","name":"Nauru"},{"alpha2":"nv","alpha3":"nav","bibliographic":"","name":"Navaho"},{"alpha2":"nv","alpha3":"nav","bibliographic":"","name":"Navajo"},{"alpha2":"nr","alpha3":"nbl","bibliographic":"","name":"Ndebele, South"},{"alpha2":"nr","alpha3":"nbl","bibliographic":"","name":"South Ndebele"},{"alpha2":"nd","alpha3":"nde","bibliographic":"","name":"Ndebele, North"},{"alpha2":"nd","alpha3":"nde","bibliographic":"","name":"North Ndebele"},{"alpha2":"ng","alpha3":"ndo","bibliographic":"","name":"Ndonga"},{"alpha2":"","alpha3":"nds","bibliographic":"","name":"German, Low"},{"alpha2":"","alpha3":"nds","bibliographic":"","name":"Low German"},{"alpha2":"","alpha3":"nds","bibliographic":"","name":"Low Saxon"},{"alpha2":"","alpha3":"nds","bibliographic":"","name":"Saxon, Low"},{"alpha2":"ne","alpha3":"nep","bibliographic":"","name":"Nepali"},{"alpha2":"","alpha3":"new","bibliographic":"","name":"Nepal Bhasa"},{"alpha2":"","alpha3":"new","bibliographic":"","name":"Newari"},{"alpha2":"","alpha3":"nia","bibliographic":"","name":"Nias"},{"alpha2":"","alpha3":"nic","bibliographic":"","name":"Niger-Kordofanian languages"},{"alpha2":"","alpha3":"niu","bibliographic":"","name":"Niuean"},{"alpha2":"nl","alpha3":"nld","bibliographic":"dut","name":"Dutch"},{"alpha2":"nl","alpha3":"nld","bibliographic":"dut","name":"Flemish"},{"alpha2":"nn","alpha3":"nno","bibliographic":"","name":"Norwegian Nynorsk"},{"alpha2":"nn","alpha3":"nno","bibliographic":"","name":"Nynorsk, Norwegian"},{"alpha2":"nb","alpha3":"nob","bibliographic":"","name":"Bokmål, Norwegian"},{"alpha2":"nb","alpha3":"nob","bibliographic":"","name":"Norwegian Bokmål"},{"alpha2":"","alpha3":"nog","bibliographic":"","name":"Nogai"},{"alpha2":"","alpha3":"non","bibliographic":"","name":"Norse, Old"},{"alpha2":"no","alpha3":"nor","bibliographic":"","name":"Norwegian"},{"alpha2":"","alpha3":"nqo","bibliographic":"","name":"N\'Ko"},{"alpha2":"","alpha3":"nso","bibliographic":"","name":"Northern Sotho"},{"alpha2":"","alpha3":"nso","bibliographic":"","name":"Pedi"},{"alpha2":"","alpha3":"nso","bibliographic":"","name":"Sepedi"},{"alpha2":"","alpha3":"nso","bibliographic":"","name":"Sotho, Northern"},{"alpha2":"","alpha3":"nub","bibliographic":"","name":"Nubian languages"},{"alpha2":"","alpha3":"nwc","bibliographic":"","name":"Classical Nepal Bhasa"},{"alpha2":"","alpha3":"nwc","bibliographic":"","name":"Classical Newari"},{"alpha2":"","alpha3":"nwc","bibliographic":"","name":"Old Newari"},{"alpha2":"ny","alpha3":"nya","bibliographic":"","name":"Chewa"},{"alpha2":"ny","alpha3":"nya","bibliographic":"","name":"Chichewa"},{"alpha2":"ny","alpha3":"nya","bibliographic":"","name":"Nyanja"},{"alpha2":"","alpha3":"nym","bibliographic":"","name":"Nyamwezi"},{"alpha2":"","alpha3":"nyn","bibliographic":"","name":"Nyankole"},{"alpha2":"","alpha3":"nyo","bibliographic":"","name":"Nyoro"},{"alpha2":"","alpha3":"nzi","bibliographic":"","name":"Nzima"},{"alpha2":"oc","alpha3":"oci","bibliographic":"","name":"Occitan (post 1500)"},{"alpha2":"oj","alpha3":"oji","bibliographic":"","name":"Ojibwa"},{"alpha2":"or","alpha3":"ori","bibliographic":"","name":"Oriya"},{"alpha2":"om","alpha3":"orm","bibliographic":"","name":"Oromo"},{"alpha2":"","alpha3":"osa","bibliographic":"","name":"Osage"},{"alpha2":"os","alpha3":"oss","bibliographic":"","name":"Ossetian"},{"alpha2":"os","alpha3":"oss","bibliographic":"","name":"Ossetic"},{"alpha2":"","alpha3":"ota","bibliographic":"","name":"Turkish, Ottoman (1500-1928)"},{"alpha2":"","alpha3":"oto","bibliographic":"","name":"Otomian languages"},{"alpha2":"","alpha3":"paa","bibliographic":"","name":"Papuan languages"},{"alpha2":"","alpha3":"pag","bibliographic":"","name":"Pangasinan"},{"alpha2":"","alpha3":"pal","bibliographic":"","name":"Pahlavi"},{"alpha2":"","alpha3":"pam","bibliographic":"","name":"Kapampangan"},{"alpha2":"","alpha3":"pam","bibliographic":"","name":"Pampanga"},{"alpha2":"pa","alpha3":"pan","bibliographic":"","name":"Panjabi"},{"alpha2":"pa","alpha3":"pan","bibliographic":"","name":"Punjabi"},{"alpha2":"","alpha3":"pap","bibliographic":"","name":"Papiamento"},{"alpha2":"","alpha3":"pau","bibliographic":"","name":"Palauan"},{"alpha2":"","alpha3":"peo","bibliographic":"","name":"Persian, Old (ca.600-400 B.C.)"},{"alpha2":"","alpha3":"phi","bibliographic":"","name":"Philippine languages"},{"alpha2":"","alpha3":"phn","bibliographic":"","name":"Phoenician"},{"alpha2":"pi","alpha3":"pli","bibliographic":"","name":"Pali"},{"alpha2":"pl","alpha3":"pol","bibliographic":"","name":"Polish"},{"alpha2":"","alpha3":"pon","bibliographic":"","name":"Pohnpeian"},{"alpha2":"pt","alpha3":"por","bibliographic":"","name":"Portuguese"},{"alpha2":"","alpha3":"pra","bibliographic":"","name":"Prakrit languages"},{"alpha2":"","alpha3":"pro","bibliographic":"","name":"Occitan, Old (to 1500)"},{"alpha2":"","alpha3":"pro","bibliographic":"","name":"Provençal, Old (to 1500)"},{"alpha2":"ps","alpha3":"pus","bibliographic":"","name":"Pashto"},{"alpha2":"ps","alpha3":"pus","bibliographic":"","name":"Pushto"},{"alpha2":"qu","alpha3":"que","bibliographic":"","name":"Quechua"},{"alpha2":"","alpha3":"raj","bibliographic":"","name":"Rajasthani"},{"alpha2":"","alpha3":"rap","bibliographic":"","name":"Rapanui"},{"alpha2":"","alpha3":"rar","bibliographic":"","name":"Cook Islands Maori"},{"alpha2":"","alpha3":"rar","bibliographic":"","name":"Rarotongan"},{"alpha2":"","alpha3":"roa","bibliographic":"","name":"Romance languages"},{"alpha2":"rm","alpha3":"roh","bibliographic":"","name":"Romansh"},{"alpha2":"","alpha3":"rom","bibliographic":"","name":"Romany"},{"alpha2":"ro","alpha3":"ron","bibliographic":"rum","name":"Moldavian"},{"alpha2":"ro","alpha3":"ron","bibliographic":"rum","name":"Romanian"},{"alpha2":"rn","alpha3":"run","bibliographic":"","name":"Rundi"},{"alpha2":"","alpha3":"rup","bibliographic":"","name":"Aromanian"},{"alpha2":"","alpha3":"rup","bibliographic":"","name":"Arumanian"},{"alpha2":"","alpha3":"rup","bibliographic":"","name":"Macedo-Romanian"},{"alpha2":"ru","alpha3":"rus","bibliographic":"","name":"Russian"},{"alpha2":"","alpha3":"sad","bibliographic":"","name":"Sandawe"},{"alpha2":"sg","alpha3":"sag","bibliographic":"","name":"Sango"},{"alpha2":"","alpha3":"sah","bibliographic":"","name":"Yakut"},{"alpha2":"","alpha3":"sai","bibliographic":"","name":"South American Indian languages"},{"alpha2":"","alpha3":"sal","bibliographic":"","name":"Salishan languages"},{"alpha2":"","alpha3":"sam","bibliographic":"","name":"Samaritan Aramaic"},{"alpha2":"sa","alpha3":"san","bibliographic":"","name":"Sanskrit"},{"alpha2":"","alpha3":"sas","bibliographic":"","name":"Sasak"},{"alpha2":"","alpha3":"sat","bibliographic":"","name":"Santali"},{"alpha2":"","alpha3":"scn","bibliographic":"","name":"Sicilian"},{"alpha2":"","alpha3":"sco","bibliographic":"","name":"Scots"},{"alpha2":"","alpha3":"sel","bibliographic":"","name":"Selkup"},{"alpha2":"","alpha3":"sem","bibliographic":"","name":"Semitic languages"},{"alpha2":"","alpha3":"sga","bibliographic":"","name":"Irish, Old (to 900)"},{"alpha2":"","alpha3":"sgn","bibliographic":"","name":"Sign Languages"},{"alpha2":"","alpha3":"shn","bibliographic":"","name":"Shan"},{"alpha2":"","alpha3":"sid","bibliographic":"","name":"Sidamo"},{"alpha2":"si","alpha3":"sin","bibliographic":"","name":"Sinhala"},{"alpha2":"si","alpha3":"sin","bibliographic":"","name":"Sinhalese"},{"alpha2":"","alpha3":"sio","bibliographic":"","name":"Siouan languages"},{"alpha2":"","alpha3":"sit","bibliographic":"","name":"Sino-Tibetan languages"},{"alpha2":"","alpha3":"sla","bibliographic":"","name":"Slavic languages"},{"alpha2":"sk","alpha3":"slk","bibliographic":"slo","name":"Slovak"},{"alpha2":"sl","alpha3":"slv","bibliographic":"","name":"Slovenian"},{"alpha2":"","alpha3":"sma","bibliographic":"","name":"Southern Sami"},{"alpha2":"se","alpha3":"sme","bibliographic":"","name":"Northern Sami"},{"alpha2":"","alpha3":"smi","bibliographic":"","name":"Sami languages"},{"alpha2":"","alpha3":"smj","bibliographic":"","name":"Lule Sami"},{"alpha2":"","alpha3":"smn","bibliographic":"","name":"Inari Sami"},{"alpha2":"sm","alpha3":"smo","bibliographic":"","name":"Samoan"},{"alpha2":"","alpha3":"sms","bibliographic":"","name":"Skolt Sami"},{"alpha2":"sn","alpha3":"sna","bibliographic":"","name":"Shona"},{"alpha2":"sd","alpha3":"snd","bibliographic":"","name":"Sindhi"},{"alpha2":"","alpha3":"snk","bibliographic":"","name":"Soninke"},{"alpha2":"","alpha3":"sog","bibliographic":"","name":"Sogdian"},{"alpha2":"so","alpha3":"som","bibliographic":"","name":"Somali"},{"alpha2":"","alpha3":"son","bibliographic":"","name":"Songhai languages"},{"alpha2":"st","alpha3":"sot","bibliographic":"","name":"Sotho, Southern"},{"alpha2":"es","alpha3":"spa","bibliographic":"","name":"Castilian"},{"alpha2":"es","alpha3":"spa","bibliographic":"","name":"Spanish"},{"alpha2":"sq","alpha3":"sqi","bibliographic":"alb","name":"Albanian"},{"alpha2":"sc","alpha3":"srd","bibliographic":"","name":"Sardinian"},{"alpha2":"","alpha3":"srn","bibliographic":"","name":"Sranan Tongo"},{"alpha2":"sr","alpha3":"srp","bibliographic":"","name":"Serbian"},{"alpha2":"","alpha3":"srr","bibliographic":"","name":"Serer"},{"alpha2":"","alpha3":"ssa","bibliographic":"","name":"Nilo-Saharan languages"},{"alpha2":"ss","alpha3":"ssw","bibliographic":"","name":"Swati"},{"alpha2":"","alpha3":"suk","bibliographic":"","name":"Sukuma"},{"alpha2":"su","alpha3":"sun","bibliographic":"","name":"Sundanese"},{"alpha2":"","alpha3":"sus","bibliographic":"","name":"Susu"},{"alpha2":"","alpha3":"sux","bibliographic":"","name":"Sumerian"},{"alpha2":"sw","alpha3":"swa","bibliographic":"","name":"Swahili"},{"alpha2":"sv","alpha3":"swe","bibliographic":"","name":"Swedish"},{"alpha2":"","alpha3":"syc","bibliographic":"","name":"Classical Syriac"},{"alpha2":"","alpha3":"syr","bibliographic":"","name":"Syriac"},{"alpha2":"ty","alpha3":"tah","bibliographic":"","name":"Tahitian"},{"alpha2":"","alpha3":"tai","bibliographic":"","name":"Tai languages"},{"alpha2":"ta","alpha3":"tam","bibliographic":"","name":"Tamil"},{"alpha2":"tt","alpha3":"tat","bibliographic":"","name":"Tatar"},{"alpha2":"te","alpha3":"tel","bibliographic":"","name":"Telugu"},{"alpha2":"","alpha3":"tem","bibliographic":"","name":"Timne"},{"alpha2":"","alpha3":"ter","bibliographic":"","name":"Tereno"},{"alpha2":"","alpha3":"tet","bibliographic":"","name":"Tetum"},{"alpha2":"tg","alpha3":"tgk","bibliographic":"","name":"Tajik"},{"alpha2":"tl","alpha3":"tgl","bibliographic":"","name":"Tagalog"},{"alpha2":"th","alpha3":"tha","bibliographic":"","name":"Thai"},{"alpha2":"","alpha3":"tig","bibliographic":"","name":"Tigre"},{"alpha2":"ti","alpha3":"tir","bibliographic":"","name":"Tigrinya"},{"alpha2":"","alpha3":"tiv","bibliographic":"","name":"Tiv"},{"alpha2":"","alpha3":"tkl","bibliographic":"","name":"Tokelau"},{"alpha2":"","alpha3":"tlh","bibliographic":"","name":"Klingon"},{"alpha2":"","alpha3":"tlh","bibliographic":"","name":"tlhIngan-Hol"},{"alpha2":"","alpha3":"tli","bibliographic":"","name":"Tlingit"},{"alpha2":"","alpha3":"tmh","bibliographic":"","name":"Tamashek"},{"alpha2":"","alpha3":"tog","bibliographic":"","name":"Tonga (Nyasa)"},{"alpha2":"to","alpha3":"ton","bibliographic":"","name":"Tonga (Tonga Islands)"},{"alpha2":"","alpha3":"tpi","bibliographic":"","name":"Tok Pisin"},{"alpha2":"","alpha3":"tsi","bibliographic":"","name":"Tsimshian"},{"alpha2":"tn","alpha3":"tsn","bibliographic":"","name":"Tswana"},{"alpha2":"ts","alpha3":"tso","bibliographic":"","name":"Tsonga"},{"alpha2":"tk","alpha3":"tuk","bibliographic":"","name":"Turkmen"},{"alpha2":"","alpha3":"tum","bibliographic":"","name":"Tumbuka"},{"alpha2":"","alpha3":"tup","bibliographic":"","name":"Tupi languages"},{"alpha2":"tr","alpha3":"tur","bibliographic":"","name":"Turkish"},{"alpha2":"","alpha3":"tut","bibliographic":"","name":"Altaic languages"},{"alpha2":"","alpha3":"tvl","bibliographic":"","name":"Tuvalu"},{"alpha2":"tw","alpha3":"twi","bibliographic":"","name":"Twi"},{"alpha2":"","alpha3":"tyv","bibliographic":"","name":"Tuvinian"},{"alpha2":"","alpha3":"udm","bibliographic":"","name":"Udmurt"},{"alpha2":"","alpha3":"uga","bibliographic":"","name":"Ugaritic"},{"alpha2":"ug","alpha3":"uig","bibliographic":"","name":"Uighur"},{"alpha2":"ug","alpha3":"uig","bibliographic":"","name":"Uyghur"},{"alpha2":"uk","alpha3":"ukr","bibliographic":"","name":"Ukrainian"},{"alpha2":"","alpha3":"umb","bibliographic":"","name":"Umbundu"},{"alpha2":"","alpha3":"und","bibliographic":"","name":"Undetermined"},{"alpha2":"ur","alpha3":"urd","bibliographic":"","name":"Urdu"},{"alpha2":"uz","alpha3":"uzb","bibliographic":"","name":"Uzbek"},{"alpha2":"","alpha3":"vai","bibliographic":"","name":"Vai"},{"alpha2":"ve","alpha3":"ven","bibliographic":"","name":"Venda"},{"alpha2":"vi","alpha3":"vie","bibliographic":"","name":"Vietnamese"},{"alpha2":"vo","alpha3":"vol","bibliographic":"","name":"Volapük"},{"alpha2":"","alpha3":"vot","bibliographic":"","name":"Votic"},{"alpha2":"","alpha3":"wak","bibliographic":"","name":"Wakashan languages"},{"alpha2":"","alpha3":"wal","bibliographic":"","name":"Wolaitta"},{"alpha2":"","alpha3":"wal","bibliographic":"","name":"Wolaytta"},{"alpha2":"","alpha3":"war","bibliographic":"","name":"Waray"},{"alpha2":"","alpha3":"was","bibliographic":"","name":"Washo"},{"alpha2":"","alpha3":"wen","bibliographic":"","name":"Sorbian languages"},{"alpha2":"wa","alpha3":"wln","bibliographic":"","name":"Walloon"},{"alpha2":"wo","alpha3":"wol","bibliographic":"","name":"Wolof"},{"alpha2":"","alpha3":"xal","bibliographic":"","name":"Kalmyk"},{"alpha2":"","alpha3":"xal","bibliographic":"","name":"Oirat"},{"alpha2":"xh","alpha3":"xho","bibliographic":"","name":"Xhosa"},{"alpha2":"","alpha3":"yao","bibliographic":"","name":"Yao"},{"alpha2":"","alpha3":"yap","bibliographic":"","name":"Yapese"},{"alpha2":"yi","alpha3":"yid","bibliographic":"","name":"Yiddish"},{"alpha2":"yo","alpha3":"yor","bibliographic":"","name":"Yoruba"},{"alpha2":"","alpha3":"ypk","bibliographic":"","name":"Yupik languages"},{"alpha2":"","alpha3":"zap","bibliographic":"","name":"Zapotec"},{"alpha2":"","alpha3":"zbl","bibliographic":"","name":"Bliss"},{"alpha2":"","alpha3":"zbl","bibliographic":"","name":"Blissymbolics"},{"alpha2":"","alpha3":"zbl","bibliographic":"","name":"Blissymbols"},{"alpha2":"","alpha3":"zen","bibliographic":"","name":"Zenaga"},{"alpha2":"","alpha3":"zgh","bibliographic":"","name":"Standard Moroccan Tamazight"},{"alpha2":"za","alpha3":"zha","bibliographic":"","name":"Chuang"},{"alpha2":"za","alpha3":"zha","bibliographic":"","name":"Zhuang"},{"alpha2":"zh","alpha3":"zho","bibliographic":"chi","name":"Chinese"},{"alpha2":"","alpha3":"znd","bibliographic":"","name":"Zande languages"},{"alpha2":"zu","alpha3":"zul","bibliographic":"","name":"Zulu"},{"alpha2":"","alpha3":"zun","bibliographic":"","name":"Zuni"},{"alpha2":"","alpha3":"zxx","bibliographic":"","name":"No linguistic content"},{"alpha2":"","alpha3":"zxx","bibliographic":"","name":"Not applicable"},{"alpha2":"","alpha3":"zza","bibliographic":"","name":"Dimili"},{"alpha2":"","alpha3":"zza","bibliographic":"","name":"Dimli"},{"alpha2":"","alpha3":"zza","bibliographic":"","name":"Kirdki"},{"alpha2":"","alpha3":"zza","bibliographic":"","name":"Kirmanjki"},{"alpha2":"","alpha3":"zza","bibliographic":"","name":"Zaza"},{"alpha2":"","alpha3":"zza","bibliographic":"","name":"Zazaki"}]')},1519:function(a,e,n){var i=n(1366);function l(a,e){var n=i.pairs(e);return a.filter((function(a){return n.filter((function(e){var n=a[e[0]];return i.isArray(n)?n.indexOf(e[1])>=0:n==e[1]})).length==n.length}))}a.exports=function(a){return{countries:l.bind(null,a.countries),currencies:l.bind(null,a.currencies),languages:l.bind(null,a.languages)}}},1520:function(a,e,n){a.exports=function(a){return i.hasOwnProperty(a)?i[a]:"?"};var i=n(1521)},1521:function(a,e){a.exports={ALL:"L",AFN:"؋",ARS:"$",AWG:"ƒ",AUD:"$",AZN:"₼",BSD:"$",BBD:"$",BYR:"p.",BZD:"BZ$",BMD:"$",BOB:"Bs.",BAM:"KM",BWP:"P",BGN:"лв",BRL:"R$",BND:"$",KHR:"៛",CAD:"$",KYD:"$",CLP:"$",CNY:"¥",COP:"$",CRC:"₡",HRK:"kn",CUP:"₱",CZK:"Kč",DKK:"kr",DOP:"RD$",XCD:"$",EGP:"£",SVC:"$",EEK:"kr",EUR:"€",FKP:"£",FJD:"$",GHC:"¢",GIP:"£",GTQ:"Q",GGP:"£",GYD:"$",HNL:"L",HKD:"$",HUF:"Ft",ISK:"kr",INR:"₹",IDR:"Rp",IRR:"﷼",IMP:"£",ILS:"₪",JMD:"J$",JPY:"¥",JEP:"£",KES:"KSh",KZT:"лв",KPW:"₩",KRW:"₩",KGS:"лв",LAK:"₭",LVL:"Ls",LBP:"£",LRD:"$",LTL:"Lt",MKD:"ден",MYR:"RM",MUR:"₨",MXN:"$",MNT:"₮",MZN:"MT",NAD:"$",NPR:"₨",ANG:"ƒ",NZD:"$",NIO:"C$",NGN:"₦",NOK:"kr",OMR:"﷼",PKR:"₨",PAB:"B/.",PYG:"Gs",PEN:"S/.",PHP:"₱",PLN:"zł",QAR:"﷼",RON:"lei",RUB:"₽",SHP:"£",SAR:"﷼",RSD:"Дин.",SCR:"₨",SGD:"$",SBD:"$",SOS:"S",ZAR:"R",LKR:"₨",SEK:"kr",CHF:"CHF",SRD:"$",SYP:"£",TZS:"TSh",TWD:"NT$",THB:"฿",TTD:"TT$",TRY:"",TRL:"₤",TVD:"$",UGX:"USh",UAH:"₴",GBP:"£",USD:"$",UYU:"$U",UZS:"лв",VEF:"Bs",VND:"₫",YER:"﷼",ZWD:"Z$"}}}]);