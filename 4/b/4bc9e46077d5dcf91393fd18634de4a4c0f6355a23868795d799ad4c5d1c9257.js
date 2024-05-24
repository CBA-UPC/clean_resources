if(typeof video_CHANNEL == "undefined" || video_CHANNEL == null) {video_CHANNEL = "";}
if(typeof sorts == "undefined" || sorts == null) {sorts = "";}
//var isggvip="";

var ad_Curtain = "";//拉幕
var ad_BG = "";//背景
var ad_Roll = "";//滚动(不再使用)
var ad_Call = "";//前贴
var call_code = "";//
var ad_Pause = "";//暂停
var ad_After = "";//后贴
var ad_Corner = "";//角标
var ad_Wenzi = "";//文字
var ad_Banner = "";//悬浮banner
var isPlay3rdAd = "";
var ad_Calls = "";//DFP前贴
var ad_NewCalls = "";//201911月新播放器前帖
//直播 p2p2.0
var live_Ad_BG = "";  //背景
var live_Ad_Calls = "";  //前贴
var live_Ad_Pause = ""; //暂停
var live_Ad_Corner = ""; //角标
var live_Ad_Banner = ""; //悬浮banner
var live_Ad_Wenzi = ""; //文字
//新版点播
var ad_Call_h5 = "";//前贴
var ad_Pause_h5 = "";//暂停
var ad_After_h5 = "";//后贴
var ad_Banner_h5 = "";//悬浮banner
//移动端点播
var ad_Call_h5_m = "";//前贴
var ad_After_h5_m = "";//后贴
var ad_Pause_h5_m = "";//暂停
var ad_Banner_h5_m = "";//悬浮banner

var ad_isHttps = location.href.indexOf("https")!=-1 ? "https:" : "http:";
//subsite
var dfp_videosubsite = "";

var channelId_code='860010-1212010100';
if(typeof(sorts_special)=='undefined'){
	var sorts_special="";
}
if(typeof(adcalldomain)=='undefined'){
	var adcalldomain="";
}
if(typeof(channelId)=='undefined'){
	var channelId=location.href.split("/")[2];
}
if(typeof(class_ids)=='undefined'){
	var class_ids="";
}
if(typeof(videokeyWord)=='undefined'){
	var videokeyWord="";
}
if(typeof(video_ad_channel_id)=='undefined'){
	var video_ad_channel_id="";
}
if(typeof(sub_column_id)=='undefined'){
	var sub_column_id="";
}
if(typeof(itemid1)=='undefined'){
	var itemid1="";//正文页ID
}
if(typeof(guid_Ad_VideoCode)=='undefined'){
	var guid_Ad_VideoCode="";
}
if(typeof(videoalbumId)=='undefined'){
	var videoalbumId="";//节目类视频主分类一样按照视频集区分
}
if(channelId.indexOf(".cntv.cn")!=-1){
	dfp_videosubsite=channelId.split(".cntv.cn")[0];
}else{
	if (channelId == "tv.cctv.com")
	{
		dfp_videosubsite = 'tvcctv';
	}else{
		dfp_videosubsite=channelId;
		if(!channelId){
			channelId = location.href.split("//")[1].split("/")[0];
			dfp_videosubsite=channelId;
		}
	}
}
var ad_cond="&_page_group=dianbo&_subsite="+dfp_videosubsite+"&_CHANNEL="+video_CHANNEL+"&_sorts="+sorts+"&_videoid="+guid_Ad_VideoCode+"&_shipinji="+'';
var ad_dq_1=ad_isHttps+"//galaxy.bjcathay.com/s?z=cathay&c=265&op=1"; //点播前帖
var ad_dq_2=ad_isHttps+"//galaxy.bjcathay.com/s?z=cathay&c=266&op=1";
var ad_dq_3=ad_isHttps+"//galaxy.bjcathay.com/s?z=cathay&c=267&op=1";
var ad_dq_4=ad_isHttps+"//galaxy.bjcathay.com/s?z=cathay&c=268&op=1";
var ad_dq_5=ad_isHttps+"//galaxy.bjcathay.com/s?z=cathay&c=269&op=1";
var ad_dq_6=ad_isHttps+"//galaxy.bjcathay.com/s?z=cathay&c=270&op=1";
var ad_dq_7=ad_isHttps+"//galaxy.bjcathay.com/s?z=cathay&c=1113&op=1";
var ad_dq_8=ad_isHttps+"//galaxy.bjcathay.com/s?z=cathay&c=1114&op=1";
var ad_dq_9=ad_isHttps+"//galaxy.bjcathay.com/s?z=cathay&c=1115&op=1";

var ad_dh_1=ad_isHttps+"//galaxy.bjcathay.com/s?z=cathay&c=271&op=1"; //点播后贴1
var ad_dh_2=ad_isHttps+"//galaxy.bjcathay.com/s?z=cathay&c=272&op=1"; //点播后贴2

var ad_dz=ad_isHttps+"//galaxy.bjcathay.com/s?z=cathay&c=274&op=1"; //点播暂停
var ad_dx=ad_isHttps+"//galaxy.bjcathay.com/s?z=cathay&c=276&op=1"; //点播悬浮banner

var ad_zq_hb1 =ad_isHttps+"//galaxy.bjcathay.com/s?z=cathay&c=259&op=7"; //直播前帖
var ad_zq_hb2 =ad_isHttps+"//galaxy.bjcathay.com/s?z=cathay&c=259,260&op=7";
var ad_zq_hb3 =ad_isHttps+"//galaxy.bjcathay.com/s?z=cathay&c=259,260,261&op=7";
var ad_zq_hb4 =ad_isHttps+"//galaxy.bjcathay.com/s?z=cathay&c=259,260,261,262&op=7";
var ad_zq_hb5 =ad_isHttps+"//galaxy.bjcathay.com/s?z=cathay&c=259,260,261,262,263&op=7";
var ad_zq_hb6 =ad_isHttps+"//galaxy.bjcathay.com/s?z=cathay&c=259,260,261,262,263,264&op=7";
var ad_zq_hb9 =ad_isHttps+"//galaxy.bjcathay.com/s?z=cathay&c=259,260,261,262,263,264,1110,1111,1112&op=7";
var ad_zq_hb234 = ad_isHttps+"//galaxy.bjcathay.com/s?z=cathay&c=260,261,262&op=7";

var ad_zz = ad_isHttps+"//galaxy.bjcathay.com/s?z=cathay&c=273&op=7"; //直播暂停
var ad_zx = ad_isHttps+"//galaxy.bjcathay.com/s?z=cathay&c=275&op=7"; //直播悬浮banner
/*** h5点播播放器 ***/

var ad_dq_hb2 =ad_isHttps+"//galaxy.bjcathay.com/s?z=cathay&c=1494&op=7"; //H5播放器前帖
var ad_dq_hb1 =ad_isHttps+"//galaxy.bjcathay.com/s?z=cathay&c=1494,1495&op=7";
var ad_dq_hb3 =ad_isHttps+"//galaxy.bjcathay.com/s?z=cathay&c=1494,1495,1496&op=7";
var ad_dq_hb4 =ad_isHttps+"//galaxy.bjcathay.com/s?z=cathay&c=1494,1495,1496,1497&op=7";
var ad_dq_hb5 =ad_isHttps+"//galaxy.bjcathay.com/s?z=cathay&c=1494,1495,1496,1497,1498&op=7";
var ad_dq_hb6 =ad_isHttps+"//galaxy.bjcathay.com/s?z=cathay&c=1494,1495,1496,1497,1498,1499&op=7";
var ad_dq_hb7 =ad_isHttps+"//galaxy.bjcathay.com/s?z=cathay&c=1494,1495,1496,1497,1498,1499,1500&op=7";
var ad_dq_hb8 =ad_isHttps+"//galaxy.bjcathay.com/s?z=cathay&c=1494,1495,1496,1497,1498,1499,1500,1501&op=7";
var ad_dq_hb9 =ad_isHttps+"//galaxy.bjcathay.com/s?z=cathay&c=1494,1495,1496,1497,1498,1499,1500,1501,1502&op=7";

//奥运直点播广告测试
var ad_dq_hb10 =ad_isHttps+"//galaxy.bjcathay.com/s?z=cathay&c=1289,1290,1291,1292,1810,1811,1812&op=7";

var ad_dh_hb1 =ad_isHttps+"//galaxy.bjcathay.com/s?z=cathay&c=1503&op=7"; //H5播放器后贴
var ad_dh_hb2 =ad_isHttps+"//galaxy.bjcathay.com/s?z=cathay&c=1503,1504&op=7";

var ad_dz_hb =ad_isHttps+"//galaxy.bjcathay.com/s?z=cathay&c=1505&op=7"; //H5播放器暂停
var ad_dx_hb =ad_isHttps+"//galaxy.bjcathay.com/s?z=cathay&c=1506&op=7"; //H5播放器悬浮

/**** h5点播播放器 ***/
/* 移动端H5播放器参数 */
var ad_dq_m_hb1 =ad_isHttps+"//galaxy.bjcathay.com/s?z=cathay&c=1749&op=7"; //移动端H5播放器前帖
var ad_dh_m_hb1 =ad_isHttps+"//galaxy.bjcathay.com/s?z=cathay&c=1750&op=7"; //移动端H5播放器后贴
var ad_dz_m_hb = ad_isHttps+"//galaxy.bjcathay.com/s?z=cathay&c=1751&op=7"; //移动端H5播放器暂停
var ad_dx_m_hb = ad_isHttps+"//galaxy.bjcathay.com/s?z=cathay&c=1752&op=7"; //移动端H5播放器悬浮

//默认值
//20200304点播通用前贴片广告位 改为两联
//ad_Calls = ad_dq_1+ad_cond
// + "{!@#}" + ad_dq_2+ad_cond;
// + "{!@#}" + ad_dq_3+ad_cond
// + "{!@#}" + ad_dq_4+ad_cond
// + "{!@#}" + ad_dq_5+ad_cond
// + "{!@#}" + ad_dq_6+ad_cond;

//20200327点播通用前贴片广告位 改为一联  20201030 点播通用前贴片广告位 改为两联 zbx
ad_Calls = ad_dq_1+ad_cond;
ad_After = ad_dh_1+ad_cond;
ad_Pause = ad_dz+ad_cond;
ad_Banner = ad_dx+ad_cond;

// /*** h5点播播放器 ***/  20201030 点播通用前贴片广告位 改为两联 zbx
ad_Call_h5 = ad_dq_hb1+ad_cond;//前贴
ad_After_h5 = ad_dh_hb1+ad_cond;//后贴
ad_Pause_h5 = ad_dz_hb+ad_cond;//暂停
ad_Banner_h5 =  ad_dx_hb+ad_cond;//悬浮banner
/**** h5点播播放器 ***/
/********** 移动端播放器广告********************/
ad_Call_h5_m ="";	// ad_dq_m_hb1+ad_cond;//前贴
ad_After_h5_m ="";	// ad_dh_m_hb1+ad_cond;//后贴
ad_Pause_h5_m ="";	// ad_dz_m_hb+ad_cond;//暂停
ad_Banner_h5_m ="";	// ad_dx_m_hb+ad_cond;//悬浮banner




function getAdDataFromOutside(adType, adSdks, cb, cbData, cbError, cbErrorData){
	var nowindex = Math.floor(Math.random()*100+1)
	var nowindexNew = 0;
	for(var i= 0; i<adSdks.length; i++){
		nowindexNew = nowindexNew + adSdks[i].pr;
		if(nowindexNew >= nowindex){
			var adid = adSdks[i].adid;
			var type = adSdks[i].type;
			if(type  == "minli"){
				$.ajax({
					type: "post",
					url: "https://rtb.otthink.cn:8080/rtb/std_json",
					data:JSON.stringify({"key":adid}),
					headers: {'Content-Type': 'application/json;charset=utf-8',},
					success: function (data) {
						if(String(data.ad) != "undefined"){
							var data = JSON.parse(data.ad[0].admnative)
							if(adType == "calls"){
								cb(adType,ad_Call_h5Fun(data.video.url,data.click.url,data.desc2),cbData)
							}else if(adType == "pause"){
								cb(adType,ad_Pause_h5Fun(data.image.url,data.click.url),cbData)
							}else if(adType == "after"){
								cb(adType,ad_After_h5Fun(data.video.url,data.click.url,data.desc2),cbData)
							}else if(adType == "banner"){
								cb(adType,ad_Banner_h5Fun(data.image.url,data.click.url),cbData)
							}
						}else{
							cb(adType,"",cbData)
						}
							
					},
					error: function (XMLHttpRequest, textStatus, errorThrown) {
						//console.log("跨域了");
						cbError(adType, {"XMLHttpRequest":XMLHttpRequest, "textStatus":textStatus, "errorThrown"un(videoUrl,clickUrl,desc2){
	return `{
				"url":"${videoUrl}",
				"clickUrl":"${clickUrl}",
				"guid":"", 
				"duration":"${desc2}",
				"eventExposure":"",
				"eventExposure1":"",
				"startcountckUrl":"${clickUrl}",
				"guid":"", 
				"duration":"${desc2}",
				"eventExposure":"",
				"eventExposure1":"",
				"startcount":"",
				"monitorTime":"",
				"middlecount":"",
				"md5":""
			}`
}
function ad_Pause_h5Fun(imageUrl,clickUrl){
	return	`{
				"url":"${imageUrl}",
				"clickUrl":"${clickUrl}",
				"width":"",
				"height":"",
				"eventExposure":"",
				"eventExposure1":""
			}`
}
function ad_Banner_h5Fun(imageUrl,clickUrl){
	return	`{
				"url":"${imageUrl}",
				"clickUrl":"${clickUrl}",
				"eventExposure":"",
				"eventExposure1":""
			}`
}


//20190729 确认删除以下频道广告请求
if(channelId == "CN04"||channelId == "sports.cntv.cn" || channelId == "yayun" || channelId == "CN02" || channelId == "news.cntv.cn" || channelId == "CN05" || channelId == "jingji.cntv.cn" || channelId == "jingji.cctv.com" || channelId == "PAGE1372666238360944" || channelId == "CN24" || channelId == "auto" || channelId == "auto.cntv.cn" || channelId == "igongyi"|| channelId == "igongyi.cntv.cn" || channelId == "gongyi.cctv.com" || channelId == "CN59" || channelId == "CN49" || channelId == "CN96" || channelId == "sannong" || channelId=="sannong.cntv.cn" || channelId == "CN58" || channelId == "fangtan" || channelId == "style" || channelId == "museum" || channelId == "hsjy" || channelId == "shaanxi" || channelId == "tibet" || channelId == "it" || channelId == "jxhsly" || channelId == "2012" || channelId == "2016.cctv.com" || channelId == "culture.cntv.cn" || channelId == "cctv.cntv.cn" || channelId == "zmxfy.cntv.cn" || channelId == "imovie.cntv.cn" || channelId == "politics" || channelId == "politics.cntv.cn" || channelId == "baidu.cntv.cn" || channelId == "kejiao.cntv.cn" || channelId == "hd.cntv.cn"){				
	ad_Calls = "";
	ad_After = "";
	ad_Pause = "";
	ad_Banner = "";
	ad_Call_h5 = "";//前贴
	ad_After_h5 = "";//后贴
	ad_Pause_h5 = "";//暂停
	ad_Banner_h5 =  "";//悬浮banner
}

/* 屏蔽广告 教育部关工委新时代好少年项目*/

if(video_CHANNEL=='PAGEJCmeLMaiFfDsPMLoofwP230315'){ 
		ad_Calls = '';
		ad_After = '';
		ad_Pause = '';
		ad_Banner = '';
		ad_Call_h5 = '';
		ad_After_h5 = "";
		ad_Pause_h5 = "";
		ad_Banner_h5 = "";

	}




//2020 两会专题页 首页 点播
if(location.href.indexOf("news.cctv.com/special/2020lhspj") > -1){
	video_CHANNEL = '2020lhspj';
	lianghui2020shipinji = location.href.split('/')[5];
	ad_Calls = ad_dq_1+"&_page_group=dianbo&_subsite="+dfp_videosubsite+"&_CHANNEL="+video_CHANNEL+"&_guid_Ad_VideoCode="+sorts+"&_videoid="+guid_Ad_VideoCode+"&_shipinji="+lianghui2020shipinji;
	ad_After = "";
	ad_Pause = "";
	ad_Banner = "";
	ad_Call_h5 = ad_dq_hb1+"&_page_group=dianbo&_subsite="+dfp_videosubsite+"&_CHANNEL="+video_CHANNEL+"&_guid_Ad_VideoCode="+sorts+"&_videoid="+guid_Ad_VideoCode+"&_shipinji="+lianghui2020shipinji;
	ad_After_h5 = "";//后贴
	ad_Pause_h5 = "";//暂停
	ad_Banner_h5 =  "";//悬浮banner
}
if(location.href.indexOf("news.cctv.com/special/2020lianghui/index.shtml") > -1 || location.href.indexOf("news.cctv.com/special/2020lianghui/lianghuiminglan/bztd/index.shtml") > -1 || location.href.indexOf("news.cctv.com/special/2020lianghui/lianghuiminglan/wytd/index.shtml") > -1 || location.href.indexOf("news.cctv.com/special/2020lianghui/lianghuiminglan/dbtd/index.shtml") > -1){
	video_CHANNEL = '2020lhspj';
	lianghui2020shipinji = '';
	ad_Calls = ad_dq_1+"&_page_group=dianbo&_subsite="+dfp_videosubsite+"&_CHANNEL="+video_CHANNEL+"&_sorts="+sorts+"&_videoid="+guid_Ad_VideoCode+"&_shipinji="+lianghui2020shipinji;
	ad_After = "";
	ad_Pause = "";
	ad_Banner = "";
	ad_Call_h5 = ad_dq_hb1+"&_page_group=dianbo&_subsite="+dfp_videosubsite+"&_CHANNEL="+video_CHANNEL+"&_sorts="+sorts+"&_videoid="+guid_Ad_VideoCode+"&_shipinji="+lianghui2020shipinji;
	ad_After_h5 = "";
	ad_Pause_h5 = "";
	ad_Banner_h5 =  "";
}

if(channelId == "yayun.cctv.com"){  //亚运会直播
	ad_Calls = "";
	ad_After = "";
	ad_Pause = "";
	ad_Banner = "";
	ad_Call_h5 = "";
	ad_After_h5 = "";
	ad_Pause_h5 = "";
	ad_Banner_h5 =  "";
	live_Ad_Calls = "";
}
/*https://yayun.cctv.com/2022/byydyy/index.shtml 亚运会专题页添加前贴片1联
 */
if(location.href.indexOf("yayun.cctv.com/2022/byydyy") > -1){
	live_Ad_Calls = ad_zq_hb1+"&_page_group=zhibo&_subsite=yayun.cctv.com&_CHANNEL=tiyuip2";
	ad_Calls = "";
	ad_After = "";
	ad_Pause = "";
	ad_Banner = "";
	ad_Call_h5 ="";
	ad_After_h5 = "";
	ad_Pause_h5 = "";
	ad_Banner_h5 = "";
}

if(channelId == "worldcup"||channelId == "worldcup.cctv.com"){	//2018世界杯
	//世界杯底层页
	ad_Calls = "";
	ad_After = "";
	ad_Pause = "";
	ad_Banner = "";
	ad_Call_h5 = "";
	ad_After_h5 = "";
	ad_Pause_h5 = "";
	ad_Banner_h5 =  "";
}
if(channelId == "worldcup"||channelId == "worldcup.cctv.com" || channelId == "player.cntv.cn"){				//世界杯直播
    ad_Calls = ad_dq_1+"&_page_group=dianbo&_subsite="+dfp_videosubsite+"&_CHANNEL="+video_CHANNEL+"&_guid_Ad_VideoCode="+sorts+"&_videoid="+guid_Ad_VideoCode+"&_shipinji=";
	ad_After = "";
	ad_Pause = "";
	ad_Banner = "";
	ad_Call_h5 = ad_dq_hb1+"&_page_group=dianbo&_subsite="+dfp_videosubsite+"&_CHANNEL="+video_CHANNEL+"&_sorts="+sorts+"&_videoid="+guid_Ad_VideoCode+"&_shipinji=";
	ad_After_h5 = "";
	ad_Pause_h5 = "";
	ad_Banner_h5 =  "";

    //var ad_Call_h5_m = ad_dq_m_hb1+ad_cond;
    //var ad_After_h5_m = "";//后贴
    //var ad_Pause_h5_m = "";//暂停
    //var ad_Banner_h5_m = "";//悬浮banner

    if(typeof channel == "undefined" || channel == null) {channel = "";}
	live_Ad_Calls = ad_zq_hb1+"&_page_group=zhibo&_subsite=worldcup&_CHANNEL="+channel;
	live_Ad_Pause = ""; //暂停
	live_Ad_Banner = "";

    
}

if(channelId == "arts"){				//美术
	ad_cond="&_page_group=dianbo&_subsite=arts&_CHANNEL="+video_CHANNEL+"&_sorts="+sorts;
	ad_Calls = ad_dq_1+ad_cond;
  // + "{!@#}" + ad_dq_2+ad_cond;
	ad_After = ad_dh_1+ad_cond;
	ad_Pause = ad_dz+ad_cond;
	ad_Banner = ad_dx+ad_cond;
	ad_Call_h5 = ad_dq_hb1+ad_cond;
	ad_After_h5 = ad_dh_hb1+ad_cond;
	ad_Pause_h5 = ad_dz_hb+ad_cond;
	ad_Banner_h5 =  ad_dx_hb+ad_cond;
}

if(channelId == "military" || channelId == "military.cntv.cn"){				//军事
	ad_cond="&_page_group=dianbo&_subsite=military&_CHANNEL="+video_CHANNEL+"&_sorts="+sorts;
	ad_Calls = ad_dq_1+ad_cond;
   //+ "{!@#}" + ad_dq_2+ad_cond;
	ad_After = ad_dh_1+ad_cond;
	ad_Pause = ad_dz+ad_cond;
	ad_Banner = ad_dx+ad_cond;
	ad_Call_h5 = ad_dq_hb1+ad_cond;
	ad_After_h5 = ad_dh_hb1+ad_cond;
	ad_Pause_h5 = ad_dz_hb+ad_cond;
	ad_Banner_h5 =  ad_dx_hb+ad_cond;
}

if(channelId == "travel" || channelId == "travel.cntv.cn"){				//旅游台
	ad_cond="&_page_group=dianbo&_subsite=travel&_CHANNEL="+video_CHANNEL+"&_sorts="+sorts;
	ad_Calls = ad_dq_1+ad_cond;
  // + "{!@#}" + ad_dq_2+ad_cond;
	ad_After = ad_dh_1+ad_cond;
	ad_Pause = ad_dz+ad_cond;
	ad_Banner = ad_dx+ad_cond;
	ad_Call_h5 = ad_dq_hb1+ad_cond;
	ad_After_h5 = ad_dh_hb1+ad_cond;
	ad_Pause_h5 = ad_dz_hb+ad_cond;
	ad_Banner_h5 =  ad_dx_hb+ad_cond;

}
if(channelId == "food" || channelId == "food.cctv.com" || channelId == "food.cntv.cn"){	//美食台
	ad_cond="&_page_group=dianbo&_subsite=food&_CHANNEL="+video_CHANNEL+"&_sorts="+sorts;
	//20200304点播通用前贴片广告位 改为两联
	ad_Calls = ad_dq_1+ad_cond;
  // + "{!@#}" + ad_dq_2+ad_cond;
   // + "{!@#}" + ad_dq_3+ad_cond
   // + "{!@#}" + ad_dq_4+ad_cond;
	ad_After = ad_dh_1+ad_cond;
	ad_Pause = ad_dz+ad_cond;
	ad_Banner = ad_dx+ad_cond;
	ad_Call_h5 = ad_dq_hb1+ad_cond;
	ad_After_h5 = ad_dh_hb1+ad_cond;
	ad_Pause_h5 = ad_dz_hb+ad_cond;
	ad_Banner_h5 =  ad_dx_hb+ad_cond;

	if(channelId == "food.cntv.cn"){
		ad_Calls = "";
		ad_After = "";
		ad_Pause = "";
		ad_Banner = "";
		ad_Call_h5 = "";
		ad_After_h5 = "";
		ad_Pause_h5 = "";
		ad_Banner_h5 =  "";
	}
}

if(channelId == "315" || channelId == '315.cctv.com'){				//315
	ad_Calls = "";
	ad_After = "";
	ad_Pause = "";
	ad_Banner = "";
	ad_Call_h5 = ad_dq_hb1+ad_cond;
	ad_After_h5 = ad_dh_hb1+ad_cond;
	ad_Pause_h5 = ad_dz_hb+ad_cond;
	ad_Banner_h5 =  ad_dx_hb+ad_cond;
	live_Ad_Calls = "";
}

if(channelId == "eurocup.cctv.com" || channelId == "eurocup"){ //欧洲杯
	ad_Calls = "";
	ad_After = "";
	ad_Pause = "";
	ad_Banner = "";
	ad_Call_h5 = "";
	ad_After_h5 = "";
	ad_Pause_h5 = "";
	ad_Banner_h5 = "";

	live_Ad_Calls = "";
}


if(channelId == "2018.cctv.com"){ //2018平昌冬奥
	live_Ad_Calls = "";
	live_Ad_Pause = ""; //暂停
	live_Ad_Banner = ""; //悬浮banner
	
	ad_Calls = "";
	ad_Pause = "";
	ad_Banner = "";
	ad_After = "";
	ad_Call_h5 = "";
	ad_After_h5 = "";
	ad_Pause_h5 = "";
	ad_Banner_h5 =  "";
}

if(channelId == "tv"){				//tv.cntv.cn tv台

	adv_maima = (typeof adv_maima!="undefined" && /\d{6}-\d{10}/.test(adv_maima)) ? adv_maima : "860010-1100000000";
	tv_maima1 = adv_maima.substr(9, 2);
	tv_maima2 = adv_maima.substr(11, 2);
	tv_maima3 = adv_maima.substr(13, 2);
	tv_maima4 = adv_maima.substr(15, 2);

	tv_pindao_encoded = encodeURI(typeof adv_pindao=="undefined"?"":"z"+adv_pindao).replace(/%/g,"_").replace("+","").replace(/\(/g,"").replace(/\)/g,"");
	tv_shipinji_encoded = encodeURI(typeof adv_shipinji=="undefined"?"":"z"+adv_shipinji).replace(/%/g,"_").replace("+","").replace(/\(/g,"").replace(/\)/g,"");

	tv_shichang = (typeof adv_shichang!="undefined" && /\d{2,}:\d{2}:\d{2}/.test(adv_shichang)) ? adv_shichang : "00:00:00";
	arr_tv_shichang = tv_shichang.split(":");
	number_shichang = arr_tv_shichang[0]*60*60 + arr_tv_shichang[1]*60 + arr_tv_shichang[2]*1;
	tv_shichang_lv = "0";

	if (0 < number_shichang && number_shichang <= 30) {
	tv_shichang_lv = "1";
	}
	else if (30 < number_shichang && number_shichang <= 60) {
	tv_shichang_lv = "2";
	}
	else if (60 < number_shichang && number_shichang <= 180) {
	tv_shichang_lv = "3";
	}
	else if (180 < number_shichang && number_shichang <= 900) {
	tv_shichang_lv = "4";
	}
	else if (900 < number_shichang) {
	tv_shichang_lv = "5";
	}
	ad_cond="&_page_group=dianbo&_subsite=tv&_CHANNEL="+video_CHANNEL+"&_sorts="+sorts+"&_maima1="+tv_maima1+"&_maima2="+tv_maima2+"&_maima3="+tv_maima3+"&_maima4="+tv_maima4+"&_pindao="+tv_pindao_encoded+"&_shipinji="+tv_shipinji_encoded+"&_shichang="+tv_shichang_lv;
	//增加视频ID
	ad_cond+="&videoid="+location.href.split("/")[5];

	//20200304点播通用前贴片广告位 改为两联
	ad_Calls = ad_dq_1+ad_cond
	+ "{!@#}" + ad_dq_2+ad_cond;
	// + "{!@#}" + ad_dq_3+ad_cond
	// + "{!@#}" + ad_dq_4+ad_cond;
	//+ "{!@#}" + ad_dq_5+ad_cond
	//+ "{!@#}" + ad_dq_6+ad_cond;
	ad_After = '';
	ad_Pause = '';
	ad_Banner = ad_dx+ad_cond;
	ad_Call_h5 = ad_dq_hb1+ad_cond;
	ad_After_h5 = "";
	ad_Pause_h5 = "";
	ad_Banner_h5 =  ad_dx_hb+ad_cond;
}

if(channelId == "wlchunwan.cntv.cn"||location.href.split("/")[2]=="wlchunwan.cntv.cn" || location.href.split("/")[2]=="wlchunwan.cctv.com"){				//网络春晚
	ad_After = "";
	ad_Pause = "";
	ad_Banner = "";
	ad_After_h5 = "";
	ad_Pause_h5 = "";
	ad_Banner_h5 = "";

	//ad_Calls = ad_isHttps+"//galaxy.bjcathay.com/s?z=cathay&c=800&op=1"+ad_cond;
	//ad_Call_h5 = "";
	live_Ad_Pause = ""; //直播暂停
	live_Ad_Banner = ""; //悬浮banner
	if(location.href.indexOf("wlchunwan.cctv.com/2020/zb")!=-1 || location.href.indexOf("wlchunwan.cctv.com/2020/db")!=-1){
		live_Ad_Calls = ad_isHttps+"//galaxy.bjcathay.com/s?z=cathay&c=799&op=7&_page_group=zhibo&_subsite=wlchunwan";
		ad_Calls = ad_isHttps+"//galaxy.bjcathay.com/s?z=cathay&c=800&op=1&_page_group=dianbo&_subsite=wlchunwan";
		ad_Call_h5 = "";
	}

	if(location.href.indexOf("wlchunwan.cctv.com/2021/index")!=-1 || location.href.indexOf("wlchunwan.cctv.com")!=-1  || location.href.indexOf("wlchunwan.cctv.com/2021")!=-1 || location.href.indexOf("wlchunwan.cctv.com/wlchunwan2021/home_test")!=-1){  //2021 网络春晚
		live_Ad_Calls = ad_zq_hb1+"&_page_group=zhibo&_subsite=wlchunwan&_CHANNEL=wlchunwan2021";
	}
	if(location.href.indexOf("wlchunwan.cctv.com/2022/index")!=-1 || location.href.indexOf("wlchunwan.cctv.com")!=-1  || location.href.indexOf("wlchunwan.cctv.com/2022")!=-1 || location.href.indexOf("wlchunwan.cctv.com/2022/home_test")!=-1){  //2022 网络春晚
		live_Ad_Calls = ad_zq_hb1+"&_page_group=zhibo&_subsite=wlchunwan&_CHANNEL=wlchunwan2022";
	}
	if(location.href.indexOf("wlchunwan.cctv.com/2023/index")!=-1 || location.href.indexOf("wlchunwan.cctv.com")!=-1  || location.href.indexOf("wlchunwan.cctv.com/2023")!=-1 || location.href.indexOf("wlchunwan.cctv.com/2023/home_test")!=-1){  //2023 网络春晚
		live_Ad_Calls = ad_zq_hb1+"&_page_group=zhibo&_subsite=wlchunwan&_CHANNEL=wlchunwan2023";
	}
	if(location.href.indexOf("wlchunwan.cctv.com/2024/index")!=-1 || location.href.indexOf("wlchunwan.cctv.com")!=-1  || location.href.indexOf("wlchunwan.cctv.com/2024")!=-1 || location.href.indexOf("wlchunwan.cctv.com/2024test")!=-1){  //2024 网络春晚
		live_Ad_Calls = ad_zq_hb1+"&_page_group=zhibo&_subsite=wlchunwan&_CHANNEL=wlchunwan2024";
	}

}

//H5智能发布平台互动直播
if(location.href.split("/")[2]=="webapp.cctv.com"){  //互动直播
	ad_Calls = "";
	ad_After = "";
	ad_Pause = "";
	ad_Banner = "";
	ad_Call_h5 = ""
	ad_After_h5 = "";
	ad_Pause_h5 = "";
	ad_Banner_h5 = "";
	
	
	var webapp_pageId = location.href.split("/")[5].split('.html')[0];
	if(webapp_pageId == 'H120118582U9W4AF6'){ //2021网络春晚互动直播页
		
		ad_Calls = ad_dq_1+"&_page_group=dianbo&_subsite=webapp&_CHANNEL="+webapp_pageId;//前贴
		ad_Call_h5 = ad_dq_hb1+"&_page_group=dianbo&_subsite=webapp&_CHANNEL="+webapp_pageId;//前贴
		live_Ad_Calls = ad_zq_hb1+"&_page_group=zhibo&_subsite=webapp&_CHANNEL="+webapp_pageId;
		live_Ad_Pause="";
		live_Ad_Banner="";
	}
}

if(channelId == "cbs.sports.cctv.com"){ //体育赛事中心
	ad_Calls = "";
	ad_After = "";
	ad_Pause = "";
	ad_Banner = "";
	ad_Call_h5 = "";
	ad_After_h5 = "";
	ad_Pause_h5 = "";
	ad_Banner_h5 = "";

	live_Ad_Calls = ad_zq_hb1+"&_page_group=zhibo&_subsite=cbssports";
}
if(channelId == "2022.cctv.com"){//2022北京冬奥
	live_Ad_Calls ="";
	//if(location.href.indexOf("2022.cctv.com/live/cctv5plus")!=-1 || location.href.indexOf("2022.cctv.com/live/cctv5")!=-1){
		live_Ad_Calls = ad_zq_hb1+"&_page_group=zhibo&_subsite=2022.cctv.com&_CHANNEL="+rel_url;
	//}
	if(location.href.indexOf("2022.cctv.com/live/daka")!=-1 || location.href.indexOf("2022.cctv.com/live/yiqikandongao")!=-1){
		live_Ad_Calls = ad_zq_hb1+"&_page_group=zhibo&_subsite=2022.cctv.com&_CHANNEL="+rel_url;
	}
	
	ad_Calls = ad_dq_1+ad_cond;
				/*+ "{!@#}" +ad_dq_2+ad_cond
				+ "{!@#}" +ad_dq_3+ad_cond
				+ "{!@#}" +ad_dq_4+ad_cond
				+ "{!@#}" +ad_dq_5+ad_cond
				+ "{!@#}" +ad_dq_6+ad_cond;*/
	ad_Call_h5 = ad_dq_hb1+ad_cond;
	//ad_Call_h5_m = ad_dq_hb6+ad_cond;
	
}
if(channelId == "2020.cctv.com"){ //东京奥运会

	if(typeof aoyunshipinji == "undefined" || aoyunshipinji == null) {aoyunshipinji = "";}
	//未登录放广告

	ad_Calls = ad_dq_1+ad_cond+aoyunshipinji;
		/*+ "{!@#}" +ad_dq_2+ad_cond+aoyunshipinji
		+ "{!@#}" +ad_dq_3+ad_cond+aoyunshipinji
		+ "{!@#}" +ad_dq_4+ad_cond+aoyunshipinji
		+ "{!@#}" +ad_dq_5+ad_cond+aoyunshipinji
		+ "{!@#}" +ad_dq_6+ad_cond+aoyunshipinji
		+ "{!@#}" +ad_dq_7+ad_cond+aoyunshipinji
		+ "{!@#}" +ad_dq_8+ad_cond+aoyunshipinji
		+ "{!@#}" +ad_dq_9+ad_cond+aoyunshipinji;*/
	ad_After = "";
	ad_Pause = "";
	ad_Banner = "";

	ad_Call_h5 = ad_dq_hb1+ad_cond+aoyunshipinji;
	ad_After_h5 = "";
	ad_Pause_h5 = "";
	ad_Banner_h5 = "";

	ad_Call_h5_m = ad_dq_hb1+ad_cond+aoyunshipinji;
	ad_After_h5_m = "";
	ad_Pause_h5_m = "";
	ad_Banner_h5_m = "";
	if(typeof rel_url == "undefined" || rel_url == null) {rel_url = "";}

	//live_Ad_Calls = ad_zq_hb5+"&_page_group=zhibo&_subsite=2020.cctv.com&_CHANNEL="+rel_url;
	live_Ad_Calls = ad_zq_hb1+"&_page_group=zhibo&_subsite=2020.cctv.com&_CHANNEL="+rel_url;



	/*var time = new Date().getTime();
	var SecretKey = "63a56023-efa6-497c-8246-8f95e401d259";
	var AppID = "a5b1d7e217aa227d5b2b8a84920780cf637960e2"
	if(getCookie("verifycode")){
		var jsload = document.createElement("script");
			jsload.src = "//r.img.cctvpic.com/photoAlbum/templet/common/DEPA1567070010882321/sha256.js";
		document.getElementsByTagName("body")[0].appendChild(jsload);
		var isLoaded = false;
		jsload.onload = jsload.onreadystatechange = function(){
			if (isLoaded) {
				return;
			}else {
				if (!this.readyState || this.readyState === "loaded" || this.readyState === "complete") {
					isLoaded = true;
					jsload.onload = jsload.onreadystatechange = null; //防止IE内存泄漏
					jsonp_callback_210705();
				}
			}
		}
	}else{
		isggvip="false";
	}

	function getCookie(name) {
		var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
		if (arr = document.cookie.match(reg)) return unescape(arr[2]);
		else return null
	}
	function jsonp_callback_210705(){
		sign = sha256_digest("time=" + time + "|secretKey=" + SecretKey + ""); //签名字符
		getToken(sign);
	}

	//获取鉴权token
	function getToken(sign) {
		$.ajax({
			type: "post",
			url: "https://vipapi.app.cctv.com/cmos-facade-server/openapi/token/generate",
			dataType: "json",
			contentType: "application/json",
			timeout: 2000,
			data: JSON.stringify({
				"appId": AppID
			}),
			success: function(data) {
				if(data.code == "10000") {
					token = data.data.token
					getVip(token,sign)
				}
			},
			error: function() {
				isggvip = "false";
			}
		});
	}

	function getVip(token,sign){
		$.ajax({
			type: "post",
			url: 'https://vipapi.app.cctv.com/cmos-facade-server/api/memberInfo/memberDetailInfo',
			dataType: "json",
			contentType: "application/json",
			data: JSON.stringify({
				"params": {
					"productId": "20201119",
					"uid": getCookie("userSeqId"),
					"source": 3,
					"modelName": "PC",
				},
				"header": {
					"appId": AppID,
					"sign": sign,
					"time": time
				},
				"token": token
			}),
			headers: {
				"verifycode": getCookie("verifycode"),
				"deviceNo": "isPCDeviceNo"
			},
			timeout: 2000,
			success: function(data) {
				if (data.data.memberPayCardsRelationRespList){
					if(data.data.memberPayCardsRelationRespList[0].status =="2" && data.data.memberPayCardsRelationRespList[0].type =="2"){//会员免广告
						//console.log(data.data.memberPayCardsRelationRespList[0].status)
						ad_Calls = "";
						ad_After = "";
						ad_Pause = "";
						ad_Banner = "";

						ad_Call_h5 = "";
						ad_After_h5 = "";
						ad_Pause_h5 = "";
						ad_Banner_h5 = "";

						ad_Call_h5_m = "";
						ad_After_h5_m = "";
						ad_Pause_h5_m = "";
						ad_Banner_h5_m = "";
						if(typeof rel_url == "undefined" || rel_url == null) {rel_url = "";}
						live_Ad_Calls = "";

						isggvip = "true";
					}else{
						isggvip = "false";
					}
				}else{
					isggvip = "false";
				}
				
			},
			error:function(){
				isggvip = "false";
			}
		});
	}*/
}
if(channelId == "chunwan.cctv.com" || location.href.split("/")[2]=="chunwan.cctv.com"){ //2021年春晚广告
	/* 春晚直播 */
	live_Ad_Calls="";
	live_Ad_Pause="";
	live_Ad_Banner="";
	
	/* 春晚点播 */
	ad_Calls = "";
	ad_After = "";
	ad_Pause = "";
	ad_Banner = "";
	ad_Call_h5 = "";
	ad_After_h5 = "";
	ad_Pause_h5 = "";
	ad_Banner_h5 = "";
	
	/*if(location.href.indexOf("chunwan.cctv.com/2021/livetest")!=-1 || location.href.indexOf("chunwan.cctv.com/2021/live")!=-1){ //2021年春晚广告
		live_Ad_Calls = ad_zq_hb1+"&_page_group=zhibo&_subsite=chunwan&_CHANNEL=2021chunwan";
		ad_Calls = ad_dq_1+"&_page_group=dianbo&_subsite=chunwan&_CHANNEL=2021chunwan";
		ad_Call_h5 = ad_dq_hb1+"&_page_group=dianbo&_subsite=chunwan&_CHANNEL=2021chunwan";
	}

	if(location.href.indexOf("chunwan.cctv.com/2021/dianbotest")!=-1 || location.href.indexOf("chunwan.cctv.com/2021/dianbo")!=-1){ //2021年春晚广告
		ad_Calls = ad_dq_1+"&_page_group=dianbo&_subsite=chunwan&_CHANNEL=2021chunwan";
		ad_Call_h5 = ad_dq_hb1+"&_page_group=dianbo&_subsite=chunwan&_CHANNEL=2021chunwan";
	}

	if(location.href.indexOf("chunwan.cctv.com/2021/quanjingsheng")!=-1){ //2021年春晚广告
		live_Ad_Calls = ad_zq_hb1+"&_page_group=zhibo&_subsite=chunwan&_CHANNEL=2021chunwan";
		ad_Calls = ad_dq_1+"&_page_group=dianbo&_subsite=chunwan&_CHANNEL=2021chunwan";
		ad_Call_h5 = ad_dq_hb1+"&_page_group=dianbo&_subsite=chunwan&_CHANNEL=2021chunwan";
	}*/
	if(location.href.indexOf("chunwan.cctv.com/2024/livetest")!=-1 || location.href.indexOf("chunwan.cctv.com/2024/live")!=-1){ //2024年春晚广告
		live_Ad_Calls = ad_zq_hb1+"&_page_group=zhibo&_subsite=chunwan&_CHANNEL="+zhibo;
		ad_Calls = ad_dq_1+"&_page_group=dianbo&_subsite=chunwan&_CHANNEL=2024chunwan";
		ad_Call_h5 = ad_dq_hb1+"&_page_group=dianbo&_subsite=chunwan&_CHANNEL=2024chunwan";
	}

	if(location.href.indexOf("chunwan.cctv.com/2024/dianbotest")!=-1 || location.href.indexOf("chunwan.cctv.com/2024/dianbo")!=-1){ //2024年春晚广告
		ad_Calls = ad_dq_1+"&_page_group=dianbo&_subsite=chunwan&_CHANNEL=2024chunwan";
		ad_Call_h5 = ad_dq_hb1+"&_page_group=dianbo&_subsite=chunwan&_CHANNEL=2024chunwan";
	}
	if(location.href.indexOf("chunwan.cctv.com/2024/testvideo")!=-1){ //2024测试春晚广告
		ad_Calls = ad_dq_1+"&_page_group=dianbo&_subsite=chunwan&_CHANNEL=2024chunwantest";
		ad_Call_h5 = ad_dq_hb1+"&_page_group=dianbo&_subsite=chunwan&_CHANNEL=2024chunwantest";
	}

	/*if(location.href.indexOf("chunwan.cctv.com/2023/quanjingsheng")!=-1){ //2021年春晚广告
		live_Ad_Calls = ad_zq_hb1+"&_page_group=zhibo&_subsite=chunwan&_CHANNEL=2023chunwan";
		ad_Calls = ad_dq_1+"&_page_group=dianbo&_subsite=chunwan&_CHANNEL=2023chunwan";
		ad_Call_h5 = ad_dq_hb1+"&_page_group=dianbo&_subsite=chunwan&_CHANNEL=2023chunwan";
	}*/
	
}

if(channelId == "baobei.cntv.cn"){				//少儿频道
	ad_cond="&_page_group=dianbo&_subsite=baobei&_CHANNEL="+video_CHANNEL+"&_sorts="+sorts;
	ad_Calls = ad_dq_1+ad_cond;
   //+ "{!@#}" + ad_dq_2+ad_cond;
	ad_After = ad_dh_1+ad_cond;
	ad_Pause = ad_dz+ad_cond;
	ad_Banner = ad_dx+ad_cond;
	ad_Call_h5 = ad_dq_hb1+ad_cond;
	ad_After_h5 = ad_dh_hb1+ad_cond;
	ad_Pause_h5 = ad_dz_hb+ad_cond;
	ad_Banner_h5 =  ad_dx_hb+ad_cond;
}
if(channelId == "music"){				//音乐台
	ad_cond="&_page_group=dianbo&_subsite=music&_CHANNEL="+video_CHANNEL+"&_sorts="+sorts;
	ad_Calls = ad_dq_1+ad_cond;
  // + "{!@#}" + ad_dq_2+ad_cond;
	ad_After = ad_dh_1+ad_cond;
	ad_Pause = ad_dz+ad_cond;
	ad_Banner = ad_dx+ad_cond;
	ad_Call_h5 = ad_dq_hb1+ad_cond;
	ad_After_h5 = ad_dh_hb1+ad_cond;
	ad_Pause_h5 = ad_dz_hb+ad_cond;
	ad_Banner_h5 =  ad_dx_hb+ad_cond;
}

if(location.href.indexOf("jishi.cctv.com/special")!=-1){
	var specialUrl = location.href.split("/")[4];
	var special_subsite = channelId.split(".")[0];
	ad_cond="&_page_group=dianbo&_subsite="+special_subsite+"&_CHANNEL="+special_subsite+"_"+specialUrl+"&_sorts="+sorts;
	ad_Calls = ad_dq_1+ad_cond;
	ad_After = ad_dh_1+ad_cond;
	ad_Pause = ad_dz+ad_cond;
	ad_Banner='';
	ad_Call_h5 = ad_dq_hb1+ad_cond;
	ad_After_h5 = ad_dh_hb1+ad_cond;
	ad_Pause_h5 = ad_dz_hb+ad_cond;
	ad_Banner_h5 =  "";
}


if(location.href.indexOf("tv.cctv.com/lm/dzw/jcsp")!=-1 || location.href.indexOf("tv.cctv.com/lm/jxll3")!=-1 || location.href.indexOf("tv.cctv.com/lm/yjdk")!=-1 || location.href.indexOf("tv.cctv.com/lm/wmhl")!=-1 || location.href.indexOf("tv.cctv.com/lm/szsxy")!=-1 || location.href.indexOf("tv.cctv.com/lm/csjd")!=-1 || location.href.indexOf("tv.cctv.com/lm/jjbxs")!=-1 || location.href.indexOf("tv.cctv.com/lm/yscjpl")!=-1 || location.href.indexOf("tv.cctv.com/lm/xwdc")!=-1 || location.href.indexOf("tv.cctv.com/lm/duihua")!=-1 || location.href.indexOf("tv.cctv.com/lm/xunbao")!=-1 || location.href.indexOf("tv.cctv.com/lm/jjxxll/")!=-1 || location.href.indexOf("tv.cctv.com/lm/hjcf/")!=-1 || location.href.indexOf("tv.cctv.com/lm/tbcx/")!=-1 || location.href.indexOf("tv.cctv.com/lm/cyyxh/")!=-1||location.href.indexOf("tv.cctv.com/lm/zcjkk/")!=-1){				//cctv.cntv.cn 栏目
	ad_cond="&_page_group=dianbo&_subsite=tvcctv&_CHANNEL="+location.href.split("/")[4]+"&_sorts="+sorts;
	ad_Calls = ad_dq_1+ad_cond;
   //+ "{!@#}" + ad_dq_2+ad_cond;
	ad_After = ad_dh_1+ad_cond;
	ad_Pause = ad_dz+ad_cond;
	ad_Banner = ad_dx+ad_cond;
	ad_Call_h5 = ad_dq_hb1+ad_cond;
	ad_After_h5 = ad_dh_hb1+ad_cond;
	ad_Pause_h5 = ad_dz_hb+ad_cond;
	ad_Banner_h5 = ad_dx_hb+ad_cond;

	if(location.href.indexOf("tv.cctv.com/lm/yscjpl")!=-1 || location.href.indexOf("tv.cctv.com/lm/yjdk")!=-1 ||location.href.indexOf("tv.cctv.com/lm/tbcx/")!=-1 ||location.href.indexOf("tv.cctv.com/lm/zcjkk/")!=-1||location.href.indexOf("tv.cctv.com/lm/cyyxh/")!=-1){
		ad_Calls = ad_dq_1+ad_cond;
		ad_After = '';
		ad_Pause = '';
		ad_Banner = '';
		ad_Call_h5 = ad_dq_hb1+ad_cond;
		ad_After_h5 ="";
		ad_Pause_h5 = "";
		ad_Banner_h5 = "";
	}

	//1227 新增
	if(location.href.indexOf("tv.cctv.com/lm/dzw/jcsp")!=-1 || location.href.indexOf("tv.cctv.com/lm/jxll3")!=-1 || location.href.indexOf("tv.cctv.com/lm/wmhl")!=-1 || location.href.indexOf("tv.cctv.com/lm/szsxy")!=-1 || location.href.indexOf("tv.cctv.com/lm/csjd")!=-1 || location.href.indexOf("tv.cctv.com/lm/jjbxs")!=-1 ){
		//20200304点播通用前贴片广告位 改为两联
		ad_Calls = ad_dq_1+ad_cond;
		//+ "{!@#}" + ad_dq_2+ad_cond;
		// + "{!@#}" + ad_dq_3+ad_cond
		// + "{!@#}" + ad_dq_4+ad_cond
		ad_After = '';
		ad_Pause = '';
		ad_Banner = '';
		ad_Call_h5 = ad_dq_hb1+ad_cond;
		ad_After_h5 = "";
		ad_Pause_h5 = "";
		ad_Banner_h5 = "";
	}
}

/* tv 专题 */
if(location.href.indexOf("tv.cctv.com/special")!=-1){
	var specialUrl = location.href.split("/")[4];
	ad_cond="&_page_group=dianbo&_subsite=tvcctv&_CHANNEL="+specialUrl+"&_sorts="+sorts;
	ad_Calls = ad_dq_1+ad_cond
	+ "{!@#}" + ad_dq_2+ad_cond;
	ad_After = '';
	ad_Pause = '';
	ad_Banner = '';
	ad_Call_h5 = ad_dq_hb1+ad_cond;
	ad_After_h5 = "";
	ad_Pause_h5 = "";
	ad_Banner_h5 = "";

	//if(location.href.indexOf("special/2018CQZGJCJ")!=-1){
	live_Ad_Calls = ad_zq_hb1+"&_page_group=zhibo&_subsite=tvcctv&_CHANNEL="+specialUrl; //只要前贴片1
	live_Ad_Pause = ""; //暂停
	live_Ad_Banner = ""; //悬浮banner
	//}
	if(location.href.indexOf("special/2019scdh")!=-1){   // 第四季中国诗词大会
		live_Ad_Calls = ad_isHttps+"//galaxy.bjcathay.com/s?z=cathay&c=1230&op=7&_page_group=zhibo&_subsite=tvcctv&_CHANNEL="+specialUrl; //只要前贴片1
		live_Ad_Pause = ""; //暂停
		live_Ad_Banner = ""; //悬浮banner
	}
	if(location.href.indexOf("special/zgscdh")!=-1){   // 第五季中国诗词大会
		live_Ad_Calls = ad_isHttps+"//galaxy.bjcathay.com/s?z=cathay&c=473&op=7&_page_group=zhibo&_subsite=tvcctv&_CHANNEL="+specialUrl; //只要前贴片1
		live_Ad_Pause = ""; //暂停
		live_Ad_Banner = ""; //悬浮banner
	}
}

if(location.href.indexOf("tv.cctv.com/lm")!=-1){ //栏目直播
	var lmUrl = location.href.split("/")[4];
	live_Ad_Calls = ad_zq_hb1+"&_page_group=zhibo&_subsite=tvcctv&_CHANNEL="+lmUrl; //只要前贴片1
	live_Ad_Pause = ""; //暂停
	live_Ad_Banner = ""; //悬浮banner
}

if(location.href.indexOf("sports.cctv.com/live")!=-1){ //2023体育直播
	live_Ad_Calls = ad_zq_hb1+"&_page_group=zhibo&_subsite=sports.cctv.com&_CHANNEL="+livechannelLive; //只要前贴片1
	live_Ad_Pause = ""; //暂停
	live_Ad_Banner = ""; //悬浮banner
}

if(location.href.indexOf("tv.cctv.com/live")!=-1){					//http://tv.cctv.com 栏目直播页
	var channelTv = rel_url;
	//var channelTv = '20170607test';
	if(location.href.indexOf("tv.cctv.com/live/cctvxiyu")!=-1 || location.href.indexOf("tv.cctv.com/live/cctvxiyu/sd")!=-1 || location.href.indexOf("tv.cctv.com/live/cctvfrench")!=-1 || location.href.indexOf("tv.cctv.com/live/cctvfrench/sd")!=-1 || location.href.indexOf("tv.cctv.com/live/cctvarabic")!=-1 || location.href.indexOf("tv.cctv.com/live/cctvarabic/sd")!=-1 || location.href.indexOf("tv.cctv.com/live/cctvrussian")!=-1 || location.href.indexOf("tv.cctv.com/live/cctvrussian/sd")!=-1 || location.href.indexOf("tv.cctv.com/live/cctveurope")!=-1 || location.href.indexOf("tv.cctv.com/live/cctveurope/sd")!=-1 || location.href.indexOf("tv.cctv.com/live/cctvamerica")!=-1 || location.href.indexOf("tv.cctv.com/live/cctvamerica/sd")!=-1){	
	}else{
		//20200327 直播前贴改为一联
		//live_Ad_Calls = ad_zq_hb1+"&_page_group=zhibo&_subsite=tvcctv&_CHANNEL="+channelTv;
		//20200831 直播前贴改为两联 zbx修改 20201021 第二联打开
		//live_Ad_Calls = ad_zq_hb2+"&_page_group=zhibo&_subsite=tvcctv&_CHANNEL="+channelTv; //前贴片
		//20200909 直播前贴改为三联 zbx修改 20201211 第三联打开
		live_Ad_Calls = ad_zq_hb1+"&_page_group=zhibo&_subsite=tvcctv&_CHANNEL="+channelTv; //前贴片
		live_Ad_Pause = ad_zz+"&_page_group=zhibo&_subsite=tvcctv&_CHANNEL="+channelTv+""; //暂停
		live_Ad_Banner = ad_zx+"&_page_group=zhibo&_subsite=tvcctv&_CHANNEL="+channelTv+""; //悬浮banner
	}
}

if(location.href.indexOf("tv.cctv.com/cctv3")!=-1){					//CCTV3
	video_CHANNEL="";
	if(location.href.indexOf("tv.cctv.com/cctv3/special/2017wjymy")!=-1){//2017万家邀明月中秋特别节目
		video_CHANNEL = "2017wjymy";
	}
	if(location.href.indexOf("tv.cctv.com/cctv3/special/2017cyj")!=-1){//2017-CCTV3-九九艳阳天-重阳特别节目》
		video_CHANNEL = "2017cyj";
	}
	live_Ad_Calls = ad_zq_hb1+"&_page_group=zhibo&_subsite=tvcctv&_CHANNEL="+video_CHANNEL; //只要前贴片1
	live_Ad_Pause = ""; //暂停
	live_Ad_Banner = ""; //悬浮banner
	//ad_Calls = ad_dq_1 +"&_page_group=dianbo&_subsite=tvcctv&_CHANNEL="+video_CHANNEL+"&_sorts="+sorts;
	ad_Calls = ad_dq_1 +"&_page_group=dianbo&_subsite=tvcctv&_CHANNEL="+video_CHANNEL+"&_sorts="+sorts
	+ "{!@#}" + ad_dq_2+"&_page_group=dianbo&_subsite=tvcctv&_CHANNEL="+video_CHANNEL+"&_sorts="+sorts;
	ad_After = "";
	ad_Pause = "";
	ad_Banner = "";
	ad_Call_h5 = ad_dq_hb2 +"&_page_group=dianbo&_subsite=tvcctv&_CHANNEL="+video_CHANNEL+"&_sorts="+sorts;
	ad_After_h5 = "";
	ad_Pause_h5 = "";
	ad_Banner_h5 = "";
}

// 底层页
if ((channelId == "tvcctv" || channelId == "tv.cctv.com") && video_ad_channel_id != ''){
	var tvcctvpindao = video_ad_channel_id;
	ad_cond="&_page_group=dianbo&_subsite=tvcctv&_CHANNEL="+video_CHANNEL+"&_sorts="+sorts+"&_tvcctvpindao="+tvcctvpindao+"&_shipinji="+videoalbumId+"&_videoid="+guid_Ad_VideoCode;
	//ad_cond="&t=page_group=dianbo&subsite=tvcctv&CHANNEL="+video_CHANNEL+"&sorts="+sorts+"&tvcctvpindao="+tvcctvpindao;
	
	if(video_CHANNEL=='PAGE4y8I53JvSWE8DlRSMlbu160121' || video_CHANNEL=='PAGEP1dEaiKB4LVW3lwtQ9qX160120'){ //新闻联播、焦点访谈只要前贴片
		//20200304点播通用前贴片广告位 改为两联
		ad_Calls = ad_dq_1+ad_cond;
		// + "{!@#}" + ad_dq_2+ad_cond
		//+ "{!@#}" + ad_dq_3+ad_cond
		// + "{!@#}" + ad_dq_4+ad_cond
		// + "{!@#}" + ad_dq_5+ad_cond
		// + "{!@#}" + ad_dq_6+ad_cond;
		ad_After = '';
		ad_Pause = '';
		ad_Banner = '';
		ad_Call_h5 = ad_dq_hb3+ad_cond;
		ad_After_h5 = "";
		ad_Pause_h5 = "";
		ad_Banner_h5 = "";

	}else{
		if(video_CHANNEL =='PAGEgNUQUic0kdB53JGMWVOd160320' || video_CHANNEL =='PAGEXjYs4J0rfFglF8S8bTPz160317'){  //舆论场
			ad_Calls = ad_dq_1+ad_cond;  //删除特殊广告位走默认
			ad_After='';
			ad_Pause='';
			ad_Banner='';
			ad_Call_h5 = ad_dq_hb3+ad_cond;
			ad_After_h5 = "";
			ad_Pause_h5 = "";
			ad_Banner_h5 = "";


		}else if(videoalbumId =="VIDArYI5AcZnRvHF2DOO8ZCk180917"){ //2018中秋晚会
			ad_Calls = ad_dq_1+ad_cond;
			ad_After = '';
			ad_Pause = ''
			ad_Banner = '';
			ad_Call_h5 = ad_dq_hb1+ad_cond;
			ad_After_h5 = "";
			ad_Pause_h5 = "";
			ad_Banner_h5 = "";

		}else if(videoalbumId == "VIDAjSkt0mAVBmQVUrkGfBQ5191009" || videoalbumId == "VIDAosDJZdM5UStoHLRUly8Z200108" || videoalbumId == "VIDAVVQozJ8Hp1DEshdVRD8h200115" || videoalbumId == "VIDA0mqx0aqsM80Odgnq1fKJ200115"){  //2020年春晚广告
			ad_Calls = ad_isHttps+"//galaxy.bjcathay.com/s?z=cathay&c=286&op=1&_page_group=dianbo&_subsite=chunwan" + "{!@#}" + ad_isHttps+"//galaxy.bjcathay.com/s?z=cathay&c=83&op=1&_page_group=dianbo&_subsite=chunwan";
			ad_After = '';
			ad_Pause = ''
			ad_Banner = '';
			ad_Call_h5 = "";
			ad_After_h5 = "";
			ad_Pause_h5 = "";
			ad_Banner_h5 = "";
			
		}else{
			//20200304点播通用前贴片广告位 改为两联
			ad_Calls = ad_dq_1+ad_cond;
			
			// + "{!@#}" + ad_dq_2+ad_cond
			// + "{!@#}" + ad_dq_3+ad_cond
			// + "{!@#}" + ad_dq_4+ad_cond
			// + "{!@#}" + ad_dq_5+ad_cond
			// + "{!@#}" + ad_dq_6+ad_cond;
			ad_After = ad_dh_1+ad_cond;
			
			
			ad_Pause = ad_dz+ad_cond;
			ad_Banner = ad_dx+ad_cond;
			//ad_Call_h5 = ad_dq_hb1+ad_cond;
			ad_Call_h5 =ad_dq_hb3+ad_cond;//20230831改成三联点播 20230927改成4联 20231101改成3联
			ad_After_h5 = ad_dh_hb1+ad_cond;
			ad_Pause_h5 = ad_dz_hb+ad_cond;
			ad_Banner_h5 = ad_dx_hb+ad_cond;

		}
	}
}

if(location.href.indexOf("dianshiju.cctv.com/special/hjdjc/")!=-1){  //电视剧台专题
	ad_Calls = "";
	ad_After = "";
	ad_Pause = "";
	ad_Banner = "";
	ad_Call_h5 = "";
	ad_After_h5 = "";
	ad_Pause_h5 = "";
	ad_Banner_h5 = "";
}
//2021中秋直播
if(location.href.indexOf("tv.cctv.com/special/2021zqwh") > -1 || location.href.indexOf("yy.cms.cntv.cn/html/shenhe/PAGEfXpWN63LLyDsLDMHOVoq210914") > -1){
	
	live_Ad_Calls = "";
	ad_Calls = "";
	ad_After = "";
	ad_Pause = "";
	ad_Banner = "";
}
//2022中秋直播
if(location.href.indexOf("tv.cctv.com/special/2022zqwh") > -1 || location.href.indexOf("yy.cms.cntv.cn/html/shenhe/PAGEvB601Gvq91k2pvjXh3RL220819") > -1){
	live_Ad_Calls = "";
	ad_Calls = "";
	ad_After = "";
	ad_Pause = "";
	ad_Banner = "";
	ad_Call_h5 = "";
	ad_After_h5 = "";
	ad_Pause_h5 = "";
	ad_Banner_h5 = "";
}
//2023中秋直播
if(location.href.indexOf("tv.cctv.com/special/2023zqwh") > -1 || location.href.indexOf("yy.cms.cntv.cn/html/shenhe/PAGEZnrkESmW9Z3J3348C7CG230906") > -1){
	live_Ad_Calls = ad_zq_hb1+"&_page_group=zhibo&_subsite=tvcctv&_CHANNEL=2023zqwh";
	ad_Calls = ad_dq_1+"&_page_group=dianbo&_subsite=tvcctv&_CHANNEL=2023zqwh";
	ad_After = "";
	ad_Pause = "";
	ad_Banner = "";
	ad_Call_h5 = ad_dq_hb2+"&_page_group=dianbo&_subsite=tvcctv&_CHANNEL=2023zqwh";
	ad_After_h5 = "";
	ad_Pause_h5 = "";
	ad_Banner_h5 = "";
}



//中纪委域名下广告清空
if(location.href.indexOf("v.ccdi.gov.cn")> -1){
	ad_Curtain = "";//拉幕
	ad_BG = "";//背景
	ad_Roll = "";//滚动(不再使用)
	ad_Call = "";//前贴
	call_code = "";//
	ad_Pause = "";//暂停
	ad_After = "";//后贴
	ad_Corner = "";//角标
	ad_Wenzi = "";//文字
	ad_Banner = "";//悬浮banner
	isPlay3rdAd = "";
	ad_Calls = "";//DFP前贴
	ad_NewCalls = "";//201911月新播放器前帖
	//直播 p2p2.0
	live_Ad_BG = "";  //背景
	live_Ad_Calls = "";  //前贴
	live_Ad_Pause = ""; //暂停
	live_Ad_Corner = ""; //角标
	live_Ad_Banner = ""; //悬浮banner
	live_Ad_Wenzi = ""; //文字
	//新版点播
	ad_Call_h5 = "";//前贴
	ad_Pause_h5 = "";//暂停
	ad_After_h5 = "";//后贴
	ad_Banner_h5 = "";//悬浮banner
	//移动端点播
	ad_Call_h5_m = "";
	ad_After_h5_m = "";
	ad_Pause_h5_m = "";
	ad_Banner_h5_m = "";
}
if(location.href == "zmys.cntv.cn" || location.href == "zmys.cntv.cn/" || location.href == "zmys.cntv.cn/index.shtml"){	//大型活动 > 寻找最美医生
	ad_Calls = "";
	ad_After = "";
	ad_Pause = "";
	ad_Banner = "";
	ad_Call_h5 = "";
	ad_After_h5 = "";
	ad_Pause_h5 = "";
	ad_Banner_h5 = "";
}

if(channelId == "opencla.cntv.cn"){	//中国公开课
	ad_Calls = "";
	ad_After = "";
	ad_Pause = "";
	ad_Banner = "";
	ad_Call_h5 = "";
	ad_After_h5 = "";
	ad_Pause_h5 = "";
	ad_Banner_h5 = "";
}

if(location.href.indexOf("kejiao.cctv.com/special/zmys")!=-1){		//科教台 > 2016年度—寻找最美医生 
	ad_Calls = "";
	ad_After = "";
	ad_Pause = "";
	ad_Banner = "";
	ad_Call_h5 = "";
	ad_After_h5 = "";
	ad_Pause_h5 = "";
	ad_Banner_h5 = "";
}
if(location.href.indexOf("kejiao.cctv.com/special/2017zmjs")!=-1){		//科教台 2017最美教师
	live_Ad_Calls = "";
	live_Ad_Pause = ""; //暂停
	live_Ad_Banner = ""; //悬浮banner
}

if(channelId == "shejian2"||channelId == "shejian2.cntv.cn"){				//舌尖2直播
	live_Ad_Calls = "";
	live_Ad_Pause = ""; //暂停
	live_Ad_Banner = ""; //悬浮banner
}
if(channelId == "ydyl.cctv.com"){//一带一路
	live_Ad_Calls = "";
	live_Ad_Pause = ""; //暂停
	live_Ad_Banner = ""; //悬浮banner
	
	ad_Calls = "";
	ad_After = "";
	ad_Pause = "";
	ad_Banner = "";
	ad_Call_h5 = "";
	ad_After_h5 = "";
	ad_Pause_h5 = "";
	ad_Banner_h5 = "";
	
}
if(channelId == "ent"||channelId == "ent.cntv.cn" || location.href.split("/")[2]=="ent.cctv.com"){				//综艺台直播
	live_Ad_Calls = "";
	live_Ad_Pause = ""; //暂停
	live_Ad_Banner = ""; //悬浮banner
	
	ad_Calls = "";
	ad_After = "";
	ad_Pause = "";
	ad_Banner = "";
	ad_Call_h5 = "";
	ad_After_h5 = "";
	ad_Pause_h5 = "";
	ad_Banner_h5 = "";
	if(itemid1 == "VIDEHRsj7z8DNMONfrRRFh8j200116" || itemid1 == "VIDEFTCiXxuLVKHMFUWdV38W200116" || itemid1 == "VIDEHjjWvTn6Ebk27FmhMX3s200116" || itemid1 == "VIDEablz2gxxlXVLiMhpGDG1200116" || itemid1 == "VIDE63nmSeiQhjRo7ojpqfKz200116" || itemid1 == "VIDEvVoqnX8u9wxV6fqUhlzK200117" || itemid1 == "VIDEYAuEvxDAVosmGg2CaRmh200117" || itemid1 == "VIDEzaCah46hpYtMlj1ykBC5200117" || itemid1 == "VIDE7XqjUbiXjxr5Cn4YeyQg200121" || itemid1 == "VIDEfuPsNyMbGbwbasU23VUi200121"){  //2020年春晚广告
		ad_Calls = ad_isHttps+"//galaxy.bjcathay.com/s?z=cathay&c=286&op=1&_page_group=dianbo&_subsite=chunwan" + "{!@#}" + ad_isHttps+"//galaxy.bjcathay.com/s?z=cathay&c=83&op=1&_page_group=dianbo&_subsite=chunwan";
	}
}



if(channelId == "CN04"||channelId == "sports.cntv.cn"){				//体育台直播
	live_Ad_Calls = "";
	live_Ad_Pause = ""; //暂停
	live_Ad_Banner = ""; //悬浮banner
	
}
if(channelId == "tv"||channelId == "tv.cntv.cn"){				//tv直播
	if(typeof(channelVDN)=='undefined'){
		var channelVDN="";
	}
	//20200327 直播前贴改为一联
	live_Ad_Calls = ad_zq_hb1+"&_page_group=zhibo&_subsite=tv&_CHANNEL="+channelVDN;
	live_Ad_Pause = ad_zz+"&_page_group=zhibo&_subsite=tv&_CHANNEL="+channelVDN; //暂停
	live_Ad_Banner = ad_zx+"&_page_group=zhibo&_subsite=tv&_CHANNEL="+channelVDN; //悬浮banner
}

if(location.href.split("/")[2]=="shaoer.cntv.cn"){	//少儿台
	if(location.href.indexOf("special/2015zyjq")!=-1){//最野假期首页
		video_CHANNEL = "2015zyjq";
	}
	ad_Calls = ad_dq_1+"&_page_group=dianbo&_subsite=shaoer&_CHANNEL="+video_CHANNEL+"&_sorts="+sorts;
	ad_After = ad_dh_1+"&_page_group=dianbo&_subsite=shaoer&_CHANNEL="+video_CHANNEL+"&_sorts="+sorts;
	ad_Pause = "";
	ad_Banner = "";
	ad_Call_h5 = ad_dq_hb1+"&_page_group=dianbo&_subsite=shaoer&_CHANNEL="+video_CHANNEL+"&_sorts="+sorts;
	ad_After_h5 = ad_dh_hb1+"&_page_group=dianbo&_subsite=shaoer&_CHANNEL="+video_CHANNEL+"&_sorts="+sorts;
	ad_Pause_h5 = "";
	ad_Banner_h5 = "";
}
if(channelId == "shaoer.cctv.com"){
	var shaoerlivechannel=''; 
	if(location.href.indexOf("special/2017kxdyk")!=-1){
		shaoerlivechannel = '2017kxdyk';
	}
	live_Ad_Calls = ad_zq_hb1+"&_page_group=zhibo&_subsite=shaoer&_CHANNEL="+shaoerlivechannel;
	live_Ad_Pause = ""; //暂停
	live_Ad_Banner = ""; //悬浮banner
}

if(location.href.indexOf("special/2015hyq")!=-1 || ( (typeof video_ad_primary_column_id  != 'undefined') && (video_ad_primary_column_id =='PAGE1363923525052974'|| video_ad_primary_column_id=='PAGE1436840431801221'))){	//2015汉语桥
	ad_Calls = "";
	ad_After = "";
	ad_Pause = "";
	ad_Banner = "";
	ad_Call_h5 = "";
	ad_After_h5 = "";
	ad_Pause_h5 = "";
	ad_Banner_h5 = "";
}
//以下频道没有视频广告
if(channelId == "wangzhan.cntv.cn"||channelId == "panda.cntv.cn"||channelId == "CN90" || channelId == "kr.cntv.cn"||location.href.split("/")[2] == "kazakh.cntv.cn"
||location.href.split("/")[2] == "uyghur.cntv.cn"||location.href.split("/")[2] == "arabic.cntv.cn"||location.href.split("/")[2] == "middleeast.cntv.cn"||location.href.split("/")[2] == "uyntv.cntv.cn"
||location.href.split("/")[2] == "kzntv.cntv.cn"||location.href.split("/")[2] == "www.ipraction.cn"||location.href.split("/")[2] == "zmysr.cntv.cn"||location.href.split("/")[2] == "nb.cntv.cn"||location.href.split("/")[2] == "hsly.cntv.cn"){
	//网展 wangzhan.cntv.cn //熊猫基地 padnda.cntv.cn //外语频道（哈语）CN90 kazakh.cntv.cn （维语） uyghur.cntv.cn （阿语） arabic.cntv.cn 中东本土网middleeast.cntv.cn 宁波台 红色旅游
	ad_Calls = "";
	ad_After = "";
	ad_Pause = "";
	ad_Banner = "";
	ad_Call_h5 = "";
	ad_After_h5 = "";
	ad_Pause_h5 = "";
	ad_Banner_h5 = "";
}

if(location.href.split("/")[2]=="www.docuchina.cn"){				//记录片频道 www.docuchina.cn
	ad_Calls = "";
	ad_After = "";
	ad_Pause = "";
	ad_Banner = "";
	ad_Call_h5 = "";
	ad_After_h5 = "";
	ad_Pause_h5 = "";
	ad_Banner_h5 = "";
}
if(location.href.split("/")[2]=="v.mos.gov.cn"){				//廉政政府网站 v.mos.gov.cn
	ad_Calls = "";
	ad_After = "";
	ad_Pause = "";
	ad_Banner = "";
	ad_Call_h5 = "";
	ad_After_h5 = "";
	ad_Pause_h5 = "";
	ad_Banner_h5 = "";
}
if(location.href.split("/")[2]=="1118.cctv.com"){				//1118.cctv.com
	ad_Calls = "";
	ad_After = "";
	ad_Pause = "";
	ad_Banner = "";
	ad_Call_h5 = "";
	ad_After_h5 = "";
	ad_Pause_h5 = "";
	ad_Banner_h5 = "";
}
if(location.href.indexOf("show?ad=4399dm")!=-1){//推广  页嵌入的播放器广告
	ad_Calls = "";
	ad_After = "";
	ad_Pause = "";
	ad_Banner = "";
	ad_Call_h5 = "";
	ad_After_h5 = "";
	ad_Pause_h5 = "";
	ad_Banner_h5 = "";
}
if(location.href.indexOf("f=360")!=-1){//推广  360
	ad_Calls ="";
	ad_After = "";
	ad_Pause = "";
	ad_Banner = "";
	ad_Call_h5 = "";
	ad_After_h5 = "";
	ad_Pause_h5 = "";
	ad_Banner_h5 = "";
}
if(location.href.indexOf("/content/previewVideo.action?tabVideo")!=-1 || location.href.indexOf("/content/previewArticle.action")!=-1 || location.href.indexOf("/producePage/previewPage")!=-1 || location.href.indexOf("/producePage/producePage")!=-1){ //维护页屏蔽广告 必须放最后
	ad_Calls = "";
	ad_After = "";
	ad_Pause = "";
	ad_Banner = "";
	ad_Call_h5 = "";
	ad_After_h5 = "";
	ad_Pause_h5 = "";
	ad_Banner_h5 = "";
}
ad_Calls = encodeURIComponent(ad_Calls);ad_After = encodeURIComponent(ad_After);ad_Pause = encodeURIComponent(ad_Pause);ad_Banner = encodeURIComponent(ad_Banner);
live_Ad_Calls = encodeURIComponent(live_Ad_Calls);live_Ad_Pause = encodeURIComponent(live_Ad_Pause);live_Ad_Banner = encodeURIComponent(live_Ad_Banner);
ad_Call_h5 = encodeURIComponent(ad_Call_h5);
ad_After_h5 = encodeURIComponent(ad_After_h5);
ad_Pause_h5 = encodeURIComponent(ad_Pause_h5);
ad_Banner_h5 = encodeURIComponent(ad_Banner_h5);
if(window.location.search.indexOf("adoff=1")!=-1){  //屏蔽
	ad_Call_h5_m = "";
	ad_After_h5_m = "";
	ad_Pause_h5_m = "";
	ad_Banner_h5_m = "";
}else{
	ad_Call_h5_m = encodeURIComponent(ad_Call_h5_m);
	ad_After_h5_m = encodeURIComponent(ad_After_h5_m);
	ad_Pause_h5_m = encodeURIComponent(ad_Pause_h5_m);
	ad_Banner_h5_m = encodeURIComponent(ad_Banner_h5_m);
}
// 零首页点入页面，不展示广告
var referrerStr = document.referrer,
	isAdShow = 0;

function GetRequest_code(){
	var url = location.search; 
	var theRequest = new Object();
	if (url.indexOf("?") != -1) {
		var str = url.substr(1);
		strs = str.split("&");
		for(var i = 0; i < strs.length; i ++) {
			theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);
		}
	}
	return theRequest;
}
var Request_code = new Object();
Request_code = GetRequest_code();
var isAdShow = Request_code['isAdShow'];
if ((referrerStr == 'www.cctv.com' || referrerStr == 'www.cctv.com/' || referrerStr.indexOf("www.cctv.com/index.shtml")!=-1) && isAdShow=='1'){
	//console.log("if");
	ad_Calls = '';
}
/*20220104审核页去除播放器广告*/
if(typeof(hdpropAd) == "undefined" || hdpropAd == null || hdpropAd == "") {
    hdpropAd = 1;
}
if(decodeURI(window.parent.location).indexOf("yy.cms.cntv.cn/CMS/content/auditPreviewVideo") == 7 || decodeURI(window.parent.location).indexOf("yy.cms.cntv.cn/CMS/content/auditPreviewVideo") == 8 || hdpropAd == 0){
	 ad_Curtain = "";//拉幕
	 ad_BG = "";//背景
	 ad_Roll = "";//滚动(不再使用)
	 ad_Call = "";//前贴
	 call_code = "";//
	 ad_Pause = "";//暂停
	 ad_After = "";//后贴
	 ad_Corner = "";//角标
	 ad_Wenzi = "";//文字
	 ad_Banner = "";//悬浮banner
	 isPlay3rdAd = "";
	 ad_Calls = "";//DFP前贴
	 ad_NewCalls = "";//201911月新播放器前帖
	//直播 p2p2.0
	 live_Ad_BG = "";  //背景
	 live_Ad_Calls = "";  //前贴
	 live_Ad_Pause = ""; //暂停
	 live_Ad_Corner = ""; //角标
	 live_Ad_Banner = ""; //悬浮banner
	 live_Ad_Wenzi = ""; //文字
	//新版点播
	 ad_Call_h5 = "";//前贴
	 ad_Pause_h5 = "";//暂停
	 ad_After_h5 = "";//后贴
	 ad_Banner_h5 = "";//悬浮banner
	//移动端点播
	 ad_Call_h5_m = "";
	 ad_After_h5_m = "";
	 ad_Pause_h5_m = "";
	 ad_Banner_h5_m = "";
}
//20221125下线悬浮banner，暂停广告

ad_Pause = "";//暂停
ad_Banner = "";//悬浮banner

live_Ad_Banner = ""; //悬浮banner
live_Ad_Pause = ""; //暂停
//20230320下线后贴广告
ad_Banner_h5 = "";//悬浮banner
ad_Pause_h5 = "";//暂停
ad_After_h5 = "";//后贴

ad_Pause_h5_m = "";
ad_Banner_h5_m = "";
ad_After_h5_m = "";//后贴